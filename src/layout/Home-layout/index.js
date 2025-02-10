import { Outlet } from "react-router";
import './index.css'

export default function HomeLayout() {
    return (
        <div className="home-layout-container">
           
            <Outlet />
        </div>
    )
}