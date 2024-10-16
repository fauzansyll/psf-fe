import React from "react";
import { SelectProps } from "@/lib/interfaces";

const Select = ({ name, id, data, onChange, register }: SelectProps) => {
  return (
    <select
      onChange={() => onChange}
      className="form-select"
      name={name}
      {...register(name, { required: true })}
      id={id}
    >
      {data.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default Select;
