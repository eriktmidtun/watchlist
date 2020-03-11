import React from "react";
import {  Row, Col, Image, Card } from "react-bootstrap/";
import { LinkContainer} from "react-router-bootstrap";
import {testdata} from "./testdata" //testdata skal slettes i endelig produkt

const Results = () => {
  const mediums = testdata.results; //bytt denne med faktisk props
  return (
     mediums.map((media) => {
      return (
      <LinkContainer to={"/film/" + media.id}>
       <Card className="mt-3 p-2" >
        <Row style={{cursor: "pointer"}}>
          <Col className="mr-1" style={{width: "60px"}} xs="auto">
            <Image src={"https://image.tmdb.org/t/p/w92" + media.poster_path} style={{height: 92, width: 60}} rounded />
          </Col>
          <Col style={{textAlign:"left", color: "black"}} className="ml-2">
            <h2>{media.title}</h2>
            <h5 style={{fontStyle: "italic"}}>{media["release_date"]}</h5>
          </Col>
        </Row>
        </Card>
      </LinkContainer>
      )
    })
  )
};

export default Results;