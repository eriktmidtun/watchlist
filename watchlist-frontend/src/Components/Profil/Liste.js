import React from "react";
import { Card } from "react-bootstrap/";
import MediaItem from "./MediaItem"




const Liste = ({listeNavn}) => {

  let ids = [550, 551]

  //håndter state her, send props som argument. 
  //eventuelt lag nytt redux som i TheMovieDatabase typisk, og bruk dette. 

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
