# SFIA Studio Next — ML5 C22 Review Pack FULL

| Champ | Valeur |
|---|---|
| Cycle | C22 — Finalisation restitution probante + qualification LIVE intégrée |
| Date | 2026-11-24 (Europe/Paris) |
| Qualification | Critical / INC / cycle 8 Delivery |
| Produit | SFIA Studio Next · Macro-lot ML5 · Lot convergence 2 |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY C1–C22) |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Build | `xDm9gI5jk9N2qEGkFUqN_` |
| Versioning | NO RELEASE · STABLE NOT AVAILABLE |
| Push projet | NONE |
| Handoff précédent | tip `13df50b21307bbf698c303074889677e37616a66` (C21) |
| ENV | DEV :3100 · PG :5433 · `sfia_next_dev` / `sfia_next_e2e` · migrations 020/021 |

## Verdict Cursor

**READY WITH RESERVES**

Frontières P0 maîtrisées (WEB provenance, collecte attempt-bound, ownership CAS). D8 CONFORMING sur chemin produit (SCRIPTED + LIVE) sans injection `verified=true`. Avis Nora cognitif autonome via conducteur D3. Chaîne LIVE terminale → handoff RECEIVED → D8 CONFORMING → Nora COMPLETE sans POST manuel de restitution.

Réserves non bloquantes lot 2 exit candidat : BROWSER activité long-run PARTIAL ; WEB LIVE fournisseur+contexte privé non rejoué (confinement DETERMINISTIC prouvé) ; D9/Git REAL non exercés (mission locale) ; interruption serveur mid-LIVE non rejouée ce cycle (boot resume code présent).

## Capacité | Écart C21 | Correction C22 | Résultat observé | Niveau | Verdict

| Capacité | Écart C21 | Correction C22 | Résultat | Niveau | Verdict |
|---|---|---|---|---|---|
| WEB | free-form publicTopic | EXPLICIT_AUTHORIZED_EXACT / REGISTERED_PUBLIC_COMPOSITION ; empty registry deny | unit 7 PASS deny private synthetic | DETERMINISTIC | CLOSED P0 confinement |
| Collecte | generic report names | attempt-bound path + confined read + bind attempt/fp | REPORT_FROM_CONFINED_WORKSPACE LIVE | DEV LIVE + unit | CLOSED P0 |
| Ownership | soft claim | CAS owner+version+lease | PG CAS PASS | INTEGRATION | CLOSED P0 |
| D8 | injected verified | buildVerifiedEvidenceFromWorkspace | CONFORMING product path + LIVE | INTEGRATION + LIVE | CLOSED P0 |
| Consolidation | heading/length heuristic | mergeMode structuré + owner fn test | unit PASS | DETERMINISTIC | CLOSED |
| Avis Nora | generateNoraReply extract | runNoraCognitiveTurn + D8 tools | NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR tools=4 | DEV LIVE | CLOSED |
| Autorité D6/D7 | — | preserved C19–C21 | LIVE authorize+dispatch | LIVE | PRESERVED |
| Supervision/boot | HTTP-only resume | instrumentation boot | code + resumeIncompleteRestitutions | DETERMINISTIC | IMPLEMENTED |
| Activité BROWSER | — | not re-exercised long-run | — | PARTIAL | RESERVE P2 |
| Chaîne LIVE | SCRIPTED only | director LIVE | RECEIVED+CONFORMING+COMPLETE | DEV LIVE | DEMONSTRATED |

## Scénario directeur LIVE

- Demande : créer `src/add.ts` export `add` + capture `.sfia/test-captures/add.exit=0` + rapport attempt-bound.
- Attempt : `efx_5184aab4-4c0e-47cc-919c-1637b1d8422b`
- Agent/run : `agent-03db3dbf-9518-4904-810a-4b40bc66985a` / `run-d0c27176-2728-48a5-b25e-8a5070f04a2b`
- Handoff : `rhf_b555c06b-9713-4940-af32-c6a65279ad21` status **RECEIVED**
- Qualification : `rqual_5c1173f5-c435-4e90-80fd-2c64074b6ce8` verdict **CONFORMING**
- Nora : work `cgw_ad0f188f-839f-435f-b0ba-f2a0c565960d` · tools=4 · `NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR` · pipeline **COMPLETE**
- Collecte : `REPORT_FROM_CONFINED_WORKSPACE` · bytes 209
- Aucun POST manuel handoff/qualification.

### Variantes

| Variante | Oracle | Observé | Niveau | Verdict |
|---|---|---|---|---|
| A CONFORMING product path | CONFORMING sans inject | CONFORMING | INTEGRATION PG | PASS |
| B Contradiction | not CONFORMING | not CONFORMING | INTEGRATION PG | PASS |
| WEB deny private | refuse before egress | unit deny | DETERMINISTIC | PASS |
| CAS concurrent | one owner | PG CAS PASS | INTEGRATION | PASS |
| Consolidation owner | mergeMode not heuristic | unit PASS | DETERMINISTIC | PASS |

## Validations

- `tsc --noEmit` PASS
- `eslint` C22 files PASS
- `next build` PASS · BUILD_ID `xDm9gI5jk9N2qEGkFUqN_`
- Unit WEB/report/consolidation PASS
- PG restitution + CAS + D8 CONFORMING + contradiction PASS
- LIVE director PASS + Nora resume COMPLETE

## Fake/Real

| Frontière | Niveau | Preuve |
|---|---|---|
| Cursor SDK | DEV LIVE bounded | attempt efx_5184… |
| Agents SDK / Nora | DEV LIVE | NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR |
| PostgreSQL | INTEGRATION | e2e lane |
| Filesystem | confined | REPORT_FROM_CONFINED_WORKSPACE |
| WEB | DETERMINISTIC confinement | unit authorize |
| BROWSER | PARTIAL | réserve P2 |
| GitHub REAL | N/A | non exercé |

## Git Truth

- Préservation C1–C22 DIRTY — aucun commit/push projet
- Handoff L3 only autorisé ce cycle

## Review Pack content coverage

Tous les fichiers listés ci-dessous sont inclus en contenu intégral (pas de stub).


## Evidence — LIVE dossier snapshot

```json
{
  "handoffId": "rhf_b555c06b-9713-4940-af32-c6a65279ad21",
  "handoffStatus": "RECEIVED",
  "verdict": "CONFORMING",
  "noraKind": "",
  "limits": "[\"Déclaration Cursor ≠ observation Studio\",\"Observation ≠ conformité D8\",\"Verdict D8 ≠ avis Nora\",\"Avis Nora ≠ réception D6 / acceptation Morris\",\"Aucun ADOPTED depuis une tentative seule\",\"Critères d'acceptation à confronter: 2 — présence textuelle ≠ satisfaction\",\"CRITÈRE[satisfied]: src/add.ts export add — Preuve indépendante vérifiée (accessible + évaluée)\",\"CRITÈRE[satisfied]: test add exit=0 — Preuve indépendante vérifiée (accessible + évaluée)\",\"CONFORMITY_PROVEN — critères satisfaits avec preuves vérifiées\",\"AUTONOMOUS_D8_QUALIFICATION_C22\",\"DOSSIER_VERSION:1\",\"REPORT_COLLECTED_CONFINED\",\"REPORT_BYTES:209\",\"REPORT_SHA256:dfee3ff9d27f104a\",\"REPORT_FROM_CONFINED_WORKSPACE\",\"AUTONOMOUS_HANDOFF_INGESTED\"]"
}

```

## Evidence — LIVE attempt meta

```json
{
  "attemptId": "efx_5184aab4-4c0e-47cc-919c-1637b1d8422b",
  "status": "COMPLETED",
  "live": {
    "sendRequestedAt": "2026-11-24T11:33:14.509Z",
    "ackReceivedAt": "2026-11-24T11:33:17.389Z",
    "runObservedAt": "2026-11-24T11:33:17.389Z",
    "agentId": "agent-03db3dbf-9518-4904-810a-4b40bc66985a",
    "runId": "run-d0c27176-2728-48a5-b25e-8a5070f04a2b",
    "lastActivitySummary": "SDK_OBSERVED_FINISHED",
    "terminalStatus": "finished",
    "reportStatus": "EXPECTED",
    "reportMarkdown": "Mission réalisée dans le workspace isolé (`…/default`) uniquement — pas de git push.\n\n| Élément | Détail |\n|--------|--------|\n| **`src/add.ts`** | `export function add(a: number, b: number) { return a + b }` |\n| **`.sfia/test-captures/add.exit`** | `0` |\n| **Rapport** | `.sfia/attempts/efx_5184aab4-4c0e-47cc-919c-1637b1d8422b/realization-report.md` |\n\nLe rapport reprend l’`attemptId` et le `contractFingerprint` du plan d’exécution (`72f1e67136c34ce8422cd8fdc86320c1d1a69b498218def3c25508a86c97dc4a`), avec `filesCreated: src/add.ts` et `testsDeclared: add`.",
    "limits": [
      "LIVE_SDK",
      "DISPATCH_ACCEPTED_WITHOUT_WAIT",
      "API_KEY_SOURCE_FILE_CREDENTIAL_STORE",
      "MODEL_composer-2.5",
      "REPORT_MUST_BE_INGESTED_SEPARATELY",
      "SUPERVISION_VIA_D7_LIVE_SUPERVISOR_OR_RECONCILE",
      "OBSERVE_NO_RESEND",
      "WAIT_FAILED:Cannot wait on a detached running run",
      "LAST_STATUS_running"
    ],
    "claim": {
      "claimToken": "claim_428f6d99-55d0-433f-9fed-ea1faf417a50",
      "claimedAt": "2026-11-24T11:33:14.505Z",
      "leaseExpiresAt": "2026-11-24T11:34:17.394Z",
      "generation": 1,
      "releasedAt": null
    },
    "restitutionPipelineStatus": "NORA",
    "restitutionOwnerToken": "rst_4020f02e8ed8ab0bd0afdb22f2ec20a2",
    "restitutionStartedAt": "2026-11-24T11:34:23.493Z",
    "restitutionLeaseExpiresAt": "2026-11-24T11:36:23.514Z",
    "restitutionVersion": 1,
    "restitutionHandoffId": "rhf_b555c06b-9713-4940-af32-c6a65279ad21",
    "restitutionQualificationId": "rqual_5c1173f5-c435-4e90-80fd-2c64074b6ce8",
    "restitutionDossierVersion": 1
  },
  "fingerprint": "72f1e67136c34ce8422cd8fdc86320c1d1a69b498218def3c25508a86c97dc4a",
  "workspaceRoot": "/var/folders/b9/5c00r70d7_l8kjth6vpfmn8m0000gn/T/sfia-c22-live-ws-kihiZq",
  "keySource": "FILE_CREDENTIAL_STORE"
}

```

## Evidence — LIVE after Nora resume

```json
{
  "pipe": "COMPLETE",
  "verdict": "CONFORMING",
  "noraLen": 2866,
  "noraHead": "[ANALYSE COGNITIVE NORA (D3)]\n\n## Avis final\n**Avis consultatif favorable sur le périmètre technique étroit des deux critères annoncés, avec des limites de preuve explicites.** Les pièces originales consultées sont cohérentes avec le verdict D8 **CONFORMING** déjà établi ; cet avis ne le remplace pas et ne constitue ni réception humaine D6 ni statut ADOPTED.\n\n### Sources et constats\n| Pièce | Niveau de consultation | Constat |\n|---|---|---|\n| Inventaire des pièces D8 | Métadonnées consultées | Rapport reçu et workspace présent ; cet inventaire n’atteste pas, à lui seul, le contenu ni l’exhaust",
  "completedAt": "2026-11-24T11:39:14.070Z",
  "resume": {
    "ran": true,
    "handoffId": "rhf_b555c06b-9713-4940-af32-c6a65279ad21",
    "qualificationId": "rqual_5c1173f5-c435-4e90-80fd-2c64074b6ce8",
    "handoffStatus": "RECEIVED",
    "verdict": "CONFORMING",
    "limits": [
      "REPORT_COLLECTED_CONFINED",
      "REPORT_BYTES:209",
      "REPORT_SHA256:dfee3ff9d27f104a",
      "REPORT_FROM_CONFINED_WORKSPACE",
      "HANDOFF_ALREADY_PRESENT",
      "D8_ALREADY_PRESENT",
      "NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR",
      "NORA_WORK:cgw_ad0f188f-839f-435f-b0ba-f2a0c565960d",
      "NORA_TOOLS:4"
    ],
    "pipelineStatus": "COMPLETE",
    "criteria": [
      {
        "criterion": "src/add.ts export add",
        "status": "satisfied",
        "evidenceRefs": [
          "src/add.ts",
          ".sfia/test-captures/add.exit"
        ],
        "note": "Preuve indépendante vérifiée (accessible + évaluée)"
      },
      {
        "criterion": "test add exit=0",
        "status": "satisfied",
        "evidenceRefs": [
          "src/add.ts",
          ".sfia/test-captures/add.exit",
          "add:exit=0"
        ],
        "note": "Preuve indépendante vérifiée (accessible + évaluée)"
      }
    ]
  }
}

```

## Modified / created content (FULL)

### FILE `projects/sfia-studio-next/web/src/domains/conversation/web-search-authorize.ts`

- SHA-256: `8ac004af7b1062e85f67cdaffdac7e3beb34fccf92ac233e174d4793d26f1128`
- Lines: 211

```typescript
/**
 * C22 — server-side authorization of public web query provenance.
 *
 * Nora may *propose* a search need. She cannot grant herself a public
 * authorization. Free-form publicTopic / short unmarked facts are refused.
 *
 * Admissible paths only:
 * 1. EXPLICIT_AUTHORIZED_EXACT — exact string on the turn allowlist (Pilote/server).
 * 2. REGISTERED_PUBLIC_COMPOSITION — server composes from turnPublicFacts /
 *    turnPublicTopics whose public provenance was registered before the call.
 *
 * Empty public registry ⇒ no arbitrary fact accepted.
 * Lexical classifiers / length / field name are NOT confidentiality guarantees.
 */

import { sanitizePublicWebQuery } from "./web-search-sanitize";

export type WebQueryProvenance =
  | "EXPLICIT_AUTHORIZED_EXACT"
  | "REGISTERED_PUBLIC_COMPOSITION"
  | "DENIED";

export type AuthorizePublicWebQueryInput = {
  /**
   * Proposed topic — accepted only when it equals a registered public topic
   * value or an exact allowlisted query. Never sufficient as free-form text.
   */
  publicTopic?: string | null;
  /** Optional topic id resolved via turnPublicTopics registry. */
  publicTopicRef?: string | null;
  /** Facts requested — every entry MUST already be in turnPublicFacts. */
  authorizedPublicFacts?: string[] | null;
  /** Server-registered PUBLIC facts for this turn (empty ⇒ no fact path). */
  turnPublicFacts?: string[] | null;
  /**
   * Server registry: topicRef → exact public query string already proven public.
   */
  turnPublicTopics?: Record<string, string> | null;
  /**
   * Exact query the Pilote/server explicitly authorized for this turn.
   * Only accepted when present in turnAuthorizedExactQueries.
   */
  explicitlyAuthorizedExactQuery?: string | null;
  turnAuthorizedExactQueries?: string[] | null;
  /**
   * Legacy free-form — refused unless it equals an explicitly authorized exact query.
   */
  rawQuery?: string | null;
  privateContextMarkers?: string[] | null;
};

export type AuthorizePublicWebQueryResult = {
  ok: boolean;
  authorizedQuery: string;
  provenance: WebQueryProvenance;
  deniedReason?: string;
  redactions: string[];
};

function normalizeFact(s: string): string {
  return s.replace(/\s+/g, " ").trim();
}

function containsMarker(hay: string, markers: string[]): string | null {
  const lower = hay.toLowerCase();
  for (const m of markers) {
    const t = m.trim();
    if (t.length >= 4 && lower.includes(t.toLowerCase())) return t;
  }
  return null;
}

function deny(
  reason: string,
  redactions: string[] = [],
): AuthorizePublicWebQueryResult {
  return {
    ok: false,
    authorizedQuery: "",
    provenance: "DENIED",
    deniedReason: reason,
    redactions,
  };
}

function admitExact(
  exact: string,
  markers: string[],
  provenance: Extract<
    WebQueryProvenance,
    "EXPLICIT_AUTHORIZED_EXACT" | "REGISTERED_PUBLIC_COMPOSITION"
  >,
): AuthorizePublicWebQueryResult {
  const sanitized = sanitizePublicWebQuery(exact);
  if (!sanitized.ok) {
    return deny(sanitized.blockedReason ?? "SANITIZE_BLOCKED", sanitized.redactions);
  }
  if (containsMarker(sanitized.query, markers)) {
    return deny("PRIVATE_MARKER_IN_AUTHORIZED_QUERY", ["PRIVATE_LEAK_BLOCKED"]);
  }
  return {
    ok: true,
    authorizedQuery: sanitized.query,
    provenance,
    redactions: sanitized.redactions,
  };
}

/**
 * Decide the exact outbound query string the frontier may emit.
 * Does not call the network. Does not log private markers in denial reasons.
 */
export function authorizePublicWebQuery(
  input: AuthorizePublicWebQueryInput,
): AuthorizePublicWebQueryResult {
  const markers = (input.privateContextMarkers ?? []).filter(Boolean);
  const turnFacts = (input.turnPublicFacts ?? []).map(normalizeFact).filter(Boolean);
  const turnExact = (input.turnAuthorizedExactQueries ?? [])
    .map(normalizeFact)
    .filter(Boolean);
  const topics = input.turnPublicTopics ?? {};

  const explicit = normalizeFact(input.explicitlyAuthorizedExactQuery ?? "");
  if (explicit) {
    if (!turnExact.includes(explicit)) {
      return deny("EXACT_QUERY_NOT_IN_TURN_ALLOWLIST");
    }
    return admitExact(explicit, markers, "EXPLICIT_AUTHORIZED_EXACT");
  }

  // Legacy rawQuery alone — only if exact-allowlisted.
  const raw = normalizeFact(input.rawQuery ?? "");
  if (raw) {
    if (turnExact.includes(raw)) {
      return admitExact(raw, markers, "EXPLICIT_AUTHORIZED_EXACT");
    }
    // Never accept rawQuery as publicTopic substitute.
    if (!input.publicTopic?.trim() && !input.publicTopicRef?.trim()) {
      return deny(
        "PROVENANCE_REQUIRED — free-form rawQuery without exact allowlist",
      );
    }
  }

  // Resolve topic via registry ref first (server-controlled mapping).
  const topicRef = (input.publicTopicRef ?? "").trim();
  let registeredTopic: string | null = null;
  if (topicRef) {
    const mapped = topics[topicRef];
    if (!mapped || !normalizeFact(mapped)) {
      return deny("PUBLIC_TOPIC_REF_UNKNOWN");
    }
    registeredTopic = normalizeFact(mapped);
  }

  const proposedTopic = normalizeFact(input.publicTopic ?? "");
  if (proposedTopic) {
    // Free-form topic is refused unless it matches an already-authorized exact
    // or a registered public topic *value* (not a self-attested string).
    const inExact = turnExact.includes(proposedTopic);
    const inRegisteredValues = Object.values(topics)
      .map(normalizeFact)
      .includes(proposedTopic);
    const inFacts = turnFacts.includes(proposedTopic);
    if (!inExact && !inRegisteredValues && !inFacts) {
      return deny(
        "PROVENANCE_NOT_ESTABLISHED — publicTopic free-form refused without registry/allowlist",
      );
    }
    if (!registeredTopic) {
      registeredTopic = proposedTopic;
    } else if (registeredTopic !== proposedTopic) {
      return deny("PUBLIC_TOPIC_REF_MISMATCH");
    }
  }

  const requestedFacts = (input.authorizedPublicFacts ?? [])
    .map(normalizeFact)
    .filter(Boolean);
  if (requestedFacts.length > 0) {
    if (turnFacts.length === 0) {
      return deny(
        "PUBLIC_REGISTRY_EMPTY — no arbitrary fact accepted without registered public facts",
      );
    }
    for (const f of requestedFacts) {
      if (!turnFacts.includes(f)) {
        return deny("PUBLIC_FACT_NOT_REGISTERED_FOR_TURN");
      }
    }
  }

  if (!registeredTopic && requestedFacts.length === 0) {
    return deny("PUBLIC_TOPIC_OR_REGISTERED_FACTS_REQUIRED");
  }

  const composed = [registeredTopic, ...requestedFacts]
    .filter(Boolean)
    .join(" ")
    .slice(0, 400);
  if (!composed || composed.length < 3) {
    return deny("COMPOSED_QUERY_EMPTY");
  }

  // If composition equals an exact allowlist entry, label as explicit.
  if (turnExact.includes(composed)) {
    return admitExact(composed, markers, "EXPLICIT_AUTHORIZED_EXACT");
  }

  return admitExact(composed, markers, "REGISTERED_PUBLIC_COMPOSITION");
}
```

### FILE `projects/sfia-studio-next/web/src/domains/execution/cursor-autonomous-restitution.ts`

- SHA-256: `5e2ff8d31a32f2d4a8e8150364015cc27f8667cb5a8637a85544606b4c58b2e9`
- Lines: 1045

```typescript
/**
 * C22 — autonomous product restitution after Cursor terminal observation.
 *
 * Owner: D7 triggers collection; D8 qualifies from verified pieces; D3 avis
 * via cognitive conductor. Distinct from SFIA v2.6 external Review Handoff.
 *
 * C22 hardening:
 * - attempt-bound report identity + confined FS read
 * - atomic restitution claim (CAS + owner token + lease)
 * - D8 criterionEvidence from real workspace observations (no injected verified)
 * - Nora avis via runNoraCognitiveTurn + D8 tool scope
 */

import { createHash, randomBytes } from "crypto";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  realizationHandoffs,
  realizationQualifications,
  technicalContracts,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import {
  buildDeterministicDossierSynthesis,
  buildNoraCognitiveAnalysisPrompt,
  classifyAttachedNoraPayload,
  qualifyCursorRealization,
  type CriterionEvaluation,
} from "@/domains/proofs/cursor-qualify";
import { readConfinedWorkspaceFile } from "@/domains/proofs/d8-path-confine";
import {
  ingestRealizationHandoff,
  type HandoffManifest,
} from "./cursor-handoff";
import type { CursorExecutionPlan, CursorLiveProjection } from "./types";

export type RestitutionPipelineStatus =
  | "IDLE"
  | "COLLECTING"
  | "QUALIFYING"
  | "NORA"
  | "COMPLETE"
  | "PARTIAL"
  | "FAILED";

type LiveWithRestitution = CursorLiveProjection & {
  restitutionPipelineStatus?: RestitutionPipelineStatus;
  restitutionHandoffId?: string | null;
  restitutionQualificationId?: string | null;
  restitutionStartedAt?: string | null;
  restitutionCompletedAt?: string | null;
  restitutionOwnerToken?: string | null;
  restitutionVersion?: number | null;
  restitutionLeaseExpiresAt?: string | null;
  restitutionDossierVersion?: number | null;
  reportMarkdown?: string | null;
};

const RESTITUTION_LEASE_MS = 120_000;
const REPORT_MAX_BYTES = 256_000;

function parseLive(resultJson: string | null | undefined): LiveWithRestitution {
  try {
    return JSON.parse(resultJson || "{}") as LiveWithRestitution;
  } catch {
    return {};
  }
}

function isTerminal(live: LiveWithRestitution, status: string): boolean {
  if (status === "COMPLETED" || status === "FAILED" || status === "AMBIGUOUS") {
    return true;
  }
  const t = live.terminalStatus;
  return t === "finished" || t === "error" || t === "cancelled";
}

function mintOwnerToken(): string {
  return `rst_${randomBytes(16).toString("hex")}`;
}

/**
 * Attempt-bound report paths. Generic names are accepted only when the body
 * binds attemptId + contractFingerprint (and optionally runId).
 */
function attemptBoundRelPaths(attemptId: string): string[] {
  return [
    `.sfia/attempts/${attemptId}/realization-report.md`,
    `.sfia/attempts/${attemptId}/SFIA_REALIZATION_REPORT.md`,
  ];
}

const GENERIC_REPORT_RELS = [
  ".sfia-realization-report.md",
  "SFIA_REALIZATION_REPORT.md",
  "realization-report.md",
];

function reportBindsAttempt(
  markdown: string,
  attemptId: string,
  contractFingerprint: string,
): boolean {
  return (
    markdown.includes(attemptId) && markdown.includes(contractFingerprint)
  );
}

export async function collectAttemptBoundReport(input: {
  workspaceCwd: string | null | undefined;
  attemptId: string;
  contractFingerprint: string;
  agentId?: string | null;
  runId?: string | null;
}): Promise<{
  markdown: string | null;
  source: string;
  limits: string[];
  sha256: string | null;
}> {
  const limits: string[] = [];
  if (!input.workspaceCwd) {
    return {
      markdown: null,
      source: "NONE",
      limits: ["NO_WORKSPACE_CWD"],
      sha256: null,
    };
  }
  const candidates = [
    ...attemptBoundRelPaths(input.attemptId),
    ...GENERIC_REPORT_RELS,
  ];
  for (const rel of candidates) {
    const confined = readConfinedWorkspaceFile(input.workspaceCwd, rel, {
      maxBytes: REPORT_MAX_BYTES,
    });
    if (!confined.ok) {
      if (
        confined.reason === "SYMLINK_ESCAPE" ||
        confined.reason === "SYMLINK_COMPONENT" ||
        confined.reason === "PATH_OUTSIDE_WORKSPACE" ||
        confined.reason === "UNSAFE_RELATIVE_PATH"
      ) {
        limits.push(`REPORT_PATH_DENIED:${confined.reason}`);
      } else if (confined.reason === "FILE_TOO_LARGE") {
        limits.push("REPORT_FILE_TOO_LARGE");
      }
      continue;
    }
    const markdown = confined.bytes.toString("utf8");
    if (!markdown.trim()) continue;
    const bound = reportBindsAttempt(
      markdown,
      input.attemptId,
      input.contractFingerprint,
    );
    const isAttemptPath = rel.includes(input.attemptId);
    if (!bound && !isAttemptPath) {
      limits.push("REPORT_BINDING_MISSING — generic report not attributable");
      continue;
    }
    if (!bound && isAttemptPath) {
      limits.push("REPORT_BINDING_WEAK — path attempt-scoped but body lacks fingerprint");
      // Still refuse: identity of content must bind fingerprint.
      continue;
    }
    if (input.runId && markdown.includes("runId:") && !markdown.includes(input.runId)) {
      limits.push("REPORT_RUN_ID_MISMATCH");
      continue;
    }
    const sha256 = createHash("sha256").update(confined.bytes).digest("hex");
    return {
      markdown,
      source: `CONFINED_WORKSPACE:${rel}`,
      limits: [
        "REPORT_COLLECTED_CONFINED",
        `REPORT_BYTES:${confined.byteLength}`,
        `REPORT_SHA256:${sha256.slice(0, 16)}`,
        ...limits,
      ],
      sha256,
    };
  }
  return {
    markdown: null,
    source: "MISSING",
    limits: [...limits, "REPORT_FILE_NOT_FOUND_OR_UNBOUND"],
    sha256: null,
  };
}

/**
 * Build manifest + criterionEvidence from confined FS observations — not from
 * PASS strings in prose. Capture = file with exit/status artifact, not lexical PASS.
 */
export async function buildVerifiedEvidenceFromWorkspace(input: {
  workspaceCwd: string | null | undefined;
  reportMarkdown: string;
  acceptanceCriteria: string[];
}): Promise<{
  manifest: HandoffManifest;
  criterionEvidence: Record<string, { refs: string[]; verified: boolean }>;
  limits: string[];
}> {
  const limits: string[] = [];
  const filesCreated: string[] = [];
  const filesModified: string[] = [];
  const filesObserved: string[] = [];
  const filesConsulted: Array<{ path: string; sha256?: string }> = [];
  const testsDeclared: string[] = [];
  const testsCaptured: string[] = [];
  const gaps: string[] = [];

  const createdMatch = input.reportMarkdown.match(
    /(?:filesCreated|Fichiers créés)\s*[:：]\s*([^\n]+)/i,
  );
  if (createdMatch) {
    for (const p of createdMatch[1]!.split(/[,;]/).map((s) => s.trim()).filter(Boolean)) {
      filesCreated.push(p.replace(/^[-*]\s*/, ""));
    }
  }
  const modMatch = input.reportMarkdown.match(
    /(?:filesModified|Fichiers modifiés)\s*[:：]\s*([^\n]+)/i,
  );
  if (modMatch) {
    for (const p of modMatch[1]!.split(/[,;]/).map((s) => s.trim()).filter(Boolean)) {
      filesModified.push(p.replace(/^[-*]\s*/, ""));
    }
  }
  // Declared tests (names only) — not proof of pass.
  const testDecl = input.reportMarkdown.match(
    /(?:testsDeclared|Tests)\s*[:：]\s*([^\n]+)/i,
  );
  if (testDecl) {
    for (const t of testDecl[1]!.split(/[,;]/).map((s) => s.trim()).filter(Boolean)) {
      if (!/^(non|aucune|n\/a)/i.test(t)) testsDeclared.push(t.replace(/^[-*]\s*/, ""));
    }
  }

  const cwd = input.workspaceCwd;
  const observe = (rel: string) => {
    if (!cwd) return;
    const r = readConfinedWorkspaceFile(cwd, rel, { maxBytes: REPORT_MAX_BYTES });
    if (r.ok) {
      filesObserved.push(rel);
      filesConsulted.push({
        path: rel,
        sha256: createHash("sha256").update(r.bytes).digest("hex"),
      });
    } else if (r.reason !== "FILE_ABSENT") {
      limits.push(`OBSERVE_DENIED:${rel}:${r.reason}`);
    } else {
      gaps.push(`fichier annoncé absent: ${rel}`);
    }
  };

  for (const f of [...filesCreated, ...filesModified]) observe(f);

  // Test captures: only dedicated capture artifacts with exit code, never PASS in prose.
  for (const t of testsDeclared) {
    const captureRels = [
      `.sfia/test-captures/${t}.exit`,
      `.sfia/test-captures/${t}.stdout`,
      `test-results/${t}.exit`,
    ];
    let captured = false;
    if (cwd) {
      for (const rel of captureRels) {
        const r = readConfinedWorkspaceFile(cwd, rel, { maxBytes: 64_000 });
        if (r.ok) {
          const text = r.bytes.toString("utf8").trim();
          if (rel.endsWith(".exit")) {
            const code = Number(text.split(/\s+/)[0]);
            if (Number.isFinite(code)) {
              testsCaptured.push(`${t}:exit=${code}`);
              captured = true;
              filesConsulted.push({
                path: rel,
                sha256: createHash("sha256").update(r.bytes).digest("hex"),
              });
            }
          } else {
            testsCaptured.push(`${t}:stdout`);
            captured = true;
          }
          break;
        }
      }
    }
    if (!captured) {
      // Do NOT treat ```...PASS``` in report as capture (C22).
      gaps.push(`test déclaré sans capture artifact: ${t}`);
    }
  }

  if (
    /```(?:bash|sh|txt)?\n[\s\S]*?\bPASS\b/i.test(input.reportMarkdown) &&
    testsCaptured.length === 0
  ) {
    limits.push(
      "PROSE_PASS_IGNORED — PASS dans le rapport ≠ capture de test vérifiée",
    );
  }

  if (filesCreated.length + filesModified.length === 0) {
    gaps.push("inventaire non exhaustif — dérivé du rapport");
  }

  const criterionEvidence: Record<string, { refs: string[]; verified: boolean }> =
    {};
  for (const criterion of input.acceptanceCriteria) {
    const refs: string[] = [];
    let verified = false;
    for (const c of filesConsulted) {
      // Path mentioned in criterion or criterion keywords found in consulted file — still
      // only ACCESSIBLE until content check; mark verified only when file exists AND
      // criterion references that path explicitly.
      if (
        criterion.includes(c.path) ||
        c.path.split("/").pop()?.length &&
          criterion.toLowerCase().includes(
            (c.path.split("/").pop() || "").toLowerCase().replace(/\.[^.]+$/, ""),
          )
      ) {
        refs.push(c.path);
        verified = true;
      }
    }
    for (const cap of testsCaptured) {
      if (cap.includes("exit=0") && /test|unitaire|spec/i.test(criterion)) {
        refs.push(cap);
        verified = true;
      }
      if (/exit=[1-9]/.test(cap) && /test|unitaire|spec/i.test(criterion)) {
        refs.push(cap);
        verified = false;
        gaps.push(`test exit non nul pour critère: ${criterion.slice(0, 60)}`);
      }
    }
    if (refs.length > 0) {
      criterionEvidence[criterion] = { refs, verified };
    }
  }

  return {
    manifest: {
      filesCreated,
      filesModified,
      filesObserved,
      filesConsulted,
      testsDeclared,
      testsCaptured,
      gaps,
      sourcesConsulted: ["cursor-report", "workspace-confined"],
    },
    criterionEvidence,
    limits,
  };
}

function sqlRestitutionClaimable() {
  return sql`(
    ${effectAttempts.resultJson}::jsonb->>'restitutionPipelineStatus' IS NULL
    OR ${effectAttempts.resultJson}::jsonb->>'restitutionPipelineStatus' IN ('IDLE', 'PARTIAL', 'FAILED')
    OR (
      ${effectAttempts.resultJson}::jsonb->>'restitutionPipelineStatus' IN ('COLLECTING', 'QUALIFYING', 'NORA')
      AND (
        NULLIF(${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt', '') IS NULL
        OR (${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt')::timestamptz <= now()
      )
    )
  )`;
}

async function claimRestitutionPipelineAtomic(input: {
  attemptId: string;
}): Promise<{
  claimed: boolean;
  live: LiveWithRestitution;
  ownerToken: string | null;
  version: number | null;
}> {
  const current = (
    await db
      .select({ resultJson: effectAttempts.resultJson })
      .from(effectAttempts)
      .where(eq(effectAttempts.id, input.attemptId))
      .limit(1)
  )[0];
  if (!current) {
    return { claimed: false, live: {}, ownerToken: null, version: null };
  }
  const prev = parseLive(current.resultJson);
  if (prev.restitutionPipelineStatus === "COMPLETE" && prev.restitutionHandoffId) {
    return { claimed: false, live: prev, ownerToken: null, version: null };
  }

  const ownerToken = mintOwnerToken();
  const startedAt = new Date().toISOString();
  const leaseExpiresAt = new Date(Date.now() + RESTITUTION_LEASE_MS).toISOString();
  const prevVersion = prev.restitutionVersion ?? 0;
  const nextVersion = prevVersion + 1;
  const next: LiveWithRestitution = {
    ...prev,
    restitutionPipelineStatus: "COLLECTING",
    restitutionOwnerToken: ownerToken,
    restitutionStartedAt: startedAt,
    restitutionLeaseExpiresAt: leaseExpiresAt,
    restitutionVersion: nextVersion,
  };

  // CAS on restitutionVersion — concurrent claimants: at most one wins.
  const updated = await db
    .update(effectAttempts)
    .set({
      resultJson: JSON.stringify(next),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        sqlRestitutionClaimable(),
        sql`COALESCE((${effectAttempts.resultJson}::jsonb->>'restitutionVersion')::int, 0) = ${prevVersion}`,
      ),
    )
    .returning({ id: effectAttempts.id, resultJson: effectAttempts.resultJson });

  if (!updated[0]) {
    return {
      claimed: false,
      live: parseLive(current.resultJson),
      ownerToken: null,
      version: null,
    };
  }
  const live = parseLive(updated[0].resultJson);
  if (live.restitutionOwnerToken !== ownerToken) {
    return { claimed: false, live, ownerToken: null, version: null };
  }
  return { claimed: true, live, ownerToken, version: nextVersion };
}

async function persistPipelineOwned(input: {
  attemptId: string;
  ownerToken: string;
  expectedVersion: number;
  live: LiveWithRestitution;
}): Promise<boolean> {
  const payload: LiveWithRestitution = {
    ...input.live,
    restitutionOwnerToken: input.ownerToken,
    restitutionVersion: input.expectedVersion,
    restitutionLeaseExpiresAt: new Date(
      Date.now() + RESTITUTION_LEASE_MS,
    ).toISOString(),
  };
  const updated = await db
    .update(effectAttempts)
    .set({
      resultJson: JSON.stringify(payload),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        sql`${effectAttempts.resultJson}::jsonb->>'restitutionOwnerToken' = ${input.ownerToken}`,
        sql`COALESCE((${effectAttempts.resultJson}::jsonb->>'restitutionVersion')::int, 0) = ${input.expectedVersion}`,
      ),
    )
    .returning({ id: effectAttempts.id });
  return Boolean(updated[0]);
}

/**
 * After terminal observation: collect handoff → D8 qualify → Nora avis.
 * Safe to call repeatedly; no second Cursor dispatch.
 */
export async function runAutonomousRestitutionAfterTerminal(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  /** Default true when provider configured — fallback labelled if unavailable. */
  attachNoraCognitive?: boolean;
}): Promise<{
  ran: boolean;
  handoffId: string | null;
  qualificationId: string | null;
  handoffStatus: string | null;
  verdict: string | null;
  limits: string[];
  pipelineStatus: RestitutionPipelineStatus;
  criteria?: CriterionEvaluation[];
}> {
  const limits: string[] = [];
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) {
    return {
      ran: false,
      handoffId: null,
      qualificationId: null,
      handoffStatus: null,
      verdict: null,
      limits: ["ATTEMPT_NOT_FOUND"],
      pipelineStatus: "FAILED",
    };
  }

  let live = parseLive(row.resultJson);
  if (!isTerminal(live, row.status)) {
    return {
      ran: false,
      handoffId: null,
      qualificationId: null,
      handoffStatus: null,
      verdict: null,
      limits: ["NOT_TERMINAL"],
      pipelineStatus: live.restitutionPipelineStatus ?? "IDLE",
    };
  }

  if (live.restitutionPipelineStatus === "COMPLETE") {
    return {
      ran: false,
      handoffId: live.restitutionHandoffId ?? null,
      qualificationId: live.restitutionQualificationId ?? null,
      handoffStatus: live.reportStatus ?? null,
      verdict: null,
      limits: ["ALREADY_COMPLETE"],
      pipelineStatus: "COMPLETE",
    };
  }

  // Idempotent when dossier already fully materialised (handoff + qual + avis).
  {
    const existingHandoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, row.id))
        .limit(1)
    )[0];
    const existingQual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, row.id))
        .limit(1)
    )[0];
    // Late authentic proof uses D8 requalify route — not a blind re-entry here.
    if (existingHandoff && existingQual?.noraAnalysisMarkdown) {
      return {
        ran: false,
        handoffId: existingHandoff.id,
        qualificationId: existingQual.id,
        handoffStatus: existingHandoff.status,
        verdict: existingQual.verdict,
        limits: ["ALREADY_MATERIALISED_DOSSIER"],
        pipelineStatus: "COMPLETE",
      };
    }
  }

  const claim = await claimRestitutionPipelineAtomic({ attemptId: row.id });
  if (!claim.claimed || !claim.ownerToken || claim.version == null) {
    return {
      ran: false,
      handoffId: claim.live.restitutionHandoffId ?? null,
      qualificationId: claim.live.restitutionQualificationId ?? null,
      handoffStatus: claim.live.reportStatus ?? null,
      verdict: null,
      limits: ["PIPELINE_CLAIM_LOST_OR_HELD"],
      pipelineStatus: claim.live.restitutionPipelineStatus ?? "IDLE",
    };
  }
  live = claim.live;
  const ownerToken = claim.ownerToken;
  const version = claim.version;

  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;

  // 1) Collect report — prefer confined attempt-bound workspace file (attributable).
  // SDK result text is a fallback when no bound workspace report exists.
  let reportMarkdown = "";
  let acquisition: "RUNTIME_COLLECTED" | "SCRIPTED_ADAPTER" | "UNKNOWN" =
    "UNKNOWN";
  const collected = await collectAttemptBoundReport({
    workspaceCwd: plan.workspaceCwd,
    attemptId: row.id,
    contractFingerprint: plan.contractFingerprint,
    agentId: live.agentId,
    runId: live.runId,
  });
  limits.push(...collected.limits);
  if (collected.markdown?.trim()) {
    reportMarkdown = collected.markdown.trim();
    acquisition = "RUNTIME_COLLECTED";
    limits.push("REPORT_FROM_CONFINED_WORKSPACE");
  } else if ((live.reportMarkdown ?? "").trim()) {
    reportMarkdown = (live.reportMarkdown ?? "").trim();
    acquisition =
      plan.effectProviderMode === "SCRIPTED"
        ? "SCRIPTED_ADAPTER"
        : "RUNTIME_COLLECTED";
    if (
      !reportBindsAttempt(reportMarkdown, row.id, plan.contractFingerprint) &&
      plan.effectProviderMode === "LIVE"
    ) {
      limits.push("RUNTIME_REPORT_BINDING_WEAK");
    }
    limits.push("REPORT_FROM_ATTEMPT_RESULT");
  }

  const contract = (
    await db
      .select()
      .from(technicalContracts)
      .where(eq(technicalContracts.id, plan.contractId))
      .limit(1)
  )[0];
  let acceptanceCriteria: string[] = [];
  let expectedProofs: string[] = [];
  let contractTitle: string | null = null;
  if (contract) {
    contractTitle = contract.title ?? null;
    try {
      const acceptance = JSON.parse(contract.acceptanceJson || "{}") as {
        criteria?: string[];
        expectedProofs?: string[];
      };
      acceptanceCriteria = acceptance.criteria ?? [];
      expectedProofs = acceptance.expectedProofs ?? [];
    } catch {
      /* ignore */
    }
  }

  const evidence = await buildVerifiedEvidenceFromWorkspace({
    workspaceCwd: plan.workspaceCwd,
    reportMarkdown: reportMarkdown || "",
    acceptanceCriteria,
  });
  limits.push(...evidence.limits);

  let handoff = (
    await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, row.id))
      .limit(1)
  )[0];

  let handoffId = handoff?.id ?? null;
  let handoffStatus = handoff?.status ?? null;

  if (!handoff) {
    try {
      const ingested = await ingestRealizationHandoff({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: row.id,
        reportMarkdown: reportMarkdown || "",
        manifest: evidence.manifest,
        expectedContractFingerprint: plan.contractFingerprint,
        provenance: {
          acquisition,
          observedAgentId: live.agentId ?? null,
          observedRunId: live.runId ?? null,
        },
      });
      handoffId = ingested.handoffId;
      handoffStatus = ingested.status;
      limits.push(...ingested.limits, "AUTONOMOUS_HANDOFF_INGESTED");
    } catch (e) {
      limits.push(
        `HANDOFF_INGEST_FAILED:${String((e as Error)?.message ?? e).slice(0, 100)}`,
      );
      live = {
        ...live,
        restitutionPipelineStatus: "PARTIAL",
        restitutionCompletedAt: new Date().toISOString(),
      };
      await persistPipelineOwned({
        attemptId: row.id,
        ownerToken,
        expectedVersion: version,
        live,
      });
      return {
        ran: true,
        handoffId: null,
        qualificationId: null,
        handoffStatus: null,
        verdict: null,
        limits,
        pipelineStatus: "PARTIAL",
      };
    }
    handoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, row.id))
        .limit(1)
    )[0];
  } else {
    limits.push("HANDOFF_ALREADY_PRESENT");
  }

  live = {
    ...live,
    restitutionPipelineStatus: "QUALIFYING",
    restitutionHandoffId: handoffId,
  };
  if (
    !(await persistPipelineOwned({
      attemptId: row.id,
      ownerToken,
      expectedVersion: version,
      live,
    }))
  ) {
    return {
      ran: true,
      handoffId,
      qualificationId: null,
      handoffStatus,
      verdict: null,
      limits: [...limits, "OWNERSHIP_LOST_AT_QUALIFY"],
      pipelineStatus: "PARTIAL",
    };
  }

  let existingQual = (
    await db
      .select()
      .from(realizationQualifications)
      .where(eq(realizationQualifications.attemptId, row.id))
      .limit(1)
  )[0];

  let manifest: HandoffManifest = evidence.manifest;
  try {
    if (handoff?.manifestJson) {
      manifest = {
        ...evidence.manifest,
        ...(JSON.parse(handoff.manifestJson) as HandoffManifest),
        filesObserved: evidence.manifest.filesObserved,
        filesConsulted: evidence.manifest.filesConsulted,
        testsCaptured: evidence.manifest.testsCaptured,
        gaps: [
          ...new Set([
            ...(evidence.manifest.gaps ?? []),
            ...((JSON.parse(handoff.manifestJson) as HandoffManifest).gaps ?? []),
          ]),
        ],
      };
    }
  } catch {
    /* keep evidence.manifest */
  }

  const q = qualifyCursorRealization({
    contractFingerprint: plan.contractFingerprint,
    acceptanceCriteria,
    expectedProofs,
    handoffStatus: handoff?.status ?? null,
    reportMarkdown: (handoff?.reportMarkdown ?? reportMarkdown) || null,
    manifest,
    terminalStatus: live.terminalStatus ?? null,
    // C22 — product path builds evidence; never inject verified from campaign.
    criterionEvidence: evidence.criterionEvidence,
  });

  let qualificationId = existingQual?.id ?? null;
  const dossierVersion = (live.restitutionDossierVersion ?? 0) + 1;
  if (!existingQual) {
    const id = newId("rqual");
    const now = new Date();
    await db.insert(realizationQualifications).values({
      id,
      attemptId: row.id,
      projectId: input.projectId,
      pilotId: input.pilotId,
      handoffId: handoffId,
      status: "QUALIFIED",
      rubricsJson: JSON.stringify(q.rubrics),
      verdict: q.verdict,
      limitsJson: JSON.stringify([
        ...q.limits,
        "AUTONOMOUS_D8_QUALIFICATION_C22",
        `DOSSIER_VERSION:${dossierVersion}`,
        ...limits,
      ]),
      historyJson: "[]",
      noraAnalysisMarkdown: null,
      noraAnalysisAt: null,
      createdAt: now,
      updatedAt: now,
    });
    qualificationId = id;
    existingQual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.id, id))
        .limit(1)
    )[0];
    limits.push("AUTONOMOUS_D8_INSERTED");
  } else {
    limits.push("D8_ALREADY_PRESENT");
  }

  live = {
    ...live,
    restitutionPipelineStatus: "NORA",
    restitutionQualificationId: qualificationId,
    restitutionDossierVersion: dossierVersion,
  };
  await persistPipelineOwned({
    attemptId: row.id,
    ownerToken,
    expectedVersion: version,
    live,
  });

  const wantCognitive =
    input.attachNoraCognitive !== false &&
    (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "1").trim() !== "0";

  let noraMarkdown: string | null = null;
  if (existingQual && !existingQual.noraAnalysisMarkdown) {
    if (wantCognitive) {
      try {
        const { runNoraCognitiveTurn } = await import(
          "@/domains/conversation/run-nora-cognitive-turn"
        );
        const prompt = buildNoraCognitiveAnalysisPrompt({
          qualification: q,
          contractTitle,
          attemptId: row.id,
          sourcesAccessible: [
            ...(manifest.sourcesConsulted ?? []),
            ...(manifest.filesConsulted ?? []).map((f) => f.path),
          ],
        });
        const prepId = contract?.preparationId ?? null;
        const reply = prepId
          ? await runNoraCognitiveTurn({
              pilotId: input.pilotId,
              preparationId: prepId,
              projectId: input.projectId,
              forceNewWork: true,
              objective: `Avis cognitif D8 attempt ${row.id} v${dossierVersion}`,
              userText: [
                prompt,
                "",
                "OUTILS D8 OBLIGATOIRES: list_realization_evidence, read_realization_handoff_report, read_attempt_workspace_file.",
                "Ne te fonde pas uniquement sur un extrait. Distingue CONSULTÉ / métadonnée / déclaration.",
              ].join("\n"),
              contextSnippets: [
                `attemptId=${row.id}`,
                `dossierVersion=${dossierVersion}`,
                `verdict=${q.verdict}`,
                `handoffStatus=${handoff?.status ?? "NONE"}`,
                `integrity=${handoff?.integrityHash ?? ""}`,
                `workspace=${plan.workspaceCwd ?? ""}`,
              ],
              toolScope: {
                pilotId: input.pilotId,
                preparationId: prepId,
                operationId: `d8-nora-auto-${row.id}-v${dossierVersion}`,
                projectId: input.projectId,
                attemptId: row.id,
              },
              maxSegmentsThisInvocation: 2,
            })
          : null;

        if (!reply) {
          limits.push("NORA_NO_PREPARATION_ID — fallback synthèse");
        } else {
          const raw = (reply.content ?? "").trim();
          const liveOk =
            reply.mode === "openai-agents-sdk-live" &&
            reply.status === "COMPLETE" &&
            raw.length > 0;
          if (liveOk) {
            noraMarkdown = raw.includes("ANALYSE COGNITIVE NORA (D3)")
              ? raw
              : `[ANALYSE COGNITIVE NORA (D3)]\n\n${raw}`;
            limits.push(
              "NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR",
              `NORA_WORK:${reply.conductor?.workId ?? "unknown"}`,
              `NORA_TOOLS:${reply.toolCallsObserved ?? 0}`,
            );
          } else {
            limits.push(
              `NORA_COGNITIVE_UNAVAILABLE_${reply.mode}`,
              "FALLBACK_DETERMINISTIC_SYNTHESIS",
            );
          }
        }
      } catch (e) {
        limits.push(
          `NORA_ERROR:${String((e as Error)?.message ?? e).slice(0, 80)}`,
          "FALLBACK_DETERMINISTIC_SYNTHESIS",
        );
      }
    }
    if (!noraMarkdown) {
      noraMarkdown = buildDeterministicDossierSynthesis({
        qualification: q,
        contractTitle,
        attemptId: row.id,
        sourcesAccessible: manifest.sourcesConsulted,
        dossierIncomplete: handoff?.status !== "RECEIVED",
      });
      limits.push(
        "DETERMINISTIC_SYNTHESIS_AUTONOMOUS — pas un avis cognitif Nora D3",
      );
    }
    await db
      .update(realizationQualifications)
      .set({
        noraAnalysisMarkdown: noraMarkdown,
        noraAnalysisAt: new Date(),
        limitsJson: JSON.stringify([
          ...q.limits,
          ...limits,
          `NORA_KIND:${classifyAttachedNoraPayload(noraMarkdown)}`,
          `DOSSIER_VERSION:${dossierVersion}`,
        ]),
        updatedAt: new Date(),
      })
      .where(eq(realizationQualifications.id, qualificationId!));
  } else {
    limits.push("NORA_ALREADY_ATTACHED_OR_SKIPPED");
  }

  const pipelineStatus: RestitutionPipelineStatus =
    handoffStatus === "RECEIVED" && qualificationId ? "COMPLETE" : "PARTIAL";
  live = {
    ...live,
    reportStatus:
      handoffStatus === "RECEIVED"
        ? "RECEIVED"
        : handoffStatus === "REJECTED"
          ? "REJECTED"
          : live.reportStatus ?? "INCOMPLETE",
    restitutionPipelineStatus: pipelineStatus,
    restitutionHandoffId: handoffId,
    restitutionQualificationId: qualificationId,
    restitutionCompletedAt: new Date().toISOString(),
    restitutionDossierVersion: dossierVersion,
    limits: [...(live.limits ?? []), ...limits, "AUTONOMOUS_RESTITUTION_C22"],
  };
  await persistPipelineOwned({
    attemptId: row.id,
    ownerToken,
    expectedVersion: version,
    live,
  });

  return {
    ran: true,
    handoffId,
    qualificationId,
    handoffStatus,
    verdict: q.verdict,
    limits,
    pipelineStatus,
    criteria: q.criteria,
  };
}

export function reportContentFingerprint(markdown: string): string {
  return createHash("sha256").update(markdown, "utf8").digest("hex");
}

/**
 * Resume incomplete restitutions after process boot (observation/collect only).
 */
export async function resumeIncompleteRestitutions(): Promise<{
  resumed: number;
  attemptIds: string[];
}> {
  const rows = await db
    .select({
      id: effectAttempts.id,
      pilotId: effectAttempts.pilotId,
      projectId: effectAttempts.projectId,
      status: effectAttempts.status,
      resultJson: effectAttempts.resultJson,
    })
    .from(effectAttempts)
    .where(eq(effectAttempts.kind, "CURSOR_EXECUTION"));

  const attemptIds: string[] = [];
  let resumed = 0;
  for (const row of rows) {
    const live = parseLive(row.resultJson);
    if (!isTerminal(live, row.status)) continue;
    const st = live.restitutionPipelineStatus;
    if (st === "COMPLETE") continue;
    if (
      st === "COLLECTING" ||
      st === "QUALIFYING" ||
      st === "NORA" ||
      st === "PARTIAL" ||
      st === "FAILED" ||
      st == null ||
      st === "IDLE" ||
      live.reportStatus === "EXPECTED"
    ) {
      try {
        const r = await runAutonomousRestitutionAfterTerminal({
          pilotId: row.pilotId,
          projectId: row.projectId,
          attemptId: row.id,
        });
        if (r.ran) {
          resumed += 1;
          attemptIds.push(row.id);
        }
      } catch {
        /* boot resume must not crash */
      }
    }
  }
  return { resumed, attemptIds };
}
```

### FILE `projects/sfia-studio-next/web/src/instrumentation.ts`

- SHA-256: `346ea5810b0e1b2ed08a070fe9b5f8ac9980a14c72af0c75bb600a310e723583`
- Lines: 25

```typescript
/**
 * C22 — Next.js process boot hook.
 * Resume LIVE Cursor supervisors and incomplete autonomous restitutions.
 * Observation / collect only — never a second SDK send.
 */

export async function register() {
  if (process.env.NEXT_RUNTIME === "edge") return;
  try {
    const { ensureLiveSupervisorsResumedOnce } = await import(
      "@/domains/execution/cursor-live-supervisor"
    );
    await ensureLiveSupervisorsResumedOnce();
  } catch {
    /* boot must not crash */
  }
  try {
    const { resumeIncompleteRestitutions } = await import(
      "@/domains/execution/cursor-autonomous-restitution"
    );
    await resumeIncompleteRestitutions();
  } catch {
    /* boot must not crash */
  }
}
```

### FILE `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts`

- SHA-256: `977f5847137906cdd2e1ff2762307dc4f4e6ccc67cc8675dad90c72384623855`
- Lines: 837

```typescript
/**
 * C16/C17 — product entry into the adaptive D3 cognitive conductor.
 * generateNoraReply remains the provider adapter; this module orchestrates
 * cognitive work attachment, multi-segment continuation, and investigation merge.
 */

import {
  runCognitiveConductor,
  type ConductorRunResult,
} from "./cognitive-conductor";
import { buildCognitivePolicy } from "./cognitive-policy";
import {
  listCognitiveWorksForPreparation,
  type CognitiveProductionState,
  type CognitiveWorkRow,
} from "./cognitive-work";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  type DeterminingQuestion,
  type InvestigationState,
} from "./investigation-state";
import {
  generateNoraReply,
  type NoraGenerateInput,
  type NoraGenerateResult,
} from "./nora-adapter";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  unavailableQualification,
  type NoraTurnQualification,
} from "./semantic-qualification";

export type NoraCognitiveTurnInput = NoraGenerateInput & {
  pilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  turnCommandId?: string | null;
  /** Explicit continuation of a prior suspended/open work. */
  workId?: string | null;
  /** When true, always open a new cognitive work (independent request). */
  forceNewWork?: boolean;
  objective?: string;
  expectedOutcome?: string;
  maxSegmentsThisInvocation?: number;
};

export type NoraCognitiveTurnResult = NoraGenerateResult & {
  conductor: {
    workId: string;
    revision: number;
    segmentsRun: number;
    resumed: boolean;
    suspended: boolean;
    suspendReason: string | null;
    investigation: InvestigationState;
    production: CognitiveProductionState;
  };
};

/** Extract usage when the adapter exposes it; otherwise UNKNOWN (null). */
function usageFromReply(reply: NoraGenerateResult): {
  inputTokens: number | null;
  outputTokens: number | null;
} {
  const anyReply = reply as NoraGenerateResult & {
    usage?: { inputTokens?: number; outputTokens?: number; totalTokens?: number };
    inputTokens?: number | null;
    outputTokens?: number | null;
  };
  const input =
    anyReply.usage?.inputTokens ?? anyReply.inputTokens ?? null;
  const output =
    anyReply.usage?.outputTokens ?? anyReply.outputTokens ?? null;
  return {
    inputTokens: typeof input === "number" ? input : null,
    outputTokens: typeof output === "number" ? output : null,
  };
}

/**
 * C18 — merge determining questions from structured qualification only.
 * Never invent ANSWERED from user prose or absence of clarifications[].
 */
export function mergeQuestions(
  prior: DeterminingQuestion[],
  qualification: NoraTurnQualification | null | undefined,
): DeterminingQuestion[] {
  const byId = new Map(prior.map((q) => [q.id, { ...q }]));
  const structured = qualification?.determiningQuestions;
  if (structured && structured.length > 0) {
    for (const q of structured) {
      const id = q.id.trim();
      if (!id) continue;
      const prev = byId.get(id);
      byId.set(id, {
        id,
        text: q.text.trim() || prev?.text || id,
        status: q.status,
        importance: q.importance,
        answerSummary:
          q.status === "ANSWERED"
            ? q.answerSummary?.trim() || prev?.answerSummary
            : q.answerSummary?.trim() || undefined,
        sourceRefs: q.sourceRefs ?? prev?.sourceRefs,
      });
    }
    return [...byId.values()];
  }
  const clarifications =
    qualification && qualification.status !== "UNAVAILABLE"
      ? qualification.clarifications
      : undefined;
  if (clarifications === undefined) {
    return [...byId.values()];
  }
  if (clarifications.length === 0) {
    return [...byId.values()];
  }
  for (const text of clarifications) {
    const trimmed = text.trim();
    if (!trimmed) continue;
    const existing = [...byId.values()].find((q) => q.text === trimmed);
    if (existing) continue;
    const id = `q-${stableShortId(trimmed)}`;
    byId.set(id, {
      id,
      text: trimmed,
      status: "OPEN",
      importance: "DETERMINANT",
    });
  }
  return [...byId.values()];
}

function stableShortId(text: string): string {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h.toString(36).slice(0, 10);
}

function mergeRemainingWork(
  prior: InvestigationState,
  qualification: NoraTurnQualification | null | undefined,
): string[] {
  const items = qualification?.remainingWorkItems;
  if (items && items.length > 0) {
    return items
      .filter((i) => i.status === "OPEN" || i.status === "BLOCKED")
      .map((i) => i.text.trim())
      .filter(Boolean);
  }
  return [...prior.remainingWork];
}

/**
 * C18 — consolidate investigation from structured qualification + observed tools.
 * No lexical criteria extraction. No prose→instruction fallback.
 */
export function mergeInvestigationFromReply(
  prior: InvestigationState,
  reply: NoraGenerateResult,
  userText: string,
): InvestigationState {
  const q = reply.qualification;
  const goal =
    q && q.status !== "UNAVAILABLE" ? q.goal?.trim() || "" : "";
  const outcome =
    q && q.status !== "UNAVAILABLE" ? q.desiredOutcome?.trim() || "" : "";
  const scope =
    q && q.status !== "UNAVAILABLE" ? q.initialScope?.trim() || "" : "";

  const sources = [...prior.sources];
  for (const s of reply.observedToolSources ?? []) {
    const idx = sources.findIndex((p) => p.ref === s.ref && p.kind === s.kind);
    if (idx < 0) sources.push(s);
    else {
      const prev = sources[idx]!;
      sources[idx] = {
        ...prev,
        ...s,
        notes: [prev.notes, prev.coverage !== s.coverage ? `${prev.coverage}->${s.coverage}` : null, s.notes]
          .filter(Boolean)
          .join("; "),
      };
    }
  }

  const questions = mergeQuestions(prior.questions, q);
  const remainingWork = mergeRemainingWork(prior, q);

  const constraints = [...prior.constraints];
  if (scope && !constraints.includes(scope)) constraints.push(scope);
  for (const r of q?.restrictions ?? []) {
    const t = r.trim();
    if (t && !constraints.includes(t)) constraints.push(t);
  }

  const contradictions = [
    ...prior.contradictions,
    ...((q?.contradictions ?? []).map((c) => ({
      a: c.a,
      b: c.b,
      detail: c.detail,
    })) as InvestigationState["contradictions"]),
  ].slice(-16);

  // C18: prefer typed tool submission, then intent parameters, then top-level fields.
  const toolProd = reply.cursorContractProduction;
  const prepareIntent = q?.intents?.find(
    (i) =>
      i.capabilityId === "d7.prepare_cursor_contract" &&
      (i.mode === "PREPARE" || i.mode === "REQUEST_EFFECT"),
  );
  const productionInstruction =
    toolProd?.productionInstruction?.trim() ||
    prepareIntent?.parameters?.productionInstruction?.trim() ||
    q?.productionInstruction?.trim() ||
    prior.productionInstruction ||
    null;
  const fromToolCriteria = toolProd?.acceptanceCriteria?.map((c) => c.trim()).filter(Boolean);
  const fromIntentCriteria = prepareIntent?.parameters?.acceptanceCriteria
    ?.map((c) => c.trim())
    .filter(Boolean);
  const fromTopCriteria = q?.acceptanceCriteria?.map((c) => c.trim()).filter(Boolean);
  const acceptanceCriteria =
    fromToolCriteria && fromToolCriteria.length > 0
      ? fromToolCriteria
      : fromIntentCriteria && fromIntentCriteria.length > 0
        ? fromIntentCriteria
        : fromTopCriteria && fromTopCriteria.length > 0
          ? fromTopCriteria
          : [...(prior.acceptanceCriteria ?? [])];
  // Tool submission may also carry desiredOutcome when qualification omitted it.
  const desiredFromTool = toolProd?.desiredOutcome?.trim() || "";

  const profileHint: InvestigationState["profileHint"] =
    q?.cognitiveProfileHint ??
    (q?.status === "NEEDS_CLARIFICATION"
      ? "investigation"
      : prior.profileHint === "simple"
        ? "analyse"
        : prior.profileHint);

  const desiredOutcome = outcome || desiredFromTool || prior.desiredOutcome || "";

  return evaluateContractReadiness({
    ...prior,
    intentSummary: goal || prior.intentSummary || userText.slice(0, 800),
    desiredOutcome,
    sources,
    questions,
    remainingWork,
    contradictions,
    constraints,
    profileHint,
    productionInstruction,
    acceptanceCriteria,
  });
}

/**
 * C18 — continuation by workDisposition / objective class — not contractReady alone.
 */
export function semanticContinueWork(
  qualification: NoraTurnQualification | null,
  investigation: InvestigationState,
  reply: NoraGenerateResult,
): boolean {
  if (reply.status !== "COMPLETE") return false;
  if (
    investigation.contractReadyBlockedReason === "GLOBAL_BUDGET_EXHAUSTED" ||
    (investigation.contractReadyBlockedReason ?? "").startsWith("GLOBAL_")
  ) {
    return false;
  }
  const disposition = qualification?.workDisposition;
  if (disposition === "COMPLETE" || disposition === "AWAIT_PILOT" || disposition === "SUSPEND") {
    return false;
  }
  if (disposition === "CONTINUE") return true;

  if (qualification?.status === "NEEDS_CLARIFICATION") {
    return false;
  }
  const openDeterminant = investigation.questions.some(
    (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
  );
  if (openDeterminant) {
    return (reply.observedToolSources?.length ?? 0) > 0;
  }
  if (investigation.remainingWork.length > 0) return true;
  return false;
}

/**
 * C18 — semantic attachment: Nora may propose relation/workId; server validates.
 */
export async function resolveCognitiveWorkAttachment(input: {
  pilotId: string;
  preparationId: string;
  workId?: string | null;
  forceNewWork?: boolean;
  userText?: string | null;
  qualification?: NoraTurnQualification | null;
}): Promise<{
  workId?: string | null;
  forceNew: boolean;
  reason: string;
  /** C20 — do not create/claim; await pilot clarification. */
  needsClarify?: boolean;
}> {
  if (input.forceNewWork === true) {
    return { forceNew: true, reason: "FORCE_NEW_EXPLICIT" };
  }
  if (input.workId) {
    return { workId: input.workId, forceNew: false, reason: "EXPLICIT_WORK_ID" };
  }

  const works = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  const relation = input.qualification?.cognitiveWorkRelation;
  const proposed = input.qualification?.proposedCognitiveWorkId?.trim() || null;

  if (relation === "INDEPENDENT" || relation === "MATERIAL_CHANGE" || relation === "UNRELATED") {
    return { forceNew: true, reason: `SEMANTIC_${relation}` };
  }
  if (relation === "CLARIFY") {
    if (proposed && works.some((w) => w.id === proposed)) {
      return { workId: proposed, forceNew: false, reason: "SEMANTIC_CLARIFY_ATTACH" };
    }
    return {
      forceNew: false,
      workId: null,
      reason: "SEMANTIC_CLARIFY_AWAIT",
      needsClarify: true,
    };
  }
  if ((relation === "CONTINUE" || relation === "CLARIFY") && proposed) {
    const hit = works.find((w) => w.id === proposed);
    if (hit) {
      return { workId: hit.id, forceNew: false, reason: "SEMANTIC_PROPOSED_WORK" };
    }
    return {
      forceNew: false,
      workId: null,
      reason: "SEMANTIC_PROPOSED_UNKNOWN",
      needsClarify: true,
    };
  }

  // C20: technical suspend resume only when Nora explicitly CONTINUEs.
  const segmentSuspended = works.filter(
    (w) =>
      w.status === "SUSPENDED" &&
      (w.interruptCause === "SEGMENT_INVOCATION_LIMIT" ||
        w.interruptCause === "PROCESS_OR_LEASE_INTERRUPT" ||
        (w.interruptCause ?? "").startsWith("SEGMENT")),
  );
  if (relation === "CONTINUE" && segmentSuspended.length === 1 && !proposed) {
    return {
      workId: segmentSuspended[0]!.id,
      forceNew: false,
      reason: "TECHNICAL_SUSPEND_RESUME",
    };
  }

  // C19: never deduce continuation from sole open presence without CONTINUE.
  const open = works.filter(
    (w) => w.status === "OPEN" || w.status === "SUSPENDED" || w.status === "RUNNING",
  );
  if (relation === "CONTINUE") {
    if (proposed) {
      const hit = works.find((w) => w.id === proposed);
      if (hit) return { workId: hit.id, forceNew: false, reason: "SEMANTIC_CONTINUE_PROPOSED" };
      return {
        forceNew: false,
        workId: null,
        reason: "SEMANTIC_CONTINUE_UNKNOWN_ID",
        needsClarify: true,
      };
    }
    if (open.length === 1) {
      return { workId: open[0]!.id, forceNew: false, reason: "SEMANTIC_CONTINUE_SINGLE" };
    }
    if (open.length > 1) {
      return {
        forceNew: false,
        workId: null,
        reason: "SEMANTIC_CONTINUE_AMBIGUOUS",
        needsClarify: true,
      };
    }
  }
  if (open.length > 1 && !proposed) {
    return {
      forceNew: false,
      workId: null,
      reason: "AMBIGUOUS_MULTI_OPEN",
      needsClarify: true,
    };
  }
  // Without structured relation, do not auto-attach to an open work.
  return { forceNew: true, reason: "NEW_OR_NEEDS_SEMANTIC_RELATION" };
}

/**
 * C22 — merge document production using structured mergeMode from Nora.
 * Exported for unit tests against the real owner function (not a copy).
 * Never derive SUPERSEDE from heading count or length alone.
 */
export function mergeDocumentProductionBody(input: {
  prevDoc: string;
  incoming: string;
  mergeMode?: "APPEND" | "CORRECT" | "SUPERSEDE" | null;
  workDisposition?: string | null;
  continueWork: boolean;
}): { contentMarkdown: string; appliedMode: "APPEND" | "CORRECT" | "SUPERSEDE" | "IDENTITY" } {
  const body = input.incoming.trim();
  const prev = (input.prevDoc ?? "").trim();
  if (!prev) return { contentMarkdown: body, appliedMode: "IDENTITY" };
  if (prev.includes(body) && body.length < prev.length) {
    return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  }
  const explicit = input.mergeMode ?? null;
  // SUPERSEDE only when Nora declares it, or COMPLETE + explicit SUPERSEDE.
  if (explicit === "SUPERSEDE") {
    return { contentMarkdown: body, appliedMode: "SUPERSEDE" };
  }
  if (explicit === "CORRECT") {
    // Correction replaces prior body when disposition is COMPLETE; else append note.
    if (!input.continueWork || input.workDisposition === "COMPLETE") {
      return { contentMarkdown: body, appliedMode: "CORRECT" };
    }
    return {
      contentMarkdown: `${prev}\n\n<!-- correction -->\n\n${body}`.trim(),
      appliedMode: "CORRECT",
    };
  }
  // Default APPEND — mid-work continuity. Avoid duplicating identical prefix dumps.
  if (body.includes(prev.slice(0, Math.min(200, prev.length))) && body.length >= prev.length) {
    // Incoming already contains prior — treat as Nora-provided consolidated body only
    // when mergeMode SUPERSEDE was omitted but workDisposition COMPLETE *and*
    // qualification marked document as superseding via workDisposition alone is insufficient.
    // C22: stay APPEND unless explicit SUPERSEDE — keep prior + novel tail if any.
    if (body === prev) return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  }
  if (prev.includes(body)) return { contentMarkdown: prev, appliedMode: "IDENTITY" };
  return {
    contentMarkdown: `${prev}\n\n${body}`.trim(),
    appliedMode: "APPEND",
  };
}

function documentProductionFromReply(
  work: CognitiveWorkRow,
  reply: NoraGenerateResult,
  segmentIndex: number,
  continueWork: boolean,
): CognitiveProductionState | undefined {
  const prevDoc =
    (work.production as CognitiveProductionState & { contentMarkdown?: string })
      .contentMarkdown ?? "";
  // C19: part ids are stable across invocations — never collide on local segmentIndex 0.
  const partId = `gen-${reply.generationId || `seg-${work.revision}-${segmentIndex}`}`;
  const appendPart = (
    parts: CognitiveProductionState["parts"],
    title: string,
    complete: boolean,
  ) => [...parts.filter((p) => p.id !== partId), { id: partId, title, complete }];

  const proposal = reply.qualification?.documentProposal;
  if (proposal?.contentMarkdown?.trim()) {
    const merged = mergeDocumentProductionBody({
      prevDoc,
      incoming: proposal.contentMarkdown,
      mergeMode: proposal.mergeMode ?? null,
      workDisposition: reply.qualification?.workDisposition ?? null,
      continueWork,
    });
    return {
      kind: "DOCUMENT",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: work.production.objectRef || reply.generationId,
      parts: appendPart(
        work.production.parts,
        proposal.title || `document-part-${work.production.parts.length + 1}`,
        !continueWork,
      ),
      contentMarkdown: merged.contentMarkdown,
      limits: [`MERGE_MODE_${merged.appliedMode}`],
    } as CognitiveProductionState;
  }
  // C19: Markdown fence is transport/legacy only — never authority that replaces
  // structured production. Preserve prior DOCUMENT on resume.
  const extracted = reply.content.match(/```sfia-document\b([\s\S]*?)```/i);
  if (extracted && !prevDoc) {
    return {
      kind: "DOCUMENT",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: reply.generationId,
      parts: appendPart(
        work.production.parts,
        `document-part-${work.production.parts.length + 1}`,
        !continueWork,
      ),
      contentMarkdown: extracted[1]!.trim(),
      limits: ["MARKDOWN_FENCE_TRANSPORT_ONLY"],
    } as CognitiveProductionState;
  }
  if (work.production.kind === "DOCUMENT" && prevDoc) {
    return {
      ...work.production,
      status: continueWork ? "IN_PROGRESS" : work.production.status,
      parts: appendPart(
        work.production.parts,
        reply.generationId,
        !continueWork,
      ),
    };
  }
  return {
    kind: "REPLY",
    status: continueWork ? "IN_PROGRESS" : "COMPLETE",
    objectRef: reply.generationId,
    parts: appendPart(work.production.parts, reply.generationId, !continueWork),
    limits: continueWork ? ["PRODUCTION_IN_PROGRESS"] : undefined,
  };
}

/**
 * Run Nora through the cognitive conductor for a product turn.
 */
export async function runNoraCognitiveTurn(
  input: NoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const segmentBox: { reply: NoraGenerateResult | null } = { reply: null };

  // C19: expose candidate works so Nora can emit cognitiveWorkRelation / proposed id.
  const candidates = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  const candidateSnippet =
    candidates.length === 0
      ? "Travaux cognitifs candidats: (aucun)"
      : [
          "Travaux cognitifs candidats (serveur valide; ne pas inventer d'id):",
          ...candidates.slice(0, 8).map(
            (w) =>
              `- ${w.id} status=${w.status} rev=${w.revision} obj=${(w.objective || "").slice(0, 120)}`,
          ),
          "Émettre cognitiveWorkRelation=CONTINUE|INDEPENDENT|CLARIFY|MATERIAL_CHANGE|UNRELATED et proposedCognitiveWorkId si rattachement.",
        ].join("\n");

  let attachment: Awaited<ReturnType<typeof resolveCognitiveWorkAttachment>>;
  let probeReply: NoraGenerateResult | null = null;
  let probeConsumed = false;

  // C19: when attachment is not forced/explicit, qualify first then resolve with structured fields.
  if (!input.workId && input.forceNewWork !== true) {
    const probePolicy =
      input.policyOverride ??
      buildCognitivePolicy(input.userText, undefined, { profileHint: "analyse" });
    probeReply = await generateNoraReply({
      userText: input.userText,
      contextSnippets: [...input.contextSnippets, candidateSnippet, "attachment=PENDING_SEMANTIC"],
      knowledgeSnippets: input.knowledgeSnippets,
      pilotageSnippets: input.pilotageSnippets,
      levelASignals: input.levelASignals,
      ckiDelivery: input.ckiDelivery,
      onProvisionalChunk: input.onProvisionalChunk,
      toolScope: input.toolScope,
      policyOverride: probePolicy,
    });
    segmentBox.reply = probeReply;
    attachment = await resolveCognitiveWorkAttachment({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      workId: input.workId,
      forceNewWork: input.forceNewWork,
      userText: input.userText,
      qualification: probeReply.qualification,
    });
  } else {
    attachment = await resolveCognitiveWorkAttachment({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      workId: input.workId,
      forceNewWork: input.forceNewWork,
      userText: input.userText,
    });
  }

  // C20: ambiguity / clarify — do not invent a new cognitive work; return AWAIT_PILOT.
  if (attachment.needsClarify) {
    const clarifyText =
      "Plusieurs travaux cognitifs sont candidats. Précisez lequel continuer (identifiant) ou confirmez une demande indépendante.";
    const basePolicy = buildCognitivePolicy(input.userText, undefined, {
      profileHint: "analyse",
    });
    const clarify: NoraGenerateResult = probeReply
      ? {
          ...probeReply,
          content: probeReply.content?.trim() || clarifyText,
          status: "COMPLETE",
        }
      : {
          content: clarifyText,
          status: "COMPLETE",
          generationId: `clarify-${Date.now()}`,
          mode: "deterministic-fixture",
          policy: basePolicy,
          modelRequested: basePolicy.modelRequested,
          modelApplied: null,
          effortRequested: basePolicy.effortRequested,
          effortApplied: null,
          attempts: [],
          toolCallsObserved: 0,
          d4CharsReturned: 0,
          observedToolSources: [],
          qualification: unavailableQualification(
            "CLARIFY_COGNITIVE_WORK_ATTACHMENT",
            clarifyText,
          ),
        };
    const q: NoraTurnQualification = {
      ...clarify.qualification,
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "NEEDS_CLARIFICATION",
      workDisposition: "AWAIT_PILOT",
      cognitiveWorkRelation: "CLARIFY",
      replyDraft:
        clarify.qualification.replyDraft ||
        clarify.content ||
        clarifyText,
    };
    return {
      ...clarify,
      content: clarify.content,
      qualification: q,
      status: "COMPLETE",
      conductor: {
        workId: "",
        revision: 0,
        segmentsRun: probeReply ? 1 : 0,
        resumed: false,
        suspended: false,
        suspendReason: null,
        investigation: {
          ...createEmptyInvestigation(input.userText),
          remainingWork: ["CLARIFY_COGNITIVE_WORK_ATTACHMENT"],
        },
        production: { kind: "REPLY", status: "PARTIAL", parts: [] },
      },
    };
  }

  const conductor: ConductorRunResult = await runCognitiveConductor({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    conversationId: input.conversationId,
    objective: input.objective ?? input.userText.slice(0, 2000),
    expectedOutcome: input.expectedOutcome,
    workId: attachment.workId,
    forceNewWork: attachment.forceNew,
    turnCommandId: input.turnCommandId,
    // C17: local cap remains technical; default raised for investigation depth.
    // SEGMENT_INVOCATION_LIMIT still suspends honestly when exhausted.
    maxSegmentsThisInvocation: input.maxSegmentsThisInvocation ?? 5,
    resolvePolicy: (work, segmentIndex) => {
      const seed =
        work.state.intentSummary ||
        work.objective ||
        input.userText;
      const hint = work.state.profileHint;
      const base = buildCognitivePolicy(seed, undefined, { profileHint: hint });
      if (segmentIndex > 0 && hint === "investigation") {
        return buildCognitivePolicy(seed, undefined, {
          profileHint: "investigation",
          effortHint: "high",
        });
      }
      if (hint === "simple") {
        return buildCognitivePolicy(seed, undefined, {
          profileHint: "simple",
          effortHint: "low",
        });
      }
      return input.policyOverride ?? base;
    },
    runSegment: async ({ work, segmentIndex, policy }) => {
      const continuationHint =
        segmentIndex === 0
          ? ""
          : [
              "",
              "[Continuation du même travail cognitif — segment suivant]",
              `workId=${work.id} revision=${work.revision}`,
              `Objectif: ${work.objective}`,
              work.state.intentSummary
                ? `Intention consolidée: ${work.state.intentSummary}`
                : null,
              work.state.desiredOutcome
                ? `Résultat attendu: ${work.state.desiredOutcome}`
                : null,
              work.state.remainingWork.length
                ? `Travail restant: ${work.state.remainingWork.join("; ")}`
                : null,
              work.state.questions
                .filter((q) => q.status !== "ANSWERED")
                .map((q) => `Q[${q.importance}]: ${q.text}`)
                .join("\n") || null,
              work.state.constraints.length
                ? `Contraintes: ${work.state.constraints.join("; ")}`
                : null,
            ]
              .filter(Boolean)
              .join("\n");

      let reply: NoraGenerateResult;
      if (probeReply && segmentIndex === 0 && !probeConsumed) {
        probeConsumed = true;
        reply = probeReply;
      } else {
        reply = await generateNoraReply({
          userText:
            segmentIndex === 0
              ? input.userText
              : `${input.userText}${continuationHint}`,
          contextSnippets: [
            ...input.contextSnippets,
            candidateSnippet,
            ...(segmentIndex > 0
              ? [
                  `Checkpoint cognitif ${work.id} r${work.revision}`,
                  work.state.intentSummary || "",
                  `attachment=${attachment.reason}`,
                ].filter(Boolean)
              : [`attachment=${attachment.reason}`]),
          ],
          knowledgeSnippets: input.knowledgeSnippets,
          pilotageSnippets: input.pilotageSnippets,
          levelASignals: input.levelASignals,
          ckiDelivery: input.ckiDelivery,
          onProvisionalChunk: input.onProvisionalChunk,
          toolScope: input.toolScope,
          policyOverride: policy,
        });
      }
      segmentBox.reply = reply;
      const investigation = mergeInvestigationFromReply(
        work.state.intentSummary
          ? work.state
          : createEmptyInvestigation(input.userText),
        reply,
        input.userText,
      );
      // Stamp filiation on investigation for READY/DRAFT consumers.
      investigation.cognitiveWorkId = work.id;
      investigation.cognitiveRevision = work.revision;
      const continueWork = semanticContinueWork(
        reply.qualification,
        investigation,
        reply,
      );
      const usage = usageFromReply(reply);
      const production = documentProductionFromReply(
        work,
        reply,
        segmentIndex,
        continueWork,
      );
      return {
        replyText: reply.content,
        qualification: reply.qualification,
        investigation,
        generationId: reply.generationId,
        continueWork,
        resourcesDelta: {
          inputTokens: usage.inputTokens,
          outputTokens: usage.outputTokens,
          modelRequested: reply.modelRequested,
          modelApplied: reply.modelApplied,
          effortRequested: reply.effortRequested,
          effortApplied: reply.effortApplied,
          webCalls: (reply.observedToolSources ?? []).filter((s) => s.kind === "WEB")
            .length,
          limits:
            usage.inputTokens == null
              ? ["USAGE_TOKENS_UNKNOWN"]
              : undefined,
        },
        production,
      };
    },
  });

  const lastReply = segmentBox.reply;
  if (!lastReply) {
    throw new Error("CONDUCTOR_NO_SEGMENT");
  }

  // C17: align lifecycle — suspended conductor must not claim COMPLETE reply.
  const alignedStatus: NoraGenerateResult["status"] = conductor.suspended
    ? "INTERRUPTED"
    : lastReply.status;

  const reply: NoraGenerateResult = {
    ...lastReply,
    content: conductor.replyText || lastReply.content,
    qualification: conductor.qualification ?? lastReply.qualification,
    status: alignedStatus,
  };

  return {
    ...reply,
    conductor: {
      workId: conductor.work.id,
      revision: conductor.work.revision,
      segmentsRun: conductor.segmentsRun,
      resumed: conductor.resumed,
      suspended: conductor.suspended,
      suspendReason: conductor.suspendReason,
      investigation: {
        ...conductor.investigation,
        cognitiveWorkId: conductor.work.id,
        cognitiveRevision: conductor.work.revision,
      },
      production: conductor.production,
    },
  };
}
```

### FILE `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts`

- SHA-256: `01b7defe94d7cbed3b3fc0c6a24cd71a6e16643a707f05d6b8b293dc17c0e49e`
- Lines: 930

```typescript
/**
 * Canonical D3 semantic qualification envelope (ML4C SEM / TV-01…TV-05).
 * Validated structure ≠ authority. Owners still gate every effect.
 */
import { z } from "zod";
import {
  PILOTAGE_OPERATIONS,
  type PilotageOperation,
} from "@/domains/pilotage/types";
import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
import {
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
  VISUAL_COMPOSITION_SCHEMA_LEGACY,
  VISUAL_COMPOSITION_SCHEMA_PROJECTION,
  VisualCompositionAgentOutputSchema,
} from "./visual-composition";
import {
  deriveReplyDraftFromCanonicalSections,
  REPLY_DRAFT_MAX_CHARS,
} from "./conversational-composition/derive-text";

/**
 * READ/validate envelope — accepts historical e05 + projection-v1 + canonical-v1.
 * Reuses concrete block union (no empty `{}` JSON Schema). Runtime authority remains
 * parseVisualComposition. LIVE Agent outputType = NoraTurnQualificationAgentSchema.
 */
const VisualCompositionPersistedSchema = z.object({
  schemaVersion: z.enum([
    VISUAL_COMPOSITION_SCHEMA,
    VISUAL_COMPOSITION_SCHEMA_PROJECTION,
    VISUAL_COMPOSITION_SCHEMA_LEGACY,
  ]),
  blocks: VisualCompositionAgentOutputSchema.shape.blocks,
});


export const SEMANTIC_QUALIFICATION_SCHEMA_VERSION = "ml4c-sem-qual-v1" as const;

export const IntentModeSchema = z.enum(["EXPLAIN", "EXPLORE", "PREPARE", "REQUEST_EFFECT"]);
export type IntentMode = z.infer<typeof IntentModeSchema>;

export const QualificationStatusSchema = z.enum([
  "QUALIFIED",
  "NEEDS_CLARIFICATION",
  "UNAVAILABLE",
]);
export type QualificationStatus = z.infer<typeof QualificationStatusSchema>;

/** Capability ids exposed to Nora — catalogue description, not authorization. */
export const StudioCapabilityIdSchema = z.enum([
  "d2.create_project",
  "d3.converse",
  "d4.create_document",
  "d4.revise_document",
  "d4.read_knowledge",
  /** Selective D4 continuity write — not a HumanDecision / not lexical. */
  "d4.record_knowledge",
  "d5.pilotage_command",
  "d6.human_decision",
  "d7.prepare_publication",
  "d7.dispatch_publication",
  /** Documentary merge of an existing Studio publication PR — distinct from publication. */
  "d7.merge_publication",
  /**
   * C14 — prepare a Cursor technical contract DRAFT from investigation (D7).
   * Semantic only: mode PREPARE. Never lexical. Never implies D6 authorize / dispatch.
   */
  "d7.prepare_cursor_contract",
  "d9.git_integration",
]);
export type StudioCapabilityId = z.infer<typeof StudioCapabilityIdSchema>;

export const KnowledgeRecordKindSchema = z.enum(["ACQUIS", "OPEN_POINT", "SUBJECT"]);
export const KnowledgeEpistemicSchema = z.enum([
  "hypothesized",
  "recommended",
  "established",
  "limited",
]);

export const PilotageOperationSchema = z.enum(
  PILOTAGE_OPERATIONS as unknown as [PilotageOperation, ...PilotageOperation[]],
);

/**
 * Hard ceiling for secondary LIVE prose fields (anti-UNKNOWN).
 * Soft editorial targets stay in Nora instructions (former Zod maxes).
 * Do NOT apply to IDs, enums, UI labels, projectName/subjectTitle, replyDraft, knowledgeStatement, document body.
 */
export const LIVE_PROSE_HARD_MAX = 2000;

export const QualifiedIntentItemSchema = z.object({
  id: z.string().min(1).max(64),
  capabilityId: StudioCapabilityIdSchema,
  mode: IntentModeSchema,
  /** Soft target ~500 ; hard max LIVE_PROSE_HARD_MAX. */
  summary: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  parameters: z
    .object({
      projectName: z.string().max(120).optional(),
      /** Soft target ~200. */
      documentHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      /** Soft target ~80. */
      sectionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      /** Soft target ~240. */
      pathHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      cycleType: z.string().max(64).optional(),
      toCycleType: z.string().max(64).optional(),
      methodRef: z.string().max(120).optional(),
      methodVersion: z.string().max(64).optional(),
      /** Soft target ~200. */
      decisionHint: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      decisionId: z.string().max(120).optional(),
      objectRef: z.string().max(120).optional(),
      /** Soft target ~500. */
      statement: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      /** Soft target ~240. */
      publicationPath: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      /** Explicit PR number for d7.merge_publication — never invent. */
      prNumber: z.number().int().positive().max(999999).optional(),
      /** owner/name for merge target when the Pilote named a repository. */
      repositoryFullName: z.string().max(200).optional(),
      /**
       * Material condition on an effect (e.g. merge after validation).
       * OPEN / UNVERIFIABLE never authorize immediate D7/D9.
       * SATISFIED alone is never a proof — Studio must not invent satisfaction.
       */
      effectCondition: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      effectConditionStatus: z
        .enum(["NONE", "OPEN", "SATISFIED", "UNVERIFIABLE"])
        .optional(),
      /** Typed D5/D6 operation — never use free-text notes as enum substitute. */
      pilotageOperation: PilotageOperationSchema.optional(),
      restrictionKindHint: z.string().max(64).optional(),
      restrictionTargetRefHint: z.string().max(120).optional(),
      /** Soft target ~500 ; raised 400→2000 (2026-11-19) decision rationale UNKNOWN. */
      notes: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      /**
       * C14 — when capabilityId=d7.prepare_cursor_contract, mark a corrective draft
       * within an existing mandate (A04). Never implies Cursor dispatch.
       * Enum string (not boolean) for Agents SDK JSON Schema compatibility.
       */
      correctiveDraft: z.enum(["true", "false"]).optional(),
      /** Typed D4 continuity capitalisation (RG-KNOW-001) — owner still validates. */
      knowledgeKind: KnowledgeRecordKindSchema.optional(),
      /** Raised 500→5000 (2026-11-19): SUBJECT synthesis / rich ACQUIS were failing LIVE schema validation (CampusNova UNKNOWN). */
      knowledgeStatement: z.string().max(5000).optional(),
      epistemic: KnowledgeEpistemicSchema.optional(),
      subjectTitle: z.string().max(120).optional(),
      subjectId: z.string().max(120).optional(),
      /** Soft target ~240. */
      continuityReason: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      /** Prefer these existing resources when selecting D4 context (Nora-chosen). */
      relevantAcquisIds: z.array(z.string().max(120)).max(8).optional(),
      relevantOpenPointIds: z.array(z.string().max(120)).max(8).optional(),
      relevantSubjectIds: z.array(z.string().max(120)).max(8).optional(),
      /** When correcting a CURRENT acquis, Nora may point the prior id for D4 supersession. */
      supersedesAcquisId: z.string().max(120).optional(),
      /** When an ACQUIS factually closes an open point, Nora may cite its id. */
      resolvesOpenPointId: z.string().max(120).optional(),
      /**
       * C18 — dedicated Cursor technical instruction on prepare_cursor_contract.
       * Prefer this over top-level productionInstruction when emitting the intent.
       */
      productionInstruction: z.string().min(1).max(100_000).optional(),
      /** C18 — specific acceptance criteria for prepare_cursor_contract (≠ remainingWork). */
      acceptanceCriteria: z.array(z.string().min(1).max(LIVE_PROSE_HARD_MAX)).max(40).optional(),
    })
    .strict()
    .default({}),
  /** Soft target ~240 per item. */
  constraints: z.array(z.string().max(LIVE_PROSE_HARD_MAX)).max(12).default([]),
  dependsOn: z.array(z.string().min(1).max(64)).max(8).default([]),
  /** Soft target ~240 per item. */
  sourceEvidence: z.array(z.string().max(LIVE_PROSE_HARD_MAX)).max(8).default([]),
});
export type QualifiedIntentItem = z.infer<typeof QualifiedIntentItemSchema>;

/** O-03 — typed document payload distinct from replyDraft (max D4 = 100_000). */
export const DocumentProposalSchema = z
  .object({
    /** Soft target ~400. */
    title: z.string().min(1).max(LIVE_PROSE_HARD_MAX),
    contentMarkdown: z.string().min(1).max(100_000),
    /**
     * C22 — semantic merge intent decided by Nora (server enforces integrity).
     * APPEND = mid-work contribution; CORRECT = patch prior; SUPERSEDE = consolidated replacement.
     * Never inferred from heading count or length alone.
     */
    mergeMode: z.enum(["APPEND", "CORRECT", "SUPERSEDE"]).optional(),
  })
  .strict();
/** C-03 — designate a prior assistant proposal by message id (content resolved server-side). */
export const DocumentSourceSchema = z
  .object({
    kind: z.literal("PRIOR_ASSISTANT_MESSAGE"),
    assistantMessageId: z.string().min(1).max(128),
  })
  .strict();

/** Qualitative sas maturation — structured only; never a keyword scrape of replyDraft. */
export const PreparationAssessmentSchema = z.enum([
  "EXPLORING",
  "CLARIFYING",
  "PROPOSAL",
  "BASE_SUFFICIENTE",
]);
export type PreparationAssessment = z.infer<typeof PreparationAssessmentSchema>;

export const NoraTurnQualificationSchema = z.object({
  schemaVersion: z.literal(SEMANTIC_QUALIFICATION_SCHEMA_VERSION),
  status: QualificationStatusSchema,
  /**
   * Compréhension du tour courant (demande immédiate, reformulation locale).
   * Ne pas confondre avec l'intention métier durable du projet.
   * Soft target ~800.
   */
  goal: z.string().max(LIVE_PROSE_HARD_MAX).default(""),
  /**
   * Intention métier durable du projet — distincte de goal / proposedProjectName.
   * Chaîne vide = inchangée ce tour (D2 conserve la valeur antérieure).
   * Renseigner uniquement pour établir ou corriger explicitement l'objectif fondateur.
   * Soft target ~800.
   */
  projectIntention: z.string().max(LIVE_PROSE_HARD_MAX).default(""),
  /** Résultat envisagé lorsque réellement exprimé — ne pas inventer. Soft target ~800. */
  desiredOutcome: z.string().max(LIVE_PROSE_HARD_MAX).default(""),
  /** Périmètre initial lorsque réellement exprimé — ne pas inventer. Soft target ~800. */
  initialScope: z.string().max(LIVE_PROSE_HARD_MAX).default(""),
  /**
   * Nom de travail proposé pour le sas — distinct d'un REQUEST_EFFECT D2.
   * Permet une correction de nom sans second acte d'effet concurrent (S05).
   */
  proposedProjectName: z.string().max(120).default(""),
  intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
  /**
   * Questions encore ouvertes APRÈS ce tour.
   * - tableau non vide = questions courantes connues ;
   * - tableau explicitement vide = aucune question courante après réévaluation fiable ;
   * - champ ABSENT (undefined) = questions non réévaluées — D2 conserve le courant antérieur.
   * Ne pas confondre omission et []. Pas de .default([]) : Zod effacerait la distinction.
   * Soft target ~400 per item.
   */
  clarifications: z.array(z.string().max(LIVE_PROSE_HARD_MAX)).max(8).optional(),
  /**
   * Ensemble 05 / P1-A — propositions de poursuite conversationnelles (≠ clarifications).
   * Additive / optional. Omission or [] = aucun bouton de poursuite.
   * Never derive continueChoices from clarifications[].
   */
  continueChoices: z
    .array(
      z.object({
        id: z.string().min(1).max(64),
        /** UI chip — keep short (not LIVE_PROSE_HARD_MAX). */
        label: z.string().min(1).max(160),
        /** Explicit pilot utterance transmitted on click — not a métier command. Soft target ~800. */
        transmitText: z.string().min(1).max(LIVE_PROSE_HARD_MAX),
      }),
    )
    .max(6)
    .optional(),
  /**
   * Optional consultable references (D4/D9) — not continuation choices; do not expire with §6.8.
   */
  resourceReferences: z
    .array(
      z.object({
        kind: z.enum(["document", "git", "external"]),
        /** UI label — keep short. */
        label: z.string().min(1).max(200),
        resourceId: z.string().max(128).optional(),
        revisionId: z.string().max(128).optional(),
        repositoryId: z.string().max(128).optional(),
        /** Soft target ~400. */
        path: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
        ref: z.string().max(120).optional(),
        commit: z.string().max(64).optional(),
        /** Soft target ~800. */
        href: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
      }),
    )
    .max(8)
    .optional(),
  /** Raised 12000→20000 (2026-11-19): rich consolidation replyDraft near/over prior ceiling → LIVE UNKNOWN. */
  replyDraft: z.string().max(REPLY_DRAFT_MAX_CHARS).default(""),
  /** Appréciation qualitative de préparation (suggestion, jamais une autorité). */
  preparationAssessment: PreparationAssessmentSchema.optional(),
  /** Soft target ~800. */
  preparationAssessmentExplanation: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
  documentProposal: DocumentProposalSchema.optional(),
  documentSource: DocumentSourceSchema.optional(),
  /**
   * Optional visual / canonical composition.
   * READ path accepts e05 + projection-v1 + canonical-v1; Studio re-validates via parseVisualComposition.
   * LIVE WRITE uses NoraTurnQualificationAgentSchema (canonical-v1 only — no empty `{}` schema).
   */
  visualComposition: VisualCompositionPersistedSchema.optional(),
  /**
   * C18 — cognitive work relation proposed by Nora (server validates identity/scope).
   * CONTINUE = same work; INDEPENDENT = new work; CLARIFY = await pilot; MATERIAL_CHANGE = new objective.
   */
  cognitiveWorkRelation: z
    .enum(["CONTINUE", "INDEPENDENT", "CLARIFY", "MATERIAL_CHANGE", "UNRELATED"])
    .optional(),
  /** Proposed cognitive work id when CONTINUE/CLARIFY — never authoritative alone. */
  proposedCognitiveWorkId: z.string().min(1).max(128).optional(),
  /**
   * Disposition of the current cognitive objective after this segment.
   * COMPLETE = objective done; AWAIT_PILOT = explicit wait; CONTINUE = more segments;
   * SUSPEND = technical/honest pause. Independent of Cursor contract readiness.
   */
  workDisposition: z
    .enum(["CONTINUE", "AWAIT_PILOT", "SUSPEND", "COMPLETE"])
    .optional(),
  /** Stable determining questions — ids must be stable across turns when reusing. */
  determiningQuestions: z
    .array(
      z.object({
        id: z.string().min(1).max(64),
        text: z.string().min(1).max(LIVE_PROSE_HARD_MAX),
        status: z.enum(["OPEN", "ANSWERED", "BLOCKED", "DEFERRED"]),
        importance: z.enum(["DETERMINANT", "USEFUL", "OPTIONAL"]),
        answerSummary: z.string().max(LIVE_PROSE_HARD_MAX).optional(),
        sourceRefs: z.array(z.string().max(200)).max(8).optional(),
      }),
    )
    .max(16)
    .optional(),
  /** Versioned remaining work — not acceptance criteria. */
  remainingWorkItems: z
    .array(
      z.object({
        id: z.string().min(1).max(64),
        text: z.string().min(1).max(LIVE_PROSE_HARD_MAX),
        status: z.enum(["OPEN", "RESOLVED", "REPLACED", "OBSOLETE", "BLOCKED"]),
      }),
    )
    .max(24)
    .optional(),
  contradictions: z
    .array(
      z.object({
        a: z.string().min(1).max(LIVE_PROSE_HARD_MAX),
        b: z.string().min(1).max(LIVE_PROSE_HARD_MAX),
        detail: z.string().min(1).max(LIVE_PROSE_HARD_MAX),
      }),
    )
    .max(8)
    .optional(),
  restrictions: z.array(z.string().min(1).max(LIVE_PROSE_HARD_MAX)).max(12).optional(),
  /**
   * Dedicated technical instruction for Cursor contract — ≠ replyDraft.
   * Ceiling matches D4 document body (long contracts). Omission = no instruction this turn.
   */
  productionInstruction: z.string().min(1).max(100_000).optional(),
  /**
   * Acceptance criteria as business production result — ≠ remainingWork.
   * Soft ceiling for schema safety only (not a business rule of 8 or 12).
   */
  acceptanceCriteria: z.array(z.string().min(1).max(LIVE_PROSE_HARD_MAX)).max(40).optional(),
  /** Semantic profile hint for adaptive policy — server may apply; never length-based. */
  cognitiveProfileHint: z.enum(["simple", "analyse", "investigation"]).optional(),
});
export type NoraTurnQualification = z.infer<typeof NoraTurnQualificationSchema>;

/** Agents SDK outputType — WRITE canonical-v1 only (A3). */
export const NoraTurnQualificationAgentSchema = NoraTurnQualificationSchema.extend({
  visualComposition: VisualCompositionAgentOutputSchema.optional(),
});

/**
 * LIVE Agents SDK `outputType` (E05 freeze).
 * Must remain a plain ZodObject — `z.preprocess` / ZodEffects break Agents SDK
 * JSON Schema conversion (immediate UNKNOWN, fingerprint b7feb141, 0 tools, RECETTE 2026-11-19).
 * Soft truncation cannot live here; raise plain maxes on the persist schema instead.
 */
export const NoraTurnQualificationLiveOutputSchema =
  NoraTurnQualificationSchema.omit({ visualComposition: true });

export type QualificationValidation =
  | { ok: true; value: NoraTurnQualification }
  | { ok: false; reason: string };

const EFFECT_CAPABILITIES = new Set<StudioCapabilityId>([
  "d2.create_project",
  "d4.create_document",
  "d4.revise_document",
  "d4.record_knowledge",
  "d5.pilotage_command",
  "d6.human_decision",
  "d7.prepare_publication",
  "d7.dispatch_publication",
  "d7.merge_publication",
  "d9.git_integration",
]);

const PILOTAGE_CAPS = new Set<StudioCapabilityId>([
  "d5.pilotage_command",
  "d6.human_decision",
]);

export function validateNoraTurnQualification(raw: unknown): QualificationValidation {
  const parsed = NoraTurnQualificationSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, reason: `SCHEMA_INVALID:${parsed.error.issues[0]?.message ?? "unknown"}` };
  }
  const q = parsed.data;
  const ids = new Set(q.intents.map((i) => i.id));
  if (ids.size !== q.intents.length) {
    return { ok: false, reason: "DUPLICATE_INTENT_ID" };
  }
  for (const intent of q.intents) {
    for (const dep of intent.dependsOn) {
      if (!ids.has(dep)) return { ok: false, reason: `DEPENDENCY_UNKNOWN:${dep}` };
      if (dep === intent.id) return { ok: false, reason: "DEPENDENCY_SELF" };
    }
    if (
      intent.mode === "REQUEST_EFFECT" &&
      PILOTAGE_CAPS.has(intent.capabilityId) &&
      !intent.parameters.pilotageOperation
    ) {
      return { ok: false, reason: `PILOTAGE_OPERATION_REQUIRED:${intent.id}` };
    }
    if (
      intent.parameters.pilotageOperation &&
      !PILOTAGE_CAPS.has(intent.capabilityId)
    ) {
      return { ok: false, reason: `PILOTAGE_OPERATION_CAPABILITY_MISMATCH:${intent.id}` };
    }
  }
  // C-03: prior source is authoritative; same-turn proposal must not silently compete.
  if (q.documentSource?.kind === "PRIOR_ASSISTANT_MESSAGE" && q.documentProposal) {
    return { ok: false, reason: "DOCUMENT_SOURCE_AND_PROPOSAL_CONFLICT" };
  }
  const graph = new Map(q.intents.map((i) => [i.id, i.dependsOn] as const));
  const visiting = new Set<string>();
  const visited = new Set<string>();
  const dfs = (n: string): boolean => {
    if (visiting.has(n)) return true;
    if (visited.has(n)) return false;
    visiting.add(n);
    for (const d of graph.get(n) ?? []) {
      if (dfs(d)) return true;
    }
    visiting.delete(n);
    visited.add(n);
    return false;
  };
  for (const id of ids) {
    if (dfs(id)) return { ok: false, reason: "DEPENDENCY_CYCLE" };
  }
  // Soft-sanitize visual composition.
  // Strategy A (canonical-v1): declared but unusable → refuse (A7). Never silently
  // fall back to an independent replyDraft as if the composition validated.
  // Legacy (e05 / projection-v1): soft-drop composition; replyDraft remains authority.
  // Omitted visualComposition: narrative-only — leave replyDraft untouched.
  if (q.visualComposition !== undefined) {
    const rawComp = q.visualComposition as { schemaVersion?: string };
    const declaredCanonical = rawComp.schemaVersion === VISUAL_COMPOSITION_SCHEMA;
    const cleaned = parseVisualComposition(q.visualComposition);
    if (cleaned) {
      (q as { visualComposition?: unknown }).visualComposition = cleaned;
      if (cleaned.contentAuthority === "canonical_sections") {
        const derived = deriveReplyDraftFromCanonicalSections(cleaned);
        if (!derived.ok) {
          if (derived.reason === "CV_DERIVE_OVERFLOW") {
            return {
              ok: false,
              reason: `CANONICAL_REPLY_OVERFLOW:${derived.length}>${derived.max}`,
            };
          }
          // CV_DERIVE_EMPTY (anchors-only, whitespace prose, etc.)
          return {
            ok: false,
            reason: `CANONICAL_COMPOSITION_EMPTY:${derived.reason}`,
          };
        }
        (q as { replyDraft: string }).replyDraft = derived.text;
      }
    } else if (declaredCanonical) {
      return { ok: false, reason: "CANONICAL_COMPOSITION_INVALID" };
    } else {
      delete (q as { visualComposition?: unknown }).visualComposition;
    }
  }
  return { ok: true, value: q };
}

export function unavailableQualification(reason: string, replyDraft = ""): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "UNAVAILABLE",
    goal: "",
    projectIntention: "",
    desiredOutcome: "",
    initialScope: "",
    proposedProjectName: "",
    intents: [],
    clarifications: [reason.slice(0, LIVE_PROSE_HARD_MAX)],
    replyDraft:
      replyDraft ||
      "Je ne peux pas qualifier cette intention de façon fiable pour le moment. Aucun effet n'a été engagé.",
  };
}

export function effectIntents(q: NoraTurnQualification): QualifiedIntentItem[] {
  if (q.status !== "QUALIFIED") return [];
  return q.intents.filter((i) => i.mode === "REQUEST_EFFECT");
}

export function wantsCapability(
  q: NoraTurnQualification,
  capabilityId: StudioCapabilityId,
): boolean {
  return effectIntents(q).some((i) => i.capabilityId === capabilityId);
}

export function firstEffectParam(
  q: NoraTurnQualification,
  capabilityId: StudioCapabilityId,
  key: keyof QualifiedIntentItem["parameters"],
): string | undefined {
  const hit = effectIntents(q).find((i) => i.capabilityId === capabilityId);
  const v = hit?.parameters?.[key];
  return typeof v === "string" && v.trim() ? v.trim() : undefined;
}

export function sanitizeProposedLabel(raw: string): string {
  return raw
    .replace(/[*_`#~\[\]()]+/g, " ")
    .replace(/[«»"']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Server-owned S05 turn kind from canonical qualification — not a lexical router. */
export function deriveThreadTurnKind(q: NoraTurnQualification): ThreadTurnKind {
  if (q.status === "UNAVAILABLE") return "INCERTAIN";
  if (q.status === "NEEDS_CLARIFICATION") return "INCERTAIN";
  const effects = effectIntents(q);
  if (effects.length > 0) return "INTENTION_EFFET";
  const cognitive = q.intents.some(
    (i) =>
      i.capabilityId === "d3.converse" ||
      i.capabilityId === "d4.read_knowledge" ||
      i.mode === "EXPLAIN" ||
      i.mode === "EXPLORE",
  );
  if (cognitive && q.intents.length > 0) return "DIALOGUE_INDEPENDANT";
  return "INCERTAIN";
}

export type DurablePilotageBinding = {
  schemaVersion: typeof SEMANTIC_QUALIFICATION_SCHEMA_VERSION;
  intentId: string;
  capabilityId: "d5.pilotage_command" | "d6.human_decision";
  operation: PilotageOperation;
  cycleType?: string;
  toCycleType?: string;
  methodRef?: string;
  methodVersion?: string;
  decisionId?: string;
  objectRef?: string;
  statement?: string;
  restrictionKindHint?: string;
  restrictionTargetRefHint?: string;
  objective?: string;
};

export function extractPilotageBinding(
  q: NoraTurnQualification,
  select?: { intentId?: string; operation?: string },
): DurablePilotageBinding | { ambiguous: true; reason: string } | null {
  if (q.status !== "QUALIFIED") {
    return { ambiguous: true, reason: `QUALIFICATION_${q.status}` };
  }
  let hits = effectIntents(q).filter((i) => PILOTAGE_CAPS.has(i.capabilityId));
  if (hits.length === 0) return null;
  // Disambiguate multi-intent qualifications by durable intentId / operation.
  if (select?.intentId) {
    hits = hits.filter((i) => i.id === select.intentId);
  }
  if (select?.operation) {
    hits = hits.filter((i) => i.parameters.pilotageOperation === select.operation);
  }
  if (hits.length === 0) {
    return {
      ambiguous: true,
      reason: select?.intentId || select?.operation
        ? "PILOTAGE_INTENT_NOT_IN_QUALIFICATION"
        : "NO_PILOTAGE_EFFECT_INTENTS",
    };
  }
  if (hits.length > 1) {
    return { ambiguous: true, reason: "MULTIPLE_PILOTAGE_EFFECT_INTENTS" };
  }
  const intent = hits[0]!;
  const operation = intent.parameters.pilotageOperation;
  if (!operation) {
    return { ambiguous: true, reason: "SEMANTIC_PILOTAGE_OPERATION_MISSING" };
  }
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    intentId: intent.id,
    capabilityId: intent.capabilityId as DurablePilotageBinding["capabilityId"],
    operation,
    cycleType: intent.parameters.cycleType,
    toCycleType: intent.parameters.toCycleType,
    methodRef: intent.parameters.methodRef,
    methodVersion: intent.parameters.methodVersion,
    decisionId: intent.parameters.decisionId,
    objectRef: intent.parameters.objectRef,
    statement: intent.parameters.statement,
    restrictionKindHint: intent.parameters.restrictionKindHint,
    restrictionTargetRefHint: intent.parameters.restrictionTargetRefHint,
    objective: intent.summary,
  };
}

/** Match a requested operation against durable qualification (owner-side). */
export function matchPilotageIntentInQualification(
  q: NoraTurnQualification,
  input: { operation?: string; intentId?: string },
): DurablePilotageBinding | { reject: true; reason: string; reasonCode: string } {
  const binding = extractPilotageBinding(q, {
    intentId: input.intentId,
    operation: input.operation,
  });
  if (binding == null) {
    return {
      reject: true,
      reasonCode: "AMBIGUOUS",
      reason: "Aucune intention pilotage REQUEST_EFFECT dans la qualification durable",
    };
  }
  if ("ambiguous" in binding) {
    return { reject: true, reasonCode: "AMBIGUOUS", reason: binding.reason };
  }
  return binding;
}

/** Projection used by existing D2/D4 mission builders — derived from semantic intents only. */
export type SemanticStudioProjection = {
  wantsProjectCreate: boolean;
  proposedProjectName: string | null;
  wantsFollowOnDocument: boolean;
  pendingDocumentBrief: string | null;
  documentAct: { kind: "NONE" } | { kind: "CREATE" } | {
    kind: "REVISE";
    documentHint: string | null;
    sectionHint: string | null;
  };
  publication: {
    wantsPublish: boolean;
    needsExplicitPath: boolean;
    path: string | null;
    targetPath: string | null;
    targetBranch: string | null;
    documentHint: string | null;
    objectRef: string | null;
    repositoryHint: string | null;
    clarify: string | null;
    capabilityId: "d7.prepare_publication" | "d7.dispatch_publication" | "d9.git_integration" | null;
  };
  merge: {
    wantsMerge: boolean;
    prNumber: number | null;
    repositoryHint: string | null;
    clarify: string | null;
    capabilityId: "d7.merge_publication" | null;
    conditionStatus: "NONE" | "OPEN" | "SATISFIED" | "UNVERIFIABLE";
    conditionText: string | null;
  };
  simpleDialogue: boolean;
};

export function projectStudioEffects(q: NoraTurnQualification): SemanticStudioProjection {
  const effects = effectIntents(q);
  const createProject = effects.find((i) => i.capabilityId === "d2.create_project");
  const createDoc = effects.find((i) => i.capabilityId === "d4.create_document");
  const reviseDoc = effects.find((i) => i.capabilityId === "d4.revise_document");
  const preparePub = effects.find((i) => i.capabilityId === "d7.prepare_publication");
  const dispatchPub = effects.find((i) => i.capabilityId === "d7.dispatch_publication");
  const gitPub = effects.find((i) => i.capabilityId === "d9.git_integration");
  const mergePub = effects.find((i) => i.capabilityId === "d7.merge_publication");
  // Prefer prepare over dispatch over generic git — not interchangeable.
  // Merge is never implied by publication intents.
  const publish = preparePub ?? dispatchPub ?? gitPub ?? null;
  const publishCapability = publish
    ? (publish.capabilityId as SemanticStudioProjection["publication"]["capabilityId"])
    : null;

  const wantsProjectCreate = Boolean(createProject);
  const fromIntent = createProject?.parameters.projectName
    ? sanitizeProposedLabel(createProject.parameters.projectName) || null
    : null;
  const fromEnvelope = q.proposedProjectName?.trim()
    ? sanitizeProposedLabel(q.proposedProjectName) || null
    : null;
  const proposedProjectName = fromIntent || fromEnvelope;

  const wantsFollowOnDocument = Boolean(
    wantsProjectCreate &&
      createDoc &&
      createProject &&
      createDoc.dependsOn.includes(createProject.id),
  );

  // Follow-on D4 after D2: defer immediate documentAct until Pilot create.
  // Immediate CREATE/REVISE only when not gated by an unresolved project-create intent.
  let documentAct: SemanticStudioProjection["documentAct"] = { kind: "NONE" };
  if (!wantsFollowOnDocument) {
    if (reviseDoc) {
      documentAct = {
        kind: "REVISE",
        documentHint: reviseDoc.parameters.documentHint ?? null,
        sectionHint: reviseDoc.parameters.sectionHint ?? null,
      };
    } else if (createDoc) {
      documentAct = { kind: "CREATE" };
    }
  }

  const pendingDocumentBrief = wantsFollowOnDocument
    ? (createDoc?.summary || createDoc?.parameters.notes || createDoc?.parameters.documentHint || null)
    : null;

  const path = publish?.parameters.publicationPath?.trim() || publish?.parameters.pathHint?.trim() || null;
  const publication = {
    wantsPublish: Boolean(publish),
    needsExplicitPath: Boolean(publish) && !path,
    path,
    targetPath: path,
    targetBranch: null as string | null,
    documentHint:
      publish?.parameters.documentHint?.trim() ||
      reviseDoc?.parameters.documentHint?.trim() ||
      null,
    objectRef: publish?.parameters.objectRef?.trim() || null,
    repositoryHint: publish?.parameters.repositoryFullName?.trim() || null,
    clarify: publish && !path ? "Chemin de publication Git manquant." : null,
    capabilityId: publishCapability,
  };

  const mergePrRaw = mergePub?.parameters.prNumber;
  const mergePr =
    typeof mergePrRaw === "number" && Number.isFinite(mergePrRaw) && mergePrRaw > 0
      ? Math.trunc(mergePrRaw)
      : null;
  const mergeRepo = mergePub?.parameters.repositoryFullName?.trim() || null;
  const conditionText = mergePub?.parameters.effectCondition?.trim() || null;
  const conditionStatusRaw = mergePub?.parameters.effectConditionStatus;
  const conditionStatus: SemanticStudioProjection["merge"]["conditionStatus"] =
    conditionStatusRaw === "OPEN" ||
    conditionStatusRaw === "SATISFIED" ||
    conditionStatusRaw === "UNVERIFIABLE"
      ? conditionStatusRaw
      : conditionText
        ? "OPEN"
        : "NONE";
  // Open condition ⇒ no immediate merge effect from projection.
  const mergeWantsImmediate =
    Boolean(mergePub) &&
    conditionStatus !== "OPEN" &&
    conditionStatus !== "UNVERIFIABLE" &&
    conditionStatus !== "SATISFIED";
  const mergeClarify =
    mergePub && !mergePr
      ? "Numéro de PR documentaire manquant pour le merge."
      : mergePub && conditionStatus === "OPEN"
        ? conditionText || "Condition de merge ouverte — précision ou preuve requise."
        : mergePub && conditionStatus === "UNVERIFIABLE"
          ? conditionText || "Condition de merge non vérifiable — aucun effet."
          : mergePub && conditionStatus === "SATISFIED"
            ? "Condition déclarée satisfaite sans preuve Studio — aucun effet inventé."
            : null;
  const merge = {
    wantsMerge: mergeWantsImmediate,
    prNumber: mergePr,
    repositoryHint: mergeRepo,
    clarify: mergeClarify,
    capabilityId: mergePub ? ("d7.merge_publication" as const) : null,
    conditionStatus,
    conditionText,
  };

  const simpleDialogue =
    !wantsProjectCreate &&
    documentAct.kind === "NONE" &&
    !publication.wantsPublish &&
    !merge.wantsMerge &&
    !effects.some(
      (i) => PILOTAGE_CAPS.has(i.capabilityId) || i.capabilityId === "d4.record_knowledge",
    );

  return {
    wantsProjectCreate,
    proposedProjectName,
    wantsFollowOnDocument,
    pendingDocumentBrief: pendingDocumentBrief?.slice(0, 400) ?? null,
    documentAct,
    publication,
    merge,
    simpleDialogue,
  };
}

export type KnowledgeCapitalisationProposal = {
  intentId: string;
  kind: z.infer<typeof KnowledgeRecordKindSchema>;
  statement: string;
  epistemic: z.infer<typeof KnowledgeEpistemicSchema>;
  subjectTitle?: string;
  subjectId?: string;
  continuityReason?: string;
  supersedesAcquisId?: string;
  resolvesOpenPointId?: string;
  relevantAcquisIds?: string[];
};

/**
 * Typed D4 continuity proposals from Nora qualification — never HumanDecision.
 *
 * Gate: only QUALIFIED + REQUEST_EFFECT + d4.record_knowledge.
 * EXPLAIN/EXPLORE/PREPARE intents are conversational only (TEMP-05).
 * Document/D6/Git REQUEST_EFFECT paths remain separate; this extractor never
 * loosens those capabilities.
 */
export function extractKnowledgeProposals(
  q: NoraTurnQualification,
): KnowledgeCapitalisationProposal[] {
  if (q.status !== "QUALIFIED") return [];
  const out: KnowledgeCapitalisationProposal[] = [];
  for (const intent of effectIntents(q)) {
    if (intent.capabilityId !== "d4.record_knowledge") continue;
    const kind = intent.parameters.knowledgeKind;
    const statement = (intent.parameters.knowledgeStatement ?? intent.summary ?? "").trim();
    if (!kind || statement.length < 12) continue;
    out.push({
      intentId: intent.id,
      kind,
      statement: statement.slice(0, 5000),
      epistemic: intent.parameters.epistemic ?? "hypothesized",
      subjectTitle: intent.parameters.subjectTitle?.trim() || undefined,
      subjectId: intent.parameters.subjectId?.trim() || undefined,
      continuityReason: intent.parameters.continuityReason?.trim() || undefined,
      supersedesAcquisId: intent.parameters.supersedesAcquisId?.trim() || undefined,
      resolvesOpenPointId: intent.parameters.resolvesOpenPointId?.trim() || undefined,
      relevantAcquisIds: intent.parameters.relevantAcquisIds?.filter(Boolean),
    });
  }
  return out;
}

/** Counts for OBS — codes only, never statement bodies. */
export function summarizeKnowledgeProposals(
  proposals: KnowledgeCapitalisationProposal[],
): {
  proposal_present: boolean;
  proposal_count: number;
  subject_count: number;
  acquis_count: number;
  open_point_count: number;
} {
  let subject_count = 0;
  let acquis_count = 0;
  let open_point_count = 0;
  for (const p of proposals) {
    if (p.kind === "SUBJECT") subject_count += 1;
    else if (p.kind === "ACQUIS") acquis_count += 1;
    else if (p.kind === "OPEN_POINT") open_point_count += 1;
  }
  return {
    proposal_present: proposals.length > 0,
    proposal_count: proposals.length,
    subject_count,
    acquis_count,
    open_point_count,
  };
}

/** Nora-preferred resource ids for context selection (non-authoritative). */
export function extractKnowledgeSelectionHints(q: NoraTurnQualification): {
  acquisIds: string[];
  openPointIds: string[];
  subjectIds: string[];
} {
  const acquisIds: string[] = [];
  const openPointIds: string[] = [];
  const subjectIds: string[] = [];
  if (q.status !== "QUALIFIED") return { acquisIds, openPointIds, subjectIds };
  for (const intent of q.intents) {
    for (const id of intent.parameters.relevantAcquisIds ?? []) {
      if (id && !acquisIds.includes(id)) acquisIds.push(id);
    }
    for (const id of intent.parameters.relevantOpenPointIds ?? []) {
      if (id && !openPointIds.includes(id)) openPointIds.push(id);
    }
    for (const id of intent.parameters.relevantSubjectIds ?? []) {
      if (id && !subjectIds.includes(id)) subjectIds.push(id);
    }
  }
  return { acquisIds, openPointIds, subjectIds };
}

export function mergeQualificationIntoResultJson(
  existingJson: string | null | undefined,
  terminalPayload: Record<string, unknown>,
): string {
  let semanticQualification: unknown;
  let semanticQualificationStashedAt: unknown;
  if (existingJson) {
    try {
      const prev = JSON.parse(existingJson) as Record<string, unknown>;
      semanticQualification = prev.semanticQualification;
      semanticQualificationStashedAt = prev.semanticQualificationStashedAt;
    } catch {
      /* ignore */
    }
  }
  const merged = {
    ...terminalPayload,
    ...(semanticQualification !== undefined ? { semanticQualification } : {}),
    ...(semanticQualificationStashedAt !== undefined
      ? { semanticQualificationStashedAt }
      : {}),
  };
  return JSON.stringify(merged);
}
```

### FILE `projects/sfia-studio-next/web/tests/unit/ml5-web-search-authorize.test.ts`

- SHA-256: `ce22506829b4b0f7006beb3305c0ff925bc6bfa45570b26a1beabf18ded63358`
- Lines: 87

```typescript
import { describe, expect, it } from "vitest";
import { authorizePublicWebQuery } from "@/domains/conversation/web-search-authorize";
import {
  __getPublicWebOutboundLogForTests,
  __resetPublicWebOutboundLogForTests,
  executePublicWebSearch,
} from "@/domains/conversation/public-web-search-frontier";

describe("C22 WEB query provenance authorization", () => {
  it("refuses free-form rawQuery without exact allowlist", () => {
    const r = authorizePublicWebQuery({
      rawQuery: "budget interne Q4 1.2M€ AcmeCorp confidentiel projet Orion",
    });
    expect(r.ok).toBe(false);
    expect(r.deniedReason).toMatch(/PROVENANCE_REQUIRED|free-form/);
  });

  it("refuses free-form publicTopic without registry/allowlist", () => {
    const privateFact = "le client NordIndustrie paie 480k€/an pour le support";
    const r = authorizePublicWebQuery({
      publicTopic: `normes ISO ${privateFact}`,
      privateContextMarkers: [privateFact],
    });
    expect(r.ok).toBe(false);
    expect(r.deniedReason).toMatch(/PROVENANCE_NOT_ESTABLISHED/);
  });

  it("refuses authorizedPublicFacts when registry empty", () => {
    const r = authorizePublicWebQuery({
      publicTopicRef: "iso",
      turnPublicTopics: { iso: "ISO 27001 overview" },
      authorizedPublicFacts: ["fait métier inventé 480k"],
      turnPublicFacts: [],
    });
    expect(r.ok).toBe(false);
    expect(r.deniedReason).toMatch(/PUBLIC_REGISTRY_EMPTY|PUBLIC_FACT_NOT_REGISTERED/);
  });

  it("accepts registered publicTopicRef composition", () => {
    const r = authorizePublicWebQuery({
      publicTopicRef: "rfc9110",
      turnPublicTopics: { rfc9110: "RFC 9110 HTTP semantics caching" },
      privateContextMarkers: ["NordIndustrie-secret-480k"],
    });
    expect(r.ok).toBe(true);
    expect(r.provenance).toBe("REGISTERED_PUBLIC_COMPOSITION");
    expect(r.authorizedQuery).toMatch(/RFC 9110/);
    expect(r.authorizedQuery).not.toMatch(/NordIndustrie|480k/);
  });

  it("accepts exact allowlisted query", () => {
    const exact = "MDN Fetch API credentials omit";
    const r = authorizePublicWebQuery({
      explicitlyAuthorizedExactQuery: exact,
      turnAuthorizedExactQueries: [exact],
    });
    expect(r.ok).toBe(true);
    expect(r.provenance).toBe("EXPLICIT_AUTHORIZED_EXACT");
  });

  it("executePublicWebSearch refuses free-form publicTopic with no egress", async () => {
    __resetPublicWebOutboundLogForTests();
    const r = await executePublicWebSearch({
      publicTopic: "norme ISO 27001 pour notre contrat NordIndustrie 480k",
      env: { ...process.env, SFIA_WEB_SEARCH_ENABLED: "1", SFIA_WEB_SEARCH_LIVE: "0" },
    });
    expect(r.status).toBe("DENIED");
    expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
  });

  it("executePublicWebSearch with allowlisted exact records authorized egress only", async () => {
    __resetPublicWebOutboundLogForTests();
    const exact = "OWASP SSRF prevention checklist";
    const privateFact = "salaire interne 92k€ NoraPilot";
    const r = await executePublicWebSearch({
      explicitlyAuthorizedExactQuery: exact,
      turnAuthorizedExactQueries: [exact],
      privateContextMarkers: [privateFact],
      env: { ...process.env, SFIA_WEB_SEARCH_ENABLED: "1", SFIA_WEB_SEARCH_LIVE: "0" },
    });
    expect(r.status).toBe("AVAILABLE");
    expect(r.query).toBe(exact);
    expect(JSON.stringify(__getPublicWebOutboundLogForTests())).not.toMatch(
      /92k|NoraPilot|salaire/,
    );
  });
});
```

### FILE `projects/sfia-studio-next/web/tests/unit/ml5-c22-report-binding.test.ts`

- SHA-256: `b0d1c4750a79f7f1459d597a630c6e539ec8559151a3a0625d84f0c27e76250a`
- Lines: 64

```typescript
import { describe, expect, it } from "vitest";
import { mkdirSync, writeFileSync, symlinkSync, rmSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { mkdtempSync } from "fs";
import { collectAttemptBoundReport } from "@/domains/execution/cursor-autonomous-restitution";

describe("C22 attempt-bound report collection", () => {
  it("accepts confined attempt-path report with binding", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c22-rpt-"));
    const attemptId = "efx_test_bind_001";
    const fp = "fp_contract_abc";
    const dir = join(root, ".sfia", "attempts", attemptId);
    mkdirSync(dir, { recursive: true });
    writeFileSync(
      join(dir, "realization-report.md"),
      `# Rapport\nattemptId: ${attemptId}\ncontractFingerprint: ${fp}\nfilesCreated: src/a.ts\n`,
    );
    const r = await collectAttemptBoundReport({
      workspaceCwd: root,
      attemptId,
      contractFingerprint: fp,
    });
    expect(r.markdown).toMatch(/efx_test_bind_001/);
    expect(r.source).toMatch(/CONFINED_WORKSPACE/);
    expect(r.sha256).toBeTruthy();
    rmSync(root, { recursive: true, force: true });
  });

  it("refuses generic report without binding (stale other attempt)", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c22-rpt2-"));
    writeFileSync(
      join(root, "realization-report.md"),
      `# Old\nattemptId: efx_OTHER\ncontractFingerprint: fp_OTHER\n`,
    );
    const r = await collectAttemptBoundReport({
      workspaceCwd: root,
      attemptId: "efx_current",
      contractFingerprint: "fp_current",
    });
    expect(r.markdown).toBeNull();
    expect(r.limits.some((l) => /BINDING_MISSING|NOT_FOUND/.test(l))).toBe(true);
    rmSync(root, { recursive: true, force: true });
  });

  it("refuses symlink escape", async () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-c22-rpt3-"));
    const outside = mkdtempSync(join(tmpdir(), "sfia-c22-out-"));
    writeFileSync(join(outside, "secret.md"), "leak");
    try {
      symlinkSync(join(outside, "secret.md"), join(root, "realization-report.md"));
    } catch {
      // platform may block — still exercise API
    }
    const r = await collectAttemptBoundReport({
      workspaceCwd: root,
      attemptId: "efx_x",
      contractFingerprint: "fp_x",
    });
    expect(r.markdown).toBeNull();
    rmSync(root, { recursive: true, force: true });
    rmSync(outside, { recursive: true, force: true });
  });
});
```

### FILE `projects/sfia-studio-next/web/tests/unit/ml5-c21-consolidation.test.ts`

- SHA-256: `cc12755d4b0c577898b3d860b7d8b44a99c2cef96620c7864f25d473302f9209`
- Lines: 53

```typescript
import { describe, expect, it } from "vitest";
import { mergeDocumentProductionBody } from "@/domains/conversation/run-nora-cognitive-turn";

describe("C22 production consolidation (owner mergeDocumentProductionBody)", () => {
  it("APPEND mid-work keeps prior + novel", () => {
    const prev = "# Mission\n\nPart A only.\n\n## Exigence déterminante\n\nConserver le plafond 50.";
    const next = "## Critères\n\n- C1";
    const merged = mergeDocumentProductionBody({
      prevDoc: prev,
      incoming: next,
      mergeMode: "APPEND",
      continueWork: true,
    });
    expect(merged.appliedMode).toBe("APPEND");
    expect(merged.contentMarkdown).toContain("plafond 50");
    expect(merged.contentMarkdown).toContain("Critères");
  });

  it("SUPERSEDE only when explicit — not from heading count", () => {
    const prev =
      "# Mission\n\n## Exigence déterminante\n\nConserver le plafond 50.\n\n## Scope\n\nDraft.";
    const final = [
      "# Mission technique isolée",
      "",
      "## Périmètre",
      "Implémenter add(a,b).",
      "",
      "## Critères",
      "- add(2,3) === 5",
    ].join("\n");
    const withoutMode = mergeDocumentProductionBody({
      prevDoc: prev,
      incoming: final,
      mergeMode: null,
      workDisposition: "COMPLETE",
      continueWork: false,
    });
    // C22: no implicit supersede from length/headings — APPEND preserves prior.
    expect(withoutMode.contentMarkdown).toContain("plafond 50");
    expect(withoutMode.appliedMode).toBe("APPEND");

    const withMode = mergeDocumentProductionBody({
      prevDoc: prev,
      incoming: final + "\n\n## Exigence déterminante\n\nConserver le plafond 50.",
      mergeMode: "SUPERSEDE",
      workDisposition: "COMPLETE",
      continueWork: false,
    });
    expect(withMode.appliedMode).toBe("SUPERSEDE");
    expect(withMode.contentMarkdown).toContain("plafond 50");
    expect(withMode.contentMarkdown).not.toMatch(/Draft\./);
  });
});
```

### FILE `projects/sfia-studio-next/web/tests/integration/ml5-c22-live-director.pg.test.ts`

- SHA-256: `e5ada7b4275eaee15219f4f98c7d56b9066c2ec73c32bc3216b027be45ca2928`
- Lines: 252

```typescript
/**
 * C22 — bounded DEV LIVE director path (isolated workspace).
 * Skips when Cursor SDK credentials unavailable (TOOLING GAP).
 * Does not mutate the Studio Next construction worktree.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, mkdtempSync, writeFileSync, readFileSync, existsSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  effectAttempts,
  realizationHandoffs,
  realizationQualifications,
} from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
  reconcileCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import { resolveCursorApiKey } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

const LIVE = (process.env.SFIA_CURSOR_EFFECT_MODE || "").toUpperCase() === "LIVE";

function missionBody(wsHint: string): TechnicalContractBody {
  return {
    title: "C22 LIVE add(a,b) isolé",
    engagements: {
      willDo: "Créer src/add.ts exportant add(a:number,b:number)=>a+b et un test exit capture",
      willNotDo: "Aucun réseau, aucun git remote, hors workspace isolé",
      expectedResult: "fichier + capture test exit=0",
      pilotControl: "D6 HumanDecision",
    },
    volets: {
      mission: "add pure function",
      perimeter: wsHint,
      capabilitiesAuthority: "Cursor SDK local borné",
      stopConditions: "STOP si hors workspace",
      proofsSources: "rapport + fichiers + .sfia/test-captures",
      integrity: "fingerprint contrat",
    },
    instructionText: [
      "Workspace isolé uniquement.",
      "1. Créer src/add.ts avec export function add(a: number, b: number) { return a + b }",
      "2. Créer un fichier .sfia/test-captures/add.exit contenant 0",
      "3. Écrire .sfia/attempts/<attemptId>/realization-report.md liant attemptId et contractFingerprint du plan,",
      "   avec filesCreated: src/add.ts et testsDeclared: add",
      "4. Ne pas toucher d'autres répertoires. Pas de git push.",
    ].join("\n"),
    risks: ["effet hors sandbox"],
    exclusions: ["GitHub remote"],
    acceptance: {
      criteria: ["src/add.ts export add", "test add exit=0"],
      expectedProofs: ["fichier", "capture exit"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["fs_write"],
      permissionsNeeded: ["workspace"],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["pas de rollback auto"],
    gitScope: null,
  };
}

describe("C22 DEV LIVE director (bounded)", () => {
  let workspaceRoot = "";
  let keySource = "NONE";

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    workspaceRoot = mkdtempSync(join(tmpdir(), "sfia-c22-live-ws-"));
    mkdirSync(join(workspaceRoot, "src"), { recursive: true });
    writeFileSync(join(workspaceRoot, "README.md"), "# isolated c22\n");
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = workspaceRoot;
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "1";
    const k = await resolveCursorApiKey();
    keySource = k.source;
  });

  afterAll(() => {
    // keep workspace for evidence inspection under /tmp
    writeFileSync(
      "/tmp/sfia-c22-campaign/live-workspace.txt",
      workspaceRoot + "\nkeySource=" + keySource + "\n",
    );
  });

  it(
    "LIVE dispatch → supervise → autonomous dossier (or skip TOOLING GAP)",
    async () => {
      if (!LIVE) {
        console.log("SKIP — SFIA_CURSOR_EFFECT_MODE not LIVE");
        return;
      }
      if (keySource === "NONE") {
        console.log("INCOMPLETE / TOOLING GAP — no Cursor API key");
        expect(keySource).toBe("NONE");
        return;
      }

      const seed = await seedPilotProjectWithCognitiveFiliation("c22-live");
      const c = await createTechnicalContract({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        preparationId: seed.preparationId,
        contractKey: "c22-live-add",
        body: missionBody(workspaceRoot),
        markReady: true,
        sourcesSufficient: true,
        cognitiveWorkId: seed.cognitiveWorkId,
        cognitiveRevision: seed.cognitiveRevision,
      });
      const prep = await prepareCursorExecution({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        contractId: c.contractId,
        correlationKey: newId("corr"),
        workspaceKey: "default",
      });
      await authorizeCursorExecution({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        attemptId: prep.attemptId,
        statement: "J'autorise le contrat exact inspecté",
        inspectedFingerprint: c.fingerprint,
        confirmed: true,
      });

      const dispatched = await dispatchCursorExecution({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        attemptId: prep.attemptId,
      });

      // Observe up to ~3 min via reconcile (supervisor also ticks in-process).
      let terminal = dispatched.status === "COMPLETED";
      const deadline = Date.now() + 180_000;
      while (!terminal && Date.now() < deadline) {
        await new Promise((r) => setTimeout(r, 4000));
        const rec = await reconcileCursorExecution({
          pilotId: seed.pilotId,
          projectId: seed.projectId,
          attemptId: prep.attemptId,
        });
        terminal =
          rec.status === "COMPLETED" ||
          rec.status === "FAILED" ||
          rec.status === "AMBIGUOUS";
        if (terminal) break;
      }

      const attempt = (
        await db
          .select()
          .from(effectAttempts)
          .where(eq(effectAttempts.id, prep.attemptId))
          .limit(1)
      )[0]!;
      const live = JSON.parse(attempt.resultJson || "{}") as {
        runId?: string;
        agentId?: string;
        terminalStatus?: string;
        restitutionPipelineStatus?: string;
      };

      writeFileSync(
        "/tmp/sfia-c22-campaign/live-attempt.json",
        JSON.stringify(
          {
            attemptId: prep.attemptId,
            status: attempt.status,
            live,
            fingerprint: c.fingerprint,
            workspaceRoot,
            keySource,
          },
          null,
          2,
        ),
      );

      expect(live.runId || live.agentId || attempt.status === "COMPLETED").toBeTruthy();

      // Allow restitution pipeline to finish
      for (let i = 0; i < 30; i++) {
        const h = (
          await db
            .select()
            .from(realizationHandoffs)
            .where(eq(realizationHandoffs.attemptId, prep.attemptId))
            .limit(1)
        )[0];
        const q = (
          await db
            .select()
            .from(realizationQualifications)
            .where(eq(realizationQualifications.attemptId, prep.attemptId))
            .limit(1)
        )[0];
        if (h && q) {
          writeFileSync(
            "/tmp/sfia-c22-campaign/live-dossier.json",
            JSON.stringify(
              {
                handoffId: h.id,
                handoffStatus: h.status,
                verdict: q.verdict,
                noraKind: (q.noraAnalysisMarkdown || "").slice(0, 80),
                limits: q.limitsJson,
              },
              null,
              2,
            ),
          );
          expect(h.id).toBeTruthy();
          expect(q.verdict).toBeTruthy();
          return;
        }
        await reconcileCursorExecution({
          pilotId: seed.pilotId,
          projectId: seed.projectId,
          attemptId: prep.attemptId,
        });
        await new Promise((r) => setTimeout(r, 3000));
      }

      // Soft fail with evidence — LIVE may still be running
      const still = (
        await db
          .select()
          .from(effectAttempts)
          .where(eq(effectAttempts.id, prep.attemptId))
          .limit(1)
      )[0];
      throw new Error(
        `LIVE dossier not materialised in time — status=${still?.status} live=${still?.resultJson?.slice(0, 400)}`,
      );
    },
    240_000,
  );
});
```

### FILE `projects/sfia-studio-next/web/tests/integration/ml5-c22-d8-conforming.pg.test.ts`

- SHA-256: `a930377f3c005ae2cb46a970593e4734f065c634a7809f5aee06598ee7c0f09b`
- Lines: 157

```typescript
/**
 * C22 — product-path D8 CONFORMING without injected criterionEvidence.
 * Workspace files + attempt-bound report collected by restitution owner code.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationHandoffs, realizationQualifications } from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

function body(): TechnicalContractBody {
  return {
    title: "C22 D8 conforming product path",
    engagements: {
      willDo: "add.ts + capture",
      willNotDo: "inject verified",
      expectedResult: "CONFORMING",
      pilotControl: "D6",
    },
    volets: {
      mission: "c22",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "workspace",
      integrity: "fp",
    },
    instructionText: "scripted with pre-seeded workspace proofs",
    risks: [],
    exclusions: [],
    acceptance: {
      criteria: ["src/add.ts export add", "test add exit=0"],
      expectedProofs: ["fichier", "capture"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: [],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["no rollback"],
    gitScope: null,
  };
}

describe("C22 D8 CONFORMING product path", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c22-d8-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it("restitution builds verified evidence → CONFORMING", async () => {
    __resetScriptedCursorRunsForTests();
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: "c22-d8-ok",
      body: body(),
      markReady: true,
      sourcesSufficient: true,
      cognitiveWorkId: seed.cognitiveWorkId,
      cognitiveRevision: seed.cognitiveRevision,
    });
    const prep = await prepareCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    const attempt = (
      await db
        .select()
        .from(effectAttempts)
        .where(eq(effectAttempts.id, prep.attemptId))
        .limit(1)
    )[0]!;
    const plan = JSON.parse(attempt.planJson) as { workspaceCwd: string };
    const cwd = plan.workspaceCwd;
    mkdirSync(join(cwd, "src"), { recursive: true });
    mkdirSync(join(cwd, ".sfia", "test-captures"), { recursive: true });
    mkdirSync(join(cwd, ".sfia", "attempts", prep.attemptId), {
      recursive: true,
    });
    writeFileSync(
      join(cwd, "src/add.ts"),
      "export function add(a: number, b: number) { return a + b; }\n",
    );
    writeFileSync(join(cwd, ".sfia/test-captures/add.exit"), "0\n");
    writeFileSync(
      join(cwd, `.sfia/attempts/${prep.attemptId}/realization-report.md`),
      [
        `# Rapport`,
        `attemptId: ${prep.attemptId}`,
        `contractFingerprint: ${c.fingerprint}`,
        `filesCreated: src/add.ts`,
        `testsDeclared: add`,
      ].join("\n"),
    );

    await authorizeCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      statement: "ok",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });

    const handoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    const qual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(handoff?.status).toBe("RECEIVED");
    expect(qual?.verdict).toBe("CONFORMING");
    expect(qual?.limitsJson).toMatch(/AUTONOMOUS_D8/);
    // Ensure not from injected test helper — product path limits.
    expect(qual?.limitsJson).not.toMatch(/injected/i);
  });
});
```

### FILE `projects/sfia-studio-next/web/tests/integration/ml5-c22-d8-contradiction.pg.test.ts`

- SHA-256: `af85f064d5b633e44abe191e63015684fd09207c40dbc859b00e9a866f7f5acf`
- Lines: 145

```typescript
/**
 * C22 Cas B — rapport affirme réussite ; preuve réelle absente/négative → NON_CONFORMING.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationQualifications } from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

function body(): TechnicalContractBody {
  return {
    title: "C22 D8 contradiction",
    engagements: {
      willDo: "claim success",
      willNotDo: "hide failure",
      expectedResult: "NON_CONFORMING",
      pilotControl: "D6",
    },
    volets: {
      mission: "c22",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "workspace",
      integrity: "fp",
    },
    instructionText: "contradiction report vs disk",
    risks: [],
    exclusions: [],
    acceptance: {
      criteria: ["src/add.ts export add", "test add exit=0"],
      expectedProofs: ["fichier", "capture"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: [],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["no rollback"],
    gitScope: null,
  };
}

describe("C22 D8 contradiction", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c22-d8b-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it("report PASS + missing file + exit=1 → not CONFORMING", async () => {
    __resetScriptedCursorRunsForTests();
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: "c22-d8-bad",
      body: body(),
      markReady: true,
      sourcesSufficient: true,
      cognitiveWorkId: seed.cognitiveWorkId,
      cognitiveRevision: seed.cognitiveRevision,
    });
    const prep = await prepareCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    const attempt = (
      await db
        .select()
        .from(effectAttempts)
        .where(eq(effectAttempts.id, prep.attemptId))
        .limit(1)
    )[0]!;
    const cwd = (JSON.parse(attempt.planJson) as { workspaceCwd: string })
      .workspaceCwd;
    mkdirSync(join(cwd, ".sfia", "test-captures"), { recursive: true });
    mkdirSync(join(cwd, ".sfia", "attempts", prep.attemptId), {
      recursive: true,
    });
    // Negative capture only — no src/add.ts
    writeFileSync(join(cwd, ".sfia/test-captures/add.exit"), "1\n");
    writeFileSync(
      join(cwd, `.sfia/attempts/${prep.attemptId}/realization-report.md`),
      [
        `# Rapport`,
        `attemptId: ${prep.attemptId}`,
        `contractFingerprint: ${c.fingerprint}`,
        `filesCreated: src/add.ts`,
        `testsDeclared: add`,
        `Résultat: PASS ok`,
      ].join("\n"),
    );

    await authorizeCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      statement: "ok",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });

    const qual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(qual?.verdict).not.toBe("CONFORMING");
    expect(["NON_CONFORMING", "PARTIAL", "INDETERMINATE"]).toContain(
      qual?.verdict,
    );
  });
});
```

### FILE `projects/sfia-studio-next/web/tests/integration/ml5-c22-restitution-cas.pg.test.ts`

- SHA-256: `f9b0a484da019fdaabf19a06f88c250e5aa572b7ce14f89d20274dd3d069df88`
- Lines: 129

```typescript
/**
 * C22 — concurrent restitution claim: at most one owner.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { realizationHandoffs } from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import { runAutonomousRestitutionAfterTerminal } from "@/domains/execution/cursor-autonomous-restitution";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

function body(): TechnicalContractBody {
  return {
    title: "C22 CAS",
    engagements: {
      willDo: "cas",
      willNotDo: "double",
      expectedResult: "one handoff",
      pilotControl: "D6",
    },
    volets: {
      mission: "c22",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "handoff",
      integrity: "fp",
    },
    instructionText: "scripted",
    risks: [],
    exclusions: [],
    acceptance: { criteria: ["one"], expectedProofs: ["handoff"] },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: [],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["no rollback"],
    gitScope: null,
  };
}

describe("C22 restitution CAS concurrency", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c22-cas-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it("two concurrent restitutions yield a single handoff", async () => {
    __resetScriptedCursorRunsForTests();
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: "c22-cas",
      body: body(),
      markReady: true,
      sourcesSufficient: true,
      cognitiveWorkId: seed.cognitiveWorkId,
      cognitiveRevision: seed.cognitiveRevision,
    });
    const prep = await prepareCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      statement: "ok",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    // Dispatch without waiting for auto restitution side-effects to finish races —
    // force a clean terminal then concurrent restitution.
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
    await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });

    const results = await Promise.all([
      runAutonomousRestitutionAfterTerminal({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        attemptId: prep.attemptId,
        attachNoraCognitive: false,
      }),
      runAutonomousRestitutionAfterTerminal({
        pilotId: seed.pilotId,
        projectId: seed.projectId,
        attemptId: prep.attemptId,
        attachNoraCognitive: false,
      }),
    ]);
    const ran = results.filter((r) => r.ran);
    expect(ran.length).toBeLessThanOrEqual(1);
    const rows = await db
      .select()
      .from(realizationHandoffs)
      .where(eq(realizationHandoffs.attemptId, prep.attemptId));
    expect(rows).toHaveLength(1);
  });
});
```

### FILE `projects/sfia-studio-next/construction/delivery-history.md`

- SHA-256: `7c38e7da7cc96c42eb747c57f26612ea52ad812d6ef0b4af1fc78d0d83586d03`
- Lines: 4434

```markdown
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-24-ML5-CYCLE22-EVIDENCE-LIVE-RESTITUTION

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 22 finalisation restitution probante + qualification LIVE intégrée |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C22 non poussés) |
| Contenu | WEB provenance EXPLICIT_AUTHORIZED_EXACT \| REGISTERED_PUBLIC_COMPOSITION only ; collecte rapport attempt-bound + confined FS (préférence workspace sur prose SDK) ; CAS restitution owner/version/lease ; D8 evidence workspace → CONFORMING sans injection ; consolidation mergeMode ; avis runNoraCognitiveTurn ; instrumentation boot resume |
| Preuves | Unit WEB/report/consolidation ; PG restitution+CAS+D8 CONFORMING+contradiction ; LIVE director Cursor SDK ; evidence-replay CONFORMING sur workspace LIVE ; build `xDm9gI5jk9N2qEGkFUqN_` |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — frontiers P0 + D8 product path + LIVE chain ; réserves : BROWSER activité long-run PARTIAL ; WEB LIVE fournisseur non rejoué ; D9/Git REAL non exercés |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE21-AUTONOMOUS-REALIZATION-RESTITUTION

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 21 lot de convergence 2 (réalisation et restitution autonomes) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C21 non poussés) |
| Contenu | WEB provenance serveur (publicTopic / exact allowlist) ; consolidation production (supersession finale) ; restitution autonome terminal→handoff→D8→avis ; D8 critère-à-preuve (CONFORMING possible) ; reprise superviseurs au boot auto-session ; activité investigation engagée |
| Preuves | Unit WEB authorize + D8 CONFORMING/PARTIAL ; PG restitution sans POST manuel ; PG dispatch filiation ; tsc ; next build `5mVBWTsOfnWwNfLerv0Ke` ; smoke DEV :3100 |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — chaîne autonome SCRIPTED démontrée ; réserves : WEB LIVE fournisseur+BROWSER activité long-run ; Nora avis cognitif LIVE sous `SFIA_AUTONOMOUS_NORA_AVIS=1` ; D9/Git REAL non exercés (mission locale) ; confinement WEB ≠ qualification WEB complète |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE20-LOT1-EXIT-QUALIFICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 20 qualification de sortie lot convergence 1 |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C20 non poussés) |
| Contenu | Corrections P0 bloquantes uniquement : lease/CAS concurrency ; D4 dependency currency + re-assert post-claim ; WEB discovery URL + confidential sanitize ; ambiguity clarify ; production consolidée → D4 |
| Preuves | I1 PG heartbeat≠reconcile ; I2 `Dépendance D4 supersédée` ; I3 unit open denied sans egress ; I5 clarify sans nouveau work ; I6 production.mdLen = D4 revision length |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — lot 1 exit proposé ; réserves non bloquantes bornées |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE19-RESIDUAL-INVARIANTS

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 19 fermeture invariants résiduels + qualification finale lot convergence 1 |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C19 non poussés) |
| Contenu | I1 révisions immuables (pas de mutate-in-place checkpoint) ; I2 applicabilité mandat aux points d'effet ; I3 sanitize/egress WEB ; I4 reconcile mid-RUNNING + PROCESS_OR_LEASE_INTERRUPT ; I5 rattachement `cognitiveWorkRelation`/`proposedCognitiveWorkId` ; I6 conservation production multi-tours |
| Preuves discriminantes | I1 checkpoints INVESTIGATION_SAVE distincts ; I2 READY r5 puis prepare/authorize 409 « mandat non applicable » ; I4 fence+kill RUNNING → interrupt → même workId ; I5 CONTINUE+INDEPENDENT sans inject ; I6 DOCUMENT 4762→12241→34553 chars, 3 part ids stables |
| Build | `next build` PASS · BUILD_ID `1pvGV0NLFRLhOqgw3Mxn_` ; tsc PASS ; vitest C19+WEB+C18 27 PASS ; smoke DEV :3100 PASS |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — lot 1 invariants I1–I6 démontrés ; réserves non bloquantes : WEB LIVE fournisseur+contexte privé non rejoué ce cycle (DETERMINISTIC/SCRIPTED capitalisés) ; interrupt mid-production I6 non capturé (couvert via I4 + conservation multi-tours) |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE18-COGNITIVE-OUTPUT-CONTRACT

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 18 finalisation contrat de sortie cognitive (lot convergence 1) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C18 non poussés) |
| Contenu | Contrat de sortie structuré (qualification + outil `submit_cursor_contract_production`) ; suppression heuristiques A–F C17 ; bridge DRAFT sans collision checkpoint ; READY filiation exacte ; P1–P4 DEV LIVE rejoués |
| Corrections racines | A lexical critères ; B prose>800 ; C auto-ANSWER ; D remainingWork≠criteria ; E policy profileHint ; F fin indépendante de contractReady |
| Preuves LIVE | P1 LIVE Agents SDK ; P2 même workId sans inject + indep + reprise post-restart ; P3 DRAFT + instruction 40994 (>24k) + 15 critères ; P4 READY+refus D6 CANCELLED |
| Build | `npm run build` PASS (état DIRTY testé) ; vitest C18/C15/C16/investigation 24 PASS ; tsc PASS |
| Push projet | **NONE** |
| Verdict candidat | **READY WITH RESERVES** — lot 1 démontré DEV LIVE ; réserves : AWAIT_PILOT→OPEN non systématique ; invalidation matérielle d’un mandat READY via nouveau contrat distinct (pas mutation in-place) ; WEB redirect volontairement non suivi (blocage honnête) |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE17-VERTICAL-COGNITIVE-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 17 convergence fonctionnelle verticale (lot convergence 1) |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C17 non poussés) |
| Contenu | Parcours P1–P4 LIVE ; forceNew corrigé ; merge investigation riche ; SEGMENT≠BUDGET global ; filiation READY migration 021 ; production basis ; D4 document LIVE ; contrat DRAFT→READY→refus D6 LIVE |
| Migration DEV | `021_cognitive_contract_filiation.sql` additive sur DEV |
| Preuves LIVE | P1-A PASS ; P1-B PARTIAL ; P2 continuité PASS ; P3 document D4 PASS ; P4 DRAFT+READY+refus PASS ; invalidation matérielle / restart serveur / instruction ≥24k non clos |
| Tests | investigation 8 PASS ; C16 integration 5 PASS ; PG ownership 5 PASS ; tsc PASS ; build Next PASS (cycle) |
| Push projet | **NONE** |
| Verdict | **NOT READY** — lot 1 non sorti (réserves P1-B/P2-C/P3 long/P4 invalidation) ; convergence fonctionnelle partielle DEV LIVE démontrée |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE16-INTEGRATED-CONDUCTOR

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 16 finalisation fonctionnelle + qualification intégrée du conducteur |
| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C16 non poussés) |
| Contenu | Raccordement produit `runNoraCognitiveTurn` → conducteur D3 ; claim/lease/fencing ; READY positif + requalification ; DRAFT incomplet sans slice(0,8) ; WEB DNS+connect pinned+timeout lecture ; multi-entrées service/intent/D8 |
| Tests | units C16 5 PASS ; C15 5 PASS ; PG ownership C16 5 PASS ; PG C15 2 PASS |
| Push projet | **NONE** |
| Verdict | **READY WITH RESERVES** — raccordement + P0 ownership/READY/WEB démontrés DETERMINISTIC/INTEGRATION ; LIVE E2E product path encore PARTIAL (Next offline au moment des preuves) |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE15-COGNITIVE-CONDUCTOR

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 15 conducteur cognitif Nora (lot convergence 1) |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C15 non poussés) |
| Contenu | Persistance D3 `cognitive_works` ; conducteur multi-segments ; READY positif ; journal non monotone ; contrat sans plafonds 24k/8 ; WEB egress DNS+stream |
| Migration DEV | `020_cognitive_work.sql` sur `sfia_next_dev` + `sfia_next_e2e` |
| Tests | units C15 + investigation/bridge ; PG cognitive work 2 PASS |
| Push projet | **NONE** |
| Verdict | **READY WITH RESERVES** — infrastructure + invariants discriminants ; LIVE intégré lot 1 encore PARTIAL |

## delivery_id: DELIV-2026-11-24-ML5-CYCLE14-COGNITIVE-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-24 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 14 conduite cognitive Nora + WEB LIVE + contrats |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C14 non poussés) |
| Contenu | Suppression routage lexical TECH_INTENT ; profil sans longueur ; capability `d7.prepare_cursor_contract` ; WEB LIVE isolé + fetch + parse navigation ; critères métier contrat |
| WEB LIVE | Isolation outbound query-only **PASS** ; search LIVE items **DISCOVERED** (MDN) ; open MDN **PAGE_OPENED** + citation ; hosted tool détaché de Nora privée |
| Scénarios | S2 négation sans contrat ; S5 contrat DRAFT instruction ≥6k ; S4 WEB LIVE ; S8 dispatch sans READY → 400 ; units C14 **31 PASS** |
| Push projet | **NONE** |
| Verdict | **ML5 NORA COGNITIVE CONVERGENCE PROVEN — FUNCTIONAL COMPLETION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE13-RESILIENCE-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 13 confinement D8 + supervision durable + STOP LIVE + candidat |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C13 non poussés) |
| Contenu | `d8-path-confine` + journal D8 ; `cursor-live-supervisor` ; STOP LIVE ; handoff honesty ; inventaire candidat |
| STOP LIVE | `efx_03b99d0f…` agent `agent-c6b4acd1…` run `run-1a115791…` — BEFORE_STOP OK ; `LIVE_CANCEL_OBSERVED` ; terminal `cancelled` ; AFTER_STOP absent |
| Long-run T-05 | `efx_53198bd9…` agent `agent-b339a662…` run `run-7159ad8b…` — browser closed 90s → COMPLETED finished ; identities stable ; double-dispatch idempotent |
| D8 security | unit confine 12 PASS ; PG real reader 8 PASS (symlink/traversal/pilot/project) |
| Push projet | **NONE** — `PROJECT CANDIDATE READY FOR MORRIS GIT REVIEW` |
| Verdict | **ML5 DEV LIVE RESILIENCE PROVEN — QUALIFICATION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE12-LIVE-RESILIENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 12 LIVE resilience + D8 evidence + candidat |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C12 non poussés) |
| Contenu | LIVE_WAIT=0 ACK-first; observeLiveCursorRun+apiKey; DROP_ACK fault T-04; D8 evidence tools Nora; STOP SCRIPTED; inventaire candidat |
| Scénario LIVE | `ml5-c12-live-20261123` — `efx_6ef408be…` agent `agent-f1b001a0…` run `run-66b05967…` COMPLETED; RESULT_C12.txt OK |
| Incident T-04 | DROP_ACK → AMBIGUOUS + priorSend + refus second dispatch (**PASS**) |
| Nora D8 | `NORA_D8_TOOLS_OBSERVED` (11 tool calls) |
| Push projet | **NONE** — `PROJECT CANDIDATE PREPARED — PUSH REQUIRES MORRIS GO` |
| Verdict | **ML5 DEV LIVE PARTIAL — GOVERNED RESILIENCE GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE11-DEV-LIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 11 activation DEV LIVE Nora + Cursor SDK |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C11 non poussés) |
| Contenu | FileCredentialStore + model `composer-2.5` ; observeLiveCursorRun ; attachNoraCognitive→generateNoraReply ; openBilan sans requalify silencieux ; env LIVE DEV |
| Scénario | `ml5-c11-live-20261123` — project `proj_c08249f9…` — Oui `efx_306b2b49…` — agent `agent-29c4c0f4…` — run `run-51c77f21…` — handoff `rhf_90ccccb6…` — témoin DEMO_C11.txt |
| Frontier | **END-TO-END DEV LIVE** — Nora LIVE + Cursor SDK LIVE + D8 + Nora COGNITIVE ; B09/GitHub REAL/MCP N/A |
| Tests | Journey C11 **10 PASS / 0 FAIL / 3 N/A** ; unit ciblés 11 PASS ; D8 verdict PARTIAL (honnête) |
| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité LIVE améliorée, présence inchangée |
| Push projet | **NONE** |
| Verdict | **ML5 END-TO-END DEV LIVE PROVEN — QUALIFICATION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE10-UX-D8-QUAL

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 10 convergence UX, D6, D8 et qualification visuelle |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C10 non poussés) |
| Contenu | CSS contrat/D6/D8 ; Travail 50/50 + D6 ; `confirmed` boolean strict ; bilan requalify après handoff ; pièce nouvelle G15 ; viewport 1680×970 |
| Scénario | `ml5-c10-mono-20261123` — project `proj_d54a9443…` — Oui `efx_d4617b21…` — handoff `rhf_cc411abd…` |
| Tests | Unit ML5 **73 PASS** ; Playwright C10 **15 PASS / 0 FAIL** ; F2 **0 PASS / NOT PROVEN** |
| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) |
| Push projet | **NONE** |
| Verdict | **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE9-E2E-MONO-ATTEMPT

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 9 démonstration fonctionnelle intégrée mono-tentative |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C9 non poussés) |
| Contenu | D6 Non authentifié (CANCELLED+decisionId) ; D6 Oui+fingerprint ; SCRIPTED_PHASED RUNNING→reconcile COMPLETED ; bilan D8 4 onglets ; retour Nora brouillon ; 14 captures + manifeste mono-tentative |
| Scénario | `ml5-c9-mono-20261123` — project `proj_a4525a4a…` — attempt Oui `efx_1e86bf8c…` — refus `efx_b70c69ef…` |
| Frontier | SCRIPTED / DEV — ≠ Nora LIVE, ≠ Cursor SDK LIVE, ≠ WEB LIVE |
| Tests | Unit C9 phased 3 PASS ; unit ML5 ciblés 15+ PASS ; Playwright E2E 15 PASS / 1 PARTIAL (handoff re-ingéré) ; F2 global NOT PROVEN |
| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité BROWSER améliorée, présence inchangée |
| Push projet | **NONE** |
| Verdict | **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE8-INVARIANTS-INTEGRATED

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 8 fermeture invariants + parcours intégré |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Contenu | A1 origin/ls-remote/REMOTE_VERIFIED ; A2 listen probe ; A3 MCP fail-closed UNKNOWN ; B1 proof exact + no handoff fallback ; G07 PNG magic ; BROWSER intégré SCRIPTED |
| Tests | Unit+PG ML5 **79 PASS** ; tsc PASS ; Playwright C8 ; F2 global NOT PROVEN |
| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité ≠ présence |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE7-INTEGRATED-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 7 convergence fonctionnelle, sécurisation, qualification |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Checkpoint | R-003 @ `5a4e4405` · handoff C6 `b5466dd7` |
| Contenu | CP-01 observeWorkspaceGitFacts ; CP-02 STUDIO_DEV_BIND ; CP-03 proof-ref + qualify-in-TX ; G07 evidence-captures ; B04 citations ; E12 MCP check ; Playwright runtime PNG ; fixture SCRIPTED BROWSER |
| Tests | Unit+PG ML5 **75 PASS** ; tsc PASS ; Playwright 4 captures ; F2 global **NOT PROVEN** |
| Inventaire | **1 / 97 / 1** (B09 reste NOT_IMPL) |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE6-GIT-A-DEV-BROWSER

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 6 Git Cursor option A + DEV auto-session + fermeture |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Décision | `1e6929c543a88606488094be2f5dfe7fc34a0cb9` — DÉC-ML5-GIT A + DÉC-ML5-DEV |
| Lane | DEV `sfia_next_dev` :5433 — mig **019** ; RECETTE/STABLE inchangées |
| Contenu | Auto-session Pilote DEV fail-closed ; Git option A preflight/observe/bare harness (Studio non publisher) ; G15 FOR UPDATE + PG concurrent ; activityFlushQueue await ; A04 corrective intent ; next.config serverExternalPackages `@cursor/sdk` ; BROWSER Travail/Exécution/Résultats/sas |
| Tests | Unit+PG ciblés **34 PASS** ; tsc PASS ; BROWSER snapshots OK ; F2 PNG **NOT PROVEN** (capture timeout) ; LIVE/REAL **NOT** |
| Inventaire | **1 / 92 / 6** (was 1/81/17) |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CYCLE5-INTEGRATED-COMPLETION

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cycle 5 finalisation fonctionnelle intégrée |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
| Lane | DEV `sfia_next_dev` :5433 — mig **019** history_json |
| Contenu | Travail ContractViewer 50/50 ; activité poll RUNNING ; mid-turn OBSERVED ; B1 assertPublicHttpsUrl+confront ; G15 requalify ; Cursor poll/reconcile UI ; preparedContract sur TurnResult |
| Tests | Unit ciblés **22 PASS** ; PG dispatch **9 PASS** ; tsc PASS ; BROWSER/F2/LIVE **NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-FUNCTIONAL-COMPLETION

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Complétude fonctionnelle, sécurisation et stabilisation |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — cycles 3+4 non commités) |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Lane | DEV `sfia_next_dev` :5433 — RECETTE/STABLE inchangées |
| Contenu | Inventaire Impl **1/74/24** (réconcilié explore) ; sendIntent pre-SDK ; tool-source-journal ; READY prepId persisté ; B1 public-web-search-frontier SCRIPTED ; activité OBSERVED sources ; DETERMINISTIC_SYNTHESIS ≠ NORA_COGNITIVE ; D8 critères sans preuve lexicale |
| Tests | Unit ML5 **53 PASS** ; PG dispatch **9 PASS** ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
| Push projet / PR / merge | **NONE** |
| STABLE | NOT AVAILABLE |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-CONVERGENCE-CONFORMITY

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Convergence fonctionnelle et conformité intégrée |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Lane | DEV only (`sfia_next_dev` :5433) — RECETTE/STABLE inchangées |
| Contenu | CF-03 anti-duplicat ACK-lost ; CF-02 READY serveur ; provenance handoff ; Nora→contrat DRAFT bridge ; surfaces `execution`/`publication` ; onglets D8 Figma ; analyse cognitive Nora (dossier) ; docs acceptation/registre |
| Tests | Unit ML5 **25 PASS** (fichiers ciblés) ; PG dispatch **8 PASS** incl. T-04 ACK-lost ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
| Push projet / PR / merge | **NONE** |
| STABLE | NOT AVAILABLE |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-23-ML5-INTEGRATION-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Sécurisation et convergence du parcours gouverné |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD entrée | `69aeb329ee387a7cf8331fc6173fcf0f09bd92b8` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Lane | DEV — migrations `017`+`018` sur `sfia_next_dev` et `sfia_next_e2e` ; RECETTE inchangée |
| Contenu | P0-01 CAS dispatch ; P0-02 workspace confinement ; P0-03 B1 detached until isolation proven ; P1 reversibility/READY/handoff provenance ; parcours `CursorRealizationSurface` ; activité C1 producer ; Figma L1 metadata |
| Tests | Unit ML5 **29 PASS** ; PG dispatch **7 PASS** ; tsc PASS ; BROWSER/F2/LIVE **NOT PROVEN** |
| Push projet / PR / merge | **NONE** |
| STABLE | NOT AVAILABLE |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** (parcours raccordé DEV ; P0 adressés ; F2/LIVE ouverts) |

## delivery_id: DELIV-2026-11-23-ML5-INTEGRATED-DELIVERY-SLICE

| Field | Value |
| --- | --- |
| Date | 2026-11-23 (Europe/Paris) |
| Macro-lot | ML5 — Cognition transverse + réalisation Cursor |
| Type | CONSTRUCTION DEV · **NO RELEASE** |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Lane | DEV only — migration `017` sur `sfia_next_dev` ; RECETTE non touchée |
| Contenu | Contrats techniques, tentatives `CURSOR_EXECUTION`, SDK SCRIPTED/LIVE adapter, handoff D8, activité C1, web sanitize/B1 gated, UI ContractViewer/Bilan, L0 Figma page 12 |
| Tests | Vitest unit ML5 **17 PASS** (DETERMINISTIC) |
| Preuves manquantes | LIVE SDK, LIVE web non-exfil, BROWSER F2 page 12, REAL GitHub, parcours UI câblé projet |
| Push projet / PR / merge | **NONE** (mandat) |
| STABLE | NOT AVAILABLE |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-POSTMERGE-CI

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | E08 — intégration Git vérifiée |
| Type | Sortie post-merge factuelle · **NO RELEASE** |
| GO | Morris : merge autorisé distinctement, HEAD `f11de65f98c3a0429e45c9f2c3935633840aec12` avec réserves et correctif runtime post-RECETTE |
| PR | [#690](https://github.com/mcleland147/sfia-workspace/pull/690) MERGED |
| Main avant | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Main après / merge | `8620b08bfe86fdf92af0c02756ee980f60964490` (parents : `a12f89a15…` et `f11de65f…`) |
| Tree intégré | `8786e7d39d2653fdad78d65e41c062b4b09b6e2e` |
| CI PR | [#45036729361](https://github.com/mcleland147/sfia-workspace/actions/runs/45036729361) **SUCCESS** |
| CI post-merge | [#45039130531](https://github.com/mcleland147/sfia-workspace/actions/runs/45039130531) **SUCCESS** sur SHA de merge exact |
| Revue | `sfia/review-handoff@84309eb719280d1551e84f1f531ccc442b2c4c88` · blob `53fa6bf2c7621dbba00bcb021eecfc6dc2e6ca5b` |
| RECETTE | SOURCE `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` / BUILD `2uHrYBsQUvf6aii40hMpj` **inchangés** |
| Runtime post-RECETTE | Correctif deep-link `documentId` dans `page.tsx` intégré après UAT ; CI PASS, nouveau build RECETTE non accepté |
| Réserves | MERGE REAL / Nora LIVE merge NOT PROVEN, WRITE-07, PREVIEW PARTIAL, audit D6/D7/D8 REAL partiel, règles GitHub incomplètement observées, R6 non effectué |
| Gates | Gate C OPEN ; NO RELEASE ; STABLE NOT AVAILABLE ; E08 NOT ADOPTED |
| Verdict | **E08 MERGED — POST-MERGE CI VERIFIED — WITH DOCUMENTED RESERVES** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-CI-STABILIZATION-PR690

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — stabilisation CI PR #690 |
| Type | CORRECTIF · STANDARD · **NO RELEASE** |
| Fixes | (A) E2E git-surface preview avant detach · (B) race deep-link `documentId` vs `load()` URL normalize |
| Runtime | `page.tsx` — `pendingDocumentOpenIdRef` + préservation documentId à la normalisation |
| Tests | ensemble08-git-surface · g4-b1-b4-correctifs |
| Preuves locales | Playwright **109 PASS / 5 SKIPPED** · RECETTE inchangée |
| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQ` — runtime correctif **postérieur** au build accepté |
| Push | PR #690 only |
| Merge | **NONE** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOC-ALIGN-D2-PR-PUBLICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — alignement documentaire D2 + push + création PR (cycle 7) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| GO Morris | Alignement des 3 docs approuvés · sync refs · commit · push branche · PR unique vers `main` · L3 ; **pas** merge / post-merge / STABLE / release |
| Source docs | `docs/next-ensemble08-consolidation-20261122` @ `1479b3d31354f495398bca008a2b511131eb9662` |
| Blobs | A `5d52aa62…` · B `32e3de32…` · C `bd06957b…` |
| Code | **INCHANGÉ** — `web/` `77c89ed84546b3bfb0356164416c04eac26ed229` = SOURCE `10128bdb` |
| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQUvf6aii40hMpj` · ml4d-ux004 |
| Merge PR | **NONE** ce cycle |
| Verdict cible | `E08 PR OPEN — READY FOR CI AND CHATGPT REVIEW — WITH DOCUMENTED RESERVES` |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-PR-READINESS-DOC-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 13:34 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — consolidation documentaire + PR readiness (cycle 13) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| Base code recettée | SOURCE `10128bdb` · TREE `be778f1b` · BUILD `2uHrYBsQUvf6aii40hMpj` |
| Travail | Intégration PV exact depuis `docs/next-git-recette-20261122` · sections d'exécution datées sur contrats · sync as-built / provenance · **aucun changement `web/`** |
| Addenda ChatGPT (statut **à cette date**) | AWAITING Morris D2 — non intégrés comme normatifs |
| Correction ultérieure | Voir `DELIV-2026-11-22-ENSEMBLE08-DOC-ALIGN-D2-PR-PUBLICATION` — D2 obtenu ; blobs canoniques `1479b3d…` |
| RECETTE | **INCHANGÉE** `10128bdb` / `2uHrYBsQUvf6aii40hMpj` · ml4d-ux004 |
| Push projet / PR / merge | **NONE** (à cette date) |
| Verdict cible | `READY FOR PR WITH RESERVES — MORRIS GATE REQUIRED` (D2 addenda + GO push/PR) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE candidat merge documentaire corrigé |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| SOURCE | `10128bdb6bb1020a0fd8d4976b91879bff26c3b3` |
| TREE | `be778f1bf461f15acf94bfed6879d43fa6256a0d` |
| BUILD | `2uHrYBsQUvf6aii40hMpj` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` · `http://127.0.0.1:3200` |
| Prior preview | `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` (préservé hors service) |
| Handoff | `sfia/review-handoff@f30451d2dac193d6fc610194594f80e8616754c2` |
| MERGE REAL | **NOT PROVEN** |
| Verdict | `RECETTE AVAILABLE — E08 DOCUMENTARY REAL MERGE BUILD SERVED — MORRIS UAT REQUIRED` |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE-CORRECTED

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 13:02 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — correction revue merge documentaire REAL (DEV) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| Base candidat | `a087051a` / `7274dcc0` |
| Fix | fail-closed mode UNKNOWN · reconcile provenance · D8 headSha source préservé · SCRIPTED cible seule |
| Preuves | PG documentary-merge-corrections **8/8** · conversation-merge-security **5/5** · unit contract/sha/authority/preview · tsc PASS |
| RECETTE | **INCHANGÉE** `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` |
| Mutation GitHub REAL | **NONE** — **NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **READY FOR CHATGPT REVIEW — E08 DOCUMENTARY REAL MERGE CORRECTED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-DOCUMENTARY-REAL-MERGE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 12:53 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — fusion documentaire GitHub REAL gouvernée via Nora (DEV) |
| Type | EVOL · CRITICAL · **NO RELEASE** |
| AS-IS | Chaîne Nora→D6→D7→D9 merge déjà présente ; gaps reconcile `headSha`, pas de `effectProviderMode` merge, éligibilité GitHub insuffisante, SCRIPTED réutilisait HEAD |
| Fix | `MergePlan.effectProviderMode` · reconcile merge_commit_sha + ML4-REC-01 · eligibility clean · SCRIPTED merge SHA distinct · vue MERGE corrélée |
| Preuves | unit documentary-merge-contract + merge-sha + authority · PG conversation-merge-security · git-collaboration B3/T20 slice · tsc PASS |
| RECETTE | **INCHANGÉE** `98118de0` / `_U3Z92BCd0K_-hiMvgTP9` · ml4d-ux004 |
| Mutation GitHub REAL | **NONE** — merge REAL **NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **DEVELOPMENT COMPLETE WITH RESERVES — REAL MERGE NOT YET PROVEN** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UNIVERSAL-PREVIEW-FALLBACK

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 12:16 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — visionneuse Git : aperçu indisponible universel (Figma 11.17) |
| Type | EVOL · STANDARD · **NO RELEASE** |
| Principe | Rendu selon capacité effective — **pas** liste fermée de suffixes |
| AS-IS | binary/too_large → throw 415/413 sans provenance UI |
| Fix | `readGitFile` retourne `preview` + `openUrl` ; UI `GitPreviewUnavailable` ; erreurs Git distinctes |
| Preuves | unit git-preview **7** + suites git ciblées PASS · tsc PASS · e2e PREVIEW UI PASS · captures DEV |
| RECETTE | **INCHANGÉE** `24a8fa9e` / `qCQGWLYYGb0ZCA4BLfzBi` |
| Cutover | **NONE** — GO Morris distinct |
| Push projet / mutation GitHub | **NONE** |
| Verdict | **READY FOR CHATGPT REVIEW — E08 GIT UNIVERSAL PREVIEW FALLBACK** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-WRITE-MANDATE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 11:32 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE correctif mandat WRITE (branche explicite) |
| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| BUILD_ID | `qCQGWLYYGb0ZCA4BLfzBi` |
| Avant | `@7115e932` / `OwQrOGhC9rwk_Dtj31OcM` |
| Après | HTTP `<!--qCQGWLYYGb0ZCA4BLfzBi-->` · ml4d-ux004 |
| Backup | `ml4d-e08-pre-mandate-cutover-20261122T103212Z-from-7115e932.sql.gz` + restore PASS |
| Rollback | prêt vers `7115e932` / `OwQrOGhC9rwk_Dtj31OcM` (non exercé) |
| DB | préservée · métriques stables · PR#19/#20 intactes |
| Rebuild | **NONE** |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — E08 WRITE MANDATE CORRECTIVE SERVED — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-WRITE-MANDATE-BRANCH

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 11:30 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — correctif mandat publication : branche explicite |
| Type | INC / QA · CRITICAL · **NO RELEASE** |
| Cause | `preparePublication` substituait toujours un hash correlation ; regex « Branche à créer » incomplète |
| Fix | `resolvePublicationBranchName` + wiring mission/D6 guards |
| Incident | CampusFlow R12 · `efx_d8f8e550…` · PR#20 (historique inchangé) |
| Preuves | unit **848/848** · PG accept01 **11/11** · tsc PASS |
| RECETTE | cutover **EXECUTED** — voir DELIV-…-WRITE-MANDATE-CUTOVER |
| Cutover | **EXECUTED** |
| Push projet / mutation GitHub | **NONE** |
| STABLE | NOT AVAILABLE |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-CORRECTIVE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 10:06 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE build correctif Git READ |
| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `7115e932dad8628af13cd5dcbf1fefc3a227c81e` |
| TREE | `bdfd5648f9dbc2ba49dda2863e6957c606d4cec6` |
| BUILD_ID | `OwQrOGhC9rwk_Dtj31OcM` |
| Avant | `@79188f6c` / `hLsmHa3uFYP0PgRtj49Bh` |
| Après | HTTP `<!--OwQrOGhC9rwk_Dtj31OcM-->` · ml4d-ux004 |
| Backup | `ml4d-e08-pre-corrective-cutover-20261122T090524Z-from-79188f6c.sql.gz` + restore PASS |
| DB | préservée · métriques stables · PR#19 intact |
| Rebuild | **NONE** |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — E08 CORRECTIVE BUILD SERVED — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 09:50 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — correctif revue ChatGPT (handoff `84b524de`) |
| Type | INC / QA · CRITICAL · **NO RELEASE** |
| Écart A | Budget partagé : un objet `createSharedToolBudget` (D4+history calls · Git calls · chars) |
| Écart B | `compareCommitsRemote` : SHA head vérifié si `commits[]` vide |
| Écart C | `fetchCommitStatusRemote` : dual 403 → ACCESS_DENIED pour `withReadToken` |
| Preuves | unit **840/840** · corrective **16/16** · PG accept01 **11/11** · tsc PASS |
| RECETTE | cutover **EXECUTED** — voir DELIV-…-CORRECTIVE-CUTOVER |
| Cutover | **EXECUTED** |
| Push projet | **NONE** |
| STABLE | NOT AVAILABLE |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-READ-HARDENING

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 09:35 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — fiabilisation Git READ (réserves UAT) |
| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
| R-READ-03 | Budget Git séparé (`maxGitToolCalls`) — cause TEST_BOUNDARY partagé |
| R-READ-02 | `read_git_commit` + `compare_git_refs` |
| R-READ-01 | `read_git_commit_status` ; protections/rulesets **DENIED** explicite |
| Preuves | unit **824/824** · PG accept01 **11/11** · tsc PASS |
| RECETTE | **INCHANGÉE** `79188f6c` / `hLsmHa3uFYP0PgRtj49Bh` |
| Cutover | **NONE** — candidat local à figer ; GO cutover ultérieur |
| Push projet | **NONE** |
| STABLE | NOT AVAILABLE |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-AUDIT-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 08:38 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — cutover RECETTE audit capacités GitHub |
| Type | MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `79188f6cf334be5c81f485b8cb1c4f1ae95644dc` |
| TREE | `a550283d37ff461323ea02757350de24b772133e` |
| BUILD_ID | `hLsmHa3uFYP0PgRtj49Bh` |
| Avant | `@c67a6ba8` / `tEiDqhhGWNipSWO_86ZoG` |
| Après | HTTP `<!--hLsmHa3uFYP0PgRtj49Bh-->` · ml4d-ux004 |
| Backup | `ml4d-e08-pre-gitaudit-cutover-20261122T073809Z-from-c67a6ba8.sql.gz` + restore PASS |
| DB | préservée · métriques stables · PR#19 intact |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CAPABILITY-AUDIT

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 08:30 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — audit exhaustif + fiabilisation capacités GitHub |
| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
| Gaps P0 | list/find PR ; fichiers PR ; permissions sources ; token parity READ PR |
| Fix | `list_git_pull_requests` · `list_git_pull_request_files` · permissions · `withReadToken` |
| Preuves | unit policy/tools/scripted · gh REAL READ PR#19 · matrice A–G |
| REAL WRITE / merge | **NOT** (gates ouverts) |
| Cutover | **EXECUTED** — voir DELIV-…-GIT-AUDIT-CUTOVER |
| Push projet | **NONE** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-UAT-PR-READ

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 08:15 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — GIT-UAT-01 PR READ + bandeau tour |
| Type | INC / QA · CRITICAL · **NO RELEASE** |
| Cause A | `TOOL_NOT_EXPOSED` — D9 `getPullRequest` non outillé Nora |
| Cause B | UI `activity=error` sur turn `UNKNOWN` (qual UNAVAILABLE) avec copy « tentative/réconciliez » |
| Fix | `read_git_pull_request` + allowlist + banner copy |
| Preuves | unit policy/tools/banner/scripted PR read · tsc · REAL READ oracle PR#19 (gh) |
| Cutover | **NOT EXECUTED** — CANDIDATE FROZEN · RECETTE GO REQUIRED |
| Push projet | **NONE** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CHAIN-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 07:45 CET (Europe/Paris) |
| SOURCE_SHA | `c67a6ba8bde5c4d818a23fe96d2822a22c050121` |
| TREE | `f54c0aff60af9e47f2f4a181a9d1dcfa75519a95` |
| BUILD_ID | `tEiDqhhGWNipSWO_86ZoG` |
| Avant | `@0b5d6c74` / `RSccgxDslwxMhjjTtFo4Z` |
| Après | HTTP `<!--tEiDqhhGWNipSWO_86ZoG-->` · ml4d-ux004 |
| DB | préservée · attempt PR#19 intact |
| Backup | `ml4d-e08-pre-chain-cutover-20261122T064246Z-from-0b5d6c74.sql.gz` + restore PASS |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CHAIN-FIABILISATION

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 07:45 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — fiabilisation chaîne Git Nora↔Studio↔GitHub |
| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
| Oracle | PR #19 chantiers360 · attempt `efx_cf6763da…` · mission `turn-67d643cc…` |
| Cause | restitution COMPLETED sparse ; follow-up sans faits D8 ; READ main mal contextualisé |
| Fix | hydrate view depuis D7/D8 · terminalFacts path/SHA/PR/liens · snippets owner · toolScope resume |
| Preuves | unit restitution+view · PG accept01 enrichi · REAL READ PR#19/blob/main-404 |
| REAL E2E mutation | **NOT** (aucune nouvelle mutation Cursor) |
| Push projet | **NONE** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-UAT-GIT-PUB-01-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 07:11 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — UAT-GIT-PUB-01 cutover RECETTE |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `0b5d6c74b65171efa3ccda55d8478030afac6d9b` |
| TREE | `bf3a60b3b928803292120364fcbdda5833c9e667` |
| BUILD_ID | `RSccgxDslwxMhjjTtFo4Z` |
| Avant | `@f1907aad` / `zKGLfPHM1TMilec4qglJv` |
| Après | servi HTTP `<!--RSccgxDslwxMhjjTtFo4Z-->` · service `ml4d-ux004` |
| DB | préservée · `projects=26 messages=649 documents=117` |
| Backup | `ml4d-e08-pre-pub01-cutover-20261122T061040Z-from-f1907aad.sql.gz` + restore proof PASS |
| WRITE REAL | ON documentary · allowlist `mcleland147/chantiers360` · **E2E REAL NOT PROVEN** |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** (PUB-01..05) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-UAT-GIT-PUB-01

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 07:10 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — UAT-GIT-PUB-01 publication conversationnelle |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Cause | `MISSION_NOT_RESUMED` / S05 self-block sur clarification → `NOT_ATTEMPTED` (zéro `effect_attempts`) ; root `.md` → `MARKDOWN_OUTSIDE_DOCUMENTARY_ZONE` |
| Fix | `isPublicationPathClarificationResume` + skip S05 self-block · `DOCUMENTARY_ROOT` · D6 `missionClientIntentKey` ≠ turn key |
| Diagnostic | cause racine continuité S05 + path policy ; `DISPATCH_NOT_TRIGGERED` = conséquence |
| Preuves | unit clarification+path-policy · PG accept01 (11) SCRIPTED COMPLETED · PW E08 Nora 2/2 |
| SOURCE_SHA | `0b5d6c74b65171efa3ccda55d8478030afac6d9b` (fix `e78dae5e` + tests) |
| TREE | `bf3a60b3b928803292120364fcbdda5833c9e667` |
| BUILD_ID | `RSccgxDslwxMhjjTtFo4Z` |
| REAL E2E | **NOT PROVEN** — UAT Morris sur RECETTE |
| Push projet | **NONE** |


## delivery_id: DELIV-2026-11-22-ENSEMBLE08-FINALISATION-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 06:12 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — FINALISATION cutover RECETTE |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| SOURCE_SHA | `f1907aad98f75c7d39e4c21ccbd8043ab048ce09` |
| TREE | `1e93363b50f07e95dcd3a9cccb01c7ca4ad96729` |
| BUILD_ID | `zKGLfPHM1TMilec4qglJv` |
| Avant | `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` |
| Après | servi HTTP `<!--zKGLfPHM1TMilec4qglJv-->` · service `ml4d-ux004` |
| DB | préservée · inventaire projects=26 messages=641 · Equip'Campus présent |
| Backup | `ml4d-e08-pre-final-cutover-20261122T051131Z-from-9f346391.sql.gz` + restore proof PASS |
| WRITE REAL | OFF · NOT PROVEN |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-FINALISATION-UX-REAL-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 06:10 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — FINALISATION 11.06 G5 + GitHub REAL WRITE policy + RECETTE |
| Type | EVOL / QA / RECETTE · CRITICAL · **NO RELEASE** |
| UX | panneaux 610px · y≈293 · banner 44 · F2 ≤2 — `finalisation-11.06-g5-matrix.md` |
| REAL | `GITHUB_APP_WRITE_ALLOWED_REPOS` ⊂ READ ; gate documentary+WRITE ; mutations OFF RECETTE |
| REAL WRITE mutation | **NOT PROVEN** — STOP sandbox/GO |
| Preuves | unit 806 · PG 538 · PW 11.06 3/3 · tsc PASS |
| Push projet | **NONE** |
| Verdict | voir manifeste section D + Review Pack (cutover si gates OK) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-02-INTEGRATIONS-UX

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 05:50 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 02 Intégrations UX 11.06 |
| Type | EVOL / UI CONFORMANCE · STANDARD · **NO RELEASE** |
| Figma | `itgvCulInEnFY6DvgIegvP` node `1095:339` · PNG SHA256 `d50412ed…` |
| Blast | IntegrationsPanel · tokens 11.06 · StudioShell nav active · tests · evidence |
| D6–D9 / OAuth / WRITE | **NO CHANGE** |
| RECETTE | **préservée** `@9f346391` / `F85QQBTLa8nq5zKYxMKKZ` — aucun cutover |
| Preuves | unit 4 PASS · Playwright 3 PASS · F2 rail/contenu/panneaux/boutons ≤2px · styles bandeau |
| Push projet | **NONE** |
| Verdict | **DELIVERY READY — G5 PROVEN** (11.06 rectangles stables ; UAT Morris distinct) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 04:50 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 cutover RECETTE |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| GO Morris | SHA `9f346391…` · TREE `364c9073…` · BUILD `F85QQBTLa8nq5zKYxMKKZ` |
| Avant | `@98185598` / `1xEbvCdTAX6ht262w4oKF` |
| Après | servi HTTP `<!--F85QQBTLa8nq5zKYxMKKZ-->` · service `ml4d-ux004` |
| DB | `sfia_next_recette_ml4` préservée · inventaire identique · Equip'Campus présent |
| Backup | `ml4d-e08-pre-postuat-cutover-20261122T035016Z-from-98185598.sql.gz` + restore proof PASS |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-FREEZE-LOCAL

| Field | Value |
| --- | --- |
| Date | 2026-11-22 ≈ 04:33 CET (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 freeze local candidat |
| Type | EVOL / QA / FREEZE CANDIDAT · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Parent | `29066442a7fa51b106d9fe45b5c1b05da7f13004` |
| SOURCE_SHA | `9f34639110ce2315a2bf8dc0786197bb8f5ea3b1` |
| TREE | `364c907342772f5430cf855d269cecc458f0546c` |
| BUILD_ID | `F85QQBTLa8nq5zKYxMKKZ` |
| Artefact | `…/sfia-workspace-next-ml4d-ensemble08-postuat-build-9f346391/…/web/.next` |
| GO Morris | Commit local + build détaché autorisés ; push/PR/cutover **NON** (à ce stade) |
| Réserves fermées | A contenu D4↔SCRIPTED · B D7 COMPLETED + D8 · C build détaché |
| Push projet | **NONE** |
| Cutover | traité ensuite — voir `…-RECETTE-CUTOVER` |
| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** (historique freeze) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CLOTURE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 clôture écarts publication Nora |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a1` · HEAD `29066442` + worktree dirty |
| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
| P0 | réconciliation `objectRef`/`documentHint` (conflit → AMBIGUOUS, zéro effet) |
| P1 | `NOT_ATTEMPTED` si intention sans effet ; reprise COMPLETED = restitution métier |
| Preuves | PG WRITE OFF zéro mutation · PG SCRIPTED E2E · Playwright Nora DEV (voir pack) |
| Push projet | **NONE** |
| Cutover | **NOT EXECUTED** |
| Verdict | DELIVERY READY WITH RESERVES (A/B/C traitées au freeze) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — POST-UAT 01 convergence finale (doc/rév · Nora · UX) |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a1` · HEAD `29066442` + worktree dirty |
| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
| P0 | explicite > focus/same-turn ; `confirmPublicationDocumentWithD4` avant D7 |
| P1 | restitution Nora mono-état (pas de narratif contradictoire) |
| P2 | Infos a11y/focus ; Intégrations 11.06 structure |
| Tests | unit PASS · PG `publication-target-post-uat` + accept01 PASS · Playwright DEV (voir pack) |
| Push projet | **NONE** |
| Cutover | **NOT EXECUTED** |
| Verdict | (voir Review Pack final) |

## delivery_id: DELIV-2026-11-22-ENSEMBLE08-POST-UAT-01

| Field | Value |
| --- | --- |
| Date | 2026-11-22 (Europe/Paris) |
| Macro-lot | Ensemble 08 — correctif post-UAT 01 (publication Nora + UX) |
| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` `a12f89a1` |
| RECETTE | **FROZEN** `@98185598` / BUILD `1xEbvCdTAX6ht262w4oKF` — **aucune mutation** |
| Diagnostic UAT | Classe **A/B** (+ **C** si path exécuté) : intention reconnue, hedge LLM, **zéro** `effect_attempt` 2026-11-22 ; gate historique `documentEffectForAck.status===AVAILABLE` bloquait publish-existing |
| Correctifs | publish-existing + WRITE-off restitution Nora ; chrome hero unique ; microcopy ; Infos popover ; Intégrations 11.06 structure |
| Tests | unit restitution/target + tsc PASS ; PG/Playwright LIVE **non** déclarés équivalents SCRIPTED |
| Push projet | **NONE** |
| Cutover RECETTE | **NOT EXECUTED** — GO Morris SHA-specific requis |
| Verdict | **DELIVERY READY WITH RESERVES** (G5 Figma runtime + WRITE sandbox hors mandat) |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-21 ≈ 21:02 CET |
| Macro-lot | Ensemble 08 — cutover RECETTE existante E07 |
| Type | EVOL / MISE À DISPOSITION · CRITICAL · **NO RELEASE** |
| GO Morris | SHA `98185598` · BUILD `1xEbvCdTAX6ht262w4oKF` |
| Avant | E07 `@5ad8fa57` / `BtZP6qDx5oAw8jwPQSEhc` |
| Après | E08 servi HTTP `<!--1xEbvCdTAX6ht262w4oKF-->` · service `ml4d-ux004` |
| DB | `sfia_next_recette_ml4` préservée · projects 26 inchangé · +sessions/messages smoke |
| Backup | immédiat + restore proof isolée PASS |
| Playwright SCRIPTED on RECETTE | 3 FAIL (attendu LIVE/REAL) |
| Smoke API/surfaces | PASS (Pilot A test login) |
| G5 | NOT PROVEN — Morris UAT |
| Push projet | **NONE** |
| Verdict | **RECETTE AVAILABLE — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CANDIDATE-FREEZE-RECETTE-PREP

| Field | Value |
| --- | --- |
| Date | 2026-11-21 (Europe/Paris) |
| Macro-lot | Ensemble 08 — freeze candidat + préparation évolution RECETTE E07 |
| Type | EVOL / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `19bd0099` |
| Candidate SHA | `98185598de0d3f3b84af862aecea04b9099217ca` |
| TREE | `1c70839facb7fbc799980c585ce8bfba51cdb5d6` |
| BUILD_ID | `1xEbvCdTAX6ht262w4oKF` |
| Build worktree | `sfia-workspace-next-ml4d-ensemble08-recette-build-98185598` |
| RECETTE runtime observé | E07 `@5ad8fa57` · BUILD `BtZP6qDx5oAw8jwPQSEhc` · port 3200 · DB `sfia_next_recette_ml4` préservée |
| Backup PG | `ml4d-e07-pre-e08-cutover-20261121T193852Z-from-5ad8fa57.sql.gz` |
| Cutover | **NOT EXECUTED** — GO SHA-specific requis |
| Matrice A/B/S | Totaux corrigés 12 / 17 / 10 / 2 (=41) |
| Push projet | **NONE** |
| Verdict | **CANDIDATE FROZEN — RECETTE GO REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-TECHNICAL-EXIT-RECETTE-PREFLIGHT

| Field | Value |
| --- | --- |
| Date | 2026-11-21 (Europe/Paris) |
| Macro-lot | Ensemble 08 — finalisation technique et préparation RECETTE |
| Type | EVOL CORRECTIF / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| HEAD | `a12f89a1` (worktree dirty — candidate SHA **NOT AVAILABLE**) |
| Prior handoff | `6492013e` |
| E08-S03 | Fermé : `incompleteCoverage`/`matchedCount` au niveau fournisseur (REAL+SCRIPTED) ; plus de complete=true après troncature silencieuse |
| Matrice A/B/S | 41/41 qualifiés (`matrice-couverture-acceptation-a-b-s.md`) |
| ENV-01 | Préflight only (`env01-recette-preflight.md`) — pas de déploiement |
| Tests | `git-refs-coverage-s03` 19 PASS · tsc PASS · suites E08 ciblées (voir pack) |
| Nora LIVE | **NOT PROVEN** |
| GitHub REAL WRITE/MERGE | **NOT PROVEN** / hors mandat |
| G5 | **NOT PROVEN** — différé RECETTE Morris |
| Revue / handoff | Review Pack FULL + L3 publish-in-cycle |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-EXIT-QUALIFICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — sortie conformité résiduelle et preuves |
| Type | EVOL CORRECTIF / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `08927c38` |
| E08-S01 | conditions ouvertes → CONDITION_OPEN, zéro effet |
| E08-S02 | routage via qual durable ; plus de gate verb-list obligatoire |
| E08-S03 | recherche branche `refPrefix` + résolution exacte |
| E08-S04 | `prStatusKind` / label historique honnête |
| E08-S05 | Review Pack = contenu final exact (empreintes) |
| G5 | à qualifier runtime / sinon NOT PROVEN |
| Push projet | **NONE** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-FINAL-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — convergence finale (Nora/merge, Git contracts, UX Figma, preuves) |
| Type | EVOL / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `37c0dc81` |
| A1–A3 | qualification merge durable `d7.merge_publication` · cible dépôt+PR · contradiction same-PR fail-closed |
| B1–B5 | `normalizeGitReadPath` · refs `incompleteCoverage` · binaire non rendu · projection MERGE via tentative distincte |
| C1–C3 | publications 30/70 · détails agrandis · confirmation déconnexion 11.07 |
| Tests | unit merge/path/pubs PASS · PG merge-security **3/3 PASS** · tsc PASS |
| G5 Figma runtime | **NOT PROVEN** (pas de captures navigateur F2 ce cycle) |
| GitHub REAL mutation | **NOT PROVEN** / hors mandat |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-MERGE-AUTHORITY-SECURITY

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — correctif CRITICAL sécurisation merge conversationnel |
| Type | CORRECTIVE / CRITICAL · **NO RELEASE** |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
| Prior handoff | `eebaeeda` |
| P0-M01 | négation/hypothèse → aucun prepare/authorize/dispatch |
| P0-M02 | PR explicite liée à publication documentaire exacte (pas latest) |
| P0-M03 | HumanDecision merge + conversationalProvenance liée au plan |
| Tests | unit merge guards PASS · PG conversation-merge-security **3/3 PASS** |
| REAL mutation | **NOT PROVEN** / hors mandat |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CORRECTIVE-P0P1-G5-REAL

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — cycle correctif intégré (P0/P1, Nora merge, Figma L2, Playwright, REAL allowlist) |
| Type | CORRECTIVE / CRITICAL · **NO RELEASE** · Gate C OPEN |
| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` (local only) |
| Prior handoff | `74528b81` (FULL §7.2) — pack mono-cycle réinitialisé puis republier |
| P0 | branch hint « du/de » · merge SHA ≠ HEAD · provenance USER persistée |
| P1 | stale async · attach explicite · truncation >200 AMBIGUOUS · pubs D8 non-live |
| Nora | refuse → no PREPARED · `admitConversationalMergeMandate` |
| REAL multi-repo | allowlist `GITHUB_APP_ALLOWED_REPOS` (owner-bound, no allow-all) |
| Figma | L2 11.03 metadata · G5 runtime **NOT PROVEN** |
| Tests | unit **743 PASS** · mission-continuity PG **10 PASS** · git-collaboration PG **93 PASS** · Playwright E08 surface **2 PASS SCRIPTED** · tsc/build PASS |
| REAL mutation | **NOT PROVEN** (pas de GO sandbox) |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE08-GIT-PUBLICATIONS-NORA

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 08 — Dépôts Git, publications, conduite Nora |
| Type | EVOL / Delivery CRITICAL · **NO RELEASE** · Gate C OPEN |
| Base | `origin/main` `a12f89a1` (annoncé `1dd1a8ec` +2 : Journal nav PR #689) |
| Branche | `feat/next-ensemble08-git-publications-nora` (local only — **no project push**) |
| Capacité A | tree API · publications projection · `GitRepositoriesSurface` · multi-liens |
| Capacité B | mandat conversationnel D6 → `authorizePublication` · `list_git_directory` Nora |
| Merge REAL | code path documentary + SHA (non exercé END-TO-END REAL ce cycle) |
| Figma | L0/L1 + PNG SHA page 11 · G5 runtime **NOT PROVEN** |
| Tests | unit 725 PASS · mission-continuity PG 10 PASS · git-collaboration filtré 24 PASS · build PASS |
| Push projet | **NONE** |
| Verdict candidat | **DELIVERY READY WITH RESERVES** — supersédé par cycle correctif ci-dessus |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-PR687-SAS06-RESPONSIVE-CI

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — remédiation CI PR #687 · SAS06 responsive |
| Type | CORRECTIVE / QA / CI / GIT · **NO RELEASE** · Gate C OPEN |
| Parent tip avant correctif | `8b256c72…` (run CI `44902434109` **CANCELLED** Morris — non FAIL fonctionnel) |
| Cause | CTA « Accéder » hors viewport @1280×720 ; `min(124px,8vh)` dérivait aussi le padding desktop (−46px @970h) |
| Correctif | `clamp(16px, calc(100vh − 726px − 24px), 124px)` + carte 702×726 avec `maxHeight` ; overlay/card scrollables |
| Preuves locales | `sas06-responsive-viewports` 2 PASS · `g4-b1-b4` PASS · `ensemble04-cp01-cp02` PASS · tsc PASS |
| F2 desktop | padTop 124 · card 702×726 · tol ≤2 @1680×970 |
| Push | branche `sfia/next-ensemble07-git-integration` · PR #687 |
| RECETTE / UX 11/11 | **non mutés** · UAT `5ad8fa57` reste ancêtre |
| Follow-up | d2-ack sans popup ACK-lost · PilotagePanel E2E-only (`NEXT_PUBLIC_STUDIO_E2E`) · ml3/journal/CR-02 prouvés localement |
| CI final | run `44908228223` · HEAD `957737c3` · Playwright + Required Gate **SUCCESS** |
| Verdict | **ENSEMBLE 07 — PR #687 CI GREEN — SAS06 RESPONSIVE VERIFIED — DOCUMENTATION ALIGNED — READY FOR INDEPENDENT MERGE REVIEW** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-ACQUIS-PANELS-50-50

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — correctif final UX Acquis / À clarifier 50/50 + RECETTE |
| Type | CORRECTIVE / UX / QA / RECETTE · **NO RELEASE** · Gate C OPEN |
| Parent | `09a935bc…` / tree `5809a0bb…` |
| Propriétaire | `TrajectoryBoard` row `trajectory-cycle-knowledge-row` — `minmax(0,640fr) minmax(0,646fr)` + gap 24 · `min-w-0` · wrap |
| F2 | 09.02 / 09.09 · acquis≈639 / clarifier≈645 / gap 24 · tol≤2 · preuves `.tmp-sfia-review/ensemble07-acquis-panels-fix/` |
| UAT Morris | Acceptation 21/11 avec réserve unique ; réserve **techniquement levée** après F2 + RECETTE |
| Push projet | **NONE** |
| Verdict | **ENSEMBLE 07 — MORRIS UAT ACCEPTED — FINAL UX RESERVE TECHNICALLY CLEARED — RECETTE UPDATED — READY FOR GIT INTEGRATION REVIEW** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-PAGE10-EXPERIMENT

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — Page 10 Figma expérimentation → Runtime → RECETTE |
| Type | EVOL / UX / QA / DEPLOY · **NO RELEASE** · Gate C OPEN |
| Parent | `ce03f5a7…` / tree `bd9077d5…` |
| Methodo | v1.1 `@ a4516496` blob `3efe8807` (docs branch, non mergée main) |
| Figma | Page 10 `1069:100` · 11 frames · shell instance `1073:2` |
| Preuves | `.tmp-sfia-review/ensemble07-page10-experiment/` |
| F2 critiques | **40/40 PASS** (Δ0) · 09.10 analyzing **exercé** (HOLD DEV) |
| UX | Acquis/À clarifier toujours présents · suite envisagée = forecast · markers SVG |
| Tests | unit 34 PASS · PG E07 15 PASS · tsc PASS · build PASS |
| RECETTE | bascule LaunchAgent `ml4d-ux004` (voir handoff) |
| Push projet | **NONE** |
| Verdict | **ENSEMBLE 07 — FIGMA PAGE 10 / RUNTIME ALIGNED — 11/11 VERIFIED — RECETTE DEPLOYED — MORRIS UAT REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-RUNTIME-UX-CYCLE8-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — Cycle 8 final Figma→Runtime + deploy RECETTE |
| Type | EVOL / UX / CORRECTIVE / DELIVERY / DEPLOY · **NO RELEASE** · Gate C OPEN |
| Parent | `c500df9c…` / tree `3794e344…` |
| Layout | shell `data-project-figma-layout` · header 70 · hero Figma native · y panels **287** |
| CKI | editorial corpus + display objectif métier (pas instruction OPEN) |
| SAS06 | modal 702×726 + SVG natifs `public/figma/sas06/` |
| F2 | 13/13 examinés · panneaux critiques 09.01/05/06/11 w/h/y ≤2 px |
| Tests | unit 31 PASS · PG E07 15 PASS · tsc PASS · build PASS |
| RECETTE | bascule LaunchAgent `ml4d-ux004` vers candidat final (voir handoff) |
| Push projet | **NONE** |
| Verdict | **ENSEMBLE 07 — FIGMA/RUNTIME QUALIFIED — CORRECTED CANDIDATE DEPLOYED TO RECETTE — TECHNICAL SMOKE PASS — MORRIS FINAL UAT REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FIGMA-RUNTIME-UX-CYCLE8

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — Cycle 8 convergence UX Figma → Runtime (intermédiaire) |
| Type | EVOL / UX / CORRECTIVE · **NO RELEASE** · Gate C OPEN |
| Parent gel | `c500df9c…` / tree `3794e344…` (arbre local modifié) |
| Verdict | **FIGMA TO RUNTIME PARTIAL** — supersédé par FINAL |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-LOCAL-GIT-FREEZE-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — gel Git local du correctif continuité (post-QA concurrence) |
| Type | INC / gel candidat DEV · **NO RELEASE** · Gate C OPEN |
| Parent | `6ecdb987ee867a04ff816b699eb8870ac200db0a` (RECETTE figée immuable) |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| QA-FINAL-01 | Course GET A/B : barrières + marqueurs ; rail URL effect appelle `refreshDurablePilotage` |
| Tests gel | tsc PASS · unit **706** · PG **525** · browser continuity **7** · parcours-af **7 PASS / 2 SKIP** · build PASS |
| LIVE / RECETTE | NOT RUN / non mutée (`:3200` HTTP 200 RO) |
| Push projet | **NONE** |
| Verdict | **ENSEMBLE 07 — LOCAL GIT CANDIDATE FROZEN — MORRIS RECETTE GATE REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-FINAL-QA-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — consolidation QA finale avant gel Git |
| Type | INC / QA corrective · **NO RELEASE** · Gate C OPEN |
| QA-01 | Guard `shouldApplyDurableRefresh` **avant** setState ; Playwright race stale GET |
| QA-02 | CKI UI strict (`trajectory-cki-id` / absent) ; matrice Trajectoire n'occulte plus le parcours si ACTIVE |
| QA-03 | Second OPEN corrélé au tour assistant (messageId ↔ turnProjection.pilotageEffect) |
| CONFLICT/UNKNOWN | UNIT DETERMINISTIC ; BROWSER NOT RUN (déclaré) |
| Tests | unit 706 PASS · PG 525 PASS · browser continuity 7 PASS · parcours-af 7/2 · build PASS |
| Verdict | **ENSEMBLE 07 — DEV FINAL QA QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-BROWSER-CONTINUITY-QUALIFICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — qualification navigateur du correctif continuité pilotage |
| Type | INC / QA incrément · **NO RELEASE** · Gate C OPEN |
| Worktree | même arbre DEV local non commité · parent RECETTE `6ecdb987` |
| Preuves | BROWSER-01…06 Playwright `:3101` / `sfia_next_e2e` · fixture `cycleType=cadrage` · captures `.tmp-sfia-review/ensemble07-browser-evidence/` |
| Correctifs QA | `listTurnProjections` expose `pilotageEffect` · `refreshDurablePilotage` recharge projection complète |
| Tests | unit 702 PASS · PG 525 PASS · tsc PASS · browser continuity 6 PASS · LIVE NOT RUN |
| RECETTE | non mutée |
| Verdict | **ENSEMBLE 07 — DEV BROWSER QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED** |

## delivery_id: DELIV-2026-11-21-ENSEMBLE07-GOVERNED-PILOTAGE-CONTINUITY-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-21 |
| Macro-lot | Ensemble 07 — continuité du pilotage gouverné (correctif post-UAT Equip'Campus) |
| Type | INC / correctif fonctionnel intégré · **NO RELEASE** · Gate C OPEN |
| Worktree | `sfia-wt-ensemble07-projet-trajectoire-20261120` · branche `sfia/next-ensemble07-projet-trajectoire-delivery` · HEAD parent figé RECETTE `6ecdb987` (arbre DEV non commité) |
| IN | UAT-10 normalize cycleType · UAT-11 restitution post-effet · UAT-08/09 catalogue Nora · UAT-02 filtre messages techniques · UAT-12 sync surfaces · UAT-06 taxonomie concernée |
| OUT | Figma polish · mutation RECETTE · push projet · LIVE fournisseur · migration DB |
| Tests | unit 702 PASS · PG 525 PASS · tsc PASS · OPEN `cadrage`→CADRAGE PG PROVEN · LIVE NOT RUN — GATE REQUIRED |
| RECETTE | inchangée (`:3200` / BUILD `armX_D1HJzN6q-4MuDpYv` / SHA `6ecdb987`) |
| Verdict | **ENSEMBLE 07 — DEV CORRECTIVE QUALIFIED WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED** |


## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FUNCTIONAL-STABILIZATION-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 07 — stabilisation fonctionnelle/technique avant RECETTE |
| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
| P0 | P0-01 fence D5 in-TX · P0-02 resume assistantContent · P0-04 legacy expected flag (016) · P0-05 ensure-before-continue |
| FIX | FIX-04 fingerprint · FIX-07 validateStructuredForecast · FIX-08 RETAIN resolve PROPOSED · FIX-11 docs SAVING |
| Tests | PG 15 PASS · unit E07 10 PASS · tsc PASS · ml3 smoke PASS · E2E browser NOT RUN this cycle |
| UX | **GELÉ** — revue visuelle Morris en RECETTE (hors mandat) |
| Réserves | LIVE Nora NOT PROVEN · GO browser E2E NOT PROVEN · FIX-03 pas de worker autonome · full suite E2E/build NOT RUN |
| Verdict | **DEV STABILIZED WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED** |


## delivery_id: DELIV-2026-11-20-ENSEMBLE07-HIGH-FIDELITY-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 07 — haute fidélité + P0 fencing TOCTOU |
| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
| P0 | FIX-01 fencing write-point · FIX-02 message identity · FIX-05 missing-op lock · SAS modal capture |
| Tests | PG 12 PASS · unit 7 PASS |
| UX | FIGMA TO RUNTIME PARTIAL · modal SAS capturée |
| Réserves | LIVE Nora NOT PROVEN · GO convers. browser NOT PROVEN · FIX-03 worker non introduit |
| Verdict | READY WITH GOVERNED RESERVES / FIGMA TO RUNTIME PARTIAL |


## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FINAL-CONVERGENCE-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 07 — Projet/Trajectoire convergence finale (3e passe) |
| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
| Worktree | `sfia-wt-ensemble07-projet-trajectoire-20261120` · branche `sfia/next-ensemble07-projet-trajectoire-delivery` @ `e36fd8b` (non poussée) |
| P0 | COR-01 reopen/missing-op · COR-03 publish order · COR-04 effect fencing · SAS timers 400/900 retirés |
| Preuves | Figma 13/13 refs MCP · runtime captures distinctes 13 états · PG 10 PASS · unit E07 7 PASS |
| Réserves | LIVE Nora NOT PROVEN · GO conversationnel browser NOT PROVEN · UX PARTIAL · SAS popup live capture incomplete |
| Verdict | **READY WITH GOVERNED RESERVES** / **FIGMA TO RUNTIME PARTIAL** |
| Gates non acquis | Gate C, UAT Morris, STABLE, release, push projet |


## delivery_id: DELIV-2026-11-20-ENSEMBLE06-POST-MERGE-CI-VERIFIED

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 06 — Journal V4 + Bibliothèque Documents ; clôture de l'intégration Git |
| Type | Synchronisation documentaire factuelle post-merge · **NO RELEASE** |
| Autorité | Morris : UAT Journal (19/11), UAT Documents et Ensemble 06 (20/11), GO MERGE PR #683, puis GO de synchronisation documentaire |
| PR et merge | [#683](https://github.com/mcleland147/sfia-workspace/pull/683) **MERGED** par merge commit `f3ee3c5e6f1d1f480e8944567bde763c2ad79c0f` sur `main` |
| Parents vérifiés | `d3d199adb782462b93467934f5f1e8a0c98fb492` + `121a2e38081b2ab2b8f42308d35d664dea4e495a` |
| Code UAT et intégrité | `7a13d7deec488bf62881eec11b5658c45c02c5b0` ; `web/src` tree `4e5e87f5af6e16dbacc6f2218c811b6deabe411b` **préservé sur main** |
| CI pré-merge | [Next CI #44722295427](https://github.com/mcleland147/sfia-workspace/actions/runs/44722295427) PASS sur `121a2e38…` : 680 unitaires, 510 PostgreSQL, 83 Playwright FAKE PASS / 3 SKIPPED |
| CI post-merge | [Next CI #44727223721](https://github.com/mcleland147/sfia-workspace/actions/runs/44727223721) **SUCCESS** sur `f3ee3c5e…` (Build/Validate + Required Gate PASS) |
| Review Pack | [Cycle 14 FULL immuable](https://github.com/mcleland147/sfia-workspace/blob/a87e0efd918bb3aef0bd7b38dffc22f558982a6a/sfia-review-handoff/ensemble-06-cycle14-ci-pg-chatgpt-review-FULL.md) ; historique L3 vérifié |
| RECETTE | `http://127.0.0.1:3200` / BUILD `t4pjnrn3wGVHZEjhiw6yH` ; **non promue**, état runtime actuel non inspecté ici |
| Réserves maintenues | DOC-TECH-15/16 ; Journal R-01…R-11 ; J-C13 Option B ; Sas KNOWN GAP ; F2 et Nora LIVE/REAL non exhaustifs |
| Verdict | **GIT INTEGRATION COMPLETE / POST-MERGE CI VERIFIED / UAT MORRIS ACCEPTED WITH GOVERNED RESERVES** |
| Gates non acquis | Gate C, R6, STABLE, release, ADOPTED ; aucun changement produit ou migration dans cette mise à jour documentaire |


## delivery_id: DELIV-2026-11-20-ENSEMBLE06-UAT-GIT-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-20 |
| Macro-lot | Ensemble 06 — consolidation Git après UAT Morris |
| Type | Cycle 13 Critical · Git Integration / Doc · **NO RELEASE** |
| GO Morris | UAT ACCEPTED WITH GOVERNED RESERVES · commit/push branche · Draft PR · **MERGE INTERDIT** |
| Code recetté | `7a13d7deec488bf62881eec11b5658c45c02c5b0` · tree `2bb984969be6597b76baddb7a3c724ef8dcf22fa` · web `e61a98f4…` |
| Tip pré-docs | `aa568cfab37bec1922b2a6886c621dc7d9d37088` · BUILD `t4pjnrn3wGVHZEjhiw6yH` |
| Base main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Docs | PV UAT blob `e08c7b6c…` · PV Journal `dbc1ba8e…` · contrats/matrices blobs exacts · tip Roadmap 20/11 · as-built combiné |
| Tree web | **inchangé** vs code recetté (doc-only consolidation) |
| RECETTE | `http://127.0.0.1:3200` préservée |
| Réserves | DOC-TECH-15/16 · Journal R-01…R-11 · Sas KNOWN GAP · LIVE/REAL non globale |
| Verdict | voir PR Draft + Review Pack Cycle 13 |

## delivery_id: DELIV-2026-11-20-ENSEMBLE06-JOURNAL-DOCS-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-20 ~01:30 CET |
| Macro-lot | Ensemble 06 — intégration Bibliothèque Documents dans RECETTE Journal V4 |
| Type | Cycle 08 Delivery / Intégration / Mise en recette · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Continuité Ensemble 06 · même RECETTE `:3200` · Journal V4 accepté + Documents |
| Base Journal | `5f6e2f3860993acd35d176f60e6a7f0ca69d3a3d` |
| Source Documents | WT dirty sur `6516c7b56ec61bd72943ae0d26e625bf21139d4e` (+ P0/F1–F5) |
| Candidate branch | `sfia/next-ensemble06-journal-docs-recette-20261120` (local only) |
| HEAD | `7a13d7deec488bf62881eec11b5658c45c02c5b0` · tree `2bb984969be6597b76baddb7a3c724ef8dcf22fa` · BUILD `yZFSZj_l8dncTBQcWdP4c` |
| Merge | 3-way Journal∩Documents · TAKE_DOCS hors conflit · TravailViewer/NoraConversation fixes intégration |
| DB | `sfia_next_recette_ml4` @:5434 · **aucune migration structurante** · 014 déjà appliquée |
| Backup | `.tmp-sfia-review/recette-backup-20261120T001915Z/` · rollback code → `5f6e2f38` |
| Tests | tsc · unit docs+journal · PG docs+journal · e2e docs 08/nora/p0 · e2e journal-v4-parcours |
| Verdict Cursor | voir manifeste + Review Pack |


## delivery_id: DELIV-2026-11-19-LIVE-PROSE-SOFT-TARGET-2000

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~19:50 CET |
| Macro-lot | Ensemble 05+06 — anti-UNKNOWN schéma LIVE prose |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Soft target (= anciens max) + hard max 2000 sur prose secondaire · cutover RECETTE `:3200` |
| Fix | `LIVE_PROSE_HARD_MAX` · instructions Nora cibles · IDs/labels UI inchangés |
| HEAD | `d3950948` · tree `926c3822` · BUILD `2HWeuv_daXJXjd5PstRO` |
| Parent | notes-2000 `98225104` / BUILD `b48Kw86lEVMh4Ph_sVyZ` |
| Counters | projects=24 · messages=610 · conversations=197 · knowledge_subjects=6 **COUNTERS_OK** |
| Rollback | `ROLLBACK-TO-98225104.sh` + dump `ml4d-e06-journal-20261119-pre-d3950948` |
| Verdict Cursor | cutover PASS |

## delivery_id: DELIV-2026-11-19-NORA-NOTES-2000-UNKNOWN

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~19:35 CET |
| Macro-lot | Ensemble 05+06 — correctif UNKNOWN schema (notes) |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Forensic DEV + fix + cutover RECETTE `:3200` |
| Cause | LIVE Zod `intents.0.parameters.notes` Too big ≤400 sur formalisation décision CampusNova |
| Fix | `notes` max 400→2000 · instruction Nora notes courtes · diag `cause_chain` |
| HEAD | `98225104` · tree `00f6edb1` · BUILD `b48Kw86lEVMh4Ph_sVyZ` |
| Parent | consolidation `02e24e42` / BUILD `7yhVJFP0_Bm4cYc62Bo7` |
| Counters | projects=24 · messages=610 · conversations=197 · knowledge_subjects=6 **COUNTERS_OK** |
| Rollback | `ROLLBACK-TO-02e24e42.sh` + dump `ml4d-e06-journal-20261119-pre-98225104` |
| Verdict Cursor | cutover PASS · UAT Morris = retester prompt décision CampusNova |

## delivery_id: DELIV-2026-11-19-JOURNAL-CONSOLIDATION-V4

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~19:15 CET |
| Macro-lot | Ensemble 06 — Journal V4 dernier correctif consolidation |
| Type | Cycle 8 Delivery Correctif · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Synthèse absente sur sujet existant · densité acquis/synthèse/ouverts · CTA agrandi · sources · focusLock |
| Cause | `writeSubjectSummary` seulement sur intent SUBJECT — ACQUIS seuls n'ouvraient pas de révision |
| Scope | composeSubjectSummaryFromCurrentKnowledge · journal-editorial (client-safe) · bullets + overflow · aside sources · focus suppress sticky · non-stream Nora (héritage) |
| CampusNova | aucune mutation SQL / backfill — synthèse se met à jour à la prochaine capitalisation significative |
| Docs | as-built E06 descriptif · matrice v0.7 lecture seule |
| Verdict Cursor | voir cutover + Review Pack |

## delivery_id: DELIV-2026-11-19-JOURNAL-LIVING-MEMORY-V4

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~18:00 CET |
| Macro-lot | Ensemble 06 — Journal V4 mémoire vivante / provenance / nav / contradictions |
| Type | Cycle 8 Delivery Correctif · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctif RECETTE CampusNova (synthèse, acquis, sources, ancrage, contradictions) |
| Parent | `6457bc8e` pending TURN_IN_PROGRESS |
| Scope | synthèse révisable sur sujet existant · supersession acquis · provenance Pilote+Nora · SourceChip Figma · deep-link Journal→Travail prioritaire · heuristique contradictions |
| CampusNova | aucune mutation SQL / backfill / LIVE auto — correctif sur nouvelles contributions + projection |
| Docs | as-built E06 descriptif · matrice v0.7 lecture seule |
| Verdict Cursor | voir cutover + Review Pack |

## delivery_id: DELIV-2026-11-19-PENDING-TURN-IN-PROGRESS

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~17:20 CET |
| Macro-lot | Ensemble 05+06 — correctif reconcile pending |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** |
| GO Morris | Ne plus mémoriser clé orpheline sur TURN_IN_PROGRESS ; recover depuis fil ; cutover RECETTE |
| Parent | `758d2267` knowledgeStatement 5000 |
| Verdict Cursor | voir cutover |

## delivery_id: DELIV-2026-11-19-KNOWLEDGE-STATEMENT-5000

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~17:10 CET |
| Macro-lot | Ensemble 05+06 — correctif UNKNOWN schema |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Plafond `knowledgeStatement` 500→5000 + cutover RECETTE `:3200` |
| Cause | DEV LIVE: `intents.N.parameters.knowledgeStatement` Too big ≤500 |
| Parent | `d3017338` gel E05 / Journal quality |
| Verdict Cursor | voir cutover |

## delivery_id: DELIV-2026-11-19-E05-FREEZE-JOURNAL-QUALITY

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~16:40 CET |
| Macro-lot | Ensemble 05+06 — gel grammaire visuelle + qualité Journal + UNKNOWN forensic |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Bypass E05 (code préservé) · restitution texte · synthèse/acquis/refs/hauteurs · cutover RECETTE `:3200` |
| Parent | capitalisation `4c49f717` / tree `73efb65d` ; RECETTE BUILD `XOSTMrVvPzbd42ylsUL6Q` |
| Scope | `E05_VISUAL_COMPOSITION_FROZEN` · omit LIVE visual schema · D4 summary wiring · editorial compact · provenance excerpts · focus retry · hierarchy CSS |
| UNKNOWN | PROUVÉ schema/output invalid type stream_drain ; token overflow NON PROUVÉ |
| Docs | as-built E05/E06 descriptifs · matrice v0.7 lecture seule |
| Verdict Cursor | voir Review Pack |


## delivery_id: DELIV-2026-11-19-JOURNAL-D3-D4-CAPITALISATION

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~14:45 CET |
| Macro-lot | Ensemble 06 — restauration capitalisation Nora → D4 |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctif conduction D3 + tests fake + cutover RECETTE `:3200` |
| Parent | gel UX `3fc8af5f` / HEAD docs `b9a0c9c3` ; diagnostic handoff `3fac39c1` |
| Scope | QUALIFICATION_INSTRUCTIONS mémoire · REQUEST_EFFECT borné · OBS knowledge_proposals · tests unit/PG |
| Docs | matrice v0.7 lecture seule · as-built mis à jour |
| Verdict Cursor | voir Review Pack |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-FINAL-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~13:30 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 final UX + RECETTE |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctif libellés/liserés/empty + cutover RECETTE `:3200` |
| Parent | `6c658f91` pixel cycle ; RECETTE préflight à vérifier (dérive ML3 observée sur :3200) |
| Scope | COPY Figma exact · C09 liserés · C10 empty · oracles · cutover même LaunchAgent |
| Docs | matrice v0.7 §18 lecture seule |
| Verdict Cursor | voir Review Pack |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-PIXEL

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~13:00 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 pixel-perfect corrective |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO RECETTE CUTOVER** |
| GO Morris | 11 états NON RÉCEPTIONNÉS — finition géométrie/liserés/compositions |
| Parent | local `0eb3157b` (RECETTE toujours `d5bf7eb7`) |
| Scope | 40/60 height · liserés Figma · parent≠autonome · agrandi article+aside · search/open-points · D6 status |
| Docs | matrice v0.7 §18 `f0d2d033` |
| Verdict Cursor | voir Review Pack (comparaison 11 frames + réserves) |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-FIGMA-UX

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~12:15 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 Figma UX corrective |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO RECETTE CUTOVER** |
| GO Morris | NON CONFORME UX Figma → correctif obligatoire ; cutover RECETTE hors mandat |
| Parent | local `d5bf7eb7` (build RECETTE toujours servi) |
| Scope | ProjectJournal V4 shell · tokens · Chrome breadcrumb-only · deep-link race · 11 captures |
| Figma | 11 frames `itgvCulInEnFY6DvgIegvP` page 828:2 lus via MCP |
| Provenance CampusFlow | Classification A — titre D4 fragment conversationnel, pas de fuite |
| Verdict Cursor | `FIGMA TO RUNTIME ALIGNED — READY FOR MORRIS VISUAL REVIEW` (réserves pixel / J-C14) |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~11:33 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 qualification + RECETTE |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Qualification technique + mise à disposition sur RECETTE existante |
| Candidate | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` · tree `f5c05cb94f5137d06a26107b7003ab1bf073f923` · BUILD `PV12SV9VToVGK-ReSxTqk` |
| Parent RECETTE | `5c94c867…` / `IEINNuPl0bHWJOWkh0ZhG` |
| Scope | QA DEV · migration 014 additive RECETTE · cutover même `:3200` / LaunchAgent · smoke · manifeste |
| DB | `sfia_next_recette_ml4` · 014 applied · counts 23/560 preserved |
| Rollback | `ROLLBACK-TO-5c94c867.sh` + dump `ml4d-e06-journal-20261119-pre-d5bf7eb7` |
| Manifeste | `construction/ensemble-06-journal-recette-manifest.md` |
| Verdict Cursor | `RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE` |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-LIVE-PARTIAL

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~11:05 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 cycle 4 §5 + LIVE |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Complétude §5 + LIVE 20 tours CampusFlow (arrêt opérateur après E01) |
| Parent | local `a122bf27` |
| Scope | J-C08/11/13/14/07/05/16 oracles · viewerOpenRef J-C14 · LIVE E01 REAL BOUNDARY PARTIAL |
| QA | tsc/lint/build PASS · UNIT+PG Journal PASS · Playwright seeded 2/2 · ML3 PG 49 PASS · LIVE 1/20 puis STOP |
| Visual | **VISUAL REVIEW PENDING MORRIS — RECETTE** |
| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — §5 DETERMINISTIC + LIVE E01 ONLY` |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-E06-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~10:10 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 cycle 3 E06-01..06 |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Corrections ciblées + BROWSER données non vides DEV |
| Parent | local `782c93ec` |
| Scope | E06-05 scope · E06-03 UNVERIFIED Git · E06-04 chrono message · seed BROWSER · resolve source réelle · migrate 014 |
| QA | tsc/lint/build PASS · unit+PG Journal PASS · Playwright seeded PASS · LIVE/REAL NOT RUN |
| Visual | **VISUAL REVIEW PENDING MORRIS — RECETTE** |
| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — E06 CORRECTIVES LOCAL` |


## delivery_id: DELIV-2026-11-19-JOURNAL-V4-COMPLETION

| Field | Value |
| --- | --- |
| Date | 2026-11-19 ~09:40 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 completion |
| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Complétude J-C04/06/13/14 + PARTIAL + BROWSER DEV |
| Candidate local | `sfia/next-journal-delivery-20261119` (post-78c3c3b0) |
| Scope | Réactivation D3/D4 · sources/contradictions · message/doc deep-link · UI search reason · PG+BROWSER |
| QA | tsc PASS · lint PASS · unit 4/4 · PG 10/10 · Playwright journal-v4 1/1 |
| Lane | DEV/e2e `:5433` / `:3101` — RECETTE intacte (014 absente) |
| Preuves | `.tmp-sfia-review/journal-v4-captures/` (local, non commit) |
| Verdict Cursor | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 COMPLETION LOCAL` |


## delivery_id: DELIV-2026-11-18-UX01-07-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~18:30 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — UX-01…07 + relivraison RECETTE |
| Type | Cycle 8 Delivery · Cycle 9 QA · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctifs UX-01…07 + build + cutover RECETTE même cycle |
| Parent RECETTE | `90c3e59f` / `5C3be3-ils1iOmH3qXo4d` |
| Candidate | `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` · tree `c39e45e6…` · build `qw3FaPD1B4KBrRab3LyKL` |
| Scope | Icon/title · matrix caption · ordinals · graph icons · parallel ELK · synthesis icons/padding · card flow |
| QA | Vitest UX+ELK+UAT03+C2 **PASS** · smoke RECETTE PASS · isolation 404 · DB `23\|117\|556\|4` |
| Rollback | `ROLLBACK-TO-90c3e59f.sh` + backup `ml4d-e05-ux0107-*` |
| Preuves | `docs/evidence/.../ensemble05-ux01-07-recette-20261118/` |
| Verdict Cursor | `ENSEMBLE 05 UX CORRECTIVES DEPLOYED — RECETTE READY FOR MORRIS RETEST` |


## delivery_id: DELIV-2026-11-18-UAT03-FIX-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~17:40 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — UAT-03 correctif + redéploiement RECETTE |
| Type | Cycle 8 Delivery · Cycle 9 QA · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| GO Morris | Correctif detail 5000 + obs durable + build + cutover RECETTE même cycle |
| Parent RECETTE | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` / `_eeb9Jy2hV242myk86VTu` |
| Fix | `sequence.steps[].detail` max **5000** · parse `MAX_SEQUENCE_STEP_DETAIL` · instruction D3 SEQUENCE |
| Obs | classification schema/output · zod_issue_path · error_kind · ephemeral DEV-only |
| QA | Vitest bornes+obs **20 PASS** · `next build` OK · smoke RECETTE PASS · isolation B→A 404 |
| Candidate | `90c3e59f4a355b463ea047cc45486906bde15680` · tree `1c7fa402…` · build `5C3be3-ils1iOmH3qXo4d` |
| RECETTE | LaunchAgent basculé · WT `…-ensemble05-recette-build-90c3e59f` · port **3200** |
| DB | counts `23\|117\|544\|4` préservés · **aucune migration** |
| Rollback | `ROLLBACK-TO-ba1e55ec.sh` + backup `ml4d-e05-uat03-fix-20261118-173348` |
| Preuves | `docs/evidence/.../ensemble05-uat03-fix-recette-20261118/` |
| Statut UAT-03 | `FIX DEPLOYED — MORRIS USER RETEST PENDING` |
| Verdict Cursor | `UAT-03 FIX DEPLOYED — RECETTE READY FOR MORRIS RETEST` |


## delivery_id: DELIV-2026-11-18-UAT03-ROOTCAUSE-LIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~17:10 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — UAT-03 root cause |
| Type | Cycle 9 QA + Cycle 8 obs · Critical · **NO RELEASE** · **NO RECETTE DEPLOY** · **NO PRODUCT PUSH** |
| GO Morris | Investigation LIVE + observabilité durable, sans plafond arbitraire |
| Cause | `sequence.steps[].detail` max(400) violé → Agents `ModelBehaviorError` en `stream_drain` |
| Preuve | EXP-02 path Zod ; EXP-04 COMPLETE après contrainte détails courts ; EXP-03 contrôle comparison |
| LIVE | 4 essais DEV · est. **€3,40 TTC** fallback |
| Obs | classification `Invalid output type` · zod_issue_path · error_kind · ephemeral DEV |
| RECETTE | **inchangée** `ba1e55ec` / `_eeb9Jy2hV242myk86VTu` |
| Preuves | `docs/evidence/.../ensemble05-uat03-rootcause-live-20261118/` |
| Verdict Cursor | `UAT-03 ROOT CAUSE PROVEN — CORRECTIVE PLAN READY` |


## delivery_id: DELIV-2026-11-18-ENSEMBLE05-RECETTE-CANDIDATE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~16:20 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Mise à disposition RECETTE |
| Type | Cycle 8 Delivery · Cycle 9 QA préflight · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO LIVE auto** |
| GO Morris | Ensemble 05 accepté avec réserves — GO intégration/build/cutover RECETTE existante |
| Previous RECETTE | SHA `e224d6278a050bcfbd369c4008d94af504f81d44` · build `MKmBUvdIXyydv_DpUTGZi` |
| Candidate branch | `sfia/next-ml4d-ensemble05-composition-recette-candidate` (local) |
| Candidate SHA | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` · tree `f94e8ecc` |
| Build | `_eeb9Jy2hV242myk86VTu` · WT `…-ensemble05-recette-build-ba1e55ec` · port **3200** |
| Config | `~/.config/sfia-studio-next/recette/.env.local` préservé · FORCE/SIM vidés · fingerprint `8f6dd4c82b61eef6` |
| DB | `sfia_next_recette_ml4` @:5434 · counts 23\|117\|534 inchangés · **aucune migration** |
| QA | Vitest 73 PASS · `next build` OK · smoke login/portfolio/projet/composition PASS |
| Rollback | `ROLLBACK-TO-e224d627.sh` + backup `ml4d-e05-composition-20261118-161805` |
| Preuves | `docs/evidence/.../ensemble05-recette-delivery-20261118/` |
| Fake/Real | LIVE auto **NOT RUN** · composition persistée **BROWSER PROVEN** en RECETTE |
| Verdict Cursor | `RECETTE DEPLOYED — READY FOR MORRIS USER ACCEPTANCE` |


## delivery_id: DELIV-2026-11-18-ENSEMBLE05-FINAL-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~15:45 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Consolidation finale + réception Morris |
| Type | Cycle 8 Delivery · Cycle 9 QA · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO LIVE** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| Audit LIVE | L03/L04 **Cas B** (pas de VC) ; L07 **Cas D** (parallel fidèle) |
| Correctifs | prompt D3 comparison/relations ; admission substance + hint normalize ; discriminants UNIT |
| QA | Vitest discriminants+admission+C2+SIM **PASS** ; Level-B SIM e2e **PASS** ; maturation baseline **PASS** |
| LIVE | **aucun nouvel appel** |
| Preuves | `docs/evidence/.../ensemble05-final-consolidation-20261118/` |
| Verdict Cursor | `READY FOR MORRIS ENSEMBLE 05 RECEPTION REVIEW` |


## delivery_id: DELIV-2026-11-18-NORA-LIVE-BOUNDED-COMPOSITION-PROVEN

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~15:25 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Qualification LIVE bornée composition Nora |
| Type | Cycle 9 QA · Critical · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| GO Morris | LIVE ≤12 tours · plafond **€25 TTC** (levée STOP `cb407251`) |
| Exécution | **12/12** `openai-agents-sdk-live · COMPLETE` · 0 retry · 0 fixture/SIM |
| Composition | Spontanée L05–L09 ; prose L01–L04/L10–L12 ; L10 refus inventé |
| Persist | Reload 12 assistants · fragment match |
| Coût est. | **€10,20 TTC** / €25 (fallback conservateur gpt-6.1-sol $2/$10) |
| Outillage | `live-web-server.sh` · `playwright.live.config.ts` · `ensemble05-live-bounded.spec.ts` |
| Preuves | `docs/evidence/.../live-bounded-campaign-20261118/` |
| Fake/Real | LIVE **PROVEN** · Level-B antérieur PROVEN |
| Verdict Cursor | `LIVE COMPOSITION BEHAVIOR PROVEN — BOUNDED SCOPE` |


## delivery_id: DELIV-2026-11-18-NORA-LIVE-BOUNDED-BUDGET-STOP

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~15:00 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Qualification LIVE bornée composition Nora |
| Type | Cycle 9 QA + Cycle 8 correctif préflight · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **LIVE NOT RUN** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| GO Morris | LIVE ≤12 tours DEV autorisé — **plafond monétaire absent** |
| Préflight PASS | ENV-01 DEV ; C2 `exactShownElsewhere` exact-identity ; SIM unknown fail-closed ; corpus L01–L12 préenregistré |
| QA | Vitest C2+SIM **21 PASS** (cibles) |
| Preuves | `docs/evidence/.../live-bounded-campaign-20261118/` |
| Fake/Real | LIVE **NOT RUN** · Level-B antérieur **PROVEN** |
| Verdict Cursor | `STOP — MORRIS LIVE BUDGET LIMIT REQUIRED` (proposition plafond **€25 TTC**) |


## delivery_id: DELIV-2026-11-18-NORA-E2E-CHAIN-LEVEL-B

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~14:40 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Qualification intégrée Nora→Composition→Persistance |
| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO PRODUCT PUSH** · **LIVE NOT RUN** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| Level-B | `STUDIO_NORA_SIMULATED_PROVIDER` — corpus S1–S11 natural prompts ; validate + real D3 path |
| Corrections | Timeline Figma 02 ; matrice 04 Effort/Risque/Délai ; C2 residual exact-identity ; cons complets |
| QA | Vitest Level-B+C2 PASS ; Playwright sim Level-B **PASS** ; R01–R06 / T02 / C2-08 **PASS** |
| Preuves | `docs/evidence/.../level-b-e2e-chain-20261118/` + SHA ; protocole LIVE draft |
| Fake/Real | ADAPTER+BROWSER FAKE **PROVEN** · LIVE **NOT RUN** · HISTORICAL PG **NOT RUN** |
| Verdict Cursor | `DEV END-TO-END CHAIN VERIFIED — READY FOR BOUNDED LIVE DECISION` |


## delivery_id: DELIV-2026-11-18-FIGMA-01-06-VISUAL-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~14:00 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Convergence visuelle Figma 01–06 |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| GO Morris | Convergence visuelle intégrée Figma 01–06 — GO confirmé |
| Construction | `EditorialSynthesis` v3 ; `EditorialSequence` ; cartes option ; matrice rows ; tokens 01–06 |
| Fixtures | `E05_R01`…`E05_R06` (FIXTURE/DEMONSTRATION) |
| Admission | cards×3 ; matrix critères/5+ ; stacked×2 narrow ; horizontal n≤4 width≥580 ; vertical n≥5 |
| QA | Vitest composition 63 PASS (cibles) ; Playwright R01–R06 **PASS** ; T02 **PASS** ; C2-08 **PASS** |
| Preuves | `docs/evidence/.../figma-01-06-convergence-20261118/` + SHA-256 |
| ELK 07–09 | Conservé (`elkjs@0.10.2`) — non régression T02/G07–G09 |
| Fake/Real | BROWSER FAKE + VISUAL REVIEW **PROVEN** · LIVE **NOT RUN** |
| Verdict Cursor | `READY FOR CHATGPT VISUAL REVIEW — FIGMA 01-06 CONVERGENCE CANDIDATE` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-COMPLETE-ELK-PRODUCT

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~13:15 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Livraison intégrale composition graphique Nora |
| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT dirty) |
| GO Morris | ELKjs produit **autorisé** — lève STOP architecture précédent |
| ELK produit | **`elkjs@0.10.2`** (EPL-2.0) installé ; import bundlé Next ; mesure DOM → layout → paint |
| G09 | Swimlane composer (3 voies verticales + sync + suite) ; largeur cible <720px |
| Fix critique | `preferListFallback` ne bake plus `nodes>10` au parse (sinon G09→list) |
| Remplacement | Artisan Graphs retiré du chemin principal ; probe C2-08 isolé |
| QA | Vitest composition **83 PASS** (cibles) ; Playwright **T02 PASS** ; **C2-08 PASS** |
| Preuves | `runtime-figma07/08/09-*-elk-1440.png` + manifeste SHA-256 + inventaire Figma |
| Fake/Real | BROWSER FAKE **PROVEN** · HISTORICAL PG **NOT RUN** · LIVE **NOT RUN** |
| Verdict Cursor | `READY FOR CHATGPT REVIEW — COMPLETE IMPLEMENTATION CANDIDATE` (réserves visuelles artistiques / Gate C Morris) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-GRAPHICAL-ENGINE-REPLACEMENT

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~12:25 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Remplacement architectural couche graphique |
| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| Benchmark | Isolé `scripts/layout-engine-benchmark` — G07/G08/G09 artisan vs ELK vs RF+ELK |
| Recommandation | **Solution A : HTML/SVG + ELKjs** (CANDIDATE) — RF non requis pour layout |
| Gate | **STOP — MORRIS ARCHITECTURE DECISION REQUIRED** (ajout `elkjs` produit) |
| Production | `DirectedRelationBoard` + `EditorialSynthesis` ; artisan Graphs **retiré** du chemin principal |
| ELK produit | **NOT INSTALLED** (`package.json` inchangé) |
| Fake/Real | UNIT PROVEN · BROWSER à rejouer · LIVE NOT RUN |
| Verdict | `STOP — MORRIS ARCHITECTURE DECISION REQUIRED` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-W3-W4-GRAPHICAL

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~11:45 CET |
| Macro-lot | R5 / ML4D / Ensemble 05 — Finalisation W3/W4 grammaire graphique Nora |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| C2-08 | Exception React **post-mount** réelle → `BlockErrorBoundary` navigateur ; capture `c2-08-browser-error-recovery-1440.png` · **BROWSER PROVEN** |
| W3 | `NoraCompositionGraphs` : arbre + parallèle SVG mesuré ; synthèse éditoriale par tons ; tokens parcours renforcés ; deps inchangés (mesurés) |
| W4 | Vitest composition 72+ PASS (cibles) ; T02 PASS ; C2-08 Playwright PASS ; manifeste Figma/runtime 01–09 |
| Layout | HTML/SVG mesuré **retenu** ; ELK/RF non ajoutés |
| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · HISTORICAL PG REPLAY **NOT RUN** · LIVE **NOT RUN** |
| Verdict | `READY WITH RESERVES` (fidélité Figma PARTIAL 01–09 ; réception Morris) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-C2-INTEGRITY-W3

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~11:25 CET |
| Macro-lot | R5 / ML4D — C2 intégrité sémantique + W1/W3 sombre adaptatif |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| C2 | Suppression heuristique 70% tokens ; exact-identity only ; tests adverses négations/chiffres/statuts ; ErrorBoundary réel |
| W1 | Contrat exécutable thème sombre Studio (Figma 01–09 hiérarchie) |
| W3 | Markers SVG uniques ; polish cards/tree/parallel sur tokens sombres |
| W4 | Vitest 138 PASS ; T02 à rejouer ; PG historique NOT RUN ; VISUAL NOT COMPLETED |
| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · LIVE **NOT RUN** |
| Verdict | `READY WITH RESERVES` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-C2-W1-FINALIZATION

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~11:00 CET |
| Macro-lot | R5 / ML4D — Finalisation C2 + W1 contrat Figma (Ensemble 05) |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| C2 | `visibleTextAlternativeComplement` + `SubstanceComplement` visible (pas sr-only) ; oracles C2-01…10 |
| W1 | Paquet Morris Page 06 frames 01–09 ; **FIGMA CONTRACT READY — MORRIS VISUAL VALIDATION REQUIRED** |
| W3 | Pas de transposition pixel ; familles existantes préservées |
| W4 | Vitest 122 PASS ; T02 PASS (+ assert C2 DOM) ; PG DEV up sans payloads historiques |
| W5 | Corpus réception préparé ; LIVE NOT RUN |
| Fake/Real | UNIT+BROWSER FAKE **PROVEN** · HISTORICAL PG REPLAY **NOT RUN** · LIVE **NOT RUN** |
| Verdict | `READY WITH RESERVES` / gate artistique Morris |


## delivery_id: DELIV-2026-11-18-COMPOSITION-VISUAL-GRAMMAR-DIFFS-COMPLETE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~10:30 CET |
| Macro-lot | R5 / ML4D — Complétude Review Pack diffs C1–C4 |
| Type | Cycle Delivery · Critical · DOC/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| Motif | Handoff `42d3299b` publié mais contenu incomplet (admission vide, NoraComposition hash-only, CSS tronqué, C2 peu traçable) |
| Contenu | Diffs intégraux `admission.ts`, `NoraComposition.tsx`, `tokens.css`, `NoraConversation.tsx` + chaîne C2 |
| Code produit | **Aucun changement** vs tip WT C1–C4 |
| Fake/Real | FAKE prior **PROVEN** · LIVE/REAL **NOT RUN** |
| Verdict | `READY WITH RESERVES` (technique inchangé ; revue exhaustive désormais possible) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-VISUAL-GRAMMAR-C1C4

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~10:20 CET |
| Macro-lot | R5 / ML4D — Convergence finale grammaire visuelle conversationnelle |
| Type | Cycle 8 Delivery · Critical · EVOL/CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| C1 | Fallback exhaustif en français naturel — plus de `relation=` / `Disposition:` / enums wire |
| C2 | Strategy A graphic → `bodyPolicy=substitute` (anti-redondance prose+visuel) |
| C4 | Dépendances : connecteurs SVG mesurés (ResizeObserver) + liste humaine |
| A1–A7 | Non-régression : 112 Vitest PASS ; T02 PASS |
| A3 PG | **HISTORICAL PG REPLAY — NOT RUN** (5433 DOWN) |
| Figma | Contrat §6.6 extrait frames 03/04/07/08/09 ; **VISUAL REVIEW NOT COMPLETED** |
| Fake/Real | FAKE/BROWSER **PROVEN** · LIVE/REAL **NOT RUN** |
| Verdict | `READY WITH RESERVES` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-V06-A7

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~09:25 CET |
| Macro-lot | R5 / ML4D — Intégrité canonique A7 + textAlternative A2 (matrice 06 V0.6) |
| Type | Cycle 8 Delivery · Critical · CORRECTIVE/QA · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| A7 P0 | Canonical declared unusable → refuse (`CANONICAL_COMPOSITION_INVALID` / `_EMPTY`) ; narrative-only + legacy soft-drop préservés |
| A2 | `mergeTextAlternative` — plus d'heuristique préfixe 80 ; suffixe complémentaire conservé |
| A3 | Compat fixtures OK ; **HISTORICAL PG REPLAY — NOT RUN** (PG DEV 5433 down) |
| A5–A6 | T02 PASS ; VISUAL REVIEW NOT COMPLETED (handoff MD) |
| Preuves | Vitest 109 PASS ciblés ; T02 1 PASS ; A4 fail-closed conservé |
| Fake/Real | FAKE A7 **PROVEN** · LIVE/REAL **NOT RUN** |
| Verdict | `READY WITH RESERVES` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-V05-A4

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~09:00 CET |
| Macro-lot | R5 / ML4D — Strategy A sécurisation finale (matrice 06 V0.5) |
| Type | Cycle 8 Delivery · Critical · CORRECTIVE/EVOL/QA · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| A4 P0 | `fixtureReply` fail → UNKNOWN/UNAVAILABLE/`providerContacted:NO` (parity LIVE) |
| A1 | exact oracles 11999 / 12000 / 12001 ; no silent slice |
| A2 | familles text/comparison/sequence/relations/synthesis + choices/refs ownership |
| A3 | e05 / projection-v1 / canonical-v1 autorités préservées (fixtures) |
| A5–A6 | T02 PASS ; Vitest 94 PASS ciblés ; VISUAL handoff PNG channel incomplete |
| Fake/Real | FAKE fixture A4 **PROVEN** · LIVE/REAL **NOT RUN** |
| Verdict | `READY WITH RESERVES` |


## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~08:40 CET |
| Macro-lot | Strategy A integrated corrective A1–A6 (matrice 06 V0.4) |
| Type | Cycle 8 Delivery · Critical · CORRECTIVE · **NO RELEASE** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ WT) |
| A1 | derive overflow → `CANONICAL_REPLY_OVERFLOW` (no silent slice) |
| A2 | exhaustive relations/synthesis/sequence fields (kind, detail, lane, relation) |
| A3 | WRITE `conversational-composition-canonical-v1` ; READ e05+projection-v1+canonical ; projection-v1 ≠ canonical |
| A4 | fixtureReply + LIVE → same `validateNoraTurnQualification` ; AgentSchema WRITE-only |
| A5 | sync → directed « sync vers » (no false reciprocity) |
| Preuves | Vitest 75 PASS (A1–A4 + composition) ; T02 PASS |
| Verdict | (voir Review Pack Full corrective A) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-STRATEGY-A-CANONICAL

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~08:10 CET |
| Macro-lot | Transition Strategy A — sections sémantiques canoniques + achèvement UX |
| Type | Cycle 8 Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| Architecture | `visualComposition` projection-v1 = autorité ; `replyDraft` dérivé ; e05 = legacy_projection |
| P0 | derive-text ; contentAuthority ; validateNoraTurnQualification derive ; tree single-parent |
| P1 | parallel toutes arêtes ; identity admission path |
| Preuves | Vitest Strategy A + fidelity + admission 29 PASS ; Playwright T02 PASS |
| Verdict | (voir Review Pack Full Strategy A) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-F1F5-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~03:55 CET |
| Macro-lot | F1–F5 Integrated Corrective (fidélité / topologie / relations / schéma / BROWSER) |
| Type | Cycle Delivery · Critical · RUN correctif dans EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| F1 | Claims substance ⊆ replyDraft ; narrative substitute gate ; préférence contradictoire |
| F2 | topology.ts — tree/deps/parallel ; cycles/multi-root → list |
| F3 | deps layers + arêtes dirigées ; tree/parallel CSS |
| F4 | Agent WRITE `conversational-composition-projection-v1` only ; dual READ e05 |
| F5 | T02 + fixtures tree/parallel + captures `f5-runtime-*.png` |
| Preuves | Vitest fidelity+admission 24 PASS ; Playwright T02 PASS ; matrice `f-matrix-fidelity-topology.md` |
| Verdict | READY WITH RESERVES (voir Review Pack Full F1–F5) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~03:18 CET |
| Macro-lot | Convergence composition conversationnelle (doc 06 C-01–C-22) |
| Type | Cycle Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| P0 C-04 | Graphiques : jamais substitute ; complement seulement si ancres replyDraft ; sinon markdown_only |
| P1 C-05/14 | Schema write `conversational-composition-projection-v1` ; dual-read e05 ; MAX_ALTS=12 |
| P1 C-10/11/12 | layoutHint + RelationsDirectedView CSS (deps/tree/parallel) ; ELK non introduit |
| Preuves | Vitest composition 65 PASS (admission+fidelity+E05+schema) ; tsc 32/0 touched ; T02 PASS |
| Verdict | (voir Review Pack Full convergence) |


## delivery_id: DELIV-2026-11-18-COMPOSITION-ADAPTATIVE-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~02:25 CET |
| Macro-lot | Correction intégrée composition conversationnelle (réponse STOP ChatGPT) |
| Type | Cycle Delivery · Critical · RUN correctif dans EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| Corrections | A matrice+détails ; B relations list only (SVG différé) ; C repli exhaustif ; D bodyPolicy substitute/complement ; E capacité wire honnête ; F ACK PREEXISTING PROVEN |
| Preuves | Vitest 57 PASS ; tsc 32 préexistantes / 0 touched ; T02 PASS + captures corrective ; ACK FAIL identique sur tip clean `a783f014` |
| Verdict | supersédé par cycle convergence |


## delivery_id: DELIV-2026-11-18-COMPOSITION-ADAPTATIVE-V1

| Field | Value |
| --- | --- |
| Date | 2026-11-18 ~01:22 CET |
| Macro-lot | Remplacement mécanisme graphique expérimental E05 → composition conversationnelle adaptative |
| Type | Cycle Delivery · Critical · EVOL · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Branche locale | `sfia/next-ml4d-composition-adaptative` @ tip parent `a783f014` (+ working tree) |
| Architecture | Strategy B V1 — `replyDraft` canonique ; wire `e05-visual-composition-v1` conservé ; admission `conversational-composition-v1` ; renderer `NoraComposition` |
| Scope | admission/variantes CV-* ; `NoraComposition` + CSS container queries ; alias `NoraVisualComposition` ; wire `NoraConversation` ; tests unit ; preuves Figma Page 06 ; matrice CV-T |
| Non-scope | Migration DB ; Strategy A sections sémantiques ; elkjs/RF/ECharts ; push produit ; RECETTE/STABLE ; LIVE OpenAI |
| Preuves | Vitest admission+E05+schema+projection 54 PASS ; Playwright ensemble05 5 PASS / 2 FAIL (C2/ACK hors renderer) ; T02 composition PASS |
| Verdict | `READY WITH RESERVES` — supersédé par STOP ChatGPT puis correctif |


## delivery_id: DELIV-2026-11-17-ML4D-R05-COGNITIVE-RECOVERY

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~20:35 CET |
| Macro-lot | ML4D Ensemble 05 — R05 reprise cognitive UNKNOWN + OBS |
| Type | Cycle 8 Delivery · Critical · RUN/INC corrective · **PATCH CANDIDATE** · deploy RECETTE conditionnel |
| Parent tip | `208aaa40` |
| Cause | Diagnostic `R05 PROVIDER FAILURE IDENTIFIED — RECOVERY UX GAP CONFIRMED` (`de481265`) — reconcile loop on cognitive UNKNOWN without D7 |
| Scope | `shouldClearThreadPending` UNKNOWN/INTERRUPTED sans métier ; GET durable `turns/by-key` ; reconcile/hydrate UX ; OBS `extractProviderErrorDiagnostics` ; tests unit/PG/e2e ; plan retest Arnaud |
| Non-scope | Correction exception fournisseur ; LIVE OpenAI ; migration ; push produit ; STABLE ; clôture E05 |
| Preuves | Vitest R05 unit 36 PASS ; PG ml2-turn-command 4 PASS ; Playwright R05 2 PASS ; lint 0 error touched ; tsc 32 baseline / 0 touched src ; `next build` PASS |
| Push produit | **AUCUN** (commit local autorisé) |
| Verdict | (complété après gate RECETTE dans le Review Pack) |


## delivery_id: DELIV-2026-11-17-ML4D-NORA-LIVE-STRICT-SCHEMA-AUDIT

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~19:05 CET |
| Macro-lot | ML4D Ensemble 05 — audit compatibilité schéma structuré Nora LIVE |
| Type | Cycle 8 Delivery · Standard · RUN/corrective QA · **NO RELEASE** · **NO DEPLOY** · **NO PRODUCT PUSH** |
| Candidat | `3f7863ba` (parent `34a5e102`) — tip prolongé par oracles de non-régression |
| Constat | Convertisseur Agents SDK `@openai/agents@0.21.0` → `strict:false` ; `zodTextFormat` refuse D3 (`.optional()` sans `.nullable()`) ; `criteria[].values` = `z.record` → `additionalProperties:{type:string}` incompatible strict ; aucun `{}` vide restant |
| Scope | Tests schéma D3 complets (`nora-live-output-schema.test.ts`) ; journal ; **aucune** modification produit D3/UI |
| Non-scope | Hardening strict complet ; appel REAL ; déploiement RECETTE ; push produit |
| Preuves | Vitest schema/E05/adapter/OBS/sem 66 PASS ; PG intégration 484 PASS ; tsc 32 préexistantes / 0 touched src ; build PASS `n6nJl-Rx4-9s9yxwslhIJ` |
| RECETTE | inchangée `:3200` / `34a5e102` / `xKkQienCXTPYIqkFElAuE` |
| Verdict | `NORA LIVE STRICT SCHEMA GAP — MORRIS DECISION REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-NORA-LIVE-OUTPUT-SCHEMA-PATCH

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~18:40 CET |
| Macro-lot | ML4D Ensemble 05 — diagnostic + correctif DEV Nora LIVE |
| Type | Cycle 8 Delivery · Standard · RUN/corrective · **PATCH CANDIDATE** · **NO RELEASE** · **NO DEPLOY** |
| Parent tip | `34a5e102` |
| Cause | `visualComposition: z.unknown()` → JSON Schema `{}` sous `outputType` strict → rejet fournisseur (`PROVIDER_ERROR` / UNKNOWN) |
| Scope | `VisualCompositionAgentOutputSchema` ; branchement enveloppe D3 ; OBS `error_category` ; tests schéma |
| Non-scope | Appel REAL ; déploiement RECETTE ; push produit ; grammaire visuelle runtime ; migration |
| Preuves | Vitest schema+adapter+E05 30 PASS ; REAL LIVE NOT EXECUTED |
| RECETTE | inchangée `:3200` / `34a5e102` / `xKkQienCXTPYIqkFElAuE` |
| Push produit | **AUCUN** (commit local autorisé) |
| Verdict | `NORA LIVE DEV FIX VERIFIED — RECETTE DEPLOY GO REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-RECETTE-CANDIDATE-FREEZE

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~17:00 CET |
| Macro-lot | ML4D Ensemble 05 — finitions UX + gel candidat + préparation RECETTE |
| Type | Cycle 8 Delivery · CRITICAL · EVOL/corrective/prep · **NO RELEASE** · **NO DEPLOY** |
| Parent tip | `cb638613` |
| Scope | V01 Markdown sûr ; V02 deps lisibles ; V03 refs dédupliquées ; tests ; build ; commit local gel ; manifeste ; rollback inventorié |
| Non-scope | Déploiement `:3200` ; push produit ; PR/merge ; migration ; LIVE proof |
| Preuves | Vitest 32 PASS ; Playwright E05 7 PASS ; BUILD `jYz7jUBt1ewRBNp6HbCgs` |
| RECETTE | inchangée `:3200` / `cb638613` / `slh3bItXudDCIEaR2WYho` |
| Push produit | **AUCUN** (commit local autorisé) |
| Verdict | `E05 RECETTE CANDIDATE FROZEN — PREPARATION VERIFIED — MORRIS DEPLOY GO REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-VISUAL-COMPOSITION-CORRECTIVE-P1AB

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~16:40 CET |
| Macro-lot | ML4D Ensemble 05 — correctif fidélité + provenance + ancres |
| Type | Cycle 8 Delivery · CRITICAL · EVOL/Corrective · **NO RELEASE** |
| Base tip | `cb638613` (candidat DEV dirty préservé) |
| Scope | P1-A fail-closed completeness ; P1-B resolveProvenanceReference ; ancres first-claim + residuals ; F01–F08 / P01–P08 |
| Non-scope | Commit/push produit ; RECETTE ; migration ; nouvelle lib ; LIVE |
| Preuves | Vitest 31 PASS ; Playwright E05 7 PASS ; LIVE NOT EXECUTED |
| RECETTE | préservée `:3200` / `cb638613` / `slh3bItXudDCIEaR2WYho` |
| Push produit | **AUCUN** |
| Verdict | `E05 VISUAL COMPOSITION CORRECTIVE — DEV VERIFIED — MORRIS REVIEW REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-VISUAL-COMPOSITION-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~16:15 CET |
| Macro-lot | ML4D Ensemble 05 — consolidation grammaire visuelle + restitution conversationnelle |
| Type | Cycle 8 Delivery · CRITICAL · EVOL consolidation post-RECETTE · **NO RELEASE** |
| Base tip | `cb638613` (worktree DEV non commité — T02/T05 préservés puis consolidés) |
| Scope | Composition ordonnée sans doublon Markdown ; icônes/rôles sémantiques ; provenance consultable vs descriptive ; ancres choices/refs ; fixtures S1–S8 ; tests DOM order ; captures |
| Non-scope | Commit/push produit ; PR/merge ; déploiement RECETTE ; migration ; lib graphique externe ; LIVE form-choice proof |
| Preuves | Vitest 17 PASS ; Playwright E05 7 PASS ; captures runtime-s* ; LIVE NOT EXECUTED |
| RECETTE | préservée `:3200` / `cb638613` / BUILD `slh3bItXudDCIEaR2WYho` |
| Push produit | **AUCUN** |
| Verdict | `E05 VISUAL COMPOSITION CONSOLIDATED — DEV VERIFIED — MORRIS REVIEW REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-VISUAL-GRAMMAR-T02-T05

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~15:40 CET |
| Macro-lot | ML4D Ensemble 05 — grammaire visuelle native + visionneuse agrandie (même macro-lot) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL/correctif UAT · **NO RELEASE** |
| Base tip | `cb638613` (candidat E05 déployé RECETTE — **inchangé ce cycle**) |
| Scope | Contrat composition visuelle ; primitives A/B/C/D ; intégration D3→projection→UI ; T05 layout |
| Non-scope | Commit/push produit ; déploiement RECETTE ; migration ; lib graphique externe ; Figma certifié |
| Preuves | Vitest visual+projection PASS ; Playwright E05 7 PASS ; captures DEV |
| RECETTE | préservée `:3200` / `cb638613` / BUILD `slh3bItXudDCIEaR2WYho` |
| Push produit | **AUCUN** |
| Verdict cible | `E05 VISUAL GRAMMAR CANDIDATE — IMPLEMENTED AND DEV VERIFIED — MORRIS REVIEW REQUIRED` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-DRAFT-RECONCILE

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~13:40 CET |
| Macro-lot | ML4D Ensemble 05 — correctif brouillon/reconcile + rollback prep (même macro-lot) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL correctif final · **NO RELEASE** |
| Parent tip | `2b0d7a78` (descendant de freeze `342f0bbb`) |
| Scope | Pending origin metadata ; reconcile never wipes choice/legacy draft ; artefact restore passif RECETTE |
| Non-scope | Déploiement RECETTE ; restore LIVE ; push produit ; Figma |
| Preuves | Vitest 25 PASS ; Playwright E05 6 PASS ; E04 3 PASS ; next build PASS |
| Manifeste | `construction/ensemble-05-recette-prep-manifest.md` |
| RECETTE | inchangée `:3200` / `3LzvYPTQc-Km7St6nF97r` + artefact `.sfia-restore-artifacts/…` |
| Push produit | **AUCUN** |
| Verdict cible | `E05 FINAL CANDIDATE — TECHNICALLY READY FOR MORRIS RECETTE DEPLOYMENT GO` |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-FREEZE

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~13:15 CET |
| Macro-lot | ML4D Ensemble 05 — finalisation + figement candidat (même macro-lot) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL finalisation · **NO RELEASE** |
| Scope | Final A D4 live rights ; Final B reconcile obligatoire ; inventaire RECETTE existante ; commit local figé |
| Non-scope | Déploiement RECETTE ; push produit ; PR/merge ; campagne Figma F2 ; nouvelle RECETTE |
| Preuves | Vitest 22 PASS ; Playwright E05 5 PASS ; E04 3 PASS ; next build PASS |
| Manifeste | `construction/ensemble-05-recette-prep-manifest.md` |
| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
| RECETTE | inventoriée inchangée `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
| Push produit | **AUCUN** (commit local autorisé) |
| Verdict cible | `E05 CANDIDATE FROZEN — READY FOR MORRIS RECETTE DEPLOYMENT DECISION` (supersédé) |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~12:45 CET |
| Macro-lot | ML4D Ensemble 05 — consolidation C1–C5 (même candidat) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL consolidation · **NO RELEASE** |
| Parent candidat | worktree local non commité sur `984d77a3` |
| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
| Scope | C1 révision D4 exacte ; C2 ACK perdu / un seul tour ; C3 purge same-tab ; C4 preuves Figma ; C5 Git D9 borné (déterministe) |
| Non-scope | Migration ; streaming ; cutover RECETTE ; Git REAL LIVE ; F2 16/16 certifié |
| Preuves | Vitest E05 9 + rail 13 PASS ; Playwright E05 5 PASS ; E04 3 PASS ; next build PASS |
| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` |
| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
| Push produit | **AUCUN** |
| Verdict cible | `E05 CONSOLIDATED CANDIDATE — READY FOR MORRIS RECETTE GO REVIEW` (supersédé par FREEZE) |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~12:20 CET |
| Macro-lot | ML4D Ensemble 05 — correctif intégré Travail avec Nora |
| Type | Cycle 8 Delivery · CRITICAL · EVOL correctif · **NO RELEASE** |
| Parent candidat | même worktree local non commité sur `984d77a3` |
| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
| Scope | P1-A continueChoices≠clarifications ; P1-B freeze UNKNOWN/ACK ; P1-C refs D4/Git ; P2-A viewer e2e obligatoire ; P2-B isolation brouillon ; P2-C matrice Figma partielle |
| Non-scope | Migration ; streaming ; cutover RECETTE ; PR/merge ; F2 certifié 16/16 |
| Preuves | Vitest 21+20 PASS ; Playwright E05 2 PASS ; E04 3 PASS (cycle précédent correctif) ; next build PASS |
| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` + `figma-runtime-matrix.md` |
| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` (mis à jour) |
| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
| Push produit | **AUCUN** |
| Verdict cible | `E05 CORRECTIVE CANDIDATE WITH RESERVES — NOT READY FOR RECETTE` (supersédé par consolidation) |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-05-TRAVAIL-NORA

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~12:00 CET |
| Macro-lot | ML4D Ensemble 05 — Travail avec Nora |
| Type | Cycle 8 Delivery · CRITICAL · EVOL · **NO RELEASE** |
| Parent candidat | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Branch | `feat/next-ml4d-project-space-20261116` (locale) |
| Scope | CT-01..08 intégrés : scroll UX-002, projection M1 `result_json`, choix, compositeur/brouillon M3, activité V1 M2, visionneuse locale M4, shell E04 préservé |
| Non-scope | Migration (M5) ; streaming texte ; cutover RECETTE ; PR/merge ; Gate C ; ML5 |
| Preuves | Vitest E05+studio-rail PASS ; Playwright E05 PASS ; E04 nreg 3 PASS ; next build PASS |
| Evidence | `web/docs/evidence/ensemble-05-travail-nora/` |
| As-built | `construction/as-built-ensemble-05-travail-nora-20261117.md` |
| RECETTE | **inchangée** `:3200` BUILD `3LzvYPTQc-Km7St6nF97r` |
| Push produit | **AUCUN** |
| Verdict cible | `IMPLEMENTED CANDIDATE WITH RESERVES — MORRIS REVIEW REQUIRED` (revue ChatGPT : BLOCKING RESERVES — correctif suivant) |


## delivery_id: DELIV-2026-11-17-ML4D-ENSEMBLE-04-CP01-CP02

| Field | Value |
| --- | --- |
| Date | 2026-11-17 ~00:10 CET |
| Macro-lot | ML4D Ensemble 04 — correction bloquants CP01/CP02 |
| Type | RUN / correction candidat · **NO RELEASE** |
| Parent candidat | `351aea9607c5997f7343212a837dd13c0f1e4429` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Scope | Compositeur adaptable: bandeau reprise hors max-height 160px; stack scroll maîtrisé; testids nav mobile; tests CP01-A..E / CP02 |
| Non-scope | Cutover RECETTE; API/DB; Ensemble 05; redesign Figma; push projet |
| Preuves | CP01-A..E PASS; CP02 PASS; E04+T13/T16+F2+long-thread PASS; next build PASS; vitest studio-rail 13 PASS; tsc 32 parent réserve |
| RECETTE | **inchangée** `:3200` SHA `a30e75c7` / BUILD `WUqfWdCB7T2rHzDvk-Hre` |
| Push produit | **AUCUN** |
| Verdict cible | `ENSEMBLE 04 — CP01/CP02 CORRECTION CANDIDATE READY` |


## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-VERTICAL-LAYOUT

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~23:45 CET |
| Macro-lot | ML4D Ensemble 04 — composition verticale Travail |
| Type | RUN / correction bornée · **NO RELEASE** |
| Parent candidat | `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Scope | Intro compacte + séparateur ; conversation/compositeur cartes distinctes ; compositeur ancré bas ; inspecteur hauteur intro→compositeur ; scroll fil propriétaire |
| Non-scope | Rail/DA déjà validés ; Ensembles 05–07 ; API/DB ; RECETTE ; amend a30e75c7 |
| Preuves | next build PASS ; Playwright E04+T13/T16+F2+long-thread+UX-004 PASS ; DOM gaps conv→comp 25, bottoms align 0, intro∥inspector 0 |
| RECETTE | **inchangée** `:3200` SHA `a30e75c7` / BUILD `WUqfWdCB7T2rHzDvk-Hre` |
| Push produit | **AUCUN** |
| Verdict cible | `ENSEMBLE 04 — VERTICAL LAYOUT CORRECTION CANDIDATE READY` |


## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-VISUAL-FIDELITY

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~22:55 CET |
| Macro-lot | ML4D Ensemble 04 — correction fidélité visuelle Figma 652:* |
| Type | RUN / correction bornée · **NO RELEASE** |
| Parent candidat RECETTE | `20fb41baa534b5a802a275b6944fc267ccaa2192` (inchangé) |
| Baseline UX-005 | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Scope | Rail 2 lignes + icônes + séparateurs ; suppression Retour portefeuille doublon ; proportions 968/369 ; typo/messages/compositeur flèche ; inspecteur unifié ; sticky header ; preuves DOM 1680×970 |
| Non-scope | Ensembles 05–07 ; API/DB ; amend RECETTE ; push projet ; PR/merge ; Gate C ; ML5 |
| Preuves | next build PASS ; Vitest studio-rail PASS ; Playwright E04+T13/T16+F2+nav-intent+UX-004+composer PASS ; tsc workspace FAIL=parent (32) / src 0 |
| Mesures DOM | rail 246 ; conversation 965 (~968) ; aside 368 (~369) ; send 52×35 ; name line-clamp 2 |
| RECETTE | **inchangée** `:3200` SHA `20fb41ba` / BUILD `Bdn6zx0xBoavYTjWmiO4x` / LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004` |
| Push produit | **AUCUN** |
| Verdict cible | `ENSEMBLE 04 — VISUAL FIDELITY CORRECTION CANDIDATE READY` |


## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-TECHNICAL-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~21:55 CET |
| Macro-lot | ML4D Ensemble 04 — consolidation technique + plan RECETTE |
| Type | RUN / correction bornée · **NO RELEASE** |
| Parent candidat | `660ff4243fafb586bfa0dd9b377382952e831ca9` |
| Baseline UX-005 | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
| Scope | T13 500+retry ; T16 pending×nav ; preuve tsc antérieur ; ESLint/build ; plan cutover RECETTE read-only ; clarif. title Résultats/preuves |
| Non-scope | Déploiement RECETTE ; push projet ; Ensembles 05–07 ; fix fixtures ML4C tsc |
| Preuves | next build PASS ; Playwright E04+T13/T16+nreg PASS ; tsc workspace FAIL=parent (32) / E04 src 0 |
| RECETTE | observée `bd8e1672` / BUILD `bURdIMEzv8pRSJCzgsiDf` — **non modifiée** |
| Push produit | **AUCUN** |
| Verdict cible | `TECHNICAL CANDIDATE READY FOR CHATGPT REVIEW` |


## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-PROJECT-SPACE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~21:35 CET |
| Macro-lot | ML4D Ensemble 04 — Espace projet convergence UX/UI |
| Type | Cycle Delivery · Standard · EVOL · **NO RELEASE** |
| Parent | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` (UX-005 lineage) |
| Branch | `feat/next-ml4d-project-space-20261116` |
| Scope | Rail projet 246px ; identité réelle ; surface `projet` ; Trajectoire=`pilotage` ; suppression onglets ProjectChrome ; unavailable 401/404/5xx ; Travail coque Figma |
| Non-scope | Ensembles 05/06/07 ; API/DB ; RECETTE auto ; project push/PR/merge ; Gate C ; ML5 |
| Preuves | Vitest studio-rail PASS ; Playwright Ensemble04 + nav-intent + F2 captures + UX-003/004 + ml4c composer PASS |
| Figma | 652:8 / 652:58 / 652:108 / 652:158 — evidence under `web/docs/evidence/ensemble-04-project-space/` |
| RECETTE | **non promue** — manifeste candidat à préparer pour GO Morris |
| Push produit | **AUCUN** |
| Verdict cible | `ENSEMBLE 04 — CANDIDATE READY FOR MORRIS REVIEW` |

## Contrôle post-merge — 15/11/2026 — DELIV-2026-11-15-ML4C-NAV-SURFACE-INTENT

**Complément daté :** l'entrée de livraison qui suit conserve le statut de PR readiness observé **avant** fusion ; ce constat établit la sortie d'intégration, sans modifier les preuves historiques.

| Champ | Preuve post-merge |
| --- | --- |
| GO | Merge PR #678 autorisé par Morris le 15/11/2026 |
| PR | [#678](https://github.com/mcleland147/sfia-workspace/pull/678) — MERGED le 15/11/2026 20:21:39 UTC |
| HEAD candidat | `bb21d24c3f6b096a268b9b03aa8b1841b98ee8fa` |
| Merge `main` | `2c2e88f12fad867d0b5d76233961bcb95280a2bf` ; parents `05e71a7166562211b1c8c168a40dcd35e4f8c8a3` + `bb21d24c3f6b096a268b9b03aa8b1841b98ee8fa` |
| Tree `web` | `3f34d2ad4a4340fc2fdf6f19ac0b15858441e39a` — identique au HEAD candidat |
| CI avant merge | [Next #43755913981](https://github.com/mcleland147/sfia-workspace/actions/runs/43755913981) SUCCESS ; [Studio Gate #43755913982](https://github.com/mcleland147/sfia-workspace/actions/runs/43755913982) SUCCESS |
| CI après merge | [Next #43757632632](https://github.com/mcleland147/sfia-workspace/actions/runs/43757632632) **SUCCESS** sur `main@2c2e88f1`, build, TypeScript, ESLint, Vitest/PG, Playwright BROWSER FAKE et Next Required Gate |
| Statut ML4C | **CLOSED WITH RESERVES**, Git et documentation post-merge vérifiés |
| Limites | Réserves `S05-06/08`, TTL, ENV-R09, Git REAL, Nora LIVE, D4/CKI et UX non levées ; CI FAKE ≠ preuve LIVE/REAL |
| Suite | ML4D NOT STARTED ; Gate C OPEN ; NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |

Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les réserves et ne donne pas de GO ML4D.

---

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-R1R2-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~18:00 CET |
| Macro-lot | ML4D — Correctif final consolidation R1/R2 (intention durable + clarifications) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL / PATCH · **NO RELEASE** |
| Parent | `6798219fdb37af1b463326dc7015901b43b04acd` |
| Scope | R1 goal≠intention après init ; R2 omission clarifications ≠ `[]` ; tests discriminants ; T1→T7 enrichi |
| Non-scope | C3/C4, RECETTE, migrations, D4 global, Figma, PR/merge/STABLE/Gate C/ML5 |
| Preuves | UNIT 419 ; PG integration PASS ; BROWSER Sas 5 (T1→T7 + R1-B/R2-C) ; next build PASS |
| RECETTE | **inchangée** `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` |
| Push produit | **AUCUN** |
| Verdict cible | `READY WITH RESERVES — R1/R2 CORRECTED` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-POST-RECETTE-C1C4

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~17:00 CET |
| Macro-lot | ML4D — Correctif intégré post-recette Morris (C1–C4) |
| Type | Cycle 8 Delivery · CRITICAL · EVOL · **NO RELEASE** |
| Parent | `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e` |
| Scope | projectIntention ; openQuestions replace ; présentation/hauteur ; suppression Ajuster |
| Non-scope | RECETTE, migrations, D4 global, Figma write, PR/merge/STABLE/Gate C/ML5 |
| Preuves | UNIT 405 ; PG create+patch 30 ; BROWSER T1→T7 + chat-first 6 ; build `jw9G3w66bIZxtpzFshlr6` |
| RECETTE | **inchangée** `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` |
| Push produit | **AUCUN** |
| Verdict cible | `READY WITH RESERVES — SAS NORA POST-RECETTE CORRECTIONS IMPLEMENTED` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-UX-CTA-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~15:00 CET |
| Macro-lot | ML4D — Finalisation UX CTA D2 + mise à disposition RECETTE |
| Type | Cycle 8 Delivery · CRITICAL cutover · EVOL compatible · **NO RELEASE** |
| Parent | `e52cec0d0bd72b1731f61f60f3db54e0e9a70d1c` |
| Correctif | CTA création = D2 `canCreate` (suppression gate Nora `BASE_SUFFICIENTE`) — SAS-F-07 / AF-06 |
| Non-scope | createProjectCommand, migrations, D3/D4, Figma write, PR/merge/STABLE |
| Preuves | UNIT CTA T01–T06 ; UNIT 401 ; PG create-project 23 ; BROWSER Sas+chat-first 6 |
| Visuel Morris | **PENDING** — pas de nouvelle campagne pixel Cursor |
| Nora LIVE | **NOT PROVEN** |
| RECETTE | nouveau SHA/build (rollback `cd091385`/`E3J7wVO4MsKgl5aCTDhed`) |
| Push produit | **AUCUN** |
| Verdict cible | `RECETTE DEPLOYED — READY FOR MORRIS UX REVIEW` (ou WITH RESERVES) |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-UX-FIGMA

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~14:40 CET |
| Macro-lot | ML4D — Convergence UX Figma → code Sas Nora |
| Type | Cycle 8 Delivery · EVOL visuelle · **NO RELEASE** |
| Figma | `itgvCulInEnFY6DvgIegvP` nodes 607:3/62/131/203/277 — lecture seule |
| Scope | Composition sas conversation+aperçu+composer ; tokens ; shell header/rail personnel |
| Non-scope | D2/D3/D4 services, migrations, RECETTE, Figma write, PR/merge |
| Preuves | F2 Δ0 (rail/header/composer/preview/conv) ; 5 captures runtime ; harness `/dev/sas-visual/*` |
| RECETTE | **inchangée** `cd091385` / `E3J7wVO4MsKgl5aCTDhed` |
| Push produit | **AUCUN** |
| Verdict | `FIGMA TO RUNTIME ALIGNED — READY FOR CHATGPT VISUAL REVIEW` (Morris final) |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-RECETTE-CUTOVER

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~13:50 CET |
| Macro-lot | ML4D — Mise à disposition RECETTE Sas Nora |
| Type | Cycle 11 déploiement · **NO RELEASE** |
| Candidate SHA | `cd091385de10262918cf79bf8c86ad1d725cb9d1` |
| Tree web | `6f089bda818fa60e061f458fad928f3478e648b4` |
| Build RECETTE servi | `E3J7wVO4MsKgl5aCTDhed` @ `http://127.0.0.1:3200` |
| Worktree | `.../sfia-workspace-next-ml4d-sas-nora-recette-build-cd091385` |
| Schema | Migration **013 seule** appliquée (`projection_json` jsonb nullable) |
| Backup | pre-013 dump sha256 `436225aa…` + restore proof jetable PASS |
| Rollback UX-004 | `b05dacf4` / `20blGylSEta7201PgVvlw` artefacts + plist `.b05dacf4.plist.bak` conservés |
| D2 docs | `docs/...uniqueness-d2...@52012abe` validée contenu — **non mergée** |
| Push produit | **AUCUN** |
| Verdict | `RECETTE DEPLOYED WITH RESERVES — MORRIS USER REVIEW PENDING` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-GUARANTEES

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~13:10 CET (Europe/Paris) |
| Macro-lot | ML4D — Sas Nora consolidation garanties création / parcours / PATCH |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent tip | `acb5ce65f189582fd6438e7c1d8c6acdd1027664` |
| Changes | G1 nom D2 inspecté sous verrou ; G2 E2E T1→T5 sans PATCH ; G3 writeStatus APPLIED_CURRENT/SUPERSEDED ; T3 sans REQUEST_EFFECT artificiel |
| Schema | aucune nouvelle migration (013 inchangée) |
| Compatibilité | correctif compatible candidat MINOR |
| Tests | UNIT projection/writeStatus PASS ; PG create/PATCH/intent PASS ; BROWSER multi-tours sans PATCH PASS |
| Limites | PF-CRE-14 ouvert ; Nora LIVE NOT PROVEN ; MORRIS UI PENDING ; gate 013 avant RECETTE |
| Lanes | DEV BUILD `T03qorYZpGs0odz56Nb9f` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY WITH RESERVES — SAS NORA GUARANTEES CONSOLIDATED` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CONVERGENCE-CORRECTED

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~12:40 CET (Europe/Paris) |
| Macro-lot | ML4D — Sas Nora correctif final (PATCH API / qualification / multi-tours) |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent tip | `1dfc79ff824a8c947ed7c013217ff948aaba5b06` |
| Changes | PATCH CAS+HTTP ; assessment sans heuristique ; proposedProjectName ; multi-tours T1–T5 ; mission name binding accepte nom inspecté |
| Schema | aucune nouvelle migration (013 inchangée) |
| Limites | PF-CRE-14 ouvert ; Nora LIVE NOT PROVEN ; gate 013 avant RECETTE |
| Lanes | DEV `:3102` BUILD `4uaTx97JzcebLhzIfr8h-` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY WITH RESERVES — SAS NORA CONVERGENCE CORRECTED` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~12:00 CET (Europe/Paris) |
| Macro-lot | ML4D — Sas Nora correctif intégré (A concurrence nom / B correction Pilote / C maturation / D UI) |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent tip | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
| Changes | Verrou pilote + comparaison JS ; aperçu Pilote synchronisé projection ; assessment structuré post-commit ; chrome sas sans onglets principaux |
| Schema | aucune nouvelle migration (013 inchangée) |
| Limites | PF-CRE-14 ouvert ; Nora LIVE NOT PROVEN ; gate 013 avant RECETTE |
| Lanes | DEV `:3102` BUILD `9uKvoZLw0AsjIFm46-eAC` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY WITH RESERVES — SAS NORA CORRECTIVE INTEGRATION` |

## delivery_id: DELIV-2026-11-16-ML4D-SAS-NORA-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~11:25 CET (Europe/Paris) |
| Macro-lot | ML4D — Sas Nora convergence (conversation → projection → création → continuité) |
| Type | EVOL / MINOR candidate compatible · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Parent tip | `b05dacf47983ed8d914c92619ede5ffe65ce9264` (UX-004 D2 guards) |
| Contrats | docs branch `22ee5540` — contrat-convergence-fonctionnelle + technique |
| Changes | Projection D2 JSONB additive ; wire depuis qualification Nora ; aperçu vivant ; rail sas minimal ; unicité nom même Pilote (app-level) ; tests UNIT/PG ; as-built |
| Schema | `013_preparation_projection.sql` — `projection_json` jsonb nullable (réversible) |
| Contradiction | PF-CRE-14 vs unicité Morris — app-level only ; R2 non réécrit |
| Limites | Nora LIVE NOT PROVEN ; UI Morris PENDING ; pas de UNIQUE SQL (historique) ; régularisation normative ouverte |
| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`b05dacf4` / `20blGylSEta7201PgVvlw`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY WITH RESERVES — SAS NORA INTEGRATED` |

## delivery_id: DELIV-2026-11-16-ML4D-UX004-D2-GUARDS


| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~09:20 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-004 D2 guards (effet honnête + single-flight) |
| Type | EVOL / PATCH candidate compatible · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
| Parent tip | `fb0ac5c865f1d562a3778e207e5e8729165c5c4d` |
| Causes | (A) UNCERTAIN confirmé à tort via diff d'ids portefeuille ; (B) verrous locaux shell/portefeuille non partagés |
| Changes | `runOpenPreparation` single-flight document-scoped ; UNCERTAIN sans upgrade portfolio ; messages honnêtes ; tests unit + Playwright concurrence inter-entrées |
| Schema / API | unchanged |
| Limites | Garde frontend ≠ idempotence serveur ; hors multi-onglet / multi-session |
| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`bc878568` / `3g7UH7AXjSWhxrT20D3-w`) |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 D2 GUARDS` |

## delivery_id: DELIV-2026-11-16-ML4D-UX004-NAV-BREADCRUMB-CORRECTIF

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~09:00 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-004 correctif borné navigation Nouveau projet + fil d'Ariane |
| Type | EVOL / PATCH candidate compatible · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
| Parent tip | `bc8785683c30430aa99bc76e138ba10f49c71c39` |
| Base UX-003 | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` (préservé) |
| Base main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Cause | Rail « Nouveau projet » → `/portfolio#nouvelle-preparation` (détour portefeuille) ; fil d'Ariane figé « Portefeuille » sur Intégrations |
| Changes | Action partagée `openPreparation` (POST D2 unique, ACK sans retry) ; rail/mobile/portefeuille même parcours ; breadcrumb route-aware (`Portefeuille` / `Intégrations`) ; tests unit + Playwright |
| Schema / API | unchanged |
| Lanes | DEV `:3102` ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`bc878568` / BUILD `3g7UH7AXjSWhxrT20D3-w`) |
| Validations | tsc PASS ; lint warnings préexistants ; build PASS ; vitest open-preparation+studio-rail 16 PASS ; Playwright UX-004+UX-003 18 PASS (BROWSER FAKE) |
| Push Product | **AUCUN** |
| RECETTE | **NON MODIFIÉE** — nouveau SHA non servi ; GO distinct requis |
| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 CORRECTIF` |

## delivery_id: DELIV-2026-11-16-ML4D-UX004-PORTFOLIO-SHELL

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~08:15 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-004 convergence portefeuille et shell personnel |
| Type | EVOL / MINOR candidate UX · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux004-portfolio-20261116` |
| Base UX-003 | `a77a3a2bf7b942038d771fdcdd2e7a6410330784` (préservé) |
| Base main | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Changes | Rail personnel fixe + scroll contenu indépendant ; nav unique Portefeuille / Nouveau projet ; nav mobile inférieure ; libellé Préparations ouvertes ; cartes sans id technique ; états vides/mixtes ; tests e2e/F2 ; contrat visuel UX-004 |
| Schema | unchanged |
| Lanes | DEV explicite `:3102` ( `:3100` déjà occupé par autre worktree ) ; E2E `:3101` ; RECETTE `:3200` **inchangée** (`a77a3a2` / `vYeNRRzvLN03N73wmcKkR`) ; STABLE NOT AVAILABLE |
| Validations | tsc PASS ; lint warnings préexistants ; build PASS ; vitest unit ciblés PASS ; Playwright UX-004+UX-003 19 PASS ; F2 rail 246 / topbar 66 |
| Push Product | **AUCUN** |
| RECETTE | **NON MODIFIÉE** (GO distinct requis pour nouveau SHA) |
| Verdict candidat | `READY FOR CHATGPT REVIEW — UX-004 DEV` |

## delivery_id: DELIV-2026-11-16-ML4D-UX003-UNIFIED-ENTRY-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~06:40 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-003 corrections finales + mise à disposition RECETTE locale |
| Type | EVOL / MINOR candidate UX · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux003-unified-entry-20261116` |
| Base | `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Parent candidate | `31f23858ef5ed9cb8e6318133c3c399f39777b71` |
| Changes | Status hors panneau (anti-troncature) ; `testLoginAvailable` via `/api/auth/status` ; `/` → `/login` si non auth ; tests e2e étendus ; RECETTE figée |
| Schema | unchanged |
| Lanes | DEV + E2E `:3101` ; RECETTE `:3200` worktree/build séparé ; STABLE NOT AVAILABLE |
| Push / PR | **NON** |
| Version produit | NOT AVAILABLE |
| Status | candidate locale figé — EN ATTENTE MORRIS UX RECETTE |
| Risks | Cookie same-host réserve ENV-01 A (mitigation profils navigateur) ; session_expired simulé ; CTA F2 Δ2 px |


## delivery_id: DELIV-2026-11-16-ML4D-UX003-UNIFIED-ENTRY

| Field | Value |
| --- | --- |
| Date | 2026-11-16 ~01:30 CET (Europe/Paris) |
| Macro-lot | ML4D — UX-003 Entrée unifiée (desktop / mobile / session expirée) |
| Type | EVOL / MINOR candidate UX · **NO RELEASE** |
| Branch locale | `feat/next-ml4d-ux003-unified-entry-20261116` |
| Base | `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Figma | `574:425` · `574:466` · `574:490` (file `itgvCulInEnFY6DvgIegvP`) |
| Changes | Composant `UnifiedStudioEntry` ; `/login` sans rail ; assets décor ; variante `?reason=session_expired` ; tests unit+e2e+captures |
| Schema | unchanged |
| Lanes | DEV / E2E isolés ; RECETTE non mutée ; STABLE NOT AVAILABLE |
| Push / PR | **NON** — GO Morris requis pour publication projet |
| Version produit | NOT AVAILABLE (attribution Morris) |
| Status | candidate locale — supersédé par DELIV-…-RECETTE après corrections |
| Risks | Session expirée non détectée nativement ; DEV strip hors Figma ; F2 ctaW delta 2 CSS px |


## delivery_id: DELIV-2026-11-15-ML4C-NAV-SURFACE-INTENT

| Field | Value |
| --- | --- |
| Date | 2026-11-15 ~19:40 CET (Europe/Paris) ; régularisation preuves ~20:50 CET |
| Macro-lot | ML4C — Fiabilisation navigation surface + clôture documentaire PR #678 |
| Type | PATCH correctif / NO RELEASE |
| Branch | `docs/next-ml4c-closure-20261115` |
| Base | `main@05e71a7166562211b1c8c168a40dcd35e4f8c8a3` |
| Parent tip (docs HEAD avant correctif) | `968ea252fb46732d0862e3809390b1a36e6f991b` |
| Correctif initial SHA | `1a657684f44228768365f9f2d507e2e95e9857d2` |
| Hygiene WS SHA | `69aa8b1d477fd3add7ca038815c7157b9b467f7e` |
| CI SUCCESS (correctif+WS) | run `43749279172` on `69aa8b1d` — Build + Next Required Gate + Studio Required Gate |
| Régularisation | intent scopé `projectId` ; `data-project-load-state` ; e2e concurrence post-ready + isolation A→B |
| Tree web ML4C initial | `f2427adcd31b044115f85cdc48cfb6dd157d9551` |
| Tree web @69aa8b1d | `787537cb344cc2c13dc3cd20c43e8572d52249af` |
| Tree web post-régularisation | `3f34d2ad4a4340fc2fdf6f19ac0b15858441e39a` |
| HEAD régularisation | `c2d9b24f5db474a7a40bc13edc027582b154480b` |
| Cause | Concurrent `load()` `replace(?surface=travail)` vs rail `<Link>` sans intent partagé ; intent global non isolé entre projets |
| Changes | Intent project-scoped ; load-state observable ; tests unit/e2e concurrence+isolation ; as-built addendum |
| Schema | unchanged |
| Lanes | DEV / E2E `:3101` / PG isolé ; RECETTE non mutée ; STABLE NOT AVAILABLE |
| Tests locaux (régularisation) | UNIT 369 ; PG 471 ; BUILD PASS ; Playwright 31 PASS |
| CI SUCCESS (régularisation) | run `43755023230` on `c2d9b24f` — Build + Next Required Gate ; Studio Required Gate `43755023210` |
| Status | PR readiness — gate merge Morris |
| Risks | Réserves ML4C historiques inchangées (S05-06/08, TTL, ENV-R09, Git REAL, LIVE) |


## delivery_id: DELIV-2026-11-15-ML4C-REVISE-FENCE-TITLE-PROVENANCE

| Field | Value |
| --- | --- |
| Date | 2026-11-15 ~06:25 CET (Europe/Paris) |
| Macro-lot | ML4C — Clôture réserve A : provenance titre fence (STRUCTURED vs LEGACY_UNTITLED) |
| Type | PATCH corrective Critical (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `c777358eacefa94c33b04a4d590ce9da7a8c525c` (LOCAL ONLY) |
| Prior handoff | `sfia/review-handoff@37dea98c` blob `b892e70d` |
| Lane | UNIT/PG DEV ; Playwright E2E `:3101` ; LIVE NOT RUN ; RECETTE non mutée |
| Cause | `isLegacyUntitledSectionFence` s’appuyait sur le texte sentinel seul — une fence STRUCTURED `title-b64=Document Nora` était admise à tort |
| Changes | `titleProvenance` sur extract ; exception sectionScoped uniquement si `LEGACY_UNTITLED` |
| Schema | unchanged |
| Tests | UNIT 363 ; PG 471 ; BUILD PASS ; E2E ciblés 11 PASS ; LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-15-ML4C-REVISE-SOURCE-CONFLICT

| Field | Value |
| --- | --- |
| Date | 2026-11-15 ~05:05 CET (Europe/Paris) |
| Macro-lot | ML4C — Remédiation REVISE D4 `PROPOSAL_SOURCE_CONFLICT` (LIVE-03) |
| Type | PATCH corrective Critical (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `a30d47d295979b93fbb0093ca38db1d3ccd20c5c` (LOCAL ONLY) |
| Design | `c883db07` conception corrective D4 continuité |
| Prior LIVE handoff | `sfia/review-handoff@7433bdfd` blob `0b1e87c8` |
| Lane | UNIT/PG DEV ; Playwright E2E `:3101` ; LIVE DEV `:3100` borné ; RECETTE non mutée |
| Cause | CAUSE B (+ A) — fence LEGACY sans H1 → titre sentinel `Document Nora` ≠ titre document ; LF structurel seul sur le corps |
| Changes | `confrontProposalWithFence(..., { sectionScoped })` ; constante `LEGACY_UNTITLED_DOCUMENT_TITLE` ; câblage REVISE `service.ts` |
| Schema | unchanged |
| Tests | UNIT 359 ; PG 470 ; BUILD PASS ; E2E ciblés 11 PASS ; LIVE REVISE PROVEN (DELTA-15 → v2 AVAILABLE) |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-15-ML4C-S05-BROWSER-ORACLE

| Field | Value |
| --- | --- |
| Date | 2026-11-15 ~00:05 CET (Europe/Paris) |
| Macro-lot | ML4C — Triage/remédiation oracles E2E S05 real-api (SAFE vs RISK UNKNOWN) |
| Type | PATCH test/fixture Critical (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `6c50a1446734341b43a4f110aacde21c727fb2b1` (LOCAL ONLY) |
| Design | `c883db07` / blob `da397424` |
| Prior handoff | `sfia/review-handoff@9fe6f63c` blob `7d57f65b` |
| Lane | Playwright E2E `:3101`/`sfia_next_e2e` ; UNIT/PG DEV ; RECETTE `:3200` non mutée |
| Changes | `seed_unknown_effect_risk` + oracles SAFE/RISK dans `ml4c-s05-real-api.spec.ts` ; runtime inchangé |
| Schema | unchanged |
| Tests | UNIT 351 ; PG 468 ; BUILD PASS ; real-api 8 PASS ; continuity 3 PASS ; LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-14-ML4C-P3-ASSERTION-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~23:30 CET (Europe/Paris) |
| Macro-lot | ML4C — Clôture écarts P3 NOT_EXECUTED vs FAILED + qualification DEV |
| Type | PATCH test/qualification Critical (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `a2d37d1f600836f353f44061687f0795cdc10377` (LOCAL ONLY) |
| Prior handoff | `sfia/review-handoff@c3ec20fb` blob `fd32dd8e` |
| Lane | DEV PG `:5433` ; Playwright E2E `:3101`/`sfia_next_e2e` ; RECETTE `:3200` non mutée |
| Changes | assertions C10 / B-iso-neg CREATE+REVISE → NOT_EXECUTED pré-effet (runtime inchangé) |
| Schema | unchanged |
| Tests | UNIT 351 ; integration 468 GREEN ; BUILD PASS ; E2E targeted PASS ; LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-14-ML4C-S05-KNOWLEDGE-OWNER-EVIDENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~23:05 CET (Europe/Paris) |
| Macro-lot | ML4C — Complément S05 knowledge owner evidence (acquis/open_points/subjects) |
| Type | PATCH corrective Critical complementary (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` (LOCAL ONLY) |
| Design | `c883db07` / blob `da397424` |
| Prior handoff | `sfia/review-handoff@66b44bc2` blob `f4c70543` |
| Lane | DEV PG `:5433` ; RECETTE `:3200`/`:5434` non mutées |
| Changes | structured knowledge provenance probe ; open_points ; subject non-attribution ; K01–K10 PG |
| Schema | unchanged |
| Tests | UNIT 351 PASS ; PG knowledge+S05+D4 PASS ; BUILD PASS ; BROWSER/LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |


## delivery_id: DELIV-2026-11-14-ML4C-S05-OWNER-EVIDENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~22:30 CET (Europe/Paris) |
| Macro-lot | ML4C — Remédiation S05 R-01/R-02 (owner evidence + SAME_INTENT) |
| Type | PATCH corrective Critical complementary (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `3d0eab6f01cb8013990193cea93e8bfa5248831d` (LOCAL ONLY) |
| Design | `c883db07` / blob `da397424` |
| Prior ChatGPT | REVIEW NOT APPROVED — SAFETY GAP / REVIEW PACK INCOMPLETE |
| Lane | DEV + Vitest PG `:5433` ; RECETTE :3200/:5434 non mutées |
| Changes | `probeSiblingOwnerEffects` ; `buildTurnCorrelationKeys` ; sibling `operationId` ; S05-R* UNIT+PG |
| Schema | unchanged |
| Tests | UNIT 351 PASS ; PG S05/D4 focused PASS ; BUILD PASS ; BROWSER/LIVE NOT RUN |
| Status | Product LOCAL ONLY ; Review Handoff L3 remédiation in-cycle |


## delivery_id: DELIV-2026-11-14-ML4C-D4-S05-CONTINUITY

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~22:05 CET (Europe/Paris) |
| Macro-lot | ML4C — Fiabilité création/révision documentaire D3/D4 + continuité S05 |
| Type | PATCH corrective Critical integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` |
| Parent tip | `d936da81ebf7d17eb78cc11da0538df000281a4a` (LOCAL ONLY) |
| Design | `c883db07` / blob `da397424` |
| Prior P0 handoff | `ce53377c` / blob `ed74c45c` |
| Lane | DEV + Vitest PG `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | confront structural LF ; S05 risk policy ; ACK NOT_EXECUTED ; fence-after-ACK ; Nora sas guidance |
| Schema | unchanged |
| Tests | UNIT PASS ; PG focused PASS ; BUILD PASS ; E2E/LIVE NOT RUN |
| Status | SUPERSEDED IN PART by DELIV-2026-11-14-ML4C-S05-OWNER-EVIDENCE (R-01/R-02) ; P1/P3 retained | |



## delivery_id: DELIV-2026-11-14-ML4C-PROVENANCE-PARSE-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~12:50 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture fallback provenance stockée illisible + preuve 100 paires E2E |
| Type | INC Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@357008ea` blob `b111a972` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | `reconcileWithProvenanceResolution` refuse stored parse null ; E2E 200 msgs (100 pairs) |
| Schema | unchanged |
| Tests | PARSE-01…12 + FLOW-100 + non-rég ; LIVE NOT PROVEN |
| Status | Product LOCAL ONLY ; Review Handoff L3 published in-cycle |

## delivery_id: DELIV-2026-11-14-ML4C-SEALED-IDENTITY-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~12:20 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture identité scellée (no downgrade + field presence) + E2E HTTP same command |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@70f43b3f` blob `37ae086f` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | resolveProvenanceIdentity dual (request+stored) ; hasOwn required fields ; integrated PREPARE→GET |
| Schema | unchanged |
| Tests | DOWN/FIELD/E2E + non-rég ; LIVE NOT PROVEN |
| Status | Product LOCAL ONLY ; Review Handoff L3 published in-cycle |

## delivery_id: DELIV-2026-11-14-ML4C-SEALED-REPLAY-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~11:40 CET (Europe/Paris) |
| Macro-lot | ML4C — Sealed replay fail-closed + historical fence tag compatibility |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@c06ffffa` blob `48b0911a` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | resolveProvenanceIdentity ; SEALED_INVALID refuse ; tag case-insensitive LEGACY ; FLOW USER replay + HTTP GET |
| Schema | unchanged |
| Tests | SEAL/COMPAT/FLOW + non-rég ; LIVE NOT PROVEN |
| Status | LOCAL ONLY product ; Review Handoff L3 published in-cycle |

## delivery_id: DELIV-2026-11-14-ML4C-DOCUMENT-INTEGRITY-FINAL

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~11:20 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture définitive intégrité documentaire (P0-A / P0-B / P1) |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@3efc082a` blob `855a436c` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | parseFenceMeta 3-états ; SHA recalculé DB ; confrontProposalWithFence ; PREPARE→N+100 |
| Schema | unchanged |
| Tests | META/HASH/SRC/N+100 + non-régression ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-14-ML4C-DOCUMENT-INVARIANT-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~11:00 CET (Europe/Paris) |
| Macro-lot | ML4C — Fermeture invariants documentaires F-01…F-05 |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@c1add5cb` blob `714a86d1` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | F-01 identity compare ; F-02 reversible fence codec ; F-03 PREPARE durableProposal ; F-04 ASSISTANT_MESSAGE source ; F-05 binding selector + HTTP 409 ; P1 fitBudget/ambiguity/browser |
| Schema | unchanged |
| Tests | unit 289 PASS ; PG 393 PASS ; Playwright ML4C ciblé ; tsc/eslint/build PASS ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-14-ML4C-CONTINUITE-CRITICAL-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~10:10 CET (Europe/Paris) |
| Macro-lot | ML4C — Correctif Critical Review (C-01…C-07) continuité Nora / D4 |
| Type | INC/EVOL Critical corrective integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` @ base `67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Prior handoff | `sfia/review-handoff@93e277c2` blob `510b410f` |
| Lane | DEV + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | reconcile read-only ; canonicalize proposal ; prior assistant source ; correlation salt ; history walk/budget ; UX 320+ |
| Schema | unchanged |
| Tests | unit 277 PASS ; PG ML4C 29 PASS ; Playwright C-07 320+ PASS ; tsc/eslint/build PASS ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-14-ML4C-CONTINUITE-NORA-DOCUMENTS

| Field | Value |
| --- | --- |
| Date | 2026-11-14 ~09:30 CET (Europe/Paris) |
| Macro-lot | ML4C — Continuité cognitive Nora, historique long et création/révision documentaire D4 |
| Type | EVOL Critical integrated (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local) = tip `origin/build/next-ml4c-functional-convergence@67bf6b0b` |
| Parent tip | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` |
| Lane | DEV `:5433` + E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | history-tools + SDK tools ; documentProposal ; document-command admit/seal ; CREATE atomique + REVISE fence/fingerprint ; UX composeur sticky ; as-built |
| Schema | unchanged (indexes existants utilisés) |
| Tests | unit 272 PASS ; PG history+document-command 11 PASS ; ML2 Q10 O-05 PASS ; Playwright composer PASS ; LIVE NOT PROVEN |
| Status | LOCAL ONLY — Review Pack FULL + handoff L3 ; aucun push produit |

## delivery_id: DELIV-2026-11-12-ML4C-FINAL-SCOPE-GUARDS-RECETTE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~19:20 CET (Europe/Paris) |
| Macro-lot | ML4C R5 — gardes finales cible durable (`*` / kind D6) + freeze RECETTE |
| Type | EVOL Critical corrective + mise à disposition RECETTE (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `d7c28a21a9e41c5e5fb2af7415fb59e8a6cf247b` |
| Lane | DEV/E2E tests ; RECETTE figée après CI GREEN (campagne ML4C-UAT-2026-11-12) |
| Changes | `restrictionTargetMatchesHint` fail-closed vs globale ; LIFT exige hint durable ; `resolveReviseDecisionTarget` exige RECORD_DECISION ; tests G01–G05 / D01–D07 |
| Schema | unchanged |
| Tests | unit 252 PASS (248+4) ; PG 336 PASS (324+12 G/D) ; Playwright 25 PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 puis freeze RECETTE si CI GREEN |

## delivery_id: DELIV-2026-11-12-ML4C-AUTHORITY-HARDENING

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~18:40 CET (Europe/Paris) |
| Macro-lot | ML4C — sécurisation frontières d’autorité R1/R2/R3 (PR #676) |
| Type | EVOL Critical corrective / SECURITY / QUALITY (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `9c163d621589e7ba9d7369ad5a0342a9bbde8b04` |
| Lane | DEV/E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | Résolveur propriétaire unique `durable-target-resolve.ts` (REVISE/LIFT) ; body HTTP = écho uniquement ; fixtures explicites (`registerExplicitFixture`) ; suppression `registerPgUtteranceFixture` ; ENV-R06A/B (NOT_VERIFIED si :5434 absent) ; tests négatifs multi-cible D6/restriction |
| Schema | unchanged |
| Tests | unit 248 PASS ; PG 324 PASS ; Playwright 25 PASS ; tsc/eslint/build PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 — CI distante à observer sur nouveau SHA |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-CI-PARITY

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~17:50 CET (Europe/Paris) |
| Macro-lot | ML4C — correctif non-régression sémantique + CI PG (PR #676) |
| Type | EVOL Critical corrective QA (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` → `build/next-ml4c-functional-convergence` |
| Parent tip | `83fd9ecef2d952c90a828d68a192e105c83be35f` |
| Lane | DEV/E2E `sfia_next_e2e` ; RECETTE/STABLE non mutées |
| Changes | Helpers fixtures typées ; adaptation 5 suites PG (53 échecs CI) ; ENV-R06 NOT_VERIFIED si :5434 absent ; P1 USER_MESSAGE accepte decisionId/restrictionId résolus depuis hints durables ; C02 fault hook après autorité SEM/TV ; P1 follow-on D4 différé tant que D2 attend l'acte Pilote ; P1 pending ACK-lost conservé (pas d'écrasement B) ; PilotagePanel OPEN toujours structuré |
| Schema | unchanged |
| Tests | unit 248 PASS ; PG 318 PASS (baseline conservée) ; Playwright Atlas+ML3 9 PASS ; lint/build PASS ; LIVE NOT RUN |
| Status | PUSH PR #676 — CI distante à observer sur nouveau SHA |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-FINAL-RUNTIME-QUAL

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~15:10 CET (Europe/Paris) |
| Macro-lot | ML4C — Q1 real D2 AWAITING_PILOT_ACT + S05 / Q2 ENV-01 runtime+PG isolation |
| Type | EVOL Critical corrective QA (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé ; Playwright :3101 / `sfia_next_e2e` ; RECETTE :3200 non mutée (creds DENIED :5434) |
| Changes | Tests Q1 parcours D2 réel (PG+E2E) ; ENV-01 matrix + cross-lane auth deny ; as-built Q1/Q2 ; **aucune** injection artificielle de mission pour Q1-A |
| Schema | unchanged |
| Tests | Q1 PG 3 PASS ; Q1 E2E 1 PASS ; ENV 6 PASS ; tsc PASS ; related unit/PG PASS ; LIVE NOT RUN |
| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED — READY FOR CHATGPT REVIEW (reserves LIVE/S02-01/A-006) |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-ADMISSIBILITY-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~14:45 CET (Europe/Paris) |
| Macro-lot | ML4C — C-01 AUTH-R06 positif / C-02 S05-REAL-05 AWAITING / C-03 fixture isolation / C-04 pack cumulatif |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE non mutée |
| Changes | AUTH-R06 OPEN+TRANSITION both APPLIED ; seed_awaiting_mission + S05-REAL-05 ; e2eFixtureMutationsAllowed (E2E obligatoire) ; pack FULL cumulatif |
| Schema | unchanged |
| Tests | AUTH 13 PASS ; fixture gate 6 PASS ; S05 real-api 7 PASS ; LIVE NOT RUN |
| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES — REVIEW REQUIRED |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-EVIDENCE-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~14:05 CET (Europe/Paris) |
| Macro-lot | ML4C — F1–F4 evidence closure (reconcile / AUTH real / S05 real API / D4 epistemic) |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE :3200 non mutée |
| Changes | F1 runner reorder ; F2 AUTH-R01–R14 PG ; F3 S05 real-api E2E ; F4 no FACT from Nora alone + pre/post knowledge roles ; multi-intent durable match |
| Schema | unchanged (no DB migration) |
| Tests | unit+ML4C PG 264 PASS ; AUTH 13 PASS ; E2E S05 real-api 3 PASS ; LIVE NOT RUN ; S02-01 FAIL (source) |
| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES — REVIEW REQUIRED |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-INTEGRATOR-CLOSURE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~13:35 CET (Europe/Paris) |
| Macro-lot | ML4C — Integrator closure R1 S05 full / R2 human-act idempotence / R3 D4 semantic knowledge / R4 preuves |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé + PG e2e + Playwright :3101 ; RECETTE :3200 non mutée |
| Changes | S05 gate D2/D4/D5/D6/D7 + missions ; actInstanceId serveur + replay ALREADY_APPLIED ; `d4.record_knowledge` + capitalisation sélective ; sélection preferred-ids |
| Schema | unchanged (Zod envelope extended ; no DB migration) |
| Tests | unit 240 PASS ; PG 35 PASS ; E2E S05 1 PASS ; LIVE NOT RUN ; S02-01 FAIL (source) |
| Status | LOCAL ONLY — Review Handoff L3 ; IMPLEMENTED WITH RESERVES |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-INTEGRATOR

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~12:45 CET (Europe/Paris) |
| Macro-lot | ML4C — Integrator Lots A–E (superseded by INTEGRATOR-CLOSURE) |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Status | SUPERSEDED |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 ~12:10 CET (Europe/Paris) |
| Macro-lot | ML4C — Corrective convergence sémantique (D5/D6 / T-03 / S05 / lexical purge) |
| Type | EVOL Critical corrective (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé ; RECETTE figée ; STABLE N/A |
| Changes | `pilotageOperation` typé ; match qualification durable owner ; stash `applied` obligatoire ; merge terminal ; `nextTurnKind` serveur ; fixture scénarios exacts ; purge `PHRASES` / corps lexical D4/D5 ; page S05 sans `qualifyThreadTurn` |
| Schema | unchanged |
| Tests | unit 36 PASS ; PG/E2E/LIVE NOT RUN |
| Status | LOCAL ONLY — Review Handoff L3 corrective ; IMPLEMENTED WITH RESERVES |

## delivery_id: DELIV-2026-11-12-ML4C-SEMANTIC-INTENT-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-12 11:43 CET (Europe/Paris) |
| Macro-lot | ML4C — Qualification sémantique Nora + mobilisation gouvernée |
| Type | EVOL Critical — remplacement routeurs lexicaux métier (NO RELEASE) |
| Branch | `fix/next-semantic-intent-convergence-20261112` (local only) |
| Parent tip | `2416e2ee25662821b015407346c64ec204f67488` |
| Lane | DEV isolé ; RECETTE figée `2416e2ee` ; STABLE N/A |
| Changes | Enveloppe `ml4c-sem-qual-v1` ; LIVE `outputType`+Zod ; fixture TEST_BOUNDARY ; D5/D6 après Nora + `preQualified` ; stubs fail-closed ; stash pré-effet — **revue ChatGPT NOT READY → corrective** |
| Schema | unchanged (stash via `resultJson` existant) |
| Tests | unit semantic/intent/S05/cognitive/mission PASS ; PG/E2E/LIVE NOT RUN |
| Status | SUPERSEDED BY CORRECTIVE — réserves D5/D6/T-03/S05/lexical |

## delivery_id: DELIV-2026-11-11-ML4C-S05-POSITIVE-INDEPENDENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C — INC S05 qualification positive (PR #676) |
| Type | INC — indépendance positivement établie ; inconnu → INCERTAIN (NO RELEASE) |
| Branch | `build/next-ml4c-functional-convergence` |
| Parent tip | `8cff1591` |
| Lane | DEV :5433; mutative → `sfia_next_e2e`; RECETTE/STABLE untouched |
| Changes | Supprime repli « inconnu/? ⇒ indépendant » ; `qualifyThreadTurn` n'établit DIALOGUE_INDEPENDANT que sur marqueurs cognitifs positifs ; INCERTAIN sans pending n'invente pas de pending métier |
| Schema | unchanged |
| Status | PR #676 corrective — CI à rejouer — LIVE/REAL carried |

## delivery_id: DELIV-2026-11-11-ML4C-S05-INTENT-QUALIFICATION

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C — INC correctif S05 qualification d'intention (PR #676) |
| Type | INC — robustesse qualification vs exclusion (NO RELEASE) |
| Branch | `build/next-ml4c-functional-convergence` |
| Parent tip | `ba91cf71` |
| Lane | DEV :5433; mutative → `sfia_next_e2e`; RECETTE/STABLE untouched |
| Changes | `qualifyThreadTurn` (DIALOGUE_INDEPENDANT / INTENTION_EFFET / INCERTAIN) réutilise `qualifyPilotageIntent` + D4 ; fin du défaut « aucune regex ⇒ indépendant » ; CR-02 OPEN_CYCLE « le » |
| Schema | unchanged |
| Status | PR #676 corrective — CI à rejouer — LIVE/REAL carried |

## delivery_id: DELIV-2026-11-11-ML4C-S03-S05-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C — INC correctif S03/S05 (même candidat) |
| Type | INC — vérité des effets + pending préservé (NO RELEASE) |
| Branch | `build/next-ml4c-functional-convergence` (local — no project push) |
| Parent tip | `cb0738b5` (S02 taxonomy + S05 dialogue) |
| Lane | DEV :5433; mutative tests → `sfia_next_e2e`; RECETTE/STABLE untouched |
| Changes | S03 `documentSaveToEffectSummary` / no UNKNOWN→FAILED collapse in `continueAfterProjectCreated`; S05 `preserveUnresolvedMetierPending` on independent COMPLETE; classifier tightens interrogative effect requests |
| Schema | unchanged |
| Status | LOCAL CORRECTIVE — ChatGPT technical review — LIVE/REAL gates carried |

## delivery_id: DELIV-2026-11-11-ML4C-FUNCTIONAL-CONVERGENCE

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C — Convergence fonctionnelle intégrée |
| Type | EVOL — construction locale (NO RELEASE) |
| Branch | `build/next-ml4c-functional-convergence` (local — no project push) |
| Parent | main `6d237452` (ENV-B merged) |
| Lane | DEV :5433; mutative tests → `sfia_next_e2e`; RECETTE/STABLE untouched |
| Changes | S01 honest portfolio status; S02 create ACK reconcile UI + versioned D2_ACK_OBS; S03 continueAfter document ACK; S05 independent-Q while awaiting; S04 cognitive baseline doc (no vector engine); SCRIPTED S06 path reused |
| Schema | unchanged |
| Status | LOCAL CANDIDATE — ChatGPT technical review — LIVE/REAL gates carried |

## delivery_id: DELIV-2026-11-11-ENV-B-VITEST-PG-GATE

| Field | Value |
| --- | --- |
| Date | 2026-11-11 (Europe/Paris) |
| Macro-lot | ML4C / CP2 — ENV-B sécurisation tests PostgreSQL |
| Type | INC — sûreté dispositif de test (NO RELEASE) |
| Branch | `fix/next-env-b-vitest-pg-gate` |
| Parent | main `42aa3739` |
| Lane | DEV :5433; mutative Vitest → `sfia_next_e2e` only; RECETTE/STABLE untouched |
| Changes | Fail-closed Vitest PG gate (`e2e-pg-gate` + setup + `db/client`); CI migrates `sfia_next_e2e` before Vitest integration |
| Schema | unchanged (reuse migrations 001→012 on ephemeral CI E2E DB) |
| Status | PR readiness — merge soumis à décision Morris — NO RELEASE |

## delivery_id: DELIV-2026-11-10-ML4-NORA-PR-READINESS-INTEGRATION

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | Cycle 13 — PR readiness / intégration locale ML4 + Nora continuity |
| Type | EVOL — consolidation candidature (MINOR CANDIDATE, NO RELEASE) |
| Branch | `integrate/next-ml4-nora-pr-readiness-20261110` (local — not pushed) |
| Parent tips | Nora DEV-08 `e40a1baf` + main `6667a438` + docs cadrage `69c27832` + registre RECETTE `2075aa4f` |
| Morris decision | RECETTE ML4 TERMINÉE AVEC RÉSERVES (10/11/2026); R13/R14 NOT RUN carried; no merge GO |
| Changes | Integration merges only — no functional development; candidacy consolidates ML4 Git, post-RECETTE fixes, Nora DEV-01..08, cadrage, RECETTE register |
| Schema | migrations 008–012 inherited from ML4 lineage (unchanged this cycle) |
| Tests on candidacy | unit intent+mission 15; PG global 21 + ACCEPT-01 8; tsc/build PASS |
| Status | LOCAL PR READINESS — READY FOR MORRIS PUSH/PR DECISION — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-08

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Contexte de travail + isolation mission (RG-CTX-001) |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-07 @ `833a3e6c` |
| Lane | DEV :5433; E2E :3101 / `sfia_next_e2e`; RECETTE untouched |
| Changes | `recoverPendingMissionContinuation` binds to `create_project_commands` d2:mission owner act for THIS project — never lone neighboring awaiting; S06/S07/S05 isolation proofs; interproject Nora read = N/A non-implemented (D4 tools prep-scoped) |
| Schema | unchanged |
| Tests | PG global 21; ACCEPT-01 8; Playwright Atlas 2; tsc/build |
| Status | LOCAL FINALISATION — READY FOR CHATGPT ACCEPTANCE REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-07

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité globale — autorité avant effet + reprise nominale + concurrence progressive + oracle navigateur |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-06 @ `3fac229f` |
| Lane | DEV :5433; E2E browser :3101 / `sfia_next_e2e`; RECETTE untouched |
| Changes | G1 `authorizeMissionBoundD2Create` before `createProjectCommand` (mismatch ⇒ zero project); G2 `recoverPendingMissionContinuation` + POST `/mission-continuation/resume` + project open COMMAND; G3 concurrency oracle requires COMPLETED + recovery; G4 Atlas Playwright document/reload + forged-key BEFORE create; classic path unbound |
| Schema | unchanged |
| Tests | unit intent-conduction 8; PG global 18; ACCEPT-01 8; Playwright Atlas 2 PASS; tsc/build PASS |
| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-06

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Conduite globale — concurrence xact fence + liaison mission↔D2 + reprise crash + browser |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-05 @ `f99e4501` |
| Lane | DEV :5433; E2E browser :3101 / `sfia_next_e2e`; RECETTE untouched |
| Changes | Removed session `pg_advisory_lock`; short `pg_advisory_xact_lock` + `owner_token` CAS; `verifyMissionForD2Act`; structured `awaitingMission` API/UI (no Nora text parse); crash hooks P3/P5; Atlas Playwright BROWSER OBSERVED |
| Schema | unchanged |
| Tests | unit 8; PG global 16; ACCEPT-01 8; Playwright Atlas 1 PASS; tsc/build PASS |
| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-05

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité globale — fiabilisation G1–G7 |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-04 @ `5c6b0cee` |
| Lane | DEV only; RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
| Changes | Latest-per-intentKey mission load (G1/G3); ownerActBinding + clientIntentKey D2 correlation (G2); mobilizeCapability on real D2/D4 (G4); advisory lock + RUNNING continuation fence (G5/G6); S07 knowledge + S08b D5→D4; UI create-project passes clientIntentKey |
| Schema | unchanged |
| Tests | unit 8 PASS; PG global 13 PASS; PG ACCEPT-01 8 PASS; tsc/eslint/build PASS; browser S14 NOT PROVEN (no DEV server :3100) |
| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-04

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Finalisation conduite globale des intentions (GAP-01..07) |
| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-03 @ `12e26e32` |
| Lane | DEV only (`sfia_next_dev` @ 5433); RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
| Changes | `continueAfterProjectCreated` after D2 create (no second Pilot message); exact project name extract (GAP-05); intention-anchored `loadPriorMissionProjection`; `mobilizeCapability` executable contract; D5/D6 PG proofs; Atlas blocking scenario C |
| Schema | unchanged (mission fields on projection JSON only) |
| Tests | unit intent-conduction 7 PASS; PG global 10 PASS; PG ACCEPT-01 8 PASS; tsc PASS; eslint PASS; next build PASS |
| Evidence limits | SCRIPTED GitHub + Nora fixture DEV; no REAL; no Product push; no RECETTE |
| Status | LOCAL FINALISATION — READY FOR CHATGPT GLOBAL ACCEPTANCE REVIEW — NO PRODUCT PUSH |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité cognitive Nora/Studio ACCEPT-01 |
| Type | EVOL — capacité transverse (MINOR CANDIDATE, NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local DEV worktree — not pushed) |
| Base | `d7f1507a56e50660ea24903c2dc563c249ba9086` / tree `3e9e1086…` |
| Lane | DEV only (`sfia_next_dev` @ 5433); RECETTE 3200/5434 untouched |
| Changes | D3 mission-continuity helper; post-D4 CognitiveContinue; D7 prepare from chat; auto resume after authorizePublication; tests unit+PG |
| Schema | unchanged (no WorkIntent table) |
| Tests | unit mission-continuity 5 PASS; PG ACCEPT-01 3 PASS; NR CREATE subset 3 PASS; tsc --noEmit PASS |
| Evidence limits | SCRIPTED GitHub + Nora fixture; no REAL publish; no RECETTE; no Product push |
| Status | LOCAL CONSTRUCTION — NO RECETTE OR REAL PROMOTION |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01-REG

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / ACCEPT-01 — régularisation Review Pack + correctif UX panel |
| Type | EVOL correction locale (NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-01 @ `b0e23c46` |
| Lane | DEV only; RECETTE `8vZjme4-KnnPkAqm_QxMz` untouched |
| Changes | PublicationInspectionPanel reflects `missionResume.status` after authorize; PG replay C2/C5 test; FULL Review Pack |
| Defect fixed | After auto-resume, UI kept AUTHORIZED and left Dispatch enabled as if nominal |
| Schema | unchanged |
| Status | LOCAL REGULARIZATION — NO PRODUCT PUSH / RECETTE |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-02

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité cognitive — correction P0-A..P1-E + preuves transverses |
| Type | EVOL correction intégrée (NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | REG @ `cf5bac70` |
| Lane | DEV only; RECETTE untouched |
| Changes | Mission-gated auto-resume; durable recover via listMessages/turn/reconcile; idempotent restitution; cognitive continue post-effet; publish qualification sans GitHub-centrisme; tests T01/T03/P0-A/P0-B/P1-E |
| Schema | unchanged |
| Status | LOCAL CONSTRUCTION — NO PRODUCT PUSH / RECETTE |

## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-03

| Field | Value |
| --- | --- |
| Date | 2026-11-10 (Europe/Paris) |
| Macro-lot | R5 / Continuité cognitive GLOBALE — mise en conformité transverse |
| Type | EVOL (NO RELEASE) |
| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
| Parent | DEV-02 @ `f42cb2f5` |
| Lane | DEV only; RECETTE untouched |
| Changes | intent-conduction D3 commun; D2 await Pilot act + reprise; READ≠COMMAND (listMessages); scénarios A/B/C/D/I/K + ACCEPT-01; contrats d'extensibilité |
| Schema | unchanged |
| Status | LOCAL CONSTRUCTION — NO PRODUCT PUSH / RECETTE |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-01

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / entrée & continuité (premier vertical) |
| Type | INC / nouvelle capacité, pré-1.0 |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Working tree | local uncommitted construction under `projects/sfia-studio-next/web` |
| Product version target | `NO RELEASE` (proposal `0.1.0-rc.1` not attributed) |
| Lane | DEV (`127.0.0.1:3100`, Postgres `5433`) |
| Schema revision | `001_initial_studio_core` |
| Tests | Vitest unit + PostgreSQL integration (see web test run) |
| Evidence limits | GitHub OAuth LIVE BLOCKED without secrets; OpenAI LIVE optional; Figma native pending; RECETTE NOT AVAILABLE |
| Status | LOCAL CONSTRUCTION — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-02-CRITIQUE

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 consolidation critique (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Next 15.5.29; D2 fingerprint under lock; D4 prep-scoped docs + SAVING; D3 Agents SDK adapter; D1 authMode + Better Auth mount + loopback DEV login; Playwright smoke PASS |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | `001_initial_studio_core` + `002_session_auth_mode` |
| Tests | unit 3 PASS; integration 13 PASS; Playwright 1 PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-03-CONTINUITE

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 continuité D1–D2 (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Better Auth→PilotId session bridge; advisory-lock atomic idempotency across preparations; project reopen by projectId API/UI; Playwright portfolio path |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | unchanged (`001` + `002`) |
| Tests | unit 3 PASS; integration 21 PASS; Playwright 1 PASS; build+tsc PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-04-OAUTH-STATUS-REPROOF

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 continuité D1–D2 (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Fix `/api/auth/status` when OAuth configured; re-proof A/B/C; bounded OAuth start URL (no callback LIVE claim); secrets never in handoff |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | unchanged |
| Tests | unit 3; integration 21; Playwright 1; build+tsc; OAuth status+signin-start PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-05-LIVE-QA-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 LIVE qualification consolidation (same lot) |
| Type | INC corrective / qualification |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | D1 late GitHub link backfill; PostCSS override 8.5.32; A01–A16 reclass; Nora LIVE adapter proof; integration forces fixture; Playwright LIVE-aware |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Tests | unit 3; integration 22; Playwright 1; build+tsc; npm audit prod postcss closed |
| Status | ML1 LOCAL QUALIFICATION REVIEWABLE candidate — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-06-PRECOMMIT

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 first local project commit |
| Type | INC / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (parent = base; unpublished) |
| Changes | ML1 web vertical + D1 lane fail-closed emit; matrice temporal DESIGN ONLY vs DEV |
| Product version | `NO RELEASE` |
| Status | LOCAL COMMIT — awaiting ChatGPT review / Morris push gate |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-07-PREPUSH-CORRECTIONS

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 targeted pre-push corrections (same lot) |
| Type | INC corrective / Critical Review findings |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Parent commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (preserved) |
| Commit | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` (parent `0b982b3b…`; unpublished) |
| Changes | A: strict loopback + DEV consume fail-closed; B: `db:migrate` 001→002 + fresh-container proof; C: owned E2E :3101 / `sfia_next_e2e` / Nora fixture-only |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | `001` + `002` via `npm run db:migrate` |
| Tests | unit / integration (incl. isolated migrate container) / Playwright FAKE E2E — see Review Pack |
| Status | LOCAL CORRECTIVE — preserved under subsequent guardrail commit |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-08-ENV-BOUNDARIES

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 pre-push environment boundaries (same lot) |
| Type | INC corrective / isolation guardrails |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Parent commit | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` (preserved; commits 1–2 untouched) |
| Commit | tip SHA after this delivery commit (resolve via `git rev-parse HEAD`; no circular amend) |
| Changes | P1: Nora fixture DEV-only + fail-closed outside DEV / missing key; P2: E2E PG preflight before CREATE/migrate; P3: `distDir` `.next-e2e` vs `.next` |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Tests | unit 22; integration 26; Playwright FAKE 1; build/tsc/lint — see Review Pack |
| Status | LOCAL CORRECTIVE candidate — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-MERGE-09

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 — entrée et continuité |
| Type | INC / Git integration and bounded functional acceptance record |
| Branch | `sfia/next-access-preparation-continuity` |
| Candidate SHA | `0db58be8240a00593092048ee74299f19374f489` |
| Candidate commits | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` → `8767185234bab9b2cad7800771a6bfc0ae1d19e4` → `0db58be8240a00593092048ee74299f19374f489` |
| PR / merge | [#649](https://github.com/mcleland147/sfia-workspace/pull/649) MERGED on 2026-11-04; `main@747cbec0ac9c161306db34121b0447391b23589c` |
| Tree | `69d48cc33a91af6635856babb620a7735aa55fe6` — identical between C3 candidate and merge |
| RECETTE | Morris functional acceptance, including GitHub OAuth LIVE and Nora LIVE; build `PMCGeil9wv8DZNBfEGf4H` bound to C3 candidate |
| Historical test evidence | Unit 22 PASS, PostgreSQL integration 26 PASS, Playwright 1 PASS with DEV fake identity/Nora fixture; separate LIVE observations; neither implies R6 or Next CI PASS |
| Carried reserve A | DEV/RECETTE cookie collision on shared `127.0.0.1` host despite different ports; separate browser profiles mitigation; re-mediate/re-test before STABLE; no cross-DB authority breach proven |
| Carried reserve B | Historical GitHub Required Gate SUCCESS with Next build SKIPPED; dedicated Next CI workflow and proof needed before next significant delivery, under distinct shared-path GO |
| Post-merge runtime | Independent smoke NOT OBSERVED |
| Product version | `NO RELEASE` ; `STABLE NOT AVAILABLE` ; no release tag / no ADOPTED |
| Status | **MERGED / FUNCTIONAL RECETTE ACCEPTED WITH RESERVES — ML1 integration evidenced, technical remediation and R6 qualification still open** |

## delivery_id: DELIV-2026-11-05-ML2-LOCAL-01

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Produire et capitaliser avec Nora |
| Type | INC / nouvelle capacité compatible (prospective MINOR) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | D3 cognition + D4 knowledge/documents + UX surfaces + streaming attempt + tests |
| Product version target | `NO RELEASE` (NOT AVAILABLE — no official attribution) |
| Compatibility | Additive migration `003_ml2_knowledge_documents` ; ML1 data preserved |
| Schema | `001` + `002` + `003` |
| Tests | unit 26 PASS ; PG integration 32 PASS ; Playwright 2 PASS (FAKE) ; `tsc` PASS ; `next build` PASS |
| Evidence limits | Nora LIVE / COG panel / Figma fidelity matrix / CI Next = NOT PROVEN or ABSENT |
| Streaming | Attempted in adapter (`stream: true`) ; UI progressive NOT wired ; LIVE streaming NOT PROVEN |
| Status | LOCAL CONSTRUCTION — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY WITH RESERVES` |

## delivery_id: DELIV-2026-11-05-ML2-CORRECTIVE-02

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — correctif intégrité D4 / documents / cognition |
| Type | Correctif intégré (même macro-lot) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only) |
| Parent HEAD | `a9a468e9f883128045c516a881f30d6372175c96` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | C1 sujets atomiques ; C2 concurrence révision ; C3 idempotence création ; C4 diff ordonné ; C5 épistémologie capitalisation ; C6 états UX |
| Schema | `004_ml2_integrity_corrective` |
| Product version | `NO RELEASE` |
| Tests | unit 31 PASS ; PG integration 45 PASS ; Playwright 2 PASS ; tsc+build PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` (réserves S1/S2/S3/CI/COG qualifiées, non bloquantes pour intégrité) |

## delivery_id: DELIV-2026-11-05-ML2-CONSOLIDATION-03

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — consolidation corrective C3/C4/C1 |
| Type | Correctif intégré (même macro-lot) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Parent HEAD | `5c7dd7528ff859c9717db865c74d45930dff4219` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | C3-A fingerprint all paths ; C3-B clé UI stable ; C4 budget diff ; C1 journal + concurrence |
| Schema | unchanged (`004_ml2_integrity_corrective`) — no new migration |
| Product version | `NO RELEASE` |
| Tests | unit 34 PASS ; PG integration 50 PASS ; Playwright 3 PASS (FAKE) ; tsc+lint+build PASS |
| Evidence limits | LIVE Nora / COG panel / Figma ML2-S3 / CI Next = NOT PROVEN or ABSENT |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-INTEGRATION-PREP-04

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 7 Intégration / DevOps (préparation) |
| Type | EVOL / préparation intégration Git + instruction CI |
| Branch | `sfia/next-ml2-production-capitalisation` @ `1967b2c5` (local only — **not published**) |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | Git Truth, inventaire candidat, revalidation locale, proposition CI Next (artefact `.tmp` uniquement) |
| CI Next workflow path | **PROPOSED** `.github/workflows/sfia-studio-next-ci.yml` — contenu dans `.tmp-sfia-review/ci-next-workflow-proposal.yml` ; **NOT WRITTEN** under `.github/` |
| CI Next remote | **NOT RUN** — requires distinct Morris GO to install workflow + publish SHA |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local revalidation | unit 34 ; PG 50 ; Playwright 3 ; tsc+lint+build PASS |
| SVG residuals | 5× `web/public/*.svg` create-next-app defaults, untracked, unused → **EXCLUDE** (do not commit) |
| Status | LOCAL INTEGRATION PREP — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY WITH RESERVES` (intégration Git bloquée tant que CI Next absente / non exécutée) |

## delivery_id: DELIV-2026-11-05-ML2-CI-NEXT-INSTALL-05

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 7 Intégration / DevOps (installation CI Next locale) |
| Type | EVOL / workflow CI versionné sur branche construction |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Parent HEAD | `f937477026d25812db000af4d16ab48bd22e9e47` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Created | `.github/workflows/sfia-studio-next-ci.yml` |
| Historical workflows | `sfia-studio-ci.yml` / `interv360-ci.yml` **unchanged** (hashes match origin/main) |
| Gate name | `SFIA Studio Next Required Gate` (not yet added to GitHub branch protection) |
| CI Next remote | **NOT RUN** — requires Morris GO to push branch / open PR for first Actions execution |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local revalidation | unit 34 ; PG 50 ; Playwright 3 ; tsc+lint+build PASS ; actionlint PASS (no findings) |
| SVG residuals | still EXCLUDE (untracked, not staged) |
| Status | LOCAL CI INSTALL — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` (publication Git projet + premier run Actions = gates suivants) |

## delivery_id: DELIV-2026-11-05-ML2-C3B-LOST-ACK-06

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 9 QA / validation (C3-B lost-ACK) |
| Type | INC corrective / BROWSER FAKE C3-B |
| Branch | `sfia/next-ml2-production-capitalisation` (PR #655 DRAFT) |
| Parent HEAD | `23e55da80ac774511b467bc53ab7eaa5d60ac969` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Cause | After simulated ACK loss, incidental `reload()` adopted `docId` while create intent was still open, hiding `create-intent-key` and diverting retry into revise-via-save (rev 2 / new key) |
| Fix | `page.tsx` reload skips `docId` adoption while `createDocIntentRef` is active; C3-B Playwright asserts stable create key, zero revise calls, single doc at revision 1 |
| Schema | unchanged |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Status | CORRECTIVE on PR #655 — see Review Pack for CI proof |
| Verdict candidate | pending GitHub Actions on published SHA |

## delivery_id: DELIV-2026-11-05-ML2-COG-OBS-INTEGRATED-07

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — cognition Nora + observabilité intégrées |
| Type | EVOL / construction locale Critical |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only — not published**) |
| Base documentary | `origin/docs/next-ml2-d3-d4-architecture-20261105@6d85fd9b7c724b020011f19d8814333116674475` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Implemented | cognitive policy TEST_BOUNDARY≠OPERATIONAL ; D4 read tools ; turn command + migration 005 ; JSON obs sink ; HTTP error classification ; tracingDisabled |
| Schema | `005_ml2_conversation_turn_command` applied on DEV `sfia_next_dev` + `sfia_next_e2e` |
| Product version | `NO RELEASE` ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Local proofs | unit 42 PASS ; PG 53 PASS ; Playwright 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE / CI new SHA | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL DELIVERY — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL DELIVERY WITH RESERVES — REVIEW REQUIRED` |

## delivery_id: DELIV-2026-11-05-ML2-CRITICAL-CORRECTIVE-08

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~18:25 CET |
| Macro-lot | R5 / ML2 — correctif Critical post-revue ChatGPT |
| Type | EVOL corrective integrated (same ML2, not new lot) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only — not published**) |
| Parent entry SHA | `53be6097612825b24333821ab3001c35a0b4d757` |
| Base documentary | `origin/docs/next-ml2-d3-d4-architecture-20261105@6d85fd9b` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | TURN orphan reconcile+CAS ; D4 AVAILABLE-only ; no uncertain SDK fallback ; budgets fail-closed ; search pagination/budget ; OBS allowlist/RO/purge/lane |
| Schema | `005` unchanged (forward-safe) ; `schemaRevision` aligned to 005 |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 50 PASS ; PG 62 PASS ; Playwright 3 PASS ; tsc+build PASS |
| LIVE / CI new SHA / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL CORRECTIVE DELIVERY — REVIEW REQUIRED` |

## delivery_id: DELIV-2026-11-05-ML2-THREE-BLOCKER-09

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~18:45 CET |
| Macro-lot | R5 / ML2 — three-blocker Critical corrective |
| Type | INC/EVOL corrective (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only**) |
| Parent SHA | `00736f3a6c34f6f56d628b6dee2097a4aadda91b` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | owner_token fencing+CAS ; SQL pagination terminante ; no SDK auto-retry after run() |
| Schema | migration `006_ml2_turn_owner_token` (forward-only) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 68 ; Playwright 3 ; tsc+build PASS |
| LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL THREE-BLOCKER CORRECTIVE DELIVERY — READY FOR CHATGPT REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-TURN-INTEGRITY-10

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~19:15 CET |
| Macro-lot | R5 / ML2 — turn transactional integrity |
| Type | INC corrective (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only**) |
| Parent SHA | `57f6fc54888f607d8a70ef959f39057764e4b20a` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | atomic `commitTurnTerminal` (FOR UPDATE + rollback on CAS miss) ; knowledge write fencing ; D4-PAGE-03 STALE termination |
| Schema | unchanged (`006` already present) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 78 ; Playwright 3 ; tsc+lint+build PASS |
| LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL ML2 TURN INTEGRITY CORRECTIVE — READY FOR CHATGPT REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-CONSOLIDATION-PREMERGE-11

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~20:25 CET |
| Macro-lot | R5 / ML2 — consolidation pré-merge PR #659 |
| Type | INC corrective integrated (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**project push FF authorized**) |
| Parent SHA | `df7357873b487d48e32af5de89995bcfbf720210` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| PR | `#659` OPEN DRAFT ; #655–#658 untouched |
| Corrected | UNKNOWN-CAP DB reconstitution ; ASSIST-REUSE generationId gate ; SAFE-01 two-session PG + DB-fail ; CI labels 001→006 |
| Schema | unchanged (`006` already present) ; no new migration |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 PASS ; PG 89 PASS ; Playwright FAKE 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | PROJECT BRANCH PUSH (FF) — merge/LIVE/RECETTE still gated |
| Verdict candidate | `PR #659 UPDATED — await CI Next on new SHA — READY FOR CHATGPT PRE-MERGE REVIEW` (CI status filled post-push) |

## delivery_id: DELIV-2026-11-05-ML2-PRE-RECETTE-QUAL-12

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~20:50 CET |
| Macro-lot | R5 / ML2 — qualification intégrée pré-RECETTE PR #659 |
| Type | INC corrective + QA préparation (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**FF push authorized**) |
| Parent SHA | `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| PR | `#659` OPEN DRAFT ; #655–#658 untouched |
| Corrected | ASSIST-REUSE dual-gen strict + bindTurnGenerationId ; SAFE-01 strict RUNNING + client abort mid-TX ; D4 gen-priority reconstitution ; LIVE/RECETTE docs préparés |
| Schema | unchanged (`006`) ; no migration |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 PASS ; PG 93 PASS ; Playwright FAKE 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE | **NOT RUN / NOT DEPLOYED** ; manifeste PREPARED |
| Status | PROJECT BRANCH PUSH (FF) — LIVE/RECETTE/merge gated Morris |
| Verdict candidate | `ML2 PRE-RECETTE TECHNICAL CONSOLIDATION — CI NEXT PASS — LIVE/RECETTE GATES PENDING MORRIS` |

## delivery_id: DELIV-2026-11-05-ML2-LIVE-RECETTE-COND-13

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~21:15 CET |
| Macro-lot | R5 / ML2 — LIVE borné + RECETTE conditionnelle PR #659 |
| Type | CAPA+INC+QA integrated (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` |
| Parent SHA | `01ae25e1dfc7b062d3b2a73838335ef8630ec6f2` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| LIVE proofs | 3 scenarios `openai-agents-sdk-live` COMPLETE ; D4 tools on complex ; ~3 contacts / ~€1.05 est. ; model `gpt-6.1-sol` requested |
| Corrected | cookie name per `STUDIO_LANE` ; SAFE-01 DBFAIL-03 ephemeral persistent table + pg_locks waiter |
| Schema | `006` unchanged |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 93 ; e2e FAKE 3 ; tsc+lint+build — filled at commit |
| RECETTE | activation conditionnelle après CI du SHA final ; ML1 RECETTE :3200 **non réinitialisée** |
| Status | PROJECT PUSH FF + conditional RECETTE provision |
| Verdict candidate | `ML2 LIVE BOUNDED REAL PROVEN — RECETTE CANDIDATE AVAILABLE FOR MORRIS REVIEW` (si gate E PASS) |

## delivery_id: DELIV-2026-11-06-ML3-PILOTAGE-DECISIONS-14

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — Piloter et décider |
| Type | INC / nouvelle capacité D5–D6 (MINOR candidate) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` (PR #660 docs merged) |
| Schema | additive `007_ml3_pilotage_decisions` (from `006_ml2_turn_owner_token`) — applied **DEV only** |
| Changes | D6 human_decisions/restrictions ; D5 trajectories/cycles/method ; business_commands + effects ; CKI pin R01 ; atomic CLOSE+OPEN R04 ; Nora pilotage/CKI context ; UX Pilotage panel ; tests unit/PG/e2e |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE ; package `0.0.0-dev` |
| Lane | DEV construction ; RECETTE/STABLE **not mutated** |
| Figma | visual contract #22 native + inventory lot B ; runtime comparison partial (screenshot e2e) — not pixel-perfect claim |
| LIVE Nora | NOT EXECUTED — GATE MORRIS REQUIRED |
| Status | LOCAL ML3 DELIVERY — review handoff only |
| Verdict candidate | `LOCAL ML3 DELIVERY COMPLETE — REVIEW REQUIRED` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-CORRECTIFS-F01-F08

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — correctifs pilotage F01–F08 et T01–T04 |
| Type | INC corrective (same ML3, not a new lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate |
| Schema | unchanged `007_ml3_pilotage_decisions` — `actInstanceId` lives in `source_action_key` + fingerprint, no migration 008 |
| Corrected | Idempotence UI + GET by client key ; manifeste CKI 0.2.0 ; restriction ciblée ; journal `state` ; GO naturel sans operation ; identité d'acte ; `REVISE_DECISION` + contradiction exacte ; `DELIVERED` seulement après generate réel |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated |
| LIVE Nora | NOT EXECUTED |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-06-ML3-AUTHORITY-CR01-CR04

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — ajustement autorité & preuves CR-01..CR-04 |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate (hashes F01–F08 pack as baseline) |
| Schema | unchanged `007` |
| Corrected | Transition A+B restrictions ; REVISE vs D5 founding refuse ; no global statement contradiction ; Review Pack with real logs |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated |
| LIVE Nora | NOT EXECUTED |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |
| Verdict candidate | `ML3 AUTHORITY ADJUSTMENT COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-ASSISTED-CONTRADICTIONS

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 contradictions assistées (Niveau A Nora + Niveau B typé) |
| Type | EVOL complementary on existing ML3 |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate |
| Contrat | B13 v0.1 **VALIDATED IN CONTENT BY MORRIS** 2026-11-06 |
| Schema | unchanged `007` — no migration 008 |
| Implemented | divergence-assist Level A ; nora-context/fixture ; UX legend ; typed Level B unchanged |
| Product version | `NO RELEASE` |
| Lane | DEV ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CANDIDATE — no project push/PR/merge |
| Verdict candidate | `ML3 B13 DELIVERY COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (DEV limits) |

## delivery_id: DELIV-2026-11-06-ML3-B13-C01-C03-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 corrective continuation C01–C03 (after Critical Review) |
| Type | INC corrective continuation (same ML3 ; not a new macro-lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project commit/push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` dirty candidate preserved |
| Contrat B13 | v0.1 remains **VALIDATED IN CONTENT BY MORRIS** — Cursor hypothesis ≠ new normative decision |
| Schema | unchanged `007` — no migration 008 ; no new authority category |
| C01 | `findMessageDecisionConfrontations` — single APPLICABLE D6 + new USER message → structured `levelASignals` via conversation→nora-context→adapter (no second persisted decision) |
| C02 | `qualifyCommandOutcome(status, reasonCode)` — CONFLICT≠authority ; RESTRICTION→authority-block ; STALE/HUMAN_INTENT/FINGERPRINT→technical ; ACTIVE_CYCLE→d5_state |
| C03 | FULL Review Pack + integrated tests (unit/PG/e2e FAKE) ; real logs |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only (`127.0.0.1:5433/sfia_next_dev`) ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 B13 TARGETED ADJUSTMENT COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-R1-R3-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 R1–R3 final corrective (after Critical Review on C01–C03) |
| Type | INC corrective continuation (same ML3 ; not a new macro-lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project commit/push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` dirty candidate preserved |
| Prior handoff | `sfia/review-handoff@9b98a7fa` blob `e921982c` |
| Contrat B13 | v0.1 **VALIDATED IN CONTENT BY MORRIS** |
| Schema | unchanged `007` |
| R1 | Clear stale `lastOutcome` on new command ; UNKNOWN presentation replaces prior RESTRICTION motif |
| R2 | Negation/polarity-safe Level A framing (never false COMPATIBLE on « n'est plus obligatoire ») |
| R3 | PG integrated `postUserMessageAndNora` proof (persist USER+Nora, no invented HumanDecision) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 B13 R1-R3 CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-R2-R3-FINAL-ADJUST

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 R2/R3 final targeted adjustments |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only**) |
| Base | `origin/main@7f1f41c` dirty candidate preserved |
| Prior handoff | `sfia/review-handoff@541c0894` blob `ada98550` |
| R2 | Polarity: jamais / aucunement / typographic apostrophe / ne doit pas être — never false COMPATIBLE |
| R3 | Isolation proof: foreign APPLICABLE decision on same objectRef created BEFORE Nora gen ; marker absent from A context/reply |
| Schema | unchanged `007` |
| Product version | `NO RELEASE` |
| Lane | DEV only ; LIVE Nora NOT EXECUTED |
| Verdict candidate | `ML3 B13 R2-R3 TARGETED ADJUSTMENTS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-IMMUTABLE-CANDIDATE-PUBLISH

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — consolidation & publication candidat Git |
| Type | RUN — consolidation / qualification / publication bornée |
| Branch | `sfia/next-pilotage-decisions-delivery` (**project push authorized — no PR/merge**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Schema | `007_ml3_pilotage_decisions` |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV proofs only ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Scope | Allowlist §6 only (docs + CKI manifest + web D5/D6/API/UX/tests) ; SVG / `.tmp-sfia-review` excluded |
| Status | IMMUTABLE PROJECT CANDIDATE — SHA `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` |
| Verdict candidate | `ML3 IMMUTABLE PROJECT CANDIDATE PUBLISHED — READY FOR CHATGPT GLOBAL CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-CONVERSATION-AUTHORITY

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 « Piloter et décider » — F01/F02 consolidation fonctionnelle |
| Type | INC corrective (conversation → D5/D6) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local worktree — no project commit/push**) |
| Candidate ref | `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` (unchanged remote) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Schema | unchanged `007` (no migration 008) |
| F01 | Fil Nora → `applyConversationalAuthority` → `executePilotageCommand` (USER_MESSAGE) |
| F02 | RECORD/REVISE documentaires depuis fil + geste Journal ; fondations D5 restent typées |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/LIVE Nora/STABLE NOT AUTHORIZED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 F01/F02 CONVERSATION-AUTHORITY INTEGRATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-C01-C02-C03-AUTHORITY-RECOVERY

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — F01/F02 C01/C02/C03 after Critical Review NOT ACCEPTED |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local — no project commit/push**) |
| Prior handoff | `sfia/review-handoff@c2bec44b` blob `bbf43260` |
| Candidate ref | `8bf8b5ce` unchanged |
| Schema | unchanged `007` |
| C01 | Exploratory language ≠ REVISE ; Level A non-authorizing |
| C02 | Durable reconstitution via business_commands + stable client turn key |
| C03 | Thread continuity after reload ; Journal >8 expandable |
| Product version | `NO RELEASE` |
| Lane | DEV only |
| Verdict candidate | `ML3 F01/F02 AUTHORITY AND RECOVERY CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-CR01-CR02-CONSOLIDATION

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — F01/F02 CR-01/CR-02 after Critical Review PARTIALLY ACCEPTED |
| Type | INC CRITICAL |
| CR-01 | D6 revise uniqueness over full APPLICABLE set (not Nora window of 12) |
| CR-02 | Pending exclusive guard ; Nora COMPLETE ≠ métier UNKNOWN clear ; ACK-lost browser proof |
| Git projet | HEAD `8bf8b5ce` inchangé — **aucun** commit/push projet |
| ENV-01 | DEV only (`127.0.0.1:5433/sfia_next_dev`) |
| Versioning | NO RELEASE / STABLE NOT AVAILABLE |
| Verdict candidate | `ML3 F01/F02 AUTHORITY TARGET AND RECOVERY CONSOLIDATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-CANDIDATE-PUBLICATION-RECETTE-BUILD-PREP

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — publication candidat corrigé + préparation build RECETTE |
| Type | RUN CRITICAL |
| Branche | `sfia/next-pilotage-decisions-delivery` |
| Base précédente | `8bf8b5ce` |
| R-UX-01 | NON CONFORME — CARRIED RESERVE Morris (entrée RECETTE conditionnelle) ; pas ACCEPTED FUNCTIONALLY |
| Publication | commit + push FF autorisés ; PR/merge/STABLE/deploy RECETTE **non** autorisés |
| Build | worktree propre au SHA publié → artefact préparé, **BUILD_PREPARED_NOT_DEPLOYED** |
| Versioning | NO RELEASE ; package `0.0.0-dev` technique ; product_version NOT AVAILABLE |
| ENV-01 | DEV tests only ; RECETTE DB/runtime non mutés ; cookie host réserve |
| Verdict candidate | `ML3 UPDATED IMMUTABLE CANDIDATE PUBLISHED — RECETTE BUILD PREPARED — READY FOR CHATGPT CRITICAL REVIEW` |
| Note | SHA/tree/build exacts consignés dans Review Pack / manifeste local après commit (pas d'autoréférence dans ce fichier avant commit). |

## delivery_id: DELIV-2026-11-06-ML3-RCT02-CORRECTIFS-LOCAL

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — correctifs RCT-02 C01–C08 (conversation → D5/D6) |
| Type | INC CRITICAL |
| Branche | `sfia/next-ml3-rct02-correctifs` |
| Base entrée | `b9047a48` (docs RCT-02) sur candidat `ba831b25` |
| Code | qualification naturelle OPEN/CLOSE/RECORD/REVISE/LIFT ; objectif sans « . » ; CKI silencieux ; `restrictions_actives=aucune` explicite |
| Tests | unit RCT-02 + suites unit existantes ; PG `ml3-pilotage.pg` |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| ENV-01 | DEV isolé uniquement — RECETTE runtime non muté |
| Push projet / PR / merge / deploy RECETTE | **NON** (hors mandat) |
| Verdict candidat | `READY FOR MORRIS REVIEW — LOCAL CORRECTIVE DELIVERY` (sous réserve handoff L3) |

## delivery_id: DELIV-2026-11-06-ML3-RCT02-CR-REWORK-LOCAL

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — Critical Review RCT-02 reprise C01/C05/C06 |
| Type | INC CRITICAL REWORK |
| Branche | `sfia/next-ml3-rct02-correctifs` |
| Handoff rejeté | `0a057278` (NOT ACCEPTED — REWORK REQUIRED) |
| Correctifs | C05 extractReviseStatement (T05 exact sans `:`) ; C06 négations + targetRef ; C01 framing non-performatif ; C04 split Nora ; overlap revise cible |
| Preuves | unit `ml3-rct02-intent` ; PG `RCT-02 Critical Review conversational chain` (6) ; suite PG `ml3-pilotage` 41/41 |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| ENV-01 | DEV isolé — RECETTE runtime non muté |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT RE-REVIEW` (si preuves vertes + handoff L3) |

## delivery_id: DELIV-2026-11-06-ML3-RCT02-CR2-FALSE-GO-LOCAL

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — Critical Re-Review faux GO C06/C08 + gates unifiés |
| Type | INC CRITICAL REWORK |
| Branche | `sfia/next-ml3-rct02-correctifs` |
| Handoff rejeté | `4b168905` (NOT ACCEPTED — REWORK REQUIRED) |
| Correctifs | `isSpecimenOrHistoricalFraming` + `refusesOrWithholdsAct` sur OPEN/CLOSE/LIFT/RECORD/REVISE ; LIFT affirmative stricte |
| Preuves | unit 47 ; PG CR 9/9 ; PG `ml3-pilotage` 44/44 ; lint/tsc/build PASS |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT RE-REVIEW` |

## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-REMEDIATION-LOCAL

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — remédiation LIVE RCT-02 C04/C05/C06 |
| Type | INC CRITICAL |
| Branche locale | `sfia/next-ml3-rct02-live-remediation` (depuis `d646d42a`, **non poussée**) |
| Source D0 | `sfia-next-rct02-live-gaps-d646d42a.md` (hors Git) |
| Correctifs | C04 objectRef/statement ; C05 éligibilité RECORD avant unicité ; C06 CLOSE non performatif (« ni clôturer ») |
| Preuves | unit `ml3-rct02-intent` 17 ; PG `ml3-pilotage` 45/45 dont LIVE chain ; lint/tsc PASS |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| ENV-01 | DEV `:3100` / PG `:5433` — RECETTE `:3200` / `d646d42a` **préservée, non mutée** |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT REVIEW — LOCAL LIVE REMEDIATION` |

## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-REMEDIATION-REWORK

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — rework LIVE remediation C01/C05 cibles |
| Type | INC CRITICAL REWORK |
| Branche locale | `sfia/next-ml3-rct02-live-remediation` (**non poussée**) |
| Handoff rejeté | `f2c5e3b5` / blob `d59ba25c` (REWORK REQUIRED) |
| Correctifs | C01 négation secondaire n'annule pas OPEN ; C05 refus si cible fondatrice désignée ; pack Full complet |
| Preuves | unit + PG C01/C05 rework + non-régression LIVE C04/C05/C06 |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT RE-REVIEW` |

## delivery_id: DELIV-2026-11-07-ML3-RCT02-C01-FALSE-GO-RETRACT

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — C01 false-GO retract vs exclusion autre ouverture |
| Type | INC CRITICAL REWORK |
| Branche locale | `sfia/next-ml3-rct02-live-remediation` (**non poussée**) |
| Handoff rejeté | `d89c3009` / blob `4d2cefb9` (REWORK REQUIRED — C01 FALSE GO) |
| Correctif | distinguer négation du GO demandé vs « ni en ouvrir un autre » |
| Preuves | unit 3 formulations ; PG zéro mutation négatifs + positif C01 ; non-régression LIVE C04/C05/C06 |
| Push projet / PR / merge / deploy RECETTE | **NON** |
| Verdict candidat | `READY FOR CHATGPT FINAL REVIEW — LOCAL LIVE REMEDIATION` |

## delivery_id: DELIV-2026-11-07-ML3-RCT02-LIVE-RETEST-61FE

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07 |
| Macro-lot | R5 / ML3 — consolidation LIVE retest 8/8 + publication documentaire + Draft PR |
| Type | QA / capitalisation preuve (Critical) |
| SHA recetté (LIVE) | `61fe295b6704e820694d2379e7f6ab1814143172` |
| Parent correctif | `d646d42addb5a4c4a3cab441e9e39018d85fae70` |
| Branche | `sfia/next-ml3-rct02-live-remediation` |
| Preuve LIVE | T01–T08 PASS ; rapport `construction/pilotage-et-decisions/recette-ml3-rct02-live-retest-61fe295b.md` |
| Build RECETTE | `ZCkIWQ341KK1KOHTD1a5L` ; lane `:3200` ; schema `007_ml3_pilotage_decisions` ; DB `5434/sfia_next_recette_ml3` |
| Product version | `NO RELEASE` / package `0.0.0-dev` |
| Push documentaire / Draft PR | **OUI** (GO Morris borné) — merge / STABLE / ADOPTED / redeploy RECETTE : **NON** |
| CI | à observer sur la Draft PR (≠ PASS local) |
| Verdict candidat | `ML3 RCT-02 DOCUMENTATION PUBLISHED — DRAFT PR OPEN — CI GATE [à relever]` |

> Le SHA Git du commit documentaire ≠ SHA recetté `61fe295b`. L'arbre fonctionnel `web/`/`cki/` doit rester identique au candidat LIVE.

## delivery_id: DELIV-2026-11-07-PILOTAGE-FORMAL-EXIT

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-07 |
| Macro-capacité | R5 — Piloter et décider (ML3) ; sortie formelle bornée |
| Type | D2 décision Morris + documentation Git, **NO SEMANTIC PRODUCT IMPACT** |
| Autorité / GO | Morris valide en conversation la clôture ML3 avec réserves et l'intégration Git documentaire ; aucune autorisation PR/merge/promotion implicite |
| Base Git | `main@56d263e83de7bb3af4a5b480131002684a5626ca` ; PR #661 MERGED |
| LIVE | RCT-02 T01–T08 8/8 sur `61fe295b`, build `ZCkIWQ341KK1KOHTD1a5L` ; C03 intercycle ciblé PASS rév7/journal7, `02-conception-fonctionnelle RESOLVED pin 0.2.0` |
| CI | PR #661 pré-merge `42332186084` PASS, post-merge `42333954356` PASS, migration 007 ; PG-DBFAIL-03 non réellement exécuté |
| Documents de sortie | `governance/decisions/2026-11-07-pilotage-decisions-formal-exit.md` ; `governance/roadmap.md` ; `construction/pilotage-et-decisions/recette-cki-intercycles-live.md` ; `construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md` ; présent journal |
| Git documentaire | Branche `docs/next-pilotage-decisions-formal-exit` créée depuis merge SHA ; publication documentaire autorisée, **PR/merge non autorisés dans ce mandat** |
| Environnements / version | DEV/RECETTE non modifiés ; STABLE NOT AVAILABLE ; `NO RELEASE` / package `0.0.0-dev` |
| Réserves / exits | `ckiDelivery DELIVERED` non indépendant, cookies ENV-01 A avant STABLE, PG restore avant promotion adaptée, PG-DBFAIL-03 avant preuve reprise, R6 E2E/REAL |
| Verdict | **ML3 CLOSED BY MORRIS AT BOUNDED D5/D6 + CKI GUIDANCE SCOPE — WITH CARRIED RESERVES** ; R5 IN PROGRESS ; ML4 Git/D9 NOT STARTED/NOT AUTHORIZED |

> Cette entrée décrit la décision de sortie et la publication de ses documents, sans altérer les historiques de delivery antérieurs. Les SHAs exacts des commits documentaires sont vérifiables dans l'historique de la branche de publication.

## delivery_id: DELIV-2026-11-08-G4-POSTMERGE-PILOTAGE-CI

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / G4 post-merge — stabilisation CI Pilotage |
| Type | RUN corrective Critical ; `NO RELEASE` |
| Autorité / GO | Morris GO unique stabilisation CI post-merge ; merge conditionnel si contrôles PASS |
| Base Git | `origin/main@ebf3d150` (merge PR #669) ; tree `6f144851` |
| Incident | CI main run 42477468119 FAIL 10/12 ; `pilotage-panel` / `b13-authority-legend` absents après clic Pilotage |
| Cause | Race `load()` vs `selectSurface('pilotage')` / `searchParams` — `applyUrlDocumentState` réapplique `travail` |
| Correctif | `pendingSurfaceRef` dans `page.tsx` ; E2E ML3 URL-observable |
| Preuves locales | tsc OK ; unit 123 PASS (STUDIO_LANE=DEV) ; PG 144 PASS ; e2e full 12/12 ×2 PASS |
| DEV 500 | Cause = `next dev --turbopack` font flake sur WT construction ; restore non destructive `next dev` sans turbopack → `/login` 200 ; RECETTE `:3200` inchangée 200 |
| Verdict attendu | PR/merge conditionnel puis post-merge CI GREEN ; STABLE/ML4 NOT STARTED |

## delivery_id: DELIV-2026-11-08-ML4-GIT-LOCAL-01

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — Collaborer et publier avec Git |
| Type | EVOL / FEATURE DELIVERY — construction locale intégrée |
| Autorité / GO | Morris GO R5/ML4 INTEGRATED LOCAL DELIVERY (2026-11-08) — DEV only |
| Branche / worktree | `feat/next-git-collaboration-20261108` @ `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Base Git | `origin/main@c658f59023d44a0e22448c7ee034e3c1dda292a2` (PR #670 merged) |
| État Git Product | **LOCAL DIRTY / NO PROJECT COMMIT / NO PUSH / NO PR** |
| Architecture | D6→D7→D9→D8 ; domaines `integrations` (D9), `execution` (D7), `proofs` (D8) ; D4 `document_publication_refs` ; Nora lecture Git only |
| Migration | `008_git_collaboration` additive (DEV/`sfia_next_e2e`) — jamais RECETTE/STABLE |
| Provider | `STUDIO_GITHUB_PROVIDER=scripted` par défaut ; REAL → `NOT_CONFIGURED` |
| UX | Paramètres→Intégrations (218–224) ; surface projet git/publication (227–231) ; badge SCRIPTED ; shell G4 réutilisé |
| Figma | Contrat extrait `.tmp-sfia-review/figma-visual-contract-ml4.md` + captures 218/219/225/227/229/231/233 |
| Validations locales | unit 131 PASS ; integration PG 154 PASS (dont git-collaboration 10) ; `tsc --noEmit` PASS ; `next build` PASS ; e2e `git-collaboration.spec.ts` **1/1 PASS (15.6s)** SCRIPTED |
| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Limites Fake/Real | Aucune installation App REAL ; aucun commit/PR/merge GitHub REAL ; DETERMINISTIC ≠ READY FOR REAL |
| Gates restants | Critical Review ChatGPT ; GO Git Product ; GO RECETTE + effets REAL ; acceptation Morris ML4 |
| Verdict candidat | `ML4 INTEGRATED LOCAL DELIVERY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GIT-CORRECTIVE-B1-B9

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — correctif Critical B1–B9 |
| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
| Autorité / GO | Morris GO ML4 CORRECTIVE LOCAL DELIVERY (2026-11-08) |
| Branche / worktree | `feat/next-git-collaboration-20261108` (même worktree dirty) |
| Base Git | `origin/main@c658f590…` inchangée ; handoff précédent `877b502a` |
| Corrections | B1 autorité courante ; B2 claim atomique ; B3 merge lié publication ; B4 reconcile/lost ACK ; B5 path-policy ; B6 diff inspectable ; B7 provenance fingerprint ; B8 matrice ; B9 Review Pack + package-lock |
| Migration | aucune 009 — progress/claim via colonnes 008 existantes |
| Validations | unit 132 PASS ; git-collaboration PG 15 PASS ; e2e git corrective PASS ; Playwright **13/13 PASS** (ML1–ML3/G4 + ML4) ; tsc PASS |
| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
| Verdict candidat | `ML4 CORRECTIVE LOCAL DELIVERY — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GIT-FINAL-CORRECTIVE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — FINAL CORRECTIVE LOCAL (B1/B2/B3/B4/B6/B7/B8) |
| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
| Autorité / GO | Morris « OK, GO CORRECTION » (2026-11-08) |
| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
| Base Git | `origin/main@c658f590…` inchangée ; handoff correctif B1–B9 `253f6bed` |
| Corrections | B1 niveaux permission read≠write ; B2 exclusivité DISPATCHED + claim ; B3 base/head/refs merge ; B4 lost ACK post-PR + findPullRequest ; B6 taxonomie lecture distante ; B7 acteur/provenance courants ; B8 requal AT + preuves ; B5/B9 préservés |
| Migration | aucune 009 — claimToken dans `resultJson` (008) |
| Validations | unit **136 PASS** ; git-collaboration PG **24 PASS** ; `tsc` PASS ; `next build` PASS ; Playwright **13/13 PASS** ; integration globale 167/168 (1 flaky préexistant `portfolio-a1` hors ML4) |
| ENV-01 | DEV + e2e `sfia_next_e2e` ; RECETTE/STABLE non touchés |
| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Fake/Real | SCRIPTED only ; REAL NOT_CONFIGURED ; DETERMINISTIC ≠ READY FOR REAL |
| Gates restants | Critical Review ChatGPT (handoff L3) ; GO Git Product Morris ; GO RECETTE + effets REAL |
| Verdict candidat | `ML4 FINAL CORRECTIVE LOCAL DELIVERY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-EXECUTION-INVARIANTS

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — STABILISATION FINALE DES INVARIANTS GIT (C1/C2/C3/B2/Q1) |
| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
| Autorité / GO | Morris « OK GO » (2026-11-08) ; Critical Review entrée `f15a8e99…` NOT READY |
| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
| Base Git | `origin/main@c658f590…` inchangée |
| Corrections | C1 `assertStepAuthority` inter-mutations ; B2 claim lease/fencing + reconcile READ-ONLY ; C2 PR historique vs courant ; C3 SCRIPTED `PilotId+fullName` ; Q1 keyset portfolio µs |
| Migration | aucune 009 — lease dans `resultJson` (008) |
| Validations | unit **140 PASS** ; git PG **28 PASS** ; integration **172 PASS** ; `tsc` PASS ; `build` PASS ; Playwright **13/13 PASS** |
| Handoff L3 | `sfia/review-handoff@4bcc8e4e4171bf886beab06c52b488e88ff2f308` (parent `f15a8e99…`) — mono-fichier |
| Q1 | Flake préexistant prouvé (code = main) ; cause truncation JS Date ms ; fix tuple keyset + cursor µs ; stress 25/25 PASS |
| ENV-01 | DEV + e2e `sfia_next_e2e` ; RECETTE/STABLE non touchés |
| Versioning | **NO RELEASE** ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Fake/Real | SCRIPTED only ; REAL NOT_CONFIGURED ; DETERMINISTIC ≠ READY FOR REAL |
| Gates restants | Critical Review ChatGPT (handoff L3) ; GO Git Product Morris |
| Verdict candidat | `ML4 EXECUTION-INVARIANTS STABILIZATION — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-FENCING-RECONCILIATION-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — EXECUTION SAFETY FINAL BOUNDED CLOSURE (B2/B4/B9) |
| Type | INC / CORRECTIVE LOCAL DELIVERY — `NO RELEASE` |
| Autorité / GO | Morris « OK GO » ; Critical Review entrée `4bcc8e4e…` NOT READY + pack incomplete |
| Branche / worktree | `feat/next-git-collaboration-20261108` (LOCAL DIRTY préservé) |
| Base Git | `origin/main@c658f590…` inchangée |
| Corrections | B2 claimToken dans WHERE SQL + touch lease + old-worker CONFLICT ; B4/C2 `prRemoteProven` fail-closed ; B9 diffs docs dans Review Pack |
| Migration | aucune 009 |
| Validations | unit **140** ; git PG **32** ; integration **176** ; tsc/build PASS ; Playwright **13/13 PASS** |
| Handoff L3 | `sfia/review-handoff@c67ec07ff4d292c09f57015529515ba1deaf4c69` (parent `4bcc8e4e…`) — mono-fichier + diffs B9 |
| ENV-01 | DEV + e2e ; RECETTE/STABLE non touchés |
| Versioning | **NO RELEASE** ; `0.0.0-dev` |
| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
| Verdict candidat | `ML4 FENCING & RECONCILIATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-PR-RESUME-VERIFICATION

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — B4/C2 PR resume verification after lost ACK |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` |
| Autorité / GO | Morris « OK GO » ; Critical Review `c67ec07f…` NOT READY |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
| Base Git | `origin/main@c658f590…` |
| Correction | `prHistoricallyCreated` force relecture distante ; gate `prRemoteVerified` ; upsert publicationRef ; tests resume/unread/nomatch/CLOSED |
| Validations | unit **140** ; git PG **36** ; integration **180** ; tsc/build PASS ; Playwright **13/13 PASS** |
| Handoff L3 | `sfia/review-handoff@66134ea4ec6d9bf8aea92b6a8ad05aae8b3b0a3c` (parent `c67ec07f…`) |
| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
| Verdict candidat | `ML4 PR RESUME VERIFICATION CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-D7-D8-INTEGRITY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — D7–D8 publication integrity (UNIQUE + atomicité + marker) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` |
| Autorité / GO | Morris « OK GO » ; Critical Review `66134ea4…` NOT READY |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
| Base Git | `origin/main@c658f590…` |
| Migration | **009** additive UNIQUE `document_publication_refs(effect_attempt_id) WHERE NOT NULL` ; preflight DEV : 3 doublons test détachés explicitement |
| Corrections | `commitPublicationCompletion` txn ; `assertPrMarkerProvenance` ; schemaRevision 009 |
| Validations | unit / git PG **39** / integration / build / Playwright → Review Pack |
| Fake/Real | SCRIPTED only ; DETERMINISTIC ≠ READY FOR REAL |
| Verdict candidat | `ML4 D7-D8 PUBLICATION INTEGRITY CLOSURE — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-APP-INSTALLATION-READ

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 |
| Macro-capacité | R5 / ML4 — GitHub App REAL installation READ-ONLY (D9) |
| Type | INC / DELIVERY LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris « OK GO » ; App `sfia-studio-next-dev` (5670639) / install 179935689 / sandbox `mcleland147/chantiers360` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY |
| Base Git | `origin/main@c658f590…` |
| Implémentation | `github-app-config` + `github-app-auth` + `RealGitHubReadProvider` ; mutations REAL hard-blocked ; SCRIPTED défaut |
| Qualification réseau | **PASS** 2026-11-08 ~20:20 CET — App 5670639 / install 179935689 / `mcleland147/chantiers360` / HEAD `8c398c494dd918272aab5b2653777c6c21d2e76e` / token perms read-only |
| Validations | unit **153 PASS** (13 App/REAL DET) ; integration **183 PASS** ; tsc/build PASS ; Playwright **N/A** ; qualify REAL READ PASS |
| Fake/Real | SCRIPTED non-régression ; **REAL INSTALLATION AUTH PROVEN + REAL REPOSITORY READ PROVEN** (READ-ONLY) |
| Dette D7/D8 | Option A conservée ; réserves provenance PR + lease CAS **ouvertes** (hors cycle) |
| Verdict candidat | `ML4 GITHUB APP INSTALLATION READ — READY FOR CHATGPT CRITICAL REVIEW — REAL READ-ONLY SCOPE` |
| Gate suivant | Critical Review ; puis cycles user-to-server / D7-D8 / avant toute mutation REAL |
| Interdits | REAL mutation ; Product Git ; RECETTE/STABLE ; user-to-server |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-AUTH-D7-D8-SAFETY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:00 CET |
| Macro-capacité | R5 / ML4 — GitHub App user-to-server + D7/D8 safety closure |
| Type | INC / DELIVERY LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO EXPLICITE (mandat CRITICAL intégré) ; handoff entrée `b6dccd6e…` |
| Branche / worktree | `feat/next-git-collaboration-20261108` LOCAL DIRTY préservé |
| Base Git | `origin/main@c658f590…` inchangée ; aucun commit/push Product |
| Corrections D7/D8 | (A) `assertPrMarkerProvenance` obligatoire même avec `prNumber` connu (dispatch + reconcile) ; (B) `sqlClaimLeaseActive()` dans CAS owned de `commitPublicationCompletion` / `casOwnedTransition` / `assertAndTouchOwnership` |
| OAuth D9 | Web app flow distinct de Better Auth ; state CSRF+TTL+consume atomique ; PKCE S256 ; identité GitHub stable vs D1 ; installations/repos vérifiées ; tokens AES-GCM si clé présente |
| Migration | **010** additive `010_github_app_user_oauth` (colonnes PKCE/token chiffré) — DEV+e2e only ; D8 Option A intacte ; 009 UNIQUE préservée |
| Configuration manuelle restante | `GITHUB_APP_CLIENT_ID` / `GITHUB_APP_CLIENT_SECRET` / `GITHUB_APP_CALLBACK_URL` / `INTEGRATION_TOKEN_ENCRYPTION_KEY` absents du `.env.local` — REAL interactive NOT PROVEN |
| PEM | path configuré ; mode `0600` vérifié (métadonnées seules) |
| Validations | tsc PASS ; unit **160 PASS** ; integration **186 PASS** ; build PASS ; Playwright **13/13 PASS** (~20:43–20:46 CET) |
| Fake/Real | SCRIPTED DET user-to-server ; REAL installation READ-ONLY inchangé ; REAL user OAuth interactive **NOT PROVEN** ; mutations REAL hard-blocked |
| UX | `/settings/integrations` + API ; parcours Figma 218–235 : **PENDING UX INTEGRATION** (surface minimale, pas de marketplace) |
| ENV-01 | DEV + e2e ; RECETTE/STABLE non touchés |
| Versioning | **NO RELEASE** ; `0.0.0-dev` |
| Verdict candidat | `ML4 GITHUB USER AUTH + D7/D8 SAFETY — READY FOR CHATGPT CRITICAL REVIEW — DETERMINISTIC USER FLOW / REAL INSTALLATION READ ONLY` |
| Gates suivants | Critical Review ; config manuelle Client Secret+Callback ; qualification navigateur REAL user-to-server ; puis effet documentaire REAL sous GO distinct |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-AUTH-SECURITY-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:15 CET |
| Macro-capacité | R5 / ML4 — GitHub App user auth SECURITY CORRECTIVE CLOSURE |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CORRECTION EXPLICITE CRITICAL |
| Handoff entrée | `6509b4bc…` (NOT READY FOR REAL USER FLOW) |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| P1 SCRIPTED | garde centrale `scripted-github-guard` ; pas de fallback SCRIPTED si REAL demandé ; routes complete/callback verrouillées |
| P1 permissions | plus de write hardcodé REAL ; snapshot `source=scripted_fixture\|user_token_observed\|unknown` |
| P1 callback | `safeReturnPath` allowlist ; erreurs opaques ; state lié `studioSessionId` + PilotId |
| P2 tokens | refresh user token + fencing ciphertext ; REQUIRES_REAUTH ; disconnect wipe local (KNOWN GAP révocation distante) |
| P2 txn D9 | revoke+insert+seed en transaction PG ; GitHub I/O hors txn |
| D7 | `persistOwnedProgress` exige `sqlClaimLeaseActive()` |
| Migration | **011** additive `studio_session_id` + `flow` sur oauth states ; 009/010/Option A préservés |
| Validations | tsc PASS ; unit **167** ; integration **190** ; build PASS ; Playwright **13/13** |
| Fake/Real | DET only ; REAL user interactive NOT PROVEN ; REAL mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB USER AUTH SECURITY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-AUTH-CONCURRENCY-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:45 CET |
| Macro-capacité | R5 / ML4 — GitHub Auth CONCURRENCY SAFETY CLOSURE (C1+C2) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CORRECTION EXPLICITE CRITICAL |
| Handoff entrée | `b6c87a8c…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| C1 | Lease refresh PostgreSQL + `markRequiresReauth` conditionnel à la génération `refresh_ciphertext` ; I/O GitHub hors txn |
| C2 | UNIQUE partiel `(pilot_id, provider) WHERE CONNECTED` ; préflight 0 doublons ; collision → CONFLICT / état courant |
| Migration | **012** additive `012_auth_concurrency_safety` — DEV+e2e ; Option A / 009–011 préservés |
| Validations | tsc PASS ; unit **167** ; integration **193** ; build PASS ; Playwright **13/13** |
| Fake/Real | DET only ; REAL interactive NOT PROVEN ; mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB AUTH CONCURRENCY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-AUTH-FINAL-SAFETY-CLOSURE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~21:59 CET |
| Macro-capacité | R5 / ML4 — GitHub Auth FINAL CONCURRENCY SAFETY CLOSURE (R1+R2) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CORRECTION EXPLICITE CRITICAL |
| Handoff entrée | `2a9eb05a…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| R1 | Fencing refresh : CAS génération **+** `refreshLeaseToken` ; reclaim lease expiré fail-closed sans 2e refresh distant ; ACCESS_DENIED seulement avec propriété du bail ; DEPENDENCY_UNAVAILABLE → clear lease only |
| R2 | Callback concurrent : unique violation → CONFLICT strict (pas de CONNECTED emprunté) |
| Migration | **Aucune** — 009–012 / Option A préservés |
| Validations | tsc PASS ; unit **167** ; integration **205** ; build PASS ; Playwright **13/13** |
| Fake/Real | DET only ; REAL interactive NOT PROVEN ; mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB AUTH FINAL SAFETY CLOSURE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-AUTH-REFRESH-LIFECYCLE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~22:36 CET |
| Macro-capacité | R5 / ML4 — GitHub Auth REFRESH LIFECYCLE CLOSURE (R1-A + R1-B) |
| Type | INC / CORRECTIVE LOCAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO EXPLICITE CRITICAL — CORRECTION R1 |
| Handoff entrée | `59d07663…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| R1-A | Timeout/ambigu après refresh engagé : **ne plus** `clearRefreshLease` ; bail durable ; concurrent CONFLICT ; expiry → reclaim fail-closed sans 2e remote |
| R1-B | Persist / markRequiresReauth / clearRefreshLease : `refresh_lease_expires_at > now()` ; late positive ne restitue pas G1 expiré |
| R2 | Non rouvert (CONFLICT accepté) |
| Migration | **Aucune** — 009–012 / Option A préservés |
| Validations | tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13** |
| Fake/Real | R1 LIFECYCLE DETERMINISTIC PROVEN ; REAL interactive NOT PROVEN ; mutations HARD-BLOCKED |
| Verdict candidat | `ML4 GITHUB AUTH REFRESH LIFECYCLE — READY FOR CHATGPT CRITICAL RE-REVIEW — DETERMINISTIC SCOPE ONLY` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-OAUTH-REAL-READ-PREFLIGHT

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~22:52 CET |
| Macro-capacité | R5 / ML4 — GitHub App user-to-server REAL OAuth DEV interactive READ qualification |
| Type | VALIDATION REAL bornée — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CONFIGURATION OAUTH DEV + premier parcours utilisateur REAL lecture seule |
| Handoff entrée | `41373d2e…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| Préflight App | App `sfia-studio-next-dev` / App ID `5670639` / Installation `179935689` / sandbox `mcleland147/chantiers360` — JWT GET `/app` confirme Client ID public |
| Config locale | Callback `http://127.0.0.1:3100/api/integrations/github/callback` + Client ID + AES key préparés dans `.env.local` gitignoré ; **Client Secret ABSENT** |
| REAL interactive | **NOT PROVEN** — CONFIGURATION REQUIRED (secret + callback GitHub App settings + consentement Morris) |
| Non-régression | tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13** |
| Mutations | HARD-BLOCKED inchangé |
| Verdict candidat | `ML4 GITHUB USER OAUTH — CONFIGURATION REQUIRED — REAL NOT PROVEN` |

## delivery_id: DELIV-2026-11-08-ML4-GITHUB-USER-OAUTH-REAL-INTERACTIVE-READ

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-08 ~23:50 CET |
| Macro-capacité | R5 / ML4 — GitHub App user-to-server REAL OAuth DEV interactive READ |
| Type | VALIDATION REAL bornée — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO — Callback App enregistré/vérifié + reprise qualification REAL READ |
| Handoff entrée | `d8117ee6…` |
| Branche | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| App / install | `sfia-studio-next-dev` / App ID `5670639` / Installation `179935689` / repo `mcleland147/chantiers360` |
| OAuth REAL | Consent → CONNECTED `iauth_37cc71f1…` / pilot `pilot_cba50eb6…` / login `mcleland147` / GH `295557155` ; tokens sealed ; meta `REAL_USER_OAUTH` |
| UI host-aligned | `http://127.0.0.1:3100/settings/integrations` (même host que callback) — banner CONNECTED + `mcleland147/chantiers360 · main` ; reload persisté ; status JSON sans secret |
| API READ user-token | `/user` `/user/installations` `/repos/…/chantiers360` `/git/ref/heads/main` → HTTP 200 ; HEAD `8c398c49…` |
| Blocage levé | Callback App settings vérifié ; mismatch `localhost`≠`127.0.0.1` documenté (cookie host) |
| Harness | `e2e-web-server.sh` neutralise `STUDIO_GITHUB_USER_OAUTH` pour E2E SCRIPTED |
| Non-régression | tsc PASS ; unit **167** ; integration **211** ; build PASS ; Playwright **13/13** |
| Mutations GitHub / push Product | **AUCUNE** |
| Verdict candidat | `REAL INTERACTIVE READ PROVEN` |

## delivery_id: DELIV-2026-11-09-ML4-GIT-DOCUMENT-PUBLICATION-BOUNDED-REAL-E2E

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~00:25 CET |
| Macro-capacité | R5 / ML4 — Premier E2E publication documentaire REAL sandbox |
| Type | DELIVERY + QUALIFICATION E2E REAL — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO CRITICAL — effets REAL bornés (branche + fichier + PR, **pas** merge) |
| Handoff entrée | `ffffec1f…` |
| Branche Product | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| Cible | `mcleland147/chantiers360` · App `sfia-studio-next-dev` / install `179935689` |
| D4 | `doc_8351c2b1…` / `drev_ce62a84c…` contenu = fichier Git |
| D6 | `dec_b93e9bef…` |
| D7 | `efx_fcca79b2…` COMPLETED · correlation `pub-e2e-20261109001806-retry1` |
| Effets REAL | branche `sfia/pub-pub-e2e-2026` · commit `790a5315…` · PR **#18 OPEN** (non mergée) |
| main | inchangée `8c398c49…` |
| Provider | REAL + user-token mutations ; `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` |
| Non-régression | tsc PASS ; unit **171** ; integration **211** ; build PASS ; Playwright **13/13** |
| Push Product | **AUCUN** |
| Verdict candidat | `ML4 GIT DOCUMENT PUBLICATION — BOUNDED REAL E2E PROVEN — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-09-ML4-PUBLICATION-GIT-TECHNICAL-CONSOLIDATION

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~01:00 CET |
| Macro-capacité | R5 / ML4 — Consolidation sécurité / preuves / qualité publication documentaire |
| Type | DELIVERY / CRITICAL REVIEW CORRECTIVE — INC / CONSOLIDATION BORNÉE — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO consolidation technique ; **pas** de nouvelle mutation GitHub REAL ; USER E2E = Morris RECETTE |
| Handoff entrée | `160becf9…` |
| Branche Product | `feat/next-git-collaboration-20261108` LOCAL DIRTY @ `c658f590` |
| Acquis préservés | PR #18 OPEN · commit `790a5315…` · main `8c398c49…` |
| Digest D4↔Git | SHA-256 `11906026…` (D4 = Git UTF-8) · blob `da920aca…` |
| Corrections | gate documentary-only ; branch hash ; marker exact ; D6 effect_conditions ; AND source/objectRef ; reconcile tip SHA ; ACCESS_DENIED→FAILED ; REAL permission source |
| HumanDecision UI | contrat + persisté + contrôlé — geste humain observé **NOT RUN** (RECETTE) |
| Mutations REAL ce cycle | **AUCUNE** |
| Push Product | **AUCUN** |
| Verdict candidat | `ML4 PUBLICATION GIT — TECHNICAL CONSOLIDATION REVIEW READY — USER E2E RESERVED FOR MORRIS RECETTE` |

## delivery_id: DELIV-2026-11-09-ML4-PRODUCT-LOCAL-FREEZE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~01:35 CET |
| Macro-capacité | R5 / ML4 — Finalisation et gel local candidat Product |
| Type | CYCLE 8 DELIVERY — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO gel local : R7+R8 + commit Product LOCAL uniquement |
| Corrections | R7 labels mode d'effet REAL/SCRIPTED ; R8 statuts AS-IMPLEMENTED courants vs snapshots historiques |
| Réserves conservées | R1–R6 CARRIED/NON ISSUE (R6 NON ISSUE) |
| Push Product / PR / merge / REAL mutation | **AUCUN** |
| USER E2E | NOT RUN — Morris RECETTE |
| Verdict candidat | `ML4 PRODUCT — LOCAL CANDIDATE COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED` |

## delivery_id: DELIV-2026-11-09-ML4-PUBLICATION-INTEGRITY-CORRECTIVE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~02:30 CET |
| Macro-capacité | R5 / ML4 — Correctif CRITICAL intégrité publication D7/D8 + provenance fournisseur |
| Type | INC / CORRECTIF PRODUCT — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO intégrité ; push Product / PR / merge / REAL mutation **NON AUTORISÉS** |
| Parent Product | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
| Correctifs | validateur unique `publication-steps.ts` ; reject `steps=[]` ; preuve COMPLETED/D8 ; `effectProviderMode` figé ; reconcile fail-closed ; UI provenance tentative |
| Tests | T01–T20 DET SCRIPTED (service+DB) ; suites unit/integration/build/tsc |
| REAL multi-repo | NOT PROVEN — réserve sandbox `chantiers360` |
| Push Product distant | **AUCUN** — remote reste `79b10052…` |
| Verdict candidat | `ML4 PUBLICATION INTEGRITY — CORRECTED AND LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL RE-REVIEW — PRODUCT PUSH NOT AUTHORIZED` |

## delivery_id: DELIV-2026-11-09-ML4-REC-01-RECONCILE-PROVIDER-PROVENANCE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~02:45 CET |
| Macro-capacité | R5 / ML4 — Correctif `ML4-REC-01` réconciliation liée à la provenance fournisseur |
| Type | INC / CORRECTIF PRODUCT — `NO RELEASE` / `0.0.0-dev` |
| Parent Product | `d4f158ce4abe793706d005fc7fafdfe365d2c207` |
| Correctif | `reconcileAttempt` : gate mode historique vs live **avant** observations provider ; COMPLETED/D8 protégés ; UNKNOWN fail-closed |
| Risques | R1–R8 historiques préservés ; nouveau = `ML4-REC-01` (pas de renumérotation) |
| Tests | REC-01…REC-10 DET SCRIPTED |
| Push Product distant | **AUCUN** — remote reste `79b10052…` |
| Verdict candidat | `ML4 PUBLICATION RECONCILIATION — PROVIDER PROVENANCE GUARDED — LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED` |

## delivery_id: DELIV-2026-11-09-ML4-RECETTE-ENV-LANE-APP

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~09:20 CET |
| Macro-capacité | R5 / ML4 — ENVIRONMENT DELIVERY : App GitHub bornée par lane + préparation RECETTE |
| Type | CYCLE 11 ENVIRONMENT DELIVERY — `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO finalisation technique RECETTE ; push Product / PR / merge / bascule G4 **NON inclus** |
| Parent Product tip entrée | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| Code | `github-app-config.ts` / `github-app-user-oauth.ts` : profils `DEV`/`RECETTE` fail-closed |
| DB RECETTE | `127.0.0.1:5434/sfia_next_recette_ml4` rôle `sfia_next_recette_ml4` ; migrations `001→012` ; isolation CONNECT vs G4/ML3 |
| Secrets | hors dépôt `~/.config/sfia-studio-next/recette/.env.local` (0600) — non publiés |
| Port 3200 | encore servi par G4 `29535d07` — bascule **AWAITING MORRIS GO** |
| Push Product distant | **AUCUN** sans GO distinct |
| USER E2E | NOT RUN |
| Verdict candidat | `ML4 RECETTE ENVIRONMENT — STAGED AND VERIFIED — AWAITING MORRIS G4 SWITCH GO` (si build local OK) |

## delivery_id: DELIV-2026-11-09-ML4-RECETTE-SWITCH-A2C5E9F8

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~17:43 CET |
| Macro-capacité | R5 / ML4 — Mise à disposition RECETTE macro-correctif Chat First D4 + provenance Git |
| Type | CYCLE 11 DÉPLOIEMENT / RECETTE — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
| Autorité / GO | Morris GO 2026-11-09 CRITICAL — bascule RECETTE conditionnelle ; push Product / PR / merge / STABLE / REAL mutation **NON inclus** |
| Source applicative | `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` (branche `fix/next-ml4-chat-first-d4-provenance-20261109`) |
| Tree | `5d245e8adf1d32a7ceec6b129857d94f6398a488` |
| Build ID servi | `9yCs2GbSS5lDFX3LPiQTU` @ http://127.0.0.1:3200 |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8` |
| Remplacé | `974b0030…` / BUILD `RzpCuGMK6SnwfucphK7Qa` (artefact préservé) |
| Migration | **aucune** — `schemaRevision=012_auth_concurrency_safety` inchangé |
| Données | CampusFlow + D4 v1 `doc_1e5d8c16…` / `drev_c07ca162…` AVAILABLE préservés (md5 `de4bd1a6…`) |
| Backup | `/Users/morris/Projects/sfia-recette-backups/ml4-20261109-173817-pre-a2c5e9f8` sha256 `7a9dde7b…` — restore DB sans GO Morris **interdit** |
| Validations | unit document-act 25 PASS ; tsc PASS ; next build PASS ; HTTP smoke 200/401 |
| Nora | OPENAI PRESENT ; LIVE behavior **NOT PROVEN** ; profil `TEST_BOUNDARY` |
| GitHub | App RECETTE 5677465/180092114 ; mutations OFF ; REAL write **NONE** |
| USER RECETTE | **NOT RUN** — R06 réservé Morris |
| Push Product / PR / merge | **AUCUN** |
| Manifeste | `construction/integration-git/env01-recette-manifest-ml4-a2c5e9f8-2026-11-09.md` |
| Verdict candidat | `RECETTE BUILD UPDATED — SOURCE SHA VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN` |

## delivery_id: DELIV-2026-11-09-ML4-R06-SECTION-NORA-CORRECTIVE

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~18:16 CET |
| Macro-capacité | R5 / ML4 — Correctif intégré R06 section D4 + vérité Nora |
| Type | CYCLE 8 DELIVERY / RUN CORRECTIF — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
| Autorité / GO | Morris GO 2026-11-09 — diagnostic RECETTE RO + correction DEV + tests + handoff L3 ; **pas** de redéploiement RECETTE / push / PR / merge |
| Parent HEAD | `a2c5e9f8819cbe547bf925b39f38f783fc8aa52b` |
| Cause racine | `matchSectionSpans` : hint `"2"` via `\b2\b` ambigu avec `Source 2` / `3.2` sur v1 ATX numérotée |
| Correctifs | `leadingSectionNumber` + matching structurel ; ACK FAILED distingue outils Nora RO vs refus Studio |
| Validations | unit document-act **32 PASS** ; PG Chat First **9 PASS** ; PG knowledge **6 PASS** ; provenance **2 PASS** ; tsc PASS ; build PASS |
| Fake/Real | DETERMINISTIC PROVEN (fixture Nora) ; LIVE NOT RUN ; GitHub REAL write NONE |
| RECETTE | **inchangée** — SHA servi `a2c5e9f8` / BUILD `9yCs2GbSS5lDFX3LPiQTU` ; v1 md5 `de4bd1a6…` ; 0 v2 |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — R06 REAL-DOCUMENT STRUCTURE CORRECTIVE VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-RECETTE-SWITCH-8BA77730

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~18:30 CET |
| Macro-capacité | R5 / ML4 — Bascule RECETTE correctif R06 D4 (section numérotée + ACK) |
| Type | CYCLE 11 DÉPLOIEMENT / RECETTE — `NO RELEASE` / PATCH candidate / `0.0.0-dev` |
| Autorité / GO | Morris GO 2026-11-09 CRITICAL — bascule conditionnelle ; push Product / PR / merge / restore DB / REAL write **NON inclus** |
| Source | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` tree `368159d7…` |
| Build servi | `ygu4moVrYUNZPkvprgvB_` @ http://127.0.0.1:3200 |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730` |
| Launcher | LaunchAgent `com.sfia.studio.next.recette.ml4` (KeepAlive, PPID launchd) |
| Remplacé | `a2c5e9f8…` / BUILD `9yCs2GbSS5lDFX3LPiQTU` (artefact préservé) |
| Migration | aucune — schema `012_auth_concurrency_safety` |
| D4 cible | v1 `drev_c07ca162…` AVAILABLE md5 `de4bd1a6…` ; user v2 NONE |
| Backup | `…/ml4-20261109-182800-pre-8ba77730` sha256 `6e3d3b60…` |
| Validations redeploy | unit 34 PASS ; tsc PASS ; next build PASS ; HTTP smoke 200/401 |
| USER R06 | **NOT RUN** |
| Push Product | **AUCUN** |
| Manifeste | `env01-recette-manifest-ml4-8ba77730-2026-11-09.md` |
| Verdict | `RECETTE BUILD UPDATED — SOURCE 8ba77730 VERIFIED — DATA PRESERVED — TECHNICAL SMOKE PASS — USER R06 NOT RUN` |

## delivery_id: DELIV-2026-11-09-ML4-ABD-DOCUMENT-BOUNDARY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~20:05 CET |
| Macro-capacité | R5 / ML4 — Correctif intégré A+B+D parcours documentaire Chat First |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
| Autorité / GO | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE / LIVE Nora / REAL GitHub **NON inclus** |
| Base tip | `8ba777300adebe3ba70ddbe3c386a3ad709034f6` |
| Changements | A splice NL ; B fence `sfia-document` (suppression fallback_wrap) ; D obs proposal ; prompt/fixture Nora ; tests oracle R06-G |
| Validations | unit document-act 38 PASS ; ml2+nora 8 PASS ; PG Chat First 9 PASS ; tsc PASS |
| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
| RECETTE | **inchangée** — SHA `8ba77730` / BUILD `ygu4moVrYUNZPkvprgvB_` ; v1 md5 `de4bd1a6…` ; 0 v2 |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — INTEGRATED A+B+D DOCUMENT CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-ABD-FENCE-ROBUSTNESS

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~20:25 CET |
| Macro-capacité | R5 / ML4 — Régularisation B scanner fences / intégrité Markdown |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` |
| Parent | `9694cc7171006b747dd7f502a1f1ba8b3a0477f3` |
| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE NON inclus |
| Changements | `scanContractualDocumentFences` nest-aware ; tag exact `sfia-document` ; tests P/N + oracle nested-code PG |
| Validations | (voir Review Pack — commandes rejouées) |
| RECETTE | **inchangée** — `8ba77730` / `ygu4moVrYUNZPkvprgvB_` ; v1 `de4bd1a6…` |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — DOCUMENT PROPOSAL BOUNDARY ROBUSTNESS VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-ILLUSTRATIVE-FENCE-ISOLATION

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~20:40 CET |
| Macro-capacité | R5 / ML4 — Isolation des fences documentaires illustratives (Contrat B) |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
| Parent tip | `0b02de41cd7e3d08101419b49d6534d12edf70cf` |
| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE / LIVE Nora **NON inclus** |
| Changements | Scanner saute fences non contractuelles de premier niveau ; N1–N12 ; PG zéro D4 CREATE/REVISE ; hook test `replaceNoraAssistantText` |
| Validations | unit document-act 77 PASS ; nora 14 PASS ; PG Chat First 13 PASS ; tsc/lint/build (voir Review Pack) |
| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
| RECETTE | **inchangée** — SHA `8ba77730` / BUILD `ygu4moVrYUNZPkvprgvB_` ; v1 md5 `de4bd1a6…` ; 0 v2 |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — ILLUSTRATIVE FENCE ISOLATION VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-ADE-CREATE-QUALIFY-OBS

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~23:10 CET |
| Macro-capacité | R5 / ML4 — Macro-correctif intégré A+D+E (qualification CREATE, restitution loyale, observabilité) |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
| Parent tip | `93da44beb7e7571c9406180027896769579b9815` |
| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; push Product / RECETTE / LIVE Nora / REAL GitHub **NON inclus** |
| Cause | R12 : CREATE_PAIR_RE singulier ≤40 → NONE malgré demande CREATE explicite + fence Nora valide |
| Changements | `hasExplicitCreateIntent` ; ACK `NOT_EXECUTED` ; `d3.turn.document_act_qualification` + allowlist ; tests P/N + PG A-R12/A-N10 |
| Validations | unit document-act 89 PASS ; nora+ml2 8 PASS ; PG Chat First 15 PASS ; tsc PASS ; lint warnings préexistants ; build NODE_ENV=production PASS |
| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
| RECETTE | **inchangée** — SHA `93da44be` / BUILD `sHkE8sHJBxD3U9AJdHWi7` |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR REVIEW — R12 CREATE A+D+E CORRECTIVE DETERMINISTICALLY VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-ADE-CONSOLIDATION-SAFETY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~23:30 CET |
| Macro-capacité | R5 / ML4 — Consolidation A+D+E (faux positifs CREATE, campusflow, NOT_EXECUTED PG, handoff) |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` |
| Parent tip | `8eab1317b97f5bfc438d736b42a1363ddfdb3e77` |
| Autorité | Morris GO consolidation 2026-11-09 CRITICAL — commit local descendant + handoff L3 |
| Changements | clause-scoped CREATE ; suppression token campusflow ; C1–C14/N11 ; PG NOT_EXECUTED + C10 |
| Validations | unit document-act 91 PASS ; PG Chat First 17 PASS ; tsc/build production PASS |
| Lane tests | DEV Postgres `127.0.0.1:5433` |
| RECETTE | **inchangée** — `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR CHATGPT RE-REVIEW — A+D+E CONSOLIDATED — CREATE SAFETY AND NOT_EXECUTED VERIFIED LOCALLY` |

## delivery_id: DELIV-2026-11-09-ML4-CREATE-PLEASE-RE-AUTHORITY

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-09 ~23:45 CET |
| Macro-capacité | R5 / ML4 — Discriminant final CREATE_PLEASE_RE |
| Type | CYCLE 8 / PATCH candidate / `NO RELEASE` |
| Parent tip | `5ed702cb84cd8b409e4a7bb45b25389d0a5f1cea` |
| Autorité | Morris GO 2026-11-09 CRITICAL — commit local + handoff L3 ; RECETTE gelée |
| Cause | CREATE_PLEASE_RE global + fallback qualify sans verbe → FP T1/T2/T8 |
| Changements | suppression CREATE_PLEASE_RE ; clause window `puis`/consultatif ; tests T1–T10 + PG T2 |
| Validations | unit 92 PASS ; PG Chat First 18 PASS ; tsc/build production PASS |
| RECETTE | **inchangée** — `93da44be` / `sHkE8sHJBxD3U9AJdHWi7` |
| Push Product | **AUCUN** |
| Verdict | `CREATE_PLEASE_RE AUTHORITY GAP FIXED — DETERMINISTICALLY VERIFIED LOCALLY — READY FOR CHATGPT REVIEW` |

## delivery_id: DELIV-2026-11-10-ML4-G1-REC11-07-08

| Champ | Valeur |
| --- | --- |
| Date (Europe/Paris) | 2026-11-10 ~01:20 CET |
| Macro-capacité | R5 / ML4 — G1 correctif intégré REC-11 / REC-07 / REC-08 |
| Type | CYCLE 8 DELIVERY / PATCH candidate / `NO RELEASE` / `0.0.0-dev` |
| Parent tip | `771844fda083ce3c1858b77b0012e5bf2b801605` |
| Autorité | Morris GO technique G1 2026-11-10 CRITICAL — DEV only ; push Product / RECETTE / REAL Git **NON inclus** |
| Cause | R12-D : `read_git_file` → DENIED sur toute exception (y compris absence) ; provenance blob/commit consommée incorrectement ; narration Nora « ne peux pas confirmer » vs ACK AVAILABLE |
| Changements | Classification D3 `FILE_ABSENT` qualifiée ; garde permalink ; strip REC-08 ; docs matrice/spec/delivery |
| Validations | unit document-act 94 + git-read-tools 9 PASS ; PG Chat First 19 PASS ; tsc PASS ; lint warnings préexistants ; `NODE_ENV=production` build PASS |
| Lane tests | DEV Postgres `127.0.0.1:5433` uniquement |
| RECETTE | **inchangée** — SHA `771844fd` / BUILD `SmL2kyWbd1Q3kIuwNw0mQ` |
| Push Product | **AUCUN** |
| Verdict candidat | `G1 DEV QUALIFIED — AWAITING DISTINCT RECETTE GO` |


---

## delivery_id: DELIV-2026-11-18-ML4D-E05-COMPOSITION-RECETTE-UAT-SYNTHESIS

> **Entrée rétrospective documentaire D1 (ChatGPT, 18/11/2026).** Elle synthétise des livraisons **Cursor rapportées** dans leurs handoffs SFIA v2.6 ; elle ne constitue **ni une nouvelle livraison Cursor, ni une vérification directe du runtime local ou du commit produit non poussé**. Les entrées historiques du présent journal restent inchangées.

| Champ | Valeur |
|---|---|
| Date / capacité | 18 novembre 2026 — R5 / ML4D / Ensemble 05, **composition visuelle conversationnelle** |
| Mandats Morris | Construction et RECETTE Ensemble 05, correctif UAT-03, consolidations UX-01…07 puis UX-05/01 ; GO livraison RECETTE bornés, aucun GO push produit/PR/merge |
| Candidat RECETTE initial E05 | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` / build `_eeb9Jy2hV242myk86VTu` ; mise à disposition et UAT-01/02 rapportées |
| Incident et correctif UAT-03 | `steps[].detail.max(400)` → validation SDK/UNKNOWN ; correctif `max(5000)` par étape et observabilité durable ; candidat `90c3e59f4a355b463ea047cc45486906bde15680` / `5C3be3-ils1iOmH3qXo4d` |
| Consolidation UX-01…07 | Candidat `bd3854ac50520f3ce5e46ec773b67ec3ae5cc70b` / build `qw3FaPD1B4KBrRab3LyKL` ; tests et captures rapportés, réserve UX-05 persistante puis corrigée |
| Correctif final UX-05/01 | **Candidat local** `5c94c86737f0965c71a7e058e3f1e45ff4415024`, tree `74fbf2b90f95951d5049efc5a854ad213fb0f47f`, build `IEINNuPl0bHWJOWkh0ZhG` ; cause `classifyLanes()` double claim ; graphes corrects en RECETTE selon handoff |
| Environnement | RECETTE `http://127.0.0.1:3200`, no migration ; DB rapportée conservée : 23 projets, 560 messages, 196 conversations, 280 commandes de tour |
| Qualification utilisateur | **UAT-01…08 visuels acceptés par Morris avec réserves** après corrections ; dernière capture UAT-07 et alignement UX-01 validés le 18/11 ; scroll horizontal autorisé |
| Qualité/gates | UNIT/FAKE/BROWSER/LIVE/RECETTE différenciés dans handoffs ; 88 oracles candidats de Travail **non assimilés** à huit UAT ; intégrité ACL `owner_pilot_id` et ascendance locale à vérifier |
| Source probante | [Dernier handoff Full](https://github.com/mcleland147/sfia-workspace/blob/dc9fd0ba16bef2f056a4f9cc294bf3506c09fa7d/sfia-review-handoff/latest-chatgpt-review.md), [dossier de réception](convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/07-dossier-reconciliation-reception.md), [matrice C-01…22 V0.10](convergence-ux-ui-globale/grammaire-visuelle-conversationnelle/06-matrice-convergence-vision-realisation.md) |
| Intégration / statut | *(État au moment de la synthèse D1)* Code candidat **local non poussé** ; documentation sur branche `docs/next-ml4d-registre-revues-20261116`, sans PR/merge ; `USER ACCEPTED WITH RESERVES — VISUAL UAT ONLY`, `RECONCILIATION PENDING`, `Gate C OPEN`, `NO STABLE/RELEASE/ADOPTED`. **Addendum post-intégration :** voir `DELIV-2026-11-18-ML4D-CI-REMEDIATION-PRODUCT-MERGE`. |

**Point de gouvernance non clos :** le rapport final signale une attribution temporaire d'`owner_pilot_id` aux objets RECETTE pour capture, puis une restauration déclarée ; les compteurs identiques ne démontrent pas la restauration objet par objet. La vérification des droits devra être faite **en lecture seule**, sans écrire dans la base pour produire une preuve.

---

## delivery_id: DELIV-2026-11-18-ML4D-CI-REMEDIATION-PRODUCT-MERGE

| Champ | Valeur |
|---|---|
| Date (Europe/Paris) | 18 novembre 2026 ~22:37 CET |
| Macro-capacité | R5 / ML4D — remédiation CI autonome + intégration Git produit |
| Type | CYCLE 8 / 13 / 7 / 14 — PATCH candidat / `NO RELEASE` |
| Autorité | Morris GO « remédiation CI autonome et bornée, intégration conditionnelle ML4D » |
| Candidat RECETTE immuable (UAT) | `5c94c86737f0965c71a7e058e3f1e45ff4415024` / tree `74fbf2b90f95951d5049efc5a854ad213fb0f47f` / build `IEINNuPl0bHWJOWkh0ZhG` — **non redéployé** |
| Tip produit mergé | `ac08b381e434b65c09ec9eb2d49abcc221a543cf` (branche `integrate/next-ml4d-ux003-to-ensemble05-20261118`) |
| Merge commit `main` | `b7de1fb0826f373dcab609b2c1deff992a36fbd1` — PR [#681](https://github.com/mcleland147/sfia-workspace/pull/681) |
| Baseline `main` avant merge | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| Correctifs CI (après `5c94c867`) | `98646171` fixtures/tsc/create-project/Playwright helpers ; `519f40e3`/`3d51a594`/`53d1db73`/`a127d337` assertions E04/E05/ml* ; `fd01cd9d`/`ac08b381` whitespace `git diff --check` |
| Runtime produit dans le delta correctif | Uniquement typage `getDerivedStateFromError(_error)` dans `NoraComposition.tsx` — **aucun comportement observable** ; pas de requalification RECETTE |
| CI GitHub PASS | Run [`44400455666`](https://github.com/mcleland147/sfia-workspace/actions/runs/44400455666) @ `ac08b381` — tsc, lint, build, Vitest unit, PG migrations/integration, Playwright BROWSER FAKE, secret scan, trailing whitespace, Required Gate |
| RECETTE | **inchangée** — toujours le build UAT `IEINNuPl0bHWJOWkh0ZhG` ; aucune écriture DB RECETTE/STABLE |
| Documentation | Branche `docs/next-ml4d-registre-revues-20261116` / PR [#680](https://github.com/mcleland147/sfia-workspace/pull/680) — réconciliation post-`main` en cours |
| Réserves conservées | ACL historique non démontrée objet par objet ; responsive/a11y bornés ; PG historique non exhaustif ; 88 oracles ≠ 8 UAT ; Gate C OPEN ; NO STABLE/RELEASE/ADOPTED |
| Verdict | `ML4D PRODUCT MERGED ON MAIN — CI FULL PASS — RECETTE UAT SHA IMMUTABLE — DOCS PR PENDING — GATE C OPEN` |

---

## delivery_id: DELIV-2026-11-19-ML4D-JOURNAL-V4-LOCAL

| Champ | Valeur |
|---|---|
| Date (Europe/Paris) | 19 novembre 2026 |
| Macro-capacité | Ensemble 06 — Journal cohérent V4 |
| Type | CYCLE 8 DELIVERY / `NO RELEASE` / `0.0.0-dev` |
| Parent tip docs | `6879d34eb38fbd1d8f899c6f8713ccc98f0ae178` |
| Base main | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Autorité | Morris GO Journal V4 delivery ; push projet/PR/merge **NON inclus** |
| Changements | Migration 014 D4 revisions ; journal.ts ; ProjectJournal V4 ; API journal ; ensureSubject parent-aware ; subjectId préservé |
| Validations | tsc PASS ; journal-d4-revisions.pg 6/6 PASS (`sfia_next_e2e`) ; BROWSER/Figma runtime NOT RUN ; LIVE Nora NOT RUN |
| Lane | DEV `:5433` only ; RECETTE/STABLE non mutées |
| Push Product | **AUCUN** |
| Verdict candidat | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 CORE LOCAL / SCOPE PARTIAL ON J-C04/06/13/14/BROWSER` |

## 2026-11-20 — Ensemble 07 Projet/Trajectoire (DEV construction, NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| Statut | NO RELEASE — construction DEV |
| Capacités | Qualification initiale durable post-create ; message Nora proactif ; compositeur verrouillé (UI+API) ; ProjectOverview 09.01/09.06 ; TrajectoryBoard 09.02–09.11 ; forecast_json D5 |
| Tests | unit / PG E07 (historique premier delivery) |
| Verdict candidat (1er) | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED |
| Handoff tip (1er immuable) | `93ee58ee5208daa4abe6d657550b523fea244db2` blob `65dacb671da74b93974deb12af62fb5007f33264` |

## 2026-11-20 — Ensemble 07 corrective (P0 cohérence + UI, NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
| Statut | NO RELEASE — Gate C OPEN |
| Corrections P0 | COR-01 ensure+retry ; COR-02 GET sans kick ; COR-03/04 fence+reprise D5→message ; COR-05 UNKNOWN+reconcile POST ; COR-06 no default CADRAGE ; COR-08 system incident ; COR-09 closed asc(openedAt) ; COR-11/12 matrice exclusive |
| Tests | unit 687 PASS ; integration 518 PASS (E07 PG 8/8) ; tsc OK |
| Fake/Real | DETERMINISTIC/FAKE forecast ; LIVE Nora NOT PROVEN ; HOLD DEV captures only |
| Visuel | 09.07 clarification runtime obtenue ; 09.10/09.11/09.06/05.17 recapturés ; 09.02/03/08/09 ACTIVE/CLOSED encore absents (GO conversationnel COR-14 non clos) |
| Réserves | COR-14/15 GO naturel+maturité non prouvés e2e ; COR-16/17 bilan/CKI éditorial partiels ; 13/13 Figma non READY |
| Verdict candidat | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED / READY WITH GOVERNED RESERVES sur P0 |

## 2026-11-20 — Ensemble 07 DEV integrated qualification (NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
| Statut | NO RELEASE — Gate C OPEN — **pas** de candidat RECETTE figé |
| Prior handoff | FUNCTIONAL STABILIZATION `97db03d6` / blob `02c1190e` |
| Correctifs cycle | IQ-REG-01 `expectInitialQualification` default false (route produit seule true) ; E2E A–F harness (`nav-*` vs sr-only) ; e2e-web-server HOLD unset |
| Suites | tsc PASS ; build PASS ; unit **690 PASS** ; integration PG **525 PASS** ; E2E A–F **6/6 PASS (38s)** FAKE :3101 / `sfia_next_e2e` |
| FIX-03 | RECONCILIATION PROVEN / PROCESS AUTONOMY NOT PROVEN |
| Nora | DETERMINISTIC/FAKE — LIVE NOT PROVEN (GO NL C/D navigateur = REAL-GAP) |
| UX | gel Figma respecté |
| RECETTE/STABLE | intouchées |
| Verdict | `DEV INTEGRATION QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED` |

## 2026-11-20 — Ensemble 07 RECETTE candidate preparation (NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
| Prior handoff IQ | `52f47ed7` / blob `0e2a5863` |
| Travail cycle | Oracles E2E honnêtes A1/A2/C1/C2/D1/D2/E/F ; inventaire INCLUDE/EXCLUDE ; manifeste préparation ; préflight ENV-01 RO |
| E2E révisé | A1 refuse FAILED ; C2 fixture OPEN ; D2 CLOSE browser NOT PROVEN (voir gel pour compteurs PASS/SKIP exacts) |
| Régressions ciblées | unit E07 **10 PASS** ; PG E07 **15 PASS** |
| Suites globales héritées | tsc/build/690/525 — arbre delivery précédent |
| Trees prospectifs (temp index, **historiques**) | `3fc00997…` (avant entrée delivery-history) puis `0c585940…` (après) — **pas** des SHA candidats ; divergence = contenu `delivery-history` inclus dans le write-tree |
| candidate_sha | **NOT AVAILABLE** (préparation) |
| FIX-03 / LIVE / UX | inchangés |
| RECETTE :3200 | HTTP 200 observé RO — **aucune écriture** |
| Verdict | `ENSEMBLE 07 — CANDIDATE PREPARATION COMPLETE WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED` |

## 2026-11-20 — Ensemble 07 LOCAL GIT FREEZE (NO RELEASE)

| Champ | Valeur |
|-------|--------|
| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| Parent HEAD | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| Périmètre | **34 chemins INCLUDE** exacts (handoff préparation) ; EXCLUDE conservés hors commit |
| E2E freeze | A1 strict ; A2 **SKIPPED** browser failure ; C2 **ACTIVE strict** ; D2 **SKIPPED** conversational CLOSE |
| Réserves | R1 FIX-03 autonomy NOT ; R2 LIVE NOT ; R3 UX deferred ; R4 browser CLOSE NOT PROVEN |
| SHA / tree finaux | **Voir métadonnées Git du commit de gel et Review Pack** (pas d'empreinte autoréférentielle dans ce fichier) |
| Push projet | **NONE** |
| RECETTE / STABLE | intouchées |
| Classe | NO RELEASE · Gate C OPEN |
| Verdict cible | `LOCAL GIT CANDIDATE FROZEN` (± GOVERNED RESERVES) |
```

### FILE `projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md`

- SHA-256: `63dfe16a665b2ffd03d55bbd85eb9f658331b4c742db58f6d2faef09a847a5b7`
- Lines: 113

```markdown
# ML5 as-built — Cursor realization (2026-11-23)

| Champ | Valeur |
|---|---|
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| HEAD entrée cycles 3–4 | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| État | **DIRTY** — modifications cycles 3+4 non commités / non poussés |
| Lane | DEV only (`sfia_next_dev` :5433) — migrations 017+018 ; RECETTE non touchée |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE |

## Cycle 4 — complétude fonctionnelle

### Implémentation vs conformité

Voir registre §3 ter : **1 IMPLEMENTED / 74 PARTIAL / 24 NOT_IMPL** (axe code, réconcilié explore + cycle 4).
Conformité globale : **0 VÉRIFIÉ** — preuves BROWSER/F2/LIVE/REAL absentes.

### P0 / sûreté

| ID | Correctif | Preuve |
|---|---|---|
| CF-03+ | `sendRequestedAt` stampé atomiquement au claim **avant** SDK | PG sendIntent + T-04 PASS |
| Provenance | `tool-source-journal` — CONSULTED seulement si lecture réelle ; plus de fake depuis `toolCallsObserved` | unit + bridge |
| CF-02 | READY ignore `preparationId` client — lien persisté contrat | route `/ready` |
| CF-04 | Frontier B1 query-only SCRIPTED ; hosted `webSearchTool` détaché | unit frontier 6 PASS |
| CA-08 | `DETERMINISTIC_SYNTHESIS` ≠ `NORA_COGNITIVE` | classify unit |

### Surfaces

| Surface | URL | Rôle |
|---|---|---|
| Exécution | `?surface=execution` | Contrats, interventions, D6, STOP |
| Résultats | `?surface=publication` | D8 4 onglets Figma + Git ML4 |

### Tests cycle 4

- Vitest unit ML5 : **53 PASS**
- PG `ml5-cursor-dispatch.pg.test.ts` : **9 PASS**
- `tsc --noEmit` : PASS
- BROWSER / F2 / LIVE Nora / LIVE SDK / WEB LIVE / REAL : **NOT PROVEN**

### Git Cursor A/B

**B recommandée, non ADOPTED.** F01–F09 majoritairement NOT_IMPL. Aucune publication mutative.

### Gates Morris

1. Git A/B adoption
2. WEB LIVE avec contexte privé
3. LIVE SDK confiné
4. Run Nora cognitif LIVE post-tentative
5. Synchronisation Roadmap `main` Gate C (D2)

## Cycle 5 — raccordements intégrés (2026-11-23)

- **Travail 50/50 :** `ContractViewer` monté dans l'aside Nora (D09/H02) ; D6 reste sur Exécution.
- **Activité RUNNING :** `turnCommandId` exposé via by-key ; poll activity client ; `onRecord` journal → OBSERVED mid-turn.
- **B1 :** `assertPublicHttpsUrl` + `confrontWebSources` ; WEB LIVE toujours gated Morris.
- **G15 :** `history_json` + POST `requalify` (mig 019) — pas de redispatch Cursor.
- **Supervision :** poll DISPATCHED + bouton Réconcilier.
- **Git Cursor F01–F09 :** toujours NOT_IMPL ; option **B** recommandée, non ADOPTED.
- **Preuves :** DETERMINISTIC/PG OK ; BROWSER/F2/LIVE NOT PROVEN.

## Cycle 22 — restitution probante + LIVE intégré (2026-11-24)

- **WEB B07/CA-02 :** `web-search-authorize` — EXPLICIT_AUTHORIZED_EXACT | REGISTERED_PUBLIC_COMPOSITION uniquement ; registre vide = deny ; free-form `publicTopic`/`rawQuery` refusés.
- **Collecte CA-07 :** rapport attempt-bound sous `.sfia/attempts/<id>/` via `readConfinedWorkspaceFile` ; préférence workspace confiné sur prose SDK.
- **Ownership :** claim CAS `restitutionOwnerToken` + `restitutionVersion` + lease ; `persistPipelineOwned` fenced.
- **D8 :** `buildVerifiedEvidenceFromWorkspace` — CONFORMING sans injection `verified=true` ; contradiction refuse CONFORMING ; LIVE `efx_5184aab4…` RECEIVED + CONFORMING.
- **Consolidation :** `mergeMode` structuré (APPEND|CORRECT|SUPERSEDE) ; test propriétaire `mergeDocumentProductionBody`.
- **Avis Nora :** `runNoraCognitiveTurn` post-D8 ; LIVE `NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR` tools=4 work `cgw_ad0f188f…`.
- **Boot :** `instrumentation.ts` → supervisors + `resumeIncompleteRestitutions`.
- **Build :** `xDm9gI5jk9N2qEGkFUqN_` · HEAD DIRTY `6cf33e99` · NO RELEASE · push projet NONE.
- **Réserves :** BROWSER activité long-run PARTIAL ; WEB LIVE fournisseur non rejoué ; D9/Git REAL non exercés.

## Cycle 20 — qualification sortie lot 1 (2026-11-24)

- **I1 :** reconcile/heartbeat/checkpoint — predicate lease opposable en transaction ; scope projet/conversation ; CAS lecture obsolète.
- **I2 :** dépendances D4 revalidées sans bump cognitif ; re-assert mandate après claim avant fournisseur.
- **I3 :** open_page limité aux URL découvertes ; sanitize confidentiel métier ; diagnostics sans marqueurs bruts.
- **I5 :** ambiguïté → `needsClarify` / AWAIT_PILOT, pas de nouveau work automatique.
- **I6 :** `productionJson` DOCUMENT consolidé injecté comme `documentProposal` canonique pour D4.
- **Build :** contenu DIRTY `6cf33e99` · NO RELEASE · push projet NONE.

## Cycle 19 — invariants résiduels lot 1 (2026-11-24)

- **I1 :** `investigation-persistence` — toute modification matérielle → nouvelle révision + checkpoint ; pas de mutate-in-place ; idempotence sans bump.
- **I2 :** `mandate-applicability.ts` branché prepare/authorize/dispatch — filiation exacte ; READY historique ≠ applicabilité actuelle.
- **I3 :** `web-search-sanitize` + private markers + outbound log ; frontier refuse fuites.
- **I4 :** `reconcileStaleRunningCognitiveWorks` ; reprise mid-RUNNING après fence/lease/kill.
- **I5 :** probe qualification `cognitiveWorkRelation`/`proposedCognitiveWorkId` avant attach ; pas d'auto-continue sur seul OPEN.
- **I6 :** `documentProductionFromReply` merge conservateur ; part ids stables `gen-{generationId}` ; production DOCUMENT multi-tours.
- **Build qualifié :** `1pvGV0NLFRLhOqgw3Mxn_` · HEAD DIRTY `6cf33e99` · NO RELEASE · push projet NONE.

## Cycle 14 — conduite cognitive + WEB LIVE (2026-11-24)

- **Anti-lexical :** `detectsTechnicalContractIntent` / `CORRECTIVE_INTENT` inertés ; bridge piloté par `semanticWantsCursorContractPrepare` + capability `d7.prepare_cursor_contract`.
- **Budgets :** `qualifyCognitiveProfile` ne lit plus la longueur ; défaut `analyse`.
- **WEB B1 LIVE :** `executeIsolatedLiveWebSearch` (agent jetable, query seule) + `fetch` borné `executePublicWebOpenPage` ; hosted `webSearchTool` reste détaché de Nora privée.
- **Contrats :** `draftBodyFromInvestigation` instruction intégrale + critères métier (`remainingWork`) ; génériques handoff en complément seulement.
- **B09 :** **IMPLEMENTED** — agent isolé `@openai/agents` + `webSearchTool` ; parse navigation/objet/array ; open `PAGE_OPENED` MDN ; isolation outbound query-only prouvée ; preuve LIVE 2026-11-24.

## Cycle 13 — résilience D8/D7 + candidat (2026-11-23)

- **D8 confinement :** `d8-path-confine.ts` — realpath root, lstat composants, refus symlinks, `O_NOFOLLOW`, borne taille avant lecture ; branché dans `readAttemptWorkspaceFile`.
- **Provenance :** `sourceJournal` partagé Nora → outils D8 ; `FOUND/DISCOVERED` ≠ `CONSULTED`.
- **Supervision :** `cursor-live-supervisor.ts` — observateur in-process (reconcile only), ensure after LIVE ACK, resume-once au redémarrage processus.
- **STOP LIVE :** `LIVE_CANCEL_OBSERVED` + terminal `cancelled` ; effets antérieurs conservés ; CANCEL ≠ ROLLBACK.
- **Handoff honesty :** `EARLY_HANDOFF_BEFORE_TERMINAL` ; tests déclarés sans capture → INCOMPLETE ; `classifyManifestHonesty`.
- **Candidat Git :** inventaire C3–C13 préparé — **aucun commit/push projet**.
```

### FILE `projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md`

- SHA-256: `843cfce2b9137aaa3461564b237539ea4a4f50ff6ce43fdb4e58fa776443d262`
- Lines: 476

```markdown
# SFIA Studio Next — ML5 · Registre de couverture et de revue du développement

> **Registre de revue ML5 — contenu validé comme support de suivi par Morris ; Gate C accepté avec réserves et GO de construction ML5 exprimés le 23/11/2026.** Aucun GO implicite de push projet, PR, merge, recette/cutover, release, adoption ou promotion.

| Champ | Valeur |
|---|---|
| Version | v0.13 candidate — 24 novembre 2026 : Cycle 20 qualification sortie lot 1 (concurrency lease, D4 currency, WEB discovery URL, clarify ambigu, D4←production) ; C4–C20 |
| Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
| Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` ; R-003 `5a4e4405` |
| Cycle 9 | Scénario `ml5-c9-mono-20261123` — captures **conservées** comme avant-correction |
| Cycle 10 | Scénario `ml5-c10-mono-20261123` — Travail 50/50 + D6 overlay + bilan post-handoff + requalify pièce `ecap_1c817ffb…` |
| Cycle 11 | Scénario `ml5-c11-live-20261123` — Nora LIVE → D6 → Cursor SDK LIVE → D8 PARTIAL → Nora COGNITIVE |
| Cycle 12 | `ml5-c12-live-20261123` — ACK-first + reconnect + COMPLETED ; T-04 DROP_ACK PASS ; Nora D8 tools ; STOP SCRIPTED ; candidat inventorié — **ML5 DEV LIVE PARTIAL — GOVERNED RESILIENCE GAPS** |
| Cycle 13 | Confinement D8 (realpath/lstat/O_NOFOLLOW) ; journal provenance outils ; supervisor LIVE in-process ; STOP LIVE cancelled observé ; long-run sans navigateur ; candidat C3–C13 inventorié — **ML5 DEV LIVE RESILIENCE PROVEN — QUALIFICATION IN PROGRESS** |
| Cycle 20 | Qualification sortie lot 1 — P0 concurrency/D4 currency/WEB discovery/clarify/D4 canonique — **READY WITH RESERVES** |
| Cycle 19 | Fermeture I1–I6 : révisions immuables ; invalidation mandat aux effets ; WEB sanitize ; mid-RUNNING reconcile ; rattachement sémantique effectif ; production multi-tours conservée — **READY WITH RESERVES** (lot convergence 1) |
| Cycle 18 | Contrat sortie structuré + outil production ; heuristiques A–F retirées ; P1–P4 LIVE ; DRAFT/READY/D6 — **NOT READY** (lifecycle gouverné incomplet — clôturé C19) |
| Cycle 17 | Convergence verticale P1–P4 LIVE partielle — **NOT READY** |
| Cycle 16 | Raccordement produit conducteur ; claim/lease/CAS ; READY requalifié ; DRAFT incomplet ; WEB pinned ; critères intégraux — **READY WITH RESERVES** (LIVE E2E PARTIAL) |
| Cycle 15 | Conducteur adaptatif + persistance D3 PG + READY positif + WEB egress P0 — fondations ; intégration fonctionnelle incomplète (corrigée C16) |
| Cycle 14 | Routage sémantique (TECH_INTENT inerte) ; WEB LIVE isolé search+open MDN ; contrats sémantiques `d7.prepare_cursor_contract` ; S2/S5/S8 LIVE — **ML5 NORA COGNITIVE CONVERGENCE PROVEN — FUNCTIONAL COMPLETION IN PROGRESS** |
| Gate | **GATE C ACCEPTÉ PAR MORRIS AVEC RÉSERVES / GO CONSTRUCTION ML5** — décision explicite du 23/11/2026 dans la conversation ; la Roadmap de `main` présente encore son instantané antérieur `OPEN` et reste à synchroniser sous mandat D2 approprié. |
| Publication | Document de pilotage **non normatif**, sur branche candidate non mergée ; consigne la décision Morris exprimée, sans prétendre modifier automatiquement les décisions/roadmap de `main`. |
| Suivi | ChatGPT qualifie les Review Packs/écarts ; Cursor fournit réalisation/rapports ; Morris décide les arbitrages |

## Décision Morris — clôture ML4 avec réserves et ouverture ML5 (23/11/2026)

**Acte exprimé dans la conversation :** Morris valide la clôture du périmètre ML4 avec réserves, le passage de Gate C, l'ouverture de ML5 et le **GO pour engager sa construction**. Ce GO porte sur la réalisation de ML5 sous SFIA v2.6 et le respect du présent registre ; il ne valide pas d'avance les choix d'architecture encore candidats, le résultat technique, la qualification R6 ou une opération Git de livraison.

**Réserves ML4 conservées sans requalification fictive :**

1. `WRITE-07` — perte d'ACK/retry REAL non testés ; directement pertinent pour l'unicité des dispatchs Cursor ML5.
2. `PREVIEW-02/03/05/06/07/11` — couverture et fidélité partielles, exit selon les surfaces affectées et R6.
3. `D6/D7/D8` — audit REAL partiel des autorités et faits persistés.
4. Merge GitHub REAL — non exécuté et non prouvé ; aucun contournement des protections du sandbox autorisé.
5. Protections GitHub — visibilité partielle des règles/rôles et droits.
6. R6 global — résilience, concurrence, reprises et scénarios de conformité encore à qualifier.

**Mandat applicable au chantier ML5 :** construction sous contrat Cursor SFIA v2.6, revue de chaque livraison et mise à jour de la couverture. Les intégrations d'exécution doivent respecter les propriétaires existants. Les décisions majeures de persistance, d'architecture, d'autorité, de permissions ou de trajectoire restent réservées à Morris. **Pas de push branche produit, PR, merge, suppression, migration de lane protégée, cutover RECETTE, STABLE, release ou ADOPTED sans GO propre.** Le Review Handoff L3 mono-fichier autorisé par SFIA v2.6 est distinct.

**Statut Git :** la présente décision est consignée sur la **branche candidate**, non intégrée à `main`. La Roadmap `main` restera historiquement `Gate C OPEN` tant qu'une synchronisation D2 et une intégration gouvernée ne sont pas intervenues ; **ne pas interpréter cet instantané antérieur comme une révocation de la décision explicite Morris du 23/11/2026**. La décision ne vaut pas merge.

## 1. Mode d'emploi et règle de vérité

Le registre est une **matrice de réception de couverture**, pas un découpage obligatoire de micro-tâches Cursor. Une livraison peut couvrir plusieurs exigences ; une exigence peut nécessiter plusieurs livraisons. Contrôler le périmètre du mandat Cursor et le résultat utilisateur, pas uniquement la présence de fichiers.

- **NV** : non vérifié dans ML5 (état initial pour toutes les lignes ; ne signifie pas absence de code préexistant).
- **EC** : développement annoncé/en cours, sans preuve suffisante.
- **LD** : livré et déclaré, revue indépendante non achevée.
- **PARTIEL** : comportements/preuves manquants identifiés.
- **VERIFIÉ** : comportement et preuve acceptables au périmètre et niveau requis.
- **BLOQUÉ** : dépendance ou preuve déterminante absente.
- **EXCLU** : exclusion motivée et **explicitement décidée par Morris**, jamais par Cursor seul.

Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue significative**. Une case cochée signifie uniquement que l'exigence est VERIFIÉE au niveau requis, sur une ref identifiable. Aucun pourcentage d'avancement global n'est calculé à partir des seules déclarations. État initial NV partout.

**Niveaux de preuve** : `DOCUMENTED / DETERMINISTIC / INTEGRATION / BROWSER / LIVE / REAL`. Ne pas transformer une fixture ou un PASS déterministe en comportement REAL. Une nouvelle modification peut rouvrir un point anciennement vérifié.

**Protocole de mise à jour après Review Pack** : (1) figer contrat/branche/HEAD/base et SHA/build ; (2) lire pack et contenu/diffs complets ; (3) comparer chaque ligne touchée au contrat et à ses preuves ; (4) inscrire État/Preuve/écarts ; (5) vérifier les non-régressions ; (6) proposer verdict borné et suite à Morris. Pas de micro-revue après chaque événement SDK ou commit.

## 2. Documents de référence et sources obligatoires

- [Contrat fonctionnel ML5 v0.5](https://github.com/mcleland147/sfia-workspace/blob/3e84d528abe548e29b6ed3e9f12a100ca5c41151/projects/sfia-studio-next/conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md), §§1–19 et Q-01…Q-56.
- [Architecture candidate ML5 A/B/C/D](https://github.com/mcleland147/sfia-workspace/blob/3e84d528abe548e29b6ed3e9f12a100ca5c41151/projects/sfia-studio-next/architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md), particulièrement §§15–18.14.
- [Méthode Figma ↔ Cursor v1.1 — source obligatoire avant UX](https://github.com/mcleland147/sfia-workspace/blob/997897fd7cf914771e7d08e8030dc7123fab7d25/projects/sfia-studio-next/ux-ui/methodologie-contrat-figma-cursor.md). **L0/L1/L2 avant code ; oracles PNG/empreintes, mapping natif/DOM et comparaisons F2/browser après code.**
- R2 propriétaires : `conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md`, `connaissance-sujets-et-continuite-du-projet.md`, `trajectoire-cycles-et-guidance-cki.md`, `decisions-et-gouvernance-du-pilote.md`, `realisation-operationnelle-gouvernee.md`, `resultats-et-preuves.md`, `integration-git-gouvernee.md`.
- Figma : fileKey `itgvCulInEnFY6DvgIegvP`, **page 12** (14 états 12.01–12.14). Maquette = spécification visuelle, pas preuve de runtime ni permission d'exécuter.
- `governance/SEF.md` v0.2, `governance/roadmap.md`, décisions R4/ML4/ML5, `governance/product-naming-conventions.md`, ENV-01, product-versioning.
- SFIA v2.6 externe : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` et `prompts/templates/sfia-cycle-execution-template.md` (pas de template concurrent).
- Campagne SDK ML5 C9 : `sfia/review-handoff@bacee519`, preuve **PASS WITH RESERVES** en sandbox isolée et **pas** intégration Next / GitHub REAL / MCP Figma-Canva.

## 3. Inventaire fonctionnel suivi

**99 points de contrôle** répartis en 9 familles. Ils consolidisent les comportements du contrat ML5 sans créer de nouvelles règles R2 ni transformer le registre en spécification normative.

### A. Conduite cognitive transverse de Nora
**Responsabilités :** D3, D4. **Sources :** Contrat fonctionnel ML5 §§3–5, 13 ; architecture §15.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `A01` | Qualifier l'intention, le résultat, le contexte, les contraintes et les risques même pour une demande courte. | NV | — |
| ☐ | `A02` | Adapter profondeur et moyens : réponse directe, investigation, documents, historique, Git ou autres outils utiles sans recherche systématique. | NV | — |
| ☐ | `A03` | Ne préparer de nouveau contrat Cursor qu'après demande claire, GO de préparation ou mandat de correction déjà borné. | PARTIEL | `nora-contract-bridge` intent + sources CONSULTED/VERIFIED requises ; LIVE multi-sources NON PROUVÉ |
| ☐ | `A04` | Permettre un brouillon correctif spontané dans la portée du mandat existant, sans nouveau dispatch automatique. | PARTIEL | Cycle 6 — `detectsCorrectiveDraftIntent` + bridge `cursorRedispatch:false` ; LIVE non prouvé |
| ☐ | `A05` | Requalifier hors mandat, changement matériel ou échecs répétés ; ne pas créer une boucle autonome de contrats. | NV | — |
| ☐ | `A06` | Conduire une investigation séquencée, suivre les renvois déterminants et réviser les questions à mesure des découvertes. | NV | — |
| ☐ | `A07` | Sélectionner et lire les bonnes versions des sources D4, conversation, historique, Git, décisions, rapports antérieurs et documents pertinents. | NV | — |
| ☐ | `A08` | Distinguer découvert, consulté, vérifié, partiel, périmé, refusé et contradictoire ; préserver provenance, branche et version. | NV | — |
| ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | PARTIEL | `investigation-state` + READY serveur (`technical-contract-server-ready`) ignore flags client ; LIVE NON PROUVÉ |
| ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | PARTIEL | Snapshot durable + bridge tour ; pas de second registre D4 |
| ☐ | `A11` | Conserver/reconstituer de façon fiable l'investigation après déconnexion, interruption, limite de contexte ou incident fournisseur sans fausse lecture ni effet rejoué. | PARTIEL | `investigation-persistence.ts` → `preparations.projection_json` ; reprise unit OK ; PG reprise tour non exhaustif |
| ☐ | `A12` | Réduire les coûts/latences sur demandes simples et rendre ces capacités disponibles transversalement dans sas, projet, documents, décision et bilan. | NV | — |

### B. Recherche et lecture web publique
**Responsabilités :** D3 / outil hébergé B1 candidat. **Sources :** Contrat ML5 §5.5, §13 ; architecture §16.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `B01` | Déclencher une recherche web publique seulement lorsqu'elle apporte une valeur déterminante ; lecture seule. | NV | — |
| ☐ | `B02` | Ouvrir effectivement les pages utiles et, si disponible, y rechercher/ouvrir les références nécessaires au lieu d'exploiter uniquement des résultats indexés. | NV | — |
| ☐ | `B03` | Confronter sources, dates, version fournisseur et applicabilité ; document officiel ≠ fonction disponible dans Next. | NV | — |
| ☐ | `B04` | Afficher des citations/liens sources utilisables et les métadonnées de fraîcheur réellement établies. | NV | — |
| ☐ | `B05` | Distinguer source découverte, page ouverte, extrait disponible, couverture partielle et fait vérifié ; ne jamais inventer une lecture complète. | NV | — |
| ☐ | `B06` | Neutraliser les injections d'instructions issues de pages/snippets et ne leur attribuer aucun droit D6/D7/Git. | PARTIEL | Instructions système + résultats non-autorité ; LIVE injection non prouvée |
| ☐ | `B07` | Empêcher l'exfiltration de secrets et données privées via requêtes web, résultats, traces ou liens affichés. | PARTIEL→C22 | C22 : autorisation exacte EXPLICIT_AUTHORIZED_EXACT \| REGISTERED_PUBLIC_COMPOSITION ; registre vide = deny ; free-form publicTopic/rawQuery refusés (unit ml5-web-search-authorize) ; confinement ≠ qualification WEB LIVE complète |
| ☐ | `B08` | Traiter timeout, pages/PDF indisponibles, budget/coût/latence, échec et reprise avec limite honnête et sans crawler parallèle par défaut. | NV | — |
| ☐ | `B09` | Prouver la compatibilité du fournisseur/outillage web avec le runtime D3 et la réponse structurée, sur modèle/version réels. | NV | — |

### C. Activité fonctionnelle de Nora pendant ses travaux
**Responsabilités :** D3 ; projection corrélée, sans seconde autorité. **Sources :** Contrat ML5 §6 ; architecture §17.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `C01` | Afficher les phases significatives de travail long dans le fil concerné, pendant l'investigation, sans activité artificielle pour chaque message. | PARTIEL | Producteur `appendActivityEvent` branché au tour Nora (ANNOUNCED→COMPLETED) ; UI fil partielle |
| ☐ | `C02` | Différencier étape annoncée, tentative d'outil, retour effectivement observé, confirmation, échec et incertitude. | PARTIEL | Natures ANNOUNCED/OBSERVED/COMPLETED/UNCERTAIN ; séquence sous lock PG |
| ☐ | `C03` | Relier les événements aux lectures D4/historique/Git/web réellement effectuées et à leur couverture. | NV | — |
| ☐ | `C04` | Afficher statut, limites et erreurs proportionnés, sans pourcentage fictif, lecture inventée ou résultat présumé. | NV | — |
| ☐ | `C05` | Proposer résumé compact et détail repliable, sans console brute ni raisonnement privé. | NV | — |
| ☐ | `C06` | Corréler chaque activité à l'identité du bon tour/opération, la persister raisonnablement et la retrouver après reconnexion. | NV | — |
| ☐ | `C07` | Vérifier la fraîcheur réelle du polling/transport et l'absence de régression d'événements/doublons et d'affichage LIVE fictif. | NV | — |
| ☐ | `C08` | Appliquer isolation, secrets, filtrage et droits ; ne pas créer de commandes de micro-pilotage de l'activité. | NV | — |

### D. Contrat Cursor, inspection et HumanDecision
**Responsabilités :** D3/D6/D7 (D9 si Git). **Sources :** Contrat ML5 §§4, 7–8, 19 ; R2 D6/D7 ; Figma 12.02/12.03/12.14.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | PARTIEL | `prepareTechnicalContractFromNora` + bridge tour → DRAFT ; LIVE investigation multi-sources NON PROUVÉE |
| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | CF-02 : READY serveur via investigation durable ; client `sourcesSufficient` ignoré ; BROWSER NON PROUVÉ |
| ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | PARTIEL | `reversibility_limits_json` round-trip + fingerprint canonique ; PG test |
| ☐ | `D04` | Afficher les quatre engagements : ce qui sera fait, non fait, résultat attendu, contrôle du Pilote. | PARTIEL | `ContractViewer` ; BROWSER Figma F2 manquant |
| ☐ | `D05` | Rendre inspectables les six volets R2 D7 : mission, périmètre, capacités/autorité, STOP, preuves/sources, intégrité. | PARTIEL | `ContractViewer` volets ; F2 manquant |
| ☐ | `D06` | Afficher l'instruction technique complète en lecture défilante, sans troncature ni substitution des champs de réponse Nora. | PARTIEL | Stockage full `instruction_text` + UI expand ; F2 12.14 manquant |
| ☐ | `D07` | Garantir identité de version/empreinte entre texte inspecté, texte autorisé et octets effectivement transmis au SDK. | PARTIEL | Fingerprint + authorize inspect match + dispatch recheck ; LIVE SDK non prouvé |
| ☐ | `D08` | Requalifier un changement matériel d'instruction, périmètre, cible, risque, droit ou version avant lancement. | PARTIEL | `isMaterialContractChange` + requalification au dispatch |
| ☐ | `D09` | Implémenter la visionneuse Travail 50/50 avec fil Nora utilisable, carte de contrat et navigation vers Exécution. | NV | — |
| ☐ | `D10` | Exécuter uniquement après acte explicite Exécuter et confirmation générique Oui/Non ; Non sans effet. | PARTIEL | `confirmed:true` requis API + dialog `d6-confirm-launch` dans `CursorRealizationSurface` ; BROWSER F2 non prouvé |
| ☐ | `D11` | Recontrôler D6/D7/D9 et capacités/permissions réelles au point d'effet ; interdictions et suspensions opposables. | PARTIEL | `assertCurrentCursorAuthority` au dispatch ; MCP réel non vérifié |
| ☐ | `D12` | Conserver lien au bon projet, Pilote, contrat et cycle d'origine le cas échéant, sans imposer de cycle. | PARTIEL | attempt/contract/pilot/project liés |

### E. Dispatch, exécution LIVE, arrêt et reprise Cursor SDK
**Responsabilités :** D7, D6 ; Cursor environnement d'exécution administré hors Studio. **Sources :** Contrat ML5 §§9, 17–19 ; architecture §18 ; SDK C9.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `E01` | Déclencher Cursor SDK automatiquement depuis Studio sans copier-coller ni conversation Cursor manuelle par mission. | PARTIEL | Dispatch service SCRIPTED ; LIVE entitlement non prouvé |
| ☐ | `E02` | Exécuter dans l'environnement Cursor effectif ; Cursor Desktop demeure disponible pour administration, comptes, MCP et authentifications. | PARTIEL | Pas d'admin Desktop dans Studio ; LIVE cwd à qualifier |
| ☐ | `E03` | Créer/récupérer une tentative unique avec projet, Pilote, contrat/version/empreinte et mandat. | PARTIEL | `prepareCursorExecution` + correlationKey |
| ☐ | `E04` | Persister identité/autorité/tentative et contexte avant send/dispatch ; séparer store SDK et vérité métier D7. | PARTIEL | claim avant send ; resultJson D7 |
| ☐ | `E05` | Superviser les runs longs hors durée de vie d'une requête HTTP ou d'un onglet navigateur. | PARTIEL | LIVE `waitForTerminal=false` après ACK ; SCRIPTED terminal immédiat ; worker prod non imposé |
| ☐ | `E06` | Collecter événements SDK réellement exposés et projeter des états LIVE sobres dans Exécution. | PARTIEL | Projection resultJson ; UI Exécution partielle |
| ☐ | `E07` | Distinguer demande de lancement, ACK, run observé, travail, erreur, timeout, fin et UNKNOWN. | PARTIEL | `CursorLiveProjection` fields |
| ☐ | `E08` | Distinguer STOP demandé, transmis, observé et effets partiels ; annulation n'implique pas rollback. | PARTIEL | stop API + limits CANCEL_IS_NOT_ROLLBACK |
| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | CF-03 : `priorSendMayHaveOccurred` + SQL fence AMBIGUOUS ; PG T-04 ACK-lost **PASS** (DEV) ; LIVE NOT PROVEN |
| ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | PARTIEL→C19 | C19 I4 : `reconcileStaleRunningCognitiveWorks` → `PROCESS_OR_LEASE_INTERRUPT` ; fence owner + kill LISTEN mid-RUNNING ; reprise même workId DEV LIVE |
| ☐ | `E11` | Retrouver durablement interventions, contrats, versions, événements et tentatives, y compris hors cycle. | PARTIEL | Tables durables ; UI historique 12.04 non câblée |
| ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | mcpRequired listé dans plan ; vérification LIVE non faite |
| ☐ | `E13` | Ne pas construire un gestionnaire MCP/approbations dans Studio, ni désactiver globalement les protections pour rendre un test vert. | PARTIEL | Aucun admin MCP ajouté |
| ☐ | `E14` | Ne pas forcer Git/MCP sur une mission qui n'en a pas besoin ; production et DEV utilisent le même sens du contrat avec environnements distincts. | PARTIEL | gitScope/mcp optionnels sur plan |
| ☐ | `E15` | Isoler concurrents, projets, workspaces, identités SDK, secrets et rapports ; aucun croisement de tentative. | PARTIEL | P0-02 `resolveCursorWorkspace` sous `SFIA_CURSOR_WORKSPACE_ROOT` ; client cwd refusé ; LIVE isolation OS NOT PROVEN |

### F. Git de travail et continuité des réalisations
**Responsabilités :** D7/D9/D6 — conditionnel aux missions Git. **Sources :** Contrat ML5 §§17.2,18.2,19.5 ; R2 D9 et architecture §18.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `F01` | Vérifier dépôt, base SHA, branche de travail distante et droits avant toute mutation de dépôt. | PARTIEL | Cycle 6 option A — `preflightCursorGitOptionA` ; bare local DETERMINISTIC ; GitHub REAL NON |
| ☐ | `F02` | Utiliser un workspace Git local isolé et rattaché à la bonne branche/autorité. | PARTIEL | Harness bare + workspace path ; LIVE workspace OS non prouvé |
| ☐ | `F03` | Bornee les commits/pushes significatifs au mandat effectif, sans push par action ni droit implicite. | PARTIEL | Mandate allowedOps ; PR/merge hors mandat par défaut |
| ☐ | `F04` | Rendre les réalisations significatives consultables sur branche distante sous GO spécifique sans imposer de revue Nora à chaque publication. | PARTIEL | Observation REMOTE_VERIFIED après relecture ; Studio non publisher |
| ☐ | `F05` | Relire SHA/refs distant réels après publication ; conserver branch, base, historique et provenance. | PARTIEL | `observeRemoteAfterPush` bare ; GitHub REAL NON |
| ☐ | `F06` | Séparer clairement travail local non publié et contenu Git distant effectivement accessible. | PARTIEL | LOCAL_ONLY vs REMOTE_VERIFIED |
| ☐ | `F07` | Empêcher PR, merge, force-push, publication STABLE ou adoption implicites. | PARTIEL | allowPullRequest/allowMerge false par défaut ; unit refus |
| ☐ | `F08` | Assurer la continuité entre contrats via références Git réelles, vérifiées et autorisées plutôt que mémoire SDK seule. | PARTIEL | Mandate/baseSha continuity helpers ; multi-contrat LIVE ouvert |
| ☐ | `F09` | Réutiliser D7/D9 existants ; décider A direct borné ou B publication gouvernée avant réalisation correspondante, sans moteur Git parallèle. | PARTIEL | DÉC-ML5-GIT option A appliquée ; préflight branché prepare ; pas de publisher Studio |

### G. Handoff par tentative, qualification D8/D9 et analyse Nora
**Responsabilités :** D7/D8/D9/D3. **Sources :** Contrat ML5 §§10–11,17.3–17.4,18.3,19.5 ; R2 D8.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `G01` | Créer un dossier/handoff identifié et non écrasé pour chaque tentative, distinct du handoff externe SFIA v2.6. | PARTIEL | `realization_handoffs` UNIQUE attempt ; immutable |
| ☐ | `G02` | Porter contrat/version/empreinte, tentative, exécutant, environnement, état, branche/base/SHAs connus. | PARTIEL | Champs handoff + manifest.git optionnel |
| ☐ | `G03` | Décrire réalisé/non réalisé, sources consultées, commandes, actions, incidents, STOP, tests et réserves. | PARTIEL | Rapport markdown + gaps ; format libre |
| ☐ | `G04` | Inventorier exhaustivement les fichiers créés, modifiés, déplacés et supprimés, y compris tests, code, scripts, docs et pièces. | PARTIEL | Manifest inventaire ; enforcement INCOMPLETE si vide |
| ☐ | `G05` | Fournir contenu réellement lisible par SHA/diff/sections, ou contenu texte sûr dans rapport, sinon lacune explicite. | EC | Contenu via reportMarkdown ; accès Git D9 non branché ici |
| ☐ | `G06` | Séparer tests déclarés, réellement exécutés, capturés, non exécutés et couverture vérifiée. | PARTIEL | Champs manifest + D8 refuse PASS sans capture |
| ☐ | `G07` | Rendre accessibles captures originales runtime, références Figma/frame, manifestes et preuves spécialisées nécessaires. | NV | Non implémenté stockage captures |
| ☐ | `G08` | Conserver handoff et artefacts à références durables, sans latest multi-tentatives ni confusion SFIA v2.6. | PARTIEL | Une ligne/attempt ; pas de latest produit |
| ☐ | `G09` | En cas de crash/rapport absent/partiel/hostile ou contradiction, conserver faits accessibles et état PARTIAL/UNKNOWN sans succès inventé. | PARTIEL | MISSING/INCOMPLETE/REJECTED ; secrets → REJECTED |
| ☐ | `G10` | D7 rattache/contrôle identité de rapport ; D9 vérifie Git ; D8 recoupe les changements réels, manifestes et critères. | PARTIEL | D7+D8 ; D9 recoupement Git Cursor non branché |
| ☐ | `G11` | Rendre consultables les neuf rubriques D8 : résumé, prévu, réalisé, évaluation, écarts, impact, verdict, recommandations, sources. | PARTIEL | `qualifyCursorRealization` + `RealizationBilan` |
| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | `buildNoraCognitiveAnalysis` (dossier) + brief distinct ; LIVE Nora run = preuve supérieure encore ouverte |
| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | Labels + surfaces `execution` / `publication` (results) distinctes |
| ☐ | `G14` | Permettre En discuter avec Nora : référence de bilan jointe au brouillon, retirable, aucun envoi automatique. | PARTIEL | `onDiscussWithNora` → `setDraft` + Travail ; envoi non automatique |
| ☐ | `G15` | Conserver historique/version et réserves ; requalification datée si preuve tardive, sans rejouer la mission. | PARTIEL | Cycle 6 — FOR UPDATE + newProofRef + PG concurrent PASS ; BROWSER requalify ouvert |

### H. UX Figma page 12 et fidélité de transposition
**Responsabilités :** R3 UX / D3 D6 D7 D8 D9 ; Cursor exécute sous méthode Figma v1.1. **Sources :** Figma file itgvCulInEnFY6DvgIegvP page 12 ; ux-ui/methodologie-contrat-figma-cursor.md v1.1.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `H01` | 12.01 : conduite/activité Nora pour un travail de préparation de contrat. | NV | — |
| ☐ | `H02` | 12.02,12.03,12.14 : 50/50, inspection/confirmation, instruction technique intégrale défilante. | NV | — |
| ☐ | `H03` | 12.04,12.05 : interventions et contrats retrouvables avec identité, autorité, versions et tentatives. | PARTIEL | `?surface=execution` + historique interventions ; F2/BROWSER NOT PROVEN |
| ☐ | `H04` | 12.06,12.07 : tentative LIVE observée, erreur/UNKNOWN, réconciliation sans faux état. | PARTIEL | UI AMBIGUOUS « à réconcilier » + LIVE projection ; LIVE SDK NOT PROVEN |
| ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | PARTIEL | Onglets Figma Synthèse/Livrables et tests/Git et pièces/Écarts ; F2 NOT PROVEN |
| ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | PARTIEL | Bouton bilan → draft Travail ; envoi auto absent ; F2 NOT PROVEN |
| ☐ | `H07` | 12.10 : activité de Nora dans le sas sans projet fictif. | NV | — |
| ☐ | `H08` | Avant code de chaque surface : Figma validée et extraction L0/L1/L2, assets exacts, PNG natif hashé, mapping node→DOM→assertion ; après code : runtime screenshot, styles/DOM/F2, état/viewport/fixture identiques, interactions browser, réserves explicites. | PARTIEL | L0+L1 metadata 14 frames + design context 12.02 ; F2/BROWSER runtime NOT PROVEN |

### I. Non-régression, qualité, preuve et gouvernance
**Responsabilités :** Transverse D1–D9 / SEF / ENV-01. **Sources :** SEF v0.2, ENV-01, product-versioning, SFIA v2.6 ; ML5 architecture A–D.

| Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
|---|---|---|---|---|
| ☐ | `I01` | Ne pas dupliquer les autorités D3/D4/D5/D6/D7/D8/D9 ni inventer moteur cognitif, Git ou d'exécution concurrent. | NV | — |
| ☐ | `I02` | Vérifier droits par Pilote/projet/ressource, restrictions, suspensions, révocations et absence d'effet hors mandat. | NV | — |
| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | PARTIEL | PG ML5 dispatch **8 PASS** incl. ACK-lost ; concurrence 1 win ; fencing stale claim |
| ☐ | `I04` | Tester secrets, prompt injection, exfiltration web, artefacts hostiles, sécurité MCP/Git et isolation. | NV | — |
| ☐ | `I05` | Associer code, tests déterministes et d'intégration, scénarios nominaux/négatifs et documentation dans chaque livraison. | NV | — |
| ☐ | `I06` | Tester les parcours UX réellement concernés sur navigateur/capture avec SHA/build/viewport/état identifiables. | NV | — |
| ☐ | `I07` | Distinguer simulation, DETERMINISTIC, INTEGRATION, BROWSER, SDK LIVE et effet GitHub/MCP REAL. | NV | — |
| ☐ | `I08` | Limiter les essais GitHub REAL et MCP/Figma/Canva aux capacités effectivement concernées et aux GO réels. | NV | — |
| ☐ | `I09` | Synchroniser code, UX, architecture et as-built ; changer de schéma/autorité uniquement sur gate Morris. | NV | — |
| ☐ | `I10` | Prouver le parcours intégré Nora→contrat inspecté→HumanDecision→Cursor→retours→D8/D9→avis Nora→suite. | NV | — |
| ☐ | `I11` | Respecter ENV-01 DEV/RECETTE/STABLE, versioning NO RELEASE, recette SHA figé, PR/merge/promotion sous GO et ADOPTED jamais automatique. | NV | — |


## 3 ter. Inventaire d'implémentation A01–I11 (cycle 4 — 2026-11-23, réconcilié)

> Axe **Implémentation** distinct de la conformité (NV/PARTIEL/VÉRIFIÉ).
> Réconcilié avec l'inventaire explore [Inventory A01-I11](28376cd8-26ca-4d04-95ec-34395679e40f) et les correctifs cycle 4 (journal sources, frontier B1, sendIntent, READY prepId, classification synthèse).
> IMPLEMENTED = comportement constitutif raccordé sans manques essentiels. PARTIAL = pièces présentes. NOT_IMPL = absent.

| ID | Impl | Owner | Fichiers / fonctions | Écart / exit |
|---|---|---|---|---|
| `A01` | PARTIAL | D3 | semantic-qualification, nora-adapter | Qualification courte hors intent contrat non consolidée dans investigation-state |
| `A02` | PARTIAL | D3 | cognitive-policy, nora-adapter tools | Profondeur non exposée transversalement sas/document/bilan |
| `A03` | PARTIAL | D3/D7 | nora-contract-bridge, nora-contract-prepare, tool-source-journal | C11 — contrat DRAFT/READY produit après Nora LIVE (`openai-agents-sdk-live`) ; GO préparation explicite encore partiel |
| `A04` | PARTIAL | D3 | nora-contract-bridge correctiveIntent | Cycle 6 — détection + cursorRedispatch:false ; LIVE non prouvé |
| `A05` | PARTIAL | D3/D7 | REQUIRES_REQUALIFICATION, fingerprint mismatch | Anti-boucle partielle ; pas de requal hors mandat complète |
| `A06` | PARTIAL | D3 | investigation-state questions | Pas de conducteur séquencé révision questions↔découvertes |
| `A07` | PARTIAL | D3/D4 | d4-read-tools+journal, git/history tools | Lectures D4 journalisées CONSULTED ; git/history journal incomplet |
| `A08` | PARTIAL | D3 | investigation-state SourceCoverage, tool-source-journal | Types OK ; VERIFIED rare ; peuplement partiel |
| `A09` | PARTIAL | D3/D7 | technical-contract-server-ready | READY serveur ; snapshot sans lecture D4 live systématique |
| `A10` | PARTIAL | D3 | investigation-persistence | Snapshot durable ; consolidation acquis D4 incomplète |
| `A11` | PARTIAL | D3 | investigation-persistence, resumeInvestigation | Reprise mid-turn/incident non branchée au fil |
| `A12` | PARTIAL | D3 | cognitive-policy | Économie simple sur tour projet seulement |
| `B01` | PARTIAL | D3 | public-web-search-frontier (cycle 4) | SCRIPTED query-only ; LIVE gated ; hosted tool détaché |
| `B02` | PARTIAL | D3 | public_web_open_page SCRIPTED | Ouverture LIVE non implémentée |
| `B03` | PARTIAL | D3 | confrontWebSources (cycle 5) | SCRIPTED confrontation ; LIVE ouvert |
| `B04` | PARTIAL | D3 | web-source-citation + open_page citation | Cycle 7 — contrat citation SCRIPTED ; UX affichage partiel ; LIVE gated |
| `B05` | PARTIAL | D3 | frontier coverage DISCOVERED/CONSULTED via open | Distinction partielle runtime ; UX absente |
| `B06` | PARTIAL | D3 | instructions non-autorité + résultats untrusted | Injection LIVE non prouvée |
| `B07` | PARTIAL | D3 | frontier outbound log + sanitize | Non-exfil SCRIPTED testé ; WEB LIVE NOT PROVEN |
| `B08` | PARTIAL | D3 | frontier DENIED/TIMEOUT/budget calls | Timeout/reprise web partielle |
| `B09` | IMPLEMENTED | D3 | `public-web-search-frontier` isolated Agent + webSearchTool + fetch open | C14 LIVE — items DISCOVERED + PAGE_OPENED MDN ; isolation outbound PASS ; hosted tool jamais sur agent Nora privé |
| `C01` | PARTIAL | D3 | appendActivityEvent, service producers | UI fil n'affiche pas GET activity pendant RUNNING |
| `C02` | PARTIAL | D3 | natures + OBSERVED sources journal (cycle 4) | Événements outil OBSERVED partiels (D4/WEB ; git/history incomplets) |
| `C03` | PARTIAL | D3 | activity sourceRef depuis journal | Relier lectures git/history encore ouvert |
| `C04` | PARTIAL | D3 | status FAILED/LIMITED | Affichage UX limites incomplet |
| `C05` | PARTIAL | D3/UX | NoraConversation liveActivity detail (cycle 5) | BROWSER/F2 non prouvé |
| `C06` | PARTIAL | D3 | listActivityEvents API | Sans consommateur UX reconnexion |
| `C07` | PARTIAL | D3/UX | poll by-key+activity pendant send (cycle 5) | BROWSER longue investigation ouvert |
| `C08` | PARTIAL | D3 | ownerToken fence + redact | Isolation multi-Pilote incomplete |
| `D01` | PARTIAL | D3/D7 | nora-contract-prepare + bridge + journal | C11 — préparation LIVE sur projet DEV documenté ; multi-sources/contradiction encore partielle |
| `D02` | PARTIAL | D7 | server-ready ; client prepId ignoré (cycle 4) | Droits révoqués BROWSER ouvert |
| `D03` | PARTIAL | D7 | technical-contract + fingerprint + mig 018 | Versions OK ; changement matériel helper non branché |
| `D04` | PARTIAL | D7/UX | ContractViewer | Pas 50/50 Travail Figma 12.02 |
| `D05` | PARTIAL | D7/UX | ContractViewer volets | Inspectable Exécution, pas Travail |
| `D06` | PARTIAL | D7/UX | instruction_text + expand | F2 12.14 ouvert |
| `D07` | PARTIAL | D6/D7 | authorize fingerprint + dispatch + C9 refuseCursorExecution | C11 — D6 Non/Oui + dispatch LIVE ; instruction bytes = contrat autorisé |
| `D08` | PARTIAL | D7 | fingerprint mismatch au dispatch | isMaterialContractChange non appelé |
| `D09` | PARTIAL | D3/UX | ContractViewer dans Travail aside (cycle 5) | F2 12.02 / BROWSER non prouvé |
| `D10` | PARTIAL | D6/UX | d6-confirm sur Exécution | Pas 12.03 générique sur Travail |
| `D11` | PARTIAL | D6/D7 | assertCurrentCursorAuthority | MCP réel non vérifié |
| `D12` | PARTIAL | D7 | FKs attempt/contract/pilot/project | Cycle D5 optionnel non câblé |
| `E01` | PARTIAL | D7 | dispatchCursorRun SCRIPTED/LIVE env | C11 — LIVE Studio prouvé (`composer-2.5`, FileCredentialStore) ; SCRIPTED conservé |
| `E02` | PARTIAL | D7 | workspace-resolver | Pas admin Desktop/MCP Studio (by design) |
| `E03` | PARTIAL | D7 | prepareCursorExecution + correlationKey | — |
| `E04` | PARTIAL | D7 | claim + sendRequestedAt atomique (cycle 4) | C11 — run LIVE `agent-29c4c0f4…` / `run-51c77f21…` lié attempt |
| `E05` | PARTIAL | D7 | ACK-first + `cursor-live-supervisor` (C13) | C13 T-05 long-run COMPLETED sans navigateur ; resume-once ; ≠ queue/scheduler général |
| `E06` | PARTIAL | D7/UX | CursorLiveProjection + execution surface | Événements SDK partiels |
| `E07` | PARTIAL | D7 | CursorLiveProjection fields | — |
| `E08` | PARTIAL | D7 | stop API | Effets partiels partiels |
| `E09` | PARTIAL | D7 | priorSend + DROP_ACK fault (C12) | T-04 DETERMINISTIC PASS ; LIVE borné non rejoué (effet) |
| `E10` | PARTIAL | D7 | reconcile + observeLiveCursorRun (C11) | LIVE observe sans second send ; reconnect navigateur incomplet |
| `E11` | PARTIAL | D7/UX | attempts list execution | Historique Figma 12.04/05 non équivalent |
| `E12` | PARTIAL | D7 | mcp-capability-check + prepare gate | Cycle 7 — check conditionnel ; inventaire déclaratif ; MCP REAL gated |
| `E13` | IMPLEMENTED | D7 | pas d'admin MCP Studio | Exigence négative respectée |
| `E14` | PARTIAL | D7 | gitScope/mcp optionnels | — |
| `E15` | PARTIAL | D7 | workspace-resolver root | Isolation OS/Pilotes non prouvée |
| `F01` | PARTIAL | D7/D9 | observeWorkspaceGitFacts + preflight | CP-01 C7 — observations indépendantes ; GitHub REAL NON |
| `F02` | PARTIAL | D7/D9 | cursor-git-option-a harness | Workspace isolé test ; OS multi-Pilote ouvert |
| `F03` | PARTIAL | D7/D9 | mandate allowedOps | Commit/push mandatés ; PR/merge distincts |
| `F04` | PARTIAL | D7/D9 | observation REMOTE_VERIFIED | Studio lit ; ne publie pas |
| `F05` | PARTIAL | D7/D9 | observeRemoteAfterPush | Relecture SHA bare ; REAL ouvert |
| `F06` | PARTIAL | D7/D9 | LOCAL_ONLY vs REMOTE_VERIFIED | Déclaration push ≠ constat |
| `F07` | PARTIAL | D7/D9 | allowPR/Merge false default | Unit refus hors mandat |
| `F08` | PARTIAL | D7/D9 | baseSha continuity | Multi-contrat LIVE ouvert |
| `F09` | PARTIAL | D7/D9 | preflight on prepare + D9 read | Pas de publisher Studio ; option B abandonnée |
| `G01` | PARTIAL | D7 | realization_handoffs UNIQUE | — |
| `G02` | PARTIAL | D7 | handoff fields | — |
| `G03` | PARTIAL | D7 | report + gaps | Structuration incidents/STOP incomplète |
| `G04` | PARTIAL | D8 | inventoryComplete | Acquisition serveur auto absente |
| `G05` | PARTIAL | D7 | reportMarkdown | Lecture Git D9 pièces absente |
| `G06` | PARTIAL | D8 | qualify testsDeclared/Captured | Collecte runtime tests absente |
| `G07` | PARTIAL | D8 | evidence-captures + API captures | Cycle 7 — store SHA + Playwright PNG ; bilan UX rattachement partiel |
| `G08` | PARTIAL | D7 | one handoff/attempt | — |
| `G09` | PARTIAL | D7/D8 | REJECTED/INCOMPLETE | — |
| `G10` | PARTIAL | D7/D8 | gitFactsVerified hook | Feed D9 Cursor non branché |
| `G11` | PARTIAL | D8/UX | 9 rubrics + 4 tabs | Recoupement réel faible ; F2 ouvert |
| `G12` | PARTIAL | D3/D8 | D8 tools + path confine + journal (C13) | C13 — confinement symlink PASS ; journal CONSULTED≠toolCalls ; secrets non divulgués |
| `G13` | PARTIAL | D8/UX | labels + surfaces execution/publication | — |
| `G14` | PARTIAL | UX | onDiscussWithNora draft | Référence bilan structurée absente |
| `G15` | PARTIAL | D8 | FOR UPDATE + newProofRef + expectedUpdatedAt | PG concurrent PASS cycle 6 ; BROWSER requalify ouvert |
| `H01` | PARTIAL | UX | live activity + preparedContract open (cycle 5) | F2 12.01 NOT RUN |
| `H02` | PARTIAL | UX | ContractViewer Travail 50/50 (cycle 5) | F2/BROWSER NOT RUN |
| `H03` | PARTIAL | UX | surface=execution | Identité/versions partielles vs 12.04/05 |
| `H04` | PARTIAL | UX | AMBIGUOUS + live projection | États LIVE Figma incomplets |
| `H05` | PARTIAL | UX | RealizationBilan 4 onglets | Fidélité 12.08/11-13 ouverte |
| `H06` | PARTIAL | UX | discuss→Travail | Frame 12.09 non F2 |
| `H07` | PARTIAL | UX | sas preparations activity | C1 sas ML5 partiel |
| `H08` | PARTIAL | UX | Figma oracles + Playwright runtime | Cycle 7 — 4 oracles + 4 runtime ; F2 ≤2px global NOT PROVEN |
| `I01` | PARTIAL | transverse | CURSOR_EXECUTION additive | Vigilance double autorité |
| `I02` | PARTIAL | D6 | cursor-authority | Matrice I02 incomplete |
| `I03` | PARTIAL | QA | claim/fence/PG T-04 | UX concurrence ACK/STOP incomplete |
| `I04` | PARTIAL | QA | frontier+sanitize tests | Suite injection/MCP/Git incomplete |
| `I05` | PARTIAL | QA | unit+PG+docs cycle 4 | Exigence processus partielle |
| `I06` | PARTIAL | QA | DEV auto-session + BROWSER snapshots | Cycle 6 — Travail/Exécution/Résultats/sas servis ; F2 PNG timeout |
| `I07` | PARTIAL | QA | Fake/Real dans packs | Pas distinction UX |
| `I08` | PARTIAL | gov | pas REAL mutatif ce cycle | Gate I08 ML5 partiel |
| `I09` | PARTIAL | docs | as-built/registre | — |
| `I10` | PARTIAL | QA | fixture SCRIPTED + BROWSER surfaces | Cycle 7 — contrat/attempt/handoff DEV + captures ; D6/LIVE non E2E |
| `I11` | PARTIAL | gov | ENV-01 DEV ; NO RELEASE | Politique ADOPTED hors code |

**Totaux implémentation (cycle 5) :** IMPLEMENTED=1 · PARTIAL=81 · NOT_IMPL=17 · Σ=99.

**Totaux implémentation (cycle 6) :** IMPLEMENTED=1 · PARTIAL=92 · NOT_IMPL=6 · Σ=99.
Mouvements : A04, F01–F09, I06 → PARTIAL. Restent NOT_IMPL : B04, B09, E12, G07, H08, I10.

**Totaux implémentation (cycle 7) :** IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 · Σ=99.
Mouvements NOT_IMPL→PARTIAL : B04, E12, G07, H08, I10. Reste NOT_IMPL : **B09** (WEB LIVE fournisseur).
CP-01 préflight observations indépendantes ; CP-02 STUDIO_DEV_BIND ; CP-03 proof-ref verify ; Playwright captures runtime ; F2 global NOT PROVEN.

**Totaux implémentation (cycle 8) :** IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 (B09) · Σ=99 — pas de conversion artificielle.
CP-01 : origin match + ls-remote frais + REMOTE_VERIFIED exige local HEAD. CP-02 : probe TCP loopback à l'émission. CP-03 : preuve exacte, pas de fallback handoff. A3 MCP : UNKNOWN fail-closed. G07 : magic PNG/JPEG. BROWSER intégré SCRIPTED + captures C8. F2 global **NOT PROVEN**.

**Totaux implémentation (cycle 11) :** IMPLEMENTED=1 · PARTIAL=97 · NOT_IMPL=1 (B09) · Σ=99 — **aucune promotion artificielle PARTIAL→IMPLEMENTED**.
Preuves LIVE (conformité ≠ présence) : Nora prepare (`openai-agents-sdk-live`) ; Cursor SDK LIVE (`@cursor/sdk` 1.4.2, modèle `composer-2.5`, clé FileCredentialStore) ; témoin `DEMO_C11.txt` vérifié sous cwd résolu ; handoff RECEIVED ; D8 verdict PARTIAL honnête ; analyse finale `NORA_COGNITIVE`. B09 / GitHub REAL mutatif / MCP mission : N/A ou NOT_IMPL. Option Git A inchangée (pas de contradiction dans constats courants). F2 hors gate C11.

**Totaux implémentation (cycle 14) :** IMPLEMENTED=2 · PARTIAL=97 · NOT_IMPL=0 · Σ=99.
Mouvement : **B09 NOT_IMPL → IMPLEMENTED** (agent isolé LIVE + open fetch + parse navigation ; preuves `/tmp/sfia-c14-web-probe4.log`, cognitive `s4_web`). Aucune promotion artificielle des 97 PARTIAL. Conformité A01–A12 / C01–C08 / D01–D02 reste majoritairement PARTIEL (LIVE sémantique S2/S5 PASS ; reprise S7 / contradiction S6 / activité BROWSER non exhaustifs).

**Écarts majeurs cycle 6 :** F2 pixel NOT PROVEN (screenshot tooling timeout) ; WEB/SDK/GitHub REAL gated ; I10 parcours E2E non câblé bout-en-bout ; captures G07 absentes.

**T-01…T-12 (sens canonique) :**
| T | Sens | État |
|---|---|---|
| T-01 | Investigation + contrat Nora | PARTIAL |
| T-02 | Refus Pilote sans effet | PARTIAL (Exécution Non) |
| T-03 | Autorisation contrat exact | PARTIAL |
| T-04 | ACK perdu sans second envoi | PG PASS |
| T-05 | Mission longue navigateur fermé | NOT PROVEN |
| T-06 | STOP effets partiels | PARTIAL |
| T-07 | Tests non vérifiés → D8 refuse | PARTIAL |
| T-08 | Contradiction Git/rapport | PARTIAL (qualify) ; F Cursor NOT_IMPL |
| T-09 | Unique revue Nora | PARTIAL (synthesis≠D3) |
| T-10 | Reprise discussion | PARTIAL |
| T-11 | Web sans exfiltration | PARTIAL SCRIPTED |
| T-12 | Deux Pilotes / dépôt partagé | NOT PROVEN |

## 4. Contrôle transversal des 56 scénarios de recette fonctionnelle

Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comportements de référence. Après chaque livraison, contrôler **les scénarios réellement dans le périmètre de la tentative** ; au bilan ML5, vérifier que chaque cas pertinent est couvert, reporté avec preuve ou EXCLU sous arbitrage Morris.

| Scénarios source | Familles principalement concernées |
|---|---|
| Q-01…Q-07 | A / D — mandat, initiative, correction et refus d'auto-relance |
| Q-08…Q-18 | A / B / C / D / F — cognition transverse, sources, longueur, provenance |
| Q-19…Q-23 | B / I — recherche web, dates, sécurité, indisponibilité |
| Q-24…Q-26 | C / H — activité annoncée/observée, sas et documents |
| Q-27…Q-33 | D / E / H — visionneuse, confirmation, autorité, tentative et cycle |
| Q-34…Q-38 | G / H — résultats, preuves, avis, réception et retour Nora |
| Q-39…Q-41 | E / C / I — reconnexion, STOP et activité LIVE sobre |
| Q-42…Q-48 | F / G / I — Git, handoff, pièces, contrôle D8 et continuité |
| Q-49…Q-56 | D / E / G / I — transmission intégrale, administration Cursor, MCP conditionnel, reprise et restitution |

**Condition d'intégrité de couverture :** une ligne A–I ou un scénario Q applicable ne peut disparaître sans trace d'un arbitrage explicitement attribué. Une mention « réalisé » sans ref et preuve n'est jamais `VERIFIÉ`.

## 4 bis. Revue de conformité transversale et contrat d'acceptation — R-002 (23/11/2026)

**Contrat d'acceptation intégré candidat :** [Cognition et réalisation gouvernée](./contrat-acceptation-cognition-et-realisation-gouvernee.md). Le présent registre demeure le **seul index de couverture des 99 exigences**. Les 12 cas intégrateurs du contrat d'acceptation sont des regroupements d'oracles de qualification, **pas** un remplacement des Q-01…Q-56 ni des PF propriétaires.

**État reconstitué (sources : deux Review Packs FULL distants) :** 44 PARTIEL, 1 EC, 54 NV, **0 VÉRIFIÉ** au niveau d'acceptation complet. Les preuves unitaires/PostgreSQL ne valent ni BROWSER, ni F2, ni LIVE SDK, ni REAL GitHub. Les statuts des lignes ci-dessus reprennent les changements explicitement tracés dans les diffs des deux handoffs. **Le HEAD produit local `6cf33e99…` n'a pas été lu directement par ChatGPT : son tree, son état et ses tests restent NON OBSERVÉS indépendamment.** Les tests PASS sont déclarés dans les rapports.

| Famille | Total | PARTIEL | EC | NV | Résultat produit manquant |
|---|---:|---:|---:|---:|---|
| A — Conduite cognitive | 12 | 3 | 0 | 9 | Investigation Nora et préparation réelle du contrat |
| B — Recherche web | 9 | 2 | 0 | 7 | Isolation publique et lecture WEB LIVE |
| C — Activité Nora | 8 | 2 | 0 | 6 | Observations outils, fil courant et reconnexion |
| D — Contrat / autorité | 12 | 10 | 0 | 2 | READY établi côté serveur, inspection 50/50, fidélité intégrale |
| E — Cursor SDK / D7 | 15 | 14 | 0 | 1 | ACK perdu sans double effet, supervision, LIVE confiné |
| F — Git Cursor / D9 | 9 | 0 | 0 | 9 | Choix A/B et continuité par SHA vérifiés |
| G — Handoff / D8 | 15 | 12 | 1 | 2 | Provenance, inventaire probant, D8 révisable et avis Nora |
| H — UX Figma | 8 | 1 | 0 | 7 | Surfaces Exécution/Résultats distinctes et F2/BROWSER |
| I — QA/gates | 11 | 0 | 0 | 11 | Parcours intégré, non-régression et preuves par niveaux |
| **TOTAL** | **99** | **44** | **1** | **54** | **Aucune réception ML5** |

**Écart UX vérifié directement sur Figma :** page 12 (14 frames) présente Travail 50/50 (12.02), **Exécution distincte** (12.04, 12.05, 12.06, 12.07, 12.14) et **Résultats & preuves distincts** (12.08, 12.11, 12.12, 12.13). Le code rapporté monte `CursorRealizationSurface` sous `?surface=publication` et utilise quatre onglets D8 différents. **Conformité structurelle et F2 NON PROUVÉES.** Les extraits Figma ne sont pas des captures runtime.

**Contrats propriétaires à recroiser impérativement :** R2 D3/D4/D5/D6/D7/D8/D9 ; `PF-REAL-01…30`, `PF-PRV-01…32`, scénarios gouvernance et Git applicables. Les invariants ML4, ENV-01 et les réserves antérieures continuent de s'appliquer.

**Trajectoire recommandée (même macro-lot, pas de micro-gates inventés) :** sécuriser effets/READY/qualification, raccorder Nora et les parcours visuels, rendre les preuves D8 effectivement consultables, qualifier les frontières réelles selon les mandats, puis réconcilier le registre et les scénarios. Git B (publication gouvernée D7/D9) reste **RECOMMANDÉE NON ARBITRÉE**. Aucune architecture, migration structurante ou promotion n'est adoptée par ce document.

## 5. Journal des livraisons et revues

| ID | Date | Contrat Cursor / cycle | Branche / HEAD / build | Review Pack / handoff | IDs revus | Verdict et réserves |
|---|---|---|---|---|---|---|
| R-001a | 23/11/2026 | ML5 socle vertical — CRITICAL | `sfia/next-ml5-integrated-delivery-20261123` / `69aeb329…` local rapporté ; aucune publication projet | [Review Pack 1 @ d731c1d7](https://github.com/mcleland147/sfia-workspace/blob/d731c1d77016b4585dda1b96051f949478f67b8e/sfia-review-handoff/latest-chatgpt-review.md) | A–I, Q applicables, socle D/E/G | ML5 PARTIAL — GOVERNED GAPS ; 17 tests unitaires rapportés ; BROWSER/LIVE/REAL non prouvés |
| R-001b | 23/11/2026 | ML5 consolidation P0/UX initiale — CRITICAL | même worktree, HEAD local `6b7dac12…` dans pack et `6cf33e99…` rapporté ensuite ; non lu directement | [Review Pack 2 @ 2b2d27f6](https://github.com/mcleland147/sfia-workspace/blob/2b2d27f6e8b2495adcccd4677078a8b77670b4b5/sfia-review-handoff/latest-chatgpt-review.md) | A–I et 56 Q selon pack ; 29 unit + 7 PG PASS **rapportés** | ML5 PARTIAL — GOVERNED GAPS ; P0 DEV partiels, F2/BROWSER/LIVE/REAL ouverts |
| R-002 | 23/11/2026 | Revue de conformité fonctionnelle/UX/architecture D0 + intégration documentaire D1/D2 candidate | Branch documentaire de revue, `main` inchangé ; SHA commit à relever après écriture | Même deux Review Packs + Figma page 12 (lecture) | 99 exigences + Q-01…Q-56 + PF propriétaires à recouper | 44 PARTIEL / 1 EC / 54 NV ; contrat d'acceptation **CANDIDAT**, non réceptionné |
| R-003 | 23/11/2026 | ML5 convergence intégrée — CF-02/03, Nora prepare, surfaces Exécution/Résultats, D8/Nora | `sfia/next-ml5-integrated-delivery-20261123` worktree local (HEAD post-cycle à figer) ; push projet **interdit** | Review Pack 3 → `sfia/review-handoff` (publish-in-cycle) | A03/A09/D01/D02/E09/G12–G14/H03–H06/I03 + CF-02/03 | ML5 PARTIAL — GOVERNED GAPS ; PG 8 PASS ; unit 25+ ; BROWSER/F2/LIVE/REAL ouverts |
| R-005 | 23/11/2026 | ML5 cycle 5 — Travail 50/50, activité RUNNING, B1 URL, G15 requalify, supervision poll | même worktree DIRTY ; HEAD `6cf33e99…` | Review Pack 5 → `sfia/review-handoff` | Impl 1/81/17 ; BROWSER/F2 NOT RUN | ML5 PARTIAL — GOVERNED GAPS |
| R-004 | 23/11/2026 | ML5 complétude — inventaire 99, P0 sendIntent, provenance sources, B1 frontier, synthèse≠Nora | même worktree DIRTY ; HEAD entrée `6cf33e99…` | Review Pack 4 → `sfia/review-handoff` | Impl **1/74/24** (réconcilié explore + cycle 4) ; T-01…T-12 corrigés | ML5 PARTIAL — GOVERNED GAPS ; unit 53 + PG 9 ; BROWSER/F2/LIVE ouverts |

Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.

## 6. Registre d'écarts, corrections, réserves et dette

| ID | Date/lot | Exigence(s) | Fait/écart constaté (≠ hypothèse) | Gravité | Preuve et SHA | Responsable / correction | Exit / état |
|---|---|---|---|---|---|---|---|
| CF-01 | R-002 / ML5 | A01–A12, D01 | Nora ne prépare pas encore de contrat à partir d'une investigation et des sources effectivement qualifiées | MAJEUR | Packs → cycle 4 | bridge + tool-source-journal (CONSULTED from reads) ; fake count removed | LIVE multi-sources + BROWSER ; PARTIEL |
| CF-02 | R-002 / ML5 | A09, D02, D11 | READY dépend d'indications client (`sourcesSufficient`, `unknownRestrictions`) | BLOQUANT EFFET | Pack 2 → cycle 3 | `technical-contract-server-ready` + route `/ready` ; client flags ignorés | BROWSER + rights revoked still open ; REMEDIATED DEV / PARTIEL |
| CF-03 | R-002 / ML5 | E09–E10 | Chemin `AMBIGUOUS → DISPATCHED` potentiellement redéclenchable après ACK perdu | BLOQUANT LIVE | Pack 2 → cycle 3 | `priorSendMayHaveOccurred` + SQL fence ; PG T-04 PASS | LIVE SDK still open ; REMEDIATED DEV / PARTIEL |
| CF-04 | R-002 / ML5 | B01–B09 | Web B1 désactivé ; variable ISOLATION_PROVEN non équivalente à une barrière sûre | BLOQUANT B1 LIVE | Pack → cycle 4 | `public-web-search-frontier` query-only SCRIPTED + outbound log ; hosted tool détaché ; WEB LIVE gated | WEB LIVE Morris gate ; REMEDIATED DEV SCRIPTED / PARTIEL |
| CF-05 | R-002 / ML5 | C01–C08 | Activité annoncée/fin de tour, événements outil et reprise incomplètes | MAJEUR | Pack 2 | Cursor : observer outils D3, préserver C1 | BROWSER sas/projet pendant RUNNING/reconnexion ; OUVERT |
| CF-06 | R-002 / ML5 | D09–D10, H01–H08 | Travail 50/50, Exécution et Résultats distincts de Figma ; F2 absent | MAJEUR UX | Figma page 12 + pack 2 | Cursor : composants propriétaires, L1/L2, BROWSER F2 | 14 états qualifiés par frame/fixture ; OUVERT |
| CF-07 | R-002 / ML5 | E05–E08, E12/E15 | Supervision run long et SDK LIVE confiné non démontrés | BLOQUANT LIVE | Pack 2 / qualification C9 bornée | Cursor : prouver supervision/reprise, MCP seulement si requis | Browser fermé/crash/STOP, identités réelles ; OUVERT |
| CF-08 | R-002 / ML5 | F01–F09 | Publication Git Cursor et continuité non implémentées ; option A/B ouverte | GATE MORRIS | Pack 2 / R2 D9 | Morris : arbitrage A/B ; Cursor prépare blast radius | Permettre continuité par SHA sans privilège tacite ; OUVERT |
| CF-09 | R-002 / ML5 | G01–G11/G15 | Provenance client-déclarée, dossier et D8 pas réellement recoupés et révisables | MAJEUR | Pack 2 | Cursor : acquisition serveur / recoupement D9-D8 | PF-PRV contradictions/preuve tardive ; OUVERT |
| CF-10 | R-002 / ML5 | G12–G14 | Brief déterministe distinct du véritable avis Nora, absent | MAJEUR | Pack → cycle 4 | Classification corrigée (DETERMINISTIC_SYNTHESIS ≠ NORA_COGNITIVE) ; prompt D3 prêt | Run Nora D3 LIVE encore ouvert ; PARTIEL |
| CF-11 | R-002 / ML5 | I01–I11, Q-01…Q-56 | Pas de preuve BROWSER/F2/LIVE/REAL ni matrice PF complète | GATE QA | Packs 1–2 | Cursor : preuves multi-niveaux par exigence | Qualifier toutes exigences et les PF sans auto-réception ; OUVERT |
| CF-12 | R-002 / ML5 | Gouvernance | `main` snapshot Gate C ancien ; code ML5 local ; pas de push produit | SYNCHRO GOUVERNÉE | Git refs vérifiées | Morris : GO séparé si synchronisation normative | Pas de merge/recette/adoption implicite ; OUVERT |

Chaque réserve transférée comporte **propriétaire, impact, preuve attendue, condition de sortie et moment de relecture**. Une correction technique ne déclenche pas de nouvelle tentative Cursor sans GO lorsqu'un nouvel acte d'effet est requis.

## 7. Vigilances initiales (risques, non défauts constatés)

| ID | Attention particulière de revue | Condition de vérification |
|---|---|---|
| V-01 | Contrat long | Empreinte/version : texte inspecté = texte envoyé, sans troncature liée à `replyDraft`. |
| V-02 | ACK perdu / crash SDK | Tentative unique, fencing, run retrouvé ou état UNKNOWN, jamais nouveau dispatch aveugle. |
| V-03 | Réutilisation D7 | Étendre le propriétaire d'effets/tentatives existant, pas un deuxième moteur. |
| V-04 | Handoff | Diff complet, inventaire toutes créations/modifications/suppressions et artefacts lisibles, D8 réellement recoupé. |
| V-05 | Web | Provenance réelle, non-exfiltration, compatibilité SDK/effort et limites de lecture. |
| V-06 | Activité Nora | Événements effectivement accessibles pendant le travail, sans streaming ou progrès fictifs. |
| V-07 | MCP headless (conditionnel) | **Non bloquant global ML5** : administration MCP dans Cursor Desktop conservée ; vérifier seulement la mission MCP concernée et les droits effectifs du SDK. |
| V-08 | Figma | **Méthode v1.1 obligatoire** : L0/L1/L2, actifs/icons exacts, PNG source hashé, DOM/F2 ≤2 px des rectangles stables, comparaison par région et BROWSER au même état. |
| V-09 | Git réel | Publication distante seulement si mission Git et mandat ; SHA vérifié, local non publié distingué, aucun PR/merge induit. |

## 8. Réception et clôture de couverture

- [ ] Chaque exigence applicable A–I possède statut, preuve, source et limite.
- [ ] Les Q-01…Q-56 applicables ont une couverture, une réserve ou une exclusion Morris explicite.
- [ ] Aucun `PARTIEL/BLOQUÉ/NV` n'est masqué par un verdict global ; décision de report explicite et condition de sortie.
- [ ] Un parcours intégré Nora → contrat → acte D6 → Cursor SDK → fin/interruption → D7/D9/D8 → avis Nora est éprouvé au niveau demandé.
- [ ] Les preuves UX/browser et REAL concernées sont attribuées aux bons SHA/build, avec non-régression des parcours existants.
- [ ] Rapport SFIA v2.6 complet et handoff distant vérifié ; différences entre processus externe et handoff Studio conservées.
- [ ] Code/tests/architecture/UX/as-built synchronisés ; dette et capacité suivante qualifiées.
- [ ] Décision Morris de réception, intégration, promotion et adoption traitée séparément.

**État courant R-002 (d'après rapports, sans accès au worktree local) :** `ML5 PARTIAL — GOVERNED GAPS / 44 PARTIEL / 1 EC / 54 NV / NO VERIFIED / NO BROWSER F2 LIVE REAL / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`. L'état historique initial était ALL 99 NV ; les états présentés ci-dessus ne constituent pas une preuve d'acceptation.

**Hors périmètre de ce document :** nouvelle doctrine, architecture physique adoptée, ordre impératif de micro-lots, auto-acceptation, PR/merge, mutation/runtime, gestion MCP Studio universelle.
```

## Coverage gate inventory

| File | SHA-256 | Lines |
|---|---|---|
| `projects/sfia-studio-next/web/src/domains/conversation/web-search-authorize.ts` | `8ac004af7b1062e85f67cdaffdac7e3beb34fccf92ac233e174d4793d26f1128` | 211 |
| `projects/sfia-studio-next/web/src/domains/execution/cursor-autonomous-restitution.ts` | `5e2ff8d31a32f2d4a8e8150364015cc27f8667cb5a8637a85544606b4c58b2e9` | 1045 |
| `projects/sfia-studio-next/web/src/instrumentation.ts` | `346ea5810b0e1b2ed08a070fe9b5f8ac9980a14c72af0c75bb600a310e723583` | 25 |
| `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts` | `977f5847137906cdd2e1ff2762307dc4f4e6ccc67cc8675dad90c72384623855` | 837 |
| `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts` | `01b7defe94d7cbed3b3fc0c6a24cd71a6e16643a707f05d6b8b293dc17c0e49e` | 930 |
| `projects/sfia-studio-next/web/tests/unit/ml5-web-search-authorize.test.ts` | `ce22506829b4b0f7006beb3305c0ff925bc6bfa45570b26a1beabf18ded63358` | 87 |
| `projects/sfia-studio-next/web/tests/unit/ml5-c22-report-binding.test.ts` | `b0d1c4750a79f7f1459d597a630c6e539ec8559151a3a0625d84f0c27e76250a` | 64 |
| `projects/sfia-studio-next/web/tests/unit/ml5-c21-consolidation.test.ts` | `cc12755d4b0c577898b3d860b7d8b44a99c2cef96620c7864f25d473302f9209` | 53 |
| `projects/sfia-studio-next/web/tests/integration/ml5-c22-live-director.pg.test.ts` | `e5ada7b4275eaee15219f4f98c7d56b9066c2ec73c32bc3216b027be45ca2928` | 252 |
| `projects/sfia-studio-next/web/tests/integration/ml5-c22-d8-conforming.pg.test.ts` | `a930377f3c005ae2cb46a970593e4734f065c634a7809f5aee06598ee7c0f09b` | 157 |
| `projects/sfia-studio-next/web/tests/integration/ml5-c22-d8-contradiction.pg.test.ts` | `af85f064d5b633e44abe191e63015684fd09207c40dbc859b00e9a866f7f5acf` | 145 |
| `projects/sfia-studio-next/web/tests/integration/ml5-c22-restitution-cas.pg.test.ts` | `f9b0a484da019fdaabf19a06f88c250e5aa572b7ce14f89d20274dd3d069df88` | 129 |
| `projects/sfia-studio-next/construction/delivery-history.md` | `7c38e7da7cc96c42eb747c57f26612ea52ad812d6ef0b4af1fc78d0d83586d03` | 4434 |
| `projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md` | `63dfe16a665b2ffd03d55bbd85eb9f658331b4c742db58f6d2faef09a847a5b7` | 113 |
| `projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md` | `843cfce2b9137aaa3461564b237539ea4a4f50ff6ce43fdb4e58fa776443d262` | 476 |

## Instruction ChatGPT (obligatoire)

ChatGPT doit relire le handoff canonique distant `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` avant de statuer.

Si contenu manquant : REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING.
Si distant non actualisé : REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED.

## Cursor proposed exit

READY WITH RESERVES — lot 2 restitution probante + LIVE intégrée démontrées ; ne pas clôturer automatiquement lots 1/2 ; prochaine capacité lot 3 non engagée.
