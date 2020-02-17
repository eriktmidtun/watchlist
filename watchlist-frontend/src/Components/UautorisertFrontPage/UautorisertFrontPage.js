import React from 'react';
import Registrering from '../UautorisertFrontPage/Registrering/Registrering';
import Loginn from '../UautorisertFrontPage/Loginn/Loginn';
import Informasjon from '../UautorisertFrontPage/Informasjon/Informasjon';
import { Row, Col } from 'react-bootstrap';
import {
  Switch,
  Route,
} from 'react-router-dom';

const UautorisertFrontPage = () => {
  return (
    <Row className="justify-content-center">
        <Col xs={{ order: 2 ,span: "12"}} lg={{ order: 1, span:"6"}}>
            <Informasjon />
        </Col>
        <Col xs={{ order: 1 ,span: "12"}} lg={{ order: 2, span:"6"}}>
        <Switch> {/* gjør at bare en av componentene blir rendret, basert på linken. */}
            <Route path="/" exact component={Registrering} /> {/* midlertidig path for testing av registreringskjema, må sette opp redirects senere */}
            <Route path="/registrering"  component={Registrering} />
            <Route path="/loginn" component={Loginn} />
        </Switch>
        </Col>
    </Row>
  );
};

export default UautorisertFrontPage;
