import React from "react";

import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/CardGrid";

const Search = () => {
  return (
    <div className="home">
      <SearchBar />
      <ImageList />
    </div>
  );
};

export default Search;
