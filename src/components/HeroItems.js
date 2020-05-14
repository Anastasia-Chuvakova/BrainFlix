import React from "react";
import HeroChild from "./HeroChild";

function HeroItems() {
  return (
    <div className="hero__text">
      <div className="hero__article">
        <h1 className="header">BMX Rampage: 2018 Highlights</h1>
        <h2 className="subheader">By Red Cow</h2>
        <HeroChild />
        <h4 className="parapgraph">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </h4>
      </div>
    </div>
  );
}

export default HeroItems;