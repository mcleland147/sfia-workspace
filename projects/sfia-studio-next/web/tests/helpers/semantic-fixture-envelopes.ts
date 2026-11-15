/**
 * TEST_BOUNDARY ONLY — typed NoraTurnQualification builders for PG/integration fixtures.
 * Not a production router. Unknown live utterances stay fail-closed in fixtureSemanticQualify.
 */
import { registerFixtureScenario } from "@/domains/conversation/fixture-semantic-qualify";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  validateNoraTurnQualification,
  type NoraTurnQualification,
  type QualifiedIntentItem,
  type StudioCapabilityId,
} from "@/domains/conversation/semantic-qualification";
import type { CycleType } from "@/domains/pilotage/cki-resolve";
import type { PilotageOperation } from "@/domains/pilotage/types";
import type { IntentQualification } from "@/domains/pilotage/intent";

type IntentDraft = Partial<Pick<QualifiedIntentItem, "id">> &
  Omit<QualifiedIntentItem, "id" | "parameters" | "constraints" | "dependsOn" | "sourceEvidence"> & {
    parameters?: QualifiedIntentItem["parameters"];
    constraints?: string[];
    dependsOn?: string[];
    sourceEvidence?: string[];
  };

function assertValid(q: NoraTurnQualification): NoraTurnQualification {
  const v = validateNoraTurnQualification(q);
  if (!v.ok) {
    throw new Error(`semantic fixture envelope invalid: ${v.reason}`);
  }
  return v.value;
}

function normalizeIntents(intents: IntentDraft[]): QualifiedIntentItem[] {
  return intents.map((it, idx) => ({
    id: it.id ?? `i${idx + 1}`,
    capabilityId: it.capabilityId,
    mode: it.mode,
    summary: it.summary,
    parameters: it.parameters ?? {},
    constraints: it.constraints ?? [],
    dependsOn: it.dependsOn ?? [],
    sourceEvidence: it.sourceEvidence ?? [],
  }));
}

export function sfiaDocumentFence(title: string, body = "Contenu de synthèse déterministe."): string {
  return (
    "```sfia-document\n" +
    `# ${title}\n\n` +
    `## Section 1 — Contexte\n\n${body}\n\n` +
    `## Section 2 — Analyse\n\nPoints d'analyse.\n\n` +
    `## Section 3 — Suite\n\nPoints ouverts.\n` +
    "```\n"
  );
}

export function dialogueEnvelope(
  goal: string,
  reply: string,
  constraints: string[] = ["NO_EFFECT"],
): NoraTurnQualification {
  return assertValid({
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
    intents: normalizeIntents([
      {
        capabilityId: "d3.converse",
        mode: "EXPLORE",
        summary: goal,
        constraints,
      },
    ]),
    clarifications: [],
    replyDraft: reply,
  });
}

export function clarificationEnvelope(goal: string, clarifications: string[], reply: string): NoraTurnQualification {
  return assertValid({
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "NEEDS_CLARIFICATION",
    goal,
    intents: [],
    clarifications,
    replyDraft: reply,
  });
}

export function effectEnvelope(
  goal: string,
  reply: string,
  intents: IntentDraft[],
): NoraTurnQualification {
  return assertValid({
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal,
    intents: normalizeIntents(intents),
    clarifications: [],
    replyDraft: reply,
  });
}

export function d2CreateProjectEnvelope(opts: {
  projectName: string;
  reply?: string;
  followOnDocument?: { summary: string; notes?: string };
}): NoraTurnQualification {
  const intents: IntentDraft[] = [
    {
      id: "i1",
      capabilityId: "d2.create_project",
      mode: "REQUEST_EFFECT",
      summary: `Créer ${opts.projectName}`,
      parameters: { projectName: opts.projectName },
    },
  ];
  if (opts.followOnDocument) {
    intents.push({
      id: "i2",
      capabilityId: "d4.create_document",
      mode: "REQUEST_EFFECT",
      summary: opts.followOnDocument.summary,
      parameters: { notes: opts.followOnDocument.notes ?? opts.followOnDocument.summary },
      dependsOn: ["i1"],
    });
  }
  return effectEnvelope(
    opts.followOnDocument ? `${opts.projectName} + document` : `Créer ${opts.projectName}`,
    opts.reply ??
      (opts.followOnDocument
        ? `Intention composée : projet ${opts.projectName} puis document.`
        : `Je prépare l'intention de création de projet ${opts.projectName} — acte Pilote requis.`),
    intents,
  );
}

export function d4CreateDocumentEnvelope(opts: {
  summary: string;
  title: string;
  notes?: string;
  includeFence?: boolean;
  replyExtra?: string;
}): NoraTurnQualification {
  const fence =
    opts.includeFence === false
      ? ""
      : sfiaDocumentFence(opts.title, opts.notes ?? opts.summary);
  return effectEnvelope(
    `Créer document ${opts.title}`,
    `${opts.replyExtra ?? ""}${fence}`.trim() || `Document ${opts.title}`,
    [
      {
        capabilityId: "d4.create_document",
        mode: "REQUEST_EFFECT",
        summary: opts.summary,
        parameters: { notes: opts.notes ?? opts.summary, documentHint: opts.title },
      },
    ],
  );
}

export function d4ReviseDocumentEnvelope(opts: {
  summary: string;
  documentHint: string;
  sectionHint?: string;
  reply?: string;
  includeFence?: boolean;
}): NoraTurnQualification {
  const fence =
    opts.includeFence === false
      ? ""
      : sfiaDocumentFence(opts.documentHint, `Révision ${opts.sectionHint ?? "section"}.`);
  return effectEnvelope(
    `Réviser ${opts.documentHint}`,
    opts.reply ?? fence,
    [
      {
        capabilityId: "d4.revise_document",
        mode: "REQUEST_EFFECT",
        summary: opts.summary,
        parameters: {
          documentHint: opts.documentHint,
          sectionHint: opts.sectionHint,
        },
      },
    ],
  );
}

export function d4CreateAndPublishEnvelope(opts: {
  title: string;
  summary: string;
  publicationPath?: string | null;
  includeFence?: boolean;
}): NoraTurnQualification {
  const fence =
    opts.includeFence === false
      ? ""
      : sfiaDocumentFence(opts.title, opts.summary);
  const intents: IntentDraft[] = [
    {
      id: "i1",
      capabilityId: "d4.create_document",
      mode: "REQUEST_EFFECT",
      summary: opts.summary,
      parameters: { notes: opts.summary, documentHint: opts.title },
    },
  ];
  intents.push({
    id: "i2",
    capabilityId: "d7.prepare_publication",
    mode: "REQUEST_EFFECT",
    summary: "Préparer publication",
    parameters: opts.publicationPath
      ? { publicationPath: opts.publicationPath }
      : {},
    dependsOn: ["i1"],
  });
  return effectEnvelope(`Document + publication ${opts.title}`, fence, intents);
}

export function d5PilotageEnvelope(opts: {
  operation: PilotageOperation;
  cycleType?: string;
  toCycleType?: string;
  objective?: string;
  reply?: string;
}): NoraTurnQualification {
  return effectEnvelope(
    `Pilotage ${opts.operation}`,
    opts.reply ?? `Intention ${opts.operation} — vérification propriétaire D5.`,
    [
      {
        capabilityId: "d5.pilotage_command",
        mode: "REQUEST_EFFECT",
        summary: opts.objective ?? opts.operation,
        parameters: {
          pilotageOperation: opts.operation,
          cycleType: opts.cycleType,
          toCycleType: opts.toCycleType,
        },
      },
    ],
  );
}

export function d6DecisionEnvelope(opts: {
  operation: PilotageOperation;
  statement?: string;
  objectRef?: string;
  decisionId?: string;
  restrictionKindHint?: string;
  restrictionTargetRefHint?: string;
  reply?: string;
}): NoraTurnQualification {
  return effectEnvelope(
    `Décision ${opts.operation}`,
    opts.reply ?? `Intention ${opts.operation} — vérification propriétaire D6.`,
    [
      {
        capabilityId: "d6.human_decision",
        mode: "REQUEST_EFFECT",
        summary: opts.statement ?? opts.operation,
        parameters: {
          pilotageOperation: opts.operation,
          statement: opts.statement,
          objectRef: opts.objectRef,
          decisionId: opts.decisionId,
          restrictionKindHint: opts.restrictionKindHint,
          restrictionTargetRefHint: opts.restrictionTargetRefHint,
        },
      },
    ],
  );
}

export function d5ThenD4Envelope(opts: {
  cycleType: string;
  documentTitle: string;
  documentSummary: string;
}): NoraTurnQualification {
  const fence = sfiaDocumentFence(opts.documentTitle, opts.documentSummary);
  return effectEnvelope(
    `Cycle ${opts.cycleType} + document`,
    fence,
    [
      {
        id: "i1",
        capabilityId: "d5.pilotage_command",
        mode: "REQUEST_EFFECT",
        summary: `OPEN_CYCLE ${opts.cycleType}`,
        parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: opts.cycleType },
      },
      {
        id: "i2",
        capabilityId: "d4.create_document",
        mode: "REQUEST_EFFECT",
        summary: opts.documentSummary,
        parameters: { notes: opts.documentSummary, documentHint: opts.documentTitle },
        dependsOn: ["i1"],
      },
    ],
  );
}

/** Register exact utterance → validated envelope (TEST_BOUNDARY / DEV+E2E). */
export function registerTypedScenario(utterance: string, q: NoraTurnQualification): void {
  registerFixtureScenario(utterance, assertValid(q));
}

/** Convert CLEAR IntentQualification for applyConversationalAuthority(preQualified). */
export function clearPilotagePreQualified(input: {
  operation: PilotageOperation;
  cycleType?: string;
  toCycleType?: string;
  statement?: string;
  objectRef?: string;
  decisionId?: string;
  objective?: string;
  restrictionKindHint?: string;
  restrictionTargetRefHint?: string;
  semanticIntentId?: string;
}): IntentQualification {
  return {
    clarity: "CLEAR",
    operation: input.operation,
    cycleType: input.cycleType as CycleType | undefined,
    toCycleType: input.toCycleType as CycleType | undefined,
    statement: input.statement,
    objectRef: input.objectRef,
    decisionId: input.decisionId,
    objective: input.objective ?? input.statement ?? input.operation,
    restrictionKindHint: input.restrictionKindHint,
    restrictionTargetRefHint: input.restrictionTargetRefHint,
    semanticIntentId: input.semanticIntentId ?? "i1",
    semanticSchemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  };
}

export function ambiguousPilotagePreQualified(reason: string): IntentQualification {
  return { clarity: "AMBIGUOUS", reason };
}

/**
 * Explicit TEST_BOUNDARY registration — utterance is the exact key only.
 * Capability / targets come from opts, never from regex inference on the text.
 */
export type ExplicitFixtureSpec =
  | { kind: "dialogue"; reply?: string; constraints?: string[] }
  | {
      kind: "d2";
      projectName: string;
      documentSummary?: string;
      reply?: string;
    }
  | {
      kind: "d4_create";
      title: string;
      summary?: string;
      notes?: string;
      includeFence?: boolean;
    }
  | {
      kind: "d4_revise";
      documentHint: string;
      sectionHint?: string;
      includeFence?: boolean;
      reply?: string;
    }
  | {
      kind: "d4_publish";
      title: string;
      publicationPath?: string | null;
      includeFence?: boolean;
    }
  | {
      kind: "d5";
      operation: PilotageOperation;
      cycleType?: string;
      toCycleType?: string;
      objective?: string;
    }
  | {
      kind: "d5_then_d4";
      cycleType: string;
      documentTitle: string;
      documentSummary: string;
    }
  | { kind: "qualification"; q: NoraTurnQualification };

export function registerExplicitFixture(utterance: string, spec: ExplicitFixtureSpec): void {
  const t = utterance.trim();
  switch (spec.kind) {
    case "dialogue":
      registerTypedScenario(
        t,
        dialogueEnvelope(
          t,
          spec.reply ?? "Réponse fixture — exploration sans effet.",
          spec.constraints ?? ["NO_EFFECT"],
        ),
      );
      return;
    case "d2":
      registerTypedScenario(
        t,
        d2CreateProjectEnvelope({
          projectName: spec.projectName,
          reply: spec.reply,
          followOnDocument: spec.documentSummary
            ? { summary: spec.documentSummary, notes: spec.documentSummary }
            : undefined,
        }),
      );
      return;
    case "d4_create":
      registerTypedScenario(
        t,
        d4CreateDocumentEnvelope({
          title: spec.title,
          summary: spec.summary ?? spec.title,
          notes: spec.notes ?? spec.summary ?? spec.title,
          includeFence: spec.includeFence,
        }),
      );
      return;
    case "d4_revise":
      registerTypedScenario(
        t,
        d4ReviseDocumentEnvelope({
          summary: "Révision documentaire",
          documentHint: spec.documentHint,
          sectionHint: spec.sectionHint,
          includeFence: spec.includeFence,
          reply: spec.reply,
        }),
      );
      return;
    case "d4_publish":
      registerTypedScenario(
        t,
        d4CreateAndPublishEnvelope({
          title: spec.title,
          summary: spec.title,
          publicationPath: spec.publicationPath,
          includeFence: spec.includeFence,
        }),
      );
      return;
    case "d5":
      registerTypedScenario(
        t,
        d5PilotageEnvelope({
          operation: spec.operation,
          cycleType: spec.cycleType,
          toCycleType: spec.toCycleType,
          objective: spec.objective,
        }),
      );
      return;
    case "d5_then_d4":
      registerTypedScenario(
        t,
        d5ThenD4Envelope({
          cycleType: spec.cycleType,
          documentTitle: spec.documentTitle,
          documentSummary: spec.documentSummary,
        }),
      );
      return;
    case "qualification":
      registerTypedScenario(t, spec.q);
      return;
    default: {
      const _exhaustive: never = spec;
      void _exhaustive;
      throw new Error("explicit fixture kind inconnu");
    }
  }
}

/** @deprecated Use registerExplicitFixture with kind:"d2" — kept name for call-site clarity. */
export function registerNamedProjectCreate(
  utterance: string,
  opts: { projectName: string; documentSummary?: string; reply?: string },
): void {
  registerExplicitFixture(utterance, {
    kind: "d2",
    projectName: opts.projectName,
    documentSummary: opts.documentSummary,
    reply: opts.reply,
  });
}

/** @deprecated Use registerExplicitFixture with kind:"d4_create"|"d4_publish". */
export function registerCreateDocumentTitled(
  utterance: string,
  opts: {
    title: string;
    publicationPath?: string | null;
    includeFence?: boolean;
    publish?: boolean;
  },
): void {
  if (opts.publish || opts.publicationPath !== undefined) {
    registerExplicitFixture(utterance, {
      kind: "d4_publish",
      title: opts.title,
      publicationPath: opts.publicationPath,
      includeFence: opts.includeFence,
    });
    return;
  }
  registerExplicitFixture(utterance, {
    kind: "d4_create",
    title: opts.title,
    includeFence: opts.includeFence,
  });
}

export type { NoraTurnQualification, StudioCapabilityId, PilotageOperation };
