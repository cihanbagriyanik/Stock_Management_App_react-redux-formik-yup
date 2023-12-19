import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",

  initialState: {
    products: [],
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
      state.error = false;
      state.products = payload?.data;
    },
  },
});

export const { fetchStart, fetchFail, getProducts } = productsSlice.actions;

export default productsSlice.reducer;
