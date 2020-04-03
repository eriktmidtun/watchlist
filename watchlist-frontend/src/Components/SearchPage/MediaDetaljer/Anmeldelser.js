import React from "react";
/* Styling */
import { Card } from "react-bootstrap";

/*** 
 * Renders reviews of a movie/series
 * This is not done
 */
const Anmeldelser = () => {
  return (
    <React.Fragment>
      <Card style={{ marginBottom: "32px", padding: "32px" }}>
        <Card.Title style={{ textAlign: "left", fontSize: "2em" }}>
          Anmeldelser
        </Card.Title>
        Her kommer anmeldser
      </Card>
    </React.Fragment>
  );
};

export default Anmeldelser;
