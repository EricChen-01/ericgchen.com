import Link from '@mui/material/Link';

/**
 * HoverLink
 * Wrapper around MUI Link that applies a theme-aware hover color while
 * preserving any incoming `sx` styles. Defaults to primary theme color on hover.
 */
function HoverLink(props) {
  const { sx, color, children, ...rest } = props;

  const baseColor = color ?? 'text.primary';

  const hoverRule = {
    color: baseColor,
    '&:hover': {
      color: 'primary.main',
    },
  };

  const mergedSx = Array.isArray(sx) ? [hoverRule, ...sx] : { ...hoverRule, ...(sx || {}) };

  return (
    <Link sx={mergedSx} {...rest}>
      {children}
    </Link>
  );
}

export default HoverLink;