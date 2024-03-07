import {  createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCard, deleteCard, addCard, editCard, confirmCompleteCard } from "./cardsOperation";
import { logOut } from 'redux/auth/authOperation';

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


const cardSlice =  createSlice({
    name: 'cards',
    initialState: {
        entities: [],
        isLoading: false,
        error: null,
    },
    
    extraReducers: builder => { 
        builder
        // GET CARD
        .addCase(fetchCard.fulfilled, (state, { payload: cards }) => {
            state.entities = cards;
            state.isLoading = false;
        })
            
        // ADD NEW CARD
      .addCase(addCard.fulfilled, (state, action) => {
        state.entities.cards.push(action.payload.createdCard);
        state.isLoading = false;
      })


        // DELETE CARD
      .addCase(deleteCard.fulfilled, (state, action) => {
          const index = state.entities.cards.findIndex(card => card._id === action.meta.arg);
          state.entities.cards.splice(index, 1);
          state.isLoading = false; 
      })

      .addCase(logOut.fulfilled, (state) =>{
      state.entities = [];
      state.error = null;
      state.isLoading = false;
      })
      
        // PATCH EDIT
        .addCase(editCard.fulfilled, (state, {payload}) => {
            const index = state.entities.cards.findIndex(card => card._id === payload.editedCard._id);
            state.entities.cards.splice(index, 1, payload.editedCard);
            state.isLoading = false; 
        })

         // PATCH COMPETE
         .addCase(confirmCompleteCard.fulfilled, (state, action) => {
        const index = state.entities.cards.findIndex(card => card._id === action.meta.arg);
        state.entities.cards.splice(index, 1, action.payload.completedCard);
        state.isLoading = false; 
        })
    
            
    // PENDING
    .addMatcher(isAnyOf(
            fetchCard.pending,
            addCard.pending,
            deleteCard.pending,
            editCard.pending,
            confirmCompleteCard.pending,
    ), handlePending)
            
            
    // REJECTED 
    .addMatcher(isAnyOf(
            fetchCard.rejected,
            addCard.rejected,
            deleteCard.rejected,
            editCard.rejected,
            confirmCompleteCard.rejected,
    ), handleRejected)
    } 
})


export const cardReducer = cardSlice.reducer;