import React from "react";

interface InputProps {
  placeholder?: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange, placeholder, type, ...props }: InputProps) => {
  return (
    <div className="input-group ">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        aria-describedby="basic-addon1"
        {...props}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
