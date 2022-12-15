import {useEffect, useState} from 'react'
import {Button, OutlinedInput, Container} from "@mui/material";
import WeatherStoreInfo from "../store/WeatherStateInfo";


function InputData() {
    const [cityInfo, updateCityInfo] = useState('')

    function updateInfo(e) {
        updateCityInfo(e.target.value)
    }

    function getInfo() {
        WeatherStoreInfo.setCity(cityInfo)
    }

    function keyDown(e) {
        if (e.key === 'enter') {
            getInfo()
        }
    }

    return (
        <Container maxWidth="sm">
            <OutlinedInput color="primary" onChange={updateInfo} onKeyDown={keyDown}/>
            <Button variant='outlined' onClick={getInfo}>Search</Button>
        </Container>

    )

}


export default InputData