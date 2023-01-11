
import WeatherToRememberInfo from "./WeatherToRememberInfo";
import {Key} from "react";

interface weatherToRememberInfoWhole {
    id: Number| Key,
    created: Number,
    city: String,
    weatherInfo: WeatherToRememberInfo,
}

export default weatherToRememberInfoWhole;