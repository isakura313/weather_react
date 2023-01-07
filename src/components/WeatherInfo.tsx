import {useState, Key} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import Loader from "./Loader";
import Typography from '@mui/material/Typography';
import TimeInfo from "./TimeInfo";
import WindInfo from "./WindInfo";

interface weatherType {
    main: String,
    description: String,
    temperature: Number,
    pressure: Number,
    humidity: Number,
    sea_level: Number,
}

interface RowInterface {
    name: Key,
    data: String
}

function createData(
    name: string,
    data: string,
) {
    return {name, data};
}


const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const WeatherInfo = (props: any) => {

    const [weatherInfo, updateWeatherInfo] = useState<weatherType | null>(null)
    let rows: any = [];
    if (props.weatherData !== null) {
        rows = [
            createData('main', props.weatherData.weather[0].main),
            createData('description', props.weatherData.weather[0].description),
            createData('temp', props.weatherData.main.temp),
            createData('feels_like', props.weatherData.main.feels_like),
            createData('sea level', props.weatherData.main.sea_level),
            createData('visibility', props.weatherData.visibility),
        ]
    }
    return (
        <div>
            {props.loaderState &&
                <Loader/>
            }
            {props.weatherData == null && !props.loaderState &&
                <Typography variant="h5" gutterBottom mt={2} align="center">
                    Choose city, where you wanna know weather
                </Typography>
            }

            {props.weatherData !== null && props.loaderState === false &&
                <div>
                    <Typography variant="h5" gutterBottom mt={2} align="center">
                        Weather in {props.city}
                    </Typography>
                    <Item>
                        <TableContainer>
                            <Table size="small" aria-label="Weather table">
                                <TableBody>
                                    {rows.map((row: RowInterface) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.data}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Item>
                    <Item>
                    <TimeInfo weatherInfo={props.weatherData}/>
                    </Item>
                    <Item>
                    <WindInfo wind={props.weatherData.wind}/>
                    </Item>
                </div>
            }
        </div>
    )


}


export default WeatherInfo;