import { Container } from '@mui/material';
import { Link, Outlet, createLazyFileRoute } from '@tanstack/react-router';

const About = () => (
  <Container maxWidth="lg">
    <h1>About</h1>
    <ul>
      <li>
        <Link
          to="/about/$page"
          params={{ page: '1' }}
        >
          About Page 1
        </Link>
      </li>
      <li>
        <Link
          to="/about/$page"
          params={{ page: '2' }}
        >
          About Page 2
        </Link>
      </li>
      <li>
        <Link
          to="/about/$page"
          params={{ page: '3' }}
        >
          About Page 3
        </Link>
      </li>
    </ul>
    <Outlet />
  </Container>
);

export const Route = createLazyFileRoute('/about')({
  component: About,
});
