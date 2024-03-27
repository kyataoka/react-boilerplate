import { useMemo } from 'react';

import { ListItem, ListItemText } from '@mui/material';

import { usePokemonSpecies } from '@/hooks/api/usePokemonSpecies';
import { type Pokemon } from '@/types/Pokemon';

type PokemonListItemProps = {
  pokemon: Pokemon;
};

export const PokemonListItem = ({ pokemon }: PokemonListItemProps) => {
  const { data } = usePokemonSpecies(pokemon.name);

  const japaneseName = useMemo(
    () => data?.names.find((name) => name.language.name === 'ja-Hrkt')?.name,
    [data],
  );
  return (
    <ListItem key={pokemon.name}>
      <ListItemText
        primary={japaneseName}
        secondary={pokemon.name}
      />
    </ListItem>
  );
};
