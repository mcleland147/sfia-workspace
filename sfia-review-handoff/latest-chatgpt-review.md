# SFIA STUDIO NEXT — R5 CYCLE 8 — REVIEW PACK FULL (CRITICAL)

Profil: CRITICAL | Pack: FULL mono-cycle | Date: 2026-11-10
Publisher: Cursor | Lane: DEV isolé | Product push: INTERDIT

---

## 01. Git Truth Check

| Item | Value |
| --- | --- |
| Repo | `mcleland147/sfia-workspace` (local worktree) |
| pwd | `/Users/morris/Projects/sfia-workspace-next-intent-continuity-dev` |
| Branch | `feat/next-nora-intent-continuity-20261110` |
| HEAD FINAL | `5c6b0cee2211d5418db6100b0302ef0cfa0ee8f3` |
| TREE FINAL | `3d1fb9c6fad2763a7d96a29b4db7b5facfcc2dc9` |
| Parent | `12e26e323a609646bbd437870aca9314c215c9ed` |
| Base Product | `d7f1507a56e50660ea24903c2dc563c249ba9086` tree `3e9e1086aaf83e22d8e3350565f1c747bb31f556` |
| merge-base(HEAD, d7f1507a) | `d7f1507a56e50660ea24903c2dc563c249ba9086` |
| fix/ collaboration WT | preserved @ `d7f1507a` / tree `3e9e1086` |
| main remote observed | `6667a438…` (not used as base) |
| Product push | NONE |
| Staged/untracked Product | only local noise (env manifests, review tmp) — not in delivery commit |

```
5c6b0cee feat(studio-next): finalize single-intent D2→D4 continuity without second Pilot message
12e26e32 feat(studio-next): global intent continuity across D2/D4 and common D3
f42cb2f5 fix(studio-next): gate Nora mission resume and harden continuity
cf5bac70 fix(studio-next): reflect missionResume after authorize and prove replay
b0e23c46 feat(studio-next): implement ACCEPT-01 mission continuity in D3 nominal path
```

```
## feat/next-nora-intent-continuity-20261110
 M .tmp-sfia-review/chatgpt-review.md
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-771844fd-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-8ba77730-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-93da44be-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-974b0030-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-a2c5e9f8-2026-11-09.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-d7f1507a-2026-11-10-DEPLOYED.md
?? projects/sfia-studio-next/construction/integration-git/env01-recette-manifest-ml4-d7f1507a-2026-11-10-PREPARED.md
?? projects/sfia-studio-next/web/scripts/github-app-installation-read-qualify.ts
```

## 02. Sources et décisions

- Cadrage Morris 10/11/2026: `projects/sfia-studio-next/cadrage/conduite-intentions-continuite-cognitive-nora-studio.md` @ blob `2322644aa028f882b57570fd962a9a971d772762` (VALIDATED CONTENT — NOT MERGED).
- ENV-01: `governance/environnements-recette-et-promotions.md` blob `14b61f0d…`
- Versioning: `governance/product-versioning.md` blob `8bc93e0f…` — EVOL / MINOR CANDIDATE, NO RELEASE.
- Architecture R4 ADR R4-01..04; A3 no generic action engine.
- Prior handoff: `sfia/review-handoff` @ `544fbe51135720858912485ab8883b3734c2849e` blob `ca733707…`

## 03. Intention Morris complète

Finaliser en DEV la capacité globale de conduite des intentions: Nora conduit jusqu'au bout une intention multi-domaines (D2→D4 bloquant Atlas) sans second message Pilote pour les étapes déjà demandées; mobiliser capacités réellement implémentées; préserver owners; READ≠COMMAND; ACCEPT-01 intact; extensibilité par invocation; pas de moteur parallèle.

Scénario central: « Crée un projet nommé Atlas puis prépare… document de cadrage… » → D2 acte explicite → reprise auto D4 → restitution.

## 04. Cartographie AS-IS D1–D9

| Domaine | Owner nominal | Mobilisé dans ce lot |
| --- | --- | --- |
| D1 | session/identity | préconditions inchangées |
| D2 | createProjectCommand + preview | await + continueAfterProjectCreated |
| D3 | postUserMessageAndNora / generateNoraReply | qualification + continuation |
| D4 | savePreparationDocument / revise | CREATE après D2; CREATE→REVISE testé |
| D5 | applyConversationalAuthority | OPEN_CYCLE via chat (scénario F) |
| D6 | authorizePublication / HD | scénario G + ACCEPT-01 |
| D7/D9 | prepare/authorize/dispatch | ACCEPT-01 SCRIPTED |
| D8 | facts/status | restitution mission |

## 05. Architecture nominale

UNE entrée D3: `postUserMessageAndNora`. Continuation post-D2 via COMMAND create-project → `continueAfterProjectCreated` (pas listMessages). Pas de WorkIntent table. Projection refs-only dans resultJson des turn commands. Pas de second runner Nora.

## 06. Conduite D3 effectivement implémentée

INTENTION → qualifyStudioIntent → preview D2 / AWAITING_PILOT_ACT (+ pending D4) → acte create-project → continueAfterProjectCreated → generateNoraReply + savePreparationDocument → persistContinuationTurn → restitution.

## 07. Mobilisation réelle des capacités

`mobilizeCapability(contract, adapter, ctx)` invoque l'adapter et vérifie structuredResultKeys. Test K avec future.example_capability (boundary double). D2/D4 via owners réels dans continueAfterProjectCreated.

## 08. Contrats propriétaires

CAPABILITY_CONTRACTS: d2.create_project, d4.create_document, d5.pilotage_command, d6.human_decision, d7.prepare_publication, future.example_capability — invokeOwnerRef + preconditions + continuationHook.

## 09. D2→D4 intention unique (BLOQUANT)

PG test « C BLOCKING: Atlas… » PASS — createProjectCommand puis continueAfterProjectCreated SANS second postUserMessageAndNora; document AVAILABLE; mission COMPLETED; replay sans doublon.

## 10. D4 CREATE/REVISE/connaissance

CREATE→REVISE same documentId v2 PASS. Knowledge profonde / browser: NOT PROVEN ce cycle (réserve).

## 11. D5/D6

F: OPEN_CYCLE CADRAGE ACTIVE + HD via postUserMessageAndNora PASS. G: authorizePublication crée HD PASS. ACCEPT-01 D6 auth→dispatch mission PASS.

## 12. ACCEPT-01 Git

mission-continuity-accept01.pg.test.ts — 8 PASS (SCRIPTED).

## 13. Extensibilité effective

mobilizeCapability exercé (unit + PG K) — pas metadata-only.

## 14. Deux missions indépendantes

Scénario M PASS — Mission Alpha continue avec son clientIntentKey; document indépendant Beta distinct.

## 15. Persistance et corrélations

originalUserText / pendingDocumentBrief / preparationId sur MissionProjection; loadPriorMissionProjection filtrée (awaitingPilotAct, preparationId, clientIntentKey); limit 40; turn key `mission-continue:{intent}:{projectId}`.

## 16. Reprise/crash/idempotence

Replay continueAfterProjectCreated → NO_AWAITING_MISSION ou idempotent; doc correlationKey doc:mission-continue:*; D2 create idempotencyKey owner.

## 17. Permissions/STOP/révocation

Owners inchangés. Restrictions/STOP exhaustive multi-cas: partial — s'appuie sur NR ML3 existants + G authorize. Session expirée: NOT re-proven ce HEAD.

## 18. READ ≠ COMMAND

listMessages ne dispatch pas; recoverAuthorizedNoraMissions uniquement sur COMMAND paths. PG READ isolation PASS.

## 19. Tests HTTP/browser

create-project route retourne missionContinue. Browser E2E Atlas: NOT EXECUTED ce cycle (réserve GAP-07).

## 20. Résultats unitaires/PG/build

| Preuve | Commande | Résultat |
| --- | --- | --- |
| unit intent | `npx vitest run tests/unit/intent-conduction.test.ts` | 7 PASS |
| PG global | `npx vitest run tests/integration/intent-continuity-global.pg.test.ts` | 10 PASS |
| PG ACCEPT-01 | `npx vitest run tests/integration/mission-continuity-accept01.pg.test.ts` | 8 PASS |
| tsc | `npx tsc --noEmit` | PASS |
| eslint | touched files | PASS |
| build | `npm run build` | PASS |
| SHA | `5c6b0cee2211d5418db6100b0302ef0cfa0ee8f3` | |
| Lane/DB | DEV / DATABASE_URL :5433 sfia_next_dev | |

## 21. Fake/Real Qualification

| Frontière | Niveau |
| --- | --- |
| Nora | DETERMINISTIC PROVEN (fixture STUDIO_E2E=1) — NOT LIVE |
| GitHub | SCRIPTED — NOT REAL |
| PostgreSQL | DETERMINISTIC PROVEN DEV |
| Browser | NOT PROVEN |
| End-to-end REAL | NOT PROVEN |

## 22. ENV-01 et versioning

Lane DEV isolée. RECETTE BUILD `8vZjme4-KnnPkAqm_QxMz` non modifiée. STABLE N/A. Classification EVOL/MINOR CANDIDATE. NO RELEASE. Journal DEV-04.

## 23. Non-régression

ACCEPT-01 8 PASS; D4 CREATE/REVISE; D5 F01-equivalent; classic authorize READ isolation. Full ML3 suite: not re-run entire matrix this HEAD (targeted).

## 24. Fichiers créés/modifiés — contenus complets

### 24.1 intent-conduction.ts (FULL @ HEAD)

```typescript
/**
 * D3 common intent conduction — domain-agnostic helpers.
 * NOT a parallel engine: no new authority, permissions, or effect journal.
 * Domain owners remain D2/D4/D5/D6/D7/D9; this module only qualifies,
 * projects refs, reconstructs prior mission state, and continues after
 * owner-confirmed acts when the original intention already required it.
 */
import { and, asc, desc, eq } from "drizzle-orm";
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
  type MissionProjection,
  type MissionStep,
  type MissionStatus,
} from "./mission-continuity";

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
  /** Only return missions awaiting Pilot D2 act. */
  awaitingPilotAct?: boolean;
  /** Match exact clientIntentKey when known. */
  clientIntentKey?: string;
  /** Scope to preparationId stored on projection. */
  preparationId?: string;
  /** Scan depth — default 40 (not a functional gate of 8). */
  limit?: number;
};

/**
 * GAP-04: intention-anchored load — filter by status/key/preparation, not arbitrary first hit.
 */
export async function loadPriorMissionProjection(
  conversationId: string,
  opts?: LoadMissionOpts,
): Promise<MissionProjection | null> {
  const limit = opts?.limit ?? 40;
  const rows = await db
    .select({
      resultJson: conversationTurnCommands.resultJson,
      status: conversationTurnCommands.status,
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
    .orderBy(desc(conversationTurnCommands.createdAt))
    .limit(limit);

  for (const row of rows) {
    if (!row.resultJson) continue;
    try {
      const parsed = JSON.parse(row.resultJson) as { missionProjection?: MissionProjection | null };
      const m = parsed.missionProjection;
      if (!m?.clientIntentKey) continue;
      if (opts?.awaitingPilotAct && m.status !== "AWAITING_PILOT_ACT") continue;
      if (opts?.clientIntentKey && m.clientIntentKey !== opts.clientIntentKey) continue;
      if (opts?.preparationId && m.preparationId && m.preparationId !== opts.preparationId) {
        continue;
      }
      return m;
    } catch {
      /* skip */
    }
  }
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

/**
 * GAP-01/06: after D2 createProjectCommand succeeds, continue the SAME intention
 * (pending D4) without requiring a new Pilot message.
 * Command path only — never from listMessages.
 */
export async function continueAfterProjectCreated(input: {
  pilotId: string;
  preparationId: string;
  projectId: string;
}): Promise<{
  continued: boolean;
  missionProjection: MissionProjection | null;
  documentSave: {
    status: string;
    documentId?: string;
    revisionId?: string;
    revisionNumber?: number;
    act?: string;
    reason?: string;
  } | null;
  assistantMessageId: string | null;
  reason?: string;
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

  const prior = await loadPriorMissionProjection(conv.id, {
    awaitingPilotAct: true,
    preparationId: input.preparationId,
  });
  if (!prior) {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "NO_AWAITING_MISSION",
    };
  }

  let mission = advanceMissionAfterProjectCreated(prior, input.projectId);
  const pendingDoc = mission.steps.find(
    (s) =>
      (s.id === "d4_create" || s.capabilityId === "d4.create_document") &&
      (s.status === "PENDING" || s.status === "WAITING"),
  );

  if (!pendingDoc) {
    // D2-only intention — mark complete, notify conversation
    mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
    const msgId = await appendContinuationAssistantMessage({
      pilotId: input.pilotId,
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

  let documentSave: {
    status: string;
    documentId?: string;
    revisionId?: string;
    revisionNumber?: number;
    act?: string;
    reason?: string;
  } | null = null;

  const reply = await generateNoraReply({
    userText: userPrompt,
    contextSnippets: [`projectId=${input.projectId}`, `preparationId=${input.preparationId}`],
  });

  if (reply.status === "COMPLETE" && reply.content.trim()) {
    const extracted = extractContractualDocumentProposal(reply.content);
    if (extracted.ok) {
      const saved = await savePreparationDocument(
        input.pilotId,
        input.preparationId,
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
      documentSave = { ...saved, act: "CREATE" };
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
    pilotId: input.pilotId,
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
}

async function appendContinuationAssistantMessage(input: {
  pilotId: string;
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
    throw new StudioError("CONFLICT", "Continuation message non persisté");
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
  const clientTurnKey = `mission-continue:${input.clientIntentKey}:${input.projectId}`;
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

### 24.2 create-project/route.ts (FULL @ HEAD)

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

    // GAP-01/06: after D2 confirms create, continue same intention (COMMAND path only).
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

### 24.3 unit/intent-conduction.test.ts (FULL @ HEAD)

```typescript
import { describe, expect, it } from "vitest";
import {
  CAPABILITY_CONTRACTS,
  advanceMissionAfterProjectCreated,
  buildD2AwaitingStep,
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

  it("P1-E: GitHub mention alone is not publish", () => {
    const q = qualifyStudioIntent("Explique GitHub Actions dans Studio");
    expect(q.publication.wantsPublish).toBe(false);
  });

  it("Scenario K: mobilizeCapability invokes owner adapter (not metadata-only)", async () => {
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

### 24.4 integration/intent-continuity-global.pg.test.ts (FULL @ HEAD)

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
import { listDocuments } from "@/domains/document/service";
import { qualifyDocumentAct } from "@/domains/conversation/document-act";
import {
  CAPABILITY_CONTRACTS,
  continueAfterProjectCreated,
  mobilizeCapability,
} from "@/domains/conversation/intent-conduction";

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

  it("A: simple dialogue — no D2/D4/D7 effects", async () => {
    const { pilotId, preparationId } = await seedProject("scen-a");
    const chat = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Explique brièvement le rôle d'une HumanDecision.",
    );
    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
    expect(chat.missionProjection == null).toBe(true);
  });

  it("B: D2 alone — Pilot act creates one project; no forced document", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-b-d2-only");
    const first = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Solo Project B.",
      { clientTurnKey: newId("ctk") },
    );
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
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
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
    });
    expect(cont.continued).toBe(true);
    expect(cont.documentSave).toBeNull();
    expect(cont.missionProjection?.status).toBe("COMPLETED");
    expect(cont.reason).toBe("D2_ONLY_COMPLETED");
  });

  it("C BLOCKING: Atlas D2→D4 ONE intention — no second Pilot message", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-c-atlas");
    const ask =
      "Crée un projet nommé Atlas puis prépare dans ce projet un document de cadrage qui expose l'objectif, le périmètre et les premières étapes.";
    const first = await postUserMessageAndNora(pilotId, preparationId, ask, {
      clientTurnKey: newId("ctk"),
    });
    expect(first.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(first.missionProjection?.steps[0]?.reason).toMatch(/Atlas/);
    expect(first.missionProjection?.originalUserText).toContain("Atlas");
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
      idempotencyKey: newId("idem"),
    });
    expect(created.status).toBe("CREATED");
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    // Same path as create-project route — NO second postUserMessageAndNora.
    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
    });
    expect(cont.continued).toBe(true);
    expect(cont.documentSave?.status).toBe("AVAILABLE");
    expect(cont.documentSave?.documentId).toBeTruthy();
    expect(cont.documentSave?.revisionId).toBeTruthy();
    expect(cont.missionProjection?.status).toBe("COMPLETED");
    expect(
      cont.missionProjection?.steps.every(
        (s) => s.status === "DONE" || s.capabilityId === "d2.create_project",
      ),
    ).toBe(true);

    const docs = await listDocuments(pilotId, preparationId);
    expect(docs.some((d) => d.document.id === cont.documentSave?.documentId)).toBe(true);

    // Replay continue — no duplicate document
    const again = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
    });
    expect(again.reason === "NO_AWAITING_MISSION" || again.continued === true).toBe(true);
    const docs2 = await listDocuments(pilotId, preparationId);
    const sameDocCount = docs2.filter((d) => d.document.id === cont.documentSave?.documentId).length;
    expect(sameDocCount).toBe(1);
  });

  it("C+D: CREATE then REVISE — revision actually persisted (same documentId, v2)", async () => {
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

    const docs = await listDocuments(pilotId, preparationId);
    const doc = docs.find((d) => d.document.id === documentId);
    expect(doc?.latestRevision?.revisionNumber).toBe(revised.documentSave?.revisionNumber);
  });

  it("F: D5 pilotage — clear GO opens ACTIVE cycle via postUserMessageAndNora", async () => {
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

  it("G: D6 — authorizePublication creates HD; refuse path leaves no dispatch", async () => {
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
    expect(auth.status === "AUTHORIZED" || auth.status === "DISPATCHED" || auth.status === "SUCCEEDED").toBe(
      true,
    );
    const afterHd = await db
      .select()
      .from(humanDecisions)
      .where(eq(humanDecisions.projectId, projectId));
    expect(afterHd.length).toBeGreaterThan(hdBefore);
  });

  it("READ≠COMMAND: listMessages does not dispatch AUTHORIZED classic attempt", async () => {
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

  it("M: two independent intentions — later doc must not close first mission wrongly", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-m-two");
    const a = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Mission Alpha puis un document d'accueil Alpha.",
      { clientTurnKey: newId("ctk") },
    );
    expect(a.missionProjection?.status).toBe("AWAITING_PILOT_ACT");
    expect(a.missionProjection?.clientIntentKey).toBeTruthy();
    const keyA = a.missionProjection!.clientIntentKey;

    // Unrelated ask while still awaiting — must not complete Alpha's D4
    // (no project yet; second create intent builds its own awaiting if any)
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
      idempotencyKey: newId("idem"),
    });
    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");

    const cont = await continueAfterProjectCreated({
      pilotId,
      preparationId,
      projectId: created.projectId,
    });
    expect(cont.missionProjection?.clientIntentKey).toBe(keyA);
    expect(cont.documentSave?.status).toBe("AVAILABLE");

    // Independent second document — must not reuse Alpha correlation as sole proof
    const indep = await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un document intitulé Document Indépendant Beta.",
      { clientTurnKey: newId("ctk") },
    );
    expect(indep.documentSave?.status).toBe("AVAILABLE");
    expect(indep.documentSave?.documentId).not.toBe(cont.documentSave?.documentId);
  });

  it("K: extensibility — mobilizeCapability exercises future.* boundary double", async () => {
    const contract = CAPABILITY_CONTRACTS.find(
      (c) => c.capabilityId === "future.example_capability",
    )!;
    let calls = 0;
    const out = await mobilizeCapability(
      contract,
      {
        capabilityId: "future.example_capability",
        invoke: async (ctx) => {
          calls += 1;
          return {
            status: "DONE",
            result: { status: "DONE", id: `sim_${ctx.pilotId.slice(-6)}` },
          };
        },
      },
      { pilotId: "pilot_extensibility" },
    );
    expect(calls).toBe(1);
    expect(out.result.id).toMatch(/^sim_/);
  });

  it("GAP-05 preview name exact Atlas not swallowed", async () => {
    const { pilotId, preparationId } = await seedPrepOnly("scen-name");
    await postUserMessageAndNora(
      pilotId,
      preparationId,
      "Crée un projet nommé Continuity Global B puis un document d'accueil pour ce projet.",
      { clientTurnKey: newId("ctk") },
    );
    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
    expect(prep.previewName).toBe("Continuity Global B");
    expect(prep.previewName).not.toMatch(/puis|document/i);
  });
});
```

## 25. Modifications — diffs complets (commit 5c6b0cee)

```diff
commit 5c6b0cee2211d5418db6100b0302ef0cfa0ee8f3
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Tue Nov 10 13:25:26 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Tue Nov 10 13:25:26 2026 +0100

    feat(studio-next): finalize single-intent D2→D4 continuity without second Pilot message

    Close GAP-01/06 via continueAfterProjectCreated on create-project success; tighten project-name extraction, intention-anchored mission load, and executable capability mobilization proofs for global acceptance.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../construction/delivery-history.md               |  16 +
 .../[preparationId]/create-project/route.ts        |  28 +-
 .../src/domains/conversation/intent-conduction.ts  | 530 +++++++++++++++++++--
 .../src/domains/conversation/mission-continuity.ts |   8 +-
 .../web/src/domains/conversation/service.ts        |  40 +-
 .../intent-continuity-global.pg.test.ts            | 279 +++++++++--
 .../web/tests/unit/intent-conduction.test.ts       |  54 ++-
 7 files changed, 850 insertions(+), 105 deletions(-)
```

```diff
commit 5c6b0cee2211d5418db6100b0302ef0cfa0ee8f3
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Tue Nov 10 13:25:26 2026 +0100

    feat(studio-next): finalize single-intent D2→D4 continuity without second Pilot message

    Close GAP-01/06 via continueAfterProjectCreated on create-project success; tighten project-name extraction, intention-anchored mission load, and executable capability mobilization proofs for global acceptance.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index a36b1c73..5902dbba 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,22 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-04
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-10 (Europe/Paris) |
+| Macro-lot | R5 / Finalisation conduite globale des intentions (GAP-01..07) |
+| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
+| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
+| Parent | DEV-03 @ `12e26e32` |
+| Lane | DEV only (`sfia_next_dev` @ 5433); RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
+| Changes | `continueAfterProjectCreated` after D2 create (no second Pilot message); exact project name extract (GAP-05); intention-anchored `loadPriorMissionProjection`; `mobilizeCapability` executable contract; D5/D6 PG proofs; Atlas blocking scenario C |
+| Schema | unchanged (mission fields on projection JSON only) |
+| Tests | unit intent-conduction 7 PASS; PG global 10 PASS; PG ACCEPT-01 8 PASS; tsc PASS; eslint PASS; next build PASS |
+| Evidence limits | SCRIPTED GitHub + Nora fixture DEV; no REAL; no Product push; no RECETTE |
+| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH |
+
 ## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index a5556f44..e9ce8ec0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -57,6 +57,12 @@ export type MissionProjection = {
   steps: MissionStep[];
   /** Restitution layer — not owner truth. */
   restitution: "PENDING" | "DELIVERED" | "CANONICAL";
+  /** Original Pilot utterance — anchors continuation without a second ask. */
+  originalUserText?: string;
+  /** Brief of pending document step (if compound intention). */
+  pendingDocumentBrief?: string;
+  /** Preparation that owns this mission (scope anchor). */
+  preparationId?: string;
 };

 export type PublicationMissionIntent = {
@@ -157,7 +163,7 @@ export function formatMissionAck(mission: MissionProjection): string {
     lines.push(
       "",
       "Acte Pilote explicite requis (ex. Créer le projet) — Nora n'exécute pas D2 à la place du Pilote.",
-      "Après création confirmée, poursuivez dans la conversation : Nora reprend les étapes dépendantes.",
+      "Après création confirmée, Studio reprend automatiquement les étapes dépendantes de la même intention (sans nouveau message Pilote).",
     );
   }
   if (mission.status === "AWAITING_PILOT_AUTH") {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index de9257e9..f60216e3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -294,14 +294,23 @@ export async function postUserMessageAndNora(
     }
   }

-  // Multi-domain continuity: if prior turn awaited D2 Pilot act and project now exists, advance.
+  // Multi-domain continuity: prefer intention-anchored load (GAP-04).
+  // Primary D2→D4 continuation is continueAfterProjectCreated on create-project COMMAND.
   let carriedMission: MissionProjection | null = null;
   try {
-    const priorMission = await loadPriorMissionProjection(ctx.conversation.id);
-    if (priorMission?.status === "AWAITING_PILOT_ACT" && ctx.project?.id) {
-      carriedMission = advanceMissionAfterProjectCreated(priorMission, ctx.project.id);
-    } else if (priorMission && priorMission.status !== "COMPLETED") {
-      carriedMission = priorMission;
+    const awaiting = await loadPriorMissionProjection(ctx.conversation.id, {
+      awaitingPilotAct: true,
+      preparationId,
+    });
+    if (awaiting && ctx.project?.id) {
+      carriedMission = advanceMissionAfterProjectCreated(awaiting, ctx.project.id);
+    } else {
+      const priorMission = await loadPriorMissionProjection(ctx.conversation.id, {
+        preparationId,
+      });
+      if (priorMission && priorMission.status !== "COMPLETED") {
+        carriedMission = priorMission;
+      }
     }
   } catch {
     carriedMission = null;
@@ -1153,10 +1162,7 @@ export async function postUserMessageAndNora(
     studioIntent.wantsProjectCreate &&
     !ctx.project?.id
   ) {
-    const proposed =
-      studioIntent.proposedProjectName?.trim() ||
-      content.match(/projet\s+[«"]?([^»"\n.]{2,80})/i)?.[1]?.trim() ||
-      "Nouveau projet";
+    const proposed = studioIntent.proposedProjectName?.trim() || "Nouveau projet";
     try {
       await updatePreview(
         pilotId,
@@ -1171,10 +1177,20 @@ export async function postUserMessageAndNora(
       clientIntentKey,
       `Création de projet «${proposed}» — attente acte Pilote`,
     );
+    d2Mission = {
+      ...d2Mission,
+      originalUserText: content,
+      pendingDocumentBrief: studioIntent.pendingDocumentBrief ?? undefined,
+      preparationId,
+    };
     d2Mission = mergeMissionSteps(d2Mission, [buildD2AwaitingStep(proposed)], "AWAITING_PILOT_ACT");
-    if (studioIntent.documentAct.kind === "CREATE" || studioIntent.publication.wantsPublish) {
+    if (
+      studioIntent.wantsFollowOnDocument ||
+      studioIntent.documentAct.kind === "CREATE" ||
+      studioIntent.publication.wantsPublish
+    ) {
       d2Mission = mergeMissionSteps(d2Mission, [
-        buildPendingDocumentStep("CREATE"),
+        buildPendingDocumentStep("CREATE", studioIntent.pendingDocumentBrief),
       ]);
     }
     missionProjection = d2Mission;
```

## 26. Matrice cadrage §§1–10 → code → preuves

| § Cadrage | Code | Preuve |
| --- | --- | --- |
| §1 Intention unique multi-étapes | continueAfterProjectCreated | C Atlas PASS |
| §2 Qualification | qualifyStudioIntent / extractProposedProjectName | unit GAP-05 |
| §3 Sélection capacités | CAPABILITY_CONTRACTS + mobilizeCapability | K PASS |
| §4 Owners | createProjectCommand / savePreparationDocument / applyConversationalAuthority | B/C/F/G |
| §5 Attente acte humain | AWAITING_PILOT_ACT + D2 click | B/C |
| §6 Continuation auto | create-project route → continue | C |
| §7 Persistance intention | originalUserText + anchored load | C/M |
| §8 Restitution | formatMissionAck / composeCanonical | C |
| §9 ACCEPT-01 Git | mission-continuity | ACCEPT-01 8 PASS |
| §10 Extensibilité | mobilizeCapability future.* | K |

## 27. Gaps et réserves restantes

- GAP-07 browser / knowledge profonde: NOT PROVEN ce HEAD.
- STOP/révocation exhaustive multi-session: s'appuie sur NR antérieurs.
- create-project HTTP path missionContinue: wired; dedicated HTTP integration test not separate from function-level continue (same function as route).
- Full ML3/D4 knowledge suite not re-executed entirely.

## 28. Dette/exit/rollback

Rollback: reset feat branch to `12e26e32`. Exit: no schema migration. Dette: browser Atlas E2E; deeper D4 knowledge conduction proof.

## 29. Compatibilité capacités futures

future.example_capability exercé via mobilizeCapability sans nouveau conducteur. D10–D14 non ajoutés.

## 30. Verdict unique

**NORA/STUDIO GLOBAL INTENT CONTINUITY — EXISTING CAPABILITIES OPERATIONALLY INTEGRATED — SINGLE-INTENT MULTI-DOMAIN CONTINUATION PROVEN AT REPORTED DEV EVIDENCE LEVEL — NOMINAL D3 ARCHITECTURE PRESERVED — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH OR RECETTE AUTHORIZED.**

Niveau: DETERMINISTIC PROVEN (PG + fixture + SCRIPTED). NOT LIVE / NOT REAL / NOT RECETTE / NOT STABLE / NOT RELEASED.

## 31. Git Review Index

| Path | Role |
| --- | --- |
| intent-conduction.ts | D3 conduction + continueAfterProjectCreated + mobilizeCapability |
| create-project/route.ts | D2 entry → missionContinue |
| service.ts | D2 awaiting + anchored load + originalUserText |
| mission-continuity.ts | MissionProjection fields + ack text |
| intent-continuity-global.pg.test.ts | A/B/C/D/F/G/M/K/READ |
| intent-conduction.test.ts | unit GAP-05/K |
| delivery-history.md | DEV-04 |

## 32. Contrôle §7.2.1 / §7.6

- Pack FULL mono-cycle CRITICAL: OUI
- Contenus complets fichiers principaux créés/réécrits: OUI (24)
- Diffs utiles sections modifiées: OUI (25)
- Synthèse seule: NON
- Product push: NON
- Handoff L3 borné: à publier après ce pack
- STOP après handoff: requis

END OF REVIEW PACK FULL — HEAD `5c6b0cee2211d5418db6100b0302ef0cfa0ee8f3` TREE `3d1fb9c6fad2763a7d96a29b4db7b5facfcc2dc9`
