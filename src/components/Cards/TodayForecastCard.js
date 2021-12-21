import React from "react";
import classes from './Button.module.css'
import { useDispatch, useSelector } from "react-redux";
import { getLoaclStorage, saveToLocalStorage } from "../../services/localStorage";
import { uiActions } from "../../store/ui-slice";
import ForecastImage from "./ForecastImage";

const TodayForecastCard = (props) => {

  const unit = useSelector((state) => state.metric);

  const dispatch = useDispatch();

  const themeSlice = useSelector((state) => state.theme);

  const addToFav = () => {
    const favorites = getLoaclStorage();
    const exist = favorites.find((city) => city.name === info.name);
    if (exist) {
      dispatch(
        uiActions.showNotification({
          status: "failed",
          title: "Can not Access",
          message: "Already in favorites",
        })
      );
      return;
    } else {
      favorites.push(info);
      saveToLocalStorage(favorites);
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Action completed",
          message: "Added to favorites successfully!",
        })
      );
    }
  };

  const info = props.forcastInfo;

  const temp = info.weatherText || 'cloudy';

  const styles = { backgroundColor: themeSlice === 'dark' ? null : '' };

  return (
    <div style={styles} className="today forecast">
      <div className="forecast-header">
        <div>
          {info.time}
        </div>
      </div>
      <div className="forecast-content">
        <div className="location">
          {info.name}
          <ForecastImage imgSize={90} temp={temp} />
        </div>
        <div className="degree">
          <h5 className="flexin">
            <br />
            {info.weatherText}
          </h5>
          <div>
            <h2 className="flexin">
              {!unit ? info.currentTemperature.Metric.Value : info.currentTemperature.Imperial.Value}
              <sup>o</sup>
              {!unit ? info.currentTemperature.Metric.Unit : info.currentTemperature.Imperial.Unit}
            </h2>
          </div>
        </div>
        <button className={classes.btn} onClick={addToFav}>Add to Favorites</button>
      </div>
    </div>
  );
}
export default TodayForecastCard