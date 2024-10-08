import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-slice";
import modelReducer from "./model-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    model: modelReducer,
  },
});
