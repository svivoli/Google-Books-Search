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
                        <button className="btn btn-danger" onClick={(event) => {props.handleDelete(event)}}><i class="fas fa-trash-alt"></i></button>
                    </div>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default SavedCard;