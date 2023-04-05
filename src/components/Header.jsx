import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* <div className="burger--icon">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className="header--title">
        <h1>
          <a href="/">PHALBUM</a>
        </h1>
        <h6>FIND YOUR STORY</h6>
      </div>
      <a className="header--anchor" href="/liked">
        MY STORY
      </a>
    </header>
  );
};

export default Header;
