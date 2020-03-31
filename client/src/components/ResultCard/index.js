import React from "react";
import "./style.css";

function ResultCard(props) {
    return (
        <div className="card container">
            <div class="row">
                <div class="left col-md-4 text-center">
                    <h4>{props.title}</h4>
                    <h5>{props.author}</h5>
                    <img src={props.image} alt="Cover"></img>
                    <br></br>
                </div>
                <div className="right col-md-8">
                    <div class="row justify-content-end">
                        <div class="buttons col-md-3">
                            <button className="btn btn-secondary"><a className="preview" href={props.link} target="_blank">Preview</a></button>
                            <button className="btn btn-warning">Save</button>
                        </div>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )
};

export default ResultCard;