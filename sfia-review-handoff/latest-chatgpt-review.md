# SFIA Review Pack — FULL — T-A6 D2 ReviewBundle Validation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 10:12:19 CEST (+0200) |
| **Cycle** | QA / validation / T-A6-D2 ReviewBundle |
| **Profil** | Critical |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `b2c8b64e2ffde98f5c0cfb72b698a76a07425478` |
| **HEAD final** | `589fe19b19b46275ee74a327c13645cdd0f534a1` |
| **Commits** | `ac305fe` fix · `9b494e7` docs validate · `ceaf2a2`/`8da65f4`/`589fe19` HEAD records |
| **Push/PR/merge** | **NON** |
| **D3–D5** | **NON** |
| **Modeled / T-A3–T-A5 / packages** | **NON** modifiés |
| **D1 régressé** | **NON** |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE VALIDATED AFTER CORRECTION — D3 REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — HEAD initial `b2c8b64…` ; final `589fe19b19b46275ee74a327c13645cdd0f534a1` ; main `b25c20e6…` ; handoff source `e8f9a5e3…`.

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
HEAD 589fe19b19b46275ee74a327c13645cdd0f534a1
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
HEAD a5f207366c94b58a8992ef41eb71b24707d3b0ac
branch refs/heads/sfia/review-handoff
```

## 2. Handoff source

blob `e8f9a5e373f9f50cd9fec87a59f780e64dcb69cb` — D2 IMPLEMENTED — VALIDATION REQUIRES MORRIS GO

## 3. CKC

`04-qa-validation.md` · candidate · `executionAuthority=false`

## 4. Findings corrigés

| ID | Sévérité | Correction |
|----|----------|------------|
| F-A6-D2-01 | Major | Reopen atomique `createSuccessorAndMarkSuperseded` |
| F-A6-D2-02 | Major | Completeness draft via snapshots availability |
| F-A6-D2-03 | Major | Secret scan actor reopen |

Aucun Critical/Major ouvert.

## 5. Tests

| Suite | Résultat |
|-------|----------|
| evidence-review D1+D2 | **87 PASS** (83→87) |
| T-A3 / T-A4 / T-A5 | 50 / 61 / 88 PASS |
| Modeled T-A6 | 27 PASS |
| typecheck / lint / secret / diff-check | PASS |

## 6. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 OPEN · C1–C4 NOT VALIDATED

## 7. Contenu complet — `12-delivery-d2-validation.md`

```markdown
# 12 — T-A6-D2 ReviewBundle Validation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D2 — ReviewBundle |
| **Cycle** | QA / validation (Critical) |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `b2c8b64e2ffde98f5c0cfb72b698a76a07425478` |
| **HEAD final** | `9b494e7c68c26591935e5a973ea1c7006ff2fdd8` |
| **Horodatage** | 2026-07-26 10:12:00 CEST (+0200) |
| **Handoff source** | blob `e8f9a5e373f9f50cd9fec87a59f780e64dcb69cb` |
| **Statut** | **T-A6-D2 VALIDATED AFTER CORRECTION** |
| **D1** | VALIDATED AFTER CORRECTION (non régressé) |
| **D3–D5** | **NON** |
| **Fake-only / mémoire** | **oui** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE VALIDATED AFTER CORRECTION — D3 REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`11` · README · handoff D2 · runtime `evidence-review/**` · schema ReviewBundle `0.2.0-oa` · CKC `04-qa-validation.md` (candidate, `executionAuthority=false`).

---

## 2. Méthode (6 niveaux)

1. Conformité décisions DEL-01/03/05/06/08/09/10
2. Domaine ReviewBundle vs `0.2.0-oa`
3. Lifecycle / freeze / completeness / synthesisOnly
4. Application + repository + EvidenceReader
5. Sécurité / RGPD / audit
6. Non-régression T-A3–T-A5 / modeled / packages

---

## 3. Conformité décisions

| Décision | Résultat |
|----------|----------|
| DEL-01 module `evidence-review/**` | **PASS** |
| DEL-03 use cases par fichier | **PASS** |
| DEL-05 OCC `expectedVersion` | **PASS** |
| DEL-06 contrôles sync fail-closed + audit | **PASS** (renforcé reopen atomique) |
| DEL-08 mémoire / fake-only | **PASS** |
| DEL-09 D2 après D1 | **PASS** |
| DEL-10 pas d’auto-launch D3 | **PASS** — D3–D5 absents |

---

## 4. Domaine / lifecycle / Evidence refs

| Zone | Résultat |
|------|----------|
| ID `rb:` · draft only create · lifecycle fermé | **PASS** |
| `ready_for_review` ≡ freeze + `frozenAt` | **PASS** |
| evidenceRefs immuables post-freeze | **PASS** |
| snapshots Evidence id/version/status/availability | **PASS** (après correction draft completeness) |
| accepted ⇒ complete ∧ ¬synthesisOnly | **PASS** |
| incomplete status ⇒ completeness incomplete | **PASS** |
| claimEvaluationRefs = `[]` · aucun Claim PASS | **PASS** |
| EvidenceReader RO · Evidence non mutée | **PASS** |
| Reopen : superseded + nouveau draft · historique conservé | **PASS** (atomique après correction) |

---

## 5. Findings

### Critical

Aucun.

### Major (corrigés)

| ID | Fichier | Invariant | Preuve | Impact | Correction | Blocker D2 | Blocker D3 |
|----|---------|-----------|--------|--------|------------|------------|------------|
| **F-A6-D2-01** | `reopenReview.ts` / `memoryReviewBundleRepository.ts` | Reopen atomique / fail-closed | `create` puis `update` : si `update` échoue → successeur orphelin, source encore terminal, replay même clé ⇒ `ALREADY_EXISTS` | Incohérence durable mémoire ; multi-successeurs possibles avec autre ID | `createSuccessorAndMarkSuperseded` atomique (fail avant toute mutation) | oui (avant fix) | oui (historique snapshot) |
| **F-A6-D2-02** | `createReviewBundle.ts` / `attach…` / `remove…` | Completeness tient compte availability | Attach/Create calculaient complete sans snapshots ⇒ Evidence unavailable pouvait être « complete » en draft | Fausse complétude avant freeze ; risque de lecture incorrecte | `readEvidenceSnapshotsForCompleteness` sur create/attach/remove | oui (avant fix) | oui (futurs PASS) |
| **F-A6-D2-03** | `reopenReview.ts` | Secrets dans actor/provenance | `displayName` actor non filtré au reopen alors que provenance successeur le stocke | Fuite potentielle metadata | `containsForbiddenSecret(actor.displayName)` | oui (avant fix) | non |

### Minor / Observations

| ID | Note |
|----|------|
| O-D2-1 | `claimEvaluationRefs` vides jusqu’à D3 (attendu) |
| O-D2-2 | C1 : contrôle Evidence status pour Claim PASS reste futur — **NOT VALIDATED** |
| O-D2-3 | Replay idempotent ré-émet un audit ok (cohérent D1) — acceptable |

---

## 6. Corrections

Commit : `fix(sfia-studio): correct T-A6 D2 validation findings`

- Port + `MemoryReviewBundleRepository.createSuccessorAndMarkSuperseded`
- Completeness draft via snapshots RO
- Secret scan actor reopen
- Tests adversariaux `adversarialReviewBundleValidation.test.ts` (+4)

---

## 7. Tests (réexécution propre)

| Suite | Commande | Avant | Après | Résultat |
|-------|----------|-------|-------|----------|
| evidence-review D1+D2 | `npm test -- __tests__/oa/evidence-review` | 83 | **87** | **PASS** (+4 adversariaux) |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | 50 | **PASS** |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | 61 | **PASS** |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | 88 | **PASS** |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | 27 | 27 | **PASS** |
| typecheck | `npx tsc --noEmit` | — | — | **PASS** |
| lint | `npm run lint` | — | — | **PASS** |
| secret scan lib | rg heuristique | — | — | **CLEAN** (refs contrôle uniquement) |
| `git diff --check` | — | — | — | **PASS** |

Build Next complet : non exécuté (hors besoin lib D2 ; typecheck suffit).

---

## 8. Sécurité / RGPD / audit

Motifs + actors filtrés · audit refs-only · aucun payload · fake-only · U-M02 **OPEN**.

---

## 9. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

---

## 10. Anti-claims

Pas D3 READY · DELIVERY COMPLETE · ClaimEvaluation · persistence réelle · T-A7 · R-M01 fermée · C1–C4 validées · exécution réelle.

---

## 11. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE VALIDATED AFTER CORRECTION — D3 REQUIRES MORRIS GO`
```

## 8. Contenu complet — README

```markdown
# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Profil** | Critical |
| **Gate D1 validate** | `GO VALIDATE T-A6 DELIVERY D1` (**CONSUMED**) |
| **Gate D2 implement** | `GO IMPLEMENT T-A6 DELIVERY D2` (**CONSUMED**) |
| **Gate D2 validate** | `GO VALIDATE T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` |
| **Runtime D1** | **VALIDATED** (après correction) |
| **Runtime D2** | ReviewBundle — **VALIDATED AFTER CORRECTION** |
| **Fake-only / mémoire** | **oui** |
| **D3–D5** | **NON** lancés |
| **Push / PR / merge** | **NONE** |
| **Statut pack** | **T-A6-D2 VALIDATED AFTER CORRECTION** |
| **Horodatage D2 validate** | 2026-07-26 10:12:00 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE VALIDATED AFTER CORRECTION — D3 REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Livrables

1. [README.md](./README.md)
2. [01](./01-framing.md) … [11-delivery-d2-implementation.md](./11-delivery-d2-implementation.md)
3. [12-delivery-d2-validation.md](./12-delivery-d2-validation.md)
4. Runtime : `app/lib/oa/evidence-review/**` (D1+D2)
5. Tests : `app/__tests__/oa/evidence-review/**`

## D2 validé

Create / Attach / Remove / Freeze / StartReview / CompleteReview / ReopenReview · OCC mémoire · EvidenceReader RO · reopen atomique · completeness availability-aware · 87 tests D1+D2 PASS

## Corrections validation

- F-A6-D2-01 reopen atomique
- F-A6-D2-02 completeness unavailable
- F-A6-D2-03 secret actor reopen

## Réserves (OPEN)

B5 · R1 · R-T-A3-1..4 (HARD 1–2) · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

## Anti-claims

Pas D3 READY / ClaimEvaluation / persistence réelle / T-A7 / R-M01 fermée / C1–C4 validées
```

## 9. Diff utile complet — corrections (`ac305fe`)

```diff
commit ac305fec3183e14b1715acf0ecc238c0621ae556
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 10:11:21 2026 +0200

    fix(sfia-studio): correct T-A6 D2 validation findings

    Make ReopenReview memory writes atomic, compute draft completeness from
    Evidence availability snapshots, and reject secrets in reopen actor names.

    Co-authored-by: Cursor <cursoragent@cursor.com>
---
 .../adversarialReviewBundleValidation.test.ts      | 244 +++++++++++++++++++++
 .../application/attachEvidenceToReviewBundle.ts    |  17 +-
 .../application/createReviewBundle.ts              |  17 +-
 .../evidence-review/application/evidenceSupport.ts |  26 +++
 .../application/removeEvidenceFromReviewBundle.ts  |  14 ++
 .../oa/evidence-review/application/reopenReview.ts |  23 +-
 .../app/lib/oa/evidence-review/index.ts            |   1 +
 .../infrastructure/memoryReviewBundleRepository.ts |  93 ++++++++
 .../ports/reviewBundleRepository.ts                |  10 +
 9 files changed, 423 insertions(+), 22 deletions(-)

diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts
new file mode 100644
index 0000000..d6385bd
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts
@@ -0,0 +1,244 @@
+/**
+ * T-A6-D2 adversarial validation — freeze immutability, reopen atomicity,
+ * unavailable completeness, actor secrets.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { ACTOR, DIGEST_A, buildServices } from "./helpers";
+
+async function seedEvidence(
+  s: ReturnType<typeof buildServices>,
+  id: string,
+  opts?: { unavailable?: boolean },
+) {
+  const reg = await s.registerEvidence.execute({
+    evidenceId: id,
+    idempotencyKey: `idem-${id}`,
+    actor: ACTOR,
+    type: "document",
+    source: "fixture",
+    sourceKind: "manual",
+    bindings: { projectId: "prj:campus360-oa" },
+    classification: "internal",
+    storageMode: "metadata_only",
+    digest: DIGEST_A,
+  });
+  expect(reg.ok).toBe(true);
+  if (opts?.unavailable && reg.ok) {
+    await s.markEvidenceUnavailable.execute({
+      evidenceId: id,
+      actor: ACTOR,
+      expectedVersion: 1,
+      reason: "withdrawn",
+      idempotencyKey: `idem-unavail-${id}`,
+    });
+  }
+}
+
+async function toAccepted(
+  s: ReturnType<typeof buildServices>,
+  rbId: string,
+  evidenceId: string,
+) {
+  await seedEvidence(s, evidenceId);
+  await s.createReviewBundle.execute({
+    reviewBundleId: rbId,
+    idempotencyKey: `idem-create-${rbId}`,
+    actor: ACTOR,
+    projectId: "prj:campus360-oa",
+    evidenceIds: [evidenceId],
+  });
+  await s.freezeReviewBundle.execute({
+    reviewBundleId: rbId,
+    idempotencyKey: `idem-f-${rbId}`,
+    actor: ACTOR,
+    expectedVersion: 1,
+  });
+  await s.startReview.execute({
+    reviewBundleId: rbId,
+    idempotencyKey: `idem-s-${rbId}`,
+    actor: ACTOR,
+    expectedVersion: 2,
+  });
+  const accepted = await s.completeReview.execute({
+    reviewBundleId: rbId,
+    idempotencyKey: `idem-a-${rbId}`,
+    actor: ACTOR,
+    expectedVersion: 3,
+    outcome: "accepted",
+  });
+  expect(accepted.ok).toBe(true);
+  return accepted;
+}
+
+describe("T-A6-D2 adversarial — completeness / unavailable", () => {
+  it("marks draft incomplete when attached Evidence is unavailable", async () => {
+    const s = buildServices();
+    await seedEvidence(s, "ev:adv-unavail", { unavailable: true });
+    const created = await s.createReviewBundle.execute({
+      reviewBundleId: "rb:adv-unavail",
+      idempotencyKey: "idem-adv-unavail-create",
+      actor: ACTOR,
+      projectId: "prj:campus360-oa",
+      evidenceIds: ["ev:adv-unavail"],
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) return;
+    expect(created.reviewBundle.completeness).toBe("incomplete");
+
+    const frozen = await s.freezeReviewBundle.execute({
+      reviewBundleId: "rb:adv-unavail",
+      idempotencyKey: "idem-adv-unavail-freeze",
+      actor: ACTOR,
+      expectedVersion: 1,
+    });
+    expect(frozen.ok).toBe(true);
+    if (!frozen.ok) return;
+    expect(frozen.reviewBundle.completeness).toBe("incomplete");
+    expect(frozen.reviewBundle.frozenEvidenceSnapshots?.[0]?.availability).toBe(
+      "unavailable",
+    );
+
+    await s.startReview.execute({
+      reviewBundleId: "rb:adv-unavail",
+      idempotencyKey: "idem-adv-unavail-start",
+      actor: ACTOR,
+      expectedVersion: 2,
+    });
+    const accepted = await s.completeReview.execute({
+      reviewBundleId: "rb:adv-unavail",
+      idempotencyKey: "idem-adv-unavail-acc",
+      actor: ACTOR,
+      expectedVersion: 3,
+      outcome: "accepted",
+    });
+    expect(accepted.ok).toBe(false);
+    if (accepted.ok) return;
+    expect(accepted.error.detailCode).toBe("REVIEW_BUNDLE_INCOMPLETE");
+  });
+});
+
+describe("T-A6-D2 adversarial — freeze snapshot immutability", () => {
+  it("keeps frozen Evidence version after Evidence mutation", async () => {
+    const s = buildServices();
+    await seedEvidence(s, "ev:adv-snap");
+    await s.createReviewBundle.execute({
+      reviewBundleId: "rb:adv-snap",
+      idempotencyKey: "idem-adv-snap-c",
+      actor: ACTOR,
+      projectId: "prj:campus360-oa",
+      evidenceIds: ["ev:adv-snap"],
+    });
+    const frozen = await s.freezeReviewBundle.execute({
+      reviewBundleId: "rb:adv-snap",
+      idempotencyKey: "idem-adv-snap-f",
+      actor: ACTOR,
+      expectedVersion: 1,
+    });
+    expect(frozen.ok).toBe(true);
+    if (!frozen.ok) return;
+    const frozenVersion =
+      frozen.reviewBundle.frozenEvidenceSnapshots?.[0]?.evidenceVersion;
+    expect(frozenVersion).toBe(1);
+
+    const marked = await s.markEvidenceUnavailable.execute({
+      evidenceId: "ev:adv-snap",
+      actor: ACTOR,
+      expectedVersion: 1,
+      reason: "later withdrawal",
+      idempotencyKey: "idem-adv-snap-u",
+    });
+    expect(marked.ok).toBe(true);
+    if (!marked.ok) return;
+    expect(marked.evidence.version).toBe(2);
+
+    const still = await s.reviewBundleRepository.findById("rb:adv-snap");
+    expect(still?.frozenEvidenceSnapshots?.[0]?.evidenceVersion).toBe(1);
+    expect(still?.frozenEvidenceSnapshots?.[0]?.availability).not.toBe(
+      "unavailable",
+    );
+
+    // external mutation of returned snapshot must not corrupt store
+    still!.frozenEvidenceSnapshots![0].evidenceVersion = 999;
+    const again = await s.reviewBundleRepository.findById("rb:adv-snap");
+    expect(again?.frozenEvidenceSnapshots?.[0]?.evidenceVersion).toBe(1);
+  });
+});
+
+describe("T-A6-D2 adversarial — reopen atomicity / idempotence", () => {
+  it("fails closed on forced save — no orphan successor, retry succeeds", async () => {
+    const s = buildServices();
+    await toAccepted(s, "rb:adv-atom-old", "ev:adv-atom");
+
+    s.reviewBundleStore.failNextSave = true;
+    const failed = await s.reopenReview.execute({
+      reviewBundleId: "rb:adv-atom-old",
+      successorReviewBundleId: "rb:adv-atom-new",
+      idempotencyKey: "idem-adv-atom-reopen",
+      actor: ACTOR,
+      expectedVersion: 4,
+      reason: "retry after forced failure",
+    });
+    expect(failed.ok).toBe(false);
+    if (failed.ok) return;
+    expect(failed.error.detailCode).toBe("REVIEW_BUNDLE_PERSISTENCE_FAILED");
+
+    expect(await s.reviewBundleRepository.findById("rb:adv-atom-new")).toBeNull();
+    const old = await s.reviewBundleRepository.findById("rb:adv-atom-old");
+    expect(old?.status).toBe("accepted");
+    expect(old?.version).toBe(4);
+
+    const retry = await s.reopenReview.execute({
+      reviewBundleId: "rb:adv-atom-old",
+      successorReviewBundleId: "rb:adv-atom-new",
+      idempotencyKey: "idem-adv-atom-reopen",
+      actor: ACTOR,
+      expectedVersion: 4,
+      reason: "retry after forced failure",
+    });
+    expect(retry.ok).toBe(true);
+    if (!retry.ok) return;
+    expect(retry.reviewBundle.status).toBe("superseded");
+    expect(retry.successor?.reviewBundleId).toBe("rb:adv-atom-new");
+    expect(retry.successor?.status).toBe("draft");
+
+    const replay = await s.reopenReview.execute({
+      reviewBundleId: "rb:adv-atom-old",
+      successorReviewBundleId: "rb:adv-atom-new",
+      idempotencyKey: "idem-adv-atom-reopen",
+      actor: ACTOR,
+      expectedVersion: 4,
+      reason: "retry after forced failure",
+    });
+    expect(replay.ok).toBe(true);
+    if (!replay.ok) return;
+    expect(replay.reusedFromIdempotencyKey).toBe(true);
+    expect(replay.successor?.reviewBundleId).toBe("rb:adv-atom-new");
+
+    // no second successor from same idempotency key
+    const allIds = [...s.reviewBundleStore.bundles.keys()].filter((id) =>
+      id.startsWith("rb:adv-atom"),
+    );
+    expect(allIds.sort()).toEqual(["rb:adv-atom-new", "rb:adv-atom-old"]);
+  });
+
+  it("refuses secret in reopen actor displayName", async () => {
+    const s = buildServices();
+    await toAccepted(s, "rb:adv-sec-old", "ev:adv-sec");
+    const result = await s.reopenReview.execute({
+      reviewBundleId: "rb:adv-sec-old",
+      successorReviewBundleId: "rb:adv-sec-new",
+      idempotencyKey: "idem-adv-sec-reopen",
+      actor: {
+        ...ACTOR,
+        displayName: "bearer token=leak-me-now-please",
+      },
+      expectedVersion: 4,
+      reason: "safe reason",
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.detailCode).toBe("REVIEW_BUNDLE_SECRET_FORBIDDEN");
+    expect(await s.reviewBundleRepository.findById("rb:adv-sec-new")).toBeNull();
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/attachEvidenceToReviewBundle.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/attachEvidenceToReviewBundle.ts
index bbcc134..900ac24 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/attachEvidenceToReviewBundle.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/attachEvidenceToReviewBundle.ts
@@ -26,6 +26,7 @@ import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository
 import {
   assertIdempotencyKey,
   fingerprintCommand,
+  readEvidenceSnapshotsForCompleteness,
   registerFingerprintBody,
 } from "./evidenceSupport";

@@ -169,18 +170,24 @@ export class AttachEvidenceToReviewBundle {
         );
       }

-      const ev = await this.evidence.findById(request.evidenceId);
-      if (!ev) {
-        return fail("EVIDENCE_NOT_FOUND", "missing_evidence");
-      }
-
       const evidenceRefs = sortEvidenceRefs([
         ...current.evidenceRefs,
         request.evidenceId,
       ]);
+      const snapshotRead = await readEvidenceSnapshotsForCompleteness(
+        this.evidence,
+        evidenceRefs,
+      );
+      if (!snapshotRead.ok) {
+        return fail("EVIDENCE_NOT_FOUND", "missing_evidence", {
+          evidenceId: snapshotRead.missingId,
+        });
+      }
+
       const completeness = computeCompleteness({
         evidenceRefs,
         synthesisOnly: current.synthesisOnly,
+        snapshots: snapshotRead.snapshots,
       });

       const updated: ReviewBundle = {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/createReviewBundle.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/createReviewBundle.ts
index a6e2d28..61f76f1 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/createReviewBundle.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/createReviewBundle.ts
@@ -34,6 +34,7 @@ import {
   assertIdempotencyKey,
   buildProvenance,
   fingerprintCommand,
+  readEvidenceSnapshotsForCompleteness,
   registerFingerprintBody,
 } from "./evidenceSupport";

@@ -135,14 +136,17 @@ export class CreateReviewBundle {
         );
       }

-      for (const evidenceId of evidenceIds) {
-        const ev = await this.evidence.findById(evidenceId);
-        if (!ev) {
-          return fail("EVIDENCE_NOT_FOUND", "missing_evidence", { evidenceId });
-        }
+      const evidenceRefs = sortEvidenceRefs(evidenceIds);
+      const snapshotRead = await readEvidenceSnapshotsForCompleteness(
+        this.evidence,
+        evidenceRefs,
+      );
+      if (!snapshotRead.ok) {
+        return fail("EVIDENCE_NOT_FOUND", "missing_evidence", {
+          evidenceId: snapshotRead.missingId,
+        });
       }

-      const evidenceRefs = sortEvidenceRefs(evidenceIds);
       const fingerprint = fingerprintCommand(
         registerFingerprintBody({
           reviewBundleId: request.reviewBundleId,
@@ -190,6 +194,7 @@ export class CreateReviewBundle {
       const completeness = computeCompleteness({
         evidenceRefs,
         synthesisOnly,
+        snapshots: snapshotRead.snapshots,
       });

       const bundle: ReviewBundle = {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts
index b195aba..51c7080 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts
@@ -1,6 +1,8 @@
 import { createHash } from "node:crypto";
 import type { ProvenanceRecord } from "@/lib/oa/doctrine";
+import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
 import type { ActorReference } from "../domain/types";
+import type { EvidenceReaderPort } from "../ports/evidenceReader";
 import type { IdGeneratorPort } from "../ports/idGenerator";
 import { IDEMPOTENCY_KEY_MIN_LENGTH } from "../domain/invariants";

@@ -49,6 +51,30 @@ export function buildProvenance(input: {
   };
 }

+/** Read-only Evidence metadata for completeness (never payloads). */
+export async function readEvidenceSnapshotsForCompleteness(
+  reader: EvidenceReaderPort,
+  evidenceIds: string[],
+): Promise<
+  | { ok: true; snapshots: ReviewBundleEvidenceSnapshot[] }
+  | { ok: false; missingId: string }
+> {
+  const snapshots: ReviewBundleEvidenceSnapshot[] = [];
+  for (const evidenceId of evidenceIds) {
+    const ev = await reader.findById(evidenceId);
+    if (!ev) {
+      return { ok: false, missingId: evidenceId };
+    }
+    snapshots.push({
+      evidenceId: ev.evidenceId,
+      evidenceVersion: ev.version,
+      status: ev.status,
+      availability: ev.availability,
+    });
+  }
+  return { ok: true, snapshots };
+}
+
 /** Register/ingest fingerprint ignores volatile actor display fields beyond actorId+role. */
 export function registerFingerprintBody(
   request: Record<string, unknown>,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/removeEvidenceFromReviewBundle.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/removeEvidenceFromReviewBundle.ts
index b5df2a0..0d2f41d 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/removeEvidenceFromReviewBundle.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/removeEvidenceFromReviewBundle.ts
@@ -20,17 +20,20 @@ import type {
 } from "../domain/reviewBundleTypes";
 import { isEvidenceId } from "../domain/invariants";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
+import type { EvidenceReaderPort } from "../ports/evidenceReader";
 import type { IdGeneratorPort } from "../ports/idGenerator";
 import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
 import {
   assertIdempotencyKey,
   fingerprintCommand,
+  readEvidenceSnapshotsForCompleteness,
   registerFingerprintBody,
 } from "./evidenceSupport";

 export class RemoveEvidenceFromReviewBundle {
   constructor(
     private readonly repo: ReviewBundleRepositoryPort,
+    private readonly evidence: EvidenceReaderPort,
     private readonly clock: ClockPort,
     private readonly audit: EvidenceAuditPort,
     private readonly ids: IdGeneratorPort,
@@ -170,9 +173,20 @@ export class RemoveEvidenceFromReviewBundle {
       const evidenceRefs = sortEvidenceRefs(
         current.evidenceRefs.filter((id) => id !== request.evidenceId),
       );
+      const snapshotRead = await readEvidenceSnapshotsForCompleteness(
+        this.evidence,
+        evidenceRefs,
+      );
+      if (!snapshotRead.ok) {
+        return fail("EVIDENCE_NOT_FOUND", "missing_evidence", {
+          evidenceId: snapshotRead.missingId,
+          reviewBundle: current,
+        });
+      }
       const completeness = computeCompleteness({
         evidenceRefs,
         synthesisOnly: current.synthesisOnly,
+        snapshots: snapshotRead.snapshots,
       });

       const updated: ReviewBundle = {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/reopenReview.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/reopenReview.ts
index ee40cfb..6dc7ba4 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/reopenReview.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/reopenReview.ts
@@ -116,6 +116,9 @@ export class ReopenReview {
       if (containsForbiddenSecret(request.reason)) {
         return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_reopen_reason");
       }
+      if (containsForbiddenSecret(request.actor.displayName)) {
+        return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_actor");
+      }

       const fingerprint = fingerprintCommand(
         registerFingerprintBody({
@@ -254,19 +257,17 @@ export class ReopenReview {
         });
       }

-      // Create successor first so idempotent reuse can resolve successorId.
-      await this.repo.create(successor);
-
-      const reopenRecord = {
-        reviewBundleId: superseded.reviewBundleId,
-        fingerprint,
-        operation: "reopen_review" as const,
-        successorId: successor.reviewBundleId,
-      };
-      await this.repo.update(
+      // Atomic memory write: successor + superseded + idempotency, or nothing.
+      await this.repo.createSuccessorAndMarkSuperseded(
+        successor,
         superseded,
         request.expectedVersion,
-        reopenRecord,
+        {
+          reviewBundleId: superseded.reviewBundleId,
+          fingerprint,
+          operation: "reopen_review",
+          successorId: successor.reviewBundleId,
+        },
       );

       const durationMs = Date.now() - started;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 50b1506..588a935 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -190,6 +190,7 @@ export function createInMemoryEvidenceReviewServices(
     ),
     removeEvidenceFromReviewBundle: new RemoveEvidenceFromReviewBundle(
       reviewBundleRepository,
+      evidenceReader,
       clock,
       audit,
       ids,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
index f091962..f3f2467 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
@@ -114,6 +114,99 @@ export class MemoryReviewBundleRepository
     }
   }

+  async createSuccessorAndMarkSuperseded(
+    successor: ReviewBundle,
+    superseded: ReviewBundle,
+    expectedVersion: number,
+    record: ReviewBundleIdempotencyRecord & { successorId: string },
+  ): Promise<void> {
+    const successorShape = validateReviewBundleShape(successor);
+    if (successorShape) {
+      throw new ReviewBundleDomainError(
+        successorShape.detailCode,
+        successorShape.reason,
+      );
+    }
+    const supersededShape = validateReviewBundleShape(superseded);
+    if (supersededShape) {
+      throw new ReviewBundleDomainError(
+        supersededShape.detailCode,
+        supersededShape.reason,
+      );
+    }
+    if (successor.version !== 1) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "successor_requires_version_1",
+      );
+    }
+    if (superseded.status !== "superseded") {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "source_must_be_superseded",
+      );
+    }
+    if (record.successorId !== successor.reviewBundleId) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "record_successor_id_mismatch",
+      );
+    }
+    if (successor.reviewBundleId === superseded.reviewBundleId) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "successor_must_differ_from_source",
+      );
+    }
+
+    const current = this.store.bundles.get(superseded.reviewBundleId);
+    if (!current) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_NOT_FOUND",
+        "reopen_source_missing",
+      );
+    }
+    if (current.version !== expectedVersion) {
+      throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
+        expectedVersion,
+        currentVersion: current.version,
+      });
+    }
+    if (superseded.version !== expectedVersion + 1) {
+      throw new ReviewBundleDomainError(
+        "VERSION_CONFLICT",
+        "version_not_monotone",
+        { expectedVersion, currentVersion: current.version },
+      );
+    }
+    if (this.store.bundles.has(successor.reviewBundleId)) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_ALREADY_EXISTS",
+        "successor_review_bundle_id_taken",
+      );
+    }
+    if (!superseded.idempotencyKey) {
+      throw new ReviewBundleDomainError(
+        "REVIEW_BUNDLE_INVALID",
+        "reopen_idempotency_key_required",
+      );
+    }
+
+    // Fail-closed before any mutation — no orphan successor / half-supersede.
+    this.failIfForced();
+    this.store.bundles.set(
+      successor.reviewBundleId,
+      structuredClone(successor),
+    );
+    this.store.bundles.set(
+      superseded.reviewBundleId,
+      structuredClone(superseded),
+    );
+    this.store.idempotencyIndex.set(superseded.idempotencyKey, {
+      ...structuredClone(record),
+    });
+  }
+
   private failIfForced(): void {
     if (this.store.failNextSave) {
       this.store.failNextSave = false;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
index 6d2d4ad..2a42452 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
@@ -32,4 +32,14 @@ export interface ReviewBundleRepositoryPort {
     expectedVersion: number,
     record?: ReviewBundleIdempotencyRecord,
   ): Promise<void>;
+  /**
+   * Atomic reopen for memory D2: create successor draft + mark source
+   * superseded + write idempotency index, or mutate nothing.
+   */
+  createSuccessorAndMarkSuperseded(
+    successor: ReviewBundle,
+    superseded: ReviewBundle,
+    expectedVersion: number,
+    record: ReviewBundleIdempotencyRecord & { successorId: string },
+  ): Promise<void>;
 }
```

## 10. Contenu complet — tests adversariaux D2

### `adversarialReviewBundleValidation.test.ts`

```typescript
/**
 * T-A6-D2 adversarial validation — freeze immutability, reopen atomicity,
 * unavailable completeness, actor secrets.
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

async function toAccepted(
  s: ReturnType<typeof buildServices>,
  rbId: string,
  evidenceId: string,
) {
  await seedEvidence(s, evidenceId);
  await s.createReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-create-${rbId}`,
    actor: ACTOR,
    projectId: "prj:campus360-oa",
    evidenceIds: [evidenceId],
  });
  await s.freezeReviewBundle.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-f-${rbId}`,
    actor: ACTOR,
    expectedVersion: 1,
  });
  await s.startReview.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-s-${rbId}`,
    actor: ACTOR,
    expectedVersion: 2,
  });
  const accepted = await s.completeReview.execute({
    reviewBundleId: rbId,
    idempotencyKey: `idem-a-${rbId}`,
    actor: ACTOR,
    expectedVersion: 3,
    outcome: "accepted",
  });
  expect(accepted.ok).toBe(true);
  return accepted;
}

describe("T-A6-D2 adversarial — completeness / unavailable", () => {
  it("marks draft incomplete when attached Evidence is unavailable", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:adv-unavail", { unavailable: true });
    const created = await s.createReviewBundle.execute({
      reviewBundleId: "rb:adv-unavail",
      idempotencyKey: "idem-adv-unavail-create",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:adv-unavail"],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    expect(created.reviewBundle.completeness).toBe("incomplete");

    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:adv-unavail",
      idempotencyKey: "idem-adv-unavail-freeze",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    expect(frozen.reviewBundle.completeness).toBe("incomplete");
    expect(frozen.reviewBundle.frozenEvidenceSnapshots?.[0]?.availability).toBe(
      "unavailable",
    );

    await s.startReview.execute({
      reviewBundleId: "rb:adv-unavail",
      idempotencyKey: "idem-adv-unavail-start",
      actor: ACTOR,
      expectedVersion: 2,
    });
    const accepted = await s.completeReview.execute({
      reviewBundleId: "rb:adv-unavail",
      idempotencyKey: "idem-adv-unavail-acc",
      actor: ACTOR,
      expectedVersion: 3,
      outcome: "accepted",
    });
    expect(accepted.ok).toBe(false);
    if (accepted.ok) return;
    expect(accepted.error.detailCode).toBe("REVIEW_BUNDLE_INCOMPLETE");
  });
});

describe("T-A6-D2 adversarial — freeze snapshot immutability", () => {
  it("keeps frozen Evidence version after Evidence mutation", async () => {
    const s = buildServices();
    await seedEvidence(s, "ev:adv-snap");
    await s.createReviewBundle.execute({
      reviewBundleId: "rb:adv-snap",
      idempotencyKey: "idem-adv-snap-c",
      actor: ACTOR,
      projectId: "prj:campus360-oa",
      evidenceIds: ["ev:adv-snap"],
    });
    const frozen = await s.freezeReviewBundle.execute({
      reviewBundleId: "rb:adv-snap",
      idempotencyKey: "idem-adv-snap-f",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const frozenVersion =
      frozen.reviewBundle.frozenEvidenceSnapshots?.[0]?.evidenceVersion;
    expect(frozenVersion).toBe(1);

    const marked = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:adv-snap",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "later withdrawal",
      idempotencyKey: "idem-adv-snap-u",
    });
    expect(marked.ok).toBe(true);
    if (!marked.ok) return;
    expect(marked.evidence.version).toBe(2);

    const still = await s.reviewBundleRepository.findById("rb:adv-snap");
    expect(still?.frozenEvidenceSnapshots?.[0]?.evidenceVersion).toBe(1);
    expect(still?.frozenEvidenceSnapshots?.[0]?.availability).not.toBe(
      "unavailable",
    );

    // external mutation of returned snapshot must not corrupt store
    still!.frozenEvidenceSnapshots![0].evidenceVersion = 999;
    const again = await s.reviewBundleRepository.findById("rb:adv-snap");
    expect(again?.frozenEvidenceSnapshots?.[0]?.evidenceVersion).toBe(1);
  });
});

describe("T-A6-D2 adversarial — reopen atomicity / idempotence", () => {
  it("fails closed on forced save — no orphan successor, retry succeeds", async () => {
    const s = buildServices();
    await toAccepted(s, "rb:adv-atom-old", "ev:adv-atom");

    s.reviewBundleStore.failNextSave = true;
    const failed = await s.reopenReview.execute({
      reviewBundleId: "rb:adv-atom-old",
      successorReviewBundleId: "rb:adv-atom-new",
      idempotencyKey: "idem-adv-atom-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "retry after forced failure",
    });
    expect(failed.ok).toBe(false);
    if (failed.ok) return;
    expect(failed.error.detailCode).toBe("REVIEW_BUNDLE_PERSISTENCE_FAILED");

    expect(await s.reviewBundleRepository.findById("rb:adv-atom-new")).toBeNull();
    const old = await s.reviewBundleRepository.findById("rb:adv-atom-old");
    expect(old?.status).toBe("accepted");
    expect(old?.version).toBe(4);

    const retry = await s.reopenReview.execute({
      reviewBundleId: "rb:adv-atom-old",
      successorReviewBundleId: "rb:adv-atom-new",
      idempotencyKey: "idem-adv-atom-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "retry after forced failure",
    });
    expect(retry.ok).toBe(true);
    if (!retry.ok) return;
    expect(retry.reviewBundle.status).toBe("superseded");
    expect(retry.successor?.reviewBundleId).toBe("rb:adv-atom-new");
    expect(retry.successor?.status).toBe("draft");

    const replay = await s.reopenReview.execute({
      reviewBundleId: "rb:adv-atom-old",
      successorReviewBundleId: "rb:adv-atom-new",
      idempotencyKey: "idem-adv-atom-reopen",
      actor: ACTOR,
      expectedVersion: 4,
      reason: "retry after forced failure",
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.reusedFromIdempotencyKey).toBe(true);
    expect(replay.successor?.reviewBundleId).toBe("rb:adv-atom-new");

    // no second successor from same idempotency key
    const allIds = [...s.reviewBundleStore.bundles.keys()].filter((id) =>
      id.startsWith("rb:adv-atom"),
    );
    expect(allIds.sort()).toEqual(["rb:adv-atom-new", "rb:adv-atom-old"]);
  });

  it("refuses secret in reopen actor displayName", async () => {
    const s = buildServices();
    await toAccepted(s, "rb:adv-sec-old", "ev:adv-sec");
    const result = await s.reopenReview.execute({
      reviewBundleId: "rb:adv-sec-old",
      successorReviewBundleId: "rb:adv-sec-new",
      idempotencyKey: "idem-adv-sec-reopen",
      actor: {
        ...ACTOR,
        displayName: "bearer token=leak-me-now-please",
      },
      expectedVersion: 4,
      reason: "safe reason",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("REVIEW_BUNDLE_SECRET_FORBIDDEN");
    expect(await s.reviewBundleRepository.findById("rb:adv-sec-new")).toBeNull();
  });
});
```

## 11. Contenu complet — fichiers runtime corrigés

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
  /**
   * Atomic reopen for memory D2: create successor draft + mark source
   * superseded + write idempotency index, or mutate nothing.
   */
  createSuccessorAndMarkSuperseded(
    successor: ReviewBundle,
    superseded: ReviewBundle,
    expectedVersion: number,
    record: ReviewBundleIdempotencyRecord & { successorId: string },
  ): Promise<void>;
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

  async createSuccessorAndMarkSuperseded(
    successor: ReviewBundle,
    superseded: ReviewBundle,
    expectedVersion: number,
    record: ReviewBundleIdempotencyRecord & { successorId: string },
  ): Promise<void> {
    const successorShape = validateReviewBundleShape(successor);
    if (successorShape) {
      throw new ReviewBundleDomainError(
        successorShape.detailCode,
        successorShape.reason,
      );
    }
    const supersededShape = validateReviewBundleShape(superseded);
    if (supersededShape) {
      throw new ReviewBundleDomainError(
        supersededShape.detailCode,
        supersededShape.reason,
      );
    }
    if (successor.version !== 1) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "successor_requires_version_1",
      );
    }
    if (superseded.status !== "superseded") {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "source_must_be_superseded",
      );
    }
    if (record.successorId !== successor.reviewBundleId) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "record_successor_id_mismatch",
      );
    }
    if (successor.reviewBundleId === superseded.reviewBundleId) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "successor_must_differ_from_source",
      );
    }

    const current = this.store.bundles.get(superseded.reviewBundleId);
    if (!current) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_NOT_FOUND",
        "reopen_source_missing",
      );
    }
    if (current.version !== expectedVersion) {
      throw new ReviewBundleDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (superseded.version !== expectedVersion + 1) {
      throw new ReviewBundleDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    if (this.store.bundles.has(successor.reviewBundleId)) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_ALREADY_EXISTS",
        "successor_review_bundle_id_taken",
      );
    }
    if (!superseded.idempotencyKey) {
      throw new ReviewBundleDomainError(
        "REVIEW_BUNDLE_INVALID",
        "reopen_idempotency_key_required",
      );
    }

    // Fail-closed before any mutation — no orphan successor / half-supersede.
    this.failIfForced();
    this.store.bundles.set(
      successor.reviewBundleId,
      structuredClone(successor),
    );
    this.store.bundles.set(
      superseded.reviewBundleId,
      structuredClone(superseded),
    );
    this.store.idempotencyIndex.set(superseded.idempotencyKey, {
      ...structuredClone(record),
    });
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
      if (containsForbiddenSecret(request.actor.displayName)) {
        return fail("REVIEW_BUNDLE_SECRET_FORBIDDEN", "secret_in_actor");
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

      // Atomic memory write: successor + superseded + idempotency, or nothing.
      await this.repo.createSuccessorAndMarkSuperseded(
        successor,
        superseded,
        request.expectedVersion,
        {
          reviewBundleId: superseded.reviewBundleId,
          fingerprint,
          operation: "reopen_review",
          successorId: successor.reviewBundleId,
        },
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
### `projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts`

```typescript
import { createHash } from "node:crypto";
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import type { ActorReference } from "../domain/types";
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import { IDEMPOTENCY_KEY_MIN_LENGTH } from "../domain/invariants";

export function fingerprintCommand(payload: unknown): string {
  return createHash("sha256")
    .update(stableStringify(payload))
    .digest("hex");
}

function stableStringify(value: unknown): string {
  if (value === null || typeof value !== "object") {
    return JSON.stringify(value);
  }
  if (Array.isArray(value)) {
    return `[${value.map((v) => stableStringify(v)).join(",")}]`;
  }
  const obj = value as Record<string, unknown>;
  const keys = Object.keys(obj).sort();
  return `{${keys
    .map((k) => `${JSON.stringify(k)}:${stableStringify(obj[k])}`)
    .join(",")}}`;
}

export function assertIdempotencyKey(key: string): boolean {
  return typeof key === "string" && key.length >= IDEMPOTENCY_KEY_MIN_LENGTH;
}

export function buildProvenance(input: {
  ids: IdGeneratorPort;
  actor: ActorReference;
  source: ProvenanceRecord["source"];
  timestamp: string;
  correlationId: string;
  projectId?: string;
  cycleInstanceId?: string;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: input.ids.newProvenanceId(),
    actor: { ...input.actor },
    source: input.source,
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  };
}

/** Read-only Evidence metadata for completeness (never payloads). */
export async function readEvidenceSnapshotsForCompleteness(
  reader: EvidenceReaderPort,
  evidenceIds: string[],
): Promise<
  | { ok: true; snapshots: ReviewBundleEvidenceSnapshot[] }
  | { ok: false; missingId: string }
> {
  const snapshots: ReviewBundleEvidenceSnapshot[] = [];
  for (const evidenceId of evidenceIds) {
    const ev = await reader.findById(evidenceId);
    if (!ev) {
      return { ok: false, missingId: evidenceId };
    }
    snapshots.push({
      evidenceId: ev.evidenceId,
      evidenceVersion: ev.version,
      status: ev.status,
      availability: ev.availability,
    });
  }
  return { ok: true, snapshots };
}

/** Register/ingest fingerprint ignores volatile actor display fields beyond actorId+role. */
export function registerFingerprintBody(
  request: Record<string, unknown>,
): Record<string, unknown> {
  const rest: Record<string, unknown> = { ...request };
  delete rest.nowIso;
  delete rest.correlationId;
  const actor = rest.actor as ActorReference | undefined;
  delete rest.actor;
  return {
    ...rest,
    actor: actor
      ? {
          actorId: actor.actorId,
          role: actor.role,
        }
      : undefined,
  };
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
  readEvidenceSnapshotsForCompleteness,
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

      const evidenceRefs = sortEvidenceRefs(evidenceIds);
      const snapshotRead = await readEvidenceSnapshotsForCompleteness(
        this.evidence,
        evidenceRefs,
      );
      if (!snapshotRead.ok) {
        return fail("EVIDENCE_NOT_FOUND", "missing_evidence", {
          evidenceId: snapshotRead.missingId,
        });
      }

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
        snapshots: snapshotRead.snapshots,
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
  readEvidenceSnapshotsForCompleteness,
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

      const evidenceRefs = sortEvidenceRefs([
        ...current.evidenceRefs,
        request.evidenceId,
      ]);
      const snapshotRead = await readEvidenceSnapshotsForCompleteness(
        this.evidence,
        evidenceRefs,
      );
      if (!snapshotRead.ok) {
        return fail("EVIDENCE_NOT_FOUND", "missing_evidence", {
          evidenceId: snapshotRead.missingId,
        });
      }

      const completeness = computeCompleteness({
        evidenceRefs,
        synthesisOnly: current.synthesisOnly,
        snapshots: snapshotRead.snapshots,
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
import type { EvidenceReaderPort } from "../ports/evidenceReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import type { ReviewBundleRepositoryPort } from "../ports/reviewBundleRepository";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  readEvidenceSnapshotsForCompleteness,
  registerFingerprintBody,
} from "./evidenceSupport";

export class RemoveEvidenceFromReviewBundle {
  constructor(
    private readonly repo: ReviewBundleRepositoryPort,
    private readonly evidence: EvidenceReaderPort,
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
      const snapshotRead = await readEvidenceSnapshotsForCompleteness(
        this.evidence,
        evidenceRefs,
      );
      if (!snapshotRead.ok) {
        return fail("EVIDENCE_NOT_FOUND", "missing_evidence", {
          evidenceId: snapshotRead.missingId,
          reviewBundle: current,
        });
      }
      const completeness = computeCompleteness({
        evidenceRefs,
        synthesisOnly: current.synthesisOnly,
        snapshots: snapshotRead.snapshots,
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


## 12. Gate suivant

`GO IMPLEMENT T-A6 DELIVERY D3 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## 13. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D2 REVIEW BUNDLE VALIDATED AFTER CORRECTION — D3 REQUIRES MORRIS GO`
