import React from "react";

import HeroFunc from "./HeroFunc";

function HeroItems() {
  return (
    <div className="hero__text">
      <div className="hero__article">
        <h1 className="header">BMX Rampage: 2018 Highlights</h1>
        <h2 className="subheader">By Red Cow</h2>
        <h5 className="labels">12/18/2018</h5>
        <form id="likes">
          <button className="views-btn">
            <img
              src={require("../assets/Icons/PNG/Icon-views.png")}
              className="view__img"
              alt="img"
            />
          </button>
          <h5>1,001,023</h5>
        </form>

        <HeroFunc />
        <h4 className="paragraph">
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
