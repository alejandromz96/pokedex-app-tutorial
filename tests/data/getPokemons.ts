import axios from 'axios';

test('Get Pokemon Info', async (): void => {
  const result = await axios.get('https://pokeapi.co/api/v2/');
  console.log(result.data);
  expect(1 + 2).toBe(3);
});
