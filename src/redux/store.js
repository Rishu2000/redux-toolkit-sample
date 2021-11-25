import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from './counter'

export const store = configureStore({   //configureStore() automatically sets up the store with good default settings
    reducer:{
        counter: counterSliceReducer
    }          //configureStore() accepts a reducer function as a named argument
})