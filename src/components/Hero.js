import React from "react";
import photoGrid from "../images/photo-grid.png";

export default function Hero() {
  return (
    <div className="container">
      <img src={photoGrid} className="hero-image" />
      <h1 className="hero-heading">Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
