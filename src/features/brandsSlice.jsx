import { createSlice } from "@reduxjs/toolkit";

const brandsSlice = createSlice({
  name: "brands",

  initialState: {
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

    getBrands: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.brands = payload?.data;
    },
  },
});

export const { fetchStart, fetchFail, getBrands } = brandsSlice.actions;

export default brandsSlice.reducer;
