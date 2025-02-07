// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#4F46E5' },
        secondary: { main: '#EC4899' },
        background: {
            default: '#F8FAFC',
            paper: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h3: {
            fontWeight: 700,
            lineHeight: 1.2
        }
    }
});

export default theme;