import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { addContact, deleteContact, fetchContacts } from './operations';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledGet,
  handlePending,
  handleRejected,
} from './contactsFunctions';
import { arrayThunksTypes } from './arrayThunks';

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    const { PENDING, FULFILLED, REJECTED } = STATUS;
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addMatcher(isAnyOf(...arrayThunksTypes(PENDING)), handlePending)
      .addMatcher(isAnyOf(...arrayThunksTypes(REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...arrayThunksTypes(FULFILLED)), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
