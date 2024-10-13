export type Kupon = {
  code: string;
  nama: string;
  start: string;
  end: string;
  lapangan: string;
  jam: string;
  potongan: string;
};

export type Booking = {
  nama_pelamar: string;
  email: string;
  team: string;
  lapangan: string;
  tanggal: string;
  jam: string;
  total: number;
  code: string;
};
