import React from "react";
import { Card, Image, Col, Row, Button } from "react-bootstrap/";
import "./MediaItem.css";


const getMovieData = ({id}) => {
    //var apiKey = "c5733a52f13cedc8b47b7a21e8edd914"
   //  let respone = await fetch('https://api.themoviedb.org/3/movie/${id} + '?api_key='+{apiKey} + '&language=en-US')
    fetch('https://api.themoviedb.org/3/movie/550?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=en-US')
    .then((response) =>{ return response.json()})
}



const MediaItem = ({id}) => {

    // const buttonClass = {
    //     backgroundColor: "red",
    //     color: "white",
    //     borderRadius: "3px",
    //     textTransform: "uppercase",
    //     height: "1px",
    //     width: "1px",
    //     textAlign: "center",
    // }
    
    let  title = "Pulp Fiction"
    let year = 1994
    

    return (
       <Card style={{marginBottom: "32px", padding: "15px" }} >
           <Row>
                <Card className="mr-1 ml-2">
                    <Image src="holder.js/171x180" style={{height: 135, width: 90}} rounded />
                </Card>     
                <Col>
                    <h5>{title}</h5>
                    <h5>{year}</h5>
                </Col>
                <Button className="ml-auto mb-auto mr-3 btn-danger" >
                    x
                </Button>
           </Row>
        </Card>
    );
}

export default MediaItem;