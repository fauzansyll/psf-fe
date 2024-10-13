import React from "react";

interface InputProps {
  placeholder?: string;
  type: string;
  id: string;
  value: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange, placeholder, type, id, value }: InputProps) => {
  return (
    <div className="input-group ">
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        id={id}
        value={value}
        aria-describedby="basic-addon1"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
