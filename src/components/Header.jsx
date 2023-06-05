import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
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
          <Link to="/">PHALBUM</Link> {/* Change this */}
        </h1>
      </div>
      <div className="nav--elts">
        <Link className="header--anchor" to="/search">
          SEARCH
        </Link>
        <Link className="header--anchor" to="/liked">
          MY LIKED
        </Link>
      </div>
    </header>
  );
};

export default Header;
