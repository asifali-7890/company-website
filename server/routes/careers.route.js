import express from 'express';
import multer from 'multer';
import CareerApplication from '../models/careers.model.js'; // Adjust the path as necessary
import fs from 'fs';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = 'uploads/';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});

const upload = multer({ storage });

// POST route for submitting a career application
router.post('/career', upload.single('resume'), async (req, res) => {
    console.log('Form submission successfullu done...');
    try {
        const { fullName, email, phone, coverLetter, subscribe } = req.body;
        if (!req.file) {
            return res.status(400).json({ message: 'Resume upload failed.' });
        }

        const resume = req.file.path; // Get the file path from multer

        const newApplication = new CareerApplication({
            fullName,
            email,
            phone,
            resume,
            coverLetter,
            subscribe: subscribe === 'true', // Convert to boolean
        });

        await newApplication.save();
        res.status(201).json({ data: newApplication, message: 'Application submitted successfully!' });
    } catch (error) {
        console.error('Error submitting application:', error);
        res.status(500).json({ message: 'Failed to submit application.' });
    }
});

router.get('/asif', (req, res) => {
    console.log('THIS IS THE TESTING...');
    res.send('Test route working');
})


export default router;