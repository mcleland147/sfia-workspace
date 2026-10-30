# R24-NAP-CR-01 — TEMPORAL CURRENTNESS CORRECTION — REVIEW PACK FULL

MONO-CYCLE: R24-NAP-CR-01
PROFILE: STANDARD
TYPOLOGY: DOC / R24 / CORRECTION
MILESTONE: AKG-M5 / L3-S2
PARENT: C14-NAP-01

## 1. Timestamp UTC

2026-10-30T13:16:29Z

## 2. GO Morris consommé

R24-NAP-CR-01 — TEMPORAL CURRENTNESS CORRECTION.

Autorisé: corrections locales des documents R24; vérifications Git et sémantiques; vérification manifest RO; Review Pack FULL; publication handoff L3.

Non autorisé (respecté): commit projet; push projet; PR documentaire; merge; actualisation digests; suppression branche; modification Product; modification processus SFIA; nouvelle preuve REAL; clôture L3 / promotion v3; `--write-digests`.

## 3. Git Truth Check

| Item | Value |
|------|-------|
| Worktree | `/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync` |
| Branch | `docs/akg-m5-nap-option-c-c14-r24-truth-sync` |
| HEAD | `c848b98c5bdb218322c8a2cf457568c8a75c1e3f` |
| origin/main | `c848b98c5bdb218322c8a2cf457568c8a75c1e3f` |
| Match | HEAD == origin/main == `c848b98c5bdb218322c8a2cf457568c8a75c1e3f` |
| PR Product | #628 MERGED |
| Handoff C14 tip | `687c060f67234bff920614b8887e88612f69019e` |
| Handoff C14 blob | `00bd8a58bcf79a57c4bb5c4648665654ac642910` |
| Staged | none |
| Manifest diff | (none — intact) |
| Product diff | (none) |

Status porcelain (pre-pack finalize):

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/README.md
```

**Baseline:** six documentary files from C14 present; no DOCUMENTARY BASELINE DRIFT; no reset/clean/stash/rebase.

## 4. Sources lues

Processus: `prompts/templates/sfia-cycle-execution-template.md`; routing guide; rules/guardrails; validation checklist; repository execution engine (CKC Cycle 8 applicable as Delivery/implémentation).

Studio: Convergence Build Doctrine + Roadmap; Product Completion 01; doctrine v3 30/32/34/35 (RO).

PRR: README + volumes 03/06/08/09 (+ 02/04/07 coherence RO); manifest RO.

Code applicable (RO, no mutation): noraAdaptivePresentation.ts; noraProductTurnOutputType.ts; productSqliteSession.ts; orchestrateTurn.ts; ConversationSurface.tsx; fakeProvider.ts; unit/UI tests; Playwright E2E spec.

Preuves: PR #628; CI 41043545435 / 41050498551; handoff C14 `687c060f…` / blob `00bd8a58…` (immutable tip).

## 5. Convergence Pre-check

| Field | Value |
|-------|-------|
| Capacité v3 | Nora Adaptive Presentation A3/A4 Option C |
| Milestone | AKG-M5 / L3-S2 |
| Product | CURRENT ON MAIN · PR #628 · CI post SUCCESS |
| Documentary | LOCAL AUTHORING CANDIDATE at C14 snapshot · digest gate not consumed · DOC GI not consumed |
| Gap | Temporal currentness — temporary gate wording readable as permanent CURRENT |
| Classification | KEEP Product · KEEP Git/CI · ADAPT temporal formulations · COMPLETE CURRENT/HISTORICAL separation |
| Critical path | Temporal fix → Semantic Delta Review → digest GO → DOC GI → post-integration verification |
| Reserves | EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · v3 NON ADOPTED |

## 6. Capacité et trajectoire v3

Option C Product ON MAIN preserved. No new architecture. No trajectory change. Runtime v3 NON ADOPTED unchanged.

## 7. Handoff C14 source

Tip `687c060f67234bff920614b8887e88612f69019e` · blob `00bd8a58bcf79a57c4bb5c4648665654ac642910`.

Verdict C14: POST-MERGE VERIFIED — R24 LOCAL READY — SEMANTIC REVIEW REQUIRED — DIGEST GATE PENDING — DOC GI NOT AUTHORIZED — CLEANUP BLOCKED.

## 8. Snapshot documentaire C14 (before R24-NAP-CR-01)

Six dirty files vs main `c848b98c…`: Roadmap · PRR README · 03 · 06 · 08 · 09. Manifest untouched.

C14 digest photograph (before CR):

| Volume | Manifest | C14 current |
|--------|----------|-------------|
| README | 81b778241ade4da8 | 65a5d398fb7f112e |
| 03 | 89c1b959740c308b | 4e8afd0560d3f660 |
| 06 | 2f4d2ab593a581b0 | c79b001b5136a1be |
| 08 | f6bc6f73585425dd | 633daea927f2c6ab |
| 09 | 6ebfc7c9f2163bcb | 754b1e3c8e575d6a |

## 9. Problème temporel identifié

Formulations C14 true at 2026-10-30 authoring but readable as permanent lifecycle after docs publication:

- DOCUMENTARY DIGEST GATE PENDING
- DOCUMENTARY GIT INTEGRATION NOT AUTHORIZED
- LOCAL DOCUMENTARY TRUTH-SYNC CANDIDATE
- ≠ docs already ON MAIN / this README already ON MAIN
- Gates Morris still open (documentary gates framed as eternally open)
- NEXT path framed without “at authoring / subject to subsequent gates”

## 10. Corrections par fichier

### Roadmap
- Softened cycle label (removed permanent LOCAL DOCUMENTARY CANDIDATE parenthesis).
- Replaced R24 segment with **HISTORICAL AUTHORING SNAPSHOT (C14-NAP-01, 2026-10-30)** + resolve-later-from-Git rule.
- Product OPEN EXITS remain **CURRENT**.
- NEXT → **NEXT QUALIFIED PATH AT AUTHORING (subject to subsequent Morris gates)**.
- Removed permanent “this Roadmap tip ≠ docs ON MAIN until distinct DOC GI”.

### PRR README
- Header: C14 + R24-NAP-CR-01 framing.
- R24 row → HISTORICAL AUTHORING SNAPSHOT + Git resolution for later lifecycle.
- Anti-claims: Product ON MAIN ≠ automatic documentary publication.

### PRR 08
- Conformance note → as-of C14 authoring drifts; CR does not refresh digests; later conformance from actual bytes + governed gate.

### PRR 09
- R24 row → HISTORICAL AUTHORING SNAPSHOT.
- L. PRR semantic sync → dated snapshot + resolve from Git.
- Exit/next → NEXT QUALIFIED PATH AT AUTHORING.
- Anti-claims temporalized.
- Gates Morris → as-of authoring documentary gates not consumed; Product proof GOs still CURRENT OPEN.

### PRR 03 / 06
- **NO ADDITIONAL SEMANTIC CHANGE** (already CURRENT PRODUCT + HISTORICAL pre-merge Product wording; no durable temporal trap in documentary lifecycle claims).

## 11. Diff correctif intégral (R24-NAP-CR-01 vs C14 candidate)

```diff
### Roadmap
--- /tmp/r24-nap-cr-01/sfia-studio-convergence-roadmap.md.c14	2026-10-30 14:12:57
+++ projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md	2026-10-30 14:14:20
@@ -4,7 +4,7 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **CURRENT TIP 2026-10-30 — AKG-M5 L3-S2 NORA ADAPTIVE PRESENTATION OPTION C — PR #628 MERGED ON MAIN** | **Morris GO 2026-10-30** · **CYCLE 14 — C14-NAP-01 POST-MERGE VERIFICATION + R24 TRUTH-SYNC (LOCAL DOCUMENTARY CANDIDATE)** · [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · parents **`2cc6368602197e18fe886c87c8ced0a1b434f5a2`** + **`1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a`** · source `feat/akg-m5-nora-adaptive-presentation` · **2 commits** preserved: Delivery **`c6b5ae3a798070760587ac6605e6276458f375f6`** (`feat(studio): add Nora adaptive presentation with QA and PRR sync`) · CI correction **`1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a`** (`test(studio): keep auth cookie Vitest independent of Chromium`) · **30 files** (23 modified / 7 added / 0 deleted) · Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** · Vitest CI **565** files PASS / **22** SKIP · **6183** tests PASS / **142** SKIP / **0** FAIL · Modeled governance **75 PASS** · Product capability **INTEGRATED ON MAIN**: Nora Adaptive Presentation A3/A4 Option C · nullable `presentation` DTO · fail-closed normalize · typed Studio notices · Memory B `presentation_json` / `studio_control_json` · ConversationSurface adaptive renderer · narrative fallback · Cognitive STOP / CORR-NAP-01…04 · Fake NAP dual-gate · Vitest cookie-shape oracle without Chromium · Proof ceiling: **DETERMINISTIC AT TESTED SCOPE** · **Preserved prior L3-S2 ON MAIN:** Option B / S8 (#623) · EP-S2-08-PROOF-01 DET (#626) · Binding/docs_write retired (#618) · **R24 (this tip):** LOCAL DOCUMENTARY TRUTH-SYNC CANDIDATE on branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` · Roadmap + PRR README/03/06/08/09 · **DOCUMENTARY DIGEST GATE PENDING** (manifest **not** refreshed this cycle) · **DOCUMENTARY GIT INTEGRATION NOT AUTHORIZED** · **OPEN EXITS / RESERVES:** R-STOP-BROWSER **NOT PROVEN** · R-SRV-RESTART **NOT PROVEN** · R-LIVE-EMIT **NOT PROVEN** · R-MANIFEST-TOPO **OPEN** · EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · this Roadmap tip ≠ docs ON MAIN until distinct DOC GI · digest MATCH ≠ semantic exhaustiveness · Prior CURRENT tip (**2026-10-28 EP-S2-08-PROOF-01 / PR #625 + #626**) = **HISTORICAL AS TIP** under this CURRENT · **NEXT (qualification only):** Semantic Review of this R24 candidate → Morris digest regularization GO if needed → distinct DOC Git Integration → then Product continuity proofs (STOP browser · server restart · OpenAI LIVE structured emit · EP-S2-08 remaining · EP-S2-05) under **distinct Morris GO** · ≠ Delivery implied by this tip · ≠ L3 closed · C1/Product Completion link preserved. |
+| **CURRENT TIP 2026-10-30 — AKG-M5 L3-S2 NORA ADAPTIVE PRESENTATION OPTION C — PR #628 MERGED ON MAIN** | **Morris GO 2026-10-30** · **CYCLE 14 — C14-NAP-01 POST-MERGE VERIFICATION + R24 TRUTH-SYNC** · [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · parents **`2cc6368602197e18fe886c87c8ced0a1b434f5a2`** + **`1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a`** · source `feat/akg-m5-nora-adaptive-presentation` · **2 commits** preserved: Delivery **`c6b5ae3a798070760587ac6605e6276458f375f6`** (`feat(studio): add Nora adaptive presentation with QA and PRR sync`) · CI correction **`1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a`** (`test(studio): keep auth cookie Vitest independent of Chromium`) · **30 files** (23 modified / 7 added / 0 deleted) · Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** · Vitest CI **565** files PASS / **22** SKIP · **6183** tests PASS / **142** SKIP / **0** FAIL · Modeled governance **75 PASS** · Product capability **INTEGRATED ON MAIN**: Nora Adaptive Presentation A3/A4 Option C · nullable `presentation` DTO · fail-closed normalize · typed Studio notices · Memory B `presentation_json` / `studio_control_json` · ConversationSurface adaptive renderer · narrative fallback · Cognitive STOP / CORR-NAP-01…04 · Fake NAP dual-gate · Vitest cookie-shape oracle without Chromium · Proof ceiling: **DETERMINISTIC AT TESTED SCOPE** · **Preserved prior L3-S2 ON MAIN:** Option B / S8 (#623) · EP-S2-08-PROOF-01 DET (#626) · Binding/docs_write retired (#618) · **R24 DOCUMENTARY LAYER — HISTORICAL AUTHORING SNAPSHOT (C14-NAP-01, 2026-10-30, before semantic review and documentary Git Integration):** at that dated authoring instant the documentary candidate was local on branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` (Roadmap + PRR README/03/06/08/09); digest regularization was pending (manifest **not** refreshed in that cycle); documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim. Subsequent documentary integration / digest / publication status must be resolved from Git, applicable gates and post-merge proofs. · **OPEN EXITS / RESERVES (Product — CURRENT):** R-STOP-BROWSER **NOT PROVEN** · R-SRV-RESTART **NOT PROVEN** · R-LIVE-EMIT **NOT PROVEN** · R-MANIFEST-TOPO **OPEN** · EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · digest MATCH ≠ semantic exhaustiveness · Product ON MAIN ≠ automatic documentary publication · Prior CURRENT tip (**2026-10-28 EP-S2-08-PROOF-01 / PR #625 + #626**) = **HISTORICAL AS TIP** under this CURRENT · **NEXT QUALIFIED PATH AT AUTHORING (subject to subsequent Morris gates):** Semantic Review of this R24 candidate → Morris digest regularization GO if needed → distinct DOC Git Integration → then Product continuity proofs (STOP browser · server restart · OpenAI LIVE structured emit · EP-S2-08 remaining · EP-S2-05) under **distinct Morris GO** · ≠ Delivery implied by this tip · ≠ L3 closed · C1/Product Completion link preserved. |
 | **HISTORICAL TIP 2026-10-28 — AKG-M5 L3-S2 EP-S2-08-PROOF-01 POST-MERGE VERIFIED (PR #625 + PR #626)** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-30 — NORA ADAPTIVE PRESENTATION OPTION C / PR #628 MERGED**) — **Morris GO 2026-10-28** · **CYCLE 14/15 — POST-MERGE CAPITALIZATION & TRAJECTORY TRUTH-SYNC** · [PR #625](https://github.com/mcleland147/sfia-workspace/pull/625) **MERGED** `2026-10-28T03:48:03Z` · merge **`3fb84630efb9e0d2acaaf81b342da0358107db10`** · **4 documentary files** (Roadmap · PRR README · PRR 09 · manifest) · living-tip truth-sync after #623/#624 · **NO PRODUCT RUNTIME SEMANTIC IMPACT** · [PR #626](https://github.com/mcleland147/sfia-workspace/pull/626) **MERGED** `2026-10-28T13:44:42Z` · merge **`3064047258e54cfc9a1f24e21d322ad6ae18217d`** · parents **`3fb84630…`** + **`485ec3cb…`** · source `feat/akg-m5-ep-s2-08-proof-01` · **2 commits** preserved (`e78db159…` Product · `485ec3cb…` R24 premerge currentness) · **18 files** (7 Product code · 5 tests · 6 PRR/manifest) · feature branch **preserved** · Pre-merge CI [#40696083699](https://github.com/mcleland147/sfia-workspace/actions/runs/40696083699) **SUCCESS** · Required Gate **PASS** (head `485ec3cb…`) · Post-merge CI [#40699255387](https://github.com/mcleland147/sfia-workspace/actions/runs/40699255387) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** (event=`push` · branch=`main` · HEAD=`30640472…`) · **EP-S2-08-PROOF-01 ON MAIN (DET at tested scope):** Option A Project-only Delivery CKC eligibility · Option 1 Generic PREPARE preserves `repositoryMutationDeclared` · R-INSPECT-01 Pilote inspection disclosure · R-HD-01 integrated HD provenance / `HD_MUTATION_DECLARATION_CONFLICT` · B2/B5/B6 remount / restitution / Nora unavailable · R24 temporal currentness · Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · **Preserved Option B / S8 ON MAIN (PR #623):** Project-first · CycleInstance optional · no invented cycle · SHE · GERM/W3-C · EP-S2-01…04/06/07/09…12 PASS DET · **OPEN EXITS:** EP-S2-08 **PARTIAL** (browser `/studio` remount E2E OPEN · dual F3/W3-C live UX OPEN) · EP-S2-05 **NOT PROVEN** · Late Evidence supersession **OPEN** · mutating Generic Product PASS **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · documentary ON MAIN ≠ new REAL proof · ≠ automatic L4 · Prior CURRENT tip (**PR #623/#624 living tip / Cycle 14 R24 FOLLOW-UP**) = **HISTORICAL AS TIP** under the then-CURRENT · **HISTORICAL AUTHORING SNAPSHOT AS-OF 2026-10-28:** Roadmap CURRENT tip + PRR 09 post-merge temporal qualification authored locally · manifest digest refresh **GATED** by independent Critical Semantic Review until distinct Morris DOC GI · Product facts remain ON MAIN; tip status only is historical under 2026-10-30 CURRENT. |
 | **HISTORICAL TIP 2026-10-28 — AKG-M5 L3-S2 OPTION B — PRODUCT MERGED ON MAIN (PR #623) / R24 DOCUMENTARY MERGED ON MAIN (PR #624) / LIVING TIP TRUTH-SYNC** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-28 — EP-S2-08-PROOF-01 POST-MERGE VERIFIED / PR #625 + PR #626**) — **Morris GO 2026-10-28** · **CYCLE 14 — R24 FOLLOW-UP LIVING TIP TRUTH-SYNC** · [PR #623](https://github.com/mcleland147/sfia-workspace/pull/623) **MERGED** `2026-10-27T15:02:16Z` · merge **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** · parents **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** + **`73f0166c6a71c301a7b2a9c2471beb30ad068221`** · source branch `feat/akg-m5-l3-s2-generic-proof-continuity` · 4 commits preserved (`0577ca5c` · `90bbf479` · `f7c9ba78` CORR-CI-623-01 · `73f0166c` CORR-CI-623-02) · **23 files** · [post-merge CI #40526990871](https://github.com/mcleland147/sfia-workspace/actions/runs/40526990871) **SUCCESS** · **Required Gate PASS** · Construction **Option B / S8 Project-first** **CURRENT ON MAIN**: Project obligatoire · CycleInstance facultatif (D-ER-17) · aucun cycle fictif · Evidence `generic_materialization` · FS OBSERVED / digest-from-bytes DET · W3-B ABSENT/ADMISSIBLE/REJECTED · ReviewBundle / ClaimEvaluation · W3-C / GERM / Nora Tool-First (CI-623-01/02 closed DET) · SHE preserved · Preuve **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · EP-S2-01…04 **PASS DET** · EP-S2-05 **NOT PROVEN** · EP-S2-06/07 **PASS DET** · EP-S2-08 **PARTIAL** · EP-S2-09…12 **PASS at tested scope** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · G-REAL **NOT GRANTED** · REAL **NOT PROVEN** · runtime v3 **NON ADOPTED** · mutating Generic Product PASS **NOT PROVEN** · late Evidence supersession policy **OPEN** (fail-closed `IDEMPOTENCY_CONFLICT`) · Prior tip **LOCAL CANDIDATE / dirty / PROJECT GIT INTEGRATION NOT AUTHORIZED** = **HISTORICAL AS TIP** (true pre-merge) · Prior L3-S1 oracle tip remains historically true and is **HISTORICAL AS TIP** under this CURRENT · **THIS TIP'S DOCUMENTARY LAYER (updated R24 FOLLOW-UP LIVING TIP TRUTH-SYNC 2026-10-28):** Product facts above remain **CURRENT IMPLEMENTED** · R24 documentary Truth-Sync is **CURRENT ON MAIN** via [PR #624](https://github.com/mcleland147/sfia-workspace/pull/624) **MERGED** `2026-10-28T01:51:07Z` · merge **`1fea1e61df02a90cd42edfd7b987ad7982a8fd63`** · parents **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** + **`603b43e2927ab420be172f6bd26d40ad676cae1a`** · documentary commit **`603b43e2927ab420be172f6bd26d40ad676cae1a`** · source branch `docs/akg-m5-l3-s2-postmerge-r24-current` · **10 documentary files** ON MAIN · [post-merge CI #40617482621](https://github.com/mcleland147/sfia-workspace/actions/runs/40617482621) **SUCCESS** · PRR CONFORMANCE **PASS** (Vitest 5/5 at merge) · **NO PRODUCT SEMANTIC IMPACT** · Preuves Product / EP-S2-05 **NOT PROVEN** / EP-S2-08 **PARTIAL** / L3 GLOBAL **OPEN** / REAL **NOT PROVEN** / G-REAL **NOT GRANTED** / runtime v3 **NON ADOPTED** / late Evidence supersession **OPEN** remain **INCHANGÉES** · Prior tip documentary layer **PRE-INTEGRATION SNAPSHOT (as-of 2026-10-27, before documentary Git Integration)** = **HISTORICAL AS TIP / CONSUMED** (true for that dated local candidate; **≠** erasure) · **CONSUMED GATE SNAPSHOTS (dated):** Eight-Digest Manifest Gate **PASS LOCAL** 2026-10-27 (handoff tip `e0c9f298…`) · R24-CR-01 currentness correction **DELIVERED** 2026-10-27 on Roadmap + PRR README + PRR 09 (handoff `f8e16328…`) · Critical Delta Semantic Review **PASS** · Two-Digest Manifest Gate **PASS LOCAL** 2026-10-27 for the then-reviewed README digest `d6b3f0732e9cbd5a` + PRR 09 digest `ce0e37604698e0c5` (handoff tip `daf6ed0b…` / blob `14a12e41…`) — that result is **octet-scoped**, not a permanent claim on later bytes · Final Documentary Delta Readiness **RESERVED** 2026-10-27 (handoff `db51d58d…` / blob `a344626c…`) on residual ACTIVE currentness · R24-CR-02 durable temporal classification **DELIVERED** 2026-10-27 · Final Documentary Delta Readiness **PASS LOCAL** → DOC GI Draft PR #624 → undraft/merge **CONSUMED** 2026-10-28 · **THIS CYCLE (local until distinct Morris DOC GI):** living CURRENT TIP truth-sync post-merge #624 on Roadmap (+ PRR README/09 anti-claim currentness if required) · **CONDITIONAL FUTURE REQUIREMENTS (durable):** any subsequent README/09 byte change requires applicable Critical Semantic Review and Morris-authorized digest refresh before claiming local PRR conformance · digest mismatch ⇒ REFERENCE REVIEW REQUIRED · documentary commit/push/Draft PR and documentary merge each require a **distinct Morris GO** · post-merge documentary truth-sync and EP requalification remain governed · living currentness follows Git/preuves and future governed Roadmap updates · **≠** automatic L4 · **≠** L3 GLOBAL CLOSED · **≠** REAL / G-REAL · **≠** runtime v3 ADOPTED · **≠** EP-S2-05 PROVEN · **≠** EP-S2-08 PASS · documentary ON MAIN ≠ new Product proof · living tip sync ≠ Product Delivery. |
 | **HISTORICAL TIP 2026-10-26 — AKG-M5 L3-S1 ORACLE INTEGRATED ON MAIN (PR #621 MERGED / POST-MERGE CI SUCCESS)** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-27 — AKG-M5 L3-S2 OPTION B MERGED ON MAIN / PR #623**) — **Morris 2026-10-26** · **AKG-M5-TC-2026-10-26 T-C ADOPTED** · **AKG-M5-L3S1-2026-10-26 L3-S1 ADOPTED** · **D-P6-SHE-01** SHE · Decision Pack [`05-…requalification.md`](./architectural-knowledge-governance/m5-product-transformation/05-m5-target-journey-and-trajectory-requalification.md) **INTEGRATED ON MAIN** via [PR #620](https://github.com/mcleland147/sfia-workspace/pull/620) (**MERGED** `2026-10-26T15:25:24Z` · merge `b20733c799aa4abef16a283dc2069fd61325367e`) · [PR #621](https://github.com/mcleland147/sfia-workspace/pull/621) **MERGED** `2026-10-26T18:50:21Z` · merge **`592226cd53b70035c1b5f1f0454f76e52abab7e3`** · parents **`b20733c799aa4abef16a283dc2069fd61325367e`** + **`de1fa7aefa0cc08c0afb6e2fbc307287f305427d`** · source commit `test(studio): cover AKG-M5 L3-S1 generic DET integration` · oracle `akgM5L3S1.genericExecutionIntegrated.d0.test.ts` **INTEGRATED ON MAIN** (blob `2c97b91a…` · sha256 `6372ddf8…`) · [post-merge CI #40381306724](https://github.com/mcleland147/sfia-workspace/actions/runs/40381306724) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`push` · branch=`main` · HEAD=merge) · Product runtime **UNCHANGED** by #621 · **NO PRODUCT SEMANTIC IMPACT** · EP01–EP09 **PASS** DET tested scope · EP10 **NON-CLAIM** · technical Evidence + frozen RB + ClaimEvaluation `not_proven` + Product **UNCLAIMED** · Technical SUCCESS **≠** Product PROVEN · L1 **DONE** · L2 **PARTIAL** · exclusive **DEFAULT OFF** · L3-S1 delivery **INTEGRATED** · **L3 GLOBAL OPEN / NOT COMPLETE** · **HISTORICAL SNAPSHOT 2026-10-26 (as-of tip date):** L3-S2 was then **NOT STARTED** / **NO DELIVERY GO** / prospective « NEXT CANDIDATE QUALIFICATION » / Delivery then **NOT AUTHORIZED** — true for that dated tip; **do not read as active trajectory instructions after 2026-10-27** · **HISTORICAL TRAJECTORY NOTE (as tip date / pre #623 merge):** L3-S2 Option B was then **LOCAL CANDIDATE** · **≠ L3-S2 CURRENT ON MAIN** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ READY TO MERGE** — superseded by PR #623 MERGED · L4–L6 **NOT STARTED** / **NOT AUTHORIZED by this tip** · H4/Q12/R-CUT/G-ACTIVATION **OPEN** · G-REAL/REAL **NOT GRANTED / NOT PROVEN** · runtime v3 **NON ADOPTED** · **AKG-M5 GLOBAL OPEN** · remaining functional gaps (Mission Project-only EP-S2-05 · Nora/Pilote UX EP-S2-08 PARTIAL · late Evidence recovery · FS→Git→Review REAL) tracked under LOCAL tip / PRR 09 · **HISTORICAL NEXT (as tip date):** R24-SR / Manifest / Project Git Integration path then pending — superseded after PR #623 MERGED + Cycle 14 R24 CURRENT local authoring · **≠** automatic L4 start. |
### README
--- /tmp/r24-nap-cr-01/README.md.c14	2026-10-30 14:12:57
+++ projects/sfia-studio/production-runtime-reference/README.md	2026-10-30 14:14:20
@@ -66,7 +66,7 @@
 Canonical detail for lifecycle, known gaps, and main-vs-branch split: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)**. Volumes 03/07/08 dated 2026-10-25 overlays that still say pre-push **LOCAL DELIVERY** / **PENDING GIT INTEGRATION** are **HISTORICAL AS OF `a75d0ed5`** for lifecycle status (superseded by vol 09 + this README block). Behaviour marked **CURRENT ON MAIN** in those volumes remains main truth until merge.


-**Nora Adaptive Presentation Option C / AKG-M5 L3-S2 — CURRENT PRODUCT ON MAIN (PR #628 MERGED — 2026-10-30) + C14-NAP-01 R24 LOCAL documentary truth-sync candidate:**
+**Nora Adaptive Presentation Option C / AKG-M5 L3-S2 — CURRENT PRODUCT ON MAIN (PR #628 MERGED — 2026-10-30) + C14-NAP-01 / R24-NAP-CR-01 documentary truth-sync:**

 | Epistemic class | Element |
 |---|---|
@@ -74,8 +74,8 @@
 | **Product facts ON MAIN** | Nullable Option C `presentation` DTO · fail-closed normalize · typed Studio notices (server provenance) · Memory B `presentation_json` / `studio_control_json` · ConversationSurface → `NoraAdaptivePresentationView` · narrative / plain fallback · Cognitive STOP / CORR-NAP-01…04 · Fake NAP dual-gate (`SFIA_STUDIO_E2E_QA_CONTROL` ∧ Fake provider) |
 | **Proof ceiling** | **DETERMINISTIC AT TESTED SCOPE** · Fake Auth browser QA historical (QA-NAP-03) · **≠** OpenAI LIVE structured emit · **≠** STOP browser · **≠** server process restart |
 | **HISTORICAL AS OF authoring** | Pre-merge R24-NAP overlays « LOCAL CANDIDATE — PRE-INTEGRATION / PRODUCT UNCOMMITTED / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN » — **true before PR #628 merge**; preserve as dated snapshot · superseded for Product lifecycle by this block |
-| **R24 C14-NAP-01 (this README edit)** | LOCAL DOCUMENTARY TRUTH-SYNC CANDIDATE · volumes 03/06/08/09 + Roadmap · source branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` · **≠** this README already ON MAIN · **DOCUMENTARY DIGEST GATE PENDING** (no `--write-digests` this cycle) · **DOCUMENTARY GIT INTEGRATION NOT AUTHORIZED** |
-| **Anti-claims** | ≠ L3 GLOBAL CLOSED · ≠ EP-S2-08 PASS · ≠ EP-S2-05 PROVEN · ≠ G-REAL · ≠ L4 · ≠ runtime v3 ADOPTED · ≠ REAL PROVEN · digest MATCH ≠ semantic exhaustiveness · Product ON MAIN ≠ this documentary candidate published |
+| **R24 C14-NAP-01 / R24-NAP-CR-01 — HISTORICAL AUTHORING SNAPSHOT (2026-10-30)** | **As-of C14-NAP-01 local authoring (before semantic review and documentary Git Integration):** documentary candidate was local on branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` (volumes 03/06/08/09 + Roadmap + this README); digest regularization was pending (no `--write-digests` in that cycle); documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim for this README. Subsequent documentary integration / digest / publication status must be resolved from Git, applicable gates and post-merge proofs. R24-NAP-CR-01 corrects temporal currentness only · **NO PRODUCT SEMANTIC IMPACT** |
+| **Anti-claims** | ≠ L3 GLOBAL CLOSED · ≠ EP-S2-08 PASS · ≠ EP-S2-05 PROVEN · ≠ G-REAL · ≠ L4 · ≠ runtime v3 ADOPTED · ≠ REAL PROVEN · digest MATCH ≠ semantic exhaustiveness · Product ON MAIN ≠ automatic documentary publication |

 Canonical Option C gap table: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)** (CURRENT overlay supersedes PRE-INTEGRATION table). Flow/persistence/proof detail: volumes **03 / 06 / 08**.

### PRR08
--- /tmp/r24-nap-cr-01/08-test-proof-and-conformance-map.md.c14	2026-10-30 14:12:57
+++ projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md	2026-10-30 14:14:20
@@ -31,7 +31,7 @@
 | QA-NAP-10 server restart | — | **NOT PROVEN** |
 | OpenAI LIVE structured `presentation` | — | **NOT PROVEN** |

-**PRR conformance note (C14-NAP-01):** this documentary requalification of volumes 03/06/08/09 + README/Roadmap ⇒ digest mismatch vs committed manifest **expected** until distinct digest regularization GO. Digest MATCH ≠ semantic validity. Manifest **not** modified in this cycle.
+**PRR conformance note (C14-NAP-01 / R24-NAP-CR-01):** **As-of C14-NAP-01 local authoring**, the documentary changes to volumes 03/06/08/09 + README/Roadmap introduced expected digest drifts vs the committed manifest; the manifest was **not** refreshed in that cycle. R24-NAP-CR-01 corrects temporal currentness only and still does **not** refresh digests. Later conformance must be determined from the actual manifest/document bytes and the corresponding governed gate. Digest MATCH ≠ semantic correctness. Manifest remains unmodified until a distinct Morris digest regularization GO.

 ## Overlay — PR #618 proof map (CURRENT ON MAIN — MERGED + post-merge CI — 2026-10-26)

### PRR09
--- /tmp/r24-nap-cr-01/09-known-gaps-reserves-and-current-boundaries.md.c14	2026-10-30 14:12:57
+++ projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md	2026-10-30 14:14:20
@@ -16,7 +16,7 @@
 | Status | **CURRENT PRODUCT ON MAIN** · proof **DETERMINISTIC AT TESTED SCOPE** |
 | CI | Pre [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Required Gate **PASS** · Vitest **6183 PASS / 142 SKIP / 0 FAIL** |
 | Evidence refs | QA-NAP-03 `b11ef7c9…` · CORR-NAP-04 `d36fddf1…` · GI-NAP-03 `5c61edfc…` · CORR-NAP-CI-01 |
-| R24 C14-NAP-01 | **LOCAL DOCUMENTARY TRUTH-SYNC CANDIDATE** (Roadmap + PRR README/03/06/08/09) · **≠** docs already ON MAIN · **DOCUMENTARY DIGEST GATE PENDING** · **DOCUMENTARY GIT INTEGRATION NOT AUTHORIZED** |
+| R24 C14-NAP-01 / R24-NAP-CR-01 | **HISTORICAL AUTHORING SNAPSHOT (2026-10-30, before semantic review and documentary Git Integration):** at that dated instant the documentary candidate was local (Roadmap + PRR README/03/06/08/09); digest regularization was pending; documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim. Subsequent documentary status must be resolved from Git, applicable gates and post-merge proofs. R24-NAP-CR-01 = temporal currentness correction only · **≠** Product change |

 | Élément | Statut | Preuve | Limite / exit |
 |---|---|---|---|
@@ -31,7 +31,7 @@
 | I. OpenAI LIVE structured emit | **NOT PROVEN** | — | R-LIVE-EMIT · distinct REAL GO |
 | J. Fake/Real gap | Fake DET ≠ model REAL quality/latency/cost | — | keep ceiling |
 | K. Product Git Integration | **COMPLETED — PR #628 MERGED** | merge `c848b98c…` · two commits preserved | Feature cleanup may remain BLOCKED separately |
-| L. PRR semantic sync (C14) | **LOCAL DOC CANDIDATE** | C14-NAP-01 volumes + Roadmap | Semantic review + digest gate + DOC GI **PENDING** |
+| L. PRR semantic sync (C14 / R24-NAP-CR-01) | **HISTORICAL AUTHORING SNAPSHOT (2026-10-30)** — local candidate at that instant; later lifecycle resolve from Git | C14-NAP-01 volumes + Roadmap (+ R24-NAP-CR-01 temporal fix) | As-of C14 authoring: Semantic Review / digest gate / DOC GI were **not yet consumed**. Do **not** read as eternally PENDING after later gates. Resolve subsequent status from Git + applicable Morris GOs |
 | M. Full Vitest CI | **SUCCESS** on `1c3a8d9e…` and `c848b98c…` | GitHub CI logs | 142 SKIP not claimed as executed |

 **Covered ON MAIN:** Option C DTO + normalize/fail-closed · Studio typed notices · adaptive UI · Memory B columns · Fake QA Auth browser (historical) · CORR-NAP-01…04 DET · Cognitive STOP LR coherence · Vitest cookie-shape without Chromium · CI Required Gate.
@@ -40,11 +40,11 @@

 **Preserved L3-S2 reserves (unchanged by NAP merge):** EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · L3 GLOBAL **OPEN** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · R-MANIFEST-TOPO **OPEN**. **QA-NAP ≠** closure of EP-S2-08 or EP-S2-05.

-**Exit / next:** (1) C14 R24 Semantic Review PASS · (2) distinct manifest digest regularization GO · (3) distinct documentary Git Integration · (4) open Product proofs: STOP browser · server restart · OpenAI LIVE structured emit · EP-S2-08 remaining · EP-S2-05 — each under distinct Morris GO.
+**Exit / next (NEXT QUALIFIED PATH AT AUTHORING — subject to subsequent Morris gates):** (1) C14 R24 Semantic Review · (2) distinct manifest digest regularization GO if needed · (3) distinct documentary Git Integration · (4) open Product proofs (CURRENT gaps): STOP browser · server restart · OpenAI LIVE structured emit · EP-S2-08 remaining · EP-S2-05 — each under distinct Morris GO. Documentary gate consumption after authoring must be resolved from Git; do not assume they remain unconsumed forever.
+
+**Anti-claims:** ≠ REAL PROVEN · ≠ G-REAL · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED · ≠ GLOBAL RESTART SAFE · Product ON MAIN ≠ automatic documentary publication · digest MATCH ≠ semantic validity · authoring-time local-candidate wording ≠ permanent post-publication lifecycle.

-**Anti-claims:** ≠ REAL PROVEN · ≠ G-REAL · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED · ≠ GLOBAL RESTART SAFE · this PRR edit ≠ docs ON MAIN · digest MATCH ≠ semantic validity.
-
-**Gates Morris still open:** Semantic Review of C14-NAP-01 · digest gate · documentary commit/PR/merge · LIVE/REAL/STOP-browser/server-restart proof GOs.
+**Gates Morris (as-of C14-NAP-01 / R24-NAP-CR-01 authoring — resolve later from Git):** documentary Semantic Review · digest gate · documentary commit/PR/merge were **not consumed at that snapshot**; subsequent consumption must be verified from Git and applicable GOs. **Product proof GOs still CURRENT OPEN:** LIVE/REAL · STOP-browser · server-restart · EP-S2-08 remaining · EP-S2-05.

 ## Overlay — AKG-M5 L3-S2 Option B / S8 (CURRENT ON MAIN — PR #623 MERGED — 2026-10-27)

### PRR03 (empty expected)
### PRR06 (empty expected)
```

## 12. Diff cumulé depuis main (six fichiers documentaires)

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 32822a0d..fe967d0e 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **CURRENT TIP 2026-10-28 — AKG-M5 L3-S2 EP-S2-08-PROOF-01 POST-MERGE VERIFIED (PR #625 + PR #626)** | **Morris GO 2026-10-28** · **CYCLE 14/15 — POST-MERGE CAPITALIZATION & TRAJECTORY TRUTH-SYNC** · [PR #625](https://github.com/mcleland147/sfia-workspace/pull/625) **MERGED** `2026-10-28T03:48:03Z` · merge **`3fb84630efb9e0d2acaaf81b342da0358107db10`** · **4 documentary files** (Roadmap · PRR README · PRR 09 · manifest) · living-tip truth-sync after #623/#624 · **NO PRODUCT RUNTIME SEMANTIC IMPACT** · [PR #626](https://github.com/mcleland147/sfia-workspace/pull/626) **MERGED** `2026-10-28T13:44:42Z` · merge **`3064047258e54cfc9a1f24e21d322ad6ae18217d`** · parents **`3fb84630…`** + **`485ec3cb…`** · source `feat/akg-m5-ep-s2-08-proof-01` · **2 commits** preserved (`e78db159…` Product · `485ec3cb…` R24 premerge currentness) · **18 files** (7 Product code · 5 tests · 6 PRR/manifest) · feature branch **preserved** · Pre-merge CI [#40696083699](https://github.com/mcleland147/sfia-workspace/actions/runs/40696083699) **SUCCESS** · Required Gate **PASS** (head `485ec3cb…`) · Post-merge CI [#40699255387](https://github.com/mcleland147/sfia-workspace/actions/runs/40699255387) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** (event=`push` · branch=`main` · HEAD=`30640472…`) · **EP-S2-08-PROOF-01 ON MAIN (DET at tested scope):** Option A Project-only Delivery CKC eligibility · Option 1 Generic PREPARE preserves `repositoryMutationDeclared` · R-INSPECT-01 Pilote inspection disclosure · R-HD-01 integrated HD provenance / `HD_MUTATION_DECLARATION_CONFLICT` · B2/B5/B6 remount / restitution / Nora unavailable · R24 temporal currentness · Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · **Preserved Option B / S8 ON MAIN (PR #623):** Project-first · CycleInstance optional · no invented cycle · SHE · GERM/W3-C · EP-S2-01…04/06/07/09…12 PASS DET · **OPEN EXITS:** EP-S2-08 **PARTIAL** (browser `/studio` remount E2E OPEN · dual F3/W3-C live UX OPEN) · EP-S2-05 **NOT PROVEN** · Late Evidence supersession **OPEN** · mutating Generic Product PASS **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · documentary ON MAIN ≠ new REAL proof · ≠ automatic L4 · Prior CURRENT tip (**PR #623/#624 living tip / Cycle 14 R24 FOLLOW-UP**) = **HISTORICAL AS TIP** under this CURRENT · **HISTORICAL AUTHORING SNAPSHOT AS-OF 2026-10-28:** Roadmap CURRENT tip + PRR 09 post-merge temporal qualification authored locally · manifest digest refresh **GATED** by independent Critical Semantic Review until distinct Morris DOC GI · **NEXT (qualification only):** further L3 Product exit proofs (EP-S2-08 remaining · EP-S2-05 · Late Evidence policy) under **distinct Morris GO** · ≠ Delivery implied by this tip. |
+| **CURRENT TIP 2026-10-30 — AKG-M5 L3-S2 NORA ADAPTIVE PRESENTATION OPTION C — PR #628 MERGED ON MAIN** | **Morris GO 2026-10-30** · **CYCLE 14 — C14-NAP-01 POST-MERGE VERIFICATION + R24 TRUTH-SYNC** · [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · parents **`2cc6368602197e18fe886c87c8ced0a1b434f5a2`** + **`1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a`** · source `feat/akg-m5-nora-adaptive-presentation` · **2 commits** preserved: Delivery **`c6b5ae3a798070760587ac6605e6276458f375f6`** (`feat(studio): add Nora adaptive presentation with QA and PRR sync`) · CI correction **`1c3a8d9e16e69c5553fb0d52d847fdeeb2648a9a`** (`test(studio): keep auth cookie Vitest independent of Chromium`) · **30 files** (23 modified / 7 added / 0 deleted) · Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** · Vitest CI **565** files PASS / **22** SKIP · **6183** tests PASS / **142** SKIP / **0** FAIL · Modeled governance **75 PASS** · Product capability **INTEGRATED ON MAIN**: Nora Adaptive Presentation A3/A4 Option C · nullable `presentation` DTO · fail-closed normalize · typed Studio notices · Memory B `presentation_json` / `studio_control_json` · ConversationSurface adaptive renderer · narrative fallback · Cognitive STOP / CORR-NAP-01…04 · Fake NAP dual-gate · Vitest cookie-shape oracle without Chromium · Proof ceiling: **DETERMINISTIC AT TESTED SCOPE** · **Preserved prior L3-S2 ON MAIN:** Option B / S8 (#623) · EP-S2-08-PROOF-01 DET (#626) · Binding/docs_write retired (#618) · **R24 DOCUMENTARY LAYER — HISTORICAL AUTHORING SNAPSHOT (C14-NAP-01, 2026-10-30, before semantic review and documentary Git Integration):** at that dated authoring instant the documentary candidate was local on branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` (Roadmap + PRR README/03/06/08/09); digest regularization was pending (manifest **not** refreshed in that cycle); documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim. Subsequent documentary integration / digest / publication status must be resolved from Git, applicable gates and post-merge proofs. · **OPEN EXITS / RESERVES (Product — CURRENT):** R-STOP-BROWSER **NOT PROVEN** · R-SRV-RESTART **NOT PROVEN** · R-LIVE-EMIT **NOT PROVEN** · R-MANIFEST-TOPO **OPEN** · EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · digest MATCH ≠ semantic exhaustiveness · Product ON MAIN ≠ automatic documentary publication · Prior CURRENT tip (**2026-10-28 EP-S2-08-PROOF-01 / PR #625 + #626**) = **HISTORICAL AS TIP** under this CURRENT · **NEXT QUALIFIED PATH AT AUTHORING (subject to subsequent Morris gates):** Semantic Review of this R24 candidate → Morris digest regularization GO if needed → distinct DOC Git Integration → then Product continuity proofs (STOP browser · server restart · OpenAI LIVE structured emit · EP-S2-08 remaining · EP-S2-05) under **distinct Morris GO** · ≠ Delivery implied by this tip · ≠ L3 closed · C1/Product Completion link preserved. |
+| **HISTORICAL TIP 2026-10-28 — AKG-M5 L3-S2 EP-S2-08-PROOF-01 POST-MERGE VERIFIED (PR #625 + PR #626)** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-30 — NORA ADAPTIVE PRESENTATION OPTION C / PR #628 MERGED**) — **Morris GO 2026-10-28** · **CYCLE 14/15 — POST-MERGE CAPITALIZATION & TRAJECTORY TRUTH-SYNC** · [PR #625](https://github.com/mcleland147/sfia-workspace/pull/625) **MERGED** `2026-10-28T03:48:03Z` · merge **`3fb84630efb9e0d2acaaf81b342da0358107db10`** · **4 documentary files** (Roadmap · PRR README · PRR 09 · manifest) · living-tip truth-sync after #623/#624 · **NO PRODUCT RUNTIME SEMANTIC IMPACT** · [PR #626](https://github.com/mcleland147/sfia-workspace/pull/626) **MERGED** `2026-10-28T13:44:42Z` · merge **`3064047258e54cfc9a1f24e21d322ad6ae18217d`** · parents **`3fb84630…`** + **`485ec3cb…`** · source `feat/akg-m5-ep-s2-08-proof-01` · **2 commits** preserved (`e78db159…` Product · `485ec3cb…` R24 premerge currentness) · **18 files** (7 Product code · 5 tests · 6 PRR/manifest) · feature branch **preserved** · Pre-merge CI [#40696083699](https://github.com/mcleland147/sfia-workspace/actions/runs/40696083699) **SUCCESS** · Required Gate **PASS** (head `485ec3cb…`) · Post-merge CI [#40699255387](https://github.com/mcleland147/sfia-workspace/actions/runs/40699255387) **SUCCESS** · Detect / Build and validate / **SFIA Studio Required Gate PASS** (event=`push` · branch=`main` · HEAD=`30640472…`) · **EP-S2-08-PROOF-01 ON MAIN (DET at tested scope):** Option A Project-only Delivery CKC eligibility · Option 1 Generic PREPARE preserves `repositoryMutationDeclared` · R-INSPECT-01 Pilote inspection disclosure · R-HD-01 integrated HD provenance / `HD_MUTATION_DECLARATION_CONFLICT` · B2/B5/B6 remount / restitution / Nora unavailable · R24 temporal currentness · Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · **Preserved Option B / S8 ON MAIN (PR #623):** Project-first · CycleInstance optional · no invented cycle · SHE · GERM/W3-C · EP-S2-01…04/06/07/09…12 PASS DET · **OPEN EXITS:** EP-S2-08 **PARTIAL** (browser `/studio` remount E2E OPEN · dual F3/W3-C live UX OPEN) · EP-S2-05 **NOT PROVEN** · Late Evidence supersession **OPEN** · mutating Generic Product PASS **NOT PROVEN** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · **ANTI-CLAIMS:** REAL **NOT PROVEN** · G-REAL **NOT GRANTED** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · merge ≠ Product Completion · documentary ON MAIN ≠ new REAL proof · ≠ automatic L4 · Prior CURRENT tip (**PR #623/#624 living tip / Cycle 14 R24 FOLLOW-UP**) = **HISTORICAL AS TIP** under the then-CURRENT · **HISTORICAL AUTHORING SNAPSHOT AS-OF 2026-10-28:** Roadmap CURRENT tip + PRR 09 post-merge temporal qualification authored locally · manifest digest refresh **GATED** by independent Critical Semantic Review until distinct Morris DOC GI · Product facts remain ON MAIN; tip status only is historical under 2026-10-30 CURRENT. |
 | **HISTORICAL TIP 2026-10-28 — AKG-M5 L3-S2 OPTION B — PRODUCT MERGED ON MAIN (PR #623) / R24 DOCUMENTARY MERGED ON MAIN (PR #624) / LIVING TIP TRUTH-SYNC** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-28 — EP-S2-08-PROOF-01 POST-MERGE VERIFIED / PR #625 + PR #626**) — **Morris GO 2026-10-28** · **CYCLE 14 — R24 FOLLOW-UP LIVING TIP TRUTH-SYNC** · [PR #623](https://github.com/mcleland147/sfia-workspace/pull/623) **MERGED** `2026-10-27T15:02:16Z` · merge **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** · parents **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** + **`73f0166c6a71c301a7b2a9c2471beb30ad068221`** · source branch `feat/akg-m5-l3-s2-generic-proof-continuity` · 4 commits preserved (`0577ca5c` · `90bbf479` · `f7c9ba78` CORR-CI-623-01 · `73f0166c` CORR-CI-623-02) · **23 files** · [post-merge CI #40526990871](https://github.com/mcleland147/sfia-workspace/actions/runs/40526990871) **SUCCESS** · **Required Gate PASS** · Construction **Option B / S8 Project-first** **CURRENT ON MAIN**: Project obligatoire · CycleInstance facultatif (D-ER-17) · aucun cycle fictif · Evidence `generic_materialization` · FS OBSERVED / digest-from-bytes DET · W3-B ABSENT/ADMISSIBLE/REJECTED · ReviewBundle / ClaimEvaluation · W3-C / GERM / Nora Tool-First (CI-623-01/02 closed DET) · SHE preserved · Preuve **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · EP-S2-01…04 **PASS DET** · EP-S2-05 **NOT PROVEN** · EP-S2-06/07 **PASS DET** · EP-S2-08 **PARTIAL** · EP-S2-09…12 **PASS at tested scope** · **L3 GLOBAL OPEN / NOT COMPLETE** · exclusive **DEFAULT OFF** · G-REAL **NOT GRANTED** · REAL **NOT PROVEN** · runtime v3 **NON ADOPTED** · mutating Generic Product PASS **NOT PROVEN** · late Evidence supersession policy **OPEN** (fail-closed `IDEMPOTENCY_CONFLICT`) · Prior tip **LOCAL CANDIDATE / dirty / PROJECT GIT INTEGRATION NOT AUTHORIZED** = **HISTORICAL AS TIP** (true pre-merge) · Prior L3-S1 oracle tip remains historically true and is **HISTORICAL AS TIP** under this CURRENT · **THIS TIP'S DOCUMENTARY LAYER (updated R24 FOLLOW-UP LIVING TIP TRUTH-SYNC 2026-10-28):** Product facts above remain **CURRENT IMPLEMENTED** · R24 documentary Truth-Sync is **CURRENT ON MAIN** via [PR #624](https://github.com/mcleland147/sfia-workspace/pull/624) **MERGED** `2026-10-28T01:51:07Z` · merge **`1fea1e61df02a90cd42edfd7b987ad7982a8fd63`** · parents **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** + **`603b43e2927ab420be172f6bd26d40ad676cae1a`** · documentary commit **`603b43e2927ab420be172f6bd26d40ad676cae1a`** · source branch `docs/akg-m5-l3-s2-postmerge-r24-current` · **10 documentary files** ON MAIN · [post-merge CI #40617482621](https://github.com/mcleland147/sfia-workspace/actions/runs/40617482621) **SUCCESS** · PRR CONFORMANCE **PASS** (Vitest 5/5 at merge) · **NO PRODUCT SEMANTIC IMPACT** · Preuves Product / EP-S2-05 **NOT PROVEN** / EP-S2-08 **PARTIAL** / L3 GLOBAL **OPEN** / REAL **NOT PROVEN** / G-REAL **NOT GRANTED** / runtime v3 **NON ADOPTED** / late Evidence supersession **OPEN** remain **INCHANGÉES** · Prior tip documentary layer **PRE-INTEGRATION SNAPSHOT (as-of 2026-10-27, before documentary Git Integration)** = **HISTORICAL AS TIP / CONSUMED** (true for that dated local candidate; **≠** erasure) · **CONSUMED GATE SNAPSHOTS (dated):** Eight-Digest Manifest Gate **PASS LOCAL** 2026-10-27 (handoff tip `e0c9f298…`) · R24-CR-01 currentness correction **DELIVERED** 2026-10-27 on Roadmap + PRR README + PRR 09 (handoff `f8e16328…`) · Critical Delta Semantic Review **PASS** · Two-Digest Manifest Gate **PASS LOCAL** 2026-10-27 for the then-reviewed README digest `d6b3f0732e9cbd5a` + PRR 09 digest `ce0e37604698e0c5` (handoff tip `daf6ed0b…` / blob `14a12e41…`) — that result is **octet-scoped**, not a permanent claim on later bytes · Final Documentary Delta Readiness **RESERVED** 2026-10-27 (handoff `db51d58d…` / blob `a344626c…`) on residual ACTIVE currentness · R24-CR-02 durable temporal classification **DELIVERED** 2026-10-27 · Final Documentary Delta Readiness **PASS LOCAL** → DOC GI Draft PR #624 → undraft/merge **CONSUMED** 2026-10-28 · **THIS CYCLE (local until distinct Morris DOC GI):** living CURRENT TIP truth-sync post-merge #624 on Roadmap (+ PRR README/09 anti-claim currentness if required) · **CONDITIONAL FUTURE REQUIREMENTS (durable):** any subsequent README/09 byte change requires applicable Critical Semantic Review and Morris-authorized digest refresh before claiming local PRR conformance · digest mismatch ⇒ REFERENCE REVIEW REQUIRED · documentary commit/push/Draft PR and documentary merge each require a **distinct Morris GO** · post-merge documentary truth-sync and EP requalification remain governed · living currentness follows Git/preuves and future governed Roadmap updates · **≠** automatic L4 · **≠** L3 GLOBAL CLOSED · **≠** REAL / G-REAL · **≠** runtime v3 ADOPTED · **≠** EP-S2-05 PROVEN · **≠** EP-S2-08 PASS · documentary ON MAIN ≠ new Product proof · living tip sync ≠ Product Delivery. |
 | **HISTORICAL TIP 2026-10-26 — AKG-M5 L3-S1 ORACLE INTEGRATED ON MAIN (PR #621 MERGED / POST-MERGE CI SUCCESS)** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-27 — AKG-M5 L3-S2 OPTION B MERGED ON MAIN / PR #623**) — **Morris 2026-10-26** · **AKG-M5-TC-2026-10-26 T-C ADOPTED** · **AKG-M5-L3S1-2026-10-26 L3-S1 ADOPTED** · **D-P6-SHE-01** SHE · Decision Pack [`05-…requalification.md`](./architectural-knowledge-governance/m5-product-transformation/05-m5-target-journey-and-trajectory-requalification.md) **INTEGRATED ON MAIN** via [PR #620](https://github.com/mcleland147/sfia-workspace/pull/620) (**MERGED** `2026-10-26T15:25:24Z` · merge `b20733c799aa4abef16a283dc2069fd61325367e`) · [PR #621](https://github.com/mcleland147/sfia-workspace/pull/621) **MERGED** `2026-10-26T18:50:21Z` · merge **`592226cd53b70035c1b5f1f0454f76e52abab7e3`** · parents **`b20733c799aa4abef16a283dc2069fd61325367e`** + **`de1fa7aefa0cc08c0afb6e2fbc307287f305427d`** · source commit `test(studio): cover AKG-M5 L3-S1 generic DET integration` · oracle `akgM5L3S1.genericExecutionIntegrated.d0.test.ts` **INTEGRATED ON MAIN** (blob `2c97b91a…` · sha256 `6372ddf8…`) · [post-merge CI #40381306724](https://github.com/mcleland147/sfia-workspace/actions/runs/40381306724) **COMPLETED / SUCCESS** (Detect · Build and validate · **Required Gate** · event=`push` · branch=`main` · HEAD=merge) · Product runtime **UNCHANGED** by #621 · **NO PRODUCT SEMANTIC IMPACT** · EP01–EP09 **PASS** DET tested scope · EP10 **NON-CLAIM** · technical Evidence + frozen RB + ClaimEvaluation `not_proven` + Product **UNCLAIMED** · Technical SUCCESS **≠** Product PROVEN · L1 **DONE** · L2 **PARTIAL** · exclusive **DEFAULT OFF** · L3-S1 delivery **INTEGRATED** · **L3 GLOBAL OPEN / NOT COMPLETE** · **HISTORICAL SNAPSHOT 2026-10-26 (as-of tip date):** L3-S2 was then **NOT STARTED** / **NO DELIVERY GO** / prospective « NEXT CANDIDATE QUALIFICATION » / Delivery then **NOT AUTHORIZED** — true for that dated tip; **do not read as active trajectory instructions after 2026-10-27** · **HISTORICAL TRAJECTORY NOTE (as tip date / pre #623 merge):** L3-S2 Option B was then **LOCAL CANDIDATE** · **≠ L3-S2 CURRENT ON MAIN** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ READY TO MERGE** — superseded by PR #623 MERGED · L4–L6 **NOT STARTED** / **NOT AUTHORIZED by this tip** · H4/Q12/R-CUT/G-ACTIVATION **OPEN** · G-REAL/REAL **NOT GRANTED / NOT PROVEN** · runtime v3 **NON ADOPTED** · **AKG-M5 GLOBAL OPEN** · remaining functional gaps (Mission Project-only EP-S2-05 · Nora/Pilote UX EP-S2-08 PARTIAL · late Evidence recovery · FS→Git→Review REAL) tracked under LOCAL tip / PRR 09 · **HISTORICAL NEXT (as tip date):** R24-SR / Manifest / Project Git Integration path then pending — superseded after PR #623 MERGED + Cycle 14 R24 CURRENT local authoring · **≠** automatic L4 start. |
 | **HISTORICAL TIP 2026-10-27 — AKG-M5 L3-S2 OPTION B — R24 DOCUMENTARY TRUTH-SYNC + PR READINESS PREPARATION (PRE-MERGE LOCAL CANDIDATE)** | **HISTORICAL AS TIP** (superseded as CURRENT by **CURRENT TIP 2026-10-27 — PR #623 MERGED**) — accurate for pre-merge dirty LOCAL CANDIDATE / Git Integration NOT AUTHORIZED snapshot · **Morris GO 2026-10-27** · **R24 DOCUMENTARY TRUTH-SYNC AND GIT/PR READINESS PREPARATION** · Branch `feat/akg-m5-l3-s2-generic-proof-continuity` · Product HEAD **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** (= `origin/main`) · **DIRTY LOCAL CANDIDATE** (Product + tests uncommitted) · Construction **Option B** (S8 Project-first: Project obligatoire · CycleInstance facultatif · aucun cycle fictif · même moteur Generic Execution) · Delivery S8 + CORR-S2-01/02/03 + R-S2-04/05 + R-S8-01/02/03/04 **ACCEPTED LOCAL DET** (Critical Reviews) · Preuve **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE** · Handoff Pass 05 tip **`91a1dbaa4fe8143325658e08d10c9e8f49c8c72c`** / blob **`c5ccaee49b3088a52b5d321912e0d0c2cb344c6f`** · EP-S2-01…04 **PASS DET** · EP-S2-05 **NOT PROVEN** (Project-only Mission semantic) · EP-S2-06/07 **PASS DET** · EP-S2-08 **PARTIAL** · EP-S2-09…12 **PASS at tested scope** · **R24 LOCAL DOCUMENTARY CANDIDATE** (this tip) · **MANIFEST DIGEST REFRESH PENDING** (no digest write before semantic review) · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · commit/push/PR/merge projet **INTERDITS** this cycle · **L3 GLOBAL OPEN** · exclusive **DEFAULT OFF** · **G-REAL NOT GRANTED** · REAL **NOT PROVEN** · runtime v3 **NON ADOPTED** · mutating Generic Product PASS **NOT PROVEN** · Nora/Pilote UX E2E **NOT PROVEN** · Debt: late Evidence after frozen RB (IDEMPOTENCY_CONFLICT fail-closed; no supersession same key) · **R24 Critical Semantic Review:** PASS WITH RESERVES R24-SR-01/02 (this correction cycle) · **ACTIVE NEXT:** R24-SR-01/02 targeted documentary closure → ChatGPT Critical Semantic Re-Review → PRR Manifest Digest Gate → Project Git/PR Readiness finale → Morris Project Git Integration GO (distinct; commit/push/PR **not** implied) · then requalify EP-S2-05 / EP-S2-08 under their **distinct** exit criteria (≠ automatic L4) · **≠** L3-S2 CURRENT ON MAIN · **≠** L3 GLOBAL CLOSED · **≠** READY TO MERGE · **≠** L4 AUTHORIZED. |
diff --git a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
index b02f4900..2261507d 100644
--- a/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
+++ b/projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
@@ -23,7 +23,7 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **Reads:** Product DB Truth C + Nora session continuity action
 - **Paths:** `projectAssistantConversationContinuityAction` in `actions.ts`
 - **Status:** PARTIAL — transcript availability depends on session DB path colocation
-- **Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION):** continuity rehydrate may restore assistant `presentation_json` / `studio_control_json` when present (see dedicated overlay after F04). **≠ CURRENT ON MAIN** · **≠** server restart proven.
+- **Overlay — Nora Adaptive Presentation Option C (CURRENT ON MAIN — PR #628):** continuity rehydrate may restore assistant `presentation_json` / `studio_control_json` when present (see dedicated overlay after F04). **≠** server process restart proven.

 ## F03 — Cycle qualification / activation
 - **Trigger (legacy / Studio):** F2 qualification / Pilot lifecycle start controls
@@ -48,13 +48,15 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 - **First Framing continuity (presentation):** conversation surface may project a Framing Continuity Card from server-owned snapshot (`projectAssistantReadFramingContinuityAction`) — examinable trajectory facts before HD; « Ouvrir » ≠ composer auto-send; recommendation details stay Recommendation≠Decision (P2-D-01; no presumed operational materiality)
 - **Status:** PARTIAL REAL linguistic; COMPLETE deterministic Fake scripts; Framing continuity UI DETERMINISTIC at tested scope; REC-01 WR path DETERMINISTIC at tested scope (ZERO REAL claim)
 - **Proof at tested scope:** `productChatFirstGovernedDecisionLoop.frontDoor.d0.test.ts` case A; `framingContinuityCard.ui.test.tsx`, `framingContinuityRehydrate.ui.test.tsx`, `p6.ux.recommendationContinuity.ui.test.tsx`; REC-01 — `qualifyProspectiveWorkRecommendationMaterialization.d0`, `activeCycleCognitiveWork.d0` (Option A reload + historical replay), `p6.hqa.rec01.minimalStabilization.d0`, Option B context tests
-- **Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION):** when a coherent Product turn carries a validated `presentation` DTO, ConversationSurface may render `NoraAdaptivePresentationView` instead of plain prose (coverage + Studio notices). See dedicated overlay below. **≠ CURRENT ON MAIN** · OpenAI LIVE structured emit **NOT PROVEN**.
+- **Overlay — Nora Adaptive Presentation Option C (CURRENT ON MAIN — PR #628):** when a coherent Product turn carries a validated `presentation` DTO, ConversationSurface may render `NoraAdaptivePresentationView` instead of plain prose (coverage + Studio notices). See dedicated overlay below. OpenAI LIVE structured emit **NOT PROVEN**.

-## Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+## Overlay — Nora Adaptive Presentation Option C (CURRENT ON MAIN — PR #628 MERGED — 2026-10-30)

-> **Epistemic class:** **LOCAL CANDIDATE — PRE-INTEGRATION** · source worktree `feat/akg-m5-nora-adaptive-presentation` · Git base / HEAD alignment `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) · **Delivery Product bytes UNCOMMITTED** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN** · **≠** L3 GLOBAL CLOSED · **≠** runtime v3 ADOPTED · **≠** OpenAI LIVE / Cursor REAL.
+> **Epistemic class:** **CURRENT PRODUCT ON MAIN** via [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · parents **`2cc63686…`** + **`1c3a8d9e…`** · Delivery **`c6b5ae3a…`** · CI correction **`1c3a8d9e…`** · Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Required Gate **PASS** · Proof: **DETERMINISTIC AT TESTED SCOPE** · **≠** L3 GLOBAL CLOSED · **≠** runtime v3 ADOPTED · **≠** OpenAI LIVE / Cursor REAL.
 >
-> **Evidence refs (Git handoffs):** QA-NAP-03 `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f…` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` / blob `b1972a63…` · prior CORR-NAP-01…03 / QA-NAP-01…02 as supporting chronology only.
+> **HISTORICAL AS OF authoring (2026-10-30 pre-merge):** prior overlay « LOCAL CANDIDATE — PRE-INTEGRATION / UNCOMMITTED / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN » — true before merge; preserve; superseded for Product lifecycle by this block.
+>
+> **Evidence refs (Git handoffs):** QA-NAP-03 `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f…` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` / blob `b1972a63…` · GI-NAP-03 `5c61edfc…` · prior CORR-NAP-01…03 / QA-NAP-01…02 as supporting chronology only.

 ### Flow — Pilot message → adaptive UI (F04 extension; F02 rehydrate)

@@ -68,27 +70,27 @@ Status legend: COMPLETE | PARTIAL | NOT PROVEN | BREAK
 8. **Fallback:** absent/invalid DTO → plain content; forged `[Studio]` in Nora prose is **not** Studio provenance (CORR-NAP-02 typed notices only).
 9. **Reload:** `page.reload()` rehydrates transcript + DTO when columns present (QA-NAP-03 DET browser Fake). **Server process restart NOT PROVEN.**

-### Guardrails (as-implemented local)
+### Guardrails (as-implemented ON MAIN)

 | Rule | Status |
 |---|---|
-| presentation ≠ Truth C / OA object | DOCUMENTED local |
+| presentation ≠ Truth C / OA object | DOCUMENTED + DET |
 | recommendation block ≠ HumanDecision | DOCUMENTED + DET UI |
 | evidence_reserves ≠ validated Product Evidence | DOCUMENTED + DET UI |
-| no free Product CTA from adaptive blocks | DET browser QA-NAP-03 |
+| no free Product CTA from adaptive blocks | DET browser QA-NAP-03 (historical Fake) |
 | server Studio notices > forged Nora `[Studio]` | DET unit/UI CORR-NAP-02/03 |
 | Cognitive STOP outranks optimistic LR | DET CORR-NAP-04 |
 | F2 does not auto-gain Nora-generated adaptive DTO as authority | DOCUMENTED — projection only |

 ### Proof ceiling / anti-claims

-- **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** (Better Auth Playwright + Fake NAP QA markers gated `SFIA_STUDIO_E2E_QA_CONTROL=1`) — A4 **STRUCTURAL ALIGNMENT** at reported QA scope · **≠ PIXEL PERFECT** · **≠** shell↔Figma pixel score.
-- **DETERMINISTIC VERIFIED** unit/UI/Fake/coherence suites at tested paths.
+- **PRODUCT OPTION C INTEGRATED ON MAIN** · **DETERMINISTIC AT TESTED SCOPE** (CI Vitest + unit/UI).
+- **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** (Better Auth Playwright + Fake NAP QA markers gated `SFIA_STUDIO_E2E_QA_CONTROL=1`) — A4 **STRUCTURAL ALIGNMENT** at reported QA scope · **≠ PIXEL PERFECT** · **≠** shell↔Figma pixel score · E2E path **not** re-run as Required Gate job.
 - OpenAI LIVE structured `presentation` emit **NOT PROVEN**.
 - QA-NAP-06 STOP browser / QA-NAP-10 server restart **NOT PROVEN**.
 - Does **not** rewrite CURRENT ON MAIN F04 semantics for Binding/docs_write/Generic PREPARE.

-**Paths (local WIP):** `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`, `lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`, `lib/nora-cognitive-runtime/cycleJournalStore.ts`, `lib/nora-cognitive-runtime/productSqliteSession.ts`, `features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`, `features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`, `features/project-assistant/orchestrateTurn.ts`, `features/project-assistant/actions.ts`, `features/pre-m6-product-ui/hooks/useProductConversation.ts`, `lib/platform/ai/fakeProvider.ts` (QA-only markers), `e2e/studio-nora-adaptive-qa-nap01.spec.ts` (all relative to `app/`).
+**Paths (ON MAIN via #628):** `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`, `lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`, `lib/nora-cognitive-runtime/cycleJournalStore.ts`, `lib/nora-cognitive-runtime/productSqliteSession.ts`, `features/pre-m6-product-ui/surfaces/NoraAdaptivePresentationView.tsx`, `features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`, `features/project-assistant/orchestrateTurn.ts`, `features/project-assistant/actions.ts`, `features/pre-m6-product-ui/hooks/useProductConversation.ts`, `lib/platform/ai/fakeProvider.ts` (QA-only markers), `e2e/studio-nora-adaptive-qa-nap01.spec.ts` (all relative to `app/`).

 ## F05 — Active-cycle Artifact materialization
 - **Trigger:** Natural Pilot request to materialize the active-cycle deliverable (conversation front door / `projectAssistantSendAction`) — pathless OK when semantic cues suffice
diff --git a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
index c42e9632..0458fde0 100644
--- a/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
+++ b/projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
@@ -29,11 +29,13 @@

 `session_items`, `logical_product_turns`, `logical_product_turn_retry_bindings`, `pilot_transcript_turns`, `cycle_journal_entries`, `cycle_journal_mutation_ledger`

-## Overlay — Nora Adaptive Presentation Option C (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+## Overlay — Nora Adaptive Presentation Option C (CURRENT ON MAIN — PR #628 MERGED — 2026-10-30)

-> **Epistemic class:** **LOCAL CANDIDATE — PRE-INTEGRATION** · worktree `feat/akg-m5-nora-adaptive-presentation` · Git base / HEAD alignment `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) · Product Delivery **UNCOMMITTED** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** · **≠ CURRENT ON MAIN** · **≠** GLOBAL RESTART SAFE · **≠** LIVE SESSION RECOVERY PROVEN · **≠** FULL C1 LONG-HORIZON MEMORY · **≠** OpenAI LIVE structured emit.
+> **Epistemic class:** **CURRENT PRODUCT ON MAIN** via [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · Delivery **`c6b5ae3a…`** · CI correction **`1c3a8d9e…`** · Pre/post-merge CI **SUCCESS** · **≠** GLOBAL RESTART SAFE · **≠** LIVE SESSION RECOVERY PROVEN · **≠** FULL C1 LONG-HORIZON MEMORY · **≠** OpenAI LIVE structured emit.
 >
-> **Evidence refs:** QA-NAP-03 handoff `b11ef7c95d89327c5a4ea164de21a30b40b334b1` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` · unit `noraAdaptivePresentation.d0.test.ts` (incl. CORR-NAP-01 P2 legacy migrate) · UI continuity suites · E2E `studio-nora-adaptive-qa-nap01.spec.ts`.
+> **HISTORICAL AS OF authoring (pre-merge):** prior overlay « LOCAL CANDIDATE — PRE-INTEGRATION / UNCOMMITTED / PROJECT GIT INTEGRATION NOT AUTHORIZED » — true before merge; preserve; superseded for Product lifecycle by this block.
+>
+> **Evidence refs:** QA-NAP-03 handoff `b11ef7c95d89327c5a4ea164de21a30b40b334b1` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` · unit `noraAdaptivePresentation.d0.test.ts` (incl. CORR-NAP-01 P2 legacy migrate) · UI continuity suites · E2E `studio-nora-adaptive-qa-nap01.spec.ts` · post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551).

 ### Columns on `pilot_transcript_turns` (Memory B only)

@@ -42,11 +44,11 @@
 | `presentation_json` | TEXT NULL | Serialized validated Option C presentation DTO (UI projection); absent/null → plain `content` fallback |
 | `studio_control_json` | TEXT NULL | Serialized Studio-owned typed notices (server authority); forged Nora prose `[Studio]` ≠ this column |

-**Migration (local WIP):** idempotent `ALTER TABLE pilot_transcript_turns ADD COLUMN …` in `productSqliteSession.ts` when columns missing. Historical rows without columns → NULL → plain narrative. **No** new table · **no** second SoT · **≠** Truth C / OA.
+**Migration (ON MAIN via #628):** idempotent `ALTER TABLE pilot_transcript_turns ADD COLUMN …` in `productSqliteSession.ts` when columns missing. Historical rows without columns → NULL → plain narrative. **No** new table · **no** second SoT · **≠** Truth C / OA.

 ### Write / read / fallback

-| Path | Behavior (local) |
+| Path | Behavior (ON MAIN) |
 |---|---|
 | Write | After Product turn normalize: persist validated `presentation` + Studio notices via `appendPilotTranscriptTurn` INSERT on the assistant transcript row; retry-safe `logicalTurnId` lookup returns an existing row instead of creating a duplicate (**no** transcript UPDATE on that path) |
 | Read | Continuity / transcript load → `presentationJson` / `studioControlJson` → hook → ConversationSurface |
diff --git a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
index 77bbe71c..6a5cd93f 100644
--- a/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
+++ b/projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
@@ -9,25 +9,29 @@
 - E2E: Playwright `app/e2e/**` (often harness/boundary routes)
 - Conformance (this macro): `app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

-## Overlay — Nora Adaptive Presentation Option C proof index (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+## Overlay — Nora Adaptive Presentation Option C proof index (CURRENT ON MAIN — PR #628 — 2026-10-30)

-> **Impact check R24-NAP-01:** **YES — documentary index only.** New NAP/Fake/Auth oracles, browser QA, and CORR-NAP-04 introduce proof rows that must stay traceable. **No** new CURRENT ON MAIN claim · Product suites remain **UNCOMMITTED WIP** · **≠** REAL · **≠** L3 closed.
+> **Impact check C14-NAP-01:** **YES — documentary index requalification.** Product suites + CI correction are **INTEGRATED ON MAIN** via [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628). Proof ceiling: **DETERMINISTIC AT TESTED SCOPE**. **≠** REAL · **≠** L3 closed.
 >
-> Evidence handoffs: QA-NAP-03 `b11ef7c9…` · CORR-NAP-04 `d36fddf1…`.
+> **HISTORICAL AS OF authoring:** prior index « LOCAL CANDIDATE — PRE-INTEGRATION / UNCOMMITTED WIP » — true before merge; preserve; superseded for Product lifecycle by this block.
+>
+> Evidence: Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) · Vitest **6183 PASS / 142 SKIP / 0 FAIL** · Modeled governance **75 PASS** · QA-NAP-03 `b11ef7c9…` · CORR-NAP-04 `d36fddf1…` · CORR-NAP-CI-01 Vitest/Chromium boundary fix on `1c3a8d9e…`.

 | Suite / artifact | What it proves | Class |
 |---|---|---|
-| `noraAdaptivePresentation.d0.test.ts` | DTO parse/normalize fail-closed; block limits; legacy `presentation_json` migrate idempotent (CORR-NAP-01 P2); Memory B write/read | **DETERMINISTIC VERIFIED** · local WIP |
-| `noraAdaptivePresentation.ui.test.tsx` | Adaptive compose / fallback / Studio notices / incomplete banner trust / continuity restore | **DETERMINISTIC VERIFIED** · jsdom · local WIP |
-| `preCycleRoutingBoundary` / coherence suites (CORR-NAP-04) | Cognitive STOP → local LR neutralization **returned** (no silent LR revive drop) | **DETERMINISTIC VERIFIED** · local WIP |
+| `noraAdaptivePresentation.d0.test.ts` | DTO parse/normalize fail-closed; block limits; legacy `presentation_json` migrate idempotent (CORR-NAP-01 P2); Memory B write/read | **DETERMINISTIC VERIFIED** · ON MAIN |
+| `noraAdaptivePresentation.ui.test.tsx` | Adaptive compose / fallback / Studio notices / incomplete banner trust / continuity restore | **DETERMINISTIC VERIFIED** · jsdom · ON MAIN |
+| `preCycleRoutingBoundary` / coherence suites (CORR-NAP-04) | Cognitive STOP → local LR neutralization **returned** (no silent LR revive drop) | **DETERMINISTIC VERIFIED** · ON MAIN |
+| `authenticatedStudioSession.d0.test.ts` | Cookie header → url-only Playwright cookie **shape** (no Chromium launch) | **DETERMINISTIC COOKIE SHAPE VERIFIED** · ON MAIN · ≠ BrowserContext acceptance |
 | `fakeProvider` NAP QA markers (`__NAP_QA_*__`) | Deterministic Fake structured presentation emit — gated QA control | **DET Fake** · ≠ OpenAI LIVE |
-| `e2e/studio-nora-adaptive-qa-nap01.spec.ts` | Authenticated Better Auth Playwright + Fake NAP browser runtime; reload continuity; no free CTA | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** · local WIP |
+| `e2e/studio-nora-adaptive-qa-nap01.spec.ts` | Authenticated Better Auth Playwright + Fake NAP browser runtime; reload continuity; no free CTA | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** · historical E2E · code ON MAIN · **not** Required Gate job |
 | Captures `.tmp-sfia-review/runtime-captures/nora-adaptive/` | Structural A4 screenshots at reported QA scope | **STRUCTURAL ALIGNMENT** · ≠ PIXEL PERFECT |
+| Full Vitest GitHub CI (pre + post merge) | Suite green on `1c3a8d9e…` and `c848b98c…` | **CI DETERMINISTIC SUITE PASS** · 142 SKIP unchanged |
 | QA-NAP-06 STOP browser | — | **NOT PROVEN** |
 | QA-NAP-10 server restart | — | **NOT PROVEN** |
 | OpenAI LIVE structured `presentation` | — | **NOT PROVEN** |

-**PRR conformance note:** documentary volumes 03/06/08/09 touched under R24-NAP-01 ⇒ digest mismatch vs committed manifest **expected** until distinct digest regularization GO. Digest MATCH ≠ semantic validity.
+**PRR conformance note (C14-NAP-01 / R24-NAP-CR-01):** **As-of C14-NAP-01 local authoring**, the documentary changes to volumes 03/06/08/09 + README/Roadmap introduced expected digest drifts vs the committed manifest; the manifest was **not** refreshed in that cycle. R24-NAP-CR-01 corrects temporal currentness only and still does **not** refresh digests. Later conformance must be determined from the actual manifest/document bytes and the corresponding governed gate. Digest MATCH ≠ semantic correctness. Manifest remains unmodified until a distinct Morris digest regularization GO.

 ## Overlay — PR #618 proof map (CURRENT ON MAIN — MERGED + post-merge CI — 2026-10-26)

diff --git a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
index e5ba8d0a..eb8869e8 100644
--- a/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
+++ b/projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
@@ -5,42 +5,46 @@
 - Runtime v3 **NON ADOPTED**
 - This corpus does not change product behavior by itself (Living Reference is descriptive)

-## Overlay — Nora Adaptive Presentation Option C / AKG-M5 L3-S2 (LOCAL CANDIDATE — PRE-INTEGRATION — 2026-10-30)
+## Overlay — Nora Adaptive Presentation Option C / AKG-M5 L3-S2 (CURRENT ON MAIN — PR #628 — 2026-10-30)

 | Field | Value |
 |---|---|
 | Capability | Nora Adaptive Presentation A3/A4 — Option C |
-| Authoring date | 2026-10-30 |
-| Git base / HEAD alignment | `2cc6368602197e18fe886c87c8ced0a1b434f5a2` (= `origin/main` tip at authoring) |
-| Branch / worktree | `feat/akg-m5-nora-adaptive-presentation` |
-| Status | **LOCAL CANDIDATE — PRE-INTEGRATION** · Product Delivery **UNCOMMITTED** · **≠ CURRENT ON MAIN** · **PROJECT GIT INTEGRATION NOT AUTHORIZED** |
-| Evidence refs | QA-NAP-03 `b11ef7c95d89327c5a4ea164de21a30b40b334b1` / blob `006daf8f…` · CORR-NAP-04 `d36fddf12eae51b6f0900b9c2b510749a13dfe6b` / blob `b1972a63…` · CORR-NAP-01…03 / QA-NAP-01…02 supporting · local unit/UI/E2E WIP |
-| PRR sync cycle | R24-NAP-01 (this overlay) — **DOCUMENTARY DIGEST GATE PENDING** (manifest `--write-digests` **NOT** authorized here) |
+| Qualification date | 2026-10-30 (C14-NAP-01) |
+| Merge | **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` |
+| Commits | Delivery **`c6b5ae3a…`** · CI correction **`1c3a8d9e…`** (both ancestors of main) |
+| Status | **CURRENT PRODUCT ON MAIN** · proof **DETERMINISTIC AT TESTED SCOPE** |
+| CI | Pre [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Required Gate **PASS** · Vitest **6183 PASS / 142 SKIP / 0 FAIL** |
+| Evidence refs | QA-NAP-03 `b11ef7c9…` · CORR-NAP-04 `d36fddf1…` · GI-NAP-03 `5c61edfc…` · CORR-NAP-CI-01 |
+| R24 C14-NAP-01 / R24-NAP-CR-01 | **HISTORICAL AUTHORING SNAPSHOT (2026-10-30, before semantic review and documentary Git Integration):** at that dated instant the documentary candidate was local (Roadmap + PRR README/03/06/08/09); digest regularization was pending; documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim. Subsequent documentary status must be resolved from Git, applicable gates and post-merge proofs. R24-NAP-CR-01 = temporal currentness correction only · **≠** Product change |

 | Élément | Statut | Preuve | Limite / exit |
 |---|---|---|---|
-| A. Option C Delivery | **LOCAL IMPLEMENTED** (WIP) | Code paths + DET suites local | **≠** ON MAIN · distinct Morris GI GO |
-| B. CORR-NAP-01/02/03 | **DETERMINISTIC VERIFIED** at tested scope | Unit/UI CORR suites | Scope-bounded · ≠ LIVE |
-| C. CORR-NAP-04 Product Turn Coherence (LR return after STOP) | **DETERMINISTIC VERIFIED** | CORR-NAP-04 handoff + `applyPreCycleRoutingBoundaryCoherence` T1/T5/T9 | ≠ browser STOP QA |
-| D. QA navigateur Fake/Auth | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** | QA-NAP-03 + `studio-nora-adaptive-qa-nap01.spec.ts` + captures | Better Auth Playwright · Fake NAP markers · gate `SFIA_STUDIO_E2E_QA_CONTROL` |
-| E. A4 structural | **STRUCTURAL ALIGNMENT** at QA scope | Captures / E2E assertions | **≠ PIXEL PERFECT** · ≠ shell↔Figma score |
-| F. Browser reload | **DETERMINISTIC VERIFIED** at reported scope | QA-NAP-03 `page.reload()` | Fake only |
-| G. Server restart | **NOT PROVEN** | — | QA-NAP-10 open |
-| H. STOP navigateur | **NOT PROVEN** | — | QA-NAP-06 open |
-| I. OpenAI LIVE structured emit | **NOT PROVEN** | — | distinct REAL GO |
+| A. Option C Delivery | **CURRENT ON MAIN** | PR #628 · 30 files · CI SUCCESS | Product integrated; ≠ L3 closed |
+| B. CORR-NAP-01/02/03 | **DETERMINISTIC VERIFIED** at tested scope | Unit/UI CORR suites ON MAIN | Scope-bounded · ≠ LIVE |
+| C. CORR-NAP-04 Product Turn Coherence (LR return after STOP) | **DETERMINISTIC VERIFIED** | CORR-NAP-04 + coherence suites ON MAIN | ≠ browser STOP QA |
+| D. QA navigateur Fake/Auth | **AUTHENTICATED FAKE BROWSER RUNTIME OBSERVED** | QA-NAP-03 + E2E code ON MAIN | Better Auth · Fake markers · **not** Required Gate job |
+| E. A4 structural | **STRUCTURAL ALIGNMENT** at QA scope | Captures / E2E assertions | **≠ PIXEL PERFECT** |
+| F. Browser reload | **DETERMINISTIC VERIFIED** at reported Fake scope | QA-NAP-03 `page.reload()` | Fake only |
+| G. Server restart | **NOT PROVEN** | — | QA-NAP-10 / R-SRV-RESTART open |
+| H. STOP navigateur | **NOT PROVEN** | — | QA-NAP-06 / R-STOP-BROWSER open |
+| I. OpenAI LIVE structured emit | **NOT PROVEN** | — | R-LIVE-EMIT · distinct REAL GO |
 | J. Fake/Real gap | Fake DET ≠ model REAL quality/latency/cost | — | keep ceiling |
-| K. Product Git Integration | **NOT AUTHORIZED / NOT ON MAIN** | — | Morris GI + PR + merge gates |
-| L. PRR semantic sync | **LOCAL DOC CANDIDATE** | R24-NAP-01 volumes 03/06/09 (+08 index) | Manifest digest gate + semantic review **PENDING** |
+| K. Product Git Integration | **COMPLETED — PR #628 MERGED** | merge `c848b98c…` · two commits preserved | Feature cleanup may remain BLOCKED separately |
+| L. PRR semantic sync (C14 / R24-NAP-CR-01) | **HISTORICAL AUTHORING SNAPSHOT (2026-10-30)** — local candidate at that instant; later lifecycle resolve from Git | C14-NAP-01 volumes + Roadmap (+ R24-NAP-CR-01 temporal fix) | As-of C14 authoring: Semantic Review / digest gate / DOC GI were **not yet consumed**. Do **not** read as eternally PENDING after later gates. Resolve subsequent status from Git + applicable Morris GOs |
+| M. Full Vitest CI | **SUCCESS** on `1c3a8d9e…` and `c848b98c…` | GitHub CI logs | 142 SKIP not claimed as executed |

-**Covered (local, not ON MAIN):** Option C DTO + normalize/fail-closed · Studio typed notices · adaptive UI composition · Memory B columns · Fake QA Auth browser · CORR-NAP-01…04 DET · Cognitive STOP LR coherence unit.
+**Covered ON MAIN:** Option C DTO + normalize/fail-closed · Studio typed notices · adaptive UI · Memory B columns · Fake QA Auth browser (historical) · CORR-NAP-01…04 DET · Cognitive STOP LR coherence · Vitest cookie-shape without Chromium · CI Required Gate.

-**Preserved L3-S2 reserves (unchanged by NAP):** EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · L3 GLOBAL **OPEN** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED**. **QA-NAP ≠** closure of EP-S2-08 or EP-S2-05.
+**HISTORICAL PRE-INTEGRATION SNAPSHOT (as-of R24-NAP-01 authoring, before merge):** table that said **LOCAL IMPLEMENTED WIP / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN** — **true at that dated instant**; preserve; do not read as active Product status after PR #628.

-**Exit / next (documentary → integration):** (1) R24 semantic review PASS · (2) distinct manifest digest regularization GO · (3) distinct Morris Product GI / PR / merge · (4) post-merge requalify LOCAL CANDIDATE → CURRENT only after verified merge + proofs · (5) open Product proofs: STOP browser · server restart · OpenAI LIVE structured emit · build/CI on integrated bytes.
+**Preserved L3-S2 reserves (unchanged by NAP merge):** EP-S2-08 **PARTIAL** · EP-S2-05 **NOT PROVEN** · L3 GLOBAL **OPEN** · L4 **NOT AUTHORIZED** · runtime v3 **NON ADOPTED** · R-MANIFEST-TOPO **OPEN**. **QA-NAP ≠** closure of EP-S2-08 or EP-S2-05.

-**Anti-claims:** ≠ CURRENT ON MAIN · ≠ PR READY · ≠ REAL PROVEN · ≠ G-REAL · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED · ≠ GLOBAL RESTART SAFE · digest MATCH ≠ semantic validity.
+**Exit / next (NEXT QUALIFIED PATH AT AUTHORING — subject to subsequent Morris gates):** (1) C14 R24 Semantic Review · (2) distinct manifest digest regularization GO if needed · (3) distinct documentary Git Integration · (4) open Product proofs (CURRENT gaps): STOP browser · server restart · OpenAI LIVE structured emit · EP-S2-08 remaining · EP-S2-05 — each under distinct Morris GO. Documentary gate consumption after authoring must be resolved from Git; do not assume they remain unconsumed forever.

-**Gates Morris still open:** semantic review of R24-NAP-01 · manifest digest gate · Product commit/PR/merge authorization · any LIVE/REAL/STOP-browser/server-restart proof GOs.
+**Anti-claims:** ≠ REAL PROVEN · ≠ G-REAL · ≠ L3 CLOSED · ≠ L4 AUTHORIZED · ≠ runtime v3 ADOPTED · ≠ GLOBAL RESTART SAFE · Product ON MAIN ≠ automatic documentary publication · digest MATCH ≠ semantic validity · authoring-time local-candidate wording ≠ permanent post-publication lifecycle.
+
+**Gates Morris (as-of C14-NAP-01 / R24-NAP-CR-01 authoring — resolve later from Git):** documentary Semantic Review · digest gate · documentary commit/PR/merge were **not consumed at that snapshot**; subsequent consumption must be verified from Git and applicable GOs. **Product proof GOs still CURRENT OPEN:** LIVE/REAL · STOP-browser · server-restart · EP-S2-08 remaining · EP-S2-05.

 ## Overlay — AKG-M5 L3-S2 Option B / S8 (CURRENT ON MAIN — PR #623 MERGED — 2026-10-27)

diff --git a/projects/sfia-studio/production-runtime-reference/README.md b/projects/sfia-studio/production-runtime-reference/README.md
index b0752916..1a8a3141 100644
--- a/projects/sfia-studio/production-runtime-reference/README.md
+++ b/projects/sfia-studio/production-runtime-reference/README.md
@@ -66,6 +66,19 @@ Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-wo
 Canonical detail for lifecycle, known gaps, and main-vs-branch split: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)**. Volumes 03/07/08 dated 2026-10-25 overlays that still say pre-push **LOCAL DELIVERY** / **PENDING GIT INTEGRATION** are **HISTORICAL AS OF `a75d0ed5`** for lifecycle status (superseded by vol 09 + this README block). Behaviour marked **CURRENT ON MAIN** in those volumes remains main truth until merge.


+**Nora Adaptive Presentation Option C / AKG-M5 L3-S2 — CURRENT PRODUCT ON MAIN (PR #628 MERGED — 2026-10-30) + C14-NAP-01 / R24-NAP-CR-01 documentary truth-sync:**
+
+| Epistemic class | Element |
+|---|---|
+| **CURRENT PRODUCT ON MAIN** | [PR #628](https://github.com/mcleland147/sfia-workspace/pull/628) **MERGED** `2026-10-30T11:46:31Z` · merge **`c848b98c5bdb218322c8a2cf457568c8a75c1e3f`** · parents **`2cc63686…`** + **`1c3a8d9e…`** · Delivery **`c6b5ae3a…`** + CI correction **`1c3a8d9e…`** (Vitest cookie-shape without Chromium) · **30 files** · Pre-merge CI [#41043545435](https://github.com/mcleland147/sfia-workspace/actions/runs/41043545435) **SUCCESS** · Post-merge CI [#41050498551](https://github.com/mcleland147/sfia-workspace/actions/runs/41050498551) **SUCCESS** · Required Gate **PASS** · Vitest **6183 PASS / 142 SKIP / 0 FAIL** · Modeled governance **75 PASS** |
+| **Product facts ON MAIN** | Nullable Option C `presentation` DTO · fail-closed normalize · typed Studio notices (server provenance) · Memory B `presentation_json` / `studio_control_json` · ConversationSurface → `NoraAdaptivePresentationView` · narrative / plain fallback · Cognitive STOP / CORR-NAP-01…04 · Fake NAP dual-gate (`SFIA_STUDIO_E2E_QA_CONTROL` ∧ Fake provider) |
+| **Proof ceiling** | **DETERMINISTIC AT TESTED SCOPE** · Fake Auth browser QA historical (QA-NAP-03) · **≠** OpenAI LIVE structured emit · **≠** STOP browser · **≠** server process restart |
+| **HISTORICAL AS OF authoring** | Pre-merge R24-NAP overlays « LOCAL CANDIDATE — PRE-INTEGRATION / PRODUCT UNCOMMITTED / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN » — **true before PR #628 merge**; preserve as dated snapshot · superseded for Product lifecycle by this block |
+| **R24 C14-NAP-01 / R24-NAP-CR-01 — HISTORICAL AUTHORING SNAPSHOT (2026-10-30)** | **As-of C14-NAP-01 local authoring (before semantic review and documentary Git Integration):** documentary candidate was local on branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` (volumes 03/06/08/09 + Roadmap + this README); digest regularization was pending (no `--write-digests` in that cycle); documentary publication was not yet authorized. These statements describe the dated authoring state, **not** a permanent post-publication lifecycle claim for this README. Subsequent documentary integration / digest / publication status must be resolved from Git, applicable gates and post-merge proofs. R24-NAP-CR-01 corrects temporal currentness only · **NO PRODUCT SEMANTIC IMPACT** |
+| **Anti-claims** | ≠ L3 GLOBAL CLOSED · ≠ EP-S2-08 PASS · ≠ EP-S2-05 PROVEN · ≠ G-REAL · ≠ L4 · ≠ runtime v3 ADOPTED · ≠ REAL PROVEN · digest MATCH ≠ semantic exhaustiveness · Product ON MAIN ≠ automatic documentary publication |
+
+Canonical Option C gap table: **[09 — Known Gaps](./09-known-gaps-reserves-and-current-boundaries.md)** (CURRENT overlay supersedes PRE-INTEGRATION table). Flow/persistence/proof detail: volumes **03 / 06 / 08**.
+
 **AKG-M5 L3-S2 Option B / S8 Project-first — CURRENT ON MAIN (PR #623 MERGED — 2026-10-27) + Cycle 14 R24 LOCAL documentary sync:**

 | Epistemic class | Element |
```

Name-status / stat (project docs only):

```
M	projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
M	projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
M	projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
M	projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
M	projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
M	projects/sfia-studio/production-runtime-reference/README.md

 .../convergence/sfia-studio-convergence-roadmap.md |  3 +-
 .../03-end-to-end-flow-catalog.md                  | 24 ++++++-----
 .../06-persistence-restart-and-recovery.md         | 12 +++---
 .../08-test-proof-and-conformance-map.md           | 20 +++++----
 ...9-known-gaps-reserves-and-current-boundaries.md | 50 ++++++++++++----------
 .../production-runtime-reference/README.md         | 13 ++++++
 6 files changed, 74 insertions(+), 48 deletions(-)
```

## 13. Classification CURRENT / HISTORICAL

| Statement class | Examples preserved/corrected |
|-----------------|------------------------------|
| CURRENT PRODUCT FACT | PR #628 MERGED · merge c848b98c · CI SUCCESS · Option C ON MAIN · DET at tested scope · L3 GLOBAL OPEN · EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN |
| HISTORICAL DOCUMENTARY SNAPSHOT | C14 local candidate · digest pending · DOC GI not authorized **as-of 2026-10-30 authoring** |
| FUTURE GATED ACTION | Semantic Review → digest GO → DOC GI → Product continuity proofs — **subject to subsequent Morris gates**; resolve consumption from Git |
| KNOWN PRODUCT GAP | STOP browser · server restart · OpenAI LIVE · EP-S2-08 remaining · EP-S2-05 |

## 14. Contrôle des gates

| Gate | Claim after CR |
|------|----------------|
| Product merge #628 | COMPLETED (CURRENT) |
| Documentary Semantic Review | Not consumed at C14/CR authoring snapshot — resolve later from Git |
| Digest regularization | Not performed this cycle — PENDING as gate; ≠ DIGEST PASS claimed |
| Documentary commit/push/PR/merge | Not performed — NOT AUTHORIZED this cycle |
| L3 close / G-REAL / L4 / v3 adopt | NOT claimed |

No invented consumed gates. No eternal PENDING for documentary lifecycle after future publication.

## 15. R23

Git/code/CI > docs. This cycle: DOCUMENTED temporal fix only. No new Product proof. COVERAGE of Product facts remains as C14. BEHAVIOR PROVEN ceiling unchanged (DET). KNOWN GAPs preserved.

## 16. R24

Impact: DOCUMENTARY TEMPORAL CURRENTNESS FIX. Product semantic impact: **NO SEMANTIC PRODUCT IMPACT**. Architecture KEEP. Documents ADAPT. No DTO/UI/OA/persistence/Nora Agents/Better Auth/E2E mutation.

## 17. Checker PRR RO

Command: `node scripts/check-production-runtime-reference.mjs` (no `--write-digests`).

```
OK: canonical README exists
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/README.md: manifest=81b778241ade4da8 current=fd9d3aadd64084b0 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md: manifest=89c1b959740c308b current=4e8afd0560d3f660 ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md: manifest=2f4d2ab593a581b0 current=c79b001b5136a1be ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md: manifest=f6bc6f73585425dd current=c3ea1874a2ba011c ⇒ REFERENCE REVIEW REQUIRED
FAIL: volume digest drift for projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md: manifest=6ebfc7c9f2163bcb current=974279ccc64db86d ⇒ REFERENCE REVIEW REQUIRED
RESULT: REFERENCE REVIEW REQUIRED / CONFORMANCE FAILED
```

## 18. Analyse de digests (post-CR)

| Volume | Manifest | Post-CR current | vs C14 |
|--------|----------|-----------------|--------|
| README | 81b778241ade4da8 | fd9d3aadd64084b0 | changed (CR edit) |
| 03 | 89c1b959740c308b | 4e8afd0560d3f660 | unchanged vs C14 |
| 06 | 2f4d2ab593a581b0 | c79b001b5136a1be | unchanged vs C14 |
| 08 | f6bc6f73585425dd | c3ea1874a2ba011c | changed (CR edit) |
| 09 | 6ebfc7c9f2163bcb | 974279ccc64db86d | changed (CR edit) |

Five drifts — same five volumes as C14. Nature expected. Roadmap not in manifest. **DOCUMENTARY DIGEST GATE PENDING**. No CONFORMANCE PASS simulated.

## 19. Statut manifest

`production-runtime-reference.manifest.json` — **INTACT** (no diff vs HEAD).

## 20. Absence de Product mutation

Product paths: (none). No tests/CI/packages/runtime edits.

## 21. Fake/Real Qualification

Entry: PRODUCT OPTION C ON MAIN · DETERMINISTIC AT TESTED SCOPE.
Fake browser Auth: historical QA-NAP-03.
REAL corresponding: OpenAI LIVE structured presentation — **NOT PROVEN**.
Gaps unchanged: LIVE emit · server restart · STOP browser · REAL quality/latency/cost.
Exit: DOCUMENTARY STATUS CORRECTED LOCALLY.
G-REAL NOT GRANTED · L4 NOT AUTHORIZED · runtime v3 NON ADOPTED.

## 22. Réserves inchangées

EP-S2-08 PARTIAL · EP-S2-05 NOT PROVEN · L3 GLOBAL OPEN · R-STOP-BROWSER / R-SRV-RESTART / R-LIVE-EMIT NOT PROVEN · R-MANIFEST-TOPO OPEN · G-REAL NOT GRANTED · L4 NOT AUTHORIZED · runtime v3 NON ADOPTED · exclusive DEFAULT OFF.

## 23. Gates Morris restants

(As qualification path — consumption resolve from Git after this pack:)

1. ChatGPT Semantic Delta Review of this CR.
2. Distinct Morris digest regularization GO (if needed).
3. Distinct documentary Git Integration (commit/push/PR/merge).
4. Distinct Product continuity proof GOs (STOP · restart · LIVE · EP-S2-08 · EP-S2-05).

## 24. État Git final (pre-handoff publish)

Branch `docs/akg-m5-nap-option-c-c14-r24-truth-sync` @ `c848b98c5bdb218322c8a2cf457568c8a75c1e3f` (= main).
Dirty: six documentary files (+ `.tmp-sfia-review` pack). No project commit. No project push. No PR. Feature cleanup not in scope.

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
 M projects/sfia-studio/production-runtime-reference/03-end-to-end-flow-catalog.md
 M projects/sfia-studio/production-runtime-reference/06-persistence-restart-and-recovery.md
 M projects/sfia-studio/production-runtime-reference/08-test-proof-and-conformance-map.md
 M projects/sfia-studio/production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md
 M projects/sfia-studio/production-runtime-reference/README.md
```

## 25. Verdict unique

**R24-NAP-CR-01 — TEMPORAL CURRENTNESS CORRECTED LOCALLY — DOCUMENTARY DELTA READY FOR CHATGPT REVIEW — DIGEST GATE PENDING — NO PROJECT COMMIT/PUSH/PR/MERGE**

### Instruction ChatGPT

1. Relire handoff Git.
2. Vérifier le delta correctif complet (§11).
3. Vérifier le cumul documentaire (§12).
4. Requalifier CURRENT/HISTORICAL.
5. Vérifier références Git (#628 · c848b98c · CI).
6. Vérifier réserves.
7. Vérifier absence Product mutation.
8. Vérifier manifest inchangé.
9. Prononcer Semantic Delta Review.
10. Si PASS, préparer GO Morris régularisation digests.
11. Ne pas intégrer docs avant gates distincts applicables.
