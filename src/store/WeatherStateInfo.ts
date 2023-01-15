import {makeAutoObservable} from "mobx";
import {makePersistable} from 'mobx-persist-store';
import DeleteIcon from '@mui/icons-material/Delete';
import {Key} from "react";
import WeatherToRememberInfo from "../types/WeatherToRememberInfo";
import WeatherToRememberInfoWhole from "../types/weatherToRememberInfoWhole";
import axios from 'axios';

interface cityTime {
    id: Number | Key,
    name: String,
    timezone: Number
}

class WeatherStoreInfo {
    city = '';
    citiesWeatherToRemember: string[] = []
    citiesWeatherInfoToRemember: WeatherToRememberInfo[] = []
    citiesWeatherInfoToRememberWhole: WeatherToRememberInfoWhole[] = []
    citiesTimesToRememeber: cityTime[] = []
    weather = ''

    constructor() {
        makeAutoObservable(this);
        // @ts-ignore
        makePersistable(this, {
            name: 'weather',
            properties: ['citiesWeatherToRemember', 'citiesTimesToRememeber', 'citiesWeatherInfoToRememberWhole'],
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
        this.citiesTimesToRememeber = this.citiesTimesToRememeber.filter((cityItem: cityTime) => cityItem.name != name)
    }

    async getWeatherToRemember(city: String) {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_REACT_KEY}`);
        this.citiesWeatherInfoToRememberWhole.push({
            id: +new Date(),
            created: +new Date(),
            city: city,
            weatherInfo: {
                main: data.weather[0].main,
                description: data.weather[0].description,
                temp: data.main.temp,
                feels_like: data.main.feels_like
            }
        })
    }

    async updateGetWeatherToRemember(city:WeatherToRememberInfoWhole) {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city.city}&units=metric&appid=${import.meta.env.VITE_REACT_KEY}`);
        this.citiesWeatherInfoToRememberWhole = this.citiesWeatherInfoToRememberWhole.map((el) => {
             if(el.city === city.city){
                 city = {
                     id: +new Date(),
                     created:Number(new Date()),
                     city: city.city,
                     weatherInfo: {
                         main: data.weather[0].main,
                         description: data.weather[0].description,
                         temp: data.main.temp,
                         feels_like: data.main.feels_like
                     }
                 }
                 return city;
             }
             return el;
        })
    }
}

export default new WeatherStoreInfo()