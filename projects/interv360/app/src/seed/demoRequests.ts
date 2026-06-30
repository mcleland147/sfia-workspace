import type { DemoRequest } from "../domain/requestStatus";

export const demoRequests: DemoRequest[] = [
  {
    id: "SAV-DEMO-001",
    title: "Machine client en panne intermittente",
    customerLabel: "Client Démo Industrie",
    siteLabel: "Lyon Démo",
    status: "STAT-01",
    assignedTechnicianLabel: "Technicien Démo 01",
    description:
      "Panne intermittente constatée sur une machine de démonstration.",
    priorityLabel: "Priorité démo",
    createdAtLabel: "J-2",
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
  },
];
