# SFIA Review Pack — FULL — T-A6 D3 ClaimEvaluation Implementation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 10:31:11 CEST (+0200) |
| **Cycle** | Delivery — implémentation / T-A6-D3 ClaimEvaluation |
| **Profil** | Critical |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `589fe19b19b46275ee74a327c13645cdd0f534a1` |
| **HEAD final** | `8232b95a7404c3a501926a811e2e518cdefa67aa` |
| **Commits** | `7c593d4` feat D3 · `8232b95` record HEAD |
| **Push/PR/merge** | **NON** |
| **D4–D5** | **NON** |
| **Modeled / T-A3–T-A5 / packages** | **NON** modifiés |
| **D1/D2 régressés** | **NON** (101 PASS) |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D3 CLAIM EVALUATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — HEAD initial `589fe19…` ; final `8232b95a7404c3a501926a811e2e518cdefa67aa` ; main `b25c20e6…` ; handoff source `16d91407…`.

### Status

```
## framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
?? .tmp-sfia-review/
```

### Untracked

```
.tmp-sfia-review/chatgpt-review.md
.tmp-sfia-review/created.txt
.tmp-sfia-review/handoff-blob.txt
.tmp-sfia-review/modified.txt
.tmp-sfia-review/pr-body.md
```

### Worktrees

```
worktree /Users/morris/Projects/sfia-workspace
HEAD bb3c9e29936a925174beb0c1758e8fe887e58bc3
branch refs/heads/delivery/sfia-studio-control-tower-fast-track

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-main-ckc-postmerge
HEAD b25c20e6eb131cba7dc811697b763fd033f3f652
branch refs/heads/main

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher

worktree /Users/morris/Projects/sfia-workspace-shared-platform-delivery
HEAD 08c282abafd97685bcc0b7e525ec96e6721ec589
branch refs/heads/delivery/sfia-studio-shared-technical-platform

worktree /Users/morris/Projects/sfia-workspace-template-handoff-fix
HEAD 134be301792efbf6f9739d13f0572062ef976da7
detached

worktree /Users/morris/Projects/sfia-workspace-ux-reconciliation
HEAD 7bdabdcc0ea5f760383da190a661250dcd5d2598
branch refs/heads/project/sfia-studio-ux-ui-reconciliation

worktree /Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation
HEAD daf6f7d02bbac09024f6275a793769e66b2b3878
branch refs/heads/method/sfia-studio-v3-doctrine-consolidation

worktree /Users/morris/Projects/sfia-workspace-v3-native-audit
HEAD 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
branch refs/heads/audit/sfia-studio-v3-native-dependencies

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-arch
HEAD 577ff0c22491288d2293fd9730ed26f0af4095b0
branch refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-design
HEAD e22bc243c8854df4e9422fafe46e92135fe242e9
branch refs/heads/design/sfia-studio-v3-native-option-a-functional

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled
HEAD 52891e5c5a9b1254143e422111ea4955ca3a0940
branch refs/heads/modeled/sfia-studio-v3-native-option-a

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech
HEAD 8232b95a7404c3a501926a811e2e518cdefa67aa
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-ux
HEAD 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
branch refs/heads/design/sfia-studio-v3-native-option-a-ux-ui

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-0446bc83-3035-4a0b-9e8d-4661ab748901

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-05525a6a-0adf-4462-b129-c5fa182cdb68

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-0d572b5f-d153-4240-b98d-d29e9c9b2a89

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-2025ea48-d8af-436b-ae71-93923c5523b1

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-228160ae-0c4b-43c4-8f6e-50eac967ac6f

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-266f3e0b-3bc0-48f7-8007-ef9d5b846f10

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-280d622f-4bf1-402b-a11f-ea56eb4cdc29

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-360cabed-4c08-4287-80a4-b3374d8bcb56

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-4667d0cb-b88e-4d05-a347-500ee60a1f62

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-4d15862f-ee7a-40a1-9122-5317fbda8928

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-5209292d-9a66-44ed-9147-d643402bff14

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-5fa98d2a-e3e0-4938-a7f2-56b51452e2fd

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-6a973429-907f-496a-bcbf-bbeb98ef1539

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-6c1b45e4-ae53-40eb-9bd3-4fbde6a5dc61

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-71baf16b-92d7-47ae-9094-386fd2e0e66a

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-725e8c1a-a1dd-4dde-9849-a70b94ab3608

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7758d3ee-2fea-44f4-8fd3-4d4b0adfc3ce

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-7b99ce34-67b0-41ef-8f69-00bab598178d

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-7fcd2560-1298-4275-b771-efe52dd5bdb6

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-80872887-627f-4afa-8f12-a971136a8aa8

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-8e1adf99-460d-4f61-be9c-fdb06ac287ca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-91651fa1-4540-4108-adec-1a31768f89d4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-99be8189-55a3-4a3f-a58f-7ec1ddb64cc0

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-9e7b9d80-d7b9-44dd-903c-aecbd1ae3187

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-a0b14c48-f99e-4406-ab68-3eaeaef02de7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-bbe95b44-c568-4d95-974d-688efebe37b7

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-beed0515-1a82-452b-bdae-646d3c9e8846

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-bffb454e-caf5-4fec-ac8f-514e313d475e

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-c9b1dda7-ad0d-4d41-bc16-e5f9c8a58700

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-ce0e117d-1c6d-4ac4-97a9-bb303bdead9c

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4
HEAD 32e5271842b9a344a7e292614675c27ea8ed941b
branch refs/heads/ops1/action/ops1-xatt-cfacc578-e3ce-4628-9a18-0c1f29ce0fa4

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-d790f0e1-2a6b-40ab-8dc8-f3006efdbaca

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-e8e66e7a-f871-40a2-b38d-3327a128a353

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-ebfb42b9-b99d-4d49-9be3-e19fe1aef050

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-edde6803-63bb-440e-ab9d-1d5059e1379b

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f3be6fd0-79ce-44fa-b5bc-0df452a468a2

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230
HEAD 27811e8f5f3747706bbbe417a5dc949a066c9187
branch refs/heads/ops1/action/ops1-xatt-f9349af8-03f1-4049-947d-b9ceb58d7230

worktree /Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/local-i1/worktrees/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0
HEAD 4b279b8af41559c4e6e9c41a481c9c3b76675026
branch refs/heads/ops1/action/ops1-xatt-fc8ba3a6-097e-4d70-8d1f-f154c55080f0

worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff
HEAD 2c195caf14bba34c052395fdb6bd9366eb36d655
branch refs/heads/sfia/review-handoff
```

## 2. Handoff source

blob `16d91407e30e60d5605be3e0ca04552c115c4ec7` — D2 VALIDATED AFTER CORRECTION — D3 REQUIRES MORRIS GO

## 3. CKC

`03-architecture-technique.md` · candidate · `executionAuthority=false`

## 4. Arborescence

```
projects/sfia-studio/app/lib/oa/evidence-review/application/attachEvidenceToReviewBundle.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/claimEvidenceAssessment.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/completeReview.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/createReviewBundle.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateClaim.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/freezeReviewBundle.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/markEvidenceUnavailable.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/rejectClaimEvaluation.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/removeEvidenceFromReviewBundle.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/reopenReview.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/startReview.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/verifyEvidenceIntegrity.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationErrors.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/errors.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleErrors.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleInvariants.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleTypes.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
projects/sfia-studio/app/lib/oa/evidence-review/index.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/claimAuthorityAdapter.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/evidenceRepositoryReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeExecutionAttemptReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/idGenerator.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationStore.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceStore.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleStore.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/observability.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/reviewBundleRepositoryReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/claimAuthorityPort.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidencePayloadPort.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/executionAttemptReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/idGenerator.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
```

## 5. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review D1+D2+D3 | **101 PASS** |
| T-A3 / T-A4 / T-A5 | 50 / 61 / 88 PASS |
| Modeled T-A6 | 27 PASS |
| typecheck / lint / secret / diff-check | PASS |

## 6. Findings

Aucun Critical / Major.

## 7. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 OPEN · C1–C4 NOT VALIDATED (C1 couvert techniquement)

## 8. Contenu complet — `13-delivery-d3-implementation.md`

```markdown
# 13 — T-A6-D3 ClaimEvaluation Implementation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D3 — ClaimEvaluation |
| **Cycle** | Delivery — implémentation (Critical) |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `589fe19b19b46275ee74a327c13645cdd0f534a1` |
| **HEAD final** |  |
| **Horodatage** | 2026-07-26 10:31:00 CEST (+0200) |
| **Handoff source** | blob `16d91407e30e60d5605be3e0ca04552c115c4ec7` |
| **Statut** | **T-A6-D3 IMPLEMENTED — NOT VALIDATED** |
| **D1 / D2** | VALIDATED AFTER CORRECTION |
| **D4–D5** | **NON** |
| **Fake-only / mémoire** | **oui** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D3 CLAIM EVALUATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`12` · ClaimEvaluation schema `0.1.0-oa` · catalogue commandes · runtime D1/D2 · T-A3 AuthorityResolver RO · CKC `03-architecture-technique.md` (candidate, `executionAuthority=false`).

---

## 2. Périmètre D3

### Inclus

- Domaine ClaimEvaluation (`clm:`) + OCC runtime
- Commandes modeled : `EvaluateClaim` · `ConfirmClaimEvaluation` · `RejectClaimEvaluation`
- Intents EvaluateClaim : `evaluate` | `waive` | `dispute` (CreateClaim absorbé)
- Binding immuable `reviewBundleId` + `reviewBundleVersion` (= `frozenVersion`)
- Evidence assessments fail-closed (snapshot + verified + available)
- Authority via `ClaimAuthorityPort` / `FakeClaimAuthority` / adapter T-A3
- MemoryClaimEvaluationRepository · Audit `oa.claim_evaluation.*`

### Hors périmètre

MaturityAssessment · D5 · SQL/API/UI · T-A7 · modification modeled / T-A3–T-A5 · fermeture réserves

---

## 3. Architecture

Module inchangé : `app/lib/oa/evidence-review/**`

```
domain/claimEvaluation{Types,Errors,Invariants}.ts
application/{evaluateClaim,confirmClaimEvaluation,rejectClaimEvaluation,claimEvidenceAssessment}.ts
ports/{claimEvaluationRepository,reviewBundleReader,claimAuthorityPort}.ts
infrastructure/{memoryClaimEvaluation{Store,Repository},reviewBundleRepositoryReader,claimAuthorityAdapter}.ts
```

Adaptation D2 non-breaking : `ReviewBundle.frozenVersion` renseigné au freeze.

---

## 4. Lifecycle / outcomes

`pending` (non exposé en happy path) · `evaluating` · `pass` · `fail` · `not_proven` · `waived` · `disputed`

- non_critical + deterministic + Evidence OK ⇒ `pass` + `system_deterministic`
- critical / structural + Evidence OK ⇒ `evaluating` puis Confirm
- Evidence manquante / hors snapshot / unavailable / non verified / stale ⇒ `not_proven` (jamais PASS)
- requiredEvidenceRefs vide ⇒ `not_proven`
- synthesisOnly ou completeness≠complete ⇒ `not_proven`
- Critical : humain, ≠ system/agent, self-review interdite
- Structural : `confirmationAuthority=morris` + `canActAsMorris` + role `decision_maker`
- Waiver ≠ PASS ; system/agent interdits
- Dispute bloque Confirm (`CLAIM_DISPUTED`)
- Supersession : nouvel `clm:` + `supersedesClaimEvaluationId` ; ancien immuable

---

## 5. PASS invariants (C1 couvert techniquement, non validé)

- requiredEvidenceRefs non vide
- chaque ref ∈ `frozenEvidenceSnapshots`
- version Evidence live = version snapshot
- availability available · status verified · freshness ≠ stale
- ReviewBundle frozen + `frozenVersion` exact
- aucun Claim PASS ≠ autorité d’exécution
- aucune Maturity créée

---

## 6. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review D1+D2+D3 | **101 PASS** (87→101, +14 D3) |
| T-A3 / T-A4 / T-A5 | 50 / 61 / 88 PASS |
| Modeled T-A6 | 27 PASS |
| typecheck / lint / diff-check | PASS |

---

## 7. Findings

Aucun Critical / Major ouvert à l’implémentation.

Observations : C1 couvert fail-closed sans validation de réserve · R-M01 OPEN · O-D3-1 intents waive/dispute via EvaluateClaim (commandes cataloguées).

---

## 8. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN** · C1–C4 **NOT VALIDATED**

---

## 9. Anti-claims

Pas D3 VALIDATED · D4 READY · Maturity · persistence réelle · T-A7 · R-M01 fermée · exécution réelle

---

## 10. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D3 CLAIM EVALUATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
```

## 9. Contenu complet — README

```markdown
# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Profil** | Critical |
| **Gate D1 validate** | `GO VALIDATE T-A6 DELIVERY D1` (**CONSUMED**) |
| **Gate D2 validate** | `GO VALIDATE T-A6 DELIVERY D2` (**CONSUMED**) |
| **Gate D3 implement** | `GO IMPLEMENT T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` |
| **Runtime D1** | **VALIDATED** (après correction) |
| **Runtime D2** | **VALIDATED AFTER CORRECTION** |
| **Runtime D3** | ClaimEvaluation — **IMPLEMENTED — NOT VALIDATED** |
| **Fake-only / mémoire** | **oui** |
| **D4–D5** | **NON** lancés |
| **Push / PR / merge** | **NONE** |
| **Statut pack** | **T-A6-D3 IMPLEMENTED — NOT VALIDATED** |
| **Horodatage D3** | 2026-07-26 10:31:00 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D3 CLAIM EVALUATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Livrables

1. [README.md](./README.md)
2. [01](./01-framing.md) … [12-delivery-d2-validation.md](./12-delivery-d2-validation.md)
3. [13-delivery-d3-implementation.md](./13-delivery-d3-implementation.md)
4. Runtime : `app/lib/oa/evidence-review/**` (D1+D2+D3)
5. Tests : `app/__tests__/oa/evidence-review/**`

## D3 implémenté

EvaluateClaim / ConfirmClaimEvaluation / RejectClaimEvaluation · binding RB frozenVersion · PASS fail-closed Evidence · Critical/Morris authority · waiver/dispute intents · 101 tests D1–D3 PASS

## Réserves (OPEN)

B5 · R1 · R-T-A3-1..4 (HARD 1–2) · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

## Anti-claims

Pas D3 VALIDATED / D4 READY / Maturity / persistence réelle / T-A7 / R-M01 fermée / C1–C4 validées
```

## 10. Diff utile — feat stat + D2 frozenVersion / barrel / audit

```
commit 7c593d43baea507a1fcd92dcc4ad7d7c0a1adf31
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 10:30:56 2026 +0200

    feat(sfia-studio): implement T-A6 D3 claim evaluation

    Add EvaluateClaim, ConfirmClaimEvaluation and RejectClaimEvaluation over
    frozen ReviewBundle snapshots with fail-closed Evidence and T-A3 authority.

    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../claimEvaluationLifecycle.test.ts               | 628 ++++++++++++++++++++
 .../application/claimEvidenceAssessment.ts         | 123 ++++
 .../application/confirmClaimEvaluation.ts          | 291 +++++++++
 .../evidence-review/application/evaluateClaim.ts   | 650 +++++++++++++++++++++
 .../application/freezeReviewBundle.ts              |   4 +-
 .../application/rejectClaimEvaluation.ts           | 226 +++++++
 .../domain/claimEvaluationErrors.ts                | 119 ++++
 .../domain/claimEvaluationInvariants.ts            | 297 ++++++++++
 .../evidence-review/domain/claimEvaluationTypes.ts | 213 +++++++
 .../oa/evidence-review/domain/reviewBundleTypes.ts |   2 +
 .../app/lib/oa/evidence-review/index.ts            |  91 ++-
 .../infrastructure/claimAuthorityAdapter.ts        |  87 +++
 .../memoryClaimEvaluationRepository.ts             | 116 ++++
 .../infrastructure/memoryClaimEvaluationStore.ts   |  11 +
 .../infrastructure/reviewBundleRepositoryReader.ts |  11 +
 .../oa/evidence-review/ports/claimAuthorityPort.ts |  23 +
 .../ports/claimEvaluationRepository.ts             |  25 +
 .../lib/oa/evidence-review/ports/evidenceAudit.ts  |  16 +-
 .../oa/evidence-review/ports/reviewBundleReader.ts |   6 +
 .../13-delivery-d3-implementation.md               | 126 ++++
 .../t-a6-evidence-review-claims-maturity/README.md |  35 +-
 21 files changed, 3076 insertions(+), 24 deletions(-)

```

```diff
commit 7c593d43baea507a1fcd92dcc4ad7d7c0a1adf31
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 10:30:56 2026 +0200

    feat(sfia-studio): implement T-A6 D3 claim evaluation

    Add EvaluateClaim, ConfirmClaimEvaluation and RejectClaimEvaluation over
    frozen ReviewBundle snapshots with fail-closed Evidence and T-A3 authority.

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/freezeReviewBundle.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/freezeReviewBundle.ts
index 07036e5..777487a 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/freezeReviewBundle.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/freezeReviewBundle.ts
@@ -199,6 +199,7 @@ export class FreezeReviewBundle {
         );
       }

+      const nextVersion = current.version + 1;
       const updated: ReviewBundle = {
         ...current,
         claimEvaluationRefs: [],
@@ -206,8 +207,9 @@ export class FreezeReviewBundle {
         status: "ready_for_review",
         frozenAt: timestamp,
         frozenEvidenceSnapshots: snapshots,
+        frozenVersion: nextVersion,
         updatedAt: timestamp,
-        version: current.version + 1,
+        version: nextVersion,
         idempotencyKey: request.idempotencyKey,
       };

diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleTypes.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleTypes.ts
index 9bb7000..349089b 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleTypes.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleTypes.ts
@@ -54,6 +54,8 @@ export type ReviewBundle = {
   provenance: ProvenanceRecord;
   /** Runtime: set at freeze; immutable thereafter. */
   frozenEvidenceSnapshots?: ReviewBundleEvidenceSnapshot[];
+  /** Runtime: OCC version at freeze — ClaimEvaluation binds this exact value. */
+  frozenVersion?: number;
   /** Runtime command idempotency key for create. */
   idempotencyKey?: string;
   updatedAt?: string;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 588a935..0fe17b8 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -1,12 +1,13 @@
 /**
- * T-A6 Evidence-Review barrel — D1 Evidence + D2 ReviewBundle (Option A v3-native).
+ * T-A6 Evidence-Review barrel — D1 Evidence + D2 ReviewBundle + D3 ClaimEvaluation.
  *
  * Module: app/lib/oa/evidence-review/**
  *
  * D1: Evidence register/ingest/verify/unavailable — memory + fake-only.
  * D2: ReviewBundle create/attach/remove/freeze/start/complete/reopen.
+ * D3: ClaimEvaluation EvaluateClaim / Confirm / Reject.
  *
- * WHAT THIS IS NOT: ClaimEvaluation (D3), Maturity (D4), coordination D5,
+ * WHAT THIS IS NOT: Maturity (D4), coordination D5,
  * SQL, API/UI, real adapters, T-A7, real execution.
  */

@@ -16,6 +17,19 @@ export * from "./domain/invariants";
 export * from "./domain/reviewBundleTypes";
 export * from "./domain/reviewBundleErrors";
 export * from "./domain/reviewBundleInvariants";
+export * from "./domain/claimEvaluationTypes";
+export * from "./domain/claimEvaluationErrors";
+export {
+  CLAIM_TYPES,
+  CLAIM_CRITICALITIES,
+  CLAIM_METHODS,
+  CLAIM_STATUSES,
+  isClaimEvaluationId,
+  sortEvidenceIds,
+  validateClaimEvaluationShape,
+  evidenceSupportsPass,
+} from "./domain/claimEvaluationInvariants";
+export type { ClaimInvariantViolation } from "./domain/claimEvaluationInvariants";

 export * from "./ports/evidenceRepository";
 export * from "./ports/evidencePayloadPort";
@@ -24,6 +38,9 @@ export * from "./ports/evidenceAudit";
 export * from "./ports/idGenerator";
 export * from "./ports/evidenceReader";
 export * from "./ports/reviewBundleRepository";
+export * from "./ports/reviewBundleReader";
+export * from "./ports/claimEvaluationRepository";
+export * from "./ports/claimAuthorityPort";

 export { RegisterEvidence } from "./application/registerEvidence";
 export { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
@@ -36,6 +53,9 @@ export { FreezeReviewBundle } from "./application/freezeReviewBundle";
 export { StartReview } from "./application/startReview";
 export { CompleteReview } from "./application/completeReview";
 export { ReopenReview } from "./application/reopenReview";
+export { EvaluateClaim } from "./application/evaluateClaim";
+export { ConfirmClaimEvaluation } from "./application/confirmClaimEvaluation";
+export { RejectClaimEvaluation } from "./application/rejectClaimEvaluation";

 export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
 export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
@@ -45,6 +65,13 @@ export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemp
 export { EvidenceRepositoryReader } from "./infrastructure/evidenceRepositoryReader";
 export { MemoryReviewBundleStore } from "./infrastructure/memoryReviewBundleStore";
 export { MemoryReviewBundleRepository } from "./infrastructure/memoryReviewBundleRepository";
+export { ReviewBundleRepositoryReader } from "./infrastructure/reviewBundleRepositoryReader";
+export { MemoryClaimEvaluationStore } from "./infrastructure/memoryClaimEvaluationStore";
+export { MemoryClaimEvaluationRepository } from "./infrastructure/memoryClaimEvaluationRepository";
+export {
+  ClaimAuthorityAdapter,
+  FakeClaimAuthority,
+} from "./infrastructure/claimAuthorityAdapter";
 export {
   ConsoleEvidenceAuditJournal,
   MemoryEvidenceAuditJournal,
@@ -58,15 +85,19 @@ import type { ClockPort } from "@/lib/oa/doctrine";
 import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
 import { AttachEvidenceToReviewBundle } from "./application/attachEvidenceToReviewBundle";
 import { CompleteReview } from "./application/completeReview";
+import { ConfirmClaimEvaluation } from "./application/confirmClaimEvaluation";
 import { CreateReviewBundle } from "./application/createReviewBundle";
+import { EvaluateClaim } from "./application/evaluateClaim";
 import { FreezeReviewBundle } from "./application/freezeReviewBundle";
 import { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
 import { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
 import { RegisterEvidence } from "./application/registerEvidence";
+import { RejectClaimEvaluation } from "./application/rejectClaimEvaluation";
 import { RemoveEvidenceFromReviewBundle } from "./application/removeEvidenceFromReviewBundle";
 import { ReopenReview } from "./application/reopenReview";
 import { StartReview } from "./application/startReview";
 import { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
+import { FakeClaimAuthority } from "./infrastructure/claimAuthorityAdapter";
 import { EvidenceRepositoryReader } from "./infrastructure/evidenceRepositoryReader";
 import { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
 import { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
@@ -74,25 +105,34 @@ import {
   FixedIdGenerator,
   RandomIdGenerator,
 } from "./infrastructure/idGenerator";
+import { MemoryClaimEvaluationRepository } from "./infrastructure/memoryClaimEvaluationRepository";
+import { MemoryClaimEvaluationStore } from "./infrastructure/memoryClaimEvaluationStore";
 import { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
 import { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
 import { MemoryReviewBundleRepository } from "./infrastructure/memoryReviewBundleRepository";
 import { MemoryReviewBundleStore } from "./infrastructure/memoryReviewBundleStore";
+import { ReviewBundleRepositoryReader } from "./infrastructure/reviewBundleRepositoryReader";
 import {
   ConsoleEvidenceAuditJournal,
   MemoryEvidenceAuditJournal,
 } from "./infrastructure/observability";
+import type { ClaimAuthorityPort } from "./ports/claimAuthorityPort";
 import type { EvidenceAuditPort } from "./ports/evidenceAudit";
 import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
 import type { EvidenceReaderPort } from "./ports/evidenceReader";
 import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
 import type { IdGeneratorPort } from "./ports/idGenerator";
+import type { ReviewBundleReaderPort } from "./ports/reviewBundleReader";

 export type EvidenceReviewServices = {
   store: MemoryEvidenceStore;
   repository: MemoryEvidenceRepository;
   reviewBundleStore: MemoryReviewBundleStore;
   reviewBundleRepository: MemoryReviewBundleRepository;
+  reviewBundleReader: ReviewBundleReaderPort;
+  claimEvaluationStore: MemoryClaimEvaluationStore;
+  claimEvaluationRepository: MemoryClaimEvaluationRepository;
+  claimAuthority: ClaimAuthorityPort;
   evidenceReader: EvidenceReaderPort;
   payload: EvidencePayloadPort;
   attemptReader: ExecutionAttemptReaderPort;
@@ -110,6 +150,9 @@ export type EvidenceReviewServices = {
   startReview: StartReview;
   completeReview: CompleteReview;
   reopenReview: ReopenReview;
+  evaluateClaim: EvaluateClaim;
+  confirmClaimEvaluation: ConfirmClaimEvaluation;
+  rejectClaimEvaluation: RejectClaimEvaluation;
 };

 export type CreateEvidenceReviewServicesOptions = {
@@ -120,7 +163,9 @@ export type CreateEvidenceReviewServicesOptions = {
   attemptReader?: ExecutionAttemptReaderPort;
   store?: MemoryEvidenceStore;
   reviewBundleStore?: MemoryReviewBundleStore;
+  claimEvaluationStore?: MemoryClaimEvaluationStore;
   evidenceReader?: EvidenceReaderPort;
+  claimAuthority?: ClaimAuthorityPort;
 };

 export function createInMemoryEvidenceReviewServices(
@@ -133,6 +178,15 @@ export function createInMemoryEvidenceReviewServices(
   const reviewBundleRepository = new MemoryReviewBundleRepository(
     reviewBundleStore,
   );
+  const reviewBundleReader = new ReviewBundleRepositoryReader(
+    reviewBundleRepository,
+  );
+  const claimEvaluationStore =
+    options.claimEvaluationStore ?? new MemoryClaimEvaluationStore();
+  const claimEvaluationRepository = new MemoryClaimEvaluationRepository(
+    claimEvaluationStore,
+  );
+  const claimAuthority = options.claimAuthority ?? new FakeClaimAuthority();
   const clock = options.clock ?? new SystemClock();
   const audit = options.audit ?? new ConsoleEvidenceAuditJournal();
   const ids = options.ids ?? new RandomIdGenerator();
@@ -147,6 +201,10 @@ export function createInMemoryEvidenceReviewServices(
     repository,
     reviewBundleStore,
     reviewBundleRepository,
+    reviewBundleReader,
+    claimEvaluationStore,
+    claimEvaluationRepository,
+    claimAuthority,
     evidenceReader,
     payload,
     attemptReader,
@@ -220,6 +278,28 @@ export function createInMemoryEvidenceReviewServices(
       audit,
       ids,
     ),
+    evaluateClaim: new EvaluateClaim(
+      claimEvaluationRepository,
+      reviewBundleReader,
+      evidenceReader,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    confirmClaimEvaluation: new ConfirmClaimEvaluation(
+      claimEvaluationRepository,
+      claimAuthority,
+      clock,
+      audit,
+      ids,
+    ),
+    rejectClaimEvaluation: new RejectClaimEvaluation(
+      claimEvaluationRepository,
+      clock,
+      audit,
+      ids,
+    ),
   };
 }

@@ -231,6 +311,7 @@ export function createTestEvidenceReviewServices(
   fakePayload: FakeEvidencePayloadAdapter;
   fakeAttempts: FakeExecutionAttemptReader;
   memoryAudit: MemoryEvidenceAuditJournal;
+  fakeClaimAuthority: FakeClaimAuthority;
 } {
   const fakePayload =
     options.payload instanceof FakeEvidencePayloadAdapter
@@ -244,6 +325,10 @@ export function createTestEvidenceReviewServices(
     options.audit instanceof MemoryEvidenceAuditJournal
       ? options.audit
       : new MemoryEvidenceAuditJournal();
+  const fakeClaimAuthority =
+    options.claimAuthority instanceof FakeClaimAuthority
+      ? options.claimAuthority
+      : new FakeClaimAuthority();

   const services = createInMemoryEvidenceReviewServices({
     ...options,
@@ -254,6 +339,7 @@ export function createTestEvidenceReviewServices(
     ids: options.ids ?? new FixedIdGenerator(),
     payload: fakePayload,
     attemptReader: fakeAttempts,
+    claimAuthority: fakeClaimAuthority,
   });

   return {
@@ -261,5 +347,6 @@ export function createTestEvidenceReviewServices(
     fakePayload,
     fakeAttempts,
     memoryAudit,
+    fakeClaimAuthority,
   };
 }
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts b/projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts
index eee0d2f..7107eaa 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts
@@ -23,7 +23,20 @@ export type EvidenceAuditEventName =
   | "oa.review_bundle.reopened"
   | "oa.review_bundle.operation_rejected"
   | "oa.review_bundle.idempotency_conflict"
-  | "oa.review_bundle.concurrent_modification_rejected";
+  | "oa.review_bundle.concurrent_modification_rejected"
+  | "oa.claim_evaluation.created"
+  | "oa.claim_evaluation.evaluated"
+  | "oa.claim_evaluation.passed"
+  | "oa.claim_evaluation.failed"
+  | "oa.claim_evaluation.inconclusive"
+  | "oa.claim_evaluation.confirmation_requested"
+  | "oa.claim_evaluation.confirmed"
+  | "oa.claim_evaluation.waived"
+  | "oa.claim_evaluation.disputed"
+  | "oa.claim_evaluation.operation_rejected"
+  | "oa.claim_evaluation.authority_rejected"
+  | "oa.claim_evaluation.idempotency_conflict"
+  | "oa.claim_evaluation.concurrent_modification_rejected";

 export type EvidenceAuditEvent = {
   event: EvidenceAuditEventName;
@@ -34,6 +47,7 @@ export type EvidenceAuditEvent = {
   executionAttemptId?: string;
   reviewBundleId?: string;
   successorReviewBundleId?: string;
+  claimEvaluationId?: string;
   actorId?: string;
   previousStatus?: string;
   newStatus?: string;
```

## 11. Contenu complet — runtime + tests D3

### `projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationTypes.ts`

```typescript
/**
 * T-A6-D3 ClaimEvaluation — domain types (Option A v3-native).
 * Modeled: claim-evaluation.schema.json 0.1.0-oa.
 * Commands: EvaluateClaim · ConfirmClaimEvaluation · RejectClaimEvaluation.
 * CreateClaim absorbed into EvaluateClaim v1. No MaturityAssessment.
 */

import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";

export type { ActorReference, ProvenanceRecord };

export const CLAIM_EVALUATION_SCHEMA_VERSION = "0.1.0-oa" as const;

export type ClaimType =
  | "technique"
  | "conformite"
  | "qualite"
  | "securite"
  | "maturite_support";

export type ClaimCriticality = "non_critical" | "critical" | "structural";

export type ClaimEvaluationMethod =
  | "deterministic"
  | "assisted"
  | "human_review";

export type ClaimEvaluationStatus =
  | "pending"
  | "evaluating"
  | "pass"
  | "fail"
  | "not_proven"
  | "waived"
  | "disputed";

export type ClaimConfirmationAuthority =
  | "system_deterministic"
  | "authorized_human"
  | "morris";

export type ClaimEvidenceAssessmentCode =
  | "ok"
  | "missing"
  | "not_in_bundle"
  | "version_mismatch"
  | "unavailable"
  | "not_verified"
  | "stale"
  | "incomplete"
  | "rejected";

export type ClaimEvidenceAssessment = {
  evidenceId: string;
  expectedVersion?: number;
  observedVersion?: number;
  status?: string;
  availability?: string;
  freshness?: string;
  code: ClaimEvidenceAssessmentCode;
};

export type ClaimWaiver = {
  reason: string;
  authorizedBy: ActorReference;
  authorizedAt: string;
  reversible: true;
};

export type ClaimDispute = {
  reason: string;
  raisedBy: ActorReference;
  raisedAt: string;
};

export type ClaimEvaluation = {
  schemaVersion: typeof CLAIM_EVALUATION_SCHEMA_VERSION;
  claimEvaluationId: string;
  claimType: ClaimType;
  claimStatement: string;
  criticality: ClaimCriticality;
  evaluationMethod: ClaimEvaluationMethod;
  ruleRef?: string;
  requiredEvidenceRefs: string[];
  providedEvidenceRefs?: string[];
  reviewBundleId: string;
  reviewBundleVersion: number;
  status: ClaimEvaluationStatus;
  proposedBy: ActorReference;
  reviewedBy?: ActorReference;
  confirmedBy?: ActorReference;
  confirmationAuthority?: ClaimConfirmationAuthority;
  proposedAt: string;
  evaluatedAt?: string;
  confirmedAt?: string;
  waiver?: ClaimWaiver;
  dispute?: ClaimDispute;
  provenance: ProvenanceRecord;
  /** Runtime OCC — monotone. */
  version: number;
  /** Runtime evidence assessments (refs-only). */
  evidenceAssessments?: ClaimEvidenceAssessment[];
  /** Runtime: prior claim evaluation this supersedes (new id; old unchanged). */
  supersedesClaimEvaluationId?: string;
  idempotencyKey?: string;
  updatedAt?: string;
  rejectionReason?: string;
};

export type ClaimEvaluationDetailCode =
  | "CLAIM_EVALUATION_INVALID"
  | "CLAIM_EVALUATION_NOT_FOUND"
  | "CLAIM_EVALUATION_ALREADY_EXISTS"
  | "CLAIM_EVALUATION_INVALID_STATE"
  | "CLAIM_EVALUATION_ALREADY_CONFIRMED"
  | "CLAIM_EVALUATION_SUPERSEDED"
  | "CLAIM_REQUIRED_EVIDENCE_MISSING"
  | "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE"
  | "CLAIM_EVIDENCE_VERSION_MISMATCH"
  | "CLAIM_EVIDENCE_UNAVAILABLE"
  | "CLAIM_EVIDENCE_NOT_VERIFIED"
  | "CLAIM_REVIEW_BUNDLE_INVALID"
  | "CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH"
  | "CLAIM_CONFIRMATION_REQUIRED"
  | "CLAIM_AUTHORITY_FORBIDDEN"
  | "CLAIM_SELF_REVIEW_FORBIDDEN"
  | "CLAIM_WAIVER_FORBIDDEN"
  | "CLAIM_DISPUTED"
  | "CLAIM_SECRET_FORBIDDEN"
  | "REVIEW_BUNDLE_NOT_FOUND"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "CLAIM_EVALUATION_PERSISTENCE_FAILED";

export type ClaimEvaluationModeledErrorCode =
  | "STATE_CONFLICT"
  | "VALIDATION_FAILED"
  | "AUTHORITY_DENIED";

export type ClaimEvaluationStructuredError = {
  code: ClaimEvaluationModeledErrorCode;
  detailCode: ClaimEvaluationDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: true;
  recoverable: boolean;
  domain: "F";
  timestamp: string;
  correlationId?: string;
  claimEvaluationId?: string;
  reviewBundleId?: string;
  evidenceId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
};

export type ClaimEvaluationResult = {
  ok: true;
  claimEvaluation: ClaimEvaluation;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
} | {
  ok: false;
  error: ClaimEvaluationStructuredError;
  claimEvaluation?: ClaimEvaluation;
  durationMs: number;
};

export type EvaluateClaimIntent = "evaluate" | "waive" | "dispute";

export type EvaluateClaimRequest = {
  claimEvaluationId: string;
  idempotencyKey: string;
  actor: ActorReference;
  claimType: ClaimType;
  claimStatement: string;
  criticality: ClaimCriticality;
  evaluationMethod: ClaimEvaluationMethod;
  ruleRef?: string;
  requiredEvidenceRefs: string[];
  reviewBundleId: string;
  reviewBundleVersion: number;
  intent?: EvaluateClaimIntent;
  waiverReason?: string;
  disputeReason?: string;
  supersedesClaimEvaluationId?: string;
  correlationId?: string;
  nowIso?: string;
};

export type ConfirmClaimEvaluationRequest = {
  claimEvaluationId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  authorityEvidenceId?: string;
  correlationId?: string;
  nowIso?: string;
};

export type RejectClaimEvaluationRequest = {
  claimEvaluationId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  outcome: "fail" | "not_proven";
  reason?: string;
  correlationId?: string;
  nowIso?: string;
};
```
### `projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationErrors.ts`

```typescript
import type {
  ClaimEvaluationDetailCode,
  ClaimEvaluationModeledErrorCode,
  ClaimEvaluationStructuredError,
} from "./claimEvaluationTypes";

const SAFE_MESSAGES: Record<ClaimEvaluationDetailCode, string> = {
  CLAIM_EVALUATION_INVALID: "Claim evaluation request is invalid.",
  CLAIM_EVALUATION_NOT_FOUND: "Claim evaluation was not found.",
  CLAIM_EVALUATION_ALREADY_EXISTS: "Claim evaluation already exists.",
  CLAIM_EVALUATION_INVALID_STATE: "Claim evaluation is not in a valid state.",
  CLAIM_EVALUATION_ALREADY_CONFIRMED: "Claim evaluation is already confirmed.",
  CLAIM_EVALUATION_SUPERSEDED: "Claim evaluation has been superseded.",
  CLAIM_REQUIRED_EVIDENCE_MISSING: "Required evidence is missing for PASS.",
  CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE:
    "Evidence is not in the frozen ReviewBundle snapshot.",
  CLAIM_EVIDENCE_VERSION_MISMATCH: "Evidence version does not match snapshot.",
  CLAIM_EVIDENCE_UNAVAILABLE: "Evidence is unavailable and cannot support PASS.",
  CLAIM_EVIDENCE_NOT_VERIFIED: "Evidence is not verified and cannot support PASS.",
  CLAIM_REVIEW_BUNDLE_INVALID: "ReviewBundle is invalid for claim evaluation.",
  CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH:
    "ReviewBundle version does not match the bound frozen version.",
  CLAIM_CONFIRMATION_REQUIRED: "Human or Morris confirmation is required.",
  CLAIM_AUTHORITY_FORBIDDEN: "Actor is not authorized for this claim action.",
  CLAIM_SELF_REVIEW_FORBIDDEN: "Critical self-review confirmation is forbidden.",
  CLAIM_WAIVER_FORBIDDEN: "Waiver is forbidden for this actor or state.",
  CLAIM_DISPUTED: "Claim evaluation is disputed.",
  CLAIM_SECRET_FORBIDDEN: "Secrets or tokens are forbidden in claim metadata.",
  REVIEW_BUNDLE_NOT_FOUND: "ReviewBundle was not found.",
  VERSION_CONFLICT: "Optimistic concurrency conflict on claim evaluation.",
  CONCURRENT_MODIFICATION: "Concurrent modification rejected.",
  IDEMPOTENCY_CONFLICT: "Idempotency key reused with a different command.",
  CLAIM_EVALUATION_PERSISTENCE_FAILED: "Claim evaluation persistence failed.",
};

export class ClaimEvaluationDomainError extends Error {
  readonly detailCode: ClaimEvaluationDetailCode;
  readonly expectedVersion?: number;
  readonly currentVersion?: number;

  constructor(
    detailCode: ClaimEvaluationDetailCode,
    message: string,
    extra?: { expectedVersion?: number; currentVersion?: number },
  ) {
    super(message);
    this.name = "ClaimEvaluationDomainError";
    this.detailCode = detailCode;
    this.expectedVersion = extra?.expectedVersion;
    this.currentVersion = extra?.currentVersion;
  }
}

export function isClaimEvaluationDomainError(
  err: unknown,
): err is ClaimEvaluationDomainError {
  return err instanceof ClaimEvaluationDomainError;
}

export function modeledCodeFor(
  detailCode: ClaimEvaluationDetailCode,
): ClaimEvaluationModeledErrorCode {
  if (
    detailCode === "CLAIM_AUTHORITY_FORBIDDEN" ||
    detailCode === "CLAIM_SELF_REVIEW_FORBIDDEN" ||
    detailCode === "CLAIM_WAIVER_FORBIDDEN"
  ) {
    return "AUTHORITY_DENIED";
  }
  if (
    detailCode === "VERSION_CONFLICT" ||
    detailCode === "CONCURRENT_MODIFICATION" ||
    detailCode === "CLAIM_EVALUATION_INVALID_STATE" ||
    detailCode === "CLAIM_EVALUATION_ALREADY_CONFIRMED" ||
    detailCode === "CLAIM_DISPUTED" ||
    detailCode === "IDEMPOTENCY_CONFLICT"
  ) {
    return "STATE_CONFLICT";
  }
  return "VALIDATION_FAILED";
}

export function createClaimEvaluationError(input: {
  detailCode: ClaimEvaluationDetailCode;
  timestamp: string;
  correlationId?: string;
  claimEvaluationId?: string;
  reviewBundleId?: string;
  evidenceId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
}): ClaimEvaluationStructuredError {
  return {
    code: modeledCodeFor(input.detailCode),
    detailCode: input.detailCode,
    message: SAFE_MESSAGES[input.detailCode],
    severity:
      input.detailCode === "CLAIM_AUTHORITY_FORBIDDEN" ||
      input.detailCode === "CLAIM_SELF_REVIEW_FORBIDDEN"
        ? "critical"
        : "error",
    retryable:
      input.detailCode === "VERSION_CONFLICT" ||
      input.detailCode === "CONCURRENT_MODIFICATION" ||
      input.detailCode === "CLAIM_EVALUATION_PERSISTENCE_FAILED",
    blocking: true,
    recoverable: input.detailCode === "VERSION_CONFLICT",
    domain: "F",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    claimEvaluationId: input.claimEvaluationId,
    reviewBundleId: input.reviewBundleId,
    evidenceId: input.evidenceId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    internalCauseRef: input.internalCauseRef,
  };
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/domain/claimEvaluationInvariants.ts`

```typescript
/**
 * ClaimEvaluation invariants — mirrors claim-evaluation.schema.json 0.1.0-oa.
 */
import {
  containsForbiddenSecret,
  isEvidenceId,
  isOaIdentifier,
} from "./invariants";
import { isReviewBundleId } from "./reviewBundleInvariants";
import type {
  ClaimCriticality,
  ClaimEvaluation,
  ClaimEvaluationDetailCode,
  ClaimEvaluationMethod,
  ClaimEvaluationStatus,
  ClaimType,
} from "./claimEvaluationTypes";

export type ClaimInvariantViolation = {
  detailCode: ClaimEvaluationDetailCode;
  reason: string;
};

export const CLAIM_TYPES: ReadonlySet<ClaimType> = new Set([
  "technique",
  "conformite",
  "qualite",
  "securite",
  "maturite_support",
]);

export const CLAIM_CRITICALITIES: ReadonlySet<ClaimCriticality> = new Set([
  "non_critical",
  "critical",
  "structural",
]);

export const CLAIM_METHODS: ReadonlySet<ClaimEvaluationMethod> = new Set([
  "deterministic",
  "assisted",
  "human_review",
]);

export const CLAIM_STATUSES: ReadonlySet<ClaimEvaluationStatus> = new Set([
  "pending",
  "evaluating",
  "pass",
  "fail",
  "not_proven",
  "waived",
  "disputed",
]);

export function isClaimEvaluationId(value: unknown): value is string {
  return isOaIdentifier(value) && value.startsWith("clm:");
}

export { isReviewBundleId } from "./reviewBundleInvariants";

export function sortEvidenceIds(ids: string[]): string[] {
  return [...ids].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

export function validateClaimEvaluationShape(
  claim: ClaimEvaluation,
): ClaimInvariantViolation | null {
  if (claim.schemaVersion !== "0.1.0-oa") {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "schema_version" };
  }
  if (!isClaimEvaluationId(claim.claimEvaluationId)) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "claim_evaluation_id",
    };
  }
  if (!CLAIM_TYPES.has(claim.claimType)) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "claim_type" };
  }
  if (
    typeof claim.claimStatement !== "string" ||
    claim.claimStatement.length < 1 ||
    claim.claimStatement.length > 2000
  ) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "claim_statement",
    };
  }
  if (containsForbiddenSecret(claim.claimStatement)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_claim_statement",
    };
  }
  if (!CLAIM_CRITICALITIES.has(claim.criticality)) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "criticality" };
  }
  if (!CLAIM_METHODS.has(claim.evaluationMethod)) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "evaluation_method",
    };
  }
  if (!CLAIM_STATUSES.has(claim.status)) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "status" };
  }
  if (!isReviewBundleId(claim.reviewBundleId)) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "review_bundle_id",
    };
  }
  if (
    typeof claim.reviewBundleVersion !== "number" ||
    claim.reviewBundleVersion < 1
  ) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "review_bundle_version",
    };
  }
  if (typeof claim.version !== "number" || claim.version < 1) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "occ_version" };
  }
  if (!Array.isArray(claim.requiredEvidenceRefs)) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "required_evidence_refs",
    };
  }
  for (const id of claim.requiredEvidenceRefs) {
    if (!isEvidenceId(id)) {
      return {
        detailCode: "CLAIM_EVALUATION_INVALID",
        reason: "required_evidence_id",
      };
    }
  }
  if (
    new Set(claim.requiredEvidenceRefs).size !==
    claim.requiredEvidenceRefs.length
  ) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "duplicate_required_evidence",
    };
  }
  if (!claim.proposedBy?.actorId || !claim.proposedAt) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "proposed" };
  }
  if (!claim.provenance?.provenanceRecordId) {
    return { detailCode: "CLAIM_EVALUATION_INVALID", reason: "provenance" };
  }
  if (containsForbiddenSecret(claim.proposedBy.displayName)) {
    return { detailCode: "CLAIM_SECRET_FORBIDDEN", reason: "secret_in_actor" };
  }
  if (containsForbiddenSecret(claim.confirmedBy?.displayName)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_confirmed_by",
    };
  }
  if (containsForbiddenSecret(claim.waiver?.reason)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_waiver_reason",
    };
  }
  if (containsForbiddenSecret(claim.dispute?.reason)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_dispute_reason",
    };
  }
  if (containsForbiddenSecret(claim.rejectionReason)) {
    return {
      detailCode: "CLAIM_SECRET_FORBIDDEN",
      reason: "secret_in_rejection_reason",
    };
  }

  if (claim.status === "pass") {
    if (
      !claim.requiredEvidenceRefs.length ||
      !claim.providedEvidenceRefs?.length ||
      !claim.evaluatedAt
    ) {
      return {
        detailCode: "CLAIM_REQUIRED_EVIDENCE_MISSING",
        reason: "pass_requires_evidence_and_evaluated_at",
      };
    }
    if (claim.criticality === "non_critical" && claim.evaluationMethod === "deterministic") {
      if (claim.confirmationAuthority !== "system_deterministic") {
        return {
          detailCode: "CLAIM_EVALUATION_INVALID",
          reason: "non_critical_deterministic_requires_system_authority",
        };
      }
    }
    if (claim.criticality === "critical") {
      if (
        claim.confirmationAuthority !== "authorized_human" ||
        !claim.confirmedBy ||
        !claim.confirmedAt
      ) {
        return {
          detailCode: "CLAIM_CONFIRMATION_REQUIRED",
          reason: "critical_pass_requires_human_confirm",
        };
      }
      if (
        claim.confirmedBy.role === "system" ||
        claim.confirmedBy.role === "agent"
      ) {
        return {
          detailCode: "CLAIM_AUTHORITY_FORBIDDEN",
          reason: "critical_system_or_agent_confirm",
        };
      }
      if (claim.confirmedBy.actorId === claim.proposedBy.actorId) {
        return {
          detailCode: "CLAIM_SELF_REVIEW_FORBIDDEN",
          reason: "critical_self_review",
        };
      }
    }
    if (claim.criticality === "structural") {
      if (
        claim.confirmationAuthority !== "morris" ||
        !claim.confirmedBy ||
        !claim.confirmedAt ||
        claim.confirmedBy.role !== "decision_maker"
      ) {
        return {
          detailCode: "CLAIM_AUTHORITY_FORBIDDEN",
          reason: "structural_requires_morris",
        };
      }
    }
  }

  if (claim.status === "waived") {
    if (!claim.waiver) {
      return {
        detailCode: "CLAIM_EVALUATION_INVALID",
        reason: "waived_requires_waiver",
      };
    }
    if (
      claim.waiver.authorizedBy.role === "system" ||
      claim.waiver.authorizedBy.role === "agent"
    ) {
      return {
        detailCode: "CLAIM_WAIVER_FORBIDDEN",
        reason: "waiver_system_or_agent",
      };
    }
    if (claim.waiver.reversible !== true) {
      return {
        detailCode: "CLAIM_EVALUATION_INVALID",
        reason: "waiver_must_be_reversible",
      };
    }
  }

  if (claim.status === "disputed" && !claim.dispute) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "disputed_requires_dispute",
    };
  }

  if (
    (claim.status === "fail" || claim.status === "not_proven") &&
    !claim.evaluatedAt
  ) {
    return {
      detailCode: "CLAIM_EVALUATION_INVALID",
      reason: "terminal_requires_evaluated_at",
    };
  }

  return null;
}

/** Evidence can contribute to PASS only when verified + available + not stale. */
export function evidenceSupportsPass(input: {
  status: string;
  availability: string;
  freshness?: string;
}): boolean {
  if (input.availability !== "available") return false;
  if (input.status !== "verified") return false;
  if (input.freshness === "stale") return false;
  return true;
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateClaim.ts`

```typescript
/**
 * EvaluateClaim — create + evaluate ClaimEvaluation (CreateClaim absorbed v1).
 * Never mutates Evidence or ReviewBundle. Never creates MaturityAssessment.
 * PASS never auto-confirms Critical/structural.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createClaimEvaluationError,
  isClaimEvaluationDomainError,
} from "../domain/claimEvaluationErrors";
import {
  isClaimEvaluationId,
  isReviewBundleId,
  sortEvidenceIds,
  validateClaimEvaluationShape,
} from "../domain/claimEvaluationInvariants";
import type {
  ClaimEvaluation,
  ClaimEvaluationResult,
  ClaimEvaluationStatus,
  EvaluateClaimRequest,
} from "../domain/claimEvaluationTypes";
import {
  CLAIM_EVALUATION_SCHEMA_VERSION,
} from "../domain/claimEvaluationTypes";
import {
  containsForbiddenSecret,
  isEvidenceId,
} from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleReaderPort } from "../ports/reviewBundleReader";
import {
  assessRequiredEvidence,
} from "./claimEvidenceAssessment";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

const CLAIM_AUTHORITY_SCOPE = "oa.claim_evaluation";

export class EvaluateClaim {
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly bundles: ReviewBundleReaderPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly authority: ClaimAuthorityPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: EvaluateClaimRequest): Promise<ClaimEvaluationResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();
    const intent = request.intent ?? "evaluate";

    const fail = (
      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
        claimEvaluation?: ClaimEvaluation;
      },
    ): ClaimEvaluationResult => {
      const { claimEvaluation, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.claim_evaluation.idempotency_conflict" as const)
          : detailCode === "CLAIM_AUTHORITY_FORBIDDEN" ||
              detailCode === "CLAIM_SELF_REVIEW_FORBIDDEN" ||
              detailCode === "CLAIM_WAIVER_FORBIDDEN"
            ? ("oa.claim_evaluation.authority_rejected" as const)
            : ("oa.claim_evaluation.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        claimEvaluationId: request.claimEvaluationId,
        reviewBundleId: request.reviewBundleId,
        actorId: request.actor.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createClaimEvaluationError({
          detailCode,
          timestamp,
          correlationId,
          claimEvaluationId: request.claimEvaluationId,
          reviewBundleId: request.reviewBundleId,
          internalCauseRef,
          ...errorExtra,
        }),
        claimEvaluation,
        durationMs,
      };
    };

    try {
      if (!isClaimEvaluationId(request.claimEvaluationId)) {
        return fail("CLAIM_EVALUATION_INVALID", "claim_evaluation_id_invalid");
      }
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("CLAIM_EVALUATION_INVALID", "review_bundle_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
      }
      if (
        typeof request.claimStatement !== "string" ||
        request.claimStatement.trim().length === 0 ||
        request.claimStatement.length > 2000
      ) {
        return fail("CLAIM_EVALUATION_INVALID", "claim_statement_invalid");
      }
      if (containsForbiddenSecret(request.claimStatement)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_claim_statement");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (containsForbiddenSecret(request.waiverReason)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_waiver_reason");
      }
      if (containsForbiddenSecret(request.disputeReason)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_dispute_reason");
      }
      if (
        request.supersedesClaimEvaluationId &&
        !isClaimEvaluationId(request.supersedesClaimEvaluationId)
      ) {
        return fail(
          "CLAIM_EVALUATION_INVALID",
          "supersedes_claim_evaluation_id_invalid",
        );
      }

      const required = sortEvidenceIds(request.requiredEvidenceRefs ?? []);
      for (const id of required) {
        if (!isEvidenceId(id)) {
          return fail("CLAIM_EVALUATION_INVALID", "evidence_id_invalid", {
            evidenceId: id,
          });
        }
      }
      if (new Set(required).size !== required.length) {
        return fail("CLAIM_EVALUATION_INVALID", "duplicate_required_evidence");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          claimEvaluationId: request.claimEvaluationId,
          idempotencyKey: request.idempotencyKey,
          claimType: request.claimType,
          claimStatement: request.claimStatement,
          criticality: request.criticality,
          evaluationMethod: request.evaluationMethod,
          ruleRef: request.ruleRef,
          requiredEvidenceRefs: required,
          reviewBundleId: request.reviewBundleId,
          reviewBundleVersion: request.reviewBundleVersion,
          intent,
          waiverReason: request.waiverReason,
          disputeReason: request.disputeReason,
          supersedesClaimEvaluationId: request.supersedesClaimEvaluationId,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "evaluate_claim"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.claim_evaluation.evaluated",
            ts: timestamp,
            correlationId,
            claimEvaluationId: existingIdem.claimEvaluation.claimEvaluationId,
            reviewBundleId: existingIdem.claimEvaluation.reviewBundleId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.claimEvaluation.status,
            version: existingIdem.claimEvaluation.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            claimEvaluation: existingIdem.claimEvaluation,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      if (await this.repo.exists(request.claimEvaluationId)) {
        return fail(
          "CLAIM_EVALUATION_ALREADY_EXISTS",
          "claim_evaluation_id_taken",
        );
      }

      if (request.supersedesClaimEvaluationId) {
        const prior = await this.repo.findById(
          request.supersedesClaimEvaluationId,
        );
        if (!prior) {
          return fail(
            "CLAIM_EVALUATION_NOT_FOUND",
            "superseded_claim_missing",
          );
        }
      }

      const bundle = await this.bundles.findById(request.reviewBundleId);
      if (!bundle) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }
      if (!bundle.frozenAt || !bundle.frozenVersion) {
        return fail(
          "CLAIM_REVIEW_BUNDLE_INVALID",
          "review_bundle_not_frozen",
          { reviewBundleId: request.reviewBundleId },
        );
      }
      if (bundle.frozenVersion !== request.reviewBundleVersion) {
        return fail(
          "CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH",
          "review_bundle_version_mismatch",
          { reviewBundleId: request.reviewBundleId },
        );
      }

      if (intent === "waive") {
        return await this.waive({
          request,
          required,
          fingerprint,
          timestamp,
          correlationId,
          started,
          fail,
        });
      }
      if (intent === "dispute") {
        return await this.dispute({
          request,
          required,
          fingerprint,
          timestamp,
          correlationId,
          started,
          fail,
        });
      }

      // intent === evaluate
      if (required.length < 1) {
        // Empty required refs: never PASS — create not_proven evaluation.
        const claim = this.baseClaim({
          request,
          required,
          timestamp,
          correlationId,
          status: "not_proven",
          provided: [],
          evaluatedAt: timestamp,
        });
        const shape = validateClaimEvaluationShape(claim);
        if (shape) {
          return fail(shape.detailCode, shape.reason);
        }
        await this.repo.create(claim, {
          claimEvaluationId: claim.claimEvaluationId,
          fingerprint,
          operation: "evaluate_claim",
        });
        return this.okResult(claim, timestamp, correlationId, started, "not_proven");
      }

      const assessed = await assessRequiredEvidence({
        requiredEvidenceRefs: required,
        bundle,
        evidenceReader: this.evidence,
      });

      if (assessed.blockingCode) {
        const status: ClaimEvaluationStatus =
          assessed.blockingCode === "missing" ||
          assessed.blockingCode === "not_in_bundle" ||
          assessed.blockingCode === "unavailable"
            ? "not_proven"
            : assessed.blockingCode === "not_verified" ||
                assessed.blockingCode === "stale" ||
                assessed.blockingCode === "incomplete"
              ? "not_proven"
              : "fail";
        const claim = this.baseClaim({
          request,
          required,
          timestamp,
          correlationId,
          status,
          provided: assessed.provided,
          evaluatedAt: timestamp,
          assessments: assessed.assessments,
        });
        const shape = validateClaimEvaluationShape(claim);
        if (shape) {
          return fail(shape.detailCode, shape.reason, {
            evidenceId: assessed.blockingEvidenceId,
          });
        }
        await this.repo.create(claim, {
          claimEvaluationId: claim.claimEvaluationId,
          fingerprint,
          operation: "evaluate_claim",
        });
        // Still a successful evaluation producing not_proven/fail — not an error.
        return this.okResult(
          claim,
          timestamp,
          correlationId,
          started,
          status,
        );
      }

      // All required evidence support PASS.
      // Bundle synthesis-only / incomplete cannot yield consumable PASS path:
      // for non_critical deterministic we still require !synthesisOnly && complete
      // when producing status=pass; otherwise not_proven.
      if (bundle.synthesisOnly || bundle.completeness !== "complete") {
        const claim = this.baseClaim({
          request,
          required,
          timestamp,
          correlationId,
          status: "not_proven",
          provided: assessed.provided,
          evaluatedAt: timestamp,
          assessments: assessed.assessments,
        });
        await this.repo.create(claim, {
          claimEvaluationId: claim.claimEvaluationId,
          fingerprint,
          operation: "evaluate_claim",
        });
        return this.okResult(
          claim,
          timestamp,
          correlationId,
          started,
          "not_proven",
        );
      }

      if (
        request.criticality === "non_critical" &&
        request.evaluationMethod === "deterministic"
      ) {
        const claim = this.baseClaim({
          request,
          required,
          timestamp,
          correlationId,
          status: "pass",
          provided: assessed.provided,
          evaluatedAt: timestamp,
          assessments: assessed.assessments,
          confirmationAuthority: "system_deterministic",
        });
        const shape = validateClaimEvaluationShape(claim);
        if (shape) {
          return fail(shape.detailCode, shape.reason);
        }
        await this.repo.create(claim, {
          claimEvaluationId: claim.claimEvaluationId,
          fingerprint,
          operation: "evaluate_claim",
        });
        return this.okResult(claim, timestamp, correlationId, started, "pass");
      }

      // Critical / structural / assisted: evaluating — await ConfirmClaimEvaluation.
      const claim = this.baseClaim({
        request,
        required,
        timestamp,
        correlationId,
        status: "evaluating",
        provided: assessed.provided,
        evaluatedAt: timestamp,
        assessments: assessed.assessments,
        reviewedBy: request.actor.role === "system" ? undefined : request.actor,
      });
      const shape = validateClaimEvaluationShape(claim);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }
      await this.repo.create(claim, {
        claimEvaluationId: claim.claimEvaluationId,
        fingerprint,
        operation: "evaluate_claim",
      });
      return this.okResult(
        claim,
        timestamp,
        correlationId,
        started,
        "evaluating",
      );
    } catch (err) {
      if (isClaimEvaluationDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
        "unexpected_evaluate_failure",
      );
    }
  }

  private async waive(input: {
    request: EvaluateClaimRequest;
    required: string[];
    fingerprint: string;
    timestamp: string;
    correlationId: string;
    started: number;
    fail: (
      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
        claimEvaluation?: ClaimEvaluation;
      },
    ) => ClaimEvaluationResult;
  }): Promise<ClaimEvaluationResult> {
    const { request, required, fingerprint, timestamp, correlationId, started, fail } =
      input;
    if (!request.waiverReason?.trim()) {
      return fail("CLAIM_EVALUATION_INVALID", "waiver_reason_required");
    }
    if (request.actor.role === "system" || request.actor.role === "agent") {
      return fail("CLAIM_WAIVER_FORBIDDEN", "waiver_system_or_agent");
    }
    const requiredLevel =
      request.criticality === "structural" ? ("N3" as const) : ("N2" as const);
    const auth = this.authority.verify({
      actorId: request.actor.actorId,
      requiredLevel,
      scope: CLAIM_AUTHORITY_SCOPE,
      requireMorrisGate: request.criticality === "structural",
    });
    if (!auth.ok) {
      return fail("CLAIM_AUTHORITY_FORBIDDEN", auth.reason);
    }
    if (
      request.criticality === "structural" &&
      request.actor.role !== "decision_maker"
    ) {
      return fail("CLAIM_AUTHORITY_FORBIDDEN", "structural_waiver_requires_morris_role");
    }

    const claim = this.baseClaim({
      request,
      required,
      timestamp,
      correlationId,
      status: "waived",
      provided: [],
      waiver: {
        reason: request.waiverReason,
        authorizedBy: { ...request.actor },
        authorizedAt: timestamp,
        reversible: true,
      },
    });
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      return fail(shape.detailCode, shape.reason);
    }
    await this.repo.create(claim, {
      claimEvaluationId: claim.claimEvaluationId,
      fingerprint,
      operation: "evaluate_claim",
    });
    return this.okResult(claim, timestamp, correlationId, started, "waived");
  }

  private async dispute(input: {
    request: EvaluateClaimRequest;
    required: string[];
    fingerprint: string;
    timestamp: string;
    correlationId: string;
    started: number;
    fail: (
      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
        claimEvaluation?: ClaimEvaluation;
      },
    ) => ClaimEvaluationResult;
  }): Promise<ClaimEvaluationResult> {
    const { request, required, fingerprint, timestamp, correlationId, started, fail } =
      input;
    if (!request.disputeReason?.trim()) {
      return fail("CLAIM_EVALUATION_INVALID", "dispute_reason_required");
    }
    if (request.actor.role === "system" || request.actor.role === "agent") {
      return fail("CLAIM_AUTHORITY_FORBIDDEN", "dispute_system_or_agent");
    }
    const claim = this.baseClaim({
      request,
      required,
      timestamp,
      correlationId,
      status: "disputed",
      provided: [],
      dispute: {
        reason: request.disputeReason,
        raisedBy: { ...request.actor },
        raisedAt: timestamp,
      },
    });
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      return fail(shape.detailCode, shape.reason);
    }
    await this.repo.create(claim, {
      claimEvaluationId: claim.claimEvaluationId,
      fingerprint,
      operation: "evaluate_claim",
    });
    return this.okResult(claim, timestamp, correlationId, started, "disputed");
  }

  private baseClaim(input: {
    request: EvaluateClaimRequest;
    required: string[];
    timestamp: string;
    correlationId: string;
    status: ClaimEvaluationStatus;
    provided: string[];
    evaluatedAt?: string;
    assessments?: ClaimEvaluation["evidenceAssessments"];
    confirmationAuthority?: ClaimEvaluation["confirmationAuthority"];
    reviewedBy?: ClaimEvaluation["reviewedBy"];
    waiver?: ClaimEvaluation["waiver"];
    dispute?: ClaimEvaluation["dispute"];
  }): ClaimEvaluation {
    const { request } = input;
    return {
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: request.claimEvaluationId,
      claimType: request.claimType,
      claimStatement: request.claimStatement,
      criticality: request.criticality,
      evaluationMethod: request.evaluationMethod,
      ruleRef: request.ruleRef,
      requiredEvidenceRefs: input.required,
      providedEvidenceRefs: input.provided,
      reviewBundleId: request.reviewBundleId,
      reviewBundleVersion: request.reviewBundleVersion,
      status: input.status,
      proposedBy: { ...request.actor },
      reviewedBy: input.reviewedBy,
      confirmationAuthority: input.confirmationAuthority,
      proposedAt: input.timestamp,
      evaluatedAt: input.evaluatedAt,
      waiver: input.waiver,
      dispute: input.dispute,
      provenance: buildProvenance({
        ids: this.ids,
        actor: request.actor,
        source: "review",
        timestamp: input.timestamp,
        correlationId: input.correlationId,
      }),
      version: 1,
      evidenceAssessments: input.assessments
        ? structuredClone(input.assessments)
        : undefined,
      supersedesClaimEvaluationId: request.supersedesClaimEvaluationId,
      idempotencyKey: request.idempotencyKey,
    };
  }

  private okResult(
    claim: ClaimEvaluation,
    timestamp: string,
    correlationId: string,
    started: number,
    newStatus: string,
  ): ClaimEvaluationResult {
    const durationMs = Date.now() - started;
    const event =
      newStatus === "pass"
        ? ("oa.claim_evaluation.passed" as const)
        : newStatus === "fail"
          ? ("oa.claim_evaluation.failed" as const)
          : newStatus === "not_proven"
            ? ("oa.claim_evaluation.inconclusive" as const)
            : newStatus === "waived"
              ? ("oa.claim_evaluation.waived" as const)
              : newStatus === "disputed"
                ? ("oa.claim_evaluation.disputed" as const)
                : newStatus === "evaluating"
                  ? ("oa.claim_evaluation.confirmation_requested" as const)
                  : ("oa.claim_evaluation.evaluated" as const);
    this.audit.append({
      event,
      ts: timestamp,
      correlationId,
      claimEvaluationId: claim.claimEvaluationId,
      reviewBundleId: claim.reviewBundleId,
      evidenceIds: claim.requiredEvidenceRefs,
      actorId: claim.proposedBy.actorId,
      newStatus: claim.status,
      version: claim.version,
      result: "ok",
      durationMs,
    });
    return {
      ok: true,
      claimEvaluation: structuredClone(claim),
      durationMs,
    };
  }
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/application/confirmClaimEvaluation.ts`

```typescript
/**
 * ConfirmClaimEvaluation — Critical/structural/human confirmation of evaluating claim.
 * Never mutates Evidence or ReviewBundle. Never creates MaturityAssessment.
 * System/agent cannot confirm Critical. Structural requires Morris gate.
 * Critical self-review (proposedBy === confirmedBy) is forbidden.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createClaimEvaluationError,
  isClaimEvaluationDomainError,
} from "../domain/claimEvaluationErrors";
import {
  isClaimEvaluationId,
  validateClaimEvaluationShape,
} from "../domain/claimEvaluationInvariants";
import type {
  ClaimEvaluation,
  ClaimEvaluationResult,
  ConfirmClaimEvaluationRequest,
} from "../domain/claimEvaluationTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

const CLAIM_AUTHORITY_SCOPE = "oa.claim_evaluation";

export class ConfirmClaimEvaluation {
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly authority: ClaimAuthorityPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: ConfirmClaimEvaluationRequest,
  ): Promise<ClaimEvaluationResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
        claimEvaluation?: ClaimEvaluation;
      },
    ): ClaimEvaluationResult => {
      const { claimEvaluation, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.claim_evaluation.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.claim_evaluation.concurrent_modification_rejected" as const)
            : detailCode === "CLAIM_AUTHORITY_FORBIDDEN" ||
                detailCode === "CLAIM_SELF_REVIEW_FORBIDDEN"
              ? ("oa.claim_evaluation.authority_rejected" as const)
              : ("oa.claim_evaluation.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        claimEvaluationId: request.claimEvaluationId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createClaimEvaluationError({
          detailCode,
          timestamp,
          correlationId,
          claimEvaluationId: request.claimEvaluationId,
          internalCauseRef,
          ...errorExtra,
        }),
        claimEvaluation,
        durationMs,
      };
    };

    try {
      if (!isClaimEvaluationId(request.claimEvaluationId)) {
        return fail("CLAIM_EVALUATION_INVALID", "claim_evaluation_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (
        request.actor.role === "system" ||
        request.actor.role === "agent"
      ) {
        return fail("CLAIM_AUTHORITY_FORBIDDEN", "system_or_agent_cannot_confirm");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          claimEvaluationId: request.claimEvaluationId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          actor: request.actor,
          authorityEvidenceId: request.authorityEvidenceId,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "confirm_claim"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.claim_evaluation.confirmed",
            ts: timestamp,
            correlationId,
            claimEvaluationId: existingIdem.claimEvaluation.claimEvaluationId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.claimEvaluation.status,
            version: existingIdem.claimEvaluation.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            claimEvaluation: existingIdem.claimEvaluation,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.claimEvaluationId);
      if (!current) {
        return fail("CLAIM_EVALUATION_NOT_FOUND", "missing_claim_evaluation");
      }
      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          claimEvaluation: current,
        });
      }
      if (current.status === "disputed") {
        return fail("CLAIM_DISPUTED", "cannot_confirm_disputed", {
          claimEvaluation: current,
        });
      }
      if (current.status === "pass") {
        return fail(
          "CLAIM_EVALUATION_ALREADY_CONFIRMED",
          "already_pass",
          { claimEvaluation: current },
        );
      }
      if (current.status !== "evaluating") {
        return fail(
          "CLAIM_EVALUATION_INVALID_STATE",
          "confirm_requires_evaluating",
          { claimEvaluation: current },
        );
      }
      if (
        !current.providedEvidenceRefs?.length ||
        !current.requiredEvidenceRefs.length
      ) {
        return fail(
          "CLAIM_REQUIRED_EVIDENCE_MISSING",
          "confirm_requires_provided_evidence",
          { claimEvaluation: current },
        );
      }
      if (request.actor.actorId === current.proposedBy.actorId) {
        if (current.criticality === "critical" || current.criticality === "structural") {
          return fail("CLAIM_SELF_REVIEW_FORBIDDEN", "critical_self_review", {
            claimEvaluation: current,
          });
        }
      }

      const requireMorris = current.criticality === "structural";
      const requiredLevel =
        current.criticality === "structural"
          ? ("N3" as const)
          : current.criticality === "critical"
            ? ("N2" as const)
            : ("N1" as const);
      const auth = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel,
        scope: CLAIM_AUTHORITY_SCOPE,
        evidenceId: request.authorityEvidenceId,
        requireMorrisGate: requireMorris,
      });
      if (!auth.ok) {
        return fail("CLAIM_AUTHORITY_FORBIDDEN", auth.reason, {
          claimEvaluation: current,
        });
      }
      if (requireMorris && request.actor.role !== "decision_maker") {
        return fail(
          "CLAIM_AUTHORITY_FORBIDDEN",
          "structural_requires_decision_maker_role",
          { claimEvaluation: current },
        );
      }

      const confirmationAuthority =
        current.criticality === "structural"
          ? ("morris" as const)
          : current.criticality === "critical"
            ? ("authorized_human" as const)
            : ("authorized_human" as const);

      const updated: ClaimEvaluation = {
        ...current,
        status: "pass",
        confirmedBy: { ...request.actor },
        confirmedAt: timestamp,
        confirmationAuthority,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };
      const shape = validateClaimEvaluationShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, {
          claimEvaluation: current,
        });
      }

      await this.repo.update(updated, request.expectedVersion, {
        claimEvaluationId: updated.claimEvaluationId,
        fingerprint,
        operation: "confirm_claim",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.claim_evaluation.confirmed",
        ts: timestamp,
        correlationId,
        claimEvaluationId: updated.claimEvaluationId,
        reviewBundleId: updated.reviewBundleId,
        actorId: request.actor.actorId,
        previousStatus: current.status,
        newStatus: updated.status,
        version: updated.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });
      return {
        ok: true,
        claimEvaluation: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isClaimEvaluationDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
        "unexpected_confirm_failure",
      );
    }
  }
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/application/rejectClaimEvaluation.ts`

```typescript
/**
 * RejectClaimEvaluation — evaluating → fail | not_proven.
 * Never mutates Evidence or ReviewBundle. Never creates MaturityAssessment.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createClaimEvaluationError,
  isClaimEvaluationDomainError,
} from "../domain/claimEvaluationErrors";
import {
  isClaimEvaluationId,
  validateClaimEvaluationShape,
} from "../domain/claimEvaluationInvariants";
import type {
  ClaimEvaluation,
  ClaimEvaluationResult,
  RejectClaimEvaluationRequest,
} from "../domain/claimEvaluationTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class RejectClaimEvaluation {
  constructor(
    private readonly repo: ClaimEvaluationRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: RejectClaimEvaluationRequest,
  ): Promise<ClaimEvaluationResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createClaimEvaluationError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createClaimEvaluationError>[0]> & {
        claimEvaluation?: ClaimEvaluation;
      },
    ): ClaimEvaluationResult => {
      const { claimEvaluation, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.claim_evaluation.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.claim_evaluation.concurrent_modification_rejected" as const)
            : ("oa.claim_evaluation.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        claimEvaluationId: request.claimEvaluationId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createClaimEvaluationError({
          detailCode,
          timestamp,
          correlationId,
          claimEvaluationId: request.claimEvaluationId,
          internalCauseRef,
          ...errorExtra,
        }),
        claimEvaluation,
        durationMs,
      };
    };

    try {
      if (!isClaimEvaluationId(request.claimEvaluationId)) {
        return fail("CLAIM_EVALUATION_INVALID", "claim_evaluation_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
      }
      if (request.outcome !== "fail" && request.outcome !== "not_proven") {
        return fail("CLAIM_EVALUATION_INVALID", "outcome_invalid");
      }
      if (containsForbiddenSecret(request.reason)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_rejection_reason");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("CLAIM_SECRET_FORBIDDEN", "secret_in_actor");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          claimEvaluationId: request.claimEvaluationId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          outcome: request.outcome,
          reason: request.reason,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "reject_claim"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event:
              request.outcome === "fail"
                ? "oa.claim_evaluation.failed"
                : "oa.claim_evaluation.inconclusive",
            ts: timestamp,
            correlationId,
            claimEvaluationId: existingIdem.claimEvaluation.claimEvaluationId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.claimEvaluation.status,
            version: existingIdem.claimEvaluation.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            claimEvaluation: existingIdem.claimEvaluation,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.claimEvaluationId);
      if (!current) {
        return fail("CLAIM_EVALUATION_NOT_FOUND", "missing_claim_evaluation");
      }
      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          claimEvaluation: current,
        });
      }
      if (current.status !== "evaluating") {
        return fail(
          "CLAIM_EVALUATION_INVALID_STATE",
          "reject_requires_evaluating",
          { claimEvaluation: current },
        );
      }

      const updated: ClaimEvaluation = {
        ...current,
        status: request.outcome,
        evaluatedAt: current.evaluatedAt ?? timestamp,
        rejectionReason: request.reason,
        reviewedBy: { ...request.actor },
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };
      const shape = validateClaimEvaluationShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, {
          claimEvaluation: current,
        });
      }

      await this.repo.update(updated, request.expectedVersion, {
        claimEvaluationId: updated.claimEvaluationId,
        fingerprint,
        operation: "reject_claim",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event:
          request.outcome === "fail"
            ? "oa.claim_evaluation.failed"
            : "oa.claim_evaluation.inconclusive",
        ts: timestamp,
        correlationId,
        claimEvaluationId: updated.claimEvaluationId,
        reviewBundleId: updated.reviewBundleId,
        actorId: request.actor.actorId,
        previousStatus: current.status,
        newStatus: updated.status,
        version: updated.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });
      return {
        ok: true,
        claimEvaluation: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isClaimEvaluationDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
        "unexpected_reject_failure",
      );
    }
  }
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/application/claimEvidenceAssessment.ts`

```typescript
/**
 * Shared Evidence assessment against frozen ReviewBundle snapshot.
 * Never mutates Evidence or ReviewBundle. Never produces Maturity.
 */
import type { Evidence } from "../domain/types";
import {
  evidenceSupportsPass,
} from "../domain/claimEvaluationInvariants";
import type {
  ClaimEvidenceAssessment,
  ClaimEvidenceAssessmentCode,
} from "../domain/claimEvaluationTypes";
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { EvidenceReaderPort } from "../ports/evidenceReader";

export async function assessRequiredEvidence(input: {
  requiredEvidenceRefs: string[];
  bundle: ReviewBundle;
  evidenceReader: EvidenceReaderPort;
}): Promise<{
  assessments: ClaimEvidenceAssessment[];
  provided: string[];
  blockingCode?: ClaimEvidenceAssessmentCode;
  blockingEvidenceId?: string;
}> {
  const snapshots = input.bundle.frozenEvidenceSnapshots ?? [];
  const byId = new Map(snapshots.map((s) => [s.evidenceId, s]));
  const assessments: ClaimEvidenceAssessment[] = [];
  const provided: string[] = [];
  let blockingCode: ClaimEvidenceAssessmentCode | undefined;
  let blockingEvidenceId: string | undefined;

  const markBlock = (
    code: ClaimEvidenceAssessmentCode,
    evidenceId: string,
  ) => {
    if (!blockingCode) {
      blockingCode = code;
      blockingEvidenceId = evidenceId;
    }
  };

  for (const evidenceId of input.requiredEvidenceRefs) {
    const snap = byId.get(evidenceId);
    if (!snap) {
      assessments.push({ evidenceId, code: "not_in_bundle" });
      markBlock("not_in_bundle", evidenceId);
      continue;
    }

    const live = await input.evidenceReader.findById(evidenceId);
    if (!live) {
      assessments.push({
        evidenceId,
        expectedVersion: snap.evidenceVersion,
        code: "missing",
      });
      markBlock("missing", evidenceId);
      continue;
    }

    const assessment = assessLiveAgainstSnapshot(live, snap.evidenceVersion);
    assessments.push(assessment);
    if (assessment.code === "ok") {
      provided.push(evidenceId);
    } else {
      markBlock(assessment.code, evidenceId);
    }
  }

  return { assessments, provided, blockingCode, blockingEvidenceId };
}

function assessLiveAgainstSnapshot(
  live: Evidence,
  expectedVersion: number,
): ClaimEvidenceAssessment {
  const base = {
    evidenceId: live.evidenceId,
    expectedVersion,
    observedVersion: live.version,
    status: live.status,
    availability: live.availability,
    freshness: live.freshness,
  };
  if (live.version !== expectedVersion) {
    return { ...base, code: "version_mismatch" };
  }
  if (
    live.availability === "unavailable" ||
    live.status === "unavailable"
  ) {
    return { ...base, code: "unavailable" };
  }
  if (live.status === "stale" || live.freshness === "stale") {
    return { ...base, code: "stale" };
  }
  if (live.status === "incomplete") {
    return { ...base, code: "incomplete" };
  }
  if (live.status === "rejected") {
    return { ...base, code: "rejected" };
  }
  if (!evidenceSupportsPass(live)) {
    return { ...base, code: "not_verified" };
  }
  return { ...base, code: "ok" };
}

export function detailCodeForAssessment(
  code: ClaimEvidenceAssessmentCode,
):
  | "CLAIM_REQUIRED_EVIDENCE_MISSING"
  | "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE"
  | "CLAIM_EVIDENCE_VERSION_MISMATCH"
  | "CLAIM_EVIDENCE_UNAVAILABLE"
  | "CLAIM_EVIDENCE_NOT_VERIFIED" {
  if (code === "not_in_bundle") return "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE";
  if (code === "version_mismatch") return "CLAIM_EVIDENCE_VERSION_MISMATCH";
  if (code === "unavailable") return "CLAIM_EVIDENCE_UNAVAILABLE";
  if (code === "missing") return "CLAIM_REQUIRED_EVIDENCE_MISSING";
  return "CLAIM_EVIDENCE_NOT_VERIFIED";
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts`

```typescript
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";

export type ClaimEvaluationIdempotencyRecord = {
  claimEvaluationId: string;
  fingerprint: string;
  operation: "evaluate_claim" | "confirm_claim" | "reject_claim";
};

export interface ClaimEvaluationRepositoryPort {
  findById(claimEvaluationId: string): Promise<ClaimEvaluation | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<{
    claimEvaluation: ClaimEvaluation;
    record: ClaimEvaluationIdempotencyRecord;
  } | null>;
  exists(claimEvaluationId: string): Promise<boolean>;
  create(
    claim: ClaimEvaluation,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void>;
  update(
    claim: ClaimEvaluation,
    expectedVersion: number,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void>;
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleReader.ts`

```typescript
import type { ReviewBundle } from "../domain/reviewBundleTypes";

/** Read-only ReviewBundle access for ClaimEvaluation (never mutates). */
export interface ReviewBundleReaderPort {
  findById(reviewBundleId: string): Promise<ReviewBundle | null>;
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/ports/claimAuthorityPort.ts`

```typescript
/**
 * Read-only claim authority checks — compatible with T-A3 AuthorityResolver.
 * Never trusts client authorityLevel / displayName.
 */
export type ClaimAuthorityVerifyRequest = {
  actorId: string;
  requiredLevel: "N1" | "N2" | "N3";
  scope: string;
  evidenceId?: string;
  requireMorrisGate?: boolean;
};

export type ClaimAuthorityVerifyResult = {
  ok: boolean;
  verifiedLevel?: "N1" | "N2" | "N3";
  canActAsMorris?: boolean;
  reason: string;
  evidenceId?: string;
};

export interface ClaimAuthorityPort {
  verify(request: ClaimAuthorityVerifyRequest): ClaimAuthorityVerifyResult;
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts`

```typescript
import { ClaimEvaluationDomainError } from "../domain/claimEvaluationErrors";
import { validateClaimEvaluationShape } from "../domain/claimEvaluationInvariants";
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type {
  ClaimEvaluationIdempotencyRecord,
  ClaimEvaluationRepositoryPort,
} from "../ports/claimEvaluationRepository";
import type { MemoryClaimEvaluationStore } from "./memoryClaimEvaluationStore";

export class MemoryClaimEvaluationRepository
  implements ClaimEvaluationRepositoryPort
{
  constructor(private readonly store: MemoryClaimEvaluationStore) {}

  async findById(claimEvaluationId: string): Promise<ClaimEvaluation | null> {
    const found = this.store.claims.get(claimEvaluationId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    claimEvaluation: ClaimEvaluation;
    record: ClaimEvaluationIdempotencyRecord;
  } | null> {
    const record = this.store.idempotencyIndex.get(idempotencyKey);
    if (!record) return null;
    const claimEvaluation = await this.findById(record.claimEvaluationId);
    if (!claimEvaluation) return null;
    return {
      claimEvaluation,
      record: structuredClone(record),
    };
  }

  async exists(claimEvaluationId: string): Promise<boolean> {
    return this.store.claims.has(claimEvaluationId);
  }

  async create(
    claim: ClaimEvaluation,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void> {
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      throw new ClaimEvaluationDomainError(shape.detailCode, shape.reason);
    }
    if (claim.version !== 1) {
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_INVALID",
        "create_requires_version_1",
      );
    }
    if (this.store.claims.has(claim.claimEvaluationId)) {
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_ALREADY_EXISTS",
        "claim_evaluation_id_taken",
      );
    }
    this.failIfForced();
    this.store.claims.set(claim.claimEvaluationId, structuredClone(claim));
    if (record && claim.idempotencyKey) {
      this.store.idempotencyIndex.set(
        claim.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  async update(
    claim: ClaimEvaluation,
    expectedVersion: number,
    record?: ClaimEvaluationIdempotencyRecord,
  ): Promise<void> {
    const current = this.store.claims.get(claim.claimEvaluationId);
    if (!current) {
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_NOT_FOUND",
        "update_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ClaimEvaluationDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (claim.version !== expectedVersion + 1) {
      throw new ClaimEvaluationDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateClaimEvaluationShape(claim);
    if (shape) {
      throw new ClaimEvaluationDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.claims.set(claim.claimEvaluationId, structuredClone(claim));
    if (record && claim.idempotencyKey) {
      this.store.idempotencyIndex.set(
        claim.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new ClaimEvaluationDomainError(
        "CLAIM_EVALUATION_PERSISTENCE_FAILED",
        "forced_claim_evaluation_save_failure",
      );
    }
  }
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationStore.ts`

```typescript
/**
 * In-memory ClaimEvaluation store — NOT DATABASE SELECTED (U-M02 OPEN).
 */
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type { ClaimEvaluationIdempotencyRecord } from "../ports/claimEvaluationRepository";

export class MemoryClaimEvaluationStore {
  claims = new Map<string, ClaimEvaluation>();
  idempotencyIndex = new Map<string, ClaimEvaluationIdempotencyRecord>();
  failNextSave = false;
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/claimAuthorityAdapter.ts`

```typescript
/**
 * Adapts T-A3 AuthorityResolverPort for ClaimEvaluation (read-only verify).
 * Does not mutate T-A3 contracts.
 */
import type { AuthorityResolverPort } from "@/lib/oa/decision/ports/authorityResolver";
import type {
  ClaimAuthorityPort,
  ClaimAuthorityVerifyRequest,
  ClaimAuthorityVerifyResult,
} from "../ports/claimAuthorityPort";

export class ClaimAuthorityAdapter implements ClaimAuthorityPort {
  constructor(private readonly resolver: AuthorityResolverPort) {}

  verify(request: ClaimAuthorityVerifyRequest): ClaimAuthorityVerifyResult {
    const result = this.resolver.verify({
      actorId: request.actorId,
      requiredLevel: request.requiredLevel,
      scope: request.scope,
      evidenceId: request.evidenceId,
      requireMorrisGate: request.requireMorrisGate,
    });
    return {
      ok: result.ok,
      verifiedLevel: result.verifiedLevel,
      canActAsMorris: result.canActAsMorris,
      reason: result.reason,
      evidenceId: result.evidenceId,
    };
  }
}

/**
 * Test-only fake — never trusts client authorityLevel; uses explicit grants.
 */
export class FakeClaimAuthority implements ClaimAuthorityPort {
  private grants = new Map<
    string,
    {
      level: "N1" | "N2" | "N3";
      scope: string;
      canActAsMorris?: boolean;
    }
  >();

  grant(input: {
    actorId: string;
    level: "N1" | "N2" | "N3";
    scope: string;
    canActAsMorris?: boolean;
  }): void {
    this.grants.set(`${input.actorId}::${input.scope}`, {
      level: input.level,
      scope: input.scope,
      canActAsMorris: input.canActAsMorris,
    });
  }

  verify(request: ClaimAuthorityVerifyRequest): ClaimAuthorityVerifyResult {
    const key = `${request.actorId}::${request.scope}`;
    const grant = this.grants.get(key);
    if (!grant) {
      return { ok: false, reason: "no_evidence" };
    }
    const rank = { N1: 1, N2: 2, N3: 3 } as const;
    if (rank[grant.level] < rank[request.requiredLevel]) {
      return {
        ok: false,
        reason: "level_insufficient",
        verifiedLevel: grant.level,
      };
    }
    if (request.requireMorrisGate && grant.canActAsMorris !== true) {
      return {
        ok: false,
        reason: "morris_gate_denied",
        verifiedLevel: grant.level,
      };
    }
    return {
      ok: true,
      verifiedLevel: grant.level,
      canActAsMorris: grant.canActAsMorris === true,
      reason: "verified",
    };
  }
}
```
### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/reviewBundleRepositoryReader.ts`

```typescript
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import type { ReviewBundleReaderPort } from "../ports/reviewBundleReader";

export class ReviewBundleRepositoryReader implements ReviewBundleReaderPort {
  constructor(private readonly repo: ReviewBundleRepositoryPort) {}

  findById(reviewBundleId: string): Promise<ReviewBundle | null> {
    return this.repo.findById(reviewBundleId);
  }
}
```
### `projects/sfia-studio/app/__tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts`

```typescript
/**
 * T-A6-D3 ClaimEvaluation — domain + Evaluate/Confirm/Reject lifecycle tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { ActorReference } from "@/lib/oa/evidence-review";
import { FakeClaimAuthority } from "@/lib/oa/evidence-review";
import { ACTOR, DIGEST_A, DIGEST_B, buildServices } from "./helpers";

const REVIEWER: ActorReference = {
  actorId: "actor:reviewer-1",
  role: "reviewer",
  authorityLevel: "N2",
};

const MORRIS: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  authorityLevel: "N3",
};

const SYSTEM: ActorReference = {
  actorId: "actor:studio",
  role: "system",
  authorityLevel: "none",
};

async function seedVerifiedEvidence(
  s: ReturnType<typeof buildServices>,
  id: string,
) {
  const reg = await s.registerEvidence.execute({
    evidenceId: id,
    idempotencyKey: `idem-${id}`,
    actor: ACTOR,
    type: "document",
    source: "fixture",
    sourceKind: "manual",
    bindings: { projectId: "prj:campus360-oa" },
    classification: "internal",
    storageMode: "metadata_only",
    digest: DIGEST_A,
  });
  expect(reg.ok).toBe(true);
  s.fakePayload.setScript(id, { digest: DIGEST_A });
  const verified = await s.verifyEvidenceIntegrity.execute({
    evidenceId: id,
    actor: ACTOR,
    expectedVersion: 1,
  });
  expect(verified.ok).toBe(true);
  if (!verified.ok) return;
  expect(verified.evidence.status).toBe("verified");
}

async function freezeBundle(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceIds: string[],
) {
  for (const id of evidenceIds) {
    await seedVerifiedEvidence(s, id);
  }
  const created = await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds,
  });
  expect(created.ok).toBe(true);
  const frozen = await s.freezeReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-freeze-${rbId}`,
    actor: ACTOR,
    expectedVersion: 1,
  });
  expect(frozen.ok).toBe(true);
  if (!frozen.ok) return null;
  expect(frozen.reviewBundle.frozenVersion).toBe(2);
  return frozen.reviewBundle;
}

describe("T-A6-D3 EvaluateClaim — PASS fail-closed", () => {
  it("non_critical deterministic PASS with verified Evidence in snapshot", async () => {
    const s = buildServices();
    const bundle = await freezeBundle(s, "rb:clm-pass", ["ev:clm-pass-1"]);
    expect(bundle).toBeTruthy();
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:pass-001",
      idempotencyKey: "idem-clm-pass-001",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Schema examples validate under ajv",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-pass-1"],
      reviewBundleId: "rb:clm-pass",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("pass");
    expect(result.claimEvaluation.confirmationAuthority).toBe(
      "system_deterministic",
    );
    expect(result.claimEvaluation.providedEvidenceRefs).toEqual([
      "ev:clm-pass-1",
    ]);
    expect(result.claimEvaluation.version).toBe(1);
  });

  it("never PASS with empty requiredEvidenceRefs", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-empty", ["ev:clm-empty-1"]);
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:empty-001",
      idempotencyKey: "idem-clm-empty",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Empty required refs",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: [],
      reviewBundleId: "rb:clm-empty",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(result.claimEvaluation.status).not.toBe("pass");
  });

  it("Evidence outside snapshot ⇒ not_proven", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-out", ["ev:clm-out-1"]);
    await seedVerifiedEvidence(s, "ev:clm-out-2");
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:out-001",
      idempotencyKey: "idem-clm-out",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Outside snapshot",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-out-2"],
      reviewBundleId: "rb:clm-out",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(
      result.claimEvaluation.evidenceAssessments?.[0]?.code,
    ).toBe("not_in_bundle");
  });

  it("unavailable Evidence cannot PASS", async () => {
    const s = buildServices();
    await seedVerifiedEvidence(s, "ev:clm-unavail");
    // Mark unavailable before freeze so snapshot captures unavailable.
    const ev = await s.repository.findById("ev:clm-unavail");
    expect(ev?.version).toBe(2);
    await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:clm-unavail",
      actor: ACTOR,
      expectedVersion: 2,
      reason: "withdrawn",
      idempotencyKey: "idem-mark-unavail",
    });
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:clm-unavail",
      idempotencyKey: "idem-rb-unavail",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:clm-unavail"],
    });
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:clm-unavail",
      idempotencyKey: "idem-fz-unavail",
      actor: ACTOR,
      expectedVersion: 1,
    });
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:unavail-001",
      idempotencyKey: "idem-clm-unavail",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Unavailable evidence",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-unavail"],
      reviewBundleId: "rb:clm-unavail",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(result.claimEvaluation.evidenceAssessments?.[0]?.code).toBe(
      "unavailable",
    );
  });

  it("non-verified Evidence cannot PASS", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:clm-unverified",
      idempotencyKey: "idem-ev-unverified",
      actor: ACTOR,
      type: "document",
      source: "fixture",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "metadata_only",
      digest: DIGEST_B,
    });
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:clm-unverified",
      idempotencyKey: "idem-rb-unverified",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:clm-unverified"],
    });
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:clm-unverified",
      idempotencyKey: "idem-fz-unverified",
      actor: ACTOR,
      expectedVersion: 1,
    });
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:unverified-001",
      idempotencyKey: "idem-clm-unverified",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Unverified evidence",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-unverified"],
      reviewBundleId: "rb:clm-unverified",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.claimEvaluation.status).toBe("not_proven");
    expect(result.claimEvaluation.evidenceAssessments?.[0]?.code).toBe(
      "not_verified",
    );
  });

  it("wrong ReviewBundle frozen version rejected", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-ver", ["ev:clm-ver-1"]);
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:ver-001",
      idempotencyKey: "idem-clm-ver",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Wrong version",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-ver-1"],
      reviewBundleId: "rb:clm-ver",
      reviewBundleVersion: 99,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe(
      "CLAIM_REVIEW_BUNDLE_VERSION_MISMATCH",
    );
  });
});

describe("T-A6-D3 ConfirmClaimEvaluation — authority", () => {
  it("Critical requires human confirm; system cannot confirm; self-review forbidden", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s, "rb:clm-crit", ["ev:clm-crit-1"]);
    const evaluated = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:crit-001",
      idempotencyKey: "idem-clm-crit-eval",
      actor: REVIEWER,
      claimType: "securite",
      claimStatement: "Evidence metadata remains clear of credentials",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-crit-1"],
      reviewBundleId: "rb:clm-crit",
      reviewBundleVersion: 2,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("evaluating");

    const sysConfirm = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:crit-001",
      idempotencyKey: "idem-clm-crit-sys",
      actor: SYSTEM,
      expectedVersion: 1,
    });
    expect(sysConfirm.ok).toBe(false);
    if (sysConfirm.ok) return;
    expect(sysConfirm.error.detailCode).toBe("CLAIM_AUTHORITY_FORBIDDEN");

    const selfConfirm = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:crit-001",
      idempotencyKey: "idem-clm-crit-self",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(selfConfirm.ok).toBe(false);
    if (selfConfirm.ok) return;
    expect(selfConfirm.error.detailCode).toBe("CLAIM_SELF_REVIEW_FORBIDDEN");

    // Re-propose by system then confirm by reviewer
    const s2 = buildServices();
    s2.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s2, "rb:clm-crit2", ["ev:clm-crit-2"]);
    const proposed = await s2.evaluateClaim.execute({
      claimEvaluationId: "clm:crit-002",
      idempotencyKey: "idem-clm-crit2-eval",
      actor: SYSTEM,
      claimType: "securite",
      claimStatement: "Evidence metadata remains clear of credentials",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-crit-2"],
      reviewBundleId: "rb:clm-crit2",
      reviewBundleVersion: 2,
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const confirmed = await s2.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:crit-002",
      idempotencyKey: "idem-clm-crit2-confirm",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.claimEvaluation.status).toBe("pass");
    expect(confirmed.claimEvaluation.confirmationAuthority).toBe(
      "authorized_human",
    );
    expect(confirmed.claimEvaluation.confirmedBy?.actorId).toBe(
      REVIEWER.actorId,
    );
  });

  it("structural PASS requires Morris gate; N3 without morris denied", async () => {
    const auth = new FakeClaimAuthority();
    auth.grant({
      actorId: MORRIS.actorId,
      level: "N3",
      scope: "oa.claim_evaluation",
      canActAsMorris: false,
    });
    const s = buildServices();
    // override authority on evaluate/confirm by rebuilding with grant
    s.fakeClaimAuthority.grant({
      actorId: MORRIS.actorId,
      level: "N3",
      scope: "oa.claim_evaluation",
      canActAsMorris: false,
    });
    await freezeBundle(s, "rb:clm-str", ["ev:clm-str-1"]);
    const evaluated = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:str-001",
      idempotencyKey: "idem-clm-str-eval",
      actor: SYSTEM,
      claimType: "maturite_support",
      claimStatement: "Structural boundary sound",
      criticality: "structural",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-str-1"],
      reviewBundleId: "rb:clm-str",
      reviewBundleVersion: 2,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    const denied = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:str-001",
      idempotencyKey: "idem-clm-str-deny",
      actor: MORRIS,
      expectedVersion: 1,
    });
    expect(denied.ok).toBe(false);
    if (denied.ok) return;
    expect(denied.error.detailCode).toBe("CLAIM_AUTHORITY_FORBIDDEN");

    s.fakeClaimAuthority.grant({
      actorId: "actor:morris-gate",
      level: "N3",
      scope: "oa.claim_evaluation",
      canActAsMorris: true,
    });
    const morrisGate: ActorReference = {
      actorId: "actor:morris-gate",
      role: "decision_maker",
      authorityLevel: "N3",
    };
    const confirmed = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:str-001",
      idempotencyKey: "idem-clm-str-ok",
      actor: morrisGate,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;
    expect(confirmed.claimEvaluation.confirmationAuthority).toBe("morris");
  });
});

describe("T-A6-D3 Waiver / Dispute / Reject / Supersession", () => {
  it("waiver requires human; system refused; waiver ≠ PASS", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: MORRIS.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s, "rb:clm-wav", ["ev:clm-wav-1"]);
    const sys = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:wav-sys",
      idempotencyKey: "idem-wav-sys",
      actor: SYSTEM,
      claimType: "conformite",
      claimStatement: "Defer tablet UX",
      criticality: "non_critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-wav-1"],
      reviewBundleId: "rb:clm-wav",
      reviewBundleVersion: 2,
      intent: "waive",
      waiverReason: "UX-U01 deferred",
    });
    expect(sys.ok).toBe(false);
    if (sys.ok) return;
    expect(sys.error.detailCode).toBe("CLAIM_WAIVER_FORBIDDEN");

    const waived = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:wav-001",
      idempotencyKey: "idem-wav-ok",
      actor: MORRIS,
      claimType: "conformite",
      claimStatement: "Defer tablet UX",
      criticality: "non_critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-wav-1"],
      reviewBundleId: "rb:clm-wav",
      reviewBundleVersion: 2,
      intent: "waive",
      waiverReason: "UX-U01 deferred",
    });
    expect(waived.ok).toBe(true);
    if (!waived.ok) return;
    expect(waived.claimEvaluation.status).toBe("waived");
    expect(waived.claimEvaluation.status).not.toBe("pass");
    expect(waived.claimEvaluation.waiver?.reversible).toBe(true);
  });

  it("dispute blocks confirmation", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    await freezeBundle(s, "rb:clm-disp", ["ev:clm-disp-1"]);
    const disputed = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:disp-001",
      idempotencyKey: "idem-disp",
      actor: REVIEWER,
      claimType: "technique",
      claimStatement: "Digest contested",
      criticality: "critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:clm-disp-1"],
      reviewBundleId: "rb:clm-disp",
      reviewBundleVersion: 2,
      intent: "dispute",
      disputeReason: "provenance contested",
    });
    expect(disputed.ok).toBe(true);
    if (!disputed.ok) return;
    expect(disputed.claimEvaluation.status).toBe("disputed");
    const confirm = await s.confirmClaimEvaluation.execute({
      claimEvaluationId: "clm:disp-001",
      idempotencyKey: "idem-disp-confirm",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirm.ok).toBe(false);
    if (confirm.ok) return;
    expect(confirm.error.detailCode).toBe("CLAIM_DISPUTED");
  });

  it("reject evaluating → fail|not_proven", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-rej", ["ev:clm-rej-1"]);
    const evaluated = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:rej-001",
      idempotencyKey: "idem-rej-eval",
      actor: SYSTEM,
      claimType: "qualite",
      claimStatement: "Coverage complete",
      criticality: "critical",
      evaluationMethod: "assisted",
      requiredEvidenceRefs: ["ev:clm-rej-1"],
      reviewBundleId: "rb:clm-rej",
      reviewBundleVersion: 2,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    const rejected = await s.rejectClaimEvaluation.execute({
      claimEvaluationId: "clm:rej-001",
      idempotencyKey: "idem-rej",
      actor: REVIEWER,
      expectedVersion: 1,
      outcome: "not_proven",
      reason: "insufficient coverage",
    });
    expect(rejected.ok).toBe(true);
    if (!rejected.ok) return;
    expect(rejected.claimEvaluation.status).toBe("not_proven");
  });

  it("supersession creates new claim without mutating prior", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-sup", ["ev:clm-sup-1"]);
    const first = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:sup-old",
      idempotencyKey: "idem-sup-old",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "First evaluation",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-sup-1"],
      reviewBundleId: "rb:clm-sup",
      reviewBundleVersion: 2,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const second = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:sup-new",
      idempotencyKey: "idem-sup-new",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "Re-evaluation",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-sup-1"],
      reviewBundleId: "rb:clm-sup",
      reviewBundleVersion: 2,
      supersedesClaimEvaluationId: "clm:sup-old",
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.claimEvaluation.supersedesClaimEvaluationId).toBe(
      "clm:sup-old",
    );
    const old = await s.claimEvaluationRepository.findById("clm:sup-old");
    expect(old?.status).toBe("pass");
    expect(old?.version).toBe(1);
  });

  it("idempotent evaluate replay", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-idem", ["ev:clm-idem-1"]);
    const req = {
      claimEvaluationId: "clm:idem-001",
      idempotencyKey: "idem-clm-same",
      actor: SYSTEM,
      claimType: "technique" as const,
      claimStatement: "Replay",
      criticality: "non_critical" as const,
      evaluationMethod: "deterministic" as const,
      requiredEvidenceRefs: ["ev:clm-idem-1"],
      reviewBundleId: "rb:clm-idem",
      reviewBundleVersion: 2,
    };
    const first = await s.evaluateClaim.execute(req);
    const second = await s.evaluateClaim.execute(req);
    expect(first.ok && second.ok).toBe(true);
    if (!first.ok || !second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.claimEvaluation.claimEvaluationId).toBe(
      first.claimEvaluation.claimEvaluationId,
    );
  });

  it("never creates MaturityAssessment fields", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:clm-mat", ["ev:clm-mat-1"]);
    const result = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:mat-001",
      idempotencyKey: "idem-mat",
      actor: SYSTEM,
      claimType: "technique",
      claimStatement: "No maturity",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:clm-mat-1"],
      reviewBundleId: "rb:clm-mat",
      reviewBundleVersion: 2,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(
      Object.prototype.hasOwnProperty.call(
        result.claimEvaluation,
        "maturityAssessmentId",
      ),
    ).toBe(false);
    expect(
      Object.prototype.hasOwnProperty.call(result.claimEvaluation, "autoPromoted"),
    ).toBe(false);
  });
});
```


## 12. Gate suivant

`GO VALIDATE T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## 13. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D3 CLAIM EVALUATION IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
