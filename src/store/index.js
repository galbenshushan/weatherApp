import { configureStore } from "@reduxjs/toolkit";
import defaultForecastReducer from "./defaultForecast";
import forecastReducer from "./Forecast-slice";
import uiReducer from "./ui-slice";
import themeReducer from "./themeSlice";
import metricReducer from './metricSlice'
const store = configureStore({
  reducer: {
    forecast: defaultForecastReducer.reducer,
    cityForecast: forecastReducer.reducer,
    metric:metricReducer.reducer,
    ui: uiReducer.reducer,
    theme: themeReducer.reducer,
  },
});

export default store;
