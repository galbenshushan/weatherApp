import React from "react";
import ForcastCard from "./Cards/ForcastCard";
import { useSelector } from "react-redux";
import TodayForecastCard from "./Cards/TodayForecastCard";

const ForecastTable = (props) => {

  const isLoading = props.isLoading

  const isDefault = props.renderDefault;

  const defaultForecast = useSelector((state) => state.forecast.todayForecast);

  const themeSlice = useSelector(state => state.theme)

  const nextDaysForecast = useSelector(state => state.forecast.nextDaysForecast);

  const searchedCity = useSelector(state => state.cityForecast.forecast);

  const searchedCityForecast = useSelector(state => state.cityForecast.nextDaysForecast);

  const cityToMap = () => isDefault ? nextDaysForecast : searchedCityForecast;

  const renderData = (
    <>
      <TodayForecastCard forcastInfo={isDefault ? defaultForecast : searchedCity} />
      {cityToMap().map((day) => (
        <ForcastCard key={day.Date} temp={day.Temperature} date={day.Date} forcastInfo={isDefault ? defaultForecast : searchedCity} />
      ))}
    </>
  );
  return (
    <>
      <div className="container" style={{ paddingTop: '2rem', paddingLeft: '-34rem' }}>
        <div className="forecast-container" style={{ backgroundColor: themeSlice === 'dark' ? null : '' }}>
          {isLoading && <h1>Loading...</h1>}
          {!isDefault && renderData}
        </div>
      </div>
    </>
  );
}
export default ForecastTable