import React, {useState, useEffect, useRef} from 'react'
import {Button, OutlinedInput, Container} from "@mui/material";
import WeatherStoreInfo from "../store/WeatherStateInfo";
import Stack from '@mui/material/Stack';
import WeatherStateInfo from "../store/WeatherStateInfo";
import axios from "axios";
import WeatherToRememberInfo from "../types/WeatherToRememberInfo";


function InputData(props: any) {
    const [cityInfo, updateCityInfo] = useState('')
    const [timeInfo, updateTimeInfo] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

    const [zoneInfo, updateZoneInfo] = useState(0)
    const [zoneCall, updateZoneCall] = useState(false);

    function updateInfo(e: React.ChangeEvent<HTMLInputElement>) {
            updateCityInfo(e.target.value)
    }


    async function getInfo() {
        // @ts-ignore

        if (props.mode === 'now') {
            getInfoNow()
        } else if (props.mode === 'savedWeather') {
            await savedCity()
        } else if (props.mode === 'savedTimes') {
            await savedTimes()
        }
        updateCityInfo('')

    }

    function getInfoNow() {
        WeatherStoreInfo.setCity(cityInfo)
        console.log(inputRef.current)
    }

    async function savedCity() {
        WeatherStoreInfo.setWeatherToRemember(cityInfo)
        await WeatherStoreInfo.getWeatherToRemember(cityInfo);
    }

     function savedTimes() {
         updateTimeInfo(cityInfo);
    }

    const getData = async () => {
        if (cityInfo !== '') {
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&units=metric&appid=${import.meta.env.VITE_REACT_KEY}`);
            updateZoneInfo(data.timezone/60);
            WeatherStoreInfo.setTimesToRemember({name: cityInfo, zone: data.timezone/3600});
        }

    };
    useEffect(() => {
        getData()
    }, [timeInfo])


    async function keyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            await getInfo()
        }
    }

    return (
        <Container maxWidth="sm">
            <Stack spacing={2} direction="row" justifyContent="center">
                <OutlinedInput color="primary" onChange={updateInfo} onKeyDown={keyDown} size="small" value={cityInfo}/>
                <Button variant='contained' onClick={getInfo}>Search</Button>
            </Stack>
        </Container>

    )

}


export default InputData