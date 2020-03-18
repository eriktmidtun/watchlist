import React from "react";
import { Card } from "react-bootstrap/";

const Informasjon = () => {
  return (
    <Card style={{padding: "32px" }}>
      <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
        Om WatchList
      </Card.Title>
      <p>WatchList er et sosialt nettverk rundt filmer og serier</p>
    </Card>
  );
};

export default Informasjon;
