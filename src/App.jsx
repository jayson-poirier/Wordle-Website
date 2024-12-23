import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import HomeLayout from "./pages/HomeLayout/HomeLayout.jsx";
import MainMenu from "./pages/MainMenu/MainMenu.jsx";
import PlayMenu from "./pages/PlayMenu/PlayMenu.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" component={<HomeLayout />}>
          <Route path="home" component={<MainMenu />} />
          <Route path="home/play" component={<PlayMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
