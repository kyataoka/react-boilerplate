import {
  Box,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';

import { type MenuItemInfo } from '@/types/MenuItemInfo';

import { HeaderDrawerItem } from './HeaderDrawerItem';
import { HeaderDrawerNestItem } from './HeaderDrawerNestItem';

export type DrawerProps = {
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
