/**
 * M2 F2 cognitive piloting e2e — live ContextSnapshot + anti-claims + isolation.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
  RUNTIME_DISCLOSURES,
} from "@/lib/vertical-slice-runtime";

const tempDirs: string[] = [];

describe("M2 F2 cognitive piloting e2e", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-m2-f2-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-08-13T12:30:00.000Z",
    });
    const created = await runtime.createProject({
      name: "M2 Cognitive",
      objective: "Pilotage cognitif durable",
      context: "Nora F2 M2",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "M2",
      idempotencyKey: `idem:m2-f2-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) {
      delete process.env.OPS1_CONVERSATION_PROVIDER;
    } else {
      process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
    }
  });

  it("B — actionable Standard/Light: Cycle+LPS+live snapshot; no HD/execution", async () => {
    const runtime = getRuntimeApplicationService();
    expect(runtime.oa).toBeTruthy();
    const before = await runtime.getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.f2?.qualification?.cycleInstanceId).toMatch(/^cyc:f2-/);
    expect(result.f2?.qualification?.executionAuthority).toBe(false);
    expect(result.f2?.qualification?.ckcResolutionRef).toMatch(/^ckc:m2-/);
    expect(result.f2?.proposal?.contextSnapshot.lpsVersion).toBe(
      before.livingState.version + 1,
    );
    expect(result.f2?.proposal?.contextSnapshot.lpsId).not.toBe(
      before.livingState.id,
    );
    expect(result.f2?.decision).toBeNull();
    expect(result.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");

    const after = await runtime.getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version + 1);
    expect(after.livingState.activeCycleInstanceId).toBe(
      result.f2?.qualification?.cycleInstanceId,
    );
    expect(after.livingState.ckcResolutionRef).toBe(
      result.f2?.qualification?.ckcResolutionRef,
    );
    expect(after.disclosures.persistence).toBe(
      "PARTIAL_PROJECT_LPS_CYCLE_DURABLE",
    );
    expect(after.disclosures.cycleInstanceRestartSafe).toBe(true);
    expect(after.disclosures.agentExecution).toBe("DISABLED");

    const cycle = await runtime.oa!.cycleServices.getCycle.execute({
      cycleInstanceId: result.f2!.qualification!.cycleInstanceId!,
    });
    expect(cycle.ok).toBe(true);
    if (!cycle.ok) return;
    expect(cycle.cycle.status).not.toBe("active" as never);
  });

  it("D/E — ambiguous and informative do not mutate Cycle/LPS", async () => {
    const runtime = getRuntimeApplicationService();
    const before = await runtime.getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;

    const ambiguous = await orchestrateAssistantSend({
      projectId,
      content: "Fais le nécessaire __F2_AMBIGUOUS__",
    });
    expect(ambiguous.ok).toBe(true);
    if (!ambiguous.ok) return;
    expect(ambiguous.f2?.proposal).toBeNull();

    const informative = await orchestrateAssistantSend({
      projectId,
      content: "Résume l'objectif __F2_INFORMATIVE__",
    });
    expect(informative.ok).toBe(true);
    if (!informative.ok) return;
    expect(informative.f2?.turnKind).toBe("f1_informative");

    const after = await runtime.getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();
  });

  it("J — disclosures anti-claims (no FULLY_DURABLE / V3_ADOPTED / Cursor REAL)", () => {
    expect(RUNTIME_DISCLOSURES.persistence).toBe(
      "PARTIAL_PROJECT_LPS_CYCLE_DURABLE",
    );
    expect(RUNTIME_DISCLOSURES.agentExecution).toBe("DISABLED");
    expect(RUNTIME_DISCLOSURES.productPersistence).toBe(
      "SQLITE_OA_PRODUCT_STORE",
    );
    expect(JSON.stringify(RUNTIME_DISCLOSURES)).not.toMatch(
      /FULLY_DURABLE|V3_ADOPTED|RUN_READY|PRODUCT_READY/,
    );
    expect(RUNTIME_DISCLOSURE_MESSAGES_JOINED()).toMatch(/not ADOPTED/i);
  });

  it("I — Product DB path does not collide with D1/OPS1", () => {
    const runtime = getRuntimeApplicationService();
    const store = runtime.oa?.projectServices.store as {
      dbPath?: string;
    };
    expect(store?.dbPath).toBeTruthy();
    const p = (store.dbPath ?? "").replace(/\\/g, "/").toLowerCase();
    expect(p).not.toMatch(/\/d1\.sqlite$/);
    expect(p).not.toMatch(/\/ops1\.sqlite$/);
    expect(p).not.toMatch(/\/ops1\//);
  });
});

function RUNTIME_DISCLOSURE_MESSAGES_JOINED(): string {
  return RUNTIME_DISCLOSURES.messages.join(" ");
}
