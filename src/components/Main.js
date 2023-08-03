import React from "react";
import pic from "../images/Group 77.png"


export default function Main(){
    return(
        <div className="main">
            <div className="pics-flex-wrapper">
                <img className="pics-group" src={pic} alt="group"></img>
            </div>
            <div className="para-wrapper">
                <p className="main-heading">Online Experiences</p>
                <p className="sub-heading">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}