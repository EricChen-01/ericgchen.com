
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import {CssBaseline, Box} from '@mui/material'
import {Resume, Writing, NotFoundPage, CenteredDivider, FrontPage, Footer as PortfolioFooter, ContactBar, Projects as PortfolioProjects} from './components'
import { usePortfolioThemeMode, PortfolioThemeModeProvider } from './themes/PortfolioTheme';

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

function ResumeMain(){
  return(
    <>
    <Resume />
    <ContactBar linkedinUrl={linkedinUrl} email={email} />
    <CenteredDivider />
    <PortfolioFooter /></>
  )
}

function WritingMain(){
  return(
    <>
      <Writing />
      <ContactBar linkedinUrl={linkedinUrl} email={email} />
      <CenteredDivider />
      <PortfolioFooter />
    </>
  )
}

function PageNotFoundedMain(){
  return(
    <>
      <NotFoundPage />
      <ContactBar linkedinUrl={linkedinUrl} email={email} />
      <CenteredDivider />
      <PortfolioFooter />
    </>
  )
}

// routes
function PortfolioRoutes() {
  const { theme } = usePortfolioThemeMode();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<PortfolioMain />} />
        <Route path="/resume" element={<ResumeMain />} />
        <Route path="/writing" element={<WritingMain />} />
        <Route path="/*" element={<PageNotFoundedMain />} />
      </Routes>
    </ThemeProvider>
  )
}

function App() {
  return (
  <PortfolioThemeModeProvider>
    <BrowserRouter>
      <Routes>
        {/* PORTFOLIO SITE */}
        <Route
          path="/*"
          element={
            <PortfolioRoutes />
          }
        />
      </Routes>
    </BrowserRouter>
  </PortfolioThemeModeProvider>
  )
}

export default App;
