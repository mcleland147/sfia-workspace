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

function dialogue(goal: string, reply: string, constraints: string[] = []): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
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
    clarifications: [],
    replyDraft: reply,
  };
}

function effect(
  goal: string,
  reply: string,
  intents: Array<Partial<Pick<QualifiedIntentItem, "id">> & Omit<QualifiedIntentItem, "id">>,
): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
    intents: intents.map((it, idx) => ({
      ...it,
      id: it.id ?? `i${idx + 1}`,
      parameters: it.parameters ?? {},
      constraints: it.constraints ?? [],
      dependsOn: it.dependsOn ?? [],
      sourceEvidence: it.sourceEvidence ?? [],
    })),
    clarifications: [],
    replyDraft: reply,
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
    effect("Créer un projet", "Je prépare l'intention de création de projet — acte Pilote requis.", [
      {
        capabilityId: "d2.create_project",
        mode: "REQUEST_EFFECT",
        summary: "Création de projet",
        parameters: {},
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ]),
  );
}

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

export function fixtureSemanticQualify(userText: string): NoraTurnQualification {
  assertFixtureLane();
  const text = normalizeUtterance(userText);
  if (!text) return unavailableQualification("EMPTY_USER_TEXT");
  const hit = SCENARIO_TABLE.get(text);
  if (hit) {
    return structuredClone(hit);
  }
  // Fail closed: unknown fixture text is dialogue-only, never a lexical invent of effects.
  return dialogue(
    "Dialogue fixture par défaut",
    "Message reçu. Aucune intention d'effet n'a été reconnue dans ce scénario de fixture.",
    ["FIXTURE_DEFAULT_NO_EFFECT"],
  );
}
