import React from "react";
import style from "./Circle.module.scss";
import Link from "next/link";

interface IconProps {
  icon: string;

  link: string;
}

export const Circle = ({ icon, link }: IconProps) => {
  return (
    <Link href={link}>
      <div className={`${style.main}`}>
        <i
          className={`${style.icon} bg-light rounded-circle p-3 display-1 bi bi-${icon}`}
        ></i>
      </div>
    </Link>
  );
};
