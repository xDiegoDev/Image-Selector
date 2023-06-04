import React from "react";
import LikedCardGrid from "../components/LikedCardGrid";
import LikedSearchBar from "../components/LikedSearchBar";
import Footer from "../components/Footer";

const Liked = () => {
  return (
    <>
      <LikedSearchBar />
      <LikedCardGrid />
      <footer
        style={{
          position: "fixed",
          bottom: "0",
          color: "white",
          width: "100%",
          alignItems: "center",
          display: "flex",
          background: "transparent",
          borderTop: "2px solid white",
          justifyContent: "space-between",
        }}
      >
        <h3
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          ® 2023
        </h3>
        <h3
          style={{
            marginLeft: "30px",
            marginRight: "30px",
          }}
        >
          DiegoDev
        </h3>
      </footer>
    </>
  );
};

export default Liked;
