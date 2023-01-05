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


const listItems = WeatherStateInfo.citiesTimesToRememeber.map((city, index) =>
    <div key={+new Date()}>
        <p>{city.name}</p>
    </div>)


const SavedTimes = observer(() => {
    return (

        <Grid container direction="row" justifyContent="center" alignItems="center"
              columnSpacing={{xs: 1, sm: 2, md: 3}}
              rowSpacing={2}>
            <Grid item xs={12}>
                <Item>
                    <InputData mode="savedTimes"/>
                </Item>
            </Grid>
            {listItems}
            <Grid xs={6} item>
                {listItems}
                {JSON.stringify(WeatherStateInfo.citiesTimesToRememeber)}
            </Grid>
        </Grid>
    )
})
export default SavedTimes;