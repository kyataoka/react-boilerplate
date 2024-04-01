import { useCallback, useMemo, useState } from 'react';

import { Menu as MenuIcon } from '@mui/icons-material';
import {
  DarkMode as DarkModeIcon,
  LightMode as LightModeIcon,
} from '@mui/icons-material';
import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import {
  AppBar,
  Toolbar,
  type PaletteMode,
  Button,
  Box,
  useTheme,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import {} from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';
import { NestedMenuItem } from 'mui-nested-menu';

import { AppConfig } from '@/AppConfig';
import { type MenuItemInfo } from '@/types/MenuItemInfo';

import { HeaderDrawer } from './HeaderDrawer';

type HeaderMenuProps = {
  menuItem: MenuItemInfo & Required<Pick<MenuItemInfo, 'children'>>;
};

export const HeaderMenu = ({ menuItem }: HeaderMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const buildMenuTree = (menuItem: MenuItemInfo[]) =>
    menuItem.map((menuItem) =>
      menuItem.children != undefined ? (
        <NestedMenuItem
          key={menuItem.label}
          parentMenuOpen={open}
          label={menuItem.label}
          disabled={menuItem.disabled ?? false}
        >
          {buildMenuTree(menuItem.children)}
        </NestedMenuItem>
      ) : (
        <MenuItem
          key={menuItem.label}
          component={RouterLink}
          to={menuItem.path}
          onClick={handleClose}
          disabled={menuItem.disabled ?? false}
        >
          {menuItem.label}
        </MenuItem>
      ),
    );

  return (
    <>
      <Button
        onClick={handleClick}
        color="inherit"
        endIcon={
          <KeyboardArrowDownIcon
            style={{
              transform: open ? 'rotate(180deg)' : 'rotate(360deg)',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        }
        disabled={menuItem.disabled ?? false}
      >
        {menuItem.label}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {buildMenuTree(menuItem.children)}
      </Menu>
    </>
  );
};

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
              sx={showDrawerOnDesktop ? null : { display: { sm: 'none' } }}
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
              ) : null}
              {menuItemList.map((menuItem) =>
                menuItem.children != null ? (
                  <HeaderMenu
                    key={menuItem.label}
                    menuItem={{ ...menuItem, children: menuItem.children }}
                  />
                ) : (
                  <Button
                    key={menuItem.label}
                    component={RouterLink}
                    to={menuItem.path}
                    color="inherit"
                    disabled={menuItem.disabled ?? false}
                  >
                    {menuItem.label}
                  </Button>
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
