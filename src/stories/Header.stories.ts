import { type Meta, type StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Header } from '@/components/Header';
import { type MenuItemInfo } from '@/types/MenuItemInfo';

const meta = {
  title: 'Component/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onChangeTheme: fn(),
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const menuItemList: MenuItemInfo[] = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Test',
    children: [
      {
        label: 'API',
        path: '/list',
      },
      {
        label: 'Notification Test',
        path: '/notification_test',
      },
    ],
  },
  {
    label: '1',
    children: [
      {
        label: '1-1',
        children: [
          {
            label: '1-1-1',
            children: [
              {
                label: '1-1-1-1',
                path: '/grandchild',
              },
            ],
          },
        ],
      },
      {
        label: '1-2',
        children: [
          {
            label: '1-2-1',
            children: [
              {
                label: '1-2-1-1',
                path: '/grandchild',
              },
            ],
          },
          {
            label: '1-2-2',
            children: [
              {
                label: '1-2-2-1',
                path: '/grandchild',
              },
              {
                label: '1-2-2-2',
                path: '/grandchild',
              },
              {
                label: '1-2-2-3',
                disabled: true,
                path: '/grandchild',
              },
            ],
          },
          {
            label: '1-2-3',
            disabled: true,
            children: [
              {
                label: '1-2-3-1',
                path: '/grandchild',
              },
              {
                label: '1-2-3-2',
                path: '/grandchild',
              },
              {
                label: '1-2-3-3',
                disabled: true,
                path: '/grandchild',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '2',
    disabled: true,
  },
  {
    label: '3',
    disabled: true,
    children: [
      {
        label: '2-1',
        path: '',
      },
    ],
  },
];

export const LightMode: Story = {
  args: {
    menuItemList: menuItemList,
  },
};
