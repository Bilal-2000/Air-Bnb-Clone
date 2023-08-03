import React from "react";
import logo from "../images/airbnb 1.svg"

export default function Header(){
    return(
        <div className="header">
            <img className="airbnb-logo" src={logo} alt="airbnb"></img>
        </div>
    )
}