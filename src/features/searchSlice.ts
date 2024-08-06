import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchState } from './searchModel';

const initialState: SearchState = {
  page: 1,
  search: localStorage.getItem('searchString') || '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const { setPage, setSearch } = searchSlice.actions;
export default searchSlice.reducer;
