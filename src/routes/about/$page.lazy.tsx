import { Container } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

const Page = () => {
  const { page } = Route.useParams();
  return <Container>About Page: {page}</Container>;
};

export const Route = createFileRoute('/about/$page')({
  component: Page,
});
