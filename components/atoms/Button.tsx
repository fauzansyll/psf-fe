import React, { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";

interface ButtonProps extends VariantProps<typeof buttonStyles> {
  children: ReactNode;
  type: "button" | "reset" | "submit";
  onClick: () => void;
}

const buttonStyles = cva("btn", {
  variants: {
    color: {
      primary: "btn-primary",
      secondary: "btn-secondary",
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
      className={`${buttonStyles({ color })}  `}
    >
      {children}
    </button>
  );
};

export default Button;
