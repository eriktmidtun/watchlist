import React from "react";
import { Card } from "react-bootstrap";;

const Anmeldelser = () => {
  return (
    <React.Fragment>
        <Card style={{marginBottom: "32px", padding: "32px" }}>
          <Card.Title style={{ textAlign: "left", fontSize: "2em" }}>
            Anmeldelser
          </Card.Title>
            Her kommer anmeldser
        </Card>
  </React.Fragment>
  );
};

export default Anmeldelser;
