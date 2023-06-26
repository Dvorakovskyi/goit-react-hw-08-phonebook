import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const register = async body => {
    return await axios.post('/users/signup', body)
}

export const login = async body => {
    return await axios.post('/users/login', body)
}