import { configureStore, combineReducers } from "@reduxjs/toolkit";
import queryReducer from "../reducers/queryReducer";
import { playReducer } from "../reducers/playReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import encryptTransform from "redux-persist-transform-encrypt";
const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_MY_SECRET_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  query: queryReducer,
  play: playReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export const persistor = persistStore(store);
