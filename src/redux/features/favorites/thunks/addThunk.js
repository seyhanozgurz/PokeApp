import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'http://10.11.74.39:3000/users';

 const addThunk = createAsyncThunk(
  'user/addThunk',
  async ({user, pokemonId}) => {
    console.log('addThunk: ', user, pokemonId);
    const newList = [...user.favoriteIdList, pokemonId];
    console.log(newList);
    await axios.put(`${apiUrl}/${user.id}`, {...user, favoriteIdList: newList});
    console.log('Eklendi', user);
    return {...user, favoriteIdList: newList};
  },
);
export default addThunk;