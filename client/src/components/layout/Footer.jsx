
import { Box, Typography, Grid, Container, Link } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';
import ScrollToTop from './ScrollToTop';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Grid container spacing={4}>
                    {/* About Us Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                            About Us
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, color: 'gray.400' }}>
                            BlueNext Technologies is dedicated to providing innovative digital solutions that help businesses thrive in the online world.
                        </Typography>
                    </Grid>

                    {/* Quick Links Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                            Quick Links
                        </Typography>
                        <Box sx={{ mt: 1 }}>
                            <Link href="/" color="inherit" underline="hover">Home</Link><br />
                            <Link href="/about" color="inherit" underline="hover">About Us</Link><br />
                            <Link href="/services" color="inherit" underline="hover">Services</Link><br />
                            <Link href="/portfolio" color="inherit" underline="hover">Portfolio</Link><br />
                            <Link href="/contact" color="inherit" underline="hover">Contact Us</Link>
                        </Box>
                    </Grid>

                    {/* Social Media Section */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
                            Follow Us
                        </Typography>
                        <Box sx={{ mt: 1, display: 'flex', gap: 2 }}>
                            <Link href="https://www.facebook.com" target="_blank" color="inherit">
                                <Facebook />
                            </Link>
                            <Link href="https://www.twitter.com" target="_blank" color="inherit">
                                <Twitter />
                            </Link>
                            <Link href="https://www.linkedin.com" target="_blank" color="inherit">
                                <LinkedIn />
                            </Link>
                            <Link href="https://www.instagram.com" target="_blank" color="inherit">
                                <Instagram />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                {/* Copyright Section */}
                <Box sx={{ mt: 4, textAlign: 'center', color: 'gray.400' }}>
                    <Typography variant="body2">
                        © {new Date().getFullYear()} BlueNext Technologies. All rights reserved.
                    </Typography>
                </Box>
            </Container>
            <ScrollToTop />
        </footer>
    );
};

export default Footer;