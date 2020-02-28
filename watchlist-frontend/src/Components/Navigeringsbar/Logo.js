import React from 'react';
import logo from '../../logo.svg'
import "./Logo.css"
import { Navbar } from 'react-bootstrap';

const Logo = () => {
    return (  
        <Navbar.Brand>
        <img
          alt=""
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-center"
        />{' '}
        <Navbar.Text>
            <link href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap" rel="stylesheet" />
            <h3>WatchList</h3>
        </Navbar.Text>
      </Navbar.Brand>
    )
};

export default Logo;