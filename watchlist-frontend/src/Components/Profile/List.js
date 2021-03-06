import React from "react";

/* Styling */
import { Card } from "react-bootstrap/";

/* Components */
import MediaItem from "./MediaItem";
import { Loader } from "../Common/Loader";

/* Redux */
import { connect } from "react-redux";
import { getListToDetails } from "../../actions/TheMovieDB";
import { getBackendMediaID } from "../../actions/lists";

/*** 
 * List starts the fetching of list data, and then renders them out.
 */
class Liste extends React.Component {
  componentDidMount() {
    this.props.getBackendMediaID(this.props.apiUrl);
  }

  componentDidUpdate(prevProps) {
    if (this.props.deleteLoading !== prevProps.deleteLoading) {
      this.props.getBackendMediaID(this.props.apiUrl);
    }
    if (this.props.apiUrl === "wantToWatch") {
      if (this.props.wtwList !== prevProps.wtwList) {
        this.props.getListToDetails(this.props.wtwList, this.props.apiUrl);
      }
    } else {
      if (this.props.hwList !== prevProps.hwList) {
        this.props.getListToDetails(this.props.hwList, this.props.apiUrl);
      }
    }
  }

  render() {
    if (this.props.listLoading) {
      return <Loader />;
    }
    if (this.props.detailResultLoading) {
      return <Loader />;
    }
    if (this.props.apiUrl === "wantToWatch") {
      if (
        !this.props.wtwListDetails ||
        this.props.wtwListDetails.length === 0
      ) {
        return (
          <Card style={{ padding: "32px" }}>
            <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
              {this.props.listeNavn}{" "}
            </Card.Title>
            <h2 className="mt-2">Ingen filmer i listen din</h2>
          </Card>
        );
      }
    } else {
      if (!this.props.hwListDetails || this.props.hwListDetails.length === 0) {
        return (
          <Card style={{ padding: "32px" }}>
            <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
              {this.props.listeNavn}{" "}
            </Card.Title>
            <h2 className="mt-2">Ingen filmer i listen din</h2>
          </Card>
        );
      }
    }

    return (
      <Card style={{ padding: "32px" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "2em" }}>
          {this.props.listeNavn}{" "}
        </Card.Title>
        {this.props.apiUrl === "haveWatched"
          ? this.props.hwListDetails.map(i => (
              <MediaItem info={i} key={i.id} apiUrl={"haveWatched"}>
                {" "}
              </MediaItem>
            ))
          : this.props.wtwListDetails.map(i => (
              <MediaItem info={i} key={i.id} apiUrl={"wantToWatch"}>
                {" "}
              </MediaItem>
            ))}
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  hwListDetails: state.medier.hwListDetails,
  wtwListDetails: state.medier.wtwListDetails,
  detailResultLoading: state.medier.detailResultLoading,
  hwList: state.list.hwList,
  wtwList: state.list.wtwList,
  listLoading: state.list.listLoading,
  deleteLoading: state.list.deleteFromListLoading
});

export default connect(mapStateToProps, {
  getListToDetails,
  getBackendMediaID
})(Liste);
