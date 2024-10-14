import React, { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import style from "./Button.module.scss";

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode;
  type: "button" | "reset" | "submit";
  onClick: () => void;
}

const buttonStyles = cva("btn", {
  variants: {
    color: {
      primary: style.primaryButton,
      secondary: style.secondaryButton,
      success: "btn-success",
      danger: "btn-danger",
      warning: "btn-warning",
      info: "btn-info",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const Button = ({ children, type = "button", color, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${buttonStyles({
        color,
      })} d-flex justify-content-center align-items-center `}
    >
      {children}
    </button>
  );
};

export default Button;
