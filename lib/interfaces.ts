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

export interface FieldsProps {
  nama: string;
  image: string;
  idx: number | string;
  status: boolean;
  cabang?: string;
}

export interface LapanganProps {
  cabang: string;
  fields: FieldsProps[];
}

export interface DataLapangan {
  data: LapanganProps[];
}

export interface SelectProps {
  name: string;
  id: string;
  data: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
