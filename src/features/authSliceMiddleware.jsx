import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

//! AKTİF ETMEK İÇİN STORE A buradaki slice ı tanıtmamız lazım.
// Kullanıcı oturumu açma işlemi için createAsyncThunk kullanıyoruz.
//* useNavigate hookunu burada direk çağıramadığımız için buradaki metodlara parametre olarak geçtik.
export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ values, navigate }, { dispatch }) => {
    console.log(values);
    try {
      const { data } = await axios.post(
        `https://10002.fullstack.clarusway.com/auth/login/`,
        values
      );
      toastSuccessNotify("Login performed");
      navigate("/stock");
      return data;
    } catch (error) {
      toastErrorNotify("Login can not be performed");
      throw error.response.data;
    }
  }
);

// Kullanıcı kayıt işlemi için createAsyncThunk kullanıyoruz.
export const registerAsync = createAsyncThunk(
  "auth/register",
  async ( {values, navigate} , { dispatch }) => {
    console.log(values)
    try {
      const { data } = await axios.post(
        `https://10002.fullstack.clarusway.com/users/`,
        values
      );
      toastSuccessNotify("Register performed");
      navigate("/stock");
      return data;
    } catch (err) {
      toastErrorNotify("Register can not be performed");
      throw err.response.data;
    }
  }
);

export const logoutAsync = createAsyncThunk(
  "auth/logout",
  async (navigate, { dispatch, getState }) => {
    const { token } = getState().auth; // storedan tokeni okuduk
    try {
      await axios.get(`https://10002.fullstack.clarusway.com/auth/logout/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      toastSuccessNotify("Logout performed");
      navigate("/stock")
    } catch (error) {
      toastErrorNotify("Logout can not be performed");
      throw error.response.data;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    error: false,
    isAdmin: false,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false;
        state.currentUser = action.payload.user.username;
        state.isAdmin = action.payload.user?.isAdmin;
        state.token = action.payload?.token;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(registerAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(registerAsync.fulfilled, (state, action) => {
        console.log(action)
        state.loading = false;
        state.currentUser = action.payload.data.username;
        state.token = action.payload.token;
      })
      .addCase(registerAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(logoutAsync.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.loading = false;
        state.currentUser = null;
        state.token = null;
        state.isAdmin = false;
      })
      .addCase(logoutAsync.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default authSlice.reducer;
