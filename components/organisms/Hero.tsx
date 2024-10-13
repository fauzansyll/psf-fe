import React, { useContext } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

import style from "./Hero.module.scss";
import { useGlobalContext } from "@/app/page";
import Prompt from "../atoms/Prompt";

const Hero = () => {
  const { isBook, setIsBook } = useGlobalContext();

  const toggleBooking = () => {
    setIsBook((prevState) => ({
      ...prevState,
      isBook: !prevState.isBook,
    }));
  };

  return (
    <>
      <div
        className={`${style.main}   d-flex align-items-center gap-5 flex-column justify-content-center`}
      >
        <h1 className="text-center">Easiest booking platform</h1>

        <Button onClick={toggleBooking} type="button" color="primary">
          {isBook ? "Cancel Booking" : "Book Now!"}
        </Button>
      </div>
    </>
  );
};

export default Hero;
