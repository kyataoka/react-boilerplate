import type React from 'react';
import { useCallback, useState } from 'react';

import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import {
  Box,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
  Collapse,
  Typography,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';

import { type MenuItemInfo } from '@/types/MenuItemInfo';

type HeaderDrawerItemProps = {
  menuItem: MenuItemInfo;
  depth?: number;
};

const HeaderDrawerItem = ({ menuItem, depth = 0 }: HeaderDrawerItemProps) => (
  <ListItem disablePadding>
    <ListItemButton
      component={RouterLink}
      to={menuItem.path}
      disabled={menuItem.disabled ?? false}
    >
      <Typography
        variant="inherit"
        sx={{ flex: 1, pl: depth * 2 }}
      >
        {menuItem.label}
      </Typography>
    </ListItemButton>
  </ListItem>
);

type HeaderDrawerNestItemProps = {
  menuItem: MenuItemInfo & Required<Pick<MenuItemInfo, 'children'>>;
  depth?: number;
  enabledNestColor?: boolean;
};

const HeaderDrawerNestItem = ({
  menuItem,
  depth = 0,
  enabledNestColor = false,
}: HeaderDrawerNestItemProps) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      setOpen(!open);
      e.stopPropagation();
    },
    [open],
  );

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton
          onClick={handleClick}
          sx={{ display: 'flex' }}
          disabled={menuItem.disabled ?? false}
        >
          <Typography
            variant="inherit"
            sx={{ flex: 1, pl: depth * 2 }}
          >
            {menuItem.label}
          </Typography>
          <KeyboardArrowDownIcon
            sx={{
              transform: open ? 'rotate(180deg)' : 'rotate(360deg)',
              transition: 'transform 0.3s ease-in-out',
            }}
          />
        </ListItemButton>
      </ListItem>
      <Collapse
        in={open}
        timeout="auto"
        easing={{
          enter: 'ease-in-out',
          exit: 'ease-in-out',
        }}
        unmountOnExit
        sx={{
          backgroundImage: enabledNestColor
            ? `linear-gradient(${theme.palette.action.hover}, ${theme.palette.action.hover})`
            : '',
        }}
      >
        {menuItem.children.map((menuItem) =>
          menuItem.children != null ? (
            <HeaderDrawerNestItem
              key={menuItem.label}
              menuItem={{ ...menuItem, children: menuItem.children }}
              depth={depth + 1}
            />
          ) : (
            <HeaderDrawerItem
              key={menuItem.label}
              menuItem={menuItem}
              depth={depth + 1}
            />
          ),
        )}
      </Collapse>
    </>
  );
};

type DrawerProps = {
  open: boolean;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  showHome?: boolean;
  onClose: () => void;
  menuItemList: MenuItemInfo[];
  enabledNestColor?: boolean;
};

export const HeaderDrawer = ({
  open,
  anchor = 'left',
  showHome = false,
  onClose,
  menuItemList,
  enabledNestColor = false,
}: DrawerProps) => (
  <MuiDrawer
    anchor={anchor}
    open={open}
    onClose={onClose}
  >
    <Box
      sx={{ width: 250 }}
      onClick={onClose}
    >
      {showHome ? (
        <>
          <List>
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to="/"
              >
                Home
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </>
      ) : null}
      <List>
        {menuItemList.map((menuItem) =>
          menuItem.children != null ? (
            <HeaderDrawerNestItem
              key={menuItem.label}
              menuItem={{ ...menuItem, children: menuItem.children }}
              enabledNestColor={enabledNestColor}
            />
          ) : (
            <HeaderDrawerItem
              key={menuItem.label}
              menuItem={menuItem}
            />
          ),
        )}
      </List>
    </Box>
  </MuiDrawer>
);
