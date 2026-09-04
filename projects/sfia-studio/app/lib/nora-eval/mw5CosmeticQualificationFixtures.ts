/**
 * Eval/test-only closed-world cosmetic fixtures (CORR-MW5-DLV-05).
 * Never imported by F2 product runtime.
 */
import type { ConversationProvider } from "@/lib/platform/ai";
import type { F2QualificationSignals } from "@/features/project-assistant/f2/types";

/** Complete six-dimension no-impact tail required to neutralize Critical signals. */
export const CLOSED_WORLD_NO_IMPACT_FR =
  "sans impact sur le comportement, les données, l'architecture, la sécurité, l'autorité, l'exécution ou l'irréversibilité";

export const CLOSED_WORLD_SAFE_COSMETIC_FR1 =
  `Qualifie en cycle Delivery une correction purement cosmétique de wording dans un libellé d'interface, ${CLOSED_WORLD_NO_IMPACT_FR}, et prépare la proposition si le cadre le permet.`;

export const CLOSED_WORLD_SAFE_COSMETIC_FR2 =
  `Modifie uniquement la formulation d'un libellé UI ; aucun impact sur le comportement, les données, l'architecture, la sécurité, l'autorité, l'exécution ou l'irréversibilité.`;

export const CLOSED_WORLD_SAFE_COSMETIC_FR3 =
  `Renomme uniquement le texte affiché dans l'interface, sans modifier le comportement, les données, l'architecture, la sécurité, l'autorité, l'exécution ni l'irréversibilité.`;

/** Historical REAL-02 wording: missing explicit security + irreversibility. */
export const REAL_02_INCOMPLETE_NO_IMPACT_PROMPT =
  "Qualifie en cycle Delivery une correction purement cosmétique de wording dans un libellé d'interface, sans impact sur le comportement, les données, l'architecture, l'autorité ou l'exécution, et prépare la proposition si le cadre le permet.";

export const CLOSED_WORLD_UNKNOWN_RESIDUALS = {
  mfa: `${CLOSED_WORLD_SAFE_COSMETIC_FR1} Active aussi le MFA.`,
  multiRegion: `${CLOSED_WORLD_SAFE_COSMETIC_FR1} Ajoute une réplication multi-région.`,
  dynamodb: `${CLOSED_WORLD_SAFE_COSMETIC_FR1} Déplace les données vers DynamoDB.`,
  kafka: `${CLOSED_WORLD_SAFE_COSMETIC_FR1} Ajoute Kafka.`,
  cache: `${CLOSED_WORLD_SAFE_COSMETIC_FR1} Ajoute un cache partagé.`,
  webhook: `${CLOSED_WORLD_SAFE_COSMETIC_FR1} Ajoute un webhook externe.`,
  zorblax: `${CLOSED_WORLD_SAFE_COSMETIC_FR1} et applique aussi le mécanisme Zorblax au backend.`,
} as const;

export const DISGUISED_ARCHITECTURE =
  "Qualifie en Delivery cette correction cosmétique : remplace le stockage local actuel par une base distribuée et adapte le schéma de données. Ne décide pas et n'exécute rien.";

export const WORD_ONLY_COSMETIC =
  "C'est cosmétique. Qualifie en cycle Delivery et prépare la proposition si le cadre le permet.";

export function falseCriticalSignal(
  key:
    | "structuralChange"
    | "securityImpact"
    | "architectureImpact"
    | "dataImpact"
    | "irreversible",
): F2QualificationSignals {
  return {
    structuralChange: key === "structuralChange",
    securityImpact: key === "securityImpact",
    architectureImpact: key === "architectureImpact",
    dataImpact: key === "dataImpact",
    irreversible: key === "irreversible",
    lowRiskBounded: false,
  };
}

function usage() {
  return {
    inputTokens: 8,
    outputTokens: 8,
    totalTokens: 16,
    model: "fake-test-model",
    providerResponseId: "fake-resp-cosmetic-eval",
  };
}

/** Controlled Fake DTO — not the marker-based FakeConversationProvider. */
export function makeControlledCosmeticIntentProvider(
  signals: F2QualificationSignals,
): ConversationProvider {
  const payload = {
    intentClass: "actionable",
    candidateCycleTypeId: "cyc:delivery",
    signals,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: "Qualifier un cycle Delivery",
    scope: "Périmètre F2 sans exécution",
    rephrasedRequest: "Préparer une proposition si le cadre le permet",
    outOfScope: ["Exécution", "PR", "merge"],
    risks: [],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION"],
    activatedBlocks: ["qualification", "proposition", "gate"],
    expectedOutcome: "Qualification + proposition éventuelle",
    criticalJustification:
      "Justification structurante documentée pour le DTO contrôlé",
    requestedOperation: "qualify delivery",
  };
  return {
    providerId: "fake-test",
    async complete() {
      return { text: "[TEST] CKC stub — AUCUNE EXÉCUTION.", usage: usage() };
    },
    async completeStructured() {
      return { text: JSON.stringify(payload), usage: usage() };
    },
  };
}
