import React from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import SearchBox from "./components/SearchBox";
import './App.css';

function App() {
  return (
    <div>
    <Navbar />
    <Jumbotron />
    <SearchBox />
    </div>
  );
}

export default App;
