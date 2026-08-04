# ChatGPT Review Pack — SFIA Studio V3.1-D2-D3 Merge H1

## 1. Date / heure / fuseau

Cycle start: 2026-08-04 17:16:13 CEST +0200 / 2026-08-04 15:16:13 UTC
Merge commit time (GitHub): 2026-08-04 17:16:52 CEST +0200
Post observation: 2026-08-04 17:18:42 CEST +0200
R-QA-REV3-D2D3-TIME-01 — OPEN — MINOR — transported.

## 2. Cycle

7 — Intégration / DevOps
Sous-cycle : Merge GitHub contrôlé H1

## 3. Profil

Standard

## 4. Typologie

EVOL

## 5. GO Merge consommé

GO MERGE SFIA STUDIO V3.1-D2-D3 — STRATEGY H1
Date/heure Morris : 2026-08-04 17:02 CEST (+0200)

## 6. Stratégie H1

Merge commit GitHub explicite (`gh pr merge --merge`) ; conservation du commit Delivery ; deux parents ; branche non supprimée.

## 7. Gates non consommés

- G-D2D-CURSOR-01 — UNVERIFIED — D2D3-04 BLOCKED
- G-D2D-PERSIST-01 — process-local — D2D3-05 BLOCKED
- G-D2D-D2C-01 — R-QA-D2C-01 OPEN
- GO BRANCH DELETION — non consommé
- GO POST-MERGE — non consommé
- GO CAPITALIZATION — non consommé
- aucun GO D2-D4 / cycle suivant

## 8. CKC recherché et absent

CKC recherché oui ; Intégration/DevOps ; contrat détaillé non ; statut absent.

## 9. Fallback

routing guide ; template v2.6 ; operating model ; rules ; checklist ; Delivery QA/Test ; Incremental Delivery Closure ; handoff Mark Ready ; PR #310 ; précédent H1 D2-D2 ; état réel.

## 10. Sources consultées

template/method/checklists/doc24 ; handoffs Mark Ready / PR Readiness / QA Rev3 ; commit Delivery ; merge D2-D2 ; PR #310 ; publisher.

## 11. Template canonique

`prompts/templates/sfia-cycle-execution-template.md`

## 12. Précédent D2-D2 H1

`de2800aa836bb8221dc2912414126b7a3e6a1f58` — Merge pull request #309 … ; Merge: c38b6ca fcfad2e ; forme opérationnelle uniquement.

## 13. Handoff Mark Ready

Commit `44fba357142c14a53739a07325ac8fdb9c19e57d` / blob `054b8c041a31619e322f025bb93dfabc694c98b4`

## 14. Commit / blob du handoff

`44fba357142c14a53739a07325ac8fdb9c19e57d` / `054b8c041a31619e322f025bb93dfabc694c98b4`

## 15. Verdict entrant

D2-D3 MARK READY COMPLETE WITH RESERVES — PR #310 READY FOR REVIEW — SCOPE AND REQUIRED CI PRESERVED — READY FOR MORRIS MERGE DECISION

## 16. Local Git Truth Check initial

```
=== timestamps ===
2026-08-04 17:16:13 CEST +0200
2026-08-04 15:16:13 UTC
toplevel=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
branch=delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination
HEAD=9d1b3d2520f049dba0bf811380167003ca26ad82
PARENT=de2800aa836bb8221dc2912414126b7a3e6a1f58
main=de2800aa836bb8221dc2912414126b7a3e6a1f58
upstream=9d1b3d2520f049dba0bf811380167003ca26ad82
status:
?? .tmp-sfia-review/
?? projects/sfia-studio/app/.tmp-sfia-review/
diff_name=0
staged=0
ahead=1
behind=0
merge_base=de2800aa836bb8221dc2912414126b7a3e6a1f58
remote=9d1b3d2520f049dba0bf811380167003ca26ad82	refs/heads/delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination
```

## 17. origin/main initial

`de2800aa836bb8221dc2912414126b7a3e6a1f58`

## 18. Head / upstream / remote

Tous = `9d1b3d2520f049dba0bf811380167003ca26ad82`

## 19. Ahead / behind

1 / 0

## 20. Merge-base

`de2800aa836bb8221dc2912414126b7a3e6a1f58`

## 21. Package count / hash initial

```
count 18
hash_local cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f match True
hash_commit cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f match True
local_eq_commit True
```

## 22. Manifest complet

```
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
projects/sfia-studio/app/lib/oa/execution-run/index.ts
projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
```

## 23. PR état initial

#310 state=OPEN isDraft=False mergedAt=None autoMerge=None
mergeable=MERGEABLE mergeState=CLEAN
base=de2800aa836bb8221dc2912414126b7a3e6a1f58 head=9d1b3d2520f049dba0bf811380167003ca26ad82 files=18 +4368/-22

## 24. Body initial complet

```markdown
## Summary

- ajoute la coordination end-to-end read-only D2-D3 pour `execution-run` ;
- source démontrée limitée à `fixture` ;
- coordination provider-independent ;
- projection sécurisée et allowlistée ;
- readiness liée aux artefacts canoniques ;
- evidence officielle et redaction fail-closed ;
- event sink non autoritatif ;
- timeout et cancellation bornés ;
- aucune persistance durable, aucun provider live, aucun D3.

## Morris decisions

- GO Delivery D2-D3 consommé ;
- QA Critical initiale bloquée ;
- corrections F-QA-D2D3-01…10 ;
- Revalidation 1 bloquée ;
- corrections F-QA-D2D3-05 et F-QA-REV-D2D3-01/02 ;
- Revalidation 2 bloquée ;
- correction F-QA-REV2-D2D3-01 ;
- arbitrage F-QA-REV2-D2D3-02 ;
- Revalidation 3 PASS WITH RESERVES ;
- GO PUBLICATION consommé le 2026-08-04 à 14:37 CEST ;
- GO PR READINESS consommé le 2026-08-04 à 15:08 CEST ;
- GO MARK READY consommé le 2026-08-04 à 15:27 CEST ;
- GO MERGE non consommé ;
- gates Cursor, Persist et D2C non consommés.

## Scope

- exactement 18 fichiers ;
- uniquement sous :
  `projects/sfia-studio/app/lib/oa/execution-run/**`
  et
  `projects/sfia-studio/app/__tests__/oa/execution-run/**` ;
- package hash :
  `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f` ;
- aucun document 20–24 modifié ;
- aucune configuration, dépendance, lockfile, workflow, UI, route ou API.

## D2-D3 contract

- huit états canoniques :
  idle, running, awaiting_human, succeeded, failed, cancelled, timed_out, blocked ;
- partial jamais succeeded ;
- cancellation terminale ;
- late result evidence-only ;
- source fixture-only ;
- provider request correlationId et lane vérifiés avant engagement ;
- readiness UX fondée sur run, projection et evidence liés ;
- UI Delivery non démontrée ;
- strong runtime bloqué ;
- projection unknown validée, allowlistée et redigée ;
- late evidence fail-closed ;
- event sink fail-safe et non autoritatif ;
- providerAttempted, providerInvoked et providerCompleted distingués ;
- timeout maximal local D2-D3 de 60 000 ms ;
- chemins encodés et traversées bloqués ;
- mémoire process-local uniquement.

## QA evidence

- 14 findings vérifiés en QA ;
- aucun nouveau BLOCKER ou MAJOR ;
- 29/29 probes initiaux PASS ;
- 15/15 P-REV PASS ;
- 17/17 P-REV2 PASS ;
- CORR2, CORR3, NONREG et P-REV3 PASS ;
- regression : 95 PASS ;
- targeted : 105 PASS ;
- execution-run : 28 fichiers / 270 PASS ;
- full Vitest : 130 fichiers / 1316 PASS ;
- governance : 73 PASS ;
- typecheck, lint, build : PASS.

Findings status: **VERIFIED IN QA — CLOSURE RECOMMENDED** (not formally CLOSED).

## Reserves

- R-QA-REV-01 — OPEN NOT LIFTED ;
- R-QA-REV-02 — OPEN NOT LIFTED ;
- R-QA-D2C-01 — OPEN NOT LIFTED ;
- Cursor product capabilities — UNVERIFIED ;
- memory process-local only ;
- R-PR-D2D2-01 — MINOR ;
- R-CORR-D2D3-01 — timeout 60 000 ms local D2-D3 ;
- R-QA-REV3-D2D3-TIME-01 — OPEN MINOR, traçabilité ;
- R-CORR-D2D3-02 — SATISFIED — CLOSURE RECOMMENDED.

No reserve is lifted by this publication.
- R-PR-D2D3-01 — SATISFIED — CLOSURE RECOMMENDED — gate statuses refreshed under GO MARK READY.

## Explicit exclusions

- aucun provider live ;
- aucune preuve Cursor live ou sandbox-real ;
- aucune persistance durable ;
- aucun multi-instance ;
- aucun restart-safe ;
- aucun D2-D4 write ;
- aucune UI ;
- aucun transport D3 ;
- aucun claim production-ready ;
- aucun claim RUN READY ;
- aucun merge dans ce cycle.

## Test plan

Pre-publication validations observed on 2026-08-04 (local, no content changes):

- [x] `npm test -- __tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts` → 95 PASS
- [x] `npm test --` regression + evidence → 105 PASS
- [x] `npm test -- __tests__/oa/execution-run/` → 28 files / 270 PASS
- [x] `npm run typecheck` → PASS
- [x] `npm run lint` → PASS
- [x] `npm run build` → PASS
- [x] `npm test` → 130 files / 1316 PASS
- [x] governance node tests → 73 PASS
- [x] `git diff --check` → PASS

## Review guidance

Ordre recommandé :

1. `coordinateExecutionRun.ts` ;
2. `untrustedExecutionData.ts` ;
3. `executionProjection.ts` ;
4. `executionReadiness.ts` ;
5. `composeExecutionRunD2D3.ts` ;
6. `policy.ts`, `providerBoundary.ts`, `sandboxContract.ts` ;
7. tests coordination / evidence / projection / readiness ;
8. matrice permanente des findings ;
9. import boundaries.

## Publication status

- PR Ready for review sous GO Morris ;
- merge non autorisé dans ce cycle ;
- branche préservée ;
- package, commit et CI inchangés ;
- prochain gate candidat :
  GO MERGE SFIA STUDIO V3.1-D2-D3 — STRATEGY H1.
```

## 25. CI initiale

PR run #95 SUCCESS héritée (non réexécutée ici).
```
Build and validate SFIA Studio	pass	1m38s	https://github.com/mcleland147/sfia-workspace/actions/runs/30911104369/job/91997834596
Detect SFIA Studio changes	pass	7s	https://github.com/mcleland147/sfia-workspace/actions/runs/30911104369/job/91997791514
SFIA Studio Required Gate	pass	2s	https://github.com/mcleland147/sfia-workspace/actions/runs/30911104369/job/91998281193
```

## 26. Commentaires / reviews

0 / 0 / 0 ; aucune REQUEST_CHANGES.

## 27. Règles GitHub

```json
{"id":19798462,"name":"SFIA Studio Main Required Gate — M1","target":"branch","source_type":"Repository","source":"mcleland147/sfia-workspace","enforcement":"active","conditions":{"ref_name":{"exclude":[],"include":["refs/heads/main"]}},"rules":[{"type":"pull_request","parameters":{"required_approving_review_count":0,"dismiss_stale_reviews_on_push":false,"required_reviewers":[],"require_code_owner_review":false,"require_last_push_approval":false,"required_review_thread_resolution":false,"allowed_merge_methods":["merge","squash","rebase"]}},{"type":"required_status_checks","parameters":{"strict_required_status_checks_policy":false,"do_not_enforce_on_create":false,"required_status_checks":[{"context":"SFIA Studio Required Gate","integration_id":15368}]}},{"type":"non_fast_forward"},{"type":"deletion"}],"node_id":"RRS_lACqUmVwb3NpdG9yec5MdiYIzgEuGb4","created_at":"2026-07-27T09:31:28.759+02:00","updated_at":"2026-07-27T19:27:23.150+02:00","bypass_actors":[{"actor_id":295557155,"actor_type":"User","bypass_mode":"pull_request"}],"current_user_can_bypass":"pull_requests_only","_links":{"self":{"href":"https://api.github.com/repos/mcleland147/sfia-workspace/rulesets/19798462"},"html":{"href":"https://github.com/mcleland147/sfia-workspace/rules/19798462"}}}
```
allowed_merge_methods includes merge ; required_approving_review_count=0 ; Required Gate required ; no admin/bypass used.

## 28. Stratégie H1 autorisée

Confirmée via ruleset pull_request.allowed_merge_methods=["merge","squash","rebase"].

## 29. Body candidat complet

```markdown
## Summary

- ajoute la coordination end-to-end read-only D2-D3 pour `execution-run` ;
- source démontrée limitée à `fixture` ;
- coordination provider-independent ;
- projection sécurisée et allowlistée ;
- readiness liée aux artefacts canoniques ;
- evidence officielle et redaction fail-closed ;
- event sink non autoritatif ;
- timeout et cancellation bornés ;
- aucune persistance durable, aucun provider live, aucun D3.

## Morris decisions

- GO Delivery D2-D3 consommé ;
- QA Critical initiale bloquée ;
- corrections F-QA-D2D3-01…10 ;
- Revalidation 1 bloquée ;
- corrections F-QA-D2D3-05 et F-QA-REV-D2D3-01/02 ;
- Revalidation 2 bloquée ;
- correction F-QA-REV2-D2D3-01 ;
- arbitrage F-QA-REV2-D2D3-02 ;
- Revalidation 3 PASS WITH RESERVES ;
- GO PUBLICATION consommé le 2026-08-04 à 14:37 CEST ;
- GO PR READINESS consommé le 2026-08-04 à 15:08 CEST ;
- GO MARK READY consommé le 2026-08-04 à 15:27 CEST ;
- GO MERGE consommé le 2026-08-04 à 17:02 CEST — STRATEGY H1 ;
- gates Cursor, Persist et D2C non consommés.

## Scope

- exactement 18 fichiers ;
- uniquement sous :
  `projects/sfia-studio/app/lib/oa/execution-run/**`
  et
  `projects/sfia-studio/app/__tests__/oa/execution-run/**` ;
- package hash :
  `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f` ;
- aucun document 20–24 modifié ;
- aucune configuration, dépendance, lockfile, workflow, UI, route ou API.

## D2-D3 contract

- huit états canoniques :
  idle, running, awaiting_human, succeeded, failed, cancelled, timed_out, blocked ;
- partial jamais succeeded ;
- cancellation terminale ;
- late result evidence-only ;
- source fixture-only ;
- provider request correlationId et lane vérifiés avant engagement ;
- readiness UX fondée sur run, projection et evidence liés ;
- UI Delivery non démontrée ;
- strong runtime bloqué ;
- projection unknown validée, allowlistée et redigée ;
- late evidence fail-closed ;
- event sink fail-safe et non autoritatif ;
- providerAttempted, providerInvoked et providerCompleted distingués ;
- timeout maximal local D2-D3 de 60 000 ms ;
- chemins encodés et traversées bloqués ;
- mémoire process-local uniquement.

## QA evidence

- 14 findings vérifiés en QA ;
- aucun nouveau BLOCKER ou MAJOR ;
- 29/29 probes initiaux PASS ;
- 15/15 P-REV PASS ;
- 17/17 P-REV2 PASS ;
- CORR2, CORR3, NONREG et P-REV3 PASS ;
- regression : 95 PASS ;
- targeted : 105 PASS ;
- execution-run : 28 fichiers / 270 PASS ;
- full Vitest : 130 fichiers / 1316 PASS ;
- governance : 73 PASS ;
- typecheck, lint, build : PASS.

Findings status: **VERIFIED IN QA — CLOSURE RECOMMENDED** (not formally CLOSED).

## Reserves

- R-QA-REV-01 — OPEN NOT LIFTED ;
- R-QA-REV-02 — OPEN NOT LIFTED ;
- R-QA-D2C-01 — OPEN NOT LIFTED ;
- Cursor product capabilities — UNVERIFIED ;
- memory process-local only ;
- R-PR-D2D2-01 — MINOR ;
- R-CORR-D2D3-01 — timeout 60 000 ms local D2-D3 ;
- R-QA-REV3-D2D3-TIME-01 — OPEN MINOR, traçabilité ;
- R-CORR-D2D3-02 — SATISFIED — CLOSURE RECOMMENDED.

No reserve is lifted by this publication.
- R-PR-D2D3-01 — SATISFIED — CLOSURE RECOMMENDED — gate statuses refreshed under GO MARK READY.

## Explicit exclusions

- aucun provider live ;
- aucune preuve Cursor live ou sandbox-real ;
- aucune persistance durable ;
- aucun multi-instance ;
- aucun restart-safe ;
- aucun D2-D4 write ;
- aucune UI ;
- aucun transport D3 ;
- aucun claim production-ready ;
- aucun claim RUN READY ;
- aucun merge dans ce cycle.

## Test plan

Pre-publication validations observed on 2026-08-04 (local, no content changes):

- [x] `npm test -- __tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts` → 95 PASS
- [x] `npm test --` regression + evidence → 105 PASS
- [x] `npm test -- __tests__/oa/execution-run/` → 28 files / 270 PASS
- [x] `npm run typecheck` → PASS
- [x] `npm run lint` → PASS
- [x] `npm run build` → PASS
- [x] `npm test` → 130 files / 1316 PASS
- [x] governance node tests → 73 PASS
- [x] `git diff --check` → PASS

## Review guidance

Ordre recommandé :

1. `coordinateExecutionRun.ts` ;
2. `untrustedExecutionData.ts` ;
3. `executionProjection.ts` ;
4. `executionReadiness.ts` ;
5. `composeExecutionRunD2D3.ts` ;
6. `policy.ts`, `providerBoundary.ts`, `sandboxContract.ts` ;
7. tests coordination / evidence / projection / readiness ;
8. matrice permanente des findings ;
9. import boundaries.

## Publication status

- PR Ready for review avant merge ;
- GO MERGE consommé sous autorité Morris — STRATEGY H1 ;
- merge commit autorisé dans ce cycle ;
- suppression de branche non autorisée ;
- package, commit et CI pré-merge inchangés ;
- prochain cycle candidat :
  GO POST-MERGE SFIA STUDIO V3.1-D2-D3.
```

## 30. Diff exact du body

```diff
--- pr-body-original.md
+++ d2d3-merge-pr-body.md
@@ -24,7 +24,7 @@
 - GO PUBLICATION consommé le 2026-08-04 à 14:37 CEST ;
 - GO PR READINESS consommé le 2026-08-04 à 15:08 CEST ;
 - GO MARK READY consommé le 2026-08-04 à 15:27 CEST ;
-- GO MERGE non consommé ;
+- GO MERGE consommé le 2026-08-04 à 17:02 CEST — STRATEGY H1 ;
 - gates Cursor, Persist et D2C non consommés.

 ## Scope
@@ -135,9 +135,10 @@

 ## Publication status

-- PR Ready for review sous GO Morris ;
-- merge non autorisé dans ce cycle ;
-- branche préservée ;
-- package, commit et CI inchangés ;
-- prochain gate candidat :
-  GO MERGE SFIA STUDIO V3.1-D2-D3 — STRATEGY H1.
+- PR Ready for review avant merge ;
+- GO MERGE consommé sous autorité Morris — STRATEGY H1 ;
+- merge commit autorisé dans ce cycle ;
+- suppression de branche non autorisée ;
+- package, commit et CI pré-merge inchangés ;
+- prochain cycle candidat :
+  GO POST-MERGE SFIA STUDIO V3.1-D2-D3.
```

## 31. Body distant pré-merge

```markdown
## Summary

- ajoute la coordination end-to-end read-only D2-D3 pour `execution-run` ;
- source démontrée limitée à `fixture` ;
- coordination provider-independent ;
- projection sécurisée et allowlistée ;
- readiness liée aux artefacts canoniques ;
- evidence officielle et redaction fail-closed ;
- event sink non autoritatif ;
- timeout et cancellation bornés ;
- aucune persistance durable, aucun provider live, aucun D3.

## Morris decisions

- GO Delivery D2-D3 consommé ;
- QA Critical initiale bloquée ;
- corrections F-QA-D2D3-01…10 ;
- Revalidation 1 bloquée ;
- corrections F-QA-D2D3-05 et F-QA-REV-D2D3-01/02 ;
- Revalidation 2 bloquée ;
- correction F-QA-REV2-D2D3-01 ;
- arbitrage F-QA-REV2-D2D3-02 ;
- Revalidation 3 PASS WITH RESERVES ;
- GO PUBLICATION consommé le 2026-08-04 à 14:37 CEST ;
- GO PR READINESS consommé le 2026-08-04 à 15:08 CEST ;
- GO MARK READY consommé le 2026-08-04 à 15:27 CEST ;
- GO MERGE consommé le 2026-08-04 à 17:02 CEST — STRATEGY H1 ;
- gates Cursor, Persist et D2C non consommés.

## Scope

- exactement 18 fichiers ;
- uniquement sous :
  `projects/sfia-studio/app/lib/oa/execution-run/**`
  et
  `projects/sfia-studio/app/__tests__/oa/execution-run/**` ;
- package hash :
  `cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f` ;
- aucun document 20–24 modifié ;
- aucune configuration, dépendance, lockfile, workflow, UI, route ou API.

## D2-D3 contract

- huit états canoniques :
  idle, running, awaiting_human, succeeded, failed, cancelled, timed_out, blocked ;
- partial jamais succeeded ;
- cancellation terminale ;
- late result evidence-only ;
- source fixture-only ;
- provider request correlationId et lane vérifiés avant engagement ;
- readiness UX fondée sur run, projection et evidence liés ;
- UI Delivery non démontrée ;
- strong runtime bloqué ;
- projection unknown validée, allowlistée et redigée ;
- late evidence fail-closed ;
- event sink fail-safe et non autoritatif ;
- providerAttempted, providerInvoked et providerCompleted distingués ;
- timeout maximal local D2-D3 de 60 000 ms ;
- chemins encodés et traversées bloqués ;
- mémoire process-local uniquement.

## QA evidence

- 14 findings vérifiés en QA ;
- aucun nouveau BLOCKER ou MAJOR ;
- 29/29 probes initiaux PASS ;
- 15/15 P-REV PASS ;
- 17/17 P-REV2 PASS ;
- CORR2, CORR3, NONREG et P-REV3 PASS ;
- regression : 95 PASS ;
- targeted : 105 PASS ;
- execution-run : 28 fichiers / 270 PASS ;
- full Vitest : 130 fichiers / 1316 PASS ;
- governance : 73 PASS ;
- typecheck, lint, build : PASS.

Findings status: **VERIFIED IN QA — CLOSURE RECOMMENDED** (not formally CLOSED).

## Reserves

- R-QA-REV-01 — OPEN NOT LIFTED ;
- R-QA-REV-02 — OPEN NOT LIFTED ;
- R-QA-D2C-01 — OPEN NOT LIFTED ;
- Cursor product capabilities — UNVERIFIED ;
- memory process-local only ;
- R-PR-D2D2-01 — MINOR ;
- R-CORR-D2D3-01 — timeout 60 000 ms local D2-D3 ;
- R-QA-REV3-D2D3-TIME-01 — OPEN MINOR, traçabilité ;
- R-CORR-D2D3-02 — SATISFIED — CLOSURE RECOMMENDED.

No reserve is lifted by this publication.
- R-PR-D2D3-01 — SATISFIED — CLOSURE RECOMMENDED — gate statuses refreshed under GO MARK READY.

## Explicit exclusions

- aucun provider live ;
- aucune preuve Cursor live ou sandbox-real ;
- aucune persistance durable ;
- aucun multi-instance ;
- aucun restart-safe ;
- aucun D2-D4 write ;
- aucune UI ;
- aucun transport D3 ;
- aucun claim production-ready ;
- aucun claim RUN READY ;
- aucun merge dans ce cycle.

## Test plan

Pre-publication validations observed on 2026-08-04 (local, no content changes):

- [x] `npm test -- __tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts` → 95 PASS
- [x] `npm test --` regression + evidence → 105 PASS
- [x] `npm test -- __tests__/oa/execution-run/` → 28 files / 270 PASS
- [x] `npm run typecheck` → PASS
- [x] `npm run lint` → PASS
- [x] `npm run build` → PASS
- [x] `npm test` → 130 files / 1316 PASS
- [x] governance node tests → 73 PASS
- [x] `git diff --check` → PASS

## Review guidance

Ordre recommandé :

1. `coordinateExecutionRun.ts` ;
2. `untrustedExecutionData.ts` ;
3. `executionProjection.ts` ;
4. `executionReadiness.ts` ;
5. `composeExecutionRunD2D3.ts` ;
6. `policy.ts`, `providerBoundary.ts`, `sandboxContract.ts` ;
7. tests coordination / evidence / projection / readiness ;
8. matrice permanente des findings ;
9. import boundaries.

## Publication status

- PR Ready for review avant merge ;
- GO MERGE consommé sous autorité Morris — STRATEGY H1 ;
- merge commit autorisé dans ce cycle ;
- suppression de branche non autorisée ;
- package, commit et CI pré-merge inchangés ;
- prochain cycle candidat :
  GO POST-MERGE SFIA STUDIO V3.1-D2-D3.
```
Égal au candidat.

## 32. Dernier contrôle pré-merge

```
=== final pre-merge ===
2026-08-04 17:16:48 CEST +0200
main=de2800aa836bb8221dc2912414126b7a3e6a1f58
HEAD=9d1b3d2520f049dba0bf811380167003ca26ad82
upstream=9d1b3d2520f049dba0bf811380167003ca26ad82
merge_base=de2800aa836bb8221dc2912414126b7a3e6a1f58
ahead=1
behind=0
```
```json
{"autoMergeRequest":null,"baseRefOid":"de2800aa836bb8221dc2912414126b7a3e6a1f58","comments":[],"headRefOid":"9d1b3d2520f049dba0bf811380167003ca26ad82","isDraft":false,"mergeStateStatus":"CLEAN","mergeable":"MERGEABLE","mergedAt":null,"reviews":[],"state":"OPEN","statusCheckRollup":[{"__typename":"CheckRun","completedAt":"2026-08-04T12:53:03Z","conclusion":"SUCCESS","detailsUrl":"https://github.com/mcleland147/sfia-workspace/actions/runs/30911104369/job/91997791514","name":"Detect SFIA Studio changes","startedAt":"2026-08-04T12:52:56Z","status":"COMPLETED","workflowName":"SFIA Studio CI"},{"__typename":"CheckRun","completedAt":"2026-08-04T12:54:44Z","conclusion":"SUCCESS","detailsUrl":"https://github.com/mcleland147/sfia-workspace/actions/runs/30911104369/job/91997834596","name":"Build and validate SFIA Studio","startedAt":"2026-08-04T12:53:06Z","status":"COMPLETED","workflowName":"SFIA Studio CI"},{"__typename":"CheckRun","completedAt":"2026-08-04T12:54:49Z","conclusion":"SUCCESS","detailsUrl":"https://github.com/mcleland147/sfia-workspace/actions/runs/30911104369/job/91998281193","name":"SFIA Studio Required Gate","startedAt":"2026-08-04T12:54:47Z","status":"COMPLETED","workflowName":"SFIA Studio CI"}]}
```

## 33. Commande merge exacte

```
gh pr merge 310 \
  --merge \
  --match-head-commit 9d1b3d2520f049dba0bf811380167003ca26ad82 \
  --subject "Merge pull request #310 from mcleland147/delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination" \
  --body "feat(sfia-studio): add V3.1-D2-D3 read-only coordination"
```
CMD: gh pr merge 310 --merge --match-head-commit 9d1b3d2520f049dba0bf811380167003ca26ad82 --subject ... --body ...

## 34. Sortie merge

```
(empty stdout; exit 0)
```
exit 0 ; PR subsequently MERGED.

## 35. PR état post-merge

{
  "additions": 4368,
  "baseRefName": "main",
  "baseRefOid": "de2800aa836bb8221dc2912414126b7a3e6a1f58",
  "commits": [
    {
      "authoredDate": "2026-08-04T12:52:13Z",
      "authors": [
        {
          "email": "morris@macbook-air1.home",
          "id": "",
          "login": "",
          "name": "Morris Cleland"
        },
        {
          "email": "cursoragent@cursor.com",
          "id": "U_kgDOC972lw",
          "login": "cursoragent",
          "name": "Cursor"
        }
      ],
      "committedDate": "2026-08-04T12:52:13Z",
      "messageBody": "Co-authored-by: Cursor <cursoragent@cursor.com>",
      "messageHeadline": "feat(sfia-studio): add V3.1-D2-D3 read-only coordination",
      "oid": "9d1b3d2520f049dba0bf811380167003ca26ad82"
    }
  ],
  "deletions": 22,
  "files": [
    {
      "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts",
      "additions": 145,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts",
      "additions": 241,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts",
      "additions": 295,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts",
      "additions": 102,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts",
      "additions": 1088,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts",
      "additions": 123,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts",
      "additions": 65,
      "deletions": 1,
      "changeType": "MODIFIED"
    },
    {
      "path": "projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts",
      "additions": 51,
      "deletions": 0,
      "changeType": "MODIFIED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts",
      "additions": 1086,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts",
      "additions": 444,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts",
      "additions": 198,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts",
      "additions": 234,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts",
      "additions": 29,
      "deletions": 6,
      "changeType": "MODIFIED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts",
      "additions": 4,
      "deletions": 2,
      "changeType": "MODIFIED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts",
      "additions": 92,
      "deletions": 12,
      "changeType": "MODIFIED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/index.ts",
      "additions": 32,
      "deletions": 1,
      "changeType": "MODIFIED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts",
      "additions": 125,
      "deletions": 0,
      "changeType": "ADDED"
    },
    {
      "path": "projects/sfia-studio/app/lib/oa/execution-run/serve

## 36. Merge SHA

`e36f12b68545a9ead0d8d0ccbfc55d43973b3521`

## 37. Message du merge

```
Merge pull request #310 from mcleland147/delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination

feat(sfia-studio): add V3.1-D2-D3 read-only coordination
```

## 38. Parents du merge

```
e36f12b68545a9ead0d8d0ccbfc55d43973b3521 de2800aa836bb8221dc2912414126b7a3e6a1f58 9d1b3d2520f049dba0bf811380167003ca26ad82
```

## 39. Preuve premier parent

`de2800aa836bb8221dc2912414126b7a3e6a1f58` (= origin/main pré-merge)

## 40. Preuve second parent

`9d1b3d2520f049dba0bf811380167003ca26ad82` (= Delivery head)

## 41. origin/main post-merge

`e36f12b68545a9ead0d8d0ccbfc55d43973b3521`

## 42. Branche Delivery distante préservée

`refs/heads/delivery/...` @ `9d1b3d2520f049dba0bf811380167003ca26ad82` toujours présente.

## 43. Branche Delivery locale préservée

Checkout Delivery ; HEAD/upstream = `9d1b3d2520f049dba0bf811380167003ca26ad82` ; non reset/rebase/merge local.

## 44. Package count / hash post-merge

```
9d1b3d2520f0 cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f match True
e36f12b68545 cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f match True
origin/main cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f match True
local cb937ada88a8040a9a278a067b780b247418c3dc490c50b3d59ee9fe6290419f match True
diff_count 18
extra []
missing []
tmp []
```

## 45. Diff main complet (représentation exploitable)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
new file mode 100644
index 0000000..6167958
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
@@ -0,0 +1,145 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+describe("D2-D3 fixture coordination", () => {
+  it("coordinates AI through idle, running, succeeded and official evidence", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "bounded fixture summary" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(true);
+    expect(result.providerInvoked).toBe(true);
+    expect(result.providerCompleted).toBe(true);
+    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
+    expect(result.run?.evidence).toHaveLength(1);
+    expect(result.run?.evidence?.[0]).toMatchObject({
+      official: true,
+      source: "fixture",
+      completeness: "complete",
+      late: false,
+    });
+
+    if (!result.run) return;
+    const projection = await composition.projectById(result.run.runId);
+    expect(projection.ok).toBe(true);
+    if (!projection.ok) return;
+    expect(projection.projection.state).toBe("succeeded");
+    expect(projection.projection.source).toBe("fixture");
+    expect(projection.projection.providerLane).toBe("ai");
+  });
+
+  it("coordinates a read-only Git fixture without a write surface", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const intent = {
+      ...fixture.intent,
+      intentId: "intent:d2d3:git",
+      correlationId: "corr:d2d3:git",
+      requestedLane: "git" as const,
+    };
+    const result = await composition.coordinate({
+      intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: intent.correlationId,
+        lane: "git",
+        operation: "read",
+        owner: "o",
+        repo: "r",
+        kind: "repository",
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.run?.state).toBe("succeeded");
+    expect(result.run?.disclosure.providerLane).toBe("git");
+    expect(composition.disclosure.gitWrite).toBe(false);
+  });
+
+  it("keeps Cursor fixture-only and blocked while Cursor is unverified", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const intent = {
+      ...fixture.intent,
+      intentId: "intent:d2d3:cursor",
+      correlationId: "corr:d2d3:cursor",
+      requestedLane: "cursor" as const,
+    };
+    const result = await composition.coordinate({
+      intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: intent.correlationId,
+        lane: "cursor",
+        operation: "fixture",
+        instructionSummary: "read-only fixture",
+        allowlistRepos: ["projects/sfia-studio/"],
+        protectedPaths: [".env"],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("blocked");
+    expect(result.providerInvoked).toBe(false);
+    expect(composition.disclosure.cursorVerified).toBe(false);
+  });
+
+  it("blocks lane none without invoking a provider", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        requestedLane: "none",
+        intentId: "intent:d2d3:none",
+        correlationId: "corr:d2d3:none",
+      },
+      context: fixture.context,
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("blocked");
+    expect(result.providerInvoked).toBe(false);
+    expect(result.stateTrace).toEqual(["idle", "blocked"]);
+  });
+
+  it("does not invoke providers before validation and policy acceptance", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("validation_failure");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "must not execute" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.stateTrace).toEqual([]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
new file mode 100644
index 0000000..d4cca79
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
@@ -0,0 +1,241 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  getFixture,
+  isIsoTimestamp,
+  normalizedFailure,
+  type AiExecutionPort,
+} from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3,
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+} from "@/lib/oa/execution-run/server";
+
+describe("D2-D3 evidence truthfulness", () => {
+  it("keeps run, official evidence, and projection source on fixture", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "truthful fixture input" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    if (!result.run) throw new Error("expected run");
+    const evidence = result.run.evidence?.[0];
+    const projection = await composition.projectById(result.run.runId);
+    expect(projection.ok).toBe(true);
+    if (!projection.ok) return;
+
+    expect(result.run.disclosure.source).toBe("fixture");
+    expect(evidence?.source).toBe("fixture");
+    expect(projection.projection.source).toBe("fixture");
+    expect(evidence?.official).toBe(true);
+    expect(evidence?.completeness).toBe("complete");
+    expect(isIsoTimestamp(evidence?.producedAt ?? "")).toBe(true);
+    expect(evidence?.evidenceId.length).toBeLessThan(128);
+    expect(evidence).not.toHaveProperty("rawResult");
+  });
+
+  it.each(["sandbox-real", "real"] as const)(
+    "blocks requested source %s without fallback or provider invocation",
+    async (source) => {
+      const composition = composeExecutionRunD2D3();
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          intentId: `intent:d2d3:${source}`,
+          correlationId: `corr:d2d3:${source}`,
+          requestedSource: source,
+        },
+        context: { ...fixture.context, declaredSource: source },
+        providerRequest: {
+          correlationId: `corr:d2d3:${source}`,
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "must not run" }],
+          timeoutMs: 100,
+        },
+        timeoutMs: 100,
+      });
+
+      expect(result.ok).toBe(false);
+      expect(result.run).toBeUndefined();
+      expect(result.providerInvoked).toBe(false);
+      expect(result.stateTrace).toEqual([]);
+      if (result.ok) throw new Error("expected failure");
+      expect(result.failure.code).toBe("SOURCE_MISMATCH");
+    },
+  );
+
+  it("records late evidence without changing a cancelled terminal", async () => {
+    const base = composeExecutionRunProvidersFake();
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async (request) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "Cancelled fixture operation",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      }),
+    };
+    const providers = composeExecutionRunProviders({ ...base, ai });
+    const composition = composeExecutionRunD2D3({ providers });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "cancel fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+      lateEvidenceSummary: "late bounded result",
+    });
+
+    expect(result.ok).toBe(false);
+    expect(result.run?.state).toBe("cancelled");
+    expect(result.lateEvidenceRecorded).toBe(true);
+    expect(result.run?.evidence?.at(-1)).toMatchObject({
+      source: "fixture",
+      late: true,
+      official: true,
+    });
+  });
+
+  it("marks usage unavailable unless provider usage validates", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "usage fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+
+    expect(result.validatedUsage.status).toBe("validated");
+    expect(result.run?.usage.status).toBe("unavailable");
+  });
+
+  it.each([
+    "token=abc",
+    "apiKey=k",
+    "Authorization: Bearer xyz",
+    '{"token":"structured-secret-z9"}',
+  ])(
+    "official late evidence redacts secret-like summary %j to late_result_redacted",
+    async (summary) => {
+      const base = composeExecutionRunProvidersFake();
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => base.ai.describeCapability(),
+        complete: async (request) => ({
+          kind: "cancelled",
+          failure: normalizedFailure({
+            family: "cancelled",
+            code: "CANCELLED",
+            userMessage: "Cancelled fixture operation",
+            retryable: false,
+            correlationId: request.correlationId,
+          }),
+        }),
+      };
+      const providers = composeExecutionRunProviders({ ...base, ai });
+      const composition = composeExecutionRunD2D3({ providers });
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: fixture.intent,
+        context: fixture.context,
+        providerRequest: {
+          correlationId: fixture.intent.correlationId,
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "cancel fixture" }],
+          timeoutMs: 100,
+        },
+        timeoutMs: 100,
+        lateEvidenceSummary: summary,
+      });
+
+      expect(result.run?.state).toBe("cancelled");
+      expect(result.lateEvidenceRecorded).toBe(true);
+      expect(result.run?.evidence?.at(-1)).toMatchObject({
+        source: "fixture",
+        late: true,
+        official: true,
+        summary: "late_result_redacted",
+      });
+      expect(JSON.stringify(result)).not.toContain("abc");
+      expect(JSON.stringify(result)).not.toContain("xyz");
+      expect(JSON.stringify(result)).not.toMatch(/apiKey=k/i);
+      expect(JSON.stringify(result)).not.toContain("structured-secret-z9");
+    },
+  );
+
+  it('preserves non-sensitive structured late summary {"status":"complete"}', async () => {
+    const base = composeExecutionRunProvidersFake();
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async (request) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "Cancelled fixture operation",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      }),
+    };
+    const providers = composeExecutionRunProviders({ ...base, ai });
+    const composition = composeExecutionRunD2D3({ providers });
+    const fixture = getFixture("nominal");
+    const summary = '{"status":"complete"}';
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "cancel fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+      lateEvidenceSummary: summary,
+    });
+    expect(result.run?.state).toBe("cancelled");
+    expect(result.lateEvidenceRecorded).toBe(true);
+    expect(result.run?.evidence?.at(-1)).toMatchObject({
+      source: "fixture",
+      late: true,
+      official: true,
+      summary,
+    });
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
new file mode 100644
index 0000000..97e4686
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
@@ -0,0 +1,295 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  getFixture,
+  normalizedFailure,
+  type AiExecutionPort,
+  type FailureCode,
+  type FailureFamily,
+  type ProviderInvocationResult,
+} from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3,
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+} from "@/lib/oa/execution-run/server";
+
+function failureResult(
+  family: FailureFamily,
+  code: FailureCode,
+  correlationId: string,
+): ProviderInvocationResult {
+  return {
+    kind: "failure",
+    failure: normalizedFailure({
+      family,
+      code,
+      userMessage: `Bounded ${family} fixture failure`,
+      retryable: false,
+      correlationId,
+    }),
+  };
+}
+
+async function runWithAiResult(
+  makeResult: (correlationId: string) => ProviderInvocationResult,
+  options?: { lateEvidenceSummary?: string },
+) {
+  const base = composeExecutionRunProvidersFake();
+  let calls = 0;
+  let receivedKeys: string[] = [];
+  const ai: AiExecutionPort = {
+    lane: "ai",
+    describeCapability: () => base.ai.describeCapability(),
+    complete: async (request) => {
+      calls += 1;
+      receivedKeys = Object.keys(request);
+      return makeResult(request.correlationId);
+    },
+  };
+  const providers = composeExecutionRunProviders({ ...base, ai });
+  const composition = composeExecutionRunD2D3({ providers });
+  const fixture = getFixture("nominal");
+  const result = await composition.coordinate({
+    intent: fixture.intent,
+    context: fixture.context,
+    providerRequest: {
+      correlationId: fixture.intent.correlationId,
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "deterministic fixture" }],
+      timeoutMs: 100,
+    },
+    timeoutMs: 100,
+    ...options,
+  });
+  return { result, calls, receivedKeys };
+}
+
+describe("D2-D3 deterministic negative and resilience scenarios", () => {
+  it.each([
+    ["authentication", "AUTHENTICATION_ERROR"],
+    ["authorization", "AUTHORIZATION_ERROR"],
+    ["provider_unavailable", "PROVIDER_UNAVAILABLE"],
+    ["rate_limited", "RATE_LIMITED"],
+  ] as const)(
+    "normalizes %s failure to the exact failed terminal",
+    async (family, code) => {
+      const { result, calls } = await runWithAiResult((correlationId) =>
+        failureResult(family, code, correlationId),
+      );
+      expect(calls).toBe(1);
+      expect(result.run?.state).toBe("failed");
+      if (result.ok) throw new Error("expected failed result");
+      expect(result.failure).toMatchObject({ family, code });
+      expect(result.run?.evidence).toBeUndefined();
+      expect(result.run?.disclosure.source).toBe("fixture");
+    },
+  );
+
+  it("maps provider timeout to timed_out", async () => {
+    const { result } = await runWithAiResult((correlationId) => ({
+      kind: "timed_out",
+      failure: normalizedFailure({
+        family: "timed_out",
+        code: "TIMED_OUT",
+        userMessage: "Bounded timeout",
+        retryable: true,
+        correlationId,
+      }),
+    }));
+    expect(result.run?.state).toBe("timed_out");
+    if (result.ok) throw new Error("expected timed-out result");
+    expect(result.failure.code).toBe("TIMED_OUT");
+  });
+
+  it("maps provider cancellation to cancelled and preserves it after late evidence", async () => {
+    const { result } = await runWithAiResult(
+      (correlationId) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "Bounded cancellation",
+          retryable: false,
+          correlationId,
+        }),
+      }),
+      { lateEvidenceSummary: "late redacted fixture result" },
+    );
+    expect(result.run?.state).toBe("cancelled");
+    if (result.ok) throw new Error("expected cancelled result");
+    expect(result.failure.code).toBe("CANCELLED");
+    expect(result.run?.evidence?.at(-1)?.late).toBe(true);
+  });
+
+  it("fails partial provider success and preserves explicit partiality", async () => {
+    const { result } = await runWithAiResult(() => ({
+      kind: "success",
+      completeness: "partial",
+      redactedSummary: "bounded partial result",
+      rawPresent: false,
+      usage: { status: "unavailable", reason: "partial" },
+      disclosureNotes: ["fixture"],
+    }));
+    expect(result.run?.state).toBe("failed");
+    if (result.ok) throw new Error("expected partial failure");
+    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
+    expect(result.run?.externalResult).toMatchObject({
+      kind: "success",
+      completeness: "partial",
+    });
+    expect(result.run?.state).not.toBe("succeeded");
+  });
+
+  it("rejects an invalid provider result without leaking raw content", async () => {
+    const { result } = await runWithAiResult(
+      () =>
+        ({
+          kind: "success",
+          completeness: "complete",
+          redactedSummary: "password=do-not-leak",
+          rawPresent: true,
+          usage: { status: "unavailable", reason: "invalid" },
+          disclosureNotes: [],
+        }) as ProviderInvocationResult,
+    );
+    expect(result.run?.state).toBe("failed");
+    if (result.ok) throw new Error("expected invalid provider failure");
+    expect(result.failure.code).toBe("INVALID_PROVIDER_RESULT");
+    expect(JSON.stringify(result.run)).not.toContain("do-not-leak");
+  });
+
+  it.each([
+    ["validation_failure", "VALIDATION_ERROR"],
+    ["blocked_gate", "HUMAN_GATE_REQUIRED"],
+    ["protected_path", "PROTECTED_PATH"],
+    ["mutation_forbidden", "MUTATION_FORBIDDEN"],
+    ["source_mismatch", "SOURCE_MISMATCH"],
+  ] as const)("blocks %s before provider invocation", async (scenario, code) => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture(scenario);
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest:
+        fixture.intent.requestedLane === "ai"
+          ? {
+              correlationId: fixture.intent.correlationId,
+              lane: "ai",
+              operation: "complete",
+              messages: [{ role: "user", content: "must not execute" }],
+              timeoutMs: 100,
+            }
+          : undefined,
+      timeoutMs: 100,
+    });
+    expect(result.ok).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    if (result.ok) throw new Error("expected pre-engagement block");
+    expect(result.failure.code).toBe(code);
+    if (result.run) {
+      expect(result.run.state).toBe("blocked");
+      expect(result.run.evidence).toBeUndefined();
+      expect(result.run.disclosure.source).toBe(
+        fixture.context.declaredSource,
+      );
+    }
+  });
+
+  it("blocks a sensitive provider request at the boundary and redacts output", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const sensitive = "fixture-sensitive-value";
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "safe" }],
+        timeoutMs: 100,
+        apiKey: sensitive,
+      } as never,
+      timeoutMs: 100,
+    });
+    expect(result.ok).toBe(false);
+    expect(result.run).toBeUndefined();
+    expect(result.providerInvoked).toBe(false);
+    expect(JSON.stringify(result)).not.toContain(sensitive);
+    if (result.ok) throw new Error("expected failure");
+    expect(result.failure.code).toBe("VALIDATION_ERROR");
+  });
+
+  it("blocks providerRequest correlationId mismatch before engagement", async () => {
+    const base = composeExecutionRunProvidersFake();
+    let describeCalls = 0;
+    let completeCalls = 0;
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => {
+        describeCalls += 1;
+        return base.ai.describeCapability();
+      },
+      complete: async (request) => {
+        completeCalls += 1;
+        return base.ai.complete(request);
+      },
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({ ...base, ai }),
+    });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        correlationId: "corr:neg:intent",
+        intentId: "intent:neg:corr",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: "corr:neg:request",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "must not execute" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    expect(result.ok).toBe(false);
+    expect(result.run).toBeUndefined();
+    expect(result.stateTrace).toEqual([]);
+    expect(result.providerAttempted).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.providerCompleted).toBe(false);
+    expect(describeCalls).toBe(0);
+    expect(completeCalls).toBe(0);
+    if (result.ok) throw new Error("expected correlation mismatch rejection");
+    expect(result.failure.code).toBe("VALIDATION_ERROR");
+    expect(result.failure.family).toBe("validation");
+  });
+
+  it("gives providers no run, repository, save, or transition authority", async () => {
+    const { result, receivedKeys } = await runWithAiResult(() => ({
+      kind: "success",
+      completeness: "complete",
+      redactedSummary: "bounded complete fixture",
+      rawPresent: false,
+      usage: { status: "validated", inputTokens: 1, outputTokens: 1 },
+      disclosureNotes: ["fixture"],
+    }));
+    expect(result.run?.state).toBe("succeeded");
+    expect(receivedKeys).not.toEqual(
+      expect.arrayContaining([
+        "executionRun",
+        "repository",
+        "save",
+        "transitionExecutionRun",
+      ]),
+    );
+    expect(result.stateTrace).toEqual(["idle", "running", "succeeded"]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
new file mode 100644
index 0000000..035ea95
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
@@ -0,0 +1,102 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { getFixture } from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+async function succeededProjection() {
+  const composition = composeExecutionRunD2D3();
+  const fixture = getFixture("nominal");
+  const coordinated = await composition.coordinate({
+    intent: fixture.intent,
+    context: fixture.context,
+    providerRequest: {
+      correlationId: fixture.intent.correlationId,
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "fixture-only input" }],
+      timeoutMs: 100,
+    },
+    timeoutMs: 100,
+  });
+  if (!coordinated.run) throw new Error("expected run");
+  const projection = await composition.projectById(coordinated.run.runId);
+  if (!projection.ok) throw new Error(projection.failure.message);
+  return projection.projection;
+}
+
+describe("D2-D3 provider-independent projection", () => {
+  it("projects the bounded transport-neutral shape and disclosures", async () => {
+    const projection = await succeededProjection();
+
+    expect(projection).toMatchObject({
+      state: "succeeded",
+      source: "fixture",
+      providerLane: "ai",
+      phase: "terminal",
+      completeness: "complete",
+      cursorUnverified: true,
+      gitWrite: false,
+      persistence: {
+        kind: "memory_process_local",
+        durable: false,
+        multiInstance: false,
+        restartSafe: false,
+      },
+    });
+    expect(projection.evidenceSummary[0]).toMatchObject({
+      official: true,
+      source: "fixture",
+      late: false,
+    });
+    expect(projection.readinessAssessment.uiDelivery.status).toBe(
+      "not_demonstrated",
+    );
+    expect(projection.readinessAssessment.strongRuntimeVerdict.status).toBe(
+      "blocked",
+    );
+  });
+
+  it("contains no executable, SDK, adapter, command, signal, or raw surface", async () => {
+    const projection = await succeededProjection();
+    const seenKeys: string[] = [];
+    const visit = (value: unknown): void => {
+      if (!value || typeof value !== "object") {
+        expect(typeof value).not.toBe("function");
+        return;
+      }
+      for (const [key, nested] of Object.entries(value)) {
+        seenKeys.push(key);
+        expect(typeof nested).not.toBe("function");
+        visit(nested);
+      }
+    };
+    visit(projection);
+
+    expect(seenKeys).not.toEqual(
+      expect.arrayContaining([
+        "sdk",
+        "adapter",
+        "command",
+        "signal",
+        "abortSignal",
+        "rawPrompt",
+        "rawResponse",
+        "rawError",
+        "secret",
+      ]),
+    );
+    expect(JSON.stringify(projection)).not.toMatch(
+      /fixture-only input|AbortSignal|executeFixture|complete\(/,
+    );
+  });
+
+  it("is JSON serializable and exposes no Git write capability", async () => {
+    const projection = await succeededProjection();
+    expect(() => JSON.stringify(projection)).not.toThrow();
+    expect(JSON.parse(JSON.stringify(projection))).toEqual(projection);
+    expect(Object.keys(projection)).not.toContain("gitWriteCommand");
+    expect(projection.gitWrite).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts
new file mode 100644
index 0000000..5ec34c4
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts
@@ -0,0 +1,1088 @@
+/**
+ * @vitest-environment node
+ *
+ * Permanent regression matrix for F-QA-D2D3-01…10.
+ * Findings remain OPEN until Critical QA revalidation — these tests prove
+ * technical addressing only.
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assessExecutionReadiness,
+  createExecutionProjection,
+  getFixture,
+  MAX_COORDINATOR_TIMEOUT_MS,
+  normalizedFailure,
+  type AiExecutionPort,
+  type ProviderInvocationResult,
+} from "@/lib/oa/execution-run";
+import {
+  composeExecutionRunD2D3,
+  composeExecutionRunMemory,
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+  coordinateExecutionRun,
+} from "@/lib/oa/execution-run/server";
+
+describe("F-QA-D2D3 permanent regression matrix", () => {
+  it("F01 — fake provider cannot be promoted to real via injected availableSources", async () => {
+    const core = composeExecutionRunMemory({
+      clockIso: "2026-08-04T10:00:00.000Z",
+    });
+    const providers = composeExecutionRunProvidersFake();
+    const fixture = getFixture("nominal");
+    const result = await coordinateExecutionRun(
+      {
+        intent: {
+          ...fixture.intent,
+          correlationId: "corr:f01",
+          intentId: "intent:f01",
+          requestedSource: "real",
+        },
+        context: { ...fixture.context, declaredSource: "real" },
+        providerRequest: {
+          correlationId: "corr:f01",
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "must not run" }],
+          timeoutMs: 50,
+        },
+        timeoutMs: 50,
+        availableSources: ["fixture", "real", "sandbox-real"],
+      },
+      {
+        execution: core,
+        providers,
+        events: providers.events,
+        clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
+      },
+    );
+
+    expect(result.ok).toBe(false);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.run).toBeUndefined();
+    if (result.ok) throw new Error("expected failure");
+    expect(result.failure.code).toBe("SOURCE_MISMATCH");
+    expect(JSON.stringify(result)).not.toMatch(/"source":"real"/);
+  });
+
+  it("F02 — UX readiness cannot become demonstrated from boolean-only proofs", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+    expect(assessment.uxExploration.status).toBe("not_demonstrated");
+    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
+    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
+  });
+
+  it.each([1, 2, 4] as const)(
+    "F03 — sink throw at event %s continues workflow without raw error",
+    async (throwAt) => {
+      const core = composeExecutionRunMemory({
+        clockIso: "2026-08-04T10:00:00.000Z",
+      });
+      const providers = composeExecutionRunProvidersFake();
+      let eventCount = 0;
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => providers.ai.describeCapability(),
+        complete: async (request) => providers.ai.complete(request),
+      };
+      const throwing = composeExecutionRunProviders({
+        ...providers,
+        ai,
+        events: {
+          emit: () => {
+            eventCount += 1;
+            if (eventCount === throwAt) {
+              throw new Error(`sink_raw_${throwAt}`);
+            }
+          },
+        },
+      });
+      const fixture = getFixture("nominal");
+      let rawError = "";
+      let result;
+      try {
+        result = await coordinateExecutionRun(
+          {
+            intent: {
+              ...fixture.intent,
+              correlationId: `corr:f03:${throwAt}`,
+              intentId: `intent:f03:${throwAt}`,
+            },
+            context: fixture.context,
+            providerRequest: {
+              correlationId: `corr:f03:${throwAt}`,
+              lane: "ai",
+              operation: "complete",
+              messages: [{ role: "user", content: "sink" }],
+              timeoutMs: 50,
+            },
+            timeoutMs: 50,
+          },
+          {
+            execution: core,
+            providers: throwing,
+            events: throwing.events,
+            clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
+          },
+        );
+      } catch (error) {
+        rawError = error instanceof Error ? error.message : String(error);
+      }
+
+      expect(rawError).toBe("");
+      expect(result).toBeDefined();
+      const stored = await core.listByCorrelationId(`corr:f03:${throwAt}`);
+      expect(stored.at(-1)?.state).toBe(result!.run?.state);
+      expect(result!.run?.state).toBe("succeeded");
+      expect(result!.ok).toBe(true);
+      expect(result!.eventDelivery.status).toBe("degraded");
+      expect(result!.eventDelivery.failureCount).toBeGreaterThan(0);
+      expect(JSON.stringify(result)).not.toContain(`sink_raw_${throwAt}`);
+    },
+  );
+
+  it("F04 — malicious projection rejects secrets, functions, and claim promotion", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const coordinated = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "proj" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+    expect(coordinated.run?.state).toBe("succeeded");
+    const injectedFunction = () => "executable";
+    const malicious = {
+      run: {
+        ...coordinated.run,
+        externalResult: {
+          kind: "success",
+          completeness: "complete",
+          redactedSummary: "password=projection-plain-secret",
+          rawPresent: false,
+        },
+        blockedReason: "apiKey=projection-key",
+        disclosure: {
+          ...coordinated.run!.disclosure,
+          limits: [injectedFunction],
+        },
+        persistence: {
+          kind: "memory_process_local",
+          durable: true,
+          multiInstance: true,
+          restartSafe: true,
+        },
+        evidence: [
+          {
+            ...coordinated.run!.evidence![0],
+            source: "real",
+            official: false,
+          },
+        ],
+      },
+      openReserves: ["password=reserve-plain-secret"],
+    };
+    const projection = createExecutionProjection(malicious);
+    expect(projection.ok).toBe(false);
+    if (projection.ok) throw new Error("expected rejection");
+    expect(JSON.stringify(projection)).not.toContain("projection-plain-secret");
+    expect(JSON.stringify(projection)).not.toContain("reserve-plain-secret");
+  });
+
+  it("F05 — sensitive late evidence is redacted before persistence", async () => {
+    const base = composeExecutionRunProvidersFake();
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async (request) => ({
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "cancelled",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      }),
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({ ...base, ai }),
+    });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        correlationId: "corr:f05",
+        intentId: "intent:f05",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: "corr:f05",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "late" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+      lateEvidenceSummary: "password=late-plain-secret",
+    });
+
+    expect(result.run?.state).toBe("cancelled");
+    expect(result.lateEvidenceRecorded).toBe(true);
+    const late = result.run?.evidence?.at(-1);
+    expect(late).toMatchObject({
+      late: true,
+      official: true,
+      source: "fixture",
+    });
+    expect(late?.summary).toBe("late_result_redacted");
+    expect(late?.summary).not.toContain("late-plain-secret");
+    expect(JSON.stringify(result)).not.toContain("late-plain-secret");
+  });
+
+  it("F-QA-REV-D2D3-01 — matching correlationId keeps nominal engagement", async () => {
+    const base = composeExecutionRunProvidersFake();
+    let describeCalls = 0;
+    let completeCalls = 0;
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => {
+        describeCalls += 1;
+        return base.ai.describeCapability();
+      },
+      complete: async (request) => {
+        completeCalls += 1;
+        return base.ai.complete(request);
+      },
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({ ...base, ai }),
+    });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        correlationId: "corr:rev01:match",
+        intentId: "intent:rev01:match",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: "corr:rev01:match",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "match" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+    expect(result.ok).toBe(true);
+    expect(result.run?.state).toBe("succeeded");
+    expect(describeCalls).toBeGreaterThan(0);
+    expect(completeCalls).toBe(1);
+    expect(result.providerInvoked).toBe(true);
+  });
+
+  it.each([
+    {
+      name: "different",
+      requestCorrelationId: "corr:rev01:other",
+      buildRequest: (base: Record<string, unknown>) => ({
+        ...base,
+        correlationId: "corr:rev01:other",
+      }),
+    },
+    {
+      name: "empty",
+      requestCorrelationId: "",
+      buildRequest: (base: Record<string, unknown>) => ({
+        ...base,
+        correlationId: "",
+      }),
+    },
+    {
+      name: "absent",
+      requestCorrelationId: undefined,
+      buildRequest: (base: Record<string, unknown>) => {
+        const { correlationId: _omit, ...rest } = base as {
+          correlationId: string;
+        } & Record<string, unknown>;
+        void _omit;
+        return rest;
+      },
+    },
+    {
+      name: "hostile_getter",
+      requestCorrelationId: "corr:rev01:match",
+      buildRequest: (base: Record<string, unknown>) => {
+        const hostile = Object.create(null);
+        for (const [key, value] of Object.entries(base)) {
+          if (key === "correlationId") {
+            Object.defineProperty(hostile, key, {
+              enumerable: true,
+              get() {
+                return "corr:rev01:hostile";
+              },
+            });
+          } else {
+            Object.defineProperty(hostile, key, {
+              enumerable: true,
+              value,
+              writable: true,
+              configurable: true,
+            });
+          }
+        }
+        return hostile;
+      },
+    },
+    {
+      name: "odd_prototype",
+      requestCorrelationId: "corr:rev01:other",
+      buildRequest: (base: Record<string, unknown>) =>
+        Object.assign(Object.create({ polluted: true }), {
+          ...base,
+          correlationId: "corr:rev01:other",
+        }),
+    },
+  ])(
+    "F-QA-REV-D2D3-01 — correlationId $name rejects before provider engagement",
+    async ({ buildRequest }) => {
+      const base = composeExecutionRunProvidersFake();
+      let describeCalls = 0;
+      let completeCalls = 0;
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => {
+          describeCalls += 1;
+          return base.ai.describeCapability();
+        },
+        complete: async (request) => {
+          completeCalls += 1;
+          return base.ai.complete(request);
+        },
+      };
+      const composition = composeExecutionRunD2D3({
+        providers: composeExecutionRunProviders({ ...base, ai }),
+      });
+      const fixture = getFixture("nominal");
+      const requestBase = {
+        correlationId: "corr:rev01:match",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "must not run" }],
+        timeoutMs: 50,
+      };
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          correlationId: "corr:rev01:match",
+          intentId: "intent:rev01:reject",
+        },
+        context: fixture.context,
+        providerRequest: buildRequest(requestBase) as never,
+        timeoutMs: 50,
+      });
+
+      expect(result.ok).toBe(false);
+      expect(result.run).toBeUndefined();
+      expect(result.stateTrace).toEqual([]);
+      expect(result.providerAttempted).toBe(false);
+      expect(result.providerInvoked).toBe(false);
+      expect(result.providerCompleted).toBe(false);
+      expect(describeCalls).toBe(0);
+      expect(completeCalls).toBe(0);
+      expect(result.lateEvidenceRecorded).toBe(false);
+      if (result.ok) throw new Error("expected failure");
+      expect(result.failure.family).toBe("validation");
+      expect(result.failure.code).toBe("VALIDATION_ERROR");
+    },
+  );
+
+  it.each([
+    "password=late-secret",
+    "token=abc",
+    "token : abc",
+    "apiKey=k",
+    "api_key = k",
+    "api-key: k",
+    "Authorization Bearer xyz",
+    "Authorization: Bearer xyz",
+    "bearer xyz",
+    "access_token=abc",
+    "refresh_token=abc",
+    "client_secret=abc",
+    "cookie=session-value",
+    '"apiKey":"value"',
+    "?token=value",
+    "&token=value",
+    "contains private key material",
+    "ghp_abcdefghij",
+    "github_pat_abcdefghij",
+    "sk-abcdefghij",
+    "xoxb-abcdefghij",
+    "ToKeN=AbC",
+    "line1\ntoken=abc\nline3",
+    `${"safe-".repeat(80)}token=abc`,
+    "token=abc\u0000tail",
+    { not: "a string" },
+    null,
+    ["array"],
+    42,
+    true,
+  ])(
+    "F-QA-D2D3-05 / F-QA-REV-D2D3-02 — late secret %j becomes late_result_redacted",
+    async (summary) => {
+      const base = composeExecutionRunProvidersFake();
+      const sensitiveMarkers = [
+        "late-secret",
+        "token=abc",
+        "token : abc",
+        "apiKey=k",
+        "api_key = k",
+        "api-key: k",
+        "Authorization Bearer xyz",
+        "Authorization: Bearer xyz",
+        "bearer xyz",
+        "access_token=abc",
+        "refresh_token=abc",
+        "client_secret=abc",
+        "cookie=session-value",
+        '"apiKey":"value"',
+        "?token=value",
+        "&token=value",
+        "private key",
+        "ghp_abcdefghij",
+        "github_pat_abcdefghij",
+        "sk-abcdefghij",
+        "xoxb-abcdefghij",
+        "ToKeN=AbC",
+        "token=abc",
+      ];
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => base.ai.describeCapability(),
+        complete: async (request) => ({
+          kind: "cancelled",
+          failure: normalizedFailure({
+            family: "cancelled",
+            code: "CANCELLED",
+            userMessage: "cancelled",
+            retryable: false,
+            correlationId: request.correlationId,
+          }),
+        }),
+      };
+      const composition = composeExecutionRunD2D3({
+        providers: composeExecutionRunProviders({ ...base, ai }),
+      });
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          correlationId: "corr:rev02",
+          intentId: "intent:rev02",
+        },
+        context: fixture.context,
+        providerRequest: {
+          correlationId: "corr:rev02",
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "late" }],
+          timeoutMs: 50,
+        },
+        timeoutMs: 50,
+        lateEvidenceSummary: summary as never,
+      });
+
+      expect(result.run?.state).toBe("cancelled");
+      expect(result.lateEvidenceRecorded).toBe(true);
+      const late = result.run?.evidence?.at(-1);
+      expect(late).toMatchObject({
+        late: true,
+        official: true,
+        source: "fixture",
+        summary: "late_result_redacted",
+      });
+      const runJson = JSON.stringify(result.run);
+      const projection = createExecutionProjection({
+        run: result.run!,
+        openReserves: [],
+      });
+      expect(projection.ok).toBe(true);
+      const projJson = JSON.stringify(projection);
+      for (const marker of sensitiveMarkers) {
+        if (typeof summary === "string" && summary.includes(marker)) {
+          expect(runJson).not.toContain(marker);
+          expect(projJson).not.toContain(marker);
+          expect(JSON.stringify(result)).not.toContain(marker);
+        }
+      }
+      if (typeof summary === "string" && summary.includes("session-value")) {
+        expect(runJson).not.toContain("session-value");
+      }
+      if (typeof summary === "string" && summary.includes("late-secret")) {
+        expect(runJson).not.toContain("late-secret");
+      }
+    },
+  );
+
+  it("F06 — invalid intent yields zero describeCapability and zero provider calls", async () => {
+    const base = composeExecutionRunProvidersFake();
+    let describeCalls = 0;
+    let completeCalls = 0;
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => {
+        describeCalls += 1;
+        return base.ai.describeCapability();
+      },
+      complete: async (request) => {
+        completeCalls += 1;
+        return base.ai.complete(request);
+      },
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({ ...base, ai }),
+    });
+    const fixture = getFixture("validation_failure");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "must not run" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+
+    expect(result.ok).toBe(false);
+    expect(describeCalls).toBe(0);
+    expect(completeCalls).toBe(0);
+    expect(result.run).toBeUndefined();
+    expect(result.providerInvoked).toBe(false);
+  });
+
+  it("F07 — hostile request getter is rejected before run creation", async () => {
+    const core = composeExecutionRunMemory({
+      clockIso: "2026-08-04T10:00:00.000Z",
+    });
+    const providers = composeExecutionRunProvidersFake();
+    const fixture = getFixture("nominal");
+    const hostile = Object.create(null);
+    Object.defineProperty(hostile, "lane", {
+      enumerable: true,
+      get() {
+        throw new Error("hostile_request_getter");
+      },
+    });
+    let rawError = "";
+    let result;
+    try {
+      result = await coordinateExecutionRun(
+        {
+          intent: {
+            ...fixture.intent,
+            correlationId: "corr:f07-req",
+            intentId: "intent:f07-req",
+          },
+          context: fixture.context,
+          providerRequest: hostile,
+          timeoutMs: 50,
+        },
+        {
+          execution: core,
+          providers,
+          events: providers.events,
+          clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
+        },
+      );
+    } catch (error) {
+      rawError = error instanceof Error ? error.message : String(error);
+    }
+    const stored = await core.listByCorrelationId("corr:f07-req");
+    expect(rawError).toBe("");
+    expect(result?.ok).toBe(false);
+    expect(result?.providerInvoked).toBe(false);
+    expect(stored).toEqual([]);
+  });
+
+  it("F07 — hostile result getter yields failed terminal without orphan running", async () => {
+    const base = composeExecutionRunProvidersFake();
+    const hostileResult = Object.create(null);
+    Object.defineProperty(hostileResult, "kind", {
+      enumerable: true,
+      get() {
+        throw new Error("hostile_result_getter");
+      },
+    });
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async () =>
+        hostileResult as unknown as ProviderInvocationResult,
+    };
+    const core = composeExecutionRunMemory({
+      clockIso: "2026-08-04T10:00:00.000Z",
+    });
+    const providers = composeExecutionRunProviders({ ...base, ai });
+    const fixture = getFixture("nominal");
+    let rawError = "";
+    let result;
+    try {
+      result = await coordinateExecutionRun(
+        {
+          intent: {
+            ...fixture.intent,
+            correlationId: "corr:f07-res",
+            intentId: "intent:f07-res",
+          },
+          context: fixture.context,
+          providerRequest: {
+            correlationId: "corr:f07-res",
+            lane: "ai",
+            operation: "complete",
+            messages: [{ role: "user", content: "hostile" }],
+            timeoutMs: 50,
+          },
+          timeoutMs: 50,
+        },
+        {
+          execution: core,
+          providers,
+          events: providers.events,
+          clock: { nowIso: () => "2026-08-04T10:00:00.000Z" },
+        },
+      );
+    } catch (error) {
+      rawError = error instanceof Error ? error.message : String(error);
+    }
+    const stored = await core.listByCorrelationId("corr:f07-res");
+    expect(rawError).toBe("");
+    expect(result?.run?.state).toBe("failed");
+    expect(stored.at(-1)?.state).toBe("failed");
+    expect(stored.at(-1)?.state).not.toBe("running");
+    expect(JSON.stringify(result)).not.toContain("hostile_result_getter");
+  });
+
+  it("F08 — pre-cancellation reports providerInvoked=false with zero calls", async () => {
+    const base = composeExecutionRunProvidersFake();
+    let calls = 0;
+    const ai: AiExecutionPort = {
+      lane: "ai",
+      describeCapability: () => base.ai.describeCapability(),
+      complete: async (request) => {
+        calls += 1;
+        return base.ai.complete(request);
+      },
+    };
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({ ...base, ai }),
+    });
+    const fixture = getFixture("nominal");
+    const controller = new AbortController();
+    controller.abort();
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        correlationId: "corr:f08",
+        intentId: "intent:f08",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: "corr:f08",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "cancel" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+      signal: controller.signal,
+    });
+
+    expect(result.run?.state).toBe("cancelled");
+    expect(calls).toBe(0);
+    expect(result.providerAttempted).toBe(true);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.providerCompleted).toBe(false);
+  });
+
+  it.each([0, -1, Number.NaN, Number.POSITIVE_INFINITY, 1.5, MAX_COORDINATOR_TIMEOUT_MS + 1])(
+    "F09 — invalid timeout %s creates no run and invokes nothing",
+    async (timeoutMs) => {
+      const base = composeExecutionRunProvidersFake();
+      let describeCalls = 0;
+      let completeCalls = 0;
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => {
+          describeCalls += 1;
+          return base.ai.describeCapability();
+        },
+        complete: async (request) => {
+          completeCalls += 1;
+          return base.ai.complete(request);
+        },
+      };
+      const composition = composeExecutionRunD2D3({
+        providers: composeExecutionRunProviders({ ...base, ai }),
+      });
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          correlationId: `corr:f09:${String(timeoutMs)}`,
+          intentId: `intent:f09:${String(timeoutMs)}`,
+        },
+        context: fixture.context,
+        providerRequest: {
+          correlationId: `corr:f09:${String(timeoutMs)}`,
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "timeout" }],
+          timeoutMs: 50,
+        },
+        timeoutMs,
+      });
+      expect(result.ok).toBe(false);
+      expect(result.run).toBeUndefined();
+      expect(result.providerInvoked).toBe(false);
+      expect(describeCalls).toBe(0);
+      expect(completeCalls).toBe(0);
+      if (result.ok) throw new Error("expected failure");
+      expect(result.failure.code).toBe("VALIDATION_ERROR");
+    },
+  );
+
+  it("F09 — valid timeout still succeeds", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        correlationId: "corr:f09:ok",
+        intentId: "intent:f09:ok",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: "corr:f09:ok",
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "ok" }],
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+    expect(result.ok).toBe(true);
+    expect(result.run?.state).toBe("succeeded");
+  });
+
+  it.each([
+    "projects/sfia-studio/%2e%2e/.env",
+    "%2e%2e/.env",
+    "%252e%252e/.env",
+    "projects\\sfia-studio\\%2e%2e\\.env",
+    "%2fetc%2fpasswd",
+    "projects/sfia-studio/%00.env",
+    "projects/sfia-studio/%zz",
+  ])("F10 — encoded hostile path %s is blocked before provider", async (path) => {
+    const base = composeExecutionRunProvidersFake();
+    let calls = 0;
+    const composition = composeExecutionRunD2D3({
+      providers: composeExecutionRunProviders({
+        ...base,
+        git: {
+          ...base.git,
+          read: async (request) => {
+            calls += 1;
+            return base.git.read(request);
+          },
+        },
+      }),
+    });
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: {
+        ...fixture.intent,
+        intentId: `intent:f10:${path}`,
+        correlationId: `corr:f10:${path}`,
+        requestedLane: "git",
+      },
+      context: fixture.context,
+      providerRequest: {
+        correlationId: `corr:f10:${path}`,
+        lane: "git",
+        operation: "read",
+        owner: "o",
+        repo: "r",
+        kind: "path_meta",
+        path,
+        timeoutMs: 50,
+      },
+      timeoutMs: 50,
+    });
+    expect(result.ok).toBe(false);
+    expect(calls).toBe(0);
+    expect(result.providerInvoked).toBe(false);
+    expect(result.run?.evidence).toBeUndefined();
+    expect(result.run?.state === "succeeded").toBe(false);
+  });
+
+  it.each([
+    '{"token":"value"}',
+    '{"token":123}',
+    '{"token":true}',
+    '{"token":null}',
+    '{"token":[]}',
+    '{"token":{}}',
+    '{"access_token":"value"}',
+    '{"access-token":"value"}',
+    '{"refresh_token":"value"}',
+    '{"refresh-token":"value"}',
+    '{"client_secret":"value"}',
+    '{"client-secret":"value"}',
+    '{"apiKey":"value"}',
+    '{"api_key":"value"}',
+    '{"api-key":"value"}',
+    '{"authorization":"Bearer value"}',
+    '{"cookie":"value"}',
+    '{"session":"value"}',
+    "'token':'value'",
+    '{"ToKeN":"value"}',
+    '{"token" : "value"}',
+    '{"token"\t:\t"value"}',
+    '{\n"token": "value"\n}',
+    `${"a".repeat(250)}{"token":"secret-after-240"}`,
+  ])(
+    "F-QA-REV2-D2D3-01 — structured secret %j → late_result_redacted",
+    async (summary) => {
+      const base = composeExecutionRunProvidersFake();
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => base.ai.describeCapability(),
+        complete: async (request) => ({
+          kind: "cancelled",
+          failure: normalizedFailure({
+            family: "cancelled",
+            code: "CANCELLED",
+            userMessage: "cancelled",
+            retryable: false,
+            correlationId: request.correlationId,
+          }),
+        }),
+      };
+      const composition = composeExecutionRunD2D3({
+        providers: composeExecutionRunProviders({ ...base, ai }),
+      });
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          correlationId: "corr:rev2:01",
+          intentId: "intent:rev2:01",
+        },
+        context: fixture.context,
+        providerRequest: {
+          correlationId: "corr:rev2:01",
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "late" }],
+          timeoutMs: 50,
+        },
+        timeoutMs: 50,
+        lateEvidenceSummary: summary,
+      });
+      expect(result.run?.state).toBe("cancelled");
+      expect(result.lateEvidenceRecorded).toBe(true);
+      expect(result.run?.evidence?.at(-1)).toMatchObject({
+        late: true,
+        official: true,
+        source: "fixture",
+        summary: "late_result_redacted",
+      });
+      const blob = JSON.stringify(result);
+      expect(result.run?.evidence?.at(-1)?.summary).toBe("late_result_redacted");
+      if (summary.includes("secret-after-240")) {
+        expect(blob).not.toContain("secret-after-240");
+      }
+      if (summary.includes("Bearer value")) {
+        expect(blob).not.toContain("Bearer value");
+      }
+      expect(blob).not.toMatch(
+        /['"](?:password|secret|token|access[_-]token|refresh[_-]token|client[_-]secret|api[_-]?key|authorization|cookie|session)['"]\s*:\s*[^,\}\s]/i,
+      );
+      const projection = createExecutionProjection({
+        run: result.run!,
+        openReserves: [],
+      });
+      expect(projection.ok).toBe(true);
+      expect(JSON.stringify(projection)).not.toContain("secret-after-240");
+      expect(JSON.stringify(projection)).not.toContain("Bearer value");
+    },
+  );
+
+  it.each([
+    '{"status":"complete"}',
+    '{"tokenCount":12}',
+    '{"authorizationStatus":"missing"}',
+    '{"sessionCount":1}',
+    '{"cookiePolicy":"strict"}',
+    '{"apiVersion":"v1"}',
+  ])(
+    "F-QA-REV2-D2D3-01 — non-sensitive structured %j preserved (not over-redacted)",
+    async (summary) => {
+      const base = composeExecutionRunProvidersFake();
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => base.ai.describeCapability(),
+        complete: async (request) => ({
+          kind: "cancelled",
+          failure: normalizedFailure({
+            family: "cancelled",
+            code: "CANCELLED",
+            userMessage: "cancelled",
+            retryable: false,
+            correlationId: request.correlationId,
+          }),
+        }),
+      };
+      const composition = composeExecutionRunD2D3({
+        providers: composeExecutionRunProviders({ ...base, ai }),
+      });
+      const fixture = getFixture("nominal");
+      const result = await composition.coordinate({
+        intent: {
+          ...fixture.intent,
+          correlationId: "corr:rev2:safe",
+          intentId: "intent:rev2:safe",
+        },
+        context: fixture.context,
+        providerRequest: {
+          correlationId: "corr:rev2:safe",
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "late" }],
+          timeoutMs: 50,
+        },
+        timeoutMs: 50,
+        lateEvidenceSummary: summary,
+      });
+      expect(result.run?.state).toBe("cancelled");
+      expect(result.lateEvidenceRecorded).toBe(true);
+      expect(result.run?.evidence?.at(-1)?.summary).toBe(summary);
+      expect(result.run?.evidence?.at(-1)?.summary).not.toBe(
+        "late_result_redacted",
+      );
+    },
+  );
+
+  it.each([
+    {
+      name: "function",
+      build: () => {
+        const input: Record<string, unknown> = {
+          intent: null,
+          context: null,
+          providerRequest: null,
+          timeoutMs: 50,
+        };
+        // placeholders replaced below
+        return { kind: "function" as const, late: (() => "fn") as unknown };
+      },
+    },
+    {
+      name: "symbol",
+      build: () => ({ kind: "symbol" as const, late: Symbol("x") as unknown }),
+    },
+    {
+      name: "getter",
+      build: () => ({ kind: "getter" as const }),
+    },
+    {
+      name: "odd_prototype",
+      build: () => ({ kind: "odd_prototype" as const }),
+    },
+  ])(
+    "F-QA-REV2-D2D3-02 — arbitrated fail-closed hostile envelope ($name)",
+    async ({ name, build }) => {
+      const base = composeExecutionRunProvidersFake();
+      let describeCalls = 0;
+      let completeCalls = 0;
+      const ai: AiExecutionPort = {
+        lane: "ai",
+        describeCapability: () => {
+          describeCalls += 1;
+          return base.ai.describeCapability();
+        },
+        complete: async (request) => {
+          completeCalls += 1;
+          return base.ai.complete(request);
+        },
+      };
+      const composition = composeExecutionRunD2D3({
+        providers: composeExecutionRunProviders({ ...base, ai }),
+      });
+      const fixture = getFixture("nominal");
+      const built = build();
+      const coordInput: Record<string, unknown> = {
+        intent: {
+          ...fixture.intent,
+          correlationId: "corr:rev2:02",
+          intentId: "intent:rev2:02",
+        },
+        context: fixture.context,
+        providerRequest: {
+          correlationId: "corr:rev2:02",
+          lane: "ai",
+          operation: "complete",
+          messages: [{ role: "user", content: "must not run" }],
+          timeoutMs: 50,
+        },
+        timeoutMs: 50,
+      };
+      if (built.kind === "function" || built.kind === "symbol") {
+        coordInput.lateEvidenceSummary = built.late;
+      } else if (built.kind === "getter") {
+        Object.defineProperty(coordInput, "lateEvidenceSummary", {
+          enumerable: true,
+          configurable: true,
+          get() {
+            return "hostile-getter-value";
+          },
+        });
+      } else {
+        // Nested non-plain object forces envelope untrusted rejection.
+        coordInput.lateEvidenceSummary = Object.assign(
+          Object.create({ polluted: true }),
+          { nested: "hostile-proto-value" },
+        );
+      }
+      const result = await composition.coordinate(coordInput as never);
+      expect(result.ok).toBe(false);
+      expect(result.run).toBeUndefined();
+      expect(result.stateTrace).toEqual([]);
+      expect(result.providerAttempted).toBe(false);
+      expect(result.providerInvoked).toBe(false);
+      expect(result.providerCompleted).toBe(false);
+      expect(result.lateEvidenceRecorded).toBe(false);
+      expect(describeCalls).toBe(0);
+      expect(completeCalls).toBe(0);
+      if (result.ok) throw new Error("expected failure");
+      expect(result.failure.family).toBe("validation");
+      expect(JSON.stringify(result)).not.toContain("hostile-getter-value");
+      expect(JSON.stringify(result)).not.toContain("hostile-proto-value");
+    },
+  );
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
new file mode 100644
index 0000000..181f927
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
@@ -0,0 +1,123 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  assessExecutionReadiness,
+  D2D3_OPEN_RESERVES,
+  getFixture,
+} from "@/lib/oa/execution-run";
+import { composeExecutionRunD2D3 } from "@/lib/oa/execution-run/server";
+
+describe("D2-D3 bounded readiness assessment", () => {
+  it("rejects boolean-only proofs as not demonstrated", () => {
+    const assessment = assessExecutionReadiness({
+      fixturePathDemonstrated: true,
+      projectionDemonstrated: true,
+      disclosuresDemonstrated: true,
+    });
+    expect(assessment.uxExploration.status).toBe("not_demonstrated");
+  });
+
+  it("demonstrates UX exploration only with linked run, projection, and evidence", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "readiness fixture" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    expect(result.run?.state).toBe("succeeded");
+    const assessment = await composition.assessById(result.run!.runId);
+    expect(assessment.uxExploration.status).toBe("demonstrated");
+  });
+
+  it("keeps UI delivery not demonstrated and strong runtime blocked", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "bounded" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    const assessment = await composition.assessById(result.run!.runId);
+
+    expect(assessment.uiDelivery.status).toBe("not_demonstrated");
+    expect(assessment.strongRuntimeVerdict.status).toBe("blocked");
+    expect(assessment.strongRuntimeVerdict.reasons).toEqual([
+      "G-D2D-CURSOR-01 not consumed",
+      "G-D2D-PERSIST-01 not consumed",
+      "Cursor unverified",
+      "memory is process-local",
+      "no live provider proof",
+    ]);
+  });
+
+  it("carries every inherited reserve without lifting it", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "reserves" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    const assessment = await composition.assessById(result.run!.runId);
+
+    expect(assessment.openReserves).toEqual(D2D3_OPEN_RESERVES);
+    expect(assessment.openReserves).toHaveLength(6);
+  });
+
+  it("uses only the three bounded statuses and makes no excessive claim", async () => {
+    const composition = composeExecutionRunD2D3();
+    const fixture = getFixture("nominal");
+    const result = await composition.coordinate({
+      intent: fixture.intent,
+      context: fixture.context,
+      providerRequest: {
+        correlationId: fixture.intent.correlationId,
+        lane: "ai",
+        operation: "complete",
+        messages: [{ role: "user", content: "status" }],
+        timeoutMs: 100,
+      },
+      timeoutMs: 100,
+    });
+    const assessment = await composition.assessById(result.run!.runId);
+    const statuses = [
+      assessment.uxExploration.status,
+      assessment.uiDelivery.status,
+      assessment.strongRuntimeVerdict.status,
+    ];
+    const serialized = JSON.stringify(assessment);
+
+    expect(statuses).toEqual([
+      "demonstrated",
+      "not_demonstrated",
+      "blocked",
+    ]);
+    expect(serialized).not.toMatch(
+      /production-ready|RUN READY|multi-instance ready|restart-safe|Cursor verified/i,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
index 046d5ce..576338c 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
@@ -52,7 +52,7 @@ describe("D2-D1 execution-run import boundaries", () => {
     for (const file of files) {
       for (const line of importsOf(file)) {
         if (
-          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|cursor|node:|from\s+["']next|from\s+["']react/.test(
+          /from\s+["'].*\/infrastructure\/|from\s+["']ajv|openai|@octokit|@cursor\/|node:|from\s+["']next|from\s+["']react/.test(
             line,
           )
         ) {
@@ -170,3 +170,67 @@ describe("D2-D2 execution-run provider boundary imports", () => {
     expect(barrel).not.toMatch(/materializeForServerOnly/);
   });
 });
+
+describe("D2-D3 coordination and projection boundaries", () => {
+  it("keeps application code free of Node, Next, SDK, process, and infrastructure imports", () => {
+    const files = [
+      "application/coordinateExecutionRun.ts",
+      "application/executionProjection.ts",
+      "application/executionReadiness.ts",
+      "application/untrustedExecutionData.ts",
+    ];
+    for (const relative of files) {
+      const src = fs.readFileSync(path.join(MODULE_ROOT, relative), "utf8");
+      expect(src).not.toMatch(
+        /from\s+["'](?:node:|next|openai|@octokit)|\bchild_process\b|\bprocess\.|\binfrastructure\//,
+      );
+    }
+  });
+
+  it("keeps the concrete D2-D3 composition out of the public barrel", () => {
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/composeExecutionRunD2D3/);
+    expect(barrel).not.toMatch(/composeExecutionRunProviders/);
+    expect(barrel).not.toMatch(/MemoryExecutionRunRepository/);
+    // Coordinator function must not be re-exported; timeout bound may import the module path.
+    expect(barrel).not.toMatch(
+      /export\s*\{[^}]*\bcoordinateExecutionRun\b[^}]*\}\s*from/,
+    );
+    expect(barrel).not.toMatch(/availableSources/);
+  });
+
+  it("reuses the existing single memory authority without a new store or repository", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "server/composeExecutionRunD2D3.ts"),
+      "utf8",
+    );
+    expect(src).toMatch(/composeExecutionRunMemory/);
+    expect(src).not.toMatch(/new\s+MemoryExecutionRunStore/);
+    expect(src).not.toMatch(/new\s+MemoryExecutionRunRepository/);
+    expect(src).not.toMatch(/\.save\(/);
+    expect(src).not.toMatch(/availableSources/);
+  });
+
+  it("gives the coordinator only create and transition state authority", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "application/coordinateExecutionRun.ts"),
+      "utf8",
+    );
+    expect(src).toMatch(/createExecutionRun/);
+    expect(src).toMatch(/transitionExecutionRun/);
+    expect(src).not.toMatch(/\.save\(/);
+    expect(src).not.toMatch(/Object\.assign\([^)]*run/);
+    expect(src).not.toMatch(/\brun\.state\s*=/);
+    expect(src).not.toMatch(/availableSources:/);
+  });
+
+  it("keeps projection pure and free of secret materializers and transports", () => {
+    const src = fs.readFileSync(
+      path.join(MODULE_ROOT, "application/executionProjection.ts"),
+      "utf8",
+    );
+    expect(src).not.toMatch(
+      /materialize|NextResponse|fetch\(|from\s+["'](?:node:|next)/i,
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
index 238a4d5..0bc230b 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
@@ -67,6 +67,57 @@ describe("D2D2-08 sandbox contract fixture", () => {
     ).toBe(false);
   });

+  it("blocks percent-encoded traversal and protected paths", () => {
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/%2e%2e/.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "%2e%2e/.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "%252e%252e/.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects\\sfia-studio\\%2e%2e\\.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "%2fetc%2fpasswd",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/%00.env",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/%zz",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/app/lib/oa/execution-run/index.ts",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(true);
+  });
+
   it("blocks git write and arbitrary commands", () => {
     expect(
       evaluateSandboxMutationGuards({
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
new file mode 100644
index 0000000..047a184
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
@@ -0,0 +1,1086 @@
+import { normalizedFailure } from "../domain/errors";
+import {
+  validateUntrustedProviderRequest,
+  validateUntrustedProviderResult,
+} from "../domain/providerBoundary";
+import { evaluateSandboxPath } from "../domain/sandboxContract";
+import type {
+  ExecutionContext,
+  ExecutionIntent,
+  ExecutionRun,
+  ExecutionSource,
+  NormalizedFailure,
+  ProviderCapabilityDescriptor,
+  ProviderLane,
+  UsageSummary,
+} from "../domain/types";
+import type { ClockPort } from "../ports/clockPort";
+import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
+import type {
+  ExecutionEvent,
+  ExecutionEventSinkPort,
+} from "../ports/executionEventSinkPort";
+import type { GitReadPort } from "../ports/gitReadPort";
+import type { AiExecutionPort } from "../ports/aiExecutionPort";
+import type {
+  AiCompletionRequest,
+  CursorFixtureRequest,
+  GitReadRequest,
+  ProviderInvocationResult,
+} from "../ports/providerResult";
+import {
+  invokeWithTimeoutAndCancellation,
+  type InvokeOutcome,
+} from "./providerInvocation";
+import type { CreateExecutionRunResult } from "./createExecutionRun";
+import type { TransitionExecutionRunResult } from "./transitionExecutionRun";
+import {
+  readUntrustedPlainData,
+  sanitizeLateEvidenceSummary,
+} from "./untrustedExecutionData";
+
+/**
+ * Local D2-D3 implementation bound only.
+ * Not a platform-wide timeout decision; future extension requires a dedicated cycle.
+ */
+export const MAX_COORDINATOR_TIMEOUT_MS = 60_000;
+
+export type CoordinateProviderRequest =
+  | AiCompletionRequest
+  | GitReadRequest
+  | CursorFixtureRequest;
+
+export type ExecutionAuthority = {
+  readonly createExecutionRun: (
+    input: unknown,
+  ) => Promise<CreateExecutionRunResult>;
+  readonly transitionExecutionRun: (
+    input: unknown,
+  ) => Promise<TransitionExecutionRunResult>;
+};
+
+/**
+ * Injection surface for the coordinator.
+ * `availableSources` is intentionally absent — D2-D3 proves fixture only via
+ * internal preflight, never via caller-supplied source authority.
+ */
+export type CoordinateExecutionRunDependencies = {
+  readonly execution: ExecutionAuthority;
+  readonly providers: {
+    readonly ai: AiExecutionPort;
+    readonly git: GitReadPort;
+    readonly cursor: CursorExecutionPort;
+  };
+  readonly events: ExecutionEventSinkPort;
+  readonly clock: ClockPort;
+};
+
+export type CoordinateExecutionRunInput = {
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly providerRequest?: CoordinateProviderRequest;
+  readonly timeoutMs: number;
+  readonly signal?: AbortSignal;
+  /** Deterministic evidence-only simulation after a failed/cancelled/timed-out terminal. */
+  readonly lateEvidenceSummary?: string;
+};
+
+export type EventDeliveryStatus = "complete" | "degraded";
+
+export type CoordinateExecutionRunResult =
+  | {
+      readonly ok: true;
+      readonly run: ExecutionRun;
+      readonly providerAttempted: boolean;
+      readonly providerInvoked: boolean;
+      readonly providerCompleted: boolean;
+      readonly stateTrace: readonly ExecutionRun["state"][];
+      readonly validatedUsage: UsageSummary;
+      readonly lateEvidenceRecorded: boolean;
+      readonly eventDelivery: {
+        readonly status: EventDeliveryStatus;
+        readonly failureCount: number;
+      };
+    }
+  | {
+      readonly ok: false;
+      readonly failure: NormalizedFailure;
+      readonly run?: ExecutionRun;
+      readonly providerAttempted: boolean;
+      readonly providerInvoked: boolean;
+      readonly providerCompleted: boolean;
+      readonly stateTrace: readonly ExecutionRun["state"][];
+      readonly validatedUsage: UsageSummary;
+      readonly lateEvidenceRecorded: boolean;
+      readonly eventDelivery: {
+        readonly status: EventDeliveryStatus;
+        readonly failureCount: number;
+      };
+    };
+
+type PreflightOk = {
+  readonly ok: true;
+  readonly intent: ExecutionIntent;
+  readonly context: ExecutionContext;
+  readonly providerRequest: CoordinateProviderRequest | undefined;
+  readonly timeoutMs: number;
+  readonly signal: AbortSignal | undefined;
+  readonly lateEvidenceSummary: unknown;
+  readonly correlationId: string;
+};
+
+type PreflightFail = {
+  readonly ok: false;
+  readonly failure: NormalizedFailure;
+};
+
+type EventTracker = {
+  failureCount: number;
+};
+
+const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];
+const ALLOWED_SOURCES: readonly ExecutionSource[] = [
+  "fixture",
+  "sandbox-real",
+  "real",
+];
+
+function unavailableUsage(reason: string): UsageSummary {
+  return { status: "unavailable", reason };
+}
+
+function validatedUsage(input: unknown): UsageSummary {
+  if (!input || typeof input !== "object") {
+    return unavailableUsage("provider_usage_unavailable");
+  }
+  const usage = input as Record<string, unknown>;
+  if (usage.status !== "validated") {
+    return unavailableUsage("provider_usage_unavailable");
+  }
+  for (const key of ["inputTokens", "outputTokens"] as const) {
+    const value = usage[key];
+    if (
+      value !== undefined &&
+      (typeof value !== "number" || !Number.isFinite(value) || value < 0)
+    ) {
+      return unavailableUsage("provider_usage_invalid");
+    }
+  }
+  if (usage.unit !== undefined && typeof usage.unit !== "string") {
+    return unavailableUsage("provider_usage_invalid");
+  }
+  return {
+    status: "validated",
+    inputTokens: usage.inputTokens as number | undefined,
+    outputTokens: usage.outputTokens as number | undefined,
+    unit: usage.unit as string | undefined,
+  };
+}
+
+function invalidProviderFailure(correlationId: string): NormalizedFailure {
+  return normalizedFailure({
+    family: "invalid_provider_result",
+    code: "INVALID_PROVIDER_RESULT",
+    userMessage: "Provider returned an invalid or incomplete result",
+    retryable: false,
+    correlationId,
+  });
+}
+
+function validationFailure(
+  correlationId: string,
+  userMessage: string,
+): NormalizedFailure {
+  return normalizedFailure({
+    family: "validation",
+    code: "VALIDATION_ERROR",
+    userMessage,
+    retryable: false,
+    correlationId,
+  });
+}
+
+function emptyDiagnostics(tracker: EventTracker) {
+  return {
+    providerAttempted: false,
+    providerInvoked: false,
+    providerCompleted: false,
+    stateTrace: [] as ExecutionRun["state"][],
+    validatedUsage: unavailableUsage("not_validated"),
+    lateEvidenceRecorded: false,
+    eventDelivery: {
+      status: (tracker.failureCount > 0
+        ? "degraded"
+        : "complete") as EventDeliveryStatus,
+      failureCount: tracker.failureCount,
+    },
+  };
+}
+
+function safeEmit(
+  deps: CoordinateExecutionRunDependencies,
+  tracker: EventTracker,
+  run: ExecutionRun,
+  event: Pick<ExecutionEvent, "type" | "detail">,
+): void {
+  try {
+    const result = deps.events.emit({
+      ...event,
+      correlationId: run.correlationId,
+      runId: run.runId,
+      providerLane: run.disclosure.providerLane,
+      occurredAt: deps.clock.nowIso(),
+    }) as unknown;
+    if (
+      result !== null &&
+      result !== undefined &&
+      typeof result === "object" &&
+      typeof (result as { then?: unknown }).then === "function"
+    ) {
+      void Promise.resolve(result).catch(() => {
+        tracker.failureCount += 1;
+      });
+    }
+  } catch {
+    tracker.failureCount += 1;
+  }
+}
+
+function describeCapabilitySafe(
+  lane: ProviderLane,
+  deps: CoordinateExecutionRunDependencies,
+  correlationId: string,
+):
+  | { ok: true; capability: ProviderCapabilityDescriptor }
+  | { ok: false; failure: NormalizedFailure } {
+  try {
+    const described =
+      lane === "ai"
+        ? deps.providers.ai.describeCapability()
+        : lane === "git"
+          ? deps.providers.git.describeCapability()
+          : deps.providers.cursor.describeCapability();
+    const copied = readUntrustedPlainData(described, { redact: false });
+    if (!copied.ok || !copied.value || typeof copied.value !== "object") {
+      return {
+        ok: false,
+        failure: validationFailure(
+          correlationId,
+          "Provider capability descriptor rejected",
+        ),
+      };
+    }
+    const desc = copied.value as Record<string, unknown>;
+    return {
+      ok: true,
+      capability: {
+        lane,
+        capabilityId:
+          typeof desc.capabilityId === "string"
+            ? desc.capabilityId
+            : "unknown",
+        available: desc.available === true,
+        verified: false,
+        readOnly: desc.readOnly === true,
+        supportsCancellation: desc.supportsCancellation === true,
+        supportsTimeout: desc.supportsTimeout === true,
+      },
+    };
+  } catch {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "provider_unavailable",
+        code: "PROVIDER_UNAVAILABLE",
+        userMessage: "Provider capability description failed",
+        retryable: true,
+        correlationId,
+      }),
+    };
+  }
+}
+
+function validateTimeout(
+  value: unknown,
+  correlationId: string,
+): { ok: true; timeoutMs: number } | { ok: false; failure: NormalizedFailure } {
+  if (
+    typeof value !== "number" ||
+    !Number.isFinite(value) ||
+    !Number.isInteger(value) ||
+    value <= 0 ||
+    value > MAX_COORDINATOR_TIMEOUT_MS
+  ) {
+    return {
+      ok: false,
+      failure: validationFailure(
+        correlationId,
+        "Coordinator timeoutMs must be a positive integer within the local D2-D3 bound",
+      ),
+    };
+  }
+  return { ok: true, timeoutMs: value };
+}
+
+function validatePathField(
+  path: unknown,
+  correlationId: string,
+  allowlistRepos: readonly string[] | undefined,
+  protectedPaths: readonly string[] | undefined,
+): NormalizedFailure | undefined {
+  if (path === undefined) return undefined;
+  const decision = evaluateSandboxPath({
+    path,
+    allowlistRepos: allowlistRepos ?? ["projects/sfia-studio/"],
+    protectedPaths: protectedPaths ?? [".env"],
+  });
+  if (!decision.allowed) {
+    return normalizedFailure({
+      family:
+        decision.reason === "protected" || decision.reason === "traversal"
+          ? "protected_path"
+          : "validation",
+      code:
+        decision.reason === "protected" || decision.reason === "traversal"
+          ? "PROTECTED_PATH"
+          : "VALIDATION_ERROR",
+      userMessage: "Path failed sandbox normalization or protection checks",
+      retryable: false,
+      correlationId,
+    });
+  }
+  return undefined;
+}
+
+/**
+ * Preflight without provider ports: safe-read, timeout, intent/context/source,
+ * lane, correlation, provider request shape, and path guards.
+ */
+function preflightCoordinateInput(input: unknown): PreflightOk | PreflightFail {
+  const unknownCid = "unknown";
+  if (input === null || input === undefined || typeof input !== "object" || Array.isArray(input)) {
+    return {
+      ok: false,
+      failure: validationFailure(unknownCid, "Coordinator input rejected"),
+    };
+  }
+
+  // AbortSignal is a host object — extract by identity before plain-data copy.
+  const signalCandidate = (input as { signal?: unknown }).signal;
+  const signal =
+    signalCandidate instanceof AbortSignal ? signalCandidate : undefined;
+
+  const plainInput: Record<string, unknown> = {};
+  for (const key of Object.getOwnPropertyNames(input)) {
+    if (key === "signal") continue;
+    const desc = Object.getOwnPropertyDescriptor(input, key);
+    if (!desc || desc.get !== undefined || desc.set !== undefined) {
+      return {
+        ok: false,
+        failure: validationFailure(unknownCid, "Coordinator input rejected"),
+      };
+    }
+    plainInput[key] = desc.value;
+  }
+
+  const envelope = readUntrustedPlainData(plainInput, {
+    redact: false,
+    maxStringLength: 100_000,
+  });
+  if (!envelope.ok || !envelope.value || typeof envelope.value !== "object") {
+    return {
+      ok: false,
+      failure: validationFailure(unknownCid, "Coordinator input rejected"),
+    };
+  }
+  const raw = envelope.value as Record<string, unknown>;
+  // Ignore any injected availableSources property — never treat it as authority.
+  const intentRaw = raw.intent;
+  const contextRaw = raw.context;
+  if (!intentRaw || typeof intentRaw !== "object" || Array.isArray(intentRaw)) {
+    return {
+      ok: false,
+      failure: validationFailure(unknownCid, "intent required"),
+    };
+  }
+  if (
+    !contextRaw ||
+    typeof contextRaw !== "object" ||
+    Array.isArray(contextRaw)
+  ) {
+    return {
+      ok: false,
+      failure: validationFailure(unknownCid, "context required"),
+    };
+  }
+  const intentObj = intentRaw as Record<string, unknown>;
+  const contextObj = contextRaw as Record<string, unknown>;
+  const correlationId =
+    typeof intentObj.correlationId === "string" && intentObj.correlationId.trim()
+      ? intentObj.correlationId
+      : unknownCid;
+
+  if (
+    typeof intentObj.intentId !== "string" ||
+    !intentObj.intentId.trim() ||
+    typeof intentObj.operation !== "string" ||
+    !intentObj.operation.trim() ||
+    typeof intentObj.requestedLane !== "string" ||
+    !(ALLOWED_LANES as readonly string[]).includes(intentObj.requestedLane) ||
+    typeof intentObj.requestedSource !== "string" ||
+    !(ALLOWED_SOURCES as readonly string[]).includes(intentObj.requestedSource) ||
+    typeof intentObj.requiresHumanGate !== "boolean" ||
+    typeof intentObj.mutationRequested !== "boolean" ||
+    typeof intentObj.arbitraryCommandRequested !== "boolean"
+  ) {
+    return {
+      ok: false,
+      failure: validationFailure(correlationId, "intent shape invalid"),
+    };
+  }
+
+  if (
+    typeof contextObj.projectId !== "string" ||
+    typeof contextObj.actorId !== "string" ||
+    typeof contextObj.declaredSource !== "string" ||
+    !(ALLOWED_SOURCES as readonly string[]).includes(contextObj.declaredSource) ||
+    !contextObj.permissions ||
+    typeof contextObj.permissions !== "object"
+  ) {
+    return {
+      ok: false,
+      failure: validationFailure(correlationId, "context shape invalid"),
+    };
+  }
+
+  // D2-D3 internal proof is fixture only. Block real / sandbox-real before any port.
+  if (
+    intentObj.requestedSource !== "fixture" ||
+    contextObj.declaredSource !== "fixture"
+  ) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "source_mismatch",
+        code: "SOURCE_MISMATCH",
+        userMessage:
+          "D2-D3 demonstrates fixture only; real and sandbox-real remain blocked",
+        retryable: false,
+        correlationId,
+      }),
+    };
+  }
+
+  const timeout = validateTimeout(raw.timeoutMs, correlationId);
+  if (!timeout.ok) return timeout;
+
+  const permissions = contextObj.permissions as Record<string, unknown>;
+  const context: ExecutionContext = {
+    projectId: contextObj.projectId,
+    actorId: contextObj.actorId,
+    declaredSource: "fixture",
+    permissions: {
+      gitRead: permissions.gitRead === true,
+      gitWrite: permissions.gitWrite === true,
+      providerInvoke: permissions.providerInvoke === true,
+    },
+  };
+  if (typeof contextObj.workspaceId === "string") {
+    (context as { workspaceId?: string }).workspaceId = contextObj.workspaceId;
+  }
+  if (Array.isArray(contextObj.allowlistRepos)) {
+    (context as { allowlistRepos?: string[] }).allowlistRepos =
+      contextObj.allowlistRepos.filter((p) => typeof p === "string") as string[];
+  }
+  if (Array.isArray(contextObj.protectedPaths)) {
+    (context as { protectedPaths?: string[] }).protectedPaths =
+      contextObj.protectedPaths.filter((p) => typeof p === "string") as string[];
+  }
+
+  const intent: ExecutionIntent = {
+    intentId: intentObj.intentId,
+    correlationId,
+    requestedLane: intentObj.requestedLane as ProviderLane,
+    operation: intentObj.operation,
+    requestedSource: "fixture",
+    requiresHumanGate: intentObj.requiresHumanGate,
+    mutationRequested: intentObj.mutationRequested,
+    arbitraryCommandRequested: intentObj.arbitraryCommandRequested,
+  };
+  if (typeof intentObj.targetPath === "string") {
+    (intent as { targetPath?: string }).targetPath = intentObj.targetPath;
+  }
+  if (
+    intentObj.metadata &&
+    typeof intentObj.metadata === "object" &&
+    !Array.isArray(intentObj.metadata)
+  ) {
+    (intent as { metadata?: Readonly<Record<string, unknown>> }).metadata =
+      intentObj.metadata as Readonly<Record<string, unknown>>;
+  }
+
+  if (intent.targetPath !== undefined) {
+    const pathFailure = validatePathField(
+      intent.targetPath,
+      correlationId,
+      context.allowlistRepos,
+      context.protectedPaths,
+    );
+    if (pathFailure) return { ok: false, failure: pathFailure };
+  }
+
+  let providerRequest: CoordinateProviderRequest | undefined;
+  if (raw.providerRequest !== undefined) {
+    const requestCopy = readUntrustedPlainData(raw.providerRequest, {
+      redact: false,
+      maxStringLength: 100_000,
+    });
+    if (!requestCopy.ok) {
+      return {
+        ok: false,
+        failure: validationFailure(
+          correlationId,
+          "Provider request rejected as untrusted data",
+        ),
+      };
+    }
+    const requestObj = requestCopy.value as Record<string, unknown>;
+    // Validate original identity fields BEFORE any canonical rebuild.
+    // Never rewrite a divergent correlationId to match the intent.
+    const requestCorrelationId = requestObj.correlationId;
+    if (
+      typeof requestCorrelationId !== "string" ||
+      !requestCorrelationId.trim()
+    ) {
+      return {
+        ok: false,
+        failure: validationFailure(
+          correlationId,
+          "Provider request correlationId required",
+        ),
+      };
+    }
+    if (requestCorrelationId !== correlationId) {
+      return {
+        ok: false,
+        failure: validationFailure(
+          correlationId,
+          "Provider request correlationId does not match intent",
+        ),
+      };
+    }
+    const requestLane = requestObj.lane;
+    if (
+      typeof requestLane !== "string" ||
+      requestLane !== intent.requestedLane
+    ) {
+      return {
+        ok: false,
+        failure: validationFailure(
+          correlationId,
+          "Provider request lane does not match intent",
+        ),
+      };
+    }
+    const boundary = validateUntrustedProviderRequest(
+      requestCopy.value,
+      correlationId,
+    );
+    if (!boundary.ok) {
+      return { ok: false, failure: boundary.failure };
+    }
+    if (typeof requestObj.path === "string") {
+      const pathFailure = validatePathField(
+        requestObj.path,
+        correlationId,
+        context.allowlistRepos,
+        context.protectedPaths,
+      );
+      if (pathFailure) return { ok: false, failure: pathFailure };
+    }
+    // Rebuild timeout from validated coordinator timeout only.
+    // Keep the already-validated original correlationId (no silent rewrite).
+    providerRequest = {
+      ...(requestCopy.value as CoordinateProviderRequest),
+      timeoutMs: timeout.timeoutMs,
+      correlationId: requestCorrelationId,
+    };
+  }
+
+  return {
+    ok: true,
+    intent,
+    context,
+    providerRequest,
+    timeoutMs: timeout.timeoutMs,
+    signal,
+    lateEvidenceSummary: raw.lateEvidenceSummary,
+    correlationId,
+  };
+}
+
+async function blockIdleRun(
+  run: ExecutionRun,
+  failure: NormalizedFailure,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<TransitionExecutionRunResult> {
+  return deps.execution.transitionExecutionRun({
+    runId: run.runId,
+    reason: "pre_engagement_block",
+    failure,
+    blockingReason: failure.code,
+  });
+}
+
+function requestMatchesRun(
+  request: CoordinateProviderRequest | undefined,
+  run: ExecutionRun,
+): boolean {
+  return Boolean(
+    request &&
+      request.lane === run.intent.requestedLane &&
+      request.correlationId === run.correlationId,
+  );
+}
+
+function resultFailure(
+  result: ProviderInvocationResult,
+  correlationId: string,
+): NormalizedFailure {
+  const allowedPairs: Readonly<Record<string, string>> = {
+    VALIDATION_ERROR: "validation",
+    AUTHENTICATION_ERROR: "authentication",
+    AUTHORIZATION_ERROR: "authorization",
+    PROVIDER_UNAVAILABLE: "provider_unavailable",
+    RATE_LIMITED: "rate_limited",
+    TIMED_OUT: "timed_out",
+    CANCELLED: "cancelled",
+    SANDBOX_BLOCKED: "sandbox_blocked",
+    PROTECTED_PATH: "protected_path",
+    MUTATION_FORBIDDEN: "mutation_forbidden",
+    HUMAN_GATE_REQUIRED: "human_gate_required",
+    INVALID_PROVIDER_RESULT: "invalid_provider_result",
+    INTERNAL_NORMALIZED_FAILURE: "internal_normalized_failure",
+    SOURCE_MISMATCH: "source_mismatch",
+  };
+  if (
+    "failure" in result &&
+    result.failure &&
+    result.failure.correlationId === correlationId &&
+    result.failure.technicalDetailsRedacted === true &&
+    allowedPairs[result.failure.code] === result.failure.family
+  ) {
+    return normalizedFailure({
+      family: result.failure.family,
+      code: result.failure.code,
+      userMessage: "Provider operation failed",
+      retryable: result.failure.retryable,
+      correlationId,
+    });
+  }
+  return invalidProviderFailure(correlationId);
+}
+
+async function transitionFromInvocation(
+  run: ExecutionRun,
+  outcome: InvokeOutcome,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<{ result: TransitionExecutionRunResult; usage: UsageSummary }> {
+  if (outcome.status === "timed_out") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "time_limit",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_timed_out"),
+    };
+  }
+  if (outcome.status === "cancelled") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "cancel_accepted",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_cancelled"),
+    };
+  }
+  if (outcome.status === "failed") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "engaged_operation_failed",
+        failure: outcome.failure,
+      }),
+      usage: unavailableUsage("provider_failed"),
+    };
+  }
+
+  const providerResultRaw = outcome.result;
+  const safeResult = readUntrustedPlainData(providerResultRaw, {
+    redact: true,
+    maxStringLength: 100_000,
+  });
+  if (!safeResult.ok) {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "engaged_operation_failed",
+        failure: invalidProviderFailure(run.correlationId),
+      }),
+      usage: unavailableUsage("provider_result_hostile"),
+    };
+  }
+
+  const providerResult = safeResult.value as ProviderInvocationResult;
+  const boundary = validateUntrustedProviderResult(
+    providerResult,
+    run.correlationId,
+  );
+  if (!boundary.ok) {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "engaged_operation_failed",
+        failure: boundary.failure,
+      }),
+      usage: unavailableUsage("provider_result_invalid"),
+    };
+  }
+
+  if (providerResult.kind === "success") {
+    const usage = validatedUsage(providerResult.usage);
+    const externalResult = {
+      kind: "success" as const,
+      completeness: providerResult.completeness,
+      redactedSummary: providerResult.redactedSummary,
+      rawPresent: false as const,
+    };
+    if (providerResult.completeness === "partial") {
+      const failure = invalidProviderFailure(run.correlationId);
+      return {
+        result: await deps.execution.transitionExecutionRun({
+          runId: run.runId,
+          reason: "engaged_operation_failed",
+          externalResult,
+          failure,
+        }),
+        usage,
+      };
+    }
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "outputs_validated",
+        completeness: "complete",
+        externalResult,
+      }),
+      usage,
+    };
+  }
+
+  const failure = resultFailure(providerResult, run.correlationId);
+  if (providerResult.kind === "timed_out") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "time_limit",
+        failure,
+      }),
+      usage: unavailableUsage("provider_timed_out"),
+    };
+  }
+  if (providerResult.kind === "cancelled") {
+    return {
+      result: await deps.execution.transitionExecutionRun({
+        runId: run.runId,
+        reason: "cancel_accepted",
+        failure,
+      }),
+      usage: unavailableUsage("provider_cancelled"),
+    };
+  }
+  return {
+    result: await deps.execution.transitionExecutionRun({
+      runId: run.runId,
+      reason: "engaged_operation_failed",
+      failure,
+    }),
+    usage: unavailableUsage("provider_failed"),
+  };
+}
+
+function deliveryOf(tracker: EventTracker) {
+  return {
+    status: (tracker.failureCount > 0
+      ? "degraded"
+      : "complete") as EventDeliveryStatus,
+    failureCount: tracker.failureCount,
+  };
+}
+
+export async function coordinateExecutionRun(
+  input: unknown,
+  deps: CoordinateExecutionRunDependencies,
+): Promise<CoordinateExecutionRunResult> {
+  const tracker: EventTracker = { failureCount: 0 };
+  const stateTrace: ExecutionRun["state"][] = [];
+  const noUsage = unavailableUsage("not_validated");
+
+  const preflight = preflightCoordinateInput(input);
+  if (!preflight.ok) {
+    return {
+      ok: false,
+      failure: preflight.failure,
+      ...emptyDiagnostics(tracker),
+    };
+  }
+
+  let capability: ProviderCapabilityDescriptor | undefined;
+  if (preflight.intent.requestedLane !== "none") {
+    const described = describeCapabilitySafe(
+      preflight.intent.requestedLane,
+      deps,
+      preflight.correlationId,
+    );
+    if (!described.ok) {
+      return {
+        ok: false,
+        failure: described.failure,
+        ...emptyDiagnostics(tracker),
+      };
+    }
+    capability = described.capability;
+  }
+
+  const created = await deps.execution.createExecutionRun({
+    intent: preflight.intent,
+    context: preflight.context,
+    capability,
+  });
+
+  if (created.run) stateTrace.push(created.run.state);
+  if (!created.ok) {
+    if (created.run) {
+      safeEmit(deps, tracker, created.run, {
+        type: "validation",
+        detail: {
+          accepted: false,
+          source: created.run.disclosure.source,
+          failureCode: created.failure.code,
+        },
+      });
+    }
+    return {
+      ok: false,
+      failure: created.failure,
+      run: created.run,
+      providerAttempted: false,
+      providerInvoked: false,
+      providerCompleted: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+      eventDelivery: deliveryOf(tracker),
+    };
+  }
+
+  let current = created.run;
+  safeEmit(deps, tracker, current, {
+    type: "validation",
+    detail: { accepted: true, source: current.disclosure.source },
+  });
+
+  const preEngagementFailure =
+    preflight.intent.requestedLane === "none"
+      ? normalizedFailure({
+          family: "provider_unavailable",
+          code: "PROVIDER_UNAVAILABLE",
+          userMessage: "No provider lane selected",
+          retryable: true,
+          correlationId: current.correlationId,
+        })
+      : !requestMatchesRun(preflight.providerRequest, current)
+        ? validationFailure(
+            current.correlationId,
+            "Provider request does not match the validated run",
+          )
+        : undefined;
+
+  if (preEngagementFailure) {
+    const blocked = await blockIdleRun(current, preEngagementFailure, deps);
+    if (blocked.run) {
+      current = blocked.run;
+      stateTrace.push(blocked.run.state);
+    }
+    return {
+      ok: false,
+      failure: blocked.ok ? preEngagementFailure : blocked.failure,
+      run: blocked.run ?? current,
+      providerAttempted: false,
+      providerInvoked: false,
+      providerCompleted: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+      eventDelivery: deliveryOf(tracker),
+    };
+  }
+
+  const started = await deps.execution.transitionExecutionRun({
+    runId: current.runId,
+    reason: "intent_valid",
+  });
+  if (!started.ok) {
+    return {
+      ok: false,
+      failure: started.failure,
+      run: started.run ?? current,
+      providerAttempted: false,
+      providerInvoked: false,
+      providerCompleted: false,
+      stateTrace,
+      validatedUsage: noUsage,
+      lateEvidenceRecorded: false,
+      eventDelivery: deliveryOf(tracker),
+    };
+  }
+  current = started.run;
+  stateTrace.push(current.state);
+  safeEmit(deps, tracker, current, {
+    type: "run_transition",
+    detail: { state: current.state, source: current.disclosure.source },
+  });
+
+  const providerAttempted = true;
+  let providerInvoked = false;
+  let providerCompleted = false;
+
+  const invocation = await invokeWithTimeoutAndCancellation(
+    (invokeSignal) => {
+      // True only immediately before the effective provider port call.
+      providerInvoked = true;
+      const common = {
+        ...preflight.providerRequest!,
+        runId: current.runId,
+        signal: invokeSignal,
+        timeoutMs: preflight.timeoutMs,
+      };
+      switch (current.intent.requestedLane) {
+        case "ai":
+          return deps.providers.ai.complete(common as AiCompletionRequest);
+        case "git":
+          return deps.providers.git.read(common as GitReadRequest);
+        case "cursor":
+          return deps.providers.cursor.executeFixture(
+            common as CursorFixtureRequest,
+          );
+        default:
+          throw new Error("provider lane none cannot be invoked");
+      }
+    },
+    {
+      timeoutMs: preflight.timeoutMs,
+      signal: preflight.signal,
+      correlationId: current.correlationId,
+      maxRetries: 0,
+    },
+  );
+  providerCompleted = invocation.status === "completed";
+
+  safeEmit(deps, tracker, current, {
+    type: "provider_invocation",
+    detail: {
+      outcome: invocation.status,
+      source: current.disclosure.source,
+      providerAttempted,
+      providerInvoked,
+      providerCompleted,
+    },
+  });
+
+  const terminal = await transitionFromInvocation(current, invocation, deps);
+  if (!terminal.result.ok) {
+    return {
+      ok: false,
+      failure: terminal.result.failure,
+      run: terminal.result.run ?? current,
+      providerAttempted,
+      providerInvoked,
+      providerCompleted,
+      stateTrace,
+      validatedUsage: terminal.usage,
+      lateEvidenceRecorded: false,
+      eventDelivery: deliveryOf(tracker),
+    };
+  }
+  current = terminal.result.run;
+  stateTrace.push(current.state);
+  safeEmit(deps, tracker, current, {
+    type: "run_transition",
+    detail: { state: current.state, source: current.disclosure.source },
+  });
+
+  let lateEvidenceRecorded = false;
+  if (preflight.lateEvidenceSummary !== undefined) {
+    const summary = sanitizeLateEvidenceSummary(preflight.lateEvidenceSummary);
+    const late = await deps.execution.transitionExecutionRun({
+      runId: current.runId,
+      reason: "late_result_evidence_only",
+      lateEvidenceSummary: summary,
+    });
+    if (late.ok) {
+      current = late.run;
+      lateEvidenceRecorded = true;
+      safeEmit(deps, tracker, current, {
+        type: "late_result",
+        detail: { late: true, stateUnchanged: true },
+      });
+    }
+  }
+
+  const successful = current.state === "succeeded";
+  return successful
+    ? {
+        ok: true,
+        run: current,
+        providerAttempted,
+        providerInvoked,
+        providerCompleted,
+        stateTrace,
+        validatedUsage: terminal.usage,
+        lateEvidenceRecorded,
+        eventDelivery: deliveryOf(tracker),
+      }
+    : {
+        ok: false,
+        failure:
+          current.failure ??
+          normalizedFailure({
+            family:
+              current.state === "timed_out"
+                ? "timed_out"
+                : current.state === "cancelled"
+                  ? "cancelled"
+                  : "internal_normalized_failure",
+            code:
+              current.state === "timed_out"
+                ? "TIMED_OUT"
+                : current.state === "cancelled"
+                  ? "CANCELLED"
+                  : "INTERNAL_NORMALIZED_FAILURE",
+            userMessage: "Execution did not succeed",
+            retryable: false,
+            correlationId: current.correlationId,
+          }),
+        run: current,
+        providerAttempted,
+        providerInvoked,
+        providerCompleted,
+        stateTrace,
+        validatedUsage: terminal.usage,
+        lateEvidenceRecorded,
+        eventDelivery: deliveryOf(tracker),
+      };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
new file mode 100644
index 0000000..0901f1d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
@@ -0,0 +1,444 @@
+import type {
+  Completeness,
+  ExecutionRun,
+  ExecutionState,
+  UsageSummary,
+} from "../domain/types";
+import {
+  assessExecutionReadiness,
+  type ExecutionReadinessAssessment,
+} from "./executionReadiness";
+import {
+  readUntrustedPlainData,
+  redactBoundedText,
+} from "./untrustedExecutionData";
+
+const MAX_TEXT = 240;
+
+const ALLOWED_STATES = new Set<string>([
+  "idle",
+  "running",
+  "awaiting_human",
+  "succeeded",
+  "failed",
+  "cancelled",
+  "timed_out",
+  "blocked",
+]);
+
+const ALLOWED_SOURCES = new Set(["fixture", "sandbox-real", "real"]);
+const ALLOWED_LANES = new Set(["ai", "git", "cursor", "none"]);
+const ALLOWED_COMPLETENESS = new Set(["complete", "partial", "empty"]);
+
+export type ExecutionProjection = {
+  readonly runId: string;
+  readonly correlationId: string;
+  readonly state: ExecutionState;
+  readonly source: ExecutionRun["disclosure"]["source"];
+  readonly providerLane: ExecutionRun["disclosure"]["providerLane"];
+  readonly phase: string;
+  readonly completeness: Completeness | "unavailable";
+  readonly resultSummary: string | null;
+  readonly failure: {
+    readonly family: string;
+    readonly code: string;
+    readonly message: string;
+    readonly retryable: boolean;
+  } | null;
+  readonly blockedReason: string | null;
+  readonly humanGate: {
+    readonly gateId: string;
+    readonly question: string;
+    readonly required: boolean;
+    readonly decision: "approve" | "reject" | "cancel" | null;
+  } | null;
+  readonly evidenceSummary: readonly {
+    readonly evidenceId: string;
+    readonly source: ExecutionRun["disclosure"]["source"];
+    readonly completeness: Completeness;
+    readonly producedAt: string;
+    readonly late: boolean;
+    readonly official: true;
+  }[];
+  readonly usage: UsageSummary;
+  readonly openReserves: readonly string[];
+  readonly readinessAssessment: ExecutionReadinessAssessment;
+  readonly limits: readonly string[];
+  readonly persistence: {
+    readonly kind: "memory_process_local";
+    readonly durable: false;
+    readonly multiInstance: false;
+    readonly restartSafe: false;
+  };
+  readonly cursorUnverified: true;
+  readonly gitWrite: false;
+};
+
+export type CreateExecutionProjectionResult =
+  | { readonly ok: true; readonly projection: ExecutionProjection }
+  | {
+      readonly ok: false;
+      readonly failure: { readonly code: string; readonly message: string };
+    };
+
+function observablePhase(state: ExecutionState): string {
+  switch (state) {
+    case "idle":
+      return "validated";
+    case "running":
+      return "provider_operation";
+    case "awaiting_human":
+      return "human_decision";
+    default:
+      return "terminal";
+  }
+}
+
+function fail(
+  code: string,
+  message: string,
+): CreateExecutionProjectionResult {
+  return { ok: false, failure: { code, message } };
+}
+
+function asString(value: unknown): string | null {
+  return typeof value === "string" ? value : null;
+}
+
+function readPersistence(raw: unknown): CreateExecutionProjectionResult | {
+  ok: true;
+  persistence: ExecutionProjection["persistence"];
+} {
+  const copied = readUntrustedPlainData(raw);
+  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
+    return fail("PERSISTENCE_INVALID", "persistence must be a plain object");
+  }
+  const p = copied.value as Record<string, unknown>;
+  if (p.kind !== "memory_process_local") {
+    return fail("PERSISTENCE_KIND", "persistence.kind must be memory_process_local");
+  }
+  if (p.durable !== false || p.multiInstance !== false || p.restartSafe !== false) {
+    return fail(
+      "PERSISTENCE_FLAGS",
+      "persistence durable/multiInstance/restartSafe must be false",
+    );
+  }
+  return {
+    ok: true,
+    persistence: {
+      kind: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+    },
+  };
+}
+
+function readEvidence(
+  raw: unknown,
+  runId: string,
+  correlationId: string,
+  source: ExecutionRun["disclosure"]["source"],
+): CreateExecutionProjectionResult | {
+  ok: true;
+  evidence: ExecutionProjection["evidenceSummary"];
+} {
+  if (raw === undefined) {
+    return { ok: true, evidence: [] };
+  }
+  const copied = readUntrustedPlainData(raw, { redact: true });
+  if (!copied.ok || !Array.isArray(copied.value)) {
+    return fail("EVIDENCE_INVALID", "evidence must be a plain array");
+  }
+  const out: ExecutionProjection["evidenceSummary"][number][] = [];
+  for (const item of copied.value) {
+    if (!item || typeof item !== "object") {
+      return fail("EVIDENCE_ENTRY", "evidence entry must be a plain object");
+    }
+    const e = item as Record<string, unknown>;
+    if (e.official !== true) {
+      return fail("EVIDENCE_OFFICIAL", "canonical evidence.official must be true");
+    }
+    if (e.runId !== runId || e.correlationId !== correlationId) {
+      return fail("EVIDENCE_IDENTITY", "evidence identity must match the run");
+    }
+    if (e.source !== source) {
+      return fail("EVIDENCE_SOURCE", "evidence source must match run disclosure source");
+    }
+    const evidenceId = asString(e.evidenceId);
+    const producedAt = asString(e.producedAt);
+    if (!evidenceId || !producedAt) {
+      return fail("EVIDENCE_FIELDS", "evidence fields missing");
+    }
+    if (
+      typeof e.completeness !== "string" ||
+      !ALLOWED_COMPLETENESS.has(e.completeness)
+    ) {
+      return fail("EVIDENCE_COMPLETENESS", "evidence completeness invalid");
+    }
+    if (typeof e.late !== "boolean") {
+      return fail("EVIDENCE_LATE", "evidence.late must be boolean");
+    }
+    if (
+      typeof e.source !== "string" ||
+      !ALLOWED_SOURCES.has(e.source)
+    ) {
+      return fail("EVIDENCE_SOURCE_VALUE", "evidence source invalid");
+    }
+    out.push({
+      evidenceId,
+      source: e.source as ExecutionRun["disclosure"]["source"],
+      completeness: e.completeness as Completeness,
+      producedAt,
+      late: e.late,
+      official: true,
+    });
+  }
+  return { ok: true, evidence: out };
+}
+
+function readUsage(raw: unknown): UsageSummary {
+  const copied = readUntrustedPlainData(raw, { redact: true });
+  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
+    return { status: "unavailable", reason: "usage_unavailable" };
+  }
+  const usage = copied.value as Record<string, unknown>;
+  if (usage.status === "validated") {
+    return {
+      status: "validated",
+      inputTokens:
+        typeof usage.inputTokens === "number" ? usage.inputTokens : undefined,
+      outputTokens:
+        typeof usage.outputTokens === "number" ? usage.outputTokens : undefined,
+      unit: typeof usage.unit === "string" ? usage.unit : undefined,
+    };
+  }
+  return {
+    status: "unavailable",
+    reason:
+      typeof usage.reason === "string"
+        ? (redactBoundedText(usage.reason, MAX_TEXT) ?? "usage_unavailable")
+        : "usage_unavailable",
+  };
+}
+
+/**
+ * Reconstruct a transport-neutral projection from unknown input.
+ * TypeScript types are not trusted; values are allowlisted and redacted.
+ */
+export function createExecutionProjection(
+  input: unknown,
+): CreateExecutionProjectionResult {
+  const envelope = readUntrustedPlainData(input, {
+    redact: true,
+    maxStringLength: 100_000,
+  });
+  if (!envelope.ok || !envelope.value || typeof envelope.value !== "object") {
+    return fail("INPUT_REJECTED", "projection input rejected");
+  }
+  const root = envelope.value as Record<string, unknown>;
+  const runRaw = root.run ?? root;
+  if (!runRaw || typeof runRaw !== "object" || Array.isArray(runRaw)) {
+    return fail("RUN_REQUIRED", "run object required");
+  }
+  const run = runRaw as Record<string, unknown>;
+
+  const runId = asString(run.runId);
+  const correlationId = asString(run.correlationId);
+  if (!runId || !correlationId) {
+    return fail("IDENTITY", "runId and correlationId required");
+  }
+  if (typeof run.state !== "string" || !ALLOWED_STATES.has(run.state)) {
+    return fail("STATE", "run.state invalid");
+  }
+  const state = run.state as ExecutionState;
+
+  const disclosureRaw = run.disclosure;
+  if (!disclosureRaw || typeof disclosureRaw !== "object") {
+    return fail("DISCLOSURE", "disclosure required");
+  }
+  const disclosure = disclosureRaw as Record<string, unknown>;
+  if (
+    typeof disclosure.source !== "string" ||
+    !ALLOWED_SOURCES.has(disclosure.source) ||
+    typeof disclosure.providerLane !== "string" ||
+    !ALLOWED_LANES.has(disclosure.providerLane)
+  ) {
+    return fail("DISCLOSURE_FIELDS", "disclosure source/lane invalid");
+  }
+  const source = disclosure.source as ExecutionRun["disclosure"]["source"];
+  const providerLane =
+    disclosure.providerLane as ExecutionRun["disclosure"]["providerLane"];
+
+  const limitsRaw = disclosure.limits;
+  const limitsCopied = readUntrustedPlainData(limitsRaw);
+  if (!limitsCopied.ok || !Array.isArray(limitsCopied.value)) {
+    return fail("LIMITS", "disclosure.limits must be a string array");
+  }
+  const limits: string[] = [];
+  for (const item of limitsCopied.value) {
+    if (typeof item !== "string") {
+      return fail("LIMITS_TYPE", "disclosure.limits entries must be strings");
+    }
+    limits.push(redactBoundedText(item, MAX_TEXT) ?? "");
+  }
+
+  const persistence = readPersistence(run.persistence);
+  if (!("persistence" in persistence)) return persistence;
+
+  const evidence = readEvidence(run.evidence, runId, correlationId, source);
+  if (!("evidence" in evidence)) return evidence;
+
+  let resultSummary: string | null = null;
+  let completeness: Completeness | "unavailable" = "unavailable";
+  if (run.externalResult && typeof run.externalResult === "object") {
+    const ext = run.externalResult as Record<string, unknown>;
+    if (ext.kind === "success") {
+      resultSummary = redactBoundedText(ext.redactedSummary, MAX_TEXT);
+      if (
+        typeof ext.completeness === "string" &&
+        ALLOWED_COMPLETENESS.has(ext.completeness)
+      ) {
+        completeness = ext.completeness as Completeness;
+      }
+    }
+  }
+  if (completeness === "unavailable" && evidence.evidence.length > 0) {
+    completeness = evidence.evidence[evidence.evidence.length - 1]!.completeness;
+  }
+
+  let failure: ExecutionProjection["failure"] = null;
+  if (run.failure && typeof run.failure === "object") {
+    const f = run.failure as Record<string, unknown>;
+    failure = {
+      family: asString(f.family) ?? "internal_normalized_failure",
+      code: asString(f.code) ?? "INTERNAL_NORMALIZED_FAILURE",
+      message:
+        redactBoundedText(f.userMessage, MAX_TEXT) ??
+        "Failure details unavailable",
+      retryable: f.retryable === true,
+    };
+  }
+
+  let humanGate: ExecutionProjection["humanGate"] = null;
+  if (run.gate && typeof run.gate === "object") {
+    const g = run.gate as Record<string, unknown>;
+    const gateId = asString(g.gateId);
+    if (gateId) {
+      humanGate = {
+        gateId,
+        question:
+          redactBoundedText(g.question, MAX_TEXT) ?? "Human decision required",
+        required: g.required === true,
+        decision:
+          g.decision === "approve" ||
+          g.decision === "reject" ||
+          g.decision === "cancel"
+            ? g.decision
+            : null,
+      };
+    }
+  }
+
+  const usage =
+    root.validatedUsage !== undefined
+      ? readUsage(root.validatedUsage)
+      : readUsage(run.usage);
+
+  const openReservesRaw = root.openReserves;
+  let openReserves: readonly string[] | undefined;
+  if (openReservesRaw !== undefined) {
+    const copied = readUntrustedPlainData(openReservesRaw, { redact: true });
+    if (!copied.ok || !Array.isArray(copied.value)) {
+      return fail("RESERVES", "openReserves must be a string array");
+    }
+    openReserves = copied.value.map((item) => {
+      if (typeof item !== "string") return "reserve_redacted";
+      return redactBoundedText(item, MAX_TEXT) ?? "reserve_redacted";
+    });
+  }
+
+  const readinessAssessment: ExecutionReadinessAssessment =
+    root.readinessAssessment && typeof root.readinessAssessment === "object"
+      ? (root.readinessAssessment as ExecutionReadinessAssessment)
+      : assessExecutionReadiness({
+          run: {
+            runId,
+            correlationId,
+            state,
+            disclosure: { source, providerLane, limits },
+            evidence: evidence.evidence.map((e) => ({
+              ...e,
+              runId,
+              correlationId,
+              official: true as const,
+              summary: "projection_internal",
+            })),
+            persistence: persistence.persistence,
+          },
+        });
+
+  // Re-assess when caller supplied a readiness object that is not artifact-linked.
+  const linkedReadiness = assessExecutionReadiness({
+    run: {
+      runId,
+      correlationId,
+      state,
+      disclosure: {
+        source,
+        providerLane,
+        limits,
+        processLocalMemory: true,
+        cursorUnverified: true,
+      },
+      evidence: evidence.evidence.map((e) => ({
+        evidenceId: e.evidenceId,
+        runId,
+        correlationId,
+        source: e.source,
+        completeness: e.completeness,
+        producedAt: e.producedAt,
+        late: e.late,
+        official: true as const,
+        summary: "projection_internal",
+      })),
+      persistence: persistence.persistence,
+    },
+    projection: {
+      runId,
+      correlationId,
+      source,
+      state,
+    },
+  });
+
+  const finalReadiness =
+    root.readinessAssessment && typeof root.readinessAssessment === "object"
+      ? linkedReadiness
+      : readinessAssessment;
+
+  return {
+    ok: true,
+    projection: {
+      runId,
+      correlationId,
+      state,
+      source,
+      providerLane,
+      phase: observablePhase(state),
+      completeness,
+      resultSummary,
+      failure,
+      blockedReason: redactBoundedText(run.blockedReason, MAX_TEXT),
+      humanGate,
+      evidenceSummary: evidence.evidence,
+      usage,
+      openReserves: openReserves ?? finalReadiness.openReserves,
+      readinessAssessment: finalReadiness,
+      limits,
+      persistence: persistence.persistence,
+      cursorUnverified: true,
+      gitWrite: false,
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
new file mode 100644
index 0000000..b40691a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
@@ -0,0 +1,198 @@
+import { readUntrustedPlainData } from "./untrustedExecutionData";
+
+export type ReadinessStatus =
+  | "demonstrated"
+  | "not_demonstrated"
+  | "blocked";
+
+export type ReadinessLevel = {
+  readonly status: ReadinessStatus;
+  readonly reasons: readonly string[];
+};
+
+export type ExecutionReadinessAssessment = {
+  readonly uxExploration: ReadinessLevel;
+  readonly uiDelivery: ReadinessLevel;
+  readonly strongRuntimeVerdict: ReadinessLevel;
+  readonly openReserves: readonly string[];
+};
+
+export const D2D3_OPEN_RESERVES = [
+  "R-QA-REV-01 — OPEN NOT LIFTED",
+  "R-QA-REV-02 — OPEN NOT LIFTED",
+  "R-QA-D2C-01 — OPEN NOT LIFTED",
+  "Cursor product capabilities — UNVERIFIED",
+  "memory process-local only",
+  "R-PR-D2D2-01 — MINOR",
+] as const;
+
+const UI_DELIVERY: ReadinessLevel = {
+  status: "not_demonstrated",
+  reasons: [
+    "no UI or accessibility delivery",
+    "no Figma evidence",
+    "no D3 transport selected",
+  ],
+};
+
+const STRONG_RUNTIME: ReadinessLevel = {
+  status: "blocked",
+  reasons: [
+    "G-D2D-CURSOR-01 not consumed",
+    "G-D2D-PERSIST-01 not consumed",
+    "Cursor unverified",
+    "memory is process-local",
+    "no live provider proof",
+  ],
+};
+
+function notDemonstrated(reasons: readonly string[]): ExecutionReadinessAssessment {
+  return {
+    uxExploration: { status: "not_demonstrated", reasons },
+    uiDelivery: UI_DELIVERY,
+    strongRuntimeVerdict: STRONG_RUNTIME,
+    openReserves: D2D3_OPEN_RESERVES,
+  };
+}
+
+function isOfficialCompleteEvidence(
+  evidence: unknown,
+  runId: string,
+  correlationId: string,
+  source: string,
+): boolean {
+  if (!Array.isArray(evidence) || evidence.length === 0) return false;
+  return evidence.some((item) => {
+    if (!item || typeof item !== "object") return false;
+    const e = item as Record<string, unknown>;
+    return (
+      e.official === true &&
+      e.completeness === "complete" &&
+      e.late === false &&
+      e.runId === runId &&
+      e.correlationId === correlationId &&
+      e.source === source &&
+      source === "fixture"
+    );
+  });
+}
+
+/**
+ * Readiness from linked, validated artifacts only.
+ * Boolean-only caller proofs are rejected as not_demonstrated.
+ */
+export function assessExecutionReadiness(
+  artifacts: unknown,
+): ExecutionReadinessAssessment {
+  const copied = readUntrustedPlainData(artifacts, { redact: true });
+  if (!copied.ok || !copied.value || typeof copied.value !== "object") {
+    return notDemonstrated([
+      "linked run, validated projection, and official evidence are required",
+    ]);
+  }
+  const root = copied.value as Record<string, unknown>;
+
+  // Explicitly reject the retired boolean-only proof API.
+  if (
+    "fixturePathDemonstrated" in root ||
+    "projectionDemonstrated" in root ||
+    "disclosuresDemonstrated" in root
+  ) {
+    return notDemonstrated([
+      "boolean readiness proofs are not accepted; linked artifacts are required",
+    ]);
+  }
+
+  const runRaw = root.run;
+  if (!runRaw || typeof runRaw !== "object" || Array.isArray(runRaw)) {
+    return notDemonstrated(["canonical ExecutionRun artifact is required"]);
+  }
+  const run = runRaw as Record<string, unknown>;
+  const runId = typeof run.runId === "string" ? run.runId : null;
+  const correlationId =
+    typeof run.correlationId === "string" ? run.correlationId : null;
+  const state = typeof run.state === "string" ? run.state : null;
+  const disclosure =
+    run.disclosure && typeof run.disclosure === "object"
+      ? (run.disclosure as Record<string, unknown>)
+      : null;
+  const source =
+    disclosure && typeof disclosure.source === "string"
+      ? disclosure.source
+      : null;
+
+  if (!runId || !correlationId || !state || !source) {
+    return notDemonstrated(["run identity, state, and source are required"]);
+  }
+
+  if (state !== "succeeded" || source !== "fixture") {
+    return notDemonstrated([
+      "UX exploration requires a succeeded fixture terminal",
+    ]);
+  }
+
+  if (
+    !isOfficialCompleteEvidence(run.evidence, runId, correlationId, source)
+  ) {
+    return notDemonstrated([
+      "official complete non-late fixture evidence linked to the run is required",
+    ]);
+  }
+
+  const persistence =
+    run.persistence && typeof run.persistence === "object"
+      ? (run.persistence as Record<string, unknown>)
+      : null;
+  if (
+    !persistence ||
+    persistence.kind !== "memory_process_local" ||
+    persistence.durable !== false ||
+    persistence.multiInstance !== false ||
+    persistence.restartSafe !== false
+  ) {
+    return notDemonstrated(["process-local persistence disclosure is required"]);
+  }
+
+  const projectionRaw = root.projection;
+  if (projectionRaw !== undefined) {
+    if (typeof projectionRaw !== "object" || projectionRaw === null) {
+      return notDemonstrated(["projection artifact must be a plain object"]);
+    }
+    const projection = projectionRaw as Record<string, unknown>;
+    if (
+      projection.runId !== runId ||
+      projection.correlationId !== correlationId ||
+      projection.source !== source
+    ) {
+      return notDemonstrated([
+        "projection must share runId, correlationId, and source with the run",
+      ]);
+    }
+  } else {
+    // Composition may assess from run alone before projection materialization;
+    // still require that a projection *could* be linked (same IDs present on run).
+    // UX demonstrated only when a projection artifact is also supplied.
+    return notDemonstrated([
+      "validated projection of the same run is required for UX demonstration",
+    ]);
+  }
+
+  const limits = disclosure?.limits;
+  if (!Array.isArray(limits) || limits.length === 0) {
+    return notDemonstrated(["source disclosure limits are required"]);
+  }
+
+  return {
+    uxExploration: {
+      status: "demonstrated",
+      reasons: [
+        "linked succeeded fixture run",
+        "validated projection of the same run",
+        "official complete evidence and disclosures demonstrated",
+      ],
+    },
+    uiDelivery: UI_DELIVERY,
+    strongRuntimeVerdict: STRONG_RUNTIME,
+    openReserves: D2D3_OPEN_RESERVES,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts
new file mode 100644
index 0000000..c72b38a
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts
@@ -0,0 +1,234 @@
+/**
+ * Pure application helper for untrusted execution payloads.
+ * No Node, infrastructure, or provider imports.
+ * Rejects accessors, non-plain prototypes, functions, symbols, and cycles.
+ */
+
+const DEFAULT_MAX_DEPTH = 8;
+const DEFAULT_MAX_KEYS = 64;
+const DEFAULT_MAX_ARRAY = 64;
+const DEFAULT_MAX_STRING = 4096;
+
+const FORBIDDEN_KEY =
+  /^(.*[_-]?)?(secret|password|token|api[_-]?key|authorization|cookie|prompt|rawResponse|raw_prompt|raw_response)([_-].*)?$/i;
+
+/**
+ * Canonical D2-D3 late-evidence / display redaction detectors.
+ * Single aggregation point: containsSensitiveLateContent → sanitizeLateEvidenceSummary.
+ * Fail-closed: any hit means the whole late summary becomes late_result_redacted.
+ */
+
+/** Assignments, headers, query params, and known secret prefixes. */
+const FORBIDDEN_ASSIGNMENT_OR_PREFIX =
+  /sk-|ghp_|github_pat_|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|private\s+key|xox[baprs]-|password\s*[:=]|secret\s*[:=]|(?:access_|refresh_|client_)?token\s*[:=]|api[_-]?key\s*[:=]|authorization\s*[:=]|authorization\s*:\s*bearer\b|\bbearer\s+[^\s]+|cookie\s*[:=]|session\s*[:=]|[?&](?:access_|refresh_|client_)?token=/i;
+
+/**
+ * JSON-like structured sensitive keys (exact key names inside quotes).
+ * Matches "token": / 'token': / with optional whitespace around ':'.
+ * Does NOT match longer keys such as tokenCount, authorizationStatus, apiVersion.
+ */
+const STRUCTURED_SENSITIVE_KEY =
+  /['"](?:password|secret|token|access[_-]token|refresh[_-]token|client[_-]secret|api[_-]?key|authorization|cookie|session)['"]\s*:/i;
+
+/** Local D2-D3 late-evidence sensitive content detector (canonical). */
+export function containsSensitiveLateContent(value: string): boolean {
+  if (typeof value !== "string" || value.length === 0) return false;
+  if (STRUCTURED_SENSITIVE_KEY.test(value)) return true;
+  if (FORBIDDEN_ASSIGNMENT_OR_PREFIX.test(value)) return true;
+  return false;
+}
+
+export type UntrustedReadOk = {
+  readonly ok: true;
+  readonly value: unknown;
+};
+
+export type UntrustedReadFail = {
+  readonly ok: false;
+  readonly reason: string;
+};
+
+export type UntrustedReadResult = UntrustedReadOk | UntrustedReadFail;
+
+export type UntrustedReadOptions = {
+  readonly maxDepth?: number;
+  readonly maxKeys?: number;
+  readonly maxArrayLength?: number;
+  readonly maxStringLength?: number;
+  readonly redact?: boolean;
+};
+
+function isPlainObject(value: object): boolean {
+  const proto = Object.getPrototypeOf(value);
+  return proto === Object.prototype || proto === null;
+}
+
+function ownDataKeys(obj: object): string[] | null {
+  const names = Object.getOwnPropertyNames(obj);
+  const symbols = Object.getOwnPropertySymbols(obj);
+  if (symbols.length > 0) return null;
+  for (const name of names) {
+    const desc = Object.getOwnPropertyDescriptor(obj, name);
+    if (!desc) return null;
+    if (desc.get !== undefined || desc.set !== undefined) return null;
+    if (typeof desc.value === "function" || typeof desc.value === "symbol") {
+      return null;
+    }
+  }
+  return names;
+}
+
+function redactString(value: string, maxLength: number): string {
+  const cleaned = value
+    .replace(STRUCTURED_SENSITIVE_KEY, '"[REDACTED_KEY]":')
+    .replace(FORBIDDEN_ASSIGNMENT_OR_PREFIX, "[REDACTED]");
+  return cleaned.slice(0, maxLength);
+}
+
+function readInner(
+  input: unknown,
+  depth: number,
+  ancestors: WeakSet<object>,
+  options: Required<UntrustedReadOptions>,
+): UntrustedReadResult {
+  if (depth > options.maxDepth) {
+    return { ok: false, reason: "depth_exceeded" };
+  }
+  if (input === null || typeof input === "boolean") {
+    return { ok: true, value: input };
+  }
+  if (input === undefined) {
+    return { ok: true, value: undefined };
+  }
+  if (typeof input === "number") {
+    if (!Number.isFinite(input)) {
+      return { ok: false, reason: "non_finite_number" };
+    }
+    return { ok: true, value: input };
+  }
+  if (typeof input === "string") {
+    if (input.length > options.maxStringLength) {
+      return { ok: false, reason: "string_too_long" };
+    }
+    if (options.redact && containsSensitiveLateContent(input)) {
+      return { ok: true, value: redactString(input, options.maxStringLength) };
+    }
+    if (options.redact) {
+      return { ok: true, value: input.slice(0, options.maxStringLength) };
+    }
+    return { ok: true, value: input };
+  }
+  if (typeof input === "function" || typeof input === "symbol") {
+    return { ok: false, reason: "forbidden_type" };
+  }
+  if (typeof input !== "object") {
+    return { ok: false, reason: "unsupported_type" };
+  }
+  if (ancestors.has(input)) {
+    return { ok: false, reason: "cycle" };
+  }
+  ancestors.add(input);
+
+  if (Array.isArray(input)) {
+    if (input.length > options.maxArrayLength) {
+      ancestors.delete(input);
+      return { ok: false, reason: "array_too_large" };
+    }
+    const out: unknown[] = [];
+    for (let i = 0; i < input.length; i += 1) {
+      const desc = Object.getOwnPropertyDescriptor(input, i);
+      if (!desc || desc.get !== undefined || desc.set !== undefined) {
+        ancestors.delete(input);
+        return { ok: false, reason: "array_accessor" };
+      }
+      const nested = readInner(desc.value, depth + 1, ancestors, options);
+      if (!nested.ok) {
+        ancestors.delete(input);
+        return nested;
+      }
+      out.push(nested.value);
+    }
+    ancestors.delete(input);
+    return { ok: true, value: out };
+  }
+
+  if (!isPlainObject(input)) {
+    ancestors.delete(input);
+    return { ok: false, reason: "non_plain_object" };
+  }
+  const keys = ownDataKeys(input);
+  if (keys === null) {
+    ancestors.delete(input);
+    return { ok: false, reason: "accessors_or_symbols" };
+  }
+  if (keys.length > options.maxKeys) {
+    ancestors.delete(input);
+    return { ok: false, reason: "too_many_keys" };
+  }
+  const out: Record<string, unknown> = {};
+  for (const key of keys) {
+    if (options.redact && FORBIDDEN_KEY.test(key)) {
+      ancestors.delete(input);
+      return { ok: false, reason: `forbidden_key:${key}` };
+    }
+    const desc = Object.getOwnPropertyDescriptor(input, key);
+    if (!desc || desc.get !== undefined || desc.set !== undefined) {
+      ancestors.delete(input);
+      return { ok: false, reason: "accessor" };
+    }
+    const nested = readInner(desc.value, depth + 1, ancestors, options);
+    if (!nested.ok) {
+      ancestors.delete(input);
+      return nested;
+    }
+    out[key] = nested.value;
+  }
+  ancestors.delete(input);
+  return { ok: true, value: out };
+}
+
+/**
+ * Inspect descriptors without invoking getters. Produce a detached plain copy
+ * or a structured rejection reason.
+ */
+export function readUntrustedPlainData(
+  input: unknown,
+  options?: UntrustedReadOptions,
+): UntrustedReadResult {
+  const resolved: Required<UntrustedReadOptions> = {
+    maxDepth: options?.maxDepth ?? DEFAULT_MAX_DEPTH,
+    maxKeys: options?.maxKeys ?? DEFAULT_MAX_KEYS,
+    maxArrayLength: options?.maxArrayLength ?? DEFAULT_MAX_ARRAY,
+    maxStringLength: options?.maxStringLength ?? DEFAULT_MAX_STRING,
+    redact: options?.redact ?? false,
+  };
+  return readInner(input, 0, new WeakSet<object>(), resolved);
+}
+
+export function redactBoundedText(
+  value: unknown,
+  maxLength = 240,
+): string | null {
+  if (typeof value !== "string") return null;
+  return redactString(value, maxLength);
+}
+
+export function sanitizeLateEvidenceSummary(input: unknown): string {
+  // Official late evidence: non-string / hostile shapes never become caller content.
+  if (typeof input !== "string") {
+    return "late_result_redacted";
+  }
+  // Detect on the original before any truncation.
+  if (containsSensitiveLateContent(input)) {
+    return "late_result_redacted";
+  }
+  const bounded = input.slice(0, 240).trim();
+  if (!bounded) {
+    return "late_result_redacted";
+  }
+  // Re-check after normalization/bounding (fail closed on ambiguity).
+  if (containsSensitiveLateContent(bounded)) {
+    return "late_result_redacted";
+  }
+  return bounded;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
index 83d3841..7655434 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
@@ -9,6 +9,7 @@ import type {
   NormalizedFailure,
   ProviderCapabilityDescriptor,
 } from "./types";
+import { normalizeCanonicalPath } from "./sandboxContract";

 export type PolicyInput = {
   readonly intent: ExecutionIntent;
@@ -51,22 +52,44 @@ export function evaluateReadOnlyPolicy(input: PolicyInput): PolicyDecision {
     };
   }

-  if (intent.targetPath && context.protectedPaths?.length) {
-    const hit = context.protectedPaths.some(
-      (p) => intent.targetPath === p || intent.targetPath!.startsWith(`${p}/`),
-    );
-    if (hit) {
+  if (intent.targetPath) {
+    const canonical = normalizeCanonicalPath(intent.targetPath);
+    if (!canonical.ok) {
       return {
         ok: false,
         failure: normalizedFailure({
           family: "protected_path",
           code: "PROTECTED_PATH",
-          userMessage: "Target path is protected",
+          userMessage: "Target path is protected or invalid",
           retryable: false,
           correlationId: cid,
         }),
       };
     }
+    if (context.protectedPaths?.length) {
+      const hit = context.protectedPaths.some((p) => {
+        const protectedCanonical = normalizeCanonicalPath(p);
+        const prefix = protectedCanonical.ok
+          ? protectedCanonical.normalized
+          : p.replace(/\\/g, "/").replace(/\/+$/, "");
+        return (
+          canonical.normalized === prefix ||
+          canonical.normalized.startsWith(`${prefix}/`)
+        );
+      });
+      if (hit) {
+        return {
+          ok: false,
+          failure: normalizedFailure({
+            family: "protected_path",
+            code: "PROTECTED_PATH",
+            userMessage: "Target path is protected",
+            retryable: false,
+            correlationId: cid,
+          }),
+        };
+      }
+    }
   }

   if (!context.permissions.gitRead && intent.requestedLane === "git") {
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
index 9b12ef9..b3ca7b7 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
@@ -5,6 +5,7 @@
 import { normalizedFailure } from "./errors";
 import type { NormalizedFailure, ProviderLane } from "./types";
 import { isIsoTimestamp } from "./evidence";
+import { normalizeCanonicalPath } from "./sandboxContract";

 const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];

@@ -132,8 +133,9 @@ export function validateUntrustedProviderRequest(
     }
     if (obj.path !== undefined) {
       if (typeof obj.path !== "string") return fail("path must be string");
-      if (obj.path.includes("..") || obj.path.startsWith("/") || obj.path.includes("\\")) {
-        return fail("path traversal or absolute path forbidden");
+      const canonical = normalizeCanonicalPath(obj.path);
+      if (!canonical.ok) {
+        return fail("path traversal, encoding, or absolute path forbidden");
       }
     }
   }
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
index 4b351eb..49fc905 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
@@ -1,7 +1,11 @@
 /**
  * D2D2-08 — sandbox / protected-path contract (pure, fixture-verifiable).
  * Deny-by-default. Does not claim the sandbox is secure.
+ *
+ * Path comparisons use a shared canonical normalization that percent-decodes
+ * once in a bounded way and rejects traversal / double-encoding / controls.
  */
+
 export type SandboxPathDecision =
   | { readonly allowed: true; readonly normalized: string }
   | {
@@ -16,7 +20,23 @@ export type SandboxPathDecision =
         | "git_write"
         | "branch_mismatch"
         | "head_mismatch"
-        | "observed_missing";
+        | "observed_missing"
+        | "invalid_encoding"
+        | "control_or_null"
+        | "double_encoding";
+    };
+
+export type CanonicalPathResult =
+  | { readonly ok: true; readonly normalized: string }
+  | {
+      readonly ok: false;
+      readonly reason:
+        | "empty"
+        | "absolute"
+        | "traversal"
+        | "invalid_encoding"
+        | "control_or_null"
+        | "double_encoding";
     };

 const DEFAULT_PROTECTED = [
@@ -29,6 +49,73 @@ const DEFAULT_PROTECTED = [
   "node_modules/",
 ] as const;

+const DANGEROUS_ENCODED = /%(?:00|2e|2f|5c)/i;
+
+function decodePercentOnce(raw: string): CanonicalPathResult {
+  let out = "";
+  for (let i = 0; i < raw.length; i += 1) {
+    const ch = raw[i];
+    if (ch !== "%") {
+      const code = ch.charCodeAt(0);
+      if (code === 0 || (code < 0x20 && code !== 0x09) || code === 0x7f) {
+        return { ok: false, reason: "control_or_null" };
+      }
+      out += ch;
+      continue;
+    }
+    if (i + 2 >= raw.length) {
+      return { ok: false, reason: "invalid_encoding" };
+    }
+    const hex = raw.slice(i + 1, i + 3);
+    if (!/^[0-9A-Fa-f]{2}$/.test(hex)) {
+      return { ok: false, reason: "invalid_encoding" };
+    }
+    const code = Number.parseInt(hex, 16);
+    if (code === 0 || (code < 0x20 && code !== 0x09) || code === 0x7f) {
+      return { ok: false, reason: "control_or_null" };
+    }
+    out += String.fromCharCode(code);
+    i += 2;
+  }
+  return { ok: true, normalized: out };
+}
+
+/**
+ * Canonical path normalization shared by sandbox, provider boundary, and policy.
+ * Never normalizes a traversal into an allowlisted path.
+ */
+export function normalizeCanonicalPath(path: unknown): CanonicalPathResult {
+  if (typeof path !== "string" || !path.trim()) {
+    return { ok: false, reason: "empty" };
+  }
+  const replaced = path.trim().replace(/\\/g, "/");
+  const first = decodePercentOnce(replaced);
+  if (!first.ok) return first;
+
+  // Residual encoded path metacharacters imply double-encoding or incomplete decode.
+  if (DANGEROUS_ENCODED.test(first.normalized) || /%25(?:2e|2f|5c|00)/i.test(replaced)) {
+    return { ok: false, reason: "double_encoding" };
+  }
+  if (/%[0-9A-Fa-f]{2}/.test(first.normalized)) {
+    // Any remaining percent-encoding after one decode is rejected (fail closed).
+    return { ok: false, reason: "double_encoding" };
+  }
+
+  const raw = first.normalized;
+  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
+    return { ok: false, reason: "absolute" };
+  }
+  const parts = raw.split("/");
+  if (parts.some((p) => p === ".." || p === "")) {
+    return { ok: false, reason: "traversal" };
+  }
+  const normalized = parts.filter((p) => p !== ".").join("/");
+  if (!normalized) {
+    return { ok: false, reason: "empty" };
+  }
+  return { ok: true, normalized };
+}
+
 /** Exact match or child under prefix with segment boundary (no sibling prefix bypass). */
 export function pathMatchesAllowlistPrefix(
   normalized: string,
@@ -45,18 +132,11 @@ export function evaluateSandboxPath(input: {
   allowlistRepos: readonly string[];
   protectedPaths?: readonly string[];
 }): SandboxPathDecision {
-  if (typeof input.path !== "string" || !input.path.trim()) {
-    return { allowed: false, reason: "empty" };
-  }
-  const raw = input.path.trim().replace(/\\/g, "/");
-  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
-    return { allowed: false, reason: "absolute" };
+  const canonical = normalizeCanonicalPath(input.path);
+  if (!canonical.ok) {
+    return { allowed: false, reason: canonical.reason };
   }
-  const parts = raw.split("/");
-  if (parts.some((p) => p === ".." || p === "")) {
-    return { allowed: false, reason: "traversal" };
-  }
-  const normalized = parts.filter((p) => p !== ".").join("/");
+  const normalized = canonical.normalized;
   const protectedPaths = [
     ...DEFAULT_PROTECTED,
     ...(input.protectedPaths ?? []),
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
index a6fab28..f16739a 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -94,9 +94,13 @@ export {
 export {
   evaluateSandboxMutationGuards,
   evaluateSandboxPath,
+  normalizeCanonicalPath,
   pathMatchesAllowlistPrefix,
 } from "./domain/sandboxContract";
-export type { SandboxPathDecision } from "./domain/sandboxContract";
+export type {
+  CanonicalPathResult,
+  SandboxPathDecision,
+} from "./domain/sandboxContract";
 export {
   invokeWithTimeoutAndCancellation,
   recordLateProviderResult,
@@ -106,3 +110,30 @@ export type {
   InvokeOutcome,
   RetryClass,
 } from "./application/providerInvocation";
+// Coordinator and injection deps are server-composition only (not client-safe).
+export {
+  createExecutionProjection,
+} from "./application/executionProjection";
+export type {
+  CreateExecutionProjectionResult,
+  ExecutionProjection,
+} from "./application/executionProjection";
+export {
+  assessExecutionReadiness,
+  D2D3_OPEN_RESERVES,
+} from "./application/executionReadiness";
+export type {
+  ExecutionReadinessAssessment,
+  ReadinessLevel,
+  ReadinessStatus,
+} from "./application/executionReadiness";
+export {
+  readUntrustedPlainData,
+  redactBoundedText,
+  sanitizeLateEvidenceSummary,
+} from "./application/untrustedExecutionData";
+export type {
+  UntrustedReadOptions,
+  UntrustedReadResult,
+} from "./application/untrustedExecutionData";
+export { MAX_COORDINATOR_TIMEOUT_MS } from "./application/coordinateExecutionRun";
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
new file mode 100644
index 0000000..5c49470
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
@@ -0,0 +1,125 @@
+import {
+  coordinateExecutionRun,
+  type CoordinateExecutionRunResult,
+} from "../application/coordinateExecutionRun";
+import {
+  createExecutionProjection,
+  type CreateExecutionProjectionResult,
+} from "../application/executionProjection";
+import {
+  assessExecutionReadiness,
+  type ExecutionReadinessAssessment,
+} from "../application/executionReadiness";
+import type { ClockPort } from "../ports/clockPort";
+import type { ExecutionRun } from "../domain/types";
+import { composeExecutionRunMemory } from "./composeExecutionRunMemory";
+import {
+  composeExecutionRunProvidersFake,
+  type ExecutionRunProviderComposition,
+} from "./composeExecutionRunProviders";
+import { assertServerOnly } from "./serverOnly";
+
+export type ExecutionRunD2D3Composition = {
+  readonly coordinate: (
+    input: unknown,
+  ) => Promise<CoordinateExecutionRunResult>;
+  /** Project a stored run by canonical runId — never accept an arbitrary caller run object. */
+  readonly projectById: (
+    runId: string,
+  ) => Promise<CreateExecutionProjectionResult>;
+  /** Assess readiness from the stored run + a freshly validated projection. */
+  readonly assessById: (
+    runId: string,
+  ) => Promise<ExecutionReadinessAssessment>;
+  readonly getById: (runId: string) => Promise<ExecutionRun | null>;
+  readonly disclosure: {
+    readonly sources: readonly ["fixture"];
+    readonly cursorLive: false;
+    readonly cursorVerified: false;
+    readonly providersLive: false;
+    readonly gitWrite: false;
+    readonly persistence: "memory_process_local";
+    readonly durable: false;
+    readonly multiInstance: false;
+    readonly restartSafe: false;
+    readonly gD2dCursor01: "NOT_CONSUMED";
+    readonly gD2dPersist01: "NOT_CONSUMED";
+  };
+};
+
+/**
+ * D2-D3 fixture-first composition. It assembles the existing single memory
+ * authority and D2-D2 ports; it does not introduce another store or runtime.
+ * Source authority is fixture-only and is not injectable.
+ */
+export function composeExecutionRunD2D3(options?: {
+  readonly providers?: ExecutionRunProviderComposition;
+  readonly clock?: ClockPort;
+  readonly clockIso?: string;
+}): ExecutionRunD2D3Composition {
+  assertServerOnly();
+  const clockIso = options?.clockIso ?? "2026-08-04T09:15:00.000Z";
+  const execution = composeExecutionRunMemory({ clockIso });
+  const providers = options?.providers ?? composeExecutionRunProvidersFake();
+  const clock: ClockPort = options?.clock ?? { nowIso: () => clockIso };
+
+  const projectById = async (
+    runId: string,
+  ): Promise<CreateExecutionProjectionResult> => {
+    const run = await execution.getById(runId);
+    if (!run) {
+      return {
+        ok: false,
+        failure: { code: "RUN_NOT_FOUND", message: "Execution run not found" },
+      };
+    }
+    const provisional = createExecutionProjection({ run });
+    if (!provisional.ok) return provisional;
+    const readiness = assessExecutionReadiness({
+      run,
+      projection: provisional.projection,
+    });
+    return createExecutionProjection({
+      run,
+      readinessAssessment: readiness,
+      openReserves: readiness.openReserves,
+    });
+  };
+
+  return {
+    coordinate: (input) =>
+      coordinateExecutionRun(input, {
+        execution,
+        providers,
+        events: providers.events,
+        clock,
+      }),
+    projectById,
+    assessById: async (runId) => {
+      const projected = await projectById(runId);
+      if (!projected.ok) {
+        return assessExecutionReadiness({});
+      }
+      const run = await execution.getById(runId);
+      if (!run) return assessExecutionReadiness({});
+      return assessExecutionReadiness({
+        run,
+        projection: projected.projection,
+      });
+    },
+    getById: execution.getById,
+    disclosure: {
+      sources: ["fixture"],
+      cursorLive: false,
+      cursorVerified: false,
+      providersLive: false,
+      gitWrite: false,
+      persistence: "memory_process_local",
+      durable: false,
+      multiInstance: false,
+      restartSafe: false,
+      gD2dCursor01: "NOT_CONSUMED",
+      gD2dPersist01: "NOT_CONSUMED",
+    },
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
index 1d967e6..485f3a2 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
@@ -12,3 +12,17 @@ export {
   composeExecutionRunProvidersFake,
   type ExecutionRunProviderComposition,
 } from "./composeExecutionRunProviders";
+export {
+  composeExecutionRunD2D3,
+  type ExecutionRunD2D3Composition,
+} from "./composeExecutionRunD2D3";
+export {
+  coordinateExecutionRun,
+  MAX_COORDINATOR_TIMEOUT_MS,
+  type CoordinateExecutionRunDependencies,
+  type CoordinateExecutionRunInput,
+  type CoordinateExecutionRunResult,
+  type CoordinateProviderRequest,
+  type ExecutionAuthority,
+  type EventDeliveryStatus,
+} from "../application/coordinateExecutionRun";

```

## 46. Scope 18 fichiers

```
A	projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.coordination.fixture.test.ts
A	projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.evidence.truthfulness.test.ts
A	projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.negative.resilience.test.ts
A	projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.projection.test.ts
A	projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.qa-findings.regression.test.ts
A	projects/sfia-studio/app/__tests__/oa/execution-run/d2d3.readiness.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
M	projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
A	projects/sfia-studio/app/lib/oa/execution-run/application/coordinateExecutionRun.ts
A	projects/sfia-studio/app/lib/oa/execution-run/application/executionProjection.ts
A	projects/sfia-studio/app/lib/oa/execution-run/application/executionReadiness.ts
A	projects/sfia-studio/app/lib/oa/execution-run/application/untrustedExecutionData.ts
M	projects/sfia-studio/app/lib/oa/execution-run/domain/policy.ts
M	projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
M	projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
M	projects/sfia-studio/app/lib/oa/execution-run/index.ts
A	projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts
M	projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
```
e36f12b Merge pull request #310 from mcleland147/delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination

 .../d2d3.coordination.fixture.test.ts              |  145 +++
 .../d2d3.evidence.truthfulness.test.ts             |  241 +++++
 .../execution-run/d2d3.negative.resilience.test.ts |  295 ++++++
 .../oa/execution-run/d2d3.projection.test.ts       |  102 ++
 .../d2d3.qa-findings.regression.test.ts            | 1088 ++++++++++++++++++++
 .../oa/execution-run/d2d3.readiness.test.ts        |  123 +++
 .../oa/execution-run/importBoundaries.test.ts      |   66 +-
 .../sandbox.protectedPath.fixture.test.ts          |   51 +
 .../application/coordinateExecutionRun.ts          | 1086 +++++++++++++++++++
 .../application/executionProjection.ts             |  444 ++++++++
 .../application/executionReadiness.ts              |  198 ++++
 .../application/untrustedExecutionData.ts          |  234 +++++
 .../app/lib/oa/execution-run/domain/policy.ts      |   35 +-
 .../oa/execution-run/domain/providerBoundary.ts    |    6 +-
 .../lib/oa/execution-run/domain/sandboxContract.ts |  104 +-
 .../sfia-studio/app/lib/oa/execution-run/index.ts  |   33 +-
 .../server/composeExecutionRunD2D3.ts              |  125 +++
 .../app/lib/oa/execution-run/server/index.ts       |   14 +
 18 files changed, 4368 insertions(+), 22 deletions(-)

## 47. CI post-merge immédiate

Observation bornée (12×5s) : run #96 IN_PROGRESS pendant toute la fenêtre.

Capture finale avant handoff (hors attente prolongée) :
- workflow SFIA Studio CI
- run number 96
- run ID 30923346607
- event push
- headSha e36f12b68545a9ead0d8d0ccbfc55d43973b3521
- status completed
- conclusion success
- url https://github.com/mcleland147/sfia-workspace/actions/runs/30923346607

Jobs :
- Detect SFIA Studio changes: success
- Build and validate SFIA Studio: success
- SFIA Studio Required Gate: success

CASE C documenté : post-merge CI SUCCESS observée avant publication du handoff.
Cela ne remplace pas le cycle Post-Merge ni QA-G4.
CI PR #95 SUCCESS reste la preuve pré-merge héritée.


## 48. Réserves

- R-QA-REV-01 — OPEN NOT LIFTED
- R-QA-REV-02 — OPEN NOT LIFTED
- R-QA-D2C-01 — OPEN NOT LIFTED
- Cursor product capabilities — UNVERIFIED
- memory process-local only
- R-PR-D2D2-01 — MINOR
- R-CORR-D2D3-01 — timeout 60 000 ms local D2-D3
- R-QA-REV3-D2D3-TIME-01 — OPEN MINOR
- R-CORR-D2D3-02 — SATISFIED — CLOSURE RECOMMENDED
- R-PR-D2D3-01 — SATISFIED — CLOSURE RECOMMENDED
Aucune réserve LIFTED.

## 49. Findings

VERIFIED IN QA — CLOSURE RECOMMENDED (non formellement CLOSED dans Merge).

## 50. D2D3-04 / 05

BLOCKED / BLOCKED.

## 51. Claims démontrés

PR #310 MERGED ; main advanced by merge commit H1 ; parents exacts ; package hash inchangé ; Delivery branch preserved ; body GO Merge tracé.

## 52. Claims non démontrés

D2-D3 CLOSED ; findings CLOSED ; réserves LIFTED ; QA-G4 PASS ; Cursor verified ; durable persist ; D2D3-04/05 ; UI Delivery ; strong runtime ; RUN READY ; production-ready ; branch deletion authorized.

## 53. Absence de correction

Aucun fichier projet modifié.

## 54. Absence de commit / push projet local

Aucun.

## 55. Absence de squash / rebase / auto

Uniquement `--merge` ; pas de `--squash`/`--rebase`/`--auto`/`--admin`/`--delete-branch`.

## 56. Absence de suppression de branche

Delivery locale et distante préservées.

## 57. Absence de post-merge exécuté

Aucun QA-G4 / clôture / capitalisation.

## 58. Git Truth Check final

```
=== git truth final ===
2026-08-04 17:18:42 CEST +0200
branch=delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination
HEAD=9d1b3d2520f049dba0bf811380167003ca26ad82
upstream=9d1b3d2520f049dba0bf811380167003ca26ad82
main=e36f12b68545a9ead0d8d0ccbfc55d43973b3521
delivery_remote=9d1b3d2520f049dba0bf811380167003ca26ad82	refs/heads/delivery/sfia-studio-v3-1-d2-d3-e2e-read-only-coordination
staged=0
?? .tmp-sfia-review/
?? projects/sfia-studio/app/.tmp-sfia-review/
```

## 59. Review Handoff

Publisher scripts/sfia/publish-review-handoff.sh
Message : docs(review-handoff): publish D2-D3 merge status
Parent distant attendu : `44fba357142c14a53739a07325ac8fdb9c19e57d`

## 60. Verdict unique

D2-D3 MERGE H1 COMPLETE WITH RESERVES —
PR #310 MERGED —
MAIN ADVANCED BY MERGE COMMIT —
DELIVERY BRANCH PRESERVED —
READY FOR MORRIS POST-MERGE DECISION

## 61. Décision suivante candidate

GO POST-MERGE SFIA STUDIO V3.1-D2-D3
Statut : candidate uniquement — non consommé
Ne pas lancer le post-merge ; ne pas supprimer la branche ; ne pas fermer formellement les findings ; ne pas démarrer D2-D4.

---

Validations locales héritées (non réexécutées) : regression 95 ; targeted 105 ; execution-run 28/270 ; Vitest 130/1316 ; governance 73 ; typecheck/lint/build PASS.

Instruction finale : ChatGPT doit consulter sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md au commit/blob publiés par ce cycle avant validation du merge, prompt Post-Merge, fermeture findings ou suppression de branche.
