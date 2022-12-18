import {makeAutoObservable} from "mobx";
import axios from "axios";


class WeatherStoreInfo {
    city = '';
    weather = ''

    constructor() {
        makeAutoObservable(this);
    }

    setCity(info:string) {
        this.city = info;
    }
}

export default new WeatherStoreInfo()