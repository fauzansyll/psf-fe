import React, { useState } from "react";
import Logo from "../atoms/Logo";
import Navlink from "../atoms/Navlink";
import style from "./Header.module.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-100 position-absolute d-flex gap-5 justify-content-between align-items-center  p-3">
      <div>
        <Logo />
      </div>

      <div className="d-lg-none">
        <button onClick={toggleMenu} className={`${style.hamburgerbtn}`}>
          <div className={`${style.hamburger} ${isMenuOpen ? style.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      <div className="d-none d-lg-flex">
        <Navlink isMenuOpen={isMenuOpen} togglemenu={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div
          className={`${style.dropdown} duration-300 position-fixed top-0 end-0 w-100 h-100 bg-black shadow-lg`}
        >
          <Navlink isMenuOpen={isMenuOpen} togglemenu={toggleMenu} />
        </div>
      )}
    </div>
  );
};

export default Header;
