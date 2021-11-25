import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from './counter'
import bookReducer from './books'

export const store = configureStore({   //configureStore() automatically sets up the store with good default settings
    reducer:{               //configureStore() accepts a reducer function as a named argument
        counter: counterSliceReducer,
        bookCounter: bookReducer
    }          
})