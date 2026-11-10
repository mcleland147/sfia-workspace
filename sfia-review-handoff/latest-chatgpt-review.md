# SFIA STUDIO NEXT — R5 CYCLE 8 — REVIEW PACK FULL (CRITICAL)

Profil: CRITICAL | Pack: FULL mono-cycle | Date: 2026-11-10
Delivery: DEV-05 — G1–G7 fiabilisation | Product push: INTERDIT

---

## 1. Git Truth Check et environnement

| Item | Value |
| --- | --- |
| Branch | `feat/next-nora-intent-continuity-20261110` |
| HEAD FINAL | `f99e4501d054b97c5a690f913201efde48e23bd8` |
| TREE FINAL | `7a63b449f2a5bf957d8e8859ec66798cfa13fbd2` |
| Parent | `5c6b0cee2211d5418db6100b0302ef0cfa0ee8f3` |
| Base | `d7f1507a` / tree `3e9e1086` (fix WT preserved) |
| Prior handoff | `783f4074` blob `9bb00826` |
| Lane | DEV :5433 sfia_next_dev; RECETTE :5434 present but untouched |
| SDK | @openai/agents ^0.21.0 |
| Product push | NONE (no upstream on feat/) |

```
f99e4501 fix(studio-next): harden durable mission identity, D2 correlation, and recovery
5c6b0cee feat(studio-next): finalize single-intent D2→D4 continuity without second Pilot message
12e26e32 feat(studio-next): global intent continuity across D2/D4 and common D3
f42cb2f5 fix(studio-next): gate Nora mission resume and harden continuity
cf5bac70 fix(studio-next): reflect missionResume after authorize and prove replay
b0e23c46 feat(studio-next): implement ACCEPT-01 mission continuity in D3 nominal path
```

## 2. Sources Git et décisions

- Cadrage Morris: `conduite-intentions-continuite-cognitive-nora-studio.md` blob `2322644a…` VALIDATED CONTENT
- ENV-01 / product-versioning VALIDATED on main
- A3: no generic action engine; single D3 entry preserved

## 3. Intention globale Morris

Conduire une intention Pilote de bout en bout via capacités implémentées, sans reconstruction manuelle, avec actes humains protégés, reprise durable, et extensibilité réelle — preuves Atlas/ACCEPT-01 comme témoins, pas réduction.

## 4. État initial des capacités D1–D9

DEV-04 avait Atlas D2→D4, ACCEPT-01, D5 OPEN_CYCLE, D6 authorize, READ≠COMMAND. Gaps G1–G7 ouverts (awaiting sticky, weak D2 correlation, limit 40, descriptive contracts, concurrency, crash proofs, knowledge/browser).

## 5. Écarts résolus et non résolus

| Gap | Statut |
| --- | --- |
| G1 awaiting after continue | RESOLVED — latest-per-clientIntentKey |
| G2 D2↔intention correlation | RESOLVED — ownerActBinding + clientIntentKey on create |
| G3 limit 40 | RESOLVED — full conversation scan (limit optional diagnostic only) |
| G4 real owner mobilize | RESOLVED — mobilizeCapability on D2/D4 + continue uses D4 contract |
| G5 concurrency restitution | RESOLVED — pg_advisory_lock + RUNNING fence + generationId |
| G6 crash/replay | RESOLVED — S04/G5 tests; ALREADY_CONTINUED replay |
| G7 knowledge | PARTIAL — S07 acquis+provenance PASS; deep tool-read narrative LIMITED |
| G7 browser S14 | NOT PROVEN — Playwright installed; DEV :3100 not running |
| G7 STOP/révocation exhaustive | PARTIAL — relies on prior ML3 NR + S09 |

## 6. Conduite commune réellement implémentée

postUserMessageAndNora → qualify → AWAITING+ownerActBinding → create-project(+clientIntentKey) → continueAfterProjectCreated (lock/reserve/mobilize D4/persist COMPLETE) → restitution. Pas de second runner.

## 7. Corrélation durable des missions

`loadLatestMissionsByIntentKey` + `resolveMissionAwaitingD2Create` + `ownerActBinding` + `d2:mission:{clientIntentKey}` idempotency. Deux missions: S05 PASS.

## 8. Reprise et concurrence

Advisory lock; RUNNING continuation turn before side-effects; COMPLETE replay; G5 Promise.all single document PASS.

## 9. Mobilisation des propriétaires réels

G4/S12: mobilizeCapability wraps createProjectCommand + savePreparationDocument + future double — PASS.

## 10. D2→D4 Atlas et variantes

S03 Atlas PASS; S02 alone PASS; S04 recovery PASS; G1 awaiting null after continue PASS.

## 11. D4 connaissance et documents

S06 CREATE→REVISE PASS; S07 selectRelevantKnowledgeContext + chat WITHOUT induced CREATE PASS.

## 12. D5/D6 conduite et décisions

S08 OPEN_CYCLE PASS; S08b cycle+document same utterance PASS; S09 HD on authorize PASS.

## 13. D7/D8/D9 et ACCEPT-01

ACCEPT-01 PG 8 PASS (SCRIPTED).

## 14. Extensibilité effective

future.example_capability + real D2/D4 via same mobilizeCapability — not metadata-only.

## 15. Tests API et navigateur

create-project returns missionContinue + accepts clientIntentKey. UI page binds clientIntentKey from mission ack. S14 browser: NOT PROVEN (http://127.0.0.1:3100 → no server).

## 16. Résultats unitaires/PG et non-régression

| Preuve | Résultat |
| --- | --- |
| unit intent-conduction | 8 PASS |
| PG global | 13 PASS |
| PG ACCEPT-01 | 8 PASS |
| tsc / eslint / build | PASS (2 eslint warnings pre-existing page.tsx) |
| SHA | `f99e4501d054b97c5a690f913201efde48e23bd8` |

## 17. Fake/Real Qualification

| Frontière | Niveau |
| --- | --- |
| Nora | DETERMINISTIC PROVEN (fixture) — NOT LIVE |
| GitHub | SCRIPTED — NOT REAL |
| PostgreSQL DEV | DETERMINISTIC PROVEN |
| Browser | NOT PROVEN |
| End-to-end REAL | NOT PROVEN |

## 18. ENV-01 et versioning

DEV only. RECETTE BUILD 8vZjme4-KnnPkAqm_QxMz untouched. EVOL/MINOR CANDIDATE. NO RELEASE. Journal DEV-05.

## 19. Matrice exigences du cadrage → preuves

| EXIGENCE | CAPACITÉ | CHEMIN | RÉSULTAT | TEST | PREUVE | ÉCART | STATUT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Intention unique multi-étapes | D2+D4 | continueAfterProjectCreated | projet+doc sans 2e msg | S03 | PG PASS | — | PASS |
| Acte humain D2 | D2 | createProjectCommand | un projet | S02/S03 | PG | — | PASS |
| Corrélation durable | D3 | ownerActBinding+latest map | pas de sticky awaiting | G1/S05 | PG | — | PASS |
| Reprise interruption | D3 | lock+replay | 1 doc | S04/G5 | PG | — | PASS |
| Connaissance D4 | D4 | selectRelevantKnowledgeContext | acquis+provenance | S07 | PG | tool-deep LIMITED | PARTIAL |
| Pilotage D5 | D5 | applyConversationalAuthority | ACTIVE CADRAGE | S08/S08b | PG | — | PASS |
| Décision D6 | D6 | authorizePublication | HD créée | S09 | PG | — | PASS |
| Git ACCEPT-01 | D7/D9 | mission-continuity | SCRIPTED chain | ACCEPT-01 | PG | — | PASS |
| Extensibilité | D3 | mobilizeCapability | D2+D4+future | G4/S12 | PG | — | PASS |
| READ≠COMMAND | D3 | listMessages | no dispatch | S13 | PG | — | PASS |
| UX navigateur | D2/D3 | Playwright DEV | — | S14 | — | no :3100 | NOT PROVEN |
| Capacités D10–D14 | — | — | — | — | — | non implémenté | N/A |

## 20. Architecture nominale et absence de doublon

Une entrée D3; un runner Nora; pas de bus d'effets; pas de nouvelle table; owners inchangés; projection ≠ vérité métier.

## 21. Dette, limites et plan de sortie

- Browser Atlas E2E when DEV server available
- Deeper D4 tool-grounded knowledge narrative proofs
- Exhaustive STOP/révocation matrix re-run optional
Exit: no schema migration; rollback to 5c6b0cee

## 22. Rollback

`git reset --hard 5c6b0cee` on feat branch (local only).

## 23. Fichiers créés/modifiés — contenus complets

### 23.1 intent-conduction.ts (FULL @ HEAD)

```typescript
/**
 * D3 common intent conduction — domain-agnostic helpers.
 * NOT a parallel engine: no new authority, permissions, or effect journal.
 * Domain owners remain D2/D4/D5/D6/D7/D9; this module only qualifies,
 * projects refs, reconstructs prior mission state, and continues after
 * owner-confirmed acts when the original intention already required it.
 */
import { and, asc, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations, messages } from "@/db/schema";
import { savePreparationDocument } from "@/domains/document/service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { emitObs } from "@/lib/observability";
import { extractContractualDocumentProposal, qualifyDocumentAct } from "./document-act";
import { generateNoraReply } from "./nora-adapter";
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

/** Resolve the exact mission that awaited THIS D2 create (G2). */
export async function resolveMissionAwaitingD2Create(input: {
  conversationId: string;
  preparationId: string;
  projectId: string;
  projectName?: string | null;
  clientIntentKey?: string | null;
}): Promise<MissionProjection | null> {
  if (input.clientIntentKey) {
    const exact = await loadPriorMissionProjection(input.conversationId, {
      awaitingPilotAct: true,
      clientIntentKey: input.clientIntentKey,
      preparationId: input.preparationId,
    });
    if (exact) return exact;
  }

  const latest = await loadLatestMissionsByIntentKey(input.conversationId);
  const awaiting = [...latest.values()].filter(
    (m) =>
      m.status === "AWAITING_PILOT_ACT" &&
      (!m.preparationId || m.preparationId === input.preparationId) &&
      m.ownerActBinding?.kind === "D2_CREATE_PROJECT",
  );

  if (input.projectName) {
    const byName = awaiting.find(
      (m) =>
        m.proposedProjectName &&
        m.proposedProjectName.toLowerCase() === input.projectName!.trim().toLowerCase(),
    );
    if (byName) return byName;
  }

  if (awaiting.length === 1) return awaiting[0]!;
  if (awaiting.length === 0) {
    // Fallback: awaiting without ownerActBinding (legacy projections in same macro-lot).
    return loadPriorMissionProjection(input.conversationId, {
      awaitingPilotAct: true,
      preparationId: input.preparationId,
    });
  }
  // Ambiguous multi-await: refuse silent mix — caller must supply clientIntentKey.
  return null;
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

/**
 * After D2 createProjectCommand succeeds, continue the SAME intention (pending D4)
 * without a new Pilot message. COMMAND path only — never from listMessages.
 * G1/G2/G5/G6: exact mission resolve, advisory lock, early continuation turn, replay.
 */
export async function continueAfterProjectCreated(input: {
  pilotId: string;
  preparationId: string;
  projectId: string;
  projectName?: string | null;
  /** Exact intention that awaited this D2 act (from create-project body / UI). */
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

  const prior = await resolveMissionAwaitingD2Create({
    conversationId: conv.id,
    preparationId: input.preparationId,
    projectId: input.projectId,
    projectName: input.projectName,
    clientIntentKey: input.clientIntentKey,
  });
  if (!prior) {
    // May already be completed — check latest for supplied key / any completed continue.
    if (input.clientIntentKey) {
      const latest = await loadPriorMissionProjection(conv.id, {
        clientIntentKey: input.clientIntentKey,
        preparationId: input.preparationId,
      });
      if (latest && latest.status !== "AWAITING_PILOT_ACT") {
        const replay = await loadContinuationReplay(conv.id, input.clientIntentKey, input.projectId);
        if (replay) return { ...replay, continued: true, replayed: true, reason: "ALREADY_CONTINUED" };
        return {
          continued: false,
          missionProjection: latest,
          documentSave: null,
          assistantMessageId: null,
          reason: "MISSION_NO_LONGER_AWAITING",
        };
      }
    }
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "NO_AWAITING_MISSION",
    };
  }

  const lockKey = `mission-continue:${prior.clientIntentKey}:${input.projectId}`;
  await db.execute(
    sql`select pg_advisory_lock(hashtext(${conv.id}), hashtext(${lockKey}))`,
  );
  try {
    const existingReplay = await loadContinuationReplay(
      conv.id,
      prior.clientIntentKey,
      input.projectId,
    );
    if (existingReplay) {
      return { ...existingReplay, continued: true, replayed: true, reason: "ALREADY_CONTINUED" };
    }

    // Reserve continuation turn before side effects (crash-safe identity).
    await reserveContinuationTurn({
      conversationId: conv.id,
      pilotId: input.pilotId,
      clientIntentKey: prior.clientIntentKey,
      projectId: input.projectId,
      mission: advanceMissionAfterProjectCreated(prior, input.projectId),
    });

    let mission = advanceMissionAfterProjectCreated(prior, input.projectId);
    const pendingDoc = mission.steps.find(
      (s) =>
        (s.id === "d4_create" || s.capabilityId === "d4.create_document") &&
        (s.status === "PENDING" || s.status === "WAITING"),
    );

    if (!pendingDoc) {
      mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
      const msgId = await appendContinuationAssistantMessage({
        conversationId: conv.id,
        content:
          `### Suite de mission\nProjet créé (projectId=${input.projectId}). ` +
          `Aucune étape documentaire dépendante dans l'intention initiale.\n\n` +
          formatMissionAck(mission),
        generationId: `mission-continue-d2:${mission.clientIntentKey}:${input.projectId}`,
      });
      await persistContinuationTurn({
        conversationId: conv.id,
        pilotId: input.pilotId,
        clientIntentKey: mission.clientIntentKey,
        projectId: input.projectId,
        mission,
        assistantMessageId: msgId,
      });
      return {
        continued: true,
        missionProjection: mission,
        documentSave: null,
        assistantMessageId: msgId,
        reason: "D2_ONLY_COMPLETED",
      };
    }

    const original =
      mission.originalUserText ??
      mission.pendingDocumentBrief ??
      "Prépare le document de cadrage demandé dans l'intention initiale.";

    const userPrompt =
      `Le projet a été créé (projectId=${input.projectId}). ` +
      `Poursuis MAINTENANT l'intention initiale du Pilote sans lui redemander.\n\n` +
      `Intention initiale:\n${original}\n\n` +
      `Produis le document demandé (titre + corps en fence sfia-document) pour ce projet.`;

    let documentSave: DocumentSaveSummary | null = null;
    const reply = await generateNoraReply({
      userText: userPrompt,
      contextSnippets: [`projectId=${input.projectId}`, `preparationId=${input.preparationId}`],
    });

    if (reply.status === "COMPLETE" && reply.content.trim()) {
      const extracted = extractContractualDocumentProposal(reply.content);
      if (extracted.ok) {
        // G4: mobilize real D4 owner through executable capability contract.
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

    const body =
      reply.status === "COMPLETE" && reply.content.trim()
        ? appendMissionAck(reply.content, mission)
        : appendMissionAck(canonical, mission);

    const msgId = await appendContinuationAssistantMessage({
      conversationId: conv.id,
      content: body,
      generationId: `mission-continue-d2d4:${mission.clientIntentKey}:${input.projectId}`,
    });

    await persistContinuationTurn({
      conversationId: conv.id,
      pilotId: input.pilotId,
      clientIntentKey: mission.clientIntentKey,
      projectId: input.projectId,
      mission,
      assistantMessageId: msgId,
      documentSave,
    });

    emitObs({
      event_name: "d3.mission.continue_after_project_created",
      component: "d3.intent_conduction",
      outcome: mission.status === "COMPLETED" ? "SUCCESS" : "PARTIAL",
      meta: {
        project_id: input.projectId,
        client_intent_key: mission.clientIntentKey,
        document_status: documentSave?.status ?? null,
      },
    });

    return {
      continued: true,
      missionProjection: mission,
      documentSave,
      assistantMessageId: msgId,
    };
  } finally {
    await db.execute(
      sql`select pg_advisory_unlock(hashtext(${conv.id}), hashtext(${lockKey}))`,
    );
  }
}

function continuationTurnKey(clientIntentKey: string, projectId: string): string {
  return `mission-continue:${clientIntentKey}:${projectId}`;
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

/** Insert RUNNING continuation fence before owner side-effects (G5/G6). */
async function reserveContinuationTurn(input: {
  conversationId: string;
  pilotId: string;
  clientIntentKey: string;
  projectId: string;
  mission: MissionProjection;
}): Promise<void> {
  const clientTurnKey = continuationTurnKey(input.clientIntentKey, input.projectId);
  const existing = (
    await db
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
  if (existing) return;
  await db.insert(conversationTurnCommands).values({
    id: newId("ctc"),
    conversationId: input.conversationId,
    ownerPilotId: input.pilotId,
    clientTurnKey,
    requestFingerprint: `fp-continue-${input.projectId}`,
    operationId: newId("op"),
    status: "RUNNING",
    resultJson: JSON.stringify({
      missionProjection: input.mission,
      continuedAfterProjectId: input.projectId,
      phase: "RESERVED",
    }),
    assistantMessageId: null,
    ownerToken: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}

async function appendContinuationAssistantMessage(input: {
  conversationId: string;
  content: string;
  generationId: string;
}): Promise<string> {
  const existing = (
    await db
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
  if (existing) return existing.id;

  // Serialize ordinal allocation under the same advisory lock held by continue.
  const last = (
    await db
      .select({ ordinal: messages.ordinal })
      .from(messages)
      .where(eq(messages.conversationId, input.conversationId))
      .orderBy(asc(messages.ordinal))
  ).at(-1);
  const ordinal = (last?.ordinal ?? 0) + 1;
  const id = `msg_mcont_${input.generationId.replace(/[^a-zA-Z0-9_:-]/g, "").slice(-48)}`;
  try {
    await db.insert(messages).values({
      id,
      conversationId: input.conversationId,
      role: "assistant",
      content: input.content,
      status: "COMPLETE",
      ordinal,
      generationId: input.generationId,
      createdAt: new Date(),
    });
    return id;
  } catch {
    const again = (
      await db
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
    if (again) return again.id;
    // Ordinal race — retry once with next ordinal.
    const last2 = (
      await db
        .select({ ordinal: messages.ordinal })
        .from(messages)
        .where(eq(messages.conversationId, input.conversationId))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    const id2 = `${id}_r`;
    await db.insert(messages).values({
      id: id2,
      conversationId: input.conversationId,
      role: "assistant",
      content: input.content,
      status: "COMPLETE",
      ordinal: (last2?.ordinal ?? 0) + 1,
      generationId: input.generationId,
      createdAt: new Date(),
    });
    return id2;
  }
}

async function persistContinuationTurn(input: {
  conversationId: string;
  pilotId: string;
  clientIntentKey: string;
  projectId: string;
  mission: MissionProjection;
  assistantMessageId: string | null;
  documentSave?: unknown;
}): Promise<void> {
  const clientTurnKey = continuationTurnKey(input.clientIntentKey, input.projectId);
  const existing = (
    await db
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
  const resultJson = JSON.stringify({
    missionProjection: input.mission,
    documentSave: input.documentSave ?? null,
    continuedAfterProjectId: input.projectId,
  });
  if (existing) {
    await db
      .update(conversationTurnCommands)
      .set({
        status: "COMPLETE",
        resultJson,
        assistantMessageId: input.assistantMessageId,
        updatedAt: new Date(),
      })
      .where(eq(conversationTurnCommands.id, existing.id));
    return;
  }
  await db.insert(conversationTurnCommands).values({
    id: newId("ctc"),
    conversationId: input.conversationId,
    ownerPilotId: input.pilotId,
    clientTurnKey,
    requestFingerprint: `fp-continue-${input.projectId}`,
    operationId: newId("op"),
    status: "COMPLETE",
    resultJson,
    assistantMessageId: input.assistantMessageId,
    ownerToken: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
```

### 23.2 create-project/route.ts (FULL @ HEAD)

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
      /** Exact mission that awaited this D2 act (G2 correlation). */
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

    // After D2 confirms create, continue same intention (COMMAND path only).
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

### 23.3 intent-continuity-global.pg.test.ts (FULL @ HEAD)

```typescript
/**
 * Global intent continuity — multi-domain scenarios (not Git-only).
 * DEV PG + fixture Nora + SCRIPTED Git when needed.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  humanDecisions,
  pilots,
  preparations,
  projectCycles,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import {
  authorizePublication,
  inspectionAllowsAuthorization,
  preparePublication,
} from "@/domains/execution/effect-service";
import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";
import { listDocuments, savePreparationDocument } from "@/domains/document/service";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import {
  capitalizeAcquis,
  ensureSubject,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import {
  CAPABILITY_CONTRACTS,
  continueAfterProjectCreated,
  d2MissionIdempotencyKey,
  loadPriorMissionProjection,
  mobilizeCapability,
} from "@/domains/conversation/intent-conduction";
import { getPreparationContext } from "@/domains/preparation/service";

async function seedPilot(label: string) {
  const id = newId("pilot");
  await db.insert(pilots).values({ id, displayName: label, githubUserId: `gh-${id}` });
  return id;
}

async function seedPrepOnly(label: string) {
  const pilotId = await seedPilot(label);
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  return { pilotId, preparationId: prep.id };
}

async function seedProject(label: string) {
  const { pilotId, preparationId } = await seedPrepOnly(label);
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed project failed: ${created.status}`);
  }
  return { pilotId, preparationId, projectId: created.projectId };
}

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
  const seeded = await seedProject(label);
  const sessionId = newId("sid");
  const { state } = await startGitHubAuthorization(
    seeded.pilotId,
    "/settings/integrations",
    sessionId,
  );
  const status = await completeGitHubAuthorization({
    pilotId: seeded.pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repoId = status.repositories[0]!.id;
  await attachRepositoryToProject(seeded.pilotId, seeded.projectId, repoId);
  getScriptedGitHubProvider();
  return { ...seeded, repositoryId: repoId };
}

describe("Global Nora/Studio intent continuity (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/5433|sfia_next_dev/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
  });

  it("S01: simple dialogue — no D2/D4/D7 effects", async () => {
    const { pilotId, preparationId } = await seedProject("scen-a");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Explique brièvement le rôle d'une HumanDecision.",
    );
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
    expect(chat.missionProjection == null).toBe(true);
  });

  it("S02: D2 alone — Pilot act creates one project; no forced document", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-b-d2-only");
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Solo Project B.",
      { clientTurnKey: newId("ctk") },
    );
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(first.missionProjection?.ownerActBinding?.kind).toBe("D2_CREATE_PROJECT");
    expect(first.missionProjection?.steps.some((s) => s.capabilityId === "d4.create_document")).toBe(
      false,
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    expect(prep.previewName).toMatch(/^Solo Project B\.?$/i);

    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: prep.previewName || "Solo Project B",
      previewSummary: prep.previewSummary || "s",
      idempotencyKey: d2MissionIdempotencyKey(first.missionProjection!.clientIntentKey),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Solo Project B",
      clientIntentKey: first.missionProjection!.clientIntentKey,
    });
    expect(cont.continued).toBe(true);
    expect(cont.documentSave).toBeNull();
    expect(cont.missionProjection?.status).toBe("COMPLETED");
    expect(cont.reason).toBe("D2_ONLY_COMPLETED");
  });

  it("S03 BLOCKING: Atlas D2→D4 ONE intention — no second Pilot message", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-c-atlas");
    const ask =
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.";
    const clientTurnKey = newId("ctk");
    const first = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey,
    });
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(first.missionProjection?.steps[0]?.reason).toMatch(/Atlas/);
    expect(first.missionProjection?.proposedProjectName).toBe("Atlas");
    expect(first.missionProjection?.ownerActBinding?.clientIntentKey).toBe(clientTurnKey);
    expect(
      first.missionProjection?.steps.some((s) => s.capabilityId === "d4.create_document"),
    ).toBe(true);
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    expect(prep.previewName).toBe("Atlas");

    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Atlas",
      previewSummary: prep.previewSummary || "s",
      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Atlas",
      clientIntentKey: clientTurnKey,
    });
    expect(cont.continued).toBe(true);
    expect(cont.documentSave?.status).toBe("AVAILABLE");
    expect(cont.documentSave?.documentId).toBeTruthy();
    expect(cont.missionProjection?.status).toBe("COMPLETED");

    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === cont.documentSave?.documentId)).toBe(true);
  });

  it("G1+S04: after continue, mission is not awaiting; double continue is replay", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-g1-s04");
    const clientTurnKey = newId("ctk");
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Recover Atlas puis un document de cadrage Recover.",
      { clientTurnKey },
    );
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Recover Atlas",
      previewSummary: "s",
      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont1 = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Recover Atlas",
      clientIntentKey: clientTurnKey,
    });
    expect(cont1.continued).toBe(true);
    expect(cont1.documentSave?.status).toBe("AVAILABLE");
    const docId = cont1.documentSave!.documentId!;

    const ctx = await getPreparationContext(pilotId, preparationId);
    const awaiting = await loadPriorMissionProjection(ctx.conversation!.id, {
      awaitingPilotAct: true,
      preparationId,
    });
    expect(awaiting).toBeNull();

    const latest = await loadPriorMissionProjection(ctx.conversation!.id, {
      clientIntentKey: clientTurnKey,
    });
    expect(latest?.status).toBe("COMPLETED");

    const cont2 = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Recover Atlas",
      clientIntentKey: clientTurnKey,
    });
    expect(cont2.replayed === true || cont2.reason === "ALREADY_CONTINUED").toBe(true);
    expect(cont2.documentSave?.documentId ?? docId).toBe(docId);

    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.filter((d) => d.document.id === docId)).toHaveLength(1);
  });

  it("S05/G2: two missions — D2 result binds to explicit clientIntentKey only", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-s05-two");
    const keyA = newId("ctk");
    const a = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Mission Alpha puis un document d'accueil Alpha.",
      { clientTurnKey: keyA },
    );
    expect(a.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(a.missionProjection?.ownerActBinding?.clientIntentKey).toBe(keyA);

    const unrelated = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Quelle est la différence entre blob et commit ?",
      { clientTurnKey: newId("ctk") },
    );
    expect(unrelated.documentSave == null || unrelated.documentSave.status === "NOT_EXECUTED").toBe(
      true,
    );

    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Mission Alpha",
      previewSummary: "s",
      idempotencyKey: d2MissionIdempotencyKey(keyA),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
      projectName: "Mission Alpha",
      clientIntentKey: keyA,
    });
    expect(cont.missionProjection?.clientIntentKey).toBe(keyA);
    expect(cont.documentSave?.status).toBe("AVAILABLE");

    const indep = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Document Indépendant Beta.",
      { clientTurnKey: newId("ctk") },
    );
    expect(indep.documentSave?.status).toBe("AVAILABLE");
    expect(indep.documentSave?.documentId).not.toBe(cont.documentSave?.documentId);
  });

  it("S06: CREATE then REVISE — revision actually persisted (same documentId, v2)", async () => {
    const { pilotId, preparationId } = await seedProject("scen-cd-d4");
    const created = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Continuity CD pour révision ciblée.",
      { clientTurnKey: newId("ctk") },
    );
    expect(created.documentSave?.status).toBe("AVAILABLE");
    expect(created.documentSave?.act).toBe("CREATE");
    const documentId = created.documentSave!.documentId!;
    const v1 = created.documentSave!.revisionNumber;

    const reviseAsk = `Révise uniquement la section 2 du document ${documentId} et conserve le reste`;
    expect(qualifyDocumentAct(reviseAsk).kind).toBe("REVISE");
    const revised = await postUserMessageAndNora(pilotId, preparationId, reviseAsk, {
      clientTurnKey: newId("ctk"),
    });
    expect(revised.documentSave?.act).toBe("REVISE");
    expect(revised.documentSave?.status).toBe("AVAILABLE");
    expect(revised.documentSave?.documentId).toBe(documentId);
    expect(revised.documentSave?.revisionNumber).toBeGreaterThan(v1 ?? 0);
  });

  it("S07: D4 knowledge — selectRelevantKnowledgeContext returns real acquis with provenance", async () => {
    const { pilotId, preparationId } = await seedProject("scen-s07-know");
    const sub = await ensureSubject(pilotId, preparationId, "Objectif Atlas");
    expect(sub.status).toBe("AVAILABLE");
    const cap = await capitalizeAcquis(pilotId, preparationId, {
      statement:
        "L'objectif Atlas est de sécuriser la continuité cognitive multi-domaines sans second message Pilote.",
      kind: "HYPOTHESIS",
      subjectId: sub.subjectId,
      provenance: { sourceKind: "pilot", sourceId: "s07" },
    });
    expect(cap.status).toBe("AVAILABLE");

    const selected = await selectRelevantKnowledgeContext(
      pilotId,
      preparationId,
      "Quel est l'objectif Atlas pour la continuité ?",
    );
    expect(selected.selectedAcquisIds).toContain(cap.acquisId);
    expect(selected.snippets.some((s) => /continuité cognitive/i.test(s))).toBe(true);
    expect(selected.snippets.some((s) => /provenance=/i.test(s))).toBe(true);

    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Rappelle l'objectif Atlas pour la continuité cognitive multi-domaines.",
      { clientTurnKey: newId("ctk") },
    );
    expect(chat.status).toBe("COMPLETE");
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
  });

  it("S08: D5 pilotage — clear GO opens ACTIVE cycle via postUserMessageAndNora", async () => {
    const { pilotId, preparationId, projectId } = await seedProject("scen-f-d5");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Ouvre le cycle cadrage.",
      { clientTurnKey: newId("ctk") },
    );
    expect(chat.status).toBe("COMPLETE");
    expect(chat.pilotageEffect?.attempted).toBe(true);
    expect(chat.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    expect(chat.pilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(chat.humanDecisionCreated).toBe(true);
    const openCycles = await db
      .select()
      .from(projectCycles)
      .where(eq(projectCycles.projectId, projectId));
    const active = openCycles.filter((c) => c.status === "ACTIVE");
    expect(active).toHaveLength(1);
    expect(active[0]?.cycleType).toBe("CADRAGE");
  });

  it("S08b: D5 then D4 in one utterance — cycle + document", async () => {
    const { pilotId, preparationId, projectId } = await seedProject("scen-s08b");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Ouvre le cycle cadrage puis crée un document intitulé Suite Après Cycle.",
      { clientTurnKey: newId("ctk") },
    );
    expect(chat.pilotageEffect?.operation).toBe("OPEN_CYCLE");
    expect(chat.documentSave?.status).toBe("AVAILABLE");
    const active = (
      await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))
    ).filter((c) => c.status === "ACTIVE");
    expect(active).toHaveLength(1);
  });

  it("S09: D6 — authorizePublication creates HD", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "scen-g-d6",
    );
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé D6 Decision Doc pour publication.",
    );
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: chat.documentSave!.documentId!,
      revisionId: chat.documentSave!.revisionId!,
      repositoryId,
      targetPath: "docs/studio-next/d6-decision.md",
      targetBranch: "main",
      correlationKey: `pub-d6-${chat.documentSave!.revisionId}`,
    });
    expect(prepared.status).toBe("PREPARED");
    const beforeHd = await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.projectId, projectId));
    const hdBefore = beforeHd.length;

    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };
    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
      statement: "GO D6 decision scenario",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(
      auth.status === "AUTHORIZED" || auth.status === "DISPATCHED" || auth.status === "SUCCEEDED",
    ).toBe(true);
    const afterHd = await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.projectId, projectId));
    expect(afterHd.length).toBeGreaterThan(hdBefore);
  });

  it("S13 READ≠COMMAND: listMessages does not dispatch AUTHORIZED classic attempt", async () => {
    const { pilotId, projectId, preparationId, repositoryId } = await seedProjectWithGit(
      "scen-read",
    );
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Read Isolation pour publication classique.",
    );
    const prepared = await preparePublication({
      pilotId,
      projectId,
      documentId: chat.documentSave!.documentId!,
      revisionId: chat.documentSave!.revisionId!,
      repositoryId,
      targetPath: "docs/studio-next/read-iso.md",
      targetBranch: "main",
      correlationKey: `pub-classic-read-${chat.documentSave!.revisionId}`,
    });
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0]!;
    const plan = JSON.parse(row.planJson) as {
      inspection: { kind: string; inspectionFingerprint: string };
    };
    expect(inspectionAllowsAuthorization(plan.inspection.kind as never)).toBe(true);
    const auth = await authorizePublication({
      pilotId,
      projectId,
      attemptId: prepared.attemptId,
      statement: "GO classic read isolation",
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
    });
    expect(auth.status).toBe("AUTHORIZED");

    await listMessages(pilotId, preparationId);
    await listMessages(pilotId, preparationId);

    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId))
    )[0];
    expect(after?.status).toBe("AUTHORIZED");
  });

  it("G4/S12: mobilizeCapability on real D2 + D4 contracts + future double", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-g4-mob");
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const d2 = CAPABILITY_CONTRACTS.find((c) => c.capabilityId === "d2.create_project")!;
    const created = await mobilizeCapability(
      d2,
      {
        capabilityId: "d2.create_project",
        invoke: async (ctx) => {
          const r = await createProjectCommand({
            pilotId: ctx.pilotId,
            preparationId: ctx.preparationId!,
            expectedCreationRevision: prep.creationRevision,
            projectName: "Mobilized Project",
            previewSummary: "s",
            idempotencyKey: newId("idem"),
          });
          return {
            status: r.status,
            result: {
              status: r.status,
              projectId: "projectId" in r ? r.projectId : null,
            },
          };
        },
      },
      { pilotId, preparationId },
    );
    expect(created.status).toBe("CREATED");
    expect(created.result.projectId).toBeTruthy();

    const d4 = CAPABILITY_CONTRACTS.find((c) => c.capabilityId === "d4.create_document")!;
    const doc = await mobilizeCapability(
      d4,
      {
        capabilityId: "d4.create_document",
        invoke: async (ctx) => {
          const saved = await savePreparationDocument(
            ctx.pilotId,
            ctx.preparationId!,
            "Doc mobilisé",
            "# Doc\n\nContenu mobilisé via contrat.\n",
            undefined,
            { correlationKey: `doc:mob:${newId("ck")}` },
          );
          return {
            status: saved.status,
            result: {
              status: saved.status,
              documentId: "documentId" in saved ? saved.documentId ?? null : null,
              revisionId: "revisionId" in saved ? saved.revisionId ?? null : null,
            },
          };
        },
      },
      { pilotId, preparationId },
    );
    expect(doc.result.documentId).toBeTruthy();

    const future = CAPABILITY_CONTRACTS.find(
      (c) => c.capabilityId === "future.example_capability",
    )!;
    const sim = await mobilizeCapability(
      future,
      {
        capabilityId: "future.example_capability",
        invoke: async () => ({ status: "DONE", result: { status: "DONE", id: "sim_1" } }),
      },
      { pilotId },
    );
    expect(sim.result.id).toBe("sim_1");
  });

  it("G5: concurrent continueAfterProjectCreated — single document", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-g5-conc");
    const clientTurnKey = newId("ctk");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Concours puis un document concurrent.",
      { clientTurnKey },
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    const created = await createProjectCommand({
      pilotId,
      preparationId,
      expectedCreationRevision: prep.creationRevision,
      projectName: "Concours",
      previewSummary: "s",
      idempotencyKey: d2MissionIdempotencyKey(clientTurnKey),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const [a, b] = await Promise.all([
      continueAfterProjectCreated({
        pilotId,
        preparationId,
        projectId: created.projectId,
        projectName: "Concours",
        clientIntentKey: clientTurnKey,
      }),
      continueAfterProjectCreated({
        pilotId,
        preparationId,
        projectId: created.projectId,
        projectName: "Concours",
        clientIntentKey: clientTurnKey,
      }),
    ]);
    const docs = await listDocuments(pilotId, preparationId);
    const ids = new Set(
      [a.documentSave?.documentId, b.documentSave?.documentId].filter(Boolean) as string[],
    );
    expect(ids.size).toBe(1);
    expect(docs.filter((d) => ids.has(d.document.id))).toHaveLength(1);
    expect(a.continued || b.continued).toBe(true);
  });
});
```

### 23.4 unit/intent-conduction.test.ts (FULL @ HEAD)

```typescript
import { describe, expect, it } from "vitest";
import {
  CAPABILITY_CONTRACTS,
  advanceMissionAfterProjectCreated,
  buildD2AwaitingStep,
  buildD2OwnerActBinding,
  d2MissionIdempotencyKey,
  emptyMission,
  extractProposedProjectName,
  mergeMissionSteps,
  mobilizeCapability,
  qualifyStudioIntent,
} from "@/domains/conversation/intent-conduction";

describe("intent-conduction (domain-agnostic D3)", () => {
  it("A: simple dialogue — no project/doc/publish", () => {
    const q = qualifyStudioIntent("Quelle est la différence entre blob et commit ?");
    expect(q.simpleDialogue).toBe(true);
    expect(q.wantsProjectCreate).toBe(false);
    expect(q.documentAct.kind).toBe("NONE");
    expect(q.publication.wantsPublish).toBe(false);
  });

  it("GAP-05: project name stops before follow-on clause", () => {
    expect(
      extractProposedProjectName(
        "Crée un projet nommé Continuity Global B puis un document d'accueil pour ce projet.",
      ),
    ).toBe("Continuity Global B");
    expect(
      extractProposedProjectName(
        "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage.",
      ),
    ).toBe("Atlas");
  });

  it("B: project create intent without inventing D2 execution", () => {
    const q = qualifyStudioIntent(
      "Crée un projet nommé Continuity Global pour la suite documentaire",
    );
    expect(q.wantsProjectCreate).toBe(true);
    expect(q.proposedProjectName).toBe("Continuity Global");
  });

  it("Atlas compound: D2 + follow-on document in ONE intention", () => {
    const q = qualifyStudioIntent(
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.",
    );
    expect(q.wantsProjectCreate).toBe(true);
    expect(q.proposedProjectName).toBe("Atlas");
    expect(q.wantsFollowOnDocument).toBe(true);
    expect(q.pendingDocumentBrief).toMatch(/document de cadrage/i);
  });

  it("G2: D2 owner act binding is durable and explicit", () => {
    const binding = buildD2OwnerActBinding("prep_1", "ctk_abc");
    expect(binding.kind).toBe("D2_CREATE_PROJECT");
    expect(binding.suggestedIdempotencyKey).toBe(d2MissionIdempotencyKey("ctk_abc"));
    expect(binding.clientIntentKey).toBe("ctk_abc");
  });

  it("P1-E: GitHub mention alone is not publish", () => {
    const q = qualifyStudioIntent("Explique GitHub Actions dans Studio");
    expect(q.publication.wantsPublish).toBe(false);
  });

  it("Scenario K/G4: mobilizeCapability invokes owner adapter (not metadata-only)", async () => {
    const contract = CAPABILITY_CONTRACTS.find(
      (c) => c.capabilityId === "future.example_capability",
    )!;
    expect(contract.invokeOwnerRef).toContain("testBoundaryDouble");
    let invoked = false;
    const out = await mobilizeCapability(
      contract,
      {
        capabilityId: "future.example_capability",
        invoke: async () => {
          invoked = true;
          return { status: "DONE", result: { status: "DONE", id: "x1" } };
        },
      },
      { pilotId: "pilot_test" },
    );
    expect(invoked).toBe(true);
    expect(out.result.id).toBe("x1");
  });

  it("advances D2 waiting step after Pilot creates project", () => {
    let m = emptyMission("k1", "projet");
    m = mergeMissionSteps(m, [buildD2AwaitingStep("P")], "AWAITING_PILOT_ACT");
    const next = advanceMissionAfterProjectCreated(m, "prj_1");
    expect(next.steps[0]?.status).toBe("DONE");
    expect(next.steps[0]?.reason).toMatch(/prj_1/);
  });
});
```

## 24. Fichiers modifiés — diffs utiles (commit f99e4501)

```diff
commit f99e4501d054b97c5a690f913201efde48e23bd8
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Tue Nov 10 13:45:41 2026 +0100

    fix(studio-next): harden durable mission identity, D2 correlation, and recovery

    Close G1–G6 by resolving latest-per-intent missions, binding D2 acts to clientIntentKey, locking continuation, and mobilizing real D2/D4 owners through the shared capability contract.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 5902dbba..fe615d07 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-05
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-10 (Europe/Paris) |
+| Macro-lot | R5 / Continuité globale — fiabilisation G1–G7 |
+| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
+| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
+| Parent | DEV-04 @ `5c6b0cee` |
+| Lane | DEV only; RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
+| Changes | Latest-per-intentKey mission load (G1/G3); ownerActBinding + clientIntentKey D2 correlation (G2); mobilizeCapability on real D2/D4 (G4); advisory lock + RUNNING continuation fence (G5/G6); S07 knowledge + S08b D5→D4; UI create-project passes clientIntentKey |
+| Schema | unchanged |
+| Tests | unit 8 PASS; PG global 13 PASS; PG ACCEPT-01 8 PASS; tsc/eslint/build PASS; browser S14 NOT PROVEN (no DEV server :3100) |
+| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL REVIEW — NO PRODUCT PUSH |
+
 ## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-04

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index e8191172..2f3486d5 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -461,6 +461,28 @@ export default function PreparationPage() {

   async function createProject() {
     setBusy(true);
+    // G2: bind D2 act to the awaiting mission when the chat surface exposes clientIntentKey.
+    let clientIntentKey: string | undefined;
+    try {
+      const chatRes = await fetch(`/api/preparations/${preparationId}/messages`);
+      if (chatRes.ok) {
+        const chatJson = (await chatRes.json()) as {
+          messages?: Array<{ role: string; content: string }>;
+        };
+        const msgs = chatJson.messages ?? [];
+        for (let i = msgs.length - 1; i >= 0; i -= 1) {
+          const m = msgs[i];
+          if (m?.role !== "assistant") continue;
+          const match = m.content.match(/clientIntentKey=([^\s\n]+)/);
+          if (match?.[1] && /AWAITING_PILOT_ACT/.test(m.content)) {
+            clientIntentKey = match[1];
+            break;
+          }
+        }
+      }
+    } catch {
+      /* best-effort correlation — create still proceeds */
+    }
     const res = await fetch(`/api/preparations/${preparationId}/create-project`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
@@ -468,7 +490,10 @@ export default function PreparationPage() {
         expectedCreationRevision: creationRevision,
         projectName: previewName || "Projet sans titre",
         previewSummary,
-        idempotencyKey,
+        idempotencyKey: clientIntentKey
+          ? `d2:mission:${clientIntentKey}`
+          : idempotencyKey,
+        clientIntentKey,
       }),
     });
     const j = await res.json();
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index e9ce8ec0..3bb9bede 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -50,6 +50,14 @@ export type MissionStep = {
   reason?: string;
 };

+export type MissionOwnerActBinding = {
+  kind: "D2_CREATE_PROJECT";
+  preparationId: string;
+  clientIntentKey: string;
+  /** Recommended createProjectCommands.idempotencyKey correlation (not a second journal). */
+  suggestedIdempotencyKey: string;
+};
+
 export type MissionProjection = {
   clientIntentKey: string;
   status: MissionStatus;
@@ -63,6 +71,10 @@ export type MissionProjection = {
   pendingDocumentBrief?: string;
   /** Preparation that owns this mission (scope anchor). */
   preparationId?: string;
+  /** Exact project name proposed for D2 preview / act correlation. */
+  proposedProjectName?: string;
+  /** Durable binding of the awaited owner act to this intention. */
+  ownerActBinding?: MissionOwnerActBinding;
 };

 export type PublicationMissionIntent = {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index f60216e3..d7b7e743 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -56,6 +56,7 @@ import {
 import {
   advanceMissionAfterProjectCreated,
   buildD2AwaitingStep,
+  buildD2OwnerActBinding,
   buildPendingDocumentStep,
   emptyMission,
   loadPriorMissionProjection,
@@ -1182,6 +1183,8 @@ export async function postUserMessageAndNora(
       originalUserText: content,
       pendingDocumentBrief: studioIntent.pendingDocumentBrief ?? undefined,
       preparationId,
+      proposedProjectName: proposed,
+      ownerActBinding: buildD2OwnerActBinding(preparationId, clientIntentKey),
     };
     d2Mission = mergeMissionSteps(d2Mission, [buildD2AwaitingStep(proposed)], "AWAITING_PILOT_ACT");
     if (
```

## 25. Verdict unique

**NORA/STUDIO GLOBAL INTENT CONTINUITY — EXISTING CAPABILITIES INTEGRATED IN DEV — SINGLE-INTENT AND RECOVERY BEHAVIOR VERIFIED AT REPORTED EVIDENCE LEVEL — NOMINAL ARCHITECTURE PRESERVED — READY FOR CHATGPT GLOBAL REVIEW — NO PRODUCT PROMOTION AUTHORIZED.**

Evidence: DETERMINISTIC DEV (PG+fixture+SCRIPTED). NOT LIVE / NOT REAL / NOT RECETTE / NOT STABLE / NOT RELEASED.
Reserves: S14 browser NOT PROVEN; knowledge tool-deep PARTIAL.

## 26. Git Review Index

| Path | Role |
| --- | --- |
| intent-conduction.ts | latest-map, resolve D2, lock, mobilize D4 continue |
| mission-continuity.ts | MissionOwnerActBinding fields |
| service.ts | ownerActBinding on AWAITING |
| create-project/route.ts | clientIntentKey → continue |
| preparations/page.tsx | UI correlation |
| intent-continuity-global.pg.test.ts | S01–S13/G1–G5 |
| delivery-history.md | DEV-05 |

## 27. Contrôle complétude §7.2.1 / §7.6

- FULL CRITICAL mono-cycle: OUI
- Contenus complets fichiers principaux: OUI (§23)
- Diffs sections modifiées: OUI (§24)
- Synthèse seule: NON
- Product push: NON
- Handoff L3 borné: après ce pack
- STOP après handoff: requis

END OF REVIEW PACK FULL — HEAD `f99e4501d054b97c5a690f913201efde48e23bd8` TREE `7a63b449f2a5bf957d8e8859ec66798cfa13fbd2`
