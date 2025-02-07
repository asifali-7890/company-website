import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/contact.model.js';

const router = express.Router();

// Configure transporter (example using Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail', // or use the SMTP settings of your provider
    auth: {
        user: 'gufraanquraishi@gmail.com',   // your email address (store in environment variables)
        pass: 'yqylsnfnlmfufbsi'    // your email password or app password
    }
});


router.post('/', async (req, res) => {
    try {
        const { fullName, email, phone, message } = req.body;

        const newContact = await Contact.create({
            fullName,
            email,
            phone,
            message
        });

        await newContact.save();

        // Send confirmation email to the user after Contact Us form submission
        const mailOptions = {
            from: '"BlueNext Technologies" <noreply@bluenext.com>', // sender address
            to: email, // recipient address (the user who submitted the form)
            subject: 'Contact Form Received', // Subject line
            text: `Hi ${fullName},

    Thank you for reaching out to BlueNext Technologies. We have received your message and will get back to you shortly.

    Here is a copy of your message:
    "${message}"

    Best regards,
    BlueNext Technologies Team`, // plain text body
            html: `<p>Hi ${fullName},</p>
        <p>Thank you for reaching out to <strong>BlueNext Technologies</strong>. We have received your message and will get back to you shortly.</p>
        <p><strong>Your message:</strong><br/>"${message}"</p>
        <p>Best regards,<br/>BlueNext Technologies Team</p>` // HTML body
        };

        // Use the transporter to send the email
        await transporter.sendMail(mailOptions);
        console.log('Contact confirmation email sent successfully.');


        res.status(201).json({
            success: true,
            data: newContact
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        });
    }
});


router.get('/asif', (req, res) => {
    console.log('Contact test route working');
    res.send('Contact integration working');
});

export default router;