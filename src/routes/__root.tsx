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
import { Header } from '@/components/Header';
import { type MenuItemInfo } from '@/types/MenuItemInfo';

const Root = () => {
  const [themeMode, setThemeMode] = useState<PaletteMode>(
    globalThis.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light',
  );

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = (e: Readonly<MediaQueryListEvent>) => {
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
    metaThemeColor?.setAttribute('content', appbarColor);
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

  const menuItemList: MenuItemInfo[] = [
    {
      label: 'About',
      path: '/about',
    },
    {
      label: 'Test',
      children: [
        {
          label: 'API',
          path: '/list',
        },
        {
          label: 'Notification Test',
          path: '/notification_test',
        },
      ],
    },
    {
      label: '1',
      children: [
        {
          label: '1-1',
          children: [
            {
              label: '1-1-1',
              children: [
                {
                  label: '1-1-1-1',
                  path: '/grandchild',
                },
              ],
            },
          ],
        },
        {
          label: '1-2',
          children: [
            {
              label: '1-2-1',
              children: [
                {
                  label: '1-2-1-1',
                  path: '/grandchild',
                },
              ],
            },
            {
              label: '1-2-2',
              children: [
                {
                  label: '1-2-2-1',
                  path: '/grandchild',
                },
                {
                  label: '1-2-2-2',
                  path: '/grandchild',
                },
                {
                  label: '1-2-2-3',
                  disabled: true,
                  path: '/grandchild',
                },
              ],
            },
            {
              label: '1-2-3',
              disabled: true,
              children: [
                {
                  label: '1-2-3-1',
                  path: '/grandchild',
                },
                {
                  label: '1-2-3-2',
                  path: '/grandchild',
                },
                {
                  label: '1-2-3-3',
                  disabled: true,
                  path: '/grandchild',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '2',
      disabled: true,
    },
    {
      label: '3',
      disabled: true,
      children: [
        {
          label: '2-1',
          path: '',
        },
      ],
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100svh' }}>
        <Header
          onChangeTheme={handleChangeTheme}
          menuItemList={menuItemList}
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
