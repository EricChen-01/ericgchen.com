import { Box, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";


function Footer(){
    return(
    <Box
      component="footer"
      py={2} // vertical padding
      px={4} // horizontal padding
      textAlign="center"
    >
      <Typography variant="body2" component="div" display="inline-flex" alignItems="center">
        <CopyrightIcon fontSize="small" />
        <Box ml={0.5}>Copyright 2026 Eric Chen. All rights reserved.</Box>
      </Typography>
    </Box>
    )
}

export default Footer;