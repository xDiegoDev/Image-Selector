import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        alignItems: "center",
        margin: "auto",
        marginTop: "10%",
        position: "relative",
        height: "100%",
      }}
    >
      <h2
        style={{
          color: "white",
          width: "50%",
          margin: "auto",
          fontSize: "38px",
          letterSpacing: "2px",
          lineHeight: "55px",
          fontWeight: "800",
          marginTop: "50px",
        }}
      >
        Discover. Admire. Store - Your Personal Unsplash Gallery!
      </h2>
      <h6
        style={{
          color: "white",
          width: "50%",
          margin: "auto",
          fontSize: "20px",
          letterSpacing: "2px",
          lineHeight: "35px",
          fontWeight: "400",
          marginTop: "50px",
        }}
      >
        Our app brings the visual world to your fingertips, enabling you to
        explore and like stunning photos from across the globe. With each photo
        you appreciate, a personal gallery comes to life, uniquely tailored to
        your taste. Enjoy the simplicity of exploring, liking, and revisiting
        your favorite images all in one place.
      </h6>
      <button
        style={{
          width: "290px",
          margin: "auto",
          marginTop: "50px",
          backgroundColor: "white",
          fontSize: "15px",
          letterSpacing: "2px",
          fontWeight: "100",
        }}
      >
        <a
          href="/search"
          style={{ textDecoration: "none", color: "#222", fontWeight: "600" }}
        >
          DISCOVER
        </a>
      </button>
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
    </div>
  );
};

export default Home;
