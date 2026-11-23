# SFIA Review Pack FULL — ML5 Convergence fonctionnelle et conformité intégrée

| Champ | Valeur |
|---|---|
| Date / heure | 2026-11-23 11:02 CET (10:02 UTC) |
| Cycle | ML5 delivery — convergence CA/T / CF-02/03 / Nora prepare / Figma surfaces / D8 |
| Profil | CRITICAL · SFIA v2.6 |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD local (entrée cycle, inchangé — worktree dirty) | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| Base ML5 | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Merge-base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| Docs candidat | `sfia/next-ml5-conformity-acceptance-candidate@1fe1aa16593d2f459095c237607386c1f1fdf12b` |
| Pack précédent | `2b2d27f6e8b2495adcccd4677078a8b77670b4b5` |
| Lane | DEV only — `sfia_next_dev` :5433 ; RECETTE/STABLE **non touchées** |
| Versioning | **NO RELEASE** / STABLE NOT AVAILABLE |
| Push projet / PR / merge | **INTERDITS** (mandat) |
| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |

---

## 1. Local Git Truth Check

```
cwd: /Users/morris/Projects/sfia-wt-next-ml5-20261123
branch: sfia/next-ml5-integrated-delivery-20261123
HEAD: 6cf33e9923796974b9ee540a9c6ff27110342950
merge-base(base ML5): 0f1d37c3b055371c84c1f30e9bebe3d0efee41b2
remote tracking: NONE — branche non publiée

 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
 M projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
 M projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
 M projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
?? projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md
?? projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts
?? projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts
?? projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts

```

**Contrôles :** worktree attendu cohérent ; pas de reset/clean destructeur ; branche documentaire **non mergée** aveuglément ; docs candidat intégrés sélectivement (registre local enrichi + contrat d'acceptation copié).

**Références distantes contrôlées (déclaratives) :**
- `main@997897fd…` — non modifié
- Conception ML5 `0f1d37c3…` — base
- Docs `1fe1aa16…` — lus ; intégration sans écrasement des preuves locales plus récentes
- Handoff précédent `2b2d27f6…`

---

## 2. Sources lues (refs / SHA / sections)

| Source | Ref | Sections déterminantes |
|---|---|---|
| Contrat acceptation CA-01…CA-10 / T-01…T-12 | `1fe1aa16…` + copie locale | §§1–3 capacités ; oracles |
| Registre couverture v0.3 | local + `1fe1aa16…` | A–I 99 ; CF-01… ; R-001/R-002 |
| Review Pack 2 | `2b2d27f6…` | P0, 29 unit, 7 PG, réserves F2/LIVE |
| cursor-claim / attempt-service | HEAD+dirty | AMBIGUOUS reclaim |
| studio-rail / page projet | HEAD+dirty | surfaces |
| Figma méthode v1.1 | blob `906c6f60…` (cycle antérieur) | L0/L1/L2/F2 — F2 non rejoué ce cycle |
| R2 D6/D7/D8 | via contrats existants | READY, tentative, preuves |

PNG fondateurs : **non ré-examinés** ce cycle (accessibilité non requise pour correctifs code).

---

## 3. Qualification initiale CA-01…CA-10 (avant/après cycle)

| CA | Avant (hypothèse R-002) | Après cycle 3 | Preuve |
|---|---|---|---|
| CA-01 Nora prepare | NON PROUVÉ | PARTIEL — bridge + prepare DRAFT si sources consultées | unit bridge ; LIVE multi-sources ouvert |
| CA-02 Web B1 | Désactivé / isolation non prouvée | Inchangé (keep-safe) | B1 gate conservé |
| CA-03 Activité | C1 partiel | PARTIEL+ — investigation/prepare events | appendActivityEvent bridge |
| CA-04 READY/D6 | READY client | PARTIEL — READY serveur | server-ready + routes |
| CA-05 Tentative | ACK-lost ouvert | PARTIEL — anti-duplicat PG T-04 PASS | PG 8 PASS |
| CA-06 Git A/B | Ouvert | Recommandation B documentée ; non ADOPTED | as-built |
| CA-07 D8 | Rubriques ; vérif faible | PARTIEL — critères/Git confrontés | qualify unit |
| CA-08 Analyse Nora | Brief ≠ cognitif | PARTIEL — cognitive dossier ; LIVE ouvert | classify + buildNoraCognitive |
| CA-09 Figma | publication seul | PARTIEL — execution + results + tabs Figma | code ; F2 NOT PROVEN |
| CA-10 Gouvernance | — | PARTIEL — ENV-01, NO RELEASE, I03 PG | delivery-history |

---

## 4. Défauts reproduits puis corrigés

1. **CF-03** AMBIGUOUS reclaim après send sans ACK → **corrigé** (`priorSendMayHaveOccurred` + SQL + service CONFLICT) ; PG T-04 PASS.
2. **CF-02** READY via flags client → **corrigé** (qualification serveur + create DRAFT only).
3. **Provenance** `RUNTIME_COLLECTED` client → **refusé** (handoff route).
4. **Surfaces** Exécution absente / onglets D8 non Figma → **alignés structurellement** (F2 ouvert).
5. **Nora prepare** non branché → **bridge tour** (DRAFT si sources) ; E2E LIVE ouvert.

---

## 5. Architecture / responsabilités touchées

- D3 : investigation persistence + activity + bridge (pas de second agent).
- D6 : dialog Oui/Non inchangé ; READY non confondu avec D6.
- D7 : claim/fence, attempt service, contracts DRAFT/READY serveur.
- D8 : qualify + bilan tabs + cognitive analysis.
- D9 : gitFactsVerified hook in qualify (pas de publisher Git Cursor).
- Shell : `StudioSurface` + `execution`.

**Pas de** nouvelle machine d'états, dispatcher, moteur cognitif, shell parallèle, publisher Git.

---

## 6. Décisions techniques (mandat)

1. Fence AMBIGUOUS sur évidence d'envoi, pas sur expiry seule.
2. READY exige preparationId + investigation durable.
3. Contrat depuis Nora toujours DRAFT.
4. Analyse cognitive = composition dossier sourcée ; LIVE Nora = preuve supérieure.
5. Surface `publication` conserve URL (Résultats) ; `execution` ajoutée.
6. Git option B recommandée, non implémentée.

---

## 7. Inventaire fichiers créés / modifiés

### Créés
projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md
projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts
projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts
projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts
projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts

### Modifiés (vs HEAD )
.tmp-sfia-review/chatgpt-review.md
projects/sfia-studio-next/construction/delivery-history.md
projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
projects/sfia-studio-next/web/src/domains/conversation/service.ts
projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts

## 8. Contenu complet des créations

### `projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts`
```typescript
/**
 * CA-01 bridge — after a Nora turn, persist investigation facts and optionally
 * prepare a DRAFT technical contract. Reuses nora-contract-prepare + investigation
 * persistence — no second preparation engine.
 */

import { prepareTechnicalContractFromNora } from "@/domains/execution/nora-contract-prepare";
import type { TechnicalContractBody } from "@/domains/execution/types";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  type InvestigationSourceRef,
  type InvestigationState,
} from "./investigation-state";
import {
  loadInvestigationSnapshot,
  saveInvestigationSnapshot,
} from "./investigation-persistence";
import { appendActivityEvent } from "./activity-projection";

const TECH_INTENT =
  /\b(contrat\s+technique|r[eé]alisation\s+cursor|ex[eé]cut(?:er|ion)\s+cursor|mission\s+cursor|pr[eé]pare(?:r)?\s+(?:un\s+)?contrat)\b/i;

export function detectsTechnicalContractIntent(text: string): boolean {
  return TECH_INTENT.test(text);
}

export function draftBodyFromInvestigation(
  inv: InvestigationState,
  opts?: { title?: string; instructionExtra?: string },
): TechnicalContractBody {
  const title =
    opts?.title?.trim() ||
    inv.desiredOutcome.trim() ||
    inv.intentSummary.trim().slice(0, 120) ||
    "Contrat technique préparé par Nora";
  const sources = inv.sources
    .filter((s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED")
    .map((s) => `${s.kind}:${s.ref}`)
    .join(", ");
  const instruction = [
    `Mission: ${inv.intentSummary}`,
    inv.desiredOutcome ? `Résultat attendu: ${inv.desiredOutcome}` : null,
    inv.constraints.length ? `Contraintes: ${inv.constraints.join("; ")}` : null,
    inv.exclusions.length ? `Exclusions: ${inv.exclusions.join("; ")}` : null,
    sources ? `Sources consultées: ${sources}` : null,
    opts?.instructionExtra?.trim() || null,
    "Exécuteur: Cursor SDK local — aucune publication Git sans mandat D6/D9 distinct.",
  ]
    .filter(Boolean)
    .join("\n\n");

  return {
    title,
    engagements: {
      willDo: inv.desiredOutcome || inv.intentSummary.slice(0, 200),
      willNotDo: inv.exclusions.join("; ") || "Hors périmètre non listé",
      expectedResult: inv.desiredOutcome || "Livrables conformes au contrat",
      pilotControl: "HumanDecision D6 avant dispatch ; STOP observé ≠ rollback",
    },
    volets: {
      mission: inv.intentSummary.slice(0, 400),
      perimeter: inv.constraints.join("; ") || "Périmètre à confirmer",
      capabilitiesAuthority: "CURSOR_SDK_LOCAL — permissions effectives uniquement",
      stopConditions: "STOP demandé / observé ; interruption → AMBIGUOUS si effet possible",
      proofsSources: sources || "Preuves à établir dans le handoff",
      integrity: "Fingerprint contrat + instruction exacte ; pas de troncature",
    },
    instructionText: instruction,
    risks: inv.risks.length ? inv.risks : ["Effets externes possibles via Cursor"],
    exclusions: inv.exclusions,
    acceptance: {
      criteria: inv.remainingWork.length
        ? inv.remainingWork.slice(0, 5)
        : ["Handoff RECEIVED", "Inventaire fichiers présent"],
      expectedProofs: ["rapport markdown", "manifeste inventaire"],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["file_edit"],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP", "claim fence invalid"],
    reversibilityLimits: ["Pas de rollback automatique des effets Cursor"],
    gitScope: null,
  };
}

export type NoraContractBridgeInput = {
  pilotId: string;
  projectId: string;
  preparationId: string;
  conversationId: string;
  turnCommandId: string;
  ownerToken?: string | null;
  userText: string;
  assistantText?: string;
  /** Sources actually observed this turn (never invent). */
  observedSources?: InvestigationSourceRef[];
  /** When true, attempt DRAFT prepare if investigation.contractReady. */
  attemptPrepare?: boolean;
  contractKey?: string;
  sourceTurnCommandId?: string | null;
};

export type NoraContractBridgeResult = {
  intentDetected: boolean;
  investigation: InvestigationState | null;
  prepared: {
    contractId: string;
    contractKey: string;
    version: number;
    fingerprint: string;
    status: string;
  } | null;
  blockedReason: string | null;
};

/**
 * Persist investigation progress and optionally prepare a DRAFT contract.
 * READY is never granted here.
 */
export async function bridgeNoraTurnToContractPreparation(
  input: NoraContractBridgeInput,
): Promise<NoraContractBridgeResult> {
  const intentDetected = detectsTechnicalContractIntent(input.userText);
  if (!intentDetected && !(input.observedSources?.length)) {
    return {
      intentDetected: false,
      investigation: null,
      prepared: null,
      blockedReason: null,
    };
  }

  const prior =
    (await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: input.userText,
    })) ?? createEmptyInvestigation(input.userText);

  const merged: InvestigationState = {
    ...prior,
    intentSummary: prior.intentSummary || input.userText.slice(0, 400),
    desiredOutcome: prior.desiredOutcome || input.userText.slice(0, 200),
    sources: [
      ...prior.sources,
      ...(input.observedSources ?? []).filter(
        (s) => !prior.sources.some((p) => p.ref === s.ref && p.kind === s.kind),
      ),
    ],
    profileHint:
      prior.profileHint === "simple" && intentDetected ? "investigation" : prior.profileHint,
  };
  const evaluated = evaluateContractReadiness(merged);
  await saveInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    state: evaluated,
  });

  try {
    await appendActivityEvent({
      conversationId: input.conversationId,
      turnCommandId: input.turnCommandId,
      ownerPilotId: input.pilotId,
      phase: "nora.investigation",
      nature: "OBSERVED",
      status: evaluated.contractReady ? "COMPLETED" : "LIMITED",
      summary: evaluated.contractReady
        ? "Investigation suffisante pour préparer un contrat DRAFT"
        : evaluated.contractReadyBlockedReason ?? "Investigation en cours",
      detail: {
        sufficiency: evaluated.sufficiency,
        sourceCount: evaluated.sources.length,
        contractReady: evaluated.contractReady,
      },
      ownerToken: input.ownerToken,
    });
  } catch {
    /* observational */
  }

  const hasConsultedSource = evaluated.sources.some(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );
  // CA-01: never prepare a contract without at least one source actually consulted/verified.
  if (!input.attemptPrepare || !evaluated.contractReady || !hasConsultedSource) {
    return {
      intentDetected,
      investigation: evaluated,
      prepared: null,
      blockedReason: !hasConsultedSource
        ? "Aucune source CONSULTED/VERIFIED — contrat non préparé"
        : evaluated.contractReady
          ? null
          : evaluated.contractReadyBlockedReason ?? "Investigation insuffisante",
    };
  }

  const body = draftBodyFromInvestigation(evaluated, {
    instructionExtra: input.assistantText?.slice(0, 1500),
  });
  const key =
    input.contractKey ??
    `nora-${input.preparationId.slice(-8)}-${Date.now().toString(36)}`;

  try {
    await appendActivityEvent({
      conversationId: input.conversationId,
      turnCommandId: input.turnCommandId,
      ownerPilotId: input.pilotId,
      phase: "nora.contract.prepare",
      nature: "ANNOUNCED",
      status: "RUNNING",
      summary: "Nora prépare un contrat technique DRAFT",
      ownerToken: input.ownerToken,
    });
  } catch {
    /* observational */
  }

  try {
    const created = await prepareTechnicalContractFromNora({
      pilotId: input.pilotId,
      projectId: input.projectId,
      preparationId: input.preparationId,
      contractKey: key,
      body,
      sourceTurnCommandId: input.sourceTurnCommandId ?? input.turnCommandId,
      investigationOverride: evaluated,
    });
    try {
      await appendActivityEvent({
        conversationId: input.conversationId,
        turnCommandId: input.turnCommandId,
        ownerPilotId: input.pilotId,
        phase: "nora.contract.prepare",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: `Contrat DRAFT ${created.contractKey} v${created.version} préparé`,
        sourceRef: created.contractId,
        ownerToken: input.ownerToken,
      });
    } catch {
      /* observational */
    }
    return {
      intentDetected,
      investigation: evaluated,
      prepared: {
        contractId: created.contractId,
        contractKey: created.contractKey,
        version: created.version,
        fingerprint: created.fingerprint,
        status: created.status,
      },
      blockedReason: null,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Préparation contrat refusée";
    try {
      await appendActivityEvent({
        conversationId: input.conversationId,
        turnCommandId: input.turnCommandId,
        ownerPilotId: input.pilotId,
        phase: "nora.contract.prepare",
        nature: "UNCERTAIN",
        status: "FAILED",
        summary: msg.slice(0, 200),
        ownerToken: input.ownerToken,
      });
    } catch {
      /* observational */
    }
    return {
      intentDetected,
      investigation: evaluated,
      prepared: null,
      blockedReason: msg,
    };
  }
}
```

### `projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts`
```typescript
/**
 * CA-01 — Nora prepares a technical contract from a durable investigation.
 * Reuses D3 investigation + D7 technical_contracts — no second preparation engine.
 */

import { StudioError } from "@/lib/http-errors";
import {
  loadInvestigationSnapshot,
  saveInvestigationSnapshot,
} from "@/domains/conversation/investigation-persistence";
import {
  evaluateContractReadiness as evaluateInvestigationReadiness,
  type InvestigationState,
} from "@/domains/conversation/investigation-state";
import {
  createTechnicalContract,
  evaluateContractReadiness,
} from "./technical-contract";
import type { TechnicalContractBody } from "./types";

export type NoraContractPrepareInput = {
  pilotId: string;
  projectId: string;
  preparationId: string;
  contractKey: string;
  body: TechnicalContractBody;
  sourceTurnCommandId?: string | null;
  /** Server-owned: never trust client "sourcesSufficient". */
  investigationOverride?: InvestigationState | null;
};

/**
 * Persist a DRAFT technical contract when investigation is sufficient.
 * READY is never granted here — markReady requires separate server qualification.
 */
export async function prepareTechnicalContractFromNora(
  input: NoraContractPrepareInput,
) {
  const investigation =
    input.investigationOverride ??
    (await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: input.body.title || input.body.volets.mission,
    }));

  if (!investigation) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Aucune investigation durable — Nora doit qualifier les sources avant contrat",
      { exposeMessage: true },
    );
  }

  const evaluated = evaluateInvestigationReadiness(investigation);
  await saveInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    state: evaluated,
  });

  if (!evaluated.contractReady) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      evaluated.contractReadyBlockedReason ??
        "Investigation insuffisante — contrat non préparé",
      { exposeMessage: true },
    );
  }

  // Server readiness: unknown restrictions from investigation, not client flags.
  const unknownFromInvestigation = [
    ...evaluated.questions
      .filter((q) => q.importance === "DETERMINANT" && q.status === "BLOCKED")
      .map((q) => q.id),
    ...(evaluated.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION"
      ? ["UNKNOWN_RESTRICTION"]
      : []),
  ];

  const docReadiness = evaluateContractReadiness({
    body: input.body,
    unknownRestrictions: unknownFromInvestigation,
    // Sources judged from investigation, never from client boolean.
    sourcesSufficient: evaluated.sufficiency === "SUFFICIENT",
  });

  const created = await createTechnicalContract({
    pilotId: input.pilotId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    contractKey: input.contractKey,
    body: input.body,
    sourceTurnCommandId: input.sourceTurnCommandId,
    markReady: false, // always DRAFT from Nora prepare — READY is a separate server act
    unknownRestrictions: unknownFromInvestigation,
    sourcesSufficient: docReadiness.sourcesSufficient,
  });

  return {
    ...created,
    investigationSufficiency: evaluated.sufficiency,
    contractReady: evaluated.contractReady,
    readiness: docReadiness,
  };
}
```

### `projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts`
```typescript
/**
 * CF-02 — READY qualification is server-owned.
 * Client `sourcesSufficient` / `unknownRestrictions` are never authoritative.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { technicalContracts } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import { loadInvestigationSnapshot } from "@/domains/conversation/investigation-persistence";
import { evaluateContractReadiness as evaluateInvestigation } from "@/domains/conversation/investigation-state";
import {
  evaluateContractReadiness,
  getTechnicalContract,
  technicalContractFingerprint,
} from "./technical-contract";

export async function qualifyTechnicalContractReadyServerSide(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
}) {
  const row = await getTechnicalContract(input);
  if (row.status === "READY") {
    return {
      contractId: row.id,
      status: "READY" as const,
      idempotent: true as const,
      fingerprint: row.fingerprint,
      readiness: row.readiness,
    };
  }

  let unknownRestrictions: string[] = [];
  let sourcesSufficient = false;

  if (input.preparationId) {
    const snap = await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: row.body.title,
    });
    if (!snap) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation absente — READY serveur impossible",
        { exposeMessage: true },
      );
    }
    const inv = evaluateInvestigation(snap);
    if (!inv.contractReady) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        inv.contractReadyBlockedReason ?? "Investigation non prête",
        { exposeMessage: true },
      );
    }
    sourcesSufficient = inv.sufficiency === "SUFFICIENT";
    unknownRestrictions = inv.questions
      .filter((q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED")
      .map((q) => q.id);
    if (inv.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION") {
      unknownRestrictions.push("UNKNOWN_RESTRICTION");
    }
  } else {
    // Without preparation linkage, refuse READY — no client substitute.
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "preparationId requis pour qualification READY serveur",
      { exposeMessage: true },
    );
  }

  const readiness = evaluateContractReadiness({
    body: row.body,
    unknownRestrictions,
    sourcesSufficient,
  });
  if (!readiness.ready) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      `Promotion READY refusée: ${readiness.blockedReasons.join("; ")}`,
      { exposeMessage: true },
    );
  }

  const recomputed = technicalContractFingerprint(row.body);
  if (recomputed !== row.fingerprint) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Empreinte ≠ représentation persistée — nouvelle version requise",
      { exposeMessage: true },
    );
  }

  const updated = await db
    .update(technicalContracts)
    .set({
      status: "READY",
      readinessJson: JSON.stringify(readiness),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(technicalContracts.id, input.contractId),
        eq(technicalContracts.projectId, input.projectId),
        eq(technicalContracts.pilotId, input.pilotId),
        eq(technicalContracts.status, "DRAFT"),
      ),
    )
    .returning({ id: technicalContracts.id });

  if (!updated[0]) {
    throw new StudioError("CONFLICT", "Promotion READY concurrente ou statut non DRAFT");
  }

  return {
    contractId: input.contractId,
    status: "READY" as const,
    idempotent: false as const,
    fingerprint: row.fingerprint,
    readiness,
  };
}
```

### `projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts`
```typescript
import { describe, expect, it } from "vitest";
import { priorSendMayHaveOccurred } from "@/domains/execution/cursor-claim";

describe("ML5 CF-03 priorSendMayHaveOccurred", () => {
  it("is false when only an expired claim exists", () => {
    expect(
      priorSendMayHaveOccurred(
        JSON.stringify({
          claim: { leaseExpiresAt: "2000-01-01T00:00:00.000Z", releasedAt: null },
        }),
      ),
    ).toBe(false);
  });

  it("is true when sendRequestedAt is set (ACK may be missing)", () => {
    expect(
      priorSendMayHaveOccurred(
        JSON.stringify({
          sendRequestedAt: "2026-11-23T10:00:00.000Z",
          claim: { leaseExpiresAt: "2000-01-01T00:00:00.000Z" },
        }),
      ),
    ).toBe(true);
  });

  it("is true when agentId/runId observed without ACK", () => {
    expect(
      priorSendMayHaveOccurred(JSON.stringify({ agentId: "a1", runId: "r1" })),
    ).toBe(true);
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts`
```typescript
import { describe, expect, it } from "vitest";
import {
  detectsTechnicalContractIntent,
  draftBodyFromInvestigation,
} from "@/domains/conversation/nora-contract-bridge";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";
import {
  buildNoraCognitiveAnalysis,
  classifyAttachedNoraPayload,
  qualifyCursorRealization,
} from "@/domains/proofs/cursor-qualify";
import { BILAN_TAB_LABELS } from "@/components/figma/RealizationBilan";

describe("ML5 CA-01 Nora contract bridge helpers", () => {
  it("detects technical realization intent", () => {
    expect(detectsTechnicalContractIntent("Prépare un contrat technique pour Cursor")).toBe(
      true,
    );
    expect(detectsTechnicalContractIntent("Bonjour Nora")).toBe(false);
  });

  it("refuses prepare semantics without consulted source", () => {
    const inv = evaluateContractReadiness(createEmptyInvestigation("mission cursor"));
    expect(inv.contractReady).toBe(true); // empty questions → ready structurally
    expect(inv.sources.some((s) => s.coverage === "CONSULTED")).toBe(false);
  });

  it("drafts a contract body from investigation with sources", () => {
    const base = createEmptyInvestigation("réalisation cursor du module X");
    const inv = evaluateContractReadiness({
      ...base,
      desiredOutcome: "module X livré",
      sources: [
        { kind: "GIT", ref: "repo/README.md", coverage: "CONSULTED" },
        { kind: "D4", ref: "doc:spec", coverage: "VERIFIED" },
      ],
      exclusions: ["push GitHub"],
    });
    const body = draftBodyFromInvestigation(inv);
    expect(body.instructionText).toMatch(/Sources consultées/);
    expect(body.exclusions).toContain("push GitHub");
    expect(body.executor.kind).toBe("CURSOR_SDK_LOCAL");
  });
});

describe("ML5 CA-08 Nora cognitive vs technical brief", () => {
  it("classifies and distinguishes cognitive analysis", () => {
    const q = qualifyCursorRealization({
      contractFingerprint: "fp",
      acceptanceCriteria: ["handoff RECEIVED"],
      handoffStatus: "RECEIVED",
      reportMarkdown: "# Rapport\nhandoff RECEIVED ok",
      manifest: { filesCreated: ["a.ts"], gaps: ["preuve tardive"] },
      terminalStatus: "finished",
    });
    const cognitive = buildNoraCognitiveAnalysis({
      qualification: q,
      attemptId: "att-1",
      contractTitle: "Module X",
      dossierIncomplete: true,
    });
    expect(classifyAttachedNoraPayload(cognitive)).toBe("NORA_COGNITIVE");
    expect(cognitive).toMatch(/ANALYSE COGNITIVE NORA/);
    expect(cognitive).toMatch(/ne fabrique pas une conformité/);
    expect(cognitive).not.toMatch(/BRIEF TECHNIQUE DÉTERMINISTE/);
  });
});

describe("ML5 CA-09 Figma D8 tab labels", () => {
  it("exposes the four Figma tab labels", () => {
    expect(Object.values(BILAN_TAB_LABELS)).toEqual([
      "Synthèse",
      "Livrables et tests",
      "Git et pièces",
      "Écarts",
    ]);
  });
});
```

### `projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md`

Document candidat intégré depuis Git `1fe1aa16…` (copie locale). Volume :      171 lignes.
SHA-256 local blob content:
3442b23dc1bf4db34296bb70a0966b4b19f980ef87d708ae199f90c1f57858db  projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md

Contenu intégral :
```markdown
# SFIA Studio Next — Contrat d'acceptation intégré : cognition et réalisation gouvernée

> **Document de construction candidat approuvé pour publication documentaire par Morris le 23/11/2026 — NON NORMATIF / NOT MERGED / NOT ADOPTED.** Il assemble des oracles de qualification, sans créer de nouvelles règles R2, d'autorités ni de gates autonomes. Une réception ML5 exige une décision Morris distincte.

| Champ | Référence / portée |
|---|---|
| Objet | ML5 : investigation Nora, contrat exact, HumanDecision, exécution Cursor, Git conditionnel, preuves et analyse finale |
| Baseline code | `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; branche locale ML5 non publiée |
| Source fonctionnelle ML5 | `conception-fonctionnelle/preparation-cognitive-et-realisation-technique-gouvernee.md` v0.5, branche candidate `0f1d37c3…` |
| Source architecture | `architecture-technique/qualification-ecarts-cognition-transverse-et-execution-cursor-ml5.md` v0.9 candidate |
| Sources propriétaires | R1 vision ; R2 D3/D4/D5/D6/D7/D8/D9 ; R4 architecture ; SEF v0.2 |
| Source UX | Figma file `itgvCulInEnFY6DvgIegvP`, page `1209:2`, frames 12.01–12.14 ; méthode `ux-ui/methodologie-contrat-figma-cursor.md` v1.1 |
| Source suivi | [Registre de couverture ML5](./ml5-registre-couverture-et-revue-developpement.md) ; 99 exigences A01–I11 ; 56 scénarios Q |
| Review Packs | [Socle @ d731c1d7](https://github.com/mcleland147/sfia-workspace/blob/d731c1d77016b4585dda1b96051f949478f67b8e/sfia-review-handoff/latest-chatgpt-review.md) ; [Consolidation @ 2b2d27f6](https://github.com/mcleland147/sfia-workspace/blob/2b2d27f6e8b2495adcccd4677078a8b77670b4b5/sfia-review-handoff/latest-chatgpt-review.md) |
| Verdict actuel | `ML5 PARTIAL — GOVERNED GAPS`, 44 PARTIEL / 1 EC / 54 NV reconstitués, **aucun vérifié au niveau global** |

## 1. Résultat Pilote — contrat commun

Le Pilote exprime une intention ; **Nora** analyse et enquête en mobilisant des sources correctement qualifiées. Si un travail technique externe est nécessaire, elle prépare un **contrat canonique versionné**, dont l'instruction complète réellement destinée à Cursor est inspectable. Le Pilote autorise distinctement via D6. D7 conserve une tentative durable et transmet sans copier-coller ni duplication injustifiée. Studio montre uniquement les événements observés. Après fin ou interruption, D7/D9 et D8 reconstituent et qualifient les faits ; Nora fournit **une analyse globale unique et consultative**. Le Pilote décide éventuellement de la suite.

**Invariants :** projet identifiable ; cycle facultatif ; pas de travail délégué artificiellement ; instruction exacte ≠ droit d'effet ; D6 ≠ D7 ≠ D8 ≠ D9 ; résultat déclaré ≠ observé ≠ conforme ≠ accepté ; STOP ≠ rollback ; Git et MCP conditionnels ; pas de revue Nora à chaque commit ; **nouveau contrat et Exécuter** pour nouvelle tentative.

## 2. Propriétaires et interfaces

| Propriétaire | Responsabilité exclusive et contrôlable |
|---|---|
| Pilote | Besoin, portée, autorisation, réception/arbitrage |
| D3 / Nora | Investigation, sélection critique des sources, préparation proportionnée, avis final |
| D4 | Versions de documents, connaissances et acquis durables |
| D5 | Trajectoire/cycle facultatif, guidance non autorisante |
| D6 | HumanDecision, restrictions, suspensions, mandat opposable |
| D7 | Contrat, instruction, intention durable, tentative, dispatch, STOP, événements |
| D8 | Critères, provenance et force des preuves, écarts et bilan révisable |
| D9 | Références Git, permissions, commits/publications observés |
| Cursor SDK | Réalisation dans les limites techniques et permissions effectivement établies |

## 3. Capacités et conditions de sortie

### CA-01 — Nora investigue, reprend et prépare

**A01–A12, D01–D02 ; Q-01…Q-18 ; R2 D3/D4.**

Nora qualifie la demande, évite de déléguer les tâches cognitives simples, examine les sources/version/renvois déterminants, conserve contradictions et restrictions, reconstitue l'enquête après incident puis prépare le contrat si la demande ou le mandat le justifie. Une source critique absente interdit READY. Pas de surcharge cognitive artificielle.

**Oracle :** investigation multi-sources incluant contradiction et information tardive ; preuve de sources effectivement lues ; retour après coupure ; contrat généré effectivement par Nora (pas seulement API manuelle) ; refus si restriction déterminante inconnue. **État : NON PROUVÉ DE BOUT EN BOUT.**

### CA-02 — Recherche web sûre et proportionnée

**B01–B09 ; Q-19…Q-23.**

Recherche publique pertinente et contrôlée ; séparation technique du contexte privé au point de sortie ; ouverture et lecture réelles, citations, fraîcheur ; source hostile non autorisante ; indisponibilité bornée.

**Oracle :** requête sortante inspectable sans secret/identifiant privé, page ouverte vs seulement découverte, confrontation versions, prompt-injection neutralisée. **Gate : B1 reste désactivé tant qu'une isolation réelle n'est pas prouvée ; variable `ISOLATION_PROVEN` insuffisante.**

### CA-03 — Activité fonctionnelle Nora

**C01–C08 ; Q-24…Q-26.**

Au sas, dans le projet et sur les tâches documentaires, visualiser les phases significatives pendant le travail, distinguer **ANNOUNCED/OBSERVED/COMPLETED/UNCERTAIN**, corréler aux véritables outils, reprendre après reconnexion, ne jamais montrer chaîne de pensée/secrets ou pourcentages artificiels.

**Oracle :** BROWSER pendant RUNNING, événements de lecture effectivement produits, statut PARTIAL/UNKNOWN, deux tours indépendants et reconnexion. **État : C1 producteur partiel, pas la capacité prouvée.**

### CA-04 — Contrat exact et autorisation opposable

**D01–D12 ; Q-27…Q-33, Q-49/Q-50 ; R2 `PF-GOV-07/20/21`, `PF-REAL-05…15`.**

Un seul contrat versionné, quatre engagements Pilot-first, six volets, instruction intégrale et fingerprint canonique ; vue Travail 50/50 ; changement matériel invalide l'ancien mandat. READY est qualifié par des données et contrôles **côté serveur**, pas par le seul client. Oui/Non D6 distinct, Non sans effet, recontrôle au point de dispatch.

**Oracle :** contrat très long sans troncature, aller-retour persistance/empreinte, correspondance instruction affichée/autorisée/envoyée, refus permission suspendue, version modifiée, action Non et double clic. **État : structure PARTIELLE, tests BROWSER et serveur à compléter.**

### CA-05 — Tentative et exécution gouvernée Cursor

**E01–E15 ; Q-31, Q-39…Q-41, Q-49…Q-53 ; `PF-REAL-13…25`.**

Tentative enregistrée avant contact SDK, unique commande autorisée, acquisition atomique/fencing, workspace approuvé et isolation projets/Pilotes. Les statuts distinguent send/ACK/run/observé/terminal/incertain/STOP. Un ACK perdu ne produit **jamais une relance aveugle** ; reconnexion et crash ne créent pas une seconde mission. MCP vérifié seulement si requis.

**Oracle :** deux dispatchs concurrents ; **premier envoi ayant produit un effet puis perte d'ACK et claim expiré** ; fencing ; worker long-run ; STOP demandé vs observé ; SDK LIVE confiné avec identité et instruction exactes. **Bloquant LIVE : transition `AMBIGUOUS → DISPATCHED` sans preuve de non-duplicabilité.**

### CA-06 — Git Cursor et continuité conditionnelle

**F01–F09 ; Q-42/Q-48 ; R2 D9.**

Pas de Git obligatoire hors mission Git. Pour missions Git : dépôt/ref/base SHA/permission vérifiés ; versions réellement publiées distinguées du local ; relecture distante ; aucun push, PR, merge ou privilège induit par un mandat cognitif. Continuité entre contrats fondée sur sources Git vérifiables.

**Options en arbitrage Morris :** A = Cursor publie directement sous permissions effectives ; **B = publication gouvernée D7/D9, recommandée mais non ADOPTED**. Évaluer réutilisation du mécanisme ML4 avant nouvelle abstraction. Tests REAL mutatifs sous GO spécifique.

### CA-07 — Handoff et preuves vérifiables

**G01–G11/G15 ; Q-34…Q-38, Q-43…Q-46, Q-54 ; R2 `PF-PRV-01…32`.**

Dossier par tentative : rapport, inventaire complet créations/modifications/déplacements/suppressions, tests/commandes, références/version/sha, pièces, captures et preuves accessibles. D7 attribue la remise, D9 recoupe Git, D8 confronte prévu/réalisé/critères et révise son jugement sur nouvelle preuve, sans réécrire le passé. Neuf rubriques accessibles ; déclaration Cursor non certifiante.

**Oracle :** rapport sans log, manifeste incomplet, preuve inaccessible, SHA contradictoire, capture mauvaise version, injection hostile, preuve tardive et D8 révisable. **État : neuf rubriques structurées, vérification réelle INCOMPLÈTE.**

### CA-08 — Analyse cognitive finale et retour Nora

**G12–G14 ; Q-35…Q-38, Q-47, Q-55.**

À la fin/interruption réconciliée, un dossier D8 effectivement qualifié est présenté à Nora. Elle donne **une analyse cognitive sourcée unique**, consultative, distinguée du brief déterministe et de la décision D6. Le bouton « En discuter avec Nora » joint la référence de bilan au brouillon sans envoyer automatiquement. Un correctif ultérieur exige son propre mandat.

**Oracle :** vrai run D3 post-tentative, dossier partiel/contradictoire, absence de micro-revue, preuve tardive avec requalification bornée. **État : avis Nora LIVE NON PROUVÉ.**

### CA-09 — UX / UI contractuelle Figma

**D09, G11–G14, H01–H08, I06/I10 ; page 12 Figma.**

- **Travail 12.01–12.03 :** investigation et conversation Nora, visionneuse contrat **50/50**, confirmation D6.
- **Exécution 12.04–12.07, 12.14 :** interventions, historique, fiche du contrat, LIVE, état incertain, instruction intégrale.
- **Résultats & preuves 12.08, 12.11–12.13 :** quatre onglets **Synthèse / Livrables et tests / Git et pièces / Écarts**, neuf rubriques D8 couvrant l'ensemble, verdict/avis/autorité distincts.
- **Continuité 12.09–12.10 :** reprendre Nora avec référence de bilan, activité sas sans projet fictif.

**Écart actuel :** runtime rapporté sous `?surface=publication`, sans Exécution distincte et avec des onglets D8 différents de Figma. Le composant existe mais n'est pas conforme par présence seule.

**Oracle :** extraction Figma L0/L1/L2 native, assets SVG exacts, PNG originaux + SHA, mapping frame/node→DOM/assertion, mêmes données/viewport/font, BROWSER au bon build, F2 géométrie stable cible 0 et tolérance max **2 CSS px**, vérification des 14 états et interactions clavier/mobile/zoom 200 %. Aucune source critique inventée.

### CA-10 — Non-régression, intégrité et gouvernance

**I01–I11 ; R2 ; SEF / ENV-01 / SFIA v2.6.**

Pas de double moteur d'autorité, effets ou Git ; pas de régression ML1–ML4 ; travail dans DEV isolé, RECETTE/STABLE inchangées ; documentation et code cohérents dans le même lot ; tests et preuves assignés aux SHA/build. La preuve DETERMINISTIC ne vaut pas BROWSER, F2, LIVE ou REAL ; une fin Cursor ne vaut pas réception.

**Oracle :** tests domaines et PostgreSQL, E2E Browser DEV, contrôles de permissions, migrations DEV, sécurité et revue as-built. **Gate Morris pour toute promotion ou mutation externe.**

## 4. Douze parcours intégrateurs prioritaires (index de preuves, pas corpus normatif supplémentaire)

| ID | Parcours | Oracle discriminant | Liens sources prioritaires |
|---|---|---|---|
| T-01 | Investigation complexe et contrat Nora | Sources effectives, restrictions et contrat préparé | A, D, Q-01…Q-18 |
| T-02 | Refus par le Pilote | Non sans tentative ni effet | D, Q-29, PF-GOV-07 |
| T-03 | Autorisation du contrat exact | Même version/empreinte et instruction jusqu'au SDK | D/E, Q-30/Q-50 |
| T-04 | Double clic puis ACK perdu | Aucun second envoi à risque ; UNKNOWN/réconciliation | E, Q-31, PF-REAL-13/14 |
| T-05 | Mission longue avec navigateur fermé | Tentative et événements retrouvés sans relance | C/E, Q-39/Q-53 |
| T-06 | STOP après effets partiels | Demande/confirmation/effets séparés | E/G, Q-40, PF-PRV-06 |
| T-07 | Rapport de tests non vérifiés | D8 refuse toute certification fictive | G, Q-34, PF-PRV-02 |
| T-08 | Git et rapport contradictoires | Branch/ref/sha et réserves confrontés | F/G, Q-43/Q-46, PF-PRV-10 |
| T-09 | Terminaison puis unique revue Nora | D8 avant avis cognitif, aucun micro-bilan | G, Q-47/Q-55 |
| T-10 | Reprise de discussion contextualisée | Référence bilan au brouillon, sans envoi/effet | G/H, Q-37 |
| T-11 | Recherche web publique | Aucune donnée privée exfiltrée ; pages lues | B, Q-19…Q-23 |
| T-12 | Deux Pilotes/dépôt partagé | Isolation mandats, sources et preuves | D/E/F/G, PF-GOV-15 |

**Contrôle de complétude :** chacune des 99 lignes A–I, des **56 Q** et des PF propriétaires applicables conserve son propre statut et sa preuve dans le registre/rapport. Ce tableau ne permet pas une validation en masse.

## 5. Niveaux de preuve et gates de sortie

| Niveau | Prouve | Ne prouve jamais, à lui seul |
|---|---|---|
| DETERMINISTIC | Traitement scripté et invariants unitaires | SDK ou navigateur LIVE |
| INTEGRATION | PostgreSQL/serviciels DEV exécutés | Fournisseur externe ou UX navigateur |
| BROWSER | Parcours UI réellement servi et observé | GitHub réel ou SDK LIVE |
| FIGMA F2 | Conformité structurelle/visuelle aux états extraits | Autorité métier ou résultat technique |
| SDK LIVE | Exécution et observations authentiques en confinement approuvé | GitHub REAL, résultat conforme ou adoption |
| WEB LIVE | Recherche/lecture réelles sous protection efficace | Autorisation de mutation web |
| GitHub/MCP REAL | Effet distant et contrôle de sa réalité, sous mandat | Réception D6, release ou ADOPTED |

**Gates de revue (critères intégrés, pas nouvelle doctrine) :**
- **S — Sûreté** : READY serveur, anti-duplicat ACK-loss, droits/cible/secret, provenance et effets sûrs.
- **U — UX** : parcours Travail/Exécution/Résultats + BROWSER et F2 sur chaque état pertinent.
- **F — Fonctionnel** : 99 A–I + 56 Q + PF applicables disposés avec preuve ou réserve/exit et arbitrages.
- **P — Preuves** : pièces accessibles, D8 par critère/révisable et véritable avis Nora.
- **R — Réel** : SDK/web/Git/MCP prouvés pour chaque capacité réellement revendiquée, sous GO d'effet spécifique.
- **M — Morris** : réception/acceptation et réserves ; PR, merge, RECETTE, release, R6 et ADOPTED **séparés**.

Aucun critère bloquant de sécurité n'est levé par une simple acceptation documentaire. Les options Git A/B, topologie de supervision et méthode de publication restent des **arbitrages structurants**, jamais adoptés par la rédaction de ce dossier.

## 6. Mode de mise à jour et verdict

Pour chaque exigence : **source R1/R2/ML5 → test Q/PF/ T-xx → composant/flux → preuve SHA/build/date/environnement → niveau → défaut/dette → exit → statut**. Mettre à jour le registre vivant lors d'un delivery cohérent, pas créer un autre registre de vérité.

Verdicts applicables : `ML5 PARTIAL — GOVERNED GAPS`, `ML5 INTEGRATED — QUALIFICATION IN PROGRESS`, `ML5 QUALIFIED FOR MORRIS REVIEW — WITH RESERVES`, `ML5 ACCEPTED BY MORRIS — SCOPE AND RESERVES EXPLICIT`.

**État de création :** `CONFORMITY REVIEW DOCUMENTED / ACCEPTANCE CONTRACT CANDIDATE / NOT MERGED / NOT BEHAVIOR PROVEN / NOT ADOPTED`. Ce document ne donne aucun GO de push projet, PR/merge, recette, LIVE/REAL mutatif ou promotion.
```

## 9. Diffs complets des fichiers modifiés (vs HEAD 6cf33e99)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index cc1c771f..0b76e0b5 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,24 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-23-ML5-CONVERGENCE-CONFORMITY
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Convergence fonctionnelle et conformité intégrée |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` |
+| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
+| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
+| Lane | DEV only (`sfia_next_dev` :5433) — RECETTE/STABLE inchangées |
+| Contenu | CF-03 anti-duplicat ACK-lost ; CF-02 READY serveur ; provenance handoff ; Nora→contrat DRAFT bridge ; surfaces `execution`/`publication` ; onglets D8 Figma ; analyse cognitive Nora (dossier) ; docs acceptation/registre |
+| Tests | Unit ML5 **25 PASS** (fichiers ciblés) ; PG dispatch **8 PASS** incl. T-04 ACK-lost ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
+| Push projet / PR / merge | **NONE** |
+| STABLE | NOT AVAILABLE |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
 ## delivery_id: DELIV-2026-11-23-ML5-INTEGRATION-CONSOLIDATION

 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md b/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
index b9c6a24d..e2d7dcbf 100644
--- a/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
+++ b/projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
@@ -5,70 +5,57 @@
 | Branche | `sfia/next-ml5-integrated-delivery-20261123` |
 | Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
 | Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
-| HEAD entrée cycle 2 | `69aeb329ee387a7cf8331fc6173fcf0f09bd92b8` |
-| Lane | DEV only (`sfia-next-dev-pg` / :5433) — migrations **017+018** sur `sfia_next_dev` et `sfia_next_e2e` ; RECETTE non touchée |
+| HEAD entrée cycle 3 | `6cf33e9923796974b9ee540a9c6ff27110342950` |
+| Lane | DEV only (`sfia-next-dev-pg` / :5433 / `sfia_next_dev`) — migrations **017+018** ; RECETTE non touchée |
 | Versioning | **NO RELEASE** / STABLE NOT AVAILABLE |

-## Cycle 2 — sécurisation et convergence
+## Cycle 3 — convergence fonctionnelle et conformité

-### P0 corrigés (DEV / DETERMINISTIC + PG)
+### P0 / conformité corrigés (DEV)

 | ID | Correctif | Preuve |
 |---|---|---|
-| P0-01 | Claim atomique AUTHORIZED\|AMBIGUOUS→DISPATCHED ; fencing `claimToken` ; refus redispatch aveugle | `cursor-claim.ts` + `ml5-cursor-dispatch.pg.test.ts` **7 PASS** |
-| P0-02 | Workspace serveur sous `SFIA_CURSOR_WORKSPACE_ROOT` ; rejet cwd client absolu ; clé `workspaceKey` | `workspace-resolver.ts` + unit **5 PASS** |
-| P0-03 | `webSearchTool` détaché tant que `SFIA_WEB_SEARCH_ISOLATION_PROVEN≠1` | `web-search-tools.ts` + boundary unit |
+| CF-03 / E09 | `priorSendMayHaveOccurred` + SQL fence refusant AMBIGUOUS→DISPATCHED si send/agent/run ; service throw CONFLICT | Unit anti-duplicat **3 PASS** ; PG T-04 ACK-lost **PASS** |
+| CF-02 / D02 | READY serveur via investigation durable ; flags client ignorés ; create toujours DRAFT | `technical-contract-server-ready.ts` + route `/ready` |
+| Provenance | Client `RUNTIME_COLLECTED` refusé sur handoff | Route handoff (cycle 3) |
+| CA-01 | Bridge Nora tour → investigation durable → DRAFT contrat si sources CONSULTED/VERIFIED | `nora-contract-bridge.ts` + `nora-contract-prepare.ts` |
+| CA-09 | Surfaces `?surface=execution` et `?surface=publication` (results) ; onglets D8 Figma | Shell + `CursorRealizationSurface` mode |
+| CA-07/08 | D8 confronte critères/Git ; analyse cognitive distincte du brief | `cursor-qualify.ts` + qualification route |

-### P1 consolidés
+### Surfaces produit

-- Persistance `reversibility_limits_json` + round-trip fingerprint.
-- DRAFT ≠ READY : `markReady` / `unknownRestrictions` / route `…/ready`.
-- Handoff : provenance, état tentative, inventaire incomplet ≠ succès, secrets → REJECTED.
-- Brief technique déterministe ≠ avis Nora cognitif (`noraAnalysisKind`).
-- LIVE adapter : `waitForTerminal=false` après ACK (HTTP non bloqué sur wait complet).
-
-### Parcours produit
-
-- `CursorRealizationSurface` monté sur `?surface=publication` (shell existant).
-- Dialog D6 Oui/Non ; Non = aucun effet.
-- Bilan D8 + « En discuter avec Nora » → draft Travail.
-- Activité C1 : producteur branché au tour Nora ; séquence sous `FOR UPDATE`.
-- Investigation : snapshot durable `preparations.projection_json`.
-
-### Figma page 12
+| Surface | URL | Rôle |
+|---|---|---|
+| Travail | `?surface=travail` | Fil Nora + visionneuse (existante) |
+| Exécution | `?surface=execution` | Contrats, interventions, D6, LIVE/UNKNOWN, STOP |
+| Résultats | `?surface=publication` | Bilans D8 (4 onglets Figma) + Git ML4 |

-- L0 inventaire 14 frames (cycle 1).
-- L1 : metadata native 14 frames + design context **12.02** (session `c2ce3ba7-…`).
-- F2 / BROWSER runtime comparison : **NOT PROVEN**.
+Onglets D8 : **Synthèse / Livrables et tests / Git et pièces / Écarts** (9 rubriques).

-### Tests exécutés
+### Tests exécutés (cycle 3)

-- Vitest unit ML5 : **29 PASS**.
-- Vitest PG `ml5-cursor-dispatch.pg.test.ts` : **7 PASS** (sfia_next_e2e).
-- `tsc --noEmit` : PASS après correctifs UI.
-- BROWSER parcours : **NOT RUN** (fixture/dev server non exercé ce cycle).
-- LIVE SDK / LIVE web : **NOT PROVEN**.
+- Vitest unit ML5 ciblés : **25 PASS**.
+- Vitest PG `ml5-cursor-dispatch.pg.test.ts` : **8 PASS** (DEV `sfia_next_dev`).
+- `tsc --noEmit` : PASS.
+- BROWSER / F2 / LIVE SDK / WEB LIVE / GitHub REAL : **NOT PROVEN**.

-### Git Cursor A/B (recommandation, non ADOPTED)
+### Git Cursor A/B (non ADOPTED)

-| Option | Blast radius | Recommandation revue |
-|---|---|---|
-| A — publication Git directe par Cursor | Droits effectifs Cursor ; gouvernance permissions plus opaque | Déconseillé sans GO |
-| **B — Cursor files puis publication D7/D9** | Publication bornée HumanDecision + D9 | **Préférée** — à arbitrer Morris ; **pas ADOPTED** |
+Orientation **B** (Cursor files → publication D7/D9) recommandée, non arbitrée Morris. Aucun publisher parallèle. Aucun push GitHub REAL de mission Cursor.

-### Non livré / réserves ouvertes
+### Non livré / réserves

 - F2 pixel + BROWSER 12.01–12.14.
-- Avis Nora cognitif réel sur dossier D8 (run Nora).
-- LIVE SDK confined end-to-end.
-- Isolation B1 prouvée (gate `ISOLATION_PROVEN`).
+- LIVE Nora cognitif (run D3) — analyse dossier DETERMINISTIC/consultative seulement.
+- LIVE SDK confiné end-to-end.
+- Isolation B1 prouvée.
 - Option Git B ADOPTED.
-- Worker production long-run.
-- Push projet / PR / merge / RECETTE / STABLE.
+- Parcours intégré E2E BROWSER T-01…T-12.

-## Invariants respectés
+### Invariants respectés

-- Pas de second moteur D6/D7/D8/D9/MCP.
-- Pas d'admin Cursor Desktop dans Studio.
-- send ≠ observed ; STOP ≠ rollback ; finished ≠ conforme ; missing report ≠ no work.
-- Brief technique ≠ D8 ≠ avis Nora ≠ HumanDecision.
+- Pas de second moteur D6/D7/D8/D9.
+- Claim expiry ≠ absence d'effet.
+- READY ≠ syntaxe client.
+- Brief technique ≠ analyse Nora ≠ D8 ≠ D6.
+- NO RELEASE ; pas de push projet / PR / merge / RECETTE.
diff --git a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
index feb1fda3..d5dde88b 100644
--- a/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
+++ b/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
@@ -4,7 +4,7 @@

 | Champ | Valeur |
 |---|---|
-| Version | v0.2 — 23 novembre 2026 : décision Gate C et ouverture de ML5 enregistrées |
+| Version | v0.3 candidate — 23 novembre 2026 : R-001/R-002 reconstitués depuis Review Packs, conformité et contrat d'acceptation liés ; non mergée |
 | Objet | Suivi transversal des fonctionnalités attendues, réalisations et preuves Cursor pour ML5 |
 | Références | `mcleland147/sfia-workspace` ; `main@997897fd7cf914771e7d08e8030dc7123fab7d25` ; conception `sfia/next-nora-cognition-cursor-contract-candidate@3e84d528abe548e29b6ed3e9f12a100ca5c41151` |
 | Gate | **GATE C ACCEPTÉ PAR MORRIS AVEC RÉSERVES / GO CONSTRUCTION ML5** — décision explicite du 23/11/2026 dans la conversation ; la Roadmap de `main` présente encore son instantané antérieur `OPEN` et reste à synchroniser sous mandat D2 approprié. |
@@ -68,14 +68,14 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 |---|---|---|---|---|
 | ☐ | `A01` | Qualifier l'intention, le résultat, le contexte, les contraintes et les risques même pour une demande courte. | NV | — |
 | ☐ | `A02` | Adapter profondeur et moyens : réponse directe, investigation, documents, historique, Git ou autres outils utiles sans recherche systématique. | NV | — |
-| ☐ | `A03` | Ne préparer de nouveau contrat Cursor qu'après demande claire, GO de préparation ou mandat de correction déjà borné. | NV | — |
+| ☐ | `A03` | Ne préparer de nouveau contrat Cursor qu'après demande claire, GO de préparation ou mandat de correction déjà borné. | PARTIEL | `nora-contract-bridge` intent + sources CONSULTED/VERIFIED requises ; LIVE multi-sources NON PROUVÉ |
 | ☐ | `A04` | Permettre un brouillon correctif spontané dans la portée du mandat existant, sans nouveau dispatch automatique. | NV | — |
 | ☐ | `A05` | Requalifier hors mandat, changement matériel ou échecs répétés ; ne pas créer une boucle autonome de contrats. | NV | — |
 | ☐ | `A06` | Conduire une investigation séquencée, suivre les renvois déterminants et réviser les questions à mesure des découvertes. | NV | — |
 | ☐ | `A07` | Sélectionner et lire les bonnes versions des sources D4, conversation, historique, Git, décisions, rapports antérieurs et documents pertinents. | NV | — |
 | ☐ | `A08` | Distinguer découvert, consulté, vérifié, partiel, périmé, refusé et contradictoire ; préserver provenance, branche et version. | NV | — |
-| ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | PARTIEL | `investigation-state.ts` + unit ; non branché tour LIVE |
-| ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | PARTIEL | État mémoire A ; pas encore checkpoint durable A |
+| ☐ | `A09` | Contrôler qualitativement la suffisance des informations : une restriction déterminante inconnue interdit le statut de contrat prêt. | PARTIEL | `investigation-state` + READY serveur (`technical-contract-server-ready`) ignore flags client ; LIVE NON PROUVÉ |
+| ☐ | `A10` | Consolider faits, sources, exclusions, décisions, contradictions, acquis, questions et travail restant sans nouveau registre d'autorité D4. | PARTIEL | Snapshot durable + bridge tour ; pas de second registre D4 |
 | ☐ | `A11` | Conserver/reconstituer de façon fiable l'investigation après déconnexion, interruption, limite de contexte ou incident fournisseur sans fausse lecture ni effet rejoué. | PARTIEL | `investigation-persistence.ts` → `preparations.projection_json` ; reprise unit OK ; PG reprise tour non exhaustif |
 | ☐ | `A12` | Réduire les coûts/latences sur demandes simples et rendre ces capacités disponibles transversalement dans sas, projet, documents, décision et bilan. | NV | — |

@@ -113,8 +113,8 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi

 | Revu | ID | Exigence de résultat / comportement attendu | État | Preuve (SHA / run / test / capture / réserve) |
 |---|---|---|---|---|
-| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | NV | — |
-| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | DRAFT≠READY ; `markReady` + unknownRestrictions ; syntaxe ≠ suffisance |
+| ☐ | `D01` | Nora prépare un contrat à partir des sources, résultats antérieurs, risques, restrictions et mandat de préparation applicable. | PARTIEL | `prepareTechnicalContractFromNora` + bridge tour → DRAFT ; LIVE investigation multi-sources NON PROUVÉE |
+| ☐ | `D02` | Bloquer le statut prêt si source critique, cible, droit ou restriction structurante manquent ou divergent. | PARTIEL | CF-02 : READY serveur via investigation durable ; client `sourcesSufficient` ignoré ; BROWSER NON PROUVÉ |
 | ☐ | `D03` | Conserver une identité/version/fingerprint de contrat canonique unique, projet et cycle historique facultatif. | PARTIEL | `reversibility_limits_json` round-trip + fingerprint canonique ; PG test |
 | ☐ | `D04` | Afficher les quatre engagements : ce qui sera fait, non fait, résultat attendu, contrôle du Pilote. | PARTIEL | `ContractViewer` ; BROWSER Figma F2 manquant |
 | ☐ | `D05` | Rendre inspectables les six volets R2 D7 : mission, périmètre, capacités/autorité, STOP, preuves/sources, intégrité. | PARTIEL | `ContractViewer` volets ; F2 manquant |
@@ -139,7 +139,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `E06` | Collecter événements SDK réellement exposés et projeter des états LIVE sobres dans Exécution. | PARTIEL | Projection resultJson ; UI Exécution partielle |
 | ☐ | `E07` | Distinguer demande de lancement, ACK, run observé, travail, erreur, timeout, fin et UNKNOWN. | PARTIEL | `CursorLiveProjection` fields |
 | ☐ | `E08` | Distinguer STOP demandé, transmis, observé et effets partiels ; annulation n'implique pas rollback. | PARTIEL | stop API + limits CANCEL_IS_NOT_ROLLBACK |
-| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | P0-01 CAS `claimCursorAttempt` ; PG concurrent 1 win ; no blind redispatch DISPATCHED |
+| ☐ | `E09` | Protéger double clic, perte d'ACK, timeout et retry contre un second dispatch aveugle. | PARTIEL | CF-03 : `priorSendMayHaveOccurred` + SQL fence AMBIGUOUS ; PG T-04 ACK-lost **PASS** (DEV) ; LIVE NOT PROVEN |
 | ☐ | `E10` | Réconcilier après crash, reconnexion, perte d'ownership et état incertain, avec fencing/idempotence prouvés. | PARTIEL | reconcile sans redispatch ; stale claimToken fenced (PG) |
 | ☐ | `E11` | Retrouver durablement interventions, contrats, versions, événements et tentatives, y compris hors cycle. | PARTIEL | Tables durables ; UI historique 12.04 non câblée |
 | ☐ | `E12` | Vérifier seulement les MCP indispensables à la mission : chargement, authentification, invocabilité et permissions réelles. | NV | mcpRequired listé dans plan ; vérification LIVE non faite |
@@ -178,8 +178,8 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 | ☐ | `G09` | En cas de crash/rapport absent/partiel/hostile ou contradiction, conserver faits accessibles et état PARTIAL/UNKNOWN sans succès inventé. | PARTIEL | MISSING/INCOMPLETE/REJECTED ; secrets → REJECTED |
 | ☐ | `G10` | D7 rattache/contrôle identité de rapport ; D9 vérifie Git ; D8 recoupe les changements réels, manifestes et critères. | PARTIEL | D7+D8 ; D9 recoupement Git Cursor non branché |
 | ☐ | `G11` | Rendre consultables les neuf rubriques D8 : résumé, prévu, réalisé, évaluation, écarts, impact, verdict, recommandations, sources. | PARTIEL | `qualifyCursorRealization` + `RealizationBilan` |
-| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | Brief technique déterministe ≠ avis Nora cognitif (`noraAnalysisKind`) ; run Nora cognitif encore ouvert |
-| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | Labels + `CursorRealizationSurface` sur `?surface=publication` |
+| ☐ | `G12` | Déclencher une unique revue globale Nora après fin ou interruption réconciliée, jamais à chaque événement/commit. | PARTIEL | `buildNoraCognitiveAnalysis` (dossier) + brief distinct ; LIVE Nora run = preuve supérieure encore ouverte |
+| ☐ | `G13` | Distinguer déclaration Cursor, observation, verdict D8, avis Nora et décision HumanDecision D6. | PARTIEL | Labels + surfaces `execution` / `publication` (results) distinctes |
 | ☐ | `G14` | Permettre En discuter avec Nora : référence de bilan jointe au brouillon, retirable, aucun envoi automatique. | PARTIEL | `onDiscussWithNora` → `setDraft` + Travail ; envoi non automatique |
 | ☐ | `G15` | Conserver historique/version et réserves ; requalification datée si preuve tardive, sans rejouer la mission. | NV | — |

@@ -190,10 +190,10 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 |---|---|---|---|---|
 | ☐ | `H01` | 12.01 : conduite/activité Nora pour un travail de préparation de contrat. | NV | — |
 | ☐ | `H02` | 12.02,12.03,12.14 : 50/50, inspection/confirmation, instruction technique intégrale défilante. | NV | — |
-| ☐ | `H03` | 12.04,12.05 : interventions et contrats retrouvables avec identité, autorité, versions et tentatives. | NV | — |
-| ☐ | `H04` | 12.06,12.07 : tentative LIVE observée, erreur/UNKNOWN, réconciliation sans faux état. | NV | — |
-| ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | NV | — |
-| ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | NV | — |
+| ☐ | `H03` | 12.04,12.05 : interventions et contrats retrouvables avec identité, autorité, versions et tentatives. | PARTIEL | `?surface=execution` + historique interventions ; F2/BROWSER NOT PROVEN |
+| ☐ | `H04` | 12.06,12.07 : tentative LIVE observée, erreur/UNKNOWN, réconciliation sans faux état. | PARTIEL | UI AMBIGUOUS « à réconcilier » + LIVE projection ; LIVE SDK NOT PROVEN |
+| ☐ | `H05` | 12.08,12.11,12.12,12.13 : quatre onglets de bilan couvrant neuf rubriques D8, valeurs et réserves cohérentes. | PARTIEL | Onglets Figma Synthèse/Livrables et tests/Git et pièces/Écarts ; F2 NOT PROVEN |
+| ☐ | `H06` | 12.09 : retour contextualisé du bilan vers le fil Nora sans envoi automatique. | PARTIEL | Bouton bilan → draft Travail ; envoi auto absent ; F2 NOT PROVEN |
 | ☐ | `H07` | 12.10 : activité de Nora dans le sas sans projet fictif. | NV | — |
 | ☐ | `H08` | Avant code de chaque surface : Figma validée et extraction L0/L1/L2, assets exacts, PNG natif hashé, mapping node→DOM→assertion ; après code : runtime screenshot, styles/DOM/F2, état/viewport/fixture identiques, interactions browser, réserves explicites. | PARTIEL | L0+L1 metadata 14 frames + design context 12.02 ; F2/BROWSER runtime NOT PROVEN |

@@ -204,7 +204,7 @@ Les colonnes `État`/`Preuve et revue` sont **éditables à chaque revue signifi
 |---|---|---|---|---|
 | ☐ | `I01` | Ne pas dupliquer les autorités D3/D4/D5/D6/D7/D8/D9 ni inventer moteur cognitif, Git ou d'exécution concurrent. | NV | — |
 | ☐ | `I02` | Vérifier droits par Pilote/projet/ressource, restrictions, suspensions, révocations et absence d'effet hors mandat. | NV | — |
-| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | NV | — |
+| ☐ | `I03` | Tester concurrence, ownership, idempotence, fencing, ACK perdu, STOP et reprise selon les responsabilités. | PARTIEL | PG ML5 dispatch **8 PASS** incl. ACK-lost ; concurrence 1 win ; fencing stale claim |
 | ☐ | `I04` | Tester secrets, prompt injection, exfiltration web, artefacts hostiles, sécurité MCP/Git et isolation. | NV | — |
 | ☐ | `I05` | Associer code, tests déterministes et d'intégration, scénarios nominaux/négatifs et documentation dans chaque livraison. | NV | — |
 | ☐ | `I06` | Tester les parcours UX réellement concernés sur navigateur/capture avec SHA/build/viewport/état identifiables. | NV | — |
@@ -232,11 +232,39 @@ Les cas **Q-01…Q-56** du contrat fonctionnel ML5 sont la matrice de comporteme

 **Condition d'intégrité de couverture :** une ligne A–I ou un scénario Q applicable ne peut disparaître sans trace d'un arbitrage explicitement attribué. Une mention « réalisé » sans ref et preuve n'est jamais `VERIFIÉ`.

+## 4 bis. Revue de conformité transversale et contrat d'acceptation — R-002 (23/11/2026)
+
+**Contrat d'acceptation intégré candidat :** [Cognition et réalisation gouvernée](./contrat-acceptation-cognition-et-realisation-gouvernee.md). Le présent registre demeure le **seul index de couverture des 99 exigences**. Les 12 cas intégrateurs du contrat d'acceptation sont des regroupements d'oracles de qualification, **pas** un remplacement des Q-01…Q-56 ni des PF propriétaires.
+
+**État reconstitué (sources : deux Review Packs FULL distants) :** 44 PARTIEL, 1 EC, 54 NV, **0 VÉRIFIÉ** au niveau d'acceptation complet. Les preuves unitaires/PostgreSQL ne valent ni BROWSER, ni F2, ni LIVE SDK, ni REAL GitHub. Les statuts des lignes ci-dessus reprennent les changements explicitement tracés dans les diffs des deux handoffs. **Le HEAD produit local `6cf33e99…` n'a pas été lu directement par ChatGPT : son tree, son état et ses tests restent NON OBSERVÉS indépendamment.** Les tests PASS sont déclarés dans les rapports.
+
+| Famille | Total | PARTIEL | EC | NV | Résultat produit manquant |
+|---|---:|---:|---:|---:|---|
+| A — Conduite cognitive | 12 | 3 | 0 | 9 | Investigation Nora et préparation réelle du contrat |
+| B — Recherche web | 9 | 2 | 0 | 7 | Isolation publique et lecture WEB LIVE |
+| C — Activité Nora | 8 | 2 | 0 | 6 | Observations outils, fil courant et reconnexion |
+| D — Contrat / autorité | 12 | 10 | 0 | 2 | READY établi côté serveur, inspection 50/50, fidélité intégrale |
+| E — Cursor SDK / D7 | 15 | 14 | 0 | 1 | ACK perdu sans double effet, supervision, LIVE confiné |
+| F — Git Cursor / D9 | 9 | 0 | 0 | 9 | Choix A/B et continuité par SHA vérifiés |
+| G — Handoff / D8 | 15 | 12 | 1 | 2 | Provenance, inventaire probant, D8 révisable et avis Nora |
+| H — UX Figma | 8 | 1 | 0 | 7 | Surfaces Exécution/Résultats distinctes et F2/BROWSER |
+| I — QA/gates | 11 | 0 | 0 | 11 | Parcours intégré, non-régression et preuves par niveaux |
+| **TOTAL** | **99** | **44** | **1** | **54** | **Aucune réception ML5** |
+
+**Écart UX vérifié directement sur Figma :** page 12 (14 frames) présente Travail 50/50 (12.02), **Exécution distincte** (12.04, 12.05, 12.06, 12.07, 12.14) et **Résultats & preuves distincts** (12.08, 12.11, 12.12, 12.13). Le code rapporté monte `CursorRealizationSurface` sous `?surface=publication` et utilise quatre onglets D8 différents. **Conformité structurelle et F2 NON PROUVÉES.** Les extraits Figma ne sont pas des captures runtime.
+
+**Contrats propriétaires à recroiser impérativement :** R2 D3/D4/D5/D6/D7/D8/D9 ; `PF-REAL-01…30`, `PF-PRV-01…32`, scénarios gouvernance et Git applicables. Les invariants ML4, ENV-01 et les réserves antérieures continuent de s'appliquer.
+
+**Trajectoire recommandée (même macro-lot, pas de micro-gates inventés) :** sécuriser effets/READY/qualification, raccorder Nora et les parcours visuels, rendre les preuves D8 effectivement consultables, qualifier les frontières réelles selon les mandats, puis réconcilier le registre et les scénarios. Git B (publication gouvernée D7/D9) reste **RECOMMANDÉE NON ARBITRÉE**. Aucune architecture, migration structurante ou promotion n'est adoptée par ce document.
+
 ## 5. Journal des livraisons et revues

 | ID | Date | Contrat Cursor / cycle | Branche / HEAD / build | Review Pack / handoff | IDs revus | Verdict et réserves |
 |---|---|---|---|---|---|---|
-| R-001 | 2026-11-23 | ML5 integrated delivery | `sfia/next-ml5-integrated-delivery-20261123` @ base `0f1d37c3` + commits locaux | `.tmp-sfia-review/chatgpt-review.md` → handoff L3 | A09–A11 PARTIEL ; B06–B07 PARTIEL ; C01/C06 EC ; D01–D08/D10–D12 EC–PARTIEL ; E01–E11/E13–E15 EC–PARTIEL ; G01–G13 EC–PARTIEL ; H01–H08 L0 only ; I01/I05/I07/I11 PARTIEL | **ML5 PARTIAL — GOVERNED GAPS** — SCRIPTED/DETERMINISTIC only ; LIVE/BROWSER/REAL outstanding |
+| R-001a | 23/11/2026 | ML5 socle vertical — CRITICAL | `sfia/next-ml5-integrated-delivery-20261123` / `69aeb329…` local rapporté ; aucune publication projet | [Review Pack 1 @ d731c1d7](https://github.com/mcleland147/sfia-workspace/blob/d731c1d77016b4585dda1b96051f949478f67b8e/sfia-review-handoff/latest-chatgpt-review.md) | A–I, Q applicables, socle D/E/G | ML5 PARTIAL — GOVERNED GAPS ; 17 tests unitaires rapportés ; BROWSER/LIVE/REAL non prouvés |
+| R-001b | 23/11/2026 | ML5 consolidation P0/UX initiale — CRITICAL | même worktree, HEAD local `6b7dac12…` dans pack et `6cf33e99…` rapporté ensuite ; non lu directement | [Review Pack 2 @ 2b2d27f6](https://github.com/mcleland147/sfia-workspace/blob/2b2d27f6e8b2495adcccd4677078a8b77670b4b5/sfia-review-handoff/latest-chatgpt-review.md) | A–I et 56 Q selon pack ; 29 unit + 7 PG PASS **rapportés** | ML5 PARTIAL — GOVERNED GAPS ; P0 DEV partiels, F2/BROWSER/LIVE/REAL ouverts |
+| R-002 | 23/11/2026 | Revue de conformité fonctionnelle/UX/architecture D0 + intégration documentaire D1/D2 candidate | Branch documentaire de revue, `main` inchangé ; SHA commit à relever après écriture | Même deux Review Packs + Figma page 12 (lecture) | 99 exigences + Q-01…Q-56 + PF propriétaires à recouper | 44 PARTIEL / 1 EC / 54 NV ; contrat d'acceptation **CANDIDAT**, non réceptionné |
+| R-003 | 23/11/2026 | ML5 convergence intégrée — CF-02/03, Nora prepare, surfaces Exécution/Résultats, D8/Nora | `sfia/next-ml5-integrated-delivery-20261123` worktree local (HEAD post-cycle à figer) ; push projet **interdit** | Review Pack 3 → `sfia/review-handoff` (publish-in-cycle) | A03/A09/D01/D02/E09/G12–G14/H03–H06/I03 + CF-02/03 | ML5 PARTIAL — GOVERNED GAPS ; PG 8 PASS ; unit 25+ ; BROWSER/F2/LIVE/REAL ouverts |

 Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est justifié ; `.tmp-sfia-review/chatgpt-review.md` reste la source mono-cycle, avec Review Handoff L3 distinct de l'historique produit Studio. Ne jamais considérer un résumé seul comme contenu complet des fichiers modifiés.

@@ -244,7 +272,18 @@ Un **Review Pack SFIA v2.6 FULL** est attendu lorsque le profil Critical est jus

 | ID | Date/lot | Exigence(s) | Fait/écart constaté (≠ hypothèse) | Gravité | Preuve et SHA | Responsable / correction | Exit / état |
 |---|---|---|---|---|---|---|---|
-| — | — | — | — | — | — | — | — |
+| CF-01 | R-002 / ML5 | A01–A12, D01 | Nora ne prépare pas encore de contrat à partir d'une investigation et des sources effectivement qualifiées | MAJEUR | Packs 1–2 / D3 | Cursor : relier au conducteur D3 sans moteur concurrent | E2E cognitif multi-sources, restrictions, reprise ; OUVERT |
+| CF-02 | R-002 / ML5 | A09, D02, D11 | READY dépend d'indications client (`sourcesSufficient`, `unknownRestrictions`) | BLOQUANT EFFET | Pack 2 → cycle 3 | `technical-contract-server-ready` + route `/ready` ; client flags ignorés | BROWSER + rights revoked still open ; REMEDIATED DEV / PARTIEL |
+| CF-03 | R-002 / ML5 | E09–E10 | Chemin `AMBIGUOUS → DISPATCHED` potentiellement redéclenchable après ACK perdu | BLOQUANT LIVE | Pack 2 → cycle 3 | `priorSendMayHaveOccurred` + SQL fence ; PG T-04 PASS | LIVE SDK still open ; REMEDIATED DEV / PARTIEL |
+| CF-04 | R-002 / ML5 | B01–B09 | Web B1 désactivé ; variable ISOLATION_PROVEN non équivalente à une barrière sûre | BLOQUANT B1 LIVE | Pack 2 | Cursor : isolation au point de sortie et tests sécurité | Non-exfil et outils lecture réels ; OUVERT |
+| CF-05 | R-002 / ML5 | C01–C08 | Activité annoncée/fin de tour, événements outil et reprise incomplètes | MAJEUR | Pack 2 | Cursor : observer outils D3, préserver C1 | BROWSER sas/projet pendant RUNNING/reconnexion ; OUVERT |
+| CF-06 | R-002 / ML5 | D09–D10, H01–H08 | Travail 50/50, Exécution et Résultats distincts de Figma ; F2 absent | MAJEUR UX | Figma page 12 + pack 2 | Cursor : composants propriétaires, L1/L2, BROWSER F2 | 14 états qualifiés par frame/fixture ; OUVERT |
+| CF-07 | R-002 / ML5 | E05–E08, E12/E15 | Supervision run long et SDK LIVE confiné non démontrés | BLOQUANT LIVE | Pack 2 / qualification C9 bornée | Cursor : prouver supervision/reprise, MCP seulement si requis | Browser fermé/crash/STOP, identités réelles ; OUVERT |
+| CF-08 | R-002 / ML5 | F01–F09 | Publication Git Cursor et continuité non implémentées ; option A/B ouverte | GATE MORRIS | Pack 2 / R2 D9 | Morris : arbitrage A/B ; Cursor prépare blast radius | Permettre continuité par SHA sans privilège tacite ; OUVERT |
+| CF-09 | R-002 / ML5 | G01–G11/G15 | Provenance client-déclarée, dossier et D8 pas réellement recoupés et révisables | MAJEUR | Pack 2 | Cursor : acquisition serveur / recoupement D9-D8 | PF-PRV contradictions/preuve tardive ; OUVERT |
+| CF-10 | R-002 / ML5 | G12–G14 | Brief déterministe distinct du véritable avis Nora, absent | MAJEUR | Pack 2 | Cursor : analyse D3 post-tentative unique | Analyse sourcée et retour brouillon sans effet ; OUVERT |
+| CF-11 | R-002 / ML5 | I01–I11, Q-01…Q-56 | Pas de preuve BROWSER/F2/LIVE/REAL ni matrice PF complète | GATE QA | Packs 1–2 | Cursor : preuves multi-niveaux par exigence | Qualifier toutes exigences et les PF sans auto-réception ; OUVERT |
+| CF-12 | R-002 / ML5 | Gouvernance | `main` snapshot Gate C ancien ; code ML5 local ; pas de push produit | SYNCHRO GOUVERNÉE | Git refs vérifiées | Morris : GO séparé si synchronisation normative | Pas de merge/recette/adoption implicite ; OUVERT |

 Chaque réserve transférée comporte **propriétaire, impact, preuve attendue, condition de sortie et moment de relecture**. Une correction technique ne déclenche pas de nouvelle tentative Cursor sans GO lorsqu'un nouvel acte d'effet est requis.

@@ -273,6 +312,6 @@ Chaque réserve transférée comporte **propriétaire, impact, preuve attendue,
 - [ ] Code/tests/architecture/UX/as-built synchronisés ; dette et capacité suivante qualifiées.
 - [ ] Décision Morris de réception, intégration, promotion et adoption traitée séparément.

-**État initial révisé :** `REVIEW REGISTRY VALIDATED FOR USE / ALL 99 ITEMS NV / GATE C ACCEPTED WITH RESERVES BY MORRIS 2026-11-23 / ML5 BUILD GO GRANTED / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`.
+**État courant R-002 (d'après rapports, sans accès au worktree local) :** `ML5 PARTIAL — GOVERNED GAPS / 44 PARTIEL / 1 EC / 54 NV / NO VERIFIED / NO BROWSER F2 LIVE REAL / NO PR-MERGE-CUTOVER-RELEASE / NOT ADOPTED`. L'état historique initial était ALL 99 NV ; les états présentés ci-dessus ne constituent pas une preuve d'acceptation.

 **Hors périmètre de ce document :** nouvelle doctrine, architecture physique adoptée, ordre impératif de micro-lots, auto-acceptation, PR/merge, mutation/runtime, gestion MCP Studio universelle.
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
index 18f896f3..febcfe9c 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
@@ -51,6 +51,23 @@ export async function POST(
     ) {
       return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
     }
+    // Client may never self-attest RUNTIME_COLLECTED (CF-09).
+    const clientAcquisition = body.provenance?.acquisition;
+    if (clientAcquisition === "RUNTIME_COLLECTED") {
+      return NextResponse.json(
+        {
+          error: "INVALID_REQUEST",
+          message: "RUNTIME_COLLECTED réservé au runtime serveur — pas au client",
+        },
+        { status: 400 },
+      );
+    }
+    const acquisition =
+      clientAcquisition === "SCRIPTED_ADAPTER" ||
+      clientAcquisition === "CLIENT_DECLARED" ||
+      clientAcquisition === "UNKNOWN"
+        ? clientAcquisition
+        : "CLIENT_DECLARED";
     const result = await ingestRealizationHandoff({
       pilotId: session.pilotId,
       projectId,
@@ -58,14 +75,12 @@ export async function POST(
       reportMarkdown: body.reportMarkdown,
       manifest: body.manifest,
       expectedContractFingerprint: body.expectedContractFingerprint,
-      provenance: body.provenance
-        ? {
-            acquisition: body.provenance.acquisition ?? "CLIENT_DECLARED",
-            declaredExecutorId: body.provenance.declaredExecutorId,
-            observedAgentId: body.provenance.observedAgentId,
-            observedRunId: body.provenance.observedRunId,
-          }
-        : { acquisition: "CLIENT_DECLARED" },
+      provenance: {
+        acquisition,
+        declaredExecutorId: body.provenance?.declaredExecutorId,
+        observedAgentId: body.provenance?.observedAgentId,
+        observedRunId: body.provenance?.observedRunId,
+      },
     });
     return NextResponse.json(result);
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
index a8780713..e62683bb 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
@@ -3,8 +3,10 @@ import { and, eq } from "drizzle-orm";
 import { db } from "@/db/client";
 import { effectAttempts, realizationHandoffs, realizationQualifications } from "@/db/schema";
 import { getCursorAttempt } from "@/domains/execution/cursor-attempt-service";
+import { getTechnicalContract } from "@/domains/execution/technical-contract";
 import type { HandoffManifest } from "@/domains/execution/handoff-integrity";
 import {
+  buildNoraCognitiveAnalysis,
   buildNoraFinalAnalysisBrief,
   classifyAttachedNoraPayload,
   qualifyCursorRealization,
@@ -39,13 +41,15 @@ export async function GET(
         .limit(1)
     )[0];
     if (!row) return NextResponse.json({ status: "MISSING", qualification: null });
+    const markdown = row.noraAnalysisMarkdown;
     return NextResponse.json({
       status: row.status,
       qualification: {
         id: row.id,
         verdict: row.verdict,
         rubrics: JSON.parse(row.rubricsJson || "{}"),
-        noraAnalysisMarkdown: row.noraAnalysisMarkdown,
+        noraAnalysisMarkdown: markdown,
+        noraAnalysisKind: classifyAttachedNoraPayload(markdown),
         noraAnalysisAt: row.noraAnalysisAt?.toISOString() ?? null,
         limits: JSON.parse(row.limitsJson || "[]"),
       },
@@ -65,6 +69,8 @@ export async function POST(
     const { projectId, attemptId } = await ctx.params;
     const body = (await req.json().catch(() => ({}))) as {
       attachNoraAnalysis?: boolean;
+      /** Prefer cognitive analysis (CA-08). Technical brief remains available. */
+      attachNoraCognitive?: boolean;
     };
     const attempt = await getCursorAttempt({
       pilotId: session.pilotId,
@@ -81,21 +87,59 @@ export async function POST(
     const manifest = handoff
       ? (JSON.parse(handoff.manifestJson || "{}") as HandoffManifest)
       : null;
+
+    let contractTitle: string | null = null;
+    let acceptanceCriteria: string[] = [];
+    let expectedProofs: string[] = [];
+    try {
+      const contract = await getTechnicalContract({
+        pilotId: session.pilotId,
+        projectId,
+        contractId: attempt.plan.contractId,
+      });
+      contractTitle = contract.body.title;
+      acceptanceCriteria = contract.body.acceptance?.criteria ?? [];
+      expectedProofs = contract.body.acceptance?.expectedProofs ?? [];
+    } catch {
+      /* contract may be missing — qualify with fingerprint only */
+    }
+
     const q = qualifyCursorRealization({
       contractFingerprint: attempt.fingerprint,
+      acceptanceCriteria,
+      expectedProofs,
       handoffStatus: handoff?.status ?? null,
       reportMarkdown: handoff?.reportMarkdown ?? null,
       manifest,
       terminalStatus: attempt.live.terminalStatus ?? null,
     });
-    // attachNoraAnalysis stores a deterministic technical brief only — not a Nora run.
-    const technicalBrief = body.attachNoraAnalysis ? buildNoraFinalAnalysisBrief(q) : null;
-    const noraKind = classifyAttachedNoraPayload(technicalBrief);
+
+    const dossierIncomplete =
+      q.verdict === "INDETERMINATE" || !handoff || handoff.status !== "RECEIVED";
+
+    const finalMarkdown = body.attachNoraCognitive
+      ? buildNoraCognitiveAnalysis({
+          qualification: q,
+          contractTitle,
+          attemptId,
+          sourcesAccessible: manifest?.sourcesConsulted,
+          dossierIncomplete,
+        })
+      : body.attachNoraAnalysis
+        ? buildNoraFinalAnalysisBrief(q)
+        : null;
+
+    const noraKind = classifyAttachedNoraPayload(finalMarkdown);
     const limits = [
       ...q.limits,
       ...(noraKind === "TECHNICAL_BRIEF"
         ? ["NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté"]
         : []),
+      ...(noraKind === "NORA_COGNITIVE"
+        ? [
+            "NORA_COGNITIVE_FROM_DOSSIER — consultatif ; LIVE Nora run = preuve supérieure si exécuté",
+          ]
+        : []),
     ];
     const existing = (
       await db
@@ -109,9 +153,12 @@ export async function POST(
         exposeMessage: true,
       });
     }
-    // Ensure attempt exists for FK
     const efx = (
-      await db.select({ id: effectAttempts.id }).from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
+      await db
+        .select({ id: effectAttempts.id })
+        .from(effectAttempts)
+        .where(eq(effectAttempts.id, attemptId))
+        .limit(1)
     )[0];
     if (!efx) throw new StudioError("NOT_FOUND", "Tentative introuvable");

@@ -126,8 +173,8 @@ export async function POST(
       status: "RECORDED",
       rubricsJson: JSON.stringify(q.rubrics),
       verdict: q.verdict,
-      noraAnalysisMarkdown: technicalBrief,
-      noraAnalysisAt: technicalBrief ? now : null,
+      noraAnalysisMarkdown: finalMarkdown,
+      noraAnalysisAt: finalMarkdown ? now : null,
       limitsJson: JSON.stringify(limits),
       createdAt: now,
       updatedAt: now,
@@ -137,7 +184,7 @@ export async function POST(
       verdict: q.verdict,
       rubrics: q.rubrics,
       limits,
-      noraAnalysisMarkdown: technicalBrief,
+      noraAnalysisMarkdown: finalMarkdown,
       noraAnalysisKind: noraKind,
       testsPass: q.testsPass,
       conformityProven: q.conformityProven,
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
index 0a81f832..dc45fc85 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
@@ -1,5 +1,6 @@
 import { NextResponse } from "next/server";
-import { markTechnicalContractReady } from "@/domains/execution/technical-contract";
+import { qualifyTechnicalContractReadyServerSide } from "@/domains/execution/technical-contract-server-ready";
+import { getTechnicalContract } from "@/domains/execution/technical-contract";
 import { requireStudioSession } from "@/domains/identity/session";
 import { studioErrorResponse } from "@/lib/http-errors";

@@ -11,15 +12,20 @@ export async function POST(
     const session = await requireStudioSession();
     const { projectId, contractId } = await ctx.params;
     const body = (await req.json().catch(() => ({}))) as {
-      unknownRestrictions?: string[];
-      sourcesSufficient?: boolean;
+      preparationId?: string | null;
     };
-    const result = await markTechnicalContractReady({
+    // Client unknownRestrictions / sourcesSufficient intentionally ignored (CF-02).
+    const existing = await getTechnicalContract({
       pilotId: session.pilotId,
       projectId,
       contractId,
-      unknownRestrictions: body.unknownRestrictions,
-      sourcesSufficient: body.sourcesSufficient,
+    });
+    const preparationId = body.preparationId ?? existing.preparationId ?? null;
+    const result = await qualifyTechnicalContractReadyServerSide({
+      pilotId: session.pilotId,
+      projectId,
+      contractId,
+      preparationId: preparationId ?? undefined,
     });
     return NextResponse.json(result);
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
index 12aa8166..fab6acbd 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
@@ -3,6 +3,7 @@ import {
   createTechnicalContract,
   listTechnicalContracts,
 } from "@/domains/execution/technical-contract";
+import { prepareTechnicalContractFromNora } from "@/domains/execution/nora-contract-prepare";
 import type { TechnicalContractBody } from "@/domains/execution/types";
 import { requireStudioSession } from "@/domains/identity/session";
 import { studioErrorResponse } from "@/lib/http-errors";
@@ -35,14 +36,34 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
       body?: TechnicalContractBody;
       sourceTurnCommandId?: string | null;
       supersedesContractId?: string | null;
-      /** Explicit promotion — syntax-complete alone never yields READY. */
+      /** When true, prepare via durable investigation (Nora path) — always DRAFT. */
+      fromNoraInvestigation?: boolean;
+      /** Ignored for READY — syntax-complete create is DRAFT unless markReady+server facts. */
       markReady?: boolean;
-      unknownRestrictions?: string[];
-      sourcesSufficient?: boolean;
     };
     if (!body.contractKey || !body.body) {
       return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
     }
+
+    if (body.fromNoraInvestigation) {
+      if (!body.preparationId) {
+        return NextResponse.json(
+          { error: "INVALID_REQUEST", message: "preparationId requis pour préparation Nora" },
+          { status: 400 },
+        );
+      }
+      const result = await prepareTechnicalContractFromNora({
+        pilotId: session.pilotId,
+        projectId,
+        preparationId: body.preparationId,
+        contractKey: body.contractKey,
+        body: body.body,
+        sourceTurnCommandId: body.sourceTurnCommandId,
+      });
+      return NextResponse.json(result);
+    }
+
+    // Manual/API create: always DRAFT. READY only via server-side /ready route (CF-02).
     const result = await createTechnicalContract({
       pilotId: session.pilotId,
       projectId,
@@ -51,9 +72,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
       body: body.body,
       sourceTurnCommandId: body.sourceTurnCommandId,
       supersedesContractId: body.supersedesContractId,
-      markReady: body.markReady === true,
-      unknownRestrictions: body.unknownRestrictions,
-      sourcesSufficient: body.sourcesSufficient,
+      markReady: false,
     });
     return NextResponse.json(result);
   } catch (e) {
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index b7e7c4ca..f1c4de88 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -102,14 +102,7 @@ type Knowledge = {
   openPoints: Array<{ id: string; statement: string; status: string; subjectId: string | null }>;
 };

-type Surface =
-  | "travail"
-  | "projet"
-  | "pilotage"
-  | "journal"
-  | "document"
-  | "git"
-  | "publication";
+type Surface = StudioSurface;
 type DocUiState = "READING" | "EDITING" | "SAVING" | "CONFLICT" | "FAILED" | "UNKNOWN";
 type DocView = "library" | "read" | "history" | "compare";
 type HistoricalSourceConfirmation = {
@@ -216,6 +209,7 @@ const SURFACES: Surface[] = [
   "journal",
   "document",
   "git",
+  "execution",
   "publication",
 ];

@@ -2786,6 +2780,13 @@ export default function ProjectPage() {
                   >
                     Sources Git
                   </button>
+                  <button
+                    type="button"
+                    className="fig-inspector-link"
+                    onClick={() => selectSurface("execution")}
+                  >
+                    Exécution
+                  </button>
                   <button
                     type="button"
                     className="fig-inspector-link"
@@ -2984,10 +2985,24 @@ export default function ProjectPage() {
         />
       ) : null}

+      {surface === "execution" ? (
+        <div data-testid="execution-surface-ml5">
+          <CursorRealizationSurface
+            projectId={params.projectId}
+            mode="execution"
+            onDiscussWithNora={(text) => {
+              setDraft(text);
+              selectSurface("travail");
+            }}
+          />
+        </div>
+      ) : null}
+
       {surface === "publication" ? (
         <div data-testid="publication-surface-ml5">
           <CursorRealizationSurface
             projectId={params.projectId}
+            mode="results"
             onDiscussWithNora={(text) => {
               setDraft(text);
               selectSurface("travail");
diff --git a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
index 7cdacec9..37c4981b 100644
--- a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
@@ -1,14 +1,14 @@
 "use client";

 /**
- * ML5 — parcours Exécution / Résultats raccordé (frames 12.02–12.08 / 12.11–12.14).
+ * ML5 — parcours Exécution (12.04–12.07 / 12.14) et Résultats (12.08 / 12.11–12.13).
  * Mounted on existing project page — no parallel shell.
  * Reading never authorizes; Non confirmation = no dispatch.
  */

 import { useCallback, useEffect, useState } from "react";
 import { ContractViewer, type ContractViewerModel } from "./ContractViewer";
-import { RealizationBilan } from "./RealizationBilan";
+import { RealizationBilan, type BilanTab } from "./RealizationBilan";
 import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

 type AttemptRow = {
@@ -41,7 +41,7 @@ type ContractRow = {
   version: number;
   fingerprint: string;
   status: string;
-  body: ContractViewerModel extends never ? never : {
+  body: {
     title: string;
     engagements: ContractViewerModel["engagements"];
     volets: ContractViewerModel["volets"];
@@ -53,8 +53,11 @@ type ContractRow = {

 export function CursorRealizationSurface(props: {
   projectId: string;
+  /** Figma: execution vs résultats — same shell, distinct responsibility. */
+  mode?: "execution" | "results";
   onDiscussWithNora?: (draft: string) => void;
 }) {
+  const mode = props.mode ?? "execution";
   const [contracts, setContracts] = useState<ContractRow[]>([]);
   const [attempts, setAttempts] = useState<AttemptRow[]>([]);
   const [selectedContract, setSelectedContract] = useState<ContractRow | null>(null);
@@ -67,10 +70,9 @@ export function CursorRealizationSurface(props: {
     rubrics: D8Rubric[];
     limits: string[];
     noraAnalysisMarkdown?: string | null;
+    noraAnalysisKind?: string | null;
   } | null>(null);
-  const [bilanTab, setBilanTab] = useState<"synthese" | "evaluation" | "verdict" | "sources">(
-    "synthese",
-  );
+  const [bilanTab, setBilanTab] = useState<BilanTab>("synthese");
   const [status, setStatus] = useState("");
   const [busy, setBusy] = useState(false);

@@ -83,7 +85,6 @@ export function CursorRealizationSurface(props: {
       const j = (await cRes.json()) as { contracts?: ContractRow[] };
       setContracts(j.contracts ?? []);
     }
-    // attempts list via dedicated route if present; else empty
     if (aRes && aRes.ok) {
       const j = (await aRes.json()) as { attempts?: AttemptRow[] };
       setAttempts(j.attempts ?? []);
@@ -94,20 +95,6 @@ export function CursorRealizationSurface(props: {
     void reload();
   }, [reload]);

-  async function loadAttemptsFallback() {
-    // Prefer list endpoint; if 404, keep empty (API may only expose per-id GET).
-    const res = await fetch(`/api/projects/${props.projectId}/realization/attempts`);
-    if (res.ok) {
-      const j = (await res.json()) as { attempts?: AttemptRow[] };
-      setAttempts(j.attempts ?? []);
-    }
-  }
-
-  useEffect(() => {
-    void loadAttemptsFallback();
-    // eslint-disable-next-line react-hooks/exhaustive-deps
-  }, [props.projectId]);
-
   async function prepareFromContract(contract: ContractRow) {
     setBusy(true);
     setStatus("");
@@ -199,6 +186,7 @@ export function CursorRealizationSurface(props: {
           rubrics: D8Rubric[];
           limits: string[];
           noraAnalysisMarkdown?: string | null;
+          noraAnalysisKind?: string | null;
         };
       };
       if (j.status === "MISSING" || !j.qualification) {
@@ -207,7 +195,7 @@ export function CursorRealizationSurface(props: {
           {
             method: "POST",
             headers: { "Content-Type": "application/json" },
-            body: JSON.stringify({ attachNoraAnalysis: true }),
+            body: JSON.stringify({ attachNoraCognitive: true }),
           },
         );
         const created = (await res.json().catch(() => ({}))) as {
@@ -215,6 +203,7 @@ export function CursorRealizationSurface(props: {
           rubrics?: D8Rubric[];
           limits?: string[];
           noraAnalysisMarkdown?: string | null;
+          noraAnalysisKind?: string | null;
         };
         if (res.ok && created.rubrics) {
           setBilan({
@@ -222,6 +211,7 @@ export function CursorRealizationSurface(props: {
             rubrics: created.rubrics,
             limits: created.limits ?? [],
             noraAnalysisMarkdown: created.noraAnalysisMarkdown,
+            noraAnalysisKind: created.noraAnalysisKind,
           });
           return;
         }
@@ -233,6 +223,7 @@ export function CursorRealizationSurface(props: {
         rubrics: j.qualification.rubrics,
         limits: j.qualification.limits,
         noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
+        noraAnalysisKind: j.qualification.noraAnalysisKind,
       });
     } finally {
       setBusy(false);
@@ -266,13 +257,26 @@ export function CursorRealizationSurface(props: {
       }
     : null;

+  const showExecutionChrome = mode === "execution";
+  const showResultsChrome = mode === "results";
+
   return (
-    <div className="fig-cursor-realization" data-testid="cursor-realization-surface">
+    <div
+      className="fig-cursor-realization"
+      data-testid="cursor-realization-surface"
+      data-mode={mode}
+    >
       <header>
-        <p className="fig-kicker !mb-0">EXÉCUTION CURSOR  /  RÉSULTATS</p>
-        <h2 className="fig-inspector-title">Réalisation gouvernée</h2>
+        <p className="fig-kicker !mb-0">
+          {showExecutionChrome ? "EXÉCUTION CURSOR" : "RÉSULTATS ET PREUVES  /  D8"}
+        </p>
+        <h2 className="fig-inspector-title">
+          {showExecutionChrome ? "Interventions et observations" : "Bilans de réalisation"}
+        </h2>
         <p className="fig-travail-viewer-meta">
-          Inspection → confirmation D6 → une tentative → observations → D8. Lecture ≠ autorisation.
+          {showExecutionChrome
+            ? "Inspection → confirmation D6 → une tentative → observations. Lecture ≠ autorisation."
+            : "Neuf rubriques D8 dans quatre onglets Figma. Verdict ≠ avis Nora ≠ réception D6."}
         </p>
         {status ? (
           <p role="status" data-testid="realization-status">
@@ -281,44 +285,46 @@ export function CursorRealizationSurface(props: {
         ) : null}
       </header>

-      <section data-testid="realization-contracts">
-        <h3>Contrats techniques</h3>
-        {contracts.length === 0 ? (
-          <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
-        ) : (
-          <ul>
-            {contracts.map((c) => (
-              <li key={c.id}>
-                <button
-                  type="button"
-                  className="btn secondary"
-                  data-testid={`contract-select-${c.id}`}
-                  disabled={busy}
-                  onClick={() => {
-                    setSelectedContract(c);
-                    setInstructionExpanded(false);
-                  }}
-                >
-                  {c.body.title} · {c.status} · v{c.version}
-                </button>
-                {c.status === "READY" ? (
+      {showExecutionChrome ? (
+        <section data-testid="realization-contracts">
+          <h3>Contrats techniques</h3>
+          {contracts.length === 0 ? (
+            <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
+          ) : (
+            <ul>
+              {contracts.map((c) => (
+                <li key={c.id}>
                   <button
                     type="button"
-                    className="btn"
-                    data-testid={`contract-prepare-${c.id}`}
+                    className="btn secondary"
+                    data-testid={`contract-select-${c.id}`}
                     disabled={busy}
-                    onClick={() => void prepareFromContract(c)}
+                    onClick={() => {
+                      setSelectedContract(c);
+                      setInstructionExpanded(false);
+                    }}
                   >
-                    Préparer exécution
+                    {c.body.title} · {c.status} · v{c.version}
                   </button>
-                ) : null}
-              </li>
-            ))}
-          </ul>
-        )}
-      </section>
+                  {c.status === "READY" ? (
+                    <button
+                      type="button"
+                      className="btn"
+                      data-testid={`contract-prepare-${c.id}`}
+                      disabled={busy}
+                      onClick={() => void prepareFromContract(c)}
+                    >
+                      Préparer exécution
+                    </button>
+                  ) : null}
+                </li>
+              ))}
+            </ul>
+          )}
+        </section>
+      ) : null}

-      {viewerModel ? (
+      {showExecutionChrome && viewerModel ? (
         <ContractViewer
           contract={viewerModel}
           instructionExpanded={instructionExpanded}
@@ -368,7 +374,7 @@ export function CursorRealizationSurface(props: {
       ) : null}

       <section data-testid="realization-attempts">
-        <h3>Tentatives</h3>
+        <h3>{showExecutionChrome ? "Historique des interventions" : "Tentatives à bilanter"}</h3>
         {attempts.length === 0 ? (
           <p className="muted">Aucune tentative Cursor pour ce projet.</p>
         ) : (
@@ -378,16 +384,22 @@ export function CursorRealizationSurface(props: {
                 <span>
                   {a.status} · {a.live.terminalStatus ?? "—"} ·{" "}
                   {a.live.lastActivitySummary ?? "pas d'observation"}
+                  {a.status === "AMBIGUOUS" ? " · à réconcilier" : ""}
                 </span>
-                <button
-                  type="button"
-                  className="btn secondary"
-                  data-testid={`attempt-bilan-${a.attemptId}`}
-                  onClick={() => void openBilan(a)}
-                >
-                  Bilan D8
-                </button>
-                {a.status === "DISPATCHED" ? (
+                {showResultsChrome ||
+                a.status === "COMPLETED" ||
+                a.status === "FAILED" ||
+                a.status === "AMBIGUOUS" ? (
+                  <button
+                    type="button"
+                    className="btn secondary"
+                    data-testid={`attempt-bilan-${a.attemptId}`}
+                    onClick={() => void openBilan(a)}
+                  >
+                    Bilan D8
+                  </button>
+                ) : null}
+                {showExecutionChrome && a.status === "DISPATCHED" ? (
                   <button
                     type="button"
                     className="btn secondary"
@@ -403,17 +415,16 @@ export function CursorRealizationSurface(props: {
         )}
       </section>

-      {bilan && selectedAttempt ? (
+      {bilan && selectedAttempt && (showResultsChrome || mode === "execution") ? (
         <RealizationBilan
           attemptId={selectedAttempt.attemptId}
           verdict={bilan.verdict}
           rubrics={bilan.rubrics}
           limits={bilan.limits}
           noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
+          noraAnalysisKind={bilan.noraAnalysisKind}
           activeTab={bilanTab}
-          onTabChange={(tab) =>
-            setBilanTab(tab as "synthese" | "evaluation" | "verdict" | "sources")
-          }
+          onTabChange={setBilanTab}
           onDiscussWithNora={() =>
             props.onDiscussWithNora?.(
               `Reprendre à propos de la tentative ${selectedAttempt.attemptId} (verdict D8: ${bilan.verdict}).`,
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 6d8f8fb3..19903091 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -41,10 +41,15 @@ const HERO: Record<
     title: "Dépôts Git",
     sub: "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet.",
   },
+  execution: {
+    kicker: "ESPACE PROJET  /  EXÉCUTION",
+    title: "Exécution gouvernée",
+    sub: "Contrats, interventions, observations LIVE et instruction intégrale — sans revue Nora permanente.",
+  },
   publication: {
-    kicker: "ESPACE PROJET / DÉPÔTS GIT",
-    title: "Dépôts Git",
-    sub: "Parcourir un dépôt autorisé puis lire le fichier directement dans l’espace projet.",
+    kicker: "ESPACE PROJET  /  RÉSULTATS ET PREUVES",
+    title: "Résultats et preuves",
+    sub: "Bilans D8, livrables, Git et écarts — distincts de l’avis Nora et de la réception D6.",
   },
 };

diff --git a/projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx b/projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
index 15855cf3..c7f1b17d 100644
--- a/projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
@@ -2,16 +2,26 @@

 /**
  * ML5 — Bilan D8 (frames 12.08 / 12.11 / 12.12 / 12.13).
- * Four tabs covering nine rubrics. Verdict D8 ≠ avis Nora ≠ décision D6.
+ * Four Figma tabs: Synthèse / Livrables et tests / Git et pièces / Écarts.
+ * Cover nine rubrics. Verdict D8 ≠ avis Nora ≠ décision D6.
  */

 import type { D8Rubric } from "@/domains/proofs/cursor-qualify";

-const TAB_RUBRICS: Record<string, Array<D8Rubric["key"]>> = {
-  synthese: ["resume", "prevu", "realise"],
-  evaluation: ["evaluation", "ecarts", "impact"],
-  verdict: ["verdict", "recommandations"],
-  sources: ["sources"],
+export const BILAN_TAB_LABELS = {
+  synthese: "Synthèse",
+  livrables: "Livrables et tests",
+  git: "Git et pièces",
+  ecarts: "Écarts",
+} as const;
+
+export type BilanTab = keyof typeof BILAN_TAB_LABELS;
+
+const TAB_RUBRICS: Record<BilanTab, Array<D8Rubric["key"]>> = {
+  synthese: ["resume", "prevu", "realise", "verdict", "recommandations"],
+  livrables: ["evaluation"],
+  git: ["sources", "impact"],
+  ecarts: ["ecarts"],
 };

 export function RealizationBilan(props: {
@@ -20,8 +30,9 @@ export function RealizationBilan(props: {
   rubrics: D8Rubric[];
   limits: string[];
   noraAnalysisMarkdown?: string | null;
-  activeTab: keyof typeof TAB_RUBRICS;
-  onTabChange: (tab: keyof typeof TAB_RUBRICS) => void;
+  noraAnalysisKind?: string | null;
+  activeTab: BilanTab;
+  onTabChange: (tab: BilanTab) => void;
   onDiscussWithNora?: () => void;
 }) {
   const byKey = new Map(props.rubrics.map((r) => [r.key, r]));
@@ -32,6 +43,7 @@ export function RealizationBilan(props: {
       data-testid="realization-bilan"
       data-attempt-id={props.attemptId}
       data-verdict={props.verdict}
+      data-active-tab={props.activeTab}
     >
       <header>
         <p className="fig-kicker !mb-0">RÉSULTATS ET PREUVES  /  D8</p>
@@ -41,7 +53,7 @@ export function RealizationBilan(props: {
         </p>
       </header>
       <nav data-testid="bilan-tabs" className="fig-bilan-tabs">
-        {(Object.keys(TAB_RUBRICS) as Array<keyof typeof TAB_RUBRICS>).map((tab) => (
+        {(Object.keys(BILAN_TAB_LABELS) as BilanTab[]).map((tab) => (
           <button
             key={tab}
             type="button"
@@ -49,7 +61,7 @@ export function RealizationBilan(props: {
             data-testid={`bilan-tab-${tab}`}
             onClick={() => props.onTabChange(tab)}
           >
-            {tab}
+            {BILAN_TAB_LABELS[tab]}
           </button>
         ))}
       </nav>
@@ -79,8 +91,12 @@ export function RealizationBilan(props: {
         </section>
       ) : null}
       {props.noraAnalysisMarkdown ? (
-        <section data-testid="bilan-nora-analysis">
-          <h3>Analyse Nora (post-tentative)</h3>
+        <section data-testid="bilan-nora-analysis" data-kind={props.noraAnalysisKind ?? "unknown"}>
+          <h3>
+            {props.noraAnalysisKind === "NORA_COGNITIVE"
+              ? "Analyse Nora (post-tentative)"
+              : "Brief technique (≠ avis Nora)"}
+          </h3>
           <pre>{props.noraAnalysisMarkdown}</pre>
         </section>
       ) : null}
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index 5d0c406a..282aafab 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -351,6 +351,20 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                   </span>
                   <span>Sources Git</span>
                 </Link>
+                <Link
+                  href={`/projects/${projectId}?surface=execution`}
+                  className={`studio-rail-direct-link ${
+                    surface === "execution" ? "is-active" : ""
+                  }`}
+                  data-testid="nav-execution"
+                  onClick={() => noteProjectSurfaceNavIntent(projectId, "execution")}
+                  title="Exécution Cursor gouvernée — interventions, LIVE, instruction"
+                >
+                  <span aria-hidden className="studio-rail-nav-glyph">
+                    ▷
+                  </span>
+                  <span>Exécution</span>
+                </Link>
                 <Link
                   href={`/projects/${projectId}?surface=publication`}
                   className={`studio-rail-direct-link ${
@@ -358,7 +372,7 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                   }`}
                   data-testid="nav-resultats"
                   onClick={() => noteProjectSurfaceNavIntent(projectId, "publication")}
-                  title="Publication Git existante (préparation / autorisation / dispatch) — libellé Figma provisoire"
+                  title="Résultats et preuves D8 — Synthèse / Livrables / Git / Écarts"
                 >
                   <span aria-hidden className="studio-rail-nav-glyph">
                     ▦
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index bb73fa7d..ae123cd5 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -17,6 +17,7 @@ export type StudioSurface =
   | "journal"
   | "document"
   | "git"
+  | "execution"
   | "publication";

 export type StudioRailTokens = {
@@ -93,6 +94,7 @@ export const PROJECT_SURFACES: StudioSurface[] = [
   "journal",
   "document",
   "git",
+  "execution",
   "publication",
 ];

@@ -104,6 +106,7 @@ export const PROJECT_SURFACE_LABELS: Record<StudioSurface, string> = {
   journal: "Journal",
   document: "Documents Nora",
   git: "Sources Git",
+  execution: "Exécution",
   publication: "Résultats et preuves",
 };

@@ -229,7 +232,14 @@ export function resolveRailVariant(input: {
   }
   if (path.startsWith("/projects/")) {
     const surface = parseStudioSurface(input.surface) ?? "travail";
-    if (surface === "document" || surface === "git" || surface === "publication") return "inspection";
+    if (
+      surface === "document" ||
+      surface === "git" ||
+      surface === "execution" ||
+      surface === "publication"
+    ) {
+      return "inspection";
+    }
     if (surface === "travail") return "conversation";
     if (surface === "journal") return "personnel";
     // projet overview + pilotage/trajectoire share the product rail fill
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index e2ada8bb..49c5cd42 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1144,6 +1144,43 @@ export async function postUserMessageAndNora(
       } catch {
         /* activity observational */
       }
+      // CA-01 — bridge investigation → DRAFT technical contract when intent + project exist.
+      // Never READY here; never a second preparation engine.
+      if (ctx.project?.id) {
+        try {
+          const { bridgeNoraTurnToContractPreparation, detectsTechnicalContractIntent } =
+            await import("./nora-contract-bridge");
+          if (detectsTechnicalContractIntent(content)) {
+            // toolCallsObserved is a count — mark HISTORY/OTHER only when tools actually ran.
+            const observedSources =
+              typeof reply.toolCallsObserved === "number" && reply.toolCallsObserved > 0
+                ? [
+                    {
+                      kind: "HISTORY" as const,
+                      ref: `turn:${reserved.commandId}:tools`,
+                      coverage: "CONSULTED" as const,
+                      notes: `${reply.toolCallsObserved} outil(s) observé(s)`,
+                    },
+                  ]
+                : [];
+            await bridgeNoraTurnToContractPreparation({
+              pilotId,
+              projectId: ctx.project.id,
+              preparationId,
+              conversationId: reserved.conversationId,
+              turnCommandId: reserved.commandId,
+              ownerToken: reserved.ownerToken,
+              userText: content,
+              assistantText: reply.content,
+              observedSources,
+              attemptPrepare: observedSources.length > 0,
+              sourceTurnCommandId: reserved.commandId,
+            });
+          }
+        } catch {
+          /* bridge observational / qualification — turn continues */
+        }
+      }
     } finally {
       clearInterval(leasePulse);
     }
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
index 638f719f..8e3a14e2 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
@@ -377,6 +377,16 @@ export async function dispatchCursorExecution(input: {
   }

   const fromStatus = row.status as "AUTHORIZED" | "AMBIGUOUS";
+  if (fromStatus === "AMBIGUOUS") {
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (priorSendMayHaveOccurred(row.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "AMBIGUOUS avec envoi antérieur possible — pas de redispatch ; réconcilier ou conserver UNKNOWN",
+        { exposeMessage: true },
+      );
+    }
+  }
   const claimed = await claimCursorAttempt(row.id, fromStatus);
   if (!claimed) {
     const again = (
@@ -387,6 +397,14 @@ export async function dispatchCursorExecution(input: {
         exposeMessage: true,
       });
     }
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (fromStatus === "AMBIGUOUS" && priorSendMayHaveOccurred(again?.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "Claim refusé — effet externe possible après ACK perdu ; pas de second envoi",
+        { exposeMessage: true },
+      );
+    }
     throw new StudioError("CONFLICT", "Claim atomique échoué — pas de dispatch", {
       exposeMessage: true,
     });
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
index 65a77c92..968d6218 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
@@ -28,9 +28,37 @@ export function sqlCursorClaimTokenEquals(claimToken: string) {
   return sql`${effectAttempts.resultJson}::jsonb->'claim'->>'claimToken' = ${claimToken}`;
 }

+/**
+ * Evidence that an external send may already have occurred.
+ * Claim expiry alone never proves absence of effect (CF-03 / T-04).
+ */
+export function priorSendMayHaveOccurred(resultJson: string | null | undefined): boolean {
+  try {
+    const live = JSON.parse(resultJson || "{}") as {
+      sendRequestedAt?: string | null;
+      ackReceivedAt?: string | null;
+      runObservedAt?: string | null;
+      agentId?: string | null;
+      runId?: string | null;
+    };
+    return Boolean(
+      live.sendRequestedAt ||
+        live.ackReceivedAt ||
+        live.runObservedAt ||
+        live.agentId ||
+        live.runId,
+    );
+  } catch {
+    return false;
+  }
+}
+
 /**
  * AUTHORIZED|AMBIGUOUS → DISPATCHED with claim minted in the same SQL predicate.
  * Concurrent callers: at most one wins (0 rows for the loser).
+ *
+ * AMBIGUOUS reclaim is refused when a prior send may have produced an effect —
+ * expired lease ≠ proof of no side effect. Caller must reconcile / keep UNKNOWN.
  */
 export async function claimCursorAttempt(
   attemptId: string,
@@ -43,8 +71,10 @@ export async function claimCursorAttempt(
   if (!row || row.status !== fromStatus) return null;
   if (row.kind !== "CURSOR_EXECUTION") return null;
   const prev = readClaim(row.resultJson);
-  if (fromStatus === "AMBIGUOUS" && isClaimActive(prev, now.getTime())) {
-    return null;
+  if (fromStatus === "AMBIGUOUS") {
+    if (isClaimActive(prev, now.getTime())) return null;
+    // CF-03: never blind-redispatch after a possible external send.
+    if (priorSendMayHaveOccurred(row.resultJson)) return null;
   }
   const claim = mintClaim(prev, now);
   const nextJson = writeClaimInto(row.resultJson || "{}", claim);
@@ -55,6 +85,14 @@ export async function claimCursorAttempt(
           eq(effectAttempts.status, fromStatus),
           eq(effectAttempts.kind, "CURSOR_EXECUTION"),
           sqlClaimInactive(),
+          // SQL fence: refuse if any send/run identity already recorded.
+          sql`(
+            NULLIF(${effectAttempts.resultJson}::jsonb->>'sendRequestedAt', '') IS NULL
+            AND NULLIF(${effectAttempts.resultJson}::jsonb->>'ackReceivedAt', '') IS NULL
+            AND NULLIF(${effectAttempts.resultJson}::jsonb->>'runObservedAt', '') IS NULL
+            AND NULLIF(${effectAttempts.resultJson}::jsonb->>'agentId', '') IS NULL
+            AND NULLIF(${effectAttempts.resultJson}::jsonb->>'runId', '') IS NULL
+          )`,
         )
       : and(
           eq(effectAttempts.id, attemptId),
diff --git a/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts b/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
index e78e569e..ed7f55fd 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
@@ -307,6 +307,7 @@ function rowToContract(row: typeof technicalContracts.$inferSelect) {
     fingerprint: row.fingerprint,
     instructionFingerprint: instructionFingerprint(row.instructionText),
     status: row.status,
+    preparationId: row.preparationId,
     body,
     readiness,
     createdAt: row.createdAt.toISOString(),
diff --git a/projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts b/projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
index 8354e8b2..9a263a22 100644
--- a/projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
@@ -23,19 +23,26 @@ export type D8Rubric = {

 export type CursorQualificationInput = {
   contractFingerprint: string;
+  /** Acceptance criteria from the technical contract (server-side). */
+  acceptanceCriteria?: string[];
+  expectedProofs?: string[];
   handoffStatus: string | null;
   reportMarkdown: string | null;
   manifest: {
     filesCreated?: string[];
     filesModified?: string[];
     filesDeleted?: string[];
+    filesMoved?: Array<{ from: string; to: string }>;
     testsDeclared?: string[];
     testsExecuted?: string[];
     testsCaptured?: string[];
     sourcesConsulted?: string[];
     gaps?: string[];
+    git?: { branch?: string | null; baseSha?: string | null; tipSha?: string | null };
   } | null;
   gitFacts?: Array<{ path: string; sha?: string | null }>;
+  /** Independent Git facts from D9 when available — null = not checked. */
+  gitFactsVerified?: boolean | null;
   terminalStatus?: string | null;
 };

@@ -84,15 +91,44 @@ export function qualifyCursorRealization(
   const testsExecuted = manifest.testsExecuted?.length ?? 0;
   const testsCaptured = manifest.testsCaptured?.length ?? 0;

+  const criteria = input.acceptanceCriteria ?? [];
+  const expectedProofs = input.expectedProofs ?? [];
+  const moved = manifest.filesMoved?.length ?? 0;
+  const inventoryAll = inventory + moved;
+
   if (!hasReport || !handoffOk) {
     limits.push("Rapport absent ou handoff non RECEIVED — bilan PARTIAL/UNKNOWN");
   }
   if (testsDeclared > testsCaptured) {
-    limits.push("Tests déclarés sans preuve capturée — PASS refusé");
+    limits.push("Tests déclarés sans preuve capturée — PASS refusé (T-07 / PF-PRV)");
+  }
+  if (testsExecuted > testsCaptured) {
+    limits.push("Tests exécutés déclarés sans sortie capturée — non certifiables");
   }
-  if (inventory === 0 && hasReport) {
+  if (inventoryAll === 0 && hasReport) {
     limits.push("Inventaire fichiers vide — synthèse seule insuffisante");
   }
+  if (criteria.length > 0 && hasReport) {
+    const unmet = criteria.filter(
+      (c) => !report.toLowerCase().includes(c.slice(0, 24).toLowerCase()),
+    );
+    if (unmet.length > 0) {
+      limits.push(`Critères d'acceptation non confrontés dans le rapport: ${unmet.length}`);
+    }
+  }
+  if (expectedProofs.length > 0 && (manifest.sourcesConsulted?.length ?? 0) === 0) {
+    limits.push("Preuves attendues du contrat sans sources consultées listées");
+  }
+  if (input.gitFactsVerified === false) {
+    limits.push("Faits Git D9 contradictoires ou non vérifiés — D8 refuse conformité");
+  }
+  if (manifest.git?.tipSha && input.gitFacts?.length) {
+    const tip = manifest.git.tipSha;
+    const match = input.gitFacts.some((f) => f.sha && f.sha === tip);
+    if (!match) {
+      limits.push("tipSha manifeste ≠ faits Git D9 — contradiction (T-08)");
+    }
+  }

   const rubrics: D8Rubric[] = [
     {
@@ -104,20 +140,26 @@ export function qualifyCursorRealization(
     {
       key: "prevu",
       title: RUBRIC_TITLES.prevu,
-      content: `Contrat fingerprint ${input.contractFingerprint}`,
-      coverage: input.contractFingerprint ? "COMPLETE" : "MISSING",
+      content: [
+        `Contrat fingerprint ${input.contractFingerprint}`,
+        criteria.length ? `Critères: ${criteria.join(" · ")}` : "Critères absents",
+        expectedProofs.length
+          ? `Preuves attendues: ${expectedProofs.join(" · ")}`
+          : "Preuves attendues non listées",
+      ].join("\n"),
+      coverage: input.contractFingerprint && criteria.length > 0 ? "COMPLETE" : "PARTIAL",
     },
     {
       key: "realise",
       title: RUBRIC_TITLES.realise,
-      content: `Inventaire: +${manifest.filesCreated?.length ?? 0} ~${manifest.filesModified?.length ?? 0} -${manifest.filesDeleted?.length ?? 0}`,
-      coverage: inventory > 0 ? "PARTIAL" : hasReport ? "PARTIAL" : "MISSING",
+      content: `Inventaire: +${manifest.filesCreated?.length ?? 0} ~${manifest.filesModified?.length ?? 0} -${manifest.filesDeleted?.length ?? 0} ↔${moved}`,
+      coverage: inventoryAll > 0 ? "PARTIAL" : hasReport ? "PARTIAL" : "MISSING",
     },
     {
       key: "evaluation",
       title: RUBRIC_TITLES.evaluation,
-      content: `Tests déclarés=${testsDeclared} exécutés=${testsExecuted} capturés=${testsCaptured}`,
-      coverage: testsCaptured > 0 ? "PARTIAL" : "MISSING",
+      content: `Tests déclarés=${testsDeclared} exécutés=${testsExecuted} capturés=${testsCaptured} — PASS certifié=non`,
+      coverage: testsCaptured > 0 && testsCaptured >= testsDeclared ? "PARTIAL" : "MISSING",
     },
     {
       key: "ecarts",
@@ -128,19 +170,27 @@ export function qualifyCursorRealization(
     {
       key: "impact",
       title: RUBRIC_TITLES.impact,
-      content: `Terminal SDK: ${input.terminalStatus ?? "unknown"}`,
+      content: [
+        `Terminal SDK: ${input.terminalStatus ?? "unknown"}`,
+        manifest.git?.tipSha ? `Git tip déclaré: ${manifest.git.tipSha}` : "Git tip absent",
+        input.gitFactsVerified == null
+          ? "D9 non consulté"
+          : input.gitFactsVerified
+            ? "D9 aligné"
+            : "D9 divergent",
+      ].join("\n"),
       coverage: input.terminalStatus ? "PARTIAL" : "UNKNOWN",
     },
     {
       key: "verdict",
       title: RUBRIC_TITLES.verdict,
-      content: "Voir verdict agrégé — jamais ADOPTED",
+      content: "Verdict agrégé ci-dessous — jamais ADOPTED ni réception D6",
       coverage: "PARTIAL",
     },
     {
       key: "recommandations",
       title: RUBRIC_TITLES.recommandations,
-      content: "Suite éventuelle = nouveau contrat + acte D6",
+      content: "Suite éventuelle = nouveau contrat + acte D6 (pas de relance aveugle)",
       coverage: "COMPLETE",
     },
     {
@@ -153,9 +203,13 @@ export function qualifyCursorRealization(

   let verdict: CursorQualificationResult["verdict"] = "INDETERMINATE";
   if (!hasReport || !handoffOk) verdict = "INDETERMINATE";
-  else if (testsDeclared > testsCaptured || (manifest.gaps?.length ?? 0) > 0) {
+  else if (
+    testsDeclared > testsCaptured ||
+    (manifest.gaps?.length ?? 0) > 0 ||
+    input.gitFactsVerified === false
+  ) {
     verdict = "PARTIAL";
-  } else if (inventory > 0 && testsCaptured >= testsDeclared) {
+  } else if (inventoryAll > 0 && testsCaptured >= testsDeclared) {
     // Still not CONFORMING without independent proof — stay PARTIAL.
     verdict = "PARTIAL";
     limits.push("Conformité forte non prouvée sans preuves indépendantes D9/tests");
@@ -197,5 +251,62 @@ export type NoraAnalysisKind = "TECHNICAL_BRIEF" | "NORA_COGNITIVE" | "UNAVAILAB
 export function classifyAttachedNoraPayload(markdown: string | null | undefined): NoraAnalysisKind {
   if (!markdown?.trim()) return "UNAVAILABLE";
   if (markdown.includes("BRIEF TECHNIQUE DÉTERMINISTE")) return "TECHNICAL_BRIEF";
+  if (markdown.includes("ANALYSE COGNITIVE NORA")) return "NORA_COGNITIVE";
   return "NORA_COGNITIVE";
 }
+
+/**
+ * CA-08 — one consultative Nora analysis after reconciled attempt.
+ * Sourced from accessible dossier only; never fabricates conformity.
+ * Distinct from technical brief, D8 verdict, and D6 decision.
+ * LIVE Nora run remains a higher proof level when executed separately.
+ */
+export function buildNoraCognitiveAnalysis(input: {
+  qualification: CursorQualificationResult;
+  contractTitle?: string | null;
+  attemptId: string;
+  sourcesAccessible?: string[];
+  dossierIncomplete?: boolean;
+}): string {
+  const q = input.qualification;
+  const sources =
+    input.sourcesAccessible?.length
+      ? input.sourcesAccessible
+      : q.rubrics.find((r) => r.key === "sources")?.content
+        ? [q.rubrics.find((r) => r.key === "sources")!.content]
+        : [];
+  const incomplete =
+    input.dossierIncomplete ||
+    q.verdict === "INDETERMINATE" ||
+    q.limits.some((l) => /absent|manqu|incomplet|contradict/i.test(l));
+
+  const lines = [
+    "[ANALYSE COGNITIVE NORA — consultative, post-tentative]",
+    `Tentative: ${input.attemptId}`,
+    input.contractTitle ? `Contrat: ${input.contractTitle}` : null,
+    `Verdict D8 déjà établi: ${q.verdict} (cette analyse ne le remplace pas).`,
+    "",
+    "## Lecture du dossier accessible",
+    ...q.rubrics
+      .filter((r) => r.coverage !== "MISSING")
+      .map((r) => `- ${r.title} [${r.coverage}]: ${r.content.slice(0, 240)}`),
+    "",
+    "## Sources prises en compte",
+    ...(sources.length ? sources.map((s) => `- ${s}`) : ["- Aucune source listée dans le dossier"]),
+    "",
+    "## Réserves",
+    ...q.limits.map((l) => `- ${l}`),
+    incomplete
+      ? "- Dossier incomplet ou contradictoire — Nora ne fabrique pas une conformité."
+      : "- Dossier partiellement lisible — conformité forte non affirmée.",
+    "",
+    "## Avis consultatif",
+    incomplete
+      ? "Je recommande de ne pas recevoir ce travail comme conforme tant que les preuves manquantes ou contradictoires ne sont pas réconciliées. Une suite éventuelle exige un nouveau contrat et un acte D6."
+      : "Le dossier accessible montre un avancement, mais la réception reste une décision Pilote (D6), distincte de ce bilan et de cet avis.",
+    "",
+    "Distinctions: analyse Nora ≠ brief technique ≠ qualification D8 ≠ HumanDecision D6.",
+    "Aucun ADOPTED. Aucun envoi automatique de message.",
+  ];
+  return lines.filter((l) => l != null).join("\n");
+}
diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
index a7772866..859b2d4a 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
@@ -303,4 +303,74 @@ describe("PostgreSQL ML5 Cursor dispatch concurrency (SCRIPTED)", () => {
     )[0]!;
     expect(after.status).toBe(before.status);
   });
+
+  it("CF-03/T-04: first send → ACK lost → claim expired → no AMBIGUOUS redispatch", async () => {
+    const { pilotId, projectId } = await seed();
+    const c = await createTechnicalContract({
+      pilotId,
+      projectId,
+      contractKey: "c-ack-lost",
+      body: sampleBody(),
+      markReady: true,
+    });
+    const prep = await prepareCursorExecution({
+      pilotId,
+      projectId,
+      contractId: c.contractId,
+      correlationKey: newId("corr"),
+      workspaceKey: "default",
+    });
+    await authorizeCursorExecution({
+      pilotId,
+      projectId,
+      attemptId: prep.attemptId,
+      statement: "mandate",
+      inspectedFingerprint: c.fingerprint,
+      confirmed: true,
+    });
+
+    // Simulate: claim won, send occurred, ACK lost, lease expired, status AMBIGUOUS.
+    const claimed = await claimCursorAttempt(prep.attemptId, "AUTHORIZED");
+    expect(claimed).toBeTruthy();
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
+    )[0]!;
+    const live = JSON.parse(row.resultJson || "{}") as Record<string, unknown>;
+    const expiredClaim = {
+      ...(live.claim as object),
+      leaseExpiresAt: new Date(Date.now() - 60_000).toISOString(),
+      releasedAt: null,
+    };
+    const ambiguousJson = JSON.stringify({
+      ...live,
+      claim: expiredClaim,
+      sendRequestedAt: new Date().toISOString(),
+      agentId: "agent-sim-1",
+      runId: "run-sim-1",
+      // ackReceivedAt intentionally absent — ACK lost
+    });
+    await db
+      .update(effectAttempts)
+      .set({ status: "AMBIGUOUS", resultJson: ambiguousJson, updatedAt: new Date() })
+      .where(eq(effectAttempts.id, prep.attemptId));
+
+    // Reclaim must refuse — prior send may have produced an effect.
+    const reclaim = await claimCursorAttempt(prep.attemptId, "AMBIGUOUS");
+    expect(reclaim).toBeNull();
+
+    await expect(
+      dispatchCursorExecution({ pilotId, projectId, attemptId: prep.attemptId }),
+    ).rejects.toBeInstanceOf(StudioError);
+
+    const after = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prep.attemptId)).limit(1)
+    )[0]!;
+    expect(after.status).toBe("AMBIGUOUS");
+    const afterLive = JSON.parse(after.resultJson || "{}") as {
+      sendRequestedAt?: string;
+      agentId?: string;
+    };
+    expect(afterLive.sendRequestedAt).toBeTruthy();
+    expect(afterLive.agentId).toBe("agent-sim-1");
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
index b0a03ed3..d1f72ad0 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
@@ -40,4 +40,27 @@ describe("ML5 G — D8 cursor qualification", () => {
     expect(brief).toMatch(/BRIEF TECHNIQUE DÉTERMINISTE/);
     expect(brief).toMatch(/pas une HumanDecision/);
   });
+
+  it("confronts acceptance criteria and git tip mismatch", () => {
+    const q = qualifyCursorRealization({
+      contractFingerprint: "abc",
+      acceptanceCriteria: ["critere-alpha-unique"],
+      expectedProofs: ["capture"],
+      handoffStatus: "RECEIVED",
+      reportMarkdown: "# Rapport sans le critère",
+      manifest: {
+        filesCreated: ["a.ts"],
+        testsDeclared: [],
+        testsCaptured: [],
+        git: { tipSha: "aaa" },
+        sourcesConsulted: [],
+      },
+      gitFacts: [{ path: "a.ts", sha: "bbb" }],
+      gitFactsVerified: false,
+    });
+    expect(q.verdict).toBe("PARTIAL");
+    expect(q.limits.some((l) => /Critères d'acceptation/.test(l))).toBe(true);
+    expect(q.limits.some((l) => /D9/.test(l))).toBe(true);
+    expect(q.limits.some((l) => /tipSha/.test(l))).toBe(true);
+  });
 });
```

## 10. Git Review Index

| Item | Valeur |
|---|---|
| Base ML5 | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
| HEAD local figé (entrée) | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| Worktree | **DIRTY** — modifications cycle 3 non commitées (mandat : pas de push projet) |
| Diff vs HEAD | voir §9 ; + créations §8 |
| Branche distante projet | **absente** (non publiée) |
| Isolation | DEV PG `:5433` / `sfia_next_dev` ; user env `sfia_next_e2e` pointe aussi DEV db |

```
 .../construction/delivery-history.md               |  18 +++
 .../ml5-as-built-cursor-realization.md             |  83 +++++------
 ...5-registre-couverture-et-revue-developpement.md |  73 +++++++---
 .../attempts/[attemptId]/handoff/route.ts          |  31 +++--
 .../attempts/[attemptId]/qualification/route.ts    |  65 +++++++--
 .../contracts/[contractId]/ready/route.ts          |  18 ++-
 .../[projectId]/realization/contracts/route.ts     |  31 ++++-
 .../web/src/app/projects/[projectId]/page.tsx      |  31 +++--
 .../components/figma/CursorRealizationSurface.tsx  | 155 +++++++++++----------
 .../web/src/components/figma/ProjectChrome.tsx     |  11 +-
 .../web/src/components/figma/RealizationBilan.tsx  |  40 ++++--
 .../web/src/components/shell/StudioShell.tsx       |  16 ++-
 .../web/src/components/shell/studio-rail.ts        |  12 +-
 .../web/src/domains/conversation/service.ts        |  37 +++++
 .../domains/execution/cursor-attempt-service.ts    |  18 +++
 .../web/src/domains/execution/cursor-claim.ts      |  42 +++++-
 .../src/domains/execution/technical-contract.ts    |   1 +
 .../web/src/domains/proofs/cursor-qualify.ts       | 137 ++++++++++++++++--
 .../integration/ml5-cursor-dispatch.pg.test.ts     |  70 ++++++++++
 .../web/tests/unit/ml5-cursor-qualify.test.ts      |  23 +++
 20 files changed, 706 insertions(+), 206 deletions(-)
```

---

## 11. Tests exécutés

### DETERMINISTIC (Vitest unit)

Commande :
`npx vitest run tests/unit/ml5-cursor-claim-anti-duplicat.test.ts tests/unit/ml5-nora-contract-bridge.test.ts tests/unit/ml5-cursor-qualify.test.ts tests/unit/ml5-contract-readiness.test.ts tests/unit/ml5-technical-contract.test.ts tests/unit/ml5-workspace-resolver.test.ts tests/unit/ml5-cursor-attempt-invariants.test.ts`

Résultat : **7 files / 25 tests PASS**.

### INTEGRATION PostgreSQL (DEV)

Commande : `npx vitest run tests/integration/ml5-cursor-dispatch.pg.test.ts`
`DATABASE_URL` → `sfia_next_dev` :5433 ; `SFIA_CURSOR_EFFECT_MODE=SCRIPTED`

Résultat : **8 tests PASS** (incl. CF-03/T-04 ACK-lost).

### Typecheck

`npx tsc --noEmit` → **PASS**.

### Non exécutés / NOT PROVEN

| Niveau | Statut | Cause |
|---|---|---|
| BROWSER parcours intégré | NOT RUN | Dev server / fixture E2E non exercés ce cycle |
| FIGMA F2 | NOT PROVEN | Pas de capture runtime + comparaison ≤2 CSS px |
| LIVE Nora | NOT PROVEN | Analyse cognitive = composition dossier ; pas de run D3 LIVE |
| LIVE Cursor SDK | NOT PROVEN / hors mandat sans GO | SCRIPTED only |
| WEB LIVE | NOT PROVEN | B1 keep-safe |
| GitHub/MCP REAL | NOT PROVEN | Interdit |

---

## 12. Captures Figma / BROWSER

| Artefact | Statut |
|---|---|
| L0 inventaire page 12 (cycle 1) | Conservé — `ml5-figma-page12-l0-inventory.md` |
| L1 metadata 14 frames (cycle 2) | Conservé |
| PNG natif + SHA-256 nouveaux | **NON acquis** ce cycle |
| BROWSER screenshots | **NON acquis** |
| F2 rectangles | **NOT PROVEN** |

---

## 13. Fake / Real Qualification

| Capacité | Mode | Qualification |
|---|---|---|
| Dispatch Cursor | SCRIPTED fixture | DETERMINISTIC + PG — ≠ LIVE SDK |
| Anti-duplicat ACK-lost | PG simulation send+expire | INTEGRATION — ≠ LIVE |
| READY serveur | Investigation fixture/durable | DETERMINISTIC path — BROWSER ouvert |
| Nora prepare bridge | Intent + tool count | DETERMINISTIC/INTEGRATION partiel — ≠ LIVE multi-sources |
| Analyse Nora cognitive | Composition dossier | DETERMINISTIC consultative — ≠ LIVE Nora |
| Web B1 | Détaché | FAKE/disabled — isolation NOT PROVEN |
| Git Cursor | Non implémenté A/B | DOCUMENTED recommendation B |

---

## 14. Couverture A–I / Q / PF / T

### A–I (99)

États actualisés localement (registre) : plusieurs lignes passées NV→PARTIEL (A03, D01, H03–H06, I03…) ; CF-02/CF-03 **REMEDIATED DEV / PARTIEL**. **0 VÉRIFIÉ** au niveau acceptation global. Pas de promotion artificielle.

### Q-01…Q-56

Rapprochés via CA/T : Q liés READY/ACK/D8 partiellement adressés en DETERMINISTIC/PG ; Q BROWSER/LIVE restent ouverts. Index T-01…T-12 :

| T | Statut cycle 3 |
|---|---|
| T-01 Nora→contrat | PARTIEL (bridge DRAFT) |
| T-02 READY serveur | PARTIEL (code+route) |
| T-03 D6 Oui/Non | PARTIEL (UI+API ; BROWSER ouvert) |
| T-04 ACK-lost | **PG PASS** |
| T-05 STOP | PARTIEL (API existante) |
| T-06 Supervision long-run | PARTIEL / LIVE ouvert |
| T-07 Faux PASS tests | PARTIEL (D8 refuse) |
| T-08 Git tip mismatch | PARTIEL (qualify unit) |
| T-09 Analyse Nora | PARTIEL (cognitive dossier) |
| T-10 Surfaces Figma | PARTIEL structure ; F2 ouvert |
| T-11 Web B1 | Keep-safe |
| T-12 Git A/B | Recommandation B ; non ADOPTED |

### PF propriétaires

`PF-REAL` / `PF-PRV` / `PF-GOV` : confrontés au code D7/D8 ; preuves BROWSER/LIVE/REAL manquantes.

---

## 15. Réserves / dettes / exit

1. F2 + BROWSER 14 frames — exit : captures + ≤2 CSS px.
2. LIVE Nora cognitif — exit : run D3 post-tentative sourcé.
3. LIVE SDK confiné — exit : GO Morris + identité/instruction exactes.
4. B1 isolation — exit : barrière au point de sortie + tests.
5. Git B ADOPTED — exit : arbitrage Morris.
6. Parcours E2E T-01…T-12 BROWSER — exit : fixture DEV servi.
7. e2e DB URL : `.env.local` user `sfia_next_e2e` sur db `sfia_next_dev` — noter pour ENV-01.

---

## 16. Arbitrages Morris nécessaires

1. **Git Cursor A vs B** — recommandation **B** ; non ADOPTED.
2. **GO LIVE SDK confiné** pour supervision durable réelle.
3. **GO WEB LIVE** si activation B1 après isolation prouvée.
4. Synchronisation Roadmap `main` Gate C (D2) — hors mandat code.
5. Tout pivot architecture publication / worker permanent.

---

## 17. Verdict

**`ML5 PARTIAL — GOVERNED GAPS`**

Progression réelle sur sécurité D7 (ACK-lost), READY serveur, pont Nora→DRAFT, surfaces Exécution/Résultats, D8/onglets Figma, analyse cognitive dossier. Preuves BROWSER/F2/LIVE/REAL absentes. Pas READY FOR RECETTE. Pas ADOPTED.

---

## 18. État publication Review Handoff

À compléter après `publish-review-handoff.sh` :

- Mode : `publish-in-cycle` L3 borné
- Branche exclusive : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Verdict attendu : `HANDOFF UPDATED — REMOTE VERIFIED` (ou RESUMED / ALREADY CURRENT)
