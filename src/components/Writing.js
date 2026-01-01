import {Box,Typography,Grid,IconButton, Tooltip} from '@mui/material';
import {NavLink} from 'react-router-dom'
import { Home } from '@mui/icons-material';
import {CenteredDivider} from '.'


function Writing(){
    window.scrollTo(0, 0);
    const documents = [
        {
            title: 'User Instructions',
            src: 'https://drive.google.com/file/d/14vrLmM6JV3bnBSolNSikQ_Qiul716vuN/preview',
        },
        {
            title: 'Press Release',
            src: 'https://drive.google.com/file/d/1bCzUm_w9PNqfksJYGQcotLgSZ51sz3a9/preview',
        },
        {
            title: 'Collaborative Presentation',
            src: 'https://drive.google.com/file/d/12S9BJf1JeXgFfUBSVyfszo_0B99ZZPFjqN4bjdKp7H4/preview',
        },
    ];

    return(
        <Box id='Writing' padding>
            <Box pb={15}>
                <Box align='center' pt={5}>
                    <Tooltip title="Go home">
                        <IconButton component={NavLink} to='/' color="inherit">
                            <Home/>
                        </IconButton>
                    </Tooltip>
                    <CenteredDivider width='50px' />
                </Box>
                <Box px={2}>
                    <Grid container spacing={4} justifyContent="center">
                        {documents.map(({ title, src }) => (
                            <Grid item xs={12} md={10} key={title}>
                                <Box mb={1}>
                                    <Typography variant="h5">{title}</Typography>
                                </Box>

                                <Box sx={{border: '5px solid', borderColor: 'primary.main'}} height={{ xs: '70vh', md: '80vh' }} display="flex" justifyContent="center" boxShadow={3} borderRadius={2} overflow="hidden">
                                    <iframe src={src} title={title} width="100%" height="100%" style={{ border: 'none' }} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default Writing