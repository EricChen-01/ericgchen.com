import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';


function Hero() {
    const theme = useTheme();
  
    return (
        <Box sx={{position: 'relative', zIndex:'0'}} bgcolor='background.main'>
            <Box>
                <Grid id='Home' container height='100vh' direction='column' justifyContent='space-between'>
                    <Box align='center' sx={{pt:30}}>
                        <Typography variant='h2' sx={{ textShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)', }} color='text.main'>Hello! my name is Eric</Typography>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}

export default Hero

