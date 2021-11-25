import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    count : 0,
};

const counterSliceReducer = createSlice({
    name:"Number",
    initialValue,
    reducer:{
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByNum: (state, action) => {
            state.count += action.payload;
        }
    }
})

export const {increment, decrement, incrementByNum} = counter.actions;      //Passed the actions.

export default counterSliceReducer.reducer;         //Passed the reducer.