import React from "react";

function ResultCard(props) {
    return (
        <div>
            <img src={props.thumbnail} alt="Cover"></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link} target="_blank">Preview</a>
        </div>
    )
};

export default ResultCard;