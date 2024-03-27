import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { type PokemonSpecies } from '../../types/PokemonSpecies';

const fetchPokemonSpecies = async (name: string): Promise<PokemonSpecies> => {
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`,
  );
  return response.data;
};

export const usePokemonSpecies = (name: string) =>
  useQuery({
    queryKey: ['pokemonSpecies', name],
    queryFn: () => fetchPokemonSpecies(name),
  });
