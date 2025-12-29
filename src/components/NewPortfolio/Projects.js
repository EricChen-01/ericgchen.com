import { Box, Grid, Typography} from "@mui/material";
import {CenteredDivider, HoverLink, ProjectCard} from '../../components';
import {projects} from '../Pages';
import { BorderColor } from "@mui/icons-material";

function Projects() {
    return (
        <Box>
            <Box>
                <Typography variant="h2" sx={{
                    textAlign: {xs: 'center', sm: 'left'}, 
                    pl: {xs: 0, sm: 6},
                }}
                >
                    Projects I've worked on</Typography>
            </Box>
            <Grid container spacing={3} sx={{px: { xs: 2, sm: 6 }, pt: 3, pb: 6}}>
                {
                    projects.map((project) => (
                        <Grid item xs={12} md={6} lg={4} xl={3}>
                            <ProjectCard 
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                tags={project.technologies}
                                image={project.image}
                                sx={{ maxWidth: { xs: '100%', sm: 520, md: 720 }, border:"5px solid", borderColor:"primary.main"}}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Projects;