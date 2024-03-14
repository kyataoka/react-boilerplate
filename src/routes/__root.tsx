import { Link, Outlet, createRootRoute } from '@tanstack/react-router';

const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <hr />
      <Outlet />
    </>
  ),
});

export { Route };
