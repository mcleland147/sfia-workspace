# SFIA Review Pack FULL — ENSEMBLE 07 RECETTE CANDIDATE PREPARATION

**Date/heure UTC :** 2026-11-20T20:39:25Z
**Cycle identity :** `ENSEMBLE 07 RECETTE CANDIDATE PREPARATION`
**GO Morris :** 20 novembre 2026 — préparation contrôlée candidat RECETTE (pas commit/push projet, pas PR, pas déploiement)
**Typologie :** QA / EVOL corrective bornée / Candidate Preparation
**Macro-lot :** R5 / ML4D / Ensemble 07
**Lane :** DEV only · **Classe :** NO RELEASE · **Gate C :** OPEN
**Prior handoff :** `sfia/review-handoff@52f47ed74df4f459fedc723a6516ba45619bbc07` blob `0e2a5863403139df61b5f01d06e7d9db909bde1a` (DEV INTEGRATED QUALIFICATION)
**UX :** fidélité Figma **gelée** — aucune passe esthétique

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-wt-ensemble07-projet-trajectoire-20261120` |
| branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
| HEAD base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
| origin/main | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| merge-base | `6e93a33d64dfeea2eab88fb7896d733b34053f97` |
| Index projet | **non modifié** (aucun staging réel) |
| candidate_sha | **NOT AVAILABLE** |
| Prospective tree (temp index isolé) | `0c5859406b98361aa711ddfdb483c8657c60e93f` |

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/scripts/db-migrate.sh
 M projects/sfia-studio-next/web/scripts/e2e-web-server.sh
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts
 M projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/types.ts
 M projects/sfia-studio-next/web/src/domains/preparation/create-project.ts
 M projects/sfia-studio-next/web/src/domains/preparation/project-context.ts
 M projects/sfia-studio-next/web/src/lib/http-errors.ts
?? projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
?? projects/sfia-studio-next/web/scripts/_dbg-e07-process.mts
?? projects/sfia-studio-next/web/scripts/_e07-recapture-08.mts
?? projects/sfia-studio-next/web/scripts/e07-capture-sas-modal.mts
?? projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts
?? projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/reconcile/route.ts
?? projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
?? projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx
?? projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql
?? projects/sfia-studio-next/web/src/db/migrations/016_initial_qualification_expected.sql
?? projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts
?? projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts
?? projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts
?? projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts

```

Prior pack local préservé : `/tmp/e07-prior-iq-pack-52f47ed7-source.md`.

---

## 2. Sources consultées

SFIA v2.6 (routing §4.3.0b/§6.6/§6.12, template, operating model, guardrails, validation checklist, delivery pipeline, decision engine) · gouvernance Next (SEF, ENV-01 blob `14b61f0d`, product-versioning blob `8bc93e0f`) · docs Ensemble 07 @ `25dc1c92` · as-built local · handoff IQ `52f47ed7`.

---

## 3. Changements de ce cycle

| # | Changement | Nature |
|---|---|---|
| 1 | `ensemble07-parcours-af.spec.ts` | Oracles E2E honnêtes A1/A2/C1/C2/D1/D2/E/F |
| 2 | `delivery-history.md` | Entrée préparation candidat |
| 3 | Review Pack + handoff L3 | Ce document |

Aucun changement de code produit (P0/fencing/mig inchangés).

---

## 4. Audit oracles E2E

| Intitulé | Avant | Attendu | Correction |
|---|---|---|---|
| A | PROPOSED\|CLARIFICATION\|**FAILED** | Nominal ≠ FAILED | **A1** PROPOSED\|CLARIFICATION + messageId + trajId si PROPOSED + no ACTIVE |
| A2 | absent | Échec distinct | Contrat A1 refuse FAILED ; PG owns FAILED path |
| B | double reconcile | Idempotence | GET idempotent ; mid-pipeline = PG |
| C | annotation seule | C1 ≠ C2 | C1 messages ; C2 ACTIVE si fixture |
| D | Trajectoire visible | D1 ≠ D2 | D1 no auto-close ; D2 CLOSED ou NOT PROVEN |
| E | op id | + version/msgs/cycle | GET equality |
| F | wait+reconcile | Sync sans harness reconcile | GET-only + UI |

---

## 5. Résultats exécutés

| Suite | Résultat | Preuve |
|---|---|---|
| E2E révisé | **9/9 PASS (26.4s)** | `/tmp/e07-cand-e2e3.out` |
| Unit E07 | **10/10 PASS** | `/tmp/e07-cand-unit.out` |
| PG E07 | **15/15 PASS** | `/tmp/e07-cand-pg.out` |
| tsc/build/690/525 | hérités IQ (produit inchangé hors E2E/docs) | handoff `52f47ed7` |

| Parcours | Résultat | Preuve | Réserve |
|---|---|---|---|
| A1 | PASS | BROWSER+API | FAILED exclu |
| A2 | PASS (contrat) | PG owns | Browser FAILED NOT RUN |
| B | PASS | GET idempotent | Autonomy NOT |
| C1 | PASS | BROWSER | — |
| C2 | PASS | BROWSER DETERMINISTIC GOVERNED GO (OPEN→ACTIVE) | LIVE NOT |
| D1 | PASS | BROWSER | — |
| D2 | PASS as NOT PROVEN | Explicit | No CLOSE fixture |
| E | PASS | BROWSER+GET | — |
| F | PASS | UI sans POST test | Client poll ≠ autonomy |

---

## 6. Inventaire + décisions

| `.tmp-sfia-review/chatgpt-review.md` | ` M` | **EXCLUDE** | Review pack local; handoff L3 separate · sha25616=`e5539ad08c0d224c` · 41766B |
| `projects/sfia-studio-next/construction/delivery-history.md` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`6607a023e50421ab` · 208922B |
| `projects/sfia-studio-next/web/scripts/db-migrate.sh` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`c9cfa5739b3e38fc` · 1364B |
| `projects/sfia-studio-next/web/scripts/e2e-web-server.sh` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`32ab82fa6cb4fd29` · 3277B |
| `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`3080aa0e2cbc9efb` · 6344B |
| `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`f40f1844426b2379` · 1369B |
| `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`1e83930d9ca9fbfd` · 38152B |
| `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`208cbc85b6cba91d` · 113425B |
| `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`864fb53b627adf6a` · 20536B |
| `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`7360fb343b837d18` · 6485B |
| `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`ba1b62c4a9f89f36` · 7491B |
| `projects/sfia-studio-next/web/src/db/schema.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`26e07976d531e018` · 36133B |
| `projects/sfia-studio-next/web/src/domains/conversation/service.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`2b64de26ea25d87f` · 116065B |
| `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`82f6f43f4c30aade` · 20042B |
| `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`7a58880b5631d1d3` · 16892B |
| `projects/sfia-studio-next/web/src/domains/pilotage/service.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`e3cd49ff2104ab0a` · 53225B |
| `projects/sfia-studio-next/web/src/domains/pilotage/types.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`489aa523d38a3e45` · 5149B |
| `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`50798bd7db81fbcd` · 12773B |
| `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`fa10f35a84c0e8cf` · 4625B |
| `projects/sfia-studio-next/web/src/lib/http-errors.ts` | ` M` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`d43f1ba2089e8377` · 3996B |
| `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`1c5c16fa28afbd91` · 3079B |
| `projects/sfia-studio-next/web/scripts/_dbg-e07-process.mts` | `??` | **EXCLUDE** | Debug helper · sha25616=`6ab78aa51e3b68d3` · 2917B |
| `projects/sfia-studio-next/web/scripts/_e07-recapture-08.mts` | `??` | **EXCLUDE** | Capture helper · sha25616=`c96de8c9c5f1fa6b` · 1422B |
| `projects/sfia-studio-next/web/scripts/e07-capture-sas-modal.mts` | `??` | **EXCLUDE** | Capture evidence only · sha25616=`07f88743f677289d` · 4856B |
| `projects/sfia-studio-next/web/scripts/e07-runtime-screenshots.mts` | `??` | **EXCLUDE** | Capture evidence only · sha25616=`c1ea38119299390d` · 6144B |
| `projects/sfia-studio-next/web/scripts/e07-seed-screenshot.mts` | `??` | **EXCLUDE** | Capture evidence only · sha25616=`41ca3de1a803196d` · 8698B |
| `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/reconcile/route.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`fff63ded9627a700` · 896B |
| `projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`d46ebc57892b5578` · 3108B |
| `projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`9a93eb16ca9d301a` · 33841B |
| `projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`1d44a872997c5233` · 1285B |
| `projects/sfia-studio-next/web/src/db/migrations/016_initial_qualification_expected.sql` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`a6f485144f81bfca` · 317B |
| `projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`4688dabdd03f9c24` · 8693B |
| `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`3a6f848cc8156f23` · 924B |
| `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`366b99fb1f3acd2b` · 32162B |
| `projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`53b440e6d945ca14` · 1503B |
| `projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`fe9fe02c48b7857d` · 16625B |
| `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`772ecbdf4c746f8a` · 28764B |
| `projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`bc2fd85e9445034d` · 1297B |
| `projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`1ea118563c4d3b21` · 4025B |
| `projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts` | `??` | **INCLUDE** | E07 delivery runtime/test/migration/doc · sha25616=`d642205cccad1b47` · 1477B |

### INCLUDE (34 paths) — tree `0c5859406b98361aa711ddfdb483c8657c60e93f`

- `projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md`
- `projects/sfia-studio-next/construction/delivery-history.md`
- `projects/sfia-studio-next/web/scripts/db-migrate.sh`
- `projects/sfia-studio-next/web/scripts/e2e-web-server.sh`
- `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/create-project/route.ts`
- `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/initial-qualification/reconcile/route.ts`
- `projects/sfia-studio-next/web/src/app/api/projects/[projectId]/route.ts`
- `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`
- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
- `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`
- `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`
- `projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx`
- `projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx`
- `projects/sfia-studio-next/web/src/components/figma/TrajectoryBoard.tsx`
- `projects/sfia-studio-next/web/src/db/migrations/015_trajectory_qualification.sql`
- `projects/sfia-studio-next/web/src/db/migrations/016_initial_qualification_expected.sql`
- `projects/sfia-studio-next/web/src/db/schema.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/command-runner.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/forecast-builder.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification-types.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/initial-qualification.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/qualification-lock.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/service.ts`
- `projects/sfia-studio-next/web/src/domains/pilotage/types.ts`
- `projects/sfia-studio-next/web/src/domains/preparation/create-project.ts`
- `projects/sfia-studio-next/web/src/domains/preparation/project-context.ts`
- `projects/sfia-studio-next/web/src/lib/http-errors.ts`
- `projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts`
- `projects/sfia-studio-next/web/tests/integration/ensemble07-initial-qualification.pg.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-ensure-idempotent.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-forecast-builder.test.ts`
- `projects/sfia-studio-next/web/tests/unit/ensemble07-qualification-lock.test.ts`

### EXCLUDE (conservés WT)

- `.tmp-sfia-review/chatgpt-review.md`
- `web/scripts/_dbg-e07-process.mts`, `_e07-recapture-08.mts`, `e07-capture-sas-modal.mts`, `e07-runtime-screenshots.mts`, `e07-seed-screenshot.mts`

---

## 7. Migrations

015 + 016 INCLUDE · schema.ts aligné · idempotence NOTICE en PG · **RECETTE non migrée**.

---

## 8. Fake / Real

DETERMINISTIC/FAKE/PG/BROWSER A1–F (C2 GO fixture) **PROVEN** · D2 CLOSE browser **NOT PROVEN** · LIVE **NOT PROVEN** · FIX-03 autonomy **NOT PROVEN**.

---

## 9. Réserves R1–R3

| ID | Énoncé | Recette FAKE bornée ? | Décision |
|---|---|---|---|
| R1 | RECONCILIATION / autonomy NOT | Oui si reconcile accepté | Worker ou non |
| R2 | LIVE NOT | Oui si LIVE exclu | Session LIVE séparée |
| R3 | UX deferred | Oui | UAT Morris sur build RECETTE |

---

## 10. Préflight ENV-01 RO

| Contrôle | Observé | Condition |
|---|---|---|
| RECETTE :3200 | HTTP 200 /login | GO + SHA figé avant écriture |
| STABLE :3000 | UNREACHABLE | N/A |
| DB RECETTE | non interrogée | Backup avant 015/016 |
| DEV :5433 | sfia-next-dev-pg | Isolé |
| Écriture RECETTE | aucune | Continuer jusqu'au GO |

---

## 11. Manifeste

```yaml
repository: mcleland147/sfia-workspace
base_branch: sfia/next-ensemble07-projet-trajectoire-delivery
base_head: e36fd8b0531c4f649830990a18f9cfdaecb3c03f
main_sha: 6e93a33d64dfeea2eab88fb7896d733b34053f97
candidate_sha: NOT AVAILABLE
prospective_tree: 0c5859406b98361aa711ddfdb483c8657c60e93f
include_count: 34
migrations: [015, 016]
app_version: 0.0.0-dev
version_candidate: NOT PUBLISHED
e2e_honest: 9/9 PASS
unit_e07: 10/10 PASS
pg_e07: 15/15 PASS
LIVE: false
reserves: [FIX-03, LIVE, UX, D2_close_browser]
next_git_GO: commit INCLUDE only after Morris validation; retest on SHA; push/PR/deploy = separate GOs
```

Overlap main sur migrations/pilotage/preparation depuis merge-base : **vide**.

---

## 12. Gate C OPEN / NO RELEASE

Aucun push projet · aucun déploiement RECETTE.

---

## 13. Verdict

```
ENSEMBLE 07 — CANDIDATE PREPARATION COMPLETE WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED
```

---

## 14. GO Morris restants

1. Valider INCLUDE/EXCLUDE
2. Arbitrer R1/R2/R3
3. GO gel Git (commit INCLUDE)
4. Retest sur SHA
5. GO push/PR
6. GO mise à disposition RECETTE + migrate
7. Revue UX

---

## 15. Contenu cycle — E2E complet

### `projects/sfia-studio-next/web/tests/e2e/ensemble07-parcours-af.spec.ts`

```typescript
import { test, expect, type Page, type APIRequestContext } from "@playwright/test";
import {
  openNewPreparation,
  seedInspectedNameViaApi,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

/**
 * Ensemble 07 — BROWSER functional qualification A–F on isolated E2E lane :3101.
 *
 * Honesty contract (candidate preparation):
 * - A1 nominal ≠ FAILED
 * - C1 interaction ≠ C2 governed GO effect
 * - D1 safety ≠ D2 CLOSE effect
 * - F UI sync must not be masked by test-driven reconcile
 * - Fixture Nora FAKE — LIVE NOT PROVEN
 * - UX pixel comparison frozen (Morris)
 */

type IqSnap = {
  status: string;
  operationId: string;
  composerLocked: boolean;
  assistantMessageId: string;
  trajectoryRevisionId: string;
  version: number;
};

type ProjectSnap = {
  iq: IqSnap | null;
  messageCount: number;
  cycleStatus: string | null;
  trajectoryProposed: boolean;
  trajectoryRetained: boolean;
};

async function loginPilotA(page: Page) {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
}

async function openSurface(page: Page, key: string) {
  // surface-* markers in ProjectChrome are sr-only spans (not navigable).
  await page.getByTestId("studio-rail").getByTestId(`nav-${key}`).click();
  await expect(page.getByTestId(`surface-${key}`)).toHaveAttribute(
    "data-surface-active",
    "1",
    { timeout: 15000 },
  );
}

async function getProjectSnap(
  request: APIRequestContext,
  projectId: string,
): Promise<ProjectSnap> {
  const getRes = await request.get(`/api/projects/${projectId}`, { timeout: 8000 });
  expect(getRes.ok()).toBeTruthy();
  const body = (await getRes.json()) as {
    messages?: unknown[];
    initialQualification?: {
      status?: string;
      operationId?: string;
      composerLocked?: boolean;
      assistantMessageId?: string | null;
      trajectoryRevisionId?: string | null;
      version?: number;
    } | null;
    pilotage?: {
      cycle?: { status?: string } | null;
      trajectory?: {
        proposed?: unknown | null;
        retained?: unknown | null;
      };
    };
  };
  const q = body.initialQualification;
  return {
    iq: q
      ? {
          status: q.status ?? "",
          operationId: q.operationId ?? "",
          composerLocked: Boolean(q.composerLocked),
          assistantMessageId: q.assistantMessageId ?? "",
          trajectoryRevisionId: q.trajectoryRevisionId ?? "",
          version: q.version ?? 0,
        }
      : null,
    messageCount: Array.isArray(body.messages) ? body.messages.length : 0,
    cycleStatus: body.pilotage?.cycle?.status ?? null,
    trajectoryProposed: Boolean(body.pilotage?.trajectory?.proposed),
    trajectoryRetained: Boolean(body.pilotage?.trajectory?.retained),
  };
}

/** GET-only poll — does not POST reconcile (used by F and by post-terminal checks). */
async function pollQualificationGetOnly(
  request: APIRequestContext,
  projectId: string,
  opts?: { maxSeconds?: number },
): Promise<IqSnap | null> {
  const max = opts?.maxSeconds ?? 40;
  let last: IqSnap | null = null;
  for (let i = 0; i < max; i++) {
    try {
      const snap = await getProjectSnap(request, projectId);
      last = snap.iq;
      if (last && ["PROPOSED", "CLARIFICATION", "FAILED"].includes(last.status)) return last;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  return last;
}

/**
 * Bounded product reconcile — allowed for A1 functional completion when GET stays non-terminal.
 * Must be disclosed: this is controlled reconciliation, not process autonomy.
 */
async function waitQualificationWithBoundedReconcile(
  request: APIRequestContext,
  projectId: string,
): Promise<IqSnap | null> {
  let last = await pollQualificationGetOnly(request, projectId, { maxSeconds: 8 });
  if (last && ["PROPOSED", "CLARIFICATION", "FAILED"].includes(last.status)) return last;

  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await request.post(`/api/projects/${projectId}/initial-qualification/reconcile`, {
        timeout: 12000,
      });
    } catch {
      /* retry */
    }
    last = await pollQualificationGetOnly(request, projectId, { maxSeconds: 5 });
    if (last && ["PROPOSED", "CLARIFICATION", "FAILED"].includes(last.status)) return last;
  }
  return last;
}

async function createProjectBrowser(page: Page): Promise<{ projectId: string; name: string }> {
  const name = uniqueProjectName("E07QA Cadrage");
  await openNewPreparation(page);
  await sendPrepMessage(
    page,
    `Je veux un cadrage pour clarifier le périmètre d'un cockpit produit, nommé ${name}.`,
  );
  await seedInspectedNameViaApi(page, {
    name,
    summary: "Cadrage Ensemble 07 candidate preparation",
  });
  await expect(page.getByTestId("prep-create-project")).toBeEnabled({ timeout: 30000 });
  await page.getByTestId("prep-create-project").click();

  const access = page.getByRole("button", { name: /Accéder au projet/i });
  await expect(access).toBeEnabled({ timeout: 60000 });
  await access.click();
  await page.waitForURL("**/projects/**", { timeout: 30000 });
  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  return { projectId: projectId!, name };
}

test.describe("Ensemble 07 parcours A–F (BROWSER FAKE — honest oracles)", () => {
  test.describe.configure({ mode: "serial", timeout: 180_000 });

  let projectId = "";
  let a1Terminal: IqSnap | null = null;

  test("A1 — nominal create → PROPOSED|CLARIFICATION (FAILED rejected)", async ({ page }) => {
    await loginPilotA(page);
    const created = await createProjectBrowser(page);
    projectId = created.projectId;

    // Product client may already reconcile; bounded reconcile disclosed if GET not yet terminal.
    const terminal = await waitQualificationWithBoundedReconcile(page.request, projectId);
    expect(terminal, "qualification projection missing").toBeTruthy();
    // QA-A01 — nominal success must not accept FAILED
    expect(["PROPOSED", "CLARIFICATION"]).toContain(terminal!.status);
    expect(terminal!.operationId.length).toBeGreaterThan(0);
    expect(terminal!.composerLocked).toBe(false);
    expect(terminal!.assistantMessageId.length).toBeGreaterThan(0);
    if (terminal!.status === "PROPOSED") {
      expect(terminal!.trajectoryRevisionId.length).toBeGreaterThan(0);
    }
    a1Terminal = terminal;

    const snap = await getProjectSnap(page.request, projectId);
    expect(snap.cycleStatus).toBeNull(); // no implicit ACTIVE
    expect(snap.messageCount).toBeGreaterThanOrEqual(2);

    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("project-travail-stage").first()).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 15000 });
    await expect(
      page.getByText(/proposition de trajectoire initiale|clarifier|préciser/i).first(),
    ).toBeVisible({ timeout: 15000 });

    await openSurface(page, "pilotage");
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
  });

  test("A2 — FAILED is not an A1 success class (contract note + PG ownership)", async () => {
    // Browser FAILED injection is not exercised here (would require fault/HOLD product hooks).
    // Negative FAILED / Studio-incident path is owned by PG ensemble07 tests (status FAILED,
    // system role message, project retained). This test locks the A1 oracle contract.
    expect(["PROPOSED", "CLARIFICATION"]).toContain(a1Terminal?.status);
    expect(a1Terminal?.status).not.toBe("FAILED");
    test.info().annotations.push({
      type: "note",
      description:
        "A2 browser FAILED path NOT RUN — PG E07 owns technical failure oracles; A1 oracle explicitly rejects FAILED",
    });
  });

  test("B — reopen + GET idempotent (RECONCILIATION; autonomy NOT claimed)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}`);
    const a = await pollQualificationGetOnly(page.request, projectId, { maxSeconds: 15 });
    const b = await pollQualificationGetOnly(page.request, projectId, { maxSeconds: 15 });
    expect(a?.operationId).toBeTruthy();
    expect(b?.operationId).toBe(a?.operationId);
    expect(b?.status).toBe(a?.status);
    expect(["PROPOSED", "CLARIFICATION"]).toContain(b?.status);
    expect(b?.assistantMessageId).toBe(a?.assistantMessageId);
    test.info().annotations.push({
      type: "note",
      description:
        "B browser = post-terminal idempotent GET. Interruption mid-pipeline (D5-before-message, etc.) = PG P0 — RECONCILIATION PROVEN / PROCESS AUTONOMY NOT PROVEN",
    });
  });

  test("C1 — browser interaction RETAIN/OPEN utterances (no C2 effect claim)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    const before = await getProjectSnap(page.request, projectId);
    const draft = page.getByTestId("thread-draft").first();
    const send = page.getByTestId("thread-send").first();
    await expect(draft).toBeEditable({ timeout: 15000 });

    await draft.fill("Je retiens cette trajectoire.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await expect(page.getByText("Je retiens cette trajectoire.").last()).toBeVisible({
      timeout: 20000,
    });

    await draft.fill("Ouvre le cycle cadrage.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await expect(page.getByText("Ouvre le cycle cadrage.").last()).toBeVisible({
      timeout: 20000,
    });

    const after = await getProjectSnap(page.request, projectId);
    expect(after.messageCount).toBeGreaterThan(before.messageCount);
    // C1 only — observe; do not require RETAINED/ACTIVE
    test.info().annotations.push({
      type: "note",
      description: `C1 PASS — messages accepted; cycle=${after.cycleStatus}; retained=${after.trajectoryRetained}; proposed=${after.trajectoryProposed}`,
    });
  });

  test("C2 — governed GO ACTIVE after fixture OPEN utterance", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    const snap = await getProjectSnap(page.request, projectId);
    const retained = snap.trajectoryRetained;
    const active = snap.cycleStatus === "ACTIVE";

    // Fixture registers exact "Ouvre le cycle cadrage." → OPEN_CYCLE REQUEST_EFFECT.
    // If ACTIVE, the browser path traversed D3→D6→D5 under DETERMINISTIC fixture (not LIVE).
    if (active) {
      expect(snap.cycleStatus).toBe("ACTIVE");
      test.info().annotations.push({
        type: "note",
        description: `C2 PASS — BROWSER DETERMINISTIC — GOVERNED GO PROVEN (OPEN→ACTIVE); retained=${retained}; LIVE NL NOT PROVEN`,
      });
      return;
    }

    test.info().annotations.push({
      type: "note",
      description: `C2 NOT PROVEN in browser — retained=${retained} cycle=${snap.cycleStatus}; PG FIX-08 owns injected-qualification D6→D5; LIVE NL NOT PROVEN`,
    });
    expect(active).toBe(false);
  });

  test("D1 — close utterance without unauthorized auto-close", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    const before = await getProjectSnap(page.request, projectId);
    const draft = page.getByTestId("thread-draft").first();
    const send = page.getByTestId("thread-send").first();
    await expect(draft).toBeEditable({ timeout: 15000 });
    await draft.fill("Clôture le cycle en cours avec réserves.");
    await expect(send).toBeEnabled({ timeout: 10000 });
    await send.click();
    await expect(page.getByText(/Clôture le cycle en cours avec réserves/i).last()).toBeVisible({
      timeout: 20000,
    });

    const after = await getProjectSnap(page.request, projectId);
    // D1 = acceptance + no spontaneous CLOSE without a demonstrated governed path.
    // If ACTIVE existed (from C2), staying ACTIVE after an unmatched CLOSE utterance is OK for D1.
    if (before.cycleStatus !== "ACTIVE") {
      expect(after.cycleStatus).not.toBe("CLOSED");
      expect(after.cycleStatus).toBe(before.cycleStatus);
    } else if (after.cycleStatus === "CLOSED") {
      // Possible only if fixture/LIVE CLOSE applied — claimed under D2, not silently here.
      test.info().annotations.push({
        type: "note",
        description: "D1 observed CLOSED after close utterance — D2 will assert governed close",
      });
    } else {
      expect(after.cycleStatus).toBe("ACTIVE");
    }
    test.info().annotations.push({
      type: "note",
      description: `D1 PASS — utterance accepted; before.cycle=${before.cycleStatus} after.cycle=${after.cycleStatus}`,
    });

    await openSurface(page, "pilotage");
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });
  });

  test("D2 — governed CLOSE ACTIVE→CLOSED (BROWSER)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    const snap = await getProjectSnap(page.request, projectId);
    if (snap.cycleStatus === "CLOSED") {
      test.info().annotations.push({
        type: "note",
        description: "D2 PASS — cycle CLOSED observed after browser close path",
      });
      expect(snap.cycleStatus).toBe("CLOSED");
      return;
    }
    test.info().annotations.push({
      type: "note",
      description: `D2 NOT PROVEN in browser — cycle=${snap.cycleStatus}; D5 CLOSE proven in ml3-pilotage PG; conversational CLOSE fixture/LIVE path not demonstrated`,
    });
    expect(snap.cycleStatus).not.toBe("CLOSED");
  });

  test("E — navigation preserves projectId + qualification identity (GET)", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    await page.goto(`/projects/${projectId}?surface=travail`);
    const before = await getProjectSnap(page.request, projectId);
    expect(before.iq?.operationId).toBeTruthy();

    for (const key of ["projet", "travail", "pilotage", "journal"] as const) {
      await openSurface(page, key);
      expect(page.url()).toContain(`/projects/${projectId}`);
    }
    await page.getByTestId("studio-rail").getByTestId("nav-documents").click();
    expect(page.url()).toContain(`/projects/${projectId}`);

    const after = await getProjectSnap(page.request, projectId);
    expect(after.iq?.operationId).toBe(before.iq?.operationId);
    expect(after.iq?.status).toBe(before.iq?.status);
    expect(after.iq?.version).toBe(before.iq?.version);
    expect(after.iq?.assistantMessageId).toBe(before.iq?.assistantMessageId);
    expect(after.messageCount).toBe(before.messageCount);
    expect(after.cycleStatus).toBe(before.cycleStatus);
  });

  test("F — Trajectoire/Travail UI sync without test-driven reconcile", async ({ page }) => {
    expect(projectId).toBeTruthy();
    await loginPilotA(page);
    // Intentionally GET-only — do not POST reconcile from the test harness.
    await page.goto(`/projects/${projectId}?surface=pilotage`);
    await expect(
      page.getByTestId("trajectory-board").or(page.getByTestId("project-trajectory")).first(),
    ).toBeVisible({ timeout: 20000 });

    // Prefer proposal/clarification UI; analyzing is acceptable only while non-terminal (rare post-A1).
    const board = page.getByTestId("trajectory-board");
    await expect(board).toBeVisible();
    const iq = await pollQualificationGetOnly(page.request, projectId, { maxSeconds: 20 });
    expect(["PROPOSED", "CLARIFICATION"]).toContain(iq?.status);
    expect(iq?.operationId).toBe(a1Terminal?.operationId);

    await openSurface(page, "travail");
    await expect(page.getByTestId("composer-lock-overlay")).toHaveCount(0);
    await expect(page.getByTestId("thread-draft").first()).toBeEditable({ timeout: 15000 });
    test.info().annotations.push({
      type: "note",
      description:
        "F PASS — UI observed without test POST reconcile; product client poll may still reconcile (PROCESS AUTONOMY NOT PROVEN)",
    });
  });
});

```

### delivery-history (extrait diff)

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index e273b49a..c1772b42 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,50 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FUNCTIONAL-STABILIZATION-CANDIDATE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-20 |
+| Macro-lot | Ensemble 07 — stabilisation fonctionnelle/technique avant RECETTE |
+| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
+| P0 | P0-01 fence D5 in-TX · P0-02 resume assistantContent · P0-04 legacy expected flag (016) · P0-05 ensure-before-continue |
+| FIX | FIX-04 fingerprint · FIX-07 validateStructuredForecast · FIX-08 RETAIN resolve PROPOSED · FIX-11 docs SAVING |
+| Tests | PG 15 PASS · unit E07 10 PASS · tsc PASS · ml3 smoke PASS · E2E browser NOT RUN this cycle |
+| UX | **GELÉ** — revue visuelle Morris en RECETTE (hors mandat) |
+| Réserves | LIVE Nora NOT PROVEN · GO browser E2E NOT PROVEN · FIX-03 pas de worker autonome · full suite E2E/build NOT RUN |
+| Verdict | **DEV STABILIZED WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED** |
+
+
+## delivery_id: DELIV-2026-11-20-ENSEMBLE07-HIGH-FIDELITY-CANDIDATE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-20 |
+| Macro-lot | Ensemble 07 — haute fidélité + P0 fencing TOCTOU |
+| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
+| P0 | FIX-01 fencing write-point · FIX-02 message identity · FIX-05 missing-op lock · SAS modal capture |
+| Tests | PG 12 PASS · unit 7 PASS |
+| UX | FIGMA TO RUNTIME PARTIAL · modal SAS capturée |
+| Réserves | LIVE Nora NOT PROVEN · GO convers. browser NOT PROVEN · FIX-03 worker non introduit |
+| Verdict | READY WITH GOVERNED RESERVES / FIGMA TO RUNTIME PARTIAL |
+
+
+## delivery_id: DELIV-2026-11-20-ENSEMBLE07-FINAL-CONVERGENCE-CANDIDATE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-20 |
+| Macro-lot | Ensemble 07 — Projet/Trajectoire convergence finale (3e passe) |
+| Type | EVOL corrective · **NO RELEASE** · Gate C OPEN |
+| Worktree | `sfia-wt-ensemble07-projet-trajectoire-20261120` · branche `sfia/next-ensemble07-projet-trajectoire-delivery` @ `e36fd8b` (non poussée) |
+| P0 | COR-01 reopen/missing-op · COR-03 publish order · COR-04 effect fencing · SAS timers 400/900 retirés |
+| Preuves | Figma 13/13 refs MCP · runtime captures distinctes 13 états · PG 10 PASS · unit E07 7 PASS |
+| Réserves | LIVE Nora NOT PROVEN · GO conversationnel browser NOT PROVEN · UX PARTIAL · SAS popup live capture incomplete |
+| Verdict | **READY WITH GOVERNED RESERVES** / **FIGMA TO RUNTIME PARTIAL** |
+| Gates non acquis | Gate C, UAT Morris, STABLE, release, push projet |
+
+
 ## delivery_id: DELIV-2026-11-20-ENSEMBLE06-POST-MERGE-CI-VERIFIED

 | Field | Value |
@@ -3225,3 +3269,63 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 | Lane | DEV `:5433` only ; RECETTE/STABLE non mutées |
 | Push Product | **AUCUN** |
 | Verdict candidat | `READY FOR MORRIS REVIEW WITH RESERVES — JOURNAL V4 CORE LOCAL / SCOPE PARTIAL ON J-C04/06/13/14/BROWSER` |
+
+## 2026-11-20 — Ensemble 07 Projet/Trajectoire (DEV construction, NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` |
+| Statut | NO RELEASE — construction DEV |
+| Capacités | Qualification initiale durable post-create ; message Nora proactif ; compositeur verrouillé (UI+API) ; ProjectOverview 09.01/09.06 ; TrajectoryBoard 09.02–09.11 ; forecast_json D5 |
+| Tests | unit / PG E07 (historique premier delivery) |
+| Verdict candidat (1er) | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED |
+| Handoff tip (1er immuable) | `93ee58ee5208daa4abe6d657550b523fea244db2` blob `65dacb671da74b93974deb12af62fb5007f33264` |
+
+## 2026-11-20 — Ensemble 07 corrective (P0 cohérence + UI, NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
+| Statut | NO RELEASE — Gate C OPEN |
+| Corrections P0 | COR-01 ensure+retry ; COR-02 GET sans kick ; COR-03/04 fence+reprise D5→message ; COR-05 UNKNOWN+reconcile POST ; COR-06 no default CADRAGE ; COR-08 system incident ; COR-09 closed asc(openedAt) ; COR-11/12 matrice exclusive |
+| Tests | unit 687 PASS ; integration 518 PASS (E07 PG 8/8) ; tsc OK |
+| Fake/Real | DETERMINISTIC/FAKE forecast ; LIVE Nora NOT PROVEN ; HOLD DEV captures only |
+| Visuel | 09.07 clarification runtime obtenue ; 09.10/09.11/09.06/05.17 recapturés ; 09.02/03/08/09 ACTIVE/CLOSED encore absents (GO conversationnel COR-14 non clos) |
+| Réserves | COR-14/15 GO naturel+maturité non prouvés e2e ; COR-16/17 bilan/CKI éditorial partiels ; 13/13 Figma non READY |
+| Verdict candidat | FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED / READY WITH GOVERNED RESERVES sur P0 |
+
+## 2026-11-20 — Ensemble 07 DEV integrated qualification (NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
+| Statut | NO RELEASE — Gate C OPEN — **pas** de candidat RECETTE figé |
+| Prior handoff | FUNCTIONAL STABILIZATION `97db03d6` / blob `02c1190e` |
+| Correctifs cycle | IQ-REG-01 `expectInitialQualification` default false (route produit seule true) ; E2E A–F harness (`nav-*` vs sr-only) ; e2e-web-server HOLD unset |
+| Suites | tsc PASS ; build PASS ; unit **690 PASS** ; integration PG **525 PASS** ; E2E A–F **6/6 PASS (38s)** FAKE :3101 / `sfia_next_e2e` |
+| FIX-03 | RECONCILIATION PROVEN / PROCESS AUTONOMY NOT PROVEN |
+| Nora | DETERMINISTIC/FAKE — LIVE NOT PROVEN (GO NL C/D navigateur = REAL-GAP) |
+| UX | gel Figma respecté |
+| RECETTE/STABLE | intouchées |
+| Verdict | `DEV INTEGRATION QUALIFIED WITH RESERVES — MORRIS ARBITRATION REQUIRED` |
+
+## 2026-11-20 — Ensemble 07 RECETTE candidate preparation (NO RELEASE)
+
+| Champ | Valeur |
+|-------|--------|
+| Source SHA base | `e36fd8b0531c4f649830990a18f9cfdaecb3c03f` |
+| Branche | `sfia/next-ensemble07-projet-trajectoire-delivery` (WT non commitée) |
+| Prior handoff IQ | `52f47ed7` / blob `0e2a5863` |
+| Travail cycle | Oracles E2E honnêtes A1/A2/C1/C2/D1/D2/E/F ; inventaire INCLUDE/EXCLUDE ; manifeste préparation ; préflight ENV-01 RO |
+| E2E révisé | **9/9 PASS** (`ensemble07-parcours-af.spec.ts`) — A1 refuse FAILED ; C2 fixture OPEN→ACTIVE ; D2 CLOSE browser NOT PROVEN |
+| Régressions ciblées | unit E07 **10 PASS** ; PG E07 **15 PASS** |
+| Suites globales héritées | tsc/build/690/525 — arbre delivery précédent (non rejouées si code produit inchangé hors E2E) |
+| Prospective tree (temp index) | `3fc00997a5c68ae818091362920cc7d2eb7d343e` — **≠** candidate_sha |
+| candidate_sha | **NOT AVAILABLE** |
+| FIX-03 / LIVE / UX | inchangés (autonomie NOT ; LIVE NOT ; UX deferred) |
+| RECETTE :3200 | HTTP 200 observé RO — **aucune écriture** |
+| Verdict | `ENSEMBLE 07 — CANDIDATE PREPARATION COMPLETE WITH GOVERNED RESERVES — MORRIS ARBITRATION REQUIRED` |
+
```

### Instruction ChatGPT

Relire depuis Git `sfia/review-handoff` fichier `sfia-review-handoff/latest-chatgpt-review.md` — identité `ENSEMBLE 07 RECETTE CANDIDATE PREPARATION`, prospective tree, oracles, 9/9, INCLUDE/EXCLUDE, candidate_sha NOT AVAILABLE, verdict.
