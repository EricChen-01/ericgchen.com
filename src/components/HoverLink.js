import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

/**
 * HoverLink
 * Wrapper around MUI Link that applies a theme-aware hover color while
 * preserving any incoming `sx` styles. Defaults to primary theme color on hover.
 */
function HoverLink(props) {
  const { sx, to, color, children, ...rest } = props;

  const baseColor = color ?? 'text.primary';
  const hoverRule = {
    color: baseColor,
    '&:hover': {
      color: 'primary.main',
    },
  };

  const mergedSx = Array.isArray(sx) ? [hoverRule, ...sx] : { ...hoverRule, ...(sx || {}) };

  const NavLinkProps = to
  ? { component: NavLink, to }
  : {};

  return (
    <Link sx={mergedSx} {...NavLinkProps} {...rest}>
      {children}
    </Link>
  );
}

export default HoverLink;