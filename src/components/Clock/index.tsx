import {useState, useEffect} from 'react';
import {DateTime} from 'luxon';

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

function fixZeroProblem(timeNumber: Number): String {
    if (timeNumber < 10) {
        return `0${timeNumber}`
    } else {
        return `${timeNumber}`
    }
}

function Clock(props: propsClock) {
    const [date, updateDate] = useState(DateTime.now());

    function refreshClock() {
        updateDate(DateTime.now())
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
            clearInterval(timerId)
        }
    }, [])


    return (
        <div>
            <h1>{props.city}</h1>
            <div> {fixZeroProblem(date.setZone(`UTC${propsEditor(props.timeZone)}`).hour)}:
                {fixZeroProblem(date.setZone(`UTC${propsEditor(props.timeZone)}`).minute)}:
                {fixZeroProblem(date.setZone(`UTC${propsEditor(props.timeZone)}`).second)}
            </div>
        </div>
    )
}

export default Clock