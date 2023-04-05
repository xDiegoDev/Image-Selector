import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { saveAs } from "file-saver";
import { useDispatch } from "react-redux";
import { addToLiked, deleteFromLiked } from "../features/liked/likedSlice";
import "../styles/Card.css";

function Card({ data }) {
  const description = data.description || "No description available";
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const handleDownload = (link) => {
    saveAs(link);
  };

  const handleClick = (info) => {
    dispatch(addToLiked(info));
    setLiked(true);
  };

  function handleDeleteClick(info) {
    dispatch(deleteFromLiked(info));
    setLiked(false);
  }

  return (
    <div className="main--frame">
      <div>
        <img
          className="rendered--images"
          src={data.urls.small}
          alt={description}
        />
      </div>
      <div className="user--action--div">
        <CloudDownloadIcon
          sx={{ marginLeft: "3%", color: "white" }}
          fontSize="large"
          onClick={() => handleDownload(data.urls.raw)}
        />

        <div
          onClick={
            liked ? () => handleDeleteClick(data) : () => handleClick(data)
          }
        >
          {liked ? (
            <FavoriteIcon
              sx={{ marginRight: "10%", color: "white" }}
              fontSize="large"
            />
          ) : (
            <FavoriteBorderIcon
              sx={{ marginRight: "6%", color: "white" }}
              fontSize="large"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
