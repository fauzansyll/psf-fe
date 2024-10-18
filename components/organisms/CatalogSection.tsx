import React from "react";
import { Lapangan } from "@/lib/data";
import Image from "next/image";
import Catalog from "../molecules/Catalog";

const CatalogSection = () => {
  return (
    <div className="w-100">
      <h1 className="text-center">Fields</h1>
      {Lapangan.map((item, idx) => {
        return (
          <div key={idx}>
            <Catalog fields={item.fields} cabang={item.cabang} />
          </div>
        );
      })}
    </div>
  );
};

export default CatalogSection;
