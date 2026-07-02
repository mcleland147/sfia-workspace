import type { DemoRequest } from "../domain/requestStatus";

export const DEFAULT_SELECTED_REQUEST_ID = "SAV-DEMO-001";

function baseReadonlyFields(
  overrides: Partial<DemoRequest> = {},
): Pick<
  DemoRequest,
  | "qualificationSummary"
  | "qualificationChecklist"
  | "qualificationReadonlyNotes"
  | "planningSlotLabel"
  | "planningTechnicianLabel"
  | "planningReadonlyNotes"
  | "interventionLocationLabel"
  | "interventionWindowLabel"
  | "interventionReadonlyNotes"
  | "interventionSafetyChecklist"
  | "reportSummaryLabel"
  | "reportResultLabel"
  | "reportReadonlyNotes"
  | "reportChecklist"
> {
  return {
    qualificationSummary: "Contexte confirmé, intervention nécessaire.",
    qualificationChecklist: [
      "Contexte de panne confirmé",
      "Impact démonstration identifié",
      "Intervention nécessaire",
    ],
    qualificationReadonlyNotes:
      "Qualification fictive préparée pour démonstration readonly.",
    planningSlotLabel: "J+1 matin",
    planningTechnicianLabel: "Technicien Démo 01",
    planningReadonlyNotes:
      "Créneau fictif proposé pour démonstration readonly.",
    interventionLocationLabel: "Zone Démo Atelier",
    interventionWindowLabel: "J+1 matin",
    interventionReadonlyNotes:
      "Intervention fictive préparée pour démonstration readonly.",
    interventionSafetyChecklist: [
      "Accès site fictif confirmé",
      "Consignes de démonstration prises en compte",
      "Matériel de diagnostic démo prévu",
    ],
    reportSummaryLabel: "Contrôle effectué sur scénario de démonstration.",
    reportResultLabel: "Remise en service fictive confirmée.",
    reportReadonlyNotes:
      "Compte rendu fictif préparé pour démonstration readonly.",
    reportChecklist: [
      "Diagnostic démo consulté",
      "Résultat fictif renseigné",
      "Clôture non active dans ce cycle",
    ],
    ...overrides,
  };
}

export const demoRequests: DemoRequest[] = [
  {
    id: "SAV-DEMO-001",
    title: "Machine client en panne intermittente",
    customerLabel: "Client Démo Industrie",
    siteLabel: "Lyon Démo",
    status: "STAT-01",
    priority: "high",
    criticality: "urgent",
    categoryLabel: "Panne machine",
    channelLabel: "Portail démo",
    impactLabel: "Production démo limitée",
    requestedDate: "12/01/2026",
    equipmentLabel: "Système de visioconférence salle A",
    businessImpact: "Interruption d'un usage pédagogique planifié",
    siteDetailLabel: "Centre démo Nord",
    assignedTechnicianLabel: "Technicien Démo 01",
    description:
      "Panne intermittente constatée sur une machine de démonstration.",
    createdAtLabel: "12/03/2026 — 08:30 (fictif)",
    ...baseReadonlyFields(),
  },
  {
    id: "SAV-DEMO-002",
    title: "Capteur pression signal défectueux",
    customerLabel: "Client Démo Logistique",
    siteLabel: "Nantes Démo",
    status: "STAT-03",
    priority: "medium",
    criticality: "sensitive",
    categoryLabel: "Maintenance préventive",
    channelLabel: "Téléphone démo",
    impactLabel: "Confort opérationnel démo",
    requestedDate: "10/01/2026",
    equipmentLabel: "Capteur pression — zone démo atelier",
    businessImpact: "Surveillance opérationnelle démo dégradée",
    siteDetailLabel: "Centre démo Sud",
    assignedTechnicianLabel: "Technicien Démo 02",
    description: "Signal erratique sur capteur de démonstration.",
    createdAtLabel: "10/03/2026 — 14:15 (fictif)",
    ...baseReadonlyFields({
      qualificationSummary: "Qualification fictive déjà validée.",
      qualificationReadonlyNotes:
        "Demande fictive en cours de traitement pour démonstration multi-demandes.",
      planningSlotLabel: "J+2 après-midi",
      planningTechnicianLabel: "Technicien Démo 02",
    }),
  },
  {
    id: "SAV-DEMO-003",
    title: "Maintenance préventive terminée",
    customerLabel: "Client Démo Services",
    siteLabel: "Bordeaux Démo",
    status: "STAT-06",
    priority: "low",
    criticality: "standard",
    categoryLabel: "Suivi post-intervention",
    channelLabel: "Canal démo interne",
    impactLabel: "Aucun impact critique démo",
    requestedDate: "05/01/2026",
    equipmentLabel: "Unité de maintenance préventive démo",
    businessImpact: "Clôture fictive sans impact métier résiduel",
    siteDetailLabel: "Centre démo Est",
    assignedTechnicianLabel: "Technicien Démo 03",
    description: "Maintenance fictive déjà clôturée pour variété de statuts.",
    createdAtLabel: "05/03/2026 — 11:00 (fictif)",
    ...baseReadonlyFields({
      qualificationSummary: "Qualification fictive archivée.",
      reportSummaryLabel: "Maintenance préventive fictive terminée.",
      reportResultLabel: "Équipement démo remis en service.",
      reportReadonlyNotes:
        "Demande fictive clôturée pour démonstration multi-demandes.",
      reportChecklist: [
        "Contrôle démo effectué",
        "Résultat fictif archivé",
        "Clôture fictive enregistrée",
      ],
    }),
  },
];
