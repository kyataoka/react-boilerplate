import { Container, List } from '@mui/material';
import { createLazyFileRoute } from '@tanstack/react-router';

import { usePokemonList } from '@/hooks/api/usePokemonList';

import { PokemonListItem } from './-components/PokemonListItem';

const ListPage = () => {
  const { data: pokemonList, isLoading } = usePokemonList();

  console.log(isLoading);
  console.log(pokemonList);

  return (
    <Container maxWidth="lg">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <List>
          {pokemonList?.map((pokemon) => (
            <PokemonListItem
              key={pokemon.name}
              pokemon={pokemon}
            />
          ))}
        </List>
      )}
    </Container>
  );
};

export const Route = createLazyFileRoute('/list')({
  component: ListPage,
});
