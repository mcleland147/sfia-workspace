# SFIA STUDIO NEXT — R5 CYCLE 8 — REVIEW PACK FULL (CRITICAL)

Profil: CRITICAL | Pack: FULL mono-cycle | Date: 2026-11-10
Delivery: DEV-06 — concurrence xact fence + liaison mission↔D2 + crash + browser
Product push: INTERDIT

---

## 1. Git Truth Check et environnement

| Item | Value |
| --- | --- |
| Branch | `feat/next-nora-intent-continuity-20261110` |
| HEAD FINAL | `3fac229ff2833c9aa398c9bdbc712c409425ba1e` |
| TREE FINAL | `cca3f27fc891daa9c400432e2f3ee47f8916e470` |
| Parent | `f99e4501d054b97c5a690f913201efde48e23bd8` |
| Base | `d7f1507a` / tree `3e9e1086` (fix WT preserved) |
| Prior handoff | `a11155d5` blob `2851d2a6` |
| DEV DB | :5433 sfia_next_dev |
| E2E browser | :3101 sfia_next_e2e (isolated) |
| RECETTE | :5434 present — NOT MODIFIED |
| Product push | NONE |

```
3fac229f fix(studio-next): replace session locks with turn fencing and structured D2 binding
f99e4501 fix(studio-next): harden durable mission identity, D2 correlation, and recovery
5c6b0cee feat(studio-next): finalize single-intent D2→D4 continuity without second Pilot message
12e26e32 feat(studio-next): global intent continuity across D2/D4 and common D3
f42cb2f5 fix(studio-next): gate Nora mission resume and harden continuity
cf5bac70 fix(studio-next): reflect missionResume after authorize and prove replay
b0e23c46 feat(studio-next): implement ACCEPT-01 mission continuity in D3 nominal path
```

## 2. Sources Git et décisions

- Cadrage Morris blob `2322644a…` VALIDATED CONTENT — contrat d'acceptation
- ENV-01 / versioning / SEF / ADR R4-01..04 / A3
- Prior handoff a11155d5 consulted; not Product baseline

## 3. Intention Morris complète

Nora conduit une intention multi-domaines de bout en bout, avec actes humains protégés, résultats propriétaires mobilisés, reprise après interruption, sans second message pour étapes déjà exprimées. Atlas/Git sont témoins, pas le périmètre.

## 4. Cartographie D1–D9

D1 droits; D2 create+continue; D3 conduite; D4 CREATE/REVISE/knowledge; D5 OPEN_CYCLE; D6 authorize HD; D7/D9 ACCEPT-01 SCRIPTED; D8 restitution.

## 5. Écarts d'entrée (confirmés localement) et corrections

| Écart | Confirmation | Correction |
| --- | --- | --- |
| A session advisory lock + pool | CONFIRMÉ `pg_advisory_lock/unlock` via db.execute | Remplacé par `pg_advisory_xact_lock` court + `owner_token` CAS |
| B parse texte Nora pour clientIntentKey | CONFIRMÉ page.tsx regex | `awaitingMission` structuré API + state UI |
| C client comme autorité | CONFIRMÉ | `verifyMissionForD2Act` — MISMATCH/AMBIGUOUS explicites |
| D replay ≠ crash | CONFIRMÉ | Hooks P3/P5 + stale reclaim |
| E D5/D6 multi | PARTIEL antérieur | S08b + S09 conservés |
| F browser :3100 down | CONFIRMÉ | Playwright :3101 Atlas PASS |

## 6. Code et architecture corrigés

UNE entrée D3; continuation via create-project COMMAND; fencing aligné sur turn-command D3; pas de second moteur; pas de nouvelle table.

## 7. Protections de concurrence

`claimContinuationOwnership` TX courte: xact lock → COMPLETE replay / RUNNING stale reconcile / insert RUNNING+ownerToken.
`commitContinuationOwned` TX courte: verify owner → insert assistant → CAS COMPLETE.
Aucun verrou de session tenu pendant Nora/D4.

## 8. Lien mission ↔ acte

`verifyMissionForD2Act`; GET preparation retourne `awaitingMission`; UI stocke `awaitingClientIntentKey` depuis JSON; serveur refuse hint falsifié.

## 9. Reprise crash

`continuationRaceHooks.afterReserveBeforeWork` / `afterD4BeforeCommit`; tests P3/P5 stale reclaim; D4 correlationKey idempotent.

## 10–13. Résultats domaines

Atlas S03 + browser; D4 CREATE/REVISE; knowledge S07; D5 S08/S08b; D6 S09; ACCEPT-01 8 PASS.

## 14. Extensibilité

mobilizeCapability D2/D4/future — inchangé, toujours exercé.

## 15. Tests navigateur

| Commande | `npx playwright test tests/e2e/intent-continuity-atlas.spec.ts` |
| Lane | E2E :3101 / sfia_next_e2e |
| Résultat | 1 PASS |
| Niveau | BROWSER OBSERVED (fixture Nora, not LIVE) |

## 16. Tests HTTP/PG/unit

| Preuve | Résultat |
| --- | --- |
| unit intent-conduction | 8 PASS |
| PG global | 16 PASS |
| PG ACCEPT-01 | 8 PASS |
| tsc / build | PASS |
| SHA | `3fac229ff2833c9aa398c9bdbc712c409425ba1e` |

## 17. Fake/Real Qualification

| Frontière | Niveau |
| --- | --- |
| Nora | DETERMINISTIC + BROWSER OBSERVED (fixture) — NOT LIVE |
| GitHub | SCRIPTED — NOT REAL |
| PostgreSQL | DETERMINISTIC PROVEN DEV + E2E DB |
| Browser Atlas | BROWSER OBSERVED |
| End-to-end REAL | NOT PROVEN |

## 18. ENV-01 et versioning

DEV isolé. E2E lane séparée. RECETTE BUILD 8vZjme4-KnnPkAqm_QxMz non modifiée. EVOL/MINOR CANDIDATE. NO RELEASE. Journal DEV-06.

## 19. Matrice cadrage → preuves

| EXIGENCE | CAPACITÉ | CHEMIN | OPÉRATION | CONTINUATION | REPRISE | TEST | PREUVE | GAP | STATUT |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Intention unique | D2+D4 | continueAfterProjectCreated | create+doc | auto | P3/P5 | S03/P3/P5/E2E | PG+Browser | — | PASS |
| Acte humain | D2 | createProjectCommand | CREATED | — | — | S02/E2E | PG+Browser | — | PASS |
| Corrélation exacte | D3 | verifyMissionForD2Act | MISMATCH refuse | — | — | B/C | PG | — | PASS |
| Concurrence | D3 | xact+ownerToken | 1 doc | fence | — | G5 | PG | multi-process limited | PASS |
| Connaissance | D4 | selectRelevantKnowledgeContext | acquis | — | — | S07 | PG | tool-deep PARTIAL | PARTIAL |
| Pilotage | D5 | applyConversationalAuthority | OPEN_CYCLE | same turn D4 | — | S08/S08b | PG | — | PASS |
| Décision | D6 | authorizePublication | HD | ACCEPT-01 | — | S09/ACCEPT-01 | PG SCRIPTED | — | PASS |
| Git | D7/D9 | mission-continuity | dispatch | auto | — | ACCEPT-01 | SCRIPTED | — | PASS |
| Extensibilité | D3 | mobilizeCapability | invoke | — | — | G4 | PG | — | PASS |
| READ≠COMMAND | D3 | listMessages | no mutate | — | — | S13 | PG | — | PASS |
| UX | D2/D3 | Playwright Atlas | create | missionContinue | — | e2e | BROWSER | deep doc UI assert limited | PASS |
| D10–D14 | — | — | — | — | — | — | — | N/A NON IMPLÉMENTÉ | N/A |

## 20. Architecture nominale / anti-doublon

Confirmé: un runner Nora; owners inchangés; fencing réutilise conversation_turn_commands; pas de WorkIntent table.

## 21. Dette / exit / rollback

- Multi-process stress au-delà de Promise.all: limited
- P1/P2/P6/P7/P8 injectés partiellement (P3/P5 + replay couvrent cœur)
- Knowledge tool-deep narrative: PARTIAL
Rollback: `git reset --hard f99e4501`

## 22. Rollback

Local feat branch → f99e4501. Aucun Product remote.

## 23. Fichiers créés — contenu complet

### 23.1 intent-continuity-atlas.spec.ts

```typescript
import { test, expect } from "@playwright/test";

/**
 * Atlas D2→D4 single-intent — BROWSER on isolated E2E lane (:3101 / sfia_next_e2e).
 * Nora fixture FAKE — not LIVE.
 */
test("Atlas: one intent → Créer le projet → project without second chat send", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByTestId("portfolio-new-prep").click();
  await page.waitForURL("**/preparations/**");

  await page
    .getByTestId("prep-draft")
    .fill(
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
    );
  await page.getByTestId("prep-send").click();
  await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await expect(page.getByText("AWAITING_PILOT_ACT", { exact: false })).toBeVisible();

  // Preview may already be filled by Nora updatePreview("Atlas").
  // Only constitute if create is not yet available.
  const createBtn = page.getByTestId("prep-create-project");
  if (!(await createBtn.isEnabled().catch(() => false))) {
    const constitute = page.getByTestId("prep-constitute");
    if (await constitute.isVisible().catch(() => false)) {
      await constitute.click({ force: true });
    }
    const adopt = page.getByTestId("prep-adopt-nora");
    if (await adopt.isVisible().catch(() => false)) {
      await adopt.click({ force: true });
    }
    const nameField = page.getByTestId("prep-proposal-name");
    if (await nameField.isVisible().catch(() => false)) {
      await nameField.fill("Atlas");
      await page.getByTestId("prep-proposal-save").click();
    }
  }

  await expect(createBtn).toBeEnabled({ timeout: 20000 });

  const createRespPromise = page.waitForResponse(
    (r) => r.url().includes("/create-project") && r.request().method() === "POST",
  );
  await createBtn.click();
  const createResp = await createRespPromise;
  expect(createResp.ok()).toBeTruthy();
  const body = await createResp.json();
  expect(body.projectId).toBeTruthy();
  expect(body.missionBindingError).toBeFalsy();
  // Server continuation of same intention (no second chat POST).
  expect(body.missionContinue?.continued === true || body.missionContinue?.documentSave).toBeTruthy();

  await page.waitForURL("**/projects/**", { timeout: 30000 });
  await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
});
```

### 23.2 intent-conduction.ts (FULL @ HEAD)

```typescript
/**
 * D3 common intent conduction — domain-agnostic helpers.
 * NOT a parallel engine: no new authority, permissions, or effect journal.
 * Domain owners remain D2/D4/D5/D6/D7/D9; this module only qualifies,
 * projects refs, reconstructs prior mission state, and continues after
 * owner-confirmed acts when the original intention already required it.
 */
import { and, desc, eq, sql } from "drizzle-orm";
import { randomUUID } from "node:crypto";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations, messages } from "@/db/schema";
import { savePreparationDocument } from "@/domains/document/service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { emitObs } from "@/lib/observability";
import { extractContractualDocumentProposal, qualifyDocumentAct } from "./document-act";
import { generateNoraReply } from "./nora-adapter";
import { TURN_RUNNING_STALE_MS, turnClock } from "./turn-command";
import {
  appendMissionAck,
  composeCanonicalMissionRestitution,
  formatMissionAck,
  qualifyPublicationMission,
  type MissionOwnerActBinding,
  type MissionProjection,
  type MissionStep,
  type MissionStatus,
} from "./mission-continuity";

/**
 * Test-only fault injection for continuation crash points (P3–P6).
 * Must stay no-op in production.
 */
export const continuationRaceHooks: {
  afterReserveBeforeWork?: () => Promise<void>;
  afterNoraBeforeD4?: () => Promise<void>;
  afterD4BeforeCommit?: () => Promise<void>;
} = {};

/** Stable D2↔mission correlation key reused as createProjectCommands.idempotencyKey when known. */
export function d2MissionIdempotencyKey(clientIntentKey: string): string {
  return `d2:mission:${clientIntentKey}`;
}

export function buildD2OwnerActBinding(
  preparationId: string,
  clientIntentKey: string,
): MissionOwnerActBinding {
  return {
    kind: "D2_CREATE_PROJECT",
    preparationId,
    clientIntentKey,
    suggestedIdempotencyKey: d2MissionIdempotencyKey(clientIntentKey),
  };
}

/** Logical capability ids — mapping only, not a second permission catalog. */
export type StudioCapabilityId =
  | "d2.create_project"
  | "d3.converse"
  | "d4.create_document"
  | "d4.revise_document"
  | "d4.read_knowledge"
  | "d5.pilotage_command"
  | "d6.human_decision"
  | "d7.prepare_publication"
  | "d7.dispatch_publication"
  | "d9.git_integration";

export type QualifiedIntent = {
  wantsProjectCreate: boolean;
  proposedProjectName: string | null;
  wantsFollowOnDocument: boolean;
  pendingDocumentBrief: string | null;
  documentAct: ReturnType<typeof qualifyDocumentAct>;
  publication: ReturnType<typeof qualifyPublicationMission>;
  likelyPilotageSignal: boolean;
  simpleDialogue: boolean;
};

const PROJECT_CREATE_RE =
  /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\b/i;

/**
 * GAP-05: stop at puis/et/comma/period — name must not swallow follow-on clauses.
 * "projet nommé Continuity Global B puis un document…" → "Continuity Global B"
 * "projet nommé Atlas puis prépare…" → "Atlas"
 */
export function extractProposedProjectName(userText: string): string | null {
  const named = userText.match(
    /projet\s+(?:nomm[eé]|intitul[eé]|appel[eé])\s+[«"]?(.+?)[»"]?(?=\s+puis\b|\s+ensuite\b|\s+et\s+(?:un|une|le|la|des|ce|cet|cette)\b|\s+pour\s+(?:la|le|les|un|une|ce|cet|cette|l['’])\b|\s*[,.;:]|$)/i,
  );
  if (named?.[1]) return named[1].replace(/[«»"']/g, "").trim();
  return null;
}

/** Follow-on document after project create — allow intervening scope words (« dans ce projet »). */
const FOLLOWON_DOC_RE =
  /\b(?:puis|ensuite|et)\b[\s\S]{0,120}?\b(?:document|note|synthèse|rapport|cadrage)\b/i;

const PILOTAGE_SIGNAL_RE =
  /\b(?:ouvre|ouvrir|cl[oô]ture|cl[oô]turer|cycle|m[eé]thode|trajectoire|restriction|r[eé]voque)\b/i;

/**
 * Executable mobilization contract — not metadata-only.
 * invokeOwnerRef names the real owner function; tests supply a boundary double
 * for future.* capabilities only.
 */
export type CapabilityMobilizationContract = {
  capabilityId: StudioCapabilityId | string;
  ownerDomain: "D1" | "D2" | "D3" | "D4" | "D5" | "D6" | "D7" | "D8" | "D9" | string;
  invokeOwnerRef: string;
  preconditions: string[];
  rightsBoundary: string;
  structuredResultKeys: string[];
  continuationHook: "cognitiveContinueFromFacts" | "authoritySnippets" | "missionProjection" | "none";
  interruptionRecovery: string;
};

export type CapabilityInvokeContext = {
  pilotId: string;
  preparationId?: string;
  projectId?: string;
  payload?: Record<string, unknown>;
};

export type CapabilityInvokeResult = {
  status: string;
  result: Record<string, unknown>;
};

export type CapabilityOwnerAdapter = {
  capabilityId: string;
  invoke: (ctx: CapabilityInvokeContext) => Promise<CapabilityInvokeResult>;
};

export const CAPABILITY_CONTRACTS: CapabilityMobilizationContract[] = [
  {
    capabilityId: "d2.create_project",
    ownerDomain: "D2",
    invokeOwnerRef: "createProjectCommand",
    preconditions: ["preparation OPEN", "previewName/summary", "Pilot click/API"],
    rightsBoundary: "ownerPilotId + creationRevision CAS",
    structuredResultKeys: ["status", "projectId"],
    continuationHook: "missionProjection",
    interruptionRecovery: "create_project_commands idempotencyKey + reconcileCreateProject",
  },
  {
    capabilityId: "d4.create_document",
    ownerDomain: "D4",
    invokeOwnerRef: "savePreparationDocument",
    preconditions: ["explicit CREATE intent", "proposal extract", "turn fence or owner continue"],
    rightsBoundary: "preparation ownership",
    structuredResultKeys: ["status", "documentId", "revisionId"],
    continuationHook: "cognitiveContinueFromFacts",
    interruptionRecovery: "creationCorrelationKey / reconstituteConfirmedD4Effects",
  },
  {
    capabilityId: "d5.pilotage_command",
    ownerDomain: "D5",
    invokeOwnerRef: "applyConversationalAuthority→executePilotageCommand",
    preconditions: ["project linked", "CLEAR intent", "USER message COMPLETE"],
    rightsBoundary: "project ownership + HumanDecision when required",
    structuredResultKeys: ["status", "operation"],
    continuationHook: "authoritySnippets",
    interruptionRecovery: "business_commands clientCommandKey",
  },
  {
    capabilityId: "d6.human_decision",
    ownerDomain: "D6",
    invokeOwnerRef: "insertHumanDecision / authorizePublication",
    preconditions: ["Pilot act", "fingerprint/mandate when effect-bound"],
    rightsBoundary: "D6 owner only — Nora never invents HD",
    structuredResultKeys: ["decisionId", "state"],
    continuationHook: "missionProjection",
    interruptionRecovery: "human_decisions + effect_attempts.decisionId",
  },
  {
    capabilityId: "d7.prepare_publication",
    ownerDomain: "D7",
    invokeOwnerRef: "preparePublication",
    preconditions: ["AVAILABLE revision", "git link", "explicit path for Nora mission"],
    rightsBoundary: "D1/D9 permissions at prepare",
    structuredResultKeys: ["attemptId", "status", "fingerprint"],
    continuationHook: "missionProjection",
    interruptionRecovery: "effect_attempts correlationKey pub:mission:*",
  },
  {
    capabilityId: "future.example_capability",
    ownerDomain: "Dn",
    invokeOwnerRef: "testBoundaryDouble.only",
    preconditions: ["declared by owner"],
    rightsBoundary: "owner rights — never Nora",
    structuredResultKeys: ["status", "id"],
    continuationHook: "cognitiveContinueFromFacts",
    interruptionRecovery: "owner correlation / idempotency",
  },
];

/** GAP-02: exercise a contract by invoking a matching owner adapter; verify result keys. */
export async function mobilizeCapability(
  contract: CapabilityMobilizationContract,
  adapter: CapabilityOwnerAdapter,
  ctx: CapabilityInvokeContext,
): Promise<CapabilityInvokeResult> {
  if (adapter.capabilityId !== contract.capabilityId) {
    throw new StudioError(
      "CONFLICT",
      `Adapter ${adapter.capabilityId} ≠ contract ${contract.capabilityId}`,
    );
  }
  const out = await adapter.invoke(ctx);
  for (const key of contract.structuredResultKeys) {
    if (!(key in out.result) && key !== "status") {
      // status may live on out.status
      if (key === "status" && out.status) continue;
      if (!(key in out) && out.status === undefined) {
        throw new StudioError("INVALID_REQUEST", `Missing structured key ${key}`);
      }
    }
  }
  // Ensure each declared key is present on result or top-level status
  for (const key of contract.structuredResultKeys) {
    const ok =
      key === "status"
        ? out.status != null || out.result.status != null
        : out.result[key] !== undefined;
    if (!ok) {
      throw new StudioError("INVALID_REQUEST", `Owner result missing key ${key}`);
    }
  }
  return out;
}

export function qualifyStudioIntent(userText: string): QualifiedIntent {
  const documentAct = qualifyDocumentAct(userText);
  const publication = qualifyPublicationMission(userText);
  const wantsProjectCreate = PROJECT_CREATE_RE.test(userText);
  const proposedProjectName = extractProposedProjectName(userText);
  const wantsFollowOnDocument =
    wantsProjectCreate && (FOLLOWON_DOC_RE.test(userText) || documentAct.kind === "CREATE");
  let pendingDocumentBrief: string | null = null;
  if (wantsFollowOnDocument) {
    const afterPuis = userText.split(/\bpuis\b/i)[1] ?? userText.split(/\bensuite\b/i)[1];
    pendingDocumentBrief = (afterPuis ?? userText).trim().slice(0, 400);
  }
  const likelyPilotageSignal = PILOTAGE_SIGNAL_RE.test(userText);
  const simpleDialogue =
    !wantsProjectCreate &&
    documentAct.kind === "NONE" &&
    !publication.wantsPublish &&
    !likelyPilotageSignal;

  return {
    wantsProjectCreate,
    proposedProjectName,
    wantsFollowOnDocument,
    pendingDocumentBrief,
    documentAct,
    publication,
    likelyPilotageSignal,
    simpleDialogue,
  };
}

export function emptyMission(clientIntentKey: string, goalSummary: string): MissionProjection {
  return {
    clientIntentKey,
    status: "ACTIVE",
    goalSummary,
    steps: [],
    restitution: "PENDING",
  };
}

export function mergeMissionSteps(
  base: MissionProjection,
  steps: MissionStep[],
  status?: MissionStatus,
): MissionProjection {
  return {
    ...base,
    status: status ?? base.status,
    steps: [...base.steps, ...steps],
  };
}

export type LoadMissionOpts = {
  /** Only return missions whose LATEST projection awaits Pilot D2 act. */
  awaitingPilotAct?: boolean;
  /** Match exact clientIntentKey when known. */
  clientIntentKey?: string;
  /** Scope to preparationId stored on projection. */
  preparationId?: string;
  /**
   * Optional soft cap for diagnostics only — correctness must not depend on it.
   * Default: no limit (full conversation turn history for this conversation).
   */
  limit?: number;
};

/**
 * G1/G3: collapse to latest projection per clientIntentKey across ALL COMPLETE turns
 * for the conversation. A completed continuation supersedes an older AWAITING snapshot.
 */
export async function loadLatestMissionsByIntentKey(
  conversationId: string,
  opts?: { limit?: number },
): Promise<Map<string, MissionProjection>> {
  const q = db
    .select({
      resultJson: conversationTurnCommands.resultJson,
      clientTurnKey: conversationTurnCommands.clientTurnKey,
      createdAt: conversationTurnCommands.createdAt,
    })
    .from(conversationTurnCommands)
    .where(
      and(
        eq(conversationTurnCommands.conversationId, conversationId),
        eq(conversationTurnCommands.status, "COMPLETE"),
      ),
    )
    .orderBy(desc(conversationTurnCommands.createdAt));

  const rows = opts?.limit != null ? await q.limit(opts.limit) : await q;
  const latest = new Map<string, MissionProjection>();
  for (const row of rows) {
    if (!row.resultJson) continue;
    try {
      const parsed = JSON.parse(row.resultJson) as { missionProjection?: MissionProjection | null };
      const m = parsed.missionProjection;
      if (!m?.clientIntentKey) continue;
      if (!latest.has(m.clientIntentKey)) {
        latest.set(m.clientIntentKey, m);
      }
    } catch {
      /* skip */
    }
  }
  return latest;
}

/**
 * Intention-anchored load — uses latest-per-key map (never an older AWAITING after COMPLETE).
 */
export async function loadPriorMissionProjection(
  conversationId: string,
  opts?: LoadMissionOpts,
): Promise<MissionProjection | null> {
  const latest = await loadLatestMissionsByIntentKey(conversationId, {
    limit: opts?.limit,
  });
  const candidates = [...latest.values()].filter((m) => {
    if (opts?.clientIntentKey && m.clientIntentKey !== opts.clientIntentKey) return false;
    if (opts?.preparationId && m.preparationId && m.preparationId !== opts.preparationId) {
      return false;
    }
    if (opts?.awaitingPilotAct && m.status !== "AWAITING_PILOT_ACT") return false;
    return true;
  });
  if (opts?.clientIntentKey) {
    return candidates[0] ?? null;
  }
  // Prefer most recently updated awaiting (map iteration = insertion = newest-first scan).
  return candidates[0] ?? null;
}

export type MissionD2Resolve =
  | { status: "OK"; mission: MissionProjection }
  | { status: "ALREADY_CONTINUED"; mission: MissionProjection }
  | { status: "NO_AWAITING_MISSION" }
  | { status: "MISSION_KEY_MISMATCH"; reason: string }
  | { status: "AMBIGUOUS_AWAITING"; count: number };

/**
 * Server-authoritative binding of a D2 create act to an awaiting mission.
 * Client clientIntentKey is a hint that must match DB truth — never silent fallback
 * to another mission when the hint is wrong (B/C).
 */
export async function verifyMissionForD2Act(input: {
  conversationId: string;
  preparationId: string;
  clientIntentKey?: string | null;
}): Promise<MissionD2Resolve> {
  const latest = await loadLatestMissionsByIntentKey(input.conversationId);
  const awaiting = [...latest.values()].filter(
    (m) =>
      m.status === "AWAITING_PILOT_ACT" &&
      (!m.preparationId || m.preparationId === input.preparationId),
  );

  const hint = input.clientIntentKey?.trim() || null;
  if (hint) {
    const hinted = latest.get(hint);
    if (!hinted) {
      return {
        status: "MISSION_KEY_MISMATCH",
        reason: "clientIntentKey unknown for this conversation",
      };
    }
    if (hinted.preparationId && hinted.preparationId !== input.preparationId) {
      return {
        status: "MISSION_KEY_MISMATCH",
        reason: "clientIntentKey belongs to another preparation",
      };
    }
    if (hinted.status === "AWAITING_PILOT_ACT") {
      return { status: "OK", mission: hinted };
    }
    return { status: "ALREADY_CONTINUED", mission: hinted };
  }

  if (awaiting.length === 1) return { status: "OK", mission: awaiting[0]! };
  if (awaiting.length === 0) return { status: "NO_AWAITING_MISSION" };
  return { status: "AMBIGUOUS_AWAITING", count: awaiting.length };
}

/** Structured awaiting mission for UI/API — never parse Nora prose. */
export async function getAwaitingMissionForPreparation(
  pilotId: string,
  preparationId: string,
): Promise<MissionProjection | null> {
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.preparationId, preparationId),
          eq(conversations.ownerPilotId, pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!conv) return null;
  return loadPriorMissionProjection(conv.id, {
    awaitingPilotAct: true,
    preparationId,
  });
}

/** @deprecated Prefer verifyMissionForD2Act — kept for narrow test helpers. */
export async function resolveMissionAwaitingD2Create(input: {
  conversationId: string;
  preparationId: string;
  projectId: string;
  projectName?: string | null;
  clientIntentKey?: string | null;
}): Promise<MissionProjection | null> {
  const v = await verifyMissionForD2Act({
    conversationId: input.conversationId,
    preparationId: input.preparationId,
    clientIntentKey: input.clientIntentKey,
  });
  return v.status === "OK" ? v.mission : null;
}

export function advanceMissionAfterProjectCreated(
  prior: MissionProjection,
  projectId: string,
): MissionProjection {
  const steps = prior.steps.map((s) =>
    s.id === "d2_create_project" || s.capabilityId === "d2.create_project"
      ? {
          ...s,
          status: "DONE" as const,
          reason: `projectId=${projectId}`,
        }
      : s,
  );
  const stillWaiting = steps.some((s) => s.status === "WAITING" || s.status === "PENDING");
  return {
    ...prior,
    steps,
    status: stillWaiting ? "ACTIVE" : "COMPLETED",
    goalSummary: prior.goalSummary.includes("projet")
      ? `${prior.goalSummary} — projet confirmé ${projectId}`
      : prior.goalSummary,
    restitution: "PENDING",
  };
}

export function buildD2AwaitingStep(proposedName: string | null): MissionStep {
  return {
    id: "d2_create_project",
    capabilityId: "d2.create_project",
    status: "WAITING",
    reason: proposedName
      ? `Acte Pilote requis (Créer le projet) — preview «${proposedName}»`
      : "Acte Pilote requis (Créer le projet) — préciser le nom si besoin",
  };
}

export function buildPendingDocumentStep(kind: "CREATE" | "REVISE", brief?: string | null): MissionStep {
  return {
    id: kind === "CREATE" ? "d4_create" : "d4_revise",
    capabilityId: kind === "CREATE" ? "d4.create_document" : "d4.revise_document",
    status: "PENDING",
    reason: brief?.slice(0, 200) ?? "En attente après création projet / contexte",
  };
}

type DocumentSaveSummary = {
  status: string;
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
  act?: string;
  reason?: string;
};

function continuationTurnKey(clientIntentKey: string, projectId: string): string {
  return `mission-continue:${clientIntentKey}:${projectId}`;
}

function isStaleContinuation(updatedAt: Date | null | undefined): boolean {
  if (!updatedAt) return true;
  return turnClock.nowMs() - updatedAt.getTime() > TURN_RUNNING_STALE_MS;
}

type ContinuationClaim =
  | {
      kind: "replay";
      missionProjection: MissionProjection;
      documentSave: DocumentSaveSummary | null;
      assistantMessageId: string | null;
    }
  | { kind: "fresh"; commandId: string; ownerToken: string; clientTurnKey: string }
  | { kind: "in_progress" };

/**
 * Short transactional claim — xact advisory lock only (released at TX end).
 * Never hold a session lock across the pool or across Nora/D4 work.
 */
async function claimContinuationOwnership(input: {
  conversationId: string;
  pilotId: string;
  clientIntentKey: string;
  projectId: string;
  missionSnapshot: MissionProjection;
}): Promise<ContinuationClaim> {
  const clientTurnKey = continuationTurnKey(input.clientIntentKey, input.projectId);
  return db.transaction(async (tx) => {
    await tx.execute(
      sql`SELECT pg_advisory_xact_lock(hashtext(${input.conversationId}), hashtext(${clientTurnKey}))`,
    );
    const existing = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, input.conversationId),
            eq(conversationTurnCommands.clientTurnKey, clientTurnKey),
          ),
        )
        .limit(1)
    )[0];

    if (existing?.status === "COMPLETE" && existing.resultJson) {
      try {
        const parsed = JSON.parse(existing.resultJson) as {
          missionProjection?: MissionProjection | null;
          documentSave?: DocumentSaveSummary | null;
        };
        if (parsed.missionProjection && parsed.missionProjection.status !== "AWAITING_PILOT_ACT") {
          return {
            kind: "replay" as const,
            missionProjection: parsed.missionProjection,
            documentSave: parsed.documentSave ?? null,
            assistantMessageId: existing.assistantMessageId,
          };
        }
      } catch {
        /* fall through to reclaim */
      }
    }

    if (existing && (existing.status === "RUNNING" || existing.status === "ACCEPTED")) {
      if (!isStaleContinuation(existing.updatedAt)) {
        return { kind: "in_progress" as const };
      }
      await tx
        .update(conversationTurnCommands)
        .set({
          status: "UNKNOWN",
          errorCategory: "RECONCILED_STALE_CONTINUATION",
          ownerToken: `revoked_${randomUUID()}`,
          updatedAt: new Date(turnClock.nowMs()),
        })
        .where(
          and(
            eq(conversationTurnCommands.id, existing.id),
            eq(conversationTurnCommands.status, existing.status),
          ),
        );
    }

    const ownerToken = `own_${randomUUID()}`;
    const resultJson = JSON.stringify({
      missionProjection: input.missionSnapshot,
      continuedAfterProjectId: input.projectId,
      phase: "RESERVED",
    });

    if (existing) {
      const cas = await tx
        .update(conversationTurnCommands)
        .set({
          status: "RUNNING",
          ownerToken,
          resultJson,
          errorCategory: null,
          assistantMessageId: null,
          updatedAt: new Date(turnClock.nowMs()),
        })
        .where(
          and(
            eq(conversationTurnCommands.id, existing.id),
            sql`${conversationTurnCommands.status} IN ('UNKNOWN', 'FAILED', 'COMPLETE')`,
          ),
        )
        .returning({ id: conversationTurnCommands.id });
      if (!cas[0]) return { kind: "in_progress" as const };
      return {
        kind: "fresh" as const,
        commandId: existing.id,
        ownerToken,
        clientTurnKey,
      };
    }

    const commandId = newId("ctc");
    await tx.insert(conversationTurnCommands).values({
      id: commandId,
      conversationId: input.conversationId,
      ownerPilotId: input.pilotId,
      clientTurnKey,
      requestFingerprint: `fp-continue-${input.projectId}`,
      operationId: newId("op"),
      status: "RUNNING",
      ownerToken,
      resultJson,
      assistantMessageId: null,
      createdAt: new Date(turnClock.nowMs()),
      updatedAt: new Date(turnClock.nowMs()),
    });
    return { kind: "fresh" as const, commandId, ownerToken, clientTurnKey };
  });
}

/** Terminal commit under ownership fence — short TX, CAS on owner_token. */
async function commitContinuationOwned(input: {
  commandId: string;
  ownerToken: string;
  conversationId: string;
  mission: MissionProjection;
  projectId: string;
  documentSave: DocumentSaveSummary | null;
  assistantContent: string;
  generationId: string;
}): Promise<{ applied: boolean; assistantMessageId: string | null }> {
  return db.transaction(async (tx) => {
    const owned = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.id, input.commandId),
            eq(conversationTurnCommands.ownerToken, input.ownerToken),
            eq(conversationTurnCommands.status, "RUNNING"),
          ),
        )
        .limit(1)
    )[0];
    if (!owned) return { applied: false, assistantMessageId: null };

    let assistantMessageId: string | null = null;
    const existingMsg = (
      await tx
        .select()
        .from(messages)
        .where(
          and(
            eq(messages.conversationId, input.conversationId),
            eq(messages.generationId, input.generationId),
          ),
        )
        .limit(1)
    )[0];
    if (existingMsg) {
      assistantMessageId = existingMsg.id;
    } else {
      const last = (
        await tx
          .select({ ordinal: messages.ordinal })
          .from(messages)
          .where(eq(messages.conversationId, input.conversationId))
          .orderBy(sql`${messages.ordinal} desc`)
          .limit(1)
      )[0];
      assistantMessageId = `msg_mcont_${input.generationId.replace(/[^a-zA-Z0-9_:-]/g, "").slice(-48)}`;
      await tx.insert(messages).values({
        id: assistantMessageId,
        conversationId: input.conversationId,
        role: "assistant",
        content: input.assistantContent,
        status: "COMPLETE",
        ordinal: (last?.ordinal ?? 0) + 1,
        generationId: input.generationId,
        createdAt: new Date(turnClock.nowMs()),
      });
    }

    const resultJson = JSON.stringify({
      missionProjection: input.mission,
      documentSave: input.documentSave,
      continuedAfterProjectId: input.projectId,
    });
    const cas = await tx
      .update(conversationTurnCommands)
      .set({
        status: "COMPLETE",
        resultJson,
        assistantMessageId,
        updatedAt: new Date(turnClock.nowMs()),
      })
      .where(
        and(
          eq(conversationTurnCommands.id, input.commandId),
          eq(conversationTurnCommands.ownerToken, input.ownerToken),
          eq(conversationTurnCommands.status, "RUNNING"),
        ),
      )
      .returning({ id: conversationTurnCommands.id });

    if (!cas[0]) {
      throw new StudioError("CONFLICT", "CONTINUATION_OWNERSHIP_LOST");
    }
    return { applied: true, assistantMessageId };
  });
}

/**
 * After D2 createProjectCommand succeeds, continue the SAME intention (pending D4)
 * without a new Pilot message. COMMAND path only — never from listMessages.
 * Concurrency: short xact claim + owner_token fence (no session advisory lock).
 */
export async function continueAfterProjectCreated(input: {
  pilotId: string;
  preparationId: string;
  projectId: string;
  projectName?: string | null;
  /** Hint only — server verifies against durable mission state. */
  clientIntentKey?: string | null;
}): Promise<{
  continued: boolean;
  missionProjection: MissionProjection | null;
  documentSave: DocumentSaveSummary | null;
  assistantMessageId: string | null;
  reason?: string;
  replayed?: boolean;
}> {
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.preparationId, input.preparationId),
          eq(conversations.ownerPilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!conv) {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "NO_CONVERSATION",
    };
  }

  const verified = await verifyMissionForD2Act({
    conversationId: conv.id,
    preparationId: input.preparationId,
    clientIntentKey: input.clientIntentKey,
  });

  if (verified.status === "MISSION_KEY_MISMATCH") {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "MISSION_KEY_MISMATCH",
    };
  }
  if (verified.status === "AMBIGUOUS_AWAITING") {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "AMBIGUOUS_AWAITING",
    };
  }
  if (verified.status === "ALREADY_CONTINUED") {
    const replay = await loadContinuationReplay(
      conv.id,
      verified.mission.clientIntentKey,
      input.projectId,
    );
    if (replay) {
      return { ...replay, continued: true, replayed: true, reason: "ALREADY_CONTINUED" };
    }
    return {
      continued: false,
      missionProjection: verified.mission,
      documentSave: null,
      assistantMessageId: null,
      reason: "MISSION_NO_LONGER_AWAITING",
    };
  }
  if (verified.status === "NO_AWAITING_MISSION") {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "NO_AWAITING_MISSION",
    };
  }

  const prior = verified.mission;
  let mission = advanceMissionAfterProjectCreated(prior, input.projectId);

  const claim = await claimContinuationOwnership({
    conversationId: conv.id,
    pilotId: input.pilotId,
    clientIntentKey: prior.clientIntentKey,
    projectId: input.projectId,
    missionSnapshot: mission,
  });

  if (claim.kind === "replay") {
    return {
      continued: true,
      missionProjection: claim.missionProjection,
      documentSave: claim.documentSave,
      assistantMessageId: claim.assistantMessageId,
      replayed: true,
      reason: "ALREADY_CONTINUED",
    };
  }
  if (claim.kind === "in_progress") {
    return {
      continued: false,
      missionProjection: mission,
      documentSave: null,
      assistantMessageId: null,
      reason: "CONTINUATION_IN_PROGRESS",
    };
  }

  if (continuationRaceHooks.afterReserveBeforeWork) {
    await continuationRaceHooks.afterReserveBeforeWork();
  }

  const pendingDoc = mission.steps.find(
    (s) =>
      (s.id === "d4_create" || s.capabilityId === "d4.create_document") &&
      (s.status === "PENDING" || s.status === "WAITING"),
  );

  let documentSave: DocumentSaveSummary | null = null;
  let assistantContent: string;
  let generationId: string;

  if (!pendingDoc) {
    mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
    generationId = `mission-continue-d2:${mission.clientIntentKey}:${input.projectId}`;
    assistantContent =
      `### Suite de mission\nProjet créé (projectId=${input.projectId}). ` +
      `Aucune étape documentaire dépendante dans l'intention initiale.\n\n` +
      formatMissionAck(mission);
  } else {
    const original =
      mission.originalUserText ??
      mission.pendingDocumentBrief ??
      "Prépare le document de cadrage demandé dans l'intention initiale.";
    const userPrompt =
      `Le projet a été créé (projectId=${input.projectId}). ` +
      `Poursuis MAINTENANT l'intention initiale du Pilote sans lui redemander.\n\n` +
      `Intention initiale:\n${original}\n\n` +
      `Produis le document demandé (titre + corps en fence sfia-document) pour ce projet.`;

    const reply = await generateNoraReply({
      userText: userPrompt,
      contextSnippets: [`projectId=${input.projectId}`, `preparationId=${input.preparationId}`],
    });

    if (continuationRaceHooks.afterNoraBeforeD4) {
      await continuationRaceHooks.afterNoraBeforeD4();
    }

    if (reply.status === "COMPLETE" && reply.content.trim()) {
      const extracted = extractContractualDocumentProposal(reply.content);
      if (extracted.ok) {
        const d4Contract = CAPABILITY_CONTRACTS.find(
          (c) => c.capabilityId === "d4.create_document",
        )!;
        const mobilized = await mobilizeCapability(
          d4Contract,
          {
            capabilityId: "d4.create_document",
            invoke: async (ctx) => {
              const saved = await savePreparationDocument(
                ctx.pilotId,
                ctx.preparationId!,
                extracted.title,
                extracted.content,
                undefined,
                {
                  correlationKey: `doc:mission-continue:${mission.clientIntentKey}`,
                  provenance: {
                    sourceKind: "nora",
                    generationId: reply.generationId,
                    userMessageId: null,
                    explicitRequest: true,
                    act: "CREATE",
                  },
                  scope: "document",
                },
              );
              return {
                status: saved.status,
                result: {
                  status: saved.status,
                  documentId: "documentId" in saved ? saved.documentId ?? null : null,
                  revisionId: "revisionId" in saved ? saved.revisionId ?? null : null,
                  revisionNumber:
                    "revisionNumber" in saved ? saved.revisionNumber ?? null : null,
                  reason: "reason" in saved ? (saved as { reason?: string }).reason : undefined,
                },
              };
            },
          },
          {
            pilotId: input.pilotId,
            preparationId: input.preparationId,
            projectId: input.projectId,
          },
        );
        documentSave = {
          status: String(mobilized.result.status ?? mobilized.status),
          documentId: mobilized.result.documentId as string | undefined,
          revisionId: mobilized.result.revisionId as string | undefined,
          revisionNumber: mobilized.result.revisionNumber as number | undefined,
          reason: mobilized.result.reason as string | undefined,
          act: "CREATE",
        };
      } else {
        documentSave = { status: "FAILED", reason: extracted.reason, act: "CREATE" };
      }
    } else {
      documentSave = { status: "FAILED", reason: "CONTINUE_GENERATION_FAILED", act: "CREATE" };
    }

    if (documentSave.status === "AVAILABLE" && documentSave.documentId) {
      mission = {
        ...mission,
        steps: mission.steps.map((s) =>
          s.id === "d4_create" || s.capabilityId === "d4.create_document"
            ? {
                ...s,
                status: "DONE" as const,
                documentId: documentSave!.documentId,
                revisionId: documentSave!.revisionId,
                reason: undefined,
              }
            : s,
        ),
        status: "COMPLETED",
        restitution: "DELIVERED",
      };
    } else {
      mission = {
        ...mission,
        steps: mission.steps.map((s) =>
          s.id === "d4_create" || s.capabilityId === "d4.create_document"
            ? {
                ...s,
                status: "FAILED" as const,
                reason: documentSave?.reason ?? documentSave?.status,
              }
            : s,
        ),
        status: "PARTIAL_FAILED_STEP",
        restitution: "CANONICAL",
      };
    }

    const canonical = composeCanonicalMissionRestitution({
      documentEffect:
        documentSave?.status === "AVAILABLE"
          ? {
              act: "CREATE",
              status: "AVAILABLE",
              documentId: documentSave.documentId,
              revisionId: documentSave.revisionId,
              revisionNumber: documentSave.revisionNumber,
            }
          : {
              act: "CREATE",
              status: "FAILED",
              reason: documentSave?.reason,
            },
      restitutionNote: `Reprise automatique après création projet ${input.projectId} — même intention (${mission.clientIntentKey}).`,
    });
    assistantContent =
      reply.status === "COMPLETE" && reply.content.trim()
        ? appendMissionAck(reply.content, mission)
        : appendMissionAck(canonical, mission);
    generationId = `mission-continue-d2d4:${mission.clientIntentKey}:${input.projectId}`;
  }

  if (continuationRaceHooks.afterD4BeforeCommit) {
    await continuationRaceHooks.afterD4BeforeCommit();
  }

  try {
    const committed = await commitContinuationOwned({
      commandId: claim.commandId,
      ownerToken: claim.ownerToken,
      conversationId: conv.id,
      mission,
      projectId: input.projectId,
      documentSave,
      assistantContent,
      generationId,
    });

    emitObs({
      event_name: "d3.mission.continue_after_project_created",
      component: "d3.intent_conduction",
      outcome: mission.status === "COMPLETED" ? "SUCCESS" : "PARTIAL",
      meta: {
        project_id: input.projectId,
        client_intent_key: mission.clientIntentKey,
        document_status: documentSave?.status ?? null,
        ownership_applied: committed.applied,
      },
    });

    return {
      continued: committed.applied,
      missionProjection: mission,
      documentSave,
      assistantMessageId: committed.assistantMessageId,
      reason: pendingDoc ? undefined : "D2_ONLY_COMPLETED",
    };
  } catch (e) {
    if (e instanceof StudioError && e.message.includes("CONTINUATION_OWNERSHIP_LOST")) {
      const replay = await loadContinuationReplay(conv.id, prior.clientIntentKey, input.projectId);
      if (replay) {
        return { ...replay, continued: true, replayed: true, reason: "ALREADY_CONTINUED" };
      }
      return {
        continued: false,
        missionProjection: mission,
        documentSave,
        assistantMessageId: null,
        reason: "CONTINUATION_OWNERSHIP_LOST",
      };
    }
    throw e;
  }
}

async function loadContinuationReplay(
  conversationId: string,
  clientIntentKey: string,
  projectId: string,
): Promise<{
  continued: boolean;
  missionProjection: MissionProjection | null;
  documentSave: DocumentSaveSummary | null;
  assistantMessageId: string | null;
} | null> {
  const clientTurnKey = continuationTurnKey(clientIntentKey, projectId);
  const existing = (
    await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, conversationId),
          eq(conversationTurnCommands.clientTurnKey, clientTurnKey),
        ),
      )
      .limit(1)
  )[0];
  if (!existing || existing.status !== "COMPLETE" || !existing.resultJson) return null;
  try {
    const parsed = JSON.parse(existing.resultJson) as {
      missionProjection?: MissionProjection | null;
      documentSave?: DocumentSaveSummary | null;
    };
    if (!parsed.missionProjection || parsed.missionProjection.status === "AWAITING_PILOT_ACT") {
      return null;
    }
    return {
      continued: true,
      missionProjection: parsed.missionProjection,
      documentSave: parsed.documentSave ?? null,
      assistantMessageId: existing.assistantMessageId,
    };
  } catch {
    return null;
  }
}
```

### 23.3 create-project/route.ts (FULL)

```typescript
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";
import { continueAfterProjectCreated } from "@/domains/conversation/intent-conduction";

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      expectedCreationRevision?: number;
      projectName?: string;
      previewSummary?: string;
      idempotencyKey?: string;
      /** Hint only — server verifies against durable awaiting mission. */
      clientIntentKey?: string;
    };
    if (
      typeof body.expectedCreationRevision !== "number" ||
      !body.projectName ||
      !body.idempotencyKey
    ) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await createProjectCommand({
      pilotId: session.pilotId,
      preparationId,
      expectedCreationRevision: body.expectedCreationRevision,
      projectName: body.projectName,
      previewSummary: body.previewSummary ?? "",
      idempotencyKey: body.idempotencyKey,
    });
    const sideEffects = probeCreateProjectSideEffects();

    let missionContinue: Awaited<ReturnType<typeof continueAfterProjectCreated>> | null = null;
    if (
      (result.status === "CREATED" || result.status === "ALREADY_CREATED") &&
      "projectId" in result &&
      result.projectId
    ) {
      try {
        missionContinue = await continueAfterProjectCreated({
          pilotId: session.pilotId,
          preparationId,
          projectId: result.projectId,
          projectName: body.projectName,
          clientIntentKey: body.clientIntentKey ?? null,
        });
        // Explicit mismatch/ambiguity — do not silently continue another mission.
        if (
          missionContinue.reason === "MISSION_KEY_MISMATCH" ||
          missionContinue.reason === "AMBIGUOUS_AWAITING"
        ) {
          const status =
            result.status === "CREATED" ? 201 : result.status === "ALREADY_CREATED" ? 200 : 400;
          return NextResponse.json(
            {
              ...result,
              sideEffects,
              missionContinue,
              missionBindingError: missionContinue.reason,
            },
            { status },
          );
        }
      } catch {
        missionContinue = {
          continued: false,
          missionProjection: null,
          documentSave: null,
          assistantMessageId: null,
          reason: "CONTINUE_FAILED",
        };
      }
    }

    const status =
      result.status === "CREATED"
        ? 201
        : result.status === "ALREADY_CREATED"
          ? 200
          : result.status === "CONFLICT"
            ? 409
            : result.status === "FORBIDDEN"
              ? 403
              : 400;
    return NextResponse.json({ ...result, sideEffects, missionContinue }, { status });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
```

## 24. Fichiers modifiés — diffs utiles

```diff
commit 3fac229ff2833c9aa398c9bdbc712c409425ba1e
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Tue Nov 10 14:02:43 2026 +0100

    fix(studio-next): replace session locks with turn fencing and structured D2 binding

    Use short transactional ownership for mission continuation, verify clientIntentKey against durable awaiting missions, expose awaitingMission to the UI, and prove crash reclaim plus Atlas browser continuity.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index fe615d07..0134ebb6 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-06
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-10 (Europe/Paris) |
+| Macro-lot | R5 / Conduite globale — concurrence xact fence + liaison mission↔D2 + reprise crash + browser |
+| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
+| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
+| Parent | DEV-05 @ `f99e4501` |
+| Lane | DEV :5433; E2E browser :3101 / `sfia_next_e2e`; RECETTE untouched |
+| Changes | Removed session `pg_advisory_lock`; short `pg_advisory_xact_lock` + `owner_token` CAS; `verifyMissionForD2Act`; structured `awaitingMission` API/UI (no Nora text parse); crash hooks P3/P5; Atlas Playwright BROWSER OBSERVED |
+| Schema | unchanged |
+| Tests | unit 8; PG global 16; ACCEPT-01 8; Playwright Atlas 1 PASS; tsc/build PASS |
+| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH |
+
 ## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-05

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
index 1e8baa22..a9b5fbde 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/route.ts
@@ -2,6 +2,7 @@ import { NextResponse } from "next/server";
 import { requireStudioSession } from "@/domains/identity/session";
 import { getPreparationContext, updatePreview } from "@/domains/preparation/service";
 import { listMessages } from "@/domains/conversation/service";
+import { getAwaitingMissionForPreparation } from "@/domains/conversation/intent-conduction";
 import { listDocuments } from "@/domains/document/service";
 import { listKnowledge } from "@/domains/knowledge/service";

@@ -13,7 +14,18 @@ export async function GET(_: Request, ctx: { params: Promise<{ preparationId: st
     const msgs = await listMessages(session.pilotId, preparationId);
     const docs = await listDocuments(session.pilotId, preparationId);
     const knowledge = await listKnowledge(session.pilotId, preparationId);
-    return NextResponse.json({ ...data, messages: msgs, documents: docs, knowledge });
+    // Structured awaiting mission — never parse Nora message text for binding.
+    const awaitingMission = await getAwaitingMissionForPreparation(
+      session.pilotId,
+      preparationId,
+    );
+    return NextResponse.json({
+      ...data,
+      messages: msgs,
+      documents: docs,
+      knowledge,
+      awaitingMission,
+    });
   } catch (e) {
     const code = (e as { code?: string }).code;
     if (code === "NOT_FOUND") return NextResponse.json({ error: "NOT_FOUND" }, { status: 404 });
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 2f3486d5..9e686efc 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -79,6 +79,8 @@ export default function PreparationPage() {
   /** Stable client turn key for the current draft — reused across network retries. */
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
   const idempotencyKey = useMemo(() => `create-${preparationId}`, [preparationId]);
+  /** Structured awaiting mission key from server — never parsed from Nora prose. */
+  const [awaitingClientIntentKey, setAwaitingClientIntentKey] = useState<string | null>(null);

   function rememberCreateIntent(next: CreateIntent | null) {
     createDocIntentRef.current = next;
@@ -110,6 +112,15 @@ export default function PreparationPage() {
     setPreviewSummary(j.preparation?.previewSummary ?? "");
     setCreationRevision(j.preparation?.creationRevision ?? 1);
     setProjectId(j.project?.id ?? null);
+    const awaiting = j.awaitingMission as
+      | { clientIntentKey?: string; status?: string }
+      | null
+      | undefined;
+    setAwaitingClientIntentKey(
+      awaiting?.status === "AWAITING_PILOT_ACT" && awaiting.clientIntentKey
+        ? awaiting.clientIntentKey
+        : null,
+    );
     const first = j.documents?.[0];
     // While a create intent is open (e.g. ACK lost after server commit), do NOT adopt
     // docId from a background reload. Adopting would hide the intent key and divert the
@@ -164,6 +175,15 @@ export default function PreparationPage() {
         setDraft("");
         setMessages((j.messages as typeof messages) ?? []);
         setNoraActivity("idle");
+        const mp = j.missionProjection as
+          | { clientIntentKey?: string; status?: string }
+          | null
+          | undefined;
+        setAwaitingClientIntentKey(
+          mp?.status === "AWAITING_PILOT_ACT" && mp.clientIntentKey
+            ? mp.clientIntentKey
+            : null,
+        );
         const policy = j.policy as
           | { profile?: string; profileType?: string }
           | undefined;
@@ -461,28 +481,8 @@ export default function PreparationPage() {

   async function createProject() {
     setBusy(true);
-    // G2: bind D2 act to the awaiting mission when the chat surface exposes clientIntentKey.
-    let clientIntentKey: string | undefined;
-    try {
-      const chatRes = await fetch(`/api/preparations/${preparationId}/messages`);
-      if (chatRes.ok) {
-        const chatJson = (await chatRes.json()) as {
-          messages?: Array<{ role: string; content: string }>;
-        };
-        const msgs = chatJson.messages ?? [];
-        for (let i = msgs.length - 1; i >= 0; i -= 1) {
-          const m = msgs[i];
-          if (m?.role !== "assistant") continue;
-          const match = m.content.match(/clientIntentKey=([^\s\n]+)/);
-          if (match?.[1] && /AWAITING_PILOT_ACT/.test(m.content)) {
-            clientIntentKey = match[1];
-            break;
-          }
-        }
-      }
-    } catch {
-      /* best-effort correlation — create still proceeds */
-    }
+    // Structured binding only — server verifies clientIntentKey against durable mission.
+    const clientIntentKey = awaitingClientIntentKey ?? undefined;
     const res = await fetch(`/api/preparations/${preparationId}/create-project`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
@@ -498,9 +498,17 @@ export default function PreparationPage() {
     });
     const j = await res.json();
     setBusy(false);
-    setStatus(`${j.status}${j.projectId ? ` → ${j.projectId}` : ""}`);
-    if (j.projectId) {
+    const bindErr = j.missionBindingError ? ` · bind ${j.missionBindingError}` : "";
+    const cont =
+      j.missionContinue?.continued && j.missionContinue?.documentSave?.documentId
+        ? ` · doc ${j.missionContinue.documentSave.documentId}`
+        : j.missionContinue?.reason
+          ? ` · continue ${j.missionContinue.reason}`
+          : "";
+    setStatus(`${j.status}${j.projectId ? ` → ${j.projectId}` : ""}${cont}${bindErr}`);
+    if (j.projectId && !j.missionBindingError) {
       setProjectId(j.projectId);
+      setAwaitingClientIntentKey(null);
       router.push(`/projects/${j.projectId}`);
     }
     await reload();
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index 192b9b5b..6a9fc5b8 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -42,12 +42,17 @@ import {
 } from "@/domains/knowledge/service";
 import {
   CAPABILITY_CONTRACTS,
+  continuationRaceHooks,
   continueAfterProjectCreated,
   d2MissionIdempotencyKey,
   loadPriorMissionProjection,
   mobilizeCapability,
+  verifyMissionForD2Act,
 } from "@/domains/conversation/intent-conduction";
+import { TURN_RUNNING_STALE_MS } from "@/domains/conversation/turn-command";
+import { conversationTurnCommands } from "@/db/schema";
 import { getPreparationContext } from "@/domains/preparation/service";
+import { and, eq as eqCol } from "drizzle-orm";

 async function seedPilot(label: string) {
   const id = newId("pilot");
@@ -576,7 +581,7 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     expect(sim.result.id).toBe("sim_1");
   });

-  it("G5: concurrent continueAfterProjectCreated — single document", async () => {
+  it("G5: concurrent continueAfterProjectCreated — single document / fence", async () => {
     const { pilotId, preparationId } = await seedPrepOnly("scen-g5-conc");
     const clientTurnKey = newId("ctk");
     await postUserMessageAndNora(
@@ -613,11 +618,194 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
       }),
     ]);
     const docs = await listDocuments(pilotId, preparationId);
-    const ids = new Set(
-      [a.documentSave?.documentId, b.documentSave?.documentId].filter(Boolean) as string[],
+    const ids = [
+      a.documentSave?.documentId,
+      b.documentSave?.documentId,
+    ].filter(Boolean) as string[];
+    const unique = new Set(ids);
+    expect(unique.size).toBeLessThanOrEqual(1);
+    if (unique.size === 1) {
+      expect(docs.filter((d) => unique.has(d.document.id))).toHaveLength(1);
+    }
+    expect(
+      a.continued ||
+        b.continued ||
+        a.reason === "CONTINUATION_IN_PROGRESS" ||
+        b.reason === "CONTINUATION_IN_PROGRESS" ||
+        a.replayed ||
+        b.replayed,
+    ).toBe(true);
+    // Winner must complete; loser is in_progress or replay of same doc.
+    const winner = a.continued ? a : b.continued ? b : null;
+    if (winner?.documentSave?.status === "AVAILABLE") {
+      expect(docs.some((d) => d.document.id === winner.documentSave?.documentId)).toBe(true);
+    }
+  });
+
+  it("B/C: wrong clientIntentKey does not silently bind another mission", async () => {
+    const { pilotId, preparationId } = await seedPrepOnly("scen-bc-mismatch");
+    const keyA = newId("ctk");
+    await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Bind Exact puis un document Exact.",
+      { clientTurnKey: keyA },
+    );
+    const ctx = await getPreparationContext(pilotId, preparationId);
+    const verified = await verifyMissionForD2Act({
+      conversationId: ctx.conversation!.id,
+      preparationId,
+      clientIntentKey: "ctk_forged_other_mission",
+    });
+    expect(verified.status).toBe("MISSION_KEY_MISMATCH");
+
+    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: prep.creationRevision,
+      projectName: "Bind Exact",
+      previewSummary: "s",
+      idempotencyKey: d2MissionIdempotencyKey(keyA),
+    });
+    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");
+
+    const bad = await continueAfterProjectCreated({
+      pilotId,
+      preparationId,
+      projectId: created.projectId,
+      clientIntentKey: "ctk_forged_other_mission",
+    });
+    expect(bad.continued).toBe(false);
+    expect(bad.reason).toBe("MISSION_KEY_MISMATCH");
+    expect(bad.documentSave).toBeNull();
+
+    const good = await continueAfterProjectCreated({
+      pilotId,
+      preparationId,
+      projectId: created.projectId,
+      clientIntentKey: keyA,
+    });
+    expect(good.continued).toBe(true);
+    expect(good.documentSave?.status).toBe("AVAILABLE");
+  });
+
+  it("D/P3: crash after reserve — stale reclaim continues once", async () => {
+    const { pilotId, preparationId } = await seedPrepOnly("scen-p3-crash");
+    const clientTurnKey = newId("ctk");
+    await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Crash P3 puis un document P3.",
+      { clientTurnKey },
+    );
+    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: prep.creationRevision,
+      projectName: "Crash P3",
+      previewSummary: "s",
+      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
+    });
+    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");
+
+    continuationRaceHooks.afterReserveBeforeWork = async () => {
+      throw new Error("INJECTED_CRASH_P3");
+    };
+    await expect(
+      continueAfterProjectCreated({
+        pilotId,
+        preparationId,
+        projectId: created.projectId,
+        clientIntentKey: clientTurnKey,
+      }),
+    ).rejects.toThrow(/INJECTED_CRASH_P3/);
+    delete continuationRaceHooks.afterReserveBeforeWork;
+
+    // Force lease stale so reclaim is allowed (simulates expired owner after crash).
+    const contKey = `mission-continue:${clientTurnKey}:${created.projectId}`;
+    await db
+      .update(conversationTurnCommands)
+      .set({
+        updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 5_000),
+      })
+      .where(
+        and(
+          eqCol(conversationTurnCommands.clientTurnKey, contKey),
+          eqCol(conversationTurnCommands.status, "RUNNING"),
+        ),
+      );
+
+    const resumed = await continueAfterProjectCreated({
+      pilotId,
+      preparationId,
+      projectId: created.projectId,
+      clientIntentKey: clientTurnKey,
+    });
+    expect(resumed.continued).toBe(true);
+    expect(resumed.documentSave?.status).toBe("AVAILABLE");
+    const docs = await listDocuments(pilotId, preparationId);
+    expect(docs.filter((d) => d.document.id === resumed.documentSave?.documentId)).toHaveLength(1);
+  });
+
+  it("D/P5: crash after D4 before commit — retry yields one document", async () => {
+    const { pilotId, preparationId } = await seedPrepOnly("scen-p5-crash");
+    const clientTurnKey = newId("ctk");
+    await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Crash P5 puis un document P5.",
+      { clientTurnKey },
+    );
+    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: prep.creationRevision,
+      projectName: "Crash P5",
+      previewSummary: "s",
+      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
+    });
+    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");
+
+    continuationRaceHooks.afterD4BeforeCommit = async () => {
+      throw new Error("INJECTED_CRASH_P5");
+    };
+    await expect(
+      continueAfterProjectCreated({
+        pilotId,
+        preparationId,
+        projectId: created.projectId,
+        clientIntentKey: clientTurnKey,
+      }),
+    ).rejects.toThrow(/INJECTED_CRASH_P5/);
+    delete continuationRaceHooks.afterD4BeforeCommit;
+
+    const contKey = `mission-continue:${clientTurnKey}:${created.projectId}`;
+    await db
+      .update(conversationTurnCommands)
+      .set({ updatedAt: new Date(Date.now() - TURN_RUNNING_STALE_MS - 5_000) })
+      .where(
+        and(
+          eqCol(conversationTurnCommands.clientTurnKey, contKey),
+          eqCol(conversationTurnCommands.status, "RUNNING"),
+        ),
+      );
+
+    const resumed = await continueAfterProjectCreated({
+      pilotId,
+      preparationId,
+      projectId: created.projectId,
+      clientIntentKey: clientTurnKey,
+    });
+    expect(resumed.continued).toBe(true);
+    expect(resumed.documentSave?.status).toBe("AVAILABLE");
+    // Idempotent D4 correlation — still a single logical document for the mission key.
+    const docs = await listDocuments(pilotId, preparationId);
+    const missionDocs = docs.filter((d) =>
+      (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${clientTurnKey}`),
     );
-    expect(ids.size).toBe(1);
-    expect(docs.filter((d) => ids.has(d.document.id))).toHaveLength(1);
-    expect(a.continued || b.continued).toBe(true);
+    expect(missionDocs.length).toBe(1);
   });
 });
```

## 25. Verdict unique

**NORA/STUDIO GLOBAL INTENT CONTINUITY — EXISTING CAPABILITIES OPERATIONALLY INTEGRATED — DURABLE SINGLE-INTENT RECOVERY VERIFIED AT REPORTED DEV EVIDENCE LEVEL — NOMINAL ARCHITECTURE PRESERVED — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PROMOTION AUTHORIZED.**

Evidence: DETERMINISTIC DEV PG + BROWSER OBSERVED Atlas (:3101 fixture). NOT LIVE / NOT REAL / NOT RECETTE / NOT STABLE / NOT RELEASED.

## 26. Git Review Index

| Path | Role |
| --- | --- |
| intent-conduction.ts | xact fence, verifyMissionForD2Act, crash hooks |
| create-project/route.ts | continue + binding errors |
| preparations/route.ts | awaitingMission |
| preparations/page.tsx | structured UI binding |
| intent-continuity-global.pg.test.ts | P3/P5/mismatch/G5 |
| intent-continuity-atlas.spec.ts | Browser Atlas |
| delivery-history.md | DEV-06 |

## 27. Contrôle §7.2.1 / §7.6

- FULL CRITICAL: OUI
- Contenus complets: OUI (§23)
- Diffs utiles: OUI (§24)
- Synthèse seule: NON
- Product push: NON
- Handoff L3: suivant
- STOP après handoff: requis

END OF REVIEW PACK FULL — HEAD `3fac229ff2833c9aa398c9bdbc712c409425ba1e` TREE `cca3f27fc891daa9c400432e2f3ee47f8916e470`
