import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pokemon: '',
  loading: false,
  error: null,
};
export const pokemonThunk = createAsyncThunk(
  'pokemon/pokemonThunk',
  async name => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + name;
    try {
      const responsePokemons = await axios.get(url);
      const pokemonData = responsePokemons.data;
      //console.log('pokemonThunk:', pokemonData);
      return {
        id: pokemonData.id.toString(),
        name: pokemonData.name,
        image: pokemonData.sprites.other['official-artwork'].front_default,
        baseExperience: pokemonData.base_experience,
        height: pokemonData.height,
        weight: pokemonData.weight,
        abilities: pokemonData.abilities.map(ability => ({
          name: ability.ability.name,
          is_hidden: ability.is_hidden,
          slot: ability.slot,
        })), // Yetenekler
        moves: pokemonData.moves.slice(0, 5).map(move => ({
          name: move.move.name,
          level_learned_at: move.version_group_details[0].level_learned_at,
          move_learn_method:
            move.version_group_details[0].move_learn_method.name,
        })),
      };
    } catch (error) {
      console.log('Pokemon bulunamamıştır.', error);
      return null;
    }
  },
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(pokemonThunk.pending, state => {
      state.loading = true;
    });
    builder.addCase(pokemonThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemon = action.payload;
      //console.log("list:" , state.pokemon)
    });
    builder.addCase(pokemonThunk.rejected, state => {
      state.loading = false;
      state.error = true;
    });
  },
});
export default pokemonSlice.reducer;
