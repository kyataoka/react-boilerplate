import { AppBar, Box, Link, Toolbar } from '@mui/material';

import { Meta } from '@/Meta';

export const Footer = () => (
  <AppBar
    component={'footer'}
    position="sticky"
  >
    <Toolbar>
      <Box
        textAlign="right"
        width="100%"
      >
        <Link
          href={Meta.link}
          color="inherit"
          underline="none"
        >
          @ {Meta.author}
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);
