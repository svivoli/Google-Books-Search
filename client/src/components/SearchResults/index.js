import React from "react";
import ResultCard from "../ResultCard";
import "./style.css";

function SearchResults(props) {
    return (
        <div className="results-container">
            {props.book.map(book => {
                return (
                    <ResultCard
                    image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "https://picsum.photos/200"}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.previewLink}
                    />
                )
            })}
        </div>
    )
};

export default SearchResults;