import {useState, useEffect, forwardRef, ReactElement, Ref} from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputData from '../components/InputData'
import WeatherInfo from "../components/WeatherInfo";
import {observer} from 'mobx-react-lite';
import WeatherStateInfo from "../store/WeatherStateInfo";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import GridItem from '../components/GridItem'
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Home = observer(() => {
    const [open, setOpen] = useState(false);


    const [weather, setWeather] = useState(null)
    const [loaderState, setLoaderState] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const getData = async () => {
        if (WeatherStateInfo.city !== '') {
            setLoaderState(true)
            try {
                const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${WeatherStateInfo.city}&units=metric&appid=${import.meta.env.VITE_REACT_KEY}`);
                console.log(data);
                setWeather(data);
            } catch (e) {
                handleClickOpen()
                setWeather(null)
            }
            setLoaderState(false);

        }

    };
    useEffect(() => {
        getData()
    }, [WeatherStateInfo.city])

    return (
        // <div>
            <Grid  justifyContent="center" alignItems="center"
                  columnSpacing={{xs: 1, sm: 2, md: 3}}
                  rowSpacing={2}>
                <Grid item xs={12}>
                    <GridItem>
                        <InputData mode="now"/>
                    </GridItem>
                </Grid>
                <Grid xs={6} item>
                    <WeatherInfo weatherData={weather} city={WeatherStateInfo.city} loaderState={loaderState}/>
                </Grid>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"Error"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            We can't find city <span> {WeatherStateInfo.city}</span> Try something else
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </Grid>

        // </div>
    )
})

export default Home
