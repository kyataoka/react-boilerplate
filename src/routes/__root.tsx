import { useCallback, useMemo, useState } from 'react';

import {
  createTheme,
  type PaletteMode,
  Box,
  ThemeProvider,
  Container,
  CssBaseline,
} from '@mui/material';
import { Outlet, createRootRoute } from '@tanstack/react-router';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

const Root = () => {
  const [themeMode, setThemeMode] = useState<PaletteMode>('dark');
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode],
  );

  const handleChangeTheme = useCallback(
    (theme: PaletteMode) => {
      setThemeMode(theme);
    },
    [setThemeMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header onChangeTheme={handleChangeTheme} />
        <Container
          maxWidth="lg"
          component="main"
          sx={{
            flex: 1,
            overflow: 'auto',
            minWidth: 0,
          }}
        >
          <Outlet />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

const Route = createRootRoute({
  component: Root,
});

export { Route };
