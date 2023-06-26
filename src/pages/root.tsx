import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div className='BaseContainer mx-0 px-0' >
            <Navbar />
            <Outlet />
        </div>
    )
}