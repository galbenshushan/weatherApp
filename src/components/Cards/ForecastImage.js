import React from 'react'

const ForecastImage = ({ temp: search, imgSize }) => {
    const imageSize = imgSize;
    const forecastData = [
        { forecastString: "Clear", srcImg: "images/icons/icon-1.svg", toLowerCase: false },
        { forecastString: "mostly sunny", srcImg: "images/icons/icon-1.svg", toLowerCase: true },
        { forecastString: "Sunny", srcImg: "images/icons/icon-2.svg", toLowerCase: false },
        { forecastString: "partly sunny", srcImg: "images/icons/icon-3.svg", toLowerCase: true },
        { forecastString: "mostly clear", srcImg: "images/icons/icon-4.svg", toLowerCase: true },
        { forecastString: "cloud", srcImg: "images/icons/icon-5.svg", toLowerCase: true },
        { forecastString: "overcast", srcImg: "images/icons/icon-7.svg", toLowerCase: true },
        { forecastString: "wind", srcImg: "images/icons/icon-8.svg", toLowerCase: true },
        { forecastString: "rain", srcImg: "images/icons/icon-10.svg", toLowerCase: true },
        { forecastString: "shower", srcImg: "images/icons/icon-11.svg", toLowerCase: true },
        { forecastString: "storm", srcImg: "images/icons/icon-12.svg", toLowerCase: true },
        { forecastString: "snow", srcImg: "images/icons/icon-14.svg", toLowerCase: true },
    ]

    return (
        <div className="forecast-icon" style={{ opacity: '100%' }}>
            {forecastData.map((item) => (
                item.toLowerCase ?
                    search.toLowerCase().includes(item.forecastString) && <img src={item.srcImg} width={imageSize} alt='img' /> :
                    search.includes(item.forecastString) && <img src={item.srcImg} width={imageSize} alt='img' />
            )
            )}
        </div>
    )
}

export default ForecastImage
