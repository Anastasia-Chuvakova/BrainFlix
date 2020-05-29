import React from "react";

import HeroFunc from "./HeroFunc";
import Users from "./Users";
import Videos from "./Videos";

function HeroItems() {
  return (
    <div className="hero__article">
      <div className="hero__video">
        <video
          className="mainVideo"
          controls
          poster={require("./../assets/Images/video-list-0.jpg")}
          className="hero__mainVideo"
          width="100%"
          height="100%"
          controls
        >
          <source
            src={require("./../assets/Video/BrainStation Sample Video.mp4")}
            type="video/mp4"
          ></source>
        </video>
      </div>
      <div className="text__container">
        <div className="hero__text">
          <h1 className="hero__header">BMX Rampage: 2018 Highlights</h1>
          <div className="hero__info">
            <div className="hero__nameDate">
              <h2 className="hero__subheader subheader">By Red Cow</h2>
              <h5 className="hero__labels labels">12/18/2018</h5>
            </div>

            <HeroFunc />
          </div>

          <h4 className="hero__paragraph paragraph">
            On a gusty day in Southern Utah, a group of 25 daring mountain
            bikers blew the doors off what is possible on two wheels, unleashing
            some of the biggest moments the sport has ever seen. While mother
            nature only allowed for one full run before the conditions made it
            impossible to ride, that was all that was needed for event veteran
            Kyle Strait, who won the event for the second time -- eight years
            after his first Red Cow Rampage title
          </h4>
          <Users />
        </div>
        <div>
          <Videos />
        </div>
      </div>
    </div>
  );
}

export default HeroItems;
