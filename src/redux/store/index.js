import { configureStore, combineReducers } from "@reduxjs/toolkit";
import queryReducer from "../reducers/queryReducer";

const bigReducer = combineReducers({
  query: queryReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
