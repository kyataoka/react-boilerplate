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

export const HeaderMenu = ({ menuItem }: Readonly<HeaderMenuProps>) => {
  const [anchorEl, setAnchorEl] = useState<undefined | HTMLElement>();
  const open = Boolean(anchorEl);
  const handleClick = useCallback(
    (event: Readonly<React.MouseEvent<HTMLButtonElement>>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );
  const handleClose = useCallback(() => {
    setAnchorEl(undefined);
  }, []);

  const buildMenuTree = (menuItem: Readonly<MenuItemInfo[]>) =>
    menuItem.map((menuItem) =>
      menuItem.children == undefined ? (
        <MenuItem
          key={menuItem.label}
          component={RouterLink}
          to={menuItem.path}
          onClick={handleClose}
          disabled={menuItem.disabled ?? false}
        >
          {menuItem.label}
        </MenuItem>
      ) : (
        <NestedMenuItem
          key={menuItem.label}
          parentMenuOpen={open}
          label={menuItem.label}
          disabled={menuItem.disabled ?? false}
        >
          {buildMenuTree(menuItem.children)}
        </NestedMenuItem>
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
