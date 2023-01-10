import Typography from "@mui/material/Typography";
import InputData from '../components/InputData'
import Grid from "@mui/material/Grid";
import WeatherStateInfo from "../store/WeatherStateInfo";
import {observer} from "mobx-react-lite";
import GridItem from "../components/GridItem";
import axios from "axios";
import {useEffect, useState} from "react";


const SavedTimes = observer(()=>{
    const [loaderState, setLoaderState] = useState(false);
    const [weather, setWeather] = useState(null)

    const getData = async () => {
        if (WeatherStateInfo.city !== '') {
            setLoaderState(true)
            try {
                const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherStateInfo.city}&units=metric&appid=${import.meta.env.VITE_REACT_KEY}`);
                setWeather(data);
            } catch (e) {
                setWeather(null)
            }
            setLoaderState(false);

        }

    };
    useEffect(() => {
        getData()
    }, [WeatherStateInfo.city])
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center"
              columnSpacing={{xs: 1, sm: 2, md: 3}}
              rowSpacing={2}>
            <Grid item xs={12}>
                <GridItem>
                    <InputData mode="savedWeather"/>
                </GridItem>
            </Grid>
            <Grid xs={6} item>
            </Grid>
            {WeatherStateInfo.citiesWeatherToRemember}
        </Grid>
    )
})
export default SavedTimes;