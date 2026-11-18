/**
 * Level-B provider-simulated qualifications — DEV only.
 *
 * These envelopes mimic a structured LIVE finalOutput. They MUST go through
 * `validateNoraTurnQualification` and the real D3 service path
 * (`postUserMessageAndNora` → stash → turnProjection → commit → reload).
 *
 * Distinct from UI-key fixtures (`fixtureSemanticQualify` / STUDIO_FORCE_NORA_FIXTURE).
 * Activated only via `STUDIO_NORA_SIMULATED_PROVIDER=1` + `STUDIO_LANE=DEV`.
 */

import type { NoraTurnQualification } from "./semantic-qualification";

export const NORA_SIM_PROVIDER_MODE = "provider-simulated" as const;

function base(partial: Partial<NoraTurnQualification> & Pick<NoraTurnQualification, "replyDraft">): NoraTurnQualification {
  const goal = partial.goal ?? "Demande Pilote (simulation fournisseur)";
  const defaultIntent = {
    id: "sim-i1",
    capabilityId: "d3.converse" as const,
    mode: "EXPLAIN" as const,
    summary: goal,
    parameters: {},
    constraints: ["NO_EFFECT", "PROVIDER_SIMULATED", "ADAPTER_FAKE"],
    dependsOn: [] as string[],
    sourceEvidence: [] as string[],
  };
  return {
    schemaVersion: "ml4c-sem-qual-v1",
    status: "QUALIFIED",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    clarifications: [],
    ...partial,
    goal,
    replyDraft: partial.replyDraft,
    intents: partial.intents?.length ? partial.intents : [defaultIntent],
  };
}

/** Natural-language prompts used by Level-B corpus (exact match). */
export const SIM_PROMPTS = {
  S1: "Peux-tu m'expliquer brièvement ce qu'est un déploiement progressif ?",
  S2: "Fais une synthèse stratégique de notre contexte de déploiement multi-sites.",
  S3: "Compare trois stratégies de déploiement et explique leurs risques.",
  S4: "Compare cinq options de déploiement sur charge, vigilance et délai.",
  S5: "Propose un parcours en six étapes pour préparer le déploiement.",
  S6: "Avec une fenêtre de huit semaines déjà actée, propose une répartition temporelle hypothétique.",
  S7: "Représente trois chaînes de dépendances qui convergent vers une mise en service.",
  S8: "Présente un arbre de décision avec plusieurs hypothèses et branches.",
  S9: "Explique trois chantiers parallèles avec un contrôle commun avant convergence.",
  S10: "Montre-moi un graphique des coûts et gains attendus pour ce projet.",
  S11: "Compare deux options simples pour un pilote, avec avantages et limites.",
  S12: "SIM_INVALID_SCHEMA_PROBE",
} as const;

const SCENARIOS: Record<string, NoraTurnQualification> = {
  [SIM_PROMPTS.S1]: base({
    goal: "Expliquer le déploiement progressif",
    replyDraft:
      "Un déploiement progressif consiste à étendre un changement par vagues successives, en vérifiant les enseignements entre chaque vague. Aucune chronologie ni chiffre n'est affirmé ici.",
    // No visualComposition — prose only.
  }),

  [SIM_PROMPTS.S2]: base({
    goal: "Synthèse stratégique multi-sites",
    replyDraft: "Synthèse stratégique (dérivée des sections canoniques).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "synthesis",
          id: "sim-s2",
          title: "Plusieurs sites. Une même exigence de maîtrise.",
          headlineAccent: "Deux lectures du risque.",
          lead: "Les constats ci-dessous s'appuient sur le contexte fourni. Aucun effectif ni durée n'est inventé.",
          items: [
            {
              id: "i1",
              label: "Constat",
              detail: "Les sites ne partagent pas encore le même niveau de préparation.",
              tone: "observation",
            },
            {
              id: "i2",
              label: "Risque",
              detail: "Une bascule unique concentrerait les sollicitations support.",
              tone: "risk",
            },
            {
              id: "i3",
              label: "Piste",
              detail: "Comparer un rythme progressif et un pilote avant extension.",
              tone: "priority",
            },
          ],
          strategiesSectionTitle: "Deux pistes à examiner",
          strategyCards: [
            {
              id: "b",
              eyebrow: "PISTE B",
              title: "Progression site par site",
              summary: "Vagues courtes avec contrôle entre chaque extension.",
              positive: "Charge support étalée",
              counterpart: "Contrepartie : coexistence prolongée",
              accent: "blue",
            },
            {
              id: "c",
              eyebrow: "PISTE C",
              title: "Pilote puis extension",
              summary: "Un site d'apprentissage avant une bascule plus large.",
              positive: "Apprentissage initial",
              counterpart: "Contrepartie : pic ultérieur possible",
              accent: "gold",
            },
          ],
          orientation:
            "Recommandation conditionnelle : privilégier la progression si le support ne peut pas absorber un pic.",
          textAlternative:
            "Synthèse : deux pistes B/C, constats et risques, sans chiffres inventés.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S3]: base({
    goal: "Comparer trois stratégies",
    replyDraft: "Comparaison de trois stratégies (dérivée).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "comparison",
          id: "sim-s3",
          title: "Trois stratégies. Trois lectures du risque.",
          lead: "Chaque option conserve ses avantages et ses limites. Aucune n'est retenue.",
          alternatives: [
            {
              id: "a",
              title: "Séquences courtes",
              summary: "Vagues successives avec contrôle entre sites.",
              pros: ["Réversible"],
              cons: ["Coexistence plus longue", "Coordination continue"],
            },
            {
              id: "b",
              title: "Pilote unique",
              summary: "Un site d'apprentissage avant extension.",
              pros: ["Apprentissage ciblé"],
              cons: ["Transfert d'apprentissage à sécuriser"],
            },
            {
              id: "c",
              title: "Bascule concentrée",
              summary: "Fenêtre unique après préparation homogène.",
              pros: ["Durée de coexistence réduite"],
              cons: ["Pic support", "Préparation complète exigée", "Retour arrière plus tendu"],
            },
          ],
          recommendation:
            "Recommandation conditionnelle : si le support est saturé, éviter la bascule concentrée.",
          editorialNote: "Comparaison sémantique — Studio choisit la variante cartes.",
          textAlternative: "Trois stratégies A/B/C avec avantages et limites distincts.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S4]: base({
    goal: "Comparer cinq options",
    replyDraft: "Matrice de cinq options (dérivée).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "comparison",
          id: "sim-s4",
          title: "Cinq options. Une matrice éditoriale.",
          lead: "Options en lignes, critères en colonnes. Contenu intégral conservé.",
          alternatives: [
            { id: "a", title: "Séquences courtes", summary: "Vagues successives contrôlées." },
            { id: "b", title: "Pilote unique", summary: "Apprentissage avant extension." },
            { id: "c", title: "Deux vagues", summary: "Regroupement partiel." },
            { id: "d", title: "Accompagnement renforcé", summary: "Présence support locale." },
            { id: "e", title: "Bascule concentrée", summary: "Fenêtre unique préparée." },
          ],
          criteria: [
            {
              id: "effort",
              label: "Effort",
              values: {
                a: "Étalé",
                b: "Modéré puis pic",
                c: "Deux pics",
                d: "Élevé local",
                e: "Pic unique",
              },
            },
            {
              id: "risque",
              label: "Risque",
              values: {
                a: "Coexistence",
                b: "Transfert",
                c: "Coordination",
                d: "Disponibilité",
                e: "Préparation",
              },
            },
            {
              id: "delai",
              label: "Délai",
              values: {
                a: "Long",
                b: "Moyen",
                c: "Moyen+",
                d: "Variable",
                e: "Court si prêt",
              },
            },
          ],
          editorialNote: "Matrice réelle simulée — cinq options, trois critères.",
          textAlternative: "Cinq options A–E : effort, risque, délai.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S5]: base({
    goal: "Parcours en six étapes",
    replyDraft: "Parcours en six étapes (dérivé).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "sequence",
          id: "sim-s5",
          title: "Un parcours en six temps.",
          headlineAccent: "Ordre connu, sans dates inventées.",
          lead: "Les étapes sont ordonnées. Aucune durée calendaire n'est affirmée.",
          steps: [
            { id: "s1", title: "Cadrer l'intention", detail: "Formuler le besoin et les contraintes connues." },
            { id: "s2", title: "Cartographier les sites", detail: "Repérer les différences de maturité." },
            { id: "s3", title: "Qualifier le support", detail: "Mesurer la capacité d'accompagnement." },
            { id: "s4", title: "Préparer le retour arrière", detail: "Documenter la marche de reprise." },
            { id: "s5", title: "Conduire un pilote", detail: "Observer les frictions sur un périmètre limité." },
            { id: "s6", title: "Étendre sous contrôle", detail: "N'ouvrir la suite qu'après vérification." },
          ],
          closingNote: "Aucune chronologie chiffrée — temporalité non fournie.",
          textAlternative: "Six étapes ordonnées sans dates.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S6]: base({
    goal: "Répartition temporelle hypothétique sur 8 semaines",
    replyDraft: "Chronologie hypothétique (dérivée).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "sequence",
          id: "sim-s6",
          title: "Une lecture possible des huit semaines.",
          headlineAccent: "Hypothèse temporelle explicite.",
          lead: "La fenêtre de huit semaines est fournie par le Pilote. La répartition reste hypothétique.",
          steps: [
            { id: "s1", title: "Qualifier", detail: "Accès et dépendances." },
            { id: "s2", title: "Préparer", detail: "Support et communication." },
            { id: "s3", title: "Tester", detail: "Site pilote." },
            { id: "s4", title: "Étendre", detail: "Vagues autorisées." },
          ],
          timeline: {
            weeks: 8,
            caption:
              "Répartition hypothétique — aucune charge réelle n'est affirmée comme fait projet.",
            tracks: [
              { id: "t1", label: "Préparation", startWeek: 1, endWeek: 3, barLabel: "Préparation", tone: "blue" },
              { id: "t2", label: "Pilote", startWeek: 3, endWeek: 4, barLabel: "Pilote", tone: "violet" },
              {
                id: "t3",
                label: "Sites restants",
                startWeek: 5,
                endWeek: 7,
                barLabel: "Extension",
                tone: "gold",
              },
              { id: "t4", label: "Stabilisation", startWeek: 8, endWeek: 8, barLabel: "Clôture", tone: "teal" },
            ],
          },
          closingNote: "Ne pas traiter cette grille comme un planning engagé.",
          textAlternative: "Quatre étapes + chronologie hypothétique 8 semaines.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S7]: base({
    goal: "Trois chaînes de dépendances",
    replyDraft: "Dépendances convergentes (dérivées).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "relations",
          id: "sim-s7",
          title: "Trois chaînes convergentes",
          layoutHint: "dependencies",
          nodes: [
            { id: "a1", label: "Accès réseau", kind: "observation" },
            { id: "a2", label: "Comptes services", kind: "finding" },
            { id: "b1", label: "Données métier", kind: "observation" },
            { id: "b2", label: "Contrôles qualité", kind: "finding" },
            { id: "c1", label: "Support local", kind: "observation" },
            { id: "c2", label: "Communication", kind: "finding" },
            { id: "gate", label: "Prérequis prêts", kind: "finding" },
            { id: "go", label: "Mise en service", kind: "hypothesis" },
          ],
          edges: [
            { from: "a1", to: "a2", relation: "depends_on" },
            { from: "a2", to: "gate", relation: "depends_on" },
            { from: "b1", to: "b2", relation: "depends_on" },
            { from: "b2", to: "gate", relation: "depends_on" },
            { from: "c1", to: "c2", relation: "depends_on" },
            { from: "c2", to: "gate", relation: "depends_on" },
            { from: "gate", to: "go", relation: "depends_on" },
          ],
          textAlternative: "Trois chaînes A/B/C convergent vers la mise en service.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S8]: base({
    goal: "Arbre de décision",
    replyDraft: "Arbre conditionnel (dérivé).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "relations",
          id: "sim-s8",
          title: "Hypothèses de décision",
          layoutHint: "decisionTree",
          nodes: [
            { id: "root", label: "Support saturé ?", kind: "unknown" },
            { id: "y", label: "Oui — rythme progressif", kind: "hypothesis" },
            { id: "n", label: "Non — pilote possible", kind: "hypothesis" },
            { id: "y2", label: "Contrôle entre vagues", kind: "finding" },
            { id: "n2", label: "Apprentissage puis extension", kind: "finding" },
            { id: "leaf", label: "Réévaluer avant engagement", kind: "hypothesis" },
          ],
          edges: [
            { from: "root", to: "y", relation: "condition_true" },
            { from: "root", to: "n", relation: "condition_false" },
            { from: "y", to: "y2", relation: "flow" },
            { from: "n", to: "n2", relation: "flow" },
            { from: "y2", to: "leaf", relation: "flow" },
            { from: "n2", to: "leaf", relation: "flow" },
          ],
          textAlternative: "Arbre : support saturé ? branches progressif / pilote, puis réévaluation.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S9]: base({
    goal: "Trois chantiers parallèles",
    replyDraft: "Processus parallèle (dérivé).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "relations",
          id: "sim-s9",
          title: "Trois voies parallèles",
          layoutHint: "parallelProcess",
          nodes: [
            { id: "t1a", label: "Infra — inventaire", kind: "observation", laneId: "infra" },
            { id: "t1b", label: "Infra — préparation", kind: "finding", laneId: "infra" },
            { id: "t1c", label: "Infra — validation", kind: "finding", laneId: "infra" },
            { id: "t2a", label: "Données — extraction", kind: "observation", laneId: "data" },
            { id: "t2b", label: "Données — contrôle", kind: "finding", laneId: "data" },
            { id: "t2c", label: "Données — bascule", kind: "hypothesis", laneId: "data" },
            { id: "t3a", label: "Humain — relais", kind: "observation", laneId: "people" },
            { id: "t3b", label: "Humain — formation", kind: "finding", laneId: "people" },
            { id: "t3c", label: "Humain — support", kind: "finding", laneId: "people" },
            { id: "sync", label: "Contrôle commun", kind: "finding" },
            { id: "next", label: "Suite autorisée", kind: "hypothesis" },
          ],
          edges: [
            { from: "t1a", to: "t1b", relation: "flow" },
            { from: "t1b", to: "t1c", relation: "flow" },
            { from: "t2a", to: "t2b", relation: "flow" },
            { from: "t2b", to: "t2c", relation: "flow" },
            { from: "t3a", to: "t3b", relation: "flow" },
            { from: "t3b", to: "t3c", relation: "flow" },
            { from: "t1c", to: "sync", relation: "sync" },
            { from: "t2c", to: "sync", relation: "sync" },
            { from: "t3c", to: "sync", relation: "sync" },
            { from: "sync", to: "next", relation: "depends_on" },
          ],
          textAlternative: "Trois voies Infra/Données/Humain, sync commun, puis suite.",
        },
      ],
    },
  }),

  [SIM_PROMPTS.S10]: base({
    goal: "Demande de graphique quantitatif sans données",
    replyDraft:
      "Je ne peux pas produire un graphique de coûts ou de gains : ces valeurs ne figurent pas dans le contexte disponible. Les inventer serait trompeur. Si vous disposez de sources D4 chiffrées, indiquez-les ; sinon, listons d'abord les données à collecter.",
    // Explicitly no visualComposition / no fake chart.
  }),

  [SIM_PROMPTS.S11]: base({
    goal: "Deux options pour un pilote",
    replyDraft: "Deux options (dérivées).",
    visualComposition: {
      schemaVersion: "conversational-composition-canonical-v1",
      blocks: [
        {
          kind: "comparison",
          id: "sim-s11",
          title: "Deux options pour un pilote.",
          lead: "Comparaison simple destinée à la preuve de persistance/relecture.",
          alternatives: [
            {
              id: "a",
              title: "Pilote unique",
              summary: "Un site concentre l'apprentissage.",
              pros: ["Focus"],
              cons: ["Représentativité limitée", "Transfert à prévoir"],
            },
            {
              id: "b",
              title: "Deux sites contrastés",
              summary: "Deux contextes pour élargir l'observation.",
              pros: ["Couverture"],
              cons: ["Charge support doublée"],
            },
          ],
          recommendation: "Recommandation conditionnelle : un site si le support est saturé.",
          textAlternative: "Deux options pilote : unique vs deux sites contrastés.",
        },
      ],
    },
  }),
};

/**
 * Resolve a provider-simulated qualification by exact natural prompt.
 * Returns null when the utterance is not part of the Level-B corpus.
 */
export function resolveProviderSimulatedQualification(
  userText: string,
): NoraTurnQualification | null {
  const key = userText.trim();
  return SCENARIOS[key] ?? null;
}

export function listProviderSimulatedPrompts(): string[] {
  return Object.keys(SCENARIOS);
}
