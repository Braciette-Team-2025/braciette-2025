import { Category } from '../types';

export const dummyData: Category[] = [
  {
    id: 'terfavorit',
    name: 'TERFAVORIT',
    leaderboard: [
      { rank: 1, organization: { id: 'org-a', name: 'BEM Fakultas Ilmu Komputer', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 2, organization: { id: 'org-b', name: 'BEM Fakultas Ilmu Budaya', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 3, organization: { id: 'org-c', name: 'BEM Fakultas Hukum', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 4, organization: { id: 'org-d', name: 'BEM Fakultas Perikanan dan ilmu Kelautan', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 5, organization: { id: 'org-e', name: 'BEM Fakultas Ekonomi dan Bisnis', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 6, organization: { id: 'org-f', name: 'BEM Fakultas Teknologi Pertanian', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 7, organization: { id: 'org-g', name: 'BEM Fakultas Peternakan', logoUrl: '/landing-page/org-placeholder.svg' } },
    ],
  },
  {
    id: 'berprestasi',
    name: 'BERPRESTASI',
    leaderboard: [
      { rank: 1, organization: { id: 'org-h', name: 'Himpunan Mahasiswa Elektro', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 2, organization: { id: 'org-i', name: 'UKM Robotika', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 3, organization: { id: 'org-j', name: 'BEM Fakultas Teknik', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 4, organization: { id: 'org-k', name: 'BEM Fakultas Ilmu Komputer', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 5, organization: { id: 'org-l', name: 'DPM Fakultas Hukum', logoUrl: '/landing-page/org-placeholder.svg' } },
    ],
  },
  {
    id: 'underrated',
    name: 'UNDERRATED',
    leaderboard: [
      { rank: 1, organization: { id: 'org-m', name: 'UKM Pecinta Alam', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 2, organization: { id: 'org-n', name: 'UKM Teater', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 3, organization: { id: 'org-o', name: 'BEM Fakultas Ilmu Budaya', logoUrl: '/landing-page/org-placeholder.svg' } },
      { rank: 4, organization: { id: 'org-p', name: 'Komunitas Film', logoUrl: '/landing-page/org-placeholder.svg' } },
    ],
  },
];