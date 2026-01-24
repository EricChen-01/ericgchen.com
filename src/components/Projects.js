import { Box, Grid, Typography} from "@mui/material";
import {ProjectCard} from '.';
import projects from './Pages/Projects';

function Projects() {
    return (
        <Box>
            <Box>
                <Typography variant="h2" sx={{ textAlign: {xs: 'center', sm: 'left'},  pl: {xs: 0, sm: 6}, }} >
                    Highlights
                </Typography>
            </Box>
            <Grid container spacing={3} sx={{px: { xs: 2, sm: 5, md: 6, lg:6, xl: 6 }, pt: 3, pb: 6}}>
                {
                    projects.map((project) => (
                        <Grid key={project.title} item xs={12} md={6} lg={6} xl={4}>
                            <ProjectCard 
                                title={project.title}
                                subtitle={project.subtitle}
                                description={project.description}
                                tags={project.technologies}
                                links={[{ label: "Learn More", href: project.path, external: !project.isPath }, ...(project.links || [])]}
                                image={project.image}
                                sx={{ maxWidth: { xs: '100%', sm: '100%', md: 720, lg: 720, xl: 720}, border:"5px solid", borderColor:"primary.main", borderRadius:5, backgroundColor:"background.default"}}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default Projects;