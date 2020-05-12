import React from "react";

function Header() {
  return (
    <header className="header__wrapper">
      <nav className="header__link">
        <img
          src="...\assets\Logo\Logo-brainflix.png"
          className="header__img"
          alt="img"
        />
      </nav>
      <div className="header__search">
        <input className="search" placeholder="Search..." />
      </div>
      <button className="header__button"> + upload</button>
      <img src="#" className="header__icon" alt="icon" />
      <div />
    </header>
  );
}
export default Header;
