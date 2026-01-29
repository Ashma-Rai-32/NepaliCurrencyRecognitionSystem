import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ModelHistoryEntry = {
  fileImageUrl: string;
  fileMetadata: { name: string; size: number; lastModified: number };
  result: { prediction: string; confidence: number };
};

interface ModelState {
  modelHistory: Record<string, ModelHistoryEntry>;
}

const initialState: ModelState = {
  modelHistory: {},
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    updateModelHistory: (state, action: PayloadAction<ModelHistoryEntry>) => {
      const timestamp = new Date().toISOString();
      state.modelHistory[timestamp] = action.payload;
    },
    getModelHistory: (state) => state,
  },
});

export const { updateModelHistory, getModelHistory } = modelSlice.actions;

export default modelSlice.reducer;
