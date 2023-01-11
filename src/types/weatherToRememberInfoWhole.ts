
import WeatherToRememberInfo from "./WeatherToRememberInfo";
import {Key} from "react";

interface weatherToRememberInfoWhole {
    id: Number| Key,
    created: Number,
    weatherInfo: WeatherToRememberInfo,
}

export default weatherToRememberInfoWhole;