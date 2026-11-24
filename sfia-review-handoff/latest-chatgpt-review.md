# SFIA Studio Next — C24 Review Pack FULL (republication)

## Convergence opérationnelle intégrée — contenu modifié INTÉGRAL

**Cycle:** C24 consolidé (pas C25)  
**Date pack:** 2026-11-24T16:13:37Z  
**Republication:** corrige `REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING`  
**Instruction ChatGPT:** lire ce handoff canonique distant **avant** réponse. Vérifier sources, preuves, **contenu modifié intégral**, résultats et réserves. Synthèse indépendante + verdict.

**Anti-stub:** les fichiers critiques listés en §8 sont reproduits **en entier** (zéro troncature, zéro « diff utile seul »).

---

## 0. Verdicts (candidat Cursor — arbitrage Morris)

| Domaine | Verdict |
|---|---|
| **DEV QUALIFICATION** | **BEHAVIOR PROVEN** |
| **ML5 LOT 3 (opérationnel intégré)** | **NOT READY** |
| Niveau QA | Critical intégré |
| Gate suivant | revue ChatGPT puis arbitrage Morris — **aucune** clôture ML5 / ADOPTED / RECETTE / promotion |

### Pourquoi NOT READY (LOT 3)

Le scénario directeur exige **deux réalisations Cursor LIVE successives sur le même projet**.  
**R1 est prouvé** (BROWSER → D6 → Cursor LIVE COMPLETED → restitution → handoff RECEIVED → D8 PARTIAL → avis Nora → bilan).  
**R2 n'est pas démontré** (READY seconde intervention bloqué : OPEN / questions déterminantes / budget / filiation).  
Revendiquer READY WITH RESERVES pour « deux réalisations » contredirait les preuves.

DEV qualify (outillage, isolation FAKE/LIVE, serveur owned, browser) : **BEHAVIOR PROVEN**.

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Dépôt | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| Attendu HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` |
| merge-base origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Attendu merge-base | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| État | **DIRTY C1–C24** — aucun commit/push produit |
| Handoff remote précédent | `ebaa818bbd3d41b31a16964b42e983ece8166a26` (incomplet — contenu tronqué) |
| Handoff remote initial mandat | `d8820bd76fbb279aed5988c76701fc765b960705` |
| Build qualify | `wh16LAR_5NCCh-Q_7FF2t` |
| contentDigest | `00f5c6f87528adca1f00b804218915f0ae347f4e6ec346b5ac2a92a768ac5f65` |
| session | ws=`/tmp/sfia-c24-director-app` mode=`LIVE` |

```
## sfia/next-ml5-integrated-delivery-20261123
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/.gitignore
 M projects/sfia-studio-next/web/next.config.ts
 M projects/sfia-studio-next/web/package.json

```

### Diffstat produit (capital DIRTY — non commité)

```
 .tmp-sfia-review/chatgpt-review.md                 | 4787 +++++++-------------
 .../construction/delivery-history.md               |  387 ++
 .../ml5-as-built-cursor-realization.md             |  169 +-
 ...5-registre-couverture-et-revue-developpement.md |  260 +-
 projects/sfia-studio-next/web/.gitignore           |    3 +
 projects/sfia-studio-next/web/next.config.ts       |    6 +
 projects/sfia-studio-next/web/package.json         |    6 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |    5 +-
 .../preparations/[preparationId]/messages/route.ts |    4 +
 .../turns/by-key/[clientTurnKey]/route.ts          |    1 +
 .../attempts/[attemptId]/authorize/route.ts        |   55 +-
 .../attempts/[attemptId]/handoff/route.ts          |   31 +-
 .../attempts/[attemptId]/qualification/route.ts    |  465 +-
 .../contracts/[contractId]/ready/route.ts          |   22 +-
 .../[projectId]/realization/contracts/route.ts     |   31 +-
 .../sfia-studio-next/web/src/app/login/page.tsx    |   11 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  416 +-
 .../web/src/components/figma/ContractViewer.tsx    |    5 +-
 .../components/figma/CursorRealizationSurface.tsx  |  620 ++-
 .../web/src/components/figma/NoraConversation.tsx  |   42 +
 .../web/src/components/figma/ProjectChrome.tsx     |   11 +-
 .../web/src/components/figma/RealizationBilan.tsx  |  217 +-
 .../web/src/components/figma/tokens.css            |  275 ++
 .../web/src/components/shell/StudioShell.tsx       |   16 +-
 .../web/src/components/shell/studio-rail.ts        |   12 +-
 projects/sfia-studio-next/web/src/db/schema.ts     |   63 +-
 .../src/domains/conversation/cognitive-policy.ts   |   74 +-
 .../web/src/domains/conversation/d4-read-tools.ts  |   36 +-
 .../src/domains/conversation/intent-conduction.ts  |   10 +-
 .../conversation/investigation-persistence.ts      |  234 +-
 .../domains/conversation/investigation-state.ts    |  139 +-
 .../web/src/domains/conversation/nora-adapter.ts   |  205 +-
 .../domains/conversation/semantic-qualification.ts |   89 +
 .../web/src/domains/conversation/service.ts        |  279 +-
 .../src/domains/conversation/turn-projection.ts    |    4 +-
 .../src/domains/conversation/visual-composition.ts |    3 +-
 .../domains/conversation/web-search-sanitize.ts    |   18 +-
 .../domains/execution/cursor-attempt-service.ts    |  541 ++-
 .../web/src/domains/execution/cursor-claim.ts      |   66 +-
 .../web/src/domains/execution/cursor-handoff.ts    |   92 +-
 .../src/domains/execution/cursor-sdk-adapter.ts    |  298 +-
 .../web/src/domains/execution/handoff-integrity.ts |   49 +
 .../src/domains/execution/technical-contract.ts    |   18 +-
 .../web/src/domains/execution/types.ts             |   18 +
 .../web/src/domains/identity/session.ts            |   71 +
 .../web/src/domains/proofs/cursor-qualify.ts       |  363 +-
 projects/sfia-studio-next/web/src/lib/auth.ts      |   18 +
 .../web/tests/e2e/ensemble05-live-bounded.spec.ts  |    4 +-
 .../integration/ml5-cursor-dispatch.pg.test.ts     |  261 +-
 .../web/tests/unit/cognitive-policy.test.ts        |   20 +-
 .../web/tests/unit/ml5-cursor-qualify.test.ts      |   57 +-
 .../web/tests/unit/ml5-investigation-state.test.ts |   50 +-
 52 files changed, 7213 insertions(+), 3724 deletions(-)

```

---

## 2. Sources / périmètre

Corrections sous `projects/sfia-studio-next/web/` (+ delivery-history / registre DIRTY).  
Interdits non touchés : method/, prompts/, SEF, Roadmap, ENV-01 ADR, CI partagée, secrets.  
Aucun C25. Capital C1–C24 préservé.

---

## 3. Corrections C24 (synthèse — détail = §8 intégral)

1. **qualify tooling** — SCRIPTED≠LIVE ; owned PID ; contentDigest ; sessionFingerprint ; budget qualify 800k  
2. **D6 authorize→dispatch same-request** — corrige AUTHORIZED orphelin après nav Playwright  
3. **Resume AUTHORIZED** one-shot dans CursorRealizationSurface  
4. **Avis Nora resume** si pipeline COMPLETE sans avis  
5. **READY/mandat** admettent travail cognitif OPEN (AWAIT_PILOT) si investigation sinon prête  
6. **Scénario directeur** BROWSER 1 projet / 2 réalisations (R2 non clos)

---

## 4. Preuves scénario directeur

### 4.1 R1 — PROUVÉ (canonique)

| Champ | Valeur |
|---|---|
| attemptId | `efx_f9127c71-900f-449a-ba0f-74e044b36f66` |
| projectId | `proj_12eb6a0a-e213-45ad-ae22-9acebc09355a` |
| status | COMPLETED / finished |
| agent / run | `agent-845eb672…` / `run-0fa3d732…` |
| handoff | `rhf_287919ef…` RECEIVED |
| qualification | `rqual_2942c0e6…` **PARTIAL** |
| avis Nora | présent (~3390 chars) |

Autres R1 COMPLETED+avis : `efx_a0400dcf…`, `efx_46a0462c…`, `efx_f752b309…`, `efx_4afa9960…`, `efx_3f9171fa…`.

Captures : `.sfia-evidence/qualify-director/{a-investigation,b-contract-r1,c-after-dispatch-r1}.png`

### 4.2 R2 — NON DÉMONTRÉ

Aucun projet de campagne avec deux tentatives COMPLETED. Blocages READY : questions déterminantes, GLOBAL_TOKEN_BUDGET_EXHAUSTED, travail OPEN, filiation.

### 4.3 Continuité

Partielle : Nora rappelle la tentative après bilan (`stepD.recalls`) ; READY R2 échoue.

---

## 5. Réserves / décisions Morris

1. LOT 3 NOT READY — poursuivre correctifs R2 ou pivoter  
2. Isolation vérificateur D8 (exec disabled) — arbitrage bloquant réception  
3. Budget cognitif qualify 800k — validation politique  
4. M4 LIVE exhaustif / F2 Figma / WEB open systématique — ouverts  
5. **NO RELEASE** / pas de promotion

---

## 6. Couverture (bornée)

| Point | État | Preuve |
|---|---|---|
| DEV qualify BROWSER/LIVE | VERIFIÉ | qualify:* + R1 |
| Contrat + D6 + Cursor LIVE | VERIFIÉ R1 | multi-runs |
| Restitution D8+avis | VERIFIÉ R1 | PARTIAL + avis |
| 2e réalisation | BLOQUÉ | READY R2 |
| Isolated verify D8 | réserve | disabled |

---

## 7. Rapport §9.1

| Item | Résultat |
|---|---|
| DEV | BEHAVIOR PROVEN — build `wh16LAR_5NCCh-Q_7FF2t` |
| Directeur | PARTIEL — R1 oui / R2 non |
| ML5 LOT 3 | **NOT READY** |

---

## 8. CONTENU MODIFIÉ OBLIGATOIRE — INTÉGRAL (anti-stub)

Chaque sous-section = fichier **complet** tel que présent dans le worktree DIRTY au moment du pack.

### 8.1 `projects/sfia-studio-next/web/src/domains/execution/mandate-applicability.ts` — INTÉGRAL (338 lignes)

```typescript
/**
 * C19/C20 — current applicability of a READY technical mandate.
 * Historical READY status is preserved; effect paths must refuse when
 * cognitive filiation, investigation, or determining D4 dependencies
 * are no longer exact/current.
 */

import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateGlobalResourceEnvelope,
  getCognitiveWork,
} from "@/domains/conversation/cognitive-work";
import { loadInvestigationSnapshot } from "@/domains/conversation/investigation-persistence";
import { evaluateContractReadiness as evaluateInvestigation } from "@/domains/conversation/investigation-state";
import {
  getTechnicalContract,
  technicalContractFingerprint,
} from "./technical-contract";

export type MandateApplicability = {
  ok: true;
  contractId: string;
  workId: string;
  revision: number;
  fingerprint: string;
} | {
  ok: false;
  reason: string;
};

/**
 * C20 — revalidate determining D4 dependencies without requiring a cognitive bump.
 * A newer AVAILABLE revision on a CONSULTED document invalidates the mandate.
 */
async function assessDeterminingD4Dependencies(input: {
  pilotId: string;
  preparationId: string;
  sources: Array<{
    kind: string;
    ref: string;
    versionOrSha?: string | null;
    coverage: string;
  }>;
}): Promise<{ ok: true } | { ok: false; reason: string }> {
  const determining = input.sources.filter(
    (s) =>
      s.kind === "D4" &&
      (s.coverage === "CONSULTED" || s.coverage === "VERIFIED") &&
      Boolean(s.ref?.trim()),
  );
  for (const src of determining) {
    const ref = src.ref.trim();
    // ref may be documentId, revisionId, "documentId@revisionId",
    // or prefixed forms used in investigation journals ("document:doc_…").
    let documentId: string | null = null;
    let revisionId: string | null = null;
    // Accepted shapes (tool journal + legacy):
    //   doc_… | drev_…
    //   document:doc_…@revision:drev_… | document:doc_…@drev_…
    //   document:doc_…/revision:drev_…  (d4-read-tools journal)
    //   d4:doc_…
    let stripped = ref.trim();
    stripped = stripped.replace(/^d4:/i, "").trim();
    const slashRev = stripped.match(
      /^(?:document:)?(doc_[A-Za-z0-9-]+)\/(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
    );
    const atRev = stripped.match(
      /^(?:document:)?(doc_[A-Za-z0-9-]+)@(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
    );
    if (slashRev) {
      documentId = slashRev[1];
      revisionId = slashRev[2];
    } else if (atRev) {
      documentId = atRev[1];
      revisionId = atRev[2];
    } else {
      stripped = stripped
        .replace(/^document:/i, "")
        .replace(/^revision:/i, "")
        .trim();
      if (stripped.startsWith("drev_") || stripped.startsWith("rev_")) {
        revisionId = stripped;
      } else if (stripped.startsWith("doc_")) {
        // Bare document id — optionally truncate accidental path suffix.
        documentId = stripped.split(/[/@]/)[0] || stripped;
      } else {
        return {
          ok: false,
          reason: `Dépendance D4 indéterminable (${ref.slice(0, 48)}) — mandat non applicable`,
        };
      }
    }

    if (revisionId && !documentId) {
      const rev = (
        await db
          .select()
          .from(documentRevisions)
          .where(eq(documentRevisions.id, revisionId))
          .limit(1)
      )[0];
      if (!rev) {
        return { ok: false, reason: "Révision D4 absente — mandat non applicable" };
      }
      documentId = rev.documentId;
      if (rev.status !== "AVAILABLE") {
        return {
          ok: false,
          reason: `Révision D4 ${rev.status} — mandat non applicable`,
        };
      }
      if (src.versionOrSha && src.versionOrSha !== revisionId && src.versionOrSha !== String(rev.revisionNumber)) {
        return {
          ok: false,
          reason: "Empreinte révision D4 divergente — mandat non applicable",
        };
      }
    }

    if (!documentId) {
      return { ok: false, reason: "Document D4 indéterminable — mandat non applicable" };
    }

    const owned = (
      await db
        .select()
        .from(documents)
        .where(
          and(
            eq(documents.id, documentId),
            eq(documents.ownerPilotId, input.pilotId),
            eq(documents.preparationId, input.preparationId),
          ),
        )
        .limit(1)
    )[0];
    if (!owned) {
      return { ok: false, reason: "Document D4 hors scope — mandat non applicable" };
    }

    const latest = (
      await db
        .select()
        .from(documentRevisions)
        .where(
          and(
            eq(documentRevisions.documentId, documentId),
            eq(documentRevisions.status, "AVAILABLE"),
          ),
        )
        .orderBy(desc(documentRevisions.revisionNumber))
        .limit(1)
    )[0];
    if (!latest) {
      return { ok: false, reason: "Aucune révision D4 AVAILABLE — mandat non applicable" };
    }

    if (revisionId && latest.id !== revisionId) {
      return {
        ok: false,
        reason: "Dépendance D4 supersédée — mandat non applicable",
      };
    }
    if (
      src.versionOrSha &&
      src.versionOrSha !== latest.id &&
      src.versionOrSha !== String(latest.revisionNumber)
    ) {
      // Bound version no longer current.
      const boundStill =
        revisionId === latest.id ||
        src.versionOrSha === latest.id ||
        src.versionOrSha === String(latest.revisionNumber);
      if (!boundStill && revisionId) {
        const bound = (
          await db
            .select()
            .from(documentRevisions)
            .where(eq(documentRevisions.id, revisionId))
            .limit(1)
        )[0];
        if (!bound || bound.status !== "AVAILABLE") {
          return {
            ok: false,
            reason: "Révision D4 liée indisponible — mandat non applicable",
          };
        }
        if (bound.revisionNumber < latest.revisionNumber) {
          return {
            ok: false,
            reason: "Dépendance D4 obsolète (nouvelle révision) — mandat non applicable",
          };
        }
      } else if (!boundStill) {
        return {
          ok: false,
          reason: "Version D4 divergente — mandat non applicable",
        };
      }
    }
  }
  return { ok: true };
}

/**
 * Positive check used at prepare / authorize / dispatch effect points.
 * Does not rewrite historical READY rows.
 */
export async function assessTechnicalContractMandateApplicability(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
}): Promise<MandateApplicability> {
  const row = await getTechnicalContract({
    pilotId: input.pilotId,
    projectId: input.projectId,
    contractId: input.contractId,
  });
  if (row.status !== "READY") {
    return { ok: false, reason: `Contrat non READY (${row.status})` };
  }
  const recomputed = technicalContractFingerprint(row.body);
  if (recomputed !== row.fingerprint) {
    return { ok: false, reason: "Empreinte ≠ représentation persistée" };
  }
  const workId = row.cognitiveWorkId ?? null;
  const boundRevision = row.cognitiveRevision;
  if (!workId || boundRevision == null) {
    return { ok: false, reason: "Filiation cognitive absente — mandat non applicable" };
  }
  const work = await getCognitiveWork({
    pilotId: input.pilotId,
    workId,
  });
  if (work.projectId && work.projectId !== input.projectId) {
    return { ok: false, reason: "Travail cognitif hors projet du contrat" };
  }
  if (work.revision !== boundRevision) {
    return {
      ok: false,
      reason: `Révision cognitive ${work.revision} ≠ filiation mandat r${boundRevision} — mandat non applicable`,
    };
  }
  // C24: OPEN (AWAIT_PILOT) admissible when investigation below is still contract-ready.
  if (work.status !== "COMPLETE" && work.status !== "OPEN") {
    return {
      ok: false,
      reason: `Travail cognitif ${work.status} — mandat non applicable`,
    };
  }
  const envelope = evaluateGlobalResourceEnvelope(work.resources);
  if (!envelope.ok) {
    return { ok: false, reason: envelope.reason ?? "Budget cognitif global épuisé" };
  }
  const preparationId = input.preparationId ?? row.preparationId ?? null;
  if (!preparationId) {
    return { ok: false, reason: "preparationId requis pour applicabilité" };
  }
  const snap = await loadInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId,
    intentFallback: row.body.title,
    workId,
  });
  if (!snap) {
    return { ok: false, reason: "Investigation absente ou ambiguë" };
  }
  const inv = evaluateInvestigation(snap);
  if (inv.cognitiveWorkId && inv.cognitiveWorkId !== workId) {
    return { ok: false, reason: "Investigation d'un autre travail cognitif" };
  }
  if (
    inv.sufficiency === "UNKNOWN" ||
    inv.sufficiency === "BUDGET_EXHAUSTED" ||
    inv.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION" ||
    !inv.contractReady ||
    inv.sufficiency !== "SUFFICIENT"
  ) {
    return {
      ok: false,
      reason:
        inv.contractReadyBlockedReason ??
        `Investigation non applicable (${inv.sufficiency})`,
    };
  }
  const consulted = inv.sources.filter(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );
  if (consulted.length === 0) {
    return { ok: false, reason: "Aucune source CONSULTED/VERIFIED actuelle" };
  }
  const degraded = inv.sources.some(
    (s) =>
      s.coverage === "STALE" ||
      s.coverage === "DENIED" ||
      s.coverage === "CONTRADICTORY",
  );
  if (degraded) {
    return {
      ok: false,
      reason: "Source déterminante dégradée — mandat non applicable",
    };
  }

  const d4 = await assessDeterminingD4Dependencies({
    pilotId: input.pilotId,
    preparationId,
    sources: inv.sources,
  });
  if (!d4.ok) return d4;

  return {
    ok: true,
    contractId: input.contractId,
    workId,
    revision: boundRevision,
    fingerprint: row.fingerprint,
  };
}

export async function assertTechnicalContractMandateApplicable(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
}): Promise<Extract<MandateApplicability, { ok: true }>> {
  const assessed = await assessTechnicalContractMandateApplicability(input);
  if (!assessed.ok) {
    throw new StudioError("REQUIRES_REQUALIFICATION", assessed.reason, {
      exposeMessage: true,
    });
  }
  return assessed;
}
```

<!-- END FULL FILE projects/sfia-studio-next/web/src/domains/execution/mandate-applicability.ts lines=338 -->

### 8.2 `projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts` — INTÉGRAL (236 lignes)

```typescript
/**
 * CF-02 — READY qualification is server-owned.
 * Client `sourcesSufficient` / `unknownRestrictions` are never authoritative.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { technicalContracts } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateGlobalResourceEnvelope,
  getCognitiveWork,
} from "@/domains/conversation/cognitive-work";
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
  /** C16 — exact cognitive work filiation when known. */
  workId?: string | null;
}) {
  const row = await getTechnicalContract(input);
  // C16: existing READY never skips positive requalification of current conditions.
  const wasReady = row.status === "READY";

  // C18: filiation must already be bound on the contract — no client workId fallback.
  const boundWorkId = row.cognitiveWorkId ?? null;
  if (input.workId && boundWorkId && input.workId !== boundWorkId) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "workId client ≠ filiation du contrat — READY refusé",
      { exposeMessage: true },
    );
  }
  if (!boundWorkId) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Filiation cognitive_work absente sur le contrat — READY serveur impossible",
      { exposeMessage: true },
    );
  }
  const effectiveWorkId = boundWorkId;

  let unknownRestrictions: string[] = [];
  let sourcesSufficient = false;

  if (input.preparationId) {
    // C17: READY when bound work is COMPLETE.
    // C24: OPEN (AWAIT_PILOT) is also admissible — READY is the Pilote act that
    // proceeds once investigation is sufficient; SUSPENDED/RUNNING stay refused.
    const boundWork = await getCognitiveWork({
      pilotId: input.pilotId,
      workId: effectiveWorkId,
    });
    if (boundWork.status === "SUSPENDED" || boundWork.status === "RUNNING") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Travail cognitif ${boundWork.status}${boundWork.interruptCause ? ` (${boundWork.interruptCause})` : ""} — READY refusé`,
        { exposeMessage: true },
      );
    }
    if (boundWork.status !== "COMPLETE" && boundWork.status !== "OPEN") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Travail cognitif non COMPLETE (${boundWork.status}) — READY refusé`,
        { exposeMessage: true },
      );
    }
    // Exact filiation: later revision must not auto-validate an older contract binding.
    if (
      row.cognitiveRevision != null &&
      boundWork.revision !== row.cognitiveRevision
    ) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Révision cognitive ${boundWork.revision} ≠ filiation contrat r${row.cognitiveRevision} — READY refusé`,
        { exposeMessage: true },
      );
    }
    const envelope = evaluateGlobalResourceEnvelope(boundWork.resources);
    if (!envelope.ok) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        envelope.reason ?? "Budget cognitif global épuisé",
        { exposeMessage: true },
      );
    }
    const snap = await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: row.body.title,
      workId: effectiveWorkId,
    });
    if (!snap) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation absente ou ambiguë (multi-travaux) — READY serveur impossible",
        { exposeMessage: true },
      );
    }
    const inv = evaluateInvestigation(snap);
    if (inv.cognitiveWorkId && inv.cognitiveWorkId !== effectiveWorkId) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation d'un autre travail cognitif — READY refusé",
        { exposeMessage: true },
      );
    }
    // C15 positive sufficiency — empty/UNKNOWN/BUDGET never READY.
    if (
      inv.sufficiency === "UNKNOWN" ||
      inv.sufficiency === "BUDGET_EXHAUSTED" ||
      inv.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION"
    ) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        inv.contractReadyBlockedReason ?? `Suffisance ${inv.sufficiency} — READY refusé`,
        { exposeMessage: true },
      );
    }
    if (!inv.contractReady || inv.sufficiency !== "SUFFICIENT") {
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

  const readinessWithFiliation = {
    ...readiness,
    cognitiveFiliation: {
      preparationId: input.preparationId ?? null,
      workId: effectiveWorkId,
      revision: row.cognitiveRevision ?? null,
      contractId: input.contractId,
      fingerprint: row.fingerprint,
      requalifiedAt: new Date().toISOString(),
    },
  };

  if (wasReady) {
    // Conditions still hold — refresh readiness proof; keep READY.
    await db
      .update(technicalContracts)
      .set({
        readinessJson: JSON.stringify(readinessWithFiliation),
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(technicalContracts.id, input.contractId),
          eq(technicalContracts.projectId, input.projectId),
          eq(technicalContracts.pilotId, input.pilotId),
          eq(technicalContracts.status, "READY"),
        ),
      );
    return {
      contractId: input.contractId,
      status: "READY" as const,
      idempotent: true as const,
      fingerprint: row.fingerprint,
      readiness: readinessWithFiliation,
    };
  }

  const updated = await db
    .update(technicalContracts)
    .set({
      status: "READY",
      readinessJson: JSON.stringify(readinessWithFiliation),
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
    readiness: readinessWithFiliation,
  };
}
```

<!-- END FULL FILE projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts lines=236 -->

### 8.3 `projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx` — INTÉGRAL (754 lignes)

```tsx
"use client";

/**
 * ML5 — parcours Exécution (12.04–12.07 / 12.14) et Résultats (12.08 / 12.11–12.13).
 * Mounted on existing project page — no parallel shell.
 * Reading never authorizes; Non confirmation = no dispatch.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { ContractViewer, type ContractViewerModel } from "./ContractViewer";
import { D6ConfirmLaunch } from "./D6ConfirmLaunch";
import {
  RealizationBilan,
  type BilanDossierStructured,
  type BilanTab,
} from "./RealizationBilan";
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
  body: {
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
  /** Figma: execution vs résultats — same shell, distinct responsibility. */
  mode?: "execution" | "results";
  onDiscussWithNora?: (draft: string) => void;
}) {
  const mode = props.mode ?? "execution";
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
    noraAnalysisKind?: string | null;
    dossier?: BilanDossierStructured | null;
  } | null>(null);
  const [bilanTab, setBilanTab] = useState<BilanTab>("synthese");
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);
  const [pendingRequalify, setPendingRequalify] = useState<{
    attemptId: string;
    handoffId: string;
    expectedUpdatedAt: string | null;
  } | null>(null);
  /** One-shot resume of AUTHORIZED orphans — avoid dispatch hammer loops. */
  const resumedAuthorizedRef = useRef<Set<string>>(new Set());

  const reload = useCallback(async () => {
    const [cRes, aRes] = await Promise.all([
      fetch(`/api/projects/${props.projectId}/realization/contracts`),
      fetch(`/api/projects/${props.projectId}/realization/attempts`).catch(() => null),
    ]);
    if (cRes.ok) {
      const j = (await cRes.json()) as { contracts?: ContractRow[] };
      setContracts(j.contracts ?? []);
    }
    if (aRes && aRes.ok) {
      const j = (await aRes.json()) as { attempts?: AttemptRow[] };
      setAttempts(j.attempts ?? []);
    }
  }, [props.projectId]);

  useEffect(() => {
    void reload();
  }, [reload]);

  /** C24 — resume AUTHORIZED Cursor attempts left after D6 Oui without dispatch (nav/crash). */
  useEffect(() => {
    const orphaned = attempts.filter(
      (a) =>
        a.status === "AUTHORIZED" &&
        Boolean(a.decisionId) &&
        !resumedAuthorizedRef.current.has(a.attemptId),
    );
    if (orphaned.length === 0) return;
    let cancelled = false;
    const resume = async () => {
      for (const a of orphaned.slice(0, 2)) {
        if (cancelled) return;
        resumedAuthorizedRef.current.add(a.attemptId);
        try {
          await fetch(
            `/api/projects/${props.projectId}/realization/attempts/${a.attemptId}/dispatch`,
            { method: "POST" },
          );
        } catch {
          /* one-shot; Pilote can re-open surface */
        }
      }
      if (!cancelled) await reload();
    };
    void resume();
    return () => {
      cancelled = true;
    };
  }, [attempts, props.projectId, reload]);

  /** E05 — poll DISPATCHED attempts beyond ACK; reconcile is observational, not a second dispatch. */
  useEffect(() => {
    const dispatched = attempts.filter(
      (a) => a.status === "DISPATCHED" && !a.live.terminalStatus,
    );
    if (dispatched.length === 0) return;
    let ticks = 0;
    const id = window.setInterval(() => {
      ticks += 1;
      void reload();
      if (ticks % 5 === 0) {
        for (const a of dispatched.slice(0, 3)) {
          void fetch(
            `/api/projects/${props.projectId}/realization/attempts/${a.attemptId}/reconcile`,
            { method: "POST" },
          ).catch(() => {
            /* observational */
          });
        }
      }
    }, 3000);
    return () => window.clearInterval(id);
  }, [attempts, props.projectId, reload]);

  async function reconcileAttempt(attemptId: string) {
    setBusy(true);
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attemptId}/reconcile`,
        { method: "POST" },
      );
      const j = (await res.json().catch(() => ({}))) as { error?: string; message?: string; status?: string };
      setStatus(
        res.ok
          ? `Réconciliation: ${j.status ?? "ok"} — pas de second dispatch`
          : j.message ?? j.error ?? "Réconciliation refusée",
      );
      await reload();
    } finally {
      setBusy(false);
    }
  }

  /** CF-02 — READY is a server-owned qualification act (not client sufficiency). */
  async function qualifyReady(contract: ContractRow) {
    setBusy(true);
    setStatus("");
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/contracts/${contract.id}/ready`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        },
      );
      const j = (await res.json().catch(() => ({}))) as {
        status?: string;
        error?: string;
        message?: string;
      };
      if (!res.ok) {
        setStatus(j.message ?? j.error ?? "Qualification READY refusée");
        return;
      }
      setStatus(`Contrat ${contract.contractKey} → ${j.status ?? "READY"} (serveur)`);
      await reload();
    } finally {
      setBusy(false);
    }
  }

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
      // Single authorize call: server auto-dispatches after D6 Oui (C24).
      // Keeps AUTHORIZED→DISPATCHED atomic vs browser navigation aborting a second fetch.
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
          keepalive: true,
        },
      );
      const aj = (await auth.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        status?: string;
        dispatch?: { status?: string; error?: string; message?: string };
      };
      if (!auth.ok) {
        setStatus(aj.message ?? aj.error ?? "Autorisation refusée");
        setConfirmOpen(false);
        return;
      }
      const dispStatus = aj.dispatch?.status ?? aj.status;
      if (aj.dispatch?.error || dispStatus === "AUTHORIZED" || dispStatus === "FAILED") {
        // Fallback: explicit /dispatch if same-request dispatch did not advance.
        const disp = await fetch(
          `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/dispatch`,
          { method: "POST", keepalive: true },
        );
        const dj = (await disp.json().catch(() => ({}))) as {
          error?: string;
          message?: string;
          status?: string;
        };
        if (!disp.ok) {
          setStatus(
            dj.message ??
              dj.error ??
              aj.dispatch?.message ??
              "Dispatch refusé après autorisation D6",
          );
        } else {
          setStatus(
            `Dispatch accepté (${dj.status ?? "ok"}) — observations LIVE/SCRIPTED à réconcilier`,
          );
        }
      } else {
        setStatus(
          `Dispatch accepté (${dispStatus ?? "ok"}) — observations LIVE/SCRIPTED à réconcilier`,
        );
      }
      setConfirmOpen(false);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  async function confirmNo() {
    if (!pendingAttemptId || !selectedContract) {
      setConfirmOpen(false);
      setPendingAttemptId(null);
      setStatus("Confirmation Non — dialogue fermé sans acte");
      return;
    }
    setBusy(true);
    try {
      const auth = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/authorize`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            statement: "Refus explicite D6 — pas d'exécution Cursor du contrat inspecté",
            inspectedFingerprint: selectedContract.fingerprint,
            confirmed: false,
          }),
        },
      );
      const aj = (await auth.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
        status?: string;
        decisionId?: string;
        refused?: boolean;
      };
      if (!auth.ok) {
        setStatus(aj.message ?? aj.error ?? "Refus D6 non enregistré");
      } else {
        setStatus(
          `Refus D6 enregistré (${aj.status ?? "CANCELLED"}) — décision ${aj.decisionId ?? "—"} — aucun dispatch`,
        );
      }
      setConfirmOpen(false);
      setPendingAttemptId(null);
      await reload();
    } finally {
      setBusy(false);
    }
  }

  function resumeMissing(rubrics: D8Rubric[] | undefined): boolean {
    const resume = (rubrics ?? []).find((r) => r.key === "resume");
    return (
      !resume ||
      resume.coverage === "MISSING" ||
      /^rapport manquant$/i.test((resume.content ?? "").trim())
    );
  }

  async function openBilan(attempt: AttemptRow) {
    setSelectedAttempt(attempt);
    setBusy(true);
    try {
      const handoffRes = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/handoff`,
      );
      const handoffJ = (await handoffRes.json().catch(() => ({}))) as {
        handoff?: { id?: string; status?: string; reportMarkdown?: string | null };
        status?: string;
      };
      const handoff = handoffJ.handoff ?? null;
      const handoffReceived =
        handoffRes.ok &&
        handoff?.status === "RECEIVED" &&
        Boolean(handoff.reportMarkdown && String(handoff.reportMarkdown).trim());

      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
      );
      const j = (await res.json().catch(() => ({}))) as {
        status?: string;
        qualification?: {
          id?: string;
          verdict: string;
          rubrics: D8Rubric[];
          limits: string[];
          noraAnalysisMarkdown?: string | null;
          noraAnalysisKind?: string | null;
          updatedAt?: string | null;
          dossier?: BilanDossierStructured | null;
        };
      };

      // C11/C24 — lecture ≠ qualification silencieuse à l'ouverture.
      // Le pipeline autonome produit le dossier; l'UI observe l'état en cours
      // ou disponible. Requalification = acte explicite uniquement.
      const needsFirstCreate = j.status === "MISSING" || !j.qualification;
      const needsExplicitRequalify =
        Boolean(j.qualification) &&
        handoffReceived &&
        resumeMissing(j.qualification?.rubrics);

      if (needsFirstCreate) {
        // If handoff is already RECEIVED, allow explicit qualify CTA; otherwise
        // keep selected attempt visible and surface honest in-progress status.
        setBilan(null);
        setPendingRequalify(
          handoffReceived
            ? {
                attemptId: attempt.attemptId,
                handoffId: handoff?.id ?? "",
                expectedUpdatedAt: null,
              }
            : null,
        );
        setStatus(
          handoffReceived
            ? "Dossier D8 absent — qualification explicite requise (pas de POST à l'ouverture)"
            : "Dossier D8 en cours ou absent — ouverture en lecture seule",
        );
        // Trigger observational reload so a concurrent autonomous restitution can appear.
        await reload();
        return;
      }

      if (needsExplicitRequalify && j.qualification) {
        setBilan({
          verdict: j.qualification.verdict,
          rubrics: j.qualification.rubrics,
          limits: j.qualification.limits,
          noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
          noraAnalysisKind: j.qualification.noraAnalysisKind,
          dossier: j.qualification.dossier ?? null,
        });
        setPendingRequalify({
          attemptId: attempt.attemptId,
          handoffId: handoff?.id ?? "",
          expectedUpdatedAt: j.qualification.updatedAt ?? null,
        });
        setStatus(
          "Handoff RECEIVED après qualification initiale — requalification explicite requise (pas de POST silencieux à l'ouverture)",
        );
        return;
      }
      setBilan({
        verdict: j.qualification!.verdict,
        rubrics: j.qualification!.rubrics,
        limits: j.qualification!.limits,
        noraAnalysisMarkdown: j.qualification!.noraAnalysisMarkdown,
        noraAnalysisKind: j.qualification!.noraAnalysisKind,
        dossier: j.qualification!.dossier ?? null,
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

  /** C11 — requalify is an explicit Pilot act, never silent on openBilan. */
  async function confirmRequalify() {
    if (!pendingRequalify?.handoffId) {
      setStatus("Impossible de requalifier — handoffId manquant");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(
        `/api/projects/${props.projectId}/realization/attempts/${pendingRequalify.attemptId}/qualification`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            attachNoraCognitive: true,
            requalify: true,
            reason:
              "C11 — requalification explicite après handoff RECEIVED (correction de jugement)",
            requalifyMode: "judgment_correction",
            newProofRef: pendingRequalify.handoffId,
            expectedUpdatedAt: pendingRequalify.expectedUpdatedAt ?? undefined,
          }),
        },
      );
      const created = (await res.json().catch(() => ({}))) as {
        verdict?: string;
        rubrics?: D8Rubric[];
        limits?: string[];
        noraAnalysisMarkdown?: string | null;
        noraAnalysisKind?: string | null;
        message?: string;
        error?: string;
      };
      if (res.ok && created.rubrics) {
        setBilan({
          verdict: created.verdict ?? "INDETERMINATE",
          rubrics: created.rubrics,
          limits: created.limits ?? [],
          noraAnalysisMarkdown: created.noraAnalysisMarkdown,
          noraAnalysisKind: created.noraAnalysisKind,
        });
        setPendingRequalify(null);
        setStatus("Bilan D8 requalifié explicitement après handoff RECEIVED");
      } else {
        setStatus(created.message ?? created.error ?? "Requalification refusée");
      }
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

  const showExecutionChrome = mode === "execution";
  const showResultsChrome = mode === "results";

  return (
    <div
      className="fig-cursor-realization"
      data-testid="cursor-realization-surface"
      data-mode={mode}
    >
      <header>
        <p className="fig-kicker !mb-0">
          {showExecutionChrome ? "EXÉCUTION CURSOR" : "RÉSULTATS ET PREUVES  /  D8"}
        </p>
        <h2 className="fig-inspector-title">
          {showExecutionChrome ? "Interventions et observations" : "Bilans de réalisation"}
        </h2>
        <p className="fig-travail-viewer-meta">
          {showExecutionChrome
            ? "Inspection → confirmation D6 → une tentative → observations. Lecture ≠ autorisation."
            : "Neuf rubriques D8 dans quatre onglets Figma. Verdict ≠ avis Nora ≠ réception D6."}
        </p>
        {status ? (
          <p role="status" data-testid="realization-status">
            {status}
          </p>
        ) : null}
        {pendingRequalify ? (
          <p>
            <button
              type="button"
              className="btn"
              data-testid="d8-explicit-requalify"
              disabled={busy}
              onClick={() => void confirmRequalify()}
            >
              Requalifier le bilan (acte explicite)
            </button>
          </p>
        ) : null}
      </header>

      {showExecutionChrome ? (
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
                  {c.status === "DRAFT" || c.status === "NEEDS_REVISION" ? (
                    <button
                      type="button"
                      className="btn secondary"
                      data-testid={`contract-ready-${c.id}`}
                      disabled={busy}
                      onClick={() => void qualifyReady(c)}
                    >
                      Qualifier READY (serveur)
                    </button>
                  ) : null}
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
      ) : null}

      {showExecutionChrome && viewerModel ? (
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

      {confirmOpen && selectedContract ? (
        <D6ConfirmLaunch
          contractKey={selectedContract.contractKey}
          version={selectedContract.version}
          fingerprint={selectedContract.fingerprint}
          title={selectedContract.body.title}
          busy={busy}
          onYes={() => void confirmYes()}
          onNo={() => void confirmNo()}
          onCancel={() => {
            setConfirmOpen(false);
            setPendingAttemptId(null);
            setStatus("Dialogue D6 annulé — aucun acte");
          }}
        />
      ) : null}

      <section data-testid="realization-attempts">
        <h3>{showExecutionChrome ? "Historique des interventions" : "Tentatives à bilanter"}</h3>
        {attempts.length === 0 ? (
          <p className="muted">Aucune tentative Cursor pour ce projet.</p>
        ) : (
          <ul>
            {attempts.map((a) => (
              <li key={a.attemptId} data-testid={`attempt-row-${a.attemptId}`}>
                <span>
                  {a.status} · {a.live.terminalStatus ?? "—"} ·{" "}
                  {a.live.lastActivitySummary ?? "pas d'observation"}
                  {a.live.agentId ? ` · agent ${a.live.agentId.slice(0, 8)}` : ""}
                  {a.live.runId ? ` · run ${a.live.runId.slice(0, 8)}` : ""}
                  {a.status === "AMBIGUOUS" ? " · à réconcilier" : ""}
                </span>
                {showResultsChrome ||
                a.status === "COMPLETED" ||
                a.status === "FAILED" ||
                a.status === "AMBIGUOUS" ? (
                  <button
                    type="button"
                    className="btn secondary"
                    data-testid={`attempt-bilan-${a.attemptId}`}
                    onClick={() => void openBilan(a)}
                  >
                    Bilan D8
                  </button>
                ) : null}
                {showExecutionChrome &&
                (a.status === "DISPATCHED" || a.status === "AMBIGUOUS") ? (
                  <button
                    type="button"
                    className="btn secondary"
                    data-testid="cursor-reconcile"
                    data-attempt-id={a.attemptId}
                    disabled={busy}
                    onClick={() => void reconcileAttempt(a.attemptId)}
                  >
                    Réconcilier
                  </button>
                ) : null}
                {showExecutionChrome && a.status === "DISPATCHED" ? (
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

      {bilan && selectedAttempt && (showResultsChrome || mode === "execution") ? (
        <RealizationBilan
          attemptId={selectedAttempt.attemptId}
          verdict={bilan.verdict}
          rubrics={bilan.rubrics}
          limits={bilan.limits}
          noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
          noraAnalysisKind={bilan.noraAnalysisKind}
          dossier={bilan.dossier}
          activeTab={bilanTab}
          onTabChange={setBilanTab}
          onDiscussWithNora={() => {
            const d = bilan.dossier;
            const draft = [
              `[Dossier D8 — brouillon retirable, aucun envoi automatique]`,
              `attemptId: ${selectedAttempt.attemptId}`,
              `contractId: ${d?.contractId ?? selectedAttempt.plan.contractId}`,
              `handoffId: ${d?.handoffId ?? "MISSING"}`,
              `dossierVersion: ${d?.dossierVersion ?? "UNKNOWN"}`,
              `verdictD8: ${bilan.verdict}`,
              `noraKind: ${bilan.noraAnalysisKind ?? "UNKNOWN"}`,
              `fingerprint: ${selectedAttempt.fingerprint}`,
              d?.filesConsulted?.length
                ? `pieces: ${d.filesConsulted.map((f) => f.path).join(", ")}`
                : "pieces: MISSING",
              `Suite laissée au Pilote — aucune HumanDecision automatique.`,
            ].join("\n");
            props.onDiscussWithNora?.(draft);
          }}
        />
      ) : null}
    </div>
  );
}
```

<!-- END FULL FILE projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx lines=754 -->

### 8.4 `projects/sfia-studio-next/web/src/domains/execution/cursor-autonomous-restitution.ts` — INTÉGRAL (1698 lignes)

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
  staticEvaluateContentAgainstCriterion,
  runIsolatedVerificationCommands,
  deriveStudioVerifyPlanFromWorkspace,
  readStudioVerificationArtifact,
  matchCriterionToVerifyId,
} from "@/domains/proofs/studio-isolated-verify";
import {
  heuristicCognitiveCriterionAssessments,
  applyCognitiveAssessmentsToEvidence,
} from "@/domains/proofs/d8-cognitive-criterion-eval";
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
  /** C24 reprise — distinguish LIVE Nora avis vs deterministic synthesis. */
  restitutionNoraKind?: "LIVE_D3" | "DETERMINISTIC" | "ATTACHED" | "NONE" | null;
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

/**
 * Binding must be field-exact — not a casual substring that could appear in prose
 * about another attempt. Accepts `attemptId: <id>` / `contractFingerprint: <fp>`.
 */
function reportBindsAttempt(
  markdown: string,
  attemptId: string,
  contractFingerprint: string,
): boolean {
  const attemptOk = new RegExp(
    `(?:^|\\n)\\s*attemptId\\s*[:：]\\s*${escapeRegExp(attemptId)}\\s*(?:$|\\n)`,
    "i",
  ).test(markdown);
  const fpOk = new RegExp(
    `(?:^|\\n)\\s*contractFingerprint\\s*[:：]\\s*${escapeRegExp(contractFingerprint)}\\s*(?:$|\\n)`,
    "i",
  ).test(markdown);
  return attemptOk && fpOk;
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

export type CriterionEvidenceLevel =
  | "DECLARED"
  | "OBSERVED"
  | "ACCESSIBLE"
  | "INTEGRITY_VERIFIED"
  | "CONTENT_EVALUATED"
  | "STUDIO_VERIFIED"
  | "SATISFIED"
  | "NOT_SATISFIED"
  | "INSUFFICIENT"
  | "INDETERMINATE";

/**
 * Build manifest + criterionEvidence from confined FS observations — not from
 * PASS strings in prose. Agent-written exit/PASS files are OBSERVED only.
 * verified=true requires Studio content evaluation and/or Studio-owned verification.
 */
export async function buildVerifiedEvidenceFromWorkspace(input: {
  workspaceCwd: string | null | undefined;
  reportMarkdown: string;
  acceptanceCriteria: string[];
  attemptId?: string | null;
  contractFingerprint?: string | null;
}): Promise<{
  manifest: HandoffManifest;
  criterionEvidence: Record<
    string,
    { refs: string[]; verified: boolean; level?: CriterionEvidenceLevel; note?: string }
  >;
  limits: string[];
}> {
  const limits: string[] = [];
  const filesCreated: string[] = [];
  const filesModified: string[] = [];
  const filesObserved: string[] = [];
  const filesConsulted: Array<{ path: string; sha256?: string; content?: string }> =
    [];
  const testsDeclared: string[] = [];
  /** Agent-declared captures — observational only, never certifying alone. */
  const testsCaptured: string[] = [];
  /** Studio-owned verification results — may certify. */
  const studioVerifiedTests: string[] = [];
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
        content: r.bytes.toString("utf8"),
      });
    } else if (r.reason !== "FILE_ABSENT") {
      limits.push(`OBSERVE_DENIED:${rel}:${r.reason}`);
    } else {
      gaps.push(`fichier annoncé absent: ${rel}`);
    }
  };

  for (const f of [...filesCreated, ...filesModified]) observe(f);

  // Also observe paths explicitly named in acceptance criteria.
  for (const criterion of input.acceptanceCriteria) {
    const pathHit = criterion.match(
      /((?:src\/|lib\/|tests?\/|web\/)[\w./-]+\.[a-zA-Z0-9]+)/,
    );
    if (pathHit && !filesConsulted.some((c) => c.path === pathHit[1])) {
      observe(pathHit[1]!);
    }
  }

  // Agent captures — OBSERVED only (T-07: agent writing exit=0 ≠ Studio proof).
  const agentCaptureMissing: string[] = [];
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
              testsCaptured.push(`${t}:agent-exit=${code}:OBSERVED_ONLY`);
              captured = true;
              filesConsulted.push({
                path: rel,
                sha256: createHash("sha256").update(r.bytes).digest("hex"),
              });
              limits.push(
                `AGENT_EXIT_CAPTURE_NOT_CERTIFYING:${t}:exit=${code}`,
              );
            }
          } else {
            testsCaptured.push(`${t}:agent-stdout:OBSERVED_ONLY`);
            captured = true;
          }
          break;
        }
      }
    }
    if (!captured) agentCaptureMissing.push(t);
  }

  // C24 reprise — do not execute Cursor workspace code from Studio process.
  // Subprocess+scrubbed-env ≠ system isolation. Default: TOOLING GAP / INSUFFICIENT.
  {
    const { isStudioIsolatedVerifyExecutionEnabled } = await import(
      "@/domains/proofs/studio-verify-authority"
    );
    const gate = isStudioIsolatedVerifyExecutionEnabled();
    limits.push(...gate.limits);
    if (
      gate.enabled &&
      cwd &&
      input.attemptId &&
      input.contractFingerprint
    ) {
      const planCmds = deriveStudioVerifyPlanFromWorkspace({
        workspaceCwd: cwd,
        acceptanceCriteria: input.acceptanceCriteria,
      });
      if (planCmds.length > 0) {
        const isolated = await runIsolatedVerificationCommands({
          workspaceCwd: cwd,
          attemptId: input.attemptId,
          contractFingerprint: input.contractFingerprint,
          commands: planCmds,
        });
        limits.push(...isolated.limits);
        for (const r of isolated.results) {
          studioVerifiedTests.push(
            `${r.id}:studio-isolated-exit=${r.exitCode ?? "null"}:${r.ok ? "OK" : "FAIL"}`,
          );
          if (!r.ok) gaps.push(`studio isolated verify fail: ${r.id}`);
        }
      } else {
        limits.push(
          "ISOLATED_VERIFY_NO_STUDIO_EXPLICIT_PLAN — package.json alone is not authorization",
        );
      }
    } else if (
      input.acceptanceCriteria.some((c) =>
        /test|unitaire|spec|exit\s*=\s*0/i.test(c),
      )
    ) {
      limits.push(
        "ISOLATED_VERIFY_TOOLING_GAP — test criteria remain INSUFFICIENT without Studio authority proof",
      );
    }
  }

  for (const t of agentCaptureMissing) {
    const studioCovered = studioVerifiedTests.some(
      (v) => v.includes(`${t}:`) || v.startsWith("npm-test:"),
    );
    if (!studioCovered) {
      gaps.push(`test déclaré sans preuve Studio isolée: ${t}`);
    } else {
      limits.push(`AGENT_CAPTURE_OPTIONAL_STUDIO_COVERED:${t}`);
    }
  }

  if (
    /``\`(?:bash|sh|txt)?\n[\s\S]*?\bPASS\b/i.test(input.reportMarkdown) &&
    studioVerifiedTests.length === 0
  ) {
    limits.push(
      "PROSE_PASS_IGNORED — PASS dans le rapport ≠ capture de test vérifiée",
    );
  }

  if (filesCreated.length + filesModified.length === 0) {
    gaps.push("inventaire non exhaustif — dérivé du rapport");
  }

  const criterionEvidence: Record<
    string,
    { refs: string[]; verified: boolean; level?: CriterionEvidenceLevel; note?: string }
  > = {};

  for (const criterion of input.acceptanceCriteria) {
    const refs: string[] = [];
    let level: CriterionEvidenceLevel = "DECLARED";
    let verified = false;
    let note = "aucune preuve indépendante";

    const pathInCriterion = criterion.match(
      /((?:src\/|lib\/|tests?\/|web\/)[\w./-]+\.[a-zA-Z0-9]+)/,
    )?.[1];

    // File criteria: path must be explicit; static content check — no default success.
    if (pathInCriterion) {
      const consulted = filesConsulted.find((c) => c.path === pathInCriterion);
      if (!consulted) {
        level = "NOT_SATISFIED";
        note = `pièce absente ou inaccessible: ${pathInCriterion}`;
        gaps.push(note);
      } else {
        refs.push(pathInCriterion);
        level = "ACCESSIBLE";
        const contentOk = staticEvaluateContentAgainstCriterion(
          criterion,
          consulted.content ?? "",
        );
        if (contentOk.ok) {
          level = "CONTENT_EVALUATED";
          verified = true;
          note = contentOk.note;
        } else if (/INSUFFICIENT/i.test(contentOk.note)) {
          level = "INSUFFICIENT";
          verified = false;
          note = contentOk.note;
          limits.push("CONTENT_EVAL_INSUFFICIENT_NO_DEFAULT_PASS");
        } else {
          level = "NOT_SATISFIED";
          note = contentOk.note;
          gaps.push(`contenu non conforme: ${pathInCriterion}`);
        }
      }
    } else {
      // Stem-only mention → ACCESSIBLE at best, never auto-verified.
      for (const c of filesConsulted) {
        const stem = (c.path.split("/").pop() || "")
          .toLowerCase()
          .replace(/\.[^.]+$/, "");
        if (
          stem.length >= 2 &&
          criterion.toLowerCase().includes(stem) &&
          !c.path.includes("test-captures") &&
          !c.path.includes("studio-verifications")
        ) {
          refs.push(c.path);
          if (level === "DECLARED") level = "ACCESSIBLE";
        }
      }
      if (level === "ACCESSIBLE") {
        note = "accessible ≠ satisfait — critère sans chemin explicite";
      }
    }

    // Test criteria: only Studio isolated verification linked to THIS criterion.
    const isTestCriterion = /test|unitaire|spec|exit\s*=\s*0/i.test(criterion);
    if (isTestCriterion) {
      for (const cap of testsCaptured) {
        refs.push(cap);
        if (level === "DECLARED" || level === "ACCESSIBLE") level = "OBSERVED";
      }
      verified = false; // never inherit file-criterion verification
      const availableIds = studioVerifiedTests.map((v) => v.split(":")[0]!);
      const tokenIds = [
        ...criterion.matchAll(/\b([a-z][\w-]{1,40})\b/gi),
      ]
        .map((m) => m[1]!)
        .filter((w) => !/^(test|exit|unitaire|spec|the|and|for|with)$/i.test(w));
      const candidateIds = [
        ...new Set([...availableIds, "npm-test", ...tokenIds]),
      ];
      const linkedId = matchCriterionToVerifyId(criterion, candidateIds);
      let linkedOk = false;
      if (cwd && input.attemptId && input.contractFingerprint && linkedId) {
        const art = readStudioVerificationArtifact({
          workspaceCwd: cwd,
          attemptId: input.attemptId,
          testId: linkedId,
          contractFingerprint: input.contractFingerprint,
        });
        limits.push(...art.limits);
        if (art.ok) {
          refs.push(`${linkedId}:studio-isolated-exit=0`);
          level = "STUDIO_VERIFIED";
          verified = true;
          linkedOk = true;
          note = `vérification Studio isolée (${art.verifiedBy}) liée au critère`;
        } else if (art.limits.some((l) => /LEGACY_NOT_CERTIFYING|UNTRUSTED|MISMATCH/.test(l))) {
          // Artifact present but not certifying — criterion stays insufficient.
          linkedOk = false;
          note = `artefact Studio non certifiant: ${art.limits.join(",")}`;
        } else if (art.exit != null && art.exit !== 0) {
          refs.push(`${linkedId}:studio-isolated-exit=${art.exit}`);
          level = "NOT_SATISFIED";
          note = "vérification Studio isolée: échec";
          gaps.push(`studio isolated fail for criterion: ${criterion.slice(0, 60)}`);
          linkedOk = true; // resolved as fail
        }
      }
      // Do NOT reuse an unrelated studioHit for another criterion (C23 bug).
      if (!linkedOk) {
        level = "INSUFFICIENT";
        note =
          "test non certifié — besoin preuve Studio isolée liée au critère (agent exit insuffisant)";
        limits.push("TEST_CRITERION_INSUFFICIENT_WITHOUT_LINKED_STUDIO_VERIFY");
      }
    }

    // Presence / ACCESSIBLE alone never satisfies.
    if (verified && (level === "ACCESSIBLE" || level === "OBSERVED")) {
      verified = false;
      level = "INSUFFICIENT";
      note = "accessible/observé ≠ satisfait";
    }

    criterionEvidence[criterion] = { refs, verified, level, note };
  }

  return {
    manifest: {
      filesCreated,
      filesModified,
      filesObserved,
      filesConsulted: filesConsulted.map(({ path, sha256 }) => ({
        path,
        sha256,
      })),
      testsDeclared,
      testsCaptured: [...testsCaptured, ...studioVerifiedTests],
      gaps,
      sourcesConsulted: [
        "cursor-report",
        "workspace-confined",
        "studio-isolated-verification",
      ],
    },
    criterionEvidence,
    limits,
  };
}

/**
 * Independent local Git observation for D9 (option A). Read-only; no remote mutation.
 * Does not trust Cursor report tipSha alone.
 */
async function observeLocalGitFactsForAttempt(
  workspaceCwd: string | null | undefined,
): Promise<{
  facts: Array<{ path: string; sha?: string | null }>;
  verified: boolean | null;
  tipSha: string | null;
  branch: string | null;
  limits: string[];
}> {
  const limits: string[] = [];
  if (!workspaceCwd) {
    return {
      facts: [],
      verified: false,
      tipSha: null,
      branch: null,
      limits: ["D9_NO_WORKSPACE — Git requis mais cwd absent"],
    };
  }
  try {
    const { execFile } = await import("node:child_process");
    const { promisify } = await import("node:util");
    const execFileAsync = promisify(execFile);
    const { stdout: headOut } = await execFileAsync(
      "git",
      ["-C", workspaceCwd, "rev-parse", "HEAD"],
      { timeout: 5_000 },
    );
    const tipSha = headOut.trim();
    let branch: string | null = null;
    try {
      const { stdout: br } = await execFileAsync(
        "git",
        ["-C", workspaceCwd, "rev-parse", "--abbrev-ref", "HEAD"],
        { timeout: 5_000 },
      );
      branch = br.trim() || null;
    } catch {
      branch = null;
    }
    if (!/^[0-9a-f]{40}$/i.test(tipSha)) {
      limits.push("D9_TIP_SHA_INVALID");
      return { facts: [], verified: false, tipSha: null, branch, limits };
    }
    limits.push("D9_LOCAL_TIP_OBSERVED");
    // Remote SHA not verified here (read-only; no mutative GitHub). Local ≠ remote.
    limits.push("D9_REMOTE_SHA_NOT_VERIFIED_THIS_CYCLE");
    return {
      facts: [{ path: ".git/HEAD", sha: tipSha }],
      // null = local observed, remote still indeterminate — not a false failure.
      verified: null,
      tipSha,
      branch,
      limits,
    };
  } catch (e) {
    limits.push(
      `D9_LOCAL_OBSERVE_FAILED:${String((e as Error)?.message ?? e).slice(0, 80)}`,
    );
    return {
      facts: [],
      verified: false,
      tipSha: null,
      branch: null,
      limits,
    };
  }
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

/** Exported for C24 fencing proofs — reclaim after lease expiry. */
export async function claimRestitutionPipelineAtomic(input: {
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

/** Exported for C24 fencing proofs — expired owner must not renew via write. */
export async function persistPipelineOwned(input: {
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
  // C24 — owner + version + lease required and still valid.
  // Absent lease does NOT establish authority (refuse NULL / empty).
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
        sql`(
          NULLIF(${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt', '') IS NOT NULL
          AND (${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt')::timestamptz > now()
        )`,
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

  // Distinguish: technical dossier available vs cognitive avis pending vs fully complete.
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
    const hasAvis = Boolean(existingQual?.noraAnalysisMarkdown?.trim());
    const noraKind = live.restitutionNoraKind ?? null;
    const wantNora =
      input.attachNoraCognitive !== false &&
      (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "1").trim() !== "0";

    // Fully materialised: handoff + qual + avis — no re-entry (late proof → requalify route).
    if (existingHandoff && existingQual && hasAvis) {
      return {
        ran: false,
        handoffId: existingHandoff.id,
        qualificationId: existingQual.id,
        handoffStatus: existingHandoff.status,
        verdict: existingQual.verdict,
        limits: [
          "ALREADY_MATERIALISED_DOSSIER",
          "RESTITUTION_TECHNICAL_AND_COGNITIVE_COMPLETE",
        ],
        pipelineStatus: "COMPLETE",
        criteria: undefined,
      };
    }

    // Pipeline marked COMPLETE but cognitive avis still missing → resume Nora only.
    if (
      live.restitutionPipelineStatus === "COMPLETE" &&
      existingHandoff &&
      existingQual &&
      !hasAvis &&
      wantNora
    ) {
      // Drop COMPLETE + expire lease so claimRestitutionPipelineAtomic can reclaim
      // without redispatch — handoff/qual already present; Nora attach continues below.
      live = {
        ...live,
        restitutionPipelineStatus: "NORA",
        restitutionNoraKind: noraKind === "LIVE_D3" ? noraKind : "NONE",
        restitutionOwnerToken: null,
        restitutionLeaseExpiresAt: new Date(Date.now() - 1_000).toISOString(),
        limits: [
          ...(live.limits ?? []),
          "COGNITIVE_AVIS_RESUME_FROM_TECHNICAL_COMPLETE",
        ],
      };
      await db
        .update(effectAttempts)
        .set({
          resultJson: JSON.stringify(live),
          updatedAt: new Date(),
        })
        .where(eq(effectAttempts.id, row.id));
      live = parseLive(
        (
          await db
            .select({ resultJson: effectAttempts.resultJson })
            .from(effectAttempts)
            .where(eq(effectAttempts.id, row.id))
            .limit(1)
        )[0]?.resultJson,
      );
    } else if (live.restitutionPipelineStatus === "COMPLETE") {
      return {
        ran: false,
        handoffId: live.restitutionHandoffId ?? existingHandoff?.id ?? null,
        qualificationId:
          live.restitutionQualificationId ?? existingQual?.id ?? null,
        handoffStatus: existingHandoff?.status ?? live.reportStatus ?? null,
        verdict: existingQual?.verdict ?? null,
        limits: [
          "ALREADY_COMPLETE_TECHNICAL",
          hasAvis
            ? "COGNITIVE_AVIS_PRESENT"
            : "COGNITIVE_AVIS_ABSENT_BUT_NORA_ATTACH_DISABLED",
        ],
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
    attemptId: row.id,
    contractFingerprint: plan.contractFingerprint,
  });
  limits.push(...evidence.limits);

  // C24 reprise — LIVE Nora cognitive criterion assessment is nominal;
  // heuristic is an explicitly labelled fallback only.
  let cogAssessments = heuristicCognitiveCriterionAssessments({
    criteria: acceptanceCriteria,
    criterionEvidence: evidence.criterionEvidence,
  });
  const wantCriteriaLive =
    input.attachNoraCognitive !== false &&
    (process.env.SFIA_D8_COGNITIVE_CRITERIA_LIVE || "1").trim() !== "0" &&
    (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "1").trim() !== "0";
  if (wantCriteriaLive && contract?.preparationId && acceptanceCriteria.length > 0) {
    try {
      const { runLiveCognitiveCriterionAssessments } = await import(
        "@/domains/proofs/d8-cognitive-criterion-eval"
      );
      const liveCog = await runLiveCognitiveCriterionAssessments({
        pilotId: input.pilotId,
        preparationId: contract.preparationId,
        projectId: input.projectId,
        attemptId: row.id,
        contractTitle,
        acceptanceCriteria,
        criterionEvidence: evidence.criterionEvidence,
        reportExcerpt: (reportMarkdown || "").slice(0, 4000),
      });
      if (liveCog.assessments.length > 0) {
        cogAssessments = liveCog;
        limits.push("D8_COGNITIVE_CRITERIA_LIVE");
      } else {
        limits.push(
          ...liveCog.limits,
          "D8_COGNITIVE_CRITERIA_FALLBACK_HEURISTIC",
        );
      }
    } catch (e) {
      limits.push(
        `D8_COGNITIVE_LIVE_ERROR:${String((e as Error)?.message ?? e).slice(0, 80)}`,
        "D8_COGNITIVE_CRITERIA_FALLBACK_HEURISTIC",
      );
    }
  } else {
    limits.push("D8_COGNITIVE_CRITERIA_HEURISTIC_ONLY");
  }
  const applied = applyCognitiveAssessmentsToEvidence({
    criterionEvidence: evidence.criterionEvidence,
    assessments: cogAssessments.assessments,
  });
  evidence.criterionEvidence = applied.criterionEvidence as typeof evidence.criterionEvidence;
  limits.push(...cogAssessments.limits, ...applied.limits);

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
      // C24 — atomic ownership CAS + handoff insert (no fence-then-write window).
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
        ownershipGate: {
          ownerToken,
          expectedVersion: version,
          livePatch: {
            restitutionPipelineStatus: "COLLECTING",
          },
        },
      });
      handoffId = ingested.handoffId;
      handoffStatus = ingested.status;
      limits.push(...ingested.limits, "AUTONOMOUS_HANDOFF_INGESTED_ATOMIC");
    } catch (e) {
      const msg = String((e as Error)?.message ?? e);
      if (/OWNERSHIP_LOST_ATOMIC_HANDOFF/.test(msg)) {
        limits.push("OWNERSHIP_LOST_ATOMIC_HANDOFF");
      }
      limits.push(
        `HANDOFF_INGEST_FAILED:${msg.slice(0, 100)}`,
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

  // C23 D9 — when Git is required by the contract, observe independently or refuse
  // conformity. Missions without gitScope stay N/A (gitFactsVerified=null).
  let gitFactsVerified: boolean | null = null;
  let gitFacts: Array<{ path: string; sha?: string | null }> | undefined;
  if (plan.gitScope?.required) {
    const observed = await observeLocalGitFactsForAttempt(plan.workspaceCwd);
    gitFacts = observed.facts;
    gitFactsVerified = observed.verified;
    limits.push(...observed.limits);
    if (observed.tipSha) {
      manifest = {
        ...manifest,
        git: {
          ...(manifest.git ?? {}),
          tipSha: observed.tipSha,
          branch: observed.branch ?? plan.gitScope.workBranch ?? null,
          baseSha: plan.gitScope.baseSha ?? null,
        },
      };
    }
  }

  const gitRequired = Boolean(plan.gitScope?.required);
  const q = qualifyCursorRealization({
    contractFingerprint: plan.contractFingerprint,
    acceptanceCriteria,
    expectedProofs,
    handoffStatus: handoff?.status ?? null,
    reportMarkdown: (handoff?.reportMarkdown ?? reportMarkdown) || null,
    manifest,
    terminalStatus: live.terminalStatus ?? null,
    // C22/C23 — product path builds evidence; never inject verified from campaign.
    criterionEvidence: evidence.criterionEvidence,
    gitFacts,
    gitFactsVerified,
    gitRequired,
  });

  let qualificationId = existingQual?.id ?? null;
  const dossierVersion = (live.restitutionDossierVersion ?? 0) + 1;
  if (!existingQual) {
    // C24 — atomic CAS + D8 insert in one transaction.
    const id = newId("rqual");
    const now = new Date();
    const liveForQual: LiveWithRestitution = {
      ...live,
      restitutionPipelineStatus: "QUALIFYING",
      restitutionHandoffId: handoffId,
      restitutionDossierVersion: dossierVersion,
      restitutionOwnerToken: ownerToken,
      restitutionVersion: version,
      restitutionLeaseExpiresAt: new Date(
        Date.now() + RESTITUTION_LEASE_MS,
      ).toISOString(),
    };
    const inserted = await db.transaction(async (tx) => {
      const cas = await tx
        .update(effectAttempts)
        .set({
          resultJson: JSON.stringify(liveForQual),
          updatedAt: now,
        })
        .where(
          and(
            eq(effectAttempts.id, row.id),
            sql`${effectAttempts.resultJson}::jsonb->>'restitutionOwnerToken' = ${ownerToken}`,
            sql`COALESCE((${effectAttempts.resultJson}::jsonb->>'restitutionVersion')::int, 0) = ${version}`,
            sql`(
              NULLIF(${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt', '') IS NOT NULL
              AND (${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt')::timestamptz > now()
            )`,
          ),
        )
        .returning({ id: effectAttempts.id });
      if (!cas[0]) return false;
      await tx.insert(realizationQualifications).values({
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
          "D8_INSERT_ATOMIC_OWNERSHIP",
          ...limits,
        ]),
        historyJson: "[]",
        noraAnalysisMarkdown: null,
        noraAnalysisAt: null,
        createdAt: now,
        updatedAt: now,
      });
      return true;
    });
    if (!inserted) {
      return {
        ran: true,
        handoffId,
        qualificationId: null,
        handoffStatus,
        verdict: q.verdict,
        limits: [...limits, "OWNERSHIP_LOST_ATOMIC_D8_INSERT"],
        pipelineStatus: "PARTIAL",
        criteria: q.criteria,
      };
    }
    qualificationId = id;
    existingQual = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.id, id))
        .limit(1)
    )[0];
    limits.push("AUTONOMOUS_D8_INSERTED_ATOMIC");
  } else {
    limits.push("D8_ALREADY_PRESENT");
  }

  live = {
    ...live,
    restitutionPipelineStatus: "NORA",
    restitutionQualificationId: qualificationId,
    restitutionDossierVersion: dossierVersion,
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
      qualificationId,
      handoffStatus,
      verdict: q.verdict,
      limits: [...limits, "OWNERSHIP_LOST_BEFORE_NORA"],
      pipelineStatus: "PARTIAL",
      criteria: q.criteria,
    };
  }

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
    // C24 — Nora avis write atomic with ownership: single transaction,
    // CAS on noraAnalysisMarkdown IS NULL AND owner+lease+version still valid.
    const noraAt = new Date();
    const liveNora: LiveWithRestitution = {
      ...live,
      restitutionPipelineStatus: "NORA",
      restitutionDossierVersion: dossierVersion,
      restitutionOwnerToken: ownerToken,
      restitutionVersion: version,
      restitutionLeaseExpiresAt: new Date(
        Date.now() + RESTITUTION_LEASE_MS,
      ).toISOString(),
    };
    const noraWrite = await db.transaction(async (tx) => {
      const cas = await tx
        .update(effectAttempts)
        .set({
          resultJson: JSON.stringify(liveNora),
          updatedAt: noraAt,
        })
        .where(
          and(
            eq(effectAttempts.id, row.id),
            sql`${effectAttempts.resultJson}::jsonb->>'restitutionOwnerToken' = ${ownerToken}`,
            sql`COALESCE((${effectAttempts.resultJson}::jsonb->>'restitutionVersion')::int, 0) = ${version}`,
            sql`(
              NULLIF(${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt', '') IS NOT NULL
              AND (${effectAttempts.resultJson}::jsonb->>'restitutionLeaseExpiresAt')::timestamptz > now()
            )`,
          ),
        )
        .returning({ id: effectAttempts.id });
      if (!cas[0]) return { wrote: false as const, reason: "OWNERSHIP" as const };
      const avis = await tx
        .update(realizationQualifications)
        .set({
          noraAnalysisMarkdown: noraMarkdown,
          noraAnalysisAt: noraAt,
          limitsJson: JSON.stringify([
            ...q.limits,
            ...limits,
            `NORA_KIND:${classifyAttachedNoraPayload(noraMarkdown)}`,
            `DOSSIER_VERSION:${dossierVersion}`,
            "NORA_AVIS_ATOMIC_OWNERSHIP",
          ]),
          updatedAt: noraAt,
        })
        .where(
          and(
            eq(realizationQualifications.id, qualificationId!),
            sql`${realizationQualifications.noraAnalysisMarkdown} IS NULL`,
          ),
        )
        .returning({ id: realizationQualifications.id });
      if (!avis[0]) return { wrote: false as const, reason: "AVIS_CAS" as const };
      return { wrote: true as const, reason: "OK" as const };
    });
    if (!noraWrite.wrote) {
      if (noraWrite.reason === "OWNERSHIP") {
        limits.push("OWNERSHIP_LOST_ATOMIC_NORA_AVIS — avis non persisté");
        return {
          ran: true,
          handoffId,
          qualificationId,
          handoffStatus,
          verdict: q.verdict,
          limits,
          pipelineStatus: "PARTIAL",
          criteria: q.criteria,
        };
      }
      limits.push("NORA_AVIS_WRITE_CAS_LOST — concurrent/stale attach refused");
    }
  } else {
    limits.push("NORA_ALREADY_ATTACHED_OR_SKIPPED");
  }

  // C24 reprise — do not assimilate handoff+qual to cognitive COMPLETE.
  const noraLive =
    limits.includes("NORA_COGNITIVE_AUTONOMOUS_CONDUCTOR") ||
    Boolean(
      existingQual?.noraAnalysisMarkdown &&
        /ANALYSE COGNITIVE NORA \(D3\)/.test(existingQual.noraAnalysisMarkdown),
    );
  const noraDeterministicOnly = limits.some((l) =>
    /DETERMINISTIC_SYNTHESIS_AUTONOMOUS/.test(l),
  );
  const pipelineStatus: RestitutionPipelineStatus =
    handoffStatus === "RECEIVED" && qualificationId ? "COMPLETE" : "PARTIAL";
  if (pipelineStatus === "COMPLETE" && noraDeterministicOnly && !noraLive) {
    // Qualification available, but cognitive avis not LIVE — honest label (not assimilation).
    limits.push(
      "RESTITUTION_QUALIFICATION_COMPLETE_COGNITIVE_DETERMINISTIC — pas un avis Nora LIVE",
    );
  }
  if (pipelineStatus === "COMPLETE" && noraLive) {
    limits.push("RESTITUTION_COGNITIVE_LIVE_ATTACHED");
  }
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
    restitutionNoraKind: noraLive
      ? "LIVE_D3"
      : noraDeterministicOnly
        ? "DETERMINISTIC"
        : existingQual?.noraAnalysisMarkdown
          ? "ATTACHED"
          : "NONE",
    limits: [...(live.limits ?? []), ...limits, "AUTONOMOUS_RESTITUTION_C24"],
  };
  if (
    !(await persistPipelineOwned({
      attemptId: row.id,
      ownerToken,
      expectedVersion: version,
      live,
    }))
  ) {
    limits.push("OWNERSHIP_LOST_AT_COMPLETE");
    return {
      ran: true,
      handoffId,
      qualificationId,
      handoffStatus,
      verdict: q.verdict,
      limits,
      pipelineStatus: "PARTIAL",
      criteria: q.criteria,
    };
  }

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
 * Boot path: collect/qualify without LIVE Nora (no storm).
 * Deferred: schedule cognitive attach for dossiers missing Nora avis — does not
 * block register(); does not redispatch Cursor.
 */
export async function resumeIncompleteRestitutions(): Promise<{
  resumed: number;
  attemptIds: string[];
  deferredNora: string[];
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
  const deferredNora: string[] = [];
  let resumed = 0;
  for (const row of rows) {
    const live = parseLive(row.resultJson);
    if (!isTerminal(live, row.status)) continue;
    const st = live.restitutionPipelineStatus;
    if (st === "COMPLETE") {
      // Complete qual but cognitive avis still missing → defer Nora only.
      if (
        live.restitutionQualificationId &&
        (live.restitutionNoraKind === "NONE" ||
          live.restitutionNoraKind === "DETERMINISTIC" ||
          !live.restitutionNoraKind)
      ) {
        deferredNora.push(row.id);
      }
      continue;
    }
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
        // Boot resume: collect/qualify without LIVE Nora storms (criteria+avis).
        const r = await runAutonomousRestitutionAfterTerminal({
          pilotId: row.pilotId,
          projectId: row.projectId,
          attemptId: row.id,
          attachNoraCognitive: false,
        });
        if (r.ran) {
          resumed += 1;
          attemptIds.push(row.id);
          if (
            r.qualificationId &&
            (r.pipelineStatus === "COMPLETE" || r.pipelineStatus === "PARTIAL")
          ) {
            deferredNora.push(row.id);
          }
        }
      } catch {
        /* boot resume must not crash */
      }
    }
  }

  if (
    deferredNora.length > 0 &&
    (process.env.SFIA_AUTONOMOUS_NORA_AVIS || "1").trim() !== "0" &&
    (process.env.SFIA_BOOT_DEFER_NORA || "1").trim() !== "0"
  ) {
    const uniq = [...new Set(deferredNora)];
    setTimeout(() => {
      void (async () => {
        for (const attemptId of uniq) {
          const row = rows.find((r) => r.id === attemptId);
          if (!row) continue;
          try {
            await runAutonomousRestitutionAfterTerminal({
              pilotId: row.pilotId,
              projectId: row.projectId,
              attemptId,
              attachNoraCognitive: true,
            });
          } catch {
            /* deferred Nora must not crash process */
          }
        }
      })();
    }, 2_500);
  }

  return { resumed, attemptIds, deferredNora: [...new Set(deferredNora)] };
}
```

<!-- END FULL FILE projects/sfia-studio-next/web/src/domains/execution/cursor-autonomous-restitution.ts lines=1698 -->

### 8.5 `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts` — INTÉGRAL (85 lignes)

```typescript
import { NextResponse } from "next/server";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const body = (await req.json()) as {
      statement?: string;
      inspectedFingerprint?: string;
      /** Explicit Oui/Non — must be boolean. Absent/null/invalid = no HumanDecision. */
      confirmed?: unknown;
    };
    if (!body.statement || !body.inspectedFingerprint) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    // C10 / T-02 — confirmed must be an explicit boolean.
    // Absent, null, or non-boolean → reject without HumanDecision / mutation.
    if (typeof body.confirmed !== "boolean") {
      return NextResponse.json(
        {
          error: "CONFIRMATION_REQUIRED",
          message:
            "confirmed doit être true (Oui) ou false (Non) — absence/null/invalide = aucun acte D6",
        },
        { status: 400 },
      );
    }
    const result = await authorizeCursorExecution({
      pilotId: session.pilotId,
      projectId,
      attemptId,
      statement: body.statement,
      inspectedFingerprint: body.inspectedFingerprint,
      confirmed: body.confirmed,
    });
    // C24 — D6 Oui must not leave AUTHORIZED orphaned when the browser navigates
    // away before a second /dispatch fetch. Same-request dispatch after authorize.
    if (body.confirmed === true && result.status === "AUTHORIZED") {
      try {
        const dispatched = await dispatchCursorExecution({
          pilotId: session.pilotId,
          projectId,
          attemptId,
        });
        return NextResponse.json({
          ...result,
          status: dispatched.status,
          dispatch: {
            status: dispatched.status,
            idempotent: "idempotent" in dispatched ? dispatched.idempotent : false,
            limits: "limits" in dispatched ? dispatched.limits : undefined,
          },
        });
      } catch (dispatchErr) {
        const mapped = studioErrorResponse(dispatchErr);
        return NextResponse.json(
          {
            ...result,
            status: "AUTHORIZED",
            dispatch: {
              status: "FAILED",
              error: mapped.body.error ?? "DISPATCH_FAILED",
              message: mapped.body.message ?? String((dispatchErr as Error)?.message ?? ""),
            },
          },
          // Authorize succeeded — surface dispatch failure without undoing D6.
          { status: 200 },
        );
      }
    }
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
```

<!-- END FULL FILE projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts lines=85 -->

### 8.6 `projects/sfia-studio-next/web/scripts/qualify-dev.sh` — INTÉGRAL (319 lignes)

```bash
#!/usr/bin/env bash
# C24 — DEV qualification mode (reuse existing DEV lane; not a new QUALIF env).
# Usage:
#   npm run qualify:check
#   npm run qualify:start          # build if needed + next start :3100
#   npm run qualify:browser        # Playwright LIVE against :3100
#   npm run qualify                # check → start → browser smoke
#   npm run qualify:stop
# Does NOT mutate E2E FAKE suite (port 3101 / STUDIO_E2E).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "${ROOT}"

PID_FILE="${ROOT}/.sfia-evidence/qualify-server.pid"
IDENTITY_FILE="${ROOT}/.sfia-evidence/qualify-server.identity.json"
BUILD_META="${ROOT}/.sfia-evidence/qualify-build.json"
HOST="127.0.0.1"
PORT="${SFIA_QUALIFY_PORT:-${STUDIO_PORT:-3100}}"
ACTION="${1:-help}"

mkdir -p "${ROOT}/.sfia-evidence"

load_env() {
  if [[ -f "${ROOT}/.env.local" ]]; then
    # shellcheck disable=SC1091
    eval "$(node "${ROOT}/scripts/export-dev-env-for-live.mjs")"
  fi
  export NODE_ENV=production
  export STUDIO_LANE=DEV
  export STUDIO_DEV_TEST_LOGIN=1
  # Empty-but-set wins over dotenv FORCE=1
  export STUDIO_FORCE_NORA_FIXTURE=
  export STUDIO_NORA_SIMULATED_PROVIDER=
  export STUDIO_E2E=
  export NEXT_PUBLIC_STUDIO_E2E=
  export SFIA_QUALIFY_MODE=1
  export SFIA_QUALIFY_PORT="${PORT}"
  # Session overrides (workspace root, effect mode) after .env.local — never silent SCRIPTED.
  if [[ -f "${ROOT}/.sfia-evidence/qualify-session.env" ]]; then
    # shellcheck disable=SC1091
    set -a
    # shellcheck disable=SC1090
    source "${ROOT}/.sfia-evidence/qualify-session.env"
    set +a
  fi
  # Caller-exported LIVE overrides win last.
  if [[ -n "${SFIA_QUALIFY_WORKSPACE_ROOT:-}" ]]; then
    export SFIA_CURSOR_WORKSPACE_ROOT="${SFIA_QUALIFY_WORKSPACE_ROOT}"
  fi
}

port_http_ok() {
  curl -s -o /dev/null -w "%{http_code}" --max-time 2 "http://${HOST}:${PORT}/login" 2>/dev/null | grep -qE '200|307|302'
}

content_digest() {
  # Content identity beyond mtime: sha256 of sorted path+file hashes.
  (
    cd "${ROOT}"
    printf 'pkg:%s\n' "$(openssl dgst -sha256 package.json 2>/dev/null | awk '{print $NF}')"
    printf 'cfg:%s\n' "$(openssl dgst -sha256 next.config.ts 2>/dev/null | awk '{print $NF}')"
    find src -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.css' -o -name '*.sql' \) \
      2>/dev/null | sort | while IFS= read -r f; do
      printf '%s:%s\n' "$f" "$(openssl dgst -sha256 "$f" 2>/dev/null | awk '{print $NF}')"
    done
  ) | openssl dgst -sha256 2>/dev/null | awk '{print $NF}'
}

session_fingerprint() {
  # Capture LIVE session knobs that must match the running process.
  local ws mode
  ws="${SFIA_CURSOR_WORKSPACE_ROOT:-}"
  mode="${SFIA_CURSOR_EFFECT_MODE:-}"
  printf 'ws:%s|mode:%s\n' "${ws}" "${mode}" | openssl dgst -sha256 2>/dev/null | awk '{print $NF}'
}

write_identity() {
  local pid="$1"
  local bid="$2"
  local digest="$3"
  local started sess
  started="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  sess="$(session_fingerprint)"
  printf '%s\n' "{\"pid\":${pid},\"port\":${PORT},\"host\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${HOST}"),\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"sessionFingerprint\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${sess}"),\"workspaceRoot\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${SFIA_CURSOR_WORKSPACE_ROOT:-}"),\"effectMode\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${SFIA_CURSOR_EFFECT_MODE:-}"),\"startedAt\":\"${started}\",\"mode\":\"qualify-next-start\"}" > "${IDENTITY_FILE}"
}

owned_qualify_pid() {
  if [[ ! -f "${PID_FILE}" ]]; then
    echo ""
    return 0
  fi
  local pid
  pid="$(cat "${PID_FILE}" 2>/dev/null || true)"
  if [[ -z "${pid}" ]] || ! kill -0 "${pid}" 2>/dev/null; then
    echo ""
    return 0
  fi
  # Confirm process is ours: cmdline contains next start and our port, or identity matches.
  local cmd
  cmd="$(ps -p "${pid}" -o command= 2>/dev/null || true)"
  if [[ "${cmd}" == *"next"* ]] && [[ "${cmd}" == *"${PORT}"* || "${cmd}" == *"start"* ]]; then
    echo "${pid}"
    return 0
  fi
  if [[ -f "${IDENTITY_FILE}" ]]; then
    local id_pid
    id_pid="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(String(j.pid||''))}catch{}" "${IDENTITY_FILE}")"
    if [[ "${id_pid}" == "${pid}" ]]; then
      echo "${pid}"
      return 0
    fi
  fi
  echo ""
}

probe_running_server() {
  # Identify build via local BUILD_ID + identity file; HTTP alone is insufficient.
  local bid=""
  local digest=""
  local pid=""
  [[ -f "${ROOT}/.next/BUILD_ID" ]] && bid="$(cat "${ROOT}/.next/BUILD_ID")"
  [[ -f "${BUILD_META}" ]] && digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  pid="$(owned_qualify_pid)"
  if port_http_ok; then
    if [[ -n "${pid}" ]]; then
      echo "qualify: owned server pid=${pid} build=${bid:-unknown} digest=${digest:-unknown} http=ok" >&2
      return 0
    fi
    echo "qualify: http://127.0.0.1:${PORT}/login responds but no owned qualify pid — refuse silent reuse" >&2
    echo "qualify: stop foreign listener manually or free the port, then qualify:start" >&2
    return 1
  fi
  return 2
}

cmd_check() {
  load_env
  npx --yes tsx "${ROOT}/scripts/qualify-check.mts"
}

cmd_build() {
  load_env
  local force="${SFIA_QUALIFY_FORCE_BUILD:-0}"
  local need=0
  local digest
  digest="$(content_digest)"
  local prev_digest=""
  if [[ -f "${BUILD_META}" ]]; then
    prev_digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  fi
  if [[ "${force}" == "1" ]]; then need=1; fi
  if [[ ! -f "${ROOT}/.next/BUILD_ID" ]]; then need=1; fi
  if [[ "${need}" == "0" && -n "${prev_digest}" && "${prev_digest}" != "${digest}" ]]; then
    need=1
    echo "qualify: contentDigest changed — rebuild required" >&2
  fi
  if [[ "${need}" == "0" && -z "${prev_digest}" ]]; then
    # No prior digest: fall back to mtime then record digest after reuse/build.
    if [[ -n "$(find "${ROOT}/src" "${ROOT}/package.json" "${ROOT}/next.config.ts" -newer "${ROOT}/.next/BUILD_ID" 2>/dev/null | head -1)" ]]; then
      need=1
    fi
  fi
  if [[ "${need}" == "0" ]]; then
    local bid
    bid="$(cat "${ROOT}/.next/BUILD_ID")"
    echo "qualify: reuse existing build ${bid} digest=${digest}" >&2
    printf '%s\n' "{\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"reused\":true,\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > "${BUILD_META}"
    return 0
  fi
  echo "qualify: building Next…" >&2
  npm run build
  local bid
  bid="$(cat "${ROOT}/.next/BUILD_ID")"
  export SFIA_BUILD_ID="${bid}"
  digest="$(content_digest)"
  printf '%s\n' "{\"buildId\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${bid}"),\"reused\":false,\"contentDigest\":$(node -e "console.log(JSON.stringify(process.argv[1]))" "${digest}"),\"at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > "${BUILD_META}"
  echo "qualify: BUILD_ID=${bid} digest=${digest}" >&2
}

cmd_start() {
  load_env
  local want_sess want_digest
  want_sess="$(session_fingerprint)"
  want_digest="$(content_digest)"
  if probe_running_server; then
    local have_sess="" have_digest=""
    if [[ -f "${IDENTITY_FILE}" ]]; then
      have_sess="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.sessionFingerprint||'')}catch{}" "${IDENTITY_FILE}")"
      have_digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${IDENTITY_FILE}")"
    fi
    local force="${SFIA_QUALIFY_FORCE_BUILD:-0}"
    if [[ "${force}" == "1" ]]; then
      echo "qualify: SFIA_QUALIFY_FORCE_BUILD=1 — restart owned server" >&2
      cmd_stop
    elif [[ -n "${want_sess}" && "${have_sess}" == "${want_sess}" && "${have_digest}" == "${want_digest}" ]]; then
      echo "qualify: reuse owned server — session+contentDigest match (${want_sess:0:12}…)" >&2
      return 0
    else
      echo "qualify: identity drift (sess have=${have_sess:-none} want=${want_sess:0:12}… digest have=${have_digest:0:12}… want=${want_digest:0:12}…) — restart" >&2
      cmd_stop
    fi
  else
    local probe_rc=$?
    if [[ "${probe_rc}" -eq 1 ]]; then
      exit 4
    fi
  fi
  if [[ -f "${PID_FILE}" ]]; then
    local old
    old="$(cat "${PID_FILE}" || true)"
    if [[ -n "${old}" ]] && kill -0 "${old}" 2>/dev/null; then
      echo "qualify: pid ${old} alive but /login not ready — waiting" >&2
    else
      rm -f "${PID_FILE}" "${IDENTITY_FILE}"
    fi
  fi
  cmd_build
  local bid digest
  bid="$(cat "${ROOT}/.next/BUILD_ID")"
  digest="$(node -e "try{const j=require(process.argv[1]);process.stdout.write(j.contentDigest||'')}catch{}" "${BUILD_META}")"
  export SFIA_BUILD_ID="${bid}"
  if [[ -z "${SFIA_D8_VERIFY_HMAC_SECRET:-}" ]]; then
    local sec_file="${ROOT}/.sfia-evidence/d8-verify-hmac.secret"
    if [[ ! -f "${sec_file}" ]]; then
      openssl rand -hex 32 > "${sec_file}"
      chmod 600 "${sec_file}"
    fi
    export SFIA_D8_VERIFY_HMAC_SECRET
    SFIA_D8_VERIFY_HMAC_SECRET="$(cat "${sec_file}")"
  fi
  # Ensure workspace root exists before start (LIVE confinement).
  if [[ -n "${SFIA_CURSOR_WORKSPACE_ROOT:-}" ]]; then
    mkdir -p "${SFIA_CURSOR_WORKSPACE_ROOT}"
  fi
  echo "qualify: starting next start ${HOST}:${PORT} build=${bid} digest=${digest} ws=${SFIA_CURSOR_WORKSPACE_ROOT:-unset} mode=${SFIA_CURSOR_EFFECT_MODE:-unset}" >&2
  nohup npx next start -p "${PORT}" -H "${HOST}" \
    > "${ROOT}/.sfia-evidence/qualify-server.log" 2>&1 &
  local pid=$!
  echo "${pid}" > "${PID_FILE}"
  write_identity "${pid}" "${bid}" "${digest}"
  local i=0
  while (( i < 60 )); do
    if port_http_ok; then
      echo "qualify: ready http://${HOST}:${PORT}/login pid=${pid} build=${bid}" >&2
      return 0
    fi
    sleep 1
    i=$((i + 1))
  done
  echo "STOP — qualify server did not become ready on :${PORT}" >&2
  tail -n 40 "${ROOT}/.sfia-evidence/qualify-server.log" >&2 || true
  exit 3
}

cmd_stop() {
  local pid
  pid="$(owned_qualify_pid)"
  if [[ -z "${pid}" ]]; then
    echo "qualify: no owned qualify process to stop (refusing port-wide kill)" >&2
    rm -f "${PID_FILE}"
    # Keep identity for diagnosis unless explicitly cleared.
    return 0
  fi
  echo "qualify: stopping owned pid ${pid}" >&2
  kill "${pid}" 2>/dev/null || true
  sleep 1
  if kill -0 "${pid}" 2>/dev/null; then
    kill -9 "${pid}" 2>/dev/null || true
  fi
  rm -f "${PID_FILE}" "${IDENTITY_FILE}"
  echo "qualify: stopped owned pid ${pid}" >&2
}

cmd_browser() {
  load_env
  if ! port_http_ok; then
    echo "STOP — server not ready; run npm run qualify:start first" >&2
    exit 2
  fi
  local pid
  pid="$(owned_qualify_pid)"
  if [[ -z "${pid}" ]]; then
    echo "qualify: WARN — browser against :${PORT} without owned qualify identity" >&2
  else
    echo "qualify: browser against owned pid=${pid}" >&2
  fi
  export SFIA_QUALIFY_BASE_URL="http://${HOST}:${PORT}"
  if [[ -f "${ROOT}/.next/BUILD_ID" ]]; then
    export SFIA_BUILD_ID
    SFIA_BUILD_ID="$(cat "${ROOT}/.next/BUILD_ID")"
  fi
  npx playwright test -c playwright.qualify.config.ts "$@"
}

cmd_all() {
  cmd_check
  cmd_start
  cmd_browser
}

case "${ACTION}" in
  check) cmd_check ;;
  build) cmd_build ;;
  start) cmd_start ;;
  stop) cmd_stop ;;
  browser) shift; cmd_browser "$@" ;;
  all|qualify) cmd_all ;;
  help|*)
    cat <<EOF
DEV qualification mode (C24) — same DEV lane, explicit LIVE qualify.
  bash scripts/qualify-dev.sh check
  bash scripts/qualify-dev.sh start
  bash scripts/qualify-dev.sh browser [playwright args]
  bash scripts/qualify-dev.sh stop
  bash scripts/qualify-dev.sh all
EOF
    ;;
esac
```

<!-- END FULL FILE projects/sfia-studio-next/web/scripts/qualify-dev.sh lines=319 -->

### 8.7 `projects/sfia-studio-next/web/scripts/qualify-check.mts` — INTÉGRAL (211 lignes)

```typescript
/**
 * C24 — DEV qualification preflight (lane, ports, providers, DB).
 * No secrets printed. Does not start the server.
 * LIVE qualify refuses SCRIPTED Cursor / FAKE Nora as "LIVE OK".
 */
import { config } from "dotenv";
config({ path: ".env.local" });

import { createServer } from "node:net";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import postgres from "postgres";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PORT = Number(process.env.STUDIO_PORT || process.env.SFIA_QUALIFY_PORT || 3100);
const HOST = "127.0.0.1";

type Check = { id: string; ok: boolean; detail: string; live?: boolean };

function mask(v: string | undefined): string {
  if (!v) return "absent";
  return `set(len=${v.length})`;
}

async function portListening(port: number): Promise<boolean> {
  return new Promise((resolve) => {
    const s = createServer();
    s.once("error", () => resolve(true));
    s.once("listening", () => {
      s.close(() => resolve(false));
    });
    s.listen(port, HOST);
  });
}

async function probeDevDatabase(url: string): Promise<Check> {
  if (!url) {
    return { id: "database-probe", ok: false, detail: "DATABASE_URL absent" };
  }
  if (/5434|recette|stable|\bprod\b/i.test(url)) {
    return {
      id: "database-probe",
      ok: false,
      detail: "DATABASE_URL matches protected lane marker — refuse",
    };
  }
  try {
    const sql = postgres(url, { max: 1, connect_timeout: 5, idle_timeout: 5 });
    try {
      const rows = await sql<{ v: number; db: string }[]>`
        select 1::int as v, current_database() as db
      `;
      const db = rows[0]?.db ?? "?";
      const ok =
        rows[0]?.v === 1 &&
        !/recette|stable|e2e|prod/i.test(db) &&
        (/sfia_next_dev/i.test(db) || /dev/i.test(db) || db.length > 0);
      return {
        id: "database-probe",
        ok,
        detail: ok
          ? `connected current_database=${db}`
          : `unexpected database name=${db}`,
      };
    } finally {
      await sql.end({ timeout: 2 });
    }
  } catch (e) {
    return {
      id: "database-probe",
      ok: false,
      detail: `connect failed: ${String((e as Error)?.message ?? e).slice(0, 120)}`,
    };
  }
}

async function main() {
  const checks: Check[] = [];
  const lane = (process.env.STUDIO_LANE || "").trim().toUpperCase();
  checks.push({
    id: "lane",
    ok: lane === "DEV",
    detail: `STUDIO_LANE=${lane || "(empty)"}`,
  });

  const dbUrl = process.env.DATABASE_URL || "";
  const dbShapeOk =
    Boolean(dbUrl) &&
    !/5434|recette|stable|\bprod\b/i.test(dbUrl) &&
    (/:5433\b/.test(dbUrl) || /sfia_next_dev|localhost|127\.0\.0\.1/.test(dbUrl));
  checks.push({
    id: "database-shape",
    ok: dbShapeOk,
    detail: dbShapeOk
      ? "DATABASE_URL looks DEV (no RECETTE/STABLE markers)"
      : "DATABASE_URL missing or not DEV",
  });
  checks.push(await probeDevDatabase(dbUrl));

  checks.push({
    id: "test-login",
    ok: process.env.STUDIO_DEV_TEST_LOGIN === "1",
    detail: `STUDIO_DEV_TEST_LOGIN=${process.env.STUDIO_DEV_TEST_LOGIN || "0"}`,
  });

  const fixture =
    process.env.STUDIO_FORCE_NORA_FIXTURE === "1" ||
    process.env.STUDIO_NORA_SIMULATED_PROVIDER === "1" ||
    process.env.STUDIO_E2E === "1";
  checks.push({
    id: "no-fake-nora",
    ok: !fixture,
    live: !fixture,
    detail: fixture
      ? "FAKE/SIM/E2E flags set — refuse LIVE qualify"
      : "fixture/SIM/E2E cleared for LIVE",
  });

  checks.push({
    id: "openai",
    ok: Boolean((process.env.OPENAI_API_KEY || "").trim()),
    live: Boolean((process.env.OPENAI_API_KEY || "").trim()) && !fixture,
    detail: `OPENAI_API_KEY=${mask(process.env.OPENAI_API_KEY)}`,
  });

  const effectMode = (process.env.SFIA_CURSOR_EFFECT_MODE || "").trim().toUpperCase();
  let cursorSource: "ENV" | "FILE_CREDENTIAL_STORE" | "NONE" = "NONE";
  if ((process.env.CURSOR_API_KEY || "").trim()) {
    cursorSource = "ENV";
  } else {
    try {
      const { FileCredentialStore } = await import("@cursor/sdk");
      const store = new FileCredentialStore();
      const creds = await store.load();
      const key = typeof creds?.apiKey === "string" ? creds.apiKey.trim() : "";
      if (key) cursorSource = "FILE_CREDENTIAL_STORE";
    } catch {
      /* store unavailable */
    }
  }
  // SCRIPTED is never LIVE — qualify LIVE requires Cursor LIVE + key.
  const cursorLive =
    effectMode === "LIVE" &&
    (cursorSource === "ENV" || cursorSource === "FILE_CREDENTIAL_STORE");
  checks.push({
    id: "cursor-sdk",
    ok: cursorLive,
    live: cursorLive,
    detail:
      effectMode === "SCRIPTED"
        ? `mode=SCRIPTED source=${cursorSource} — NOT LIVE (refuse as LIVE qualify)`
        : `mode=${effectMode || "(unset)"} source=${cursorSource} live=${cursorLive}`,
  });

  const listening = await portListening(PORT);
  checks.push({
    id: "port",
    ok: true,
    detail: listening
      ? `${HOST}:${PORT} already listening (reuse allowed for qualify:browser)`
      : `${HOST}:${PORT} free`,
  });

  const buildIdPath = join(ROOT, ".next", "BUILD_ID");
  const hasBuild = existsSync(buildIdPath);
  const buildId = hasBuild ? readFileSync(buildIdPath, "utf8").trim() : null;
  const metaPath = join(ROOT, ".sfia-evidence", "qualify-build.json");
  let metaDetail = "no qualify-build.json";
  if (existsSync(metaPath)) {
    try {
      const meta = JSON.parse(readFileSync(metaPath, "utf8")) as {
        buildId?: string;
        contentDigest?: string;
      };
      metaDetail = `meta.buildId=${meta.buildId ?? "?"} digest=${meta.contentDigest ?? "absent"}`;
    } catch {
      metaDetail = "qualify-build.json unreadable";
    }
  }
  checks.push({
    id: "build",
    ok: true,
    detail: hasBuild
      ? `BUILD_ID=${buildId}; ${metaDetail}`
      : `no .next/BUILD_ID — qualify:start will build; ${metaDetail}`,
  });

  const failed = checks.filter((c) => !c.ok);
  const liveCapable = checks
    .filter((c) => c.live === true)
    .map((c) => c.id);
  const report = {
    at: new Date().toISOString(),
    host: HOST,
    port: PORT,
    checks,
    ok: failed.length === 0,
    failIds: failed.map((c) => c.id),
    liveCapable,
    note:
      "SCRIPTED Cursor never counts as LIVE. database-probe opens a real DEV connection.",
  };
  console.log(JSON.stringify(report, null, 2));
  if (failed.length) process.exit(2);
}

main().catch((e) => {
  console.error(String(e?.stack || e));
  process.exit(1);
});
```

<!-- END FULL FILE projects/sfia-studio-next/web/scripts/qualify-check.mts lines=211 -->

### 8.8 `projects/sfia-studio-next/web/playwright.qualify.config.ts` — INTÉGRAL (27 lignes)

```typescript
import { defineConfig } from "@playwright/test";

/**
 * C24 — DEV qualification BROWSER (LIVE).
 * Targets operator DEV :3100 started via `npm run qualify:start`.
 * Never starts e2e-web-server.sh / never forces Nora FAKE.
 * Standard `npm run test:e2e` remains FAKE on :3101.
 */
const baseURL =
  process.env.SFIA_QUALIFY_BASE_URL || "http://127.0.0.1:3100";

export default defineConfig({
  testDir: "tests/qualify",
  timeout: 180_000,
  fullyParallel: false,
  workers: 1,
  retries: 0,
  reporter: [["list"], ["json", { outputFile: ".sfia-evidence/qualify-playwright.json" }]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "off",
  },
  // Operator must have started qualify:start — do not spawn FAKE E2E server.
  webServer: undefined,
});
```

<!-- END FULL FILE projects/sfia-studio-next/web/playwright.qualify.config.ts lines=27 -->

### 8.9 `projects/sfia-studio-next/web/tests/qualify/c24-director-two-realizations.spec.ts` — INTÉGRAL (534 lignes)

```typescript
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

/**
 * C24 director scenario — ONE project, TWO successive governed realizations.
 * Playwright automates Pilote clicks only — does not seed contracts / verdicts.
 */
const EVIDENCE = path.resolve(__dirname, "../../.sfia-evidence/qualify-director");
const LONG = 240_000;

test.describe.configure({ mode: "serial" });
test.setTimeout(900_000);

test.beforeAll(() => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

async function sendNora(page: import("@playwright/test").Page, text: string) {
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");
  await expect(draft).toBeVisible({ timeout: 60_000 });
  await expect(draft).toHaveValue("", { timeout: 120_000 });
  // Capture prior assistant count so we wait for a new COMPLETE turn.
  const priorNora = await page.locator(".fig-msg-nora").count();
  await draft.fill(text);
  await expect(send).toBeEnabled({ timeout: 15_000 });
  await send.click();
  await expect(draft).toHaveValue("", { timeout: LONG });
  // Wait for LIVE Nora turn to finish — otherwise READY/prepare race a still-running
  // turn that advances cognitive revision past the contract filiation.
  const status = page.getByTestId("thread-nora-status");
  if (await status.count()) {
    await expect(status).toContainText(/COMPLETE|FAILED|UNKNOWN|INTERRUPTED/i, {
      timeout: LONG,
    });
  } else {
    await expect
      .poll(async () => page.locator(".fig-msg-nora").count(), { timeout: LONG })
      .toBeGreaterThan(priorNora);
  }
}

async function openExecutionSurface(
  page: import("@playwright/test").Page,
  projectId: string,
) {
  await page.goto(`/projects/${projectId}?surface=execution`);
  await expect(page.getByTestId("realization-contracts")).toBeVisible({
    timeout: 60_000,
  });
}

test("Director — investigation → R1 → bilan → continuity → R2", async ({
  page,
}) => {
  const report: Record<string, unknown> = {
    at: new Date().toISOString(),
    buildId: process.env.SFIA_BUILD_ID || null,
    workspaceRoot: process.env.SFIA_CURSOR_WORKSPACE_ROOT || null,
  };

  await page.goto("/portfolio");
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 60_000,
  });
  const preparationId = await openNewPreparation(page);
  // Initial test data (allowed): durable document Nora can CONSULT before READY.
  const docRes = await page.request.post(
    `/api/preparations/${preparationId}/documents`,
    {
      data: {
        title: "Widget service — état initial",
        contentMarkdown: [
          "# Widget service",
          "",
          "## Fichiers",
          "- `src/widget.js` — `processWidget(input)` trim une string ; TypeError sinon.",
          "- `src/config.js` — `WIDGET_LIMITS.maxLen = 10000`.",
          "- `tests/widget.test.js` — test node:test du trim.",
          "",
          "## Contraintes",
          "- Pas de réseau dans les tests.",
          "- Workspace Git de test isolé du worktree Studio.",
        ].join("\n"),
        correlationKey: `c24-director-doc-${Date.now()}`,
      },
    },
  );
  report.seedDocumentOk = docRes.ok();
  const projectName = uniqueProjectName("C24 Director");
  const projectId = await constituteAndCreateProject(page, {
    name: projectName,
    summary:
      "Service widget multi-fichiers — deux réalisations gouvernées successives",
    alreadyUnique: true,
  });
  report.projectId = projectId;
  report.projectName = projectName;
  report.preparationId = preparationId;

  // --- Étape A: investigation multi-sources ---
  await sendNora(
    page,
    [
      "Lis d'abord le document « Widget service — état initial » (outil de lecture document),",
      "puis investigue : (1) ce que fait processWidget aujourd'hui d'après ce document,",
      "(2) la version Node LTS recommandée via le site officiel nodejs.org,",
      "(3) si nous devons rester sur une LTS pour ce service interne.",
      "Cite tes sources réellement consultées et signale ce qui n'est pas vérifié.",
    ].join(" "),
  );
  const thread = page.getByTestId("nora-thread");
  await expect(thread).toBeVisible();
  const afterA = ((await thread.locator(".fig-msg-nora").last().textContent()) || "").trim();
  report.stepA = {
    assistantHead: afterA.slice(0, 500),
    len: afterA.length,
  };
  expect(afterA.length).toBeGreaterThan(80);
  await page.screenshot({
    path: path.join(EVIDENCE, "a-investigation.png"),
    fullPage: true,
  });

  // --- Étape B: first contract naturally ---
  await sendNora(
    page,
    [
      "Prépare maintenant un contrat technique Cursor pour une première intervention :",
      "ajouter processWidgetSafe(input) qui refuse les non-string (TypeError) et délègue le trim à processWidget pour les strings,",
      "mettre à jour les tests node:test, sans réseau. Inclure critères d'acceptation et preuves attendues.",
      "Utilise l'outil submit_cursor_contract_production.",
    ].join(" "),
  );
  await page.waitForTimeout(3000);
  await openExecutionSurface(page, projectId);

  // Wait for a contract to appear (Nora-produced DRAFT)
  let contractBtn = page.locator("[data-testid^=contract-select-]").first();
  await expect(contractBtn).toBeVisible({ timeout: LONG });
  const contractTestId = await contractBtn.getAttribute("data-testid");
  const contractId = contractTestId?.replace("contract-select-", "") ?? "";
  report.r1ContractId = contractId;
  await contractBtn.click();
  await expect(page.getByTestId("contract-viewer")).toBeVisible({ timeout: 30_000 });
  await page.getByTestId("contract-instruction-toggle").click().catch(() => undefined);
  await page.screenshot({
    path: path.join(EVIDENCE, "b-contract-r1.png"),
    fullPage: true,
  });

  // READY server act from UI — if refused, ask Nora to consult then retry (product path).
  async function tryReady(id: string): Promise<boolean> {
    const btn = page.getByTestId(`contract-ready-${id}`);
    if (!(await btn.count())) return false;
    await btn.click();
    await page.waitForTimeout(2500);
    const st = page.getByTestId("realization-status");
    if (await st.count()) {
      report.readyStatus = await st.textContent();
    }
    await openExecutionSurface(page, projectId);
    return (await page.getByTestId(`contract-prepare-${id}`).count()) > 0;
  }

  let readyOk = await tryReady(contractId);
  if (!readyOk) {
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(
      page,
      [
        "READY a été refusé (sources ou filiation cognitive).",
        "Sans poursuivre d'autre discussion : relis le document Widget (corps complet),",
        "puis appelle submit_cursor_contract_production pour un NOUVEAU contrat processWidgetSafe",
        "lié à ce tour (filiation courante). Préparer ≠ autoriser.",
      ].join(" "),
    );
    await openExecutionSurface(page, projectId);
    // Newest contract carries the current cognitive revision filiation.
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const latest = all.nth(count - 1);
    const tid = await latest.getAttribute("data-testid");
    const nid = tid?.replace("contract-select-", "") ?? contractId;
    report.r1ContractIdRetry = nid;
    await latest.click();
    readyOk = await tryReady(nid);
    if (readyOk) report.r1ContractId = nid;
  }

  let activeContractId = String(report.r1ContractId);

  async function refreshNewestContractAndReady(prompt: string): Promise<void> {
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(page, prompt);
    await openExecutionSurface(page, projectId);
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const latest = all.nth(count - 1);
    const tid = await latest.getAttribute("data-testid");
    activeContractId = tid?.replace("contract-select-", "") ?? activeContractId;
    report.r1ContractId = activeContractId;
    await latest.click();
    await tryReady(activeContractId);
  }

  async function prepareUntilD6(): Promise<void> {
    for (let attempt = 0; attempt < 3; attempt += 1) {
      await openExecutionSurface(page, projectId);
      const prepareBtn = page.getByTestId(`contract-prepare-${activeContractId}`);
      if (!(await prepareBtn.count())) {
        await refreshNewestContractAndReady(
          [
            "Contrat non READY pour prepare. Relis le document Widget,",
            "puis submit_cursor_contract_production pour un NOUVEAU contrat lié à ce tour.",
          ].join(" "),
        );
        continue;
      }
      await prepareBtn.click();
      const d6 = page.getByTestId("d6-confirm-launch");
      const prepStatus = page.getByTestId("realization-status");
      let resolved = "wait";
      const deadline = Date.now() + 60_000;
      while (Date.now() < deadline) {
        if (await d6.count()) {
          resolved = "d6";
          break;
        }
        if (await prepStatus.count()) {
          const t = (await prepStatus.textContent()) || "";
          if (/refusé|refus|non applicable|mismatch|ERROR|INVALID|filiation/i.test(t)) {
            resolved = `fail:${t}`;
            break;
          }
        }
        await page.waitForTimeout(1500);
      }
      if (resolved === "d6") return;
      report.prepareFail = resolved === "wait" ? "fail:timeout" : resolved;
      await refreshNewestContractAndReady(
        [
          "Le prepare a échoué (mandat/filiation). Relis le document Widget,",
          "puis submit_cursor_contract_production pour un NOUVEAU contrat à la révision courante.",
        ].join(" "),
      );
    }
    throw new Error(`R1: prepare never reached D6 — ${String(report.prepareFail ?? "unknown")}`);
  }

  await prepareUntilD6();
  const fp = await page.getByTestId("d6-confirm-fingerprint").textContent();
  report.r1Fingerprint = fp;
  await page.getByTestId("d6-confirm-yes").click();
  // Wait for authorize+dispatch to finish BEFORE any page.goto (nav aborts in-flight fetch).
  await expect
    .poll(
      async () => {
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/Dispatch accepté|DISPATCHED|COMPLETED|AMBIGUOUS|FAILED/i.test(t)) return t;
          if (/Dispatch refusé|Autorisation refusée/i.test(t)) return `fail:${t}`;
        }
        if (!(await page.getByTestId("d6-confirm-launch").count())) {
          // Dialog closed — soft reload via attempts list without full navigation yet.
          const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
          const joined = texts.join(" ");
          if (/DISPATCHED|COMPLETED|FAILED|AMBIGUOUS|RUNNING/i.test(joined)) return joined;
        }
        return "wait";
      },
      { timeout: 90_000, intervals: [1_000, 2_000, 3_000] },
    )
    .not.toMatch(/^fail:/);
  await expect
    .poll(
      async () => {
        // Prefer soft reload of surface only after dispatch advanced past AUTHORIZED.
        await openExecutionSurface(page, projectId);
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        return texts.join(" ");
      },
      { timeout: LONG, intervals: [8_000, 12_000, 15_000] },
    )
    // DISPATCHED alone is insufficient — wait for terminal attempt + restitution signal.
    .toMatch(/COMPLETED|FAILED|AMBIGUOUS/i);

  await page.screenshot({
    path: path.join(EVIDENCE, "c-after-dispatch-r1.png"),
    fullPage: true,
  });

  // Open bilan (results surface) + discuss with Nora (no auto-send)
  await page.goto(`/projects/${projectId}?surface=publication`);
  const bilanBtn = page.locator("[data-testid^=attempt-bilan-]").first();
  await expect(bilanBtn).toBeVisible({ timeout: LONG });
  // Retries: restitution may still be attaching handoff/qual after COMPLETED.
  await expect
    .poll(
      async () => {
        await bilanBtn.click();
        if (await page.getByTestId("realization-bilan").count()) return "bilan";
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/en cours|absent|MISSING/i.test(t)) return "wait-dossier";
          if (/requalification|Bilan D8|PARTIAL|CONFORMING|INDETERMINATE/i.test(t)) {
            return t;
          }
        }
        return "wait";
      },
      { timeout: LONG, intervals: [3_000, 5_000, 8_000] },
    )
    .toMatch(/bilan|Bilan D8|PARTIAL|CONFORMING|INDETERMINATE|requalification/i);
  await expect(page.getByTestId("realization-bilan")).toBeVisible({
    timeout: 60_000,
  });
  report.r1Bilan = {
    attemptId: await page.getByTestId("bilan-attempt-id").textContent(),
    bodyHead: ((await page.getByTestId("realization-bilan").textContent()) || "").slice(
      0,
      400,
    ),
  };
  const discuss = page.getByTestId("bilan-discuss-nora");
  if (await discuss.count()) {
    await discuss.click();
  }

  // --- Étape D/E: continuity + second realization in SAME project ---
  await page.goto(`/projects/${projectId}?surface=travail`);
  await sendNora(
    page,
    [
      "Tu as le brouillon de dossier D8 dans le compositeur (référence attempt/contrat/version).",
      "En continuité sur CE projet : rappelle le verdict D8 et les limites réellement attachés.",
      "Décisions Pilote pour la suite: Node LTS; tests sans réseau; maxLen=10000 déjà en config.",
      "Ferme toute question déterminante encore ouverte (ANSWERED + answerSummary),",
      "relis le document Widget, puis prépare un NOUVEAU contrat Cursor distinct pour",
      "ajouter processWidgetMaxLen qui refuse les chaînes > WIDGET_LIMITS.maxLen, avec tests.",
      "Utilise submit_cursor_contract_production. Critères différents de processWidgetSafe.",
    ].join(" "),
  );
  const afterD = ((await thread.locator(".fig-msg-nora").last().textContent()) || "").trim();
  report.stepD = {
    recalls: /PARTIAL|CONFORMING|INDETERMINATE|verdict|D8|limite|dossier/i.test(afterD),
    head: afterD.slice(0, 500),
  };

  await openExecutionSurface(page, projectId);

  /** Try READY on every non-R1 contract (newest first) until one qualifies. */
  async function readyAnyOtherThan(excludeId: string): Promise<string> {
    const all = page.locator("[data-testid^=contract-select-]");
    await expect.poll(async () => all.count(), { timeout: LONG }).toBeGreaterThan(0);
    const count = await all.count();
    const tried: string[] = [];
    for (let i = count - 1; i >= 0; i -= 1) {
      const el = all.nth(i);
      const tid = await el.getAttribute("data-testid");
      const id = tid?.replace("contract-select-", "") ?? "";
      if (!id || id === excludeId) continue;
      tried.push(id);
      await el.click();
      if (await tryReady(id)) {
        report.r2ReadyStatus = report.readyStatus;
        return id;
      }
    }
    report.r2TriedContracts = tried;
    report.r2ReadyStatus = report.readyStatus;
    return "";
  }

  await expect
    .poll(async () => page.locator("[data-testid^=contract-select-]").count(), {
      timeout: LONG,
    })
    .toBeGreaterThanOrEqual(2);
  report.contractCountAfterR2Prep = await page
    .locator("[data-testid^=contract-select-]")
    .count();

  let r2Id = await readyAnyOtherThan(activeContractId);
  if (!r2Id) {
    const openQ = String(report.r2ReadyStatus ?? report.readyStatus ?? "");
    for (const prompt of [
      [
        "READY R2 refusé — investigation incomplète.",
        openQ ? `Statut serveur: ${openQ}.` : "",
        "Ferme d'abord toute question déterminante ouverte (determiningQuestions → ANSWERED",
        "avec answerSummary étayé). Décisions Pilote pour ce service interne:",
        "Node LTS OK; pas de réseau dans les tests; maxLen=10000 déjà dans config;",
        "processWidgetMaxLen doit refuser les strings trop longues.",
        "Puis relis le document Widget (CONSULTED) et submit_cursor_contract_production",
        "pour processWidgetMaxLen lié à CE tour.",
      ]
        .filter(Boolean)
        .join(" "),
      [
        "Encore un échec READY. Réponds explicitement aux questions déterminantes restantes,",
        "relis le document Widget intégralement, puis produis un contrat processWidgetMaxLen neuf",
        "via submit_cursor_contract_production sur la filiation courante (sources CONSULTED).",
      ].join(" "),
    ]) {
      await page.goto(`/projects/${projectId}?surface=travail`);
      await sendNora(page, prompt);
      await openExecutionSurface(page, projectId);
      r2Id = await readyAnyOtherThan(activeContractId);
      if (r2Id) break;
    }
  }
  report.r2ContractId = r2Id;
  if (!r2Id) {
    fs.writeFileSync(
      path.join(EVIDENCE, "director-report.json"),
      JSON.stringify(report, null, 2),
    );
  }
  expect(r2Id).toBeTruthy();
  expect(r2Id).not.toBe(activeContractId);

  // Prepare with filiation recovery (same pattern as R1).
  let r2Prepared = false;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    await openExecutionSurface(page, projectId);
    const prep = page.getByTestId(`contract-prepare-${r2Id}`);
    if (!(await prep.count())) {
      await page.goto(`/projects/${projectId}?surface=travail`);
      await sendNora(
        page,
        "Contrat R2 non préparable. Relis le document Widget puis submit_cursor_contract_production processWidgetMaxLen.",
      );
      await openExecutionSurface(page, projectId);
      r2Id = await readyAnyOtherThan(activeContractId);
      report.r2ContractId = r2Id;
      continue;
    }
    await prep.click();
    const d6 = page.getByTestId("d6-confirm-launch");
    const prepStatus = page.getByTestId("realization-status");
    let resolved = "wait";
    const deadline = Date.now() + 60_000;
    while (Date.now() < deadline) {
      if (await d6.count()) {
        resolved = "d6";
        break;
      }
      if (await prepStatus.count()) {
        const t = (await prepStatus.textContent()) || "";
        if (/refusé|refus|non applicable|mismatch|ERROR|INVALID|filiation/i.test(t)) {
          resolved = `fail:${t}`;
          break;
        }
      }
      await page.waitForTimeout(1500);
    }
    if (resolved === "d6") {
      r2Prepared = true;
      break;
    }
    report.r2PrepareFail = resolved;
    await page.goto(`/projects/${projectId}?surface=travail`);
    await sendNora(
      page,
      "Prepare R2 échoué. Relis le document Widget puis submit_cursor_contract_production processWidgetMaxLen à la révision courante.",
    );
    await openExecutionSurface(page, projectId);
    r2Id = await readyAnyOtherThan(activeContractId);
    report.r2ContractId = r2Id;
  }
  expect(r2Prepared).toBe(true);
  await page.getByTestId("d6-confirm-yes").click();
  await expect
    .poll(
      async () => {
        const st = page.getByTestId("realization-status");
        if (await st.count()) {
          const t = ((await st.textContent()) || "").trim();
          if (/Dispatch accepté|DISPATCHED|COMPLETED|AMBIGUOUS|FAILED/i.test(t)) return t;
          if (/Dispatch refusé|Autorisation refusée/i.test(t)) return `fail:${t}`;
        }
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        const joined = texts.join(" ");
        if (/DISPATCHED|COMPLETED|FAILED|AMBIGUOUS|RUNNING/i.test(joined)) return joined;
        return "wait";
      },
      { timeout: 90_000, intervals: [1_000, 2_000, 3_000] },
    )
    .not.toMatch(/^fail:/);
  report.r2Dispatched = true;

  await expect
    .poll(
      async () => {
        await openExecutionSurface(page, projectId);
        // Need TWO terminal attempts for R1+R2.
        const texts = await page.locator("[data-testid^=attempt-]").allTextContents();
        const terminals = texts.filter((t) =>
          /COMPLETED|FAILED|AMBIGUOUS/i.test(t),
        );
        return terminals.length >= 2 ? texts.join(" ") : `pending:${texts.join(" ")}`;
      },
      { timeout: LONG, intervals: [10_000, 15_000] },
    )
    .toMatch(/COMPLETED|FAILED|AMBIGUOUS/i);

  await page.screenshot({
    path: path.join(EVIDENCE, "e-after-r2.png"),
    fullPage: true,
  });
  report.ok =
    Boolean(report.r1ContractId) &&
    Boolean(report.r2ContractId) &&
    report.r2ContractId !== report.r1ContractId &&
    Boolean(report.r2Dispatched);
  fs.writeFileSync(
    path.join(EVIDENCE, "director-report.json"),
    JSON.stringify(report, null, 2),
  );
  expect(report.r1ContractId).toBeTruthy();
  expect(report.r2Dispatched).toBe(true);
  expect((report.stepD as { recalls?: boolean }).recalls).toBe(true);
});
```

<!-- END FULL FILE projects/sfia-studio-next/web/tests/qualify/c24-director-two-realizations.spec.ts lines=534 -->

### 8.10 `projects/sfia-studio-next/web/tests/qualify/c24-browser-live-smoke.spec.ts` — INTÉGRAL (128 lignes)

```typescript
import { test, expect } from "@playwright/test";
import fs from "node:fs";
import path from "node:path";
import {
  openNewPreparation,
  constituteAndCreateProject,
  uniqueProjectName,
} from "../e2e/helpers/g4-chat-first";

/**
 * C24 qualify — real Chromium against DEV :3100 (LIVE Nora).
 * AUTOMATE interactions: yes. SIMULATE Nora/Cursor: no.
 */
const EVIDENCE = path.resolve(__dirname, "../../.sfia-evidence/qualify-browser");

test.describe.configure({ mode: "serial" });

test.beforeAll(() => {
  fs.mkdirSync(EVIDENCE, { recursive: true });
});

test("Q0 — /login loads and DEV session opens portfolio", async ({ page }) => {
  const res = await page.goto("/login", { waitUntil: "domcontentloaded" });
  expect(res?.ok() || res?.status() === 304).toBeTruthy();
  // Auto-session or test login → portfolio
  await page.waitForURL(/\/(portfolio|projects|preparations|login)/, {
    timeout: 60_000,
  });
  if (page.url().includes("/login")) {
    const testBtn = page.getByRole("button", {
      name: /connexion de test|test login|entrer en session/i,
    });
    if (await testBtn.count()) {
      await testBtn.first().click();
    } else {
      // Force auto-session API then navigate
      const auto = await page.request.post("/api/dev/auto-session");
      expect(auto.ok()).toBeTruthy();
      await page.goto("/portfolio");
    }
  }
  await page.waitForURL("**/portfolio**", { timeout: 60_000 });
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 30_000,
  });
  await page.screenshot({
    path: path.join(EVIDENCE, "q0-portfolio.png"),
    fullPage: true,
  });
  fs.writeFileSync(
    path.join(EVIDENCE, "q0.json"),
    JSON.stringify(
      {
        at: new Date().toISOString(),
        buildId: process.env.SFIA_BUILD_ID || null,
        url: page.url(),
        ok: true,
      },
      null,
      2,
    ),
  );
});

test("Q1 — Mission 1 fragment: project + Nora LIVE reply", async ({ page }) => {
  await page.goto("/portfolio");
  await expect(page.getByTestId("portfolio-new-prep")).toBeVisible({
    timeout: 30_000,
  });
  await openNewPreparation(page);
  const projectName = uniqueProjectName("C24 Qualif M1");
  const projectId = await constituteAndCreateProject(page, {
    name: projectName,
    summary: "Qualification C24 — investigation Node LTS",
    alreadyUnique: true,
  });
  expect(projectId).toBeTruthy();

  // Project conversation composer (Nora LIVE)
  const draft = page.getByTestId("thread-draft");
  const send = page.getByTestId("thread-send");
  await expect(draft).toBeVisible({ timeout: 60_000 });
  const prompt =
    "Peux-tu vérifier la version Node.js LTS actuelle sur le site officiel et me recommander si nous devons rester sur une LTS pour un service API Node interne ? Cite tes sources.";
  await draft.fill(prompt);
  await expect(send).toBeEnabled({ timeout: 10_000 });
  await send.click();

  // Wait for turn completion: draft cleared (Nora finished) — not user-prompt echo.
  await expect(draft).toHaveValue("", { timeout: 180_000 });
  await expect(page.getByText("deterministic-fixture", { exact: false })).toHaveCount(0);

  const thread = page.getByTestId("nora-thread");
  await expect(thread).toBeVisible({ timeout: 30_000 });
  // Assistant bubble must contain recommendation language beyond the user prompt echo.
  const assistant = thread.locator(".fig-msg-nora, [data-role='assistant']").last();
  await expect(assistant).toBeVisible({ timeout: 60_000 });
  const assistantText = ((await assistant.textContent()) || "").trim();
  expect(assistantText.length).toBeGreaterThan(80);
  expect(assistantText.toLowerCase()).not.toEqual(prompt.toLowerCase());

  const liveBadge = page.getByText(/openai-agents-sdk-live|gpt-6\.2-sol/i);
  const liveCount = await liveBadge.count();
  await page.screenshot({
    path: path.join(EVIDENCE, "q1-m1-nora.png"),
    fullPage: true,
  });
  const ok = assistantText.length > 80;
  fs.writeFileSync(
    path.join(EVIDENCE, "q1-m1.json"),
    JSON.stringify(
      {
        at: new Date().toISOString(),
        buildId: process.env.SFIA_BUILD_ID || null,
        projectId,
        projectName,
        prompt,
        liveBadgeObserved: liveCount > 0,
        assistantHead: assistantText.slice(0, 400),
        url: page.url(),
        ok,
      },
      null,
      2,
    ),
  );
  expect(ok).toBe(true);
});
```

<!-- END FULL FILE projects/sfia-studio-next/web/tests/qualify/c24-browser-live-smoke.spec.ts lines=128 -->

## 9. Fichiers complémentaires DIRTY (intégral)

### 9.1 `projects/sfia-studio-next/web/src/domains/proofs/studio-verify-authority.ts` — INTÉGRAL (293 lignes)

```typescript
/**
 * C24 reprise — Studio-owned verification authority, distinct from Cursor workspace FS.
 *
 * Workspace JSON with verifiedBy=STUDIO_ISOLATED_SUBPROCESS is NOT certifying by itself:
 * an executor can write that file. Certifying records live in this Studio-side registry
 * keyed by attempt + contract + verifyId, with HMAC integrity.
 *
 * Durability (C24 qualify): when SFIA_D8_VERIFY_HMAC_SECRET is set (or a Studio-owned
 * secret file under .sfia-evidence/), records persist to a Studio-owned JSON file
 * outside the Cursor workspace so restart does not silently lose authority.
 *
 * Product path must not execute untrusted workspace code unless
 * SFIA_D8_ISOLATED_VERIFY_PROVEN=1 AND an explicit Studio verification plan
 * (never package.json alone as authorization).
 */

import {
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";

export type StudioVerifyRecord = {
  attemptId: string;
  contractFingerprint: string;
  verifyId: string;
  ok: boolean;
  exitCode: number | null;
  observedAt: string;
  contentVersionSha256: string | null;
  argvDigest: string | null;
  hmac: string;
};

const store = new Map<string, StudioVerifyRecord>();
let hydrated = false;

function storeKey(
  attemptId: string,
  contractFingerprint: string,
  verifyId: string,
): string {
  return `${attemptId}::${contractFingerprint}::${verifyId}`;
}

function authorityDir(): string {
  const fromEnv = (process.env.SFIA_D8_VERIFY_AUTHORITY_DIR || "").trim();
  if (fromEnv) return fromEnv;
  // Studio-owned evidence dir next to web package — never under Cursor workspace cwd.
  return join(process.cwd(), ".sfia-evidence");
}

function persistPath(): string {
  return join(authorityDir(), "studio-verify-authority.json");
}

function hmacSecret(): string {
  const fromEnv = (process.env.SFIA_D8_VERIFY_HMAC_SECRET || "").trim();
  if (fromEnv.length >= 16) return fromEnv;
  // Durable Studio-owned secret file (qualify:start writes this).
  try {
    const secretFile = join(authorityDir(), "d8-verify-hmac.secret");
    if (existsSync(secretFile)) {
      const s = readFileSync(secretFile, "utf8").trim();
      if (s.length >= 16) return s;
    }
    mkdirSync(dirname(secretFile), { recursive: true });
    const minted = randomBytes(32).toString("hex");
    writeFileSync(secretFile, minted, { mode: 0o600 });
    return minted;
  } catch {
    /* fall through to ephemeral */
  }
  const g = globalThis as { __sfiaD8VerifySecret?: string };
  if (!g.__sfiaD8VerifySecret) {
    g.__sfiaD8VerifySecret = randomBytes(32).toString("hex");
  }
  return g.__sfiaD8VerifySecret;
}

function sign(payload: Omit<StudioVerifyRecord, "hmac">): string {
  const body = JSON.stringify({
    attemptId: payload.attemptId,
    contractFingerprint: payload.contractFingerprint,
    verifyId: payload.verifyId,
    ok: payload.ok,
    exitCode: payload.exitCode,
    observedAt: payload.observedAt,
    contentVersionSha256: payload.contentVersionSha256,
    argvDigest: payload.argvDigest,
  });
  return createHmac("sha256", hmacSecret()).update(body).digest("hex");
}

function hydrateFromDisk(): void {
  if (hydrated) return;
  hydrated = true;
  try {
    const p = persistPath();
    if (!existsSync(p)) return;
    const raw = JSON.parse(readFileSync(p, "utf8")) as {
      records?: StudioVerifyRecord[];
    };
    for (const rec of raw.records ?? []) {
      if (!rec?.attemptId || !rec.verifyId || !rec.hmac) continue;
      store.set(
        storeKey(rec.attemptId, rec.contractFingerprint, rec.verifyId),
        rec,
      );
    }
  } catch {
    /* corrupt file — start empty; limits surface on read */
  }
}

function flushToDisk(): void {
  try {
    const dir = authorityDir();
    mkdirSync(dir, { recursive: true });
    const records = [...store.values()];
    writeFileSync(
      persistPath(),
      JSON.stringify(
        {
          version: 1,
          updatedAt: new Date().toISOString(),
          records,
        },
        null,
        2,
      ),
      { mode: 0o600 },
    );
  } catch {
    /* durable write failure — in-memory still authoritative for this process */
  }
}

export function putStudioVerifyRecord(
  input: Omit<StudioVerifyRecord, "hmac" | "observedAt"> & {
    observedAt?: string;
  },
): StudioVerifyRecord {
  hydrateFromDisk();
  const base: Omit<StudioVerifyRecord, "hmac"> = {
    attemptId: input.attemptId,
    contractFingerprint: input.contractFingerprint,
    verifyId: input.verifyId,
    ok: input.ok,
    exitCode: input.exitCode,
    observedAt: input.observedAt ?? new Date().toISOString(),
    contentVersionSha256: input.contentVersionSha256,
    argvDigest: input.argvDigest,
  };
  const rec: StudioVerifyRecord = { ...base, hmac: sign(base) };
  store.set(
    storeKey(rec.attemptId, rec.contractFingerprint, rec.verifyId),
    rec,
  );
  flushToDisk();
  return rec;
}

export function getStudioVerifyRecord(input: {
  attemptId: string;
  contractFingerprint: string;
  verifyId: string;
  /**
   * When provided, must equal the contentVersionSha256 sealed in the authority
   * record. An older valid HMAC must not certify a modified content version.
   */
  expectedContentVersionSha256?: string | null;
}): { ok: boolean; record: StudioVerifyRecord | null; limits: string[] } {
  hydrateFromDisk();
  const rec = store.get(
    storeKey(input.attemptId, input.contractFingerprint, input.verifyId),
  );
  if (!rec) {
    return {
      ok: false,
      record: null,
      limits: ["STUDIO_VERIFY_AUTHORITY_ABSENT"],
    };
  }
  const expected = sign({
    attemptId: rec.attemptId,
    contractFingerprint: rec.contractFingerprint,
    verifyId: rec.verifyId,
    ok: rec.ok,
    exitCode: rec.exitCode,
    observedAt: rec.observedAt,
    contentVersionSha256: rec.contentVersionSha256,
    argvDigest: rec.argvDigest,
  });
  try {
    const a = Buffer.from(expected, "hex");
    const b = Buffer.from(rec.hmac, "hex");
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      return {
        ok: false,
        record: null,
        limits: ["STUDIO_VERIFY_HMAC_MISMATCH"],
      };
    }
  } catch {
    return {
      ok: false,
      record: null,
      limits: ["STUDIO_VERIFY_HMAC_ERROR"],
    };
  }
  if (
    rec.attemptId !== input.attemptId ||
    rec.contractFingerprint !== input.contractFingerprint ||
    rec.verifyId !== input.verifyId
  ) {
    return {
      ok: false,
      record: null,
      limits: ["STUDIO_VERIFY_BINDING_MISMATCH"],
    };
  }
  const want = (input.expectedContentVersionSha256 || "").trim();
  if (want) {
    const sealed = (rec.contentVersionSha256 || "").trim();
    if (!sealed || sealed !== want) {
      return {
        ok: false,
        record: rec,
        limits: [
          "STUDIO_VERIFY_CONTENT_VERSION_MISMATCH — sealed HMAC does not certify current content",
        ],
      };
    }
  }
  return {
    ok: rec.ok && rec.exitCode === 0,
    record: rec,
    limits: ["STUDIO_VERIFY_AUTHORITY_READ"],
  };
}

/** Clear authority store — tests only. */
export function __resetStudioVerifyAuthorityForTests(): void {
  store.clear();
  hydrated = true;
  try {
    if (existsSync(persistPath())) {
      writeFileSync(persistPath(), JSON.stringify({ version: 1, records: [] }));
    }
  } catch {
    /* ignore */
  }
}

/** Simulate process restart: drop memory, keep durable file — tests only. */
export function __unloadStudioVerifyAuthorityForTests(): void {
  store.clear();
  hydrated = false;
}

/**
 * Effective isolation gate. Subprocess+cwd+scrubbed env alone is NOT proven isolation.
 * Default: disabled → TOOLING GAP / INSUFFICIENT (no CONFORMING via exec path).
 */
export function isStudioIsolatedVerifyExecutionEnabled(
  env: Record<string, string | undefined> = process.env,
): { enabled: boolean; limits: string[] } {
  if ((env.SFIA_D8_ISOLATED_VERIFY_PROVEN || "").trim() !== "1") {
    return {
      enabled: false,
      limits: [
        "ISOLATED_VERIFY_EXECUTION_DISABLED_C24 — subprocess/cwd/scrubbed-env ≠ system isolation; set SFIA_D8_ISOLATED_VERIFY_PROVEN=1 only when a real isolate is available",
      ],
    };
  }
  if ((env.SFIA_D8_VERIFY_PLAN_SOURCE || "").trim() !== "STUDIO_EXPLICIT") {
    return {
      enabled: false,
      limits: [
        "ISOLATED_VERIFY_PLAN_NOT_STUDIO_EXPLICIT — package.json alone is not authorization",
      ],
    };
  }
  return { enabled: true, limits: ["ISOLATED_VERIFY_EXECUTION_ENABLED"] };
}
```

<!-- END FULL FILE projects/sfia-studio-next/web/src/domains/proofs/studio-verify-authority.ts lines=293 -->

### 9.2 `projects/sfia-studio-next/web/tests/integration/ml5-c24-nora-avis-resume.pg.test.ts` — INTÉGRAL (190 lignes)

```typescript
/**
 * C24 — technical COMPLETE without Nora avis must resume avis (no redispatch).
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { mkdtempSync } from "fs";
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
} from "@/domains/execution/cursor-attempt-service";
import { createTechnicalContract } from "@/domains/execution/technical-contract";
import { runAutonomousRestitutionAfterTerminal } from "@/domains/execution/cursor-autonomous-restitution";
import { __resetScriptedCursorRunsForTests } from "@/domains/execution/cursor-sdk-adapter";
import { seedPilotProjectWithCognitiveFiliation } from "../helpers/cognitive-filiation-seed";
import { newId } from "@/lib/ids";
import type { TechnicalContractBody } from "@/domains/execution/types";

function body(): TechnicalContractBody {
  return {
    title: "C24 nora resume",
    engagements: {
      willDo: "resume avis",
      willNotDo: "redispatch",
      expectedResult: "avis attached",
      pilotControl: "D6",
    },
    volets: {
      mission: "c24",
      perimeter: "sandbox",
      capabilitiesAuthority: "scripted",
      stopConditions: "STOP",
      proofsSources: "handoff",
      integrity: "fp",
    },
    instructionText: "scripted resume",
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

describe("C24 cognitive avis resume from technical COMPLETE", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    process.env.SFIA_CURSOR_EFFECT_MODE = "SCRIPTED";
    delete process.env.SFIA_CURSOR_SCRIPTED_PHASED;
    process.env.SFIA_CURSOR_WORKSPACE_ROOT = mkdtempSync(
      join(tmpdir(), "sfia-c24-resume-"),
    );
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
  });

  it(
    "does not return ALREADY_COMPLETE when avis missing and Nora attach enabled",
    async () => {
    __resetScriptedCursorRunsForTests();
    process.env.SFIA_D8_COGNITIVE_LIVE = "0";
    const seed = await seedPilotProjectWithCognitiveFiliation();
    const c = await createTechnicalContract({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      preparationId: seed.preparationId,
      contractKey: `c24-resume-${Date.now()}`,
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
    await dispatchCursorExecution({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
    });

    // First pass: collect/qualify without Nora
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "0";
    const first = await runAutonomousRestitutionAfterTerminal({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      attachNoraCognitive: false,
    });
    expect(first.qualificationId).toBeTruthy();

    // Force technical COMPLETE without avis
    const row = (
      await db
        .select()
        .from(effectAttempts)
        .where(eq(effectAttempts.id, prep.attemptId))
        .limit(1)
    )[0]!;
    const live = JSON.parse(row.resultJson || "{}") as Record<string, unknown>;
    await db
      .update(effectAttempts)
      .set({
        resultJson: JSON.stringify({
          ...live,
          restitutionPipelineStatus: "COMPLETE",
          restitutionNoraKind: "NONE",
          restitutionQualificationId: first.qualificationId,
          restitutionHandoffId: first.handoffId,
        }),
        updatedAt: new Date(),
      })
      .where(eq(effectAttempts.id, prep.attemptId));

    await db
      .update(realizationQualifications)
      .set({
        noraAnalysisMarkdown: null,
        noraAnalysisAt: null,
        updatedAt: new Date(),
      })
      .where(eq(realizationQualifications.attemptId, prep.attemptId));

    // Resume with Nora attach — must not stuck on ALREADY_COMPLETE
    process.env.SFIA_AUTONOMOUS_NORA_AVIS = "1";
    const second = await runAutonomousRestitutionAfterTerminal({
      pilotId: seed.pilotId,
      projectId: seed.projectId,
      attemptId: prep.attemptId,
      attachNoraCognitive: true,
    });
    expect(second.limits?.includes("ALREADY_COMPLETE")).toBe(false);
    expect(
      second.limits?.some((l) =>
        /COGNITIVE_AVIS_RESUME|NORA_COGNITIVE|DETERMINISTIC_SYNTHESIS|NORA_AVIS/.test(
          l,
        ),
      ) || Boolean(second.ran),
    ).toBe(true);

    const q = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(q?.noraAnalysisMarkdown).toBeTruthy();
    // handoff unchanged (no redispatch)
    const h = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, prep.attemptId))
        .limit(1)
    )[0];
    expect(h?.id).toBe(first.handoffId);
  },
    60_000,
  );
});
```

<!-- END FULL FILE projects/sfia-studio-next/web/tests/integration/ml5-c24-nora-avis-resume.pg.test.ts lines=190 -->

### 9.3 `projects/sfia-studio-next/web/tests/unit/ml5-c24-d4-ref-parse.test.ts` — INTÉGRAL (64 lignes)

```typescript
import { describe, expect, it } from "vitest";

/**
 * Mirror of mandate D4 ref parsing — keep in sync with mandate-applicability.ts.
 * Full PG ownership check is covered by director prepare after rebuild.
 */
function parseD4Ref(ref: string): {
  documentId: string | null;
  revisionId: string | null;
  ok: boolean;
} {
  let documentId: string | null = null;
  let revisionId: string | null = null;
  let stripped = ref.trim().replace(/^d4:/i, "").trim();
  const slashRev = stripped.match(
    /^(?:document:)?(doc_[A-Za-z0-9-]+)\/(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
  );
  const atRev = stripped.match(
    /^(?:document:)?(doc_[A-Za-z0-9-]+)@(?:revision:)?(drev_[A-Za-z0-9-]+|rev_[A-Za-z0-9-]+)$/i,
  );
  if (slashRev) {
    documentId = slashRev[1];
    revisionId = slashRev[2];
  } else if (atRev) {
    documentId = atRev[1];
    revisionId = atRev[2];
  } else {
    stripped = stripped
      .replace(/^document:/i, "")
      .replace(/^revision:/i, "")
      .trim();
    if (stripped.startsWith("drev_") || stripped.startsWith("rev_")) {
      revisionId = stripped;
    } else if (stripped.startsWith("doc_")) {
      documentId = stripped.split(/[/@]/)[0] || stripped;
    } else {
      return { documentId: null, revisionId: null, ok: false };
    }
  }
  return { documentId, revisionId, ok: Boolean(documentId || revisionId) };
}

describe("C24 D4 ref parse (journal slash form)", () => {
  it("parses document:doc_/revision:drev_", () => {
    const r = parseD4Ref(
      "document:doc_76b7500a-cd19-49cb-ad88-a4988daf9eb2/revision:drev_4e27edfa-755d-40aa-b111-222233334444",
    );
    expect(r.ok).toBe(true);
    expect(r.documentId).toBe("doc_76b7500a-cd19-49cb-ad88-a4988daf9eb2");
    expect(r.revisionId).toBe("drev_4e27edfa-755d-40aa-b111-222233334444");
  });

  it("parses legacy @ form", () => {
    const r = parseD4Ref("document:doc_abc@drev_xyz");
    expect(r.documentId).toBe("doc_abc");
    expect(r.revisionId).toBe("drev_xyz");
  });

  it("parses bare doc_", () => {
    const r = parseD4Ref("doc_only");
    expect(r.documentId).toBe("doc_only");
    expect(r.revisionId).toBeNull();
  });
});
```

<!-- END FULL FILE projects/sfia-studio-next/web/tests/unit/ml5-c24-d4-ref-parse.test.ts lines=64 -->

---

## 10. Contrôle anti-stub (auto)

Fichiers critiques intégralement embarqués :
- OK `projects/sfia-studio-next/web/src/domains/execution/mandate-applicability.ts` bytes=10544 head+tail embedded
- OK `projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts` bytes=7826 head+tail embedded
- OK `projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx` bytes=26183 head+tail embedded
- OK `projects/sfia-studio-next/web/src/domains/execution/cursor-autonomous-restitution.ts` bytes=54928 head+tail embedded
- OK `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts` bytes=3041 head+tail embedded
- OK `projects/sfia-studio-next/web/scripts/qualify-dev.sh` bytes=11889 head+tail embedded
- OK `projects/sfia-studio-next/web/scripts/qualify-check.mts` bytes=6542 head+tail embedded
- OK `projects/sfia-studio-next/web/playwright.qualify.config.ts` bytes=803 head+tail embedded
- OK `projects/sfia-studio-next/web/tests/qualify/c24-director-two-realizations.spec.ts` bytes=21001 head+tail embedded
- OK `projects/sfia-studio-next/web/tests/qualify/c24-browser-live-smoke.spec.ts` bytes=4371 head+tail embedded
- OK `projects/sfia-studio-next/web/src/domains/proofs/studio-verify-authority.ts` bytes=8571 head+tail embedded
- OK `projects/sfia-studio-next/web/tests/integration/ml5-c24-nora-avis-resume.pg.test.ts` bytes=5950 head+tail embedded
- OK `projects/sfia-studio-next/web/tests/unit/ml5-c24-d4-ref-parse.test.ts` bytes=2160 head+tail embedded

**ANTI_STUB_GATE:** PASS

## 11. Handoff L3

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Message : `docs(review-handoff): publish Next ML5 C24 integrated operational qualification`
- Remplace `ebaa818b` (pack incomplet)
- Produit : aucun commit/push

*Fin Review Pack FULL C24 — republication contenu modifié intégral.*
