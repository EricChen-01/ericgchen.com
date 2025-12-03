
import './App.css';
import {HashRouter,BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline, Box} from '@mui/material'
import {Hero, Navbar, About, Projects, Resume, Writing, Contact, Footer, NotFoundPage} from './components'
import {FrontPage,Footer as PortfolioFooter} from './components/NewPortfolio';
import portfolioTheme from './themes/PortfolioTheme';

const theme = createTheme({
  palette: {
    text:{
      main:'#2b2d42'
    },
    title:{
      main: '#D9D9D9'
    },
    white:{
      main:'#ebf2fa'
    },
    blue:{
      main: '#00b4d8',
      neutral: '#4D5C74'
    },
    background:{
      main: '#ebf2fa'
    },
    secondary_background:{
      main: '#4D5C74'
    },
    navbar:{
      main: '#0d1b2a'
    }
  },
  typography:{
    fontFamily:"Paytone One",
    MenuItem: {
      cursor:'pointer', 
      fontStyle:'normal',
      lineHeight:'39px', 
      fontWeight:'500',
      fontSize:'20px',
      textShadow: '0px 4px 4px #000000',
    },
    h1: {//title1
      fontSize:'64px', 
      fontWeight:600,
    },
    h2: {//title2
      fontSize:'32px', 
      fontWeight:600,
    },
    body1: {//main text
      fontSize:'1rem',
      fontWeight:400
    },
    body2: {// secondary text
      fontSize: '1rem',
      fontWeight:200
    }
  }
});


function Main(){
  return(
    <>
      <Navbar/>
      {/* <Hero/> */}
      <About/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </>
  )
}

function PortfolioMain(){
  return(
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // make container fill viewport
      }}
    >
      {/* Content grows to fill space */}
      <Box sx={{ flexGrow: 1 }}>
        <FrontPage />
      </Box>
      <PortfolioFooter />
    </Box>
  )
}

// routes
function MainRoutes() {
  return (
    <Routes>
      <Route path="/resume" element={<Resume />} />
      <Route path="/writing" element={<Writing />} />
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* MAIN SITE */}
        <Route
          path="/*"
          element={
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <MainRoutes />
              <Footer />
            </ThemeProvider>
          }
        />

        {/* PORTFOLIO SITE */}
        <Route
          path="/portfolio/*"
          element={
            <ThemeProvider theme={portfolioTheme}>
              <CssBaseline />
              <PortfolioMain />
            </ThemeProvider>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
