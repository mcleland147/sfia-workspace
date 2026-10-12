# SFIA STUDIO — P6-MIN-09 DOCUMENTARY COGNITIVE RELIABILITY CORRECTION 01

**Review Pack level:** FULL
**Cycle:** 8 — Delivery / implémentation (parent QA: 9)
**Profile:** CRITICAL
**Typologie:** EVOL
**Mode:** DETERMINISTIC ONLY — ZERO REAL OpenAI
**Incident ref:** P6-MIN-09-REAL-DOC-FAILURE-RCD-01
**Horodatage:** 2026-10-12 23:00:46 CEST

---

## A. Horodatage Europe/Paris

2026-10-12 23:00:46 CEST

## B. Identification et qualification

| Champ | Valeur |
| --- | --- |
| Projet | SFIA Studio |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Campagne | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 |
| Milestone | P6 — GLOBAL INTEGRATED PRODUCT QA |
| Scénario | P6-MIN-09 — Guided Document Review |
| Lot | P6-MIN-09 DOCUMENTARY COGNITIVE RELIABILITY CORRECTION 01 |
| CKC Delivery | `sfia-v3-framing/ckc/08-delivery-implementation.md` |
| Runtime v3 | NON ADOPTED |

## C. GO Morris consommé

GO 2026-10-12 — lot correctif unique RCD-01.

Autorisé: implémentation locale, tests D0, Review Pack FULL, handoff L3.
Non autorisé: architecture nouvelle, FinOps ceiling raise, REAL T1, commit/push/PR/merge projet, PASS GDR.

## D. Git Truth Check

| Check | Observé |
| --- | --- |
| Delivery worktree | `/Users/morris/Projects/sfia-workspace-p6-min09-documentary-cognitive-reliability-01` |
| Branche | `fix/p6-min09-documentary-cognitive-reliability-01` |
| HEAD / origin/main | `b826526ce5531f73ec1f2013443c55e18155cbc2` |
| Baseline attendue | `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` — MATCH |
| Campagne humaine :3020 | NON MODIFIÉE (Studio PID actif préservé) |
| DOC-PR577 (rec01) | NON TOUCHÉE (DEFER) |

```
git status --short
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/platform/observability/types.ts
 M projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
 M projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
 M projects/sfia-studio/app/lib/platform/tools/types.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts

git diff --name-status
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/platform/observability/types.ts
M	projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
M	projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
M	projects/sfia-studio/app/lib/platform/tools/types.ts

untracked:
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts

```

## E. Sources et convergence

Sources lues: Build Doctrine, Roadmap, Product Completion C1, doctrine v3 30–35/37, Nora trajectory 08, Product Simplification P1§12.6 / P2§17 / P6§Z/AF/AQ/AR, CKC 08/09, processus v2.6, RCD-01 handoff `b1617c03` / blob `16210b07`.

Capacité: analyse documentaire gouvernée Nora dans Product Operating Loop.
KEEP: Product loop, Agents Runner, Session, P0, P2 (native RunState), campaign FinOps ceiling=10.
ADAPT: AdaptiveTurnBudget hints, GitLocalReadAdapter signals, ToolRouter data, readCoverage, softMaxTurns restitution, EventSink observe.
NONE: moteur documentaire parallèle.

## F. Diagnostic RCD-01 de référence

CONFIRMED: 8 lectures, 0 synthèse, maxTurns, incomplete, redondances, couverture partielle.
STRONGLY SUPPORTED: Focused/8, stratégie lecture inefficace, cap 12k, budget brûlé sans restitution.
NOT OBSERVABLE (pré-correctif): model/effort/strategyClass/segments persistés.
REGRESSION: SUSPECTED / NOT DEMONSTRATED.

hasMore ≠ truncation (corrigé dans ce lot).

## G. OpenAI Capability Fit Check

| Capacité | Qualification |
| --- | --- |
| Agents Runner | KEEP |
| RunState resume (P2) | KEEP |
| Session every segment | KEEP |
| tool invocation git_local_read_file | ADAPT (richer result) |
| model-turn limits / soft errorHandlers | ADAPT (honest disclosure) |
| structured output | KEEP |
| modelSettings / reasoning | KEEP |
| Second orchestrator / doc engine | REJECT |
| Ceiling >10 / durable RunState | DEFER — Morris FinOps/architecture |

## H. Architecture conservée

Aucun second orchestrateur. Aucune persistence RunState cross-restart. Aucune migration DB. Plafond FinOps 10 inchangé. CT_MAX_TOOL_RESULT_CHARS=12000 inchangé.

## I. Delta minimal retenu

1. **A Observabilité** — EventSink `ADAPTIVE_BUDGET_OBSERVED` + `CONTINUATION_OBSERVED`.
2. **B Qualification** — mono-fichier naturel → toolDependency=high + reasoningDepth=medium (pas sourceBreadth=high).
3. **C Lecture** — requested/returned/truncated/documentHasMore/nextStartLineHint + tool description.
4. **D Couverture** — parse nouveau summary; hasMore≠truncated; `unionReturnedLineSpans`.
5. **E Budget/continuation** — plafond 10; P2 inchangé; guidance documentary.
6. **F Restitution** — softMaxTurns / MaxTurnsExceeded → divulgation honnête des plages retournées (jamais synthèse inventée).

## J–O. Modifications par axe

Voir sections P/R (fichiers + diffs complets). Résumé:

- J Axe A: `observability/types.ts`, `runNoraAgentsTurn.ts` emit
- K Axe B: `adaptiveTurnBudget.ts` (+ test P1)
- L Axe C: `gitLocalReadAdapter.ts`, `toolRouter.ts`, `types.ts` tool description
- M Axe D: `readCoverage.ts` (+ union)
- N Axe E: guidance `documentaryReadGuidance.ts` via `runNoraCognitiveTurn.ts`; P2 KEEP
- O Axe F: `documentaryBudgetExhausted.ts` branché soft/hard maxTurns

## P. Fichiers créés/modifiés

### Créés (contenu complet ci-dessous)

#### `projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts`

```typescript
/**
 * Bounded documentary-read guidance appended to system instructions when the
 * Pilot request is a natural mono-file Git synthesis mission.
 *
 * Not a parallel document engine — advisory only. OpenAI-native-first (R22).
 */

export const DOCUMENTARY_READ_GUIDANCE_BLOCK = [
  "=== DOCUMENTARY READ GUIDANCE (bounded / native tools) ===",
  "- Prefer startLine/endLine windows sized to stay under the tool character cap.",
  "- truncated=true ⇒ the requested range was cut; continue from nextStartLineHint.",
  "- documentHasMore=true with truncated=false ⇒ the range was fully returned; later lines remain.",
  "- Do not re-read already returned prefixes; advance with nextStartLineHint.",
  "- Before the mission model-turn budget ends, write a clearly PARTIAL synthesis of portions actually returned.",
  "- Never claim full-document analysis without FULL returned coverage L1–total and no truncation.",
].join("\n");

export function appendDocumentaryReadGuidance(
  systemInstructions: string,
  enabled: boolean,
): string {
  if (!enabled) return systemInstructions;
  const base = systemInstructions.trim();
  if (base.includes("DOCUMENTARY READ GUIDANCE")) return systemInstructions;
  return `${base}\n\n${DOCUMENTARY_READ_GUIDANCE_BLOCK}`;
}
```

#### `projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts`

```typescript
/**
 * Honest Product text when mission maxTurns is exhausted without extractable
 * assistant synthesis. Never invents document content from reasoning/tools.
 */
import {
  parseGitLocalReadCoverageSignals,
  unionReturnedLineSpans,
  type ReadCoverageFact,
} from "./readCoverage";

export const MODEL_TURN_BUDGET_REACHED_STOCK =
  "Model-turn budget reached (maxTurns).";

type ToolLikeItem = {
  type?: string;
  name?: string;
  rawItem?: { name?: string; type?: string };
  output?: unknown;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function extractToolResultPayload(item: ToolLikeItem): {
  summary?: string;
  data?: Record<string, unknown>;
} | null {
  const output = item.output;
  if (typeof output === "string") {
    try {
      const parsed = JSON.parse(output) as Record<string, unknown>;
      return {
        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
        data: asRecord(parsed.data) ?? undefined,
      };
    } catch {
      return null;
    }
  }
  const outObj = asRecord(output);
  if (!outObj) return null;
  if (typeof outObj.text === "string") {
    try {
      const parsed = JSON.parse(outObj.text) as Record<string, unknown>;
      return {
        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
        data: asRecord(parsed.data) ?? undefined,
      };
    } catch {
      return { summary: outObj.text.slice(0, 240) };
    }
  }
  return {
    summary: typeof outObj.summary === "string" ? outObj.summary : undefined,
    data: asRecord(outObj.data) ?? outObj,
  };
}

/**
 * Build coverage facts from Runner newItems / Session-like tool results.
 */
export function collectReadFactsFromRunItems(
  items: unknown[],
): ReadCoverageFact[] {
  const facts: ReadCoverageFact[] = [];
  for (const raw of items) {
    const item = asRecord(raw) as ToolLikeItem | null;
    if (!item) continue;
    const name =
      item.name ??
      item.rawItem?.name ??
      (typeof (item as { toolName?: string }).toolName === "string"
        ? (item as { toolName?: string }).toolName
        : undefined);
    const type = item.type ?? item.rawItem?.type;
    const isResult =
      type === "function_call_result" ||
      type === "tool_call_output_item" ||
      type === "function_call_output";
    if (!isResult && name !== "git_local_read_file") continue;
    if (name && name !== "git_local_read_file") continue;
    if (name !== "git_local_read_file" && !isResult) continue;

    const payload = extractToolResultPayload(item);
    if (!payload) continue;
    const data = payload.data ?? {};
    const summary =
      payload.summary ??
      (typeof data.summary === "string" ? data.summary : undefined);
    const path =
      (typeof data.path === "string" && data.path) ||
      (summary ? parseGitLocalReadCoverageSignals({ summary })?.documentPath : null);
    if (!path && !summary) continue;

    const parsed = parseGitLocalReadCoverageSignals({
      summary: summary ?? null,
      pathOrRef:
        typeof data.returnedStartLine === "number" &&
        typeof data.returnedEndLine === "number"
          ? `${path}#L${data.returnedStartLine}-${data.returnedEndLine}`
          : path,
    });
    if (!parsed) continue;

    const truncated =
      data.truncated === true || parsed.truncated === true;
    const documentHasMore =
      data.documentHasMore === true || parsed.documentHasMore === true;
    const returnedStartLine =
      typeof data.returnedStartLine === "number"
        ? data.returnedStartLine
        : parsed.returnedStartLine;
    const returnedEndLine =
      typeof data.returnedEndLine === "number"
        ? data.returnedEndLine
        : parsed.returnedEndLine;

    facts.push({
      pathOrRef: `${parsed.documentPath}#L${returnedStartLine}-${returnedEndLine}`,
      documentPath: parsed.documentPath,
      // Budget-exhausted disclosure never promotes FULL from tool crumbs alone.
      coverage: "partial",
      startLine: parsed.startLine,
      endLine: parsed.endLine,
      returnedStartLine,
      returnedEndLine,
      totalLines: parsed.totalLines,
      hasMore: truncated || documentHasMore || parsed.hasMore,
      truncated,
      documentHasMore,
      nextStartLineHint:
        typeof data.nextStartLineHint === "number"
          ? data.nextStartLineHint
          : parsed.nextStartLineHint,
      signals: [
        truncated ? "truncated" : null,
        documentHasMore ? "documentHasMore" : null,
      ].filter(Boolean) as string[],
      origin: "current_turn",
    });
  }
  return facts;
}

/**
 * Honest incomplete narrative — never fabricates document synthesis.
 */
export function buildDocumentaryBudgetExhaustedText(input: {
  items: unknown[];
  stockMessage?: string;
}): string {
  const stock = input.stockMessage ?? MODEL_TURN_BUDGET_REACHED_STOCK;
  const facts = collectReadFactsFromRunItems(input.items);
  if (facts.length === 0) {
    return stock;
  }

  const unions = unionReturnedLineSpans(facts);
  const lines: string[] = [
    stock,
    "",
    "Analyse documentaire inachevée — budget model-turn atteint avant une synthèse finalisée.",
    "Périmètre réellement remis par l'outil (plages retournées, pas le contenu inventé) :",
  ];

  for (const u of unions) {
    const spanTxt = u.spans
      .map((s) => `L${s.start}-${s.end}`)
      .join(", ");
    const total =
      typeof u.totalLines === "number" ? ` / ${u.totalLines}` : "";
    lines.push(
      `- ${u.documentPath}: ${spanTxt}${total}${u.provenFull ? " (couverture intégrale prouvée)" : " (couverture partielle)"}`,
    );
  }

  const hints = facts
    .map((f) => f.nextStartLineHint)
    .filter((n): n is number => typeof n === "number");
  if (hints.length > 0) {
    lines.push(
      `Reprise possible depuis la ligne ${Math.min(...hints)} (nextStartLineHint observé) — aucune HumanDecision ni Deliverable inventés.`,
    );
  } else {
    lines.push(
      "Aucune HumanDecision ni Deliverable inventés ; statut Product incomplete.",
    );
  }

  return lines.join("\n");
}
```

#### `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts`

```typescript
/**
 * P6-MIN-09 — Documentary Cognitive Reliability Correction 01 (deterministic).
 * ZERO REAL / ZERO provider calls.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import {
  ADAPTIVE_MAX_TURNS_CEILING,
  ProductSqliteSession,
  buildDocumentaryBudgetExhaustedText,
  decideCognitiveStrategy,
  inferWorkloadHintsFromUserContent,
  isNaturalMonoFileDocumentaryRequest,
  normalizeCognitiveWorkloadSignals,
  parseGitLocalReadCoverageSignals,
  resolveAdaptiveMaxTurns,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
  unionReturnedLineSpans,
} from "@/lib/nora-cognitive-runtime";
import { GitLocalReadAdapter } from "@/lib/platform/repository/gitLocalReadAdapter";
import { CT_MAX_TOOL_RESULT_CHARS } from "@/lib/platform/tools/types";
import {
  createToolCallId,
  routeToolCall,
} from "@/lib/platform/tools/toolRouter";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";

const T1_PROMPT = `Nora, j'ai un document dans notre dépôt Git qui pourrait nous être utile pour ce projet :
projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md
Tu peux le consulter et m'en faire une synthèse de ce que tu en retiens ?`;

const dirs: string[] = [];

function tmpGitRepo(lineCount: number, lineWidth = 40): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-doc-"));
  dirs.push(dir);
  const rel = "projects/sfia-studio/docs/min09-doc.md";
  fs.mkdirSync(path.join(dir, "projects/sfia-studio/docs"), { recursive: true });
  const body = Array.from({ length: lineCount }, (_, i) => {
    const n = i + 1;
    return `L${n} ${"x".repeat(Math.max(0, lineWidth - 4))}`;
  }).join("\n");
  fs.writeFileSync(path.join(dir, rel), body, "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: dir,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("P6-MIN-09 — Axe B natural mono-file qualification", () => {
  it("T1 natural prompt → toolDependency high, NOT sourceBreadth high", () => {
    expect(isNaturalMonoFileDocumentaryRequest(T1_PROMPT)).toBe(true);
    const hints = inferWorkloadHintsFromUserContent(T1_PROMPT);
    expect(hints.toolDependency).toBe("high");
    expect(hints.reasoningDepth).toBe("medium");
    expect(hints.sourceBreadth).toBeUndefined();
  });

  it("bare 'document' alone does not elevate", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Nora, j'ai un document intéressant.",
    );
    expect(hints.toolDependency).toBeUndefined();
    expect(isNaturalMonoFileDocumentaryRequest("Nora, j'ai un document.")).toBe(
      false,
    );
  });

  it("T1 hints → Focused budget ≥8 and ≤ ceiling (no FinOps widen)", () => {
    const hints = inferWorkloadHintsFromUserContent(T1_PROMPT);
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals(hints),
    });
    expect(strategy.strategyClass).toBe("Focused");
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
      ADAPTIVE_MAX_TURNS_CEILING,
    );
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(10);
  });
});

describe("P6-MIN-09 — Axe C/D git read truncation vs documentHasMore", () => {
  it("Case A — full range received but document continues (documentHasMore, not truncated)", () => {
    const root = tmpGitRepo(30, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 5,
    });
    expect(r.truncated).toBe(false);
    expect(r.documentHasMore).toBe(true);
    expect(r.hasMore).toBe(true);
    expect(r.returnedStartLine).toBe(1);
    expect(r.returnedEndLine).toBe(5);
    expect(r.nextStartLineHint).toBe(6);
    expect(r.summary).toMatch(/documentHasMore/);
    expect(r.summary).not.toMatch(/\btruncated\b/);

    const parsed = parseGitLocalReadCoverageSignals({ summary: r.summary });
    expect(parsed?.truncated).toBe(false);
    expect(parsed?.documentHasMore).toBe(true);
    expect(parsed?.returnedEndLine).toBe(5);
  });

  it("Case B — requested range truncated by char cap", () => {
    // Wide lines so a small line window still exceeds CT_MAX_TOOL_RESULT_CHARS.
    const wide = Math.ceil(CT_MAX_TOOL_RESULT_CHARS / 3) + 20;
    const root = tmpGitRepo(20, wide);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 10,
    });
    expect(r.truncated).toBe(true);
    expect(r.returnedEndLine).toBeLessThan(r.requestedEndLine);
    expect(r.nextStartLineHint).toBe(r.returnedEndLine + 1);
    expect(r.summary).toMatch(/\btruncated\b/);
    const parsed = parseGitLocalReadCoverageSignals({ summary: r.summary });
    expect(parsed?.truncated).toBe(true);
  });

  it("Case C — whole-document request truncated", () => {
    const wide = Math.ceil(CT_MAX_TOOL_RESULT_CHARS / 2) + 40;
    const root = tmpGitRepo(40, wide);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536);
    expect(r.requestedStartLine).toBe(1);
    expect(r.requestedEndLine).toBe(40);
    expect(r.truncated).toBe(true);
    expect(r.returnedEndLine).toBeLessThan(40);
    expect(r.summary).toMatch(/returned L1-/);
  });

  it("Case D — short range fully returned, no truncation", () => {
    const root = tmpGitRepo(20, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 2,
      endLine: 3,
    });
    expect(r.truncated).toBe(false);
    expect(r.returnedEndLine).toBe(3);
    expect(r.documentHasMore).toBe(true);
  });

  it("Case E/F — overlapping returned spans union without false FULL", () => {
    const facts = [
      {
        pathOrRef: "doc.md#L1-50",
        documentPath: "doc.md",
        coverage: "partial" as const,
        returnedStartLine: 1,
        returnedEndLine: 50,
        totalLines: 100,
        truncated: false,
        documentHasMore: true,
        hasMore: true,
      },
      {
        pathOrRef: "doc.md#L40-80",
        documentPath: "doc.md",
        coverage: "partial" as const,
        returnedStartLine: 40,
        returnedEndLine: 80,
        totalLines: 100,
        truncated: false,
        documentHasMore: true,
        hasMore: true,
      },
    ];
    const unions = unionReturnedLineSpans(facts);
    expect(unions[0]?.spans).toEqual([{ start: 1, end: 80 }]);
    expect(unions[0]?.provenFull).toBe(false);
  });

  it("Case G — no FULL claim when L1-total requested but truncated", () => {
    const summary =
      "read doc.md L1-100/100 returned L1-12 (12013 chars) truncated hasMore";
    const parsed = parseGitLocalReadCoverageSignals({ summary });
    expect(parsed?.truncated).toBe(true);
    expect(parsed?.returnedEndLine).toBe(12);
    expect(parsed?.startLine).toBe(1);
    expect(parsed?.endLine).toBe(100);
  });

  it("ToolRouter usage.truncated is content-cut only (not documentHasMore)", async () => {
    const root = tmpGitRepo(20, 20);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: "projects/sfia-studio/docs/min09-doc.md",
          startLine: 1,
          endLine: 3,
        },
        sessionId: "min09",
      },
      {
        workspaceRoot: root,
        sink: { emit: (e) => events.push(e) },
      },
    );
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.usage.truncated).toBe(false);
      const data = result.data as {
        documentHasMore?: boolean;
        truncated?: boolean;
        nextStartLineHint?: number | null;
      };
      expect(data.documentHasMore).toBe(true);
      expect(data.truncated).toBe(false);
      expect(data.nextStartLineHint).toBe(4);
    }
  });
});

describe("P6-MIN-09 — Axe A/E/F observability + honest incomplete", () => {
  it("emits ADAPTIVE_BUDGET_OBSERVED + CONTINUATION_OBSERVED", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-sess-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-obs",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const events: TechnicalEvent[] = [];
    const model = new ScriptedModel([
      [assistantMessage("Synthèse partielle déterministe OK.")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-obs",
      projectId: "prj:min09-obs",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: false,
      cognitiveStrategyClass: "Focused",
      sink: { emit: (e) => events.push(e) },
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain("Synthèse partielle");
    expect(events.some((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED")).toBe(
      true,
    );
    expect(events.some((e) => e.type === "CONTINUATION_OBSERVED")).toBe(true);
    const adaptive = events.find((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED");
    expect(adaptive?.detail.requestedMaxTurns).toBeTruthy();
    expect(adaptive?.detail.ceiling).toBe(10);
    session.close();
  });

  it("budget exhausted with tool crumbs → honest disclosure, not bare stock alone when facts exist", () => {
    const text = buildDocumentaryBudgetExhaustedText({
      items: [
        {
          type: "function_call_result",
          name: "git_local_read_file",
          output: {
            text: JSON.stringify({
              ok: true,
              summary:
                "read projects/x.md L1-250/1664 returned L1-64 (12013 chars) truncated documentHasMore hasMore",
              data: {
                path: "projects/x.md",
                truncated: true,
                documentHasMore: true,
                returnedStartLine: 1,
                returnedEndLine: 64,
                totalLines: 1664,
                nextStartLineHint: 65,
              },
            }),
          },
        },
      ],
    });
    expect(text).toContain("Model-turn budget reached (maxTurns).");
    expect(text).toContain("inachevée");
    expect(text).toContain("projects/x.md");
    expect(text).toContain("L1-64");
    expect(text).toContain("65");
    expect(text).not.toMatch(/HumanDecision inventée|Deliverable validé/i);
  });

  it("ScriptedModel documentary: synthesis before stop when budget allows", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-syn-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-syn",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 40,
          },
          { callId: "r1" },
        ),
      ],
      [
        assistantMessage(
          "PARTIEL — synthèse déterministe des portions lues (pas une couverture intégrale).",
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-syn",
      projectId: "prj:min09-syn",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: true,
      maxTurns: 8,
      enableControlledContinuation: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toMatch(/PARTIEL/);
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBeLessThanOrEqual(10);
    session.close();
  });

  it("P0 — exhausted mission without text stays incomplete (limitReached)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-p0-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-p0",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "a" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "b" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "c" },
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-p0",
      projectId: "prj:min09-p0",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: true,
      maxTurns: 2,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    session.close();
  });
});
```

### Modifiés
- `adaptiveTurnBudget.ts`
- `index.ts`
- `readCoverage.ts`
- `runNoraAgentsTurn.ts`
- `runNoraCognitiveTurn.ts`
- `observability/types.ts`
- `gitLocalReadAdapter.ts`
- `toolRouter.ts`
- `platform/tools/types.ts`
- `__tests__/.../p6.nora.p1.adaptiveBudget.d0.test.ts`

## Q. Git Review Index

Scope effectif = `projects/sfia-studio/app/**` uniquement (+ pack temporaire).
Hors scope restauré si touché par erreur: `production-runtime-reference/**`.

## R. Diff complet utile (`projects/sfia-studio/app`)

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
index 46f31e2b..29cc8efc 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
@@ -101,6 +101,22 @@ describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
     );
   });

+  it("natural mono-file synthèse does not set sourceBreadth=high", () => {
+    const hints = inferWorkloadHintsFromUserContent(
+      "Consulte projects/sfia-studio/docs/a.md et fais-en une synthèse.",
+    );
+    expect(hints.toolDependency).toBe("high");
+    expect(hints.reasoningDepth).toBe("medium");
+    expect(hints.sourceBreadth).toBeUndefined();
+    const budget = resolveAdaptiveMaxTurns({
+      strategyClass: "Routine",
+      signals: hints,
+    });
+    // Mono-doc tool+depth bump lifts Routine base to at least Focused floor (8).
+    expect(budget.requestedMaxTurns).toBe(8);
+    expect(budget.reasonCodes).toContain("known_mono_doc_tool_synthesis_bump");
+  });
+
   it("null strategy falls back to legacy 5", () => {
     expect(
       resolveAdaptiveMaxTurns({ strategyClass: null }).requestedMaxTurns,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
index c08d4306..0772901a 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
@@ -65,6 +65,23 @@ function isKnownMediumOrHigh(value: SignalValue | undefined): boolean {
  * Light, observable hints from Pilot request text — never invents LOW for unknowns.
  * Used only to elevate known dimensions when wording is explicit.
  */
+/**
+ * True when Pilot wording requests reading/synthesizing a concrete repo path
+ * (mono-file documentary mission). Bare "document" alone remains non-elevating.
+ */
+export function isNaturalMonoFileDocumentaryRequest(content: string): boolean {
+  const c = content.trim();
+  if (!c) return false;
+  const hasRepoPath =
+    /(?:^|[\s`"'(])((?:projects|docs|method|prompts)\/[\w./+-]+\.(?:md|txt|markdown))\b/i.test(
+      c,
+    ) || /(?:^|[\s`"'(])([\w./+-]+\.(?:md|txt|markdown))\b/i.test(c);
+  if (!hasRepoPath) return false;
+  return /synth[eè]se|r[eé]sum(?:er|é|e)?|consulter|reten(?:ir|iens)|lire|analys(?:e|er)|review|guid(?:ed)?\s+document/i.test(
+    c,
+  );
+}
+
 export function inferWorkloadHintsFromUserContent(
   content: string,
 ): Partial<CognitiveWorkloadSignals> {
@@ -80,6 +97,13 @@ export function inferWorkloadHintsFromUserContent(
     hints.sourceBreadth = "high";
     hints.toolDependency = "high";
   }
+  // Mono-file natural synthesis: tool dependency + synthesis depth — NOT sourceBreadth=high.
+  if (isNaturalMonoFileDocumentaryRequest(c)) {
+    hints.toolDependency = "high";
+    if (hints.reasoningDepth !== "high") {
+      hints.reasoningDepth = "medium";
+    }
+  }
   if (
     /v[ée]rif|cross[- ]?check|contradic|coherence|coh[ée]rence|entre\s+documents/i.test(
       c,
@@ -163,6 +187,17 @@ export function resolveAdaptiveMaxTurns(input: {
       reasonCodes.push("known_medium_doc_tool_bump");
       base = bumped;
     }
+  } else if (
+    // Mono-file documentary synthesis: high toolDependency + medium/high depth
+    // → at least Focused base (8), never invents sourceBreadth, never exceeds ceiling.
+    isKnownHigh(signals.toolDependency) &&
+    isKnownMediumOrHigh(signals.reasoningDepth)
+  ) {
+    const bumped = Math.min(ceiling, Math.max(base, 8));
+    if (bumped > base) {
+      reasonCodes.push("known_mono_doc_tool_synthesis_bump");
+      base = bumped;
+    }
   }

   // Unknown-heavy path: do not elevate beyond strategy base (UNKNOWN ≠ LOW inflate).
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 09f32abd..4bbc11a6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -85,12 +85,22 @@ export type { NoraTurnBudget } from "./turnBudget";
 export {
   resolveAdaptiveMaxTurns,
   inferWorkloadHintsFromUserContent,
+  isNaturalMonoFileDocumentaryRequest,
   LEGACY_DEFAULT_MAX_TURNS,
   ADAPTIVE_MAX_TURNS_FLOOR,
   ADAPTIVE_MAX_TURNS_CEILING,
   STRATEGY_BASE_MAX_TURNS,
 } from "./adaptiveTurnBudget";
 export type { AdaptiveMaxTurnsDecision } from "./adaptiveTurnBudget";
+export {
+  appendDocumentaryReadGuidance,
+  DOCUMENTARY_READ_GUIDANCE_BLOCK,
+} from "./documentaryReadGuidance";
+export {
+  buildDocumentaryBudgetExhaustedText,
+  collectReadFactsFromRunItems,
+  MODEL_TURN_BUDGET_REACHED_STOCK,
+} from "./documentaryBudgetExhausted";
 export {
   planContinuationSegments,
   emptyContinuationObserve,
@@ -332,6 +342,7 @@ export {
   MW4_DOCUMENT_READ_TOOL,
   overallToGroundingCoverageKind,
   parseGitLocalReadCoverageSignals,
+  unionReturnedLineSpans,
 } from "./readCoverage";
 export type {
   ParsedReadRange,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
index a9195bc4..bec0aa97 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
@@ -3,10 +3,16 @@
  *
  * Derives coverage from the REAL ToolRouter/EventSink contract:
  * - toolName, status, summary, source.pathOrRef
- * - git_local_read_file summary: `read <path> L<start>-<end>/<total> (...) [hasMore]`
- * - pathOrRef may be `<path>#L<start>-<end>`
+ * - git_local_read_file summary (current):
+ *   `read <path> L<reqStart>-<reqEnd>/<total> returned L<retStart>-<retEnd> (N chars) [truncated] [documentHasMore] [hasMore]`
+ * - legacy summary still accepted: `read <path> L<start>-<end>/<total> (...) [hasMore]`
+ * - pathOrRef may be `<path>#L<start>-<end>` (prefer returned range when present)
  *
  * Search ≠ read. Only git_local_read_file establishes document read coverage.
+ *
+ * hasMore ≠ truncated:
+ * - truncated = requested range content was cut by size caps
+ * - documentHasMore = lines exist after the requested endLine
  */

 export type ReadCoverageKind =
@@ -21,10 +27,19 @@ export type ReadCoverageFact = {
   /** Bare path without #L range suffix when known. */
   documentPath?: string;
   coverage: ReadCoverageKind;
+  /** Requested range start (when known). */
   startLine?: number;
+  /** Requested range end (when known). */
   endLine?: number;
+  /** Returned range start (honest payload bounds). */
+  returnedStartLine?: number;
+  /** Returned range end (honest payload bounds). */
+  returnedEndLine?: number;
   totalLines?: number;
   hasMore?: boolean;
+  truncated?: boolean;
+  documentHasMore?: boolean;
+  nextStartLineHint?: number | null;
   /** Optional signals observed in summary/pathOrRef. */
   signals?: string[];
   /** current_turn vs remembered prior-turn continuity. */
@@ -39,18 +54,29 @@ export type ReadCoverageAggregate = {
 /** Sole primitive that establishes document read coverage for MW4-S03. */
 export const MW4_DOCUMENT_READ_TOOL = "git_local_read_file" as const;

-const READ_SUMMARY_RE =
-  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(hasMore)?/i;
+/** Current summary with returned range + explicit flags. */
+const READ_SUMMARY_RETURNED_RE =
+  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s+returned\s+L(\d+)-(\d+)\s*\(([^)]*)\)\s*(.*)$/i;
+
+/** Legacy summary without returned range. */
+const READ_SUMMARY_LEGACY_RE =
+  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(.*)$/i;

 const PATH_RANGE_RE = /^(.*)#L(\d+)-(\d+)$/;

 export type ParsedReadRange = {
   documentPath: string;
+  /** Requested start. */
   startLine: number;
+  /** Requested end. */
   endLine: number;
+  returnedStartLine: number;
+  returnedEndLine: number;
   totalLines?: number;
   hasMore: boolean;
   truncated: boolean;
+  documentHasMore: boolean;
+  nextStartLineHint?: number | null;
 };

 /**
@@ -63,34 +89,92 @@ export function parseGitLocalReadCoverageSignals(input: {
   const summary = (input.summary ?? "").trim();
   const pathOrRef = (input.pathOrRef ?? "").trim();

-  const fromSummary = READ_SUMMARY_RE.exec(summary);
-  if (fromSummary) {
-    const documentPath = fromSummary[1]!;
-    const startLine = Number(fromSummary[2]);
-    const endLine = Number(fromSummary[3]);
-    const totalLines = Number(fromSummary[4]);
-    const paren = (fromSummary[5] ?? "").toLowerCase();
-    const hasMoreToken = Boolean(fromSummary[6]);
+  const fromReturned = READ_SUMMARY_RETURNED_RE.exec(summary);
+  if (fromReturned) {
+    const documentPath = fromReturned[1]!;
+    const startLine = Number(fromReturned[2]);
+    const endLine = Number(fromReturned[3]);
+    const totalLines = Number(fromReturned[4]);
+    const returnedStartLine = Number(fromReturned[5]);
+    const returnedEndLine = Number(fromReturned[6]);
+    const paren = (fromReturned[7] ?? "").toLowerCase();
+    const flags = (fromReturned[8] ?? "").toLowerCase();
     const truncated =
-      /\btruncat/.test(paren) || /\bcapped\b/.test(paren) || hasMoreToken;
+      /\btruncated\b/.test(flags) ||
+      /\btruncat/.test(paren) ||
+      /\bcapped\b/.test(paren);
+    const documentHasMore =
+      /\bdocumenthasmore\b/.test(flags) ||
+      (!truncated && endLine < totalLines);
+    const hasMoreToken = /\bhasmore\b/.test(flags);
+    const hasMore =
+      hasMoreToken || truncated || documentHasMore || returnedEndLine < totalLines;
+    const nextStartLineHint =
+      returnedEndLine < totalLines ? returnedEndLine + 1 : null;
     return {
       documentPath,
       startLine,
       endLine,
+      returnedStartLine,
+      returnedEndLine,
       totalLines,
-      hasMore: hasMoreToken || truncated || endLine < totalLines,
+      hasMore,
       truncated,
+      documentHasMore,
+      nextStartLineHint,
+    };
+  }
+
+  const fromLegacy = READ_SUMMARY_LEGACY_RE.exec(summary);
+  if (fromLegacy) {
+    const documentPath = fromLegacy[1]!;
+    const startLine = Number(fromLegacy[2]);
+    const endLine = Number(fromLegacy[3]);
+    const totalLines = Number(fromLegacy[4]);
+    const paren = (fromLegacy[5] ?? "").toLowerCase();
+    const flags = (fromLegacy[6] ?? "").toLowerCase();
+    const hasMoreToken = /\bhasmore\b/.test(flags);
+    // Explicit truncation only — do NOT treat bare hasMore as truncated.
+    const truncated =
+      /\btruncated\b/.test(flags) ||
+      /\btruncat/.test(paren) ||
+      /\bcapped\b/.test(paren) ||
+      // Legacy L1-total + hasMore implies content cut (range claimed full).
+      (hasMoreToken && endLine >= totalLines && startLine === 1);
+    const documentHasMore =
+      /\bdocumenthasmore\b/.test(flags) ||
+      (!truncated && endLine < totalLines) ||
+      (hasMoreToken && endLine < totalLines && !truncated);
+    const hasMore =
+      hasMoreToken || truncated || documentHasMore || endLine < totalLines;
+    return {
+      documentPath,
+      startLine,
+      endLine,
+      // Legacy: cannot prove returned ≠ requested — treat requested as upper bound.
+      returnedStartLine: startLine,
+      returnedEndLine: endLine,
+      totalLines,
+      hasMore,
+      truncated,
+      documentHasMore,
+      nextStartLineHint: endLine < totalLines ? endLine + 1 : null,
     };
   }

   const fromPath = PATH_RANGE_RE.exec(pathOrRef);
   if (fromPath) {
+    const startLine = Number(fromPath[2]);
+    const endLine = Number(fromPath[3]);
     return {
       documentPath: fromPath[1]!,
-      startLine: Number(fromPath[2]),
-      endLine: Number(fromPath[3]),
+      startLine,
+      endLine,
+      returnedStartLine: startLine,
+      returnedEndLine: endLine,
       hasMore: false,
       truncated: false,
+      documentHasMore: false,
     };
   }

@@ -100,8 +184,11 @@ export function parseGitLocalReadCoverageSignals(input: {
       documentPath: pathOrRef,
       startLine: 1,
       endLine: 1,
+      returnedStartLine: 1,
+      returnedEndLine: 1,
       hasMore: true,
       truncated: false,
+      documentHasMore: true,
     };
   }

@@ -111,18 +198,94 @@ export function parseGitLocalReadCoverageSignals(input: {
 export function classifyGitLocalReadCompleteness(
   parsed: ParsedReadRange,
 ): "full" | "partial" {
-  const { startLine, endLine, totalLines, hasMore, truncated } = parsed;
-  if (truncated || hasMore) return "partial";
+  const {
+    returnedStartLine,
+    returnedEndLine,
+    totalLines,
+    hasMore,
+    truncated,
+    documentHasMore,
+  } = parsed;
+  if (truncated || documentHasMore || hasMore) return "partial";
   if (typeof totalLines !== "number" || !Number.isFinite(totalLines)) {
     // pathOrRef-only range without total → cannot prove full document.
     return "partial";
   }
-  // CORR-01A hard rule: FULL only when L1-total and no hasMore/truncation.
-  // L100-N/N is PARTIAL even when endLine === totalLines.
-  if (startLine === 1 && endLine === totalLines) return "full";
+  // CORR-01A hard rule: FULL only when returned L1-total and no truncation/more.
+  if (returnedStartLine === 1 && returnedEndLine === totalLines) return "full";
   return "partial";
 }

+/**
+ * Honest union of *returned* line spans per document (not requested ranges).
+ * Never invents completeness percentages.
+ */
+export function unionReturnedLineSpans(facts: ReadCoverageFact[]): Array<{
+  documentPath: string;
+  spans: Array<{ start: number; end: number }>;
+  totalLines?: number;
+  provenFull: boolean;
+}> {
+  const byDoc = new Map<
+    string,
+    { spans: Array<{ start: number; end: number }>; totalLines?: number }
+  >();
+  for (const fact of facts) {
+    if (fact.coverage !== "full" && fact.coverage !== "partial") continue;
+    const doc = (fact.documentPath ?? fact.pathOrRef).trim();
+    if (!doc) continue;
+    const start = fact.returnedStartLine ?? fact.startLine;
+    const end = fact.returnedEndLine ?? fact.endLine;
+    if (
+      typeof start !== "number" ||
+      typeof end !== "number" ||
+      !Number.isFinite(start) ||
+      !Number.isFinite(end) ||
+      end < start
+    ) {
+      continue;
+    }
+    // Truncated facts still contribute the returned span only.
+    const entry = byDoc.get(doc) ?? { spans: [], totalLines: fact.totalLines };
+    if (typeof fact.totalLines === "number") entry.totalLines = fact.totalLines;
+    entry.spans.push({ start, end });
+    byDoc.set(doc, entry);
+  }
+
+  const out: Array<{
+    documentPath: string;
+    spans: Array<{ start: number; end: number }>;
+    totalLines?: number;
+    provenFull: boolean;
+  }> = [];
+
+  for (const [documentPath, entry] of byDoc) {
+    const sorted = [...entry.spans].sort((a, b) => a.start - b.start);
+    const merged: Array<{ start: number; end: number }> = [];
+    for (const span of sorted) {
+      const last = merged[merged.length - 1];
+      if (!last || span.start > last.end + 1) {
+        merged.push({ ...span });
+      } else {
+        last.end = Math.max(last.end, span.end);
+      }
+    }
+    const totalLines = entry.totalLines;
+    const docFacts = facts.filter(
+      (f) => (f.documentPath ?? f.pathOrRef).trim() === documentPath,
+    );
+    const anyTruncated = docFacts.some((f) => f.truncated === true);
+    const provenFull =
+      typeof totalLines === "number" &&
+      !anyTruncated &&
+      merged.length === 1 &&
+      merged[0]!.start === 1 &&
+      merged[0]!.end === totalLines;
+    out.push({ documentPath, spans: merged, totalLines, provenFull });
+  }
+  return out;
+}
+
 /**
  * Infer coverage for a single tool event row against the real EventSink shape.
  */
@@ -198,10 +361,16 @@ export function deriveReadCoverageFromToolEvent(input: {
     `L${parsed.startLine}-${parsed.endLine}${
       typeof parsed.totalLines === "number" ? `/${parsed.totalLines}` : ""
     }`,
+    `returned L${parsed.returnedStartLine}-${parsed.returnedEndLine}`,
   ];
   if (parsed.hasMore) signals.push("hasMore");
   if (parsed.truncated) signals.push("truncated");
-  if (coverage === "partial" && parsed.endLine === parsed.totalLines && parsed.startLine > 1) {
+  if (parsed.documentHasMore) signals.push("documentHasMore");
+  if (
+    coverage === "partial" &&
+    parsed.returnedEndLine === parsed.totalLines &&
+    parsed.returnedStartLine > 1
+  ) {
     signals.push("suffix_range_not_full");
   }

@@ -211,8 +380,13 @@ export function deriveReadCoverageFromToolEvent(input: {
     coverage,
     startLine: parsed.startLine,
     endLine: parsed.endLine,
+    returnedStartLine: parsed.returnedStartLine,
+    returnedEndLine: parsed.returnedEndLine,
     totalLines: parsed.totalLines,
     hasMore: parsed.hasMore,
+    truncated: parsed.truncated,
+    documentHasMore: parsed.documentHasMore,
+    nextStartLineHint: parsed.nextStartLineHint,
     signals,
     origin: "current_turn",
   };
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index d518f509..93cbf75c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -24,6 +24,10 @@ import {
   resolveAdaptiveMaxTurns,
   type AdaptiveMaxTurnsDecision,
 } from "./adaptiveTurnBudget";
+import {
+  buildDocumentaryBudgetExhaustedText,
+  MODEL_TURN_BUDGET_REACHED_STOCK,
+} from "./documentaryBudgetExhausted";
 import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
 import {
   CONTINUATION_MAX_SEGMENTS,
@@ -657,8 +661,11 @@ export async function runNoraAgentsTurn(
   }) => {
     budget.limitReached = true;
     const lastText = extractTextFromRunItems(runData.newItems);
+    const fallback = buildDocumentaryBudgetExhaustedText({
+      items: Array.isArray(runData.newItems) ? runData.newItems : [],
+    });
     return {
-      finalOutput: lastText.trim() || "Model-turn budget reached (maxTurns).",
+      finalOutput: lastText.trim() || fallback,
       includeInHistory: false,
     };
   };
@@ -835,15 +842,14 @@ export async function runNoraAgentsTurn(
             segmentsExecuted += 1;
             allottedTurns = absoluteCap;
             const state = segmentError.state;
+            const segmentItems = Array.isArray(
+              (segmentError as { newItems?: unknown[] }).newItems,
+            )
+              ? ((segmentError as { newItems?: unknown[] }).newItems as unknown[])
+              : [];
             const partial =
-              extractTextFromRunItems(
-                Array.isArray(
-                  (segmentError as { newItems?: unknown[] }).newItems,
-                )
-                  ? ((segmentError as { newItems?: unknown[] })
-                      .newItems as unknown[])
-                  : [],
-              ) || "Model-turn budget reached (maxTurns).";
+              extractTextFromRunItems(segmentItems) ||
+              buildDocumentaryBudgetExhaustedText({ items: segmentItems });

             if (
               continuationPlan.enable &&
@@ -1006,6 +1012,51 @@ export async function runNoraAgentsTurn(
     effectiveMaxTurns: maxTurns,
   };

+  // Axe A — bounded observability (no secrets, no document body, no CoT).
+  if (input.sink) {
+    input.sink.emit({
+      type: "ADAPTIVE_BUDGET_OBSERVED",
+      correlationId: input.correlationId,
+      detail: {
+        projectId: input.projectId,
+        strategyClass: adaptiveObserve.strategyClass,
+        requestedMaxTurns: adaptiveObserve.requestedMaxTurns,
+        effectiveMaxTurns: adaptiveObserve.effectiveMaxTurns,
+        floor: adaptiveObserve.floor,
+        ceiling: adaptiveObserve.ceiling,
+        explicitOverride: adaptiveObserve.explicitOverride,
+        reasonCodes: adaptiveObserve.reasonCodes,
+        limitReached: budget.limitReached || budgetStop,
+        toolCalls: budget.executedToolCalls,
+        model:
+          typeof model === "string"
+            ? model
+            : usage.model ?? null,
+        provenance: adaptiveObserve.explicitOverride
+          ? "explicit_override"
+          : "adaptive_policy",
+      },
+    });
+    input.sink.emit({
+      type: "CONTINUATION_OBSERVED",
+      correlationId: input.correlationId,
+      detail: {
+        projectId: input.projectId,
+        continued: continuationObserve.continued,
+        segmentsExecuted: continuationObserve.segmentsExecuted,
+        missionMaxTurns: continuationObserve.missionMaxTurns,
+        segmentMaxTurns: continuationObserve.segmentMaxTurns,
+        allottedTurns: continuationObserve.allottedTurns,
+        stopReason: continuationObserve.stopReason,
+        reasonCodes: continuationObserve.reasonCodes,
+        limitReached: budget.limitReached || budgetStop,
+        stockFallbackUsed:
+          typeof text === "string" &&
+          text.includes(MODEL_TURN_BUDGET_REACHED_STOCK),
+      },
+    });
+  }
+
   return {
     text,
     usage,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 6e2d8633..30bffc46 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -36,8 +36,10 @@ import {
 } from "./cognitiveWorkloadPolicy";
 import {
   inferWorkloadHintsFromUserContent,
+  isNaturalMonoFileDocumentaryRequest,
   resolveAdaptiveMaxTurns,
 } from "./adaptiveTurnBudget";
+import { appendDocumentaryReadGuidance } from "./documentaryReadGuidance";
 import { validateRuntimeReasoningCapability } from "./reasoningCapability";
 import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";
 import {
@@ -879,6 +881,10 @@ export async function runNoraCognitiveTurn(
       systemInstructions,
       readDisclosure,
     );
+    systemInstructions = appendDocumentaryReadGuidance(
+      systemInstructions,
+      isNaturalMonoFileDocumentaryRequest(lastUser.content),
+    );
     const turn = await runNoraCognitiveCore({
       cognitiveMode: "conversation",
       correlationId: input.correlationId,
@@ -1048,6 +1054,10 @@ export async function runNoraCognitiveTurn(
     systemInstructions,
     mw4Prep.readCoverageDisclosure,
   );
+  systemInstructions = appendDocumentaryReadGuidance(
+    systemInstructions,
+    isNaturalMonoFileDocumentaryRequest(lastUser.content),
+  );
   if (engageMw6 && sourceStrategy) {
     systemInstructions = appendSourceStrategyDisclosure(
       systemInstructions,
diff --git a/projects/sfia-studio/app/lib/platform/observability/types.ts b/projects/sfia-studio/app/lib/platform/observability/types.ts
index f1254ffc..39bb2878 100644
--- a/projects/sfia-studio/app/lib/platform/observability/types.ts
+++ b/projects/sfia-studio/app/lib/platform/observability/types.ts
@@ -16,7 +16,9 @@ export type TechnicalEventType =
   | "TOOL_LOOP_COMPLETED"
   | "TOOL_LOOP_LIMIT_REACHED"
   | "COGNITIVE_STRATEGY_SELECTED"
-  | "COGNITIVE_ROUTING_SELECTED";
+  | "COGNITIVE_ROUTING_SELECTED"
+  | "ADAPTIVE_BUDGET_OBSERVED"
+  | "CONTINUATION_OBSERVED";

 export interface TechnicalEvent {
   type: TechnicalEventType;
diff --git a/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts b/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
index 4dda7c8c..1aca97f0 100644
--- a/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
+++ b/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
@@ -60,10 +60,30 @@ export type GitReadFileResult = {
   path: string;
   content: string;
   summary: string;
+  /** True when the requested range content was cut by byte/char caps. */
   truncated: boolean;
+  /**
+   * True when lines exist after the *requested* endLine (document continues).
+   * Independent of truncation — a fully returned short range may still have
+   * later lines.
+   */
+  documentHasMore: boolean;
+  /**
+   * Compat aggregate: truncated || documentHasMore.
+   * Prefer the specific flags for new callers.
+   */
+  hasMore: boolean;
+  /** Requested range (clamped to document bounds). */
   startLine: number;
   endLine: number;
-  hasMore: boolean;
+  requestedStartLine: number;
+  requestedEndLine: number;
+  /** Portion actually present in `content` (may be shorter when truncated). */
+  returnedStartLine: number;
+  returnedEndLine: number;
+  totalLines: number;
+  /** Next line to request when more content remains; null when complete through EOF. */
+  nextStartLineHint: number | null;
 };

 export type GitContentMatch = {
@@ -290,7 +310,7 @@ export class GitLocalReadAdapter {
     const startLine = Math.min(startRequested, totalLines);
     const endLine = Math.max(startLine, Math.min(endRequested, totalLines));
     const ranged = lines.slice(startLine - 1, endLine).join("\n");
-    const hasMoreLines = endLine < totalLines;
+    const documentHasMore = endLine < totalLines;

     const cap = Math.min(maxBytes, CT_DEFAULT_READ_MAX_BYTES * 2);
     const byteSlice =
@@ -304,16 +324,44 @@ export class GitLocalReadAdapter {
       CT_MAX_TOOL_RESULT_CHARS,
     );
     const truncated = byteTruncated || charTruncated;
-    const hasMore = hasMoreLines || truncated;
+
+    // Count lines actually present in the model-visible payload (strip marker).
+    const contentForLineCount = text.replace(/\n?…\[truncated\]\s*$/u, "");
+    const returnedLineCount = contentForLineCount
+      ? contentForLineCount.split("\n").length
+      : 0;
+    const returnedStartLine = startLine;
+    const returnedEndLine =
+      returnedLineCount > 0
+        ? Math.min(endLine, startLine + returnedLineCount - 1)
+        : startLine;
+    const hasMore = documentHasMore || truncated;
+    const nextStartLineHint =
+      returnedEndLine < totalLines ? returnedEndLine + 1 : null;
+
+    const flags = [
+      truncated ? "truncated" : null,
+      documentHasMore ? "documentHasMore" : null,
+      hasMore ? "hasMore" : null,
+    ]
+      .filter(Boolean)
+      .join(" ");

     return {
       path: norm.normalized,
       content: text,
       truncated,
+      documentHasMore,
+      hasMore,
       startLine,
       endLine,
-      hasMore,
-      summary: `read ${norm.normalized} L${startLine}-${endLine}/${totalLines} (${text.length} chars)${hasMore ? " hasMore" : ""}`,
+      requestedStartLine: startLine,
+      requestedEndLine: endLine,
+      returnedStartLine,
+      returnedEndLine,
+      totalLines,
+      nextStartLineHint,
+      summary: `read ${norm.normalized} L${startLine}-${endLine}/${totalLines} returned L${returnedStartLine}-${returnedEndLine} (${text.length} chars)${flags ? ` ${flags}` : ""}`,
     };
   }

diff --git a/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts b/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
index c57dc074..761cc4af 100644
--- a/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
@@ -230,8 +230,15 @@ export function resolveToolPathOrRef(
     case "git_local_read_file": {
       const p = asString(dataObj?.path) ?? asString(args.path);
       if (!p) return null;
-      const start = dataObj?.startLine;
-      const end = dataObj?.endLine;
+      // Prefer returned range (honest coverage) over requested-only bounds.
+      const start =
+        typeof dataObj?.returnedStartLine === "number"
+          ? dataObj.returnedStartLine
+          : dataObj?.startLine;
+      const end =
+        typeof dataObj?.returnedEndLine === "number"
+          ? dataObj.returnedEndLine
+          : dataObj?.endLine;
       if (typeof start === "number" && typeof end === "number") {
         return `${p}#L${start}-${end}`;
       }
@@ -497,12 +504,20 @@ export async function routeToolCall(
           path: r.path,
           content: r.content,
           truncated: r.truncated,
+          documentHasMore: r.documentHasMore,
+          hasMore: r.hasMore,
           startLine: r.startLine,
           endLine: r.endLine,
-          hasMore: r.hasMore,
+          requestedStartLine: r.requestedStartLine,
+          requestedEndLine: r.requestedEndLine,
+          returnedStartLine: r.returnedStartLine,
+          returnedEndLine: r.returnedEndLine,
+          totalLines: r.totalLines,
+          nextStartLineHint: r.nextStartLineHint,
         };
         summary = r.summary;
-        truncated = r.truncated || r.hasMore;
+        // usage.truncated = content cut only — not documentHasMore.
+        truncated = r.truncated;
         break;
       }
       case "git_local_get_diff": {
diff --git a/projects/sfia-studio/app/lib/platform/tools/types.ts b/projects/sfia-studio/app/lib/platform/tools/types.ts
index 00c5b8b3..042b53ff 100644
--- a/projects/sfia-studio/app/lib/platform/tools/types.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/types.ts
@@ -173,7 +173,7 @@ export const CONTROL_TOWER_TOOL_DEFINITIONS: ToolDefinition[] = [
   {
     name: "git_local_read_file",
     description:
-      "Read a UTF-8 text file relative to repo root. Optional startLine/endLine (1-based inclusive) for deep/ranged reads. truncated/hasMore mean the document was not fully obtained. Paths validated server-side. Read-only.",
+      "Read a UTF-8 text file relative to repo root. Optional startLine/endLine (1-based inclusive). Result fields: requested vs returned line ranges; truncated=true means the requested range was cut by size caps; documentHasMore=true means later lines exist after the requested end; nextStartLineHint is the next line to request. Prefer small windows that fit under the char cap; continue from nextStartLineHint; do not re-read already returned prefixes; leave a turn for a clearly PARTIAL synthesis before the mission turn budget ends. Paths validated server-side. Read-only.",
     parameters: {
       type: "object",
       properties: {

```

## S. Tests et résultats

Commandes (worktree Delivery, vitest local):

```
vitest run \
  p6.nora.min09.documentaryReliability.d0.test.ts \
  p6.nora.p1.adaptiveBudget.d0.test.ts \
  mw4.s03.partiality.d0.test.ts \
  mw4.corr01a.toolRouter.readCoverage.d0.test.ts \
  p6.nora.p1p2.documentary.mission.d0.test.ts \
  p6.nora.maxTurns.documentary.d0.test.ts \
  p6.nora.p1p2.targetedVerification.d0.test.ts \
  mw4.corr01b.persistedCoverage.d0.test.ts \
  mw4.cumulative.mw0-mw4.d0.test.ts
```

Résultats:
- MIN09 + P1 + MW4 + P1P2 maxTurns documentary: **52/52 PASS**
- targetedVerification + corr01b + cumulative: **12/12 PASS**
- `tsc --noEmit`: **PASS** (après fix typage test)

## T. Fake/Real Qualification

| Item | Valeur |
| --- | --- |
| Mode ce cycle | DETERMINISTIC ONLY |
| Fake | ScriptedModel / temp git repos / EventSink memory |
| REAL calls | ZERO |
| Preuve | DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE |
| Hors scope | REAL BOUNDARY / E2E GDR PASS / P6 GLOBAL PASS |

## U. Budget / FinOps

- Ceiling **10** inchangé.
- CT_MAX_TOOL_RESULT_CHARS **12000** inchangé.
- Mono-doc bump max → 8 (dans plafond).
- Pas de nouveau coût REAL.

## V. Impacts et non-régression

- P0 incomplete préservé.
- P1/P2 tests existants PASS.
- MW4 FULL/PARTIAL contracts PASS (legacy summaries encore acceptés).
- Routine courte: bare "document" non élevé.
- Pas d'effet Product protégé / HumanDecision inventée.

## W. Réserves et dettes

- FPPC-RES-01, P0-EFFECT-02, RunState cross-restart DEFER — inchangés.
- Qualité REAL du modèle non prouvée par ScriptedModel.
- DOC-PR577-POSTMERGE-SYNC DEFER (workspace rec01).
- Observabilité EventSink nécessite sink branché Product (déjà path cognitif).

## X. Décisions Morris restantes

1. GO intégration Git gouvernée (commit/PR) — **non consommé ici**.
2. GO retest REAL T1 humain post-intégration.
3. Toute hausse ceiling FinOps / moteur doc structurant → STOP structurel.

## Y. Exit Proof

- Correctif local borné dans architecture existante.
- Tests D0 pertinents PASS.
- Review Pack FULL avec diffs + fichiers créés complets.
- Limitations explicites (pas de REAL GDR PASS).

## Z. Verdict et instruction ChatGPT

### TARGETED CORRECTION IMPLEMENTED LOCALLY / DETERMINISTIC QA PASS / READY FOR CHATGPT REVIEW

Ce verdict ≠ GDR REAL PASS ≠ Product READY ≠ P6 GLOBAL PASS ≠ intégration main.

**Instruction ChatGPT:** lire le handoff distant `sfia/review-handoff` ; vérifier base Git, fichiers/diff, adéquation RCD-01, absence d'architecture parallèle, plafond FinOps, continuité native, tests, restitution, réserves, gates ; décider si prêt pour intégration Git gouvernée. Aucun GO d'intégration implicite.

---
FIN REVIEW PACK FULL — P6-MIN-09 DOCUMENTARY COGNITIVE RELIABILITY CORRECTION 01
