// theme.js
import { createTheme } from '@mui/material/styles';

const portfolioTheme = createTheme({
  palette: {
    background: {
      default: '#F1F0EA',   // light parchment background
      paper: '#FFFFFF',     // default paper
    },
    primary: {
      main: '#CAA8F5',      // soft purple accent
      contrastText: '#253237',
    },
    secondary: {
      main: '#5C6B73',      // muted blue-gray
      contrastText: '#F1F0EA',
    },
    text: {
      primary: '#253237',   // deep charcoal // Default Typograpy Color
      secondary: '#5C6B73', // muted gray
    },
  },
  typography: {
    fontFamily: 'Paytone One, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.9rem',
    },
  },
});

export default portfolioTheme;
