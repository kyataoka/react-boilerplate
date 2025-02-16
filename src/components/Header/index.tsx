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
import {} from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';

import { AppConfig } from '@/AppConfig';
import { type MenuItemInfo } from '@/types/MenuItemInfo';

import { HeaderDrawer } from '../HeaderDrawer';
import { HeaderMenu } from '../HeaderMenu';

type HeaderProps = {
  onChangeTheme: (theme: PaletteMode) => void;
  showHome?: boolean;
  showDrawerOnDesktop?: boolean;
  menuItemList: MenuItemInfo[];
};

export const Header = ({
  onChangeTheme,
  showHome = false,
  showDrawerOnDesktop = false,
  menuItemList,
}: Readonly<HeaderProps>) => {
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
      <HeaderDrawer
        open={isOpenDrawer}
        showHome={showHome}
        onClose={handleCloseDrawer}
        menuItemList={menuItemList}
        enabledNestColor
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
              sx={showDrawerOnDesktop ? undefined : { display: { sm: 'none' } }}
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
              {AppConfig.siteName}
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {showHome ? (
                <Button
                  component={RouterLink}
                  to="/"
                  color="inherit"
                >
                  Home
                </Button>
              ) : undefined}
              {menuItemList.map((menuItem) =>
                menuItem.children == undefined ? (
                  <Button
                    key={menuItem.label}
                    component={RouterLink}
                    to={menuItem.path}
                    color="inherit"
                    disabled={menuItem.disabled ?? false}
                  >
                    {menuItem.label}
                  </Button>
                ) : (
                  <HeaderMenu
                    key={menuItem.label}
                    menuItem={{ ...menuItem, children: menuItem.children }}
                  />
                ),
              )}
            </Box>
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
