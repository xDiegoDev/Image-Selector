import { Grid, Typography, Snackbar, Alert } from "@mui/material";
import LikedCard from "./LikedCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../styles/LikedCardGrid.css";

const LikedCardGrid = () => {
  const likedPhotos = useSelector((state) => state.likedImg.list);
  const [likedPicsLength, setLikedPicsLength] = useState(likedPhotos.length);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("esto es dentro del useffect");
    if (likedPhotos.length < likedPicsLength) {
      console.log("esto es dentro del if del useEffect");
      setOpen(true);
      setLikedPicsLength(likedPhotos.length);
    }
  }, [likedPhotos.length, likedPhotos]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    console.log(`esto es likePiks ${likedPhotos}`);
  }, [likedPhotos]);

  return (
    <>
      {likedPhotos.length > 0 ? (
        <>
          {" "}
          <div className="liked--cardgrid">
            <div className="card--flex">
              {likedPhotos.map((item) => {
                return <LikedCard key={item.id} data={item} />;
              })}
            </div>
          </div>
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert severity="error">Deleted from favorites!</Alert>
          </Snackbar>
        </>
      ) : (
        <h5
          style={{
            textAlign: "center",
            fontFamily: "Roboto",
            fontSize: "40px",
            width: "40%",
            margin: "auto",
            marginTop: "10%",
            padding: "10px 0",
          }}
        >
          No liked pics
        </h5>
      )}
    </>
  );
};

export default LikedCardGrid;
