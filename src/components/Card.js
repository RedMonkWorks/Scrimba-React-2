import React from "react";
import photo1 from "../images/photo-1.png";
import star from "../images/star.png";

export default function Card() {
  return (
    <div className="card">
      <div className="image-container">
        <p className="btn btn-light">Sold Out</p>
        <img src={photo1} className="card-image" />
      </div>
      <div className="rating">
        <img src={star} className="" />
        <p>
          <span className="rating-heading">5.0 </span>
          <span>(6) • </span>
          <span>USA</span>
        </p>
      </div>
      <h3 className="card-heading">Life lessons with Katie Zaferes</h3>
      <p>
        <span className="card-bold">From $136</span> / Per Person
      </p>
    </div>
  );
}
