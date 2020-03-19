import React from "react";
import { Card } from "react-bootstrap/";
import MediaItem from "./MediaItem"

import {Loader} from "../Common/Loader"

import { connect } from "react-redux";
import { getListToDetails, getBackendMediaID } from "../../actions/TheMovieDB"


class Liste extends React.Component {
  constructor(props){
    super(props);

    this.state={

      mediums: [
        {//eksempel på hva får fra backenden
            "id": 1,
            "mdbID": 33407, //Knerten
            "mediumType": "filmer"
        },
        {
            "id": 3,
            "mdbID": 272, //batman
            "mediumType": "filmer"
        },
        {
            "id": 4,
            "mdbID": 414, //batman
            "mediumType": "filmer"
        }
    ]
    };
  }

  componentDidMount(){
    this.props.getBackendMediaID(this.props.token)  
  }

  componentDidUpdate(prevProps) {
    if (this.props.backendIdList !== prevProps.backendIdList) {
      this.props.getListToDetails(this.props.backendIdList);
    }
  } 
  
 render() {
    if (this.props.backendIdListLoading){
      return (<Loader/>)
    }

    if (this.props.detailResultLoading) {
      return (<Loader/>)
    }
    if (!this.props.listDetails || this.props.listDetails.length === 0) {
      return (<h1 className="mt-2">Ingen filmer i listen din</h1>)
    };
    // console.log(this.props.listDetails)
    return (
      <Card style={{padding: "32px" }}>
        <Card.Title style={{ textAlign: "center", fontSize: "2em" }} >
        {this.props.listeNavn} </Card.Title>
          {this.props.listDetails.map((i) => <MediaItem id={i}> </MediaItem>) }
      </Card>
    );
  }
};

const mapStateToProps = state => ({
  listDetails: state.medier.listDetails,
  detailResultLoading: state.medier.detailResultLoading,
  token: state.auth.token,
  backendIdList: state.medier.backendIdList,
  backendIdListLoading: state.medier.backendIdListLoading
});


export default connect(mapStateToProps, { getListToDetails,  getBackendMediaID })(Liste);
