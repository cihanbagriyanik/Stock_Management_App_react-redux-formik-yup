import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import firmsReducer from "../features/firmsSlice";
import brandsReducer from "../features/brandsSlice";
import productsReducer from "../features/productsSlice";
import salesReducer from "../features/salesSlice";

// import authMidReducer from "../features/authSliceMiddleware"; //!middleware ile olan kullanım
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    // auth:authMidReducer,
    auth: persistedReducer,
    firms: firmsReducer,
    brands: brandsReducer,
    products: productsReducer,
    sales: salesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);

export default store;
