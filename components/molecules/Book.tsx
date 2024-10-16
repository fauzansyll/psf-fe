"use client";

import React, { useEffect, useState } from "react";

import { Booking, Kupon } from "@/lib/interfaces";
import Input from "../atoms/Input";
import { dataBooking, dataKupon } from "@/lib/data";
import Button from "../atoms/Button";
import { useGlobalContext } from "@/app/page";
import style from "./Book.module.scss";

interface FormProps {
  nama: string;
  email: string;
  lapangan: string;
  tanggal: string;
  waktu: string;
  total: number;
  code: string;
}

const Book = () => {
  const { setIsBook } = useGlobalContext();
  const [coupon, setCoupon] = useState("");
  const [data, setData] = useState(dataBooking[0]);
  const [originalTotal] = useState(dataBooking[0].total);
  const [discount, setDiscount] = useState(0);
  const [valid, setValid] = useState({
    message: "",
    color: "",
  });
  const [total, setTotal] = useState(originalTotal);
  const rupiah = new Intl.NumberFormat().format(total);

  function convertIndonesianDate(dateString: string): Date | null {
    const monthMapping: { [key: string]: string } = {
      Januari: "January",
      Februari: "February",
      Maret: "March",
      April: "April",
      Mei: "May",
      Juni: "June",
      Juli: "July",
      Agustus: "August",
      September: "September",
      Oktober: "October",
      November: "November",
      Desember: "December",
    };

    const [hari, month, tahun] = dateString.split(" ");
    const bulan = monthMapping[month];
    if (!bulan) return null;
    return new Date(`${hari} ${bulan} ${tahun}`);
  }

  function isBookingValidForKupon(booking: Booking, kupon: Kupon): boolean {
    const bookingDate = convertIndonesianDate(booking.tanggal);
    if (!bookingDate) return false;

    const kuponStart = new Date(kupon.start);
    const kuponEnd = new Date(kupon.end);
    const isDateInRange = bookingDate >= kuponStart && bookingDate <= kuponEnd;

    const isCodeValid = kupon.code === coupon;
    const isLapanganMatching =
      booking.lapangan.toLowerCase() === kupon.lapangan.toLowerCase();

    const bookingTime = booking.jam.split(" - ")[0];
    const kuponTime = kupon.jam.split("-")[0];
    const isTimeMatching = bookingTime === kuponTime;

    return isDateInRange && isLapanganMatching && isTimeMatching && isCodeValid;
  }

  const checkKupon = () => {
    if (!coupon.trim()) {
      setValid({ ...valid, message: "Kode kupon harus diisi" });
      return;
    }

    const kupon = dataKupon.find((kupon) =>
      isBookingValidForKupon(data, kupon)
    );

    if (kupon) {
      const discount = parseFloat(kupon.potongan) / 100;
      setDiscount(discount * 100);
      const newTotal = originalTotal - originalTotal * discount;
      setTotal(newTotal);
      setData({ ...data, code: coupon });
      setValid({ message: "Code is valid", color: "success" });
    } else {
      setTotal(originalTotal);
      setValid({ message: "Code is invalid", color: "danger" });
      setData({ ...data, code: "" });
    }
  };

  const toggleBooking = () => {
    setIsBook((prevState) => ({
      ...prevState,
      isBook: !prevState.isBook,
    }));
  };

  return (
    <div
      className={`${style.main} position-absolute d-flex flex-column justify-content-center align-items-center w-100 top-0 start-0 end-0 bottom-0 `}
    >
      <h1 className={`${style.close}`} onClick={toggleBooking}>
        Close
      </h1>
      <form
        className={`${style.form} rounded gap-2 d-flex flex-column bg-white text-dark p-5`}
      >
        {/* 
        bootstrap tidak bisa lakukan mw-50 atau w-lg-50, jadi saya prefer tailwind untuk kedepannya jika ada development
        */}

        <h4>Nama</h4>
        {data.nama}
        <h4>Email</h4>
        {data.email}
        <h4>Lapangan</h4>
        {data.lapangan}
        <h4>Tanggal</h4>
        {data.tanggal}
        <h4>Waktu</h4>
        {data.jam}
        <div className="">
          <h4>Total Harga :</h4>
          Rp. {rupiah}
          {valid ? (
            <p className={`text-${valid.color} d-flex gap-2`}>
              {valid.message}{" "}
              {discount === 0 ? null : (
                <span className={`text-${valid.color}`}>{discount}% Off !</span>
              )}
            </p>
          ) : null}
        </div>
        <h6>Insert coupon </h6>
        <div className="d-flex align-items-center mb-3 gap-2">
          <Input
            onChange={(e) => setCoupon(e.currentTarget.value)}
            type="text"
            id="coupon"
            value={coupon}
          />
          <Button color={"secondary"} onClick={checkKupon} type="button">
            Check
          </Button>
        </div>

        <Button color={"secondary"} type="button" onClick={toggleBooking}>
          Confirm Booking
        </Button>

        {/* 
        Action confirm booking sementara dikarenakan belum ada API method post untuk lempar ke database, dan juga validasi jika waktu, lapangan sudah di ambil setelah validasi pertama
        (validasi pertama dari frontend dan jika memang ada user pada waktu yang sama telah membooking, dengan premis kedua user sudah dalam form konfirmasi booking maka, ada fungsi untuk mengecheck apakah lapangan masih tersedia atau tidak, setelah button confirm di click)
         */}
      </form>
    </div>
  );
};

export default Book;
