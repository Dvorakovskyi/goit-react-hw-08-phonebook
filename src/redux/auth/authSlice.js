import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  getCurrentProfile,
  registerThunk,
  logOutThunk,
} from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilledLogin = (state, action) => {
  state.token = action.payload.token;
  state.isLoading = false;
};

const handleFulfilledProfile = (state, action) => {
  state.isLoading = false;
  state.currentProfile = action.payload;
};

const handleFulfilledLogOut = state => {
  state.token = '';
  state.isLoading = false;
  state.error = null;
  state.currentProfile = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    isLoading: true,
    error: null,
    currentProfile: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleFulfilledLogin)
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(getCurrentProfile.fulfilled, handleFulfilledProfile)
      .addCase(logOutThunk.fulfilled, handleFulfilledLogOut)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const authReducer = authSlice.reducer;

export const selectProfile = state => state.auth.currentProfile;
export const selectToken = state => state.auth.token;
export const selectIsLoading = state => state.auth.isLoading;
