import { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, Box } from '@mui/material';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted');
        // You can add form submission logic here, e.g., send to an API
    };

    return (
        <Container maxWidth="sm" className='pb-4'>
            <Box sx={{ padding: '2rem', borderRadius: '8px', boxShadow: 3, backgroundColor: '#fff' }}>
                <Typography variant="h5" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                    <span className='pt-12 block mb-5 text-3xl '>How can we help?</span>
                    <span
                        className="button-85"
                        style={{
                            fontFamily: '"Roboto", sans-serif',
                            fontSize: '1.50rem',
                            letterSpacing: '0.5px',
                            textTransform: 'uppercase',
                        }}
                    >
                        Contact Us
                    </span>
                </Typography>

                <form onSubmit={handleSubmit} className='pt-6'>
                    <Grid container spacing={2}>
                        {/* Full Name Field */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                variant="outlined"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
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
                                required
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
                                required
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
                                required
                                sx={{ borderRadius: '8px' }}
                            />
                        </Grid>

                        {/* Submit Button */}
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{
                                    padding: '1rem',
                                    fontWeight: 'bold',
                                    borderRadius: '8px',
                                    '&:hover': { backgroundColor: '#4CAF50' },
                                }}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default ContactUs;
