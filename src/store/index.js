import {configureStore} from "@reduxjs/toolkit";
import { productsSlice } from "./productsSlice";

const store = configureStore({
    reducer: {
      products: productsSlice.reducer, // Use the reducer explicitly
    },
  });

export default store;
