/**
 * TEST_BOUNDARY ONLY — inject typed NoraTurnQualification envelopes by exact scenario key.
 * Not a synonym/regex router. Unknown utterances → dialogue-only (no effects).
 * Never imported as LIVE fallback.
 */
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  unavailableQualification,
  type NoraTurnQualification,
  type QualifiedIntentItem,
} from "./semantic-qualification";

function fixtureLaneActive(): boolean {
  return (
    process.env.STUDIO_LANE === "DEV" &&
    (process.env.STUDIO_E2E === "1" || process.env.STUDIO_FORCE_NORA_FIXTURE === "1")
  );
}

function assertFixtureLane(): void {
  if (!fixtureLaneActive()) {
    throw new Error(
      "fixtureSemanticQualify called outside TEST_BOUNDARY fixture lane — forbidden",
    );
  }
}

/**
 * Intervencia S02-01 — SOURCE EXACTE NON DISPONIBLE for the full campaign verbatim
 * (12 sites / Excel / e-mails). Reconstructed negative-final-clause only.
 * Do NOT declare S02-01 PASS from this fixture alone.
 */
export const INTERVENCIA_S02_01_MESSAGE =
  "Pour l'instant, je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques.";
export const INTERVENCIA_S02_01_SOURCE_STATUS = "SOURCE_EXACTE_NON_DISPONIBLE_RECONSTRUCTED" as const;

function normalizeUtterance(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

type QualExtras = Partial<
  Pick<
    NoraTurnQualification,
    | "projectIntention"
    | "desiredOutcome"
    | "initialScope"
    | "proposedProjectName"
    | "clarifications"
    | "continueChoices"
    | "resourceReferences"
    | "preparationAssessment"
    | "preparationAssessmentExplanation"
    | "visualComposition"
  >
>;

function dialogue(
  goal: string,
  reply: string,
  constraints: string[] = [],
  extras?: QualExtras & { omitClarifications?: boolean },
): NoraTurnQualification {
  const base: NoraTurnQualification = {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
    projectIntention: extras?.projectIntention ?? "",
    desiredOutcome: extras?.desiredOutcome ?? "",
    initialScope: extras?.initialScope ?? "",
    proposedProjectName: extras?.proposedProjectName ?? "",
    intents: [
      {
        id: "i1",
        capabilityId: "d3.converse",
        mode: "EXPLORE",
        summary: goal,
        parameters: {},
        constraints,
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
    replyDraft: reply,
    continueChoices: extras?.continueChoices,
    resourceReferences: extras?.resourceReferences,
    preparationAssessment: extras?.preparationAssessment,
    preparationAssessmentExplanation: extras?.preparationAssessmentExplanation,
    visualComposition: extras?.visualComposition,
  };
  if (extras?.omitClarifications) {
    // Raw incomplete envelope: clarifications key absent (R2-C).
    return base;
  }
  return { ...base, clarifications: extras?.clarifications ?? [] };
}

function effect(
  goal: string,
  reply: string,
  intents: Array<Partial<Pick<QualifiedIntentItem, "id">> & Omit<QualifiedIntentItem, "id">>,
  extras?: QualExtras,
): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
    projectIntention: extras?.projectIntention ?? "",
    desiredOutcome: extras?.desiredOutcome ?? "",
    initialScope: extras?.initialScope ?? "",
    proposedProjectName: extras?.proposedProjectName ?? "",
    intents: intents.map((it, idx) => ({
      ...it,
      id: it.id ?? `i${idx + 1}`,
      parameters: it.parameters ?? {},
      constraints: it.constraints ?? [],
      dependsOn: it.dependsOn ?? [],
      sourceEvidence: it.sourceEvidence ?? [],
    })),
    clarifications: extras?.clarifications ?? [],
    replyDraft: reply,
    preparationAssessment: extras?.preparationAssessment,
    preparationAssessmentExplanation: extras?.preparationAssessmentExplanation,
  };
}

/**
 * Exact-message → typed envelope table.
 * Tests must use these exact strings (or registerScenario) — no fuzzy synonym matching.
 */
const SCENARIO_TABLE = new Map<string, NoraTurnQualification>();

function register(key: string, q: NoraTurnQualification): void {
  SCENARIO_TABLE.set(normalizeUtterance(key), q);
}

register(
  INTERVENCIA_S02_01_MESSAGE,
  dialogue(
    "Cadrage sans effet",
    "D'accord — restons sur le cadrage du besoin, sans créer de projet ni engager de travaux techniques.",
    ["NO_PROJECT_CREATE", "NO_TECHNICAL_WORK"],
  ),
);

for (const msg of [
  "Je veux créer un projet.",
  "Je veux démarrer un projet.",
  "Je souhaite initier un nouveau projet.",
  "J'aimerais lancer un projet.",
  "Je voudrais commencer un nouveau projet.",
  "Crée un projet.",
]) {
  register(
    msg,
    effect(
      "Créer un projet",
      "Je prépare l'intention de création de projet — acte Pilote requis.",
      [
        {
          capabilityId: "d2.create_project",
          mode: "REQUEST_EFFECT",
          summary: "Création de projet",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      {
        desiredOutcome: "Disposer d'un espace projet pour poursuivre le cadrage",
        preparationAssessment: "CLARIFYING",
        preparationAssessmentExplanation:
          "L'intention de créer est claire ; un nom et un résultat plus précis restent utiles avant d'affirmer une base suffisante.",
      },
    ),
  );
}

register(
  "Cette base n'est pas suffisante pour démarrer.",
  dialogue(
    "Base encore insuffisante",
    "D'accord — cette base n'est pas suffisante pour démarrer. Précisons le résultat attendu avant de créer.",
    ["NOT_SUFFICIENT"],
    {
      clarifications: ["Quel résultat concret voulez-vous obtenir en premier ?"],
      preparationAssessment: "CLARIFYING",
      preparationAssessmentExplanation:
        "Le Pilote indique explicitement que la base n'est pas suffisante. Aucune affirmation de démarrage n'est proposée.",
    },
  ),
);

/** Multi-tour maturation scenario (exact utterances — TEST_BOUNDARY only). */
export const SAS_MATURATION_T1 =
  "J'aimerais créer un outil pour mieux accompagner les chefs de projet, mais je ne sais pas encore ce qu'il devrait faire exactement.";
export const SAS_MATURATION_T2 =
  "Ce qui me manque surtout, c'est de retrouver les décisions importantes et de savoir quoi faire ensuite.";
export const SAS_MATURATION_T3 =
  "On peut commencer par un espace personnel, avec les décisions, les points ouverts et les prochaines actions. Le travail en équipe pourra venir plus tard.";
export const SAS_MATURATION_T4 =
  "Je préfère l'appeler Cockpit projets plutôt qu'Assistant de pilotage.";

register(
  SAS_MATURATION_T1,
  dialogue(
    "Outil d'accompagnement pour chefs de projet — intention encore ouverte",
    "Je comprends que vous souhaitez mieux accompagner les chefs de projet, sans avoir encore fixé ce que l'outil doit faire. Reformulons : un espace d'aide au pilotage, dont le rôle reste à préciser. Quelle difficulté concrète voulez-vous réduire en premier ?",
    ["NO_EFFECT"],
    {
      projectIntention: "Aider les chefs de projet sans avoir encore fixé le contenu exact de l'outil",
      clarifications: [
        "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
      ],
      // P1-A: continueChoices are explicit continuation offers — not clarifications.
      continueChoices: [
        {
          id: "approfondir-besoin",
          label: "Approfondir le besoin des chefs de projet",
          transmitText:
            "Approfondissons le besoin concret des chefs de projet avant de parler de solution.",
        },
        {
          id: "autre-approche",
          label: "Autre approche",
          transmitText: "Explore une autre approche pour accompagner les chefs de projet.",
        },
      ],
      preparationAssessment: "EXPLORING",
      preparationAssessmentExplanation:
        "L'intention est libre et encore floue : aucun résultat ni périmètre n'est établi. Il est trop tôt pour affirmer une base de démarrage.",
    },
  ),
);

register(
  SAS_MATURATION_T2,
  dialogue(
    "Préciser le résultat : décisions et prochaines actions",
    "Vous visez surtout à retrouver les décisions importantes et à savoir quoi faire ensuite. C'est un résultat clair : continuité des décisions et des prochaines actions. Le périmètre exact (personnel / équipe) reste ouvert.",
    ["NO_EFFECT"],
    {
      projectIntention:
        "Aider les chefs de projet à retrouver les décisions importantes et à savoir quoi faire ensuite",
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      clarifications: [
        "Souhaitez-vous commencer seul, ou le travail en équipe fait-il déjà partie du premier périmètre ?",
        "Pour une première version, le chef de projet pourrait-il déposer ou copier les éléments utiles après chaque réunion, ou la récupération automatique depuis les outils existants est-elle indispensable ?",
      ],
      continueChoices: [
        {
          id: "perimetre-personnel",
          label: "Commencer seul (périmètre personnel)",
          transmitText:
            "Je préfère commencer seul, avec un périmètre personnel pour la première version.",
        },
        {
          id: "approfondir-decisions",
          label: "Approfondir le suivi des décisions",
          transmitText:
            "Approfondissons comment retrouver les décisions importantes et les prochaines actions.",
        },
      ],
      preparationAssessment: "CLARIFYING",
      preparationAssessmentExplanation:
        "Un résultat visé est désormais exprimé ; le périmètre initial et un nom de travail restent à préciser.",
    },
  ),
);

register(
  SAS_MATURATION_T3,
  // Proposition de démarrage ≠ REQUEST_EFFECT : proposedProjectName only; Pilot create remains D2.
  dialogue(
    "Confirmer le périmètre V1 manuel (équipe plus tard)",
    "Premier périmètre : un espace personnel avec décisions, points ouverts et prochaines actions. Le travail en équipe est une piste ultérieure, pas une décision immédiate. Nom de travail proposé : Assistant de pilotage. Cette base me paraît suffisante pour démarrer si vous le souhaitez.",
    ["NO_EFFECT", "PROPOSAL_ONLY"],
    {
      projectIntention:
        "Aider les chefs de projet à retrouver les décisions importantes et à savoir quoi faire ensuite",
      proposedProjectName: "Assistant de pilotage",
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      initialScope:
        "Espace personnel alimenté manuellement : décisions, points ouverts, prochaines actions (intégrations / équipe plus tard)",
      clarifications: [],
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation:
        "Intention, résultat et un premier périmètre personnel sont assez clairs pour démarrer. La collaboration d'équipe reste hors du périmètre immédiat.",
    },
  ),
);

/** Ordinary follow-up after intention is established — must not rewrite durable intention (R1-B). */
export const SAS_MATURATION_ORDINARY =
  "Peux-tu me recommander les prochaines étapes ?";

register(
  SAS_MATURATION_ORDINARY,
  dialogue(
    "Recommander les prochaines étapes",
    "Voici des prochaines étapes utiles pour consolider le cadrage, sans changer l'objectif fondateur déjà établi.",
    ["NO_EFFECT"],
    {
      projectIntention: "",
      // Advice-only turn: do not pretend open questions were re-resolved (omit ≠ []).
      omitClarifications: true,
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      preparationAssessment: "CLARIFYING",
      preparationAssessmentExplanation:
        "L'intention durable est déjà établie ; ce tour apporte seulement des conseils locaux.",
    },
  ),
);

/** Incomplete QUALIFIED envelope — clarifications omitted (not []). Prior open questions must remain. */
export const SAS_MATURATION_INCOMPLETE_QUAL =
  "Peux-tu reformuler brièvement ce que nous avons déjà dit, sans nouvelle question ?";

register(
  SAS_MATURATION_INCOMPLETE_QUAL,
  dialogue(
    "Reformuler l'acquis sans réévaluer les questions ouvertes",
    "Je reformule l'acquis déjà partagé. Les questions encore ouvertes restent à trancher.",
    ["NO_EFFECT", "INCOMPLETE_CLARIFICATIONS"],
    {
      projectIntention: "",
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      omitClarifications: true,
      preparationAssessment: "CLARIFYING",
      preparationAssessmentExplanation:
        "Reformulation locale sans réévaluation fiable des questions ouvertes.",
    },
  ),
);

register(
  SAS_MATURATION_T4,
  // Dialogue (no REQUEST_EFFECT): name correction; create remains an explicit D2 Pilot act.
  // goal is turn-local; projectIntention empty → durable intention preserved by D2 merge.
  dialogue(
    "Retenir Cockpit projets comme nom de travail et confirmer le premier périmètre",
    "Correction prise en compte : le nom de travail est Cockpit projets (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.",
    ["NAME_CORRECTION", "NO_EFFECT"],
    {
      projectIntention: "",
      proposedProjectName: "Cockpit projets",
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      initialScope:
        "Espace personnel alimenté manuellement : décisions, points ouverts, prochaines actions (intégrations / équipe plus tard)",
      clarifications: [],
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation:
        "Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est Cockpit projets.",
    },
  ),
);

/** Build a T4 rename utterance with an isolated unique name (BROWSER uniqueness). */
export function sasMaturationT4Rename(uniqueName: string): string {
  return `Je préfère l'appeler ${uniqueName.trim()} plutôt qu'Assistant de pilotage.`;
}

function maturationRenameQualification(uniqueName: string): NoraTurnQualification {
  const name = uniqueName.trim().slice(0, 120);
  return dialogue(
    `Retenir « ${name} » comme nom de travail et confirmer le premier périmètre`,
    `Correction prise en compte : le nom de travail est ${name} (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.`,
    ["NAME_CORRECTION", "NO_EFFECT"],
    {
      projectIntention: "",
      proposedProjectName: name,
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      initialScope:
        "Espace personnel alimenté manuellement : décisions, points ouverts, prochaines actions (intégrations / équipe plus tard)",
      clarifications: [],
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation: `Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est ${name}.`,
    },
  );
}

function cockpitNamedQualification(projectName: string): NoraTurnQualification {
  const name = projectName.trim().slice(0, 120);
  return dialogue(
    `Proposer le nom de travail ${name} pour le cockpit`,
    `Je comprends : un cockpit pour suivre vos projets, en commençant par le portefeuille et les risques. Nom de travail proposé : ${name}. Cette base me paraît suffisante pour démarrer ; les détails pourront se préciser ensuite.`,
    ["NO_EFFECT", "PROPOSAL_ONLY"],
    {
      projectIntention: "Aider à suivre les projets via un cockpit (portefeuille et risques en premier)",
      proposedProjectName: name,
      desiredOutcome: "Voir portefeuille et risques en un seul endroit",
      initialScope: "Portefeuille et risques en premier",
      clarifications: [],
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation:
        "Intention, résultat et périmètre initial sont assez clairs pour démarrer. Les raffinements peuvent se faire dans le projet.",
    },
  );
}

register(
  "Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé Cockpit projets.",
  cockpitNamedQualification("Cockpit projets"),
);

register(
  "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
  effect(
    "Atlas + document",
    "Intention composée : projet Atlas puis document de cadrage.\n\n```sfia-document\n# Document de cadrage Atlas\n\n## Section 1 — Objectif\n\nObjectif Atlas.\n\n## Section 2 — Périmètre\n\nPérimètre initial.\n\n## Section 3 — Premières étapes\n\nÉtapes.\n```\n",
    [
      {
        id: "i1",
        capabilityId: "d2.create_project",
        mode: "REQUEST_EFFECT",
        summary: "Créer Atlas",
        parameters: { projectName: "Atlas" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
      {
        id: "i2",
        capabilityId: "d4.create_document",
        mode: "REQUEST_EFFECT",
        summary: "document de cadrage qui expose l'objectif, le périmètre et les premières étapes",
        parameters: {
          notes: "document de cadrage qui expose l'objectif, le périmètre et les premières étapes",
        },
        constraints: [],
        dependsOn: ["i1"],
        sourceEvidence: [],
      },
    ],
  ),
);

register(
  "Crée un projet nommé Atlas Guard puis un document.",
  effect(
    "Atlas Guard + document",
    "Intention composée Atlas Guard.\n\n```sfia-document\n# Document Atlas Guard\n\n## Section 1\n\nGarde.\n```\n",
    [
      {
        id: "i1",
        capabilityId: "d2.create_project",
        mode: "REQUEST_EFFECT",
        summary: "Créer Atlas Guard",
        parameters: { projectName: "Atlas Guard" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
      {
        id: "i2",
        capabilityId: "d4.create_document",
        mode: "REQUEST_EFFECT",
        summary: "document Atlas Guard",
        parameters: { notes: "document Atlas Guard" },
        constraints: [],
        dependsOn: ["i1"],
        sourceEvidence: [],
      },
    ],
  ),
);

register(
  "Je décide que la connexion GitHub est obligatoire pour ce projet.",
  effect("RECORD GitHub", "Intention RECORD_DECISION GitHub — vérification propriétaire D6.", [
    {
      capabilityId: "d6.human_decision",
      mode: "REQUEST_EFFECT",
      summary: "La connexion GitHub est obligatoire pour ce projet.",
      parameters: {
        pilotageOperation: "RECORD_DECISION",
        statement: "La connexion GitHub est obligatoire pour ce projet.",
        objectRef: "github-connexion",
      },
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    },
  ]),
);

register(
  "Je décide que GitHub est obligatoire pour ce projet.",
  effect("RECORD GitHub court", "Intention RECORD_DECISION GitHub — vérification propriétaire D6.", [
    {
      capabilityId: "d6.human_decision",
      mode: "REQUEST_EFFECT",
      summary: "GitHub est obligatoire pour ce projet.",
      parameters: {
        pilotageOperation: "RECORD_DECISION",
        statement: "GitHub est obligatoire pour ce projet.",
        objectRef: "github",
      },
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    },
  ]),
);

for (const msg of [
  "Je ne veux pas créer le projet.",
  "Je ne souhaite pas créer de projet.",
  "Je ne t'autorise pas à créer le projet.",
  "Il ne faut surtout pas créer ce projet.",
  "Réfléchissons au besoin sans créer le projet.",
  "Comment crée-t-on un projet ?",
  "Et si nous lancions un projet ?",
  "Il a écrit : crée le projet Atlas.",
  "Je pourrais envisager un projet plus tard.",
  "Explique GitHub Actions dans Studio",
  "Quelle est la différence entre blob et commit ?",
]) {
  register(
    msg,
    dialogue("Discussion sans effet", "Voici une réponse informative — aucun effet engagé.", [
      "NO_EFFECT",
    ]),
  );
}

register(
  "Ouvre le cycle cadrage.",
  effect("Ouvrir cycle", "Intention d'ouverture de cycle — vérification propriétaire D5.", [
    {
      capabilityId: "d5.pilotage_command",
      mode: "REQUEST_EFFECT",
      summary: "OPEN_CYCLE CADRAGE",
      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "CADRAGE" },
      constraints: [],
      dependsOn: [],
      sourceEvidence: [],
    },
  ]),
);

register(
  "Rédige un document de synthèse sur les options A et B",
  effect(
    "Créer document synthèse",
    "```sfia-document\n# Synthèse demandée\n\n## Section 1 — Contexte\n\nOptions A et B.\n\n## Section 2 — Analyse\n\nComparaison.\n\n## Section 3 — Suite\n\nPoints ouverts.\n```\n",
    [
      {
        capabilityId: "d4.create_document",
        mode: "REQUEST_EFFECT",
        summary: "document de synthèse options A et B",
        parameters: { notes: "synthèse options A et B" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
  ),
);

register(
  "Rédige un document de synthèse sur l'architecture",
  effect(
    "Créer document architecture",
    "```sfia-document\n# Synthèse demandée\n\n## Section 1 — Contexte\n\nArchitecture.\n```\n",
    [
      {
        capabilityId: "d4.create_document",
        mode: "REQUEST_EFFECT",
        summary: "document synthèse architecture",
        parameters: {},
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
  ),
);

register(
  "Retiens comme acquis structurant que l'architecture modulaire est la piste privilégiée pour la suite.",
  effect(
    "Capitaliser acquis architecture",
    "J'enregistre l'acquis structurant sur l'architecture modulaire pour la continuité du projet.",
    [
      {
        capabilityId: "d4.record_knowledge",
        mode: "REQUEST_EFFECT",
        summary: "Architecture modulaire = piste privilégiée",
        parameters: {
          knowledgeKind: "ACQUIS",
          knowledgeStatement:
            "L'architecture modulaire est la piste privilégiée pour la suite du projet.",
          epistemic: "hypothesized",
          subjectTitle: "Architecture",
          continuityReason: "Acquis structurant pour reprise ultérieure",
        },
        constraints: ["NO_HUMAN_DECISION"],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
  ),
);

register(
  "Bonjour Nora, comment vas-tu ?",
  dialogue("Politesse", "Bonjour — je vais bien. Comment puis-je vous aider ?", ["NO_EFFECT"]),
);

/** Ensemble 05 — visual composition scenarios S1–S8 (TEST_BOUNDARY exact keys). */
export const E05_S1_SIMPLE =
  "Peux-tu m'expliquer la différence entre une observation et une hypothèse ?";
export const E05_S2_DIAGNOSTIC =
  "Analyse les difficultés possibles de notre organisation de coordination multi-sites et montre ce qui est établi, hypothétique et à vérifier.";
export const E05_S3_COMPARISON =
  "Compare une approche de déploiement progressive à une approche simultanée. Présente les avantages, risques, dépendances et conditions de choix.";
export const E05_S4_TRAJECTORY =
  "Propose un parcours pour clarifier notre organisation avant de lancer les travaux, en montrant les dépendances.";
export const E05_S5_COMPOSITE =
  "À partir du diagnostic et de la comparaison, quelle approche recommandes-tu pour avancer, avec les réserves et les prochaines questions utiles ?";
export const E05_S7_INSUFFICIENT =
  "Montre-moi l'évolution mensuelle des coûts et les gains obtenus.";

// Backward-compatible aliases used by earlier T02 e2e.
export const E05_VISUAL_SIMPLE = E05_S1_SIMPLE;
export const E05_VISUAL_COMPARISON = E05_S3_COMPARISON;
export const E05_VISUAL_SEQUENCE = E05_S4_TRAJECTORY;
export const E05_VISUAL_RELATIONS = E05_S2_DIAGNOSTIC;
export const E05_VISUAL_SYNTHESIS = E05_S5_COMPOSITE;
export const E05_VISUAL_COMPOSITE = E05_S5_COMPOSITE;
export const E05_VISUAL_INSUFFICIENT = E05_S7_INSUFFICIENT;

const S1_QUAL = dialogue(
  "Différence observation / hypothèse",
  "Une observation est un élément constaté dans le contexte disponible, sans en faire automatiquement une preuve. Une hypothèse est une proposition explicative encore non vérifiée. On peut s'appuyer sur des observations pour formuler des hypothèses, mais une icône ou une formulation ne transforme jamais une hypothèse en fait établi.",
  ["NO_EFFECT", "TEXT_ONLY", "UX-NORA-01"],
);
register(E05_S1_SIMPLE, S1_QUAL);
register("E05_S1_SIMPLE", S1_QUAL);

register(
  E05_S2_DIAGNOSTIC,
  dialogue(
    "Diagnostic coordination multi-sites — établi vs hypothétique",
    "Diagnostic du besoin de coordination (fallback textuel).",
    ["NO_EFFECT", "VISUAL_RELATIONS", "S2"],
    {
      clarifications: [
        "Quelles pratiques locales sont déjà documentées sur chaque site ?",
        "Qui porte aujourd'hui l'arbitrage entre sites ?",
      ],
      continueChoices: [
        {
          id: "approfondir-roles",
          label: "Clarifier les responsabilités",
          transmitText:
            "Approfondissons qui porte l'arbitrage entre sites avant de parler de déploiement.",
        },
        {
          id: "collecter-pratiques",
          label: "Inventorier les pratiques locales",
          transmitText:
            "Commençons par inventorier les pratiques réellement utilisées sur chaque site.",
        },
      ],
      visualComposition: {
        schemaVersion: "e05-visual-composition-v1",
        blocks: [
          {
            kind: "text",
            id: "s2-intro",
            role: "information",
            markdown:
              "Contexte synthétique : coordination d'interventions techniques sur plusieurs sites. Besoin d'améliorer la coordination ; pratiques différentes ; responsabilités encore à clarifier. **Aucune donnée quantitative** ni dysfonctionnement précis n'est encore confirmé.",
          },
          {
            kind: "text",
            id: "s2-obs",
            role: "observation",
            icon: "observe",
            markdown:
              "**Observations (constatées dans le cadrage, non prouvées comme dysfonctionnements)** : besoin de mieux coordonner ; pratiques distinctes selon les sites ; rôles d'arbitrage encore flous.",
          },
          {
            kind: "relations",
            id: "s2-rel",
            title: "Éléments liés — sans causalité inventée",
            role: "information",
            nodes: [
              { id: "o1", label: "Pratiques locales divergentes", kind: "observation" },
              { id: "o2", label: "Rôles d'arbitrage flous", kind: "observation" },
              { id: "h1", label: "Friction de coordination", kind: "hypothesis" },
              { id: "u1", label: "Impact réel non mesuré", kind: "unknown" },
            ],
            edges: [
              { from: "o1", to: "h1", label: "peut contribuer" },
              { from: "o2", to: "h1", label: "peut contribuer" },
            ],
            textAlternative:
              "Observations : pratiques divergentes et rôles flous. Hypothèse : friction de coordination. Inconnue : impact réel non mesuré.",
          },
          {
            kind: "synthesis",
            id: "s2-next",
            title: "À vérifier ensuite",
            items: [
              {
                id: "v1",
                label: "Cartographier les pratiques par site",
                tone: "observation",
                role: "observation",
              },
              {
                id: "v2",
                label: "Identifier le porteur d'arbitrage",
                tone: "hypothesis",
                role: "hypothesis",
              },
              {
                id: "v3",
                label: "Ne pas conclure à un dysfonctionnement chiffré",
                tone: "risk",
                role: "risk",
              },
            ],
            textAlternative:
              "À vérifier : pratiques par site, porteur d'arbitrage ; ne pas conclure à un dysfonctionnement chiffré.",
          },
          { kind: "choices", id: "s2-choices" },
        ],
      },
    },
  ),
);

register(
  E05_S3_COMPARISON,
  dialogue(
    "Comparaison déploiement progressif vs simultané",
    "Comparaison des approches (fallback).",
    ["NO_EFFECT", "VISUAL_COMPARISON", "S3"],
    {
      continueChoices: [
        {
          id: "approfondir-progressif",
          label: "Approfondir l'approche progressive",
          transmitText: "Approfondissons les conditions d'une approche progressive.",
        },
        {
          id: "comparer-risques",
          label: "Comparer les risques",
          transmitText: "Comparons plus précisément les risques des deux approches.",
        },
      ],
      resourceReferences: [
        {
          kind: "document",
          label: "Note de cadrage coordination",
          resourceId: "doc_synth_coordination",
        },
      ],
      visualComposition: {
        schemaVersion: "e05-visual-composition-v1",
        blocks: [
          {
            kind: "text",
            id: "s3-intro",
            role: "information",
            markdown:
              "Deux options pour déployer la coordination : **progressive** (site par site) ou **simultanée** (tous les sites). Aucun délai ni coût chiffré n'est inventé ici — seuls les critères qualitatifs exprimés sont présentés.",
          },
          {
            kind: "comparison",
            id: "s3-cmp",
            title: "Progressive vs simultanée",
            role: "information",
            alternatives: [
              {
                id: "prog",
                title: "Déploiement progressif",
                summary: "Étendre site par site après apprentissage local.",
                pros: ["Apprentissage contrôlé", "Réversibilité locale"],
                cons: ["Cohérence temporaire inégale"],
              },
              {
                id: "sim",
                title: "Déploiement simultané",
                summary: "Aligner tous les sites dans la même fenêtre.",
                pros: ["Cohérence immédiate"],
                cons: ["Charge de conduite élevée", "Peu de marge d'apprentissage"],
              },
            ],
            criteria: [
              {
                id: "risk",
                label: "Risque de conduite",
                values: { prog: "Modéré", sim: "Élevé" },
              },
              {
                id: "learn",
                label: "Apprentissage",
                values: { prog: "Fort", sim: "Faible" },
              },
              {
                id: "dep",
                label: "Dépendance aux rôles clarifiés",
                values: { prog: "Utile avant chaque vague", sim: "Critique dès le départ" },
              },
            ],
            recommendation:
              "Si les responsabilités d'arbitrage ne sont pas encore claires, préférer une approche progressive — avis conditionnel, pas une décision enregistrée.",
            textAlternative:
              "Progressive : apprentissage et réversibilité, cohérence temporaire inégale. Simultanée : cohérence immédiate, charge et risque plus élevés. Avis : progressive si les rôles ne sont pas clarifiés.",
            provenance: [
              {
                label: "Note de cadrage coordination",
                kind: "document",
                resourceId: "doc_synth_coordination",
              },
              {
                label: "Mention hors registre",
                kind: "document",
                resourceId: "doc_invented_not_in_turn",
              },
              {
                label: "Observation contextuelle",
                note: "sans identité canonique",
              },
            ],
          },
          { kind: "choices", id: "s3-choices" },
          {
            kind: "references",
            id: "s3-refs",
            resourceIds: ["doc_synth_coordination"],
          },
        ],
      },
    },
  ),
);

register(
  E05_S4_TRAJECTORY,
  dialogue(
    "Parcours de clarification avant travaux",
    "Parcours proposé (fallback).",
    ["NO_EFFECT", "VISUAL_SEQUENCE", "S4"],
    {
      visualComposition: {
        schemaVersion: "e05-visual-composition-v1",
        blocks: [
          {
            kind: "text",
            id: "s4-intro",
            role: "information",
            markdown:
              "Proposition de parcours pour clarifier l'organisation **avant** de lancer les travaux. Aucune étape ci-dessous ne crée de cycle, de tâche ou de décision métier.",
          },
          {
            kind: "sequence",
            id: "s4-seq",
            title: "Clarifier avant de lancer",
            role: "step",
            steps: [
              { id: "t1", title: "Partager le constat de coordination", role: "observation" },
              {
                id: "t2",
                title: "Clarifier les responsabilités d'arbitrage",
                dependsOn: ["t1"],
                role: "step",
              },
              {
                id: "t3",
                title: "Choisir progressive ou simultanée",
                dependsOn: ["t2"],
                role: "decision",
              },
              {
                id: "t4",
                title: "Préparer la première vague / fenêtre",
                dependsOn: ["t3"],
                role: "step",
              },
            ],
            textAlternative:
              "1) Partager le constat ; 2) Clarifier l'arbitrage (après 1) ; 3) Choisir l'approche (après 2) ; 4) Préparer la première vague (après 3).",
          },
        ],
      },
    },
  ),
);

register(
  E05_S5_COMPOSITE,
  dialogue(
    "Recommandation composite conditionnelle",
    "Recommandation composite (fallback textuel).",
    ["NO_EFFECT", "VISUAL_COMPOSITE", "S5"],
    {
      clarifications: [
        "Souhaitez-vous prioriser l'apprentissage local ou l'alignement immédiat ?",
      ],
      continueChoices: [
        {
          id: "retenir-progressif",
          label: "Retenir l'approche progressive",
          transmitText:
            "Retenons l'approche progressive comme hypothèse de travail, sous réserve de clarifier les rôles.",
        },
        {
          id: "revoir-diagnostic",
          label: "Revoir le diagnostic",
          transmitText: "Revenons d'abord sur le diagnostic avant de trancher l'approche.",
        },
      ],
      resourceReferences: [
        {
          kind: "document",
          label: "Note de cadrage coordination (si créée)",
          resourceId: "doc_synth_coordination",
        },
      ],
      visualComposition: {
        schemaVersion: "e05-visual-composition-v1",
        blocks: [
          {
            kind: "text",
            id: "s5-intro",
            role: "information",
            markdown:
              "Synthèse courte : le besoin de coordination est exprimé ; les pratiques divergent ; les responsabilités restent à clarifier. **Pas de preuve chiffrée** de gains ou de coûts.",
          },
          {
            kind: "synthesis",
            id: "s5-syn",
            title: "Points saillants",
            items: [
              {
                id: "p1",
                label: "Clarifier l'arbitrage entre sites",
                detail: "Préalable utile avant tout déploiement large",
                tone: "priority",
                role: "recommendation",
              },
              {
                id: "p2",
                label: "Pratiques locales divergentes",
                tone: "observation",
                role: "observation",
              },
              {
                id: "p3",
                label: "Déploiement simultané trop tôt",
                detail: "Risque de conduite si les rôles sont encore flous",
                tone: "risk",
                role: "risk",
              },
            ],
            textAlternative:
              "Priorité : clarifier l'arbitrage. Observation : pratiques divergentes. Risque : simultané trop tôt.",
          },
          {
            kind: "text",
            id: "s5-bridge",
            role: "information",
            markdown:
              "Sur cette base, la comparaison progressive / simultanée reste pertinente — avec une recommandation **conditionnelle**.",
          },
          {
            kind: "comparison",
            id: "s5-cmp",
            title: "Rappel des options",
            alternatives: [
              {
                id: "prog",
                title: "Progressive",
                summary: "Vagues successives, apprentissage local.",
              },
              {
                id: "sim",
                title: "Simultanée",
                summary: "Alignement immédiat, charge élevée.",
              },
            ],
            recommendation:
              "Je recommande d'avancer en mode progressif **si** l'arbitrage inter-sites est clarifié d'abord. Ce n'est pas une HumanDecision.",
            textAlternative:
              "Options progressive vs simultanée. Avis : progressive si arbitrage clarifié.",
          },
          {
            kind: "text",
            id: "s5-reserve",
            role: "risk",
            markdown:
              "**Réserves** : sans inventaire des pratiques ni porteur d'arbitrage, toute trajectoire reste fragile. Prochaine question utile : qui tranche entre sites aujourd'hui ?",
          },
          {
            kind: "references",
            id: "s5-refs",
            resourceIds: ["doc_synth_coordination"],
          },
          { kind: "choices", id: "s5-choices" },
        ],
      },
    },
  ),
);

register(
  E05_S7_INSUFFICIENT,
  dialogue(
    "Données quantitatives absentes",
    "Je n'ai aucun chiffre mensuel de coûts ni de gains dans le contexte disponible. Produire un graphique d'évolution serait trompeur. Nous pouvons d'abord définir quelles données collecter, auprès de qui, et sur quelle période — sans inventer de résultats.",
    ["NO_EFFECT", "VISUAL_INSUFFICIENT_FALLBACK", "S7"],
  ),
);

/** Short TEST_BOUNDARY keys for e2e (exact match, same envelopes as the natural utterances). */
for (const [short, long] of [
  ["E05_S2_DIAGNOSTIC", E05_S2_DIAGNOSTIC],
  ["E05_S3_COMPARISON", E05_S3_COMPARISON],
  ["E05_S4_TRAJECTORY", E05_S4_TRAJECTORY],
  ["E05_S5_COMPOSITE", E05_S5_COMPOSITE],
  ["E05_S7_INSUFFICIENT", E05_S7_INSUFFICIENT],
  ["E05_VISUAL_SIMPLE", E05_S1_SIMPLE],
  ["E05_VISUAL_COMPARISON", E05_S3_COMPARISON],
  ["E05_VISUAL_SEQUENCE", E05_S4_TRAJECTORY],
  ["E05_VISUAL_RELATIONS", E05_S2_DIAGNOSTIC],
  ["E05_VISUAL_SYNTHESIS", E05_S5_COMPOSITE],
  ["E05_VISUAL_COMPOSITE", E05_S5_COMPOSITE],
  ["E05_VISUAL_INSUFFICIENT", E05_S7_INSUFFICIENT],
] as const) {
  const q = SCENARIO_TABLE.get(normalizeUtterance(long));
  if (q) register(short, q);
}

/** Test helper — register an exact utterance → envelope without regex. */
export function registerFixtureScenario(utterance: string, q: NoraTurnQualification): void {
  assertFixtureLane();
  register(utterance, q);
}

const MATURATION_RENAME_RE =
  /^Je préfère l'appeler (.+?) plutôt qu'Assistant de pilotage\.$/;
const COCKPIT_NAMED_RE =
  /^Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé (.+)\.$/;
/** E05 C1 — TEST_BOUNDARY only: cite an exact D4 revision for Travail viewer proof. */
const E05_CITE_REVISION_RE =
  /^E05_CITE_REVISION documentId=(\S+) revisionId=(\S+)$/;

export function fixtureSemanticQualify(userText: string): NoraTurnQualification {
  assertFixtureLane();
  const text = normalizeUtterance(userText);
  if (!text) return unavailableQualification("EMPTY_USER_TEXT");
  const hit = SCENARIO_TABLE.get(text);
  if (hit) {
    return structuredClone(hit);
  }
  // Parameterized T4 rename: name appears in the Pilot message and structured qualification —
  // never injected directly into D2/DB outside the normal turn path.
  const rename = text.match(MATURATION_RENAME_RE);
  if (rename?.[1]?.trim()) {
    return maturationRenameQualification(rename[1]);
  }
  const cockpit = text.match(COCKPIT_NAMED_RE);
  if (cockpit?.[1]?.trim()) {
    return cockpitNamedQualification(cockpit[1]);
  }
  const cite = text.match(E05_CITE_REVISION_RE);
  if (cite?.[1] && cite?.[2]) {
    return dialogue(
      "Citation documentaire exacte (fixture E05 C1)",
      "Voici la révision documentaire citée. Consultez-la dans Travail sans modifier le document.",
      ["NO_EFFECT", "E05_CITE_REVISION"],
      {
        omitClarifications: true,
        continueChoices: [],
        resourceReferences: [
          {
            kind: "document",
            label: "Révision citée E05",
            resourceId: cite[1],
            revisionId: cite[2],
          },
        ],
      },
    );
  }
  // Fail closed: unknown fixture text is dialogue-only, never a lexical invent of effects.
  return dialogue(
    "Dialogue fixture par défaut",
    "Message reçu. Aucune intention d'effet n'a été reconnue dans ce scénario de fixture.",
    ["FIXTURE_DEFAULT_NO_EFFECT"],
  );
}
