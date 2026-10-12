# SFIA STUDIO — P6-MIN-09 DOCUMENTARY COGNITIVE RELIABILITY CORRECTION 01 — CP03

**Review Pack level:** FULL
**Pass:** TARGETED CORRECTION PASS 03 — R4/R5
**Cycle:** 8 — Delivery / implémentation (parent QA: 9)
**Profil:** CRITICAL
**Typologie:** EVOL — corrective delivery
**Timestamp:** 2026-10-13 00:04:06 CEST
**GO Morris:** GO CORRECTION LOCALE R4/R5 consommé
**GO intégration projet:** NON AUTORISÉ
**Mode:** DETERMINISTIC ONLY — ZERO REAL OpenAI

---

## A. Horodatage Europe/Paris

2026-10-13 00:04:06 CEST

## B. Identification cycle / profil / GO

| Champ | Valeur |
|---|---|
| Projet | SFIA Studio |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Campagne | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 |
| Milestone | P6 — GLOBAL INTEGRATED PRODUCT QA |
| Scénario | P6-MIN-09 — Guided Document Review |
| Lot | P6-MIN-09 DOCUMENTARY COGNITIVE RELIABILITY CORRECTION 01 |
| Pass | TARGETED CORRECTION PASS 03 |
| Cycle | 8 Delivery / parent 9 QA |
| GO | Correction locale R4/R5 |
| Intégration Git projet | INTERDITE ce cycle |

## C. Local Git Truth Check

```
pwd: /Users/morris/Projects/sfia-workspace-p6-min09-documentary-cognitive-reliability-01
remote: origin https://github.com/mcleland147/sfia-workspace.git
branch: fix/p6-min09-documentary-cognitive-reliability-01
HEAD: d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
origin/main: d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
HEAD == origin/main: TRUE
staged: none expected / verified empty via status
working tree: MODIFIED (CP01+CP02+CP03 uncommitted — EXPECTED)
```

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
 M projects/sfia-studio/app/lib/platform/observability/types.ts
 M projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
 M projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
 M projects/sfia-studio/app/lib/platform/tools/types.ts
?? projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts
?? projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts

```

### git diff --name-status

```
M	.tmp-sfia-review/chatgpt-review.md
M	projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
M	projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
M	projects/sfia-studio/app/lib/platform/observability/types.ts
M	projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
M	projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
M	projects/sfia-studio/app/lib/platform/tools/types.ts

```

### untracked

```
projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts
projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts

```

### git diff --stat

```
 .tmp-sfia-review/chatgpt-review.md                 | 166 ------------
 .../p6.nora.p1.adaptiveBudget.d0.test.ts           |  16 ++
 .../nora-cognitive-runtime/adaptiveTurnBudget.ts   |  35 +++
 .../app/lib/nora-cognitive-runtime/index.ts        |  11 +
 .../app/lib/nora-cognitive-runtime/readCoverage.ts | 289 +++++++++++++++++++--
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |  69 ++++-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |  10 +
 .../app/lib/platform/observability/types.ts        |   4 +-
 .../lib/platform/repository/gitLocalReadAdapter.ts | 216 +++++++++++++--
 .../app/lib/platform/tools/toolRouter.ts           | 268 ++++++++++++++++++-
 .../sfia-studio/app/lib/platform/tools/types.ts    |   2 +-
 11 files changed, 861 insertions(+), 225 deletions(-)

```

### git worktree list

```
/Users/morris/Projects/sfia-workspace                                                                                                                                                                                                                                              980064c0 [qa/sfia-studio-p6-global-integrated-product-qa]
/Users/morris/Projects/sfia-codex-pilot                                                                                                                                                                                                                                            ec7f397a [method/codex-operating-model-pilot]
/Users/morris/Projects/sfia-doc-od04-i01-truth                                                                                                                                                                                                                                     299cb617 [docs/sfia-studio-nora-od04-i01-boundary-truth-sync]
/Users/morris/Projects/sfia-gcec-b-commit-target-binding-c481610c                                                                                                                                                                                                                  11a43d3d [delivery/sfia-studio-gcec-b-commit-target-binding-alignment]
/Users/morris/Projects/sfia-gcec-c-remote-push-auth-env-11a43d3d                                                                                                                                                                                                                   ff267fdf [delivery/sfia-studio-gcec-c-remote-push-auth-env]
/Users/morris/Projects/sfia-gcec-d-ephemeral-secret-bridge-ff267fdf                                                                                                                                                                                                                f4210388 [delivery/sfia-studio-gcec-d-ephemeral-secret-bridge]
/Users/morris/Projects/sfia-gcec-d-post-merge-docs-76e2d786                                                                                                                                                                                                                        e90249b2 [docs/sfia-studio-gcec-d-post-merge-truth-sync]
/Users/morris/Projects/sfia-gcec-d-remote-github-env-parity-ff267fdf                                                                                                                                                                                                               ff267fdf [delivery/sfia-studio-gcec-d-remote-github-env-parity]
/Users/morris/Projects/sfia-gcec-real-ad-product-11a43d3d-20260913120301-96119                                                                                                                                                                                                     11a43d3d (detached HEAD)
/Users/morris/Projects/sfia-gcec-real-ad-product-c481610c-20260913101736-44229                                                                                                                                                                                                     c481610c (detached HEAD)
/Users/morris/Projects/sfia-gcec-real-ad-product-ff267fdf-20260913131834-26962                                                                                                                                                                                                     ff267fdf (detached HEAD)
/Users/morris/Projects/sfia-studio-chat-first-product-simplification-c1                                                                                                                                                                                                            7044e1a6 [docs/sfia-studio-chat-first-product-simplification-c1]
/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p2                                                                                                                                                                                                            e99d9ad5 (detached HEAD)
/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3                                                                                                                                                                                                            7d0c6562 [docs/sfia-studio-p5-s07-post-merge-truth-sync]
/Users/morris/Projects/sfia-studio-chat-first-work-recommendation-continuity-01                                                                                                                                                                                                    193b79d6 (detached HEAD)
/Users/morris/Projects/sfia-studio-chat-first-work-recommendation-continuity-delivery-01                                                                                                                                                                                           4edb9feb (detached HEAD)
/Users/morris/Projects/sfia-studio-contract-result-extensibility-framing-01                                                                                                                                                                                                        1eabf9d7 (detached HEAD)
/Users/morris/Projects/sfia-studio-corr-proof-06-artifact-obligation                                                                                                                                                                                                               adbdf1ac [fix/sfia-studio-corr-proof-06-artifact-obligation]
/Users/morris/Projects/sfia-studio-corr-proof-07-artifact-materialization                                                                                                                                                                                                          e942af5f [fix/sfia-studio-corr-proof-07-artifact-materialization]
/Users/morris/Projects/sfia-studio-corr-proof-09-materialization-intent-contract                                                                                                                                                                                                   85b1443e [fix/sfia-studio-corr-proof-09-materialization-intent-contract]
/Users/morris/Projects/sfia-studio-corr-proof-10-decision-context-continuity                                                                                                                                                                                                       18b76752 (detached HEAD)
/Users/morris/Projects/sfia-studio-corr-proof-11-reinstruction-pilot-language                                                                                                                                                                                                      9675bc4c (detached HEAD)
/Users/morris/Projects/sfia-studio-docs-write-real-path-completion                                                                                                                                                                                                                 742339e5 (detached HEAD)
/Users/morris/Projects/sfia-studio-ec-inspection-disclosure                                                                                                                                                                                                                        f51ad142 (detached HEAD)
/Users/morris/Projects/sfia-studio-ec-inspection-disclosure-v2                                                                                                                                                                                                                     0f1b0a65 (detached HEAD)
/Users/morris/Projects/sfia-studio-ec-rehydration-continuity                                                                                                                                                                                                                       b871ad7c (detached HEAD)
/Users/morris/Projects/sfia-studio-fake-provider-user-valid-materialization                                                                                                                                                                                                        aaef6854 [fix/sfia-studio-fake-provider-user-valid-materialization]
/Users/morris/Projects/sfia-studio-live-managed-repo-composition                                                                                                                                                                                                                   95c51d59 [delivery/sfia-studio-live-managed-repo-composition]
/Users/morris/Projects/sfia-studio-nora-acw-option-ref-contract-01                                                                                                                                                                                                                 94b69178 (detached HEAD)
/Users/morris/Projects/sfia-studio-product-docs-write-real-pass-capitalisation                                                                                                                                                                                                     9981483f (detached HEAD)
/Users/morris/Projects/sfia-studio-product-docs-write-real-pass-post-merge-truth-sync                                                                                                                                                                                              65c9fcf3 (detached HEAD)
/Users/morris/Projects/sfia-studio-product-journey-claim-evidence-completion-01                                                                                                                                                                                                    9c6ac909 [qa/sfia-studio-product-journey-claim-evidence-completion-01]
/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01                                                                                                                                                                                                      dda2fa34 (detached HEAD)
/Users/morris/Projects/sfia-studio-product-journey-post-execution-replan-01                                                                                                                                                                                                        3d48ed70 (detached HEAD)
/Users/morris/Projects/sfia-studio-product-legacy-m3-to-m4-successor                                                                                                                                                                                                               64aec8ea (detached HEAD)
/Users/morris/Projects/sfia-studio-product-projection-coherence                                                                                                                                                                                                                    bc9b5fea [fix/sfia-studio-product-projection-coherence]
/Users/morris/Projects/sfia-studio-product-proof-journey-integrity                                                                                                                                                                                                                 f51ad142 (detached HEAD)
/Users/morris/Projects/sfia-studio-product-proof-preflight-35b1371d                                                                                                                                                                                                                a8a5dffa (detached HEAD)
/Users/morris/Projects/sfia-studio-product-real-docs-write-wiring                                                                                                                                                                                                                  8bda5012 (detached HEAD)
/Users/morris/Projects/sfia-studio-product-reproof-08-3a3a90f5                                                                                                                                                                                                                     3a3a90f5 (detached HEAD)
/Users/morris/Projects/sfia-studio-product-reproof-09-74ad6d3e                                                                                                                                                                                                                     74ad6d3e (detached HEAD)
/Users/morris/Projects/sfia-studio-product-reproof09-real-0052037c                                                                                                                                                                                                                 0052037c (detached HEAD)
/Users/morris/Projects/sfia-studio-product-reproof09-real-04bcfecb                                                                                                                                                                                                                 04bcfecb (detached HEAD)
/Users/morris/Projects/sfia-studio-product-reproof09-real-b739ddd                                                                                                                                                                                                                  742339e5 (detached HEAD)
/Users/morris/Projects/sfia-studio-product-reproof09-real-post498-b739ddd                                                                                                                                                                                                          b739ddd3 (detached HEAD)
/Users/morris/Projects/sfia-studio-remove-origin-gate-reproof09-real                                                                                                                                                                                                               2d4b09be (detached HEAD)
/Users/morris/Projects/sfia-studio-stage-a-real-02                                                                                                                                                                                                                                 3a3a90f5 (detached HEAD)
/Users/morris/Projects/sfia-studio-transmission-guide-integration                                                                                                                                                                                                                  f463bf9b [docs/sfia-studio-transmission-guide-integration]
/Users/morris/Projects/sfia-task-tracker                                                                                                                                                                                                                                           b763a318 [cadrage/task-tracker-light]
/Users/morris/Projects/sfia-workspace-a5-2-framing                                                                                                                                                                                                                                 bd3608c6 [framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity]
/Users/morris/Projects/sfia-workspace-active-cycle-artifact-mat-01                                                                                                                                                                                                                 3f790345 (detached HEAD)
/Users/morris/Projects/sfia-workspace-active-cycle-artifact-mat-corr-01                                                                                                                                                                                                            74e8ee46 (detached HEAD)
/Users/morris/Projects/sfia-workspace-artifact-applicability-bridge-01                                                                                                                                                                                                             ccf4e7f5 (detached HEAD)
/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation                                                                                                                                                                                                ebdae92a [delivery/sfia-studio-auth-better-auth-github-multi-user-foundation]
/Users/morris/Projects/sfia-workspace-chat-first-governed-decision-loop-01                                                                                                                                                                                                         7d5f794b [feat/sfia-studio-chat-first-governed-decision-loop-01]
/Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts                                                                                                                                                                                                                    cae84151 [method/sfia-cycle-knowledge-contracts]
/Users/morris/Projects/sfia-workspace-d1-conversational-convergence                                                                                                                                                                                                                7dc6f9fc [ux/sfia-studio-d1-conversational-convergence]
/Users/morris/Projects/sfia-workspace-d1-platform-integration                                                                                                                                                                                                                      c2d39a7f [delivery/sfia-studio-d1-shared-platform-integration]
/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1                                                                                                                                                                                                                             dd2a68c6 [docs/sfia-studio-doc32-post-p3-m1-correction]
/Users/morris/Projects/sfia-workspace-docs-recover                                                                                                                                                                                                                                 1a2fa31f [docs/sfia-studio-recover-unmerged-project-docs]
/Users/morris/Projects/sfia-workspace-e2e-stabilization-01                                                                                                                                                                                                                         82148c0b [fix/sfia-studio-product-cycle-e2e-stabilization-01]
/Users/morris/Projects/sfia-workspace-fa6-mitigated-clean                                                                                                                                                                                                                          67f140a1 [docs/sfia-studio-fa6-mitigated-from-main]
/Users/morris/Projects/sfia-workspace-framing-next-increment                                                                                                                                                                                                                       88fa4658 [framing/sfia-studio-next-product-increment]
/Users/morris/Projects/sfia-workspace-global-model-reasoning-campaign-contract                                                                                                                                                                                                     cf182c38 (detached HEAD)
/Users/morris/Projects/sfia-workspace-global-model-reasoning-pre-campaign-harness                                                                                                                                                                                                  fa3f9a93 [delivery/sfia-studio-global-model-reasoning-pre-campaign-harness-hardening]
/Users/morris/Projects/sfia-workspace-global-mr-campaign-contract-prep                                                                                                                                                                                                             3fb1624c [docs/sfia-studio-global-model-reasoning-campaign-contract]
/Users/morris/Projects/sfia-workspace-global-mr-corr-04-mw6-memory-b                                                                                                                                                                                                               685b1645 [fix/sfia-studio-global-mr-corr-04-mw6-memory-b-session]
/Users/morris/Projects/sfia-workspace-global-mr-stage-a-astra-challenger                                                                                                                                                                                                           a5ab44bc (detached HEAD)
/Users/morris/Projects/sfia-workspace-global-mr-stage-a-post-merge-readiness                                                                                                                                                                                                       1b4f78ff (detached HEAD)
/Users/morris/Projects/sfia-workspace-global-mr-stage-a-real                                                                                                                                                                                                                       1b4f78ff (detached HEAD)
/Users/morris/Projects/sfia-workspace-global-mr-stage-a-real-cont-01                                                                                                                                                                                                               9ce5933c [run/sfia-studio-global-mr-stage-a-real-cont-01]
/Users/morris/Projects/sfia-workspace-global-mr-stage-a-real-corr-01                                                                                                                                                                                                               e8583429 [fix/sfia-studio-global-mr-stage-a-real-corr-01]
/Users/morris/Projects/sfia-workspace-global-mr-stage-a-real-wsources-02                                                                                                                                                                                                           586480af [run/sfia-studio-global-mr-stage-a-real-wsources-02]
/Users/morris/Projects/sfia-workspace-global-mr-stage-a-real-wsources-neutral-03                                                                                                                                                                                                   586480af (detached HEAD)
/Users/morris/Projects/sfia-workspace-legacy-decommission-01                                                                                                                                                                                                                       1162b36b (detached HEAD)
/Users/morris/Projects/sfia-workspace-living-runtime-ref-01                                                                                                                                                                                                                        b4aa09bd (detached HEAD)
/Users/morris/Projects/sfia-workspace-m1-bypass-probe                                                                                                                                                                                                                              f0f0e0f5 [qa/sfia-studio-m1-bypass-probe]
/Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert                                                                                                                                                                                                                       b502c006 [qa/sfia-studio-m1-bypass-probe-revert]
/Users/morris/Projects/sfia-workspace-m1-capitalization                                                                                                                                                                                                                            fa0eebe0 [docs/sfia-studio-m1-capitalization-rex]
/Users/morris/Projects/sfia-workspace-mw2-cwp-reachability-corr01                                                                                                                                                                                                                  4608b323 [corr/sfia-studio-nora-mw2-cwp-reachability]
/Users/morris/Projects/sfia-workspace-mw2-real-exit-73fe3410                                                                                                                                                                                                                       dd21ab45 (detached HEAD)
/Users/morris/Projects/sfia-workspace-mw2-real-exit-main-73fe3410                                                                                                                                                                                                                  73fe3410 (detached HEAD)
/Users/morris/Projects/sfia-workspace-mw3-correction                                                                                                                                                                                                                               60ed29f0 [cursor/mw3-cognitive-correction-post-recovery]
/Users/morris/Projects/sfia-workspace-mw3-correction-2                                                                                                                                                                                                                             da56ed29 [cursor/mw3-epistemic-boundary-correction]
/Users/morris/Projects/sfia-workspace-mw3-real                                                                                                                                                                                                                                     339d583a [validation/mw3-real-boundary-339d583a]
/Users/morris/Projects/sfia-workspace-mw3-recovery                                                                                                                                                                                                                                 db3a9b71 [recovery/mw3-delivery-rematerialization-ab61c18a]
/Users/morris/Projects/sfia-workspace-mw6-auth-binding                                                                                                                                                                                                                             cf182c38 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nel-greenfield-continuity-01                                                                                                                                                                                                                 74e8ee46 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-c4-post-merge-roadmap-truth-sync                                                                                                                                                                                                        b6a1d5fa [docs/sfia-studio-nora-c4-post-merge-roadmap-truth-sync]
/Users/morris/Projects/sfia-workspace-nora-c4-type14-post-merge-truth-sync                                                                                                                                                                                                         0888d6ff (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-c5-source-locked-backlog                                                                                                                                                                                                                dba0d0a7 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-c5-type14-post-merge-truth-sync                                                                                                                                                                                                         77bf2a5f (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-cognitive-c1                                                                                                                                                                                                                            cdfd5aec [docs/sfia-studio-nora-cognitive-completion-c1-cadrage]
/Users/morris/Projects/sfia-workspace-nora-cognitive-c1-post-merge-sync                                                                                                                                                                                                            79effb32 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-cognitive-c2                                                                                                                                                                                                                            d406db41 [docs/sfia-studio-nora-cognitive-completion-c2-functional-design]
/Users/morris/Projects/sfia-workspace-nora-cognitive-c2-post-merge-sync                                                                                                                                                                                                            1da8e306 [docs/sfia-studio-nora-cognitive-c2-post-merge-truth-sync]
/Users/morris/Projects/sfia-workspace-nora-cognitive-c3                                                                                                                                                                                                                            d36619b1 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-cognitive-c3-post-merge-truth-sync                                                                                                                                                                                                      ac1b86fc [docs/sfia-studio-nora-cognitive-c3-post-merge-truth-sync]
/Users/morris/Projects/sfia-workspace-nora-cognitive-runtime-gap-readiness                                                                                                                                                                                                         93c69d10 [docs/sfia-studio-nora-cognitive-runtime-gap-readiness]
/Users/morris/Projects/sfia-workspace-nora-mw0-delivery                                                                                                                                                                                                                            67a00238 [feat/sfia-studio-nora-mw0-eval-harness]
/Users/morris/Projects/sfia-workspace-nora-mw0-mw3-chain-real                                                                                                                                                                                                                      339d583a [validation/nora-mw0-mw3-integrated-real]
/Users/morris/Projects/sfia-workspace-nora-mw0-mw3-chain-real-2                                                                                                                                                                                                                    339d583a [validation/nora-mw0-mw3-integrated-real-mw3-scope]
/Users/morris/Projects/sfia-workspace-nora-mw0-option-c-parity                                                                                                                                                                                                                     7a5f1af7 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw0-option-c-regression-truth-sync                                                                                                                                                                                                      d9ab4832 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw0-postmerge-roadmap-sync                                                                                                                                                                                                              ab18f5c5 [docs/sfia-studio-nora-mw0-postmerge-roadmap-sync]
/Users/morris/Projects/sfia-workspace-nora-mw0-readiness                                                                                                                                                                                                                           51465ab4 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw1-closure-truth-sync                                                                                                                                                                                                                  3785e271 [docs/sfia-studio-nora-mw1-closure-truth-sync]
/Users/morris/Projects/sfia-workspace-nora-mw1-memory-b-compaction                                                                                                                                                                                                                 f0bf7f0c [delivery/sfia-studio-nora-mw1-memory-b-compaction]
/Users/morris/Projects/sfia-workspace-nora-mw1-option-c-main-readiness                                                                                                                                                                                                             c4207003 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw1-option-c-migration                                                                                                                                                                                                                  949d5800 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw1-option-c-post-merge-truth-sync                                                                                                                                                                                                      166b4698 [docs/sfia-studio-nora-mw1-option-c-post-merge-truth-sync]
/Users/morris/Projects/sfia-workspace-nora-mw1-option-c-recovered                                                                                                                                                                                                                  0fdf06a5 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw1-pr451-post-merge-truth-sync                                                                                                                                                                                                         d0f6526c [docs/sfia-studio-nora-mw1-pr451-post-merge-truth-sync]
/Users/morris/Projects/sfia-workspace-nora-mw1-readiness-od03-truth-sync                                                                                                                                                                                                           949d5800 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw1-real-boundary                                                                                                                                                                                                                       d09e2148 [qa/sfia-studio-nora-mw1-real-boundary]
/Users/morris/Projects/sfia-workspace-nora-mw1-s01-honest-memory-b                                                                                                                                                                                                                 dd21ab45 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw2-closure-truth-sync                                                                                                                                                                                                                  7b12b377 [docs/sfia-studio-nora-mw2-closure-truth-sync]
/Users/morris/Projects/sfia-workspace-nora-mw2-readiness-requalification                                                                                                                                                                                                           ce719d7d [docs/sfia-studio-nora-mw2-readiness-requalification]
/Users/morris/Projects/sfia-workspace-nora-mw3-closure                                                                                                                                                                                                                             deb34943 [validation/nora-mw3-final-deb34943]
/Users/morris/Projects/sfia-workspace-nora-mw3-integration                                                                                                                                                                                                                         f5b9d083 [delivery/sfia-studio-nora-mw3-contradiction-stop]
/Users/morris/Projects/sfia-workspace-nora-mw3-postmerge                                                                                                                                                                                                                           0220253a [validation/nora-mw3-postmerge-0220253a]
/Users/morris/Projects/sfia-workspace-nora-mw4-grounding                                                                                                                                                                                                                           fa58b210 [delivery/sfia-studio-nora-mw4-grounding-durability]
/Users/morris/Projects/sfia-workspace-nora-mw4-post-merge-closure                                                                                                                                                                                                                  f907d27c [docs/sfia-studio-nora-mw4-post-merge-closure]
/Users/morris/Projects/sfia-workspace-nora-mw5-critical-challenge-clarification                                                                                                                                                                                                    642c502d (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw5-post-merge-closure                                                                                                                                                                                                                  7b2359fa (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-mw6-external-source-intelligence                                                                                                                                                                                                        ebdae92a [delivery/sfia-studio-nora-mw6-external-source-intelligence]
/Users/morris/Projects/sfia-workspace-nora-od04-i01-boundary-truth-sync                                                                                                                                                                                                            4f00a2ad (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-od04-i01-boundary-truth-sync-clean                                                                                                                                                                                                      949d5800 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-od04-i01-boundary-truth-sync-docs                                                                                                                                                                                                       949d5800 (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-od04-openai-runtime-decision                                                                                                                                                                                                            a741a1ef (detached HEAD)
/Users/morris/Projects/sfia-workspace-nora-openai-cognitive-runtime-ab                                                                                                                                                                                                             f0bf7f0c [spike/sfia-studio-nora-openai-cognitive-runtime-ab]
/Users/morris/Projects/sfia-workspace-nora-openai-native-first-post-merge-truth-sync                                                                                                                                                                                               5dfc63ff [docs/sfia-studio-nora-openai-native-first-post-merge-truth-sync]
/Users/morris/Projects/sfia-workspace-nora-openai-native-first-truth-sync                                                                                                                                                                                                          94edffe8 [docs/sfia-studio-nora-openai-native-first-truth-sync]
/Users/morris/Projects/sfia-workspace-option-a-after-t-a6                                                                                                                                                                                                                          aef7fd6d [framing/sfia-studio-v3-native-option-a-after-t-a6]
/Users/morris/Projects/sfia-workspace-option-a-ci-governance                                                                                                                                                                                                                       2f956053 [delivery/sfia-studio-v3-native-option-a-ci-merge-governance]
/Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs                                                                                                                                                                                                                  a42a85c0 [docs/sfia-studio-option-a-ci-governance-post-merge]
/Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check                                                                                                                                                                                                           9f039162 [delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation]
/Users/morris/Projects/sfia-workspace-p6-campaign-continuation-qa                                                                                                                                                                                                                  d8ceb8ad (detached HEAD)
/Users/morris/Projects/sfia-workspace-p6-hqa-01                                                                                                                                                                                                                                    8f61da8f [fix/studio-p6-hqa-01-conversation-recommendations]
/Users/morris/Projects/sfia-workspace-p6-hqa-02                                                                                                                                                                                                                                    6f68ea24 [fix/studio-p6-hqa-02-work-recommendation-materialization]
/Users/morris/Projects/sfia-workspace-p6-min09-documentary-cognitive-reliability-01                                                                                                                                                                                                d8ceb8ad [fix/p6-min09-documentary-cognitive-reliability-01]
/Users/morris/Projects/sfia-workspace-p6-rec01-human-qa                                                                                                                                                                                                                            d8ceb8ad (detached HEAD)
/Users/morris/Projects/sfia-workspace-post-execution-handoff-01                                                                                                                                                                                                                    b0cbdfb0 [delivery/sfia-studio-habitflow-chat-first-projecttrajectory-hd-ec-continuity-01]
/Users/morris/Projects/sfia-workspace-pre-mw2-main-b345f3b6                                                                                                                                                                                                                        ac26e901 [delivery/sfia-studio-nora-mw2-cwp-strategy]
/Users/morris/Projects/sfia-workspace-product-cycle-e2e-01                                                                                                                                                                                                                         1162b36b (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-01-delivery                                                                                                                                                                                                                       98170691 (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-01-fit                                                                                                                                                                                                                            586480af (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-02-b1-delivery                                                                                                                                                                                                                    16a3e5a6 (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-02-b1-real                                                                                                                                                                                                                        1b93fca8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-02-design                                                                                                                                                                                                                         bf6c2104 (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-03-e1-delivery                                                                                                                                                                                                                    8c6715fe (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-03-e1-real                                                                                                                                                                                                                        1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-04-context-envelope                                                                                                                                                                                                               98170691 (detached HEAD)
/Users/morris/Projects/sfia-workspace-proof-corr-04-hybrid-envelope                                                                                                                                                                                                                98170691 (detached HEAD)
/Users/morris/Projects/sfia-workspace-review-handoff-publisher                                                                                                                                                                                                                     5e20debd [tooling/review-handoff-canonical-publisher]
/Users/morris/Projects/sfia-workspace-shared-platform-delivery                                                                                                                                                                                                                     08c282ab [delivery/sfia-studio-shared-technical-platform]
/Users/morris/Projects/sfia-workspace-studio-dogfood-01                                                                                                                                                                                                                            bf6c2104 [run/sfia-studio-product-proof-real-retest-corr-01]
/Users/morris/Projects/sfia-workspace-t-a6-post-merge                                                                                                                                                                                                                              1f258571 [post-merge/sfia-studio-v3-native-option-a-t-a6]
/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration                                                                                                                                                                                                                 6849b6f7 [framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration]
/Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge                                                                                                                                                                                                           960c90b3 [docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status]
/Users/morris/Projects/sfia-workspace-t-a7-framing                                                                                                                                                                                                                                 b7a5e827 [framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge                                                                                                                                                                                                                         08d6cd0d (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1                                                                                                                                                                                         4e4db74f (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-t0-103-section-33-requalification                                                                                                                                                             4e4db74f (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-t0-103-section-33-requalification-clean                                                                                                                                                       489605cb [delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-operational-backlog-103-section-33-requalification-clean]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/main-post-merge                                                                                                                                                                                        52c1d753 [backlog/sfia-studio-v3-1-d2-d-integration-foundation]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-execution-pack                                                                                                                                                                     8dc54db0 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-execution-pack-clean                                                                                                                                                               8dc54db0 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack                                                                                                                                                                               e1e00df2 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack/.tmp-sfia-review/worktrees/finops-t6-post-t2-probe                                                                                                                            e1e00df2 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main                                                                                                                                                                               4b1a0580 [main]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-hard-prerequisites                                                                                                                         4b1a0580 [framing/sfia-studio-f3-real-hard-prerequisites]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery                                                                                                                     4b1a0580 [delivery/sfia-studio-f3-real-prerequisites]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-convergence-foundations                                                                                                                da0618db (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-convergence-post-merge                                                                                                                 6bc39d4a [docs/sfia-studio-m3-post-merge]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-architecture-decisions                                                                                                              80a4bde4 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off                                                                                                                            69cb915e [docs/sfia-studio-product-completion-rebaseline]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/worktrees/sfia-fake-real-progressive-proof                                                                085828e1 [docs/sfia-fake-real-progressive-proof]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6646a3b7-095e-44a9-873b-091173d26df7                          0d334785 [ops1/action/ops1-xatt-6646a3b7-095e-44a9-873b-091173d26df7]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-743f13d4-4c45-43c4-8d99-c6f374a03d92                          0d334785 [ops1/action/ops1-xatt-743f13d4-4c45-43c4-8d99-c6f374a03d92]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8b0efe4f-fbe6-4a9a-8774-9154baac2e02                          0d334785 [ops1/action/ops1-xatt-8b0efe4f-fbe6-4a9a-8774-9154baac2e02]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-aeda2bd4-bdd8-4745-aeac-8f2f65b45d1e                          0d334785 [ops1/action/ops1-xatt-aeda2bd4-bdd8-4745-aeac-8f2f65b45d1e]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-b72aadbd-526f-421c-9b39-aa246ed257c0                          0d334785 [ops1/action/ops1-xatt-b72aadbd-526f-421c-9b39-aa246ed257c0]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ba25f1bd-598d-4f55-8a72-67d41fc57686                          0d334785 [ops1/action/ops1-xatt-ba25f1bd-598d-4f55-8a72-67d41fc57686]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c4df06ae-e7f1-4179-9a83-a6b9facf5f99                          0d334785 [ops1/action/ops1-xatt-c4df06ae-e7f1-4179-9a83-a6b9facf5f99]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f40c2651-059f-41ce-91e4-af42cda39fa7                          0d334785 [ops1/action/ops1-xatt-f40c2651-059f-41ce-91e4-af42cda39fa7]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-30a31b46c0cf5d2fc9c67369                                                   0d334785 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-d9e8dc7862baeb281d215ffd                                                   0d334785 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_453ff36a-ac4b-459c-9d75-6f3-7dda85f19447a529bfe21555  0d334785 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_4a36c225-56e5-4654-bfbe-b86-67bf74b58c5f1b2fceb4eb6b  0d334785 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_85c4d482-baea-4e19-8924-f81-e1a473939ed0a7076438ea15  0d334785 (detached HEAD)
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t3-preparation                                                                                                                                                                        2641263b [delivery/sfia-studio-assistant-sfia-native-openai-finops-t3-alert-morris-review-state]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t4-preparation                                                                                                                                                                        fdc60f4c [delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement-foundation]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t4-projection-refresh                                                                                                                                                                 95cb95cd [delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-projection-refresh]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation                                                                                                                                                                         093fd916 [delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-audit]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation-post-t2-delivery                                                                                                                                                        3931a82e [delivery/sfia-studio-assistant-sfia-native-openai-finops-t6-foundation-post-t2-integration]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-runtime-composition                                                                                                                                                                40cbff6a [delivery/sfia-studio-assistant-sfia-native-openai-finops-t6-runtime-composition]
/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-preparation                                                                                                                                                                        137d3846 [implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t7-rollout-activation-readiness]
/Users/morris/Projects/sfia-workspace-t-a7-next-decision                                                                                                                                                                                                                           33ea3e87 [framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step]
/Users/morris/Projects/sfia-workspace-t-a7-technical-readiness                                                                                                                                                                                                                     b6a19335 [framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness]
/Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions                                                                                                                                                                                                                        f89ba5fb [record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions]
/Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope                                                                                                                                                                                                                     4fad47f7 [framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope]
/Users/morris/Projects/sfia-workspace-template-handoff-fix                                                                                                                                                                                                                         134be301 (detached HEAD)
/Users/morris/Projects/sfia-workspace-ux-reconciliation                                                                                                                                                                                                                            7bdabdcc [project/sfia-studio-ux-ui-reconciliation]
/Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation                                                                                                                                                                                                                    daf6f7d0 [method/sfia-studio-v3-doctrine-consolidation]
/Users/morris/Projects/sfia-workspace-v3-native-audit                                                                                                                                                                                                                              56ddf32e [audit/sfia-studio-v3-native-dependencies]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-arch                                                                                                                                                                                                                      577ff0c2 [design/sfia-studio-v3-native-option-a-functional-architecture]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-design                                                                                                                                                                                                                    e22bc243 [design/sfia-studio-v3-native-option-a-functional]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled                                                                                                                                                                                                                   52891e5c [modeled/sfia-studio-v3-native-option-a]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-tech                                                                                                                                                                                                                      0b696ed9 [framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity]
/Users/morris/Projects/sfia-workspace-v3-native-option-a-ux                                                                                                                                                                                                                        608d3d4c [design/sfia-studio-v3-native-option-a-ux-ui]
/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync                                                                                                                                                                                                                   967f4c2b [fix/sfia-studio-real-b-blocker-02]
/Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync/.tmp-sfia-review/handoff-wt                                                                                                                                                                                       2b1cbed8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-w3b-architecture-addendum                                                                                                                                                                                                                    e3f59b17 [docs/sfia-studio-w3-b-post-merge-truth-sync]
/Users/morris/Projects/sfia-workspace-w3b-bound-snapshot                                                                                                                                                                                                                           8c1f9b86 [delivery/sfia-studio-product-completion-w3-b-bound-snapshot]
/Users/morris/Projects/sfia-workspace-w3b-delivery-restart                                                                                                                                                                                                                         756cda50 [delivery/sfia-studio-product-completion-w3-b-td-reconciled]
/Users/morris/Projects/sfia-workspace-w3b-post-closure-sync                                                                                                                                                                                                                        d53afba2 [docs/sfia-studio-w3-b-post-closure-truth-sync]
/Users/morris/Projects/sfia-workspace-w3b-td02-clarification                                                                                                                                                                                                                       f27e6eeb [docs/sfia-studio-w3-b-td-w3b-02-bound-material-clarification]
/Users/morris/Projects/sfia-workspace-w3c-post-closure-truth-sync                                                                                                                                                                                                                  30b2f68b [docs/sfia-studio-w3-c-post-closure-truth-sync]
/Users/morris/Projects/sfia-workspace-w3c-post-evidence-replan                                                                                                                                                                                                                     43ecc335 [delivery/sfia-studio-product-completion-w3-c-post-evidence-replan]
/Users/morris/Projects/sfia-workspace-w3c-post-merge-coherence                                                                                                                                                                                                                     23a9eb6b [docs/sfia-studio-w3-c-post-merge-coherence]
/Users/morris/Projects/sfia-workspace-w3d-full-ckc-catalog                                                                                                                                                                                                                         a42c488c [delivery/sfia-studio-product-completion-w3-d-full-ckc-catalog]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901                                                                                                                                            32e52718 [ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68                                                                                                                                            32e52718 [ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89                                                                                                                                            27811e8f [ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1                                                                                                                                            32e52718 [ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f                                                                                                                                            27811e8f [ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10                                                                                                                                            4b279b8a [ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29                                                                                                                                            32e52718 [ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56                                                                                                                                            27811e8f [ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62                                                                                                                                            4b279b8a [ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928                                                                                                                                            27811e8f [ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14                                                                                                                                            32e52718 [ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd                                                                                                                                            27811e8f [ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539                                                                                                                                            27811e8f [ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61                                                                                                                                            4b279b8a [ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a                                                                                                                                            27811e8f [ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608                                                                                                                                            27811e8f [ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce                                                                                                                                            27811e8f [ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d                                                                                                                                            27811e8f [ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6                                                                                                                                            32e52718 [ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8                                                                                                                                            27811e8f [ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca                                                                                                                                            4b279b8a [ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4                                                                                                                                            32e52718 [ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0                                                                                                                                            32e52718 [ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187                                                                                                                                            27811e8f [ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7                                                                                                                                            27811e8f [ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7                                                                                                                                            27811e8f [ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846                                                                                                                                            32e52718 [ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e                                                                                                                                            32e52718 [ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700                                                                                                                                            27811e8f [ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c                                                                                                                                            32e52718 [ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4                                                                                                                                            32e52718 [ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca                                                                                                                                            27811e8f [ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353                                                                                                                                            27811e8f [ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050                                                                                                                                            27811e8f [ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b                                                                                                                                            4b279b8a [ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2                                                                                                                                            27811e8f [ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230                                                                                                                                            27811e8f [ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0                                                                                                                                            4b279b8a [ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0]
/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-0c457ce96317ed713224ac4b                                                                                                                                                                     66ffc0d2 (detached HEAD)
/Users/morris/Projects/sfia-workspace/sfia-review-handoff                                                                                                                                                                                                                          98913b85 [sfia/review-handoff]
/Users/morris/Projects/sfia-wt-corr04-d-envelope                                                                                                                                                                                                                                   98170691 (detached HEAD)
/Users/morris/Projects/sfia-wt-corr04-real-12d837fd                                                                                                                                                                                                                                98170691 (detached HEAD)
/Users/morris/Projects/sfia-wt-corr04-real-locked-12d837fd                                                                                                                                                                                                                         1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-corr04-real-main-12d837fd                                                                                                                                                                                                                           1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-corr04-recovery-ac7376d9                                                                                                                                                                                                                            7f7184ca [recovery/sfia-studio-proof-corr-04-option-d-ac7376d9]
/Users/morris/Projects/sfia-wt-corr05-delivery-12d837fd                                                                                                                                                                                                                            1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-corr05-delivery-main-12d837fd                                                                                                                                                                                                                       1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-corr05-func-12d837fd                                                                                                                                                                                                                                12d837fd [run/sfia-studio-corr05-func-delta-01]
/Users/morris/Projects/sfia-wt-corr05-impl-12d837fd                                                                                                                                                                                                                                105f6473 [delivery/sfia-studio-proof-corr-05-pilot-lifecycle]
/Users/morris/Projects/sfia-wt-corr05-preflight-12d837fd                                                                                                                                                                                                                           12d837fd [run/sfia-studio-corr05-delivery-preflight-01]
/Users/morris/Projects/sfia-wt-lifecycle-recommendation-delivery-e6d7c649                                                                                                                                                                                                          1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-lifecycle-recommendation-e6d7c649                                                                                                                                                                                                                   e6d7c649 [design/sfia-studio-lifecycle-recommendation-qualification]
/Users/morris/Projects/sfia-wt-lifecycle-ux-e6d7c649                                                                                                                                                                                                                               e6d7c649 [ux/sfia-studio-product-proof-lifecycle-penpot]
/Users/morris/Projects/sfia-wt-lifecycle-ux-impl-e6d7c649                                                                                                                                                                                                                          1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-lifecycle-ux-impl-from-e6d7c649                                                                                                                                                                                                                     e6d7c649 [delivery/sfia-studio-product-proof-lifecycle-ux-implementation]
/Users/morris/Projects/sfia-wt-lr-deliv-clean-e6d7c649                                                                                                                                                                                                                             1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-lr-delivery-e6d7c649                                                                                                                                                                                                                                1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-lr-delivery-product-e6d7c649                                                                                                                                                                                                                        1f48dd81 (detached HEAD)
/Users/morris/Projects/sfia-wt-p6-hqa-rec01                                                                                                                                                                                                                                        de8573bd [fix/studio-p6-hqa-rec01-qualification-signals]

```

**Protection:** Human QA Studio :3020, DOC-PR577, historical REAL T1 proofs — not mutated by this pass.

**Prior handoff CP02:** commit `98913b85942a7d196ba22e1ac03de220b09495a5` / blob `d6fa7c2342622cd05e08bc0023d9bd1aa4cd866d` (not used as new baseline).

## D. Sources et convergence

Canoniques lues / requalifiées (chemins Git) :

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/sfia-v3-framing/30-*.md` … `37-*.md` (framing v3 applicable)
- `projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md`
- Product simplification §12.6 / §17 (GDR)
- `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
- CKC 08 Delivery / 09 QA
- Process externe v2.6 (templates + routing) — process only
- Review Handoff CP02 FULL (lecture, non-baseline)

**Convergence P6 requalifiée :**
- Capacité v3 : Analyse documentaire gouvernée par Nora dans le Product Operating Loop — KEEP primitives.
- État entrée CP03 : RCD-01 CP01+CP02 locaux ; R1/R2/R3 corrigés au scope testé ; R4/R5 ouverts.
- GDR REAL NOT PROVEN ; P6 GLOBAL NOT PASSED ; Runtime v3 NON ADOPTED.
- R21 DETERMINISTIC ≠ REAL ; R22 OpenAI-native-first.
- Architecture parallèle : NONE.
- Exit proof cible : invariant documentaire sur résultat effectivement remis au modèle.

## E. État d'entrée CP02

- 69 tests ciblés PASS rapportés (CP02).
- Défauts R4/R5 encore ouverts :
  - **R4** : comptage complete-lines vs lignes originales après `redactSecrets()` → faux partial / boucle possible ; rebuild depuis raw → réintroduction potentielle de secrets dans objet intermédiaire.
  - **R5** : `prepareToolDataForModel` peut re-couper `content` sans recalculer `returnedEndLine` / hints / summary.
- Cumul local non commité préservé (aucune perte CP01/CP02).

## F. Reproduction R4

Chaîne défectueuse CP02 (avant fix) :

1. `byteSlice` du ranged brut
2. `redactSecrets(byteSlice)`
3. `countCompleteReturnedLines` contre lignes originales
4. rebuild `completeContent` depuis lignes originales

Conséquences (fixtures fictives uniquement) :

- Ligne contenant motifs OPENAI_API_KEY / sk- / ghp_ / Authorization Bearer : texte rédigé ≠ original → risque de partialLine et nextStartLineHint bloqué.
- Rebuild raw après rédaction : secrets pouvaient réapparaître dans `GitReadFileResult.content`.

## G. Correction R4

Fichier : `gitLocalReadAdapter.ts` — adaptation minimale, `redactSecrets()` conservé.

Invariant retenu :

> Le modèle et les surfaces d'observation ne reçoivent jamais de secret non masqué.
> La comptabilisation des lignes ne dépend pas d'une égalité original↔rédigé.
> Couverture calculée sur contenu sûr et effectivement disponible.

Implémentation :

1. Extraire `rangedOriginal` puis `rangedRedacted = map(redactSecrets)`.
2. Appliquer caps byte/char sur le joint rédigé.
3. `countCompleteReturnedLines` contre `rangedRedacted` (indices locaux, remap numéros document).
4. Rebuild `completeContent` uniquement depuis `rangedRedacted`.
5. Redact défensif final sur `text`.
6. `lineExceedsCap` évalué sur la ligne rédigée.

Aucune implémentation parallèle de rédaction. Aucun déplacement de secrets vers Session/logs.

## H. Tests de confidentialité (R4)

Suite : `p6.nora.min09.documentaryReliability.d0.test.ts` — describe R4.

| ID | Couverture |
|---|---|
| R4-A | Doc sans secret inchangé |
| R4-B/C/D/E | OPENAI_API_KEY / sk- / ghp_ / Bearer fictifs → [redacted], lignes complètes créditées |
| R4-F/G | Ligne rédigée milieu / début de plage |
| R4-H/I | Truncation avant/sur ligne sensible — pas de fuite, hint honnête |
| R4-J | Lectures successives — progression finie, pas de boucle |
| R4-K | lineExceedsCap explicite |
| R4-L/M | Absence secrets dans adapter / ToolRouter / toolResultForModel / Session items / events ; JSON.parse OK |
| R4-N | UTF-8 multioctets |

Assertions négatives : marqueurs fictifs absents des sorties vérifiées.

## I. Reproduction R5

Chaîne : GitLocalReadAdapter.readFile → routeToolCall → prepareToolDataForModel → toolResultForModel → Runner.

prepareToolDataForModel priorisait LARGE_STRING_KEYS (content) puis pouvait :

- couper content au milieu d'une ligne ;
- omettre des métadonnées si budget restant < 32 ;
- laisser returnedEndLine / completeLineCount / nextStartLineHint / summary désynchronisés du payload final.

Plafonds inchangés : CT_MAX_TOOL_RESULT_CHARS = 12000 ; Adaptive ceiling 10 inchangé.

## J. Correction R5

Fichier : `toolRouter.ts`.

Option retenue (minimale, réutilise la chaîne) :

- Helper exporté `prepareGitLocalReadDataForModel` pour `git_local_read_file` uniquement.
- Budgétise l'enveloppe model-visible ok/summary/data/truncated (pas seulement data).
- Réserve les métadonnées ; réduit content par lignes complètes uniquement.
- Recalcule returnedEndLine, completeLineCount, partialLineNumber, nextStartLineHint, truncated, hasMore, summary.
- documentHasMore sans coupe taille → truncated reste false (R5-J).
- Si même 0 ligne ne tient pas : RESULT_CAPPED, completeLineCount=0, jamais FULL implicite.
- Autres outils : chemin prepareToolDataForModel inchangé (R5-N).

Justification vs alternatives :

- Post-reconcile after generic prepare : risque que meta aient déjà disparu.
- Augmenter le plafond : interdit FinOps.
- Second adaptateur documentaire : interdit.

## K. Tests du payload final (R5)

| ID | Couverture |
|---|---|
| R5-A | Petit doc — pas de 2e trunc ; meta = lignes content |
| R5-B–F/H/I | Plafond JSON serré — meta finales = lignes complètes ; hint = returnedEnd+1 ; pas de saut |
| R5-G | JSON.parse(toolResultForModel) ; ceiling 12000 |
| R5-J | documentHasMore sans trunc |
| R5-K | FULL impossible si totalLines non couvert |
| R5-L/M | R4+R5 combinés — secret fictif + 2e plafond — zero leak |
| R5-N | Non-régression autres outils |
| R5-O | Chemin complet Git→Adapter→ToolRouter→model-visible→Runner/ScriptedModel/Session |

## L. Fichiers créés et modifiés

### Créés (contenu intégral ci-dessous §N)

- `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts`
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts` (CP01)
- `projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts` (CP01)

### Modifiés (diffs utiles §N)

- `gitLocalReadAdapter.ts` — R1+R4
- `toolRouter.ts` — R5 (+ wiring)
- `readCoverage.ts`, `runNoraAgentsTurn.ts`, `adaptiveTurnBudget.ts`, `runNoraCognitiveTurn.ts`, `index.ts`, `types` observability/tools, `p6.nora.p1.adaptiveBudget.d0.test.ts` — CP01/CP02 préservés

### Interdits non touchés

convergence/**, product-completion/**, product-simplification/**, sfia-v3-framing/**, production-runtime-reference/**, prompts/**, method/**, package.json, lockfiles, DB, provider/REAL config, UI, Human QA data.

## M. Git Review Index

| Path | Role | Pass |
|---|---|---|
| gitLocalReadAdapter.ts | R1/R4 complete-line + redaction-safe accounting | CP02+CP03 |
| toolRouter.ts | R5 final envelope truth | CP03 |
| readCoverage.ts | Coverage signals / no false FULL | CP01/CP02 |
| runNoraAgentsTurn.ts | R2 restitution / soft maxTurns disclosure | CP02 |
| documentaryBudgetExhausted.ts | Honest budget-exhausted text | CP01 |
| documentaryReadGuidance.ts | Documentary guidance | CP01 |
| adaptiveTurnBudget.ts | P1 ceiling 10 / Focused ≥8 | CP01 |
| p6.nora.min09.documentaryReliability.d0.test.ts | Oracles R1–R5 | CP01–CP03 |
| .tmp-sfia-review/chatgpt-review.md | Review Pack FULL CP03 | CP03 |

## N. Diffs utiles complets + fichiers créés

### N.1 Diff — gitLocalReadAdapter.ts (cumul vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts b/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
index 4dda7c8c..90e31385 100644
--- a/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
+++ b/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
@@ -60,12 +60,108 @@ export type GitReadFileResult = {
   path: string;
   content: string;
   summary: string;
+  /** True when the requested range content was cut by byte/char caps. */
   truncated: boolean;
+  /**
+   * True when lines exist after the *requested* endLine (document continues).
+   * Independent of truncation — a fully returned short range may still have
+   * later lines.
+   */
+  documentHasMore: boolean;
+  /**
+   * Compat aggregate: truncated || documentHasMore.
+   * Prefer the specific flags for new callers.
+   */
+  hasMore: boolean;
+  /** Requested range (clamped to document bounds). */
   startLine: number;
   endLine: number;
-  hasMore: boolean;
+  requestedStartLine: number;
+  requestedEndLine: number;
+  /**
+   * First line of the *complete* returned span.
+   * When completeLineCount=0, equals requested start (no proven span).
+   */
+  returnedStartLine: number;
+  /**
+   * Last line fully present in content (never a mid-truncated line).
+   * When completeLineCount=0, equals returnedStartLine - 1 (empty proven span).
+   */
+  returnedEndLine: number;
+  /** Number of fully returned lines credited for coverage. */
+  completeLineCount: number;
+  /**
+   * Line number that was cut mid-content (not credited), if any.
+   * Null when no partial line was observed.
+   */
+  partialLineNumber: number | null;
+  /**
+   * True when the line at nextStartLineHint (or requested start) cannot fit
+   * under current byte/char caps even alone — explicit skip, not silent loss.
+   */
+  lineExceedsCap: boolean;
+  totalLines: number;
+  /** Next line to request when more content remains; null when complete through EOF. */
+  nextStartLineHint: number | null;
 };

+/**
+ * Count how many leading lines from `lines[startLine-1..endLine-1]` are fully
+ * present as an exact prefix of `body` (no truncation marker). A mid-cut line
+ * is NOT counted.
+ */
+export function countCompleteReturnedLines(input: {
+  lines: string[];
+  startLine: number;
+  endLine: number;
+  body: string;
+}): { completeLineCount: number; partialLineNumber: number | null } {
+  const { lines, startLine, endLine, body } = input;
+  let offset = 0;
+  let completeLineCount = 0;
+  for (let lineNo = startLine; lineNo <= endLine; lineNo++) {
+    const line = lines[lineNo - 1];
+    if (line === undefined) break;
+    if (completeLineCount > 0) {
+      if (offset >= body.length) {
+        // Clean boundary after a complete line — no partial next line.
+        return { completeLineCount, partialLineNumber: null };
+      }
+      if (body[offset] !== "\n") {
+        return { completeLineCount, partialLineNumber: lineNo };
+      }
+      offset += 1;
+    }
+    if (body.length < offset + line.length) {
+      // Prefix of this line may be present — never credit it as complete.
+      const remaining = body.length - offset;
+      if (remaining > 0 && body.slice(offset) === line.slice(0, remaining)) {
+        return { completeLineCount, partialLineNumber: lineNo };
+      }
+      return {
+        completeLineCount,
+        partialLineNumber: remaining > 0 ? lineNo : null,
+      };
+    }
+    if (body.slice(offset, offset + line.length) !== line) {
+      return { completeLineCount, partialLineNumber: lineNo };
+    }
+    offset += line.length;
+    completeLineCount += 1;
+  }
+  return { completeLineCount, partialLineNumber: null };
+}
+
+function lineFitsCaps(
+  line: string,
+  byteCap: number,
+  charCap: number,
+): boolean {
+  return (
+    Buffer.byteLength(line, "utf8") <= byteCap && line.length <= charCap
+  );
+}
+
 export type GitContentMatch = {
   path: string;
   line: number;
@@ -289,31 +385,113 @@ export class GitLocalReadAdapter {

     const startLine = Math.min(startRequested, totalLines);
     const endLine = Math.max(startLine, Math.min(endRequested, totalLines));
-    const ranged = lines.slice(startLine - 1, endLine).join("\n");
-    const hasMoreLines = endLine < totalLines;
-
-    const cap = Math.min(maxBytes, CT_DEFAULT_READ_MAX_BYTES * 2);
-    const byteSlice =
-      Buffer.byteLength(ranged, "utf8") > cap
-        ? Buffer.from(ranged, "utf8").subarray(0, cap).toString("utf8")
-        : ranged;
-    const byteTruncated = Buffer.byteLength(ranged, "utf8") > cap;
-    const redacted = redactSecrets(byteSlice);
-    const { text, truncated: charTruncated } = truncateText(
-      redacted,
-      CT_MAX_TOOL_RESULT_CHARS,
-    );
-    const truncated = byteTruncated || charTruncated;
-    const hasMore = hasMoreLines || truncated;
+    const documentHasMore = endLine < totalLines;
+
+    // R4 — Redact per-line BEFORE size caps / complete-line accounting.
+    // Never compare redacted body to original lines; never rebuild from raw secrets.
+    const rangedOriginal = lines.slice(startLine - 1, endLine);
+    const rangedRedacted = rangedOriginal.map((line) => redactSecrets(line));
+    const redactedJoined = rangedRedacted.join("\n");
+
+    const byteCap = Math.min(maxBytes, CT_DEFAULT_READ_MAX_BYTES * 2);
+    const charCap = CT_MAX_TOOL_RESULT_CHARS;
+    const byteTruncated = Buffer.byteLength(redactedJoined, "utf8") > byteCap;
+    const byteSlice = byteTruncated
+      ? Buffer.from(redactedJoined, "utf8").subarray(0, byteCap).toString("utf8")
+      : redactedJoined;
+    // Defense: re-redact after byte slice (should be no-op if already clean).
+    const safeSlice = redactSecrets(byteSlice);
+    const charTruncated = safeSlice.length > charCap;
+    const cappedBody = charTruncated ? safeSlice.slice(0, charCap) : safeSlice;
+    const sizeTruncated = byteTruncated || charTruncated;
+
+    // Count against redacted line array (1-based within rangedRedacted).
+    const { completeLineCount, partialLineNumber: partialInRange } =
+      countCompleteReturnedLines({
+        lines: rangedRedacted,
+        startLine: 1,
+        endLine: rangedRedacted.length,
+        body: cappedBody,
+      });
+
+    const returnedStartLine = startLine;
+    const returnedEndLine =
+      completeLineCount > 0 ? startLine + completeLineCount - 1 : startLine - 1;
+    const partialLineNumber =
+      partialInRange != null ? startLine + partialInRange - 1 : null;
+
+    // Rebuild ONLY from redacted complete lines — secrets never re-enter content.
+    const completeContent =
+      completeLineCount > 0
+        ? rangedRedacted.slice(0, completeLineCount).join("\n")
+        : "";
+
+    const soleRedacted = rangedRedacted[0] ?? "";
+    const lineExceedsCap =
+      completeLineCount === 0 &&
+      !lineFitsCaps(soleRedacted, byteCap, charCap);
+
+    let nextStartLineHint: number | null = null;
+    if (completeLineCount > 0) {
+      nextStartLineHint =
+        returnedEndLine < totalLines ? returnedEndLine + 1 : null;
+    } else if (lineExceedsCap) {
+      // Explicit unblockable line under current caps — do not loop forever on it.
+      nextStartLineHint = startLine < totalLines ? startLine + 1 : null;
+    } else if (partialLineNumber != null) {
+      // Fittable line cut mid-way because a multi-line window hit the cap — retry that line.
+      nextStartLineHint = partialLineNumber;
+    } else if (documentHasMore) {
+      nextStartLineHint = endLine + 1;
+    }
+
+    const truncated =
+      sizeTruncated ||
+      completeLineCount < endLine - startLine + 1 ||
+      lineExceedsCap;
+    const hasMore = documentHasMore || truncated;
+
+    const textRaw = truncated
+      ? completeContent
+        ? `${completeContent}\n…[truncated]`
+        : "…[truncated]"
+      : completeContent;
+    // Final defensive redact — content must stay secret-safe.
+    const text = redactSecrets(textRaw);
+
+    const returnedLabel =
+      completeLineCount > 0
+        ? `returned L${returnedStartLine}-${returnedEndLine}`
+        : "returned none";
+
+    const flags = [
+      truncated ? "truncated" : null,
+      documentHasMore ? "documentHasMore" : null,
+      hasMore ? "hasMore" : null,
+      lineExceedsCap ? "lineExceedsCap" : null,
+      partialLineNumber != null ? `partialLine:${partialLineNumber}` : null,
+    ]
+      .filter(Boolean)
+      .join(" ");

     return {
       path: norm.normalized,
       content: text,
       truncated,
+      documentHasMore,
+      hasMore,
       startLine,
       endLine,
-      hasMore,
-      summary: `read ${norm.normalized} L${startLine}-${endLine}/${totalLines} (${text.length} chars)${hasMore ? " hasMore" : ""}`,
+      requestedStartLine: startLine,
+      requestedEndLine: endLine,
+      returnedStartLine,
+      returnedEndLine,
+      completeLineCount,
+      partialLineNumber,
+      lineExceedsCap,
+      totalLines,
+      nextStartLineHint,
+      summary: `read ${norm.normalized} L${startLine}-${endLine}/${totalLines} ${returnedLabel} (${text.length} chars)${flags ? ` ${flags}` : ""}`,
     };
   }


```

### N.2 Diff — toolRouter.ts (cumul vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts b/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
index c57dc074..393cde72 100644
--- a/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
@@ -113,6 +113,216 @@ function failResult(
   };
 }

+const GIT_READ_TRUNCATION_MARKER = "…[truncated]";
+const GIT_READ_TRUNCATION_SUFFIX = `\n${GIT_READ_TRUNCATION_MARKER}`;
+
+function stripGitReadTruncationMarker(content: string): string {
+  if (content.endsWith(GIT_READ_TRUNCATION_SUFFIX)) {
+    return content.slice(0, -GIT_READ_TRUNCATION_SUFFIX.length);
+  }
+  if (content === GIT_READ_TRUNCATION_MARKER) return "";
+  if (content.endsWith(GIT_READ_TRUNCATION_MARKER)) {
+    return content.slice(0, -GIT_READ_TRUNCATION_MARKER.length);
+  }
+  return content;
+}
+
+function asFiniteInt(v: unknown, fallback: number): number {
+  if (typeof v === "number" && Number.isFinite(v)) return Math.floor(v);
+  if (typeof v === "string" && /^-?\d+$/.test(v)) return parseInt(v, 10);
+  return fallback;
+}
+
+/**
+ * R5 — Prepare git_local_read_file for the model-visible envelope.
+ * Reserves metadata, caps content on complete-line boundaries only, and
+ * reconciles coverage fields to the FINAL payload (not the adapter-only view).
+ */
+export function prepareGitLocalReadDataForModel(
+  raw: Record<string, unknown>,
+  maxChars = CT_MAX_TOOL_RESULT_CHARS,
+): {
+  data: Record<string, unknown>;
+  truncated: boolean;
+  json: string;
+  summary: string;
+} {
+  const path = typeof raw.path === "string" ? raw.path : "";
+  const startLine = asFiniteInt(raw.startLine, 1);
+  const endLine = asFiniteInt(raw.endLine, startLine);
+  const requestedStartLine = asFiniteInt(raw.requestedStartLine, startLine);
+  const requestedEndLine = asFiniteInt(raw.requestedEndLine, endLine);
+  const returnedStartLine = asFiniteInt(raw.returnedStartLine, startLine);
+  const totalLines = asFiniteInt(raw.totalLines, 0);
+  const documentHasMore = Boolean(raw.documentHasMore);
+  const adapterLineExceedsCap = Boolean(raw.lineExceedsCap);
+  const adapterTruncated = Boolean(raw.truncated);
+  const adapterPartial =
+    raw.partialLineNumber == null || raw.partialLineNumber === undefined
+      ? null
+      : asFiniteInt(raw.partialLineNumber, returnedStartLine);
+  const adapterNext =
+    raw.nextStartLineHint == null || raw.nextStartLineHint === undefined
+      ? null
+      : asFiniteInt(raw.nextStartLineHint, returnedStartLine);
+
+  const body = redactSecrets(
+    stripGitReadTruncationMarker(
+      typeof raw.content === "string" ? raw.content : "",
+    ),
+  );
+  const lines = body.length === 0 ? [] : body.split("\n");
+
+  const buildAttempt = (count: number) => {
+    const secondCut = count < lines.length;
+    const finalTruncated = secondCut ? true : adapterTruncated;
+    const completeContent =
+      count > 0 ? lines.slice(0, count).join("\n") : "";
+    const text = finalTruncated
+      ? completeContent
+        ? `${completeContent}${GIT_READ_TRUNCATION_SUFFIX}`
+        : GIT_READ_TRUNCATION_MARKER
+      : completeContent;
+
+    const returnedEndLine =
+      count > 0 ? returnedStartLine + count - 1 : returnedStartLine - 1;
+
+    let partialLineNumber: number | null = null;
+    let nextStartLineHint: number | null = null;
+    let lineExceedsCap = false;
+
+    if (secondCut) {
+      // Second ceiling cut — never skip the first unavailable line.
+      partialLineNumber = returnedStartLine + count;
+      nextStartLineHint = returnedStartLine + count;
+      if (count === 0 && adapterLineExceedsCap) {
+        lineExceedsCap = true;
+        nextStartLineHint =
+          returnedStartLine < totalLines ? returnedStartLine + 1 : null;
+        partialLineNumber = null;
+      }
+    } else if (count > 0) {
+      nextStartLineHint =
+        returnedEndLine < totalLines ? returnedEndLine + 1 : null;
+      partialLineNumber = adapterPartial;
+      lineExceedsCap = false;
+      // Preserve adapter next hint when it already matches honest progression.
+      if (adapterNext != null && nextStartLineHint == null) {
+        nextStartLineHint = adapterNext;
+      }
+    } else {
+      // Empty body from adapter (lineExceedsCap / zero complete).
+      lineExceedsCap = adapterLineExceedsCap;
+      partialLineNumber = adapterPartial;
+      if (lineExceedsCap) {
+        nextStartLineHint =
+          returnedStartLine < totalLines ? returnedStartLine + 1 : null;
+      } else if (adapterPartial != null) {
+        nextStartLineHint = adapterPartial;
+      } else if (adapterNext != null) {
+        nextStartLineHint = adapterNext;
+      } else if (documentHasMore) {
+        nextStartLineHint = endLine + 1;
+      } else {
+        nextStartLineHint = null;
+      }
+    }
+
+    const hasMore = documentHasMore || finalTruncated;
+    const dataObj: Record<string, unknown> = {
+      path,
+      content: redactSecrets(text),
+      truncated: finalTruncated,
+      documentHasMore,
+      hasMore,
+      startLine,
+      endLine,
+      requestedStartLine,
+      requestedEndLine,
+      returnedStartLine,
+      returnedEndLine,
+      completeLineCount: count,
+      partialLineNumber,
+      lineExceedsCap,
+      totalLines,
+      nextStartLineHint,
+    };
+
+    const returnedLabel =
+      count > 0
+        ? `returned L${returnedStartLine}-${returnedEndLine}`
+        : "returned none";
+    const flags = [
+      finalTruncated ? "truncated" : null,
+      documentHasMore ? "documentHasMore" : null,
+      hasMore ? "hasMore" : null,
+      lineExceedsCap ? "lineExceedsCap" : null,
+      partialLineNumber != null ? `partialLine:${partialLineNumber}` : null,
+    ]
+      .filter(Boolean)
+      .join(" ");
+    const summary = `read ${path} L${startLine}-${endLine}/${totalLines} ${returnedLabel} (${text.length} chars)${flags ? ` ${flags}` : ""}`;
+
+    const envelope = redactSecrets(
+      JSON.stringify({
+        ok: true,
+        summary,
+        data: dataObj,
+        truncated: finalTruncated,
+      }),
+    );
+
+    return {
+      data: dataObj,
+      summary,
+      envelope,
+      truncated: finalTruncated,
+      json: redactSecrets(JSON.stringify(dataObj)),
+    };
+  };
+
+  // Prefer max complete lines whose FULL model envelope fits the ceiling.
+  for (let count = lines.length; count >= 0; count -= 1) {
+    const attempt = buildAttempt(count);
+    if (attempt.envelope.length <= maxChars) {
+      return {
+        data: attempt.data,
+        truncated: attempt.truncated,
+        json: attempt.json,
+        summary: attempt.summary,
+      };
+    }
+  }
+
+  // Last resort: metadata-only — never claim complete coverage.
+  const capped: Record<string, unknown> = {
+    path,
+    content: GIT_READ_TRUNCATION_MARKER,
+    truncated: true,
+    documentHasMore,
+    hasMore: true,
+    note: "RESULT_CAPPED",
+    startLine,
+    endLine,
+    requestedStartLine,
+    requestedEndLine,
+    returnedStartLine,
+    returnedEndLine: returnedStartLine - 1,
+    completeLineCount: 0,
+    partialLineNumber: null,
+    lineExceedsCap: adapterLineExceedsCap,
+    totalLines,
+    nextStartLineHint: returnedStartLine,
+  };
+  const summary = `read ${path} L${startLine}-${endLine}/${totalLines} returned none (0 chars) truncated RESULT_CAPPED`;
+  return {
+    data: capped,
+    truncated: true,
+    json: redactSecrets(JSON.stringify(capped)),
+    summary,
+  };
+}
+
 /**
  * Cap large string fields BEFORE JSON serialization so the payload is always
  * valid JSON. Never mid-truncate a serialized JSON string then re-parse it.
@@ -230,9 +440,25 @@ export function resolveToolPathOrRef(
     case "git_local_read_file": {
       const p = asString(dataObj?.path) ?? asString(args.path);
       if (!p) return null;
-      const start = dataObj?.startLine;
-      const end = dataObj?.endLine;
-      if (typeof start === "number" && typeof end === "number") {
+      const completeCount = dataObj?.completeLineCount;
+      if (typeof completeCount === "number" && completeCount <= 0) {
+        // No proven complete span — bare path (avoid false #L range).
+        return p;
+      }
+      // Prefer returned range (honest coverage) over requested-only bounds.
+      const start =
+        typeof dataObj?.returnedStartLine === "number"
+          ? dataObj.returnedStartLine
+          : dataObj?.startLine;
+      const end =
+        typeof dataObj?.returnedEndLine === "number"
+          ? dataObj.returnedEndLine
+          : dataObj?.endLine;
+      if (
+        typeof start === "number" &&
+        typeof end === "number" &&
+        end >= start
+      ) {
         return `${p}#L${start}-${end}`;
       }
       return p;
@@ -497,12 +723,23 @@ export async function routeToolCall(
           path: r.path,
           content: r.content,
           truncated: r.truncated,
+          documentHasMore: r.documentHasMore,
+          hasMore: r.hasMore,
           startLine: r.startLine,
           endLine: r.endLine,
-          hasMore: r.hasMore,
+          requestedStartLine: r.requestedStartLine,
+          requestedEndLine: r.requestedEndLine,
+          returnedStartLine: r.returnedStartLine,
+          returnedEndLine: r.returnedEndLine,
+          completeLineCount: r.completeLineCount,
+          partialLineNumber: r.partialLineNumber,
+          lineExceedsCap: r.lineExceedsCap,
+          totalLines: r.totalLines,
+          nextStartLineHint: r.nextStartLineHint,
         };
         summary = r.summary;
-        truncated = r.truncated || r.hasMore;
+        // usage.truncated = content cut / incomplete delivery — not documentHasMore alone.
+        truncated = r.truncated;
         break;
       }
       case "git_local_get_diff": {
@@ -830,8 +1067,25 @@ export async function routeToolCall(
       }
     }

-    const prepared = prepareToolDataForModel(data, CT_MAX_TOOL_RESULT_CHARS);
-    if (prepared.truncated) truncated = true;
+    let prepared: { data: unknown; truncated: boolean; json: string };
+    if (
+      name === "git_local_read_file" &&
+      data &&
+      typeof data === "object" &&
+      !Array.isArray(data)
+    ) {
+      // R5 — coverage metadata must describe the FINAL model-visible envelope.
+      const gitPrepared = prepareGitLocalReadDataForModel(
+        data as Record<string, unknown>,
+        CT_MAX_TOOL_RESULT_CHARS,
+      );
+      prepared = gitPrepared;
+      summary = gitPrepared.summary;
+      truncated = gitPrepared.truncated;
+    } else {
+      prepared = prepareToolDataForModel(data, CT_MAX_TOOL_RESULT_CHARS);
+      if (prepared.truncated) truncated = true;
+    }
     if (prepared.json.length > CT_MAX_TOOL_RESULT_CHARS * 4) {
       const result = failResult(
         request.toolCallId,

```

### N.3 Diff — autres fichiers CP01/CP02 (cumul vs HEAD)

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
index 46f31e2b..29cc8efc 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
@@ -101,6 +101,22 @@ describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
     );
   });

+  it("natural mono-file synthèse does not set sourceBreadth=high", () => {
+    const hints = inferWorkloadHintsFromUserContent(
+      "Consulte projects/sfia-studio/docs/a.md et fais-en une synthèse.",
+    );
+    expect(hints.toolDependency).toBe("high");
+    expect(hints.reasoningDepth).toBe("medium");
+    expect(hints.sourceBreadth).toBeUndefined();
+    const budget = resolveAdaptiveMaxTurns({
+      strategyClass: "Routine",
+      signals: hints,
+    });
+    // Mono-doc tool+depth bump lifts Routine base to at least Focused floor (8).
+    expect(budget.requestedMaxTurns).toBe(8);
+    expect(budget.reasonCodes).toContain("known_mono_doc_tool_synthesis_bump");
+  });
+
   it("null strategy falls back to legacy 5", () => {
     expect(
       resolveAdaptiveMaxTurns({ strategyClass: null }).requestedMaxTurns,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
index c08d4306..0772901a 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
@@ -65,6 +65,23 @@ function isKnownMediumOrHigh(value: SignalValue | undefined): boolean {
  * Light, observable hints from Pilot request text — never invents LOW for unknowns.
  * Used only to elevate known dimensions when wording is explicit.
  */
+/**
+ * True when Pilot wording requests reading/synthesizing a concrete repo path
+ * (mono-file documentary mission). Bare "document" alone remains non-elevating.
+ */
+export function isNaturalMonoFileDocumentaryRequest(content: string): boolean {
+  const c = content.trim();
+  if (!c) return false;
+  const hasRepoPath =
+    /(?:^|[\s`"'(])((?:projects|docs|method|prompts)\/[\w./+-]+\.(?:md|txt|markdown))\b/i.test(
+      c,
+    ) || /(?:^|[\s`"'(])([\w./+-]+\.(?:md|txt|markdown))\b/i.test(c);
+  if (!hasRepoPath) return false;
+  return /synth[eè]se|r[eé]sum(?:er|é|e)?|consulter|reten(?:ir|iens)|lire|analys(?:e|er)|review|guid(?:ed)?\s+document/i.test(
+    c,
+  );
+}
+
 export function inferWorkloadHintsFromUserContent(
   content: string,
 ): Partial<CognitiveWorkloadSignals> {
@@ -80,6 +97,13 @@ export function inferWorkloadHintsFromUserContent(
     hints.sourceBreadth = "high";
     hints.toolDependency = "high";
   }
+  // Mono-file natural synthesis: tool dependency + synthesis depth — NOT sourceBreadth=high.
+  if (isNaturalMonoFileDocumentaryRequest(c)) {
+    hints.toolDependency = "high";
+    if (hints.reasoningDepth !== "high") {
+      hints.reasoningDepth = "medium";
+    }
+  }
   if (
     /v[ée]rif|cross[- ]?check|contradic|coherence|coh[ée]rence|entre\s+documents/i.test(
       c,
@@ -163,6 +187,17 @@ export function resolveAdaptiveMaxTurns(input: {
       reasonCodes.push("known_medium_doc_tool_bump");
       base = bumped;
     }
+  } else if (
+    // Mono-file documentary synthesis: high toolDependency + medium/high depth
+    // → at least Focused base (8), never invents sourceBreadth, never exceeds ceiling.
+    isKnownHigh(signals.toolDependency) &&
+    isKnownMediumOrHigh(signals.reasoningDepth)
+  ) {
+    const bumped = Math.min(ceiling, Math.max(base, 8));
+    if (bumped > base) {
+      reasonCodes.push("known_mono_doc_tool_synthesis_bump");
+      base = bumped;
+    }
   }

   // Unknown-heavy path: do not elevate beyond strategy base (UNKNOWN ≠ LOW inflate).
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 09f32abd..4bbc11a6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -85,12 +85,22 @@ export type { NoraTurnBudget } from "./turnBudget";
 export {
   resolveAdaptiveMaxTurns,
   inferWorkloadHintsFromUserContent,
+  isNaturalMonoFileDocumentaryRequest,
   LEGACY_DEFAULT_MAX_TURNS,
   ADAPTIVE_MAX_TURNS_FLOOR,
   ADAPTIVE_MAX_TURNS_CEILING,
   STRATEGY_BASE_MAX_TURNS,
 } from "./adaptiveTurnBudget";
 export type { AdaptiveMaxTurnsDecision } from "./adaptiveTurnBudget";
+export {
+  appendDocumentaryReadGuidance,
+  DOCUMENTARY_READ_GUIDANCE_BLOCK,
+} from "./documentaryReadGuidance";
+export {
+  buildDocumentaryBudgetExhaustedText,
+  collectReadFactsFromRunItems,
+  MODEL_TURN_BUDGET_REACHED_STOCK,
+} from "./documentaryBudgetExhausted";
 export {
   planContinuationSegments,
   emptyContinuationObserve,
@@ -332,6 +342,7 @@ export {
   MW4_DOCUMENT_READ_TOOL,
   overallToGroundingCoverageKind,
   parseGitLocalReadCoverageSignals,
+  unionReturnedLineSpans,
 } from "./readCoverage";
 export type {
   ParsedReadRange,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
index a9195bc4..cf5ec23d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
@@ -3,10 +3,16 @@
  *
  * Derives coverage from the REAL ToolRouter/EventSink contract:
  * - toolName, status, summary, source.pathOrRef
- * - git_local_read_file summary: `read <path> L<start>-<end>/<total> (...) [hasMore]`
- * - pathOrRef may be `<path>#L<start>-<end>`
+ * - git_local_read_file summary (current):
+ *   `read <path> L<reqStart>-<reqEnd>/<total> returned L<retStart>-<retEnd> (N chars) [truncated] [documentHasMore] [hasMore]`
+ * - legacy summary still accepted: `read <path> L<start>-<end>/<total> (...) [hasMore]`
+ * - pathOrRef may be `<path>#L<start>-<end>` (prefer returned range when present)
  *
  * Search ≠ read. Only git_local_read_file establishes document read coverage.
+ *
+ * hasMore ≠ truncated:
+ * - truncated = requested range content was cut by size caps
+ * - documentHasMore = lines exist after the requested endLine
  */

 export type ReadCoverageKind =
@@ -21,10 +27,22 @@ export type ReadCoverageFact = {
   /** Bare path without #L range suffix when known. */
   documentPath?: string;
   coverage: ReadCoverageKind;
+  /** Requested range start (when known). */
   startLine?: number;
+  /** Requested range end (when known). */
   endLine?: number;
+  /** Returned range start (honest payload bounds). */
+  returnedStartLine?: number;
+  /** Returned range end (honest payload bounds). */
+  returnedEndLine?: number;
+  completeLineCount?: number;
+  partialLineNumber?: number | null;
+  lineExceedsCap?: boolean;
   totalLines?: number;
   hasMore?: boolean;
+  truncated?: boolean;
+  documentHasMore?: boolean;
+  nextStartLineHint?: number | null;
   /** Optional signals observed in summary/pathOrRef. */
   signals?: string[];
   /** current_turn vs remembered prior-turn continuity. */
@@ -39,18 +57,36 @@ export type ReadCoverageAggregate = {
 /** Sole primitive that establishes document read coverage for MW4-S03. */
 export const MW4_DOCUMENT_READ_TOOL = "git_local_read_file" as const;

-const READ_SUMMARY_RE =
-  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(hasMore)?/i;
+/** Current summary with returned range + explicit flags. */
+const READ_SUMMARY_RETURNED_RE =
+  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s+returned\s+L(\d+)-(\d+)\s*\(([^)]*)\)\s*(.*)$/i;
+
+/** Current summary when zero complete lines were credited. */
+const READ_SUMMARY_RETURNED_NONE_RE =
+  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s+returned\s+none\s*\(([^)]*)\)\s*(.*)$/i;
+
+/** Legacy summary without returned range. */
+const READ_SUMMARY_LEGACY_RE =
+  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(.*)$/i;

 const PATH_RANGE_RE = /^(.*)#L(\d+)-(\d+)$/;

 export type ParsedReadRange = {
   documentPath: string;
+  /** Requested start. */
   startLine: number;
+  /** Requested end. */
   endLine: number;
+  returnedStartLine: number;
+  returnedEndLine: number;
+  completeLineCount?: number;
+  partialLineNumber?: number | null;
+  lineExceedsCap?: boolean;
   totalLines?: number;
   hasMore: boolean;
   truncated: boolean;
+  documentHasMore: boolean;
+  nextStartLineHint?: number | null;
 };

 /**
@@ -63,34 +99,148 @@ export function parseGitLocalReadCoverageSignals(input: {
   const summary = (input.summary ?? "").trim();
   const pathOrRef = (input.pathOrRef ?? "").trim();

-  const fromSummary = READ_SUMMARY_RE.exec(summary);
-  if (fromSummary) {
-    const documentPath = fromSummary[1]!;
-    const startLine = Number(fromSummary[2]);
-    const endLine = Number(fromSummary[3]);
-    const totalLines = Number(fromSummary[4]);
-    const paren = (fromSummary[5] ?? "").toLowerCase();
-    const hasMoreToken = Boolean(fromSummary[6]);
+  const fromReturnedNone = READ_SUMMARY_RETURNED_NONE_RE.exec(summary);
+  if (fromReturnedNone) {
+    const documentPath = fromReturnedNone[1]!;
+    const startLine = Number(fromReturnedNone[2]);
+    const endLine = Number(fromReturnedNone[3]);
+    const totalLines = Number(fromReturnedNone[4]);
+    const paren = (fromReturnedNone[5] ?? "").toLowerCase();
+    const flags = (fromReturnedNone[6] ?? "").toLowerCase();
+    const truncated =
+      /\btruncated\b/.test(flags) ||
+      /\btruncat/.test(paren) ||
+      /\bcapped\b/.test(paren) ||
+      true;
+    const documentHasMore =
+      /\bdocumenthasmore\b/.test(flags) || endLine < totalLines;
+    const lineExceedsCap = /\blineexceedscap\b/.test(flags);
+    const partialMatch = /partialline:(\d+)/i.exec(flags);
+    const partialLineNumber = partialMatch
+      ? Number(partialMatch[1])
+      : startLine;
+    const nextStartLineHint = lineExceedsCap
+      ? startLine < totalLines
+        ? startLine + 1
+        : null
+      : partialLineNumber;
+    return {
+      documentPath,
+      startLine,
+      endLine,
+      returnedStartLine: startLine,
+      returnedEndLine: startLine - 1,
+      completeLineCount: 0,
+      partialLineNumber,
+      lineExceedsCap,
+      totalLines,
+      hasMore: true,
+      truncated,
+      documentHasMore,
+      nextStartLineHint,
+    };
+  }
+
+  const fromReturned = READ_SUMMARY_RETURNED_RE.exec(summary);
+  if (fromReturned) {
+    const documentPath = fromReturned[1]!;
+    const startLine = Number(fromReturned[2]);
+    const endLine = Number(fromReturned[3]);
+    const totalLines = Number(fromReturned[4]);
+    const returnedStartLine = Number(fromReturned[5]);
+    const returnedEndLine = Number(fromReturned[6]);
+    const paren = (fromReturned[7] ?? "").toLowerCase();
+    const flags = (fromReturned[8] ?? "").toLowerCase();
+    const truncated =
+      /\btruncated\b/.test(flags) ||
+      /\btruncat/.test(paren) ||
+      /\bcapped\b/.test(paren);
+    const documentHasMore =
+      /\bdocumenthasmore\b/.test(flags) ||
+      (!truncated && endLine < totalLines);
+    const hasMoreToken = /\bhasmore\b/.test(flags);
+    const hasMore =
+      hasMoreToken || truncated || documentHasMore || returnedEndLine < totalLines;
+    const lineExceedsCap = /\blineexceedscap\b/.test(flags);
+    const partialMatch = /partialline:(\d+)/i.exec(flags);
+    const partialLineNumber = partialMatch ? Number(partialMatch[1]) : null;
+    const completeLineCount =
+      returnedEndLine >= returnedStartLine
+        ? returnedEndLine - returnedStartLine + 1
+        : 0;
+    const nextStartLineHint =
+      partialLineNumber != null
+        ? partialLineNumber
+        : returnedEndLine < totalLines
+          ? returnedEndLine + 1
+          : null;
+    return {
+      documentPath,
+      startLine,
+      endLine,
+      returnedStartLine,
+      returnedEndLine,
+      completeLineCount,
+      partialLineNumber,
+      lineExceedsCap,
+      totalLines,
+      hasMore,
+      truncated,
+      documentHasMore,
+      nextStartLineHint,
+    };
+  }
+
+  const fromLegacy = READ_SUMMARY_LEGACY_RE.exec(summary);
+  if (fromLegacy) {
+    const documentPath = fromLegacy[1]!;
+    const startLine = Number(fromLegacy[2]);
+    const endLine = Number(fromLegacy[3]);
+    const totalLines = Number(fromLegacy[4]);
+    const paren = (fromLegacy[5] ?? "").toLowerCase();
+    const flags = (fromLegacy[6] ?? "").toLowerCase();
+    const hasMoreToken = /\bhasmore\b/.test(flags);
+    // Explicit truncation only — do NOT treat bare hasMore as truncated.
     const truncated =
-      /\btruncat/.test(paren) || /\bcapped\b/.test(paren) || hasMoreToken;
+      /\btruncated\b/.test(flags) ||
+      /\btruncat/.test(paren) ||
+      /\bcapped\b/.test(paren) ||
+      // Legacy L1-total + hasMore implies content cut (range claimed full).
+      (hasMoreToken && endLine >= totalLines && startLine === 1);
+    const documentHasMore =
+      /\bdocumenthasmore\b/.test(flags) ||
+      (!truncated && endLine < totalLines) ||
+      (hasMoreToken && endLine < totalLines && !truncated);
+    const hasMore =
+      hasMoreToken || truncated || documentHasMore || endLine < totalLines;
     return {
       documentPath,
       startLine,
       endLine,
+      // Legacy: cannot prove returned ≠ requested — treat requested as upper bound.
+      returnedStartLine: startLine,
+      returnedEndLine: endLine,
       totalLines,
-      hasMore: hasMoreToken || truncated || endLine < totalLines,
+      hasMore,
       truncated,
+      documentHasMore,
+      nextStartLineHint: endLine < totalLines ? endLine + 1 : null,
     };
   }

   const fromPath = PATH_RANGE_RE.exec(pathOrRef);
   if (fromPath) {
+    const startLine = Number(fromPath[2]);
+    const endLine = Number(fromPath[3]);
     return {
       documentPath: fromPath[1]!,
-      startLine: Number(fromPath[2]),
-      endLine: Number(fromPath[3]),
+      startLine,
+      endLine,
+      returnedStartLine: startLine,
+      returnedEndLine: endLine,
       hasMore: false,
       truncated: false,
+      documentHasMore: false,
     };
   }

@@ -100,8 +250,11 @@ export function parseGitLocalReadCoverageSignals(input: {
       documentPath: pathOrRef,
       startLine: 1,
       endLine: 1,
+      returnedStartLine: 1,
+      returnedEndLine: 1,
       hasMore: true,
       truncated: false,
+      documentHasMore: true,
     };
   }

@@ -111,18 +264,96 @@ export function parseGitLocalReadCoverageSignals(input: {
 export function classifyGitLocalReadCompleteness(
   parsed: ParsedReadRange,
 ): "full" | "partial" {
-  const { startLine, endLine, totalLines, hasMore, truncated } = parsed;
-  if (truncated || hasMore) return "partial";
+  const {
+    returnedStartLine,
+    returnedEndLine,
+    totalLines,
+    hasMore,
+    truncated,
+    documentHasMore,
+  } = parsed;
+  if (truncated || documentHasMore || hasMore) return "partial";
   if (typeof totalLines !== "number" || !Number.isFinite(totalLines)) {
     // pathOrRef-only range without total → cannot prove full document.
     return "partial";
   }
-  // CORR-01A hard rule: FULL only when L1-total and no hasMore/truncation.
-  // L100-N/N is PARTIAL even when endLine === totalLines.
-  if (startLine === 1 && endLine === totalLines) return "full";
+  // CORR-01A hard rule: FULL only when returned L1-total and no truncation/more.
+  if (returnedStartLine === 1 && returnedEndLine === totalLines) return "full";
   return "partial";
 }

+/**
+ * Honest union of *returned* line spans per document (not requested ranges).
+ * Never invents completeness percentages.
+ */
+export function unionReturnedLineSpans(facts: ReadCoverageFact[]): Array<{
+  documentPath: string;
+  spans: Array<{ start: number; end: number }>;
+  totalLines?: number;
+  provenFull: boolean;
+}> {
+  const byDoc = new Map<
+    string,
+    { spans: Array<{ start: number; end: number }>; totalLines?: number }
+  >();
+  for (const fact of facts) {
+    if (fact.coverage !== "full" && fact.coverage !== "partial") continue;
+    const doc = (fact.documentPath ?? fact.pathOrRef).trim();
+    if (!doc) continue;
+    const start = fact.returnedStartLine ?? fact.startLine;
+    const end = fact.returnedEndLine ?? fact.endLine;
+    if (
+      typeof start !== "number" ||
+      typeof end !== "number" ||
+      !Number.isFinite(start) ||
+      !Number.isFinite(end) ||
+      end < start ||
+      (typeof fact.completeLineCount === "number" && fact.completeLineCount <= 0)
+    ) {
+      // Empty / non-proven span (e.g. mid-line cut with 0 complete lines).
+      continue;
+    }
+    // Truncated facts still contribute the returned span only.
+    const entry = byDoc.get(doc) ?? { spans: [], totalLines: fact.totalLines };
+    if (typeof fact.totalLines === "number") entry.totalLines = fact.totalLines;
+    entry.spans.push({ start, end });
+    byDoc.set(doc, entry);
+  }
+
+  const out: Array<{
+    documentPath: string;
+    spans: Array<{ start: number; end: number }>;
+    totalLines?: number;
+    provenFull: boolean;
+  }> = [];
+
+  for (const [documentPath, entry] of byDoc) {
+    const sorted = [...entry.spans].sort((a, b) => a.start - b.start);
+    const merged: Array<{ start: number; end: number }> = [];
+    for (const span of sorted) {
+      const last = merged[merged.length - 1];
+      if (!last || span.start > last.end + 1) {
+        merged.push({ ...span });
+      } else {
+        last.end = Math.max(last.end, span.end);
+      }
+    }
+    const totalLines = entry.totalLines;
+    const docFacts = facts.filter(
+      (f) => (f.documentPath ?? f.pathOrRef).trim() === documentPath,
+    );
+    const anyTruncated = docFacts.some((f) => f.truncated === true);
+    const provenFull =
+      typeof totalLines === "number" &&
+      !anyTruncated &&
+      merged.length === 1 &&
+      merged[0]!.start === 1 &&
+      merged[0]!.end === totalLines;
+    out.push({ documentPath, spans: merged, totalLines, provenFull });
+  }
+  return out;
+}
+
 /**
  * Infer coverage for a single tool event row against the real EventSink shape.
  */
@@ -198,10 +429,16 @@ export function deriveReadCoverageFromToolEvent(input: {
     `L${parsed.startLine}-${parsed.endLine}${
       typeof parsed.totalLines === "number" ? `/${parsed.totalLines}` : ""
     }`,
+    `returned L${parsed.returnedStartLine}-${parsed.returnedEndLine}`,
   ];
   if (parsed.hasMore) signals.push("hasMore");
   if (parsed.truncated) signals.push("truncated");
-  if (coverage === "partial" && parsed.endLine === parsed.totalLines && parsed.startLine > 1) {
+  if (parsed.documentHasMore) signals.push("documentHasMore");
+  if (
+    coverage === "partial" &&
+    parsed.returnedEndLine === parsed.totalLines &&
+    parsed.returnedStartLine > 1
+  ) {
     signals.push("suffix_range_not_full");
   }

@@ -211,8 +448,16 @@ export function deriveReadCoverageFromToolEvent(input: {
     coverage,
     startLine: parsed.startLine,
     endLine: parsed.endLine,
+    returnedStartLine: parsed.returnedStartLine,
+    returnedEndLine: parsed.returnedEndLine,
+    completeLineCount: parsed.completeLineCount,
+    partialLineNumber: parsed.partialLineNumber,
+    lineExceedsCap: parsed.lineExceedsCap,
     totalLines: parsed.totalLines,
     hasMore: parsed.hasMore,
+    truncated: parsed.truncated,
+    documentHasMore: parsed.documentHasMore,
+    nextStartLineHint: parsed.nextStartLineHint,
     signals,
     origin: "current_turn",
   };
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index d518f509..93cbf75c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -24,6 +24,10 @@ import {
   resolveAdaptiveMaxTurns,
   type AdaptiveMaxTurnsDecision,
 } from "./adaptiveTurnBudget";
+import {
+  buildDocumentaryBudgetExhaustedText,
+  MODEL_TURN_BUDGET_REACHED_STOCK,
+} from "./documentaryBudgetExhausted";
 import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
 import {
   CONTINUATION_MAX_SEGMENTS,
@@ -657,8 +661,11 @@ export async function runNoraAgentsTurn(
   }) => {
     budget.limitReached = true;
     const lastText = extractTextFromRunItems(runData.newItems);
+    const fallback = buildDocumentaryBudgetExhaustedText({
+      items: Array.isArray(runData.newItems) ? runData.newItems : [],
+    });
     return {
-      finalOutput: lastText.trim() || "Model-turn budget reached (maxTurns).",
+      finalOutput: lastText.trim() || fallback,
       includeInHistory: false,
     };
   };
@@ -835,15 +842,14 @@ export async function runNoraAgentsTurn(
             segmentsExecuted += 1;
             allottedTurns = absoluteCap;
             const state = segmentError.state;
+            const segmentItems = Array.isArray(
+              (segmentError as { newItems?: unknown[] }).newItems,
+            )
+              ? ((segmentError as { newItems?: unknown[] }).newItems as unknown[])
+              : [];
             const partial =
-              extractTextFromRunItems(
-                Array.isArray(
-                  (segmentError as { newItems?: unknown[] }).newItems,
-                )
-                  ? ((segmentError as { newItems?: unknown[] })
-                      .newItems as unknown[])
-                  : [],
-              ) || "Model-turn budget reached (maxTurns).";
+              extractTextFromRunItems(segmentItems) ||
+              buildDocumentaryBudgetExhaustedText({ items: segmentItems });

             if (
               continuationPlan.enable &&
@@ -1006,6 +1012,51 @@ export async function runNoraAgentsTurn(
     effectiveMaxTurns: maxTurns,
   };

+  // Axe A — bounded observability (no secrets, no document body, no CoT).
+  if (input.sink) {
+    input.sink.emit({
+      type: "ADAPTIVE_BUDGET_OBSERVED",
+      correlationId: input.correlationId,
+      detail: {
+        projectId: input.projectId,
+        strategyClass: adaptiveObserve.strategyClass,
+        requestedMaxTurns: adaptiveObserve.requestedMaxTurns,
+        effectiveMaxTurns: adaptiveObserve.effectiveMaxTurns,
+        floor: adaptiveObserve.floor,
+        ceiling: adaptiveObserve.ceiling,
+        explicitOverride: adaptiveObserve.explicitOverride,
+        reasonCodes: adaptiveObserve.reasonCodes,
+        limitReached: budget.limitReached || budgetStop,
+        toolCalls: budget.executedToolCalls,
+        model:
+          typeof model === "string"
+            ? model
+            : usage.model ?? null,
+        provenance: adaptiveObserve.explicitOverride
+          ? "explicit_override"
+          : "adaptive_policy",
+      },
+    });
+    input.sink.emit({
+      type: "CONTINUATION_OBSERVED",
+      correlationId: input.correlationId,
+      detail: {
+        projectId: input.projectId,
+        continued: continuationObserve.continued,
+        segmentsExecuted: continuationObserve.segmentsExecuted,
+        missionMaxTurns: continuationObserve.missionMaxTurns,
+        segmentMaxTurns: continuationObserve.segmentMaxTurns,
+        allottedTurns: continuationObserve.allottedTurns,
+        stopReason: continuationObserve.stopReason,
+        reasonCodes: continuationObserve.reasonCodes,
+        limitReached: budget.limitReached || budgetStop,
+        stockFallbackUsed:
+          typeof text === "string" &&
+          text.includes(MODEL_TURN_BUDGET_REACHED_STOCK),
+      },
+    });
+  }
+
   return {
     text,
     usage,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 6e2d8633..30bffc46 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -36,8 +36,10 @@ import {
 } from "./cognitiveWorkloadPolicy";
 import {
   inferWorkloadHintsFromUserContent,
+  isNaturalMonoFileDocumentaryRequest,
   resolveAdaptiveMaxTurns,
 } from "./adaptiveTurnBudget";
+import { appendDocumentaryReadGuidance } from "./documentaryReadGuidance";
 import { validateRuntimeReasoningCapability } from "./reasoningCapability";
 import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";
 import {
@@ -879,6 +881,10 @@ export async function runNoraCognitiveTurn(
       systemInstructions,
       readDisclosure,
     );
+    systemInstructions = appendDocumentaryReadGuidance(
+      systemInstructions,
+      isNaturalMonoFileDocumentaryRequest(lastUser.content),
+    );
     const turn = await runNoraCognitiveCore({
       cognitiveMode: "conversation",
       correlationId: input.correlationId,
@@ -1048,6 +1054,10 @@ export async function runNoraCognitiveTurn(
     systemInstructions,
     mw4Prep.readCoverageDisclosure,
   );
+  systemInstructions = appendDocumentaryReadGuidance(
+    systemInstructions,
+    isNaturalMonoFileDocumentaryRequest(lastUser.content),
+  );
   if (engageMw6 && sourceStrategy) {
     systemInstructions = appendSourceStrategyDisclosure(
       systemInstructions,
diff --git a/projects/sfia-studio/app/lib/platform/observability/types.ts b/projects/sfia-studio/app/lib/platform/observability/types.ts
index f1254ffc..39bb2878 100644
--- a/projects/sfia-studio/app/lib/platform/observability/types.ts
+++ b/projects/sfia-studio/app/lib/platform/observability/types.ts
@@ -16,7 +16,9 @@ export type TechnicalEventType =
   | "TOOL_LOOP_COMPLETED"
   | "TOOL_LOOP_LIMIT_REACHED"
   | "COGNITIVE_STRATEGY_SELECTED"
-  | "COGNITIVE_ROUTING_SELECTED";
+  | "COGNITIVE_ROUTING_SELECTED"
+  | "ADAPTIVE_BUDGET_OBSERVED"
+  | "CONTINUATION_OBSERVED";

 export interface TechnicalEvent {
   type: TechnicalEventType;
diff --git a/projects/sfia-studio/app/lib/platform/tools/types.ts b/projects/sfia-studio/app/lib/platform/tools/types.ts
index 00c5b8b3..042b53ff 100644
--- a/projects/sfia-studio/app/lib/platform/tools/types.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/types.ts
@@ -173,7 +173,7 @@ export const CONTROL_TOWER_TOOL_DEFINITIONS: ToolDefinition[] = [
   {
     name: "git_local_read_file",
     description:
-      "Read a UTF-8 text file relative to repo root. Optional startLine/endLine (1-based inclusive) for deep/ranged reads. truncated/hasMore mean the document was not fully obtained. Paths validated server-side. Read-only.",
+      "Read a UTF-8 text file relative to repo root. Optional startLine/endLine (1-based inclusive). Result fields: requested vs returned line ranges; truncated=true means the requested range was cut by size caps; documentHasMore=true means later lines exist after the requested end; nextStartLineHint is the next line to request. Prefer small windows that fit under the char cap; continue from nextStartLineHint; do not re-read already returned prefixes; leave a turn for a clearly PARTIAL synthesis before the mission turn budget ends. Paths validated server-side. Read-only.",
     parameters: {
       type: "object",
       properties: {

```

### N.CREATED — `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts`

```typescript
/**
 * P6-MIN-09 — Documentary Cognitive Reliability Correction 01 (deterministic).
 * ZERO REAL / ZERO provider calls.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import {
  ADAPTIVE_MAX_TURNS_CEILING,
  ProductSqliteSession,
  buildDocumentaryBudgetExhaustedText,
  decideCognitiveStrategy,
  inferWorkloadHintsFromUserContent,
  isNaturalMonoFileDocumentaryRequest,
  normalizeCognitiveWorkloadSignals,
  parseGitLocalReadCoverageSignals,
  resolveAdaptiveMaxTurns,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
  unionReturnedLineSpans,
} from "@/lib/nora-cognitive-runtime";
import {
  GitLocalReadAdapter,
  countCompleteReturnedLines,
} from "@/lib/platform/repository/gitLocalReadAdapter";
import { CT_MAX_TOOL_RESULT_CHARS } from "@/lib/platform/tools/types";
import {
  createToolCallId,
  prepareGitLocalReadDataForModel,
  prepareToolDataForModel,
  routeToolCall,
  toolResultForModel,
} from "@/lib/platform/tools/toolRouter";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { redactSecrets } from "@/lib/platform/security/redaction";

const T1_PROMPT = `Nora, j'ai un document dans notre dépôt Git qui pourrait nous être utile pour ce projet :
projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md
Tu peux le consulter et m'en faire une synthèse de ce que tu en retiens ?`;

const dirs: string[] = [];

function tmpGitRepo(lineCount: number, lineWidth = 40): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-doc-"));
  dirs.push(dir);
  const rel = "projects/sfia-studio/docs/min09-doc.md";
  fs.mkdirSync(path.join(dir, "projects/sfia-studio/docs"), { recursive: true });
  const body = Array.from({ length: lineCount }, (_, i) => {
    const n = i + 1;
    return `L${n} ${"x".repeat(Math.max(0, lineWidth - 4))}`;
  }).join("\n");
  fs.writeFileSync(path.join(dir, rel), body, "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: dir,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

/** Fiction-only secret markers — never real credentials. */
const FAKE = {
  openaiKeyLine: "OPENAI_API_KEY=sk-[FIXTURE_REDACTED_KEY]",
  skToken: "sk-[FIXTURE_REDACTED]",
  ghpToken: "ghp_[FIXTURE_REDACTED]",
  bearer: "Authorization: Bearer [FIXTURE_BEARER_REDACTED]",
} as const;

function tmpGitRepoWithLines(lines: string[], rel = "projects/sfia-studio/docs/min09-doc.md"): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-sec-"));
  dirs.push(dir);
  fs.mkdirSync(path.join(dir, path.dirname(rel)), { recursive: true });
  fs.writeFileSync(path.join(dir, rel), lines.join("\n"), "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: dir,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

function assertNoFakeSecrets(text: string): void {
  expect(text).not.toContain("sk-[FIXTURE_REDACTED]");
  expect(text).not.toContain("ghp_[FIXTURE_REDACTED]");
  expect(text).not.toContain("OPENAI_API_KEY=sk-");
  expect(text).not.toContain("Bearer fake-min09");
  expect(text).not.toContain(FAKE.skToken);
  expect(text).not.toContain(FAKE.ghpToken);
}

function completeLinesFromContent(content: string): string[] {
  let body = content;
  if (body.endsWith("\n…[truncated]")) body = body.slice(0, -"\n…[truncated]".length);
  else if (body === "…[truncated]") return [];
  else if (body.endsWith("…[truncated]")) body = body.slice(0, -"…[truncated]".length);
  if (body.length === 0) return [];
  return body.split("\n");
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("P6-MIN-09 — Axe B natural mono-file qualification", () => {
  it("T1 natural prompt → toolDependency high, NOT sourceBreadth high", () => {
    expect(isNaturalMonoFileDocumentaryRequest(T1_PROMPT)).toBe(true);
    const hints = inferWorkloadHintsFromUserContent(T1_PROMPT);
    expect(hints.toolDependency).toBe("high");
    expect(hints.reasoningDepth).toBe("medium");
    expect(hints.sourceBreadth).toBeUndefined();
  });

  it("bare 'document' alone does not elevate", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Nora, j'ai un document intéressant.",
    );
    expect(hints.toolDependency).toBeUndefined();
    expect(isNaturalMonoFileDocumentaryRequest("Nora, j'ai un document.")).toBe(
      false,
    );
  });

  it("T1 hints → Focused budget ≥8 and ≤ ceiling (no FinOps widen)", () => {
    const hints = inferWorkloadHintsFromUserContent(T1_PROMPT);
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals(hints),
    });
    expect(strategy.strategyClass).toBe("Focused");
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
      ADAPTIVE_MAX_TURNS_CEILING,
    );
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(10);
  });
});

describe("P6-MIN-09 — R1 returned-range accuracy + coverage flags", () => {
  it("Case A — mid-line cut: partial line not credited; hint retries that line", () => {
    // Fixed-width ASCII lines; byte cap cuts inside line 3.
    const lineWidth = 40;
    const root = tmpGitRepo(10, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    // L1 + NL + L2 + NL + partial L3
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 10; // mid line 3
    const r = adapter.readFile(
      "projects/sfia-studio/docs/min09-doc.md",
      maxBytes,
      { startLine: 1, endLine: 10 },
    );
    expect(r.truncated).toBe(true);
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(2);
    expect(r.partialLineNumber).toBe(3);
    expect(r.nextStartLineHint).toBe(3);
    expect(r.content).toContain("L2 ");
    expect(r.content).not.toContain("L3 ");
    expect(r.summary).toMatch(/partialLine:3/);
  });

  it("Case B — cut exactly between lines (no partial line)", () => {
    const lineWidth = 30;
    const root = tmpGitRepo(8, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8");
    const r = adapter.readFile(
      "projects/sfia-studio/docs/min09-doc.md",
      maxBytes,
      { startLine: 1, endLine: 8 },
    );
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(2);
    expect(r.partialLineNumber).toBeNull();
    expect(r.nextStartLineHint).toBe(3);
    expect(r.content).toContain("L2 ");
    expect(r.content).not.toContain("L3 ");
  });

  it("Case C — truncation via maxBytes", () => {
    const root = tmpGitRepo(20, 80);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 120, {
      startLine: 1,
      endLine: 20,
    });
    expect(r.truncated).toBe(true);
    expect(r.completeLineCount).toBeGreaterThan(0);
    expect(r.returnedEndLine).toBeLessThan(20);
    // Content only contains credited complete lines.
    expect(r.content).toMatch(/^L1 /);
    expect(r.content.includes(`L${r.returnedEndLine + 1} `)).toBe(false);
  });

  it("Case D — truncation via CT_MAX_TOOL_RESULT_CHARS", () => {
    const wide = Math.ceil(CT_MAX_TOOL_RESULT_CHARS / 3) + 20;
    const root = tmpGitRepo(20, wide);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 10,
    });
    expect(r.truncated).toBe(true);
    expect(r.returnedEndLine).toBeLessThan(r.requestedEndLine);
    expect(r.nextStartLineHint).toBeGreaterThanOrEqual(r.returnedEndLine + 1);
    expect(r.summary).toMatch(/\btruncated\b/);
    // No line beyond returnedEndLine appears complete in content.
    expect(r.content.includes(`L${r.returnedEndLine + 1} `)).toBe(false);
  });

  it("Case E — single line exceeds cap: not complete, no infinite loop hint", () => {
    const huge = CT_MAX_TOOL_RESULT_CHARS + 500;
    const root = tmpGitRepo(3, huge);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 1,
    });
    expect(r.lineExceedsCap).toBe(true);
    expect(r.completeLineCount).toBe(0);
    expect(r.returnedEndLine).toBe(0); // startLine(1) - 1
    expect(r.nextStartLineHint).toBe(2); // explicit skip past unblockable line
    expect(r.content).toBe("…[truncated]");
    expect(r.summary).toMatch(/returned none/);
    expect(r.summary).toMatch(/lineExceedsCap/);
  });

  it("Case F/G — successive reads: no skipped fittable lines; finite progress", () => {
    const lineWidth = 50;
    const root = tmpGitRepo(12, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 8;
    const seen = new Set<number>();
    let start = 1;
    for (let step = 0; step < 20 && start <= 12; step++) {
      const r = adapter.readFile(
        "projects/sfia-studio/docs/min09-doc.md",
        maxBytes,
        { startLine: start, endLine: 12 },
      );
      if (r.completeLineCount > 0) {
        for (let ln = r.returnedStartLine; ln <= r.returnedEndLine; ln++) {
          expect(seen.has(ln)).toBe(false);
          seen.add(ln);
        }
      }
      if (r.lineExceedsCap) {
        // Must advance hint to avoid infinite loop.
        expect(r.nextStartLineHint).toBeGreaterThan(start);
      }
      const next = r.nextStartLineHint;
      if (next == null || next <= start) break;
      // Fittable partial line: retry same line once with smaller exclusive window.
      if (r.partialLineNumber === next && r.completeLineCount > 0) {
        start = next;
      } else {
        start = next;
      }
    }
    // All fittable lines 1..12 must be coverable (none skipped silently).
    expect(seen.size).toBe(12);
  });

  it("Case H — overlapping returned spans union without false FULL", () => {
    const facts = [
      {
        pathOrRef: "doc.md#L1-50",
        documentPath: "doc.md",
        coverage: "partial" as const,
        returnedStartLine: 1,
        returnedEndLine: 50,
        totalLines: 100,
        truncated: false,
        documentHasMore: true,
        hasMore: true,
      },
      {
        pathOrRef: "doc.md#L40-80",
        documentPath: "doc.md",
        coverage: "partial" as const,
        returnedStartLine: 40,
        returnedEndLine: 80,
        totalLines: 100,
        truncated: false,
        documentHasMore: true,
        hasMore: true,
      },
    ];
    const unions = unionReturnedLineSpans(facts);
    expect(unions[0]?.spans).toEqual([{ start: 1, end: 80 }]);
    expect(unions[0]?.provenFull).toBe(false);
  });

  it("Case I — short range fully received", () => {
    const root = tmpGitRepo(20, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 2,
      endLine: 3,
    });
    expect(r.truncated).toBe(false);
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(3);
    expect(r.documentHasMore).toBe(true);
    expect(r.content).toContain("L2 ");
    expect(r.content).toContain("L3 ");
  });

  it("Case J — full small document without truncation", () => {
    const root = tmpGitRepo(5, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536);
    expect(r.truncated).toBe(false);
    expect(r.documentHasMore).toBe(false);
    expect(r.completeLineCount).toBe(5);
    expect(r.returnedEndLine).toBe(5);
    expect(r.nextStartLineHint).toBeNull();
  });

  it("Case K/L — hasMore distinct from truncated; documentHasMore distinct", () => {
    const root = tmpGitRepo(30, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 5,
    });
    expect(r.truncated).toBe(false);
    expect(r.documentHasMore).toBe(true);
    expect(r.hasMore).toBe(true);
    expect(r.summary).toMatch(/documentHasMore/);
    expect(r.summary).not.toMatch(/\btruncated\b/);
  });

  it("Case M — no FULL claim when L1-total requested but truncated", () => {
    const summary =
      "read doc.md L1-100/100 returned L1-12 (12013 chars) truncated hasMore";
    const parsed = parseGitLocalReadCoverageSignals({ summary });
    expect(parsed?.truncated).toBe(true);
    expect(parsed?.returnedEndLine).toBe(12);
    expect(parsed?.startLine).toBe(1);
    expect(parsed?.endLine).toBe(100);
  });

  it("Case N — legacy summaries still parse", () => {
    const full = parseGitLocalReadCoverageSignals({
      summary: "read docs/a.md L1-10/10 (100 chars)",
    });
    expect(full?.returnedEndLine).toBe(10);
    const legacyMore = parseGitLocalReadCoverageSignals({
      summary: "read docs/e.md L1-10/50 (100 chars) hasMore",
    });
    expect(legacyMore?.hasMore).toBe(true);
    expect(legacyMore?.truncated).toBe(false);
    expect(legacyMore?.documentHasMore).toBe(true);
  });

  it("Case O — UTF-8 multibyte: mid-cut does not credit partial line", () => {
    const lines = ["aa", "éééééééééé", "bb"]; // accented chars are 2 bytes
    const body = "aa\néé"; // cuts inside second line
    const counted = countCompleteReturnedLines({
      lines,
      startLine: 1,
      endLine: 3,
      body,
    });
    expect(counted.completeLineCount).toBe(1);
    expect(counted.partialLineNumber).toBe(2);
  });

  it("ToolRouter usage.truncated is content-cut only (not documentHasMore)", async () => {
    const root = tmpGitRepo(20, 20);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: "projects/sfia-studio/docs/min09-doc.md",
          startLine: 1,
          endLine: 3,
        },
        sessionId: "min09",
      },
      {
        workspaceRoot: root,
        sink: { emit: (e) => events.push(e) },
      },
    );
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.usage.truncated).toBe(false);
      const data = result.data as {
        documentHasMore?: boolean;
        truncated?: boolean;
        nextStartLineHint?: number | null;
        completeLineCount?: number;
      };
      expect(data.documentHasMore).toBe(true);
      expect(data.truncated).toBe(false);
      expect(data.completeLineCount).toBe(3);
      expect(data.nextStartLineHint).toBe(4);
    }
  });
});

describe("P6-MIN-09 — Axe A/E/F observability + honest incomplete", () => {
  it("emits ADAPTIVE_BUDGET_OBSERVED + CONTINUATION_OBSERVED", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-sess-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-obs",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const events: TechnicalEvent[] = [];
    const model = new ScriptedModel([
      [assistantMessage("Synthèse partielle déterministe OK.")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-obs",
      projectId: "prj:min09-obs",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: false,
      cognitiveStrategyClass: "Focused",
      sink: { emit: (e) => events.push(e) },
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain("Synthèse partielle");
    expect(events.some((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED")).toBe(
      true,
    );
    expect(events.some((e) => e.type === "CONTINUATION_OBSERVED")).toBe(true);
    const adaptive = events.find((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED");
    expect(adaptive?.detail.requestedMaxTurns).toBeTruthy();
    expect(adaptive?.detail.ceiling).toBe(10);
    session.close();
  });

  it("budget exhausted with tool crumbs → honest disclosure, not bare stock alone when facts exist", () => {
    const text = buildDocumentaryBudgetExhaustedText({
      items: [
        {
          type: "function_call_result",
          name: "git_local_read_file",
          output: {
            text: JSON.stringify({
              ok: true,
              summary:
                "read projects/x.md L1-250/1664 returned L1-64 (12013 chars) truncated documentHasMore hasMore",
              data: {
                path: "projects/x.md",
                truncated: true,
                documentHasMore: true,
                returnedStartLine: 1,
                returnedEndLine: 64,
                totalLines: 1664,
                nextStartLineHint: 65,
              },
            }),
          },
        },
      ],
    });
    expect(text).toContain("Model-turn budget reached (maxTurns).");
    expect(text).toContain("inachevée");
    expect(text).toContain("projects/x.md");
    expect(text).toContain("L1-64");
    expect(text).toContain("65");
    expect(text).not.toMatch(/HumanDecision inventée|Deliverable validé/i);
  });

  it("ScriptedModel documentary: synthesis before stop when budget allows", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-syn-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-syn",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 40,
          },
          { callId: "r1" },
        ),
      ],
      [
        assistantMessage(
          "PARTIEL — synthèse déterministe des portions lues (pas une couverture intégrale).",
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-syn",
      projectId: "prj:min09-syn",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: true,
      maxTurns: 8,
      enableControlledContinuation: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toMatch(/PARTIEL/);
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBeLessThanOrEqual(10);
    session.close();
  });

  it("P0 — exhausted mission without text stays incomplete (limitReached)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-p0-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-p0",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "a" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "b" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "c" },
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-p0",
      projectId: "prj:min09-p0",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: true,
      maxTurns: 2,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    session.close();
  });
});

describe("P6-MIN-09 — R2 Runner maxTurns restitution integration", () => {
  it("Runner soft maxTurns + real git tool → honest disclosure from newItems", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 40,
          },
          { callId: "r2a" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 40,
          },
          { callId: "r2b" },
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2",
      projectId: "prj:min09-r2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Consulte projects/sfia-studio/app/package.json et fais-en une synthèse.",
      session,
      model,
      enableTools: true,
      maxTurns: 1,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    expect(result.text).toContain("Analyse documentaire inachevée");
    expect(result.text).toContain("projects/sfia-studio/app/package.json");
    expect(result.text).toMatch(/L1-\d+/);
    expect(result.text).not.toMatch(/couverture intégrale prouvée/);
    // Must not invent document body synthesis.
    expect(result.text).not.toMatch(/\"name\"\s*:\s*\"sfia-studio\"/);
    const items = await session.getItems();
    const toolResults = items.filter(
      (it) =>
        (it as { type?: string }).type === "function_call_result" &&
        (it as { name?: string }).name === "git_local_read_file",
    );
    expect(toolResults.length).toBeGreaterThanOrEqual(1);
    const shaped = toolResults[0] as {
      output?: { type?: string; text?: string };
    };
    expect(shaped.output?.type).toBe("text");
    expect(typeof shaped.output?.text).toBe("string");
    session.close();
  });

  it("Runner multi-segment continuation still surfaces tool coverage on exhaust", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2c-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2c",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const script = Array.from({ length: 8 }, (_, i) => [
      functionCall(
        "git_local_read_file",
        {
          path: "projects/sfia-studio/app/package.json",
          startLine: 1,
          endLine: 5,
        },
        { callId: `seg${i + 1}` },
      ),
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2c",
      projectId: "prj:min09-r2c",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Consulte projects/sfia-studio/app/package.json et fais-en une synthèse.",
      session,
      model: new ScriptedModel(script),
      enableTools: true,
      maxTurns: 8,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Focused",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.continuationObserve?.continued).toBe(true);
    expect(result.continuationObserve?.segmentsExecuted).toBeGreaterThanOrEqual(
      2,
    );
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("package.json");
    expect(result.text).toContain("inachevée");
    session.close();
  });

  it("failed tool / no readable facts → generic stock fallback preserved", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2n-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2n",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2n",
      projectId: "prj:min09-r2n",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "continue",
      session,
      model: new ScriptedModel([
        [
          functionCall(
            "git_local_read_file",
            {
              path: "projects/sfia-studio/docs/does-not-exist-min09.md",
            },
            { callId: "missing" },
          ),
        ],
      ]),
      enableTools: true,
      maxTurns: 1,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    // Failed tool must not invent coverage — stock-only (or stock without path spans).
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    expect(result.text).not.toContain("Périmètre réellement remis");
    session.close();
  });
});

describe("P6-MIN-09 — R4 redaction / documentary progression", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R4-A — document without secrets: unchanged honest coverage", () => {
    const root = tmpGitRepo(8, 40);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 8 });
    expect(r.completeLineCount).toBe(8);
    expect(r.returnedStartLine).toBe(1);
    expect(r.returnedEndLine).toBe(8);
    expect(r.truncated).toBe(false);
    expect(r.content).toContain("L1 ");
    expect(r.content).toContain("L8 ");
  });

  it("R4-B/C/D/E — secret patterns redacted; complete line still credited", () => {
    const lines = [
      "intro safe",
      FAKE.openaiKeyLine,
      `token ${FAKE.skToken} mid`,
      `auth ${FAKE.ghpToken}`,
      FAKE.bearer,
      "outro safe",
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 6 });
    expect(r.completeLineCount).toBe(6);
    expect(r.returnedEndLine).toBe(6);
    expect(r.nextStartLineHint).toBeNull();
    assertNoFakeSecrets(r.content);
    expect(r.content).toContain("[redacted]");
    expect(r.content).toContain("intro safe");
    expect(r.content).toContain("outro safe");
  });

  it("R4-F/G — redacted line mid-doc and at range start still progresses", () => {
    const mid = [
      "L1 ok",
      "L2 ok",
      `L3 ${FAKE.skToken}`,
      "L4 ok",
      "L5 ok",
    ];
    const rootMid = tmpGitRepoWithLines(mid);
    const aMid = new GitLocalReadAdapter(rootMid);
    const rMid = aMid.readFile(DOC, 32768, { startLine: 1, endLine: 5 });
    expect(rMid.completeLineCount).toBe(5);
    expect(rMid.returnedEndLine).toBe(5);
    assertNoFakeSecrets(rMid.content);

    const start = [`${FAKE.ghpToken}`, "L2 ok", "L3 ok"];
    const rootStart = tmpGitRepoWithLines(start);
    const aStart = new GitLocalReadAdapter(rootStart);
    const rStart = aStart.readFile(DOC, 32768, { startLine: 1, endLine: 3 });
    expect(rStart.completeLineCount).toBe(3);
    expect(rStart.returnedStartLine).toBe(1);
    expect(rStart.returnedEndLine).toBe(3);
    assertNoFakeSecrets(rStart.content);
  });

  it("R4-H/I — truncation before/on sensitive line keeps secrets out and hints honest", () => {
    const lineWidth = 40;
    const sensitive = `SEC ${FAKE.skToken} ${"y".repeat(20)}`;
    const lines = [
      `L1 ${"x".repeat(lineWidth - 4)}`,
      `L2 ${"x".repeat(lineWidth - 4)}`,
      sensitive,
      `L4 ${"x".repeat(lineWidth - 4)}`,
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    // Cap bytes so only L1+L2 fit (same pattern as R1 Case A).
    const twoFull = `${lines[0]}\n${lines[1]}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 10;
    const r = adapter.readFile(DOC, maxBytes, { startLine: 1, endLine: 4 });
    expect(r.completeLineCount).toBeLessThan(4);
    expect(r.returnedEndLine).toBeLessThan(4);
    assertNoFakeSecrets(r.content);
    expect(r.nextStartLineHint).toBe(r.returnedEndLine + 1);
  });

  it("R4-J — successive reads progress past redacted lines (no loop)", () => {
    const lines = Array.from({ length: 12 }, (_, i) =>
      i === 3 ? `L4 ${FAKE.openaiKeyLine}` : `L${i + 1} plain-${i + 1}`,
    );
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    let start = 1;
    const seen = new Set<number>();
    for (let i = 0; i < 6; i++) {
      const r = adapter.readFile(DOC, 200, { startLine: start, endLine: start + 2 });
      assertNoFakeSecrets(r.content);
      if (r.completeLineCount > 0) {
        for (let ln = r.returnedStartLine; ln <= r.returnedEndLine; ln++) {
          expect(seen.has(ln)).toBe(false);
          seen.add(ln);
        }
        expect(r.nextStartLineHint).toBe(
          r.returnedEndLine < r.totalLines ? r.returnedEndLine + 1 : null,
        );
        if (r.nextStartLineHint == null) break;
        start = r.nextStartLineHint;
      } else {
        expect(r.nextStartLineHint).not.toBeNull();
        start = r.nextStartLineHint!;
      }
    }
    expect(seen.size).toBeGreaterThanOrEqual(4);
    expect(seen.has(4)).toBe(true);
  });

  it("R4-K — lineExceedsCap remains explicit on oversize redacted line", () => {
    const huge = `${"Z".repeat(CT_MAX_TOOL_RESULT_CHARS + 500)} ${FAKE.skToken}`;
    const root = tmpGitRepoWithLines([huge, "L2 ok"]);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 1 });
    expect(r.completeLineCount).toBe(0);
    expect(r.lineExceedsCap).toBe(true);
    expect(r.nextStartLineHint).toBe(2);
    assertNoFakeSecrets(r.content);
  });

  it("R4-L/M — no secret reintroduction in adapter/tool/session/events; JSON valid", async () => {
    const lines = [
      "alpha",
      FAKE.openaiKeyLine,
      `beta ${FAKE.skToken}`,
      FAKE.bearer,
      "omega",
    ];
    const root = tmpGitRepoWithLines(lines);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r4-l",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      {
        workspaceRoot: root,
        sink: { emit: (e) => events.push(e) },
      },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const data = result.data as Record<string, unknown>;
    assertNoFakeSecrets(String(data.content ?? ""));
    assertNoFakeSecrets(result.summary ?? "");
    const modelVisible = toolResultForModel(result);
    expect(() => JSON.parse(modelVisible)).not.toThrow();
    assertNoFakeSecrets(modelVisible);
    const parsed = JSON.parse(modelVisible) as {
      data: { completeLineCount: number; returnedEndLine: number; content: string };
    };
    expect(parsed.data.completeLineCount).toBe(5);
    expect(parsed.data.returnedEndLine).toBe(5);
    expect(parsed.data.content).toContain("[redacted]");

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r4s-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r4s",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: DOC, startLine: 1, endLine: 5 },
          { callId: "r4s" },
        ),
      ],
      [assistantMessage("Synthèse partielle sans secret.")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r4s",
      projectId: "prj:min09-r4s",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC} et synthétise.`,
      session,
      model,
      enableTools: true,
      maxTurns: 4,
      enableControlledContinuation: false,
      workspaceRoot: root,
      sink: { emit: (e) => events.push(e) },
    });
    assertNoFakeSecrets(turn.text);
    const items = await session.getItems();
    for (const it of items) {
      assertNoFakeSecrets(JSON.stringify(it));
    }
    for (const e of events) {
      assertNoFakeSecrets(JSON.stringify(e));
    }
    session.close();
  });

  it("R4-N — UTF-8 multibyte redacted line still counts complete", () => {
    const lines = [
      "café résumé — ligne 1",
      `clé ${FAKE.skToken} 日本語`,
      "ligne trois ✓",
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 3 });
    expect(r.completeLineCount).toBe(3);
    expect(r.returnedEndLine).toBe(3);
    assertNoFakeSecrets(r.content);
    expect(r.content).toContain("café");
    expect(r.content).toContain("日本語");
  });
});

describe("P6-MIN-09 — R5 double truncation / final payload truth", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R5-A — small document: no second truncation; metadata matches content", async () => {
    const root = tmpGitRepo(5, 30);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5a",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const modelVisible = toolResultForModel(result);
    expect(modelVisible.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(modelVisible) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        truncated: boolean;
        documentHasMore: boolean;
      };
    };
    const lines = completeLinesFromContent(parsed.data.content);
    expect(lines.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    expect(parsed.data.truncated).toBe(false);
    expect(parsed.data.documentHasMore).toBe(false);
  });

  it("R5-B/C/D/E/F/H/I — near/over JSON ceiling: final metadata matches complete lines", () => {
    // Wide lines so adapter returns many complete lines near 12k; envelope forces second cut.
    const lineWidth = 80;
    const lineCount = 200;
    const root = tmpGitRepo(lineCount, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const adapterRead = adapter.readFile(DOC, 32768, {
      startLine: 1,
      endLine: 180,
    });
    expect(adapterRead.completeLineCount).toBeGreaterThan(50);

    // Force a tight ceiling below adapter content to exercise second cut.
    const tight = Math.min(
      CT_MAX_TOOL_RESULT_CHARS,
      Math.max(800, Math.floor(adapterRead.content.length * 0.55) + 400),
    );
    const prepared = prepareGitLocalReadDataForModel(
      {
        path: adapterRead.path,
        content: adapterRead.content,
        truncated: adapterRead.truncated,
        documentHasMore: adapterRead.documentHasMore,
        hasMore: adapterRead.hasMore,
        startLine: adapterRead.startLine,
        endLine: adapterRead.endLine,
        requestedStartLine: adapterRead.requestedStartLine,
        requestedEndLine: adapterRead.requestedEndLine,
        returnedStartLine: adapterRead.returnedStartLine,
        returnedEndLine: adapterRead.returnedEndLine,
        completeLineCount: adapterRead.completeLineCount,
        partialLineNumber: adapterRead.partialLineNumber,
        lineExceedsCap: adapterRead.lineExceedsCap,
        totalLines: adapterRead.totalLines,
        nextStartLineHint: adapterRead.nextStartLineHint,
      },
      tight,
    );
    const envelope = redactSecrets(
      JSON.stringify({
        ok: true,
        summary: prepared.summary,
        data: prepared.data,
        truncated: prepared.truncated,
      }),
    );
    expect(envelope.length).toBeLessThanOrEqual(tight);
    expect(() => JSON.parse(envelope)).not.toThrow();
    const data = prepared.data;
    const lines = completeLinesFromContent(String(data.content ?? ""));
    expect(lines.length).toBe(data.completeLineCount);
    expect(data.returnedEndLine).toBe(
      (data.returnedStartLine as number) + (data.completeLineCount as number) - 1,
    );
    expect(data.completeLineCount as number).toBeLessThan(
      adapterRead.completeLineCount,
    );
    expect(data.truncated).toBe(true);
    expect(data.nextStartLineHint).toBe(
      (data.returnedEndLine as number) + 1,
    );
    // No silent skip past the first missing line.
    expect(data.nextStartLineHint).toBe(
      (data.returnedStartLine as number) + (data.completeLineCount as number),
    );
  });

  it("R5-G — toolResultForModel JSON.parse succeeds on routed git read", async () => {
    const root = tmpGitRepo(20, 50);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5g",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 20 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const raw = toolResultForModel(result);
    expect(() => JSON.parse(raw)).not.toThrow();
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(12000);
  });

  it("R5-J — documentHasMore without size cut stays truncated=false", async () => {
    const root = tmpGitRepo(30, 20);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5j",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const data = result.data as Record<string, unknown>;
    expect(data.documentHasMore).toBe(true);
    expect(data.truncated).toBe(false);
    expect(data.completeLineCount).toBe(5);
    expect(data.nextStartLineHint).toBe(6);
  });

  it("R5-K — FULL impossible when final payload cannot prove complete coverage", () => {
    const prepared = prepareGitLocalReadDataForModel(
      {
        path: DOC,
        content: "only one line",
        truncated: false,
        documentHasMore: true,
        hasMore: true,
        startLine: 1,
        endLine: 1,
        requestedStartLine: 1,
        requestedEndLine: 1,
        returnedStartLine: 1,
        returnedEndLine: 1,
        completeLineCount: 1,
        partialLineNumber: null,
        lineExceedsCap: false,
        totalLines: 100,
        nextStartLineHint: 2,
      },
      400,
    );
    const signals = parseGitLocalReadCoverageSignals({
      summary: prepared.summary,
      pathOrRef: DOC,
    });
    expect(signals?.documentHasMore || prepared.data.truncated).toBeTruthy();
    // Coverage helpers must not see a L1-total complete window.
    expect(prepared.data.totalLines).toBe(100);
    expect(prepared.data.returnedEndLine).not.toBe(100);
    expect(signals?.returnedEndLine).not.toBe(100);
  });

  it("R5-L/M — combined R4+R5: large doc with fake secret; no leak; honest meta", async () => {
    const lines = Array.from({ length: 120 }, (_, i) => {
      if (i === 10) return `L11 ${FAKE.openaiKeyLine}`;
      if (i === 40) return `L41 token=${FAKE.skToken}`;
      return `L${i + 1} ${"x".repeat(70)}`;
    });
    const root = tmpGitRepoWithLines(lines);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5l",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 120 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const modelVisible = toolResultForModel(result);
    expect(() => JSON.parse(modelVisible)).not.toThrow();
    assertNoFakeSecrets(modelVisible);
    expect(modelVisible.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(modelVisible) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        nextStartLineHint: number | null;
        truncated: boolean;
      };
    };
    const complete = completeLinesFromContent(parsed.data.content);
    expect(complete.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    if (parsed.data.completeLineCount < 120) {
      expect(parsed.data.truncated).toBe(true);
      expect(parsed.data.nextStartLineHint).toBe(
        parsed.data.returnedEndLine + 1,
      );
    }
  });

  it("R5-N — other tools still use prepareToolDataForModel without regression", () => {
    const prepared = prepareToolDataForModel(
      { porcelain: " M file.txt\n", truncated: false },
      CT_MAX_TOOL_RESULT_CHARS,
    );
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(() => JSON.parse(prepared.json)).not.toThrow();
    const obj = prepared.data as Record<string, unknown>;
    expect(obj.porcelain).toContain("file.txt");
  });

  it("R5-O — full path Git→Adapter→ToolRouter→model-visible→Runner", async () => {
    const lines = Array.from({ length: 80 }, (_, i) =>
      i === 5
        ? `L6 ${FAKE.bearer}`
        : `L${i + 1} ${"w".repeat(60)}`,
    );
    const root = tmpGitRepoWithLines(lines);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r5o-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r5o",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: DOC, startLine: 1, endLine: 80 },
          { callId: "r5o" },
        ),
      ],
      [assistantMessage("PARTIEL — couverture bornée du payload final.")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r5o",
      projectId: "prj:min09-r5o",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC} et synthétise.`,
      session,
      model,
      enableTools: true,
      maxTurns: 4,
      enableControlledContinuation: false,
      workspaceRoot: root,
    });
    expect(turn.limitReached).toBe(false);
    expect(turn.text).toMatch(/PARTIEL/);
    assertNoFakeSecrets(turn.text);
    const items = await session.getItems();
    const toolResults = items.filter(
      (it) =>
        (it as { type?: string }).type === "function_call_result" &&
        (it as { name?: string }).name === "git_local_read_file",
    );
    expect(toolResults.length).toBeGreaterThanOrEqual(1);
    const text = (toolResults[0] as { output?: { text?: string } }).output
      ?.text;
    expect(typeof text).toBe("string");
    assertNoFakeSecrets(text!);
    const parsed = JSON.parse(text!) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        nextStartLineHint: number | null;
      };
    };
    const complete = completeLinesFromContent(parsed.data.content);
    expect(complete.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    if (parsed.data.nextStartLineHint != null) {
      expect(parsed.data.nextStartLineHint).toBe(
        parsed.data.returnedEndLine + 1,
      );
    }
    session.close();
  });
});

```

### N.CREATED — `projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts`

```typescript
/**
 * Honest Product text when mission maxTurns is exhausted without extractable
 * assistant synthesis. Never invents document content from reasoning/tools.
 */
import {
  parseGitLocalReadCoverageSignals,
  unionReturnedLineSpans,
  type ReadCoverageFact,
} from "./readCoverage";

export const MODEL_TURN_BUDGET_REACHED_STOCK =
  "Model-turn budget reached (maxTurns).";

type ToolLikeItem = {
  type?: string;
  name?: string;
  rawItem?: { name?: string; type?: string };
  output?: unknown;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function extractToolResultPayload(item: ToolLikeItem): {
  summary?: string;
  data?: Record<string, unknown>;
} | null {
  const output = item.output;
  if (typeof output === "string") {
    try {
      const parsed = JSON.parse(output) as Record<string, unknown>;
      return {
        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
        data: asRecord(parsed.data) ?? undefined,
      };
    } catch {
      return null;
    }
  }
  const outObj = asRecord(output);
  if (!outObj) return null;
  if (typeof outObj.text === "string") {
    try {
      const parsed = JSON.parse(outObj.text) as Record<string, unknown>;
      return {
        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
        data: asRecord(parsed.data) ?? undefined,
      };
    } catch {
      return { summary: outObj.text.slice(0, 240) };
    }
  }
  return {
    summary: typeof outObj.summary === "string" ? outObj.summary : undefined,
    data: asRecord(outObj.data) ?? outObj,
  };
}

/**
 * Build coverage facts from Runner newItems / Session-like tool results.
 */
export function collectReadFactsFromRunItems(
  items: unknown[],
): ReadCoverageFact[] {
  const facts: ReadCoverageFact[] = [];
  for (const raw of items) {
    const item = asRecord(raw) as ToolLikeItem | null;
    if (!item) continue;
    const name =
      item.name ??
      item.rawItem?.name ??
      (typeof (item as { toolName?: string }).toolName === "string"
        ? (item as { toolName?: string }).toolName
        : undefined);
    const type = item.type ?? item.rawItem?.type;
    const isResult =
      type === "function_call_result" ||
      type === "tool_call_output_item" ||
      type === "function_call_output";
    if (!isResult && name !== "git_local_read_file") continue;
    if (name && name !== "git_local_read_file") continue;
    if (name !== "git_local_read_file" && !isResult) continue;

    const payload = extractToolResultPayload(item);
    if (!payload) continue;
    const data = payload.data ?? {};
    const summary =
      payload.summary ??
      (typeof data.summary === "string" ? data.summary : undefined);
    const path =
      (typeof data.path === "string" && data.path) ||
      (summary ? parseGitLocalReadCoverageSignals({ summary })?.documentPath : null);
    if (!path && !summary) continue;

    const parsed = parseGitLocalReadCoverageSignals({
      summary: summary ?? null,
      pathOrRef:
        typeof data.returnedStartLine === "number" &&
        typeof data.returnedEndLine === "number"
          ? `${path}#L${data.returnedStartLine}-${data.returnedEndLine}`
          : path,
    });
    if (!parsed) continue;

    const truncated =
      data.truncated === true || parsed.truncated === true;
    const documentHasMore =
      data.documentHasMore === true || parsed.documentHasMore === true;
    const returnedStartLine =
      typeof data.returnedStartLine === "number"
        ? data.returnedStartLine
        : parsed.returnedStartLine;
    const returnedEndLine =
      typeof data.returnedEndLine === "number"
        ? data.returnedEndLine
        : parsed.returnedEndLine;

    facts.push({
      pathOrRef: `${parsed.documentPath}#L${returnedStartLine}-${returnedEndLine}`,
      documentPath: parsed.documentPath,
      // Budget-exhausted disclosure never promotes FULL from tool crumbs alone.
      coverage: "partial",
      startLine: parsed.startLine,
      endLine: parsed.endLine,
      returnedStartLine,
      returnedEndLine,
      totalLines: parsed.totalLines,
      hasMore: truncated || documentHasMore || parsed.hasMore,
      truncated,
      documentHasMore,
      nextStartLineHint:
        typeof data.nextStartLineHint === "number"
          ? data.nextStartLineHint
          : parsed.nextStartLineHint,
      signals: [
        truncated ? "truncated" : null,
        documentHasMore ? "documentHasMore" : null,
      ].filter(Boolean) as string[],
      origin: "current_turn",
    });
  }
  return facts;
}

/**
 * Honest incomplete narrative — never fabricates document synthesis.
 */
export function buildDocumentaryBudgetExhaustedText(input: {
  items: unknown[];
  stockMessage?: string;
}): string {
  const stock = input.stockMessage ?? MODEL_TURN_BUDGET_REACHED_STOCK;
  const facts = collectReadFactsFromRunItems(input.items);
  if (facts.length === 0) {
    return stock;
  }

  const unions = unionReturnedLineSpans(facts);
  const lines: string[] = [
    stock,
    "",
    "Analyse documentaire inachevée — budget model-turn atteint avant une synthèse finalisée.",
    "Périmètre réellement remis par l'outil (plages retournées, pas le contenu inventé) :",
  ];

  for (const u of unions) {
    const spanTxt = u.spans
      .map((s) => `L${s.start}-${s.end}`)
      .join(", ");
    const total =
      typeof u.totalLines === "number" ? ` / ${u.totalLines}` : "";
    lines.push(
      `- ${u.documentPath}: ${spanTxt}${total}${u.provenFull ? " (couverture intégrale prouvée)" : " (couverture partielle)"}`,
    );
  }

  const hints = facts
    .map((f) => f.nextStartLineHint)
    .filter((n): n is number => typeof n === "number");
  if (hints.length > 0) {
    lines.push(
      `Reprise possible depuis la ligne ${Math.min(...hints)} (nextStartLineHint observé) — aucune HumanDecision ni Deliverable inventés.`,
    );
  } else {
    lines.push(
      "Aucune HumanDecision ni Deliverable inventés ; statut Product incomplete.",
    );
  }

  return lines.join("\n");
}

```

### N.CREATED — `projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts`

```typescript
/**
 * Bounded documentary-read guidance appended to system instructions when the
 * Pilot request is a natural mono-file Git synthesis mission.
 *
 * Not a parallel document engine — advisory only. OpenAI-native-first (R22).
 */

export const DOCUMENTARY_READ_GUIDANCE_BLOCK = [
  "=== DOCUMENTARY READ GUIDANCE (bounded / native tools) ===",
  "- Prefer startLine/endLine windows sized to stay under the tool character cap.",
  "- truncated=true ⇒ the requested range was cut; continue from nextStartLineHint.",
  "- documentHasMore=true with truncated=false ⇒ the range was fully returned; later lines remain.",
  "- Do not re-read already returned prefixes; advance with nextStartLineHint.",
  "- Before the mission model-turn budget ends, write a clearly PARTIAL synthesis of portions actually returned.",
  "- Never claim full-document analysis without FULL returned coverage L1–total and no truncation.",
].join("\n");

export function appendDocumentaryReadGuidance(
  systemInstructions: string,
  enabled: boolean,
): string {
  if (!enabled) return systemInstructions;
  const base = systemInstructions.trim();
  if (base.includes("DOCUMENTARY READ GUIDANCE")) return systemInstructions;
  return `${base}\n\n${DOCUMENTARY_READ_GUIDANCE_BLOCK}`;
}

```

## O. Résultats QA

| Contrôle | Résultat |
|---|---|
| `p6.nora.min09.documentaryReliability.d0.test.ts` | **40 PASS** |
| `p6.nora.p1.adaptiveBudget.d0.test.ts` | 8 PASS |
| `p6.nora.p1p2.targetedVerification.d0.test.ts` | 7 PASS |
| `p6.nora.p1p2.documentary.mission.d0.test.ts` | 5 PASS |
| `session.d0.test.ts` | 7 PASS |
| Typecheck `tsc --noEmit` | PASS |
| `git diff --check` | PASS |
| REAL OpenAI calls | **ZERO** |
| Project commit/push/PR | **NONE** |

## P. Fake/Real Qualification

- **Applicable:** OUI
- **Mode:** DETERMINISTIC ONLY
- **Fake:** ScriptedModel + fixtures contrôlées (frontière modèle)
- **Frontière REAL:** Studio → Nora → Git → OpenAI — non exercée
- **Parité:** même chemin outil + transformations avant frontière modèle
- **Claim autorisé:** CP03 DETERMINISTIC VERIFIED AT TESTED SCOPE
- **Claims interdits:** Product READY / GDR REAL PASS / E2E REAL PROVEN / P6 GLOBAL PASS

## Q. Invariants et FinOps

| Invariant | Statut |
|---|---|
| P0 limitReached → incomplete | PRESERVED (tests) |
| P1 Adaptive Budget / ceiling 10 | PRESERVED |
| P2 RunState continuation | PRESERVED |
| TV01 Session | PRESERVED |
| Git lecture seule | PRESERVED |
| ToolRouter no extra authority | PRESERVED |
| CT_MAX_TOOL_RESULT_CHARS = 12000 | PRESERVED |
| maxTurns ≤ 10 | PRESERVED |
| No HumanDecision inventée / Deliverable validé | PRESERVED |
| Confidentialité sorties vérifiées | PASS (fictifs) |

## R. Réserves et dettes

- FPPC-RES-01 OPEN
- P0-EFFECT-02 NOT PROVEN
- RunState cross-restart DEFER
- lineExceedsCap : skip explicite (pas de mid-line offset protocol)
- GDR REAL NOT PROVEN
- P6 GLOBAL NOT PASSED
- Runtime v3 NON ADOPTED
- Aucune nouvelle dette sans owner

## S. Exit proof

Invariant documentaire vérifié sur résultat effectivement remis au modèle :

- `toolResultForModel(routeToolCall(...))` JSON valide
- `completeLineCount` == nombre de lignes intégrales dans `data.content` final
- `returnedEndLine` / `nextStartLineHint` cohérents (pas de saut silencieux)
- Secrets fictifs absents des surfaces vérifiées
- Aucun faux FULL quand couverture non prouvable
- Chemin Runner (R5-O) inclus

## T. Décisions Morris restantes

1. **GO intégration Git unique gouvernée** du cumul RCD-01 (CP01+CP02+CP03) — NON consommé.
2. **GO retest Human QA T1 REAL** après intégration — NON autorisé ce cycle.
3. Aucun GO commit/push/PR/merge projet implicite.

## U. Verdict

**TARGETED CORRECTION CP03 COMPLETE LOCALLY / DETERMINISTIC QA PASS / READY FOR CHATGPT REVIEW**

Non-claims : GDR REAL PASS ; P6 GLOBAL PASS ; Runtime v3 ADOPTED.

## V. Instruction ChatGPT

Lire indépendamment le dernier Review Handoff sur `sfia/review-handoff`
(`sfia-review-handoff/latest-chatgpt-review.md`).

Vérifier :

- Git actuel (branche `fix/p6-min09-documentary-cognitive-reliability-01`, HEAD `d8ceb8ad…`)
- Diff cumulé CP01+CP02+CP03
- R4 rédaction et progression
- R5 sérialisation finale / payload model-visible
- Confidentialité
- Couverture honnête
- Non-régression R1/R2/R3
- Résultats QA
- Réserves
- Décisions Morris
- Verdict

Si les preuves sont suffisantes : qualifier le lot RCD-01 pour une **intégration Git unique gouvernée**.
Aucun GO commit/push/PR/merge projet implicite.

---

FIN DU REVIEW PACK FULL — CP03
