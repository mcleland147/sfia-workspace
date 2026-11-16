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
    | "desiredOutcome"
    | "initialScope"
    | "proposedProjectName"
    | "clarifications"
    | "preparationAssessment"
    | "preparationAssessmentExplanation"
  >
>;

function dialogue(
  goal: string,
  reply: string,
  constraints: string[] = [],
  extras?: QualExtras,
): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
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
    clarifications: extras?.clarifications ?? [],
    replyDraft: reply,
    preparationAssessment: extras?.preparationAssessment,
    preparationAssessmentExplanation: extras?.preparationAssessmentExplanation,
  };
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
      clarifications: [
        "Quelle difficulté concrète voulez-vous réduire en premier pour les chefs de projet ?",
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
    "Retrouver les décisions importantes et savoir quoi faire ensuite",
    "Vous visez surtout à retrouver les décisions importantes et à savoir quoi faire ensuite. C'est un résultat clair : continuité des décisions et des prochaines actions. Le périmètre exact (personnel / équipe) reste ouvert.",
    ["NO_EFFECT"],
    {
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      clarifications: [
        "Souhaitez-vous commencer seul, ou le travail en équipe fait-il déjà partie du premier périmètre ?",
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
    "Espace personnel : décisions, points ouverts, prochaines actions",
    "Premier périmètre : un espace personnel avec décisions, points ouverts et prochaines actions. Le travail en équipe est une piste ultérieure, pas une décision immédiate. Nom de travail proposé : Assistant de pilotage. Cette base me paraît suffisante pour démarrer si vous le souhaitez.",
    ["NO_EFFECT", "PROPOSAL_ONLY"],
    {
      proposedProjectName: "Assistant de pilotage",
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      initialScope:
        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
      clarifications: [],
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation:
        "Intention, résultat et un premier périmètre personnel sont assez clairs pour démarrer. La collaboration d'équipe reste hors du périmètre immédiat.",
    },
  ),
);

register(
  SAS_MATURATION_T4,
  // Dialogue (no REQUEST_EFFECT): name correction; create remains an explicit D2 Pilot act.
  dialogue(
    "Espace personnel de pilotage nommé Cockpit projets",
    "Correction prise en compte : le nom de travail est Cockpit projets (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.",
    ["NAME_CORRECTION", "NO_EFFECT"],
    {
      proposedProjectName: "Cockpit projets",
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      initialScope:
        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
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
    `Espace personnel de pilotage nommé ${name}`,
    `Correction prise en compte : le nom de travail est ${name} (et non Assistant de pilotage). Le reste de la proposition (résultat et périmètre personnel) est conservé.`,
    ["NAME_CORRECTION", "NO_EFFECT"],
    {
      proposedProjectName: name,
      desiredOutcome: "Retrouver les décisions importantes et savoir quoi faire ensuite",
      initialScope:
        "Espace personnel : décisions, points ouverts, prochaines actions (équipe plus tard)",
      preparationAssessment: "BASE_SUFFICIENTE",
      preparationAssessmentExplanation: `Après correction du nom, la base reste suffisante pour démarrer : résultat et périmètre personnel sont acquis ; le nom inspecté est ${name}.`,
    },
  );
}

function cockpitNamedQualification(projectName: string): NoraTurnQualification {
  const name = projectName.trim().slice(0, 120);
  return dialogue(
    "Cockpit de suivi des projets",
    `Je comprends : un cockpit pour suivre vos projets, en commençant par le portefeuille et les risques. Nom de travail proposé : ${name}. Cette base me paraît suffisante pour démarrer ; les détails pourront se préciser ensuite.`,
    ["NO_EFFECT", "PROPOSAL_ONLY"],
    {
      proposedProjectName: name,
      desiredOutcome: "Voir portefeuille et risques en un seul endroit",
      initialScope: "Portefeuille et risques en premier",
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

/** Test helper — register an exact utterance → envelope without regex. */
export function registerFixtureScenario(utterance: string, q: NoraTurnQualification): void {
  assertFixtureLane();
  register(utterance, q);
}

const MATURATION_RENAME_RE =
  /^Je préfère l'appeler (.+?) plutôt qu'Assistant de pilotage\.$/;
const COCKPIT_NAMED_RE =
  /^Je veux un cockpit pour suivre mes projets, d'abord le portefeuille et les risques, nommé (.+)\.$/;

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
  // Fail closed: unknown fixture text is dialogue-only, never a lexical invent of effects.
  return dialogue(
    "Dialogue fixture par défaut",
    "Message reçu. Aucune intention d'effet n'a été reconnue dans ce scénario de fixture.",
    ["FIXTURE_DEFAULT_NO_EFFECT"],
  );
}
