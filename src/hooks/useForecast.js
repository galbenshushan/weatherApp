import { useState } from 'react';
import { units } from '../store/defaultForecast';

export default function useForecast() {
  const [cityForecast, setCityForecast] = useState({
    temperature: units,
    weatherText: "",
    time: null,
  });
  const [cityInfo, setCityInfo] = useState({
    key: null,
    name: "",
  });
  const cityForecastHandler = (forecastConfig) => {
    setCityForecast({
      temperature: forecastConfig.temp,
      weatherText: forecastConfig.text,
      time: forecastConfig.newTime,
    });
  }

  const cityInfoHandler = (infoConfig) => {
    setCityInfo({ key: infoConfig.key, name: infoConfig.name });
  }

  return { cityForecast, cityInfo, cityForecastHandler, cityInfoHandler }
}


