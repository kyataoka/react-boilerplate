import { createLazyFileRoute } from '@tanstack/react-router';
const Home = () => <p>home</p>;

const Route = createLazyFileRoute('/')({
  component: Home,
});

export { Route };
