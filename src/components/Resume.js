import {Box,Typography, IconButton, Tooltip} from '@mui/material';
import { Home } from '@mui/icons-material';
import resume from '../images/Eric_Chen_Resume.pdf';
import { NavLink } from 'react-router-dom';
import { CenteredDivider }  from '.';

function Resume(){
    window.scrollTo(0, 0);

    return(
        <Box>
            <Box align='center' pt={5}>
                <Tooltip title="Go home">
                    <IconButton component={NavLink} to='/' color="inherit">
                        <Home/>
                    </IconButton>
                </Tooltip>
                <CenteredDivider width='50px' />
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