import Navbar from "../components/Navbar.jsx";
import {Outlet} from "react-router-dom";
import React from "react";

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