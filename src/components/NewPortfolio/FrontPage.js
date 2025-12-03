import { Box, Grid, Typography } from "@mui/material";
import me from '../../images/me.png';

function FrontPage(){
    return(
        <Box>
            <Grid 
                container
                height='100vh'
                direction='column'
                justifyContent='space-around'
            >
                <Box align='center' sx={{pt:30}} border='1px solid red'>
                    <Typography variant='h2'color='text.primary'>
                    Hello! My name is Eric
                    </Typography>
                    <Typography variant='subtitle1'>
                        Software Engineer
                    </Typography>
                </Box>
                <Box align='left' border='1px solid blue'>
                    <img className='round' style={{border:'1px solid black', maxWidth: '300px', width: '100%', height: 'auto'}} src={me} alt='Eric Chen'/>
                </Box>
            </Grid>
        </Box>
    )
}

export default FrontPage;