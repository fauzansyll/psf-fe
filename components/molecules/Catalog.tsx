import { DataLapangan, FieldsProps, LapanganProps } from "@/lib/interfaces";
import style from "./Catalog.module.scss";

import React from "react";
import Card from "../atoms/Card";
const Catalog = ({ cabang, fields }: LapanganProps) => {
  return (
    <div className={`${style.main}   rounded p-5`}>
      <h2 className="text-center text-light mb-5">{cabang}</h2>
      <div className="row">
        {" "}
        {fields.map((field: FieldsProps, idx: number) => {
          return (
            <div className="col-4 mb-4" key={idx}>
              {" "}
              <Card
                idx={field.idx}
                status={field.status}
                nama={field.nama}
                image={field.image}
                cabang={cabang}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
