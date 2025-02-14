import { use } from "react";
import { Outlet } from "react-router";
import { useNavigate,useLocation } from "react-router";

export default function RouteProxy(props) {
   
    return (
        <Outlet />
    )
}