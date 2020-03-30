import React from "./node_modules/react";

function Navbar() {
    return (
        <nav className="navbar">
            <a class="navbar-brand" href="/">Google Books</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a class="nav-link" href="/">Search</a>
                </li>
                <li className="nav-item">
                    <a class="nav-link" href="/">Saved</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;