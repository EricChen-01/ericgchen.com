import React from 'react';
import { Box, IconButton, Link, Tooltip } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

/**
 * SimpleContactBar
 * Minimal contact bar with LinkedIn and Email links.
 * Usage: import and place where you want the links to appear. Use linkedInUrl and email props to add the links otherwise nothign will show up.
 */
function ContactBar({ linkedinUrl, email, sx }) {
  const mailto = email ? `mailto:${email}` : undefined;

  return (
    <Box
      component="nav"
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        py: 1,
        ...sx,
      }}
    >
      {linkedinUrl && (
        <Tooltip title="LinkedIn">
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <IconButton color="primary">
              <LinkedInIcon />
            </IconButton>
          </Link>
        </Tooltip>
      )}

      {mailto && (
        <Tooltip title="Email">
          <Link href={mailto} aria-label="Email">
            <IconButton color="primary">
              <EmailOutlinedIcon />
            </IconButton>
          </Link>
        </Tooltip>
      )}
    </Box>
  );
}

export default ContactBar;
