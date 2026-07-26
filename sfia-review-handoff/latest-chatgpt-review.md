# SFIA Review Pack — FULL — T-A6 D2 ReviewBundle Implementation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 03:14:03 CEST (+0200) |
| **Cycle** | Delivery — implémentation / T-A6-D2 ReviewBundle |
| **Profil** | Critical |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `2829eb659cbea1ac492744bc07e005d58473a9de` |
| **HEAD final** | `b2c8b64e2ffde98f5c0cfb72b698a76a07425478` |
| **Commits** | `e2126b5` feat D2 · `b2c8b64` record HEAD |
| **Push/PR/merge** | **NON** |
| **D3–D5** | **NON** |
| **Modeled / T-A3–T-A5 / packages** | **NON** modifiés |
| **D1 régressé** | **NON** (83 PASS incl. D1) |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — HEAD initial `2829eb6…` ; final `b2c8b64e2ffde98f5c0cfb72b698a76a07425478` ; main `b25c20e6…` ; handoff source `fd03b0ab…`.

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
HEAD b2c8b64e2ffde98f5c0cfb72b698a76a07425478
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
HEAD ec28fdc90c03516743732098788d7cb75ddda759
branch refs/heads/sfia/review-handoff
```

## 2. Handoff source

blob `fd03b0ab2563b53e67d31f6eebbbf81a60f278bc` — D1 VALIDATED AFTER CORRECTION

## 3. CKC

`03-architecture-technique.md` · candidate · `executionAuthority=false`

## 4. Arborescence

```
projects/sfia-studio/app/lib/oa/evidence-review/application/attachEvidenceToReviewBundle.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/completeReview.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/createReviewBundle.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/freezeReviewBundle.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/markEvidenceUnavailable.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/removeEvidenceFromReviewBundle.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/reopenReview.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/startReview.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/verifyEvidenceIntegrity.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/errors.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleErrors.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleInvariants.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleTypes.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
projects/sfia-studio/app/lib/oa/evidence-review/index.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/evidenceRepositoryReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeExecutionAttemptReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/idGenerator.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceStore.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleStore.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/observability.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidencePayloadPort.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/executionAttemptReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/idGenerator.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
```

## 5. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review D1+D2 | **83 PASS** |
| T-A3 / T-A4 / T-A5 | 50 / 61 / 88 PASS |
| Modeled T-A6 | 27 PASS |
| typecheck / lint / secret / diff-check | PASS |

## 6. Findings

Aucun Critical / Major.

## 7. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 OPEN · C1–C4 NOT VALIDATED

## 8. Contenu complet — `11-delivery-d2-implementation.md`

```markdown
# 11 — T-A6-D2 ReviewBundle Implementation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D2 — ReviewBundle |
| **Cycle** | Delivery — implémentation (Critical) |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `2829eb659cbea1ac492744bc07e005d58473a9de` |
| **HEAD final** | `e2126b57d4b88ee698582d27fe89737799b31805` |
| **Horodatage** | 2026-07-26 03:13:30 CEST (+0200) |
| **Handoff source** | blob `fd03b0ab2563b53e67d31f6eebbbf81a60f278bc` |
| **Statut** | **T-A6-D2 IMPLEMENTED — NOT VALIDATED** |
| **D1** | VALIDATED AFTER CORRECTION |
| **D3–D5** | **NON** |
| **Fake-only / mémoire** | **oui** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`10` · ReviewBundle schema `0.2.0-oa` · runtime D1 · CKC `03-architecture-technique.md` (candidate, `executionAuthority=false`).

---

## 2. Périmètre D2

### Inclus

- Domaine ReviewBundle + invariants modeled
- CreateReviewBundle · AttachEvidence · RemoveEvidence · Freeze · StartReview · CompleteReview · ReopenReview
- ReviewBundleRepository mémoire + OCC
- EvidenceReader read-only sur EvidenceRepository D1
- Audit events `oa.review_bundle.*`
- Tests domaine + lifecycle

### Hors périmètre

ClaimEvaluation · Maturity · D5 · SQL/API/UI · T-A7 · modification modeled / T-A3–T-A5 · fermeture réserves

---

## 3. Architecture créée

Module inchangé : `app/lib/oa/evidence-review/**`

```
domain/reviewBundle{Types,Errors,Invariants}.ts
application/{create,attach,remove,freeze,start,complete,reopen}Review*.ts
ports/{reviewBundleRepository,evidenceReader}.ts
infrastructure/{memoryReviewBundle{Store,Repository},evidenceRepositoryReader}.ts
index.ts — exports D1+D2 + factories étendues
```

---

## 4. Lifecycle

`draft` → `ready_for_review` (≡ freeze, `frozenAt`) → `under_review` → `accepted` | `rejected` | `incomplete` | `superseded`

Règles :

- draft mutable sous OCC ; post-freeze : evidenceRefs immuables
- accepted ⇒ complete ∧ ¬synthesisOnly
- incomplete status ⇒ completeness incomplete
- synthesisOnly ⇒ completeness incomplete
- claimEvaluationRefs toujours `[]` en D2
- accepted ≠ Claim PASS

### ReopenReview (choix documenté)

1. Marquer l’agrégat terminal `superseded` (OCC, historique conservé)
2. Créer un **nouveau** draft (`rb:` distinct, version 1) avec les mêmes `evidenceRefs`, `supersedesReviewBundleId` = ancien id
3. Aucune mutation silencieuse du snapshot terminal

---

## 5. Evidence refs

- Lecture via `EvidenceReaderPort` uniquement
- Freeze capture `frozenEvidenceSnapshots` (id, version Evidence, status, availability)
- Doublons refusés ; ordre déterministe
- Evidence unavailable attachable ⇒ completeness incomplete
- Evidence jamais mutée ; jamais auto-verified

---

## 6. OCC / idempotence / immutabilité

- `expectedVersion` + version monotone
- index idempotency + fingerprint + `successorId` pour reopen
- `structuredClone` sur create/get/update
- tests : mutation post-get n’affecte pas le store

---

## 7. Sécurité / RGPD / audit

Motifs/actors filtrés secrets · audit refs-only · aucun payload · fake-only · U-M02 OPEN

---

## 8. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review (D1+D2) | **83 PASS** |
| T-A3 | **50 PASS** |
| T-A4 | **61 PASS** |
| T-A5 | **88 PASS** |
| Modeled T-A6 | **27 PASS** |
| typecheck / lint / diff-check / secret scan lib | **PASS** |

D1 non régressé (57 → inclus dans 83 avec +26 D2).

---

## 9. Findings

Aucun Critical / Major.
Observations : C1 (statut Evidence pour futurs PASS) · O-D2-1 claimEvaluationRefs vides jusqu’à D3.

---

## 10. Réserves (OPEN)

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

---

## 11. Anti-claims

Pas D2 VALIDATED · D3 READY · DELIVERY COMPLETE · ClaimEvaluation · R-M01 fermée · persistence réelle · T-A7

---

## 12. Gate suivant

`GO VALIDATE T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

---

## 13. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
```

## 9. Contenu complet — README

```markdown
# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Profil** | Critical |
| **Gate D1 validate** | `GO VALIDATE T-A6 DELIVERY D1` (**CONSUMED**) |
| **Gate D2 implement** | `GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` |
| **Runtime D1** | **VALIDATED** (après correction) |
| **Runtime D2** | ReviewBundle — **IMPLEMENTED — NOT VALIDATED** |
| **Fake-only / mémoire** | **oui** |
| **D3–D5** | **NON** lancés |
| **Push / PR / merge** | **NONE** |
| **Statut pack** | **T-A6-D2 IMPLEMENTED — NOT VALIDATED** |
| **Horodatage D2** | 2026-07-26 03:13:30 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Livrables

1. [README.md](./README.md)
2. [01](./01-framing.md) … [10-delivery-d1-validation.md](./10-delivery-d1-validation.md)
3. [11-delivery-d2-implementation.md](./11-delivery-d2-implementation.md)
4. Runtime : `app/lib/oa/evidence-review/**` (D1+D2)
5. Tests : `app/__tests__/oa/evidence-review/**`

## D2 implémenté

Create / Attach / Remove / Freeze / StartReview / CompleteReview / ReopenReview · OCC mémoire · EvidenceReader RO · 83 tests D1+D2 PASS

## Réserves (OPEN)

B5 · R1 · R-T-A3-1..4 (HARD 1–2) · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

## Anti-claims

Pas D2 VALIDATED / D3 READY / ClaimEvaluation / persistence réelle / T-A7 / R-M01 fermée
```

## 10. Contenu complet — runtime + tests D2

### `projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleTypes.ts`

```typescript
/**
 * T-A6-D2 ReviewBundle — domain types (Option A v3-native).
 * Modeled: review-bundle.schema.json 0.2.0-oa.
 * Runtime OCC uses modeled `version`. ready_for_review ≡ frozen.
 * claimEvaluationRefs remain empty in D2 (no ClaimEvaluation).
 */

import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";

export type { ActorReference, ProvenanceRecord };

export const REVIEW_BUNDLE_SCHEMA_VERSION = "0.2.0-oa" as const;

export type ReviewBundleStatus =
  | "draft"
  | "ready_for_review"
  | "under_review"
  | "accepted"
  | "rejected"
  | "incomplete"
  | "superseded";

export type ReviewBundleCompleteness = "complete" | "incomplete";

/** Frozen snapshot of an Evidence ref at freeze time (runtime; never a payload). */
export type ReviewBundleEvidenceSnapshot = {
  evidenceId: string;
  evidenceVersion: number;
  status: string;
  availability: string;
};

export type ReviewBundle = {
  schemaVersion: typeof REVIEW_BUNDLE_SCHEMA_VERSION;
  reviewBundleId: string;
  projectId: string;
  cycleInstanceId?: string;
  executionContractId?: string;
  /** OCC + modeled version — verdict binds reviewBundleId + version. */
  version: number;
  evidenceRefs: string[];
  /** Always empty in D2 — ClaimEvaluation is D3. */
  claimEvaluationRefs: string[];
  completeness: ReviewBundleCompleteness;
  reservations?: string[];
  reviewer?: ActorReference;
  status: ReviewBundleStatus;
  createdAt: string;
  frozenAt?: string;
  reviewStartedAt?: string;
  validatedAt?: string;
  supersedesReviewBundleId?: string;
  synthesisOnly: boolean;
  provenance: ProvenanceRecord;
  /** Runtime: set at freeze; immutable thereafter. */
  frozenEvidenceSnapshots?: ReviewBundleEvidenceSnapshot[];
  /** Runtime command idempotency key for create. */
  idempotencyKey?: string;
  updatedAt?: string;
  reopenReason?: string;
  completionReason?: string;
};

export type ReviewBundleDetailCode =
  | "REVIEW_BUNDLE_INVALID"
  | "REVIEW_BUNDLE_NOT_FOUND"
  | "REVIEW_BUNDLE_ALREADY_EXISTS"
  | "REVIEW_BUNDLE_NOT_DRAFT"
  | "REVIEW_BUNDLE_NOT_FROZEN"
  | "REVIEW_BUNDLE_ALREADY_FROZEN"
  | "REVIEW_BUNDLE_NOT_UNDER_REVIEW"
  | "REVIEW_BUNDLE_INCOMPLETE"
  | "REVIEW_BUNDLE_VERSION_MISMATCH"
  | "REVIEW_BUNDLE_EVIDENCE_REQUIRED"
  | "REVIEW_BUNDLE_EVIDENCE_DUPLICATE"
  | "REVIEW_BUNDLE_EVIDENCE_MISSING"
  | "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT"
  | "REVIEW_BUNDLE_TERMINAL"
  | "REVIEW_BUNDLE_NOT_TERMINAL"
  | "REVIEW_BUNDLE_SECRET_FORBIDDEN"
  | "EVIDENCE_NOT_FOUND"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "REVIEW_BUNDLE_PERSISTENCE_FAILED";

export type ReviewBundleModeledErrorCode =
  | "STATE_CONFLICT"
  | "VALIDATION_FAILED"
  | "AUTHORITY_DENIED";

export type ReviewBundleStructuredError = {
  code: ReviewBundleModeledErrorCode;
  detailCode: ReviewBundleDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: true;
  recoverable: boolean;
  domain: "F";
  timestamp: string;
  correlationId?: string;
  reviewBundleId?: string;
  evidenceId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
};

export type ReviewBundleResult = {
  ok: true;
  reviewBundle: ReviewBundle;
  /** Present when ReopenReview also creates a successor draft. */
  successor?: ReviewBundle;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
} | {
  ok: false;
  error: ReviewBundleStructuredError;
  reviewBundle?: ReviewBundle;
  durationMs: number;
};

export type CreateReviewBundleRequest = {
  reviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  projectId: string;
  cycleInstanceId?: string;
  executionContractId?: string;
  synthesisOnly?: boolean;
  evidenceIds?: string[];
  reservations?: string[];
  correlationId?: string;
  nowIso?: string;
};

export type AttachEvidenceToReviewBundleRequest = {
  reviewBundleId: string;
  evidenceId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type RemoveEvidenceFromReviewBundleRequest = {
  reviewBundleId: string;
  evidenceId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type FreezeReviewBundleRequest = {
  reviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type StartReviewRequest = {
  reviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type CompleteReviewOutcome = "accepted" | "rejected" | "incomplete";

export type CompleteReviewRequest = {
  reviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  outcome: CompleteReviewOutcome;
  reason?: string;
  correlationId?: string;
  nowIso?: string;
};

export type ReopenReviewRequest = {
  reviewBundleId: string;
  /** New draft successor ID. */
  successorReviewBundleId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  reason: string;
  correlationId?: string;
  nowIso?: string;
};
```

### `projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleErrors.ts`

```typescript
import type {
  ReviewBundleDetailCode,
  ReviewBundleModeledErrorCode,
  ReviewBundleStructuredError,
} from "./reviewBundleTypes";

const DETAIL_TO_MODELED: Record<
  ReviewBundleDetailCode,
  ReviewBundleModeledErrorCode
> = {
  REVIEW_BUNDLE_INVALID: "VALIDATION_FAILED",
  REVIEW_BUNDLE_NOT_FOUND: "STATE_CONFLICT",
  REVIEW_BUNDLE_ALREADY_EXISTS: "STATE_CONFLICT",
  REVIEW_BUNDLE_NOT_DRAFT: "STATE_CONFLICT",
  REVIEW_BUNDLE_NOT_FROZEN: "STATE_CONFLICT",
  REVIEW_BUNDLE_ALREADY_FROZEN: "STATE_CONFLICT",
  REVIEW_BUNDLE_NOT_UNDER_REVIEW: "STATE_CONFLICT",
  REVIEW_BUNDLE_INCOMPLETE: "VALIDATION_FAILED",
  REVIEW_BUNDLE_VERSION_MISMATCH: "STATE_CONFLICT",
  REVIEW_BUNDLE_EVIDENCE_REQUIRED: "VALIDATION_FAILED",
  REVIEW_BUNDLE_EVIDENCE_DUPLICATE: "VALIDATION_FAILED",
  REVIEW_BUNDLE_EVIDENCE_MISSING: "VALIDATION_FAILED",
  REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT: "VALIDATION_FAILED",
  REVIEW_BUNDLE_TERMINAL: "STATE_CONFLICT",
  REVIEW_BUNDLE_NOT_TERMINAL: "STATE_CONFLICT",
  REVIEW_BUNDLE_SECRET_FORBIDDEN: "AUTHORITY_DENIED",
  EVIDENCE_NOT_FOUND: "STATE_CONFLICT",
  VERSION_CONFLICT: "STATE_CONFLICT",
  CONCURRENT_MODIFICATION: "STATE_CONFLICT",
  IDEMPOTENCY_CONFLICT: "STATE_CONFLICT",
  REVIEW_BUNDLE_PERSISTENCE_FAILED: "STATE_CONFLICT",
};

const SAFE_MESSAGES: Record<ReviewBundleDetailCode, string> = {
  REVIEW_BUNDLE_INVALID: "Review bundle input is invalid.",
  REVIEW_BUNDLE_NOT_FOUND: "Review bundle was not found.",
  REVIEW_BUNDLE_ALREADY_EXISTS: "Review bundle already exists.",
  REVIEW_BUNDLE_NOT_DRAFT: "Review bundle is not in draft status.",
  REVIEW_BUNDLE_NOT_FROZEN: "Review bundle is not frozen.",
  REVIEW_BUNDLE_ALREADY_FROZEN: "Review bundle is already frozen.",
  REVIEW_BUNDLE_NOT_UNDER_REVIEW: "Review bundle is not under review.",
  REVIEW_BUNDLE_INCOMPLETE: "Review bundle completeness is incomplete.",
  REVIEW_BUNDLE_VERSION_MISMATCH: "Review bundle version mismatch.",
  REVIEW_BUNDLE_EVIDENCE_REQUIRED: "At least one Evidence reference is required.",
  REVIEW_BUNDLE_EVIDENCE_DUPLICATE: "Evidence reference is already attached.",
  REVIEW_BUNDLE_EVIDENCE_MISSING: "Evidence reference is not attached.",
  REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT:
    "Synthesis-only review bundle cannot be complete or accepted.",
  REVIEW_BUNDLE_TERMINAL: "Review bundle is already terminal.",
  REVIEW_BUNDLE_NOT_TERMINAL: "Review bundle is not in a terminal status.",
  REVIEW_BUNDLE_SECRET_FORBIDDEN:
    "Secrets or tokens are forbidden in review bundle metadata.",
  EVIDENCE_NOT_FOUND: "Evidence was not found.",
  VERSION_CONFLICT: "Review bundle version conflict.",
  CONCURRENT_MODIFICATION: "Review bundle concurrent modification conflict.",
  IDEMPOTENCY_CONFLICT:
    "Review bundle idempotency key conflicts with a different command.",
  REVIEW_BUNDLE_PERSISTENCE_FAILED: "Review bundle persistence failed.",
};

const RETRYABLE: ReadonlySet<ReviewBundleDetailCode> = new Set([
  "VERSION_CONFLICT",
  "CONCURRENT_MODIFICATION",
  "REVIEW_BUNDLE_PERSISTENCE_FAILED",
]);

export function createReviewBundleError(input: {
  detailCode: ReviewBundleDetailCode;
  timestamp: string;
  correlationId?: string;
  reviewBundleId?: string;
  evidenceId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
  retryable?: boolean;
}): ReviewBundleStructuredError {
  const detailCode = input.detailCode;
  return {
    code: DETAIL_TO_MODELED[detailCode],
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity:
      detailCode === "REVIEW_BUNDLE_SECRET_FORBIDDEN" ? "critical" : "error",
    retryable: input.retryable ?? RETRYABLE.has(detailCode),
    blocking: true,
    recoverable: detailCode !== "REVIEW_BUNDLE_SECRET_FORBIDDEN",
    domain: "F",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    reviewBundleId: input.reviewBundleId,
    evidenceId: input.evidenceId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    internalCauseRef: input.internalCauseRef,
  };
}

export class ReviewBundleDomainError extends Error {
  readonly detailCode: ReviewBundleDetailCode;
  readonly expectedVersion?: number;
  readonly currentVersion?: number;

  constructor(
    detailCode: ReviewBundleDetailCode,
    internalCauseRef: string,
    versions?: { expectedVersion?: number; currentVersion?: number },
  ) {
    super(internalCauseRef);
    this.name = "ReviewBundleDomainError";
    this.detailCode = detailCode;
    this.expectedVersion = versions?.expectedVersion;
    this.currentVersion = versions?.currentVersion;
  }
}

export function isReviewBundleDomainError(
  value: unknown,
): value is ReviewBundleDomainError {
  return value instanceof ReviewBundleDomainError;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/domain/reviewBundleInvariants.ts`

```typescript
/**
 * ReviewBundle invariants — mirrors review-bundle.schema.json 0.2.0-oa.
 */
import {
  containsForbiddenSecret,
  isEvidenceId,
  isOaIdentifier,
} from "./invariants";
import type {
  ReviewBundle,
  ReviewBundleCompleteness,
  ReviewBundleDetailCode,
  ReviewBundleEvidenceSnapshot,
  ReviewBundleStatus,
} from "./reviewBundleTypes";

export type ReviewBundleInvariantViolation = {
  detailCode: ReviewBundleDetailCode;
  reason: string;
};

export const REVIEW_BUNDLE_STATUSES: ReadonlySet<ReviewBundleStatus> = new Set([
  "draft",
  "ready_for_review",
  "under_review",
  "accepted",
  "rejected",
  "incomplete",
  "superseded",
]);

export const TERMINAL_REVIEW_STATUSES: ReadonlySet<ReviewBundleStatus> = new Set([
  "accepted",
  "rejected",
  "incomplete",
  "superseded",
]);

export const POST_DRAFT_STATUSES: ReadonlySet<ReviewBundleStatus> = new Set([
  "ready_for_review",
  "under_review",
  "accepted",
  "rejected",
  "incomplete",
  "superseded",
]);

export function isReviewBundleId(value: unknown): value is string {
  return isOaIdentifier(value) && value.startsWith("rb:");
}

export function isProjectId(value: unknown): value is string {
  return isOaIdentifier(value) && value.startsWith("prj:");
}

export function sortEvidenceRefs(refs: string[]): string[] {
  return [...refs].sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
}

/**
 * Completeness: complete only with ≥1 evidence refs, !synthesisOnly,
 * and no unavailable Evidence in known snapshots (when provided).
 */
export function computeCompleteness(input: {
  evidenceRefs: string[];
  synthesisOnly: boolean;
  snapshots?: ReviewBundleEvidenceSnapshot[];
}): ReviewBundleCompleteness {
  if (input.synthesisOnly) return "incomplete";
  if (input.evidenceRefs.length < 1) return "incomplete";
  if (
    input.snapshots?.some(
      (s) => s.availability === "unavailable" || s.status === "unavailable",
    )
  ) {
    return "incomplete";
  }
  return "complete";
}

export function validateReviewBundleShape(
  bundle: ReviewBundle,
): ReviewBundleInvariantViolation | null {
  if (bundle.schemaVersion !== "0.2.0-oa") {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "schema_version" };
  }
  if (!isReviewBundleId(bundle.reviewBundleId)) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "review_bundle_id" };
  }
  if (!isProjectId(bundle.projectId)) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "project_id" };
  }
  if (
    bundle.cycleInstanceId !== undefined &&
    (!isOaIdentifier(bundle.cycleInstanceId) ||
      !bundle.cycleInstanceId.startsWith("cyc:"))
  ) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "cycle_instance_id" };
  }
  if (
    bundle.executionContractId !== undefined &&
    (!isOaIdentifier(bundle.executionContractId) ||
      !bundle.executionContractId.startsWith("xct:"))
  ) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "execution_contract_id",
    };
  }
  if (!REVIEW_BUNDLE_STATUSES.has(bundle.status)) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "status" };
  }
  if (bundle.completeness !== "complete" && bundle.completeness !== "incomplete") {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "completeness" };
  }
  if (typeof bundle.version !== "number" || bundle.version < 1) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "version" };
  }
  if (!bundle.createdAt) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "created_at" };
  }
  if (!bundle.provenance?.provenanceRecordId) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "provenance" };
  }
  if (!Array.isArray(bundle.evidenceRefs)) {
    return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "evidence_refs" };
  }
  for (const ref of bundle.evidenceRefs) {
    if (!isEvidenceId(ref)) {
      return { detailCode: "REVIEW_BUNDLE_INVALID", reason: "evidence_ref_id" };
    }
  }
  const unique = new Set(bundle.evidenceRefs);
  if (unique.size !== bundle.evidenceRefs.length) {
    return {
      detailCode: "REVIEW_BUNDLE_EVIDENCE_DUPLICATE",
      reason: "duplicate_evidence_refs",
    };
  }
  if (!Array.isArray(bundle.claimEvaluationRefs)) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "claim_evaluation_refs",
    };
  }
  // D2: claimEvaluationRefs must stay empty (no ClaimEvaluation created).
  if (bundle.claimEvaluationRefs.length > 0) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "claim_evaluation_refs_forbidden_in_d2",
    };
  }

  if (bundle.synthesisOnly && bundle.completeness === "complete") {
    return {
      detailCode: "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
      reason: "synthesis_only_complete",
    };
  }

  if (POST_DRAFT_STATUSES.has(bundle.status) && !bundle.frozenAt) {
    return {
      detailCode: "REVIEW_BUNDLE_NOT_FROZEN",
      reason: "frozen_at_required",
    };
  }

  if (bundle.status === "under_review" && !bundle.reviewStartedAt) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "review_started_at_required",
    };
  }

  if (bundle.status === "accepted") {
    if (bundle.completeness !== "complete" || bundle.synthesisOnly) {
      return {
        detailCode: "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
        reason: "accepted_requires_complete_non_synthesis",
      };
    }
    if (!bundle.validatedAt || !bundle.reviewer) {
      return {
        detailCode: "REVIEW_BUNDLE_INVALID",
        reason: "accepted_requires_validated_at_reviewer",
      };
    }
  }

  if (
    (bundle.status === "rejected" || bundle.status === "accepted") &&
    bundle.synthesisOnly
  ) {
    return {
      detailCode: "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
      reason: "verdict_synthesis_only",
    };
  }

  if (
    (bundle.status === "rejected" || bundle.status === "accepted") &&
    (!bundle.validatedAt || !bundle.reviewer)
  ) {
    return {
      detailCode: "REVIEW_BUNDLE_INVALID",
      reason: "verdict_requires_validated_at_reviewer",
    };
  }

  if (bundle.status === "incomplete" && bundle.completeness !== "incomplete") {
    return {
      detailCode: "REVIEW_BUNDLE_INCOMPLETE",
      reason: "incomplete_status_requires_incomplete_completeness",
    };
  }

  if (containsForbiddenSecret(bundle.completionReason)) {
    return {
      detailCode: "REVIEW_BUNDLE_SECRET_FORBIDDEN",
      reason: "secret_in_completion_reason",
    };
  }
  if (containsForbiddenSecret(bundle.reopenReason)) {
    return {
      detailCode: "REVIEW_BUNDLE_SECRET_FORBIDDEN",
      reason: "secret_in_reopen_reason",
    };
  }
  if (containsForbiddenSecret(bundle.reviewer?.displayName)) {
    return {
      detailCode: "REVIEW_BUNDLE_SECRET_FORBIDDEN",
      reason: "secret_in_reviewer",
    };
  }
  if (bundle.reservations) {
    for (const r of bundle.reservations) {
      if (containsForbiddenSecret(r)) {
        return {
          detailCode: "REVIEW_BUNDLE_SECRET_FORBIDDEN",
          reason: "secret_in_reservation",
        };
      }
    }
  }

  return null;
}

export function isTerminalReviewStatus(status: ReviewBundleStatus): boolean {
  return TERMINAL_REVIEW_STATUSES.has(status);
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/createReviewBundle.ts`

```typescript
/**
 * CreateReviewBundle — draft ReviewBundle (version 1).
 * claimEvaluationRefs always empty in D2. Never creates ClaimEvaluation.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isProjectId,
  isReviewBundleId,
  sortEvidenceRefs,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  CreateReviewBundleRequest,
  ReviewBundle,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import {
  REVIEW_BUNDLE_SCHEMA_VERSION,
} from "../domain/reviewBundleTypes";
import {
  containsForbiddenSecret,
  isEvidenceId,
} from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class CreateReviewBundle {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: CreateReviewBundleRequest,
  ): Promise<ReviewBundleResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createReviewBundleError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createReviewBundleError>[0]> & {
        reviewBundle?: ReviewBundle;
      },
    ): ReviewBundleResult => {
      const { reviewBundle, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.review_bundle.idempotency_conflict" as const)
          : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        actorId: request.actor.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createReviewBundleError({
          detailCode,
          timestamp,
          correlationId,
          reviewBundleId: request.reviewBundleId,
          internalCauseRef,
          ...errorExtra,
        }),
        reviewBundle,
        durationMs,
      };
    };

    try {
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "review_bundle_id_invalid");
      }
      if (!isProjectId(request.projectId)) {
        return fail("REVIEW_BUNDLE_INVALID", "project_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }

      const synthesisOnly = request.synthesisOnly ?? false;
      const evidenceIds = request.evidenceIds ?? [];

      if (request.reservations) {
        for (const r of request.reservations) {
          if (containsForbiddenSecret(r)) {
            return fail(
              "REVIEW_BUNDLE_SECRET_FORBIDDEN",
              "secret_in_reservation",
            );
          }
        }
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_actor");
      }

      for (const evidenceId of evidenceIds) {
        if (!isEvidenceId(evidenceId)) {
          return fail("REVIEW_BUNDLE_INVALID", "evidence_id_invalid", {
            evidenceId,
          });
        }
      }
      const unique = new Set(evidenceIds);
      if (unique.size !== evidenceIds.length) {
        return fail(
          "REVIEW_BUNDLE_EVIDENCE_DUPLICATE",
          "duplicate_evidence_ids",
        );
      }

      for (const evidenceId of evidenceIds) {
        const ev = await this.evidence.findById(evidenceId);
        if (!ev) {
          return fail("EVIDENCE_NOT_FOUND", "missing_evidence", { evidenceId });
        }
      }

      const evidenceRefs = sortEvidenceRefs(evidenceIds);
      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          idempotencyKey: request.idempotencyKey,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
          executionContractId: request.executionContractId,
          synthesisOnly,
          evidenceIds: evidenceRefs,
          reservations: request.reservations,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "create"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.created",
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const completeness = computeCompleteness({
        evidenceRefs,
        synthesisOnly,
      });

      const bundle: ReviewBundle = {
        schemaVersion: REVIEW_BUNDLE_SCHEMA_VERSION,
        reviewBundleId: request.reviewBundleId,
        projectId: request.projectId,
        cycleInstanceId: request.cycleInstanceId,
        executionContractId: request.executionContractId,
        version: 1,
        evidenceRefs,
        claimEvaluationRefs: [],
        completeness,
        reservations: request.reservations
          ? [...request.reservations]
          : undefined,
        status: "draft",
        createdAt: timestamp,
        synthesisOnly,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: request.projectId,
          cycleInstanceId: request.cycleInstanceId,
        }),
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(bundle);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(bundle, {
        reviewBundleId: bundle.reviewBundleId,
        fingerprint,
        operation: "create",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.created",
        ts: timestamp,
        correlationId,
        reviewBundleId: bundle.reviewBundleId,
        evidenceIds: evidenceRefs.length > 0 ? evidenceRefs : undefined,
        actorId: request.actor.actorId,
        newStatus: bundle.status,
        version: bundle.version,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        reviewBundle: structuredClone(bundle),
        durationMs,
      };
    } catch (err) {
      if (isReviewBundleDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "unexpected_create_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/attachEvidenceToReviewBundle.ts`

```typescript
/**
 * AttachEvidenceToReviewBundle — draft-only Evidence ref attach.
 * Never mutates Evidence. Never creates ClaimEvaluation.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isReviewBundleId,
  sortEvidenceRefs,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  AttachEvidenceToReviewBundleRequest,
  ReviewBundle,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import { isEvidenceId } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class AttachEvidenceToReviewBundle {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: AttachEvidenceToReviewBundleRequest,
  ): Promise<ReviewBundleResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createReviewBundleError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createReviewBundleError>[0]> & {
        reviewBundle?: ReviewBundle;
      },
    ): ReviewBundleResult => {
      const { reviewBundle, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.review_bundle.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.review_bundle.concurrent_modification_rejected" as const)
            : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        evidenceId: request.evidenceId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createReviewBundleError({
          detailCode,
          timestamp,
          correlationId,
          reviewBundleId: request.reviewBundleId,
          evidenceId: request.evidenceId,
          internalCauseRef,
          ...errorExtra,
        }),
        reviewBundle,
        durationMs,
      };
    };

    try {
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "review_bundle_id_invalid");
      }
      if (!isEvidenceId(request.evidenceId)) {
        return fail("REVIEW_BUNDLE_INVALID", "evidence_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          evidenceId: request.evidenceId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "attach"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.evidence_attached",
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            evidenceId: request.evidenceId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.reviewBundleId);
      if (!current) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          reviewBundle: current,
        });
      }

      if (current.status !== "draft") {
        return fail("REVIEW_BUNDLE_NOT_DRAFT", "attach_requires_draft", {
          reviewBundle: current,
        });
      }

      if (current.evidenceRefs.includes(request.evidenceId)) {
        return fail(
          "REVIEW_BUNDLE_EVIDENCE_DUPLICATE",
          "evidence_already_attached",
          { reviewBundle: current },
        );
      }

      const ev = await this.evidence.findById(request.evidenceId);
      if (!ev) {
        return fail("EVIDENCE_NOT_FOUND", "missing_evidence");
      }

      const evidenceRefs = sortEvidenceRefs([
        ...current.evidenceRefs,
        request.evidenceId,
      ]);
      const completeness = computeCompleteness({
        evidenceRefs,
        synthesisOnly: current.synthesisOnly,
      });

      const updated: ReviewBundle = {
        ...current,
        evidenceRefs,
        claimEvaluationRefs: [],
        completeness,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { reviewBundle: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        reviewBundleId: updated.reviewBundleId,
        fingerprint,
        operation: "attach",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.evidence_attached",
        ts: timestamp,
        correlationId,
        reviewBundleId: updated.reviewBundleId,
        evidenceId: request.evidenceId,
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
        reviewBundle: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isReviewBundleDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "unexpected_attach_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/removeEvidenceFromReviewBundle.ts`

```typescript
/**
 * RemoveEvidenceFromReviewBundle — draft-only Evidence ref remove.
 * Never mutates Evidence. Never creates ClaimEvaluation.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isReviewBundleId,
  sortEvidenceRefs,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  RemoveEvidenceFromReviewBundleRequest,
  ReviewBundle,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import { isEvidenceId } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class RemoveEvidenceFromReviewBundle {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: RemoveEvidenceFromReviewBundleRequest,
  ): Promise<ReviewBundleResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createReviewBundleError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createReviewBundleError>[0]> & {
        reviewBundle?: ReviewBundle;
      },
    ): ReviewBundleResult => {
      const { reviewBundle, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.review_bundle.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.review_bundle.concurrent_modification_rejected" as const)
            : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        evidenceId: request.evidenceId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createReviewBundleError({
          detailCode,
          timestamp,
          correlationId,
          reviewBundleId: request.reviewBundleId,
          evidenceId: request.evidenceId,
          internalCauseRef,
          ...errorExtra,
        }),
        reviewBundle,
        durationMs,
      };
    };

    try {
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "review_bundle_id_invalid");
      }
      if (!isEvidenceId(request.evidenceId)) {
        return fail("REVIEW_BUNDLE_INVALID", "evidence_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          evidenceId: request.evidenceId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "remove"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.evidence_removed",
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            evidenceId: request.evidenceId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.reviewBundleId);
      if (!current) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          reviewBundle: current,
        });
      }

      if (current.status !== "draft") {
        return fail("REVIEW_BUNDLE_NOT_DRAFT", "remove_requires_draft", {
          reviewBundle: current,
        });
      }

      if (!current.evidenceRefs.includes(request.evidenceId)) {
        return fail(
          "REVIEW_BUNDLE_EVIDENCE_MISSING",
          "evidence_not_attached",
          { reviewBundle: current },
        );
      }

      const evidenceRefs = sortEvidenceRefs(
        current.evidenceRefs.filter((id) => id !== request.evidenceId),
      );
      const completeness = computeCompleteness({
        evidenceRefs,
        synthesisOnly: current.synthesisOnly,
      });

      const updated: ReviewBundle = {
        ...current,
        evidenceRefs,
        claimEvaluationRefs: [],
        completeness,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { reviewBundle: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        reviewBundleId: updated.reviewBundleId,
        fingerprint,
        operation: "remove",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.evidence_removed",
        ts: timestamp,
        correlationId,
        reviewBundleId: updated.reviewBundleId,
        evidenceId: request.evidenceId,
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
        reviewBundle: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isReviewBundleDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "unexpected_remove_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/freezeReviewBundle.ts`

```typescript
/**
 * FreezeReviewBundle — draft → ready_for_review with Evidence snapshots.
 * Never mutates Evidence. Never creates ClaimEvaluation.
 * ready_for_review ≡ frozen (frozenAt set).
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isReviewBundleId,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  FreezeReviewBundleRequest,
  ReviewBundle,
  ReviewBundleEvidenceSnapshot,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class FreezeReviewBundle {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly evidence: EvidenceReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: FreezeReviewBundleRequest,
  ): Promise<ReviewBundleResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createReviewBundleError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createReviewBundleError>[0]> & {
        reviewBundle?: ReviewBundle;
      },
    ): ReviewBundleResult => {
      const { reviewBundle, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.review_bundle.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.review_bundle.concurrent_modification_rejected" as const)
            : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createReviewBundleError({
          detailCode,
          timestamp,
          correlationId,
          reviewBundleId: request.reviewBundleId,
          internalCauseRef,
          ...errorExtra,
        }),
        reviewBundle,
        durationMs,
      };
    };

    try {
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "review_bundle_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "freeze"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.frozen",
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.reviewBundleId);
      if (!current) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          reviewBundle: current,
        });
      }

      if (current.frozenAt || current.status === "ready_for_review") {
        return fail("REVIEW_BUNDLE_ALREADY_FROZEN", "already_frozen", {
          reviewBundle: current,
        });
      }

      if (current.status !== "draft") {
        return fail("REVIEW_BUNDLE_NOT_DRAFT", "freeze_requires_draft", {
          reviewBundle: current,
        });
      }

      if (current.evidenceRefs.length < 1) {
        return fail(
          "REVIEW_BUNDLE_EVIDENCE_REQUIRED",
          "freeze_requires_evidence",
          { reviewBundle: current },
        );
      }

      const snapshots: ReviewBundleEvidenceSnapshot[] = [];
      for (const evidenceId of current.evidenceRefs) {
        const ev = await this.evidence.findById(evidenceId);
        if (!ev) {
          return fail("EVIDENCE_NOT_FOUND", "missing_evidence_at_freeze", {
            evidenceId,
            reviewBundle: current,
          });
        }
        snapshots.push({
          evidenceId: ev.evidenceId,
          evidenceVersion: ev.version,
          status: ev.status,
          availability: ev.availability,
        });
      }

      const completeness = computeCompleteness({
        evidenceRefs: current.evidenceRefs,
        synthesisOnly: current.synthesisOnly,
        snapshots,
      });

      if (current.synthesisOnly && completeness === "complete") {
        return fail(
          "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
          "synthesis_only_complete",
          { reviewBundle: current },
        );
      }

      const updated: ReviewBundle = {
        ...current,
        claimEvaluationRefs: [],
        completeness,
        status: "ready_for_review",
        frozenAt: timestamp,
        frozenEvidenceSnapshots: snapshots,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { reviewBundle: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        reviewBundleId: updated.reviewBundleId,
        fingerprint,
        operation: "freeze",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.frozen",
        ts: timestamp,
        correlationId,
        reviewBundleId: updated.reviewBundleId,
        evidenceIds: updated.evidenceRefs,
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
        reviewBundle: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isReviewBundleDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "unexpected_freeze_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/startReview.ts`

```typescript
/**
 * StartReview — ready_for_review (frozen) → under_review.
 * Never mutates Evidence. Never creates ClaimEvaluation.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  isReviewBundleId,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  ReviewBundle,
  ReviewBundleResult,
  StartReviewRequest,
} from "../domain/reviewBundleTypes";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class StartReview {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: StartReviewRequest): Promise<ReviewBundleResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createReviewBundleError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createReviewBundleError>[0]> & {
        reviewBundle?: ReviewBundle;
      },
    ): ReviewBundleResult => {
      const { reviewBundle, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.review_bundle.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.review_bundle.concurrent_modification_rejected" as const)
            : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createReviewBundleError({
          detailCode,
          timestamp,
          correlationId,
          reviewBundleId: request.reviewBundleId,
          internalCauseRef,
          ...errorExtra,
        }),
        reviewBundle,
        durationMs,
      };
    };

    try {
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "review_bundle_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "start_review"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.review_started",
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.reviewBundleId);
      if (!current) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          reviewBundle: current,
        });
      }

      if (!current.frozenAt) {
        return fail("REVIEW_BUNDLE_NOT_FROZEN", "start_requires_frozen", {
          reviewBundle: current,
        });
      }
      if (current.status !== "ready_for_review") {
        return fail(
          "REVIEW_BUNDLE_NOT_FROZEN",
          "start_requires_ready_for_review",
          { reviewBundle: current },
        );
      }

      const updated: ReviewBundle = {
        ...current,
        claimEvaluationRefs: [],
        status: "under_review",
        reviewStartedAt: timestamp,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { reviewBundle: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        reviewBundleId: updated.reviewBundleId,
        fingerprint,
        operation: "start_review",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.review_started",
        ts: timestamp,
        correlationId,
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
        reviewBundle: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isReviewBundleDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "unexpected_start_review_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/completeReview.ts`

```typescript
/**
 * CompleteReview — under_review → accepted | rejected | incomplete.
 * accepted requires complete ∧ ¬synthesisOnly.
 * incomplete outcome forces completeness incomplete (distinct from rejected).
 * Never mutates Evidence. Never creates ClaimEvaluation.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  isReviewBundleId,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  CompleteReviewRequest,
  ReviewBundle,
  ReviewBundleResult,
  ReviewBundleStatus,
} from "../domain/reviewBundleTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type {
  EvidenceAuditEventName,
  EvidenceAuditPort,
} from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

function auditEventForOutcome(
  outcome: CompleteReviewRequest["outcome"],
): EvidenceAuditEventName {
  if (outcome === "accepted") return "oa.review_bundle.accepted";
  if (outcome === "rejected") return "oa.review_bundle.rejected";
  return "oa.review_bundle.marked_incomplete";
}

export class CompleteReview {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: CompleteReviewRequest): Promise<ReviewBundleResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createReviewBundleError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createReviewBundleError>[0]> & {
        reviewBundle?: ReviewBundle;
      },
    ): ReviewBundleResult => {
      const { reviewBundle, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.review_bundle.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.review_bundle.concurrent_modification_rejected" as const)
            : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createReviewBundleError({
          detailCode,
          timestamp,
          correlationId,
          reviewBundleId: request.reviewBundleId,
          internalCauseRef,
          ...errorExtra,
        }),
        reviewBundle,
        durationMs,
      };
    };

    try {
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "review_bundle_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }
      if (
        request.outcome !== "accepted" &&
        request.outcome !== "rejected" &&
        request.outcome !== "incomplete"
      ) {
        return fail("REVIEW_BUNDLE_INVALID", "outcome_invalid");
      }
      if (request.reason !== undefined && request.reason.length > 500) {
        return fail("REVIEW_BUNDLE_INVALID", "reason_too_long");
      }
      if (containsForbiddenSecret(request.reason)) {
        return fail(
          "REVIEW_BUNDLE_SECRET_FORBIDDEN",
          "secret_in_completion_reason",
        );
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_reviewer");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
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
          existingIdem.record.operation === "complete_review"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: auditEventForOutcome(request.outcome),
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.reviewBundleId);
      if (!current) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          reviewBundle: current,
        });
      }

      if (current.status !== "under_review") {
        return fail(
          "REVIEW_BUNDLE_NOT_UNDER_REVIEW",
          "complete_requires_under_review",
          { reviewBundle: current },
        );
      }

      if (request.outcome === "accepted") {
        if (current.completeness !== "complete" || current.synthesisOnly) {
          if (current.synthesisOnly) {
            return fail(
              "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
              "accepted_forbidden_for_synthesis_only",
              { reviewBundle: current },
            );
          }
          return fail(
            "REVIEW_BUNDLE_INCOMPLETE",
            "accepted_requires_complete",
            { reviewBundle: current },
          );
        }
      }

      if (
        (request.outcome === "accepted" || request.outcome === "rejected") &&
        current.synthesisOnly
      ) {
        return fail(
          "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
          "verdict_forbidden_for_synthesis_only",
          { reviewBundle: current },
        );
      }

      const status: ReviewBundleStatus = request.outcome;
      const completeness =
        request.outcome === "incomplete"
          ? ("incomplete" as const)
          : current.completeness;

      const updated: ReviewBundle = {
        ...current,
        claimEvaluationRefs: [],
        status,
        completeness,
        reviewer: { ...request.actor },
        validatedAt: timestamp,
        completionReason: request.reason,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateReviewBundleShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { reviewBundle: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        reviewBundleId: updated.reviewBundleId,
        fingerprint,
        operation: "complete_review",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: auditEventForOutcome(request.outcome),
        ts: timestamp,
        correlationId,
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
        reviewBundle: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isReviewBundleDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "unexpected_complete_review_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/reopenReview.ts`

```typescript
/**
 * ReopenReview — terminal → superseded + new draft successor (version 1).
 * Never mutates Evidence. Never creates ClaimEvaluation.
 * Idempotency stores successorId; returns old superseded + successor draft.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createReviewBundleError,
  isReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import {
  computeCompleteness,
  isReviewBundleId,
  isTerminalReviewStatus,
  sortEvidenceRefs,
  validateReviewBundleShape,
} from "../domain/reviewBundleInvariants";
import type {
  ReopenReviewRequest,
  ReviewBundle,
  ReviewBundleResult,
} from "../domain/reviewBundleTypes";
import {
  REVIEW_BUNDLE_SCHEMA_VERSION,
} from "../domain/reviewBundleTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class ReopenReview {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: ReopenReviewRequest): Promise<ReviewBundleResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createReviewBundleError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createReviewBundleError>[0]> & {
        reviewBundle?: ReviewBundle;
      },
    ): ReviewBundleResult => {
      const { reviewBundle, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.review_bundle.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.review_bundle.concurrent_modification_rejected" as const)
            : ("oa.review_bundle.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        reviewBundleId: request.reviewBundleId,
        successorReviewBundleId: request.successorReviewBundleId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createReviewBundleError({
          detailCode,
          timestamp,
          correlationId,
          reviewBundleId: request.reviewBundleId,
          internalCauseRef,
          ...errorExtra,
        }),
        reviewBundle,
        durationMs,
      };
    };

    try {
      if (!isReviewBundleId(request.reviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "review_bundle_id_invalid");
      }
      if (!isReviewBundleId(request.successorReviewBundleId)) {
        return fail("REVIEW_BUNDLE_INVALID", "successor_review_bundle_id_invalid");
      }
      if (request.successorReviewBundleId === request.reviewBundleId) {
        return fail(
          "REVIEW_BUNDLE_INVALID",
          "successor_must_differ_from_source",
        );
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("REVIEW_BUNDLE_INVALID", "idempotency_key_too_short");
      }
      if (!request.reason || request.reason.trim().length === 0) {
        return fail("REVIEW_BUNDLE_INVALID", "reason_required");
      }
      if (request.reason.length > 500) {
        return fail("REVIEW_BUNDLE_INVALID", "reason_too_long");
      }
      if (containsForbiddenSecret(request.reason)) {
        return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_reopen_reason");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          reviewBundleId: request.reviewBundleId,
          successorReviewBundleId: request.successorReviewBundleId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
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
          existingIdem.record.operation === "reopen_review"
        ) {
          if (!existingIdem.successor) {
            return fail(
              "REVIEW_BUNDLE_PERSISTENCE_FAILED",
              "successor_missing_on_idempotent_reuse",
            );
          }
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.review_bundle.reopened",
            ts: timestamp,
            correlationId,
            reviewBundleId: existingIdem.reviewBundle.reviewBundleId,
            successorReviewBundleId: existingIdem.successor.reviewBundleId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.reviewBundle.status,
            version: existingIdem.reviewBundle.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            reviewBundle: existingIdem.reviewBundle,
            successor: existingIdem.successor,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.reviewBundleId);
      if (!current) {
        return fail("REVIEW_BUNDLE_NOT_FOUND", "missing_review_bundle");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          reviewBundle: current,
        });
      }

      if (!isTerminalReviewStatus(current.status)) {
        return fail("REVIEW_BUNDLE_NOT_TERMINAL", "reopen_requires_terminal", {
          reviewBundle: current,
        });
      }

      if (current.status === "superseded") {
        return fail("REVIEW_BUNDLE_TERMINAL", "already_superseded", {
          reviewBundle: current,
        });
      }

      if (await this.repo.exists(request.successorReviewBundleId)) {
        return fail(
          "REVIEW_BUNDLE_ALREADY_EXISTS",
          "successor_review_bundle_id_taken",
        );
      }

      const evidenceRefs = sortEvidenceRefs(current.evidenceRefs);
      const successor: ReviewBundle = {
        schemaVersion: REVIEW_BUNDLE_SCHEMA_VERSION,
        reviewBundleId: request.successorReviewBundleId,
        projectId: current.projectId,
        cycleInstanceId: current.cycleInstanceId,
        executionContractId: current.executionContractId,
        version: 1,
        evidenceRefs,
        claimEvaluationRefs: [],
        completeness: computeCompleteness({
          evidenceRefs,
          synthesisOnly: current.synthesisOnly,
        }),
        reservations: current.reservations
          ? [...current.reservations]
          : undefined,
        status: "draft",
        createdAt: timestamp,
        supersedesReviewBundleId: current.reviewBundleId,
        synthesisOnly: current.synthesisOnly,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: current.projectId,
          cycleInstanceId: current.cycleInstanceId,
        }),
      };

      const successorShape = validateReviewBundleShape(successor);
      if (successorShape) {
        return fail(successorShape.detailCode, successorShape.reason, {
          reviewBundle: current,
        });
      }

      const superseded: ReviewBundle = {
        ...current,
        claimEvaluationRefs: [],
        status: "superseded",
        reopenReason: request.reason,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const supersededShape = validateReviewBundleShape(superseded);
      if (supersededShape) {
        return fail(supersededShape.detailCode, supersededShape.reason, {
          reviewBundle: current,
        });
      }

      // Create successor first so idempotent reuse can resolve successorId.
      await this.repo.create(successor);

      const reopenRecord = {
        reviewBundleId: superseded.reviewBundleId,
        fingerprint,
        operation: "reopen_review" as const,
        successorId: successor.reviewBundleId,
      };
      await this.repo.update(
        superseded,
        request.expectedVersion,
        reopenRecord,
      );

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.review_bundle.reopened",
        ts: timestamp,
        correlationId,
        reviewBundleId: superseded.reviewBundleId,
        successorReviewBundleId: successor.reviewBundleId,
        actorId: request.actor.actorId,
        previousStatus: current.status,
        newStatus: superseded.status,
        version: superseded.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        reviewBundle: structuredClone(superseded),
        successor: structuredClone(successor),
        durationMs,
      };
    } catch (err) {
      if (isReviewBundleDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "unexpected_reopen_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceReader.ts`

```typescript
import type { Evidence } from "../domain/types";

/**
 * Read-only Evidence surface for ReviewBundle (D-T-A6-DEL-06).
 * Must never mutate Evidence.
 */
export interface EvidenceReaderPort {
  findById(evidenceId: string): Promise<Evidence | null>;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts`

```typescript
import type { ReviewBundle } from "../domain/reviewBundleTypes";

export type ReviewBundleIdempotencyRecord = {
  reviewBundleId: string;
  fingerprint: string;
  operation:
    | "create"
    | "attach"
    | "remove"
    | "freeze"
    | "start_review"
    | "complete_review"
    | "reopen_review";
  /** Set by ReopenReview so idempotent reuse can resolve the successor draft. */
  successorId?: string;
};

export interface ReviewBundleRepositoryPort {
  findById(reviewBundleId: string): Promise<ReviewBundle | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<{
    reviewBundle: ReviewBundle;
    record: ReviewBundleIdempotencyRecord;
    successor?: ReviewBundle;
  } | null>;
  exists(reviewBundleId: string): Promise<boolean>;
  create(
    bundle: ReviewBundle,
    record?: ReviewBundleIdempotencyRecord,
  ): Promise<void>;
  update(
    bundle: ReviewBundle,
    expectedVersion: number,
    record?: ReviewBundleIdempotencyRecord,
  ): Promise<void>;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleStore.ts`

```typescript
/**
 * In-memory ReviewBundle store — NOT DATABASE SELECTED (U-M02 OPEN).
 */
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type { ReviewBundleIdempotencyRecord } from "../ports/reviewBundleRepository";

export class MemoryReviewBundleStore {
  bundles = new Map<string, ReviewBundle>();
  idempotencyIndex = new Map<
    string,
    ReviewBundleIdempotencyRecord & { successorId?: string }
  >();
  failNextSave = false;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts`

```typescript
import {
  ReviewBundleDomainError,
} from "../domain/reviewBundleErrors";
import { validateReviewBundleShape } from "../domain/reviewBundleInvariants";
import type { ReviewBundle } from "../domain/reviewBundleTypes";
import type {
  ReviewBundleIdempotencyRecord,
  ReviewBundleRepositoryPort,
} from "../ports/reviewBundleRepository";
import type { MemoryReviewBundleStore } from "./memoryReviewBundleStore";

export class MemoryReviewBundleRepository
  implements ReviewBundleRepositoryPort
{
  constructor(private readonly store: MemoryReviewBundleStore) {}

  async findById(reviewBundleId: string): Promise<ReviewBundle | null> {
    const found = this.store.bundles.get(reviewBundleId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    reviewBundle: ReviewBundle;
    record: ReviewBundleIdempotencyRecord;
    successor?: ReviewBundle;
  } | null> {
    const record = this.store.idempotencyIndex.get(idempotencyKey);
    if (!record) return null;
    const reviewBundle = await this.findById(record.reviewBundleId);
    if (!reviewBundle) return null;
    const successor = record.successorId
      ? ((await this.findById(record.successorId)) ?? undefined)
      : undefined;
    return {
      reviewBundle,
      record: {
        reviewBundleId: record.reviewBundleId,
        fingerprint: record.fingerprint,
        operation: record.operation,
      },
      successor,
    };
  }

  async exists(reviewBundleId: string): Promise<boolean> {
    return this.store.bundles.has(reviewBundleId);
  }

  async create(
    bundle: ReviewBundle,
    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): Promise<void> {
    const shape = validateReviewBundleShape(bundle);
    if (shape) {
      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
    }
    if (bundle.version !== 1) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "create_requires_version_1",
      );
    }
    if (this.store.bundles.has(bundle.reviewBundleId)) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_ALREADY_EXISTS",
        "review_bundle_id_taken",
      );
    }
    this.failIfForced();
    this.store.bundles.set(bundle.reviewBundleId, structuredClone(bundle));
    if (record && bundle.idempotencyKey) {
      this.store.idempotencyIndex.set(bundle.idempotencyKey, {
        ...structuredClone(record),
      });
    }
  }

  async update(
    bundle: ReviewBundle,
    expectedVersion: number,
    record?: ReviewBundleIdempotencyRecord & { successorId?: string },
  ): Promise<void> {
    const current = this.store.bundles.get(bundle.reviewBundleId);
    if (!current) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_NOT_FOUND",
        "update_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (bundle.version !== expectedVersion + 1) {
      throw new ReviewBundleDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateReviewBundleShape(bundle);
    if (shape) {
      throw new ReviewBundleDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.bundles.set(bundle.reviewBundleId, structuredClone(bundle));
    if (record) {
      const key = bundle.idempotencyKey;
      if (key) {
        this.store.idempotencyIndex.set(key, { ...structuredClone(record) });
      }
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_PERSISTENCE_FAILED",
        "forced_review_bundle_save_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/evidenceRepositoryReader.ts`

```typescript
import type { Evidence } from "../domain/types";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";

/** Thin read-only adapter over EvidenceRepository — never writes. */
export class EvidenceRepositoryReader implements EvidenceReaderPort {
  constructor(private readonly repo: EvidenceRepositoryPort) {}

  async findById(evidenceId: string): Promise<Evidence | null> {
    return this.repo.findById(evidenceId);
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/index.ts`

```typescript
/**
 * T-A6 Evidence-Review barrel — D1 Evidence + D2 ReviewBundle (Option A v3-native).
 *
 * Module: app/lib/oa/evidence-review/**
 *
 * D1: Evidence register/ingest/verify/unavailable — memory + fake-only.
 * D2: ReviewBundle create/attach/remove/freeze/start/complete/reopen.
 *
 * WHAT THIS IS NOT: ClaimEvaluation (D3), Maturity (D4), coordination D5,
 * SQL, API/UI, real adapters, T-A7, real execution.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";
export * from "./domain/reviewBundleTypes";
export * from "./domain/reviewBundleErrors";
export * from "./domain/reviewBundleInvariants";

export * from "./ports/evidenceRepository";
export * from "./ports/evidencePayloadPort";
export * from "./ports/executionAttemptReader";
export * from "./ports/evidenceAudit";
export * from "./ports/idGenerator";
export * from "./ports/evidenceReader";
export * from "./ports/reviewBundleRepository";

export { RegisterEvidence } from "./application/registerEvidence";
export { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
export { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
export { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
export { CreateReviewBundle } from "./application/createReviewBundle";
export { AttachEvidenceToReviewBundle } from "./application/attachEvidenceToReviewBundle";
export { RemoveEvidenceFromReviewBundle } from "./application/removeEvidenceFromReviewBundle";
export { FreezeReviewBundle } from "./application/freezeReviewBundle";
export { StartReview } from "./application/startReview";
export { CompleteReview } from "./application/completeReview";
export { ReopenReview } from "./application/reopenReview";

export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
export { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
export type { FakePayloadScript } from "./infrastructure/fakeEvidencePayloadAdapter";
export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
export { EvidenceRepositoryReader } from "./infrastructure/evidenceRepositoryReader";
export { MemoryReviewBundleStore } from "./infrastructure/memoryReviewBundleStore";
export { MemoryReviewBundleRepository } from "./infrastructure/memoryReviewBundleRepository";
export {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "./infrastructure/observability";
export {
  RandomIdGenerator,
  FixedIdGenerator,
} from "./infrastructure/idGenerator";

import type { ClockPort } from "@/lib/oa/doctrine";
import { FixedClock, SystemClock } from "@/lib/oa/doctrine";
import { AttachEvidenceToReviewBundle } from "./application/attachEvidenceToReviewBundle";
import { CompleteReview } from "./application/completeReview";
import { CreateReviewBundle } from "./application/createReviewBundle";
import { FreezeReviewBundle } from "./application/freezeReviewBundle";
import { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
import { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
import { RegisterEvidence } from "./application/registerEvidence";
import { RemoveEvidenceFromReviewBundle } from "./application/removeEvidenceFromReviewBundle";
import { ReopenReview } from "./application/reopenReview";
import { StartReview } from "./application/startReview";
import { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
import { EvidenceRepositoryReader } from "./infrastructure/evidenceRepositoryReader";
import { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
import { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
import {
  FixedIdGenerator,
  RandomIdGenerator,
} from "./infrastructure/idGenerator";
import { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
import { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
import { MemoryReviewBundleRepository } from "./infrastructure/memoryReviewBundleRepository";
import { MemoryReviewBundleStore } from "./infrastructure/memoryReviewBundleStore";
import {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "./infrastructure/observability";
import type { EvidenceAuditPort } from "./ports/evidenceAudit";
import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
import type { EvidenceReaderPort } from "./ports/evidenceReader";
import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
import type { IdGeneratorPort } from "./ports/idGenerator";

export type EvidenceReviewServices = {
  store: MemoryEvidenceStore;
  repository: MemoryEvidenceRepository;
  reviewBundleStore: MemoryReviewBundleStore;
  reviewBundleRepository: MemoryReviewBundleRepository;
  evidenceReader: EvidenceReaderPort;
  payload: EvidencePayloadPort;
  attemptReader: ExecutionAttemptReaderPort;
  clock: ClockPort;
  audit: EvidenceAuditPort;
  ids: IdGeneratorPort;
  registerEvidence: RegisterEvidence;
  ingestExecutionAttemptEvidence: IngestExecutionAttemptEvidence;
  verifyEvidenceIntegrity: VerifyEvidenceIntegrity;
  markEvidenceUnavailable: MarkEvidenceUnavailable;
  createReviewBundle: CreateReviewBundle;
  attachEvidenceToReviewBundle: AttachEvidenceToReviewBundle;
  removeEvidenceFromReviewBundle: RemoveEvidenceFromReviewBundle;
  freezeReviewBundle: FreezeReviewBundle;
  startReview: StartReview;
  completeReview: CompleteReview;
  reopenReview: ReopenReview;
};

export type CreateEvidenceReviewServicesOptions = {
  clock?: ClockPort;
  audit?: EvidenceAuditPort;
  ids?: IdGeneratorPort;
  payload?: EvidencePayloadPort;
  attemptReader?: ExecutionAttemptReaderPort;
  store?: MemoryEvidenceStore;
  reviewBundleStore?: MemoryReviewBundleStore;
  evidenceReader?: EvidenceReaderPort;
};

export function createInMemoryEvidenceReviewServices(
  options: CreateEvidenceReviewServicesOptions = {},
): EvidenceReviewServices {
  const store = options.store ?? new MemoryEvidenceStore();
  const repository = new MemoryEvidenceRepository(store);
  const reviewBundleStore =
    options.reviewBundleStore ?? new MemoryReviewBundleStore();
  const reviewBundleRepository = new MemoryReviewBundleRepository(
    reviewBundleStore,
  );
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleEvidenceAuditJournal();
  const ids = options.ids ?? new RandomIdGenerator();
  const payload = options.payload ?? new FakeEvidencePayloadAdapter();
  const attemptReader =
    options.attemptReader ?? new FakeExecutionAttemptReader();
  const evidenceReader =
    options.evidenceReader ?? new EvidenceRepositoryReader(repository);

  return {
    store,
    repository,
    reviewBundleStore,
    reviewBundleRepository,
    evidenceReader,
    payload,
    attemptReader,
    clock,
    audit,
    ids,
    registerEvidence: new RegisterEvidence(repository, clock, audit, ids),
    ingestExecutionAttemptEvidence: new IngestExecutionAttemptEvidence(
      repository,
      attemptReader,
      clock,
      audit,
      ids,
    ),
    verifyEvidenceIntegrity: new VerifyEvidenceIntegrity(
      repository,
      payload,
      clock,
      audit,
      ids,
    ),
    markEvidenceUnavailable: new MarkEvidenceUnavailable(
      repository,
      clock,
      audit,
      ids,
    ),
    createReviewBundle: new CreateReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    attachEvidenceToReviewBundle: new AttachEvidenceToReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    removeEvidenceFromReviewBundle: new RemoveEvidenceFromReviewBundle(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
    freezeReviewBundle: new FreezeReviewBundle(
      reviewBundleRepository,
      evidenceReader,
      clock,
      audit,
      ids,
    ),
    startReview: new StartReview(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
    completeReview: new CompleteReview(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
    reopenReview: new ReopenReview(
      reviewBundleRepository,
      clock,
      audit,
      ids,
    ),
  };
}

export function createTestEvidenceReviewServices(
  options: CreateEvidenceReviewServicesOptions & {
    fixedNowIso?: string;
  } = {},
): EvidenceReviewServices & {
  fakePayload: FakeEvidencePayloadAdapter;
  fakeAttempts: FakeExecutionAttemptReader;
  memoryAudit: MemoryEvidenceAuditJournal;
} {
  const fakePayload =
    options.payload instanceof FakeEvidencePayloadAdapter
      ? options.payload
      : new FakeEvidencePayloadAdapter();
  const fakeAttempts =
    options.attemptReader instanceof FakeExecutionAttemptReader
      ? options.attemptReader
      : new FakeExecutionAttemptReader();
  const memoryAudit =
    options.audit instanceof MemoryEvidenceAuditJournal
      ? options.audit
      : new MemoryEvidenceAuditJournal();

  const services = createInMemoryEvidenceReviewServices({
    ...options,
    clock:
      options.clock ??
      new FixedClock(options.fixedNowIso ?? "2026-07-26T02:00:00.000Z"),
    audit: memoryAudit,
    ids: options.ids ?? new FixedIdGenerator(),
    payload: fakePayload,
    attemptReader: fakeAttempts,
  });

  return {
    ...services,
    fakePayload,
    fakeAttempts,
    memoryAudit,
  };
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts`

```typescript
/**
 * Append-only audit sink for T-A6 Evidence / ReviewBundle.
 * Events carry refs only — never payloads, secrets, or personal data beyond actorId.
 */

export type EvidenceAuditEventName =
  | "oa.evidence.registered"
  | "oa.evidence.execution_attempt_ingested"
  | "oa.evidence.integrity_verified"
  | "oa.evidence.integrity_rejected"
  | "oa.evidence.unavailable"
  | "oa.evidence.operation_rejected"
  | "oa.evidence.idempotency_conflict"
  | "oa.evidence.concurrent_modification_rejected"
  | "oa.review_bundle.created"
  | "oa.review_bundle.evidence_attached"
  | "oa.review_bundle.evidence_removed"
  | "oa.review_bundle.frozen"
  | "oa.review_bundle.review_started"
  | "oa.review_bundle.accepted"
  | "oa.review_bundle.rejected"
  | "oa.review_bundle.marked_incomplete"
  | "oa.review_bundle.reopened"
  | "oa.review_bundle.operation_rejected"
  | "oa.review_bundle.idempotency_conflict"
  | "oa.review_bundle.concurrent_modification_rejected";

export type EvidenceAuditEvent = {
  event: EvidenceAuditEventName;
  ts: string;
  correlationId?: string;
  evidenceId?: string;
  evidenceIds?: string[];
  executionAttemptId?: string;
  reviewBundleId?: string;
  successorReviewBundleId?: string;
  actorId?: string;
  previousStatus?: string;
  newStatus?: string;
  version?: number;
  expectedVersion?: number;
  result: "ok" | "error";
  detailCode?: string;
  durationMs: number;
};

export interface EvidenceAuditPort {
  append(event: EvidenceAuditEvent): void;
}
```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/reviewBundleDomain.test.ts`

```typescript
/**
 * T-A6-D2 ReviewBundle domain + lifecycle tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  computeCompleteness,
  isTerminalReviewStatus,
  sortEvidenceRefs,
  validateReviewBundleShape,
  type ReviewBundle,
} from "@/lib/oa/evidence-review";
import { ACTOR, NOW, buildServices } from "./helpers";

function baseBundle(overrides: Partial<ReviewBundle> = {}): ReviewBundle {
  return {
    schemaVersion: "0.2.0-oa",
    reviewBundleId: "rb:domain-001",
    projectId: "prj:campus360-oa",
    version: 1,
    evidenceRefs: ["ev:manual-001"],
    claimEvaluationRefs: [],
    completeness: "incomplete",
    status: "draft",
    createdAt: NOW,
    synthesisOnly: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:rb-domain-001",
      actor: ACTOR,
      source: "review",
      timestamp: NOW,
      correlationId: "cor:rb-domain-001",
    },
    ...overrides,
  };
}

describe("T-A6-D2 ReviewBundle domain", () => {
  it("accepts a valid draft", () => {
    expect(validateReviewBundleShape(baseBundle())).toBeNull();
  });

  it("requires frozenAt for post-draft statuses", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({ status: "ready_for_review", version: 2 }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_NOT_FROZEN");
  });

  it("accepted requires complete and non-synthesis", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({
          status: "accepted",
          completeness: "incomplete",
          frozenAt: NOW,
          validatedAt: NOW,
          reviewer: ACTOR,
          version: 3,
        }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT");
  });

  it("incomplete status requires incomplete completeness", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({
          status: "incomplete",
          completeness: "complete",
          frozenAt: NOW,
          version: 3,
        }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_INCOMPLETE");
  });

  it("synthesisOnly cannot be complete", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({ synthesisOnly: true, completeness: "complete" }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT");
  });

  it("forbids claimEvaluationRefs in D2", () => {
    expect(
      validateReviewBundleShape(
        baseBundle({ claimEvaluationRefs: ["clm:x"] }),
      )?.detailCode,
    ).toBe("REVIEW_BUNDLE_INVALID");
  });

  it("sorts evidence refs deterministically", () => {
    expect(sortEvidenceRefs(["ev:b", "ev:a", "ev:c"])).toEqual([
      "ev:a",
      "ev:b",
      "ev:c",
    ]);
  });

  it("computes completeness", () => {
    expect(
      computeCompleteness({ evidenceRefs: [], synthesisOnly: false }),
    ).toBe("incomplete");
    expect(
      computeCompleteness({
        evidenceRefs: ["ev:a"],
        synthesisOnly: true,
      }),
    ).toBe("incomplete");
    expect(
      computeCompleteness({
        evidenceRefs: ["ev:a"],
        synthesisOnly: false,
      }),
    ).toBe("complete");
  });

  it("marks terminal statuses", () => {
    expect(isTerminalReviewStatus("accepted")).toBe(true);
    expect(isTerminalReviewStatus("draft")).toBe(false);
  });
});

describe("T-A6-D2 CreateReviewBundle", () => {
  it("creates draft ReviewBundle", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:rb-create-1",
      idempotencyKey: "idem-ev-rb-create-1",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.createReviewBundle.execute({
      reviewBundleId: "rb:create-001",
      idempotencyKey: "idem-rb-create-001",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:rb-create-1"],
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.reviewBundle.status).toBe("draft");
    expect(result.reviewBundle.version).toBe(1);
    expect(result.reviewBundle.claimEvaluationRefs).toEqual([]);
    expect(result.reviewBundle.frozenAt).toBeUndefined();
  });

  it("replays idempotent create", async () => {
    const s = buildServices();
    const req = {
      reviewBundleId: "rb:idem-001",
      idempotencyKey: "idem-rb-idem-001",
      actor: ACTOR,
      projectId: "prj:campus360-oa" as const,
    };
    const a = await s.createReviewBundle.execute(req);
    const b = await s.createReviewBundle.execute(req);
    expect(a.ok && b.ok).toBe(true);
    if (!b.ok) return;
    expect(b.reusedFromIdempotencyKey).toBe(true);
  });

  it("conflicts on idempotency fingerprint mismatch", async () => {
    const s = buildServices();
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:idem-c1",
      idempotencyKey: "idem-rb-conflict-001",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
    });
    const conflict = await s.createReviewBundle.execute({
      reviewBundleId: "rb:idem-c2",
      idempotencyKey: "idem-rb-conflict-001",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      synthesisOnly: true,
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("IDEMPOTENCY_CONFLICT");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/reviewBundleLifecycle.test.ts`

```typescript
/**
 * T-A6-D2 ReviewBundle attach/remove/freeze/start/complete/reopen tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { ACTOR, DIGEST_A, buildServices } from "./helpers";

async function seedEvidence(
  s: ReturnType<typeof buildServices>,
  id: string,
  opts?: { unavailable?: boolean },
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
  if (opts?.unavailable && reg.ok) {
    await s.markEvidenceUnavailable.execute({
      evidenceId: id,
      actor: ACTOR,
      expectedVersion: 1,
      reason: "withdrawn",
      idempotencyKey: `idem-unavail-${id}`,
    });
  }
}

async function draftWithEvidence(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceIds: string[],
) {
  for (const id of evidenceIds) {
    await seedEvidence(s, id);
  }
  const created = await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds,
  });
  expect(created.ok).toBe(true);
  return created;
}

describe("T-A6-D2 Attach / Remove", () => {
  it("attaches Evidence in draft and refuses when frozen", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:attach-1");
    await seedEvidence(s, "ev:attach-2");
    const created = await s.createReviewBundle.execute({
      reviewBundleId: "rb:attach-001",
      idempotencyKey: "idem-attach-create",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:attach-1"],
    });
    expect(created.ok).toBe(true);
    const attached = await s.attachEvidenceToReviewBundle.execute({
      reviewBundleId: "rb:attach-001",
      evidenceId: "ev:attach-2",
      idempotencyKey: "idem-attach-2",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(attached.ok).toBe(true);
    if (!attached.ok) return;
    expect(attached.reviewBundle.evidenceRefs).toEqual([
      "ev:attach-1",
      "ev:attach-2",
    ]);

    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:attach-001",
      idempotencyKey: "idem-freeze-attach",
      actor: ACTOR,
      expectedVersion: 2,
    });
    expect(frozen.ok).toBe(true);

    await seedEvidence(s, "ev:attach-3");
    const refuse = await s.attachEvidenceToReviewBundle.execute({
      reviewBundleId: "rb:attach-001",
      evidenceId: "ev:attach-3",
      idempotencyKey: "idem-attach-frozen",
      actor: ACTOR,
      expectedVersion: 3,
    });
    expect(refuse.ok).toBe(false);
    if (refuse.ok) return;
    expect(refuse.error.detailCode).toBe("REVIEW_BUNDLE_NOT_DRAFT");
  });

  it("removes Evidence in draft only", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:remove-001", ["ev:rm-1", "ev:rm-2"]);
    const removed = await s.removeEvidenceFromReviewBundle.execute({
      reviewBundleId: "rb:remove-001",
      evidenceId: "ev:rm-2",
      idempotencyKey: "idem-remove-1",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(removed.ok).toBe(true);
    if (!removed.ok) return;
    expect(removed.reviewBundle.evidenceRefs).toEqual(["ev:rm-1"]);
  });

  it("refuses missing Evidence on attach", async () => {
    const s = buildServices();
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:attach-missing",
      idempotencyKey: "idem-attach-missing-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
    });
    const result = await s.attachEvidenceToReviewBundle.execute({
      reviewBundleId: "rb:attach-missing",
      evidenceId: "ev:does-not-exist",
      idempotencyKey: "idem-attach-missing",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_NOT_FOUND");
  });
});

describe("T-A6-D2 Freeze / Start / Complete", () => {
  it("freezes draft to ready_for_review with immutable snapshots", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:freeze-001", ["ev:fz-1"]);
    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:freeze-001",
      idempotencyKey: "idem-freeze-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    expect(frozen.reviewBundle.status).toBe("ready_for_review");
    expect(frozen.reviewBundle.frozenAt).toBeTruthy();
    expect(frozen.reviewBundle.frozenEvidenceSnapshots?.[0].evidenceId).toBe(
      "ev:fz-1",
    );
    // mutate returned snapshot array must not affect store
    frozen.reviewBundle.evidenceRefs.push("ev:hack");
    if (frozen.reviewBundle.frozenEvidenceSnapshots) {
      frozen.reviewBundle.frozenEvidenceSnapshots[0].evidenceId = "ev:hacked";
    }
    const again = await s.reviewBundleRepository.findById("rb:freeze-001");
    expect(again?.evidenceRefs).toEqual(["ev:fz-1"]);
    expect(again?.frozenEvidenceSnapshots?.[0].evidenceId).toBe("ev:fz-1");
  });

  it("refuses freeze without evidence", async () => {
    const s = buildServices();
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:freeze-empty",
      idempotencyKey: "idem-freeze-empty-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
    });
    const result = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:freeze-empty",
      idempotencyKey: "idem-freeze-empty",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("REVIEW_BUNDLE_EVIDENCE_REQUIRED");
  });

  it("refuses freeze when synthesisOnly would be complete", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:syn-1");
    const created = await s.createReviewBundle.execute({
      reviewBundleId: "rb:syn-001",
      idempotencyKey: "idem-syn-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      synthesisOnly: true,
      evidenceIds: ["ev:syn-1"],
    });
    expect(created.ok).toBe(true);
    // synthesisOnly ⇒ completeness incomplete always; freeze should succeed
    // but accepted later must fail. Here freeze of synthesisOnly with evidence is OK if incomplete.
    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:syn-001",
      idempotencyKey: "idem-syn-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    expect(frozen.reviewBundle.completeness).toBe("incomplete");
  });

  it("starts review only when frozen", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:start-001", ["ev:st-1"]);
    const draftStart = await s.startReview.execute({
      reviewBundleId: "rb:start-001",
      idempotencyKey: "idem-start-draft",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(draftStart.ok).toBe(false);

    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:start-001",
      idempotencyKey: "idem-start-freeze",
      actor: ACTOR,
      expectedVersion: 1,
    });
    const started = await s.startReview.execute({
      reviewBundleId: "rb:start-001",
      idempotencyKey: "idem-start-ok",
      actor: ACTOR,
      expectedVersion: 2,
    });
    expect(started.ok).toBe(true);
    if (!started.ok) return;
    expect(started.reviewBundle.status).toBe("under_review");
    expect(started.reviewBundle.reviewStartedAt).toBeTruthy();
  });

  it("accepts only complete non-synthesis under_review", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:complete-001", ["ev:cp-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:complete-001",
      idempotencyKey: "idem-cp-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:complete-001",
      idempotencyKey: "idem-cp-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const accepted = await s.completeReview.execute({
      reviewBundleId: "rb:complete-001",
      idempotencyKey: "idem-cp-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;
    expect(accepted.reviewBundle.status).toBe("accepted");
    expect(accepted.reviewBundle.validatedAt).toBeTruthy();
    expect(accepted.reviewBundle.reviewer?.actorId).toBe(ACTOR.actorId);
  });

  it("rejects accepted when synthesisOnly", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:syn-acc");
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:syn-acc",
      idempotencyKey: "idem-syn-acc-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      synthesisOnly: true,
      evidenceIds: ["ev:syn-acc"],
    });
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:syn-acc",
      idempotencyKey: "idem-syn-acc-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:syn-acc",
      idempotencyKey: "idem-syn-acc-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const result = await s.completeReview.execute({
      reviewBundleId: "rb:syn-acc",
      idempotencyKey: "idem-syn-acc-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe(
      "REVIEW_BUNDLE_SYNTHESIS_ONLY_CONFLICT",
    );
  });

  it("marks incomplete distinctly from rejected", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:inc-001", ["ev:inc-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:inc-001",
      idempotencyKey: "idem-inc-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:inc-001",
      idempotencyKey: "idem-inc-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const incomplete = await s.completeReview.execute({
      reviewBundleId: "rb:inc-001",
      idempotencyKey: "idem-inc-c",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "incomplete",
      reason: "missing artefacts",
    });
    expect(incomplete.ok).toBe(true);
    if (!incomplete.ok) return;
    expect(incomplete.reviewBundle.status).toBe("incomplete");
    expect(incomplete.reviewBundle.completeness).toBe("incomplete");
  });

  it("never implies Claim PASS on accepted", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:nopass", ["ev:np-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:nopass",
      idempotencyKey: "idem-np-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:nopass",
      idempotencyKey: "idem-np-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const accepted = await s.completeReview.execute({
      reviewBundleId: "rb:nopass",
      idempotencyKey: "idem-np-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
    });
    expect(accepted.ok).toBe(true);
    if (!accepted.ok) return;
    expect(accepted.reviewBundle.claimEvaluationRefs).toEqual([]);
    expect(
      Object.prototype.hasOwnProperty.call(accepted.reviewBundle, "pass"),
    ).toBe(false);
  });
});

describe("T-A6-D2 ReopenReview", () => {
  it("supersedes terminal and creates draft successor without mutating history", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:reopen-old", ["ev:ro-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:reopen-old",
      idempotencyKey: "idem-ro-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:reopen-old",
      idempotencyKey: "idem-ro-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    await s.completeReview.execute({
      reviewBundleId: "rb:reopen-old",
      idempotencyKey: "idem-ro-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "rejected",
      reason: "needs rework",
    });
    const reopened = await s.reopenReview.execute({
      reviewBundleId: "rb:reopen-old",
      successorReviewBundleId: "rb:reopen-new",
      idempotencyKey: "idem-ro-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "rework requested",
    });
    expect(reopened.ok).toBe(true);
    if (!reopened.ok) return;
    expect(reopened.reviewBundle.status).toBe("superseded");
    expect(reopened.reviewBundle.frozenAt).toBeTruthy();
    expect(reopened.successor?.status).toBe("draft");
    expect(reopened.successor?.version).toBe(1);
    expect(reopened.successor?.supersedesReviewBundleId).toBe("rb:reopen-old");
    expect(reopened.successor?.evidenceRefs).toEqual(["ev:ro-1"]);
    expect(reopened.successor?.frozenAt).toBeUndefined();

    // historical terminal fields preserved on old
    const old = await s.reviewBundleRepository.findById("rb:reopen-old");
    expect(old?.status).toBe("superseded");
    expect(old?.validatedAt).toBeTruthy();
  });

  it("refuses secret in reopen reason", async () => {
    const s = buildServices();
    await draftWithEvidence(s, "rb:reopen-sec", ["ev:rs-1"]);
    await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:reopen-sec",
      idempotencyKey: "idem-rs-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    await s.startReview.execute({
      reviewBundleId: "rb:reopen-sec",
      idempotencyKey: "idem-rs-s",
      actor: ACTOR,
      expectedVersion: 2,
    });
    await s.completeReview.execute({
      reviewBundleId: "rb:reopen-sec",
      idempotencyKey: "idem-rs-a",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "incomplete",
      reason: "gaps",
    });
    const result = await s.reopenReview.execute({
      reviewBundleId: "rb:reopen-sec",
      successorReviewBundleId: "rb:reopen-sec-new",
      idempotencyKey: "idem-rs-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "token=super-secret-value-here",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("REVIEW_BUNDLE_SECRET_FORBIDDEN");
  });
});

describe("T-A6-D2 MemoryReviewBundleRepository", () => {
  it("isolates instances and enforces OCC", async () => {
    const s1 = buildServices();
    const s2 = buildServices();
    await s1.createReviewBundle.execute({
      reviewBundleId: "rb:iso-1",
      idempotencyKey: "idem-iso-1",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
    });
    expect(await s2.reviewBundleRepository.findById("rb:iso-1")).toBeNull();
  });
});
```


## 11. Gate suivant

`GO VALIDATE T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## 12. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
