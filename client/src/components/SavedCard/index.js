import React from "react";

function SavedCard(props) {
    return (
        <div className="card container">
            <div class="row">
                <div class="col-md-4 text-center">
                    <h3>{props.title}</h3>
                    <img src={props.image} alt="Cover"></img>
                </div>
                <div className="col-md-8">
                    <div className="col-md-3 align-self-end">
                        <button className="btn btn-danger">Delete</button>
                    </div>
                    <p>{props.description}</p>
                    <a href={props.link} target="_blank">Preview</a>
                </div>
            </div>
        </div>
    )
};

export default SavedCard;