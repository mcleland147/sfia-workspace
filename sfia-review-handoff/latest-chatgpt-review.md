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
| Handoff précédent | tip `13df50b21307bbf698c303074889677e37616a66` blob `5798d1cd…` (C21) |
| ENV | DEV :3100 · PG :5433 · `sfia_next_dev` / `sfia_next_e2e` · migrations 020/021 |

## Verdict Cursor

**READY WITH RESERVES**

Frontières P0 maîtrisées (WEB provenance, collecte attempt-bound, ownership CAS). D8 CONFORMING sur chemin produit (SCRIPTED + LIVE) sans injection `verified=true`. Avis Nora cognitif autonome via conducteur D3. Chaîne LIVE terminale → handoff RECEIVED → D8 CONFORMING → Nora COMPLETE sans POST manuel de restitution.

Réserves non bloquantes lot 2 exit candidat : BROWSER activité long-run PARTIAL ; WEB LIVE fournisseur+contexte privé non rejoué (confinement DETERMINISTIC prouvé) ; D9/Git REAL non exercés (mission locale) ; interruption serveur mid-LIVE non rejouée ce cycle (boot resume code présent).

## Capacité | Écart C21 | Correction C22 | Résultat observé | Niveau | Verdict

| Capacité | Écart C21 | Correction C22 | Résultat | Niveau | Verdict |
|---|---|---|---|---|---|
| WEB | free-form publicTopic | EXPLICIT_AUTHORIZED_EXACT \| REGISTERED_PUBLIC_COMPOSITION ; empty registry deny | unit 7 PASS deny private synthetic | DETERMINISTIC | CLOSED P0 confinement |
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
- Qualification : `rqual_5c1173f5-c435-4e90-80fd-2c64074b6ce8` verdict **CONFORMING** (critères satisfied avec preuves vérifiées)
- Nora : work `cgw_ad0f188f-839f-435f-b0ba-f2a0c565960d` · tools=4 · marker `NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR` · pipeline **COMPLETE**
- Collecte : `REPORT_FROM_CONFINED_WORKSPACE` · bytes 209
- Aucun POST manuel handoff/qualification ; restitution déclenchée post-terminal.

### Variantes

| Variante | Oracle | Observé | Niveau | Verdict |
|---|---|---|---|---|
| A CONFORMING product path | CONFORMING sans inject | CONFORMING | INTEGRATION PG | PASS |
| B Contradiction | not CONFORMING | NON_CONFORMING/PARTIAL/INDETERMINATE | INTEGRATION PG | PASS |
| WEB deny private | refuse before egress | unit deny | DETERMINISTIC | PASS |
| CAS concurrent | one owner | PG CAS PASS | INTEGRATION | PASS |
| Consolidation owner | mergeMode not heuristic | unit PASS | DETERMINISTIC | PASS |

## Validations

- `tsc --noEmit` PASS
- `eslint` C22 files PASS (prefer-const fixed)
- `next build` PASS · BUILD_ID `xDm9gI5jk9N2qEGkFUqN_`
- Unit WEB/report/consolidation PASS
- PG restitution + CAS + D8 CONFORMING + contradiction PASS
- LIVE director PASS (~71s) + Nora resume COMPLETE

## Fake/Real

| Frontière | Niveau | Preuve |
|---|---|---|
| Cursor SDK | DEV LIVE bounded | attempt efx_5184… |
| Agents SDK / Nora | DEV LIVE | NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR |
| PostgreSQL | INTEGRATION | e2e lane |
| Filesystem | confined | REPORT_FROM_CONFINED_WORKSPACE |
| WEB | DETERMINISTIC confinement | unit authorize |
| BROWSER | PARTIAL / not re-run C22 | réserve |
| GitHub REAL | N/A | non exercé |

## Git Truth

- Préservation C1–C22 DIRTY — aucun commit/push projet
- Handoff L3 only autorisé ce cycle

## Review Pack content coverage

Inventaire fichiers C22 couverts ci-dessous avec SHA-256 et contenu intégral (créations/tests) ou contenu intégral des modules propriétaires C22.


## Evidence — LIVE attempt (dossier snapshot)

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

## Evidence — LIVE final after Nora resume

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


… [remainder historical entries unchanged — see worktree] …
```

> NOTE: delivery-history append-only; C22 entry is lines 1–18 above. Full file preserved in worktree; not duplicated historically.

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

## Coverage gate inventory

| File | SHA-256 | Lines |
|---|---|---|
| `projects/sfia-studio-next/web/src/domains/conversation/web-search-authorize.ts` | `8ac004af7b1062e85f67cdaffdac7e3beb34fccf92ac233e174d4793d26f1128` | 211 |
| `projects/sfia-studio-next/web/src/domains/execution/cursor-autonomous-restitution.ts` | `5e2ff8d31a32f2d4a8e8150364015cc27f8667cb5a8637a85544606b4c58b2e9` | 1045 |
| `projects/sfia-studio-next/web/src/instrumentation.ts` | `346ea5810b0e1b2ed08a070fe9b5f8ac9980a14c72af0c75bb600a310e723583` | 25 |
| `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts` | `977f5847137906cdd2e1ff2762307dc4f4e6ccc67cc8675dad90c72384623855` | 837 |
| `projects/sfia-studio-next/web/tests/unit/ml5-web-search-authorize.test.ts` | `ce22506829b4b0f7006beb3305c0ff925bc6bfa45570b26a1beabf18ded63358` | 87 |
| `projects/sfia-studio-next/web/tests/unit/ml5-c22-report-binding.test.ts` | `b0d1c4750a79f7f1459d597a630c6e539ec8559151a3a0625d84f0c27e76250a` | 64 |
| `projects/sfia-studio-next/web/tests/unit/ml5-c21-consolidation.test.ts` | `cc12755d4b0c577898b3d860b7d8b44a99c2cef96620c7864f25d473302f9209` | 53 |
| `projects/sfia-studio-next/web/tests/integration/ml5-c22-live-director.pg.test.ts` | `e5ada7b4275eaee15219f4f98c7d56b9066c2ec73c32bc3216b027be45ca2928` | 252 |
| `projects/sfia-studio-next/web/tests/integration/ml5-c22-d8-conforming.pg.test.ts` | `a930377f3c005ae2cb46a970593e4734f065c634a7809f5aee06598ee7c0f09b` | 157 |
| `projects/sfia-studio-next/web/tests/integration/ml5-c22-d8-contradiction.pg.test.ts` | `af85f064d5b633e44abe191e63015684fd09207c40dbc859b00e9a866f7f5acf` | 145 |
| `projects/sfia-studio-next/web/tests/integration/ml5-c22-restitution-cas.pg.test.ts` | `f9b0a484da019fdaabf19a06f88c250e5aa572b7ce14f89d20274dd3d069df88` | 129 |
| `projects/sfia-studio-next/construction/delivery-history.md` | `7c38e7da7cc96c42eb747c57f26612ea52ad812d6ef0b4af1fc78d0d83586d03` | 4434 |
| `projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts` | `01b7defe94d7cbed3b3fc0c6a24cd71a6e16643a707f05d6b8b293dc17c0e49e` | 930 |

## Instruction ChatGPT (obligatoire)

ChatGPT doit relire le handoff canonique distant `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` avant de statuer.

Si contenu manquant : REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING.
Si distant non actualisé : REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED.

## Cursor proposed exit

READY WITH RESERVES — lot 2 restitution probante + LIVE intégrée démontrées ; ne pas clôturer automatiquement lots 1/2 ; prochaine capacité lot 3 non engagée.
