import React from "react";
import star from "../images/star.png";

export default function Card({
  img,
  stars,
  reviews,
  country,
  heading,
  cost,
  availability,
}) {
  const available = availability ? "Available" : "Sold Out";
  const photo1 = require(`../images/${img}`);
  return (
    <div className="card">
      <div className="image-container">
        <p className="btn btn-light">{available}</p>
        <img src={photo1} className="card-image" />
      </div>
      <div className="rating">
        <img src={star} className="" />
        <p>
          <span className="rating-heading">{stars} </span>
          <span>({reviews}) • </span>
          <span>{country}</span>
        </p>
      </div>
      <h3 className="card-heading">{heading}</h3>
      <p>
        <span className="card-bold">From {cost}</span> / Per Person
      </p>
    </div>
  );
}
