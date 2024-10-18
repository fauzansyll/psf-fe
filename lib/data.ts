import { Booking, Kupon, LapanganProps } from "./interfaces";

export const dataKupon: Kupon[] = [
  {
    code: "kupon01",
    nama: "kupon1",
    start: "2024-10-01",
    end: "2024-10-30",
    lapangan: "lapangan 1",
    jam: "08:00-10:00",
    potongan: "10%",
  },
  {
    code: "kupon02",
    nama: "kupon2",
    start: "2024-10-01",
    end: "2024-10-30",
    lapangan: "lapangan 1",
    jam: "06:00-08:00",
    potongan: "10%",
  },
  {
    code: "kupon03",
    nama: "kupon3",
    start: "2024-10-01",
    end: "2024-10-17",
    lapangan: "lapangan 1",
    jam: "06:00-08:00",
    potongan: "10%",
  },
  {
    code: "kupon04",
    nama: "kupon4",
    start: "2024-10-18",
    end: "2024-10-30",
    lapangan: "lapangan 1",
    jam: "06:00-08:00",
    potongan: "10%",
  },
  {
    code: "kupon05",
    nama: "kupon5",
    start: "2024-10-18",
    end: "2024-10-30",
    lapangan: "lapangan 2",
    jam: "06:00-08:00",
    potongan: "10%",
  },
  {
    code: "kupon06",
    nama: "kupon6",
    start: "2024-10-19",
    end: "2024-10-30",
    lapangan: "lapangan 1",
    jam: "06:00-08:00",
    potongan: "10%",
  },
];

export const dataBooking: Booking[] = [
  {
    nama: "Fauzan",
    email: "fauzan@gmail.com",
    team: "Staff IT",
    lapangan: "Lapangan 1",
    tanggal: "18 Oktober 2024",
    jam: "06:00 - 08:00",
    total: 2000000,
    code: "",
  },
];

export const dataLapangan = [
  "Lapangan 1",
  "Lapangan 2",
  "Lapangan 3",
  "Lapangan 4",
];

export const Lapangan: LapanganProps[] = [
  {
    cabang: "Siliwangi",
    fields: [
      {
        idx: 1,
        nama: "Lapangan 1",
        image: "/FOOTBALFIELD.jpg",
        status: false,
      },
      {
        idx: 2,
        nama: "Lapangan 2",
        image: "/FOOTBALFIELD.jpg",
        status: false,
      },
      {
        idx: 3,
        nama: "Lapangan 3",
        image: "/FOOTBALFIELD.jpg",
        status: true,
      },
      {
        idx: 4,
        nama: "Lapangan 4",
        image: "/FOOTBALFIELD.jpg",
        status: true,
      },
    ],
  },
  {
    cabang: "Jakarta",
    fields: [
      {
        idx: 1,
        nama: "Lapangan 1",
        image: "/FOOTBALFIELD.jpg",
        status: false,
      },
      {
        idx: 2,
        nama: "Lapangan 2",
        image: "/FOOTBALFIELD.jpg",
        status: false,
      },
      {
        idx: 3,
        nama: "Lapangan 3",
        image: "/FOOTBALFIELD.jpg",
        status: true,
      },
      {
        idx: 4,
        nama: "Lapangan 4",
        image: "/FOOTBALFIELD.jpg",
        status: false,
      },
    ],
  },
];
