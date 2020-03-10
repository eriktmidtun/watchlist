import React from "react";
import { Card } from "react-bootstrap/";
import MovieItem from "./MovieItem"





const Liste = ({listeNavn}) => {
  return (
    <Card style={{padding: "32px" }}>
      <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
        {listeNavn}
      </Card.Title>
      <ul> {/* Disse er bare midleridige */}
        <li>
          <MovieItem id={550}>
          </MovieItem>
        </li>
      <li>Film 2</li>
      <li>Film 3</li>
      <li>Film 4</li>
      </ul>
    </Card>
  );
};

export default Liste;
