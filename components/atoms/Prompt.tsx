import React from "react";
import style from "./Prompt.module.scss";
import Logo from "./Logo";

interface PositionProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Prompt = ({ top, left, right, bottom }: PositionProps) => {
  const positionStyles = {
    top: top ? top : undefined,
    left: left ? left : undefined,
    right: right ? right : undefined,
    bottom: bottom ? bottom : undefined,
  };

  return (
    <div
      className={`${style.main} rounded-lg position-absolute bg-white z-n1`}
      style={positionStyles} // Inline styles for dynamic positioning
    >
      PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF PSF
      PSF PSF PSF PSF PSF PSF PSF
    </div>
  );
};

export default Prompt;
