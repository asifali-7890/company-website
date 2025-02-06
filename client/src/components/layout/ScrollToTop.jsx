import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Sleeker arrow icon
import { useTheme } from '@mui/material/styles';

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const theme = useTheme();

    // Show button when the user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Scroll the window to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            {visible && (
                <div
                    onClick={scrollToTop}
                    style={{
                        position: 'fixed',
                        bottom: '30px',
                        right: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent dark background
                        borderRadius: '50%',
                        cursor: 'pointer',
                        boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)', // Smooth shadow for depth
                        transition: 'all 0.3s ease-in-out',
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = theme.palette.primary.main; // Change color on hover
                        e.currentTarget.style.boxShadow = '0px 8px 20px rgba(0, 0, 0, 0.3)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Revert color after hover
                        e.currentTarget.style.boxShadow = '0px 8px 15px rgba(0, 0, 0, 0.2)';
                    }}
                >
                    <FaArrowUp size={30} color="white" />
                </div>
            )}
        </>
    );
};

export default ScrollToTop;
