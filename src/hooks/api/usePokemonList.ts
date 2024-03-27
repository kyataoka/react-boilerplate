import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { type Pokemon } from '@/types/Pokemon';

type PokemonListResponse = Pokemon[];

const fetchPokemonList = async (): Promise<PokemonListResponse> => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
  console.log(response);
  return response.data?.results;
};

export const usePokemonList = () =>
  useQuery<PokemonListResponse, Error>({
    queryKey: ['pokemonList'],
    queryFn: fetchPokemonList,
  });
