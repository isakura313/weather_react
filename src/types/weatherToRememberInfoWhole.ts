
import WeatherToRememberInfo from "./WeatherToRememberInfo";
import {Key} from "react";

interface weatherToRememberInfoWhole {
    id: Number| Key,
    created: number,
    city: String,
    weatherInfo: WeatherToRememberInfo,
}

export default weatherToRememberInfoWhole;