import React from "react";

/* Components */
import Information from "./Information/Information";

/* Styling */
import { Row, Col } from "react-bootstrap";

/* Routing */
import { Route } from "react-router-dom";

/***
 * Landing page when not logged in
 */
const UnauthorizedFrontPage = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Row className="justify-content-center">
          <Col xs={{ order: 2, span: "12" }} lg={{ order: 1, span: "6" }}>
            <Information />
          </Col>
          <Col xs={{ order: 1, span: "12" }} lg={{ order: 2, span: "6" }}>
            <Component {...rest} />
          </Col>
        </Row>
      )}
    />
  );
};

export default UnauthorizedFrontPage;
