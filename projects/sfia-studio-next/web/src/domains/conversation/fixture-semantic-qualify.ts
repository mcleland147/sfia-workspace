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
    [
      "Diagnostic du besoin de coordination.",
      "Éléments liés — sans causalité inventée :",
      "Pratiques locales divergentes (peut contribuer) et Rôles d'arbitrage flous (peut contribuer)",
      "vers Friction de coordination ; Impact réel non mesuré.",
      "À vérifier ensuite : Cartographier les pratiques par site ; Identifier le porteur d'arbitrage ;",
      "Ne pas conclure à un dysfonctionnement chiffré.",
    ].join(" "),
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
            layoutHint: "dependencies",
            nodes: [
              { id: "o1", label: "Pratiques locales divergentes", kind: "observation" },
              { id: "o2", label: "Rôles d'arbitrage flous", kind: "observation" },
              { id: "h1", label: "Friction de coordination", kind: "hypothesis" },
              { id: "u1", label: "Impact réel non mesuré", kind: "unknown" },
            ],
            edges: [
              {
                from: "o1",
                to: "h1",
                label: "peut contribuer",
                relation: "depends_on",
              },
              {
                from: "o2",
                to: "h1",
                label: "peut contribuer",
                relation: "depends_on",
              },
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
    [
      "Comparaison Progressive vs simultanée.",
      "Déploiement progressif : Étendre site par site après apprentissage local.",
      "Avantages : Apprentissage contrôlé ; Réversibilité locale. Limite : Cohérence temporaire inégale.",
      "Déploiement simultané : Aligner tous les sites dans la même fenêtre.",
      "Avantages : Cohérence immédiate. Limites : Charge de conduite élevée ; Peu de marge d'apprentissage.",
      "Critères : Risque de conduite (Modéré / Élevé), Apprentissage (Fort / Faible),",
      "Dépendance aux rôles clarifiés (Utile avant chaque vague / Critique dès le départ).",
      "Si les responsabilités d'arbitrage ne sont pas encore claires, préférer une approche progressive — avis conditionnel, pas une décision enregistrée.",
    ].join(" "),
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
              "Progressive : apprentissage et réversibilité, cohérence temporaire inégale. Simultanée : cohérence immédiate, charge et risque plus élevés. Avis : progressive si les rôles ne sont pas clarifiés.\nRéserve C2 : ne pas conclure à une décision d'arbitrage tant que le porteur n'est pas nommé.",
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
    [
      "Parcours Clarifier avant de lancer :",
      "Partager le constat de coordination ;",
      "Clarifier les responsabilités d'arbitrage ;",
      "Inventorier les pratiques locales utiles ;",
      "Choisir progressive ou simultanée ;",
      "Préparer la première vague / fenêtre ;",
      "Vérifier la lisibilité du premier jalon.",
    ].join(" "),
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
              "Proposition de parcours pour clarifier l'organisation **avant** de lancer les travaux. Aucune étape ci-dessous ne crée de cycle, de tâche ou de décision métier. Aucune date n'est inventée.",
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
                title: "Inventorier les pratiques locales utiles",
                dependsOn: ["t2"],
                role: "observation",
              },
              {
                id: "t4",
                title: "Choisir progressive ou simultanée",
                dependsOn: ["t3"],
                role: "decision",
              },
              {
                id: "t5",
                title: "Préparer la première vague / fenêtre",
                dependsOn: ["t4"],
                role: "step",
              },
              {
                id: "t6",
                title: "Vérifier la lisibilité du premier jalon",
                dependsOn: ["t5"],
                role: "step",
              },
            ],
            textAlternative:
              "1) Partager le constat ; 2) Clarifier l'arbitrage ; 3) Inventorier les pratiques ; 4) Choisir l'approche ; 5) Préparer la première vague ; 6) Vérifier le premier jalon.",
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
    [
      "Recommandation composite. Points saillants :",
      "Clarifier l'arbitrage entre sites — Préalable utile avant tout déploiement large ;",
      "Pratiques locales divergentes ;",
      "Déploiement simultané trop tôt — Risque de conduite si les rôles sont encore flous.",
      "Rappel des options : Progressive — Vagues successives, apprentissage local. ;",
      "Simultanée — Alignement immédiat, charge élevée.",
      "Je recommande d'avancer en mode progressif **si** l'arbitrage inter-sites est clarifié d'abord. Ce n'est pas une HumanDecision.",
    ].join(" "),
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

const E05_F5_DECISION_TREE =
  "E05_F5_DECISION_TREE Clarifier avant deploiement progressif ou report";
const E05_F5_PARALLEL =
  "E05_F5_PARALLEL Inventaire parallele sites A et B puis revue commune";

register(
  E05_F5_DECISION_TREE,
  dialogue(
    "Arbre de decision roles",
    [
      "Arbre de lecture — Condition roles clarifies.",
      "Si oui : Approche progressive.",
      "Si non : Reporter le deploiement.",
      "Aucune HumanDecision n'est creee.",
    ].join(" "),
    ["NO_EFFECT", "VISUAL_DECISION_TREE", "F5"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "relations",
            id: "f5-tree",
            title: "Arbre de lecture",
            layoutHint: "decisionTree",
            nodes: [
              { id: "c", label: "Condition roles clarifies", kind: "unknown" },
              { id: "y", label: "Approche progressive", kind: "hypothesis" },
              { id: "n", label: "Reporter le deploiement", kind: "hypothesis" },
            ],
            edges: [
              {
                from: "c",
                to: "y",
                relation: "condition_true",
                label: "oui",
              },
              {
                from: "c",
                to: "n",
                relation: "condition_false",
                label: "non",
              },
            ],
            textAlternative:
              "Si roles clarifies → Approche progressive, sinon Reporter le deploiement.",
          },
        ],
      },
    },
  ),
);

register(
  E05_F5_PARALLEL,
  dialogue(
    "Processus parallele inventaires",
    [
      "Processus parallele : Inventaire site A et Inventaire site B,",
      "puis Revue commune (sync pret).",
    ].join(" "),
    ["NO_EFFECT", "VISUAL_PARALLEL", "F5"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "relations",
            id: "f5-par",
            title: "Processus parallele",
            layoutHint: "parallelProcess",
            nodes: [
              {
                id: "a1",
                label: "Inventaire site A",
                kind: "observation",
                laneId: "Voie A",
              },
              {
                id: "b1",
                label: "Inventaire site B",
                kind: "observation",
                laneId: "Voie B",
              },
              {
                id: "g",
                label: "Revue commune",
                kind: "finding",
                laneId: "Gate",
              },
            ],
            edges: [
              { from: "a1", to: "g", relation: "sync", label: "pret" },
              { from: "b1", to: "g", relation: "sync", label: "pret" },
            ],
            textAlternative: "Voies A/B puis Revue commune",
          },
        ],
      },
    },
  ),
);


const E05_G07_DEPENDENCIES =
  "E05_G07_DEPENDENCIES Trois chaines convergentes";
register(
  E05_G07_DEPENDENCIES,
  dialogue(
    "Dependances convergentes G07",
    "Trois filieres convergent vers un controle puis une suite conditionnelle. Aucune HumanDecision.",
    ["NO_EFFECT", "VISUAL_DEPENDENCIES", "G07"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "relations",
            id: "g07-deps",
            title: "Trois chaînes convergentes — dépendances complexes",
            layoutHint: "dependencies",
            nodes: [
              { id: "src-a", label: "Inventaire site A", kind: "observation", detail: "État observé des stocks et rôles locaux — description longue pour forcer hauteur variable." },
              { id: "src-b", label: "Inventaire site B", kind: "observation", detail: "Couverture partielle." },
              { id: "src-c", label: "Cadre juridique", kind: "hypothesis", detail: "Hypothèse : cadre applicable non encore confirmé auprès du conseil." },
              { id: "ctrl-a", label: "Contrôle cohérence A", kind: "finding", detail: "Contrôle intermédiaire sur la filière A." },
              { id: "ctrl-b", label: "Contrôle cohérence B", kind: "finding", detail: "Contrôle intermédiaire sur la filière B." },
              { id: "ctrl-c", label: "Revue juridique", kind: "unknown", detail: "Statut unknown — disponibilité du relais juridique à confirmer." },
              { id: "merge", label: "Contrôle convergent", kind: "finding", detail: "Point de convergence des trois filières avant suite." },
              { id: "next", label: "Suite sous condition", kind: "hypothesis", detail: "Poursuite uniquement si le contrôle convergent est satisfaisant — aucune HumanDecision." }
            ],
            edges: [
              { from: "src-a", to: "ctrl-a", relation: "depends_on" },
              { from: "src-b", to: "ctrl-b", relation: "depends_on" },
              { from: "src-c", to: "ctrl-c", relation: "depends_on" },
              { from: "ctrl-a", to: "merge", relation: "flow" },
              { from: "ctrl-b", to: "merge", relation: "flow" },
              { from: "ctrl-c", to: "merge", relation: "flow" },
              { from: "merge", to: "next", relation: "depends_on", label: "si convergent OK" }
            ],
            textAlternative:
              "Trois chaines (A/B/juridique) convergent vers un controle puis une suite sous condition.",
          },
        ],
      },
    },
  ),
);

const E05_G08_TREE =
  "E05_G08_TREE Arbre conditionnel multiniveau";
register(
  E05_G08_TREE,
  dialogue(
    "Arbre multiniveau G08",
    "Support pret puis fenetre compatible ; branches oui/non sans HumanDecision.",
    ["NO_EFFECT", "VISUAL_DECISION_TREE", "G08"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "relations",
            id: "g08-tree",
            title: "Arbre conditionnel multiniveau",
            layoutHint: "decisionTree",
            nodes: [
              { id: "c1", label: "Support prêt ?", kind: "unknown", detail: "CONDITION 01 · NON DÉCIDÉE — disponibilité à confirmer auprès des relais." },
              { id: "c2", label: "Fenêtre compatible ?", kind: "unknown", detail: "CONDITION 02 · NON DÉCIDÉE — contraintes calendaires encore à qualifier." },
              { id: "y1", label: "Progression possible", kind: "hypothesis", detail: "Soumettre une cadence progressive si les deux conditions sont favorables." },
              { id: "n2", label: "Revoir le calendrier", kind: "hypothesis", detail: "Réajuster les périodes envisagées si la fenêtre n'est pas compatible." },
              { id: "n1", label: "Renforcer les relais", kind: "hypothesis", detail: "Ressources et organisation à revoir si le support est insuffisant." },
              { id: "n1b", label: "Requalifier la capacité", kind: "hypothesis", detail: "Revenir aux prérequis de support — aucune branche activée automatiquement." }
            ],
            edges: [
              { from: "c1", to: "c2", relation: "condition_true", label: "oui — hypothèse" },
              { from: "c1", to: "n1", relation: "condition_false", label: "non — hypothèse" },
              { from: "c2", to: "y1", relation: "condition_true", label: "si deux conditions oui" },
              { from: "c2", to: "n2", relation: "condition_false", label: "si fenêtre non compatible" },
              { from: "n1", to: "n1b", relation: "flow", label: "si support non confirmé" }
            ],
            textAlternative:
              "Arbre multiniveau : support, fenetre, issues — aucune branche activee automatiquement.",
          },
        ],
      },
    },
  ),
);

const E05_G09_PARALLEL =
  "E05_G09_PARALLEL Trois voies paralleles controle commun";
register(
  E05_G09_PARALLEL,
  dialogue(
    "Processus parallele G09",
    "Trois voies avec plusieurs activites, sync vers controle commun puis suite conditionnelle.",
    ["NO_EFFECT", "VISUAL_PARALLEL", "G09"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "relations",
            id: "g09-par",
            title: "Trois voies parallèles et contrôle commun",
            layoutHint: "parallelProcess",
            nodes: [
              { id: "a1", label: "Collecte terrain A", kind: "observation", detail: "Première activité voie A.", laneId: "Voie A" },
              { id: "a2", label: "Consolidation A", kind: "observation", detail: "Deuxième activité voie A — dépend de la collecte.", laneId: "Voie A" },
              { id: "a3", label: "Vérification A", kind: "finding", detail: "Contrôle de voie avant sync.", laneId: "Voie A" },
              { id: "b1", label: "Collecte terrain B", kind: "observation", detail: "Première activité voie B.", laneId: "Voie B" },
              { id: "b2", label: "Consolidation B", kind: "observation", detail: "Deuxième activité voie B.", laneId: "Voie B" },
              { id: "b3", label: "Vérification B", kind: "finding", detail: "Contrôle de voie B.", laneId: "Voie B" },
              { id: "c1", label: "Collecte terrain C", kind: "observation", detail: "Première activité voie C — libellé long pour densité.", laneId: "Voie C" },
              { id: "c2", label: "Consolidation C", kind: "observation", detail: "Deuxième activité voie C avec description étendue des écarts observés.", laneId: "Voie C" },
              { id: "c3", label: "Vérification C", kind: "finding", detail: "Contrôle de voie C.", laneId: "Voie C" },
              { id: "gate", label: "Contrôle commun", kind: "unknown", detail: "Point de synchronisation — NON DÉCIDÉ ; aucune validation métier.", laneId: "Convergence" },
              { id: "next", label: "Suite conditionnelle", kind: "hypothesis", detail: "Étape suivante seulement si le contrôle commun est satisfaisant.", laneId: "Suite" }
            ],
            edges: [
              { from: "a1", to: "a2", relation: "flow" },
              { from: "a2", to: "a3", relation: "depends_on" },
              { from: "b1", to: "b2", relation: "flow" },
              { from: "b2", to: "b3", relation: "depends_on" },
              { from: "c1", to: "c2", relation: "flow" },
              { from: "c2", to: "c3", relation: "depends_on" },
              { from: "a3", to: "gate", relation: "sync", label: "prêt A" },
              { from: "b3", to: "gate", relation: "sync", label: "prêt B" },
              { from: "c3", to: "gate", relation: "sync", label: "prêt C" },
              { from: "gate", to: "next", relation: "depends_on", label: "si contrôle OK" }
            ],
            textAlternative:
              "Voies A/B/C avec verifications, controle commun non decide, suite conditionnelle.",
          },
        ],
      },
    },
  ),
);

/**
 * Exact RECETTE UAT-07 latest shape (msg_84ae0ce0 turnProjection) —
 * regression for exclusive gate/suite classification (UX-05).
 */
const E05_UAT07_REAL =
  "E05_UAT07_REAL Coordination lancement trois equipes sync revue";
register(
  E05_UAT07_REAL,
  dialogue(
    "Coordination à visualiser",
    "Trois équipes en parallèle, synchronisation des livrables, une revue commune, puis lancement envisagé — sans autorisation automatique.",
    ["NO_EFFECT", "VISUAL_PARALLEL", "UAT07_REAL"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "text",
            id: "uat07-intro",
            markdown:
              "### Organisation proposée\n\nTrois voies distinctes convergent vers une synchronisation unique, puis une revue commune avant le lancement envisagé.",
          },
          {
            kind: "relations",
            id: "uat07-latest",
            title: "Coordination à visualiser",
            layoutHint: "parallelProcess",
            nodes: [
              {
                id: "infrastructure",
                label: "Infrastructure",
                kind: "fact",
                laneId: "infrastructure",
              },
              { id: "metier", label: "Métier", kind: "fact", laneId: "metier" },
              {
                id: "accompagnement",
                label: "Accompagnement",
                kind: "fact",
                laneId: "accompagnement",
              },
              {
                id: "synchronisation",
                label: "Tous les livrables terminés",
                kind: "fact",
                laneId: "commun",
              },
              { id: "revue", label: "Revue commune", kind: "fact", laneId: "commun" },
              { id: "lancement", label: "Lancement", kind: "fact", laneId: "commun" },
            ],
            edges: [
              { from: "infrastructure", to: "synchronisation", relation: "sync" },
              { from: "metier", to: "synchronisation", relation: "sync" },
              { from: "accompagnement", to: "synchronisation", relation: "sync" },
              { from: "synchronisation", to: "revue", relation: "flow" },
              { from: "revue", to: "lancement", relation: "flow" },
            ],
            textAlternative:
              "Infrastructure, Métier et Accompagnement synchronisent leurs livrables, puis revue commune, puis lancement envisagé.",
          },
          {
            kind: "text",
            id: "uat07-reco",
            role: "recommendation",
            markdown:
              "**Recommandation**\n\nConserver une seule revue commune après synchronisation ; le lancement reste une décision humaine.",
          },
        ],
      },
    },
  ),
);

/** A4 — canonical overflow (>12k joined) must fail validation, never COMPLETE raw. */
const E05_A4_OVERFLOW = "E05_A4_OVERFLOW";
register(
  E05_A4_OVERFLOW,
  dialogue(
    "Overflow canonique A4",
    "TEXTE_INITIAL_DIVERGENT_NE_DOIT_PAS_SURVIVRE_EN_COMPLETE",
    ["NO_EFFECT", "A4_OVERFLOW"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [0, 1, 2, 3].map((i) => ({
          kind: "text" as const,
          id: `ov${i}`,
          markdown: "Z".repeat(3500),
        })),
      },
    },
  ),
);

/** A4 — valid canonical with deliberately divergent replyDraft (derive must win). */
const E05_A4_DIVERGENT_OK = "E05_A4_DIVERGENT_OK";
register(
  E05_A4_DIVERGENT_OK,
  dialogue(
    "Derive canonique A4",
    "TEXTE_DIVERGENT_INDEPENDANT_A_ECRASER",
    ["NO_EFFECT", "A4_DIVERGENT"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "text",
            id: "t1",
            markdown: "Prose canonique unique pour A4-01/A4-04.",
          },
        ],
      },
    },
  ),
);


/** R01 — Figma 01 editorial synthesis (FIXTURE / DEMONSTRATION). */
const E05_R01_SYNTHESIS = "E05_R01_SYNTHESIS";
register(
  E05_R01_SYNTHESIS,
  dialogue(
    "Synthèse stratégique Figma 01 (fixture)",
    "FIXTURE / DEMONSTRATION — synthèse éditoriale pour qualification visuelle Figma 01.",
    ["NO_EFFECT", "FIGMA_R01", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "synthesis",
            id: "r01-synth",
            title: "6 sites. Un même service.",
            headlineAccent: "Deux rythmes de déploiement.",
            lead:
              "Avant de décider, il faut distinguer le rythme de mise en œuvre des risques que chaque stratégie reporte sur les équipes. Voici les deux chemins que l'on peut comparer.",
            fixtureDemo: true,
            indicators: [
              { id: "i1", value: "600", label: "collaborateurs concernés" },
              { id: "i2", value: "6", label: "sites à équiper" },
              { id: "i3", value: "8 sem.", label: "fenêtre visée, à confirmer" },
            ],
            strategiesSectionTitle: "Deux stratégies, deux répartitions du risque",
            strategyCards: [
              {
                id: "b",
                eyebrow: "STRATÉGIE B",
                title: "Déployer site par site",
                summary: "Une vague courte, un retour terrain, puis la suivante.",
                positive: "Maîtrise progressive de la charge support",
                counterpart: "Contrepartie : coexistence des situations",
                accent: "blue",
              },
              {
                id: "c",
                eyebrow: "STRATÉGIE C",
                title: "Tester puis généraliser",
                summary: "Un site pilote avant une bascule plus concentrée.",
                positive: "Apprentissage initial avant déploiement",
                counterpart: "Contrepartie : pic support sur cinq sites",
                accent: "gold",
              },
            ],
            checklistSectionTitle: "Ce qui doit être vérifié avant tout choix",
            checklist: [
              {
                id: "k1",
                label: "Capacité support",
                detail: "Absorber les sollicitations pendant chaque vague.",
              },
              {
                id: "k2",
                label: "Retour arrière",
                detail: "Disposer d'une marche de reprise éprouvée.",
              },
              {
                id: "k3",
                label: "Dépendances",
                detail: "Qualifier les points communs entre les sites.",
              },
            ],
            orientation:
              "Privilégier le rythme progressif si la fenêtre de huit semaines le permet.",
            items: [
              {
                id: "obs1",
                label: "Contexte de démonstration",
                detail: "Données fictives pour reproduction Figma 01 — non projet.",
                tone: "observation",
              },
            ],
            textAlternative:
              "Synthèse fictive : deux stratégies B/C, trois indicateurs, checklist support/retour/dépendances, orientation conditionnelle.",
          },
        ],
      },
    },
  ),
);

/** R02 — Figma 02 horizontal journey + fixture timeline. */
const E05_R02_JOURNEY = "E05_R02_JOURNEY";
register(
  E05_R02_JOURNEY,
  dialogue(
    "Parcours et planning Figma 02 (fixture)",
    "FIXTURE / DEMONSTRATION — parcours horizontal et chronologie fictive Figma 02.",
    ["NO_EFFECT", "FIGMA_R02", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "sequence",
            id: "r02-seq",
            title: "Un déploiement en quatre temps.",
            headlineAccent: "Une progression sous conditions.",
            lead:
              "Ce chemin est une hypothèse de travail. Il précise les enchaînements à examiner, sans préjuger des dates réelles, des ressources disponibles ni des autorisations.",
            fixtureDemo: true,
            steps: [
              {
                id: "s1",
                title: "Qualifier",
                detail: "Accès, dépendances et services critiques.",
              },
              {
                id: "s2",
                title: "Préparer",
                detail: "Support, communication et retour arrière.",
              },
              {
                id: "s3",
                title: "Tester",
                detail: "Un site pilote, mesures et enseignements.",
              },
              {
                id: "s4",
                title: "Étendre",
                detail: "Vagues autorisées après vérification.",
              },
            ],
            timeline: {
              weeks: 8,
              caption:
                "Exemple de répartition hypothétique : aucune date ni charge n'est issue d'une source projet.",
              tracks: [
                {
                  id: "t1",
                  label: "Préparation",
                  startWeek: 1,
                  endWeek: 3,
                  barLabel: "Préparation",
                  tone: "blue",
                },
                {
                  id: "t2",
                  label: "Pilote sur un site",
                  startWeek: 3,
                  endWeek: 4,
                  barLabel: "Site pilote",
                  tone: "violet",
                },
                {
                  id: "t3",
                  label: "Sites restants",
                  startWeek: 5,
                  endWeek: 7,
                  barLabel: "Généralisation",
                  tone: "gold",
                },
                {
                  id: "t4",
                  label: "Stabilisation",
                  startWeek: 8,
                  endWeek: 8,
                  barLabel: "Clôture",
                  tone: "teal",
                },
              ],
            },
            closingNote:
              "Ne lancer aucune vague suivante sans contrôle réel des prérequis et du support.",
            textAlternative:
              "Parcours fictif en quatre étapes Cadrer/Qualifier/Préparer/Tester et chronologie 8 semaines de démonstration.",
          },
        ],
      },
    },
  ),
);

/** R03 — Figma 03 three adaptive comparison cards. */
const E05_R03_THREE_CARDS = "E05_R03_THREE_CARDS";
register(
  E05_R03_THREE_CARDS,
  dialogue(
    "Trois cartes comparatives Figma 03 (fixture)",
    "FIXTURE / DEMONSTRATION — trois options en cartes adaptatives.",
    ["NO_EFFECT", "FIGMA_R03", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "comparison",
            id: "r03-cmp",
            title: "Trois options. Une comparaison lisible.",
            lead:
              "Même famille graphique, mais des textes volontairement différents. Les cartes conservent leur hiérarchie sans figer les paragraphes à une longueur arbitraire.",
            fixtureDemo: true,
            alternatives: [
              {
                id: "a",
                title: "Livrer en séquences",
                summary:
                  "Approche progressive avec des retours rapides après chaque vague.",
                cons: ["Coexistence plus longue"],
              },
              {
                id: "b",
                title: "Déploiement accompagné",
                summary:
                  "Chaque site bénéficie d'une préparation renforcée, d'un relais métier et d'une période de stabilisation avant la poursuite. La charge reste répartie, mais le calendrier doit prévoir cette respiration.",
                cons: ["Dépendance à la capacité du support"],
              },
              {
                id: "c",
                title: "Généraliser après pilote",
                summary:
                  "Une phase d'essai identifie les difficultés communes, suivie d'une généralisation plus concentrée avec un niveau de préparation homogène.",
                cons: ["Concentration des sollicitations"],
              },
            ],
            editorialNote:
              "Trois options comparables : une vue en cartes fonctionne. La hauteur et les retours à la ligne sont dictés par le contenu, pas par Nora.",
            textAlternative:
              "Trois options fictives A/B/C en cartes — longueurs variables, vigilances distinctes.",
          },
        ],
      },
    },
  ),
);

/** R04 — Figma 04 five-option editorial matrix. */
const E05_R04_FIVE_MATRIX = "E05_R04_FIVE_MATRIX";
register(
  E05_R04_FIVE_MATRIX,
  dialogue(
    "Matrice cinq options Figma 04 (fixture)",
    "FIXTURE / DEMONSTRATION — matrice éditoriale à cinq options.",
    ["NO_EFFECT", "FIGMA_R04", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "comparison",
            id: "r04-mtx",
            title: "Cinq options. Une matrice éditoriale.",
            lead:
              "Quand les options se multiplient, la lecture en lignes reste plus claire qu'une grappe de cartes. Critères partagés, vigilance explicite.",
            fixtureDemo: true,
            alternatives: [
              {
                id: "a",
                title: "Séquences courtes",
                summary: "Vagues successives avec contrôle entre chaque site.",
              },
              {
                id: "b",
                title: "Pilote unique",
                summary: "Un site d'apprentissage avant extension.",
              },
              {
                id: "c",
                title: "Deux vagues",
                summary: "Regroupement partiel pour réduire la coexistence.",
              },
              {
                id: "d",
                title: "Accompagnement renforcé",
                summary: "Présence support locale pendant chaque bascule.",
              },
              {
                id: "e",
                title: "Bascule concentrée",
                summary: "Fenêtre unique après préparation homogène.",
              },
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
                  b: "Transfert d'apprentissage",
                  c: "Coordination des vagues",
                  d: "Disponibilité support",
                  e: "Préparation complète",
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
            editorialNote:
              "Matrice de démonstration — cinq options en lignes, critères en colonnes. Aucune option n'est retenue.",
            textAlternative:
              "Matrice fictive A–E : charge, vigilance et lecture Nora pour chaque option.",
          },
        ],
      },
    },
  ),
);

/** R05 — Figma 05 two stacked cards in constrained width. */
const E05_R05_STACKED = "E05_R05_STACKED";
register(
  E05_R05_STACKED,
  dialogue(
    "Deux cartes empilées Figma 05 (fixture)",
    "FIXTURE / DEMONSTRATION — comparaison empilée en largeur contrainte.",
    ["NO_EFFECT", "FIGMA_R05", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "comparison",
            id: "r05-stack",
            title: "Deux options. Une largeur contrainte.",
            lead:
              "En panneau étroit, les cartes s'empilent sans masquer les descriptions ni les vigilances.",
            fixtureDemo: true,
            alternatives: [
              {
                id: "a",
                title: "Progression maîtrisée",
                summary:
                  "Déploiement en séquences courtes avec vérification régulière après chaque vague et maintien d'un canal de retour arrière.",
                cons: ["Vigilance : durée de coexistence"],
              },
              {
                id: "b",
                title: "Généralisation après essai",
                summary:
                  "Un site pilote concentre l'apprentissage, puis une bascule plus large sur les sites restants lorsque les prérequis sont confirmés.",
                cons: ["Vigilance : concentration des sollicitations"],
              },
            ],
            editorialNote:
              "Variante empilée — contenu intégral conservé sous largeur Travail réduite.",
            textAlternative:
              "Deux options fictives empilées : progression maîtrisée vs généralisation après essai.",
          },
        ],
      },
    },
  ),
);

/** R06 — Figma 06 six editorial vertical steps. */
const E05_R06_SIX_STEPS = "E05_R06_SIX_STEPS";
register(
  E05_R06_SIX_STEPS,
  dialogue(
    "Six étapes éditoriales Figma 06 (fixture)",
    "FIXTURE / DEMONSTRATION — parcours vertical éditorial à six étapes.",
    ["NO_EFFECT", "FIGMA_R06", "FIXTURE_DEMO"],
    {
      visualComposition: {
        schemaVersion: "conversational-composition-canonical-v1",
        blocks: [
          {
            kind: "sequence",
            id: "r06-vert",
            title: "Un parcours en six temps.",
            headlineAccent: "Une lecture ordonnée, sans dates inventées.",
            lead:
              "Chaque étape précise un ordre de travail. Les dépendances restent sémantiques ; elles ne forcent pas un affichage de liens sous chaque titre.",
            fixtureDemo: true,
            steps: [
              {
                id: "t1",
                title: "Cadrer l'intention",
                detail: "Formuler le besoin et les contraintes connues.",
              },
              {
                id: "t2",
                title: "Cartographier les sites",
                detail: "Repérer les différences de maturité et de relais.",
              },
              {
                id: "t3",
                title: "Qualifier le support",
                detail: "Mesurer la capacité d'accompagnement réelle.",
              },
              {
                id: "t4",
                title: "Préparer le retour arrière",
                detail: "Documenter la marche de reprise avant toute vague.",
              },
              {
                id: "t5",
                title: "Conduire un pilote",
                detail: "Observer les frictions sur un périmètre limité.",
              },
              {
                id: "t6",
                title: "Étendre sous contrôle",
                detail: "N'ouvrir la suite qu'après vérification des prérequis.",
              },
            ],
            closingNote:
              "Fidélité de démonstration — six étapes éditoriales, sans chronologie chiffrée.",
            textAlternative:
              "Parcours vertical fictif en six étapes : cadrer, cartographier, qualifier, préparer, piloter, étendre.",
          },
        ],
      },
    },
  ),
);


/** Short TEST_BOUNDARY keys for e2e (exact match, same envelopes as the natural utterances). */
for (const [short, long] of [
  ["E05_S2_DIAGNOSTIC", E05_S2_DIAGNOSTIC],
  ["E05_S3_COMPARISON", E05_S3_COMPARISON],
  ["E05_S4_TRAJECTORY", E05_S4_TRAJECTORY],
  ["E05_S5_COMPOSITE", E05_S5_COMPOSITE],
  ["E05_S7_INSUFFICIENT", E05_S7_INSUFFICIENT],
  ["E05_F5_DECISION_TREE", E05_F5_DECISION_TREE],
  ["E05_F5_PARALLEL", E05_F5_PARALLEL],
  ["E05_G07_DEPENDENCIES", E05_G07_DEPENDENCIES],
  ["E05_G08_TREE", E05_G08_TREE],
  ["E05_G09_PARALLEL", E05_G09_PARALLEL],
  ["E05_UAT07_REAL", E05_UAT07_REAL],
  ["E05_R01_SYNTHESIS", E05_R01_SYNTHESIS],
  ["E05_R02_JOURNEY", E05_R02_JOURNEY],
  ["E05_R03_THREE_CARDS", E05_R03_THREE_CARDS],
  ["E05_R04_FIVE_MATRIX", E05_R04_FIVE_MATRIX],
  ["E05_R05_STACKED", E05_R05_STACKED],
  ["E05_R06_SIX_STEPS", E05_R06_SIX_STEPS],
  ["E05_A4_OVERFLOW", E05_A4_OVERFLOW],
  ["E05_A4_DIVERGENT_OK", E05_A4_DIVERGENT_OK],
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
