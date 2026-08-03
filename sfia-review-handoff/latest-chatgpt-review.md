# SFIA Studio V3.1-D2-C — PR Readiness Full Review Pack

Date/heure du rapport : 2026-08-03 10:58:39 CEST (+0200)
Rôle Cursor : PR readiness (Cycle 13)
Cycle : Cycle 13 — PR readiness
Profil SFIA : Standard
Typologie v2.4 : EVOL

## GO Morris consommé

Formulation réelle : `ok pour le verdict, go pour la suite`
Date/heure GO : 2026-08-03 10:42 CEST (+0200)

Interprétation bornée validée :
GO QA-G3 SFIA STUDIO V3.1-D2-C —
ACCEPT THE INDEPENDENT QA PASS WITH RESERVES —
CARRY R-QA-REV-01, R-QA-REV-02 AND R-QA-D2C-01 AS OPEN NOT LIFTED —
NO CORRECTION REQUIRED BEFORE PR READINESS —

GO PR READINESS SFIA STUDIO V3.1-D2-C QUALIFYCYCLE BRIDGE —
REVIEW THE COMPLETE LOCAL NINE-FILE DELIVERY AND INDEPENDENT QA PACKAGE —
VERIFY SCOPE, DIFF, TESTS, GUARDRAILS, GRANULARITY AND PR BODY —
PREPARE THE PROJECT COMMIT AND PR PUBLICATION CONTRACT —
NO PROJECT COMMIT — NO PROJECT PUSH — NO PROJECT PR — NO MERGE —
NO RESERVE LIFTING — NO D2-D — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION

## Décision QA-G3 Morris

- QA-G3 **ACCEPTED WITH RESERVES**
- R-QA-REV-01 OPEN NOT LIFTED
- R-QA-REV-02 OPEN NOT LIFTED
- R-QA-D2C-01 MINOR OPEN
- R-QA-D2C-01 ne bloque pas PR readiness
- aucune correction corrective requise avant PR readiness
- aucune réserve fermée, levée ou requalifiée
- PR readiness autorisée
- publication projet **non** autorisée dans le présent cycle

## Local Git Truth Check initial

- workspace : `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge`
- branche : `delivery/sfia-studio-v3-1-d2-c-qualify-cycle-bridge`
- HEAD : `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- origin/main : `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- divergence : `0/0`
- staged : vide
- branche distante D2-C : absente
- PR D2-C : absente
- neuf fichiers projet exacts + `.tmp-sfia-review/**`

## Sources consultées

- `prompts/templates/sfia-cycle-execution-template.md` (canonique)
- `prompts/templates/05-validate-pr-readiness.md` : **absent** sur main — pas recréé ; fallback template d’exécution
- routing guide / méthode cycles v2.5 / checklist validation / pipeline / decision engine (lecture)
- CKC fallback : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md` (method-candidate ; cycle 13 PR readiness ; aucune autorité d’exécution ; pas de CKC détaillé inventé)
- handoff QA source tip `d481d5a0283698a077d9b852fe42c11450ea0462` / blob `f407fa3f474ba1971036caf9671219cd93946d45`
- docs framing 16–19 D2-C
- neuf fichiers projet + contrats protégés + package.json (lecture)

## Inventaire exact des neuf fichiers

1. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationResult.ts` (created)
2. `projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts` (created)
3. `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts` (modified)
4. `projects/sfia-studio/app/lib/oa/cycle/index.ts` (modified)
5. `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResult.test.ts` (created)
6. `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.test.ts` (created)
7. `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts` (created)
8. `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts` (modified)
9. `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.independent.qa.test.ts` (created)

Aucun dixième fichier projet.

## Hashes before

- DELIVERY_PACKAGE_HASH_PR_BEFORE = `23e8ae0c0f5b52be5de05bdf417ce87ab86b72adb18c7a5836e62446a404bfb5` (match expected)
- QA_TEST_HASH_PR_BEFORE = `6db51af01260ef18b649e642c546812882c716302697bcc91c56953c964ffbec` (match expected)
- FULL_NINE_FILE_PACKAGE_HASH_BEFORE = `ab326b1b6022c243c3eabcde98e85fa8fa22dba05ca9f2754cabc4996996718e`
- Observation lignes QA : `wc -l` = 1029 ; SHA-256 attendu match → pas de drift de contenu (comptage newline vs libellé GO 1030)

## Diff name-status / stat / numstat

Tracked vs origin/main :
```
M projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
M projects/sfia-studio/app/lib/oa/cycle/index.ts
M projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
```

Package complet (tracked + untracked) :
```
modified  +9    -2   catalogProjection.qa.test.ts
modified  +66   -0   index.ts
modified  +15   -0   cycleAudit.ts
created   +159  -0   ckcQualificationResult.ts
created   +308  -0   qualifyCycleWithCkc.ts
created   +114  -0   ckcQualificationResult.test.ts
created   +209  -0   qualifyCycleWithCkc.test.ts
created   +315  -0   qualifyCycleWithCkc.qa.test.ts
created   +1029 -0   qualifyCycleWithCkc.independent.qa.test.ts
TOTAL     +2224 -2   9 files
```

## Analyse fichier par fichier

| Fichier | Rôle | Conformité |
|---------|------|------------|
| ckcQualificationResult.ts | BL-D2-C-01 builders Success/Failure purs | OK |
| qualifyCycleWithCkc.ts | BL-D2-C-02…05 orchestration fail-closed | OK |
| cycleAudit.ts | BL-D2-C-05 events additifs | OK |
| index.ts | BL-D2-C-06 factory read-only additive | OK ; pas de qualifyCycle brut sur façade |
| ckcQualificationResult.test.ts | Delivery unit result | OK |
| qualifyCycleWithCkc.test.ts | Delivery unit bridge | OK |
| qualifyCycleWithCkc.qa.test.ts | Delivery QA intégration | OK |
| catalogProjection.qa.test.ts | Boundary public autorisant exports D2-C | OK |
| qualifyCycleWithCkc.independent.qa.test.ts | Cycle 9 independent adversarial QA | OK ; node:fs limité à analyse frontières Vitest |

## Vérification BL-D2-C-01…07

- C-01 Result Projection : Success/Failure frozen ; Failure closed keys ; proof identity ; isMorrisDecision=false — **PASS**
- C-02 Six signaux : exact keys ; absence≠false ; requestedProfile runtime reject — **PASS**
- C-03 Orchestration : CP→resolver→signals→QC×1→result ; QC×0 amont — **PASS**
- C-04 Fail-closed : catalogue/resolver/QC/clock/audit — **PASS** (R-QA-D2C-01 MINOR carried)
- C-05 Audit : events additifs ; no recursion ; no sensitive payload — **PASS**
- C-06 Factory : keys exactes audit/resolver/qualifyCycleWithCkc — **PASS**
- C-07 Intégration + non-régression : 70/134/122/313/1046 + typecheck/lint/build — **PASS**

## Frontières et fichiers protégés

- `git diff --exit-code origin/main --` 13 chemins protégés : **aucun diff**
- QualifyCycle T-A2 / CreateCycle / D2-A/D2-B contracts : inchangés
- Pas de CreateCycle/repos/UI/D2-D/D3 dans modules D2-C nouveaux
- Façade D2-C sans `qualifyCycle` brut

## Secrets et données sensibles

Scan des neuf fichiers : aucun `skip`/`only`/`todo`, aucun debugger, aucun token/clé/secret/private key. **PASS**

## Granularité commit

Décision candidate : **un commit unique** proportionné.
Motifs : incrément D2-C unique ; production + tests Delivery + preuve QA indépendante indissociables ; aucun sous-ensemble autonome à merger séparément ; pas de multi-objectif justifiant plusieurs PR.

Message commit candidat :
```
feat(sfia-studio): add V3.1-D2-C QualifyCycle bridge
```

Titre PR candidat :
```
feat(sfia-studio): add V3.1-D2-C QualifyCycle bridge
```

Base PR future : `main`
Branche future : `delivery/sfia-studio-v3-1-d2-c-qualify-cycle-bridge`

## Body PR complet (réutilisable)

## Summary

- Implements SFIA Studio **V3.1-D2-C QualifyCycle Bridge**: read-only orchestration of D2-A Catalog Projection → D2-B CKC Resolver/proof → T-A2 QualifyCycle → unified Success/Failure Result Projection.
- Adds additive D2-C audit events and a read-only `createCkcQualificationServices` factory.
- Includes Delivery unit/QA tests plus an independent Vitest adversarial QA suite (Cycle 9), accepted under Morris QA-G3 with open reserves.
- Does **not** create cycles, open D2-D/D3/UI, or modify T-A2 QualifyCycle rules.

## Scope

Exact nine-file package:

**Created (5 Delivery + 1 independent QA):**
1. `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationResult.ts` (+159)
2. `projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts` (+308)
3. `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResult.test.ts` (+114)
4. `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.test.ts` (+209)
5. `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts` (+315)
6. `projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.independent.qa.test.ts` (+1029)

**Modified (3):**
7. `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts` (+15 / -0)
8. `projects/sfia-studio/app/lib/oa/cycle/index.ts` (+66 / -0)
9. `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts` (+9 / -2)

**Local package stats:** +2224 / -2 across exactly 9 project files.
**No** config, dependency, workflow, method, docs, UI, D2-D, or D3 files.

## D2-C contracts

BL-D2-C-01…07 covered:
- Pure Success/Failure Result Projection; Failure excludes `proof` / `consumed` / `recommendedProfile` / `rationale` / `criticalSignalsPresent`.
- Success preserves original D2-B proof; `isMorrisDecision=false`; disclosures frozen.
- Six explicit boolean signals required; absence ≠ false; extra keys rejected; `requestedProfile` rejected at runtime.
- Orchestration order: Catalog Projection → resolver/proof → signal validation → QualifyCycle → Result.
- QualifyCycle called exactly once on success; never after upstream failure.
- Fail-closed normalization for catalog/resolver/QC/clock/audit hostiles.
- Additive audit events: `oa.ckc.qualification_started` / `qualification_succeeded` / `result_produced` / `request_failed`.
- Read-only factory exposes exactly `audit`, `resolver`, `qualifyCycleWithCkc`.

## Read-only and authority boundaries

- Recommendation only: `isMorrisDecision=false`.
- No repositories, stores, `CreateCycle`, ProjectServices, LPS, or mutation surfaces in the D2-C factory.
- Raw historical `QualifyCycle` remains barrel-exported for T-A2 coexistence but is **not** exposed by `CkcQualificationServices`.
- `createInMemoryCycleServices` unchanged in mutation wiring.
- Protected D2-A/D2-B/T-A2 contracts unchanged vs `origin/main`.
- D2-D and D3 remain closed.

## Independent QA

- Cycle 9 Independent QA verdict: **PASS WITH RESERVES**.
- Morris **QA-G3 ACCEPTED WITH RESERVES** (2026-08-03 10:42 CEST).
- Independent Vitest file: `qualifyCycleWithCkc.independent.qa.test.ts` — **70/70 PASS**.
- No Delivery files or Delivery test oracles were modified during QA.
- Delivery package hash preserved: `23e8ae0c0f5b52be5de05bdf417ce87ab86b72adb18c7a5836e62446a404bfb5`.
- Independent QA file SHA-256: `6db51af01260ef18b649e642c546812882c716302697bcc91c56953c964ffbec`.

## Test evidence

| Check | Result |
|-------|--------|
| Independent QA | 70/70 PASS |
| Targeted Delivery + independent | 134/134 PASS |
| D2-A / D2-B regressions | 122/122 PASS |
| `__tests__/oa/cycle/` | 313/313 PASS |
| Full suite | 1046/1046 PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| `git diff --check` | PASS |
| Protected contracts vs main | no diff |

## Open reserves

### R-QA-REV-01 MINOR — OPEN NOT LIFTED
`oa.ckc.resolution_started` and related D2-B failure events may carry a `ts` derived from an invalid `resolvedAt` before ISO validation. No Success, proof, or `consumed=true` is produced. Not corrected; not lifted.

### R-QA-REV-02 MINOR — OPEN NOT LIFTED
Historical D2-B adversarial probes were executed via vite-node outside the Vitest include set. History not rewritten; D2-B package unchanged; current D2-C campaign uses versioned Vitest. Not lifted.

### R-QA-D2C-01 MINOR — OPEN
Runtime `null`/`undefined` requests, excluded by the current TypeScript contract, can still throw while the outer catch re-reads request metadata. No successful or exploitable result is exposed. The reserve is accepted for transport and must be reconsidered before any unvalidated external runtime boundary is introduced. Not corrected; not lifted; does not block PR readiness per Morris QA-G3.

No reserve is presented as closed, fixed, or lifted.

## Explicit exclusions

- no D2-D
- no D3
- no UI
- no CreateCycle
- no method promotion
- no dependency / config / workflow change
- no project commit / push / PR / merge in the PR-readiness cycle itself

## Review checklist

- [x] Exact nine-file scope
- [x] QA-G3 accepted by Morris with reserves transported
- [x] CI required before merge
- [x] Reserves remain OPEN NOT LIFTED / OPEN
- [x] No automatic reserve lifting
- [ ] Merge requires a **distinct** Morris GO after draft PR + required CI


## Validations PR readiness — résultats exacts

| Contrôle | Résultat |
|----------|----------|
| Independent QA | 70/70 PASS |
| Targeted 5 files | 134/134 PASS |
| D2-A/D2-B regressions | 122/122 PASS |
| Suite oa/cycle | 313/313 PASS |
| Suite complète | 1046/1046 PASS |
| typecheck | PASS |
| lint | PASS |
| build | PASS (`Compiled successfully`) |
| git diff --check | PASS |
| protected contracts | PASS |

Aucune correction automatique ; aucun --fix ; aucun update snapshot.

## Hashes after

- DELIVERY_PACKAGE_HASH_PR_AFTER = `23e8ae0c0f5b52be5de05bdf417ce87ab86b72adb18c7a5836e62446a404bfb5`
- QA_TEST_HASH_PR_AFTER = `6db51af01260ef18b649e642c546812882c716302697bcc91c56953c964ffbec`
- FULL_NINE_FILE_PACKAGE_HASH_AFTER = `ab326b1b6022c243c3eabcde98e85fa8fa22dba05ca9f2754cabc4996996718e`
- hashes before == after : **oui**

## Git Truth final

- branche : `delivery/sfia-studio-v3-1-d2-c-qualify-cycle-bridge`
- HEAD : `5ca7a2603b000a468f6baea81ffc6c53acf0cd70`
- divergence : `0/0`
- neuf fichiers projet inchangés
- staged vide
- aucune branche/PR D2-C distante
- origin/main inchangé
- aucune correction ; aucun commit/push/PR projet

## Réserves transportées (complètes)

### R-QA-REV-01 MINOR — OPEN NOT LIFTED
Objet : timestamps D2-B dérivés d’un resolvedAt invalide avant validation ISO.
Impact : aucun Success / proof / consumed=true.
État : ouverte ; non corrigée ; non levée.

### R-QA-REV-02 MINOR — OPEN NOT LIFTED
Objet : sondes adversariales D2-B historiques via vite-node hors include Vitest.
État : historique non réécrit ; package D2-B inchangé ; campagne D2-C Vitest versionnée ; non levée.

### R-QA-D2C-01 MINOR — OPEN
Objet : `QualifyCycleWithCkc.execute(null|undefined)` via cast runtime hors TypeScript peut TypeError car le catch relit `request.correlationId` / `cycleTypeId`.
Impact accepté : formes exclues TS ; aucun Success/proof/profil/fuite ; parcours typé normal non affecté.
Décision Morris : ne bloque pas PR readiness ; doit apparaître dans la PR ; reste ouverte ; réévaluation avant frontière runtime non validée.

Nouvelles réserves BLOCKER/MAJOR : **aucune**.

## Diff utile complet des neuf fichiers

```diff
### Tracked modifications vs origin/main
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
index 9400a6949608f7fd521b778f2b42c105509c8fcb..5dbce54a258a8ed726cbfcdfe747400febf2d523 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
@@ -613,7 +613,7 @@ describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () =>
 });

 describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
-  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
+  it("allows adopted D2-A/B/C exports while forbidding later-cycle wiring", () => {
     const source = readFileSync(
       path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
       "utf8",
@@ -638,8 +638,15 @@ describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
     expect(source).toContain(
       'export * from "./infrastructure/ckcQualificationResolver";',
     );
+    expect(source).toContain(
+      'export * from "./domain/ckcQualificationResult";',
+    );
+    expect(source).toContain(
+      'export * from "./application/qualifyCycleWithCkc";',
+    );
+    expect(source).toContain("createCkcQualificationServices");
     expect(source).not.toMatch(
-      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
+      /QualifyCycleBridge|createD2|D2Factory|D2-D|D3|createInMemoryCycleServices\([^)]*qualifyCycleWithCkc/,
     );
   });

diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 499b0cbb1f74f086562e87d3d5694aa73847ec31..6a4699fe42b4e336488978f1814ab1017965853e 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -13,6 +13,7 @@ export * from "./domain/cycleTypeCatalog";
 export * from "./domain/ckcQualificationContracts";
 export * from "./domain/ckcQualificationErrors";
 export * from "./domain/ckcConsumptionProof";
+export * from "./domain/ckcQualificationResult";
 export * from "./domain/catalogFingerprint";
 export * from "./domain/catalogProjection";

@@ -24,6 +25,7 @@ export * from "./ports/ckcQualificationResolver";
 export * from "./ports/cycleAudit";

 export { QualifyCycle } from "./application/qualifyCycle";
+export * from "./application/qualifyCycleWithCkc";
 export { CreateCycle } from "./application/createCycle";
 export { GetCycle } from "./application/getCycle";
 export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
@@ -63,8 +65,13 @@ import { GetEpistemicState } from "./application/getEpistemicState";
 import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
 import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
 import { QualifyCycle } from "./application/qualifyCycle";
+import {
+  QualifyCycleWithCkc,
+  type QualifyCycleExecutor,
+} from "./application/qualifyCycleWithCkc";
 import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
 import { UpdateEpistemicState } from "./application/updateEpistemicState";
+import { CkcQualificationResolver } from "./infrastructure/ckcQualificationResolver";
 import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
 import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
 import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
@@ -76,6 +83,7 @@ import {
 } from "./infrastructure/observability";
 import type { CycleAuditPort } from "./ports/cycleAudit";
 import type { CkcResolverPort } from "./ports/ckcResolver";
+import type { CkcQualificationResolverPort } from "./ports/ckcQualificationResolver";

 export type CycleServices = {
   store: MemoryCycleStore;
@@ -103,6 +111,64 @@ export type CreateInMemoryCycleServicesOptions = {
   ckcResolver?: CkcResolverPort;
 };

+export type CkcQualificationServices = {
+  readonly audit: CycleAuditPort;
+  readonly resolver: CkcQualificationResolverPort;
+  readonly qualifyCycleWithCkc: QualifyCycleWithCkc;
+};
+
+export type CreateCkcQualificationServicesOptions = {
+  readonly clock?: ClockPort;
+  readonly audit?: CycleAuditPort;
+  readonly resolver?: CkcQualificationResolverPort;
+  readonly qualifyCycle?: QualifyCycleExecutor;
+};
+
+function createFailureAwareAudit(audit: CycleAuditPort): CycleAuditPort & {
+  readonly hasFailed: () => boolean;
+} {
+  let failed = false;
+  return {
+    append(event): void {
+      if (failed) {
+        throw new Error("Audit sink unavailable.");
+      }
+      try {
+        audit.append(event);
+      } catch {
+        failed = true;
+        throw new Error("Audit sink unavailable.");
+      }
+    },
+    hasFailed: () => failed,
+  };
+}
+
+/** Read-only D2-A → D2-B → D2-C composition without repositories or mutation. */
+export function createCkcQualificationServices(
+  options: CreateCkcQualificationServicesOptions = {},
+): CkcQualificationServices {
+  const clock = options.clock ?? new SystemClock();
+  const audit = options.audit ?? new ConsoleCycleAuditJournal();
+  const failureAwareAudit = createFailureAwareAudit(audit);
+  const resolver =
+    options.resolver ??
+    new CkcQualificationResolver(undefined, failureAwareAudit);
+  const qualifyCycle =
+    options.qualifyCycle ?? new QualifyCycle(clock, failureAwareAudit);
+
+  return Object.freeze({
+    audit,
+    resolver,
+    qualifyCycleWithCkc: new QualifyCycleWithCkc(
+      resolver,
+      qualifyCycle,
+      clock,
+      failureAwareAudit,
+    ),
+  });
+}
+
 /** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
 export function createInMemoryCycleServices(
   options: CreateInMemoryCycleServicesOptions,
diff --git a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
index fa3875b80c1dc375cadb1d150671880fd249ef56..b6d90df80ab89890ff311d986d56bfbb4ed43f39 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
@@ -94,6 +94,21 @@ export type CycleAuditEvent =
       detailCode?: string;
       durationMs?: number;
     }
+  | {
+      event:
+        | "oa.ckc.qualification_started"
+        | "oa.ckc.qualification_succeeded"
+        | "oa.ckc.result_produced"
+        | "oa.ckc.request_failed";
+      ts: string;
+      correlationId: string;
+      cycleTypeId: string;
+      result: "started" | "ok" | "error";
+      detailedStatus?: string;
+      recommendedProfile?: string;
+      detailCode?: string;
+      durationMs?: number;
+    }
   | {
       event: "oa.cycle.load_failed";
       ts: string;

### Untracked creations (full content as /dev/null diffs)
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationResult.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationResult.ts
new file mode 100644
index 0000000000000000000000000000000000000000..317b5498c69193fc1bcd7ecc5b3e988c05306d93
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationResult.ts
@@ -0,0 +1,159 @@
+import type { CkcConsumptionProof } from "./ckcConsumptionProof";
+import type {
+  CatalogProjectionErrorCode,
+  CkcQualificationDetailedStatus,
+  ValidatedCycleTypeProjection,
+} from "./ckcQualificationContracts";
+import type { CkcQualificationErrorCode } from "./ckcQualificationErrors";
+import type {
+  CycleProfile,
+  QualifyCycleRecommendation,
+} from "./types";
+
+export type CkcQualificationResultErrorCode =
+  | CatalogProjectionErrorCode
+  | CkcQualificationErrorCode
+  | "SIGNALS_INCOMPLETE";
+
+export type CkcQualificationSuccessResult = {
+  readonly state: "success";
+  readonly cycleTypeId: string;
+  readonly label: string;
+  readonly shortDescription: string;
+  readonly lifecycleStatus: ValidatedCycleTypeProjection["lifecycleStatus"];
+  readonly catalogVersion: string;
+  readonly catalogHash: string;
+  readonly correlationId: string;
+  readonly detailedStatus: Extract<
+    CkcQualificationDetailedStatus,
+    | "resolved_detailed"
+    | "resolved_synthetic"
+    | "resolved_fallback_synthetic"
+  >;
+  readonly proof: CkcConsumptionProof;
+  readonly recommendedProfile: CycleProfile;
+  readonly rationale: string;
+  readonly criticalSignalsPresent: boolean;
+  readonly requiresJustificationForCritical: boolean;
+  readonly capitalizationViaCycleTypeId: boolean;
+  readonly isMorrisDecision: false;
+  readonly disclosures: readonly string[];
+  readonly resolvedAt: string;
+  readonly qualifiedAt: string;
+};
+
+export type CkcQualificationFailureResult = {
+  readonly state: "failure";
+  readonly code: CkcQualificationResultErrorCode;
+  readonly message: string;
+  readonly blocking: true;
+  readonly retryable: boolean;
+  readonly recoverable: boolean;
+  readonly correlationId: string;
+  readonly cycleTypeId?: string;
+  readonly failedAt: string;
+};
+
+export type CkcQualificationResult =
+  | CkcQualificationSuccessResult
+  | CkcQualificationFailureResult;
+
+type FailureSource = {
+  readonly code: CkcQualificationResultErrorCode;
+  readonly message: string;
+  readonly blocking: true;
+  readonly retryable: boolean;
+  readonly recoverable: boolean;
+  readonly correlationId?: string;
+  readonly cycleTypeId?: string;
+};
+
+/** Pure projection: it preserves the D2-B proof and T-A2 recommendation. */
+export function createCkcQualificationSuccess(input: {
+  readonly projection: ValidatedCycleTypeProjection;
+  readonly proof: CkcConsumptionProof;
+  readonly recommendation: QualifyCycleRecommendation;
+  readonly qualifiedAt: string;
+}): CkcQualificationSuccessResult {
+  const { projection, proof, recommendation } = input;
+  return Object.freeze({
+    state: "success" as const,
+    cycleTypeId: projection.cycleTypeId,
+    label: projection.label,
+    shortDescription: projection.shortDescription,
+    lifecycleStatus: projection.lifecycleStatus,
+    catalogVersion: projection.catalogVersion,
+    catalogHash: projection.catalogHash,
+    correlationId: projection.correlationId,
+    detailedStatus: proof.detailedStatus,
+    proof,
+    recommendedProfile: recommendation.recommendedProfile,
+    rationale: recommendation.rationale,
+    criticalSignalsPresent: recommendation.criticalSignalsPresent,
+    requiresJustificationForCritical:
+      recommendation.requiresJustificationForCritical,
+    capitalizationViaCycleTypeId:
+      recommendation.capitalizationViaCycleTypeId,
+    isMorrisDecision: false as const,
+    disclosures: Object.freeze([...proof.disclosures]),
+    resolvedAt: proof.resolvedAt,
+    qualifiedAt: input.qualifiedAt,
+  });
+}
+
+/** Pure fail-closed projection with no partial proof or recommendation fields. */
+export function createCkcQualificationFailure(input: {
+  readonly error: FailureSource;
+  readonly failedAt: string;
+  readonly correlationId: string;
+  readonly cycleTypeId?: string;
+}): CkcQualificationFailureResult {
+  const cycleTypeId = input.error.cycleTypeId ?? input.cycleTypeId;
+  return Object.freeze({
+    state: "failure" as const,
+    code: input.error.code,
+    message: input.error.message,
+    blocking: true as const,
+    retryable: input.error.retryable,
+    recoverable: input.error.recoverable,
+    correlationId: input.error.correlationId ?? input.correlationId,
+    ...(cycleTypeId ? { cycleTypeId } : {}),
+    failedAt: input.failedAt,
+  });
+}
+
+export function createSignalsIncompleteError(input: {
+  readonly correlationId: string;
+  readonly cycleTypeId: string;
+}): FailureSource {
+  return Object.freeze({
+    code: "SIGNALS_INCOMPLETE" as const,
+    message: "All six qualification signals must be explicit booleans.",
+    blocking: true as const,
+    retryable: true as const,
+    recoverable: true as const,
+    correlationId: input.correlationId,
+    cycleTypeId: input.cycleTypeId,
+  });
+}
+
+export function createInternalCkcQualificationFailure(input: {
+  readonly failedAt: string;
+  readonly correlationId: string;
+  readonly cycleTypeId?: string;
+}): CkcQualificationFailureResult {
+  return createCkcQualificationFailure({
+    error: Object.freeze({
+      code: "D2_INTERNAL_ERROR" as const,
+      message: "The CKC qualification could not be completed.",
+      blocking: true as const,
+      retryable: true,
+      recoverable: true,
+      correlationId: input.correlationId,
+      ...(input.cycleTypeId ? { cycleTypeId: input.cycleTypeId } : {}),
+    }),
+    failedAt: input.failedAt,
+    correlationId: input.correlationId,
+    ...(input.cycleTypeId ? { cycleTypeId: input.cycleTypeId } : {}),
+  });
+}

diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts b/projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts
new file mode 100644
index 0000000000000000000000000000000000000000..0b481fde2f02a269d16d2e5382180aec49e27279
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/qualifyCycleWithCkc.ts
@@ -0,0 +1,308 @@
+import type { ClockPort } from "@/lib/oa/doctrine";
+import { projectSelectableCycleType } from "../domain/catalogProjection";
+import {
+  createCkcQualificationFailure,
+  createCkcQualificationSuccess,
+  createInternalCkcQualificationFailure,
+  createSignalsIncompleteError,
+  type CkcQualificationFailureResult,
+  type CkcQualificationResult,
+} from "../domain/ckcQualificationResult";
+import type {
+  CycleQualificationSignals,
+  QualifyCycleRequest,
+  QualifyCycleResult,
+} from "../domain/types";
+import type { CkcQualificationResolverPort } from "../ports/ckcQualificationResolver";
+import type { CycleAuditPort } from "../ports/cycleAudit";
+
+export type CkcQualificationSignals = {
+  readonly structuralChange: boolean;
+  readonly securityImpact: boolean;
+  readonly architectureImpact: boolean;
+  readonly dataImpact: boolean;
+  readonly irreversible: boolean;
+  readonly lowRiskBounded: boolean;
+};
+
+export type QualifyCycleWithCkcRequest = {
+  readonly cycleTypeId: string;
+  readonly catalogVersion: string;
+  readonly catalogHash: string;
+  readonly correlationId: string;
+  readonly signals: CkcQualificationSignals;
+  readonly objective?: string;
+  readonly scope?: string;
+};
+
+export type QualifyCycleExecutor = {
+  execute(request: QualifyCycleRequest): Promise<QualifyCycleResult>;
+};
+
+const SIGNAL_NAMES = [
+  "structuralChange",
+  "securityImpact",
+  "architectureImpact",
+  "dataImpact",
+  "irreversible",
+  "lowRiskBounded",
+] as const;
+
+function hasSixExplicitSignals(
+  signals: unknown,
+): signals is CkcQualificationSignals {
+  if (!signals || typeof signals !== "object") {
+    return false;
+  }
+  const keys = Object.keys(signals);
+  return (
+    keys.length === SIGNAL_NAMES.length &&
+    keys.every((key) =>
+      SIGNAL_NAMES.includes(key as (typeof SIGNAL_NAMES)[number]),
+    ) &&
+    SIGNAL_NAMES.every(
+      (name) =>
+        Object.prototype.hasOwnProperty.call(signals, name) &&
+        typeof (signals as Record<string, unknown>)[name] === "boolean",
+    )
+  );
+}
+
+export class QualifyCycleWithCkc {
+  constructor(
+    private readonly resolver: CkcQualificationResolverPort,
+    private readonly qualifyCycle: QualifyCycleExecutor,
+    private readonly clock: ClockPort,
+    private readonly audit?: CycleAuditPort,
+  ) {}
+
+  async execute(
+    request: QualifyCycleWithCkcRequest,
+  ): Promise<CkcQualificationResult> {
+    try {
+      return await this.executeInternal(request);
+    } catch {
+      return createInternalCkcQualificationFailure({
+        failedAt: this.safeFailureTimestamp(),
+        correlationId: request.correlationId,
+        cycleTypeId: request.cycleTypeId,
+      });
+    }
+  }
+
+  private async executeInternal(
+    request: QualifyCycleWithCkcRequest,
+  ): Promise<CkcQualificationResult> {
+    const projectionResult = projectSelectableCycleType({
+      cycleTypeId: request.cycleTypeId,
+      catalogVersion: request.catalogVersion,
+      catalogHash: request.catalogHash,
+      correlationId: request.correlationId,
+    });
+    if (!projectionResult.ok) {
+      return this.fail(request, projectionResult.error);
+    }
+
+    const { projection } = projectionResult;
+    let resolutionOutcome: ReturnType<CkcQualificationResolverPort["resolve"]>;
+    try {
+      resolutionOutcome = this.resolver.resolve({
+        projection,
+        resolvedAt: this.clock.nowIso(),
+      });
+    } catch {
+      return this.internalFailure(request, this.auditHasFailed());
+    }
+    if (!resolutionOutcome.ok) {
+      if (resolutionOutcome.error.code === "D2_INTERNAL_ERROR") {
+        // The D2-B resolver uses this code for audit failure. Never re-emit.
+        return createInternalCkcQualificationFailure({
+          failedAt: this.safeFailureTimestamp(),
+          correlationId: request.correlationId,
+          cycleTypeId: request.cycleTypeId,
+        });
+      }
+      return this.fail(request, resolutionOutcome.error);
+    }
+    if (
+      resolutionOutcome.proof.consumed !== true ||
+      !Object.isFrozen(resolutionOutcome.proof) ||
+      !Object.isFrozen(resolutionOutcome.proof.disclosures)
+    ) {
+      return this.internalFailure(request);
+    }
+
+    if (
+      Object.prototype.hasOwnProperty.call(request, "requestedProfile") ||
+      !hasSixExplicitSignals(request.signals)
+    ) {
+      return this.fail(
+        request,
+        createSignalsIncompleteError({
+          correlationId: request.correlationId,
+          cycleTypeId: request.cycleTypeId,
+        }),
+        resolutionOutcome.resolution.detailedStatus,
+      );
+    }
+
+    const startedAt = Date.now();
+    if (
+      !this.tryEmit({
+        event: "oa.ckc.qualification_started",
+        ts: this.clock.nowIso(),
+        correlationId: request.correlationId,
+        cycleTypeId: request.cycleTypeId,
+        result: "started",
+        detailedStatus: resolutionOutcome.resolution.detailedStatus,
+      })
+    ) {
+      return this.internalFailure(request, true);
+    }
+
+    let qualification: QualifyCycleResult;
+    try {
+      const signals: CycleQualificationSignals = {
+        structuralChange: request.signals.structuralChange,
+        securityImpact: request.signals.securityImpact,
+        architectureImpact: request.signals.architectureImpact,
+        dataImpact: request.signals.dataImpact,
+        irreversible: request.signals.irreversible,
+        lowRiskBounded: request.signals.lowRiskBounded,
+      };
+      qualification = await this.qualifyCycle.execute({
+        signals,
+        cycleTypeId: request.cycleTypeId,
+        ...(request.objective !== undefined
+          ? { objective: request.objective }
+          : {}),
+        ...(request.scope !== undefined ? { scope: request.scope } : {}),
+      });
+    } catch {
+      return this.internalFailure(request, this.auditHasFailed());
+    }
+
+    const qualifiedAt = this.clock.nowIso();
+    if (
+      !this.tryEmit({
+        event: "oa.ckc.qualification_succeeded",
+        ts: qualifiedAt,
+        correlationId: request.correlationId,
+        cycleTypeId: request.cycleTypeId,
+        result: "ok",
+        detailedStatus: resolutionOutcome.resolution.detailedStatus,
+        recommendedProfile:
+          qualification.recommendation.recommendedProfile,
+        durationMs: Date.now() - startedAt,
+      })
+    ) {
+      return this.internalFailure(request, true);
+    }
+
+    const result = createCkcQualificationSuccess({
+      projection,
+      proof: resolutionOutcome.proof,
+      recommendation: qualification.recommendation,
+      qualifiedAt,
+    });
+    if (
+      !this.tryEmit({
+        event: "oa.ckc.result_produced",
+        ts: qualifiedAt,
+        correlationId: request.correlationId,
+        cycleTypeId: request.cycleTypeId,
+        result: "ok",
+        detailedStatus: result.detailedStatus,
+        recommendedProfile: result.recommendedProfile,
+        durationMs: Date.now() - startedAt,
+      })
+    ) {
+      return this.internalFailure(request, true);
+    }
+    return result;
+  }
+
+  private fail(
+    request: QualifyCycleWithCkcRequest,
+    error: Parameters<typeof createCkcQualificationFailure>[0]["error"],
+    detailedStatus?: string,
+  ): CkcQualificationFailureResult {
+    const failedAt = this.clock.nowIso();
+    const failure = createCkcQualificationFailure({
+      error,
+      failedAt,
+      correlationId: request.correlationId,
+      cycleTypeId: request.cycleTypeId,
+    });
+    if (
+      !this.tryEmit({
+        event: "oa.ckc.request_failed",
+        ts: failedAt,
+        correlationId: request.correlationId,
+        cycleTypeId: request.cycleTypeId,
+        result: "error",
+        ...(detailedStatus ? { detailedStatus } : {}),
+        detailCode: failure.code,
+      })
+    ) {
+      return this.internalFailure(request, true);
+    }
+    return failure;
+  }
+
+  private internalFailure(
+    request: QualifyCycleWithCkcRequest,
+    auditAlreadyFailed = false,
+  ): CkcQualificationFailureResult {
+    const failedAt = this.safeFailureTimestamp();
+    const failure = createInternalCkcQualificationFailure({
+      failedAt,
+      correlationId: request.correlationId,
+      cycleTypeId: request.cycleTypeId,
+    });
+    if (!auditAlreadyFailed) {
+      if (
+        !this.tryEmit({
+          event: "oa.ckc.request_failed",
+          ts: failedAt,
+          correlationId: request.correlationId,
+          cycleTypeId: request.cycleTypeId,
+          result: "error",
+          detailCode: "D2_INTERNAL_ERROR",
+        })
+      ) {
+        // Morris FAIL-CLOSED: never recurse on an audit failure.
+      }
+    }
+    return failure;
+  }
+
+  private safeFailureTimestamp(): string {
+    try {
+      return this.clock.nowIso();
+    } catch {
+      return "1970-01-01T00:00:00.000Z";
+    }
+  }
+
+  private auditHasFailed(): boolean {
+    const audit = this.audit as
+      | (CycleAuditPort & { readonly hasFailed?: () => boolean })
+      | undefined;
+    return audit?.hasFailed?.() ?? false;
+  }
+
+  private tryEmit(
+    event: Parameters<CycleAuditPort["append"]>[0],
+  ): boolean {
+    if (!this.audit) {
+      return true;
+    }
+    try {
+      this.audit.append(event);
+      return true;
+    } catch {
+      return false;
+    }
+  }
+}

diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResult.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResult.test.ts
new file mode 100644
index 0000000000000000000000000000000000000000..4241ccac704f490accc8da60d299b184f8f0891c
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResult.test.ts
@@ -0,0 +1,114 @@
+import { describe, expect, it } from "vitest";
+import {
+  CKC_PILOT_CADRAGE_PATH,
+  CKC_SYNTHETIC_MAP_PATH,
+  createCkcQualificationFailure,
+  createCkcQualificationSuccess,
+  createSignalsIncompleteError,
+  type CkcConsumptionProof,
+  type QualifyCycleRecommendation,
+  type ValidatedCycleTypeProjection,
+} from "@/lib/oa/cycle";
+
+const projection: ValidatedCycleTypeProjection = Object.freeze({
+  cycleTypeId: "cyc:framing",
+  label: "Cadrage",
+  shortDescription: "Clarifier le périmètre.",
+  lifecycleStatus: "active",
+  ckc: Object.freeze({
+    mandatory: true,
+    primaryLevel: "detailed",
+    primaryReference: CKC_PILOT_CADRAGE_PATH,
+    fallbackPolicy: "synthetic_map",
+    fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+    executionAuthority: false,
+    doctrineStatus: "method-candidate",
+    unavailableBehavior: "fail-closed",
+  }),
+  catalogVersion: "3.1",
+  catalogHash: "sha256:catalog",
+  correlationId: "cor:d2-c-result",
+});
+
+const proof: CkcConsumptionProof = Object.freeze({
+  cycleTypeId: projection.cycleTypeId,
+  detailedStatus: "resolved_fallback_synthetic",
+  level: "synthetic",
+  status: "synthetic",
+  source: "intra_v3_synthetic",
+  expectedPrimaryReference: CKC_PILOT_CADRAGE_PATH,
+  usedReference: CKC_SYNTHETIC_MAP_PATH,
+  fallbackUsed: true,
+  fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+  catalogVersion: projection.catalogVersion,
+  catalogHash: projection.catalogHash,
+  correlationId: projection.correlationId,
+  resolvedAt: "2026-08-03T07:00:00.000Z",
+  doctrineStatus: "method-candidate",
+  executionAuthority: false,
+  consumed: true,
+  disclosures: Object.freeze(["CKC_FALLBACK_USED"]),
+});
+
+const recommendation: QualifyCycleRecommendation = Object.freeze({
+  recommendedProfile: "Critical",
+  rationale: "At least one critical signal is present.",
+  criticalSignalsPresent: true,
+  isMorrisDecision: false,
+  requiresJustificationForCritical: true,
+  capitalizationViaCycleTypeId: false,
+});
+
+describe("V3.1-D2-C Result Projection", () => {
+  it("builds a frozen success while preserving the original proof", () => {
+    const result = createCkcQualificationSuccess({
+      projection,
+      proof,
+      recommendation,
+      qualifiedAt: "2026-08-03T07:00:01.000Z",
+    });
+
+    expect(result).toMatchObject({
+      state: "success",
+      cycleTypeId: "cyc:framing",
+      detailedStatus: "resolved_fallback_synthetic",
+      recommendedProfile: "Critical",
+      isMorrisDecision: false,
+      disclosures: ["CKC_FALLBACK_USED"],
+    });
+    expect(result.proof).toBe(proof);
+    expect(result.proof.consumed).toBe(true);
+    expect(Object.isFrozen(result)).toBe(true);
+    expect(Object.isFrozen(result.disclosures)).toBe(true);
+  });
+
+  it("builds a frozen failure with no exploitable partial result", () => {
+    const result = createCkcQualificationFailure({
+      error: createSignalsIncompleteError({
+        correlationId: "cor:d2-c-result",
+        cycleTypeId: "cyc:framing",
+      }),
+      failedAt: "2026-08-03T07:00:02.000Z",
+      correlationId: "cor:d2-c-result",
+      cycleTypeId: "cyc:framing",
+    });
+
+    expect(result).toEqual({
+      state: "failure",
+      code: "SIGNALS_INCOMPLETE",
+      message: "All six qualification signals must be explicit booleans.",
+      blocking: true,
+      retryable: true,
+      recoverable: true,
+      correlationId: "cor:d2-c-result",
+      cycleTypeId: "cyc:framing",
+      failedAt: "2026-08-03T07:00:02.000Z",
+    });
+    expect(Object.isFrozen(result)).toBe(true);
+    expect(result).not.toHaveProperty("proof");
+    expect(result).not.toHaveProperty("consumed");
+    expect(result).not.toHaveProperty("recommendedProfile");
+    expect(result).not.toHaveProperty("rationale");
+    expect(result).not.toHaveProperty("criticalSignalsPresent");
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.test.ts
new file mode 100644
index 0000000000000000000000000000000000000000..395144341094f83c79e1823dbfb09365c1ddacbb
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.test.ts
@@ -0,0 +1,209 @@
+import { FixedClock } from "@/lib/oa/doctrine";
+import {
+  CkcQualificationResolver,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  CYCLE_TYPE_CATALOG_VERSION,
+  MemoryCycleAuditJournal,
+  QualifyCycleWithCkc,
+  type QualifyCycleExecutor,
+  type QualifyCycleWithCkcRequest,
+} from "@/lib/oa/cycle";
+import { describe, expect, it, vi } from "vitest";
+
+const NOW = "2026-08-03T07:10:00.000Z";
+
+function request(
+  overrides: Partial<QualifyCycleWithCkcRequest> = {},
+): QualifyCycleWithCkcRequest {
+  return {
+    cycleTypeId: "cyc:delivery",
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: "cor:d2-c",
+    signals: {
+      structuralChange: false,
+      securityImpact: false,
+      architectureImpact: false,
+      dataImpact: false,
+      irreversible: false,
+      lowRiskBounded: false,
+    },
+    ...overrides,
+  };
+}
+
+function executor(profile: "Light" | "Standard" | "Critical" = "Standard") {
+  const execute = vi.fn<QualifyCycleExecutor["execute"]>().mockResolvedValue({
+    ok: true,
+    recommendation: {
+      recommendedProfile: profile,
+      rationale: `T-A2 ${profile}`,
+      criticalSignalsPresent: profile === "Critical",
+      isMorrisDecision: false,
+      requiresJustificationForCritical: profile === "Critical",
+      capitalizationViaCycleTypeId: false,
+    },
+  });
+  return { execute } satisfies QualifyCycleExecutor;
+}
+
+describe("V3.1-D2-C QualifyCycleWithCkc", () => {
+  it("orchestrates projection, resolution, proof and QualifyCycle exactly once", async () => {
+    const qualifyCycle = executor("Standard");
+    const audit = new MemoryCycleAuditJournal();
+    const useCase = new QualifyCycleWithCkc(
+      new CkcQualificationResolver(),
+      qualifyCycle,
+      new FixedClock(NOW),
+      audit,
+    );
+
+    const result = await useCase.execute(
+      request({ objective: "ignored by scoring", scope: "read-only" }),
+    );
+
+    expect(result.state).toBe("success");
+    if (result.state !== "success") throw new Error(result.message);
+    expect(result.recommendedProfile).toBe("Standard");
+    expect(result.proof.consumed).toBe(true);
+    expect(result.isMorrisDecision).toBe(false);
+    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
+    expect(qualifyCycle.execute).toHaveBeenCalledWith({
+      signals: request().signals,
+      cycleTypeId: "cyc:delivery",
+      objective: "ignored by scoring",
+      scope: "read-only",
+    });
+    expect(audit.events.map(({ event }) => event)).toEqual([
+      "oa.ckc.qualification_started",
+      "oa.ckc.qualification_succeeded",
+      "oa.ckc.result_produced",
+    ]);
+    for (const event of audit.events) {
+      expect(event).not.toHaveProperty("objective");
+      expect(event).not.toHaveProperty("scope");
+      expect(event).not.toHaveProperty("signals");
+      expect(event).not.toHaveProperty("proof");
+    }
+  });
+
+  it.each([
+    "structuralChange",
+    "securityImpact",
+    "architectureImpact",
+    "dataImpact",
+    "irreversible",
+    "lowRiskBounded",
+  ] as const)("rejects missing %s before QualifyCycle", async (missing) => {
+    const qualifyCycle = executor();
+    const signals = { ...request().signals } as Record<string, boolean>;
+    delete signals[missing];
+    const useCase = new QualifyCycleWithCkc(
+      new CkcQualificationResolver(),
+      qualifyCycle,
+      new FixedClock(NOW),
+    );
+
+    const result = await useCase.execute(
+      request({
+        signals: signals as QualifyCycleWithCkcRequest["signals"],
+      }),
+    );
+
+    expect(result).toMatchObject({
+      state: "failure",
+      code: "SIGNALS_INCOMPLETE",
+      blocking: true,
+    });
+    expect(result).not.toHaveProperty("proof");
+    expect(result).not.toHaveProperty("recommendedProfile");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("distinguishes explicit false from absence", async () => {
+    const qualifyCycle = executor("Light");
+    const useCase = new QualifyCycleWithCkc(
+      new CkcQualificationResolver(),
+      qualifyCycle,
+      new FixedClock(NOW),
+    );
+
+    const result = await useCase.execute(
+      request({
+        signals: {
+          structuralChange: false,
+          securityImpact: false,
+          architectureImpact: false,
+          dataImpact: false,
+          irreversible: false,
+          lowRiskBounded: true,
+        },
+      }),
+    );
+    expect(result.state).toBe("success");
+    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
+  });
+
+  it.each([
+    ["unknown type", { cycleTypeId: "cyc:missing" }, "CYCLE_TYPE_UNKNOWN"],
+    [
+      "catalog version",
+      { catalogVersion: "stale" },
+      "CATALOG_VERSION_INCOMPATIBLE",
+    ],
+    [
+      "catalog hash",
+      { catalogHash: "sha256:stale" },
+      "CATALOG_FINGERPRINT_STALE",
+    ],
+  ] as const)("fails closed for %s without QualifyCycle", async (_label, overrides, code) => {
+    const qualifyCycle = executor();
+    const result = await new QualifyCycleWithCkc(
+      new CkcQualificationResolver(),
+      qualifyCycle,
+      new FixedClock(NOW),
+    ).execute(request(overrides));
+
+    expect(result).toMatchObject({ state: "failure", code });
+    expect(result).not.toHaveProperty("proof");
+    expect(result).not.toHaveProperty("consumed");
+    expect(result).not.toHaveProperty("recommendedProfile");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("rejects requestedProfile at the public TypeScript boundary", () => {
+    const invalid: QualifyCycleWithCkcRequest = {
+      ...request(),
+      // @ts-expect-error requestedProfile is deliberately not a D2-C input.
+      requestedProfile: "Critical",
+    };
+    expect(invalid).toHaveProperty("requestedProfile");
+  });
+
+  it("rejects runtime requestedProfile and extra signal keys without QualifyCycle", async () => {
+    const qualifyCycle = executor();
+    const useCase = new QualifyCycleWithCkc(
+      new CkcQualificationResolver(),
+      qualifyCycle,
+      new FixedClock(NOW),
+    );
+    const withRequestedProfile = {
+      ...request(),
+      requestedProfile: "Critical",
+    } as unknown as QualifyCycleWithCkcRequest;
+    const withExtraSignal = {
+      ...request(),
+      signals: { ...request().signals, inventedScore: true },
+    } as unknown as QualifyCycleWithCkcRequest;
+
+    await expect(useCase.execute(withRequestedProfile)).resolves.toMatchObject({
+      state: "failure",
+      code: "SIGNALS_INCOMPLETE",
+    });
+    await expect(useCase.execute(withExtraSignal)).resolves.toMatchObject({
+      state: "failure",
+      code: "SIGNALS_INCOMPLETE",
+    });
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts
new file mode 100644
index 0000000000000000000000000000000000000000..8ee350967b81a72bd710843828c38c063496cdf3
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.qa.test.ts
@@ -0,0 +1,315 @@
+/**
+ * V3.1-D2-C independent Delivery reinforcement.
+ * @vitest-environment node
+ */
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { FixedClock } from "@/lib/oa/doctrine";
+import {
+  CKC_REFERENCE_MANIFEST,
+  CkcQualificationResolver,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  CYCLE_TYPE_CATALOG_VERSION,
+  MemoryCycleAuditJournal,
+  createCkcQualificationServices,
+  projectSelectableCycleType,
+  type CkcReferenceManifest,
+  type CycleAuditEvent,
+  type CycleAuditPort,
+  type QualifyCycleExecutor,
+  type QualifyCycleWithCkcRequest,
+} from "@/lib/oa/cycle";
+import { describe, expect, it, vi } from "vitest";
+
+const NOW = "2026-08-03T07:20:00.000Z";
+
+function request(
+  cycleTypeId: string,
+  signalOverrides: Partial<QualifyCycleWithCkcRequest["signals"]> = {},
+): QualifyCycleWithCkcRequest {
+  return {
+    cycleTypeId,
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: `cor:${cycleTypeId}`,
+    signals: {
+      structuralChange: false,
+      securityImpact: false,
+      architectureImpact: false,
+      dataImpact: false,
+      irreversible: false,
+      lowRiskBounded: false,
+      ...signalOverrides,
+    },
+  };
+}
+
+function projection(cycleTypeId = "cyc:delivery") {
+  const result = projectSelectableCycleType({
+    cycleTypeId,
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: "cor:mutable-proof",
+  });
+  if (!result.ok) throw new Error(result.error.message);
+  return result.projection;
+}
+
+describe("V3.1-D2-C integrated A → B → C", () => {
+  it.each([
+    ["cyc:framing", { lowRiskBounded: true }, "Light"],
+    ["cyc:technical-architecture", { securityImpact: true }, "Critical"],
+    ["cyc:delivery", { lowRiskBounded: false }, "Standard"],
+  ] as const)("qualifies %s as %s through the real read-only factory", async (
+    cycleTypeId,
+    signals,
+    expectedProfile,
+  ) => {
+    const audit = new MemoryCycleAuditJournal();
+    const services = createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit,
+    });
+
+    const result = await services.qualifyCycleWithCkc.execute(
+      request(cycleTypeId, signals),
+    );
+
+    expect(result.state).toBe("success");
+    if (result.state !== "success") throw new Error(result.message);
+    expect(result.recommendedProfile).toBe(expectedProfile);
+    expect(result.proof.consumed).toBe(true);
+    expect(result.isMorrisDecision).toBe(false);
+    expect(result.qualifiedAt).toBe(NOW);
+    expect(audit.events.filter((event) => event.event === "oa.cycle.qualified"))
+      .toHaveLength(1);
+  });
+
+  it("marks capitalization through cycleTypeId without a new profile enum", async () => {
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+    }).qualifyCycleWithCkc.execute(request("cyc:capitalization"));
+
+    expect(result.state).toBe("success");
+    if (result.state !== "success") throw new Error(result.message);
+    expect(result.recommendedProfile).toBe("Standard");
+    expect(result.capitalizationViaCycleTypeId).toBe(true);
+    expect(result.isMorrisDecision).toBe(false);
+  });
+
+  it("uses the authorized synthetic fallback and retains its disclosure", async () => {
+    const manifest: CkcReferenceManifest = Object.freeze({
+      entries: Object.freeze(
+        CKC_REFERENCE_MANIFEST.entries.map((entry) =>
+          entry.level === "detailed" &&
+          entry.reference.includes("cadrage")
+            ? Object.freeze({ ...entry, availability: "unavailable" as const })
+            : entry,
+        ),
+      ),
+    });
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+      resolver: new CkcQualificationResolver(manifest),
+    }).qualifyCycleWithCkc.execute(
+      request("cyc:framing", { lowRiskBounded: true }),
+    );
+
+    expect(result.state).toBe("success");
+    if (result.state !== "success") throw new Error(result.message);
+    expect(result.detailedStatus).toBe("resolved_fallback_synthetic");
+    expect(result.proof.fallbackUsed).toBe(true);
+    expect(result.disclosures).toEqual(["CKC_FALLBACK_USED"]);
+  });
+
+  it("fails closed when the resolver cannot produce a consumable proof", async () => {
+    const qualifyCycle = {
+      execute: vi.fn<QualifyCycleExecutor["execute"]>(),
+    };
+    const resolver = new CkcQualificationResolver(
+      Object.freeze({
+        entries: Object.freeze(
+          CKC_REFERENCE_MANIFEST.entries.map((entry) =>
+            entry.level === "synthetic"
+              ? Object.freeze({
+                  ...entry,
+                  availability: "unavailable" as const,
+                })
+              : entry,
+          ),
+        ),
+      }),
+    );
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+      resolver,
+      qualifyCycle,
+    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));
+
+    expect(result).toMatchObject({
+      state: "failure",
+      code: "CKC_SYNTHETIC_INVALID",
+    });
+    expect(result).not.toHaveProperty("proof");
+    expect(result).not.toHaveProperty("recommendedProfile");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("converts hostile audit behavior to a safe internal failure without recursion", async () => {
+    const events: CycleAuditEvent[] = [];
+    const audit: CycleAuditPort = {
+      append(event) {
+        events.push(event);
+        if (event.event === "oa.cycle.qualified") {
+          throw new Error("hostile raw secret");
+        }
+      },
+    };
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit,
+      resolver: new CkcQualificationResolver(),
+    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));
+
+    expect(result).toMatchObject({
+      state: "failure",
+      code: "D2_INTERNAL_ERROR",
+      message: "The CKC qualification could not be completed.",
+    });
+    expect(result).not.toHaveProperty("proof");
+    expect(result).not.toHaveProperty("recommendedProfile");
+    expect(JSON.stringify(result)).not.toContain("hostile raw secret");
+    expect(events.filter((event) => event.event === "oa.cycle.qualified"))
+      .toHaveLength(1);
+    expect(events.filter((event) => event.event === "oa.ckc.request_failed"))
+      .toHaveLength(0);
+  });
+
+  it("does not re-emit after the D2-B resolver reports an audit failure", async () => {
+    let appendCalls = 0;
+    const audit: CycleAuditPort = {
+      append() {
+        appendCalls += 1;
+        throw new Error("audit unavailable");
+      },
+    };
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit,
+    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));
+
+    expect(result).toMatchObject({
+      state: "failure",
+      code: "D2_INTERNAL_ERROR",
+    });
+    expect(appendCalls).toBe(1);
+  });
+
+  it("emits request_failed for an ordinary executor exception while audit is healthy", async () => {
+    const audit = new MemoryCycleAuditJournal();
+    const qualifyCycle = {
+      execute: vi
+        .fn<QualifyCycleExecutor["execute"]>()
+        .mockRejectedValue(new Error("ordinary dependency failure")),
+    };
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit,
+      qualifyCycle,
+    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));
+
+    expect(result).toMatchObject({
+      state: "failure",
+      code: "D2_INTERNAL_ERROR",
+    });
+    expect(
+      audit.events.filter((event) => event.event === "oa.ckc.request_failed"),
+    ).toHaveLength(1);
+    expect(JSON.stringify(result)).not.toContain("ordinary dependency failure");
+  });
+
+  it("rejects a mutable injected proof instead of exposing its alias", async () => {
+    const canonical = new CkcQualificationResolver().resolve({
+      projection: projection(),
+      resolvedAt: NOW,
+    });
+    if (!canonical.ok) throw new Error(canonical.error.message);
+    const mutableProof = {
+      ...canonical.proof,
+      disclosures: [...canonical.proof.disclosures],
+    };
+    const qualifyCycle = {
+      execute: vi.fn<QualifyCycleExecutor["execute"]>(),
+    };
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+      resolver: {
+        resolve: () => ({
+          ok: true as const,
+          resolution: canonical.resolution,
+          proof: mutableProof,
+        }),
+      },
+      qualifyCycle,
+    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));
+
+    expect(result).toMatchObject({
+      state: "failure",
+      code: "D2_INTERNAL_ERROR",
+    });
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("normalizes a hostile clock without exposing the exception", async () => {
+    const result = await createCkcQualificationServices({
+      clock: {
+        nowIso() {
+          throw new Error("hostile clock secret");
+        },
+      },
+      audit: new MemoryCycleAuditJournal(),
+    }).qualifyCycleWithCkc.execute(request("cyc:delivery"));
+
+    expect(result).toMatchObject({
+      state: "failure",
+      code: "D2_INTERNAL_ERROR",
+      message: "The CKC qualification could not be completed.",
+      failedAt: "1970-01-01T00:00:00.000Z",
+    });
+    expect(JSON.stringify(result)).not.toContain("hostile clock secret");
+  });
+
+  it("keeps the factory and new modules read-only and free of forbidden imports", () => {
+    const root = path.resolve(__dirname, "../../../lib/oa/cycle");
+    const indexSource = readFileSync(path.join(root, "index.ts"), "utf8");
+    const resultSource = readFileSync(
+      path.join(root, "domain/ckcQualificationResult.ts"),
+      "utf8",
+    );
+    const bridgeSource = readFileSync(
+      path.join(root, "application/qualifyCycleWithCkc.ts"),
+      "utf8",
+    );
+
+    expect(indexSource).toContain("createCkcQualificationServices");
+    expect(indexSource).toContain("qualifyCycleWithCkc");
+    const factory = createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+    });
+    expect(Object.keys(factory).sort()).toEqual([
+      "audit",
+      "qualifyCycleWithCkc",
+      "resolver",
+    ]);
+    for (const source of [resultSource, bridgeSource]) {
+      expect(source).not.toMatch(
+        /CreateCycle|MemoryCycleStore|ProjectServices|Repository|node:crypto|node:fs|from ["']next|from ["']react|Markdown/,
+      );
+    }
+  });
+});

diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.independent.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.independent.qa.test.ts
new file mode 100644
index 0000000000000000000000000000000000000000..742c71411061ee7b297d4a96490996659f83622a
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/qualifyCycleWithCkc.independent.qa.test.ts
@@ -0,0 +1,1029 @@
+/**
+ * V3.1-D2-C Cycle 9 — Independent adversarial QA.
+ * Oracle owned by this file only. Delivery tests are not the source of truth.
+ * @vitest-environment node
+ */
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { FixedClock, type ClockPort } from "@/lib/oa/doctrine";
+import {
+  CKC_PILOT_CADRAGE_PATH,
+  CKC_REFERENCE_MANIFEST,
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  CYCLE_TYPE_CATALOG_VERSION,
+  CkcQualificationResolver,
+  MemoryCycleAuditJournal,
+  QualifyCycleWithCkc,
+  createCkcQualificationFailure,
+  createCkcQualificationServices,
+  createCkcQualificationSuccess,
+  createSignalsIncompleteError,
+  projectSelectableCycleType,
+  type CkcConsumptionProof,
+  type CkcQualificationResolverPort,
+  type CkcReferenceManifest,
+  type CycleAuditEvent,
+  type CycleAuditPort,
+  type QualifyCycleExecutor,
+  type QualifyCycleRecommendation,
+  type QualifyCycleResult,
+  type QualifyCycleWithCkcRequest,
+  type ValidatedCycleTypeProjection,
+} from "@/lib/oa/cycle";
+import { describe, expect, it, vi } from "vitest";
+
+const NOW = "2026-08-03T08:50:00.000Z";
+const SIGNAL_NAMES = [
+  "structuralChange",
+  "securityImpact",
+  "architectureImpact",
+  "dataImpact",
+  "irreversible",
+  "lowRiskBounded",
+] as const;
+
+const FORBIDDEN_FAILURE_KEYS = [
+  "proof",
+  "consumed",
+  "recommendedProfile",
+  "rationale",
+  "criticalSignalsPresent",
+  "disclosures",
+  "label",
+  "shortDescription",
+] as const;
+
+function baseSignals(
+  overrides: Partial<Record<(typeof SIGNAL_NAMES)[number], boolean>> = {},
+) {
+  return {
+    structuralChange: false,
+    securityImpact: false,
+    architectureImpact: false,
+    dataImpact: false,
+    irreversible: false,
+    lowRiskBounded: false,
+    ...overrides,
+  };
+}
+
+function qaRequest(
+  overrides: Partial<QualifyCycleWithCkcRequest> & {
+    readonly signals?: QualifyCycleWithCkcRequest["signals"];
+  } = {},
+): QualifyCycleWithCkcRequest {
+  return {
+    cycleTypeId: "cyc:delivery",
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: "cor:qa-d2c-independent",
+    signals: baseSignals(),
+    ...overrides,
+  };
+}
+
+function assertSafeFailure(
+  result: { state: string; code?: string; message?: string },
+  expectedCode?: string,
+) {
+  expect(result.state).toBe("failure");
+  if (result.state === "failure" && expectedCode) {
+    expect((result as { code: string }).code).toBe(expectedCode);
+  }
+  for (const key of FORBIDDEN_FAILURE_KEYS) {
+    expect(Object.prototype.hasOwnProperty.call(result, key)).toBe(false);
+  }
+  const serialized = JSON.stringify(result);
+  expect(serialized).not.toMatch(/stack|Error:|at Object\.|hostile raw/i);
+}
+
+function frozenProjection(
+  cycleTypeId = "cyc:delivery",
+): ValidatedCycleTypeProjection {
+  const outcome = projectSelectableCycleType({
+    cycleTypeId,
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: "cor:qa-projection",
+  });
+  if (!outcome.ok) throw new Error(outcome.error.message);
+  return outcome.projection;
+}
+
+function frozenProof(
+  projection: ValidatedCycleTypeProjection = frozenProjection(),
+  overrides: Partial<CkcConsumptionProof> = {},
+): CkcConsumptionProof {
+  return Object.freeze({
+    cycleTypeId: projection.cycleTypeId,
+    detailedStatus: "resolved_synthetic" as const,
+    level: "synthetic" as const,
+    status: "synthetic" as const,
+    source: "intra_v3_synthetic" as const,
+    expectedPrimaryReference: CKC_SYNTHETIC_MAP_PATH,
+    usedReference: CKC_SYNTHETIC_MAP_PATH,
+    fallbackUsed: false,
+    catalogVersion: projection.catalogVersion,
+    catalogHash: projection.catalogHash,
+    correlationId: projection.correlationId,
+    resolvedAt: NOW,
+    doctrineStatus: "method-candidate" as const,
+    executionAuthority: false as const,
+    consumed: true as const,
+    disclosures: Object.freeze([] as string[]),
+    ...overrides,
+  });
+}
+
+function recommendation(
+  overrides: Partial<QualifyCycleRecommendation> = {},
+): QualifyCycleRecommendation {
+  return Object.freeze({
+    recommendedProfile: "Standard",
+    rationale: "QA independent oracle recommendation.",
+    criticalSignalsPresent: false,
+    isMorrisDecision: false as const,
+    requiresJustificationForCritical: false,
+    capitalizationViaCycleTypeId: false,
+    ...overrides,
+  });
+}
+
+function successQualify(
+  rec: QualifyCycleRecommendation = recommendation(),
+): QualifyCycleExecutor {
+  return {
+    execute: vi.fn(async () =>
+      Object.freeze({
+        ok: true as const,
+        recommendation: rec,
+      }),
+    ),
+  };
+}
+
+function okResolver(
+  proof: CkcConsumptionProof = frozenProof(),
+): CkcQualificationResolverPort {
+  const resolution = Object.freeze({
+    cycleTypeId: proof.cycleTypeId,
+    detailedStatus: proof.detailedStatus,
+    level: proof.level,
+    status: proof.status,
+    source: proof.source,
+    fallbackPolicy: "intra_v3_only" as const,
+    expectedPrimaryReference: proof.expectedPrimaryReference,
+    usedReference: proof.usedReference,
+    fallbackUsed: proof.fallbackUsed,
+    catalogVersion: proof.catalogVersion,
+    catalogHash: proof.catalogHash,
+    correlationId: proof.correlationId,
+    resolvedAt: proof.resolvedAt,
+    doctrineStatus: proof.doctrineStatus,
+    executionAuthority: proof.executionAuthority,
+    exploitable: true,
+    disclosures: proof.disclosures,
+  });
+  return {
+    resolve: vi.fn(() => ({
+      ok: true as const,
+      resolution,
+      proof,
+    })),
+  };
+}
+
+function failedResolver(
+  code: "CKC_SYNTHETIC_INVALID" | "D2_INTERNAL_ERROR",
+  message: string,
+): CkcQualificationResolverPort {
+  const proofBase = frozenProof();
+  const resolution = Object.freeze({
+    cycleTypeId: "cyc:delivery",
+    detailedStatus: "unresolved_unavailable" as const,
+    level: "synthetic" as const,
+    status: "unavailable" as const,
+    source: "intra_v3_synthetic" as const,
+    fallbackPolicy: "intra_v3_only" as const,
+    expectedPrimaryReference: proofBase.expectedPrimaryReference,
+    fallbackUsed: false,
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: "cor:qa-d2c-independent",
+    resolvedAt: NOW,
+    doctrineStatus: "method-candidate" as const,
+    executionAuthority: false as const,
+    exploitable: false,
+    disclosures: Object.freeze([] as string[]),
+  });
+  return {
+    resolve: vi.fn(() => ({
+      ok: false as const,
+      resolution,
+      error: Object.freeze({
+        code,
+        message,
+        blocking: true as const,
+        retryable: code === "D2_INTERNAL_ERROR",
+        recoverable: code === "D2_INTERNAL_ERROR",
+        correlationId: "cor:qa-d2c-independent",
+        cycleTypeId: "cyc:delivery",
+      }),
+    })),
+  };
+}
+
+function bridge(deps: {
+  resolver?: CkcQualificationResolverPort;
+  qualifyCycle?: QualifyCycleExecutor;
+  clock?: ClockPort;
+  audit?: CycleAuditPort;
+}) {
+  return new QualifyCycleWithCkc(
+    deps.resolver ?? okResolver(),
+    deps.qualifyCycle ?? successQualify(),
+    deps.clock ?? new FixedClock(NOW),
+    deps.audit,
+  );
+}
+
+describe("QA-01 Failure closed shape (BL-D2-C-01/04)", () => {
+  it("keeps Failure keys closed even when the error source carries extras", () => {
+    const base = createSignalsIncompleteError({
+      correlationId: "cor:qa-01",
+      cycleTypeId: "cyc:delivery",
+    });
+    const hostile = {
+      ...base,
+      proof: { consumed: true },
+      recommendedProfile: "Critical",
+      stack: "hostile stack",
+      secret: "token-xyz",
+    };
+    const result = createCkcQualificationFailure({
+      error: hostile,
+      failedAt: NOW,
+      correlationId: "cor:qa-01",
+      cycleTypeId: "cyc:delivery",
+    });
+
+    expect(Object.keys(result).sort()).toEqual(
+      [
+        "blocking",
+        "code",
+        "correlationId",
+        "cycleTypeId",
+        "failedAt",
+        "message",
+        "recoverable",
+        "retryable",
+        "state",
+      ].sort(),
+    );
+    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
+    expect(JSON.stringify(result)).not.toContain("token-xyz");
+    expect(JSON.stringify(result)).not.toContain("hostile stack");
+    expect(Object.isFrozen(result)).toBe(true);
+  });
+});
+
+describe("QA-02 Success identity and immutability (BL-D2-C-01)", () => {
+  it("preserves the original proof identity and freezes the projection", () => {
+    const projection = frozenProjection("cyc:framing");
+    const proof = frozenProof(projection, {
+      detailedStatus: "resolved_fallback_synthetic",
+      fallbackUsed: true,
+      fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+      expectedPrimaryReference: CKC_PILOT_CADRAGE_PATH,
+      disclosures: Object.freeze(["CKC_FALLBACK_USED"]),
+    });
+    const rec = recommendation({
+      recommendedProfile: "Light",
+      rationale: "Low-risk framing.",
+    });
+    const result = createCkcQualificationSuccess({
+      projection,
+      proof,
+      recommendation: rec,
+      qualifiedAt: NOW,
+    });
+
+    expect(result.proof).toBe(proof);
+    expect(result.recommendedProfile).toBe("Light");
+    expect(result.isMorrisDecision).toBe(false);
+    expect(Object.isFrozen(result)).toBe(true);
+    expect(Object.isFrozen(result.disclosures)).toBe(true);
+    expect(() => {
+      (result as { recommendedProfile?: string }).recommendedProfile =
+        "Critical";
+    }).toThrow();
+    expect(() => {
+      (result.disclosures as string[]).push("MUTATED");
+    }).toThrow();
+    expect(result.recommendedProfile).toBe("Light");
+    expect(result.disclosures).toEqual(["CKC_FALLBACK_USED"]);
+  });
+});
+
+describe("QA-03 Six-signal matrix (BL-D2-C-02)", () => {
+  for (const signal of SIGNAL_NAMES) {
+    it.each([
+      ["absent", "absent"],
+      ["undefined", undefined],
+      ["null", null],
+      ["string", "true"],
+      ["number", 1],
+    ] as const)(
+      `rejects ${signal} when value is %s before QualifyCycle`,
+      async (_label, value) => {
+        const qualifyCycle = successQualify();
+        const signals = { ...baseSignals() } as Record<string, unknown>;
+        if (value === "absent") {
+          delete signals[signal];
+        } else {
+          signals[signal] = value;
+        }
+        const result = await bridge({ qualifyCycle }).execute({
+          ...qaRequest(),
+          signals: signals as QualifyCycleWithCkcRequest["signals"],
+        });
+        assertSafeFailure(result, "SIGNALS_INCOMPLETE");
+        expect(qualifyCycle.execute).not.toHaveBeenCalled();
+      },
+    );
+  }
+
+  it("rejects an extra signal key", async () => {
+    const qualifyCycle = successQualify();
+    const result = await bridge({ qualifyCycle }).execute({
+      ...qaRequest(),
+      signals: {
+        ...baseSignals(),
+        unexpected: false,
+      } as QualifyCycleWithCkcRequest["signals"],
+    });
+    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("rejects runtime requestedProfile", async () => {
+    const qualifyCycle = successQualify();
+    const result = await bridge({ qualifyCycle }).execute({
+      ...qaRequest(),
+      requestedProfile: "Critical",
+    } as QualifyCycleWithCkcRequest);
+    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("does not accept a prototype-inherited signal as an own property", async () => {
+    const qualifyCycle = successQualify();
+    const proto = { structuralChange: true };
+    const signals = Object.create(proto);
+    for (const name of SIGNAL_NAMES) {
+      if (name !== "structuralChange") signals[name] = false;
+    }
+    const result = await bridge({ qualifyCycle }).execute({
+      ...qaRequest(),
+      signals,
+    });
+    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("normalizes a getter that throws without a raw throw", async () => {
+    const qualifyCycle = successQualify();
+    const signals: Record<string, unknown> = { ...baseSignals() };
+    Object.defineProperty(signals, "securityImpact", {
+      enumerable: true,
+      configurable: true,
+      get() {
+        throw new Error("hostile getter");
+      },
+    });
+    const result = await bridge({ qualifyCycle }).execute({
+      ...qaRequest(),
+      signals: signals as QualifyCycleWithCkcRequest["signals"],
+    });
+    expect(result.state).toBe("failure");
+    expect(["SIGNALS_INCOMPLETE", "D2_INTERNAL_ERROR"]).toContain(
+      (result as { code?: string }).code,
+    );
+    assertSafeFailure(result);
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+    expect(JSON.stringify(result)).not.toContain("hostile getter");
+  });
+
+  it("does not score objective/scope and keeps them out of D2-C audit payloads", async () => {
+    const events: CycleAuditEvent[] = [];
+    const audit: CycleAuditPort = {
+      append(event) {
+        events.push(event);
+      },
+    };
+    const qualifyCycle = successQualify(
+      recommendation({ recommendedProfile: "Standard" }),
+    );
+    const result = await bridge({ audit, qualifyCycle }).execute(
+      qaRequest({
+        objective: "SECRET_OBJECTIVE",
+        scope: "SECRET_SCOPE",
+        signals: baseSignals({ lowRiskBounded: false }),
+      }),
+    );
+    expect(result.state).toBe("success");
+    const payload = JSON.stringify(events);
+    expect(payload).not.toContain("SECRET_OBJECTIVE");
+    expect(payload).not.toContain("SECRET_SCOPE");
+    expect(payload).not.toContain("structuralChange");
+    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
+    const forwarded = vi.mocked(qualifyCycle.execute).mock.calls[0][0];
+    expect(forwarded).not.toHaveProperty("requestedProfile");
+    expect(Object.keys(forwarded.signals).sort()).toEqual([...SIGNAL_NAMES].sort());
+  });
+});
+
+describe("QA-04 Order and cardinality (BL-D2-C-03)", () => {
+  it("calls Catalog Projection → resolver → QualifyCycle ×1 → success", async () => {
+    const order: string[] = [];
+    const projectionSpy = vi.fn((context) => {
+      order.push("catalog");
+      return projectSelectableCycleType(context);
+    });
+    const resolver: CkcQualificationResolverPort = {
+      resolve: vi.fn((input) => {
+        order.push("resolver");
+        const canonical = okResolver().resolve(input);
+        return canonical;
+      }),
+    };
+    const qualifyCycle: QualifyCycleExecutor = {
+      execute: vi.fn(async () => {
+        order.push("qualify");
+        return Object.freeze({
+          ok: true as const,
+          recommendation: recommendation(),
+        });
+      }),
+    };
+    // Inject via bridge with resolver spy; catalog is hard-wired in production.
+    // Independence probe: verify resolver precedes QualifyCycle and QualifyCycle = 1.
+    const result = await bridge({ resolver, qualifyCycle }).execute(qaRequest());
+    expect(result.state).toBe("success");
+    expect(order).toEqual(["resolver", "qualify"]);
+    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
+    expect(resolver.resolve).toHaveBeenCalledTimes(1);
+    expect(projectionSpy).toHaveBeenCalledTimes(0);
+  });
+
+  it.each([
+    ["unknown type", qaRequest({ cycleTypeId: "cyc:does-not-exist" }), "CYCLE_TYPE_UNKNOWN"],
+    [
+      "incompatible version",
+      qaRequest({ catalogVersion: "9.9.9-wrong" }),
+      "CATALOG_VERSION_INCOMPATIBLE",
+    ],
+    [
+      "stale hash",
+      qaRequest({ catalogHash: "sha256:stale-hash-value" }),
+      "CATALOG_FINGERPRINT_STALE",
+    ],
+  ] as const)(
+    "never calls QualifyCycle after upstream %s",
+    async (_label, request, code) => {
+      const qualifyCycle = successQualify();
+      const resolver = okResolver();
+      const result = await bridge({ resolver, qualifyCycle }).execute(request);
+      assertSafeFailure(result, code);
+      expect(qualifyCycle.execute).not.toHaveBeenCalled();
+      expect(resolver.resolve).not.toHaveBeenCalled();
+    },
+  );
+});
+
+describe("QA-05 Resolver hostile (BL-D2-C-04)", () => {
+  it("normalizes a resolver throw", async () => {
+    const qualifyCycle = successQualify();
+    const result = await bridge({
+      qualifyCycle,
+      resolver: {
+        resolve() {
+          throw new Error("resolver boom");
+        },
+      },
+    }).execute(qaRequest());
+    assertSafeFailure(result, "D2_INTERNAL_ERROR");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+    expect(JSON.stringify(result)).not.toContain("resolver boom");
+  });
+
+  it("rejects proof with consumed !== true", async () => {
+    const qualifyCycle = successQualify();
+    const projection = frozenProjection();
+    const proof = Object.freeze({
+      ...frozenProof(projection),
+      consumed: false,
+    }) as unknown as CkcConsumptionProof;
+    const result = await bridge({
+      qualifyCycle,
+      resolver: {
+        resolve: () =>
+          ({
+            ok: true,
+            resolution: Object.freeze({
+              ...proof,
+              fallbackPolicy: "intra_v3_only",
+              exploitable: true,
+              detailedStatus: "resolved_synthetic",
+            }),
+            proof,
+          }) as unknown as ReturnType<CkcQualificationResolverPort["resolve"]>,
+      },
+    }).execute(qaRequest());
+    assertSafeFailure(result, "D2_INTERNAL_ERROR");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("rejects a mutable proof alias", async () => {
+    const qualifyCycle = successQualify();
+    const projection = frozenProjection();
+    const mutable = { ...frozenProof(projection) };
+    const result = await bridge({
+      qualifyCycle,
+      resolver: {
+        resolve: () =>
+          ({
+            ok: true,
+            resolution: Object.freeze({
+              ...mutable,
+              fallbackPolicy: "intra_v3_only",
+              exploitable: true,
+            }),
+            proof: mutable,
+          }) as unknown as ReturnType<CkcQualificationResolverPort["resolve"]>,
+      },
+    }).execute(qaRequest());
+    assertSafeFailure(result, "D2_INTERNAL_ERROR");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("surfaces a structured D2-B error without calling QualifyCycle", async () => {
+    const qualifyCycle = successQualify();
+    const result = await bridge({
+      qualifyCycle,
+      resolver: failedResolver(
+        "CKC_SYNTHETIC_INVALID",
+        "Synthetic map unavailable.",
+      ),
+    }).execute(qaRequest());
+    assertSafeFailure(result, "CKC_SYNTHETIC_INVALID");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("does not re-emit after resolver D2_INTERNAL_ERROR", async () => {
+    let appendCalls = 0;
+    const audit: CycleAuditPort = {
+      append() {
+        appendCalls += 1;
+      },
+    };
+    const result = await bridge({
+      audit,
+      qualifyCycle: successQualify(),
+      resolver: failedResolver("D2_INTERNAL_ERROR", "Audit unavailable."),
+    }).execute(qaRequest());
+    assertSafeFailure(result, "D2_INTERNAL_ERROR");
+    expect(appendCalls).toBe(0);
+  });
+});
+
+describe("QA-06 QualifyCycle hostile (BL-D2-C-03/04)", () => {
+  it("normalizes a rejected QualifyCycle promise", async () => {
+    const result = await bridge({
+      qualifyCycle: {
+        execute: vi.fn(async () => {
+          throw new Error("qc rejected");
+        }),
+      },
+      audit: new MemoryCycleAuditJournal(),
+    }).execute(qaRequest());
+    assertSafeFailure(result, "D2_INTERNAL_ERROR");
+    expect(JSON.stringify(result)).not.toContain("qc rejected");
+  });
+
+  it("invokes QualifyCycle at most once even when it throws", async () => {
+    const qualifyCycle = {
+      execute: vi.fn(async () => {
+        throw new Error("qc sync");
+      }),
+    };
+    const result = await bridge({
+      qualifyCycle,
+      audit: new MemoryCycleAuditJournal(),
+    }).execute(qaRequest());
+    assertSafeFailure(result, "D2_INTERNAL_ERROR");
+    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
+  });
+
+  it("forwards exactly the six signal keys into QualifyCycle at call time", async () => {
+    let keysAtCall: string[] = [];
+    const qualifyCycle: QualifyCycleExecutor = {
+      execute: vi.fn(async (request) => {
+        keysAtCall = Object.keys(request.signals).sort();
+        (request.signals as { extra?: boolean }).extra = true;
+        return Object.freeze({
+          ok: true as const,
+          recommendation: recommendation(),
+        });
+      }),
+    };
+    const result = await bridge({
+      qualifyCycle,
+      audit: new MemoryCycleAuditJournal(),
+    }).execute(qaRequest());
+    expect(result.state).toBe("success");
+    expect(keysAtCall).toEqual([...SIGNAL_NAMES].sort());
+    expect(qualifyCycle.execute).toHaveBeenCalledTimes(1);
+  });
+});
+
+describe("QA-07 Clock hostile (BL-D2-C-04) — R-QA-REV-01 remains open", () => {
+  it("returns a safe Failure when the clock throws immediately", async () => {
+    const result = await bridge({
+      clock: {
+        nowIso() {
+          throw new Error("hostile clock secret");
+        },
+      },
+      audit: new MemoryCycleAuditJournal(),
+    }).execute(qaRequest());
+    assertSafeFailure(result, "D2_INTERNAL_ERROR");
+    expect(result).toMatchObject({
+      failedAt: "1970-01-01T00:00:00.000Z",
+    });
+    expect(JSON.stringify(result)).not.toContain("hostile clock secret");
+  });
+
+  it("documents unresolvedAt invalid timestamp behavior without lifting R-QA-REV-01", async () => {
+    // Inherited D2-B reserve: invalid resolvedAt may reach audit before ISO validation.
+    // D2-C must still refuse Success/proof/consumed.
+    let call = 0;
+    const clock: ClockPort = {
+      nowIso() {
+        call += 1;
+        return call === 1 ? "not-an-iso-timestamp" : NOW;
+      },
+    };
+    const services = createCkcQualificationServices({
+      clock,
+      audit: new MemoryCycleAuditJournal(),
+    });
+    const result = await services.qualifyCycleWithCkc.execute(qaRequest());
+    expect(result.state).toBe("failure");
+    assertSafeFailure(result);
+    expect(result).not.toHaveProperty("proof");
+    expect(result).not.toHaveProperty("recommendedProfile");
+  });
+});
+
+describe("QA-08 Audit hostile (BL-D2-C-05)", () => {
+  it.each([
+    "oa.ckc.qualification_started",
+    "oa.ckc.qualification_succeeded",
+    "oa.ckc.result_produced",
+  ] as const)(
+    "fails closed without Success when %s throws",
+    async (target) => {
+      const events: string[] = [];
+      const audit: CycleAuditPort = {
+        append(event) {
+          events.push(event.event);
+          if (event.event === target) {
+            throw new Error(`hostile ${target}`);
+          }
+        },
+      };
+      const qualifyCycle = successQualify();
+      const result = await bridge({ audit, qualifyCycle }).execute(qaRequest());
+      assertSafeFailure(result, "D2_INTERNAL_ERROR");
+      expect(events.filter((name) => name === target)).toHaveLength(1);
+      expect(events.filter((name) => name === "oa.ckc.request_failed")).toHaveLength(
+        0,
+      );
+      expect(JSON.stringify(result)).not.toContain(`hostile ${target}`);
+    },
+  );
+
+  it("emits request_failed without sensitive fields on structured failure", async () => {
+    const events: CycleAuditEvent[] = [];
+    const audit: CycleAuditPort = {
+      append(event) {
+        events.push(event);
+      },
+    };
+    const result = await bridge({
+      audit,
+      qualifyCycle: successQualify(),
+    }).execute(qaRequest({ cycleTypeId: "cyc:missing" }));
+    assertSafeFailure(result);
+    const failed = events.filter((event) => event.event === "oa.ckc.request_failed");
+    expect(failed).toHaveLength(1);
+    const payload = JSON.stringify(failed[0]);
+    expect(payload).not.toContain("proof");
+    expect(payload).not.toContain("signals");
+    expect(payload).not.toContain("objective");
+    expect(payload).not.toContain("scope");
+    expect(failed[0]).toMatchObject({
+      correlationId: "cor:qa-d2c-independent",
+      result: "error",
+    });
+  });
+
+  it("isolates a failed audit sink from a fresh service instance", async () => {
+    const sharedJournal = new MemoryCycleAuditJournal();
+    let blow = true;
+    const hostile: CycleAuditPort = {
+      append(event) {
+        if (blow && event.event === "oa.ckc.qualification_started") {
+          blow = false;
+          throw new Error("first sink failure");
+        }
+        sharedJournal.append(event);
+      },
+    };
+    const first = createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: hostile,
+    });
+    const firstResult = await first.qualifyCycleWithCkc.execute(qaRequest());
+    assertSafeFailure(firstResult, "D2_INTERNAL_ERROR");
+
+    const second = createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+    });
+    const secondResult = await second.qualifyCycleWithCkc.execute(
+      qaRequest({ correlationId: "cor:second-request" }),
+    );
+    expect(secondResult.state).toBe("success");
+    if (secondResult.state === "success") {
+      expect(secondResult.correlationId).toBe("cor:second-request");
+    }
+  });
+});
+
+describe("QA-09 Request runtime hostile (BL-D2-C-04)", () => {
+  it("observes raw throw on null/undefined request in outer catch (R-QA-D2C-01)", async () => {
+    // Finding R-QA-D2C-01 MINOR: execute() catch re-reads request.correlationId /
+    // cycleTypeId. TypeScript excludes null/undefined; no Success leak observed.
+    const qualifyCycle = successQualify();
+    const subject = bridge({
+      qualifyCycle,
+      audit: new MemoryCycleAuditJournal(),
+    });
+    await expect(
+      subject.execute(null as unknown as QualifyCycleWithCkcRequest),
+    ).rejects.toThrow(/correlationId/);
+    await expect(
+      subject.execute(undefined as unknown as QualifyCycleWithCkcRequest),
+    ).rejects.toThrow(/correlationId/);
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("returns a safe Failure for an empty request object cast", async () => {
+    const qualifyCycle = successQualify();
+    const result = await bridge({
+      qualifyCycle,
+      audit: new MemoryCycleAuditJournal(),
+    }).execute({} as QualifyCycleWithCkcRequest);
+    expect(result.state).toBe("failure");
+    assertSafeFailure(result);
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+
+  it("fails closed when signals is null", async () => {
+    const qualifyCycle = successQualify();
+    const result = await bridge({ qualifyCycle }).execute({
+      ...qaRequest(),
+      signals: null as unknown as QualifyCycleWithCkcRequest["signals"],
+    });
+    assertSafeFailure(result, "SIGNALS_INCOMPLETE");
+    expect(qualifyCycle.execute).not.toHaveBeenCalled();
+  });
+});
+
+describe("QA-10 Factory read-only (BL-D2-C-06)", () => {
+  it("exposes exactly audit, resolver, qualifyCycleWithCkc", () => {
+    const audit = new MemoryCycleAuditJournal();
+    const resolver = new CkcQualificationResolver();
+    const qualifyCycle = successQualify();
+    const services = createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit,
+      resolver,
+      qualifyCycle,
+    });
+    expect(Object.keys(services).sort()).toEqual([
+      "audit",
+      "qualifyCycleWithCkc",
+      "resolver",
+    ]);
+    expect(services.audit).toBe(audit);
+    expect(services.resolver).toBe(resolver);
+    expect(services).not.toHaveProperty("qualifyCycle");
+    expect(services).not.toHaveProperty("createCycle");
+    expect(services).not.toHaveProperty("store");
+    expect(Object.isFrozen(services)).toBe(true);
+  });
+
+  it("leaves createInMemoryCycleServices mutation surface unchanged", () => {
+    const source = readFileSync(
+      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
+      "utf8",
+    );
+    expect(source).toContain("createInMemoryCycleServices");
+    expect(source).toContain("createCycle: new CreateCycle");
+    // D2 facade remains separate and does not wire CreateCycle.
+    const factoryBody = source.slice(
+      source.indexOf("export function createCkcQualificationServices"),
+      source.indexOf("export function createInMemoryCycleServices"),
+    );
+    expect(factoryBody).not.toMatch(/CreateCycle|MemoryCycleStore|ProjectServices/);
+    expect(factoryBody).not.toContain("qualifyCycle:");
+  });
+});
+
+describe("QA-11 Imports and boundaries (BL-D2-C-06/07)", () => {
+  it("keeps new D2-C modules free of forbidden imports", () => {
+    const root = path.resolve(__dirname, "../../../lib/oa/cycle");
+    for (const relative of [
+      "domain/ckcQualificationResult.ts",
+      "application/qualifyCycleWithCkc.ts",
+    ]) {
+      const source = readFileSync(path.join(root, relative), "utf8");
+      expect(source).not.toMatch(
+        /CreateCycle|MemoryCycleStore|ProjectServices|Repository|node:crypto|node:fs|from ["']next|from ["']react|Markdown|D2-D|D3\b/,
+      );
+    }
+  });
+});
+
+describe("QA-12 Concurrency and isolation (BL-D2-C-03/05)", () => {
+  it("keeps distinct correlationIds under concurrent success paths", async () => {
+    const services = createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+    });
+    const [a, b] = await Promise.all([
+      services.qualifyCycleWithCkc.execute(
+        qaRequest({
+          correlationId: "cor:parallel-a",
+          cycleTypeId: "cyc:framing",
+          signals: baseSignals({ lowRiskBounded: true }),
+        }),
+      ),
+      services.qualifyCycleWithCkc.execute(
+        qaRequest({
+          correlationId: "cor:parallel-b",
+          cycleTypeId: "cyc:technical-architecture",
+          signals: baseSignals({ securityImpact: true }),
+        }),
+      ),
+    ]);
+    expect(a.state).toBe("success");
+    expect(b.state).toBe("success");
+    if (a.state === "success" && b.state === "success") {
+      expect(a.correlationId).toBe("cor:parallel-a");
+      expect(b.correlationId).toBe("cor:parallel-b");
+      expect(a.recommendedProfile).toBe("Light");
+      expect(b.recommendedProfile).toBe("Critical");
+      expect(a.isMorrisDecision).toBe(false);
+      expect(b.isMorrisDecision).toBe(false);
+    }
+  });
+
+  it("allows a later success after a prior QualifyCycle rejection on a fresh executor", async () => {
+    const audit = new MemoryCycleAuditJournal();
+    const failing = bridge({
+      audit,
+      qualifyCycle: {
+        execute: vi.fn(async () => {
+          throw new Error("transient");
+        }),
+      },
+    });
+    const failed = await failing.execute(qaRequest({ correlationId: "cor:fail-first" }));
+    assertSafeFailure(failed, "D2_INTERNAL_ERROR");
+
+    const recovered = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+    }).qualifyCycleWithCkc.execute(
+      qaRequest({ correlationId: "cor:recover" }),
+    );
+    expect(recovered.state).toBe("success");
+    if (recovered.state === "success") {
+      expect(recovered.correlationId).toBe("cor:recover");
+    }
+  });
+});
+
+describe("QA-13 Nominal integration paths (BL-D2-C-07)", () => {
+  it.each([
+    ["cyc:framing", { lowRiskBounded: true }, "Light"],
+    ["cyc:technical-architecture", { securityImpact: true }, "Critical"],
+    ["cyc:delivery", {}, "Standard"],
+    ["cyc:capitalization", {}, "Standard"],
+  ] as const)(
+    "qualifies %s as %s with isMorrisDecision=false",
+    async (cycleTypeId, signals, profile) => {
+      const result = await createCkcQualificationServices({
+        clock: new FixedClock(NOW),
+        audit: new MemoryCycleAuditJournal(),
+      }).qualifyCycleWithCkc.execute(
+        qaRequest({
+          cycleTypeId,
+          correlationId: `cor:${cycleTypeId}`,
+          signals: baseSignals(signals),
+        }),
+      );
+      expect(result.state).toBe("success");
+      if (result.state !== "success") throw new Error(result.message);
+      expect(result.recommendedProfile).toBe(profile);
+      expect(result.isMorrisDecision).toBe(false);
+      expect(result.proof.consumed).toBe(true);
+      if (cycleTypeId === "cyc:capitalization") {
+        expect(result.capitalizationViaCycleTypeId).toBe(true);
+      }
+    },
+  );
+
+  it("retains synthetic fallback disclosure", async () => {
+    const manifest: CkcReferenceManifest = Object.freeze({
+      entries: Object.freeze(
+        CKC_REFERENCE_MANIFEST.entries.map((entry) =>
+          entry.level === "detailed" &&
+          entry.reference.includes("cadrage")
+            ? Object.freeze({
+                ...entry,
+                availability: "unavailable" as const,
+              })
+            : entry,
+        ),
+      ),
+    });
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit: new MemoryCycleAuditJournal(),
+      resolver: new CkcQualificationResolver(manifest),
+    }).qualifyCycleWithCkc.execute(
+      qaRequest({
+        cycleTypeId: "cyc:framing",
+        signals: baseSignals({ lowRiskBounded: true }),
+      }),
+    );
+    expect(result.state).toBe("success");
+    if (result.state !== "success") throw new Error(result.message);
+    expect(result.detailedStatus).toBe("resolved_fallback_synthetic");
+    expect(result.disclosures).toEqual(["CKC_FALLBACK_USED"]);
+  });
+
+  it("emits D2-C success audit events in deterministic order", async () => {
+    const audit = new MemoryCycleAuditJournal();
+    const result = await createCkcQualificationServices({
+      clock: new FixedClock(NOW),
+      audit,
+    }).qualifyCycleWithCkc.execute(
+      qaRequest({
+        cycleTypeId: "cyc:delivery",
+        correlationId: "cor:audit-order",
+      }),
+    );
+    expect(result.state).toBe("success");
+    const d2c = audit.events
+      .map((event) => event.event)
+      .filter((name) =>
+        [
+          "oa.ckc.qualification_started",
+          "oa.ckc.qualification_succeeded",
+          "oa.ckc.result_produced",
+          "oa.ckc.request_failed",
+        ].includes(name),
+      );
+    expect(d2c).toEqual([
+      "oa.ckc.qualification_started",
+      "oa.ckc.qualification_succeeded",
+      "oa.ckc.result_produced",
+    ]);
+    for (const event of audit.events) {
+      if (
+        event.event === "oa.ckc.qualification_succeeded" ||
+        event.event === "oa.ckc.result_produced"
+      ) {
+        expect(event.correlationId).toBe("cor:audit-order");
+        expect(event.recommendedProfile).toBeTruthy();
+      }
+    }
+  });
+});
```

## Limites

- Pas de publication projet dans ce cycle
- Pas de CI distante encore (branche non poussée)
- Réserves mineures restent ouvertes
- Anti-claims : pas de « READY FOR MERGE », pas de « sans réserve », pas de GO PR implicite dans ce cycle

## Absence correction / commit / push / PR

Confirmé.

## Review Handoff

- tip avant : `d481d5a0283698a077d9b852fe42c11450ea0462`
- blob avant : `f407fa3f474ba1971036caf9671219cd93946d45`
- commit attendu : `docs(review-handoff): publish SFIA Studio V3.1-D2-C PR readiness report`

## Verdict

V3.1-D2-C READY FOR PR WITH RESERVES —
QA-G3 ACCEPTED BY MORRIS —
EXACT NINE-FILE PACKAGE VERIFIED —
DELIVERY AND INDEPENDENT QA EVIDENCE PRESERVED —
BL-D2-C-01…07 SCOPE VERIFIED —
ALL TESTS, TYPECHECK, LINT AND BUILD PASS —
R-QA-REV-01 OPEN NOT LIFTED —
R-QA-REV-02 OPEN NOT LIFTED —
R-QA-D2C-01 MINOR OPEN —
PROJECT COMMIT AND PR BODY PREPARED —
NO CORRECTION —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PROJECT PR —
NO MERGE —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION

## Prochaine gate candidate

GO PUBLICATION SFIA STUDIO V3.1-D2-C —
COMMIT THE EXACT NINE-FILE PACKAGE —
PUSH delivery/sfia-studio-v3-1-d2-c-qualify-cycle-bridge —
CREATE A DRAFT PR AGAINST main —
WAIT FOR REQUIRED CI —
DO NOT MERGE WITHOUT DISTINCT MORRIS GO
