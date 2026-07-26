# SFIA Review Pack — FULL — T-A6 D1 Evidence Core Implementation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 02:44:17 CEST (+0200) |
| **Cycle** | Delivery — implémentation / T-A6-D1 Evidence core |
| **Profil** | Critical |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `c2507c370abd04ed274f972c9e6e0aa674f6b106` |
| **HEAD final** | `dc1c7f5f524adedc57e2b42b9ecec77ec9731836` |
| **Commits locaux** | `31aebb3` feat D1 evidence core · `dc1c7f5` record HEAD |
| **Push projet / PR / merge** | **NON / NON / NON** |
| **D2–D5** | **NON** implémentés |
| **Modeled / T-A3 / T-A4 / T-A5** | **NON** modifiés |
| **SQL / API/UI / T-A7 / adapter réel / exécution** | **ABSENT / ABSENTES / NON / ABSENT / ABSENTE** |
| **Décisions applicables** | D-T-A6-DEL-01,03,04,05,06,08,09,10 |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — branche/HEAD initial exacts ; HEAD final `dc1c7f5f524adedc57e2b42b9ecec77ec9731836` ; main/merge-base `b25c20e6…` ; tracked clean hors `.tmp-sfia-review/` ; staged vide ; pas d’op Git active ; pas de remote/PR T-A6 ; handoff source blob `91aa963b…` vérifié.

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
HEAD dc1c7f5f524adedc57e2b42b9ecec77ec9731836
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
HEAD 2e00ffb13a1fae5e9dd55b5859e8f1399fc25dbe
branch refs/heads/sfia/review-handoff
```

## 2. Handoff source

| Item | Valeur |
|------|--------|
| Branche | `sfia/review-handoff` |
| Path | `sfia-review-handoff/latest-chatgpt-review.md` |
| Commit | `2e00ffb13a1fae5e9dd55b5859e8f1399fc25dbe` |
| Blob | `91aa963b770eb2e44c3469f395b59ec33ce85d40` |
| Verdict | `… DELIVERY DECISIONS RECORDED — IMPLEMENTATION REQUIRES MORRIS GO` |

## 3. CKC

| Item | Valeur |
|------|--------|
| Cycle | delivery / architecture technique |
| Path | `…/pilots/03-architecture-technique.md` |
| Statut | candidate |
| `executionAuthority` | **false** |

## 4. Sources consultées

Template · routing · méthode · operating model · garde-fous · CKC · delivery 01–08 · modeled Evidence 0.2.0-oa · runtime T-A3–T-A5 RO · handoff décisions.

## 5. Fichiers

| Action | Paths |
|--------|-------|
| Créés | `app/lib/oa/evidence-review/**` (20 fichiers) · `app/__tests__/oa/evidence-review/**` (6) · `09-delivery-d1-implementation.md` |
| Modifiés | README T-A6 |
| Supprimés | aucun |
| Interdits touchés | **aucun** |

## 6. Arborescence D1

```
projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/markEvidenceUnavailable.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts
projects/sfia-studio/app/lib/oa/evidence-review/application/verifyEvidenceIntegrity.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/errors.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts
projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts
projects/sfia-studio/app/lib/oa/evidence-review/index.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeExecutionAttemptReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/idGenerator.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceStore.ts
projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/observability.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidencePayloadPort.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/executionAttemptReader.ts
projects/sfia-studio/app/lib/oa/evidence-review/ports/idGenerator.ts
```

## 7. Evidence model / invariants / use cases (synthèse)

- Module `evidence-review/**` ; 4 use cases ; OCC mémoire ; fake-only
- Ingest : succeeded + resultRef → Evidence `available` (jamais verified) ; Attempt immuable
- Verify : metadata-only digest compare → `verified`
- Mark unavailable : transition explicite, pas de cascade D2–D5
- Secrets rejetés ; Attempt ≠ owner ; succeeded ≠ PASS

## 8. Tests et résultats

| Suite | Résultat |
|-------|----------|
| D1 | **48 PASS** (`npm test -- __tests__/oa/evidence-review`) |
| T-A3 | **50 PASS** |
| T-A4 | **61 PASS** |
| T-A5 | **88 PASS** |
| Modeled T-A6 | **27 PASS** |
| typecheck | **PASS** |
| lint | **PASS** (fix unused vars) |
| secret scan lib | **CLEAN** |
| diff-check | **PASS** |

## 9. Findings

Aucun Critical / Major / Minor blocker.
Observations O1–O4 (cross-aggregate / self-review / bornes / LPS) — non blockers D1.

## 10. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 = **OPEN**
C1–C4 = **RECOMMENDED — NOT VALIDATED**

## 11. Validation finale

PASS — périmètre D1 seul ; fake-only ; pas de persistence réelle ; pas de payload exécuté ; pas de secret en lib ; tests/typecheck/lint/diff-check OK ; T-A3–T-A5/modeled/packages inchangés.

## 12. Commit local

| Commit | Message |
|--------|---------|
| `31aebb3fe06a963adcb9644b3c9b989fcef4f01a` | `feat(sfia-studio): implement T-A6 D1 evidence core` |
| `dc1c7f5f524adedc57e2b42b9ecec77ec9731836` | `docs(sfia-studio): record T-A6 D1 implementation HEAD` |

Push projet / PR / merge : **NON**

## 13. Contenu complet — `09-delivery-d1-implementation.md`

```markdown
# 09 — T-A6-D1 Evidence Core Implementation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D1 — Evidence core |
| **Cycle** | Delivery — implémentation (Critical) |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `c2507c370abd04ed274f972c9e6e0aa674f6b106` |
| **HEAD final** | `31aebb3fe06a963adcb9644b3c9b989fcef4f01a` |
| **Horodatage** | 2026-07-26 02:44:00 CEST (+0200) |
| **Handoff source** | blob `91aa963b770eb2e44c3469f395b59ec33ce85d40` |
| **Statut** | **T-A6-D1 IMPLEMENTED — NOT VALIDATED** |
| **Fake-only / mémoire** | **oui** |
| **SQL / API / UI / T-A7** | **ABSENT / ABSENTES / ABSENTES / NON** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources

- Delivery `01`…`08` + README T-A6
- Modeled Evidence `0.2.0-oa` + exemples + tests modeled
- Runtime T-A3 / T-A4 / T-A5 (lecture seule) — conventions Clock, Memory OCC, Audit, use-cases
- Template cycle + CKC architecture technique candidat

### CKC

| Item | Valeur |
|------|--------|
| Cycle | delivery / architecture technique |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |

---

## 2. Périmètre D1

### Inclus

- Domaine Evidence + invariants
- `RegisterEvidence`
- `IngestExecutionAttemptEvidence`
- `VerifyEvidenceIntegrity`
- `MarkEvidenceUnavailable`
- `EvidenceRepository` + `MemoryEvidenceRepository` + OCC
- `EvidencePayloadPort` + `FakeEvidencePayloadAdapter`
- `ExecutionAttemptReader` + `FakeExecutionAttemptReader`
- Audit refs-only, Clock doctrine, IdGenerator local
- Tests domaine / application / repository

### Hors périmètre

- ReviewBundle · ClaimEvaluation · MaturityAssessment · D2–D5
- Persistence réelle · SQL · API · UI · worker · scheduler
- Modification T-A3 / T-A4 / T-A5 / modeled
- Fermeture R-M01 · validation C1–C4 · vendor · T-A7 · exécution réelle

---

## 3. Architecture créée

**Statut :** IMPLEMENTED (D1) — NOT VALIDATED — NOT ADOPTED

Module unique (D-T-A6-DEL-01) :

`projects/sfia-studio/app/lib/oa/evidence-review/**`

### Arborescence réelle

```
evidence-review/
  domain/{types,errors,invariants}.ts
  application/
    registerEvidence.ts
    ingestExecutionAttemptEvidence.ts
    verifyEvidenceIntegrity.ts
    markEvidenceUnavailable.ts
    evidenceSupport.ts
  ports/
    evidenceRepository.ts
    evidencePayloadPort.ts
    executionAttemptReader.ts
    evidenceAudit.ts
    idGenerator.ts
  infrastructure/
    memoryEvidenceStore.ts
    memoryEvidenceRepository.ts
    fakeEvidencePayloadAdapter.ts
    fakeExecutionAttemptReader.ts
    idGenerator.ts
    observability.ts
  index.ts
```

Tests :

```
app/__tests__/oa/evidence-review/
  helpers.ts
  domainInvariants.test.ts
  registerEvidence.test.ts
  ingestExecutionAttemptEvidence.test.ts
  verifyAndUnavailable.test.ts
  evidenceRepository.test.ts
```

---

## 4. Domaine Evidence

Aligné modeled `0.2.0-oa` + champs runtime OCC (`version`, `createdAt`, `updatedAt`, `idempotencyKey`, `technicalResultRef`).

| Concept | Implémentation |
|---------|----------------|
| Identité | `ev:` + `isEvidenceId` |
| Bindings | ≥1 ; prefixes `xat:`/`xct:`/`cyc:`/`prj:`/`rb:` |
| Source / provenance | obligatoires ; Attempt = source ≠ owner |
| Classification | public\|internal\|confidential\|restricted |
| StorageMode | metadata_only\|internal_payload_ref\|external_payload_ref |
| Availability / freshness | enums modeled |
| Digest | `sha256:` + 64 hex ; obligatoire si verified / verifiablePayload |
| Retention / legalHold | metadata distincte ; legalHold ≠ effacement |
| Secrets | `containsSecrets: false` + heuristique fail-closed |

### Invariants fail-closed

- bindings non vides ; prefixes ; source/provenance
- secrets interdits dans source/location/reason
- verified / verifiablePayload ⇒ digest
- unavailable availability ⇒ status compatible
- Attempt never owner
- Register/Ingest n’écrivent jamais `verified`
- `succeeded` ≠ verified ≠ PASS
- version monotone via OCC repository

---

## 5. Use cases

### RegisterEvidence

Valide → crée Evidence candidate (`available` par défaut) → persist v1 → audit sans payload.
Idempotence fingerprint ; conflit `IDEMPOTENCY_CONFLICT`.
Refuse `sourceKind=execution_attempt` (utiliser Ingest).

### IngestExecutionAttemptEvidence

Lit Attempt via reader RO ; **n’accepte que** `status=succeeded` **avec** `resultRef` OA valide.
Refuse failed/running/absent/sans resultRef.
Crée Evidence `available` (jamais verified) avec bindings Attempt + Contract.
`technicalResultRef` = resultRef technique uniquement.
Attempt non muté ; aucune dépendance T-A5 → T-A6.

### VerifyEvidenceIntegrity

OCC `expectedVersion` ; refuse unavailable ; probe metadata-only ; compare digests ; passe à `verified` seulement si digest match.
Jamais de charge/exécution de payload.

### MarkEvidenceUnavailable

Transition explicite + motif safe + OCC + audit ; aucune cascade D2–D5.

---

## 6. Ports / adapters

| Port | Adapter D1 |
|------|------------|
| EvidenceRepository | MemoryEvidenceRepository |
| EvidencePayloadPort | FakeEvidencePayloadAdapter |
| ExecutionAttemptReader | FakeExecutionAttemptReader |
| EvidenceAudit | Memory / Console journals |
| Clock | doctrine SystemClock / FixedClock |
| IdGenerator | RandomIdGenerator / FixedIdGenerator |

Factories : `createInMemoryEvidenceReviewServices` · `createTestEvidenceReviewServices`.

---

## 7. OCC / idempotence

- create version=1 ; update expectedVersion + monotone +1
- erreurs `VERSION_CONFLICT` / `CONCURRENT_MODIFICATION` / `IDEMPOTENCY_CONFLICT`
- index idempotency isolé (fingerprint + operation)
- copies `structuredClone` ; pas de référence mutable exposée
- aucune transaction distribuée

---

## 8. Intégration T-A5

- Lecture seule via `ExecutionAttemptReaderPort`
- Commande explicite d’ingestion
- Aucun hook / polling / dépendance inverse
- Policy documentée : seuls Attempts **succeeded + resultRef**

---

## 9. Sécurité / RGPD / observabilité

- Rejet secrets/tokens ; fixtures adversariales sans données réelles
- Audit : IDs, statut, version, detailCode — jamais payload
- Minimisation ; legal hold distinct ; U-M02 OPEN
- Fake adapters : pas de réseau / shell / filesystem productif

---

## 10. Tests et résultats

| Suite | Commande | Résultat |
|-------|----------|----------|
| D1 Evidence | `npm test -- __tests__/oa/evidence-review` | **48 PASS** (~320ms) |
| T-A3 decision | `npm test -- __tests__/oa/decision` | **50 PASS** |
| T-A4 execution-contract | `npm test -- __tests__/oa/execution-contract` | **61 PASS** |
| T-A5 execution-attempt | `npm test -- __tests__/oa/execution-attempt` | **88 PASS** |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | **27 PASS** |
| Typecheck | `npm run typecheck` | **PASS** |
| Lint | `npm run lint` | **PASS** (warning ESLint legacy next lint OK after unused-fix fix) |
| Diff check | `git diff --check` | **PASS** |
| Secret scan lib | rg on `evidence-review/**` | **CLEAN** (adversarial strings only in tests) |

Build Next non exécuté (durée) — typecheck couvre le module.

---

## 11. Findings

| ID | Sévérité | Description | Blocker D1 |
|----|----------|-------------|------------|
| — | — | Aucun Critical / Major | — |

Observations (non blockers) :

- O1 — Validation cross-aggregate Evidence↔ReviewBundle reportée à D2+
- O2 — Self-review Critical runtime reporté (C2 candidate)
- O3 — Bornes taille/nombre payload reportées (C3 candidate)
- O4 — Propagation LPS reportée (C4 / B5)

Aucune correction post-findings requise.

---

## 12. Réserves / dettes

| ID | Statut |
|----|--------|
| B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 | **OPEN** (inchangés) |
| R-T-A6-DEL-C1…C4 | **RECOMMENDED — NOT VALIDATED** |

R-T-A3-1 / R-T-A3-2 restent HARD pour exécution réelle.
R-M01 : VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION (non fermée).

---

## 13. Anti-claims

- Pas D1 VALIDATED / D2 READY / DELIVERY COMPLETE / production ready
- Pas Evidence adopted
- Pas R-M01 / U-M02 / candidates fermées ou validées
- Pas stockage réel / vendor / T-A7 / exécution réelle
- Pas modification modeled / T-A3–T-A5 / packages
- IMPLEMENTED ≠ VALIDATED ≠ ADOPTED

---

## 14. Stop conditions respectées

Aucune condition de stop déclenchée.

---

## 15. Gate suivant

`GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A`
(**NOT consumed**)

Ne pas lancer D2 avant validation D1 + nouveau GO Morris.

---

## 16. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
```

## 14. Contenu complet — README T-A6

```markdown
# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6` (**CONSUMED**) |
| **Gate arbitrage modeled** | `GO ARBITRATE T-A6` (**CONSUMED**) |
| **Gate décision modeled** | `GO DECIDE T-A6` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A6 MODELED` (**CONSUMED**) |
| **Gate validate** | `GO VALIDATE T-A6 MODELED` (**CONSUMED**) |
| **Gate delivery framing** | `GO FRAME T-A6 DELIVERY` (**CONSUMED**) |
| **Gate delivery arbitrage** | `GO ARBITRATE T-A6 DELIVERY` (**CONSUMED**) |
| **Gate delivery décision** | `GO DECIDE T-A6 DELIVERY` (**CONSUMED**) |
| **Gate delivery D1** | `GO IMPLEMENT T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` — VALIDATED AFTER CORRECTION |
| **Runtime D1** | `app/lib/oa/evidence-review/**` — **IMPLEMENTED — NOT VALIDATED** |
| **Fake-only / mémoire** | **oui** |
| **D2–D5** | **NON** lancés |
| **Push / PR / merge projet** | **NONE** |
| **Statut pack** | **T-A6-D1 IMPLEMENTED — NOT VALIDATED** |
| **Horodatage D1** | 2026-07-26 02:44:00 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif (ce cycle)

Implémenter exclusivement T-A6-D1 — Evidence core (mémoire + fake-only).

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) … [08-delivery-decisions.md](./08-delivery-decisions.md)
3. [09-delivery-d1-implementation.md](./09-delivery-d1-implementation.md) — **implémentation D1**
4. Runtime : `projects/sfia-studio/app/lib/oa/evidence-review/**`
5. Tests : `projects/sfia-studio/app/__tests__/oa/evidence-review/**`

## D1 implémenté

- RegisterEvidence · IngestExecutionAttemptEvidence · VerifyEvidenceIntegrity · MarkEvidenceUnavailable
- MemoryEvidenceRepository OCC · FakeEvidencePayloadAdapter · FakeExecutionAttemptReader
- 48 tests D1 PASS ; non-régression T-A3/T-A4/T-A5 + modeled T-A6 PASS

## Hors D1

ReviewBundle · ClaimEvaluation · MaturityAssessment · coordination D5 · API/UI/SQL · T-A7

## Réserves (OPEN — inchangées)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD) |
| R-T-A3-2 | **OPEN** (HARD) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION |
| U-M02 | **OPEN** |

Candidates C1–C4 : **RECOMMENDED — NOT VALIDATED**.

## Anti-claims

- Pas D1 VALIDATED / D2 READY / DELIVERY COMPLETE / production ready
- Pas R-M01 / U-M02 / candidates fermées ou validées
- Pas stockage réel / vendor / T-A7 / exécution réelle
- Pas modification modeled / T-A3–T-A5 / packages
- IMPLEMENTED ≠ VALIDATED ≠ ADOPTED
```

## 15. Contenu complet — runtime D1

### `projects/sfia-studio/app/lib/oa/evidence-review/application/evidenceSupport.ts`

```typescript
import { createHash } from "node:crypto";
import type { ProvenanceRecord } from "@/lib/oa/doctrine";
import type { ActorReference } from "../domain/types";
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

### `projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts`

```typescript
/**
 * IngestExecutionAttemptEvidence — explicit T-A5 → T-A6 bridge (D-T-A6-DEL-04).
 *
 * Policy (documented, fail-closed):
 * - Only Attempt.status === "succeeded" WITH resultRef may produce Evidence.
 * - failed / running / other statuses are refused (ATTEMPT_STATUS_REFUSED).
 * - Created Evidence status is always "available" (never "verified").
 * - ExecutionAttempt.succeeded ≠ Evidence verified ≠ PASS.
 * - Attempt is never mutated.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import {
  isEvidenceId,
  isOaIdentifier,
  validateBindings,
  validateEvidenceShape,
  validateSecretFreeFields,
} from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  IngestExecutionAttemptEvidenceRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { ExecutionAttemptReaderPort } from "../ports/executionAttemptReader";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class IngestExecutionAttemptEvidence {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly attempts: ExecutionAttemptReaderPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: IngestExecutionAttemptEvidenceRequest,
  ): Promise<EvidenceResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createEvidenceError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createEvidenceError>[0]> & {
        evidence?: Evidence;
      },
    ): EvidenceResult => {
      const { evidence, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.evidence.idempotency_conflict" as const)
          : ("oa.evidence.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        evidenceId: request.evidenceId,
        executionAttemptId: request.executionAttemptId,
        actorId: request.actor.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createEvidenceError({
          detailCode,
          timestamp,
          correlationId,
          evidenceId: request.evidenceId,
          executionAttemptId: request.executionAttemptId,
          internalCauseRef,
          ...errorExtra,
        }),
        evidence,
        durationMs,
      };
    };

    try {
      if (!isEvidenceId(request.evidenceId)) {
        return fail("EVIDENCE_INVALID", "evidence_id_invalid");
      }
      if (
        !isOaIdentifier(request.executionAttemptId) ||
        !request.executionAttemptId.startsWith("xat:")
      ) {
        return fail("EVIDENCE_INVALID", "execution_attempt_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("EVIDENCE_INVALID", "idempotency_key_too_short");
      }

      const secretViolation = validateSecretFreeFields({
        location: request.location,
      });
      if (secretViolation) {
        return fail(secretViolation.detailCode, secretViolation.reason);
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          evidenceId: request.evidenceId,
          executionAttemptId: request.executionAttemptId,
          idempotencyKey: request.idempotencyKey,
          classification: request.classification,
          retentionClass: request.retentionClass,
          bindings: request.bindings,
          type: request.type,
          storageMode: request.storageMode,
          location: request.location,
          digest: request.digest,
          legalHold: request.legalHold,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "ingest_attempt"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.evidence.execution_attempt_ingested",
            ts: timestamp,
            correlationId,
            evidenceId: existingIdem.evidence.evidenceId,
            executionAttemptId: request.executionAttemptId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.evidence.status,
            version: existingIdem.evidence.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            evidence: existingIdem.evidence,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const attempt = await this.attempts.findById(request.executionAttemptId);
      if (!attempt) {
        return fail("ATTEMPT_NOT_FOUND", "missing_attempt");
      }

      // Fail-closed: only succeeded + resultRef produces candidate Evidence.
      if (attempt.status !== "succeeded") {
        return fail(
          "ATTEMPT_STATUS_REFUSED",
          `attempt_status_${attempt.status}`,
        );
      }
      if (!attempt.resultRef || !isOaIdentifier(attempt.resultRef)) {
        return fail("ATTEMPT_RESULT_UNAVAILABLE", "result_ref_missing");
      }

      const bindings = {
        ...(request.bindings ?? {}),
        executionAttemptId: attempt.attemptId,
        executionContractId: attempt.executionContractId,
      };
      const bindingsViolation = validateBindings(bindings, "execution_attempt");
      if (bindingsViolation) {
        return fail(bindingsViolation.detailCode, bindingsViolation.reason);
      }

      const storageMode = request.storageMode ?? "internal_payload_ref";
      const location =
        request.location ?? `refs/attempts/${attempt.attemptId}/result`;

      const evidence: Evidence = {
        schemaVersion: "0.2.0-oa",
        evidenceId: request.evidenceId,
        type: request.type ?? "artifact",
        source: `execution attempt ${attempt.attemptId}`,
        sourceKind: "execution_attempt",
        location,
        digest: request.digest,
        producedBy: request.actor,
        producedAt: attempt.completedAt ?? timestamp,
        freshness: "fresh",
        status: "available",
        classification: request.classification,
        storageMode,
        availability: "available",
        retentionClass: request.retentionClass ?? "standard",
        legalHold: request.legalHold ?? false,
        bindings,
        containsSecrets: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source: "execution_adapter",
          timestamp,
          correlationId,
          projectId: bindings.projectId,
          cycleInstanceId: bindings.cycleInstanceId,
        }),
        version: 1,
        createdAt: timestamp,
        idempotencyKey: request.idempotencyKey,
        technicalResultRef: attempt.resultRef,
      };

      const shape = validateEvidenceShape(evidence);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(evidence, {
        evidenceId: evidence.evidenceId,
        fingerprint,
        operation: "ingest_attempt",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.execution_attempt_ingested",
        ts: timestamp,
        correlationId,
        evidenceId: evidence.evidenceId,
        executionAttemptId: attempt.attemptId,
        actorId: request.actor.actorId,
        newStatus: evidence.status,
        version: evidence.version,
        result: "ok",
        durationMs,
      });

      // Prove Attempt was not mutated via reader contract (snapshot clone).
      return {
        ok: true,
        evidence: structuredClone(evidence),
        durationMs,
      };
    } catch (err) {
      if (isEvidenceDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("EVIDENCE_PERSISTENCE_FAILED", "unexpected_ingest_failure");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/markEvidenceUnavailable.ts`

```typescript
/**
 * MarkEvidenceUnavailable — explicit availability transition.
 * No cascade to ReviewBundle / Claim / Maturity (not implemented in D1).
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import {
  isEvidenceId,
  validateEvidenceShape,
  validateSecretFreeFields,
} from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  MarkEvidenceUnavailableRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";
import {
  assertIdempotencyKey,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";

export class MarkEvidenceUnavailable {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: MarkEvidenceUnavailableRequest,
  ): Promise<EvidenceResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createEvidenceError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createEvidenceError>[0]> & {
        evidence?: Evidence;
      },
    ): EvidenceResult => {
      const { evidence, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.evidence.idempotency_conflict" as const)
          : detailCode === "VERSION_CONFLICT"
            ? ("oa.evidence.concurrent_modification_rejected" as const)
            : ("oa.evidence.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        evidenceId: request.evidenceId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createEvidenceError({
          detailCode,
          timestamp,
          correlationId,
          evidenceId: request.evidenceId,
          internalCauseRef,
          ...errorExtra,
        }),
        evidence,
        durationMs,
      };
    };

    try {
      if (!isEvidenceId(request.evidenceId)) {
        return fail("EVIDENCE_INVALID", "evidence_id_invalid");
      }
      if (!assertIdempotencyKey(request.idempotencyKey)) {
        return fail("EVIDENCE_INVALID", "idempotency_key_too_short");
      }
      if (!request.reason || request.reason.trim().length === 0) {
        return fail("EVIDENCE_INVALID", "reason_required");
      }
      if (request.reason.length > 500) {
        return fail("EVIDENCE_INVALID", "reason_too_long");
      }

      const secretViolation = validateSecretFreeFields({
        unavailableReason: request.reason,
      });
      if (secretViolation) {
        return fail(secretViolation.detailCode, secretViolation.reason);
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          evidenceId: request.evidenceId,
          idempotencyKey: request.idempotencyKey,
          reason: request.reason,
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
          existingIdem.record.operation === "mark_unavailable"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.evidence.unavailable",
            ts: timestamp,
            correlationId,
            evidenceId: existingIdem.evidence.evidenceId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.evidence.status,
            version: existingIdem.evidence.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            evidence: existingIdem.evidence,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const current = await this.repo.findById(request.evidenceId);
      if (!current) {
        return fail("EVIDENCE_NOT_FOUND", "missing_evidence");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          evidence: current,
        });
      }

      // Already unavailable with same semantic — treat as success via OCC bump only if needed.
      if (
        current.availability === "unavailable" &&
        current.status === "unavailable"
      ) {
        const durationMs = Date.now() - started;
        this.audit.append({
          event: "oa.evidence.unavailable",
          ts: timestamp,
          correlationId,
          evidenceId: current.evidenceId,
          actorId: request.actor.actorId,
          previousStatus: current.status,
          newStatus: current.status,
          version: current.version,
          result: "ok",
          durationMs,
        });
        return {
          ok: true,
          evidence: structuredClone(current),
          reusedFromIdempotencyKey: false,
          durationMs,
        };
      }

      const updated: Evidence = {
        ...current,
        availability: "unavailable",
        status: "unavailable",
        unavailableReason: request.reason,
        unavailableAt: timestamp,
        updatedAt: timestamp,
        version: current.version + 1,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateEvidenceShape(updated);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { evidence: current });
      }

      await this.repo.update(updated, request.expectedVersion, {
        evidenceId: updated.evidenceId,
        fingerprint,
        operation: "mark_unavailable",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.unavailable",
        ts: timestamp,
        correlationId,
        evidenceId: updated.evidenceId,
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
        evidence: structuredClone(updated),
        durationMs,
      };
    } catch (err) {
      if (isEvidenceDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail(
        "EVIDENCE_PERSISTENCE_FAILED",
        "unexpected_unavailable_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts`

```typescript
/**
 * RegisterEvidence — manual / external / system Evidence (never verified on create).
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import {
  assertIdempotencyKey,
  buildProvenance,
  fingerprintCommand,
  registerFingerprintBody,
} from "./evidenceSupport";
import {
  isEvidenceId,
  validateBindings,
  validateEvidenceShape,
  validateSecretFreeFields,
} from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  RegisterEvidenceRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";

// re-export helper for assert
function checkIdempotencyKey(key: string): boolean {
  return assertIdempotencyKey(key);
}

export class RegisterEvidence {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(request: RegisterEvidenceRequest): Promise<EvidenceResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createEvidenceError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createEvidenceError>[0]> & {
        evidence?: Evidence;
      },
    ): EvidenceResult => {
      const { evidence, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      const event =
        detailCode === "IDEMPOTENCY_CONFLICT"
          ? ("oa.evidence.idempotency_conflict" as const)
          : ("oa.evidence.operation_rejected" as const);
      this.audit.append({
        event,
        ts: timestamp,
        correlationId,
        evidenceId: request.evidenceId,
        actorId: request.actor.actorId,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createEvidenceError({
          detailCode,
          timestamp,
          correlationId,
          evidenceId: request.evidenceId,
          internalCauseRef,
          ...errorExtra,
        }),
        evidence,
        durationMs,
      };
    };

    try {
      if (!isEvidenceId(request.evidenceId)) {
        return fail("EVIDENCE_INVALID", "evidence_id_invalid");
      }
      if (!checkIdempotencyKey(request.idempotencyKey)) {
        return fail("EVIDENCE_INVALID", "idempotency_key_too_short");
      }
      if (request.sourceKind === ("execution_attempt" as string)) {
        return fail(
          "EVIDENCE_INVALID",
          "use_ingest_for_execution_attempt",
        );
      }
      if (request.status === ("verified" as string)) {
        return fail("EVIDENCE_VERIFIED_FORBIDDEN", "register_verified_forbidden");
      }

      const secretViolation = validateSecretFreeFields({
        source: request.source,
        location: request.location,
      });
      if (secretViolation) {
        return fail(secretViolation.detailCode, secretViolation.reason);
      }

      const bindingsViolation = validateBindings(
        request.bindings,
        request.sourceKind,
      );
      if (bindingsViolation) {
        return fail(bindingsViolation.detailCode, bindingsViolation.reason);
      }

      const fingerprint = fingerprintCommand(
        registerFingerprintBody({
          evidenceId: request.evidenceId,
          idempotencyKey: request.idempotencyKey,
          type: request.type,
          source: request.source,
          sourceKind: request.sourceKind,
          bindings: request.bindings,
          classification: request.classification,
          storageMode: request.storageMode,
          availability: request.availability,
          status: request.status,
          freshness: request.freshness,
          location: request.location,
          digest: request.digest,
          verifiablePayload: request.verifiablePayload,
          retentionClass: request.retentionClass,
          legalHold: request.legalHold,
          actor: request.actor,
        }),
      );

      const existingIdem = await this.repo.findByIdempotencyKey(
        request.idempotencyKey,
      );
      if (existingIdem) {
        if (
          existingIdem.record.fingerprint === fingerprint &&
          existingIdem.record.operation === "register"
        ) {
          const durationMs = Date.now() - started;
          this.audit.append({
            event: "oa.evidence.registered",
            ts: timestamp,
            correlationId,
            evidenceId: existingIdem.evidence.evidenceId,
            actorId: request.actor.actorId,
            newStatus: existingIdem.evidence.status,
            version: existingIdem.evidence.version,
            result: "ok",
            durationMs,
          });
          return {
            ok: true,
            evidence: existingIdem.evidence,
            reusedFromIdempotencyKey: true,
            durationMs,
          };
        }
        return fail("IDEMPOTENCY_CONFLICT", "idempotency_fingerprint_mismatch");
      }

      const status = request.status ?? "available";
      const availability = request.availability ?? "available";

      const evidence: Evidence = {
        schemaVersion: "0.2.0-oa",
        evidenceId: request.evidenceId,
        type: request.type,
        source: request.source,
        sourceKind: request.sourceKind,
        location: request.location,
        digest: request.digest,
        verifiablePayload: request.verifiablePayload,
        producedBy: request.producedBy ?? request.actor,
        producedAt: timestamp,
        freshness: request.freshness ?? "fresh",
        status,
        classification: request.classification,
        storageMode: request.storageMode,
        availability,
        retentionClass: request.retentionClass,
        legalHold: request.legalHold ?? false,
        bindings: { ...request.bindings },
        containsSecrets: false,
        provenance: buildProvenance({
          ids: this.ids,
          actor: request.actor,
          source:
            request.sourceKind === "manual" || request.sourceKind === "external"
              ? "human_decision"
              : "system",
          timestamp,
          correlationId,
          projectId: request.bindings.projectId,
          cycleInstanceId: request.bindings.cycleInstanceId,
        }),
        version: 1,
        createdAt: timestamp,
        idempotencyKey: request.idempotencyKey,
      };

      const shape = validateEvidenceShape(evidence);
      if (shape) {
        return fail(shape.detailCode, shape.reason);
      }

      await this.repo.create(evidence, {
        evidenceId: evidence.evidenceId,
        fingerprint,
        operation: "register",
      });

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.registered",
        ts: timestamp,
        correlationId,
        evidenceId: evidence.evidenceId,
        actorId: request.actor.actorId,
        newStatus: evidence.status,
        version: evidence.version,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        evidence: structuredClone(evidence),
        durationMs,
      };
    } catch (err) {
      if (isEvidenceDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
        });
      }
      return fail("EVIDENCE_PERSISTENCE_FAILED", "unexpected_register_failure");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/application/verifyEvidenceIntegrity.ts`

```typescript
/**
 * VerifyEvidenceIntegrity — metadata-only probe via EvidencePayloadPort.
 * Never loads or executes payload. verified ⇒ digest mandatory.
 */
import type { ClockPort } from "@/lib/oa/doctrine";
import {
  createEvidenceError,
  isEvidenceDomainError,
} from "../domain/errors";
import { isEvidenceId, validateEvidenceShape } from "../domain/invariants";
import type {
  Evidence,
  EvidenceResult,
  VerifyEvidenceIntegrityRequest,
} from "../domain/types";
import type { EvidenceAuditPort } from "../ports/evidenceAudit";
import type { EvidencePayloadPort } from "../ports/evidencePayloadPort";
import type { EvidenceRepositoryPort } from "../ports/evidenceRepository";
import type { IdGeneratorPort } from "../ports/idGenerator";

export class VerifyEvidenceIntegrity {
  constructor(
    private readonly repo: EvidenceRepositoryPort,
    private readonly payload: EvidencePayloadPort,
    private readonly clock: ClockPort,
    private readonly audit: EvidenceAuditPort,
    private readonly ids: IdGeneratorPort,
  ) {}

  async execute(
    request: VerifyEvidenceIntegrityRequest,
  ): Promise<EvidenceResult> {
    const started = Date.now();
    const timestamp = request.nowIso ?? this.clock.nowIso();
    const correlationId =
      request.correlationId ?? this.ids.newCorrelationId();

    const fail = (
      detailCode: Parameters<typeof createEvidenceError>[0]["detailCode"],
      internalCauseRef: string,
      extra?: Partial<Parameters<typeof createEvidenceError>[0]> & {
        evidence?: Evidence;
        auditEvent?:
          | "oa.evidence.integrity_rejected"
          | "oa.evidence.operation_rejected"
          | "oa.evidence.concurrent_modification_rejected";
      },
    ): EvidenceResult => {
      const { evidence, auditEvent, ...errorExtra } = extra ?? {};
      const durationMs = Date.now() - started;
      this.audit.append({
        event: auditEvent ?? "oa.evidence.integrity_rejected",
        ts: timestamp,
        correlationId,
        evidenceId: request.evidenceId,
        actorId: request.actor.actorId,
        expectedVersion: request.expectedVersion,
        result: "error",
        detailCode,
        durationMs,
      });
      return {
        ok: false,
        error: createEvidenceError({
          detailCode,
          timestamp,
          correlationId,
          evidenceId: request.evidenceId,
          internalCauseRef,
          ...errorExtra,
        }),
        evidence,
        durationMs,
      };
    };

    try {
      if (!isEvidenceId(request.evidenceId)) {
        return fail("EVIDENCE_INVALID", "evidence_id_invalid");
      }

      const current = await this.repo.findById(request.evidenceId);
      if (!current) {
        return fail("EVIDENCE_NOT_FOUND", "missing_evidence");
      }

      if (current.version !== request.expectedVersion) {
        return fail("VERSION_CONFLICT", "occ_mismatch", {
          expectedVersion: request.expectedVersion,
          currentVersion: current.version,
          evidence: current,
          auditEvent: "oa.evidence.concurrent_modification_rejected",
        });
      }

      if (current.availability === "unavailable") {
        return fail("EVIDENCE_UNAVAILABLE", "evidence_unavailable", {
          evidence: current,
        });
      }

      if (current.containsSecrets !== false) {
        return fail("EVIDENCE_SECRET_FORBIDDEN", "contains_secrets", {
          evidence: current,
        });
      }

      // verified status requires digest (modeled).
      if (!current.digest) {
        return fail("EVIDENCE_DIGEST_REQUIRED", "digest_required_to_verify", {
          evidence: current,
        });
      }

      const probe = await this.payload.probeMetadata({
        evidenceId: current.evidenceId,
        location: current.location,
        expectedDigest: current.digest,
      });

      if (!probe.ok) {
        if (probe.reason === "unavailable") {
          return fail("EVIDENCE_UNAVAILABLE", "payload_unavailable", {
            evidence: current,
          });
        }
        if (probe.reason === "digest_missing") {
          return fail("EVIDENCE_DIGEST_REQUIRED", "probe_digest_missing", {
            evidence: current,
          });
        }
        return fail("PAYLOAD_METADATA_ERROR", `probe_${probe.reason}`, {
          evidence: current,
        });
      }

      if (probe.availability !== "available") {
        return fail("EVIDENCE_UNAVAILABLE", "probe_not_available", {
          evidence: current,
        });
      }

      if (!probe.digest || probe.digest !== current.digest) {
        return fail("EVIDENCE_INTEGRITY_MISMATCH", "digest_mismatch", {
          evidence: current,
        });
      }

      // metadataOnly must be true — never execute payload.
      if (probe.metadataOnly !== true) {
        return fail("PAYLOAD_METADATA_ERROR", "non_metadata_probe_refused", {
          evidence: current,
        });
      }

      const verified: Evidence = {
        ...current,
        status: "verified",
        availability: "available",
        freshness: current.freshness ?? "fresh",
        updatedAt: timestamp,
        version: current.version + 1,
      };

      const shape = validateEvidenceShape(verified);
      if (shape) {
        return fail(shape.detailCode, shape.reason, { evidence: current });
      }

      await this.repo.update(verified, request.expectedVersion);

      const durationMs = Date.now() - started;
      this.audit.append({
        event: "oa.evidence.integrity_verified",
        ts: timestamp,
        correlationId,
        evidenceId: verified.evidenceId,
        actorId: request.actor.actorId,
        previousStatus: current.status,
        newStatus: verified.status,
        version: verified.version,
        expectedVersion: request.expectedVersion,
        result: "ok",
        durationMs,
      });

      return {
        ok: true,
        evidence: structuredClone(verified),
        durationMs,
      };
    } catch (err) {
      if (isEvidenceDomainError(err)) {
        return fail(err.detailCode, err.message, {
          expectedVersion: err.expectedVersion,
          currentVersion: err.currentVersion,
          auditEvent:
            err.detailCode === "VERSION_CONFLICT"
              ? "oa.evidence.concurrent_modification_rejected"
              : "oa.evidence.integrity_rejected",
        });
      }
      return fail("EVIDENCE_PERSISTENCE_FAILED", "unexpected_verify_failure");
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/domain/errors.ts`

```typescript
import type {
  EvidenceDetailCode,
  EvidenceModeledErrorCode,
  EvidenceStructuredError,
} from "./types";

const DETAIL_TO_MODELED: Record<EvidenceDetailCode, EvidenceModeledErrorCode> = {
  EVIDENCE_INVALID: "VALIDATION_FAILED",
  EVIDENCE_NOT_FOUND: "STATE_CONFLICT",
  EVIDENCE_ALREADY_EXISTS: "STATE_CONFLICT",
  EVIDENCE_SOURCE_REQUIRED: "VALIDATION_FAILED",
  EVIDENCE_BINDING_REQUIRED: "VALIDATION_FAILED",
  EVIDENCE_DIGEST_REQUIRED: "VALIDATION_FAILED",
  EVIDENCE_UNAVAILABLE: "STATE_CONFLICT",
  EVIDENCE_SECRET_FORBIDDEN: "AUTHORITY_DENIED",
  EVIDENCE_INTEGRITY_MISMATCH: "VALIDATION_FAILED",
  EVIDENCE_VERIFIED_FORBIDDEN: "VALIDATION_FAILED",
  ATTEMPT_NOT_FOUND: "STATE_CONFLICT",
  ATTEMPT_RESULT_UNAVAILABLE: "STATE_CONFLICT",
  ATTEMPT_STATUS_REFUSED: "STATE_CONFLICT",
  VERSION_CONFLICT: "STATE_CONFLICT",
  CONCURRENT_MODIFICATION: "STATE_CONFLICT",
  IDEMPOTENCY_CONFLICT: "STATE_CONFLICT",
  EVIDENCE_PERSISTENCE_FAILED: "STATE_CONFLICT",
  PAYLOAD_METADATA_ERROR: "STATE_CONFLICT",
};

/** Safe operator-facing messages — never echo payloads, secrets or Evidence content. */
const SAFE_MESSAGES: Record<EvidenceDetailCode, string> = {
  EVIDENCE_INVALID: "Evidence input is invalid.",
  EVIDENCE_NOT_FOUND: "Evidence was not found.",
  EVIDENCE_ALREADY_EXISTS: "Evidence already exists.",
  EVIDENCE_SOURCE_REQUIRED: "Evidence source is required.",
  EVIDENCE_BINDING_REQUIRED: "At least one structural Evidence binding is required.",
  EVIDENCE_DIGEST_REQUIRED: "Evidence digest is required for this operation.",
  EVIDENCE_UNAVAILABLE: "Evidence is unavailable.",
  EVIDENCE_SECRET_FORBIDDEN: "Secrets or tokens are forbidden in Evidence metadata.",
  EVIDENCE_INTEGRITY_MISMATCH: "Evidence integrity digest mismatch.",
  EVIDENCE_VERIFIED_FORBIDDEN:
    "Evidence cannot be registered or ingested as verified without VerifyEvidenceIntegrity.",
  ATTEMPT_NOT_FOUND: "Execution attempt was not found.",
  ATTEMPT_RESULT_UNAVAILABLE:
    "Execution attempt has no exploitable technical result reference.",
  ATTEMPT_STATUS_REFUSED:
    "Execution attempt status is not accepted for Evidence ingestion.",
  VERSION_CONFLICT: "Evidence version conflict.",
  CONCURRENT_MODIFICATION: "Evidence concurrent modification conflict.",
  IDEMPOTENCY_CONFLICT: "Evidence idempotency key conflicts with a different command.",
  EVIDENCE_PERSISTENCE_FAILED: "Evidence persistence failed.",
  PAYLOAD_METADATA_ERROR: "Evidence payload metadata probe failed.",
};

const RETRYABLE: ReadonlySet<EvidenceDetailCode> = new Set([
  "VERSION_CONFLICT",
  "CONCURRENT_MODIFICATION",
  "EVIDENCE_PERSISTENCE_FAILED",
  "PAYLOAD_METADATA_ERROR",
]);

export function createEvidenceError(input: {
  detailCode: EvidenceDetailCode;
  timestamp: string;
  correlationId?: string;
  evidenceId?: string;
  executionAttemptId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
  retryable?: boolean;
}): EvidenceStructuredError {
  const detailCode = input.detailCode;
  return {
    code: DETAIL_TO_MODELED[detailCode],
    detailCode,
    message: SAFE_MESSAGES[detailCode],
    severity:
      detailCode === "EVIDENCE_SECRET_FORBIDDEN" ? "critical" : "error",
    retryable: input.retryable ?? RETRYABLE.has(detailCode),
    blocking: true,
    recoverable: detailCode !== "EVIDENCE_SECRET_FORBIDDEN",
    domain: "F",
    timestamp: input.timestamp,
    correlationId: input.correlationId,
    evidenceId: input.evidenceId,
    executionAttemptId: input.executionAttemptId,
    expectedVersion: input.expectedVersion,
    currentVersion: input.currentVersion,
    internalCauseRef: input.internalCauseRef,
  };
}

/** Thrown by the repository so use-cases can map detail codes fail-closed. */
export class EvidenceDomainError extends Error {
  readonly detailCode: EvidenceDetailCode;
  readonly expectedVersion?: number;
  readonly currentVersion?: number;

  constructor(
    detailCode: EvidenceDetailCode,
    internalCauseRef: string,
    versions?: { expectedVersion?: number; currentVersion?: number },
  ) {
    super(internalCauseRef);
    this.name = "EvidenceDomainError";
    this.detailCode = detailCode;
    this.expectedVersion = versions?.expectedVersion;
    this.currentVersion = versions?.currentVersion;
  }
}

export function isEvidenceDomainError(
  value: unknown,
): value is EvidenceDomainError {
  return value instanceof EvidenceDomainError;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts`

```typescript
/**
 * Semantic invariants for T-A6-D1 Evidence.
 * Mirrors evidence.schema.json 0.2.0-oa conditionals + runtime OCC rules.
 */
import type { Digest } from "@/lib/oa/doctrine";
import type { EvidenceDetailCode } from "./types";
import type {
  Evidence,
  EvidenceAvailability,
  EvidenceBindings,
  EvidenceClassification,
  EvidenceFreshness,
  EvidenceRetentionClass,
  EvidenceSourceKind,
  EvidenceStatus,
  EvidenceStorageMode,
  EvidenceType,
} from "./types";

export const OA_IDENTIFIER_PATTERN =
  /^[a-z][a-z0-9]*:[a-zA-Z0-9][a-zA-Z0-9:_\-.]*$/;

export const IDEMPOTENCY_KEY_MIN_LENGTH = 8 as const;

export const DIGEST_PATTERN = /^sha256:[a-f0-9]{64}$/;

/** Heuristic secret/token rejection — metadata only, never echoes matches. */
const SECRET_PATTERN =
  /(password|passwd|secret|token|bearer\s+[a-z0-9._\-]+|api[_-]?key|authorization\s*:|sk-[a-z0-9]{8,}|-----begin\s+(rsa\s+)?private\s+key-----)/i;

export type InvariantViolation = {
  detailCode: EvidenceDetailCode;
  reason: string;
};

export const EVIDENCE_TYPES: ReadonlySet<EvidenceType> = new Set([
  "document",
  "screenshot",
  "log_ref",
  "artifact",
  "attestation",
  "other",
]);

export const SOURCE_KINDS: ReadonlySet<EvidenceSourceKind> = new Set([
  "execution_attempt",
  "manual",
  "external",
  "system",
]);

export const EVIDENCE_STATUSES: ReadonlySet<EvidenceStatus> = new Set([
  "expected",
  "available",
  "verified",
  "incomplete",
  "stale",
  "rejected",
  "superseded",
  "unavailable",
]);

export const CLASSIFICATIONS: ReadonlySet<EvidenceClassification> = new Set([
  "public",
  "internal",
  "confidential",
  "restricted",
]);

export const STORAGE_MODES: ReadonlySet<EvidenceStorageMode> = new Set([
  "metadata_only",
  "internal_payload_ref",
  "external_payload_ref",
]);

export const AVAILABILITIES: ReadonlySet<EvidenceAvailability> = new Set([
  "available",
  "unavailable",
  "unknown",
]);

export const FRESHNESSES: ReadonlySet<EvidenceFreshness> = new Set([
  "fresh",
  "aging",
  "stale",
  "unknown",
]);

export const RETENTION_CLASSES: ReadonlySet<EvidenceRetentionClass> = new Set([
  "short",
  "standard",
  "extended",
  "legal_hold_eligible",
]);

export function isOaIdentifier(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.length >= 3 &&
    value.length <= 128 &&
    OA_IDENTIFIER_PATTERN.test(value)
  );
}

export function isEvidenceId(value: unknown): value is string {
  return isOaIdentifier(value) && value.startsWith("ev:");
}

export function isDigest(value: unknown): value is Digest {
  return typeof value === "string" && DIGEST_PATTERN.test(value);
}

export function containsForbiddenSecret(value: unknown): boolean {
  if (typeof value !== "string" || value.length === 0) return false;
  return SECRET_PATTERN.test(value);
}

export function bindingCount(bindings: EvidenceBindings | undefined): number {
  if (!bindings) return 0;
  return Object.values(bindings).filter(
    (v) => typeof v === "string" && v.length > 0,
  ).length;
}

export function validateBindings(
  bindings: EvidenceBindings | undefined,
  sourceKind?: EvidenceSourceKind,
): InvariantViolation | null {
  if (!bindings || bindingCount(bindings) < 1) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "bindings_empty",
    };
  }
  if (
    bindings.executionAttemptId !== undefined &&
    (!isOaIdentifier(bindings.executionAttemptId) ||
      !bindings.executionAttemptId.startsWith("xat:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "execution_attempt_id_prefix",
    };
  }
  if (
    bindings.executionContractId !== undefined &&
    (!isOaIdentifier(bindings.executionContractId) ||
      !bindings.executionContractId.startsWith("xct:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "execution_contract_id_prefix",
    };
  }
  if (
    bindings.cycleInstanceId !== undefined &&
    (!isOaIdentifier(bindings.cycleInstanceId) ||
      !bindings.cycleInstanceId.startsWith("cyc:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "cycle_instance_id_prefix",
    };
  }
  if (
    bindings.projectId !== undefined &&
    (!isOaIdentifier(bindings.projectId) ||
      !bindings.projectId.startsWith("prj:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "project_id_prefix",
    };
  }
  if (
    bindings.reviewBundleId !== undefined &&
    (!isOaIdentifier(bindings.reviewBundleId) ||
      !bindings.reviewBundleId.startsWith("rb:"))
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "review_bundle_id_prefix",
    };
  }
  if (
    bindings.decisionId !== undefined &&
    !isOaIdentifier(bindings.decisionId)
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "decision_id_invalid",
    };
  }
  if (
    sourceKind === "execution_attempt" &&
    !bindings.executionAttemptId
  ) {
    return {
      detailCode: "EVIDENCE_BINDING_REQUIRED",
      reason: "execution_attempt_source_requires_binding",
    };
  }
  return null;
}

export function validateSecretFreeFields(input: {
  source?: string;
  location?: string;
  unavailableReason?: string;
  technicalResultRef?: string;
}): InvariantViolation | null {
  for (const [key, value] of Object.entries(input)) {
    if (containsForbiddenSecret(value)) {
      return {
        detailCode: "EVIDENCE_SECRET_FORBIDDEN",
        reason: `secret_in_${key}`,
      };
    }
  }
  return null;
}

/**
 * Shape guard before persist. Does not claim Attempt ownership.
 * Attempt is never owner — only a possible binding/sourceKind.
 */
export function validateEvidenceShape(
  evidence: Evidence,
): InvariantViolation | null {
  if (evidence.schemaVersion !== "0.2.0-oa") {
    return { detailCode: "EVIDENCE_INVALID", reason: "schema_version" };
  }
  if (!isEvidenceId(evidence.evidenceId)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "evidence_id" };
  }
  if (!EVIDENCE_TYPES.has(evidence.type)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "type" };
  }
  if (!evidence.source || evidence.source.trim().length === 0) {
    return { detailCode: "EVIDENCE_SOURCE_REQUIRED", reason: "source_empty" };
  }
  if (evidence.source.length > 500) {
    return { detailCode: "EVIDENCE_INVALID", reason: "source_too_long" };
  }
  if (!SOURCE_KINDS.has(evidence.sourceKind)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "source_kind" };
  }
  if (!EVIDENCE_STATUSES.has(evidence.status)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "status" };
  }
  if (!CLASSIFICATIONS.has(evidence.classification)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "classification" };
  }
  if (!STORAGE_MODES.has(evidence.storageMode)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "storage_mode" };
  }
  if (!AVAILABILITIES.has(evidence.availability)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "availability" };
  }
  if (
    evidence.freshness !== undefined &&
    !FRESHNESSES.has(evidence.freshness)
  ) {
    return { detailCode: "EVIDENCE_INVALID", reason: "freshness" };
  }
  if (
    evidence.retentionClass !== undefined &&
    !RETENTION_CLASSES.has(evidence.retentionClass)
  ) {
    return { detailCode: "EVIDENCE_INVALID", reason: "retention_class" };
  }
  if (evidence.containsSecrets !== false) {
    return {
      detailCode: "EVIDENCE_SECRET_FORBIDDEN",
      reason: "contains_secrets_must_be_false",
    };
  }
  if (!evidence.provenance || !evidence.provenance.provenanceRecordId) {
    return { detailCode: "EVIDENCE_INVALID", reason: "provenance_required" };
  }
  if (!evidence.producedAt) {
    return { detailCode: "EVIDENCE_INVALID", reason: "produced_at_required" };
  }
  if (typeof evidence.version !== "number" || evidence.version < 1) {
    return { detailCode: "EVIDENCE_INVALID", reason: "version" };
  }

  const bindingsViolation = validateBindings(
    evidence.bindings,
    evidence.sourceKind,
  );
  if (bindingsViolation) return bindingsViolation;

  const secretViolation = validateSecretFreeFields({
    source: evidence.source,
    location: evidence.location,
    unavailableReason: evidence.unavailableReason,
    technicalResultRef: evidence.technicalResultRef,
  });
  if (secretViolation) return secretViolation;

  if (evidence.location !== undefined && evidence.location.length > 1000) {
    return { detailCode: "EVIDENCE_INVALID", reason: "location_too_long" };
  }

  if (evidence.digest !== undefined && !isDigest(evidence.digest)) {
    return { detailCode: "EVIDENCE_INVALID", reason: "digest_format" };
  }

  if (
    (evidence.verifiablePayload === true || evidence.status === "verified") &&
    !evidence.digest
  ) {
    return {
      detailCode: "EVIDENCE_DIGEST_REQUIRED",
      reason: "verifiable_or_verified_requires_digest",
    };
  }

  if (evidence.availability === "unavailable") {
    const allowed: EvidenceStatus[] = [
      "unavailable",
      "incomplete",
      "stale",
      "rejected",
    ];
    if (!allowed.includes(evidence.status)) {
      return {
        detailCode: "EVIDENCE_UNAVAILABLE",
        reason: "unavailable_availability_status_mismatch",
      };
    }
  }

  return null;
}

/** Attempt is never the Evidence owner — documented invariant for tests. */
export function isAttemptOwnerOfEvidence(): false {
  return false;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/domain/types.ts`

```typescript
/**
 * T-A6-D1 Evidence core — domain types (Option A v3-native).
 *
 * Modeled reference: evidence.schema.json schemaVersion 0.2.0-oa.
 * Runtime OCC `version` / `idempotencyKey` / timestamps follow T-A5 conventions
 * and are NOT claimed as modeled schema fields.
 *
 * Attempt is a source binding, never the Evidence owner.
 * No ReviewBundle / ClaimEvaluation / MaturityAssessment in D1.
 */

import type {
  ActorReference,
  Digest,
  ProvenanceRecord,
} from "@/lib/oa/doctrine";

export type { ActorReference, Digest, ProvenanceRecord };

export const EVIDENCE_SCHEMA_VERSION = "0.2.0-oa" as const;

export type EvidenceType =
  | "document"
  | "screenshot"
  | "log_ref"
  | "artifact"
  | "attestation"
  | "other";

export type EvidenceSourceKind =
  | "execution_attempt"
  | "manual"
  | "external"
  | "system";

export type EvidenceStatus =
  | "expected"
  | "available"
  | "verified"
  | "incomplete"
  | "stale"
  | "rejected"
  | "superseded"
  | "unavailable";

export type EvidenceClassification =
  | "public"
  | "internal"
  | "confidential"
  | "restricted";

export type EvidenceStorageMode =
  | "metadata_only"
  | "internal_payload_ref"
  | "external_payload_ref";

export type EvidenceAvailability = "available" | "unavailable" | "unknown";

export type EvidenceFreshness = "fresh" | "aging" | "stale" | "unknown";

export type EvidenceRetentionClass =
  | "short"
  | "standard"
  | "extended"
  | "legal_hold_eligible";

/** At least one structural binding required (D-T-A6-01 / modeled). */
export type EvidenceBindings = {
  executionAttemptId?: string;
  executionContractId?: string;
  decisionId?: string;
  cycleInstanceId?: string;
  projectId?: string;
  reviewBundleId?: string;
};

/**
 * Evidence aggregate — independent identity, memory OCC via `version`.
 * Never stores a raw payload.
 */
export type Evidence = {
  schemaVersion: typeof EVIDENCE_SCHEMA_VERSION;
  evidenceId: string;
  type: EvidenceType;
  source: string;
  sourceKind: EvidenceSourceKind;
  location?: string;
  digest?: Digest;
  verifiablePayload?: boolean;
  producedBy?: ActorReference;
  producedAt: string;
  freshness?: EvidenceFreshness;
  status: EvidenceStatus;
  classification: EvidenceClassification;
  storageMode: EvidenceStorageMode;
  availability: EvidenceAvailability;
  retentionClass?: EvidenceRetentionClass;
  legalHold?: boolean;
  bindings: EvidenceBindings;
  containsSecrets: false;
  provenance: ProvenanceRecord;
  /** Runtime OCC — monotone, repository-owned. */
  version: number;
  createdAt: string;
  updatedAt?: string;
  /** Command idempotency key that created this Evidence (when applicable). */
  idempotencyKey?: string;
  /** Technical Attempt resultRef captured at ingestion — never implies verified/PASS. */
  technicalResultRef?: string;
  unavailableReason?: string;
  unavailableAt?: string;
};

export type EvidenceDetailCode =
  | "EVIDENCE_INVALID"
  | "EVIDENCE_NOT_FOUND"
  | "EVIDENCE_ALREADY_EXISTS"
  | "EVIDENCE_SOURCE_REQUIRED"
  | "EVIDENCE_BINDING_REQUIRED"
  | "EVIDENCE_DIGEST_REQUIRED"
  | "EVIDENCE_UNAVAILABLE"
  | "EVIDENCE_SECRET_FORBIDDEN"
  | "EVIDENCE_INTEGRITY_MISMATCH"
  | "EVIDENCE_VERIFIED_FORBIDDEN"
  | "ATTEMPT_NOT_FOUND"
  | "ATTEMPT_RESULT_UNAVAILABLE"
  | "ATTEMPT_STATUS_REFUSED"
  | "VERSION_CONFLICT"
  | "CONCURRENT_MODIFICATION"
  | "IDEMPOTENCY_CONFLICT"
  | "EVIDENCE_PERSISTENCE_FAILED"
  | "PAYLOAD_METADATA_ERROR";

export type EvidenceModeledErrorCode =
  | "STATE_CONFLICT"
  | "CONTEXT_STALE"
  | "AUTHORITY_DENIED"
  | "VALIDATION_FAILED";

export type EvidenceStructuredError = {
  code: EvidenceModeledErrorCode;
  detailCode: EvidenceDetailCode;
  message: string;
  severity: "error" | "critical";
  retryable: boolean;
  blocking: true;
  recoverable: boolean;
  domain: "F";
  timestamp: string;
  correlationId?: string;
  evidenceId?: string;
  executionAttemptId?: string;
  expectedVersion?: number;
  currentVersion?: number;
  internalCauseRef?: string;
};

export type EvidenceResult = {
  ok: true;
  evidence: Evidence;
  reusedFromIdempotencyKey?: boolean;
  durationMs: number;
} | {
  ok: false;
  error: EvidenceStructuredError;
  evidence?: Evidence;
  durationMs: number;
};

export type RegisterEvidenceRequest = {
  evidenceId: string;
  idempotencyKey: string;
  actor: ActorReference;
  type: EvidenceType;
  source: string;
  sourceKind: Exclude<EvidenceSourceKind, "execution_attempt">;
  bindings: EvidenceBindings;
  classification: EvidenceClassification;
  storageMode: EvidenceStorageMode;
  availability?: EvidenceAvailability;
  status?: Exclude<EvidenceStatus, "verified">;
  freshness?: EvidenceFreshness;
  location?: string;
  digest?: Digest;
  verifiablePayload?: boolean;
  retentionClass?: EvidenceRetentionClass;
  legalHold?: boolean;
  producedBy?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type IngestExecutionAttemptEvidenceRequest = {
  evidenceId: string;
  executionAttemptId: string;
  idempotencyKey: string;
  actor: ActorReference;
  classification: EvidenceClassification;
  retentionClass?: EvidenceRetentionClass;
  /** Extra structural bindings (project/cycle/decision…). Attempt binding is always set. */
  bindings?: Omit<EvidenceBindings, "executionAttemptId">;
  type?: EvidenceType;
  storageMode?: EvidenceStorageMode;
  location?: string;
  digest?: Digest;
  legalHold?: boolean;
  correlationId?: string;
  nowIso?: string;
};

export type VerifyEvidenceIntegrityRequest = {
  evidenceId: string;
  actor: ActorReference;
  expectedVersion: number;
  correlationId?: string;
  nowIso?: string;
};

export type MarkEvidenceUnavailableRequest = {
  evidenceId: string;
  actor: ActorReference;
  expectedVersion: number;
  reason: string;
  idempotencyKey: string;
  correlationId?: string;
  nowIso?: string;
};

/** Read-only Attempt snapshot for T-A6 ingestion (never mutates T-A5). */
export type ExecutionAttemptSnapshot = {
  attemptId: string;
  executionContractId: string;
  executionContractVersion: number;
  status: string;
  resultRef?: string;
  errorRef?: string;
  completedAt?: string;
  failedAt?: string;
  selectedAgentRef?: string;
};
```

### `projects/sfia-studio/app/lib/oa/evidence-review/index.ts`

```typescript
/**
 * T-A6-D1 Evidence core — public barrel (Option A v3-native).
 *
 * Module path: app/lib/oa/evidence-review/**
 *
 * WHAT THIS IS: memory + fake-only Evidence foundation (Register, Ingest
 * Attempt, Verify integrity, Mark unavailable). Attempt is source not owner.
 * ExecutionAttempt.succeeded ≠ verified ≠ PASS.
 *
 * WHAT THIS IS NOT: ReviewBundle, ClaimEvaluation, MaturityAssessment,
 * coordination D2–D5, SQL, API/UI, real payload adapters, T-A7, real execution.
 *
 * T-A5 is read via ExecutionAttemptReaderPort only — no T-A5 → T-A6 dependency.
 */

export * from "./domain/types";
export * from "./domain/errors";
export * from "./domain/invariants";

export * from "./ports/evidenceRepository";
export * from "./ports/evidencePayloadPort";
export * from "./ports/executionAttemptReader";
export * from "./ports/evidenceAudit";
export * from "./ports/idGenerator";

export { RegisterEvidence } from "./application/registerEvidence";
export { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
export { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
export { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";

export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
export { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
export { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
export type { FakePayloadScript } from "./infrastructure/fakeEvidencePayloadAdapter";
export { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
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
import { IngestExecutionAttemptEvidence } from "./application/ingestExecutionAttemptEvidence";
import { MarkEvidenceUnavailable } from "./application/markEvidenceUnavailable";
import { RegisterEvidence } from "./application/registerEvidence";
import { VerifyEvidenceIntegrity } from "./application/verifyEvidenceIntegrity";
import { FakeEvidencePayloadAdapter } from "./infrastructure/fakeEvidencePayloadAdapter";
import { FakeExecutionAttemptReader } from "./infrastructure/fakeExecutionAttemptReader";
import {
  FixedIdGenerator,
  RandomIdGenerator,
} from "./infrastructure/idGenerator";
import { MemoryEvidenceRepository } from "./infrastructure/memoryEvidenceRepository";
import { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
import {
  ConsoleEvidenceAuditJournal,
  MemoryEvidenceAuditJournal,
} from "./infrastructure/observability";
import type { EvidenceAuditPort } from "./ports/evidenceAudit";
import type { EvidencePayloadPort } from "./ports/evidencePayloadPort";
import type { ExecutionAttemptReaderPort } from "./ports/executionAttemptReader";
import type { IdGeneratorPort } from "./ports/idGenerator";

export type EvidenceReviewServices = {
  store: MemoryEvidenceStore;
  repository: MemoryEvidenceRepository;
  payload: EvidencePayloadPort;
  attemptReader: ExecutionAttemptReaderPort;
  clock: ClockPort;
  audit: EvidenceAuditPort;
  ids: IdGeneratorPort;
  registerEvidence: RegisterEvidence;
  ingestExecutionAttemptEvidence: IngestExecutionAttemptEvidence;
  verifyEvidenceIntegrity: VerifyEvidenceIntegrity;
  markEvidenceUnavailable: MarkEvidenceUnavailable;
};

export type CreateEvidenceReviewServicesOptions = {
  clock?: ClockPort;
  audit?: EvidenceAuditPort;
  ids?: IdGeneratorPort;
  payload?: EvidencePayloadPort;
  attemptReader?: ExecutionAttemptReaderPort;
  store?: MemoryEvidenceStore;
};

export function createInMemoryEvidenceReviewServices(
  options: CreateEvidenceReviewServicesOptions = {},
): EvidenceReviewServices {
  const store = options.store ?? new MemoryEvidenceStore();
  const repository = new MemoryEvidenceRepository(store);
  const clock = options.clock ?? new SystemClock();
  const audit = options.audit ?? new ConsoleEvidenceAuditJournal();
  const ids = options.ids ?? new RandomIdGenerator();
  const payload = options.payload ?? new FakeEvidencePayloadAdapter();
  const attemptReader =
    options.attemptReader ?? new FakeExecutionAttemptReader();

  return {
    store,
    repository,
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
    clock: options.clock ?? new FixedClock(options.fixedNowIso ?? "2026-07-26T02:00:00.000Z"),
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

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts`

```typescript
import type { Digest } from "@/lib/oa/doctrine";
import type {
  EvidencePayloadPort,
  EvidencePayloadProbeResult,
} from "../ports/evidencePayloadPort";

export type FakePayloadScript = {
  availability?: "available" | "unavailable" | "unknown";
  digest?: Digest;
  sizeBytes?: number;
  failWith?: "unavailable" | "timeout" | "technical_error" | "digest_missing";
};

/**
 * FakeEvidencePayloadAdapter — metadata-only, no network/filesystem/shell.
 * Scripts are keyed by evidenceId (or "*" default).
 */
export class FakeEvidencePayloadAdapter implements EvidencePayloadPort {
  private scripts = new Map<string, FakePayloadScript>();

  setScript(evidenceId: string, script: FakePayloadScript): void {
    this.scripts.set(evidenceId, script);
  }

  clearScripts(): void {
    this.scripts.clear();
  }

  async probeMetadata(input: {
    evidenceId: string;
    location?: string;
    expectedDigest?: Digest;
  }): Promise<EvidencePayloadProbeResult> {
    const script =
      this.scripts.get(input.evidenceId) ?? this.scripts.get("*") ?? {};

    if (script.failWith) {
      return {
        ok: false,
        reason: script.failWith,
        availability:
          script.failWith === "unavailable" ? "unavailable" : "unknown",
      };
    }

    const availability = script.availability ?? "available";
    if (availability === "unavailable") {
      return {
        ok: false,
        reason: "unavailable",
        availability: "unavailable",
      };
    }

    return {
      ok: true,
      availability,
      digest: script.digest ?? input.expectedDigest,
      sizeBytes: script.sizeBytes,
      metadataOnly: true,
    };
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeExecutionAttemptReader.ts`

```typescript
import type { ExecutionAttemptSnapshot } from "../domain/types";
import type { ExecutionAttemptReaderPort } from "../ports/executionAttemptReader";

/**
 * FakeExecutionAttemptReader — in-memory Attempt snapshots only.
 * Does not import or mutate T-A5 stores. No network/shell.
 */
export class FakeExecutionAttemptReader implements ExecutionAttemptReaderPort {
  private readonly attempts = new Map<string, ExecutionAttemptSnapshot>();

  seed(attempt: ExecutionAttemptSnapshot): void {
    this.attempts.set(attempt.attemptId, structuredClone(attempt));
  }

  clear(): void {
    this.attempts.clear();
  }

  /** Returns a clone — callers cannot mutate the store through the snapshot. */
  async findById(
    attemptId: string,
  ): Promise<ExecutionAttemptSnapshot | null> {
    const found = this.attempts.get(attemptId);
    return found ? structuredClone(found) : null;
  }

  /** Test helper — prove Attempt immutability across ingestion. */
  getRaw(attemptId: string): ExecutionAttemptSnapshot | undefined {
    return this.attempts.get(attemptId);
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/idGenerator.ts`

```typescript
import { randomBytes } from "node:crypto";
import type { IdGeneratorPort } from "../ports/idGenerator";

export class RandomIdGenerator implements IdGeneratorPort {
  newProvenanceId(): string {
    return `prv:${randomBytes(8).toString("hex")}`;
  }

  newCorrelationId(): string {
    return `cor:${randomBytes(8).toString("hex")}`;
  }
}

export class FixedIdGenerator implements IdGeneratorPort {
  constructor(
    private readonly provenanceId = "prv:fixed-evidence-001",
    private readonly correlationId = "cor:fixed-evidence-001",
  ) {}

  newProvenanceId(): string {
    return this.provenanceId;
  }

  newCorrelationId(): string {
    return this.correlationId;
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts`

```typescript
import { EvidenceDomainError } from "../domain/errors";
import { validateEvidenceShape } from "../domain/invariants";
import type { Evidence } from "../domain/types";
import type {
  EvidenceRepositoryPort,
  IdempotencyRecord,
} from "../ports/evidenceRepository";
import type { MemoryEvidenceStore } from "./memoryEvidenceStore";

export class MemoryEvidenceRepository implements EvidenceRepositoryPort {
  constructor(private readonly store: MemoryEvidenceStore) {}

  async findById(evidenceId: string): Promise<Evidence | null> {
    const found = this.store.evidences.get(evidenceId);
    return found ? structuredClone(found) : null;
  }

  async findByIdempotencyKey(idempotencyKey: string): Promise<{
    evidence: Evidence;
    record: IdempotencyRecord;
  } | null> {
    const record = this.store.idempotencyIndex.get(idempotencyKey);
    if (!record) return null;
    const evidence = await this.findById(record.evidenceId);
    if (!evidence) return null;
    return { evidence, record: structuredClone(record) };
  }

  async exists(evidenceId: string): Promise<boolean> {
    return this.store.evidences.has(evidenceId);
  }

  async create(
    evidence: Evidence,
    record?: IdempotencyRecord,
  ): Promise<void> {
    const shape = validateEvidenceShape(evidence);
    if (shape) {
      throw new EvidenceDomainError(shape.detailCode, shape.reason);
    }
    if (evidence.version !== 1) {
      throw new EvidenceDomainError(
        "EVIDENCE_INVALID",
        "create_requires_version_1",
      );
    }
    if (this.store.evidences.has(evidence.evidenceId)) {
      throw new EvidenceDomainError(
        "EVIDENCE_ALREADY_EXISTS",
        "evidence_id_taken",
      );
    }
    if (record) {
      const existing = this.store.idempotencyIndex.get(
        evidence.idempotencyKey ?? "",
      );
      if (existing && existing.evidenceId !== evidence.evidenceId) {
        throw new EvidenceDomainError(
          "IDEMPOTENCY_CONFLICT",
          "idempotency_key_taken",
        );
      }
    }
    this.failIfForced();
    this.store.evidences.set(evidence.evidenceId, structuredClone(evidence));
    if (record && evidence.idempotencyKey) {
      this.store.idempotencyIndex.set(
        evidence.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  async update(
    evidence: Evidence,
    expectedVersion: number,
    record?: IdempotencyRecord,
  ): Promise<void> {
    const current = this.store.evidences.get(evidence.evidenceId);
    if (!current) {
      throw new EvidenceDomainError(
        "EVIDENCE_NOT_FOUND",
        "update_missing_evidence",
      );
    }
    if (current.version !== expectedVersion) {
      throw new EvidenceDomainError("VERSION_CONFLICT", "occ_mismatch", {
        expectedVersion,
        currentVersion: current.version,
      });
    }
    if (evidence.version !== expectedVersion + 1) {
      throw new EvidenceDomainError(
        "VERSION_CONFLICT",
        "version_not_monotone",
        { expectedVersion, currentVersion: current.version },
      );
    }
    const shape = validateEvidenceShape(evidence);
    if (shape) {
      throw new EvidenceDomainError(shape.detailCode, shape.reason);
    }
    this.failIfForced();
    this.store.evidences.set(evidence.evidenceId, structuredClone(evidence));
    if (record && evidence.idempotencyKey) {
      this.store.idempotencyIndex.set(
        evidence.idempotencyKey,
        structuredClone(record),
      );
    }
  }

  private failIfForced(): void {
    if (this.store.failNextSave) {
      this.store.failNextSave = false;
      throw new EvidenceDomainError(
        "EVIDENCE_PERSISTENCE_FAILED",
        "forced_evidence_save_failure",
      );
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceStore.ts`

```typescript
/**
 * Shared in-memory store for Evidence (T-A6-D1).
 * Reversible candidate — NOT DATABASE SELECTED (U-M02 OPEN).
 * Non-durable: lost on process restart.
 */
import type { Evidence } from "../domain/types";
import type { IdempotencyRecord } from "../ports/evidenceRepository";

type Snapshot = {
  evidences: Map<string, Evidence>;
  idempotencyIndex: Map<string, IdempotencyRecord>;
};

function cloneMap<K, V>(source: Map<K, V>): Map<K, V> {
  const next = new Map<K, V>();
  for (const [k, v] of source) {
    next.set(k, structuredClone(v));
  }
  return next;
}

export class MemoryEvidenceStore {
  evidences = new Map<string, Evidence>();
  /** idempotencyKey → record */
  idempotencyIndex = new Map<string, IdempotencyRecord>();

  /** Test hook — next create/update fails once. */
  failNextSave = false;

  private depth = 0;
  private stack: Snapshot[] = [];

  begin(): void {
    if (this.depth === 0) {
      this.stack.push({
        evidences: cloneMap(this.evidences),
        idempotencyIndex: cloneMap(this.idempotencyIndex),
      });
    }
    this.depth += 1;
  }

  commit(): void {
    if (this.depth === 0) return;
    this.depth -= 1;
    if (this.depth === 0) this.stack.pop();
  }

  rollback(): void {
    if (this.depth === 0) return;
    this.depth -= 1;
    if (this.depth === 0) {
      const snap = this.stack.pop();
      if (snap) {
        this.evidences = snap.evidences;
        this.idempotencyIndex = snap.idempotencyIndex;
      }
    }
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/observability.ts`

```typescript
import type {
  EvidenceAuditEvent,
  EvidenceAuditPort,
} from "../ports/evidenceAudit";

export class ConsoleEvidenceAuditJournal implements EvidenceAuditPort {
  append(event: EvidenceAuditEvent): void {
    console.info(JSON.stringify(event));
  }
}

export class MemoryEvidenceAuditJournal implements EvidenceAuditPort {
  readonly events: EvidenceAuditEvent[] = [];

  append(event: EvidenceAuditEvent): void {
    this.events.push(Object.freeze({ ...event }));
  }

  byName(name: EvidenceAuditEvent["event"]): EvidenceAuditEvent[] {
    return this.events.filter((event) => event.event === name);
  }
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceAudit.ts`

```typescript
/**
 * Append-only audit sink for T-A6-D1 Evidence.
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
  | "oa.evidence.concurrent_modification_rejected";

export type EvidenceAuditEvent = {
  event: EvidenceAuditEventName;
  ts: string;
  correlationId?: string;
  evidenceId?: string;
  executionAttemptId?: string;
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

### `projects/sfia-studio/app/lib/oa/evidence-review/ports/evidencePayloadPort.ts`

```typescript
import type { Digest } from "@/lib/oa/doctrine";

/**
 * Fake / metadata-only payload probe (D-T-A6-DEL-08).
 * Never loads, executes, or returns raw payload bytes.
 */
export type EvidencePayloadProbeResult =
  | {
      ok: true;
      availability: "available" | "unavailable" | "unknown";
      digest?: Digest;
      sizeBytes?: number;
      metadataOnly: true;
    }
  | {
      ok: false;
      reason:
        | "unavailable"
        | "timeout"
        | "technical_error"
        | "digest_missing";
      availability?: "unavailable" | "unknown";
    };

export interface EvidencePayloadPort {
  probeMetadata(input: {
    evidenceId: string;
    location?: string;
    expectedDigest?: Digest;
  }): Promise<EvidencePayloadProbeResult>;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts`

```typescript
import type { Evidence } from "../domain/types";

export type IdempotencyRecord = {
  evidenceId: string;
  fingerprint: string;
  operation:
    | "register"
    | "ingest_attempt"
    | "mark_unavailable"
    | "verify_integrity";
};

/**
 * Evidence repository — memory OCC via expectedVersion (D-T-A6-DEL-05).
 * No durability claim. No cross-aggregate transaction.
 */
export interface EvidenceRepositoryPort {
  findById(evidenceId: string): Promise<Evidence | null>;
  findByIdempotencyKey(idempotencyKey: string): Promise<{
    evidence: Evidence;
    record: IdempotencyRecord;
  } | null>;
  exists(evidenceId: string): Promise<boolean>;
  create(evidence: Evidence, record?: IdempotencyRecord): Promise<void>;
  update(
    evidence: Evidence,
    expectedVersion: number,
    record?: IdempotencyRecord,
  ): Promise<void>;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/ports/executionAttemptReader.ts`

```typescript
import type { ExecutionAttemptSnapshot } from "../domain/types";

/**
 * Read-only Attempt reader for T-A6 ingestion (D-T-A6-DEL-04).
 * Must never mutate Attempt. T-A5 must not depend on T-A6.
 */
export interface ExecutionAttemptReaderPort {
  findById(attemptId: string): Promise<ExecutionAttemptSnapshot | null>;
}
```

### `projects/sfia-studio/app/lib/oa/evidence-review/ports/idGenerator.ts`

```typescript
import type { ClockPort } from "@/lib/oa/doctrine";

/**
 * Bounded id helpers for Evidence D1.
 * Prefer caller-supplied evidenceId (T-A5 style); generators are for provenance/correlation.
 */
export interface IdGeneratorPort {
  newProvenanceId(): string;
  newCorrelationId(): string;
}

export type { ClockPort };
```


## 16. Contenu complet — tests D1

### `projects/sfia-studio/app/__tests__/oa/evidence-review/domainInvariants.test.ts`

```typescript
/**
 * T-A6-D1 Evidence domain invariants.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  isAttemptOwnerOfEvidence,
  validateEvidenceShape,
  type Evidence,
} from "@/lib/oa/evidence-review";
import { DIGEST_A, NOW } from "./helpers";

function baseEvidence(overrides: Partial<Evidence> = {}): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:domain-001",
    type: "document",
    source: "manual upload",
    sourceKind: "manual",
    producedAt: NOW,
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    freshness: "fresh",
    bindings: { projectId: "prj:campus360-oa" },
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:domain-001",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:domain-001",
    },
    version: 1,
    createdAt: NOW,
    ...overrides,
  };
}

describe("T-A6-D1 Evidence domain", () => {
  it("accepts a valid Evidence", () => {
    expect(validateEvidenceShape(baseEvidence())).toBeNull();
  });

  it("requires source", () => {
    expect(
      validateEvidenceShape(baseEvidence({ source: "" }))?.detailCode,
    ).toBe("EVIDENCE_SOURCE_REQUIRED");
  });

  it("requires provenance", () => {
    const evidence = baseEvidence();
    // @ts-expect-error intentional
    delete evidence.provenance;
    expect(validateEvidenceShape(evidence)?.detailCode).toBe("EVIDENCE_INVALID");
  });

  it("rejects empty bindings", () => {
    expect(
      validateEvidenceShape(baseEvidence({ bindings: {} }))?.detailCode,
    ).toBe("EVIDENCE_BINDING_REQUIRED");
  });

  it("rejects invalid binding prefixes", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({ bindings: { projectId: "bad:id" } }),
      )?.detailCode,
    ).toBe("EVIDENCE_BINDING_REQUIRED");
  });

  it("rejects secrets in source", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({ source: "token=super-secret-value-here" }),
      )?.detailCode,
    ).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });

  it("requires digest when verifiablePayload is true", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({ verifiablePayload: true }),
      )?.detailCode,
    ).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("requires digest when status is verified", () => {
    expect(
      validateEvidenceShape(baseEvidence({ status: "verified" }))?.detailCode,
    ).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("accepts verified with digest", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({ status: "verified", digest: DIGEST_A }),
      ),
    ).toBeNull();
  });

  it("requires executionAttemptId when sourceKind is execution_attempt", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({
          sourceKind: "execution_attempt",
          bindings: { projectId: "prj:campus360-oa" },
        }),
      )?.detailCode,
    ).toBe("EVIDENCE_BINDING_REQUIRED");
  });

  it("enforces unavailable availability/status pairing", () => {
    expect(
      validateEvidenceShape(
        baseEvidence({
          availability: "unavailable",
          status: "verified",
          digest: DIGEST_A,
        }),
      )?.detailCode,
    ).toBe("EVIDENCE_UNAVAILABLE");
  });

  it("documents Attempt is never Evidence owner", () => {
    expect(isAttemptOwnerOfEvidence()).toBe(false);
  });

  it("rejects containsSecrets true", () => {
    expect(
      validateEvidenceShape(
        // @ts-expect-error intentional adversarial
        baseEvidence({ containsSecrets: true }),
      )?.detailCode,
    ).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts`

```typescript
/**
 * MemoryEvidenceRepository OCC / isolation tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  EvidenceDomainError,
  MemoryEvidenceRepository,
  MemoryEvidenceStore,
  type Evidence,
} from "@/lib/oa/evidence-review";
import { NOW } from "./helpers";

function base(overrides: Partial<Evidence> & { evidenceId: string }): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    type: "document",
    source: "notes",
    sourceKind: "manual",
    producedAt: NOW,
    status: "available",
    classification: "public",
    storageMode: "metadata_only",
    availability: "available",
    bindings: { projectId: "prj:campus360-oa" },
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:repo-1",
      actor: { actorId: "actor:morris", role: "decision_maker" },
      source: "human_decision",
      timestamp: NOW,
      correlationId: "cor:repo-1",
    },
    version: 1,
    createdAt: NOW,
    idempotencyKey: `idem-${overrides.evidenceId}`,
    ...overrides,
  };
}

function buildRepo() {
  const store = new MemoryEvidenceStore();
  return { store, repo: new MemoryEvidenceRepository(store) };
}

describe("T-A6-D1 MemoryEvidenceRepository", () => {
  it("creates and returns a defensive clone", async () => {
    const { repo } = buildRepo();
    const evidence = base({ evidenceId: "ev:repo-1" });
    await repo.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp1",
      operation: "register",
    });
    const found = await repo.findById("ev:repo-1");
    expect(found?.status).toBe("available");
    expect(found).not.toBe(evidence);
    if (found) found.status = "verified";
    const again = await repo.findById("ev:repo-1");
    expect(again?.status).toBe("available");
  });

  it("refuses create with version other than 1", async () => {
    const { repo } = buildRepo();
    await expect(
      repo.create(base({ evidenceId: "ev:repo-2", version: 2 })),
    ).rejects.toBeInstanceOf(EvidenceDomainError);
  });

  it("refuses duplicate evidenceId", async () => {
    const { repo } = buildRepo();
    await repo.create(base({ evidenceId: "ev:repo-3" }));
    await expect(
      repo.create(base({ evidenceId: "ev:repo-3" })),
    ).rejects.toMatchObject({ detailCode: "EVIDENCE_ALREADY_EXISTS" });
  });

  it("enforces OCC on update", async () => {
    const { repo } = buildRepo();
    await repo.create(base({ evidenceId: "ev:repo-4" }));
    await expect(
      repo.update(
        base({ evidenceId: "ev:repo-4", version: 2, status: "stale" }),
        9,
      ),
    ).rejects.toMatchObject({ detailCode: "VERSION_CONFLICT" });
  });

  it("increments version monotonically on update", async () => {
    const { repo } = buildRepo();
    await repo.create(base({ evidenceId: "ev:repo-5" }));
    await repo.update(
      base({
        evidenceId: "ev:repo-5",
        version: 2,
        status: "unavailable",
        availability: "unavailable",
      }),
      1,
    );
    const found = await repo.findById("ev:repo-5");
    expect(found?.version).toBe(2);
  });

  it("resolves by idempotency key", async () => {
    const { repo } = buildRepo();
    const evidence = base({ evidenceId: "ev:repo-6" });
    await repo.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp6",
      operation: "register",
    });
    const found = await repo.findByIdempotencyKey(`idem-${evidence.evidenceId}`);
    expect(found?.evidence.evidenceId).toBe("ev:repo-6");
  });

  it("isolates store instances", async () => {
    const a = buildRepo();
    const b = buildRepo();
    await a.repo.create(base({ evidenceId: "ev:iso-a" }));
    expect(await b.repo.findById("ev:iso-a")).toBeNull();
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/helpers.ts`

```typescript
/**
 * Shared fixtures for T-A6-D1 Evidence tests.
 * @vitest-environment node
 */
import type { ActorReference, Digest } from "@/lib/oa/evidence-review";
import { createTestEvidenceReviewServices } from "@/lib/oa/evidence-review";

export const NOW = "2026-07-26T02:00:00.000Z";

export const DIGEST_A =
  "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" as Digest;
export const DIGEST_B =
  "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" as Digest;

export const ACTOR: ActorReference = {
  actorId: "actor:morris",
  role: "decision_maker",
  authorityLevel: "N3",
};

export const SYSTEM_ACTOR: ActorReference = {
  actorId: "actor:studio",
  role: "system",
  authorityLevel: "none",
};

export function buildServices() {
  return createTestEvidenceReviewServices({ fixedNowIso: NOW });
}
```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts`

```typescript
/**
 * IngestExecutionAttemptEvidence — T-A5 read-only bridge tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { SYSTEM_ACTOR, buildServices } from "./helpers";

describe("T-A6-D1 IngestExecutionAttemptEvidence", () => {
  it("ingests succeeded Attempt with resultRef as non-verified Evidence", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:oa-ok-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 3,
      status: "succeeded",
      resultRef: "res:attempt-stdout-001",
      completedAt: "2026-07-26T01:00:00.000Z",
      selectedAgentRef: "agt:alpha",
    });
    const before = structuredClone(s.fakeAttempts.getRaw("xat:oa-ok-001")!);
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:from-attempt-001",
      executionAttemptId: "xat:oa-ok-001",
      idempotencyKey: "idem-ingest-ok-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
      bindings: { projectId: "prj:campus360-oa" },
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).toBe("available");
    expect(result.evidence.status).not.toBe("verified");
    expect(result.evidence.sourceKind).toBe("execution_attempt");
    expect(result.evidence.bindings.executionAttemptId).toBe("xat:oa-ok-001");
    expect(result.evidence.bindings.executionContractId).toBe("xct:oa-001");
    expect(result.evidence.technicalResultRef).toBe("res:attempt-stdout-001");
    // Attempt unchanged
    expect(s.fakeAttempts.getRaw("xat:oa-ok-001")).toEqual(before);
    const audit = JSON.stringify(s.memoryAudit.events);
    expect(audit).not.toMatch(/PASS|payload|secret/i);
  });

  it("refuses failed Attempt", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:fail-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "failed",
      errorRef: "err:boom",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:fail-ingest",
      executionAttemptId: "xat:fail-001",
      idempotencyKey: "idem-ingest-fail-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("ATTEMPT_STATUS_REFUSED");
  });

  it("refuses running Attempt", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:run-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "running",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:run-ingest",
      executionAttemptId: "xat:run-001",
      idempotencyKey: "idem-ingest-run-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("ATTEMPT_STATUS_REFUSED");
  });

  it("refuses missing Attempt", async () => {
    const s = buildServices();
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:missing-attempt",
      executionAttemptId: "xat:missing-001",
      idempotencyKey: "idem-ingest-missing-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("ATTEMPT_NOT_FOUND");
  });

  it("refuses succeeded Attempt without resultRef", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:no-result-001",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "succeeded",
      completedAt: "2026-07-26T01:00:00.000Z",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:no-result",
      executionAttemptId: "xat:no-result-001",
      idempotencyKey: "idem-ingest-noresult-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("ATTEMPT_RESULT_UNAVAILABLE");
  });

  it("replays idempotent ingest", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:oa-ok-002",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "succeeded",
      resultRef: "res:ok-002",
      completedAt: "2026-07-26T01:00:00.000Z",
    });
    const req = {
      evidenceId: "ev:idem-ingest",
      executionAttemptId: "xat:oa-ok-002",
      idempotencyKey: "idem-ingest-replay-001",
      actor: SYSTEM_ACTOR,
      classification: "internal" as const,
      bindings: { projectId: "prj:campus360-oa" },
    };
    const first = await s.ingestExecutionAttemptEvidence.execute(req);
    const second = await s.ingestExecutionAttemptEvidence.execute(req);
    expect(first.ok && second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
  });

  it("never treats Attempt succeeded as PASS", async () => {
    const s = buildServices();
    s.fakeAttempts.seed({
      attemptId: "xat:oa-ok-003",
      executionContractId: "xct:oa-001",
      executionContractVersion: 1,
      status: "succeeded",
      resultRef: "res:ok-003",
      completedAt: "2026-07-26T01:00:00.000Z",
    });
    const result = await s.ingestExecutionAttemptEvidence.execute({
      evidenceId: "ev:no-pass",
      executionAttemptId: "xat:oa-ok-003",
      idempotencyKey: "idem-ingest-nopass-001",
      actor: SYSTEM_ACTOR,
      classification: "internal",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).not.toBe("verified");
    // Anti-claim: no PASS field exists on Evidence
    expect(
      Object.prototype.hasOwnProperty.call(result.evidence, "pass"),
    ).toBe(false);
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/registerEvidence.test.ts`

```typescript
/**
 * RegisterEvidence use-case tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { ACTOR, DIGEST_A, buildServices } from "./helpers";

describe("T-A6-D1 RegisterEvidence", () => {
  it("registers manual Evidence (happy path)", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:manual-001",
      idempotencyKey: "idem-register-manual-001",
      actor: ACTOR,
      type: "document",
      source: "manual upload by reviewer",
      sourceKind: "manual",
      bindings: {
        projectId: "prj:campus360-oa",
        cycleInstanceId: "cyc:modeled-001",
      },
      classification: "internal",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).toBe("available");
    expect(result.evidence.version).toBe(1);
    expect(result.evidence.containsSecrets).toBe(false);
    expect(s.memoryAudit.byName("oa.evidence.registered")).toHaveLength(1);
    const event = s.memoryAudit.events[0];
    expect(JSON.stringify(event)).not.toMatch(/payload|secret|token=/i);
  });

  it("registers external Evidence", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:ext-001",
      idempotencyKey: "idem-register-ext-001",
      actor: ACTOR,
      type: "artifact",
      source: "external CI artefact ref",
      sourceKind: "external",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "external_payload_ref",
      location: "refs/external/ci-001",
      digest: DIGEST_A,
      verifiablePayload: true,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.sourceKind).toBe("external");
    expect(result.evidence.digest).toBe(DIGEST_A);
  });

  it("replays identical idempotency key", async () => {
    const s = buildServices();
    const req = {
      evidenceId: "ev:idem-001",
      idempotencyKey: "idem-register-replay-001",
      actor: ACTOR,
      type: "document" as const,
      source: "notes",
      sourceKind: "manual" as const,
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public" as const,
      storageMode: "metadata_only" as const,
    };
    const first = await s.registerEvidence.execute(req);
    const second = await s.registerEvidence.execute(req);
    expect(first.ok && second.ok).toBe(true);
    if (!first.ok || !second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
    expect(second.evidence.evidenceId).toBe(first.evidence.evidenceId);
  });

  it("rejects idempotency conflict on different command", async () => {
    const s = buildServices();
    const key = "idem-register-conflict-001";
    await s.registerEvidence.execute({
      evidenceId: "ev:idem-c1",
      idempotencyKey: key,
      actor: ACTOR,
      type: "document",
      source: "notes-a",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const conflict = await s.registerEvidence.execute({
      evidenceId: "ev:idem-c2",
      idempotencyKey: key,
      actor: ACTOR,
      type: "document",
      source: "notes-b",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    expect(conflict.ok).toBe(false);
    if (conflict.ok) return;
    expect(conflict.error.detailCode).toBe("IDEMPOTENCY_CONFLICT");
  });

  it("rejects secrets", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:secret-001",
      idempotencyKey: "idem-register-secret-001",
      actor: ACTOR,
      type: "document",
      source: "Bearer abcdefghijklmnop",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "restricted",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });

  it("rejects missing bindings", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:bind-001",
      idempotencyKey: "idem-register-bind-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: {},
      classification: "public",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_BINDING_REQUIRED");
  });

  it("rejects verifiablePayload without digest", async () => {
    const s = buildServices();
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:digest-001",
      idempotencyKey: "idem-register-digest-001",
      actor: ACTOR,
      type: "artifact",
      source: "notes",
      sourceKind: "external",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "internal",
      storageMode: "external_payload_ref",
      verifiablePayload: true,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("surfaces repository persistence failure", async () => {
    const s = buildServices();
    s.store.failNextSave = true;
    const result = await s.registerEvidence.execute({
      evidenceId: "ev:fail-001",
      idempotencyKey: "idem-register-fail-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_PERSISTENCE_FAILED");
  });
});
```

### `projects/sfia-studio/app/__tests__/oa/evidence-review/verifyAndUnavailable.test.ts`

```typescript
/**
 * VerifyEvidenceIntegrity + MarkEvidenceUnavailable tests.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { ACTOR, DIGEST_A, DIGEST_B, buildServices } from "./helpers";

async function registerWithDigest(s: ReturnType<typeof buildServices>) {
  const result = await s.registerEvidence.execute({
    evidenceId: "ev:verify-001",
    idempotencyKey: "idem-verify-register-001",
    actor: ACTOR,
    type: "artifact",
    source: "fixture artefact",
    sourceKind: "external",
    bindings: { projectId: "prj:campus360-oa" },
    classification: "internal",
    storageMode: "internal_payload_ref",
    location: "refs/evidence/verify-001",
    digest: DIGEST_A,
    verifiablePayload: true,
  });
  expect(result.ok).toBe(true);
  return result;
}

describe("T-A6-D1 VerifyEvidenceIntegrity", () => {
  it("verifies matching digest", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", {
      availability: "available",
      digest: DIGEST_A,
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.status).toBe("verified");
    expect(result.evidence.version).toBe(2);
    expect(s.memoryAudit.byName("oa.evidence.integrity_verified")).toHaveLength(
      1,
    );
  });

  it("rejects digest mismatch", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", {
      availability: "available",
      digest: DIGEST_B,
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_INTEGRITY_MISMATCH");
  });

  it("rejects missing digest on Evidence", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:nodigest-001",
      idempotencyKey: "idem-verify-nodigest-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:nodigest-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_DIGEST_REQUIRED");
  });

  it("rejects unavailable payload", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", { failWith: "unavailable" });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_UNAVAILABLE");
  });

  it("rejects fake timeout", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", { failWith: "timeout" });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("PAYLOAD_METADATA_ERROR");
  });

  it("rejects OCC conflict", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", {
      availability: "available",
      digest: DIGEST_A,
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 99,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("VERSION_CONFLICT");
  });

  it("refuses verify after MarkEvidenceUnavailable", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    const marked = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "fixture revoked",
      idempotencyKey: "idem-mark-before-verify-001",
    });
    expect(marked.ok).toBe(true);
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 2,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_UNAVAILABLE");
  });

  it("never executes payload (metadataOnly only)", async () => {
    const s = buildServices();
    await registerWithDigest(s);
    s.fakePayload.setScript("ev:verify-001", {
      availability: "available",
      digest: DIGEST_A,
    });
    const result = await s.verifyEvidenceIntegrity.execute({
      evidenceId: "ev:verify-001",
      actor: ACTOR,
      expectedVersion: 1,
    });
    expect(result.ok).toBe(true);
    const audit = JSON.stringify(s.memoryAudit.events);
    expect(audit).not.toMatch(/execute|shell|filesystem|network/i);
  });
});

describe("T-A6-D1 MarkEvidenceUnavailable", () => {
  it("marks Evidence unavailable", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:unavail-001",
      idempotencyKey: "idem-unavail-reg-001",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:unavail-001",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "source withdrawn",
      idempotencyKey: "idem-unavail-001",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.evidence.availability).toBe("unavailable");
    expect(result.evidence.status).toBe("unavailable");
    expect(result.evidence.version).toBe(2);
    expect(result.evidence.unavailableReason).toBe("source withdrawn");
  });

  it("rejects missing Evidence", async () => {
    const s = buildServices();
    const result = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:missing-unavail",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "gone",
      idempotencyKey: "idem-unavail-missing-001",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_NOT_FOUND");
  });

  it("rejects version conflict", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:unavail-occ",
      idempotencyKey: "idem-unavail-occ-reg",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:unavail-occ",
      actor: ACTOR,
      expectedVersion: 9,
      reason: "stale",
      idempotencyKey: "idem-unavail-occ-001",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("VERSION_CONFLICT");
  });

  it("rejects secret in reason", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:unavail-secret",
      idempotencyKey: "idem-unavail-secret-reg",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const result = await s.markEvidenceUnavailable.execute({
      evidenceId: "ev:unavail-secret",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "api_key=abcdefghijklmnopqrstuvwxyz",
      idempotencyKey: "idem-unavail-secret-001",
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.error.detailCode).toBe("EVIDENCE_SECRET_FORBIDDEN");
  });

  it("idempotent replay of mark unavailable", async () => {
    const s = buildServices();
    await s.registerEvidence.execute({
      evidenceId: "ev:unavail-idem",
      idempotencyKey: "idem-unavail-idem-reg",
      actor: ACTOR,
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId: "prj:campus360-oa" },
      classification: "public",
      storageMode: "metadata_only",
    });
    const req = {
      evidenceId: "ev:unavail-idem",
      actor: ACTOR,
      expectedVersion: 1,
      reason: "withdrawn",
      idempotencyKey: "idem-unavail-idem-001",
    };
    const first = await s.markEvidenceUnavailable.execute(req);
    const second = await s.markEvidenceUnavailable.execute(req);
    expect(first.ok && second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.reusedFromIdempotencyKey).toBe(true);
  });
});
```


## 17. Gate suivant candidat

`GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## 18. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
