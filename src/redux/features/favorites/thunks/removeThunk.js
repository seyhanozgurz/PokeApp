import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://10.11.74.39:3000/users';

export const removeThunk = createAsyncThunk(
  'user/removeThunk',
  async ({user, pokemonId}) => {
    console.log('removeThunk: ', user, pokemonId);
    const newList = user.favoriteIdList.filter(
      pokemon => pokemon !== pokemonId,
    );
    await axios.put(`${apiUrl}/${user.id}`, {...user, favoriteIdList: newList});
    console.log('silindi', user);
    return {...user, favoriteIdList: newList};
  },
);
