import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import HomeLayout from "./pages/HomeLayout/HomeLayout.jsx";
import MainMenu from "./pages/MainMenu/MainMenu.jsx";
import PlayMenu from "./pages/PlayMenu/PlayMenu.jsx";
import Game from "./pages/Game/Game.jsx";
import Statistics from "./pages/Statistics/Statistics.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomeLayout/>}>
                    <Route path="/home" element={<MainMenu/>}/>
                    <Route path="/home/play" element={<PlayMenu/>}/>
                </Route>
                <Route path="/game" element={<Game/>}/>
                <Route path="/stats" element={<Statistics/>}/>
            </Routes>
        </BrowserRouter>
    )
}
