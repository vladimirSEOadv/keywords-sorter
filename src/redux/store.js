import { configureStore } from "@reduxjs/toolkit";
import words from "./wordsSlice";

export const store = configureStore({
  reducer: {
    words,
  },
});
