# ChatGPT Review Pack — CORR-MW4-PR-REVIEW-01
# SAME-TURN MW4-S03 PRODUCT PROOF (PROOF GAP CLOSED)

## 1. Timestamp / identity

- timestamp_utc: `2026-09-03T11:47:05Z`
- timestamp_europe_paris: `2026-09-03T13:47:05+0200`
- cycle: `CORR-MW4-PR-REVIEW-01`
- project cycle type: Cycle 8 — Delivery / implémentation
- typology: **RUN**
- profile: **CRITICAL**
- Morris GO: **CORR-MW4-PR-REVIEW-01 — BOUNDED LOCAL CORRECTION + DETERMINISTIC PRODUCT-BOUND PROOF = CONSUMED**
- FA = NO · TA = NO · REAL OpenAI this cycle = **ZERO**
- PROJECT GIT (commit/push/PR/merge): **NOT AUTHORIZED / NOT PERFORMED**

## 2. Local Git Truth — PASS

| Field | Value |
|---|---|
| workspace | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| HEAD | `30d78d068a763ee2827f7b66f3e8a2575f6d8938` |
| origin/delivery | `30d78d068a763ee2827f7b66f3e8a2575f6d8938` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` |
| PR #461 | OPEN / NOT MERGED / head `30d78d06…` / base main @ `deb34943…` |
| staged project | empty |
| setup.ts | untouched |

## 3. Sources read

Process + convergence + Nora + v3 framing + orchestrateTurn/collectToolTelemetry/runNoraCognitiveTurn/readCoverage + MW4 tests + publisher.

## 4. Convergence / source-lock MW4-S03

- Capability: MW4 Grounding durability + Narrative/Evidence coherence
- Story: MW4-S03 Multi-document reading with honest partiality
- Foundations: V3-F07 / V3-F14
- Outcome: WHEN only partial docs are read THEN outputs mark partiality AND refuse false completeness
- Anti-claims: MW4 NOT CLOSED; Cognitive Completion NOT PROVEN; runtime v3 NON ADOPTED; MW5 NOT AUTHORIZED; production routing NOT SELECTED

## 5. ChatGPT blocker at entry

Same-turn product coupling / exit-proof gap on ToolRouter/EventSink → orchestrateTurn post-telemetry mw4 merge.

## 6. PRE-PATCH reproduction

Test path: `projects/sfia-studio/app/__tests__/project-assistant/mw4.corr.review01.sameTurn.partiality.product.d0.test.ts`

Against unchanged product at `30d78d06…`: product assertions already held; only a false-positive regex failed initially; assertion fixed; **no product modification**.

**PROOF GAP ONLY — CURRENT PRODUCT BEHAVIOR SATISFIES MW4-S03 SAME-TURN CONTRACT.**

## 7. Why prior proofs left the gap

- s03 unit derive/aggregate only
- corr01a ToolRouter→telemetry without product send entrypoint
- corr01b injects readCoverageFacts into runNoraCognitiveTurn
- Existing KEEP wiring: orchestrateTurn collectToolTelemetry after turn merges into result.mw4

## 8. Implementation

- Product files modified: **NONE**
- Architecture unchanged: **YES**
- Created: same-turn product-path proof test only

## 9. SAME-TURN PRODUCT PROOF

```json
{"entrypoint":"orchestrateAssistantSend→orchestrateProjectAssistantTurn","toolCalls":2,"toolRounds":1,"readEvents":[{"pathOrRef":"projects/sfia-studio/docs/mw4-s03-doc-a.md#L1-12","summary":"read projects/sfia-studio/docs/mw4-s03-doc-a.md L1-12/12 (110 chars)","status":"succeeded"},{"pathOrRef":"projects/sfia-studio/docs/mw4-s03-doc-b.md#L20-40","summary":"read projects/sfia-studio/docs/mw4-s03-doc-b.md L20-40/40 (209 chars)","status":"succeeded"}],"mw4":{"readCoverageOverall":"partial","readCoverageDisclosure":"Overall coverage: mixed_partial"},"textPreview":"[TEST/FAKE · NON LIVE] Synthèse des lectures outils — sans revendiquer un corpus complet.","injectedReadCoverageFacts":false,"preSeededCurrentCoverage":false,"toolPreflightSubstitute":false}
```

| Requirement | Result |
|---|---|
| entrypoint | orchestrateAssistantSend → orchestrateProjectAssistantTurn |
| provider | Fake only |
| toolCalls / rounds | 2 / 1 |
| EventSink | git_local_read_file ×2 succeeded |
| ranges | A L1-12/12 full; B L20-40/40 partial |
| mw4.readCoverageOverall | partial |
| mw4.readCoverageDisclosure | Overall coverage: mixed_partial |
| injected readCoverageFacts | NO |
| pre-seed current coverage | NO |
| tool-preflight substitute | NO |
| verdict | PASS |

## 10. Created file — FULL content

```ts
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
```

## 11. Intra-turn aggregation

collectToolTelemetry keeps degraded coverage (partial wins over later full). No product change. Reserve NON-BLOCKING.

## 12. Validation

| Check | Result |
|---|---|
| same-turn product test | PASS |
| corr01a + s03 + corr01b + same-turn | PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| full npm test | PASS — 273 passed / 14 skipped; locks=0; timeouts=0 |
| git diff --check | PASS |

## 13. git status / diff

```
 M .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/corr-mw4-pr-ci-01/
?? .tmp-sfia-review/corr-mw4-pr-ci-02/
?? .tmp-sfia-review/diff-stat.txt
?? .tmp-sfia-review/mw0-mw4-integrated-real-01/
?? .tmp-sfia-review/mw4-modified.diff
?? .tmp-sfia-review/mw4-project-integration-01/
?? .tmp-sfia-review/mw4-real-01/
?? .tmp-sfia-review/qa-mw4-pr-ci-02/
?? .tmp-sfia-review/status.txt
?? .tmp-sfia-review/untracked-product.txt
?? projects/sfia-studio/app/__tests__/project-assistant/mw4.corr.review01.sameTurn.partiality.product.d0.test.ts
?? projects/sfia-studio/app/node_modules
```

```
M	.tmp-sfia-review/chatgpt-review.md
```

```
 .tmp-sfia-review/chatgpt-review.md | 559 ++++++++++++++++---------------------
 1 file changed, 234 insertions(+), 325 deletions(-)
```

## 14. Fake / Real

- Fake: ConversationProvider only
- REAL LIVE: ZERO
- Proof: DETERMINISTIC PRODUCT-BOUND SAME-TURN PROVEN at tested scope
- Bounded REAL: NOT AUTHORIZED

## 15. MW0→MW4 impact

MW0–MW3 / MW4 det / MW4 REAL / Integrated REAL: **KEEP ACCEPTED**. Same-turn S03 product coupling now explicitly proven (deterministic).

## 16. Reserves

- R-MW4-PR-CI-02: CLOSED AT PROJECT-GIT/PR-CI CORRECTION SCOPE
- R-MW4-PR-CI-02-LOCAL-TIMING: OPEN / PRESERVED / NON-BLOCKING
- Intra-turn partial→full policy: OPEN / NON-BLOCKING

## 17. Project Git NOT performed

add/commit/push/PR mutation/merge/force/amend/rebase: **NO**

## 18. Final verdict

PASS — CORR-MW4-PR-REVIEW-01 PROOF GAP CLOSED — CURRENT SAME-TURN PRODUCT BEHAVIOR PROVEN — READY FOR CHATGPT CRITICAL RE-REVIEW — PROJECT GIT NOT AUTHORIZED

## 19. Next gate

CHATGPT CRITICAL RE-REVIEW OF LOCAL CORR-MW4-PR-REVIEW-01.
Distinct Morris GO required before any project git publication of the new test. MERGE NOT AUTHORIZED.
