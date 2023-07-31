import React from "react";
import { Link } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import logo from "../logo.png";

const Header = () => {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="n" />

      
      <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/movie">Movies</Link>
        <Link to="/recently">Recently</Link>
        <Link to="/mylits">My List</Link>
      </div>

      <ImSearch />
    </nav>
  );
};

export default Header;
