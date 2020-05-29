import React from "react";

export default function HeroChild(props) {
  return (
    <div className="btn__wrapper">
      <form id="views" onSubmit={props.handleClick}>
        <button className="views-btn">
          <img
            src={require("../assets/Icons/PNG/Icon-views.png")}
            className="view__img"
            alt="img"
          />
        </button>
        <span className="totalViews">{props.viewCount}</span>
      </form>
      <form id="likes" onSubmit={props.handleClick}>
        <button className="likes-btn">
          <img
            src={require("../assets/Icons/PNG/Icon-likes.png")}
            className="header__img"
            alt="img"
          />
        </button>
        <span className="totalLikes">{props.likeCount}</span>
      </form>
    </div>
  );
}
