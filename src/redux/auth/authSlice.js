import { createSlice } from '@reduxjs/toolkit';
import { loginThunk } from './thunks';

const handlePending = state => (state.error = '');

const handleFulfilledLogin = (state, action) => {
  state.token = action.payload;
  state.isLoading = false;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
