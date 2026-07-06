export type ChantierStatut = "En cours" | "En pause" | "À démarrer" | "Terminé";

export type ChantierMock = {
  id: string;
  title: string;
  client: string;
  location: string;
  progress: number;
  retardDays?: number;
  accentColor: string;
  tasks: number;
  reserves: number;
  dateLabel: string;
  statut: ChantierStatut;
};

export const heroStats = {
  actifs: 8,
  enRetard: 2,
  tachesOuvertes: 14,
  reservesOuvertes: 6,
};

export const heroSubtitle =
  "2 chantiers en retard · 6 réserves ouvertes · 14 tâches actives";

export const todoItems = [
  { id: "1", label: "Compte rendu à rédiger", accent: "#7c5cff" },
  { id: "2", label: "Réserve à lever en urgence", accent: "#ff6b6b" },
  { id: "3", label: "Valider planning semaine", accent: "#4f8cff" },
  { id: "4", label: "Relancer client Dupont", accent: "#f5c451" },
  { id: "5", label: "Préparer visite chantier", accent: "#3ecf8e" },
];

export const distribution = [
  { label: "En cours", count: 3, color: "#7c5cff", width: "75%" },
  { label: "En pause", count: 1, color: "#ff9f43", width: "25%" },
  { label: "À démarrer", count: 1, color: "#94a3b8", width: "25%" },
  { label: "Terminé", count: 1, color: "#3ecf8e", width: "25%" },
];

export const chantiers: ChantierMock[] = [
  {
    id: "1",
    title: "Rénovation Villa Leblanc",
    client: "M. & Mme Leblanc",
    location: "Villeurbanne, Lyon",
    progress: 65,
    retardDays: 5,
    accentColor: "#7c5cff",
    tasks: 3,
    reserves: 2,
    dateLabel: "18 juin",
    statut: "En cours",
  },
  {
    id: "2",
    title: "Extension Maison Dupont",
    client: "Famille Dupont",
    location: "Caluire, 69",
    progress: 35,
    retardDays: 12,
    accentColor: "#4f8cff",
    tasks: 5,
    reserves: 1,
    dateLabel: "22 juin",
    statut: "En cours",
  },
  {
    id: "3",
    title: "Aménagement Combles Martin",
    client: "SCI Martin",
    location: "Écully",
    progress: 20,
    accentColor: "#3ecf8e",
    tasks: 2,
    reserves: 0,
    dateLabel: "28 juin",
    statut: "À démarrer",
  },
  {
    id: "4",
    title: "Cuisine sur mesure Roux",
    client: "Mme Roux",
    location: "Tassin",
    progress: 80,
    accentColor: "#3ecf8e",
    tasks: 1,
    reserves: 0,
    dateLabel: "15 juin",
    statut: "En cours",
  },
  {
    id: "5",
    title: "Salle de bain Petit",
    client: "M. Petit",
    location: "Lyon 3e",
    progress: 45,
    accentColor: "#f5c451",
    tasks: 4,
    reserves: 2,
    dateLabel: "20 juin",
    statut: "En pause",
  },
  {
    id: "6",
    title: "Terrasse Bois Garnier",
    client: "M. Garnier",
    location: "Vénissieux",
    progress: 55,
    accentColor: "#ff9f43",
    tasks: 2,
    reserves: 1,
    dateLabel: "25 juin",
    statut: "En cours",
  },
];
