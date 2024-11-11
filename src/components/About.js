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
            <TopWave color='background'/>
            <Box align='center'>
                <Typography className='no-highlight' sx={{textShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)'}} variant='h1' pt='7rem' pb='2rem' color='white.main'>
                    My Story
                </Typography>
            </Box>
            <Box pb='2rem'>
                <Grid height='100%' container direction='row' alignItems='center'>
                        <Grid item  xs={12} sm={12} md={6}>
                            <Box align='center'>
                                <img class='round' style={{border:'1px solid black'}} src={me} width='300px'/>
                            </Box>
                        </Grid>
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
                                        I'm a junior studying Computer Science at Stony Brook University. 
                                        I take great pleasure in designing projects that bring joy to people. 
                                        My current passion is web development, and this website represents my first foray into this exciting field. 
                                        While I'm currently focused on web development, I also enjoy exploring other areas of Computer Science, including back-end programming and software development.
                                    </Typography>
                                    <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} align='left' color='white.main'>
                                        click <Link class='no_underline' style={{color:'gold'}} to={"/resume"}>here</Link> here for my resume!
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