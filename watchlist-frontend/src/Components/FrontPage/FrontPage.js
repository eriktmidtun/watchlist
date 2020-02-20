import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

function FrontPage() {
  return (
    <Row className="justify-content-center">
        <Col xs={{  span: "12"}}>
          <Card style={{ margin: '2em', padding: '2em'}}>
            <Card.Title style={{textAlign: 'center', fontSize: '2em'}}>Forside</Card.Title>
            <p>WatchList er et sosialt nettverk rundt filmer og serier. </p>
            <p>WatchList er et sosialt nettverk rundt filmer og serier. </p>
            <p>WatchList er et sosialt nettverk rundt filmer og serier. </p>
            <p>WatchList er et sosialt nettverk rundt filmer og serier. </p>
            <p>WatchList er et sosialt nettverk rundt filmer og serier. </p>
            <p>WatchList er et sosialt nettverk rundt filmer og serier. </p>
            <p>WatchList er et sosialt nettverk rundt filmer og serier. </p>
            <p>WatchList er et sosialt nettverk rundt filmer og serier. </p>
          </Card>
        </Col>
    </Row>
  );
}

export default FrontPage;