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
                <Grid height='100%' container direction='row' alignItems='center'>
                        {/* Photo */}
                        <Grid item  xs={12} sm={12} md={6}>
                            <Box align='center'>
                                <img class='round' style={{border:'1px solid black'}} src={me} width='300px'/>
                            </Box>
                        </Grid>

                        {/* About Section */}
                        <Grid item px={6} xs={12} sm={12} md={6}>
                            <GlassCard padding border={1}>
                                <Container>
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
                        </Grid>
                </Grid>
            </Box>
            
        </Box>
    )
}

export default About