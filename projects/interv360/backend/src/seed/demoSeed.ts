import type { DemoRequest, DemoRequestDetail } from "../domain/types.js";

function baseReadonlyBlocks(): DemoRequestDetail["readonlyBlocks"] {
  return {
    qualification: {
      summary: "Contexte confirmé, intervention nécessaire.",
      checklist: [
        "Contexte de panne confirmé",
        "Impact démonstration identifié",
        "Intervention nécessaire",
      ],
      notes: "Qualification fictive préparée pour démonstration readonly.",
    },
    planning: {
      slot: "J+1 matin",
      technician: "Technicien Démo 01",
      notes: "Créneau fictif proposé pour démonstration readonly.",
    },
    intervention: {
      location: "Zone Démo Atelier",
      window: "J+1 matin",
      notes: "Intervention fictive préparée pour démonstration readonly.",
      safetyChecklist: [
        "Accès site fictif confirmé",
        "Consignes de démonstration prises en compte",
      ],
    },
    report: {
      summary: "Contrôle effectué sur scénario de démonstration.",
      result: "Remise en service fictive confirmée.",
      notes: "Compte rendu fictif préparé pour démonstration readonly.",
      checklist: ["Diagnostic démo consulté", "Résultat fictif renseigné"],
    },
  };
}

export const demoRequestsSeed: DemoRequest[] = [
  {
    id: "SAV-DEMO-001",
    title: "Machine client en panne intermittente",
    status: "STAT-01",
    priority: "high",
    criticality: "urgent",
    customerLabel: "Client Démo Industrie",
    siteLabel: "Lyon Démo",
    assignedTechnicianLabel: "Technicien Démo 01",
    createdAt: "2026-03-12T07:30:00.000Z",
    updatedAt: "2026-03-12T07:30:00.000Z",
    detailId: "SAV-DEMO-001",
    isDemo: true,
  },
  {
    id: "SAV-DEMO-002",
    title: "Capteur pression signal défectueux",
    status: "STAT-02",
    priority: "medium",
    criticality: "sensitive",
    customerLabel: "Client Démo Services",
    siteLabel: "Paris Démo",
    assignedTechnicianLabel: "Technicien Démo 01",
    createdAt: "2026-03-10T13:15:00.000Z",
    updatedAt: "2026-03-10T13:15:00.000Z",
    detailId: "SAV-DEMO-002",
    isDemo: true,
  },
  {
    id: "SAV-DEMO-003",
    title: "Maintenance préventive terminée",
    status: "STAT-06",
    priority: "low",
    criticality: "standard",
    customerLabel: "Client Démo Maintenance",
    siteLabel: "Nantes Démo",
    assignedTechnicianLabel: "Technicien Démo 01",
    createdAt: "2026-03-05T10:00:00.000Z",
    updatedAt: "2026-03-05T10:00:00.000Z",
    detailId: "SAV-DEMO-003",
    isDemo: true,
  },
];

export const demoDetailsSeed: DemoRequestDetail[] = [
  {
    id: "SAV-DEMO-001",
    requestId: "SAV-DEMO-001",
    category: "Panne machine",
    channel: "Portail démo",
    impact: "Production démo limitée",
    requestedDate: "2026-01-12T09:00:00.000Z",
    equipmentLabel: "Ligne d'assemblage démo — poste 3",
    businessImpact: "Interruption d'un flux de production fictif planifié",
    demoCenter: "Centre démo Nord",
    description:
      "Panne intermittente constatée sur une machine de démonstration.",
    readonlyBlocks: baseReadonlyBlocks(),
  },
  {
    id: "SAV-DEMO-002",
    requestId: "SAV-DEMO-002",
    category: "Maintenance préventive",
    channel: "Téléphone démo",
    impact: "Confort opérationnel démo",
    requestedDate: "2026-01-10T14:30:00.000Z",
    equipmentLabel: "Capteur pression — zone démo atelier",
    businessImpact: "Surveillance opérationnelle démo dégradée",
    demoCenter: "Centre démo Sud",
    description: "Signal erratique sur capteur de démonstration.",
    readonlyBlocks: {
      ...baseReadonlyBlocks(),
      qualification: {
        summary: "Qualification fictive déjà validée.",
        checklist: ["Contexte de panne confirmé"],
        notes:
          "Demande fictive en planification pour démonstration multi-demandes.",
      },
      planning: {
        slot: "J+2 après-midi",
        technician: "Technicien Démo 01",
        notes: "Créneau fictif proposé pour démonstration readonly.",
      },
    },
  },
  {
    id: "SAV-DEMO-003",
    requestId: "SAV-DEMO-003",
    category: "Suivi post-intervention",
    channel: "Canal démo interne",
    impact: "Aucun impact critique démo",
    requestedDate: "2026-01-05T08:00:00.000Z",
    equipmentLabel: "Unité de maintenance préventive démo",
    businessImpact: "Clôture fictive sans impact métier résiduel",
    demoCenter: "Centre démo Est",
    description: "Maintenance fictive déjà clôturée pour variété de statuts.",
    readonlyBlocks: {
      ...baseReadonlyBlocks(),
      qualification: {
        summary: "Qualification fictive archivée.",
        checklist: [],
        notes: "Qualification fictive archivée.",
      },
      report: {
        summary: "Maintenance préventive fictive terminée.",
        result: "Équipement démo remis en service.",
        notes:
          "Demande fictive clôturée pour démonstration multi-demandes.",
        checklist: [
          "Contrôle démo effectué",
          "Résultat fictif archivé",
          "Clôture fictive enregistrée",
        ],
      },
    },
  },
];
