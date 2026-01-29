import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
  colors: {
    background: string;
    backgroundLight: string;
    textPrimary: string;
    textMuted: string;
  };
}

const initialState: ThemeState = {
  theme: "default",
  colors: {
    background: "#D5D5D5",
    backgroundLight: "#F5F5F5",
    textPrimary: "#0D0D0D",
    textMuted: "#A5A5A5",
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle: () => {},
  },
});

export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
