import React from "react";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="/">Google Books</a>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Search <img className="nav-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTAsMTkwYy01LjUyLDAtMTAsNC40OC0xMCwxMHM0LjQ4LDEwLDEwLDEwYzUuNTIsMCwxMC00LjQ4LDEwLTEwUzMxNS41MiwxOTAsMzEwLDE5MHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik01MDAuMjgxLDQ0My43MTlsLTEzMy40OC0xMzMuNDhDMzg4LjU0NiwyNzcuNDg1LDQwMCwyMzkuNTU1LDQwMCwyMDBDNDAwLDg5LjcyLDMxMC4yOCwwLDIwMCwwUzAsODkuNzIsMCwyMDAgICAgczg5LjcyLDIwMCwyMDAsMjAwYzM5LjU1NiwwLDc3LjQ4Ni0xMS40NTUsMTEwLjIzOS0zMy4xOThsMzYuODk1LDM2Ljg5NWMwLjAwNSwwLjAwNSwwLjAxLDAuMDEsMC4wMTYsMC4wMTZsOTYuNTY4LDk2LjU2OCAgICBDNDUxLjI3Niw1MDcuODM4LDQ2MS4zMTksNTEyLDQ3Miw1MTJjMTAuNjgxLDAsMjAuNzI0LTQuMTYyLDI4LjI3OC0xMS43MTZDNTA3LjgzNyw0OTIuNzMxLDUxMiw0ODIuNjg3LDUxMiw0NzIgICAgUzUwNy44MzcsNDUxLjI2OSw1MDAuMjgxLDQ0My43MTl6IE0zMDUuNTM2LDM0NS43MjdjMCwwLjAwMS0wLjAwMSwwLjAwMS0wLjAwMiwwLjAwMkMyNzQuNjY3LDM2OC4xNDksMjM4LjE3NSwzODAsMjAwLDM4MCAgICBjLTk5LjI1MiwwLTE4MC04MC43NDgtMTgwLTE4MFMxMDAuNzQ4LDIwLDIwMCwyMHMxODAsODAuNzQ4LDE4MCwxODBjMCwzOC4xNzUtMTEuODUxLDc0LjY2Ny0zNC4yNzIsMTA1LjUzNSAgICBDMzM0LjUxMSwzMjAuOTg4LDMyMC45ODksMzM0LjUxMSwzMDUuNTM2LDM0NS43Mjd6IE0zMjYuNTE2LDM1NC43OTNjMTAuMzUtOC40NjcsMTkuODExLTE3LjkyOCwyOC4yNzctMjguMjc3bDI4LjM3MSwyOC4zNzEgICAgYy04LjYyOCwxMC4xODMtMTguMDk0LDE5LjY1LTI4LjI3NywyOC4yNzdMMzI2LjUxNiwzNTQuNzkzeiBNNDg2LjEzOSw0ODYuMTM5Yy0zLjc4LDMuNzgtOC44MDEsNS44NjEtMTQuMTM5LDUuODYxICAgIHMtMTAuMzU5LTIuMDgxLTE0LjEzOS01Ljg2MWwtODguNzk1LTg4Ljc5NWMxMC4xMjctOC42OTEsMTkuNTg3LTE4LjE1LDI4LjI3Ny0yOC4yNzdsODguNzk4LDg4Ljc5OCAgICBDNDg5LjkxOSw0NjEuNjM5LDQ5Miw0NjYuNjU4LDQ5Miw0NzJDNDkyLDQ3Ny4zNDIsNDg5LjkxOSw0ODIuMzYxLDQ4Ni4xMzksNDg2LjEzOXoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMDAsNDBjLTg4LjIyNSwwLTE2MCw3MS43NzUtMTYwLDE2MHM3MS43NzUsMTYwLDE2MCwxNjBzMTYwLTcxLjc3NSwxNjAtMTYwUzI4OC4yMjUsNDAsMjAwLDQweiBNMjAwLDM0MCAgICBjLTc3LjE5NiwwLTE0MC02Mi44MDQtMTQwLTE0MFMxMjIuODA0LDYwLDIwMCw2MHMxNDAsNjIuODA0LDE0MCwxNDBTMjc3LjE5NiwzNDAsMjAwLDM0MHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zMTIuMDY1LDE1Ny4wNzNjLTguNjExLTIyLjQxMi0yMy42MDQtNDEuNTc0LTQzLjM2LTU1LjQxM0MyNDguNDc5LDg3LjQ5LDIyNC43MjEsODAsMjAwLDgwYy01LjUyMiwwLTEwLDQuNDc4LTEwLDEwICAgIGMwLDUuNTIyLDQuNDc4LDEwLDEwLDEwYzQxLjA5OSwwLDc4LjYzMSwyNS44MTgsOTMuMzk2LDY0LjI0N2MxLjUyOCwzLjk3Niw1LjMxNyw2LjQxNiw5LjMzNyw2LjQxNiAgICBjMS4xOTIsMCwyLjQwNS0wLjIxNSwzLjU4NC0wLjY2OEMzMTEuNDcyLDE2OC4wMTQsMzE0LjA0NiwxNjIuMjI5LDMxMi4wNjUsMTU3LjA3M3oiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" /></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved <img className="nav-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtMjQwIDBoLTEwNGMtNC40MTc5NjkgMC04IDMuNTgyMDMxLTggOHY1NmgtMTIwYy00LjQxNzk2OSAwLTggMy41ODIwMzEtOCA4djQwMGMwIDQuNDE3OTY5IDMuNTgyMDMxIDggOCA4aDIzMmM0LjQxNzk2OSAwIDgtMy41ODIwMzEgOC04di00NjRjMC00LjQxNzk2OS0zLjU4MjAzMS04LTgtOHptLTggNDE2aC04OHYtMTZoODh6bS0yMTYtMjk2aDExMnYyNDBoLTExMnptMjE2LTMyaC04OHYtMjRoODh6bS0yMTYgMjg4aDExMnYyNGgtMTEyem0xMjggOHYtMjgwaDg4djI4MHptODgtMzY4djMyaC04OHYtMzJ6bS0xMDQgNjR2MjRoLTExMnYtMjR6bS0xMTIgMzM2aDExMnY0OGgtMTEyem0xMjggNDh2LTMyaDg4djMyem0wIDAiIGZpbGw9IiMwMDAwMDAiLz48cGF0aCBkPSJtNDc5Ljc0MjE4OCA0MzcuOTg0Mzc1LTk2LTM2OGMtLjUzNTE1Ny0yLjA2MjUtMS44NzEwOTQtMy44MjQyMTktMy43MTQ4NDQtNC44OTg0MzctMS44Mzk4NDQtMS4wNzAzMTMtNC4wMzEyNS0xLjM2MzI4Mi02LjA4OTg0NC0uODEyNWwtMTIwIDMyYy00LjI1IDEuMTMyODEyLTYuNzg5MDYyIDUuNDg0Mzc0LTUuNjc5Njg4IDkuNzQyMTg3bDk2IDM2OGMuNTM1MTU3IDIuMDYyNSAxLjg3NSAzLjgyNDIxOSAzLjcxODc1IDQuODk0NTMxIDEuODM5ODQ0IDEuMDY2NDA2IDQuMDMxMjUgMS4zNTU0NjkgNi4wODU5MzguODAwNzgybDEyMC0zMmM0LjI0MjE4OC0xLjEzMjgxMyA2Ljc3NzM0NC01LjQ3NjU2MyA1LjY3OTY4OC05LjcyNjU2M3ptLTIwMS4yNDYwOTQtMjc5LjQ0MTQwNiAxMDQuNTQyOTY4LTI3Ljg3MTA5NCAzLjc2MTcxOSAxNC4zOTg0MzctMTA0LjUzNTE1NiAyNy45MTQwNjN6bTExMi4zNDM3NSAyLjA1MDc4MSA0Ni4zOTg0MzcgMTc3Ljk4MDQ2OS0xMDQuNTAzOTA2IDI3Ljg4MjgxMi00Ni4zOTg0MzctMTc3Ljk5MjE4N3ptNTAuNDcyNjU2IDE5My40Njg3NSA4LjE5MTQwNiAzMS4zOTQ1MzEtMTA0LjU0Mjk2OCAyNy44NzEwOTQtOC4xNjAxNTctMzEuMzgyODEzem0tNzEuMDIzNDM4LTI3Mi4yNjE3MTkgOC43MTA5MzggMzMuMzk4NDM4LTEwNC41NDI5NjkgMjcuODYzMjgxLTguNzAzMTI1LTMzLjM4MjgxMnptLTEyLjU3ODEyNCAzODAuMzk4NDM4LTguNzEwOTM4LTMzLjM5ODQzOCAxMDQuNTQyOTY5LTI3Ljg3ODkwNiA4LjcwMzEyNSAzMy4zODI4MTN6bTAgMCIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Im0xMDQgMTQ0aC02NGMtNC40MTc5NjkgMC04IDMuNTgyMDMxLTggOHY2NGMwIDQuNDE3OTY5IDMuNTgyMDMxIDggOCA4aDY0YzQuNDE3OTY5IDAgOC0zLjU4MjAzMSA4LTh2LTY0YzAtNC40MTc5NjktMy41ODIwMzEtOC04LTh6bS04IDY0aC00OHYtNDhoNDh6bTAgMCIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPgo=" /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Navbar;