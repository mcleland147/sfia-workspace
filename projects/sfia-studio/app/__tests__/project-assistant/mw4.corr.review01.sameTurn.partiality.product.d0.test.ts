/** @vitest-environment node */
/**
 * CORR-MW4-PR-REVIEW-01 — same-turn MW4-S03 product-path proof.
 *
 * Product entrypoint: orchestrateAssistantSend → F1 orchestrateProjectAssistantTurn.
 * Real ToolRouter/EventSink/collectToolTelemetry; Fake substitutes provider only.
 * ZERO LIVE OpenAI. Does NOT inject readCoverageFacts or pre-seed current-turn coverage.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import * as workspaceRootMod from "@/lib/platform/repository/workspaceRoot";

const DOC_A = "projects/sfia-studio/docs/mw4-s03-doc-a.md";
const DOC_B = "projects/sfia-studio/docs/mw4-s03-doc-b.md";
const DOC_A_LINES = 12;
const DOC_B_LINES = 40;

const tempDirs: string[] = [];

function intentInformative(): string {
  return JSON.stringify({
    intentClass: "informative",
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: {
      ambiguity: "low",
      reasoningDepth: "medium",
      sourceBreadth: "high",
      toolDependency: "high",
      contradictionRisk: "low",
      verificationNeed: "medium",
    },
    objective: "Comparer deux documents policy",
    scope: null,
    rephrasedRequest: "Lire doc A intégralement et doc B partiellement",
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
  });
}

function makePolicyWorkspace(): string {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-s03-ws-"));
  tempDirs.push(root);
  const docs = path.join(root, "projects/sfia-studio/docs");
  fs.mkdirSync(docs, { recursive: true });
  fs.writeFileSync(
    path.join(root, DOC_A),
    Array.from({ length: DOC_A_LINES }, (_, i) => `A-line-${i + 1}`).join("\n"),
    "utf8",
  );
  fs.writeFileSync(
    path.join(root, DOC_B),
    Array.from({ length: DOC_B_LINES }, (_, i) => `B-line-${i + 1}`).join("\n"),
    "utf8",
  );
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: root });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: root,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: root });
  execFileSync("git", ["add", "."], { cwd: root });
  execFileSync("git", ["commit", "-m", "mw4-s03 fixtures"], { cwd: root });
  return root;
}

describe("CORR-MW4-PR-REVIEW-01 — same-turn MW4-S03 product partiality", () => {
  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
  let workspaceRoot: string;
  let sessionDbPath: string;
  let workspaceSpy: { mockRestore(): void } | undefined;

  beforeEach(() => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPS1_CONVERSATION_PROVIDER;
    delete process.env.OPENAI_API_KEY;
    resetRuntimeApplicationServiceForTests();
    setConversationProviderForTests(null);
    workspaceRoot = makePolicyWorkspace();
    const sessionDir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-s03-sess-"));
    tempDirs.push(sessionDir);
    sessionDbPath = path.join(sessionDir, "nora-session.sqlite");
    workspaceSpy = vi
      .spyOn(workspaceRootMod, "resolveWorkspaceRootFromAppCwd")
      .mockReturnValue(workspaceRoot);
  });

  afterEach(() => {
    workspaceSpy?.mockRestore();
    workspaceSpy = undefined;
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
  });

  async function createProject(): Promise<string> {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw4-s03-oa-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
    });
    const created = await runtime.createProject({
      name: "MW4-S03 Same-Turn Fixture",
      objective: "Prove same-turn read partiality on product path.",
      context: "Two policy docs under projects/sfia-studio/docs.",
      criticality: "STANDARD",
      constraints: ["LECTURE SEULE", "AUCUNE EXÉCUTION"],
      shortReference: "S03",
      idempotencyKey: `idem:s03-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    return created.projectId;
  }

  it("same-turn product path: full A + suffix-partial B → mw4 partiality without injected coverage", async () => {
    const projectId = await createProject();

    const provider = new FakeConversationProvider({
      scripted: [intentInformative()],
      toolScript: [
        {
          kind: "tool_calls",
          toolCalls: [
            {
              callId: "call_read_a_full",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({
                path: DOC_A,
                startLine: 1,
                endLine: DOC_A_LINES,
              }),
            },
            {
              callId: "call_read_b_suffix",
              name: "git_local_read_file",
              argumentsJson: JSON.stringify({
                path: DOC_B,
                startLine: 20,
                endLine: DOC_B_LINES,
              }),
            },
          ],
        },
        {
          kind: "message",
          text: "[TEST/FAKE · NON LIVE] Synthèse des lectures outils — sans revendiquer un corpus complet.",
        },
      ],
    });

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Lis intégralement projects/sfia-studio/docs/mw4-s03-doc-a.md et lis seulement la fin de projects/sfia-studio/docs/mw4-s03-doc-b.md (suffixe), puis synthétise sans revendiquer une lecture complète du corpus.",
      provider,
      sessionDbPath,
    });

    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error("send failed");

    // Real same-turn ToolRouter boundary traversed
    expect(result.toolCalls).toBeGreaterThanOrEqual(2);
    expect(result.toolRounds).toBeGreaterThanOrEqual(1);
    const readEvents = (result.toolEvents ?? []).filter(
      (e) => e.toolName === "git_local_read_file" && e.status === "succeeded",
    );
    expect(readEvents.length).toBeGreaterThanOrEqual(2);
    expect(
      readEvents.some(
        (e) =>
          (e.pathOrRef ?? "").includes("mw4-s03-doc-a.md") &&
          /L1-12\/12/.test(e.summary ?? ""),
      ),
    ).toBe(true);
    expect(
      readEvents.some(
        (e) =>
          (e.pathOrRef ?? "").includes("mw4-s03-doc-b.md") &&
          /L20-40\/40/.test(e.summary ?? ""),
      ),
    ).toBe(true);

    // Product MW4 surface from same-turn telemetry (not injected facts)
    expect(result.mw4).toBeTruthy();
    expect(result.mw4?.readCoverageOverall).toBe("partial");
    expect(result.mw4?.readCoverageOverall).not.toBe("full");
    expect(result.mw4?.readCoverageOverall).not.toBe("none");

    const disclosure = result.mw4?.readCoverageDisclosure ?? "";
    expect(disclosure.length).toBeGreaterThan(0);
    expect(disclosure.toLowerCase()).toMatch(/partial|mixed/);
    // Must not advertise false corpus completeness
    expect(disclosure.toLowerCase()).not.toMatch(/overall coverage:\s*full\b/);

    // Partial B is recognized as read (path present in toolEvents/sources), not absent
    expect(
      (result.sources ?? []).some((s) =>
        (s.pathOrRef ?? "").includes("mw4-s03-doc-b.md"),
      ) ||
        readEvents.some((e) => (e.pathOrRef ?? "").includes("mw4-s03-doc-b.md")),
    ).toBe(true);

    // Current-turn coverage surface is present without remembered-prior framing
    expect(disclosure).not.toMatch(/remembered_prior/i);

    // Pilote-facing text must not invent full-corpus certainty
    const textLc = result.text.toLowerCase();
    expect(textLc).not.toMatch(
      /corpus est complet|lecture compl[eè]te de tous les documents|tous les documents (?:ont [eé]t[eé] |sont )lus? enti[eè]rement/,
    );
    // Same-turn product surface carries honest partiality for the Pilote
    expect(result.mw4?.readCoverageOverall).toBe("partial");
    expect(result.mw4?.readCoverageDisclosure?.length ?? 0).toBeGreaterThan(0);

    // Evidence dump for CORR review pack (deterministic product observations)
    console.log(
      "CORR_MW4_PR_REVIEW_01_EVIDENCE",
      JSON.stringify({
        entrypoint: "orchestrateAssistantSend→orchestrateProjectAssistantTurn",
        toolCalls: result.toolCalls,
        toolRounds: result.toolRounds,
        readEvents: readEvents.map((e) => ({
          pathOrRef: e.pathOrRef,
          summary: e.summary,
          status: e.status,
        })),
        mw4: {
          readCoverageOverall: result.mw4?.readCoverageOverall,
          readCoverageDisclosure: result.mw4?.readCoverageDisclosure,
        },
        textPreview: result.text.slice(0, 200),
        injectedReadCoverageFacts: false,
        preSeededCurrentCoverage: false,
        toolPreflightSubstitute: false,
      }),
    );
  });
});
