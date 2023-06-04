import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="burger--icon">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="header--title">
        <h1>
          <a href="/">PHALBUM</a>
        </h1>
      </div>
      <div className="nav--elts">
        <a className="header--anchor" href="/search">
          SEARCH
        </a>
        <a className="header--anchor" href="/liked">
          MY LIKED
        </a>
      </div>
    </header>
  );
};

export default Header;
