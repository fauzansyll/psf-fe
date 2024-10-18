import { FieldsProps } from "@/lib/interfaces";
import Image from "next/image";
import style from "./Card.module.scss";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Card = ({ nama, image, idx, status, cabang }: FieldsProps) => {
  return (
    <div className={`${style.main} rounded`} key={idx}>
      <Image
        alt="Test"
        height={200}
        className="rounded-top"
        width={480}
        src={image}
      />
      <div className="p-3 d-flex  flex-column gap-5 rounded">
        <h3>{nama}</h3>
        <div className="d-flex w-100 justify-content-between">
          {status ? (
            <p className="text-danger">Available</p>
          ) : (
            <p className="text-success">Full Booked</p>
          )}
          <Link
            href={{
              pathname: `/${idx}`,
              query: { cabang: cabang },
            }}
          >
            <Button color={"secondary"} onClick={() => {}} type="button">
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
