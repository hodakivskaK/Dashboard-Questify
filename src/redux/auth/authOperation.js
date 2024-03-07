import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://questify-backend.goit.global/';

const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);
const clearAuthHeader = () =>
  (axios.defaults.headers.common.Authorization = '');

   // Register 
export const register = createAsyncThunk(
  'auth/register',
  async (user, { rejectWithValue }) => {

    try {
      const response = await axios.post('auth/register', user);
      setAuthHeader(response.data.accessToken);
  

      return response.data;
    } catch (e) {
 
      return rejectWithValue(e.response.data.message);
    }
  }
);

//  login 
export const login = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {

    try {
      const response = await axios.post('/auth/login', user);
      setAuthHeader(response.data.accessToken);

      return response.data;
    } catch (e) {
      return rejectWithValue(e.response.data.message);
    }
  }
);

// logOut 
export const logOut = createAsyncThunk('/auth/logout', async (_, { rejectWithValue, getState }) => {
  const state = getState();
  const persistedToken = state.auth.accessToken;

  if (persistedToken === null) {
    return rejectWithValue('Unable to fetch user');
  }

  if (!persistedToken) {
    return rejectWithValue('Unable to fetch user');
  }
  try {
    setAuthHeader(persistedToken);
    await axios.post('/auth/logout');
    clearAuthHeader();
  } catch (e) {
    return rejectWithValue(e.response.data.message);
  }
});



