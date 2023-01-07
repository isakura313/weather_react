import Typography from "@mui/material/Typography";
import InputData from '../components/InputData'
import Grid from "@mui/material/Grid";
import WeatherInfo from "../components/WeatherInfo";
import WeatherStateInfo from "../store/WeatherStateInfo";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import {observer} from "mobx-react-lite";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SavedTimes = observer(()=>{
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center"
              columnSpacing={{xs: 1, sm: 2, md: 3}}
              rowSpacing={2}>
            <Grid item xs={12}>
                <Item>
                    <InputData mode="savedWeather"/>
                </Item>
            </Grid>
            <Grid xs={6} item>
                {/*<WeatherInfo weatherData={weather} city={WeatherStateInfo.city} loaderState={loaderState}/>*/}
            </Grid>
            <h1></h1>
            {WeatherStateInfo.citiesWeatherToRemember}

        </Grid>
    )
})
export default SavedTimes;