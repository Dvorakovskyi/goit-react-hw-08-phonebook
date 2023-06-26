import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = async body => {
    return await axios.post('/users/signup', body)
}

export const loginThunk = createAsyncThunk('auth/login',
    async (body) => {
        try {
            return await axios.post('/users/login', body)
        }
        catch (error) {
            console.log(error)
        }
    }
)