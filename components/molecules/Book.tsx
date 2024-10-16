"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Booking, Kupon } from "@/lib/interfaces";
import Input from "../atoms/Input";
import { dataBooking, dataKupon, dataLapangan } from "@/lib/data";
import Button from "../atoms/Button";
import { useGlobalContext } from "@/app/page";
import style from "./Book.module.scss";
import Select from "../atoms/Select";

interface FormProps {
  nama: string;
  email: string;
  lapangan: string;
  tanggal: string;
  start: string;
  end: string;
  total: number | undefined;
  code: string;
}

const Book = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormProps>();

  const [theData, setTheData] = useState<FormProps>({
    nama: "",
    email: "",
    lapangan: "",
    tanggal: "",
    start: "",
    end: "",
    total: 2000000,
    code: "",
  });

  // const onSubmit: SubmitHandler<FormProps> = (data) =>
  //   setTheData({
  //     ...theData,
  //     nama: data.nama,
  //     email: data.email,
  //     lapangan: data.lapangan,
  //     tanggal: data.tanggal,
  //     waktu: data.waktu,
  //     code: data.code,
  //     total: harga,
  //   });

  console.log("The Data", theData);

  const { setIsBook } = useGlobalContext();
  const [coupon, setCoupon] = useState("");
  const [data, setData] = useState(dataBooking[0]);

  const [discount, setDiscount] = useState(0);
  const [valid, setValid] = useState({
    message: "",
    color: "",
  });

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

  function isBookingValidForKupon(booking: FormProps, kupon: Kupon): boolean {
    const bookingDate = new Date(booking.tanggal);
    if (!bookingDate) return false;

    const kuponStart = new Date(kupon.start);
    const kuponEnd = new Date(kupon.end);
    const isDateInRange = bookingDate >= kuponStart && bookingDate <= kuponEnd;

    const isCodeValid = kupon.code === coupon;
    const isLapanganMatching =
      booking.lapangan.toLowerCase() === kupon.lapangan.toLowerCase();

    const startBookingTime = booking.start;
    const endBookingTime = booking.end;
    const kuponTime = kupon.jam.split("-")[0];
    const isTimeMatching = startBookingTime === kuponTime;

    if (!isTimeMatching) {
      console.error("Time is not matching");
      console.log("Start Time", startBookingTime);
      console.log("Kupon Time", kuponTime);
      console.log("End  Time", endBookingTime);
      if (!isDateInRange) {
        console.error("Date not in Range");
        console.log("Booking Date", bookingDate);
        console.log("Kupon Start", kuponStart);
        console.log("Kupon End", kuponEnd);
        if (!isLapanganMatching) {
          console.error("Lapangan is not matching");
          console.log("Lapangan Booking", booking.lapangan);
          console.log("Kupon Lapangan", kupon.lapangan);
          if (!isCodeValid) {
            console.error("Code is not matching");
            console.log("Code Kupon", kupon.code);
            console.log("User Coupon", coupon);
          }
        }
      }
      return false;
    }

    return true;
  }

  const checkKupon = () => {
    if (!coupon.trim()) {
      setValid({ ...valid, message: "Kode kupon harus diisi" });
      return;
    }

    const kupon = dataKupon.find((kupon) =>
      isBookingValidForKupon(theData, kupon)
    );

    if (kupon) {
      const discount = parseFloat(kupon.potongan) / 100;
      console.log("kupon", kupon);
      setDiscount(discount * 100);
      const newTotal = originalTotal - originalTotal * discount;
      setPrice(newTotal);
      setTheData({ ...theData, code: coupon, total: newTotal });
      setValid({ message: "Code is valid", color: "success" });
    } else {
      setPrice(originalTotal);
      setValid({ message: "Code is invalid", color: "danger" });
      setTheData({ ...theData, code: "" });
    }
  };

  const toggleBooking = () => {
    setIsBook((prevState) => ({
      ...prevState,
      isBook: !prevState.isBook,
    }));
  };

  const initialPrice = new Intl.NumberFormat().format(dataLapangan[0].price);

  const [selectedLapangan, setSelectedLapangan] = useState(dataLapangan[0]);
  const [price, setPrice] = useState<string | number>(initialPrice);
  const watchLapangan = watch("lapangan");
  const [originalTotal] = useState<any>(initialPrice);

  useEffect(() => {
    const lapangan = dataLapangan.find((l) => l.lapangan === watchLapangan);
    if (lapangan) {
      setSelectedLapangan(lapangan);
      const finalPrice = new Intl.NumberFormat().format(lapangan.price);
      setPrice(finalPrice);
    }
  }, [watchLapangan]);

  const onsubmit: SubmitHandler<FormProps> = (data) => {
    setTheData(data);
    console.log(theData);
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
        onSubmit={handleSubmit(onsubmit)}
      >
        <label htmlFor="nama">Nama</label>
        <Input
          errors={errors}
          id="nama"
          name="nama"
          required={true}
          type="text"
          register={register}
        />
        <label htmlFor="email">Email</label>
        <Input
          errors={errors}
          id="email"
          name="email"
          required={true}
          type="text"
          register={register}
        />
        <label htmlFor="lapangan">Lapangan</label>
        <Select
          name="lapangan"
          id="lapangan"
          data={dataLapangan.map((item) => item.lapangan)}
          register={register}
        />
        <label htmlFor="lapangan">Tanggal</label>
        <Input
          errors={errors}
          id="tanggal"
          required={true}
          name="tanggal"
          type="date"
          register={register}
        />
        <label htmlFor="waktu">Waktu</label>
        <div className="d-flex gap-2">
          <div className="w-100">
            <span>Start</span>
            <Input
              errors={errors}
              id="start"
              required={true}
              name="start"
              type="time"
              register={register}
            />
          </div>
          <div className="w-100">
            <span>End</span>
            <Input
              errors={errors}
              id="end"
              required={true}
              name="end"
              type="time"
              register={register}
            />
          </div>
        </div>
        {/* <h4>Nama</h4>
        {data.nama}
        <h4>Email</h4>
        {data.email}
        <h4>Lapangan</h4>
        {data.lapangan}
        <h4>Tanggal</h4>
        {data.tanggal}
        <h4>Waktu</h4>
        {data.jam} */}

        <span className="">
          <h4>Total Harga :</h4>
          Rp.
          {price}
          {valid ? (
            <p className={`text-${valid.color} d-flex gap-2`}>
              {valid.message} {discount === 0 ? null : `${discount}% Off !`}
            </p>
          ) : null}
        </span>
        <h6>Insert coupon </h6>
        <span className="d-flex align-items-center mb-3 gap-2">
          <Input
            onChange={(e) => setCoupon(e.currentTarget.value)}
            type="text"
            name="coupon"
            errors={errors}
            required={false}
            id="coupon"
            register={register}
          />
          <Button
            color={"secondary"}
            onClick={() => {
              checkKupon(), onsubmit;
            }}
            type="button"
          >
            Check
          </Button>
        </span>

        <Button color={"secondary"} type="submit">
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
