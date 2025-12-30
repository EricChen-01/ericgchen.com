
import './App.css';
import {HashRouter,BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import {ThemeProvider, createTheme } from '@mui/material/styles';
import {CssBaseline, Box} from '@mui/material'
import {Resume, Writing, NotFoundPage, CenteredDivider, FrontPage, Footer as PortfolioFooter, ContactBar, Projects as PortfolioProjects} from './components'
import portfolioTheme from './themes/PortfolioTheme';

const linkedinUrl = "https://www.linkedin.com/in/erxcchen/";
const email = "echen3225@gmail.com";


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
        <FrontPage/>
        <PortfolioProjects/>
        <ContactBar linkedinUrl={linkedinUrl} email={email}/>
      </Box>
      <CenteredDivider variant='middle' />
      <PortfolioFooter />
    </Box>
  )
}

// routes
function PortfolioRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioMain />} />
      <Route path="/resume" element={<><Resume /><PortfolioFooter /></>} />
      <Route path="/writing" element={<><Writing /><PortfolioFooter /></>} />
      <Route path="/*" element={<><NotFoundPage /><PortfolioFooter /></>} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* PORTFOLIO SITE */}
        <Route
          path="/*"
          element={
            <ThemeProvider theme={portfolioTheme}>
              <CssBaseline />
              <PortfolioRoutes />
            </ThemeProvider>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App;
