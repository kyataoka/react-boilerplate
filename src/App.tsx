import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { SnackbarProvider } from 'notistack';

import { routeTree } from './routeTree.gen';

const router = createRouter({ routeTree: routeTree });

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <SnackbarProvider maxSnack={5}>
      <RouterProvider router={router} />
    </SnackbarProvider>
  </QueryClientProvider>
);
