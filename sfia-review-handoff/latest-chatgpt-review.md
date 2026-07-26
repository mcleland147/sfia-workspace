# SFIA Review Pack — FULL — T-A6 D1 Evidence Core Validation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 02:53:11 CEST (+0200) |
| **Cycle** | QA / validation · T-A6-D1 Evidence core |
| **Profil** | Critical |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `dc1c7f5f524adedc57e2b42b9ecec77ec9731836` |
| **HEAD final** | `2829eb659cbea1ac492744bc07e005d58473a9de` |
| **Commits locaux** | `dbe1055` fix validation findings · `363d7dd` validate D1 · `2829eb6` record HEAD |
| **Push projet / PR / merge** | **NON / NON / NON** |
| **D2–D5** | **NON** |
| **Modeled / T-A3 / T-A4 / T-A5 / packages** | **NON** modifiés |
| **SQL / API/UI / T-A7 / adapter / exécution** | **ABSENT / ABSENTES / NON / ABSENT / ABSENTE** |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE VALIDATED AFTER CORRECTION — D2 REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — HEAD initial `dc1c7f5…` ; HEAD final `2829eb659cbea1ac492744bc07e005d58473a9de` ; main/merge-base `b25c20e6…` ; tracked clean hors `.tmp-sfia-review/` ; handoff source blob `b51d9d8…` vérifié.

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
HEAD 2829eb659cbea1ac492744bc07e005d58473a9de
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
HEAD fef588690f6af368d27aea4e1aaabf10d4f70871
branch refs/heads/sfia/review-handoff
```

## 2. Handoff source

| Item | Valeur |
|------|--------|
| Commit | `fef588690f6af368d27aea4e1aaabf10d4f70871` |
| Blob | `b51d9d8d045eca0b3a6a7e2865b6b6c8fbeee0a9` |
| Verdict | `… D1 EVIDENCE CORE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |

## 3. CKC

`…/pilots/04-qa-validation.md` · candidate · `executionAuthority=false` · fallback architecture technique

## 4. Sources

Template · méthode · delivery 01–09 · runtime D1 · tests D1 · Evidence schema 0.2.0-oa · T-A3–T-A5 RO · handoff D1

## 5. Diff initial (avant validation)

Tracked clean @ `dc1c7f5` ; seuls fichiers untracked `.tmp-sfia-review/`.

## 6. Fichiers

| Action | Paths |
|--------|-------|
| Créés | `10-delivery-d1-validation.md` · `adversarialValidation.test.ts` |
| Modifiés | `fakeEvidencePayloadAdapter.ts` · `invariants.ts` · `registerEvidence.ts` · `ingestExecutionAttemptEvidence.ts` · README T-A6 |
| Supprimés | aucun |
| Interdits | **aucun** |

## 7. Findings & corrections

| ID | Sévérité | Statut |
|----|----------|--------|
| F-A6-D1-01 | Major | **corrigé** — fake digest fail-closed, no expectedDigest echo |
| F-A6-D1-02 | Major | **corrigé** — provenance/actor displayName secret scan |
| Critical | — | **aucun** |
| Minor ouverts bloquants | — | **aucun** |

## 8. Tests (réexécution)

| Suite | Résultat |
|-------|----------|
| D1 | **57 PASS** (was 48 ; +9 adversarial) |
| T-A3 | **50 PASS** |
| T-A4 | **61 PASS** |
| T-A5 | **88 PASS** |
| Modeled T-A6 | **27 PASS** |
| typecheck / lint / diff-check / secret scan lib | **PASS / PASS / PASS / CLEAN** |

## 9. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 = **OPEN**
C1–C4 = **RECOMMENDED — NOT VALIDATED**

## 10. Validation finale

PASS — aucun Critical/Major ouvert ; D2–D5 absents ; T-A3–T-A5/modeled/packages inchangés ; fake-only ; tracked clean après commits.

## 11. Commits locaux

| Commit | Message |
|--------|---------|
| `dbe105574eae2fcbe3d672a3bfca41f3a3ef32b3` | `fix(sfia-studio): correct T-A6 D1 validation findings` |
| `363d7ddc55a1980c72e7343776521369fe3c42a9` | `docs(sfia-studio): validate T-A6 D1 evidence core` |
| `2829eb659cbea1ac492744bc07e005d58473a9de` | `docs(sfia-studio): record T-A6 D1 validation HEAD` |

## 12. Contenu complet — `10-delivery-d1-validation.md`

```markdown
# 10 — T-A6-D1 Evidence Core Validation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D1 — Evidence core |
| **Cycle** | QA / validation (Critical) |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `dc1c7f5f524adedc57e2b42b9ecec77ec9731836` |
| **HEAD final** | `363d7ddc55a1980c72e7343776521369fe3c42a9` |
| **Horodatage** | 2026-07-26 02:52:30 CEST (+0200) |
| **Handoff source** | blob `b51d9d8d045eca0b3a6a7e2865b6b6c8fbeee0a9` |
| **Statut** | **T-A6-D1 VALIDATED AFTER CORRECTION** |
| **Fake-only / mémoire** | **oui** |
| **D2–D5** | **NON** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE VALIDATED AFTER CORRECTION — D2 REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

| Item | Valeur |
|------|--------|
| Delivery | `01`…`09` + README + handoff D1 |
| Runtime | `app/lib/oa/evidence-review/**` + tests D1 |
| Modeled RO | Evidence `0.2.0-oa` |
| T-A3–T-A5 | lecture seule |
| CKC | `…/pilots/04-qa-validation.md` · candidate · `executionAuthority=false` |
| Fallback | architecture technique |

---

## 2. Méthode (5 niveaux)

1. Conformité décisions DEL-01/03/04/05/06/08/09/10
2. Domaine Evidence vs schema 0.2.0-oa
3. Application + infrastructure (use cases, ports, fakes, OCC)
4. Tests adversariaux (+ corrections)
5. Bornage / non-régression T-A3–T-A5 / modeled / packages

---

## 3. Conformité décisions

| Décision | Résultat |
|----------|----------|
| DEL-01 module `evidence-review/**` | **PASS** |
| DEL-03 use cases par fichier | **PASS** |
| DEL-04 ingestion T-A5 explicite RO | **PASS** |
| DEL-05 OCC `expectedVersion` | **PASS** |
| DEL-06 contrôles sync fail-closed + audit | **PASS** |
| DEL-08 fake / metadata-only | **PASS** (renforcé après correction) |
| DEL-09 D1 avant D2–D5 | **PASS** — D2–D5 absents |
| DEL-10 pas de auto-launch | **PASS** |

---

## 4. Résultats domaine / use cases

| Zone | Résultat |
|------|----------|
| Evidence IDs / bindings / source / provenance | **PASS** |
| Classification / storageMode / availability / freshness | **PASS** |
| Digest `sha256:`+64hex ; requis si verified/verifiable | **PASS** |
| Retention / legalHold distincts | **PASS** |
| Attempt ≠ owner ; succeeded ≠ verified ≠ PASS | **PASS** |
| RegisterEvidence (candidate only) | **PASS** |
| Ingest (succeeded+resultRef only ; Attempt immuable) | **PASS** |
| Verify (metadata-only ; pas d’écho expectedDigest) | **PASS** après correction |
| MarkUnavailable (pas de cascade) | **PASS** |
| MemoryEvidenceRepository OCC / clones | **PASS** |

---

## 5. Sécurité / RGPD / audit

| Contrôle | Résultat |
|----------|----------|
| Secrets source/location/reason/provenance | **PASS** après correction provenance |
| Audit refs-only | **PASS** |
| Payload jamais exécuté | **PASS** |
| Fake sans réseau/shell/FS productif | **PASS** |
| Secret scan lib | **CLEAN** |
| U-M02 | **OPEN** (inchangé) |

---

## 6. Tests (réexécution propre)

| Suite | Commande | Avant | Après | Résultat |
|-------|----------|-------|-------|----------|
| D1 | `npm test -- __tests__/oa/evidence-review` | 48 | **57** | **PASS** (+9 adversariaux) |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | 50 | **PASS** |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | 61 | **PASS** |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | 88 | **PASS** |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | 27 | 27 | **PASS** |
| Typecheck | `npm run typecheck` | PASS | **PASS** | |
| Lint | `npm run lint` | PASS | **PASS** (0 warning) | |
| Diff check | `git diff --check` | PASS | **PASS** | |
| Build | — | — | non exécuté (typecheck OK) | |

Durées approximatives : D1 ~290–320ms · T-A3 ~410ms · T-A4 ~470ms · T-A5 ~530ms · modeled ~130ms.
Skipped : 0.

---

## 7. Findings

### Critical

Aucun.

### Major (corrigés)

| ID | Fichier | Règle | Preuve | Correction | Blocker D1 |
|----|---------|-------|--------|------------|------------|
| F-A6-D1-01 | `fakeEvidencePayloadAdapter.ts` | Pas de faux verified | Sans script, digest = expectedDigest ⇒ verified | Fail-closed sans script ; digest observé explicite uniquement ; jamais d’écho | **oui → corrigé** |
| F-A6-D1-02 | `invariants.ts` + Register/Ingest | Secrets interdits dans provenance | displayName Bearer/token persistables | `validateProvenanceSecrets` + scan actor displayName | **oui → corrigé** |

### Minor

Aucun ouvert bloquant. Tests adversariaux ajoutés pour timeout/cancelled, digest invalide, Register verified forbidden, clones imbriqués, OCC concurrent.

### Observations

| ID | Note |
|----|------|
| O1 | Cross-aggregate Evidence↔ReviewBundle → D2 |
| O2 | Self-review Critical runtime → C2 candidate |
| O3 | Bornes taille/nombre → C3 candidate |
| O4 | LPS → C4 / B5 |
| O5 | `CONCURRENT_MODIFICATION` alias peu utilisé (VERSION_CONFLICT primaire) |
| O6 | MarkUnavailable réécrit `idempotencyKey` agrégat (index create conservé) |

---

## 8. Corrections

Périmètre strict D1 :

- `FakeEvidencePayloadAdapter` fail-closed
- `validateProvenanceSecrets` + scans Register/Ingest
- `adversarialValidation.test.ts` (9 tests)

Commit correctif : `fix(sfia-studio): correct T-A6 D1 validation findings`

Retests : toutes suites PASS après correction.

---

## 9. Réserves (OPEN — inchangées)

| ID | Statut |
|----|--------|
| B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 | **OPEN** |
| R-T-A6-DEL-C1…C4 | **RECOMMENDED — NOT VALIDATED** |

R-T-A3-1 / R-T-A3-2 HARD pour exécution réelle.
R-M01 : VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION (non fermée).

---

## 10. Anti-claims

- Pas D2 READY / DELIVERY COMPLETE / runtime ready / production ready
- Pas R-M01 / U-M02 / C1–C4 fermées ou validées
- Pas persistence réelle / vendor / T-A7 / exécution réelle
- Pas modification modeled / T-A3–T-A5 / packages
- VALIDATED ≠ ADOPTED · D2 non lancé

---

## 11. Gate suivant

`GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A`
(**NOT consumed**)

---

## 12. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE VALIDATED AFTER CORRECTION — D2 REQUIRES MORRIS GO`
```

## 13. Contenu complet — README T-A6

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
| **Gate validate modeled** | `GO VALIDATE T-A6 MODELED` (**CONSUMED**) |
| **Gate delivery framing** | `GO FRAME T-A6 DELIVERY` (**CONSUMED**) |
| **Gate delivery arbitrage** | `GO ARBITRATE T-A6 DELIVERY` (**CONSUMED**) |
| **Gate delivery décision** | `GO DECIDE T-A6 DELIVERY` (**CONSUMED**) |
| **Gate delivery D1 implement** | `GO IMPLEMENT T-A6 DELIVERY D1` (**CONSUMED**) |
| **Gate delivery D1 validate** | `GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` — VALIDATED AFTER CORRECTION |
| **Runtime D1** | `app/lib/oa/evidence-review/**` — **T-A6-D1 VALIDATED** (après correction) |
| **Fake-only / mémoire** | **oui** |
| **D2–D5** | **NON** lancés |
| **Push / PR / merge projet** | **NONE** |
| **Statut pack** | **T-A6-D1 VALIDATED** |
| **Horodatage validation D1** | 2026-07-26 02:52:30 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE VALIDATED AFTER CORRECTION — D2 REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif (ce cycle)

Valider formellement T-A6-D1 — Evidence core ; corriger les findings Major ; ne pas lancer D2.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) … [09-delivery-d1-implementation.md](./09-delivery-d1-implementation.md)
3. [10-delivery-d1-validation.md](./10-delivery-d1-validation.md) — **validation D1**
4. Runtime / tests D1 (corrections F-A6-D1-01/02)

## Validation D1

- 57 tests D1 PASS (dont 9 adversariaux post-correction)
- Non-régression T-A3/T-A4/T-A5 + modeled T-A6 PASS
- Major F-A6-D1-01 (faux verified via digest echo) **corrigé**
- Major F-A6-D1-02 (secrets provenance) **corrigé**
- Aucun Critical/Major ouvert

## Hors périmètre

D2 ReviewBundle · D3 Claim · D4 Maturity · D5 · API/UI/SQL · T-A7

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

- Pas D2 READY / DELIVERY COMPLETE / production ready
- Pas R-M01 / U-M02 / C1–C4 fermées ou validées
- Pas persistence réelle / vendor / T-A7 / exécution réelle
- Pas modification modeled / T-A3–T-A5 / packages
- VALIDATED ≠ ADOPTED · D2 non lancé
```

## 14. Diff utile complet — corrections D1 (`dbe1055`)

```diff
commit dbe105574eae2fcbe3d672a3bfca41f3a3ef32b3
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 02:52:44 2026 +0200

    fix(sfia-studio): correct T-A6 D1 validation findings

    Co-authored-by: Cursor <cursoragent@cursor.com>
---
 .../evidence-review/adversarialValidation.test.ts  | 270 +++++++++++++++++++++
 .../application/ingestExecutionAttemptEvidence.ts  |   1 +
 .../application/registerEvidence.ts                |   1 +
 .../lib/oa/evidence-review/domain/invariants.ts    |  20 ++
 .../infrastructure/fakeEvidencePayloadAdapter.ts   |  26 +-
 5 files changed, 316 insertions(+), 2 deletions(-)

diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
new file mode 100644
index 0000000..721b638
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialValidation.test.ts
@@ -0,0 +1,270 @@
+/**
+ * T-A6-D1 adversarial validation tests (post-correction findings).
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  validateEvidenceShape,
+  validateProvenanceSecrets,
+  type Evidence,
+} from "@/lib/oa/evidence-review";
+import { ACTOR, DIGEST_A, NOW, SYSTEM_ACTOR, buildServices } from "./helpers";
+
+function baseEvidence(overrides: Partial<Evidence> = {}): Evidence {
+  return {
+    schemaVersion: "0.2.0-oa",
+    evidenceId: "ev:adv-001",
+    type: "document",
+    source: "manual upload",
+    sourceKind: "manual",
+    producedAt: NOW,
+    status: "available",
+    classification: "internal",
+    storageMode: "metadata_only",
+    availability: "available",
+    freshness: "fresh",
+    bindings: { projectId: "prj:campus360-oa" },
+    containsSecrets: false,
+    provenance: {
+      schemaVersion: "0.1.0-oa",
+      provenanceRecordId: "prv:adv-001",
+      actor: { actorId: "actor:morris", role: "decision_maker" },
+      source: "human_decision",
+      timestamp: NOW,
+      correlationId: "cor:adv-001",
+    },
+    version: 1,
+    createdAt: NOW,
+    ...overrides,
+  };
+}
+
+describe("T-A6-D1 adversarial validation corrections", () => {
+  it("F-A6-D1-01: verify without payload script must not mint verified", async () => {
+    const s = buildServices();
+    await s.registerEvidence.execute({
+      evidenceId: "ev:no-script-verify",
+      idempotencyKey: "idem-adv-noscript-001",
+      actor: ACTOR,
+      type: "artifact",
+      source: "fixture",
+      sourceKind: "external",
+      bindings: { projectId: "prj:campus360-oa" },
+      classification: "internal",
+      storageMode: "internal_payload_ref",
+      digest: DIGEST_A,
+      verifiablePayload: true,
+    });
+    // no setScript — fail-closed
+    const result = await s.verifyEvidenceIntegrity.execute({
+      evidenceId: "ev:no-script-verify",
+      actor: ACTOR,
+      expectedVersion: 1,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.detailCode).toBe("PAYLOAD_METADATA_ERROR");
+    const stored = await s.repository.findById("ev:no-script-verify");
+    expect(stored?.status).toBe("available");
+  });
+
+  it("F-A6-D1-01: script without digest must not echo expectedDigest", async () => {
+    const s = buildServices();
+    await s.registerEvidence.execute({
+      evidenceId: "ev:script-nodigest",
+      idempotencyKey: "idem-adv-script-nodigest-001",
+      actor: ACTOR,
+      type: "artifact",
+      source: "fixture",
+      sourceKind: "external",
+      bindings: { projectId: "prj:campus360-oa" },
+      classification: "internal",
+      storageMode: "internal_payload_ref",
+      digest: DIGEST_A,
+      verifiablePayload: true,
+    });
+    s.fakePayload.setScript("ev:script-nodigest", {
+      availability: "available",
+      // digest intentionally omitted
+    });
+    const result = await s.verifyEvidenceIntegrity.execute({
+      evidenceId: "ev:script-nodigest",
+      actor: ACTOR,
+      expectedVersion: 1,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.detailCode).toBe("EVIDENCE_DIGEST_REQUIRED");
+  });
+
+  it("F-A6-D1-02: rejects secret in provenance actor displayName", () => {
+    const evidence = baseEvidence({
+      provenance: {
+        schemaVersion: "0.1.0-oa",
+        provenanceRecordId: "prv:secret-prov",
+        actor: {
+          actorId: "actor:morris",
+          role: "decision_maker",
+          displayName: "Bearer abcdefghijklmnop",
+        },
+        source: "human_decision",
+        timestamp: NOW,
+        correlationId: "cor:secret-prov",
+      },
+    });
+    expect(validateProvenanceSecrets(evidence.provenance)?.detailCode).toBe(
+      "EVIDENCE_SECRET_FORBIDDEN",
+    );
+    expect(validateEvidenceShape(evidence)?.detailCode).toBe(
+      "EVIDENCE_SECRET_FORBIDDEN",
+    );
+  });
+
+  it("F-A6-D1-02: Register rejects secret in actor displayName", async () => {
+    const s = buildServices();
+    const result = await s.registerEvidence.execute({
+      evidenceId: "ev:secret-actor",
+      idempotencyKey: "idem-adv-secret-actor-001",
+      actor: {
+        ...ACTOR,
+        displayName: "token=super-secret-value-here",
+      },
+      type: "document",
+      source: "notes",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:campus360-oa" },
+      classification: "public",
+      storageMode: "metadata_only",
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.detailCode).toBe("EVIDENCE_SECRET_FORBIDDEN");
+  });
+
+  it("refuses Register with status verified", async () => {
+    const s = buildServices();
+    const result = await s.registerEvidence.execute({
+      evidenceId: "ev:reg-verified-forbidden",
+      idempotencyKey: "idem-adv-reg-verified-001",
+      actor: ACTOR,
+      type: "document",
+      source: "notes",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:campus360-oa" },
+      classification: "public",
+      storageMode: "metadata_only",
+      // @ts-expect-error adversarial — verified forbidden at register
+      status: "verified",
+      digest: DIGEST_A,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.detailCode).toBe("EVIDENCE_VERIFIED_FORBIDDEN");
+  });
+
+  it("refuses invalid digest format on Register", async () => {
+    const s = buildServices();
+    const result = await s.registerEvidence.execute({
+      evidenceId: "ev:bad-digest",
+      idempotencyKey: "idem-adv-bad-digest-001",
+      actor: ACTOR,
+      type: "artifact",
+      source: "fixture",
+      sourceKind: "external",
+      bindings: { projectId: "prj:campus360-oa" },
+      classification: "internal",
+      storageMode: "external_payload_ref",
+      digest: "sha256:not-a-valid-hex-digest" as Evidence["digest"],
+      verifiablePayload: true,
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) return;
+    expect(result.error.detailCode).toBe("EVIDENCE_INVALID");
+  });
+
+  it("refuses timeout and cancelled Attempts on ingest", async () => {
+    const s = buildServices();
+    for (const status of ["timeout", "cancelled"] as const) {
+      const attemptId = `xat:adv-${status}`;
+      s.fakeAttempts.seed({
+        attemptId,
+        executionContractId: "xct:oa-001",
+        executionContractVersion: 1,
+        status,
+        resultRef: "res:should-not-matter",
+      });
+      const result = await s.ingestExecutionAttemptEvidence.execute({
+        evidenceId: `ev:adv-${status}`,
+        executionAttemptId: attemptId,
+        idempotencyKey: `idem-adv-ingest-${status}-001`,
+        actor: SYSTEM_ACTOR,
+        classification: "internal",
+      });
+      expect(result.ok).toBe(false);
+      if (!result.ok) {
+        expect(result.error.detailCode).toBe("ATTEMPT_STATUS_REFUSED");
+      }
+    }
+  });
+
+  it("defensive clone: nested bindings mutation after get does not affect store", async () => {
+    const s = buildServices();
+    await s.registerEvidence.execute({
+      evidenceId: "ev:clone-nested",
+      idempotencyKey: "idem-adv-clone-001",
+      actor: ACTOR,
+      type: "document",
+      source: "notes",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:campus360-oa" },
+      classification: "public",
+      storageMode: "metadata_only",
+    });
+    const found = await s.repository.findById("ev:clone-nested");
+    expect(found).not.toBeNull();
+    if (!found) return;
+    found.bindings.projectId = "prj:mutated";
+    found.provenance.actor.displayName = "mutated";
+    const again = await s.repository.findById("ev:clone-nested");
+    expect(again?.bindings.projectId).toBe("prj:campus360-oa");
+    expect(again?.provenance.actor.displayName).toBeUndefined();
+  });
+
+  it("OCC concurrent stale update is refused", async () => {
+    const s = buildServices();
+    await s.registerEvidence.execute({
+      evidenceId: "ev:occ-race",
+      idempotencyKey: "idem-adv-occ-001",
+      actor: ACTOR,
+      type: "document",
+      source: "notes",
+      sourceKind: "manual",
+      bindings: { projectId: "prj:campus360-oa" },
+      classification: "public",
+      storageMode: "metadata_only",
+    });
+    const [a, b] = await Promise.all([
+      s.markEvidenceUnavailable.execute({
+        evidenceId: "ev:occ-race",
+        actor: ACTOR,
+        expectedVersion: 1,
+        reason: "first",
+        idempotencyKey: "idem-adv-occ-a-001",
+      }),
+      s.markEvidenceUnavailable.execute({
+        evidenceId: "ev:occ-race",
+        actor: ACTOR,
+        expectedVersion: 1,
+        reason: "second",
+        idempotencyKey: "idem-adv-occ-b-001",
+      }),
+    ]);
+    const oks = [a, b].filter((r) => r.ok);
+    const fails = [a, b].filter((r) => !r.ok);
+    expect(oks).toHaveLength(1);
+    expect(fails).toHaveLength(1);
+    if (!fails[0].ok) {
+      expect(fails[0].error.detailCode).toBe("VERSION_CONFLICT");
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
index 6b23118..d329d06 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/ingestExecutionAttemptEvidence.ts
@@ -109,6 +109,7 @@ export class IngestExecutionAttemptEvidence {

       const secretViolation = validateSecretFreeFields({
         location: request.location,
+        actorDisplayName: request.actor.displayName,
       });
       if (secretViolation) {
         return fail(secretViolation.detailCode, secretViolation.reason);
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts
index 56e8c03..36f35db 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/registerEvidence.ts
@@ -104,6 +104,7 @@ export class RegisterEvidence {
       const secretViolation = validateSecretFreeFields({
         source: request.source,
         location: request.location,
+        actorDisplayName: request.actor.displayName ?? request.producedBy?.displayName,
       });
       if (secretViolation) {
         return fail(secretViolation.detailCode, secretViolation.reason);
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts b/projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts
index 30d77e7..6511817 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/domain/invariants.ts
@@ -208,6 +208,9 @@ export function validateSecretFreeFields(input: {
   location?: string;
   unavailableReason?: string;
   technicalResultRef?: string;
+  actorDisplayName?: string;
+  correlationId?: string;
+  provenanceRecordId?: string;
 }): InvariantViolation | null {
   for (const [key, value] of Object.entries(input)) {
     if (containsForbiddenSecret(value)) {
@@ -220,6 +223,19 @@ export function validateSecretFreeFields(input: {
   return null;
 }

+/** Deep scan of provenance string fields (modeled: secrets forbidden in provenance). */
+export function validateProvenanceSecrets(
+  provenance: Evidence["provenance"] | undefined,
+): InvariantViolation | null {
+  if (!provenance) return null;
+  return validateSecretFreeFields({
+    actorDisplayName: provenance.actor?.displayName,
+    correlationId: provenance.correlationId,
+    provenanceRecordId: provenance.provenanceRecordId,
+    source: provenance.actor?.actorId,
+  });
+}
+
 /**
  * Shape guard before persist. Does not claim Attempt ownership.
  * Attempt is never owner — only a possible binding/sourceKind.
@@ -296,9 +312,13 @@ export function validateEvidenceShape(
     location: evidence.location,
     unavailableReason: evidence.unavailableReason,
     technicalResultRef: evidence.technicalResultRef,
+    actorDisplayName: evidence.producedBy?.displayName,
   });
   if (secretViolation) return secretViolation;

+  const provenanceSecret = validateProvenanceSecrets(evidence.provenance);
+  if (provenanceSecret) return provenanceSecret;
+
   if (evidence.location !== undefined && evidence.location.length > 1000) {
     return { detailCode: "EVIDENCE_INVALID", reason: "location_too_long" };
   }
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts
index 333ac71..bcf7d3c 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/fakeEvidencePayloadAdapter.ts
@@ -14,6 +14,9 @@ export type FakePayloadScript = {
 /**
  * FakeEvidencePayloadAdapter — metadata-only, no network/filesystem/shell.
  * Scripts are keyed by evidenceId (or "*" default).
+ *
+ * Fail-closed: without an explicit script, the probe fails.
+ * Observed digest is NEVER echoed from expectedDigest (F-A6-D1-01).
  */
 export class FakeEvidencePayloadAdapter implements EvidencePayloadPort {
   private scripts = new Map<string, FakePayloadScript>();
@@ -31,8 +34,19 @@ export class FakeEvidencePayloadAdapter implements EvidencePayloadPort {
     location?: string;
     expectedDigest?: Digest;
   }): Promise<EvidencePayloadProbeResult> {
+    // expectedDigest is intentionally unused for observation — claimants cannot mint matches.
+    void input.expectedDigest;
+
     const script =
-      this.scripts.get(input.evidenceId) ?? this.scripts.get("*") ?? {};
+      this.scripts.get(input.evidenceId) ?? this.scripts.get("*");
+
+    if (!script) {
+      return {
+        ok: false,
+        reason: "technical_error",
+        availability: "unknown",
+      };
+    }

     if (script.failWith) {
       return {
@@ -52,10 +66,18 @@ export class FakeEvidencePayloadAdapter implements EvidencePayloadPort {
       };
     }

+    if (!script.digest) {
+      return {
+        ok: false,
+        reason: "digest_missing",
+        availability: "unknown",
+      };
+    }
+
     return {
       ok: true,
       availability,
-      digest: script.digest ?? input.expectedDigest,
+      digest: script.digest,
       sizeBytes: script.sizeBytes,
       metadataOnly: true,
     };
```

## 15. Gate suivant candidat

`GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## 16. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE VALIDATED AFTER CORRECTION — D2 REQUIRES MORRIS GO`
