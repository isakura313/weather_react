import {useState, useEffect} from 'react';
import './index.css'
import {DateTime} from 'luxon';
import WeatherStoreInfo from '../../store/WeatherStateInfo';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import reformatZero from "../../helpers/reformatZero";
import GridItem from "../GridItem";

type propsClock = {
    city: String,
    timeZone: Number,
}

const propsEditor = (timeZone: any) => {
    if (timeZone >= 0) {
        return `+${timeZone}`
    } else {
        return `${timeZone}`
    }
}
const ITEM_HEIGHT = 48;



function Clock(props: propsClock) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [date, updateDate] = useState(DateTime.now());




    function refreshClock() {
        updateDate(DateTime.now())
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 500);
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])

    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <GridItem>
            <h1>{props.city}</h1>
            <div> {reformatZero(date.setZone(`UTC${propsEditor(props.timeZone)}`).hour)}:
                {reformatZero(date.setZone(`UTC${propsEditor(props.timeZone)}`).minute)}:
                {reformatZero(date.setZone(`UTC${propsEditor(props.timeZone)}`).second)}
            </div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={() => WeatherStoreInfo.deleteTimesToRemember(props.city)}
            >
                <MoreVertIcon />
            </IconButton>
        </GridItem>
    )
}

export default Clock