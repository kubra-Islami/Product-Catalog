import React from 'react';
import {Link} from "react-router";

function NotFound() {
    return (
        <div>
           <h1>404 </h1>
            <p> page Not Found</p>
            <Link to="/" >Go Home</Link>
        </div>
    )
}

export default NotFound;