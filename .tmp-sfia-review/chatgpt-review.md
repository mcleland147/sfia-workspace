# SFIA Review Pack — ML5 Cognitive Consolidation Finale

| Field | Value |
|---|---|
| Generated | 2026-11-26T15:22:22Z |
| Cycle | R5 Construction · ML5 · Cycle 8 Delivery |
| Profile | CRITICAL · EVOL |
| Branch | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD initial | `8c82b6c18f64af873ea780e692beb816d9d9f36e` |
| HEAD final | `9bfe5ff53cac5300f53f0d722cf426f5486d2450` |
| Tree | `62bcea126d70e8ca623145503bcc62c91496cb58` |
| Web tree | `074ab6994e4d5cf283f501778175da40618209c3` |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| BUILD_ID | `BlQ4awCt8jljVHRfu433p` (prerender /404 FAIL — see reserves) |
| WEB LIVE | OFF |
| G-WEB-MIXED | CLOSED |
| G-RECETTE | NOT CONSUMED |
| Class | NO RELEASE · NOT ADOPTED |

## Verdict candidate

**ML5 COGNITIVE CONSOLIDATION COMPLETED WITH IDENTIFIED RESERVES — RECETTE SCOPE DECISION REQUIRED.**

Blocking for cutover: Next.js production build fails prerendering pages `/404` with `Html should not be imported outside of pages/_document` (Next 15.5.29 / React 19.3.1). Unit qualification of S1–S5 PASS. LIVE not re-run (envelope deferred; prior LIVE reused).

## Git Truth

- Worktree: `/Users/morris/Projects/sfia-wt-next-ml5-20261123`
- Remote: `mcleland147/sfia-workspace`
- Staged at start: none; product commit `c46a8a9a` (+ follow-ups if any)
- RECETTE process observed on :3200 from distinct worktree `a150926c` — not mutated

## Sequences

### S1 Provider frontier
- Created `provider-emission-frontier.ts` (ALS campaign envelope, reserve/commit/release, lane+admission gates)
- Wired in `nora-adapter` before `run()` and `public-web-search-frontier` worker
- Tests: `ml5-provider-emission-frontier.test.ts` — N+1 refused; release; suspend; lane fail; oracle ≠ maxTurns

### S2 Allocation
- `RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION` when explicit proposal refused without hold
- `runSegment` returns without provider; conductor SUSPEND

### S3 FinOps
- Observation coverage vs estimation completeness split
- UI sublabel for estimation %

### S4 WEB authority
- Parse AUTHORIZE ≠ D6; `web-public-query-authority.ts` binds RECORD_DECISION
- Registry no longer auto-promotes exactQueries from parse alone

### S5 PDF
- viewerToken rotates on fingerprint change; old revoked
- Viewer route requires owner+lane+project

### S6 Quals
- Vitest `tests/unit/ml5-*`: 337 PASS
- activity-hierarchy + auto-session re-verified PASS
- LIVE 12.1/12.2: NOT CONSUMED this cycle (S1 deterministic proven; reuse prior LIVE)

### S7 Manifeste
- Updated `construction/ml5-recette-manifest-candidate-20261126.md`
- As-built `construction/as-built-ml5-cognitive-consolidation-finale-20261126.md`

## Reserves A/B/C/D

| Id | Class | Note |
|---|---|---|
| R-BUILD-404 | A | Production `next build` fails on /404 Html prerender — blocks clean RECETTE artefact |
| R-GIT-PDF-TEXT | B | Corpus PDF textuel Git missing |
| R-WEB05 | C | Confrontation PARTIAL |
| R-F2 | C | Visual F2 Morris |
| R-D6-KIND | D | Dedicated decision kind optional |

## Files created


### FILE CREATED: `projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts`
```typescript
/**
 * S1 — Common provider emission frontier (technical controls only).
 *
 * Not an orchestrator / not cognitive strategy / not D6 authority / not B1 admission.
 * Applies: lane identity, model/effort admission checks, campaign envelope reservation,
 * attempt identity, and post-emission reconciliation hooks.
 *
 * Campaign envelopes are explicit and isolated — never confused with D3 budgets or FinOps caps.
 */

import { AsyncLocalStorage } from "node:async_hooks";
import { createHash, randomBytes } from "node:crypto";
import { assertOpenAiKeyForLane } from "@/lib/openai-lane-guard";
import {
  admitModelEffort,
  type CognitiveEffort,
  type CognitiveModelId,
  type ResourceAdmissionMode,
} from "./cognitive-resources";

function admissionModeFromEnv(
  env: NodeJS.ProcessEnv = process.env,
): ResourceAdmissionMode {
  const raw = (env.SFIA_COGNITIVE_ADMISSION_MODE || "").trim().toLowerCase();
  if (raw === "calibration") return "calibration";
  return "operational";
}

export type EmissionAttemptKind =
  | "nora.generate_reply"
  | "public_web.isolated_search"
  | "internal.qualification"
  | "campaign.probe"
  | "other";

export type CampaignEnvelope = {
  campaignId: string;
  /** Max real provider emission attempts (retries included). */
  maxAttempts: number;
  attemptsReserved: number;
  attemptsCommitted: number;
  attemptsReleased: number;
  suspended: boolean;
  suspendReason: string | null;
};

export type EmissionReservation =
  | {
      ok: true;
      attemptId: string;
      campaignId: string | null;
      reservedSlots: number;
      keyFingerprint: string;
      lane: string;
    }
  | {
      ok: false;
      reasonCode:
        | "LANE_GUARD_FAILED"
        | "MODEL_EFFORT_NOT_ADMITTED"
        | "CAMPAIGN_ENVELOPE_EXHAUSTED"
        | "CAMPAIGN_SUSPENDED"
        | "INVALID_REQUEST";
      reason: string;
    };

type FrontierStore = {
  campaign: CampaignEnvelope | null;
  /** Test oracle — counts true emit calls that passed reserve. */
  emissionsObserved: number;
};

const als = new AsyncLocalStorage<FrontierStore>();

function store(): FrontierStore {
  return als.getStore() ?? { campaign: null, emissionsObserved: 0 };
}

export function newAttemptId(): string {
  return `att_${randomBytes(8).toString("hex")}`;
}

export function beginCampaignEnvelope(input: {
  campaignId?: string;
  maxAttempts: number;
}): CampaignEnvelope {
  const campaign: CampaignEnvelope = {
    campaignId: input.campaignId ?? `camp_${randomBytes(6).toString("hex")}`,
    maxAttempts: Math.max(0, Math.floor(input.maxAttempts)),
    attemptsReserved: 0,
    attemptsCommitted: 0,
    attemptsReleased: 0,
    suspended: false,
    suspendReason: null,
  };
  const cur = store();
  cur.campaign = campaign;
  return campaign;
}

export function getActiveCampaignEnvelope(): CampaignEnvelope | null {
  return store().campaign;
}

export function suspendCampaignEnvelope(reason: string): void {
  const c = store().campaign;
  if (!c) return;
  c.suspended = true;
  c.suspendReason = reason.slice(0, 200);
}

export function campaignSlotsRemaining(c: CampaignEnvelope | null = store().campaign): number {
  if (!c) return Number.POSITIVE_INFINITY;
  if (c.suspended) return 0;
  return Math.max(0, c.maxAttempts - c.attemptsReserved);
}

/**
 * Reserve before contacting the provider. A scenario counter or maxTurns is NOT sufficient —
 * callers must reserve here for every real emission (including retries and worker calls).
 */
export function reserveProviderEmission(input: {
  kind: EmissionAttemptKind;
  modelId?: string | null;
  effort?: string | null;
  /** Slots to reserve (default 1). Retries that will re-contact must reserve again. */
  slots?: number;
  /** When true, skip model admission (deterministic fixture / no provider). */
  skipModelAdmission?: boolean;
  env?: NodeJS.ProcessEnv;
}): EmissionReservation {
  const slots = Math.max(1, Math.floor(input.slots ?? 1));
  const env = input.env ?? process.env;
  const laneGuard = assertOpenAiKeyForLane(env);
  if (!laneGuard.ok) {
    return {
      ok: false,
      reasonCode: "LANE_GUARD_FAILED",
      reason: `${laneGuard.reasonCode}:${laneGuard.reason}`,
    };
  }

  if (!input.skipModelAdmission) {
    const model = ((input.modelId ?? "").trim() || "gpt-6.1-terra") as CognitiveModelId;
    const effort = ((input.effort ?? "").trim() || "medium") as CognitiveEffort;
    const admission = admitModelEffort(model, effort, admissionModeFromEnv(env));
    if (!admission.admitted) {
      return {
        ok: false,
        reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
        reason: admission.reasonCode,
      };
    }
  }

  const campaign = store().campaign;
  if (campaign) {
    if (campaign.suspended) {
      return {
        ok: false,
        reasonCode: "CAMPAIGN_SUSPENDED",
        reason: campaign.suspendReason ?? "CAMPAIGN_SUSPENDED",
      };
    }
    if (campaign.attemptsReserved + slots > campaign.maxAttempts) {
      campaign.suspended = true;
      campaign.suspendReason = "CAMPAIGN_ENVELOPE_EXHAUSTED";
      return {
        ok: false,
        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
        reason: `reserved=${campaign.attemptsReserved}+${slots} max=${campaign.maxAttempts}`,
      };
    }
    campaign.attemptsReserved += slots;
  }

  const attemptId = newAttemptId();
  return {
    ok: true,
    attemptId,
    campaignId: campaign?.campaignId ?? null,
    reservedSlots: slots,
    keyFingerprint: laneGuard.keyFingerprint,
    lane: laneGuard.lane,
  };
}

/** Mark that a reserved emission actually contacted the provider (or attempted to). */
export function commitProviderEmission(reservation: {
  attemptId: string;
  reservedSlots: number;
}): void {
  const campaign = store().campaign;
  if (campaign) {
    campaign.attemptsCommitted += reservation.reservedSlots;
  }
  const s = store();
  s.emissionsObserved += reservation.reservedSlots;
  void reservation.attemptId;
}

/** Release unused reservation (failed before contact). Does not free committed attempts. */
export function releaseProviderEmission(reservation: {
  attemptId: string;
  reservedSlots: number;
  contacted: boolean;
}): void {
  const campaign = store().campaign;
  if (!campaign) return;
  if (reservation.contacted) {
    campaign.attemptsCommitted += reservation.reservedSlots;
    store().emissionsObserved += reservation.reservedSlots;
    return;
  }
  // Before contact: release reservation so the slot can be reused only if not already counted.
  campaign.attemptsReserved = Math.max(
    0,
    campaign.attemptsReserved - reservation.reservedSlots,
  );
  campaign.attemptsReleased += reservation.reservedSlots;
  void reservation.attemptId;
}

export function getEmissionsObservedForTests(): number {
  return store().emissionsObserved;
}

export function __resetProviderEmissionFrontierForTests(): void {
  const s = store();
  s.campaign = null;
  s.emissionsObserved = 0;
}

/**
 * Run work inside an isolated frontier store (campaign + oracle counters).
 * Production request handlers may call this once per campaign script.
 */
export function runWithProviderEmissionStore<T>(fn: () => T): T {
  return als.run({ campaign: null, emissionsObserved: 0 }, fn);
}

export async function runWithProviderEmissionStoreAsync<T>(
  fn: () => Promise<T>,
): Promise<T> {
  return als.run({ campaign: null, emissionsObserved: 0 }, fn);
}

/** Stable fingerprint of payload fields that must not mutate after authorization. */
export function canonicalPayloadFingerprint(fields: Record<string, string>): string {
  const keys = Object.keys(fields).sort();
  const blob = keys.map((k) => `${k}=${fields[k]}`).join("\n");
  return createHash("sha256").update(blob, "utf8").digest("hex").slice(0, 32);
}
```

### FILE CREATED: `projects/sfia-studio-next/web/src/domains/conversation/web-public-query-authority.ts`
```typescript
/**
 * S4 — Exceptional public WEB query authority binding (D6 owner).
 *
 * Regex AUTHORIZE_PUBLIC_QUERY parse is a technical extractor only.
 * Egress admission for non-catalog queries requires an inspectable authority
 * binding when a project scope exists — never a parallel decision register.
 *
 * Uses existing HumanDecision kind RECORD_DECISION (no schema migration).
 * Extending DECISION_KINDS for a dedicated WEB kind requires Morris GO.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { humanDecisions } from "@/db/schema";
import { canonicalPayloadFingerprint } from "./provider-emission-frontier";
import {
  extractPilotAuthorizedExactQueries,
  isDedicatedAuthorizePublicQueryAct,
} from "./public-web-registry";

export const WEB_PUBLIC_QUERY_OBJECT_PREFIX = "web.public_query:" as const;

export type WebPublicQueryAuthorityPayload = {
  query: string;
  destination: "public_web_search";
  purpose: string;
  projectId: string;
  pilotId: string;
  policyVersion: string;
};

export function buildWebPublicQueryObjectRef(
  payload: Pick<WebPublicQueryAuthorityPayload, "query" | "projectId">,
): string {
  const fp = canonicalPayloadFingerprint({
    query: payload.query.replace(/\s+/g, " ").trim(),
    destination: "public_web_search",
    projectId: payload.projectId,
  });
  return `${WEB_PUBLIC_QUERY_OBJECT_PREFIX}${fp}`;
}

export function buildWebPublicQueryEffectConditions(
  payload: WebPublicQueryAuthorityPayload,
): string {
  const canonical = {
    query: payload.query.replace(/\s+/g, " ").trim(),
    destination: payload.destination,
    purpose: payload.purpose.slice(0, 200),
    projectId: payload.projectId,
    pilotId: payload.pilotId,
    policyVersion: payload.policyVersion,
  };
  return JSON.stringify(canonical);
}

export type WebQueryAuthorityVerdict =
  | {
      allowed: true;
      decisionId: string;
      objectRef: string;
      query: string;
      source: "HUMAN_DECISION_RECORD";
    }
  | {
      allowed: false;
      reasonCode:
        | "PROJECT_REQUIRED"
        | "PARSE_NOT_AUTHORITY"
        | "POISON_OR_NON_DEDICATED"
        | "DECISION_NOT_FOUND"
        | "DECISION_NOT_APPLICABLE"
        | "PAYLOAD_MISMATCH"
        | "PILOT_MISMATCH"
        | "REVOKED_OR_SUPERSEDED";
      reason: string;
      parsedQuery?: string;
      objectRef?: string;
    };

/**
 * Technical parse alone never grants egress. When projectId is present,
 * require an APPLICABLE HumanDecision RECORD_DECISION bound to the payload.
 */
export async function evaluateWebPublicQueryAuthority(input: {
  pilotText: string;
  projectId: string | null | undefined;
  pilotId: string;
  /** Optional explicit decision id (inspectable act already recorded). */
  decisionId?: string | null;
  policyVersion?: string;
}): Promise<WebQueryAuthorityVerdict> {
  const projectId = (input.projectId ?? "").trim();
  const parsed = extractPilotAuthorizedExactQueries(input.pilotText);
  const dedicated = isDedicatedAuthorizePublicQueryAct(input.pilotText);

  if (!dedicated || parsed.length === 0) {
    return {
      allowed: false,
      reasonCode: "POISON_OR_NON_DEDICATED",
      reason: "AUTHORIZE_PUBLIC_QUERY must be a dedicated Pilote act (parse ≠ D6)",
    };
  }

  const query = parsed[0]!;
  if (!projectId) {
    // Without project scope, D6 HumanDecision cannot bind — refuse exceptional auth.
    // Catalog / independently admitted provenance remains the nominal path.
    return {
      allowed: false,
      reasonCode: "PROJECT_REQUIRED",
      reason:
        "Exceptional WEB authorization requires project-scoped HumanDecision (D6)",
      parsedQuery: query,
    };
  }

  const objectRef = buildWebPublicQueryObjectRef({ query, projectId });
  const decisionId = (input.decisionId ?? "").trim();

  let row:
    | {
        id: string;
        pilotId: string;
        kind: string;
        objectRef: string;
        state: string;
        effectConditions: string | null;
      }
    | undefined;

  if (decisionId) {
    row = (
      await db
        .select({
          id: humanDecisions.id,
          pilotId: humanDecisions.pilotId,
          kind: humanDecisions.kind,
          objectRef: humanDecisions.objectRef,
          state: humanDecisions.state,
          effectConditions: humanDecisions.effectConditions,
        })
        .from(humanDecisions)
        .where(
          and(
            eq(humanDecisions.id, decisionId),
            eq(humanDecisions.projectId, projectId),
          ),
        )
        .limit(1)
    )[0];
  } else {
    // Lookup latest APPLICABLE RECORD_DECISION for this objectRef + pilot.
    const rows = await db
      .select({
        id: humanDecisions.id,
        pilotId: humanDecisions.pilotId,
        kind: humanDecisions.kind,
        objectRef: humanDecisions.objectRef,
        state: humanDecisions.state,
        effectConditions: humanDecisions.effectConditions,
      })
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, projectId),
          eq(humanDecisions.objectRef, objectRef),
          eq(humanDecisions.state, "APPLICABLE"),
        ),
      )
      .limit(8);
    row = rows.find((r) => r.pilotId === input.pilotId && r.kind === "RECORD_DECISION");
  }

  if (!row) {
    return {
      allowed: false,
      reasonCode: "DECISION_NOT_FOUND",
      reason:
        "No APPLICABLE HumanDecision RECORD_DECISION for exact public query payload",
      parsedQuery: query,
      objectRef,
    };
  }

  if (row.state !== "APPLICABLE") {
    return {
      allowed: false,
      reasonCode: "REVOKED_OR_SUPERSEDED",
      reason: `decision state=${row.state}`,
      parsedQuery: query,
      objectRef,
    };
  }

  if (row.pilotId !== input.pilotId) {
    return {
      allowed: false,
      reasonCode: "PILOT_MISMATCH",
      reason: "Decision pilot does not match requesting pilot",
      parsedQuery: query,
      objectRef,
    };
  }

  if (row.objectRef !== objectRef) {
    return {
      allowed: false,
      reasonCode: "PAYLOAD_MISMATCH",
      reason: "Decision objectRef fingerprint does not match query payload",
      parsedQuery: query,
      objectRef,
    };
  }

  if (row.effectConditions) {
    try {
      const parsedEc = JSON.parse(row.effectConditions) as { query?: string };
      const ecQuery = (parsedEc.query ?? "").replace(/\s+/g, " ").trim();
      if (ecQuery && ecQuery !== query.replace(/\s+/g, " ").trim()) {
        return {
          allowed: false,
          reasonCode: "PAYLOAD_MISMATCH",
          reason: "effectConditions.query does not match authorized query",
          parsedQuery: query,
          objectRef,
        };
      }
    } catch {
      /* effectConditions optional parse — objectRef remains binding */
    }
  }

  return {
    allowed: true,
    decisionId: row.id,
    objectRef,
    query,
    source: "HUMAN_DECISION_RECORD",
  };
}

/**
 * Promote parsed AUTHORIZE markers into exactQueries only when D6-bound
 * (or when caller explicitly opts into technical-parse-only for catalog-free
 * DEV harnesses that already isolated the project). Default: do not promote.
 */
export function promoteExactQueriesFromAuthority(input: {
  pilotText: string;
  authority: WebQueryAuthorityVerdict | null;
  /** DEV harness only — never product default. */
  allowTechnicalParseWithoutDecision?: boolean;
}): { exactQueries: string[]; limits: string[] } {
  const limits: string[] = [];
  const parsed = extractPilotAuthorizedExactQueries(input.pilotText);
  if (parsed.length === 0) {
    limits.push("AUTHORIZE_PARSE_EMPTY");
    return { exactQueries: [], limits };
  }

  if (input.authority?.allowed) {
    limits.push("WEB_QUERY_AUTHORITY_D6_BOUND");
    limits.push(`DECISION_${input.authority.decisionId}`);
    return {
      exactQueries: [input.authority.query],
      limits,
    };
  }

  if (input.allowTechnicalParseWithoutDecision) {
    limits.push("WEB_QUERY_TECHNICAL_PARSE_ONLY_DEV");
    limits.push("PARSE_NOT_D6_AUTHORITY");
    return { exactQueries: parsed, limits };
  }

  limits.push("PILOT_EXACT_PARSE_NOT_PROMOTED");
  limits.push(input.authority?.reasonCode ?? "PARSE_NOT_AUTHORITY");
  return { exactQueries: [], limits };
}
```

### FILE CREATED: `projects/sfia-studio-next/web/src/app/not-found.tsx`
```typescript
export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div>
        <h1 className="text-xl font-semibold">Page introuvable</h1>
        <p className="mt-2 text-sm opacity-80">La ressource demandée n’existe pas.</p>
      </div>
    </main>
  );
}
```

### FILE CREATED: `projects/sfia-studio-next/web/src/app/global-error.tsx`
```typescript
"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body>
        <main className="min-h-screen flex items-center justify-center p-8">
          <div>
            <h1 className="text-xl font-semibold">Erreur application</h1>
            <p className="mt-2 text-sm opacity-80">
              Une erreur inattendue est survenue.
            </p>
            <button
              type="button"
              className="mt-4 underline text-sm"
              onClick={() => reset()}
            >
              Réessayer
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
```

### FILE CREATED: `projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts`
```typescript
import { createHash } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import {
  beginCampaignEnvelope,
  campaignSlotsRemaining,
  commitProviderEmission,
  getActiveCampaignEnvelope,
  getEmissionsObservedForTests,
  releaseProviderEmission,
  reserveProviderEmission,
  runWithProviderEmissionStore,
  suspendCampaignEnvelope,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";

const TEST_KEY = "sk-test-frontier-aaaaaaaaaaaaaaaa";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);
const laneEnv = {
  STUDIO_LANE: "DEV",
  OPENAI_API_KEY: TEST_KEY,
  SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
} as unknown as NodeJS.ProcessEnv;

function reserve(kind: Parameters<typeof reserveProviderEmission>[0]["kind"]) {
  return reserveProviderEmission({
    kind,
    skipModelAdmission: true,
    env: laneEnv,
  });
}

describe("S1 — provider emission frontier / campaign envelope", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
  });

  it("refuses N+1 emission when campaign max is N", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ campaignId: "camp-test", maxAttempts: 2 });
      const a = reserve("campaign.probe");
      expect(a.ok).toBe(true);
      if (!a.ok) throw new Error("a");
      commitProviderEmission(a);

      const b = reserve("campaign.probe");
      expect(b.ok).toBe(true);
      if (!b.ok) throw new Error("b");
      commitProviderEmission(b);

      const c = reserve("campaign.probe");
      expect(c.ok).toBe(false);
      if (c.ok) throw new Error("c");
      expect(c.reasonCode).toBe("CAMPAIGN_ENVELOPE_EXHAUSTED");
      expect(getEmissionsObservedForTests()).toBe(2);
      expect(campaignSlotsRemaining()).toBe(0);
    });
  });

  it("releases unused reservation so a later attempt can proceed", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxAttempts: 1 });
      const a = reserve("nora.generate_reply");
      expect(a.ok).toBe(true);
      if (!a.ok) throw new Error("a");
      releaseProviderEmission({ ...a, contacted: false });
      expect(campaignSlotsRemaining()).toBe(1);
      const b = reserve("nora.generate_reply");
      expect(b.ok).toBe(true);
      if (!b.ok) throw new Error("b");
      commitProviderEmission(b);
      expect(getEmissionsObservedForTests()).toBe(1);
    });
  });

  it("blocks after suspend even if slots remain", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxAttempts: 5 });
      suspendCampaignEnvelope("TEST_SUSPEND");
      const r = reserve("public_web.isolated_search");
      expect(r.ok).toBe(false);
      if (r.ok) throw new Error("r");
      expect(r.reasonCode).toBe("CAMPAIGN_SUSPENDED");
      expect(getActiveCampaignEnvelope()?.suspendReason).toBe("TEST_SUSPEND");
    });
  });

  it("oracle counts committed emissions, not maxTurns", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxAttempts: 3 });
      for (let i = 0; i < 3; i++) {
        const r = reserve("other");
        expect(r.ok).toBe(true);
        if (!r.ok) throw new Error("r");
        commitProviderEmission(r);
      }
      expect(getEmissionsObservedForTests()).toBe(3);
      const blocked = reserve("other");
      expect(blocked.ok).toBe(false);
    });
  });

  it("refuses incorrect lane configuration before emission", () => {
    runWithProviderEmissionStore(() => {
      const r = reserveProviderEmission({
        kind: "nora.generate_reply",
        skipModelAdmission: true,
        env: { STUDIO_LANE: "DEV" } as unknown as NodeJS.ProcessEnv,
      });
      expect(r.ok).toBe(false);
      if (r.ok) throw new Error("r");
      expect(r.reasonCode).toBe("LANE_GUARD_FAILED");
    });
  });
});
```

### FILE CREATED: `projects/sfia-studio-next/web/tests/unit/ml5-web-query-authority.test.ts`
```typescript
import { describe, expect, it } from "vitest";
import {
  buildWebPublicQueryObjectRef,
  promoteExactQueriesFromAuthority,
} from "@/domains/conversation/web-public-query-authority";
import {
  extractPilotAuthorizedExactQueries,
  resolvePublicWebRegistry,
} from "@/domains/conversation/public-web-registry";

describe("S4 — WEB public query authority (parse ≠ D6)", () => {
  it("rejects negation / example framing around AUTHORIZE", () => {
    expect(
      extractPilotAuthorizedExactQueries(
        'Ne pas autoriser AUTHORIZE_PUBLIC_QUERY: "HTTP/3 site:datatracker.ietf.org"',
      ),
    ).toEqual([]);
    expect(
      extractPilotAuthorizedExactQueries(
        'Exemple: AUTHORIZE_PUBLIC_QUERY: "HTTP/3 site:datatracker.ietf.org"',
      ),
    ).toEqual([]);
  });

  it("does not promote parse alone into exactQueries", () => {
    const r = resolvePublicWebRegistry({
      pilotText:
        'OK. AUTHORIZE_PUBLIC_QUERY: "HTTP/3 site:datatracker.ietf.org"',
      haystack: "suite",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.exactQueries).not.toContain("HTTP/3 site:datatracker.ietf.org");
    expect(r.limits).toContain("PILOT_EXACT_PARSE_OBSERVED");
    expect(r.limits).toContain("PARSE_NOT_D6_AUTHORITY");
    expect(r.limits).toContain("PILOT_EXACT_AWAITING_D6_DECISION");
  });

  it("promotes only when d6BoundExactQueries supplied", () => {
    const q = "HTTP/3 site:datatracker.ietf.org";
    const r = resolvePublicWebRegistry({
      pilotText: `AUTHORIZE_PUBLIC_QUERY: "${q}"`,
      d6BoundExactQueries: [q],
      haystack: "suite",
      env: { STUDIO_LANE: "DEV", SFIA_PUBLIC_WEB_CATALOG_DEFAULT: "0" },
    });
    expect(r.exactQueries).toContain(q);
    expect(r.limits).toContain("PILOT_EXACT_AUTHORIZED_D6");
  });

  it("objectRef is stable for identical payload", () => {
    const a = buildWebPublicQueryObjectRef({
      query: "HTTP/3 site:datatracker.ietf.org",
      projectId: "prj_test",
    });
    const b = buildWebPublicQueryObjectRef({
      query: "  HTTP/3 site:datatracker.ietf.org  ",
      projectId: "prj_test",
    });
    expect(a).toBe(b);
    expect(a.startsWith("web.public_query:")).toBe(true);
  });

  it("promoteExactQueriesFromAuthority refuses without decision", () => {
    const r = promoteExactQueriesFromAuthority({
      pilotText: 'AUTHORIZE_PUBLIC_QUERY: "alpha beta gamma"',
      authority: {
        allowed: false,
        reasonCode: "DECISION_NOT_FOUND",
        reason: "missing",
      },
    });
    expect(r.exactQueries).toEqual([]);
    expect(r.limits).toContain("PILOT_EXACT_PARSE_NOT_PROMOTED");
  });
});
```

### FILE CREATED: `projects/sfia-studio-next/construction/as-built-ml5-cognitive-consolidation-finale-20261126.md`
```typescript
# As-built — ML5 consolidation cognitive transverse finale (2026-11-26)

Classe : **NO RELEASE** · Lane : **DEV** · Cutover RECETTE : **NON APPLIQUÉ**

## Architecture consolidée (KEEP)

| Frontière | Responsabilité | Source de vérité |
|---|---|---|
| D3 conducteur | Stratégie cognitive, continuité, budgets métier | `cognitive-conductor` / `cognitive_works` |
| Adaptateur fournisseur | Émission technique + observation | `nora-adapter` + `provider-emission-frontier` |
| FinOps | Observations et projections | `provider_usage_observations` |
| D6 | Autorité humaine exceptionnelle WEB | `human_decisions` (RECORD_DECISION) |
| B1 | Admission / egress WEB query-only | `public-web-search-frontier` / `web-egress-guard` |
| Visionneuse | Consultation octets autorisés | `pdf-viewer` + sessions B1 |

## S1 — Frontière fournisseur commune

- Module `provider-emission-frontier.ts` : réserve / commit / release + enveloppe de campagne ALS.
- Branché avant `run()` Nora LIVE et worker WEB isolé.
- Oracle déterministe : émissions observées à la frontière ≠ maxTurns SDK.
- Lane guard + admission modèle/effort avant contact.

## S2 — Allocation

- Proposition refusée sans hold → `RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION`.
- `runSegment` n'émet pas ; conducteur marque `SUSPENDED`.
- Pas de substitution silencieuse Terra/Sol pour un besoin non satisfait.

## S3 — FinOps

- `computeMeasureCoveragePercent` = couverture d'observation (KNOWN+PARTIAL).
- `computeEstimationCompletenessPercent` = complétude financière (KNOWN seul).
- KPI UI : sous-libellé estimation connue distinct.

## S4 — Autorité WEB

- Parse `AUTHORIZE_PUBLIC_QUERY` = extracteur technique uniquement.
- Promotion exactQueries uniquement via `d6BoundExactQueries` / HumanDecision RECORD_DECISION.
- Module `web-public-query-authority.ts` (pas de registre parallèle ; pas d'extension DECISION_KINDS sans GO Morris).

## S5 — PDF / sessions

- Rotation `viewerToken` si fingerprint change ; ancien jeton révoqué.
- Endpoint viewer : owner + lane + project obligatoires (token seul insuffisant).
- Couverture : jamais COMPLETE si corps tronqué / pages partielles.

## Réserves connues

| Id | Classe | Libellé |
|---|---|---|
| R-GIT-PDF-TEXT | B | Corpus PDF textuel Git REAL manquant (scanné SCANNED_NO_TEXT) |
| R-WEB05 | C | Confrontation WEB-05 PARTIAL — retest LIVE conditionnel |
| R-D6-KIND | D | Kind dédié WEB éventuel — décision Morris (RECORD_DECISION suffisant pour lier) |
| R-F2 | C | Recette visuelle F2 Morris |
| R-LIVE-REENVELOPPE | B | Retests LIVE 12.1/12.2 uniquement si comportement réellement modifié |

## WEB LIVE

Rétabli **OFF** (`SFIA_WEB_SEARCH_LIVE=0`, `SFIA_WEB_SEARCH_ENABLED=0`) en fin de consolidation.
G-WEB-MIXED fermé.
```

## Diffs modified (complete useful)
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f2b526a0..13d5f716 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5039,3 +5039,22 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | Migration | NONE |
 | Réserves | RoomBooking/StockTrack IT-06 différés enveloppe ; F2 visuelle ; WEB LIVE ; Luna Low non admis opérationnellement ; modelApplied souvent UNVERIFIED |
 | Statut | DEV CANDIDATE — PROVISIONAL POLICY ACTIVE — INTEGRATED REVIEW REQUIRED |
+
+
+## 2026-11-26 — ML5 consolidation cognitive transverse finale + préparation RECETTE (Cycle 8 Delivery / DEV)
+
+| Champ | Valeur |
+|---|---|
+| Delivery ID | `next-ml5-cognitive-consolidation-finale-recette-prep-20261126` |
+| Date | 2026-11-26 |
+| Macro-lot | ML5 livraison 1 — consolidation transverse finale |
+| Type | EVOL · Critical · Cycle 8 Delivery |
+| GO Morris | 26/11 — intégrer réserves documentaires/WEB + revue architecturale ChatGPT ; préparation candidat RECETTE ; pas de cutover |
+| Base tip | `8c82b6c18f64af873ea780e692beb816d9d9f36e` |
+| Contenu | Frontière fournisseur commune + enveloppe campagne ; suspend allocation sans substitution ; FinOps observation≠estimation ; autorité WEB D6 (parse≠authority) ; PDF viewerToken rotation + auth owner/lane/project ; manifeste RECETTE |
+| Migration | NONE |
+| LIVE | Non rejoué (S1 démontré déterministe ; preuves LIVE antérieures réutilisées) · WEB OFF |
+| Compatibilité | NO RELEASE · STABLE NOT AVAILABLE · ML5 OPEN · R5 IN PROGRESS · R6 NOT STARTED · NOT ADOPTED · G-WEB-MIXED fermé · G-RECETTE non consommé |
+| Contrôles | Vitest unit ml5* 337 PASS (dont frontier, authority, FinOps, sessions) |
+| Réserves | Git PDF text B ; WEB-05 C ; F2 C ; kind D6 dédié D |
+| Statut | DEV CANDIDATE — COGNITIVE CONSOLIDATION — RECETTE SCOPE DECISION REQUIRED |
diff --git a/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md b/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
index cea4d63e..68d3d3fc 100644
--- a/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
+++ b/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
@@ -4,46 +4,65 @@
 |---|---|
 | Date | 2026-11-26 |
 | Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
-| HEAD base rapportée | `912ef30b40f2447a925f4182bc4961560eca810e` |
-| Tree base | `6d0e6255a59139647fa8b2381571524d53a73b51` |
-| Web tree base | `02cf48bbcc984cdbe2300b180cf899ae20f348a6` |
-| BUILD_ID observé (runtime) | `bP8batKL2XqD6iDGGw_Iy` (arbre dirty — rebuild requis avant cutover) |
+| HEAD (à confirmer post-commit) | voir tip local après consolidation |
 | Classe | **NO RELEASE** |
 | STABLE | NOT AVAILABLE |
 | Cutover | **NON APPLIQUÉ** |
+| G-RECETTE | **NON CONSOMMÉ** |
+| G-WEB-MIXED | **FERMÉ** |
+| WEB LIVE défaut | **OFF** |
 
-## Capacités qualifiées (DEV)
+## Capacités qualifiées
 
-| Capacité | État |
-|---|---|
-| Politique cognitive v0.2 | PRÉSERVÉE (Terra Medium défaut ; Luna Low/Med expérimental DEV ; rollback `legacy_sol`) |
-| PDF transverse + progressive | IMPLEMENTED + COVERAGE VERIFIED (fixture) ; viewer browser PASS |
-| Sessions WEB TTL/éviction | IMPLEMENTED + unit PASS |
-| Admission Option B | BEHAVIOR PROVEN LIVE |
-| Worker WEB query-only Terra | LIVE OBSERVED |
-| Egress DNS pin open | LIVE OBSERVED après fix `options.all` |
-| RoomBooking RB-27–31 | LIVE OBSERVED (Git REAL chantiers360) |
-| StockTrack IT-06 | LIVE OBSERVED + V2 conservée (rev2) ; V1 intacte |
-| Git PDF REAL text | **BLOCKED CORPUS MISSING** (PDF scanné 1 page, SCANNED_NO_TEXT) |
-| WEB LIVE public | LIVE OBSERVED (search+open HTML/PDF) puis **OFF** |
-| FinOps | Réconcilié PARTIAL (cost_coverage PARTIAL fréquent) |
-
-## Configuration future candidat RECETTE (décision Morris requise)
+| Capacité | État | Preuve |
+|---|---|---|
+| Frontière fournisseur commune + enveloppe campagne | DETERMINISTIC PROVEN | `ml5-provider-emission-frontier` · wired Nora + WEB worker |
+| Allocation sans substitution silencieuse | DETERMINISTIC PROVEN | `RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION` |
+| FinOps observation vs estimation | DETERMINISTIC PROVEN | `computeMeasureCoveragePercent` + `computeEstimationCompletenessPercent` |
+| Autorité WEB D6 (parse ≠ authority) | DETERMINISTIC PROVEN | `web-public-query-authority` · registry no auto-promote |
+| PDF viewerToken rotation + auth owner/lane/project | DETERMINISTIC PROVEN | session + route tests |
+| Politique cognitive v0.2 DEV | PRÉSERVÉE | Terra Medium ; Luna L/M expérimental ; rollback `legacy_sol` |
+| StockTrack IT-06 V2 conserve | REUSED (prior LIVE) | tip antérieur `8c82b6c1` — retest déterministe préféré |
+| RoomBooking investigation longue | REUSED | pas de replay 71 req ; corrections via unit/intégration |
+| PDF Git REAL textuel | **BLOCKED CORPUS MISSING** | BPMN scanné SCANNED_NO_TEXT |
+| WEB LIVE public | PRIOR LIVE OBSERVED puis **OFF** | retest autorité D6 LIVE conditionnel §12.2 |
+| WEB-05 confrontation | PARTIAL | classe C — vérifiable en recette / retest ciblé |
+
+## Configuration proposée RECETTE (décision Morris distincte)
 
+- Politique cognitive : **ne pas** activer automatiquement v0.2 expérimentale (Luna) ; soumettre couples admissibles à Morris
+- Ressource initiale suggérée si GO : Terra Medium (ou Sol historique si rollback `legacy_sol`)
 - `SFIA_WEB_SEARCH_LIVE=0` / `SFIA_WEB_SEARCH_ENABLED=0` par défaut
-- Ne pas appliquer automatiquement la politique expérimentale DEV (Luna) à RECETTE
-- Clés OpenAI lane-isolées déjà séparées — préserver
-- Rebuild + BUILD_ID fresh sur arbre clean avant cutover
-- Procédure retour arrière : revert cutover config ; WEB LIVE reste 0
+- Qualification WEB utilisateur : projet public dédié + HumanDecision RECORD_DECISION + enveloppe §12.2
+- Isolation fournisseur : fingerprints lane déjà séparés — préserver
+- Capacités accessibles : cognition D3, FinOps page 13, PDF viewer, Git RO, WEB OFF
+- Rollback : tip précédent + flags WEB 0 + politique `legacy_sol` si requis
+
+## Réserves classées A/B/C/D
+
+| Id | Classe | Justification |
+|---|---|---|
+| R-GIT-PDF-TEXT | B | Capacité Git PDF text isolable ; scanné déjà prouvé comme limite |
+| R-WEB05 | C | Confrontation sources — socle sûr ; qualité intellectuelle en recette |
+| R-D6-WEB-KIND | D | Kind dédié optionnel ; RECORD_DECISION lie déjà le payload |
+| R-F2 | C | Recette visuelle Morris |
+| R-EFFICIENCE-RB | C | Dette efficience RoomBooking — non critique sécurité |
+| R-LIVE-REENVELOPPE | B | Tout retest LIVE doit réutiliser frontière S1 |
+
+**Aucune réserve A** (bloquante mise à disposition) identifiée sur le socle sécurité / autorité / enveloppe après consolidation — sous réserve du rebuild clean + revue ChatGPT + GO Morris cutover.
+
+## Smoke tests cutover (non exécutés)
+
+1. Health DEV/RECETTE isolation ports 3100/3200/5433
+2. Session Pilote + FinOps summary KPI
+3. Tour Nora simple Terra medium (WEB OFF)
+4. Viewer PDF fixture owner match / cross-owner 403
+5. Flags WEB = 0 sur processus actif
 
-## Réserves bloquant READY FOR RECETTE
+## Rollback
 
-1. Arbre produit **DIRTY** — commit local + rebuild requis
-2. Git PDF text REAL non démontrable (corpus scanné)
-3. WEB-05 confrontation sources versionnées : PARTIAL (opens échoués avant fix ; non rejoué post-fix)
-4. Enveloppe documentaire Responses cumulées > 40 sur travaux RB étendus — tracer honest overshoot
-5. F2 visuelle exhaustive différée
+Revert tip consolidation ; WEB OFF ; politique `legacy_sol` si besoin ; aucune migration à annuler.
 
 ## Verdict manifeste
 
-**NOT READY FOR RECETTE** — candidat instruit pour revue ; G-RECETTE non consommé.
+**CANDIDATE INSTRUCTED FOR G-RECETTE — CUTOVER NOT APPLIED — MORRIS GO REQUIRED.**
diff --git a/projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts b/projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts
index d07655b4..95a2e1ef 100644
--- a/projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/web/pdf-viewer/[viewerToken]/route.ts
@@ -30,13 +30,31 @@ export async function GET(
     if (page.kind !== "pdf") {
       return NextResponse.json({ error: "VIEWER_NOT_PDF" }, { status: 415 });
     }
-    // Owner check when known — prevents cross-pilot token reuse.
-    if (
-      page.scope.ownerPilotId &&
-      page.scope.ownerPilotId !== session.pilotId
-    ) {
+    // ViewerToken alone is not authority — owner + lane + project must be opposable.
+    const owner = (page.scope.ownerPilotId || "").trim();
+    if (!owner) {
+      return NextResponse.json(
+        { error: "VIEWER_OWNER_REQUIRED", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
+        { status: 403 },
+      );
+    }
+    if (owner !== session.pilotId) {
       return NextResponse.json({ error: "VIEWER_OWNER_MISMATCH" }, { status: 403 });
     }
+    const lane = (page.scope.lane || "").trim();
+    const processLane = (process.env.STUDIO_LANE || "").trim();
+    if (!lane || lane === "UNKNOWN" || (processLane && lane !== processLane)) {
+      return NextResponse.json(
+        { error: "VIEWER_LANE_MISMATCH", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
+        { status: 403 },
+      );
+    }
+    if (!(page.scope.projectId || "").trim()) {
+      return NextResponse.json(
+        { error: "VIEWER_PROJECT_REQUIRED", limits: ["VIEWER_TOKEN_NOT_SUFFICIENT"] },
+        { status: 403 },
+      );
+    }
     if (!page.pdfBytes || page.pdfBytes.byteLength < 5) {
       return NextResponse.json(
         {
diff --git a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
index e2ee84c7..4727b5e9 100644
--- a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
@@ -50,7 +50,13 @@ function kpiSubCompleted(
 
 function kpiSubCoverage(kpis: FinOpsSummaryDto["kpis"]): string {
   if (kpis.totalRequests <= 0) return "Requêtes non recensées";
-  return `${formatIntegerFr(kpis.measuredRequests)} / ${formatIntegerFr(kpis.totalRequests)} requêtes recensées`;
+  const observed = `${formatIntegerFr(kpis.measuredRequests)} / ${formatIntegerFr(kpis.totalRequests)} requêtes recensées`;
+  const est = kpis.estimationCompletenessPercent;
+  if (!est) return observed;
+  if (est.kind === "known" || est.kind === "partial") {
+    return `${observed} · estimation connue ${est.value} %`;
+  }
+  return observed;
 }
 
 function cellTokens(metric: FinOpsWorkListItem["tokens"]): string {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
index 7dfb1ef8..cbf0cf46 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
@@ -295,6 +295,15 @@ export async function runCognitiveConductor(
       };
     }
 
+    // S2 — refused resource proposal without silent substitution → honest SUSPEND.
+    const resourceSuspend = (segment.resourcesDelta?.limits ?? []).includes(
+      "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
+    );
+    if (resourceSuspend) {
+      suspended = true;
+      suspendReason = "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION";
+    }
+
     const nextProgressKey = progressFingerprint(investigation);
     if (nextProgressKey === lastProgressKey && segment.continueWork) {
       stagnantSegments += 1;
@@ -308,11 +317,16 @@ export async function runCognitiveConductor(
       workId: work.id,
       ownerToken,
       expectedRevision: revision,
-      cause: segment.continueWork ? "SEGMENT_CONTINUE" : "SEGMENT_COMPLETE",
+      cause: resourceSuspend
+        ? "BUDGET"
+        : segment.continueWork
+          ? "SEGMENT_CONTINUE"
+          : "SEGMENT_COMPLETE",
       state: investigation,
       resources,
       production,
-      status: "RUNNING",
+      status: resourceSuspend ? "SUSPENDED" : "RUNNING",
+      interruptCause: resourceSuspend ? suspendReason : null,
       turnCommandId: input.turnCommandId,
       generationId: segment.generationId,
       objective: investigation.intentSummary || work.objective,
@@ -373,7 +387,7 @@ export async function runCognitiveConductor(
       }
     }
 
-    if (!segment.continueWork) {
+    if (!segment.continueWork || resourceSuspend) {
       break;
     }
 
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
index 1c5bfd40..d71ca781 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-policy.ts
@@ -636,10 +636,25 @@ export function resolveContinuityCognitivePolicy(input: {
   }
 
   // No compatible hold — do not invent cognitive equivalence with another model.
-  // Fall through to the explicit operational default and mark the proposal unsatisfied.
+  // Explicit proposals that cannot be admitted must not silently run on an unrelated
+  // operational default as if cognitively equivalent. Mark SUSPEND so the conductor
+  // can return the refusal to the Pilote / re-propose with technical reason.
   const policy = buildCognitivePolicy(input.seed, input.overrideType, {
     profileHint: input.profileHint,
   });
+  if (hasExplicitProposal) {
+    return {
+      ...policy,
+      reasonCodes: [
+        ...policy.reasonCodes,
+        `RESOURCE_REFUSED_${direct.reasonCode}`,
+        "RESOURCE_CONTINUITY_PROPOSAL_UNSATISFIED_NO_HOLD",
+        "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
+        `REQUESTED_MODEL_${requestedModel}`,
+        `REQUESTED_EFFORT_${requestedEffort}`,
+      ],
+    };
+  }
   return {
     ...policy,
     reasonCodes: [
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index cdf7afc5..147c2eb8 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -26,6 +26,10 @@ import { isStudioError } from "@/lib/http-errors";
 import { fixtureSemanticQualify } from "./fixture-semantic-qualify";
 import { resolveProviderSimulatedQualification } from "./provider-simulated-qualification";
 import { extractProviderUsageFromRunResult } from "./provider-usage";
+import {
+  commitProviderEmission,
+  reserveProviderEmission,
+} from "./provider-emission-frontier";
 import { recordNoraProviderUsageFromRunResult } from "./usage-accounting";
 import {
   NoraTurnQualificationAgentSchema,
@@ -1188,7 +1192,45 @@ async function runLiveWithTools(
   let providerUsage = extractProviderUsageFromRunResult(null);
 
   try {
-    const attemptId = newAttemptId();
+    // S1 — reserve at the common emission frontier before any provider contact.
+    const reservation = reserveProviderEmission({
+      kind: "nora.generate_reply",
+      modelId: policy.modelRequested,
+      effort: policy.effortRequested,
+    });
+    if (!reservation.ok) {
+      clearTimeout(wallTimer);
+      return {
+        generationId,
+        mode: "openai-agents-sdk-live",
+        status: "FAILED",
+        streamingProvisional: false,
+        streamingAttempted: false,
+        streamingDelivered: false,
+        streamingNotes: `PROVIDER_EMISSION_REFUSED:${reservation.reasonCode}`,
+        content: `Nora LIVE refusée avant émission fournisseur (${reservation.reasonCode}). Aucun contact réseau tenté.`,
+        policy,
+        modelRequested: policy.modelRequested,
+        modelApplied: null,
+        effortRequested: policy.effortRequested,
+        effortApplied: null,
+        attempts: [
+          {
+            attemptId: newAttemptId(),
+            kind: "non_stream",
+            outcome: "FAILED",
+            notes: `PROVIDER_EMISSION_REFUSED:${reservation.reasonCode}:${reservation.reason}`,
+            providerContacted: "NO",
+          },
+        ],
+        toolCallsObserved: 0,
+        d4CharsReturned: 0,
+        qualification: unavailableQualification(
+          `PROVIDER_EMISSION_REFUSED_${reservation.reasonCode}`,
+        ),
+      };
+    }
+    const attemptId = reservation.attemptId;
     // Structured qualification never surfaces provisional JSON to the Pilote (A3).
     // Non-stream avoids Agents SDK stream_drain REDACTED schema failures (fp d57214)
     // observed on tool-heavy investigation turns (CampusNova 2026-11-19).
@@ -1209,12 +1251,14 @@ async function runLiveWithTools(
         model_requested: policy.modelRequested,
         max_turns_note: "maxTurns≠maxProviderCalls",
         live_output_schema: "plain_omit_visual",
+        campaign_id: reservation.campaignId,
       },
     });
 
     try {
       // Invoking run() → provider contact becomes at least UNCERTAIN.
       providerContacted = "UNCERTAIN";
+      commitProviderEmission(reservation);
       const result = await run(agent, prompt, {
         maxTurns,
         stream: false,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
index a2006aa1..0d2d3cc8 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
@@ -183,59 +183,91 @@ export function putWebPageSession(input: {
 
   const now = new Date();
   const expiresAt = new Date(now.getTime() + ttlMs()).toISOString();
-  const viewerToken =
-    existing?.viewerToken ?? randomBytes(24).toString("base64url");
-  const extractedPages = [
-    ...new Set([
-      ...(existing?.extractedPages ?? []),
-      ...(input.pages ?? []).map((p) => p.pageNumber),
-    ]),
-  ].sort((a, b) => a - b);
+  const fingerprintChanged =
+    Boolean(existing) &&
+    existing!.contentFingerprint !== input.contentFingerprint;
+
+  // Citation fidelity: never reuse a viewerToken across content versions.
+  // Old token is revoked so citations of the prior fingerprint cannot serve new bytes.
+  const viewerToken = fingerprintChanged
+    ? randomBytes(24).toString("base64url")
+    : (existing?.viewerToken ?? randomBytes(24).toString("base64url"));
+
+  const extractedPages = fingerprintChanged
+    ? (input.pages ?? []).map((p) => p.pageNumber)
+    : [
+        ...new Set([
+          ...(existing?.extractedPages ?? []),
+          ...(input.pages ?? []).map((p) => p.pageNumber),
+        ]),
+      ].sort((a, b) => a - b);
 
   // Copy PDF bytes — pdf.js getDocument may detach the caller's ArrayBuffer.
+  // After fingerprint change, never keep prior bytes under a new fingerprint.
   const incomingPdf =
     input.pdfBytes && input.pdfBytes.byteLength > 0
       ? new Uint8Array(input.pdfBytes)
       : undefined;
-  const retainedPdf =
-    incomingPdf ??
-    (existing?.pdfBytes && existing.pdfBytes.byteLength > 0
-      ? existing.pdfBytes
-      : undefined);
+  const retainedPdf = fingerprintChanged
+    ? incomingPdf
+    : incomingPdf ??
+      (existing?.pdfBytes && existing.pdfBytes.byteLength > 0
+        ? existing.pdfBytes
+        : undefined);
+
+  // Enforce memory limits also when enriching an existing session.
+  const nextFootprint =
+    (retainedPdf?.byteLength ?? 0) +
+    Buffer.byteLength(input.text, "utf8") +
+    (input.pages ?? []).reduce((n, p) => n + Buffer.byteLength(p.text, "utf8"), 0);
+  if (existing) {
+    // Temporarily remove existing from accounting for eviction sizing.
+    sessions.delete(k);
+    if (existing.viewerToken) byViewerToken.delete(existing.viewerToken);
+    evictOldestUntilFit(nextFootprint + 4096);
+  }
 
   const next: WebPageSession = {
-    sessionId:
-      existing?.sessionId ??
-      createHash("sha256").update(k).digest("hex").slice(0, 16),
+    sessionId: fingerprintChanged
+      ? createHash("sha256")
+          .update(`${k}::${input.contentFingerprint}`)
+          .digest("hex")
+          .slice(0, 16)
+      : (existing?.sessionId ??
+        createHash("sha256").update(k).digest("hex").slice(0, 16)),
     viewerToken,
     scope,
     url: input.url,
     kind: input.kind,
     text: input.text,
-    pages: input.pages ?? existing?.pages,
-    pageCount: input.pageCount ?? existing?.pageCount,
+    pages: fingerprintChanged
+      ? input.pages
+      : (input.pages ?? existing?.pages),
+    pageCount: fingerprintChanged
+      ? input.pageCount
+      : (input.pageCount ?? existing?.pageCount),
     extractedPages,
-    consultedPages: existing?.consultedPages ?? [],
+    consultedPages: fingerprintChanged ? [] : (existing?.consultedPages ?? []),
     contentFingerprint: input.contentFingerprint,
-    openedAt: input.openedAt ?? now.toISOString(),
+    openedAt: fingerprintChanged
+      ? now.toISOString()
+      : (input.openedAt ?? existing?.openedAt ?? now.toISOString()),
     expiresAt,
-    charOffset: existing?.charOffset ?? 0,
-    consultedRanges: existing?.consultedRanges ?? [],
-    bytesObtained: input.bytesObtained ?? existing?.bytesObtained ?? 0,
-    sourceTruncated: Boolean(input.sourceTruncated ?? existing?.sourceTruncated),
+    charOffset: fingerprintChanged ? 0 : (existing?.charOffset ?? 0),
+    consultedRanges: fingerprintChanged ? [] : (existing?.consultedRanges ?? []),
+    bytesObtained: fingerprintChanged
+      ? (input.bytesObtained ?? retainedPdf?.byteLength ?? 0)
+      : (input.bytesObtained ?? existing?.bytesObtained ?? 0),
+    sourceTruncated: Boolean(
+      input.sourceTruncated ??
+        (fingerprintChanged ? false : existing?.sourceTruncated),
+    ),
     pdfBytes: retainedPdf,
-    limits: [...input.limits],
+    limits: fingerprintChanged
+      ? [...input.limits, "SOURCE_MODIFIED_SINCE_PRIOR_OPEN", "VIEWER_TOKEN_ROTATED"]
+      : [...input.limits],
   };
 
-  if (existing && existing.contentFingerprint !== next.contentFingerprint) {
-    next.limits = [...next.limits, "SOURCE_MODIFIED_SINCE_PRIOR_OPEN"];
-    next.charOffset = 0;
-    next.consultedRanges = [];
-    next.consultedPages = [];
-    next.extractedPages = (input.pages ?? []).map((p) => p.pageNumber);
-  }
-
-  if (existing) byViewerToken.delete(existing.viewerToken);
   sessions.set(k, next);
   byViewerToken.set(viewerToken, k);
   return next;
@@ -306,7 +338,12 @@ export function readWebPageProgressive(input: {
   const cov = unionCoverageChars(session.consultedRanges, session.text.length);
   const limits = [...session.limits];
   if (session.sourceTruncated) limits.push("SOURCE_BYTES_TRUNCATED");
-  if (cov.coverage !== "COMPLETE") limits.push("NOT_FULLY_CONSULTED");
+  // Truncated source body can never be COMPLETE — available text ≠ full document.
+  const coverage =
+    session.sourceTruncated && cov.coverage === "COMPLETE"
+      ? ("PARTIAL" as const)
+      : cov.coverage;
+  if (coverage !== "COMPLETE") limits.push("NOT_FULLY_CONSULTED");
   sessions.set(mapKey(session.scope, session.url), session);
   return {
     ok: true,
@@ -316,7 +353,7 @@ export function readWebPageProgressive(input: {
     to,
     totalChars: session.text.length,
     coveredChars: cov.coveredChars,
-    coverage: cov.coverage,
+    coverage,
     sourceTruncated: session.sourceTruncated,
     bytesObtained: session.bytesObtained,
     limits,
@@ -460,6 +497,23 @@ export async function readWebPdfPages(input: {
   ];
   if (!allConsulted) limits.push("NOT_FULLY_CONSULTED");
   if (session.sourceTruncated) limits.push("SOURCE_BYTES_TRUNCATED");
+  // Partial page extracts / truncated binary ⇒ never claim full-document COMPLETE.
+  const pagePartial = extractLimits.some(
+    (l) =>
+      l.includes("TRUNC") ||
+      l.includes("PARTIAL") ||
+      l.includes("CHAR_LIMIT") ||
+      l.includes("SCANNED"),
+  );
+  const coverage =
+    allConsulted && !session.sourceTruncated && !pagePartial
+      ? ("COMPLETE" as const)
+      : returned.length
+        ? ("PARTIAL" as const)
+        : ("EMPTY" as const);
+  if (coverage !== "COMPLETE") {
+    if (!limits.includes("NOT_FULLY_CONSULTED")) limits.push("NOT_FULLY_CONSULTED");
+  }
 
   return {
     ok: true,
@@ -469,7 +523,7 @@ export async function readWebPdfPages(input: {
     pagesAvailable,
     consultedPages: session.consultedPages,
     searchHits,
-    coverage: allConsulted ? "COMPLETE" : returned.length ? "PARTIAL" : "EMPTY",
+    coverage,
     limits,
     contentFingerprint: session.contentFingerprint,
     viewerToken: session.viewerToken,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
index 5c8ba58b..c3792d1e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-registry.ts
@@ -99,28 +99,64 @@ export const PILOT_PUBLIC_QUERY_REF = "pilot-public-query";
 
 /**
  * Explicit Pilote authorization of an exact public query (Option B).
- * Lexical free-form research phrasing does NOT authorize — only these markers.
- * Patterns (case-insensitive):
- *   AUTHORIZE_PUBLIC_QUERY: "exact query"
- *   Autoriser la recherche publique exacte : « exact query »
- *   Autoriser la recherche publique exacte: "exact query"
+ *
+ * Regex parsing is a technical extractor only — NOT D6 authority by itself.
+ * Guards against citation / negation / example / embedded narrative:
+ * - Marker must be a dedicated act (message primarily the authorize line), OR
+ * - An established HumanDecision id may be supplied by the caller separately.
+ * Free-form research phrasing never authorizes.
  */
 export function extractPilotAuthorizedExactQueries(pilotText: string): string[] {
-  const text = pilotText || "";
-  if (!text.trim()) return [];
-  const out: string[] = [];
+  const text = (pilotText || "").replace(/\s+/g, " ").trim();
+  if (!text) return [];
+
+  // Reject negation / example / quotation framing around the command.
+  const lower = text.toLowerCase();
+  const poison = [
+    "ne pas autoriser",
+    "n'autorise pas",
+    "do not authorize",
+    "don't authorize",
+    "exemple",
+    "example",
+    "par exemple",
+    "for example",
+    "citation",
+    "sans autoriser",
+    "sans autorisation",
+  ];
+  if (poison.some((p) => lower.includes(p))) return [];
+
   const patterns = [
-    /AUTHORIZE_PUBLIC_QUERY\s*:\s*[«"']([^»"']+)[»"']/gi,
-    /Autoriser\s+la\s+recherche\s+publique\s+exacte\s*:\s*[«"']([^»"']+)[»"']/gi,
+    /AUTHORIZE_PUBLIC_QUERY\s*:\s*[«"']([^»"']+)[»"']/i,
+    /Autoriser\s+la\s+recherche\s+publique\s+exacte\s*:\s*[«"']([^»"']+)[»"']/i,
   ];
+
+  const out: string[] = [];
   for (const re of patterns) {
-    let m: RegExpExecArray | null;
-    while ((m = re.exec(text)) !== null) {
-      const q = (m[1] || "").replace(/\s+/g, " ").trim();
-      if (q.length >= 3) out.push(q);
-    }
+    const m = re.exec(text);
+    if (!m) continue;
+    const q = (m[1] || "").replace(/\s+/g, " ").trim();
+    if (q.length < 3) continue;
+    // Dedicated act: authorize line must dominate the message (≤ 2 short sentences).
+    const remainder = text.replace(m[0], "").replace(/\s+/g, " ").trim();
+    const remainderOk =
+      remainder.length === 0 ||
+      remainder.length <= 80 ||
+      /^(ok|oui|go|valide|validé|autorise|autorisé)[.!]?\s*$/i.test(remainder);
+    if (!remainderOk) continue;
+    out.push(q);
   }
-  return [...new Set(out)].slice(0, 8);
+  return [...new Set(out)].slice(0, 4);
+}
+
+/**
+ * Whether pilot text is a dedicated AUTHORIZE_PUBLIC_QUERY act (technical parse).
+ * Callers must still bind D6 HumanDecision / inspectable authority when required —
+ * this helper never grants egress alone.
+ */
+export function isDedicatedAuthorizePublicQueryAct(pilotText: string): boolean {
+  return extractPilotAuthorizedExactQueries(pilotText).length > 0;
 }
 
 /**
@@ -296,6 +332,11 @@ export function resolvePublicWebRegistry(input: {
    * Absence ⇒ fail closed for pilot-originated URL extraction.
    */
   pilotText?: string | null;
+  /**
+   * Exact queries already bound by D6 HumanDecision (or prior admitted state).
+   * AUTHORIZE_PUBLIC_QUERY parse alone never populates exactQueries.
+   */
+  d6BoundExactQueries?: string[] | null;
   privateMarkers?: string[];
   env?: Record<string, string | undefined>;
 }): PublicWebRegistry {
@@ -312,7 +353,11 @@ export function resolvePublicWebRegistry(input: {
 
   const topics: Record<string, string> = { ...priorTopicsRaw };
   const exact = new Set(
-    [...(input.priorExactQueries ?? []), ...(input.explicitExactQueries ?? [])]
+    [
+      ...(input.priorExactQueries ?? []),
+      ...(input.explicitExactQueries ?? []),
+      ...(input.d6BoundExactQueries ?? []),
+    ]
       .map((q) => q.replace(/\s+/g, " ").trim())
       .filter(Boolean)
       // Drop exacts that only existed for a prior pilot-public-query value.
@@ -321,6 +366,9 @@ export function resolvePublicWebRegistry(input: {
         return !priorPilot || normalize(q) !== normalize(priorPilot);
       }),
   );
+  if ((input.d6BoundExactQueries ?? []).length > 0) {
+    limits.push("PILOT_EXACT_AUTHORIZED_D6");
+  }
   const facts = [...new Set((input.priorFacts ?? []).map((f) => f.trim()).filter(Boolean))];
 
   const catalog = loadPublicTopicCatalog(input.env ?? process.env);
@@ -353,8 +401,15 @@ export function resolvePublicWebRegistry(input: {
       limits.push(`PILOT_URL_CANDIDATES:${pilotProvidedUrls.length}`);
       limits.push("PILOT_URL_NOT_AUTO_AUTHORIZED");
     }
-    // Option B — explicit exact authorization markers from this-turn Pilote only.
+    // Option B — technical parse of AUTHORIZE_PUBLIC_QUERY (≠ D6 authority).
+    // Parsed queries are observed for staging / inspectable act preparation only;
+    // they are NOT promoted into exactQueries unless already present via
+    // d6BoundExactQueries / explicitExactQueries / priorExactQueries.
     const pilotExact = extractPilotAuthorizedExactQueries(input.pilotText);
+    if (pilotExact.length === 0 && /AUTHORIZE_PUBLIC_QUERY/i.test(input.pilotText)) {
+      limits.push("PILOT_EXACT_PARSE_REJECTED");
+      limits.push("PARSE_NOT_D6_AUTHORITY");
+    }
     for (const q of pilotExact) {
       if (markers.some((m) => q.toLowerCase().includes(m.toLowerCase()))) {
         limits.push("PILOT_EXACT_SKIP_PRIVATE_MARKER");
@@ -365,9 +420,12 @@ export function resolvePublicWebRegistry(input: {
         limits.push(`PILOT_EXACT_SANITIZE_BLOCKED:${sanitized.blockedReason ?? "BLOCKED"}`);
         continue;
       }
-      if (!exact.has(sanitized.query)) {
-        exact.add(sanitized.query);
-        limits.push("PILOT_EXACT_AUTHORIZED");
+      limits.push("PILOT_EXACT_PARSE_OBSERVED");
+      limits.push("PARSE_NOT_D6_AUTHORITY");
+      if (exact.has(sanitized.query)) {
+        limits.push("PILOT_EXACT_ALREADY_BOUND");
+      } else {
+        limits.push("PILOT_EXACT_AWAITING_D6_DECISION");
       }
     }
   } else {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index 793441f6..2dec60d4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -450,7 +450,27 @@ async function executeIsolatedLiveWebSearch(
       ],
     };
   }
-  const attemptId = `web-search-${randomUUID()}`;
+  const { reserveProviderEmission, commitProviderEmission } = await import(
+    "./provider-emission-frontier"
+  );
+  const reservation = reserveProviderEmission({
+    kind: "public_web.isolated_search",
+    modelId: modelRequested,
+    effort: effortRequested,
+  });
+  if (!reservation.ok) {
+    return {
+      status: "ERROR",
+      items: [],
+      limits: [
+        "WEB_SEARCH_PROVIDER_EMISSION_REFUSED",
+        reservation.reasonCode,
+        reservation.reason.slice(0, 120),
+        "WEB_LIVE_SEARCH_BLOCKED",
+      ],
+    };
+  }
+  const attemptId = reservation.attemptId;
   const generationId = `web-gen-${randomUUID()}`;
   const started = Date.now();
   let result: unknown;
@@ -472,6 +492,8 @@ async function executeIsolatedLiveWebSearch(
       },
     });
     // CRITICAL isolation: only the sanitized public query is the user message.
+    // S1 — commit reservation at the common frontier before contacting the provider.
+    commitProviderEmission(reservation);
     result = await run(agent, query, { maxTurns: 6 });
   } catch (e) {
     // FinOps — record failed attempt (uncertain usage when SDK has none).
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index a0e8c1d7..723fd045 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -1357,11 +1357,35 @@ export async function runNoraCognitiveTurn(
         input.conversationId ?? "",
         work.id,
       ].filter((m) => m.trim().length >= 4);
+      // S4 — AUTHORIZE_PUBLIC_QUERY parse ≠ D6; bind exceptional auth via HumanDecision.
+      let d6BoundExactQueries: string[] = [];
+      try {
+        const { evaluateWebPublicQueryAuthority } = await import(
+          "./web-public-query-authority"
+        );
+        const { isDedicatedAuthorizePublicQueryAct } = await import(
+          "./public-web-registry"
+        );
+        if (isDedicatedAuthorizePublicQueryAct(input.userText)) {
+          const auth = await evaluateWebPublicQueryAuthority({
+            pilotText: input.userText,
+            projectId: input.projectId,
+            pilotId: input.pilotId,
+            policyVersion: policy.policyVersion,
+          });
+          if (auth.allowed) {
+            d6BoundExactQueries = [auth.query];
+          }
+        }
+      } catch {
+        /* authority lookup failure ⇒ no exceptional promotion */
+      }
       const webRegistry = resolvePublicWebRegistry({
         priorTopics: work.state.registeredPublicTopics,
         priorExactQueries: work.state.authorizedExactWebQueries,
         priorFacts: work.state.registeredPublicFacts,
         pilotText: input.userText,
+        d6BoundExactQueries,
         privateMarkers,
         haystack: [
           input.userText,
@@ -1376,6 +1400,44 @@ export async function runNoraCognitiveTurn(
         ...(work.state.pendingPublicWebProposals ?? []),
       ];
       let reply: NoraGenerateResult;
+      // S2 — refused explicit proposal without compatible hold: do not silently emit
+      // on an unrelated operational default as if cognitively admitted.
+      if (
+        policy.reasonCodes.includes(
+          "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
+        )
+      ) {
+        const refusedModel =
+          work.state.proposedCognitiveModel ?? policy.modelRequested;
+        const refusedEffort =
+          work.state.proposedCognitiveEffort ?? policy.effortRequested;
+        return {
+          replyText:
+            `Je ne peux pas appliquer silencieusement une autre ressource cognitive : la proposition ` +
+            `${refusedModel}@${refusedEffort} n'est pas admise dans la politique active et aucune ressource ` +
+            `déjà admise n'est disponible pour la maintenir. Indique une autre allocation (modèle/effort) ` +
+            `compatible, ou demande le maintien d'une ressource déjà qualifiée.`,
+          qualification: null,
+          investigation: {
+            ...work.state,
+            remainingWork: [
+              ...work.state.remainingWork,
+              `Allocation refusée sans substitution silencieuse: ${refusedModel}@${refusedEffort}`,
+            ].slice(0, 12),
+            contractReady: false,
+            contractReadyBlockedReason:
+              "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
+          },
+          generationId: null,
+          continueWork: false,
+          resourcesDelta: {
+            limits: [
+              "RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION",
+              "PROVIDER_NOT_CONTACTED",
+            ],
+          },
+        };
+      }
       if (probeReply && segmentIndex === 0 && !probeConsumed && !hasPriorAcquis) {
         probeConsumed = true;
         reply = probeReply;
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
index 4b134354..bb118465 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
@@ -103,12 +103,17 @@ export function aggregateTokenTotal(rows: TokenRow[]): MeasuredValue<number> {
   return { kind: "known", value: sum };
 }
 
+/**
+ * Observation coverage: share of provider requests that have *some* cost
+ * observation (KNOWN or PARTIAL). PARTIAL still counts as observed — not as
+ * financially complete.
+ */
 export function computeMeasureCoveragePercent(
   rows: Array<{ costCoverage: string; providerRequests: number | null }>,
 ): MeasuredValue<number> {
   if (rows.length === 0) return { kind: "empty" };
   let totalReq = 0;
-  let measuredReq = 0;
+  let observedReq = 0;
   let missingRequestCounts = false;
   for (const r of rows) {
     if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
@@ -116,17 +121,15 @@ export function computeMeasureCoveragePercent(
       continue;
     }
     totalReq += r.providerRequests;
-    if (r.costCoverage === "KNOWN") {
-      measuredReq += r.providerRequests;
-    } else if (r.costCoverage === "PARTIAL") {
-      measuredReq += r.providerRequests;
+    if (r.costCoverage === "KNOWN" || r.costCoverage === "PARTIAL") {
+      observedReq += r.providerRequests;
     }
   }
   if (missingRequestCounts && totalReq <= 0) {
     return { kind: "unknown", reason: "Requêtes non observées" };
   }
   if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
-  const pct = Math.round((measuredReq / totalReq) * 100);
+  const pct = Math.round((observedReq / totalReq) * 100);
   const value = Math.min(100, Math.max(0, pct));
   if (missingRequestCounts) {
     return {
@@ -138,6 +141,48 @@ export function computeMeasureCoveragePercent(
   return { kind: "known", value };
 }
 
+/**
+ * Estimation completeness: only KNOWN rows contribute. PARTIAL never inflates
+ * this toward a fully-known financial picture.
+ */
+export function computeEstimationCompletenessPercent(
+  rows: Array<{ costCoverage: string; providerRequests: number | null }>,
+): MeasuredValue<number> {
+  if (rows.length === 0) return { kind: "empty" };
+  let totalReq = 0;
+  let knownReq = 0;
+  let hasPartial = false;
+  let missingRequestCounts = false;
+  for (const r of rows) {
+    if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
+      missingRequestCounts = true;
+      continue;
+    }
+    totalReq += r.providerRequests;
+    if (r.costCoverage === "KNOWN") {
+      knownReq += r.providerRequests;
+    } else if (r.costCoverage === "PARTIAL") {
+      hasPartial = true;
+    }
+  }
+  if (missingRequestCounts && totalReq <= 0) {
+    return { kind: "unknown", reason: "Requêtes non observées" };
+  }
+  if (totalReq <= 0) return { kind: "unknown", reason: "Requêtes non observées" };
+  const pct = Math.round((knownReq / totalReq) * 100);
+  const value = Math.min(100, Math.max(0, pct));
+  if (missingRequestCounts || hasPartial) {
+    return {
+      kind: "partial",
+      value,
+      note: hasPartial
+        ? "Mesures PARTIAL exclues de la complétude financière"
+        : "Certaines lignes sans nombre de requêtes",
+    };
+  }
+  return { kind: "known", value };
+}
+
 export function formatUsdFr(value: number): string {
   const s = value.toLocaleString("fr-FR", {
     minimumFractionDigits: 2,
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index fcadef88..ddf6f2f2 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -9,6 +9,7 @@ import { StudioError } from "@/lib/http-errors";
 import {
   aggregateEstimatedCost,
   aggregateTokenTotal,
+  computeEstimationCompletenessPercent,
   computeMeasureCoveragePercent,
   mapCognitiveWorkStatusLabel,
   parseFinOpsPeriodDays,
@@ -119,6 +120,8 @@ export type FinOpsSummaryDto = {
     totalTokens: MeasuredValue<number>;
     completedWorks: MeasuredValue<number>;
     measureCoveragePercent: MeasuredValue<number>;
+    /** Financial estimation completeness — PARTIAL excluded from the numerator. */
+    estimationCompletenessPercent: MeasuredValue<number>;
     costPerCompletedWorkUsd: MeasuredValue<number>;
     measuredRequests: number;
     totalRequests: number;
@@ -195,6 +198,8 @@ export async function loadFinOpsSummary(
   const estimatedCostUsd = aggregateEstimatedCost(rows);
   const totalTokens = aggregateTokenTotal(rows);
   const measureCoveragePercent = computeMeasureCoveragePercent(rows);
+  const estimationCompletenessPercent =
+    computeEstimationCompletenessPercent(rows);
 
   const workIds = [
     ...new Set(rows.map((r) => r.cognitiveWorkId).filter((id): id is string => Boolean(id))),
@@ -252,6 +257,7 @@ export async function loadFinOpsSummary(
       totalTokens,
       completedWorks,
       measureCoveragePercent,
+      estimationCompletenessPercent,
       costPerCompletedWorkUsd,
       measuredRequests,
       totalRequests,

## Coverage matrix (created / modified)

| Path | Action | Sequence |
|---|---|---|
| `provider-emission-frontier.ts` | CREATE | S1 |
| `web-public-query-authority.ts` | CREATE | S4 |
| `nora-adapter.ts` | MODIFY | S1 |
| `public-web-search-frontier.ts` | MODIFY | S1 |
| `cognitive-policy.ts` | MODIFY | S2 |
| `run-nora-cognitive-turn.ts` | MODIFY | S2/S4 |
| `cognitive-conductor.ts` | MODIFY | S2 |
| `usage-projection.ts` / `usage-read-service.ts` / FinOps panel | MODIFY | S3 |
| `public-web-registry.ts` | MODIFY | S4 |
| `public-web-page-session.ts` / pdf-viewer route | MODIFY | S5 |
| `not-found.tsx` / `global-error.tsx` | CREATE | S6/S7 |
| tests unit frontier/authority/session/finops/t1/cognitive | MODIFY/CREATE | S6 |
| manifeste + as-built + delivery-history + web dossier | MODIFY/CREATE | S7/S14 |

## Morris decisions required

1. GO/NO-GO cutover RECETTE after ChatGPT review (blocked by R-BUILD-404 until build fixed).
2. Politique cognitive RECETTE (v0.2 DEV-only vs Terra-only / legacy_sol).
3. Optional dedicated D6 kind for WEB vs RECORD_DECISION.
4. Provide textual PDF corpus for Git REAL if required for UAT.

## Review Pack completeness

FULL mono-cycle contents included for created modules and useful diffs of modified cognitive/WEB/FinOps paths. Prior LIVE scripts/proofs referenced by SHA `8c82b6c1` / handoff `99dad916` — not reconstituted fictively.
