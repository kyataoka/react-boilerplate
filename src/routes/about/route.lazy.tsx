import { Link, Outlet, createLazyFileRoute } from '@tanstack/react-router';

const About = () => (
  <div>
    <h1>About</h1>
    <ul>
      <li>
        <Link to="/about/1">About Page 1</Link>
      </li>
      <li>
        <Link to="/about/2">About Page 2</Link>
      </li>
      <li>
        <Link to="/about/3">About Page 3</Link>
      </li>
    </ul>
    <Outlet />
  </div>
);

const Route = createLazyFileRoute('/about')({
  component: About,
});

export { Route };
