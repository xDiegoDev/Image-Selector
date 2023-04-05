import { Card as BasicCard, Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useDispatch } from "react-redux";
import { deleteFromLiked } from "../features/liked/likedSlice";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { saveAs } from "file-saver";
import { picDescriptionEdit } from "../features/liked/likedSlice";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import "../styles/LikedCard.css";

function LikedCard({ data }) {
  const [open, setOpen] = useState(false);

  const dateString = data.created_at;
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  const formattedDate = `${day}/${month}/${year}`;

  const [description, setDescription] = useState("");

  useEffect(() => {
    let rawDescription = data.description || data.alt_description || "";
    let newDescription =
      rawDescription.length > 25
        ? `${rawDescription.slice(0, 25)}...`
        : rawDescription;
    setDescription(newDescription);
  }, [data.description, data.alt_description]);

  const dispatch = useDispatch();

  const handleDeletePic = (pic) => {
    dispatch(deleteFromLiked(pic));
  };

  const handleDownload = (link) => {
    saveAs(link);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleOpen = () => {
    dispatch(picDescriptionEdit({ id: data.id, description: description }));
    setOpen((open) => !open);
  };

  return (
    <div className="liked--card">
      <div>
        <img
          className="liked--images"
          src={data.urls.small}
          alt={description}
        />
      </div>
      <div className="info--div">
        {!description ? (
          <div className="description">
            {open ? (
              <>
                <textarea
                  value={""}
                  onChange={handleDescriptionChange}
                  placeholder={"No description available"}
                />
                <SaveIcon
                  onClick={() => handleOpen(true)}
                  style={{ cursor: "pointer", color: "white" }}
                />
              </>
            ) : (
              <>
                {description}
                <EditIcon
                  onClick={() => handleOpen(true)}
                  style={{ cursor: "pointer" }}
                />
              </>
            )}
          </div>
        ) : (
          <div className="description">
            <div>
              {open ? (
                <>
                  <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                  />
                  <SaveIcon
                    onClick={() => handleOpen()}
                    style={{ cursor: "pointer", color: "white" }}
                  />
                </>
              ) : (
                <>
                  {description}
                  <EditIcon
                    onClick={() => handleOpen()}
                    style={{ cursor: "pointer" }}
                  />
                </>
              )}
            </div>
          </div>
        )}
        <div className="photo--info--div">
          <div> Date: {formattedDate}</div>
          <div>
            {data.width} x {data.height}
          </div>
          <div className="likes--div">
            {data.likes}
            <ThumbUpIcon
              sx={{ marginLeft: "5px", color: "white", marginBottom: "4px" }}
            />
          </div>
        </div>
      </div>
      <div className="delete--download">
        <CloudDownloadIcon
          sx={{ marginLeft: "3%", color: "white" }}
          fontSize="large"
          onClick={() => handleDownload(data.urls.raw)}
        />

        <div onClick={() => handleDeletePic(data.id)}>
          <DeleteForeverIcon
            sx={{ marginRight: "10%", color: "white" }}
            fontSize="large"
          />
        </div>
      </div>
    </div>
  );
}

export default LikedCard;
