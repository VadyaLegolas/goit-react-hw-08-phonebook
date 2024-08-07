export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledGet = (state, { payload }) => {
  state.items = payload;
};
export const handleFulfilledAdd = (state, { payload }) => {
  state.items.push(payload);
};
export const handleFulfilledDelete = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

export const handleRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
};
