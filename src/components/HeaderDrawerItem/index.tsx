import { ListItem, ListItemButton, Typography } from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';

import { type MenuItemInfo } from '@/types/MenuItemInfo';

export type HeaderDrawerItemProps = {
  menuItem: MenuItemInfo;
  depth?: number;
};

export const HeaderDrawerItem = ({
  menuItem,
  depth = 0,
}: Readonly<HeaderDrawerItemProps>) => (
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
