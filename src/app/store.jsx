// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../features/authSlice";
// // import authMidReducer from "../features/authSliceMiddleware"; //!middleware ile olan kullanım

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     // auth:authMidReducer,
//   },
//   devTools: process.env.NODE_ENV !== "production",
// });
// export default store;

/* -------------------------------------------------------------------------- */

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../features/authSlice";

const persistConfig = {
  key: "root",
  storage,
  // blacklist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export let persistor = persistStore(store);
// const persistor = persistStore(store);

// export { store, persistor };
export default store;
