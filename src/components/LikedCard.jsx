import { Card as BasicCard, Box, Modal } from "@mui/material";
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
import InfoIcon from "@mui/icons-material/Info";
import { Info } from "@mui/icons-material";

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
    setDescription(rawDescription);
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
        <Modal
          className="modal"
          open={open}
          onClose={handleOpen}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
            color: "white",
          }}
        >
          <div
            style={{
              width: "40%",
              backgroundColor: "#101010",
              padding: "80px 10px 50px 10px",
              borderRadius: "10px",
              border: "2px solid #565656",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                marginBottom: "60px",
                marginTop: "-30px",
                letterSpacing: "3px",
                fontSize: "25px",
              }}
            >
              EDIT DESCRIPTION
            </h3>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder={"Enter a description..."}
              style={{
                width: "80%",
                margin: "auto",
                height: "100px",
                marginLeft: "10%",
                marginBottom: "30px",
                fontSize: "15px",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridGap: "20px",
                marginBottom: "20px",
              }}
            >
              <div style={{ marginLeft: "25px" }}>
                <h6 style={{ marginLeft: "25px" }}>Likes:</h6>
                <button style={{ width: "80%", backgroundColor: "white" }}>
                  {data.likes}
                </button>
              </div>
              <div>
                <h6 style={{ marginLeft: "25px" }}>Saved On:</h6>
                <button style={{ width: "80%", backgroundColor: "white" }}>
                  {formattedDate}
                </button>
              </div>
              <div style={{ marginLeft: "25px" }}>
                <h6 style={{ marginLeft: "25px" }}>Height:</h6>
                <button style={{ width: "80%", backgroundColor: "white" }}>
                  {data.height}
                </button>
              </div>
              <div>
                <h6 style={{ marginLeft: "25px" }}>Width:</h6>
                <button style={{ width: "80%", backgroundColor: "white" }}>
                  {data.width}
                </button>
              </div>
            </div>
            <div
              onClick={handleOpen}
              style={{
                cursor: "pointer",
                backgroundColor: "#222",
                width: "150px",
                margin: "auto",
                color: "white",
                textAlign: "center",
                marginTop: "80px",
                padding: "15px",
                borderRadius: "10px",
                border: "2px solid #565656",
              }}
            >
              SAVE
            </div>
          </div>
        </Modal>
      </div>

      <div className="delete--download">
        <InfoIcon
          sx={{ marginLeft: "3%", color: "white" }}
          fontSize="large"
          onClick={() => handleOpen()}
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
