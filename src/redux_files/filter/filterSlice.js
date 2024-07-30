import { createSlice } from '@reduxjs/toolkit';
import { filterInitialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts: {
      reducer: (_, action) => {
        return action.payload.value;
      },
      prepare: value => ({ payload: { value } }),
    },
  },
});

export const { filterContacts } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
