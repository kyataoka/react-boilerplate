import { createLazyFileRoute } from '@tanstack/react-router';
const Home = () => (
  <div>
    {[...Array(100)].map((_, i) => (
      <p key={i}>{i}</p>
    ))}
  </div>
);

const Route = createLazyFileRoute('/')({
  component: Home,
});

export { Route };
