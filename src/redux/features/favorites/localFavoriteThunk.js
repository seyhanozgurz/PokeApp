/*import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  favoriteList: [],
};

// storagedan kaydedilen pokemonları cekecek
export const loadThunk = createAsyncThunk('favorites/loadThunk', async () => {
  //const state = getState().favorites;
  //console.log('loadThunk:', state.user);
  try {
    //AsyncStorage.clear()

    const favorites = await AsyncStorage.getItem('favoritePokemons');
    //console.log('loadThunk:', favorites);
    return favorites ? JSON.parse(favorites) : [];
  } catch (error) {
    console.log('Error fetching favorite pokemons:', error);
    return [];
  }
});

export const addThunk = createAsyncThunk(
  'favorites/addThunk',
  async (newFavorite, {getState}) => {
    const state = getState().favorites;
    const updatedFavoriteList = [...state.favoriteList, newFavorite];
    try {
      await AsyncStorage.setItem(
        'favoritePokemons',
        JSON.stringify(updatedFavoriteList),
      );
      //console.log('updated:', updatedFavoriteList);
    } catch (error) {
      console.log('Error saving favorite Pokemon:', error);
    }
    return updatedFavoriteList;
  },
);
export const removeThunk = createAsyncThunk(
  'favorite/removeThunk',
  async (removedPokemon, {getState}) => {
    const state = getState().favorites;
    const updatedFavoriteList = state.favoriteList.filter(
      pokemon => pokemon.name !== removedPokemon.name,
    );
    try {
      await AsyncStorage.setItem(
        'favoritePokemons',
        JSON.stringify(updatedFavoriteList),
      );
    } catch (error) {
      console.log('Error removing favorite Pokemon:', error);
    }
    return updatedFavoriteList;
  },
);

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loadThunk.fulfilled, (state, action) => {
      state.favoriteList = action.payload;
      //console.log('fullfilled');
    });
    builder.addCase(addThunk.fulfilled, (state, action) => {
      state.favoriteList = action.payload;
    });
    builder.addCase(removeThunk.fulfilled, (state, action) => {
      state.favoriteList = action.payload;
    });
    builder.addCase(removeThunk.rejected, (state, action) => {
      console.log('Error in removeThunk:', action.error);
    });
  },
});
export default favoriteSlice.reducer;
*/