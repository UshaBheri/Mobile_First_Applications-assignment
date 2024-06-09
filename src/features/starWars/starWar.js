import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCharacters = createAsyncThunk('starWars/fetchCharacters', async (page) => {
  const response = await axios.get(`/api/starWars/characters?page=${page}`);
  return response.data;
});

const starWarsSlice = createSlice({
  name: 'starWars',
  initialState: { characters: [], loading: false, error: null, page: 1 },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => { state.loading = true; })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPage } = starWarsSlice.actions;
export default starWarsSlice.reducer;
