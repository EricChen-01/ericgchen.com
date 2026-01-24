import { NavLink } from 'react-router-dom';
import { Box, Grid, Typography, Stack, IconButton, Tooltip } from "@mui/material";
import { Brightness4, Brightness7} from '@mui/icons-material';
import {CenteredDivider, HoverLink, ThemedButton} from '.';
import me from '../images/me.png';
import { usePortfolioThemeMode } from "../themes/PortfolioTheme";

function FrontPage(){
    const {mode, setMode} = usePortfolioThemeMode();

    return(
        <Box>
            <Grid 
                container
                minHeight='100vh'
                justifyContent='space-evenly'
            >
                <Grid item xs={12}>
                    <Box align='center' pt={2} pb={{xs:2, s:0}}>
                        <Tooltip title="Toggle Dark mode">
                            <IconButton onClick={()=> setMode(mode === 'dark' ? 'light' : 'dark')} color="inherit">
                                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                            </IconButton>
                        </Tooltip>
                        <CenteredDivider width='50px'/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box align='center' pb={{xs:2, sm: 0}}>
                        <Typography variant='h1' color='text.primary' gutterBottom>
                        Hello! My name is{" "}   
                        <Typography component='span' variant='h1' color="primary">
                            Eric
                        </Typography>
                        </Typography>
                        <Typography variant='h6' color='text.secondary' gutterBottom>
                            Software Engineer
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} columnSpacing={{xs: 0, lg:10}} sx={{ px: { xs: 2, md: 0 } }}>
                        <Grid item xs={12} md={12} lg={6}>
                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center', lg: 'flex-end' } }}>
                                <Box
                                    sx={{
                                        width: { xs: 300, md: 340, lg: 360 },
                                        aspectRatio: '4 / 5',
                                        overflow: 'hidden',
                                        borderRadius: 5,
                                        border: '5px solid',
                                        borderColor: 'primary.main',
                                        flexShrink: 0,
                                    }}
                                >
                                <Box
                                    component="img"
                                    src={me}
                                    alt="Eric Chen"
                                    sx={{
                                    width: '100%',
                                    height: 'auto',
                                    transform: 'scale(2) translateY(-10%)', // zooms in 20%
                                    objectFit: 'cover', // zooms in and crops to fill box
                                    display: 'block',
                                    }}
                                />
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={12} lg={6}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: {xs:'center', lg:'flex-start'},
                                }}
                            >
                                <Box
                                    sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    }}
                                >
                                    <Typography variant="h4" sx={{ mb: 1 }}>
                                    Quick Links
                                    </Typography>

                                    <CenteredDivider sx={{ mb: 2 }} />

                                    <Stack spacing={1} alignItems="center">
                                        <ThemedButton
                                            component={NavLink}
                                            to="/resume"
                                            size="small"
                                            sx={{ mt: 1, width:"100%"}}
                                        >
                                            View Resume
                                        </ThemedButton>

                                        <HoverLink
                                            to="/writing"
                                            underline="none"
                                            color="text.secondary"
                                        >
                                            Writing — Notes & essays from college
                                        </HoverLink>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FrontPage;