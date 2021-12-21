import { createSlice } from "@reduxjs/toolkit";

const forecastSlice = createSlice({
  name: "forecastSlice",
  initialState: {
    forecast: {
      currentTemperature: null,
      weatherText: null,
      time: null,
      cityKey: null,
      name: "",
    },
    nextDaysForecast :[]
  },
  reducers: {
    getForecastForCity(state, action) {
      state.forecast = {
        currentTemperature: action.payload.temperature,
        weatherText: action.payload.weatherText,
        time: action.payload.time,
        cityKey: action.payload.key,
        name: action.payload.name,
      };
    },
    getNextDaysForecast(state,action){
      state.nextDaysForecast=action.payload.forecast
    }
  },
});

export const forecastActions = forecastSlice.actions;

export default forecastSlice;