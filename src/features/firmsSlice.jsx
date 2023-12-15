import { createSlice } from "@reduxjs/toolkit";

const firmsSlice = createSlice({
  name: "firms",

  initialState: {
    firms: [],
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

    getFirms: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.firms = payload?.data;
    },

    createFirmSuccess: (state, { payload }) => {
      state.loading = false;
      state.firms = payload?.data?.firms;
    },
  },
});

export const { fetchStart, fetchFail, getFirms, createFirmSuccess } =
  firmsSlice.actions;

export default firmsSlice.reducer;
