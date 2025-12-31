import { NavLink } from 'react-router-dom';
import { Box, Grid, Typography, Stack, Switch, Button, IconButton, Tooltip } from "@mui/material";
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
                justifyContent='space-around'
                alignItems='center'
            >
                <Grid item xs={12}>
                    <Box align='center'>
                        <Tooltip title="Toggle Dark mode">
                            <IconButton onClick={()=> setMode(mode === 'dark' ? 'light' : 'dark')} color="inherit">
                                {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                            </IconButton>
                        </Tooltip>
                        <CenteredDivider width='50px'/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box align='center' sx={{pt:10}}>
                        <Typography variant='h2' color='text.primary'>
                        Hello! My name is Eric
                        </Typography>
                        <Typography variant='subtitle1'>
                            Software Engineer
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2} sx={{ px: { xs: 2, md: 0 } }}>
                        <Grid item xs={12} md={12} lg={6}>
                            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'center', lg: 'flex-start'} }}>
                                <Box
                                    component="img"
                                    src={me}
                                    alt="Eric Chen"
                                    sx={{
                                        borderRadius: 2,
                                        border: '5px solid',
                                        borderColor: 'primary.main',
                                        width: { xs: '280px', md: '300px', lg: '340px' },
                                        maxWidth: '100%',
                                        height: 'auto',
                                        display: 'block',
                                    }}
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={12} lg={6}>
                            <Box sx={{ width: { xs: '100%', md: 'auto' }, textAlign: { xs: 'center', md: 'center' } }}>
                                <Typography variant="h6" sx={{ mb: 1 }}>Quick Links</Typography>
                                <CenteredDivider sx={{ mb: 2 }}/>

                                <Stack spacing={1} sx={{ alignItems: { xs: 'center', md: 'center' }}}>
                                    <ThemedButton component={NavLink} to="/resume" size='small' sx={{ mt: 1 }}>
                                    View Resume
                                    </ThemedButton>

                                    <HoverLink to="/writing" underline="none" color="text.secondary">Writing — Notes & essays from college</HoverLink>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default FrontPage;