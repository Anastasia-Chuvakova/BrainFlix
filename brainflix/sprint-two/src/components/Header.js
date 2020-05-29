import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header__wrapper">
      <NavLink className="header__link" to="/" exact>
        <img
          src={require("../assets/Logo/Logo-brainflix.png")}
          className="header__img"
          alt="img"
        />
      </NavLink>
      <div className="header__search-btn-icon">
        <div className="header__search-wrp">
          <input className="search-box" type="string" placeholder="Search" />
        </div>
        <div className="header__end">
          <NavLink to="/upload">
            <button className="header__button"> + upload</button>
            <img
              src={require("../assets/Icons/PNG/userico.png")}
              className="user__icon"
              alt="icon"
            />
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
