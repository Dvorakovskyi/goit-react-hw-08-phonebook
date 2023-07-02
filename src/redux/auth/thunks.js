import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const setToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const getCurrentProfile = createAsyncThunk('auth/profile', async () => {
  const response = await axios.get('/users/current');

  return response.data;
});

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/users/signup', body);

      setToken(response.data.token);

      await dispatch(getCurrentProfile());

      return response.data;
    } catch (error) {
      Notify.failure('Incorrect login or password.');

      return rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/users/login', body);

      setToken(response.data.token);

      await dispatch(getCurrentProfile());

      return response.data;
    } catch (error) {
      Notify.failure('Incorrect login or password.');

      return rejectWithValue(error.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/logout');

      setToken('');

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
