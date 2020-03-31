import React from "react";
import SavedCard from "../SavedCard";

function SavedContainer(props) {
    return (
        <div>
            {props.books.map(book => {
                return (
                    <SavedCard 
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    author={book.author}
                    image={book.thumbnail ? book.thumbnail : "https://picsum.photos/200"}
                    description={book.synopsis}
                    link={book.preview}
                    handleDelete={props.handleDelete}
                    />
                )
            })}
        </div>
    )
};

export default SavedContainer;