import React from "react";

/* Styling */
import { Card } from "react-bootstrap/";

/* Static Information display for the unauthorized frontpage */
const Information = () => {
  return (
    <Card style={{ padding: "32px" }}>
      <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
        Om WatchList
      </Card.Title>
      <p>WatchList er et sosialt nettverk rundt filmer og serier</p>
    </Card>
  );
};

export default Information;
