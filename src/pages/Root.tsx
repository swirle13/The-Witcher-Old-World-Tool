import Footer from '../components/Footer';
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <div
            className='flex-wrapper mx-0 px-0'
            style={{
                display: 'flex',
                minHeight: '100vh',
                flexDirection: 'column',
                justifyContent: 'flex-start'
            }}
        >
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}