import React from "react";
import dbLogo from "../../dbLogo.svg";
import { Image } from "react-bootstrap";

const DBlogo = () => {
  return <Image src={dbLogo} style={{ height: "50px" }} />;
};

export default DBlogo;
