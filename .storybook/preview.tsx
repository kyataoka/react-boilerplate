import type { Preview } from '@storybook/react';
import {
  Outlet,
  RouterProvider,
  createFileRoute,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';

import React from 'react';
import { Suspense } from 'react';

const dummyRouteTree = (Story) => {
  const rootRoute = createRootRoute({ component: () => <Outlet /> });
  return {
    routeTree: rootRoute.addChildren([
      createFileRoute('/*')().update({
        path: '/*',
        component: () => (
          <Suspense fallback={<div>loading...</div>}>
            <Story />
          </Suspense>
        ),
        getParentRoute: () => rootRoute,
      }),
    ]),
  };
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <RouterProvider router={createRouter(dummyRouteTree(Story))} />
    ),
  ],
};

export default preview;
