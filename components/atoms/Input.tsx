import React from "react";
import { useForm } from "react-hook-form";

interface InputProps {
  placeholder?: string;
  type: string;
  id: string;
  name: string;
  errors: any;
  register: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  onChange,
  placeholder,
  name,
  type,
  id,
  errors,
  register,
}: InputProps) => {
  console.log("Error :", errors);
  return (
    <div className="input-group d-flex flex-column">
      <input
        type={type}
        name={name}
        {...register(name, { required: true })}
        className="form-control w-100"
        placeholder={placeholder}
        aria-label={placeholder}
        id={id}
        aria-describedby="basic-addon1"
        onChange={onChange}
      />
      {errors[name] ? (
        <p className="text-danger">This field is required</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Input;
