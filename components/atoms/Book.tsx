"use client";

import React, { useEffect, useState } from "react";

import { Booking, Kupon } from "@/lib/interfaces";
import Input from "./Input";
import { dataBooking, dataKupon } from "@/lib/data";
import Button from "./Button";
import { useGlobalContext } from "@/app/page";
import { useScrollBlock } from "@/lib/useScroll";

const Book = () => {
  const [blockScroll, allowScroll] = useScrollBlock();
  const { isBook, setIsBook } = useGlobalContext();
  const [coupon, setCoupon] = useState("");
  const [data, setData] = useState(dataBooking[0]);
  const [originalTotal] = useState(dataBooking[0].total);
  const [valid, setValid] = useState(false);
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
    const kupon = dataKupon.find((kupon) =>
      isBookingValidForKupon(data, kupon)
    );

    if (kupon) {
      const discount = parseFloat(kupon.potongan) / 100;
      const newTotal = originalTotal - originalTotal * discount;
      setTotal(newTotal);
      setData({ ...data, code: coupon });
      setValid(true);
    } else {
      setTotal(originalTotal);
      setValid(false);
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
    <div className="position-absolute d-flex flex-column justify-content-center align-items-center w-100 top-0 start-0 end-0 bottom-0 ">
      <h1 onClick={toggleBooking}>Close</h1>
      <form className="mx-auto rounded gap-2 d-flex flex-column bg-white text-dark p-5 w-50">
        <h4>Nama</h4>
        {data.nama_pelamar}
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
          {valid && <p className="text-success">Code is Valid !</p>}
        </div>
        <h5>Insert your coupon for discount</h5>
        <div className="d-flex align-items-center mb-3 gap-2">
          <Input
            onChange={(e) => setCoupon(e.currentTarget.value)}
            type="text"
          />
          <Button onClick={checkKupon} type="button">
            Check
          </Button>
        </div>
        {/* 
        Action confirm booking sementara dikarenakan belum ada API method post untuk lempar ke database, dan juga validasi jika waktu, lapangan sudah di ambil setelah validasi pertama
        (validasi pertama dari frontend dan jika memang ada user pada waktu yang sama telah membooking, dengan premis kedua user sudah dalam form konfirmasi booking maka, ada fungsi untuk mengecheck apakah lapangan masih tersedia atau tidak, setelah button confirm di click)
         */}
        <Button type="submit" onClick={toggleBooking}>
          Confirm Booking
        </Button>
      </form>
    </div>
  );
};

export default Book;
