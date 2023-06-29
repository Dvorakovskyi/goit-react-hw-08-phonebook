import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, getCurrentProfile } from './thunks';

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
    currentProfile: null,
  },
  reducers: {
    logOut: (state) => {
      state.token = '';
      state.isLoading = false;
      state.error = null;
      state.currentProfile = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.fulfilled, handleFulfilledLogin)
      .addCase(getCurrentProfile.fulfilled, handleFulfilledProfile)
      .addMatcher(action => {
        action.type.endsWith('/pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('/rejected');
      }, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
export const { logOut } = authSlice.actions;

export const selectProfile = state => state.auth.currentProfile;
export const selectToken = state => state.auth.token;

