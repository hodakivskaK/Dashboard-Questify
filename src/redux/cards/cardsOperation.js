import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

// GET Card
export const fetchCard = createAsyncThunk(
  'cards/fetch',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/card");
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


  // PATCH COMPLETE  Card
export const confirmCompleteCard = createAsyncThunk(
    'card/confirmCompleteCard',
    async (id, thunkAPI) => {
      try {
        const response = await axios.patch(`/card/complete/${id}` );
        return response.data;
       
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );