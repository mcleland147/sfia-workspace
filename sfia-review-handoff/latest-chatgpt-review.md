# SFIA Review Pack — FULL — T-A6 D4 MaturityAssessment Implementation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 11:01:21 CEST (+0200) |
| **Cycle** | Delivery — implémentation / T-A6-D4 MaturityAssessment |
| **Profil** | Critical |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `f935bc00ab2cac314f0ef09db939ef53d7ae05eb` |
| **HEAD final** | `357fe58fdad60859e2410be3d1e553b39a157308` |
| **Commits** | `a662c0d` feat D4 · `3d7ec5d` record HEAD · `357fe58` point HEAD final |
| **Push projet / PR / merge** | **NON** |
| **D5** | **NON** |
| **Modeled / T-A3–T-A5 / packages** | **NON** modifiés |
| **D1–D3 régressés** | **NON** (119 PASS D1–D4) |
| **SQL / API / UI / T-A7 / adapter réel / exécution réelle** | **ABSENTS** |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — branche exacte · HEAD initial `f935bc00ab2cac314f0ef09db939ef53d7ae05eb` · tip `357fe58fdad60859e2410be3d1e553b39a157308` · merge-base = origin/main `b25c20e6…` · staged vide · untracked `.tmp-sfia-review/` · aucune op Git · aucune remote/PR T-A6 · handoff source blob `0b12a48c…` relu.

### Status

```
## framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
?? .tmp-sfia-review/
```

### Untracked

```
.tmp-sfia-review/14-full.md
.tmp-sfia-review/chatgpt-review.md
.tmp-sfia-review/created.txt
.tmp-sfia-review/d3-validation-fix.diff
.tmp-sfia-review/handoff-blob.txt
.tmp-sfia-review/modified.txt
.tmp-sfia-review/now.txt
.tmp-sfia-review/pr-body.md
.tmp-sfia-review/readme-full.md
.tmp-sfia-review/status.txt
.tmp-sfia-review/untracked.txt
.tmp-sfia-review/worktrees.txt
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
HEAD 357fe58fdad60859e2410be3d1e553b39a157308
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
HEAD 00158a9ab61cad347b1489ebc79b8a3548052d9c
branch refs/heads/sfia/review-handoff
```

### Handoff source

- blob : `0b12a48c6e88ffcca0440b8a1dca611f28c6663b`
- verdict : `SFIA STUDIO V3-NATIVE OPTION A T-A6 D3 CLAIM EVALUATION VALIDATED AFTER CORRECTION — D4 REQUIRES MORRIS GO`

### CKC

`03-architecture-technique.md` candidate · `executionAuthority=false`

### Template

`prompts/templates/sfia-cycle-execution-template.md`

---

## 2. Fichiers créés / modifiés

### Feat commit stat

```
commit a662c0ddc3a5b752ccc0f29fe66c2e2990e83685
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 11:01:02 2026 +0200

    feat(sfia-studio): implement T-A6 D4 maturity assessment
    
    Add Propose/Confirm/Downgrade MaturityAssessment over exact ClaimEvaluation
    bindings with fail-closed calculation, OCC, and atomic downgrade supersession.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

A	projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentDomain.test.ts
A	projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/application/confirmMaturity.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/application/downgradeMaturity.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/application/maturityCalculation.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/application/proposeMaturity.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentErrors.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentInvariants.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentTypes.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/index.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/claimEvaluationRepositoryReader.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryMaturityAssessmentRepository.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryMaturityAssessmentStore.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationReader.ts
M	projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts
A	projects/sfia-studio/app/lib/oa/evidence-review/ports/maturityAssessmentRepository.ts
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a6-evidence-review-claims-maturity/15-delivery-d4-implementation.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a6-evidence-review-claims-maturity/README.md

```

### Arborescence D4

```
projects/sfia-studio/app/lib/oa/evidence-review/application/confirmMaturity.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/downgradeMaturity.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/maturityCalculation.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/proposeMaturity.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentErrors.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentInvariants.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentTypes.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryMaturityAssessmentRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryMaturityAssessmentStore.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/maturityAssessmentRepository.ts
```

### Supprimés

Aucun.

---

## 3. Contenu complet — 15-delivery-d4-implementation.md

```markdown
# 15 — T-A6-D4 MaturityAssessment Implementation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D4 — MaturityAssessment |
| **Cycle** | Delivery — implémentation (Critical) |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `f935bc00ab2cac314f0ef09db939ef53d7ae05eb` |
| **HEAD final** | `3d7ec5de4361bc0dec3a627203b87c2bde84a6e1` |
| **Horodatage** | 2026-07-26 11:01:00 CEST (+0200) |
| **Handoff source** | blob `0b12a48c6e88ffcca0440b8a1dca611f28c6663b` |
| **Statut** | **T-A6-D4 IMPLEMENTED — NOT VALIDATED** |
| **D1 / D2 / D3** | VALIDATED AFTER CORRECTION |
| **D5** | **NON** |
| **Fake-only / mémoire** | **oui** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`14` · schema MaturityAssessment `0.2.0-oa` · catalogue Propose/Confirm/Downgrade · runtime D1–D3 · T-A3 Authority RO · CKC `03-architecture-technique.md` (candidate, `executionAuthority=false`).

---

## 2. Périmètre D4

### Inclus

- Domaine MaturityAssessment (`mat:`) + OCC runtime
- Commandes modeled : `ProposeMaturity` · `ConfirmMaturity` · `DowngradeMaturity`
- Bindings ClaimEvaluation exacts (id + version) immuables
- Calcul déterministe fail-closed · critères · gaps
- `autoPromoted=false` const
- HARD `blockingReservationRefs` ⇒ status `blocked` / refuse Confirm
- Downgrade explicite par supersession atomique
- MemoryMaturityAssessmentRepository · ClaimEvaluationReader RO · Audit `oa.maturity_assessment.*`

### Hors périmètre

D5 coordination · SQL/API/UI · T-A7 · modification modeled / T-A3–T-A5 · fermeture réserves · Decision Morris · executionAuthority

---

## 3. Architecture

Module inchangé : `app/lib/oa/evidence-review/**`

```
domain/maturityAssessment{Types,Errors,Invariants}.ts
application/{proposeMaturity,confirmMaturity,downgradeMaturity,maturityCalculation}.ts
ports/{maturityAssessmentRepository,claimEvaluationReader}.ts
infrastructure/{memoryMaturityAssessment{Store,Repository},claimEvaluationRepositoryReader}.ts
```

Adaptation D3 non-breaking : reader RO + `isSuperseded` scan mémoire.

---

## 4. Domaine / niveaux / critères

**Niveaux :** DOCUMENTED · VALIDATED · MODELED · IMPLEMENTED · ADOPTED  
**Status :** proposed · confirmed · rejected · superseded · blocked

**Seuils explicites (pas de moyenne) :**

| Niveau | Critère |
|--------|---------|
| DOCUMENTED | ≥1 claim eligible PASS |
| VALIDATED | + confirmation (system_deterministic non_critical ou humain) |
| MODELED | + claimType technique\|maturite_support\|conformite |
| IMPLEMENTED | + criticality critical\|structural confirmée |
| ADOPTED | + structural + confirmationAuthority=morris |

**Éligibilité positive interdite pour :** disputed · waived · superseded · not_pass · Critical/structural non confirmés · mauvaise version · claim absente.

---

## 5. Binding ClaimEvaluation

Chaque assessment conserve `claimEvaluationRefs` + `claimBindings[]` (id, version, status, criticality, confirmation, eligible, reviewBundle id/version). Aucune mutation ClaimEvaluation. Snapshot historique stable.

---

## 6. Commandes

| Commande | Comportement |
|----------|--------------|
| ProposeMaturity | lit claims exactes · calcule · proposed\|blocked · autoPromoted=false · OCC v1 |
| ConfirmMaturity | humain · ≠ system/agent · IMPLEMENTED/ADOPTED ⇒ Morris · pas HARD reserve · self-review refusée |
| DowngradeMaturity | humain · target < source · successor + source superseded atomique · motif sûr |

Aucune gate D5 · aucune Decision · `executionAuthority` inchangé false.

---

## 7. Repository / OCC / idempotence

MemoryMaturityAssessmentRepository · create/update/expectedVersion · createSuccessorAndMarkSuperseded · idempotency index · copies défensives.

---

## 8. Sécurité / audit

Actors/motifs filtrés · audit refs-only · fake-only · U-M02 OPEN.

Événements : proposed · calculated · confirmed · downgraded · superseded · operation_rejected · authority_rejected · idempotency_conflict · concurrent_modification_rejected.

---

## 9. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review D1–D4 | **119 PASS** (105→119, +14 D4) |
| T-A3 / T-A4 / T-A5 | 50 / 61 / 88 PASS |
| Modeled T-A6 | 27 PASS |
| typecheck / lint / build / diff-check | PASS |

---

## 10. Findings

Aucun Critical / Major ouvert à l’implémentation.

Observations : O-D4-1 seuils runtime documentés (modeled ne fixe pas de formule numérique) · O-D4-2 C1–C4 NOT VALIDATED · O-D4-3 D5 absent.

---

## 11. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**  
C1–C4 **RECOMMENDED — NOT VALIDATED**

---

## 12. Anti-claims

Pas D4 VALIDATED · D5 READY · DELIVERY COMPLETE · persistence réelle · T-A7 · R-M01 fermée · C1–C4 validées · exécution réelle · Decision Morris créée.

---

## 13. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`

```

---

## 4. Contenu complet — README T-A6

```markdown
# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Profil** | Critical |
| **Gate D1 validate** | `GO VALIDATE T-A6 DELIVERY D1` (**CONSUMED**) |
| **Gate D2 validate** | `GO VALIDATE T-A6 DELIVERY D2` (**CONSUMED**) |
| **Gate D3 validate** | `GO VALIDATE T-A6 DELIVERY D3` (**CONSUMED**) |
| **Gate D4 implement** | `GO IMPLEMENT T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` |
| **Runtime D1** | **VALIDATED** (après correction) |
| **Runtime D2** | **VALIDATED AFTER CORRECTION** |
| **Runtime D3** | **VALIDATED AFTER CORRECTION** |
| **Runtime D4** | MaturityAssessment — **T-A6-D4 IMPLEMENTED — NOT VALIDATED** |
| **Fake-only / mémoire** | **oui** |
| **Persistence réelle** | **NON** |
| **D5** | **NON** lancé |
| **Push / PR / merge** | **NONE** |
| **Statut pack** | **T-A6-D4 IMPLEMENTED — NOT VALIDATED** |
| **Horodatage D4** | 2026-07-26 11:01:00 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Livrables

1. [README.md](./README.md)
2. [01](./01-framing.md) … [14-delivery-d3-validation.md](./14-delivery-d3-validation.md)
3. [15-delivery-d4-implementation.md](./15-delivery-d4-implementation.md)
4. Runtime : `app/lib/oa/evidence-review/**` (D1–D4)
5. Tests : `app/__tests__/oa/evidence-review/**`

## D4 implémenté

ProposeMaturity / ConfirmMaturity / DowngradeMaturity · bindings ClaimEvaluation exacts · calcul fail-closed · autoPromoted=false · HARD reserves · supersession atomique · 119 tests D1–D4 PASS

## Réserves (OPEN)

B5 · R1 · R-T-A3-1..4 (HARD 1–2) · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

## Anti-claims

Pas D4 VALIDATED / D5 READY / DELIVERY COMPLETE / persistence réelle / T-A7 / R-M01 fermée / C1–C4 validées / exécution réelle

```

---

## 5. Runtime D4 + tests (contenu complet fichiers clés)

### `projects/sfia-studio/app/lib/oa/evidence-review/domain/maturityAssessmentTypes.ts`

```typescript
/**
 * T-A6-D4 MaturityAssessment — domain types (Option A v3-native).
 * Modeled: maturity-assessment.schema.json 0.2.0-oa.
 * Commands: ProposeMaturity · ConfirmMaturity · DowngradeMaturity.
 * Never mutates Evidence, ReviewBundle, or ClaimEvaluation.
 * Maturity ≠ executionAuthority. autoPromoted=false const.
 */
import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";

export type { ActorReference, ProvenanceRecord };

export const MATURITY_ASSESSMENT_SCHEMA_VERSION = "0.2.0-oa" as const;

export type MaturityLevel =
  | "DOCUMENTED"
  | "VALIDATED"
  | "MODELED"
  | "IMPLEMENTED"
  | "ADOPTED";

export type MaturityAssessmentStatus =
  | "proposed"
  | "confirmed"
  | "rejected"
  | "superseded"
  | "blocked";

export type MaturityDimension = {
  dimensionId: string;
  proposedLevel: MaturityLevel;
  confirmedLevel?: MaturityLevel;
  blocked?: boolean;
};

/** Immutable binding of a ClaimEvaluation consumed at calculation time. */
export type MaturityClaimBinding = {
  claimEvaluationId: string;
  claimEvaluationVersion: number;
  claimType: string;
  criticality: string;
  status: string;
  confirmationAuthority?: string;
  confirmedByActorId?: string;
  eligibleForPositive: boolean;
  ineligibilityCode?: MaturityClaimIneligibilityCode;
  reviewBundleId: string;
  reviewBundleVersion: number;
};

export type MaturityClaimIneligibilityCode =
  | "missing"
  | "version_mismatch"
  | "disputed"
  | "waived"
  | "superseded"
  | "not_pass"
  | "confirmation_required"
  | "structural_confirmation_required";

export type MaturityCriterionCode =
  | "has_eligible_pass"
  | "has_confirmed_pass"
  | "has_modeled_support"
  | "has_implemented_support"
  | "has_adopted_morris_support"
  | "no_hard_blocking_reserve";

export type MaturityCriterionResult = {
  code: MaturityCriterionCode;
  satisfied: boolean;
  supportingClaimEvaluationIds: string[];
  detail?: string;
};

export type MaturityGapCode =
  | "no_eligible_claims"
  | "claim_disputed"
  | "claim_waived"
  | "claim_superseded"
  | "claim_not_confirmed"
  | "claim_version_mismatch"
  | "claim_missing"
  | "hard_reserve_blocks_level"
  | "requested_level_unsupported"
  | "insufficient_for_level";

export type MaturityGap = {
  code: MaturityGapCode;
  claimEvaluationId?: string;
  level?: MaturityLevel;
  detail?: string;
};

export type MaturityReviewBundleRef = {
  reviewBundleId: string;
  version: number;
};

export type MaturityAssessment = {
  schemaVersion: typeof MATURITY_ASSESSMENT_SCHEMA_VERSION;
  maturityAssessmentId: string;
  projectId: string;
  subjectRef: string;
  dimensions?: MaturityDimension[];
  proposedLevel: MaturityLevel;
  confirmedLevel?: MaturityLevel;
  claimEvaluationRefs: string[];
  /** Exact versions consumed — runtime immutable bindings (refs-only). */
  claimBindings: MaturityClaimBinding[];
  reviewBundleRefs?: MaturityReviewBundleRef[];
  evidenceRefs?: string[];
  blockingReservationRefs: string[];
  waiverRefs?: string[];
  proposedBy: ActorReference;
  confirmedBy?: ActorReference;
  proposedAt: string;
  confirmedAt?: string;
  status: MaturityAssessmentStatus;
  supersedesMaturityAssessmentId?: string;
  downgradeReason?: string;
  autoPromoted: false;
  provenance: ProvenanceRecord;
  criteriaResults?: MaturityCriterionResult[];
  gaps?: MaturityGap[];
  calculatedAt?: string;
  /** Runtime OCC — monotone. */
  version: number;
  idempotencyKey?: string;
  updatedAt?: string;
};

export type MaturityDetailCode =
  | "MATURITY_ASSESSMENT_INVALID"
  | "MATURITY_ASSESSMENT_NOT_FOUND"
  | "MATURITY_ASSESSMENT_ALREADY_EXISTS"
  | "MATURITY_INVALID_STATE"
  | "MATURITY_ALREADY_CONFIRMED"
  | "MATURITY_SUPERSEDED"
  | "MATURITY_CLAIM_NOT_FOUND"
  | "MATURITY_CLAIM_VERSION_MISMATCH"
  | "MATURITY_CLAIM_NOT_ELIGIBLE"
  | "MATURITY_CLAIM_DISPUTED"
  | "MATURITY_CLAIM_SUPERSEDED"
  | "MATURITY_CLAIM_WAIVED"
  | "MATURITY_CONFIRMATION_REQUIRED"
  | "MATURITY_AUTHORITY_FORBIDDEN"
  | "MATURITY_SELF_REVIEW_FORBIDDEN"
  | "MATURITY_BLOCKED_BY_RESERVATION"
  | "MATURITY_AUTO_PROMOTION_FORBIDDEN"
  | "MATURITY_DOWNGRADE_FORBIDDEN"
  | "MATURITY_DOWNGRADE_REQUIRED"
  | "MATURITY_SECRET_FORBIDDEN"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "MATURITY_PERSISTENCE_FAILED";

export type MaturityModeledErrorCode =
  | "VALIDATION_FAILED"
  | "AUTHORITY_DENIED"
  | "STATE_CONFLICT"
  | "MATURITY_BLOCKED_BY_RESERVATION"
  | "MATURITY_CONFIRMATION_REQUIRED"
  | "MATURITY_AUTO_PROMOTION_FORBIDDEN"
  | "MATURITY_DOWNGRADE_REQUIRED";

export type MaturityStructuredError = {
  schemaVersion: "0.1.0-oa";
  errorCode: MaturityModeledErrorCode;
  detailCode: MaturityDetailCode;
  message: string;
  severity: "error" | "critical";
  recoverable: boolean;
  timestamp: string;
  correlationId?: string;
  maturityAssessmentId?: string;
  claimEvaluationId?: string;
  expectedVersion?: number;
  currentVersion?: number;
};

export type ProposeMaturityRequest = {
  maturityAssessmentId: string;
  idempotencyKey: string;
  actor: ActorReference;
  projectId: string;
  subjectRef: string;
  /** Exact ClaimEvaluation bindings (id + version). */
  claimBindings: Array<{
    claimEvaluationId: string;
    claimEvaluationVersion: number;
  }>;
  requestedLevel: MaturityLevel;
  dimensions?: Array<{ dimensionId: string; proposedLevel: MaturityLevel }>;
  blockingReservationRefs?: string[];
  reviewBundleRefs?: MaturityReviewBundleRef[];
  evidenceRefs?: string[];
  correlationId?: string;
  nowIso?: string;
};

export type ConfirmMaturityRequest = {
  maturityAssessmentId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  authorityEvidenceId?: string;
  correlationId?: string;
  nowIso?: string;
};

export type DowngradeMaturityRequest = {
  sourceMaturityAssessmentId: string;
  successorMaturityAssessmentId: string;
  idempotencyKey: string;
  actor: ActorReference;
  expectedVersion: number;
  targetLevel: MaturityLevel;
  downgradeReason: string;
  claimBindings: Array<{
    claimEvaluationId: string;
    claimEvaluationVersion: number;
  }>;
  blockingReservationRefs?: string[];
  authorityEvidenceId?: string;
  correlationId?: string;
  nowIso?: string;
};

export type MaturityAssessmentResult =
  | {
      ok: true;
      maturityAssessment: MaturityAssessment;
      successor?: MaturityAssessment;
      error?: undefined;
      reusedFromIdempotencyKey?: boolean;
      durationMs: number;
    }
  | {
      ok: false;
      maturityAssessment?: MaturityAssessment;
      successor?: MaturityAssessment;
      error: MaturityStructuredError;
      reusedFromIdempotencyKey?: boolean;
      durationMs: number;
    };

export const MATURITY_LEVEL_ORDER: readonly MaturityLevel[] = [
  "DOCUMENTED",
  "VALIDATED",
  "MODELED",
  "IMPLEMENTED",
  "ADOPTED",
] as const;

```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/maturityCalculation.ts`

```typescript
/**
 * Deterministic fail-closed maturity calculation from exact ClaimEvaluation bindings.
 * Never promotes by default. Waiver ≠ PASS. Disputed/superseded never positive.
 * Never mutates ClaimEvaluation. Never creates Decision or sets executionAuthority.
 */
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type {
  MaturityClaimBinding,
  MaturityClaimIneligibilityCode,
  MaturityCriterionResult,
  MaturityGap,
  MaturityLevel,
} from "../domain/maturityAssessmentTypes";
import { levelRank, minLevel } from "../domain/maturityAssessmentInvariants";

export type ClaimEligibilityInput = {
  claim: ClaimEvaluation;
  expectedVersion: number;
  isSuperseded: boolean;
};

export function assessClaimEligibility(
  input: ClaimEligibilityInput,
): MaturityClaimBinding {
  const { claim, expectedVersion, isSuperseded } = input;
  const base = {
    claimEvaluationId: claim.claimEvaluationId,
    claimEvaluationVersion: claim.version,
    claimType: claim.claimType,
    criticality: claim.criticality,
    status: claim.status,
    confirmationAuthority: claim.confirmationAuthority,
    confirmedByActorId: claim.confirmedBy?.actorId,
    reviewBundleId: claim.reviewBundleId,
    reviewBundleVersion: claim.reviewBundleVersion,
  };

  const ineligible = (
    code: MaturityClaimIneligibilityCode,
  ): MaturityClaimBinding => ({
    ...base,
    eligibleForPositive: false,
    ineligibilityCode: code,
  });

  if (claim.version !== expectedVersion) {
    return ineligible("version_mismatch");
  }
  if (isSuperseded) {
    return ineligible("superseded");
  }
  if (claim.status === "disputed") {
    return ineligible("disputed");
  }
  if (claim.status === "waived") {
    return ineligible("waived");
  }
  if (claim.status !== "pass") {
    return ineligible("not_pass");
  }

  // PASS requires confirmation when Critical/structural (or when confirmationAuthority missing for non-deterministic).
  if (claim.criticality === "structural") {
    if (
      !claim.confirmedBy ||
      claim.confirmationAuthority !== "morris"
    ) {
      return ineligible("structural_confirmation_required");
    }
  } else if (claim.criticality === "critical") {
    if (
      !claim.confirmedBy ||
      claim.confirmationAuthority === "system_deterministic" ||
      claim.confirmedBy.role === "system" ||
      claim.confirmedBy.role === "agent"
    ) {
      return ineligible("confirmation_required");
    }
  } else {
    // non_critical: system_deterministic PASS ok; otherwise human confirmation if evaluating was confirmed to pass
    if (
      claim.confirmationAuthority !== "system_deterministic" &&
      !claim.confirmedBy
    ) {
      return ineligible("confirmation_required");
    }
  }

  return { ...base, eligibleForPositive: true };
}

export type MaturityCalculation = {
  proposedLevel: MaturityLevel;
  status: "proposed" | "blocked";
  criteriaResults: MaturityCriterionResult[];
  gaps: MaturityGap[];
  dimensions?: Array<{
    dimensionId: string;
    proposedLevel: MaturityLevel;
    blocked?: boolean;
  }>;
};

/**
 * Explicit level thresholds (no averages, no majority):
 * - DOCUMENTED: ≥1 eligible PASS
 * - VALIDATED: ≥1 eligible PASS with any confirmation authority
 * - MODELED: ≥1 eligible PASS with claimType technique|maturite_support|conformite
 * - IMPLEMENTED: ≥1 eligible PASS with criticality critical|structural
 * - ADOPTED: ≥1 eligible PASS structural with morris confirmation
 * HARD reserves ⇒ blocked (cannot confirm; proposedLevel capped at DOCUMENTED for display)
 */
export function calculateMaturityLevel(input: {
  requestedLevel: MaturityLevel;
  bindings: MaturityClaimBinding[];
  blockingReservationRefs: string[];
  dimensions?: Array<{ dimensionId: string; proposedLevel: MaturityLevel }>;
}): MaturityCalculation {
  const eligible = input.bindings.filter((b) => b.eligibleForPositive);
  const gaps: MaturityGap[] = [];

  for (const b of input.bindings) {
    if (b.eligibleForPositive) continue;
    if (b.ineligibilityCode === "disputed") {
      gaps.push({
        code: "claim_disputed",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (b.ineligibilityCode === "waived") {
      gaps.push({
        code: "claim_waived",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (b.ineligibilityCode === "superseded") {
      gaps.push({
        code: "claim_superseded",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (
      b.ineligibilityCode === "confirmation_required" ||
      b.ineligibilityCode === "structural_confirmation_required"
    ) {
      gaps.push({
        code: "claim_not_confirmed",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (b.ineligibilityCode === "version_mismatch") {
      gaps.push({
        code: "claim_version_mismatch",
        claimEvaluationId: b.claimEvaluationId,
      });
    } else if (b.ineligibilityCode === "missing") {
      gaps.push({
        code: "claim_missing",
        claimEvaluationId: b.claimEvaluationId,
      });
    }
  }

  const hasEligible = eligible.length > 0;
  if (!hasEligible) {
    gaps.push({ code: "no_eligible_claims" });
  }

  const hasConfirmed = eligible.some(
    (b) =>
      Boolean(b.confirmationAuthority) || Boolean(b.confirmedByActorId),
  );
  const hasModeledSupport = eligible.some((b) =>
    ["technique", "maturite_support", "conformite"].includes(b.claimType),
  );
  const hasImplementedSupport = eligible.some(
    (b) => b.criticality === "critical" || b.criticality === "structural",
  );
  const hasAdoptedSupport = eligible.some(
    (b) =>
      b.criticality === "structural" &&
      b.confirmationAuthority === "morris",
  );
  const hardBlocked = input.blockingReservationRefs.length > 0;

  const criteriaResults: MaturityCriterionResult[] = [
    {
      code: "has_eligible_pass",
      satisfied: hasEligible,
      supportingClaimEvaluationIds: eligible.map((b) => b.claimEvaluationId),
    },
    {
      code: "has_confirmed_pass",
      satisfied: hasConfirmed,
      supportingClaimEvaluationIds: eligible
        .filter((b) => b.confirmationAuthority || b.confirmedByActorId)
        .map((b) => b.claimEvaluationId),
    },
    {
      code: "has_modeled_support",
      satisfied: hasModeledSupport,
      supportingClaimEvaluationIds: eligible
        .filter((b) =>
          ["technique", "maturite_support", "conformite"].includes(b.claimType),
        )
        .map((b) => b.claimEvaluationId),
    },
    {
      code: "has_implemented_support",
      satisfied: hasImplementedSupport,
      supportingClaimEvaluationIds: eligible
        .filter(
          (b) =>
            b.criticality === "critical" || b.criticality === "structural",
        )
        .map((b) => b.claimEvaluationId),
    },
    {
      code: "has_adopted_morris_support",
      satisfied: hasAdoptedSupport,
      supportingClaimEvaluationIds: eligible
        .filter(
          (b) =>
            b.criticality === "structural" &&
            b.confirmationAuthority === "morris",
        )
        .map((b) => b.claimEvaluationId),
    },
    {
      code: "no_hard_blocking_reserve",
      satisfied: !hardBlocked,
      supportingClaimEvaluationIds: [],
    },
  ];

  let supported: MaturityLevel = "DOCUMENTED";
  if (hasEligible) supported = "DOCUMENTED";
  if (hasEligible && hasConfirmed) supported = "VALIDATED";
  if (hasEligible && hasConfirmed && hasModeledSupport) supported = "MODELED";
  if (hasEligible && hasConfirmed && hasImplementedSupport) {
    supported = "IMPLEMENTED";
  }
  if (hasEligible && hasConfirmed && hasAdoptedSupport) {
    supported = "ADOPTED";
  }
  if (!hasEligible) {
    // Fail-closed floor: still DOCUMENTED proposal with gaps — never invent higher.
    supported = "DOCUMENTED";
  }

  let proposedLevel = minLevel(input.requestedLevel, supported);
  if (levelRank(input.requestedLevel) > levelRank(supported)) {
    gaps.push({
      code: "requested_level_unsupported",
      level: input.requestedLevel,
    });
    gaps.push({
      code: "insufficient_for_level",
      level: input.requestedLevel,
    });
  }

  if (hardBlocked) {
    gaps.push({
      code: "hard_reserve_blocks_level",
      level: proposedLevel,
    });
    proposedLevel = minLevel(proposedLevel, "DOCUMENTED");
    const dimensions = (input.dimensions ?? []).map((d) => ({
      dimensionId: d.dimensionId,
      proposedLevel: minLevel(d.proposedLevel, proposedLevel),
      blocked: true,
    }));
    return {
      proposedLevel,
      status: "blocked",
      criteriaResults,
      gaps,
      dimensions: dimensions.length
        ? dimensions
        : [
            {
              dimensionId: "default",
              proposedLevel,
              blocked: true,
            },
          ],
    };
  }

  const dimensions = (input.dimensions ?? []).map((d) => ({
    dimensionId: d.dimensionId,
    proposedLevel: minLevel(d.proposedLevel, proposedLevel),
  }));

  return {
    proposedLevel,
    status: "proposed",
    criteriaResults,
    gaps,
    dimensions: dimensions.length ? dimensions : undefined,
  };
}

export function missingClaimBinding(
  claimEvaluationId: string,
  expectedVersion: number,
): MaturityClaimBinding {
  return {
    claimEvaluationId,
    claimEvaluationVersion: expectedVersion,
    claimType: "",
    criticality: "",
    status: "missing",
    eligibleForPositive: false,
    ineligibilityCode: "missing",
    reviewBundleId: "",
    reviewBundleVersion: 0,
  };
}

```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/proposeMaturity.ts`

```typescript
/**
 * ProposeMaturity — create MaturityAssessment with deterministic fail-closed calculation.
 * autoPromoted=false. Never mutates ClaimEvaluation. Never launches D5 / Decision / execution.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createMaturityAssessmentError,
  isMaturityAssessmentDomainError,
} from "../domain/maturityAssessmentErrors";
import {
  isMaturityAssessmentId,
  isProjectId,
  MATURITY_LEVELS,
  validateMaturityAssessmentShape,
} from "../domain/maturityAssessmentInvariants";
import type {
  MaturityAssessment,
  MaturityAssessmentResult,
  ProposeMaturityRequest,
} from "../domain/maturityAssessmentTypes";
import { containsForbiddenSecret, isOaIdentifier } from "../domain/invariants";
import type { ClaimEvaluationReaderPort } from "../ports/claimEvaluationReader";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { MaturityAssessmentRepositoryPort } from "../ports/maturityAssessmentRepository";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";
import {
  assessClaimEligibility,
  calculateMaturityLevel,
  missingClaimBinding,
} from "./maturityCalculation";

export class ProposeMaturity {
  constructor(
    private readonly repo: MaturityAssessmentRepositoryPort,
    private readonly claims: ClaimEvaluationReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: ProposeMaturityRequest,
  ): Promise<MaturityAssessmentResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createMaturityAssessmentError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createMaturityAssessmentError>[0]> & {
        maturityAssessment?: MaturityAssessment;
      },
    ): MaturityAssessmentResult => {
      const { maturityAssessment, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.maturity_assessment.idempotency_conflict" as const)
          : detailCode === "MATURITY_AUTHORITY_FORBIDDEN" ||
              detailCode === "MATURITY_SELF_REVIEW_FORBIDDEN"
            ? ("oa.maturity_assessment.authority_rejected" as const)
            : ("oa.maturity_assessment.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        maturityAssessmentId: request.maturityAssessmentId,
        actorId: request.actor.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createMaturityAssessmentError({
          detailCode,
          timestamp,
          correlationId,
          maturityAssessmentId: request.maturityAssessmentId,
          internalCauseRef,
          ...errorExtra,
        }),
        maturityAssessment,
        durationMs,
      };
    };

    try {
      if (!isMaturityAssessmentId(request.maturityAssessmentId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "maturity_id_invalid");
      }
      if (!isProjectId(request.projectId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "project_id_invalid");
      }
      if (!request.subjectRef || !isOaIdentifier(request.subjectRef)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "subject_ref_invalid");
      }
      if (!MATURITY_LEVELS.has(request.requestedLevel)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "requested_level_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "idempotency_key_too_short");
      }
      if (!request.claimBindings?.length) {
        return fail("MATURITY_ASSESSMENT_INVALID", "claim_bindings_required");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("MATURITY_SECRET_FORBIDDEN", "secret_in_actor");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          maturityAssessmentId: request.maturityAssessmentId,
          idempotencyKey: request.idempotencyKey,
          projectId: request.projectId,
          subjectRef: request.subjectRef,
          requestedLevel: request.requestedLevel,
          claimBindings: request.claimBindings,
          blockingReservationRefs: request.blockingReservationRefs ?? [],
          dimensions: request.dimensions ?? [],
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "propose_maturity"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.maturity_assessment.proposed",
            ts: timestamp,
            correlationId,
            maturityAssessmentId:
              existingIdem.maturityAssessment.maturityAssessmentId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.maturityAssessment.status,
            version: existingIdem.maturityAssessment.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            maturityAssessment: existingIdem.maturityAssessment,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      if (await this.repo.exists(request.maturityAssessmentId)) {
        return fail(
          "MATURITY_ASSESSMENT_ALREADY_EXISTS",
          "maturity_id_taken",
        );
      }

      const bindings = [];
      const reviewBundleRefs = new Map<
        string,
        { reviewBundleId: string; version: number }
      >();
      const evidenceRefs = new Set<string>();
      const waiverRefs: string[] = [];

      for (const ref of request.claimBindings) {
        if (!ref.claimEvaluationId?.startsWith("clm:")) {
          return fail("MATURITY_ASSESSMENT_INVALID", "claim_id_invalid", {
            claimEvaluationId: ref.claimEvaluationId,
          });
        }
        const claim = await this.claims.findById(ref.claimEvaluationId);
        if (!claim) {
          bindings.push(
            missingClaimBinding(
              ref.claimEvaluationId,
              ref.claimEvaluationVersion,
            ),
          );
          continue;
        }
        const isSuperseded = await this.claims.isSuperseded(
          ref.claimEvaluationId,
        );
        const binding = assessClaimEligibility({
          claim,
          expectedVersion: ref.claimEvaluationVersion,
          isSuperseded,
        });
        bindings.push(binding);
        reviewBundleRefs.set(
          `${claim.reviewBundleId}@${claim.reviewBundleVersion}`,
          {
            reviewBundleId: claim.reviewBundleId,
            version: claim.reviewBundleVersion,
          },
        );
        for (const ev of claim.requiredEvidenceRefs) evidenceRefs.add(ev);
        if (claim.status === "waived" && claim.waiver) {
          waiverRefs.push(ref.claimEvaluationId);
        }
      }

      // Hard fail if any required binding is missing entirely (fail-closed propose).
      const missing = bindings.find((b) => b.ineligibilityCode === "missing");
      if (missing) {
        return fail("MATURITY_CLAIM_NOT_FOUND", "claim_missing", {
          claimEvaluationId: missing.claimEvaluationId,
        });
      }
      const versionMismatch = bindings.find(
        (b) => b.ineligibilityCode === "version_mismatch",
      );
      if (versionMismatch) {
        return fail(
          "MATURITY_CLAIM_VERSION_MISMATCH",
          "claim_version_mismatch",
          { claimEvaluationId: versionMismatch.claimEvaluationId },
        );
      }

      const blockingReservationRefs = [
        ...(request.blockingReservationRefs ?? []),
      ];
      const calc = calculateMaturityLevel({
        requestedLevel: request.requestedLevel,
        bindings,
        blockingReservationRefs,
        dimensions: request.dimensions,
      });

      const assessment: MaturityAssessment = {
        schemaVersion: "0.2.0-oa",
        maturityAssessmentId: request.maturityAssessmentId,
        projectId: request.projectId,
        subjectRef: request.subjectRef,
        dimensions: calc.dimensions,
        proposedLevel: calc.proposedLevel,
        claimEvaluationRefs: request.claimBindings.map(
          (c) => c.claimEvaluationId,
        ),
        claimBindings: structuredClone(bindings),
        reviewBundleRefs:
          request.reviewBundleRefs ??
          [...reviewBundleRefs.values()],
        evidenceRefs: request.evidenceRefs ?? [...evidenceRefs],
        blockingReservationRefs,
        waiverRefs: waiverRefs.length ? waiverRefs : undefined,
        proposedBy: { ...request.actor },
        proposedAt: timestamp,
        status: calc.status,
        autoPromoted: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: request.projectId,
        }),
        criteriaResults: structuredClone(calc.criteriaResults),
        gaps: structuredClone(calc.gaps),
        calculatedAt: timestamp,
        version: 1,
        idempotencyKey: request.idempotencyKey,
        updatedAt: timestamp,
      };

      const shape = validateMaturityAssessmentShape(assessment);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(assessment, {
        maturityAssessmentId: assessment.maturityAssessmentId,
        fingerprint,
        operation: "propose_maturity",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.maturity_assessment.proposed",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: assessment.maturityAssessmentId,
        claimEvaluationId: assessment.claimEvaluationRefs[0],
        evidenceIds: assessment.claimEvaluationRefs,
        actorId: request.actor.actorId,
        newStatus: assessment.status,
        version: assessment.version,
        result: "ok",
        durationMs,
      });
      this.audit.append({
        event: "oa.maturity_assessment.calculated",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: assessment.maturityAssessmentId,
        actorId: request.actor.actorId,
        newStatus: assessment.proposedLevel,
        version: assessment.version,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        maturityAssessment: structuredClone(assessment),
        durationMs,
      };
    } catch (err) {
      if (isMaturityAssessmentDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("MATURITY_PERSISTENCE_FAILED", "unexpected_propose_failure");
    }
  }
}

```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/confirmMaturity.ts`

```typescript
/**
 * ConfirmMaturity — human confirmation of proposed maturity.
 * System/agent forbidden. ADOPTED / structural levels require Morris.
 * HARD blockingReservationRefs forbid confirm. autoPromoted remains false.
 * Never launches D5 / Decision / executionAuthority.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createMaturityAssessmentError,
  isMaturityAssessmentDomainError,
} from "../domain/maturityAssessmentErrors";
import {
  isMaturityAssessmentId,
  levelRank,
  validateMaturityAssessmentShape,
} from "../domain/maturityAssessmentInvariants";
import type {
  ConfirmMaturityRequest,
  MaturityAssessment,
  MaturityAssessmentResult,
} from "../domain/maturityAssessmentTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { MaturityAssessmentRepositoryPort } from "../ports/maturityAssessmentRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

const MATURITY_AUTHORITY_SCOPE = "oa.maturity_assessment";

export class ConfirmMaturity {
  constructor(
    private readonly repo: MaturityAssessmentRepositoryPort,
    private readonly authority: ClaimAuthorityPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: ConfirmMaturityRequest,
  ): Promise<MaturityAssessmentResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createMaturityAssessmentError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createMaturityAssessmentError>[0]> & {
        maturityAssessment?: MaturityAssessment;
      },
    ): MaturityAssessmentResult => {
      const { maturityAssessment, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.maturity_assessment.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.maturity_assessment.concurrent_modification_rejected" as const)
            : detailCode === "MATURITY_AUTHORITY_FORBIDDEN" ||
                detailCode === "MATURITY_SELF_REVIEW_FORBIDDEN"
              ? ("oa.maturity_assessment.authority_rejected" as const)
              : ("oa.maturity_assessment.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        maturityAssessmentId: request.maturityAssessmentId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createMaturityAssessmentError({
          detailCode,
          timestamp,
          correlationId,
          maturityAssessmentId: request.maturityAssessmentId,
          internalCauseRef,
          ...errorExtra,
        }),
        maturityAssessment,
        durationMs,
      };
    };

    try {
      if (!isMaturityAssessmentId(request.maturityAssessmentId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "maturity_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "idempotency_key_too_short");
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("MATURITY_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (
        request.actor.role === "system" ||
        request.actor.role === "agent"
      ) {
        return fail(
          "MATURITY_AUTHORITY_FORBIDDEN",
          "system_or_agent_cannot_confirm",
        );
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          maturityAssessmentId: request.maturityAssessmentId,
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
          existingIdem.record.operation === "confirm_maturity"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.maturity_assessment.confirmed",
            ts: timestamp,
            correlationId,
            maturityAssessmentId:
              existingIdem.maturityAssessment.maturityAssessmentId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.maturityAssessment.status,
            version: existingIdem.maturityAssessment.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            maturityAssessment: existingIdem.maturityAssessment,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.maturityAssessmentId);
      if (!current) {
        return fail("MATURITY_ASSESSMENT_NOT_FOUND", "missing_maturity");
      }
      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          maturityAssessment: current,
        });
      }
      if (current.status === "superseded") {
        return fail("MATURITY_SUPERSEDED", "cannot_confirm_superseded", {
          maturityAssessment: current,
        });
      }
      if (current.status === "confirmed") {
        return fail("MATURITY_ALREADY_CONFIRMED", "already_confirmed", {
          maturityAssessment: current,
        });
      }
      if (current.status === "blocked") {
        return fail(
          "MATURITY_BLOCKED_BY_RESERVATION",
          "blocked_cannot_confirm",
          { maturityAssessment: current },
        );
      }
      if (current.status !== "proposed") {
        return fail("MATURITY_INVALID_STATE", "confirm_requires_proposed", {
          maturityAssessment: current,
        });
      }
      if ((current.blockingReservationRefs?.length ?? 0) > 0) {
        return fail(
          "MATURITY_BLOCKED_BY_RESERVATION",
          "hard_reserve_present",
          { maturityAssessment: current },
        );
      }
      if (current.autoPromoted !== false) {
        return fail(
          "MATURITY_AUTO_PROMOTION_FORBIDDEN",
          "auto_promoted_forbidden",
          { maturityAssessment: current },
        );
      }
      if (request.actor.actorId === current.proposedBy.actorId) {
        if (
          levelRank(current.proposedLevel) >= levelRank("IMPLEMENTED")
        ) {
          return fail(
            "MATURITY_SELF_REVIEW_FORBIDDEN",
            "self_review_structural_level",
            { maturityAssessment: current },
          );
        }
      }

      const requireMorris =
        current.proposedLevel === "ADOPTED" ||
        current.proposedLevel === "IMPLEMENTED";
      const requiredLevel = requireMorris
        ? ("N3" as const)
        : ("N2" as const);
      const auth = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel,
        scope: MATURITY_AUTHORITY_SCOPE,
        evidenceId: request.authorityEvidenceId,
        requireMorrisGate: requireMorris,
      });
      if (!auth.ok) {
        return fail("MATURITY_AUTHORITY_FORBIDDEN", auth.reason, {
          maturityAssessment: current,
        });
      }
      if (requireMorris && request.actor.role !== "decision_maker") {
        return fail(
          "MATURITY_AUTHORITY_FORBIDDEN",
          "structural_maturity_requires_decision_maker",
          { maturityAssessment: current },
        );
      }

      const updated: MaturityAssessment = {
        ...current,
        status: "confirmed",
        confirmedLevel: current.proposedLevel,
        confirmedBy: { ...request.actor },
        confirmedAt: timestamp,
        dimensions: current.dimensions?.map((d) => ({
          ...d,
          confirmedLevel: d.proposedLevel,
        })),
        autoPromoted: false,
        blockingReservationRefs: [],
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };
      const shape = validateMaturityAssessmentShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, {
          maturityAssessment: current,
        });
      }

      await this.repo.update(updated, request.expectedVersion, {
        maturityAssessmentId: updated.maturityAssessmentId,
        fingerprint,
        operation: "confirm_maturity",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.maturity_assessment.confirmed",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: updated.maturityAssessmentId,
        evidenceIds: updated.claimEvaluationRefs,
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
        maturityAssessment: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isMaturityAssessmentDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("MATURITY_PERSISTENCE_FAILED", "unexpected_confirm_failure");
    }
  }
}

```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/downgradeMaturity.ts`

```typescript
/**
 * DowngradeMaturity — explicit supersession + lower level. Never automatic.
 * Human authority; Morris if target/source structural (IMPLEMENTED/ADOPTED).
 * Atomic createSuccessorAndMarkSuperseded. Never mutates ClaimEvaluation.
 * Never launches D5 / closes reserves / sets executionAuthority.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createMaturityAssessmentError,
  isMaturityAssessmentDomainError,
} from "../domain/maturityAssessmentErrors";
import {
  isMaturityAssessmentId,
  levelRank,
  MATURITY_LEVELS,
  validateMaturityAssessmentShape,
} from "../domain/maturityAssessmentInvariants";
import type {
  DowngradeMaturityRequest,
  MaturityAssessment,
  MaturityAssessmentResult,
} from "../domain/maturityAssessmentTypes";
import { containsForbiddenSecret } from "../domain/invariants";
import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
import type { ClaimEvaluationReaderPort } from "../ports/claimEvaluationReader";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { MaturityAssessmentRepositoryPort } from "../ports/maturityAssessmentRepository";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";
import {
  assessClaimEligibility,
  calculateMaturityLevel,
  missingClaimBinding,
} from "./maturityCalculation";

const MATURITY_AUTHORITY_SCOPE = "oa.maturity_assessment";

export class DowngradeMaturity {
  constructor(
    private readonly repo: MaturityAssessmentRepositoryPort,
    private readonly claims: ClaimEvaluationReaderPort,
    private readonly authority: ClaimAuthorityPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: DowngradeMaturityRequest,
  ): Promise<MaturityAssessmentResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createMaturityAssessmentError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createMaturityAssessmentError>[0]> & {
        maturityAssessment?: MaturityAssessment;
        successor?: MaturityAssessment;
      },
    ): MaturityAssessmentResult => {
      const { maturityAssessment, successor, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.maturity_assessment.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT" ||
              detailCode === "CONCURRENT_MODIFICATION"
            ? ("oa.maturity_assessment.concurrent_modification_rejected" as const)
            : detailCode === "MATURITY_AUTHORITY_FORBIDDEN"
              ? ("oa.maturity_assessment.authority_rejected" as const)
              : ("oa.maturity_assessment.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        maturityAssessmentId: request.sourceMaturityAssessmentId,
        successorMaturityAssessmentId: request.successorMaturityAssessmentId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createMaturityAssessmentError({
          detailCode,
          timestamp,
          correlationId,
          maturityAssessmentId: request.sourceMaturityAssessmentId,
          internalCauseRef,
          ...errorExtra,
        }),
        maturityAssessment,
        successor,
        durationMs,
      };
    };

    try {
      if (!isMaturityAssessmentId(request.sourceMaturityAssessmentId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "source_id_invalid");
      }
      if (!isMaturityAssessmentId(request.successorMaturityAssessmentId)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "successor_id_invalid");
      }
      if (
        request.sourceMaturityAssessmentId ===
        request.successorMaturityAssessmentId
      ) {
        return fail("MATURITY_ASSESSMENT_INVALID", "successor_must_differ");
      }
      if (!MATURITY_LEVELS.has(request.targetLevel)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "target_level_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("MATURITY_ASSESSMENT_INVALID", "idempotency_key_too_short");
      }
      if (
        !request.downgradeReason?.trim() ||
        containsForbiddenSecret(request.downgradeReason)
      ) {
        return fail(
          request.downgradeReason &&
            containsForbiddenSecret(request.downgradeReason)
            ? "MATURITY_SECRET_FORBIDDEN"
            : "MATURITY_ASSESSMENT_INVALID",
          "downgrade_reason_invalid",
        );
      }
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("MATURITY_SECRET_FORBIDDEN", "secret_in_actor");
      }
      if (
        request.actor.role === "system" ||
        request.actor.role === "agent"
      ) {
        return fail(
          "MATURITY_DOWNGRADE_FORBIDDEN",
          "system_or_agent_cannot_downgrade",
        );
      }
      if (!request.claimBindings?.length) {
        return fail("MATURITY_ASSESSMENT_INVALID", "claim_bindings_required");
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          sourceMaturityAssessmentId: request.sourceMaturityAssessmentId,
          successorMaturityAssessmentId: request.successorMaturityAssessmentId,
          idempotencyKey: request.idempotencyKey,
          expectedVersion: request.expectedVersion,
          targetLevel: request.targetLevel,
          downgradeReason: request.downgradeReason,
          claimBindings: request.claimBindings,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "downgrade_maturity" &&
          existingIdem.successor
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.maturity_assessment.downgraded",
            ts: timestamp,
            correlationId,
            maturityAssessmentId: existingIdem.maturityAssessment.maturityAssessmentId,
            successorMaturityAssessmentId:
              existingIdem.successor.maturityAssessmentId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.successor.status,
            version: existingIdem.successor.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            maturityAssessment: existingIdem.maturityAssessment,
            successor: existingIdem.successor,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const source = await this.repo.findById(
        request.sourceMaturityAssessmentId,
      );
      if (!source) {
        return fail("MATURITY_ASSESSMENT_NOT_FOUND", "source_missing");
      }
      if (source.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: source.version,
          maturityAssessment: source,
        });
      }
      if (source.status === "superseded") {
        return fail("MATURITY_SUPERSEDED", "already_superseded", {
          maturityAssessment: source,
        });
      }
      if (
        source.status !== "confirmed" &&
        source.status !== "proposed" &&
        source.status !== "blocked"
      ) {
        return fail("MATURITY_INVALID_STATE", "downgrade_invalid_source_state", {
          maturityAssessment: source,
        });
      }
      if (levelRank(request.targetLevel) >= levelRank(source.proposedLevel)) {
        return fail(
          "MATURITY_DOWNGRADE_FORBIDDEN",
          "target_not_lower_than_source",
          { maturityAssessment: source },
        );
      }

      const requireMorris =
        levelRank(source.proposedLevel) >= levelRank("IMPLEMENTED") ||
        levelRank(request.targetLevel) >= levelRank("IMPLEMENTED") ||
        source.confirmedLevel === "ADOPTED" ||
        source.proposedLevel === "ADOPTED";
      const auth = this.authority.verify({
        actorId: request.actor.actorId,
        requiredLevel: requireMorris ? "N3" : "N2",
        scope: MATURITY_AUTHORITY_SCOPE,
        evidenceId: request.authorityEvidenceId,
        requireMorrisGate: requireMorris,
      });
      if (!auth.ok) {
        return fail("MATURITY_AUTHORITY_FORBIDDEN", auth.reason, {
          maturityAssessment: source,
        });
      }
      if (requireMorris && request.actor.role !== "decision_maker") {
        return fail(
          "MATURITY_AUTHORITY_FORBIDDEN",
          "structural_downgrade_requires_decision_maker",
          { maturityAssessment: source },
        );
      }

      const bindings = [];
      for (const ref of request.claimBindings) {
        const claim = await this.claims.findById(ref.claimEvaluationId);
        if (!claim) {
          bindings.push(
            missingClaimBinding(
              ref.claimEvaluationId,
              ref.claimEvaluationVersion,
            ),
          );
          continue;
        }
        const isSuperseded = await this.claims.isSuperseded(
          ref.claimEvaluationId,
        );
        bindings.push(
          assessClaimEligibility({
            claim,
            expectedVersion: ref.claimEvaluationVersion,
            isSuperseded,
          }),
        );
      }
      const missing = bindings.find((b) => b.ineligibilityCode === "missing");
      if (missing) {
        return fail("MATURITY_CLAIM_NOT_FOUND", "claim_missing", {
          claimEvaluationId: missing.claimEvaluationId,
          maturityAssessment: source,
        });
      }
      const versionMismatch = bindings.find(
        (b) => b.ineligibilityCode === "version_mismatch",
      );
      if (versionMismatch) {
        return fail(
          "MATURITY_CLAIM_VERSION_MISMATCH",
          "claim_version_mismatch",
          {
            claimEvaluationId: versionMismatch.claimEvaluationId,
            maturityAssessment: source,
          },
        );
      }

      const blockingReservationRefs = [
        ...(request.blockingReservationRefs ?? source.blockingReservationRefs),
      ];
      const calc = calculateMaturityLevel({
        requestedLevel: request.targetLevel,
        bindings,
        blockingReservationRefs,
      });
      // Explicit downgrade: force targetLevel (still fail-closed capped by support).
      const proposedLevel =
        levelRank(calc.proposedLevel) <= levelRank(request.targetLevel)
          ? calc.proposedLevel
          : request.targetLevel;

      const successor: MaturityAssessment = {
        schemaVersion: "0.2.0-oa",
        maturityAssessmentId: request.successorMaturityAssessmentId,
        projectId: source.projectId,
        subjectRef: source.subjectRef,
        dimensions: calc.dimensions,
        proposedLevel,
        claimEvaluationRefs: request.claimBindings.map(
          (c) => c.claimEvaluationId,
        ),
        claimBindings: structuredClone(bindings),
        reviewBundleRefs: source.reviewBundleRefs
          ? structuredClone(source.reviewBundleRefs)
          : undefined,
        evidenceRefs: source.evidenceRefs
          ? [...source.evidenceRefs]
          : undefined,
        blockingReservationRefs,
        waiverRefs: source.waiverRefs ? [...source.waiverRefs] : undefined,
        proposedBy: { ...request.actor },
        proposedAt: timestamp,
        status: calc.status === "blocked" ? "blocked" : "proposed",
        supersedesMaturityAssessmentId: source.maturityAssessmentId,
        downgradeReason: request.downgradeReason,
        autoPromoted: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "review",
          timestamp,
          correlationId,
          projectId: source.projectId,
        }),
        criteriaResults: structuredClone(calc.criteriaResults),
        gaps: structuredClone(calc.gaps),
        calculatedAt: timestamp,
        version: 1,
        idempotencyKey: request.idempotencyKey,
        updatedAt: timestamp,
      };

      const superseded: MaturityAssessment = {
        ...source,
        status: "superseded",
        // Schema: superseded requires supersedesMaturityAssessmentId — link to successor (supersededBy).
        supersedesMaturityAssessmentId: successor.maturityAssessmentId,
        downgradeReason: request.downgradeReason,
        autoPromoted: false,
        updatedAt: timestamp,
        version: source.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const successorShape = validateMaturityAssessmentShape(successor);
      if (successorShape) {
        return fail(successorShape.detailCode, successorShape.reason, {
          maturityAssessment: source,
        });
      }
      const supersededShape = validateMaturityAssessmentShape(superseded);
      if (supersededShape) {
        return fail(supersededShape.detailCode, supersededShape.reason, {
          maturityAssessment: source,
        });
      }

      await this.repo.createSuccessorAndMarkSuperseded(
        successor,
        superseded,
        request.expectedVersion,
        {
          maturityAssessmentId: superseded.maturityAssessmentId,
          fingerprint,
          operation: "downgrade_maturity",
          successorId: successor.maturityAssessmentId,
        },
      );

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.maturity_assessment.downgraded",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: superseded.maturityAssessmentId,
        successorMaturityAssessmentId: successor.maturityAssessmentId,
        evidenceIds: successor.claimEvaluationRefs,
        actorId: request.actor.actorId,
        previousStatus: source.status,
        newStatus: successor.status,
        version: successor.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });
      this.audit.append({
        event: "oa.maturity_assessment.superseded",
        ts: timestamp,
        correlationId,
        maturityAssessmentId: superseded.maturityAssessmentId,
        successorMaturityAssessmentId: successor.maturityAssessmentId,
        actorId: request.actor.actorId,
        previousStatus: source.status,
        newStatus: "superseded",
        version: superseded.version,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        maturityAssessment: structuredClone(superseded),
        successor: structuredClone(successor),
        durationMs,
      };
    } catch (err) {
      if (isMaturityAssessmentDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "MATURITY_PERSISTENCE_FAILED",
        "unexpected_downgrade_failure",
      );
    }
  }
}

```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryMaturityAssessmentRepository.ts`

```typescript
import { MaturityAssessmentDomainError } from "../domain/maturityAssessmentErrors";
import { validateMaturityAssessmentShape } from "../domain/maturityAssessmentInvariants";
import type { MaturityAssessment } from "../domain/maturityAssessmentTypes";
import type {
  MaturityAssessmentRepositoryPort,
  MaturityIdempotencyRecord,
} from "../ports/maturityAssessmentRepository";
import type { MemoryMaturityAssessmentStore } from "./memoryMaturityAssessmentStore";

export class MemoryMaturityAssessmentRepository
  implements MaturityAssessmentRepositoryPort
{
  constructor(private readonly store: MemoryMaturityAssessmentStore) {}

  async findById(
    maturityAssessmentId: string,
  ): Promise<MaturityAssessment | null> {
    const found = this.store.assessments.get(maturityAssessmentId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    maturityAssessment: MaturityAssessment;
    record: MaturityIdempotencyRecord;
    successor?: MaturityAssessment;
  } | null> {
    const record = this.store.idempotencyIndex.get(idempotencyKey);
    if (!record) return null;
    const maturityAssessment = await this.findById(record.maturityAssessmentId);
    if (!maturityAssessment) return null;
    const successor = record.successorId
      ? ((await this.findById(record.successorId)) ?? undefined)
      : undefined;
    return {
      maturityAssessment,
      record: structuredClone(record),
      successor,
    };
  }

  async exists(maturityAssessmentId: string): Promise<boolean> {
    return this.store.assessments.has(maturityAssessmentId);
  }

  async create(
    assessment: MaturityAssessment,
    record?: MaturityIdempotencyRecord,
  ): Promise<void> {
    const shape = validateMaturityAssessmentShape(assessment);
    if (shape) {
      throw new MaturityAssessmentDomainError(shape.detailCode, shape.reason);
    }
    if (assessment.version !== 1) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "create_requires_version_1",
      );
    }
    if (this.store.assessments.has(assessment.maturityAssessmentId)) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_ALREADY_EXISTS",
        "maturity_assessment_id_taken",
      );
    }
    this.failIfForced();
    this.store.assessments.set(
      assessment.maturityAssessmentId,
      structuredClone(assessment),
    );
    if (record && assessment.idempotencyKey) {
      this.store.idempotencyIndex.set(
        assessment.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  async update(
    assessment: MaturityAssessment,
    expectedVersion: number,
    record?: MaturityIdempotencyRecord,
  ): Promise<void> {
    const current = this.store.assessments.get(assessment.maturityAssessmentId);
    if (!current) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_NOT_FOUND",
        "update_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new MaturityAssessmentDomainError(
        "VERSION_CONFLICT",
        "occ_mismatch",
        { expectedVersion, currentVersion: current.version },
      );
    }
    if (assessment.version !== expectedVersion + 1) {
      throw new MaturityAssessmentDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateMaturityAssessmentShape(assessment);
    if (shape) {
      throw new MaturityAssessmentDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.assessments.set(
      assessment.maturityAssessmentId,
      structuredClone(assessment),
    );
    if (record && assessment.idempotencyKey) {
      this.store.idempotencyIndex.set(
        assessment.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  async createSuccessorAndMarkSuperseded(
    successor: MaturityAssessment,
    superseded: MaturityAssessment,
    expectedVersion: number,
    record: MaturityIdempotencyRecord & { successorId: string },
  ): Promise<void> {
    const successorShape = validateMaturityAssessmentShape(successor);
    if (successorShape) {
      throw new MaturityAssessmentDomainError(
        successorShape.detailCode,
        successorShape.reason,
      );
    }
    const supersededShape = validateMaturityAssessmentShape(superseded);
    if (supersededShape) {
      throw new MaturityAssessmentDomainError(
        supersededShape.detailCode,
        supersededShape.reason,
      );
    }
    if (successor.version !== 1) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "successor_requires_version_1",
      );
    }
    if (superseded.status !== "superseded") {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "source_must_be_superseded",
      );
    }
    if (record.successorId !== successor.maturityAssessmentId) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "record_successor_id_mismatch",
      );
    }
    if (
      successor.maturityAssessmentId === superseded.maturityAssessmentId
    ) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "successor_must_differ",
      );
    }

    const current = this.store.assessments.get(
      superseded.maturityAssessmentId,
    );
    if (!current) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_NOT_FOUND",
        "downgrade_source_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new MaturityAssessmentDomainError(
        "VERSION_CONFLICT",
        "occ_mismatch",
        { expectedVersion, currentVersion: current.version },
      );
    }
    if (superseded.version !== expectedVersion + 1) {
      throw new MaturityAssessmentDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    if (this.store.assessments.has(successor.maturityAssessmentId)) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_ALREADY_EXISTS",
        "successor_id_taken",
      );
    }
    if (!superseded.idempotencyKey && !record) {
      throw new MaturityAssessmentDomainError(
        "MATURITY_ASSESSMENT_INVALID",
        "downgrade_idempotency_required",
      );
    }

    this.failIfForced();
    this.store.assessments.set(
      successor.maturityAssessmentId,
      structuredClone(successor),
    );
    this.store.assessments.set(
      superseded.maturityAssessmentId,
      structuredClone(superseded),
    );
    if (successor.idempotencyKey) {
      this.store.idempotencyIndex.set(successor.idempotencyKey, {
        ...structuredClone(record),
      });
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new MaturityAssessmentDomainError(
        "MATURITY_PERSISTENCE_FAILED",
        "forced_maturity_save_failure",
      );
    }
  }
}

```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts`

```typescript
/**
 * T-A6-D4 MaturityAssessment — Propose / Confirm / Downgrade lifecycle + fail-closed.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import type { ActorReference } from "@/lib/oa/evidence-review";
import { ACTOR, DIGEST_A, buildServices } from "./helpers";

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

const AGENT: ActorReference = {
  actorId: "actor:agent-1",
  role: "agent",
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
}

async function freezeBundle(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceIds: string[],
) {
  for (const id of evidenceIds) {
    await seedVerifiedEvidence(s, id);
  }
  await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds,
  });
  const frozen = await s.freezeReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-freeze-${rbId}`,
    actor: ACTOR,
    expectedVersion: 1,
  });
  expect(frozen.ok).toBe(true);
}

/** Non-critical deterministic PASS claim ready for maturity. */
async function seedPassClaim(
  s: ReturnType<typeof buildServices>,
  opts: {
    claimId: string;
    evidenceId: string;
    rbId: string;
    claimType?:
      | "technique"
      | "conformite"
      | "qualite"
      | "securite"
      | "maturite_support";
  },
) {
  await freezeBundle(s, opts.rbId, [opts.evidenceId]);
  const evaluated = await s.evaluateClaim.execute({
    claimEvaluationId: opts.claimId,
    idempotencyKey: `idem-eval-${opts.claimId}`,
    actor: SYSTEM,
    claimType: opts.claimType ?? "technique",
    claimStatement: "Support maturity proposal",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: [opts.evidenceId],
    reviewBundleId: opts.rbId,
    reviewBundleVersion: 2,
  });
  expect(evaluated.ok).toBe(true);
  if (!evaluated.ok) return null;
  expect(evaluated.claimEvaluation.status).toBe("pass");
  return evaluated.claimEvaluation;
}

describe("T-A6-D4 ProposeMaturity", () => {
  it("proposes VALIDATED from eligible non-critical PASS (never auto-promoted)", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-pass-001",
      evidenceId: "ev:mat-1",
      rbId: "rb:mat-1",
    });
    expect(claim).toBeTruthy();
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:propose-001",
      idempotencyKey: "idem-mat-propose-001",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "pack:v3-native-option-a-modeled",
      requestedLevel: "MODELED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-pass-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.autoPromoted).toBe(false);
    expect(proposed.maturityAssessment.status).toBe("proposed");
    expect(proposed.maturityAssessment.proposedLevel).toBe("MODELED");
    expect(proposed.maturityAssessment.claimBindings[0]?.eligibleForPositive).toBe(
      true,
    );
    expect(proposed.maturityAssessment.version).toBe(1);
  });

  it("refuses missing claim and wrong version", async () => {
    const s = buildServices();
    const missing = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:missing-001",
      idempotencyKey: "idem-mat-missing",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "DOCUMENTED",
      claimBindings: [
        { claimEvaluationId: "clm:does-not-exist", claimEvaluationVersion: 1 },
      ],
    });
    expect(missing.ok).toBe(false);
    if (missing.ok) return;
    expect(missing.error.detailCode).toBe("MATURITY_CLAIM_NOT_FOUND");

    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-ver-001",
      evidenceId: "ev:mat-ver",
      rbId: "rb:mat-ver",
    });
    const badVer = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:badver-001",
      idempotencyKey: "idem-mat-badver",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "DOCUMENTED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-ver-001",
          claimEvaluationVersion: claim!.version + 5,
        },
      ],
    });
    expect(badVer.ok).toBe(false);
    if (badVer.ok) return;
    expect(badVer.error.detailCode).toBe("MATURITY_CLAIM_VERSION_MISMATCH");
  });

  it("does not promote from waived or disputed claims", async () => {
    const s = buildServices();
    await freezeBundle(s, "rb:mat-waive", ["ev:mat-waive"]);
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.claim_evaluation",
    });
    const waived = await s.evaluateClaim.execute({
      claimEvaluationId: "clm:mat-waive-001",
      idempotencyKey: "idem-clm-waive",
      actor: REVIEWER,
      intent: "waive",
      claimType: "technique",
      claimStatement: "Waived claim",
      criticality: "non_critical",
      evaluationMethod: "human_review",
      requiredEvidenceRefs: ["ev:mat-waive"],
      reviewBundleId: "rb:mat-waive",
      reviewBundleVersion: 2,
      waiverReason: "temporary exception documented",
    });
    expect(waived.ok).toBe(true);
    if (!waived.ok) return;
    expect(waived.claimEvaluation.status).toBe("waived");

    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:from-waive",
      idempotencyKey: "idem-mat-waive",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-waive-001",
          claimEvaluationVersion: waived.claimEvaluation.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.proposedLevel).toBe("DOCUMENTED");
    expect(
      proposed.maturityAssessment.claimBindings[0]?.eligibleForPositive,
    ).toBe(false);
    expect(proposed.maturityAssessment.gaps?.some((g) => g.code === "claim_waived")).toBe(
      true,
    );
  });

  it("blocks proposal when HARD reservation present", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-block-001",
      evidenceId: "ev:mat-block",
      rbId: "rb:mat-block",
    });
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:blocked-001",
      idempotencyKey: "idem-mat-blocked",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "IMPLEMENTED",
      blockingReservationRefs: ["res:hard-runtime-not-proven"],
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-block-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.status).toBe("blocked");
    expect(proposed.maturityAssessment.blockingReservationRefs.length).toBe(1);
  });

  it("idempotent propose replay / conflict", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-idem-001",
      evidenceId: "ev:mat-idem",
      rbId: "rb:mat-idem",
    });
    const first = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:idem-001",
      idempotencyKey: "idem-mat-idem-key",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-idem-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(first.ok).toBe(true);
    const replay = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:idem-001",
      idempotencyKey: "idem-mat-idem-key",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-idem-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotencyKey).toBe(true);

    const conflict = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:idem-002",
      idempotencyKey: "idem-mat-idem-key",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "MODELED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-idem-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("IDEMPOTENCY_CONFLICT");
  });
});

describe("T-A6-D4 ConfirmMaturity", () => {
  it("confirms proposed maturity for human; refuses system/agent/blocked", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-conf-001",
      evidenceId: "ev:mat-conf",
      rbId: "rb:mat-conf",
    });
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:conf-001",
      idempotencyKey: "idem-mat-conf-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-conf-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;

    const sys = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:conf-001",
      idempotencyKey: "idem-mat-conf-sys",
      actor: SYSTEM,
      expectedVersion: 1,
    });
    expect(sys.ok).toBe(false);
    if (!sys.ok) {
      expect(sys.error.detailCode).toBe("MATURITY_AUTHORITY_FORBIDDEN");
    }

    const agent = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:conf-001",
      idempotencyKey: "idem-mat-conf-agent",
      actor: AGENT,
      expectedVersion: 1,
    });
    expect(agent.ok).toBe(false);

    const ok = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:conf-001",
      idempotencyKey: "idem-mat-conf-ok",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(ok.ok).toBe(true);
    if (!ok.ok) return;
    expect(ok.maturityAssessment.status).toBe("confirmed");
    expect(ok.maturityAssessment.confirmedLevel).toBe("VALIDATED");
    expect(ok.maturityAssessment.autoPromoted).toBe(false);
    expect(ok.maturityAssessment.confirmedBy?.role).not.toBe("system");
  });

  it("refuses confirm when HARD reserves present", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-conf-block",
      evidenceId: "ev:mat-conf-block",
      rbId: "rb:mat-conf-block",
    });
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:conf-block",
      idempotencyKey: "idem-mat-conf-block-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      blockingReservationRefs: ["res:hard-1"],
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-conf-block",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    expect(proposed.maturityAssessment.status).toBe("blocked");
    const confirmed = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:conf-block",
      idempotencyKey: "idem-mat-conf-block-c",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(false);
    if (confirmed.ok) return;
    expect(confirmed.error.detailCode).toBe("MATURITY_BLOCKED_BY_RESERVATION");
  });
});

describe("T-A6-D4 DowngradeMaturity", () => {
  it("explicit downgrade supersedes source atomically; refuses system", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    s.fakeClaimAuthority.grant({
      actorId: MORRIS.actorId,
      level: "N3",
      scope: "oa.maturity_assessment",
      canActAsMorris: true,
    });
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-down-001",
      evidenceId: "ev:mat-down",
      rbId: "rb:mat-down",
    });
    const proposed = await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:down-src",
      idempotencyKey: "idem-mat-down-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "MODELED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-down-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(proposed.ok).toBe(true);
    if (!proposed.ok) return;
    const confirmed = await s.confirmMaturity.execute({
      maturityAssessmentId: "mat:down-src",
      idempotencyKey: "idem-mat-down-c",
      actor: REVIEWER,
      expectedVersion: 1,
    });
    expect(confirmed.ok).toBe(true);
    if (!confirmed.ok) return;

    const sysDown = await s.downgradeMaturity.execute({
      sourceMaturityAssessmentId: "mat:down-src",
      successorMaturityAssessmentId: "mat:down-new",
      idempotencyKey: "idem-mat-down-sys",
      actor: SYSTEM,
      expectedVersion: 2,
      targetLevel: "VALIDATED",
      downgradeReason: "evidence invalidated after confirm",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-down-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(sysDown.ok).toBe(false);
    if (!sysDown.ok) {
      expect(sysDown.error.detailCode).toBe("MATURITY_DOWNGRADE_FORBIDDEN");
    }

    const down = await s.downgradeMaturity.execute({
      sourceMaturityAssessmentId: "mat:down-src",
      successorMaturityAssessmentId: "mat:down-new",
      idempotencyKey: "idem-mat-down-ok",
      actor: REVIEWER,
      expectedVersion: 2,
      targetLevel: "VALIDATED",
      downgradeReason: "evidence invalidated after confirm",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-down-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(down.ok).toBe(true);
    if (!down.ok) return;
    expect(down.maturityAssessment?.status).toBe("superseded");
    expect(down.successor?.supersedesMaturityAssessmentId).toBe("mat:down-src");
    expect(down.successor?.downgradeReason).toContain("invalidated");
    expect(down.successor?.proposedLevel).toBe("VALIDATED");
    expect(down.successor?.autoPromoted).toBe(false);

    const source = await s.maturityAssessmentRepository.findById("mat:down-src");
    expect(source?.status).toBe("superseded");
    expect(source?.claimBindings[0]?.claimEvaluationId).toBe("clm:mat-down-001");

    const replay = await s.downgradeMaturity.execute({
      sourceMaturityAssessmentId: "mat:down-src",
      successorMaturityAssessmentId: "mat:down-new",
      idempotencyKey: "idem-mat-down-ok",
      actor: REVIEWER,
      expectedVersion: 2,
      targetLevel: "VALIDATED",
      downgradeReason: "evidence invalidated after confirm",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-down-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotencyKey).toBe(true);
  });

  it("refuses secret in downgrade reason", async () => {
    const s = buildServices();
    s.fakeClaimAuthority.grant({
      actorId: REVIEWER.actorId,
      level: "N2",
      scope: "oa.maturity_assessment",
    });
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-sec-001",
      evidenceId: "ev:mat-sec",
      rbId: "rb:mat-sec",
    });
    await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:sec-src",
      idempotencyKey: "idem-mat-sec-p",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "VALIDATED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-sec-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    const bad = await s.downgradeMaturity.execute({
      sourceMaturityAssessmentId: "mat:sec-src",
      successorMaturityAssessmentId: "mat:sec-new",
      idempotencyKey: "idem-mat-sec-d",
      actor: REVIEWER,
      expectedVersion: 1,
      targetLevel: "DOCUMENTED",
      downgradeReason: "token=super-secret-value-here",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-sec-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    expect(bad.ok).toBe(false);
    if (bad.ok) return;
    expect(bad.error.detailCode).toBe("MATURITY_SECRET_FORBIDDEN");
  });
});

describe("T-A6-D4 repository / defensive copies", () => {
  it("defensive copy after get; independent stores", async () => {
    const s = buildServices();
    const claim = await seedPassClaim(s, {
      claimId: "clm:mat-clone-001",
      evidenceId: "ev:mat-clone",
      rbId: "rb:mat-clone",
    });
    await s.proposeMaturity.execute({
      maturityAssessmentId: "mat:clone-001",
      idempotencyKey: "idem-mat-clone",
      actor: SYSTEM,
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      requestedLevel: "DOCUMENTED",
      claimBindings: [
        {
          claimEvaluationId: "clm:mat-clone-001",
          claimEvaluationVersion: claim!.version,
        },
      ],
    });
    const got = await s.maturityAssessmentRepository.findById("mat:clone-001");
    expect(got).toBeTruthy();
    if (!got) return;
    got.status = "confirmed";
    got.claimBindings.push({
      claimEvaluationId: "clm:injected",
      claimEvaluationVersion: 1,
      claimType: "technique",
      criticality: "non_critical",
      status: "pass",
      eligibleForPositive: true,
      reviewBundleId: "rb:x",
      reviewBundleVersion: 1,
    });
    const again = await s.maturityAssessmentRepository.findById("mat:clone-001");
    expect(again?.status).toBe("proposed");
    expect(again?.claimBindings).toHaveLength(1);
  });
});

```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentDomain.test.ts`

```typescript
/**
 * T-A6-D4 domain calculation + adversarial eligibility.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessClaimEligibility,
  calculateMaturityLevel,
  isMaturityAssessmentId,
  levelRank,
  validateMaturityAssessmentShape,
  type ClaimEvaluation,
  type MaturityAssessment,
} from "@/lib/oa/evidence-review";

function baseClaim(
  overrides: Partial<ClaimEvaluation> = {},
): ClaimEvaluation {
  return {
    schemaVersion: "0.1.0-oa",
    claimEvaluationId: "clm:calc-001",
    claimType: "technique",
    claimStatement: "calc",
    criticality: "non_critical",
    evaluationMethod: "deterministic",
    requiredEvidenceRefs: ["ev:1"],
    providedEvidenceRefs: ["ev:1"],
    reviewBundleId: "rb:1",
    reviewBundleVersion: 2,
    status: "pass",
    proposedBy: {
      actorId: "actor:studio",
      role: "system",
      authorityLevel: "none",
    },
    confirmationAuthority: "system_deterministic",
    proposedAt: "2026-07-26T00:00:00.000Z",
    evaluatedAt: "2026-07-26T00:00:00.000Z",
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:1",
      actor: {
        actorId: "actor:studio",
        role: "system",
        authorityLevel: "none",
      },
      source: "review",
      timestamp: "2026-07-26T00:00:00.000Z",
      correlationId: "corr:1",
    },
    version: 1,
    ...overrides,
  };
}

describe("T-A6-D4 maturity domain", () => {
  it("validates mat: ids and level order", () => {
    expect(isMaturityAssessmentId("mat:oa-1")).toBe(true);
    expect(isMaturityAssessmentId("clm:x")).toBe(false);
    expect(levelRank("DOCUMENTED")).toBeLessThan(levelRank("ADOPTED"));
  });

  it("eligibility: disputed/waived/superseded/unconfirmed never positive", () => {
    expect(
      assessClaimEligibility({
        claim: baseClaim({ status: "disputed" }),
        expectedVersion: 1,
        isSuperseded: false,
      }).eligibleForPositive,
    ).toBe(false);
    expect(
      assessClaimEligibility({
        claim: baseClaim({ status: "waived" }),
        expectedVersion: 1,
        isSuperseded: false,
      }).ineligibilityCode,
    ).toBe("waived");
    expect(
      assessClaimEligibility({
        claim: baseClaim(),
        expectedVersion: 1,
        isSuperseded: true,
      }).ineligibilityCode,
    ).toBe("superseded");
    expect(
      assessClaimEligibility({
        claim: baseClaim({
          criticality: "critical",
          confirmationAuthority: undefined,
          confirmedBy: undefined,
        }),
        expectedVersion: 1,
        isSuperseded: false,
      }).ineligibilityCode,
    ).toBe("confirmation_required");
    expect(
      assessClaimEligibility({
        claim: baseClaim({
          criticality: "structural",
          confirmationAuthority: "authorized_human",
          confirmedBy: {
            actorId: "actor:reviewer-1",
            role: "reviewer",
            authorityLevel: "N2",
          },
        }),
        expectedVersion: 1,
        isSuperseded: false,
      }).ineligibilityCode,
    ).toBe("structural_confirmation_required");
  });

  it("calculation is fail-closed and never averages", () => {
    const eligible = assessClaimEligibility({
      claim: baseClaim(),
      expectedVersion: 1,
      isSuperseded: false,
    });
    const calc = calculateMaturityLevel({
      requestedLevel: "ADOPTED",
      bindings: [eligible],
      blockingReservationRefs: [],
    });
    expect(calc.proposedLevel).toBe("MODELED");
    expect(calc.gaps.some((g) => g.code === "requested_level_unsupported")).toBe(
      true,
    );

    const blocked = calculateMaturityLevel({
      requestedLevel: "MODELED",
      bindings: [eligible],
      blockingReservationRefs: ["res:hard"],
    });
    expect(blocked.status).toBe("blocked");
  });

  it("shape forbids autoPromoted true and confirmed with reserves", () => {
    const base: MaturityAssessment = {
      schemaVersion: "0.2.0-oa",
      maturityAssessmentId: "mat:shape-001",
      projectId: "prj:campus360-oa",
      subjectRef: "prj:campus360-oa",
      proposedLevel: "VALIDATED",
      claimEvaluationRefs: ["clm:1"],
      claimBindings: [
        {
          claimEvaluationId: "clm:1",
          claimEvaluationVersion: 1,
          claimType: "technique",
          criticality: "non_critical",
          status: "pass",
          eligibleForPositive: true,
          reviewBundleId: "rb:1",
          reviewBundleVersion: 2,
        },
      ],
      blockingReservationRefs: [],
      proposedBy: {
        actorId: "actor:studio",
        role: "system",
        authorityLevel: "none",
      },
      proposedAt: "2026-07-26T00:00:00.000Z",
      status: "proposed",
      autoPromoted: false,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:1",
        actor: {
          actorId: "actor:studio",
          role: "system",
          authorityLevel: "none",
        },
        source: "review",
        timestamp: "2026-07-26T00:00:00.000Z",
        correlationId: "corr:1",
      },
      version: 1,
    };
    expect(validateMaturityAssessmentShape(base)).toBeNull();
    expect(
      validateMaturityAssessmentShape({
        ...base,
        autoPromoted: true as unknown as false,
      })?.detailCode,
    ).toBe("MATURITY_AUTO_PROMOTION_FORBIDDEN");
    expect(
      validateMaturityAssessmentShape({
        ...base,
        status: "confirmed",
        confirmedLevel: "VALIDATED",
        confirmedBy: {
          actorId: "actor:morris",
          role: "decision_maker",
          authorityLevel: "N3",
        },
        confirmedAt: "2026-07-26T01:00:00.000Z",
        blockingReservationRefs: ["res:x"],
      })?.detailCode,
    ).toBe("MATURITY_BLOCKED_BY_RESERVATION");
  });
});

```


---

## 6. Synthèse comportementale

| Zone | Résultat |
|------|----------|
| ProposeMaturity | PASS — calcul fail-closed · autoPromoted=false |
| ConfirmMaturity | PASS — humain · Morris IMPLEMENTED/ADOPTED · HARD refuse |
| DowngradeMaturity | PASS — atomique · historique · system/agent refusés |
| Claim bindings exacts | PASS |
| disputed/waived/superseded | jamais positifs |
| D5 / Decision / executionAuthority | absents |

---

## 7. Tests

| Suite | Commande | Tests | Résultat |
|-------|----------|-------|----------|
| D1–D4 | `npm test -- __tests__/oa/evidence-review` | **119** | PASS |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | PASS |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | PASS |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | PASS |
| Modeled | `node --test …/evidence-review-maturity-governance.test.mjs` | 27 | PASS |
| tsc / lint / build / diff-check | — | — | PASS |

Différence vs D3 validation : 105 → **119** (+14 D4).

---

## 8. Findings / réserves

Aucun Critical/Major ouvert.

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**  
C1–C4 **NOT VALIDATED**

---

## 9. Validation finale

Fake-only · pas persistence · D5 absent · modeled/T-A3–T-A5/packages inchangés · D1–D3 non régressés · push/PR/merge **NON** · T-A7 **NON**

---

## 10. Commits locaux

1. `a662c0ddc3a5b752ccc0f29fe66c2e2990e83685` — feat(sfia-studio): implement T-A6 D4 maturity assessment
2. `3d7ec5d…` — docs(sfia-studio): record T-A6 D4 implementation HEAD
3. `357fe58fdad60859e2410be3d1e553b39a157308` — docs(sfia-studio): point D4 implementation HEAD final at record commit

---

## 11. Gate suivant (NOT consumed)

`GO VALIDATE T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A`

---

## 12. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
