import React from "react";
/* Images */
import dbLogo from "../../dbLogo.svg";
/* Styling */
import { Image } from "react-bootstrap";

/*** 
 * Movie Database logo for the footer
 */
const DBlogo = () => {
  return <Image src={dbLogo} style={{ height: "50px" }} />;
};

export default DBlogo;
