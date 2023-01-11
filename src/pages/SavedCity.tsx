import Typography from "@mui/material/Typography";
import InputData from '../components/InputData'
import Grid from "@mui/material/Grid";
import WeatherStateInfo from "../store/WeatherStateInfo";
import {observer} from "mobx-react-lite";
import GridItem from "../components/GridItem";
import axios from "axios";
import {useEffect, useState} from "react";
import Clock from "../components/Clock";
import weatherToRememberInfoWhole from "../types/weatherToRememberInfoWhole";
import WeatherToRemeber from "../components/WeatherToRemeber";


const SavedTimes = observer(() => {
    const [loaderState, setLoaderState] = useState(false);
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        checkUpdated();
    }, []);

    async function checkUpdated(){

        // i don't wanna set more and more
        WeatherStateInfo.citiesWeatherInfoToRememberWhole.map((city)=>{
            //  не допустить дублирования...

        })
    }
    const listWeather = WeatherStateInfo.citiesWeatherInfoToRememberWhole.map((weather: weatherToRememberInfoWhole, index) => {
        return (
            <Grid item xs={4} md={4} key={index}>
                <WeatherToRemeber weatherInfo={weather.weatherInfo} city={weather.city}/>
            </Grid>
        )
    })
    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center"
                  columnSpacing={{xs: 1, sm: 2, md: 3}}
                  rowSpacing={2}>
                <Grid item xs={12}>
                    <GridItem>
                        <InputData mode="savedWeather"/>
                    </GridItem>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {listWeather}
            </Grid>
        </div>
    )
})
export default SavedTimes;