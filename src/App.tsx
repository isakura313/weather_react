import {observer} from 'mobx-react-lite';
import {Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from './pages/Home';
import SavedTimes from "./pages/SavedTimes";
import SavedCity from "./pages/SavedCity";


const App = observer(() => {

    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Nav/>}>
                    <Route index element={<Home/>}/>
                    <Route path="savedCity" element={<SavedCity/>}/>
                    <Route path="savedTimes" element={<SavedTimes/>}/>
                </Route>
            </Routes>
        </div>

    )
})

export default App;
