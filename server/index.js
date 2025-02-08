import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Contact from './models/contact.model.js';
import CareerRouter from './routes/careers.route.js';
import ContactRouter from './routes/contact.route.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;


// Middleware
app.use(express.json());

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

// ... existing code
// Routes
// app.use('/', (req, res) => {
//     res.send('Test route working');
// });

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.use('/api', CareerRouter)
app.use('/api/contact', ContactRouter)


// app.get('/api/career/test', (req, res) => {
//     res.send('Test route working in index');
// })


// app.post('/api/contact', async (req, res) => {
//     try {
//         const { fullName, email, phone, message } = req.body;

//         const newContact = await Contact.create({
//             fullName,
//             email,
//             phone,
//             message
//         });

//         res.status(201).json({
//             success: true,
//             data: newContact
//         });

//     } catch (error) {
//         res.status(400).json({
//             success: false,
//             error: error.message
//         });
//     }
// });





app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    // console.log(path.join(__dirname, '../client/dist/index.html'));
});