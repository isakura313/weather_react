import {useState, useEffect} from 'react'
import WeatherStoreInfo from "../store/WeatherStateInfo";

interface weatherType {
    main: String,
    description: String,
    temperature: Number,
    pressure: Number,
    humidity: Number,
    sea_level: Number,
}

const WeatherInfo = (props: any) => {
    const [weatherInfo, updateWeatherInfo] = useState<weatherType | null>(null)
    return (
        <div>
            {WeatherStoreInfo.city}
            {props.weatherData !== null &&
                <h2>
                    <div>main: {props.weatherData.weather[0].main}</div>
                    <div>description: {props.weatherData.weather[0].description}</div>
                    <div> temp: {props.weatherData.main.temp}</div>
                    <div>feels_like: {props.weatherData.main.feels_like}</div>
                    <div> sea level: {props.weatherData.main.sea_level} </div>
                    <div>visibility: {props.weatherData.visibility} </div>
                </h2>
            }
        </div>
    )


}


export default WeatherInfo;