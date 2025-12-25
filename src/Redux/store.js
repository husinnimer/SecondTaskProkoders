import { configureStore } from "@reduxjs/toolkit";
import addReducer from "./addSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["selectedCart", "login"],
};
const persistedReducer = persistReducer(persistConfig, addReducer);

export const store = configureStore({
  reducer: {
    courses: persistedReducer,
  },
});

export const persistor = persistStore(store);
