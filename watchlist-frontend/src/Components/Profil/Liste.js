import React from "react";
import { Card } from "react-bootstrap/";
import MediaItem from "./MediaItem"

import {Loader} from "../Common/Loader"

import { connect } from "react-redux";
import { getListToDetails  } from "../../actions/TheMovieDB"
import { getBackendMediaID } from "../../actions/lists"


class Liste extends React.Component {
  constructor(props){
    super(props);


    let list = this.props.apiUrl
    console.log(list)

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
    this.props.getBackendMediaID(this.props.apiUrl);
    console.log("token: " + this.props.token)
  }

  componentDidUpdate(prevProps) {
    if (this.props.deleteLoading != prevProps.deleteLoading){
      this.props.getBackendMediaID(this.props.apiUrl);
    }

    console.log("inside")

    if (this.props.list !== prevProps.list) {
      this.props.getListToDetails(this.props.list);
    }
  } 
  
 render() {
    if (this.props.listLoading){
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
  list: state.list.list,
  listLoading: state.list.listLoading,
  deleteLoading: state.list.deleteFromListLoading
});


export default connect(mapStateToProps, { getListToDetails,  getBackendMediaID })(Liste);
