import Button from '@mui/material/Button';

/**
 * ThemedButton
 */
function ThemedButton(props) {
  const { sx, href, size, children, external, ...rest } = props;

  const defaultStyle = {
    '&:hover': {
      backgroundColor: 'primary.main',
    },
  };

  const mergedSx = Array.isArray(sx) ? [defaultStyle, ...sx,] : { ...defaultStyle, ...(sx || {}) };

  return (
    <Button color='secondary' href={href} variant="contained" size={size} sx={mergedSx} {...rest}>
        {children}
    </Button>
  );
}

export default ThemedButton;