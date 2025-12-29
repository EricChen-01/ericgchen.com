import {useTheme} from '@mui/material/styles';
import {Routes, Route, useNavigate} from 'react-router-dom';
import {Box,Typography,Grid, List, ListItem,ListItemText, ListItemIcon} from '@mui/material';
import {TopWave,BottomWave} from './custom';
import { GlassCard } from './custom/GlassmorphicCard';
import NavigationIcon from '@mui/icons-material/Navigation';
import {projects as p} from '../Pages'

const projects = [...p]

function navigation(navigate,location, isPath){
    if(isPath){
        navigate(location);
    }else{
        // console.log(`${location} is the string`);
        if(location){
            window.open(location, '_blank');
        }
    }
}

function Projects(){
    const theme = useTheme();
    const navigate = useNavigate();
    return(
        <Box align='center' pt={5} id='Projects' bgcolor='background.main'>
            <TopWave color='secondary_background'/>
            <Box pt='4rem' pb='4rem'>
                <Typography className='no-highlight' sx={{textShadow: '0px 6px 16px rgba(0, 0, 0, 0.1)'}}variant='h1' color='blue.main'>
                    Projects
                </Typography>
            </Box>
            <Grid container columnSpacing={1}>
            {
                projects.map((project) =>(
                    <Grid item xs={12} sm={12} md={6} height='600px' align='center' className='no-highlight'>
                        <GlassCard sx={{cursor:'pointer', transition: 'margin 0.2s ease-in-out',border:'1px solid gray','&:hover':{boxShadow:'10px 10px 15px rgba(30,30,30, 0.1)',marginTop:-1}}} minHeight='70%' maxWidth='550px'
                        onClick={() => navigation(navigate,`${project.path}`,project.isPath)}>
                            <Box p={1}>
                                <Typography variant='h2'>{project.title}</Typography>
                                <Typography variant='body1'>{project.description}</Typography>
                                <List>
                                    {
                                        project.technologies.map(tech => (
                                            <ListItem>
                                                <ListItemIcon>
                                                    <NavigationIcon sx={{transform:'rotate(90deg)'}}/>
                                                </ListItemIcon>
                                                <ListItemText primary={tech}/>
                                            </ListItem>
                                        ))
                                    }
                                </List>
                            </Box>
                        </GlassCard> 
                    </Grid>
                ))
            }
            </Grid>
        </Box>
    )
}

export default Projects
