import React from 'react'
import TwitterContainer from './twitter.js'
//import { Link } from "react-router-dom"


function RightContainer(props) {
    return (
        <div>
            <div>
                <h4>Coronavirus Alerts</h4>
            </div>

            <br></br>
            <TwitterContainer />

        </div>
    );
}


export default RightContainer