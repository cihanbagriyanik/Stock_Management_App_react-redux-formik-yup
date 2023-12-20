import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
    categories: [],
    brands: [],
    loading: false,
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    getProducts: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.brands = payload[1];
      state.categories = payload[2];
    },
  },
});

export const { fetchStart, fetchFail, getProducts } = productsSlice.actions;

export default productsSlice.reducer;
