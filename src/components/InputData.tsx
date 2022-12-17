import React, {useState} from 'react'
import {Button, OutlinedInput, Container} from "@mui/material";
import WeatherStoreInfo from "../store/WeatherStateInfo";
import Stack from '@mui/material/Stack';


function InputData() {
    const [cityInfo, updateCityInfo] = useState('')

    function updateInfo(e: React.ChangeEvent<HTMLInputElement>) {
        updateCityInfo(e.target.value)
    }

    function getInfo() {
        WeatherStoreInfo.setCity(cityInfo)
    }

    function keyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            getInfo()
        }
    }

    return (
        <Container maxWidth="sm">
            <Stack spacing={2} direction="row"   justifyContent="center">
                <OutlinedInput color="primary" onChange={updateInfo} onKeyDown={keyDown} size="small"/>
                <Button variant='contained' onClick={getInfo}>Search</Button>
            </Stack>
        </Container>

    )

}


export default InputData