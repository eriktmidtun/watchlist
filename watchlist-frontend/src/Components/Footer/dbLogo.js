import React from 'react';
import dbLogo from '../../dbLogo.svg'
/* import "./Logo.css" */
import { Container, Row, Image, Col } from 'react-bootstrap';

const DBlogo = () => {
    return (
        <div> 
            <Container>
                <Row >
                    <Col xs={2}>
                        <Image src={dbLogo} style={{ height: '70px', marginRight: '100px'}} />
                    </Col>
                </Row>
            </Container>

        </div>

         //   <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '5px'}}/>
        // <p class="fredoka navStyle">WatchList</p>
    )
};

export default DBlogo;