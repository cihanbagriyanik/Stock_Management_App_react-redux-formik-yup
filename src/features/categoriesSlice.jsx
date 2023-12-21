import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",

  initialState: {
    // products: [],
    categories: [],
    // brands: [],
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

    getCategories: (state, { payload }) => {
      state.loading = false;
      state.categories = payload[0];
      //   state.products = payload[1];
      //   state.brands = payload[2];
    },
  },
});

export const { fetchStart, fetchFail, getCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
