"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import style from "@/components/molecules/Header.module.scss";
import Button from "./Button";
import Logo from "./Logo";

interface Navlink {
  togglemenu: () => void;
  isMenuOpen: boolean;
}

const Navlink = ({ togglemenu, isMenuOpen }: Navlink) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

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
      <div className={`${style.link} font-weight-bold `}>About</div>
      <div className={`${style.link} font-weight-bold `}>Field</div>
      <div className={`${style.link} font-weight-bold `}>Facilities</div>
      <Button
        color={windowSize.width <= 500 ? "primary" : "primary"}
        type="button"
        onClick={() => {}}
      >
        <span className={`${style.link}`}>Sign In</span>
      </Button>

      {windowSize.width <= 500 ? (
        <div className="position-absolute bottom-0 my-5 ">
          <Logo />
        </div>
      ) : null}
    </div>
  );
};

export default Navlink;
