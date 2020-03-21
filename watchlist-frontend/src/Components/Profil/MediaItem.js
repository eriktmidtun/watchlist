import React from "react";
import { Card, Image, Col, Row, Button } from "react-bootstrap/";
import "./MediaItem.css";
import {getMovieInfo, getSeriesInfo} from "../../actions/TheMovieDB"
import {deleteMediaFromList} from "../../actions/lists"


/* Redux */
import { connect } from "react-redux";

class MediaItem extends React.Component{
    
    removeBackend = () =>{
        this.props.deleteMediaFromList(this.props.info.id, this.props.apiUrl)
    }

    render(){
        const imageUrl = this.props.info.poster_path? "https://image.tmdb.org/t/p/w300" + this.props.info.poster_path : "";
        return(
        <Card style={{marginBottom: "32px", padding: "15px" }} >
           <Row>
                <Card className="mr-1 ml-2">
                    <Image src={imageUrl} style={{height: 135, width: 90}} rounded />
                </Card>     
                <Col>
                    <h5>{this.props.info.original_title}</h5>
                    <h5>{this.props.info.release_date}</h5>
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
