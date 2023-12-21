import { createSlice } from "@reduxjs/toolkit";

const purchasesSlice = createSlice({
  name: "purchases",

  initialState: {
    loading: false,
    error: false,
    purchases: [],
    brands: [],
    firms: [],
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

    getPurchases: (state, { payload }) => {
      state.loading = false;
      state.purchases = payload[0];
      state.brands = payload[1];
      state.firms = payload[2];
      state.products = payload[3];
    },
  },
});

export const { fetchStart, fetchFail, getPurchases } = purchasesSlice.actions;

export default purchasesSlice.reducer;
