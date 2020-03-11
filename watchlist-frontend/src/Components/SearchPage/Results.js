import React from "react";
import {  Row, Col, Image, Card } from "react-bootstrap/";
import { LinkContainer} from "react-router-bootstrap";
import {testdata} from "./testdata" //testdata skal slettes i endelig produkt

const Results = () => {
  const mediums = testdata.results; //bytt denne med faktisk props
  return (
    mediums.map((media) => {
      return (
      <LinkContainer to={"film/" + media.title}>
       <Card className="mt-4" >
        <Row style={{cursor: "pointer"}}>
          <Col className="mr-1">
            <Image src={"https://image.tmdb.org/t/p/w92" + media.poster_path} style={{height: 135, width: 90}} rounded />
          </Col>
          <Col style={{textAlign:"left"}} xs="10">
            <h2>{media.title}</h2>
            <h4 style={{color: "black"}}>{media["release_date"]}</h4>
          </Col>
        </Row>
        </Card>
      </LinkContainer>
      )
    })
  )
};

export default Results;