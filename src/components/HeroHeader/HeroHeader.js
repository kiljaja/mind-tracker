import React from "react";
import "./HeroHeader.css";
import mindToon from "../../images/mind-toon.png";

function HeroHeader() {
  return (
    <header className="hero-header">
      <div className="left-header">
        <h1>Mind Tracking</h1>
        <p>
          Keep track of your meditation habit and see your progress simply click
          on the meditation to add an entry
        </p>
      </div>
      <div className="right-header">
        <img className="brain-toon" src={mindToon} alt="Large brain cartoon" />
      </div>
    </header>
  );
}

export default HeroHeader;
