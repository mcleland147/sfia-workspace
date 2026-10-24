# SFIA Studio — AKG-M5 / L2-D2 — C14 CORR-01 README + G-MANIFEST

**Profile:** Standard
**Typologie:** DOC / CAPA / POST-MERGE
**Date/heure locale:** 2026-10-24 23:35 CEST
**Auteur rapport:** Cursor (Composer)
**GO / Autorité:** Morris « AKG-M5 L2-D2 — C14 CORR-01 README + G-MANIFEST ».
**Autorisé:** correction chronologique README cellule A · sync 8 digests PRR · checker · Review Pack FULL · Handoff L3.
**NON autorisé:** commit/push/PR projet · merge · Product mutation · OA-exclusive activation · SQLite/Studio LIVE · runtime v3 adoption · suppression branche/worktree.

---

## 0. Verdict Cursor

**C14 CORR-01 — PASS**
**G-MANIFEST — CONSUMED**
**PRR CONFORMANCE — PASS**
**DOCUMENTARY TRUTH-SYNC — LOCAL CANDIDATE**
**REVIEW HANDOFF — REMOTE VERIFIED** *(après publication L3)*
**PROJECT COMMIT/PUSH/PR — NOT AUTHORIZED**
**G-GIT DOCUMENTAIRE — OPEN**
**G-ACTIVATION — OPEN**

Ne pas conclure : documentary integrated on main · OA-exclusive activated · Studio LIVE validated · R-CUT proven · O-01 LIVE E2E COMPLETE · AKG-M5 GLOBAL CLOSED · P6 GLOBAL PASS · runtime v3 ADOPTED.

---

## 01. Horodatage / GO

2026-10-24 23:35 CEST · C14 CORR-01 README + G-MANIFEST · GO Morris consommé dans ce cycle uniquement.

---

## 02. Local Git Truth Check

| Check | Résultat |
|---|---|
| toplevel | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d2-postmerge-truth-sync` |
| Branch | `docs/akg-m5-l2-d2-postmerge-truth-sync` |
| HEAD | `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` |
| origin/main | `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` |
| Staged | **aucun** |
| Delivery WT | `feat/akg-m5-l2-d2-local-oa-cutover` @ `4647983a…` · `.tmp` only — **préservé** |
| P6 WT | dirty ~11 — **non altéré** |

Git Truth : **PASS** (baseline Cycle 14 confirmée ; pas de drift HEAD/main).

---

## 03. Handoff Cycle 14 source (pré-CORR-01)

| Item | Value |
|---|---|
| Branche | `sfia/review-handoff` |
| Commit | `4b3c83837f0ab957614d985b20e2a25957ec95f6` |
| Blob | `58ff574a3116420792980c57fd046b38266e2169` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Statut | **HISTORICAL AS TIP** pour ce CORR-01 (superseded by this pack after L3 publish) |

Contradiction identifiée dans le tip Cycle 14 : cellule README **A** associait « Local Delivery dirty » à `4647983a…` (commit G-GIT déjà créé).

---

## 04. Sources Git lues

Méthode : cycle template · routing · operating model · guardrails.
Convergence : Build Doctrine · Roadmap (préservée Cycle 14).
C1 Product Completion.
M5 blueprint.
Doctrine v3 : 30 / 32 / 34 / 35 / 37.
PRR README + 03–09 + manifest.
Preuves : PR #614 MERGED · CI #40130977607 SUCCESS · handoff Cycle 14 ci-dessus.

---

## 05. Objet de la correction

1. **README.md** — uniquement la cellule **A — Historical (pre-integration)** : distinguer A1 LOCAL AUTHORING (dirty) / A2 G-GIT (`4647983a…`) / A3 INTEGRATION (PR #614 / merge / CI).
2. **manifest.json** — uniquement `sha256_16` des **8 volumes** README + 03–09 (G-MANIFEST).
3. Roadmap + volumes 03–09 **inchangés** dans CORR-01 (préservés du Cycle 14).

**R24:** NO NEW PRODUCT SEMANTIC IMPACT.
**R23:** contexte architecture uniquement pour cohérence documentaire (pas de nouvelle preuve comportementale).

---

## 06. Avant / après — cellule README A (complet)

### AVANT (Cycle 14 local, pre-CORR-01)

```
| **A — Historical (pre-integration)** | Local Delivery dirty + CORR-02 + R24/Cycle13 authoring on `feat/akg-m5-l2-d2-local-oa-cutover` @ `4647983a…` over base `1a380f22…` — **HISTORICAL AS TIP** (see prior handoffs) |
```

### APRÈS (CORR-01)

```
| **A — Historical (pre-integration)** | **A1 LOCAL AUTHORING:** Delivery + CORR-02 + R24/Cycle13 on `feat/akg-m5-l2-d2-local-oa-cutover`, initially dirty/uncommitted over base `1a380f22c2ee9c63c525213e01de4bca14dff9ca`. **A2 G-GIT:** source commit `4647983aa36b76ae393200a7a8caaaed96936149` created (≠ dirty HEAD). **A3 INTEGRATION:** [PR #614](https://github.com/mcleland147/sfia-workspace/pull/614) MERGED → `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` · CI [#40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) SUCCESS — **HISTORICAL AS TIP** (see prior handoffs) |
```

`4647983a…` n'est **plus** présenté comme HEAD dirty non commité.

---

## 07. Diff README — delta CORR-01 (cellule A seule)

Seule la ligne A a été modifiée dans ce cycle. Autres cellules B–F / Runtime v3 / Anti-claims / note finale **non éditées** (allowlist stricte).

**Note résiduelle éditoriale (hors allowlist CORR-01, non bloquante pour conformance) :**
la cellule **F** et la phrase « Manifest digests will drift until a distinct G-MANIFEST » restent le texte Cycle 14 ; localement **G-MANIFEST est consommé** et le checker est PASS. Éventuelle resynchronisation rédactionnelle de F/note = hors scope CORR-01 → à traiter sous revue documentary G-GIT si Morris le demande. **≠** échec digest.

---

## 08. Diff manifest — huit digests uniquement

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index a4590353..a65ad9bc 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -7,7 +7,7 @@
   "volumes": [
     {
       "path": "projects/sfia-studio/production-runtime-reference/README.md",
-      "sha256_16": "9f4f725a6e74292e"
+      "sha256_16": "ca3815edcdcc3de1"
     },
...
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "aa0ecb788594ba28"
+      "sha256_16": "e629977124c113a5"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
-      "sha256_16": "c387e30afaf6c9f4"
+      "sha256_16": "9bdf207ceeac259e"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md",
-      "sha256_16": "f842eb604a111d86"
+      "sha256_16": "4e67c2e6acced70b"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "c09beba0eac9e1d5"
+      "sha256_16": "c9132f48db3f0608"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
-      "sha256_16": "87023ecee1e04ab5"
+      "sha256_16": "24ae31d1e9d17e0f"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "708e2b7512ec293f"
+      "sha256_16": "d9fe8e57cdef6442"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "dfdc6a605bec1820"
+      "sha256_16": "98e6f36b4f8bf578"
     }
```

Contrôle strict Python : **exactement 8** champs `sha256_16` modifiés · uniquement `manifest.volumes` · chemins allowlist · aucune autre clé (`schemaVersion`, `kind`, `canonicalReadme`, `lastReviewed*`, components, flows, dependencies, invariants, trackedSources, trackedTests, volumes 01/02) touchée.

---

## 09. Matrice digests (ancien → nouveau)

| Volume | sha256_16 avant (main/HEAD) | sha256_16 après CORR-01 |
|---|---|---|
| README.md | `9f4f725a6e74292e` | `ca3815edcdcc3de1` |
| 03-end-to-end-flow-catalog.md | `aa0ecb788594ba28` | `e629977124c113a5` |
| 04-dependency-impact-map.md | `c387e30afaf6c9f4` | `9bdf207ceeac259e` |
| 05-environments-configuration-and-boundaries.md | `f842eb604a111d86` | `4e67c2e6acced70b` |
| 06-persistence-restart-and-recovery.md | `c09beba0eac9e1d5` | `c9132f48db3f0608` |
| 07-authority-invariants-and-failure-modes.md | `87023ecee1e04ab5` | `24ae31d1e9d17e0f` |
| 08-test-proof-and-conformance-map.md | `708e2b7512ec293f` | `d9fe8e57cdef6442` |
| 09-known-gaps-reserves-and-current-boundaries.md | `dfdc6a605bec1820` | `98e6f36b4f8bf578` |

Note : README digest final `ca3815ed…` ≠ pre-CORR-01 on-disk `ce705fc5…` (Cycle 14) — attendu après correction cellule A. Digests 03–09 = contenu Cycle 14 inchangé dans CORR-01.

---

## 10. Huit chemins synchronisés

1. `projects/sfia-studio/production-runtime-reference/README.md`
2. `…/03-end-to-end-flow-catalog.md`
3. `…/04-dependency-impact-map.md`
4. `…/05-environments-configuration-and-boundaries.md`
5. `…/06-persistence-restart-and-recovery.md`
6. `…/07-authority-invariants-and-failure-modes.md`
7. `…/08-test-proof-and-conformance-map.md`
8. `…/09-known-gaps-reserves-and-current-boundaries.md`

Volumes **01** et **02** : digests **inchangés**.

---

## 11. Diff documentaire cumulatif (Cycle 14 + CORR-01)

Fichiers projet dirty (untracked staged = 0) :

```
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/production-runtime-reference/README.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md
 M projects/sfia-studio/production-runtime-reference/05-environments-configuration-and-boundaries.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
```

+ `.tmp-sfia-review/chatgpt-review.md` (non projet / non stage).

**Neuf candidats Cycle 14** (Roadmap + README + 03–09) **préservés** ; CORR-01 ajoute manifest + affine README A.

`git diff --stat` (projet + tmp) : 11 files · +653 / −215 (incl. pack).

---

## 12. Validations et sorties

### Pre-write (attendu FAIL × 8)

```
OK: canonical README exists
FAIL: volume digest drift … README.md … REFERENCE REVIEW REQUIRED
FAIL: … 03 … 04 … 05 … 06 … 07 … 08 … 09 …
RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED
```

Exactement **8** drifts volumes ; aucun trackedSource/trackedTest/volume 01–02.

### Write

```
node projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs --write-digests
→ WROTE digests — semantic review still required before accepting.
→ RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK
```

### Post-write readonly

```
OK: canonical README exists
RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK
```

### Autres

| Contrôle | Résultat |
|---|---|
| `git diff --check` | OK (exit 0) |
| JSON manifest | valide |
| Manifest allowlist strict | **8** `sha256_16` only |
| Vitest `productionRuntimeReference.conformance.d0.test.ts` | **NON EXÉCUTÉ** — `node_modules` absent ; pas d'install deps |
| `app/**` | **0** modification |
| OA-exclusive config / DB | **non touchés** |

Limite : checker PASS = conformance digests déterministe · **≠** exhaustivité sémantique PRR · **≠** LIVE.

---

## 13. R23 / R24

| Règle | Application |
|---|---|
| R23 | Architecture L2-D2 déjà CURRENT ON MAIN ; CORR-01 ne requiert pas nouvelle preuve code |
| R24 | Éditorial chronologique + digests traçabilité · **NO NEW PRODUCT SEMANTIC IMPACT** |

---

## 14. Fake / Real

| Classe | Statut |
|---|---|
| Entrée | DETERMINISTIC PROVEN AT TESTED SCOPE (historique DET 31/7 + post-merge CI) |
| Sortie CORR-01 | DOCUMENTARY CORRECTION VERIFIED + PRR CONFORMANCE PASS |
| LIVE / REAL boundary | **NOT PROVEN** · DETERMINISTIC ≠ READY FOR REAL |

---

## 15. Réserves R-01 / R-02 / R-03

| ID | Statut CORR-01 |
|---|---|
| **R-01** | Chronologie README A **corrigée** · digests **sync locaux** · **CORRECTED LOCAL / CONFORMANCE PASS** · **NOT CLOSED ON MAIN** tant que documentary G-GIT non fait |
| **R-02** | D4 HTTP LIVE **OPEN** |
| **R-03** | SQLite snapshot/restore **OPEN** · raw `DatabaseSync` **KNOWN GAP** |

H4/R-VOL-01 OPEN · R-CUT NOT PROVEN LIVE · AKG-M5 GLOBAL OPEN.

---

## 16. Gates

| Gate | Statut |
|---|---|
| GO CORR-01 README | **CONSUMED** |
| G-MANIFEST (8 digests) | **CONSUMED** (local) |
| G-GIT documentaire | **OPEN** |
| G-ACTIVATION | **OPEN** |
| Project commit/push/PR/merge | **NOT AUTHORIZED** |

---

## 17. Impact Product

**NONE** — aucun fichier `projects/sfia-studio/app/**` · aucun comportement runtime modifié · marker toujours default OFF / NOT ACTIVATED.

---

## 18. Trajectoire de sortie

C14 CORR-01 + G-MANIFEST (ce cycle)
→ revue ChatGPT de **ce** handoff
→ GO Morris **G-GIT DOCUMENTAIRE**
→ commit / push / Draft PR docs
→ Critical PR Review
→ GO merge distinct
→ post-merge CI
→ G-ACTIVATION PREPARATION (+ snapshot / H4-env / R-CUT)
→ GO Morris **G-ACTIVATION** distinct.

Aucune étape ultérieure autorisée automatiquement.

---

## 19. Cleanup

**CLEANUP SKIPPED / PRESERVED** — branche source `feat/akg-m5-l2-d2-local-oa-cutover` · Delivery · P6 · docs WT conservés. Pas de `-D` / remote delete / worktree remove.

---

## 20. Anti-claims

NOT: documentary integrated on main · OA-exclusive activated · Studio LIVE validated · R-CUT proven · O-01 LIVE E2E COMPLETE · AKG-M5 GLOBAL CLOSED · P6 GLOBAL PASS · runtime v3 ADOPTED · G-GIT documentaire acquis.

---

## 21. Verdict

**C14 CORR-01 — PASS**
**G-MANIFEST — CONSUMED**
**PRR CONFORMANCE — PASS**
**DOCUMENTARY TRUTH-SYNC — LOCAL CANDIDATE**
**PROJECT COMMIT/PUSH/PR — NOT AUTHORIZED**
**G-GIT DOCUMENTAIRE — OPEN**
**G-ACTIVATION — OPEN**

---

## 22. Instruction ChatGPT

1. Relire handoff distant (après publish) : correction README A1/A2/A3.
2. Vérifier matrice des 8 digests + sortie checker PASS.
3. Confirmer diff cumulatif Cycle 14 + CORR-01 (Roadmap/03–09 préservés + README A + manifest).
4. Statuer R-01 local PASS vs NOT ON MAIN ; R-02/R-03 ouverts.
5. Recommander **G-GIT DOCUMENTAIRE** seulement après acceptation sémantique — sans activation.

FIN DU PACK C14 CORR-01.
