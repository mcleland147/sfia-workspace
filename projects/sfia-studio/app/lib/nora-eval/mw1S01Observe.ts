/**
 * MW1-S01 / CE-03 — runtime-derived DeterministicObservation.
 * Executes real Memory B probes + F1 product orchestration; does NOT hardcode
 * availability states or observable IDs as constants for scoring.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import type { ProviderInputItem } from "@/lib/platform/ai";
import {
  ProductSqliteSession,
  probeMemoryBAvailability,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { DeterministicObservation } from "./scorers";

/** Captures Agents→completeRound payloads (same Fake path as production). */
export class CapturingRoundFakeProvider extends FakeConversationProvider {
  readonly roundItems: ProviderInputItem[][] = [];

  override async completeRound(input: {
    items: ProviderInputItem[];
    tools: import("@/lib/platform/tools").ToolDefinition[];
  }) {
    this.roundItems.push(
      input.items.map((item) =>
        item.type === "message"
          ? { ...item, content: item.content }
          : { ...item },
      ) as ProviderInputItem[],
    );
    return super.completeRound(input);
  }

  capturedText(): string {
    return this.roundItems
      .flat()
      .map((item) =>
        item.type === "message" ? `${item.role}:${item.content}` : "",
      )
      .join("\n");
  }
}

export type Mw1S01RuntimeFacts = {
  memoryBAvailabilityStates: string[];
  unavailableNeqEmpty: boolean;
  sessionNeqTruthC: boolean;
  noInventedTranscript: boolean;
  truthCReachedCognition: boolean;
  agentsRuntimeUsed: boolean;
  sessionIdNullWhenUnavailable: boolean;
  piloteDisclosureHonest: boolean;
};

/**
 * Pure derivation — observable credited only when runtime facts satisfy CE-03.
 * Used by the observer and by negative fail-closed tests.
 */
export function observationFromMw1S01Facts(
  facts: Mw1S01RuntimeFacts,
): DeterministicObservation {
  const states = new Set(facts.memoryBAvailabilityStates);
  const criteriaOk =
    states.has("available_with_history") &&
    states.has("available_empty") &&
    states.has("unavailable") &&
    facts.unavailableNeqEmpty &&
    facts.sessionNeqTruthC &&
    facts.noInventedTranscript &&
    facts.truthCReachedCognition &&
    facts.agentsRuntimeUsed &&
    facts.sessionIdNullWhenUnavailable &&
    facts.piloteDisclosureHonest;

  return {
    productPath: facts.agentsRuntimeUsed ? "agents" : "none",
    memoryBAvailabilityStates: [...states],
    unavailableNeqEmpty: facts.unavailableNeqEmpty,
    sessionNeqTruthC: facts.sessionNeqTruthC,
    noInventedTranscript: facts.noInventedTranscript,
    observedObservableIds: criteriaOk
      ? ["obs.memory.honest_continuity"]
      : [],
  };
}

/**
 * Execute actual S01 product/runtime proofs and build DeterministicObservation
 * from observed results (causal chain for NCC-BAR-07 / CE-03).
 */
export async function observeMw1S01FromRuntime(): Promise<DeterministicObservation> {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-s01-obs-"));
  const sessionDbPath = path.join(dir, "nora-session.sqlite");
  const productDbPath = path.join(dir, "oa-product.sqlite");
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  const prevProductDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;

  try {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;

    // --- AVAILABLE_WITH_HISTORY ---
    const seed = new ProductSqliteSession({
      projectId: "prj:s01-obs-hist",
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    await seed.addItems([userTextItem("s01-obs-seed-token")]);
    seed.close();
    const histProbe = await probeMemoryBAvailability({
      projectId: "prj:s01-obs-hist",
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    const histState = histProbe.availability;
    histProbe.session?.close();

    // --- AVAILABLE_EMPTY (different project, same DB) ---
    const emptyProbe = await probeMemoryBAvailability({
      projectId: "prj:s01-obs-empty",
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    const emptyState = emptyProbe.availability;
    emptyProbe.session?.close();

    // --- Durable Truth C via product API + remount ---
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });
    const marker = `S01-OBS-TRUTH-C-MARKER-${Date.now()}`;
    const created = await runtime.createProject({
      name: "S01 Eval Observe",
      objective: marker,
      context: "MW1-S01 runtime-derived observation",
      criticality: "STANDARD",
      constraints: ["AUCUNE EXÉCUTION", "LECTURE SEULE"],
      shortReference: "S01OBS",
      idempotencyKey: `s01-obs-${Date.now()}-${Math.random()}`,
    });
    if (!created.ok) {
      return observationFromMw1S01Facts({
        memoryBAvailabilityStates: [histState, emptyState],
        unavailableNeqEmpty: false,
        sessionNeqTruthC: false,
        noInventedTranscript: false,
        truthCReachedCognition: false,
        agentsRuntimeUsed: false,
        sessionIdNullWhenUnavailable: false,
        piloteDisclosureHonest: false,
      });
    }
    const projectId = created.project.projectId;

    // Simulate process-local restart: destroy singleton, remount same Product DB
    resetRuntimeApplicationServiceForTests();
    getRuntimeApplicationService({
      productDbPath,
      auditMode: "noop",
    });

    const truthBefore = fs.readFileSync(productDbPath);

    // UNAVAILABLE via real filesystem open failure (≠ empty)
    const blocker = path.join(dir, "session-blocked");
    fs.writeFileSync(blocker, "blocker");
    const blockedSessionPath = path.join(blocker, "nora-session.sqlite");

    const capturing = new CapturingRoundFakeProvider({
      scripted: [
        "[TEST/FAKE] Proceeding from Truth C only — no Memory B transcript invented.",
      ],
    });

    const result = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Resume from durable Project / Truth C state.",
      provider: capturing,
      sessionDbPath: blockedSessionPath,
    });

    const truthAfter = fs.readFileSync(productDbPath);
    const truthUnchanged = Buffer.compare(truthBefore, truthAfter) === 0;

    // Session DB (if any) must not grow oa_* product tables
    let sessionNeqTruthC = truthUnchanged;
    if (fs.existsSync(sessionDbPath)) {
      const sessionDb = new DatabaseSync(sessionDbPath);
      const tables = (
        sessionDb
          .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
          .all() as Array<{ name: string }>
      ).map((r) => r.name);
      sessionDb.close();
      sessionNeqTruthC =
        sessionNeqTruthC &&
        tables.every((t) => t === "session_items") &&
        !tables.some((t) => t.startsWith("oa_"));
    }

    const captured = capturing.capturedText();
    const truthCReachedCognition =
      result.ok === true &&
      captured.includes(marker) &&
      captured.includes(projectId) &&
      (result.project?.objective === marker);

    const unavailableState =
      result.ok && result.memoryBAvailability
        ? result.memoryBAvailability
        : "unavailable_not_observed";

    const unavailableNeqEmpty =
      histState === "available_with_history" &&
      emptyState === "available_empty" &&
      unavailableState === "unavailable";

    const agentsRuntimeUsed =
      result.ok === true && result.cognitiveRuntime === "agents";

    const sessionIdNullWhenUnavailable =
      result.ok === true &&
      result.memoryBAvailability === "unavailable" &&
      result.sessionId === null;

    const piloteDisclosureHonest =
      result.ok === true &&
      typeof result.ephemeralNotice === "string" &&
      /non disponible/i.test(result.ephemeralNotice) &&
      !/historique perdu/i.test(result.ephemeralNotice);

    const noInventedTranscript =
      result.ok === true &&
      result.memoryBAvailability === "unavailable" &&
      sessionIdNullWhenUnavailable &&
      piloteDisclosureHonest &&
      !/HumanDecision|autorisation GO/i.test(result.text ?? "");

    const states = [histState, emptyState, unavailableState].filter(
      (s) =>
        s === "available_with_history" ||
        s === "available_empty" ||
        s === "unavailable",
    );

    return observationFromMw1S01Facts({
      memoryBAvailabilityStates: states,
      unavailableNeqEmpty,
      sessionNeqTruthC,
      noInventedTranscript,
      truthCReachedCognition,
      agentsRuntimeUsed,
      sessionIdNullWhenUnavailable,
      piloteDisclosureHonest,
    });
  } finally {
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    }
    if (prevProductDb === undefined) {
      delete process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
    } else {
      process.env.SFIA_STUDIO_PRODUCT_DB_PATH = prevProductDb;
    }
    try {
      resetRuntimeApplicationServiceForTests();
    } catch {
      /* ignore */
    }
    fs.rmSync(dir, { recursive: true, force: true });
  }
}
