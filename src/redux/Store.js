import { configureStore } from "@reduxjs/toolkit";
import { Cartslice1 } from "./slice/Cartslice1";
export const Store=configureStore({
    reducer:{
        cart:Cartslice1.reducer
    }




})