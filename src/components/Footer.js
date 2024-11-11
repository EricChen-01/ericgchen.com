import {Box,Typography,Grid} from '@mui/material'
import {Copyright} from '@mui/icons-material';

function Footer(){
    return(
        <Box bgcolor='background.main'>
            <Box padding={5}>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Typography>Eric Chen</Typography>
                    </Grid>
                </Grid>
                <Grid container justifyContent='center' alignItems='center' columnSpacing={1}>
                    <Copyright/>
                    <Grid item spacing={2}>
                        <Typography>Copyright 2023 Eric Chen. All rights reserved.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Footer