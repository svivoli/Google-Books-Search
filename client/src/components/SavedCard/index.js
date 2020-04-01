import React from "react";

function SavedCard(props) {
    return (
        <div className="card container">
            <div className="row">
                <div className="col-md-4 text-center">
                    <h3>{props.title}</h3>
                    <img src={props.thumbnail} alt="Cover"></img>
                </div>
                <div className="col-md-8">
                    <div className="col-md-3 align-self-end">
                        <button className="btn btn-danger" onClick={(event) => {props.handleDelete(event)}}>Delete</button>
                    </div>
                    <p>{props.description}</p>
                    <a href={props.link} target="_blank">Preview</a>
                </div>
            </div>
        </div>
    )
};

export default SavedCard;