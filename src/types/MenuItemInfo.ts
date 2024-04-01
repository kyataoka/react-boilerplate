export type MenuItemInfo = {
  label: string;
  disabled?: true;
  path?: string;
  children?: MenuItemInfo[];
};
