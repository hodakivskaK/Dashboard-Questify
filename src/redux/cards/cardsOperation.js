import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


const setAuthHeader = token =>
  (axios.defaults.headers.common.Authorization = `Bearer ${token}`);



// GET Card
export const fetchCard = createAsyncThunk(
  'cards/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/card");
      console.log(response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// DELETE Card
export const deleteCard = createAsyncThunk(
  'card/deleteCard',
  async (id, thunkAPI ) => {
    try {
       const response = await axios.delete(`/card/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


// POST Card
export const addCard = createAsyncThunk(
  'card/addCard',
  async (card, thunkAPI) => {
    try {
      console.log(card)
      const response = await axios.post("/card", card );
      return response.data;
     
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);



// PATCH Card
export const editCard = createAsyncThunk(
    'card/editCard',
    async (card, thunkAPI) => {
      try {
        const response = await axios.patch("/card", card );
        return response.data;
       
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );


  // CONFIRM PATCH Card
export const confirmEditCard = createAsyncThunk(
    'card/confirmEditCard',
    async (card, thunkAPI) => {
      try {
        const response = await axios.patch("/card/complete", card );
        return response.data;
       
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );