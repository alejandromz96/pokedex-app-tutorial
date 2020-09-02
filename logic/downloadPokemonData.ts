import axios from 'axios';
import * as model from '../model';

export const getAllPokemonsList = async (): Promise<model.PokemonList> => {
  const response = await axios.get<model.PokemonList>('https://pokeapi.co/api/v2/pokemon?limit=1000');
  return response.data;
}

const downloadPokemonData = async (): Promise<void> => {
  const list = await getAllPokemonsList();
  // eslint-disable-next-line no-console
  console.log(`Downloading ${list.count}`);
};

export default downloadPokemonData;
