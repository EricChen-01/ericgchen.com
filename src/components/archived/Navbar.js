import { AppBar, Typography,Toolbar,Grid} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {Link} from 'react-scroll';

const tabs = [
    // {
    //     name:'Home',
    // },
    {
        name:'About',
    },
    {
        name:'Projects',
    },
    {
        name:'Contact',
    }
]
function Navbar(){
    const theme = useTheme();
    return(
        <AppBar sx={{opacity:'87%'}} color='navbar' position='fixed'>
            <Toolbar>
                <Grid container justifyContent='center'>
                    {
                        tabs.map((tab) => (
                            <Grid item paddingLeft={5}>
                                <Typography className='no-highlight' variant='MenuItem' color='title.main' underline='none' sx={{'&:hover':{color:'#00b4d8'}}}>
                                    <Link activeClass='active' to={tab.name} spy={true} smooth={true}  duration={500}>{tab.name}</Link>
                                </Typography>
                            </Grid>
                        ))
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar