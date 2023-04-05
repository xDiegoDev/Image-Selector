import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRandomImages } from "../features/search/searchSlice";
import { Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "./Card";
import { Snackbar, Alert } from "@mui/material";
import "../styles/CardGrid.css";

const ImageList = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.searchImg.results);
  const likedPhotos = useSelector((state) => state.likedImg.list);
  const [showButton, setShowButton] = useState(false);
  const [open, setOpen] = useState(false);
  const [likedPicsLength, setLikedPicsLength] = useState(likedPhotos.length);

  useEffect(() => {
    console.log("UseEffect");
    dispatch(fetchRandomImages());
  }, [dispatch]);

  useEffect(() => {
    console.log("esto es dentro del useffect");
    if (likedPhotos.length > likedPicsLength) {
      console.log("esto es dentro del if del useEffect");
      setOpen(true);
      setLikedPicsLength(likedPhotos.length);
    }
  }, [likedPhotos.length, likedPhotos]);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // IMPORTAR COMPONENTES DE MUI

  return (
    <>
      <button className="scroll--up" onClick={handleClick}>
        <KeyboardArrowUpIcon />
      </button>
      <div className="main--grid">
        <div className="grid--row">
          {photos.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      </div>
      <Snackbar open={open} onClose={handleClose} autoHideDuration={2000}>
        <Alert severity="success">Added to my likes!</Alert>
      </Snackbar>
    </>
  );
};

export default ImageList;
