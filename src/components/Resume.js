import {useTheme} from '@mui/material/styles';
import {Box,Typography,Grid, List, ListItem,ListItemText, ListItemIcon} from '@mui/material';
import {TopWave,BottomWave} from './custom';
import NavigationIcon from '@mui/icons-material/Navigation';
import resume from '../images/Eric_Chen_Resume.pdf';
import { GlassCard } from './custom/GlassmorphicCard';
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import KUTE from 'kute.js';

function Resume(){
    const theme = useTheme();
    window.scrollTo(0, 0);

    return(
        <Box id='Resume' height='100%' bgcolor='secondary_background.main'>
            <Box pd={15} sx={{position:'relative'}}>
                <Box align='center'>
                    <Typography className='no-highlight' sx={{textShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)'}} variant='h1' color='white.main'>
                        Resume
                    </Typography>
                    <Box align='center'>
                        <Link class='no_underline' style={{color:'gold'}} to={'/'}> click me to go home </Link>
                    </Box>
                </Box>

                <Box align='center' height='100%' width='100%'>
                    <Box height="1250px" width={{xs:'90vw', sm:'90vw', md:'50%'}}border={1}>
                        <iframe src={resume} width="100%" height="100%"></iframe>
                    </Box>
                </Box>
                
            </Box>
            <BottomWave color='background'/>
        </Box>
    )
}

export default Resume