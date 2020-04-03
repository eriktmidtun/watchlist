import React from "react";
/* Styling */
import { Row, Col, Image, Card } from "react-bootstrap/";

/* Routing */
import { LinkContainer } from "react-router-bootstrap";
import { withRouter } from "react-router-dom";

/* Redux */
import { connect } from "react-redux";
import { searchForMovies, searchForSeries } from "../../actions/TheMovieDB";
import { Loader } from "../Common/Loader";

/* Renders a simple series overview in results. */
const serier = (serie, imageUrl) => {
  return (
    <LinkContainer key={serie.id} to={"/serier/" + serie.id}>
      <Card className="mt-3 p-2">
        <Row style={{ cursor: "pointer" }}>
          <Col className="mr-1" style={{ width: "60px" }} xs="auto">
            <Image src={imageUrl} style={{ height: 92, width: 60 }} rounded />
          </Col>
          <Col style={{ textAlign: "left", color: "black" }} className="ml-2">
            <h2>{serie.name}</h2>
            <h5 style={{ fontStyle: "italic" }}>{serie["first_air_date"]}</h5>
          </Col>
        </Row>
      </Card>
    </LinkContainer>
  );
};

/* Renders a simple film overview in results. */
const filmer = (film, imageUrl) => {
  return (
    <LinkContainer key={film.id} to={"/filmer/" + film.id}>
      <Card className="mt-3 p-2">
        <Row style={{ cursor: "pointer" }}>
          <Col className="mr-1" style={{ width: "60px" }} xs="auto">
            <Image src={imageUrl} style={{ height: 92, width: 60 }} rounded />
          </Col>
          <Col style={{ textAlign: "left", color: "black" }} className="ml-2">
            <h2>{film.title}</h2>
            <h5 style={{ fontStyle: "italic" }}>{film["release_date"]}</h5>
          </Col>
        </Row>
      </Card>
    </LinkContainer>
  );
};

/*
Since The Movie Database responds differently to movie requests
and series requests, we need two seperate components.
*/
class Results extends React.Component {
  /* Requests the first 20 hits of the search. */
  search = (mediaType, query) => {
    if (mediaType === "filmer") {
      this.props.searchForMovies(query);
    } else if (mediaType === "serier") {
      this.props.searchForSeries(query);
    }
  };

  componentDidMount() {
    this.search(this.props.mediaType, this.props.query);
  }

  /* Commits a search if the query part of the URL is updated. */
  componentDidUpdate(prevProps) {
    if (this.props.query !== prevProps.query) {
      this.search(this.props.mediaType, this.props.query);
    }
  }

  render() {
    if (this.props.resultsLoading) {
      return <Loader variant="dark" />;
    }
    if (!this.props.mediums || this.props.mediums.results.length === 0) {
      return <h1 className="mt-2">Ingen resultater</h1>;
    }
    const results = this.props.mediums.results;
    return results.map(media => {
      const imageUrl = media.poster_path
        ? "https://image.tmdb.org/t/p/w92" + media.poster_path
        : "";
      if (this.props.mediaType === "filmer") {
        return filmer(media, imageUrl);
      }
      return serier(media, imageUrl);
    });
  }
}

const mapStateToProps = state => ({
  mediums: state.medier.mediums,
  resultsLoading: state.medier.resultsLoading
});

export default withRouter(
  connect(mapStateToProps, { searchForMovies, searchForSeries })(Results)
);
