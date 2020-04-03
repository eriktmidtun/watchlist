import React from "react";

/* Components */
import Informasjon from "../UautorisertFrontPage/Informasjon/Informasjon";

/* Styling */
import { Row, Col } from "react-bootstrap";

/* Routing */
import { Route } from "react-router-dom";

const UautorisertFrontPage = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Row className="justify-content-center">
          <Col xs={{ order: 2, span: "12" }} lg={{ order: 1, span: "6" }}>
            <Informasjon />
          </Col>
          <Col xs={{ order: 1, span: "12" }} lg={{ order: 2, span: "6" }}>
            <Component {...rest} />
          </Col>
        </Row>
      )}
    />
  );
};

export default UautorisertFrontPage;
