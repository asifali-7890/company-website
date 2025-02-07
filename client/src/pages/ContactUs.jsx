import { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box, Alert } from '@mui/material';
import { FaSpinner } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [validationErrors, setValidationErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });

    useEffect(() => {
        if (submissionStatus === 'success') {
            const timer = setTimeout(() => setSubmissionStatus(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [submissionStatus]);

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
            // console.log('response', (await response.json()).data);
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
        <Container maxWidth="md" sx={{ py: 14 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Box sx={{
                    padding: { xs: 3, sm: 6 },
                    borderRadius: 4,
                    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.07)',
                    backgroundColor: 'background.paper',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 4,
                        background: 'linear-gradient(90deg, #4F46E5 0%, #EC4899 100%)'
                    }
                }}>
                    <Box textAlign="center" mb={5}>
                        <Typography variant="h3" sx={{
                            fontWeight: 700,
                            color: 'text.primary',
                            mb: 2,
                            fontSize: { xs: '1.75rem', sm: '2.25rem' }
                        }}>
                            Get in Touch
                        </Typography>
                        <Typography variant="body1" sx={{
                            color: 'text.secondary',
                            maxWidth: 600,
                            mx: 'auto',
                            fontSize: '1rem'
                        }}>
                            Our team is ready to help you with any inquiries
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Full Name"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    error={!!validationErrors.fullName}
                                    helperText={validationErrors.fullName}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            '& fieldset': { borderColor: '#E0E0E0' },
                                            '&:hover fieldset': { borderColor: '#4F46E5' },
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!validationErrors.email}
                                    helperText={validationErrors.email}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            '& fieldset': { borderColor: '#E0E0E0' },
                                            '&:hover fieldset': { borderColor: '#4F46E5' },
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Phone Number"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={!!validationErrors.phone}
                                    helperText={validationErrors.phone}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            '& fieldset': { borderColor: '#E0E0E0' },
                                            '&:hover fieldset': { borderColor: '#4F46E5' },
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    error={!!validationErrors.message}
                                    helperText={validationErrors.message}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: 2,
                                            '& fieldset': { borderColor: '#E0E0E0' },
                                            '&:hover fieldset': { borderColor: '#4F46E5' },
                                        }
                                    }}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    type="submit"
                                    disabled={isLoading || !isFormValid()}
                                    sx={{
                                        py: 2,
                                        borderRadius: 2,
                                        fontWeight: 600,
                                        background: 'linear-gradient(90deg, #4F46E5 0%, #EC4899 100%)',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
                                        },
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    {isLoading ? (
                                        <Box display="flex" alignItems="center">
                                            <FaSpinner className="animate-spin" style={{ marginRight: 8 }} />
                                            Submitting...
                                        </Box>
                                    ) : (
                                        'Send Message'
                                    )}
                                </Button>
                            </Grid>

                            {submissionStatus && (
                                <Grid item xs={12}>
                                    <Alert
                                        severity={submissionStatus}
                                        sx={{
                                            borderRadius: 2,
                                            border: '1px solid',
                                            borderColor: submissionStatus === 'success'
                                                ? 'success.light'
                                                : 'error.light'
                                        }}
                                    >
                                        {submissionStatus === 'success'
                                            ? 'Message sent successfully!'
                                            : 'Failed to send message. Please try again.'}
                                    </Alert>
                                </Grid>
                            )}
                        </Grid>
                    </form>
                </Box>
            </motion.div>
        </Container>
    );
};

export default ContactUs;