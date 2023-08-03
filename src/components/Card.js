import React from "react";
import first from "../images/image 12.png";
import second from "../images/wedding-photography 1.png";
import third from "../images/mountain-bike 1.png"; 
import star from "../images/Star 1.png"
import ellipse from "../images/Ellipse 6.png"

export default function Card(){
    return(
        <div className="card-wrapper">
            <div className="inner-card-wrapper">
                <div className="pics-wrapper">
                    <img src={first} alt="first"></img>
                    <img src={second} alt="second"></img>
                    <img src={third} alt="third"></img>
                </div>
                <div className="details-wrapper">   
                        <div><img className="star-logo" src={star} alt="star"></img><span className="rating">5.0</span><span className="reviews">(6)</span><img className="ellipse-logo" src={ellipse} alt="ellipse"></img><span className="reviews">USA</span></div>
                        <div><img className="star-logo" src={star} alt="star"></img><span className="rating">5.0</span><span className="reviews">(30)</span><img className="ellipse-logo" src={ellipse} alt="ellipse"></img><span className="reviews">USA</span></div>
                        <div><img className="star-logo" src={star} alt="star"></img><span className="rating">4.8</span><span className="reviews">(2)</span><img className="ellipse-logo" src={ellipse} alt="ellipse"></img><span className="reviews">USA</span></div>
                </div>
                <div className="review-para">
                    <p>Life lessons with Katie Zaferes</p>
                    <p>Learn wedding photography</p>
                    <p>Group Mountain Biking</p>
                </div>
                <div className="cost-para">
                    <div>
                        <span className="bold-cost-para">From $136 </span><span className="non-bold-cost-para">/ person</span>
                    </div>
                    <div>
                        <span className="bold-cost-para">From $125</span><span className="non-bold-cost-para">/ person</span>
                    </div>
                    <div>
                        <span className="bold-cost-para">From $50 </span><span className="non-bold-cost-para">/ person</span>
                    </div>
                </div>
            </div>
        </div>
    )
}