import axios from 'axios';

interface PokemonList {
  count: number;
}
test('Get Pokemon Info', async (): Promise<void> => {

  const result = await axios.get<PokemonList>('https://pokeapi.co/api/v2/pokemon?limit=1000');
  const {data} = result;  
  expect(data.count).toBe(1050);
});
