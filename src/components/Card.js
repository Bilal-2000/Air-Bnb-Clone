import React from "react";
import star from "../images/Star 1.png"
import ellipse from "../images/Ellipse 6.png"

export default function Card(props){
    return(
        <div className="card-wrapper">
            <div className="inner-card-wrapper">
                <div className="pics-wrapper">
                    <img src={props.img} alt="first"></img>
                </div>
                <div className="details-wrapper">   
                        <div><img className="star-logo" src={star} alt="star"></img><span className="rating">{props.rating}</span><span className="reviews">({props.reviewCount})</span><img className="ellipse-logo" src={ellipse} alt="ellipse"></img><span className="reviews">{props.country}</span></div>
                </div>
                <div className="review-para">
                    <p>{props.title}</p>
                </div>
                <div className="cost-para">
                    <div>
                        <span className="bold-cost-para">From ${props.price} </span><span className="non-bold-cost-para">/ person</span>
                    </div>
                </div>
            </div>
        </div>
    )
}