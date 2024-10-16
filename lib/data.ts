import { Booking, Kupon } from "./interfaces";

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
  {
    lapangan: "Lapangan 1",
    price: 2000000,
  },
  {
    lapangan: "Lapangan 2",
    price: 2500000,
  },
  {
    lapangan: "Lapangan 3",
    price: 1500000,
  },
  {
    lapangan: "Lapangan 4",
    price: 1800000,
  },
];
