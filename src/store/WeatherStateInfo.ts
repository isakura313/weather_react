import {makeAutoObservable} from "mobx";
import axios from "axios";


class WeatherStoreInfo {
    city = 'Moscow';
    weather = ''

    constructor() {
        makeAutoObservable(this);
    }

    setCity(info:string) {
        this.city = info;
    }
    async getData(){
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&appid=fa55c9b48bf19b93b69b0f2b81fdf56c`);
        console.log(data)
        this.weather = data;
    }
}

export default new WeatherStoreInfo()