import { useCallback, useState } from 'react';

import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import { Button, Menu, MenuItem } from '@mui/material';
import {} from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';
import { NestedMenuItem } from 'mui-nested-menu';

import { type MenuItemInfo } from '@/types/MenuItemInfo';

export type HeaderMenuProps = {
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
