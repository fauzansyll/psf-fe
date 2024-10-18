"use client";

import { Lapangan } from "@/lib/data";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const Detail = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const id = params.id as string;
  const cabang = searchParams.get("cabang");

  const data = Lapangan.find((item) => item.cabang === cabang)?.fields.find(
    (field) => String(field.idx) === id
  );

  console.log("Data", data);
  console.log("id", typeof id);
  console.log("cabang", typeof cabang);

  return (
    <div>
      <h1>{cabang}</h1>
      <p>{id}</p>
    </div>
  );
};

export default Detail;
