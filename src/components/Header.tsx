import { useCallback, useMemo, useState } from 'react';

import { Menu as MenuIcon } from '@mui/icons-material';
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  type PaletteMode,
  Button,
  Box,
  useTheme,
  Typography,
  IconButton,
} from '@mui/material';
import {
  Link as RouterLink,
  type FileRoutesByPath,
} from '@tanstack/react-router';

import { Meta } from '@/Meta';

import { Drawer } from './Drawer';

type Path = keyof FileRoutesByPath;

export type HeaderProps = {
  onChangeTheme: (theme: PaletteMode) => void;
  visibleHome?: boolean;
  menuItem: {
    path: Path;
    label: string;
  }[];
};

export const Header = ({
  onChangeTheme,
  visibleHome = false,
  menuItem,
}: HeaderProps) => {
  const theme = useTheme();
  const themeMode = useMemo(() => theme.palette.mode, [theme]);

  const handleClickThemeButton = useCallback(() => {
    onChangeTheme(themeMode === 'dark' ? 'light' : 'dark');
  }, [onChangeTheme, themeMode]);

  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  return (
    <>
      <Drawer
        open={isOpenDrawer}
        visibleHome={visibleHome}
        onClose={handleCloseDrawer}
        menuItem={menuItem}
      />
      <AppBar position="sticky">
        <Toolbar>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: 1,
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={handleOpenDrawer}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              component={RouterLink}
              color="inherit"
              to="/"
              sx={{ textDecoration: 'none' }}
            >
              {Meta.siteName}
            </Typography>
            {visibleHome ? (
              <Button
                component={RouterLink}
                to="/"
                color="inherit"
              >
                Home
              </Button>
            ) : null}
            {menuItem.map((item) => (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color="inherit"
              >
                {item.label}
              </Button>
            ))}
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              onClick={handleClickThemeButton}
              color="inherit"
            >
              {themeMode === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
