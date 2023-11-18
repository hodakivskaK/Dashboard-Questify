import {  createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchCard, deleteCard, addCard, editCard, confirmEditCard } from "./cardsOperation";

const handlePending = (state) => {
    state.isLoading = true;
}

const handleRejected = (state, {payload}) => {
    state.isLoading = false;
    state.entities = payload;
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
        // FETCH
        .addCase(fetchCard.fulfilled, (state, { payload: cards }) => {
            state.entities = cards;
            state.isLoading = false;
        })
            
 
        // ADD
      .addCase(addCard.fulfilled, (state, action) => {
        state.entities.push(action.payload);
        state.isLoading = false;
      })


        // DELETE
      .addCase(deleteCard.fulfilled, (state, action) => {
          const index = state.entities.findIndex(
        card => card.id === action.payload.id
          );
            state.entities.splice(index, 1);
          state.isLoading = false; 
      })


      
        // PATCH
        .addCase(editCard.fulfilled, (state, action) => {
            const index = state.entities.findIndex(
                card => card.id === action.payload.id
            );
                console.log(index)
            state.isLoading = false; 
        })

         // PATCH CONFIRM
         .addCase(confirmEditCard.fulfilled, (state, action) => {
            state.isLoading = false; 
        })
    
            
    // PENDING
    .addMatcher(isAnyOf(
            fetchCard.pending,
            addCard.pending,
            deleteCard.pending,
            editCard.pending,
            confirmEditCard.pending,
    ), handlePending)
            
            
    // REJECTED 
    .addMatcher(isAnyOf(
            fetchCard.rejected,
            addCard.rejected,
            deleteCard.rejected,
            editCard.rejected,
            confirmEditCard.rejected,
    ), handleRejected)
    } 
})


export const cardReducer = cardSlice.reducer;