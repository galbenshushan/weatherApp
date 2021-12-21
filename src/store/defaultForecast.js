import { createSlice } from "@reduxjs/toolkit";

export const units= {
  Imperial: { Value: null, Unit: "", UnitType:null},
  Metric: { Value: null, Unit: "", UnitType: null },
}
const initialState = {
  currentTemperature:units ,
  weatherText: null,
  time: null,
  cityKey: null,
  name: "",
};
const defaultForecastSlice = createSlice({
  name: "defaultForecast",
  initialState: {
    todayForecast: initialState,
    nextDaysForecast: [],
  },
  reducers: {
    getForecastForToday(state, action) {
      state.todayForecast = {
        currentTemperature: action.payload.temperature,
        weatherText: action.payload.weatherText,
        time: action.payload.time,
        cityKey: action.payload.key,
        name: action.payload.name,
      };
    },
    getNextDaysForecast(state, action) {
      state.nextDaysForecast = action.payload.forecast;
    },
  },
});

export const defaultForecastActions = defaultForecastSlice.actions;

export default defaultForecastSlice;
