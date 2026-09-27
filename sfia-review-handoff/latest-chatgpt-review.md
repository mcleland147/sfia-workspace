# SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 — FULL Review Pack

## 1. Timestamp
2026-09-27T14:39:17+0200

## 2. Macro / cycle / profil
- **Macro:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01
- **Cycle:** Cycle 8 — Delivery / implémentation (`cyc:delivery`)
- **Profil:** Critical
- **Typologie:** EVOL
- **Capacité v3 primaire:** V3-F05 (réduction chemins concurrents / Product Spine)
- **Runtime v3:** NON ADOPTED

## 3. Git truth initial
- **Worktree:** `/Users/morris/Projects/sfia-workspace-legacy-decommission-01`
- **Branche:** `refactor/sfia-studio-legacy-architecture-decommission-01`
- **HEAD:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
- **origin/main:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
- **Attendu:** `1162b36b14ca2f4f644dcd3da970b25113214b06` — **MATCH**
- **Working tree initial:** clean après reset worktree (branche dédiée créée depuis origin/main)
- **Commit projet:** NON demandé / NON effectué

## 4. Sources lues
### Gouvernance
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
### Doctrine v3 (guidance)
- framing 30–37 + CKC `08-delivery-implementation.md` (autorité: aucune exécution)
### Living Production Runtime Reference (primaire)
- README + volumes 01–09 + manifest
### Process / runtime
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- `projects/sfia-studio/app/package.json`
- `.github/workflows/sfia-studio-ci.yml`
- routes app, navigation, vertical-slice-runtime, project-assistant, nora, oa

## 5. Current Product Spine
```
Browser / Product UI (app/studio/projects/[id], pre-m6-product-ui)
  → server actions (project-assistant/actions.ts)
  → Project Assistant (orchestrateTurn / F2 / intentAnalysis)
  → Nora Cognitive Runtime (session sqlite, journal, MW5, CWP)
  → OA (project, cycle, decision, execution-contract, execution-attempt, evidence-review, …)
  → Product SQLite (Truth C) + Nora Session SQLite (Memory B)
  → REAL gated: Cursor/Git/GitHub via execution-attempt
     (composeStudioProductRealBoundary / StudioCursorRealLaunchGateway)
```
**Not spine:** OPS1 isolated ops surface; `lib/oa/execution-run` memory BC; POC routes `/cycle-actif|/decision|/synthese`.

## 6. Inventaire candidats
| ID | Family | Paths |
|---|---|---|
| C-OPS1 | OPS1 | `app/app/ops1/**`, `lib/ops1/**`, `features/ops1/**`, env `OPS1_*` |
| C-ERUN | ExecutionRun BC | `lib/oa/execution-run/**` |
| C-POC-UI | Historical POC UI | `app/{cycle-actif,decision,synthese}`, `features/{cycle-actif,decision,synthese}`, harness companions |
| C-D1 | D1 intake | `/nouvelle-demande`, `/projects/*`, `/workspace`, `lib/d1/**` — préqual KEEP |
| C-F3W3A | F3/W3A fixtures | `f3FixtureWiring.ts`, `w3aProductFixtureWiring.ts` wired in service.ts — préqual KEEP |
| C-FINOPS | FinOps/T7 | HORS SCOPE |
| C-MODELED | sfia-v3-modeled | HORS SCOPE |

Aucun autre cluster mort prouvé hors de cette liste.

## 7. Matrice de classification

| Candidate | Purpose historique | Entrypoint courant | Consumers | Persistence | Authority | Fake/Real | Proof | Replacement | Classification |
|---|---|---|---|---|---|---|---|---|---|
| C-OPS1 | Ops vertical slice GPT+allowlist | `/ops1/nouvelle-demande` | features/nouvelle-demande, D1 nav, `__tests__/ops1/**`, e2e ops1/d1, env names in platform/ai + boundaries | ops1 sqlite isolé | allowlist OPS1 ≠ OA HD | Fake product réutilise `OPS1_*` | CI vitest ops1 | Studio spine | **KEEP — TEMPORARY** |
| C-ERUN | D2 ExecutionRun BC memory | composeExecutionRun* (non product service) | `__tests__/oa/execution-run/**`, FinOps T7 shadow script/compose | memory-only (SQLite ABSENT) | BC-local ≠ Truth C | fixtures internes | CI vitest | execution-attempt | **KEEP — TEMPORARY** |
| C-POC-UI | Increment A–E fixture POC | `/cycle-actif`,`/decision`,`/synthese`; `/`→synthese | navigation historical, FLUSH_TABS, not-found, increment/p0 tests | session/harness | fixture only | N/A | vitest increment | `/studio` | **RETIRE FROM ACTIVE VISIBILITY** (partial) + **KEEP — TEMPORARY** |
| C-D1 | Intake D1 | routes D1 actives | product intake | d1 stores | intake | — | e2e d1 | — | **KEEP — CURRENT / ADAPT** |
| C-F3W3A | Deterministic exec substitutes | vertical-slice-runtime service | product composition | none | fixture agents | **required** Fake substitute | F3/W3A tests | none without replacement | **KEEP — CURRENT** |
| C-FINOPS | FinOps T7 | frozen | T7 assets | — | — | — | — | — | **HORS SCOPE** |
| C-MODELED | Modeled governance | CI Required Gate | modeled tests | — | governance docs | — | modeled node tests | — | **HORS SCOPE** |

## 8. SAFE TO REMOVE retenus
**Aucun.** Removal set = ∅.

Pour chaque candidat prioritaire, SR-01…SR-10 **échouent** (au moins une condition) :

### C-OPS1 — non SAFE
- SR-01: rôle ops encore exposé; remplacement Studio existe mais cutover non fait
- SR-02: consumers — route, D1 `href="/ops1/nouvelle-demande"`, features/nouvelle-demande, server actions
- SR-03: ops1 sqlite encore utilisé localement (isolé mais vivant)
- SR-04: pas d'autorité OA Truth C (OK) mais gates allowlist actifs
- SR-05: `__tests__/ops1/**` dans `npm test` CI
- SR-06: env `OPS1_CONVERSATION_PROVIDER` / `OPS1_CURSOR_REAL` / `OPS1_E2E_*` sur Fake product path
- SR-07: e2e + operational surface
- SR-08: callers restants
- SR-09/10: N/A (pas de retrait)

### C-ERUN — non SAFE
- SR-01: remplacement product = execution-attempt (OK conceptuel)
- SR-02: pas d'import product-assistant/nora/VSR — mais FinOps T7 + tests
- SR-05/07/09: suite CI + `scripts/finops-t7-shadow-rollout.ts`
- FinOps HORS SCOPE ⇒ suppression bloquée
- SR-10: Living Ref documentait encore execution-run comme adapter (corrigé ce cycle en doc only)

### C-POC-UI — non SAFE
- SR-01: remplacement `/studio` existe
- SR-02/03: `app/page.tsx` redirect `/synthese`; `not-found` link; FLUSH_TABS; routes actives
- SR-05/09: increment/p0 tests dans vitest
- Classification: visibility déjà `historical` — exit restant requis avant delete

## 9. KEEP / ADAPT / TEMPORARY / UNKNOWN — justifications
Voir matrice §7. Exits TEMPORARY :
1. **OPS1:** Morris GO + unlink D1 nav + rename Fake env hors `OPS1_*` + retirer suites ops1 du gate + re-proof SR
2. **execution-run:** Morris GO + découplage FinOps/T7 (macro dédié HORS SCOPE ici) + retire suite + re-proof
3. **POC UI:** pointer `/` et 404 vers `/studio`; retirer FLUSH_TABS; migrer/archiver increment/p0; re-proof SR

## 10. Fichiers supprimés
Aucun.

## 11. Fichiers créés
Aucun (pas de `retired-components-ledger.md` — zéro retrait).

## 12. Fichiers modifiés
- `projects/sfia-studio/production-runtime-reference/README.md`
- `projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md`
- `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`
- `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`
- `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json` (lastReviewedCommit + digests)

## 13. Diff stat
(voir `git diff --stat` au moment de publication handoff)

## 14. Contenu modifié (Living Reference)

### 01 — adapter layer
Product REAL path documenté via **execution-attempt** / `composeStudioProductRealBoundary` / `StudioCursorRealLaunchGateway`.
`lib/oa/execution-run/**` explicitement **parallèle / non Product Spine**.

### 03 — F20
Étendu : POC UI routes, OPS1 surface, ExecutionRun parallel BC ; statut **no SAFE TO REMOVE proven**.

### 09 — decommission audit table
Classifications + exits ; pas de ledger retired.

### README / manifest
Reviewed commit → `1162b36b`; digests rafraîchis après revue sémantique.

## 15. Living Reference update
Oui — clarifications CURRENT uniquement (pas de retrait de composant runtime).

## 16. Retired ledger
Non applicable (zéro composant retiré).

## 17. Validations
(rempli après exécution — section résultats)

## 18. Réserves
- Absence de preuve ≠ preuve d'absence ; inventaire centré sur candidats préqualifiés + graphe révélé
- Playwright e2e hors Required Gate CI mais restent consumers de routes
- Couplage nominal `OPS1_*` ≠ import `lib/ops1` — suppression lib seule casserait quand même Fake product si env non migrés
- Vol 02/04/05/06/07 headers as-implemented peuvent encore citer SHA harvest antérieur ; sémantique CURRENT inchangée hors 01/03/09

## 19. Gaps HORS SCOPE
- PRODUCT-CYCLE-E2E-STABILIZATION-01
- PocketTasks / MW5 defects
- FinOps/T7 freeze
- Env rename `OPS1_*` → product-neutral (nécessite GO)
- Root redirect `/` → `/studio` (nécessite GO si considéré comportement produit)

## 20. Décisions Morris éventuellement requises
1. Autoriser cutover OPS1 (nav + env rename + suite) avant un futur macro de suppression
2. Autoriser découplage FinOps↔execution-run avant retrait BC
3. Autoriser bascule `/` + 404 vers `/studio` et archivage increment/p0

Sans ces GO : **ne pas supprimer**.

## 21. Fake/Real Qualification
- Applicable: oui
- Entrée: DETERMINISTIC PROVEN (suite locale)
- Attendu ce macro: DETERMINISTIC / LOCAL REGRESSION PROVEN
- REAL BOUNDARY / E2E REAL: non
- Fixtures F3/W3A: **conservées** (SR-06)
- Claims interdits non émis

## 22. Verdict
**AUDIT COMPLETE — NO SAFE REMOVAL PROVEN**

Capacité suivante: `PRODUCT-CYCLE-E2E-STABILIZATION-01`

## 17. Validations — résultats exacts

| Check | Result |
|---|---|
| `npm ci` | PASS (492 packages) |
| `npm run typecheck` | PASS |
| `npm run lint` | PASS (No ESLint warnings or errors) |
| `npm run build` | PASS (Next build EXIT 0) |
| `npm test` | PASS — Test Files 444 passed \| 17 skipped (461); Tests 4905 passed \| 137 skipped (5042); Duration 67.59s |
| `node scripts/check-production-runtime-reference.mjs` | PASS — PRODUCTION RUNTIME REFERENCE CONFORMANCE OK |
| modeled governance (3 files node --test) | PASS — 73 pass / 0 fail |
| `git diff --check` | PASS (after trailing-whitespace strip) |
| Secret scan (RSA/OPENSSH/AKIA) under projects/sfia-studio | PASS — clean |
| Decommission residual grep | N/A — no symbols removed |

## 13bis. Diff stat (final local, uncommitted)

```
 .tmp-sfia-review/chatgpt-review.md                 | 308 ++++++++++++---------
 .../01-system-runtime-overview.md                  |   8 +-
 .../03-end-to-end-flow-catalog.md                  |   7 +-
 ...9-known-gaps-reserves-and-current-boundaries.md |  17 ++
 .../production-runtime-reference/README.md         |   5 +-
 .../production-runtime-reference.manifest.json     |  12 +-
 6 files changed, 216 insertions(+), 141 deletions(-)
```

## Final Git note
- Branche projet: `refactor/sfia-studio-legacy-architecture-decommission-01`
- HEAD local inchangé (pas de commit projet): `1162b36b14ca2f4f644dcd3da970b25113214b06`
- Modifications locales: Living Reference clarifications + review pack only
- Verdict: **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN**

## HANDOFF REGULARIZATION
**Purpose:** complete modified-content disclosure for ChatGPT review (same macro, no micro-cycle).
**Timestamp:** 2026-09-27T14:46:36+0200

### Git status — `.tmp-sfia-review/chatgpt-review.md`

- **Working-tree status:** `M .tmp-sfia-review/chatgpt-review.md`
- **Path:** `.tmp-sfia-review/chatgpt-review.md` (local agent review pack only)
- **`git check-ignore -v`:** `NOT ignored by gitignore`
- **`.gitignore` hits:**
```
18:.tmp-sfia-review/auth/
```
- **Destiné au commit projet ?** **NON.**
  - Ce fichier est le **review pack LOCAL** du cycle ; il n'entre **pas** dans un commit sur `refactor/sfia-studio-legacy-architecture-decommission-01`.
  - Sa publication autorisée est **uniquement** le Review Handoff L3 :
    branche `sfia/review-handoff`, fichier canonique `sfia-review-handoff/latest-chatgpt-review.md`.
  - Aucun `git add` / `git commit` projet ne doit cibler `.tmp-sfia-review/**`.

### Diffs utiles — 5 fichiers modifiés (Living Reference)

Les 5 fichiers ci-dessous sont les **seules** modifications projet du worktree (hors review pack local).
Aucun retrait de code runtime. Contenu sémantique + digests.


#### `projects/sfia-studio/production-runtime-reference/README.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index d25d213c..1596a570 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -1,9 +1,10 @@
 # SFIA Studio — Living Production Runtime Reference

 **Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
-**Reviewed commit:** `b4aa09bdef29a635e624bb5c396711e75057df4d`
-**Reviewed at:** 2026-09-27T13:10:51+0200
+**Reviewed commit:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
+**Reviewed at:** 2026-09-27T14:40:00+0200
 **Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
+**Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)

 ## What this corpus is
```


#### `projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md b/projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md
index 2e419b5b..acfc083e 100644
--- a/projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md
+++ b/projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md
@@ -1,6 +1,6 @@
 # 01 — System Runtime Overview

-**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**
+**As-implemented @ `1162b36b14ca2f4f644dcd3da970b25113214b06`**

 ## Layers (factual)

@@ -18,9 +18,13 @@ OA domain aggregates (lib/oa/{project,cycle,decision,execution-contract,
         ↓
 Product SQLite (oa-product.sqlite) + Nora Session SQLite (nora-session.sqlite)
         ↓ (REAL only, gated)
-Cursor / Git / GitHub adapters (execution-run, managed repos)
+Cursor / Git / GitHub adapters (execution-attempt composition /
+  composeStudioProductRealBoundary · StudioCursorRealLaunchGateway;
+  managed repos)
 ```

+**Parallel / not Product Spine:** `lib/oa/execution-run/**` is a memory-oriented BC (Product SQLite ABSENT) used by FinOps/T7 shadow and its own test suite — not the product REAL launch path.
+
 ## Composition entry

 - `lib/vertical-slice-runtime/singleton.ts` → `getRuntimeApplicationService`
```


#### `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index d53172bd..52d2649d 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -1,6 +1,6 @@
 # 03 — End-to-End Flow Catalog

-**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`**
+**As-implemented @ `1162b36b14ca2f4f644dcd3da970b25113214b06`**

 Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

@@ -97,4 +97,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

 ## F20 — Legacy / historical compatibility
 - **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
-- **Status:** ACTIVE compatibility paths remain
+- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
+- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
+- **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
+- **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)
```


#### `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index 68ea2c74..a80b176f 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -35,3 +35,20 @@
 ## Harvest follow-up absorbed

 Post-foundation repository harvest confirmed Product SQLite M1–M8 topology and clarified ABSENT/PARTIAL aggregates (ContractResult/LR tables absent; MaturityAssessment/ExecutionRun memory-primary; Hybrid Context composer-only). Volumes 02 and 06 updated accordingly. No product behavior change.
+
+## Legacy architecture decommission audit (this tree)
+
+**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b`
+**Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).
+
+| Candidate | Classification | Exit / why not removed |
+|---|---|---|
+| OPS1 (`app/ops1`, `lib/ops1`, `features/ops1`) | KEEP — TEMPORARY | Active route + D1 nav + CI `__tests__/ops1/**` + product Fake env names `OPS1_*`; exit requires Morris GO + env rename + suite/nav cutover |
+| `lib/oa/execution-run/**` | KEEP — TEMPORARY | Not on product spine, but FinOps/T7 shadow + CI suite + vol coupling; FinOps HORS SCOPE blocks clean delete |
+| `/cycle-actif`, `/decision`, `/synthese` (+ features) | RETIRE FROM ACTIVE VISIBILITY (partial) + KEEP — TEMPORARY | Historical nav tier done; `/`→`/synthese`, 404, FLUSH_TABS, increment/p0 tests remain |
+| D1 routes / `lib/d1` | KEEP — CURRENT / ADAPT | Active intake surfaces |
+| F3 / W3A fixtures | KEEP — CURRENT (test substitute) | Wired in `vertical-slice-runtime/service.ts` |
+| FinOps / T7 | HORS SCOPE | Frozen — do not touch |
+| `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |
+
+No `retired-components-ledger.md` — zero components removed.
```


#### `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 2e0c3a8c..8bbec599 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -1,17 +1,17 @@
 {
   "schemaVersion": 1,
   "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
-  "lastReviewedCommit": "b4aa09bdef29a635e624bb5c396711e75057df4d",
-  "lastReviewedAt": "2026-09-27T11:14:45Z",
+  "lastReviewedCommit": "1162b36b14ca2f4f644dcd3da970b25113214b06",
+  "lastReviewedAt": "2026-09-27T14:40:00+0200",
   "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "294d01863555a584"
+      "sha256_16": "8ca96a451e14a697"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md",
-      "sha256_16": "109183af7b0f167e"
+      "sha256_16": "669b0737f4cc5890"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/02-runtime-object-catalog.md",
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "5ebba023d84a09f7"
+      "sha256_16": "f1214758489baecf"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -43,7 +43,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "35e9107fb39f5a53"
+      "sha256_16": "6e8b283c6e7a11d9"
     }
   ],
   "components": [
```


#### COMPLETE FILE — `projects/sfia-studio/production-runtime-reference/README.md`

```markdown
# SFIA Studio — Living Production Runtime Reference

**Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
**Reviewed commit:** `1162b36b14ca2f4f644dcd3da970b25113214b06`
**Reviewed at:** 2026-09-27T14:40:00+0200
**Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
**Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)

## What this corpus is

This corpus describes **how SFIA Studio actually works now** in the checked-out Git tree:

- objects and responsibilities;
- end-to-end flows;
- upstream/downstream dependencies;
- persistence / restart / recovery;
- authority / cognition / execution boundaries;
- environments and configuration;
- tests and proof oracles;
- impact-analysis procedure for future changes.

It is the primary **impact-analysis substrate** for future Studio corrections.

## What this corpus is NOT

It does **not** replace:

- doctrine produit v3 (`sfia-v3-framing/**`);
- Build Doctrine / Roadmap (`convergence/**`);
- Product Completion C1 (`product-completion/**`);
- Morris decisions;
- Pilot HumanDecisions;
- the Transmission Guide as pedagogy/history.

It does **not** invent architecture, promote Runtime v3, or change product behavior.

## Source hierarchy (authority of facts)

1. **Git current tree** (code + tests + schemas + config examples)
2. **Deterministic product tests** (behavior oracles — with documented weaknesses)
3. Product Completion / doctrine / Transmission Guide — **guidance / intent / history only**

When docs conflict with code: **code wins**; mark the conflict as a gap.

## Relation to Transmission Guide

| Corpus | Role |
|---|---|
| `sfia-studio-transmission-guide.md` | Bootstrap / why / pedagogy / capitalization chronology |
| `production-runtime-reference/` | Current machine / how it works **now** |

Do not treat the Transmission Guide as the as-implemented oracle.

## Volumes

| File | Purpose |
|---|---|
| [01-system-runtime-overview.md](./01-system-runtime-overview.md) | System map, composition, layers |
| [02-runtime-object-catalog.md](./02-runtime-object-catalog.md) | Runtime objects |
| [03-end-to-end-flow-catalog.md](./03-end-to-end-flow-catalog.md) | E2E flows F01–F20 |
| [04-dependency-impact-map.md](./04-dependency-impact-map.md) | Dependencies + impact procedure + samples |
| [05-environments-configuration-and-boundaries.md](./05-environments-configuration-and-boundaries.md) | Env/config / Fake-Real |
| [06-persistence-restart-and-recovery.md](./06-persistence-restart-and-recovery.md) | Stores + restart matrix |
| [07-authority-invariants-and-failure-modes.md](./07-authority-invariants-and-failure-modes.md) | Invariants + failure modes |
| [08-test-proof-and-conformance-map.md](./08-test-proof-and-conformance-map.md) | Tests / oracles / bypasses |
| [09-known-gaps-reserves-and-current-boundaries.md](./09-known-gaps-reserves-and-current-boundaries.md) | Gaps + campaign findings |
| [production-runtime-reference.manifest.json](./production-runtime-reference.manifest.json) | Machine-readable index |

## Living maintenance contract

For any Studio change touching tracked paths in the manifest:

1. Run **impact analysis** (see volume 04).
2. Review affected object cards, flows, dependencies, invariants.
3. Review env / persistence / restart if applicable.
4. Run mapped regression tests.
5. Update architecture **content** if semantics changed.
6. Refresh digests **only after** human/ChatGPT review of content.
7. Record `NO SEMANTIC IMPACT` when only implementation changed.

**AUTOMATE DRIFT DETECTION — NEVER AUTOMATE STRUCTURAL ARBITRATION.**

A digest mismatch means: `REFERENCE REVIEW REQUIRED`.
Refreshing a digest ≠ validating semantic correctness.

## Conformance tooling

- Manifest: `production-runtime-reference.manifest.json`
- Checker script: `projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs`
- Vitest: `projects/sfia-studio/app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Explicit non-claims

- Runtime v3 **NON ADOPTED**
- Product Journey **not** declared READY
- E2E REAL **not** declared PROVEN
- PocketTasks campaign gaps are recorded, not fixed here
```


#### COMPLETE FILE — `projects/sfia-studio/production-runtime-reference/01-system-runtime-overview.md`

```markdown
# 01 — System Runtime Overview

**As-implemented @ `1162b36b14ca2f4f644dcd3da970b25113214b06`**

## Layers (factual)

```
Browser / Product UI (pre-m6-product-ui, studio routes)
        ↓ server actions
Project Assistant (features/project-assistant)
  orchestrateTurn / actions / F2 orchestrateF2 / intentAnalysis
        ↓
Nora Cognitive Runtime (lib/nora-cognitive-runtime)
  ProductSqliteSession · Cycle Journal · MW5 critical challenge · CWP hooks
        ↓
OA domain aggregates (lib/oa/{project,cycle,decision,execution-contract,
  execution-attempt,evidence-review,doctrine,git-ports})
        ↓
Product SQLite (oa-product.sqlite) + Nora Session SQLite (nora-session.sqlite)
        ↓ (REAL only, gated)
Cursor / Git / GitHub adapters (execution-attempt composition /
  composeStudioProductRealBoundary · StudioCursorRealLaunchGateway;
  managed repos)
```

**Parallel / not Product Spine:** `lib/oa/execution-run/**` is a memory-oriented BC (Product SQLite ABSENT) used by FinOps/T7 shadow and its own test suite — not the product REAL launch path.

## Composition entry

- `lib/vertical-slice-runtime/singleton.ts` → `getRuntimeApplicationService`
- `lib/vertical-slice-runtime/service.ts` → OA service wiring + product DB path
- Product DB path: `SFIA_STUDIO_PRODUCT_DB_PATH` or default under `.sfia-exec/product/`
- Nora Session path: `SFIA_STUDIO_NORA_SESSION_DB_PATH` or default sibling `nora-session.sqlite` resolved from `process.cwd()` (`sessionPaths.ts`)

## Primary product surfaces

| Surface | Path |
|---|---|
| Studio projects | `app/studio/projects/[id]/page.tsx` |
| Product conversation hook | `features/pre-m6-product-ui/hooks/useProductConversation.ts` |
| Lifecycle UI | `features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx` |
| Project Assistant send | `features/project-assistant/actions.ts` → `projectAssistantSendAction` |

## Cognitive vs Truth C

| Concern | Store | Authority |
|---|---|---|
| Transcript / Journal / Memory B session items | `nora-session.sqlite` | Working context ≠ Truth C |
| Project / LPS / Cycle / HD / EC / Attempt / Evidence / RB | `oa-product.sqlite` | Truth C / durable product |
| F2 Proposal map | process-local `proposalStore.ts` | Not sole restart authority |

## Fake vs REAL boundary (overview)

- Conversation provider: `OPS1_CONVERSATION_PROVIDER=fake|openai` (`lib/platform/ai`)
- Cursor REAL: `SFIA_STUDIO_CURSOR_REAL=1` mutually exclusive with deterministic Cursor E2E boundary
- Same product state machine is intended across Fake/Real at the server decision boundary; linguistic/classifier non-determinism remains on the REAL provider side

## Runtime v3

**NON ADOPTED.** Doctrine v3 framing is destination guidance only.
```


#### COMPLETE FILE — `projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md`

```markdown
# 03 — End-to-End Flow Catalog

**As-implemented @ `1162b36b14ca2f4f644dcd3da970b25113214b06`**

Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK

## F01 — Project creation / greenfield
- **Trigger:** Studio create project
- **Steps:** LocalProjectComposition → oa_projects/LPS → optional trajectory bootstrap
- **Paths:** `vertical-slice-runtime/service.ts`, project create use cases
- **Status:** COMPLETE (deterministic); greenfield continuity corrections on main (#531)

## F02 — Project load / restart
- **Trigger:** Open `/studio/projects/[id]`
- **Reads:** Product DB Truth C + Nora session continuity action
- **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
- **Status:** PARTIAL — transcript availability depends on session DB path colocation

## F03 — Cycle qualification / activation
- **Trigger:** F2 qualification / Pilot lifecycle start
- **Objects:** CycleInstance, CKC, LPS active pointer
- **Paths:** `f2/qualify.ts`, `orchestrateF2.ts`, `pilotLifecycle.start`
- **Status:** COMPLETE deterministic core

## F04 — Nora conversation during active cycle
- **Trigger:** Pilot message via product conversation
- **Steps:** orchestrateTurn → provider analyze/respond → session append → journal tools
- **Paths:** `orchestrateTurn.ts`, `runNoraCognitiveTurn.ts`, Fake/OpenAI provider
- **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts

## F05 — Active-cycle Artifact materialization
- **Trigger:** Natural “matérialise … livrable du cycle”
- **Steps:** intentAnalysis → `resolveActiveCycleGovernedContinuation` → Proposal or in-cycle clarification
- **Admission:** REQUIRE_ARTIFACT HD **OR** Artifact APPLICABLE∧¬SATISFIED (#532+#533)
- **Paths:** `activeCycleGovernedContinuation.ts`, `artifactTargetRouting.ts`, Fake matcher
- **Status:** DETERMINISTIC PROVEN for routing/bridge; REAL journey reserves remain (vol 09)
- **Fail-closed:** UNKNOWN/N/A without policy; assess failure; no active cycle; satisfied artifact

## F06 — Proposal / Decision Subject / options
- **Trigger:** F2 turn producing `f2_proposal`
- **Persistence:** process-local proposal store
- **Status:** COMPLETE for in-process; PARTIAL across restart

## F07 — HumanDecision on Proposal
- **Trigger:** Pilot accept/refuse
- **Paths:** `recordDecision.ts` → `oa_human_decisions`
- **Status:** COMPLETE durable path

## F08 — EC PREPARE
- **Trigger:** After required HD / authority path
- **Paths:** `lib/oa/execution-contract/**`
- **Invariant:** cannot expand DecisionBasis WHAT
- **Status:** COMPLETE domain; product journey integration PARTIAL/NOT PROVEN as single lineage

## F09 — EC inspect / Confirmation / authority
- **Objects:** InspectionAttestation, Confirmation, AuthorityVerificationReceipt
- **Status:** COMPLETE tables/services; journey continuity PARTIAL

## F10 — Governed execution (docs_write / Cursor)
- **Gate:** `SFIA_STUDIO_CURSOR_REAL` + managed repo base + EC/attempt
- **Status:** BOUNDARY gated; REAL only under Morris GO (out of this macro)

## F11 — Attempt terminal → Evidence → ReviewBundle
- **Paths:** execution-attempt + evidence-review aggregates
- **Status:** COMPLETE domain; E2E lineage re-proof deferred

## F12 — ContractResult / ClaimEvaluation
- **Paths:** claim evaluation tables/services
- **Status:** PRESENT; journey proof PARTIAL

## F13 — Nora post-Evidence
- **Status:** PARTIAL — product surfaces exist; campaign re-proof deferred

## F14 — LPS / trajectory continuation or recovery
- **Paths:** trajectory services; recovery ownership continuity
- **Status:** PARTIAL (greenfield/recovery fixes integrated; broader matrix open)

## F15 — Cycle finalization
- **Paths:** `assessFinalization.ts`, lifecycle finalize decision path
- **Status:** COMPLETE assessment engine; Pilot finalize HD required

## F16 — Replan
- **Invariant:** No silent replan
- **Status:** PARTIAL — explicit replan seams exist; silent replan forbidden

## F17 — Restart at Proposal pending
- **Expected:** process-local proposal may be absent → requalify; Truth C intact
- **Status:** PARTIAL / known honesty notice in proposalStore

## F18 — Restart after HD / before execution
- **Survives:** HD, LPS, cycle; EC if prepared
- **Status:** PARTIAL proven by domain tests

## F19 — Restart post-Evidence
- **Survives:** Evidence/RB/claims in product DB; session transcript if session path stable
- **Status:** PARTIAL

## F20 — Legacy / historical compatibility
- **Examples:** deprecated `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY` alias; historical new-cycle formalization when no materialization intent
- **Historical UI surfaces (still routed):** `/cycle-actif`, `/decision`, `/synthese` (nav tier `historical`; `/` still redirects to `/synthese`; POC fixture harness — ≠ OA Truth C)
- **OPS1 ops surface:** `/ops1/nouvelle-demande` + `lib/ops1/**` (isolated sqlite; D1 nav still links; product Fake env reuses `OPS1_*` names)
- **Parallel BC:** `lib/oa/execution-run/**` (memory-only; FinOps/T7 shadow consumer; not product EC→Attempt)
- **Status:** ACTIVE compatibility / temporary keep — **no SAFE TO REMOVE proven** under SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (see vol 09)
```


#### COMPLETE FILE — `projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md`

```markdown
# 09 — Known Gaps, Reserves & Current Boundaries

## Hard boundaries

- Runtime v3 **NON ADOPTED**
- This corpus does not change product behavior
- PocketTasks bugs / MW5 defects **not fixed** here
- No CI workflow changes

## Current campaign findings (verified against repo where possible)

| Finding | Class | Notes |
|---|---|---|
| Natural active-cycle materialization routing corrected (#532) | CONFIRMED | continuity tests on main |
| Artifact applicability bridge corrected (#533) | CONFIRMED | bridge helpers on HEAD |
| D-PC-09: filename candidate + server exact target; no micro-gate | CONFIRMED (doc) | product-completion cadrage amendment |
| REAL PocketTasks asked Pilot for filename | OBSERVATION | campaign UX; REAL not re-run here |
| Fake may derive `note-de-cadrage.md`; REAL may leave null | CONFIRMED Fake / PROBABLE REAL | Fake code path exists |
| MW5 may re-challenge structurally resolved continuation | PROBABLE | seam exists; journey observation |
| Local tests pre-satisfy challenge assessment | PROBABLE | fixtures |
| E2E backbone can bypass natural conversation front door | CONFIRMED | e2e API routes |
| Pending Proposal / reinstruction continuity = downstream impact seam | CONFIRMED structural | process-local proposalStore |
| EC→Attempt→Evidence→Recovery single lineage needs re-proof | NOT PROVEN as one journey | next macro |

## Next macro

`PRODUCT-CYCLE-E2E-STABILIZATION-01` must use this reference for impact analysis, then resume PocketTasks as acceptance journey.

## Uncertainties

- Dependency graph is representative, not exhaustive of every file.
- Failure-mode catalog is selected, not every string code in repo.
- Some object cards mark PARTIAL where aggregate naming is distributed across DTOs.

## Harvest follow-up absorbed

Post-foundation repository harvest confirmed Product SQLite M1–M8 topology and clarified ABSENT/PARTIAL aggregates (ContractResult/LR tables absent; MaturityAssessment/ExecutionRun memory-primary; Hybrid Context composer-only). Volumes 02 and 06 updated accordingly. No product behavior change.

## Legacy architecture decommission audit (this tree)

**Macro:** `SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01` @ `1162b36b`
**Verdict:** **AUDIT COMPLETE — NO SAFE REMOVAL PROVEN** (no product code deleted).

| Candidate | Classification | Exit / why not removed |
|---|---|---|
| OPS1 (`app/ops1`, `lib/ops1`, `features/ops1`) | KEEP — TEMPORARY | Active route + D1 nav + CI `__tests__/ops1/**` + product Fake env names `OPS1_*`; exit requires Morris GO + env rename + suite/nav cutover |
| `lib/oa/execution-run/**` | KEEP — TEMPORARY | Not on product spine, but FinOps/T7 shadow + CI suite + vol coupling; FinOps HORS SCOPE blocks clean delete |
| `/cycle-actif`, `/decision`, `/synthese` (+ features) | RETIRE FROM ACTIVE VISIBILITY (partial) + KEEP — TEMPORARY | Historical nav tier done; `/`→`/synthese`, 404, FLUSH_TABS, increment/p0 tests remain |
| D1 routes / `lib/d1` | KEEP — CURRENT / ADAPT | Active intake surfaces |
| F3 / W3A fixtures | KEEP — CURRENT (test substitute) | Wired in `vertical-slice-runtime/service.ts` |
| FinOps / T7 | HORS SCOPE | Frozen — do not touch |
| `sfia-v3-modeled/**` | HORS SCOPE | Required Gate CI |

No `retired-components-ledger.md` — zero components removed.
```


#### MANIFEST METADATA EXCERPT — `projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json`
(Full file remains digest index; semantic keys below. Complete unified diff is in the Diff section above.)

```json
{
  "schemaVersion": 1,
  "kind": "SFIA_STUDIO_LIVING_PRODUCTION_RUNTIME_REFERENCE",
  "canonicalReadme": "projects/sfia-studio/production-runtime-reference/README.md",
  "lastReviewedCommit": "1162b36b14ca2f4f644dcd3da970b25113214b06",
  "lastReviewedAt": "2026-09-27T14:40:00+0200"
}
```
