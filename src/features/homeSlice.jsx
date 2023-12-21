import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    purchases: [],
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

    getPurSalesSuccess: (state, { payload }) => {
      state.loading = false;
      state.purchases = payload[0].data;
      state.sales = payload[1].data;
    },
  },
});

export const { fetchStart, fetchFail, getPurSalesSuccess } = homeSlice.actions;
export default homeSlice.reducer;
