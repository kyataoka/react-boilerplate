import type React from 'react';
import { useCallback, useState } from 'react';

import { KeyboardArrowDown as KeyboardArrowDownIcon } from '@mui/icons-material';
import {
  ListItem,
  ListItemButton,
  Collapse,
  Typography,
  useTheme,
} from '@mui/material';

import { type MenuItemInfo } from '@/types/MenuItemInfo';

import { HeaderDrawerItem } from '../HeaderDrawerItem';

export type HeaderDrawerNestItemProps = {
  menuItem: MenuItemInfo & Required<Pick<MenuItemInfo, 'children'>>;
  depth?: number;
  enabledNestColor?: boolean;
};

export const HeaderDrawerNestItem = ({
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
