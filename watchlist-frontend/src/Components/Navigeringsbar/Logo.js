import React from 'react';
import logo from '../../logo.svg'
import "./Logo.css"
import { Container, Row, Image, Col } from 'react-bootstrap';

const Logo = () => {
    return (
        
        <div> 
            <Container>
                <Row >
                    <Col xs={2}>
                        <Image src={logo} style={{ height: '40px', marginRight: '5px'}} />
                    </Col>
                    <Col>
                        <link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet" /> 
                        <h3 class="serif" style={{marginRight: '25px', marginTop: '0px'}} > WatchList</h3>
                    </Col>
                </Row>
            </Container>

        </div>

         //   <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '5px'}}/>
        // <p class="fredoka navStyle">WatchList</p>
    )
};

export default Logo;