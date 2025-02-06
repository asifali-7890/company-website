import { Card, CardContent, Typography, Avatar, Box, Grid, useTheme } from '@mui/material';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';

import white4 from "../assets/images/white1.jpg";
import white2 from "../assets/images/white2.jpeg";
import white6 from "../assets/images/white3.jpg";
import white1 from "../assets/images/white4.jpg";
import white5 from "../assets/images/white5.jpeg";
import white3 from "../assets/images/white6.jpeg";

const StyledCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
    borderRadius: '1.5rem',
    boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 12px 40px rgba(31, 38, 135, 0.25)'
    }
}));




const ReviewCard = ({ name, position, review, rating, image }) => {
    const theme = useTheme();



    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <StyledCard>
                <CardContent sx={{ p: 4 }}>
                    <Box display="flex" alignItems="center" mb={3}>
                        <Avatar
                            sx={{
                                width: 56,
                                height: 56,
                                bgcolor: theme.palette.primary.main,
                                fontSize: '1.5rem',
                                fontWeight: 600
                            }}
                            src={image} // Use image URL here
                            alt={name} // Provide an alt text for accessibility
                            className='object-cover'
                        >
                            {/* Fallback text in case the image doesn't load */}
                            {name.charAt(0)}
                        </Avatar>
                        <Box sx={{ ml: 3 }}>
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.text.primary
                                }}
                            >
                                {name}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                }}
                            >
                                {position}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ position: 'relative' }}>
                        <FaQuoteLeft
                            style={{
                                color: theme.palette.primary.light,
                                fontSize: '2rem',
                                position: 'absolute',
                                top: -10,
                                left: -5,
                                opacity: 0.1
                            }}
                        />
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                lineHeight: 1.8,
                                position: 'relative',
                                zIndex: 1
                            }}
                        >
                            {review}
                        </Typography>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mt: 3,
                        color: theme.palette.warning.main
                    }}>
                        {[...Array(5)].map((_, index) => (
                            <FaStar
                                key={index}
                                style={{
                                    fontSize: '1.2rem',
                                    color: index < rating ? theme.palette.warning.main : theme.palette.grey[300]
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
            review:
                "BlueNext Technologies went above and beyond to create a stunning website that perfectly reflects my business. The team was highly professional and responsive, making the entire process smooth. I couldn’t be happier with the results!",
            rating: 5,
            image: white1 // Corrected to pass the actual image import
        },
        {
            name: "Oliver Benson",
            position: "Freelancer",
            review:
                "The website designed by BlueNext Technologies has significantly increased my online presence. The attention to detail and quality of work is unmatched. The team was always available and supportive throughout the project.",
            rating: 5,
            image: white2 // Corrected to pass the actual image import
        },
        {
            name: "Sophia Blake",
            position: "Entrepreneur",
            review:
                "I’m so grateful to BlueNext Technologies for delivering a user-friendly, beautifully designed website. It was a great experience working with such a knowledgeable and creative team. Highly recommend them!",
            rating: 5,
            image: white3 // Corrected to pass the actual image import
        },
        {
            name: "Lucas Carter",
            position: "E-commerce Store Owner",
            review:
                "Working with BlueNext Technologies has been a fantastic experience. They understood my needs perfectly and delivered a functional, visually appealing website. Their support throughout the process was invaluable!",
            rating: 4,
            image: white4 // Corrected to pass the actual image import
        },
        {
            name: "Isabella Moore",
            position: "Designer",
            review:
                "I am extremely satisfied with the website BlueNext Technologies created for me. Their design skills are top-notch, and they helped enhance my brand’s online presence significantly. I’m grateful for their dedication.",
            rating: 5,
            image: white5 // Corrected to pass the actual image import
        },
        {
            name: "Ethan Cooper",
            position: "Startup Founder",
            review:
                "BlueNext Technologies transformed my vision into reality with their web design expertise. The entire team was friendly, responsive, and truly cared about delivering a great product. Highly recommended!",
            rating: 5,
            image: white6 // Corrected to pass the actual image import
        },
    ];

    return (
        <Box sx={{
            py: 10,
            px: 3,
            background: 'radial-gradient(circle at center, #f8f9fa 0%, #ffffff 100%)'
        }}>
            <Box sx={{
                maxWidth: 1280,
                mx: 'auto',
                textAlign: 'center',
                mb: 8
            }}>
                <Typography
                    variant="overline"
                    sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 700,
                        letterSpacing: 2,
                        mb: 2,
                        display: 'block'
                    }}
                >
                    Client Testimonials
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        color: theme.palette.text.primary,
                        mb: 2
                    }}
                >
                    Voices of Satisfaction
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.text.secondary,
                        maxWidth: 600,
                        mx: 'auto',
                        fontSize: '1.1rem'
                    }}
                >
                    Discover what our clients say about their experience working with BlueNext Technologies
                </Typography>
            </Box>

            <Grid
                container
                spacing={4}
                sx={{
                    maxWidth: 1280,
                    mx: 'auto',
                    mt: 4
                }}
            >
                {reviews.map((review, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <ReviewCard {...review} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default CustomerReviews;