import { getAllPokemonsList } from "../../logic/downloadPokemonData";


test('Get Pokemon Info', async (): Promise<void> => {
  const data = await getAllPokemonsList();
  expect(data.count).toBe(1050);
});
