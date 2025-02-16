import { Container } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';

const Page = () => {
  const { page } = Route.useParams();
  return <Container>About Page: {page}</Container>;
};

export const Route = createLazyFileRoute('/about/$page')({
  component: Page,
});
