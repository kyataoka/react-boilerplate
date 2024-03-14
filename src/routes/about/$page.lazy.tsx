import { createFileRoute } from '@tanstack/react-router';

const Page = () => {
  const { page } = Route.useParams();
  return <div>About Page: {page}</div>;
};

const Route = createFileRoute('/about/$page')({
  component: Page,
});

export { Route };
