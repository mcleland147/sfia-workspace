# SFIA Review Pack FULL — ML5 Integration Consolidation

**Cycle:** ML5 · Sécurisation et convergence du parcours gouverné
**Niveau:** FULL
**Profil:** CRITICAL
**Date/heure:** 2026-11-23T09:22:16Z (UTC)
**Branche:** `sfia/next-ml5-integrated-delivery-20261123`
**HEAD entrée:** `69aeb329ee387a7cf8331fc6173fcf0f09bd92b8`
**HEAD courant (post-commit):** `6b7dac122216e5493e460353f36f8eb50ef33e42`
**Base:** `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2`
**Worktree:** `/Users/morris/Projects/sfia-wt-next-ml5-20261123`
**Review Handoff:** REQUIRED — `publish-in-cycle` (section publication en fin de pack)
**Versioning:** NO RELEASE / STABLE NOT AVAILABLE

## Instruction ChatGPT obligatoire

Avant revue : lire depuis Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (SHA distant post-publication). Vérifier cycle, profil, branche, HEAD/base, sources, fichiers, diffs complets, tests, Fake/Real, Figma, couverture A–I/Q, SHA distant.

## 1. Local Git Truth Check

| Élément | Constaté |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` OK |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` OK — **même** branche ML5, pas de nouvelle |
| HEAD entrée | `69aeb329…` présent et contenu cycle 1 |
| Remotes | origin/main@997897fd ; candidate@0f1d37c3 ; review-handoff@d731c1d7 (pré-publication) |
| Push projet | NONE |
| RECETTE / STABLE | Non touchés |

### git status --short (pré-commit)

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-figma-page12-l0-inventory.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/prepare/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/web-search-tools.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
 M projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
 M projects/sfia-studio-next/web/src/domains/execution/types.ts
 M projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
 M projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/route.ts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/
?? projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
?? projects/sfia-studio-next/web/src/db/migrations/018_ml5_contract_reversibility.sql
?? projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
?? projects/sfia-studio-next/web/src/domains/execution/workspace-resolver.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-contract-readiness.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-web-search-boundary.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-workspace-resolver.test.ts

```

**Verdict pré-check:** `GIT TRUTH CHECK PASS — CONTINUE SAME WORKTREE`

## 2. Sources consultées

Gouvernance SFIA v2.6 (routing, operating model, guardrails), SEF/roadmap/ENV-01/versioning (lecture), conception ML5 v0.5, architecture ML5 v0.9, contrats R2 D3–D9 (réf.), méthode Figma v1.1 blob `906c6f60…`, Review Pack précédent `d731c1d7`, registre ML5 local (R-001 conservé), code ML5 cycle 1 sous `web/src/domains/execution/*` et composants figma.

## 3. Arbitrages (non décisions Morris)

| Sujet | Position cycle | Statut |
|---|---|---|
| Git Cursor A vs B | **B recommandé** (publication D7/D9) | Proposition — **non ADOPTED** |
| Worker long-run | Contrats/tests DEV ; topologie prod ouverte | Ouvert |
| B1 isolation | Tool détaché jusqu'à `SFIA_WEB_SEARCH_ISOLATION_PROVEN=1` | BLOQUÉ LIVE |
| Figma Exécution rail | Parcours monté sur `publication` sans nouveau shell | Écart documenté |

## 4. Défauts reproduits → corrections → preuves

### P0-01 Dispatch atomique
**Avant:** update non conditionnel après lecture claim.
**Après:** `claimCursorAttempt` CAS SQL AUTHORIZED|AMBIGUOUS→DISPATCHED ; `persistCursorOwnedResult` fence claimToken ; refus DISPATCHED/COMPLETED blind redispatches.
**Preuve:** `tests/integration/ml5-cursor-dispatch.pg.test.ts` — concurrent 1 win ; stale token refused ; reconcile no redispatch. **7 PASS** sur `sfia_next_e2e`.

### P0-02 Workspace confinement
**Avant:** `workspaceCwd` client accepté.
**Après:** `resolveCursorWorkspace` sous `SFIA_CURSOR_WORKSPACE_ROOT` ; rejet absolu/traversal/symlink escape ; API `workspaceKey`.
**Preuve:** unit `ml5-workspace-resolver.test.ts` **5 PASS**.

### P0-03 B1 non-exfiltration
**Avant:** `webSearchTool` attachable au run privé Nora.
**Après:** `canAttachWebSearchTool` exige aussi `SFIA_WEB_SEARCH_ISOLATION_PROVEN=1` ; défaut détaché.
**Preuve:** unit boundary **4 PASS** ; LIVE non-exfil **NOT PROVEN**.

### P1-01/02 Contrat
reversibilityLimits persistés (migration 018) ; DRAFT≠READY ; markReady route.
### P1-03/04 Handoff & Nora
provenance + inventaire ; brief technique ≠ avis cognitif.

## 5. Parcours utilisateur

`CursorRealizationSurface` sur `?surface=publication` : contrats → prepare → dialog D6 Oui/Non → dispatch → tentatives/STOP → bilan D8 → draft Nora. Activité C1 produite au tour. **BROWSER F2 NOT PROVEN.**

## 6. Fake / Real Qualification

| Frontière | Niveau | Verdict |
|---|---|---|
| PostgreSQL DEV/e2e | INTEGRATION | **PROVEN** (dispatch concurrency) |
| Vitest unit ML5 | DETERMINISTIC | **PROVEN** (29 PASS) |
| Cursor SDK | SCRIPTED | DETERMINISTIC ; LIVE **NOT PROVEN** |
| OpenAI web B1 | DISABLED until isolation | LIVE **NOT PROVEN** |
| BROWSER / Figma F2 | L1 metadata + 12.02 context | F2 **NOT PROVEN** |
| GitHub REAL | — | Hors mandat |

**DETERMINISTIC PROVEN ≠ READY FOR REAL.**

## 7. Figma page 12

- FileKey `itgvCulInEnFY6DvgIegvP` ; page `1209:2` ; 14 frames confirmées L1 metadata.
- Design context 12.02 acquis (session `c2ce3ba7-75cb-4509-a7d0-2699722fabdb`).
- F2 : aucune capture runtime comparée — **NOT PROVEN**.

## 8. Couverture A–I / Q-01…Q-56

Voir `construction/ml5-registre-couverture-et-revue-developpement.md` (mises à jour PARTIEL P0/P1/C/D/E/G/H). Q applicables exercés via PG/unit : dispatch, workspace, readiness, handoff integrity, B1 gate. Scénarios LIVE/BROWSER restants ouverts.

## 9. Tests exécutés

```
npx vitest run tests/unit/ml5-*.test.ts
→ 8 files / 29 tests PASS

npx vitest run tests/integration/ml5-cursor-dispatch.pg.test.ts
→ 7 tests PASS (DATABASE_URL → sfia_next_e2e via vitest gate)

npx tsc --noEmit -p tsconfig.json → PASS

npm run db:migrate (DEV + e2e) → 001→018 OK
```

BROWSER / Playwright parcours : **NOT RUN**.

## 10. Réponses verdict (8 questions)

1. **P0 corrigés et prouvés ?** Oui en DEV (unit+PG) ; LIVE non revendiqué.
2. **Parcours raccordé ?** Oui structurellement (`CursorRealizationSurface` + APIs) ; F2/BROWSER manquant.
3. **Nora démontré vs théorique :** activité C1 + brief D8 déterministe démontrés ; avis cognitif dossier + B1 LIVE théoriques/bloqués.
4. **Preuves SDK/B1/C1/D8 :** SDK SCRIPTED DETERMINISTIC ; B1 DISABLED ; C1 producer PARTIEL ; D8 rubrics DETERMINISTIC.
5. **Figma :** 14 L1 metadata ; 12.02 design context ; F2 none.
6. **99/56 :** registre PARTIEL mis à jour ; pas de VERIFIÉ global.
7. **Décisions Morris :** Git A/B (B recommandé) ; B1 isolation LIVE ; Figma Exécution rail ; READY FOR RECETTE non demandé.
8. **Prochaine capacité :** F2/BROWSER page 12 + avis Nora cognitif + (sous GO) preuve LIVE confined SDK **ou** arbitrage Git B.

## 11. Verdict d'intégration borné

# `ML5 PARTIAL — GOVERNED GAPS`

Pas READY FOR RECETTE. P0 adressés en DEV ; parcours raccordé partiel ; F2/LIVE/B1 isolation ouverts.

## 12. Review Handoff publication — PREUVES POST-PUSH

| Champ | Valeur observée |
|---|---|
| Mode | `publish-in-cycle` L3 borné |
| Branche | `sfia/review-handoff` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` uniquement |
| Commit handoff | `3e245a0c905ebfcdf7f2853f4dda4df97346e40f` |
| Message | `docs(review-handoff): publish ML5 integration consolidation review` |
| Push | fast-forward `d731c1d7..3e245a0c` → `origin/sfia/review-handoff` |
| SHA distant vérifié | `3e245a0c905ebfcdf7f2853f4dda4df97346e40f` = LOCAL |
| Relecture distante | OUI — en-tête ML5 Consolidation + verdict `ML5 PARTIAL — GOVERNED GAPS` + HEAD `6b7dac12` présents |
| Push projet ML5 | **NONE** |
| Worktree ML5 après opération | inchangé (branche `sfia/next-ml5-integrated-delivery-20261123@6b7dac12`) |

**Statut:** `REVIEW HANDOFF PUBLISHED — CANONICAL REMOTE UPDATED`


## 13. Contenu intégral — fichiers créés


### `projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts`

```
/**
 * Atomic Cursor attempt claim — mirrors Git publication fencing (P0-01).
 */

import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  extendClaim,
  isClaimActive,
  mintClaim,
  readClaim,
  releaseClaim,
  writeClaimInto,
  type EffectClaim,
} from "./claim-lease";

function sqlClaimInactive() {
  return sql`(
    ${effectAttempts.resultJson}::jsonb->'claim' IS NULL
    OR NULLIF(${effectAttempts.resultJson}::jsonb->'claim'->>'releasedAt', '') IS NOT NULL
    OR (${effectAttempts.resultJson}::jsonb->'claim'->>'leaseExpiresAt')::timestamptz <= now()
  )`;
}

export function sqlCursorClaimTokenEquals(claimToken: string) {
  return sql`${effectAttempts.resultJson}::jsonb->'claim'->>'claimToken' = ${claimToken}`;
}

/**
 * AUTHORIZED|AMBIGUOUS → DISPATCHED with claim minted in the same SQL predicate.
 * Concurrent callers: at most one wins (0 rows for the loser).
 */
export async function claimCursorAttempt(
  attemptId: string,
  fromStatus: "AUTHORIZED" | "AMBIGUOUS",
): Promise<{ claim: EffectClaim } | null> {
  const now = new Date();
  const row = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
  )[0];
  if (!row || row.status !== fromStatus) return null;
  if (row.kind !== "CURSOR_EXECUTION") return null;
  const prev = readClaim(row.resultJson);
  if (fromStatus === "AMBIGUOUS" && isClaimActive(prev, now.getTime())) {
    return null;
  }
  const claim = mintClaim(prev, now);
  const nextJson = writeClaimInto(row.resultJson || "{}", claim);
  const where =
    fromStatus === "AMBIGUOUS"
      ? and(
          eq(effectAttempts.id, attemptId),
          eq(effectAttempts.status, fromStatus),
          eq(effectAttempts.kind, "CURSOR_EXECUTION"),
          sqlClaimInactive(),
        )
      : and(
          eq(effectAttempts.id, attemptId),
          eq(effectAttempts.status, fromStatus),
          eq(effectAttempts.kind, "CURSOR_EXECUTION"),
        );
  const claimed = await db
    .update(effectAttempts)
    .set({ status: "DISPATCHED", resultJson: nextJson, updatedAt: now })
    .where(where)
    .returning({ id: effectAttempts.id });
  return claimed[0] ? { claim } : null;
}

export async function persistCursorOwnedResult(input: {
  attemptId: string;
  claimToken: string;
  resultJson: string;
  status: "DISPATCHED" | "COMPLETED" | "AMBIGUOUS" | "FAILED";
  release?: boolean;
}): Promise<void> {
  const fresh = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, input.attemptId)).limit(1)
  )[0];
  if (!fresh || fresh.status !== "DISPATCHED") {
    throw new StudioError("CONFLICT", "DISPATCHED perdu — écriture refusée");
  }
  const claim = readClaim(fresh.resultJson);
  if (!claim || claim.claimToken !== input.claimToken || claim.releasedAt) {
    throw new StudioError("CONFLICT", "Claim fence invalide — écriture refusée");
  }
  const nextClaim = input.release ? releaseClaim(extendClaim(claim)) : extendClaim(claim);
  const nextJson = writeClaimInto(input.resultJson, nextClaim);
  const updated = await db
    .update(effectAttempts)
    .set({
      status: input.status,
      resultJson: nextJson,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(effectAttempts.id, input.attemptId),
        eq(effectAttempts.status, "DISPATCHED"),
        sqlCursorClaimTokenEquals(input.claimToken),
      ),
    )
    .returning({ id: effectAttempts.id });
  if (!updated[0]) {
    throw new StudioError(
      "CONFLICT",
      "Progression refusée — claimToken non propriétaire (fencing SQL)",
    );
  }
}

```

### `projects/sfia-studio-next/web/src/domains/execution/workspace-resolver.ts`

```
/**
 * P0-02 — server-side Cursor workspace confinement.
 * Browser never chooses an arbitrary server path.
 */

import { createHash } from "crypto";
import { mkdirSync, realpathSync, existsSync } from "fs";
import { isAbsolute, join, normalize, relative, resolve, sep } from "path";
import { StudioError } from "@/lib/http-errors";

export type WorkspaceResolveInput = {
  pilotId: string;
  projectId: string;
  /** Optional short key under the project sandbox — never an absolute client path. */
  workspaceKey?: string | null;
  /** Rejected if absolute or escaping — kept only to fail closed on legacy clients. */
  clientDeclaredCwd?: string | null;
  ensureDir?: boolean;
  env?: NodeJS.ProcessEnv;
};

export type WorkspaceResolveResult = {
  workspaceCwd: string;
  root: string;
  workspaceKey: string;
  created: boolean;
};

function assertSafeKey(key: string): string {
  const k = key.trim();
  if (!k || k.length > 64) {
    throw new StudioError("INVALID_REQUEST", "workspaceKey invalide", { exposeMessage: true });
  }
  if (!/^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$/.test(k)) {
    throw new StudioError("INVALID_REQUEST", "workspaceKey caractères refusés", {
      exposeMessage: true,
    });
  }
  if (k.includes("..") || k.includes("/") || k.includes("\\")) {
    throw new StudioError("ACCESS_DENIED", "workspaceKey path traversal", { exposeMessage: true });
  }
  return k;
}

function resolveRoot(env: NodeJS.ProcessEnv): string {
  const raw = (env.SFIA_CURSOR_WORKSPACE_ROOT || "").trim();
  if (!raw) {
    throw new StudioError(
      "INVALID_REQUEST",
      "SFIA_CURSOR_WORKSPACE_ROOT requis — workspace non choisi par le navigateur",
      { exposeMessage: true },
    );
  }
  if (!isAbsolute(raw)) {
    throw new StudioError("INVALID_REQUEST", "SFIA_CURSOR_WORKSPACE_ROOT doit être absolu", {
      exposeMessage: true,
    });
  }
  const normalized = normalize(raw);
  if (!existsSync(normalized)) {
    throw new StudioError("INVALID_REQUEST", "Racine workspace Cursor absente", {
      exposeMessage: true,
    });
  }
  let real: string;
  try {
    real = realpathSync(normalized);
  } catch {
    throw new StudioError("INVALID_REQUEST", "Racine workspace non résolvable", {
      exposeMessage: true,
    });
  }
  return real;
}

/**
 * Resolve a confined workspace under SFIA_CURSOR_WORKSPACE_ROOT/<pilot>/<project>/<key>.
 * Client absolute paths are always rejected.
 */
export function resolveCursorWorkspace(input: WorkspaceResolveInput): WorkspaceResolveResult {
  const env = input.env ?? process.env;
  if (input.clientDeclaredCwd && input.clientDeclaredCwd.trim()) {
    const declared = input.clientDeclaredCwd.trim();
    if (isAbsolute(declared) || declared.includes("..") || declared.includes("~")) {
      throw new StudioError(
        "ACCESS_DENIED",
        "workspaceCwd client arbitraire refusé — utiliser workspaceKey serveur",
        { exposeMessage: true },
      );
    }
  }

  const root = resolveRoot(env);
  const pilotSeg = createHash("sha256").update(input.pilotId, "utf8").digest("hex").slice(0, 16);
  const projectSeg = createHash("sha256").update(input.projectId, "utf8").digest("hex").slice(0, 16);
  const workspaceKey = assertSafeKey(input.workspaceKey?.trim() || "default");
  const candidate = resolve(join(root, pilotSeg, projectSeg, workspaceKey));

  const rel = relative(root, candidate);
  if (rel.startsWith("..") || isAbsolute(rel)) {
    throw new StudioError("ACCESS_DENIED", "Workspace hors racine approuvée", {
      exposeMessage: true,
    });
  }

  let created = false;
  if (input.ensureDir !== false) {
    if (!existsSync(candidate)) {
      mkdirSync(candidate, { recursive: true, mode: 0o700 });
      created = true;
    }
  } else if (!existsSync(candidate)) {
    throw new StudioError("NOT_FOUND", "Workspace absent", { exposeMessage: true });
  }

  let real: string;
  try {
    real = realpathSync(candidate);
  } catch {
    throw new StudioError("INVALID_REQUEST", "Workspace non résolvable", { exposeMessage: true });
  }
  const relReal = relative(root, real);
  if (relReal.startsWith("..") || isAbsolute(relReal) || relReal.split(sep).includes("..")) {
    throw new StudioError("ACCESS_DENIED", "Workspace réel hors confinement", {
      exposeMessage: true,
    });
  }

  return { workspaceCwd: real, root, workspaceKey, created };
}

```

### `projects/sfia-studio-next/web/src/db/migrations/018_ml5_contract_reversibility.sql`

```
-- ML5 consolidation — persist reversibilityLimits + readiness projection (P1-01 / P1-02).
-- Additive / re-runnable. DEV only via db:migrate — never RECETTE/STABLE in this cycle.

ALTER TABLE technical_contracts
  ADD COLUMN IF NOT EXISTS reversibility_limits_json text NOT NULL DEFAULT '[]';

ALTER TABLE technical_contracts
  ADD COLUMN IF NOT EXISTS readiness_json text;

```

### `projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts`

```
/**
 * Durable investigation snapshot — resume after process restart.
 * Stored under preparations.projection_json.ml5InvestigationSnapshot.
 * Not an authority register; D3 conductor consumes it.
 */

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { preparations } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateContractReadiness,
  resumeInvestigation,
  type InvestigationState,
} from "./investigation-state";

const SNAPSHOT_KEY = "ml5InvestigationSnapshot";

/**
 * Persist evaluated investigation state for a preparation (pilot-owned).
 */
export async function saveInvestigationSnapshot(input: {
  pilotId: string;
  preparationId: string;
  state: InvestigationState;
}): Promise<{ savedAt: string }> {
  const prep = (
    await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  if (prep.ownerPilotId !== input.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Préparation d'un autre Pilote");
  }
  const evaluated = evaluateContractReadiness(input.state);
  const savedAt = new Date().toISOString();
  const base =
    prep.projectionJson && typeof prep.projectionJson === "object"
      ? { ...(prep.projectionJson as Record<string, unknown>) }
      : {};
  const next = {
    ...base,
    [SNAPSHOT_KEY]: { state: evaluated, savedAt },
  };
  await db
    .update(preparations)
    .set({ projectionJson: next, updatedAt: new Date() })
    .where(eq(preparations.id, input.preparationId));
  return { savedAt };
}

export async function loadInvestigationSnapshot(input: {
  pilotId: string;
  preparationId: string;
  intentFallback?: string;
}): Promise<InvestigationState | null> {
  const prep = (
    await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  if (prep.ownerPilotId !== input.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Préparation d'un autre Pilote");
  }
  const base =
    prep.projectionJson && typeof prep.projectionJson === "object"
      ? (prep.projectionJson as Record<string, unknown>)
      : {};
  const snap = base[SNAPSHOT_KEY] as { state?: InvestigationState } | undefined;
  if (!snap?.state) return null;
  return resumeInvestigation(snap.state, input.intentFallback ?? snap.state.intentSummary ?? "");
}

```

### `projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx`

```
"use client";

/**
 * ML5 — parcours Exécution / Résultats raccordé (frames 12.02–12.08 / 12.11–12.14).
 * Mounted on existing project page — no parallel shell.
 * Reading never authorizes; Non confirmation = no dispatch.
 */

import { useCallback, useEffect, useState } from "react";
import { ContractViewer, type ContractViewerModel } from "./ContractViewer";
import { RealizationBilan } from "./RealizationBilan";
import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

type AttemptRow = {
  attemptId: string;
  status: string;
  fingerprint: string;
  correlationKey: string;
  decisionId: string | null;
  live: {
    terminalStatus?: string | null;
    reportStatus?: string | null;
    lastActivitySummary?: string | null;
    agentId?: string | null;
    runId?: string | null;
    limits?: string[];
  };
  plan: {
    contractId: string;
    contractKey: string;
    contractVersion: number;
    workspaceKey?: string;
  };
  createdAt: string;
  updatedAt: string;
};

type ContractRow = {
  id: string;
  contractKey: string;
  version: number;
  fingerprint: string;
  status: string;
  body: ContractViewerModel extends never ? never : {
    title: string;
    engagements: ContractViewerModel["engagements"];
    volets: ContractViewerModel["volets"];
    instructionText: string;
    risks: string[];
    exclusions: string[];
  };
};

export function CursorRealizationSurface(props: {
  projectId: string;
  onDiscussWithNora?: (draft: string) => void;
}) {
  const [contracts, setContracts] = useState<ContractRow[]>([]);
  const [attempts, setAttempts] = useState<AttemptRow[]>([]);
  const [selectedContract, setSelectedContract] = useState<ContractRow | null>(null);
  const [instructionExpanded, setInstructionExpanded] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingAttemptId, setPendingAttemptId] = useState<string | null>(null);
  const [selectedAttempt, setSelectedAttempt] = useState<AttemptRow | null>(null);
  const [bilan, setBilan] = useState<{
    verdict: string;
    rubrics: D8Rubric[];
    limits: string[];
    noraAnalysisMarkdown?: string | null;
  } | null>(null);
  const [bilanTab, setBilanTab] = useState<"synthese" | "evaluation" | "verdict" | "sources">(
    "synthese",
  );
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  const reload = useCallback(async () => {
    const [cRes, aRes] = await Promise.all([
      fetch(`/api/projects/${props.projectId}/realization/contracts`),
      fetch(`/api/projects/${props.projectId}/realization/attempts`).catch(() => null),
    ]);
    if (cRes.ok) {
      const j = (await cRes.json()) as { contracts?: ContractRow[] };
      setContracts(j.contracts ?? []);
    }
    // attempts list via dedicated route if present; else empty
    if (aRes && aRes.ok) {
      const j = (await aRes.json()) as { attempts?: AttemptRow[] };
      setAttempts(j.attempts ?? []);
    }
  }, [props.projectId]);

  useEffect(() => {
    void reload();
  }, [reload]);

  async function loadAttemptsFallback() {
    // Prefer list endpoint; if 404, keep empty (API may only expose per-id GET).
    const res = await fetch(`/api/projects/${props.projectId}/realization/attempts`);
    if (res.ok) {
      const j = (await res.json()) as { attempts?: AttemptRow[] };
      setAttempts(j.attempts ?? []);
    }
  }

  useEffect(() => {
    void loadAttemptsFallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.projectId]);

  async function prepareFromContract(contract: ContractRow) {
    setBusy(true);
    setStatus("");
    try {
      const correlationKey = `ml5-${contract.id}-${Date.now()}`;
      const res = await fetch(`/api/projects/${props.projectId}/realization/attempts/prepare`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contractId: contract.id,
          correlationKey,
          workspaceKey: "default",
        }),
      });
      const j = (await res.json().catch(() => ({}))) as {
        attemptId?: string;
        error?: string;
        message?: string;
      };
      if (!res.ok || !j.attemptId) {
        setStatus(j.message ?? j.error ?? "Préparation refusée");
        return;
      }
      setPendingAttemptId(j.attemptId);
      setSelectedContract(contract);
      setConfirmOpen(true);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  async function confirmYes() {
    if (!pendingAttemptId || !selectedContract) return;
    setBusy(true);
    try {
      const auth = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/authorize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            statement: "Je mandate l'exécution Cursor du contrat inspecté",
            inspectedFingerprint: selectedContract.fingerprint,
            confirmed: true,
          }),
        },
      );
      const aj = (await auth.json().catch(() => ({}))) as { error?: string; message?: string };
      if (!auth.ok) {
        setStatus(aj.message ?? aj.error ?? "Autorisation refusée");
        setConfirmOpen(false);
        return;
      }
      const disp = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/dispatch`,
        { method: "POST" },
      );
      const dj = (await disp.json().catch(() => ({}))) as { error?: string; message?: string };
      if (!disp.ok) {
        setStatus(dj.message ?? dj.error ?? "Dispatch refusé");
      } else {
        setStatus("Dispatch accepté — observations LIVE/SCRIPTED à réconcilier");
      }
      setConfirmOpen(false);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  function confirmNo() {
    setConfirmOpen(false);
    setPendingAttemptId(null);
    setStatus("Confirmation Non — aucun acte D6, aucun dispatch");
  }

  async function openBilan(attempt: AttemptRow) {
    setSelectedAttempt(attempt);
    setBusy(true);
    try {
      let res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
      );
      let j = (await res.json().catch(() => ({}))) as {
        status?: string;
        qualification?: {
          verdict: string;
          rubrics: D8Rubric[];
          limits: string[];
          noraAnalysisMarkdown?: string | null;
        };
      };
      if (j.status === "MISSING" || !j.qualification) {
        res = await fetch(
          `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ attachNoraAnalysis: true }),
          },
        );
        const created = (await res.json().catch(() => ({}))) as {
          verdict?: string;
          rubrics?: D8Rubric[];
          limits?: string[];
          noraAnalysisMarkdown?: string | null;
        };
        if (res.ok && created.rubrics) {
          setBilan({
            verdict: created.verdict ?? "INDETERMINATE",
            rubrics: created.rubrics,
            limits: created.limits ?? [],
            noraAnalysisMarkdown: created.noraAnalysisMarkdown,
          });
          return;
        }
        setStatus("Qualification indisponible");
        return;
      }
      setBilan({
        verdict: j.qualification.verdict,
        rubrics: j.qualification.rubrics,
        limits: j.qualification.limits,
        noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
      });
    } finally {
      setBusy(false);
    }
  }

  async function requestStop(attemptId: string) {
    setBusy(true);
    try {
      await fetch(`/api/projects/${props.projectId}/realization/attempts/${attemptId}/stop`, {
        method: "POST",
      });
      await reload();
    } finally {
      setBusy(false);
    }
  }

  const viewerModel: ContractViewerModel | null = selectedContract
    ? {
        contractId: selectedContract.id,
        contractKey: selectedContract.contractKey,
        version: selectedContract.version,
        fingerprint: selectedContract.fingerprint,
        title: selectedContract.body.title,
        engagements: selectedContract.body.engagements,
        volets: selectedContract.body.volets,
        instructionText: selectedContract.body.instructionText,
        risks: selectedContract.body.risks,
        exclusions: selectedContract.body.exclusions,
      }
    : null;

  return (
    <div className="fig-cursor-realization" data-testid="cursor-realization-surface">
      <header>
        <p className="fig-kicker !mb-0">EXÉCUTION CURSOR  /  RÉSULTATS</p>
        <h2 className="fig-inspector-title">Réalisation gouvernée</h2>
        <p className="fig-travail-viewer-meta">
          Inspection → confirmation D6 → une tentative → observations → D8. Lecture ≠ autorisation.
        </p>
        {status ? (
          <p role="status" data-testid="realization-status">
            {status}
          </p>
        ) : null}
      </header>

      <section data-testid="realization-contracts">
        <h3>Contrats techniques</h3>
        {contracts.length === 0 ? (
          <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
        ) : (
          <ul>
            {contracts.map((c) => (
              <li key={c.id}>
                <button
                  type="button"
                  className="btn secondary"
                  data-testid={`contract-select-${c.id}`}
                  disabled={busy}
                  onClick={() => {
                    setSelectedContract(c);
                    setInstructionExpanded(false);
                  }}
                >
                  {c.body.title} · {c.status} · v{c.version}
                </button>
                {c.status === "READY" ? (
                  <button
                    type="button"
                    className="btn"
                    data-testid={`contract-prepare-${c.id}`}
                    disabled={busy}
                    onClick={() => void prepareFromContract(c)}
                  >
                    Préparer exécution
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      {viewerModel ? (
        <ContractViewer
          contract={viewerModel}
          instructionExpanded={instructionExpanded}
          onToggleInstruction={() => setInstructionExpanded((v) => !v)}
          onClose={() => setSelectedContract(null)}
          onOpenInExecution={() => setSelectedContract(selectedContract)}
          onRequestExecute={
            selectedContract?.status === "READY"
              ? () => void prepareFromContract(selectedContract)
              : undefined
          }
          executeDisabled={busy || selectedContract?.status !== "READY"}
        />
      ) : null}

      {confirmOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          data-testid="d6-confirm-launch"
          className="fig-d6-confirm"
        >
          <h3>Confirmer le lancement</h3>
          <p>
            Vous avez inspecté le contrat {selectedContract?.contractKey} v
            {selectedContract?.version}. Confirmez-vous l&apos;exécution Cursor ?
          </p>
          <button
            type="button"
            className="btn"
            data-testid="d6-confirm-yes"
            disabled={busy}
            onClick={() => void confirmYes()}
          >
            Oui
          </button>
          <button
            type="button"
            className="btn secondary"
            data-testid="d6-confirm-no"
            disabled={busy}
            onClick={confirmNo}
          >
            Non
          </button>
        </div>
      ) : null}

      <section data-testid="realization-attempts">
        <h3>Tentatives</h3>
        {attempts.length === 0 ? (
          <p className="muted">Aucune tentative Cursor pour ce projet.</p>
        ) : (
          <ul>
            {attempts.map((a) => (
              <li key={a.attemptId} data-testid={`attempt-row-${a.attemptId}`}>
                <span>
                  {a.status} · {a.live.terminalStatus ?? "—"} ·{" "}
                  {a.live.lastActivitySummary ?? "pas d'observation"}
                </span>
                <button
                  type="button"
                  className="btn secondary"
                  data-testid={`attempt-bilan-${a.attemptId}`}
                  onClick={() => void openBilan(a)}
                >
                  Bilan D8
                </button>
                {a.status === "DISPATCHED" ? (
                  <button
                    type="button"
                    className="btn secondary"
                    data-testid={`attempt-stop-${a.attemptId}`}
                    onClick={() => void requestStop(a.attemptId)}
                  >
                    STOP
                  </button>
                ) : null}
              </li>
            ))}
          </ul>
        )}
      </section>

      {bilan && selectedAttempt ? (
        <RealizationBilan
          attemptId={selectedAttempt.attemptId}
          verdict={bilan.verdict}
          rubrics={bilan.rubrics}
          limits={bilan.limits}
          noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
          activeTab={bilanTab}
          onTabChange={(tab) =>
            setBilanTab(tab as "synthese" | "evaluation" | "verdict" | "sources")
          }
          onDiscussWithNora={() =>
            props.onDiscussWithNora?.(
              `Reprendre à propos de la tentative ${selectedAttempt.attemptId} (verdict D8: ${bilan.verdict}).`,
            )
          }
        />
      ) : null}
    </div>
  );
}

```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/route.ts`

```
import { NextResponse } from "next/server";
import { listCursorAttempts } from "@/domains/execution/cursor-attempt-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const attempts = await listCursorAttempts({
      pilotId: session.pilotId,
      projectId,
    });
    return NextResponse.json({ attempts });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

### `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts`

```
import { NextResponse } from "next/server";
import { markTechnicalContractReady } from "@/domains/execution/technical-contract";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; contractId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, contractId } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as {
      unknownRestrictions?: string[];
      sourcesSufficient?: boolean;
    };
    const result = await markTechnicalContractReady({
      pilotId: session.pilotId,
      projectId,
      contractId,
      unknownRestrictions: body.unknownRestrictions,
      sourcesSufficient: body.sourcesSufficient,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

### `projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts`

```
/**
 * ML5 P0-01 — PostgreSQL concurrent Cursor dispatch + fencing + workspace payload mismatch.
 * Requires DATABASE_URL (DEV/e2e). SCRIPTED adapter only — no LIVE SDK.
 */
import { afterEach, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdirSync, mkdtempSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, pilots, preparations, schemaRevision } from "@/db/schema";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
  prepareCursorExecution,
  reconcileCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { claimCursorAttempt, persistCursorOwnedResult } from "@/domains/execution/cursor-claim";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import type { TechnicalContractBody } from "@/domains/execution/types";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { newId } from "@/lib/ids";
import { StudioError } from "@/lib/http-errors";
import { readClaim, writeClaimInto, mintClaim } from "@/domains/execution/claim-lease";

function sampleBody(): TechnicalContractBody {
  return {
    title: "PG concurrent",
    engagements: {
      willDo: "noop",
      willNotDo: "git",
      expectedResult: "scripted finish",
      pilotControl: "D6",
    },
    volets: {
      mission: "test",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "handoff",
      integrity: "fp",
    },
    instructionText: "scripted only",
    risks: [],
    exclusions: [],
    acceptance: { criteria: [], expectedProofs: [] },
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

async function seed(label = `ml5-${newId("nm").slice(-8)}`) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0]!;
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (
    (created.status !== "CREATED" && created.status !== "ALREADY_CREATED") ||
    !("projectId" in created) ||
    !created.projectId
  ) {
    throw new Error(`seed fail: ${JSON.stringify(created)}`);
  }
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

describe("PostgreSQL ML5 Cursor dispatch concurrency (SCRIPTED)", () => {
  let workspaceRoot = "";

  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    workspaceRoot = mkdtempSync(join(tmpdir(), "sfia-ml5-ws-"));
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = workspaceRoot;
  });

  afterEach(() => {
    __resetScriptedCursorRunsForTests();
  });

  it("schema revision includes 018", () => {
    expect(schemaRevision).toBe("018_ml5_contract_reversibility");
  });

  it("persists reversibilityLimits round-trip and DRAFT≠READY without markReady", async () => {
    const { pilotId, projectId } = await seed();
    const draft = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-draft",
      body: sampleBody(),
      markReady: false,
    });
    expect(draft.status).toBe("DRAFT");
    const ready = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-ready",
      body: sampleBody(),
      markReady: true,
    });
    expect(ready.status).toBe("READY");
    const { getTechnicalContract } = await import("@/domains/execution/technical-contract");
    const got = await getTechnicalContract({
      pilotId,
      projectId,
      contractId: ready.contractId,
    });
    expect(got.body.reversibilityLimits).toEqual(["no rollback"]);
    expect(got.fingerprint).toBe(ready.fingerprint);
  });

  it("concurrent dispatch: at most one send wins claim", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-race",
      body: sampleBody(),
      markReady: true,
    });
    const prep = await prepareCursorExecution({
      pilotId,
      projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId,
      projectId,
      attemptId: prep.attemptId,
      statement: "mandate",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });

    const results = await Promise.allSettled([
      dispatchCursorExecution({ pilotId, projectId, attemptId: prep.attemptId }),
      dispatchCursorExecution({ pilotId, projectId, attemptId: prep.attemptId }),
    ]);
    const fulfilled = results.filter((r) => r.status === "fulfilled");
    const rejected = results.filter((r) => r.status === "rejected");
    expect(fulfilled.length).toBe(1);
    expect(rejected.length).toBe(1);
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    expect(["COMPLETED", "DISPATCHED"]).toContain(row.status);
  });

  it("same correlationKey with different workspaceKey → CONFLICT", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-corr",
      body: sampleBody(),
      markReady: true,
    });
    const corr = newId("corr");
    await prepareCursorExecution({
      pilotId,
      projectId,
      contractId: c.contractId,
      correlationKey: corr,
      workspaceKey: "default",
    });
    await expect(
      prepareCursorExecution({
        pilotId,
        projectId,
        contractId: c.contractId,
        correlationKey: corr,
        workspaceKey: "other",
      }),
    ).rejects.toBeInstanceOf(StudioError);
  });

  it("rejects absolute client workspaceCwd", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-cwd",
      body: sampleBody(),
      markReady: true,
    });
    await expect(
      prepareCursorExecution({
        pilotId,
        projectId,
        contractId: c.contractId,
        correlationKey: newId("corr"),
        workspaceCwd: "/tmp/evil",
      }),
    ).rejects.toBeInstanceOf(StudioError);
  });

  it("stale claimToken cannot overwrite after fencing", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-fence",
      body: sampleBody(),
      markReady: true,
    });
    const prep = await prepareCursorExecution({
      pilotId,
      projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId,
      projectId,
      attemptId: prep.attemptId,
      statement: "mandate",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    const claimed = await claimCursorAttempt(prep.attemptId, "AUTHORIZED");
    expect(claimed).toBeTruthy();
    const staleToken = claimed!.claim.claimToken;

    // Simulate lease renewal / new owner by minting a new claim into resultJson while DISPATCHED.
    const row = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    const freshClaim = mintClaim(readClaim(row.resultJson));
    await db
      .update(effectAttempts)
      .set({
        resultJson: writeClaimInto(row.resultJson || "{}", freshClaim),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prep.attemptId));

    await expect(
      persistCursorOwnedResult({
        attemptId: prep.attemptId,
        claimToken: staleToken,
        resultJson: JSON.stringify({ terminalStatus: "finished", forged: true }),
        status: "COMPLETED",
        release: true,
      }),
    ).rejects.toBeInstanceOf(StudioError);
  });

  it("reconcile does not redispatch", async () => {
    const { pilotId, projectId } = await seed();
    const c = await createTechnicalContract({
      pilotId,
      projectId,
      contractKey: "c-rec",
      body: sampleBody(),
      markReady: true,
    });
    const prep = await prepareCursorExecution({
      pilotId,
      projectId,
      contractId: c.contractId,
      correlationKey: newId("corr"),
      workspaceKey: "default",
    });
    await authorizeCursorExecution({
      pilotId,
      projectId,
      attemptId: prep.attemptId,
      statement: "mandate",
      inspectedFingerprint: c.fingerprint,
      confirmed: true,
    });
    await dispatchCursorExecution({ pilotId, projectId, attemptId: prep.attemptId });
    const before = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    await reconcileCursorExecution({ pilotId, projectId, attemptId: prep.attemptId });
    const after = (
      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
    )[0]!;
    expect(after.status).toBe(before.status);
  });
});

```

### `projects/sfia-studio-next/web/tests/unit/ml5-workspace-resolver.test.ts`

```
import { mkdtempSync, realpathSync, rmSync, symlinkSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { describe, expect, it } from "vitest";
import { resolveCursorWorkspace } from "@/domains/execution/workspace-resolver";
import { StudioError } from "@/lib/http-errors";

describe("ML5 P0-02 — workspace confinement", () => {
  it("resolves under approved root with hashed pilot/project segments", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ws-"));
    const r = resolveCursorWorkspace({
      pilotId: "pilot_a",
      projectId: "proj_b",
      workspaceKey: "default",
      env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
    });
    expect(r.workspaceCwd.startsWith(realpathSync(root))).toBe(true);
    expect(r.workspaceKey).toBe("default");
  });

  it("rejects absolute client cwd", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ws-"));
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p",
        projectId: "j",
        clientDeclaredCwd: "/etc/passwd",
        env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(StudioError);
  });

  it("rejects traversal workspaceKey", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ws-"));
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p",
        projectId: "j",
        workspaceKey: "../escape",
        env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(StudioError);
  });

  it("rejects symlink escaping the root", () => {
    const root = mkdtempSync(join(tmpdir(), "sfia-ws-"));
    const outside = mkdtempSync(join(tmpdir(), "sfia-out-"));
    writeFileSync(join(outside, "secret.txt"), "x");
    // Build the expected sandbox path then replace leaf with symlink out.
    const first = resolveCursorWorkspace({
      pilotId: "p1",
      projectId: "j1",
      workspaceKey: "linkme",
      env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
    });
    rmSync(first.workspaceCwd, { recursive: true, force: true });
    symlinkSync(outside, first.workspaceCwd);
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p1",
        projectId: "j1",
        workspaceKey: "linkme",
        ensureDir: false,
        env: { SFIA_CURSOR_WORKSPACE_ROOT: root } as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(StudioError);
  });

  it("requires SFIA_CURSOR_WORKSPACE_ROOT", () => {
    expect(() =>
      resolveCursorWorkspace({
        pilotId: "p",
        projectId: "j",
        env: {} as unknown as NodeJS.ProcessEnv,
      }),
    ).toThrow(/SFIA_CURSOR_WORKSPACE_ROOT/);
  });
});

```

### `projects/sfia-studio-next/web/tests/unit/ml5-web-search-boundary.test.ts`

```
import { describe, expect, it } from "vitest";
import {
  buildPublicWebSearchTool,
  canAttachWebSearchTool,
  isWebSearchIsolationProven,
  preparePublicWebQuery,
  WEB_SEARCH_BOUNDARY_NOTE,
} from "@/domains/conversation/web-search-tools";
import type { CognitivePolicy } from "@/domains/conversation/cognitive-policy";

const analysePolicy = {
  profile: "analyse",
  profileType: "STANDARD",
} as unknown as CognitivePolicy;

describe("ML5 P0-03 — B1 web search boundary", () => {
  it("keeps tool detached when isolation is not proven", () => {
    const env = {
      SFIA_WEB_SEARCH_ENABLED: "1",
    } as unknown as NodeJS.ProcessEnv;
    expect(isWebSearchIsolationProven(env)).toBe(false);
    expect(canAttachWebSearchTool(analysePolicy, env)).toBe(false);
    expect(buildPublicWebSearchTool(env)).toBeNull();
    expect(WEB_SEARCH_BOUNDARY_NOTE).toMatch(/DISABLED/);
  });

  it("still requires both env flags when isolation claimed", () => {
    const env = {
      SFIA_WEB_SEARCH_ENABLED: "1",
      SFIA_WEB_SEARCH_ISOLATION_PROVEN: "1",
    } as unknown as NodeJS.ProcessEnv;
    expect(canAttachWebSearchTool(analysePolicy, env)).toBe(true);
  });

  it("sanitizer blocks or redacts secrets in public query formulation", () => {
    const r = preparePublicWebQuery(
      "search for sk-abcdefghijklmnopqrstuvwxyz0123456789 and project /Users/morris/secret/path",
    );
    if (r.ok) {
      expect(r.query).not.toMatch(/sk-[A-Za-z0-9]{20,}/);
      expect(r.redactions.length).toBeGreaterThan(0);
    } else {
      expect(r.reason.length).toBeGreaterThan(0);
    }
  });

  it("refuses tool for simple profile even if isolation proven", () => {
    const env = {
      SFIA_WEB_SEARCH_ENABLED: "1",
      SFIA_WEB_SEARCH_ISOLATION_PROVEN: "1",
    } as unknown as NodeJS.ProcessEnv;
    const simple = { profile: "simple", profileType: "STANDARD" } as unknown as CognitivePolicy;
    expect(canAttachWebSearchTool(simple, env)).toBe(false);
  });
});

```

### `projects/sfia-studio-next/web/tests/unit/ml5-contract-readiness.test.ts`

```
import { describe, expect, it } from "vitest";
import {
  assertContractBodyComplete,
  evaluateContractReadiness,
} from "@/domains/execution/technical-contract";
import type { TechnicalContractBody } from "@/domains/execution/types";
import {
  buildNoraFinalAnalysisBrief,
  classifyAttachedNoraPayload,
  qualifyCursorRealization,
} from "@/domains/proofs/cursor-qualify";

function sampleBody(): TechnicalContractBody {
  return {
    title: "Mission test",
    engagements: {
      willDo: "Modifier README",
      willNotDo: "Pas de merge",
      expectedResult: "README mis à jour",
      pilotControl: "HumanDecision Exécuter",
    },
    volets: {
      mission: "doc",
      perimeter: "README.md",
      capabilitiesAuthority: "Cursor SDK local",
      stopConditions: "STOP demandé",
      proofsSources: "diff + handoff",
      integrity: "fingerprint",
    },
    instructionText: "éditer README",
    risks: ["faible"],
    exclusions: ["PR"],
    acceptance: { criteria: ["diff"], expectedProofs: ["handoff"] },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["edit"],
      permissionsNeeded: ["workspace"],
    },
    stopConditions: ["STOP"],
    reversibilityLimits: ["pas de rollback auto"],
    gitScope: null,
  };
}

describe("ML5 P1 — contract readiness + Nora brief distinction", () => {
  it("document complete ≠ READY when unknown restrictions", () => {
    const body = sampleBody();
    assertContractBodyComplete(body);
    const r = evaluateContractReadiness({
      body,
      unknownRestrictions: ["scope.git.unknown"],
    });
    expect(r.documentComplete).toBe(true);
    expect(r.ready).toBe(false);
    expect(r.blockedReasons.some((b) => b.includes("UNKNOWN_RESTRICTIONS"))).toBe(true);
  });

  it("ready only when document complete and no unknowns", () => {
    const r = evaluateContractReadiness({ body: sampleBody(), sourcesSufficient: true });
    expect(r.ready).toBe(true);
  });

  it("attached payload is technical brief, not Nora cognitive", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "abc",
      handoffStatus: null,
      reportMarkdown: null,
      manifest: null,
    });
    const brief = buildNoraFinalAnalysisBrief(q);
    expect(classifyAttachedNoraPayload(brief)).toBe("TECHNICAL_BRIEF");
    expect(brief).toMatch(/pas un avis Nora/);
  });
});

```

## 14. Diff complet — fichiers modifiés (git diff HEAD)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 4718c866..cc1c771f 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,24 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-23-ML5-INTEGRATION-CONSOLIDATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Sécurisation et convergence du parcours gouverné |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `69aeb329ee387a7cf8331fc6173fcf0f09bd92b8` |
+| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
+| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
+| Lane | DEV — migrations `017`+`018` sur `sfia_next_dev` et `sfia_next_e2e` ; RECETTE inchangée |
+| Contenu | P0-01 CAS dispatch ; P0-02 workspace confinement ; P0-03 B1 detached until isolation proven ; P1 reversibility/READY/handoff provenance ; parcours `CursorRealizationSurface` ; activité C1 producer ; Figma L1 metadata |
+| Tests | Unit ML5 **29 PASS** ; PG dispatch **7 PASS** ; tsc PASS ; BROWSER/F2/LIVE **NOT PROVEN** |
+| Push projet / PR / merge | **NONE** |
+| STABLE | NOT AVAILABLE |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** (parcours raccordé DEV ; P0 adressés ; F2/LIVE ouverts) |
+
 ## delivery_id: DELIV-2026-11-23-ML5-INTEGRATED-DELIVERY-SLICE

 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md b/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
index caabadca..b9c6a24d 100644
--- a/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
+++ b/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
@@ -1,40 +1,74 @@
-# ML5 as-built — Cursor realization socle (2026-11-23)
+# ML5 as-built — Cursor realization consolidation (2026-11-23)

 | Champ | Valeur |
 |---|---|
 | Branche | `sfia/next-ml5-integrated-delivery-20261123` |
 | Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
 | Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
-| Lane | DEV only (`sfia-next-dev-pg` / :5433) — migration 017 appliquée ; RECETTE (:5434/:3200) non touchée |
-
-## Livré (socle vertical)
-
-- Migration additive `017_ml5_cursor_realization.sql` + schéma Drizzle.
-- Contrats techniques versionnés hors `replyDraft` (`technical_contracts`).
-- Tentatives D7 `CURSOR_EXECUTION` (prepare / authorize / dispatch / stop / reconcile).
-- Adaptateur SDK SCRIPTED (défaut) + LIVE (`SFIA_CURSOR_EFFECT_MODE=LIVE`).
-- Handoff immuable par tentative + qualification D8 neuf rubriques.
-- Activité C1 : table `nora_activity_events` + GET polling.
-- B1 : sanitization + `webSearchTool` gated (`SFIA_WEB_SEARCH_ENABLED=1`).
-- Investigation A : état cognitif / suffisance (`investigation-state.ts`).
-- UI : `ContractViewer`, `RealizationBilan` (fidélité Figma page 12 à compléter L0–F2).
-- APIs sous `/api/projects/:id/realization/*` et activity GET.
-- Dépendance `@cursor/sdk@1.4.2`.
-- Tests unitaires ML5 : 17 PASS (DETERMINISTIC).
-
-## Non livré / réserves
-
-- Intégration LIVE Nora web + preuve non-exfiltration.
-- LIVE Cursor SDK end-to-end (entitlement / workspace réel).
-- REAL GitHub mutatif (interdit sans GO).
-- Fidélité Figma F2 / captures BROWSER page 12.
-- Branchement UI complet dans `projects/[projectId]/page.tsx`.
-- Wire activité dans `nora-adapter` pendant tools.
-- Option Git A/B pour missions Cursor mutatives.
-- Worker process séparé production.
+| HEAD entrée cycle 2 | `69aeb329ee387a7cf8331fc6173fcf0f09bd92b8` |
+| Lane | DEV only (`sfia-next-dev-pg` / :5433) — migrations **017+018** sur `sfia_next_dev` et `sfia_next_e2e` ; RECETTE non touchée |
+| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE |
+
+## Cycle 2 — sécurisation et convergence
+
+### P0 corrigés (DEV / DETERMINISTIC + PG)
+
+| ID | Correctif | Preuve |
+|---|---|---|
+| P0-01 | Claim atomique AUTHORIZED\|AMBIGUOUS→DISPATCHED ; fencing `claimToken` ; refus redispatch aveugle | `cursor-claim.ts` + `ml5-cursor-dispatch.pg.test.ts` **7 PASS** |
+| P0-02 | Workspace serveur sous `SFIA_CURSOR_WORKSPACE_ROOT` ; rejet cwd client absolu ; clé `workspaceKey` | `workspace-resolver.ts` + unit **5 PASS** |
+| P0-03 | `webSearchTool` détaché tant que `SFIA_WEB_SEARCH_ISOLATION_PROVEN≠1` | `web-search-tools.ts` + boundary unit |
+
+### P1 consolidés
+
+- Persistance `reversibility_limits_json` + round-trip fingerprint.
+- DRAFT ≠ READY : `markReady` / `unknownRestrictions` / route `…/ready`.
+- Handoff : provenance, état tentative, inventaire incomplet ≠ succès, secrets → REJECTED.
+- Brief technique déterministe ≠ avis Nora cognitif (`noraAnalysisKind`).
+- LIVE adapter : `waitForTerminal=false` après ACK (HTTP non bloqué sur wait complet).
+
+### Parcours produit
+
+- `CursorRealizationSurface` monté sur `?surface=publication` (shell existant).
+- Dialog D6 Oui/Non ; Non = aucun effet.
+- Bilan D8 + « En discuter avec Nora » → draft Travail.
+- Activité C1 : producteur branché au tour Nora ; séquence sous `FOR UPDATE`.
+- Investigation : snapshot durable `preparations.projection_json`.
+
+### Figma page 12
+
+- L0 inventaire 14 frames (cycle 1).
+- L1 : metadata native 14 frames + design context **12.02** (session `c2ce3ba7-…`).
+- F2 / BROWSER runtime comparison : **NOT PROVEN**.
+
+### Tests exécutés
+
+- Vitest unit ML5 : **29 PASS**.
+- Vitest PG `ml5-cursor-dispatch.pg.test.ts` : **7 PASS** (sfia_next_e2e).
+- `tsc --noEmit` : PASS après correctifs UI.
+- BROWSER parcours : **NOT RUN** (fixture/dev server non exercé ce cycle).
+- LIVE SDK / LIVE web : **NOT PROVEN**.
+
+### Git Cursor A/B (recommandation, non ADOPTED)
+
+| Option | Blast radius | Recommandation revue |
+|---|---|---|
+| A — publication Git directe par Cursor | Droits effectifs Cursor ; gouvernance permissions plus opaque | Déconseillé sans GO |
+| **B — Cursor files puis publication D7/D9** | Publication bornée HumanDecision + D9 | **Préférée** — à arbitrer Morris ; **pas ADOPTED** |
+
+### Non livré / réserves ouvertes
+
+- F2 pixel + BROWSER 12.01–12.14.
+- Avis Nora cognitif réel sur dossier D8 (run Nora).
+- LIVE SDK confined end-to-end.
+- Isolation B1 prouvée (gate `ISOLATION_PROVEN`).
+- Option Git B ADOPTED.
+- Worker production long-run.
+- Push projet / PR / merge / RECETTE / STABLE.

 ## Invariants respectés

-- Pas de second moteur D6/D7/D8/Git/cognitif.
-- Pas d'admin MCP/Cursor Desktop dans Studio.
+- Pas de second moteur D6/D7/D8/D9/MCP.
+- Pas d'admin Cursor Desktop dans Studio.
 - send ≠ observed ; STOP ≠ rollback ; finished ≠ conforme ; missing report ≠ no work.
+- Brief technique ≠ D8 ≠ avis Nora ≠ HumanDecision.
diff --git a/projects/sfia-studio-next/construction/ml5-figma-page12-l0-inventory.md b/projects/sfia-studio-next/construction/ml5-figma-page12-l0-inventory.md
index eb646f7c..67d9b2f8 100644
--- a/projects/sfia-studio-next/construction/ml5-figma-page12-l0-inventory.md
+++ b/projects/sfia-studio-next/construction/ml5-figma-page12-l0-inventory.md
@@ -15,7 +15,7 @@
 |---|---|---|---|---|
 | 12.01 | `1210:233` | Nora prépare une intervention | 1680×970 @ (100,190) | Fil Nora + activité préparation contrat |
 | 12.02 | `1211:117` | Inspecter le contrat Cursor | 1680×970 @ (1960,190) | Visionneuse 50/50 contrat |
-| 12.03 | `1211:676` | Confirmation du lancement · contrat de fond | 1680×970 @ (3820,190) | Overlay Oui/Non confirmation |
+| 12.03 | `1211:676` | Confirmation du lancement · contrat de fond | 1680×970 @ (3820,190) | **Seul overlay** de la page (`Modal / Confirmer le lancement` Oui/Non) |
 | 12.04 | `1211:277` | Exécution · Historique des interventions | 1680×970 @ (100,1370) | Liste interventions / tentatives |
 | 12.05 | `1211:424` | Contrat d’exécution · Instruction et autorité | 1680×970 @ (1960,1370) | Fiche contrat + autorité |
 | 12.06 | `1212:383` | Réalisation en cours · LIVE Cursor SDK | 1680×970 @ (3820,1370) | LIVE observé |
@@ -42,5 +42,8 @@
 ## Statut L1/L2

 - L0 : **FAIT** (node-ids natifs).
-- L1/L2 (Auto Layout, tokens, assets, PNG hash) : **EN COURS** — requis avant verdict H08/F2.
-- Captures PNG natives : à exporter par frame avant code fidélité.
+- L1 metadata : **FAIT** — `get_metadata` page `1209:2` (session `c2ce3ba7-75cb-4509-a7d0-2699722fabdb`) ; 14 frames 1680×970 confirmées.
+- L1 design context : **PARTIEL** — `get_design_context` frame **12.02** (`1211:117`) acquis (rail 246px, tokens `--bg/#0b101b`, `--accent/#7477ed`, panneaux 50/50, engagements 4, volets 6).
+- L2 tokens/assets PNG hashés pour les 14 états : **INCOMPLET**.
+- F2 runtime vs native : **NOT PROVEN** (pas de capture BROWSER servie ce cycle).
+- Note structure : Figma page 12 expose **Exécution** et **Résultats & preuves** dans Accès directs — runtime actuel mappe le parcours Cursor sur `?surface=publication` (libellé Résultats) sans nouveau shell ; écart rail « Exécution » documenté.
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index 96231869..feb1fda3 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -76,7 +76,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `A08` | Distinguer découvert, consulté, vérifié, partiel, périmé, refusé et contradictoire ; préserver provenance, branche et version. | NV | — |
 | ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | PARTIEL | `investigation-state.ts` + unit ; non branché tour LIVE |
 | ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | PARTIEL | État mémoire A ; pas encore checkpoint durable A |
-| ☐ | `A11` | Conserver/reconstituer de façon fiable l'investigation après déconnexion, interruption, limite de contexte ou incident fournisseur sans fausse lecture ni effet rejoué. | PARTIEL | `resumeInvestigation` refuse lectures inventées ; persistance A ouverte |
+| ☐ | `A11` | Conserver/reconstituer de façon fiable l'investigation après déconnexion, interruption, limite de contexte ou incident fournisseur sans fausse lecture ni effet rejoué. | PARTIEL | `investigation-persistence.ts` → `preparations.projection_json` ; reprise unit OK ; PG reprise tour non exhaustif |
 | ☐ | `A12` | Réduire les coûts/latences sur demandes simples et rendre ces capacités disponibles transversalement dans sas, projet, documents, décision et bilan. | NV | — |

 ### B. Recherche et lecture web publique
@@ -90,7 +90,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `B04` | Afficher des citations/liens sources utilisables et les métadonnées de fraîcheur réellement établies. | NV | — |
 | ☐ | `B05` | Distinguer source découverte, page ouverte, extrait disponible, couverture partielle et fait vérifié ; ne jamais inventer une lecture complète. | NV | — |
 | ☐ | `B06` | Neutraliser les injections d'instructions issues de pages/snippets et ne leur attribuer aucun droit D6/D7/Git. | PARTIEL | Instructions système + résultats non-autorité ; LIVE injection non prouvée |
-| ☐ | `B07` | Empêcher l'exfiltration de secrets et données privées via requêtes web, résultats, traces ou liens affichés. | PARTIEL | `web-search-sanitize` DETERMINISTIC ; séparation run privé/public LIVE non prouvée |
+| ☐ | `B07` | Empêcher l'exfiltration de secrets et données privées via requêtes web, résultats, traces ou liens affichés. | PARTIEL | P0-03 : outil détaché tant que `SFIA_WEB_SEARCH_ISOLATION_PROVEN≠1` ; sanitize DETERMINISTIC ; LIVE non-exfil NOT PROVEN |
 | ☐ | `B08` | Traiter timeout, pages/PDF indisponibles, budget/coût/latence, échec et reprise avec limite honnête et sans crawler parallèle par défaut. | NV | — |
 | ☐ | `B09` | Prouver la compatibilité du fournisseur/outillage web avec le runtime D3 et la réponse structurée, sur modèle/version réels. | NV | — |

@@ -99,8 +99,8 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi

 | Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
 |---|---|---|---|---|
-| ☐ | `C01` | Afficher les phases significatives de travail long dans le fil concerné, pendant l'investigation, sans activité artificielle pour chaque message. | NV | — |
-| ☐ | `C02` | Différencier étape annoncée, tentative d'outil, retour effectivement observé, confirmation, échec et incertitude. | NV | — |
+| ☐ | `C01` | Afficher les phases significatives de travail long dans le fil concerné, pendant l'investigation, sans activité artificielle pour chaque message. | PARTIEL | Producteur `appendActivityEvent` branché au tour Nora (ANNOUNCED→COMPLETED) ; UI fil partielle |
+| ☐ | `C02` | Différencier étape annoncée, tentative d'outil, retour effectivement observé, confirmation, échec et incertitude. | PARTIEL | Natures ANNOUNCED/OBSERVED/COMPLETED/UNCERTAIN ; séquence sous lock PG |
 | ☐ | `C03` | Relier les événements aux lectures D4/historique/Git/web réellement effectuées et à leur couverture. | NV | — |
 | ☐ | `C04` | Afficher statut, limites et erreurs proportionnés, sans pourcentage fictif, lecture inventée ou résultat présumé. | NV | — |
 | ☐ | `C05` | Proposer résumé compact et détail repliable, sans console brute ni raisonnement privé. | NV | — |
@@ -114,15 +114,15 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
 |---|---|---|---|---|
 | ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | NV | — |
-| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | NV | — |
-| ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | PARTIEL | `technical_contracts` + fingerprint ; API create/get |
+| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | DRAFT≠READY ; `markReady` + unknownRestrictions ; syntaxe ≠ suffisance |
+| ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | PARTIEL | `reversibility_limits_json` round-trip + fingerprint canonique ; PG test |
 | ☐ | `D04` | Afficher les quatre engagements : ce qui sera fait, non fait, résultat attendu, contrôle du Pilote. | PARTIEL | `ContractViewer` ; BROWSER Figma F2 manquant |
 | ☐ | `D05` | Rendre inspectables les six volets R2 D7 : mission, périmètre, capacités/autorité, STOP, preuves/sources, intégrité. | PARTIEL | `ContractViewer` volets ; F2 manquant |
 | ☐ | `D06` | Afficher l'instruction technique complète en lecture défilante, sans troncature ni substitution des champs de réponse Nora. | PARTIEL | Stockage full `instruction_text` + UI expand ; F2 12.14 manquant |
 | ☐ | `D07` | Garantir identité de version/empreinte entre texte inspecté, texte autorisé et octets effectivement transmis au SDK. | PARTIEL | Fingerprint + authorize inspect match + dispatch recheck ; LIVE SDK non prouvé |
 | ☐ | `D08` | Requalifier un changement matériel d'instruction, périmètre, cible, risque, droit ou version avant lancement. | PARTIEL | `isMaterialContractChange` + requalification au dispatch |
 | ☐ | `D09` | Implémenter la visionneuse Travail 50/50 avec fil Nora utilisable, carte de contrat et navigation vers Exécution. | NV | — |
-| ☐ | `D10` | Exécuter uniquement après acte explicite Exécuter et confirmation générique Oui/Non ; Non sans effet. | EC | Authorize API = acte D6 ; UI confirmation 12.03 non câblée BROWSER |
+| ☐ | `D10` | Exécuter uniquement après acte explicite Exécuter et confirmation générique Oui/Non ; Non sans effet. | PARTIEL | `confirmed:true` requis API + dialog `d6-confirm-launch` dans `CursorRealizationSurface` ; BROWSER F2 non prouvé |
 | ☐ | `D11` | Recontrôler D6/D7/D9 et capacités/permissions réelles au point d'effet ; interdictions et suspensions opposables. | PARTIEL | `assertCurrentCursorAuthority` au dispatch ; MCP réel non vérifié |
 | ☐ | `D12` | Conserver lien au bon projet, Pilote, contrat et cycle d'origine le cas échéant, sans imposer de cycle. | PARTIEL | attempt/contract/pilot/project liés |

@@ -135,17 +135,17 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `E02` | Exécuter dans l'environnement Cursor effectif ; Cursor Desktop demeure disponible pour administration, comptes, MCP et authentifications. | PARTIEL | Pas d'admin Desktop dans Studio ; LIVE cwd à qualifier |
 | ☐ | `E03` | Créer/récupérer une tentative unique avec projet, Pilote, contrat/version/empreinte et mandat. | PARTIEL | `prepareCursorExecution` + correlationKey |
 | ☐ | `E04` | Persister identité/autorité/tentative et contexte avant send/dispatch ; séparer store SDK et vérité métier D7. | PARTIEL | claim avant send ; resultJson D7 |
-| ☐ | `E05` | Superviser les runs longs hors durée de vie d'une requête HTTP ou d'un onglet navigateur. | EC | Claim lease ; worker dédié non construit |
+| ☐ | `E05` | Superviser les runs longs hors durée de vie d'une requête HTTP ou d'un onglet navigateur. | PARTIEL | LIVE `waitForTerminal=false` après ACK ; SCRIPTED terminal immédiat ; worker prod non imposé |
 | ☐ | `E06` | Collecter événements SDK réellement exposés et projeter des états LIVE sobres dans Exécution. | PARTIEL | Projection resultJson ; UI Exécution partielle |
 | ☐ | `E07` | Distinguer demande de lancement, ACK, run observé, travail, erreur, timeout, fin et UNKNOWN. | PARTIEL | `CursorLiveProjection` fields |
 | ☐ | `E08` | Distinguer STOP demandé, transmis, observé et effets partiels ; annulation n'implique pas rollback. | PARTIEL | stop API + limits CANCEL_IS_NOT_ROLLBACK |
-| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | claim + idempotent SDK key=attemptId ; PG integration pending |
-| ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | PARTIEL | reconcile → AMBIGUOUS ; preuves PG partielles |
+| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | P0-01 CAS `claimCursorAttempt` ; PG concurrent 1 win ; no blind redispatch DISPATCHED |
+| ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | PARTIEL | reconcile sans redispatch ; stale claimToken fenced (PG) |
 | ☐ | `E11` | Retrouver durablement interventions, contrats, versions, événements et tentatives, y compris hors cycle. | PARTIEL | Tables durables ; UI historique 12.04 non câblée |
 | ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | mcpRequired listé dans plan ; vérification LIVE non faite |
 | ☐ | `E13` | Ne pas construire un gestionnaire MCP/approbations dans Studio, ni désactiver globalement les protections pour rendre un test vert. | PARTIEL | Aucun admin MCP ajouté |
 | ☐ | `E14` | Ne pas forcer Git/MCP sur une mission qui n'en a pas besoin ; production et DEV utilisent le même sens du contrat avec environnements distincts. | PARTIEL | gitScope/mcp optionnels sur plan |
-| ☐ | `E15` | Isoler concurrents, projets, workspaces, identités SDK, secrets et rapports ; aucun croisement de tentative. | PARTIEL | scoping pilot/project/attempt ; isolation workspace LIVE non prouvée |
+| ☐ | `E15` | Isoler concurrents, projets, workspaces, identités SDK, secrets et rapports ; aucun croisement de tentative. | PARTIEL | P0-02 `resolveCursorWorkspace` sous `SFIA_CURSOR_WORKSPACE_ROOT` ; client cwd refusé ; LIVE isolation OS NOT PROVEN |

 ### F. Git de travail et continuité des réalisations
 **Responsabilités :** D7/D9/D6 — conditionnel aux missions Git. **Sources :** Contrat ML5 §§17.2,18.2,19.5 ; R2 D9 et architecture §18.
@@ -178,9 +178,9 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `G09` | En cas de crash/rapport absent/partiel/hostile ou contradiction, conserver faits accessibles et état PARTIAL/UNKNOWN sans succès inventé. | PARTIEL | MISSING/INCOMPLETE/REJECTED ; secrets → REJECTED |
 | ☐ | `G10` | D7 rattache/contrôle identité de rapport ; D9 vérifie Git ; D8 recoupe les changements réels, manifestes et critères. | PARTIEL | D7+D8 ; D9 recoupement Git Cursor non branché |
 | ☐ | `G11` | Rendre consultables les neuf rubriques D8 : résumé, prévu, réalisé, évaluation, écarts, impact, verdict, recommandations, sources. | PARTIEL | `qualifyCursorRealization` + `RealizationBilan` |
-| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | Brief unique optionnel à qualification POST ; pas d'auto micro-revue |
-| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | Séparation types/UI ; câblage parcours projet partiel |
-| ☐ | `G14` | Permettre En discuter avec Nora : référence de bilan jointe au brouillon, retirable, aucun envoi automatique. | NV | — |
+| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | Brief technique déterministe ≠ avis Nora cognitif (`noraAnalysisKind`) ; run Nora cognitif encore ouvert |
+| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | Labels + `CursorRealizationSurface` sur `?surface=publication` |
+| ☐ | `G14` | Permettre En discuter avec Nora : référence de bilan jointe au brouillon, retirable, aucun envoi automatique. | PARTIEL | `onDiscussWithNora` → `setDraft` + Travail ; envoi non automatique |
 | ☐ | `G15` | Conserver historique/version et réserves ; requalification datée si preuve tardive, sans rejouer la mission. | NV | — |

 ### H. UX Figma page 12 et fidélité de transposition
@@ -195,7 +195,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | NV | — |
 | ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | NV | — |
 | ☐ | `H07` | 12.10 : activité de Nora dans le sas sans projet fictif. | NV | — |
-| ☐ | `H08` | Avant code de chaque surface : Figma validée et extraction L0/L1/L2, assets exacts, PNG natif hashé, mapping node→DOM→assertion ; après code : runtime screenshot, styles/DOM/F2, état/viewport/fixture identiques, interactions browser, réserves explicites. | NV | — |
+| ☐ | `H08` | Avant code de chaque surface : Figma validée et extraction L0/L1/L2, assets exacts, PNG natif hashé, mapping node→DOM→assertion ; après code : runtime screenshot, styles/DOM/F2, état/viewport/fixture identiques, interactions browser, réserves explicites. | PARTIEL | L0+L1 metadata 14 frames + design context 12.02 ; F2/BROWSER runtime NOT PROVEN |

 ### I. Non-régression, qualité, preuve et gouvernance
 **Responsabilités :** Transverse D1–D9 / SEF / ENV-01. **Sources :** SEF v0.2, ENV-01, product-versioning, SFIA v2.6 ; ML5 architecture A–D.
diff --git a/projects/sfia-studio-next/web/scripts/db-migrate.sh b/projects/sfia-studio-next/web/scripts/db-migrate.sh
index 762b2eea..52230f0c 100755
--- a/projects/sfia-studio-next/web/scripts/db-migrate.sh
+++ b/projects/sfia-studio-next/web/scripts/db-migrate.sh
@@ -35,4 +35,5 @@ apply "014_journal_d4_revisions.sql"
 apply "015_trajectory_qualification.sql"
 apply "016_initial_qualification_expected.sql"
 apply "017_ml5_cursor_realization.sql"
-echo "db:migrate OK (001→017)"
+apply "018_ml5_contract_reversibility.sql"
+echo "db:migrate OK (001→018)"
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
index 1e02f78d..7cc137a3 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
@@ -13,16 +13,28 @@ export async function POST(
     const body = (await req.json()) as {
       statement?: string;
       inspectedFingerprint?: string;
+      /** Explicit Oui — required. Missing / false = no HumanDecision, no effect. */
+      confirmed?: boolean;
     };
     if (!body.statement || !body.inspectedFingerprint) {
       return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
     }
+    if (body.confirmed !== true) {
+      return NextResponse.json(
+        {
+          error: "CONFIRMATION_REFUSED",
+          message: "Confirmation Non ou absente — aucun acte D6, aucun dispatch",
+        },
+        { status: 400 },
+      );
+    }
     const result = await authorizeCursorExecution({
       pilotId: session.pilotId,
       projectId,
       attemptId,
       statement: body.statement,
       inspectedFingerprint: body.inspectedFingerprint,
+      confirmed: true,
     });
     return NextResponse.json(result);
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
index d29148d5..18f896f3 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
@@ -37,6 +37,12 @@ export async function POST(
       reportMarkdown?: string;
       manifest?: HandoffManifest;
       expectedContractFingerprint?: string;
+      provenance?: {
+        acquisition?: "CLIENT_DECLARED" | "SCRIPTED_ADAPTER" | "RUNTIME_COLLECTED" | "UNKNOWN";
+        declaredExecutorId?: string | null;
+        observedAgentId?: string | null;
+        observedRunId?: string | null;
+      };
     };
     if (
       typeof body.reportMarkdown !== "string" ||
@@ -52,6 +58,14 @@ export async function POST(
       reportMarkdown: body.reportMarkdown,
       manifest: body.manifest,
       expectedContractFingerprint: body.expectedContractFingerprint,
+      provenance: body.provenance
+        ? {
+            acquisition: body.provenance.acquisition ?? "CLIENT_DECLARED",
+            declaredExecutorId: body.provenance.declaredExecutorId,
+            observedAgentId: body.provenance.observedAgentId,
+            observedRunId: body.provenance.observedRunId,
+          }
+        : { acquisition: "CLIENT_DECLARED" },
     });
     return NextResponse.json(result);
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
index 50b594fd..a8780713 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
@@ -6,6 +6,7 @@ import { getCursorAttempt } from "@/domains/execution/cursor-attempt-service";
 import type { HandoffManifest } from "@/domains/execution/handoff-integrity";
 import {
   buildNoraFinalAnalysisBrief,
+  classifyAttachedNoraPayload,
   qualifyCursorRealization,
 } from "@/domains/proofs/cursor-qualify";
 import { requireStudioSession } from "@/domains/identity/session";
@@ -87,7 +88,15 @@ export async function POST(
       manifest,
       terminalStatus: attempt.live.terminalStatus ?? null,
     });
-    const noraBrief = body.attachNoraAnalysis ? buildNoraFinalAnalysisBrief(q) : null;
+    // attachNoraAnalysis stores a deterministic technical brief only — not a Nora run.
+    const technicalBrief = body.attachNoraAnalysis ? buildNoraFinalAnalysisBrief(q) : null;
+    const noraKind = classifyAttachedNoraPayload(technicalBrief);
+    const limits = [
+      ...q.limits,
+      ...(noraKind === "TECHNICAL_BRIEF"
+        ? ["NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté"]
+        : []),
+    ];
     const existing = (
       await db
         .select()
@@ -117,9 +126,9 @@ export async function POST(
       status: "RECORDED",
       rubricsJson: JSON.stringify(q.rubrics),
       verdict: q.verdict,
-      noraAnalysisMarkdown: noraBrief,
-      noraAnalysisAt: noraBrief ? now : null,
-      limitsJson: JSON.stringify(q.limits),
+      noraAnalysisMarkdown: technicalBrief,
+      noraAnalysisAt: technicalBrief ? now : null,
+      limitsJson: JSON.stringify(limits),
       createdAt: now,
       updatedAt: now,
     });
@@ -127,8 +136,9 @@ export async function POST(
       qualificationId: id,
       verdict: q.verdict,
       rubrics: q.rubrics,
-      limits: q.limits,
-      noraAnalysisMarkdown: noraBrief,
+      limits,
+      noraAnalysisMarkdown: technicalBrief,
+      noraAnalysisKind: noraKind,
       testsPass: q.testsPass,
       conformityProven: q.conformityProven,
       morrisAcceptance: q.morrisAcceptance,
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/prepare/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/prepare/route.ts
index 39d69f41..7965b7eb 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/prepare/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/prepare/route.ts
@@ -10,10 +10,13 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
     const body = (await req.json()) as {
       contractId?: string;
       correlationKey?: string;
+      /** Server-side key only. Absolute client paths are rejected. */
+      workspaceKey?: string;
+      /** Legacy — rejected when absolute / escaping. */
       workspaceCwd?: string;
       mcpRequired?: string[];
     };
-    if (!body.contractId || !body.correlationKey || !body.workspaceCwd) {
+    if (!body.contractId || !body.correlationKey) {
       return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
     }
     const result = await prepareCursorExecution({
@@ -21,6 +24,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
       projectId,
       contractId: body.contractId,
       correlationKey: body.correlationKey,
+      workspaceKey: body.workspaceKey ?? "default",
       workspaceCwd: body.workspaceCwd,
       mcpRequired: body.mcpRequired,
     });
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
index 6ecbd8aa..12aa8166 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
@@ -35,6 +35,10 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
       body?: TechnicalContractBody;
       sourceTurnCommandId?: string | null;
       supersedesContractId?: string | null;
+      /** Explicit promotion — syntax-complete alone never yields READY. */
+      markReady?: boolean;
+      unknownRestrictions?: string[];
+      sourcesSufficient?: boolean;
     };
     if (!body.contractKey || !body.body) {
       return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
@@ -47,6 +51,9 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
       body: body.body,
       sourceTurnCommandId: body.sourceTurnCommandId,
       supersedesContractId: body.supersedesContractId,
+      markReady: body.markReady === true,
+      unknownRestrictions: body.unknownRestrictions,
+      sourcesSufficient: body.sourcesSufficient,
     });
     return NextResponse.json(result);
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 65fa2643..b7e7c4ca 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -4,6 +4,7 @@ import { useEffect, useRef, useState } from "react";
 import { useParams, useRouter, useSearchParams } from "next/navigation";
 import { ProjectChrome } from "@/components/figma/ProjectChrome";
 import { NoraConversation } from "@/components/figma/NoraConversation";
+import { CursorRealizationSurface } from "@/components/figma/CursorRealizationSurface";
 import { TravailViewer, type TravailViewerResource } from "@/components/figma/TravailViewer";
 import {
   ProjectJournal,
@@ -2976,13 +2977,29 @@ export default function ProjectPage() {
         />
       ) : null}

-      {surface === "git" || surface === "publication" ? (
+      {surface === "git" ? (
         <GitRepositoriesSurface
           projectId={params.projectId}
           projectName={projectName}
         />
       ) : null}

+      {surface === "publication" ? (
+        <div data-testid="publication-surface-ml5">
+          <CursorRealizationSurface
+            projectId={params.projectId}
+            onDiscussWithNora={(text) => {
+              setDraft(text);
+              selectSurface("travail");
+            }}
+          />
+          <GitRepositoriesSurface
+            projectId={params.projectId}
+            projectName={projectName}
+          />
+        </div>
+      ) : null}
+
       {surface === "journal" ? (
         <ProjectJournal
           subjects={(knowledge?.subjects ?? []).map((s) => ({
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index f62503be..ac87e8a3 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -934,9 +934,11 @@ export const technicalContracts = pgTable(
     acceptanceJson: text("acceptance_json").notNull().default("{}"),
     executorJson: text("executor_json").notNull().default("{}"),
     stopConditionsJson: text("stop_conditions_json").notNull().default("[]"),
+    reversibilityLimitsJson: text("reversibility_limits_json").notNull().default("[]"),
     gitScopeJson: text("git_scope_json"),
     sourceTurnCommandId: text("source_turn_command_id"),
     supersedesContractId: text("supersedes_contract_id"),
+    readinessJson: text("readiness_json"),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
     updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
   },
@@ -1047,4 +1049,4 @@ export const noraActivityEvents = pgTable(
   ],
 );

-export const schemaRevision = "017_ml5_cursor_realization";
+export const schemaRevision = "018_ml5_contract_reversibility";
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts b/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
index c4b55a49..892d5136 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
@@ -1,4 +1,4 @@
-import { and, asc, eq, gt } from "drizzle-orm";
+import { and, asc, eq, gt, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import { conversationTurnCommands, noraActivityEvents } from "@/db/schema";
 import { StudioError } from "@/lib/http-errors";
@@ -25,51 +25,63 @@ export type ActivityEventInput = {
 /**
  * Append a functional activity event. Never invents percentages or private chain-of-thought.
  * GET-side consumers must treat ANNOUNCED ≠ OBSERVED.
+ * Sequence is allocated under turn lock to survive concurrent writers (unique turn+seq).
  */
 export async function appendActivityEvent(input: ActivityEventInput) {
-  const turn = (
-    await db
-      .select()
-      .from(conversationTurnCommands)
-      .where(eq(conversationTurnCommands.id, input.turnCommandId))
-      .limit(1)
-  )[0];
-  if (!turn) throw new StudioError("NOT_FOUND", "Tour introuvable");
-  if (turn.conversationId !== input.conversationId) {
-    throw new StudioError("ACCESS_DENIED", "Tour/conversation incohérents");
-  }
-  if (turn.ownerPilotId !== input.ownerPilotId) {
-    throw new StudioError("ACCESS_DENIED", "Tour d'un autre Pilote");
-  }
-  if (input.ownerToken != null && turn.ownerToken && input.ownerToken !== turn.ownerToken) {
-    throw new StudioError("ACCESS_DENIED", "OwnerToken invalide — fencing activité");
-  }
+  return db.transaction(async (tx) => {
+    await tx.execute(
+      sql`select id from conversation_turn_commands
+          where id = ${input.turnCommandId}
+          for update`,
+    );
+    const turn = (
+      await tx
+        .select()
+        .from(conversationTurnCommands)
+        .where(eq(conversationTurnCommands.id, input.turnCommandId))
+        .limit(1)
+    )[0];
+    if (!turn) throw new StudioError("NOT_FOUND", "Tour introuvable");
+    if (turn.conversationId !== input.conversationId) {
+      throw new StudioError("ACCESS_DENIED", "Tour/conversation incohérents");
+    }
+    if (turn.ownerPilotId !== input.ownerPilotId) {
+      throw new StudioError("ACCESS_DENIED", "Tour d'un autre Pilote");
+    }
+    if (input.ownerToken != null && turn.ownerToken && input.ownerToken !== turn.ownerToken) {
+      throw new StudioError("ACCESS_DENIED", "OwnerToken invalide — fencing activité");
+    }

-  const last = (
-    await db
-      .select({ sequence: noraActivityEvents.sequence })
-      .from(noraActivityEvents)
-      .where(eq(noraActivityEvents.turnCommandId, input.turnCommandId))
-      .orderBy(asc(noraActivityEvents.sequence))
-  ).at(-1);
-  const sequence = (last?.sequence ?? 0) + 1;
-  const id = newId("nact");
-  await db.insert(noraActivityEvents).values({
-    id,
-    conversationId: input.conversationId,
-    turnCommandId: input.turnCommandId,
-    ownerPilotId: input.ownerPilotId,
-    generationId: input.generationId ?? turn.generationId ?? null,
-    sequence,
-    phase: input.phase.slice(0, 80),
-    nature: input.nature,
-    status: input.status,
-    summary: input.summary.slice(0, 500),
-    detailJson: JSON.stringify(input.detail ?? {}),
-    sourceRef: input.sourceRef ?? null,
-    createdAt: new Date(),
+    const last = (
+      await tx
+        .select({ sequence: noraActivityEvents.sequence })
+        .from(noraActivityEvents)
+        .where(eq(noraActivityEvents.turnCommandId, input.turnCommandId))
+        .orderBy(asc(noraActivityEvents.sequence))
+    ).at(-1);
+    const sequence = (last?.sequence ?? 0) + 1;
+    const id = newId("nact");
+    // Strip obvious secrets from summary/detail before persistence.
+    const safeSummary = input.summary
+      .replace(/\bsk-[A-Za-z0-9]{20,}\b/g, "[REDACTED]")
+      .slice(0, 500);
+    await tx.insert(noraActivityEvents).values({
+      id,
+      conversationId: input.conversationId,
+      turnCommandId: input.turnCommandId,
+      ownerPilotId: input.ownerPilotId,
+      generationId: input.generationId ?? turn.generationId ?? null,
+      sequence,
+      phase: input.phase.slice(0, 80),
+      nature: input.nature,
+      status: input.status,
+      summary: safeSummary,
+      detailJson: JSON.stringify(input.detail ?? {}),
+      sourceRef: input.sourceRef ?? null,
+      createdAt: new Date(),
+    });
+    return { id, sequence };
   });
-  return { id, sequence };
 }

 export async function listActivityEvents(input: {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 38fb10c6..e2ada8bb 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1086,6 +1086,23 @@ export async function postUserMessageAndNora(

   let reply;
   try {
+    // C1 — announce Nora work (ANNOUNCED ≠ OBSERVED). Best-effort; never blocks the turn.
+    try {
+      const { appendActivityEvent } = await import("./activity-projection");
+      await appendActivityEvent({
+        conversationId: reserved.conversationId,
+        turnCommandId: reserved.commandId,
+        ownerPilotId: pilotId,
+        generationId: null,
+        phase: "nora.generate",
+        nature: "ANNOUNCED",
+        status: "RUNNING",
+        summary: "Nora prépare une réponse",
+        ownerToken: reserved.ownerToken,
+      });
+    } catch {
+      /* activity is observational — turn continues */
+    }
     // Heartbeat during long provider work so stale lease does not falsely orphan an active run.
     const leasePulse = setInterval(() => {
       void touchTurnLease(reserved.commandId, reserved.ownerToken);
@@ -1111,6 +1128,22 @@ export async function postUserMessageAndNora(
           projectId: ctx.project?.id,
         },
       });
+      try {
+        const { appendActivityEvent } = await import("./activity-projection");
+        await appendActivityEvent({
+          conversationId: reserved.conversationId,
+          turnCommandId: reserved.commandId,
+          ownerPilotId: pilotId,
+          generationId: reply.generationId ?? null,
+          phase: "nora.generate",
+          nature: "COMPLETED",
+          status: "COMPLETED",
+          summary: "Réponse Nora disponible",
+          ownerToken: reserved.ownerToken,
+        });
+      } catch {
+        /* activity observational */
+      }
     } finally {
       clearInterval(leasePulse);
     }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/web-search-tools.ts b/projects/sfia-studio-next/web/src/domains/conversation/web-search-tools.ts
index e87fca49..b6912245 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/web-search-tools.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/web-search-tools.ts
@@ -1,7 +1,13 @@
 /**
- * B1 — optional hosted web search for Nora.
- * Enabled only when SFIA_WEB_SEARCH_ENABLED=1 and policy allows.
- * Never attach private context into the public query path.
+ * B1 — optional hosted web search for Nora (P0-03).
+ *
+ * The sanitizer alone is NOT an effective boundary when webSearchTool is attached
+ * to a Nora run that holds private D3/D4 context: the model can still formulate
+ * outgoing queries from private material. Until an isolated public search path
+ * is demonstrated, the tool stays detached.
+ *
+ * Gate: SFIA_WEB_SEARCH_ENABLED=1 AND SFIA_WEB_SEARCH_ISOLATION_PROVEN=1.
+ * No LIVE trial with private data before the applicable security gate.
  */

 import { webSearchTool } from "@openai/agents";
@@ -12,19 +18,33 @@ export function isWebSearchEnvEnabled(env: NodeJS.ProcessEnv = process.env): boo
   return (env.SFIA_WEB_SEARCH_ENABLED || "").trim() === "1";
 }

-export function canAttachWebSearchTool(policy: CognitivePolicy): boolean {
-  if (!isWebSearchEnvEnabled()) return false;
-  // Simple profile: no systematic web. Investigation/analyse only when gated.
+/** Technical isolation of public queries from private Nora context — not a prompt claim. */
+export function isWebSearchIsolationProven(env: NodeJS.ProcessEnv = process.env): boolean {
+  return (env.SFIA_WEB_SEARCH_ISOLATION_PROVEN || "").trim() === "1";
+}
+
+export function canAttachWebSearchTool(
+  policy: CognitivePolicy,
+  env: NodeJS.ProcessEnv = process.env,
+): boolean {
+  if (!isWebSearchEnvEnabled(env)) return false;
+  // Fail closed until isolation is demonstrated for the retained mechanism.
+  if (!isWebSearchIsolationProven(env)) return false;
   if (policy.profile === "simple") return false;
-  if (policy.profileType === "TEST_BOUNDARY" && !(process.env.SFIA_WEB_SEARCH_TEST === "1")) {
+  if (policy.profileType === "TEST_BOUNDARY" && !(env.SFIA_WEB_SEARCH_TEST === "1")) {
     return false;
   }
   return true;
 }

-export function buildPublicWebSearchTool(): ReturnType<typeof webSearchTool> | null {
-  if (!isWebSearchEnvEnabled()) return null;
-  // Hosted tool — Studio does not fetch HTML itself.
+/**
+ * Hosted OpenAI webSearchTool — only attach when canAttachWebSearchTool is true.
+ * Returning null is the safe default; do not treat system instructions as a barrier.
+ */
+export function buildPublicWebSearchTool(
+  env: NodeJS.ProcessEnv = process.env,
+): ReturnType<typeof webSearchTool> | null {
+  if (!isWebSearchEnvEnabled(env) || !isWebSearchIsolationProven(env)) return null;
   return webSearchTool({
     searchContextSize: "medium",
   });
@@ -43,3 +63,11 @@ export function preparePublicWebQuery(raw: string): {
   if (!r.ok) return { ok: false, reason: r.blockedReason ?? "BLOCKED" };
   return { ok: true, query: r.query, redactions: r.redactions };
 }
+
+/**
+ * Documented limitation: attaching the hosted tool to a private-context agent run
+ * is not a sufficient exfiltration barrier. Prefer an isolated public search
+ * under existing D3 conduction when isolation is proven.
+ */
+export const WEB_SEARCH_BOUNDARY_NOTE =
+  "B1 DISABLED until SFIA_WEB_SEARCH_ISOLATION_PROVEN=1 — sanitizer ≠ hosted-tool boundary";
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
index 47c43a2f..638f719f 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
@@ -5,20 +5,15 @@ import { insertHumanDecision } from "@/domains/decisions/service";
 import { StudioError } from "@/lib/http-errors";
 import { newId } from "@/lib/ids";
 import { assertCurrentCursorAuthority } from "./cursor-authority";
+import { claimCursorAttempt, persistCursorOwnedResult } from "./cursor-claim";
 import {
   dispatchCursorRun,
   resolveCursorAdapterMode,
   stopCursorRun,
 } from "./cursor-sdk-adapter";
-import {
-  extendClaim,
-  isClaimActive,
-  mintClaim,
-  readClaim,
-  releaseClaim,
-  writeClaimInto,
-} from "./claim-lease";
+import { isClaimActive, readClaim } from "./claim-lease";
 import { instructionFingerprint } from "./technical-contract-fingerprint";
+import { resolveCursorWorkspace } from "./workspace-resolver";
 import type { CursorExecutionPlan, CursorLiveProjection } from "./types";

 async function assertProject(pilotId: string, projectId: string) {
@@ -40,12 +35,30 @@ function parseLive(resultJson: string | null | undefined): CursorLiveProjection
   }
 }

+function planFingerprintPayload(plan: CursorExecutionPlan): string {
+  return JSON.stringify({
+    kind: plan.kind,
+    contractId: plan.contractId,
+    contractVersion: plan.contractVersion,
+    contractFingerprint: plan.contractFingerprint,
+    instructionFingerprint: plan.instructionFingerprint,
+    workspaceCwd: plan.workspaceCwd,
+    workspaceKey: plan.workspaceKey ?? null,
+    effectProviderMode: plan.effectProviderMode,
+    gitScope: plan.gitScope ?? null,
+    mcpRequired: [...(plan.mcpRequired ?? [])].sort(),
+  });
+}
+
 export async function prepareCursorExecution(input: {
   pilotId: string;
   projectId: string;
   contractId: string;
   correlationKey: string;
-  workspaceCwd: string;
+  /** Server-side key only — never an absolute client path. */
+  workspaceKey?: string | null;
+  /** Legacy client field — absolute paths are rejected. */
+  workspaceCwd?: string | null;
   mcpRequired?: string[];
 }) {
   await assertProject(input.pilotId, input.projectId);
@@ -64,10 +77,22 @@ export async function prepareCursorExecution(input: {
       .limit(1)
   )[0];
   if (!contract) throw new StudioError("NOT_FOUND", "Contrat technique introuvable");
-  if (contract.status !== "READY" && contract.status !== "AUTHORIZED") {
-    throw new StudioError("INVALID_REQUEST", `Contrat non prêt: ${contract.status}`);
+  if (contract.status !== "READY") {
+    throw new StudioError(
+      "INVALID_REQUEST",
+      `Contrat non prêt pour tentative: ${contract.status}`,
+      { exposeMessage: true },
+    );
   }

+  const workspace = resolveCursorWorkspace({
+    pilotId: input.pilotId,
+    projectId: input.projectId,
+    workspaceKey: input.workspaceKey,
+    clientDeclaredCwd: input.workspaceCwd,
+    ensureDir: true,
+  });
+
   const prior = (
     await db
       .select()
@@ -90,7 +115,8 @@ export async function prepareCursorExecution(input: {
     contractVersion: contract.version,
     contractFingerprint: contract.fingerprint,
     instructionFingerprint: instructionFingerprint(contract.instructionText),
-    workspaceCwd: input.workspaceCwd,
+    workspaceCwd: workspace.workspaceCwd,
+    workspaceKey: workspace.workspaceKey,
     effectProviderMode: mode,
     gitScope: contract.gitScopeJson
       ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
@@ -98,6 +124,7 @@ export async function prepareCursorExecution(input: {
     mcpRequired: input.mcpRequired ?? [],
   };
   const fingerprint = contract.fingerprint;
+  const planFp = planFingerprintPayload(plan);

   if (prior) {
     if (prior.kind !== "CURSOR_EXECUTION") {
@@ -108,12 +135,20 @@ export async function prepareCursorExecution(input: {
         exposeMessage: true,
       });
     }
+    const priorPlan = JSON.parse(prior.planJson) as CursorExecutionPlan;
+    if (planFingerprintPayload(priorPlan) !== planFp) {
+      throw new StudioError(
+        "CONFLICT",
+        "PAYLOAD_MISMATCH — même correlationKey, cible/workspace/capacités différents",
+        { exposeMessage: true },
+      );
+    }
     return {
       attemptId: prior.id,
       status: prior.status,
       idempotent: true as const,
       fingerprint: prior.fingerprint,
-      plan: JSON.parse(prior.planJson) as CursorExecutionPlan,
+      plan: priorPlan,
     };
   }

@@ -148,7 +183,14 @@ export async function authorizeCursorExecution(input: {
   attemptId: string;
   statement: string;
   inspectedFingerprint: string;
+  /** Explicit confirmation — required. */
+  confirmed: boolean;
 }) {
+  if (!input.confirmed) {
+    throw new StudioError("INVALID_REQUEST", "Confirmation refusée — aucun effet", {
+      exposeMessage: true,
+    });
+  }
   return db.transaction(async (tx) => {
     const row = (
       await tx
@@ -178,6 +220,20 @@ export async function authorizeCursorExecution(input: {
       );
     }

+    const contract = (
+      await tx
+        .select()
+        .from(technicalContracts)
+        .where(eq(technicalContracts.id, (JSON.parse(row.planJson) as CursorExecutionPlan).contractId))
+        .limit(1)
+    )[0];
+    if (!contract || contract.status !== "READY") {
+      throw new StudioError("REQUIRES_REQUALIFICATION", "Contrat non READY au moment D6");
+    }
+    if (contract.fingerprint !== row.fingerprint) {
+      throw new StudioError("REQUIRES_REQUALIFICATION", "Contrat divergé depuis prepare");
+    }
+
     if (row.status === "AUTHORIZED" && row.decisionId) {
       return {
         attemptId: row.id,
@@ -249,21 +305,26 @@ export async function dispatchCursorExecution(input: {
   }

   const live = parseLive(row.resultJson);
-  const existingClaim = readClaim(row.resultJson);
-  if (row.status === "DISPATCHED" || row.status === "COMPLETED") {
-    if (live.agentId || live.runId) {
-      return {
-        attemptId: row.id,
-        status: row.status,
-        idempotent: true as const,
-        live,
-        limits: ["NO_BLIND_REDISPATCH", ...(live.limits ?? [])],
-      };
-    }
-  }

-  if (isClaimActive(existingClaim)) {
-    throw new StudioError("CONFLICT", "Claim actif — pas de second dispatch", {
+  // Terminal / in-flight: never blind redispatches.
+  if (row.status === "DISPATCHED") {
+    throw new StudioError(
+      "CONFLICT",
+      "Exécution déjà DISPATCHED — reconcile puis reprise contrôlée (AMBIGUOUS) requise",
+      { exposeMessage: true },
+    );
+  }
+  if (row.status === "COMPLETED" || row.status === "FAILED" || row.status === "CONFLICT") {
+    return {
+      attemptId: row.id,
+      status: row.status,
+      idempotent: true as const,
+      live,
+      limits: ["NO_BLIND_REDISPATCH", ...(live.limits ?? [])],
+    };
+  }
+  if (row.status !== "AUTHORIZED" && row.status !== "AMBIGUOUS") {
+    throw new StudioError("CONFLICT", `Dispatch refusé depuis statut ${row.status}`, {
       exposeMessage: true,
     });
   }
@@ -275,7 +336,7 @@ export async function dispatchCursorExecution(input: {
     attemptId: row.id,
     fingerprint: row.fingerprint,
     effectConditionsFingerprint: row.effectConditions
-      ? JSON.parse(row.effectConditions).fingerprint
+      ? (JSON.parse(row.effectConditions) as { fingerprint?: string }).fingerprint ?? null
       : null,
   });

@@ -284,6 +345,21 @@ export async function dispatchCursorExecution(input: {
     throw new StudioError("REQUIRES_REQUALIFICATION", "Plan ≠ fingerprint tentative");
   }

+  // Re-resolve workspace — refuse if confinement broken since prepare.
+  const workspace = resolveCursorWorkspace({
+    pilotId: input.pilotId,
+    projectId: input.projectId,
+    workspaceKey: plan.workspaceKey ?? "default",
+    ensureDir: true,
+  });
+  if (workspace.workspaceCwd !== plan.workspaceCwd) {
+    throw new StudioError(
+      "REQUIRES_REQUALIFICATION",
+      "Workspace résolu ≠ plan préparé — nouvel acte requis",
+      { exposeMessage: true },
+    );
+  }
+
   const contract = (
     await db
       .select()
@@ -292,40 +368,61 @@ export async function dispatchCursorExecution(input: {
       .limit(1)
   )[0];
   if (!contract) throw new StudioError("NOT_FOUND", "Contrat disparu");
-  if (contract.fingerprint !== row.fingerprint) {
+  if (contract.fingerprint !== row.fingerprint || contract.status !== "READY") {
     throw new StudioError(
       "REQUIRES_REQUALIFICATION",
-      "Contrat modifié depuis l'autorisation — nouvel acte requis",
+      "Contrat modifié ou non READY depuis l'autorisation",
       { exposeMessage: true },
     );
   }

-  const claim = mintClaim(existingClaim);
-  const preLive: CursorLiveProjection = {
-    ...live,
-    sendRequestedAt: new Date().toISOString(),
-    claim,
-    reportStatus: "EXPECTED",
-    limits: ["DISPATCH_CLAIMED"],
-  };
-  await db
-    .update(effectAttempts)
-    .set({
-      status: "DISPATCHED",
-      resultJson: writeClaimInto(JSON.stringify(preLive), claim),
-      updatedAt: new Date(),
-    })
-    .where(eq(effectAttempts.id, row.id));
+  const fromStatus = row.status as "AUTHORIZED" | "AMBIGUOUS";
+  const claimed = await claimCursorAttempt(row.id, fromStatus);
+  if (!claimed) {
+    const again = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, row.id)).limit(1)
+    )[0];
+    if (again?.status === "DISPATCHED") {
+      throw new StudioError("CONFLICT", "Claim concurrent — un seul dispatch", {
+        exposeMessage: true,
+      });
+    }
+    throw new StudioError("CONFLICT", "Claim atomique échoué — pas de dispatch", {
+      exposeMessage: true,
+    });
+  }

-  const dispatched = await dispatchCursorRun({
-    attemptId: row.id,
-    instructionText: contract.instructionText,
-    instructionFingerprint: plan.instructionFingerprint,
-    workspaceCwd: plan.workspaceCwd,
-    idempotencyKey: row.id,
-  });
+  const claimToken = claimed.claim.claimToken;
+  const sendRequestedAt = new Date().toISOString();
+
+  let dispatched;
+  try {
+    dispatched = await dispatchCursorRun({
+      attemptId: row.id,
+      instructionText: contract.instructionText,
+      instructionFingerprint: plan.instructionFingerprint,
+      workspaceCwd: plan.workspaceCwd,
+      idempotencyKey: row.id,
+      /** LIVE: return after ACK/first observation — do not block HTTP on full wait. */
+      waitForTerminal: plan.effectProviderMode === "SCRIPTED",
+    });
+  } catch (e) {
+    const failLive: CursorLiveProjection = {
+      ...live,
+      sendRequestedAt,
+      terminalStatus: "unknown",
+      limits: ["DISPATCH_SEND_FAILED", String((e as Error)?.message ?? "error").slice(0, 120)],
+    };
+    await persistCursorOwnedResult({
+      attemptId: row.id,
+      claimToken,
+      resultJson: JSON.stringify(failLive),
+      status: "AMBIGUOUS",
+      release: true,
+    });
+    throw e;
+  }

-  const nextClaim = extendClaim(claim);
   const nextLive: CursorLiveProjection = {
     sendRequestedAt: dispatched.sendRequestedAt,
     ackReceivedAt: dispatched.ackReceivedAt,
@@ -334,9 +431,8 @@ export async function dispatchCursorExecution(input: {
     runId: dispatched.runId,
     lastActivitySummary: dispatched.lastActivitySummary,
     terminalStatus: dispatched.terminalStatus,
-    reportStatus: dispatched.resultText ? "EXPECTED" : "EXPECTED",
+    reportStatus: "EXPECTED",
     limits: dispatched.limits,
-    claim: nextClaim,
   };

   const terminal =
@@ -344,17 +440,13 @@ export async function dispatchCursorExecution(input: {
     dispatched.terminalStatus === "error" ||
     dispatched.terminalStatus === "cancelled";

-  await db
-    .update(effectAttempts)
-    .set({
-      status: terminal ? "COMPLETED" : "DISPATCHED",
-      resultJson: writeClaimInto(
-        JSON.stringify(nextLive),
-        terminal ? releaseClaim(nextClaim) : nextClaim,
-      ),
-      updatedAt: new Date(),
-    })
-    .where(eq(effectAttempts.id, row.id));
+  await persistCursorOwnedResult({
+    attemptId: row.id,
+    claimToken,
+    resultJson: JSON.stringify(nextLive),
+    status: terminal ? "COMPLETED" : "DISPATCHED",
+    release: terminal,
+  });

   return {
     attemptId: row.id,
@@ -363,6 +455,7 @@ export async function dispatchCursorExecution(input: {
     live: nextLive,
     scriptedReportMarkdown: dispatched.resultText,
     limits: dispatched.limits,
+    claimToken,
   };
 }

@@ -398,18 +491,25 @@ export async function requestStopCursorExecution(input: {
     ...live,
     stopRequestedAt: stop.stopRequestedAt,
     stopObservedAt: stop.stopObservedAt,
-    terminalStatus: stop.terminalStatus ?? live.terminalStatus,
-    limits: [...(live.limits ?? []), ...stop.limits],
+    terminalStatus: stop.stopObservedAt
+      ? stop.terminalStatus ?? live.terminalStatus
+      : live.terminalStatus ?? "unknown",
+    limits: [
+      ...(live.limits ?? []),
+      ...stop.limits,
+      stop.stopObservedAt ? "STOP_OBSERVED" : "STOP_REQUESTED_NOT_CONFIRMED",
+    ],
   };
+  // STOP requested ≠ necessarily terminal — keep DISPATCHED if not observed.
   await db
     .update(effectAttempts)
     .set({
       resultJson: JSON.stringify(nextLive),
-      status: stop.stopObservedAt ? "COMPLETED" : row.status,
+      status: stop.stopObservedAt && stop.terminalStatus === "cancelled" ? "COMPLETED" : row.status,
       updatedAt: new Date(),
     })
     .where(eq(effectAttempts.id, row.id));
-  return { attemptId: row.id, live: nextLive, limits: stop.limits };
+  return { attemptId: row.id, live: nextLive, limits: nextLive.limits ?? [] };
 }

 export async function reconcileCursorExecution(input: {
@@ -435,22 +535,26 @@ export async function reconcileCursorExecution(input: {
   const claim = readClaim(row.resultJson);
   const limits = [...(live.limits ?? [])];

-  if (row.status === "DISPATCHED" && !isClaimActive(claim) && !live.runId && !live.agentId) {
-    limits.push("ACK_OR_OWNERSHIP_LOST — état UNKNOWN, pas de redispatch aveugle");
-    const nextLive: CursorLiveProjection = {
-      ...live,
-      terminalStatus: live.terminalStatus ?? "unknown",
-      limits,
-    };
-    await db
-      .update(effectAttempts)
-      .set({
-        status: "AMBIGUOUS",
-        resultJson: JSON.stringify(nextLive),
-        updatedAt: new Date(),
-      })
-      .where(eq(effectAttempts.id, row.id));
-    return { attemptId: row.id, status: "AMBIGUOUS" as const, live: nextLive, limits };
+  if (row.status === "DISPATCHED" && !isClaimActive(claim)) {
+    if (!live.runId && !live.agentId) {
+      limits.push("ACK_OR_OWNERSHIP_LOST — état UNKNOWN, pas de redispatch aveugle");
+      const nextLive: CursorLiveProjection = {
+        ...live,
+        terminalStatus: live.terminalStatus ?? "unknown",
+        limits,
+      };
+      await db
+        .update(effectAttempts)
+        .set({
+          status: "AMBIGUOUS",
+          resultJson: JSON.stringify(nextLive),
+          updatedAt: new Date(),
+        })
+        .where(and(eq(effectAttempts.id, row.id), eq(effectAttempts.status, "DISPATCHED")));
+      return { attemptId: row.id, status: "AMBIGUOUS" as const, live: nextLive, limits };
+    }
+    limits.push("LEASE_INACTIVE_WITH_RUN_IDS — conserver DISPATCHED/UNKNOWN, pas de second send");
+    return { attemptId: row.id, status: row.status, live, limits };
   }

   return { attemptId: row.id, status: row.status, live, limits };
@@ -488,3 +592,31 @@ export async function getCursorAttempt(input: {
     updatedAt: row.updatedAt.toISOString(),
   };
 }
+
+export async function listCursorAttempts(input: {
+  pilotId: string;
+  projectId: string;
+}) {
+  await assertProject(input.pilotId, input.projectId);
+  const rows = await db
+    .select()
+    .from(effectAttempts)
+    .where(
+      and(
+        eq(effectAttempts.pilotId, input.pilotId),
+        eq(effectAttempts.projectId, input.projectId),
+        eq(effectAttempts.kind, "CURSOR_EXECUTION"),
+      ),
+    );
+  return rows.map((row) => ({
+    attemptId: row.id,
+    status: row.status,
+    fingerprint: row.fingerprint,
+    correlationKey: row.correlationKey,
+    decisionId: row.decisionId,
+    plan: JSON.parse(row.planJson) as CursorExecutionPlan,
+    live: parseLive(row.resultJson),
+    createdAt: row.createdAt.toISOString(),
+    updatedAt: row.updatedAt.toISOString(),
+  }));
+}
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
index 983aa1ad..dd80b13d 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-handoff.ts
@@ -13,6 +13,18 @@ import type { CursorExecutionPlan, CursorLiveProjection } from "./types";
 export type { HandoffManifest } from "./handoff-integrity";
 export { handoffIntegrityHash } from "./handoff-integrity";

+export type HandoffProvenance = {
+  /** How Studio obtained the report — never inferred from hash alone. */
+  acquisition: "CLIENT_DECLARED" | "SCRIPTED_ADAPTER" | "RUNTIME_COLLECTED" | "UNKNOWN";
+  declaredExecutorId?: string | null;
+  observedAgentId?: string | null;
+  observedRunId?: string | null;
+};
+
+/**
+ * Ingest a realization handoff bound to a Cursor attempt.
+ * Hash proves content integrity for a binding — not authorship by Cursor.
+ */
 export async function ingestRealizationHandoff(input: {
   pilotId: string;
   projectId: string;
@@ -20,6 +32,7 @@ export async function ingestRealizationHandoff(input: {
   reportMarkdown: string;
   manifest: HandoffManifest;
   expectedContractFingerprint: string;
+  provenance?: HandoffProvenance;
 }) {
   const row = (
     await db
@@ -39,6 +52,16 @@ export async function ingestRealizationHandoff(input: {
     throw new StudioError("INVALID_REQUEST", "Handoff réservé aux tentatives Cursor");
   }

+  // Restrict ingestion by attempt state — refuse PREPARED / AUTHORIZED without dispatch evidence.
+  const allowedStatuses = new Set(["DISPATCHED", "COMPLETED", "AMBIGUOUS", "FAILED"]);
+  if (!allowedStatuses.has(row.status)) {
+    throw new StudioError(
+      "CONFLICT",
+      `Handoff refusé depuis statut ${row.status} — tentative non exécutée ou non réconciliable`,
+      { exposeMessage: true },
+    );
+  }
+
   const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
   if (input.expectedContractFingerprint !== plan.contractFingerprint) {
     throw new StudioError("INVALID_REQUEST", "Handoff fingerprint contrat incompatible", {
@@ -51,6 +74,43 @@ export async function ingestRealizationHandoff(input: {
     });
   }

+  let live: CursorLiveProjection = {};
+  try {
+    live = JSON.parse(row.resultJson || "{}") as CursorLiveProjection;
+  } catch {
+    live = {};
+  }
+
+  const provenance: HandoffProvenance = input.provenance ?? {
+    acquisition: "CLIENT_DECLARED",
+  };
+  const limits: string[] = [];
+
+  // Bind to observed executor identities when present.
+  if (live.agentId && provenance.declaredExecutorId && provenance.declaredExecutorId !== live.agentId) {
+    throw new StudioError(
+      "INVALID_REQUEST",
+      "Exécuteur déclaré ≠ agent observé — provenance refusée",
+      { exposeMessage: true },
+    );
+  }
+  if (live.runId && provenance.observedRunId && provenance.observedRunId !== live.runId) {
+    throw new StudioError(
+      "INVALID_REQUEST",
+      "runId déclaré ≠ run observé — provenance refusée",
+      { exposeMessage: true },
+    );
+  }
+  if (provenance.acquisition === "CLIENT_DECLARED") {
+    limits.push("PROVENANCE_CLIENT_DECLARED — hash ≠ preuve d'auteur Cursor");
+  }
+  if (provenance.acquisition === "SCRIPTED_ADAPTER") {
+    limits.push("PROVENANCE_SCRIPTED — pas une preuve LIVE");
+  }
+  if (!live.agentId && !live.runId && provenance.acquisition !== "SCRIPTED_ADAPTER") {
+    limits.push("NO_OBSERVED_RUN_IDENTITY — rapport non rattaché à un run observé");
+  }
+
   const existing = (
     await db
       .select()
@@ -65,20 +125,27 @@ export async function ingestRealizationHandoff(input: {
   }

   const report = input.reportMarkdown ?? "";
-  const limits: string[] = [];
   let status: "RECEIVED" | "INCOMPLETE" | "REJECTED" = "RECEIVED";
   if (!report.trim()) {
     status = "INCOMPLETE";
     limits.push("REPORT_EMPTY");
   }
-  if (!inventoryComplete(input.manifest) && report.trim().length < 200) {
+  // Long but incomplete inventory cannot succeed.
+  if (!inventoryComplete(input.manifest)) {
     status = "INCOMPLETE";
-    limits.push("INVENTORY_OR_REPORT_INSUFFICIENT");
+    limits.push("INVENTORY_INCOMPLETE");
+    if (report.trim().length >= 200) {
+      limits.push("LONG_REPORT_WITHOUT_COMPLETE_INVENTORY — succès refusé");
+    }
   }
   if (report.includes("BEGIN PRIVATE KEY") || /\bsk-[A-Za-z0-9]{20,}\b/.test(report)) {
     status = "REJECTED";
     limits.push("SECRET_MATERIAL_DETECTED");
   }
+  // Hostile instruction markers in report body — treat as data, never authority.
+  if (/ignore\s+previous\s+instructions/i.test(report) || /<\/?system>/i.test(report)) {
+    limits.push("HOSTILE_CONTENT_MARKERS — rapport traité comme données non instructions");
+  }

   const integrityHash = handoffIntegrityHash({
     attemptId: row.id,
@@ -89,6 +156,13 @@ export async function ingestRealizationHandoff(input: {

   const id = newId("rhf");
   const now = new Date();
+  const enrichedManifest = {
+    ...input.manifest,
+    _provenance: provenance,
+    _observedAgentId: live.agentId ?? null,
+    _observedRunId: live.runId ?? null,
+  };
+
   await db.insert(realizationHandoffs).values({
     id,
     attemptId: row.id,
@@ -99,20 +173,14 @@ export async function ingestRealizationHandoff(input: {
     contractFingerprint: plan.contractFingerprint,
     status,
     reportMarkdown: status === "REJECTED" ? null : report,
-    manifestJson: JSON.stringify(input.manifest),
+    manifestJson: JSON.stringify(enrichedManifest),
     integrityHash,
-    sourceKind: "CURSOR",
+    sourceKind: provenance.acquisition === "SCRIPTED_ADAPTER" ? "SCRIPTED" : "CURSOR",
     limitsJson: JSON.stringify(limits),
     createdAt: now,
     updatedAt: now,
   });

-  let live: CursorLiveProjection = {};
-  try {
-    live = JSON.parse(row.resultJson || "{}") as CursorLiveProjection;
-  } catch {
-    live = {};
-  }
   live.reportStatus =
     status === "RECEIVED" ? "RECEIVED" : status === "REJECTED" ? "REJECTED" : "INCOMPLETE";
   live.limits = [...(live.limits ?? []), ...limits];
@@ -127,6 +195,7 @@ export async function ingestRealizationHandoff(input: {
     status,
     integrityHash,
     limits,
+    provenance,
   };
 }

diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
index 704c6bc9..86ed9d13 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
@@ -26,6 +26,11 @@ export type CursorDispatchInput = {
   /** SDK idempotency — must equal attemptId to prevent blind retry. */
   idempotencyKey: string;
   modelId?: string;
+  /**
+   * When false (LIVE default for HTTP), return after ACK / first observation.
+   * SCRIPTED still completes immediately. Full wait remains available for workers.
+   */
+  waitForTerminal?: boolean;
 };

 export type CursorDispatchResult = {
@@ -150,6 +155,28 @@ export async function dispatchCursorRun(
   });
   ackReceivedAt = new Date().toISOString();
   if (!runObservedAt) runObservedAt = ackReceivedAt;
+
+  const waitForTerminal = input.waitForTerminal === true;
+  if (!waitForTerminal) {
+    return {
+      mode,
+      sendRequestedAt,
+      ackReceivedAt,
+      runObservedAt,
+      agentId: agent.agentId,
+      runId: run.id ?? null,
+      terminalStatus: null,
+      lastActivitySummary: lastActivitySummary ?? "SDK_ACK_ACCEPTED_NOT_TERMINAL",
+      resultText: null,
+      limits: [
+        "LIVE_SDK",
+        "DISPATCH_ACCEPTED_WITHOUT_WAIT",
+        "REPORT_MUST_BE_INGESTED_SEPARATELY",
+        "SUPERVISION_REQUIRES_RECONCILE_OR_WORKER",
+      ],
+    };
+  }
+
   const waited = await run.wait();
   const terminal =
     waited.status === "finished" ||
@@ -167,7 +194,7 @@ export async function dispatchCursorRun(
     terminalStatus: terminal,
     lastActivitySummary: lastActivitySummary ?? `SDK_${String(waited.status).toUpperCase()}`,
     resultText: typeof waited.result === "string" ? waited.result : null,
-    limits: ["LIVE_SDK", "REPORT_MUST_BE_INGESTED_SEPARATELY"],
+    limits: ["LIVE_SDK", "REPORT_MUST_BE_INGESTED_SEPARATELY", "WAIT_COMPLETED_IN_ADAPTER"],
   };
 }

diff --git a/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts b/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
index be5ab447..e78e569e 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
@@ -15,6 +15,14 @@ export {
   technicalContractFingerprint,
 } from "./technical-contract-fingerprint";

+export type ContractReadiness = {
+  documentComplete: boolean;
+  sourcesSufficient: boolean;
+  unknownRestrictions: string[];
+  blockedReasons: string[];
+  ready: boolean;
+};
+
 export function assertContractBodyComplete(body: TechnicalContractBody): void {
   const e = body.engagements;
   if (!e?.willDo?.trim() || !e.willNotDo?.trim() || !e.expectedResult?.trim() || !e.pilotControl?.trim()) {
@@ -34,10 +42,46 @@ export function assertContractBodyComplete(body: TechnicalContractBody): void {
   if (!body.instructionText || body.instructionText.length === 0) {
     throw new StudioError("INVALID_REQUEST", "Instruction technique vide", { exposeMessage: true });
   }
-  // Refuse silent truncation markers in storage path.
   if (body.instructionText.includes("\u0000")) {
     throw new StudioError("INVALID_REQUEST", "Instruction technique invalide", { exposeMessage: true });
   }
+  if (!Array.isArray(body.reversibilityLimits)) {
+    throw new StudioError("INVALID_REQUEST", "reversibilityLimits requis", { exposeMessage: true });
+  }
+}
+
+/**
+ * Document completeness ≠ authorization readiness.
+ * READY requires no unknown determinant restrictions and an explicit readiness gate.
+ */
+export function evaluateContractReadiness(input: {
+  body: TechnicalContractBody;
+  unknownRestrictions?: string[];
+  sourcesSufficient?: boolean;
+}): ContractReadiness {
+  const unknownRestrictions = (input.unknownRestrictions ?? []).filter((r) => r.trim());
+  const documentComplete = (() => {
+    try {
+      assertContractBodyComplete(input.body);
+      return true;
+    } catch {
+      return false;
+    }
+  })();
+  const sourcesSufficient = input.sourcesSufficient !== false;
+  const blockedReasons: string[] = [];
+  if (!documentComplete) blockedReasons.push("DOCUMENT_INCOMPLETE");
+  if (!sourcesSufficient) blockedReasons.push("SOURCES_INSUFFICIENT");
+  if (unknownRestrictions.length > 0) {
+    blockedReasons.push(`UNKNOWN_RESTRICTIONS:${unknownRestrictions.join(",")}`);
+  }
+  return {
+    documentComplete,
+    sourcesSufficient,
+    unknownRestrictions,
+    blockedReasons,
+    ready: blockedReasons.length === 0,
+  };
 }

 async function assertProject(pilotId: string, projectId: string) {
@@ -59,9 +103,29 @@ export async function createTechnicalContract(input: {
   body: TechnicalContractBody;
   sourceTurnCommandId?: string | null;
   supersedesContractId?: string | null;
+  /** When false or omitted with unknowns → DRAFT even if document is complete. */
+  markReady?: boolean;
+  unknownRestrictions?: string[];
+  sourcesSufficient?: boolean;
 }) {
   await assertProject(input.pilotId, input.projectId);
   assertContractBodyComplete(input.body);
+  const readiness = evaluateContractReadiness({
+    body: input.body,
+    unknownRestrictions: input.unknownRestrictions,
+    sourcesSufficient: input.sourcesSufficient,
+  });
+  // Explicit markReady required for READY — syntax alone never promotes.
+  const status =
+    input.markReady === true && readiness.ready ? "READY" : "DRAFT";
+  if (input.markReady === true && !readiness.ready) {
+    throw new StudioError(
+      "REQUIRES_REQUALIFICATION",
+      `Contrat non prêt: ${readiness.blockedReasons.join("; ")}`,
+      { exposeMessage: true },
+    );
+  }
+
   const fingerprint = technicalContractFingerprint(input.body);
   const instructionFp = instructionFingerprint(input.body.instructionText);

@@ -89,7 +153,7 @@ export async function createTechnicalContract(input: {
     contractKey: input.contractKey,
     version,
     fingerprint,
-    status: "READY",
+    status,
     title: input.body.title,
     engagementsJson: JSON.stringify(input.body.engagements),
     voletsJson: JSON.stringify(input.body.volets),
@@ -99,7 +163,9 @@ export async function createTechnicalContract(input: {
     acceptanceJson: JSON.stringify(input.body.acceptance),
     executorJson: JSON.stringify(input.body.executor),
     stopConditionsJson: JSON.stringify(input.body.stopConditions),
+    reversibilityLimitsJson: JSON.stringify(input.body.reversibilityLimits ?? []),
     gitScopeJson: input.body.gitScope ? JSON.stringify(input.body.gitScope) : null,
+    readinessJson: JSON.stringify(readiness),
     sourceTurnCommandId: input.sourceTurnCommandId ?? null,
     supersedesContractId: input.supersedesContractId ?? null,
     createdAt: now,
@@ -112,10 +178,59 @@ export async function createTechnicalContract(input: {
     version,
     fingerprint,
     instructionFingerprint: instructionFp,
-    status: "READY" as const,
+    status: status as "READY" | "DRAFT",
+    readiness,
   };
 }

+/** Promote DRAFT → READY after D3/D6 sufficiency re-check. */
+export async function markTechnicalContractReady(input: {
+  pilotId: string;
+  projectId: string;
+  contractId: string;
+  unknownRestrictions?: string[];
+  sourcesSufficient?: boolean;
+}) {
+  const row = await getTechnicalContract(input);
+  const readiness = evaluateContractReadiness({
+    body: row.body,
+    unknownRestrictions: input.unknownRestrictions,
+    sourcesSufficient: input.sourcesSufficient,
+  });
+  if (!readiness.ready) {
+    throw new StudioError(
+      "REQUIRES_REQUALIFICATION",
+      `Promotion READY refusée: ${readiness.blockedReasons.join("; ")}`,
+      { exposeMessage: true },
+    );
+  }
+  // Recompute fingerprint from persisted body — refuse if storage drifted.
+  const recomputed = technicalContractFingerprint(row.body);
+  if (recomputed !== row.fingerprint) {
+    throw new StudioError(
+      "REQUIRES_REQUALIFICATION",
+      "Empreinte ≠ représentation persistée — nouvelle version requise",
+      { exposeMessage: true },
+    );
+  }
+  await db
+    .update(technicalContracts)
+    .set({
+      status: "READY",
+      readinessJson: JSON.stringify(readiness),
+      updatedAt: new Date(),
+    })
+    .where(
+      and(
+        eq(technicalContracts.id, input.contractId),
+        eq(technicalContracts.projectId, input.projectId),
+        eq(technicalContracts.pilotId, input.pilotId),
+        eq(technicalContracts.status, "DRAFT"),
+      ),
+    );
+  return { contractId: input.contractId, status: "READY" as const, readiness, fingerprint: row.fingerprint };
+}
+
 export async function getTechnicalContract(input: {
   pilotId: string;
   projectId: string;
@@ -172,11 +287,19 @@ function rowToContract(row: typeof technicalContracts.$inferSelect) {
     acceptance: JSON.parse(row.acceptanceJson || "{}") as TechnicalContractBody["acceptance"],
     executor: JSON.parse(row.executorJson || "{}") as TechnicalContractBody["executor"],
     stopConditions: JSON.parse(row.stopConditionsJson || "[]") as string[],
-    reversibilityLimits: [],
+    reversibilityLimits: JSON.parse(row.reversibilityLimitsJson || "[]") as string[],
     gitScope: row.gitScopeJson
       ? (JSON.parse(row.gitScopeJson) as TechnicalContractBody["gitScope"])
       : null,
   };
+  let readiness: ContractReadiness | null = null;
+  if (row.readinessJson) {
+    try {
+      readiness = JSON.parse(row.readinessJson) as ContractReadiness;
+    } catch {
+      readiness = null;
+    }
+  }
   return {
     id: row.id,
     contractKey: row.contractKey,
@@ -185,6 +308,7 @@ function rowToContract(row: typeof technicalContracts.$inferSelect) {
     instructionFingerprint: instructionFingerprint(row.instructionText),
     status: row.status,
     body,
+    readiness,
     createdAt: row.createdAt.toISOString(),
     updatedAt: row.updatedAt.toISOString(),
   };
diff --git a/projects/sfia-studio-next/web/src/domains/execution/types.ts b/projects/sfia-studio-next/web/src/domains/execution/types.ts
index 0f240028..a7b8da73 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/types.ts
@@ -63,7 +63,10 @@ export type CursorExecutionPlan = {
   contractVersion: number;
   contractFingerprint: string;
   instructionFingerprint: string;
+  /** Server-resolved realpath under SFIA_CURSOR_WORKSPACE_ROOT — never client-chosen. */
   workspaceCwd: string;
+  /** Short key used to resolve workspaceCwd; browser may only send this. */
+  workspaceKey?: string;
   effectProviderMode: "SCRIPTED" | "LIVE";
   gitScope?: TechnicalContractBody["gitScope"];
   mcpRequired: string[];
diff --git a/projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts b/projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
index 2ac4dd60..8354e8b2 100644
--- a/projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
@@ -172,16 +172,30 @@ export function qualifyCursorRealization(
   };
 }

-/** Build a single global Nora analysis prompt payload — not an authority act. */
+/**
+ * Deterministic technical brief for the dossier — NOT Nora's cognitive analysis.
+ * Distinct from D8 qualification, Nora opinion, and D6 decision.
+ */
 export function buildNoraFinalAnalysisBrief(q: CursorQualificationResult): string {
   const lines = [
-    "Analyse globale unique de tentative (après fin ou interruption réconciliée).",
+    "[BRIEF TECHNIQUE DÉTERMINISTE — pas un avis Nora cognitif]",
+    "Dossier de tentative (après fin ou interruption réconciliée).",
     `Verdict D8: ${q.verdict}`,
     "Rubriques:",
     ...q.rubrics.map((r) => `- ${r.title} [${r.coverage}]: ${r.content.slice(0, 200)}`),
     "Limites:",
     ...q.limits.map((l) => `- ${l}`),
+    "Distinctions: brief technique ≠ qualification D8 ≠ avis Nora ≠ décision D6.",
     "Ceci n'est pas une HumanDecision ni une acceptation Morris.",
+    "Un avis Nora cognitif requiert un run Nora sur ce dossier (sources attachées).",
   ];
   return lines.join("\n");
 }
+
+export type NoraAnalysisKind = "TECHNICAL_BRIEF" | "NORA_COGNITIVE" | "UNAVAILABLE";
+
+export function classifyAttachedNoraPayload(markdown: string | null | undefined): NoraAnalysisKind {
+  if (!markdown?.trim()) return "UNAVAILABLE";
+  if (markdown.includes("BRIEF TECHNIQUE DÉTERMINISTE")) return "TECHNICAL_BRIEF";
+  return "NORA_COGNITIVE";
+}
diff --git a/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
index 62d75b58..28896a81 100644
--- a/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
@@ -150,7 +150,7 @@ describe("PostgreSQL ML4 git collaboration corrective B1–B8 (SCRIPTED)", () =>
   });

   it("schema revision 008", () => {
-    expect(schemaRevision).toBe("017_ml5_cursor_realization");
+    expect(schemaRevision).toBe("018_ml5_contract_reversibility");
   });

   it("AT-01: project works without Git connection", async () => {
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
index a6288ead..b0a03ed3 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
@@ -37,7 +37,7 @@ describe("ML5 G — D8 cursor qualification", () => {
     });
     expect(q.verdict).toBe("INDETERMINATE");
     const brief = buildNoraFinalAnalysisBrief(q);
-    expect(brief).toMatch(/Analyse globale unique/);
+    expect(brief).toMatch(/BRIEF TECHNIQUE DÉTERMINISTE/);
     expect(brief).toMatch(/pas une HumanDecision/);
   });
 });

```

## 15. Exception de volume

Aucun. Diff modifié + contenus créés inclus ci-dessus.
Si un outil de lecture tronque le handoff distant : `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`.
