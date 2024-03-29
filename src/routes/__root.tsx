import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  createTheme,
  type PaletteMode,
  Box,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import { Outlet, createRootRoute } from '@tanstack/react-router';

import { Footer } from '@/components/Footer';
import { Header, type HeaderProps } from '@/components/Header';

const Root = () => {
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setThemeMode(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleThemeChange);
    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode],
  );

  useEffect(() => {
    const appbarColor =
      theme.palette.mode === 'dark' ? '#000000' : theme.palette.primary.main;
    const metaThemeColor = document.querySelector('meta[name=theme-color]');
    if (metaThemeColor != null) {
      metaThemeColor.setAttribute('content', appbarColor);
    }
  }, [
    theme.palette.background.default,
    theme.palette.background.paper,
    theme.palette.mode,
    theme.palette.primary.main,
  ]);

  const handleChangeTheme = useCallback(
    (theme: PaletteMode) => {
      setThemeMode(theme);
    },
    [setThemeMode],
  );

  const menuItem: HeaderProps['menuItem'] = [
    {
      path: '/list',
      label: 'List',
    },
    {
      path: '/notification_test',
      label: 'Notification Test',
    },
    {
      path: '/about',
      label: 'About',
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100svh' }}>
        <Header
          onChangeTheme={handleChangeTheme}
          menuItem={menuItem}
          showHome
          showDrawerOnDesktop
        />
        <Box
          component="main"
          sx={{
            flex: 1,
            overflow: 'auto',
            minWidth: 0,
          }}
        >
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export const Route = createRootRoute({
  component: Root,
});
