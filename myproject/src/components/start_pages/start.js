import React, { Component } from "react";
import "../start_pages/start.css";
import star from '../images/star.svg'
class Start extends Component {
    state = {
    };
    render() {
    return (
        <div className="main">
        <div className="background"
        >
            <div className="status">
            </div>
            <img className='star' src={star} alt="star"/> 
            <div className="create">
            Create task
            </div>
        </div>
        </div>
    );
    }
}

export default Start;
