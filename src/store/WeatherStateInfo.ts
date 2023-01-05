import {makeAutoObservable} from "mobx";
import { makePersistable } from 'mobx-persist-store';



interface cityTime {
    name: String,
    timezone: Number

}
class WeatherStoreInfo {
    city = '';
    citiesWeatherToRemember: string[] = []
    citiesTimesToRememeber: any[] = []
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
        this.citiesWeatherToRemember = [...new Set(this.citiesWeatherToRemember)];
    }

    setTimesToRemember(city: any) {
        console.log(city.timezone);
        this.citiesTimesToRememeber.push({name: city.name.charAt(0).toUpperCase()+ city.name.slice(1), timezone: city.zone})
        console.log(this.citiesTimesToRememeber)
        // this.citiesTimesToRememeber = [...new Set(this.citiesTimesToRememeber)];
    }
}

export default new WeatherStoreInfo()