import mongoose from 'mongoose';

const careerApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/,
    },
    phone: {
        type: String,
        required: true,
    },
    resume: {
        type: String, // Store the file path or URL
        required: true,
    },
    coverLetter: {
        type: String,
        required: false,
    },
    subscribe: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Career = mongoose.model('CareerApplication', careerApplicationSchema);
export default Career;