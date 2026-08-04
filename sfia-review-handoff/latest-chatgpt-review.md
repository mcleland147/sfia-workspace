# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Capitalization Merge H1

## 1. Date / heure / fuseau

Cycle start: 2026-08-04 19:41:08 CEST +0200 / 2026-08-04 17:41:08 UTC
Merge: 2026-08-04T17:41:52Z
Freeze final: 2026-08-04 19:45:14 CEST +0200
Review Pack: 2026-08-04 19:45:57 CEST +0200 / 2026-08-04 17:45:57 UTC

## 2. Cycle

7 — Intégration / DevOps
Sous-cycle : Merge H1 — Capitalization / REX D2-D3

## 3. Profil

Standard

## 4. Typologie

CAPA — documentation-only

## 5. GO Merge H1 consommé

GO MERGE SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — STRATEGY H1
Date/heure Morris : 2026-08-04 19:15 CEST (+0200)

## 6. Gates consommés

- GO CAPITALIZATION — 17:56 CEST
- GO PUBLICATION CAPITALIZATION — 18:28 CEST
- GO PR READINESS CAPITALIZATION — 18:48 CEST
- GO MARK READY CAPITALIZATION — 19:02 CEST
- GO MERGE CAPITALIZATION H1 — 19:15 CEST

## 7. Gates non consommés

- G-D2D-CURSOR-01 ; G-D2D-PERSIST-01 ; G-D2D-D2C-01
- GO POST-MERGE / CLOSURE / BRANCH CLEANUP CAPITALIZATION
- GO METHOD PROMOTION
- D-REX-D2D3-01…06 NOT DECIDED
- aucun GO D2-D4 / cycle suivant / Notion-CMP

## 8. CKC recherché et absent

CKC recherché oui ; détaillé absent ; statut absent.

## 9. Fallback

template v2.6 ; routing ; OM ; rules ; checklist ; handoff Mark Ready ; PR Readiness ; Git/GitHub réel ; précédent H1 PR #310 (forme uniquement).

## 10. Sources consultées

Template/method/checklists ; handoffs dc8569eb / c9c8e224 / 4a2b6fa6 ; commit f4699924 ; PR #311 ; CI #97/#98 ; ruleset 19798462 ; publisher.

## 11. Template canonique

`prompts/templates/sfia-cycle-execution-template.md`

## 12. Handoff Mark Ready

Titre : # ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Capitalization Mark Ready

## 13. Commit / blob handoff

Commit : `dc8569eb66e35367f5e72d9391b1e21c82d6d295`
Blob : `6ccd67328dea58f7644d711a9860eb1258a5da0a`

## 14. Chaîne handoff

`c9c8e224…` → `19a5816d…` → `dc8569eb…`

## 15. Verdict entrant

D2-D3 CAPITALIZATION MARK READY COMPLETE WITH RESERVES —
PR #311 READY FOR REVIEW —
R-PR-CAPA-D2D3-01 SATISFIED —
SCOPE AND REQUIRED CI PRESERVED —
READY FOR MORRIS MERGE DECISION

## 16. Local Git Truth Check initial

```
=== timestamps ===
2026-08-04 19:41:08 CEST +0200
2026-08-04 17:41:08 UTC
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
branch=capitalization/sfia-studio-v3-1-d2-d3-rex
HEAD=f46999246f04d6509f3cf06a7b76ce0ee0d13e8f
parent=e36f12b68545a9ead0d8d0ccbfc55d43973b3521
main=e36f12b68545a9ead0d8d0ccbfc55d43973b3521
upstream=f46999246f04d6509f3cf06a7b76ce0ee0d13e8f
merge_base=e36f12b68545a9ead0d8d0ccbfc55d43973b3521
ahead=1
behind=0
status:
?? .tmp-sfia-review/
?? projects/sfia-studio/app/.tmp-sfia-review/
diff_name:
staged:
remote_capa=f46999246f04d6509f3cf06a7b76ce0ee0d13e8f	refs/heads/capitalization/sfia-studio-v3-1-d2-d3-rex
handoff=dc8569eb66e35367f5e72d9391b1e21c82d6d295
```

## 17–21. Branche / HEAD / main initial / merge-base / ahead-behind

branch=capitalization/sfia-studio-v3-1-d2-d3-rex
HEAD/upstream=`f46999246f04d6509f3cf06a7b76ce0ee0d13e8f`
main initial=`e36f12b68545a9ead0d8d0ccbfc55d43973b3521`
ahead=1 behind=0

## 22–25. Commit / parent / scope / REX

Parent `e36f12b68545a9ead0d8d0ccbfc55d43973b3521`
Scope : 1 fichier ; +575/−0
SHA-256 `fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693`
Blob `78860d593c9b04a6bbb5c9e8f0f6aa400b256475`

## 26–27. PR initiale / body initial

OPEN ; Draft=false ; MERGEABLE/CLEAN ; CI #97 SUCCESS

````markdown
# docs(sfia-studio): add V3.1-D2-D3 capitalization REX

## 1. Summary

This PR adds a single documentation file: the V3.1-D2-D3 Capitalization / REX for the end-to-end read-only coordination lot.

It captures lessons from framing through delivery, Critical QA / corrections / revalidations, publication, PR readiness, mark-ready, merge H1, post-merge QA-G4, closure with reserves, and local capitalization — without promoting method assets and without opening D2-D4.

## 2. Context

- Lot V3.1-D2-D3 already merged via PR #310 (`e36f12b68545a9ead0d8d0ccbfc55d43973b3521`).
- Closure status: **CLOSED WITH RESERVES** (handoff `29a658fb…`).
- Capitalization cycle 15 produced document 05 on branch `capitalization/sfia-studio-v3-1-d2-d3-rex`.
- This publication is documentation-only and remains subject to a distinct Morris merge and post-merge GO chain.
- REX content is **frozen** and byte-identical to Capitalization handoff §25 (SHA-256 `fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693`).

## 3. Scope

**In scope — exactly one file:**

- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-d3-read-only-coordination/05-capitalization-rex.md`

**Out of scope:**

- documents D2-D 20–24, framing README and indexes
- code, tests, configuration and dependencies
- method, templates, prompts and CKC
- D2D3-04 and D2D3-05, which remain BLOCKED
- D2-D4, Notion and CMP
- method promotion and D-REX adoption

## 4. Capitalization coverage

Document sections A–T cover:

- chronology from framing to closure and capitalization
- Morris decisions consumed
- delivered versus blocked scope
- factual observations and lessons
- candidate reusable practices, not promoted
- candidate recommendations, not applied
- future decision pack D-REX-D2D3-01…06, all NOT DECIDED
- 14 findings CLOSED
- eight open accepted reserves or limits and two closed reserves
- anti-claims and future gates

## 5. Morris decisions

Consumed:

- GO CAPITALIZATION SFIA STUDIO V3.1-D2-D3 — 2026-08-04 17:56 CEST
- GO PUBLICATION SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 18:28 CEST
- GO PR READINESS SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 18:48 CEST
- GO MARK READY SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 19:02 CEST

No new product or method decision is created by this PR.

D-REX-D2D3-01…06 remain **NOT DECIDED — MORRIS DECISION REQUIRED**.

## 6. Evidence and metrics

- Package Delivery D2-D3: 18 files, +4368 / −22, hash `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f`
- PR #310 merge: `e36f12b68545a9ead0d8d0ccbfc55d43973b3521`
- CI post-merge #96: SUCCESS
- REX publication commit: `f46999246f04d6509f3cf06a7b76ce0ee0d13e8f`
- REX: 575 lines, sections A–T, SHA-256 `fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693`
- CI publication #97: SUCCESS, including SFIA Studio Required Gate

## 7. Anti-claims

This PR does **not** prove or authorize:

- Cursor live
- sandbox-real
- provider real
- durable persistence
- multi-instance
- restart-safe
- UI Delivery
- strong runtime
- RUN READY
- production-ready
- D2-D4
- lifted open reserves
- method promotion
- adoption of a candidate practice
- Notion or CMP

## 8. Publication status

- PR is Ready for review (`Draft=false`).
- GO PR READINESS Capitalization consumed on 2026-08-04 at 18:48 CEST.
- GO MARK READY Capitalization consumed on 2026-08-04 at 19:02 CEST.
- R-PR-CAPA-D2D3-01: SATISFIED — CLOSURE RECOMMENDED.
- GO MERGE Capitalization: not consumed.
- GO POST-MERGE Capitalization: not consumed.
- GO BRANCH CLEANUP Capitalization: not consumed.
- H1 merge commit remains a candidate strategy only.

## 9. Next gate candidate

`GO MERGE SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — STRATEGY H1`

Candidate only — not consumed.

This candidate does not authorize branch deletion, method promotion, D-REX adoption, D2-D4, Notion or CMP.
````

## 28. CI #97

```
Build and validate SFIA Studio	pass	1m24s	https://github.com/mcleland147/sfia-workspace/actions/runs/30930133145/job/92062468280
Detect SFIA Studio changes	pass	6s	https://github.com/mcleland147/sfia-workspace/actions/runs/30930133145/job/92062407078
SFIA Studio Required Gate	pass	4s	https://github.com/mcleland147/sfia-workspace/actions/runs/30930133145/job/92062889187
```

## 29. Commentaires / reviews

0 / 0 ; aucune REQUEST_CHANGES

## 30–31. Ruleset / stratégie H1

Ruleset 19798462 ; Required Gate obligatoire ; reviews=0 ; allowed_merge_methods includes merge → H1 autorisée et consommée.

## 32–36. Body candidat / diff / refresh / body avant merge

Body candidat = body final (applied). Diff initial→candidat :

```diff
--- initial
+++ candidate
@@ -4,23 +4,24 @@

 This PR adds a single documentation file: the V3.1-D2-D3 Capitalization / REX for the end-to-end read-only coordination lot.

-It captures lessons from framing through delivery, Critical QA / corrections / revalidations, publication, PR readiness, mark-ready, merge H1, post-merge QA-G4, closure with reserves, and local capitalization — without promoting method assets and without opening D2-D4.
+It captures lessons from framing through delivery, Critical QA, corrections, revalidations, publication, PR readiness, mark-ready, merge H1, post-merge QA-G4, closure with reserves, and capitalization — without promoting method assets and without opening D2-D4.

 ## 2. Context

-- Lot V3.1-D2-D3 already merged via PR #310 (`e36f12b68545a9ead0d8d0ccbfc55d43973b3521`).
-- Closure status: **CLOSED WITH RESERVES** (handoff `29a658fb…`).
-- Capitalization cycle 15 produced document 05 on branch `capitalization/sfia-studio-v3-1-d2-d3-rex`.
-- This publication is documentation-only and remains subject to a distinct Morris merge and post-merge GO chain.
-- REX content is **frozen** and byte-identical to Capitalization handoff §25 (SHA-256 `fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693`).
+- Lot V3.1-D2-D3 was already delivered through PR #310 and closed with reserves.
+- This PR publishes the project Capitalization / REX document only.
+- The publication commit is `f46999246f04d6509f3cf06a7b76ce0ee0d13e8f`.
+- The REX content is frozen and byte-identical to Capitalization handoff §25.
+- This PR remains documentation-only.
+- Post-merge validation, branch cleanup and any method decision remain subject to distinct Morris gates.

 ## 3. Scope

-**In scope — exactly one file:**
+In scope — exactly one file:

 - `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-d3-read-only-coordination/05-capitalization-rex.md`

-**Out of scope:**
+Out of scope:

 - documents D2-D 20–24, framing README and indexes
 - code, tests, configuration and dependencies
@@ -52,23 +53,36 @@
 - GO PUBLICATION SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 18:28 CEST
 - GO PR READINESS SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 18:48 CEST
 - GO MARK READY SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 19:02 CEST
+- GO MERGE SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — STRATEGY H1 — 2026-08-04 19:15 CEST

-No new product or method decision is created by this PR.
+No product or method decision is created by this PR.

-D-REX-D2D3-01…06 remain **NOT DECIDED — MORRIS DECISION REQUIRED**.
+D-REX-D2D3-01…06 remain NOT DECIDED — MORRIS DECISION REQUIRED.

 ## 6. Evidence and metrics

-- Package Delivery D2-D3: 18 files, +4368 / −22, hash `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f`
-- PR #310 merge: `e36f12b68545a9ead0d8d0ccbfc55d43973b3521`
-- CI post-merge #96: SUCCESS
-- REX publication commit: `f46999246f04d6509f3cf06a7b76ce0ee0d13e8f`
-- REX: 575 lines, sections A–T, SHA-256 `fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693`
-- CI publication #97: SUCCESS, including SFIA Studio Required Gate
+- Delivery package D2-D3: 18 files, +4368 / −22
+- Delivery package hash: `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f`
+- Delivery merge PR #310: `e36f12b68545a9ead0d8d0ccbfc55d43973b3521`
+- Delivery post-merge CI #96: SUCCESS
+- Capitalization publication commit: `f46999246f04d6509f3cf06a7b76ce0ee0d13e8f`
+- Capitalization REX: 575 lines, sections A–T
+- REX SHA-256: `fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693`
+- Capitalization publication CI #97: SUCCESS, including SFIA Studio Required Gate

-## 7. Anti-claims
+## 7. Findings, reserves and boundaries

-This PR does **not** prove or authorize:
+- 14 D2-D3 QA findings remain formally CLOSED.
+- R-PR-CAPA-D2D3-01 remains SATISFIED — CLOSURE RECOMMENDED.
+- It is not declared CLOSED or LIFTED by this merge cycle.
+- Existing open reserves remain OPEN NOT LIFTED.
+- D2D3-04 remains BLOCKED — NOT DELIVERED.
+- D2D3-05 remains BLOCKED — NOT DELIVERED.
+- D-REX-D2D3-01…06 remain NOT DECIDED.
+
+## 8. Anti-claims
+
+This PR does not prove or authorize:

 - Cursor live
 - sandbox-real
@@ -86,20 +100,19 @@
 - adoption of a candidate practice
 - Notion or CMP

-## 8. Publication status
+## 9. Merge status and future gates

-- PR is Ready for review (`Draft=false`).
-- GO PR READINESS Capitalization consumed on 2026-08-04 at 18:48 CEST.
-- GO MARK READY Capitalization consumed on 2026-08-04 at 19:02 CEST.
-- R-PR-CAPA-D2D3-01: SATISFIED — CLOSURE RECOMMENDED.
-- GO MERGE Capitalization: not consumed.
-- GO POST-MERGE Capitalization: not consumed.
-- GO BRANCH CLEANUP Capitalization: not consumed.
-- H1 merge commit remains a candidate strategy only.
+- PR is Ready for review.
+- GO Merge Capitalization H1 is consumed for this cycle.
+- H1 is the only authorized merge strategy.
+- GO Post-Merge Capitalization is not consumed.
+- GO Closure Capitalization is not consumed.
+- GO Branch Cleanup Capitalization is not consumed.
+- The Capitalization branch must remain preserved after merge.

-## 9. Next gate candidate
+## 10. Next gate candidate

-`GO MERGE SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — STRATEGY H1`
+`GO POST-MERGE SFIA STUDIO V3.1-D2-D3 CAPITALIZATION`

 Candidate only — not consumed.
```

Commande : `gh pr edit 311 --body-file .tmp-sfia-review/d2d3-capitalization-merge-pr-body.md`
Résultat : body distant identical (4297 bytes).

Body distant final :

````markdown
# docs(sfia-studio): add V3.1-D2-D3 capitalization REX

## 1. Summary

This PR adds a single documentation file: the V3.1-D2-D3 Capitalization / REX for the end-to-end read-only coordination lot.

It captures lessons from framing through delivery, Critical QA, corrections, revalidations, publication, PR readiness, mark-ready, merge H1, post-merge QA-G4, closure with reserves, and capitalization — without promoting method assets and without opening D2-D4.

## 2. Context

- Lot V3.1-D2-D3 was already delivered through PR #310 and closed with reserves.
- This PR publishes the project Capitalization / REX document only.
- The publication commit is `f46999246f04d6509f3cf06a7b76ce0ee0d13e8f`.
- The REX content is frozen and byte-identical to Capitalization handoff §25.
- This PR remains documentation-only.
- Post-merge validation, branch cleanup and any method decision remain subject to distinct Morris gates.

## 3. Scope

In scope — exactly one file:

- `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-d3-read-only-coordination/05-capitalization-rex.md`

Out of scope:

- documents D2-D 20–24, framing README and indexes
- code, tests, configuration and dependencies
- method, templates, prompts and CKC
- D2D3-04 and D2D3-05, which remain BLOCKED
- D2-D4, Notion and CMP
- method promotion and D-REX adoption

## 4. Capitalization coverage

Document sections A–T cover:

- chronology from framing to closure and capitalization
- Morris decisions consumed
- delivered versus blocked scope
- factual observations and lessons
- candidate reusable practices, not promoted
- candidate recommendations, not applied
- future decision pack D-REX-D2D3-01…06, all NOT DECIDED
- 14 findings CLOSED
- eight open accepted reserves or limits and two closed reserves
- anti-claims and future gates

## 5. Morris decisions

Consumed:

- GO CAPITALIZATION SFIA STUDIO V3.1-D2-D3 — 2026-08-04 17:56 CEST
- GO PUBLICATION SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 18:28 CEST
- GO PR READINESS SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 18:48 CEST
- GO MARK READY SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — 2026-08-04 19:02 CEST
- GO MERGE SFIA STUDIO V3.1-D2-D3 CAPITALIZATION — STRATEGY H1 — 2026-08-04 19:15 CEST

No product or method decision is created by this PR.

D-REX-D2D3-01…06 remain NOT DECIDED — MORRIS DECISION REQUIRED.

## 6. Evidence and metrics

- Delivery package D2-D3: 18 files, +4368 / −22
- Delivery package hash: `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f`
- Delivery merge PR #310: `e36f12b68545a9ead0d8d0ccbfc55d43973b3521`
- Delivery post-merge CI #96: SUCCESS
- Capitalization publication commit: `f46999246f04d6509f3cf06a7b76ce0ee0d13e8f`
- Capitalization REX: 575 lines, sections A–T
- REX SHA-256: `fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693`
- Capitalization publication CI #97: SUCCESS, including SFIA Studio Required Gate

## 7. Findings, reserves and boundaries

- 14 D2-D3 QA findings remain formally CLOSED.
- R-PR-CAPA-D2D3-01 remains SATISFIED — CLOSURE RECOMMENDED.
- It is not declared CLOSED or LIFTED by this merge cycle.
- Existing open reserves remain OPEN NOT LIFTED.
- D2D3-04 remains BLOCKED — NOT DELIVERED.
- D2D3-05 remains BLOCKED — NOT DELIVERED.
- D-REX-D2D3-01…06 remain NOT DECIDED.

## 8. Anti-claims

This PR does not prove or authorize:

- Cursor live
- sandbox-real
- provider real
- durable persistence
- multi-instance
- restart-safe
- UI Delivery
- strong runtime
- RUN READY
- production-ready
- D2-D4
- lifted open reserves
- method promotion
- adoption of a candidate practice
- Notion or CMP

## 9. Merge status and future gates

- PR is Ready for review.
- GO Merge Capitalization H1 is consumed for this cycle.
- H1 is the only authorized merge strategy.
- GO Post-Merge Capitalization is not consumed.
- GO Closure Capitalization is not consumed.
- GO Branch Cleanup Capitalization is not consumed.
- The Capitalization branch must remain preserved after merge.

## 10. Next gate candidate

`GO POST-MERGE SFIA STUDIO V3.1-D2-D3 CAPITALIZATION`

Candidate only — not consumed.

This candidate does not authorize branch deletion, method promotion, D-REX adoption, D2-D4, Notion or CMP.
````

## 37. Freeze immédiat pré-merge

main=e36f12b6… ; HEAD/upstream=f4699924… ; ahead=1 behind=0 ; OPEN Draft=false MERGEABLE ; Required Gate SUCCESS ; autoMerge=null

## 38–39. Commande / sortie merge

```
gh pr merge 311 --repo mcleland147/sfia-workspace --merge --match-head-commit f46999246f04d6509f3cf06a7b76ce0ee0d13e8f --subject "Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex" --body "docs(sfia-studio): add V3.1-D2-D3 capitalization REX"
```

```
(gh stdout empty; PR state MERGED with mergeCommit confirmed)
```

## 40–42. PR après merge / MERGE_SHA / mergedAt

state=MERGED ; Draft=false ; mergeCommit=`8dc54db0069eed78a8d8930cc2b035450ab56ad1` ; mergedAt=2026-08-04T17:41:52Z ; autoMergeRequest=null

## 43–45. Merge commit / message / parents

```
commit 8dc54db0069eed78a8d8930cc2b035450ab56ad1
Merge: e36f12b f469992
Author:     mcleland147 <m.cleland@live.fr>
AuthorDate: Tue Aug 4 19:41:51 2026 +0200
Commit:     GitHub <noreply@github.com>
CommitDate: Tue Aug 4 19:41:51 2026 +0200

    Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex

    docs(sfia-studio): add V3.1-D2-D3 capitalization REX
```

Parents exacts :
1. `e36f12b68545a9ead0d8d0ccbfc55d43973b3521`
2. `f46999246f04d6509f3cf06a7b76ce0ee0d13e8f`

Message exact :
Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex

docs(sfia-studio): add V3.1-D2-D3 capitalization REX

## 46–48. Trees

capa=merge=main=`50c52fb09bf8d20349483527c8d1c46e5783ec13`

## 49–50. Diff ancien main → merge / scope

```
=== merge shape ===
origin_main=8dc54db0069eed78a8d8930cc2b035450ab56ad1
parents=8dc54db0069eed78a8d8930cc2b035450ab56ad1 e36f12b68545a9ead0d8d0ccbfc55d43973b3521 f46999246f04d6509f3cf06a7b76ce0ee0d13e8f
message<<
Merge pull request #311 from mcleland147/capitalization/sfia-studio-v3-1-d2-d3-rex

docs(sfia-studio): add V3.1-D2-D3 capitalization REX
>>
=== diff old main -> merge ===
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-d3-read-only-coordination/05-capitalization-rex.md
 .../05-capitalization-rex.md                       | 575 +++++++++++++++++++++
 1 file changed, 575 insertions(+)
=== trees ===
capa_tree=50c52fb09bf8d20349483527c8d1c46e5783ec13
merge_tree=50c52fb09bf8d20349483527c8d1c46e5783ec13
main_tree=50c52fb09bf8d20349483527c8d1c46e5783ec13
=== rex ===
hash_merge=fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693  -
hash_main=fd98ede9db0e09e552825332b0455c88dd7debd3739ed11cc29f6dd728381693  -
blob=78860d593c9b04a6bbb5c9e8f0f6aa400b256475
=== branch preserve ===
f46999246f04d6509f3cf06a7b76ce0ee0d13e8f refs/heads/capitalization/sfia-studio-v3-1-d2-d3-rex
f46999246f04d6509f3cf06a7b76ce0ee0d13e8f	refs/heads/capitalization/sfia-studio-v3-1-d2-d3-rex
ancestor_ok
```

Diff fichier complet :

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-d3-read-only-coordination/05-capitalization-rex.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-d3-read-only-coordination/05-capitalization-rex.md
new file mode 100644
index 0000000..78860d5
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-d3-read-only-coordination/05-capitalization-rex.md
@@ -0,0 +1,575 @@
+# SFIA Studio V3.1-D2-D3 — Capitalization / REX
+
+## A. Statut et périmètre du REX
+
+| Champ | Valeur |
+|-------|--------|
+| **Lot** | SFIA Studio V3.1-D2-D3 — End-to-end read-only coordination |
+| **Statut du lot** | **CLOSED WITH RESERVES** |
+| **Date de capitalisation** | 2026-08-04 18:19:16 CEST (+0200) / 2026-08-04 16:19:16 UTC |
+| **Branche locale** | `capitalization/sfia-studio-v3-1-d2-d3-rex` |
+| **Base** | `main` @ `e36f12b68545a9ead0d8d0ccbfc55d43973b3521` |
+| **Décision Morris consommée** | `GO CAPITALIZATION SFIA STUDIO V3.1-D2-D3` — 2026-08-04 17:56 CEST (+0200) |
+| **Profil / profondeur / typologie** | Capitalization / Standard / CAPA |
+| **Nature** | Documentation-only — un unique fichier projet local non publié |
+| **Source de vérité finale du lot** | Handoff Closure `29a658fb740b1e8331511ea02e47f2a1199dec0d` / blob `fa45e5e2d0dbb60c856120e584574aecc3a8fd61` |
+| **CKC détaillé** | Absente — fallback méthode + précédent D1 + handoffs (candidate, non autorité) |
+
+**Périmètre livré et clôturé :** D2D3-01, D2D3-02, D2D3-03, D2D3-06, D2D3-07.
+
+**Périmètre non livré (hors clôture) :**
+
+- D2D3-04 — BLOCKED — NOT DELIVERED — FUTURE DEDICATED GO REQUIRED
+- D2D3-05 — BLOCKED — NOT DELIVERED — FUTURE DEDICATED GO REQUIRED
+
+**Anti-claims principaux de ce REX :** ce document ne prouve pas Cursor live, sandbox-real, provider real, Git write produit, persistance durable, multi-instance, restart-safe, UI Delivery, strong runtime, RUN READY, production-ready, autorisation D2-D4, levée des réserves ouvertes, promotion méthode, ni adoption d’une pratique candidate.
+
+**Décision Morris —** D2-D3 reste CLOSED WITH RESERVES ; la capitalisation ne rouvre pas le lot.
+
+---
+
+## B. Sources et hiérarchie de preuve
+
+### Hiérarchie
+
+1. **Git / GitHub autoritatifs** (commits, trees, CI, PR #310, branche handoff)
+2. **Décisions Morris** explicitement consommées (timestamps des handoffs)
+3. **Sources projet** (documents 20–24, précédent D1 REX)
+4. **Mémoire conversationnelle** (navigation uniquement)
+5. **Hypothèse** (interdite pour les faits critiques)
+
+### Preuve autoritative
+
+| Élément | Référence |
+|---------|-----------|
+| `origin/main` / merge | `e36f12b68545a9ead0d8d0ccbfc55d43973b3521` |
+| Commit Delivery | `9d1b3d2520f049dba0bf811380167003ca26ad82` |
+| Parents merge | `de2800aa836bb8221dc2912414126b7a3e6a1f58` + `9d1b3d2520f049dba0bf811380167003ca26ad82` |
+| PR | #310 — MERGED 2026-08-04T15:16:53Z |
+| Package | 18 fichiers ; +4368 / −22 ; hash SHA-256 length-prefixed `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f` |
+| Tree | `b9306fb561fc28104c3290f08989859b79dde6f8` |
+| CI post-merge | SFIA Studio CI run #96 / ID `30923346607` — SUCCESS |
+| Handoff Closure | `29a658fb…` / blob `fa45e5e2…` |
+
+### Preuve de contexte
+
+Handoffs Delivery → Closure : `156f68b`, `2ea275d`, `6b00c67`, `5dbcee9`, `9b2d199`, `4b031e2`, `cabb7de`, `4052b19`, `0bebf6c`, `6d3af65`, `44fba35`, `abfb0f4`, `2f53fd2`, `29a658f` (branche `sfia/review-handoff`).
+
+Documents D2-D 20–24 (cadrage / conception / architectures / backlog) — contexte de trajectoire, non modifiés.
+
+Précédent V3.1-D1 : `…/first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/05-capitalization-rex.md`.
+
+### Inférence / candidate
+
+Les enseignements, pratiques candidates, recommandations candidates et décisions D-REX sont **candidates** — non adoptées, non promues.
+
+---
+
+## C. Chronologie complète
+
+Timestamps supportés par handoffs / Git / GitHub. Aucun timestamp inventé.
+
+| # | Étape | Timestamp (CEST) | Preuve |
+|---|-------|------------------|--------|
+| 1 | Cadrage / conception / architectures / backlog D2-D (docs 20–24) | Antérieur au 2026-08-04 | Docs projet ; arbitrages CAD/TA adoptés |
+| 2 | Delivery D2-D1 / D2-D2 (lots antérieurs) | Antérieur | Trajectoire D2-D ; hors REX détail |
+| 3 | GO Delivery D2-D3 | 2026-08-04 11:15 | Handoff `156f68b` |
+| 4 | Delivery Critical locale | ~11:41 | Handoff Delivery |
+| 5 | GO QA Critical | 11:49 | Handoff `2ea275d` — **BLOCKED** (F-QA-D2D3-01…10) |
+| 6 | GO Corrections (F-01…10) | 12:13 | Handoff `6b00c67` |
+| 7 | GO Revalidation 1 | 12:45 | Handoff `5dbcee9` — **BLOCKED** (nouveaux findings REV) |
+| 8 | GO Follow-up Corrections (F-05 + REV-01/02) | 13:03 | Handoff `9b2d199` |
+| 9 | GO Revalidation 2 | 13:32 | Handoff `4b031e2` — **BLOCKED** (REV2) ; 29/29 + 15/15 PASS |
+| 10 | GO Corr3 + arbitrage REV2-02 | 13:50 | Handoff `cabb7de` — hash gelé `cb937ada…` |
+| 11 | GO Revalidation 3 | 14:19 | Handoff `4052b19` — **PASS WITH RESERVES** ; 17/17 P-REV2 |
+| 12 | GO Publication | 14:37 | Handoff `0bebf6c` — commit `9d1b3d25…` ; draft PR #310 |
+| 13 | GO PR Readiness | 15:08 | Handoff `6d3af65` — PASS WITH RESERVES ; R-PR-D2D3-01 |
+| 14 | GO Mark Ready | 15:27 | Handoff `44fba35` — body refresh ; R-PR-D2D3-01 SATISFIED |
+| 15 | Merge H1 PR #310 | 17:02 GO / merge 17:16:52 | Handoff `abfb0f4` ; merge `e36f12b6…` ; CI #96 |
+| 16 | GO Post-Merge QA-G4 | 17:25 | Handoff `2f53fd2` — PASS WITH RESERVES |
+| 17 | GO Closure + cleanup | 17:40 | Handoff `29a658f` — CLOSED WITH RESERVES ; branche Delivery absente |
+| 18 | GO Capitalization | 17:56 | Ce cycle — document local uniquement |
+
+---
+
+## D. Décisions Morris consommées
+
+Liste exhaustive des GO réellement consommés pour D2-D3 (aucune nouvelle décision créée ici) :
+
+| Décision | Timestamp | Effet |
+|----------|-----------|-------|
+| GO DELIVERY SFIA STUDIO V3.1-D2-D3 | 2026-08-04 11:15 CEST | Autorise Delivery read-only coordination |
+| GO QA … PROFILE CRITICAL | 11:49 | QA indépendante initiale |
+| GO CORRECTIONS … F-QA-D2D3-01…10 | 12:13 | Première vague corrective |
+| GO QA … REVALIDATION | 12:45 | Revalidation 1 |
+| GO CORRECTIONS … F-05 + REV-01/02 | 13:03 | Deuxième vague |
+| GO QA … REVALIDATION 2 | 13:32 | Revalidation 2 |
+| GO CORRECTIONS … REV2-01 — ARBITRATE REV2-02 | 13:50 | Troisième vague + arbitrage fail-closed |
+| GO QA … REVALIDATION 3 | 14:19 | PASS WITH RESERVES |
+| GO PUBLICATION | 14:37 | Commit Delivery + draft PR #310 |
+| GO PR READINESS | 15:08 | Matrice readiness |
+| GO MARK READY | 15:27 | `gh pr ready` + body refresh |
+| GO MERGE … STRATEGY H1 | 17:02 | Merge commit sur main |
+| GO POST-MERGE | 17:25 | QA-G4 |
+| GO CLOSURE … WITH RESERVES — INCLUDE DELIVERY BRANCH CLEANUP | 17:40 | Clôture + suppression branche Delivery |
+| GO CAPITALIZATION | 17:56 | Ce REX local |
+
+**Décision Morris —** aucun GO D2-D4, Notion/CMP, METHOD PROMOTION, PUBLICATION CAPITALIZATION, PR READINESS CAPITALIZATION ou MERGE CAPITALIZATION n’a été consommé.
+
+---
+
+## E. Périmètre livré et frontières
+
+### Livré et clôturé
+
+- **D2D3-01** — coordination end-to-end read-only (fixture)
+- **D2D3-02** — projection d’exécution
+- **D2D3-03** — evidence / truthfulness
+- **D2D3-06** — négatif / résilience
+- **D2D3-07** — readiness UX liée aux artefacts
+
+### Non livré
+
+- **D2D3-04** — BLOCKED — NOT DELIVERED — FUTURE DEDICATED GO REQUIRED (G-D2D-CURSOR-01 — Cursor product capabilities UNVERIFIED)
+- **D2D3-05** — BLOCKED — NOT DELIVERED — FUTURE DEDICATED GO REQUIRED (G-D2D-PERSIST-01 — mémoire process-local ; durable=false ; multiInstance=false ; restartSafe=false)
+
+**Observation —** la clôture CLOSED WITH RESERVES porte sur le périmètre livré ; elle ne livre pas, n’abandonne pas et ne reporte pas automatiquement D2D3-04/05 en D2-D4.
+
+---
+
+## F. Résultat technique
+
+Description factuelle héritée des handoffs QA / Closure (aucune réexécution technique dans ce cycle) :
+
+- Coordination end-to-end **read-only**, source **fixture-only**.
+- Huit états canoniques ; `partial` n’est jamais `succeeded`.
+- Cancellation et timeout sont terminaux.
+- Late result : evidence-only ; redaction fail-closed (`late_result_redacted` après Corr3).
+- Projection reconstruite depuis `unknown` + allowlist ; pas de pass-through hostile.
+- Evidence officielle et redaction fail-closed sur clés/motifs sensibles structurés.
+- `correlationId` / lane validés **avant** engagement provider.
+- Event sink non autoritatif ; throws contenus.
+- Diagnostics provider exacts ; normalisation de chemins partagée.
+- Mémoire **process-local** uniquement (`composeExecutionRunD2D3` réutilise memory ; durable=false).
+- Readiness UX liée aux artefacts (run + projection + evidence).
+- **Absence** de runtime fort démontré ; pas de Cursor sandbox-real/live ; pas de provider real.
+
+**Observation —** le package gelé sur main (18 fichiers, hash `cb937ada…`) est la frontière technique autoritative du livré.
+
+---
+
+## G. Parcours QA et corrections
+
+### Observation —
+
+- QA Critical initiale a **bloqué** sur 10 findings (F-QA-D2D3-01…10) : authority de source, readiness non liée, sink throws, projection leaks, late evidence, validation avant port, accessors hostiles, cancel diagnostics, timeout invalide, paths encodés.
+- Trois vagues correction / revalidation indépendantes :
+  1. Corr1 → Rev1 : 14/15 P-REV PASS ; **P-REV-08 FAIL** (redaction late incomplete).
+  2. Corr2 → Rev2 : 29/29 + 15/15 PASS ; **nouveaux** F-QA-REV2-D2D3-01/02 (correlationId/lane ; enveloppes hostiles).
+  3. Corr3 + arbitrage Morris fail-closed sur REV2-02 → Rev3 : **PASS WITH RESERVES** ; 17/17 P-REV2 ; P-REV3 PASS.
+- Post-merge QA-G4 a re-vérifié les 14 findings sur main (trees byte-identical).
+- À la Closure : **14 findings formellement CLOSED**.
+
+### Enseignement —
+
+- La revalidation indépendante a une valeur supérieure à la non-régression locale seule : elle a révélé des findings absents de la vague précédente.
+- L’arbitrage fail-closed (REV2-02) a évité une correction opportuniste trop large tout en fermant le finding sous contrat explicite Morris.
+- Les tests adversariaux ajoutés après chaque correction ont rendu les régressions détectables.
+
+---
+
+## H. Chaîne Git, PR et CI
+
+| Élément | Valeur |
+|---------|--------|
+| Base pré-Delivery | `de2800aa836bb8221dc2912414126b7a3e6a1f58` |
+| Commit Delivery | `9d1b3d2520f049dba0bf811380167003ca26ad82` |
+| PR | #310 — `feat(sfia-studio): add V3.1-D2-D3 read-only coordination` |
+| Merge H1 | `e36f12b68545a9ead0d8d0ccbfc55d43973b3521` |
+| Parents | `de2800aa…` + `9d1b3d25…` |
+| Package | 18 fichiers ; +4368 / −22 |
+| Hash gelé | `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f` |
+| CI PR (#95) | SUCCESS (héritée publication / readiness) |
+| CI post-merge (#96) | run ID `30923346607` — Detect / Build and validate / Required Gate SUCCESS |
+| Cleanup | branche `delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination` absente local + remote |
+
+**Observation —** le flux Review Handoff (`sfia/review-handoff`, mono-fichier `latest-chatgpt-review.md`) est **séparé** du flux projet (main / PR #310). Les handoffs ne constituent pas des commits du package Delivery.
+
+---
+
+## I. Métriques et preuves quantitatives
+
+| Métrique | Valeur | Source |
+|----------|--------|--------|
+| Fichiers package | 18 | PR #310 / merge stat |
+| Diff package | +4368 / −22 | `git show --stat` merge/Delivery |
+| Hash SHA-256 length-prefixed | `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f` | Closure / Corr3 / Rev3 / Publication |
+| Tree SHA | `b9306fb561fc28104c3290f08989859b79dde6f8` | Post-merge / Closure |
+| Probes initiaux | 29/29 PASS | Rev2 / Rev3 handoffs |
+| P-REV | 15/15 PASS | Rev2 / Rev3 |
+| P-REV2 suite | 17/17 PASS | Rev3 |
+| Regression | 95 PASS | Post-merge / Corr3 |
+| Targeted | 105 PASS | Post-merge / Corr3 |
+| execution-run | 28 fichiers / 270 tests | Post-merge |
+| Vitest full | 130 fichiers / 1316 tests | Post-merge |
+| Governance | 73 | Post-merge / Closure |
+| typecheck / lint / build | PASS | Post-merge / Closure |
+| Findings fermés | 14 | Closure |
+| Réserves satisfaites fermées | 2 (R-CORR-D2D3-02, R-PR-D2D3-01) | Closure |
+| Réserves / limites ouvertes acceptées | 8 (voir §L) | Closure |
+
+**Observation —** ces métriques sont **héritées** ; ce cycle Capitalization n’a pas réexécuté Vitest / typecheck / lint / build / governance.
+
+---
+
+## J. État final de clôture
+
+Verdict exact du handoff Closure :
+
+```
+D2-D3 CLOSURE COMPLETE WITH RESERVES —
+STATUS CLOSED WITH RESERVES —
+14 QA FINDINGS FORMALLY CLOSED —
+DELIVERY BRANCH CLEANUP COMPLETE —
+MAIN AND CI PRESERVED —
+NO NEXT CYCLE AUTHORIZED
+```
+
+**Enseignement —** CLOSED WITH RESERVES n’est pas un échec : le périmètre autorisé est livré, mergé, vérifié et clôturé. Les réserves documentent des limites acceptées, non des defects non traités du livré.
+
+**Décision Morris —** la clôture n’autorise aucun cycle suivant (pas de D2-D4, pas de correction opportuniste des réserves, pas de Notion/CMP).
+
+---
+
+## K. Findings fermés
+
+Statuts finaux (handoff Closure) — non rouverts, non renommés :
+
+1. F-QA-D2D3-01 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+2. F-QA-D2D3-02 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+3. F-QA-D2D3-03 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+4. F-QA-D2D3-04 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+5. F-QA-D2D3-05 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+6. F-QA-D2D3-06 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+7. F-QA-D2D3-07 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+8. F-QA-D2D3-08 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+9. F-QA-D2D3-09 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+10. F-QA-D2D3-10 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+11. F-QA-REV-D2D3-01 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+12. F-QA-REV-D2D3-02 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+13. F-QA-REV2-D2D3-01 — CLOSED — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4 — MORRIS CLOSURE GO CONSUMED
+14. F-QA-REV2-D2D3-02 — CLOSED — **ARBITRATED FAIL-CLOSED CONTRACT ACCEPTED BY MORRIS** — VERIFIED IN CRITICAL QA AND POST-MERGE QA-G4
+
+---
+
+## L. Réserves et limites
+
+### Réserves acceptées — OPEN NOT LIFTED
+
+- R-QA-REV-01 — ACCEPTED FOR CLOSURE — OPEN NOT LIFTED
+- R-QA-REV-02 — ACCEPTED FOR CLOSURE — OPEN NOT LIFTED
+- R-QA-D2C-01 — ACCEPTED FOR CLOSURE — OPEN NOT LIFTED — G-D2D-D2C-01 REQUIRED FOR FUTURE SCOPE
+- Cursor product capabilities — UNVERIFIED (G-D2D-CURSOR-01)
+- memory process-local only (G-D2D-PERSIST-01)
+- R-PR-D2D2-01 — ACCEPTED INHERITED MINOR RESERVE — OPEN NOT LIFTED
+- R-CORR-D2D3-01 — ACCEPTED LOCAL D2-D3 BOUND — TIMEOUT 60 000 MS — OPEN NOT LIFTED
+- R-QA-REV3-D2D3-TIME-01 — ACCEPTED MINOR TRACEABILITY RESERVE — OPEN NOT LIFTED
+
+### Réserves fermées
+
+- R-CORR-D2D3-02 — CLOSED — SATISFIED AND VERIFIED
+- R-PR-D2D3-01 — CLOSED — SATISFIED AND VERIFIED
+
+**Observation —** les réserves ouvertes ne sont ni corrigées ni levées par ce REX.
+
+---
+
+## M. Observations
+
+Observation — Le hash package `cb937ada…` a été gelé dès Corr3 et conservé inchangé jusqu’à Closure / main.
+
+Observation — Les probes adversariaux (P-QA, P-REV, P-REV2, P-REV3) ont détecté des defects que les suites nominales seules n’avaient pas exposés.
+
+Observation — Chaque vague de correction a généré de **nouveaux** findings en revalidation indépendante (REV puis REV2), jusqu’à Rev3 PASS WITH RESERVES.
+
+Observation — La séparation fixture / sandbox-real / real a été maintenue : seule la source fixture est engagée ; Cursor et provider real restent hors preuve.
+
+Observation — Le mark-ready avec rafraîchissement borné du body PR a permis de clôturer R-PR-D2D3-01 (métadonnées stale) sans toucher au package.
+
+Observation — Le Review Handoff mono-fichier sur branche séparée a fourni une chaîne de preuves chronologique vérifiable à distance, distincte de main.
+
+Observation — Le cleanup Delivery (local `-d` + remote `--delete` + prune) a laissé main et CI intacts et la branche Delivery absente.
+
+Observation — Le nombre de gates et revalidations (3 corrections + 3 revalidations + publication → closure) a un coût élevé en temps calendaire (≈ 11:15 → 17:40 CEST le même jour) pour un package de 18 fichiers.
+
+Observation — Le cycle de clôture (post-merge, closure, capitalization) n’a introduit **aucune dette code** : aucun fichier applicatif modifié après le freeze `cb937ada…`.
+
+Observation — CI PASS (#95/#96) prouve la gate Required du workflow Studio, pas une readiness production ou RUN.
+
+---
+
+## N. Enseignements
+
+Enseignement — Fail-closed sur données non fiables (enveloppes hostiles, late evidence) réduit le risque de claims faux mieux qu’une tentative de « réparation » partielle.
+
+Enseignement — Valider `correlationId` / lane **avant** toute reconstruction ou engagement évite des états partiels incohérents.
+
+Enseignement — Une autorité d’état unique (coordinator + artefacts canoniques) est préférable à des booléens UX découplés.
+
+Enseignement — Des preuves reproductibles (hash package, matrices de probes, handoffs distants) valent mieux que des narratives de session.
+
+Enseignement — Des tests passants ne remplacent pas une décision Morris (publication, merge, clôture, capitalisation restent des gates distincts).
+
+Enseignement — Clôturer un lot n’ouvre pas le lot suivant ; confondre les deux crée de la dette de trajectoire.
+
+Enseignement — La granularité des gates doit rester proportionnée : utile pour Critical, coûteuse si généralisée sans besoin.
+
+Enseignement — Documenter une réserve acceptée est préférable à une correction opportuniste hors GO lorsque le périmètre livré est déjà sûr.
+
+---
+
+## O. Pratiques candidates réutilisables
+
+Aucune pratique ci-dessous n’est promue dans `method/**`. Gate de promotion : **GO METHOD PROMOTION** (non consommé).
+
+### Pratique candidate réutilisable — Package hash freeze (SHA-256 length-prefixed)
+
+- **Bénéfice :** identité byte-stable entre QA, publication, PR, post-merge.
+- **Coût :** discipline de staging ; recalcul à chaque correction.
+- **Conditions :** package fini borné ; manifeste explicite.
+- **Risque de dette :** faux sentiment de « production-ready ».
+- **Automatisation candidate :** script de freeze + vérification CI.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+### Pratique candidate réutilisable — Matrice permanente de regression findings
+
+- **Bénéfice :** non-régression durable des findings fermés.
+- **Coût :** maintenance des probes ; taille de suite.
+- **Conditions :** findings stables et nommés.
+- **Risque de dette :** matrice qui dérive du comportement réel.
+- **Automatisation candidate :** scaffold de matrice par finding.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+### Pratique candidate réutilisable — Probes adversariaux après chaque correction
+
+- **Bénéfice :** découverte de findings de second ordre.
+- **Coût :** cycles QA supplémentaires.
+- **Conditions :** profil Critical ; budget temps.
+- **Risque de dette :** sur-QA sur lots mineurs.
+- **Automatisation candidate :** checklist de nouveaux probes post-fix.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+### Pratique candidate réutilisable — Séparation fixture / sandbox-real / real
+
+- **Bénéfice :** anti-claims clairs ; frontières de preuve.
+- **Coût :** discipline éditoriale et de code.
+- **Conditions :** ports provider explicites.
+- **Risque de dette :** confusion si labels absents.
+- **Automatisation candidate :** lint / tests d’authority de source.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+### Pratique candidate réutilisable — Vérification correlationId/lane avant engagement
+
+- **Bénéfice :** intégrité de corrélation ; fail-closed précoce.
+- **Coût :** règles de validation supplémentaires.
+- **Conditions :** contrats provider avec corrélation.
+- **Risque de dette :** rejets trop stricts si arbitrage absent.
+- **Automatisation candidate :** invariants unitaires.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+### Pratique candidate réutilisable — Evidence tardive fail-closed
+
+- **Bénéfice :** pas de fuite de secrets dans summaries.
+- **Coût :** redaction conservative ; faux positifs potentiels (mitigés par exact-key discrimination).
+- **Conditions :** surfaces d’evidence exposées.
+- **Risque de dette :** redaction trop large → perte d’observabilité.
+- **Automatisation candidate :** matrices de leakage.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+### Pratique candidate réutilisable — Review Handoff mono-fichier vérifié à distance
+
+- **Bénéfice :** preuve chronologique hors main ; relecture ChatGPT.
+- **Coût :** publisher + discipline FF.
+- **Conditions :** branche `sfia/review-handoff` ; script canonique.
+- **Risque de dette :** confusion handoff ≠ publication projet.
+- **Automatisation candidate :** `publish-review-handoff.sh` (déjà présent).
+- **Gate promotion :** GO METHOD PROMOTION (si généralisé hors Studio).
+
+### Pratique candidate réutilisable — Rafraîchissement borné des métadonnées PR
+
+- **Bénéfice :** alignement GO / body sans toucher au code.
+- **Coût :** revue attentive du diff body.
+- **Conditions :** GO mark-ready / merge autorisant body-only.
+- **Risque de dette :** drift si body devient source de vérité produit.
+- **Automatisation candidate :** checklist de champs GO.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+### Pratique candidate réutilisable — Merge commit H1 pour incrément atomique
+
+- **Bénéfice :** parents explicites ; histoire lisible.
+- **Coût :** un merge commit supplémentaire.
+- **Conditions :** PR mono-commit Delivery préférable.
+- **Risque de dette :** historique plus bruyant si multiplié.
+- **Automatisation candidate :** stratégie documentée dans readiness.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+### Pratique candidate réutilisable — Closure + cleanup sous GO explicite
+
+- **Bénéfice :** main propre ; pas de branche Delivery orpheline.
+- **Coût :** gate supplémentaire.
+- **Conditions :** post-merge PASS ; ancestor vérifié.
+- **Risque de dette :** cleanup trop tôt avant QA-G4.
+- **Automatisation candidate :** checklist pre-delete.
+- **Gate promotion :** GO METHOD PROMOTION.
+
+---
+
+## P. Recommandations candidates
+
+Aucune recommandation n’est appliquée dans ce cycle.
+
+Recommandation candidate — Conserver le contrat read-only tant que Cursor (D2D3-04) et persistance (D2D3-05) ne sont pas démontrés sous GO dédiés.
+
+Recommandation candidate — Ne pas ouvrir D2D3-04 et D2D3-05 dans un même cycle ; gates G-D2D-CURSOR-01 et G-D2D-PERSIST-01 restent distincts.
+
+Recommandation candidate — Traiter R-QA-D2C-01 / frontières D2-C hors du périmètre D2-D3 déjà clôturé.
+
+Recommandation candidate — Maintenir le package freeze pour les campagnes Critical futures de taille comparable.
+
+Recommandation candidate — Éviter de multiplier les documents vivants (20–24, README, index) sans besoin prouvé ; ce REX crée un dossier de lot dédié sans toucher au framing.
+
+Recommandation candidate — Toute promotion méthode des pratiques §O exige un **GO METHOD PROMOTION** distinct — non consommé.
+
+Recommandation candidate — Ne pas interpréter CLOSED WITH RESERVES comme GO D2-D4.
+
+---
+
+## Q. Garde-fous pour réutilisation
+
+- **Réutiliser** les pratiques candidates seulement si le lot a un package borné, des findings nommés, et un budget Critical justifié.
+- **Ne pas appliquer** la chaîne complète (3× revalidation) à un correctif mineur Standard sans GO Critical.
+- **Risque de sur-process :** gates empilés sans proportion → latence sans gain de sûreté.
+- **Contrôle répétable** (hash, probes, CI) ≠ **arbitrage humain** (REV2-02, clôture avec réserves).
+- **Interdiction L5 globale :** ne pas promouvoir localement une pratique comme doctrine SFIA.
+- **Proportionner** QA et gates à la criticité et à la surface d’attaque.
+- **Anti-claims :** ne jamais présenter fixture comme sandbox-real/real ; CI PASS ≠ production-ready ; clôture ≠ ouverture du lot suivant.
+
+---
+
+## R. Decision pack futur
+
+Toutes les décisions suivantes sont **NOT DECIDED — MORRIS DECISION REQUIRED**. Aucune option n’est adoptée.
+
+### D-REX-D2D3-01 — Généralisation du package hash freeze
+
+- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED
+- **Contexte :** freeze `cb937ada…` efficace de Corr3 à Closure.
+- **Options :** (A) rester ad hoc Delivery ; (B) standardiser dans checklists ; (C) automatiser en CI.
+- **Impacts :** traçabilité ↑ ; coût process ↑.
+- **Dette potentielle :** ritualisation sans besoin.
+- **Reco candidate ChatGPT/Cursor :** (B) puis (C) si répétition ≥ 3 lots — non adoptée.
+- **Décision Morris requise :** oui.
+
+### D-REX-D2D3-02 — Matrice permanente findings + probes adversariaux
+
+- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED
+- **Contexte :** matrice F-QA-D2D3 + P-REV* ont sécurisé la clôture.
+- **Options :** (A) conserver local Studio ; (B) template méthode ; (C) ne pas généraliser.
+- **Impacts :** qualité Critical ↑ ; maintenance tests ↑.
+- **Dette potentielle :** suites adversariales devenues bruit.
+- **Reco candidate :** (A) jusqu’à GO METHOD PROMOTION — non adoptée.
+- **Décision Morris requise :** oui.
+
+### D-REX-D2D3-03 — Mise à jour documents vivants 20–24 ou index trajectoire
+
+- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED
+- **Contexte :** 20–24 non modifiés ; REX dans dossier de lot dédié.
+- **Options :** (A) laisser tel quel ; (B) note de trajectoire minimale ; (C) révision large 20–24.
+- **Impacts :** cohérence narrative vs drift documentaire.
+- **Dette potentielle :** docs vivants périmés vs churn.
+- **Reco candidate :** (A) ou (B) léger sous GO dédié — non adoptée.
+- **Décision Morris requise :** oui.
+
+### D-REX-D2D3-04 — Ouverture G-D2D-CURSOR-01 / D2D3-04
+
+- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED
+- **Contexte :** Cursor UNVERIFIED ; D2D3-04 BLOCKED.
+- **Options :** (A) rester BLOCKED ; (B) spike sandbox-real sous GO ; (C) abandonner la story.
+- **Impacts :** preuve produit Cursor vs coût flakiness.
+- **Dette potentielle :** claims sandbox-real non démontrés.
+- **Reco candidate :** (A) jusqu’à GO dédié — non adoptée.
+- **Décision Morris requise :** oui.
+
+### D-REX-D2D3-05 — Ouverture G-D2D-PERSIST-01 / D2D3-05
+
+- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED
+- **Contexte :** process-local only ; durable/multiInstance/restartSafe = false.
+- **Options :** (A) rester process-local ; (B) persistance bornée sous GO ; (C) différer hors D2-D.
+- **Impacts :** runtime fort vs complexité store.
+- **Dette potentielle :** fausse durabilité.
+- **Reco candidate :** (A)/(C) — non adoptée.
+- **Décision Morris requise :** oui.
+
+### D-REX-D2D3-06 — Autorisation éventuelle D2-D4 ou cycle produit suivant
+
+- **Statut :** NOT DECIDED — MORRIS DECISION REQUIRED
+- **Contexte :** Closure a déclaré NO NEXT CYCLE AUTHORIZED ; D2-D4 hors trajectoire CAD-11.
+- **Options :** (A) aucun cycle suivant ; (B) D2-D4 writes sous GO distinct ; (C) autre cycle produit non-D2-D4.
+- **Impacts :** trajectoire produit ; risque writes prématurés.
+- **Dette potentielle :** ouverture implicite depuis capitalisation.
+- **Reco candidate :** (A) jusqu’à GO explicite — non adoptée.
+- **Décision Morris requise :** oui.
+
+---
+
+## S. Anti-claims
+
+Ce document **ne prouve pas** et **n’autorise pas** :
+
+- Cursor live
+- sandbox-real
+- provider real
+- Git write produit (capacité applicative)
+- persistance durable (`durable=true`)
+- multi-instance
+- restart-safe
+- UI Delivery
+- strong runtime
+- RUN READY
+- production-ready
+- D2-D4 autorisé
+- réserves ouvertes levées
+- méthode modifiée / pratique candidate adoptée
+- Notion / CMP autorisé
+- publication Git du présent REX
+- commit / push / PR / merge du document de capitalisation
+
+---
+
+## T. Verdict et prochaine décision
+
+```
+D2-D3 CAPITALIZATION COMPLETE WITH RESERVES —
+PROJECT REX DOCUMENT CREATED —
+OBSERVATIONS AND CANDIDATES SEPARATED —
+NO METHOD PROMOTION —
+READY FOR MORRIS PUBLICATION DECISION
+```
+
+**Prochaine gate candidate :** `GO PUBLICATION SFIA STUDIO V3.1-D2-D3 CAPITALIZATION` — **candidate uniquement — non consommé**.
+
+Ce gate candidat n’autorise pas automatiquement : merge, promotion méthode, D2-D4, correction de réserves, Notion/CMP.
+
+**État Git de ce cycle :**
+
+- aucun commit projet ;
+- aucun push projet ;
+- aucune PR ;
+- aucune promotion méthode ;
+- aucun D2-D4 ;
+- aucun cycle suivant autorisé ;
+- document local non tracké jusqu’à décision Morris de publication.
+
+---
+
+*Fin du document — SFIA Studio V3.1-D2-D3 Capitalization / REX — 2026-08-04.*
```

## 51–52. REX hash/blob sur merge et main

SHA-256 `fd98ede9…` ; blob `78860d59…` — préservés

## 53–55. Branche Capitalization préservée

Locale et distante présentes @ f4699924… ; ancestor du merge ; ahead=0 behind=1 post-merge

## 56–58. CI main post-merge

- Workflow : SFIA Studio CI
- Run #98 / ID `30935105476`
- event=push ; headBranch=main ; headSha=`8dc54db0069eed78a8d8930cc2b035450ab56ad1`
- status=completed ; conclusion=success
- Detect SFIA Studio changes: success
- Build and validate SFIA Studio: success
- SFIA Studio Required Gate: success
- URL : https://github.com/mcleland147/sfia-workspace/actions/runs/30935105476

## 59. R-PR-CAPA-D2D3-01

SATISFIED — CLOSURE RECOMMENDED — non CLOSED / non LIFTED par ce cycle

## 60–63. Réserves / D-REX / D2D3-04/05 / anti-claims

Réserves héritées OPEN NOT LIFTED inchangées ; D-REX NOT DECIDED ; D2D3-04/05 BLOCKED ; anti-claims préservés

## 64. Git Truth Check final

```
=== freeze final ===
2026-08-04 19:45:14 CEST +0200
branch=capitalization/sfia-studio-v3-1-d2-d3-rex
HEAD=f46999246f04d6509f3cf06a7b76ce0ee0d13e8f
upstream=f46999246f04d6509f3cf06a7b76ce0ee0d13e8f
main=8dc54db0069eed78a8d8930cc2b035450ab56ad1
merge_base=f46999246f04d6509f3cf06a7b76ce0ee0d13e8f
ahead=0
behind=1
?? .tmp-sfia-review/
?? projects/sfia-studio/app/.tmp-sfia-review/
remote_capa=f46999246f04d6509f3cf06a7b76ce0ee0d13e8f	refs/heads/capitalization/sfia-studio-v3-1-d2-d3-rex
handoff=dc8569eb66e35367f5e72d9391b1e21c82d6d295
HEAD_ancestor_of_main=yes
```

## 65–71. Absences

aucune modification projet ; aucun push projet ; aucune suppression branche ; aucun post-merge QA ; aucune closure ; aucune promotion méthode ; aucun D2-D4

## 72. Review Handoff

Mode publish-in-cycle ; parent attendu `dc8569eb66e35367f5e72d9391b1e21c82d6d295` ;
message : docs(review-handoff): publish D2-D3 capitalization merge status ;
(résultat distant après publication).

## 73. Verdict unique

D2-D3 CAPITALIZATION MERGE H1 COMPLETE WITH RESERVES —
PR #311 MERGED —
MAIN ADVANCED BY EXPLICIT MERGE COMMIT —
REX CONTENT AND MAIN CI VERIFIED —
CAPITALIZATION BRANCH PRESERVED —
READY FOR MORRIS POST-MERGE DECISION

## 74. Décision suivante candidate

GO POST-MERGE SFIA STUDIO V3.1-D2-D3 CAPITALIZATION
Statut : candidate uniquement — non consommé

N’autorise pas automatiquement : fermeture formelle R-PR-CAPA-D2D3-01, suppression branche, closure, promotion méthode, adoption D-REX, D2-D4, Notion/CMP.

---

Instruction finale : ChatGPT doit consulter la branche sfia/review-handoff et le fichier sfia-review-handoff/latest-chatgpt-review.md au commit et blob publiés par ce cycle avant toute validation Merge, génération d’un prompt Post-Merge Capitalization, closure, suppression de branche, promotion méthode ou préparation d’un cycle suivant.
