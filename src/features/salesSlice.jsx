import { createSlice } from "@reduxjs/toolkit";

const salesSlice = createSlice({
  name: "sales",

  initialState: {
    loading: false,
    error: false,
    brands: [],
    sales: [],
    products: [],
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

    getSales: (state, { payload }) => {
      state.loading = false;
      state.brands = payload[0];
      state.sales = payload[1];
      state.products = payload[2];
    },
  },
});

export const { fetchStart, fetchFail, getSales } = salesSlice.actions;

export default salesSlice.reducer;
