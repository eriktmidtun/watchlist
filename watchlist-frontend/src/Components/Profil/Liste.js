import React from "react";
import { Card } from "react-bootstrap/";
import MediaItem from "./MediaItem"



// se på map

const Liste = ({listeNavn}) => {

  let ids = [1, 2, 3, 4, 5,5,5,5,5,5]


  return (
    <Card style={{padding: "32px" }}>
      <Card.Title style={{ textAlign: "center", fontSize: "2em" }} >
        {listeNavn}
      </Card.Title>
        {ids.map( (i) => <MediaItem id={i}> </MediaItem>)}
    </Card>
  );
};

export default Liste;
