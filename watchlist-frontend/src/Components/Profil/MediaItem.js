import React from "react";
import { Card, Image, Col, Row, Button } from "react-bootstrap/";
import "./MediaItem.css";
import {getMovieInfo, getSeriesInfo} from "../../actions/TheMovieDB"
import {deleteMediaFromList} from "../../actions/lists"
import {Loader} from "../Common/Loader"


/* Redux */
import { connect } from "react-redux";

class MediaItem extends React.Component{

    constructor(props){
        super(props)
        this.id = props.id.id
        this.mdbID = props.id.mdbID
        this.title = props.id.original_title
        this.release_date = props.id.release_date
        this.poster_path = props.id.poster_path
        //this.apiUrl = "wantToWatch" 

        
    }

    
    removeBackend = () =>{
        this.props.deleteMediaFromList(this.id, this.props.apiUrl)
    }

    componentDidMount(){
        // this.props.getMovieInfo(this.id);
    }


    render(){
        const imageUrl = this.poster_path? "https://image.tmdb.org/t/p/w300" + this.poster_path : "";
        return(
        <Card style={{marginBottom: "32px", padding: "15px" }} >
           <Row>
                <Card className="mr-1 ml-2">
                    <Image src={imageUrl} style={{height: 135, width: 90}} rounded />
                </Card>     
                <Col>
                    <h5>{this.title}</h5>
                    <h5>{this.release_date}</h5>
                </Col>
                <Button onClick={this.removeBackend} className="ml-auto mb-auto mr-3 btn-danger" >
                    x
                </Button>
           </Row>
        </Card>
        );
    }  
}


const mapStateToProps = state => ({
    mediumDetails: state.medier.mediumDetails,
    detailResultLoading: state.medier.detailResultLoading,
});

export default connect(mapStateToProps, { getMovieInfo, getSeriesInfo, deleteMediaFromList })(MediaItem);
