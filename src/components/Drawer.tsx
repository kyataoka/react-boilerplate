import {
  Box,
  Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from '@mui/material';
import {
  Link as RouterLink,
  type FileRoutesByPath,
} from '@tanstack/react-router';

type Path = keyof FileRoutesByPath;

type DrawerProps = {
  open: boolean;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  visibleHome?: boolean;
  onClose: () => void;
  menuItem: {
    path: Path;
    label: string;
  }[];
};

export const Drawer = ({
  open,
  anchor = 'left',
  visibleHome = false,
  onClose,
  menuItem,
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
      {visibleHome ? (
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
        {menuItem.map((item) => (
          <ListItem
            key={item.path}
            disablePadding
          >
            <ListItemButton
              component={RouterLink}
              to={item.path}
            >
              {item.label}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  </MuiDrawer>
);
