import { createSlice } from '@reduxjs/toolkit';

const initialState = { filter: '' };

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export default filterSlice.reducer;
