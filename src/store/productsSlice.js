import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products.js";
const initialState = {
  products: products || [],
};
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});
