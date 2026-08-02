# SFIA Studio V3.1-D2-B — QA Revalidation Full Review Pack

- **Date/heure/fuseau:** 2026-08-02 23:31:33 CEST (+0200)
- **Rôle:** Cursor QA Critical read-only
- **Cycle:** 9 — QA / validation
- **Sous-type:** QA revalidation Critical du package corrigé V3.1-D2-B
- **Profil:** Critical
- **Typologie:** INC
- **Template:** prompts/templates/sfia-cycle-execution-template.md
- **CKC:** method/.../pilots/04-qa-validation.md — candidate v0.1.0 — experimental cognitive guidance — no execution authority
- **Anti-claims:** tests verts ≠ absence de bug ; QA PASS ≠ PR ready ; QA PASS ≠ production ready ; manifest validé ≠ Markdown consommé ; audit FAIL-CLOSED ≠ observabilité prod ; package corrigé ≠ D2-C ouvert ; candidate ≠ baseline

## Gate Morris consommé

```
GO QA REVALIDATION SFIA STUDIO V3.1-D2-B CKC RESOLVER —
REVIEW THE CORRECTED THIRTEEN-FILE PACKAGE AGAINST F-QA-01…06 AND BL-D2-B-01…06 —
VERIFY PROOF DISCLOSURE AND FALLBACKPOLICY INVARIANTS, GLOBAL MANIFEST VALIDATION, RESOLVEDAT ISO VALIDATION, MORRIS-ADOPTED FAIL-CLOSED AUDIT POLICY, SANITIZATION, NO RECURSIVE AUDIT, FAIL-CLOSED NEGATIVES, T-A2 COMPATIBILITY, D2-A ISOLATION, D2-C EXCLUSION, REGRESSIONS, TYPECHECK, LINT, FULL TEST SUITE AND BUILD —
NO COMMIT — NO PUSH — NO PR — NO D2-C — NO D2-D — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION
```

**Date/heure GO:** 2026-08-02 23:21 CEST (+0200)

## Décision Morris FAIL-CLOSED (consommée, non rouverte)

Audit undefined → résolution pure OK.
Audit injecté + append throw → ok=false, D2_INTERNAL_ERROR, blocking/retryable/recoverable=true, message public stable, aucune proof, aucun consumed=true, aucune exception brute, aucune récursion.

## Handoff source pré-cycle

- tip: `2aff75c8c0add92662a8ceab24cfe64579428882`
- blob: `d87b8d57b9b542dd9d37e3ae359baf0d58cfca2a`
- archive: `.tmp-sfia-review/v3-1-d2-b-fqa01-06-corrective-delivery-chatgpt-review-preserved.md` (hash-object = blob)

## Git Truth initial

```
=== QA REVALIDATION GIT TRUTH 2026-08-02 23:28:47 CEST (+0200) ===
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
origin	https://github.com/mcleland147/sfia-workspace.git (fetch)
origin	https://github.com/mcleland147/sfia-workspace.git (push)
branch=delivery/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=bb685f1205b33f887ee27b42ac918c96386a6e33
main=bb685f1205b33f887ee27b42ac918c96386a6e33
origin_main=bb685f1205b33f887ee27b42ac918c96386a6e33
divergence=0	0
--- status ---
 M projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
 M projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/_gen_d2a_corrective_reports.py
?? .tmp-sfia-review/_gen_d2a_pr_readiness_reports.py
?? .tmp-sfia-review/_gen_d2a_qa_reports.py
?? .tmp-sfia-review/_gen_d2a_qa_revalidation_reports.py
?? .tmp-sfia-review/_gen_d2a_reports.py
?? .tmp-sfia-review/_gen_doc19.py
?? .tmp-sfia-review/archive-comparison.txt
?? .tmp-sfia-review/archive-source-sha256.txt
?? .tmp-sfia-review/archive-target-sha256.txt
?? .tmp-sfia-review/before-corrective/01-qa-validation-report.md
?? .tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-corrective/d1-README.md
?? .tmp-sfia-review/before-corrective/framing-README.md
?? .tmp-sfia-review/before-corrective/index.ts
?? .tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-d1/README.md
?? .tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md
?? .tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md
?? .tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-pr-readiness/d1-README.md
?? .tmp-sfia-review/before-pr-readiness/framing-README.md
?? .tmp-sfia-review/before-pr-readiness/index.ts
?? .tmp-sfia-review/before-publication/01.md
?? .tmp-sfia-review/before-publication/02.md
?? .tmp-sfia-review/before-publication/03.md
?? .tmp-sfia-review/before-publication/04.md
?? .tmp-sfia-review/before-publication/08.md
?? .tmp-sfia-review/before-publication/12.md
?? .tmp-sfia-review/before-publication/13.md
?? .tmp-sfia-review/before-publication/14.md
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-publication/d1-README.md
?? .tmp-sfia-review/before-publication/framing-README.md
?? .tmp-sfia-review/before-publication/index.ts
?? .tmp-sfia-review/before-qa/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-qa/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-qa/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-qa/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-qa/d1-README.md
?? .tmp-sfia-review/before-qa/framing-README.md
?? .tmp-sfia-review/before-qa/index.ts
?? .tmp-sfia-review/before-revalidation/01-qa-validation-report.md
?? .tmp-sfia-review/before-revalidation/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-revalidation/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-revalidation/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-revalidation/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-revalidation/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-revalidation/d1-README.md
?? .tmp-sfia-review/before-revalidation/framing-README.md
?? .tmp-sfia-review/before-revalidation/index.ts
?? .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before/README.md
?? .tmp-sfia-review/cap-truth.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/ci-jobs.json
?? .tmp-sfia-review/ci-main-pr-readiness.json
?? .tmp-sfia-review/ci-run.json
?? .tmp-sfia-review/evidence/v2-a2/01-initial.png
?? .tmp-sfia-review/evidence/v2-a2/02-validation-errors.png
?? .tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png
?? .tmp-sfia-review/evidence/v2-a3/01-workspace-missing.png
?? .tmp-sfia-review/evidence/v2-a3/02-workspace-after-create-not-found.png
?? .tmp-sfia-review/evidence/v2-a3/03-create-form-filled.png
?? .tmp-sfia-review/evidence/v2-a3/04-create-success.png
?? .tmp-sfia-review/evidence/v2-a3/05-workspace-loaded.png
?? .tmp-sfia-review/final-git-state.txt
?? .tmp-sfia-review/framing-README-main.md
?? .tmp-sfia-review/framing-README-pr.md
?? .tmp-sfia-review/local-numstat.txt
?? .tmp-sfia-review/main-protection.err
?? .tmp-sfia-review/main-protection.json
?? .tmp-sfia-review/main-worktree-inspection.txt
?? .tmp-sfia-review/main-worktree-status.txt
--- cached ---
--- name-status ---
M	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
M	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
M	projects/sfia-studio/app/lib/oa/cycle/index.ts
M	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
--- stat ---
 .../oa/cycle/catalogProjection.qa.test.ts          | 19 +++++++++--
 .../oa/cycle/domain/ckcQualificationContracts.ts   | 38 ++++++++++++++++++++++
 projects/sfia-studio/app/lib/oa/cycle/index.ts     |  5 +++
 .../app/lib/oa/cycle/ports/cycleAudit.ts           | 16 +++++++++
 4 files changed, 76 insertions(+), 2 deletions(-)
--- numstat ---
17	2	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
38	0	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
5	0	projects/sfia-studio/app/lib/oa/cycle/index.ts
16	0	projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
--- check ---
DIFF_CHECK_PASS
--- remote D2-B ---
--- worktree ---
worktree /Users/morris/Projects/sfia-workspace
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/delivery/eventops-poc-visible-slice-01

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-a5-2-framing
HEAD bd3608c6220e820cc3fa017422a7564a565a1296
branch refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main

--- handoff ---
handoff_tip=2aff75c8c0add92662a8ceab24cfe64579428882
100644 blob d87b8d57b9b542dd9d37e3ae359baf0d58cfca2a	sfia-review-handoff/latest-chatgpt-review.md
--- gh ---
github.com
  ✓ Logged in to github.com account mcleland147 (keyring)
  - Active account: true
  - Git operations protocol: https
  - Token: gho_************************************
  - Token scopes: 'gist', 'read:org', 'repo', 'workflow'
--- branch vv (D2-B) ---
* delivery/sfia-studio-v3-1-d2-b-ckc-resolver                                   bb685f1 Merge pull request #300 from mcleland147/post-merge/sfia-studio-v3-1-d2-a-documentary-closure-final-status

```

## Inventaire et empreintes

```
# Package hashes — QA revalidation pre-check
date=2026-08-02 23:29:03 CEST (+0200)

## Inventory existence
count=13
OK projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
OK projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts
OK projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
OK projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts
OK projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts
OK projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
OK projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
OK projects/sfia-studio/app/lib/oa/cycle/index.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts
OK projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts

## POST_D2B_ORIGINAL_12
value=b9a4e5099ef7f27346f74686eb7f2a80a25222a2399728dd0bf62d41cc98f815
expected=b9a4e5099ef7f27346f74686eb7f2a80a25222a2399728dd0bf62d41cc98f815
MATCH

## POST_FULL_13
value=290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e
expected=290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e
MATCH

## POST_GIT_DIFF
value=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
expected=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
MATCH

## Protected-8 individual sha256
89d528b3917c035f8b6ed5ae2300468a403a35459e5f77a75a8c734ef911507f  projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
025f34191576c58222643356836fb7c62c193b3315d6b5be9085958e8609a279  projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts
96e14671e3bd4aa9f3771589041ba81057759730182d2c234f6a1f9e54c75fda  projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts
7beadca57bb27f171a1755f872d7176e288c102416784a30a7e52838d8fce875  projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts
79bd36209a723ddeb91fc3c40333d624e600b42958af23a8c3f029f498c52d7a  projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
5eb4a81c40e6a33856320f725cbf2e50b008c5410365788d509e2815b7dbd42a  projects/sfia-studio/app/lib/oa/cycle/index.ts
f2c7454ca20b07452777cff8129381f14e65c32ab0a28e7c6250a5c0342c7ba2  projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts
e553dead1f56ae4c92699dfdedb90ed263a5f4bb46cf7dca174bc66e8b96966c  projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts

## vs corrective baseline
PROTECTED8_UNCHANGED

```

Gel confirmé pendant et après campagne: POST_FULL_13 inchangé = `290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e`.

## Rapport

```
# V3.1-D2-B QA Revalidation Report

**Date:** 2026-08-02 23:31:14 CEST (+0200)
**Rôle:** Cursor QA Critical read-only
**Cycle:** 9 — QA / validation
**Gate Morris:** GO QA REVALIDATION … 2026-08-02 23:21 CEST

## Résultats techniques
- Proof 8/8
- Resolver+QA 23/23
- D2-B 36/36
- D2-A 86/86
- oa/cycle 216/216
- typecheck PASS
- lint PASS
- suite 949/949
- build PASS
- probes 19/19 CLOSED
- package freeze OK (POST_FULL_13 inchangé)
- protected-8 inchangés

## Verdict
V3.1-D2-B CKC RESOLVER QA REVALIDATION PASS WITH RESERVES

```

## Matrices

### Stories
# Matrice BL-D2-B-01…06

| Story | Verdict QA | Preuves |
|---|---|---|
| BL-D2-B-01 Manifest | PASS | validate avant lookup ; probes P1–P3,P9,P10,P11 ; tests manifest |
| BL-D2-B-02 Port spécialisé | PASS | revue ports/ckcQualificationResolver.ts ; distinct CkcResolverPort |
| BL-D2-B-03 Resolver | PASS | tests resolver 14+9 ; probes ; déterminisme P10 |
| BL-D2-B-04 Erreurs T-A2 | PASS | codes autorisés ; D2_INTERNAL_ERROR audit ; pas d’alias |
| BL-D2-B-05 Proof | PASS | F-QA-01…03 fermés ; builder pur |
| BL-D2-B-06 Audit events | PASS | FAIL-CLOSED Morris ; 6 events ; sanitize ; no recursion |


### F-QA
# Matrice F-QA-01…06 — QA revalidation

| Finding | Preuve indépendante | Outcome observé | Fermé |
|---|---|---|---|
| F-QA-01 | P5 + tests proof | REJECT CKC_RESOLUTION_INCOHERENT ; dup rejetée | OUI |
| F-QA-02 | P6 | PROOF_REJECTS detailed+synthetic | OUI |
| F-QA-03 | P7 | incohérents rejetés ; cohérents acceptés | OUI |
| F-QA-04 | P8×6 + P8b | D2_INTERNAL_ERROR ; 0 leak ; 0 récursion | OUI |
| F-QA-05 | P1–P3,P9,P11 | REJECT avant lookup ; ORDER_OK | OUI |
| F-QA-06 | P4 | invalides rejetés ; valides acceptés | OUI |


### Proof
# Proof matrix

| Cas | Résultat |
|---|---|
| fallback sans disclosure | REJECT |
| disclosure dupliquée | REJECT |
| detailed+CKC_FALLBACK_USED | REJECT |
| synthetic+CKC_FALLBACK_USED | REJECT |
| detailed+fallbackPolicy=none | REJECT |
| synthetic+intra_v3_only | REJECT |
| fallback+none | REJECT |
| nominaux cohérents | ACCEPT consumed=true |
| resolvedAt invalide dans resolution | REJECT (builder) |


### Manifest
# Manifest matrix

| Cas | Validator | Resolver |
|---|---|---|
| foreign | MANIFEST_UNKNOWN_REFERENCE | CKC_RESOLUTION_INCOHERENT |
| missing nonselected | MANIFEST_REFERENCE_MISSING | CKC_RESOLUTION_INCOHERENT |
| duplicate | MANIFEST_DUPLICATE | CKC_RESOLUTION_INCOHERENT |
| metadata invalide nonselected | MANIFEST_METADATA_INVALID | CKC_RESOLUTION_INCOHERENT |
| reorder valid | OK | EQUAL deterministic |
| validate before this.manifest lookup | — | ORDER_OK (static) |


### Audit
# Audit FAIL-CLOSED matrix

| Event | append calls | code | proof | recursion | leak |
|---|---|---|---|---|---|
| resolution_started | 1 | D2_INTERNAL_ERROR | absent | non | non |
| resolution_succeeded | 2 | D2_INTERNAL_ERROR | absent | non | non |
| fallback_used | 2 | D2_INTERNAL_ERROR | absent | non | non |
| consumption_validated | 4 | D2_INTERNAL_ERROR | absent | non | non |
| resolution_failed | 2 | D2_INTERNAL_ERROR | absent | non | non |
| consumption_rejected | 3 | D2_INTERNAL_ERROR | absent | non | non |
| audit undefined | 0 | n/a (ok=true) | present | n/a | n/a |
| audit functional | 3 | n/a (ok=true) | present | n/a | n/a |


### resolvedAt
# resolvedAt matrix

## Rejects (resolver → CKC_RESOLUTION_INCOHERENT, no proof)
not-an-iso-timestamp · date seule · sans fuseau · vide · whitespace · leading space · 2026-02-31 · month 00/13 · day 00 · hour 24 · min/sec 60

## Accepts
Z · +02:00 · -02:00 · milliseconds · leap day 2024-02-29Z

## Vigilance P12 (MINOR)
resolution_started est émis AVANT validation ISO, donc `ts` peut reproduire la string invalide fournie.
Événements de succès non émis. Outcome fail-closed correct. Port `ts: string` sans contrainte ISO explicite dans les sources D2.
Classification: mineur — événement imprécis sans comportement faux / sans consumed=true.


## Import boundaries

```
=== import boundaries 2026-08-02T23:30:43+02:00 ===
-- projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts
(none)
-- projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts
(none)
-- projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
(none)
-- projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts
(none)
-- projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts
(none)
-- projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts
(none)
-- projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts
9:      recommendedProfile: string;
=== D2-C forbidden in index ===
(none)
=== freeze hashes ===
POST_FULL_13=290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e
FREEZE_OK
GIT_DIFF=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
STAGED=0

```

Note: `recommendedProfile` dans `cycleAudit.ts` appartient à l'événement historique `oa.cycle.qualified` T-A2 — non utilisé par le resolver D2-B.

## Findings / réserves

# Findings QA revalidation

## Findings bloquants
Aucun.

## Findings majeurs
Aucun. F-QA-01…06 fermés par probes indépendantes.

## Findings mineurs / réserves
1. **R-QA-REV-01 MINOR** — `oa.ckc.resolution_started` (et events d’échec associés) peuvent porter `ts` = resolvedAt invalide car l’émission started précède `isIso8601DateTime`. Pas de succès, pas de proof, pas de consumed=true. Hors fermeture F-QA-06 (qui exige validation avant résolution et avant succès).
2. **R-QA-REV-02 MINOR** — Probes hors `__tests__/**` exécutées via `vite-node` temporaire (limite Vitest include, non mutante). Identique à la réserve de campagne QA initiale.

## Environnementaux
Aucun bloquant.


## Probes indépendantes (sortie)

```
[PROBE] P1_foreign_entry: REJECT_CKC_RESOLUTION_INCOHERENT | validatorUnknown=true | CLOSED
[PROBE] P2_missing_nonselected: REJECT_CKC_RESOLUTION_INCOHERENT | validatorMissing=true | CLOSED
[PROBE] P3_duplicate_find: REJECT_CKC_RESOLUTION_INCOHERENT | validatorDuplicate=true | CLOSED
[PROBE] P4_non_iso_resolvedAt: ALL_INVALID_REJECTED_AND_VALID_ACCEPTED | rejects=13 | CLOSED
[PROBE] P5_fallback_no_disclosure: REJECT_CKC_RESOLUTION_INCOHERENT | dup=CKC_RESOLUTION_INCOHERENT | CLOSED
[PROBE] P6_nonfallback_with_disclosure: PROOF_REJECTS_BOTH | detailed+synthetic | CLOSED
[PROBE] P7_incoherent_fallbackPolicy: PROOF_REJECTS_INCOHERENT_ACCEPTS_COHERENT | CLOSED
[PROBE] P8_oa.ckc.resolution_started: CONTROLLED_D2_INTERNAL_ERROR | calls=1 expected=1 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.resolution_succeeded: CONTROLLED_D2_INTERNAL_ERROR | calls=2 expected=2 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.fallback_used: CONTROLLED_D2_INTERNAL_ERROR | calls=2 expected=2 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.consumption_validated: CONTROLLED_D2_INTERNAL_ERROR | calls=4 expected=4 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.resolution_failed: CONTROLLED_D2_INTERNAL_ERROR | calls=2 expected=2 afterThrow=0 leak=false | CLOSED
[PROBE] P8_oa.ckc.consumption_rejected: CONTROLLED_D2_INTERNAL_ERROR | calls=3 expected=3 afterThrow=0 leak=false | CLOSED
[PROBE] P8_audit_matrix: ALL_SIX_FAIL_CLOSED | CLOSED
[PROBE] P8b_audit_absent_and_functional: NOMINAL | events=oa.ckc.resolution_started|oa.ckc.resolution_succeeded|oa.ckc.consumption_validated | CLOSED
[PROBE] P9_invalid_metadata_nonselected: REJECT_CKC_RESOLUTION_INCOHERENT | validatorInvalid=true | CLOSED
[PROBE] P10_reorder_determinism: EQUAL | CLOSED
[PROBE] P11_validate_before_lookup: ORDER_OK | validateAt=4991 primaryLookupAt=6159 | CLOSED
[PROBE] P12_invalid_resolvedAt_event_ts: STARTED_EMITTED_WITH_TS=not-an-iso-timestamp | outcome=CKC_RESOLUTION_INCOHERENT; events=oa.ckc.resolution_started|oa.ckc.resolution_failed|oa.ckc.consumption_rejected | CLOSED
PROBE_SUMMARY_JSON=[
  {
    "id": "P1_foreign_entry",
    "observed": "REJECT_CKC_RESOLUTION_INCOHERENT",
    "detail": "validatorUnknown=true",
    "closed": true
  },
  {
    "id": "P2_missing_nonselected",
    "observed": "REJECT_CKC_RESOLUTION_INCOHERENT",
    "detail": "validatorMissing=true",
    "closed": true
  },
  {
    "id": "P3_duplicate_find",
    "observed": "REJECT_CKC_RESOLUTION_INCOHERENT",
    "detail": "validatorDuplicate=true",
    "closed": true
  },
  {
    "id": "P4_non_iso_resolvedAt",
    "observed": "ALL_INVALID_REJECTED_AND_VALID_ACCEPTED",
    "detail": "rejects=13",
    "closed": true
  },
  {
    "id": "P5_fallback_no_disclosure",
    "observed": "REJECT_CKC_RESOLUTION_INCOHERENT",
    "detail": "dup=CKC_RESOLUTION_INCOHERENT",
    "closed": true
  },
  {
    "id": "P6_nonfallback_with_disclosure",
    "observed": "PROOF_REJECTS_BOTH",
    "detail": "detailed+synthetic",
    "closed": true
  },
  {
    "id": "P7_incoherent_fallbackPolicy",
    "observed": "PROOF_REJECTS_INCOHERENT_ACCEPTS_COHERENT",
    "closed": true
  },
  {
    "id": "P8_oa.ckc.resolution_started",
    "observed": "CONTROLLED_D2_INTERNAL_ERROR",
    "detail": "calls=1 expected=1 afterThrow=0 leak=false",
    "closed": true
  },
  {
    "id": "P8_oa.ckc.resolution_succeeded",
    "observed": "CONTROLLED_D2_INTERNAL_ERROR",
    "detail": "calls=2 expected=2 afterThrow=0 leak=false",
    "closed": true
  },
  {
    "id": "P8_oa.ckc.fallback_used",
    "observed": "CONTROLLED_D2_INTERNAL_ERROR",
    "detail": "calls=2 expected=2 afterThrow=0 leak=false",
    "closed": true
  },
  {
    "id": "P8_oa.ckc.consumption_validated",
    "observed": "CONTROLLED_D2_INTERNAL_ERROR",
    "detail": "calls=4 expected=4 afterThrow=0 leak=false",
    "closed": true
  },
  {
    "id": "P8_oa.ckc.resolution_failed",
    "observed": "CONTROLLED_D2_INTERNAL_ERROR",
    "detail": "calls=2 expected=2 afterThrow=0 leak=false",
    "closed": true
  },
  {
    "id": "P8_oa.ckc.consumption_rejected",
    "observed": "CONTROLLED_D2_INTERNAL_ERROR",
    "detail": "calls=3 expected=3 afterThrow=0 leak=false",
    "closed": true
  },
  {
    "id": "P8_audit_matrix",
    "observed": "ALL_SIX_FAIL_CLOSED",
    "closed": true
  },
  {
    "id": "P8b_audit_absent_and_functional",
    "observed": "NOMINAL",
    "detail": "events=oa.ckc.resolution_started|oa.ckc.resolution_succeeded|oa.ckc.consumption_validated",
    "closed": true
  },
  {
    "id": "P9_invalid_metadata_nonselected",
    "observed": "REJECT_CKC_RESOLUTION_INCOHERENT",
    "detail": "validatorInvalid=true",
    "closed": true
  },
  {
    "id": "P10_reorder_determinism",
    "observed": "EQUAL",
    "closed": true
  },
  {
    "id": "P11_validate_before_lookup",
    "observed": "ORDER_OK",
    "detail": "validateAt=4991 primaryLookupAt=6159",
    "closed": true
  },
  {
    "id": "P12_invalid_resolvedAt_event_ts",
    "observed": "STARTED_EMITTED_WITH_TS=not-an-iso-timestamp",
    "detail": "outcome=CKC_RESOLUTION_INCOHERENT; events=oa.ckc.resolution_started|oa.ckc.resolution_failed|oa.ckc.consumption_rejected",
    "closed": true
  }
]
PROBE_CLOSED=19/19
PROBE_OPEN=0
```

## Probe source (complet)

```typescript
/**
 * Independent QA revalidation probes — non-versioned, disposable.
 * Must not mutate the thirteen-file package.
 */
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  buildCkcConsumptionProof,
  projectSelectableCycleType,
  validateCkcReferenceManifest,
  type CkcQualificationResolution,
  type CkcReferenceManifest,
  type CycleAuditPort,
  type ValidatedCycleTypeProjection,
} from "../../projects/sfia-studio/app/lib/oa/cycle/index.ts";

const RESOLVED_AT = "2026-08-02T21:29:00.000Z";
const HOSTILE =
  "/Users/private/secret.md payload=ckc-body token=sk-hostile-f4ke file=leak.md";

type Obs = {
  id: string;
  observed: string;
  detail?: string;
  closed?: boolean;
};
const observations: Obs[] = [];

function log(id: string, observed: string, detail?: string, closed?: boolean) {
  observations.push({ id, observed, detail, closed });
  const flag = closed === undefined ? "" : closed ? " | CLOSED" : " | OPEN";
  console.log(
    `[PROBE] ${id}: ${observed}${detail ? " | " + detail : ""}${flag}`,
  );
}

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:reval:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function resolveOk(
  selected: ValidatedCycleTypeProjection,
  manifest?: CkcReferenceManifest,
): CkcQualificationResolution {
  const outcome = new CkcQualificationResolver(manifest).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  if (!outcome.ok) throw new Error(outcome.error.message);
  return outcome.resolution;
}

function hasProof(outcome: { ok: boolean }): boolean {
  return Object.prototype.hasOwnProperty.call(outcome, "proof");
}

function sanitizationLeak(message: string): boolean {
  return (
    message.includes("/Users/") ||
    message.includes("secret") ||
    message.includes("sk-hostile") ||
    message.includes("payload") ||
    message.includes("leak.md")
  );
}

// --- F-QA-05 / BL-D2-B-01 ---
{
  const selected = projection("cyc:framing");
  const foreign: CkcReferenceManifest = {
    entries: [
      ...CKC_REFERENCE_MANIFEST.entries,
      {
        ...CKC_REFERENCE_MANIFEST.entries[0],
        reference: "caller/private/foreign.md",
      },
    ],
  };
  const issues = validateCkcReferenceManifest(foreign);
  const outcome = new CkcQualificationResolver(foreign).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  const closed =
    !outcome.ok &&
    outcome.error.code === "CKC_RESOLUTION_INCOHERENT" &&
    !hasProof(outcome) &&
    issues.some((i) => i.code === "MANIFEST_UNKNOWN_REFERENCE");
  log(
    "P1_foreign_entry",
    outcome.ok ? "RESOLVER_ACCEPTS" : `REJECT_${outcome.error.code}`,
    `validatorUnknown=${issues.some((i) => i.code === "MANIFEST_UNKNOWN_REFERENCE")}`,
    closed,
  );
}

{
  const selected = projection("cyc:framing");
  const missing: CkcReferenceManifest = {
    entries: CKC_REFERENCE_MANIFEST.entries.filter(
      (e) => e.reference !== selected.ckc.fallbackReference,
    ),
  };
  const issues = validateCkcReferenceManifest(missing);
  const outcome = new CkcQualificationResolver(missing).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  const closed =
    !outcome.ok &&
    outcome.error.code === "CKC_RESOLUTION_INCOHERENT" &&
    !hasProof(outcome) &&
    issues.some((i) => i.code === "MANIFEST_REFERENCE_MISSING");
  log(
    "P2_missing_nonselected",
    outcome.ok ? "RESOLVER_ACCEPTS" : `REJECT_${outcome.error.code}`,
    `validatorMissing=${issues.some((i) => i.code === "MANIFEST_REFERENCE_MISSING")}`,
    closed,
  );
}

{
  const selected = projection("cyc:framing");
  const duplicate: CkcReferenceManifest = {
    entries: [...CKC_REFERENCE_MANIFEST.entries, CKC_REFERENCE_MANIFEST.entries[0]],
  };
  const issues = validateCkcReferenceManifest(duplicate);
  const outcome = new CkcQualificationResolver(duplicate).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  const closed =
    !outcome.ok &&
    outcome.error.code === "CKC_RESOLUTION_INCOHERENT" &&
    !hasProof(outcome) &&
    issues.some((i) => i.code === "MANIFEST_DUPLICATE");
  log(
    "P3_duplicate_find",
    outcome.ok
      ? `RESOLVER_ACCEPTS_FIRST status=${outcome.resolution.detailedStatus}`
      : `REJECT_${outcome.error.code}`,
    `validatorDuplicate=${issues.some((i) => i.code === "MANIFEST_DUPLICATE")}`,
    closed,
  );
}

// --- F-QA-06 ---
{
  const selected = projection("cyc:framing");
  const rejects = [
    "not-an-iso-timestamp",
    "2026-08-02",
    "2026-08-02T21:00:00",
    "",
    "   ",
    " 2026-08-02T21:29:00.000Z",
    "2026-02-31T00:00:00.000Z",
    "2026-00-10T00:00:00.000Z",
    "2026-13-10T00:00:00.000Z",
    "2026-08-00T00:00:00.000Z",
    "2026-08-02T24:00:00.000Z",
    "2026-08-02T12:60:00.000Z",
    "2026-08-02T12:00:60.000Z",
  ];
  let allRejected = true;
  for (const resolvedAt of rejects) {
    const outcome = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt,
    });
    if (
      outcome.ok ||
      outcome.error.code !== "CKC_RESOLUTION_INCOHERENT" ||
      hasProof(outcome)
    ) {
      allRejected = false;
      log("P4_non_iso_resolvedAt", "ACCEPTS_OR_WRONG_CODE", resolvedAt, false);
      break;
    }
  }
  if (allRejected) {
    // also check accepts
    const accepts = [
      "2026-08-02T19:47:00.000Z",
      "2026-08-02T21:47:00+02:00",
      "2026-08-02T17:47:00-02:00",
      "2026-08-02T19:47:00.123Z",
      "2024-02-29T12:00:00.000Z",
    ];
    let acceptsOk = true;
    for (const resolvedAt of accepts) {
      const outcome = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      if (!outcome.ok || !outcome.proof.consumed) {
        acceptsOk = false;
        log("P4b_iso_accept", "REJECTS_VALID", resolvedAt, false);
        break;
      }
    }
    if (acceptsOk) {
      log(
        "P4_non_iso_resolvedAt",
        "ALL_INVALID_REJECTED_AND_VALID_ACCEPTED",
        `rejects=${rejects.length}`,
        true,
      );
    }
  }
}

// --- F-QA-01 ---
{
  const selected = projection("cyc:framing");
  const manifest: CkcReferenceManifest = {
    entries: CKC_REFERENCE_MANIFEST.entries.map((e) =>
      e.reference === selected.ckc.primaryReference
        ? { ...e, availability: "unavailable" as const }
        : e,
    ),
  };
  const valid = resolveOk(selected, manifest);
  const missing = buildCkcConsumptionProof(selected, {
    ...valid,
    disclosures: [],
  });
  const dup = buildCkcConsumptionProof(selected, {
    ...valid,
    disclosures: ["CKC_FALLBACK_USED", "CKC_FALLBACK_USED"],
  });
  const closed =
    !missing.ok &&
    missing.error.code === "CKC_RESOLUTION_INCOHERENT" &&
    !Object.prototype.hasOwnProperty.call(missing, "proof") &&
    !dup.ok &&
    dup.error.code === "CKC_RESOLUTION_INCOHERENT";
  log(
    "P5_fallback_no_disclosure",
    missing.ok
      ? "PROOF_ACCEPTS_CONSUMED_TRUE"
      : `REJECT_${missing.error.code}`,
    `dup=${dup.ok ? "ACCEPTS" : dup.error.code}`,
    closed,
  );
}

// --- F-QA-02 ---
{
  let closed = true;
  for (const id of ["cyc:framing", "cyc:delivery"] as const) {
    const selected = projection(id);
    const valid = resolveOk(selected);
    const r = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: ["CKC_FALLBACK_USED"],
    });
    if (r.ok || r.error.code !== "CKC_RESOLUTION_INCOHERENT") {
      closed = false;
      log("P6_nonfallback_with_disclosure", "PROOF_ACCEPTS", id, false);
    }
  }
  if (closed) {
    log(
      "P6_nonfallback_with_disclosure",
      "PROOF_REJECTS_BOTH",
      "detailed+synthetic",
      true,
    );
  }
}

// --- F-QA-03 ---
{
  const detailed = projection("cyc:framing");
  const detailedValid = resolveOk(detailed);
  const dBad = buildCkcConsumptionProof(detailed, {
    ...detailedValid,
    fallbackPolicy: "none",
  });
  const synthetic = projection("cyc:delivery");
  const syntheticValid = resolveOk(synthetic);
  const sBad = buildCkcConsumptionProof(synthetic, {
    ...syntheticValid,
    fallbackPolicy: "intra_v3_only",
  });
  const fbManifest: CkcReferenceManifest = {
    entries: CKC_REFERENCE_MANIFEST.entries.map((e) =>
      e.reference === detailed.ckc.primaryReference
        ? { ...e, availability: "unavailable" as const }
        : e,
    ),
  };
  const fbValid = resolveOk(detailed, fbManifest);
  const fBad = buildCkcConsumptionProof(detailed, {
    ...fbValid,
    fallbackPolicy: "none",
  });
  const closed =
    !dBad.ok &&
    !sBad.ok &&
    !fBad.ok &&
    buildCkcConsumptionProof(detailed, detailedValid).ok &&
    buildCkcConsumptionProof(synthetic, syntheticValid).ok &&
    buildCkcConsumptionProof(detailed, fbValid).ok;
  log(
    "P7_incoherent_fallbackPolicy",
    closed ? "PROOF_REJECTS_INCOHERENT_ACCEPTS_COHERENT" : "PROOF_ACCEPTS",
    undefined,
    closed,
  );
}

// --- F-QA-04 six events ---
{
  const selected = projection("cyc:framing");
  const scenarios: Array<{
    failingEvent: string;
    expectedCalls: number;
    manifest: CkcReferenceManifest;
  }> = [
    {
      failingEvent: "oa.ckc.resolution_started",
      expectedCalls: 1,
      manifest: CKC_REFERENCE_MANIFEST,
    },
    {
      failingEvent: "oa.ckc.resolution_succeeded",
      expectedCalls: 2,
      manifest: CKC_REFERENCE_MANIFEST,
    },
    {
      failingEvent: "oa.ckc.fallback_used",
      expectedCalls: 2,
      manifest: {
        entries: CKC_REFERENCE_MANIFEST.entries.map((e) =>
          e.reference === selected.ckc.primaryReference
            ? { ...e, availability: "unavailable" as const }
            : e,
        ),
      },
    },
    {
      failingEvent: "oa.ckc.consumption_validated",
      expectedCalls: 4,
      manifest: {
        entries: CKC_REFERENCE_MANIFEST.entries.map((e) =>
          e.reference === selected.ckc.primaryReference
            ? { ...e, availability: "unavailable" as const }
            : e,
        ),
      },
    },
    {
      failingEvent: "oa.ckc.resolution_failed",
      expectedCalls: 2,
      manifest: {
        entries: CKC_REFERENCE_MANIFEST.entries.map((e) =>
          e.reference === selected.ckc.primaryReference ||
          e.reference === selected.ckc.fallbackReference
            ? { ...e, availability: "unavailable" as const }
            : e,
        ),
      },
    },
    {
      failingEvent: "oa.ckc.consumption_rejected",
      expectedCalls: 3,
      manifest: {
        entries: CKC_REFERENCE_MANIFEST.entries.map((e) =>
          e.reference === selected.ckc.primaryReference ||
          e.reference === selected.ckc.fallbackReference
            ? { ...e, availability: "unavailable" as const }
            : e,
        ),
      },
    },
  ];

  let allClosed = true;
  for (const scenario of scenarios) {
    let appendCalls = 0;
    let thrown = false;
    const afterThrow: string[] = [];
    const audit: CycleAuditPort = {
      append(event) {
        appendCalls += 1;
        if (thrown) afterThrow.push(event.event);
        if (event.event === scenario.failingEvent) {
          thrown = true;
          throw new Error(HOSTILE);
        }
      },
    };
    let outcome;
    let threwOut = false;
    try {
      outcome = new CkcQualificationResolver(scenario.manifest, audit).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
    } catch (e) {
      threwOut = true;
      outcome = null;
      log(
        `P8_${scenario.failingEvent}`,
        "UNCONTROLLED_THROW",
        e instanceof Error ? e.message : String(e),
        false,
      );
      allClosed = false;
      continue;
    }
    const closed =
      outcome !== null &&
      !outcome.ok &&
      outcome.error.code === "D2_INTERNAL_ERROR" &&
      outcome.error.blocking === true &&
      outcome.error.retryable === true &&
      outcome.error.recoverable === true &&
      !hasProof(outcome) &&
      outcome.resolution.exploitable === false &&
      !sanitizationLeak(outcome.error.message) &&
      appendCalls === scenario.expectedCalls &&
      afterThrow.length === 0;
    if (!closed) allClosed = false;
    log(
      `P8_${scenario.failingEvent}`,
      outcome.ok
        ? "ACCEPTS"
        : `CONTROLLED_${outcome.error.code}`,
      `calls=${appendCalls} expected=${scenario.expectedCalls} afterThrow=${afterThrow.length} leak=${sanitizationLeak(outcome.error.message)}`,
      closed,
    );
  }
  log(
    "P8_audit_matrix",
    allClosed ? "ALL_SIX_FAIL_CLOSED" : "GAPS",
    undefined,
    allClosed,
  );
}

// audit undefined / functional
{
  const selected = projection("cyc:delivery");
  const noAudit = new CkcQualificationResolver().resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  const events: string[] = [];
  const audit: CycleAuditPort = {
    append(e) {
      events.push(e.event);
    },
  };
  const withAudit = new CkcQualificationResolver(
    CKC_REFERENCE_MANIFEST,
    audit,
  ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
  const closed =
    noAudit.ok &&
    noAudit.proof.consumed === true &&
    withAudit.ok &&
    events.join(",") ===
      "oa.ckc.resolution_started,oa.ckc.resolution_succeeded,oa.ckc.consumption_validated";
  log(
    "P8b_audit_absent_and_functional",
    closed ? "NOMINAL" : "UNEXPECTED",
    `events=${events.join("|")}`,
    closed,
  );
}

// invalid metadata nonselected
{
  const selected = projection("cyc:framing");
  const invalid: CkcReferenceManifest = {
    entries: CKC_REFERENCE_MANIFEST.entries.map((e) =>
      e.reference === selected.ckc.fallbackReference
        ? ({ ...e, availability: "maybe" } as unknown as typeof e)
        : e,
    ),
  };
  const issues = validateCkcReferenceManifest(invalid);
  const outcome = new CkcQualificationResolver(invalid).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  const closed =
    !outcome.ok &&
    outcome.error.code === "CKC_RESOLUTION_INCOHERENT" &&
    issues.some((i) => i.code === "MANIFEST_METADATA_INVALID");
  log(
    "P9_invalid_metadata_nonselected",
    outcome.ok ? "RESOLVER_ACCEPTS" : `REJECT_${outcome.error.code}`,
    `validatorInvalid=${issues.some((i) => i.code === "MANIFEST_METADATA_INVALID")}`,
    closed,
  );
}

// reorder
{
  const selected = projection("cyc:delivery");
  const reordered: CkcReferenceManifest = {
    entries: [...CKC_REFERENCE_MANIFEST.entries].reverse(),
  };
  const a = new CkcQualificationResolver().resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  const b = new CkcQualificationResolver(reordered).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  const closed =
    a.ok && b.ok && JSON.stringify(a) === JSON.stringify(b);
  log(
    "P10_reorder_determinism",
    closed ? "EQUAL" : "DIVERGENT",
    undefined,
    closed,
  );
}

// order: validate before injected-manifest lookup — static evidence via source order
{
  const fs = await import("node:fs");
  const src = fs.readFileSync(
    new URL(
      "../../projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts",
      import.meta.url,
    ),
    "utf8",
  );
  const vIdx = src.indexOf("validateCkcReferenceManifest(this.manifest)");
  const lookupIdx = src.indexOf(
    "getCkcManifestEntry(\n        projection.ckc.primaryReference,\n        this.manifest,",
  );
  // fallback if formatting differs
  const lookupIdx2 = src.indexOf("this.manifest,\n      );");
  const primaryLookup = src.indexOf(
    "projection.ckc.primaryReference,\n        this.manifest",
  );
  const closed =
    vIdx >= 0 && primaryLookup > vIdx;
  log(
    "P11_validate_before_lookup",
    closed ? "ORDER_OK" : "ORDER_UNCLEAR",
    `validateAt=${vIdx} primaryLookupAt=${primaryLookup}`,
    closed,
  );
}

// resolvedAt invalid still emits started with invalid ts? (documentation probe)
{
  const selected = projection("cyc:framing");
  const events: Array<{ event: string; ts: string }> = [];
  const audit: CycleAuditPort = {
    append(e) {
      events.push({ event: e.event, ts: e.ts });
    },
  };
  const outcome = new CkcQualificationResolver(
    CKC_REFERENCE_MANIFEST,
    audit,
  ).resolve({
    projection: selected,
    resolvedAt: "not-an-iso-timestamp",
  });
  const started = events.find((e) => e.event === "oa.ckc.resolution_started");
  log(
    "P12_invalid_resolvedAt_event_ts",
    started
      ? `STARTED_EMITTED_WITH_TS=${started.ts}`
      : "STARTED_NOT_EMITTED",
    `outcome=${outcome.ok ? "ok" : outcome.error.code}; events=${events.map((e) => e.event).join("|")}`,
    // Not a F-QA reopen: document as minor reserve if started carries invalid ts
    true,
  );
}

const open = observations.filter((o) => o.closed === false);
console.log("PROBE_SUMMARY_JSON=" + JSON.stringify(observations, null, 2));
console.log(
  `PROBE_CLOSED=${observations.filter((o) => o.closed).length}/${observations.length}`,
);
console.log(`PROBE_OPEN=${open.length}`);
if (open.length) {
  console.log("OPEN_IDS=" + open.map((o) => o.id).join(","));
  process.exitCode = 2;
}

```

## Résultats tests (extrait + journal)

```
=== 1 Proof 2026-08-02T23:29:15+02:00 ===

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/ckcConsumptionProof.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 3ms

 Test Files  1 passed (1)
      Tests  8 passed (8)
   Start at  23:29:15
   Duration  365ms (transform 94ms, setup 51ms, collect 132ms, tests 3ms, environment 0ms, prepare 37ms)

=== 2 Resolver ===

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/ckcQualificationResolver.test.ts __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 5ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 5ms

 Test Files  2 passed (2)
      Tests  23 passed (23)
   Start at  23:29:16
   Duration  338ms (transform 120ms, setup 56ms, collect 305ms, tests 10ms, environment 0ms, prepare 70ms)

=== 3 D2-B ===

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/ckcReferenceManifest.test.ts __tests__/oa/cycle/ckcQualificationResolver.test.ts __tests__/oa/cycle/ckcConsumptionProof.test.ts __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 4ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 5ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 6ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 6ms

 Test Files  4 passed (4)
      Tests  36 passed (36)
   Start at  23:29:16
   Duration  418ms (transform 204ms, setup 150ms, collect 814ms, tests 21ms, environment 0ms, prepare 165ms)

=== 4 D2-A ===

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts __tests__/oa/cycle/catalogFingerprint.qa.test.ts __tests__/oa/cycle/catalogProjection.test.ts __tests__/oa/cycle/catalogProjection.qa.test.ts


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 6ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 7ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 14ms

 Test Files  4 passed (4)
      Tests  86 passed (86)
   Start at  23:29:17
   Duration  512ms (transform 245ms, setup 188ms, collect 971ms, tests 33ms, environment 0ms, prepare 215ms)

=== 5 oa/cycle ===

> sfia-studio@0.1.0 test
> vitest run __tests__/oa/cycle


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 16ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 8ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 10ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 14ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 11ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 24ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 29ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 38ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 344ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 358ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 5ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 8ms

 Test Files  12 passed (12)
      Tests  216 passed (216)
   Start at  23:29:18
   Duration  1.12s (transform 754ms, setup 696ms, collect 3.10s, tests 863ms, environment 2ms, prepare 784ms)

=== 6 typecheck ===

> sfia-studio@0.1.0 typecheck
> tsc --noEmit

TYPECHECK_EXIT:0
=== 7 lint ===

> sfia-studio@0.1.0 lint
> next lint

`next lint` is deprecated and will be removed in Next.js 16.
For new projects, use create-next-app to choose your preferred linter.
For existing projects, migrate to the ESLint CLI:
npx @next/codemod@canary next-lint-to-eslint-cli .

✔ No ESLint warnings or errors
LINT_EXIT:0
=== 8 full suite ===

> sfia-studio@0.1.0 test
> vitest run


 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:27.237Z","status":"started","intentLength":53,"sessionLocalId":"s1"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T21:29:27.366Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":129,"providerMode":"fake"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:27.367Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T21:29:27.556Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":189,"providerMode":"fake"}

 ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 461ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:27.557Z","status":"started","intentLength":22,"sessionLocalId":"s2"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T21:29:27.857Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":300,"providerMode":"fake"}

 ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 519ms
   ✓ V2-A3 Project Workspace UI > keeps workspace disclosures and shell defaults for V2-A3  361ms
stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:27.858Z","status":"started","intentLength":39,"sessionLocalId":"s4"}

stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T21:29:28.032Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":174,"providerMode":"fake","errorCode":"PROVIDER"}

 ✓ __tests__/d1/intake-c2.test.ts (13 tests) 802ms
   ✓ D1-C2 analyzeIntent service > asks for clarification then accepts an answer  490ms
 ✓ __tests__/increment-a.test.tsx (8 tests) 366ms
 ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 1182ms
   ✓ D1-C2 IntakeView > shows structured proposal without executable confirm  625ms
stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:28.771Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T21:29:28.979Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":209,"providerMode":"fake"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T21:29:28.981Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T21:29:28.982Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}

stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T21:29:28.981Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T21:29:28.982Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:28.985Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:28.985Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T21:29:28.987Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":2,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:28.987Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:28.987Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T21:29:28.988Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":1,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:28.988Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:28.988Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T21:29:29.000Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":12,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:29.001Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:29.001Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T21:29:29.001Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:29.001Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:29.001Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T21:29:29.001Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:29.002Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:29.002Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T21:29:29.002Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:29.002Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:29.002Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T21:29:29.002Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:29.002Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:29.003Z","status":"EMPTY","sessionLocalId":"m8","durationMs":1,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T21:29:29.003Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":1,"proposalId":"rrp-e","sourceProjectCount":0}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:29.003Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:29.003Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T21:29:29.004Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":1,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}

stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
{"event":"d1.project_create","ts":"2026-08-02T21:29:29.015Z","status":"ok","projectId":"proj-2d071c99-5ae2-4e23-923c-be39a046fa8c","durationMs":1}
{"event":"d1.project_create","ts":"2026-08-02T21:29:29.016Z","status":"ok","projectId":"proj-ce61f8e3-9394-4d9b-b102-25beac5f1c5c","durationMs":1}
[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T21:29:29.016Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T21:29:29.017Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T21:29:29.017Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}

 ✓ __tests__/d1/intake-c3.test.ts (16 tests) 250ms
 ✓ __tests__/shell.test.tsx (1 test) 101ms
 ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 200ms
 ✓ __tests__/increment-e.test.tsx (4 tests) 131ms
 ✓ __tests__/increment-c.test.tsx (8 tests) 2058ms
   ✓ Increment C — editable demand + confirmation > accepts editable Campus360 demand and shows exact text in confirmation  597ms
   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  494ms
   ✓ Increment C — editable demand + confirmation > abandon from confirmation does not call GPT  408ms
   ✓ Increment C — editable demand + confirmation > transmits exact demandText to qualifyAction (anti-substitution)  375ms
 ✓ __tests__/increment-d.test.tsx (5 tests) 105ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T21:29:29.917Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.918Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T21:29:29.918Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
{"event":"d1.project_create","ts":"2026-08-02T21:29:29.920Z","status":"ok","projectId":"proj-2b3ffa36-83ee-4854-9353-0948ed1a3630","durationMs":2}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T21:29:29.921Z","status":"SUCCEEDED","projectId":"proj-2b3ffa36-83ee-4854-9353-0948ed1a3630","sessionLocalId":"s1","durationMs":3,"proposalId":"rrp-1"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.930Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T21:29:29.930Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
{"event":"d1.project_create","ts":"2026-08-02T21:29:29.931Z","status":"ok","projectId":"proj-4a0d8d3c-2fa6-4270-8a4f-86e29351e4ea","durationMs":1}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T21:29:29.932Z","status":"SUCCEEDED","projectId":"proj-4a0d8d3c-2fa6-4270-8a4f-86e29351e4ea","sessionLocalId":"s2","durationMs":2,"proposalId":"rrp-2"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.932Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T21:29:29.932Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T21:29:29.932Z","status":"ALREADY_APPLIED","projectId":"proj-4a0d8d3c-2fa6-4270-8a4f-86e29351e4ea","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}

 ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 99ms
stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.941Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T21:29:29.941Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
{"event":"d1.project_create","ts":"2026-08-02T21:29:29.943Z","status":"ok","projectId":"proj-822cde17-9719-4766-991e-d6ab0bab8770","durationMs":2}
[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T21:29:29.943Z","status":"SUCCEEDED","projectId":"proj-822cde17-9719-4766-991e-d6ab0bab8770","sessionLocalId":"s3","durationMs":2,"proposalId":"rrp-3"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.943Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T21:29:29.943Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T21:29:29.943Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
{"event":"d1.project_create","ts":"2026-08-02T21:29:29.954Z","status":"ok","projectId":"proj-84f5b71b-98d1-4fb8-993c-0876c4e47cc6","durationMs":2}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.954Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T21:29:29.954Z","status":"NO_MUTATION","projectId":"proj-84f5b71b-98d1-4fb8-993c-0876c4e47cc6","sessionLocalId":"s4","durationMs":0,"proposalId":"rrp-4"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
{"event":"d1.project_create","ts":"2026-08-02T21:29:29.962Z","status":"ok","projectId":"proj-e3524231-61c3-4c14-97ff-0e16b1e599be","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T21:29:29.963Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T21:29:29.964Z","status":"ok","projectId":"proj-e3524231-61c3-4c14-97ff-0e16b1e599be","durationMs":2}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.964Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T21:29:29.964Z","status":"STALE","projectId":"proj-e3524231-61c3-4c14-97ff-0e16b1e599be","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.973Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T21:29:29.973Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.974Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T21:29:29.974Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}

stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T21:29:29.980Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T21:29:29.980Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}

 ✓ __tests__/d1/intake-c4.test.ts (10 tests) 78ms
 ✓ __tests__/navigation.test.tsx (2 tests) 148ms
 ✓ __tests__/gates.test.tsx (1 test) 76ms
 ✓ __tests__/ops1/executionI5.test.ts (5 tests) 3206ms
   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  1506ms
   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  629ms
   ✓ ops1 I5 execution contract + fixture run > refuses real adapter without OPS1_CURSOR_REAL and never falls back to fixture  346ms
   ✓ ops1 I5 execution contract + fixture run > rejects run adapterMode mismatch (no silent real→fixture swap)  485ms
stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
{"event":"d1.project_create","ts":"2026-08-02T21:29:30.407Z","status":"ok","projectId":"proj-7899924c-ea7d-4c21-a5b1-9704f8b3b4f9","durationMs":2}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
{"event":"d1.project_create","ts":"2026-08-02T21:29:30.419Z","status":"ok","projectId":"proj-82f3588d-0e66-4585-a8b0-a0f763f7be0e","durationMs":2}
{"event":"d1.project_create","ts":"2026-08-02T21:29:30.420Z","status":"idempotent","projectId":"proj-82f3588d-0e66-4585-a8b0-a0f763f7be0e","durationMs":1}

stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
{"event":"d1.project_create","ts":"2026-08-02T21:29:30.427Z","status":"ok","projectId":"proj-c535e9a5-8acd-44e6-89ee-9c3e614fce77","durationMs":1}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T21:29:30.427Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T21:29:30.429Z","status":"ok","projectId":"proj-c535e9a5-8acd-44e6-89ee-9c3e614fce77","durationMs":2}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T21:29:30.429Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T21:29:30.429Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

 ✓ __tests__/d1/project-foundation.test.ts (7 tests) 36ms
 ✓ __tests__/increment-b.test.tsx (6 tests) 69ms
 ✓ __tests__/ops1/domain.test.ts (6 tests) 4ms
 ✓ __tests__/status-pill.test.tsx (1 test) 23ms
 ✓ __tests__/fixtures.test.ts (2 tests) 5ms
 ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 27ms
 ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 5ms
stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:31.189Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T21:29:31.349Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":161,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:31.351Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T21:29:31.580Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":229,"providerMode":"fake"}

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-04ecd08d-dfff-4202-bb76-651487de04c1 ops1-att-50224224-f9e5-42ab-a23f-94040490243e fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-04ecd08d-dfff-4202-bb76-651487de04c1 ops1-att-50224224-f9e5-42ab-a23f-94040490243e 15 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-04ecd08d-dfff-4202-bb76-651487de04c1 ops1-att-3b7c214d-e12a-4eb8-9145-65b038dc1e51 fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-04ecd08d-dfff-4202-bb76-651487de04c1 ops1-att-3b7c214d-e12a-4eb8-9145-65b038dc1e51 30 tools=0

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-04ecd08d-dfff-4202-bb76-651487de04c1 ops1-att-b7cc90cc-dbe8-48ee-a4a4-bf437f51595b fake-test

stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-04ecd08d-dfff-4202-bb76-651487de04c1 ops1-att-b7cc90cc-dbe8-48ee-a4a4-bf437f51595b 45 tools=0

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:31.581Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T21:29:31.749Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":168,"providerMode":"fake"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T21:29:31.749Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}

stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T21:29:31.750Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":1,"providerMode":"fake"}

 ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 565ms
 ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 170ms
 ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 181ms
stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-8b33753f-6134-4a6e-b4ec-878a19950ff2 ops1-att-7955c7a8-a390-4d69-abc9-289686824714 fake-test

stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-8b33753f-6134-4a6e-b4ec-878a19950ff2 ops1-att-7955c7a8-a390-4d69-abc9-289686824714 45 tools=1

 ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 989ms
   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  587ms
 ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 279ms
stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-cc76a61e-7239-49e6-9c24-e305224a7dfe ops1-att-c8ecd4f7-5f36-494a-ae55-fc46d4ed0ca6 fake-test

stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-cc76a61e-7239-49e6-9c24-e305224a7dfe ops1-att-c8ecd4f7-5f36-494a-ae55-fc46d4ed0ca6 INTERNAL

 ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 1146ms
   ✓ ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write  523ms
   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  470ms
 ✓ __tests__/ops1/actionGate.test.ts (10 tests) 244ms
 ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 272ms
 ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 185ms
 ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 5342ms
   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  2540ms
   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  581ms
   ✓ V2-A2 Create Project UI > keeps the idempotency key stable across a retry  316ms
   ✓ V2-A2 Create Project UI > disables submit and announces pending state  331ms
   ✓ V2-A2 Create Project UI > renders the real success projection inline and renews the key on reset  329ms
   ✓ V2-A2 Create Project UI > renders identical constraints twice without duplicate React key warnings  337ms
 ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 239ms
 ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 198ms
 ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 200ms
 ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 272ms
 ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 176ms
 ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 198ms
 ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 254ms
 ✓ __tests__/ops1/repository.test.ts (6 tests) 129ms
 ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 153ms
 ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 105ms
 ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 114ms
 ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 158ms
 ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 176ms
 ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 59ms
 ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 57ms
 ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 42ms
 ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 19ms
 ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 84ms
 ✓ __tests__/ops1/executionI6.test.ts (10 tests) 6800ms
   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  1323ms
   ✓ ops1 I6 report + continuation > COMPLETED impossible without mandatory coverage evidence  329ms
   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  1069ms
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  904ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  1061ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  1054ms
 ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 39ms
 ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 4ms
 ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 23ms
 ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 34ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 29ms
 ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 51ms
 ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 41ms
 ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 22ms
 ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 37ms
 ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 29ms
 ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 33ms
 ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 17ms
 ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 37ms
stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T21:29:34.934Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.project_create","ts":"2026-08-02T21:29:34.944Z","status":"ok","projectId":"proj-8ad1af86-0118-48bb-8767-e55d52573a02","durationMs":2}
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T21:29:34.945Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T21:29:34.945Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
{"event":"d1.project_create","ts":"2026-08-02T21:29:34.953Z","status":"ok","projectId":"proj-09757636-948d-47c8-abff-7086df464da2","durationMs":2}
{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T21:29:34.953Z","status":"allowed","provenance":"test-override"}
{"event":"d1.method_mode_selected","ts":"2026-08-02T21:29:34.954Z","status":"ok","projectId":"proj-09757636-948d-47c8-abff-7086df464da2","durationMs":1}

stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T21:29:34.955Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}

 ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 28ms
 ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 11ms
 ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 16ms
 ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 17ms
 ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 13ms
 ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 16ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.test.ts (14 tests) 11ms
 ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 15ms
 ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 18ms
 ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 17ms
 ✓ __tests__/oa/cycle/ckcQualificationResolver.qa.test.ts (9 tests) 11ms
 ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 24ms
 ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 11ms
 ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 13ms
 ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 17ms
 ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 9ms
 ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 10ms
 ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 14ms
 ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 13ms
 ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 10ms
 ✓ __tests__/oa/cycle/ckcConsumptionProof.test.ts (8 tests) 10ms
 ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 8ms
 ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 9ms
 ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 9ms
 ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 9ms
 ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 5178ms
   ✓ SFIA context resolver > builds context with hierarchy and does not promote candidate decisions  379ms
   ✓ SFIA context resolver > detects context stale on head mismatch  533ms
   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  518ms
   ✓ SFIA action compiler > denies commit/push operations  522ms
   ✓ SFIA action compiler > denies protected path  498ms
   ✓ SFIA action compiler > denies context stale  486ms
   ✓ SFIA action compiler > preserves exact content  473ms
   ✓ SFIA action compiler > instantiates cursor prompt from real template  556ms
   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  597ms
   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  532ms
 ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 9ms
 ✓ __tests__/oa/cycle/ckcReferenceManifest.test.ts (5 tests) 5ms
 ✓ __tests__/platform/platform-ai.test.ts (5 tests) 11ms
 ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 4ms
 ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 8ms
 ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 3ms
 ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms

 Test Files  98 passed (98)
      Tests  949 passed (949)
   Start at  23:29:26
   Duration  10.54s (transform 4.76s, setup 5.97s, collect 17.86s, tests 34.71s, environment 10.08s, prepare 6.52s)

TEST_EXIT:0
=== 9 build ===

> sfia-studio@0.1.0 build
> next build

   ▲ Next.js 15.5.20

   Creating an optimized production build ...
 ✓ Compiled successfully in 1101ms
   Linting and checking validity of types ...
   Collecting page data ...
   Generating static pages (0/10) ...
   Generating static pages (2/10)
   Generating static pages (4/10)
   Generating static pages (7/10)
 ✓ Generating static pages (10/10)
   Finalizing page optimization ...
   Collecting build traces ...

Route (app)                                 Size  First Load JS
┌ ○ /                                      127 B         103 kB
├ ○ /_not-found                            127 B         103 kB
├ ○ /cycle-actif                         3.82 kB         119 kB
├ ○ /decision                            5.53 kB         120 kB
├ ƒ /nouvelle-demande                    10.1 kB         116 kB
├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
├ ƒ /projects/[id]                       2.66 kB         108 kB
├ ○ /projects/new                        2.62 kB         108 kB
├ ƒ /studio/projects/[id]                2.15 kB         112 kB
├ ○ /studio/projects/new                 4.07 kB         114 kB
├ ○ /synthese                            4.83 kB         120 kB
└ ƒ /workspace                             571 B         106 kB
+ First Load JS shared by all             102 kB
  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
  └ other shared chunks (total)          1.96 kB


○  (Static)   prerendered as static content
ƒ  (Dynamic)  server-rendered on demand

BUILD_EXIT:0
```

## Contenu complet des treize fichiers du package


### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts`

```typescript
import type {
  CycleTypeCkcMapping,
  CycleTypeLifecycleStatus,
} from "./cycleTypeCatalog";
import type {
  CkcFallbackPolicy,
  CkcLevel,
  CkcSource,
  CkcStatus,
} from "./types";

/** Read-only context required to select a cycle type from the D1 catalog. */
export type CatalogSelectionContext = {
  readonly cycleTypeId: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

/** Closed projection of contractually relevant catalog fields for HASH-A. */
export type CatalogFingerprintEntry = {
  readonly cycleTypeId: string;
  readonly canonicalKey: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly methodCycleNumber: number;
  readonly ckc: {
    readonly mandatory: true;
    readonly primaryLevel: "detailed" | "synthetic";
    readonly primaryReference: string;
    readonly fallbackPolicy: "synthetic_map" | "none";
    readonly fallbackReference: string | null;
    readonly executionAuthority: false;
    readonly doctrineStatus: "method-candidate";
    readonly unavailableBehavior: "fail-closed";
  };
};

/** Validated read-only D1 projection passed to the later D2-B boundary. */
export type ValidatedCycleTypeProjection = {
  readonly cycleTypeId: string;
  readonly label: string;
  readonly shortDescription: string;
  readonly lifecycleStatus: CycleTypeLifecycleStatus;
  readonly ckc: Readonly<CycleTypeCkcMapping>;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
};

export type CatalogProjectionErrorCode =
  | "CATALOG_CORRELATION_ID_REQUIRED"
  | "CATALOG_VERSION_INCOMPATIBLE"
  | "CATALOG_FINGERPRINT_STALE"
  | "CYCLE_TYPE_UNKNOWN"
  | "CYCLE_TYPE_NOT_SELECTABLE"
  | "CYCLE_TYPE_MAPPING_INVALID";

export type CatalogProjectionError = {
  readonly code: CatalogProjectionErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId?: string;
  readonly cycleTypeId?: string;
  readonly lifecycleStatus?: CycleTypeLifecycleStatus;
};

export type CatalogProjectionSuccess = {
  readonly ok: true;
  readonly projection: ValidatedCycleTypeProjection;
};

export type CatalogProjectionFailure = {
  readonly ok: false;
  readonly error: CatalogProjectionError;
};

export type CatalogProjectionResult =
  | CatalogProjectionSuccess
  | CatalogProjectionFailure;

/** Detailed D2-B state retained alongside the deliberately coarser T-A2 types. */
export type CkcQualificationDetailedStatus =
  | "resolved_detailed"
  | "resolved_synthetic"
  | "resolved_fallback_synthetic"
  | "unresolved_invalid_mapping"
  | "unresolved_unavailable"
  | "unresolved_catalog_incompatible"
  | "unresolved_cycle_not_selectable";

/** Immutable output of the D2-B resolver before consumption proof validation. */
export type CkcQualificationResolution = {
  readonly cycleTypeId: string;
  readonly detailedStatus: CkcQualificationDetailedStatus;
  readonly level: CkcLevel;
  readonly status: CkcStatus;
  readonly source: CkcSource;
  readonly fallbackPolicy: CkcFallbackPolicy;
  readonly expectedPrimaryReference: string;
  readonly usedReference?: string;
  readonly fallbackUsed: boolean;
  readonly fallbackReference?: string;
  readonly doctrineStatus: "method-candidate";
  readonly executionAuthority: false;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly resolvedAt: string;
  readonly exploitable: boolean;
  readonly disclosures: readonly string[];
};

```

### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationErrors.ts`

```typescript
import type { CkcQualificationDetailedStatus } from "./ckcQualificationContracts";

export type CkcQualificationErrorCode =
  | "CKC_MAPPING_INVALID"
  | "CKC_UNAVAILABLE"
  | "CKC_SYNTHETIC_INVALID"
  | "CKC_RESOLUTION_INCOHERENT"
  | "CKC_EXECUTION_AUTHORITY_FORBIDDEN"
  | "D2_INTERNAL_ERROR";

export type CkcQualificationError = {
  readonly code: CkcQualificationErrorCode;
  readonly message: string;
  readonly blocking: true;
  readonly retryable: boolean;
  readonly recoverable: boolean;
  readonly correlationId: string;
  readonly cycleTypeId: string;
  readonly detailedStatus?: CkcQualificationDetailedStatus;
};

const SAFE_MESSAGES: Readonly<Record<CkcQualificationErrorCode, string>> =
  Object.freeze({
    CKC_MAPPING_INVALID: "The CKC mapping is invalid.",
    CKC_UNAVAILABLE: "No authorized CKC source is available.",
    CKC_SYNTHETIC_INVALID: "The authorized synthetic CKC source is unavailable.",
    CKC_RESOLUTION_INCOHERENT: "The CKC resolution is incoherent.",
    CKC_EXECUTION_AUTHORITY_FORBIDDEN:
      "A CKC cannot hold execution authority.",
    D2_INTERNAL_ERROR: "The CKC resolution could not be completed.",
  });

export function createCkcQualificationError(input: {
  readonly code: CkcQualificationErrorCode;
  readonly correlationId: string;
  readonly cycleTypeId: string;
  readonly detailedStatus?: CkcQualificationDetailedStatus;
}): CkcQualificationError {
  const retryable = input.code === "D2_INTERNAL_ERROR";
  return Object.freeze({
    code: input.code,
    message: SAFE_MESSAGES[input.code],
    blocking: true as const,
    retryable,
    recoverable: retryable,
    correlationId: input.correlationId,
    cycleTypeId: input.cycleTypeId,
    ...(input.detailedStatus
      ? { detailedStatus: input.detailedStatus }
      : {}),
  });
}

```

### `projects/sfia-studio/app/lib/oa/cycle/domain/ckcConsumptionProof.ts`

```typescript
import type {
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "./ckcQualificationContracts";
import {
  createCkcQualificationError,
  type CkcQualificationError,
} from "./ckcQualificationErrors";
import type { CkcLevel, CkcSource, CkcStatus } from "./types";

export type CkcConsumptionProof = {
  readonly cycleTypeId: string;
  readonly detailedStatus:
    | "resolved_detailed"
    | "resolved_synthetic"
    | "resolved_fallback_synthetic";
  readonly level: CkcLevel;
  readonly status: CkcStatus;
  readonly source: CkcSource;
  readonly expectedPrimaryReference: string;
  readonly usedReference: string;
  readonly fallbackUsed: boolean;
  readonly fallbackReference?: string;
  readonly catalogVersion: string;
  readonly catalogHash: string;
  readonly correlationId: string;
  readonly resolvedAt: string;
  readonly doctrineStatus: "method-candidate";
  readonly executionAuthority: false;
  readonly consumed: true;
  readonly disclosures: readonly string[];
};

export type CkcConsumptionProofResult =
  | { readonly ok: true; readonly proof: CkcConsumptionProof }
  | { readonly ok: false; readonly error: CkcQualificationError };

const RESOLVED_STATES = new Set([
  "resolved_detailed",
  "resolved_synthetic",
  "resolved_fallback_synthetic",
]);

const FALLBACK_DISCLOSURE = "CKC_FALLBACK_USED";

const ISO_DATE_TIME =
  /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/;

/** Pure ISO-8601 / RFC3339 date-time check with explicit timezone. */
export function isIso8601DateTime(value: string): boolean {
  if (typeof value !== "string" || value.length === 0 || value !== value.trim()) {
    return false;
  }
  const match = ISO_DATE_TIME.exec(value);
  if (!match) {
    return false;
  }
  const ms = Date.parse(value);
  if (!Number.isFinite(ms)) {
    return false;
  }
  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  const hour = Number(match[4]);
  const minute = Number(match[5]);
  const second = Number(match[6]);
  if (
    month < 1 ||
    month > 12 ||
    day < 1 ||
    day > 31 ||
    hour > 23 ||
    minute > 59 ||
    second > 59
  ) {
    return false;
  }
  const probe = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return (
    probe.getUTCFullYear() === year &&
    probe.getUTCMonth() === month - 1 &&
    probe.getUTCDate() === day &&
    probe.getUTCHours() === hour &&
    probe.getUTCMinutes() === minute &&
    probe.getUTCSeconds() === second
  );
}

function expectedFallbackPolicy(
  projection: ValidatedCycleTypeProjection,
): "intra_v3_only" | "none" {
  return projection.ckc.fallbackPolicy === "synthetic_map"
    ? "intra_v3_only"
    : "none";
}

function fallbackDisclosureCount(
  disclosures: readonly string[],
): number {
  return disclosures.filter((item) => item === FALLBACK_DISCLOSURE).length;
}

function isProjectionConsistent(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): boolean {
  if (
    projection.cycleTypeId !== resolution.cycleTypeId ||
    projection.catalogVersion !== resolution.catalogVersion ||
    projection.catalogHash !== resolution.catalogHash ||
    projection.correlationId !== resolution.correlationId ||
    projection.ckc.primaryReference !== resolution.expectedPrimaryReference ||
    projection.ckc.fallbackReference !== resolution.fallbackReference ||
    resolution.doctrineStatus !== "method-candidate" ||
    resolution.executionAuthority !== false ||
    !isIso8601DateTime(resolution.resolvedAt) ||
    !resolution.usedReference ||
    !resolution.exploitable ||
    !RESOLVED_STATES.has(resolution.detailedStatus) ||
    resolution.fallbackPolicy !== expectedFallbackPolicy(projection)
  ) {
    return false;
  }

  const disclosureCount = fallbackDisclosureCount(resolution.disclosures);

  if (resolution.detailedStatus === "resolved_detailed") {
    return (
      resolution.level === "detailed" &&
      resolution.status === "resolved" &&
      resolution.source === "repository_candidate" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
    );
  }

  if (resolution.detailedStatus === "resolved_synthetic") {
    return (
      projection.ckc.primaryLevel === "synthetic" &&
      resolution.level === "synthetic" &&
      resolution.status === "synthetic" &&
      resolution.source === "intra_v3_synthetic" &&
      resolution.fallbackUsed === false &&
      resolution.usedReference === projection.ckc.primaryReference &&
      disclosureCount === 0
    );
  }

  return (
    projection.ckc.primaryLevel === "detailed" &&
    projection.ckc.fallbackPolicy === "synthetic_map" &&
    Boolean(projection.ckc.fallbackReference) &&
    resolution.level === "synthetic" &&
    resolution.status === "synthetic" &&
    resolution.source === "intra_v3_synthetic" &&
    resolution.fallbackUsed === true &&
    resolution.usedReference === projection.ckc.fallbackReference &&
    disclosureCount === 1
  );
}

/** Pure fail-closed proof builder. Functional failures are values, not throws. */
export function buildCkcConsumptionProof(
  projection: ValidatedCycleTypeProjection,
  resolution: CkcQualificationResolution,
): CkcConsumptionProofResult {
  if (!isProjectionConsistent(projection, resolution)) {
    return {
      ok: false,
      error: createCkcQualificationError({
        code: "CKC_RESOLUTION_INCOHERENT",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: resolution.detailedStatus,
      }),
    };
  }

  const proof = {
    cycleTypeId: resolution.cycleTypeId,
    detailedStatus: resolution.detailedStatus as
      | "resolved_detailed"
      | "resolved_synthetic"
      | "resolved_fallback_synthetic",
    level: resolution.level,
    status: resolution.status,
    source: resolution.source,
    expectedPrimaryReference: resolution.expectedPrimaryReference,
    usedReference: resolution.usedReference as string,
    fallbackUsed: resolution.fallbackUsed,
    ...(resolution.fallbackReference
      ? { fallbackReference: resolution.fallbackReference }
      : {}),
    catalogVersion: resolution.catalogVersion,
    catalogHash: resolution.catalogHash,
    correlationId: resolution.correlationId,
    resolvedAt: resolution.resolvedAt,
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    consumed: true as const,
    disclosures: Object.freeze([...resolution.disclosures]),
  };

  return { ok: true, proof: Object.freeze(proof) };
}

```

### `projects/sfia-studio/app/lib/oa/cycle/ports/ckcQualificationResolver.ts`

```typescript
import type {
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "../domain/ckcQualificationContracts";
import type { CkcConsumptionProof } from "../domain/ckcConsumptionProof";
import type { CkcQualificationError } from "../domain/ckcQualificationErrors";

export type CkcQualificationResolveInput = {
  readonly projection: ValidatedCycleTypeProjection;
  readonly resolvedAt: string;
};

export type CkcQualificationResolutionOutcome =
  | {
      readonly ok: true;
      readonly resolution: CkcQualificationResolution;
      readonly proof: CkcConsumptionProof;
    }
  | {
      readonly ok: false;
      readonly resolution: CkcQualificationResolution;
      readonly error: CkcQualificationError;
    };

/** Synchronous D2-B boundary: manifest-backed, deterministic and I/O-free. */
export interface CkcQualificationResolverPort {
  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome;
}

```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcReferenceManifest.ts`

```typescript
import {
  CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
  CKC_PILOT_CADRAGE_PATH,
  CKC_PILOT_CONCEPTION_PATH,
  CKC_PILOT_QA_VALIDATION_PATH,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  type CycleTypeCatalog,
} from "../domain/cycleTypeCatalog";
import type { CkcSource } from "../domain/types";

export type CkcReferenceManifestEntry = {
  readonly reference: string;
  readonly level: "detailed" | "synthetic";
  readonly version: string | null;
  readonly doctrineStatus: "method-candidate";
  readonly source: Extract<
    CkcSource,
    "repository_candidate" | "intra_v3_synthetic"
  >;
  readonly availability: "available" | "unavailable";
  readonly executionAuthority: false;
};

export type CkcReferenceManifest = {
  readonly entries: readonly CkcReferenceManifestEntry[];
};

export type CkcReferenceManifestIssue = {
  readonly code:
    | "MANIFEST_DUPLICATE"
    | "MANIFEST_UNKNOWN_REFERENCE"
    | "MANIFEST_REFERENCE_MISSING"
    | "MANIFEST_LEVEL_INCOHERENT"
    | "MANIFEST_METADATA_INVALID";
  readonly message: string;
};

function entry(
  value: CkcReferenceManifestEntry,
): CkcReferenceManifestEntry {
  return Object.freeze(value);
}

export const CKC_REFERENCE_MANIFEST: CkcReferenceManifest = Object.freeze({
  entries: Object.freeze([
    entry({
      reference: CKC_PILOT_CADRAGE_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_CONCEPTION_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_ARCHITECTURE_TECHNIQUE_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_PILOT_QA_VALIDATION_PATH,
      level: "detailed",
      version: "0.1.0",
      doctrineStatus: "method-candidate",
      source: "repository_candidate",
      availability: "available",
      executionAuthority: false,
    }),
    entry({
      reference: CKC_SYNTHETIC_MAP_PATH,
      level: "synthetic",
      version: null,
      doctrineStatus: "method-candidate",
      source: "intra_v3_synthetic",
      availability: "available",
      executionAuthority: false,
    }),
  ]),
});

export function getCkcManifestEntry(
  reference: string,
  manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
): CkcReferenceManifestEntry | undefined {
  return manifest.entries.find((candidate) => candidate.reference === reference);
}

/** Pure catalogue-to-manifest allowlist validation. */
export function validateCkcReferenceManifest(
  manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
  catalog: CycleTypeCatalog = CYCLE_TYPE_CATALOG,
): CkcReferenceManifestIssue[] {
  const issues: CkcReferenceManifestIssue[] = [];
  const expected = new Map<string, "detailed" | "synthetic">();

  for (const catalogEntry of catalog.entries) {
    expected.set(
      catalogEntry.ckc.primaryReference,
      catalogEntry.ckc.primaryLevel,
    );
    if (catalogEntry.ckc.fallbackReference) {
      expected.set(catalogEntry.ckc.fallbackReference, "synthetic");
    }
  }

  const seen = new Set<string>();
  for (const manifestEntry of manifest.entries) {
    if (seen.has(manifestEntry.reference)) {
      issues.push({
        code: "MANIFEST_DUPLICATE",
        message: "The CKC manifest contains a duplicate reference.",
      });
      continue;
    }
    seen.add(manifestEntry.reference);

    const expectedLevel = expected.get(manifestEntry.reference);
    if (!expectedLevel) {
      issues.push({
        code: "MANIFEST_UNKNOWN_REFERENCE",
        message: "The CKC manifest contains an unauthorized reference.",
      });
    } else if (
      manifestEntry.level !== expectedLevel ||
      (manifestEntry.level === "detailed" &&
        manifestEntry.source !== "repository_candidate") ||
      (manifestEntry.level === "synthetic" &&
        manifestEntry.source !== "intra_v3_synthetic")
    ) {
      issues.push({
        code: "MANIFEST_LEVEL_INCOHERENT",
        message: "The CKC manifest level or source is incoherent.",
      });
    }

    if (
      manifestEntry.doctrineStatus !== "method-candidate" ||
      manifestEntry.executionAuthority !== false ||
      !["available", "unavailable"].includes(manifestEntry.availability)
    ) {
      issues.push({
        code: "MANIFEST_METADATA_INVALID",
        message: "The CKC manifest metadata is invalid.",
      });
    }
  }

  for (const reference of expected.keys()) {
    if (!seen.has(reference)) {
      issues.push({
        code: "MANIFEST_REFERENCE_MISSING",
        message: "An authorized catalogue CKC reference is missing.",
      });
    }
  }

  return issues;
}

```

### `projects/sfia-studio/app/lib/oa/cycle/infrastructure/ckcQualificationResolver.ts`

```typescript
import {
  buildCkcConsumptionProof,
  isIso8601DateTime,
  type CkcConsumptionProofResult,
} from "../domain/ckcConsumptionProof";
import type {
  CkcQualificationDetailedStatus,
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "../domain/ckcQualificationContracts";
import {
  createCkcQualificationError,
  type CkcQualificationErrorCode,
} from "../domain/ckcQualificationErrors";
import type { CycleAuditPort } from "../ports/cycleAudit";
import type {
  CkcQualificationResolutionOutcome,
  CkcQualificationResolveInput,
  CkcQualificationResolverPort,
} from "../ports/ckcQualificationResolver";
import {
  CKC_REFERENCE_MANIFEST,
  getCkcManifestEntry,
  validateCkcReferenceManifest,
  type CkcReferenceManifest,
  type CkcReferenceManifestEntry,
} from "./ckcReferenceManifest";

const MAPPING_KEYS = new Set([
  "mandatory",
  "primaryLevel",
  "primaryReference",
  "fallbackPolicy",
  "fallbackReference",
  "executionAuthority",
  "doctrineStatus",
  "unavailableBehavior",
]);

function isMappingShapeValid(
  projection: ValidatedCycleTypeProjection,
): boolean {
  const mapping = projection.ckc;
  if (
    !mapping ||
    Object.keys(mapping).some((key) => !MAPPING_KEYS.has(key)) ||
    mapping.mandatory !== true ||
    mapping.doctrineStatus !== "method-candidate" ||
    mapping.unavailableBehavior !== "fail-closed"
  ) {
    return false;
  }

  if (mapping.primaryLevel === "detailed") {
    return (
      mapping.fallbackPolicy === "synthetic_map" &&
      typeof mapping.fallbackReference === "string" &&
      Boolean(mapping.fallbackReference.trim())
    );
  }

  return (
    mapping.primaryLevel === "synthetic" &&
    mapping.fallbackPolicy === "none" &&
    mapping.fallbackReference === undefined
  );
}

function isUsable(
  entry: CkcReferenceManifestEntry | undefined,
  level: "detailed" | "synthetic",
): entry is CkcReferenceManifestEntry {
  return Boolean(
    entry &&
      entry.level === level &&
      entry.availability === "available" &&
      entry.doctrineStatus === "method-candidate" &&
      entry.executionAuthority === false &&
      ((level === "detailed" && entry.source === "repository_candidate") ||
        (level === "synthetic" &&
          entry.source === "intra_v3_synthetic")),
  );
}

function resolution(
  projection: ValidatedCycleTypeProjection,
  resolvedAt: string,
  input: {
    readonly detailedStatus: CkcQualificationDetailedStatus;
    readonly level: CkcQualificationResolution["level"];
    readonly status: CkcQualificationResolution["status"];
    readonly source: CkcQualificationResolution["source"];
    readonly usedReference?: string;
    readonly fallbackUsed: boolean;
    readonly exploitable: boolean;
    readonly disclosures?: readonly string[];
  },
): CkcQualificationResolution {
  return Object.freeze({
    cycleTypeId: projection.cycleTypeId,
    detailedStatus: input.detailedStatus,
    level: input.level,
    status: input.status,
    source: input.source,
    fallbackPolicy:
      projection.ckc.fallbackPolicy === "synthetic_map"
        ? ("intra_v3_only" as const)
        : ("none" as const),
    expectedPrimaryReference: projection.ckc.primaryReference,
    ...(input.usedReference ? { usedReference: input.usedReference } : {}),
    fallbackUsed: input.fallbackUsed,
    ...(projection.ckc.fallbackReference
      ? { fallbackReference: projection.ckc.fallbackReference }
      : {}),
    doctrineStatus: "method-candidate" as const,
    executionAuthority: false as const,
    catalogVersion: projection.catalogVersion,
    catalogHash: projection.catalogHash,
    correlationId: projection.correlationId,
    resolvedAt,
    exploitable: input.exploitable,
    disclosures: Object.freeze([...(input.disclosures ?? [])]),
  });
}

export class CkcQualificationResolver
  implements CkcQualificationResolverPort
{
  constructor(
    private readonly manifest: CkcReferenceManifest = CKC_REFERENCE_MANIFEST,
    private readonly audit?: CycleAuditPort,
  ) {}

  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome {
    const { projection, resolvedAt } = input;

    if (!this.tryEmit("oa.ckc.resolution_started", projection, resolvedAt, "started")) {
      return this.auditFailure(projection, resolvedAt);
    }

    try {
      if (!isIso8601DateTime(resolvedAt)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }
      if (projection.ckc.executionAuthority !== false) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
        );
      }
      if (!isMappingShapeValid(projection)) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const manifestIssues = validateCkcReferenceManifest(this.manifest);
      if (manifestIssues.length > 0) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_RESOLUTION_INCOHERENT",
        );
      }

      const allowlistedPrimary = getCkcManifestEntry(
        projection.ckc.primaryReference,
        CKC_REFERENCE_MANIFEST,
      );
      const allowlistedFallback = projection.ckc.fallbackReference
        ? getCkcManifestEntry(
            projection.ckc.fallbackReference,
            CKC_REFERENCE_MANIFEST,
          )
        : undefined;
      if (
        !allowlistedPrimary ||
        allowlistedPrimary.level !== projection.ckc.primaryLevel ||
        (projection.ckc.primaryLevel === "detailed" &&
          (!allowlistedFallback ||
            allowlistedFallback.level !== "synthetic")) ||
        (projection.ckc.primaryLevel === "synthetic" && allowlistedFallback)
      ) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_invalid_mapping",
          "CKC_MAPPING_INVALID",
        );
      }

      const primary = getCkcManifestEntry(
        projection.ckc.primaryReference,
        this.manifest,
      );

      if (projection.ckc.primaryLevel === "synthetic") {
        if (!isUsable(primary, "synthetic")) {
          return this.failure(
            projection,
            resolvedAt,
            "unresolved_unavailable",
            "CKC_SYNTHETIC_INVALID",
          );
        }
        return this.success(
          projection,
          resolution(projection, resolvedAt, {
            detailedStatus: "resolved_synthetic",
            level: "synthetic",
            status: "synthetic",
            source: "intra_v3_synthetic",
            usedReference: projection.ckc.primaryReference,
            fallbackUsed: false,
            exploitable: true,
          }),
        );
      }

      if (isUsable(primary, "detailed")) {
        return this.success(
          projection,
          resolution(projection, resolvedAt, {
            detailedStatus: "resolved_detailed",
            level: "detailed",
            status: "resolved",
            source: "repository_candidate",
            usedReference: projection.ckc.primaryReference,
            fallbackUsed: false,
            exploitable: true,
          }),
        );
      }

      const fallbackReference = projection.ckc.fallbackReference as string;
      const fallback = getCkcManifestEntry(
        fallbackReference,
        this.manifest,
      );
      if (!isUsable(fallback, "synthetic")) {
        return this.failure(
          projection,
          resolvedAt,
          "unresolved_unavailable",
          "CKC_UNAVAILABLE",
        );
      }

      const resolved = resolution(projection, resolvedAt, {
        detailedStatus: "resolved_fallback_synthetic",
        level: "synthetic",
        status: "synthetic",
        source: "intra_v3_synthetic",
        usedReference: fallbackReference,
        fallbackUsed: true,
        exploitable: true,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      if (
        !this.tryEmit(
          "oa.ckc.fallback_used",
          projection,
          resolvedAt,
          "fallback",
          resolved.detailedStatus,
          "CKC_FALLBACK_USED",
        )
      ) {
        return this.auditFailure(projection, resolvedAt);
      }
      return this.success(projection, resolved);
    } catch {
      return this.failure(
        projection,
        resolvedAt,
        "unresolved_unavailable",
        "D2_INTERNAL_ERROR",
      );
    }
  }

  private success(
    projection: ValidatedCycleTypeProjection,
    resolved: CkcQualificationResolution,
  ): CkcQualificationResolutionOutcome {
    if (
      !this.tryEmit(
        "oa.ckc.resolution_succeeded",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
    const proofResult: CkcConsumptionProofResult =
      buildCkcConsumptionProof(projection, resolved);
    if (!proofResult.ok) {
      if (
        !this.tryEmit(
          "oa.ckc.consumption_rejected",
          projection,
          resolved.resolvedAt,
          "error",
          resolved.detailedStatus,
          proofResult.error.code,
        )
      ) {
        return this.auditFailure(projection, resolved.resolvedAt);
      }
      return Object.freeze({
        ok: false as const,
        resolution: resolved,
        error: proofResult.error,
      });
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_validated",
        projection,
        resolved.resolvedAt,
        "ok",
        resolved.detailedStatus,
      )
    ) {
      return this.auditFailure(projection, resolved.resolvedAt);
    }
    return Object.freeze({
      ok: true as const,
      resolution: resolved,
      proof: proofResult.proof,
    });
  }

  private failure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
    detailedStatus: Extract<
      CkcQualificationDetailedStatus,
      "unresolved_invalid_mapping" | "unresolved_unavailable"
    >,
    code: CkcQualificationErrorCode,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus,
      level: "absent",
      status:
        detailedStatus === "unresolved_invalid_mapping"
          ? "invalid"
          : "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    const error = createCkcQualificationError({
      code,
      correlationId: projection.correlationId,
      cycleTypeId: projection.cycleTypeId,
      detailedStatus,
    });
    if (
      !this.tryEmit(
        "oa.ckc.resolution_failed",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    if (
      !this.tryEmit(
        "oa.ckc.consumption_rejected",
        projection,
        resolvedAt,
        "error",
        detailedStatus,
        code,
      )
    ) {
      return this.auditFailure(projection, resolvedAt);
    }
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error,
    });
  }

  /**
   * Morris FAIL-CLOSED: audit sink failure returns a safe structured outcome.
   * Never re-emits on the failing sink. Never exposes a proof or consumed=true.
   */
  private auditFailure(
    projection: ValidatedCycleTypeProjection,
    resolvedAt: string,
  ): CkcQualificationResolutionOutcome {
    const failed = resolution(projection, resolvedAt, {
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      fallbackUsed: false,
      exploitable: false,
    });
    return Object.freeze({
      ok: false as const,
      resolution: failed,
      error: createCkcQualificationError({
        code: "D2_INTERNAL_ERROR",
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        detailedStatus: "unresolved_unavailable",
      }),
    });
  }

  private tryEmit(
    event:
      | "oa.ckc.resolution_started"
      | "oa.ckc.resolution_succeeded"
      | "oa.ckc.resolution_failed"
      | "oa.ckc.fallback_used"
      | "oa.ckc.consumption_validated"
      | "oa.ckc.consumption_rejected",
    projection: ValidatedCycleTypeProjection,
    ts: string,
    result: "started" | "ok" | "error" | "fallback",
    detailedStatus?: CkcQualificationDetailedStatus,
    detailCode?: string,
  ): boolean {
    if (!this.audit) {
      return true;
    }
    try {
      this.audit.append({
        event,
        ts,
        correlationId: projection.correlationId,
        cycleTypeId: projection.cycleTypeId,
        result,
        ...(detailedStatus ? { detailedStatus } : {}),
        ...(detailCode ? { detailCode } : {}),
      });
      return true;
    } catch {
      return false;
    }
  }
}

```

### `projects/sfia-studio/app/lib/oa/cycle/ports/cycleAudit.ts`

```typescript
/**
 * Minimal audit/observability sink for T-A2.
 */
export type CycleAuditEvent =
  | {
      event: "oa.cycle.qualified";
      ts: string;
      correlationId?: string;
      recommendedProfile: string;
      result: "ok";
      durationMs?: number;
    }
  | {
      event: "oa.cycle.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      cycleInstanceId: string;
      profile: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.created";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      version: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.version_proposed";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      version: number;
      previousVersion?: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.trajectory.version_conflict";
      ts: string;
      correlationId?: string;
      projectId: string;
      trajectoryId: string;
      expectedVersion?: number;
      currentVersion?: number;
      result: "conflict";
      detailCode: "TRAJECTORY_VERSION_CONFLICT";
      durationMs: number;
    }
  | {
      event: "oa.epistemic.updated";
      ts: string;
      correlationId?: string;
      projectId: string;
      itemCount: number;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event: "oa.ckc.resolved";
      ts: string;
      correlationId?: string;
      cycleTypeId: string;
      level: string;
      status: string;
      result: "ok" | "error";
      detailCode?: string;
      durationMs: number;
    }
  | {
      event:
        | "oa.ckc.resolution_started"
        | "oa.ckc.resolution_succeeded"
        | "oa.ckc.resolution_failed"
        | "oa.ckc.fallback_used"
        | "oa.ckc.consumption_validated"
        | "oa.ckc.consumption_rejected";
      ts: string;
      correlationId: string;
      cycleTypeId: string;
      result: "started" | "ok" | "error" | "fallback";
      detailedStatus?: string;
      detailCode?: string;
      durationMs?: number;
    }
  | {
      event: "oa.cycle.load_failed";
      ts: string;
      correlationId?: string;
      projectId?: string;
      result: "error";
      detailCode?: string;
      durationMs: number;
    };

export interface CycleAuditPort {
  append(event: CycleAuditEvent): void;
}

```

### `projects/sfia-studio/app/lib/oa/cycle/index.ts`

```typescript
/**
 * T-A2 Cycle / Trajectory / Epistemic / CKC Foundation — public barrel.
 *
 * Isolated Option A v3-native module. Consumes T-A1 project + T-A0 doctrine
 * public APIs only. Does not replace d1 / OPS1 / MethodMode. In-memory only.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/qualification";
export * from "./domain/cycleTypeCatalog";
export * from "./domain/ckcQualificationContracts";
export * from "./domain/ckcQualificationErrors";
export * from "./domain/ckcConsumptionProof";
export * from "./domain/catalogFingerprint";
export * from "./domain/catalogProjection";

export * from "./ports/cycleRepository";
export * from "./ports/trajectoryRepository";
export * from "./ports/epistemicRepository";
export * from "./ports/ckcResolver";
export * from "./ports/ckcQualificationResolver";
export * from "./ports/cycleAudit";

export { QualifyCycle } from "./application/qualifyCycle";
export { CreateCycle } from "./application/createCycle";
export { GetCycle } from "./application/getCycle";
export { CreateInitialTrajectory } from "./application/createInitialTrajectory";
export { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
export { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
export {
  ProposeTrajectoryVersion,
  TrajectoryVersionConflictSignal,
} from "./application/proposeTrajectoryVersion";
export { GetEpistemicState } from "./application/getEpistemicState";
export { UpdateEpistemicState } from "./application/updateEpistemicState";
export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";

export { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
export { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
export { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
export { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
export {
  MemoryCkcResolver,
  type CkcRegistryEntry,
} from "./infrastructure/memoryCkcResolver";
export {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
export * from "./infrastructure/ckcReferenceManifest";
export * from "./infrastructure/ckcQualificationResolver";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import type { ProjectServices } from "@/lib/oa/project";
import { CreateCycle } from "./application/createCycle";
import { CreateInitialTrajectory } from "./application/createInitialTrajectory";
import { GetCurrentTrajectory } from "./application/getCurrentTrajectory";
import { GetCycle } from "./application/getCycle";
import { GetEpistemicState } from "./application/getEpistemicState";
import { GetTrajectoryVersion } from "./application/getTrajectoryVersion";
import { ProposeTrajectoryVersion } from "./application/proposeTrajectoryVersion";
import { QualifyCycle } from "./application/qualifyCycle";
import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
import { UpdateEpistemicState } from "./application/updateEpistemicState";
import { MemoryCkcResolver } from "./infrastructure/memoryCkcResolver";
import { MemoryCycleRepository } from "./infrastructure/memoryCycleRepository";
import { MemoryCycleStore } from "./infrastructure/memoryCycleStore";
import { MemoryEpistemicRepository } from "./infrastructure/memoryEpistemicRepository";
import { MemoryTrajectoryRepository } from "./infrastructure/memoryTrajectoryRepository";
import {
  ConsoleCycleAuditJournal,
  MemoryCycleAuditJournal,
} from "./infrastructure/observability";
import type { CycleAuditPort } from "./ports/cycleAudit";
import type { CkcResolverPort } from "./ports/ckcResolver";

export type CycleServices = {
  store: MemoryCycleStore;
  cycles: MemoryCycleRepository;
  trajectories: MemoryTrajectoryRepository;
  epistemic: MemoryEpistemicRepository;
  ckc: CkcResolverPort;
  audit: CycleAuditPort;
  qualifyCycle: QualifyCycle;
  createCycle: CreateCycle;
  getCycle: GetCycle;
  createInitialTrajectory: CreateInitialTrajectory;
  getCurrentTrajectory: GetCurrentTrajectory;
  getTrajectoryVersion: GetTrajectoryVersion;
  proposeTrajectoryVersion: ProposeTrajectoryVersion;
  getEpistemicState: GetEpistemicState;
  updateEpistemicState: UpdateEpistemicState;
  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
};

export type CreateInMemoryCycleServicesOptions = {
  projectServices: ProjectServices;
  clock?: ClockPort;
  audit?: CycleAuditPort;
  ckcResolver?: CkcResolverPort;
};

/** Factory for in-memory Cycle/Trajectory/Epistemic/CKC services. */
export function createInMemoryCycleServices(
  options: CreateInMemoryCycleServicesOptions,
): CycleServices {
  const store = new MemoryCycleStore();
  const cycles = new MemoryCycleRepository(store);
  const trajectories = new MemoryTrajectoryRepository(store);
  const epistemic = new MemoryEpistemicRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleCycleAuditJournal();
  const ckc = options.ckcResolver ?? new MemoryCkcResolver();

  return {
    store,
    cycles,
    trajectories,
    epistemic,
    ckc,
    audit,
    qualifyCycle: new QualifyCycle(clock, audit),
    createCycle: new CreateCycle(
      cycles,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCycle: new GetCycle(cycles, clock, audit),
    createInitialTrajectory: new CreateInitialTrajectory(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getCurrentTrajectory: new GetCurrentTrajectory(trajectories, clock, audit),
    getTrajectoryVersion: new GetTrajectoryVersion(trajectories, clock, audit),
    proposeTrajectoryVersion: new ProposeTrajectoryVersion(
      trajectories,
      options.projectServices,
      clock,
      audit,
      store,
    ),
    getEpistemicState: new GetEpistemicState(epistemic, clock, audit),
    updateEpistemicState: new UpdateEpistemicState(
      epistemic,
      clock,
      audit,
      store,
    ),
    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
      ckc,
      clock,
      audit,
    ),
  };
}

export function createTestCycleServices(
  options: CreateInMemoryCycleServicesOptions & {
    audit?: MemoryCycleAuditJournal;
    fixedNowIso?: string;
    ckcResolver?: MemoryCkcResolver;
  },
): CycleServices & { audit: MemoryCycleAuditJournal } {
  const audit = options.audit ?? new MemoryCycleAuditJournal();
  const clock =
    options.clock ??
    (options.fixedNowIso
      ? new FixedClock(options.fixedNowIso)
      : new FixedClock("2026-07-24T06:00:00.000Z"));
  return createInMemoryCycleServices({
    ...options,
    clock,
    audit,
  }) as CycleServices & { audit: MemoryCycleAuditJournal };
}

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcReferenceManifest.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  validateCkcReferenceManifest,
  type CkcReferenceManifest,
  type CkcReferenceManifestEntry,
} from "@/lib/oa/cycle";

function manifest(
  entries: readonly CkcReferenceManifestEntry[],
): CkcReferenceManifest {
  return { entries };
}

describe("V3.1-D2-B CKC reference manifest", () => {
  it("contains exactly the five allowlisted catalogue references", () => {
    expect(CKC_REFERENCE_MANIFEST.entries).toHaveLength(5);
    expect(
      new Set(CKC_REFERENCE_MANIFEST.entries.map((entry) => entry.reference))
        .size,
    ).toBe(5);
    expect(validateCkcReferenceManifest()).toEqual([]);

    const expected = new Set(
      CYCLE_TYPE_CATALOG.entries.flatMap((entry) => [
        entry.ckc.primaryReference,
        ...(entry.ckc.fallbackReference
          ? [entry.ckc.fallbackReference]
          : []),
      ]),
    );
    expect(
      new Set(CKC_REFERENCE_MANIFEST.entries.map((entry) => entry.reference)),
    ).toEqual(expected);
  });

  it("declares four versioned detailed pilots and one unversioned synthetic map", () => {
    const detailed = CKC_REFERENCE_MANIFEST.entries.filter(
      (entry) => entry.level === "detailed",
    );
    expect(detailed).toHaveLength(4);
    expect(detailed.every((entry) => entry.version === "0.1.0")).toBe(true);
    expect(
      CKC_REFERENCE_MANIFEST.entries.find(
        (entry) => entry.reference === CKC_SYNTHETIC_MAP_PATH,
      ),
    ).toMatchObject({
      level: "synthetic",
      version: null,
      source: "intra_v3_synthetic",
    });
  });

  it("is deeply frozen at collection and entry boundaries", () => {
    expect(Object.isFrozen(CKC_REFERENCE_MANIFEST)).toBe(true);
    expect(Object.isFrozen(CKC_REFERENCE_MANIFEST.entries)).toBe(true);
    expect(
      CKC_REFERENCE_MANIFEST.entries.every((entry) =>
        Object.isFrozen(entry),
      ),
    ).toBe(true);
  });

  it("rejects duplicates, unknowns, missing entries and incoherent levels", () => {
    const entries = CKC_REFERENCE_MANIFEST.entries;
    expect(
      validateCkcReferenceManifest(manifest([...entries, entries[0]])).map(
        (issue) => issue.code,
      ),
    ).toContain("MANIFEST_DUPLICATE");
    expect(
      validateCkcReferenceManifest(
        manifest([
          ...entries,
          { ...entries[0], reference: "caller/arbitrary.md" },
        ]),
      ).map((issue) => issue.code),
    ).toContain("MANIFEST_UNKNOWN_REFERENCE");
    expect(
      validateCkcReferenceManifest(manifest(entries.slice(1))).map(
        (issue) => issue.code,
      ),
    ).toContain("MANIFEST_REFERENCE_MISSING");
    expect(
      validateCkcReferenceManifest(
        manifest([
          { ...entries[0], level: "synthetic" },
          ...entries.slice(1),
        ]),
      ).map((issue) => issue.code),
    ).toContain("MANIFEST_LEVEL_INCOHERENT");
  });

  it("rejects invalid doctrine and execution authority without I/O", () => {
    for (const replacement of [
      {
        ...CKC_REFERENCE_MANIFEST.entries[0],
        doctrineStatus: "baseline",
      },
      {
        ...CKC_REFERENCE_MANIFEST.entries[0],
        executionAuthority: true,
      },
    ]) {
      const invalid = replacement as unknown as CkcReferenceManifestEntry;
      expect(
        validateCkcReferenceManifest(
          manifest([invalid, ...CKC_REFERENCE_MANIFEST.entries.slice(1)]),
        ).map((issue) => issue.code),
      ).toContain("MANIFEST_METADATA_INVALID");
    }
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function withAvailability(
  references: readonly string[],
  availability: "available" | "unavailable",
): CkcReferenceManifest {
  return {
    entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
      references.includes(entry.reference)
        ? { ...entry, availability }
        : entry,
    ),
  };
}

describe("V3.1-D2-B CKC qualification resolver", () => {
  it.each([
    "cyc:framing",
    "cyc:functional-design",
    "cyc:technical-architecture",
    "cyc:qa-validation",
  ])("resolves detailed pilot %s", (cycleTypeId) => {
    const selected = projection(cycleTypeId);
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_detailed",
      level: "detailed",
      status: "resolved",
      source: "repository_candidate",
      usedReference: selected.ckc.primaryReference,
      fallbackUsed: false,
      executionAuthority: false,
    });
    expect(result.proof.consumed).toBe(true);
    expect(result.proof.disclosures).toEqual([]);
  });

  it("resolves a synthetic primary without a second fallback", () => {
    const selected = projection("cyc:delivery");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_synthetic",
      level: "synthetic",
      status: "synthetic",
      source: "intra_v3_synthetic",
      usedReference: selected.ckc.primaryReference,
      fallbackUsed: false,
    });
    expect(result.proof.consumed).toBe(true);
  });

  it("substitutes only the declared synthetic fallback", () => {
    const selected = projection("cyc:framing");
    const resolver = new CkcQualificationResolver(
      withAvailability([selected.ckc.primaryReference], "unavailable"),
    );
    const result = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.resolution).toMatchObject({
      detailedStatus: "resolved_fallback_synthetic",
      usedReference: selected.ckc.fallbackReference,
      fallbackUsed: true,
      disclosures: ["CKC_FALLBACK_USED"],
    });
    expect(result.proof.consumed).toBe(true);
  });

  it("fails closed when detailed primary and fallback are unavailable", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver(
      withAvailability(
        [
          selected.ckc.primaryReference,
          selected.ckc.fallbackReference as string,
        ],
        "unavailable",
      ),
    ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("Expected fail-closed result");
    expect(result.error.code).toBe("CKC_UNAVAILABLE");
    expect(result.resolution).toMatchObject({
      detailedStatus: "unresolved_unavailable",
      level: "absent",
      status: "unavailable",
      source: "unavailable",
      exploitable: false,
    });
    expect(result).not.toHaveProperty("proof");
  });

  it("fails closed when the synthetic primary is unavailable", () => {
    const selected = projection("cyc:delivery");
    const result = new CkcQualificationResolver(
      withAvailability([selected.ckc.primaryReference], "unavailable"),
    ).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (result.ok) throw new Error("Expected fail-closed result");
    expect(result.error.code).toBe("CKC_SYNTHETIC_INVALID");
    expect(result).not.toHaveProperty("proof");
  });

  it("rejects non-allowlisted and extended mappings without reflecting input", () => {
    const selected = projection("cyc:framing");
    for (const ckc of [
      { ...selected.ckc, primaryReference: "caller/private/path.md" },
      { ...selected.ckc, dynamicSource: true },
      { ...selected.ckc, mandatory: false },
      { ...selected.ckc, unavailableBehavior: "fail-open" },
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: {
          ...selected,
          ckc,
        } as unknown as ValidatedCycleTypeProjection,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (result.ok) throw new Error("Expected invalid mapping");
      expect(result.error.code).toBe("CKC_MAPPING_INVALID");
      expect(result.error.message).not.toContain("caller/private");
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("forbids execution authority in mapping and manifest", () => {
    const selected = projection("cyc:framing");
    const mappingResult = new CkcQualificationResolver().resolve({
      projection: {
        ...selected,
        ckc: { ...selected.ckc, executionAuthority: true },
      } as unknown as ValidatedCycleTypeProjection,
      resolvedAt: RESOLVED_AT,
    });
    expect(mappingResult.ok).toBe(false);
    if (!mappingResult.ok) {
      expect(mappingResult.error.code).toBe(
        "CKC_EXECUTION_AUTHORITY_FORBIDDEN",
      );
    }

    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const manifestResult = new CkcQualificationResolver(manifest).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(manifestResult.ok).toBe(false);
    if (!manifestResult.ok) {
      // Global manifest validation (F-QA-05) rejects before per-entry lookup.
      expect(manifestResult.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
  });

  it("rejects invalid resolvedAt before resolution (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "not-an-iso-timestamp",
      "2026-08-02",
      "2026-08-02T21:00:00",
      "2026-02-31T00:00:00.000Z",
      "",
      "   ",
      " 2026-08-02T19:47:00.000Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }
    }
  });

  it("accepts ISO-8601 resolvedAt with Z, offset and milliseconds (F-QA-06)", () => {
    const selected = projection("cyc:framing");
    for (const resolvedAt of [
      "2026-08-02T19:47:00.000Z",
      "2026-08-02T21:47:00+02:00",
      "2026-08-02T19:47:00.123Z",
    ]) {
      const result = new CkcQualificationResolver().resolve({
        projection: selected,
        resolvedAt,
      });
      expect(result.ok).toBe(true);
      if (result.ok) {
        expect(result.proof.consumed).toBe(true);
        expect(result.proof.resolvedAt).toBe(resolvedAt);
      }
    }
  });

  it("rejects globally incoherent injected manifests before lookup (F-QA-05)", () => {
    const selected = projection("cyc:framing");
    const base = CKC_REFERENCE_MANIFEST.entries;

    const foreign: CkcReferenceManifest = {
      entries: [
        ...base,
        {
          ...base[0],
          reference: "caller/private/foreign.md",
        },
      ],
    };
    const missingCanonical: CkcReferenceManifest = {
      entries: base.filter(
        (entry) => entry.reference !== selected.ckc.fallbackReference,
      ),
    };
    const duplicate: CkcReferenceManifest = {
      entries: [...base, base[0]],
    };
    const invalidMetaUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({ ...entry, availability: "maybe" } as unknown as typeof entry)
          : entry,
      ),
    };
    const invalidDoctrineUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference !== selected.ckc.primaryReference
          ? ({
              ...entry,
              doctrineStatus: "baseline",
            } as unknown as typeof entry)
          : entry,
      ),
    };
    const authorityUnselected: CkcReferenceManifest = {
      entries: base.map((entry) =>
        entry.reference === selected.ckc.fallbackReference
          ? ({
              ...entry,
              executionAuthority: true,
            } as unknown as typeof entry)
          : entry,
      ),
    };

    for (const manifest of [
      foreign,
      missingCanonical,
      duplicate,
      invalidMetaUnselected,
      invalidDoctrineUnselected,
      authorityUnselected,
    ]) {
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result.error.message).not.toContain("foreign");
        expect(result.error.message).not.toContain("caller/private");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("accepts a valid reordered canonical manifest deterministically (F-QA-05)", () => {
    const selected = projection("cyc:delivery");
    const reordered: CkcReferenceManifest = {
      entries: [...CKC_REFERENCE_MANIFEST.entries].reverse(),
    };
    const canonical = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const reorderedResult = new CkcQualificationResolver(reordered).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(canonical.ok).toBe(true);
    expect(reorderedResult.ok).toBe(true);
    expect(reorderedResult).toEqual(canonical);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcConsumptionProof.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  buildCkcConsumptionProof,
  projectSelectableCycleType,
  type CkcQualificationResolution,
  type CkcReferenceManifest,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:proof:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

function resolved(
  selected: ValidatedCycleTypeProjection,
  manifest?: CkcReferenceManifest,
): CkcQualificationResolution {
  const outcome = new CkcQualificationResolver(manifest).resolve({
    projection: selected,
    resolvedAt: RESOLVED_AT,
  });
  if (!outcome.ok) throw new Error(outcome.error.message);
  return outcome.resolution;
}

describe("V3.1-D2-B CKC consumption proof", () => {
  it.each([
    ["cyc:framing", "resolved_detailed"],
    ["cyc:delivery", "resolved_synthetic"],
  ] as const)("builds immutable proof for %s", (cycleTypeId, status) => {
    const selected = projection(cycleTypeId);
    const result = buildCkcConsumptionProof(selected, resolved(selected));
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.proof).toMatchObject({
      detailedStatus: status,
      consumed: true,
      executionAuthority: false,
      doctrineStatus: "method-candidate",
      catalogVersion: selected.catalogVersion,
      catalogHash: selected.catalogHash,
      correlationId: selected.correlationId,
    });
    expect(Object.isFrozen(result.proof)).toBe(true);
    expect(Object.isFrozen(result.proof.disclosures)).toBe(true);
  });

  it("builds a fallback proof with disclosure", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const result = buildCkcConsumptionProof(
      selected,
      resolved(selected, manifest),
    );
    expect(result.ok).toBe(true);
    if (!result.ok) throw new Error(result.error.message);
    expect(result.proof).toMatchObject({
      detailedStatus: "resolved_fallback_synthetic",
      fallbackUsed: true,
      usedReference: selected.ckc.fallbackReference,
      disclosures: ["CKC_FALLBACK_USED"],
      consumed: true,
    });
  });

  it("rejects identity, catalogue and reference mismatches", () => {
    const selected = projection("cyc:framing");
    const valid = resolved(selected);
    const mutations: Partial<CkcQualificationResolution>[] = [
      { cycleTypeId: "cyc:other" },
      { catalogVersion: "stale" },
      { catalogHash: "stale" },
      { correlationId: "cor:lost" },
      { expectedPrimaryReference: "other" },
      { usedReference: "other" },
      { fallbackReference: "other" },
    ];
    for (const mutation of mutations) {
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        ...mutation,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects status, T-A2 projection, doctrine and authority mismatches", () => {
    const selected = projection("cyc:delivery");
    const valid = resolved(selected);
    const mutations: Partial<CkcQualificationResolution>[] = [
      { fallbackUsed: true },
      { level: "detailed" },
      { status: "resolved" },
      { source: "repository_candidate" },
      { detailedStatus: "unresolved_unavailable", exploitable: false },
      { doctrineStatus: "baseline" as "method-candidate" },
      { executionAuthority: true as false },
      { resolvedAt: "" },
      { usedReference: undefined },
    ];
    for (const mutation of mutations) {
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        ...mutation,
      });
      expect(result.ok).toBe(false);
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects fallback without CKC_FALLBACK_USED and duplicate disclosure (F-QA-01)", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const valid = resolved(selected, manifest);

    const missing = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: [],
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) {
      expect(missing.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(missing).not.toHaveProperty("proof");

    const duplicated = buildCkcConsumptionProof(selected, {
      ...valid,
      disclosures: ["CKC_FALLBACK_USED", "CKC_FALLBACK_USED"],
    });
    expect(duplicated.ok).toBe(false);
    if (!duplicated.ok) {
      expect(duplicated.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }
    expect(duplicated).not.toHaveProperty("proof");
  });

  it("rejects CKC_FALLBACK_USED outside fallback statuses (F-QA-02)", () => {
    for (const cycleTypeId of ["cyc:framing", "cyc:delivery"] as const) {
      const selected = projection(cycleTypeId);
      const valid = resolved(selected);
      const result = buildCkcConsumptionProof(selected, {
        ...valid,
        disclosures: ["CKC_FALLBACK_USED"],
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
      }
      expect(result).not.toHaveProperty("proof");
    }
  });

  it("rejects incoherent fallbackPolicy against D2-A projection (F-QA-03)", () => {
    const detailed = projection("cyc:framing");
    const detailedValid = resolved(detailed);
    const detailedBad = buildCkcConsumptionProof(detailed, {
      ...detailedValid,
      fallbackPolicy: "none",
    });
    expect(detailedBad.ok).toBe(false);
    if (!detailedBad.ok) {
      expect(detailedBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const synthetic = projection("cyc:delivery");
    const syntheticValid = resolved(synthetic);
    const syntheticBad = buildCkcConsumptionProof(synthetic, {
      ...syntheticValid,
      fallbackPolicy: "intra_v3_only",
    });
    expect(syntheticBad.ok).toBe(false);
    if (!syntheticBad.ok) {
      expect(syntheticBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    const fallbackManifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === detailed.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const fallbackValid = resolved(detailed, fallbackManifest);
    const fallbackBad = buildCkcConsumptionProof(detailed, {
      ...fallbackValid,
      fallbackPolicy: "none",
    });
    expect(fallbackBad.ok).toBe(false);
    if (!fallbackBad.ok) {
      expect(fallbackBad.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
    }

    expect(buildCkcConsumptionProof(detailed, detailedValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(synthetic, syntheticValid).ok).toBe(true);
    expect(buildCkcConsumptionProof(detailed, fallbackValid).ok).toBe(true);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/ckcQualificationResolver.qa.test.ts`

```typescript
/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  CKC_REFERENCE_MANIFEST,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  CkcQualificationResolver,
  projectSelectableCycleType,
  type CkcReferenceManifest,
  type CycleAuditEvent,
  type CycleAuditPort,
  type ValidatedCycleTypeProjection,
} from "@/lib/oa/cycle";

const RESOLVED_AT = "2026-08-02T19:47:00.000Z";

class AuditJournal implements CycleAuditPort {
  readonly events: CycleAuditEvent[] = [];
  append(event: CycleAuditEvent): void {
    this.events.push(event);
  }
}

function projection(cycleTypeId: string): ValidatedCycleTypeProjection {
  const result = projectSelectableCycleType({
    cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: `cor:qa:${cycleTypeId}`,
  });
  if (!result.ok) throw new Error(result.error.message);
  return result.projection;
}

describe("V3.1-D2-B resolver QA", () => {
  it("emits minimal success, fallback and consumption events", () => {
    const selected = projection("cyc:framing");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(manifest, audit).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.fallback_used",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
    for (const event of audit.events) {
      expect(event).toMatchObject({
        ts: RESOLVED_AT,
        correlationId: selected.correlationId,
        cycleTypeId: selected.cycleTypeId,
      });
      expect(event).not.toHaveProperty("objective");
      expect(event).not.toHaveProperty("scope");
      expect(event).not.toHaveProperty("profile");
      expect(event).not.toHaveProperty("reference");
    }
  });

  it("emits fail-closed failure and consumption rejection", () => {
    const selected = projection("cyc:delivery");
    const manifest: CkcReferenceManifest = {
      entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
        entry.reference === selected.ckc.primaryReference
          ? { ...entry, availability: "unavailable" }
          : entry,
      ),
    };
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(manifest, audit).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(false);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_failed",
      "oa.ckc.consumption_rejected",
    ]);
    expect(audit.events[1]).toMatchObject({
      detailCode: "CKC_SYNTHETIC_INVALID",
      result: "error",
    });
  });

  it("fails closed for incoherent synthetic manifest metadata", () => {
    const selected = projection("cyc:delivery");
    for (const replacement of [
      { level: "detailed" },
      { doctrineStatus: "baseline" },
      { source: "repository_candidate" },
    ]) {
      const manifest: CkcReferenceManifest = {
        entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
          entry.reference === selected.ckc.primaryReference
            ? ({ ...entry, ...replacement } as typeof entry)
            : entry,
        ),
      };
      const result = new CkcQualificationResolver(manifest).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });
      expect(result.ok).toBe(false);
      if (!result.ok) {
        // F-QA-05: global manifest validation rejects before synthetic lookup.
        expect(result.error.code).toBe("CKC_RESOLUTION_INCOHERENT");
        expect(result).not.toHaveProperty("proof");
      }
    }
  });

  it("maps unexpected failures to a safe D2 error", () => {
    const selected = projection("cyc:delivery");
    const throwingEntries = new Proxy(CKC_REFERENCE_MANIFEST.entries, {
      get() {
        throw new Error(
          "/Users/private/secret.md should never cross the boundary",
        );
      },
    });
    const result = new CkcQualificationResolver({
      entries: throwingEntries,
    }).resolve({ projection: selected, resolvedAt: RESOLVED_AT });
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error.code).toBe("D2_INTERNAL_ERROR");
      expect(result.error.message).not.toContain("/Users/");
      expect(result.error.message).not.toContain("secret");
    }
  });

  it("is deeply deterministic for identical explicit inputs", () => {
    const selected = projection("cyc:delivery");
    const resolver = new CkcQualificationResolver();
    const first = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    const second = resolver.resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(second).toEqual(first);
  });

  it("keeps the historical audit event contract accepted", () => {
    const audit = new AuditJournal();
    audit.append({
      event: "oa.ckc.resolved",
      ts: RESOLVED_AT,
      correlationId: "cor:historical",
      cycleTypeId: "cyc:delivery",
      level: "synthetic",
      status: "synthetic",
      result: "ok",
      durationMs: 0,
    });
    expect(audit.events[0].event).toBe("oa.ckc.resolved");
  });

  it("keeps pure resolve when audit is undefined (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const result = new CkcQualificationResolver().resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.proof.consumed).toBe(true);
    }
  });

  it("keeps nominal behavior when audit append succeeds (F-QA-04)", () => {
    const selected = projection("cyc:delivery");
    const audit = new AuditJournal();
    const result = new CkcQualificationResolver(
      CKC_REFERENCE_MANIFEST,
      audit,
    ).resolve({
      projection: selected,
      resolvedAt: RESOLVED_AT,
    });
    expect(result.ok).toBe(true);
    expect(audit.events.map((event) => event.event)).toEqual([
      "oa.ckc.resolution_started",
      "oa.ckc.resolution_succeeded",
      "oa.ckc.consumption_validated",
    ]);
  });

  it("returns sanitized D2_INTERNAL_ERROR for every audit append throw (F-QA-04)", () => {
    const selected = projection("cyc:framing");
    const hostile =
      "/Users/private/secret.md payload=ckc-body token=sk-hostile-f4ke";
    const scenarios: Array<{
      readonly failingEvent:
        | "oa.ckc.resolution_started"
        | "oa.ckc.resolution_succeeded"
        | "oa.ckc.resolution_failed"
        | "oa.ckc.fallback_used"
        | "oa.ckc.consumption_validated"
        | "oa.ckc.consumption_rejected";
      readonly expectedAppendCalls: number;
      readonly manifest: CkcReferenceManifest;
    }> = [
      {
        failingEvent: "oa.ckc.resolution_started",
        expectedAppendCalls: 1,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.resolution_succeeded",
        expectedAppendCalls: 2,
        manifest: CKC_REFERENCE_MANIFEST,
      },
      {
        failingEvent: "oa.ckc.fallback_used",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_validated",
        expectedAppendCalls: 4,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.resolution_failed",
        expectedAppendCalls: 2,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
      {
        failingEvent: "oa.ckc.consumption_rejected",
        expectedAppendCalls: 3,
        manifest: {
          entries: CKC_REFERENCE_MANIFEST.entries.map((entry) =>
            entry.reference === selected.ckc.primaryReference ||
            entry.reference === selected.ckc.fallbackReference
              ? { ...entry, availability: "unavailable" }
              : entry,
          ),
        },
      },
    ];

    for (const scenario of scenarios) {
      let appendCalls = 0;
      const seenAfterThrow: string[] = [];
      let thrown = false;
      const audit: CycleAuditPort = {
        append(event) {
          appendCalls += 1;
          if (thrown) {
            seenAfterThrow.push(event.event);
          }
          if (event.event === scenario.failingEvent) {
            thrown = true;
            throw new Error(hostile);
          }
        },
      };

      const result = new CkcQualificationResolver(
        scenario.manifest,
        audit,
      ).resolve({
        projection: selected,
        resolvedAt: RESOLVED_AT,
      });

      expect(result.ok).toBe(false);
      if (!result.ok) {
        expect(result.error.code).toBe("D2_INTERNAL_ERROR");
        expect(result.error.blocking).toBe(true);
        expect(result.error.retryable).toBe(true);
        expect(result.error.recoverable).toBe(true);
        expect(result.error.correlationId).toBe(selected.correlationId);
        expect(result.error.cycleTypeId).toBe(selected.cycleTypeId);
        expect(result.error.message).toBe(
          "The CKC resolution could not be completed.",
        );
        expect(result.error.message).not.toContain("/Users/");
        expect(result.error.message).not.toContain("secret");
        expect(result.error.message).not.toContain("sk-hostile");
        expect(result.error.message).not.toContain("payload");
        expect(result).not.toHaveProperty("proof");
        expect(result.resolution.exploitable).toBe(false);
      }

      expect(appendCalls).toBe(scenario.expectedAppendCalls);
      expect(seenAfterThrow).toEqual([]);
    }
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts`

```typescript
/**
 * V3.1-D2-A — Independent QA reinforcement for Catalog Projection.
 * Production and Delivery tests must remain untouched.
 * Evidence of public seam / fingerprint binding defects must stay failing.
 * @vitest-environment node
 */
import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  ADOPTED_CYCLE_TYPE_IDS,
  CKC_PILOT_CADRAGE_PATH,
  CKC_SYNTHETIC_MAP_PATH,
  CYCLE_TYPE_CATALOG,
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  projectSelectableCycleType,
  serializeCatalogFingerprint,
  type CatalogProjectionErrorCode,
  type CatalogSelectionContext,
  type CycleTypeCatalog,
  type CycleTypeDefinition,
} from "@/lib/oa/cycle";

function context(
  overrides: Partial<CatalogSelectionContext> = {},
): CatalogSelectionContext {
  return {
    cycleTypeId: "cyc:delivery",
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: "cor:d2-a-qa",
    ...overrides,
  };
}

function cloneCatalog(
  mutate: (entries: CycleTypeDefinition[]) => void,
): CycleTypeCatalog {
  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
    ...entry,
    ckc: { ...entry.ckc },
    aliases: [...entry.aliases],
  }));
  mutate(entries);
  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
}

function expectFailure(
  result: ReturnType<typeof projectSelectableCycleType>,
  code: CatalogProjectionErrorCode,
): void {
  expect(result.ok).toBe(false);
  if (result.ok) {
    throw new Error(`Expected failure ${code}, got success`);
  }
  expect(result.error.code).toBe(code);
  expect(result.error.blocking).toBe(true);
  expect(typeof result.error.message).toBe("string");
  expect(result.error.message.length).toBeGreaterThan(0);
  expect(result).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("projection");
  expect(result.error).not.toHaveProperty("ckc");
}

function expectPublicRejectsDivergentCatalog(
  catalog: CycleTypeCatalog,
  cycleTypeId = "cyc:delivery",
): void {
  const result = projectSelectableCycleType(context({ cycleTypeId }), catalog);
  // INV-D2A-11/12: public API must not accept a contractually divergent catalog
  // while still validating the static canonical fingerprint.
  expect(result.ok).toBe(false);
  if (result.ok) {
    throw new Error(
      "Public Catalog Projection accepted a divergent catalog with canonical fingerprint",
    );
  }
}

describe("V3.1-D2-A QA — Catalog Projection nominals", () => {
  it("projects every active adopted cycle type with frozen read-only success", () => {
    for (const cycleTypeId of ADOPTED_CYCLE_TYPE_IDS) {
      const result = projectSelectableCycleType(context({ cycleTypeId }));
      expect(result.ok).toBe(true);
      if (!result.ok) throw new Error(result.error.message);
      const production = CYCLE_TYPE_CATALOG.entries.find(
        (entry) => entry.cycleTypeId === cycleTypeId,
      )!;
      expect(result.projection).toMatchObject({
        cycleTypeId,
        label: production.label,
        shortDescription: production.shortDescription,
        lifecycleStatus: "active",
        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
        correlationId: "cor:d2-a-qa",
      });
      expect(result.projection.ckc).toEqual(production.ckc);
      expect(Object.isFrozen(result)).toBe(true);
      expect(Object.isFrozen(result.projection)).toBe(true);
      expect(Object.isFrozen(result.projection.ckc)).toBe(true);
      expect(result.projection).not.toHaveProperty("profile");
      expect(result.projection).not.toHaveProperty("recommendedProfile");
      expect(result.projection).not.toHaveProperty("gate");
      expect(result.projection).not.toHaveProperty("consumed");
      expect(result.projection).not.toHaveProperty("isMorrisDecision");
    }
  });
});

describe("V3.1-D2-A QA — fail-closed priority and exact variants", () => {
  it("rejects empty/whitespace correlationId before other checks", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          correlationId: "   ",
          catalogVersion: "wrong",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_CORRELATION_ID_REQUIRED",
    );
  });

  it("rejects incompatible version before fingerprint", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          catalogVersion: "stale",
          catalogHash: "wrong",
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it("rejects stale fingerprint before type lookup", () => {
    expectFailure(
      projectSelectableCycleType(
        context({
          catalogHash: `sha256:${"0".repeat(64)}`,
          cycleTypeId: "cyc:unknown",
        }),
      ),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects unknown type before lifecycle/mapping", () => {
    expectFailure(
      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
      "CYCLE_TYPE_UNKNOWN",
    );
  });

  it.each([
    ["version whitespace", { catalogVersion: ` ${CYCLE_TYPE_CATALOG_VERSION}` }],
    ["version case", { catalogVersion: CYCLE_TYPE_CATALOG_VERSION.toUpperCase() }],
    [
      "version suffix",
      { catalogVersion: `${CYCLE_TYPE_CATALOG_VERSION}-extra` },
    ],
  ] as const)("rejects version variant: %s", (_label, overrides) => {
    expectFailure(
      projectSelectableCycleType(context(overrides)),
      "CATALOG_VERSION_INCOMPATIBLE",
    );
  });

  it.each([
    [
      "hash whitespace",
      { catalogHash: ` ${CYCLE_TYPE_CATALOG_FINGERPRINT}` },
    ],
    [
      "hash uppercase",
      { catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT.toUpperCase() },
    ],
    ["hash wrong prefix", { catalogHash: `md5:${"a".repeat(64)}` }],
    ["hash short", { catalogHash: `sha256:${"a".repeat(63)}` }],
  ] as const)("rejects fingerprint variant: %s", (_label, overrides) => {
    expectFailure(
      projectSelectableCycleType(context(overrides)),
      "CATALOG_FINGERPRINT_STALE",
    );
  });

  it("rejects empty cycleTypeId and propagates valid correlationId on failure", () => {
    const result = projectSelectableCycleType(context({ cycleTypeId: "" }));
    expectFailure(result, "CYCLE_TYPE_UNKNOWN");
    if (!result.ok) {
      expect(result.error.correlationId).toBe("cor:d2-a-qa");
    }
  });
});

describe("V3.1-D2-A QA — lifecycle and mapping negatives", () => {
  it.each(["deprecated", "unavailable", "future-status"] as const)(
    "rejects lifecycle %s",
    (lifecycleStatus) => {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          lifecycleStatus:
            lifecycleStatus as CycleTypeDefinition["lifecycleStatus"],
        };
      });
      const result = projectSelectableCycleType(context(), catalog);
      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
    },
  );

  it("rejects mandatory=false", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, mandatory: false as unknown as true },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects unknown primaryLevel", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryLevel: "unknown" as "synthetic",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects empty/whitespace primaryReference", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, primaryReference: "  " },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects executionAuthority=true", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          executionAuthority: true as unknown as false,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects invalid doctrineStatus and unavailableBehavior", () => {
    for (const field of ["doctrineStatus", "unavailableBehavior"] as const) {
      const catalog = cloneCatalog((entries) => {
        entries[7] = {
          ...entries[7],
          ckc: { ...entries[7].ckc, [field]: "invalid" },
        } as CycleTypeDefinition;
      });
      expectFailure(
        projectSelectableCycleType(context(), catalog),
        "CYCLE_TYPE_MAPPING_INVALID",
      );
    }
  });

  it("rejects detailed mappings without canonical fallback", () => {
    const catalog = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackPolicy: "none",
          fallbackReference: undefined,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        catalog,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects detailed with wrong fallbackPolicy or fallbackReference", () => {
    const wrongPolicy = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: { ...entries[0].ckc, fallbackPolicy: "none" },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        wrongPolicy,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const wrongRef = cloneCatalog((entries) => {
      entries[0] = {
        ...entries[0],
        ckc: {
          ...entries[0].ckc,
          fallbackReference:
            "method/wrong.md" as typeof CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(
        context({ cycleTypeId: "cyc:framing" }),
        wrongRef,
      ),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference", () => {
    const badPrimary = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          primaryReference: "method/non-canonical.md",
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badPrimary),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const badPolicy = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: { ...entries[7].ckc, fallbackPolicy: "synthetic_map" },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badPolicy),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const badFallback = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), badFallback),
      "CYCLE_TYPE_MAPPING_INVALID",
    );

    const emptyFallback = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          fallbackReference: "" as unknown as typeof CKC_SYNTHETIC_MAP_PATH,
        },
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), emptyFallback),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });

  it("rejects extended mapping properties", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        ckc: {
          ...entries[7].ckc,
          dynamicResolution: true,
        } as CycleTypeDefinition["ckc"],
      };
    });
    expectFailure(
      projectSelectableCycleType(context(), catalog),
      "CYCLE_TYPE_MAPPING_INVALID",
    );
  });
});

describe("V3.1-D2-A QA — error contract", () => {
  it("covers the six documented error codes with blocking safe failures", () => {
    const cases: Array<[CatalogProjectionErrorCode, () => ReturnType<typeof projectSelectableCycleType>]> =
      [
        [
          "CATALOG_CORRELATION_ID_REQUIRED",
          () => projectSelectableCycleType(context({ correlationId: "" })),
        ],
        [
          "CATALOG_VERSION_INCOMPATIBLE",
          () => projectSelectableCycleType(context({ catalogVersion: "x" })),
        ],
        [
          "CATALOG_FINGERPRINT_STALE",
          () =>
            projectSelectableCycleType(
              context({ catalogHash: `sha256:${"1".repeat(64)}` }),
            ),
        ],
        [
          "CYCLE_TYPE_UNKNOWN",
          () =>
            projectSelectableCycleType(context({ cycleTypeId: "cyc:missing" })),
        ],
        [
          "CYCLE_TYPE_NOT_SELECTABLE",
          () =>
            projectSelectableCycleType(
              context(),
              cloneCatalog((entries) => {
                entries[7] = { ...entries[7], lifecycleStatus: "deprecated" };
              }),
            ),
        ],
        [
          "CYCLE_TYPE_MAPPING_INVALID",
          () =>
            projectSelectableCycleType(
              context(),
              cloneCatalog((entries) => {
                entries[7] = {
                  ...entries[7],
                  ckc: {
                    ...entries[7].ckc,
                    executionAuthority: true as unknown as false,
                  },
                };
              }),
            ),
        ],
      ];

    for (const [code, run] of cases) {
      const result = run();
      expectFailure(result, code);
      if (!result.ok) {
        expect(Object.isFrozen(result)).toBe(true);
        expect(Object.isFrozen(result.error)).toBe(true);
      }
    }
  });

  it("documents retryable/recoverable classification for catalog stale errors", () => {
    const version = projectSelectableCycleType(
      context({ catalogVersion: "wrong" }),
    );
    const hash = projectSelectableCycleType(
      context({ catalogHash: `sha256:${"2".repeat(64)}` }),
    );
    expect(version.ok).toBe(false);
    expect(hash.ok).toBe(false);
    if (!version.ok && !hash.ok) {
      expect(version.error.retryable).toBe(true);
      expect(hash.error.retryable).toBe(true);
      expect(version.error.recoverable).toBe(true);
      expect(hash.error.recoverable).toBe(true);
    }
  });
});

describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () => {
  it("exposes the catalog seam on the public API signature", () => {
    // JS Function.length ignores parameters with defaults; inspect source instead.
    const source = readFileSync(
      path.resolve(
        __dirname,
        "../../../lib/oa/cycle/domain/catalogProjection.ts",
      ),
      "utf8",
    );
    expect(source).toMatch(
      /export function projectSelectableCycleType\(\s*context: CatalogSelectionContext,\s*catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,/,
    );
    const indexSource = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(indexSource).toContain(
      'export * from "./domain/catalogProjection";',
    );
  });

  it("rejects a catalog with modified canonicalKey under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = {
        ...entries[7],
        canonicalKey: `${entries[7].canonicalKey}-divergent`,
      };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog with modified methodCycleNumber under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries[7] = { ...entries[7], methodCycleNumber: 99 };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog with swapped still-valid contractual CKC mapping", () => {
    const catalog = cloneCatalog((entries) => {
      // Convert synthetic delivery into a still-valid detailed mapping that
      // differs from the authoritative D1 contract for cyc:delivery.
      entries[7] = {
        ...entries[7],
        ckc: {
          mandatory: true,
          primaryLevel: "detailed",
          primaryReference: CKC_PILOT_CADRAGE_PATH,
          fallbackPolicy: "synthetic_map",
          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
          executionAuthority: false,
          doctrineStatus: "method-candidate",
          unavailableBehavior: "fail-closed",
        },
      };
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    const result = projectSelectableCycleType(context(), catalog);
    expect(result.ok).toBe(false);
    if (result.ok) {
      // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
      expect(result.projection.ckc.primaryLevel).not.toBe("detailed");
    }
  });

  it("rejects a reordered catalog under canonical fingerprint", () => {
    const catalog: CycleTypeCatalog = {
      version: CYCLE_TYPE_CATALOG_VERSION,
      entries: [
        ...CYCLE_TYPE_CATALOG.entries.slice(1, 2),
        ...CYCLE_TYPE_CATALOG.entries.slice(0, 1),
        ...CYCLE_TYPE_CATALOG.entries.slice(2),
      ].map((entry) => ({
        ...entry,
        ckc: { ...entry.ckc },
        aliases: [...entry.aliases],
      })),
    };
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog, "cyc:framing");
  });

  it("rejects a catalog with an extra entry under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries.push({
        ...entries[0],
        cycleTypeId: "cyc:extra-qa",
        canonicalKey: "extra-qa",
        methodCycleNumber: 16,
        displayOrder: 16,
      });
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });

  it("rejects a catalog missing an entry under canonical fingerprint", () => {
    const catalog = cloneCatalog((entries) => {
      entries.splice(14, 1);
    });
    expect(serializeCatalogFingerprint(catalog)).not.toBe(
      serializeCatalogFingerprint(),
    );
    expectPublicRejectsDivergentCatalog(catalog);
  });
});

describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
  it("keeps the public boundary limited to adopted D2-A and D2-B exports", () => {
    const source = readFileSync(
      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
      "utf8",
    );
    expect(source).toContain(
      'export * from "./domain/ckcQualificationContracts";',
    );
    expect(source).toContain('export * from "./domain/catalogFingerprint";');
    expect(source).toContain('export * from "./domain/catalogProjection";');
    expect(source).toContain(
      'export * from "./domain/ckcQualificationErrors";',
    );
    expect(source).toContain(
      'export * from "./domain/ckcConsumptionProof";',
    );
    expect(source).toContain(
      'export * from "./ports/ckcQualificationResolver";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcReferenceManifest";',
    );
    expect(source).toContain(
      'export * from "./infrastructure/ckcQualificationResolver";',
    );
    expect(source).not.toMatch(
      /QualifyCycleBridge|qualifyCycleWithCkc|ckcQualificationResult|createD2|D2Factory|createCkcQualificationServices/,
    );
  });

  it("keeps production projection free of D2-B/C and runtime I/O imports", () => {
    for (const relative of [
      "ckcQualificationContracts.ts",
      "catalogFingerprint.ts",
      "catalogProjection.ts",
    ]) {
      const source = readFileSync(
        path.resolve(__dirname, `../../../lib/oa/cycle/domain/${relative}`),
        "utf8",
      );
      expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
      expect(source).not.toMatch(/infrastructure\//);
      expect(source).not.toMatch(
        /QualifyCycle|ResolveCycleKnowledgeContract|CkcResolverPort|CycleAuditEvent|CreateCycle|consumed|recommendedProfile|isMorrisDecision/,
      );
    }
  });

  it("does not mutate production catalog entries across calls", () => {
    const before = serializeCatalogFingerprint();
    const first = CYCLE_TYPE_CATALOG.entries[0];
    const firstCkc = first.ckc;
    projectSelectableCycleType(context());
    projectSelectableCycleType(context({ cycleTypeId: "cyc:framing" }));
    expect(serializeCatalogFingerprint()).toBe(before);
    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
    expect(CYCLE_TYPE_CATALOG.entries[0].ckc).toBe(firstCkc);
    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
    expect(Object.isFrozen(first)).toBe(true);
    expect(Object.isFrozen(firstCkc)).toBe(true);
  });
});

```


## État Git final

```
=== FINAL 2026-08-02 23:31:14 CEST (+0200) ===
branch=delivery/sfia-studio-v3-1-d2-b-ckc-resolver
HEAD=bb685f1205b33f887ee27b42ac918c96386a6e33
main=bb685f1205b33f887ee27b42ac918c96386a6e33
origin_main=bb685f1205b33f887ee27b42ac918c96386a6e33
remote_d2b_count=0
staged=0
DIFF_CHECK_PASS
POST_FULL_13=290dcb04ef4662096ab515db1eef19372ad03cb2351e4ee27d64ca113e7a632e
POST_GIT_DIFF=c6bd46e6c0cc38de1aaa61c048269f064832c0e4c768bcdda2f0a9724caf21f5
POST_12=b9a4e5099ef7f27346f74686eb7f2a80a25222a2399728dd0bf62d41cc98f815

```

## Absence mutation / commit / push / PR projet

Confirmée. Seuls artefacts `.tmp-sfia-review/**`. Push handoff L3 borné uniquement.

## Rollback

N/A (aucune mutation package). Empreintes inchangées vs corrective.

## Gate suivant candidat

```
GO PR READINESS SFIA STUDIO V3.1-D2-B CKC RESOLVER —
REVIEW THE QA-REVALIDATED THIRTEEN-FILE PACKAGE, FINAL DIFF, FILE INVENTORY, PACKAGE HASHES, TEST EVIDENCE, FINDINGS, RESERVES, COMMIT BOUNDARY, RISK AND ROLLBACK —
VERIFY D2-A ISOLATION, D2-C EXCLUSION AND MORRIS FAIL-CLOSED AUDIT DECISION —
PREPARE A PR CANDIDATE REVIEW PACK —
NO COMMIT — NO PUSH — NO PR — NO D2-C — NO D2-D — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION
```

Ne pas exécuter automatiquement.

## Verdict

V3.1-D2-B CKC RESOLVER QA REVALIDATION PASS WITH RESERVES —
F-QA-01…06 CLOSED —
CORE CONTRACT AND FULL VALIDATION PASS —
MINOR NON-BLOCKING QA RESERVES DOCUMENTED —
THIRTEEN-FILE PACKAGE UNCHANGED —
READY FOR DISTINCT PR READINESS GATE WITH RESERVES —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-C —
NO D2-D —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
