// theme.js
import { createTheme } from '@mui/material/styles';
import React, { createContext, useState, useMemo, useContext, useEffect } from 'react';

// Portfolio theme definition
const portfolioTheme = (mode = 'light') => createTheme({
  palette: {
    mode, // 'light' or 'dark'
    background: {
      default: mode === 'light' ? '#F1F0EA' : '#121212',   // light parchment background
      paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',     // default paper
    },
    primary: {
      main: mode === 'light' ? '#1050A4' : '#70adcbff',     
      contrastText: mode === 'light' ? '#253237' : '#F1F0EA',
    },
    secondary: {
      main: mode === 'light' ? '#5C6B73' : '#607da4ff',   
      contrastText: mode === 'light' ? '#F1F0EA' : '#363b3dff',
    },
    text: {
      primary: mode === 'light' ? '#253237' : '#d9d9d9ff',   // Default Typograpy Color
      secondary: mode === 'light' ? '#5C6B73' : '#a1a1a1ff', 
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


// Context to provide theme mode context
const PortfolioThemeModeContext = createContext();

const determineDefaultMode = () => {
  if (typeof window === "undefined") return "light";

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
// Provider to provide the mode, setMode, and the theme
export const PortfolioThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(determineDefaultMode);

  const theme = useMemo(() => portfolioTheme(mode), [mode]);

  return (
    <PortfolioThemeModeContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </PortfolioThemeModeContext.Provider>
  );
};

// Custom hook to use the Portfolio Theme Mode Context
export const usePortfolioThemeMode = () => useContext(PortfolioThemeModeContext);

export default portfolioTheme;
