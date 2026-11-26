/**
 * ML5 E02 — indicative cognitive guidance matrix (NOT runtime routing).
 * CF-allocation.md §4.1–4.5 — 51 elementary work rows; Nora may depart when context warrants.
 */

import {
  COGNITIVE_RESOURCE_CATALOG,
  type CognitiveEffort,
  type CognitiveModelFamily,
} from "./resource-catalog";

export const COGNITIVE_REFERENTIAL_VERSION =
  "ml5-cognitive-referential-v1-cf-allocation-2026-11-26" as const;

export const COGNITIVE_REFERENTIAL_ROW_COUNT = 51 as const;

export type CognitiveReferentialSection = "4.1" | "4.2" | "4.3" | "4.4" | "4.5";

export type CognitiveGuidanceRow = {
  id: string;
  section: CognitiveReferentialSection;
  /** Travail élémentaire — stable functional label from contract. */
  elementaire: string;
  preferenceFamily: CognitiveModelFamily;
  preferenceEffort: CognitiveEffort;
  /** Qualité attendue / signal d'escalade (guidance only). */
  qualityAndEscalade: string;
};

const ROWS: readonly CognitiveGuidanceRow[] = [
  // §4.1 Compréhension, conversation et organisation
  {
    id: "cog-4.1-01",
    section: "4.1",
    elementaire: "Salutation ou réponse factuelle déjà acquise",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade:
      "Réponse exacte sans orchestration ; ambiguïté utile → Luna M",
  },
  {
    id: "cog-4.1-02",
    section: "4.1",
    elementaire: "Reformuler une demande claire",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade:
      "Fidélité et conservation des contraintes ; plusieurs intentions → Terra M",
  },
  {
    id: "cog-4.1-03",
    section: "4.1",
    elementaire: "Extraire paramètres explicitement fournis",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Exhaustivité, pas d'invention ; ambiguïté déterminante → Terra M",
  },
  {
    id: "cog-4.1-04",
    section: "4.1",
    elementaire: "Qualification simple à partir du contexte",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Objectif, contraintes et résultat corrects ; incertitude conséquente → Terra M",
  },
  {
    id: "cog-4.1-05",
    section: "4.1",
    elementaire: "Qualification multi-intentions, dépendances courantes",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Intentions distinctes, ordre et droits ; contradiction structurante → Sol M",
  },
  {
    id: "cog-4.1-06",
    section: "4.1",
    elementaire: "Qualification d'une demande critique/ambiguë à fort impact",
    preferenceFamily: "sol",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Ambiguïtés et risques essentiels identifiés ; difficulté persistante → Sol H",
  },
  {
    id: "cog-4.1-07",
    section: "4.1",
    elementaire: "Construire plan d'investigation ciblé",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Questions déterminantes et sources pertinentes ; dépendances complexes → Sol M",
  },
  {
    id: "cog-4.1-08",
    section: "4.1",
    elementaire: "Identifier manque d'information et demander clarification",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Question utile, ne pas redemander l'acquis ; ambiguïté à fort risque → Sol M",
  },
  {
    id: "cog-4.1-09",
    section: "4.1",
    elementaire: "Restituer un résultat déjà qualifié",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Pas de perte de réserve ni changement de sens ; synthèse nouvelle → Terra M",
  },
  // §4.2 Documentation, connaissance et Git
  {
    id: "cog-4.2-01",
    section: "4.2",
    elementaire: "Inventorier un périmètre de fichiers connu",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade:
      "Couverture et références ; périmètre sémantique incertain → Terra M",
  },
  {
    id: "cog-4.2-02",
    section: "4.2",
    elementaire: "Rechercher une référence ou passage connu",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade: "Référence exacte ; ambiguïté d'identité → Luna M",
  },
  {
    id: "cog-4.2-03",
    section: "4.2",
    elementaire: "Lire une source et extraire faits explicites",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Citations, versions, distinction fait/hypothèse ; interprétation → Terra M",
  },
  {
    id: "cog-4.2-04",
    section: "4.2",
    elementaire: "Identifier une version/branche applicable à partir de règles connues",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Référence exacte ; hiérarchie conflictuelle → Terra H",
  },
  {
    id: "cog-4.2-05",
    section: "4.2",
    elementaire: "Extraire contraintes d'un corpus cohérent",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Couverture, pas de faux CONSULTED ; contraintes interdépendantes → Terra M",
  },
  {
    id: "cog-4.2-06",
    section: "4.2",
    elementaire: "Synthétiser plusieurs documents cohérents",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Fidélité, références, pas d'omission ; complexité transverse → Terra H",
  },
  {
    id: "cog-4.2-07",
    section: "4.2",
    elementaire: "Confronter versions ou exigences contradictoires",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Contradictions substantielles et provenance ; contradiction structurante → Sol H",
  },
  {
    id: "cog-4.2-08",
    section: "4.2",
    elementaire: "Reconstruire une trajectoire multi-sources",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade: "Historique et états distincts ; arbitrage complexe → Sol M",
  },
  {
    id: "cog-4.2-09",
    section: "4.2",
    elementaire: "Réconcilier vision, décisions, spécifications et réalité",
    preferenceFamily: "sol",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Impacts, autorité, limites probatoires ; effort supérieur seulement si utile",
  },
  {
    id: "cog-4.2-10",
    section: "4.2",
    elementaire: "Capitaliser une connaissance explicitement établie",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Provenance, portée et statut conservés ; qualification nouvelle → Terra M",
  },
  // §4.3 Recherche WEB
  {
    id: "cog-4.3-01",
    section: "4.3",
    elementaire: "Retrouver une information publique précise",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade: "Résultat source-backed ; recherche ambiguë → Luna M",
  },
  {
    id: "cog-4.3-02",
    section: "4.3",
    elementaire: "Sélectionner une documentation officielle applicable",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Date/version/éditeur corrects ; variantes conflictuelles → Terra M",
  },
  {
    id: "cog-4.3-03",
    section: "4.3",
    elementaire: "Extraire des faits d'une page réellement lue",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Citation et couverture honnêtes ; interprétation spécialisée → Terra M",
  },
  {
    id: "cog-4.3-04",
    section: "4.3",
    elementaire: "Inventorier caractéristiques de plusieurs solutions",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Données comparables, inconnues visibles ; comparaison contextualisée → Terra M",
  },
  {
    id: "cog-4.3-05",
    section: "4.3",
    elementaire: "Comparer solutions selon critères explicites",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Critères, compromis, limites ; forte interdépendance → Terra H",
  },
  {
    id: "cog-4.3-06",
    section: "4.3",
    elementaire: "Vérifier fraîcheur/applicabilité face à divergences",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Confrontation dates, versions et sources ; contradiction critique → Sol H",
  },
  {
    id: "cog-4.3-07",
    section: "4.3",
    elementaire:
      "Évaluer compatibilité d'une solution externe avec architecture privée",
    preferenceFamily: "sol",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Raisonnement intégré dans D3 sans fuite ; interdépendances non résolues → Sol H",
  },
  {
    id: "cog-4.3-08",
    section: "4.3",
    elementaire: "Résoudre contradiction WEB déterminante pour un contrat critique",
    preferenceFamily: "sol",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Justification sourcée, incertitude explicite ; aucun effort ne remplace source manquante",
  },
  {
    id: "cog-4.3-09",
    section: "4.3",
    elementaire: "Reformuler une recherche en termes publics",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Utiliser uniquement données admises ; si provenance incertaine → refus/reformulation/autorisation, pas escalade de modèle comme barrière",
  },
  // §4.4 Code, architecture et contrat de réalisation
  {
    id: "cog-4.4-01",
    section: "4.4",
    elementaire: "Repérer chemins/symboles pertinents",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Identités réelles ; responsabilité non évidente → Terra M",
  },
  {
    id: "cog-4.4-02",
    section: "4.4",
    elementaire: "Comprendre une fonction isolée",
    preferenceFamily: "terra",
    preferenceEffort: "low",
    qualityAndEscalade: "Entrées/sorties/erreurs ; dépendances → Terra M",
  },
  {
    id: "cog-4.4-03",
    section: "4.4",
    elementaire: "Reconstituer un flux applicatif",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Étapes, propriétaires et contrats ; concurrence → Terra H",
  },
  {
    id: "cog-4.4-04",
    section: "4.4",
    elementaire: "Identifier blast radius local",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade: "Impacts et tests ; dépendances transverses → Terra H",
  },
  {
    id: "cog-4.4-05",
    section: "4.4",
    elementaire: "Analyser tests et assertions existants",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade: "Preuve vs déclaration ; oracle ambigu → Terra H",
  },
  {
    id: "cog-4.4-06",
    section: "4.4",
    elementaire: "Comparer code et conception",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade: "Écart exact, preuve et portée ; contradiction critique → Sol H",
  },
  {
    id: "cog-4.4-07",
    section: "4.4",
    elementaire: "Diagnostiquer anomalie systémique/concurrence",
    preferenceFamily: "sol",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Causes étayées, alternatives, invariants ; ne pas inventer de preuve",
  },
  {
    id: "cog-4.4-08",
    section: "4.4",
    elementaire: "Concevoir une évolution locale stabilisée",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade: "Contrat, erreurs, reprise, tests ; pivot structurant → Sol H",
  },
  {
    id: "cog-4.4-09",
    section: "4.4",
    elementaire: "Préparer contrat Cursor sur conception stabilisée",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Instruction complète, sources, IN/OUT, gates ; arbitrage critique → Sol H",
  },
  {
    id: "cog-4.4-10",
    section: "4.4",
    elementaire: "Examiner sécurité/autorité/persistance d'un contrat critique",
    preferenceFamily: "sol",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Invariants, permissions, concurrence ; contradiction résiduelle → Sol H",
  },
  {
    id: "cog-4.4-11",
    section: "4.4",
    elementaire: "Mettre en forme un contrat déjà qualifié",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Préserver intégralité et sémantique ; changement de fond → Terra H",
  },
  // §4.5 Production, pilotage et opérations internes
  {
    id: "cog-4.5-01",
    section: "4.5",
    elementaire: "Correction rédactionnelle ou formatage",
    preferenceFamily: "luna",
    preferenceEffort: "low",
    qualityAndEscalade: "Aucune modification non demandée ; ambiguïté → Luna M",
  },
  {
    id: "cog-4.5-02",
    section: "4.5",
    elementaire: "Révision ciblée de faits déjà qualifiés",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Diff exact, reste préservé ; conséquences croisées → Terra M",
  },
  {
    id: "cog-4.5-03",
    section: "4.5",
    elementaire: "Rédiger à partir d'acquis consolidés",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Exhaustivité et citations ; synthèse analytique nouvelle → Terra M",
  },
  {
    id: "cog-4.5-04",
    section: "4.5",
    elementaire: "Produire une conception fonctionnelle",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Cohérence, cas négatifs, qualité ; arbitrage structurant → Sol H",
  },
  {
    id: "cog-4.5-05",
    section: "4.5",
    elementaire: "Résumer un avancement technique factuel",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Statuts et provenance exacts ; divergences → Terra M",
  },
  {
    id: "cog-4.5-06",
    section: "4.5",
    elementaire: "Proposer mise à jour de trajectoire",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Dépendances, état, suite ; risque de promotion ou contradiction critique → Sol M",
  },
  {
    id: "cog-4.5-07",
    section: "4.5",
    elementaire: "Préparer un arbitrage et ses options",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Options, impacts, réserves ; choix architecture/sécurité complexe → Sol H",
  },
  {
    id: "cog-4.5-08",
    section: "4.5",
    elementaire: "Analyser dossier de réalisation Cursor",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade: "Critères, preuves, lacunes ; contradiction critique → Sol H",
  },
  {
    id: "cog-4.5-09",
    section: "4.5",
    elementaire: "Consolider une restitution déjà analysée",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade:
      "Avis consultatif intact et réserves visibles ; analyse nouvelle → Terra M",
  },
  {
    id: "cog-4.5-10",
    section: "4.5",
    elementaire: "Contrôler continuité d'une production/reprise",
    preferenceFamily: "terra",
    preferenceEffort: "medium",
    qualityAndEscalade: "Version, acquis, autorité ; incohérence structurelle → Sol M",
  },
  {
    id: "cog-4.5-11",
    section: "4.5",
    elementaire: "Extraire métadonnées d'observabilité et expliquer un coût",
    preferenceFamily: "luna",
    preferenceEffort: "medium",
    qualityAndEscalade: "Mesures exactes et UNKNOWN ; diagnostic multi-causes → Terra M",
  },
  {
    id: "cog-4.5-12",
    section: "4.5",
    elementaire: "Comparer politiques cognitives sur corpus qualifié",
    preferenceFamily: "terra",
    preferenceEffort: "high",
    qualityAndEscalade:
      "Qualité/coût/latence comparables ; biais ou résultats ambigus → Sol M",
  },
];

const BY_ID = new Map<string, CognitiveGuidanceRow>(
  ROWS.map((row) => [row.id, row]),
);

export const COGNITIVE_GUIDANCE_ROWS: readonly CognitiveGuidanceRow[] = ROWS;

export function getCognitiveGuidanceById(
  id: string,
): CognitiveGuidanceRow | undefined {
  return BY_ID.get(id);
}

/** Compact lines for optional Nora / conductor context (guidance only). */
export function buildCognitiveReferentialCompactSummary(): readonly string[] {
  return ROWS.map(
    (r) =>
      `${r.id}|${r.section}|${r.elementaire}|${r.preferenceFamily} ${r.preferenceEffort}|${r.qualityAndEscalade}`,
  );
}

export const COGNITIVE_REFERENTIAL_COMPACT_SUMMARY =
  buildCognitiveReferentialCompactSummary();

/** Max injected catalog blurb (chars) — full matrix is never inlined in prompts. */
export const COGNITIVE_GUIDANCE_CATALOG_BLURB_MAX_CHARS = 2_400 as const;

/**
 * Short Nora-facing catalog + constraints (not the 51-row matrix).
 * Detailed per-row guidance: server referential by id; compact lines on demand only.
 */
export function buildCognitiveGuidanceCatalogBlurb(): string {
  const models = COGNITIVE_RESOURCE_CATALOG.map((e) => {
    const band =
      e.modelId === "gpt-6.2-sol"
        ? "efforts opérationnels admis: low|medium|high (pré-calibration)"
        : "candidat documenté — admission opérationnelle après calibration Morris";
    return `- ${e.modelId} (${e.family}): ${e.positioning}; ${band}.`;
  }).join("\n");
  return [
    "RESSOURCES COGNITIVES (indicatif — Studio tranche réellement l'admission) :",
    models,
    `- Référentiel élémentaire : ${COGNITIVE_REFERENTIAL_ROW_COUNT} lignes CF §4.1–4.5 (guidance seulement, pas un moteur de routage).`,
    "- Tu peux t'en inspirer pour cognitiveProfileHint / effort; Nora peut s'écarter si le contexte l'exige.",
    "- Ne demande pas la matrice complète dans replyDraft : pour une ligne, appelle l'outil consult_cognitive_guidance(guidanceId) ; pour l'index compact, consult_cognitive_guidance(compactIndex=true).",
    "- Défaut opérationnel pré-calibration : Sol medium si le couple proposé n'est pas admis.",
  ].join("\n");
}