import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({   //configureStore() automatically sets up the store with good default settings
    reducer:{}          //configureStore() accepts a reducer function as a named argument
})