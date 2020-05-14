import React from "react";

export default function HeroChild(props) {
  return (
    <form id="likes" onSubmit={props.handleClick}>
      <button className="likes-btn">
        <img
          src={require("../assets/Icons/PNG/Icon-likes.png")}
          className="header__img"
          alt="img"
        />
      </button>
      <input type="number" name="totalLikes" value={props.count} disabled />
    </form>
  );
}
