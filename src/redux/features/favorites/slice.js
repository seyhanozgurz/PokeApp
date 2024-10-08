import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
//import {addThunk, removeThunk} from './thunks';

const initialState = {
  user: {},
};

const apiUrl = 'http://10.0.2.2:3000/users';

export const addThunk = createAsyncThunk(
  'user/addThunk',
  async ({user,pokemonId}) => {
    console.log("addThunk: " , user, pokemonId)
    const newList = [...user.favoriteIdList, pokemonId];
    console.log(newList)
    await axios.put(`${apiUrl}/${user.id}`, {...user, favoriteIdList: newList });
    console.log('Eklendi', user);
    return {...user, favoriteIdList: newList };
  },
);

export const removeThunk = createAsyncThunk(
  'user/removeThunk',
  async ({user, pokemonId}) => {
    console.log("removeThunk: " , user, pokemonId)
    const newList = user.favoriteIdList.filter(
      pokemon => pokemon !== pokemonId,
    );
    await axios.put(`${apiUrl}/${user.id}`, {...user, favoriteIdList: newList});
    console.log('silindi', user);
    return {...user, favoriteIdList: newList };
  },
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      //console.log("userSlice",state.user)
    },
  },
  extraReducers: builder => {
    builder.addCase(addThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(addThunk.rejected, (state, action) => {
      console.log("ADD REJECTED")
    });
    builder.addCase(removeThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(removeThunk.rejected, (state, action) => {
      console.log("REMOVE REJECTED")
    });
  },
});

export const {setUser} = userSlice.actions;
export default userSlice.reducer;
