import React, {Component} from "react";

/* Styling */
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

/* Komponenter */
import {Loader} from "../../Common/Loader";
import NotFound from "../../Common/NotFound";
import Anmeldelser from "./Anmeldelser";


/* Redux */
import { connect } from "react-redux";
import { getMovieInfo, getSeriesInfo } from "../../../actions/TheMovieDB"
import { isMediaInList , addMediaToList } from "../../../actions/lists.js"

/* rendrer en enkelt serieoversikt */
const Details = ({name , poster_path, details, overview, vilSeKnapp, harSettKnapp }) => {
  return (
    <Row className="justify-content-center">
    <Col xs={{ span: "12" }}>
      <Card style={{marginBottom: "32px", padding: "32px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col xs="9">
          <Card.Title style={{ textAlign: "left", fontSize: "2em", marginRight:"auto" }}>
              <b>{name}</b>
            </Card.Title>
          </Col>
          <Col xs="3" style={{marginLeft: "auto"}} >
            <Button style={{width: "50%"}} 
                    className="mr-1"
                    onClick={()=> vilSeKnapp}
                    >
                    Vil se
                    </Button>
            <Button onClick={()=> harSettKnapp}>Har sett</Button>
          </Col>
        </Row>
        <Row>
          <Col xs="auto" >
            <Image src={poster_path} style={{height: 300, width: 200}} rounded />
          </Col>
          <Col>
            {details}
          </Col>
        </Row>
        <Row>
        <Col className="mt-1">
          <h4><b>Beskrivelse</b></h4>
          <p>{overview?overview: "Ingen beskrivelse tilgjenlig"}</p>
        </Col>
        </Row>
      </Container>
      </Card>
    </Col>
  </Row>
  )
};

const serieDetails = (mediumDetails) => {
  return (
          <React.Fragment>
            <p><b>Original tittel: </b>
            {
              mediumDetails.original_name
            }
            </p>
            <p><b>Original språk: </b>
            {
              mediumDetails.original_language.toUpperCase()
            }
            </p>
            <p><b>Utgivelsesdato: </b>
            {
              mediumDetails.first_air_date
            }
            </p>
            <p><b>Antall sesonger: </b>
            {
              mediumDetails.number_of_seasons + ""
            }
            </p>
            <p><b>Antall episoder: </b>
            {
              mediumDetails.number_of_episodes + ""
            }
            </p>
            <p><b>Produksjonselskap: </b>
            {
              mediumDetails.production_companies.map(company =>
                <span key={company.id}>{company.name + ", "}</span> )
            }
            </p>
            <p><b>Kategorier: </b>
            {
              mediumDetails.genres.map(genre =>
                <span key={genre.id}>{genre.name + ", "}</span> )
            }
            </p>
          </React.Fragment>
          );
}

/* rendrer en enkelt filmoversikt */
const filmDetails = (mediumDetails) => {
  return (
          <React.Fragment>
            <p><b>Original tittel: </b>
            {
              mediumDetails.original_title
            }
            </p>
            <p><b>Original språk: </b>
            {
              mediumDetails.original_language.toUpperCase()
            }
            </p>
            <p><b>Utgivelsesdato: </b>
            {
              mediumDetails.release_date
            }
            </p>
            <p><b>Lengde: </b>
            {
              mediumDetails.runtime + "min"
            }
            </p>
            <p><b>Produksjonselskap: </b>
            {
              mediumDetails.production_companies.map(company =>
                <span key={company.id}>{company.name + ", "}</span> )
            }
            </p>
            <p><b>Kategorier: </b>
            {
              mediumDetails.genres.map(genre =>
                <span key={genre.id}>{genre.name + ", "}</span> )
            }
            </p>
          </React.Fragment>  
          )
};


class MediaDetailPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      mediaType: '',
      mediaID: 0,
    }
  }
  search = (mediaType, id) => {
    if(mediaType === "filmer") {
      this.props.getMovieInfo(id);
    } else if (mediaType === "serier") {
      this.props.getSeriesInfo(id);
    }
  }
 
  componentDidMount(){
    const path = this.props.location.pathname.split("/");
    const mediaType = path[1];
    const mediaID = path[2];
    this.setState({mediaType:mediaType, mediaID:mediaID});
    this.search(mediaType, mediaID);
  }

   /* utfører søking om query-del av URL oppdateres */
  componentDidUpdate(prevProps) {
    const path = prevProps.location.pathname.split("/");
    const mediaType = path[1];
    const mediaID = path[2];
    if (this.props.mediaID !== prevProps.mediaID) {
      this.setState({mediaType:mediaType, mediaID:mediaID});
      this.search(mediaType, mediaID);
    }
  }

  render() {
    // console.log("this.props.detailResultLoading " +this.props.detailResultLoading);
    if (this.props.detailResultLoading) {
      return <Loader/>
    }
    else if (!this.props.mediumDetails) {
      return <NotFound error={"Kunne ikke finne angitt serie/film"}/>
    };
    const imageUrl = this.props.mediumDetails.poster_path? "https://image.tmdb.org/t/p/w300" + this.props.mediumDetails.poster_path : "";
    return (
      <React.Fragment>
      <Row className="justify-content-center">
        <Col xs={{ span: "12" }}>
          {this.state.mediaType === "filmer" ?
           <Details
             name={this.props.mediumDetails.title}
             poster_path={imageUrl}
             details={filmDetails(this.props.mediumDetails)}
             overveiw={this.props.mediumDetails.overview}
             vilSeKnapp={this.props.addMediaToList(this.state.mediaID,this.state.mediaType,'wantToWatch')}
             harSettKnapp={this.props.addMediaToList(this.state.mediaID,this.state.mediaType,'haveWatched')}
             />:
            <Details
             name={this.props.mediumDetails.name}
             poster_path={imageUrl}
             details={serieDetails(this.props.mediumDetails)}
             overveiw={this.props.mediumDetails.overview}
             />}
          <Anmeldelser />
        </Col>
      </Row>
    </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  mediumDetails: state.medier.mediumDetails,
  detailResultLoading: state.medier.detailResultLoading,
  
});

export default connect(mapStateToProps, { getMovieInfo, getSeriesInfo,isMediaInList , addMediaToList  })(MediaDetailPage);