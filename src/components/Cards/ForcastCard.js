import React from 'react'
import { useSelector } from "react-redux";
import ForecastImage from './ForecastImage';

const ForcastCard = (props) => {
    const unit = useSelector((state) => state.metric);

    const info = props.forcastInfo;

    const temp = info.weatherText

    const minTemp = props.temp.Minimum.Value

    const date = props.date.split('T')[0]

    const themeSlice = useSelector(state => state.theme)

    return (
        <div className="forecast" style={{ width: '12rem', backgroundColor: themeSlice === 'dark' ? null : '' }}>
            <div className="forecast-header">
                <div className="day flexin">{date}</div>
            </div>
            <div className="forecast-content">
                <ForecastImage imgSize={48} temp={temp} />
                <div className="forecast-icon">
                    <h5 className='flexin' >
                        {info.weatherText}
                    </h5>
                </div>
                <div className="degree" >
                    <h3 className='flexin importa'>
                        {unit ? info.currentTemperature.Imperial.Value : info.currentTemperature.Metric.Value}
                        <sup>o</sup>
                        {unit ? info.currentTemperature.Imperial.Unit : info.currentTemperature.Metric.Unit}
                    </h3>

                </div>
                <h6 className='flexin' >Min {!unit ? minTemp : Math.floor(minTemp * 1.8 + 30)}
                    <sup>o</sup>
                    {unit ? info.currentTemperature.Imperial.Unit : info.currentTemperature.Metric.Unit}
                </h6>

            </div>
        </div>
    )
}
export default ForcastCard