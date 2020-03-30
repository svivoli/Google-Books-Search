import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "./components/Jumbotron";
import SearchBox from "./components/SearchBox";

function Search() {
    const [book, setBook] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    function handleInputChange(event) {
        const { formValue } = event.target;
        setSearchTerm({ searchTerm, formValue });
    };

    function handleSearch(event) {
        event.preventDefault();
        API.search(searchTerm.value)
            .then(res => {
                setBook(res.data.items)
            })
    };

    return (
        <div>
            <Jumbotron />
            <SearchBox handleInputChange={ handleInputChange } handleSearch={ handleSearch }/>
        </div>
    )
};

export default Search;