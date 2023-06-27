import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const getCurrentProfile = createAsyncThunk('auth/profile', async () => {
  const response = await axios.get('/users/current');

  return response.data;
});

export const register = async body => {
  return await axios.post('/users/signup', body);
};

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (body, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post('/users/login', body);

      setToken(`Bearer ${response.data.token}`);

      dispatch(getCurrentProfile());

      return response.data;
    } catch (error) {
      Notify.failure('Incorrect login or password.');

      return rejectWithValue(error.message);
    }
  }
);
