import React from "react";
import { Card, Image, Col, Row, Button } from "react-bootstrap/";
import { getMovieInfo, getSeriesInfo } from "../../actions/TheMovieDB";
import { deleteMediaFromList } from "../../actions/lists";
import { Link } from "react-router-dom";

/* Redux */
import { connect } from "react-redux";

class MediaItem extends React.Component {
  removeBackend = () => {
    this.props.deleteMediaFromList(this.props.info.id, this.props.apiUrl);
  };

  render() {
    const imageUrl = this.props.info.poster_path
      ? "https://image.tmdb.org/t/p/w300" + this.props.info.poster_path
      : "";
    const title =
      this.props.info.mediumType === "filmer"
        ? this.props.info.title
        : this.props.info.name;
    const air_date =
      this.props.info.mediumType === "filmer"
        ? this.props.info.release_date
        : this.props.info.first_air_date;
    return (
      <Card style={{ marginBottom: "32px", padding: "15px" }}>
        <Row>
          <Link
            to={"/" + this.props.info.mediumType + "/" + this.props.info.id}
          >
            <Card className="mr-1 ml-2">
              <Image
                src={imageUrl}
                style={{ height: 135, width: 90 }}
                rounded
              />
            </Card>
          </Link>
          <Col style={{ textAlign: "left", color: "black" }} className="ml-2">
            <h2>{title}</h2>
            <h5 style={{ fontStyle: "italic" }}>{air_date}</h5>
          </Col>
          <Button
            onClick={this.removeBackend}
            className="ml-auto mb-auto mr-3 btn-danger"
          >
            x
          </Button>
        </Row>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  mediumDetails: state.medier.mediumDetails,
  detailResultLoading: state.medier.detailResultLoading
});

export default connect(mapStateToProps, {
  getMovieInfo,
  getSeriesInfo,
  deleteMediaFromList
})(MediaItem);
