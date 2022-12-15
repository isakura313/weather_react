import { useState, useEffect } from 'react'
import InputData  from './components/InputData'
import WeatherInfo from "./components/WeatherInfo";
import axios from 'axios'
import {observer} from 'mobx-react-lite';
import WeatherStateInfo from "./store/WeatherStateInfo";

const  App= observer(()=> {
  const [weather, setWeather] = useState(null)

    const getData = async () => {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherStateInfo.city}&units=metric&appid=fa55c9b48bf19b93b69b0f2b81fdf56c`);
        setWeather(data);
    };
    useEffect(()=>{
       getData()
    }, [WeatherStateInfo.city])

  return (
    <div className="App">
        {WeatherStateInfo.city}
        <InputData />
        <WeatherInfo weatherData ={weather} />
    </div>
  )
})

export default App
