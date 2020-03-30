import React from "react";
import "./style.css";

function SearchBox() {
    return (
        <div className="container">
            <h5>Search for a book:</h5>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Title"></input>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Author"></input>
                    </div>
                </div>
            </form>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </div>
            
        </div>
    )
};

export default SearchBox;