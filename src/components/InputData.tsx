import React, {useState, useEffect} from 'react'
import {Button, OutlinedInput, Container} from "@mui/material";
import WeatherStoreInfo from "../store/WeatherStateInfo";
import Stack from '@mui/material/Stack';
import WeatherStateInfo from "../store/WeatherStateInfo";
import axios from "axios";


function InputData(props: any) {
    const [cityInfo, updateCityInfo] = useState('')
    const [zoneInfo, updateZoneInfo] = useState(0)
    const [zoneCall, updateZoneCall] = useState(false);

    function updateInfo(e: React.ChangeEvent<HTMLInputElement>) {
        updateCityInfo(e.target.value)
    }

    async function getInfo() {
        if (props.mode === 'now') {
            getInfoNow()
        } else if (props.mode === 'savedWeather') {
            savedCity()
        } else if (props.mode === 'savedTimes') {
            await savedTimes()
        }
    }

    function getInfoNow() {
        WeatherStoreInfo.setCity(cityInfo)
    }

    function savedCity() {
        WeatherStoreInfo.setWeatherToRemember(cityInfo)
    }

    async function savedTimes() {

        updateZoneCall(true);
        // if(zoneInfo) {


        // }

    }

    const getData = async () => {
        if (cityInfo !== '') {
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityInfo}&units=metric&appid=${import.meta.env.VITE_REACT_KEY}`);
            alert(data.timezone)
            updateZoneInfo(data.timezone/60);
            WeatherStoreInfo.setTimesToRemember({name: cityInfo, zone: zoneInfo});
            alert(WeatherStoreInfo.citiesTimesToRememeber[0].name)
            // updateZoneCall(false);
        }

    };
    useEffect(() => {
        getData()
    }, [zoneCall])


    function keyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            getInfo()
        }
    }

    return (
        <Container maxWidth="sm">
            <Stack spacing={2} direction="row" justifyContent="center">
                <OutlinedInput color="primary" onChange={updateInfo} onKeyDown={keyDown} size="small"/>
                <Button variant='contained' onClick={getInfo}>Search</Button>
            </Stack>
        </Container>

    )

}


export default InputData