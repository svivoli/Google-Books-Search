import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a class="navbar-brand" href="/">Google Books</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a class="nav-link" href="/">Search</a>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="/">Saved</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;