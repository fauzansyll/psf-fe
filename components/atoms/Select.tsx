import React from "react";
import { SelectProps } from "@/lib/interfaces";

const Select = ({ name, id, data, onChange }: SelectProps) => {
  return (
    <select
      onChange={() => onChange}
      className="form-select"
      name={name}
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
