import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.weatherapi.com/v1/",
  }),
  endpoints: (builder) => ({
    searchCities: builder.query({
      query: (query) => `search.json?key=${API_KEY}&q=${encodeURIComponent(query)}`,
    }),

    getCurrentWeather: builder.query({
      query: ({ city, unit }) =>
        `current.json?key=${API_KEY}&q=${city}&aqi=no`,
    }),

    getForecast: builder.query({
      query: ({ city, unit }) =>
        `forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`,
    }),
  }),
});

export const {
  useSearchCitiesQuery,
  useLazySearchCitiesQuery,
  useGetCurrentWeatherQuery,
  useGetForecastQuery,
} = weatherApi;