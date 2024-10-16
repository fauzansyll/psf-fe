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
  nama: string;
  email: string;
  team: string;
  lapangan: string;
  tanggal: string;
  jam: string;
  total: number;
  code: string;
};

export interface SelectProps {
  name: string;
  id: string;
  register: any;
  data: string[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
