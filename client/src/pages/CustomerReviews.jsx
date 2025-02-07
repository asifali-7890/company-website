
import { Card, CardContent, Typography, Avatar, Box, Grid, useTheme } from '@mui/material';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

// Import your images
import white1 from "../assets/images/white4.jpg";
import white2 from "../assets/images/white2.jpeg";
import white3 from "../assets/images/white6.jpeg";
import white4 from "../assets/images/white1.jpg";
import white5 from "../assets/images/white5.jpeg";
import white6 from "../assets/images/white3.jpg";

const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius: '12px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.1)'
    }
}));

const ReviewCard = ({ name, position, review, rating, image }) => {
    const theme = useTheme();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ height: '100%' }}
        >
            <StyledCard>
                <CardContent sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <Box display="flex" alignItems="center" mb={2.5}>
                            <Avatar
                                sx={{
                                    width: 48,
                                    height: 48,
                                    border: `2px solid ${theme.palette.primary.light}`,
                                    boxShadow: theme.shadows[1],
                                    '& .MuiAvatar-img': {
                                        objectFit: 'cover'
                                    }
                                }}
                                src={image}
                                alt={name}
                            />
                            <Box sx={{ ml: 2.5 }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                        lineHeight: 1.3
                                    }}
                                >
                                    {name}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        fontWeight: 500,
                                        display: 'block',
                                        lineHeight: 1.2
                                    }}
                                >
                                    {position}
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            position: 'relative',
                            mb: 2,
                            minHeight: 100
                        }}>
                            <FaQuoteLeft
                                style={{
                                    color: theme.palette.primary.light,
                                    fontSize: '1.75rem',
                                    position: 'absolute',
                                    top: -8,
                                    left: -4,
                                    opacity: 0.1
                                }}
                            />
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    position: 'relative',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 4,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }}
                            >
                                {review}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: 2
                    }}>
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                style={{
                                    fontSize: '1rem',
                                    color: index < rating ? theme.palette.warning.main : theme.palette.grey[300],
                                    marginRight: 4
                                }}
                            />
                        ))}
                    </Box>
                </CardContent>
            </StyledCard>
        </motion.div>
    );
};

const CustomerReviews = () => {
    const theme = useTheme();
    const reviews = [
        {
            name: "Emily Richards",
            position: "Business Owner",
            review: "BlueNext Technologies delivered beyond our expectations. Their attention to detail and commitment to quality resulted in a website that truly represents our brand. The team was professional and responsive throughout the project.",
            rating: 5,
            image: white1
        },
        {
            name: "Oliver Benson",
            position: "Startup Founder",
            review: "The digital transformation led by BlueNext Technologies has significantly boosted our online engagement. Their strategic approach and technical expertise were instrumental in achieving our business goals.",
            rating: 5,
            image: white2
        },
        {
            name: "Sophia Blake",
            position: "E-commerce Manager",
            review: "From concept to launch, BlueNext demonstrated exceptional professionalism. Our new platform has improved customer experience and increased conversions by 40% within the first month.",
            rating: 5,
            image: white3
        },
        {
            name: "Lucas Carter",
            position: "Marketing Director",
            review: "The SEO strategy implemented by BlueNext Technologies dramatically improved our search rankings. Their data-driven approach and regular reporting kept us informed every step of the way.",
            rating: 5,
            image: white4
        },
        {
            name: "Isabella Moore",
            position: "Creative Director",
            review: "BlueNext's design team created a visually stunning interface that perfectly aligns with our brand identity. The user experience is seamless across all devices.",
            rating: 5,
            image: white5
        },
        {
            name: "Ethan Cooper",
            position: "CTO",
            review: "The custom CMS solution developed by BlueNext has streamlined our content management process. Their technical expertise and post-launch support have been invaluable.",
            rating: 5,
            image: white6
        },
    ];

    return (
        <Box sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 2, sm: 3 },
            background: theme.palette.background.default,
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative gradient background */}
            <Box sx={{
                position: 'absolute',
                top: -200,
                right: -200,
                width: 600,
                height: 600,
                borderRadius: '50%',
                background: `radial-gradient(${theme.palette.primary.light}20 0%, ${theme.palette.primary.dark}00 70%)`,
            }} />

            <Box sx={{
                maxWidth: 1280,
                mx: 'auto',
                position: 'relative',
            }}>
                <Box sx={{
                    textAlign: 'center',
                    mb: { xs: 4, md: 6 },
                    px: { xs: 0, sm: 4 }
                }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            letterSpacing: 1.5,
                            mb: 1.5,
                            display: 'block',
                            fontSize: '0.75rem'
                        }}
                    >
                        Client Testimonials
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontSize: { xs: '1.75rem', sm: '2.25rem' },
                            lineHeight: 1.2
                        }}
                    >
                        Trusted by Industry Leaders
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: 680,
                            mx: 'auto',
                            fontSize: '1rem',
                            lineHeight: 1.6
                        }}
                    >
                        Discover why businesses choose BlueNext Technologies for their digital transformation needs
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={3}
                    sx={{
                        px: { xs: 0, sm: 2 }
                    }}
                >
                    {reviews.map((review, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={index}
                            sx={{
                                display: 'flex',
                                height: 'auto'
                            }}
                        >
                            <ReviewCard {...review} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default CustomerReviews;