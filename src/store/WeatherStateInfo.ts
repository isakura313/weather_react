import {makeAutoObservable} from "mobx";
import { makePersistable } from 'mobx-persist-store';



interface cityTime {
    name: String,
    timezone: Number
}
interface WeatherToRemeberInfo{
    main:String,
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
        makePersistable(this, {name: 'weather', properties: ['citiesWeatherToRemember', 'citiesTimesToRememeber'], storage: window.localStorage})
    }


    setCity(info: string) {
        this.city = info;
    }

    setWeatherToRemember(city: string) {
        this.citiesWeatherToRemember.push(city.charAt(0).toUpperCase()+ city.slice(1))
        // я хочу записывать  не так часто, поэтому мне надо скешировать информацию
        this.citiesWeatherToRemember = [...new Set(this.citiesWeatherToRemember)];
    }


    setTimesToRemember(city: any) {
        console.log(city.timezone);
        this.citiesTimesToRememeber.push({name: city.name.charAt(0).toUpperCase()+ city.name.slice(1), timezone: city.zone})
        console.log(this.citiesTimesToRememeber)
    }
}

export default new WeatherStoreInfo()