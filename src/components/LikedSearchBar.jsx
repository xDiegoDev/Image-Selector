import { useDispatch } from "react-redux";
import { findPic } from "../features/liked/likedSlice";
import { findPicBy } from "../features/liked/likedSlice";
import { useState } from "react";
import "../styles/LikedSearchBar.css";
import SearchIcon from "@mui/icons-material/Search";

const LikedSearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  console.log(`esto es el estado del filtro selectedFilter`);

  const dispatch = useDispatch();

  console.log(`esto es el UserInput inicial ${userInput}`);

  const handleChange = (event) => {
    setUserInput(event.target.value);
    dispatch(findPic(event.target.value));
  };

  const handleFilterChange = (event) => {
    const filterBy = event.target.value;
    dispatch(findPicBy(filterBy));
    setSelectedFilter(event.target.value);
  };

  return (
    <div className="div1">
      <div className="div2">
        <input
          type="text"
          id="search-bar"
          className="inputRounded"
          onChange={handleChange}
          placeholder="Search Description"
        />
        <span>
          <button>
            <SearchIcon style={{ color: "white" }} />
          </button>
        </span>
      </div>
      <div className="div3">
        <label for="filterId">Filter For:</label>
        <select
          id="filterId"
          onChange={handleFilterChange}
          value={selectedFilter}
        >
          <option value="width">Width</option>
          <option value="height">Height</option>
          <option value="likes">Likes</option>
          <option value="date">Date</option>
        </select>
      </div>
    </div>
  );
};

export default LikedSearchBar;
