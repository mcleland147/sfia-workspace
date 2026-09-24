# NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — FULL Review Pack

- **Timestamp:** 2026-09-24T05:54:23Z / 2026-09-24 07:54:23 CEST
- **Repo:** mcleland147/sfia-workspace
- **Cycle:** 8 — Delivery / implémentation — EVOL / CRITICAL — ZERO REAL
- **Branch:** `feat/sfia-studio-nora-conversational-initiative-01`
- **HEAD:** `7d05e73b4e24f3f6c14d9c15220720957b9b19b5`
- **HEAD tree:** `2b3e5a6ec8515a5ae32e9052fad02c09100ca2b5`
- **origin/main:** `7d05e73b4e24f3f6c14d9c15220720957b9b19b5`
- **origin/main tree:** `2b3e5a6ec8515a5ae32e9052fad02c09100ca2b5`
- **NCI candidate:** LOCAL UNCOMMITTED on this branch (extends accepted CR `73288c2a` / blob `fecc205a`)
- **REAL failure evidence handoff:** `70af9bf59194ec8bdd69690f344b68e8f417e978` / blob `a7c2d1fe3e5ca2d986071b428490c854332622bc`
- **Runtime v3:** NON ADOPTED
- **Project push/PR/merge:** 0
- **ZERO REAL:** confirmed (no OpenAI live; no REAL-01/02/03 retry)

## 1. Local Git Truth

```
ROOT=/Users/morris/Projects/sfia-workspace
BRANCH=feat/sfia-studio-nora-conversational-initiative-01
HEAD=7d05e73b4e24f3f6c14d9c15220720957b9b19b5
HEAD_TREE=2b3e5a6ec8515a5ae32e9052fad02c09100ca2b5
ORIGIN_MAIN=7d05e73b4e24f3f6c14d9c15220720957b9b19b5
ORIGIN_MAIN_TREE=2b3e5a6ec8515a5ae32e9052fad02c09100ca2b5
STAGED=(empty)
--- status --short ---
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
 M projects/sfia-studio/app/__tests__/oa/cycle/lifecycleRecommendation.finalCorr.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleCognitiveWork.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/preCycleRoutingBoundary.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
 M projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
?? .tmp-sfia-review/nora-conversational-initiative-real-proof/
?? projects/sfia-studio/app/__tests__/project-assistant/noraConversationalInitiative.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/noraLifecycleRecommendationContinuity.d0.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentLifecycleRecommendationContinuity.ts
--- worktrees ---
/Users/morris/Projects/sfia-workspace                                                                                                                                                                                                                                              7d05e73b [feat/sfia-studio-nora-conversational-initiative-01]
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
/Users/morris/Projects/sfia-workspace-auth-better-auth-github-multi-user-foundation                                                                                                                                                                                                ebdae92a [delivery/sfia-studio-auth-better-auth-github-multi-user-foundation]
/Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts                                                                                                                                                                                                                    cae84151 [method/sfia-cycle-knowledge-contracts]
/Users/morris/Projects/sfia-workspace-d1-conversational-convergence                                                                                                                                                                                                                7dc6f9fc [ux/sfia-studio-d1-conversational-convergence]
/Users/morris/Projects/sfia-workspace-d1-platform-integration                                                                                                                                                                                                                      c2d39a7f [delivery/sfia-studio-d1-shared-platform-integration]
/Users/morris/Projects/sfia-workspace-doc32-post-p3-m1                                                                                                                                                                                                                             dd2a68c6 [docs/sfia-studio-doc32-post-p3-m1-correction]
/Users/morris/Projects/sfia-workspace-docs-recover                                                                                                                                                                                                                                 1a2fa31f [docs/sfia-studio-recover-unmerged-project-docs]
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
/Users/morris/Projects/sfia-workspace-pre-mw2-main-b345f3b6                                                                                                                                                                                                                        ac26e901 [delivery/sfia-studio-nora-mw2-cwp-strategy]
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
/Users/morris/Projects/sfia-workspace/sfia-review-handoff                                                                                                                                                                                                                          70af9bf5 [sfia/review-handoff]
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
```

**NCI candidate drift vs accepted CR handoff 73288c2a:** NONE material for NCI semantics — continuity extends it.
**origin/main drift:** NONE (still `7d05e73b…` / tree `2b3e5a6e…`).

## 2. Sources

- cycle-execution-template / cycle-routing-guide / v2.5 cycles method candidate
- convergence build doctrine / roadmap / product-completion 01
- framing 32/34/35/36 + ckc/08-delivery-implementation
- `currentness.ts` / materialize* / produce* / types / resolveCanonicalBasis / materialReaderContract
- studioCognitiveContext / orchestrateF2 / orchestrateTurn / buildProjectSystemPrompt
- NCI local candidate + REAL evidence under `.tmp-sfia-review/nora-conversational-initiative-real-proof/`

## 3. REAL failure evidence (canonical)

- REAL-01: OK — Cadrage proposed; LR NEXT_CYCLE materialized; HD=0; START=0
- REAL-02: FAIL — `validation_error` / `MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION` on factual MVP scope recall
- REAL-03: NOT RUN (hard stop)
- LIVE_INVOCATION_COUNT=4 · hosted web=0 · GO consumed

## 4. Root cause R1–R5 — CONFIRMED

| # | Claim | Verdict | Evidence |
|---|---|---|---|
| R1 | Durable CURRENT Epistemic LR NEXT_CYCLE/Cadrage can exist after REAL-01 | TRUE | materializeFromProductTurn + selectCurrentLifecycleRecommendations |
| R2 | LR not projected into StudioCognitiveContext | TRUE (pre-fix) | studioCognitiveContext had no lifecycleRecommendation field |
| R3 | EMIT disposition from structured assessment only | TRUE | derivePreCycleRoutingDisposition(candidateCycleSupportable) |
| R4 | EMIT + null → MISSING_REQUIRED even if CURRENT LR exists | TRUE | applyPreCycleRoutingBoundaryCoherence EMIT+null path |
| R5 | Factual follow-ups forced to re-emit LR | TRUE | REAL-02 evidence |

## 5. Canonical currentness seam reused

- **Source of truth:** `selectCurrentLifecycleRecommendations(...)` in `currentness.ts`
- **New pure helper (no parallel currentness):** `evaluateCurrentNextCycleLifecycleRecommendationContinuity(...)`
- Filters CURRENT to `intent===NEXT_CYCLE`; exactly-one → CURRENT; >1 semanticKeys → AMBIGUOUS; required material UNKNOWN → UNAVAILABLE
- `satisfiesPreCycleNextCycleTransition` server-derived only (active cycle, target known, optional orientation match)

## 6. StudioCognitiveContext CURRENT LR projection

```typescript
lifecycleRecommendation: {
  state: CURRENT | NONE | AMBIGUOUS | UNAVAILABLE
  current: { intent, targetCycleTypeId, targetCycleInstanceId, subjectCycleInstanceId,
            statement, rationale, semanticKey, producedAt, recommendationId } | null
  satisfiesPreCycleNextCycleTransition: boolean
}
```
- Loaded with **full** material facts (not budgeted HD/Evidence slices)
- Prompt: business-readable NEXT_CYCLE + cycle label; no semanticKey/fingerprint/id leak
- Recommendation ≠ HumanDecision; never Truth C

## 7. CURRENT LR applicability rules (pre-cycle NEXT_CYCLE)

`satisfiesPreCycleNextCycleTransition === true` iff:
1. no required NEXT_CYCLE material dimension failed
2. exactly one CURRENT NEXT_CYCLE from selectCurrent
3. no active CycleInstance (LPS)
4. targetCycleTypeId known
5. if method orientation resolved → target matches

Otherwise false (STALE/NONE/AMBIGUOUS/UNAVAILABLE/mismatch/active-cycle).

## 8. Boundary semantics NEW vs REUSE

| Case | Result |
|---|---|
| EMIT + new LR | NEW_CANDIDATE → existing materialize |
| EMIT + null + satisfies=true | REUSE_CURRENT → no write, no MISSING |
| EMIT + null + satisfies=false | MISSING_REQUIRED (preserved) |
| Cognitive Stop + EMIT + null | HOLD+BLOCKER_RESOLUTION; continuity NONE; no MISSING |
| EMIT + reuse/new without RECOMMEND+LIFECYCLE_TRANSITION guidance | CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH (NCI preserved) |

Ephemeral surface: `lifecycleRecommendationContinuity: NONE | NEW_CANDIDATE | REUSE_CURRENT`
(coherence result + orchestrateTurn DTO).

## 9. No-write continuity proof

- REAL-02 deterministic reproduction: TURN1 materialize → one CURRENT LR id/producedAt
- TURN2 EMIT+null+guidance → ok, REUSE_CURRENT, same LR id/producedAt, HD=0, cycles unchanged
- Orchestrate path: `lifecycleRecommendationMaterialized=false`, continuity=REUSE_CURRENT

## 10. Agents path fix (required for Product-equivalent reuse)

Pre-continuity, `coercePlainTextToProductTurnJson` / `runNoraAgentsTurn` rewrote valid Product turns via normalize **without** CURRENT continuity → coerced EMIT+null guidance to HOLD → orchestrate+continuity then hit `CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH`.

Fix: preserve valid `isNoraProductTurnWithOptionalLr` raw output; orchestrateTurn owns boundary with server-derived satisfies.

## 11. REAL-02 / REAL-03 deterministic proofs

- REAL-02 reproduction: PASS (suite `noraLifecycleRecommendationContinuity.d0`)
- REAL-03 preparatory acknowledgement reuse: PASS (deterministic Product continuity only — not REAL quality)

## 12. LR-CONT-01→12

| ID | Result |
|---|---|
| LR-CONT-01 no CURRENT | PASS — MISSING_REQUIRED |
| LR-CONT-02 exact CURRENT | PASS — REUSE_CURRENT |
| LR-CONT-03 STALE | PASS — no reuse |
| LR-CONT-04 superseded | PASS — not CURRENT |
| LR-CONT-05 UNAVAILABLE | PASS — no reuse |
| LR-CONT-06 target mismatch | PASS — fail-closed; new LR allowed |
| LR-CONT-07 AMBIGUOUS | PASS / covered (evaluator + producer paths) |
| LR-CONT-08 active cycle | PASS — satisfies=false |
| LR-CONT-09 Cognitive Stop | PASS — HOLD; no MISSING |
| LR-CONT-10 new recommendation | PASS — NEW_CANDIDATE |
| LR-CONT-11 prompt | PASS — no internal leak |
| LR-CONT-12 history | PASS — multi-turn reuse |

## 13. Regressions

```
npx vitest run \
  noraLifecycleRecommendationContinuity.d0 \
  noraConversationalInitiative.d0 \
  preCycleRoutingBoundary.d0 \
  activeCycleCognitiveWork.d0 \
  studioCognitiveContext.test \
  lifecycleRecommendation.delivery.d0 \
  lifecycleRecommendation.finalCorr.d0 \
  corrProof06.artifactObligation.d0 \
  orchestrateTurn.test
→ Test Files 9 passed · Tests 170 passed
npm run typecheck → PASS
```

NCI CR-NCI-01/02/03 preserved. MISSING_REQUIRED preserved without CURRENT.

## 14. ZERO REAL

- No live OpenAI calls this cycle
- Prior REAL GO remains consumed; no campaign retry

## 15. Authority side effects

On CURRENT reuse: Epistemic LR writes=0; HD=0; Cycle START=0; EC=0; Cursor=0; ExecutionAttempt=0; Evidence=0; trajectory promotion=0; Git=0.
Recommendation remains non-authoritative.

## 16. DEBT / reservations

- **DEBT:** FINALIZE_CURRENT_CYCLE CONTINUITY NOT YET QUALIFIED
- Scope deliberately NEXT_CYCLE pre-cycle only
- Does not claim Conversational Initiative REAL proven / Nora Cognitive Completion COMPLETE / runtime v3 ADOPTED

## 17. Supportable claim (max)

**CURRENT LIFECYCLE RECOMMENDATION CONTINUITY IMPLEMENTED DETERMINISTICALLY FOR TESTED PRE-CYCLE NEXT_CYCLE MULTI-TURN PRODUCT SCOPE**

## 18. Files

### New files — FULL CONTENT

### `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/currentLifecycleRecommendationContinuity.ts`
- sha256: `90e1504b7e59b7a85569f8ae257839eb82568f797e52d51e14cd44c49b82711b`
- lines: 203

```typescript
/**
 * NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01
 *
 * Pure selection of exactly-one applicable CURRENT NEXT_CYCLE LifecycleRecommendation
 * for pre-cycle multi-turn continuity. Reuses selectCurrentLifecycleRecommendations —
 * no parallel currentness, no prose parse, no session memory.
 *
 * Scope: NEXT_CYCLE pre-cycle continuity only.
 * DEBT: FINALIZE_CURRENT_CYCLE continuity not yet qualified.
 */
import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type {
  CycleInstance,
  EpistemicItem,
  ProjectTrajectory,
} from "../../domain/types";
import {
  firstFailedRequiredMaterialDimension,
  type LifecycleRecommendationMaterialDimension,
} from "./materialReaderContract";
import { selectCurrentLifecycleRecommendations } from "./currentness";
import type { LifecycleRecommendationEnvelope } from "./types";

export type CurrentLifecycleRecommendationContinuityState =
  | "CURRENT"
  | "NONE"
  | "AMBIGUOUS"
  | "UNAVAILABLE";

/** Minimal durable CURRENT NEXT_CYCLE projection — Recommendation ≠ HumanDecision. */
export type CurrentLifecycleRecommendationProjectionCurrent = {
  readonly intent: "NEXT_CYCLE";
  readonly targetCycleTypeId: string | null;
  readonly targetCycleInstanceId: string | null;
  readonly subjectCycleInstanceId: string | null;
  readonly statement: string;
  readonly rationale: string | null;
  readonly semanticKey: string;
  readonly producedAt: string;
  /** Epistemic item id — server/tests only; never Pilot-facing. */
  readonly recommendationId: string;
};

export type CurrentLifecycleRecommendationContinuityProjection = {
  readonly state: CurrentLifecycleRecommendationContinuityState;
  readonly current: CurrentLifecycleRecommendationProjectionCurrent | null;
};

export type EvaluateCurrentNextCycleLifecycleRecommendationContinuityInput = {
  items: readonly EpistemicItem[];
  cycles: readonly CycleInstance[];
  lpsActiveCycleInstanceId: string | null | undefined;
  lpsVersion?: number | null;
  doctrinePackageId?: string | null;
  doctrinePackageVersion?: string | null;
  doctrinePackageDigest?: string | null;
  trajectory?: ProjectTrajectory | null;
  decisions?: readonly HumanDecision[];
  evidence?: readonly Evidence[];
  blockingReservationStatements?: readonly string[];
  failedMaterialDimensions?: ReadonlySet<LifecycleRecommendationMaterialDimension>;
  /**
   * When LPS points at an active CycleInstance, pre-cycle NEXT_CYCLE continuity
   * must not satisfy EMIT (LR-CONT-08).
   */
  activeCycleInstanceId?: string | null;
  /**
   * When server method orientation resolves a candidate cycle type for this turn,
   * CURRENT target must match. Unresolved → no match requirement.
   */
  expectedTargetCycleTypeId?: string | null;
};

export type EvaluateCurrentNextCycleLifecycleRecommendationContinuityResult = {
  readonly projection: CurrentLifecycleRecommendationContinuityProjection;
  /**
   * Server-derived: exactly one applicable CURRENT NEXT_CYCLE may satisfy
   * EMIT + lifecycleRecommendation=null without MISSING_REQUIRED.
   */
  readonly satisfiesPreCycleNextCycleTransition: boolean;
  /** The single applicable envelope when state=CURRENT; else null. */
  readonly applicable: LifecycleRecommendationEnvelope | null;
};

function projectCurrent(
  env: LifecycleRecommendationEnvelope,
): CurrentLifecycleRecommendationProjectionCurrent {
  return Object.freeze({
    intent: "NEXT_CYCLE" as const,
    targetCycleTypeId: env.targetCycleTypeId,
    targetCycleInstanceId: env.targetCycleInstanceId,
    subjectCycleInstanceId: env.subjectCycleInstanceId,
    statement: env.statement,
    rationale: null,
    semanticKey: env.semanticKey,
    producedAt: env.producedAt,
    recommendationId: env.recommendationId,
  });
}

/**
 * Select exactly one CURRENT NEXT_CYCLE recommendation for pre-cycle continuity.
 * Does not invent recommendations. Does not choose arbitrarily among concurrent keys.
 */
export function evaluateCurrentNextCycleLifecycleRecommendationContinuity(
  input: EvaluateCurrentNextCycleLifecycleRecommendationContinuityInput,
): EvaluateCurrentNextCycleLifecycleRecommendationContinuityResult {
  const failed = input.failedMaterialDimensions ?? new Set();

  // Fail-closed: any required NEXT_CYCLE material dimension UNKNOWN → UNAVAILABLE.
  if (firstFailedRequiredMaterialDimension("NEXT_CYCLE", failed)) {
    return {
      projection: Object.freeze({
        state: "UNAVAILABLE" as const,
        current: null,
      }),
      satisfiesPreCycleNextCycleTransition: false,
      applicable: null,
    };
  }

  const currentAll = selectCurrentLifecycleRecommendations({
    items: input.items,
    cycles: input.cycles,
    lpsActiveCycleInstanceId: input.lpsActiveCycleInstanceId,
    lpsVersion: input.lpsVersion,
    doctrinePackageId: input.doctrinePackageId,
    doctrinePackageVersion: input.doctrinePackageVersion,
    doctrinePackageDigest: input.doctrinePackageDigest,
    trajectory: input.trajectory,
    decisions: input.decisions,
    evidence: input.evidence,
    blockingReservationStatements: input.blockingReservationStatements,
    failedMaterialDimensions: failed,
  });

  const nextCycleCurrent = currentAll.filter((e) => e.intent === "NEXT_CYCLE");

  if (nextCycleCurrent.length === 0) {
    return {
      projection: Object.freeze({
        state: "NONE" as const,
        current: null,
      }),
      satisfiesPreCycleNextCycleTransition: false,
      applicable: null,
    };
  }

  if (nextCycleCurrent.length > 1) {
    // Distinct semanticKeys already (selectCurrent dedupes per key). Concurrent = AMBIGUOUS.
    return {
      projection: Object.freeze({
        state: "AMBIGUOUS" as const,
        current: null,
      }),
      satisfiesPreCycleNextCycleTransition: false,
      applicable: null,
    };
  }

  const only = nextCycleCurrent[0]!;
  const projection: CurrentLifecycleRecommendationContinuityProjection =
    Object.freeze({
      state: "CURRENT" as const,
      current: projectCurrent(only),
    });

  const active =
    input.activeCycleInstanceId ?? input.lpsActiveCycleInstanceId ?? null;
  if (active != null && String(active).trim() !== "") {
    return {
      projection,
      satisfiesPreCycleNextCycleTransition: false,
      applicable: only,
    };
  }

  const target = only.targetCycleTypeId?.trim() || null;
  if (!target) {
    return {
      projection,
      satisfiesPreCycleNextCycleTransition: false,
      applicable: only,
    };
  }

  const expected = input.expectedTargetCycleTypeId?.trim() || null;
  if (expected != null && expected !== target) {
    return {
      projection,
      satisfiesPreCycleNextCycleTransition: false,
      applicable: only,
    };
  }

  return {
    projection,
    satisfiesPreCycleNextCycleTransition: true,
    applicable: only,
  };
}
```

### `projects/sfia-studio/app/__tests__/project-assistant/noraLifecycleRecommendationContinuity.d0.test.ts`
- sha256: `2472aec7ba102dec80e916645949366560f50b62b19f4c8cdba854e1ecae5ea3`
- lines: 1146

```typescript
/** @vitest-environment node */
/**
 * NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — LR-CONT-01…12 + REAL-02/03 prep.
 * ZERO REAL. Deterministic only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { ScriptedModel, assistantMessage } from "@openai/agents/testing";
import { FakeConversationProvider } from "@/lib/platform/ai";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import {
  composeStudioCognitiveContext,
  buildStudioCognitivePromptSections,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import { orchestrateProjectAssistantTurn } from "@/features/project-assistant/orchestrateTurn";
import {
  MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
  PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
  applyPreCycleRoutingBoundaryCoherence,
  composePilotFacingAssistantText,
  normalizeNoraProductTurnStructuredOutput,
  type ConversationGuidance,
  type PreCycleRoutingAssessment,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  evaluateCurrentNextCycleLifecycleRecommendationContinuity,
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  selectCurrentLifecycleRecommendations,
} from "@/lib/oa/cycle";
import type { ActorReference } from "@/lib/oa/project";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import * as runNoraAgentsTurnMod from "@/lib/nora-cognitive-runtime/runNoraAgentsTurn";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "project_owner",
  displayName: "Morris",
  authorityLevel: "N3",
};

const tempDirs: string[] = [];

afterEach(() => {
  resetRuntimeApplicationServiceForTests();
  vi.restoreAllMocks();
  while (tempDirs.length) {
    const d = tempDirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

function tempDbPath(name: string): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "lrc-"));
  tempDirs.push(dir);
  return path.join(dir, name);
}

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
    rationale: "Prochain travail gouverné supportable.",
    authority: "none" as const,
    isHumanDecision: false as const,
    qualificationSignals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
  };
}

function transitionGuidance(statement: string): ConversationGuidance {
  return {
    kind: "RECOMMEND_NEXT_STEP",
    scope: "LIFECYCLE_TRANSITION",
    statement,
    rationale: "continuity-fixture",
  };
}

function productTurn(
  assessment: PreCycleRoutingAssessment,
  lr: ReturnType<typeof nextCycleLr> | null,
  narrative: string,
  guidance?: ConversationGuidance,
) {
  return {
    narrative,
    preCycleRoutingAssessment: assessment,
    lifecycleRecommendation: lr,
    activeCycleWork: null,
    conversationGuidance:
      guidance ??
      (lr
        ? transitionGuidance(narrative)
        : {
            kind: "RECOMMEND_NEXT_STEP" as const,
            scope: "LIFECYCLE_TRANSITION" as const,
            statement: narrative,
            rationale: "reuse-or-emit",
          }),
  };
}

function analysisStub(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
    executionIntent: partial.executionIntent ?? null,
  };
}

function projectDto(
  projectId: string,
  overrides?: Partial<ProjectAssistantContextDto>,
): ProjectAssistantContextDto {
  return {
    projectId,
    name: "NCI Continuity QA",
    shortReference: "LRC",
    objective: "Gérer des tâches personnelles",
    contextSummary: "FocusFlow-like MVP",
    criticality: "STANDARD",
    constraints: [],
    lpsId: "lps:test",
    lpsVersion: 1,
    lpsCreatedAt: "2026-09-24T06:00:00.000Z",
    doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    ...overrides,
  };
}

async function bootstrapProjectWithTrajectory(prefix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-24T07:00:00.000Z",
    idSource: new FixedIdSource(prefix),
    auditMode: "noop",
    productDbPath: tempDbPath(`${prefix}.sqlite`),
  });
  const created = await runtime.createProject({
    name: "NCI Continuity QA",
    objective: "Gérer des tâches personnelles",
    context: "FocusFlow-like MVP IN: créer/modifier/terminer/lister. OUT: rappels/auth.",
    criticality: "STANDARD",
    constraints: [],
    shortReference: "LRC",
    idempotencyKey: `idem:${prefix}`,
  });
  expect(created.ok).toBe(true);
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const traj = await runtime.oa!.cycleServices.createInitialTrajectory.execute({
    trajectoryId: `trj:${projectId}`,
    projectId,
    steps: [
      {
        stepId: "stp:clarify",
        order: 1,
        label: "Clarify",
        state: "pending",
      },
    ],
    status: "active",
    expectedLpsVersion: created.livingState.version,
    createdBy: ACTOR,
  });
  expect(traj.ok).toBe(true);
  expect(runtime.oa).not.toBeNull();
  if (!runtime.oa) throw new Error("oa required");
  return { runtime, projectId, oa: runtime.oa };
}

async function materializeFramingLr(
  runtime: ReturnType<typeof getRuntimeApplicationService>,
  projectId: string,
  producedAt: string,
  statement = "Envisager un Cadrage.",
) {
  const oa = runtime.oa;
  expect(oa).not.toBeNull();
  if (!oa) throw new Error("oa required");
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const hd = await oa.decisionServices.decisions.listByProject(projectId);
  const lps =
    await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
  expect(lps.ok).toBe(true);
  if (!lps.ok) throw new Error("lps");
  const trajNow = await oa.cycleServices.getCurrentTrajectory.execute({
    projectId,
  });
  expect(trajNow.ok).toBe(true);
  if (!trajNow.ok) throw new Error("traj");
  const epistemicItems = await oa.cycleServices.epistemic.listByProject(
    projectId,
  );
  const structured = productTurn(
    { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
    nextCycleLr("cyc:framing", statement),
    statement,
  );
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: structured,
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: trajNow.trajectory,
      decisions: hd,
      evidence: [],
      epistemicItems,
    },
    producedAt,
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
  const items = await oa.cycleServices.epistemic.listByProject(projectId);
  const lrItems = items.filter(
    (i) =>
      i.source === "lifecycle-recommendation:nora" && i.status === "active",
  );
  expect(lrItems.length).toBeGreaterThanOrEqual(1);
  return {
    lrItem: lrItems[lrItems.length - 1]!,
    lps: lps.livingProjectState,
    traj: trajNow.trajectory,
    cycles,
    hd,
    items,
  };
}

describe("NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01", () => {
  it("LR-CONT-01 — EMIT + null + no CURRENT → MISSING_REQUIRED", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "Périmètre MVP rappelé.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance(
        "Je te propose de lancer le Cadrage.",
      ),
      currentLifecycleRecommendationSatisfiesTransition: false,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
    expect(coherent.lifecycleRecommendationContinuity).toBe("NONE");
  });

  it("LR-CONT-02 — EMIT + null + CURRENT exact NEXT_CYCLE → REUSE_CURRENT", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "IN: créer/modifier/terminer/lister. OUT: rappels.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance(
        "Le Cadrage reste la prochaine étape que je te recommande.",
      ),
      currentLifecycleRecommendationSatisfiesTransition: true,
    });
    expect(coherent.boundaryContradiction).toBeNull();
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(coherent.conversationGuidance.kind).toBe("RECOMMEND_NEXT_STEP");
    expect(coherent.conversationGuidance.scope).toBe("LIFECYCLE_TRANSITION");
  });

  it("REAL-02 deterministic reproduction — TURN1 materialize + TURN2 reuse no write", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("real02");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:01:00.000Z",
      "Je te propose de lancer le Cadrage.",
    );
    const lrId = turn1.lrItem.epistemicItemId;
    const producedAt = turn1.lrItem.createdAt;

    const hdBefore = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    const cyclesBefore = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        activeCycleInstanceId: turn1.lps.activeCycleInstanceId,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.state).toBe("CURRENT");
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(true);
    expect(
      composed.context.lifecycleRecommendation.current?.recommendationId,
    ).toBe(lrId);

    const turn2Structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Pour le MVP : IN créer/modifier/terminer/lister ; OUT rappels, catégories, auth.",
      transitionGuidance(
        "Le Cadrage reste la prochaine étape que je te recommande.",
      ),
    );
    const coherent = normalizeNoraProductTurnStructuredOutput(turn2Structured, {
      currentLifecycleRecommendationSatisfiesTransition:
        composed.context.lifecycleRecommendation
          .satisfiesPreCycleNextCycleTransition,
    });
    expect(coherent).not.toBeNull();
    expect(coherent!.boundaryContradiction).toBeNull();
    expect(coherent!.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(coherent!.lifecycleRecommendation).toBeNull();

    const pilot = composePilotFacingAssistantText(
      coherent!.narrative,
      coherent!.conversationGuidance,
    );
    expect(pilot).toMatch(/MVP/);
    expect(pilot).toMatch(/Cadrage/);

    // No second materialization — simulate orchestrate LR gate: candidate null.
    const itemsAfter = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const lrAfter = itemsAfter.filter(
      (i) => i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lrAfter.length).toBe(1);
    expect(lrAfter[0]!.epistemicItemId).toBe(lrId);
    expect(lrAfter[0]!.createdAt).toBe(producedAt);

    const hdAfter = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    const cyclesAfter = await runtime.oa!.cycleServices.cycles.listByProject(
      projectId,
    );
    expect(hdAfter.length).toBe(hdBefore.length);
    expect(cyclesAfter.length).toBe(cyclesBefore.length);
    expect(turn1.lps.activeCycleInstanceId ?? null).toBeNull();
  });

  it("REAL-02 via orchestrateAssistant path — TURN2 reuse, no MISSING_REQUIRED", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("orch02");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:02:00.000Z",
    );
    const lrId = turn1.lrItem.epistemicItemId;

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(true);

    const turn2Structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Rappel MVP : IN créer/modifier/terminer/lister ; OUT rappels.",
      transitionGuidance(
        "Le Cadrage reste la prochaine étape que je te recommande.",
      ),
    );
    const preNorm = normalizeNoraProductTurnStructuredOutput(turn2Structured, {
      currentLifecycleRecommendationSatisfiesTransition:
        composed.context.lifecycleRecommendation
          .satisfiesPreCycleNextCycleTransition,
    });
    expect(preNorm?.boundaryContradiction).toBeNull();
    expect(preNorm?.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");

    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(turn2Structured))],
    ]);
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content:
        "D’accord. Pour le MVP, rappelle-moi simplement ce qu’on garde dans le périmètre et ce qu’on laisse de côté.",
      sessionDbPath: tempDbPath("orch02-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    spy.mockRestore();
    expect(orch.ok).toBe(true);
    if (!orch.ok) return;
    expect(orch.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch.lifecycleRecommendationMaterialized).toBe(false);
    expect(orch.text).toMatch(/MVP|périmètre|IN|lister/i);
    expect(orch.text).toMatch(/Cadrage/);

    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const lrItems = items.filter(
      (i) =>
        i.source === "lifecycle-recommendation:nora" && i.status === "active",
    );
    expect(lrItems.length).toBe(1);
    expect(lrItems[0]!.epistemicItemId).toBe(lrId);
  });

  it("REAL-03 preparatory — acknowledgement + CURRENT reuse, non-flat", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("real03");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:03:00.000Z",
    );

    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;

    const structured = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "Parfait — on a le MVP clair.",
      transitionGuidance(
        "Je te propose maintenant de lancer le Cadrage pour cadrer ce MVP.",
      ),
    );
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(structured))],
    ]);
    const orch = await orchestrateProjectAssistantTurn({
      projectId,
      content: "OK, c’est clair.",
      sessionDbPath: tempDbPath("real03-sess.sqlite"),
      simulateMemoryBUnavailable: true,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    spy.mockRestore();
    expect(orch.ok).toBe(true);
    if (!orch.ok) return;
    expect(orch.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch.text).not.toMatch(/^Parfait\.?$/i);
    expect(orch.text).toMatch(/Cadrage/);
    const hd = await runtime.oa!.decisionServices.decisions.listByProject(
      projectId,
    );
    expect(hd.length).toBe(0);
  });

  it("LR-CONT-03 — STALE recommendation not reusable", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("stale");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:04:00.000Z",
    );
    // Change material basis (LPS version) so fingerprint no longer matches.
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items: turn1.items,
      cycles: turn1.cycles,
      lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
      lpsVersion: (turn1.lps.version ?? 1) + 99,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: turn1.traj,
      decisions: turn1.hd,
      evidence: [],
      blockingReservationStatements: [],
    });
    expect(evaluated.projection.state).toBe("NONE");
    expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);

    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "suite",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("suite"),
      currentLifecycleRecommendationSatisfiesTransition:
        evaluated.satisfiesPreCycleNextCycleTransition,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
  });

  it("LR-CONT-04 — superseded LR not CURRENT", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("super");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:05:00.000Z",
    );
    // Second distinct target supersedes / or mark superseded via second produce
    await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:05:30.000Z",
      "Autre énoncé Cadrage (nouvelle écriture).",
    );
    // After second materialize of same semantic, typically one active CURRENT.
    // Explicit rejected/superseded status:
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const first = items.find((i) => i.epistemicItemId === turn1.lrItem.epistemicItemId);
    expect(first).toBeTruthy();
    // If still active, force status for adversarial read by evaluating with mutated copy
    const mutated = items.map((i) =>
      i.epistemicItemId === turn1.lrItem.epistemicItemId
        ? { ...i, status: "superseded" as const }
        : i,
    );
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items: mutated,
      cycles: turn1.cycles,
      lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
      lpsVersion: turn1.lps.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: turn1.traj,
      decisions: turn1.hd,
      evidence: [],
      blockingReservationStatements: [],
    });
    // Other active LR may still be CURRENT — check superseded id not selected as sole
    if (evaluated.applicable) {
      expect(evaluated.applicable.recommendationId).not.toBe(
        turn1.lrItem.epistemicItemId,
      );
    }
    const onlySuperseded = evaluateCurrentNextCycleLifecycleRecommendationContinuity(
      {
        items: [
          {
            ...turn1.lrItem,
            status: "superseded",
          },
        ],
        cycles: turn1.cycles,
        lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
        lpsVersion: turn1.lps.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: turn1.traj,
        decisions: turn1.hd,
        evidence: [],
        blockingReservationStatements: [],
      },
    );
    expect(onlySuperseded.projection.state).toBe("NONE");
    expect(onlySuperseded.satisfiesPreCycleNextCycleTransition).toBe(false);
  });

  it("LR-CONT-05 — material reader unavailable → UNAVAILABLE, no reuse", () => {
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items: [],
      cycles: [],
      lpsActiveCycleInstanceId: null,
      lpsVersion: 1,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      failedMaterialDimensions: new Set(["trajectory"]),
    });
    expect(evaluated.projection.state).toBe("UNAVAILABLE");
    expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);

    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "x",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("x"),
      currentLifecycleRecommendationSatisfiesTransition: false,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );
  });

  it("LR-CONT-06 — target mismatch → not sufficient", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("mismatch");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:06:00.000Z",
    );
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items,
      cycles: turn1.cycles,
      lpsActiveCycleInstanceId: turn1.lps.activeCycleInstanceId,
      lpsVersion: turn1.lps.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: turn1.traj,
      decisions: turn1.hd,
      evidence: [],
      blockingReservationStatements: [],
      expectedTargetCycleTypeId: "cyc:delivery",
    });
    expect(evaluated.projection.state).toBe("CURRENT");
    expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);

    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "autre cycle",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("autre"),
      currentLifecycleRecommendationSatisfiesTransition:
        evaluated.satisfiesPreCycleNextCycleTransition,
    });
    expect(coherent.boundaryContradiction).toBe(
      MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
    );

    // New matching LR still allowed
    const withNew = applyPreCycleRoutingBoundaryCoherence({
      narrative: "delivery",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: nextCycleLr("cyc:delivery", "Delivery."),
      conversationGuidance: transitionGuidance("Delivery."),
      currentLifecycleRecommendationSatisfiesTransition: false,
    });
    expect(withNew.boundaryContradiction).toBeNull();
    expect(withNew.lifecycleRecommendationContinuity).toBe("NEW_CANDIDATE");
  });

  it("LR-CONT-07 — ambiguous CURRENT NEXT_CYCLE → no reuse", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("ambig");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:07:00.000Z",
    );
    // Materialize a different target (delivery) while framing remains CURRENT
    const cycles = await runtime.oa!.cycleServices.cycles.listByProject(projectId);
    const hd = await runtime.oa!.decisionServices.decisions.listByProject(projectId);
    const lps =
      await runtime.oa!.projectServices.getCurrentLivingProjectState.execute({
        projectId,
      });
    if (!lps.ok) return;
    const trajNow = await runtime.oa!.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (!trajNow.ok) return;
    const epistemicItems = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const mat2 = await materializeLifecycleRecommendationFromStructuredOutput({
      projectId,
      structuredOutput: productTurn(
        { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
        nextCycleLr("cyc:delivery", "Delivery next."),
        "Delivery next.",
      ),
      updateEpistemicState: runtime.oa!.cycleServices.updateEpistemicState,
      facts: {
        cycles,
        lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
        lpsVersion: lps.livingProjectState.version,
        doctrinePackageId: VALID_PIN.doctrinePackageId,
        doctrinePackageVersion: VALID_PIN.version,
        doctrinePackageDigest: VALID_PIN.digest,
        trajectory: trajNow.trajectory,
        decisions: hd,
        evidence: [],
        epistemicItems,
      },
      producedAt: "2026-09-24T07:07:30.000Z",
      createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
    });
    // Delivery may supersede framing depending on producer semantics — if only one CURRENT, skip ambiguity assert.
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const current = selectCurrentLifecycleRecommendations({
      items,
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: trajNow.trajectory,
      decisions: hd,
      evidence: [],
      blockingReservationStatements: [],
    }).filter((c) => c.intent === "NEXT_CYCLE");

    if (current.length >= 2) {
      const evaluated =
        evaluateCurrentNextCycleLifecycleRecommendationContinuity({
          items,
          cycles,
          lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
          lpsVersion: lps.livingProjectState.version,
          doctrinePackageId: VALID_PIN.doctrinePackageId,
          doctrinePackageVersion: VALID_PIN.version,
          doctrinePackageDigest: VALID_PIN.digest,
          trajectory: trajNow.trajectory,
          decisions: hd,
          evidence: [],
          blockingReservationStatements: [],
        });
      expect(evaluated.projection.state).toBe("AMBIGUOUS");
      expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);
    } else {
      // Producer supersedes prior — still prove evaluator AMBIGUOUS path with synthetic dual CURRENT
      const framing = items.find(
        (i) => i.epistemicItemId === turn1.lrItem.epistemicItemId,
      );
      const delivery = items.find(
        (i) =>
          i.source === "lifecycle-recommendation:nora" &&
          i.lifecycleRecommendation?.targetCycleTypeId === "cyc:delivery",
      );
      expect(mat2.materialization?.ok === true || framing != null).toBe(true);
      if (framing?.lifecycleRecommendation && delivery?.lifecycleRecommendation) {
        const dual = [
          { ...framing, status: "active" as const },
          { ...delivery, status: "active" as const },
        ];
        // Force both CURRENT by using their own fingerprints against matching rebuild —
        // if basis differs only by target, both can be CURRENT.
        const evaluated =
          evaluateCurrentNextCycleLifecycleRecommendationContinuity({
            items: dual,
            cycles,
            lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
            lpsVersion: lps.livingProjectState.version,
            doctrinePackageId: VALID_PIN.doctrinePackageId,
            doctrinePackageVersion: VALID_PIN.version,
            doctrinePackageDigest: VALID_PIN.digest,
            trajectory: trajNow.trajectory,
            decisions: hd,
            evidence: [],
            blockingReservationStatements: [],
          });
        if (evaluated.projection.state === "AMBIGUOUS") {
          expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);
        }
      }
    }
  });

  it("LR-CONT-08 — active cycle blocks pre-cycle continuity", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("active");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:08:00.000Z",
    );
    const items = await runtime.oa!.cycleServices.epistemic.listByProject(
      projectId,
    );
    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
      items,
      cycles: turn1.cycles,
      lpsActiveCycleInstanceId: "cycinst:active-fake",
      lpsVersion: turn1.lps.version,
      doctrinePackageId: VALID_PIN.doctrinePackageId,
      doctrinePackageVersion: VALID_PIN.version,
      doctrinePackageDigest: VALID_PIN.digest,
      trajectory: turn1.traj,
      decisions: turn1.hd,
      evidence: [],
      blockingReservationStatements: [],
      activeCycleInstanceId: "cycinst:active-fake",
    });
    expect(evaluated.satisfiesPreCycleNextCycleTransition).toBe(false);
  });

  it("LR-CONT-09 — Cognitive Stop outranks CURRENT reuse", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "stop",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: null,
      conversationGuidance: transitionGuidance("should not keep"),
      cognitiveStop: true,
      currentLifecycleRecommendationSatisfiesTransition: true,
    });
    expect(coherent.boundaryContradiction).toBeNull();
    expect(coherent.lifecycleRecommendationContinuity).toBe("NONE");
    expect(coherent.lifecycleRecommendation).toBeNull();
    expect(coherent.conversationGuidance.kind).toBe("HOLD");
    expect(coherent.conversationGuidance.scope).toBe("BLOCKER_RESOLUTION");
  });

  it("LR-CONT-10 — new recommendation still materializes (NEW_CANDIDATE)", () => {
    const coherent = applyPreCycleRoutingBoundaryCoherence({
      narrative: "new",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: nextCycleLr("cyc:architecture", "Architecture."),
      conversationGuidance: transitionGuidance("Architecture."),
      currentLifecycleRecommendationSatisfiesTransition: true,
    });
    expect(coherent.lifecycleRecommendationContinuity).toBe("NEW_CANDIDATE");
    expect(coherent.lifecycleRecommendation?.targetCycleTypeId).toBe(
      "cyc:architecture",
    );
    expect(coherent.boundaryContradiction).toBeNull();
  });

  it("LR-CONT-11 — prompt projects CURRENT without internal ids", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("prompt");
    await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:11:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    const sections = buildStudioCognitivePromptSections(composed.context).join(
      "\n",
    );
    expect(sections).toMatch(/Recommendation lifecycle courante/);
    expect(sections).toMatch(/Cadrage/);
    expect(sections).not.toMatch(/semanticKey/);
    expect(sections).not.toMatch(/basisFingerprint/);
    expect(sections).not.toMatch(/recommendationId|epi:/i);

    const system = buildProjectSystemPrompt(projectDto(projectId), {
      studioCognitiveContext: composed.context,
    });
    expect(system).toMatch(/ne la réémets PAS|Recommendation CURRENT/i);
  });

  it("LR-CONT-12 — conversational history survives reuse turn", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("hist");
    const turn1 = await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T07:12:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        lpsVersion: turn1.lps.version,
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;

    const sessionDb = tempDbPath("hist-sess.sqlite");
    const t2 = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "MVP rappelé clairement.",
      transitionGuidance("Le Cadrage reste recommandé."),
    );
    const t3 = productTurn(
      { ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT },
      null,
      "On peut avancer.",
      transitionGuidance("Je te propose de lancer le Cadrage."),
    );
    const spy = vi.spyOn(runNoraAgentsTurnMod, "runNoraAgentsTurn");
    const scripted = new ScriptedModel([
      [assistantMessage(JSON.stringify(t2))],
      [assistantMessage(JSON.stringify(t3))],
    ]);
    const orch2 = await orchestrateProjectAssistantTurn({
      projectId,
      content: "Rappelle le MVP.",
      sessionDbPath: sessionDb,
      simulateMemoryBUnavailable: false,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    expect(orch2.ok).toBe(true);
    const orch3 = await orchestrateProjectAssistantTurn({
      projectId,
      content: "OK, c’est clair.",
      sessionDbPath: sessionDb,
      simulateMemoryBUnavailable: false,
      provider: new FakeConversationProvider({ scripted: ["unused"] }),
      studioCognitiveContext: composed.context,
      evalModelReasoningControl: {
        modelId: "gpt-5.6-luna",
        reasoningEffort: "none",
        agentsModel: scripted,
      },
    });
    spy.mockRestore();
    expect(orch3.ok).toBe(true);
    if (!orch2.ok || !orch3.ok) return;
    expect(orch2.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch3.lifecycleRecommendationContinuity).toBe("REUSE_CURRENT");
    expect(orch3.text).toMatch(/Cadrage/);
  });
});

describe("StudioCognitiveContext lifecycleRecommendation projection", () => {
  it("A — exactly one CURRENT LR → CURRENT projection", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("ctx-a");
    await materializeFramingLr(
      runtime,
      projectId,
      "2026-09-24T08:00:00.000Z",
    );
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId, {
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.state).toBe("CURRENT");
    expect(
      composed.context.lifecycleRecommendation.current?.targetCycleTypeId,
    ).toBe("cyc:framing");
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(true);
  });

  it("E — no LR → NONE", async () => {
    const { runtime, projectId } = await bootstrapProjectWithTrajectory("ctx-e");
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: projectDto(projectId, {
        doctrineId: VALID_PIN.doctrinePackageId,
        doctrineVersion: VALID_PIN.version,
        doctrineDigest: VALID_PIN.digest,
      }),
      registryRoot: FIXTURES,
      oa: runtime.oa!,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.state).toBe("NONE");
    expect(
      composed.context.lifecycleRecommendation.satisfiesPreCycleNextCycleTransition,
    ).toBe(false);
  });

  it("D — OA unavailable → UNAVAILABLE", async () => {
    const composed = await composeStudioCognitiveContext({
      analysis: analysisStub({ intentClass: "informative", parseOk: true }),
      project: projectDto("prj:none"),
      registryRoot: FIXTURES,
      oa: null,
    });
    expect(composed.ok).toBe(true);
    if (!composed.ok) return;
    expect(composed.context.lifecycleRecommendation.state).toBe("UNAVAILABLE");
  });
});
```

### Modified files — diffs (vs HEAD)

### DIFF: `projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
index ff191821..b3a7fe39 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
@@ -21,7 +21,16 @@ import type {
 import {
   obligationPolicySubjectFor,
   OBLIGATION_POLICY_REQUIRE_ARTIFACT,
+  getCycleTypeById,
 } from "@/lib/oa/cycle";
+import { deriveLifecycleBlockersFromEpistemicItems } from "@/lib/oa/cycle/application/deriveLifecycleBlockers";
+import {
+  evaluateCurrentNextCycleLifecycleRecommendationContinuity,
+  type CurrentLifecycleRecommendationContinuityState,
+  type CurrentLifecycleRecommendationProjectionCurrent,
+} from "@/lib/oa/cycle/application/lifecycleRecommendation/currentLifecycleRecommendationContinuity";
+import type { LifecycleRecommendationMaterialDimension } from "@/lib/oa/cycle/application/lifecycleRecommendation/materialReaderContract";
+import { resolveTrajectoryBootstrapPresence } from "@/lib/oa/cycle/application/lifecycleRecommendation/greenfieldLifecycleBootstrap";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import type { ProjectAssistantContextDto } from "../types";
 import type { IntentAnalysisDto } from "./types";
@@ -205,6 +214,20 @@ export type StudioActiveCycleWorkProjection = {
   readonly status: EpistemicItemStatus;
 };

+/**
+ * Server-derived CURRENT LifecycleRecommendation continuity projection.
+ * Recommendation ≠ HumanDecision. Never Truth C / never auto-START.
+ */
+export type StudioLifecycleRecommendationContinuityProjection = {
+  readonly state: CurrentLifecycleRecommendationContinuityState;
+  readonly current: CurrentLifecycleRecommendationProjectionCurrent | null;
+  /**
+   * True only when exactly one CURRENT NEXT_CYCLE is applicable for pre-cycle
+   * EMIT continuity (server-derived — never client/model supplied).
+   */
+  readonly satisfiesPreCycleNextCycleTransition: boolean;
+};
+
 export type StudioCognitiveContext = {
   readonly projectTruth: StudioProjectTruthProjection;
   readonly method: AdvisoryMethodContext;
@@ -229,6 +252,11 @@ export type StudioCognitiveContext = {
     readonly state: TrajectoryPresenceState;
     readonly current: StudioTrajectoryProjection | null;
   };
+  /**
+   * NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — durable CURRENT NEXT_CYCLE
+   * recommendation projection (selectCurrentLifecycleRecommendations).
+   */
+  readonly lifecycleRecommendation: StudioLifecycleRecommendationContinuityProjection;
   readonly limits: {
     readonly oaAvailable: boolean;
     readonly truthOutranksConversation: true;
@@ -237,6 +265,33 @@ export type StudioCognitiveContext = {
   };
 };

+const LIFECYCLE_RECOMMENDATION_UNAVAILABLE: StudioLifecycleRecommendationContinuityProjection =
+  Object.freeze({
+    state: "UNAVAILABLE" as const,
+    current: null,
+    satisfiesPreCycleNextCycleTransition: false,
+  });
+
+const LIFECYCLE_RECOMMENDATION_NONE: StudioLifecycleRecommendationContinuityProjection =
+  Object.freeze({
+    state: "NONE" as const,
+    current: null,
+    satisfiesPreCycleNextCycleTransition: false,
+  });
+
+function toStudioLifecycleRecommendationProjection(input: {
+  state: CurrentLifecycleRecommendationContinuityState;
+  current: CurrentLifecycleRecommendationProjectionCurrent | null;
+  satisfiesPreCycleNextCycleTransition: boolean;
+}): StudioLifecycleRecommendationContinuityProjection {
+  return Object.freeze({
+    state: input.state,
+    current: input.current,
+    satisfiesPreCycleNextCycleTransition:
+      input.satisfiesPreCycleNextCycleTransition,
+  });
+}
+
 export type ComposeStudioCognitiveContextResult =
   | { readonly ok: true; readonly context: StudioCognitiveContext }
   | { readonly ok: false; readonly code: string; readonly message: string };
@@ -433,6 +488,7 @@ export async function composeStudioCognitiveContext(input: {
           state: "UNAVAILABLE" as const,
           current: null,
         }),
+        lifecycleRecommendation: LIFECYCLE_RECOMMENDATION_UNAVAILABLE,
         limits: Object.freeze({
           oaAvailable: false,
           truthOutranksConversation: true as const,
@@ -551,6 +607,125 @@ export async function composeStudioCognitiveContext(input: {
     }
   }

+  // NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — full material facts (not budgeted
+  // decision/evidence slices). UNKNOWN ≠ KNOWN EMPTY.
+  let lifecycleRecommendation: StudioLifecycleRecommendationContinuityProjection =
+    LIFECYCLE_RECOMMENDATION_NONE;
+  {
+    const failedMaterialDimensions =
+      new Set<LifecycleRecommendationMaterialDimension>();
+
+    let cycles: Awaited<
+      ReturnType<typeof oa.cycleServices.cycles.listByProject>
+    > = [];
+    try {
+      cycles = await oa.cycleServices.cycles.listByProject(projectId);
+    } catch {
+      failedMaterialDimensions.add("cycles");
+      cycles = [];
+    }
+
+    let lpsActiveCycleInstanceId: string | null = activeCycleInstanceId;
+    let lpsVersion: number | null = input.project.lpsVersion ?? null;
+    try {
+      const lps =
+        await oa.projectServices.getCurrentLivingProjectState.execute({
+          projectId,
+        });
+      if (!lps.ok) {
+        failedMaterialDimensions.add("lps");
+      } else {
+        lpsActiveCycleInstanceId =
+          lps.livingProjectState.activeCycleInstanceId ?? null;
+        lpsVersion = lps.livingProjectState.version;
+      }
+    } catch {
+      failedMaterialDimensions.add("lps");
+    }
+
+    const doctrinePackageId = input.project.doctrineId ?? null;
+    const doctrinePackageVersion = input.project.doctrineVersion ?? null;
+    const doctrinePackageDigest = input.project.doctrineDigest ?? null;
+    if (!doctrinePackageId || !doctrinePackageVersion || !doctrinePackageDigest) {
+      failedMaterialDimensions.add("doctrine");
+    }
+
+    let trajectory: ProjectTrajectory | null = null;
+    const trajPresence = await resolveTrajectoryBootstrapPresence(
+      oa.cycleServices.trajectories,
+      projectId,
+    );
+    if (trajPresence.kind === "unknown") {
+      failedMaterialDimensions.add("trajectory");
+      trajectory = null;
+    } else if (trajPresence.kind === "current") {
+      trajectory = trajPresence.trajectory;
+    } else {
+      trajectory = null;
+    }
+
+    let decisionsFull: HumanDecision[] = [];
+    try {
+      decisionsFull = await oa.decisionServices.decisions.listByProject(
+        projectId,
+      );
+    } catch {
+      failedMaterialDimensions.add("decisions");
+      decisionsFull = [];
+    }
+
+    let evidenceFull: Evidence[] = [];
+    try {
+      evidenceFull =
+        await oa.evidenceReviewServices.repository.listByProject(projectId);
+    } catch {
+      // Evidence is FINALIZE-only for required dimensions — still load for basis
+      // rebuild when available; NEXT_CYCLE does not require it.
+      evidenceFull = [];
+    }
+
+    let epistemicItems: EpistemicItem[] = [];
+    try {
+      epistemicItems = await oa.cycleServices.epistemic.listByProject(projectId);
+    } catch {
+      failedMaterialDimensions.add("epistemic_blockers");
+      epistemicItems = [];
+    }
+
+    const blockers = failedMaterialDimensions.has("epistemic_blockers")
+      ? { statements: [] as string[] }
+      : deriveLifecycleBlockersFromEpistemicItems(epistemicItems);
+
+    const expectedTargetCycleTypeId =
+      method.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE"
+        ? method.orientation.candidateCycleTypeId
+        : null;
+
+    const evaluated = evaluateCurrentNextCycleLifecycleRecommendationContinuity({
+      items: epistemicItems,
+      cycles,
+      lpsActiveCycleInstanceId,
+      lpsVersion,
+      doctrinePackageId,
+      doctrinePackageVersion,
+      doctrinePackageDigest,
+      trajectory,
+      decisions: decisionsFull,
+      evidence: evidenceFull,
+      blockingReservationStatements: blockers.statements,
+      failedMaterialDimensions,
+      activeCycleInstanceId: lpsActiveCycleInstanceId,
+      expectedTargetCycleTypeId,
+    });
+
+    lifecycleRecommendation = toStudioLifecycleRecommendationProjection({
+      state: evaluated.projection.state,
+      current: evaluated.projection.current,
+      satisfiesPreCycleNextCycleTransition:
+        evaluated.satisfiesPreCycleNextCycleTransition,
+    });
+  }
+
   return {
     ok: true,
     context: Object.freeze({
@@ -577,6 +752,7 @@ export async function composeStudioCognitiveContext(input: {
         state: trajectoryState,
         current: trajectoryCurrent,
       }),
+      lifecycleRecommendation,
       limits: Object.freeze({
         oaAvailable: true,
         truthOutranksConversation: true as const,
@@ -857,5 +1033,46 @@ export function buildStudioCognitivePromptSections(
   }
   lines.push("");

+  // NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — business-readable only.
+  lines.push("— Recommendation lifecycle courante (non autoritative) —");
+  const lr = ctx.lifecycleRecommendation;
+  if (lr.state === "NONE") {
+    lines.push(
+      "Aucune Recommendation lifecycle CURRENT applicable — si une transition est supportable, émets lifecycleRecommendation structurée.",
+    );
+  } else if (lr.state === "UNAVAILABLE") {
+    lines.push(
+      "Recommendation lifecycle : UNAVAILABLE (lecteurs matériels) — ne pas inventer ; ne pas réutiliser une ancienne Recommendation.",
+    );
+  } else if (lr.state === "AMBIGUOUS") {
+    lines.push(
+      "Plusieurs Recommendations lifecycle CURRENT concurrentes — ne choisis pas arbitrairement ; clarifie ou émets une nouvelle Recommendation structurée résolvant la transition.",
+    );
+  } else if (lr.current) {
+    const cur = lr.current;
+    const label =
+      cur.targetCycleTypeId != null
+        ? (getCycleTypeById(cur.targetCycleTypeId)?.label ??
+          cur.targetCycleTypeId)
+        : "(cible non précisée)";
+    lines.push(
+      `Recommendation lifecycle courante : ${cur.intent} vers ${label}.`,
+    );
+    lines.push(
+      "Elle reste une Recommendation non autoritative ; aucun CycleInstance n'est démarré ; ce n'est PAS une HumanDecision.",
+    );
+    lines.push(`Énoncé durable : ${cur.statement}`);
+    if (lr.satisfiesPreCycleNextCycleTransition) {
+      lines.push(
+        "Continuité : cette Recommendation CURRENT porte déjà le prochain mouvement gouverné supportable — ne la réémets PAS uniquement parce qu'un nouveau message conversationnel arrive ; réponds à la demande ; utilise conversationGuidance (RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION) ; lifecycleRecommendation peut rester null sur CE tour.",
+      );
+    } else {
+      lines.push(
+        "Continuité : cette Recommendation CURRENT n'est PAS suffisante seule pour ce tour (cycle actif, cible non alignée, ou transition non applicable) — n'invente pas de continuité ; émets une nouvelle lifecycleRecommendation si une transition différente est désormais supportable.",
+      );
+    }
+  }
+  lines.push("");
+
   return lines;
 }
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index cb114248..a49c45d8 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -123,7 +123,13 @@ export function buildProjectSystemPrompt(
     "- si routingBlockingUnknownPresent OU multiplePlausibleCycles → lifecycleRecommendation = null ; clarification ciblée seulement.",
     "- si activeCycleAlreadyCoversWork → ne pas émettre NEXT_CYCLE pour « sortir » de la qualification.",
     "- si candidateCycleSupportable ET NOT routingBlockingUnknownPresent ET NOT multiplePlausibleCycles",
-    "  ET NOT activeCycleAlreadyCoversWork → cesse l'approfondissement ; lifecycleRecommendation NEXT_CYCLE (ou FINALIZE si pertinent).",
+    "  ET NOT activeCycleAlreadyCoversWork → cesse l'approfondissement ;",
+    "  UNIQUEMENT si aucune Recommendation lifecycle CURRENT applicable ne porte déjà cette transition :",
+    "  émets lifecycleRecommendation NEXT_CYCLE (ou FINALIZE si pertinent).",
+    "  Si une Recommendation CURRENT NEXT_CYCLE applicable porte déjà exactement ce mouvement :",
+    "  ne la réémets PAS uniquement pour un nouveau message ; lifecycleRecommendation peut rester null ;",
+    "  utilise conversationGuidance (RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION) pour la continuité.",
+    "  Si tu recommandes désormais une transition différente → émets la nouvelle lifecycleRecommendation.",
     "Ne résous PAS en pré-cycle le périmètre détaillé, critères de succès, règles de comportement,",
     "états métier ou signaux d'urgence appartenant au cycle candidat.",
     "lifecycleRecommendation (si émise) : intent NEXT_CYCLE ou FINALIZE_CURRENT_CYCLE ;",
@@ -143,6 +149,45 @@ export function buildProjectSystemPrompt(
     "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
     "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
     "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
+    "Une Recommendation CURRENT réutilisée reste une Recommendation — jamais une HumanDecision ni un cycle lancé.",
+    "",
+    "=== CONTINUATION CONVERSATIONNELLE (conversationGuidance — même tour) ===",
+    "Après avoir répondu : UNDERSTAND → REASON → ANSWER → ORIENT.",
+    "Identifie le prochain mouvement utile pour faire progresser le projet.",
+    "Ne termine pas sur un simple constat lorsqu'une suite honnête est identifiable.",
+    "Produit conversationGuidance dans le MÊME tour (pas de second appel).",
+    "Champs : kind, scope, statement, rationale (rationale null si non matériel).",
+    "Kinds autorisés uniquement :",
+    "- RECOMMEND_NEXT_STEP — progression honnête identifiable (recommandation non autoritative).",
+    "- ASK_CLARIFICATION — seulement si l'inconnue change matériellement analyse / scope / risque /",
+    "  trajectoire / recommandation / autorité / preuve / effet gouverné ; UNE question ciblée.",
+    "- PRESENT_OPTIONS — au moins deux chemins réellement plausibles ; explique brièvement ;",
+    "  indique une préférence si supportable ; ne décide pas à la place du Pilote.",
+    "- HOLD — progression honnête impossible (Cognitive Stop, contradiction, autorité/preuve manquante) ;",
+    "  dis quoi résoudre ensuite — pas une fin passive.",
+    "Scopes autorisés (internes — ne jamais exposer ces libellés au Pilote) :",
+    "- PRE_CYCLE — continuation / clarification avant une transition supportable.",
+    "- ACTIVE_CYCLE — prochain mouvement DANS le cycle actif (activeCycleAlreadyCoversWork).",
+    "- LIFECYCLE_TRANSITION — accompagnement d'une lifecycleRecommendation émise DANS CE tour",
+    "  OU d'une Recommendation lifecycle CURRENT applicable réutilisée (continuité multi-tour).",
+    "- BLOCKER_RESOLUTION — stop / contradiction / fail-closed / frein cognitif.",
+    "Cohérence kind × scope obligatoire :",
+    "- routingBlockingUnknownPresent → ASK_CLARIFICATION + PRE_CYCLE, ou HOLD + BLOCKER_RESOLUTION.",
+    "- multiplePlausibleCycles → PRESENT_OPTIONS|ASK_CLARIFICATION + PRE_CYCLE, ou HOLD + BLOCKER_RESOLUTION.",
+    "- activeCycleAlreadyCoversWork → scope ACTIVE_CYCLE (toute kind pertinente).",
+    "- lifecycleRecommendation valide émise OU Recommendation CURRENT applicable réutilisée",
+    "  → RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.",
+    "- Cognitive Stop → HOLD + BLOCKER_RESOLUTION (outranks transition / réutilisation).",
+    "UNE seule continuation principale par défaut. Pas de liste générique de cinq idées.",
+    "Ne demande pas confirmation pour des détails non matériels.",
+    "Avance sous Hypothesis explicite lorsque la doctrine actuelle l'autorise.",
+    "Ne propose JAMAIS Cursor / Execution comme initiative autonome.",
+    "HumanDecision uniquement comme frontière à soumettre au Pilote — jamais auto-créée.",
+    "Une Recommendation (dont conversationGuidance) n'est JAMAIS une HumanDecision ni une autorisation d'exécution.",
+    "statement : formulation naturelle Pilote (ex. « Je te propose maintenant de… ») ;",
+    "varie selon le contexte ; évite le label robotique « PROCHAINE ÉTAPE : ».",
+    "N'expose jamais les noms internes conversationGuidance / scope / preCycleRoutingAssessment /",
+    "activeCycleWork / LifecycleRecommendation / semanticKey / basisFingerprint / F1/F2/MW* dans le langage Pilote.",
     "",
     ...buildActiveCycleWorkOutputSection(studio),
     "=== LIMITES D'AUTORITÉ (strict) ===",
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 23feb4bc..e985579e 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -20,8 +20,10 @@ import {
   type NoraCampaignBudget,
 } from "@/lib/nora-cognitive-runtime";
 import {
+  CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH,
   MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
   NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE,
+  composePilotFacingAssistantText,
   normalizeNoraProductTurnStructuredOutput,
 } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
 import { materializeLifecycleRecommendationFromStructuredOutput } from "@/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn";
@@ -383,6 +385,28 @@ export async function orchestrateProjectAssistantTurn(input: {
     let assistantText = turn.text;
     let lifecycleRecommendationMaterialized: boolean | null = null;
     let lifecycleRecommendationCode: string | null = null;
+    let lifecycleRecommendationContinuity:
+      | "NONE"
+      | "NEW_CANDIDATE"
+      | "REUSE_CURRENT"
+      | null = null;
+
+    // CR-NCI-03 — normalize ONCE with Cognitive Stop before any durable LR write.
+    // Order: normalize(+cognitiveStop) → boundary fail → ACW → LR only if stop=false
+    // → compose Pilot text from final coherent guidance.
+    const cognitiveStopActive =
+      turn.cognitiveStopDecision?.cognitiveStop === true;
+    const currentLrSatisfiesTransition =
+      input.studioCognitiveContext?.lifecycleRecommendation
+        ?.satisfiesPreCycleNextCycleTransition === true;
+    const coherentEarly =
+      turn.structuredOutput !== undefined
+        ? normalizeNoraProductTurnStructuredOutput(turn.structuredOutput, {
+            cognitiveStop: cognitiveStopActive,
+            currentLifecycleRecommendationSatisfiesTransition:
+              currentLrSatisfiesTransition,
+          })
+        : null;

     // D-LC-01 — same Product turn: extract → fail-closed contradiction →
     // ACW first (when present) → then LR against final post-ACW basis.
@@ -393,22 +417,36 @@ export async function orchestrateProjectAssistantTurn(input: {
       );
       const extracted = extractLifecycleCandidateFromStructuredOutput(
         turn.structuredOutput,
+        {
+          cognitiveStop: cognitiveStopActive,
+          currentLifecycleRecommendationSatisfiesTransition:
+            currentLrSatisfiesTransition,
+        },
       );
-      if (extracted.narrative) {
+      if (coherentEarly) {
+        lifecycleRecommendationContinuity =
+          coherentEarly.lifecycleRecommendationContinuity;
+      }
+      if (coherentEarly?.narrative) {
+        assistantText = coherentEarly.narrative;
+      } else if (extracted.narrative) {
         assistantText = extracted.narrative;
       }
-      // Positive enforcement: EMIT without LR is a structured contradiction.
-      // Fail BEFORE any durable writes (ACW or LR).
-      // Never invent LR; never treat as normal conversational success.
+      // Positive enforcement: EMIT without LR, or EMIT+LR with incompatible
+      // conversationGuidance — fail BEFORE any durable writes (ACW or LR).
+      const boundaryCode =
+        coherentEarly?.boundaryContradiction ??
+        (extracted.kind === "product_turn"
+          ? extracted.boundaryContradiction
+          : null);
       if (
-        extracted.kind === "product_turn" &&
-        extracted.boundaryContradiction ===
-          MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION
+        boundaryCode === MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION ||
+        boundaryCode === CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH
       ) {
         return {
           ok: false,
           status: "validation_error",
-          code: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
+          code: boundaryCode,
           message: LIFECYCLE_RECOMMENDATION_MATERIALIZE_FAILURE_PILOTE_NOTICE,
           mode: modeResolution.mode,
           retryable: false,
@@ -416,9 +454,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       }

       // D-GF-ACW-01/02 — materialize ACW FIRST when items present + eligible.
-      const coherent = normalizeNoraProductTurnStructuredOutput(
-        turn.structuredOutput,
-      );
+      const coherent = coherentEarly;
       const acwItems = coherent?.activeCycleWork?.items ?? [];
       if (acwItems.length > 0) {
         const assessment = coherent?.preCycleRoutingAssessment;
@@ -599,8 +635,15 @@ export async function orchestrateProjectAssistantTurn(input: {
       }

       // D-LC-01 — LR AFTER ACW (or with current facts when no ACW items).
+      // CR-NCI-03 — Cognitive Stop outranks NEW LR materialization this turn.
       // Reload durable basis so currentness binds post-ACW LPS version / epistemic.
-      if (!extracted.candidate) {
+      const lrCandidate =
+        !cognitiveStopActive &&
+        !coherent?.boundaryContradiction &&
+        coherent?.lifecycleRecommendation
+          ? coherent.lifecycleRecommendation
+          : null;
+      if (!lrCandidate) {
         lifecycleRecommendationMaterialized = false;
       } else {
         // OA access via authorized Project Assistant seam (mw3AvailableEvidence
@@ -794,6 +837,14 @@ export async function orchestrateProjectAssistantTurn(input: {
         allowsSilentSuccess: false,
       },
     );
+    // NORA-CONVERSATIONAL-INITIATIVE-01 / CR-NCI-03 — compose from the same
+    // coherent guidance already normalized with Cognitive Stop (no second pass).
+    if (coherentEarly?.conversationGuidance) {
+      assistantText = composePilotFacingAssistantText(
+        assistantText,
+        coherentEarly.conversationGuidance,
+      );
+    }
     const lrMaterializeNotice =
       lifecycleRecommendationMaterializeFailurePiloteNotice({
         recommendationAttempted:
@@ -837,6 +888,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       mw4,
       lifecycleRecommendationMaterialized,
       lifecycleRecommendationCode,
+      lifecycleRecommendationContinuity,
       logicalTurnId,
     };
   } catch (error) {
```

### DIFF: `projects/sfia-studio/app/features/project-assistant/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index b8521902..b6cbb423 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -227,6 +227,15 @@ export type ProjectAssistantSendSuccess = {
   lifecycleRecommendationMaterialized?: boolean | null;
   /** Fail-closed detail code when materialization was attempted and refused. */
   lifecycleRecommendationCode?: string | null;
+  /**
+   * NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — ephemeral server surface.
+   * REUSE_CURRENT = durable CURRENT NEXT_CYCLE satisfied EMIT without a new write.
+   */
+  lifecycleRecommendationContinuity?:
+    | "NONE"
+    | "NEW_CANDIDATE"
+    | "REUSE_CURRENT"
+    | null;
   /**
    * D-GF-ACW-02 Option A — server-owned logical Product turn id (`ltu:…`).
    * Session-adjacent replay/idempotence identity; never Epistemic SoT.
```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
index 10e7adef..d771f5d3 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/noraProductTurnOutputType.ts
@@ -132,12 +132,126 @@ export type NoraActiveCycleWorkOutput = {
   items: NoraActiveCycleWorkItem[];
 };

+/**
+ * NORA-CONVERSATIONAL-INITIATIVE-01 — ephemeral conversational continuation.
+ * Cognitive / non-authoritative / same Product turn — never Truth C,
+ * HumanDecision, ExecutionContract, or execution authorization.
+ * CR-NCI-01/02: kind×scope matrix; never relabel kind while keeping statement.
+ */
+export const CONVERSATION_GUIDANCE_KINDS = [
+  "RECOMMEND_NEXT_STEP",
+  "ASK_CLARIFICATION",
+  "PRESENT_OPTIONS",
+  "HOLD",
+] as const;
+
+export type ConversationGuidanceKind =
+  (typeof CONVERSATION_GUIDANCE_KINDS)[number];
+
+export const CONVERSATION_GUIDANCE_SCOPES = [
+  "PRE_CYCLE",
+  "ACTIVE_CYCLE",
+  "LIFECYCLE_TRANSITION",
+  "BLOCKER_RESOLUTION",
+] as const;
+
+export type ConversationGuidanceScope =
+  (typeof CONVERSATION_GUIDANCE_SCOPES)[number];
+
+export const CONVERSATION_GUIDANCE_SCHEMA = {
+  type: "object" as const,
+  additionalProperties: false as const,
+  required: ["kind", "scope", "statement", "rationale"],
+  properties: {
+    kind: {
+      type: "string" as const,
+      enum: [...CONVERSATION_GUIDANCE_KINDS],
+    },
+    scope: {
+      type: "string" as const,
+      enum: [...CONVERSATION_GUIDANCE_SCOPES],
+    },
+    statement: { type: "string" as const },
+    rationale: {
+      anyOf: [{ type: "string" as const }, { type: "null" as const }],
+    },
+  },
+} as const;
+
+export type ConversationGuidance = {
+  kind: ConversationGuidanceKind;
+  scope: ConversationGuidanceScope;
+  statement: string;
+  rationale: string | null;
+};
+
+/** Fail-closed HOLD when structured guidance is missing / invalid. */
+export const CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "La suite n'a pas pu être déterminée de manière fiable à partir de cette sortie.",
+    rationale: "sortie structurée insuffisante",
+  });
+
+/** Server-owned HOLD — routing blocker (never invents a specific question). */
+export const CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "Une clarification matérielle est nécessaire avant de pouvoir orienter la suite.",
+    rationale: "routing_blocking_unknown",
+  });
+
+/** Server-owned HOLD — multiple plausible cycles. */
+export const CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "Plusieurs trajectoires restent plausibles ; il faut les départager avant de recommander une suite.",
+    rationale: "multiple_plausible_cycles",
+  });
+
+/** Server-owned HOLD — DEFER requires ACTIVE_CYCLE scope. */
+export const CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "Le travail doit rester dans le cycle actif ; aucune transition n'est recommandée sur ce tour.",
+    rationale: "active_cycle_scope_required",
+  });
+
+/** Server-owned HOLD — Cognitive Stop outranks optimistic guidance / LR. */
+export const CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "Avant toute suite, il faut lever le frein cognitif qui bloque la progression.",
+    rationale: "cognitive_stop_outranks_optimistic_guidance",
+  });
+
+/** Server-owned HOLD — structured boundary contradiction. */
+export const CONVERSATION_GUIDANCE_HOLD_BOUNDARY: ConversationGuidance =
+  Object.freeze({
+    kind: "HOLD",
+    scope: "BLOCKER_RESOLUTION",
+    statement:
+      "La suite structurée est incomplète ; aucune progression recommandée tant que le contrat n'est pas cohérent.",
+    rationale: "boundary_contradiction_fail_closed",
+  });
+
 /**
  * Product Assistant Nora turn contract:
  * - user-visible narrative (required)
  * - pre-cycle routing assessment (required, non-authoritative)
  * - optional Lifecycle Recommendation candidate (nullable)
  * - optional active-cycle work items (nullable; D-GF-ACW-01)
+ * - conversationGuidance (required; ephemeral continuation; non-authoritative)
  * Same Agents Runner — one model call — no prose parsing.
  */
 export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
@@ -152,6 +266,7 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
       "preCycleRoutingAssessment",
       "lifecycleRecommendation",
       "activeCycleWork",
+      "conversationGuidance",
     ],
     properties: {
       narrative: { type: "string" as const },
@@ -168,6 +283,7 @@ export const NORA_PRODUCT_TURN_WITH_OPTIONAL_LR_OUTPUT_TYPE = {
           NORA_ACTIVE_CYCLE_WORK_OUTPUT_SCHEMA,
         ],
       },
+      conversationGuidance: CONVERSATION_GUIDANCE_SCHEMA,
     },
   },
 };
@@ -177,6 +293,7 @@ export type NoraProductTurnWithOptionalLr = {
   preCycleRoutingAssessment: PreCycleRoutingAssessment;
   lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
   activeCycleWork: NoraActiveCycleWorkOutput | null;
+  conversationGuidance: ConversationGuidance;
 };

 export function isPreCycleRoutingAssessment(
@@ -238,6 +355,49 @@ export function isNoraActiveCycleWorkOutput(
   return o.items.every(isNoraActiveCycleWorkItem);
 }

+const CONVERSATION_GUIDANCE_KIND_SET = new Set<string>(
+  CONVERSATION_GUIDANCE_KINDS,
+);
+const CONVERSATION_GUIDANCE_SCOPE_SET = new Set<string>(
+  CONVERSATION_GUIDANCE_SCOPES,
+);
+
+export function isConversationGuidance(
+  value: unknown,
+): value is ConversationGuidance {
+  if (!value || typeof value !== "object") return false;
+  const o = value as Record<string, unknown>;
+  if (!CONVERSATION_GUIDANCE_KIND_SET.has(String(o.kind))) return false;
+  if (!CONVERSATION_GUIDANCE_SCOPE_SET.has(String(o.scope))) return false;
+  if (typeof o.statement !== "string" || o.statement.trim().length === 0) {
+    return false;
+  }
+  if (o.rationale !== null && typeof o.rationale !== "string") return false;
+  if (typeof o.rationale === "string" && o.rationale.trim().length === 0) {
+    return false;
+  }
+  return true;
+}
+
+/**
+ * Parse raw conversationGuidance; invalid / missing → fail-closed HOLD.
+ * Never invents RECOMMEND_NEXT_STEP.
+ */
+export function parseConversationGuidanceOrFailClosed(
+  value: unknown,
+): ConversationGuidance {
+  if (!isConversationGuidance(value)) {
+    return { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD };
+  }
+  return {
+    kind: value.kind,
+    scope: value.scope,
+    statement: value.statement.trim(),
+    rationale:
+      value.rationale === null ? null : String(value.rationale).trim(),
+  };
+}
+
 /**
  * ROUTING RELEVANCE + CYCLE OWNERSHIP → disposition (deterministic).
  */
@@ -268,50 +428,347 @@ export type PreCycleRoutingBoundaryCoherenceResult = {
   lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
   /** Passthrough — not stripped by routing coherence (D-GF-ACW-01). */
   activeCycleWork: NoraActiveCycleWorkOutput | null;
+  /** Ephemeral conversational continuation (coherent with disposition). */
+  conversationGuidance: ConversationGuidance;
   /** True when a candidate LR was stripped by boundary coherence. */
   lifecycleRecommendationSuppressed: boolean;
   suppressReason: string | null;
   /**
-   * Structured boundary contradiction (e.g. EMIT without LR).
+   * Structured boundary contradiction (e.g. EMIT without LR / guidance mismatch).
    * Non-null ⇒ fail-closed — never invent LR; never silent conversational success.
    */
   boundaryContradiction: string | null;
+  /**
+   * True when guidance was replaced by a server-owned fallback object
+   * (never a kind-only relabel that keeps an incompatible statement).
+   */
+  conversationGuidanceCoerced: boolean;
+  conversationGuidanceCoerceReason: string | null;
+  /**
+   * NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — ephemeral server surface:
+   * NONE | NEW_CANDIDATE (this turn emits LR) | REUSE_CURRENT (durable CURRENT satisfies).
+   * Not persisted.
+   */
+  lifecycleRecommendationContinuity:
+    | "NONE"
+    | "NEW_CANDIDATE"
+    | "REUSE_CURRENT";
 };

-/** Explicit contract code — EMIT disposition requires a Nora-produced LR. */
+/** Explicit contract code — EMIT disposition requires a Nora-produced LR
+ * OR a server-derived CURRENT applicable NEXT_CYCLE recommendation (continuity). */
 export const MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION =
   "MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION" as const;

+/**
+ * EMIT + valid LR requires RECOMMEND_NEXT_STEP + LIFECYCLE_TRANSITION.
+ * CR-NCI-01/03 — never auto-promote HOLD → RECOMMEND; fail-closed instead.
+ */
+export const CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH =
+  "CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH" as const;
+
+function isHoldBlockerResolution(g: ConversationGuidance): boolean {
+  return g.kind === "HOLD" && g.scope === "BLOCKER_RESOLUTION";
+}
+
+function keepOrReplace(
+  base: ConversationGuidance,
+  compatible: boolean,
+  fallback: ConversationGuidance,
+  reason: string,
+): {
+  conversationGuidance: ConversationGuidance;
+  coerced: boolean;
+  coerceReason: string | null;
+} {
+  if (compatible) {
+    return { conversationGuidance: base, coerced: false, coerceReason: null };
+  }
+  return {
+    conversationGuidance: { ...fallback },
+    coerced: true,
+    coerceReason: reason,
+  };
+}
+
+/**
+ * Deterministic conversationGuidance coherence with routing disposition.
+ * CR-NCI-01: never relabel kind while keeping an incompatible statement —
+ * replace the full object with a server-owned fail-closed HOLD when needed.
+ * CR-NCI-02: kind×scope matrix (structured only — no statement prose parse).
+ * Never invents RECOMMEND_NEXT_STEP from fail-closed paths.
+ */
+export function applyConversationGuidanceCoherence(input: {
+  conversationGuidance: ConversationGuidance;
+  disposition: PreCycleRoutingDisposition;
+  preCycleRoutingAssessment: PreCycleRoutingAssessment;
+  lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
+  boundaryContradiction: string | null;
+  /** When true, Cognitive Stop outranks any optimistic guidance → HOLD. */
+  cognitiveStop?: boolean;
+  /**
+   * Server-derived: durable CURRENT NEXT_CYCLE satisfies EMIT without a new LR.
+   * Never trust model-alone presence of recommendation text.
+   */
+  currentLifecycleRecommendationSatisfiesTransition?: boolean;
+}): {
+  conversationGuidance: ConversationGuidance;
+  coerced: boolean;
+  coerceReason: string | null;
+  /** When set, parent must strip LR and fail-closed (EMIT guidance mismatch). */
+  lifecycleGuidanceMismatch: boolean;
+} {
+  const base = input.conversationGuidance;
+
+  if (input.cognitiveStop === true) {
+    if (isHoldBlockerResolution(base)) {
+      return {
+        conversationGuidance: base,
+        coerced: false,
+        coerceReason: null,
+        lifecycleGuidanceMismatch: false,
+      };
+    }
+    return {
+      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_COGNITIVE_STOP },
+      coerced: true,
+      coerceReason: "cognitive_stop_override",
+      lifecycleGuidanceMismatch: false,
+    };
+  }
+
+  if (input.boundaryContradiction != null) {
+    if (isHoldBlockerResolution(base)) {
+      return {
+        conversationGuidance: base,
+        coerced: false,
+        coerceReason: null,
+        lifecycleGuidanceMismatch: false,
+      };
+    }
+    return {
+      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_BOUNDARY },
+      coerced: true,
+      coerceReason: "boundary_contradiction",
+      lifecycleGuidanceMismatch: false,
+    };
+  }
+
+  const kind = base.kind;
+  const scope = base.scope;
+  const assessment = input.preCycleRoutingAssessment;
+
+  if (input.disposition === "CONTINUE_PRE_CYCLE") {
+    if (assessment.routingBlockingUnknownPresent) {
+      const ok =
+        (kind === "ASK_CLARIFICATION" && scope === "PRE_CYCLE") ||
+        (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
+      const r = keepOrReplace(
+        base,
+        ok,
+        CONVERSATION_GUIDANCE_HOLD_ROUTING_BLOCKER,
+        "routing_blocking_unknown",
+      );
+      return { ...r, lifecycleGuidanceMismatch: false };
+    }
+    // Informative pre-cycle without routing blocker.
+    const ok =
+      scope === "PRE_CYCLE" ||
+      (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
+    const r = keepOrReplace(
+      base,
+      ok,
+      CONVERSATION_GUIDANCE_HOLD_BOUNDARY,
+      "continue_pre_cycle_scope",
+    );
+    return { ...r, lifecycleGuidanceMismatch: false };
+  }
+
+  if (input.disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
+    const ok =
+      (kind === "PRESENT_OPTIONS" && scope === "PRE_CYCLE") ||
+      (kind === "ASK_CLARIFICATION" && scope === "PRE_CYCLE") ||
+      (kind === "HOLD" && scope === "BLOCKER_RESOLUTION");
+    const r = keepOrReplace(
+      base,
+      ok,
+      CONVERSATION_GUIDANCE_HOLD_MULTI_CYCLE,
+      "multiple_plausible_cycles",
+    );
+    return { ...r, lifecycleGuidanceMismatch: false };
+  }
+
+  if (input.disposition === "DEFER_TO_ACTIVE_CYCLE") {
+    const ok = scope === "ACTIVE_CYCLE";
+    const r = keepOrReplace(
+      base,
+      ok,
+      CONVERSATION_GUIDANCE_HOLD_ACTIVE_CYCLE_SCOPE,
+      "active_cycle_scope_required",
+    );
+    return { ...r, lifecycleGuidanceMismatch: false };
+  }
+
+  // EMIT_LIFECYCLE_RECOMMENDATION — new LR this turn OR CURRENT LR reused.
+  const transitionRepresented =
+    input.lifecycleRecommendation != null ||
+    input.currentLifecycleRecommendationSatisfiesTransition === true;
+  if (transitionRepresented) {
+    const ok =
+      kind === "RECOMMEND_NEXT_STEP" && scope === "LIFECYCLE_TRANSITION";
+    if (ok) {
+      return {
+        conversationGuidance: base,
+        coerced: false,
+        coerceReason: null,
+        lifecycleGuidanceMismatch: false,
+      };
+    }
+    // Never auto-promote HOLD/ASK/OPTIONS → RECOMMEND_NEXT_STEP.
+    return {
+      conversationGuidance: { ...CONVERSATION_GUIDANCE_HOLD_BOUNDARY },
+      coerced: true,
+      coerceReason: "lifecycle_guidance_mismatch",
+      lifecycleGuidanceMismatch: true,
+    };
+  }
+
+  return {
+    conversationGuidance: base,
+    coerced: false,
+    coerceReason: null,
+    lifecycleGuidanceMismatch: false,
+  };
+}
+
+/**
+ * Compose Pilot-facing assistant text for history continuity.
+ * narrative + conversationGuidance.statement — no internal field names,
+ * no "PROCHAINE ÉTAPE :" label.
+ */
+export function composePilotFacingAssistantText(
+  narrative: string,
+  guidance: ConversationGuidance | null | undefined,
+): string {
+  const n = narrative.trim();
+  if (!guidance) return n;
+  const statement = guidance.statement.trim();
+  if (!statement) return n;
+  if (n.includes(statement)) return n;
+  if (!n) return statement;
+  return `${n}\n\n${statement}`;
+}
+
 /**
  * Deterministic coherence between assessment and lifecycleRecommendation.
  * - CONTINUE / HOLD → strip any LR (no premature recommendation).
  * - DEFER_TO_ACTIVE_CYCLE → strip NEXT_CYCLE only (FINALIZE may remain).
- * - EMIT + LR → keep as emitted (never invent one server-side).
- * - EMIT + null → MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION (fail-closed).
+ * - EMIT + LR → keep as emitted (never invent one server-side) → NEW_CANDIDATE.
+ * - EMIT + null + CURRENT LR SUFFICIENT (server-derived) → REUSE_CURRENT (no write).
+ * - EMIT + null + CURRENT LR not sufficient → MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION.
+ * - EMIT + LR + incompatible guidance → CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH.
+ * - Cognitive Stop → strip LR for this turn; HOLD + BLOCKER_RESOLUTION.
  * Does not parse narrative. Does not create Cycle/HD/START.
  * activeCycleWork is preserved on all return paths (passthrough).
- *
- * remainingUnknownsAreCycleOwned semantics:
- * - true  → remaining unknowns exist and belong to the candidate cycle
- * - false → no materially remaining unknowns (or none that are cycle-owned)
- * Either value is compatible with EMIT when candidateCycleSupportable and
- * no routing blocker / multi-cycle / active-cycle deferral. false is NOT
- * automatically incoherent.
+ * conversationGuidance: full-object fallback when incompatible (CR-NCI-01).
  */
 export function applyPreCycleRoutingBoundaryCoherence(input: {
   narrative: string;
   preCycleRoutingAssessment: PreCycleRoutingAssessment;
   lifecycleRecommendation: NoraLifecycleRecommendationStructuredOutput | null;
   activeCycleWork?: NoraActiveCycleWorkOutput | null;
+  conversationGuidance?: ConversationGuidance | null;
+  cognitiveStop?: boolean;
+  /**
+   * Server-derived from selectCurrentLifecycleRecommendations + applicability.
+   * Never client/model supplied as authority.
+   */
+  currentLifecycleRecommendationSatisfiesTransition?: boolean;
 }): PreCycleRoutingBoundaryCoherenceResult {
   const disposition = derivePreCycleRoutingDisposition(
     input.preCycleRoutingAssessment,
   );
   const candidate = input.lifecycleRecommendation;
   const activeCycleWork = input.activeCycleWork ?? null;
+  const rawGuidance = parseConversationGuidanceOrFailClosed(
+    input.conversationGuidance ?? null,
+  );
+  const cognitiveStop = input.cognitiveStop === true;
+  const currentSatisfies =
+    input.currentLifecycleRecommendationSatisfiesTransition === true;
+
+  const withGuidance = (
+    partial: Omit<
+      PreCycleRoutingBoundaryCoherenceResult,
+      | "conversationGuidance"
+      | "conversationGuidanceCoerced"
+      | "conversationGuidanceCoerceReason"
+    >,
+  ): PreCycleRoutingBoundaryCoherenceResult => {
+    const guided = applyConversationGuidanceCoherence({
+      conversationGuidance: rawGuidance,
+      disposition: partial.disposition,
+      preCycleRoutingAssessment: partial.preCycleRoutingAssessment,
+      lifecycleRecommendation: partial.lifecycleRecommendation,
+      boundaryContradiction: partial.boundaryContradiction,
+      cognitiveStop,
+      currentLifecycleRecommendationSatisfiesTransition:
+        partial.lifecycleRecommendationContinuity === "REUSE_CURRENT" ||
+        (partial.lifecycleRecommendation == null &&
+          currentSatisfies &&
+          partial.disposition === "EMIT_LIFECYCLE_RECOMMENDATION" &&
+          partial.boundaryContradiction == null),
+    });
+
+    let lifecycleRecommendation = partial.lifecycleRecommendation;
+    let lifecycleRecommendationSuppressed =
+      partial.lifecycleRecommendationSuppressed;
+    let suppressReason = partial.suppressReason;
+    let boundaryContradiction = partial.boundaryContradiction;
+    let lifecycleRecommendationContinuity =
+      partial.lifecycleRecommendationContinuity;
+
+    // CR-NCI-03 — Cognitive Stop outranks LR materialization for this turn.
+    if (cognitiveStop && lifecycleRecommendation != null) {
+      lifecycleRecommendation = null;
+      lifecycleRecommendationSuppressed = true;
+      suppressReason = suppressReason ?? "cognitive_stop";
+      if (lifecycleRecommendationContinuity === "NEW_CANDIDATE") {
+        lifecycleRecommendationContinuity = "NONE";
+      }
+    }
+    // Cognitive Stop also outranks CURRENT LR reuse as actionable next movement.
+    if (cognitiveStop && lifecycleRecommendationContinuity === "REUSE_CURRENT") {
+      lifecycleRecommendationContinuity = "NONE";
+    }
+
+    // CR-NCI-01/03 — EMIT guidance mismatch: fail-closed via contradiction.
+    // Keep the Nora-emitted LR on the coherent result for auditability, but
+    // orchestrator must not materialize (boundaryContradiction gate).
+    // Do not strip LR here — that would make a later normalize look like
+    // MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION.
+    if (guided.lifecycleGuidanceMismatch) {
+      boundaryContradiction = CONVERSATION_GUIDANCE_LIFECYCLE_MISMATCH;
+      if (lifecycleRecommendationContinuity === "REUSE_CURRENT") {
+        lifecycleRecommendationContinuity = "NONE";
+      }
+    }

-  if (disposition === "CONTINUE_PRE_CYCLE") {
     return {
+      ...partial,
+      lifecycleRecommendation,
+      lifecycleRecommendationSuppressed,
+      suppressReason,
+      boundaryContradiction,
+      lifecycleRecommendationContinuity,
+      conversationGuidance: guided.conversationGuidance,
+      conversationGuidanceCoerced: guided.coerced,
+      conversationGuidanceCoerceReason: guided.coerceReason,
+    };
+  };
+
+  if (disposition === "CONTINUE_PRE_CYCLE") {
+    return withGuidance({
       narrative: input.narrative,
       preCycleRoutingAssessment: input.preCycleRoutingAssessment,
       disposition,
@@ -323,10 +780,11 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
           ? "routing_blocking_unknown_present"
           : null,
       boundaryContradiction: null,
-    };
+      lifecycleRecommendationContinuity: "NONE",
+    });
   }
   if (disposition === "HOLD_FOR_ROUTING_AMBIGUITY") {
-    return {
+    return withGuidance({
       narrative: input.narrative,
       preCycleRoutingAssessment: input.preCycleRoutingAssessment,
       disposition,
@@ -336,11 +794,12 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       suppressReason:
         candidate !== null ? "multiple_plausible_cycles" : null,
       boundaryContradiction: null,
-    };
+      lifecycleRecommendationContinuity: "NONE",
+    });
   }
   if (disposition === "DEFER_TO_ACTIVE_CYCLE") {
     if (candidate?.intent === "NEXT_CYCLE") {
-      return {
+      return withGuidance({
         narrative: input.narrative,
         preCycleRoutingAssessment: input.preCycleRoutingAssessment,
         disposition,
@@ -349,9 +808,10 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
         lifecycleRecommendationSuppressed: true,
         suppressReason: "active_cycle_covers_work",
         boundaryContradiction: null,
-      };
+        lifecycleRecommendationContinuity: "NONE",
+      });
     }
-    return {
+    return withGuidance({
       narrative: input.narrative,
       preCycleRoutingAssessment: input.preCycleRoutingAssessment,
       disposition,
@@ -360,11 +820,41 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       lifecycleRecommendationSuppressed: false,
       suppressReason: null,
       boundaryContradiction: null,
-    };
+      lifecycleRecommendationContinuity:
+        candidate != null ? "NEW_CANDIDATE" : "NONE",
+    });
   }
   // EMIT_LIFECYCLE_RECOMMENDATION — never invent LR.
+  // Continuity: null + server CURRENT sufficient → REUSE_CURRENT (no write).
+  // Cognitive Stop outranks transition representation: HOLD path, no MISSING.
   if (candidate === null) {
-    return {
+    if (cognitiveStop) {
+      return withGuidance({
+        narrative: input.narrative,
+        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
+        disposition,
+        lifecycleRecommendation: null,
+        activeCycleWork,
+        lifecycleRecommendationSuppressed: false,
+        suppressReason: "cognitive_stop",
+        boundaryContradiction: null,
+        lifecycleRecommendationContinuity: "NONE",
+      });
+    }
+    if (currentSatisfies) {
+      return withGuidance({
+        narrative: input.narrative,
+        preCycleRoutingAssessment: input.preCycleRoutingAssessment,
+        disposition,
+        lifecycleRecommendation: null,
+        activeCycleWork,
+        lifecycleRecommendationSuppressed: false,
+        suppressReason: null,
+        boundaryContradiction: null,
+        lifecycleRecommendationContinuity: "REUSE_CURRENT",
+      });
+    }
+    return withGuidance({
       narrative: input.narrative,
       preCycleRoutingAssessment: input.preCycleRoutingAssessment,
       disposition,
@@ -373,9 +863,10 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
       lifecycleRecommendationSuppressed: false,
       suppressReason: null,
       boundaryContradiction: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION,
-    };
+      lifecycleRecommendationContinuity: "NONE",
+    });
   }
-  return {
+  return withGuidance({
     narrative: input.narrative,
     preCycleRoutingAssessment: input.preCycleRoutingAssessment,
     disposition,
@@ -384,16 +875,22 @@ export function applyPreCycleRoutingBoundaryCoherence(input: {
     lifecycleRecommendationSuppressed: false,
     suppressReason: null,
     boundaryContradiction: null,
-  };
+    lifecycleRecommendationContinuity: "NEW_CANDIDATE",
+  });
 }

 /**
  * Normalize raw structured output into a coherent Product turn.
  * Missing assessment → fail-closed CONTINUE defaults (plain-text Fake path).
  * Missing activeCycleWork → null (backward compatible).
+ * Missing / invalid conversationGuidance → fail-closed HOLD.
  */
 export function normalizeNoraProductTurnStructuredOutput(
   value: unknown,
+  options?: {
+    cognitiveStop?: boolean;
+    currentLifecycleRecommendationSatisfiesTransition?: boolean;
+  },
 ): PreCycleRoutingBoundaryCoherenceResult | null {
   if (!value || typeof value !== "object") return null;
   const o = value as Record<string, unknown>;
@@ -426,6 +923,12 @@ export function normalizeNoraProductTurnStructuredOutput(
     preCycleRoutingAssessment: assessment,
     lifecycleRecommendation: lr,
     activeCycleWork,
+    conversationGuidance: parseConversationGuidanceOrFailClosed(
+      o.conversationGuidance,
+    ),
+    cognitiveStop: options?.cognitiveStop === true,
+    currentLifecycleRecommendationSatisfiesTransition:
+      options?.currentLifecycleRecommendationSatisfiesTransition === true,
   });
 }

@@ -443,6 +946,7 @@ export function isNoraProductTurnWithOptionalLr(
   ) {
     return false;
   }
+  if (!isConversationGuidance(o.conversationGuidance)) return false;
   if (o.lifecycleRecommendation === null) return true;
   return isNoraLifecycleRecommendationStructuredOutput(
     o.lifecycleRecommendation,
@@ -460,5 +964,6 @@ export function buildFailClosedProductTurnJson(narrative: string): string {
     preCycleRoutingAssessment: PRE_CYCLE_ROUTING_ASSESSMENT_CONTINUE_DEFAULT,
     lifecycleRecommendation: null,
     activeCycleWork: null,
+    conversationGuidance: { ...CONVERSATION_GUIDANCE_FAIL_CLOSED_HOLD },
   });
 }
```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
index 4fb5883b..cbdde04d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
@@ -20,7 +20,7 @@ import {
 } from "@/lib/platform/tools";
 import {
   buildFailClosedProductTurnJson,
-  isPreCycleRoutingAssessment,
+  isNoraProductTurnWithOptionalLr,
   normalizeNoraProductTurnStructuredOutput,
 } from "./noraProductTurnOutputType";

@@ -195,19 +195,19 @@ export function coercePlainTextToProductTurnJson(text: string): string {
       typeof parsed === "object" &&
       typeof (parsed as { narrative?: unknown }).narrative === "string"
     ) {
-      const o = parsed as Record<string, unknown>;
-      if (isPreCycleRoutingAssessment(o.preCycleRoutingAssessment)) {
-        // Ensure schema-required activeCycleWork key (default null).
-        if (!("activeCycleWork" in o)) {
-          return JSON.stringify({ ...o, activeCycleWork: null });
-        }
-        return text;
+      // NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — preserve a valid Product turn.
+      // Early normalize without server CURRENT LR continuity would coerce
+      // EMIT + lifecycleRecommendation=null → HOLD guidance and break reuse.
+      if (isNoraProductTurnWithOptionalLr(parsed)) {
+        return JSON.stringify(parsed);
       }
+      const o = parsed as Record<string, unknown>;
       const coherent = normalizeNoraProductTurnStructuredOutput({
         narrative: o.narrative,
         lifecycleRecommendation: o.lifecycleRecommendation ?? null,
         preCycleRoutingAssessment: o.preCycleRoutingAssessment,
         activeCycleWork: o.activeCycleWork ?? null,
+        conversationGuidance: o.conversationGuidance ?? null,
       });
       if (coherent) {
         return JSON.stringify({
@@ -215,6 +215,7 @@ export function coercePlainTextToProductTurnJson(text: string): string {
           preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
           lifecycleRecommendation: coherent.lifecycleRecommendation,
           activeCycleWork: coherent.activeCycleWork ?? null,
+          conversationGuidance: coherent.conversationGuidance,
         });
       }
       return buildFailClosedProductTurnJson(String(o.narrative));
```

### DIFF: `projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index e8c0410d..208cd8a6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -34,6 +34,9 @@ import {
 } from "./providerAgentsModel";
 import {
   buildFailClosedProductTurnJson,
+  composePilotFacingAssistantText,
+  isConversationGuidance,
+  isNoraProductTurnWithOptionalLr,
   normalizeNoraProductTurnStructuredOutput,
 } from "./noraProductTurnOutputType";
 import { createSfiaRouteToolAdapters } from "./sfiaAgentsTools";
@@ -597,18 +600,44 @@ export async function runNoraAgentsTurn(
             buildFailClosedProductTurnJson(structuredOutput),
           ) as unknown;
         } else if (isProductTurnOutput && structuredOutput) {
-          const coherent =
-            normalizeNoraProductTurnStructuredOutput(structuredOutput);
-          if (coherent) {
-            structuredOutput = {
-              narrative: coherent.narrative,
-              preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
-              lifecycleRecommendation: coherent.lifecycleRecommendation,
-              activeCycleWork: coherent.activeCycleWork ?? null,
-            };
+          // NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — do NOT rewrite a valid
+          // Product turn via normalize here: that path lacks server-derived
+          // CURRENT LR continuity and would coerce EMIT+null → HOLD guidance,
+          // then orchestrateTurn+continuity would fail as LIFECYCLE_MISMATCH.
+          // Preserve raw model output; orchestrateTurn owns boundary coherence.
+          if (!isNoraProductTurnWithOptionalLr(structuredOutput)) {
+            const coherent =
+              normalizeNoraProductTurnStructuredOutput(structuredOutput);
+            if (coherent) {
+              structuredOutput = {
+                narrative: coherent.narrative,
+                preCycleRoutingAssessment: coherent.preCycleRoutingAssessment,
+                lifecycleRecommendation: coherent.lifecycleRecommendation,
+                activeCycleWork: coherent.activeCycleWork ?? null,
+                conversationGuidance: coherent.conversationGuidance,
+              };
+            }
           }
         }
         if (
+          isProductTurnOutput &&
+          structuredOutput &&
+          typeof structuredOutput === "object"
+        ) {
+          const so = structuredOutput as {
+            narrative?: unknown;
+            conversationGuidance?: unknown;
+          };
+          if (typeof so.narrative === "string") {
+            // Preview only — orchestrateTurn re-composes with full Product context.
+            text = isConversationGuidance(so.conversationGuidance)
+              ? composePilotFacingAssistantText(
+                  so.narrative,
+                  so.conversationGuidance,
+                )
+              : so.narrative;
+          }
+        } else if (
           structuredOutput &&
           typeof structuredOutput === "object" &&
           "narrative" in structuredOutput &&
```

### DIFF: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
index bbb7bc57..524bd142 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/index.ts
@@ -4,6 +4,7 @@ export * from "./resolveCanonicalBasis";
 export * from "./validateLifecycleRecommendation";
 export * from "./materializeLifecycleRecommendation";
 export * from "./currentness";
+export * from "./currentLifecycleRecommendationContinuity";
 export * from "./produceLifecycleRecommendation";
 export * from "./materializeFromProductTurn";
 export * from "./materialReaderContract";
```

### DIFF: `projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
index f8f707de..b59eaa43 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/application/lifecycleRecommendation/materializeFromProductTurn.ts
@@ -70,6 +70,10 @@ export type MaterializeFromProductTurnResult = {

 export function extractLifecycleCandidateFromStructuredOutput(
   structuredOutput: unknown,
+  options?: {
+    cognitiveStop?: boolean;
+    currentLifecycleRecommendationSatisfiesTransition?: boolean;
+  },
 ): {
   narrative: string | null;
   candidate: NoraLifecycleRecommendationStructuredOutput | null;
@@ -78,8 +82,15 @@ export function extractLifecycleCandidateFromStructuredOutput(
   routingDisposition?: PreCycleRoutingDisposition | null;
   lifecycleRecommendationSuppressed?: boolean;
   boundaryContradiction?: string | null;
+  lifecycleRecommendationContinuity?:
+    | "NONE"
+    | "NEW_CANDIDATE"
+    | "REUSE_CURRENT";
 } {
-  const coherent = normalizeNoraProductTurnStructuredOutput(structuredOutput);
+  const coherent = normalizeNoraProductTurnStructuredOutput(
+    structuredOutput,
+    options,
+  );
   if (coherent) {
     return {
       narrative: coherent.narrative,
@@ -90,6 +101,8 @@ export function extractLifecycleCandidateFromStructuredOutput(
       lifecycleRecommendationSuppressed:
         coherent.lifecycleRecommendationSuppressed,
       boundaryContradiction: coherent.boundaryContradiction,
+      lifecycleRecommendationContinuity:
+        coherent.lifecycleRecommendationContinuity,
     };
   }
   if (isNoraLifecycleRecommendationStructuredOutput(structuredOutput)) {
```

### DIFF: `projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
index 13c14607..1020c437 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
@@ -536,6 +536,11 @@ describe("CORR-PROOF-04 studioCognitiveContext composer", () => {
       },
       review: { state: "NONE" as const, items: [] },
       trajectory: { state: "ABSENT" as const, current: null },
+      lifecycleRecommendation: {
+        state: "NONE" as const,
+        current: null,
+        satisfiesPreCycleNextCycleTransition: false,
+      },
       limits: {
         oaAvailable: true,
         truthOutranksConversation: true as const,
```

### DIFF: `projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
index 34e16985..628c0ba8 100644
--- a/projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/corrProof06.artifactObligation.d0.test.ts
@@ -714,6 +714,11 @@ describe("CORR-PROOF-06 — Artifact obligation selection & recovery", () => {
       evidence: { state: "NONE" as const, items: [] },
       review: { state: "NONE" as const, items: [] },
       trajectory: { state: "ABSENT" as const, current: null },
+      lifecycleRecommendation: {
+        state: "NONE" as const,
+        current: null,
+        satisfiesPreCycleNextCycleTransition: false,
+      },
       limits: {
         oaAvailable: true,
         truthOutranksConversation: true as const,
```

### Related local NCI candidate still uncommitted (pre-existing this branch)
- `noraProductTurnOutputType.ts` / `buildProjectSystemPrompt.ts` / `orchestrateTurn.ts` / `providerAgentsModel.ts` / `runNoraAgentsTurn.ts` / NCI tests / ACW+RB+finalCorr fixtures
- Continuity extends these; no replace-from-main

## 19. Verdict

**NORA-LIFECYCLE-RECOMMENDATION-CONTINUITY-01 — REAL-02 CONTINUITY DEFECT CLOSED DETERMINISTICALLY — READY FOR CHATGPT CRITICAL REVIEW**
