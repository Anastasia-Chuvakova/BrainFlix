import React from "react";

function Header() {
  return (
    <header className="header__wrapper">
      <nav className="header__link">
        <img
          src={require("../assets/Logo/Logo-brainflix.png")}
          className="header__img"
          alt="img"
        />
      </nav>
      <div className="header__search">
        <textarea className="search-box" placeholder="Search"></textarea>
      </div>
      <div className="header__end">
        <button className="header__button"> + upload</button>
        <img
          src={require("../assets/Icons/PNG/userico.png")}
          className="user__icon"
          alt="icon"
        />
      </div>
    </header>
  );
}
export default Header;
