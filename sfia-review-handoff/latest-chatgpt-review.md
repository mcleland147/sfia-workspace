# SFIA STUDIO NEXT — R5 / ML4
# REVIEW PACK FULL — INTÉGRITÉ PUBLICATION D7/D8 + PROVENANCE FOURNISSEUR

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 02:22 CET |
| GO Morris | CRITICAL — Correctif intégrité publication D7/D8 + provenance mode d'effet |
| Processus | SFIA v2.6 |
| Cycle | 8 — DELIVERY / IMPLÉMENTATION |
| Profil | CRITICAL |
| Typologie | INC / CORRECTIF PRODUCT |
| Version | 0.0.0-dev / NO RELEASE |
| ENV-01 | REQUIRED — DEV/E2E isolé ; RECETTE NOT RUN ; STABLE NOT AVAILABLE |

## 2. Git Truth — avant / après

### Avant modification
| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD Product local | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
| Tree | `5b43538452d5bb425a1ab7e150ca3b74ea66eb77` |
| `origin/main` | `c658f59023d44a0e22448c7ee034e3c1dda292a2` |
| Branche distante ML4 | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
| Handoff L3 distant | `425b3f45ed9497e815edee4f5e0c8d1c6588c2f9` |
| Hors Product (préservés, non stagés) | `.tmp-sfia-review/**`, `projects/.tmp-sfia-review/**`, `web/scripts/github-app-installation-read-qualify.ts` |

### Après correctif LOCAL
| Item | Valeur |
|---|---|
| Nouveau HEAD local | `d4f158ce4abe793706d005fc7fafdfe365d2c207` |
| Tree | `d1cb657036139219f9f3e86d4381facfccc5bc01` |
| Parent | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` (= `79b10052…` attendu) |
| `origin/feat/next-git-collaboration-20261108` | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` **INCHANGÉ** |
| `origin/main` | `c658f59023d44a0e22448c7ee034e3c1dda292a2` **INCHANGÉ** |
| Push Product | **AUCUN** |

## 3. Sources / refs effectivement lues

- SFIA v2.6 routing + cycle template (mandat)
- `projects/sfia-studio-next/governance/*` (SEF, roadmap, ENV, versioning, naming) — **non mutés**
- Décision ML4 git publication — **non mutée**
- `conception-fonctionnelle/integration-git-gouvernee.md`, `architecture-technique/cadrage-r4.md`
- `construction/integration-git/{contrat-acceptation,specification-technique,matrice-acceptation}.md`
- Code ML4 @ `79b10052` : `effect-service.ts`, prepare route, fingerprint, UI panel/labels, provider
- Handoff L3 tip `425b3f45…`

## 4. Git Review Index

| Path | Action |
|---|---|
| `web/src/domains/execution/publication-steps.ts` | **CREATED** — validateur/preuve unique |
| `web/src/domains/execution/effect-service.ts` | MODIFIED — prepare/dispatch/reconcile gates |
| `web/src/domains/execution/fingerprint.ts` | MODIFIED — `effectProviderMode` backward-compat |
| `web/src/domains/execution/types.ts` | MODIFIED — `effectProviderMode?` |
| `web/src/domains/integrations/github-provider.ts` | MODIFIED — `resolveConfiguredEffectProviderMode` |
| `web/src/app/api/.../publications/prepare/route.ts` | MODIFIED — `steps` nullable type |
| `web/src/components/integrations/PublicationInspectionPanel.tsx` | MODIFIED — provenance tentative |
| `web/tests/unit/publication-steps.test.ts` | **CREATED** |
| `web/tests/integration/git-collaboration.pg.test.ts` | MODIFIED — T01–T20 service+DB |
| `construction/integration-git/matrice-acceptation.md` | MODIFIED — §22 |
| `construction/integration-git/specification-technique.md` | MODIFIED — bandeau AS-IMPLEMENTED |
| `construction/delivery-history.md` | MODIFIED — DELIV integrity |

Migrations : **inchangées** (`008`–`012`). Governance/ADR/méthode/CI/secrets : **non touchés**.

## 5. Défaut bloquant — fausse complétion (reproductible)

Sur `79b10052` :
1. Client POST prepare avec `steps: []`.
2. `input.steps ?? NOMINAL` ne remplace **pas** `[]` (truthy empty array).
3. Plan persisté avec `steps=[]`.
4. Dispatch : boucles d'étapes no-op ; `commitSha` peut retomber sur `baseSha` / tip sans fichier.
5. Reconcile : `stepsDone = (!includes(X) || …)` est **vacuity-true** pour liste vide.
6. `commitPublicationCompletion` → D7 `COMPLETED` + D8 `publicationRef` **sans** fichier publié.

C'est une fausse preuve de publication documentaire.

## 6. Contrat des séquences autorisées

**Unique séquence nominale contractée du vertical ML4 :**

`CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` (ordre exact, unicité, longueur 3).

- Aucun mode commit-only contracté supporté → **non autorisé**.
- `undefined` (omission) → défaut nominale.
- `null`, `[]`, non-tableau, inconnue, duplicata, ordre inversé, partielle → `INVALID_REQUEST` **avant** création D7.

Owner unique : `publication-steps.ts` (prepare + dispatch + reconcile).

## 7. Cause racine D7/D8

1. Défaut `??` vs `[]`.
2. `stepsDone` vacuité-true.
3. Absence de preuve positive `filePublished` + `commitSha ≠ baseSha` + PR distante avant COMPLETED.
4. Provenance UI lue depuis `/api/integrations/status` live → mode peut diverger de la tentative.

## 8. Correctif préparation / dispatch / reconcile

- `resolvePublicationSteps` à prepare.
- `assertPlanPublicationSteps` après claim/fingerprint à dispatch ; invalid → `FAILED`, zero mutation.
- Divergence `plan.effectProviderMode` vs live env → `REQUIRES_REQUALIFICATION`.
- `assertPublicationEffectProof` avant `commitPublicationCompletion` (dispatch + reconcile).
- Reconcile : plan invalide → jamais D8.
- `effectProviderMode` figé dans `planJson` à prepare ; fingerprint l'inclut **seulement** si REAL|SCRIPTED (historique sans champ inchangé).
- UI : badge/bannière/dispatch labels depuis `attempt.plan.effectProviderMode` (UNKNOWN si absent).

## 9. Preuves négatives (DB + service)

T01–T20 exécutés dans `git-collaboration.pg.test.ts` (SCRIPTED, PostgreSQL isolé). Résumé :

| ID | Résultat |
|---|---|
| T01 steps=[] | INVALID_REQUEST ; 0 mutations |
| T02 steps=null | INVALID_REQUEST |
| T03–T08 formes invalides | INVALID_REQUEST |
| T09 plan persisté invalide | no COMPLETED ; 0 D8 |
| T09b steps corrupt + fp réeligné | FAILED ; 0 mutations |
| T10 reconcile steps=[] | no D8 |
| T11 baseSha seul | no COMPLETED/D8 |
| T12 nominale | COMPLETED + D8 ; commit ≠ base |
| T13 lost_ack | succès seulement si prouvé |
| T14 double dispatch | createBranch/put/PR = 1 |
| T15 REAL plan / SCRIPTED live | provenance REAL stable ; REQUIRES_REQUALIFICATION |
| T16 SCRIPTED plan / REAL env | provenance SCRIPTED stable ; REQUIRES_REQUALIFICATION |
| T17 historique sans mode | UNKNOWN |
| T18 D6 REVOKED | ACCESS_DENIED ; 0 effet |
| T19 contenu D4 divergé | REQUIRES_REQUALIFICATION |
| T20 merge REAL | hard-blocked / reject ; mergePR=0 |

## 10. Provenance provider par tentative

- Propriétaire : `effectAttempts.planJson.effectProviderMode`.
- Aussi reporté dans `resultJson` / `documentPublicationRefs.detailJson` à complétion.
- Pas de nouvelle table / migration.
- REAL ≠ OAuth CONNECTED.
- Historique sans preuve → UNKNOWN (jamais REAL inventé).

## 11. Compatibilité plans historiques

- Fingerprint : champ `effectProviderMode` **omis** si absent → D6 historiques stables.
- Plans nouveaux : mode REAL|SCRIPTED lié au fingerprint.
- Plans `steps` invalides historiques : dispatch → FAILED ; reconcile → pas de D8 ; pas de migration destructive.

## 12–14. Diffs / nouveaux fichiers / sections

### Commit
```
commit d4f158ce4abe793706d005fc7fafdfe365d2c207
Author:     Morris Cleland <morris@MacBook-Air.local>
AuthorDate: Mon Nov 9 02:21:04 2026 +0100
Commit:     Morris Cleland <morris@MacBook-Air.local>
CommitDate: Mon Nov 9 02:21:04 2026 +0100

    fix(studio-next): enforce documentary publication proof invariants

    Reject empty/invalid publication steps before D7 creation, require proven
    PUBLISH_FILE and non-base commit SHA before COMPLETED/D8, and freeze
    effect provider provenance per attempt so REAL/SCRIPTED is not rewritten
    by later config changes.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../construction/delivery-history.md               |  15 +
 .../integration-git/matrice-acceptation.md         |  21 +-
 .../integration-git/specification-technique.md     |  10 +-
 .../[projectId]/git/publications/prepare/route.ts  |   2 +-
 .../integrations/PublicationInspectionPanel.tsx    |  35 +-
 .../web/src/domains/execution/effect-service.ts    | 114 +++-
 .../web/src/domains/execution/fingerprint.ts       |  48 +-
 .../web/src/domains/execution/publication-steps.ts | 113 ++++
 .../web/src/domains/execution/types.ts             |   5 +
 .../src/domains/integrations/github-provider.ts    |  13 +-
 .../tests/integration/git-collaboration.pg.test.ts | 572 +++++++++++++++++++++
 .../web/tests/unit/publication-steps.test.ts       | 182 +++++++
 12 files changed, 1073 insertions(+), 57 deletions(-)

```

### Nouveau fichier complet — publication-steps.ts
```typescript
import { StudioError } from "@/lib/http-errors";
import type { PublicationPlan, PublicationProgress, PublicationStep } from "./types";

/**
 * Canonical ML4 documentary publication sequence.
 * Contracted vertical: branch → file → PR. No empty/partial client override.
 */
export const NOMINAL_PUBLICATION_STEPS: readonly PublicationStep[] = [
  "CREATE_BRANCH",
  "PUBLISH_FILE",
  "OPEN_PR",
] as const;

const KNOWN = new Set<string>(NOMINAL_PUBLICATION_STEPS);

function reject(message: string): never {
  throw new StudioError("INVALID_REQUEST", message, { exposeMessage: true, httpStatus: 400 });
}

/**
 * Strict validation of a steps list.
 * Rejects null, empty, non-array, unknown, duplicates, wrong order, partial sequences.
 */
export function validatePublicationSteps(raw: unknown): PublicationStep[] {
  if (raw === null) reject("steps null refusé");
  if (!Array.isArray(raw)) reject("steps doit être un tableau");
  if (raw.length === 0) reject("steps vide refusé — PUBLISH_FILE obligatoire");

  const steps = raw.map((s) => String(s)) as string[];
  for (const s of steps) {
    if (!KNOWN.has(s)) reject(`étape inconnue refusée: ${s}`);
  }
  if (new Set(steps).size !== steps.length) reject("étape dupliquée refusée");

  const expected = [...NOMINAL_PUBLICATION_STEPS];
  if (steps.length !== expected.length) {
    reject(
      `séquence invalide — attendu exactement ${expected.join("→")} (PUBLISH_FILE obligatoire)`,
    );
  }
  for (let i = 0; i < expected.length; i++) {
    if (steps[i] !== expected[i]) {
      reject(`ordre invalide — attendu ${expected.join("→")}, reçu ${steps.join("→")}`);
    }
  }
  return steps as PublicationStep[];
}

/** undefined → nominal default; otherwise strict validate (null/[] rejected). */
export function resolvePublicationSteps(raw: unknown): PublicationStep[] {
  if (raw === undefined) return [...NOMINAL_PUBLICATION_STEPS];
  return validatePublicationSteps(raw);
}

export function assertPlanPublicationSteps(plan: Pick<PublicationPlan, "steps">): void {
  validatePublicationSteps(plan.steps);
}

/**
 * Fail-closed gate before COMPLETED / D8 publicationRef.
 * Base SHA alone is never documentary proof.
 */
export function assertPublicationEffectProof(input: {
  plan: PublicationPlan;
  progress: PublicationProgress;
  commitSha: string | null | undefined;
}): void {
  assertPlanPublicationSteps(input.plan);

  if (!input.progress.filePublished) {
    throw new StudioError(
      "AMBIGUOUS",
      "PUBLISH_FILE non prouvé — COMPLETED / D8 refusés",
      { exposeMessage: true },
    );
  }
  if (!input.commitSha || input.commitSha.length === 0) {
    throw new StudioError(
      "AMBIGUOUS",
      "commitSha documentaire absent — COMPLETED / D8 refusés",
      { exposeMessage: true },
    );
  }
  if (input.plan.baseSha && input.commitSha === input.plan.baseSha) {
    throw new StudioError(
      "AMBIGUOUS",
      "SHA de base seul insuffisant comme preuve de publication documentaire",
      { exposeMessage: true },
    );
  }
  if (input.plan.steps.includes("CREATE_BRANCH") && !input.progress.branchCreated) {
    throw new StudioError(
      "AMBIGUOUS",
      "CREATE_BRANCH non prouvé — COMPLETED / D8 refusés",
      { exposeMessage: true },
    );
  }
  if (input.plan.steps.includes("OPEN_PR")) {
    const st = input.progress.prCurrentState;
    if (
      input.progress.prNumber == null ||
      !st ||
      st === "UNKNOWN" ||
      st === "ABSENT"
    ) {
      throw new StudioError(
        "AMBIGUOUS",
        "OPEN_PR non prouvée à distance — COMPLETED / D8 refusés",
        { exposeMessage: true },
      );
    }
  }
}

```

### Nouveau fichier complet — publication-steps.test.ts
```typescript
import { describe, expect, it } from "vitest";
import {
  assertPublicationEffectProof,
  NOMINAL_PUBLICATION_STEPS,
  resolvePublicationSteps,
  validatePublicationSteps,
} from "@/domains/execution/publication-steps";
import {
  buildUnifiedDiff,
  inspectionFingerprint,
  publicationEffectFingerprint,
  revisionContentFingerprint,
} from "@/domains/execution/fingerprint";
import type { PublicationPlan, PublicationProgress } from "@/domains/execution/types";
import { effectProviderLabel } from "@/components/integrations/publication-effect-labels";

function samplePlan(over: Partial<PublicationPlan> = {}): PublicationPlan {
  const content = "# Hello\n";
  const unified = buildUnifiedDiff("docs/a.md", null, content);
  const revisionFingerprint = revisionContentFingerprint(content);
  const inspection = {
    kind: "CREATE" as const,
    basePath: "docs/a.md",
    baseSha: "base",
    baseContent: null,
    proposedContent: content,
    unifiedDiff: unified,
    inspectionFingerprint: inspectionFingerprint({
      revisionId: "rev1",
      revisionFingerprint,
      targetPath: "docs/a.md",
      baseSha: "base",
      baseContent: null,
      proposedContent: content,
      unifiedDiff: unified,
    }),
  };
  return {
    documentId: "doc1",
    revisionId: "rev1",
    preparationId: "prep1",
    repositoryId: "repo1",
    repositoryFullName: "acme/docs",
    authorizationId: "auth1",
    installationId: "inst1",
    actorLogin: "pilot",
    permissions: { contents: "write", pull_requests: "write" },
    targetPath: "docs/a.md",
    targetBranch: "main",
    publicationBranch: "sfia/pub-x",
    baseRef: "main",
    baseSha: "base-sha",
    revisionFingerprint,
    contentMarkdown: content,
    inspection,
    steps: [...NOMINAL_PUBLICATION_STEPS],
    ...over,
  };
}

describe("publication steps validation (T01–T08 helpers)", () => {
  it("T01: steps vide refusé", () => {
    expect(() => validatePublicationSteps([])).toThrow(/vide/);
  });

  it("T02: steps null refusé", () => {
    expect(() => validatePublicationSteps(null)).toThrow(/null/);
  });

  it("T03: steps mal typé refusé", () => {
    expect(() => validatePublicationSteps("CREATE_BRANCH")).toThrow(/tableau/);
    expect(() => validatePublicationSteps({ 0: "CREATE_BRANCH" })).toThrow(/tableau/);
  });

  it("T04: étape inconnue refusée", () => {
    expect(() =>
      validatePublicationSteps(["CREATE_BRANCH", "PUBLISH_FILE", "MERGE"]),
    ).toThrow(/inconnue/);
  });

  it("T05: duplication refusée", () => {
    expect(() =>
      validatePublicationSteps(["CREATE_BRANCH", "CREATE_BRANCH", "PUBLISH_FILE"]),
    ).toThrow(/dupliqu/);
  });

  it("T06: ordre invalide refusé", () => {
    expect(() =>
      validatePublicationSteps(["PUBLISH_FILE", "CREATE_BRANCH", "OPEN_PR"]),
    ).toThrow(/ordre/);
  });

  it("T07: branche seule refusée", () => {
    expect(() => validatePublicationSteps(["CREATE_BRANCH"])).toThrow(/séquence|PUBLISH_FILE/);
  });

  it("T08: PR seule refusée", () => {
    expect(() => validatePublicationSteps(["OPEN_PR"])).toThrow(/séquence|PUBLISH_FILE/);
  });

  it("undefined → séquence nominale", () => {
    expect(resolvePublicationSteps(undefined)).toEqual([...NOMINAL_PUBLICATION_STEPS]);
  });

  it("séquence nominale acceptée", () => {
    expect(validatePublicationSteps([...NOMINAL_PUBLICATION_STEPS])).toEqual([
      ...NOMINAL_PUBLICATION_STEPS,
    ]);
  });
});

describe("publication effect proof (T11–T12 helpers)", () => {
  const progressOk: PublicationProgress = {
    branchCreated: true,
    filePublished: true,
    prCreated: true,
    prOpened: true,
    prNumber: 18,
    prCurrentState: "OPEN",
    commitSha: "doc-commit-sha",
  };

  it("T11: SHA de base seul insuffisant", () => {
    expect(() =>
      assertPublicationEffectProof({
        plan: samplePlan(),
        progress: { ...progressOk, commitSha: "base-sha", filePublished: true },
        commitSha: "base-sha",
      }),
    ).toThrow(/base/);
  });

  it("T12: preuve nominale acceptée", () => {
    expect(() =>
      assertPublicationEffectProof({
        plan: samplePlan(),
        progress: progressOk,
        commitSha: "doc-commit-sha",
      }),
    ).not.toThrow();
  });

  it("absence PUBLISH_FILE prouvée refusée", () => {
    expect(() =>
      assertPublicationEffectProof({
        plan: samplePlan(),
        progress: { ...progressOk, filePublished: false },
        commitSha: "doc-commit-sha",
      }),
    ).toThrow(/PUBLISH_FILE/);
  });
});

describe("fingerprint + effectProviderMode compatibility", () => {
  it("historique sans mode: fingerprint stable", () => {
    const without = samplePlan();
    delete without.effectProviderMode;
    const a = publicationEffectFingerprint(without);
    const b = publicationEffectFingerprint({ ...without });
    expect(a).toBe(b);
  });

  it("mode REAL/SCRIPTED change le fingerprint", () => {
    const base = publicationEffectFingerprint(samplePlan());
    const real = publicationEffectFingerprint(samplePlan({ effectProviderMode: "REAL" }));
    const scripted = publicationEffectFingerprint(samplePlan({ effectProviderMode: "SCRIPTED" }));
    expect(real).not.toBe(base);
    expect(scripted).not.toBe(base);
    expect(real).not.toBe(scripted);
  });
});

describe("T17: historique mode inconnu → UNKNOWN", () => {
  it("jamais REAL inventé", () => {
    expect(effectProviderLabel(undefined)).toBe("UNKNOWN");
    expect(effectProviderLabel(null)).toBe("UNKNOWN");
    expect(effectProviderLabel("")).toBe("UNKNOWN");
    expect(effectProviderLabel("CONNECTED")).toBe("UNKNOWN");
    expect(effectProviderLabel("REAL")).toBe("REAL");
    expect(effectProviderLabel("SCRIPTED")).toBe("SCRIPTED");
  });
});

```

### Diff effect-service.ts
```
commit d4f158ce4abe793706d005fc7fafdfe365d2c207
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:21:04 2026 +0100

    fix(studio-next): enforce documentary publication proof invariants

    Reject empty/invalid publication steps before D7 creation, require proven
    PUBLISH_FILE and non-base commit SHA before COMPLETED/D8, and freeze
    effect provider provenance per attempt so REAL/SCRIPTED is not rewritten
    by later config changes.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
index 7a4aa316..2506250c 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
@@ -16,6 +16,7 @@ import {
 import { insertHumanDecision } from "@/domains/decisions/service";
 import { classifyPublicationPath } from "@/domains/integrations/path-policy";
 import {
+  resolveConfiguredEffectProviderMode,
   resolveGitHubProvider,
   type PullRequestInfo,
 } from "@/domains/integrations/github-provider";
@@ -52,6 +53,11 @@ import type {
   PublicationProgress,
   PublicationStep,
 } from "./types";
+import {
+  assertPlanPublicationSteps,
+  assertPublicationEffectProof,
+  resolvePublicationSteps,
+} from "./publication-steps";

 async function assertProject(pilotId: string, projectId: string) {
   const p = (
@@ -786,9 +792,10 @@ export async function preparePublication(input: {
   targetPath: string;
   targetBranch: string;
   correlationKey: string;
-  steps?: PublicationStep[];
+  steps?: PublicationStep[] | null;
 }) {
   await assertProject(input.pilotId, input.projectId);
+  const steps = resolvePublicationSteps(input.steps);
   const policy = classifyPublicationPath(input.targetPath);
   if (!policy.allowed || !policy.normalizedPath) {
     throw new StudioError("ACCESS_DENIED", `Chemin refusé: ${policy.reason}`, { exposeMessage: true });
@@ -850,6 +857,7 @@ export async function preparePublication(input: {
   });

   const publicationBranch = publicationBranchFromCorrelationKey(input.correlationKey);
+  const effectProviderMode = resolveConfiguredEffectProviderMode();
   const plan: PublicationPlan = {
     documentId: input.documentId,
     revisionId: input.revisionId,
@@ -868,7 +876,8 @@ export async function preparePublication(input: {
     revisionFingerprint: revisionFp,
     contentMarkdown: rev.contentMarkdown,
     inspection,
-    steps: input.steps ?? ["CREATE_BRANCH", "PUBLISH_FILE", "OPEN_PR"],
+    steps,
+    effectProviderMode,
   };
   const fingerprint = publicationEffectFingerprint(plan);

@@ -1071,6 +1080,36 @@ export async function dispatchPublication(input: {
     throw new StudioError("CONFLICT", "Empreinte plan modifiée");
   }

+  try {
+    assertPlanPublicationSteps(plan);
+  } catch (e) {
+    const released = releaseClaim(readClaim(resultJson));
+    await casOwnedTransition({
+      attemptId: row.id,
+      claimToken,
+      fromStatus: "DISPATCHED",
+      toStatus: "FAILED",
+      resultJson: writeClaimInto(resultJson, released),
+    });
+    throw e;
+  }
+
+  const liveEffectMode = resolveConfiguredEffectProviderMode();
+  if (plan.effectProviderMode && plan.effectProviderMode !== liveEffectMode) {
+    const released = releaseClaim(readClaim(resultJson));
+    await casOwnedTransition({
+      attemptId: row.id,
+      claimToken,
+      fromStatus: "DISPATCHED",
+      toStatus: "REQUIRES_REQUALIFICATION",
+      resultJson: writeClaimInto(resultJson, released),
+    });
+    throw new StudioError(
+      "REQUIRES_REQUALIFICATION",
+      `Mode fournisseur d'effet divergé (plan=${plan.effectProviderMode}, live=${liveEffectMode})`,
+    );
+  }
+
   const authCtx: AuthorityCtx = {
     pilotId: input.pilotId,
     projectId: input.projectId,
@@ -1538,6 +1577,20 @@ export async function dispatchPublication(input: {
       }
     }

+    try {
+      assertPublicationEffectProof({ plan, progress, commitSha });
+    } catch (e) {
+      const released = releaseClaim(readClaim(resultJson));
+      await casOwnedTransition({
+        attemptId: row.id,
+        claimToken,
+        fromStatus: "DISPATCHED",
+        toStatus: "AMBIGUOUS",
+        resultJson: writeProgress(resultJson, progress, released),
+      });
+      throw e;
+    }
+
     const pubStatus =
       progress.prCurrentState === "CLOSED"
         ? "PR_CLOSED"
@@ -1561,6 +1614,7 @@ export async function dispatchPublication(input: {
         prNumber,
         progress,
         claim: released,
+        effectProviderMode: plan.effectProviderMode ?? null,
       }),
       pub: {
         projectId: input.projectId,
@@ -1577,7 +1631,10 @@ export async function dispatchPublication(input: {
         publicationBranch: plan.publicationBranch,
         prCurrentState: progress.prCurrentState,
         prCreatedHistorically: Boolean(progress.prCreated || progress.prOpened),
-        extraDetail: { resumedVerified: prHistoricallyCreated },
+        extraDetail: {
+          resumedVerified: prHistoricallyCreated,
+          effectProviderMode: plan.effectProviderMode ?? null,
+        },
       },
     });

@@ -2065,6 +2122,14 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
     const progress = readProgress(row.resultJson);
     const observed: PublicationProgress = { ...progress };

+    // Historical malformed plans: never COMPLETED / D8 from reconcile.
+    let planStepsValid = true;
+    try {
+      assertPlanPublicationSteps(plan);
+    } catch {
+      planStepsValid = false;
+    }
+
     // Observation always allowed (read-only against remote).
     try {
       const branchSha = await provider.getRefSha(
@@ -2271,19 +2336,30 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem

     // Historical local progress ≠ remote proof. COMPLETED from reconcile requires
     // re-read PR state + independent marker provenance (even if prNumber was known).
-    const prRemoteProven =
-      !plan.steps.includes("OPEN_PR") ||
-      (remoteReadable &&
-        prMarkerProven &&
-        observed.prNumber != null &&
-        (observed.prCurrentState === "OPEN" ||
-          observed.prCurrentState === "CLOSED" ||
-          observed.prCurrentState === "MERGED"));
-
-    const stepsDone =
-      (!plan.steps.includes("CREATE_BRANCH") || observed.branchCreated) &&
-      (!plan.steps.includes("PUBLISH_FILE") || observed.filePublished) &&
-      prRemoteProven;
+    // Empty/invalid steps never vacuously succeed — assertPublicationEffectProof is fail-closed.
+    let effectProofOk = false;
+    if (planStepsValid) {
+      try {
+        assertPublicationEffectProof({
+          plan,
+          progress: observed,
+          commitSha: observed.commitSha,
+        });
+        // PR remote provenance still required beyond progress flags.
+        const prRemoteProven =
+          !plan.steps.includes("OPEN_PR") ||
+          (remoteReadable &&
+            prMarkerProven &&
+            observed.prNumber != null &&
+            (observed.prCurrentState === "OPEN" ||
+              observed.prCurrentState === "CLOSED" ||
+              observed.prCurrentState === "MERGED"));
+        effectProofOk = prRemoteProven;
+      } catch {
+        effectProofOk = false;
+      }
+    }
+    const stepsDone = effectProofOk;

     // B2 — DISPATCHED with active lease: READ-ONLY. Never liberate status.
     if (row.status === "DISPATCHED" && claimActive) {
@@ -2395,6 +2471,7 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
               progress: observed,
               reconciled: true,
               claim: released,
+              effectProviderMode: plan.effectProviderMode ?? null,
             }),
             pub: {
               projectId,
@@ -2411,7 +2488,10 @@ export async function reconcileAttempt(pilotId: string, projectId: string, attem
               publicationBranch: plan.publicationBranch,
               prCurrentState: observed.prCurrentState,
               prCreatedHistorically: Boolean(observed.prCreated || observed.prOpened),
-              extraDetail: { reconciled: true },
+              extraDetail: {
+                reconciled: true,
+                effectProviderMode: plan.effectProviderMode ?? null,
+              },
             },
           });
           nextStatus = "COMPLETED";

```

### Diff autres sources (fingerprint/types/provider/prepare/UI)
```
commit d4f158ce4abe793706d005fc7fafdfe365d2c207
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:21:04 2026 +0100

    fix(studio-next): enforce documentary publication proof invariants

    Reject empty/invalid publication steps before D7 creation, require proven
    PUBLISH_FILE and non-base commit SHA before COMPLETED/D8, and freeze
    effect provider provenance per attempt so REAL/SCRIPTED is not rewritten
    by later config changes.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts
index b8390e6d..273e7d93 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts
@@ -14,7 +14,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
       targetPath?: string;
       targetBranch?: string;
       correlationKey?: string;
-      steps?: Array<"CREATE_BRANCH" | "PUBLISH_FILE" | "OPEN_PR">;
+      steps?: Array<"CREATE_BRANCH" | "PUBLISH_FILE" | "OPEN_PR"> | null;
     };
     if (
       !body.documentId ||
diff --git a/projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx b/projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx
index d57250bd..e0d4a6d3 100644
--- a/projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/integrations/PublicationInspectionPanel.tsx
@@ -43,6 +43,8 @@ type AttemptView = {
     repositoryFullName?: string;
     actorLogin?: string | null;
     installationId?: string;
+    /** Frozen at prepare — provenance of this attempt, not live config. */
+    effectProviderMode?: "REAL" | "SCRIPTED" | null;
     inspection?: Inspection;
   };
   prNumber?: number | null;
@@ -311,18 +313,26 @@ export function PublicationInspectionPanel({ projectId, providerMode: providerMo
     (r) => !sources.some((s) => s.repositoryId === r.id || s.fullName === r.fullName),
   );
   const inspection = attempt?.plan?.inspection;
-  const effectMode = effectProviderLabel(providerMode);
+  // Provenance of the attempt (frozen at prepare). Live config only when no attempt plan yet.
+  const attemptEffectMode =
+    attempt?.plan != null
+      ? effectProviderLabel(attempt.plan.effectProviderMode)
+      : effectProviderLabel(providerMode);
+  const liveEffectMode = effectProviderLabel(providerMode);
   const statusBanner = publicationStatusBanner({
     status: attempt?.status,
-    effectProviderMode: providerMode,
+    effectProviderMode:
+      attempt?.plan != null ? attempt.plan.effectProviderMode : providerMode,
   });
+  const dispatchMode =
+    attempt?.plan != null ? attempt.plan.effectProviderMode : providerMode;

   return (
     <section className="space-y-4" data-testid="publication-inspection">
       <header className="space-y-1">
         <div className="flex items-center gap-2 flex-wrap">
           <h2 className="text-xl font-semibold">Publication Git — inspection d&apos;une révision</h2>
-          {effectMode === "SCRIPTED" ? (
+          {attemptEffectMode === "SCRIPTED" ? (
             <span
               className="text-[10px] uppercase px-2 py-0.5 rounded border border-[var(--line)] muted"
               data-testid="badge-effect-provider"
@@ -330,7 +340,7 @@ export function PublicationInspectionPanel({ projectId, providerMode: providerMo
               SCRIPTED
             </span>
           ) : null}
-          {effectMode === "REAL" ? (
+          {attemptEffectMode === "REAL" ? (
             <span
               className="text-[10px] uppercase px-2 py-0.5 rounded border border-[var(--line)] muted"
               data-testid="badge-effect-provider"
@@ -338,10 +348,19 @@ export function PublicationInspectionPanel({ projectId, providerMode: providerMo
               REAL
             </span>
           ) : null}
+          {attemptEffectMode === "UNKNOWN" && attempt ? (
+            <span
+              className="text-[10px] uppercase px-2 py-0.5 rounded border border-[var(--line)] muted"
+              data-testid="badge-effect-provider"
+            >
+              UNKNOWN
+            </span>
+          ) : null}
         </div>
         <p className="text-sm muted">
           Le Pilote examine exactement ce qui serait publié avant toute opération externe. Le mode
-          d&apos;effet (badge) est le fournisseur Git résolu — distinct du statut OAuth CONNECTED.
+          d&apos;effet affiché pour une tentative est celui figé à la préparation — distinct du
+          statut OAuth CONNECTED et de la configuration live ({liveEffectMode}).
         </p>
       </header>

@@ -449,7 +468,7 @@ export function PublicationInspectionPanel({ projectId, providerMode: providerMo
             <dt className="muted">Statut</dt>
             <dd data-testid="publication-attempt-status">{attempt?.status ?? "—"}</dd>
             <dt className="muted">Fournisseur d&apos;effet</dt>
-            <dd data-testid="publication-effect-provider">{effectMode}</dd>
+            <dd data-testid="publication-effect-provider">{attemptEffectMode}</dd>
             <dt className="muted">Base SHA</dt>
             <dd className="mono break-all">{attempt?.plan?.baseSha ?? "—"}</dd>
             <dt className="muted">Acteur / install</dt>
@@ -519,7 +538,7 @@ export function PublicationInspectionPanel({ projectId, providerMode: providerMo
           onClick={() => void dispatch()}
           data-testid="publication-dispatch"
         >
-          {dispatchButtonLabel(providerMode)}
+          {dispatchButtonLabel(dispatchMode)}
         </button>
         <button
           type="button"
@@ -546,7 +565,7 @@ export function PublicationInspectionPanel({ projectId, providerMode: providerMo
           onClick={() => void dispatchMerge()}
           data-testid="merge-dispatch"
         >
-          {mergeDispatchButtonLabel(providerMode)}
+          {mergeDispatchButtonLabel(dispatchMode)}
         </button>
       </div>

diff --git a/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts b/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
index 31d8a358..d3c1ebd1 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
@@ -44,29 +44,31 @@ export function inspectionFingerprint(input: {

 /** Canonical effect conditions — pilot/project bound outside the hash via attempt row. */
 export function publicationEffectFingerprint(plan: PublicationPlan): string {
-  return createHash("sha256")
-    .update(
-      canonical({
-        kind: "GIT_PUBLICATION",
-        documentId: plan.documentId,
-        revisionId: plan.revisionId,
-        preparationId: plan.preparationId,
-        repositoryId: plan.repositoryId,
-        repositoryFullName: plan.repositoryFullName,
-        authorizationId: plan.authorizationId,
-        installationId: plan.installationId,
-        actorLogin: plan.actorLogin,
-        permissions: plan.permissions,
-        targetPath: plan.targetPath,
-        targetBranch: plan.targetBranch,
-        publicationBranch: plan.publicationBranch,
-        baseSha: plan.baseSha,
-        revisionFingerprint: plan.revisionFingerprint,
-        inspectionFingerprint: plan.inspection.inspectionFingerprint,
-        steps: plan.steps,
-      }),
-    )
-    .digest("hex");
+  // Historical plans omit effectProviderMode — keep payload shape identical so D6
+  // fingerprints remain stable. New prepares always set REAL|SCRIPTED and bind it.
+  const payload: Record<string, unknown> = {
+    kind: "GIT_PUBLICATION",
+    documentId: plan.documentId,
+    revisionId: plan.revisionId,
+    preparationId: plan.preparationId,
+    repositoryId: plan.repositoryId,
+    repositoryFullName: plan.repositoryFullName,
+    authorizationId: plan.authorizationId,
+    installationId: plan.installationId,
+    actorLogin: plan.actorLogin,
+    permissions: plan.permissions,
+    targetPath: plan.targetPath,
+    targetBranch: plan.targetBranch,
+    publicationBranch: plan.publicationBranch,
+    baseSha: plan.baseSha,
+    revisionFingerprint: plan.revisionFingerprint,
+    inspectionFingerprint: plan.inspection.inspectionFingerprint,
+    steps: plan.steps,
+  };
+  if (plan.effectProviderMode === "REAL" || plan.effectProviderMode === "SCRIPTED") {
+    payload.effectProviderMode = plan.effectProviderMode;
+  }
+  return createHash("sha256").update(canonical(payload)).digest("hex");
 }

 export function mergeEffectFingerprint(plan: MergePlan): string {
diff --git a/projects/sfia-studio-next/web/src/domains/execution/types.ts b/projects/sfia-studio-next/web/src/domains/execution/types.ts
index 1e5f85c5..686470f7 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/types.ts
@@ -54,6 +54,11 @@ export type PublicationPlan = {
   contentMarkdown: string;
   inspection: InspectionDiff;
   steps: PublicationStep[];
+  /**
+   * Effect provider mode frozen at prepare (REAL|SCRIPTED).
+   * Orthogonal to OAuth CONNECTED. Historical plans may omit → UNKNOWN provenance.
+   */
+  effectProviderMode?: "REAL" | "SCRIPTED";
 };

 /** Current remote PR state — distinct from historical creation fact. */
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
index 1c8903b4..0eae794e 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/github-provider.ts
@@ -114,9 +114,18 @@ function realAppReadConfigured(): boolean {
  * REAL mutations require STUDIO_GITHUB_ALLOW_MUTATIONS=documentary exactly (merge always blocked).
  * The flag is an operator env gate only — never a substitute for D6/D7 authority.
  */
-export function resolveGitHubProvider(): GitHubProvider {
+/**
+ * Env-configured effect mode without requiring REAL credentials.
+ * Used to freeze / compare attempt provenance even when REAL App is not bootable.
+ */
+export function resolveConfiguredEffectProviderMode(): ProviderMode {
   const mode = (process.env.STUDIO_GITHUB_PROVIDER ?? "scripted").toLowerCase();
-  if (mode === "real") {
+  return mode === "real" ? "REAL" : "SCRIPTED";
+}
+
+export function resolveGitHubProvider(): GitHubProvider {
+  const mode = resolveConfiguredEffectProviderMode();
+  if (mode === "REAL") {
     if (!realAppReadConfigured()) {
       throw new StudioError(
         "NOT_CONFIGURED",

```

### Diff docs construction
```
commit d4f158ce4abe793706d005fc7fafdfe365d2c207
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:21:04 2026 +0100

    fix(studio-next): enforce documentary publication proof invariants

    Reject empty/invalid publication steps before D7 creation, require proven
    PUBLISH_FILE and non-base commit SHA before COMPLETED/D8, and freeze
    effect provider provenance per attempt so REAL/SCRIPTED is not rewritten
    by later config changes.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index b999dc79..15de2706 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1075,3 +1075,18 @@ Append-only logical journal of Cursor product deliveries.
 | Push Product / PR / merge / REAL mutation | **AUCUN** |
 | USER E2E | NOT RUN — Morris RECETTE |
 | Verdict candidat | `ML4 PRODUCT — LOCAL CANDIDATE COMMITTED — READY FOR CHATGPT CRITICAL REVIEW — PRODUCT PUSH NOT AUTHORIZED` |
+
+## delivery_id: DELIV-2026-11-09-ML4-PUBLICATION-INTEGRITY-CORRECTIVE
+
+| Champ | Valeur |
+| --- | --- |
+| Date (Europe/Paris) | 2026-11-09 ~02:30 CET |
+| Macro-capacité | R5 / ML4 — Correctif CRITICAL intégrité publication D7/D8 + provenance fournisseur |
+| Type | INC / CORRECTIF PRODUCT — `NO RELEASE` / `0.0.0-dev` |
+| Autorité / GO | Morris GO intégrité ; push Product / PR / merge / REAL mutation **NON AUTORISÉS** |
+| Parent Product | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
+| Correctifs | validateur unique `publication-steps.ts` ; reject `steps=[]` ; preuve COMPLETED/D8 ; `effectProviderMode` figé ; reconcile fail-closed ; UI provenance tentative |
+| Tests | T01–T20 DET SCRIPTED (service+DB) ; suites unit/integration/build/tsc |
+| REAL multi-repo | NOT PROVEN — réserve sandbox `chantiers360` |
+| Push Product distant | **AUCUN** — remote reste `79b10052…` |
+| Verdict candidat | `ML4 PUBLICATION INTEGRITY — CORRECTED AND LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL RE-REVIEW — PRODUCT PUSH NOT AUTHORIZED` |
diff --git a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
index 8a1c39f5..8d4ae4fa 100644
--- a/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
+++ b/projects/sfia-studio-next/construction/integration-git/matrice-acceptation.md
@@ -1,7 +1,7 @@
 # R5 ML4 — Matrice de couverture et de preuves candidate

-**Statut courant (2026-11-09) :** AS-IMPLEMENTED LOCAL CANDIDATE · DETERMINISTIC PROVEN · OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED
-**Base construction :** `feat/next-git-collaboration-20261108` @ `origin/main@c658f590`
+**Statut courant (2026-11-09) :** AS-IMPLEMENTED LOCAL CANDIDATE · DETERMINISTIC CORRECTIVE COVERAGE (intégrité D7/D8) · OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (mono-repo sandbox) · MULTI-REPO REAL NOT PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED
+**Base construction :** `feat/next-git-collaboration-20261108` parent `79b10052…` + correctif local intégrité (push Product NON AUTORISÉ)
 **Base Git historique :** `main@84bf3496…` ; qualification v0.2 `docs/next-ml4-git-qualification-20261107@3bb9224`.
 **Figma ML4 VALIDATED SPEC Morris :** 18 écrans 218–235 ; convergence UX globale et USER E2E navigateur = RECETTE Morris.
 **Niveaux Fake/Real distincts — ne pas confondre :** OAuth READ REAL ≠ commit/PR documentary REAL ≠ USER E2E ≠ Merge REAL ≠ Product intégré.
@@ -466,3 +466,20 @@ GO Morris CRITICAL consolidation — **aucune** nouvelle mutation GitHub REAL.
 | USER E2E RECETTE | NOT RUN / MORRIS | arbitrage accepté |

 Verdict cycle : **TECHNICAL CONSOLIDATION REVIEW READY — USER E2E RESERVED FOR MORRIS RECETTE**.
+
+## 22. Intégrité publication D7/D8 + provenance fournisseur (2026-11-09)
+
+GO Morris CRITICAL correctif — **aucune** mutation GitHub REAL ; push Product **NON AUTORISÉ**.
+
+| Item | Statut | Note |
+|---|---|---|
+| Séquence canonique | ENFORCED | seul `CREATE_BRANCH→PUBLISH_FILE→OPEN_PR` ; `steps=[]/null/mal typé` refusés avant D7 |
+| COMPLETED sans PUBLISH_FILE | ÉLIMINÉ (scénarios couverts) | preuve fichier + commitSha ≠ baseSha + PR distante |
+| Reconcile plan invalide | FAIL-CLOSED | aucune `publicationRef` D8 |
+| Provenance REAL/SCRIPTED | FIGÉE au prepare | `plan.effectProviderMode` ; historique absent → UNKNOWN |
+| Divergence mode live | REQUIRES_REQUALIFICATION | plan ≠ env |
+| REAL mono-repo | RÉSERVE | sandbox `mcleland147/chantiers360` ; allowlists App inchangées ; multi-repo REAL NOT PROVEN |
+| T01–T20 | DET SCRIPTED | service + DB ; merge REAL hard-blocked |
+| USER E2E / RECETTE | NOT RUN | Morris |
+
+Verdict cycle : **ML4 PUBLICATION INTEGRITY — CORRECTED AND LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL RE-REVIEW — PRODUCT PUSH NOT AUTHORIZED**.
diff --git a/projects/sfia-studio-next/construction/integration-git/specification-technique.md b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
index 5f74995b..be0a6f19 100644
--- a/projects/sfia-studio-next/construction/integration-git/specification-technique.md
+++ b/projects/sfia-studio-next/construction/integration-git/specification-technique.md
@@ -1,11 +1,13 @@
 # R5 — Spécification technique candidate : collaboration Git et intégrations

-> **AS-IMPLEMENTED LOCAL CANDIDATE (2026-11-09)** — `feat/next-git-collaboration-20261108` / baseline `c658f590`.
-> Domaines : D9/D7/D8 ; migrations `008`–`012` (aucune migration nouvelle ce gel).
+> **AS-IMPLEMENTED LOCAL CANDIDATE (2026-11-09)** — `feat/next-git-collaboration-20261108` parent `79b10052…` + correctif intégrité local (push Product NON AUTORISÉ).
+> Domaines : D9/D7/D8 ; migrations `008`–`012` (aucune migration structurante ce cycle).
 > **R1-A / R1-B** refresh lifecycle clos ; **R2** CONFLICT callback accepté.
-> **Niveaux de preuve courants :** OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (commit+PR #18 OPEN) · Consolidation DETERMINISTIC · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED.
+> **Niveaux de preuve courants :** OAuth READ REAL PROVEN · Git documentary REAL bounded PROVEN (commit+PR #18 OPEN, mono-repo sandbox) · Intégrité D7/D8 DETERMINISTIC CORRECTIVE · MULTI-REPO REAL NOT PROVEN · USER E2E RECETTE NOT RUN · Merge REAL NOT PROVEN · Product NOT INTEGRATED.
 > Mutations REAL **bornées documentary** si et seulement si `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` (aliases refusés ; merge HARD-BLOCKED). Flag ≠ autorité D6.
-> Consolidation : branche hash ; marker PR exact ; `effect_conditions` D6 ; reconcile tip SHA ; `user_token_observed` ; UI R7 mode d'effet ≠ OAuth.
+> Séquence publication nominale **seule** autorisée : `CREATE_BRANCH → PUBLISH_FILE → OPEN_PR` (`publication-steps.ts`). Aucun COMPLETED / D8 sans preuve fichier + commitSha ≠ baseSha + PR distante.
+> Provenance d'effet : `plan.effectProviderMode` figé à prepare ; historique sans champ → UNKNOWN ; divergence live → REQUIRES_REQUALIFICATION.
+> REAL sandbox actuel : allowlists `GITHUB_APP_ALLOWED_FULL_NAME` / App ID / installation — **mono-repo prouvé** (`mcleland147/chantiers360`) ; multi-repo REAL hors capacité.
 > Les sections bas du document portant « DOCUMENTED — DRAFT / NOT IMPLEMENTED » sont des **snapshots candidats historiques** — le bandeau ci-dessus prévaut pour l'état AS-IMPLEMENTED courant.
```

### Diff tests intégration (T01–T20)
```
commit d4f158ce4abe793706d005fc7fafdfe365d2c207
Author: Morris Cleland <morris@MacBook-Air.local>
Date:   Mon Nov 9 02:21:04 2026 +0100

    fix(studio-next): enforce documentary publication proof invariants

    Reject empty/invalid publication steps before D7 creation, require proven
    PUBLISH_FILE and non-base commit SHA before COMPLETED/D8, and freeze
    effect provider provenance per attempt so REAL/SCRIPTED is not rewritten
    by later config changes.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
index bb363964..2265e750 100644
--- a/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/git-collaboration.pg.test.ts
@@ -48,6 +48,7 @@ import {
   reconcileAttempt,
 } from "@/domains/execution/effect-service";
 import { ExecutionBarrierRegistry, readClaim } from "@/domains/execution/claim-lease";
+import { publicationEffectFingerprint } from "@/domains/execution/fingerprint";
 import { insertRestriction, markDecisionState } from "@/domains/decisions/service";
 import { qualifyObservedFacts } from "@/domains/proofs/qualify";
 import { createProjectCommand } from "@/domains/preparation/create-project";
@@ -3167,3 +3168,574 @@ describe("ML4 refresh lifecycle R1-A/R1-B (SCRIPTED/DET)", () => {
     expect(conflicts).toHaveLength(1);
   });
 });
+
+describe("PostgreSQL ML4 publication integrity T01–T20 (SCRIPTED)", () => {
+  beforeAll(() => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+  });
+
+  async function seedPub(label: string) {
+    const ctx = await seedProject(label);
+    const { repoId } = await connectAndAttach(ctx.pilotId, ctx.projectId);
+    const doc = await availableDoc(ctx.pilotId, ctx.preparationId, label);
+    return { ...ctx, repoId, ...doc };
+  }
+
+  async function pubRefs(attemptId: string) {
+    return db
+      .select()
+      .from(documentPublicationRefs)
+      .where(eq(documentPublicationRefs.effectAttemptId, attemptId));
+  }
+
+  it("T01: steps=[] refusé à prepare — zero effet, pas de D7", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t01-empty");
+    resetScriptedMutationCounts(pilotId);
+    await expect(
+      preparePublication({
+        pilotId,
+        projectId,
+        documentId,
+        revisionId,
+        repositoryId: repoId,
+        targetPath: "docs/t01.md",
+        targetBranch: "main",
+        correlationKey: newId("t01"),
+        steps: [],
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
+    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);
+    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
+  });
+
+  it("T02: steps=null refusé à prepare", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t02-null");
+    await expect(
+      preparePublication({
+        pilotId,
+        projectId,
+        documentId,
+        revisionId,
+        repositoryId: repoId,
+        targetPath: "docs/t02.md",
+        targetBranch: "main",
+        correlationKey: newId("t02"),
+        steps: null,
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+  });
+
+  it("T03–T08: formes invalides refusées à prepare", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t03-forms");
+    const base = {
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t03.md",
+      targetBranch: "main",
+    };
+    await expect(
+      preparePublication({
+        ...base,
+        correlationKey: newId("t03a"),
+        steps: "CREATE_BRANCH" as unknown as [],
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+    await expect(
+      preparePublication({
+        ...base,
+        correlationKey: newId("t04"),
+        steps: ["CREATE_BRANCH", "PUBLISH_FILE", "MERGE" as "OPEN_PR"],
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+    await expect(
+      preparePublication({
+        ...base,
+        correlationKey: newId("t05"),
+        steps: ["CREATE_BRANCH", "CREATE_BRANCH", "PUBLISH_FILE"],
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+    await expect(
+      preparePublication({
+        ...base,
+        correlationKey: newId("t06"),
+        steps: ["PUBLISH_FILE", "CREATE_BRANCH", "OPEN_PR"],
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+    await expect(
+      preparePublication({
+        ...base,
+        correlationKey: newId("t07"),
+        steps: ["CREATE_BRANCH"],
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+    await expect(
+      preparePublication({
+        ...base,
+        correlationKey: newId("t08"),
+        steps: ["OPEN_PR"],
+      }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+  });
+
+  it("T09: plan persisté invalide — aucun dispatch externe, aucun COMPLETED", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t09-persist");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t09.md",
+      targetBranch: "main",
+      correlationKey: newId("t09"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    const plan = JSON.parse(row.planJson) as PublicationPlan;
+    plan.steps = [];
+    await db
+      .update(effectAttempts)
+      .set({ planJson: JSON.stringify(plan), updatedAt: new Date() })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    // Fingerprint mismatch OR steps invalid — either way no COMPLETED / no mutations.
+    resetScriptedMutationCounts(pilotId);
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toBeTruthy();
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
+    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);
+    expect(getScriptedMutationCounts(pilotId).createPR).toBe(0);
+    const after = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    expect(after.status).not.toBe("COMPLETED");
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("T09b: plan invalide avec fingerprint recalculé — FAILED, zero effet", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t09b-fp");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t09b.md",
+      targetBranch: "main",
+      correlationKey: newId("t09b"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    // Corrupt steps and realign fingerprint so steps gate (not fp) is exercised.
+    const plan = JSON.parse(row.planJson) as PublicationPlan;
+    plan.steps = ["CREATE_BRANCH"];
+    const fingerprint = publicationEffectFingerprint(plan);
+    await db
+      .update(effectAttempts)
+      .set({
+        planJson: JSON.stringify(plan),
+        fingerprint,
+        effectConditions: row.effectConditions
+          ? JSON.stringify({
+              ...JSON.parse(row.effectConditions),
+              fingerprint,
+            })
+          : row.effectConditions,
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    resetScriptedMutationCounts(pilotId);
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toMatchObject({ code: "INVALID_REQUEST" });
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
+    const after = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    expect(after.status).toBe("FAILED");
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("T10: plan invalide en réconciliation — aucune publicationRef D8", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t10-rec");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t10.md",
+      targetBranch: "main",
+      correlationKey: newId("t10"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    // Force AMBIGUOUS with empty steps + fake progress that would have vacuously completed before.
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    const plan = JSON.parse(row.planJson) as PublicationPlan;
+    const baseSha = plan.baseSha;
+    plan.steps = [];
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "AMBIGUOUS",
+        planJson: JSON.stringify(plan),
+        resultJson: JSON.stringify({
+          progress: {
+            branchCreated: true,
+            branchSha: baseSha,
+            filePublished: false,
+            commitSha: baseSha,
+          },
+        }),
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).not.toBe("COMPLETED");
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("T11: SHA de base seul — preuve commit insuffisante, pas de D8", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t11-base");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t11.md",
+      targetBranch: "main",
+      correlationKey: newId("t11"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    const plan = JSON.parse(row.planJson) as PublicationPlan;
+    await db
+      .update(effectAttempts)
+      .set({
+        status: "AMBIGUOUS",
+        resultJson: JSON.stringify({
+          progress: {
+            branchCreated: true,
+            branchSha: plan.baseSha,
+            filePublished: true,
+            commitSha: plan.baseSha,
+            prCreated: true,
+            prOpened: true,
+            prNumber: 99,
+            prCurrentState: "OPEN",
+          },
+        }),
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    expect(reconciled.status).not.toBe("COMPLETED");
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("T12: séquence nominale branche+fichier+PR → COMPLETED + D8", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t12-nominal");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t12.md",
+      targetBranch: "main",
+      correlationKey: newId("t12"),
+      steps: ["CREATE_BRANCH", "PUBLISH_FILE", "OPEN_PR"],
+    });
+    expect(prepared.plan.effectProviderMode).toBe("SCRIPTED");
+    await authzPub(pilotId, projectId, prepared);
+    resetScriptedMutationCounts(pilotId);
+    const done = await dispatchPublication({
+      pilotId,
+      projectId,
+      attemptId: prepared.attemptId,
+    });
+    expect(done.status).toBe("COMPLETED");
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(1);
+    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(1);
+    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);
+    const refs = await pubRefs(prepared.attemptId);
+    expect(refs).toHaveLength(1);
+    expect(refs[0]!.headSha).not.toBe(prepared.plan.baseSha);
+  });
+
+  it("T13: timeout/lost ACK — succès seulement si effet réellement prouvé", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t13-lost");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t13.md",
+      targetBranch: "main",
+      correlationKey: newId("t13"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    ScriptedFaultRegistry.setFault("lost_ack_after_pr");
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toBeTruthy();
+    ScriptedFaultRegistry.clear();
+    const mid = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    expect(mid.status).not.toBe("COMPLETED");
+    const reconciled = await reconcileAttempt(pilotId, projectId, prepared.attemptId);
+    if (reconciled.status !== "COMPLETED") {
+      const resumed = await dispatchPublication({
+        pilotId,
+        projectId,
+        attemptId: prepared.attemptId,
+      });
+      expect(resumed.status).toBe("COMPLETED");
+    }
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(1);
+    expect(getScriptedMutationCounts(pilotId).createPR).toBeLessThanOrEqual(1);
+  });
+
+  it("T14: double dispatch — pas de double commit ni double PR", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t14-dbl");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t14.md",
+      targetBranch: "main",
+      correlationKey: newId("t14"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    resetScriptedMutationCounts(pilotId);
+    const [a, b] = await Promise.allSettled([
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ]);
+    const statuses = [a, b].map((r) =>
+      r.status === "fulfilled" ? (r.value as { status: string }).status : "ERR",
+    );
+    expect(statuses).toContain("COMPLETED");
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(1);
+    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(1);
+    expect(getScriptedMutationCounts(pilotId).createPR).toBe(1);
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(1);
+  });
+
+  it("T15: REAL plan puis config SCRIPTED — provenance stable, requalification", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t15-prov");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t15.md",
+      targetBranch: "main",
+      correlationKey: newId("t15"),
+    });
+    // Force plan provenance to REAL while live stays SCRIPTED.
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    const plan = JSON.parse(row.planJson) as PublicationPlan;
+    plan.effectProviderMode = "REAL";
+    const fingerprint = publicationEffectFingerprint(plan);
+    await db
+      .update(effectAttempts)
+      .set({
+        planJson: JSON.stringify(plan),
+        fingerprint,
+        updatedAt: new Date(),
+      })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    await authzPub(pilotId, projectId, { attemptId: prepared.attemptId, plan });
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    resetScriptedMutationCounts(pilotId);
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
+    const after = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    const afterPlan = JSON.parse(after.planJson) as PublicationPlan;
+    expect(afterPlan.effectProviderMode).toBe("REAL");
+    expect(after.status).toBe("REQUIRES_REQUALIFICATION");
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("T16: SCRIPTED plan puis config REAL — provenance stable, requalification", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t16-prov");
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t16.md",
+      targetBranch: "main",
+      correlationKey: newId("t16"),
+    });
+    expect(prepared.plan.effectProviderMode).toBe("SCRIPTED");
+    await authzPub(pilotId, projectId, prepared);
+    process.env.STUDIO_GITHUB_PROVIDER = "real";
+    resetScriptedMutationCounts(pilotId);
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    const after = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    const afterPlan = JSON.parse(after.planJson) as PublicationPlan;
+    expect(afterPlan.effectProviderMode).toBe("SCRIPTED");
+    expect(after.status).toBe("REQUIRES_REQUALIFICATION");
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
+  });
+
+  it("T17: historique sans effectProviderMode → UNKNOWN, pas REAL inventé", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t17-unk");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t17.md",
+      targetBranch: "main",
+      correlationKey: newId("t17"),
+    });
+    const row = (
+      await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+    )[0]!;
+    const plan = JSON.parse(row.planJson) as PublicationPlan;
+    delete plan.effectProviderMode;
+    await db
+      .update(effectAttempts)
+      .set({ planJson: JSON.stringify(plan), updatedAt: new Date() })
+      .where(eq(effectAttempts.id, prepared.attemptId));
+    const reloaded = JSON.parse(
+      (
+        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
+      )[0]!.planJson,
+    ) as PublicationPlan;
+    expect(reloaded.effectProviderMode).toBeUndefined();
+    const { effectProviderLabel } = await import(
+      "@/components/integrations/publication-effect-labels"
+    );
+    expect(effectProviderLabel(reloaded.effectProviderMode)).toBe("UNKNOWN");
+  });
+
+  it("T18: révocation D6 — aucun effet nouveau", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t18-rev");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t18.md",
+      targetBranch: "main",
+      correlationKey: newId("t18"),
+    });
+    const auth = await authzPub(pilotId, projectId, prepared);
+    await db.transaction(async (tx) => {
+      await markDecisionState(tx, auth.decisionId!, "REVOKED");
+    });
+    resetScriptedMutationCounts(pilotId);
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toMatchObject({ code: "ACCESS_DENIED" });
+    expect(getScriptedMutationCounts(pilotId).createBranch).toBe(0);
+    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("T19: source D4 changée — requalification, pas de publication", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t19-d4");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t19.md",
+      targetBranch: "main",
+      correlationKey: newId("t19"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    // Same revisionId content diverges from plan.revisionFingerprint (D4 source drift).
+    await db
+      .update(documentRevisions)
+      .set({ contentMarkdown: "# Changed after inspection\n", updatedAt: new Date() })
+      .where(eq(documentRevisions.id, revisionId));
+    resetScriptedMutationCounts(pilotId);
+    await expect(
+      dispatchPublication({ pilotId, projectId, attemptId: prepared.attemptId }),
+    ).rejects.toMatchObject({ code: "REQUIRES_REQUALIFICATION" });
+    expect(getScriptedMutationCounts(pilotId).putFileContents).toBe(0);
+    expect(await pubRefs(prepared.attemptId)).toHaveLength(0);
+  });
+
+  it("T20: merge REAL — toujours hard-blocked", async () => {
+    const { pilotId, projectId, repoId, documentId, revisionId } = await seedPub("t20-merge");
+    const prepared = await preparePublication({
+      pilotId,
+      projectId,
+      documentId,
+      revisionId,
+      repositoryId: repoId,
+      targetPath: "docs/t20.md",
+      targetBranch: "main",
+      correlationKey: newId("t20"),
+    });
+    await authzPub(pilotId, projectId, prepared);
+    const done = await dispatchPublication({
+      pilotId,
+      projectId,
+      attemptId: prepared.attemptId,
+    });
+    expect(done.status).toBe("COMPLETED");
+    const mergePrep = await prepareMerge({
+      pilotId,
+      projectId,
+      publicationAttemptId: prepared.attemptId,
+      correlationKey: newId("t20m"),
+    });
+    await authorizeMerge({
+      pilotId,
+      projectId,
+      attemptId: mergePrep.attemptId,
+      statement: "Je mandate le merge",
+    });
+    process.env.STUDIO_GITHUB_PROVIDER = "real";
+    process.env.STUDIO_GITHUB_ALLOW_MUTATIONS = "documentary";
+    resetScriptedMutationCounts(pilotId);
+    await expect(
+      dispatchMerge({ pilotId, projectId, attemptId: mergePrep.attemptId }),
+    ).rejects.toBeTruthy();
+    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
+    delete process.env.STUDIO_GITHUB_ALLOW_MUTATIONS;
+    expect(getScriptedMutationCounts(pilotId).mergePR).toBe(0);
+  });
+});
```

## 15. Résultats validations

| Gate | Résultat |
|---|---|
| `tsc --noEmit` | PASS |
| Unitaires | **199** PASS (34 files) |
| Intégration PG isolée SCRIPTED | **227** PASS (12 files) |
| `next build` | PASS |
| Playwright SCRIPTED | **13/13** PASS |
| `git diff --check` (staged product) | PASS |
| Scan secrets chemins product | PASS (aucun hit) |
| Migrations | inchangées |
| Non-régression ML1–ML3 touchée | couverte par suites unit/integration/e2e |
| GitHub REAL mutation ce cycle | **NOT RUN / AUCUNE** |
| USER E2E RECETTE | **NOT RUN** (Morris) |

Baseline précédente rapportée : 183 unit / 211 int / 13 PW — ce cycle : 199 / 227 / 13 (ajouts T01–T20 + helpers).

## 16. Fake/Real Qualification §6.16

| Capacité | Statut |
|---|---|
| DETERMINISTIC CORRECTIVE COVERAGE (intégrité) | **PROVEN ce cycle** |
| OAuth READ REAL | PROVEN (historique) |
| Documentary commit+PR REAL sandbox | PROVEN (historique `chantiers360` / PR #18) — **non rejoué** |
| MULTI-REPO REAL | **NOT PROVEN** |
| Merge REAL | HARD-BLOCKED / NOT PROVEN |
| USER E2E RECETTE | NOT RUN |
| Product push / PR / main | **NOT AUTHORIZED / NOT DONE** |
| ADOPTED | NON |

## 17. Limitation REAL mono-repo

Preuve REAL existante limitée par :
- `GITHUB_APP_ALLOWED_FULL_NAME`
- `GITHUB_APP_EXPECTED_APP_ID`
- `GITHUB_APP_EXPECTED_INSTALLATION_ID`

Sandbox démontré : `mcleland147/chantiers360`.

Ce correctif **ne** construit **pas** un provider multi-installation, n'élargit pas les permissions, ne retire pas les allowlists.

**SCRIPTED :** vertical complet déterministe (branche+fichier+PR+reconcile+gates).
**REAL démontré :** OAuth READ + publication documentaire bornée mono-repo (historique).
**Non prouvé :** multi-repo REAL, merge REAL, USER E2E.

## 18. Risques R1–R5 / écarts

| ID | Note |
|---|---|
| R1 | Intégrité false-COMPLETED adressée (scénarios couverts) — pas de claim global absolu |
| R2 | Provenance mode historisée — UNKNOWN pour legacy |
| R3 | Multi-repo REAL reste réserve couverture |
| R4 | RECETTE utilisateur hors mandat |
| R5 | Product distant non poussé — candidat local seulement |

## 19. ENV-01 / versioning

DEV corrections+tests OK. E2E isolé OK. RECETTE NOT RUN. STABLE N/A. Version `0.0.0-dev` / NO RELEASE.

## 20. Commit Product LOCAL

| Champ | Valeur |
|---|---|
| SHA | `d4f158ce4abe793706d005fc7fafdfe365d2c207` |
| Tree | `d1cb657036139219f9f3e86d4381facfccc5bc01` |
| Parent | `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` |
| Message | `fix(studio-next): enforce documentary publication proof invariants` |
| Fichiers | 12 (2 créés, 10 modifiés) |

## 21. Branche distante Product

`origin/feat/next-git-collaboration-20261108` = `79b100527a9c43fb789ca62b7f87b50a8bc2adf1` — **identique à avant** (pas de push).

## 22. Gates restants

1. Critical Re-Review ChatGPT
2. Nouveau GO Morris pour push **du seul** commit correctif Product
3. Qualification frontière REAL recettable
4. Préparation candidat ENV-01 RECETTE
5. Exécution utilisateur Morris

## 23. Verdict unique

**ML4 PUBLICATION INTEGRITY — CORRECTED AND LOCALLY COMMITTED — READY FOR CHATGPT CRITICAL RE-REVIEW — PRODUCT PUSH NOT AUTHORIZED.**

Claims interdits non avancés : FALSE SUCCESS ELIMINATED GLOBALLY · USER E2E PROVEN · MULTI-REPO REAL PROVEN · PRODUCT PUSHED · PRODUCT PR OPEN · MAIN INTEGRATED · RECETTE AVAILABLE · ML4 CLOSED · STABLE AVAILABLE · ADOPTED.
