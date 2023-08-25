import { configureStore } from "@reduxjs/toolkit";
import words from "./slices/wordsSlice/wordsSlice";

export const store = configureStore({
  reducer: {
    words,
  },
});
