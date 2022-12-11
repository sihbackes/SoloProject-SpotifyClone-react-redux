import { configureStore, combineReducers } from "@reduxjs/toolkit";
import queryReducer from "../reducers/queryReducer";
import { playReducer } from "../reducers/playReducer";
const bigReducer = combineReducers({
  query: queryReducer,
  play: playReducer,
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
