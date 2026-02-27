import { createSlice } from "@reduxjs/toolkit";

const SELECTED_CITY_KEY = "selectedCity";
const RECENT_SEARCHES_KEY = "recentSearches";

const initialState = {
  query: "",
  selectedCity: localStorage.getItem(SELECTED_CITY_KEY) || "",
  recentSearches:
    JSON.parse(localStorage.getItem(RECENT_SEARCHES_KEY)) || [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSelectedCity: (state, action) => {
      const city = action.payload?.trim();
      if (!city) return;

      state.selectedCity = city;
      localStorage.setItem(SELECTED_CITY_KEY, city);

      if (!state.recentSearches.includes(city)) {
        state.recentSearches.unshift(city);
        state.recentSearches = state.recentSearches.slice(0, 10);
        localStorage.setItem(
          RECENT_SEARCHES_KEY,
          JSON.stringify(state.recentSearches)
        );
      }
    },
    clearSelectedCity: (state) => {
      state.selectedCity = "";
      localStorage.removeItem(SELECTED_CITY_KEY);
    },
    clearRecentSearches: (state) => {
      state.recentSearches = [];
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    },
  },
});

export const {
  setQuery,
  setSelectedCity,
  clearSelectedCity,
  clearRecentSearches,
} = searchSlice.actions;

export default searchSlice.reducer;

