import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../features/favorites/favoritesSlice";
import settingsReducer from "../features/settings/settingsSlice";
import searchReducer from "../features/search/searchSlice";
import { weatherApi } from "../features/weather/weatherApi";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    settings: settingsReducer,
    search: searchReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(weatherApi.middleware),
});