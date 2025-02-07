import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import CareerApplication from '../models/careers.model.js'; // Adjust the path as necessary
import fs from 'fs';
import nodemailer from 'nodemailer';

const router = express.Router();


// Configure transporter (example using Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail', // or use the SMTP settings of your provider
    auth: {
        user: 'gufraanquraishi@gmail.com',   // your email address (store in environment variables)
        pass: 'yqylsnfnlmfufbsi'    // your email password or app password
    }
});


// Configure Cloudinary with credentials
cloudinary.config({
    cloud_name: 'dqyo06eyy',
    api_key: '929756447444613',
    api_secret: '4dNACZUn_su6RtoreYNY4bGnma0'
});



// Configure multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });


const streamUpload = (buffer) => {
    return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            {
                resource_type: 'auto',
                format: 'pdf',
                folder: 'career-applications'
            },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        );
        stream.end(buffer);
    });
};




// POST route for submitting a career application
router.post('/career', upload.single('resume'), async (req, res) => {
    // console.log('Form submission successfully done...');
    try {
        const { fullName, email, phone, coverLetter, subscribe } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: 'Resume upload failed.' });
        }

        // Upload PDF to Cloudinary using the streamUpload helper
        // console.log('Uploading PDF', req.file.buffer);
        const result = await streamUpload(req.file.buffer);

        // Ensure that result.secure_url is available
        if (!result || !result.secure_url) {
            return res.status(500).json({ message: 'Cloudinary upload failed.' });
        }

        // Create a new career application with the returned Cloudinary URL
        const newApplication = new CareerApplication({
            fullName,
            email,
            phone,
            resume: result.secure_url,  // Use the secure URL from Cloudinary
            coverLetter,
            subscribe: subscribe === 'true'
        });

        await newApplication.save();


        // Send confirmation email to the applicant
        const mailOptions = {
            from: '"BlueNext Technologies" <noreply@bluenext.com>', // sender address
            to: email, // recipient address (the applicant)
            subject: 'Application Received', // Subject line
            text: `Hi ${fullName},

            Thank you for applying to BlueNext Technologies. We have received your application and will review it shortly.

            Best regards,
            BlueNext Technologies Team`, // plain text body
            html: `<p>Hi ${fullName},</p>
                <p>Thank you for applying to <strong>BlueNext Technologies</strong>. We have received your application and will review it shortly.</p>
               <p>Best regards,<br/>BlueNext Technologies Team</p>` // HTML body (optional)
        };

        // Use the transporter to send the email
        await transporter.sendMail(mailOptions);
        // console.log('Confirmation email sent successfully.');

        res.status(201).json({ data: newApplication, message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ message: 'Failed to submit application.' });
    }
});


// Test route
router.get('/asif', (req, res) => {
    // console.log('Cloudinary test route working');
    res.send('Cloudinary integration working');
});

export default router;