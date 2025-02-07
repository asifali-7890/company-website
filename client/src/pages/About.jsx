import { Box, Typography, Grid, Container, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import {
    RocketLaunch,
    Groups,
    DesignServices,
    Palette,
    Code,
    Public
} from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HowWeWork from './HowWeWork';
import ContactUs from './ContactUs';

const AboutUs = () => {
    const theme = useTheme();

    return (
        <Container maxWidth="lg" sx={{
            py: { xs: 12, md: 12 },
            background: theme.palette.background.default,
        }}>
            {/* Hero Section */}
            <Box textAlign="center" sx={{ mb: { xs: 6, md: 10 } }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h3" sx={{
                        fontWeight: 700,
                        color: 'text.primary',
                        mb: 3,
                        fontSize: { xs: '2rem', md: '2.5rem' }
                    }}>
                        Redefining Digital Excellence
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: 'text.secondary',
                        maxWidth: 800,
                        mx: 'auto',
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.7
                    }}>
                        At BlueNext Technologies, we craft bespoke digital solutions that drive measurable business results.
                        Our human-centered approach combines technical excellence with strategic thinking.
                    </Typography>
                </motion.div>
            </Box>

            {/* Methodology Section */}
            <Grid container spacing={4} sx={{ mb: 8 }}>
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box sx={{
                            p: 4,
                            borderRadius: 4,
                            background: theme.palette.background.paper,
                            boxShadow: theme.shadows[2],
                            position: 'relative',
                            overflow: 'hidden',
                            '&:hover': {
                                boxShadow: theme.shadows[4]
                            },
                            transition: 'all 0.3s ease'
                        }}>
                            <Box display="flex" alignItems="center" mb={3}>
                                <Box sx={{
                                    background: 'linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)',
                                    p: 1.5,
                                    borderRadius: '50%',
                                    mr: 3
                                }}>
                                    <RocketLaunch sx={{
                                        color: 'white',
                                        fontSize: '2rem',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'rotate(20deg)'
                                        }
                                    }} />
                                </Box>
                                <Typography variant="h4" sx={{
                                    fontWeight: 600,
                                    color: 'text.primary',
                                    fontSize: '1.5rem'
                                }}>
                                    Strategic Development Process
                                </Typography>
                            </Box>
                            <Typography variant="body1" sx={{
                                color: 'text.secondary',
                                lineHeight: 1.8,
                                pl: { md: 7 }
                            }}>
                                Our iterative development methodology ensures we deliver solutions that:
                            </Typography>
                            <List dense sx={{ pl: { md: 7 }, pt: 2 }}>
                                {[
                                    'Align perfectly with business objectives',
                                    'Adapt to evolving market needs',
                                    'Scale seamlessly with growth',
                                    'Deliver exceptional ROI'
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ px: 0, py: 0.5 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <Code sx={{
                                                color: theme.palette.primary.main,
                                                fontSize: '1.4rem'
                                            }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item}
                                            primaryTypographyProps={{
                                                variant: 'body1',
                                                color: 'text.primary'
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </motion.div>
                </Grid>

                {/* Value Proposition Section */}
                <Grid item xs={12} md={6}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Box sx={{
                            p: 4,
                            borderRadius: 4,
                            background: theme.palette.background.paper,
                            boxShadow: theme.shadows[2],
                            height: '100%',
                            '&:hover': {
                                boxShadow: theme.shadows[4]
                            },
                            transition: 'all 0.3s ease'
                        }}>
                            <Box display="flex" alignItems="center" mb={3}>
                                <Box sx={{
                                    background: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 100%)',
                                    p: 1.5,
                                    borderRadius: '50%',
                                    mr: 3
                                }}>
                                    <Public sx={{
                                        color: 'white',
                                        fontSize: '2rem',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'rotate(15deg)'
                                        }
                                    }} />
                                </Box>
                                <Typography variant="h4" sx={{
                                    fontWeight: 600,
                                    color: 'text.primary',
                                    fontSize: '1.5rem'
                                }}>
                                    Our Competitive Edge
                                </Typography>
                            </Box>

                            <List disablePadding>
                                {[
                                    {
                                        icon: <Groups sx={{ color: theme.palette.secondary.main }} />,
                                        title: 'Expert Team',
                                        text: 'Cross-functional specialists with 8+ years average experience'
                                    },
                                    {
                                        icon: <DesignServices sx={{ color: theme.palette.error.main }} />,
                                        title: 'Custom Solutions',
                                        text: 'Tailored architectures avoiding one-size-fits-all approaches'
                                    },
                                    {
                                        icon: <Palette sx={{ color: theme.palette.success.main }} />,
                                        title: 'Design Excellence',
                                        text: 'Award-winning UI/UX combining aesthetics with functionality'
                                    }
                                ].map((item, index) => (
                                    <ListItem key={index} sx={{ px: 0, py: 1.5 }}>
                                        <ListItemIcon sx={{
                                            minWidth: 44,
                                            mr: 2
                                        }}>
                                            <Box sx={{
                                                background: theme.palette.background.default,
                                                p: 1.5,
                                                borderRadius: 3,
                                                boxShadow: theme.shadows[1]
                                            }}>
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
                                                    lineHeight: 1.6
                                                }}>
                                                    {item.text}
                                                </Typography>
                                            }
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </motion.div>
                </Grid>
            </Grid>
            <HowWeWork />
            <ContactUs />
        </Container>
    );
};

export default AboutUs;