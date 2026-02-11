import React from 'react';
import {NavLink} from "react-router";

const linkClass = ({isActive}) => {
    "nav-link"+ (isActive ? " fw-bold text-primary" : "")
};
function Navbar() {
    return (
        <nav className="navbar navbar-expand bg-light border-bottom">
            <div className="container">
                <span className="navbar-brand fw-bold">
                    product catalog
                </span>
                <div className="navbar-nav">
                    <NavLink className={`mx-2 ${linkClass}`} to="/">Home</NavLink>
                    <NavLink className={`mx-2 ${linkClass}`} to="/products">Products</NavLink>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;