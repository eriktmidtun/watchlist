import React from "react";
import { Card, Image, Col, Row, Button } from "react-bootstrap/";
import "./MediaItem.css";
import {getMovieInfo, getSeriesInfo} from "../../actions/TheMovieDB"
import {Loader} from "../Common/Loader"


/* Redux */
import { connect } from "react-redux";

class MediaItem extends React.Component{

    constructor(props){
        super(props)
        this.id = props.id
        
    }

    
    removeBackend = (id) =>{
        //use remove movie by id API 
        console.log("Hei")
        console.log(this.id)
    }

    componentDidMount(){
        this.props.getMovieInfo(this.id);
    }


    render(){
        if (!this.props.mediumDetails   ) {
            return <Loader/>
        };
        const imageUrl = this.props.mediumDetails.poster_path? "https://image.tmdb.org/t/p/w300" + this.props.mediumDetails.poster_path : "";
        return(
        <Card style={{marginBottom: "32px", padding: "15px" }} >
           <Row>
                <Card className="mr-1 ml-2">
                    <Image src={imageUrl} style={{height: 135, width: 90}} rounded />
                </Card>     
                <Col>
                    <h5>{this.props.mediumDetails.original_title}</h5>
                    <h5>{this.props.mediumDetails.release_date } </h5>
                </Col>
                <Button onClick={this.removeBackend} className="ml-auto mb-auto mr-3 btn-danger" >
                    x
                </Button>
           </Row>
        </Card>
        );
    }  
}


const foo = (info) => {
    if (info){
        return(info.original_title)
    }

}

const mapStateToProps = state => ({
    mediumDetails: state.medier.mediumDetails,
    detailResultLoading: state.medier.detailResultLoading,
});

export default connect(mapStateToProps, { getMovieInfo, getSeriesInfo })(MediaItem);