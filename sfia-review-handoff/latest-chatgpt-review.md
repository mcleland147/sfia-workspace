# R24-NAP-02 — DOCUMENTARY RESERVES + PRR MANIFEST DIGEST REGULARIZATION

**Cycle:** SFIA 8 — Delivery / implémentation documentaire
**Profil:** STANDARD — contrôle sémantique renforcé
**Typologie:** DOC
**Review Pack:** FULL
**Review Handoff:** REQUIRED / publish-in-cycle
**Timestamp UTC:** `2026-10-30T07:18:18Z`

---

## 1. Timestamp UTC

`2026-10-30T07:18:18Z`

---

## 2. Git Truth Check

| Check | Result |
|---|---|
| Repo root | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation` |
| Origin | `https://github.com/mcleland147/sfia-workspace.git` |
| Branch | `feat/akg-m5-nora-adaptive-presentation` (**local / unpublished**) |
| HEAD | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| `origin/main` | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| merge-base | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` |
| Prior handoff R24-NAP-01 | tip `e32647a66435fc89c33586c67f6f2d75e3d5ec33` · blob `6f2b1896c590899a3321719f5c1aba2fc35da7bb` |
| Staged | **none** |
| Project commit this cycle | **NONE** |
| Destructive git | **NOT USED** |

**Compared to R24-NAP-01 handoff inventory:** same Product WIP set preserved (Option C + CORR-NAP-01…04 + QA-NAP-01…03 + harness + untracked NAP files). PRR 03/06/08/09 overlays from NAP-01 present; this cycle adds two documentary reserve fixes + manifest sha256_16 only.

**Git Truth:** COHERENT.

---

## 3. Git Review Index

### Modified this cycle (DOC / manifest)

| Path | Role |
|---|---|
| `…/03-end-to-end-flow-catalog.md` | Reserve: expand abbreviated renderer path |
| `…/06-persistence-restart-and-recovery.md` | Reserve: faithful `appendPilotTranscriptTurn` INSERT semantics |
| `…/08-test-proof-and-conformance-map.md` | Unchanged content this cycle (KEEP) — digest refreshed for WIP octets |
| `…/09-known-gaps-reserves-and-current-boundaries.md` | Unchanged content this cycle (KEEP) — digest refreshed |
| `…/production-runtime-reference.manifest.json` | **sha256_16 only** (10 fields) |

### Product WIP (preserved — **no mutation this cycle**)

Same modified + untracked inventory as R24-NAP-01 (actions, orchestrateTurn, ConversationSurface, cycleJournalStore, productSqliteSession, fakeProvider, useProductConversation, noraAdaptivePresentation*, E2E, Auth helpers, CORR tests, etc.).

---

## 4. Sources réellement lues

- Process/routing posture (template / routing / guardrails).
- Convergence boundaries (Build Doctrine / Roadmap / C1 / v3) — **no writes**.
- PRR README + vols 03/06/08/09 + manifest + checker.
- Code: `cycleJournalStore.ts` `appendPilotTranscriptTurn` · `productSqliteSession.ts` ALTER columns · `NoraAdaptivePresentationView.tsx` existence · ConversationSurface composition path.
- Prior handoffs: R24-NAP-01 `e32647a6` · QA-NAP-03 `b11ef7c9` · CORR-NAP-04 `d36fddf1`.
- Publisher: `scripts/sfia/README.md`.

---

## 5. Convergence Pre-check

| Gate | Result |
|---|---|
| KEEP Product / architecture | YES |
| ADAPT two documentary formulations only | YES |
| No Roadmap / C1 / doctrine / lastReviewed* | YES |
| No Product code/test mutation | YES |
| No manifest topology change | YES |
| L3 GLOBAL / EP-S2-08 / EP-S2-05 / L4 / v3 | OPEN / PARTIAL / NOT PROVEN / NOT AUTHORIZED / NON ADOPTED |

---

## 6. Capacité / milestone / trajectoire

| Field | Value |
|---|---|
| Capacité | Nora Adaptive Presentation A3/A4 — Option C |
| Milestone | AKG-M5 / L3-S2 |
| État | LOCAL IMPLEMENTED — PRE-INTEGRATION |
| Classification | KEEP Product · ADAPT 2 doc formulations · VERIFY digests · COMPLETE local conformance |
| Next | Cycle 13 PR readiness — **distinct GO** |
| Runtime v3 | NON ADOPTED |

---

## 7. Décision Morris consommée

GO Morris R24-NAP-02: two PRR corrections + bounded digest regularization after R24-NAP-01 semantic acceptance with minor reserves (`R24 SEMANTIC REVIEW ACCEPTED WITH MINOR DOCUMENTARY RESERVES — DIGEST GATE PENDING`). Manifest write authorized **only** for justified `sha256_16`. Project GI / PR / merge **NOT** authorized.

---

## 8. Analyse R23

**Transcript write path (confirmed in code):**

`appendPilotTranscriptTurn` (`cycleJournalStore.ts`):
1. If `logicalTurnId` present → SELECT prior row by project/session/logical_turn_id/role.
2. If prior found → **return frozen record** (includes `presentation_json` / `studio_control_json`) — **no UPDATE**.
3. Else → **INSERT** new transcript row with presentation/studio_control JSON.

**Renderer path (confirmed):** `app/features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx` exists; composed from ConversationSurface.

**Coverage class:** DOCUMENTED + COVERAGE VERIFIED (local WIP) · BEHAVIOR PROVEN at prior DET/Fake scopes · KNOWN GAP: server restart / LIVE / STOP browser unchanged.

**NO NEW PRODUCT SEMANTIC IMPACT** this cycle.

---

## 9. Corrections PRR 03 / 06

### PRR 06 — Write semantics (reserve)

**Before (imprecise):**
`persist … on assistant transcript row (cycleJournalStore insert/update paths)`

**After (code-faithful):**
`persist validated presentation + Studio notices via appendPilotTranscriptTurn INSERT on the assistant transcript row; retry-safe logicalTurnId lookup returns an existing row instead of creating a duplicate (**no** transcript UPDATE on that path)`

Preserved: migration/columns/idempotence/reload DET Fake / server restart NOT PROVEN / RunState NOT IMPLEMENTED.

### PRR 03 — Path expansion (reserve)

**Before:** `features/.../NoraAdaptivePresentationView.tsx` (+ other abbreviated siblings)

**After (relative to `app/`):**
`features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`, plus expanded siblings:
`lib/nora-cognitive-runtime/{noraAdaptivePresentation,noraProductTurnOutputType,cycleJournalStore,productSqliteSession}.ts`, `features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`, `features/project-assistant/{orchestrateTurn,actions}.ts`, `features/pre-m6-product-ui/hooks/useProductConversation.ts`, `lib/platform/ai/fakeProvider.ts`, `e2e/studio-nora-adaptive-qa-nap01.spec.ts`.

LOCAL CANDIDATE — PRE-INTEGRATION conserved. F02/F04 not rewritten beyond pointer text already present. No F03/F08/F09/F10 expansion.

---

## 10. Qualification PRR 08 / 09

**KEEP — NO ADDITIONAL SEMANTIC CHANGE.**

- NAP proof index, Fake/Real ceilings, matrix A–L, uncommitted status, open reserves, distinct GI gates — coherent with corrections.
- No contradiction requiring 08/09 rewrite.
- Digests refreshed only because octets already changed under R24-NAP-01 and remain current after 03/06 reserve edits (08/09 file bytes unchanged this cycle vs post-NAP-01).

---

## 11. Diffs complets des fichiers modifiés

### 11.A — PRR 06 Write row (integral corrected cell)

```
| Write | After Product turn normalize: persist validated `presentation` + Studio notices via `appendPilotTranscriptTurn` INSERT on the assistant transcript row; retry-safe `logicalTurnId` lookup returns an existing row instead of creating a duplicate (**no** transcript UPDATE on that path) |
```

### 11.B — PRR 03 Paths line (integral corrected)

```
**Paths (local WIP):** `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`, `lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`, `lib/nora-cognitive-runtime/cycleJournalStore.ts`, `lib/nora-cognitive-runtime/productSqliteSession.ts`, `features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`, `features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`, `features/project-assistant/orchestrateTurn.ts`, `features/project-assistant/actions.ts`, `features/pre-m6-product-ui/hooks/useProductConversation.ts`, `lib/platform/ai/fakeProvider.ts` (QA-only markers), `e2e/studio-nora-adaptive-qa-nap01.spec.ts` (all relative to `app/`).
```

### 11.C — Manifest (complete useful diff — sha256_16 only)

```diff
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 2098d863..7c864568 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -19,7 +19,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md",
-      "sha256_16": "f68f7167f71016f9"
+      "sha256_16": "89c1b959740c308b"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/04-dependency-impact-map.md",
@@ -31,7 +31,7 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md",
-      "sha256_16": "6fc1d9a4b224a2a2"
+      "sha256_16": "2f4d2ab593a581b0"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/07-authority-invariants-and-failure-modes.md",
@@ -39,11 +39,11 @@
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md",
-      "sha256_16": "357fb5ba5b423903"
+      "sha256_16": "f6bc6f73585425dd"
     },
     {
       "path": "projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md",
-      "sha256_16": "66e1ef8ee74259af"
+      "sha256_16": "6ebfc7c9f2163bcb"
     }
   ],
   "components": [
@@ -609,11 +609,11 @@
   "trackedSources": [
     {
       "path": "projects/sfia-studio/app/features/project-assistant/actions.ts",
-      "sha256_16": "80e4fbcf941890de"
+      "sha256_16": "ceb368a82983939e"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts",
-      "sha256_16": "f20d8d4a2663d756"
+      "sha256_16": "a37fc8b0f0adfd57"
     },
     {
       "path": "projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts",
@@ -657,7 +657,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",
-      "sha256_16": "37d79b9db14322c3"
+      "sha256_16": "5807dea9a14a0307"
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/sessionPaths.ts",
@@ -665,7 +665,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/cycleJournalStore.ts",
-      "sha256_16": "f3780f7c36792984"
+      "sha256_16": "060beae45f5570bb"
     },
     {
       "path": "projects/sfia-studio/app/lib/oa/project/infrastructure/sqlite/db.ts",
@@ -697,7 +697,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts",
-      "sha256_16": "ffe7a7dad6953259"
+      "sha256_16": "52abbdef13501059"
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/LifecycleSurface.tsx",
@@ -709,7 +709,7 @@
     },
     {
       "path": "projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts",
-      "sha256_16": "7eb2fa5f7fb56ac0"
+      "sha256_16": "7f967f41ab66fead"
     },
     {
       "path": "projects/sfia-studio/app/.env.example",
```

**Topology untouched:** schemaVersion, kind, canonicalReadme, components, flows, invariants, dependencies, trackedSourcePaths lists, trackedTests entries, `lastReviewedCommit`=`928ab15b032c392dafee74a916f2faad3ed524de`, `lastReviewedAt`=`2026-10-15T22:51:00+02:00`.

### 11.D — Full PRR 03/06/08/09 vs HEAD (includes NAP-01 overlays + NAP-02 fixes)

Diff-stat vs HEAD:

```
 03-end-to-end-flow-catalog.md                  | 42 ++++++++++++++++++++++
 06-persistence-restart-and-recovery.md         | 36 +++++++++++++++++++
 08-test-proof-and-conformance-map.md           | 20 +++++++++++
 09-known-gaps-reserves-and-current-boundaries.md | 36 +++++++++++++++++++
 production-runtime-reference.manifest.json     | 20 +++++------
 5 files changed, 144 insertions(+), 10 deletions(-)
```

`git diff --check` on PRR: **clean**.

Full overlay bodies for 03/06/08/09 were published in R24-NAP-01 handoff `e32647a6` §11. This pack focuses on the two reserve deltas + manifest. Overlay epistemic class remains **LOCAL CANDIDATE — PRE-INTEGRATION**.

---

## 12. Manifest avant / après

| Field | Before | After |
|---|---|---|
| Topology | unchanged | unchanged |
| Digests drifted | 10 | 0 (matched to local WIP octets) |
| `--write-digests` | not used | not used (surgical sha256_16 edit) |
| lastReviewedCommit / At | unchanged | unchanged |

---

## 13. Inventaire exhaustif des mismatches (pré-écriture RO)

Checker RO **before** refresh — **exactly 10** mismatches, **0** missing paths, **0** trackedTests drifts, **0** unknown drifts:

### A. Volumes

| Path | Old | New (local) | Origin |
|---|---|---|---|
| 03-end-to-end-flow-catalog.md | `f68f7167f71016f9` | `89c1b959740c308b` | DOC R24-NAP-01 + NAP-02 path reserve |
| 06-persistence-restart-and-recovery.md | `6fc1d9a4b224a2a2` | `2f4d2ab593a581b0` | DOC R24-NAP-01 + NAP-02 write-semantics reserve |
| 08-test-proof-and-conformance-map.md | `357fb5ba5b423903` | `f6bc6f73585425dd` | DOC R24-NAP-01 proof index (bytes unchanged this cycle) |
| 09-known-gaps-reserves-and-current-boundaries.md | `66e1ef8ee74259af` | `6ebfc7c9f2163bcb` | DOC R24-NAP-01 matrix (bytes unchanged this cycle) |

### B. trackedSources (Product WIP Option C / CORR/QA — reviewed prior cycles; **not mutated this cycle**)

| Path | Old | New | Origin |
|---|---|---|---|
| `…/actions.ts` | `80e4fbcf941890de` | `ceb368a82983939e` | Product Option C transport |
| `…/orchestrateTurn.ts` | `f20d8d4a2663d756` | `a37fc8b0f0adfd57` | Product Option C orchestration |
| `…/productSqliteSession.ts` | `37d79b9db14322c3` | `5807dea9a14a0307` | ALTER presentation/studio_control |
| `…/cycleJournalStore.ts` | `f3780f7c36792984` | `060beae45f5570bb` | appendPilotTranscriptTurn columns |
| `…/fakeProvider.ts` | `ffe7a7dad6953259` | `52abbdef13501059` | NAP QA Fake markers |
| `…/useProductConversation.ts` | `7eb2fa5f7fb56ac0` | `7f967f41ab66fead` | adaptivePresentation hook transport |

### C. trackedTests

**NONE** drifted.

### D. Missing paths

**NONE**.

### E. WIP present but absent from manifest inventory (NOT added — topology freeze)

New local files (`noraAdaptivePresentation.ts`, View+CSS, unit/UI/E2E NAP tests, etc.) and other modified-but-untracked-in-manifest Product files remain **qualified in PRR 08/09 only**. **No** new components/flows/trackedSources/tests entries.

---

## 14. Matrice vieux / nouveaux digests

Same 10 pairs as §13 — all applied. Post-write rehash: **0 mismatches**.

---

## 15. Justification de chaque digest actualisé

| Digest update | Authorized because |
|---|---|
| 03/06 | Documentary overlays + ChatGPT-accepted reserves fixed under this GO |
| 08/09 | Documentary NAP-01 overlays already semantically reviewed; octets stable this cycle |
| 6 trackedSources | Option C / CORR / QA Product WIP bytes already reviewed in prior Delivery/QA/CORR handoffs; G5 satisfied; **no Product edit this cycle** |

Method: surgical JSON `sha256_16` field edits after inventory. **`--write-digests` NOT used** (would be equivalent here since all drifts were qualified, but targeted edit preferred).

---

## 16. Preuve gate sémantique préalable (G1–G8)

| Gate | Status |
|---|---|
| G1 Two PRR corrections done | PASS |
| G2 Conform to local code | PASS (`appendPilotTranscriptTurn` INSERT+lookup; View path exists) |
| G3 08/09 coherent | PASS — KEEP |
| G4 Product WIP unmodified this cycle | PASS |
| G5 trackedSources = known Option C/CORR/QA | PASS |
| G6 trackedTests | N/A — no drifts |
| G7 No unattributed path/change | PASS — inventory complete |
| G8 No structuring topology change | PASS |

**SEMANTIC GATE ELIGIBLE — BOUNDED DIGEST REFRESH AUTHORIZED** → executed.

---

## 17. Commandes et exit codes

```text
# RO inventory
node projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs
→ RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED  EXIT:1
→ exactly 10 drifts listed in §13

# After surgical sha256_16 update
node projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs
→ RESULT: PRODUCTION RUNTIME REFERENCE CONFORMANCE OK  EXIT:0

# Vitest non-destructive intent (file has 5 tests; filter included digest-match)
npx vitest run __tests__/architecture/productionRuntimeReference.conformance.d0.test.ts
→ 5 passed  EXIT:0
```

**Probe note:** suite includes temporary mutation of `trackedSources[0]` (`actions.ts` — uncommitted WIP). Restoration confirmed post-run (`sha16` still `ceb368a82983939e`; no `PRR-DRIFT-PROBE` marker). Future Cycle 13 should prefer isolating the probe off WIP Product files.

`git diff --check` PRR: clean.

---

## 18. Conformance checker / oracle

| Check | Result |
|---|---|
| JSON valid | YES |
| Checker RO post-refresh | **CONFORMANCE OK** EXIT 0 |
| Vitest oracle | **5/5 PASS** |
| Path existence | OK |
| ID uniqueness/resolution | OK (oracle) |
| Digest match local WIP | OK |
| Unexplained drift | **NONE** |

**Status:** `CONFORMANCE PASS — LOCAL WIP SNAPSHOT`

≠ remote CI · ≠ merge conformance · ≠ PR READY · digests = worktree octets only · Delivery still UNCOMMITTED.

---

## 19. Confirmation Product WIP intact

- No Product file edited this cycle.
- Post-probe `actions.ts` hash unchanged vs pre-refresh expected digest.
- Untracked NAP assets still present.
- HEAD still `2cc63686…`.

---

## 20. Fake / Real Qualification

| Field | Value |
|---|---|
| Applicable | OUI (documentary context) |
| Boundary | OpenAI Agents Structured Outputs |
| Fake | FakeConversationProvider NAP QA |
| REAL | OpenAI LIVE |
| Entry | DET VERIFIED + AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED |
| This cycle | **DOCUMENTARY SEMANTIC REVIEWED + LOCAL DIGEST CONFORMANCE VERIFIED** |
| Out of scope | REAL BOUNDARY / E2E REAL / FULL SERVER RESTART / L3 CLOSED / L4 / v3 ADOPTED |
| New LIVE | NONE |

---

## 21. Réserves, dette, exit

**Still open:**
- QA-NAP-06 STOP browser NOT PROVEN
- QA-NAP-10 server restart NOT PROVEN
- OpenAI LIVE structured emit NOT PROVEN
- Project uncommitted / not on main
- New NAP sources absent from manifest topology (by design this GO)
- Local conformance ≠ CI/merge
- EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN

**Exit for this cycle:** reserves corrected · digests justified · conformance local PASS · handoff published · ChatGPT final review.

**Next:** Cycle 13 PR readiness under distinct qualification/GO — recheck digests before any Product commit.

---

## 22. Gates Morris restants

1. ChatGPT **final documentary review** of R24-NAP-02
2. Distinct **Product GI / PR / merge** authorization
3. Optional later: LIVE / STOP browser / server restart proof GOs
4. Any future **manifest topology enrichment** for new NAP paths → new Morris GO

---

## 23. Verdict unique

**R24-NAP-02 LOCAL REGULARIZATION COMPLETE — SEMANTICALLY REVIEWED — MANIFEST CONFORMANCE PASS AT LOCAL WIP — CHATGPT FINAL REVIEW REQUIRED — PROJECT GI NOT AUTHORIZED**

Anti-claims: ≠ CURRENT ON MAIN · ≠ PR READY · ≠ REAL PROVEN · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED · digest MATCH ≠ permanent semantic validity beyond reviewed octets.

---

## ChatGPT instruction

À réception: vérifier publication Git; lire ce pack; revoir les deux corrections PRR; inspecter chaque changement de digest (§11.C / §13–15); vérifier qu'aucun drift inconnu n'a été absorbé; distinguer conformance locale vs intégration Git; rendre le verdict documentaire final; ensuite seulement qualifier Cycle 13 PR readiness.

FIN R24-NAP-02 REVIEW PACK FULL.
