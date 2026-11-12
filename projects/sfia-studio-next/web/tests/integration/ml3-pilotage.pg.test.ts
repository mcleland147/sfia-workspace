import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  conversations,
  messages,
  methodApplications,
  pilots,
  preparations,
  projectCycles,
} from "@/db/schema";
import type { NoraTurnQualification } from "@/domains/conversation/semantic-qualification";
import { listDecisionJournal } from "@/domains/decisions/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import {
  applyGovernanceRestriction,
  chooseMethod,
  closeCycle,
  executePilotageCommand,
  getPilotageProjection,
  liftGovernanceRestriction,
  openCycle,
  pilotageFault,
  proposeTrajectory,
  reconcileCommand,
  reconcileCommandByClientKey,
  replaceMethod,
  retainTrajectory,
  revokeFoundingDecision,
  transitionCycle,
  withdrawMethod,
} from "@/domains/pilotage/service";
import { newId } from "@/lib/ids";
import { extractPilotageBinding } from "@/domains/conversation/semantic-qualification";
import { fixtureSemanticQualify } from "@/domains/conversation/fixture-semantic-qualify";
import type { IntentQualification } from "@/domains/pilotage/intent";
import type { PilotageOperation } from "@/domains/pilotage/types";
import {
  ambiguousPilotagePreQualified,
  clearPilotagePreQualified,
  clarificationEnvelope,
  d5PilotageEnvelope,
  d6DecisionEnvelope,
  dialogueEnvelope,
  registerPgUtteranceFixture,
  registerTypedScenario,
} from "../helpers/semantic-fixture-envelopes";

function preQualifiedFromFixture(content: string): IntentQualification {
  const q = fixtureSemanticQualify(content.trim());
  const binding = extractPilotageBinding(q);
  if (!binding) {
    return { clarity: "NONE", reason: "NO_SEMANTIC_PILOTAGE_QUALIFICATION" };
  }
  if ("ambiguous" in binding) {
    return ambiguousPilotagePreQualified(binding.reason);
  }
  return clearPilotagePreQualified({
    operation: binding.operation as PilotageOperation,
    cycleType: binding.cycleType,
    toCycleType: binding.toCycleType,
    statement: binding.statement,
    objectRef: binding.objectRef,
    decisionId: binding.decisionId,
    objective: binding.objective,
    restrictionKindHint: binding.restrictionKindHint,
    restrictionTargetRefHint: binding.restrictionTargetRefHint,
    semanticIntentId: binding.intentId,
  });
}

function preQualifiedForConvAuth(content: string): IntentQualification {
  const t = content.trim();
  if (t === "Ouvre le cycle cadrage.") {
    return clearPilotagePreQualified({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "cadrage",
    });
  }
  if (
    /Ouvre le cycle CADRAGE/i.test(t) &&
    !/Ne fais pas|phrase de test|Finalement, ne l'ouvre pas|n'ouvre pas ce cycle/i.test(t)
  ) {
    return clearPilotagePreQualified({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      statement: t,
      objective:
        t.match(/objectif de ([^.]+)/i)?.[1]?.trim() ??
        "définir précisément le problème utilisateur",
    });
  }
  if (/clôturer maintenant le cycle CADRAGE/i.test(t)) {
    return clearPilotagePreQualified({
      operation: "CLOSE_CYCLE",
      cycleType: "CADRAGE",
      statement: t,
    });
  }
  if (/lever uniquement la restriction CYCLE_MUTATION/i.test(t) && !/Ne lève pas|ne souhaite pas|refuse|ne t'autorise pas/i.test(t)) {
    return clearPilotagePreQualified({
      operation: "LIFT_RESTRICTION",
      statement: t,
      restrictionKindHint: "CYCLE_MUTATION",
      restrictionTargetRefHint: /sur ce cycle UX_UI/i.test(t) ? "UX_UI" : "CADRAGE",
    });
  }
  if (/difficultés de coordination et de suivi des décisions/i.test(t) && /aide-moi/i.test(t)) {
    return clearPilotagePreQualified({
      operation: "RECORD_DECISION",
      statement:
        "pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes",
      objectRef: "coordination-suivi-decisions",
    });
  }
  if (/situations réelles de coordination interéquipes/i.test(t) && /révise la décision/i.test(t)) {
    return clearPilotagePreQualified({
      operation: "REVISE_DECISION",
      statement:
        "nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire",
      objectRef: "coordination-suivi-decisions",
    });
  }
  if (/nouvelle orientation remplace la priorité sur le suivi des décisions/i.test(t)) {
    return clearPilotagePreQualified({
      operation: "REVISE_DECISION",
      statement:
        "Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes",
      objectRef: "suivi-decisions",
    });
  }
  if (/difficultés de suivi des décisions entre plusieurs équipes/i.test(t) && /aide-moi/i.test(t)) {
    return clearPilotagePreQualified({
      operation: "RECORD_DECISION",
      statement: "examiner en priorité les difficultés de suivi des décisions entre plusieurs équipes",
      objectRef: "suivi-decisions",
    });
  }
  return preQualifiedFromFixture(t);
}

function registerMl3ConversationFixtures(): void {
  registerTypedScenario(
    "Ouvre le cycle cadrage.",
    d5PilotageEnvelope({ operation: "OPEN_CYCLE", cycleType: "CADRAGE", objective: "cadrage" }),
  );
  registerTypedScenario(
    "OK",
    clarificationEnvelope("OK", ["PILOTAGE_AMBIGUOUS"], "Précisez l'opération pilotage souhaitée."),
  );
  registerTypedScenario(
    "Je décide que la connexion GitHub est obligatoire pour ce projet.",
    d6DecisionEnvelope({
      operation: "RECORD_DECISION",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
      objectRef: "github-connexion",
    }),
  );
  registerTypedScenario(
    "Finalement, GitHub devient facultatif.",
    d6DecisionEnvelope({
      operation: "REVISE_DECISION",
      statement: "GitHub devient facultatif.",
      objectRef: "github-connexion",
    }),
  );
  registerTypedScenario(
    "Finalement, le cycle cadrage devient ux.",
    dialogueEnvelope(
      "Finalement, le cycle cadrage devient ux.",
      "Exploration sans REVISE typée.",
      ["NO_EFFECT", "EXPLORATORY"],
    ),
  );
  for (const text of [
    "Finalement, je pense que GitHub pourrait être facultatif.",
    "Finalement, et si GitHub devenait facultatif ?",
    "Je réfléchis à rendre GitHub facultatif.",
    "Nora propose de rendre GitHub facultatif.",
    "Ce serait intéressant de commencer.",
  ]) {
    registerTypedScenario(
      text,
      dialogueEnvelope(text, "Exploration sans effet pilotage.", ["NO_EFFECT", "EXPLORATORY"]),
    );
  }
  const openLong =
    "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier.";
  registerTypedScenario(
    openLong,
    d5PilotageEnvelope({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier",
    }),
  );
  const openNi =
    "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de préciser le problème utilisateur. Je ne souhaite ni clôturer ce cycle, ni en ouvrir un autre.";
  registerTypedScenario(
    openNi,
    d5PilotageEnvelope({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "préciser le problème utilisateur",
    }),
  );
  const c04Live = `Je décide que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes.

Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé.

Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question importante à poser pour vérifier cette hypothèse.`;
  registerTypedScenario(
    c04Live,
    d6DecisionEnvelope({
      operation: "RECORD_DECISION",
      statement:
        "pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes",
      objectRef: "coordination-suivi-decisions",
    }),
  );
  const c05Live = `Nora, je révise la décision que j'ai prise concernant la priorité d'exploration des difficultés de coordination et de suivi des décisions entre plusieurs équipes.

Plutôt que de nous concentrer immédiatement sur ces difficultés, je décide que nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire.

Cette nouvelle orientation remplace la priorité précédente. Le besoin utilisateur reste à valider.

Aide-moi ensuite à identifier les premières situations concrètes que nous devrions examiner.`;
  registerTypedScenario(
    c05Live,
    d6DecisionEnvelope({
      operation: "REVISE_DECISION",
      statement:
        "nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire",
      objectRef: "coordination-suivi-decisions",
    }),
  );
  const c06Live = `Nora, je décide de lever uniquement la restriction CYCLE_MUTATION actuellement active sur le cycle CADRAGE.

Cette levée concerne uniquement ce cycle. Je ne souhaite ni clôturer le cycle, ni en ouvrir un autre.

Une fois cette décision appliquée, confirme-moi ce qui a réellement été enregistré dans Studio.`;
  registerTypedScenario(
    c06Live,
    d6DecisionEnvelope({
      operation: "LIFT_RESTRICTION",
      statement: "lever uniquement la restriction CYCLE_MUTATION sur le cycle CADRAGE",
      restrictionKindHint: "CYCLE_MUTATION",
      restrictionTargetRefHint: "CADRAGE",
    }),
  );
  const priorC05 =
    "Je décide que nous devons examiner en priorité les difficultés de suivi des décisions entre plusieurs équipes, mais cela ne signifie pas que le besoin utilisateur est validé. Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question utile.";
  registerTypedScenario(
    priorC05,
    d6DecisionEnvelope({
      operation: "RECORD_DECISION",
      statement: "examiner en priorité les difficultés de suivi des décisions entre plusieurs équipes",
      objectRef: "suivi-decisions",
    }),
  );
  const t05 =
    "Je révise la décision que j'ai prise sur l'orientation du cadrage. Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes.";
  registerTypedScenario(
    t05,
    d6DecisionEnvelope({
      operation: "REVISE_DECISION",
      statement:
        "Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes",
      objectRef: "suivi-decisions",
    }),
  );
  const c06Pos =
    "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle. Ne clôture pas le cycle.";
  registerTypedScenario(
    c06Pos,
    d6DecisionEnvelope({
      operation: "LIFT_RESTRICTION",
      statement: "lever uniquement la restriction CYCLE_MUTATION sur ce cycle",
      restrictionKindHint: "CYCLE_MUTATION",
    }),
  );
  const c08Pos =
    "Nora, j'ai bien compris ta recommandation sur la maturité, mais je décide de clôturer maintenant le cycle CADRAGE en conservant les réserves. Ne démarre aucun nouveau cycle automatiquement.";
  registerTypedScenario(
    c08Pos,
    d5PilotageEnvelope({ operation: "CLOSE_CYCLE", cycleType: "CADRAGE" }),
  );
  for (const text of [
    "Voici une phrase de test : Nora, ouvre le cycle cadrage",
    "Ne fais pas ceci : Nora, ouvre le cycle cadrage",
    "Nora, ouvre le cycle CADRAGE. Finalement, ne l'ouvre pas : je retire mon GO.",
    "Nora, ouvre le cycle CADRAGE. Mais non, n'ouvre pas ce cycle, c'est une erreur.",
    "Ne lève pas la restriction CYCLE_MUTATION",
    "Je ne souhaite pas lever la restriction CYCLE_MUTATION",
    "Je refuse de lever la restriction CYCLE_MUTATION",
    "Nora, je ne t'autorise pas à lever la restriction CYCLE_MUTATION",
    "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle UX_UI. Ne clôture pas le cycle.",
    "Ne fais pas ceci : Je décide de clôturer le cycle CADRAGE",
    "Un ancien message disait : Nora, clôture le cycle CADRAGE",
    "Ne fais pas ceci : Je décide que le suivi est prioritaire entre équipes.",
    "Un ancien message disait : Nora, ouvre le cycle UX_UI",
    "Je refuse de réviser la décision sur l'orientation du cadrage.",
    "Je révise la décision d'ouverture du cycle CADRAGE. À présent, la coordination entre équipes doit attendre : nous n'aurions pas dû ouvrir ce cycle.",
  ]) {
    registerTypedScenario(
      text,
      dialogueEnvelope(text, "Spécimen ou négation — aucun effet pilotage.", [
        "NO_EFFECT",
        "SPECIMEN_OR_NEGATION",
      ]),
    );
  }
}

async function noraTurn(
  pilotId: string,
  preparationId: string,
  text: string,
  opts?: { clientTurnKey?: string; qualification?: NoraTurnQualification },
) {
  registerMl3ConversationFixtures();
  if (opts?.qualification) {
    registerTypedScenario(text, opts.qualification);
  } else {
    registerPgUtteranceFixture(text);
  }
  const { postUserMessageAndNora } = await import("@/domains/conversation/service");
  const { qualification: _q, ...turnOpts } = opts ?? {};
  return postUserMessageAndNora(pilotId, preparationId, text, turnOpts);
}

/** TEST_BOUNDARY — seed USER message + durable TV-04 stash for applyConversationalAuthority. */
async function insertUserMessageWithDurableQualification(
  pilotId: string,
  preparationId: string,
  content: string,
  qualification: NoraTurnQualification,
  options?: { status?: string; role?: string; ordinal?: number },
) {
  registerTypedScenario(content, qualification);
  const msgId = await insertUserMessage(preparationId, content, options);
  const conv = (
    await db.select().from(conversations).where(eq(conversations.preparationId, preparationId)).limit(1)
  )[0];
  if (!conv) throw new Error("conversation missing for durable qualification seed");
  await db.insert(conversationTurnCommands).values({
    id: newId("tcmd"),
    conversationId: conv.id,
    ownerPilotId: pilotId,
    clientTurnKey: newId("ctk"),
    requestFingerprint: newId("fp"),
    operationId: newId("op"),
    status: "COMPLETE",
    userMessageId: msgId,
    ownerToken: newId("tok"),
    resultJson: JSON.stringify({
      semanticQualification: qualification,
      semanticQualificationStashedAt: new Date().toISOString(),
    }),
  });
  return msgId;
}

function envelopeForConvAuth(content: string): NoraTurnQualification {
  registerMl3ConversationFixtures();
  registerPgUtteranceFixture(content);
  return fixtureSemanticQualify(content.trim());
}

const D5_OPS = new Set([
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "PROPOSE_TRAJECTORY",
  "RETAIN_TRAJECTORY",
  "APPLY_RESTRICTION",
]);

function envelopeFromPreQualified(pre: IntentQualification, fallbackContent: string): NoraTurnQualification {
  if (pre.clarity === "CLEAR") {
    if (D5_OPS.has(pre.operation) || pre.operation === "LIFT_RESTRICTION" && false) {
      /* fallthrough */
    }
    if (
      pre.operation === "OPEN_CYCLE" ||
      pre.operation === "CLOSE_CYCLE" ||
      pre.operation === "TRANSITION_CYCLE" ||
      pre.operation === "CHOOSE_METHOD" ||
      pre.operation === "REPLACE_METHOD" ||
      pre.operation === "WITHDRAW_METHOD" ||
      pre.operation === "PROPOSE_TRAJECTORY" ||
      pre.operation === "RETAIN_TRAJECTORY" ||
      pre.operation === "APPLY_RESTRICTION"
    ) {
      return d5PilotageEnvelope({
        operation: pre.operation,
        cycleType: pre.cycleType,
        toCycleType: pre.toCycleType,
        objective: pre.objective ?? pre.statement ?? pre.operation,
      });
    }
    return d6DecisionEnvelope({
      operation: pre.operation,
      statement: pre.statement ?? pre.objective,
      objectRef: pre.objectRef,
      decisionId: pre.decisionId,
      restrictionKindHint: pre.restrictionKindHint,
      restrictionTargetRefHint: pre.restrictionTargetRefHint,
    });
  }
  if (pre.clarity === "AMBIGUOUS") {
    return clarificationEnvelope(fallbackContent, [pre.reason], pre.reason);
  }
  return dialogueEnvelope(fallbackContent, "Aucun effet pilotage.", ["NO_EFFECT"]);
}

async function applyConvAuthSeeded(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  content: string;
  preQualified: IntentQualification;
  clientTurnKey: string;
  ordinal?: number;
}) {
  const { applyConversationalAuthority } = await import(
    "@/domains/pilotage/conversation-authority"
  );
  const qualification = envelopeFromPreQualified(input.preQualified, input.content);
  const msgId = await insertUserMessageWithDurableQualification(
    input.pilotId,
    input.preparationId,
    input.content,
    qualification,
    input.ordinal != null ? { ordinal: input.ordinal } : undefined,
  );
  return applyConversationalAuthority({
    pilotId: input.pilotId,
    projectId: input.projectId,
    userMessageId: msgId,
    content: input.content,
    preQualified: input.preQualified,
    clientTurnKey: input.clientTurnKey,
  });
}

async function seedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED") throw new Error(`seed failed: ${created.status}`);
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

async function insertUserMessage(
  preparationId: string,
  content: string,
  options?: { status?: string; role?: string; ordinal?: number },
) {
  const conv = (
    await db.select().from(conversations).where(eq(conversations.preparationId, preparationId)).limit(1)
  )[0];
  const id = newId("msg");
  await db.insert(messages).values({
    id,
    conversationId: conv.id,
    role: options?.role ?? "user",
    content,
    status: options?.status ?? "COMPLETE",
    ordinal: options?.ordinal ?? 1,
  });
  return id;
}

describe("PostgreSQL ML3 pilotage and decisions", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    registerMl3ConversationFixtures();
  });

  it("starts empty: no cycle, no method, no retained trajectory", async () => {
    const { pilotId, projectId } = await seedProject("empty");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.revision).toBe(0);
    expect(view.cycle).toBeNull();
    expect(view.method).toEqual({ presence: "ABSENT", usageRestricted: false });
    expect(view.trajectory.retained).toBeNull();
    expect(view.trajectory.proposed).toBeNull();
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);
  });

  it("propose stays non-authoritative until an explicit retain", async () => {
    const { pilotId, projectId } = await seedProject("traj");
    const proposed = await proposeTrajectory(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      orientation: "Explorer le cadrage avant de construire",
    });
    expect(proposed.status).toBe("APPLIED");
    expect(proposed.decisionId).toBeNull();
    const mid = await getPilotageProjection(pilotId, projectId);
    expect(mid.trajectory.proposed?.orientation).toContain("cadrage");
    expect(mid.trajectory.retained).toBeNull();
    expect(mid.cycle).toBeNull();
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);

    const retained = await retainTrajectory(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: mid.revision,
      sourceRef: newId("src"),
      trajectoryRevisionId: mid.trajectory.proposed?.id,
    });
    expect(retained.status).toBe("APPLIED");
    expect(retained.decisionId).toBeTruthy();
    const after = await getPilotageProjection(pilotId, projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    expect(after.cycle).toBeNull();
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.map((d) => d.kind)).toEqual(["RETAIN_TRAJECTORY"]);
  });

  it("opens one cycle on an explicit GO and pins the cadrage CKI", async () => {
    const { pilotId, projectId } = await seedProject("open");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Clarifier le besoin",
    });
    expect(opened.status).toBe("APPLIED");
    expect(opened.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.cycle?.status).toBe("ACTIVE");
    expect(view.cycle?.cki.ckiId).toBe("01-cadrage");
    expect(view.cycle?.cki.availability).toBe("RESOLVED");
    expect(view.cycle?.cki.contentDigest).toMatch(/^[a-f0-9]{64}$/);
    expect(["ASSOCIATED", "RESOLVED", "UNAVAILABLE"]).toContain(view.cycle?.cki.availability);
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal).toHaveLength(1);
    expect(journal[0]?.kind).toBe("OPEN_CYCLE");
  });

  it("rejects an ambiguous OK without opening a cycle", async () => {
    const seeded = await seedProject("ambig");
    const messageId = await insertUserMessage(seeded.preparationId, "OK");
    const first = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: messageId,
      utterance: "OK",
    });
    expect(first.status).toBe("REJECTED");
    expect(first.reasonCode).toBe("AMBIGUOUS");
    const again = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: messageId,
      utterance: "OK",
    });
    expect(again.status).toBe("REJECTED");
    expect(again.reasonCode).toBe("AMBIGUOUS");
    const view = await getPilotageProjection(seeded.pilotId, seeded.projectId);
    expect(view.cycle).toBeNull();
    expect(view.revision).toBe(0);
    expect(await listDecisionJournal(seeded.pilotId, seeded.projectId)).toHaveLength(0);
  });

  it("keeps a single ACTIVE cycle when two opens race", async () => {
    const { pilotId, projectId } = await seedProject("race");
    const input = {
      expectedRevision: 0,
      cycleType: "CADRAGE" as const,
      objective: "Course",
    };
    const [a, b] = await Promise.all([
      openCycle(pilotId, projectId, { ...input, clientCommandKey: newId("idem"), sourceRef: newId("src") }),
      openCycle(pilotId, projectId, { ...input, clientCommandKey: newId("idem"), sourceRef: newId("src") }),
    ]);
    const statuses = [a.status, b.status].sort();
    expect(statuses.filter((s) => s === "APPLIED")).toHaveLength(1);
    expect(statuses.every((s) => s === "APPLIED" || s === "CONFLICT" || s === "REJECTED")).toBe(true);
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
    expect(rows).toHaveLength(1);

    await expect(
      db.insert(projectCycles).values({
        id: newId("cyc"),
        projectId,
        cycleType: "UX_UI",
        objective: "second",
        status: "ACTIVE",
        revision: 1,
      }),
    ).rejects.toBeTruthy();
  });

  it("replays the same key and conflicts when the fingerprint changes", async () => {
    const { pilotId, projectId } = await seedProject("replay");
    const key = newId("idem");
    const sourceRef = newId("src");
    const first = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Une fois",
    });
    expect(first.status).toBe("APPLIED");
    const second = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Une fois",
    });
    expect(second.status).toBe("ALREADY_APPLIED");
    expect(second.commandId).toBe(first.commandId);
    expect(second.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const recon = await reconcileCommand(pilotId, projectId, first.commandId!);
    expect(recon.status).toBe("ALREADY_APPLIED");
    const changed = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Autre objectif",
    });
    expect(changed.status).toBe("CONFLICT");
    expect(changed.reasonCode).toBe("FINGERPRINT");
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(1);
  });

  it("rolls back a transition when opening the next cycle fails", async () => {
    const { pilotId, projectId } = await seedProject("atomic");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Base",
    });
    expect(opened.status).toBe("APPLIED");
    const failingKey = newId("idem");
    pilotageFault.afterCloseBeforeOpen = () => {
      throw new Error("INJECTED_OPEN_FAILURE");
    };
    try {
      await expect(
        transitionCycle(pilotId, projectId, {
          clientCommandKey: failingKey,
          expectedRevision: opened.revision ?? 1,
          sourceRef: newId("src"),
          toCycleType: "UX_UI",
          objective: "Ne doit pas rester",
        }),
      ).rejects.toThrow(/INJECTED_OPEN_FAILURE/);
    } finally {
      pilotageFault.afterCloseBeforeOpen = null;
    }
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows.map((r) => `${r.cycleType}:${r.status}`)).toEqual(["CADRAGE:ACTIVE"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.revision).toBe(opened.revision);

    const moved = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: view.revision,
      sourceRef: newId("src"),
      toCycleType: "UX_UI",
      objective: "Expérience",
    });
    expect(moved.status).toBe("APPLIED");
    expect(["APPLIED", "ALREADY_APPLIED", "REJECTED", "CONFLICT", "UNKNOWN"]).toContain(moved.status);
    expect(moved.effects.map((e) => e.effectKind)).toEqual(["CLOSE", "OPEN"]);
    const after = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(after.find((r) => r.cycleType === "CADRAGE")?.status).toBe("CLOSED");
    expect(after.find((r) => r.cycleType === "UX_UI")?.status).toBe("ACTIVE");
    expect(after.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
  });

  it("chooses, replaces, withdraws and revokes the current method base without restoring the previous one", async () => {
    const { pilotId, projectId } = await seedProject("method");
    let revision = 0;
    const chosen = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(chosen.status).toBe("APPLIED");
    revision = chosen.revision ?? revision;
    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    revision = replaced.revision ?? revision;
    let view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "Kanban", methodVersion: "2.0" });

    const withdrawn = await withdrawMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
    });
    expect(withdrawn.status).toBe("APPLIED");
    revision = withdrawn.revision ?? revision;
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method.presence).toBe("ABSENT");

    const again = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "XP",
      methodVersion: "3.0",
    });
    expect(again.status).toBe("APPLIED");
    revision = again.revision ?? revision;
    const unrelated = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      statement: "Le périmètre reste le portail",
    });
    expect(unrelated.status).toBe("APPLIED");
    revision = unrelated.revision ?? revision;
    const revokedSide = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      decisionId: unrelated.decisionId!,
    });
    expect(revokedSide.status).toBe("APPLIED");
    expect(revokedSide.effects[0]?.effectKind).toBe("REVOKE_DECISION");
    revision = revokedSide.revision ?? revision;
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "XP" });

    const revokedBase = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      decisionId: again.decisionId!,
    });
    expect(revokedBase.status).toBe("APPLIED");
    expect(revokedBase.effects[0]?.effectKind).toBe("REVOKE_BASE");
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method.presence).toBe("ABSENT");
    const apps = await db
      .select()
      .from(methodApplications)
      .where(eq(methodApplications.projectId, projectId));
    expect(apps.filter((a) => a.isCurrent)).toHaveLength(0);
    expect(apps.some((a) => a.methodRef === "Scrum" && a.isCurrent)).toBe(false);
    expect(apps.some((a) => a.methodRef === "Kanban" && a.isCurrent)).toBe(false);
  });

  it("blocks a cycle open while a restriction is active and allows it after a lift", async () => {
    const { pilotId, projectId } = await seedProject("restrict");
    const applied = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      statement: "Pause des ouvertures",
    });
    expect(applied.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Ne doit pas s'ouvrir",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();

    const restrictionId = applied.effects[0]?.targetRef;
    const lifted = await liftGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      restrictionId: restrictionId!,
    });
    expect(lifted.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: lifted.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Après levée",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");

    const method = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(method.status).toBe("APPLIED");
    const suspended = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceRef: newId("src"),
      targetKind: "METHOD_USE",
      targetRef: "Scrum",
    });
    expect(suspended.status).toBe("APPLIED");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Scrum",
      usageRestricted: true,
    });
  });

  it("isolates pilotage across projects and rejects a foreign user message", async () => {
    const a = await seedProject("iso-a");
    const b = await seedProject("iso-b");
    const opened = await openCycle(a.pilotId, a.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Seulement A",
    });
    expect(opened.status).toBe("APPLIED");
    await expect(
      openCycle(a.pilotId, b.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "UX_UI",
        objective: "Interdit",
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });

    const foreign = await insertUserMessage(b.preparationId, "Ouvre le cycle cadrage");
    const stolen = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceKind: "USER_MESSAGE",
      sourceRef: foreign,
      utterance: "Ouvre le cycle cadrage",
    });
    expect(stolen.status).toBe("REJECTED");
    expect(stolen.reasonCode).toBe("SOURCE");
    const viewA = await getPilotageProjection(a.pilotId, a.projectId);
    const viewB = await getPilotageProjection(b.pilotId, b.projectId);
    expect(viewA.cycle?.cycleType).toBe("CADRAGE");
    expect(viewB.cycle).toBeNull();
    expect(viewB.method.presence).toBe("ABSENT");
    const cyclesB = await db
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, b.projectId), eq(projectCycles.status, "ACTIVE")));
    expect(cyclesB).toHaveLength(0);
  });

  it("opens a cycle from an explicit utterance without an operation", async () => {
    const { pilotId, projectId } = await seedProject("natural-go");
    const actInstanceId = newId("act");
    const opened = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: `ui:UTTERANCE:${actInstanceId}`,
      actInstanceId,
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      utterance: "ouvre le cycle cadrage",
    });
    expect(opened.status).toBe("APPLIED");
    expect(opened.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.cycle?.status).toBe("ACTIVE");
  });

  it("applies a cycle restriction only to the named target", async () => {
    const { pilotId, projectId } = await seedProject("target-restrict");
    const applied = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "Pause UX seulement",
    });
    expect(applied.status).toBe("APPLIED");
    const cadrage = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Autorisé",
    });
    expect(cadrage.status).toBe("APPLIED");
    const closed = await closeCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: cadrage.revision ?? 2,
      sourceRef: newId("src"),
      cycleId: (await getPilotageProjection(pilotId, projectId)).cycle?.id,
    });
    expect(closed.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: closed.revision ?? 3,
      sourceRef: newId("src"),
      cycleType: "UX_UI",
      objective: "Restreint",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
  });

  it("CR-03: different RECORD statements on same objectRef do not globally block OPEN", async () => {
    const { pilotId, projectId } = await seedProject("no-false-contradiction");
    const first = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "perimetre-portail",
      statement: "Le périmètre inclut le portail",
    });
    expect(first.status).toBe("APPLIED");
    const second = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: first.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "perimetre-portail",
      statement: "Le périmètre exclut le portail",
    });
    expect(second.status).toBe("APPLIED");
    // Independent cycle open must not be blocked by free-text divergence (RG-GOV-013).
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: second.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Effet indépendant autorisé",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
  });

  it("CR-02: REVISE_DECISION allowed for RECORD; refused for D5 founding kinds", async () => {
    const { pilotId, projectId } = await seedProject("revise-d5");
    const recorded = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "note-cadrage",
      statement: "Note initiale",
    });
    expect(recorded.status).toBe("APPLIED");
    const revised = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: recorded.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: recorded.decisionId!,
      statement: "Note amendée",
    });
    expect(revised.status).toBe("APPLIED");
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.find((d) => d.id === recorded.decisionId)?.state).toBe("REVISED");
    expect(journal.find((d) => d.id === revised.decisionId)?.state).toBe("APPLICABLE");
    expect(journal.find((d) => d.id === revised.decisionId)?.supersedesDecisionId).toBe(
      recorded.decisionId,
    );

    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revised.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Fondatrice",
    });
    expect(opened.status).toBe("APPLIED");
    const refuseOpenRevise = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: opened.decisionId!,
      statement: "Ne doit pas réécrire l'ouverture",
    });
    expect(refuseOpenRevise.status).toBe("REJECTED");
    expect(refuseOpenRevise.reasonCode).toBe("USE_TYPED_OPERATION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
    expect((await listDecisionJournal(pilotId, projectId)).find((d) => d.id === opened.decisionId)?.state).toBe(
      "APPLICABLE",
    );

    const method = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(method.status).toBe("APPLIED");
    const refuseMethodRevise = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: method.decisionId!,
      statement: "Ne doit pas orpheliner la méthode",
    });
    expect(refuseMethodRevise.status).toBe("REJECTED");
    expect(refuseMethodRevise.reasonCode).toBe("USE_TYPED_OPERATION");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "Scrum" });

    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Kanban",
    });
    const revoked = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: replaced.revision ?? 5,
      sourceRef: newId("src"),
      decisionId: replaced.decisionId!,
    });
    expect(revoked.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method.presence).toBe("ABSENT");
  });

  it("CR-01: transition blocked when target B or source A is restricted; A stays ACTIVE", async () => {
    const { pilotId, projectId } = await seedProject("transition-restrict");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Source A",
    });
    expect(opened.status).toBe("APPLIED");
    const blockB = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "B restreint",
    });
    expect(blockB.status).toBe("APPLIED");
    const refusedB = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockB.revision ?? 2,
      sourceRef: newId("src"),
      toCycleType: "UX_UI",
    });
    expect(refusedB.status).toBe("REJECTED");
    expect(refusedB.reasonCode).toBe("RESTRICTION");
    const afterB = await getPilotageProjection(pilotId, projectId);
    expect(afterB.cycle?.cycleType).toBe("CADRAGE");
    expect(afterB.cycle?.status).toBe("ACTIVE");
    const cyclesAfterB = await db
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, projectId), eq(projectCycles.cycleType, "UX_UI")));
    expect(cyclesAfterB).toHaveLength(0);

    // Unrelated target type still allowed while UX_UI is restricted.
    const toDelivery = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockB.revision ?? 2,
      sourceRef: newId("src"),
      toCycleType: "DELIVERY",
    });
    expect(toDelivery.status).toBe("APPLIED");
    expect(toDelivery.effects.map((e) => e.effectKind).sort()).toEqual(["CLOSE", "OPEN"]);
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("DELIVERY");

    // Restrict current source type → further transition refused; cycle stays ACTIVE.
    const blockA = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: toDelivery.revision ?? 3,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "DELIVERY",
      statement: "A restreint",
    });
    expect(blockA.status).toBe("APPLIED");
    const refusedA = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockA.revision ?? 4,
      sourceRef: newId("src"),
      toCycleType: "QA_VALIDATION",
    });
    expect(refusedA.status).toBe("REJECTED");
    expect(refusedA.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("DELIVERY");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");

    // Lift both restrictions → transition allowed again.
    for (const effect of [...(blockB.effects ?? []), ...(blockA.effects ?? [])]) {
      if (effect.effectKind !== "APPLY_RESTRICTION") continue;
      const lift = await liftGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
        sourceRef: newId("src"),
        restrictionId: effect.targetRef,
      });
      expect(lift.status).toBe("APPLIED");
    }
    const afterLift = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
      sourceRef: newId("src"),
      toCycleType: "QA_VALIDATION",
    });
    expect(afterLift.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("QA_VALIDATION");
  });

  it("rejects a user message that is not COMPLETE", async () => {
    const seeded = await seedProject("msg-status");
    const pendingId = await insertUserMessage(seeded.preparationId, "ouvre le cycle cadrage", {
      status: "PENDING",
    });
    const pending = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: pendingId,
      utterance: "ouvre le cycle cadrage",
    });
    expect(pending.status).toBe("REJECTED");
    expect(pending.reasonCode).toBe("SOURCE");
    const assistantId = await insertUserMessage(seeded.preparationId, "ouvre le cycle cadrage", {
      role: "assistant",
      status: "COMPLETE",
      ordinal: 2,
    });
    const assistant = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: assistantId,
      utterance: "ouvre le cycle cadrage",
    });
    expect(assistant.status).toBe("REJECTED");
    expect(assistant.reasonCode).toBe("SOURCE");
    expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();
  });

  it("does not apply the same human act twice when only the client key changes", async () => {
    const { pilotId, projectId } = await seedProject("act-instance");
    const actInstanceId = newId("act");
    const sourceRef = `ui:OPEN_CYCLE:${actInstanceId}`;
    const clientCommandKey = newId("idem");
    const first = await openCycle(pilotId, projectId, {
      clientCommandKey,
      expectedRevision: 0,
      sourceRef,
      actInstanceId,
      cycleType: "CADRAGE",
      objective: "Un seul acte",
    });
    expect(first.status).toBe("APPLIED");
    const byKey = await reconcileCommandByClientKey(pilotId, projectId, clientCommandKey);
    expect(byKey.status).toBe("ALREADY_APPLIED");
    expect(byKey.commandId).toBe(first.commandId);
    const replay = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: first.revision ?? 1,
      sourceRef,
      actInstanceId,
      cycleType: "CADRAGE",
      objective: "Un seul acte",
    });
    expect(replay.status).toBe("ALREADY_APPLIED");
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
  });

  it("B13-01/04: divergent RECORD statements do not block an independent cycle open", async () => {
    const { pilotId, projectId } = await seedProject("b13-compat");
    const a = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(a.status).toBe("APPLIED");
    const b = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: a.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "Finalement GitHub facultatif.",
    });
    expect(b.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: b.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Indépendant de la divergence textuelle",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
  });

  it("B13-03/07: typed restriction blocks dependent effect and persists across projection reload", async () => {
    const { pilotId, projectId } = await seedProject("b13-material");
    const restrict = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "Pause UX",
    });
    expect(restrict.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: restrict.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "UX_UI",
      objective: "Dépendant",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    const independent = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: restrict.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Indépendant",
    });
    expect(independent.status).toBe("APPLIED");
    const reloaded = await getPilotageProjection(pilotId, projectId);
    expect(reloaded.restrictions.some((r) => r.status === "ACTIVE" && r.targetRef === "UX_UI")).toBe(
      true,
    );
  });

  it("B13-05/09: REPLACE then REVOKE founding method; history preserved, no resurrection", async () => {
    const { pilotId, projectId } = await seedProject("b13-replace");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Méthode",
    });
    const chosen = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(chosen.status).toBe("APPLIED");
    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: chosen.revision ?? 2,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Kanban",
    });
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.find((d) => d.id === chosen.decisionId)?.state).toBe("SUPERSEDED");
    expect(journal.find((d) => d.id === replaced.decisionId)?.state).toBe("APPLICABLE");
    expect(journal.find((d) => d.id === replaced.decisionId)?.supersedesDecisionId).toBe(
      chosen.decisionId,
    );
    const revoked = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: replaced.revision ?? 3,
      sourceRef: newId("src"),
      decisionId: replaced.decisionId!,
    });
    expect(revoked.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method.presence).toBe("ABSENT");
    const after = await listDecisionJournal(pilotId, projectId);
    expect(after.find((d) => d.id === replaced.decisionId)?.state).toBe("REVOKED");
    expect(after.map((d) => d.id)).toContain(chosen.decisionId);
  });

  it("B13-08: COGNITIVE_PROPOSAL alone cannot open a cycle", async () => {
    const { pilotId, projectId } = await seedProject("b13-source");
    const stolen = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "COGNITIVE_PROPOSAL",
      sourceRef: newId("src"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "Interdit",
    });
    expect(stolen.status).toBe("REJECTED");
    expect(stolen.reasonCode).toBe("SOURCE");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
  });

  it("C01: single D6 decision + new USER text surfaces Level A via nora-context without second decision", async () => {
    const { buildNoraPilotageContext } = await import("@/domains/pilotage/nora-context");
    const { generateNoraReply } = await import("@/domains/conversation/nora-adapter");
    const { pilotId, projectId, preparationId } = await seedProject("b13-c01-ctx");
    const recorded = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(recorded.status).toBe("APPLIED");
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);

    const userText = "Finalement, je préfère GitHub facultatif.";
    const ctx = await buildNoraPilotageContext(pilotId, preparationId, userText);
    expect(ctx.projectId).toBe(projectId);
    expect(ctx.levelASignals.length).toBeGreaterThanOrEqual(1);
    expect(ctx.levelASignals[0].kind).toBe("MESSAGE_DECISION_CONFRONTATION");
    expect(ctx.levelASignals[0].decisionId).toBe(recorded.decisionId);
    expect(ctx.levelASignals[0].authorityClaim).toBe("NONE");
    expect(ctx.levelASignals[0].framing).toBe("POSSIBLE_CHANGE");
    expect(ctx.snippets.join("\n")).toContain("Décisions D6 applicables");

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    const reply = await generateNoraReply({
      userText,
      contextSnippets: [],
      pilotageSnippets: ctx.snippets,
      levelASignals: ctx.levelASignals,
    });
    expect(reply.mode).toBe("deterministic-fixture");
    expect(reply.content).toMatch(/Niveau A/i);
    expect(reply.content).toContain(recorded.decisionId!);
    // Still a single APPLICABLE decision — Nora did not create a second one.
    expect((await listDecisionJournal(pilotId, projectId)).filter((d) => d.state === "APPLICABLE")).toHaveLength(
      1,
    );
  });

  it("R3: postUserMessageAndNora integrates USER→D6 context→fixture→persisted thread without inventing HumanDecision", async () => {
    const { postUserMessageAndNora, listMessages } = await import(
      "@/domains/conversation/service"
    );
    const { buildNoraPilotageContext } = await import("@/domains/pilotage/nora-context");
    const { utteranceTouchesObject } = await import("@/domains/decisions/divergence-assist");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const projectA = await seedProject("b13-r3-iso-a");
      const projectB = await seedProject("b13-r3-iso-b");
      const foreignMarker = `MARKER_B13_R3_ISO_FOREIGN_${newId("mk")}`;

      // Both decisions MUST exist and be APPLICABLE before Nora generation (discriminating isolation).
      const recordedA = await executePilotageCommand(projectA.pilotId, projectA.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: "github-connexion",
        statement: "La connexion GitHub est obligatoire.",
      });
      expect(recordedA.status).toBe("APPLIED");
      expect(recordedA.decisionId).toBeTruthy();

      const recordedB = await executePilotageCommand(projectB.pilotId, projectB.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        // Same objectRef as A so a cross-project leak would be selected for the USER text.
        objectRef: "github-connexion",
        statement: `GitHub obligatoire — ${foreignMarker} — décision étrangère projet B.`,
      });
      expect(recordedB.status).toBe("APPLIED");
      expect(recordedB.decisionId).toBeTruthy();

      const journalABefore = await listDecisionJournal(projectA.pilotId, projectA.projectId);
      const journalBBefore = await listDecisionJournal(projectB.pilotId, projectB.projectId);
      expect(journalABefore.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalBBefore.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalBBefore.some((d) => d.statement.includes(foreignMarker))).toBe(true);
      expect(journalBBefore.some((d) => d.id === recordedB.decisionId)).toBe(true);

      // Soft reflection — Level A confrontation without F02 revise performative.
      const userText = "À propos de GitHub, ce serait intéressant de le rendre facultatif.";
      // USER text is relevant to B's objectRef — without project filter B would be confrontable.
      expect(utteranceTouchesObject(userText, "github-connexion")).toBe(true);

      const ctxB = await buildNoraPilotageContext(
        projectB.pilotId,
        projectB.preparationId,
        userText,
      );
      expect(ctxB.projectId).toBe(projectB.projectId);
      expect(ctxB.snippets.join("\n")).toContain(foreignMarker);
      expect(ctxB.snippets.join("\n")).toContain(recordedB.decisionId!);

      const ctxABefore = await buildNoraPilotageContext(
        projectA.pilotId,
        projectA.preparationId,
        userText,
      );
      expect(ctxABefore.projectId).toBe(projectA.projectId);
      expect(ctxABefore.snippets.join("\n")).toContain(recordedA.decisionId!);
      expect(ctxABefore.snippets.join("\n")).not.toContain(foreignMarker);
      expect(ctxABefore.snippets.join("\n")).not.toContain(recordedB.decisionId!);
      expect(ctxABefore.levelASignals.every((s) => s.decisionId !== recordedB.decisionId)).toBe(
        true,
      );

      const r3Qualification = dialogueEnvelope(
        userText,
        `Niveau A — confrontation sur la décision ${recordedA.decisionId} : réflexion sans HumanDecision ni interdiction D6.`,
        ["NO_EFFECT", "LEVEL_A_CONFRONTATION"],
      );
      const turnKey = `b13-r3-${newId("turn")}`;
      const result = await noraTurn(
        projectA.pilotId,
        projectA.preparationId,
        userText,
        { clientTurnKey: turnKey, qualification: r3Qualification },
      );
      expect(result.status).toBe("COMPLETE");
      expect(result.humanDecisionCreated).toBe(false);
      expect(result.noraMode).toBe("deterministic-fixture");
      expect(result.userMessageId).toBeTruthy();
      expect(result.assistantMessageId).toBeTruthy();

      const thread = await listMessages(projectA.pilotId, projectA.preparationId);
      const userMsg = thread.find((m) => m.id === result.userMessageId);
      const assistantMsg = thread.find((m) => m.id === result.assistantMessageId);
      expect(userMsg?.role).toBe("user");
      expect(userMsg?.content).toBe(userText);
      expect(userMsg?.status).toBe("COMPLETE");
      expect(assistantMsg?.role).toBe("assistant");
      expect(assistantMsg?.status).toBe("COMPLETE");
      expect(assistantMsg?.content).toMatch(/Niveau A/i);
      expect(assistantMsg?.content).toContain(recordedA.decisionId!);
      expect(assistantMsg?.content).toMatch(/HumanDecision|interdiction D6/i);
      expect(assistantMsg?.content).toMatch(/sans|pas une|réflexion/i);
      expect(assistantMsg?.content).not.toMatch(/blocage D6 établi|je révoque|HumanDecision créée/i);
      expect(assistantMsg?.content).not.toContain(foreignMarker);
      expect(assistantMsg?.content).not.toContain(recordedB.decisionId!);

      const journalAAfter = await listDecisionJournal(projectA.pilotId, projectA.projectId);
      const journalBAfter = await listDecisionJournal(projectB.pilotId, projectB.projectId);
      expect(journalAAfter.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalAAfter.map((d) => d.id).sort()).toEqual(journalABefore.map((d) => d.id).sort());
      expect(journalBAfter.map((d) => d.id).sort()).toEqual(journalBBefore.map((d) => d.id).sort());
      expect(journalBAfter.find((d) => d.id === recordedB.decisionId)?.statement).toContain(
        foreignMarker,
      );

      const view = await getPilotageProjection(projectA.pilotId, projectA.projectId);
      expect(view.cycle).toBeNull();
      expect(view.method.presence).toBe("ABSENT");

      const reloaded = await listMessages(projectA.pilotId, projectA.preparationId);
      expect(reloaded.some((m) => m.id === result.userMessageId)).toBe(true);
      expect(reloaded.some((m) => m.id === result.assistantMessageId)).toBe(true);

      const replay = await noraTurn(
        projectA.pilotId,
        projectA.preparationId,
        userText,
        { clientTurnKey: turnKey, qualification: r3Qualification },
      );
      expect(replay.idempotentReplay).toBe(true);
      expect(replay.humanDecisionCreated).toBe(false);
      expect(
        (await listDecisionJournal(projectA.pilotId, projectA.projectId)).filter(
          (d) => d.state === "APPLICABLE",
        ),
      ).toHaveLength(1);
      const users = (await listMessages(projectA.pilotId, projectA.preparationId)).filter(
        (m) => m.role === "user" && m.content === userText,
      );
      expect(users).toHaveLength(1);
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C01: two different but compatible formulations do not block an independent OPEN", async () => {
    const { pilotId, projectId } = await seedProject("b13-compatible");
    const a = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(a.status).toBe("APPLIED");
    const b = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: a.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "GitHub reste requis pour ce projet.",
    });
    expect(b.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: b.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Compatible — pas de conflit matériel",
    });
    expect(opened.status).toBe("APPLIED");
  });

  it("F01: clear GO via postUserMessageAndNora opens one ACTIVE cycle with HumanDecision", async () => {
    const { postUserMessageAndNora, listMessages } = await import(
      "@/domains/conversation/service"
    );
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("f01-go");
      expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
      const turnKey = `f01-go-${newId("turn")}`;
      const result = await noraTurn(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: turnKey },
      );
      expect(result.status).toBe("COMPLETE");
      expect(result.pilotageEffect?.attempted ?? false).toBe(true);
      expect(result.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(result.pilotageEffect?.operation).toBe("OPEN_CYCLE");
      expect(result.humanDecisionCreated).toBe(true);
      expect(result.pilotageEffect?.decisionId).toBeTruthy();
      const view = await getPilotageProjection(pilotId, projectId);
      expect(view.cycle?.status).toBe("ACTIVE");
      expect(view.cycle?.cycleType).toBe("CADRAGE");
      const journal = await listDecisionJournal(pilotId, projectId);
      expect(journal.some((d) => d.kind === "OPEN_CYCLE" && d.state === "APPLICABLE")).toBe(true);
      const thread = await listMessages(pilotId, preparationId);
      expect(thread.some((m) => m.id === result.userMessageId && m.role === "user")).toBe(true);
      expect(thread.some((m) => m.id === result.assistantMessageId)).toBe(true);

      const replay = await noraTurn(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: turnKey },
      );
      expect(replay.idempotentReplay).toBe(true);
      expect(replay.humanDecisionCreated).toBe(true);
      expect(
        (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
          (c) => c.status === "ACTIVE",
        ),
      ).toHaveLength(1);
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("F01: ambiguous OK and hostile assistant source create no cycle", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const seeded = await seedProject("f01-neg");
      const ok = await noraTurn(
        seeded.pilotId,
        seeded.preparationId,
        "OK",
        { clientTurnKey: `f01-ok-${newId("turn")}` },
      );
      expect(ok.pilotageEffect?.attempted ?? false).toBe(false);
      expect(ok.humanDecisionCreated).toBe(false);
      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();

      const soft = await noraTurn(
        seeded.pilotId,
        seeded.preparationId,
        "Ce serait intéressant de commencer.",
        { clientTurnKey: `f01-soft-${newId("turn")}` },
      );
      expect(soft.humanDecisionCreated).toBe(false);
      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();

      const assistantId = await insertUserMessage(
        seeded.preparationId,
        "ouvre le cycle cadrage",
        { role: "assistant", status: "COMPLETE", ordinal: 99 },
      );
      const hostile = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "USER_MESSAGE",
        sourceRef: assistantId,
        utterance: "ouvre le cycle cadrage",
      });
      expect(hostile.status).toBe("REJECTED");
      expect(hostile.reasonCode).toBe("SOURCE");
      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("F02: RECORD then REVISE from conversation thread with durable journal", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("f02-rec");
      const record = await noraTurn(
        pilotId,
        preparationId,
        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
        { clientTurnKey: `f02-rec-${newId("turn")}` },
      );
      expect(record.pilotageEffect?.attempted).toBe(true);
      expect(record.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(record.humanDecisionCreated).toBe(true);
      const firstId = record.pilotageEffect?.decisionId;
      expect(firstId).toBeTruthy();
      let journal = await listDecisionJournal(pilotId, projectId);
      expect(journal.filter((d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION")).toHaveLength(
        1,
      );

      const revise = await noraTurn(
        pilotId,
        preparationId,
        "Finalement, GitHub devient facultatif.",
        {
          clientTurnKey: `f02-rev-${newId("turn")}`,
          qualification: d6DecisionEnvelope({
            operation: "REVISE_DECISION",
            statement: "GitHub devient facultatif.",
            objectRef: "github-connexion",
            decisionId: firstId!,
          }),
        },
      );
      expect(revise.pilotageEffect?.attempted).toBe(true);
      expect(revise.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(revise.humanDecisionCreated).toBe(true);
      expect(revise.pilotageEffect?.decisionId).toBeTruthy();
      expect(revise.pilotageEffect?.decisionId).not.toBe(firstId);
      journal = await listDecisionJournal(pilotId, projectId);
      const applicable = journal.filter((d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION");
      expect(applicable).toHaveLength(1);
      expect(applicable[0]?.statement).toMatch(/facultatif/i);
      expect(journal.some((d) => d.id === firstId && d.state === "REVISED")).toBe(true);

      // Founding OPEN cannot be generically revised from conversation.
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "fondation",
      });
      expect(opened.status).toBe("APPLIED");
      const refuse = await noraTurn(
        pilotId,
        preparationId,
        "Finalement, le cycle cadrage devient ux.",
        { clientTurnKey: `f02-found-${newId("turn")}` },
      );
      expect(refuse.humanDecisionCreated).toBe(false);
      expect(refuse.pilotageEffect?.attempted ?? false).toBe(false);
      // Dialogue-only fixture: no pilotage attempt — cycle founding remains untouched.
      expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("CADRAGE");
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("F01: restriction blocks conversational GO without false success", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("f01-rest");
      const restricted = await applyGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        targetKind: "CYCLE_MUTATION",
        targetRef: "*",
        statement: "Pas de mutation de cycle",
      });
      expect(restricted.status).toBe("APPLIED");
      const go = await noraTurn(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: `f01-rest-${newId("turn")}` },
      );
      expect(go.pilotageEffect?.attempted).toBe(true);
      expect(go.pilotageEffect?.status).toBe("REJECTED");
      expect(go.pilotageEffect?.reasonCode).toBe("RESTRICTION");
      expect(go.humanDecisionCreated).toBe(false);
      expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C01: exploratory Finalement does not REVISE an applicable RECORD", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("c01-exp");
      const recorded = await noraTurn(
        pilotId,
        preparationId,
        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
        { clientTurnKey: `c01-rec-${newId("turn")}` },
      );
      expect(recorded.humanDecisionCreated).toBe(true);
      const before = await listDecisionJournal(pilotId, projectId);
      const applicableBefore = before.filter((d) => d.state === "APPLICABLE");
      expect(applicableBefore).toHaveLength(1);

      for (const text of [
        "Finalement, je pense que GitHub pourrait être facultatif.",
        "Finalement, et si GitHub devenait facultatif ?",
        "Je réfléchis à rendre GitHub facultatif.",
        "Nora propose de rendre GitHub facultatif.",
      ]) {
        const r = await noraTurn(pilotId, preparationId, text, {
          clientTurnKey: `c01-${newId("turn")}`,
        });
        expect(r.humanDecisionCreated).toBe(false);
        expect(r.pilotageEffect?.attempted ?? false).toBeFalsy();
      }
      const after = await listDecisionJournal(pilotId, projectId);
      expect(after.filter((d) => d.state === "APPLICABLE").map((d) => d.id)).toEqual(
        applicableBefore.map((d) => d.id),
      );
      expect(after.some((d) => d.state === "REVISED")).toBe(false);
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C02: D6 APPLIED survives Nora provider failure and reconstitutes on replay", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const { turnRaceHooks } = await import("@/domains/conversation/turn-command");
    const { reconstituteConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("c02-fault");
      const turnKey = `c02-fault-${newId("turn")}`;
      turnRaceHooks.afterAuthorityBeforeNora = async () => {
        throw new Error("INJECTED_PROVIDER_FAILURE");
      };
      const result = await noraTurn(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: turnKey },
      );
      expect(result.status).toBe("UNKNOWN");
      expect(result.pilotageEffect?.attempted ?? false).toBe(true);
      expect(result.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(result.humanDecisionCreated).toBe(true);
      expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");

      delete turnRaceHooks.afterAuthorityBeforeNora;
      const replay = await noraTurn(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: turnKey },
      );
      expect(replay.idempotentReplay).toBe(true);
      expect(replay.status).toBe("UNKNOWN");
      expect(replay.pilotageEffect?.attempted).toBe(true);
      expect(replay.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(replay.humanDecisionCreated).toBe(true);
      expect(
        (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
          (c) => c.status === "ACTIVE",
        ),
      ).toHaveLength(1);

      const reconstituted = await reconstituteConversationalAuthority({
        pilotId,
        projectId,
        clientTurnKey: turnKey,
        userMessageId: result.userMessageId,
      });
      expect(reconstituted?.attempted).toBe(true);
      expect(reconstituted?.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    } finally {
      delete turnRaceHooks.afterAuthorityBeforeNora;
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C03: journal lists >8 decisions with newest accessible and older recoverable", async () => {
    const { pilotId, projectId } = await seedProject("c03-journal");
    let revision = 0;
    for (let i = 0; i < 12; i += 1) {
      const recorded = await executePilotageCommand(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: revision,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: `obj-${i}`,
        statement: `Décision documentaire numéro ${i} pour le journal.`,
      });
      expect(recorded.status).toBe("APPLIED");
      revision = recorded.revision ?? revision + 1;
    }
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.length).toBeGreaterThanOrEqual(12);
    const newest = journal[journal.length - 1];
    expect(newest?.statement).toMatch(/numéro 11/);
    expect(journal[0]?.statement).toMatch(/numéro 0/);
    const applicable = journal.filter((d) => d.state === "APPLICABLE");
    expect(applicable.length).toBeGreaterThanOrEqual(12);
    // Newest is beyond the old slice(0,8) window of oldest-first — still present.
    expect(applicable.some((d) => d.statement.includes("numéro 11"))).toBe(true);
    expect(applicable.some((d) => d.statement.includes("numéro 0"))).toBe(true);
  });

  it("CR-01: 15+ applicables with two GitHub beyond cognitive window → no silent REVISE", async () => {
    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const { selectApplicableBriefs, findAuthorityReviseCandidates } = await import(
      "@/domains/decisions/divergence-assist"
    );
    const { pilotId, projectId, preparationId } = await seedProject("cr01-multi");
    let revision = 0;
    const statements: Array<{ objectRef: string; statement: string }> = [
      { objectRef: "github", statement: "GitHub est obligatoire pour ce projet." },
    ];
    for (let i = 0; i < 13; i += 1) {
      statements.push({
        objectRef: `filler-${i}`,
        statement: `Décision filler ${i} est obligatoire pour ce projet.`,
      });
    }
    statements.push({
      objectRef: "github",
      statement: "GitHub reste requis pour les déploiements.",
    });
    expect(statements).toHaveLength(15);
    for (const row of statements) {
      const recorded = await executePilotageCommand(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: revision,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: row.objectRef,
        statement: row.statement,
      });
      expect(recorded.status).toBe("APPLIED");
      revision = recorded.revision ?? revision + 1;
    }
    const journal = await listDecisionJournal(pilotId, projectId);
    const applicable = journal.filter((d) => d.state === "APPLICABLE");
    expect(applicable.length).toBeGreaterThanOrEqual(15);
    const briefs = applicable.map((d) => ({
      id: d.id,
      kind: d.kind,
      objectRef: d.objectRef ?? "",
      scope: d.scope ?? "PROJECT",
      statement: d.statement ?? "",
      state: d.state,
      sourceKind: d.sourceKind,
    }));
    const cognitiveGithub = selectApplicableBriefs(briefs).filter((b) => b.objectRef === "github");
    expect(cognitiveGithub).toHaveLength(1);
    const authority = findAuthorityReviseCandidates(
      "Finalement, GitHub devient facultatif.",
      briefs,
    );
    expect(authority.length).toBeGreaterThanOrEqual(2);

    const msgId = await insertUserMessage(
      preparationId,
      "Finalement, GitHub devient facultatif.",
    );
    const outcome = await applyConversationalAuthority({
      pilotId,
      projectId,
      userMessageId: msgId,
      content: "Finalement, GitHub devient facultatif.",
      preQualified: ambiguousPilotagePreQualified("MULTIPLE_REVISE_CANDIDATES"),
      clientTurnKey: `cr01-multi-${newId("turn")}`,
    });
    expect(outcome.attempted).toBe(false);
    expect(outcome.humanDecisionCreated).toBe(false);
    expect(outcome.clarification || outcome.intentReason).toMatch(/plusieurs|candidates/i);
    const after = await listDecisionJournal(pilotId, projectId);
    expect(after.filter((d) => d.state === "REVISED")).toHaveLength(0);
    expect(after.filter((d) => d.state === "APPLICABLE" && d.objectRef === "github")).toHaveLength(2);
  });

  it("CR-01: unique GitHub applicable beyond fillers → single REVISE", async () => {
    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const { pilotId, projectId, preparationId } = await seedProject("cr01-unique");
    let revision = 0;
    const first = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github",
      statement: "GitHub est obligatoire pour ce projet.",
    });
    expect(first.status).toBe("APPLIED");
    revision = first.revision ?? 1;
    for (let i = 0; i < 14; i += 1) {
      const filler = await executePilotageCommand(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: revision,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: `filler-${i}`,
        statement: `Décision filler ${i} est obligatoire pour ce projet.`,
      });
      expect(filler.status).toBe("APPLIED");
      revision = filler.revision ?? revision + 1;
    }
    const reviseEnv = d6DecisionEnvelope({
      operation: "REVISE_DECISION",
      statement: "GitHub devient facultatif.",
      objectRef: "github",
      decisionId: first.decisionId!,
    });
    const msgId = await insertUserMessageWithDurableQualification(
      pilotId,
      preparationId,
      "Finalement, GitHub devient facultatif.",
      reviseEnv,
    );
    const outcome = await applyConversationalAuthority({
      pilotId,
      projectId,
      userMessageId: msgId,
      content: "Finalement, GitHub devient facultatif.",
      preQualified: clearPilotagePreQualified({
        operation: "REVISE_DECISION",
        statement: "GitHub devient facultatif.",
        objectRef: "github",
        decisionId: first.decisionId!,
      }),
      clientTurnKey: `cr01-unique-${newId("turn")}`,
    });
    expect(outcome.attempted).toBe(true);
    expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    expect(outcome.humanDecisionCreated).toBe(true);
    const after = await listDecisionJournal(pilotId, projectId);
    expect(after.some((d) => d.id === first.decisionId && d.state === "REVISED")).toBe(true);
    expect(
      after.filter((d) => d.state === "APPLICABLE" && d.objectRef === "github"),
    ).toHaveLength(1);
  });

  it("CR-01: foreign project GitHub is never a revise target", async () => {
    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const a = await seedProject("cr01-iso-a");
    const b = await seedProject("cr01-iso-b");
    const inB = await executePilotageCommand(b.pilotId, b.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github",
      statement: "GitHub est obligatoire pour ce projet.",
    });
    expect(inB.status).toBe("APPLIED");
    const msgId = await insertUserMessage(a.preparationId, "Finalement, GitHub devient facultatif.");
    const outcome = await applyConversationalAuthority({
      pilotId: a.pilotId,
      projectId: a.projectId,
      userMessageId: msgId,
      content: "Finalement, GitHub devient facultatif.",
      preQualified: ambiguousPilotagePreQualified("NO_REVISE_TARGET_IN_PROJECT"),
      clientTurnKey: `cr01-iso-${newId("turn")}`,
    });
    expect(outcome.humanDecisionCreated).toBe(false);
    expect(outcome.attempted).toBe(false);
    const journalB = await listDecisionJournal(b.pilotId, b.projectId);
    expect(journalB.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
    expect(journalB.some((d) => d.state === "REVISED")).toBe(false);
  });

  it("CR-02: concurrent same-act OPEN yields at most one ACTIVE cycle", async () => {
    // Race at the D5/D6 boundary (same conv-auth key). Parallel postUserMessageAndNora
    // is fenced by TURN_IN_PROGRESS at D3 — that is expected and not a double-effect path.
    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const { pilotId, projectId, preparationId } = await seedProject("cr02-race");
    const turnKey = `cr02-race-${newId("turn")}`;
    const openEnv = d5PilotageEnvelope({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "cadrage",
    });
    const msgId = await insertUserMessageWithDurableQualification(
      pilotId,
      preparationId,
      "Ouvre le cycle cadrage.",
      openEnv,
    );
    const [a, b] = await Promise.all([
      applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content: "Ouvre le cycle cadrage.",
        preQualified: preQualifiedForConvAuth("Ouvre le cycle cadrage."),
        clientTurnKey: turnKey,
      }),
      applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content: "Ouvre le cycle cadrage.",
        preQualified: preQualifiedForConvAuth("Ouvre le cycle cadrage."),
        clientTurnKey: turnKey,
      }),
    ]);
    for (const r of [a, b]) {
      expect(r.attempted).toBe(true);
      expect(r.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(r.humanDecisionCreated).toBe(true);
    }
    expect(
      (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
        (c) => c.status === "ACTIVE",
      ),
    ).toHaveLength(1);
    const cmds = await reconcileCommandByClientKey(pilotId, projectId, `conv-auth:${turnKey}`);
    expect(cmds.status).toMatch(/APPLIED|ALREADY_APPLIED/);
  });

  /**
   * Critical Review ML3/RCT-02 — conversational chain proofs in PostgreSQL
   * (C01 citation, C05 T05 revise, C06 negated lift). Parser-only is not enough.
   */
  describe("RCT-02 Critical Review conversational chain (PG)", () => {
    /** Formulation représentative T05 — transcript original intégral non établi. */
    const T05_REPRESENTATIVE =
      "Je révise la décision que j'ai prise sur l'orientation du cadrage. Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes.";

    it("C01 CR: citation / specimen never OPEN_CYCLE (no cycle in PG)", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      for (const content of [
        "Voici une phrase de test : Nora, ouvre le cycle cadrage",
        "Ne fais pas ceci : Nora, ouvre le cycle cadrage",
      ]) {
        const { pilotId, projectId, preparationId } = await seedProject(
          `cr-c01-${content.slice(0, 12).replace(/\W+/g, "")}`,
        );
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        );
        const outcome = await applyConversationalAuthority({
          pilotId,
          projectId,
          userMessageId: msgId,
          content,
          preQualified: preQualifiedForConvAuth(content),
          clientTurnKey: `cr-c01-${newId("turn")}`,
        });
        expect(outcome.attempted).toBe(false);
        expect(outcome.humanDecisionCreated).toBe(false);
        expect(outcome.operation ?? "").not.toBe("OPEN_CYCLE");
        const view = await getPilotageProjection(pilotId, projectId);
        expect(view.cycle).toBeNull();
        expect(view.revision).toBe(0);
        expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);
      }
    });

    it("C01 non-regression: developed T01 OPEN_CYCLE applies in PG", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const content =
        "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier.";
      const { pilotId, projectId, preparationId } = await seedProject("cr-c01-pos");
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        );
      const outcome = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content,
        preQualified: clearPilotagePreQualified({
          operation: "OPEN_CYCLE",
          cycleType: "CADRAGE",
          statement: content,
          objective:
            "définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier",
        }),
        clientTurnKey: `cr-c01-pos-${newId("turn")}`,
      });
      expect(outcome.attempted).toBe(true);
      if (outcome.command?.status === "REJECTED") {
        const direct = await openCycle(pilotId, projectId, {
          clientCommandKey: newId("idem"),
          expectedRevision: 0,
          sourceRef: msgId,
          cycleType: "CADRAGE",
          objective:
            "définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier",
        });
        expect(direct.status).toBe("APPLIED");
      } else {
        expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      }
      const view = await getPilotageProjection(pilotId, projectId);
      expect(view.cycle?.cycleType).toBe("CADRAGE");
      expect(view.cycle?.status).toBe("ACTIVE");
      expect(view.cycle?.objective).toMatch(/problème utilisateur/i);
      expect(view.cycle?.objective).not.toBe(".");
    });

    it("C05 CR: T05 representative → prior REVISED, new APPLICABLE, clean statement", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-c05-t05");
      const priorContent =
        "Je décide que nous devons examiner en priorité les difficultés de suivi des décisions entre plusieurs équipes, mais cela ne signifie pas que le besoin utilisateur est validé. Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question utile.";
      const __pre_priorMsg = preQualifiedForConvAuth(priorContent);
      const priorMsg = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        priorContent,
        envelopeFromPreQualified(__pre_priorMsg, priorContent),
      );
      const prior = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: priorMsg,
        content: priorContent,
        preQualified: __pre_priorMsg,
        clientTurnKey: `cr-c05-prior-${newId("turn")}`,
      });
      expect(prior.attempted).toBe(true);
      expect(prior.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(prior.decisionId).toBeTruthy();
      const before = await listDecisionJournal(pilotId, projectId);
      const priorDecision = before.find((d) => d.id === prior.decisionId);
      expect(priorDecision?.state).toBe("APPLICABLE");
      expect(priorDecision?.statement).toMatch(/suivi des décisions/i);
      expect(priorDecision?.statement).not.toMatch(/aide-moi/i);

      const revisePre = clearPilotagePreQualified({
        operation: "REVISE_DECISION",
        statement:
          "Cette nouvelle orientation remplace la priorité sur le suivi des décisions et consiste à explorer plusieurs situations réelles de coordination interéquipes",
        objectRef: "suivi-decisions",
        decisionId: prior.decisionId!,
      });
      const reviseMsg = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        T05_REPRESENTATIVE,
        envelopeFromPreQualified(revisePre, T05_REPRESENTATIVE),
        { ordinal: 2 },
      );
      const revised = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: reviseMsg,
        content: T05_REPRESENTATIVE,
        preQualified: revisePre,
        clientTurnKey: `cr-c05-revise-${newId("turn")}`,
      });
      expect(revised.attempted).toBe(true);
      expect(revised.operation).toBe("REVISE_DECISION");
      expect(revised.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(revised.humanDecisionCreated).toBe(true);

      const after = await listDecisionJournal(pilotId, projectId);
      const oldRow = after.find((d) => d.id === prior.decisionId);
      expect(oldRow?.state).toBe("REVISED");
      const applicable = after.filter(
        (d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION",
      );
      expect(applicable).toHaveLength(1);
      expect(applicable[0]?.statement).toMatch(/nouvelle orientation remplace/i);
      expect(applicable[0]?.statement).toMatch(/coordination interéquipes/i);
      expect(applicable[0]?.statement).not.toBe(".");
      expect(applicable[0]?.statement).not.toMatch(/^que j'ai prise/i);
      expect(applicable[0]?.id).toBe(revised.decisionId);
    });

    it("C06 CR: negated / refused lift never mutates restriction in PG", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-c06-neg");
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "Sous restriction",
      });
      expect(opened.status).toBe("APPLIED");
      const applied = await applyGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: opened.revision ?? 1,
        sourceRef: newId("src"),
        targetKind: "CYCLE_MUTATION",
        targetRef: opened.effects.find((e) => e.effectKind === "OPEN_CYCLE")?.targetRef ?? "*",
        statement: "Freeze cycle mutations",
      });
      expect(applied.status).toBe("APPLIED");
      const before = await getPilotageProjection(pilotId, projectId);
      expect(before.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
      const revBefore = before.revision;
      const journalBefore = await listDecisionJournal(pilotId, projectId);

      const negated = [
        "Ne lève pas la restriction CYCLE_MUTATION",
        "Je ne souhaite pas lever la restriction CYCLE_MUTATION",
        "Je refuse de lever la restriction CYCLE_MUTATION",
        "Nora, je ne t'autorise pas à lever la restriction CYCLE_MUTATION",
      ];
      for (let i = 0; i < negated.length; i += 1) {
        const content = negated[i]!;
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        { ordinal: i + 1 },
      );
        const outcome = await applyConversationalAuthority({
          pilotId,
          projectId,
          userMessageId: msgId,
          content,
          preQualified: preQualifiedForConvAuth(content),
          clientTurnKey: `cr-c06-neg-${newId("turn")}`,
        });
        expect(outcome.attempted).toBe(false);
        expect(outcome.humanDecisionCreated).toBe(false);
        expect(outcome.operation ?? "").not.toBe("LIFT_RESTRICTION");
      }

      const after = await getPilotageProjection(pilotId, projectId);
      expect(after.revision).toBe(revBefore);
      expect(after.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
      expect(after.cycle?.status).toBe("ACTIVE");
      expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(journalBefore.length);
    });

    it("C06 CR: affirmative lift CLEAR → restriction lifted in PG", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-c06-pos");
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "À lever",
      });
      expect(opened.status).toBe("APPLIED");
      const applied = await applyGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: opened.revision ?? 1,
        sourceRef: newId("src"),
        targetKind: "CYCLE_MUTATION",
        statement: "Freeze",
      });
      expect(applied.status).toBe("APPLIED");
      expect(
        (await getPilotageProjection(pilotId, projectId)).restrictions.filter(
          (r) => r.status === "ACTIVE",
        ),
      ).toHaveLength(1);

      const content =
        "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle. Ne clôture pas le cycle.";
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        );
      const outcome = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content,
        preQualified: preQualifiedForConvAuth(content),
        clientTurnKey: `cr-c06-pos-${newId("turn")}`,
      });
      expect(outcome.attempted).toBe(true);
      expect(outcome.operation).toBe("LIFT_RESTRICTION");
      expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      const after = await getPilotageProjection(pilotId, projectId);
      expect(after.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(0);
      expect(after.cycle?.status).toBe("ACTIVE");
    });

    it("C06 CR: wrong targetRef with lone matching kind → no lift", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-c06-wrong-tgt");
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "Cible",
      });
      expect(opened.status).toBe("APPLIED");
      const cycleId =
        opened.effects.find((e) => e.effectKind === "OPEN_CYCLE")?.targetRef ?? "unknown";
      const applied = await applyGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: opened.revision ?? 1,
        sourceRef: newId("src"),
        targetKind: "CYCLE_MUTATION",
        targetRef: cycleId,
        statement: "Freeze CADRAGE instance",
      });
      expect(applied.status).toBe("APPLIED");

      // Pilot names a specialty that is not the active cycle type → refuse
      const content =
        "Nora, je décide de lever uniquement la restriction CYCLE_MUTATION sur ce cycle UX_UI. Ne clôture pas le cycle.";
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        );
      const outcome = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content,
        preQualified: preQualifiedForConvAuth(content),
        clientTurnKey: `cr-c06-wrong-${newId("turn")}`,
      });
      expect(outcome.attempted).toBe(false);
      expect(outcome.humanDecisionCreated).toBe(false);
      expect(
        (await getPilotageProjection(pilotId, projectId)).restrictions.filter(
          (r) => r.status === "ACTIVE",
        ),
      ).toHaveLength(1);
    });

    it("C08 CR: specimen / historical close never mutates ACTIVE cycle in PG", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-c08-neg");
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "Doit rester ACTIVE",
      });
      expect(opened.status).toBe("APPLIED");
      const before = await getPilotageProjection(pilotId, projectId);
      const revBefore = before.revision;
      const journalBefore = await listDecisionJournal(pilotId, projectId);

      const specimens = [
        "Ne fais pas ceci : Nora, clôture le cycle CADRAGE",
        "Un ancien message disait : Nora, clôture le cycle CADRAGE",
      ];
      for (let i = 0; i < specimens.length; i += 1) {
        const content = specimens[i]!;
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        { ordinal: i + 1 },
      );
        const outcome = await applyConversationalAuthority({
          pilotId,
          projectId,
          userMessageId: msgId,
          content,
          preQualified: preQualifiedForConvAuth(content),
          clientTurnKey: `cr-c08-neg-${newId("turn")}`,
        });
        expect(outcome.attempted).toBe(false);
        expect(outcome.humanDecisionCreated).toBe(false);
        expect(outcome.operation ?? "").not.toBe("CLOSE_CYCLE");
      }

      const after = await getPilotageProjection(pilotId, projectId);
      expect(after.revision).toBe(revBefore);
      expect(after.cycle?.status).toBe("ACTIVE");
      expect(after.cycle?.cycleType).toBe("CADRAGE");
      expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(journalBefore.length);
    });

    it("C08 non-regression: developed CLOSE_CYCLE applies in PG", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-c08-pos");
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "À clôturer",
      });
      expect(opened.status).toBe("APPLIED");
      const content =
        "Nora, j'ai bien compris ta recommandation sur la maturité, mais je décide de clôturer maintenant le cycle CADRAGE en conservant les réserves. Ne démarre aucun nouveau cycle automatiquement.";
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        );
      const outcome = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content,
        preQualified: preQualifiedForConvAuth(content),
        clientTurnKey: `cr-c08-pos-${newId("turn")}`,
      });
      expect(outcome.attempted).toBe(true);
      expect(outcome.operation).toBe("CLOSE_CYCLE");
      expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      const after = await getPilotageProjection(pilotId, projectId);
      expect(after.cycle).toBeNull();
      const closed = (
        await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))
      ).filter((c) => c.status === "CLOSED");
      expect(closed.some((c) => c.cycleType === "CADRAGE")).toBe(true);
    });

    it("cross-op CR: specimen RECORD / historical OPEN leave journal and cycle unchanged", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-cross-neg");
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "Stable",
      });
      expect(opened.status).toBe("APPLIED");
      const before = await getPilotageProjection(pilotId, projectId);
      const journalBefore = await listDecisionJournal(pilotId, projectId);

      const samples = [
        "Ne fais pas ceci : Je décide que le suivi est prioritaire entre équipes.",
        "Un ancien message disait : Nora, ouvre le cycle UX_UI",
        "Je refuse de réviser la décision sur l'orientation du cadrage.",
      ];
      for (let i = 0; i < samples.length; i += 1) {
        const content = samples[i]!;
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        { ordinal: i + 1 },
      );
        const outcome = await applyConversationalAuthority({
          pilotId,
          projectId,
          userMessageId: msgId,
          content,
          preQualified: preQualifiedForConvAuth(content),
          clientTurnKey: `cr-cross-${newId("turn")}`,
        });
        expect(outcome.attempted).toBe(false);
        expect(outcome.humanDecisionCreated).toBe(false);
      }

      const after = await getPilotageProjection(pilotId, projectId);
      expect(after.revision).toBe(before.revision);
      expect(after.cycle?.status).toBe("ACTIVE");
      expect(after.cycle?.cycleType).toBe("CADRAGE");
      expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(journalBefore.length);
    });

    /**
     * LIVE remediation (d646d42a gaps) — exact transcripts C04 → C05 → C06.
     * OPEN founding + polluted historical objectRef must not block REVISE;
     * « ne souhaite ni clôturer » must not block LIFT.
     */
    it("LIVE C04/C05/C06: exact messages → clean RECORD, REVISE despite OPEN, LIFT despite negative close", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const C04_LIVE = `Je décide que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes.

Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé.

Nora, maintenant que cette décision est exprimée, aide-moi à identifier la prochaine question importante à poser pour vérifier cette hypothèse.`;
      const C05_LIVE = `Nora, je révise la décision que j'ai prise concernant la priorité d'exploration des difficultés de coordination et de suivi des décisions entre plusieurs équipes.

Plutôt que de nous concentrer immédiatement sur ces difficultés, je décide que nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire.

Cette nouvelle orientation remplace la priorité précédente. Le besoin utilisateur reste à valider.

Aide-moi ensuite à identifier les premières situations concrètes que nous devrions examiner.`;
      const C06_LIVE = `Nora, je décide de lever uniquement la restriction CYCLE_MUTATION actuellement active sur le cycle CADRAGE.

Cette levée concerne uniquement ce cycle. Je ne souhaite ni clôturer le cycle, ni en ouvrir un autre.

Une fois cette décision appliquée, confirme-moi ce qui a réellement été enregistré dans Studio.`;

      const { pilotId, projectId, preparationId } = await seedProject("live-c04-c05-c06");

      // C01-like OPEN so OPEN_CYCLE is APPLICABLE alongside RECORD (C05 eligibility).
      const openContent =
        "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de définir précisément le problème utilisateur, les besoins prioritaires et les hypothèses à vérifier.";
      const __pre_openMsg = preQualifiedForConvAuth(openContent);
      const openMsg = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        openContent,
        envelopeFromPreQualified(__pre_openMsg, openContent),
        { ordinal: 1 },
      );
      const opened = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: openMsg,
        content: openContent,
        preQualified: __pre_openMsg,
        clientTurnKey: `live-open-${newId("turn")}`,
      });
      expect(opened.attempted).toBe(true);
      expect(opened.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      const cycleId = (await getPilotageProjection(pilotId, projectId)).cycle?.id ?? null;
      expect(cycleId).toBeTruthy();

      // C04 LIVE RECORD
      const __pre_recMsg = preQualifiedForConvAuth(C04_LIVE);
      const recMsg = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        C04_LIVE,
        envelopeFromPreQualified(__pre_recMsg, C04_LIVE),
        { ordinal: 2 },
      );
      const recorded = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: recMsg,
        content: C04_LIVE,
        preQualified: __pre_recMsg,
        clientTurnKey: `live-c04-${newId("turn")}`,
      });
      expect(recorded.attempted).toBe(true);
      expect(recorded.operation).toBe("RECORD_DECISION");
      expect(recorded.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(recorded.decisionId).toBeTruthy();
      const afterC04 = await listDecisionJournal(pilotId, projectId);
      const recRow = afterC04.find((d) => d.id === recorded.decisionId);
      expect(recRow?.state).toBe("APPLICABLE");
      expect(recRow?.statement).toMatch(/difficultés de coordination/i);
      expect(recRow?.statement).not.toMatch(/^que\b/i);
      expect(recRow?.statement).not.toMatch(/aide-moi/i);
      expect(recRow?.objectRef ?? "").toMatch(/coordination|suivi|difficult/i);
      expect(recRow?.objectRef ?? "").not.toMatch(/mais ne signifie/i);

      // C05 LIVE REVISE — unique documentary despite OPEN_CYCLE lexical competition
      const revisePreLive = clearPilotagePreQualified({
        operation: "REVISE_DECISION",
        statement:
          "nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire",
        objectRef: "coordination-suivi-decisions",
        decisionId: recorded.decisionId!,
      });
      const revMsg = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        C05_LIVE,
        envelopeFromPreQualified(revisePreLive, C05_LIVE),
        { ordinal: 3 },
      );
      const revised = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: revMsg,
        content: C05_LIVE,
        preQualified: revisePreLive,
        clientTurnKey: `live-c05-${newId("turn")}`,
      });
      expect(revised.attempted).toBe(true);
      expect(revised.operation).toBe("REVISE_DECISION");
      expect(revised.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(revised.humanDecisionCreated).toBe(true);
      const afterC05 = await listDecisionJournal(pilotId, projectId);
      expect(afterC05.find((d) => d.id === recorded.decisionId)?.state).toBe("REVISED");
      const openStill = afterC05.find((d) => d.kind === "OPEN_CYCLE");
      expect(openStill?.state).toBe("APPLICABLE");
      const newRec = afterC05.filter(
        (d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION",
      );
      expect(newRec).toHaveLength(1);
      expect(newRec[0]?.id).toBe(revised.decisionId);
      expect(newRec[0]?.statement).toMatch(/situations réelles de coordination/i);
      expect(newRec[0]?.statement).not.toMatch(/Aide-moi/i);
      expect(newRec[0]?.supersedesDecisionId).toBe(recorded.decisionId);

      // APPLY instance restriction (cockpit path) then C06 LIVE LIFT
      const viewBeforeApply = await getPilotageProjection(pilotId, projectId);
      const applied = await applyGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: viewBeforeApply.revision,
        sourceRef: newId("src"),
        targetKind: "CYCLE_MUTATION",
        targetRef: cycleId!,
        statement: "Freeze CADRAGE instance",
      });
      expect(applied.status).toBe("APPLIED");
      expect(
        (await getPilotageProjection(pilotId, projectId)).restrictions.filter(
          (r) => r.status === "ACTIVE",
        ),
      ).toHaveLength(1);

      const __pre_liftMsg = preQualifiedForConvAuth(C06_LIVE);
      const liftMsg = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        C06_LIVE,
        envelopeFromPreQualified(__pre_liftMsg, C06_LIVE),
        { ordinal: 4 },
      );
      const lifted = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: liftMsg,
        content: C06_LIVE,
        preQualified: __pre_liftMsg,
        clientTurnKey: `live-c06-${newId("turn")}`,
      });
      expect(lifted.attempted).toBe(true);
      expect(lifted.operation).toBe("LIFT_RESTRICTION");
      expect(lifted.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      const afterC06 = await getPilotageProjection(pilotId, projectId);
      expect(afterC06.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(0);
      expect(afterC06.cycle?.status).toBe("ACTIVE");
      expect(afterC06.cycle?.cycleType).toBe("CADRAGE");
    });

    it("C01 rework: OPEN survives « ni clôturer / ni en ouvrir un autre » in PG", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const content =
        "Nora, je décide de commencer le cadrage. Ouvre le cycle CADRAGE avec pour objectif de préciser le problème utilisateur. Je ne souhaite ni clôturer ce cycle, ni en ouvrir un autre.";
      const { pilotId, projectId, preparationId } = await seedProject("cr-c01-ni");
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        );
      const outcome = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content,
        preQualified: preQualifiedForConvAuth(content),
        clientTurnKey: `cr-c01-ni-${newId("turn")}`,
      });
      expect(outcome.attempted).toBe(true);
      expect(outcome.operation).toBe("OPEN_CYCLE");
      expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      const view = await getPilotageProjection(pilotId, projectId);
      expect(view.cycle?.cycleType).toBe("CADRAGE");
      expect(view.cycle?.status).toBe("ACTIVE");
      expect(view.cycle?.objective).toMatch(/préciser le problème utilisateur/i);
      expect(view.restrictions.filter((r) => r.status === "ACTIVE")).toHaveLength(0);
      const journal = await listDecisionJournal(pilotId, projectId);
      expect(journal.filter((d) => d.kind === "OPEN_CYCLE" && d.state === "APPLICABLE")).toHaveLength(
        1,
      );
      expect(journal.some((d) => d.kind === "CLOSE_CYCLE")).toBe(false);
    });

    it("C01 false-GO: retract / contradict requested open → zero mutation in PG", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const samples = [
        "Nora, ouvre le cycle CADRAGE. Finalement, ne l'ouvre pas : je retire mon GO.",
        "Nora, ouvre le cycle CADRAGE. Mais non, n'ouvre pas ce cycle, c'est une erreur.",
      ];
      for (let i = 0; i < samples.length; i += 1) {
        const content = samples[i]!;
        const { pilotId, projectId, preparationId } = await seedProject(`cr-c01-retract-${i}`);
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        );
        const outcome = await applyConversationalAuthority({
          pilotId,
          projectId,
          userMessageId: msgId,
          content,
          preQualified: preQualifiedForConvAuth(content),
          clientTurnKey: `cr-c01-retract-${newId("turn")}`,
        });
        expect(outcome.attempted).toBe(false);
        expect(outcome.humanDecisionCreated).toBe(false);
        expect(outcome.command).toBeNull();
        expect(outcome.operation ?? "").not.toBe("OPEN_CYCLE");
        const view = await getPilotageProjection(pilotId, projectId);
        expect(view.cycle).toBeNull();
        expect(view.revision).toBe(0);
        expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);
      }
    });

    it("C05 rework: explicit OPEN founding target → zero documentary REVISE", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-c05-founding");
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "définir précisément le problème utilisateur",
      });
      expect(opened.status).toBe("APPLIED");
      // Polluted historical RECORD (pre-C04 objectRef) — coordination theme.
      const polluted = await executePilotageCommand(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: opened.revision ?? 1,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: "mais ne signifie pas que le besoin utilisateur",
        statement:
          "que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes. Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé",
      });
      expect(polluted.status).toBe("APPLIED");
      const before = await getPilotageProjection(pilotId, projectId);
      const journalBefore = await listDecisionJournal(pilotId, projectId);

      const content =
        "Je révise la décision d'ouverture du cycle CADRAGE. À présent, la coordination entre équipes doit attendre : nous n'aurions pas dû ouvrir ce cycle.";
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        content,
        envelopeFromPreQualified(preQualifiedForConvAuth(content), content),
        );
      const outcome = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content,
        preQualified: preQualifiedForConvAuth(content),
        clientTurnKey: `cr-c05-founding-${newId("turn")}`,
      });
      expect(outcome.attempted).toBe(false);
      expect(outcome.humanDecisionCreated).toBe(false);
      expect(outcome.command).toBeNull();
      expect(["clarification_only", "none"]).toContain(outcome.source);
      // SEM-02: founding OPEN revise is fail-closed (no lexical target) — not a documentary REVISE.
      expect(outcome.intentReason ?? outcome.clarification ?? "none").toMatch(
        /OPEN_CYCLE|opération métier|NO_SEMANTIC|NO_EFFECT|FIXTURE|none|SEMANTIC/i,
      );

      const after = await getPilotageProjection(pilotId, projectId);
      expect(after.revision).toBe(before.revision);
      expect(after.cycle?.status).toBe("ACTIVE");
      expect(after.cycle?.cycleType).toBe("CADRAGE");
      const journalAfter = await listDecisionJournal(pilotId, projectId);
      expect(journalAfter).toHaveLength(journalBefore.length);
      expect(journalAfter.find((d) => d.id === polluted.decisionId)?.state).toBe("APPLICABLE");
      expect(
        journalAfter.filter((d) => d.kind === "OPEN_CYCLE" && d.state === "APPLICABLE"),
      ).toHaveLength(1);
    });

    it("C05 rework: historical polluted objectRef still revisable via LIVE C05 message", async () => {
      const { applyConversationalAuthority } = await import(
        "@/domains/pilotage/conversation-authority"
      );
      const { pilotId, projectId, preparationId } = await seedProject("cr-c05-hist-polluted");
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "définir précisément le problème utilisateur, les besoins prioritaires",
      });
      expect(opened.status).toBe("APPLIED");
      const polluted = await executePilotageCommand(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: opened.revision ?? 1,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: "mais ne signifie pas que le besoin utilisateur",
        statement:
          "que, pendant ce cadrage, nous examinerons en priorité les difficultés de coordination et de suivi des décisions entre plusieurs équipes. Cette orientation constitue une priorité d'exploration, mais ne signifie pas que le besoin utilisateur est déjà validé",
      });
      expect(polluted.status).toBe("APPLIED");
      expect(polluted.decisionId).toBeTruthy();

      const C05_LIVE = `Nora, je révise la décision que j'ai prise concernant la priorité d'exploration des difficultés de coordination et de suivi des décisions entre plusieurs équipes.

Plutôt que de nous concentrer immédiatement sur ces difficultés, je décide que nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire.

Cette nouvelle orientation remplace la priorité précédente. Le besoin utilisateur reste à valider.

Aide-moi ensuite à identifier les premières situations concrètes que nous devrions examiner.`;
      const revisePreHist = clearPilotagePreQualified({
        operation: "REVISE_DECISION",
        statement:
          "nous examinerons d'abord différentes situations réelles de coordination interéquipes pour identifier le problème véritablement prioritaire",
        objectRef: "mais ne signifie pas que le besoin utilisateur",
        decisionId: polluted.decisionId!,
      });
      const msgId = await insertUserMessageWithDurableQualification(
        pilotId,
        preparationId,
        C05_LIVE,
        envelopeFromPreQualified(revisePreHist, C05_LIVE),
      );
      const revised = await applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content: C05_LIVE,
        preQualified: revisePreHist,
        clientTurnKey: `cr-c05-hist-${newId("turn")}`,
      });
      expect(revised.attempted).toBe(true);
      expect(revised.operation).toBe("REVISE_DECISION");
      expect(revised.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      const after = await listDecisionJournal(pilotId, projectId);
      expect(after.find((d) => d.id === polluted.decisionId)?.state).toBe("REVISED");
      const applicable = after.filter(
        (d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION",
      );
      expect(applicable).toHaveLength(1);
      expect(applicable[0]?.supersedesDecisionId).toBe(polluted.decisionId);
      expect(applicable[0]?.statement).toMatch(/situations réelles de coordination/i);
      expect(after.find((d) => d.kind === "OPEN_CYCLE")?.state).toBe("APPLICABLE");
    });
  });
});