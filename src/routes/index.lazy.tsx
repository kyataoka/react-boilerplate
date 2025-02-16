import { Container } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';
const Home = () => (
  <Container maxWidth="lg">
    {Array.from({ length: 100 }).map((_, i) => (
      <p key={i}>{i}</p>
    ))}
  </Container>
);

export const Route = createLazyFileRoute('/')({
  component: Home,
});
