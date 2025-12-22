import React from 'react';
import { Divider } from '@mui/material';

/**
 * CenteredDivider
 * A small wrapper around MUI's Divider that centers itself horizontally
 * and provides a sensible responsive default width while forwarding all
 * props to the underlying Divider. You can override the default width
 * via the `width` prop or pass a custom `sx` to further style it.
 */
function CenteredDivider(props) {
  const { sx, width, ...rest } = props;

  // default width can be overridden by passing a width prop
  const defaultWidth = width ?? { xs: '90%', md: '60%' };

  // merge sx while ensuring our default width + centering (mx: 'auto') are applied
  const mergedSx = Array.isArray(sx)
    ? [{ width: defaultWidth, mx: 'auto' }, ...sx]
    : { width: defaultWidth, mx: 'auto', ...(sx || {}) };

  return <Divider sx={mergedSx} {...rest} />;
}

export default CenteredDivider;
