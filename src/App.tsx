import { RouterProvider, createRouter } from '@tanstack/react-router';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree: routeTree });

declare module '@tanstack/react-router' {
  interface RouteComponentProps {
    router: typeof router;
  }
}

const App = () => <RouterProvider router={router} />;

export { App };
