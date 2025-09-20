import { Candidate } from '../types';

type AllCandidates = {
  [categorySlug: string]: Candidate[];
};

export const allCandidates: AllCandidates = {
  bem: [
    { id: 'bem-filkom', name: 'BEM Fakultas Ilmu Komputer' },
    { id: 'bem-fh', name: 'BEM Fakultas Hukum' },
    { id: 'bem-fk', name: 'BEM Fakultas Kedokteran' },
    { id: 'bem-fp', name: 'BEM Fakultas Pertanian' },
    { id: 'bem-ft', name: 'BEM Fakultas Teknik' },
    { id: 'bem-fib', name: 'BEM Fakultas Ilmu Budaya' },
  ],
  hima: [
    { id: 'hima-ti', name: 'HIMATI (Teknik Informatika)' },
    { id: 'hima-si', name: 'HIMASIERA (Sistem Informasi)' },
    { id: 'hima-tekkim', name: 'HIMATEKKIM (Teknik Kimia)' },
    { id: 'hima-mesin', name: 'HMM (Mesin)' },
  ],
  dpm: [
    { id: 'dpm-filkom', name: 'DPM Fakultas Ilmu Komputer' },
    { id: 'dpm-feb', name: 'DPM Fakultas Ekonomi & Bisnis' },
    { id: 'dpm-fia', name: 'DPM Fakultas Ilmu Administrasi' },
  ],
  ukm: [
    { id: 'ukm-pramuka', name: 'UKM Pramuka' },
    { id: 'ukm-band', name: 'UKM Band' },
    { id: 'ukm-e-sport', name: 'UKM E-Sport' },
    { id: 'ukm-voli', name: 'UKM Bola Voli' },
    { id: 'ukm-badminton', name: 'UKM Badminton' },
  ],
};