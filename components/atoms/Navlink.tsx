import React, { Dispatch, SetStateAction } from "react";
import { Button } from "react-bootstrap";
import style from "@/components/molecules/Header.module.scss";

interface Navlink {
  togglemenu: () => void;
  isMenuOpen: boolean;
}

const Navlink = ({ togglemenu, isMenuOpen }: Navlink) => {
  return (
    <div className="d-flex flex-column justify-content-lg-between h-100 flex-lg-row gap-5 align-items-center p-3">
      <div className="d-lg-none">
        <button onClick={togglemenu} className={`${style.hamburgerbtn}`}>
          <div className={`${style.hamburger} ${isMenuOpen ? style.open : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
      <div className="font-weight-bold">Home</div>
      <div className="font-weight-bold">About</div>
      <div className="font-weight-bold">Field</div>
      <div className="font-weight-bold">Facilities</div>
      <Button>Sign In</Button>
    </div>
  );
};

export default Navlink;
