# SFIA Studio Next — ML5 Final Consolidation & LIVE Calibration — Review Pack FULL

- **Date (UTC):** 2026-11-26T12:00:16Z
- **Cycle:** 8 — Delivery CRITICAL — finalisation + calibration LIVE
- **Profil:** CRITICAL
- **Typologie:** EVOL
- **Branche:** `sfia/next-ml5-integrated-delivery-20261123`
- **HEAD initial:** `722368d5564ba0d2818f09f5dabbe78c9dfb1409`
- **HEAD candidat:** `4f1bb0f2cd7ad1e9b46444c6f0de4d2c761bfce3`
- **Main distant ref:** `997897fd7cf914771e7d08e8030dc7123fab7d25`
- **Handoff entrée:** `37a571e6`
- **Verdict candidat:** ML5 COGNITIVE CALIBRATION COMPLETED — RESULTS AVAILABLE — OPERATIONAL POLICY DECISION REQUIRED

## 1. Gates

| Gate | Statut |
|---|---|
| Construction DEV | CONSUMED |
| G-RECETTE-SECRET | CONSUMED (clé distincte + EXPECTED/FORBIDDEN; candidat/code/DB RECETTE non mutés) |
| G-LIVE-API | CONSUMED (DEV only, enveloppe respectée) |
| G-WEB-PUBLIC / G-WEB-MIXED | NOT CONSUMED |
| G-RECETTE cutover candidat | NOT CONSUMED |
| Push projet / PR / merge / STABLE / ADOPTED | NOT CONSUMED |

## 2. Git Truth

### Initial
- Worktree: `/Users/morris/Projects/sfia-wt-next-ml5-20261123`
- Branch: `sfia/next-ml5-integrated-delivery-20261123`
- HEAD: `722368d5`

### Final (working tree)
```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
 M projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts
 M projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
 M projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
 M projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
 M projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
 M projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
 M projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-c16-cognitive-integration.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cognitive-completion-abcd.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cognitive-resources.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-e03-usage-accounting.test.ts
 M projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
 M projects/sfia-studio-next/web/tests/unit/openai-lane-guard.test.ts
?? projects/sfia-studio-next/construction/ml5-cognitive-calibration-recommendation-20261126.md
?? projects/sfia-studio-next/web/scripts/ml5-calibration-phase-d.mts
?? projects/sfia-studio-next/web/scripts/ml5-cognitive-calibration-live.mts
?? projects/sfia-studio-next/web/src/domains/conversation/cognitive-guidance-tools.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-e03-usage-idempotence.pg.test.ts
```

### Diffstat
```
.tmp-sfia-review/chatgpt-review.md                 | 2753 +-------------------
 .../construction/delivery-history.md               |   14 +
 .../src/domains/conversation/cognitive-policy.ts   |  152 +-
 .../cognitive-resources/cognitive-referential.ts   |    2 +-
 .../domains/conversation/investigation-state.ts    |   13 +
 .../web/src/domains/conversation/nora-adapter.ts   |    9 +
 .../web/src/domains/conversation/provider-usage.ts |   29 +-
 .../conversation/public-web-search-frontier.ts     |   14 +
 .../conversation/run-nora-cognitive-turn.ts        |   76 +-
 .../domains/conversation/semantic-qualification.ts |   14 +
 .../src/domains/conversation/usage-accounting.ts   |   45 +-
 .../web/src/lib/openai-lane-guard.ts               |   16 +-
 .../unit/ml5-c16-cognitive-integration.test.ts     |  190 +-
 .../unit/ml5-cognitive-completion-abcd.test.ts     |   23 +
 .../web/tests/unit/ml5-cognitive-resources.test.ts |  135 +-
 .../tests/unit/ml5-e03-usage-accounting.test.ts    |   29 +
 .../web/tests/unit/nora-adapter-corrective.test.ts |    7 +
 .../web/tests/unit/openai-lane-guard.test.ts       |   63 +-
 18 files changed, 788 insertions(+), 2796 deletions(-)
```

## 3. Autorisations Morris
- Construction DEV: OUI
- G-RECETTE-SECRET: OUI (config OpenAI privée uniquement)
- G-LIVE-API: conditionnel — préconditions satisfaites → consommé
- Aucune clé collée dans le chat; Morris a renseigné RECETTE `.env.local` localement

## 4. S1 — Isolation OpenAI
- DEV_FP: `ab6bbec84ba272ed`
- REC_FP: `f27d814e9c682020`
- KEYS_DISTINCT: True
- RECETTE: EXPECTED=REC_FP, FORBIDDEN=DEV_FP, STUDIO_LANE=RECETTE
- DEV: EXPECTED=DEV_FP, FORBIDDEN=REC_FP
- Service RECETTE relancé (`com.sfia.studio.next.recette.ml4d-ux004`); cwd figé `…recette-build-a150926cc78f…`; SHA `a150926c…`
- models.list read-only OK (103 modèles; luna/terra/sol présents)
- Garde-fou DEV: `SFIA_OPENAI_EXPECTED_KEY_FP` **obligatoire** (fail-closed); couverture Nora LIVE + WEB frontier LIVE
- Candidat RECETTE figé **sans** le nouveau garde-fou applicatif (preuve config + process, pas contrôle app)

## 5. S2 — FinOps
- REQUEST_COUNT_UNKNOWN → GENERATION_AGGREGATE
- LONG_CONTEXT_TIER_SUPPRESSED_AGGREGATE → costCoverage PARTIAL
- Ordinals: `baseOrdinal + i` (plus de collision `callOrdinal ?? i`)
- Conflit insert → `id: ""` (pas d’UUID fabriqué)
- Entrées élémentaires incomplètes → agrégat + limits
- Tests: `ml5-e03-usage-accounting` + `ml5-e03-usage-idempotence.pg` PASS (022 appliqué sur `sfia_next_e2e`)

## 6. S3 — Allocation
- `effortRequested` = CognitiveEffort admis (none/xhigh/max préservés)
- `effortBudgetBand` = low|medium|high pour budgets seulement
- `resolveContinuityCognitivePolicy` + propositions structurées
- Outil `consult_cognitive_guidance` raccordé (Nora)
- Tests: ml5-cognitive-resources, ml5-c16, abcd — PASS

## 7. S4 — WEB / UX
- WEB LIVE=0 conservé; frontier porte le lane guard
- Pas de campagne Figma; F2 réserve Morris

## 8. S5 — Préconditions calibration
```json
{
  "Isolation OpenAI": "VERIFIED",
  "DEV_FP": "ab6bbec84ba272ed",
  "REC_FP": "f27d814e9c682020",
  "Garde-fou fournisseur": "VERIFIED (EXPECTED required fail-closed in DEV code)",
  "FinOps": "VERIFIED déterministe (unit+pg)",
  "Exactitude efforts": "VERIFIED déterministe",
  "Réallocation modèle": "VERIFIED déterministe",
  "Continuité": "VERIFIED déterministe",
  "WEB LIVE": "OFF",
  "Candidat DEV": "built HEAD 722368d5 + local uncommitted ML5 finalisation",
  "Corpus": "fixed in ml5-cognitive-calibration-live.mts",
  "Enveloppe": "40 resp / 2M in / 200k out"
}
```

## 9. S6 — Calibration LIVE
### Adapter campaign (A/B/C)
```json
{
  "stopReason": "COMPLETED_PLAN",
  "responsesAttempted": 19,
  "inputTokens": 141088,
  "outputTokens": 8488,
  "estimatedCostUsd": 0.127957,
  "byQualitative": {
    "PASS": 19
  },
  "byModel": {
    "gpt-6-luna": {
      "n": 6,
      "cost": 0.003831,
      "in": 44551,
      "out": 3982,
      "ms": 41234,
      "avgMs": 6872
    },
    "gpt-6.1-terra": {
      "n": 7,
      "cost": 0.030807,
      "in": 51985,
      "out": 2696,
      "ms": 57537,
      "avgMs": 8220
    },
    "gpt-6.2-sol": {
      "n": 6,
      "cost": 0.093319,
      "in": 44552,
      "out": 1810,
      "ms": 35098,
      "avgMs": 5850
    }
  },
  "effortRequestedPreserved": true
}
```
### Phase D product
```json
{
  "phase": "D",
  "base": "http://127.0.0.1:3100",
  "startedAt": "2026-11-26T11:55:38.173Z",
  "steps": [
    {
      "auth": 200
    },
    {},
    {
      "turn": 1,
      "http": 200,
      "workId": "cgw_ae8eea27-a3af-47c3-bd88-dc2f3cba89de",
      "revision": 3,
      "suspended": false,
      "replyStatus": "COMPLETE",
      "preview": "1. **Reformulation.** Tu veux que je vérifie si cette demande est assez claire pour être traitée, puis que je recommande un modèle et un niveau d’effort, sans recherche web.\n2. **Ambiguïté.** Rien ne bloque. Je calibre l’allocation sur ce tour, pas sur un futur travail dont la complexité n’est pas encore connue.\n3. **Allocation recommandée.** **Luna — effort faible (`low`)**, si ce couple est admi"
    },
    {
      "turn": 2,
      "http": 200,
      "workId": "cgw_ae8eea27-a3af-47c3-bd88-dc2f3cba89de",
      "revision": 6,
      "suspended": false,
      "sameWork": true,
      "replyStatus": "COMPLETE",
      "preview": "Tu veux calibrer les moyens sur le travail réel : répondre à une salutation n’exige pas la même analyse que démêler plusieurs intentions et vérifier leurs dépendances. Aucune ambiguïté ne bloque cette comparaison, et je n’ai pas utilisé le web.\n\n- **Salutation (« Bonjour ! »)** : je recommande **Luna, effort faible (`low`)**, si ce couple est admis. Une réponse courte suffit.\n- **Investigation mul"
    }
  ],
  "preparationId": "prep_18e614e1-506b-4a0a-98d8-3dab514b9f0a",
  "finishedAt": "2026-11-26T11:58:58.167Z"
}
```
- Enveloppe: 19 Responses adapter (+2 tours product); tokens ~141k/8.5k; coût ~0.128 USD
- Efforts demandés medium/high préservés (pas de collapse API)
- effortApplied souvent UNVERIFIED (SDK)

## 10. S7 — Recommandation
Voir `projects/sfia-studio-next/construction/ml5-cognitive-calibration-recommendation-20261126.md`
- **Proposition:** Terra Medium comme entrée opérationnelle provisoire
- Luna Low/Medium pour usages simples démontrés
- Sol Medium comme référence / filet
- **Aucune promotion automatique** — admission runtime restaurée à `operational`

## 11. Fake/Real
- DETERMINISTIC: garde-fou, FinOps, effort, réallocation, continuité — PROVEN
- LIVE: compatibilité 3 modèles + corpus + Phase D — PROVEN borné
- WEB LIVE / F2 exhaustive / cutover RECETTE candidat — NOT READY

## 12. Réserves / sortie
- R5 IN PROGRESS; ML5 OPEN; R6 NOT STARTED; NO RELEASE; NOT ADOPTED
- WEB LIVE BLOCKED — P0 OPEN
- F2 finale en attente Morris RECETTE
- Décision Morris politique cognitive requise

## 13. Tests exécutés (extrait)
- vitest unit ML5 critique: 98 PASS
- pg idempotence usage: 3 PASS
- tsc: pas d’erreur sur fichiers du mandat (erreurs préexistantes hors périmètre possible)


## 14. Fichiers créés (complets)

### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-guidance-tools.ts`

```
/**
 * ML5 — Nora-accessible cognitive guidance consultation (indicative only).
 * Does not route models; Studio admission remains authoritative.
 */

import {
  COGNITIVE_REFERENTIAL_COMPACT_SUMMARY,
  COGNITIVE_REFERENTIAL_ROW_COUNT,
  COGNITIVE_REFERENTIAL_VERSION,
  getCognitiveGuidanceById,
} from "./cognitive-resources";

export type CognitiveGuidanceConsultArgs = {
  guidanceId?: string;
  compactIndex?: boolean;
};

/** Pure consult — also used by unit tests without Agents SDK invoke plumbing. */
export function consultCognitiveGuidance(args: CognitiveGuidanceConsultArgs) {
  if (args.compactIndex) {
    return {
      status: "OK" as const,
      kind: "COMPACT_INDEX" as const,
      version: COGNITIVE_REFERENTIAL_VERSION,
      rowCount: COGNITIVE_REFERENTIAL_ROW_COUNT,
      lines: [...COGNITIVE_REFERENTIAL_COMPACT_SUMMARY],
      note: "Indicative only — admission is server-side.",
    };
  }
  const id = (args.guidanceId ?? "").trim();
  if (!id) {
    return {
      status: "INVALID" as const,
      reason: "guidanceId or compactIndex required",
    };
  }
  const row = getCognitiveGuidanceById(id);
  if (!row) {
    return {
      status: "NOT_FOUND" as const,
      guidanceId: id,
      hint: "Use compactIndex=true to list ids.",
    };
  }
  return {
    status: "OK" as const,
    kind: "ROW" as const,
    version: COGNITIVE_REFERENTIAL_VERSION,
    row: {
      id: row.id,
      section: row.section,
      elementaire: row.elementaire,
      preferenceFamily: row.preferenceFamily,
      preferenceEffort: row.preferenceEffort,
      qualityAndEscalade: row.qualityAndEscalade,
    },
    note: "Indicative preference — Studio admits the couple; Nora may depart with reason.",
  };
}

export async function buildCognitiveGuidanceTools() {
  const { tool } = await import("@openai/agents");
  const { z } = await import("zod");

  return [
    tool({
      name: "consult_cognitive_guidance",
      description:
        "Consult one indicative cognitive-guidance row by id (e.g. cog-4.1-06), or request a compact index of the 51 elementary rows. Guidance only — not runtime routing; Studio admits model×effort. Never inject the full matrix into replyDraft.",
      parameters: z.object({
        guidanceId: z
          .string()
          .min(3)
          .max(40)
          .optional()
          .describe("Row id such as cog-4.1-06"),
        compactIndex: z
          .boolean()
          .optional()
          .describe("If true, return compact index lines (id|section|label|preference)"),
      }),
      execute: async (args: CognitiveGuidanceConsultArgs) =>
        consultCognitiveGuidance(args),
    }),
  ];
}

```

### `projects/sfia-studio-next/web/tests/integration/ml5-e03-usage-idempotence.pg.test.ts`

```
/**
 * ML5 E03 — provider usage idempotence + ordinal uniqueness (PostgreSQL).
 */
import { beforeAll, describe, expect, it, vi } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

vi.hoisted(() => {
  process.env.STUDIO_LANE = "DEV";
});

import { eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { providerUsageObservations } from "@/db/schema";
import {
  recordNoraProviderUsageFromRunResult,
  recordProviderUsageObservation,
} from "@/domains/conversation/usage-accounting";

describe("ML5 E03 — usage idempotence (PostgreSQL)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.STUDIO_LANE = "DEV";
  });

  it("records two distinct request ordinals when callOrdinal base is set", async () => {
    const generationId = `gen_ord_${Date.now()}`;
    const attemptId = `att_ord_${Date.now()}`;
    const runResult = {
      state: {
        usage: {
          requests: 2,
          inputTokens: 300,
          outputTokens: 40,
          requestUsageEntries: [
            {
              inputTokens: 100,
              outputTokens: 20,
              inputTokensDetails: [{ cached_tokens: 0 }],
            },
            {
              inputTokens: 200,
              outputTokens: 20,
              inputTokensDetails: [{ cached_tokens: 0 }],
            },
          ],
        },
      },
    };

    const first = await recordNoraProviderUsageFromRunResult({
      runResult,
      status: "succeeded",
      generationId,
      attemptId,
      operation: "test.ordinal_batch",
      callOrdinal: 0,
      modelRequested: "gpt-6.2-sol",
      modelApplied: "gpt-6.2-sol",
      segmentIndex: 0,
    });
    expect(first.inserted).toBe(true);

    const rows = await db
      .select()
      .from(providerUsageObservations)
      .where(eq(providerUsageObservations.generationId, generationId));
    expect(rows).toHaveLength(2);
    expect(new Set(rows.map((r) => r.idempotencyKey)).size).toBe(2);

    // Replay must not duplicate.
    const replay = await recordNoraProviderUsageFromRunResult({
      runResult,
      status: "succeeded",
      generationId,
      attemptId,
      operation: "test.ordinal_batch",
      callOrdinal: 0,
      modelRequested: "gpt-6.2-sol",
      modelApplied: "gpt-6.2-sol",
      segmentIndex: 0,
    });
    expect(replay.inserted).toBe(false);
    expect(replay.id).toBe("");

    const after = await db
      .select({ c: sql<number>`count(*)::int` })
      .from(providerUsageObservations)
      .where(eq(providerUsageObservations.generationId, generationId));
    expect(after[0]!.c).toBe(2);
  });

  it("conflict insert returns empty id (no fabricated persistent UUID)", async () => {
    const key = `idem_conflict_${Date.now()}`;
    const a = await recordProviderUsageObservation({
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: key,
      modelRequested: "gpt-6-luna",
      modelApplied: "gpt-6-luna",
      inputTokens: 10,
      outputTokens: 5,
      cachedInputTokens: 0,
      providerRequests: 1,
      operation: "test.conflict",
    });
    expect(a.inserted).toBe(true);
    expect(a.id.length).toBeGreaterThan(0);

    const b = await recordProviderUsageObservation({
      status: "succeeded",
      granularity: "REQUEST",
      idempotencyKey: key,
      modelRequested: "gpt-6-luna",
      modelApplied: "gpt-6-luna",
      inputTokens: 10,
      outputTokens: 5,
      cachedInputTokens: 0,
      providerRequests: 1,
      operation: "test.conflict",
    });
    expect(b.inserted).toBe(false);
    expect(b.id).toBe("");
  });

  it("unknown request count is GENERATION_AGGREGATE not REQUEST", async () => {
    const generationId = `gen_unk_${Date.now()}`;
    const attemptId = `att_unk_${Date.now()}`;
    const r = await recordNoraProviderUsageFromRunResult({
      runResult: {
        state: {
          usage: {
            // requests omitted → unknown
            inputTokens: 50,
            outputTokens: 10,
          },
        },
      },
      status: "succeeded",
      generationId,
      attemptId,
      operation: "test.unknown_requests",
      modelRequested: "gpt-6.1-terra",
      modelApplied: "gpt-6.1-terra",
      segmentIndex: 0,
    });
    expect(r.inserted).toBe(true);
    const rows = await db
      .select()
      .from(providerUsageObservations)
      .where(eq(providerUsageObservations.generationId, generationId));
    expect(rows).toHaveLength(1);
    expect(rows[0]!.granularity).toBe("GENERATION_AGGREGATE");
    expect(rows[0]!.limitsJson).toContain("REQUEST_COUNT_UNKNOWN");
  });
});

```

### `projects/sfia-studio-next/web/scripts/ml5-cognitive-calibration-live.mts`

```
/**
 * ML5 S6 — bounded LIVE cognitive calibration (DEV only).
 * Uses real Nora adapter + OpenAI Agents SDK. WEB LIVE must stay off.
 *
 * Envelope (campaign, not operational):
 * - ≤ 40 Responses attempted (retries counted)
 * - ≤ 2_000_000 input tokens cumulative
 * - ≤ 200_000 output tokens cumulative
 * - ≤ 100_000 input / ≤ 10_000 output per request (soft stop)
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { config } from "dotenv";
import path from "node:path";

config({ path: path.resolve(process.cwd(), ".env.local") });

process.env.STUDIO_LANE = "DEV";
process.env.SFIA_COGNITIVE_ADMISSION_MODE = "calibration";
process.env.SFIA_COG_PROFILE_TYPE =
  process.env.SFIA_COG_PROFILE_TYPE || "OPERATIONAL_PROVISIONAL";
process.env.SFIA_WEB_SEARCH_LIVE = "0";
process.env.SFIA_WEB_SEARCH_ENABLED = "0";

const key = (process.env.OPENAI_API_KEY || "").trim();
if (!key) {
  console.error("STOP: OPENAI_API_KEY missing");
  process.exit(2);
}
const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
process.env.SFIA_OPENAI_EXPECTED_KEY_FP =
  process.env.SFIA_OPENAI_EXPECTED_KEY_FP || fp;

const OUT =
  process.env.SFIA_CALIBRATION_OUT ||
  path.resolve(process.cwd(), "../../../.tmp-sfia-review/calibration-live");
mkdirSync(OUT, { recursive: true });

const ENVELOPE = {
  maxResponses: 40,
  maxInputTokens: 2_000_000,
  maxOutputTokens: 200_000,
  maxInputPerRequest: 100_000,
  maxOutputPerRequest: 10_000,
};

type ScenarioResult = {
  id: string;
  phase: string;
  modelRequested: string;
  effortRequested: string;
  modelApplied: string | null;
  effortApplied: string | null;
  status: string;
  qualitative: "PASS" | "FAIL" | "PARTIAL" | "SKIP";
  notes: string[];
  inputTokens: number | null;
  outputTokens: number | null;
  cachedInputTokens: number | null;
  reasoningTokens: number | null;
  providerRequests: number | null;
  estimatedCostUsd: number | null;
  costCoverage: string | null;
  durationMs: number;
  contentPreview: string;
};

const ledger: {
  startedAt: string;
  finishedAt: string | null;
  lane: string;
  keyFingerprint: string;
  admissionMode: string | undefined;
  envelope: typeof ENVELOPE;
  responsesAttempted: number;
  inputTokens: number;
  outputTokens: number;
  estimatedCostUsd: number;
  scenarios: ScenarioResult[];
  stopReason: string | null;
} = {
  startedAt: new Date().toISOString(),
  finishedAt: null,
  lane: "DEV",
  keyFingerprint: fp,
  admissionMode: process.env.SFIA_COGNITIVE_ADMISSION_MODE,
  envelope: ENVELOPE,
  responsesAttempted: 0,
  inputTokens: 0,
  outputTokens: 0,
  estimatedCostUsd: 0,
  scenarios: [],
  stopReason: null,
};

function withinEnvelope(nextIn = 0, nextOut = 0): boolean {
  if (ledger.responsesAttempted >= ENVELOPE.maxResponses) return false;
  if (ledger.inputTokens + nextIn > ENVELOPE.maxInputTokens) return false;
  if (ledger.outputTokens + nextOut > ENVELOPE.maxOutputTokens) return false;
  return true;
}

function save() {
  writeFileSync(
    path.join(OUT, "calibration-ledger.json"),
    JSON.stringify(ledger, null, 2),
  );
}

function scoreQualitative(
  id: string,
  content: string,
  status: string,
): { verdict: ScenarioResult["qualitative"]; notes: string[] } {
  const notes: string[] = [];
  if (status !== "COMPLETE") {
    notes.push(`status=${status}`);
    return { verdict: "FAIL", notes };
  }
  const text = content.trim();
  if (text.length < 20) {
    notes.push("reply_too_short");
    return { verdict: "FAIL", notes };
  }
  // Critical silent failure heuristics (deterministic, not an oracle).
  if (/as an ai language model|i cannot access|hallucin/i.test(text)) {
    notes.push("boilerplate_or_access_claim");
  }
  if (id.includes("negation") && !/(pas|ne |sans|interdit|exclu)/i.test(text)) {
    notes.push("negation_not_reflected");
    return { verdict: "FAIL", notes };
  }
  if (id.includes("multi") && text.length < 80) {
    notes.push("multi_intent_thin");
    return { verdict: "PARTIAL", notes };
  }
  if (id.includes("ambigu") && !/(\?|clarif|précis|ambigu)/i.test(text)) {
    notes.push("ambiguity_not_acknowledged");
    return { verdict: "PARTIAL", notes };
  }
  return { verdict: notes.length ? "PARTIAL" : "PASS", notes };
}

async function runCase(input: {
  id: string;
  phase: string;
  model: "gpt-6-luna" | "gpt-6.1-terra" | "gpt-6.2-sol";
  effort: "none" | "low" | "medium" | "high" | "xhigh" | "max";
  userText: string;
}): Promise<ScenarioResult | null> {
  if (!withinEnvelope()) {
    ledger.stopReason = "ENVELOPE_EXHAUSTED_BEFORE_CASE";
    return null;
  }

  const { buildCognitivePolicy } = await import(
    "../src/domains/conversation/cognitive-policy.ts"
  );
  const { generateNoraReply } = await import(
    "../src/domains/conversation/nora-adapter.ts"
  );

  const policy = buildCognitivePolicy(input.userText, "OPERATIONAL_PROVISIONAL", {
    profileHint: "analyse",
    modelHint: input.model,
    effortHint: input.effort,
  });

  const started = Date.now();
  ledger.responsesAttempted += 1; // count attempt even if SDK loops further
  let result;
  try {
    result = await generateNoraReply({
      userText: input.userText,
      contextSnippets: [
        "Calibration LIVE bornée ML5 — WEB LIVE interdit.",
        "Réponds en français, concis, sans inventer de sources externes.",
      ],
      policyOverride: policy,
    });
  } catch (e) {
    const row: ScenarioResult = {
      id: input.id,
      phase: input.phase,
      modelRequested: policy.modelRequested,
      effortRequested: policy.effortRequested,
      modelApplied: null,
      effortApplied: null,
      status: "THROW",
      qualitative: "FAIL",
      notes: [String((e as Error)?.message ?? e).slice(0, 200)],
      inputTokens: null,
      outputTokens: null,
      cachedInputTokens: null,
      reasoningTokens: null,
      providerRequests: null,
      estimatedCostUsd: null,
      costCoverage: null,
      durationMs: Date.now() - started,
      contentPreview: "",
    };
    ledger.scenarios.push(row);
    save();
    return row;
  }

  const usage = result.usage;
  const inTok = usage?.inputTokens ?? 0;
  const outTok = usage?.outputTokens ?? 0;
  // Approximate additional SDK requests from providerRequests when available
  const reqs = usage?.providerRequests ?? 1;
  if (typeof reqs === "number" && reqs > 1) {
    ledger.responsesAttempted += reqs - 1;
  }
  ledger.inputTokens += inTok || 0;
  ledger.outputTokens += outTok || 0;

  if (
    (inTok || 0) > ENVELOPE.maxInputPerRequest ||
    (outTok || 0) > ENVELOPE.maxOutputPerRequest
  ) {
    ledger.stopReason = `PER_REQUEST_CAP id=${input.id}`;
  }

  const q = scoreQualitative(input.id, result.content || "", result.status);
  const row: ScenarioResult = {
    id: input.id,
    phase: input.phase,
    modelRequested: policy.modelRequested,
    effortRequested: policy.effortRequested,
    modelApplied: result.modelApplied ?? null,
    effortApplied: result.effortApplied ?? null,
    status: result.status,
    qualitative: q.verdict,
    notes: [
      ...q.notes,
      `effort_policy=${policy.effortRequested}`,
      `effort_budget_band=${policy.effortBudgetBand}`,
      ...(result.streamingNotes ? [String(result.streamingNotes).slice(0, 120)] : []),
    ],
    inputTokens: usage?.inputTokens ?? null,
    outputTokens: usage?.outputTokens ?? null,
    cachedInputTokens: usage?.cachedInputTokens ?? null,
    reasoningTokens: usage?.reasoningTokens ?? null,
    providerRequests: usage?.providerRequests ?? null,
    estimatedCostUsd: null,
    costCoverage: null,
    durationMs: Date.now() - started,
    contentPreview: (result.content || "").slice(0, 400),
  };

  // Estimate cost via accounting helper when possible
  try {
    const { estimateCostUsd } = await import(
      "../src/domains/conversation/usage-accounting.ts"
    );
    const est = estimateCostUsd(
      {
        inputTokens: row.inputTokens,
        outputTokens: row.outputTokens,
        cachedInputTokens: row.cachedInputTokens,
      },
      row.modelApplied || row.modelRequested,
      { modelAppliedUnverified: !row.modelApplied },
    );
    row.estimatedCostUsd = est.estimatedCostUsd;
    row.costCoverage = est.costCoverage;
    if (typeof est.estimatedCostUsd === "number") {
      ledger.estimatedCostUsd += est.estimatedCostUsd;
    }
  } catch {
    /* observational */
  }

  ledger.scenarios.push(row);
  save();
  console.log(
    `[${input.phase}/${input.id}] ${row.modelRequested}@${row.effortRequested} status=${row.status} q=${row.qualitative} in=${row.inputTokens} out=${row.outputTokens} ms=${row.durationMs}`,
  );

  if (
    row.status !== "COMPLETE" &&
    /MODEL|ENTITLEMENT|PERMISSION|not found|unsupported/i.test(
      row.notes.join(" "),
    )
  ) {
    ledger.stopReason = `PROVIDER_PERMANENT id=${input.id}`;
  }
  if (!withinEnvelope()) ledger.stopReason = ledger.stopReason || "ENVELOPE_REACHED";
  return row;
}

const CORPUS = {
  simple: "Bonjour. Confirme en une phrase que tu es prêt pour une calibration courte.",
  ambigu:
    "Peux-tu traiter le dossier ? (ne précise pas lequel — signale l'ambiguïté déterminante avant d'agir)",
  multi:
    "1) Résume en 2 puces ce qu'est un sas de préparation. 2) Liste 2 risques si on saute la qualification. 3) Pose une seule question de clarification.",
  negation:
    "Explique brièvement la révision documentaire D4, mais n'invente aucune citation Git et n'ouvre aucune recherche web.",
  investigate:
    "Une demande mélange intention projet et question technique. Quelles capacités te semblent nécessaires, et quelle allocation modèle/effort proposerais-tu (Luna/Terra/Sol) avec justification courte ?",
};

async function main() {
  console.log("Calibration LIVE start", {
    fp,
    out: OUT,
    envelope: ENVELOPE,
  });

  // Phase A — compatibility medium
  for (const model of ["gpt-6-luna", "gpt-6.1-terra", "gpt-6.2-sol"] as const) {
    if (ledger.stopReason) break;
    await runCase({
      id: `A-compat-${model}`,
      phase: "A",
      model,
      effort: "medium",
      userText: CORPUS.simple,
    });
  }

  // Phase B — qualitative medium trio on fixed corpus
  for (const model of ["gpt-6-luna", "gpt-6.1-terra", "gpt-6.2-sol"] as const) {
    for (const [key, text] of Object.entries(CORPUS)) {
      if (key === "simple") continue; // already covered in A
      if (ledger.stopReason) break;
      await runCase({
        id: `B-${key}-${model}`,
        phase: "B",
        model,
        effort: "medium",
        userText: text,
      });
    }
  }

  // Phase C — discriminating couples (bounded)
  const phaseC: Array<{
    id: string;
    model: "gpt-6-luna" | "gpt-6.1-terra" | "gpt-6.2-sol";
    effort: "medium" | "high" | "xhigh";
    text: string;
  }> = [
    {
      id: "C-luna-high-vs-terra-med-a",
      model: "gpt-6-luna",
      effort: "high",
      text: CORPUS.investigate,
    },
    {
      id: "C-terra-med-vs-luna-high-a",
      model: "gpt-6.1-terra",
      effort: "medium",
      text: CORPUS.investigate,
    },
    {
      id: "C-terra-high-vs-sol-med-a",
      model: "gpt-6.1-terra",
      effort: "high",
      text: CORPUS.multi,
    },
    {
      id: "C-sol-med-ref-a",
      model: "gpt-6.2-sol",
      effort: "medium",
      text: CORPUS.multi,
    },
  ];
  for (const c of phaseC) {
    if (ledger.stopReason) break;
    await runCase({
      id: c.id,
      phase: "C",
      model: c.model,
      effort: c.effort,
      userText: c.text,
    });
  }

  ledger.finishedAt = new Date().toISOString();
  if (!ledger.stopReason) ledger.stopReason = "COMPLETED_PLAN";
  save();

  const summary = {
    stopReason: ledger.stopReason,
    responsesAttempted: ledger.responsesAttempted,
    inputTokens: ledger.inputTokens,
    outputTokens: ledger.outputTokens,
    estimatedCostUsd: ledger.estimatedCostUsd,
    byQualitative: ledger.scenarios.reduce(
      (acc, s) => {
        acc[s.qualitative] = (acc[s.qualitative] || 0) + 1;
        return acc;
      },
      {} as Record<string, number>,
    ),
    effortFidelity: ledger.scenarios.map((s) => ({
      id: s.id,
      requested: s.effortRequested,
      applied: s.effortApplied,
    })),
  };
  writeFileSync(
    path.join(OUT, "calibration-summary.json"),
    JSON.stringify(summary, null, 2),
  );
  console.log("Calibration LIVE done", summary);
}

main().catch((e) => {
  ledger.stopReason = `FATAL:${String(e).slice(0, 200)}`;
  save();
  console.error(e);
  process.exit(1);
});

```

### `projects/sfia-studio-next/web/scripts/ml5-calibration-phase-d.mts`

```
/** ML5 S6 Phase D — product API conductor path (DEV), envelope-residual only. */
import { writeFileSync, mkdirSync } from "node:fs";
import { config } from "dotenv";
config({ path: ".env.local" });

const BASE = process.env.SFIA_CALIB_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_CALIBRATION_OUT ||
  "../../../.tmp-sfia-review/calibration-live";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };
async function api(
  path: string,
  opts: { method?: string; body?: unknown; timeoutMs?: number } = {},
) {
  const res = await fetch(`${BASE}${path}`, {
    method: opts.method || "GET",
    headers: {
      ...(opts.body ? { "content-type": "application/json" } : {}),
      ...(jar.cookie ? { cookie: jar.cookie } : {}),
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    signal: AbortSignal.timeout(opts.timeoutMs ?? 600_000),
  });
  for (const c of res.headers.getSetCookie?.() || []) {
    const part = c.split(";")[0]!;
    jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
  }
  const text = await res.text();
  let json: Record<string, unknown> = {};
  try {
    json = JSON.parse(text) as Record<string, unknown>;
  } catch {
    json = { _raw: text.slice(0, 500) };
  }
  return { status: res.status, json };
}

async function main() {
  const out: Record<string, unknown> = {
    phase: "D",
    base: BASE,
    startedAt: new Date().toISOString(),
    steps: [] as unknown[],
  };
  const steps = out.steps as unknown[];

  const auth = await api("/api/dev/auto-session", { method: "POST" });
  steps.push({ auth: auth.status });

  const prep = await api("/api/preparations", { method: "POST", body: {} });
  const preparationId = (prep.json as { preparationId: string }).preparationId;
  let g = await api(`/api/preparations/${preparationId}`);
  let rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  await api(`/api/preparations/${preparationId}`, {
    method: "PATCH",
    body: {
      previewName: "ML5-Calib-PhaseD",
      previewSummary:
        "Calibration Phase D — parcours intégré multi-modèles borné.",
      expectedCreationRevision: rev,
    },
  });
  g = await api(`/api/preparations/${preparationId}`);
  rev = (g.json as { preparation: { creationRevision: number } }).preparation
    .creationRevision;
  const created = await api(`/api/preparations/${preparationId}/create-project`, {
    method: "POST",
    body: {
      expectedCreationRevision: rev,
      projectName: "ML5-Calib-PhaseD",
      idempotencyKey: `calib-d-${Date.now()}`,
      previewSummary: "Calibration Phase D bornée.",
    },
  });
  out.projectId = (created.json as { projectId?: string }).projectId;
  out.preparationId = preparationId;

  const projectId = out.projectId as string;
  const iqStarted = Date.now();
  let iqLast: unknown = null;
  while (Date.now() - iqStarted < 180_000) {
    const r = await api(
      `/api/projects/${projectId}/initial-qualification/reconcile`,
      { method: "POST", timeoutMs: 60_000 },
    );
    iqLast = (r.json as { initialQualification?: unknown }).initialQualification || r.json;
    const status = (iqLast as { status?: string } | null)?.status;
    if (status && !["PENDING", "RUNNING", "UNKNOWN"].includes(status)) break;
    await new Promise((r) => setTimeout(r, 1500));
  }
  steps.push({
    qualification: (iqLast as { status?: string } | null)?.status,
    phase: (iqLast as { phase?: string } | null)?.phase,
  });

  const t1 = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: {
      content:
        "Pour cette calibration: 1) reformule ma demande; 2) signale si une ambiguïté bloque; 3) propose une allocation Luna/Terra/Sol avec effort, sans WEB.",
      clientTurnKey: `calib-d1-${Date.now()}`,
      forceNewCognitiveWork: true,
    },
    timeoutMs: 600_000,
  });
  const cw1 =
    ((t1.json as { cognitiveWork?: Record<string, unknown> }).cognitiveWork ||
      (t1.json as { conductor?: Record<string, unknown> }).conductor ||
      {}) as Record<string, unknown>;
  const msgs1 = (t1.json as { messages?: Array<{ content?: string }> }).messages;
  steps.push({
    turn: 1,
    http: t1.status,
    workId: cw1.workId || cw1.id,
    revision: cw1.revision,
    suspended: cw1.suspended,
    replyStatus:
      (t1.json as { replyStatus?: string }).replyStatus ||
      (t1.json as { noraStatus?: string }).noraStatus ||
      (t1.json as { status?: string }).status,
    preview:
      msgs1?.slice(-1)[0]?.content?.slice(0, 400) ||
      String((t1.json as { content?: string }).content || "").slice(0, 400) ||
      JSON.stringify(t1.json).slice(0, 400),
  });

  const wid = (cw1.workId || cw1.id) as string | undefined;
  if (wid) {
    const t2 = await api(`/api/preparations/${preparationId}/messages`, {
      method: "POST",
      body: {
        content:
          "Poursuis: distingue un besoin simple (salutation) d'un besoin d'investigation multi-intentions, et indique si tu changes de ressource cognitive entre les deux.",
        clientTurnKey: `calib-d2-${Date.now()}`,
        cognitiveWorkId: wid,
      },
      timeoutMs: 600_000,
    });
    const cw2 =
      ((t2.json as { cognitiveWork?: Record<string, unknown> }).cognitiveWork ||
        (t2.json as { conductor?: Record<string, unknown> }).conductor ||
        {}) as Record<string, unknown>;
    const msgs2 = (t2.json as { messages?: Array<{ content?: string }> }).messages;
    steps.push({
      turn: 2,
      http: t2.status,
      workId: cw2.workId || cw2.id,
      revision: cw2.revision,
      suspended: cw2.suspended,
      sameWork: (cw2.workId || cw2.id) === wid,
      replyStatus:
        (t2.json as { replyStatus?: string }).replyStatus ||
        (t2.json as { noraStatus?: string }).noraStatus ||
        (t2.json as { status?: string }).status,
      preview:
        msgs2?.slice(-1)[0]?.content?.slice(0, 400) ||
        String((t2.json as { content?: string }).content || "").slice(0, 400) ||
        JSON.stringify(t2.json).slice(0, 400),
    });
  }

  out.finishedAt = new Date().toISOString();
  writeFileSync(`${OUT}/phase-d-product.json`, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2).slice(0, 3000));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```

### `projects/sfia-studio-next/construction/ml5-cognitive-calibration-recommendation-20261126.md`

```
# ML5 — Recommandation de politique cognitive (post-calibration LIVE)

**Date:** 2026-11-26
**Statut:** PROPOSITION — non adoptée — décision Morris requise
**Lane calibration:** DEV
**Admission runtime restaurée:** `operational` (Luna/Terra non promues automatiquement)

## 1. Ressource initiale recommandée

**Terra Medium (`gpt-6.1-terra` @ `medium`)** comme candidat d’entrée pour les tours d’analyse nominaux, sous réserve de validation Morris.

Justification: sur le corpus borné (ambiguïté, multi-intentions, négations, investigation), Terra Medium a produit des réponses COMPLETE/PASS, avec reconnaissance des ambiguïtés et structuration multi-volets, à un coût unitaire nettement inférieur à Sol Medium.

## 2. Couples effectivement qualifiés (LIVE)

| Couple | Phase | Résultat | Notes |
|---|---|---|---|
| Luna Medium | A/B | PASS | Compatibilité + corpus |
| Terra Medium | A/B/C | PASS | Compatibilité + corpus + discriminant |
| Sol Medium | A/B/C | PASS | Référence comparative |
| Luna High | C | PASS | vs Terra Medium (investigation) |
| Terra High | C | PASS | vs Sol Medium (multi) |
| Luna Low | D (proposition Nora) | Observé | Recommandé par Nora pour salutation — couple non forcé en Phase A |

Non qualifiés exhaustivement: xhigh/max, Luna none, 17 couples référentiels restants.

## 3. Conditions de mobilisation

- **Luna Low/Medium:** salutation, reformulation simple, faits déjà acquis, tours courts sans investigation.
- **Terra Medium:** analyse multi-intentions, ambiguïté à clarifier, négations/contraintes, allocation et stratégie.
- **Sol Medium:** référence / cas où Terra échoue qualitativement, ou besoin de profondeur comparative non couverte.
- Escalade Luna→Terra ou Terra→Sol sur signaux: multi-intentions non couvertes, risques non identifiés, contradiction de sources, échec critique silencieux.
- Désescalade inverse lorsque le segment suivant est purement simple.

## 4. Comparaison qualité / coût / latence (corpus A–C)

| Modèle | n | Tokens in | Tokens out | Coût estimé USD | Latence moy. |
|---|---:|---:|---:|---:|---:|
| Luna | 6 | 44 551 | 3 982 | ~0.0038 | ~6.9 s |
| Terra | 7 | 51 985 | 2 696 | ~0.0308 | ~8.2 s |
| Sol | 6 | 44 552 | 1 810 | ~0.0933 | ~5.9 s |

Coût campagne adapter ~**0.128 USD** (Standard court, PARTIAL si modelApplied non vérifié).
Total Responses adapter: **19** (+ Phase D product séparée). Enveloppe 40 non saturée.

Qualité: aucun FAIL critique silencieux sur le corpus; Sol n’a pas démontré de surcroît qualitatif systématique justifiant un défaut Sol Medium pour tous les tours.

## 5. Ajustements référentiel indicatif

- Conserver les 51 lignes; ne pas cartographier rigidement tâche→modèle.
- Preférence indicative Terra Medium pour §4.1–4.3 « analyse » reste cohérente avec les preuves.
- Luna Low pour salutations: aligné Phase D (proposition Nora).

## 6. Réserves

- `effortApplied` / `modelApplied` souvent UNVERIFIED côté SDK — l’effort **demandé** a été transmis (`effortRequested` préservé: medium/high), mais la confirmation fournisseur n’est pas toujours exposée.
- Phase D: continuité workId démontrée; réallocation LIVE autonome Nora non forcée (Nora a recommandé Luna low puis différenciation — pas une bascule Terra/Sol automatisée).
- WEB LIVE toujours OFF; F2 visuelle en attente Morris RECETTE.
- Garde-fou EXPECTED fail-closed présent en DEV; candidat RECETTE figé `a150926c` n’embarque pas encore ce garde-fou applicatif.
- Pas de plafond monétaire produit; estimation ≠ maximum garanti.

## 7. Essais futurs

- xhigh Luna/Terra vs Sol Medium sur StockTrack/RoomBooking bornés.
- Mesure `modelApplied`/`effortApplied` lorsque le SDK les expose.
- Campagne visuelle F2 + cutover RECETTE du candidat (hors scope présent).

## 8. Décision demandée à Morris

1. Adopter Terra Medium comme défaut opérationnel provisoire ?
2. Admettre Luna Low/Medium pour usages simples démontrés ?
3. Conserver Sol Medium comme référence / filet ?
4. Reporter toute promotion jusqu’à essais additionnels ?

```

## 15. Diffs utiles (fichiers modifiés focus)

### `projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts b/projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts
index 4df20245..f0a05f6f 100644
--- a/projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts
+++ b/projects/sfia-studio-next/web/src/lib/openai-lane-guard.ts
@@ -3,6 +3,9 @@
  *
  * Never log or return the raw key. Fingerprints are SHA-256 hex truncated to 16 chars.
  * A missing critical config refuses the LIVE path — no cross-lane fallback.
+ *
+ * LIVE OpenAI requires an explicit expected fingerprint binding. An env value alone
+ * is not proof of project association; EXPECTED must be set and must match.
  */

 import { createHash } from "node:crypto";
@@ -15,6 +18,7 @@ export type OpenAiLaneGuardResult =
       reasonCode:
         | "STUDIO_LANE_MISSING"
         | "OPENAI_KEY_MISSING"
+        | "OPENAI_EXPECTED_FP_MISSING"
         | "OPENAI_KEY_FINGERPRINT_MISMATCH"
         | "OPENAI_KEY_FORBIDDEN_PEER"
         | "OPENAI_KEY_EMPTY";
@@ -34,7 +38,7 @@ function studioLane(env: NodeJS.ProcessEnv = process.env): string {
  * Assert the process OpenAI key belongs to this lane.
  *
  * Env (non-secret):
- * - `SFIA_OPENAI_EXPECTED_KEY_FP` — must match current key fingerprint when set
+ * - `SFIA_OPENAI_EXPECTED_KEY_FP` — **required** for LIVE admission; must match key FP
  * - `SFIA_OPENAI_FORBIDDEN_KEY_FP` — comma-separated peer fingerprints that must NOT match
  *   (e.g. RECETTE forbids the DEV key fingerprint once a distinct RECETTE key is in place)
  */
@@ -72,7 +76,15 @@ export function assertOpenAiKeyForLane(
   }

   const expected = (env.SFIA_OPENAI_EXPECTED_KEY_FP ?? "").trim().toLowerCase();
-  if (expected && expected !== keyFingerprint) {
+  if (!expected) {
+    return {
+      ok: false,
+      lane,
+      reasonCode: "OPENAI_EXPECTED_FP_MISSING",
+      reason: `SFIA_OPENAI_EXPECTED_KEY_FP requis pour OpenAI LIVE sur lane ${lane} (fail-closed)`,
+    };
+  }
+  if (expected !== keyFingerprint) {
     return {
       ok: false,
       lane,

```

### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 2da94efe..681a32ec 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -231,7 +231,16 @@ export type CognitivePolicy = {
   profileType: PolicyProfileType;
   profile: CognitiveProfile;
   modelRequested: CognitiveModelId;
-  effortRequested: ReasoningEffort;
+  /**
+   * Provider effort admitted for the API call — full CognitiveEffort band
+   * (none|low|medium|high|xhigh|max). Must NOT be collapsed to budget bands.
+   */
+  effortRequested: CognitiveEffort;
+  /**
+   * Technical segment sizing band (low|medium|high) derived from admitted effort.
+   * Used only for historical budget tables — never sent as the provider effort.
+   */
+  effortBudgetBand: ReasoningEffort;
   toolAllowlist: Array<
     | "search_project_resources"
     | "read_project_document_revision"
@@ -254,6 +263,7 @@ export type CognitivePolicy = {
     | "read_evidence_capture_meta"
     | "public_web_search"
     | "public_web_open_page"
+    | "consult_cognitive_guidance"
   >;
   budgets: BudgetLimits;
   reasonCodes: string[];
@@ -415,8 +425,9 @@ export function buildCognitivePolicy(
     modelId: opts?.modelHint ?? OPERATIONAL_DEFAULT_RESOURCE.modelId,
     effort: effortHint,
   });
-  // Profile budgets still keyed on low|medium|high; map extended efforts up.
-  const effortForBudgets: ReasoningEffort =
+  // Profile budgets still keyed on low|medium|high; map extended efforts for
+  // sizing only — never rewrite the provider effort sent to the API.
+  const effortBudgetBand: ReasoningEffort =
     admitted.effort === "low" || admitted.effort === "none"
       ? "low"
       : admitted.effort === "medium"
@@ -451,6 +462,7 @@ export function buildCognitivePolicy(
     "read_evidence_capture_meta",
     "public_web_search",
     "public_web_open_page",
+    "consult_cognitive_guidance",
   ];

   const reasonCodes = [
@@ -458,6 +470,7 @@ export function buildCognitivePolicy(
     `PROFILE_TYPE_${profileType}`,
     `LANE_${studioLane()}`,
     ...admitted.reasonCodes,
+    `EFFORT_BUDGET_BAND_${effortBudgetBand}`,
   ];
   if (opts?.profileHint) reasonCodes.push(`PROFILE_HINT_${opts.profileHint}`);
   if (opts?.effortHint) reasonCodes.push(`EFFORT_HINT_${opts.effortHint}`);
@@ -468,9 +481,9 @@ export function buildCognitivePolicy(
     profileType,
     profile,
     modelRequested: admitted.modelId,
-    // Store admitted effort narrowed to ReasoningEffort for SDK path when in band;
-    // high covers xhigh/max until calibration expands RuntimeEffort type on adapter.
-    effortRequested: effortForBudgets,
+    // Full admitted provider effort (none/xhigh/max preserved when admitted).
+    effortRequested: admitted.effort,
+    effortBudgetBand,
     toolAllowlist,
     budgets,
     reasonCodes,
@@ -486,3 +499,130 @@ export function maxTurnsForPolicy(policy: CognitivePolicy): number {
   // Always allow at least one tool loop for authorized read capabilities.
   return Math.max(2, policy.budgets.maxProviderCalls);
 }
+
+export type ContinuityResourceHeld = {
+  modelId?: string | null;
+  effort?: string | null;
+};
+
+export type ContinuityResourceProposal = {
+  modelId?: string | null;
+  effort?: string | null;
+};
+
+/**
+ * S3 — resolve next-segment policy from structured proposal + held couple.
+ * - Explicit proposal → admit; on refusal prefer holding the current couple
+ *   (never treat Sol medium as the sole answer to every refusal).
+ * - No proposal → hold last admitted model/effort when present.
+ * - First segment without hold → operational/calibration default via buildCognitivePolicy.
+ */
+export function resolveContinuityCognitivePolicy(input: {
+  seed: string;
+  overrideType?: PolicyProfileType;
+  profileHint?: CognitiveProfile;
+  /** Forced effort (e.g. restitution / investigation segment rules). */
+  effortHint?: ReasoningEffort | CognitiveEffort;
+  proposal?: ContinuityResourceProposal | null;
+  held?: ContinuityResourceHeld | null;
+}): CognitivePolicy {
+  const mode = admissionModeFromEnv();
+  const profile =
+    input.profileHint ?? qualifyCognitiveProfile(input.seed).profile;
+  const proposedModel = (input.proposal?.modelId ?? "").trim() || null;
+  const proposedEffort = (input.proposal?.effort ?? "").trim() || null;
+  const heldModel = (input.held?.modelId ?? "").trim() || null;
+  const heldEffort = (input.held?.effort ?? "").trim() || null;
+  const hasExplicitProposal = Boolean(proposedModel || proposedEffort);
+
+  const requestedModel =
+    proposedModel || heldModel || OPERATIONAL_DEFAULT_RESOURCE.modelId;
+  const requestedEffort =
+    input.effortHint ||
+    proposedEffort ||
+    heldEffort ||
+    defaultEffortForProfile(profile);
+
+  const direct = admitModelEffort(
+    requestedModel as CognitiveModelId,
+    requestedEffort as CognitiveEffort,
+    mode,
+  );
+
+  if (direct.admitted) {
+    const policy = buildCognitivePolicy(input.seed, input.overrideType, {
+      profileHint: input.profileHint,
+      modelHint: direct.modelId,
+      effortHint: direct.effort,
+    });
+    const decisions: string[] = [];
+    if (!hasExplicitProposal) {
+      decisions.push(heldModel ? "RESOURCE_CONTINUITY_HOLD" : "RESOURCE_CONTINUITY_DEFAULT");
+    } else {
+      decisions.push("RESOURCE_CONTINUITY_ADMITTED");
+      if (proposedModel && heldModel && proposedModel !== heldModel) {
+        decisions.push("RESOURCE_CONTINUITY_MODEL_CHANGE");
+      }
+      if (
+        proposedEffort &&
+        heldEffort &&
+        proposedEffort !== heldEffort &&
+        (!proposedModel || proposedModel === heldModel || proposedModel === direct.modelId)
+      ) {
+        decisions.push("RESOURCE_CONTINUITY_EFFORT_CHANGE");
+      }
+      if (heldModel && !proposedModel && proposedEffort) {
+        decisions.push("RESOURCE_CONTINUITY_EFFORT_CHANGE");
+      }
+      if (!heldModel && proposedModel) {
+        decisions.push("RESOURCE_CONTINUITY_MODEL_CHANGE");
+      }
+    }
+    return {
+      ...policy,
+      reasonCodes: [...policy.reasonCodes, ...decisions],
+    };
+  }
+
+  // Refused proposal/request — prefer holding the already-admitted couple.
+  if (heldModel && heldEffort) {
+    const hold = admitModelEffort(
+      heldModel as CognitiveModelId,
+      heldEffort as CognitiveEffort,
+      mode,
+    );
+    if (hold.admitted) {
+      const policy = buildCognitivePolicy(input.seed, input.overrideType, {
+        profileHint: input.profileHint,
+        modelHint: hold.modelId,
+        effortHint: hold.effort,
+      });
+      return {
+        ...policy,
+        reasonCodes: [
+          ...policy.reasonCodes,
+          `RESOURCE_REFUSED_${direct.reasonCode}`,
+          "RESOURCE_CONTINUITY_HOLD_AFTER_REFUSAL",
+          `REQUESTED_MODEL_${requestedModel}`,
+          `REQUESTED_EFFORT_${requestedEffort}`,
+        ],
+      };
+    }
+  }
+
+  // No compatible hold — fall through to catalogue fallback (explicit codes).
+  const policy = buildCognitivePolicy(input.seed, input.overrideType, {
+    profileHint: input.profileHint,
+    modelHint: requestedModel as CognitiveModelId,
+    effortHint: requestedEffort as CognitiveEffort,
+  });
+  return {
+    ...policy,
+    reasonCodes: [
+      ...policy.reasonCodes,
+      "RESOURCE_CONTINUITY_FALLBACK_AFTER_REFUSAL",
+      `REQUESTED_MODEL_${requestedModel}`,
+      `REQUESTED_EFFORT_${requestedEffort}`,
+    ],
+  };
+}

```

### `projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
index 42fd056f..8f33eb47 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
@@ -185,6 +185,8 @@ export function estimateCostUsd(
     !applyLongContextTier &&
     inputTokens > LONG_CONTEXT_INPUT_THRESHOLD_TOKENS
   ) {
+    // Aggregate used short-context rates while per-request tiers are unknown —
+    // never present the dollar figure as fully KNOWN.
     limits.push("LONG_CONTEXT_TIER_SUPPRESSED_AGGREGATE");
   }

@@ -203,6 +205,10 @@ export function estimateCostUsd(
     }
   }

+  if (limits.includes("LONG_CONTEXT_TIER_SUPPRESSED_AGGREGATE")) {
+    costCoverage = "PARTIAL";
+  }
+
   if (modelAppliedUnverified && costCoverage === "KNOWN") {
     costCoverage = "PARTIAL";
   }
@@ -334,7 +340,8 @@ export async function recordProviderUsageObservation(
   if (inserted.length > 0) {
     return { inserted: true, id: inserted[0]!.id };
   }
-  return { inserted: false, id };
+  // Conflict / no-op: never return a fabricated UUID that was not persisted.
+  return { inserted: false, id: "" };
 }

 export type NoraProviderUsageHookInput = {
@@ -412,9 +419,12 @@ async function recordPerRequestUsages(
     inserted: false,
     id: "",
   };
+  // callOrdinal is a base offset for the batch — never collapse distinct entries
+  // onto the same ordinal when an explicit base is provided (`x ?? i` collision).
+  const baseOrdinal = input.callOrdinal ?? 0;
   for (let i = 0; i < entries.length; i++) {
     const entry = entries[i]!;
-    const callOrdinal = input.callOrdinal ?? i;
+    const callOrdinal = baseOrdinal + i;
     const idempotencyKey = buildIdempotencyKey({
       ...scope,
       granularity: "REQUEST",
@@ -452,22 +462,45 @@ export async function recordNoraProviderUsageFromRunResult(
   const forcedGranularity = input.granularity;

   const perRequest = snapshot.requestUsageEntries;
-  if (perRequest && perRequest.length > 0 && forcedGranularity !== "GENERATION_AGGREGATE") {
+  const requestCount = snapshot.providerRequests;
+  const perRequestIncomplete =
+    perRequest != null &&
+    perRequest.length > 0 &&
+    requestCount != null &&
+    perRequest.length < requestCount;
+
+  if (
+    perRequest &&
+    perRequest.length > 0 &&
+    forcedGranularity !== "GENERATION_AGGREGATE" &&
+    !perRequestIncomplete
+  ) {
     return recordPerRequestUsages(input, perRequest, baseLimits);
   }

   const multiRequestWithoutBreakdown =
-    (snapshot.providerRequests ?? 0) > 1 && (!perRequest || perRequest.length === 0);
+    (requestCount ?? 0) > 1 && (!perRequest || perRequest.length === 0);
+  // Unknown request count must not be auto-classified as a single REQUEST.
+  const requestCountUnknown =
+    requestCount == null && (!perRequest || perRequest.length === 0);
   const granularity: ProviderUsageGranularity =
     forcedGranularity ??
-    (multiRequestWithoutBreakdown ? "GENERATION_AGGREGATE" : "REQUEST");
+    (multiRequestWithoutBreakdown || requestCountUnknown || perRequestIncomplete
+      ? "GENERATION_AGGREGATE"
+      : "REQUEST");

   const aggregateLimits = [...baseLimits];
   if (granularity === "GENERATION_AGGREGATE") {
     aggregateLimits.push("MULTI_REQUEST_AGGREGATE_ONLY");
-    if ((snapshot.providerRequests ?? 0) > 1) {
+    if ((requestCount ?? 0) > 1 && (!perRequest || perRequest.length === 0)) {
       aggregateLimits.push("PER_REQUEST_USAGE_UNAVAILABLE");
     }
+    if (requestCountUnknown) {
+      aggregateLimits.push("REQUEST_COUNT_UNKNOWN");
+    }
+    if (perRequestIncomplete) {
+      aggregateLimits.push("PER_REQUEST_USAGE_INCOMPLETE");
+    }
   }

   const scope = idempotencyScope(input);

```

### `projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
index 226331ab..bbd33fda 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-usage.ts
@@ -73,7 +73,24 @@ function readRequestUsageEntries(usage: unknown): ProviderRequestUsageEntry[] |
   const parsed = raw
     .map((e) => normalizeRequestUsageEntry(e))
     .filter((e): e is ProviderRequestUsageEntry => e != null);
-  return parsed.length > 0 ? parsed : null;
+  if (parsed.length === 0) return null;
+  return parsed;
+}
+
+/** Number of raw requestUsageEntries that failed normalization (silent-loss guard). */
+export function countUnparsedRequestUsageEntries(usage: unknown): number {
+  const rec = usageRecord(usage);
+  if (!rec) return 0;
+  const raw =
+    rec.requestUsageEntries ??
+    rec.request_usage_entries ??
+    (usage as { requestUsageEntries?: unknown })?.requestUsageEntries;
+  if (!Array.isArray(raw) || raw.length === 0) return 0;
+  let dropped = 0;
+  for (const e of raw) {
+    if (normalizeRequestUsageEntry(e) == null) dropped += 1;
+  }
+  return dropped;
 }

 function sumDetailField(
@@ -128,6 +145,7 @@ export function extractProviderUsageFromRunResult(

     const usageObj = usage as Record<string, unknown>;
     const requestUsageEntries = readRequestUsageEntries(usage);
+    const droppedRequestEntries = countUnparsedRequestUsageEntries(usage);

     const inputTokens = num(usageObj.inputTokens ?? usageObj.input_tokens);
     const outputTokens = num(usageObj.outputTokens ?? usageObj.output_tokens);
@@ -148,6 +166,15 @@ export function extractProviderUsageFromRunResult(
     }
     if (cachedInputTokens == null) limits.push("CACHED_INPUT_TOKENS_UNVERIFIED");
     if (reasoningTokens == null) limits.push("REASONING_TOKENS_UNVERIFIED");
+    if (droppedRequestEntries > 0) {
+      limits.push("REQUEST_USAGE_ENTRIES_DROPPED");
+    }
+    if (
+      providerRequests == null &&
+      (!requestUsageEntries || requestUsageEntries.length === 0)
+    ) {
+      limits.push("REQUEST_COUNT_UNKNOWN");
+    }

     return {
       inputTokens,

```

### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index ba2056a9..3233dd44 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1036,6 +1036,13 @@ async function runLiveWithTools(
       tools = [...tools, ...d8Tools];
     }
     // Hosted OpenAI webSearchTool remains detached — see public-web-search-frontier.
+    if (policy.toolAllowlist.includes("consult_cognitive_guidance")) {
+      const { buildCognitiveGuidanceTools } = await import(
+        "./cognitive-guidance-tools"
+      );
+      const guidanceTools = await buildCognitiveGuidanceTools();
+      tools = [...tools, ...guidanceTools];
+    }
   }

   const QUALIFICATION_INSTRUCTIONS = [
@@ -1090,6 +1097,7 @@ async function runLiveWithTools(
     "  • determiningQuestions[] avec id stable, status OPEN/ANSWERED, answerSummary + sourceRefs si résolu — jamais résoudre une question sans réponse explicite.",
     "  • remainingWorkItems[] versionnés (OPEN/RESOLVED/OBSOLETE/…) — ≠ acceptanceCriteria.",
     "  • cognitiveProfileHint=simple|analyse|investigation pour adapter les moyens (selon le sens — jamais la longueur seule).",
+    "  • proposedCognitiveModel=gpt-6-luna|gpt-6.1-terra|gpt-6.2-sol et/ou proposedCognitiveEffort=none|low|medium|high|xhigh|max pour le SEGMENT SUIVANT (admission serveur). Omettre = maintenir le couple déjà admis. Escalade/désescalade uniquement sur besoin restant utile — pas de mot-clé ni de longueur.",
     "  • investigationMode=TARGETED|EXHAUSTIVE|OPEN selon le périmètre sémantique (pas un mot-clé ni un nombre isolé).",
     "  • investigationSufficiency=SUFFICIENT|INSUFFICIENT|UNKNOWN — SUFFICIENT quand l'objectif est atteignable avec les acquis (arrêter les lectures inutiles, restituer).",
     "  • contradictions[] / restrictions[] si découverts.",
@@ -1608,6 +1616,7 @@ function minimalBoundaryPolicy(reasonCode: string): CognitivePolicy {
     profile: "simple",
     modelRequested: NORA_STUDY_MODEL,
     effortRequested: "low",
+    effortBudgetBand: "low",
     toolAllowlist: [],
     budgets: {
       maxProviderCalls: 0,

```

### `projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index 2fd26084..65129396 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -352,6 +352,20 @@ async function executeIsolatedLiveWebSearch(query: string): Promise<{
   items: PublicSearchResult["items"];
   limits: string[];
 }> {
+  // ENV-01 — same fail-closed OpenAI lane binding as Nora LIVE (all LIVE paths).
+  const { assertOpenAiKeyForLane } = await import("@/lib/openai-lane-guard");
+  const laneGuard = assertOpenAiKeyForLane();
+  if (!laneGuard.ok) {
+    return {
+      status: "ERROR",
+      items: [],
+      limits: [
+        "WEB_LIVE_OPENAI_LANE_GUARD",
+        laneGuard.reasonCode,
+      ],
+    };
+  }
+
   const { Agent, run, webSearchTool } = await import("@openai/agents");
   const agent = new Agent({
     name: "sfia-public-web-isolated",

```

### `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index b241606a..7483a690 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -8,7 +8,10 @@ import {
   runCognitiveConductor,
   type ConductorRunResult,
 } from "./cognitive-conductor";
-import { buildCognitivePolicy } from "./cognitive-policy";
+import {
+  buildCognitivePolicy,
+  resolveContinuityCognitivePolicy,
+} from "./cognitive-policy";
 import {
   cognitiveEnvelopeLimits,
   getCognitiveWork,
@@ -283,6 +286,17 @@ export function mergeInvestigationFromReply(
         ? "analyse"
         : prior.profileHint);

+  // S3 — next-segment resource proposal. Present → admit on next resolvePolicy;
+  // omitted on a real qualification → clear (hold last applied couple on resources).
+  const proposedCognitiveModel =
+    !q || q.status === "UNAVAILABLE"
+      ? (prior.proposedCognitiveModel ?? null)
+      : (q.proposedCognitiveModel ?? null);
+  const proposedCognitiveEffort =
+    !q || q.status === "UNAVAILABLE"
+      ? (prior.proposedCognitiveEffort ?? null)
+      : (q.proposedCognitiveEffort ?? null);
+
   const desiredOutcome = outcome || desiredFromTool || prior.desiredOutcome || "";

   // RB-30 — capitalize answered determinant questions + explicit findings as conclusions.
@@ -408,6 +422,8 @@ export function mergeInvestigationFromReply(
     contradictions,
     constraints,
     profileHint,
+    proposedCognitiveModel,
+    proposedCognitiveEffort,
     productionInstruction,
     acceptanceCriteria,
     conclusions: conclusions.slice(-24),
@@ -1129,23 +1145,49 @@ export async function runNoraCognitiveTurn(
         reevalActive ||
         work.state.sufficiency === "SUFFICIENT" ||
         (work.resources.limits ?? []).includes("RESTITUTION_PHASE");
-      let base = restitutionPhase
-        ? buildCognitivePolicy(seed, undefined, {
-            profileHint: hint === "simple" ? "simple" : "analyse",
-            effortHint: "medium",
-          })
-        : segmentIndex > 0 && hint === "investigation"
-          ? buildCognitivePolicy(seed, undefined, {
-              profileHint: "investigation",
-              effortHint: "high",
-            })
-          : hint === "simple"
-            ? buildCognitivePolicy(seed, undefined, {
-                profileHint: "simple",
-                effortHint: "low",
+      // S3 — qualification proposal → admission → hold/change for next segment.
+      // policyOverride forces the first segment only; continuity still admits later.
+      const proposal = {
+        modelId: work.state.proposedCognitiveModel ?? null,
+        effort: work.state.proposedCognitiveEffort ?? null,
+      };
+      const held = {
+        modelId: work.resources.modelRequested ?? null,
+        effort: work.resources.effortRequested ?? null,
+      };
+      let base =
+        segmentIndex === 0 && input.policyOverride
+          ? input.policyOverride
+          : restitutionPhase
+            ? resolveContinuityCognitivePolicy({
+                seed,
+                profileHint: hint === "simple" ? "simple" : "analyse",
+                effortHint: "medium",
+                proposal,
+                held,
               })
-            : (input.policyOverride ??
-              buildCognitivePolicy(seed, undefined, { profileHint: hint }));
+            : segmentIndex > 0 && hint === "investigation"
+              ? resolveContinuityCognitivePolicy({
+                  seed,
+                  profileHint: "investigation",
+                  effortHint: proposal.effort || "high",
+                  proposal,
+                  held,
+                })
+              : hint === "simple"
+                ? resolveContinuityCognitivePolicy({
+                    seed,
+                    profileHint: "simple",
+                    effortHint: proposal.effort || "low",
+                    proposal,
+                    held,
+                  })
+                : resolveContinuityCognitivePolicy({
+                    seed,
+                    profileHint: hint,
+                    proposal,
+                    held,
+                  });
       if (reevalActive) {
         base = {
           ...base,

```

### `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index fab93c5f..71ce7746 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -361,6 +361,20 @@ export const NoraTurnQualificationSchema = z.object({
   acceptanceCriteria: z.array(z.string().min(1).max(LIVE_PROSE_HARD_MAX)).max(40).optional(),
   /** Semantic profile hint for adaptive policy — server may apply; never length-based. */
   cognitiveProfileHint: z.enum(["simple", "analyse", "investigation"]).optional(),
+  /**
+   * Next-segment cognitive model proposal (Nora). Server admits via catalogue;
+   * omission = hold the last admitted model on this work.
+   */
+  proposedCognitiveModel: z
+    .enum(["gpt-6-luna", "gpt-6.1-terra", "gpt-6.2-sol"])
+    .optional(),
+  /**
+   * Next-segment provider effort proposal (Nora). Distinct from profile.
+   * Omission = hold the last admitted effort (or profile default on first segment).
+   */
+  proposedCognitiveEffort: z
+    .enum(["none", "low", "medium", "high", "xhigh", "max"])
+    .optional(),
   /**
    * Investigation breadth as determined by Nora (semantic) — never by keyword density.
    * TARGETED = finite known set; EXHAUSTIVE = declared perimeter must be covered;

```

### `projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts b/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
index c9bad4d9..b8cdc70b 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
@@ -87,6 +87,19 @@ export type InvestigationState = {
   constraints: string[];
   risks: string[];
   profileHint: "simple" | "analyse" | "investigation";
+  /**
+   * Next-segment resource proposal from the last structured qualification.
+   * Server admits; omission means hold the couple already on resources.
+   */
+  proposedCognitiveModel?: "gpt-6-luna" | "gpt-6.1-terra" | "gpt-6.2-sol" | null;
+  proposedCognitiveEffort?:
+    | "none"
+    | "low"
+    | "medium"
+    | "high"
+    | "xhigh"
+    | "max"
+    | null;
   questions: DeterminingQuestion[];
   sources: InvestigationSourceRef[];
   contradictions: Array<{ a: string; b: string; detail: string }>;

```

### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts
index 35e87793..c3680934 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-resources/cognitive-referential.ts
@@ -521,7 +521,7 @@ export function buildCognitiveGuidanceCatalogBlurb(): string {
     models,
     `- Référentiel élémentaire : ${COGNITIVE_REFERENTIAL_ROW_COUNT} lignes CF §4.1–4.5 (guidance seulement, pas un moteur de routage).`,
     "- Tu peux t'en inspirer pour cognitiveProfileHint / effort; Nora peut s'écarter si le contexte l'exige.",
-    "- Ne demande pas la matrice complète dans replyDraft : le détail d'une ligne est disponible côté serveur (getCognitiveGuidanceById / résumé compact à la demande du conducteur).",
+    "- Ne demande pas la matrice complète dans replyDraft : pour une ligne, appelle l'outil consult_cognitive_guidance(guidanceId) ; pour l'index compact, consult_cognitive_guidance(compactIndex=true).",
     "- Défaut opérationnel pré-calibration : Sol medium si le couple proposé n'est pas admis.",
   ].join("\n");
 }
\ No newline at end of file

```

### `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 9726e245..a5197c7d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,20 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-26-ML5-FINAL-CONSOLIDATION-LIVE-CALIBRATION
+
+- **date_utc**: 2026-11-26
+- **lane**: DEV construction + G-RECETTE-SECRET (config OpenAI only) + G-LIVE-API (DEV calibration)
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **base_candidate**: `722368d5564ba0d2818f09f5dabbe78c9dfb1409`
+- **focus**: Isolation OpenAI DEV/RECETTE; FinOps residual; effort API découplé des budgets; outil `consult_cognitive_guidance`; calibration LIVE Luna/Terra/Sol
+- **isolation**: DEV_FP `ab6bbec84ba272ed` ≠ REC_FP `f27d814e9c682020`; RECETTE EXPECTED/FORBIDDEN bound; candidat RECETTE figé `a150926c` préservé
+- **calibration**: 19 Responses adapter + Phase D product (2 tours, même workId); ~141k in / ~8.5k out; coût estimé ~0.13 USD Standard court; efforts medium/high transmis sans collapse
+- **recommendation**: Terra Medium candidat initial opérationnel (qualité suffisante sur corpus); Luna Low/Medium pour usages simples démontrés; Sol Medium référence / cas discriminants — **décision Morris requise avant admission opérationnelle**
+- **gates_consumed**: Construction DEV; G-RECETTE-SECRET; G-LIVE-API
+- **gates_pending**: G-WEB-*; G-RECETTE cutover candidat; politique cognitive validée Morris; F2 visuelle
+- **release**: NO RELEASE / NOT ADOPTED / R5 IN PROGRESS / ML5 OPEN / WEB LIVE BLOCKED
+
 ## delivery_id: DELIV-2026-11-26-ML5-CONTINUATION-PRE-CALIBRATION

 - **date_utc**: 2026-11-26

```
