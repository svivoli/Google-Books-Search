import React, { useState } from "react";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import SearchBox from "../components/SearchBox";
import SearchResults from "../components/SearchResults";

function Search() {
    const [book, setBook] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchTerm({ searchTerm, value });
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
            <SearchResults book={ book }/>
        </div>
    )
};

export default Search;