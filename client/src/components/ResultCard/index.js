import React from "react";

function ResultCard(props) {
    return (
        <div className="card container">
            <div class="row">
                <div class="col-md-4 text-center">
                    <h3>{props.title}</h3>
                    <img src={props.thumbnail} alt="Cover"></img>
                </div>
                <div className="col-md-8">
                    <p>{props.description}</p>
                    <a href={props.link} target="_blank">Preview</a>
                </div>
            </div>
        </div>
    )
};

export default ResultCard;