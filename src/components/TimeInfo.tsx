import {DateTime} from "luxon";
import Typography from '@mui/material/Typography';


function TimeTable(props: any) {
    const dt_sunrise = DateTime.fromSeconds(props.weatherInfo.sys.sunrise).setZone(`UTC+${props.weatherInfo.timezone / 3600}`);


    const dt_sunset = DateTime.fromSeconds(props.weatherInfo.sys.sunset).setZone(`UTC+${props.weatherInfo.timezone / 3600}`);
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Time info
            </Typography>
            <Typography variant="h6" gutterBottom>
            sunrise at:
                {dt_sunrise.hour}:{dt_sunrise.minute}
            </Typography>
            <Typography variant="h6" gutterBottom>
                sunset at:
                {dt_sunset.hour}:{dt_sunset.minute}
            </Typography>
        </div>
    )

}

export default TimeTable