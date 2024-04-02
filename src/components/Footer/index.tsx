import { AppBar, Box, Link, Toolbar } from '@mui/material';

import { AppConfig } from '@/AppConfig';

export const Footer = () => (
  <AppBar
    component={'footer'}
    position="sticky"
    sx={{ pb: 'env(safe-area-inset-bottom)' }}
  >
    <Toolbar>
      <Box
        textAlign="right"
        width="100%"
      >
        <Link
          href={AppConfig.link}
          color="inherit"
          underline="none"
        >
          @ {AppConfig.author}
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);
