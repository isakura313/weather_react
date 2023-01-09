import Typography from "@mui/material/Typography";
import InputData from '../components/InputData'
import Grid from "@mui/material/Grid";
import WeatherInfo from "../components/WeatherInfo";
import WeatherStateInfo from "../store/WeatherStateInfo";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {observer} from "mobx-react-lite";
import Clock from '../components/Clock'
import GridItem from "../components/GridItem";



const SavedTimes = observer(() => {
    const weatherCities = WeatherStateInfo.citiesTimesToRememeber.slice()
    const listClock = weatherCities.map((city: any) => {
        return (
            <Grid item xs={4} md={4} key={city.key}>
                <Clock key={city.name} city={city.name} timeZone={city.timezone}/>
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
                        <InputData mode="savedTimes"/>
                    </GridItem>
                </Grid>
                <Grid xs={6} item>
                </Grid>

            </Grid>
            <Grid container spacing={2}>
                {listClock}
            </Grid>
        </div>
    )
})
export default SavedTimes;