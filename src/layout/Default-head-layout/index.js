import { Outlet } from "react-router";
import Head from "../../components/Head/index";
import './index.css'

export default function HomeLayout() {

    return (
        <div className="default-head-layout-container">
             <div className="head-container">
                            <Head logoType={2}></Head>
            </div>
            <Outlet />
        </div>
    )
}