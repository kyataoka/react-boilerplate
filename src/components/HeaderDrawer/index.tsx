import {
  Box,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';

import { HeaderDrawerItem } from '@/components/HeaderDrawerItem';
import { HeaderDrawerNestItem } from '@/components/HeaderDrawerNestItem';
import { type MenuItemInfo } from '@/types/MenuItemInfo';

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
}: Readonly<DrawerProps>) => (
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
      ) : undefined}
      <List>
        {menuItemList.map((menuItem) =>
          menuItem.children == undefined ? (
            <HeaderDrawerItem
              key={menuItem.label}
              menuItem={menuItem}
            />
          ) : (
            <HeaderDrawerNestItem
              key={menuItem.label}
              menuItem={{ ...menuItem, children: menuItem.children }}
              enabledNestColor={enabledNestColor}
            />
          ),
        )}
      </List>
    </Box>
  </MuiDrawer>
);
