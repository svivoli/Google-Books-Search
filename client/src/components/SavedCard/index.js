import React from "react";
import "./style.css";

function SavedCard(props) {
    return (
        <div className="card container">
            <div className="row">
                <div className="left col-md-4 text-center">
                    <h4>{props.title}</h4>
                    <h5>{props.author}</h5>
                    <img className="thumbnail" src={props.thumbnail} alt="Cover"></img>
                </div>
                <div className="col-md-8">
                    <div class="row justify-content-end">
                    <div className="buttons col-md-3">
                        <button className="btn btn-secondary"><a className="preview" href={props.link} target="_blank">Preview</a></button>
                        <button className="btn btn-danger" onClick={(event) => {props.handleDelete(event)}}><img className="delete-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik00MzYsNjBoLTkwVjQ1YzAtMjQuODEzLTIwLjE4Ny00NS00NS00NWgtOTBjLTI0LjgxMywwLTQ1LDIwLjE4Ny00NSw0NXYxNUg3NmMtMjQuODEzLDAtNDUsMjAuMTg3LTQ1LDQ1djMwICAgIGMwLDguMjg0LDYuNzE2LDE1LDE1LDE1aDE2LjE4M0w4OC41Nyw0NzAuOTQ1YzAuMDAzLDAuMDQzLDAuMDA3LDAuMDg2LDAuMDExLDAuMTI5QzkwLjcwMyw0OTQuNDA2LDEwOS45Nyw1MTIsMTMzLjM5Niw1MTIgICAgaDI0NS4yMDdjMjMuNDI3LDAsNDIuNjkzLTE3LjU5NCw0NC44MTUtNDAuOTI2YzAuMDA0LTAuMDQzLDAuMDA4LTAuMDg2LDAuMDExLTAuMTI5TDQ0OS44MTcsMTUwSDQ2NmM4LjI4NCwwLDE1LTYuNzE2LDE1LTE1di0zMCAgICBDNDgxLDgwLjE4Nyw0NjAuODEzLDYwLDQzNiw2MHogTTE5Niw0NWMwLTguMjcxLDYuNzI5LTE1LDE1LTE1aDkwYzguMjcxLDAsMTUsNi43MjksMTUsMTV2MTVIMTk2VjQ1eiBNMzkzLjUzNyw0NjguNDA4ICAgIGMtMC43MjksNy43NTMtNy4xNDIsMTMuNTkyLTE0LjkzNCwxMy41OTJIMTMzLjM5NmMtNy43OTIsMC0xNC4yMDQtNS44MzktMTQuOTM0LTEzLjU5Mkw5Mi4yODQsMTUwaDMyNy40MzJMMzkzLjUzNyw0NjguNDA4eiAgICAgTTQ1MSwxMjBoLTE1SDc2SDYxdi0xNWMwLTguMjcxLDYuNzI5LTE1LDE1LTE1aDEwNWgxNTBoMTA1YzguMjcxLDAsMTUsNi43MjksMTUsMTVWMTIweiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTI1NiwxODBjLTguMjg0LDAtMTUsNi43MTYtMTUsMTV2MjEyYzAsOC4yODQsNi43MTYsMTUsMTUsMTVzMTUtNi43MTYsMTUtMTVWMTk1QzI3MSwxODYuNzE2LDI2NC4yODQsMTgwLDI1NiwxODB6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzQ2LDE4MGMtOC4yODQsMC0xNSw2LjcxNi0xNSwxNXYyMTJjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNXMxNS02LjcxNiwxNS0xNVYxOTVDMzYxLDE4Ni43MTYsMzU0LjI4NCwxODAsMzQ2LDE4MHoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0xNjYsMTgwYy04LjI4NCwwLTE1LDYuNzE2LTE1LDE1djIxMmMwLDguMjg0LDYuNzE2LDE1LDE1LDE1czE1LTYuNzE2LDE1LTE1VjE5NUMxODEsMTg2LjcxNiwxNzQuMjg0LDE4MCwxNjYsMTgweiIgZmlsbD0iIzAwMDAwMCIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /></button>
                    </div>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default SavedCard;