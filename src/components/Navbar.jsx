import { NavLink } from "react-router";

function Navbar() {
    const linkClass = ({ isActive }) =>
        "nav-link mx-2" + (isActive ? " fw-bold text-gray-600" : "");

    return (
        <nav className="navbar navbar-expand bg-light border-bottom">
            <div className="container">
                <span className="navbar-brand fw-bold">
                  Product<span className="text-primary">Catalog</span>
                </span>

                <div className="navbar-nav">
                    <NavLink to="/" className={linkClass}>
                        Home
                    </NavLink>

                    <NavLink to="/products" className={linkClass}>
                        Products
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
