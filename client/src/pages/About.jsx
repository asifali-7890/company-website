import { Box, Typography, Grid, Container } from '@mui/material';
import HowWeWork from './HowWeWork';
import {
    RocketLaunch,
    Stars,
    Groups,
    DesignServices,
    Palette
} from '@mui/icons-material';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ContactUs from './ContactUs';

const AboutUs = () => {
    return (
        <Container maxWidth="lg" sx={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
            <Typography variant="h3" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#2c3e50' }}>
                Why BlueNext Technologies?
            </Typography>

            <Typography variant="h6" align="center" sx={{ fontStyle: 'italic', color: '#7f8c8d', maxWidth: '800px', margin: '0 auto', paddingBottom: '1rem' }}>
                At BlueNext Technologies, we create exceptional websites that are custom-tailored to meet your business needs. Our team is dedicated to delivering responsive and functional websites, ensuring your online presence stands out.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 8, mb: 6, px: 2 }}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                            p: 4,
                            borderRadius: 4,
                            border: '1px solid rgba(52, 73, 94, 0.1)',
                            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.05)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 12px 40px rgba(31, 38, 135, 0.1)'
                            },
                            position: 'relative',
                            overflow: 'hidden',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                bgcolor: 'primary.main',
                                borderRadius: '4px 0 0 4px'
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Box sx={{
                                bgcolor: 'primary.main',
                                p: 1.5,
                                borderRadius: '50%',
                                mr: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <RocketLaunch sx={{ color: 'white', fontSize: '1.8rem' }} />
                            </Box>
                            <Typography variant="h4" component="h3" sx={{
                                fontWeight: 700,
                                color: 'text.primary',
                                letterSpacing: '-0.5px'
                            }}>
                                Our Methodology
                            </Typography>
                        </Box>
                        <Typography variant="body1" sx={{
                            color: 'text.secondary',
                            lineHeight: 1.8,
                            fontSize: '1.1rem',
                            pl: { xs: 0, sm: 6 }
                        }}>
                            We craft bespoke digital solutions that align perfectly with your business objectives.
                            Our template-free approach ensures every pixel reflects your brand identity while
                            maintaining optimal functionality and user experience.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
                            p: 4,
                            borderRadius: 4,
                            border: '1px solid rgba(52, 73, 94, 0.1)',
                            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.05)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: '0 12px 40px rgba(31, 38, 135, 0.1)'
                            }
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Box sx={{
                                bgcolor: 'secondary.main',
                                p: 1.5,
                                borderRadius: '50%',
                                mr: 2,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Stars sx={{ color: 'white', fontSize: '1.8rem' }} />
                            </Box>
                            <Typography variant="h4" component="h3" sx={{
                                fontWeight: 700,
                                color: 'text.primary',
                                letterSpacing: '-0.5px'
                            }}>
                                Why Partner With Us?
                            </Typography>
                        </Box>

                        <List sx={{ p: 0 }}>
                            {[
                                { icon: <Groups />, title: 'Expert Team', text: 'Seasoned designers and developers focused on bringing your vision to life' },
                                { icon: <DesignServices />, title: 'Custom Solutions', text: 'Tailored strategies that align with your business goals' },
                                { icon: <Palette />, title: 'Innovative Design', text: 'Cutting-edge interfaces combining aesthetics with intuitive interaction' }
                            ].map((item, index) => (
                                <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                                    <ListItemIcon sx={{ minWidth: 44 }}>
                                        <Box sx={{
                                            bgcolor: 'secondary.light',
                                            p: 1.3,
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                            className="mr-3"
                                        >
                                            {item.icon}
                                        </Box>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="subtitle1" sx={{
                                                fontWeight: 600,
                                                color: 'text.primary',
                                                mb: 0.5
                                            }}>
                                                {item.title}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography variant="body2" sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.6,
                                                fontSize: '1rem'
                                            }}>
                                                {item.text}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Grid>
            </Grid>
            <HowWeWork />
            <ContactUs />
        </Container>
    );
};

export default AboutUs;
