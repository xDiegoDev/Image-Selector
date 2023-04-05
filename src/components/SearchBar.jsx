import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRandomImages } from "../features/search/searchSlice";
import "../styles/SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import { throttle } from "lodash";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  //throttle dispatch to limit the execution to once every 1.5 seconds, let API calls
  const throttledDispatch = throttle(dispatch, 1500);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.search.value);
  };

  useEffect(() => {
    // setTimeout to execute the code 0.5s after this useEffect has to rerender.
    const timer = setTimeout(() => {
      throttledDispatch(fetchRandomImages(query));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [throttledDispatch, query]);

  return (
    <form
      onChange={handleInputChange}
      onSubmit={handleSubmit}
      className="searchBar"
    >
      <input
        name="search"
        type="text"
        placeholder="Search"
        className="input--search"
      />
      <button type="submit">
        <SearchIcon
          style={{
            color: "white",
          }}
        />
      </button>
    </form>
  );
};

export default SearchBar;
