import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ModelState {
  modelHistory: object;
}

const initialState: ModelState = {
  modelHistory: {},
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    updateModelHistory: (state, action: PayloadAction<object>) => {
      const timestamp = new Date().toISOString();
      state.modelHistory[timestamp] = action.payload; //
    },
    getModelHistory: (state) => state,
  },
});

export const { updateModelHistory, getModelHistory } = modelSlice.actions;

export default modelSlice.reducer;
