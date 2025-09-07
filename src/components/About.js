import {useTheme} from '@mui/material/styles';
import {Box,Typography,Container,Grid,List,ListItem,ListItemText} from '@mui/material';
import {Link} from 'react-router-dom'
import {TopWave,BottomWave} from './custom';
import me from '../images/me.png';
import { GlassCard } from './custom/GlassmorphicCard';
import { color } from '@mui/system';


function About(){
    const theme = useTheme();
    return(
        <Box id='About' bgcolor='secondary_background.main'>
            {/* <TopWave color='background'/> */}
            <Box align='center'>
                <Typography className='no-highlight' sx={{textShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)'}} variant='h1' pt='7rem' pb='2rem' color='white.main'>
                    About Me
                </Typography>
            </Box>
            <Box pb='2rem'>
                <Grid height='100%' container direction='row' alignItems='stretch' sx={{ rowGap: { xs: 4, sm: 4, md: 4 }}}>
                        {/* Photo */}
                        <Grid item  xs={12} sm={12} md={12} lg={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                 <img className='round' style={{border:'1px solid black', maxWidth: '300px', width: '100%', height: 'auto'}} src={me} alt='Eric Chen'/>
                             </Box>
                         </Grid>

                         {/* About Section */}
                         <Grid item px={0} xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{
                                width: { xs: 'calc(100% - 32px)', sm: '600px' },
                                maxWidth: '550px',
                                margin: 0,
                                px: { xs: 2, sm: 0 },
                                display: 'flex',
                            }}>
                                <GlassCard padding style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <Container sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                         <Typography variant='h1' align='left' color='white.main'>
                                             Hello!
                                         </Typography>
                                         <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} align='left' color='white.main'>
                                             I'm Eric!
                                         </Typography>
                                         <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} align='left' color='white.main'>
                                         I recently graduated from Stony Brook University with a B.S. in Computer Science. I enjoy working on projects and I have experience working in different areas including backend, frontend, AI driven tools, and even infrastructure as code.
                                         Outside of tech, I enjoy learning Japanese.
                                         </Typography>
                                    </Container>
                                </GlassCard>
                            </Box>
                         </Grid>
                </Grid>
            </Box>
            
        </Box>
    )
}

export default About