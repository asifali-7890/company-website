import { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box, Alert } from '@mui/material';
import { FaSpinner } from 'react-icons/fa';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);

    useEffect(() => {
        if (submissionStatus === 'success') {
            const timer = setTimeout(() => setSubmissionStatus(null), 5000);

            return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts or status changes
        }
    }, [submissionStatus]);

    const [validationErrors, setValidationErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });



    const validateField = (name, value) => {
        switch (name) {
            case 'fullName':
                return value.trim() ? '' : 'Full name is required';
            case 'email':
                if (!value) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Invalid email format';
                return '';
            case 'phone':
                if (value && !/^(\+\d{1,3}[- ]?)?\d{10}$/.test(value))
                    return 'Invalid phone number format';
                return '';
            case 'message':
                if (!value) return 'Message is required';
                if (value.length < 10 || value.length > 1000)
                    return 'Message must be between 10-1000 characters';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Validate field in real-time
        const error = validateField(name, value);
        setValidationErrors(prev => ({ ...prev, [name]: error }));
    };

    const isFormValid = () => {
        return Object.values(validationErrors).every(err => err === '') &&
            Object.values(formData).every(field => field !== '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) return;

        setIsLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) throw new Error('Submission failed');

            // Reset form on success
            console.log('response', (await response.json()).data);
            setFormData({ fullName: '', email: '', phone: '', message: '' });
            setValidationErrors({ fullName: '', email: '', phone: '', message: '' });
            setSubmissionStatus('success');
        } catch (error) {
            console.error('Submission error:', error);
            setSubmissionStatus('error');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Container maxWidth="sm" className='pb-4'>
            <Box sx={{ padding: '2rem', borderRadius: '8px', boxShadow: 3, backgroundColor: '#fff' }}>
                <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                    <span className='pt-12 block mb-5 text-3xl'>How can we help?</span>
                    <span className="button-85" style={{ fontFamily: '"Roboto", sans-serif', fontSize: '1.50rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                        Contact Us
                    </span>
                </Typography>

                <form onSubmit={handleSubmit} className='pt-6'>
                    <Grid container spacing={2}>
                        {/* Full Name Field */}
                        <Grid item xs={12}>
                            <TextField fullWidth
                                label="Full Name"
                                variant="outlined"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                error={!!validationErrors.fullName}
                                helperText={validationErrors.fullName}
                                sx={{ borderRadius: '8px' }}
                            />
                        </Grid>

                        {/* Email Field */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={!!validationErrors.email}
                                helperText={validationErrors.email}
                                sx={{ borderRadius: '8px' }}
                            />
                        </Grid>

                        {/* Phone Number Field */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                variant="outlined"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                error={!!validationErrors.phone}
                                helperText={validationErrors.phone}
                                sx={{ borderRadius: '8px' }}
                            />
                        </Grid>

                        {/* Message Field */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                name="message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                error={!!validationErrors.message}
                                helperText={validationErrors.message}
                                sx={{ borderRadius: '8px' }}
                            />
                        </Grid>

                        <Grid container spacing={2}>
                            {/* Submit Button */}
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    disabled={isLoading || !isFormValid()}
                                    sx={{
                                        padding: '1rem',
                                        marginTop: '1rem',
                                        fontWeight: 'bold',
                                        borderRadius: '8px',
                                        '&:hover': { backgroundColor: '#4CAF50' },
                                    }}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center justify-center">
                                            <FaSpinner className="animate-spin mr-2" /> Submitting...
                                        </div>
                                    ) : (
                                        "Submit"
                                    )}
                                </Button>
                            </Grid>
                            {/* Success Message */}
                            {/* {submissionStatus === 'success' && (
                                <Grid item xs={12}>
                                    <Alert severity="success" sx={{ mt: 1 }}>
                                        Message sent successfully!
                                    </Alert>
                                </Grid>
                            )} */}

                            {/* Error Message */}
                            {submissionStatus === 'error' && (
                                <Grid item xs={12}>
                                    <Alert severity="error" sx={{ mt: 1 }}>
                                        Failed to send message. Please try again.
                                    </Alert>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default ContactUs;