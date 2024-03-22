import { useCallback, useMemo } from 'react';

import {
  AppBar,
  Toolbar,
  type PaletteMode,
  Button,
  Box,
  useTheme,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';

import { Meta } from '@/Meta';

type HeaderProps = {
  onChangeTheme: (theme: PaletteMode) => void;
};

const Header = ({ onChangeTheme }: HeaderProps) => {
  const theme = useTheme();
  const themeMode = useMemo(() => theme.palette.mode, [theme]);

  const handleClickThemeButton = useCallback(() => {
    onChangeTheme(themeMode === 'dark' ? 'light' : 'dark');
  }, [onChangeTheme, themeMode]);

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: 1,
          }}
        >
          <Typography
            variant="h6"
            component={RouterLink}
            color="inherit"
            to="/"
            sx={{ textDecoration: 'none' }}
          >
            {Meta.siteName}
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            color="inherit"
          >
            Home
          </Button>
          <Button
            component={RouterLink}
            to="/about"
            color="inherit"
          >
            About
          </Button>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            onClick={handleClickThemeButton}
            color="inherit"
          >
            {themeMode}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
