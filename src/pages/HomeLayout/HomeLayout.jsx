import "./HomeLayout.css"
import {Outlet} from "react-router-dom";

export default function HomeLayout() {
    return (
        <>
            <div>Home Layout</div>
            <Outlet />
        </>
    )
}