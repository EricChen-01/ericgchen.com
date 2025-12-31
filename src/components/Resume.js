import {Box,Typography,Grid, List, ListItem,ListItemText, ListItemIcon, IconButton, Tooltip} from '@mui/material';
import { Home } from '@mui/icons-material';
import resume from '../images/Eric_Chen_Resume.pdf';
import { NavLink } from 'react-router-dom';

function Resume(){
    window.scrollTo(0, 0);

    return(
        <Box>
            <Box align='center'>
                <Typography className='no-highlight' variant='h1'>
                    Resume
                </Typography>
                <Tooltip title="Go home">
                    <IconButton component={NavLink} to='/' color="inherit">
                        <Home/>
                    </IconButton>
                </Tooltip>
            </Box>

            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" width="100%">
                <Box sx={{border: '5px solid', borderColor: 'primary.main'}} width={{ xs: '90%', sm: '90%', md: '90%', lg: '50%'}} height={{ xs: '80vh', md: '85vh' }} boxShadow={3} borderRadius={2} overflow="hidden">
                    <iframe src={resume} title="Resume" width="100%" height="100%" style={{ border: 'none' }} />
                </Box>
            </Box>

        </Box>
    )
}

export default Resume