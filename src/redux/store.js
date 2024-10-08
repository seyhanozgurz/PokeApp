import {configureStore} from '@reduxjs/toolkit';
import pokemonReducer from './features/pokemon/pokemonThunk';
import userReducer from './features/favorites/slice';
const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    user: userReducer,
  },
});
export default store;
