import {useTheme} from '@mui/material/styles';
import {Box,Typography, Grid,Link} from '@mui/material';
import {TopWave,BottomWave} from './custom';
import { GlassCard } from './custom/GlassmorphicCard';
import {LinkedIn,GitHub,Email} from '@mui/icons-material';
function Contact(){
    const theme = useTheme();
    const goTo = (link) => {
        window.open(link, '_blank');
    }
    return(
        <Box id='Contact' bgcolor='secondary_background.main'>
            <TopWave color='background'/>
            <Box pt='4rem' pb='4rem' align='center'>
                <Typography className='no-highlight' sx={{textShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)'}} variant='h1' color='white.main'>Contact</Typography>  
            </Box>
            <Box pt={10} pb={60}>
                <Grid container rowSpacing={2} columnSpacing={{xs:1,sm:2,md:3}}>
                    <Grid item align='center' xs={12} sm={12} md={12} lg={4}>
                        <GlassCard onClick={()=>{goTo('https://www.linkedin.com/in/erxcchen/')}} className='pointer-hover' padding  width={{xs:'18rem', sm:'23rem'}}>
                            <Grid container className='no-highlight'>
                                <Grid item xs={12}>
                                    <LinkedIn sx={{fontSize:120}} color='blue'/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align='center' sx={{fontSize:'3rem'}} color='white.main'>LinkedIn</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align='center' color='white.main' variant='body1' >Visit my LinkedIn!</Typography>
                                </Grid>
                            </Grid>
                        </GlassCard>
                    </Grid>

                    <Grid item align='center' xs={12} sm={12} md={12} lg={4}>
                        <GlassCard onClick={() => {goTo('https://github.com/EricChen-01')}} className='pointer-hover' padding  width={{xs:'18rem', sm:'23rem'}}>
                            <Grid container className='no-highlight'>
                                <Grid item xs={12}>
                                    <GitHub sx={{fontSize:120}} color='blue'/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align='center' sx={{fontSize:'3rem'}} color='white.main'>GitHub</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align='center' color='white.main' variant='body1' >See latest projects!</Typography>
                                </Grid>
                             </Grid>
                        </GlassCard>
                    </Grid>

                    <Grid item align='center' xs={12} sm={12} md={12} lg={4}>
                        <GlassCard onClick={() => window.location = 'mailto:yourmail@domain.com'} className='pointer-hover' padding width={{xs:'18rem', sm:'23rem'}}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Email sx={{fontSize:120}} color='blue'/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align='center' sx={{fontSize:'3rem'}} color='white.main'>Email</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align='center' color='white.main' variant='body1' >Contact me: echen3225@gmail.com</Typography>
                                </Grid>
                            </Grid>
                        </GlassCard>
                    </Grid>
                </Grid>
            </Box>
            <BottomWave color='background'/>
        </Box>
    )
}

export default Contact