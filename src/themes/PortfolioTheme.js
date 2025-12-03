// theme.js
import { createTheme } from '@mui/material/styles';

const portfolioTheme = createTheme({
  palette: {
    background: {
      default: '#F4F1DE',   // light creamy background
      paper: '#FFFFFF',     // default paper
    },
    primary: {
      main: '#CAA8F5',      // soft purple accent
      contrastText: '#253237',
    },
    secondary: {
      main: '#5C6B73',      // muted blue-gray
      contrastText: '#F4F1DE',
    },
    text: {
      primary: '#253237',   // deep charcoal
      secondary: '#5C6B73', // muted gray
    },
  },
  typography: {
    fontFamily: 'Paytone One, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 600,
      color: '#253237',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#253237',
    },
    body1: {
      fontSize: '1rem',
      color: '#253237',
    },
    body2: {
      fontSize: '0.9rem',
      color: '#5C6B73',
    },
  },
});

export default portfolioTheme;
