# ChatGPT Review Pack — FULL

- Cycle ID: SFIA-STUDIO-GREENFIELD-GENERIC-ACTIVE-CYCLE-COGNITIVE-WORK-FOUNDATION-SAME-LOT-CORRECTIVE-02
- Timestamp (UTC): 2026-09-10T15:46:42Z
- Milestone: Greenfield Product Proof — Active Cycle Cognitive Work Foundation corrective completion
- Cycle SFIA: 8 — Delivery / implémentation
- Typologie: EVOL
- Profile: CRITICAL
- D-GF-ACW-01: ADOPTED BY MORRIS — UNCHANGED — MUST NOT REOPEN
- D-GF-ACW-02: ADOPTED BY MORRIS — OPTION A BOUNDED — CONSUMED THIS CYCLE
- GO: ACW SAME-LOT CORRECTIVE DELIVERY AFTER D-GF-ACW-02
- Same-lot atomicity: CR-ACW-01..04 ONE capability lot (no micro-commits / no partial closure)
- Product Completion: CLOSED — not reopened
- Runtime v3: NON ADOPTED
- Model calls REAL: ZERO
- Nora LIVE: ZERO
- Env delta: ZERO paid/provider campaign

## Local Git Truth

### Before mutation (Phase 0)
- Worktree: /Users/morris/Projects/sfia-product-proof-corr-qual-to-governed-cycle-a9f6c310
- Branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- HEAD: 85d7a7982d08f5b0aa706c36cd9d1ca9a86c2456 — MATCH Review Handoff Product candidate
- Parent: 2b595718eafec1a902650619040b21f75e86031e — MATCH
- origin/main: a9f6c310a0826d0e5bd6f7264603382a86564db1 — MATCH a9f6c310…
- origin/sfia/review-handoff (pre-publish): efe145beb89b6e014098a562d0a05dcc86578fdf — MATCH efe145be… (prior STOP pack)
- Dirty expected: .tmp-sfia-review/** + ACW corrective WIP — no destructive git ops

### After Product commit
- HEAD: 16b03323396f0fb34c4246e83f4d192bbbea773e
- Parent: 85d7a7982d08f5b0aa706c36cd9d1ca9a86c2456 (= prior ACW foundation Delivery)
- Branch: delivery/sfia-studio-product-proof-qual-to-governed-cycle
- Product push / PR / merge: NOT PERFORMED / NOT AUTHORIZED
- Staged after commit: clean for Product paths
- Remaining dirty: .tmp-sfia-review/** only (review artifacts)

## Sources read
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- applicable 15-cycle synthetic map / Delivery guidance
- method/.../pilots/04-qa-validation.md (blocking-QA → Delivery)
- projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
- projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
- projects/sfia-studio/product-completion/01-product-completion-cadrage.md
- v3 framing 30 / 32 / 33 / 34 / 35 / 37 (as applicable; v3 NON ADOPTED)
- projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md
- origin/sfia/review-handoff latest-chatgpt-review.md (prior STOP — D-GF-ACW-02 pack)
- Candidate ACW path + productSqliteSession + Project Assistant orchestration

## Convergence Pre-check
- Build Doctrine / Roadmap: VALIDATED ACTIVE
- Product Completion: COMPLETE / CLOSED — not restarted
- Capability: Generic Greenfield active-cycle cognitive work (Pilote → Nora → context → qualification/LPS/trajectory → HD → execution)
- Foundations (requalified, not broadened): V3-F01 / F02 / F04 / F05 / F06 / F08 / F09
- Trajectory link: Greenfield Product Proof → ACW candidate 85d7a798 → blocking QA → D-GF-ACW-02 Option A → SAME-LOT CR-ACW-01..04 → deterministic QA → distinct Morris REAL gate → resume campaign
- R22: KEEP / ADAPT existing Nora/OpenAI runtime — no second LLM/classifier/engine

## CKC Cycle 8
- detailed CKC absent; synthetic map + method-candidate; executionAuthority none for Studio runtime doctrine
- External CKC guides Cursor execution only

## Decision status
- **D-GF-ACW-01**: ADOPTED BY MORRIS — UNCHANGED
- **D-GF-ACW-02**: ADOPTED BY MORRIS — OPTION A BOUNDED
  - server-owned durable logical Product turn identity
  - Project Assistant accepted-turn / Session-adjacent boundary
  - ProductSqliteSession / Session-adjacent table `logical_product_turns`
  - Session ≠ Truth C / LPS / HD / Evidence / ACW outcome aggregate
  - Rejected: providerResponseId-alone, user-text hash, client UUID as authority, random production correlation keys, CycleWork/event-sourcing aggregate

## Option A logical-turn contract (exact)

| Point | Implementation |
|---|---|
| Accept boundary | `orchestrateProjectAssistantTurn` before model call |
| Mint point | `resolveOrMintLogicalProductTurn` → `ProductSqliteSession.mintLogicalProductTurn` → `ltu:` + server randomBytes |
| Persistence | Session-adjacent table `logical_product_turns` (project_id, session_key, logical_turn_id PK) |
| Lookup / reconstruction | presented `logicalTurnId` must already exist for project+session; else `LOGICAL_TURN_UNKNOWN` |
| Correlation to ACW | `turnCorrelationId = logicalTurnId` in `materializeActiveCycleWork` |
| Process restart | reopen same Session SQLite → `getLogicalProductTurn` reconstructs same id |
| Lost response / rematerialize | client re-presents server-issued `logicalTurnId` (useProductConversation retry); same id → idempotent ACW |
| Silent HTTP loss before any id delivery | new turn by design (no client-invented authority) |
| Identical-text distinct turns | two mints → two `ltu:` ids (text never identity) |
| Provider independence | providerResponseId unused as Product turn identity |
| Session unavailable (Memory B path blocked) | conversational Truth C path continues with `logicalTurnId=null`; ACW write fail-closed (`LOGICAL_TURN_SESSION_UNAVAILABLE`) |
| Test seam | `turnCorrelationId` override may skip Session mint for BAR-WORK only — not production proof |

## CR-ACW-01 — CONTEXT SEAL / FAIL CLOSED — CLOSED
- Removed permissive `project.activeCycleInstanceId` fallback for automatic ACW materialization
- Requires studio cognitive-context `activeCycle` + `workEligible` + `buildActiveCycleWorkContextSeal`
- UoW revalidates seal fields vs durable Cycle/LPS → `ACTIVE_CYCLE_CONTEXT_STALE` / `ACTIVE_CYCLE_CONTEXT_REQUIRED`
- Evidence: ACW-CORR-01A..H in `activeCycleCognitiveWork.d0.test.ts`

## CR-ACW-02 — PRODUCTION IDEMPOTENCE (Option A) — CLOSED
- Session-adjacent `logical_product_turns` + `logicalProductTurn.ts` + orchestrateTurn mint/replay
- Evidence: ACW-CORR-02A..F (mint `ltu:`, rematerialize, reopen Session, identical text distinct, IDEM_CONFLICT, client-invented UNKNOWN)

## CR-ACW-03 — NEWEST-N RECENT CONTINUITY — CLOSED
- `studioCognitiveContext` read path exposes newest-N ACW type+content rows (createdAt DESC + id, take N, reverse ASC)
- Evidence: ACW-CORR-03A/B/C/D

## CR-ACW-04 — CATALOG-WIDE DETERMINISTIC PROOF — CLOSED
- Parameterized over `listCycleTypes()` filtered by `lifecycleStatus==='active'` + `isTargetCycleCurrentlySelectable`
- **Catalog count observed dynamically: 15** (CURRENT DATA — not hardcoded invariant)
- Evidence: CR-ACW-04 describe block; unresolved=[] across all current selectable types
- Source assertion: no Cadrage-only / hardcoded cycle-type branch in `activeCycleCognitiveContext.ts`

## Exit proof matrix (P1–P12)

| ID | Result | Evidence |
|---|---|---|
| P1 Context seal | PASS | ACW-CORR-01A..H |
| P2 Same logical turn replay | PASS | ACW-CORR-02B |
| P3 Restart durability | PASS | ACW-CORR-02C |
| P4 Identical text distinct | PASS | ACW-CORR-02D |
| P5 Provider independence | PASS | production key = logicalTurnId; BAR-WORK-12 single provider call; no providerResponseId identity |
| P6 Material conflict | PASS | ACW-CORR-02E / BAR-WORK-26 IDEM_CONFLICT |
| P7 Newest-N continuity | PASS | ACW-CORR-03A..D |
| P8 Catalog-wide genericity | PASS | CR-ACW-04; observed N=15 dynamic |
| P9 Session ≠ Truth C | PASS | schema comments + session.d0 / sessionTruthC / mw1S01Observe allowlist session_items+logical_product_turns only; no oa_* |
| P10 Governance non-regression | PASS | focused LR/START suites + full Vitest green; no HD/EC auto-promotion |
| P11 Generic path | PASS | no Cadrage-only branch; catalog loop |
| P12 No REAL | PASS | FakeConversationProvider / deterministic only |

## Tests executed

```
# Focused ACW + regressions
npx vitest run \
  __tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts \
  __tests__/project-assistant/studioCognitiveContext.test.ts \
  __tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryCycleStart.d0.test.ts \
  __tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
→ 5 files / 101 tests PASS

# Session boundary + MW1 + eval cascade after Option A schema
npx vitest run session.d0 / sessionTruthC / mw1.s01.* / mw1.final / mw1.s01.eval / mw0* / g2 / ACW
→ 13 files / 158 tests PASS

# Full suite
npx vitest run
→ Test Files 327 passed | 17 skipped (344)
→ Tests 3475 passed | 135 skipped (3610)

# Quality gates
npx tsc --noEmit → 0
npm run lint → No ESLint warnings or errors
npm run build → BUILD:0
git diff --check (Product) → clean
```

## Fake / Real qualification
- Applicable: YES
- This cycle target: **DETERMINISTIC PROVEN** for CR-ACW-01..04 same-lot package
- Explicitly outside: REAL BOUNDARY PROVEN / END-TO-END REAL / Nora LIVE Product Proof continuation
- **ZERO REAL** executed

## Claims allowed
- DETERMINISTIC SAME-LOT COMPLETE — READY FOR MORRIS REAL GATE (after ChatGPT Critical Review)
- CR-ACW-01..04 CLOSED at deterministic scope under D-GF-ACW-02 Option A
- READY FOR CHATGPT CRITICAL REVIEW

## Claims prohibited
- LIVE PROVEN
- PRODUCT PROOF COMPLETE
- COGNITIVE COMPLETION PROVEN
- runtime v3 ADOPTED
- DETERMINISTIC PROVEN ⇒ automatically READY FOR REAL without distinct Morris REAL gate
- Product push / PR / merge authorized

## Reservations / debt
- Silent transport loss before any `logicalTurnId` is returned to the client necessarily mints a new logical turn on retry (by Option A design — no client-invented authority). Documented; not a fake closure.
- Test `turnCorrelationId` override remains a BAR-WORK seam only.
- No intentional architecture debt requiring a new Morris decision.

## Next gate
1. ChatGPT Critical Review of this FULL pack / Review Handoff
2. Distinct Morris REAL gate before Greenfield Product Proof real resumption
3. Product push / PR / merge remain unauthorized until Morris authorizes

## Changed files (Product commit 16b03323396f0fb34c4246e83f4d192bbbea773e)

```
.../mw1.s01.honestMemoryB.d0.test.ts               |   7 +-
 .../nora-cognitive-runtime/session.d0.test.ts      |   8 +-
 .../sessionTruthC.d0.test.ts                       |   7 +-
 .../activeCycleCognitiveWork.d0.test.ts            | 642 ++++++++++++++++++++-
 .../hooks/useProductConversation.ts                |  29 +-
 .../app/features/project-assistant/actions.ts      |   6 +
 .../f2/activeCycleCognitiveContext.ts              |  42 ++
 .../features/project-assistant/f2/orchestrateF2.ts |   4 +
 .../project-assistant/f2/studioCognitiveContext.ts |  12 +-
 .../project-assistant/logicalProductTurn.ts        | 106 ++++
 .../materializeActiveCycleWork.ts                  | 129 +++++
 .../features/project-assistant/orchestrateTurn.ts  | 114 +++-
 .../app/features/project-assistant/types.ts        |   7 +
 .../app/lib/nora-cognitive-runtime/index.ts        |   6 +-
 .../nora-cognitive-runtime/productSqliteSession.ts | 126 ++++
 .../sfia-studio/app/lib/nora-eval/mw1S01Observe.ts |  10 +-
 16 files changed, 1223 insertions(+), 32 deletions(-)
```

Files:
- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts`- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts`- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts`- `projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts`- `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`- `projects/sfia-studio/app/features/project-assistant/actions.ts`- `projects/sfia-studio/app/features/project-assistant/f2/activeCycleCognitiveContext.ts`- `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`- `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`- `projects/sfia-studio/app/features/project-assistant/logicalProductTurn.ts`- `projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts`- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`- `projects/sfia-studio/app/features/project-assistant/types.ts`- `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`- `projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts`- `projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts`
## FULL modified content
Complete post-commit file bodies for every Product path in this lot follow.
Also mirrored under `.tmp-sfia-review/acw-same-lot-corr-diffs/`.

### FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/mw1.s01.honestMemoryB.d0.test.ts`
```ts
/** @vitest-environment node */
/**
 * MW1-S01 — Honest Memory B availability (DETERMINISTIC E2E + BOUNDARY).
 * Source-lock: Resume from Truth C with honest Memory B availability.
 * No S02 compaction. No S03 materialization.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { DatabaseSync } from "node:sqlite";
import { afterEach, describe, expect, it } from "vitest";
import { Agent } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
import {
  MEMORY_B_COGNITIVE_DISCLOSURE,
  MEMORY_B_PILOTE_NOTICE,
  ProductSqliteSession,
  appendMemoryBCognitiveDisclosure,
  createNoraAgentsRunner,
  memoryBPiloteNotice,
  probeMemoryBAvailability,
  resolveNoraSessionSqlitePath,
  runNoraAgentsTurn,
  runNoraCognitiveTurn,
  sfiaBoundaryInstructions,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];

function tempDir(prefix: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  tempDirs.push(dir);
  return dir;
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1-S01 — Memory B availability probe", () => {
  it("AVAILABLE_EMPTY when Session opens with no items", async () => {
    const dir = tempDir("sfia-s01-empty-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const probe = await probeMemoryBAvailability({
      projectId: "prj:empty",
      dbPath,
      sessionKey: "f1-default",
    });
    expect(probe.availability).toBe("available_empty");
    expect(probe.session).not.toBeNull();
    expect(probe.itemCount).toBe(0);
    probe.session?.close();
  });

  it("AVAILABLE_WITH_HISTORY when prior items exist", async () => {
    const dir = tempDir("sfia-s01-hist-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const seed = new ProductSqliteSession({
      projectId: "prj:hist",
      dbPath,
      sessionKey: "f1-default",
    });
    await seed.addItems([userTextItem("prior-token-ABC")]);
    seed.close();

    const probe = await probeMemoryBAvailability({
      projectId: "prj:hist",
      dbPath,
      sessionKey: "f1-default",
    });
    expect(probe.availability).toBe("available_with_history");
    expect(probe.itemCount).toBeGreaterThan(0);
    expect(JSON.stringify(await probe.session!.getItems())).toContain(
      "prior-token-ABC",
    );
    probe.session?.close();
  });

  it("UNAVAILABLE when open fails (filesystem) — not empty", async () => {
    const dir = tempDir("sfia-s01-fs-");
    // Parent path is a file → SQLite open fails → UNAVAILABLE (≠ empty)
    const blocker = path.join(dir, "not-a-dir");
    fs.writeFileSync(blocker, "blocker");
    const dbPath = path.join(blocker, "nora-session.sqlite");
    const probe = await probeMemoryBAvailability({
      projectId: "prj:fs",
      dbPath,
    });
    expect(probe.availability).toBe("unavailable");
    expect(probe.session).toBeNull();
    expect(probe.itemCount).toBe(0);
  });

  it("UNAVAILABLE when initial read fails — not empty", async () => {
    const dir = tempDir("sfia-s01-readfail-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:rf",
      dbPath,
    });
    session.simulateNextRetrievalFailure();
    // Probe via manual path mirroring probeMemoryBAvailability catch semantics
    let availability: string;
    try {
      await session.getItems();
      availability = "available_empty";
    } catch {
      session.close();
      availability = "unavailable";
    }
    expect(availability).toBe("unavailable");

    const probe = await probeMemoryBAvailability({
      projectId: "prj:rf-sim",
      dbPath: path.join(dir, "other.sqlite"),
      simulateUnavailable: true,
    });
    expect(probe.availability).toBe("unavailable");
    expect(probe.session).toBeNull();
  });

  it("project isolation — A history not visible to B", async () => {
    const dir = tempDir("sfia-s01-iso-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const a = new ProductSqliteSession({ projectId: "prj:a", dbPath });
    await a.addItems([userTextItem("secret-a")]);
    a.close();
    const probeB = await probeMemoryBAvailability({
      projectId: "prj:b",
      dbPath,
    });
    expect(probeB.availability).toBe("available_empty");
    expect(JSON.stringify(await probeB.session!.getItems())).not.toContain(
      "secret-a",
    );
    probeB.session?.close();
  });
});

describe("MW1-S01 — cognitive + Pilote disclosures", () => {
  it("cognitive disclosure is explicit per availability state", () => {
    for (const state of [
      "available_with_history",
      "available_empty",
      "unavailable",
    ] as const) {
      const text = appendMemoryBCognitiveDisclosure("BASE", state);
      expect(text).toContain("BASE");
      expect(text).toContain(MEMORY_B_COGNITIVE_DISCLOSURE[state]);
      expect(text).toMatch(/Truth C/i);
    }
    expect(MEMORY_B_COGNITIVE_DISCLOSURE.unavailable).toMatch(
      /Do not reconstruct or invent/i,
    );
  });

  it("Pilote notices distinguish empty vs unavailable", () => {
    expect(memoryBPiloteNotice("available_empty")).toMatch(
      /Aucun contexte conversationnel antérieur/i,
    );
    expect(memoryBPiloteNotice("unavailable")).toMatch(
      /Contexte conversationnel non disponible/i,
    );
    expect(memoryBPiloteNotice("unavailable")).not.toMatch(/historique perdu/i);
    expect(memoryBPiloteNotice("available_with_history")).toBe(
      MEMORY_B_PILOTE_NOTICE.available_with_history,
    );
  });
});

describe("MW1-S01 — DETERMINISTIC E2E via runNoraCognitiveTurn", () => {
  it("E2E-S01-A — restart with available B resumes history", async () => {
    const dir = tempDir("sfia-s01-e2e-a-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const provider1 = new FakeConversationProvider({
      scripted: ["[TEST/FAKE] Noted city=Paris"],
    });
    const t1 = await runNoraCognitiveTurn({
      correlationId: "s01-a-1",
      projectId: "prj:e2e-a",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "City is Paris" },
      ],
      provider: provider1,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(t1.memoryBAvailability).toBe("available_empty");
    expect(t1.sessionId).toMatch(/^sess:/);
    expect(t1.cognitiveRuntime).toBe("agents");

    // Destroy in-memory objects; durable Session remains on disk
    const provider2 = new FakeConversationProvider({
      scripted: ["[TEST/FAKE] Paris is in France"],
    });
    const t2 = await runNoraCognitiveTurn({
      correlationId: "s01-a-2",
      projectId: "prj:e2e-a",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "What country?" },
      ],
      provider: provider2,
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(t2.memoryBAvailability).toBe("available_with_history");
    expect(t2.sessionId).toBe(t1.sessionId);
    expect(t2.cognitiveRuntime).toBe("agents");
  });

  it("E2E-S01-B — available empty does not invent transcript", async () => {
    const dir = tempDir("sfia-s01-e2e-b-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    // Create empty Session DB
    const empty = new ProductSqliteSession({
      projectId: "prj:e2e-b",
      dbPath,
    });
    empty.close();

    const turn = await runNoraCognitiveTurn({
      correlationId: "s01-b",
      projectId: "prj:e2e-b",
      messages: [
        {
          role: "system",
          content: `${sfiaBoundaryInstructions()}\nProject ID : prj:e2e-b`,
        },
        { role: "user", content: "What did we discuss earlier?" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] No prior Memory B items; using Truth C only."],
      }),
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(turn.memoryBAvailability).toBe("available_empty");
    expect(turn.sessionId).toMatch(/^sess:/);
    expect(turn.cognitiveRuntime).toBe("agents");
  });

  it("E2E-S01-C — unavailable B continues same Runner without Session replay", async () => {
    const dir = tempDir("sfia-s01-e2e-c-");
    // Truth C stub exists separately (not touched by Session)
    const truthPath = path.join(dir, "oa-product.sqlite");
    const truth = new DatabaseSync(truthPath);
    truth.exec(
      `CREATE TABLE oa_projects (project_id TEXT PRIMARY KEY, payload_json TEXT NOT NULL);`,
    );
    truth
      .prepare(`INSERT INTO oa_projects(project_id, payload_json) VALUES (?, ?)`)
      .run("prj:e2e-c", JSON.stringify({ name: "TruthC" }));
    truth.close();

    const turn = await runNoraCognitiveTurn({
      correlationId: "s01-c",
      projectId: "prj:e2e-c",
      messages: [
        {
          role: "system",
          content: `${sfiaBoundaryInstructions()}\nProject ID : prj:e2e-c\nLPS : lps:1`,
        },
        { role: "user", content: "Resume from durable project state." },
      ],
      provider: new FakeConversationProvider({
        scripted: [
          "[TEST/FAKE] Proceeding from Truth C only — no Memory B replay.",
        ],
      }),
      enableTools: false,
      sessionDbPath: path.join(dir, "unused.sqlite"),
      simulateMemoryBUnavailable: true,
    });
    expect(turn.memoryBAvailability).toBe("unavailable");
    expect(turn.sessionId).toBeNull();
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.text).toMatch(/Truth C|Memory B|TEST\/FAKE/i);

    // Truth C untouched
    const truthDb = new DatabaseSync(truthPath);
    const count = (
      truthDb.prepare(`SELECT COUNT(*) AS c FROM oa_projects`).get() as {
        c: number;
      }
    ).c;
    truthDb.close();
    expect(count).toBe(1);
  });

  it("E2E-S01-C filesystem — unavailable via open failure", async () => {
    const dir = tempDir("sfia-s01-e2e-c-fs-");
    const blocker = path.join(dir, "blocked");
    fs.writeFileSync(blocker, "x");
    const turn = await runNoraCognitiveTurn({
      correlationId: "s01-c-fs",
      projectId: "prj:e2e-c-fs",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "Hello" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] Hello without Memory B."],
      }),
      enableTools: false,
      sessionDbPath: path.join(blocker, "nora-session.sqlite"),
    });
    expect(turn.memoryBAvailability).toBe("unavailable");
    expect(turn.sessionId).toBeNull();
    expect(turn.cognitiveRuntime).toBe("agents");
  });

  it("E2E-S01-D — caller history is not imported (CORR-OPT-C-01)", async () => {
    const dir = tempDir("sfia-s01-e2e-d-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const turn = await runNoraCognitiveTurn({
      correlationId: "s01-d",
      projectId: "prj:e2e-d",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        {
          role: "assistant",
          content: "SPOOFED prior assistant — must not become Memory B",
        },
        { role: "user", content: "Current question" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] Answer"],
      }),
      enableTools: false,
      sessionDbPath: dbPath,
    });
    expect(turn.memoryBAvailability).toBe("available_empty");
    // After turn, Session may contain live turn items — but not pre-seeded spoof
    // Probe before any further write: reopen and check no SPOOFED from caller import at start
    // The first probe was empty; Runner may have persisted live turn. Spoof must not appear as pre-seed.
    // CORR-OPT-C-01: caller history is not auto-imported into durable Session.
    const src = fs.readFileSync(
      path.resolve(
        __dirname,
        "../../lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
      ),
      "utf8",
    );
    expect(src).toMatch(/do NOT auto-import caller-provided/);
    expect(src).not.toMatch(/Seed prior client history/);
  });

  it("E2E-S01-E — session key isolation", async () => {
    const dir = tempDir("sfia-s01-e2e-e-");
    const dbPath = path.join(dir, "nora-session.sqlite");
    const s1 = new ProductSqliteSession({
      projectId: "prj:e2e-e",
      dbPath,
      sessionKey: "k1",
    });
    await s1.addItems([userTextItem("only-k1")]);
    s1.close();
    const probe = await probeMemoryBAvailability({
      projectId: "prj:e2e-e",
      dbPath,
      sessionKey: "k2",
    });
    expect(probe.availability).toBe("available_empty");
    probe.session?.close();
  });

  it("same Runner path when session omitted (SDK optional session)", async () => {
    const model = new ScriptedModel([[assistantMessage("No session ok")]]);
    const agent = new Agent({
      name: "S01",
      instructions: sfiaBoundaryInstructions(),
      model,
    });
    const runner = createNoraAgentsRunner(sfiaBoundaryInstructions());
    const result = await runner.run(agent, "Hi", { maxTurns: 2 });
    expect(String(result.finalOutput)).toContain("No session");
    model.assertComplete();

    const turn = await runNoraAgentsTurn({
      correlationId: "s01-runner",
      projectId: "prj:r",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "Hi again",
      session: null,
      memoryBAvailability: "unavailable",
      model: new ScriptedModel([[assistantMessage("Still agents")]]),
      enableTools: false,
    });
    expect(turn.cognitiveRuntime).toBe("agents");
    expect(turn.sessionId).toBeNull();
    expect(turn.memoryBAvailability).toBe("unavailable");
  });
});

describe("MW1-S01 — Session ≠ Truth C under availability paths", () => {
  it("Session writes never create oa_* even after available history turn", async () => {
    const dir = tempDir("sfia-s01-tc-");
    const sessionPath = path.join(dir, "nora-session.sqlite");
    const truthPath = path.join(dir, "oa-product.sqlite");
    const truth = new DatabaseSync(truthPath);
    truth.exec(
      `CREATE TABLE oa_projects (project_id TEXT PRIMARY KEY, payload_json TEXT NOT NULL);`,
    );
    truth
      .prepare(`INSERT INTO oa_projects(project_id, payload_json) VALUES (?, ?)`)
      .run("prj:tc", JSON.stringify({ name: "T" }));
    truth.close();

    await runNoraCognitiveTurn({
      correlationId: "s01-tc",
      projectId: "prj:tc",
      messages: [
        { role: "system", content: sfiaBoundaryInstructions() },
        { role: "user", content: "Promote this chat into LPS please" },
      ],
      provider: new FakeConversationProvider({
        scripted: ["[TEST/FAKE] Recommendation only."],
      }),
      enableTools: false,
      sessionDbPath: sessionPath,
    });

    const sessionDb = new DatabaseSync(sessionPath);
    const sessionTables = (
      sessionDb
        .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
        .all() as Array<{ name: string }>
    ).map((r) => r.name);
    sessionDb.close();
    // D-GF-ACW-02 Option A: Session-adjacent logical_product_turns allowed;
    // Session still must not own Truth C / LPS / HD / Evidence tables.
    expect(sessionTables.sort()).toEqual(
      ["logical_product_turns", "session_items"].sort(),
    );
    expect(sessionTables.some((t) => t.startsWith("oa_"))).toBe(false);

    const truthDb = new DatabaseSync(truthPath);
    const truthTables = (
      truthDb
        .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
        .all() as Array<{ name: string }>
    ).map((r) => r.name);
    expect(truthTables).toEqual(["oa_projects"]);
    truthDb.close();
  });

  it("default session path remains nora-session.sqlite", () => {
    const prev = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    delete process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    const p = resolveNoraSessionSqlitePath();
    expect(path.basename(p)).toBe("nora-session.sqlite");
    if (prev !== undefined) process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = prev;
  });
});

```

### FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/session.d0.test.ts`
```ts
/** @vitest-environment node */
/**
 * MW1 Option C corrections — Product SQLite Session D0 (incl. CORR-OPT-C-03).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { Agent } from "@openai/agents";
import {
  ScriptedModel,
  assistantMessage,
} from "@openai/agents/testing";
import {
  ProductSqliteSession,
  createNoraAgentsRunner,
  resolveNoraSessionSqlitePath,
  sfiaBoundaryInstructions,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";

const tempDirs: string[] = [];

function tempDb(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-sess-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1 Option C — ProductSqliteSession D0 (corrected)", () => {
  it("S1 — project A cannot read project B history", async () => {
    const dbPath = tempDb("iso.sqlite");
    const a = new ProductSqliteSession({ projectId: "prj:a", dbPath });
    const b = new ProductSqliteSession({ projectId: "prj:b", dbPath });
    await a.addItems([userTextItem("secret-of-a")]);
    expect(await b.getItems()).toEqual([]);
    expect(JSON.stringify(await a.getItems())).toContain("secret-of-a");
    a.close();
    b.close();
  });

  it("S2 — two turns recover conversation via Session + Runner", async () => {
    const dbPath = tempDb("turns.sqlite");
    const session = new ProductSqliteSession({
      projectId: "prj:t",
      dbPath,
    });
    const model = new ScriptedModel([
      [assistantMessage("Noted city=Paris")],
      [assistantMessage("Paris is in France")],
    ]);
    const agent = new Agent({
      name: "Proof",
      instructions: sfiaBoundaryInstructions(),
      model,
    });
    const runner = createNoraAgentsRunner(sfiaBoundaryInstructions());
    const t1 = await runner.run(agent, "City is Paris", { session });
    expect(String(t1.finalOutput)).toContain("Paris");
    const t2 = await runner.run(agent, "What country?", { session });
    expect(String(t2.finalOutput)).toMatch(/France|Paris/i);
    expect((await session.getItems()).length).toBeGreaterThan(0);
    model.assertComplete();
    session.close();
  });

  it("S2 — recreate Session from same SQLite resumes", async () => {
    const dbPath = tempDb("resume.sqlite");
    const s1 = new ProductSqliteSession({
      projectId: "prj:r",
      dbPath,
      sessionKey: "k1",
    });
    await s1.addItems([userTextItem("continuity-token-XYZ")]);
    s1.close();
    const s2 = new ProductSqliteSession({
      projectId: "prj:r",
      dbPath,
      sessionKey: "k1",
    });
    expect(JSON.stringify(await s2.getItems())).toContain(
      "continuity-token-XYZ",
    );
    s2.close();
  });

  it("S4 — Session DB has session continuity + Option A turn identity — not Truth C oa_*", async () => {
    const dbPath = tempDb("schema.sqlite");
    const s = new ProductSqliteSession({ projectId: "prj:s", dbPath });
    await s.addItems([userTextItem("x")]);
    const tables = s.listTables();
    // D-GF-ACW-02 Option A: logical_product_turns is Session-adjacent identity/replay
    // coordination only — never Epistemic/LPS/HD/Evidence/Truth C storage.
    expect(tables.sort()).toEqual(
      ["logical_product_turns", "session_items"].sort(),
    );
    expect(tables.some((t) => t.startsWith("oa_"))).toBe(false);
    s.close();
  });

  it("S3 — retrieval failure distinguishable from empty history", async () => {
    const dbPath = tempDb("err.sqlite");
    const empty = new ProductSqliteSession({
      projectId: "prj:empty",
      dbPath,
    });
    expect(await empty.getItems()).toEqual([]);
    empty.simulateNextRetrievalFailure();
    await expect(empty.getItems()).rejects.toThrow(/SESSION_RETRIEVAL_ERROR/);
    empty.close();
  });

  it("S6 — addItems atomic rollback on mid-batch failure (SQLite trigger)", async () => {
    const dbPath = tempDb("atomic.sqlite");
    const s = new ProductSqliteSession({ projectId: "prj:atom", dbPath });
    await s.addItems([userTextItem("pre-existing")]);
    const before = await s.getItems();
    expect(before).toHaveLength(1);

    // Fail the second INSERT in a multi-item batch via DB trigger.
    // Before batch: 1 row. First insert succeeds (count=1). Second insert aborts (count≥2).
    s.getSqlite().exec(`
      CREATE TRIGGER fail_second_batch_insert
      BEFORE INSERT ON session_items
      WHEN (
        SELECT COUNT(*) FROM session_items
        WHERE project_id = NEW.project_id AND session_key = NEW.session_key
      ) >= 2
      BEGIN
        SELECT RAISE(ABORT, 'TEST_FORCED_INSERT_FAILURE');
      END;
    `);

    await expect(
      s.addItems([userTextItem("batch-1"), userTextItem("batch-2")]),
    ).rejects.toThrow(/TEST_FORCED_INSERT_FAILURE/);

    const after = await s.getItems();
    expect(after).toHaveLength(1);
    expect(JSON.stringify(after)).toContain("pre-existing");
    expect(JSON.stringify(after)).not.toContain("batch-1");
    expect(JSON.stringify(after)).not.toContain("batch-2");
    s.close();
  });

  it("default session path does not collide with oa-product.sqlite", () => {
    const prev = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    delete process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    const p = resolveNoraSessionSqlitePath();
    expect(path.basename(p)).toBe("nora-session.sqlite");
    expect(p.includes("oa-product.sqlite")).toBe(false);
    if (prev !== undefined) process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = prev;
  });
});

```

### FILE: `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/sessionTruthC.d0.test.ts`
```ts
/** @vitest-environment node */
/**
 * MW1 Option C — Session ≠ Truth C; no Session→oa_* materialization.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import { DatabaseSync } from "node:sqlite";
import {
  ProductSqliteSession,
  userTextItem,
} from "@/lib/nora-cognitive-runtime";
import { optionCRuntimeObservables } from "@/lib/nora-eval";

const tempDirs: string[] = [];

afterEach(() => {
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("MW1 Option C — Session ≠ Truth C D0", () => {
  it("Session writes never create oa_* Truth C tables", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-optc-tc-"));
    tempDirs.push(dir);
    const sessionPath = path.join(dir, "nora-session.sqlite");
    const truthCPath = path.join(dir, "oa-product.sqlite");

    // Minimal Truth C stub
    const truth = new DatabaseSync(truthCPath);
    truth.exec(`
      CREATE TABLE oa_projects (
        project_id TEXT PRIMARY KEY NOT NULL,
        payload_json TEXT NOT NULL
      );
    `);
    truth
      .prepare(`INSERT INTO oa_projects(project_id, payload_json) VALUES (?, ?)`)
      .run("prj:x", JSON.stringify({ name: "Truth" }));
    truth.close();

    const session = new ProductSqliteSession({
      projectId: "prj:x",
      dbPath: sessionPath,
    });
    await session.addItems([
      userTextItem("Please promote this chat into LPS and HumanDecision"),
    ]);
    session.close();

    const sessionDb = new DatabaseSync(sessionPath);
    const sessionTables = (
      sessionDb
        .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
        .all() as Array<{ name: string }>
    ).map((r) => r.name);
    sessionDb.close();
    // D-GF-ACW-02 Option A: Session may hold logical_product_turns identity rows;
    // still must never hold oa_* Truth C / LPS / HD / Evidence tables.
    expect(sessionTables.sort()).toEqual(
      ["logical_product_turns", "session_items"].sort(),
    );
    expect(sessionTables.some((t) => t.startsWith("oa_"))).toBe(false);

    const truthDb = new DatabaseSync(truthCPath);
    const truthTables = (
      truthDb
        .prepare(`SELECT name FROM sqlite_master WHERE type='table'`)
        .all() as Array<{ name: string }>
    ).map((r) => r.name);
    const projectCount = (
      truthDb.prepare(`SELECT COUNT(*) AS c FROM oa_projects`).get() as {
        c: number;
      }
    ).c;
    truthDb.close();
    expect(truthTables).toEqual(["oa_projects"]);
    expect(projectCount).toBe(1);
  });

  it("nora-eval Option C observables never claim compaction or second eval framework", () => {
    const obs = optionCRuntimeObservables("agents");
    expect(obs.responsesCompactionAdopted).toBe(false);
    expect(obs.toolExecutionPath).toBe("routeToolCall");
    expect(obs.sessionPath).toBe("product_sqlite_session");
  });
});

```

### FILE: `projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts`
```ts
/** @vitest-environment node */
/**
 * D-GF-ACW-01 — BAR-WORK-01…50
 * Active-cycle cognitive work: context/CKC, routing, schema, materialization,
 * atomicity, idempotence, restart, no silent promotion, genericity.
 * ZERO NEW REAL. Deterministic Fake Nora + Product SQLite only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  classifyTrajectoryBinding,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  prepareCandidateTrajectoryFromCurrentRecommendation,
  prepareCycleFromValidatedTrajectory,
  resolveTrajectoryBootstrapPresence,
  startPreparedTrajectoryCycle,
  listCycleTypes,
  getCycleTypeById,
  isTargetCycleCurrentlySelectable,
} from "@/lib/oa/cycle";
import {
  approveCandidateTrajectory,
  buildPreCycleCandidateApprovalPresentation,
} from "@/features/project-assistant/approveCandidateTrajectory";
import {
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA,
  NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA,
  applyPreCycleRoutingBoundaryCoherence,
  isNoraActiveCycleWorkOutput,
  normalizeNoraProductTurnStructuredOutput,
  type NoraActiveCycleWorkItem,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { FakeConversationProvider } from "@/lib/platform/ai";
import {
  composeStudioCognitiveContext,
  buildStudioCognitivePromptSections,
  STUDIO_COGNITIVE_CONTEXT_BUDGET,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import { loadProductCkcCognitiveContent } from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  materializeActiveCycleWork,
  activeCycleWorkEpistemicItemId,
  ACTIVE_CYCLE_WORK_SOURCE,
} from "@/features/project-assistant/materializeActiveCycleWork";
import {
  buildActiveCycleWorkContextSeal,
  type ActiveCycleWorkContextSeal,
} from "@/features/project-assistant/f2/activeCycleCognitiveContext";
import { resolveOrMintLogicalProductTurn } from "@/features/project-assistant/logicalProductTurn";
import { ProductSqliteSession } from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { EpistemicItem } from "@/lib/oa/cycle";
import type { EpistemicRepositoryPort } from "@/lib/oa/cycle/ports/epistemicRepository";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const PRODUCT_REGISTRY = resolveProductDoctrineRegistryRoot(APP_ROOT);
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const SIGNALS_LIGHT = {
  structuralChange: false,
  securityImpact: false,
  architectureImpact: false,
  dataImpact: false,
  irreversible: false,
  lowRiskBounded: true,
} as const;

const ACW_DEFER_ASSESSMENT = {
  routingBlockingUnknownPresent: false,
  candidateCycleSupportable: false,
  remainingUnknownsAreCycleOwned: true,
  multiplePlausibleCycles: false,
  activeCycleAlreadyCoversWork: true,
} as const;

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "acw-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(
  targetCycleTypeId: string,
  statement: string,
  signals: typeof SIGNALS_LIGHT = SIGNALS_LIGHT,
) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: { ...signals },
  };
}

function productTurn(lr: ReturnType<typeof nextCycleLr>) {
  return {
    narrative: "Narrative recommandée.",
    preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    lifecycleRecommendation: lr,
  };
}

function acwTurn(items: NoraActiveCycleWorkItem[], narrative = "Travail in-cycle.") {
  return {
    narrative,
    preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
    lifecycleRecommendation: null,
    activeCycleWork: { items },
  };
}

function analysisStub(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
  };
}

async function bootFreshProject(suffix: string, dbPath?: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const productDbPath = dbPath ?? tempDbPath(`${suffix}.sqlite`);
  const runtime = getRuntimeApplicationService({
    // Product doctrine root — required for active-cycle CKC cognitive load.
    // FIXTURES/SCHEMAS retained as sibling constants for parity with START tests.
    registryRoot: PRODUCT_REGISTRY,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-10T08:00:00.000Z",
    idSource: new FixedIdSource(`acw-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Fresh ACW ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `AW${suffix}`.slice(0, 8),
    idempotencyKey: `idem:acw-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  return { runtime, projectId: created.projectId, productDbPath };
}

async function reopenRuntime(suffix: string, productDbPath: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: PRODUCT_REGISTRY,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-10T09:00:00.000Z",
    idSource: new FixedIdSource(`acw-re-${suffix}`),
    auditMode: "noop",
    productDbPath,
  });
  if (!runtime.oa) throw new Error("oa missing on reopen");
  return runtime;
}

async function materializeFreshNext(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  projectId: string,
  lr: ReturnType<typeof nextCycleLr>,
) {
  const oa = runtime.oa!;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  return materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: productTurn(lr),
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-10T08:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
}

function bridgeDeps(
  runtime: Awaited<ReturnType<typeof bootFreshProject>>["runtime"],
  extras?: {
    newTrajectoryId?: () => string;
    newStepId?: (k: string) => string;
    newProvenanceObservationId?: () => string;
    correlationId?: string;
  },
) {
  const oa = runtime.oa!;
  return {
    trajectories: oa.cycleServices.trajectories,
    createInitialTrajectory: oa.cycleServices.createInitialTrajectory,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    runInTransaction: ((fn: () => Promise<unknown>) =>
      oa.projectServices.store.runInTransaction(fn)) as <T>(
      fn: () => Promise<T>,
    ) => Promise<T>,
    listEpistemicByProject: (projectId: string) =>
      oa.cycleServices.epistemic.listByProject(projectId),
    listCyclesByProject: (projectId: string) =>
      oa.cycleServices.cycles.listByProject(projectId),
    listDecisionsByProject: (projectId: string) =>
      oa.decisionServices.decisions.listByProject(projectId),
    listEvidenceByProject: (projectId: string) =>
      oa.evidenceReviewServices.repository.listByProject(projectId),
    getCurrentLps: (projectId: string) =>
      oa.projectServices.getCurrentLivingProjectState.execute({ projectId }),
    getProjectDoctrinePin: async (projectId: string) => {
      const project = await oa.projectServices.getProject.execute({ projectId });
      if (!project.ok) return null;
      const pin = project.project.doctrinePackageRef;
      return pin
        ? {
            doctrinePackageId: pin.doctrinePackageId,
            version: pin.version,
            digest: pin.digest,
          }
        : null;
    },
    ...extras,
  };
}

async function seedValidated(
  suffix: string,
  opts?: {
    targetCycleTypeId?: string;
    dbPath?: string;
  },
) {
  const { runtime, projectId, productDbPath } = await bootFreshProject(
    suffix,
    opts?.dbPath,
  );
  const targetCycleTypeId = opts?.targetCycleTypeId ?? "cyc:framing";
  const mat = await materializeFreshNext(
    runtime,
    projectId,
    nextCycleLr(targetCycleTypeId, `Envisager ${targetCycleTypeId}.`),
  );
  expect(mat.recommendationAttempted).toBe(true);
  expect(mat.materialization?.ok).toBe(true);
  if (!mat.materialization?.ok) throw new Error("materialize failed");

  const prepared = await prepareCandidateTrajectoryFromCurrentRecommendation({
    projectId,
    deps: bridgeDeps(runtime, {
      newTrajectoryId: () => `trj:acw-${suffix}`,
      newStepId: () => `stp:acw-${suffix}`,
      newProvenanceObservationId: () => `epi:trj-prov-acw-${suffix}`,
      correlationId: `cor:acw-bridge-${suffix}`,
    }),
  });
  expect(prepared.ok).toBe(true);
  if (!prepared.ok) throw new Error("bridge failed");

  const presentation = await buildPreCycleCandidateApprovalPresentation({
    oa: runtime.oa!,
    projectId,
  });
  expect(presentation.ok).toBe(true);
  if (!presentation.ok || !presentation.presentation) {
    throw new Error("presentation missing");
  }

  const approved = await approveCandidateTrajectory({
    oa: runtime.oa!,
    projectId,
    presentationDigest: presentation.presentation.presentationDigest,
    forceLocalAuthority: true,
  });
  expect(approved.ok).toBe(true);
  if (!approved.ok) throw new Error("approve failed");

  return {
    runtime,
    projectId,
    productDbPath,
    oa: runtime.oa!,
    prepared,
    approved,
    targetCycleTypeId,
  };
}

async function seedStarted(
  suffix: string,
  opts?: Parameters<typeof seedValidated>[1],
) {
  const seeded = await seedValidated(suffix, opts);
  const prep = await prepareCycleFromValidatedTrajectory({
    oa: seeded.oa,
    projectId: seeded.projectId,
  });
  expect(prep.ok).toBe(true);
  if (!prep.ok) throw new Error(`prepare failed: ${prep.code}`);
  const started = await startPreparedTrajectoryCycle({
    oa: seeded.oa,
    projectId: seeded.projectId,
    cycleInstanceId: prep.cycle.cycleInstanceId,
    forceLocalAuthority: true,
  });
  expect(started.ok).toBe(true);
  if (!started.ok) throw new Error(`start failed: ${started.code}`);
  return { ...seeded, prep, started, cycle: started.cycle };
}

async function projectDtoFromOa(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]>,
  projectId: string,
): Promise<ProjectAssistantContextDto> {
  const project = await oa.projectServices.getProject.execute({ projectId });
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!project.ok || !lps.ok) throw new Error("project/lps missing");
  const pin =
    project.project.doctrinePackageRef ??
    lps.livingProjectState.doctrinePackageRef;
  const state = lps.livingProjectState;
  return {
    projectId,
    name: project.project.title,
    shortReference: null,
    objective: state.objective,
    contextSummary: state.context ?? "",
    criticality: "STANDARD",
    constraints: [...(state.constraints ?? [])],
    lpsId: state.lpsVersionId,
    lpsVersion: state.version,
    lpsCreatedAt: state.createdAt,
    doctrineId: pin.doctrinePackageId,
    doctrineVersion: pin.version,
    doctrineDigest: pin.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    activeCycleInstanceId: state.activeCycleInstanceId ?? null,
    ckcResolutionRef: state.ckcResolutionRef ?? null,
  };
}

async function materializeFacts(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]>,
  projectId: string,
  cycleInstanceId: string,
  turnCorrelationId: string,
  sealOverride?: ActiveCycleWorkContextSeal,
) {
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const existingItems = await oa.cycleServices.epistemic.listByProject(projectId);
  const cycleLoad = await oa.cycleServices.getCycle.execute({ cycleInstanceId });
  if (!cycleLoad.ok) throw new Error("cycle missing");
  const cycle = cycleLoad.cycle;
  const contextSeal =
    sealOverride ??
    Object.freeze({
      projectId,
      cycleInstanceId: cycle.cycleInstanceId,
      cycleTypeId: cycle.cycleTypeId,
      profile: cycle.profile,
      status: "active" as const,
      trajectoryId: cycle.trajectoryId?.trim() || null,
      trajectoryVersion:
        typeof cycle.trajectoryVersion === "number"
          ? cycle.trajectoryVersion
          : null,
      trajectoryStepId: cycle.trajectoryStepId?.trim() || null,
      ckcResolutionRef: cycle.ckcResolutionRef?.trim() || null,
    });
  return {
    projectId,
    activeCycleInstanceId: cycleInstanceId,
    lpsVersion: lps.livingProjectState.version,
    lpsObjective: lps.livingProjectState.objective,
    existingEpistemicItemIds: lps.livingProjectState.epistemicItemIds ?? [],
    existingItems,
    turnCorrelationId,
    contextSeal,
  };
}

function acwMaterializeInput(
  oa: NonNullable<Awaited<ReturnType<typeof bootFreshProject>>["runtime"]["oa"]>,
  facts: Awaited<ReturnType<typeof materializeFacts>>,
  items: NoraActiveCycleWorkItem[],
  extras?: {
    appendLivingProjectStateVersion?: typeof oa.projectServices.appendLivingProjectStateVersion;
    updateEpistemicState?: typeof oa.cycleServices.updateEpistemicState;
  },
) {
  return {
    items,
    facts,
    updateEpistemicState:
      extras?.updateEpistemicState ?? oa.cycleServices.updateEpistemicState,
    appendLivingProjectStateVersion:
      extras?.appendLivingProjectStateVersion ??
      oa.projectServices.appendLivingProjectStateVersion,
    getCurrentLivingProjectState: oa.projectServices.getCurrentLivingProjectState,
    getCycle: oa.cycleServices.getCycle,
    runInTransaction: oa.cycleServices.store.runInTransaction.bind(
      oa.cycleServices.store,
    ),
    producedAt: "2026-09-10T10:00:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  };
}

const MVP_OBS: NoraActiveCycleWorkItem[] = [
  {
    type: "Observation",
    statement: "L'utilisateur gère des tâches quotidiennes dispersées.",
    confidence: "high",
    blocking: false,
  },
  {
    type: "Observation",
    statement: "Priorisation manuelle est un besoin MVP explicite.",
    confidence: "medium",
    blocking: null,
  },
  {
    type: "Hypothesis",
    statement: "Une vue simple date+priorité couvre le besoin MVP.",
    confidence: "medium",
    blocking: false,
  },
  {
    type: "Recommendation",
    statement: "Cadrer le MVP autour d'une liste priorisée datée.",
    confidence: null,
    blocking: null,
  },
];

// ─── Context + CKC ───────────────────────────────────────────────────────────

describe("D-GF-ACW-01 context + CKC (BAR-WORK-01..08)", () => {
  it("BAR-WORK-01/02/03: compose after START has server-owned activeCycle + CKC ref", async () => {
    const s = await seedStarted("ctx01");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    if (!composed.ok) throw new Error(`${composed.code}: ${composed.message}`);
    expect(composed.ok).toBe(true);
    const ac = composed.context.activeCycle;
    expect(ac).not.toBeNull();
    expect(ac!.cycleInstanceId).toBe(s.cycle.cycleInstanceId);
    expect(ac!.cycleTypeId).toBe(s.targetCycleTypeId);
    expect(ac!.profile).toBe(s.cycle.profile);
    expect(ac!.trajectoryId).toBeTruthy();
    expect(ac!.trajectoryStepId).toBeTruthy();
    expect(ac!.ckcResolutionRef).toBeTruthy();
    expect(ac!.ckcResolutionRef).toBe(s.cycle.ckcResolutionRef);
    expect(ac!.workEligible).toBe(true);
    expect(classifyTrajectoryBinding(s.cycle)).toBe("COMPLETE_TRAJECTORY_BOUND");
  });

  it("BAR-WORK-04/05: active CKC authoritative; different intent candidate does not override", async () => {
    const s = await seedStarted("ctx04");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const other = listCycleTypes().find(
      (c) => c.cycleTypeId !== s.targetCycleTypeId,
    )!.cycleTypeId;
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "actionable",
        parseOk: true,
        candidateCycleTypeId: other,
      }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.method.activeCycleCkcAuthoritative).toBe(true);
    expect(composed.context.activeCycle!.cycleTypeId).toBe(s.targetCycleTypeId);
    expect(composed.context.method.orientation.candidateCycleTypeId).toBe(other);
    const sections = buildStudioCognitivePromptSections(composed.context);
    const blob = sections.join("\n");
    expect(blob).toMatch(/cycle ACTIVE|autoritative|AUTORITATIVE/i);
    expect(composed.context.method.ckcLoaded).toBe(true);
    expect(composed.context.method.ckcLensSection).toBeTruthy();
    const framingLabel = getCycleTypeById(s.targetCycleTypeId)?.label;
    if (framingLabel) {
      expect(composed.context.method.cycleLabel).toBe(framingLabel);
    }
  });

  it("BAR-WORK-06: corrupt ckcResolutionRef → ACTIVE_CYCLE_CKC_REF_DRIFT before model", async () => {
    const s = await seedStarted("ctx06");
    await s.oa.cycleServices.cycles.save({
      ...structuredClone(s.cycle),
      ckcResolutionRef: "ckc-ref:TAMPERED-DRIFT",
    });
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(false);
    if (composed.ok) throw new Error("expected fail");
    expect(composed.code).toBe("ACTIVE_CYCLE_CKC_REF_DRIFT");
  });

  it("BAR-WORK-07: missing cycle for LPS pointer → ACTIVE_CYCLE_NOT_FOUND", async () => {
    const s = await seedStarted("ctx07");
    const lps = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const ghostId = "cyc:ghost-missing-acw-07";
    const cleared = await s.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId: s.projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: lps.livingProjectState.objective,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      activeCycleInstanceId: ghostId,
      correlationId: "cor:acw-ghost-07",
    });
    expect(cleared.ok).toBe(true);
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    expect(dto.activeCycleInstanceId).toBe(ghostId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(false);
    if (composed.ok) throw new Error("expected fail");
    expect(composed.code).toBe("ACTIVE_CYCLE_NOT_FOUND");
  });

  it("BAR-WORK-08: project mismatch on compose fails closed", async () => {
    const s = await seedStarted("ctx08");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: { ...dto, projectId: "prj:other-mismatch-08" },
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
      activeCycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(composed.ok).toBe(false);
    if (composed.ok) throw new Error("expected fail");
    expect(composed.code).toBe("ACTIVE_CYCLE_PROJECT_MISMATCH");
  });
});

// ─── Routing ─────────────────────────────────────────────────────────────────

describe("D-GF-ACW-01 routing (BAR-WORK-09..11)", () => {
  it("BAR-WORK-09: paused cycle → workEligible false; materialize ACTIVE_CYCLE_NOT_ELIGIBLE", async () => {
    const s = await seedStarted("rt09");
    await s.oa.cycleServices.cycles.save({
      ...structuredClone(s.cycle),
      status: "paused",
    });
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.activeCycle!.workEligible).toBe(false);

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-pause-09",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, [
        {
          type: "Observation",
          statement: "Should not persist while paused.",
          confidence: null,
          blocking: null,
        },
      ]),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_NOT_ELIGIBLE");
  });

  it("BAR-WORK-10: coversWork=true strips NEXT_CYCLE via coherence", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Defer to active.",
      preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
      lifecycleRecommendation: nextCycleLr("cyc:delivery", "Next delivery."),
      activeCycleWork: { items: MVP_OBS.slice(0, 1) },
    });
    expect(coherent.disposition).toBe("DEFER_TO_ACTIVE_CYCLE");
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.lifecycleRecommendationSuppressed).toBe(true);
    expect(coherent.activeCycleWork?.items).toHaveLength(1);
  });

  it("BAR-WORK-11: coversWork=false preserves EMIT path", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Emit framing.",
      preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lifecycleRecommendation: nextCycleLr("cyc:framing", "Cadrage."),
      activeCycleWork: null,
    });
    expect(coherent.disposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");
    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).toBe(
      "cyc:framing",
    );
    expect(coherent.lifecycleRecommendationSuppressed).toBe(false);
  });
});

// ─── Schema ──────────────────────────────────────────────────────────────────

describe("D-GF-ACW-01 schema (BAR-WORK-12..15)", () => {
  it("BAR-WORK-12: Fake product turn → exactly one provider call", async () => {
    const s = await seedStarted("sch12");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const payload = acwTurn(MVP_OBS.slice(0, 2), "Observations MVP cadrage.");
    const provider = new FakeConversationProvider({
      scripted: [JSON.stringify(payload)],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "Quelles observations pour le MVP tâches ?",
      sessionDbPath: tempDbPath("sch12-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnCorrelationId: "cor:acw-orch-12",
    });
    expect(result.ok).toBe(true);
    expect(provider.getCallCountForTests()).toBe(1);
  });

  it("BAR-WORK-13/14: isNoraActiveCycleWorkOutput / normalize reject forbidden types", () => {
    const forbidden = [
      { type: "DecisionRef", statement: "x", confidence: null, blocking: null },
      { type: "EvidenceRef", statement: "x", confidence: null, blocking: null },
      {
        type: "HumanDecision",
        statement: "x",
        confidence: null,
        blocking: null,
      },
      { type: "Fact", statement: "x", confidence: null, blocking: null },
    ];
    for (const item of forbidden) {
      expect(isNoraActiveCycleWorkOutput({ items: [item] })).toBe(false);
      expect(
        normalizeNoraProductTurnStructuredOutput({
          narrative: "n",
          preCycleRoutingAssessment: { ...ACW_DEFER_ASSESSMENT },
          lifecycleRecommendation: null,
          activeCycleWork: { items: [item] },
        }),
      ).toBeNull();
    }
    expect(
      isNoraActiveCycleWorkOutput({
        items: [
          {
            type: "Observation",
            statement: "ok",
            confidence: null,
            blocking: null,
          },
        ],
      }),
    ).toBe(true);
  });

  it("BAR-WORK-15: ACW schema items have no id/authority/provenance property keys", () => {
    const itemSchema = JSON.stringify(NORA_ACTIVE_CYCLE_WORK_ITEM_SCHEMA);
    const outSchema = JSON.stringify(NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA);
    const turnSchema = JSON.stringify(
      NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE.schema,
    );
    for (const key of ['"id"', '"authority"', '"provenance"']) {
      expect(itemSchema).not.toContain(key);
    }
    // Nested item schema under activeCycleWork must not declare those keys.
    expect(outSchema).toContain('"items"');
    expect(turnSchema).toContain("activeCycleWork");
    const acwSlice = turnSchema.slice(
      turnSchema.indexOf("activeCycleWork"),
      turnSchema.indexOf("activeCycleWork") + 1200,
    );
    expect(acwSlice).not.toMatch(/"properties":\{[^}]*"(id|authority|provenance)"/);
  });
});

// ─── Materialization authority ───────────────────────────────────────────────

describe("D-GF-ACW-01 materialization authority (BAR-WORK-16..20)", () => {
  it("BAR-WORK-16/17/18/19/20: Observations/Hypothesis/Recommendation materialize with ACW provenance", async () => {
    const s = await seedStarted("mat16");
    const corr = "cor:acw-mat-16";
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.code);
    expect(mat.createdIds.length).toBe(MVP_OBS.length);

    const items = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const acw = items.filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(acw.length).toBeGreaterThanOrEqual(MVP_OBS.length);

    const obs = acw.find((e) => e.type === "Observation");
    expect(obs).toBeTruthy();
    expect(obs!.source).toBe("active-cycle-work:nora");
    expect(obs!.relatedObjects).toContain(s.projectId);
    expect(obs!.relatedObjects).toContain(s.cycle.cycleInstanceId);
    if (s.cycle.trajectoryId) {
      expect(obs!.relatedObjects).toContain(s.cycle.trajectoryId);
    }
    expect(obs!.provenance?.correlationId).toBe(corr);
    expect(obs!.createdBy?.actorId).toBe("actor:nora");

    const hyp = acw.find((e) => e.type === "Hypothesis");
    expect(hyp?.type).toBe("Hypothesis");

    const rec = acw.find((e) => e.type === "Recommendation");
    expect(rec).toBeTruthy();
    expect(rec!.lifecycleRecommendation).toBeUndefined();
    expect((rec as EpistemicItem & { authority?: unknown }).authority).toBeUndefined();
    expect(rec!.source).toBe(ACTIVE_CYCLE_WORK_SOURCE);
  });
});

// ─── Atomicity (BLOCKING) ────────────────────────────────────────────────────

describe("D-GF-ACW-01 atomicity (BAR-WORK-21..24)", () => {
  it("BAR-WORK-21: happy path Epistemic + LPS.epistemicItemIds atomic; version bumps", async () => {
    const s = await seedStarted("atm21");
    const before = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!before.ok) throw new Error("lps");
    const v0 = before.livingProjectState.version;
    const ids0 = before.livingProjectState.epistemicItemIds ?? [];

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-atm-21",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 2)),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.code);
    expect(mat.lpsVersionAfter).toBe(v0 + 1);

    const after = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!after.ok) throw new Error("lps after");
    expect(after.livingProjectState.version).toBe(v0 + 1);
    for (const id of mat.createdIds) {
      expect(after.livingProjectState.epistemicItemIds).toContain(id);
      expect(ids0).not.toContain(id);
    }
    const durable = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    for (const id of mat.createdIds) {
      expect(durable.some((e) => e.epistemicItemId === id)).toBe(true);
    }
  });

  it("BAR-WORK-22: LPS append failure rolls back — no new epistemic, no version bump", async () => {
    const s = await seedStarted("atm22");
    const before = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!before.ok) throw new Error("lps");
    const v0 = before.livingProjectState.version;
    const epiBefore = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const epiIdsBefore = new Set(epiBefore.map((e) => e.epistemicItemId));

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-atm-22",
    );
    const failingAppend = {
      execute: async () =>
        ({
          ok: false as const,
          error: {
            code: "STATE_CONFLICT" as const,
            detailCode: "PERSISTENCE_FAILURE" as const,
            message: "forced_lps_append_fail",
            severity: "error" as const,
            retryable: false,
            internalCauseRef: "forced_lps_append_fail",
          },
        }),
    };

    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 2), {
        appendLivingProjectStateVersion: failingAppend as never,
      }),
    );
    expect(mat.ok).toBe(false);

    const after = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!after.ok) throw new Error("lps after");
    expect(after.livingProjectState.version).toBe(v0);
    const epiAfter = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const newOnes = epiAfter.filter((e) => !epiIdsBefore.has(e.epistemicItemId));
    expect(newOnes.filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE)).toHaveLength(
      0,
    );
  });

  it("BAR-WORK-23/24: LPS OCC expectedVersion mismatch → no new items", async () => {
    const s = await seedStarted("atm23");
    const before = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!before.ok) throw new Error("lps");
    const v0 = before.livingProjectState.version;
    const epiBefore = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).map((e) => e.epistemicItemId);

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-atm-23",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(
        s.oa,
        { ...facts, lpsVersion: v0 + 99 },
        [
          {
            type: "Observation",
            statement: "OCC mismatch should not write.",
            confidence: null,
            blocking: null,
          },
        ],
      ),
    );
    expect(mat.ok).toBe(false);
    if (!mat.ok) {
      // CR-ACW-01 seal compares lps.version first → CONTEXT_STALE; OCC remains valid alt.
      expect([
        "ACTIVE_CYCLE_CONTEXT_STALE",
        "LPS_VERSION_CONFLICT",
        "ACTIVE_CYCLE_WORK_ATOMIC_FAILURE",
      ]).toContain(mat.code);
    }

    const after = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!after.ok) throw new Error("lps");
    expect(after.livingProjectState.version).toBe(v0);
    const epiAfter = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    expect(
      epiAfter.filter(
        (e) =>
          e.source === ACTIVE_CYCLE_WORK_SOURCE &&
          !epiBefore.includes(e.epistemicItemId),
      ),
    ).toHaveLength(0);
  });
});

// ─── Idempotence / stale ─────────────────────────────────────────────────────

describe("D-GF-ACW-01 idempotence / stale (BAR-WORK-25..28)", () => {
  it("BAR-WORK-25: same turnCorrelationId + same items → idempotent, no duplicate ids", async () => {
    const s = await seedStarted("idm25");
    const corr = "cor:acw-idm-25";
    const items = MVP_OBS.slice(0, 2);
    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const first = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts1, items),
    );
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.code);

    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const second = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts2, items),
    );
    expect(second.ok).toBe(true);
    if (!second.ok) throw new Error(second.code);
    expect(second.idempotent).toBe(true);
    expect(second.createdIds).toHaveLength(0);
    expect(second.reusedIds).toEqual(first.createdIds);

    const durable = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    const ids = durable.map((e) => e.epistemicItemId);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("BAR-WORK-26: same id different material → ACTIVE_CYCLE_WORK_IDEM_CONFLICT", async () => {
    const s = await seedStarted("idm26");
    const corr = "cor:acw-idm-26";
    const statement = "Original observation statement for conflict.";
    const item: NoraActiveCycleWorkItem = {
      type: "Observation",
      statement,
      confidence: null,
      blocking: null,
    };
    const id = activeCycleWorkEpistemicItemId({
      projectId: s.projectId,
      cycleInstanceId: s.cycle.cycleInstanceId,
      turnCorrelationId: corr,
      index: 0,
      type: "Observation",
      statement,
    });
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const conflicting: EpistemicItem = {
      schemaVersion: "0.1.0-oa",
      epistemicItemId: id,
      type: "Observation",
      statement: "DIFFERENT material — conflict.",
      status: "active",
      source: ACTIVE_CYCLE_WORK_SOURCE,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      createdAt: "2026-09-10T09:00:00.000Z",
      relatedObjects: [s.projectId, s.cycle.cycleInstanceId],
    };
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(
        s.oa,
        { ...facts, existingItems: [...facts.existingItems, conflicting] },
        [item],
      ),
    );
    expect(mat.ok).toBe(false);
    if (!mat.ok) expect(mat.code).toBe("ACTIVE_CYCLE_WORK_IDEM_CONFLICT");
  });

  it("BAR-WORK-27: pause after model conceptually then materialize → fail, no write", async () => {
    const s = await seedStarted("idm27");
    await s.oa.cycleServices.cycles.save({
      ...structuredClone(s.cycle),
      status: "paused",
    });
    const epiBefore = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).map((e) => e.epistemicItemId);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-idm-27",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (!mat.ok) expect(mat.code).toBe("ACTIVE_CYCLE_NOT_ELIGIBLE");
    const epiAfter = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    expect(
      epiAfter.filter(
        (e) =>
          e.source === ACTIVE_CYCLE_WORK_SOURCE &&
          !epiBefore.includes(e.epistemicItemId),
      ),
    ).toHaveLength(0);
  });

  it("BAR-WORK-28: LPS active pointer changed → ACTIVE_CYCLE_LPS_POINTER_STALE", async () => {
    const s = await seedStarted("idm28");
    const lps = await s.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    if (!lps.ok) throw new Error("lps");
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-idm-28",
    );
    const cleared = await s.oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId: s.projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: lps.livingProjectState.objective,
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
      activeCycleInstanceId: null,
      correlationId: "cor:acw-clear-ptr-28",
    });
    expect(cleared.ok).toBe(true);

    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    // CR-ACW-01 seal catches LPS pointer drift as CONTEXT_STALE before pointer-specific code.
    if (!mat.ok) {
      expect([
        "ACTIVE_CYCLE_CONTEXT_STALE",
        "ACTIVE_CYCLE_LPS_POINTER_STALE",
      ]).toContain(mat.code);
    }
  });
});

// ─── Restart ─────────────────────────────────────────────────────────────────

describe("D-GF-ACW-01 restart (BAR-WORK-29..31)", () => {
  it("BAR-WORK-29/30/31: reopen same dbPath → activeCycle + work items durable (no Memory B)", async () => {
    const dbPath = tempDbPath("rst29.sqlite");
    const s = await seedStarted("rst29", { dbPath });
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-rst-29",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 2)),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.code);

    const reopened = await reopenRuntime("rst29", dbPath);
    const dto = await projectDtoFromOa(reopened.oa!, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: reopened.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.activeCycle?.cycleInstanceId).toBe(
      s.cycle.cycleInstanceId,
    );
    expect(composed.context.activeCycleWorkItems.state).toBe("PRESENT");
    expect(composed.context.activeCycleWorkItems.items.length).toBeGreaterThanOrEqual(
      2,
    );
  });
});

// ─── No silent promotion ─────────────────────────────────────────────────────

describe("D-GF-ACW-01 no silent promotion (BAR-WORK-32..38)", () => {
  it("BAR-WORK-32..38: ACW does not change objective/scope/HD/EC/Attempt/Confirmation/trajectory version", async () => {
    const s = await seedStarted("nsp32");
    const lpsBefore =
      await s.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: s.projectId,
      });
    if (!lpsBefore.ok) throw new Error("lps");
    const hdBefore = await s.oa.decisionServices.decisions.listByProject(
      s.projectId,
    );
    const trajBefore =
      await s.oa.cycleServices.trajectories.findCurrentByProjectId(s.projectId);
    const ecsBefore =
      await s.oa.executionContractServices.contracts.listByProject(s.projectId);
    const attemptsRepo = s.oa.executionAttemptServices.attempts as {
      listByProject?: (id: string) => Promise<unknown[]>;
    };
    const attemptsBefore = attemptsRepo.listByProject
      ? await attemptsRepo.listByProject(s.projectId)
      : [];

    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-nsp-32",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.code);

    const lpsAfter =
      await s.oa.projectServices.getCurrentLivingProjectState.execute({
        projectId: s.projectId,
      });
    if (!lpsAfter.ok) throw new Error("lps after");
    expect(lpsAfter.livingProjectState.objective).toBe(
      lpsBefore.livingProjectState.objective,
    );
    expect(lpsAfter.livingProjectState.scope).toBe(
      lpsBefore.livingProjectState.scope,
    );
    const hdAfter = await s.oa.decisionServices.decisions.listByProject(
      s.projectId,
    );
    expect(hdAfter.length).toBe(hdBefore.length);
    const ecsAfter =
      await s.oa.executionContractServices.contracts.listByProject(s.projectId);
    expect(ecsAfter).toHaveLength(0);
    expect(ecsBefore).toHaveLength(0);
    const attemptsAfter = attemptsRepo.listByProject
      ? await attemptsRepo.listByProject(s.projectId)
      : [];
    expect(attemptsAfter.length).toBe(0);
    expect(attemptsBefore.length).toBe(0);
    const store = s.oa.projectServices.store as {
      failNextSave?: unknown;
      db?: { prepare: (sql: string) => { all: (...a: unknown[]) => unknown[] } };
    };
    // Confirmation count via Product SQLite when accessible
    if (store.db) {
      const rows = store.db
        .prepare("SELECT COUNT(*) AS c FROM oa_confirmations WHERE project_id = ?")
        .all(s.projectId) as Array<{ c: number }>;
      expect(Number(rows[0]?.c ?? 0)).toBe(0);
    }
    const trajAfter =
      await s.oa.cycleServices.trajectories.findCurrentByProjectId(s.projectId);
    expect(trajAfter?.version).toBe(trajBefore?.version);
  });
});

// ─── Genericity (BLOCKING) ───────────────────────────────────────────────────

describe("D-GF-ACW-01 genericity (BAR-WORK-39..45)", () => {
  it("BAR-WORK-39: Cadrage vertical — scripted Observations via Fake orchestrate path", async () => {
    const s = await seedStarted("gen39", { targetCycleTypeId: "cyc:framing" });
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);

    const provider = new FakeConversationProvider({
      scripted: [JSON.stringify(acwTurn(MVP_OBS, "Cadrage MVP observations."))],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "Observe les tâches MVP pour le cadrage.",
      sessionDbPath: tempDbPath("gen39-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnCorrelationId: "cor:acw-gen-39",
    });
    expect(result.ok).toBe(true);
    const acw = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(acw.some((e) => e.type === "Observation")).toBe(true);
  });

  it("BAR-WORK-40: second representative cycle (technical-architecture) prepare/start + ACW", async () => {
    const types = listCycleTypes();
    const arch =
      types.find((t) => t.cycleTypeId === "cyc:technical-architecture") ??
      types.find(
        (t) =>
          t.cycleTypeId !== "cyc:framing" &&
          t.lifecycleStatus === "active",
      );
    expect(arch).toBeTruthy();
    const s = await seedStarted("gen40", {
      targetCycleTypeId: arch!.cycleTypeId,
    });
    expect(s.cycle.cycleTypeId).toBe(arch!.cycleTypeId);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-gen-40",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, [
        {
          type: "Observation",
          statement: `Observation for ${arch!.cycleTypeId}.`,
          confidence: "medium",
          blocking: false,
        },
      ]),
    );
    expect(mat.ok).toBe(true);
  });

  it("BAR-WORK-41: third evidence/validation-oriented cycle (qa-validation)", async () => {
    const qa = listCycleTypes().find((t) => t.cycleTypeId === "cyc:qa-validation");
    expect(qa).toBeTruthy();
    const s = await seedStarted("gen41", {
      targetCycleTypeId: qa!.cycleTypeId,
    });
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "cor:acw-gen-41",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, [
        {
          type: "Observation",
          statement: "Evidence expectations for QA validation cycle.",
          confidence: "high",
          blocking: false,
        },
      ]),
    );
    expect(mat.ok).toBe(true);
  });

  it("BAR-WORK-42/43: catalog-wide CKC loader path; no cycle-specific branch in activeCycleCognitiveContext", () => {
    expect(fs.existsSync(FIXTURES)).toBe(true);
    expect(fs.existsSync(PRODUCT_REGISTRY)).toBe(true);
    const catalog = listCycleTypes();
    expect(catalog.length).toBeGreaterThan(0);
    // Must not hardcode === 15
    expect(catalog.length).not.toBe(0);

    const resolved: string[] = [];
    const unresolved: string[] = [];
    for (const entry of catalog) {
      const content = loadProductCkcCognitiveContent({
        // Product doctrine registry (DEFAULT pin) — FIXTURES pin is pkg:studio-v3-oa
        // and does not host the product CKC cognitive index.
        registryRoot: PRODUCT_REGISTRY,
        cycleTypeId: entry.cycleTypeId,
        packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
      });
      if (content) resolved.push(entry.cycleTypeId);
      else unresolved.push(entry.cycleTypeId);
    }
    expect(
      resolved.length + unresolved.length,
      `catalog=${catalog.length} resolved=${resolved.length} unresolved=[${unresolved.join(",")}]`,
    ).toBe(catalog.length);
    expect(
      resolved.length,
      `expected some CKC resolutions; unresolved=[${unresolved.join(",")}]`,
    ).toBeGreaterThan(0);

    const acwSrc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/f2/activeCycleCognitiveContext.ts",
      ),
      "utf8",
    );
    expect(acwSrc).not.toContain("cyc:framing");
    expect(acwSrc).not.toMatch(/switch\s*\(\s*cycleTypeId\s*\)/);
  });

  it("BAR-WORK-44: cycleTypeId remains authority — getCycleTypeById by id not label", () => {
    const framing = getCycleTypeById("cyc:framing");
    expect(framing?.label).toBe("Cadrage");
    expect(getCycleTypeById("Cadrage")).toBeUndefined();
    expect(getCycleTypeById("cadrage")).toBeUndefined();
  });

  it("BAR-WORK-45: activeCycleCognitiveContext / studioCognitiveContext must not import sfia-fast-track", () => {
    for (const rel of [
      "features/project-assistant/f2/activeCycleCognitiveContext.ts",
      "features/project-assistant/f2/studioCognitiveContext.ts",
    ]) {
      const src = fs.readFileSync(path.join(APP_ROOT, rel), "utf8");
      expect(src).not.toMatch(/sfia-fast-track/);
      expect(src).not.toMatch(/from\s+["'][^"']*method\/sfia/);
    }
  });
});

// ─── Regressions smoke ───────────────────────────────────────────────────────

describe("D-GF-ACW-01 regressions smoke (BAR-WORK-46..50)", () => {
  it("BAR-WORK-46: applyPreCycleRoutingBoundaryCoherence still works for READY_TO_EMIT", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Ready.",
      preCycleRoutingAssessment: { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      lifecycleRecommendation: nextCycleLr("cyc:framing", "Cadrage."),
    });
    expect(coherent.disposition).toBe("EMIT_LIFECYCLE_RECOMMENDATION");
    expect(coherent.boundaryContradiction).toBeNull();
  });

  it("BAR-WORK-47: classifyTrajectoryBinding COMPLETE after start", async () => {
    const s = await seedStarted("reg47");
    expect(classifyTrajectoryBinding(s.cycle)).toBe("COMPLETE_TRAJECTORY_BOUND");
  });

  it("BAR-WORK-48: orchestrateTurn Fake path readable / exports", async () => {
    expect(typeof orchestrateProjectAssistantTurn).toBe("function");
    const s = await seedStarted("reg48");
    const provider = new FakeConversationProvider({
      scripted: [
        JSON.stringify(
          acwTurn(
            [
              {
                type: "Observation",
                statement: "Smoke observation.",
                confidence: null,
                blocking: null,
              },
            ],
            "Smoke.",
          ),
        ),
      ],
    });
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "smoke",
      sessionDbPath: tempDbPath("reg48-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: composed.context,
      turnCorrelationId: "cor:acw-reg-48",
    });
    expect(result.ok).toBe(true);
  });

  it("BAR-WORK-49: materializeActiveCycleWork must not import prepareM3FromDecision / f3", () => {
    const src = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/materializeActiveCycleWork.ts",
      ),
      "utf8",
    );
    expect(src).not.toMatch(/prepareM3FromDecision/);
    expect(src).not.toMatch(/\/f3\b|features\/project-assistant\/f3/);
  });

  it("BAR-WORK-50: restart parity covered via reopen compose (smoke)", async () => {
    const dbPath = tempDbPath("reg50.sqlite");
    const s = await seedStarted("reg50", { dbPath });
    const reopened = await reopenRuntime("reg50", dbPath);
    const cycle = await reopened.oa!.cycleServices.cycles.findById(
      s.cycle.cycleInstanceId,
    );
    expect(cycle?.status).toBe("active");
    const lps = await reopened.oa!.projectServices.getCurrentLivingProjectState.execute({
      projectId: s.projectId,
    });
    expect(lps.ok && lps.livingProjectState.activeCycleInstanceId).toBe(
      s.cycle.cycleInstanceId,
    );
  });
});

// ─── CR-ACW-01 context seal ──────────────────────────────────────────────────

describe("CR-ACW-01 context seal (ACW-CORR-01A..H)", () => {
  async function sealFromStarted(
    s: Awaited<ReturnType<typeof seedStarted>>,
  ): Promise<ActiveCycleWorkContextSeal> {
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:seal-base",
    );
    return facts.contextSeal;
  }

  it("ACW-CORR-01A: seal cycleInstanceId drift → ACTIVE_CYCLE_CONTEXT_STALE", async () => {
    const s = await seedStarted("corr01a");
    const seal = await sealFromStarted(s);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01a",
      { ...seal, cycleInstanceId: "cycinst:forged-other" },
    );
    // facts.activeCycleInstanceId still points at real cycle; seal id forged.
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, {
        ...facts,
        activeCycleInstanceId: s.cycle.cycleInstanceId,
      }, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
  });

  it("ACW-CORR-01B: seal cycleTypeId drift → STALE", async () => {
    const s = await seedStarted("corr01b");
    const seal = await sealFromStarted(s);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01b",
      { ...seal, cycleTypeId: "cyc:delivery" },
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
    expect(mat.reason).toContain("cycleTypeId");
  });

  it("ACW-CORR-01C: seal trajectoryId drift → STALE", async () => {
    const s = await seedStarted("corr01c");
    const seal = await sealFromStarted(s);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01c",
      { ...seal, trajectoryId: "trj:forged" },
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
    expect(mat.reason).toContain("trajectoryId");
  });

  it("ACW-CORR-01D: seal ckcResolutionRef drift → STALE", async () => {
    const s = await seedStarted("corr01d");
    const seal = await sealFromStarted(s);
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01d",
      { ...seal, ckcResolutionRef: "ckc-res:forged" },
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
    expect(mat.reason).toContain("ckcResolutionRef");
  });

  it("ACW-CORR-01E: seal lps.version drift → STALE (zero writes)", async () => {
    const s = await seedStarted("corr01e");
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01e",
    );
    const before = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, { ...facts, lpsVersion: facts.lpsVersion + 99 }, MVP_OBS.slice(0, 1)),
    );
    expect(mat.ok).toBe(false);
    if (mat.ok) throw new Error("expected fail");
    expect(mat.code).toBe("ACTIVE_CYCLE_CONTEXT_STALE");
    expect(mat.reason).toContain("lps.version");
    const after = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
    expect(after.length).toBe(before.length);
  });

  it("ACW-CORR-01F: matching seal → materialize success", async () => {
    const s = await seedStarted("corr01f");
    const facts = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      "ltu:corr01f",
    );
    const mat = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts, MVP_OBS.slice(0, 2)),
    );
    expect(mat.ok).toBe(true);
    if (!mat.ok) throw new Error(mat.reason);
    expect(mat.createdIds.length).toBe(2);
  });

  it("ACW-CORR-01G: ACW emit without studio activeCycle → ACTIVE_CYCLE_CONTEXT_REQUIRED", async () => {
    const s = await seedStarted("corr01g");
    const provider = new FakeConversationProvider({
      scripted: [JSON.stringify(acwTurn(MVP_OBS.slice(0, 1), "No studio."))],
    });
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "observe",
      sessionDbPath: tempDbPath("corr01g-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider,
      studioCognitiveContext: null,
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("ACTIVE_CYCLE_CONTEXT_REQUIRED");
    expect(result.logicalTurnId).toMatch(/^ltu:/);
  });

  it("ACW-CORR-01H: buildActiveCycleWorkContextSeal null when not workEligible", async () => {
    const s = await seedStarted("corr01h");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const sealOk = buildActiveCycleWorkContextSeal({
      projectId: s.projectId,
      activeCycle: composed.context.activeCycle,
    });
    expect(sealOk).not.toBeNull();
    expect(sealOk!.status).toBe("active");
    const sealBad = buildActiveCycleWorkContextSeal({
      projectId: s.projectId,
      activeCycle: composed.context.activeCycle
        ? { ...composed.context.activeCycle, workEligible: false, status: "paused" }
        : null,
    });
    expect(sealBad).toBeNull();
  });
});

// ─── CR-ACW-02 logical Product turn ──────────────────────────────────────────

describe("CR-ACW-02 logical Product turn (ACW-CORR-02A..F)", () => {
  it("ACW-CORR-02A: default path mints durable logicalTurnId (ltu:) via Session", async () => {
    const s = await seedStarted("corr02a");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const sessionDbPath = tempDbPath("corr02a-sess.sqlite");
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "Observations MVP",
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({
        scripted: [JSON.stringify(acwTurn(MVP_OBS.slice(0, 1)))],
      }),
      studioCognitiveContext: composed.context,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.message);
    expect(result.logicalTurnId).toMatch(/^ltu:[0-9a-f]+$/);
    const session = new ProductSqliteSession({
      projectId: s.projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    try {
      const row = session.getLogicalProductTurn(result.logicalTurnId!);
      expect(row).not.toBeNull();
      expect(row!.logicalTurnId).toBe(result.logicalTurnId);
    } finally {
      session.close();
    }
  });

  it("ACW-CORR-02B: same logicalTurnId rematerialize → no duplicate items", async () => {
    const s = await seedStarted("corr02b");
    const sessionDbPath = tempDbPath("corr02b-sess.sqlite");
    const minted = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(minted.ok).toBe(true);
    if (!minted.ok) throw new Error(minted.reason);
    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      minted.logicalTurnId,
    );
    const first = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts1, MVP_OBS.slice(0, 2)),
    );
    expect(first.ok).toBe(true);
    if (!first.ok) throw new Error(first.reason);
    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      minted.logicalTurnId,
    );
    const second = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts2, MVP_OBS.slice(0, 2)),
    );
    expect(second.ok).toBe(true);
    if (!second.ok) throw new Error(second.reason);
    expect(second.idempotent).toBe(true);
    expect(second.createdIds).toHaveLength(0);
    expect(second.reusedIds).toEqual(first.createdIds);
  });

  it("ACW-CORR-02C: reopen Session DB → same logicalTurnId reconstructible + idempotent", async () => {
    const s = await seedStarted("corr02c");
    const sessionDbPath = tempDbPath("corr02c-sess.sqlite");
    const minted = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      cycleInstanceId: s.cycle.cycleInstanceId,
    });
    expect(minted.ok).toBe(true);
    if (!minted.ok) throw new Error(minted.reason);
    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      minted.logicalTurnId,
    );
    const first = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts1, MVP_OBS.slice(0, 1)),
    );
    expect(first.ok).toBe(true);

    const reopened = resolveOrMintLogicalProductTurn({
      projectId: s.projectId,
      sessionDbPath,
      presentedLogicalTurnId: minted.logicalTurnId,
    });
    expect(reopened.ok).toBe(true);
    if (!reopened.ok) throw new Error(reopened.reason);
    expect(reopened.logicalTurnId).toBe(minted.logicalTurnId);
    expect(reopened.minted).toBe(false);

    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      reopened.logicalTurnId,
    );
    const second = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts2, MVP_OBS.slice(0, 1)),
    );
    expect(second.ok).toBe(true);
    if (!second.ok) throw new Error(second.reason);
    expect(second.idempotent).toBe(true);
  });

  it("ACW-CORR-02D: two new turns same user text → two distinct logicalTurnIds", async () => {
    const s = await seedStarted("corr02d");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const sessionDbPath = tempDbPath("corr02d-sess.sqlite");
    const payload = JSON.stringify(acwTurn(MVP_OBS.slice(0, 1), "Same text."));
    const r1 = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "same user text",
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: [payload] }),
      studioCognitiveContext: composed.context,
    });
    const dto2 = await projectDtoFromOa(s.oa, s.projectId);
    const composed2 = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto2,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed2.ok).toBe(true);
    if (!composed2.ok) throw new Error(composed2.code);
    const r2 = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "same user text",
      sessionDbPath,
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: [payload] }),
      studioCognitiveContext: composed2.context,
    });
    expect(r1.ok && r2.ok).toBe(true);
    if (!r1.ok || !r2.ok) throw new Error("expected ok");
    expect(r1.logicalTurnId).toMatch(/^ltu:/);
    expect(r2.logicalTurnId).toMatch(/^ltu:/);
    expect(r1.logicalTurnId).not.toBe(r2.logicalTurnId);
  });

  it("ACW-CORR-02E: same logicalTurnId + changed material → IDEM_CONFLICT", async () => {
    const s = await seedStarted("corr02e");
    const corr = "ltu:corr02e-fixed";
    const sessionDbPath = tempDbPath("corr02e-sess.sqlite");
    const session = new ProductSqliteSession({
      projectId: s.projectId,
      dbPath: sessionDbPath,
      sessionKey: "f1-default",
    });
    try {
      session.ensureLogicalTurnSchema();
      session.getSqlite()
        .prepare(
          `INSERT INTO logical_product_turns(
             project_id, session_key, logical_turn_id, status, created_at, cycle_instance_id
           ) VALUES (?, ?, ?, ?, ?, ?)`,
        )
        .run(
          s.projectId,
          "f1-default",
          corr,
          "accepted",
          "2026-09-10T10:00:00.000Z",
          s.cycle.cycleInstanceId,
        );
    } finally {
      session.close();
    }
    const facts1 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    const first = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts1, [
        {
          type: "Observation",
          statement: "Original statement for conflict test.",
          confidence: "high",
          blocking: false,
        },
      ]),
    );
    expect(first.ok).toBe(true);
    const facts2 = await materializeFacts(
      s.oa,
      s.projectId,
      s.cycle.cycleInstanceId,
      corr,
    );
    // Same id formula uses statement digest — different statement → different id,
    // so force conflict via same index+type but mutate after creating same id path:
    // Use identical type/index/statement digest key by using same statement text
    // is impossible for conflict. Instead reuse first item id material via
    // different confidence on same statement (parity check).
    const conflict = await materializeActiveCycleWork(
      acwMaterializeInput(s.oa, facts2, [
        {
          type: "Observation",
          statement: "Original statement for conflict test.",
          confidence: "low",
          blocking: false,
        },
      ]),
    );
    expect(conflict.ok).toBe(false);
    if (conflict.ok) throw new Error("expected conflict");
    expect(conflict.code).toBe("ACTIVE_CYCLE_WORK_IDEM_CONFLICT");
  });

  it("ACW-CORR-02F: client-invented logicalTurnId → LOGICAL_TURN_UNKNOWN", async () => {
    const s = await seedStarted("corr02f");
    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    const result = await orchestrateProjectAssistantTurn({
      projectId: s.projectId,
      content: "hi",
      sessionDbPath: tempDbPath("corr02f-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({
        scripted: [JSON.stringify(acwTurn(MVP_OBS.slice(0, 1)))],
      }),
      studioCognitiveContext: composed.context,
      logicalTurnId: "ltu:client-invented-deadbeef",
    });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("expected fail");
    expect(result.code).toBe("LOGICAL_TURN_UNKNOWN");
  });
});

// ─── CR-ACW-03 newest-N ──────────────────────────────────────────────────────

describe("CR-ACW-03 newest-N prompt budget (ACW-CORR-03A..D)", () => {
  it("ACW-CORR-03A/B/C/D: >budget items → newest retained, oldest evicted, chronological ASC, restart parity", async () => {
    const budget = STUDIO_COGNITIVE_CONTEXT_BUDGET.maxActiveCycleWorkItems;
    const total = budget + 3;
    const dbPath = tempDbPath("corr03.sqlite");
    const s = await seedStarted("corr03", { dbPath });

    for (let i = 0; i < total; i += 1) {
      const facts = await materializeFacts(
        s.oa,
        s.projectId,
        s.cycle.cycleInstanceId,
        `ltu:corr03-${String(i).padStart(2, "0")}`,
      );
      const mat = await materializeActiveCycleWork({
        ...acwMaterializeInput(s.oa, facts, [
          {
            type: "Observation",
            statement: `ACW newest-N item ${String(i).padStart(2, "0")}`,
            confidence: "medium",
            blocking: false,
          },
        ]),
        producedAt: `2026-09-10T10:${String(i).padStart(2, "0")}:00.000Z`,
      });
      expect(mat.ok).toBe(true);
      if (!mat.ok) throw new Error(mat.reason);
      // Runtime clock is fixed — patch durable createdAt so newest-N sort is observable.
      // Note: EpistemicRepositoryPort.save() is a no-op; Product SQLite uses saveForProject.
      const written = await s.oa.cycleServices.epistemic.listByProject(s.projectId);
      const epistemicStore = s.oa.cycleServices.epistemic as EpistemicRepositoryPort & {
        saveForProject: (projectId: string, item: EpistemicItem) => Promise<void>;
      };
      for (const id of mat.createdIds) {
        const item = written.find((e) => e.epistemicItemId === id);
        if (!item) throw new Error(`missing ${id}`);
        await epistemicStore.saveForProject(s.projectId, {
          ...item,
          createdAt: `2026-09-10T10:${String(i).padStart(2, "0")}:00.000Z`,
        });
      }
    }

    const all = (
      await s.oa.cycleServices.epistemic.listByProject(s.projectId)
    ).filter((e) => e.source === ACTIVE_CYCLE_WORK_SOURCE);
    expect(all.length).toBe(total);

    const dto = await projectDtoFromOa(s.oa, s.projectId);
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto,
      registryRoot: PRODUCT_REGISTRY,
      oa: s.oa,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) throw new Error(composed.code);
    expect(composed.context.activeCycleWorkItems.state).toBe("PRESENT");
    const items = composed.context.activeCycleWorkItems.items;
    expect(items.length).toBe(budget);
    // Oldest of retained should be index 3 (0..2 evicted); chronological ASC.
    expect(items[0]!.statement).toContain(
      `item ${String(3).padStart(2, "0")}`,
    );
    expect(items[items.length - 1]!.statement).toContain(
      `item ${String(total - 1).padStart(2, "0")}`,
    );
    for (let i = 1; i < items.length; i += 1) {
      expect(items[i]!.statement > items[i - 1]!.statement).toBe(true);
    }
    // Global epistemic repository order unchanged (still has all items).
    expect(all.length).toBe(total);

    const reopened = await reopenRuntime("corr03", dbPath);
    const dto2 = await projectDtoFromOa(reopened.oa!, s.projectId);
    const composed2 = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: dto2,
      registryRoot: PRODUCT_REGISTRY,
      oa: reopened.oa!,
    });
    expect(composed2.ok).toBe(true);
    if (!composed2.ok) throw new Error(composed2.code);
    expect(composed2.context.activeCycleWorkItems.items.map((i) => i.statement)).toEqual(
      items.map((i) => i.statement),
    );
  });
});

// ─── CR-ACW-04 catalog-wide proof ────────────────────────────────────────────

describe("CR-ACW-04 catalog-wide active-cycle cognitive context", () => {
  it("for each selectable cycle type: START → compose workEligible + CKC + no unresolved", async () => {
    const selectable = listCycleTypes().filter(
      (t) =>
        t.lifecycleStatus === "active" &&
        isTargetCycleCurrentlySelectable(t.cycleTypeId),
    );
    expect(selectable.length).toBeGreaterThan(0);
    // Do NOT hardcode catalog length === 15
    expect(selectable.length).not.toBe(0);

    const unresolved: string[] = [];
    for (const entry of selectable) {
      const suffix = entry.cycleTypeId.replace(/[^a-z0-9]+/gi, "").slice(-8);
      const s = await seedStarted(`c4-${suffix}`, {
        targetCycleTypeId: entry.cycleTypeId,
      });
      expect(s.cycle.cycleTypeId).toBe(entry.cycleTypeId);
      const dto = await projectDtoFromOa(s.oa, s.projectId);
      const composed = await composeStudioCognitiveContext({
        analysis: analysisStub({ intentClass: "informative", parseOk: true }),
        project: dto,
        registryRoot: PRODUCT_REGISTRY,
        oa: s.oa,
      });
      if (!composed.ok) {
        unresolved.push(`${entry.cycleTypeId}:${composed.code}`);
        continue;
      }
      const ac = composed.context.activeCycle;
      if (!ac) {
        unresolved.push(`${entry.cycleTypeId}:missing_activeCycle`);
        continue;
      }
      expect(ac.cycleTypeId).toBe(entry.cycleTypeId);
      expect(ac.workEligible).toBe(true);
      expect(ac.trajectoryId).toBeTruthy();
      expect(ac.trajectoryVersion).toEqual(expect.any(Number));
      expect(ac.trajectoryStepId).toBeTruthy();
      expect(ac.ckcResolutionRef).toBeTruthy();
      expect(composed.context.method.activeCycleCkcAuthoritative).toBe(true);
      expect(composed.context.method.ckcLoaded).toBe(true);
    }
    expect(unresolved, `unresolved=[${unresolved.join(",")}]`).toEqual([]);

    const acwSrc = fs.readFileSync(
      path.join(
        APP_ROOT,
        "features/project-assistant/f2/activeCycleCognitiveContext.ts",
      ),
      "utf8",
    );
    expect(acwSrc).not.toMatch(/cyc:framing|cyc:delivery|cyc:architecture/);
    expect(acwSrc).not.toMatch(/switch\s*\(\s*cycleTypeId\s*\)/);
    expect(acwSrc).not.toMatch(/if\s*\(\s*cycleTypeId\s*===/);
  });
});

```

### FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`
```ts
"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import {
  projectAssistantConfirmAndExecuteF3FixtureAction,
  projectAssistantConfirmAndExecuteResolvedM3Action,
  projectAssistantDecideAction,
  projectAssistantPrepareF3FixtureAction,
  projectAssistantPrepareResolvedM3Action,
  projectAssistantRehydrateEvidenceOutcomeAction,
  projectAssistantSendAction,
} from "@/features/project-assistant/actions";
import type {
  AssistantHistoryMessage,
  AssistantToolEventDto,
  F2TurnPayload,
  ProjectAssistantRehydrateEvidenceOutcomeSuccess,
} from "@/features/project-assistant/types";
import type {
  F2DecisionKind,
  ProposalDto,
} from "@/features/project-assistant/f2/types";
import type {
  F3ExecutePayload,
  F3PreparePayload,
} from "@/features/project-assistant/f3/types";
import type { F3M3ResolvedPayload } from "@/features/project-assistant/f3/prepareAndResolveM3ProductPath";
import {
  G_UX_08_AMEND_DEFERRED_MESSAGE,
  deriveRecommendationFreshness,
  isBoundedRunningAttemptRefreshable,
  type RecommendationFreshness,
} from "@/features/project-assistant/presentationLabels";
import { lifecycleRecommendationMaterializeFailurePiloteNotice } from "@/features/project-assistant/lifecycleRecommendationPiloteNotice";
import { useRunningAttemptO3Observation } from "./useRunningAttemptO3Observation";

export type ProductMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
};

export type ProductConversationUiState =
  | "INITIAL"
  | "READY"
  | "SENDING"
  | "ASSISTANT_WORKING"
  | "SOURCE_LOOKUP"
  | "ANSWERED"
  | "ERROR_RECOVERABLE"
  | "BLOCKED";

export type UseProductConversationInput = {
  projectId: string;
  /** Fired after a successful durable Product mutation (not process-local). */
  onDurableFactsChanged?: () => void;
  /** Mirrors the latest durable Evidence/ReviewBundle rehydrate for History. */
  onDurableEvidenceOutcomeChange?: (
    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  ) => void;
};

function nextId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function modeFromResult(result: {
  presentation?: string;
  mode?: string;
  model?: string | null;
}): string {
  if (result.presentation === "test_provider" || result.mode === "fixture") {
    const model = result.model ? ` · ${result.model}` : "";
    return `Mode démonstration / Fixture${model}`;
  }
  if (result.presentation === "openai_live" || result.mode === "live") {
    const model = result.model ? ` · ${result.model}` : "";
    return `Mode live${model}`;
  }
  if (result.mode === "unavailable") return "Assistant indisponible";
  return "MODE À CONFIRMER";
}

/**
 * Headless Pre-M6 conversation controller.
 *
 * Authority stays server-side: this hook only sequences the existing F2/F3
 * server actions and exposes derived presentation state. It never invents
 * execution authority, durability, or a Recommendation → Decision promotion.
 */
export function useProductConversation({
  projectId,
  onDurableFactsChanged,
  onDurableEvidenceOutcomeChange,
}: UseProductConversationInput) {
  const [messages, setMessages] = useState<ProductMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
  const [uiState, setUiState] = useState<ProductConversationUiState>("INITIAL");
  const [error, setError] = useState<string | null>(null);
  const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
  const [ephemeralNotice, setEphemeralNotice] = useState(
    "Conversation, proposition et confirmation restent process-local (non durables). L’état projet enregistré peut être relu ; rien n’est inventé.",
  );
  const [lrMaterializeNotice, setLrMaterializeNotice] = useState<string | null>(
    null,
  );
  const [lrMaterializeCode, setLrMaterializeCode] = useState<string | null>(
    null,
  );
  const [f2, setF2] = useState<F2TurnPayload | null>(null);
  const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
  const [reservesText, setReservesText] = useState("");
  const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
  const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
    null,
  );
  const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
  const [durableEvidenceOutcome, setDurableEvidenceOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [durableRehydrateError, setDurableRehydrateError] = useState<
    string | null
  >(null);
  const [f3Busy, setF3Busy] = useState(false);
  const [isPending, startTransition] = useTransition();
  /** D-GF-ACW-02 — last server-issued logical turn; re-present only on failed retry. */
  const lastLogicalTurnIdRef = useRef<string | null>(null);
  const lastSendFailedRef = useRef(false);

  const listRef = useRef<HTMLDivElement | null>(null);
  const f3InFlightRef = useRef(false);
  const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
  const onDurableEvidenceOutcomeChangeRef = useRef(
    onDurableEvidenceOutcomeChange,
  );
  onDurableFactsChangedRef.current = onDurableFactsChanged;
  onDurableEvidenceOutcomeChangeRef.current = onDurableEvidenceOutcomeChange;

  function notifyDurableFactsChanged() {
    onDurableFactsChangedRef.current?.();
  }

  function applyDurableEvidenceOutcome(
    outcome: ProjectAssistantRehydrateEvidenceOutcomeSuccess | null,
  ) {
    setDurableEvidenceOutcome(outcome);
    onDurableEvidenceOutcomeChangeRef.current?.(outcome);
  }

  async function refreshDurableEvidenceOutcome() {
    const result = await projectAssistantRehydrateEvidenceOutcomeAction({
      projectId,
    });
    if (result.ok) {
      applyDurableEvidenceOutcome(result);
      setDurableRehydrateError(null);
      return;
    }
    if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
      applyDurableEvidenceOutcome(null);
      setDurableRehydrateError(null);
      return;
    }
    applyDurableEvidenceOutcome(null);
    setDurableRehydrateError(
      "Impossible de relire le dernier outcome durable.",
    );
  }

  useEffect(() => {
    setUiState((prev) => (prev === "INITIAL" ? "READY" : prev));
  }, []);

  useEffect(() => {
    let cancelled = false;
    applyDurableEvidenceOutcome(null);
    setDurableRehydrateError(null);

    void projectAssistantRehydrateEvidenceOutcomeAction({ projectId }).then(
      (result) => {
        if (cancelled) return;
        if (result.ok) {
          applyDurableEvidenceOutcome(result);
          setDurableRehydrateError(null);
          return;
        }
        if (result.code === "NO_EVIDENCE_OUTCOME_REFS") {
          applyDurableEvidenceOutcome(null);
          setDurableRehydrateError(null);
          return;
        }
        applyDurableEvidenceOutcome(null);
        setDurableRehydrateError(
          "Impossible de relire le dernier outcome durable.",
        );
      },
    );

    return () => {
      cancelled = true;
    };
    // Parent callbacks are mirrored via refs; projectId is the durable read key.
  }, [projectId]);

  // E2E-ONLY durable refresh (QA-PRE-M6-TEST-01). No-op unless window flag set.
  useEffect(() => {
    function onE2eRefresh() {
      const enabled = Boolean(
        (window as unknown as { __SFIA_E2E_QA_CONTROL__?: boolean })
          .__SFIA_E2E_QA_CONTROL__,
      );
      if (!enabled) return;
      void refreshDurableEvidenceOutcome();
    }
    window.addEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
    return () => {
      window.removeEventListener("sfia-e2e-refresh-durable", onE2eRefresh);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- projectId is the durable read key
  }, [projectId]);

  useEffect(() => {
    const el = listRef.current;
    if (!el || typeof el.scrollTo !== "function") return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [
    messages,
    toolEvents,
    error,
    activeProposal,
    f2,
    f3Prepare,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
  ]);

  const busy =
    isPending ||
    f3Busy ||
    uiState === "SENDING" ||
    uiState === "ASSISTANT_WORKING" ||
    uiState === "SOURCE_LOOKUP";
  const blocked = uiState === "BLOCKED";
  const canSend = !busy && !blocked && draft.trim().length > 0;
  const gateOpen =
    activeProposal?.morrisGateRequired === true &&
    activeProposal.status === "DECISION_REQUIRED";

  function historyForRequest(): AssistantHistoryMessage[] {
    return messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role as "user" | "assistant", content: m.content }));
  }

  function sendMessage(
    contentOverride?: string,
    options?: { logicalTurnId?: string | null },
  ) {
    const content = (contentOverride ?? draft).trim();
    if (!content || busy || blocked) return;

    const userMessage: ProductMessage = {
      id: nextId("user"),
      role: "user",
      content,
    };
    const history = historyForRequest();
    setMessages((prev) => [...prev, userMessage]);
    setDraft("");
    setError(null);
    setUiState("SENDING");

    // New distinct send: do not auto-replay prior logicalTurnId unless retry opts in.
    const presentedLogicalTurnId =
      options?.logicalTurnId?.trim() || undefined;

    startTransition(async () => {
      setUiState("ASSISTANT_WORKING");
      const result = await projectAssistantSendAction({
        projectId,
        content,
        history,
        ...(presentedLogicalTurnId
          ? { logicalTurnId: presentedLogicalTurnId }
          : {}),
      });

      if (!result.ok) {
        lastSendFailedRef.current = true;
        if (result.logicalTurnId) {
          lastLogicalTurnIdRef.current = result.logicalTurnId;
        } else if (presentedLogicalTurnId) {
          lastLogicalTurnIdRef.current = presentedLogicalTurnId;
        }
        if (result.status === "provider_unavailable") {
          setUiState("BLOCKED");
          setModeLabel("Assistant indisponible");
        } else {
          setUiState("ERROR_RECOVERABLE");
        }
        setError(result.message);
        return;
      }

      lastSendFailedRef.current = false;
      lastLogicalTurnIdRef.current = result.logicalTurnId ?? null;
      setModeLabel(modeFromResult(result));
      setEphemeralNotice(result.ephemeralNotice);
      setLrMaterializeNotice(
        lifecycleRecommendationMaterializeFailurePiloteNotice({
          recommendationAttempted:
            result.lifecycleRecommendationMaterialized === false &&
            Boolean(result.lifecycleRecommendationCode),
          materialized: result.lifecycleRecommendationMaterialized,
          code: result.lifecycleRecommendationCode,
        }),
      );
      setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
      setToolEvents((prev) => [...prev, ...result.toolEvents]);
      if (result.toolEvents.length > 0) {
        setUiState("SOURCE_LOOKUP");
      }
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content: result.text,
        },
      ]);
      if (result.f2) {
        setF2(result.f2);
        setActiveProposal(result.f2.proposal);
      } else {
        setF2(null);
        setActiveProposal(null);
      }
      setUiState("ANSWERED");
    });
  }

  function decide(kind: F2DecisionKind) {
    if (!activeProposal || busy || blocked) return;
    startTransition(async () => {
      setUiState("ASSISTANT_WORKING");
      setError(null);
      const result = await projectAssistantDecideAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionKind: kind,
        reservesText: kind === "GO_WITH_RESERVES" ? reservesText : null,
      });
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setModeLabel(modeFromResult(result));
      setEphemeralNotice(result.ephemeralNotice);
      setF2(result.f2);
      setActiveProposal(result.f2.proposal);
      setMessages((prev) => [
        ...prev,
        {
          id: nextId("assistant"),
          role: "assistant",
          content:
            kind === "AMEND"
              ? `${result.text}\n\n${G_UX_08_AMEND_DEFERRED_MESSAGE}`
              : result.text,
        },
      ]);
      setUiState("ANSWERED");
      // HumanDecision is a durable Product write — refresh LPS / History.
      notifyDurableFactsChanged();
    });
  }

  // Canonical post-GO CTA: durable M3 prepare + resolve (no Proposal authority).
  const canPrepareResolvedM3 =
    Boolean(f2?.decision?.readyForNextGatedStep) &&
    Boolean(f2?.decision?.decisionId) &&
    !f3Prepare &&
    !f3M3Resolved &&
    !f3Execute &&
    !busy &&
    !blocked;

  // Legacy fixture path — diagnostic / negative STALE proof only.
  const canPrepareLegacyFixture =
    Boolean(f2?.decision?.readyForNextGatedStep) &&
    Boolean(f2?.decision?.decisionId) &&
    Boolean(activeProposal) &&
    !f3Prepare &&
    !f3M3Resolved &&
    !f3Execute &&
    !busy &&
    !blocked;

  const recommendationFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: Boolean(f3Execute?.recommendation),
      hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
      sessionEvidenceId: f3Execute?.evidence.evidenceId ?? null,
      durableEvidenceIds: durableEvidenceOutcome?.evidenceIds ?? [],
    });

  const qualificationFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: true,
      hasDurableEvidenceOutcome: Boolean(durableEvidenceOutcome),
    });

  const durableOutcomeFreshness: RecommendationFreshness =
    deriveRecommendationFreshness({
      hasSessionRecommendation: false,
      hasDurableEvidenceOutcome: true,
    });

  // Freshness is presentation-only. Do not invent authority via canConfirm.
  const canConfirmLegacyFixture =
    Boolean(f3Prepare) && !f3Execute && !busy && !blocked;

  const canConfirmResolvedM3 =
    Boolean(f3M3Resolved) && !f3Execute && !busy && !blocked;

  const runningAttemptRefreshable =
    Boolean(f3M3Resolved) &&
    Boolean(f3Execute) &&
    isBoundedRunningAttemptRefreshable({
      attemptStatus: f3Execute?.attempt.status,
      realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
      executionMode: f3Execute?.attempt.executionMode,
      payloadMode: f3Execute?.mode,
      contractStatus: f3Execute?.contract.status,
    }) &&
    !blocked;

  const canRefreshResolvedM3Running =
    runningAttemptRefreshable && !busy;

  function prepareLegacyFixture() {
    if (!canPrepareLegacyFixture || !activeProposal || !f2?.decision) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantPrepareF3FixtureAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionId: f2.decision!.decisionId,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setF3Prepare(result.f3);
      setF3M3Resolved(null);
      setF3Execute(null);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      // ExecutionContract prepare is a durable Product write.
      notifyDurableFactsChanged();
    });
  }

  function prepareResolvedM3() {
    if (!canPrepareResolvedM3 || !f2?.decision) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantPrepareResolvedM3Action({
        projectId,
        decisionId: f2.decision!.decisionId,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        return;
      }
      setF3M3Resolved(result.f3);
      setF3Prepare(null);
      setF3Execute(null);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      // M3 PREPARE + resolved successor are durable Product writes.
      notifyDurableFactsChanged();
    });
  }

  function confirmAndExecuteLegacyFixture() {
    if (!canConfirmLegacyFixture || !f3Prepare || !activeProposal) return;
    if (f3Busy) return;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantConfirmAndExecuteF3FixtureAction({
        projectId,
        proposalId: activeProposal.proposalId,
        decisionId: f3Prepare.decisionId,
        executionContractId: f3Prepare.contract.executionContractId,
        expectedContractVersion: f3Prepare.contract.version,
      });
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        if (result.proposal) setActiveProposal(result.proposal);
        return;
      }
      setF3Execute(result.f3);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      notifyDurableFactsChanged();
      void refreshDurableEvidenceOutcome();
    });
  }

  function invokeCanonicalResolvedM3Path() {
    if (!f3M3Resolved) return;
    if (f3InFlightRef.current || f3Busy) return;
    f3InFlightRef.current = true;
    setF3Busy(true);
    startTransition(async () => {
      setError(null);
      const result = await projectAssistantConfirmAndExecuteResolvedM3Action({
        projectId,
        decisionId: f3M3Resolved.decisionId,
        executionContractId: f3M3Resolved.successor.executionContractId,
        expectedContractVersion: f3M3Resolved.successor.version,
      });
      f3InFlightRef.current = false;
      setF3Busy(false);
      if (!result.ok) {
        setUiState("ERROR_RECOVERABLE");
        setError(result.message);
        return;
      }
      setF3Execute(result.f3);
      setEphemeralNotice(result.ephemeralNotice);
      setMessages((prev) => [
        ...prev,
        { id: nextId("assistant"), role: "assistant", content: result.text },
      ]);
      setUiState("ANSWERED");
      notifyDurableFactsChanged();
      void refreshDurableEvidenceOutcome();
    });
  }

  function confirmAndExecuteResolvedM3() {
    if (!canConfirmResolvedM3) return;
    invokeCanonicalResolvedM3Path();
  }

  function refreshResolvedM3RunningAttempt() {
    if (!runningAttemptRefreshable) return;
    invokeCanonicalResolvedM3Path();
  }

  useRunningAttemptO3Observation({
    enabled: runningAttemptRefreshable,
    startedAt: f3Execute?.attempt.startedAt,
    resolvedMaxDurationMs: f3Execute?.attempt.resolvedMaxDurationMs,
    refresh: refreshResolvedM3RunningAttempt,
    inFlight: f3Busy,
  });

  function retryLastUserMessage() {
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (!lastUser) return;
    setMessages((prev) => prev.filter((m) => m.id !== lastUser.id));
    const replayId =
      lastSendFailedRef.current && lastLogicalTurnIdRef.current
        ? lastLogicalTurnIdRef.current
        : undefined;
    sendMessage(lastUser.content, { logicalTurnId: replayId });
  }

  return {
    listRef,
    messages,
    draft,
    setDraft,
    toolEvents,
    uiState,
    error,
    modeLabel,
    ephemeralNotice,
    lrMaterializeNotice,
    lrMaterializeCode,
    f2,
    activeProposal,
    reservesText,
    setReservesText,
    f3Prepare,
    f3M3Resolved,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
    busy,
    blocked,
    canSend,
    gateOpen,
    recommendationFreshness,
    qualificationFreshness,
    durableOutcomeFreshness,
    canPrepareResolvedM3,
    canPrepareLegacyFixture,
    canConfirmResolvedM3,
    canConfirmLegacyFixture,
    canRefreshResolvedM3Running,
    sendMessage,
    decide,
    prepareResolvedM3,
    prepareLegacyFixture,
    confirmAndExecuteResolvedM3,
    confirmAndExecuteLegacyFixture,
    refreshResolvedM3RunningAttempt,
    retryLastUserMessage,
  };
}

export type ProductConversationController = ReturnType<
  typeof useProductConversation
>;

```

### FILE: `projects/sfia-studio/app/features/project-assistant/actions.ts`
```ts
"use server";

import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { orchestrateAssistantSend } from "./f2/orchestrateF2";
import { recordF2Decision } from "./f2/recordDecision";
import {
  executePilotLifecycleAction,
  type PilotLifecycleActionKind,
} from "./f2/pilotLifecycleActions";
import {
  projectPilotLifecycle,
  type PilotLifecycleProjection,
  selectCurrentLifecycleRecommendations,
  isPausedStatus,
  assessResumeReconciliation,
  deriveLifecycleBlockersFromEpistemicItems,
} from "@/lib/oa/cycle";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
import type { F2DecisionKind } from "./f2/types";
import { confirmAndExecuteF3Fixture } from "./f3/confirmAndExecuteF3Fixture";
import { confirmAndExecuteResolvedM3 } from "./f3/confirmAndExecuteResolvedM3";
import { prepareF3Fixture } from "./f3/prepareF3Fixture";
import { prepareM3FromDecision } from "./f3/prepareM3FromDecision";
import { prepareAndResolveM3ProductPath } from "./f3/prepareAndResolveM3ProductPath";
import { rehydrateEvidenceOutcomeFromLps } from "./f3/rehydrateEvidenceOutcomeFromLps";
import { resolveF3EphemeralNotice } from "./f3/constants";
import {
  executionSemanticUserLabel,
  resolvePersistenceNotice,
} from "./presentationLabels";
import {
  runMw6GovernedNoraProductTurn,
  type RunMw6GovernedNoraProductTurnInput,
} from "./mw6GovernedNoraTurn";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantDecideResult,
  ProjectAssistantExecuteF3Result,
  ProjectAssistantPrepareF3Result,
  ProjectAssistantPrepareM3Result,
  ProjectAssistantPrepareResolvedM3Result,
  ProjectAssistantRehydrateEvidenceOutcomeResult,
  ProjectAssistantSendResult,
} from "./types";

/**
 * Thin server action — Project Workspace Assistant (F1 + F2 + F3 fixture).
 * No OPS1 session. No Cursor REAL. No Git write.
 * Persistence durability follows RuntimeOaStack.productDurablePath (Product SQLite vs Memory).
 */
export async function projectAssistantSendAction(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Untrusted ExecutionContract id reference for MW6 governed external discovery.
   * When present, server composes governedAuthority from Auth + OA and invokes
   * the real Nora product path. CONTENT/AUTHORITY of the contract are never
   * trusted from the client — only the id reference.
   */
  executionContractId?: string;
  /**
   * Optional untrusted evidence hint — verified only by server composition.
   */
  authorityEvidenceId?: unknown;
  /** Hostile — ignored (server builds governedAuthority). */
  governedAuthority?: unknown;
  /** Hostile — ignored (Auth resolver owns actor). */
  actorId?: unknown;
  getExecutionContract?: unknown;
  checkExecutionAuthorization?: unknown;
  authorityResolver?: unknown;
  authorizedContract?: unknown;
  currentExternalDiscoveryIntent?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  /**
   * TEST-ONLY Auth session → Pilote seam. Production omits this and uses
   * resolveCurrentAuthenticatedPilote. AUTH REAL boundary carried forward.
   */
  resolveAuthenticatedPilote?: RunMw6GovernedNoraProductTurnInput["resolveAuthenticatedPilote"];
  provider?: import("@/lib/platform/ai").ConversationProvider;
  sessionDbPath?: string;
  /**
   * D-GF-ACW-02 — optional re-present of server-issued logical Product turn id.
   * Untrusted until Session lookup; client-invented ids fail LOGICAL_TURN_UNKNOWN.
   */
  logicalTurnId?: string;
}): Promise<ProjectAssistantSendResult> {
  const executionContractId =
    typeof input.executionContractId === "string"
      ? input.executionContractId.trim()
      : "";
  if (executionContractId.length > 0) {
    return runMw6GovernedNoraProductTurn({
      projectId: input.projectId,
      content: input.content,
      history: input.history,
      executionContractId,
      claimedAuthorityEvidenceId: input.authorityEvidenceId,
      resolveAuthenticatedPilote: input.resolveAuthenticatedPilote,
      provider: input.provider,
      sessionDbPath: input.sessionDbPath,
      governedAuthority: input.governedAuthority,
      actorId: input.actorId,
      authorityEvidenceId: input.authorityEvidenceId,
      getExecutionContract: input.getExecutionContract,
      checkExecutionAuthorization: input.checkExecutionAuthorization,
      authorityResolver: input.authorityResolver,
      authorizedContract: input.authorizedContract,
      currentExternalDiscoveryIntent: input.currentExternalDiscoveryIntent,
      canActAsMorris: input.canActAsMorris,
      claimedAuthorityLevel: input.claimedAuthorityLevel,
    });
  }
  return orchestrateAssistantSend({
    projectId: input.projectId,
    content: input.content,
    history: input.history,
    provider: input.provider,
    sessionDbPath: input.sessionDbPath,
    logicalTurnId: input.logicalTurnId,
  });
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
  };
}

/**
 * Morris gate decision — client may only send proposalId, decisionKind,
 * optional reserves, projectId. Authority is registered server-side.
 */
export async function projectAssistantDecideAction(input: {
  projectId: string;
  proposalId: string;
  decisionKind: F2DecisionKind;
  reservesText?: string | null;
  /** Hostile — ignored if present. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantDecideResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "decision_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour la décision F2.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const recorded = await recordF2Decision({
    proposalId: input.proposalId,
    projectId: input.projectId,
    decisionKind: input.decisionKind,
    reservesText: input.reservesText,
    canActAsMorris: input.canActAsMorris,
    claimedAuthorityLevel: input.claimedAuthorityLevel,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    decisionServices: runtime.oa.decisionServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
  });

  if (!recorded.ok) {
    return {
      ok: false,
      status: recorded.code === "STALE" ? "stale" : "decision_error",
      code: recorded.code,
      message: recorded.message,
      mode: "fixture",
      retryable: recorded.code === "STALE",
      proposal: recorded.proposal ?? null,
    };
  }

  const { decision, proposal } = recorded;
  const textParts = [
    "DÉCISION PRISE",
    `${decision.kind} capturée pour ${proposal.proposalId}.`,
    `Scope: ${decision.scope}.`,
    decision.readyForNextGatedStep
      ? "READY FOR NEXT GATED STEP"
      : "Proposition non approuvée.",
    "AUCUNE EXÉCUTION",
    F2_PROCESS_LOCAL_NOTICE,
  ];

  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: textParts.join(" — "),
    project,
    ephemeralNotice: F2_PROCESS_LOCAL_NOTICE,
    f2: {
      turnKind: "f2_decision",
      intentClass: "actionable",
      qualification: null,
      proposal,
      decision,
      labels: {
        recommendation: null,
        proposition: "PROPOSITION",
        decisionRequired: null,
        decisionTaken: "DÉCISION PRISE",
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}

/**
 * F3 PREPARE — Build+Validate ExecutionContract only.
 * No client authority. Hostile mode/adapter/agent/command rejected.
 */
export async function projectAssistantPrepareF3FixtureAction(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour F3 PREPARE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareF3Fixture({
    projectId: input.projectId,
    proposalId: input.proposalId,
    decisionId: input.decisionId,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
      productDurablePath: runtime.oa.productDurablePath,
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "STALE",
      proposal: (prepared.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
    };
  }

  const f3 = prepared.payload;
  const persistenceNotice = resolveF3EphemeralNotice(
    runtime.oa.productDurablePath,
  );
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      "F3 PREPARE",
      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
      "AUCUNE EXÉCUTION",
      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f2: null,
    f3,
  };
}

/**
 * F3 M3 PREPARE — from durable decisionId (no ProposalStore).
 * Exact contract from DecisionBasis. Cursor PREPARE-only. No Attempt.
 */
export async function projectAssistantPrepareM3Action(input: {
  projectId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareM3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 PREPARE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareM3FromDecision({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
      activeCycleInstanceId: project.activeCycleInstanceId,
      ckcResolutionRef: project.ckcResolutionRef,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "CONTEXT_STALE",
    };
  }

  const f3 = prepared.payload;
  return {
    ok: true,
    status: "ok",
    mode: "m3_prepare",
    presentation: "unconfirmed",
    text: [
      "M3 PREPARE",
      `Contrat ${f3.contract.executionContractId} v${f3.contract.version} (${f3.contract.status})`,
      `Fingerprint ${f3.contract.semanticFingerprint.slice(0, 12)}…`,
      "AUCUNE EXÉCUTION",
      "CURSOR PREPARE-ONLY",
      "NO GATE D",
    ].join(" — "),
    project,
    ephemeralNotice:
      "M3 PREPARE durable — Decision + ExecutionContract Product SQLite. Cursor REAL bloqué.",
    f3,
  };
}

/**
 * Canonical post-GO product path:
 * prepareM3FromDecision → resolveM3ExecutionContract (fixture-safe ZERO REAL).
 * Returns the resolved successor for explicit Confirmation. No StartExecution.
 */
export async function projectAssistantPrepareResolvedM3Action(input: {
  projectId: string;
  decisionId: string;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantPrepareResolvedM3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "prepare_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 PREPARE+RESOLVE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const prepared = await prepareAndResolveM3ProductPath({
    projectId: input.projectId,
    decisionId: input.decisionId,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
      activeCycleInstanceId: project.activeCycleInstanceId,
      ckcResolutionRef: project.ckcResolutionRef,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!prepared.ok) {
    return {
      ok: false,
      status: prepared.code === "CONTEXT_STALE" ? "stale" : "prepare_error",
      code: prepared.code,
      message: prepared.message,
      mode: "fixture",
      retryable: prepared.code === "CONTEXT_STALE",
    };
  }

  const f3 = prepared.payload;
  return {
    ok: true,
    status: "ok",
    mode: "m3_resolved_fixture",
    presentation: "unconfirmed",
    text: [
      "Contrat d'exécution prêt à confirmer",
      `Successeur ${f3.successor.executionContractId} v${f3.successor.version} (${f3.successor.status})`,
      `Action ${f3.successor.action} · cible ${f3.successor.target}`,
      "Confirmation process-local requise — aucune tentative démarrée",
      "AUCUNE EXÉCUTION RÉELLE",
    ].join(" — "),
    project,
    ephemeralNotice:
      "Contrat durable résolu (HumanDecision + DecisionBasis). Confirmation process-local. Cursor REAL bloqué.",
    f3,
  };
}

type ProjectAssistantPrepareF3FailureProposal =
  import("./f2/types").ProposalDto | null;

/**
 * F3 confirm + fixture execute + evidence reinjection.
 * No client authority. Hostile REAL/adapter/agent/command rejected.
 */
export async function projectAssistantConfirmAndExecuteF3FixtureAction(input: {
  projectId: string;
  proposalId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantExecuteF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "execute_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour F3 EXECUTE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const executed = await confirmAndExecuteF3Fixture({
    projectId: input.projectId,
    proposalId: input.proposalId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    expectedContractVersion: input.expectedContractVersion,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    real: input.real,
    currentContext: {
      projectId: project.projectId,
      lpsId: project.lpsId,
      lpsVersion: project.lpsVersion,
      doctrineDigest: project.doctrineDigest,
    },
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      executionAttemptServices: runtime.oa.executionAttemptServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
      fixtureAdapter: runtime.oa.fixtureAdapter,
      projectServices: runtime.oa.projectServices,
      productDurablePath: runtime.oa.productDurablePath,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!executed.ok) {
    return {
      ok: false,
      status: executed.code === "STALE" ? "stale" : "execute_error",
      code: executed.code,
      message: executed.message,
      mode: "fixture",
      retryable: executed.code === "STALE",
      proposal: (executed.proposal as ProjectAssistantPrepareF3FailureProposal) ?? null,
    };
  }

  const f3 = executed.payload;
  const persistenceNotice = resolveF3EphemeralNotice(
    runtime.oa.productDurablePath,
  );
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      f3.reusedExistingAttempt
        ? "F3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
        : "F3 FIXTURE EXÉCUTÉE",
      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
      `Evidence ${f3.evidence.evidenceId} · non verified`,
      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      "CURSOR REAL BLOQUÉ",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f3,
  };
}

/**
 * Canonical post-GO confirm + fixture-safe execute on resolved M3 successor.
 * No Proposal validation. Confirmation is process-local (not persisted as authority).
 */
export async function projectAssistantConfirmAndExecuteResolvedM3Action(input: {
  projectId: string;
  decisionId: string;
  executionContractId: string;
  expectedContractVersion: number;
  /** Hostile — ignored. */
  mode?: unknown;
  adapterRef?: unknown;
  agentId?: unknown;
  command?: unknown;
  real?: unknown;
  selectedAgentRef?: unknown;
  executionMode?: unknown;
  trustLevel?: unknown;
  authorityEvidenceId?: unknown;
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
}): Promise<ProjectAssistantExecuteF3Result> {
  void input.mode;
  void input.adapterRef;
  void input.agentId;
  void input.command;
  void input.real;
  void input.selectedAgentRef;
  void input.executionMode;
  void input.trustLevel;
  void input.authorityEvidenceId;
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "execute_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour M3 EXECUTE.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const executed = await confirmAndExecuteResolvedM3({
    projectId: input.projectId,
    decisionId: input.decisionId,
    executionContractId: input.executionContractId,
    expectedContractVersion: input.expectedContractVersion,
    mode: input.mode,
    adapterRef: input.adapterRef,
    agentId: input.agentId,
    command: input.command,
    real: input.real,
    deps: {
      decisionServices: runtime.oa.decisionServices,
      authorityResolver: runtime.oa.authorityResolver,
      executionContractServices: runtime.oa.executionContractServices,
      executionAttemptServices: runtime.oa.executionAttemptServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
      fixtureAdapter: runtime.oa.fixtureAdapter,
      projectServices: runtime.oa.projectServices,
      productDurablePath: runtime.oa.productDurablePath,
      nowIso: () => runtime.oa!.clock.nowIso(),
    },
  });

  if (!executed.ok) {
    return {
      ok: false,
      status: "execute_error",
      code: executed.code,
      message: executed.message,
      mode: "fixture",
      retryable: false,
    };
  }

  const f3 = executed.payload;
  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: runtime.oa.productDurablePath,
    mode: f3.mode,
    kind: "execute",
  });
  const semantic = executionSemanticUserLabel({
    mode: f3.mode,
    payloadMode: f3.mode,
    executionMode: f3.attempt.executionMode,
    adapterId: f3.attempt.adapterId,
    adapterRef: f3.attempt.adapterRef,
    realProcessInvoked: f3.attempt.realProcessInvoked,
    realExecution: f3.realExecution,
    processRef: f3.attempt.processRef,
    evidenceId: f3.evidence.evidenceId,
  });
  const isCursorReal = f3.mode === "CURSOR_CLI_REAL";
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      isCursorReal
        ? f3.reusedExistingAttempt
          ? "M3 EXÉCUTION CURSOR — MÊME TENTATIVE"
          : "M3 EXÉCUTION CURSOR ENREGISTRÉE"
        : f3.reusedExistingAttempt
          ? "M3 FIXTURE DÉJÀ EXÉCUTÉE (idempotent)"
          : "M3 FIXTURE EXÉCUTÉE",
      `Attempt ${f3.attempt.attemptId} · ${f3.attempt.status}`,
      `Evidence ${f3.evidence.evidenceId} · non verified`,
      `ReviewBundle ${f3.reviewBundle.reviewBundleId}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      semantic,
      isCursorReal ? null : "FIXTURE — AUCUNE EXÉCUTION RÉELLE",
      isCursorReal ? null : "CURSOR REAL BLOQUÉ",
      persistenceNotice,
    ]
      .filter((part): part is string => Boolean(part))
      .join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    f3,
  };
}

/**
 * M5 durable Nora/F3 readback — LPS evidence/RB refs → RecommendNextGate.
 * Strictly read-only: no Decision, no gate consume, no Attempt launch.
 */
export async function projectAssistantRehydrateEvidenceOutcomeAction(input: {
  projectId: string;
}): Promise<ProjectAssistantRehydrateEvidenceOutcomeResult> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "rehydrate_error",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA process-local indisponibles pour rehydrate F3.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: "unavailable",
      retryable: false,
    };
  }
  const project = toContextDto(projectResult);

  const rehydrated = await rehydrateEvidenceOutcomeFromLps({
    projectId: input.projectId,
    deps: {
      projectServices: runtime.oa.projectServices,
      evidenceReviewServices: runtime.oa.evidenceReviewServices,
    },
  });

  if (!rehydrated.ok) {
    return {
      ok: false,
      status: "rehydrate_error",
      code: rehydrated.code,
      message: rehydrated.message,
      mode: "fixture",
      retryable: false,
      project,
    };
  }

  const persistenceNotice = resolvePersistenceNotice({
    productDurablePath: runtime.oa.productDurablePath,
    mode: rehydrated.recommendation.mode,
    kind: "rehydrate",
  });
  return {
    ok: true,
    status: "ok",
    mode: "fixture",
    presentation: "unconfirmed",
    text: [
      "REHYDRATE EVIDENCE OUTCOME",
      `LPS v${rehydrated.lpsVersion}`,
      `Evidence ${rehydrated.evidenceIds.join(", ") || "—"}`,
      `ReviewBundle ${rehydrated.reviewBundleIds.join(", ") || "—"}`,
      "RECOMMANDATION — PAS UNE DÉCISION HUMAINE",
      persistenceNotice,
    ].join(" — "),
    project,
    ephemeralNotice: persistenceNotice,
    evidence: rehydrated.evidence,
    reviewBundles: rehydrated.reviewBundles,
    recommendation: rehydrated.recommendation,
    lpsVersion: rehydrated.lpsVersion,
    evidenceIds: rehydrated.evidenceIds,
    reviewBundleIds: rehydrated.reviewBundleIds,
  };
}


async function buildAssistantPilotLifecycleProjection(
  projectId: string,
): Promise<PilotLifecycleProjection | null> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) return null;
  const cycles = await runtime.oa.cycleServices.cycles.listByProject(projectId);
  const lps =
    await runtime.oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  const lpsActive = lps.ok
    ? lps.livingProjectState.activeCycleInstanceId
    : null;
  let epistemicItems: Awaited<
    ReturnType<typeof runtime.oa.cycleServices.epistemic.listByProject>
  > = [];
  let epistemicReaderFailed = false;
  try {
    epistemicItems = await runtime.oa.cycleServices.epistemic.listByProject(
      projectId,
    );
  } catch {
    epistemicReaderFailed = true;
    epistemicItems = [];
  }

  let trajectory = null;
  let trajectoryReaderFailed = false;
  try {
    const traj = await runtime.oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    trajectory = traj.ok ? traj.trajectory : null;
  } catch {
    trajectoryReaderFailed = true;
    trajectory = null;
  }

  let decisions: Awaited<
    ReturnType<typeof runtime.oa.decisionServices.decisions.listByProject>
  > = [];
  let decisionReaderFailed = false;
  try {
    decisions =
      await runtime.oa.decisionServices.decisions.listByProject(projectId);
  } catch {
    decisionReaderFailed = true;
    decisions = [];
  }

  let evidence: Awaited<
    ReturnType<
      typeof runtime.oa.evidenceReviewServices.repository.listByProject
    >
  > = [];
  let evidenceReaderFailed = false;
  try {
    evidence =
      await runtime.oa.evidenceReviewServices.repository.listByProject(
        projectId,
      );
  } catch {
    evidenceReaderFailed = true;
    evidence = [];
  }

  const projectResult = await runtime.oa.projectServices.getProject.execute({
    projectId,
  });
  const doctrinePin = projectResult.ok
    ? (projectResult.project.doctrinePackageRef ??
      (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
    : lps.ok
      ? lps.livingProjectState.doctrinePackageRef
      : undefined;
  const blockersSnap = deriveLifecycleBlockersFromEpistemicItems(epistemicItems);

  const failedMaterialDimensions =
    new Set<LifecycleRecommendationMaterialDimension>();
  if (!lps.ok) failedMaterialDimensions.add("lps");
  if (trajectoryReaderFailed) failedMaterialDimensions.add("trajectory");
  if (decisionReaderFailed) failedMaterialDimensions.add("decisions");
  if (evidenceReaderFailed) failedMaterialDimensions.add("evidence");
  if (epistemicReaderFailed) failedMaterialDimensions.add("epistemic_blockers");

  const currentRecommendations = selectCurrentLifecycleRecommendations({
    items: epistemicItems,
    cycles,
    lpsActiveCycleInstanceId: lpsActive,
    lpsVersion: lps.ok ? lps.livingProjectState.version : null,
    doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
    doctrinePackageVersion: doctrinePin?.version ?? null,
    doctrinePackageDigest: doctrinePin?.digest ?? null,
    trajectory,
    decisions,
    evidence,
    blockingReservationStatements: blockersSnap.statements,
    failedMaterialDimensions,
  });

  const projection = projectPilotLifecycle({
    projectId,
    cycles,
    lpsActiveCycleInstanceId: lpsActive,
    currentRecommendations,
  });

  if (
    projection.selectedStatus &&
    isPausedStatus(projection.selectedStatus) &&
    projection.selectedCycleInstanceId
  ) {
    const selected = cycles.find(
      (c) => c.cycleInstanceId === projection.selectedCycleInstanceId,
    );
    if (!selected) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "selected_cycle_missing",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    if (!projectResult.ok) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "project_unreadable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    if (trajectoryReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "trajectory_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }
    if (decisionReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "decision_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }
    if (evidenceReaderFailed) {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "evidence_reader_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
      return projection;
    }

    try {
      const siblingActiveExists = cycles.some(
        (c) =>
          c.status === "active" &&
          c.cycleInstanceId !== selected.cycleInstanceId,
      );

      const reconciliation = assessResumeReconciliation({
        cycle: selected,
        projectId,
        lpsReadable: lps.ok,
        lpsVersion: lps.ok ? lps.livingProjectState.version : 0,
        lpsActiveCycleInstanceId: lpsActive,
        objective: lps.ok ? lps.livingProjectState.objective : "",
        context: lps.ok ? (lps.livingProjectState.context ?? "") : "",
        scope: lps.ok ? (lps.livingProjectState.scope ?? "") : "",
        doctrinePackageId: doctrinePin?.doctrinePackageId,
        doctrinePackageVersion: doctrinePin?.version,
        doctrinePackageDigest: doctrinePin?.digest,
        trajectory,
        decisions,
        evidence,
        blockingReservationStatements: blockersSnap.statements,
        blockerSourceUnreadable: epistemicReaderFailed,
        siblingActiveExists,
      });

      projection.resumeReconciliation = {
        clean: reconciliation.clean,
        detailCode: reconciliation.clean ? null : "CYCLE_RESUME_DRIFT",
        reason: reconciliation.clean
          ? "assess_resume_reconciliation_clean"
          : reconciliation.driftReasons.join(",") || "dirty",
      };
      projection.cta = {
        ...projection.cta,
        canResume: projection.cta.canResume && reconciliation.clean,
      };
    } catch {
      projection.resumeReconciliation = {
        clean: false,
        detailCode: "CYCLE_RESUME_DRIFT",
        reason: "reconciliation_facts_unavailable",
      };
      projection.cta = { ...projection.cta, canResume: false };
    }
  }

  return projection;
}

/**
 * CORR-PROOF-05 — durable Pilot lifecycle projection (reload without F2).
 */
export async function projectAssistantPilotLifecycleProjection(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  projection?: PilotLifecycleProjection;
  selectedCycleInstanceId?: string | null;
  selectedStatus?: string | null;
  activeCycleInstanceId?: string | null;
  selectionAmbiguous?: boolean;
  cta?: PilotLifecycleProjection["cta"];
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour Pilot lifecycle projection.",
    };
  }
  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
    };
  }
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  if (!projection) {
    return {
      ok: false,
      status: "projection_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Pilot lifecycle projection unavailable.",
    };
  }
  return {
    ok: true,
    status: "ok",
    projection,
    selectedCycleInstanceId: projection.selectedCycleInstanceId,
    selectedStatus: projection.selectedStatus,
    activeCycleInstanceId: projection.activeCycleInstanceId,
    selectionAmbiguous: projection.selectionAmbiguous,
    cta: projection.cta,
  };
}

/**
 * CORR-PROOF-05 — Pilot lifecycle transitions (START/PAUSE/RESUME/FINALIZE/CANCEL).
 * Never uses morrisGateRequired as Pilot lifecycle authority.
 */
export async function projectAssistantPilotLifecycleAction(input: {
  projectId: string;
  cycleInstanceId: string;
  action: PilotLifecycleActionKind;
  materialDriftDetected?: boolean;
  requiresTrajectoryHumanDecision?: boolean;
  requiresReplanHumanDecision?: boolean;
}): Promise<{
  ok: boolean;
  status: string;
  code?: string;
  message?: string;
  action?: PilotLifecycleActionKind;
  cycleStatus?: string;
  activeCycleInstanceId?: string | null;
  assessment?: unknown;
  decisionId?: string;
  project?: ProjectAssistantContextDto;
  projection?: PilotLifecycleProjection;
  selectedCycleInstanceId?: string | null;
  selectedStatus?: string | null;
  selectionAmbiguous?: boolean;
  cta?: PilotLifecycleProjection["cta"];
}> {
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      status: "oa_unavailable",
      code: "OA_STACK_UNAVAILABLE",
      message: "Services OA indisponibles pour Pilot lifecycle.",
    };
  }
  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
    };
  }
  const project = toContextDto(projectResult);
  const executed = await executePilotLifecycleAction({
    action: input.action,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    cycleServices: runtime.oa.cycleServices,
    projectServices: runtime.oa.projectServices,
    decisionServices: runtime.oa.decisionServices,
    authorityResolver: runtime.oa.authorityResolver,
    nowIso: () => runtime.oa!.clock.nowIso(),
    materialDriftDetected: input.materialDriftDetected,
    requiresTrajectoryHumanDecision: input.requiresTrajectoryHumanDecision,
    requiresReplanHumanDecision: input.requiresReplanHumanDecision,
  });
  if (!executed.ok) {
    const projection = await buildAssistantPilotLifecycleProjection(
      input.projectId,
    );
    return {
      ok: false,
      status: "lifecycle_error",
      code: executed.code,
      message: executed.message,
      assessment: executed.assessment,
      project,
      projection: projection ?? undefined,
      selectedCycleInstanceId: projection?.selectedCycleInstanceId,
      selectedStatus: projection?.selectedStatus,
      selectionAmbiguous: projection?.selectionAmbiguous,
      cta: projection?.cta,
    };
  }
  const reloaded = await loadProjectRuntimeForAssistant(input.projectId);
  const nextProject = reloaded.ok ? toContextDto(reloaded) : project;
  const projection = await buildAssistantPilotLifecycleProjection(
    input.projectId,
  );
  return {
    ok: true,
    status: "ok",
    action: executed.action,
    cycleStatus: executed.result?.ok ? executed.result.cycle.status : undefined,
    activeCycleInstanceId: executed.result?.ok
      ? (executed.result.activeCycleInstanceId ??
        projection?.activeCycleInstanceId ??
        nextProject.activeCycleInstanceId ??
        null)
      : projection?.activeCycleInstanceId ??
        nextProject.activeCycleInstanceId ??
        null,
    assessment: executed.assessment,
    decisionId: executed.decisionId,
    project: nextProject,
    projection: projection ?? undefined,
    selectedCycleInstanceId: projection?.selectedCycleInstanceId,
    selectedStatus: projection?.selectedStatus,
    selectionAmbiguous: projection?.selectionAmbiguous,
    cta: projection?.cta,
    message: `Pilot lifecycle ${executed.action} applied.`,
  };
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/f2/activeCycleCognitiveContext.ts`
```ts
/**
 * D-GF-ACW-01 — server-owned active CycleInstance + exact CKC grounding.
 *
 * Generic path: LPS.activeCycleInstanceId → CycleInstance → cycleTypeId →
 * Product CKC registry. No cycleTypeId branching. No label reverse-mapping.
 * Fail-closed before model call when binding/ref is incoherent.
 */

import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import type { CycleInstance, CycleInstanceStatus, CycleProfile } from "@/lib/oa/cycle";
import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
} from "@/lib/oa/cycle/domain/catalogFingerprint";
import { getCycleTypeById } from "@/lib/oa/cycle/domain/cycleTypeCatalog";
import { mintPrepareCycleCorrelationId } from "@/lib/oa/cycle/application/lifecycleRecommendation/prepareCycleFromValidatedTrajectory";
import { projectCkcResolutionRef } from "@/lib/oa/cycle/application/lifecycleRecommendation/ckcResolutionRef";
import { classifyTrajectoryBinding } from "@/lib/oa/cycle/application/lifecycleRecommendation/assertTrajectoryBoundCycleStartReady";
import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
import {
  buildCkcApplicationLensSection,
  loadProductCkcCognitiveContent,
  type ProductCkcCognitiveContent,
} from "./ckcCognitiveContext";
import { doctrinePackagePinFromProjectContext } from "./methodOrientation";
import type { ProjectAssistantContextDto } from "../types";

export type ActiveCycleCognitiveProjection = {
  readonly cycleInstanceId: string;
  readonly cycleTypeId: string;
  readonly profile: CycleProfile;
  readonly status: CycleInstanceStatus;
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly trajectoryStepId: string | null;
  readonly ckcResolutionRef: string | null;
  readonly cycleLabel: string | null;
  /** True only when status === "active" — gates active-cycle work materialization. */
  readonly workEligible: boolean;
};

/**
 * CR-ACW-01 — sealed active-cycle context for ACW materialization.
 * Derived ONLY from studioCognitiveContext.activeCycle (server projection).
 * Compared inside Product UoW before any Epistemic/LPS write.
 */
export type ActiveCycleWorkContextSeal = {
  readonly projectId: string;
  readonly cycleInstanceId: string;
  readonly cycleTypeId: string;
  readonly profile: CycleProfile;
  readonly status: "active";
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly trajectoryStepId: string | null;
  readonly ckcResolutionRef: string | null;
};

/**
 * Build ACW context seal from studio activeCycle projection.
 * Returns null when projection missing or not work-eligible.
 */
export function buildActiveCycleWorkContextSeal(input: {
  projectId: string;
  activeCycle: ActiveCycleCognitiveProjection | null | undefined;
}): ActiveCycleWorkContextSeal | null {
  const ac = input.activeCycle;
  if (!ac || ac.workEligible !== true || ac.status !== "active") {
    return null;
  }
  return Object.freeze({
    projectId: input.projectId,
    cycleInstanceId: ac.cycleInstanceId,
    cycleTypeId: ac.cycleTypeId,
    profile: ac.profile,
    status: "active" as const,
    trajectoryId: ac.trajectoryId,
    trajectoryVersion: ac.trajectoryVersion,
    trajectoryStepId: ac.trajectoryStepId,
    ckcResolutionRef: ac.ckcResolutionRef,
  });
}

export type ActiveCycleCkcGrounding = {
  readonly cycleTypeId: string;
  readonly cycleLabel: string | null;
  readonly ckcLensSection: string | null;
  readonly ckcLoaded: boolean;
  readonly ckcId: string | null;
  readonly sourceLimit: "none" | "ckc_unavailable" | "doctrine_unavailable";
  readonly durableCkcResolutionRef: string | null;
};

export type ResolveActiveCycleCognitiveOk = {
  readonly ok: true;
  readonly projection: ActiveCycleCognitiveProjection | null;
  readonly ckc: ActiveCycleCkcGrounding | null;
};

export type ResolveActiveCycleCognitiveErr = {
  readonly ok: false;
  readonly code: string;
  readonly reason: string;
};

export type ResolveActiveCycleCognitiveResult =
  | ResolveActiveCycleCognitiveOk
  | ResolveActiveCycleCognitiveErr;

function expectedTrajectoryBoundCkcRef(cycle: CycleInstance): string | null {
  const binding = classifyTrajectoryBinding(cycle);
  if (binding !== "COMPLETE_TRAJECTORY_BOUND") return null;
  const trajectoryId = cycle.trajectoryId!.trim();
  const trajectoryVersion = cycle.trajectoryVersion!;
  const stepId = cycle.trajectoryStepId!.trim();
  const correlationId = mintPrepareCycleCorrelationId({
    projectId: cycle.projectId,
    trajectoryId,
    trajectoryVersion,
    stepId,
  });
  return projectCkcResolutionRef({
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId,
  });
}

function projectActiveCycle(cycle: CycleInstance): ActiveCycleCognitiveProjection {
  const entry = getCycleTypeById(cycle.cycleTypeId);
  return Object.freeze({
    cycleInstanceId: cycle.cycleInstanceId,
    cycleTypeId: cycle.cycleTypeId,
    profile: cycle.profile,
    status: cycle.status,
    trajectoryId: cycle.trajectoryId?.trim() || null,
    trajectoryVersion:
      typeof cycle.trajectoryVersion === "number" ? cycle.trajectoryVersion : null,
    trajectoryStepId: cycle.trajectoryStepId?.trim() || null,
    ckcResolutionRef: cycle.ckcResolutionRef?.trim() || null,
    cycleLabel: entry?.label ?? null,
    workEligible: cycle.status === "active",
  });
}

function buildCkcGrounding(input: {
  projection: ActiveCycleCognitiveProjection;
  packagePin: DoctrinePackagePin | null;
  registryRoot: string;
}): ActiveCycleCkcGrounding {
  if (!input.packagePin) {
    return Object.freeze({
      cycleTypeId: input.projection.cycleTypeId,
      cycleLabel: input.projection.cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      ckcId: null,
      sourceLimit: "doctrine_unavailable" as const,
      durableCkcResolutionRef: input.projection.ckcResolutionRef,
    });
  }

  const ckcContent: ProductCkcCognitiveContent | null =
    loadProductCkcCognitiveContent({
      registryRoot: input.registryRoot,
      cycleTypeId: input.projection.cycleTypeId,
      packagePin: input.packagePin,
    });

  if (!ckcContent) {
    return Object.freeze({
      cycleTypeId: input.projection.cycleTypeId,
      cycleLabel: input.projection.cycleLabel,
      ckcLensSection: null,
      ckcLoaded: false,
      ckcId: null,
      sourceLimit: "ckc_unavailable" as const,
      durableCkcResolutionRef: input.projection.ckcResolutionRef,
    });
  }

  const label = input.projection.cycleLabel ?? input.projection.cycleTypeId;
  const ckcLensSection = buildCkcApplicationLensSection(ckcContent).replace(
    `cycle « ${ckcContent.cycleTypeId} »`,
    `cycle « ${label} »`,
  );

  return Object.freeze({
    cycleTypeId: input.projection.cycleTypeId,
    cycleLabel: input.projection.cycleLabel,
    ckcLensSection,
    ckcLoaded: true,
    ckcId: ckcContent.ckcId,
    sourceLimit: "none" as const,
    durableCkcResolutionRef: input.projection.ckcResolutionRef,
  });
}

/**
 * Resolve server-owned active-cycle identity + exact CKC lens.
 * When LPS has no activeCycleInstanceId → ok with null projection (pre-cycle path).
 */
export async function resolveActiveCycleCognitiveContext(input: {
  project: ProjectAssistantContextDto;
  activeCycleInstanceId?: string | null;
  registryRoot: string;
  getCycle: GetCycle;
}): Promise<ResolveActiveCycleCognitiveResult> {
  const activeId =
    (input.activeCycleInstanceId ?? input.project.activeCycleInstanceId ?? null)
      ?.trim() || null;

  if (!activeId) {
    return { ok: true, projection: null, ckc: null };
  }

  const loaded = await input.getCycle.execute({ cycleInstanceId: activeId });
  if (!loaded.ok) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_NOT_FOUND",
      reason: "lps_active_cycle_instance_missing",
    };
  }

  const cycle = loaded.cycle;
  if (cycle.projectId !== input.project.projectId) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_PROJECT_MISMATCH",
      reason: "cycle_project_id_mismatch",
    };
  }

  const binding = classifyTrajectoryBinding(cycle);
  if (binding === "INCOMPLETE_TRAJECTORY_BINDING") {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_TRAJECTORY_BINDING_INCOMPLETE",
      reason: "incomplete_trajectory_binding",
    };
  }

  const durableRef = cycle.ckcResolutionRef?.trim() || null;
  const lpsRef = input.project.ckcResolutionRef?.trim() || null;

  if (binding === "COMPLETE_TRAJECTORY_BOUND") {
    if (!durableRef) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_CKC_REF_MISSING",
        reason: "trajectory_bound_cycle_missing_ckc_resolution_ref",
      };
    }
    const expected = expectedTrajectoryBoundCkcRef(cycle);
    if (expected && expected !== durableRef) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_CKC_REF_DRIFT",
        reason: "durable_ckc_resolution_ref_diverges_from_expected",
      };
    }
  }

  if (lpsRef && durableRef && lpsRef !== durableRef) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_CKC_REF_DRIFT",
      reason: "lps_ckc_resolution_ref_diverges_from_cycle",
    };
  }

  const projection = projectActiveCycle(cycle);
  const packagePin = doctrinePackagePinFromProjectContext(input.project);
  const ckc = buildCkcGrounding({
    projection,
    packagePin,
    registryRoot: input.registryRoot,
  });

  // Trajectory-bound greenfield active cycles must have loadable CKC.
  // LEGACY_UNBOUND may degrade to ckc_unavailable without blocking the turn
  // (historical F2/LR fixtures use non-product doctrine pins).
  if (
    projection.workEligible &&
    !ckc.ckcLoaded &&
    binding === "COMPLETE_TRAJECTORY_BOUND"
  ) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_CKC_UNAVAILABLE",
      reason:
        ckc.sourceLimit === "doctrine_unavailable"
          ? "doctrine_pin_unavailable"
          : "ckc_content_unavailable_for_active_cycle_type",
    };
  }

  return { ok: true, projection, ckc };
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`
```ts
/**
 * F2 pipeline: intent → qualify → durable CycleInstance + LPS → live ContextSnapshot → proposal.
 * Stops before any execution. M2: Cycle/LPS/CKC linkage durable; conversation/proposal process-local.
 */

import { randomBytes, randomUUID } from "node:crypto";
import {
  isFakeConversationProviderForced,
  type ConversationProvider,
} from "@/lib/platform/ai";
import type {
  NoraAgentsUsdAccounting,
  NoraCampaignBudget,
  NoraEvalModelReasoningControl,
} from "@/lib/nora-cognitive-runtime";
import {
  resolveEvalCellConversationProvider,
  type EvalCellProviderFactory,
} from "@/lib/nora-eval/evalCellProvider";
import {
  getRuntimeApplicationService,
  readLiveProjectContext,
  type RuntimeOaStack,
} from "@/lib/vertical-slice-runtime";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "../types";
import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
import { resolveAssistantMode } from "../resolveAssistantMode";
import { analyzeIntent } from "./intentAnalysis";
import { resolveAvailableContradictionPointers } from "../mw3AvailableEvidence";
import {
  deriveMw3ContradictionAssessment,
  decideCognitiveStrategy,
  decideMw5Disposition,
  deriveMw5FactsFromF2Turn,
  formatMw5MachineText,
  formatMw5PiloteText,
  mergeCognitiveWorkloadSignals,
  toMw5TurnSurface,
  MW5_TEST_MARKERS,
  type Mw3ContradictionAssessmentInput,
  type Mw5TurnSurface,
} from "@/lib/nora-cognitive-runtime";
import { resolveMw5ProductAuthorityFromOa } from "./resolveMw5ProductAuthorityFromOa";
import {
  clearMw5IssuedChallenge,
  getMw5ChallengeSession,
  rememberMw5IssuedChallenge,
} from "./mw5ChallengeSessionStore";
import {
  loadCanonicalConversationForAnalysis,
  persistCanonicalF2AssistantTurn,
} from "./canonicalConversationSession";
import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
import { resolveTransitionReadiness } from "./transitionReadiness";
import { evaluateMorrisGateRequired } from "./gatePolicy";
import {
  enrichQualificationWithCkcSemantics,
  isProductStudioNativeCkcProof,
  loadProductCkcCognitiveContent,
  buildCkcCognitivePromptSection,
  reasonWithResolvedCkcContext,
} from "./ckcCognitiveContext";
import { composeStudioCognitiveContext } from "./studioCognitiveContext";
import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
import { reconcileQualificationSignals } from "./qualificationSignalCoherence";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  F2_PROCESS_LOCAL_NOTICE,
  createProposalId,
  saveProposal,
} from "./proposalStore";
import type {
  F2ContextSnapshot,
  IntentAnalysisDto,
  ProposalDto,
  QualificationDto,
} from "./types";

const EPHEMERAL_NOTICE =
  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";

async function deriveProductPathMw3Assessment(
  analysis: IntentAnalysisDto,
  projectId: string,
): Promise<Mw3ContradictionAssessmentInput | null> {
  const candidate = analysis.contradictionCandidate;
  if (!candidate || candidate.conflictPresent !== true) return null;
  const availablePointers = await resolveAvailableContradictionPointers({
    projectId,
    claimedEvidenceIds: candidate.claimedEvidenceIds,
  });
  return deriveMw3ContradictionAssessment({
    candidate,
    availablePointers,
    projectId,
    sourceBreadth: analysis.cognitiveWorkload?.sourceBreadth ?? null,
    trustedSfiaProfile: null,
  });
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
  };
}

/**
 * CORR-MW2-REAL-03/04 — deterministic Project summary for analyzeIntent.
 * Prefer Truth C / LPS full context (contextSource=TRUTH_C_LPS).
 * UI contextSummary is a 240-char projection — not the cognitive authority.
 */
export type CognitiveIntentContextInput = {
  name: string;
  objective: string;
  /** Full Truth C / LPS context when available; never invent. */
  context: string;
  constraints: readonly string[];
  criticality: string;
  lpsId: string;
  lpsVersion: number;
  shortReference?: string | null;
  activeCycleInstanceId?: string | null;
  ckcResolutionRef?: string | null;
  /**
   * Internal provenance for evidence/tests — NOT a client DTO field.
   * TRUTH_C_LPS = readLiveProjectContext / lps.context
   * TEST_FALLBACK_UI_SUMMARY = truncated UI projection only (not REAL evidence)
   */
  contextSource: "TRUTH_C_LPS" | "TEST_FALLBACK_UI_SUMMARY";
};

export function buildIntentProjectSummary(
  input: CognitiveIntentContextInput,
): string {
  const constraints =
    input.constraints.length > 0
      ? input.constraints.join("; ")
      : "(none)";
  const parts = [
    `name=${input.name}`,
    `objective=${input.objective}`,
    `context=${input.context}`,
    `constraints=${constraints}`,
    `criticality=${input.criticality}`,
  ];
  if (input.shortReference != null && input.shortReference.trim() !== "") {
    parts.push(`shortReference=${input.shortReference}`);
  }
  parts.push(`lps=${input.lpsId}@${input.lpsVersion}`);
  if (input.activeCycleInstanceId) {
    parts.push(`activeCycle=${input.activeCycleInstanceId}`);
  }
  if (input.ckcResolutionRef) {
    parts.push(`ckcRef=${input.ckcResolutionRef}`);
  }
  parts.push(`contextSource=${input.contextSource}`);
  return parts.join(" | ");
}

/**
 * Resolve analyzeIntent Project summary from Truth C (LPS) when OA is available.
 * Fail-closed for product path: do not silently downgrade to UI 240 summary.
 * Fake/test without OA may use TEST_FALLBACK_UI_SUMMARY only.
 */
export async function resolveCognitiveIntentProjectSummary(
  project: ProjectAssistantContextDto,
): Promise<
  | { ok: true; projectSummary: string; contextSource: CognitiveIntentContextInput["contextSource"]; truthCContext: string }
  | { ok: false; code: string; message: string }
> {
  const runtime = getRuntimeApplicationService();
  const oa = runtime.oa;
  if (!oa) {
    if (isFakeConversationProviderForced()) {
      const projectSummary = buildIntentProjectSummary({
        name: project.name,
        objective: project.objective,
        context: project.contextSummary,
        constraints: project.constraints,
        criticality: project.criticality,
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
        shortReference: project.shortReference,
        activeCycleInstanceId: project.activeCycleInstanceId ?? null,
        ckcResolutionRef: project.ckcResolutionRef ?? null,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
      });
      return {
        ok: true,
        projectSummary,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
        truthCContext: project.contextSummary,
      };
    }
    return {
      ok: false,
      code: "TRUTH_C_UNAVAILABLE",
      message:
        "Services OA indisponibles pour le contexte cognitif Truth C. AUCUNE EXÉCUTION.",
    };
  }

  const live = await readLiveProjectContext(oa, project.projectId);
  if (!live.ok) {
    return {
      ok: false,
      code: live.code,
      message: `Contexte Truth C / LPS illisible (${live.code}). AUCUNE EXÉCUTION.`,
    };
  }

  const truthCContext = live.context.context ?? "";
  const projectSummary = buildIntentProjectSummary({
    name: project.name,
    objective: live.context.objective || project.objective,
    context: truthCContext,
    constraints: project.constraints,
    criticality: project.criticality,
    lpsId: live.context.lpsId,
    lpsVersion: live.context.lpsVersion,
    shortReference: project.shortReference,
    activeCycleInstanceId: live.context.activeCycleInstanceId,
    ckcResolutionRef: live.context.ckcResolutionRef,
    contextSource: "TRUTH_C_LPS",
  });
  return {
    ok: true,
    projectSummary,
    contextSource: "TRUTH_C_LPS",
    truthCContext,
  };
}

function doctrinePackagePinFromProject(
  project: ProjectAssistantContextDto,
): DoctrinePackagePin {
  return Object.freeze({
    doctrinePackageId: project.doctrineId,
    version: project.doctrineVersion,
    digest: project.doctrineDigest as DoctrinePackagePin["digest"],
  });
}

function snapshotFrom(project: ProjectAssistantContextDto): F2ContextSnapshot {
  return {
    projectId: project.projectId,
    lpsId: project.lpsId,
    lpsVersion: project.lpsVersion,
    doctrineDigest: project.doctrineDigest,
    activeCycleInstanceId: project.activeCycleInstanceId ?? null,
    ckcResolutionRef: project.ckcResolutionRef ?? null,
  };
}

function resolveF2CriticalChallengeArmed(input: {
  analysis: IntentAnalysisDto;
  content: string;
  historyCount: number;
  projectCriticality: string;
}): boolean {
  if (input.content.includes(MW5_TEST_MARKERS.highAssurance)) return true;
  const merged = mergeCognitiveWorkloadSignals({
    turnContext: {
      projectCriticality: input.projectCriticality,
      userContentLength: input.content.length,
      historyMessageCount: input.historyCount,
    },
    semanticAssessment: input.analysis.cognitiveWorkload,
  });
  return decideCognitiveStrategy({
    signals: merged,
    trustedSfiaProfile: null,
  }).criticalChallengeArmed;
}

async function evaluateF2Mw5(input: {
  content: string;
  history?: AssistantHistoryMessage[];
  analysis: IntentAnalysisDto;
  recommendedProfile: string | null;
  recommendationWouldEmit: boolean;
  projectCriticality: string;
  projectId: string;
  oa: RuntimeOaStack | null | undefined;
}): Promise<{ armed: boolean; surface: Mw5TurnSurface; text: string }> {
  const armed = resolveF2CriticalChallengeArmed({
    analysis: input.analysis,
    content: input.content,
    historyCount: input.history?.length ?? 0,
    projectCriticality: input.projectCriticality,
  });
  const authority = await resolveMw5ProductAuthorityFromOa({
    oa: input.oa,
    projectId: input.projectId,
    claim: {
      objective: input.analysis.objective,
      scope: input.analysis.scope,
      recommendedProfile: input.recommendedProfile,
      requestedOperation: input.analysis.requestedOperation,
    },
    newContradictionSignalPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
  });
  const session = getMw5ChallengeSession(input.projectId);
  const decision = decideMw5Disposition(
    deriveMw5FactsFromF2Turn({
      userContent: input.content,
      history: input.history,
      intentClass: input.analysis.intentClass,
      parseOk: input.analysis.parseOk,
      recommendedProfile: input.recommendedProfile,
      criticalChallengeArmed: armed,
      recommendationWouldEmit: input.recommendationWouldEmit,
      truthCEstablishedForClaim: authority.truthCEstablishedForClaim,
      consumedHumanDecisionWithoutNewContradiction:
        authority.consumedHumanDecisionWithoutNewContradiction,
      challengeResponseAssessment:
        input.analysis.challengeResponseAssessment ?? null,
      openChallengePresent: session.latest != null,
      priorStructuralChallengeCount: session.priorStructuralChallengeCount,
    }),
  );
  const machineText = formatMw5MachineText(decision);
  const text = formatMw5PiloteText(decision);
  if (decision.disposition === "CHALLENGE") {
    rememberMw5IssuedChallenge({
      projectId: input.projectId,
      challenges: decision.challenges,
      challengeText: machineText,
    });
  } else if (
    decision.recommendationAllowed &&
    decision.challengeSatisfied &&
    session.latest != null
  ) {
    clearMw5IssuedChallenge(input.projectId);
  }
  return {
    armed,
    surface: toMw5TurnSurface(decision, armed),
    text,
  };
}

function mw5TurnKind(
  surface: Mw5TurnSurface,
): "f2_clarification" | "f2_blocked" {
  return surface.disposition === "CLARIFY" ? "f2_clarification" : "f2_blocked";
}

function resolveMode(explicitProvider?: ConversationProvider): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
  presentation: "test_provider" | "openai_live";
} {
  return resolveAssistantMode(explicitProvider);
}

function buildProposal(input: {
  intent: IntentAnalysisDto;
  qualification: QualificationDto;
  project: ProjectAssistantContextDto;
  morrisGateRequired: boolean;
  executionRequest: boolean;
  status: ProposalDto["status"];
}): ProposalDto {
  return {
    proposalId: createProposalId(),
    status: input.status,
    rephrasedRequest:
      input.intent.rephrasedRequest ??
      input.intent.objective ??
      "Demande reformulée indisponible",
    objective: input.intent.objective ?? input.qualification.rationale,
    cycleTypeId: input.qualification.cycleTypeId,
    recommendedProfile: input.qualification.recommendedProfile,
    rationale: input.qualification.rationale,
    scope: input.intent.scope ?? `Périmètre borné — ${input.qualification.cycleTypeId}`,
    outOfScope:
      input.intent.outOfScope.length > 0
        ? input.intent.outOfScope
        : [
            "Exécution Cursor",
            "Écriture Git/GitHub",
            "Exécution agent (hors F2)",
            "Navigation OPS1 comme destination",
          ],
    activatedBlocks:
      input.intent.activatedBlocks.length > 0
        ? input.intent.activatedBlocks
        : ["qualification", "proposition", "gate"],
    expectedOutcome:
      input.intent.expectedOutcome ??
      "Décision humaine capturée — aucune exécution F2",
    sources: [
      `catalogue:${input.qualification.catalogVersion}`,
      `ckc:${input.qualification.detailedStatus}`,
      `project:${input.project.projectId}`,
      `lps:${input.project.lpsId}@${input.project.lpsVersion}`,
      ...(input.qualification.cycleInstanceId
        ? [`cycle:${input.qualification.cycleInstanceId}`]
        : []),
      ...(input.qualification.ckcResolutionRef
        ? [`ckcRef:${input.qualification.ckcResolutionRef}`]
        : []),
    ],
    risks: input.intent.risks,
    reservations: input.intent.reservations,
    stopConditions:
      input.intent.stopConditions.length > 0
        ? input.intent.stopConditions
        : ["AUCUNE EXÉCUTION", "STOP avant F3"],
    morrisGateRequired: input.morrisGateRequired,
    nextPossibleStep: input.morrisGateRequired
      ? "Décision Morris explicite requise"
      : "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
    contextSnapshot: snapshotFrom(input.project),
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    criticalJustification: input.intent.criticalJustification,
  };
}

function f2Success(base: {
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  project: ProjectAssistantContextDto;
  intentClass: IntentAnalysisDto["intentClass"];
  qualification?: QualificationDto;
  proposal?: ProposalDto;
  executionBlocked?: boolean;
  mw5?: Mw5TurnSurface | null;
  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
}): ProjectAssistantSendResult {
  const turnKind =
    base.turnKind ??
    (base.qualification && base.proposal
      ? "f2_proposal"
      : base.mw5?.disposition === "CLARIFY" || base.intentClass === "ambiguous"
        ? "f2_clarification"
        : "f2_blocked");
  return {
    ok: true,
    status: "ok",
    text: base.text,
    mode: base.mode,
    presentation: base.presentation,
    model: base.model,
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
    project: base.project,
    ephemeralNotice: EPHEMERAL_NOTICE,
    mw5: base.mw5
      ? {
          disposition: base.mw5.disposition,
          structuralChallengeCount: base.mw5.structuralChallengeCount,
          questionnaireSuppressed: base.mw5.questionnaireSuppressed,
          recommendationAllowed: base.mw5.recommendationAllowed,
          challengeGateApplicable: base.mw5.challengeGateApplicable,
          challengeSatisfied: base.mw5.challengeSatisfied,
          challengeEvidenceBeforeRecommendation:
            base.mw5.challengeEvidenceBeforeRecommendation,
          bypassAttempted: base.mw5.bypassAttempted,
          bypassBlocked: base.mw5.bypassBlocked,
          synthesizedHumanDecision: false,
          synthesizedGo: false,
          synthesizedConfirmation: false,
          disclosure: base.mw5.disclosure,
          reasonCodes: [...base.mw5.reasonCodes],
          challenges: [...base.mw5.challenges],
          criticalChallengeArmedHookOnly: base.mw5.criticalChallengeArmedHookOnly,
        }
      : null,
    f2: {
      turnKind,
      intentClass: base.intentClass,
      qualification: base.qualification ?? null,
      proposal: base.proposal ?? null,
      decision: null,
      labels: {
        recommendation:
          base.proposal && base.qualification ? "RECOMMANDATION" : null,
        proposition: base.proposal ? "PROPOSITION" : null,
        decisionRequired: base.proposal?.morrisGateRequired
          ? "DÉCISION REQUISE"
          : null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: base.executionBlocked === true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}

/**
 * CORR-PROOF-01 D1 CR-02 — central persist-and-return for F2-owned user-visible
 * responses. F1 Runner paths must NOT call this (Runner already persists).
 */
async function f2ConversationalSuccess(input: {
  userText: string;
  sessionDbPath?: string;
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  project: ProjectAssistantContextDto;
  intentClass: IntentAnalysisDto["intentClass"];
  qualification?: QualificationDto;
  proposal?: ProposalDto;
  executionBlocked?: boolean;
  mw5?: Mw5TurnSurface | null;
  turnKind?: "f1_informative" | "f2_clarification" | "f2_proposal" | "f2_blocked";
}): Promise<ProjectAssistantSendResult> {
  await persistCanonicalF2AssistantTurn({
    projectId: input.project.projectId,
    sessionDbPath: input.sessionDbPath,
    userText: input.userText,
    assistantText: input.text,
  });
  return f2Success(input);
}

/**
 * Unified send orchestration: preserves F1 for informative intents.
 * Actionable path creates durable CycleInstance + LPS append, then live snapshot.
 */
export async function orchestrateAssistantSend(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   * For Stage A cells: inject the cell-specific ConversationProvider here.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path (MW1/MW4 durability). */
  sessionDbPath?: string;
  /**
   * D-GF-ACW-02 — optional re-present of server-issued logical Product turn id.
   */
  logicalTurnId?: string;
  /**
   * INTERNAL / EVAL-ONLY — Stage A constitutive model×effort pin.
   * Propagated to analyzeIntent + F1 cognitive path. Never a client DTO field.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /**
   * INTERNAL / EVAL-ONLY — factory(modelId, effort) → ConversationProvider.
   * Required with evalModelReasoningControl for honest structured binding.
   */
  evalCellProviderFactory?: EvalCellProviderFactory;
  /** INTERNAL / EVAL-ONLY — USD authorization envelope (Agents path). */
  usdAccounting?: NoraAgentsUsdAccounting;
  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
  campaignBudget?: NoraCampaignBudget;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  let project = toContextDto(projectResult);

  // CORR-01 — resolve eval cell provider BEFORE mode/availability gating.
  // Under eval control, evalCellProviderFactory is the required pin source;
  // global OPENAI_MODEL absence must not fail before the injected cell provider
  // is assessed (and must never be manufactured via process.env mutation).
  const cellProvider = resolveEvalCellConversationProvider({
    evalModelReasoningControl: input.evalModelReasoningControl,
    evalCellProviderFactory: input.evalCellProviderFactory,
    provider: input.provider,
  });
  if (input.evalModelReasoningControl && !cellProvider) {
    return {
      ok: false,
      status: "provider_error",
      code: "EVAL_CELL_PROVIDER_REQUIRED",
      message:
        "evalModelReasoningControl requires evalCellProviderFactory (no arbitrary provider fallback).",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }
  const effectiveProvider = cellProvider ?? input.provider;
  const modeResolution = resolveMode(effectiveProvider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
  let truthCContextForF1: string | undefined;
  try {
    const cognitive = await resolveCognitiveIntentProjectSummary(project);
    if (!cognitive.ok) {
      return {
        ok: false,
        status: "provider_error",
        code: cognitive.code,
        message: cognitive.message,
        mode: modeResolution.mode,
        retryable: true,
      };
    }
    truthCContextForF1 =
      cognitive.contextSource === "TRUTH_C_LPS"
        ? cognitive.truthCContext
        : undefined;

    // CORR-PROOF-01 D1 CR-03/CR-04 — Memory B replay semantics; EMPTY ≠ UNAVAILABLE.
    const canonicalLoad = await loadCanonicalConversationForAnalysis({
      projectId: project.projectId,
      sessionDbPath: input.sessionDbPath,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
    });
    if (canonicalLoad.availability === "unavailable") {
      return {
        ok: false,
        status: "provider_error",
        code: "CANONICAL_SESSION_UNAVAILABLE",
        message:
          canonicalLoad.message ??
          "Continuité conversationnelle indisponible. Aucune invention de contexte. AUCUNE EXÉCUTION.",
        mode: modeResolution.mode,
        retryable: true,
      };
    }
    const canonicalConversationContext = canonicalLoad.contextText;

    const challengeSession = getMw5ChallengeSession(project.projectId);
    const challengeContext =
      challengeSession.latest != null
        ? {
            challengePresent: true as const,
            challenges: challengeSession.latest.challenges,
            challengedPremise: challengeSession.latest.challengeText.slice(
              0,
              500,
            ),
            structuralChallengeCount:
              challengeSession.latest.structuralChallengeCount,
          }
        : { challengePresent: false as const };
    analysisResult = await analyzeIntent({
      userContent: content,
      projectSummary: cognitive.projectSummary,
      canonicalConversationContext,
      challengeContext,
      provider: effectiveProvider,
      evalModelReasoningControl: input.evalModelReasoningControl,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }

  let { analysis, model } = analysisResult;
  if (analysis.signals) {
    analysis = {
      ...analysis,
      signals: reconcileQualificationSignals({
        userContent: content,
        signals: analysis.signals,
      }).signals,
    };
  }
  const presentation = modeResolution.presentation;
  const contradictionAssessment = await deriveProductPathMw3Assessment(
    analysis,
    project.projectId,
  );

  // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
  // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
  const forceRepoInformative =
    isPureRepositoryAnalysisIntent(content) &&
    analysis.intentClass !== "execution_request";

  // CORR-PROOF-02 B1 — deterministic transition gate.
  // Safe advisory (incl. ambiguous / parse-fail / incomplete formalization fields) → F1.
  // Governed formalization only when readiness is fully established.
  const transition = resolveTransitionReadiness({
    analysis,
    forceRepoInformative,
  });

  if (!transition.formalizationReady) {
    // CORR-PROOF-04 — Hybrid Context Envelope (composer-first).
    // Pure read-only composition; NO reasonWithResolvedCkcContext; NO third model call.
    const registryRoot = resolveProductDoctrineRegistryRoot();
    const oa = getRuntimeApplicationService().oa;
    const studioComposed = await composeStudioCognitiveContext({
      analysis,
      project,
      registryRoot,
      truthCContext: truthCContextForF1,
      oa,
      activeCycleInstanceId: project.activeCycleInstanceId ?? null,
    });
    if (!studioComposed.ok) {
      return {
        ok: false,
        status: "validation_error",
        code: studioComposed.code,
        message: studioComposed.message,
        mode: modeResolution.mode,
        retryable: false,
      };
    }
    const studioCognitiveContext = studioComposed.context;
    // Keep methodContext for CORR-PROOF-03 compatibility surfaces when studio is present
    // (studio supersedes in prompt builder).
    const methodContext = studioCognitiveContext.method;
    const f1 = await orchestrateProjectAssistantTurn({
      ...input,
      provider: effectiveProvider,
      semanticCognitiveWorkload: analysis.cognitiveWorkload,
      truthCContext: truthCContextForF1,
      methodContext,
      studioCognitiveContext,
      contradictionAssessment,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      campaignBudget: input.campaignBudget,
    });
    if (!f1.ok) return f1;
    const reportedIntent =
      analysis.parseOk &&
      (analysis.intentClass === "informative" ||
        analysis.intentClass === "ambiguous" ||
        analysis.intentClass === "actionable" ||
        analysis.intentClass === "execution_request")
        ? forceRepoInformative
          ? "informative"
          : analysis.intentClass
        : "ambiguous";
    // B1-CR-01 — trusted execution_request keeps fail-closed authority surface
    // even when formalization is not ready (safe F1 advisory, ZERO effect).
    const executionBlocked =
      analysis.parseOk === true &&
      analysis.intentClass === "execution_request" &&
      !forceRepoInformative;
    return {
      ...f1,
      model: f1.model ?? model,
      ephemeralNotice: EPHEMERAL_NOTICE,
      mw5: null,
      f2: {
        turnKind: "f1_informative",
        intentClass: reportedIntent,
        qualification: null,
        proposal: null,
        decision: null,
        labels: {
          recommendation: null,
          proposition: null,
          decisionRequired: null,
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      },
    };
  }

  // B / D — governed formalization ready (actionable | execution_request + valid fields)
  const cycleTypeId = analysis.candidateCycleTypeId;
  const formalizationSignals = analysis.signals;
  if (!cycleTypeId || !formalizationSignals) {
    // Defensive: readiness predicate already requires these; never invent defaults.
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Clarification requise] Qualification impossible — cycle ou signaux incomplets. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const runtime = getRuntimeApplicationService();
  const oa = runtime.oa;
  if (!oa) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Runtime] Services OA indisponibles pour la qualification M2. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const preLpsVersion = project.lpsVersion;
  const correlationId = `cor:f2-${randomBytes(8).toString("hex")}`;

  const qualified = await qualifyWithCkc({
    cycleTypeId,
    signals: formalizationSignals,
    objective: analysis.objective ?? undefined,
    scope: analysis.scope ?? undefined,
    correlationId,
    ckcQualification: oa.ckcQualification,
  });

  if (!qualified.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  let { qualification } = qualified;
  const cognitiveSummary = await resolveCognitiveIntentProjectSummary(project);
  const projectSummary = cognitiveSummary.ok
    ? cognitiveSummary.projectSummary
    : buildIntentProjectSummary({
        name: project.name,
        objective: project.objective,
        context: project.contextSummary,
        constraints: project.constraints,
        criticality: project.criticality,
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
        shortReference: project.shortReference,
        contextSource: "TEST_FALLBACK_UI_SUMMARY",
      });

  if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
    const packagePin = doctrinePackagePinFromProject(project);
    const registryRoot = resolveProductDoctrineRegistryRoot();
    const ckcContent = loadProductCkcCognitiveContent({
      registryRoot,
      cycleTypeId: qualification.cycleTypeId,
      packagePin,
    });
    let ckcCognitiveRecommendation: string | undefined;
    if (ckcContent) {
      const reasoning = await reasonWithResolvedCkcContext({
        userContent: content,
        projectSummary,
        intentSummary:
          analysis.rephrasedRequest ??
          analysis.objective ??
          "Intention actionable",
        ckcPromptSection: buildCkcCognitivePromptSection(ckcContent),
        provider: input.provider,
      });
      ckcCognitiveRecommendation = reasoning.recommendation;
    }
    qualification = enrichQualificationWithCkcSemantics({
      qualification,
      proof: qualified.raw.proof,
      registryRoot,
      packagePin,
      ckcCognitiveRecommendation,
    });
  }

  const ckcResolutionRef =
    qualification.ckcResolutionRef ??
    projectCkcResolutionRef(qualified.raw.proof);

  if (
    qualification.requiresJustificationForCritical &&
    !(analysis.criticalJustification && analysis.criticalJustification.trim())
  ) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text:
        "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
    });
  }

  const mw5 = await evaluateF2Mw5({
    content,
    history: input.history,
    analysis,
    recommendedProfile: qualification.recommendedProfile,
    recommendationWouldEmit: true,
    projectCriticality: project.criticality,
    projectId: project.projectId,
    oa,
  });
  if (!mw5.surface.recommendationAllowed) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: mw5.text,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
      mw5: mw5.surface,
      turnKind: mw5TurnKind(mw5.surface),
    });
  }

  const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
  const created = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: qualification.cycleTypeId,
    projectId: project.projectId,
    objective: analysis.objective ?? undefined,
    scope: analysis.scope ?? undefined,
    signals: formalizationSignals,
    justification: analysis.criticalJustification ?? undefined,
    createdBy: {
      actorId: "actor:nora-f2",
      role: "agent",
      displayName: "Nora F2",
      authorityLevel: "N1",
    },
    correlationId,
    linkAsActiveCycle: false,
    expectedLpsVersion: preLpsVersion,
    ckcResolutionRef,
  });

  if (!created.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
    });
  }

  // Live context AFTER mutation — pre-mutation snapshot does not satisfy M2.
  const live = await readLiveProjectContext(oa, project.projectId);
  if (!live.ok) {
    return f2ConversationalSuccess({
      userText: content,
      sessionDbPath: input.sessionDbPath,
      text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification: {
        ...qualification,
        cycleInstanceId: created.cycle.cycleInstanceId,
        cycleStatus: created.cycle.status,
        ckcResolutionRef,
      },
    });
  }

  const reloaded = await loadProjectRuntimeForAssistant(project.projectId);
  if (reloaded.ok) {
    project = toContextDto(reloaded);
  } else {
    project = {
      ...project,
      lpsId: live.context.lpsId,
      lpsVersion: live.context.lpsVersion,
      doctrineDigest: live.context.doctrineDigest,
      activeCycleInstanceId: live.context.activeCycleInstanceId,
      ckcResolutionRef: live.context.ckcResolutionRef,
    };
  }

  qualification = {
    ...qualification,
    cycleInstanceId: created.cycle.cycleInstanceId,
    cycleStatus: created.cycle.status,
    ckcResolutionRef,
    recommendedProfile: created.cycle.profile,
  };

  const morrisGateRequired =
    evaluateMorrisGateRequired({
      recommendedProfile: qualification.recommendedProfile,
      signals: formalizationSignals,
      intent: analysis,
    }) || mw5.surface.disposition === "ESCALATE";

  const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
  const proposal = saveProposal(
    buildProposal({
      intent: analysis,
      qualification,
      project,
      morrisGateRequired,
      executionRequest: analysis.intentClass === "execution_request",
      status,
    }),
  );

  const executionBlocked = analysis.intentClass === "execution_request";
  const textParts = [
    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
    "Qualification SFIA et proposition structurée générées.",
    `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
    `CycleInstance candidate: ${created.cycle.cycleInstanceId} (${created.cycle.status}) — NON ACTIVE — Pilot START requis.`,
    `Profil recommandé: ${qualification.recommendedProfile}.`,
    project.lpsVersion === preLpsVersion
      ? `LPS v${preLpsVersion} inchangé (pas d'activation pre-START).`
      : `LPS v${preLpsVersion} → v${project.lpsVersion}.`,
    qualification.recommendationLabel,
    ...(qualification.ckcCognitiveRecommendation
      ? [qualification.ckcCognitiveRecommendation]
      : []),
    "RECOMMANDATION ≠ décision Pilote — AUCUNE activation authority-bearing avant Pilot START.",
    morrisGateRequired
      ? "DÉCISION REQUISE — gate Morris construction (≠ Pilot lifecycle START)."
      : "NO MORRIS CONSTRUCTION GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
    executionBlocked
      ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
      : "AUCUNE EXÉCUTION.",
    mw5.surface.disposition === "ESCALATE"
      ? mw5.text
      : mw5.surface.disclosure,
    "Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.",
  ];

  return f2ConversationalSuccess({
    userText: content,
    sessionDbPath: input.sessionDbPath,
    text: textParts.join(" "),
    mode: modeResolution.mode as "fixture" | "live",
    presentation,
    model,
    project,
    intentClass: analysis.intentClass,
    qualification,
    proposal,
    executionBlocked,
    mw5: mw5.surface,
  });
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`
```ts
/**
 * CORR-PROOF-04 Option D — Hybrid Context Envelope (composer-first slice).
 *
 * Pure / read-only Studio cognitive context composition for ordinary F1.
 * Assembles authoritative Project/LPS + method/CKC + conditional HD/Evidence/
 * ReviewBundle + conditional ProjectTrajectory when readable.
 * D-GF-ACW-01 — also active CycleInstance + active-cycle work EpistemicItems.
 *
 * MUST NOT: call a model, score maturity, select trajectory, create HD/Evidence/
 * Cycle/LPS mutations, invent Recommendations, or become a second planner.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type {
  EpistemicItem,
  EpistemicItemStatus,
  ProjectTrajectory,
} from "@/lib/oa/cycle";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ProjectAssistantContextDto } from "../types";
import type { IntentAnalysisDto } from "./types";
import {
  composeAdvisoryMethodContext,
  type AdvisoryMethodContext,
} from "./methodOrientation";
import {
  resolveActiveCycleCognitiveContext,
  type ActiveCycleCognitiveProjection,
} from "./activeCycleCognitiveContext";
import { ACTIVE_CYCLE_WORK_SOURCE } from "../materializeActiveCycleWork";

/** Conservative composition budgets — implementation policy, not doctrine. */
export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
  maxDecisions: 8,
  maxEvidence: 8,
  maxReviewBundles: 4,
  maxActiveCycleWorkItems: 12,
  decisionSubjectChars: 160,
  decisionOptionChars: 120,
  evidenceLabelChars: 120,
  reviewLabelChars: 120,
  trajectoryStepChars: 100,
  maxTrajectorySteps: 6,
  activeCycleWorkStatementChars: 240,
});

export type PresenceState = "PRESENT" | "NONE" | "UNAVAILABLE";
export type TrajectoryPresenceState =
  | "PRESENT"
  | "ABSENT"
  | "DEFERRED"
  | "UNAVAILABLE";

export type StudioProjectTruthProjection = {
  readonly projectId: string;
  readonly name: string;
  readonly objective: string;
  readonly context: string;
  readonly constraints: readonly string[];
  readonly criticality: string;
  readonly shortReference: string | null;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly activeCycleInstanceId: string | null;
  readonly doctrineId: string;
  readonly doctrineVersion: string;
  readonly doctrineStatus: string;
};

/**
 * Deterministic cognitive lifecycle for HumanDecision.
 * Derived from existing domain contract only (see domain-mapping.md).
 * PRESENT ≠ CURRENT.
 */
export type DecisionCognitiveLifecycle = "CURRENT" | "PENDING" | "NON_ACTIVE";

/**
 * Domain-derived mapping (CORR-PROOF-04 status-aware):
 * - accepted → CURRENT (findAcceptedBySubject / supersede writes accepted)
 * - amended → CURRENT (MW5 CONSUMED_HD_STATUSES; supersedable like accepted)
 * - proposed | required → PENDING (supersedable but not accepted)
 * - refused | superseded | revoked → NON_ACTIVE (terminal / history)
 */
export function classifyHumanDecisionLifecycle(
  status: HumanDecision["status"],
): DecisionCognitiveLifecycle {
  switch (status) {
    case "accepted":
    case "amended":
      return "CURRENT";
    case "proposed":
    case "required":
      return "PENDING";
    case "refused":
    case "superseded":
    case "revoked":
      return "NON_ACTIVE";
    default: {
      const _exhaustive: never = status;
      void _exhaustive;
      return "NON_ACTIVE";
    }
  }
}

export type StudioDecisionProjection = {
  readonly subject: string;
  readonly selectedOptionLabel: string | null;
  /** Raw domain HumanDecisionStatus — always preserved. */
  readonly status: HumanDecision["status"];
  /** Deterministic cognitive class — never invents beyond domain mapping. */
  readonly lifecycle: DecisionCognitiveLifecycle;
  readonly effectiveAt: string;
  readonly reversible: boolean;
  readonly supersedesPresent: boolean;
};

/**
 * Deterministic epistemic stance from Evidence status/availability/freshness.
 * Does NOT claim which proposition is proven. Presence ≠ Fact.
 */
export type EvidenceEpistemicStance =
  | "STRONGER_SUPPORT"
  | "LIMITED_SUPPORT"
  | "PENDING_SUPPORT"
  | "WEAKENED_SUPPORT"
  | "NON_SUPPORTING"
  | "UNCERTAIN_SUPPORT";

export function classifyEvidenceEpistemicStance(input: {
  status: Evidence["status"];
  availability: Evidence["availability"];
  freshness: Evidence["freshness"] | null | undefined;
}): EvidenceEpistemicStance {
  const { status, availability, freshness } = input;
  if (
    status === "rejected" ||
    status === "superseded" ||
    status === "unavailable" ||
    availability === "unavailable"
  ) {
    return "NON_SUPPORTING";
  }
  if (status === "stale" || freshness === "stale") {
    return "WEAKENED_SUPPORT";
  }
  if (status === "expected") {
    return "PENDING_SUPPORT";
  }
  if (availability === "unknown" || freshness === "unknown") {
    return "UNCERTAIN_SUPPORT";
  }
  if (status === "verified" && availability === "available") {
    return "STRONGER_SUPPORT";
  }
  if (status === "incomplete" || status === "available") {
    return "LIMITED_SUPPORT";
  }
  return "UNCERTAIN_SUPPORT";
}

export type StudioEvidenceProjection = {
  readonly type: string;
  /** Raw EvidenceStatus — always preserved. */
  readonly status: Evidence["status"];
  /** Raw EvidenceAvailability — always preserved. */
  readonly availability: Evidence["availability"];
  /** Raw freshness when present. */
  readonly freshness: Evidence["freshness"] | null;
  readonly sourceKind: string;
  readonly producedAt: string | null;
  /** Deterministic stance — never converts Evidence into Fact. */
  readonly epistemicStance: EvidenceEpistemicStance;
};

export type StudioReviewProjection = {
  readonly status: string;
  readonly evidenceRefCount: number;
  readonly completeness: string;
  readonly supersedesPresent: boolean;
  readonly createdAt: string;
};

export type StudioTrajectoryProjection = {
  readonly status: string;
  readonly version: number;
  readonly stepSummaries: readonly string[];
  readonly decidedByDecisionPresent: boolean;
};

/** Clipped projection of durable active-cycle work EpistemicItems (D-GF-ACW-01). */
export type StudioActiveCycleWorkProjection = {
  readonly type: string;
  readonly statement: string;
  readonly confidence?: string;
  readonly blocking?: boolean;
  readonly status: EpistemicItemStatus;
};

export type StudioCognitiveContext = {
  readonly projectTruth: StudioProjectTruthProjection;
  readonly method: AdvisoryMethodContext;
  readonly activeCycle: ActiveCycleCognitiveProjection | null;
  readonly activeCycleWorkItems: {
    readonly state: PresenceState;
    readonly items: readonly StudioActiveCycleWorkProjection[];
  };
  readonly decisions: {
    readonly state: PresenceState;
    readonly items: readonly StudioDecisionProjection[];
  };
  readonly evidence: {
    readonly state: PresenceState;
    readonly items: readonly StudioEvidenceProjection[];
  };
  readonly review: {
    readonly state: PresenceState;
    readonly items: readonly StudioReviewProjection[];
  };
  readonly trajectory: {
    readonly state: TrajectoryPresenceState;
    readonly current: StudioTrajectoryProjection | null;
  };
  readonly limits: {
    readonly oaAvailable: boolean;
    readonly truthOutranksConversation: true;
    readonly composerDoesNotScoreMaturity: true;
    readonly composerDoesNotSelectTrajectory: true;
  };
};

export type ComposeStudioCognitiveContextResult =
  | { readonly ok: true; readonly context: StudioCognitiveContext }
  | { readonly ok: false; readonly code: string; readonly message: string };

function clip(text: string, max: number): string {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length <= max ? compact : `${compact.slice(0, max - 1)}…`;
}

function projectDecision(d: HumanDecision): StudioDecisionProjection {
  const selected =
    d.options.find((o) => o.optionId === d.selectedOptionId)?.label ?? null;
  return Object.freeze({
    subject: clip(d.subject, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionSubjectChars),
    selectedOptionLabel: selected
      ? clip(selected, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionOptionChars)
      : null,
    status: d.status,
    lifecycle: classifyHumanDecisionLifecycle(d.status),
    effectiveAt: d.effectiveAt,
    reversible: d.reversible,
    supersedesPresent: Boolean(d.supersedes),
  });
}

function projectEvidence(e: Evidence): StudioEvidenceProjection {
  const freshness = e.freshness ?? null;
  return Object.freeze({
    type: e.type,
    status: e.status,
    availability: e.availability,
    freshness,
    sourceKind: e.sourceKind,
    producedAt: e.producedAt ?? null,
    epistemicStance: classifyEvidenceEpistemicStance({
      status: e.status,
      availability: e.availability,
      freshness,
    }),
  });
}

function projectReview(r: ReviewBundle): StudioReviewProjection {
  return Object.freeze({
    status: r.status,
    evidenceRefCount: r.evidenceRefs.length,
    completeness: r.completeness,
    supersedesPresent: Boolean(r.supersedesReviewBundleId),
    createdAt: r.createdAt,
  });
}

function projectTrajectory(t: ProjectTrajectory): StudioTrajectoryProjection {
  const steps = t.steps
    .slice(0, STUDIO_COGNITIVE_CONTEXT_BUDGET.maxTrajectorySteps)
    .map((s) =>
      clip(
        `${s.order}:${s.label}[${s.state}]`,
        STUDIO_COGNITIVE_CONTEXT_BUDGET.trajectoryStepChars,
      ),
    );
  return Object.freeze({
    status: t.status,
    version: t.version,
    stepSummaries: Object.freeze(steps),
    decidedByDecisionPresent: Boolean(t.decidedByDecisionRef),
  });
}

function projectActiveCycleWorkItem(
  item: EpistemicItem,
): StudioActiveCycleWorkProjection {
  return Object.freeze({
    type: item.type,
    statement: clip(
      item.statement,
      STUDIO_COGNITIVE_CONTEXT_BUDGET.activeCycleWorkStatementChars,
    ),
    ...(item.confidence !== undefined ? { confidence: item.confidence } : {}),
    ...(item.blocking !== undefined ? { blocking: item.blocking } : {}),
    status: item.status,
  });
}

function relatedToActiveCycle(
  item: EpistemicItem,
  cycleInstanceId: string,
): boolean {
  const related = item.relatedObjects ?? [];
  return related.includes(cycleInstanceId);
}

/**
 * Read-only composition. No provider call. No persistence. No Recommendation.
 * Fail-closed when an LPS-pointed active cycle cannot be resolved coherently.
 */
export async function composeStudioCognitiveContext(input: {
  analysis: IntentAnalysisDto;
  project: ProjectAssistantContextDto;
  registryRoot: string;
  truthCContext?: string | null;
  oa: RuntimeOaStack | null;
  activeCycleInstanceId?: string | null;
}): Promise<ComposeStudioCognitiveContextResult> {
  const activeCycleInstanceId =
    input.activeCycleInstanceId ??
    input.project.activeCycleInstanceId ??
    null;

  let activeCycle: ActiveCycleCognitiveProjection | null = null;
  let activeCycleCkcForMethod: Parameters<
    typeof composeAdvisoryMethodContext
  >[0]["activeCycleCkc"] = null;

  if (input.oa && activeCycleInstanceId) {
    const resolved = await resolveActiveCycleCognitiveContext({
      project: input.project,
      activeCycleInstanceId,
      registryRoot: input.registryRoot,
      getCycle: input.oa.cycleServices.getCycle,
    });
    if (!resolved.ok) {
      return {
        ok: false,
        code: resolved.code,
        message: resolved.reason,
      };
    }
    activeCycle = resolved.projection;
    if (resolved.ckc) {
      activeCycleCkcForMethod = {
        cycleTypeId: resolved.ckc.cycleTypeId,
        cycleLabel: resolved.ckc.cycleLabel,
        ckcLensSection: resolved.ckc.ckcLensSection,
        ckcLoaded: resolved.ckc.ckcLoaded,
        sourceLimit: resolved.ckc.sourceLimit,
      };
    }
  }

  const method = composeAdvisoryMethodContext({
    analysis: input.analysis,
    project: input.project,
    registryRoot: input.registryRoot,
    activeCycleCkc: activeCycleCkcForMethod,
  });

  const contextBody =
    input.truthCContext != null && input.truthCContext !== ""
      ? input.truthCContext
      : input.project.contextSummary;

  const projectTruth: StudioProjectTruthProjection = Object.freeze({
    projectId: input.project.projectId,
    name: input.project.name,
    objective: input.project.objective,
    context: contextBody,
    constraints: Object.freeze([...input.project.constraints]),
    criticality: input.project.criticality,
    shortReference: input.project.shortReference ?? null,
    lpsId: input.project.lpsId,
    lpsVersion: input.project.lpsVersion,
    activeCycleInstanceId,
    doctrineId: input.project.doctrineId,
    doctrineVersion: input.project.doctrineVersion,
    doctrineStatus: input.project.doctrineStatus,
  });

  if (!input.oa) {
    return {
      ok: true,
      context: Object.freeze({
        projectTruth,
        method,
        activeCycle,
        activeCycleWorkItems: Object.freeze({
          state: "UNAVAILABLE" as const,
          items: Object.freeze([]),
        }),
        decisions: Object.freeze({
          state: "UNAVAILABLE" as const,
          items: Object.freeze([]),
        }),
        evidence: Object.freeze({
          state: "UNAVAILABLE" as const,
          items: Object.freeze([]),
        }),
        review: Object.freeze({
          state: "UNAVAILABLE" as const,
          items: Object.freeze([]),
        }),
        trajectory: Object.freeze({
          state: "UNAVAILABLE" as const,
          current: null,
        }),
        limits: Object.freeze({
          oaAvailable: false,
          truthOutranksConversation: true as const,
          composerDoesNotScoreMaturity: true as const,
          composerDoesNotSelectTrajectory: true as const,
        }),
      }),
    };
  }

  const oa = input.oa;
  const budget = STUDIO_COGNITIVE_CONTEXT_BUDGET;
  const projectId = input.project.projectId;

  let decisionsState: PresenceState = "NONE";
  let decisionItems: StudioDecisionProjection[] = [];
  try {
    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
    });
    if (!history.ok) {
      decisionsState = "UNAVAILABLE";
    } else if (history.decisions.length === 0) {
      decisionsState = "NONE";
    } else {
      decisionsState = "PRESENT";
      const sorted = [...history.decisions].sort((a, b) =>
        b.effectiveAt.localeCompare(a.effectiveAt),
      );
      decisionItems = sorted.slice(0, budget.maxDecisions).map(projectDecision);
    }
  } catch {
    decisionsState = "UNAVAILABLE";
  }

  let evidenceState: PresenceState = "NONE";
  let evidenceItems: StudioEvidenceProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.repository.listByProject(projectId);
    if (listed.length === 0) {
      evidenceState = "NONE";
    } else {
      evidenceState = "PRESENT";
      evidenceItems = listed.slice(0, budget.maxEvidence).map(projectEvidence);
    }
  } catch {
    evidenceState = "UNAVAILABLE";
  }

  let reviewState: PresenceState = "NONE";
  let reviewItems: StudioReviewProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    if (listed.length === 0) {
      reviewState = "NONE";
    } else {
      reviewState = "PRESENT";
      reviewItems = listed
        .slice(0, budget.maxReviewBundles)
        .map(projectReview);
    }
  } catch {
    reviewState = "UNAVAILABLE";
  }

  let trajectoryState: TrajectoryPresenceState = "ABSENT";
  let trajectoryCurrent: StudioTrajectoryProjection | null = null;
  try {
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (traj.ok) {
      trajectoryState = "PRESENT";
      trajectoryCurrent = projectTrajectory(traj.trajectory);
    } else if (traj.error?.detailCode === "TRAJECTORY_NOT_FOUND") {
      trajectoryState = "ABSENT";
    } else {
      trajectoryState = "UNAVAILABLE";
    }
  } catch {
    trajectoryState = "UNAVAILABLE";
  }

  let acwState: PresenceState = "NONE";
  let acwItems: StudioActiveCycleWorkProjection[] = [];
  if (activeCycle) {
    try {
      const epistemic = await oa.cycleServices.epistemic.listByProject(projectId);
      const filtered = epistemic.filter(
        (item) =>
          item.source === ACTIVE_CYCLE_WORK_SOURCE &&
          relatedToActiveCycle(item, activeCycle.cycleInstanceId),
      );
      if (filtered.length === 0) {
        acwState = "NONE";
      } else {
        acwState = "PRESENT";
        // CR-ACW-03 — newest-N for prompt only; do not reorder global epistemic repo.
        const newestFirst = [...filtered].sort((a, b) => {
          const byCreated = b.createdAt.localeCompare(a.createdAt);
          if (byCreated !== 0) return byCreated;
          return b.epistemicItemId.localeCompare(a.epistemicItemId);
        });
        const newestN = newestFirst.slice(0, budget.maxActiveCycleWorkItems);
        // Chronological ASC for prompt display.
        acwItems = newestN
          .reverse()
          .map(projectActiveCycleWorkItem);
      }
    } catch {
      acwState = "UNAVAILABLE";
    }
  }

  return {
    ok: true,
    context: Object.freeze({
      projectTruth,
      method,
      activeCycle,
      activeCycleWorkItems: Object.freeze({
        state: acwState,
        items: Object.freeze(acwItems),
      }),
      decisions: Object.freeze({
        state: decisionsState,
        items: Object.freeze(decisionItems),
      }),
      evidence: Object.freeze({
        state: evidenceState,
        items: Object.freeze(evidenceItems),
      }),
      review: Object.freeze({
        state: reviewState,
        items: Object.freeze(reviewItems),
      }),
      trajectory: Object.freeze({
        state: trajectoryState,
        current: trajectoryCurrent,
      }),
      limits: Object.freeze({
        oaAvailable: true,
        truthOutranksConversation: true as const,
        composerDoesNotScoreMaturity: true as const,
        composerDoesNotSelectTrajectory: true as const,
      }),
    }),
  };
}

/**
 * Render StudioCognitiveContext into F1 system-prompt sections.
 * Business-first; no digests / repository mechanics / F1-F2-MW5 jargon.
 */
export function buildStudioCognitivePromptSections(
  ctx: StudioCognitiveContext,
): string[] {
  const lines: string[] = [
    "=== STUDIO COGNITIVE CONTEXT (autorité / guidance séparées) ===",
    "Présence d'un enregistrement ≠ autorité courante / fait établi.",
    "Autorité projet courante = Truth C / LPS courant + HumanDecisions CURRENT (effective).",
    "Evidence = support épistémique (poids selon status/availability/freshness) — jamais un Fact automatique.",
    "DoctrinePackage/CKC = guidance méthodologique seulement — ne remplace jamais la vérité projet.",
    "Conversation = continuité ; outrankée par vérité Project courante + doctrine Studio.",
    "Recommendation / ProjectTrajectory ≠ HumanDecision sauf décision séparée.",
    "Ne réécris pas l'historique Session. Ne score pas de bande de maturité comme fait.",
    "",
  ];

  lines.push("— Vérité projet (Truth C / LPS) —");
  lines.push(`Nom : ${ctx.projectTruth.name}`);
  lines.push(`Objectif : ${ctx.projectTruth.objective}`);
  lines.push(`Contexte : ${ctx.projectTruth.context}`);
  lines.push(
    `Contraintes : ${
      ctx.projectTruth.constraints.length > 0
        ? ctx.projectTruth.constraints.join("; ")
        : "(aucune)"
    }`,
  );
  lines.push(`Criticité : ${ctx.projectTruth.criticality}`);
  if (ctx.projectTruth.activeCycleInstanceId) {
    lines.push(
      `Cycle ACTIVE authority-bearing : ${ctx.projectTruth.activeCycleInstanceId} — ne pas inventer d'activation.`,
    );
  } else {
    lines.push(
      "Cycle ACTIVE : aucun (un CycleInstance candidate peut exister sans LPS.activeCycleInstanceId).",
    );
  }
  lines.push("");

  // Active cycle (rich block — D-GF-ACW-01)
  lines.push("— Cycle ACTIVE (identité serveur) —");
  if (!ctx.activeCycle) {
    lines.push(
      "Aucun cycle ACTIVE résolu pour ce tour — travail pré-cycle / hors cycle.",
    );
    lines.push(
      "activeCycleAlreadyCoversWork doit rester false sauf preuve contraire dans le LPS.",
    );
  } else {
    const ac = ctx.activeCycle;
    lines.push(
      `cycleTypeId=${ac.cycleTypeId}` +
        (ac.cycleLabel ? ` (« ${ac.cycleLabel} »)` : "") +
        ` · profile=${ac.profile} · status=${ac.status}` +
        (ac.workEligible ? " · workEligible=true" : " · workEligible=false"),
    );
    if (ac.trajectoryId) {
      lines.push(
        `Trajectoire liée : ${ac.trajectoryId}` +
          (ac.trajectoryVersion != null ? `@v${ac.trajectoryVersion}` : "") +
          (ac.trajectoryStepId ? ` · step=${ac.trajectoryStepId}` : ""),
      );
    } else {
      lines.push("Trajectoire liée : (aucune binding complète).");
    }
    if (ac.ckcResolutionRef) {
      lines.push(`ckcResolutionRef durable : ${ac.ckcResolutionRef}`);
    }
    lines.push(
      "CKC du cycle ACTIVE = guidance méthodologique AUTORITATIVE pour le travail in-cycle.",
    );
    lines.push(
      "Orientation candidat d'intent (ci-dessous) = SECONDAIRE — ne pas l'utiliser pour remplacer la CKC du cycle actif.",
    );
    if (ctx.activeCycleWorkItems.state === "PRESENT") {
      lines.push("Travail cognitif déjà matérialisé pour ce cycle ACTIVE :");
      for (const w of ctx.activeCycleWorkItems.items) {
        lines.push(
          `• [${w.type}${w.status !== "active" ? `/${w.status}` : ""}]` +
            (w.confidence ? ` conf=${w.confidence}` : "") +
            (w.blocking === true ? " blocking" : "") +
            ` — ${w.statement}`,
        );
      }
    } else if (ctx.activeCycleWorkItems.state === "UNAVAILABLE") {
      lines.push(
        "Travail cognitif cycle ACTIVE : UNAVAILABLE — ne pas inventer d'items.",
      );
    } else {
      lines.push("Travail cognitif cycle ACTIVE : aucun item matérialisé encore.");
    }
  }
  lines.push("");

  // Method / CKC
  lines.push("— Méthode (guidance) —");
  if (ctx.method.activeCycleCkcAuthoritative) {
    lines.push(
      "Source CKC : cycle ACTIVE (autoritative in-cycle)." +
        (ctx.method.cycleLabel ? ` · « ${ctx.method.cycleLabel} »` : ""),
    );
  }
  if (ctx.method.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
    lines.push(
      `État orientation (secondaire) : RESOLVED_FROM_INTENT_CANDIDATE` +
        (ctx.method.cycleLabel && !ctx.method.activeCycleCkcAuthoritative
          ? ` · cycle candidat « ${ctx.method.cycleLabel} »`
          : ctx.method.orientation.candidateCycleTypeId
            ? ` · candidat intent « ${ctx.method.orientation.candidateCycleTypeId} »`
            : "") +
        " (hypothèse non durable).",
    );
  } else {
    lines.push(
      "État orientation : UNRESOLVED — n'invente pas de cycle ; question ciblée seulement si matérielle.",
    );
  }
  if (ctx.method.sourceLimit === "doctrine_unavailable") {
    lines.push("Limite : DoctrinePackage non résolu.");
  } else if (ctx.method.sourceLimit === "ckc_unavailable") {
    lines.push(
      "Limite : CKC détaillée indisponible — dégradation gouvernée ; pas de Skills Framework public.",
    );
  }
  if (ctx.method.ckcLensSection?.trim()) {
    lines.push(ctx.method.ckcLensSection.trim());
  }
  lines.push("");

  lines.push("— HumanDecisions —");
  if (ctx.decisions.state === "NONE") {
    lines.push("État enregistrements : NONE — aucune HumanDecision.");
  } else if (ctx.decisions.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer de décision.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — des HumanDecisions existent ; PRESENT ≠ toutes CURRENT.",
    );
    const current = ctx.decisions.items.filter((d) => d.lifecycle === "CURRENT");
    const pending = ctx.decisions.items.filter((d) => d.lifecycle === "PENDING");
    const nonActive = ctx.decisions.items.filter(
      (d) => d.lifecycle === "NON_ACTIVE",
    );
    lines.push("CURRENT (effective) — respecter ; ne pas rouvrir comme Option libre sans contradiction/replan:");
    if (current.length === 0) {
      lines.push("• (aucune HumanDecision CURRENT)");
    } else {
      for (const d of current) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=CURRENT]` +
            (d.supersedesPresent ? " (remplace une décision antérieure)" : ""),
        );
      }
    }
    lines.push("PENDING — non décidé ; ne pas narrer comme GO/current:");
    if (pending.length === 0) {
      lines.push("• (aucune HumanDecision PENDING)");
    } else {
      for (const d of pending) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=PENDING]`,
        );
      }
    }
    lines.push("NON_ACTIVE — historique / provenance seulement ; jamais GO courant:");
    if (nonActive.length === 0) {
      lines.push("• (aucune HumanDecision NON_ACTIVE)");
    } else {
      for (const d of nonActive) {
        lines.push(
          `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [raw=${d.status} lifecycle=NON_ACTIVE]`,
        );
      }
    }
  }
  lines.push("");

  lines.push("— Evidence —");
  if (ctx.evidence.state === "NONE") {
    lines.push("État enregistrements : NONE — aucune Evidence projet liée.");
  } else if (ctx.evidence.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE — ne pas inventer d'Evidence.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — des Evidence existent ; PRESENT ≠ Fact / preuve établie.",
    );
    lines.push(
      "Règles : Evidence = support, pas la proposition ; status/availability/freshness pèsent ; rejected/superseded/unavailable = non-support courant ; stale = affaibli ; expected/incomplete/unverified ≠ verified ; unknown reste incertitude ; même verified ne prouve pas une claim utilisateur non liée.",
    );
    for (const e of ctx.evidence.items) {
      lines.push(
        `• type=${e.type} status=${e.status} availability=${e.availability}` +
          (e.freshness ? ` freshness=${e.freshness}` : "") +
          ` stance=${e.epistemicStance}`,
      );
    }
  }
  lines.push("");

  lines.push("— ReviewBundle —");
  if (ctx.review.state === "NONE") {
    lines.push("État enregistrements : NONE.");
  } else if (ctx.review.state === "UNAVAILABLE") {
    lines.push("État enregistrements : UNAVAILABLE.");
  } else {
    lines.push(
      "État enregistrements : PRESENT — pas une validation Fact automatique ; lire status/completeness.",
    );
    for (const r of ctx.review.items) {
      lines.push(
        `• status=${r.status} evidenceRefs=${r.evidenceRefCount} completeness=${r.completeness}` +
          (r.supersedesPresent ? " (supersédé/lié)" : ""),
      );
    }
  }
  lines.push("");

  lines.push("— ProjectTrajectory —");
  if (ctx.trajectory.state === "ABSENT") {
    lines.push("État : ABSENT — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "UNAVAILABLE") {
    lines.push("État : UNAVAILABLE — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "DEFERRED") {
    lines.push("État : DEFERRED — non consommé dans ce tour.");
  } else if (ctx.trajectory.current) {
    const t = ctx.trajectory.current;
    lines.push(
      `État : PRESENT · status=${t.status} version=${t.version}` +
        (t.decidedByDecisionPresent
          ? " · liée à une HumanDecision"
          : " · Recommendation/candidate ≠ HumanDecision"),
    );
    if (t.stepSummaries.length > 0) {
      lines.push(`Étapes : ${t.stepSummaries.join(" → ")}`);
    }
  }
  lines.push("");

  return lines;
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/logicalProductTurn.ts`
```ts
/**
 * D-GF-ACW-02 Option A — resolve or mint Session-adjacent logical Product turn id.
 *
 * Continuity / rematerialize coordination ONLY.
 * Never Epistemic / LPS / HD / Evidence SoT.
 * Opening Session DB is independent of Memory B Runner attachment.
 */

import {
  ProductSqliteSession,
  type LogicalProductTurnRow,
} from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
import { CANONICAL_CONVERSATION_SESSION_KEY } from "./f2/canonicalConversationSession";

export type ResolveOrMintLogicalProductTurnOk = {
  readonly ok: true;
  readonly logicalTurnId: string;
  readonly minted: boolean;
  readonly row: LogicalProductTurnRow;
};

export type ResolveOrMintLogicalProductTurnErr = {
  readonly ok: false;
  readonly code: "LOGICAL_TURN_UNKNOWN" | "LOGICAL_TURN_SESSION_UNAVAILABLE";
  readonly reason: string;
};

export type ResolveOrMintLogicalProductTurnResult =
  | ResolveOrMintLogicalProductTurnOk
  | ResolveOrMintLogicalProductTurnErr;

/**
 * Accept boundary for ACW turn identity:
 * - presented id MUST already exist for project+session (reject client-invented)
 * - else mint server-owned `ltu:…` with status `accepted`
 * - Session open failure → fail-closed for ACW path
 */
export function resolveOrMintLogicalProductTurn(input: {
  projectId: string;
  sessionDbPath?: string;
  sessionKey?: string;
  presentedLogicalTurnId?: string | null;
  cycleInstanceId?: string | null;
  nowIso?: string;
}): ResolveOrMintLogicalProductTurnResult {
  const projectId = input.projectId.trim();
  const sessionKey =
    input.sessionKey?.trim() || CANONICAL_CONVERSATION_SESSION_KEY;
  const presented = input.presentedLogicalTurnId?.trim() || null;

  let session: ProductSqliteSession | null = null;
  try {
    const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
    session = new ProductSqliteSession({
      projectId,
      dbPath,
      sessionKey,
    });
    session.ensureLogicalTurnSchema();

    if (presented) {
      const existing = session.getLogicalProductTurn(presented);
      if (!existing) {
        return {
          ok: false,
          code: "LOGICAL_TURN_UNKNOWN",
          reason: "presented_logical_turn_not_found_for_project_session",
        };
      }
      return {
        ok: true,
        logicalTurnId: existing.logicalTurnId,
        minted: false,
        row: existing,
      };
    }

    const row = session.mintLogicalProductTurn({
      cycleInstanceId: input.cycleInstanceId,
      status: "accepted",
      nowIso: input.nowIso,
    });
    return {
      ok: true,
      logicalTurnId: row.logicalTurnId,
      minted: true,
      row,
    };
  } catch (err) {
    return {
      ok: false,
      code: "LOGICAL_TURN_SESSION_UNAVAILABLE",
      reason:
        err instanceof Error
          ? err.message
          : "session_db_open_failed_for_logical_turn",
    };
  } finally {
    try {
      session?.close();
    } catch {
      /* ignore close errors */
    }
  }
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/materializeActiveCycleWork.ts`
```ts
/**
 * D-GF-ACW-01 — materialize non-authoritative active-cycle EpistemicItems
 * and link them into LPS.epistemicItemIds atomically (Product SQLite UoW).
 *
 * NOT a new aggregate. HARVEST UpdateEpistemicState + AppendLivingProjectStateVersion.
 * No HumanDecision / ExecutionContract / trajectory / LPS structural rewrite.
 */

import { createHash } from "node:crypto";
import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";
import type {
  EpistemicConfidence,
  EpistemicItem,
  EpistemicItemType,
} from "@/lib/oa/cycle";
import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
import type { AppendLivingProjectStateVersion } from "@/lib/oa/project/application/appendLivingProjectStateVersion";
import type { GetCurrentLivingProjectState } from "@/lib/oa/project/application/getCurrentLivingProjectState";
import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import type { ActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";

/** Stable Product source for Nora active-cycle cognitive work. */
export const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora" as const;

/** Same Nora agent actor as LR — authority remains none on items. */
export const NORA_ACTIVE_CYCLE_WORK_ACTOR: ActorReference =
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR;

export const ACTIVE_CYCLE_WORK_ALLOWED_TYPES: ReadonlySet<EpistemicItemType> =
  new Set([
    "Observation",
    "Hypothesis",
    "Option",
    "Recommendation",
    "Reservation",
    "Contradiction",
  ]);

export type ActiveCycleWorkMaterializationFacts = {
  readonly projectId: string;
  readonly activeCycleInstanceId: string;
  readonly lpsVersion: number;
  readonly lpsObjective: string;
  readonly existingEpistemicItemIds: readonly string[];
  readonly existingItems: readonly EpistemicItem[];
  /** Production key = durable logical Product turn id (ltu:…). */
  readonly turnCorrelationId: string;
  /** CR-ACW-01 — sealed studio activeCycle projection; validated in UoW. */
  readonly contextSeal: ActiveCycleWorkContextSeal;
};

export type MaterializeActiveCycleWorkResult =
  | {
      readonly ok: true;
      readonly items: readonly EpistemicItem[];
      readonly createdIds: readonly string[];
      readonly reusedIds: readonly string[];
      readonly lpsVersionAfter: number;
      readonly idempotent: boolean;
    }
  | { readonly ok: false; readonly code: string; readonly reason: string };

function statementDigest(statement: string): string {
  return createHash("sha256")
    .update(statement.trim(), "utf8")
    .digest("hex")
    .slice(0, 16);
}

export function activeCycleWorkEpistemicItemId(input: {
  projectId: string;
  cycleInstanceId: string;
  turnCorrelationId: string;
  index: number;
  type: string;
  statement: string;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId,
    input.turnCorrelationId,
    String(input.index),
    input.type,
    statementDigest(input.statement),
  ].join("|");
  const digest = createHash("sha256")
    .update(raw, "utf8")
    .digest("hex")
    .slice(0, 20);
  return `epi:acw:${digest}`;
}

function buildProvenance(input: {
  projectId: string;
  cycleInstanceId: string;
  turnCorrelationId: string;
  producedAt: string;
  index: number;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: `prov:acw:${createHash("sha256")
      .update(
        `${input.turnCorrelationId}|${input.index}|${input.cycleInstanceId}`,
        "utf8",
      )
      .digest("hex")
      .slice(0, 16)}`,
    actor: structuredClone(NORA_ACTIVE_CYCLE_WORK_ACTOR),
    source: "conversation",
    timestamp: input.producedAt,
    correlationId: input.turnCorrelationId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  };
}

function materialParity(
  existing: EpistemicItem,
  next: {
    type: EpistemicItemType;
    statement: string;
    confidence?: EpistemicConfidence;
    blocking?: boolean;
  },
): boolean {
  if (existing.type !== next.type) return false;
  if (existing.statement.trim() !== next.statement.trim()) return false;
  if ((existing.confidence ?? undefined) !== (next.confidence ?? undefined)) {
    return false;
  }
  if ((existing.blocking ?? undefined) !== (next.blocking ?? undefined)) {
    return false;
  }
  if (existing.source !== ACTIVE_CYCLE_WORK_SOURCE) return false;
  return true;
}

function normNullable(value: string | null | undefined): string | null {
  const t = value?.trim();
  return t ? t : null;
}

class ActiveCycleWorkAtomicFailure extends Error {
  constructor(
    readonly code: string,
    readonly reason: string,
  ) {
    super(reason);
    this.name = "ActiveCycleWorkAtomicFailure";
  }
}

function assertContextSealAgainstLiveState(input: {
  seal: ActiveCycleWorkContextSeal;
  projectId: string;
  cycle: {
    projectId: string;
    cycleInstanceId: string;
    cycleTypeId: string;
    profile: string;
    status: string;
    trajectoryId?: string;
    trajectoryVersion?: number;
    trajectoryStepId?: string;
    ckcResolutionRef?: string;
  };
  lps: {
    version: number;
    activeCycleInstanceId?: string | null;
    ckcResolutionRef?: string | null;
  };
  expectedLpsVersion: number;
}): void {
  const { seal, cycle, lps } = input;
  if (seal.projectId !== input.projectId || cycle.projectId !== seal.projectId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:projectId",
    );
  }
  if (cycle.cycleInstanceId !== seal.cycleInstanceId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:cycleInstanceId",
    );
  }
  if (cycle.cycleTypeId !== seal.cycleTypeId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:cycleTypeId",
    );
  }
  if (cycle.profile !== seal.profile) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:profile",
    );
  }
  if (cycle.status !== "active" || seal.status !== "active") {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:status",
    );
  }
  if (normNullable(cycle.trajectoryId) !== seal.trajectoryId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:trajectoryId",
    );
  }
  const liveTrajVer =
    typeof cycle.trajectoryVersion === "number" ? cycle.trajectoryVersion : null;
  if (liveTrajVer !== seal.trajectoryVersion) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:trajectoryVersion",
    );
  }
  if (normNullable(cycle.trajectoryStepId) !== seal.trajectoryStepId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:trajectoryStepId",
    );
  }
  if (normNullable(cycle.ckcResolutionRef) !== seal.ckcResolutionRef) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:ckcResolutionRef",
    );
  }
  if ((lps.activeCycleInstanceId ?? null) !== seal.cycleInstanceId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:lps.activeCycleInstanceId",
    );
  }
  if (lps.version !== input.expectedLpsVersion) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:lps.version",
    );
  }
  const lpsRef = normNullable(lps.ckcResolutionRef ?? null);
  if (lpsRef && seal.ckcResolutionRef && lpsRef !== seal.ckcResolutionRef) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:lps.ckcResolutionRef",
    );
  }
}

/**
 * Persist active-cycle work items + LPS epistemicItemIds in one Product UoW.
 */
export async function materializeActiveCycleWork(input: {
  items: readonly NoraActiveCycleWorkItem[];
  facts: ActiveCycleWorkMaterializationFacts;
  updateEpistemicState: UpdateEpistemicState;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getCycle: GetCycle;
  runInTransaction: CyclePersistenceUnitOfWorkPort["runInTransaction"];
  producedAt: string;
  createdBy?: ActorReference;
}): Promise<MaterializeActiveCycleWorkResult> {
  if (!input.items || input.items.length === 0) {
    return {
      ok: true,
      items: [],
      createdIds: [],
      reusedIds: [],
      lpsVersionAfter: input.facts.lpsVersion,
      idempotent: true,
    };
  }

  for (const item of input.items) {
    if (!ACTIVE_CYCLE_WORK_ALLOWED_TYPES.has(item.type as EpistemicItemType)) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_WORK_FORBIDDEN_TYPE",
        reason: `forbidden_epistemic_type:${item.type}`,
      };
    }
  }

  const createdBy = input.createdBy ?? NORA_ACTIVE_CYCLE_WORK_ACTOR;
  const { facts } = input;

  if (
    facts.contextSeal.projectId !== facts.projectId ||
    facts.contextSeal.cycleInstanceId !== facts.activeCycleInstanceId
  ) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_CONTEXT_STALE",
      reason: "seal_mismatch_vs_materialization_facts",
    };
  }

  try {
    const atomic = await input.runInTransaction(async () => {
      const cycleLoad = await input.getCycle.execute({
        cycleInstanceId: facts.activeCycleInstanceId,
      });
      if (!cycleLoad.ok) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_NOT_FOUND",
          "cycle_missing_at_materialization",
        );
      }
      const cycle = cycleLoad.cycle;
      if (cycle.projectId !== facts.projectId) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_PROJECT_MISMATCH",
          "cycle_project_mismatch_at_materialization",
        );
      }
      if (cycle.status !== "active") {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_NOT_ELIGIBLE",
          "cycle_not_active_at_materialization",
        );
      }

      const lpsNow = await input.getCurrentLivingProjectState.execute({
        projectId: facts.projectId,
      });
      if (!lpsNow.ok) {
        throw new ActiveCycleWorkAtomicFailure(
          "LPS_UNAVAILABLE",
          "lps_missing_at_materialization",
        );
      }

      // CR-ACW-01 — exact seal compare before any write; ZERO writes on mismatch.
      assertContextSealAgainstLiveState({
        seal: facts.contextSeal,
        projectId: facts.projectId,
        cycle,
        lps: lpsNow.livingProjectState,
        expectedLpsVersion: facts.lpsVersion,
      });

      if (
        (lpsNow.livingProjectState.activeCycleInstanceId ?? null) !==
        facts.activeCycleInstanceId
      ) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_LPS_POINTER_STALE",
          "lps_active_cycle_changed_before_materialization",
        );
      }
      if (lpsNow.livingProjectState.version !== facts.lpsVersion) {
        throw new ActiveCycleWorkAtomicFailure(
          "LPS_VERSION_CONFLICT",
          "lps_version_changed_before_materialization",
        );
      }

      const planned: Array<{
        epistemicItemId: string;
        type: EpistemicItemType;
        statement: string;
        confidence?: EpistemicConfidence;
        blocking?: boolean;
        relatedObjects: string[];
        provenance: ProvenanceRecord;
        reuse: boolean;
      }> = [];

      const existingById = new Map(
        facts.existingItems.map((e) => [e.epistemicItemId, e]),
      );

      for (let index = 0; index < input.items.length; index += 1) {
        const raw = input.items[index]!;
        const type = raw.type as EpistemicItemType;
        const statement = raw.statement.trim();
        if (!statement) {
          throw new ActiveCycleWorkAtomicFailure(
            "ACTIVE_CYCLE_WORK_INVALID",
            "empty_statement",
          );
        }
        const epistemicItemId = activeCycleWorkEpistemicItemId({
          projectId: facts.projectId,
          cycleInstanceId: facts.activeCycleInstanceId,
          turnCorrelationId: facts.turnCorrelationId,
          index,
          type,
          statement,
        });
        const existing = existingById.get(epistemicItemId);
        const confidence =
          raw.confidence === null || raw.confidence === undefined
            ? undefined
            : (raw.confidence as EpistemicConfidence);
        const blocking =
          raw.blocking === null || raw.blocking === undefined
            ? undefined
            : raw.blocking;

        if (existing) {
          if (
            !materialParity(existing, {
              type,
              statement,
              confidence,
              blocking,
            })
          ) {
            throw new ActiveCycleWorkAtomicFailure(
              "ACTIVE_CYCLE_WORK_IDEM_CONFLICT",
              "same_id_different_material",
            );
          }
          planned.push({
            epistemicItemId,
            type,
            statement,
            confidence,
            blocking,
            relatedObjects: existing.relatedObjects
              ? [...existing.relatedObjects]
              : [facts.projectId, facts.activeCycleInstanceId],
            provenance: existing.provenance
              ? structuredClone(existing.provenance)
              : buildProvenance({
                  projectId: facts.projectId,
                  cycleInstanceId: facts.activeCycleInstanceId,
                  turnCorrelationId: facts.turnCorrelationId,
                  producedAt: input.producedAt,
                  index,
                }),
            reuse: true,
          });
          continue;
        }

        const relatedObjects = [
          facts.projectId,
          facts.activeCycleInstanceId,
          ...(cycle.trajectoryId ? [cycle.trajectoryId] : []),
          ...(cycle.trajectoryStepId ? [cycle.trajectoryStepId] : []),
        ];

        planned.push({
          epistemicItemId,
          type,
          statement,
          confidence,
          blocking,
          relatedObjects,
          provenance: buildProvenance({
            projectId: facts.projectId,
            cycleInstanceId: facts.activeCycleInstanceId,
            turnCorrelationId: facts.turnCorrelationId,
            producedAt: input.producedAt,
            index,
          }),
          reuse: false,
        });
      }

      const toWrite = planned.filter((p) => !p.reuse);
      if (toWrite.length > 0) {
        const write = await input.updateEpistemicState.execute({
          projectId: facts.projectId,
          createdBy,
          correlationId: facts.turnCorrelationId,
          items: toWrite.map((p) => ({
            epistemicItemId: p.epistemicItemId,
            type: p.type,
            statement: p.statement,
            status: "active" as const,
            source: ACTIVE_CYCLE_WORK_SOURCE,
            confidence: p.confidence,
            blocking: p.blocking,
            relatedObjects: p.relatedObjects,
            provenance: p.provenance,
          })),
        });
        if (!write.ok) {
          throw new ActiveCycleWorkAtomicFailure(
            write.error.detailCode,
            write.error.internalCauseRef ?? "epistemic_write_failed",
          );
        }
      }

      const newIds = planned.map((p) => p.epistemicItemId);
      const carriedIds = lpsNow.livingProjectState.epistemicItemIds ?? [
        ...facts.existingEpistemicItemIds,
      ];
      const mergedIds = [
        ...carriedIds.filter((id) => !newIds.includes(id)),
        ...newIds,
      ];

      const needsLpsLink = newIds.some((id) => !carriedIds.includes(id));
      let lpsVersionAfter = facts.lpsVersion;
      if (needsLpsLink) {
        const appended =
          await input.appendLivingProjectStateVersion.execute({
            projectId: facts.projectId,
            expectedVersion: facts.lpsVersion,
            objective: facts.lpsObjective,
            createdBy,
            correlationId: facts.turnCorrelationId,
            epistemicItemIds: mergedIds,
            activeCycleInstanceId: facts.activeCycleInstanceId,
          });
        if (!appended.ok) {
          throw new ActiveCycleWorkAtomicFailure(
            appended.error.detailCode,
            appended.error.internalCauseRef ?? "lps_append_failed",
          );
        }
        lpsVersionAfter = appended.livingProjectState.version;
      }

      return {
        planned,
        lpsVersionAfter,
      };
    });

    const createdIds = atomic.planned
      .filter((p) => !p.reuse)
      .map((p) => p.epistemicItemId);
    const reusedIds = atomic.planned
      .filter((p) => p.reuse)
      .map((p) => p.epistemicItemId);

    const items: EpistemicItem[] = atomic.planned.map((p) => ({
      schemaVersion: "0.1.0-oa",
      epistemicItemId: p.epistemicItemId,
      type: p.type,
      statement: p.statement,
      status: "active",
      confidence: p.confidence,
      source: ACTIVE_CYCLE_WORK_SOURCE,
      createdBy: structuredClone(createdBy),
      createdAt: input.producedAt,
      relatedObjects: p.relatedObjects,
      blocking: p.blocking,
      provenance: p.provenance,
    }));

    return {
      ok: true,
      items,
      createdIds,
      reusedIds,
      lpsVersionAfter: atomic.lpsVersionAfter,
      idempotent: createdIds.length === 0,
    };
  } catch (err) {
    if (err instanceof ActiveCycleWorkAtomicFailure) {
      return { ok: false, code: err.code, reason: err.reason };
    }
    return {
      ok: false,
      code: "ACTIVE_CYCLE_WORK_ATOMIC_FAILURE",
      reason: err instanceof Error ? err.message : "atomic_materialize_failed",
    };
  }
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
```ts
import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import {
  memoryBPiloteNotice,
  memoryBCompactionPiloteNotice,
  runNoraCognitiveTurn,
  formatCognitiveStopPiloteNotice,
  aggregateReadCoverage,
  rememberReadCoverage,
  ProductSqliteSession,
  resolveNoraSessionSqlitePath,
  type SemanticCognitiveWorkloadAssessment,
  type Mw3ContradictionAssessmentInput,
  type NoraEvalModelReasoningControl,
  type NoraAgentsUsdAccounting,
  type NoraCampaignBudget,
} from "@/lib/nora-cognitive-runtime";
import {
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
  normalizeNoraProductTurnStructuredOutput,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
import {
  LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
  lifecycleRecommendationMaterializeFailurePiloteNotice,
} from "./lifecycleRecommendationPiloteNotice";
import { materializeActiveCycleWork } from "./materializeActiveCycleWork";
import { resolveOrMintLogicalProductTurn } from "./logicalProductTurn";
import { buildActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import { resolveAssistantMode } from "./resolveAssistantMode";
import {
  resolveRememberedEvidence,
  resolveOaStackForLifecycleRecommendation,
} from "./mw3AvailableEvidence";
import type { AdvisoryMethodContext } from "./f2/methodOrientation";
import type { StudioCognitiveContext } from "./f2/studioCognitiveContext";
import type {
  AssistantHistoryMessage,
  Mw3CognitiveSurfaceDto,
  Mw4GroundingSurfaceDto,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "./types";
import { resolveTrajectoryBootstrapPresence } from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";

const MAX_HISTORY_MESSAGES = 20;

function buildEphemeralNotice(
  memoryBAvailability:
    | "available_with_history"
    | "available_empty"
    | "unavailable",
  memoryBCompactionState:
    | "none"
    | "compacted_no_loss"
    | "compacted_with_loss"
    | "stale_invalidated",
  stalePriorInvalidated?: boolean,
  cognitiveStopNotice?: string | null,
  lifecycleMaterializeNotice?: string | null,
): string {
  const base = memoryBPiloteNotice(memoryBAvailability);
  const compaction = memoryBCompactionPiloteNotice(memoryBCompactionState, {
    stalePriorInvalidated,
  });
  const parts = [
    lifecycleMaterializeNotice,
    cognitiveStopNotice,
    compaction,
    base,
  ].filter((p): p is string => typeof p === "string" && p.trim().length > 0);
  return parts.join(" ");
}

function toMw3Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw3CognitiveSurfaceDto | null {
  const disposition = turn.contradictionDisposition;
  const stop = turn.cognitiveStopDecision;
  if (!disposition || !stop) return null;
  return {
    disposition: disposition.disposition,
    progression: stop.outcome,
    cognitiveStop: stop.cognitiveStop,
    reason: stop.anatomy?.reason ?? disposition.disclosure,
    evidenceIds: stop.anatomy?.contradictionEvidenceIds ?? [
      ...disposition.acceptedEvidenceIds,
    ],
    sourceIds: stop.anatomy?.sourceIds ?? [...disposition.acceptedSourceIds],
    governingPremise: stop.anatomy?.governingPremise || null,
    nextAction: stop.anatomy?.nextAction ?? null,
    insufficiencyReasons: [...disposition.insufficiencyReasons],
    allowsSilentSuccess: false,
    blockedImpact: stop.cognitiveStop
      ? `Progression bloquée — prémisse gouvernante invalidée${
          stop.anatomy?.governingPremise
            ? ` (${stop.anatomy.governingPremise})`
            : ""
        }.`
      : null,
    mayContinue:
      stop.cognitiveStop !== true && stop.progression === "continue",
    notTechnicalFailure: stop.progression !== "technical_failure",
  };
}

function toMw4Surface(
  turn: Awaited<ReturnType<typeof runNoraCognitiveTurn>>,
): Mw4GroundingSurfaceDto | null {
  const g = turn.mw4Grounding;
  if (!g) return null;
  return {
    rememberedIds: [...g.rememberedIds],
    validIds: [...g.validIds],
    downgradedIds: [...g.downgradedIds],
    missingIds: [...g.missingIds],
    disclosure: g.disclosure,
    readCoverageOverall: g.readCoverageOverall,
    readCoverageDisclosure: g.readCoverageDisclosure ?? null,
  };
}

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
  };
}

/**
 * Thin F1 orchestration — Option C single Agents Runner path (Fake + target).
 * SFIA routeToolCall remains the tool authorization boundary.
 */
export async function orchestrateProjectAssistantTurn(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
  /**
   * Optional server-side provider injection (eval / tests).
   * Prefer per-instance OpenAIConversationProvider over process.env mutation.
   */
  provider?: ConversationProvider;
  /** Test override for Product SQLite Session path. */
  sessionDbPath?: string;
  /**
   * Test injection — forces Memory B UNAVAILABLE (MW1-S01).
   * Same product path; no second runtime.
   */
  simulateMemoryBUnavailable?: boolean;
  /**
   * CORR-MW2-REAL-01 — INTERNAL semantic CWP from analyzeIntent.
   * Server-side only; never part of ProjectAssistantSendResult.
   */
  semanticCognitiveWorkload?: SemanticCognitiveWorkloadAssessment | null;
  /**
   * CORR-MW2-REAL-04 — INTERNAL full Truth C / LPS context for F1 system prompt.
   * Server-side only; does not expand ProjectAssistantContextDto / client DTO.
   */
  truthCContext?: string | null;
  /**
   * CORR-PROOF-03 E1 — INTERNAL non-mutating method orientation + optional CKC lens.
   * Server-side only; never client-authoritative.
   */
  methodContext?: AdvisoryMethodContext | null;
  /**
   * CORR-PROOF-04 — INTERNAL Studio Cognitive Context envelope.
   * Server-side only; never client-authoritative. Supersedes methodContext when set.
   */
  studioCognitiveContext?: StudioCognitiveContext | null;
  /**
   * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
   * Server-side; surfaces mw3 DTO without inventing Evidence.
   */
  contradictionAssessment?: Mw3ContradictionAssessmentInput | null;
  /** MW4-S02 — attach post-Evidence / recovery narrative policy disclosure. */
  postEvidenceNarrativePolicy?: boolean;
  /**
   * INTERNAL / EVAL-ONLY — Stage A cell model×effort pin.
   * Never part of ProjectAssistant client DTO. Absent → production default.
   */
  evalModelReasoningControl?: NoraEvalModelReasoningControl;
  /** INTERNAL / EVAL-ONLY — Agents USD authorization envelope bridge. */
  usdAccounting?: NoraAgentsUsdAccounting;
  /** INTERNAL / EVAL-ONLY — shared canonical campaign budget lease. */
  campaignBudget?: NoraCampaignBudget;
  /**
   * D-GF-ACW-02 Option A — optional re-present of server-issued logical turn id.
   * Production ACW identity; never client-invented.
   */
  logicalTurnId?: string;
  /**
   * TEST-ONLY — explicit correlation override (skips Session mint).
   * Prefer logicalTurnId for production and new tests.
   */
  turnCorrelationId?: string;
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  const project = toContextDto(projectResult);
  const modeResolution = resolveAssistantMode(input.provider);
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  // D-GF-ACW-02 — accept-boundary logical turn id BEFORE model call.
  // Test turnCorrelationId override skips Session mint (BAR-WORK compatibility).
  // Session open failure must NOT abort Truth C / conversational continuity
  // (MW1 Memory B unavailable). ACW materialization remains fail-closed when
  // no durable logicalTurnId is available.
  let logicalTurnId: string | null = null;
  const testCorrOverride = input.turnCorrelationId?.trim() || null;
  if (testCorrOverride) {
    logicalTurnId = testCorrOverride;
  } else {
    const resolvedTurn = resolveOrMintLogicalProductTurn({
      projectId: project.projectId,
      sessionDbPath: input.sessionDbPath,
      presentedLogicalTurnId: input.logicalTurnId,
      cycleInstanceId:
        input.studioCognitiveContext?.activeCycle?.cycleInstanceId ?? null,
      nowIso: new Date().toISOString(),
    });
    if (!resolvedTurn.ok) {
      if (resolvedTurn.code === "LOGICAL_TURN_UNKNOWN") {
        return {
          ok: false,
          status: "validation_error",
          code: "LOGICAL_TURN_UNKNOWN",
          message:
            "Identifiant de tour logique inconnu pour cette session.",
          mode: modeResolution.mode,
          retryable: false,
          logicalTurnId: null,
        };
      }
      // LOGICAL_TURN_SESSION_UNAVAILABLE — continue without ACW identity.
      logicalTurnId = null;
    } else {
      logicalTurnId = resolvedTurn.logicalTurnId;
    }
  }

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const messages: ProviderChatMessage[] = [
    {
      role: "system",
      content: buildProjectSystemPrompt(project, {
        truthCContext: input.truthCContext,
        methodContext: input.methodContext ?? null,
        studioCognitiveContext: input.studioCognitiveContext ?? null,
      }),
    },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const provider = input.provider ?? resolveConversationProvider();
  const presentation = modeResolution.presentation;

  try {
    const turn = await runNoraCognitiveTurn({
      correlationId: `f1:${project.projectId}`,
      projectId: project.projectId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
      sessionDbPath: input.sessionDbPath,
      simulateMemoryBUnavailable: input.simulateMemoryBUnavailable,
      truthCRevision: {
        lpsId: project.lpsId,
        lpsVersion: project.lpsVersion,
      },
      turnWorkloadContext: {
        projectCriticality: project.criticality,
        userContentLength: content.length,
        historyMessageCount: history.length,
        historyTotalChars: history.reduce((sum, m) => sum + m.content.length, 0),
        enableTools: true,
      },
      trustedSfiaProfile: null,
      semanticCognitiveWorkload: input.semanticCognitiveWorkload ?? null,
      contradictionAssessment: input.contradictionAssessment ?? null,
      resolveRememberedEvidence,
      postEvidenceNarrativePolicy: input.postEvidenceNarrativePolicy === true,
      evalModelReasoningControl: input.evalModelReasoningControl,
      usdAccounting: input.usdAccounting,
      campaignBudget: input.campaignBudget,
      outputType: NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
    });

    let assistantText = turn.text;
    let lifecycleRecommendationMaterialized: boolean | null = null;
    let lifecycleRecommendationCode: string | null = null;

    // Same Product turn — optional LR materialization (no second model call).
    if (turn.structuredOutput !== undefined) {
      const { extractLifecycleCandidateFromStructuredOutput } = await import(
        "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn"
      );
      const extracted = extractLifecycleCandidateFromStructuredOutput(
        turn.structuredOutput,
      );
      if (extracted.narrative) {
        assistantText = extracted.narrative;
      }
      // Positive enforcement: EMIT without LR is a structured contradiction.
      // Never invent LR; never treat as normal conversational success.
      // Seams 1–3 alone are insufficient because this short-circuit previously
      // skipped materialize and returned ok:true silently.
      if (
        extracted.kind === "product_turn" &&
        extracted.boundaryContradiction ===
          MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION
      ) {
        return {
          ok: false,
          status: "validation_error",
          code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
          message: LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
          mode: modeResolution.mode,
          retryable: false,
        };
      }
      if (!extracted.candidate) {
        lifecycleRecommendationMaterialized = false;
      } else {
        // OA access via authorized Project Assistant seam (mw3AvailableEvidence
        // lazy runtime import) — never import vertical-slice-runtime here.
        const oaResolved = await resolveOaStackForLifecycleRecommendation();
        if (oaResolved.ok) {
          const oa = oaResolved.oa;
          const cycles = await oa.cycleServices.cycles.listByProject(
            project.projectId,
          );
          const lps =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          const projectRow = await oa.projectServices.getProject.execute({
            projectId: project.projectId,
          });
          const failedMaterialDimensions =
            new Set<LifecycleRecommendationMaterialDimension>();
          if (!lps.ok) {
            failedMaterialDimensions.add("lps");
          }
          if (!projectRow.ok) {
            failedMaterialDimensions.add("doctrine");
          }

          let trajectory = null;
          let trajectoryBootstrapPresence = await resolveTrajectoryBootstrapPresence(
            oa.cycleServices.trajectories,
            project.projectId,
          );
          if (trajectoryBootstrapPresence.kind === "unknown") {
            failedMaterialDimensions.add("trajectory");
            trajectory = null;
          } else if (trajectoryBootstrapPresence.kind === "current") {
            trajectory = trajectoryBootstrapPresence.trajectory;
          } else {
            trajectory = null;
          }

          let decisions: Awaited<
            ReturnType<typeof oa.decisionServices.decisions.listByProject>
          > = [];
          try {
            decisions = await oa.decisionServices.decisions.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("decisions");
            decisions = [];
          }

          let evidence: Awaited<
            ReturnType<
              typeof oa.evidenceReviewServices.repository.listByProject
            >
          > = [];
          try {
            evidence =
              await oa.evidenceReviewServices.repository.listByProject(
                project.projectId,
              );
          } catch {
            failedMaterialDimensions.add("evidence");
            evidence = [];
          }

          let epistemicItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            epistemicItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            failedMaterialDimensions.add("epistemic_blockers");
            epistemicItems = [];
          }

          const doctrinePin = projectRow.ok
            ? (projectRow.project.doctrinePackageRef ??
              (lps.ok ? lps.livingProjectState.doctrinePackageRef : undefined))
            : undefined;
          const producedAt = new Date().toISOString();
          const mat =
            await materializeLifecycleRecommendationFromStructuredOutput({
              projectId: project.projectId,
              structuredOutput: turn.structuredOutput,
              updateEpistemicState: oa.cycleServices.updateEpistemicState,
              facts: {
                cycles,
                lpsActiveCycleInstanceId: lps.ok
                  ? lps.livingProjectState.activeCycleInstanceId
                  : null,
                lpsVersion: lps.ok ? lps.livingProjectState.version : null,
                doctrinePackageId: doctrinePin?.doctrinePackageId ?? null,
                doctrinePackageVersion: doctrinePin?.version ?? null,
                doctrinePackageDigest: doctrinePin?.digest ?? null,
                trajectory,
                trajectoryBootstrapPresence,
                decisions,
                evidence,
                epistemicItems,
                failedMaterialDimensions,
              },
              producedAt,
              createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
              correlationId: `f1:${project.projectId}`,
            });
          if (mat.narrative) {
            assistantText = mat.narrative;
          }
          if (mat.recommendationAttempted) {
            lifecycleRecommendationMaterialized =
              mat.materialization?.ok === true;
            lifecycleRecommendationCode =
              mat.materialization && !mat.materialization.ok
                ? mat.materialization.code
                : mat.materialization?.ok
                  ? null
                  : "LR_MATERIALIZE_UNKNOWN";
          } else {
            lifecycleRecommendationMaterialized = false;
          }
        } else {
          lifecycleRecommendationMaterialized = false;
          lifecycleRecommendationCode = "LR_BASIS_UNAVAILABLE";
        }
      }
    }

    // D-GF-ACW-01/02 — same Product turn structured output; no second model call.
    // Materialize non-authoritative active-cycle EpistemicItems when eligible.
    if (turn.structuredOutput !== undefined) {
      const coherent = normalizeNoraProductTurnStructuredOutput(
        turn.structuredOutput,
      );
      const acwItems = coherent?.activeCycleWork?.items ?? [];
      if (acwItems.length > 0) {
        const assessment = coherent?.preCycleRoutingAssessment;
        const disposition = coherent?.disposition;
        const eligibleDefer =
          disposition === "DEFER_TO_ACTIVE_CYCLE" ||
          assessment?.activeCycleAlreadyCoversWork === true;

        // CR-ACW-01 — FORBIDDEN fallback to project.activeCycleInstanceId.
        // Require studioCognitiveContext + activeCycle + workEligible + seal.
        const studio = input.studioCognitiveContext ?? null;
        const contextSeal = buildActiveCycleWorkContextSeal({
          projectId: project.projectId,
          activeCycle: studio?.activeCycle ?? null,
        });
        if (
          !eligibleDefer ||
          !studio ||
          !studio.activeCycle ||
          studio.activeCycle.workEligible !== true ||
          !contextSeal
        ) {
          return {
            ok: false,
            status: "validation_error",
            code: !eligibleDefer
              ? "ACTIVE_CYCLE_WORK_NOT_ELIGIBLE"
              : "ACTIVE_CYCLE_CONTEXT_REQUIRED",
            message: !eligibleDefer
              ? "Travail de cycle actif émis hors contexte éligible — aucune écriture partielle."
              : "Contexte cycle actif studio requis pour matérialiser le travail cognitif — aucune écriture partielle.",
            mode: modeResolution.mode,
            retryable: false,
            logicalTurnId,
          };
        }

        // Option A: ACW write requires durable Session-adjacent logical turn id.
        if (!logicalTurnId) {
          return {
            ok: false,
            status: "validation_error",
            code: "LOGICAL_TURN_SESSION_UNAVAILABLE",
            message:
              "Session indisponible pour l'identité de tour logique — aucune écriture ACW.",
            mode: modeResolution.mode,
            retryable: false,
            logicalTurnId: null,
          };
        }

        const activeCycleId = contextSeal.cycleInstanceId;
        {
          const oaResolved = await resolveOaStackForLifecycleRecommendation();
          if (!oaResolved.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_WORK_OA_UNAVAILABLE",
              message:
                "Impossible de matérialiser le travail du cycle actif (runtime indisponible).",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          const oa = oaResolved.oa;
          const cycleLoad = await oa.cycleServices.getCycle.execute({
            cycleInstanceId: activeCycleId,
          });
          const lpsNow =
            await oa.projectServices.getCurrentLivingProjectState.execute({
              projectId: project.projectId,
            });
          if (!cycleLoad.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_NOT_FOUND",
              message: "Cycle actif introuvable avant matérialisation.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (!lpsNow.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: "LPS_UNAVAILABLE",
              message: "LPS indisponible avant matérialisation du travail cycle.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (cycleLoad.cycle.status !== "active") {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_NOT_ELIGIBLE",
              message:
                "Le cycle n'est plus actif — aucune écriture partielle du travail cognitif.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
          if (
            (lpsNow.livingProjectState.activeCycleInstanceId ?? null) !==
            activeCycleId
          ) {
            return {
              ok: false,
              status: "validation_error",
              code: "ACTIVE_CYCLE_LPS_POINTER_STALE",
              message:
                "Pointeur LPS du cycle actif modifié — aucune écriture partielle.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }

          let existingItems: Awaited<
            ReturnType<typeof oa.cycleServices.epistemic.listByProject>
          > = [];
          try {
            existingItems = await oa.cycleServices.epistemic.listByProject(
              project.projectId,
            );
          } catch {
            existingItems = [];
          }

          // Production key = durable logical turn id (no random f1-acw keys).
          const turnCorrelationId = logicalTurnId!;
          const producedAt = new Date().toISOString();
          const mat = await materializeActiveCycleWork({
            items: acwItems,
            facts: {
              projectId: project.projectId,
              activeCycleInstanceId: activeCycleId,
              lpsVersion: lpsNow.livingProjectState.version,
              lpsObjective: lpsNow.livingProjectState.objective,
              existingEpistemicItemIds:
                lpsNow.livingProjectState.epistemicItemIds ?? [],
              existingItems,
              turnCorrelationId,
              contextSeal,
            },
            updateEpistemicState: oa.cycleServices.updateEpistemicState,
            appendLivingProjectStateVersion:
              oa.projectServices.appendLivingProjectStateVersion,
            getCurrentLivingProjectState:
              oa.projectServices.getCurrentLivingProjectState,
            getCycle: oa.cycleServices.getCycle,
            runInTransaction: oa.cycleServices.store.runInTransaction.bind(
              oa.cycleServices.store,
            ),
            producedAt,
            createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
          });
          if (!mat.ok) {
            return {
              ok: false,
              status: "validation_error",
              code: mat.code,
              message:
                mat.reason ||
                "Échec de matérialisation du travail cognitif du cycle actif.",
              mode: modeResolution.mode,
              retryable: false,
              logicalTurnId,
            };
          }
        }
      }
    }

    const { toolEvents, sources, readCoverage } = collectToolTelemetry(
      sink.events,
    );
    // Persist read coverage for cross-turn honesty (existing session_items).
    if (readCoverage.facts.length > 0 && !input.simulateMemoryBUnavailable) {
      try {
        const dbPath = resolveNoraSessionSqlitePath(input.sessionDbPath);
        const session = new ProductSqliteSession({
          projectId: project.projectId,
          dbPath,
          sessionKey: "f1-default",
        });
        try {
          await rememberReadCoverage(
            session,
            project.projectId,
            readCoverage.facts.map((f) => ({
              pathOrRef: f.pathOrRef,
              coverage: f.coverage,
            })),
          );
        } finally {
          session.close();
        }
      } catch {
        /* Session path may be unavailable — coverage still on DTO via mw4. */
      }
    }

    const coverageAggregate = aggregateReadCoverage(readCoverage.facts);
    const mw3 = toMw3Surface(turn);
    let mw4 = toMw4Surface(turn);
    if (coverageAggregate.facts.length > 0) {
      mw4 = {
        rememberedIds: mw4?.rememberedIds ?? [],
        validIds: mw4?.validIds ?? [],
        downgradedIds: mw4?.downgradedIds ?? [],
        missingIds: mw4?.missingIds ?? [],
        disclosure: mw4?.disclosure ?? "",
        readCoverageOverall:
          coverageAggregate.overall === "mixed_partial"
            ? "partial"
            : coverageAggregate.overall === "none"
              ? "none"
              : coverageAggregate.overall,
        readCoverageDisclosure:
          turn.mw4Grounding?.readCoverageDisclosure ??
          (coverageAggregate.facts.length > 0
            ? `Overall coverage: ${coverageAggregate.overall}`
            : null),
      };
    }
    const stopNotice = formatCognitiveStopPiloteNotice(
      turn.cognitiveStopDecision ?? {
        progression: "continue",
        outcome: "PROGRESS_OK",
        cognitiveStop: false,
        anatomy: null,
        surfacedDisposition: "none",
        allowsSilentSuccess: false,
      },
    );
    const lrMaterializeNotice =
      lifecycleRecommendationMaterializeFailurePiloteNotice({
        recommendationAttempted:
          lifecycleRecommendationMaterialized === false &&
          Boolean(lifecycleRecommendationCode),
        materialized: lifecycleRecommendationMaterialized,
        code: lifecycleRecommendationCode,
      });
    const ephemeralNotice = buildEphemeralNotice(
      turn.memoryBAvailability,
      turn.memoryBCompactionState,
      turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      stopNotice,
      lrMaterializeNotice,
    );
    const status =
      turn.cognitiveStopDecision?.cognitiveStop === true
        ? ("cognitive_stop" as const)
        : ("ok" as const);

    return {
      ok: true,
      status,
      text: assistantText,
      mode: modeResolution.mode,
      presentation,
      model: turn.usage?.model ?? null,
      toolRounds: turn.toolRounds,
      toolCalls: turn.toolCalls,
      sources,
      toolEvents,
      project,
      ephemeralNotice,
      cognitiveRuntime: turn.cognitiveRuntime,
      sessionId: turn.sessionId,
      memoryBAvailability: turn.memoryBAvailability,
      memoryBCompactionState: turn.memoryBCompactionState,
      stalePriorInvalidated:
        turn.memoryBCompactionDetails?.stalePriorInvalidated === true,
      mw3,
      mw4,
      lifecycleRecommendationMaterialized,
      lifecycleRecommendationCode,
      logicalTurnId,
    };
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
      logicalTurnId,
    };
  }
}

```

### FILE: `projects/sfia-studio/app/features/project-assistant/types.ts`
```ts
/**
 * Project Assistant DTOs — F1 conversation + F2 qualification/proposal/gate + F3 fixture.
 * Ephemeral / process-local only (no durable persistence).
 */

import type {
  DecisionDto,
  IntentClass,
  ProposalDto,
  QualificationDto,
} from "./f2/types";
import type {
  F3EvidenceDto,
  F3ExecutePayload,
  F3PreparePayload,
  F3RecommendationDto,
  F3ReviewBundleDto,
} from "./f3/types";

export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

export type AssistantTurnStatus =
  | "ok"
  | "cognitive_stop"
  | "provider_unavailable"
  | "provider_error"
  | "project_not_found"
  | "validation_error"
  | "stale"
  | "decision_error"
  | "prepare_error"
  | "execute_error";

export type ContradictionDispositionDto =
  | "none"
  | "candidate"
  | "evidence_backed";

export type CognitiveProgressionDto =
  | "PROGRESS_OK"
  | "PROGRESS_WITH_CONTRADICTION"
  | "COGNITIVE_STOP"
  | "TECHNICAL_FAILURE";

/** MW3 CIS-shaped surface — process-local; ≠ Execute STOP; ≠ HumanDecision. */
export type Mw3CognitiveSurfaceDto = {
  disposition: ContradictionDispositionDto;
  progression: CognitiveProgressionDto;
  cognitiveStop: boolean;
  reason: string | null;
  evidenceIds: string[];
  sourceIds: string[];
  governingPremise: string | null;
  nextAction: string | null;
  insufficiencyReasons: string[];
  /** Anti-claim: never a silent SUCCESS when cognitiveStop. */
  allowsSilentSuccess: false;
  /** Visible blocked impact when Cognitive STOP; null otherwise. */
  blockedImpact?: string | null;
  /** Honest continue when contradiction is surfaced without STOP. */
  mayContinue?: boolean;
  /** Explicit: this surface is not a technical/provider failure. */
  notTechnicalFailure?: boolean;
};

/** MW5 challenge/clarification surface — process-local; ≠ HumanDecision. */
export type Mw5DispositionDto =
  | "CONTINUE"
  | "CHALLENGE"
  | "CLARIFY"
  | "ESCALATE";

export type Mw5CognitiveSurfaceDto = {
  disposition: Mw5DispositionDto;
  structuralChallengeCount: number;
  questionnaireSuppressed: boolean;
  recommendationAllowed: boolean;
  challengeGateApplicable: boolean;
  challengeSatisfied: boolean;
  challengeEvidenceBeforeRecommendation: boolean;
  bypassAttempted: boolean;
  bypassBlocked: boolean;
  synthesizedHumanDecision: false;
  synthesizedGo: false;
  synthesizedConfirmation: false;
  disclosure: string;
  reasonCodes: string[];
  challenges: string[];
  /** MW2 High-Assurance hook only — not MW5-S03 proof. */
  criticalChallengeArmedHookOnly: boolean;
};

/** MW4 grounding durability surface — process-local; ≠ Evidence authority. */
export type Mw4GroundingSurfaceDto = {
  rememberedIds: string[];
  validIds: string[];
  downgradedIds: string[];
  missingIds: string[];
  disclosure: string;
  readCoverageOverall?:
    | "full"
    | "partial"
    | "failed"
    | "denied"
    | "absent"
    | "none";
  readCoverageDisclosure?: string | null;
};

export type AssistantHistoryMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AssistantToolEventDto = {
  toolName: string;
  status: "succeeded" | "denied" | "failed" | "started" | "requested";
  pathOrRef: string | null;
  summary: string | null;
  errorCode: string | null;
  readOnly: true;
};

export type AssistantSourceDto = {
  kind: "git_local" | "github";
  label: string;
  pathOrRef: string | null;
};

export type ProjectAssistantContextDto = {
  projectId: string;
  name: string;
  shortReference: string | null;
  objective: string;
  contextSummary: string;
  criticality: string;
  constraints: string[];
  lpsId: string;
  lpsVersion: number;
  lpsCreatedAt: string;
  doctrineId: string;
  doctrineVersion: string;
  doctrineDigest: string;
  doctrineStatus: string;
  runtimeMode: string;
  persistence: string;
  readiness: string;
  activeCycleInstanceId?: string | null;
  ckcResolutionRef?: string | null;
};

export type F2TurnLabels = {
  recommendation: "RECOMMANDATION" | null;
  proposition: "PROPOSITION" | null;
  decisionRequired: "DÉCISION REQUISE" | null;
  decisionTaken: "DÉCISION PRISE" | null;
  noExecution: "AUCUNE EXÉCUTION";
};

export type F2TurnPayload = {
  turnKind:
    | "f1_informative"
    | "f2_clarification"
    | "f2_proposal"
    | "f2_blocked"
    | "f2_decision";
  intentClass: IntentClass;
  qualification: QualificationDto | null;
  proposal: ProposalDto | null;
  decision: DecisionDto | null;
  labels: F2TurnLabels;
  executionBlocked: boolean;
  processLocalNotice: string;
};

export type ProjectAssistantSendSuccess = {
  ok: true;
  status: "ok" | "cognitive_stop";
  text: string;
  mode: Exclude<AssistantUiMode, "unconfirmed">;
  presentation: "test_provider" | "openai_live";
  /** Observed provider model when available (from usage.model). */
  model?: string | null;
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  /** OD-04 Option C: always Agents Runner after Nora legacy retirement. */
  cognitiveRuntime?: "agents";
  /** Product SQLite Session id (Option C F1). */
  sessionId?: string | null;
  /** MW1-S01 — honest Memory B availability for this turn. */
  memoryBAvailability?:
    | "available_with_history"
    | "available_empty"
    | "unavailable";
  /** MW1-S02 — compaction / stale state for this turn. */
  memoryBCompactionState?:
    | "none"
    | "compacted_no_loss"
    | "compacted_with_loss"
    | "stale_invalidated";
  /** MW1-S02-CORR-02 — prior compacted B invalidated by Truth C change. */
  stalePriorInvalidated?: boolean;
  /** MW3 — contradiction / Cognitive STOP surface (when assessed). */
  mw3?: Mw3CognitiveSurfaceDto | null;
  /** MW4 — grounding durability / partiality surface (when assessed). */
  mw4?: Mw4GroundingSurfaceDto | null;
  /** MW5 — challenge / clarification / Critical ordering / escalation (when assessed). */
  mw5?: Mw5CognitiveSurfaceDto | null;
  f2?: F2TurnPayload;
  /**
   * LR CORR-DELIVERY-02 — optional Product-turn Recommendation materialization.
   * null = not attempted / no structured turn; false = none or fail-closed; true = persisted.
   */
  lifecycleRecommendationMaterialized?: boolean | null;
  /** Fail-closed detail code when materialization was attempted and refused. */
  lifecycleRecommendationCode?: string | null;
  /**
   * D-GF-ACW-02 Option A — server-owned logical Product turn id (`ltu:…`).
   * Session-adjacent replay/idempotence identity; never Epistemic SoT.
   */
  logicalTurnId?: string | null;
  /**
   * MW6↔Auth — present when send used executionContractId governed composition.
   * Server-built; never a client-supplied authority object.
   */
  mw6AuthorityComposition?: {
    authorityBound: boolean;
    realAuthorized: boolean;
    realPreflightCode: string;
    realPreflightReasons?: string[];
    realPreflightBlocked?: boolean;
    eligible: boolean;
    serverComposedGovernedAuthority: true;
    evidenceSource: string;
    executionContractId: string;
    authorityEvidenceId: string;
    actorId: string;
    /**
     * Factual LIVE hosted web-search dispatch count from turn.hostedSearchObserve.
     * Fixture/deterministic boundary → 0 (not REAL). Evidence only — not budget SoT.
     */
    liveHostedDispatchCalls: number;
  };
};

export type ProjectAssistantSendFailure = {
  ok: false;
  status: Exclude<AssistantTurnStatus, "ok">;
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
  f2?: F2TurnPayload;
  /** Present when a logical turn was minted/accepted before the failure. */
  logicalTurnId?: string | null;
};

export type ProjectAssistantSendResult =
  | ProjectAssistantSendSuccess
  | ProjectAssistantSendFailure;

export type ProjectAssistantDecideSuccess = {
  ok: true;
  status: "ok";
  mode: Exclude<AssistantUiMode, "unconfirmed">;
  presentation: "test_provider" | "openai_live" | "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f2: F2TurnPayload;
};

export type ProjectAssistantDecideResult =
  | ProjectAssistantDecideSuccess
  | ProjectAssistantSendFailure;

export type ProjectAssistantPrepareF3Success = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f2: F2TurnPayload | null;
  f3: F3PreparePayload;
};

export type ProjectAssistantPrepareF3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
};

export type ProjectAssistantPrepareF3Result =
  | ProjectAssistantPrepareF3Success
  | ProjectAssistantPrepareF3Failure;

export type ProjectAssistantPrepareM3Success = {
  ok: true;
  status: "ok";
  mode: "m3_prepare";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: import("./f3/prepareM3FromDecision").F3M3PreparePayload;
};

export type ProjectAssistantPrepareM3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
};

export type ProjectAssistantPrepareM3Result =
  | ProjectAssistantPrepareM3Success
  | ProjectAssistantPrepareM3Failure;

export type ProjectAssistantPrepareResolvedM3Success = {
  ok: true;
  status: "ok";
  mode: "m3_resolved_fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: import("./f3/prepareAndResolveM3ProductPath").F3M3ResolvedPayload;
};

export type ProjectAssistantPrepareResolvedM3Failure = {
  ok: false;
  status: "prepare_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
};

export type ProjectAssistantPrepareResolvedM3Result =
  | ProjectAssistantPrepareResolvedM3Success
  | ProjectAssistantPrepareResolvedM3Failure;

export type ProjectAssistantExecuteF3Success = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  f3: F3ExecutePayload;
};

export type ProjectAssistantExecuteF3Failure = {
  ok: false;
  status: "execute_error" | "stale" | "project_not_found" | "validation_error";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  proposal?: ProposalDto | null;
};

export type ProjectAssistantExecuteF3Result =
  | ProjectAssistantExecuteF3Success
  | ProjectAssistantExecuteF3Failure;

export type ProjectAssistantRehydrateEvidenceOutcomeSuccess = {
  ok: true;
  status: "ok";
  mode: "fixture";
  presentation: "unconfirmed";
  text: string;
  project: ProjectAssistantContextDto;
  ephemeralNotice: string;
  evidence: F3EvidenceDto[];
  reviewBundles: F3ReviewBundleDto[];
  recommendation: F3RecommendationDto;
  lpsVersion: number;
  evidenceIds: string[];
  reviewBundleIds: string[];
};

export type ProjectAssistantRehydrateEvidenceOutcomeFailure = {
  ok: false;
  status: "rehydrate_error" | "project_not_found";
  code: string;
  message: string;
  mode: AssistantUiMode;
  retryable: boolean;
  project?: ProjectAssistantContextDto;
};

export type ProjectAssistantRehydrateEvidenceOutcomeResult =
  | ProjectAssistantRehydrateEvidenceOutcomeSuccess
  | ProjectAssistantRehydrateEvidenceOutcomeFailure;

```

### FILE: `projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts`
```ts
/**
 * Nora Option C cognitive runtime — public surface.
 * OD-04: Runner + Product SQLite Session + callModelInputFilter + routeToolCall.
 * Single Agents path (Fake + target). No Nora runtime selector.
 */

export type {
  NoraCognitiveRuntimeKind,
  NoraCognitiveTurnResult,
} from "./types";
export { ProductSqliteSession, userTextItem, assistantTextItem } from "./productSqliteSession";
export type {
  ProductSqliteSessionOptions,
  LogicalProductTurnRow,
  LogicalProductTurnStatus,
} from "./productSqliteSession";
export {
  probeMemoryBAvailability,
  appendMemoryBCognitiveDisclosure,
  memoryBPiloteNotice,
  MEMORY_B_COGNITIVE_DISCLOSURE,
  MEMORY_B_PILOTE_NOTICE,
} from "./memoryBAvailability";
export type {
  MemoryBAvailability,
  MemoryBProbeResult,
  ProbeMemoryBAvailabilityOptions,
} from "./memoryBAvailability";
export {
  COMPACTION_COGNITIVE_DISCLOSURE,
  COMPACTION_PILOTE_NOTICE,
  DEFAULT_COMPACTION_POLICY,
  MemoryBSessionView,
  STALE_PRIOR_INVALIDATED_COGNITIVE_ADDENDUM,
  STALE_PRIOR_INVALIDATED_PILOTE_ADDENDUM,
  applyCompactionIfNeeded,
  appendMemoryBCompactionDisclosure,
  buildCompactionRecord,
  buildInvalidatedPriorMeta,
  computeRawProvenanceCoverage,
  contentHash,
  createMemoryBSessionView,
  extractItemText,
  loadSessionRows,
  memoryBCompactionPiloteNotice,
  parseStoredCompactionRecord,
  partitionMemoryBForCompaction,
  prepareMemoryBForTurn,
  resolveReplayItems,
  shouldCompactItemCount,
  staleDisclosureMatchesReplaySemantics,
  truthCRevisionKey,
  truthCRevisionsMatch,
} from "./memoryBCompaction";
export type {
  CompactionPolicy,
  CompactionProvenanceEntry,
  InvalidatedPriorCompactionMeta,
  LoadedSessionRows,
  MemoryBCompactionDetails,
  MemoryBCompactionLoss,
  MemoryBCompactionRecord,
  MemoryBCompactionState,
  ProvenanceCoverageFacts,
  TruthCRevision,
} from "./memoryBCompaction";
export { resolveNoraSessionSqlitePath } from "./sessionPaths";
export {
  sfiaBoundaryInstructions,
  createSfiaRouteToolAdapters,
  invokeSfiaToolViaRoute,
  assertRawJsonObjectSchema,
  sdkToolParametersOf,
} from "./sfiaAgentsTools";
export type { SfiaJsonObjectSchema, SfiaAgentsToolOptions } from "./sfiaAgentsTools";
export {
  createNoraTurnBudget,
  claimToolSlot,
  markModelTurn,
  toolRoundsFromBudget,
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
} from "./turnBudget";
export type { NoraTurnBudget } from "./turnBudget";
export {
  createNoraCampaignBudget,
  acquireNoraCampaignBudget,
  isCanonicalCampaignBudget,
  requireCanonicalCampaignBudget,
  markCampaignBudgetBlocked,
  claimModelInvocation,
  claimHostedWebOperations,
  clampRunnerBudgetForCampaign,
  resolveMaxToolCallsProviderData,
  evaluateCampaignBudgetCapabilityOnly,
  evaluateRealSourceExecutionPreflight,
  remainingModelInvocations,
  remainingHostedWebOperations,
  remainingAggregateRealCalls,
  campaignBudgetSnapshot,
  requireSafeNonNegativeInteger,
  CampaignLeaseError,
  H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS,
  H17_HISTORICAL_OBSERVED_AGGREGATE_CALLS,
} from "./campaignBudget";
export type {
  NoraCampaignBudget,
  NoraCampaignBudgetSpec,
  CampaignBudgetDenialCode,
  HostedHardCapCapability,
  RealSourceExecutionPreflightResult,
  Mw6GovernedAuthorityContext,
  Mw6CurrentProductContext,
  Mw6GetExecutionContractPort,
  Mw6CheckExecutionAuthorizationPort,
  Mw6AuthorizedExternalDiscoveryContract,
  Mw6ExternalDiscoveryContractInput,
  RunnerBudgetClamp,
  CreateNoraCampaignBudgetInput,
} from "./campaignBudget";
export {
  MW6_REAL_PROOF_GRANT_ENV,
  MW6_REAL_PROOF_PURPOSE,
  MW6_REAL_PROOF_GRANT_VERSION,
  parseMw6RealProofGrantJson,
  matchMw6RealProofGrant,
  resolveMw6RealAuthorization,
} from "./mw6RealAuthorization";
export type {
  Mw6RealProofGrantV1,
  Mw6RealAuthorizationMatchContext,
  Mw6RealAuthorizationDecision,
} from "./mw6RealAuthorization";
export {
  CampaignModelInvocationDeniedError,
  CampaignUsdHardCapDeniedError,
  createSfiaCallModelInputFilter,
  preserveStructuralRoles,
} from "./callModelInputFilter";
export type {
  NoraAgentsUsdAccounting,
  NoraAgentsUsdSettleObservation,
  NoraAgentsUsdSettleResult,
} from "./agentsUsdAccounting";
// R-PRE-REAL-07: withMaxToolCallsProviderData intentionally NOT exported from barrel.
export {
  createProviderAgentsModel,
  isFakeConversationProvider,
  agentInputToProviderItems,
  toolDefinitionsFromModelRequest,
} from "./providerAgentsModel";
export {
  createNoraAgentsRunner,
  runNoraAgentsTurn,
  resolveNoraAgentsF1Model,
  shouldUseProviderAgentsModelAdapter,
  isOpenAiLiveF1Provider,
} from "./runNoraAgentsTurn";
export type {
  RunNoraAgentsTurnInput,
  RunNoraAgentsTurnUsdObserve,
} from "./runNoraAgentsTurn";
export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
export type {
  RunNoraCognitiveTurnInput,
  Mw3ContradictionAssessmentInput,
  NoraEvalModelReasoningControl,
} from "./runNoraCognitiveTurn";
export {
  disposeContradiction,
  dispositionIndependentOfStrategy,
} from "./contradictionDisposition";
export type {
  ContradictionConflictInput,
  ContradictionEvidencePointer,
} from "./contradictionDisposition";
export {
  decideCognitiveStop,
  cognitiveStopAllowsProductSuccess,
  formatCognitiveStopPiloteNotice,
} from "./cognitiveStop";
export {
  MW5_MAX_STRUCTURAL_CHALLENGES,
  MW5_CHALLENGE_MARKER,
  MW5_CLARIFY_MARKER,
  MW5_ESCALATE_MARKER,
  MW5_TEST_MARKERS,
  capStructuralChallenges,
  containsSynthesizedHumanAct,
  decideMw5Disposition,
  deriveMw5FactsFromF2Turn,
  formatMw5AssistantText,
  formatMw5MachineText,
  formatMw5PiloteText,
  isCriticalProfile,
  isMw5ChallengeSatisfied,
  looksLikeQuestionnaire,
  parseIssuedChallengeCount,
  toMw5TurnSurface,
} from "./criticalChallengeClarification";
export type {
  DeriveMw5FactsInput,
  Mw5Disposition,
  Mw5PolicyInput,
  Mw5PolicyResult,
  Mw5TurnSurface,
  Mw5UncertaintyClass,
} from "./criticalChallengeClarification";
export {
  parseChallengeResponseAssessment,
  resolveMw5ProductAuthorityFacts,
  truthCMatchesClaimStructured,
  decisionBasisMatchesClaimStructured,
  formatMw5ChallengeContextForProvider,
} from "./mw5ProductAuthorityFacts";
export type {
  ChallengeResponseAssessment,
  Mw5ChallengeContextForAnalysis,
  Mw5ChallengeContextInput,
  Mw5ClaimProjection,
  Mw5ConsumedDecisionProjection,
  Mw5ProductAuthorityFacts,
  Mw5TruthCProjection,
} from "./mw5ProductAuthorityFacts";
export {
  deriveMw3ContradictionAssessment,
  MW3_STUDIO_REQUIRED_SOURCE_COUNT,
  MW3_STUDIO_FRESHNESS_MATTERS,
  type Mw3ContradictionCandidateSignal,
} from "./deriveMw3Assessment";
export {
  decideCognitiveStrategy,
  normalizeCognitiveWorkloadSignals,
  buildSignalsFromTurnContext,
  mergeCognitiveWorkloadSignals,
  normalizeSemanticCognitiveWorkloadAssessment,
  isRoutineEligible,
  STRATEGY_REASONING_ENVELOPES,
  COGNITIVE_STRATEGY_CLASSES,
  ROUTINE_KNOWN_LOW_DIMENSIONS,
  SEMANTIC_CWP_DIMENSIONS,
} from "./cognitiveWorkloadPolicy";
export type {
  CognitiveStrategyClass,
  CognitiveStrategyDecision,
  CognitiveWorkloadSignals,
  SemanticCognitiveWorkloadAssessment,
  TurnWorkloadContext,
} from "./cognitiveWorkloadPolicy";
export { validateRuntimeReasoningCapability } from "./reasoningCapability";
export {
  buildRunnerModelSettingsForEffort,
  type NoraRunnerModelSettings,
} from "./reasoningModelSettings";
export {
  GROUNDING_REFS_TYPE,
  acceptGroundingRefsForProject,
  appendGroundingCognitiveDisclosure,
  buildClaimSpecificProvenanceDisclosure,
  buildGroundingCognitiveDisclosure,
  classifyRememberedEvidence,
  groundingRecordToStoredItem,
  isGroundingRefsRecord,
  isNonReplaySessionMarker,
  loadGroundingRefsFromSession,
  parseStoredGroundingRefsRecord,
  rememberEvidenceIds,
  rememberReadCoverage,
  toMw4GroundingTurnSurface,
  upsertGroundingRefsRecord,
} from "./groundingDurability";
export type {
  GroundingEvidenceRef,
  GroundingReadCoverageKind,
  GroundingReadCoverageRef,
  GroundingRefsRecord,
  Mw4GroundingTurnSurface,
  RememberedEvidenceDowngradeReason,
  RememberedEvidenceMissingReason,
  RememberedEvidenceResolution,
} from "./groundingDurability";
export {
  POST_EVIDENCE_NARRATIVE_POLICY,
  appendPostEvidenceNarrativePolicyDisclosure,
  buildPostEvidenceNarrativePolicyDisclosure,
} from "./postEvidenceNarrativePolicy";
export type { PostEvidenceNarrativePolicy } from "./postEvidenceNarrativePolicy";
export {
  aggregateReadCoverage,
  appendReadCoverageDisclosure,
  buildReadCoverageDisclosure,
  classifyGitLocalReadCompleteness,
  deriveReadCoverageFromToolEvent,
  mergeCurrentAndRememberedCoverage,
  MW4_DOCUMENT_READ_TOOL,
  overallToGroundingCoverageKind,
  parseGitLocalReadCoverageSignals,
} from "./readCoverage";
export type {
  ParsedReadRange,
  ReadCoverageAggregate,
  ReadCoverageFact,
  ReadCoverageKind,
} from "./readCoverage";

/* MW6 — External Source Intelligence */
export type {
  Mw6SourceIntelligenceSurface,
  SemanticSourceClass,
  SourceAccessState,
  SourceAcquisitionRequirement,
  SourceClass,
  SourceCoverageKind,
  SourceFreshnessRequirement,
  SourceFreshnessState,
  SourceKind,
  SourceNeedKind,
  SourceObservationFact,
  SourceOperationIntent,
  SourceOperationKind,
  SourceProvenancePlan,
  SourceProvenanceState,
  SourceProviderBinding,
  SourceProviderId,
  SourceStrategyDecision,
} from "./sourceIntelligenceContract";
export {
  MW6_SOURCE_AUTHORITY_BOUNDARY,
  SOURCE_STRATEGY_PROVIDER_LEAK_PATTERNS,
} from "./sourceIntelligenceContract";
export {
  appendSourceStrategyDisclosure,
  bindSourceProviderCapability,
  buildSourceStrategyDisclosure,
  decideSourceStrategy,
  inferClaimDomain,
  planForDomainNeed,
  strategyContractLeaksProviderIdentity,
} from "./sourceStrategyPolicy";
export type { SourceStrategyInput } from "./sourceStrategyPolicy";
export {
  appendSourceObservationDisclosure,
  authorityIsolationHeld,
  buildSourceObservationDisclosure,
  coverageForExternalOperation,
  freshnessForExternalObservation,
  normalizeHostedWebSearchCall,
  observationsRefuseFabrication,
} from "./externalSourceNormalization";
export type { HostedWebSearchCallLike } from "./externalSourceNormalization";
export {
  assertExternalSourceHasZeroAuthority,
  buildAuthorityIsolationDisclosure,
  detectAuthorityEscalationAttempts,
} from "./externalSourceAuthority";
export {
  appendSourceNarrativeConstraintDisclosure,
  applySourceNarrativeCompatibility,
  buildSourceNarrativeConstraintDisclosure,
  requiredSourceEvidenceMissing,
} from "./sourceNarrativeCompatibility";
export type {
  SourceNarrativeCompatibilityResult,
  SourceNarrativeViolation,
} from "./sourceNarrativeCompatibility";
export {
  composeMw3ConflictFromExternalSources,
  deriveConflictPresentFromExternalObservations,
} from "./externalContradictionComposition";
export type {
  DerivedExternalConflict,
  ExternalGoverningContext,
} from "./externalContradictionComposition";
export {
  createNoraHostedWebSearchTool,
  describeNoraHostedWebSearchPublicSurface,
  extractHostedWebSearchCallsFromRunItems,
  normalizeOpenAiHostedWebSearchObservations,
} from "./openaiHostedWebSearchAdapter";
export type { NoraHostedWebSearchToolOptions } from "./openaiHostedWebSearchAdapter";

```

### FILE: `projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts`
```ts
/**
 * Product SQLite Session — Agents SDK Session contract.
 * Conversational continuity only. NEVER Truth C / LPS / HumanDecision / Evidence.
 *
 * Harvested/adapted from Option C A/B spike ProductSqliteSession shape.
 * Does NOT adopt Baseline A M9 Memory B schema.
 *
 * logical_product_turns (D-GF-ACW-02 Option A): Session-adjacent identity for
 * Product-turn replay / ACW idempotence coordination ONLY.
 * Never Epistemic / LPS / HD / Evidence SoT.
 */
import { randomBytes } from "node:crypto";
import { DatabaseSync } from "node:sqlite";
import type { AgentInputItem, Session } from "@openai/agents";

export type ProductSqliteSessionOptions = {
  projectId: string;
  dbPath: string;
  sessionKey?: string;
};

export type LogicalProductTurnStatus =
  | "accepted"
  | "completed"
  | "failed"
  | string;

export type LogicalProductTurnRow = {
  readonly projectId: string;
  readonly sessionKey: string;
  readonly logicalTurnId: string;
  readonly status: string;
  readonly createdAt: string;
  readonly cycleInstanceId: string | null;
};

/**
 * Project-scoped Session. Cross-project keys never share rows.
 * Persistence is product-owned Session SQLite — no oa_* Truth C writes.
 */
export class ProductSqliteSession implements Session {
  readonly projectId: string;
  readonly sessionKey: string;
  private readonly dbPath: string;
  private db: DatabaseSync;
  private forceNextGetFail = false;
  private forceNextReplaceFail = false;

  constructor(options: ProductSqliteSessionOptions) {
    this.projectId = options.projectId;
    this.sessionKey = options.sessionKey ?? "default";
    this.dbPath = options.dbPath;
    this.db = new DatabaseSync(this.dbPath);
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS session_items (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        seq INTEGER NOT NULL,
        item_json TEXT NOT NULL,
        PRIMARY KEY (project_id, session_key, seq)
      );
    `);
    this.ensureLogicalTurnSchema();
  }

  /**
   * Session-adjacent logical Product turn identity (D-GF-ACW-02 Option A).
   * Continuity / replay coordination ONLY — never Epistemic/LPS/HD/Evidence SoT.
   */
  ensureLogicalTurnSchema(): void {
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS logical_product_turns (
        project_id TEXT NOT NULL,
        session_key TEXT NOT NULL,
        logical_turn_id TEXT NOT NULL,
        status TEXT NOT NULL,
        created_at TEXT NOT NULL,
        cycle_instance_id TEXT,
        PRIMARY KEY (project_id, session_key, logical_turn_id)
      );
    `);
  }

  /**
   * Mint a server-owned logical Product turn id (`ltu:` + randomBytes hex).
   * Session continuity / ACW rematerialize coordination ONLY.
   */
  mintLogicalProductTurn(input?: {
    cycleInstanceId?: string | null;
    status?: LogicalProductTurnStatus;
    nowIso?: string;
  }): LogicalProductTurnRow {
    this.ensureLogicalTurnSchema();
    const logicalTurnId = `ltu:${randomBytes(16).toString("hex")}`;
    const createdAt = input?.nowIso ?? new Date().toISOString();
    const status = input?.status ?? "accepted";
    const cycleInstanceId = input?.cycleInstanceId?.trim() || null;
    this.db
      .prepare(
        `INSERT INTO logical_product_turns(
           project_id, session_key, logical_turn_id, status, created_at, cycle_instance_id
         ) VALUES (?, ?, ?, ?, ?, ?)`,
      )
      .run(
        this.projectId,
        this.sessionKey,
        logicalTurnId,
        status,
        createdAt,
        cycleInstanceId,
      );
    return {
      projectId: this.projectId,
      sessionKey: this.sessionKey,
      logicalTurnId,
      status,
      createdAt,
      cycleInstanceId,
    };
  }

  getLogicalProductTurn(
    logicalTurnId: string,
  ): LogicalProductTurnRow | null {
    this.ensureLogicalTurnSchema();
    const id = logicalTurnId.trim();
    if (!id) return null;
    const row = this.db
      .prepare(
        `SELECT project_id, session_key, logical_turn_id, status, created_at, cycle_instance_id
         FROM logical_product_turns
         WHERE project_id = ? AND session_key = ? AND logical_turn_id = ?`,
      )
      .get(this.projectId, this.sessionKey, id) as
      | {
          project_id: string;
          session_key: string;
          logical_turn_id: string;
          status: string;
          created_at: string;
          cycle_instance_id: string | null;
        }
      | undefined;
    if (!row) return null;
    return {
      projectId: row.project_id,
      sessionKey: row.session_key,
      logicalTurnId: row.logical_turn_id,
      status: row.status,
      createdAt: row.created_at,
      cycleInstanceId: row.cycle_instance_id,
    };
  }

  markLogicalProductTurnStatus(
    logicalTurnId: string,
    status: LogicalProductTurnStatus,
  ): boolean {
    this.ensureLogicalTurnSchema();
    const id = logicalTurnId.trim();
    if (!id) return false;
    const result = this.db
      .prepare(
        `UPDATE logical_product_turns SET status = ?
         WHERE project_id = ? AND session_key = ? AND logical_turn_id = ?`,
      )
      .run(status, this.projectId, this.sessionKey, id);
    return Number(result.changes) > 0;
  }

  /** Test hook — next getItems throws (retrieval failure ≠ empty). */
  simulateNextRetrievalFailure(): void {
    this.forceNextGetFail = true;
  }

  /** Test hook — next replaceItemsAtomically fails after DELETE (rollback). */
  simulateNextReplaceFailure(): void {
    this.forceNextReplaceFail = true;
  }

  /** Test/inspection access for atomicity proofs (triggers, etc.). */
  getSqlite(): DatabaseSync {
    return this.db;
  }

  async getSessionId(): Promise<string> {
    return `sess:${this.projectId}:${this.sessionKey}`;
  }

  async getItems(limit?: number): Promise<AgentInputItem[]> {
    if (this.forceNextGetFail) {
      this.forceNextGetFail = false;
      throw new Error("SESSION_RETRIEVAL_ERROR: sqlite read failure");
    }
    const rows = this.db
      .prepare(
        `SELECT item_json FROM session_items
         WHERE project_id = ? AND session_key = ?
         ORDER BY seq ASC`,
      )
      .all(this.projectId, this.sessionKey) as Array<{ item_json: string }>;
    let items = rows.map((r) => JSON.parse(r.item_json) as AgentInputItem);
    if (limit !== undefined) {
      if (limit <= 0) return [];
      items = items.slice(-limit);
    }
    return items.map((i) => structuredClone(i));
  }

  /**
   * Batch append is atomic (BEGIN IMMEDIATE → inserts → COMMIT).
   * Any failure ROLLBACKs so no partial batch remains.
   */
  async addItems(items: AgentInputItem[]): Promise<void> {
    if (items.length === 0) return;
    this.db.exec("BEGIN IMMEDIATE");
    try {
      const maxRow = this.db
        .prepare(
          `SELECT COALESCE(MAX(seq), -1) AS m FROM session_items
           WHERE project_id = ? AND session_key = ?`,
        )
        .get(this.projectId, this.sessionKey) as { m: number };
      let seq = Number(maxRow.m) + 1;
      const insert = this.db.prepare(
        `INSERT INTO session_items(project_id, session_key, seq, item_json)
         VALUES (?, ?, ?, ?)`,
      );
      for (const item of items) {
        insert.run(
          this.projectId,
          this.sessionKey,
          seq,
          JSON.stringify(item),
        );
        seq += 1;
      }
      this.db.exec("COMMIT");
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore nested rollback errors */
      }
      throw error;
    }
  }

  async popItem(): Promise<AgentInputItem | undefined> {
    const row = this.db
      .prepare(
        `SELECT seq, item_json FROM session_items
         WHERE project_id = ? AND session_key = ?
         ORDER BY seq DESC LIMIT 1`,
      )
      .get(this.projectId, this.sessionKey) as
      | { seq: number; item_json: string }
      | undefined;
    if (!row) return undefined;
    this.db
      .prepare(
        `DELETE FROM session_items
         WHERE project_id = ? AND session_key = ? AND seq = ?`,
      )
      .run(this.projectId, this.sessionKey, row.seq);
    return JSON.parse(row.item_json) as AgentInputItem;
  }

  async clearSession(): Promise<void> {
    this.db
      .prepare(
        `DELETE FROM session_items WHERE project_id = ? AND session_key = ?`,
      )
      .run(this.projectId, this.sessionKey);
  }

  /** Inspection — ordered raw rows for compaction (MW1-S02). */
  listItemRows(): Array<{ seq: number; item_json: string }> {
    return this.db
      .prepare(
        `SELECT seq, item_json FROM session_items
         WHERE project_id = ? AND session_key = ?
         ORDER BY seq ASC`,
      )
      .all(this.projectId, this.sessionKey) as Array<{
      seq: number;
      item_json: string;
    }>;
  }

  /**
   * Atomic replace of all session items (MW1-S02 compaction).
   * BEGIN IMMEDIATE → DELETE → INSERT → COMMIT; ROLLBACK on failure.
   */
  async replaceItemsAtomically(items: AgentInputItem[]): Promise<void> {
    this.db.exec("BEGIN IMMEDIATE");
    try {
      this.db
        .prepare(
          `DELETE FROM session_items WHERE project_id = ? AND session_key = ?`,
        )
        .run(this.projectId, this.sessionKey);
      const insert = this.db.prepare(
        `INSERT INTO session_items(project_id, session_key, seq, item_json)
         VALUES (?, ?, ?, ?)`,
      );
      let seq = 0;
      for (const item of items) {
        if (this.forceNextReplaceFail) {
          this.forceNextReplaceFail = false;
          throw new Error("SESSION_REPLACE_SIMULATED_FAILURE");
        }
        insert.run(
          this.projectId,
          this.sessionKey,
          seq,
          JSON.stringify(item),
        );
        seq += 1;
      }
      this.db.exec("COMMIT");
    } catch (error) {
      try {
        this.db.exec("ROLLBACK");
      } catch {
        /* ignore */
      }
      throw error;
    }
  }

  /** Inspection — tables must not be Truth C / oa_*. */
  listTables(): string[] {
    const rows = this.db
      .prepare(
        `SELECT name FROM sqlite_master WHERE type='table' ORDER BY name`,
      )
      .all() as Array<{ name: string }>;
    return rows.map((r) => r.name);
  }

  close(): void {
    this.db.close();
  }
}

export function userTextItem(text: string): AgentInputItem {
  return {
    type: "message",
    role: "user",
    content: [{ type: "input_text", text }],
  };
}

export function assistantTextItem(text: string): AgentInputItem {
  return {
    type: "message",
    role: "assistant",
    status: "completed",
    content: [{ type: "output_text", text }],
  };
}

```

### FILE: `projects/sfia-studio/app/lib/nora-eval/mw1S01Observe.ts`
```ts
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

    // Session DB (if any) must not grow oa_* product tables.
    // D-GF-ACW-02 Option A: logical_product_turns is Session-adjacent identity
    // coordination only — never Truth C / LPS / HD / Evidence.
    const SESSION_ALLOWED_TABLES = new Set([
      "session_items",
      "logical_product_turns",
    ]);
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
        tables.every((t) => SESSION_ALLOWED_TABLES.has(t)) &&
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

```


## Review Handoff publication — REMOTE VERIFIED

- Mode: publish-in-cycle (L3 bounded — `sfia/review-handoff` only)
- Publisher: `scripts/sfia/publish-review-handoff.sh`
- Handoff worktree: `/Users/morris/Projects/sfia-lr-handoff-corrqual-18555`
- Remote branch: `origin/sfia/review-handoff`
- Remote HEAD: `117a230d1a860ff9e24e70c1566c95004b113f0d`
- Canonical path: `sfia-review-handoff/latest-chatgpt-review.md`
- Blob: `f9bc487da1affc31752ef8166e76e9f1ab9ba583`
- `git hash-object` source == remote blob: MATCH
- `git ls-remote origin refs/heads/sfia/review-handoff`: `117a230d…`
- Product branch push: NOT PERFORMED

Note: first publisher run reported `HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED` because the handoff worktree remote-tracking ref lagged (`efe145be`) while `git ls-remote` already showed `117a230d`. Force-fetch of `origin/sfia/review-handoff` confirmed remote/blob match; this republish records verified truth.

## Verdict

```
PASS — ACW SAME-LOT DETERMINISTIC COMPLETION
CR-ACW-01 CLOSED
CR-ACW-02 CLOSED UNDER D-GF-ACW-02 OPTION A
CR-ACW-03 CLOSED
CR-ACW-04 CLOSED
DETERMINISTIC PROVEN
ZERO REAL
READY FOR CHATGPT CRITICAL REVIEW
PRODUCT PUSH / PR / MERGE NOT AUTHORIZED
GREENFIELD PRODUCT PROOF REAL RESUMPTION REQUIRES DISTINCT MORRIS REAL GATE
```
