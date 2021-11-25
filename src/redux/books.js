import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    books: [
        {
            id:1,
            title:"Data Structure",
            price:300,
            desc:"configureStore automatically sets up the store with good default settings Data Structure"
        },{
            id:2,
            title:"Data Structure and Algorithm",
            price:400,
            desc:"configureStore automatically sets up the store with good default settings Data Structure"
        },{
            id:3,
            title:"Core Java",
            price:500,
            desc:"configureStore automatically sets up the store with good default settings Data Structure"
        }
    ],
};

const booksReducer = createSlice({
    name: "books",
    initialState: initialValue,
    reducers:{
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
        removeBook: (state, action) => {
            const newbooksArr = state.books.filter((item) => item.id !== action.payload.id);
            state.books = [...newbooksArr];
        }
    }
})

export const {addBook, removeBook} = booksReducer.actions;

export default booksReducer.reducer;