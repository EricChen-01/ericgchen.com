import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Box,
  Typography,
  Stack,
  Chip,
  Button,
  Link as MuiLink,
} from '@mui/material';

/**
 * ProjectCard
 * A simple, theme-friendly project card component.
 * Props:
 * - title: string
 * - subtitle: string (optional)
 * - description: string
 * - image: src string (optional)
 * - tags: string[] (optional)
 * - links: { label, href, external }[] (optional)
 * - sx: sx overrides
 */
function ProjectCard({
  title,
  subtitle,
  description,
  image,
  tags = [],
  links = [],
  sx,
  children,
  ...rest
}) {
  const mergedSx = Array.isArray(sx) ? sx : { ...(sx || {}) };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row', md: 'row'},
        height: '100%',
        borderRadius: 2,
        boxShadow: 1,
        ...mergedSx,
      }}
      {...rest}
    >
      {image && (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: { xs: '100%', sm: 140, md: 160 },
            maxWidth: 180,
            height: 'auto',
            display: 'block',
            flexShrink: 0,
            maxHeight: { xs: 220, md: 'none' },
            objectFit: 'contain',
          }}
          border='1px solid red'
        />
      )}

      <CardContent sx={{ flex: 1, p: 2,border: '1px solid green' }}>
        {title && (
          <Typography variant="h6" component="h3" gutterBottom>
            {title}
          </Typography>
        )}

        {subtitle && (
          <Typography variant="subtitle2" color="text.secondary">
            {subtitle}
          </Typography>
        )}

        {description && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {description}
          </Typography>
        )}

        {(tags.length > 0 || links.length > 0) && (
          <Box sx={{ px: 'auto'}} border='1px solid blue'>
            {tags.length > 0 && (
              <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: links.length > 0 ? 1 : 0 }}>
                {tags.map((t) => (
                  <Chip key={t} label={t} size="small" />
                ))}
              </Stack>
            )}

            {links.length > 0 && (
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {links.map((l) => (
                  l.external ? (
                    <Button key={l.href} size="small" variant="contained" href={l.href} component={MuiLink} target="_blank" rel="noopener" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                      {l.label}
                    </Button>
                  ) : (
                    <Button key={l.href} size="small" variant="contained" href={l.href} sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                      {l.label}
                    </Button>
                  )
                ))}
              </Stack>
            )}
          </Box>
        )}

        {children}
      </CardContent>
    </Card>
  );
}

export default ProjectCard;