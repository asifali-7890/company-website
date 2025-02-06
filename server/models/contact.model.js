import mongoose from 'mongoose'
import validator from 'validator'

const contactSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, 'Please provide your full name'],
        trim: true,
        maxlength: [100, 'Name cannot exceed 100 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email address']
    },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(\+\d{1,3}[- ]?)?\d{10}$/.test(v);
            },
            message: 'Please provide a valid phone number'
        }
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
        minlength: [10, 'Message should be at least 10 characters'],
        maxlength: [1000, 'Message cannot exceed 1000 characters']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Add compound index for better query performance
contactSchema.index({ email: 1, createdAt: -1 });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;