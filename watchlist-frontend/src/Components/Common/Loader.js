import React from "react";

/* Styling */
import { Spinner, Container, Row } from "react-bootstrap";

/***  
 *  Simple Loading animation.
 *  Default variant is light. can use other bootstrap variants.
 */
export const Loader = ({ variant }) => {
  return (
    <Container>
      <Row className="justify-content-sm-center mt-5">
        <Spinner
          animation="border"
          role="status"
          variant={variant ? variant : "light"}
          size="xl"
          style={{ width: "6rem", height: "6rem" }}
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  );
};
