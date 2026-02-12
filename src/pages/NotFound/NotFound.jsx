import { Link } from "react-router";
import "./NotFound.css";

function NotFound() {
    return (
        <div className="notfound-wrapper container">
            <div className="notfound-card">
                <div className="notfound-code">404</div>

                <div className="notfound-text">
                    Oops! The page you are looking for does not exist.
                </div>

                <Link to="/" className="btn btn-brand">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
