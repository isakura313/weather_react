import {useState, useEffect} from 'react';
import './index.css'
import {DateTime} from 'luxon';
import WeatherStoreInfo from '../../store/WeatherStateInfo';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import reformatZero from "../../helpers/reformatZero";
import GridItem from "../GridItem";
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';



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
    const handleClose = () => {
        setAnchorEl(null);
    };
    function handleCloseMenu(){

        setAnchorEl(null);
        WeatherStoreInfo.deleteTimesToRemember(props.city)
    }
    const options = [
        'Delete',
    ];
    function handleClick(event: React.MouseEvent<HTMLElement>){
        setAnchorEl(event.currentTarget);
    }

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
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Delete'} onClick={handleCloseMenu}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </GridItem>
    )
}

export default Clock