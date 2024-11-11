import { useTheme } from '@mui/material/styles';
import { Box, Typography, Grid } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';
import downarrow from '../images/downarrow.png';
import { Link as RSLink } from 'react-scroll';
// import KUTE from 'kute.js';
import React, { useState, useEffect } from 'react';


function Hero() {
    const theme = useTheme();
    // const moto = [
    //     'Developer',
    //     'Creator',
    //     'Team Player'
    // ]
    
    // useEffect(() => {
    //     KUTE.fromTo('#blob1',{ path:'#blob1' },{ path: '#blob2' },{ repeat: 999, duration: 3000, yoyo: true },).start();
    // },[]);
      
    return (
        <Box sx={{position: 'relative', zIndex:'0'}} bgcolor='background.main'>
            {/* <Box sx={{position:'absolute', transform:'translate(25vw,10vh)',opacity:'0.8', zIndex:'-1'}}>
                <svg
                    id="visual"
                    viewBox="0 0 900 600"
                    width="900"
                    height="600"
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1">
                    <g transform="translate(450.4570664398844 307.91144081540983)">
                        <path id="blob1"
                        d="M131.3 -134.5C166 -96.6 187 -48.3 198.2 11.2C209.4 70.7 210.8 141.4 176.1 166.4C141.4 191.4 70.7 170.7 8.6 162.1C-53.5 153.5 -107 157 -147 132C-187 107 -213.5 53.5 -204.4 9.1C-195.4 -35.4 -150.7 -70.7 -110.7 -108.5C-70.7 -146.4 -35.4 -186.7 6.5 -193.2C48.3 -199.7 96.6 -172.3 131.3 -134.5"
                        fill="#bfddff"
                        ></path>
                    </g>
                    
                    <g transform="translate(483.30427957877026 273.4840275619577)" style={{visibility:'hidden'}}>
                        <path id="blob2"
                        d="M134.6 -143C161.8 -107.5 162.4 -53.7 153.2 -9.2C144 35.4 125 70.7 97.9 120.7C70.7 170.7 35.4 235.4 -9.2 244.5C-53.7 253.7 -107.5 207.5 -151.1 157.5C-194.8 107.5 -228.4 53.7 -224.9 3.5C-221.3 -46.7 -180.7 -93.3 -137 -128.8C-93.3 -164.3 -46.7 -188.7 3.5 -192.2C53.7 -195.7 107.5 -178.5 134.6 -143"
                        fill="#bfddff"
                        ></path>
                    </g>
                </svg>
            </Box> */}
            <Box>
                <Grid id='Home' container height='100vh' direction='column' justifyContent='space-between'>
                    <Box align='center' sx={{pt:30}}>
                        <Typography variant='h2' sx={{ textShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)', }} color='text.main'>Hello! my name is Eric</Typography>
                        {/* <Typography variant='h1' sx={{ textShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)', pt: 15 }}>
                            <span style={{ color: '#00b4d8' }}>
                                <Typewriter
                                    words={moto}
                                    loop={false}
                                    cursor
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </Typography> */}
                    </Box>  
                    <Box class='header-down-arrow' align='center'>
                        <RSLink activeClass='active' to='About' spy={true} smooth={true} duration={500}>
                            <img src={downarrow} width='50' />
                        </RSLink>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
}

export default Hero

