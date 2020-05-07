import React from "react";
import "./style.css";

function ResultCard(props) {
    return (
        <div className="card container">
            <div className="row">
                <div className="left col-md-4 text-center">
                    <h4>{props.title}</h4>
                    <h5>{props.author}</h5>
                    <img className="thumbnail" src={props.thumbnail} alt="Cover"></img>
                    <br></br>
                </div>
                <div className="col-md-8">
                    <div className="row justify-content-end">
                        <div className="buttons col-md-3">
                            <button className="btn btn-secondary"><a className="preview" href={props.link} target="_blank">Preview</a></button>
                            <button className="btn btn-warning" onClick={(event) => {props.handleSave(event)}}><img className="save-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDgwIDQ4MCIgd2lkdGg9IjUxMnB4Ij48cGF0aCBkPSJtMjQwIDBoLTEwNGMtNC40MTc5NjkgMC04IDMuNTgyMDMxLTggOHY1NmgtMTIwYy00LjQxNzk2OSAwLTggMy41ODIwMzEtOCA4djQwMGMwIDQuNDE3OTY5IDMuNTgyMDMxIDggOCA4aDIzMmM0LjQxNzk2OSAwIDgtMy41ODIwMzEgOC04di00NjRjMC00LjQxNzk2OS0zLjU4MjAzMS04LTgtOHptLTggNDE2aC04OHYtMTZoODh6bS0yMTYtMjk2aDExMnYyNDBoLTExMnptMjE2LTMyaC04OHYtMjRoODh6bS0yMTYgMjg4aDExMnYyNGgtMTEyem0xMjggOHYtMjgwaDg4djI4MHptODgtMzY4djMyaC04OHYtMzJ6bS0xMDQgNjR2MjRoLTExMnYtMjR6bS0xMTIgMzM2aDExMnY0OGgtMTEyem0xMjggNDh2LTMyaDg4djMyem0wIDAiIGZpbGw9IiMwMDAwMDAiLz48cGF0aCBkPSJtNDc5Ljc0MjE4OCA0MzcuOTg0Mzc1LTk2LTM2OGMtLjUzNTE1Ny0yLjA2MjUtMS44NzEwOTQtMy44MjQyMTktMy43MTQ4NDQtNC44OTg0MzctMS44Mzk4NDQtMS4wNzAzMTMtNC4wMzEyNS0xLjM2MzI4Mi02LjA4OTg0NC0uODEyNWwtMTIwIDMyYy00LjI1IDEuMTMyODEyLTYuNzg5MDYyIDUuNDg0Mzc0LTUuNjc5Njg4IDkuNzQyMTg3bDk2IDM2OGMuNTM1MTU3IDIuMDYyNSAxLjg3NSAzLjgyNDIxOSAzLjcxODc1IDQuODk0NTMxIDEuODM5ODQ0IDEuMDY2NDA2IDQuMDMxMjUgMS4zNTU0NjkgNi4wODU5MzguODAwNzgybDEyMC0zMmM0LjI0MjE4OC0xLjEzMjgxMyA2Ljc3NzM0NC01LjQ3NjU2MyA1LjY3OTY4OC05LjcyNjU2M3ptLTIwMS4yNDYwOTQtMjc5LjQ0MTQwNiAxMDQuNTQyOTY4LTI3Ljg3MTA5NCAzLjc2MTcxOSAxNC4zOTg0MzctMTA0LjUzNTE1NiAyNy45MTQwNjN6bTExMi4zNDM3NSAyLjA1MDc4MSA0Ni4zOTg0MzcgMTc3Ljk4MDQ2OS0xMDQuNTAzOTA2IDI3Ljg4MjgxMi00Ni4zOTg0MzctMTc3Ljk5MjE4N3ptNTAuNDcyNjU2IDE5My40Njg3NSA4LjE5MTQwNiAzMS4zOTQ1MzEtMTA0LjU0Mjk2OCAyNy44NzEwOTQtOC4xNjAxNTctMzEuMzgyODEzem0tNzEuMDIzNDM4LTI3Mi4yNjE3MTkgOC43MTA5MzggMzMuMzk4NDM4LTEwNC41NDI5NjkgMjcuODYzMjgxLTguNzAzMTI1LTMzLjM4MjgxMnptLTEyLjU3ODEyNCAzODAuMzk4NDM4LTguNzEwOTM4LTMzLjM5ODQzOCAxMDQuNTQyOTY5LTI3Ljg3ODkwNiA4LjcwMzEyNSAzMy4zODI4MTN6bTAgMCIgZmlsbD0iIzAwMDAwMCIvPjxwYXRoIGQ9Im0xMDQgMTQ0aC02NGMtNC40MTc5NjkgMC04IDMuNTgyMDMxLTggOHY2NGMwIDQuNDE3OTY5IDMuNTgyMDMxIDggOCA4aDY0YzQuNDE3OTY5IDAgOC0zLjU4MjAzMSA4LTh2LTY0YzAtNC40MTc5NjktMy41ODIwMzEtOC04LTh6bS04IDY0aC00OHYtNDhoNDh6bTAgMCIgZmlsbD0iIzAwMDAwMCIvPjwvc3ZnPgo=" /></button>
                        </div>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default ResultCard;