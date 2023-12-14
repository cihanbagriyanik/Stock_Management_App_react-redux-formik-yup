import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
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

    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.data?.username;
      state.token = payload?.token;
    },

    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.currentUser = payload?.user?.username;
      state.isAdmin = payload?.user?.isAdmin;
      state.token = payload?.token;
    },

    logOutSuccess: (state) => {
      state.loading = false;
      state.currentUser = null;
      state.isAdmin = false;
      state.token = null;
    },
  },
});

export const {
  fetchStart,
  fetchFail,
  registerSuccess,
  loginSuccess,
  logOutSuccess,
} = authSlice.actions;
export default authSlice.reducer;
