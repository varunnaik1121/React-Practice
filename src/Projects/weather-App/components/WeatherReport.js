import React from 'react'

const WeatherReport = ({details,data}) => {
  console.log(details)
  
 
    return <>
              {details.success ? <div className="capital-weather">
                        <div>
                          <div className="weather-title">
                            <img
                              className="icon"
                              src={details?.current?.weather_icons[0]}
                              alt="icon"
                            ></img>
                            <h2>
                              Weather Report of <span className='title-capital'>{details?.location?.name}</span>
                            </h2>
                          </div>
                        </div>

                        <div>
                          temperature is : <span>{details?.current?.temperature}</span>
                        </div>
                        <div>
                         Wind speed is : <span>{details?.current?.wind_speed}</span>
                        </div>
    </div>
: <div>{details?.error?.info}</div>}
    </>
}

export default WeatherReport
