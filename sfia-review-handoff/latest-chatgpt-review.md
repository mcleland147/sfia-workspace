# ML4D — REMÉDIATION CI AUTONOME ET INTÉGRATION GIT — REVIEW PACK FULL

```text
TIMESTAMP: 2026-11-18 23:21:27 +0100
MACRO: R5 / ML4D — Convergence UX/UI globale
CYCLE: Mono-cycle — remédiation CI + intégration Git conditionnelle
PASS: FULL REVIEW PACK
TYPOLOGY: INC / CONFORMANCE / GIT INTEGRATION
PROFILE: CRITICAL
AUTHORITY: Morris GO 18/11/2026 — remédiation CI autonome bornée + merge conditionnel
PRODUCT VERSIONING: PATCH candidat / NO RELEASE
STABLE / Gate C / ADOPTED / Ensemble 06 impl: NON AUTORISÉS
```

## 1. Git Truth Check

### 1.1 Entrée (contrat)

| Élément | Référence |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| `main` initial | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| PR produit | #681 · branche `integrate/next-ml4d-ux003-to-ensemble05-20261118` |
| HEAD produit initial | `5c94c86737f0965c71a7e058e3f1e45ff4415024` |
| Tree UAT | `74fbf2b90f95951d5049efc5a854ad213fb0f47f` |
| Build RECETTE UAT | `IEINNuPl0bHWJOWkh0ZhG` |
| PR docs | #680 draft · `docs/next-ml4d-registre-revues-20261116` @ `6b556c17` |
| Worktree | `/Users/morris/Projects/sfia-wt-ml4d-ci-remediation-20261118` |

### 1.2 Sortie

| Élément | Référence |
|---|---|
| Tip CI produit | `ac08b381e434b65c09ec9eb2d49abcc221a543cf` |
| Merge produit #681 | `b7de1fb0826f373dcab609b2c1deff992a36fbd1` |
| Merge docs #680 | `15076412105ef55ffe502f4ee5cce8b24a0c8081` |
| `main` post-docs | `15076412` |
| `main` final (+ E06 fiche) | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| PR E06 reprise | #682 · fiche only |
| RECETTE | **inchangée** — UAT SHA `5c94c867` / build `IEINNuPl0bHWJOWkh0ZhG` non redéployé |
| Opérations destructives | Aucune (pas de reset/stash/clean/force-push/rebase) |

## 2. Sources et contrats relus

- Gouvernance : SEF, roadmap, ENV-01, product-versioning, decisions applicables
- Contrats ML4D : UX-003/004, Sas Nora, Ensemble 04/05, registre v0.16→v0.17, matrice C-01…22 v0.10, dossier réconciliation v0.2
- Hiérarchie appliquée : Git/code et preuves → décisions → specs → hypothèses
- Les fixtures historiques n'ont **pas** été traitées comme spécification normative

## 3. Inventaire initial — 37 erreurs TypeScript

Familles principales (run CI bloquant initial `44380122314`) :

| Famille | Codes | Diagnostic |
|---|---|---|
| Qualification sémantique Sas | TS2739 | Fixtures sans `projectIntention` / `desiredOutcome` / `initialScope` / `proposedProjectName` |
| Création projet | TS2551 | Assertions sur `projectId` alors que le DTO expose `project` |
| Divers appels/helpers | TS2345 / TS2769 / TS2554 / TS2322 | Signatures et surcharges désalignées |

**Action :** adapter tests/fixtures au contrat ML4D actuel via `asNoraQualification` — **pas** rendre les champs facultatifs en production.

## 4. Échecs supplémentaires découverts

| Étape | Échec | Qualification |
|---|---|---|
| Vitest unit | Pollution env RECETTE (`GITHUB_APP_*` / `STUDIO_LANE`) | Test hygiene — unset en setup |
| migrations-fresh | Port 55432 clash | Allocation dynamique `allocateLoopbackPort` |
| Playwright e2e | Noms projet non uniques / DB e2e stale | `uniqueProjectName` + recreate `sfia_next_e2e` |
| Playwright UI | Assertions rail / copy / ACK / LIVE | Obsolètes vs Ensemble 04/05 — mises à jour |
| Whitespace CI | `git diff --check` docs evidence + grammaire | Strip trailing spaces / EOF blank lines |
| Docs #680 | Whitespace grammaire 01–06 | Strip après merge de `main` |

## 5. Classification tests obsolètes / défauts véritables

| Cas | Décision |
|---|---|
| Fixtures Sas incomplètes | Fixtures corrigées (contrat actuel) |
| `projectId` vs `project` | Assertions adaptées au DTO actuel |
| Copy/rail/ACK historiques Playwright | Assertions alignées UI actuelle ; intention d'isolation/parcours conservée |
| LIVE/SIM gated specs | Skip explicite hors FAKE CI (garde d'environnement) |
| ErrorBoundary typing | Typage `_error` — **pas** un défaut produit observable |
| Régression métier runtime | **Aucune** détectée dans le delta correctif |

## 6. Corrections par famille

1. **Fixtures sémantiques** — `semantic-fixture-envelopes.ts` + unit tests
2. **Integration PG** — `create-project.pg.test.ts`, `migrations-fresh.pg.test.ts`
3. **Playwright** — helpers G4, ml1/ml2/Atlas, Ensemble 04/05 specs
4. **E2E server** — `e2e-web-server.sh` recreate DB
5. **Whitespace** — evidence docs + grammaire documentaire
6. **Docs post-merge** — delivery-history, registre v0.17, dossier, matrice

## 7. Fichiers créés

| Fichier | Rôle |
|---|---|
| `construction/convergence-ux-ui-globale/ensemble-06-documents-journal-reprise.md` | Fiche reprise E06 only (PR #682) |

Aucun nouveau module runtime produit.

## 8. Diffs utiles (extraits clés)

### 8.1 Stat remediation `5c94c867..ac08b381`

```text
 .../web/docs/ensemble-04-project-space.md          | 10 ++---
 .../recette-cutover-plan.md                        | 32 +++++++-------
 .../00-ledger.md                                   | 12 +++---
 .../00-vitest-summary.txt                          |  1 -
 .../02-morris-reprise.md                           |  2 +-
 .../nora-adapter-corrective.test.ts.diff           |  2 +-
 .../modified-content/nora-adapter.ts.diff          | 15 ++++---
 .../00-ledger-and-register.md                      | 20 ++++-----
 .../01-causal-diagnostic.md                        | 16 +++----
 .../02-corrective-plan.md                          | 22 +++++-----
 .../nora-adapter-corrective.test.ts.diff           |  2 +-
 .../nora-adapter-error-obs.FULL.ts.txt             |  1 -
 .../00-incident-uat03-diagnostic.md                | 36 ++++++++--------
 .../00-ledger.md                                   |  6 +--
 .../00-vitest-summary.txt                          |  1 -
 .../02-morris-reprise.md                           | 14 +++----
 .../modified-content/elk-layout.diff               |  8 ++--
 .../modified-content/graph-and-title.diff          | 10 ++---
 .../00-git-truth-check.md                          |  4 +-
 .../00-vitest-summary.txt                          |  1 -
 .../02-ux01-align.md                               |  2 +-
 .../modified-content/elk-layout.diff               | 22 +++++-----
 .../modified-content/fixture-semantic-qualify.diff |  2 +-
 .../modified-content/tokens-ux01.diff              |  8 ++--
 .../ux-correctives-ensemble05.test.diff            |  2 +-
 .../plan-retest-r05-arnaud.md                      |  8 ++--
 .../sfia-studio-next/web/scripts/e2e-web-server.sh |  8 +++-
 .../web/src/components/figma/NoraComposition.tsx   |  2 +-
 .../web/tests/e2e/ensemble05-level-b-sim.spec.ts   |  5 +++
 .../web/tests/e2e/ensemble05-live-bounded.spec.ts  |  5 +++
 .../web/tests/e2e/ensemble05-travail-nora.spec.ts  | 34 ++++++++-------
 .../web/tests/e2e/ensemble05-uat07-ux05.spec.ts    |  8 ++++
 .../web/tests/e2e/g4-b1-b4-correctifs.spec.ts      |  2 +-
 .../web/tests/e2e/helpers/g4-chat-first.ts         | 20 +++++++--
 .../web/tests/e2e/intent-continuity-atlas.spec.ts  | 18 ++++----
 .../web/tests/e2e/ml1-smoke.spec.ts                | 20 +++++++--
 .../web/tests/e2e/ml2-smoke.spec.ts                | 23 ++++++----
 .../web/tests/e2e/ml3-pilotage.spec.ts             | 20 +++++----
 .../web/tests/e2e/ml4c-d2-mission-real-s05.spec.ts | 17 +++++---
 .../tests/e2e/ml4c-s05-independent-pending.spec.ts |  7 +++-
 .../web/tests/e2e/ml4c-s05-real-api.spec.ts        |  7 +++-
 .../web/tests/e2e/ml4d-sas-nora-projection.spec.ts |  8 +++-
 .../web/tests/e2e/ux004-f2-measure.spec.ts         |  7 ++--
 .../tests/helpers/semantic-fixture-envelopes.ts    | 45 ++++++++++++--------
 .../tests/integration/create-project.pg.test.ts    |  8 ++--
 .../tests/integration/migrations-fresh.pg.test.ts  | 28 +++++++++++--
 .../tests/unit/c2-adversarial-integrity.test.ts    | 10 ++---
 .../ml4c-s05-thread-turn-qualification.test.ts     |  6 +--
 .../web/tests/unit/ml4c-temp-restitution.test.ts   |  6 +--
 .../tests/unit/provider-simulated-level-b.test.ts  |  5 ++-
 .../web/tests/unit/s05-pending-policy.test.ts      | 16 +++----
 .../web/tests/unit/semantic-qualification.test.ts  | 49 +++++++++++-----------
 52 files changed, 374 insertions(+), 269 deletions(-)
```

### 8.2 Diffs ciblés (fixtures / create-project / ErrorBoundary)

```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
index 6db44460..ed4fe403 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraComposition.tsx
@@ -147,7 +147,7 @@ export class BlockErrorBoundary extends Component<
 > {
   state = { failed: false };
 
-  static getDerivedStateFromError(): { failed: boolean } {
+  static getDerivedStateFromError(_error: Error): { failed: boolean } {
     return { failed: true };
   }
 
diff --git a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
index c5eb1b64..2ba82982 100644
--- a/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
+++ b/projects/sfia-studio-next/web/tests/helpers/semantic-fixture-envelopes.ts
@@ -30,6 +30,29 @@ function assertValid(q: unknown): NoraTurnQualification {
   return v.value;
 }
 
+/**
+ * Build a typed NoraTurnQualification for tests.
+ * Applies current Sas Nora required slots (empty = unchanged this turn) via schema defaults.
+ * Scenario-specific values must be passed explicitly — do not invent métier content.
+ */
+export type NoraQualificationDraft = Partial<NoraTurnQualification> &
+  Pick<NoraTurnQualification, "status" | "goal" | "intents"> & {
+    schemaVersion?: NoraTurnQualification["schemaVersion"];
+  };
+
+export function asNoraQualification(draft: NoraQualificationDraft): NoraTurnQualification {
+  return assertValid({
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    projectIntention: "",
+    desiredOutcome: "",
+    initialScope: "",
+    proposedProjectName: "",
+    clarifications: [],
+    replyDraft: "",
+    ...draft,
+  });
+}
+
 function normalizeIntents(intents: IntentDraft[]): QualifiedIntentItem[] {
   return intents.map((it, idx) => ({
     id: it.id ?? `i${idx + 1}`,
@@ -59,13 +82,9 @@ export function dialogueEnvelope(
   reply: string,
   constraints: string[] = ["NO_EFFECT"],
 ): NoraTurnQualification {
-  return assertValid({
-    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  return asNoraQualification({
     status: "QUALIFIED",
     goal,
-    desiredOutcome: "",
-    initialScope: "",
-    proposedProjectName: "",
     intents: normalizeIntents([
       {
         capabilityId: "d3.converse",
@@ -80,13 +99,9 @@ export function dialogueEnvelope(
 }
 
 export function clarificationEnvelope(goal: string, clarifications: string[], reply: string): NoraTurnQualification {
-  return assertValid({
-    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  return asNoraQualification({
     status: "NEEDS_CLARIFICATION",
     goal,
-    desiredOutcome: "",
-    initialScope: "",
-    proposedProjectName: "",
     intents: [],
     clarifications,
     replyDraft: reply,
@@ -98,13 +113,9 @@ export function effectEnvelope(
   reply: string,
   intents: IntentDraft[],
 ): NoraTurnQualification {
-  return assertValid({
-    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  return asNoraQualification({
     status: "QUALIFIED",
     goal,
-    desiredOutcome: "",
-    initialScope: "",
-    proposedProjectName: "",
     intents: normalizeIntents(intents),
     clarifications: [],
     replyDraft: reply,
@@ -397,7 +408,7 @@ export type ExplicitFixtureSpec =
       documentTitle: string;
       documentSummary: string;
     }
-  | { kind: "qualification"; q: NoraTurnQualification };
+  | { kind: "qualification"; q: NoraQualificationDraft };
 
 export function registerExplicitFixture(utterance: string, spec: ExplicitFixtureSpec): void {
   const t = utterance.trim();
@@ -480,7 +491,7 @@ export function registerExplicitFixture(utterance: string, spec: ExplicitFixture
       );
       return;
     case "qualification":
-      registerTypedScenario(t, spec.q);
+      registerTypedScenario(t, asNoraQualification(spec.q));
       return;
     default: {
       const _exhaustive: never = spec;
diff --git a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
index 209ff625..cc5214b4 100644
--- a/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/create-project.pg.test.ts
@@ -287,7 +287,7 @@ describe("PostgreSQL create-project contracts", () => {
     expect(ctx.projection?.name ?? null).toBeNull();
     expect(ctx.projection?.desiredOutcome ?? null).toBeNull();
     expect(ctx.projection?.suggestion?.assessment).toBe("EXPLORING");
-    expect(ctx.projectId ?? null).toBeNull();
+    expect(ctx.project ?? null).toBeNull();
     const rev1 = ctx.preparation.creationRevision;
 
     await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T2);
@@ -296,20 +296,20 @@ describe("PostgreSQL create-project contracts", () => {
     expect(ctx.projection?.initialScope ?? null).toBeNull();
     expect(ctx.projection?.suggestion?.assessment).toBe("CLARIFYING");
     expect(ctx.preparation.creationRevision).toBeGreaterThan(rev1);
-    expect(ctx.projectId ?? null).toBeNull();
+    expect(ctx.project ?? null).toBeNull();
 
     await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T3);
     ctx = await getPreparationContext(pilotId, prep.id);
     expect(ctx.projection?.name?.value).toBe("Assistant de pilotage");
     expect(ctx.projection?.initialScope?.value).toMatch(/Espace personnel/i);
     expect(ctx.projection?.suggestion?.assessment).toBe("BASE_SUFFICIENTE");
-    expect(ctx.projectId ?? null).toBeNull();
+    expect(ctx.project ?? null).toBeNull();
 
     await postUserMessageAndNora(pilotId, prep.id, SAS_MATURATION_T4);
     ctx = await getPreparationContext(pilotId, prep.id);
     expect(ctx.projection?.name?.value).toBe("Cockpit projets");
     expect(ctx.projection?.name?.value).not.toBe("Assistant de pilotage");
-    expect(ctx.projectId ?? null).toBeNull();
+    expect(ctx.project ?? null).toBeNull();
 
     const created = await createProjectCommand({
       pilotId,
```

## 9. Journal des itérations

| # | Erreur | Diagnostic | Modification | Preuve | SHA |
|---|---|---|---|---|---|
| 1 | tsc 37 | Fixtures/DTO | sync tests | tsc local PASS | `98646171` |
| 2 | Playwright shell | E04 rail | specs | local+CI partial | `519f40e3`…`a127d337` |
| 3 | whitespace product | MD hard breaks | strip | check clean | `fd01cd9d`/`ac08b381` |
| 4 | CI full | Required Gate | — | run `44400455666` PASS | `ac08b381` |
| 5 | merge #681 | gates CLEAN | merge commit | `b7de1fb0` | — |
| 6 | docs rebase | merge main | status sync | push `d0f92615` | — |
| 7 | docs whitespace | grammaire | strip | run `44406897616` PASS | `065c0bce` |
| 8 | merge #680 | gates CLEAN | merge | `15076412` | — |
| 9 | E06 fiche | reprise only | PR #682 | MERGED | `8d55375b` |

## 10. Tests locaux

Exécutés dans le worktree produit avant push tip : `tsc --noEmit`, lint, build, Vitest unit, PG integration, Playwright BROWSER FAKE (alignés workflow). Pas de LIVE Nora / REAL.

## 11. Exécutions CI GitHub

| Run | SHA | Résultat |
|---|---|---|
| `44380122314` | `5c94c867` | FAIL tsc (entrée) |
| `44397874005` | `a127d337` | Playwright PASS ; whitespace FAIL |
| `44400455666` | `ac08b381` | **FULL PASS** + Required Gate |
| `44403332973` | merge #681 → main | PASS post-merge produit |
| `44403729917` | `d0f92615` docs | whitespace FAIL |
| `44406897616` | `065c0bce` docs | **FULL PASS** + Required Gate |
| `44410409106` | merge #680 → main | **PASS** post-merge docs |
| `44410468172` | #682 E06 | **PASS** |

## 12. Required Gate final

- Produit #681 : **PASS** @ `ac08b381`
- Docs #680 : **PASS** @ `065c0bce`
- Aucun required check désactivé ; aucun contournement branch protection

## 13. Modifications runtime et impacts

| Fichier | Changement | Impact RECETTE |
|---|---|---|
| `NoraComposition.tsx` | `getDerivedStateFromError(_error: Error)` | **Aucun** — typage uniquement |

Pas de requalification RECETTE requise pour le delta correctif CI.

## 14. État RECETTE

- Build UAT accepté : `IEINNuPl0bHWJOWkh0ZhG` @ `5c94c867`
- **Non redéployé** ; aucune écriture DB RECETTE/STABLE
- Huit UAT visuels restent acquis sur leur SHA d'origine
- Nouveau tip `ac08b381` = candidat CI/intégration, **pas** automatiquement re-recetté

## 15. PR produit #681

- URL : https://github.com/mcleland147/sfia-workspace/pull/681
- MERGED `b7de1fb0` (2026-11-18T21:37:05Z)
- Merge commit ; historique construction conservé

## 16. PR documentaire #680

- URL : https://github.com/mcleland147/sfia-workspace/pull/680
- Sortie de draft ; MERGED `15076412` (2026-11-18T22:19:08Z)
- Matrice C-01…22 et validations D1 conservées ; réserves ACL/a11y/PG/oracles conservées

## 17. Post-merge

| Contrôle | Résultat |
|---|---|
| Merge produit dans `main` | OUI `b7de1fb0` |
| Merge docs dans `main` | OUI `15076412` |
| `ac08b381` ancestral de `main` | OUI |
| `5c94c867` ancestral de `main` | OUI |
| RECETTE mutée | NON |
| Gate C / STABLE / ADOPTED | NON déclarés |

## 18. Réserves restantes

- ACL historique : restauration objet-par-objet non démontrée indépendamment
- Responsive / a11y : couverture bornée
- PostgreSQL historique : pas de replay exhaustif
- Travail Nora : 8 UAT ≠ 88 oracles
- R-11 CI : **levée** pour tip `ac08b381` / merges effectués ; nouveaux SHA docs/E06 suivent leurs gates
- Gate C OPEN ; NO RELEASE

## 19. Verdict indépendant de conformité

Les tests et la CI ont été alignés sur le **produit ML4D actuel** sans restaurer les comportements abandonnés, sans neutraliser de contrôles, et sans modification comportementale observable du runtime.

**Verdict candidat :** `ML4D — CURRENT PRODUCT CI PASS / PRODUCT & DOCS MERGED / POST-MERGE VERIFIED`

Ensemble 06 : **reprise documentée uniquement** — `NOT STARTED` ; PR #682 MERGED (fiche only).
