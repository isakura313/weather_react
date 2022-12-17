import {useState, useEffect} from 'react'
import InputData from './components/InputData'
import WeatherInfo from "./components/WeatherInfo";
import axios from 'axios'
import {observer} from 'mobx-react-lite';
import WeatherStateInfo from "./store/WeatherStateInfo";
import Grid from '@mui/material/Grid'
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
const App = observer(() => {
    const [weather, setWeather] = useState(null)

    const getData = async () => {
        const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherStateInfo.city}&units=metric&appid=fa55c9b48bf19b93b69b0f2b81fdf56c`);
        setWeather(data);
    };
    useEffect(() => {
        getData()
    }, [WeatherStateInfo.city])

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              rowSpacing={2}>
            <Grid item xs={12} >
                <Item>
                    <InputData/>
                </Item>
            </Grid>
            <Grid xs={6} item>
                <WeatherInfo weatherData={weather}/>
            </Grid>
        </Grid>
    )
})

export default App
