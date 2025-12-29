import {useTheme} from '@mui/material/styles';
import {Box,Typography,Grid} from '@mui/material';
import {Link} from 'react-router-dom'


function Writing(){
    const theme = useTheme();
    window.scrollTo(0, 0);

    return(
        <Box id='Writing' height='100%' width='100%' padding bgcolor='secondary_background.main'>
            <Box pb={15}>
                <Box align='center'>
                    <Typography className='no-highlight' sx={{textShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)'}} variant='h1' color='white.main'>
                        Writing
                    </Typography>
                </Box>
                <Box align='center'>
                    <Link class='no_underline' style={{color:'gold'}} to={'/'}> click me to go home </Link>
                </Box>
                <Box align='center' padding={2}>
                    <Grid container justifyContent='center' width='90%'>
                        <Grid item xs={12} height='800px' >
                            <Box padding>
                                <Typography>
                                    User instructions
                                </Typography>
                            </Box>
                            <Box height='90%'>
                                <iframe src="https://drive.google.com/file/d/14vrLmM6JV3bnBSolNSikQ_Qiul716vuN/preview" width='50%' height='100%'></iframe>
                            </Box>
                        </Grid>
                        <Grid item xs={12} height='800px'>
                            <Box padding>
                                <Typography>
                                    Press Release
                                </Typography>
                            </Box>
                            <Box height='90%'>
                                <iframe  src="https://drive.google.com/file/d/1bCzUm_w9PNqfksJYGQcotLgSZ51sz3a9/preview" width="50%" height="100%"></iframe>
                            </Box>
                        </Grid>
                        <Grid item xs={12} height='800px'>
                            <Box padding>
                                <Typography>
                                    Collaborative Presentation
                                </Typography>
                            </Box>
                            <Box height='90%'>
                                <iframe  src="https://drive.google.com/file/d/12S9BJf1JeXgFfUBSVyfszo_0B99ZZPFjqN4bjdKp7H4/preview" width="50%" height="100%"></iframe>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Writing