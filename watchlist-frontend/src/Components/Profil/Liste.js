import React from "react";
import { Card } from "react-bootstrap/";

const Liste = ({ listeNavn}) => {
  return (
    <Card style={{padding: "32px" }}>
      <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
        {listeNavn}
      </Card.Title>
      <ul> {/* Disse er bare midleridige */}
      <li>Film 1</li>
      <li>Film 2</li>
      <li>Film 3</li>
      <li>Film 4</li>
      </ul>
    </Card>
  );
};

export default Liste;
