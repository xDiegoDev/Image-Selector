import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../features/search/searchSlice";
import likedSlice from "../features/liked/likedSlice";

export const store = configureStore({
  reducer: {
    searchImg: searchReducer,
    likedImg: likedSlice,
  },
});
