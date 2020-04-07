import React from "react";
/* Images */
import logo from "../../logo.svg";
/* Styling */
import "./Logo.css";
import { Navbar } from "react-bootstrap";

/* Routing */
import { Link } from "react-router-dom";

/*** 
 * Renders the Watchlist logo and name
 * Also functions as a link to "/"
 */
const Logo = () => {
  return (
    <Link to="/">
      <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-center"
        />{" "}
        <Navbar.Text>
          <link
            href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap"
            rel="stylesheet"
          />
          <h3>WatchList</h3>
        </Navbar.Text>
      </Navbar.Brand>
    </Link>
  );
};

export default Logo;
