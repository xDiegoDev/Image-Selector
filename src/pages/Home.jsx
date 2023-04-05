import React from "react";

import "../styles/Home.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/CardGrid";

const Home = () => {
  return (
    <div className="home">
      <SearchBar />
      <ImageList />
    </div>
  );
};

export default Home;
