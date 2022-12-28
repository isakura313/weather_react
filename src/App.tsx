import {useState, useEffect} from 'react'
import axios from 'axios'
import Grid from '@mui/material/Grid'
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import InputData from './components/InputData'
import WeatherInfo from "./components/WeatherInfo";
import {observer} from 'mobx-react-lite';
import WeatherStateInfo from "./store/WeatherStateInfo";
import Nav from "./components/Nav";
import {Routes, Route, Outlet, Link} from "react-router-dom";
import Home from './pages/Home';
import SavedTimes from "./pages/SavedTimes";
import SavedCity from "./pages/SavedCity";


const App = observer(() => {

    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Nav />}>
                <Route index element={<Home/>}/>
                    <Route path="savedCity" element={<SavedCity/>}/>
                    <Route path="savedTimes" element={<SavedTimes/>}/>

                    {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                </Route>
            </Routes>
        </div>

    )
})

export default App;
