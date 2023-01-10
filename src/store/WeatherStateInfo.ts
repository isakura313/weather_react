import {makeAutoObservable} from "mobx";
import {makePersistable} from 'mobx-persist-store';
import DeleteIcon from '@mui/icons-material/Delete';
import {Key} from "react";


interface cityTime {
    id: Number | Key,
    name: String,
    timezone: Number
}
interface weatherToRememberInfo{
    id: Number| Key,
    created: Number,
    weatherInfo: WeatherToRemeberInfo,
}

interface WeatherToRemeberInfo {
    main: String,
    description: String,
    temp: String,
    feels_like: String;
}

class WeatherStoreInfo {
    city = '';
    citiesWeatherToRemember: string[] = []
    citiesWeatherInfoToRemember: WeatherToRemeberInfo[] = []
    citiesTimesToRememeber: cityTime[] = []
    weather = ''

    constructor() {
        makeAutoObservable(this);
        // @ts-ignore
        makePersistable(this, {
            name: 'weather',
            properties: ['citiesWeatherToRemember', 'citiesTimesToRememeber'],
            storage: window.localStorage
        })
    }


    setCity(info: string) {
        this.city = info;
    }

    setWeatherToRemember(city: string) {
        this.citiesWeatherToRemember.push(city.charAt(0).toUpperCase() + city.slice(1))
        // я хочу записывать  не так часто, поэтому мне надо скешировать информацию
        this.citiesWeatherToRemember = [...new Set(this.citiesWeatherToRemember)];
    }


    setTimesToRemember(city: any) {
        this.citiesTimesToRememeber.push({
            id: +new Date(),
            name: city.name.charAt(0).toUpperCase() + city.name.slice(1),
            timezone: city.zone
        })
    }

    deleteTimesToRemember(name: String) {
        this.citiesTimesToRememeber = this.citiesTimesToRememeber.filter((cityItem:cityTime)=>cityItem.name != name)
    }
}

export default new WeatherStoreInfo()