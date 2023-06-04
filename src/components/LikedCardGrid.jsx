import { Grid, Typography, Snackbar, Alert } from "@mui/material";
import LikedCard from "./LikedCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../styles/LikedCardGrid.css";

const LikedCardGrid = () => {
  const likedPhotos = useSelector((state) => state.likedImg.filtered_list);
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

  return (
    <>
      {likedPhotos.length > 0 ? (
        <>
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
        <div
          style={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            width: "40%",
            borderRadius: "10px",
            padding: "30px",
            margin: "auto",
          }}
        >
          <h5
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "40px",
              width: "100%",
              margin: "auto",
              padding: "10px 0",
              color: "white",
              marginTop: "30px",
            }}
          >
            Your gallery is a blank canvas!{" "}
          </h5>
          <h6
            style={{
              fontSize: "25px",
              fontWeight: "400",
              paddingTop: "30px",
              marginTop: "20px",
            }}
          >
            Start painting your world with your favorite images
          </h6>

          <button
            style={{
              width: "290px",
              margin: "auto",
              marginTop: "20px",
              backgroundColor: "white",
              fontSize: "15px",
              letterSpacing: "2px",
              fontWeight: "100",
              marginBottom: "10%",
            }}
          >
            <a
              style={{
                color: "#222",
                textDecoration: "none",
                fontWeight: "600",
              }}
              href="/search"
            >
              DISCOVER
            </a>
          </button>
        </div>
      )}
    </>
  );
};

export default LikedCardGrid;
