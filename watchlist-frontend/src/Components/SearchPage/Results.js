import React from "react";
import {  Row, Col, Image, Card } from "react-bootstrap/";
import { LinkContainer} from "react-router-bootstrap";
import {testdata} from "./testdata" //testdata skal slettes i endelig produkt



const serier = (serie, imageUrl) => {
  return (
  <LinkContainer key={serie.id} to={"/serier/" + serier.id}>
       <Card className="mt-3 p-2" >
        <Row style={{cursor: "pointer"}}>
          <Col className="mr-1" style={{width: "60px"}} xs="auto">
            <Image src={imageUrl} style={{height: 92, width: 60}} rounded />
          </Col>
          <Col style={{textAlign:"left", color: "black"}} className="ml-2">
            <h2>{serie.name}</h2>
            <h5 style={{fontStyle: "italic"}}>{serie["first_air_date"]}</h5>
          </Col>
        </Row>
        </Card>
    </LinkContainer>
  )
};


const filmer = (film, imageUrl) => {
  return (
  <LinkContainer key={film.id} to={"/filmer/" + serier.id}>
       <Card className="mt-3 p-2" >
        <Row style={{cursor: "pointer"}}>
          <Col className="mr-1" style={{width: "60px"}} xs="auto">
            <Image src={imageUrl} style={{height: 92, width: 60}} rounded />
          </Col>
          <Col style={{textAlign:"left", color: "black"}} className="ml-2">
            <h2>{film.title}</h2>
            <h5 style={{fontStyle: "italic"}}>{film["release_date"]}</h5>
          </Col>
        </Row>
        </Card>
    </LinkContainer>
  )
};

const Results = ({results, mediaType}) => {
  console.log("Results",results)
  if (!results) {
    return (<h1>Ingen resultater</h1>)
  };
  const mediums = results.results; //bytt denne med faktisk props
  return (
     mediums.map((media) => {
      const imageUrl = media.poster_path? "https://image.tmdb.org/t/p/w92" + media.poster_path : "";
      if (mediaType === "filmer"){
        return filmer(media, imageUrl);
      }
      return serier(media, imageUrl)
    })
  )
};

export default Results;