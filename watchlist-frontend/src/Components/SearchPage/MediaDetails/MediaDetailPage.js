import React, { Component } from "react";

/* Styling */
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import "./MediaDetailPage.css";

/* Components. */
import { Loader } from "../../Common/Loader";
import NotFound from "../../Common/NotFound";
import Anmeldelser from "./Reviews";

/* Redux */
import { connect } from "react-redux";
import { getMovieInfo, getSeriesInfo } from "../../../actions/TheMovieDB";
import {
  isMediaInWTW,
  isMediaInHW,
  addMediaToList,
  deleteMediaFromList
} from "../../../actions/lists.js";

/* Renders a simple series overview. */
const serieDetails = mediumDetails => {
  return (
    <React.Fragment>
      <p>
        <b>Original tittel: </b>
        {mediumDetails.original_name}
      </p>
      <p>
        <b>Original språk: </b>
        {mediumDetails.original_language.toUpperCase()}
      </p>
      <p>
        <b>Utgivelsesdato: </b>
        {mediumDetails.first_air_date}
      </p>
      <p>
        <b>Antall sesonger: </b>
        {mediumDetails.number_of_seasons + ""}
      </p>
      <p>
        <b>Antall episoder: </b>
        {mediumDetails.number_of_episodes + ""}
      </p>
      <p>
        <b>Produksjonselskap: </b>
        {mediumDetails.production_companies.map(company => (
          <span key={company.id}>{company.name + ", "}</span>
        ))}
      </p>
      <p>
        <b>Kategorier: </b>
        {mediumDetails.genres.map(genre => (
          <span key={genre.id}>{genre.name + ", "}</span>
        ))}
      </p>
    </React.Fragment>
  );
};

/* Renders a simple film overview. */
const filmDetails = mediumDetails => {
  return (
    <React.Fragment>
      <p>
        <b>Original tittel: </b>
        {mediumDetails.original_title}
      </p>
      <p>
        <b>Original språk: </b>
        {mediumDetails.original_language.toUpperCase()}
      </p>
      <p>
        <b>Utgivelsesdato: </b>
        {mediumDetails.release_date}
      </p>
      <p>
        <b>Lengde: </b>
        {mediumDetails.runtime + "min"}
      </p>
      <p>
        <b>Produksjonselskap: </b>
        {mediumDetails.production_companies.map(company => (
          <span key={company.id}>{company.name + ", "}</span>
        ))}
      </p>
      <p>
        <b>Kategorier: </b>
        {mediumDetails.genres.map(genre => (
          <span key={genre.id}>{genre.name + ", "}</span>
        ))}
      </p>
    </React.Fragment>
  );
};

/*** 
 * Renders a overview of a movie/series.
 * Users can see details of the movie/series and add it to their lists.
 */
class MediaDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaType: "",
      mediaID: 0
    };
  }
  search = (mediaType, id) => {
    if (mediaType === "filmer") {
      this.props.getMovieInfo(id);
    } else if (mediaType === "serier") {
      this.props.getSeriesInfo(id);
    }
  };

  componentDidMount() {
    const path = this.props.location.pathname.split("/");
    const mediaType = path[1];
    const mediaID = path[2];
    this.setState({ mediaType: mediaType, mediaID: mediaID });
    this.search(mediaType, mediaID);
    this.props.isMediaInWTW(mediaID);
    this.props.isMediaInHW(mediaID);
  }

  /* Updates the movie/series based on the URL. */
  componentDidUpdate(prevProps) {
    const path = prevProps.location.pathname.split("/");
    const mediaType = path[1];
    const mediaID = path[2];
    if (this.props.mediaID !== prevProps.mediaID) {
      this.setState({ mediaType: mediaType, mediaID: mediaID });
      this.search(mediaType, mediaID);
    }
  }

  render() {
    if (this.props.detailResultLoading) {
      return <Loader />;
    } else if (!this.props.mediumDetails) {
      return <NotFound error={"Kunne ikke finne angitt serie/film"} />;
    }
    const imageUrl = this.props.mediumDetails.poster_path
      ? "https://image.tmdb.org/t/p/w300" + this.props.mediumDetails.poster_path
      : "";
    return (
      <React.Fragment>
        <Row className="justify-content-center">
          <Col xs={{ span: "12" }}>
            <Card style={{ marginBottom: "32px", padding: "32px" }}>
              <Container>
                <Row className="justify-content-center">
                  <Col xs="9">
                    <Card.Title
                      style={{
                        textAlign: "left",
                        fontSize: "2em",
                        marginRight: "auto"
                      }}
                    >
                      <b>
                        {this.state.mediaType === "filmer"
                          ? this.props.mediumDetails.title
                          : this.props.mediumDetails.name}
                      </b>
                    </Card.Title>
                  </Col>
                  <Col xs="3" style={{ marginLeft: "auto" }}>
                    {// Want To Watch button.
                    this.props.isInWantToWatch ? (
                      <Button
                        style={{ width: "50%" }}
                        className="mr-1 btn-success"
                        onClick={() =>
                          this.props.deleteMediaFromList(
                            this.state.mediaID,
                            "wantToWatch"
                          )
                        }
                      >
                        Skal se
                      </Button>
                    ) : (
                      <Button
                        style={{ width: "50%" }}
                        className="mr-1"
                        onClick={() =>
                          this.props.addMediaToList(
                            this.state.mediaID,
                            this.state.mediaType,
                            "wantToWatch"
                          )
                        }
                      >
                        Skal se
                      </Button>
                    )}
                    {// Have Watched button.
                    this.props.isInHaveWatched ? (
                      <Button
                        className="btn-success"
                        onClick={() =>
                          this.props.deleteMediaFromList(
                            this.state.mediaID,
                            "haveWatched"
                          )
                        }
                      >
                        Har sett
                      </Button>
                    ) : (
                      <Button
                        onClick={() =>
                          this.props.addMediaToList(
                            this.state.mediaID,
                            this.state.mediaType,
                            "haveWatched"
                          )
                        }
                      >
                        Har sett
                      </Button>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col xs="auto">
                    <Image
                      src={imageUrl}
                      style={{ height: 300, width: 200 }}
                      rounded
                    />
                  </Col>
                  <Col> {/* Movies and series have different object attributes and need to be rendered differently. */}
                    {this.state.mediaType === "filmer"
                      ? filmDetails(this.props.mediumDetails)
                      : serieDetails(this.props.mediumDetails)}
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-1">
                    <h4>
                      <b>Beskrivelse</b>
                    </h4>
                    <p>
                      {this.props.mediumDetails.overview
                        ? this.props.mediumDetails.overview
                        : "Ingen beskrivelse tilgjenlig"}
                    </p>
                  </Col>
                </Row>
              </Container>
            </Card>
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
  isInHaveWatched: state.list.isInHaveWatched,
  isInWantToWatch: state.list.isInWantToWatch
});

export default connect(mapStateToProps, {
  getMovieInfo,
  getSeriesInfo,
  isMediaInWTW,
  isMediaInHW,
  addMediaToList,
  deleteMediaFromList
})(MediaDetailPage);
