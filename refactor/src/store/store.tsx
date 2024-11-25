import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme-slice";
import modelReducer from "./model-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    model: modelReducer,
  },
});

// Export RootState type by inferring it from store.getState()
export type RootState = ReturnType<typeof store.getState>;
