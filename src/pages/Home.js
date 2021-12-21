import ForecastTable from "../components/ForecastTable";
import useHttp from "../hooks/use-http";
import useForecast from "../hooks/useForecast";
import Input from "../components/Input";
import bright from "../pages/images/skyday.jpg";
import dark from "../pages/images/skynight.jpg";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultForecastActions } from "../store/defaultForecast";
import { apiKey, defaultNextDaysURL, currentForecastURL, geolocationURL } from "../url";
import { uiActions } from "../store/ui-slice";

const Home = () => {

  const themeSlice = useSelector(state => state.theme)

  const [isDefault, setIsDefault] = useState(true);

  const changeDefaultHandler = () => setIsDefault(false);

  const { cityForecast, cityForecastHandler, cityInfo, cityInfoHandler } = useForecast();

  const dispatch = useDispatch();

  const { sendRequest, isLoading } = useHttp();

  const getDefaultNextDays = (response) => {
    const forecastArray = response.DailyForecasts;
    dispatch(defaultForecastActions.getNextDaysForecast({ forecast: forecastArray }));
  };

  const currentForecastHandler = (response) => {
    const temp = response[0].Temperature;
    const text = response[0].WeatherText;
    const time = response[0].LocalObservationDateTime;
    const newTime = time.split("T")[0];
    cityForecastHandler({ temp, text, newTime });
  };

  const applyDataFromGeo = (response) => {
    cityInfoHandler({
      key: response.Key,
      name: response.LocalizedName,
    });
    sendRequest({ url: `${currentForecastURL}${response.Key}?apikey=${apiKey}` }, currentForecastHandler);

    sendRequest({ url: `${defaultNextDaysURL}${response.Key}?apikey=${apiKey}&metric=true` }, getDefaultNextDays);
  };

  const successHandler = (pos) => {
    const crd = pos.coords;

    sendRequest({ url: `${geolocationURL}?apikey=${apiKey}&q=${crd.latitude}%2C${crd.longitude}` }, applyDataFromGeo);
  };

  const errorHandler = () => {
    dispatch(
      uiActions.showNotification({
        status: "failed",
        title: "Something went wrong",
        message: "Error, Please try again",
      })
    );
  }

  useEffect(() => navigator.geolocation.getCurrentPosition(successHandler, errorHandler), []);

  useEffect(() => {
    dispatch(
      defaultForecastActions.getForecastForToday({
        temperature: cityForecast.temperature,
        weatherText: cityForecast.weatherText,
        time: cityForecast.time,
        key: cityInfo.key,
        name: cityInfo.name,
      })
    );
  }, [cityInfo, cityForecast, dispatch]);

  return (
    <div
      style={{ backgroundImage: themeSlice === 'dark' ? `url(${dark})` : `url(${bright})` }}
      className={themeSlice !== 'dark' ? 'brightSide hero' : 'darkSide hero'}>
      <div className="container">
        <Input renderDefault={isDefault} toggleDefault={changeDefaultHandler} />
      </div>
      <ForecastTable renderDefault={isDefault} isLoading={isLoading} />
    </div>
  );
}
export default Home