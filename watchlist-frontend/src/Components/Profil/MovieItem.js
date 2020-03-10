import React from "react";
import { Card } from "react-bootstrap/";


async getMovieData = ({id}) => {
    var apiKey = "c5733a52f13cedc8b47b7a21e8edd914"

    //fetch('https://api.themoviedb.org/3/movie/' + {id} + '?api_key='+{apiKey} + '&language=en-US')
    const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=c5733a52f13cedc8b47b7a21e8edd914&language=en-US')
    
    return(

        console.log("hei")
    );
}

const MoiveItem = ({id}) => {
    
    return (
        <Card>
            <h6>
                {getMovieData(id)}
            </h6>
        </Card>
    );
}

export default MoiveItem;