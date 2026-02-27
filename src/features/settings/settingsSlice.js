import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  unit: localStorage.getItem("unit") || "metric",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    toggleUnit: (state) => {
      state.unit = state.unit === "metric" ? "imperial" : "metric";
      localStorage.setItem("unit", state.unit);
    },
    setUnit: (state, action) => {
      state.unit = action.payload;
      localStorage.setItem("unit", state.unit);
    },
  },
});

export const { toggleUnit, setUnit } = settingsSlice.actions;
export default settingsSlice.reducer;