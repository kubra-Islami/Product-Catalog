import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router";

const Layout = () => {
    return(
        <>
            <Navbar />
            <div className="container py-4">
                <Outlet/>
            </div>
        </>
    )
};


export default Layout;