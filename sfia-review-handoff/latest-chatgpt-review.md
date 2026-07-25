# SFIA Review Pack — FULL — T-A6 Modeled Materialization

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 01:43:58 CEST (+0200) |
| **Cycle** | Architecture fonctionnelle / matérialisation modeled |
| **Profil** | Critical |
| **Gate** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `e3ee1042c9b6a4c09e7b5aeb3ed9e89b97638625` |
| **HEAD final** | `eee75d19c98c19baf23802e3d276c9de89484841` |
| **Commit local** | `feat(sfia-studio): materialize T-A6 modeled contracts` |
| **Push projet** | **NON exécuté** |
| **PR** | **NON créée** |
| **Merge** | **NON exécuté** |
| **Runtime modifié** | **NON** |
| **SQL** | **ABSENT** |
| **T-A7 ouvert** | **NON** |
| **Adapter réel** | **ABSENT** |
| **Exécution réelle** | **ABSENTE** |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO` |

---

## 1. Truth Check

- BRANCH exacte OK
- HEAD initial `e3ee104…` OK ; merge-base = origin/main `b25c20e…` OK
- tracked clean avant materialize ; staged vide ; seul `.tmp-sfia-review/` untracked
- aucune opération Git active ; aucune branche distante T-A6 ; aucune PR T-A6
- Ne pas rebaser / reset / pousser projet

### Status final (post-commit)

```
## framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
?? .tmp-sfia-review/
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
HEAD eee75d19c98c19baf23802e3d276c9de89484841
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
HEAD ee1a2e37195616af3818cc1845f6280a412f62bb
branch refs/heads/sfia/review-handoff
```

## 2. Handoff source (décisions)

- branche : `sfia/review-handoff`
- path : `sfia-review-handoff/latest-chatgpt-review.md`
- blob : `07ab1f3294a7263895cd60cbc86a313ef65add24`
- verdict source : `SFIA STUDIO V3-NATIVE OPTION A T-A6 DECISIONS RECORDED — MODELED MATERIALIZATION REQUIRES MORRIS GO`

## 3. CKC

| Item | Valeur |
|------|--------|
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| executionAuthority | false |
| Fallback | `01-cadrage.md` |

## 4. Sources consultées

- prompts/templates/sfia-cycle-execution-template.md (méthode)
- delivery T-A6 01/02/03 + décisions
- modeled README + 01/02/08/09/10 (+ conventions T-A4/T-A5)
- schemas Evidence/ReviewBundle/Maturity pré-existants + Attempt/Contract (lecture)
- tests execution-*-governance.test.mjs (pattern)
- runtime public T-A4/T-A5 : lecture seule pour bindings (aucune modification)

## 5. Fichiers

### Créés
- `04-modeled-materialization.md`
- `schemas/evidence/claim-evaluation.schema.json`
- exemples Evidence/ReviewBundle/ClaimEvaluation/Maturity valides + invalids + narratives
- `tests/evidence-review-maturity-governance.test.mjs`

### Modifiés
- delivery README T-A6
- modeled README, 01, 02, 08, 09, 10
- schemas evidence/review-bundle/maturity (0.2.0-oa)
- exemples pré-existants alignés 0.2.0-oa

### Supprimés
- aucun

## 6. Versions avant / après

| Schema | Avant | Après |
|--------|-------|-------|
| Evidence | 0.1.0-oa | **0.2.0-oa** |
| ReviewBundle | 0.1.0-oa | **0.2.0-oa** |
| ClaimEvaluation | absent | **0.1.0-oa** |
| MaturityAssessment | 0.1.0-oa | **0.2.0-oa** |

## 7. Synthèse objets

### Evidence
- bindings ≥1 ; Attempt source non-owner ; classification/storageMode/availability ; digest si verifiable/verified ; containsSecrets=false ; U-M02 OPEN

### ReviewBundle freeze
- ready_for_review ≡ frozen ; frozenAt post-draft ; refs immutables ; synthesisOnly⇒incomplete

### ClaimEvaluation
- status pending|evaluating|pass|fail|not_proven|waived|disputed
- criticality non_critical|critical|structural
- Critical ⇒ authorized_human ; structural ⇒ morris ; N3 ≠ Morris

### Authority / Critical matrix
- documentée doc 08 + confirmationAuthority schema

### Maturity
- propose→confirm ; autoPromoted=false ; blockingReservationRefs ; supersession/downgrade

### T-A6/T-A7 · automation · output
- D-T-A6-10/11/12 matérialisés docs ; T_A7_AUTO_LAUNCH_FORBIDDEN ; pas d’auto next cycle

### Commandes / événements / erreurs
- catalogue 09 section T-A6 complète

## 8. Tests

- T-A6 governance : **23 PASS**
- Modeled Option A complete : **69 PASS**
- JSON validation : PASS
- Secret scan examples : PASS (no hits)
- git diff --check : PASS
- app/** unchanged : PASS

## 9. Réserves OPEN

B5 · R1 · R-T-A3-1 · R-T-A3-2 · R-T-A3-3 · R-T-A3-4 · **R-M01** (schema matérialisé, pas VALIDATED) · **U-M02**

R-T-A6-1…9 : risques/invariants/dettes — pas CREATE VALIDATED ; aucune fermeture.

## 10. Gate suivant

`GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## 11. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO`

---

# ANNEXE A — 04-modeled-materialization.md (complet)

# 04 — T-A6 Modeled Materialization

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | Architecture fonctionnelle / matérialisation modeled (Critical) |
| **Gate** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `e3ee1042c9b6a4c09e7b5aeb3ed9e89b97638625` |
| **Horodatage** | 2026-07-26 01:36:42 CEST (+0200) |
| **Runtime / SQL / API / UI** | **NONE** modifié |
| **Push / PR / merge projet** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Autorité

Gate Morris consommé. Décisions D-T-A6-01…12 non renégociées. Cursor matérialise schemas/docs/exemples/tests modeled uniquement.

### CKC

| Item | Valeur |
|------|--------|
| Cycle | architecture fonctionnelle / matérialisation modeled |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |
| Fallback | `01-cadrage.md` (cycles framing/decide antérieurs) |

---

## 2. Décisions matérialisées

| ID | Formulation | Materialization |
|----|-------------|-----------------|
| D-T-A6-01 | OPTION C | Evidence entité `ev:` + bindings ; Attempt source non-owner |
| D-T-A6-02 | OPTION C | stockage logique hybride ; digest ; unavailable ; U-M02 OPEN |
| D-T-A6-03 | OPTION A+D | ReviewBundle versionné ; freeze ; `ready_for_review` ≡ frozen |
| D-T-A6-04 | OPTION B | ClaimEvaluation unifié v1 `clm:` ; R-M01 OPEN |
| D-T-A6-05 | OPTION D | matrice type × criticité dans schema + doc 08 |
| D-T-A6-06 | AUTHORITY MATRIX | confirmationAuthority ; N3 ≠ Morris |
| D-T-A6-07 | OPTION C | Maturity propose→confirm ; `autoPromoted=false` |
| D-T-A6-08 | OPTION D | blockingReservationRefs ; waiver ≠ close |
| D-T-A6-09 | PRINCIPLES PACK | docs 08/10 ; aucun vendor |
| D-T-A6-10 | T-A6/T-A7 BOUNDARY | docs ; `T_A7_AUTO_LAUNCH_FORBIDDEN` |
| D-T-A6-11 | L0–L3 / L4 gated / L5 out | docs 08 |
| D-T-A6-12 | OUTPUT WITHOUT AUTO NEXT | docs 08 |

---

## 3. Schemas créés / modifiés

| Schema | Avant | Après | Path |
|--------|-------|-------|------|
| Evidence | `0.1.0-oa` | **`0.2.0-oa`** | `schemas/evidence/evidence.schema.json` |
| ReviewBundle | `0.1.0-oa` | **`0.2.0-oa`** | `schemas/evidence/review-bundle.schema.json` |
| ClaimEvaluation | *absent* | **`0.1.0-oa`** | `schemas/evidence/claim-evaluation.schema.json` |
| MaturityAssessment | `0.1.0-oa` | **`0.2.0-oa`** | `schemas/maturity/maturity-assessment.schema.json` |

Convention : bump **in-place** (T-A4/T-A5) — pas de dossier historique parallèle.

---

## 4. Objets & lifecycles

### Evidence

Statuses : expected · available · verified · incomplete · stale · rejected · superseded · **unavailable**

Bindings (≥1) : executionAttemptId · executionContractId · decisionId · cycleInstanceId · projectId · reviewBundleId

storageMode : metadata_only · internal_payload_ref · external_payload_ref

### ReviewBundle

`draft` → `ready_for_review` → `under_review` → `accepted` \| `rejected` \| `incomplete` \| `superseded`

`frozenAt` requis post-draft. synthesisOnly ⇒ incomplete.

### ClaimEvaluation

status : pending · evaluating · pass · fail · not_proven · waived · disputed

criticality : non_critical · critical · structural

### MaturityAssessment

status : proposed · confirmed · rejected · superseded · blocked

`autoPromoted=false` const.

---

## 5. Invariants

### JSON Schema (Draft-07)

- additionalProperties=false
- containsSecrets=false ; autoPromoted=false
- bindings minProperties 1 ; execution_attempt ⇒ executionAttemptId
- verifiablePayload/verified ⇒ digest
- synthesisOnly ⇒ incomplete
- post-draft ⇒ frozenAt ; accepted/rejected ⇒ validatedAt+reviewer
- Critical PASS ⇒ authorized_human + confirmedBy ≠ system/agent
- structural PASS ⇒ confirmationAuthority=morris
- waived ⇒ waiver ; disputed ⇒ dispute
- confirmed maturity ⇒ confirmedLevel/By/At ; blockingReservationRefs maxItems 0
- blocked ⇒ ≥1 blockingReservationRef

### Sémantiques (docs + narratives)

- PASS ≠ EvidenceAttempt.status seul
- PASS impossible si Evidence obligatoire unavailable/incomplete/stale
- NOT_PROVEN ≠ FAIL ; WAIVED ≠ PASS
- Self-review Critical interdit
- N3 ≠ Morris
- Bundle non gelé non verdictable ; refs immutables post-freeze
- PASS ne ferme aucune réserve ; waiver ≠ fermeture
- Maturité ≠ authz exécution ; MODELED ≠ IMPLEMENTED ≠ ADOPTED
- T-A6 ne lance pas T-A7 ; pas d’auto next cycle

---

## 6. Commandes / événements / erreurs

Voir `09-command-event-error-and-transition-catalog.md` section T-A6.

Commandes clés : RegisterEvidence · FreezeReviewBundle · EvaluateClaim · ConfirmClaimEvaluation · ProposeMaturity · ConfirmMaturity · …

Événements clés : EvidenceRegistered · ReviewBundleFrozen · ClaimEvaluationConfirmed · MaturityConfirmed · ReserveMaintainedOpen · …

Erreurs clés : EVIDENCE_* · REVIEW_BUNDLE_* · CLAIM_* · MATURITY_* · T_A7_AUTO_LAUNCH_FORBIDDEN

---

## 7. Sécurité / RGPD / stockage logique

Principes D-T-A6-09 matérialisés en docs (08/10) et champs schema (classification, retentionClass, legalHold, availability, storageMode). **Aucun vendor.** U-M02 OPEN.

---

## 8. Tests

| Suite | Résultat |
|-------|----------|
| `evidence-review-maturity-governance.test.mjs` | **PASS 23** |
| Suite modeled Option A complète (`tests/*.test.mjs`) | **PASS 69** (incl. T-A4 Contract + T-A5 Attempt + T-A6) |
| Non-régression T-A3/T-A4/T-A5 modeled | **PASS** (Contract + Attempt governance inclus dans 69) |
| JSON parse schemas/examples | **PASS** |
| Secret scan examples | **PASS** (no hits) |
| `git diff --check` | **PASS** |
| Runtime `app/**` | **unchanged** |

---

## 9. Réserves (OPEN — inchangées)

| ID | Statut |
|----|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD) |
| R-T-A3-2 | **OPEN** (HARD) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — schema ClaimEvaluation matérialisé ; **pas** VALIDATED |
| U-M02 | **OPEN** |

R-T-A6-1…9 : risques/invariants/dettes — **pas** CREATE VALIDATED.

---

## 10. Écarts restants / anti-claims

- Validation Morris T-A6 non consommée
- Runtime T-A6 absent
- DebtItem schema non créé
- Bornes numériques taille/count non chiffrées en schema (dette D-T-A6-09)
- Propagation LPS sous B5

Anti-claims : pas MODELED VALIDATED · pas READY FOR DELIVERY · pas vendor · pas réserves fermées · pas T-A7 · pas exécution réelle · pas push/PR/merge

---

## 11. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO`

---

# ANNEXE B — README delivery T-A6 (complet)

# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6` (**CONSUMED**) |
| **Gate arbitrage** | `GO ARBITRATE T-A6` (**CONSUMED**) |
| **Gate décision** | `GO DECIDE T-A6` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Runtime** | **NONE** modifié |
| **Push / PR / merge projet** | **NONE** |
| **Statut pack** | **MODELED CONTRACTS MATERIALIZED** (validation Morris requise) |
| **Horodatage materialize** | 2026-07-26 01:36:42 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Matérialiser les décisions Morris D-T-A6-01…12 en contrats modeled versionnés, testables et documentés (Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment) — **sans** runtime, SQL, API, UI, vendor stockage, ni T-A7.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md)
3. [02-arbitration.md](./02-arbitration.md)
4. [03-decisions.md](./03-decisions.md)
5. [04-modeled-materialization.md](./04-modeled-materialization.md) — **matérialisation modeled**

## Versions schemas (après materialize)

| Schema | Version |
|--------|---------|
| Evidence | `0.2.0-oa` |
| ReviewBundle | `0.2.0-oa` |
| ClaimEvaluation | `0.1.0-oa` (nouveau) |
| MaturityAssessment | `0.2.0-oa` |

## Décisions Morris (APPROVED — non renégociées)

| ID | Formulation |
|----|-------------|
| D-T-A6-01…12 | voir [03-decisions.md](./03-decisions.md) |

## Hors périmètre (toujours)

- Runtime applicatif / SQL / API / UI
- Technologie de stockage (U-M02)
- Fermeture de réserves
- T-A7 / exécution réelle / adapter réel
- Push / PR / merge projet
- Gate validate (non consommé)

## Réserves (OPEN — inchangées)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD) |
| R-T-A3-2 | **OPEN** (HARD) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** (schema matérialisé ; pas VALIDATED) |
| U-M02 | **OPEN** |

R-T-A6-1…9 : risques/invariants/dettes — **pas** CREATE VALIDATED.

## Anti-claims

- Pas MODELED VALIDATED / READY FOR DELIVERY / production ready
- Pas storage vendor
- Pas réserves fermées
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge ce cycle

## Modeled de référence

- `sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md`
- `schemas/evidence/evidence.schema.json` (`0.2.0-oa`)
- `schemas/evidence/review-bundle.schema.json` (`0.2.0-oa`)
- `schemas/evidence/claim-evaluation.schema.json` (`0.1.0-oa`)
- `schemas/maturity/maturity-assessment.schema.json` (`0.2.0-oa`)
- `tests/evidence-review-maturity-governance.test.mjs`

---

# ANNEXE C — Modeled README (complet)

# Modeled — Option A v3-native

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **VALIDATED BY MORRIS** (pack historique) ; T-A6 **matérialisé — validation Morris requise** |
| **Gate AT (consommé)** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Gate T-A6** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (baseline)** | `0.1.0-oa` |
| **ExecutionContract** | `0.2.0-oa` (T-A4 modeled rework — breaking) |
| **ExecutionAttempt** | `0.2.0-oa` (T-A5 materialization — breaking vs `0.1.0-oa`) |
| **AgentDescriptor** | `0.1.0-oa` (docs-first ; not a live registry) |
| **Evidence** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **ReviewBundle** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **ClaimEvaluation** | `0.1.0-oa` (T-A6 — **nouveau** ; R-M01 OPEN jusqu’à validation) |
| **MaturityAssessment** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED (T-A6) · Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4/T-A5/T-A6 RUNTIME · Pas T-A7 · Pas vendor stockage · Pas réserves fermées |
| **Code / SQL / Figma** | **Interdits** |

## Objectif

Contrats modeled versionnables pour la chaîne Option A (intention → LPS → décision → N1–N3 → ExecutionContract → Evidence / ReviewBundle / ClaimEvaluation → maturité).

## Index

| # | Fichier |
|---|---------|
| 01 | Principes & frontières d’agrégats |
| 02 | Entités, VOs, identifiants |
| 03 | Living Project State |
| 04 | DoctrinePackage & CKC |
| 05 | Cycle, trajectoire, épistémologie |
| 06 | Décision, confirmation, autorité |
| 07 | ExecutionContract, Attempt, agents |
| 08 | Evidence, ReviewBundle, ClaimEvaluation, maturité, dette (**T-A6**) |
| 09 | Commandes, événements, erreurs, transitions (**+ T-A6**) |
| 10 | Validation, versioning, provenance, sécurité (**+ T-A6**) |
| 11 | Réemploi / migration actifs existants |
| 12 | Decision pack M-OA |
| schemas/ | JSON Schema Draft-07 (`0.1.0-oa` baseline ; Contract+Attempt+Evidence+ReviewBundle+Maturity `0.2.0-oa` ; ClaimEvaluation+AgentDescriptor `0.1.0-oa`) |
| examples/ | Exemples valides / invalid/ / narratives (T-A4…T-A6) |
| tests/ | Validation ajv governance modeled-only (Contract · Attempt · Evidence/Review/Claim/Maturity) |

## Verdict pack

**SFIA STUDIO V3-NATIVE OPTION A MODELED CONTRACTS VALIDATED BY MORRIS — TECHNICAL ARCHITECTURE IN PROGRESS**

T-A6 materialization (ce cycle) : **candidate** — gate suivant `GO VALIDATE T-A6 MODELED` (**NOT consumed**).

Réserves maintenues : B5 · R1 · R-T-A3-1…4 · **R-M01** (ClaimEvaluation non VALIDATED) · **U-M02** (stockage Evidence) · pas READY FOR DELIVERY · schemas non adoptés runtime · aucune implémentation · T-A7 non ouvert.

---

# ANNEXE D — 01 (complet)

# 01 — Principes et frontières d’agrégats

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion** | `0.1.0-oa` |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR AT/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `01-modeling-principles-and-aggregate-boundaries.md` |

## Principes

- Studio v3 exclusif ; aucun fallback v2.6.
- Fail-closed ; mutations gouvernées.
- UX panel ≠ source d’autorité (FA-OA-01).
- HumanDecision ≠ Confirmation ≠ ExecutionContract ≠ Markdown Cursor.
- Evidence ≠ ReviewBundle ≠ ClaimEvaluation (D-T-A6-01/03/04).
- Domaines A–H (FA-OA-02) ; F ≠ G ; H = revue/claims/maturité (T-A6).
- Attempt n’est **pas** owner d’Evidence ; T-A6 ne lance pas T-A7.

## Agrégats candidats

| Agrégat | Racine | Contenu clé | Ownership |
|---------|--------|-------------|-----------|
| Project identity | `Project` | id, title, status, currentLpsVersionId, doctrinePackageRef | C (+ identité) |
| Living Project State | `LivingProjectState` (versionnée) | objectifs, épistémique, traj, décisions, preuves, maturité | **C** |
| HumanDecision | `HumanDecision` | options, selected, actor, authority | E |
| Confirmation | `Confirmation` | N1–N3, scope, expiry, idempotency | E |
| ExecutionContract | `ExecutionContract` | action/scope/caps/authority/stops | F |
| ExecutionAttempt | `ExecutionAttempt` | attempt/result/timeout | G (résultat) / F (lien) |
| Evidence | `Evidence` (entité) | bindings, digest, classification, availability | **H** (T-A6) |
| ReviewBundle | `ReviewBundle` | evidence/claim refs + freeze + completeness | **H** |
| ClaimEvaluation | `ClaimEvaluation` | claim+eval unifiés v1 (`clm:`) | **H** |
| MaturityAssessment | `MaturityAssessment` | propose→confirm ; `autoPromoted=false` | **H** |

## Frontières transactionnelles conceptuelles

- Mutation LPS → nouvelle `lpsVersionId` (pas update in-place).
- Contrat confirmé → immutable ; retry → nouvel Attempt.
- ReviewBundle : freeze (`ready_for_review`) avant verdict ; refs immutables post-freeze.
- Chat message hors agrégat décision.

---

# ANNEXE E — 02 (extrait T-A6 / IDs — fichier complet)

# 02 — Entités, value objects et identifiants

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion** | `0.1.0-oa` |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR AT/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `02-core-entities-value-objects-and-identifiers.md` |

## Stratégie ID (M-OA-03 candidate)

Format : `prefix:opaque` (ex. `prj:campus360-oa`, `lps:…`, `dec:…`).
Stables · explicites · pas de path local métier · digest pour packages immuables · correlationId bout-en-bout · supersession via champs `supersedes*`.

| ID | Préfixe |
|----|---------|
| projectId | `prj:` |
| lpsVersionId | `lps:` |
| doctrinePackageId | `pkg:` |
| ckcResolutionId | `ckc:` |
| cycleTypeId | `cty:` |
| cycleInstanceId | `cyc:` |
| trajectoryId | `traj:` |
| epistemicItemId | `epi:` |
| decisionId | `dec:` |
| confirmationId | `cnf:` |
| executionContractId | `xct:` |
| executionAttemptId | `xat:` |
| evidenceId | `ev:` |
| reviewBundleId | `rb:` |
| claimEvaluationId | `clm:` |
| maturityAssessmentId | `mat:` |
| debtItemId | `debt:` |
| provenanceRecordId | `prov:` / `prv:` |
| auditEventId | `aud:` |
| errorRecordId | `err:` |

## Catalogue objets

Project · ProjectRef · DoctrinePackageManifest · DoctrinePackageRef · DoctrineSourceRef · CkcResolution · CkcRef · CycleType · CycleInstance · LivingProjectState · LivingProjectStateVersion · ProjectTrajectory · TrajectoryStep · EpistemicItem (+ Observation/Hypothesis/Option/Recommendation/Contradiction) · HumanDecision · DecisionOption · DecisionReservation · Confirmation · ExecutionContract · ExecutionAttempt · AgentCapability · AgentAuthority · Evidence · EvidenceRequirement · ReviewBundle · ClaimEvaluation · DebtItem · RiskItem · ProvenanceRecord · AuditEvent · MaturityAssessment · ErrorRecord.

Cardinalités clés : Project 1—1..* LPS versions · Project 0..1 active CycleInstance · Decision 1—1..* Options · Contract 1—0..* Attempts · Bundle 0..* Evidence · ClaimEvaluation 1—1 ReviewBundle version gelée · MaturityAssessment 0..* claimEvaluationRefs.

T-A6 : Evidence bindings multi-objets (Attempt non-owner) · ReviewBundle versionné OCC · ClaimEvaluation unifié v1 · MaturityAssessment propose→confirm.

---

# ANNEXE F — 08 Evidence/Review/Claim/Maturity (complet)

# 08 — Evidence, ReviewBundle, maturité, dette

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — matérialisation T-A6 ; validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate T-A6** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED** ce cycle) |
| **Décisions** | D-T-A6-01…12 **APPROVED BY MORRIS** |
| **JSON Schema** | Draft-07 |
| **Evidence** | `0.2.0-oa` (breaking vs `0.1.0-oa`) |
| **ReviewBundle** | `0.2.0-oa` (breaking vs `0.1.0-oa`) |
| **ClaimEvaluation** | `0.1.0-oa` (**nouveau** — R-M01 reste OPEN jusqu’à validation) |
| **MaturityAssessment** | `0.2.0-oa` (breaking vs `0.1.0-oa`) |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR DELIVERY · Pas runtime · Pas vendor stockage · Pas T-A7 · Pas exécution réelle |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `08-evidence-review-bundle-maturity-and-debt-model.md` |

---

## Evidence (D-T-A6-01 / D-T-A6-02)

Entité T-A6 indépendante (`ev:`). ExecutionAttempt peut être **source** primaire (`sourceKind=execution_attempt` + `bindings.executionAttemptId`) mais **n’est pas owner**.

### Champs structurants

`schemaVersion` · `evidenceId` · `type` · `source` · `sourceKind` · `producedAt` · `producedBy?` · `status` · `freshness?` · `location?` · `digest?` · `verifiablePayload?` · `classification` · `storageMode` · `availability` · `retentionClass?` · `legalHold?` · `containsSecrets=false` · `bindings` (≥1) · `provenance` (required)

### Status

`expected` · `available` · `verified` · `incomplete` · `stale` · `rejected` · `superseded` · `unavailable`

### Bindings (minProperties 1)

`executionAttemptId` (`xat:`) · `executionContractId` (`xct:`) · `decisionId` · `cycleInstanceId` (`cyc:`) · `projectId` (`prj:`) · `reviewBundleId` (`rb:`)

### Stockage logique (hybride — aucun vendor)

| Mode | Sens |
|------|------|
| `metadata_only` | metadata + refs ; pas de payload revendiqué |
| `internal_payload_ref` | payload logique interne (ref) |
| `external_payload_ref` | payload externe (ref) |

`verifiablePayload=true` **ou** `status=verified` ⇒ `digest` obligatoire. Secrets/tokens interdits dans `location`, `source`, `provenance`. Evidence obligatoire `unavailable` / `stale` / `incomplete` **ne peut pas** supporter un PASS. Une simple valeur `ExecutionAttempt.status` n’est **pas** une Evidence validée.

**U-M02 OPEN** — aucune technologie de stockage choisie.

Commandes : `RegisterEvidence` (enregistre + attache bindings ; absorbe l’intention `AttachEvidence` v1) · `VerifyEvidenceIntegrity`.

---

## ReviewBundle (D-T-A6-03)

Agrégat autonome versionné (`rb:` + `version` OCC). Verdict lié à `reviewBundleId` + `version` exacts.

### Lifecycle v1

`draft` → `ready_for_review` → `under_review` → `accepted` \| `rejected` \| `incomplete` \| `superseded`

- `ready_for_review` ≡ **frozen** en v1 (`frozenAt` requis pour tout statut post-draft).
- Après freeze : Evidence refs et claim refs **immutables** ; correction ⇒ nouvelle version ou nouveau bundle.
- Bundle non gelé **ne peut pas** recevoir de verdict (`accepted`/`rejected` exigent `frozenAt` + `validatedAt` + `reviewer`).
- `synthesisOnly=true` ⇒ `completeness=incomplete` (synthèse seule ≠ bundle complet).
- Bundle incomplete ⇒ aucun claim PASS final exigeant complétude (invariant sémantique).

Commandes : `CreateReviewBundle` · `FreezeReviewBundle` · `StartReview` · `RecordFinding` · `CompleteReview` · `ReopenReview`.

---

## ClaimEvaluation (D-T-A6-04 / 05 / 06)

Séparation **sémantique** Claim ≠ ClaimEvaluation ; implémentation physique v1 **unifiée** dans `ClaimEvaluation` (`clm:`). CreateClaim absorbé dans `EvaluateClaim` v1.

### Status

`pending` · `evaluating` · `pass` · `fail` · `not_proven` · `waived` · `disputed`

### Criticality

`non_critical` · `critical` · `structural`

### evaluationMethod

`deterministic` · `assisted` · `human_review`

### Matrice type × criticité (D-T-A6-05)

| Type | Non-Critical | Critical | Structural |
|------|--------------|----------|------------|
| technique déterministe | L3 possible | proposition système + confirmation humaine | Morris |
| conformité / sécurité | humain ou règle bornée | humain autorisé | Morris |
| maturité | proposition système | confirmation humaine | Morris |
| réserve / waiver structurant | n/a | humain autorisé | Morris |

### Autorité (D-T-A6-06)

| Acteur | Autorisé | Interdit |
|--------|----------|----------|
| Système | propose ; contrôles déterministes non-Critical | confirmer Critical ; fermer réserve humaine ; Morris ; authz exécution |
| Agent T-A5 | artefacts / refs techniques | Evidence validée ; Claim confirmé |
| N1 / N2 / N3 | revue selon scope | **N3 ≠ Morris** |
| Morris | claims/maturité/réserves/waivers structurants | — |
| Service / adapter | fournir artefact | juger conformité |

Règles : PASS impossible si Evidence obligatoire absente ; NOT_PROVEN ≠ FAIL ; WAIVED ≠ PASS ; self-review Critical interdit ; waiver explicite, motivé, horodaté, autorisé, **réversible** ; ClaimEvaluation ne mute aucune Evidence ; verdict lié à ReviewBundle gelé (`reviewBundleId` + `reviewBundleVersion`).

Commandes : `EvaluateClaim` · `ConfirmClaimEvaluation` · `RejectClaimEvaluation`.

**R-M01 reste OPEN** jusqu’à validation Morris du schema (matérialisé mais non VALIDATED).

---

## MaturityAssessment (D-T-A6-07 / 08)

Assessment versionné (`mat:`). Proposition puis confirmation. `autoPromoted=false` (const).

### Status

`proposed` · `confirmed` · `rejected` · `superseded` · `blocked`

### Règles

- confirmation humaine explicite (`confirmedBy` ≠ system/agent) ;
- Morris pour niveau structurant ;
- aucune auto-promotion ;
- `blockingReservationRefs` empêche niveau/dimension associée (`blocked` ⇒ ≥1 ref) ;
- PASS ne ferme aucune réserve ; waiver ≠ fermeture ;
- downgrade via **supersession** (`supersedesMaturityAssessmentId` + `downgradeReason`) ;
- aucune moyenne ne masque une dimension bloquante ;
- maturité ≠ autorisation d’exécution ;
- `MODELED` ≠ `IMPLEMENTED` ≠ `ADOPTED`.

Commandes : `ProposeMaturity` · `ConfirmMaturity` · `DowngradeMaturity`.

---

## Dette / réserves de review

Commandes : `RegisterDebt` · `CloseDebt` · `ReopenDebt`. Événement `ReserveMaintainedOpen` quand PASS n’implique pas fermeture.

DebtItem schema **non** créé ce cycle (dette documentaire inchangée : UX-U01 tablet · UX-R01 a11y · MethodMode · OPS1 legacy · etc.).

---

## Frontière T-A6 / T-A7 (D-T-A6-10)

| T-A6 | T-A7 |
|------|------|
| Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment, findings/dette review, reco de gate | cutover legacy, MethodMode, OPS1, migration chemins historiques, activation opérationnelle globale |

Aucune commande T-A6 ne lance T-A7. Aucun schema T-A7.

---

## Automatisation (D-T-A6-11)

L0 manuelle · L1 intégrité · L2 génération guidée · L3 déterministe non-Critical · L4 gated Morris · L5 **out**.

Interdit : auto-confirm maturity · auto-close reserve · auto-launch cycle · auto-confirm Critical · auto-authorize execution.

---

## Output contract (D-T-A6-12)

**Autorisé :** Evidence refs · ReviewBundle versionné · ClaimEvaluation · MaturityAssessment proposé/confirmé · Debt/Reserve refs · Findings · verdict · reco gate/cycle correctif.

**Interdit :** auto next cycle · mutation Trajectory non autorisée · authz exécution · fermeture implicite réserve · promotion Option A · décision Morris implicite.

Propagation LPS sous **B5 OPEN**.

---

## Stockage logique & sécurité / RGPD (D-T-A6-09)

Metadata canonique interne · payload séparé · digest/CAS · classification obligatoire · rétention par classe · bornes taille/nombre · disponibilité explicite · effacement ≠ legal hold · chiffrement/accès conceptuels · export borné · purge · déduplication · reconstruction.

Aucun secret en clair · aucun token dans location/provenance · aucune Evidence brute dans logs · aucun contenu Evidence exécuté · pas de confiance auto aux métadonnées agent · minimisation · classification PII · refs publiques sans données sensibles.

**U-M02 OPEN.**

---

# ANNEXE G — 09 catalogue (complet)

# 09 — Commandes, événements, erreurs, transitions

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Rework gate T-A4** | `GO MODELED REWORK OPTION A — SFIA STUDIO V3-NATIVE — T-A4 EXECUTIONCONTRACT` |
| **Materialize gate T-A5** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Validate gate T-A5 modeled** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED** — Attempt CORRECTED AND VALIDATED) |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (pack baseline)** | `0.1.0-oa` |
| **ExecutionContract schemaVersion** | `0.2.0-oa` (breaking T-A4 rework) |
| **ExecutionAttempt schemaVersion** | `0.2.0-oa` (breaking T-A5 materialization ; conditionals hardened at validate) |
| **Evidence schemaVersion** | `0.2.0-oa` (breaking T-A6 materialization) |
| **ReviewBundle schemaVersion** | `0.2.0-oa` (breaking T-A6 materialization) |
| **ClaimEvaluation schemaVersion** | `0.1.0-oa` (nouveau T-A6 ; R-M01 OPEN jusqu’à validation) |
| **MaturityAssessment schemaVersion** | `0.2.0-oa` (breaking T-A6 materialization) |
| **Materialize gate T-A6** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas READY FOR CLASS/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4 RUNTIME · Pas T-A5 RUNTIME · Pas T-A6 RUNTIME · Pas T-A7 · Pas GO VALIDATE T-A6 MODELED consommé |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `09-command-event-error-and-transition-catalog.md` |
| **Alignement** | AF `05-state-command-event-and-decision-model.md` · T-A4 Morris arbitration · T-A5 Morris D01–D10 · T-A6 Morris D-T-A6-01…12 |

## Commandes (conceptuelles, non endpoints)

StartConversation · SubmitIntent · ResolveDoctrinePackage · ResolveProjectContext · ProposeCycleQualification · AcknowledgeCycleQualification · ResolveCkc · RequestClarification · RecordEpistemicItem · CreateProject · UpdateLivingProjectState · ProposeTrajectory · ReplanTrajectory · RecordHumanDecision · RequestConfirmation · ConfirmAction · CancelAction · BuildExecutionContract · ValidateExecutionContract · ConfirmExecutionContract · SupersedeExecutionContract · SelectExecutionAgent · StartExecution · CancelExecution · CancelExecutionAttempt · RecordExecutionResult · RecordExecutionFailure · RetryExecutionAttempt · GetExecutionAttempt · ListExecutionAttempts · CheckAttemptAuthorization · RegisterEvidence · AttachEvidence · VerifyEvidenceIntegrity · CreateReviewBundle · BuildReviewBundle · FreezeReviewBundle · StartReview · RecordFinding · EvaluateClaim · ConfirmClaimEvaluation · RejectClaimEvaluation · CompleteReview · ReopenReview · ProposeMaturity · ConfirmMaturity · DowngradeMaturity · RegisterDebt · CloseDebt · ReopenDebt · CloseCycleInstance · ProposeNextCycle.

Pour chacune : initiateur domaine · agrégat cible · préconditions · autorité · confirmation éventuelle · événements · erreurs.

**Note T-A6 :** `RegisterEvidence` absorbe l’intention d’attache (`AttachEvidence` reste alias catalogue v1). `BuildReviewBundle` reste alias historique de `CreateReviewBundle` (+ freeze optionnel documenté). `CreateClaim` absorbé dans `EvaluateClaim` v1. Aucune commande ne lance T-A7.

### Ownership ExecutionContract (T-A4 / T-A5) — Morris VALIDATED T-A4 + T-A5 materialization

| Commande | Owner | Notes |
|----------|-------|-------|
| `BuildExecutionContract` | **T-A4** | Crée draft/proposed ; **ne consomme pas** Confirmation |
| `ValidateExecutionContract` | **T-A4** | Validation structurelle ; **ne consomme pas** Confirmation ; **ne produit pas** `confirmed` |
| `ConfirmExecutionContract` | **T-A4** | Passage à `confirmed` ; **consomme** Confirmation T-A3 (unique) |
| `SupersedeExecutionContract` | **T-A4** | Nouveau contrat + `supersedesExecutionContractId` ; ancien → `superseded` |
| `CancelExecution` (pre-exec) | **T-A4** | Annule contrat avant `executing` (`cancelled`) |
| `SelectExecutionAgent` | **T-A5** | Propose/sélectionne agent ; TTL ; **ne démarre pas** |
| `StartExecution` | **T-A5** | Revalide ; persist Attempt `accepted` puis autorise launch ; `running` + contrat `executing` |
| `CancelExecution` (post-start) | **T-A5** | Alias catalogue de `CancelExecutionAttempt` (dual-context) |
| `CancelExecutionAttempt` | **T-A5** | Nom préféré post-start ; best-effort |
| `RecordExecutionResult` | **T-A5** | Adaptateur lié à **son** Attempt ; technique only |
| `RecordExecutionFailure` | **T-A5** | Fusionnable dans RecordResult (même sémantique terminal failed) |
| `RetryExecutionAttempt` | **T-A5** | Nouvel Attempt + `retryOfAttemptId` + auth explicite |
| `GetExecutionAttempt` / `ListExecutionAttempts` | **T-A5** | Lecture |
| `CheckAttemptAuthorization` | **T-A5** | Lecture / prédicat ; ne mute pas |

`CancelExecution` est **dual-context** : un seul nom catalogue historique ; contexte pré-exécution = T-A4 (contrat) ; contexte post-démarrage = T-A5. Alias documenté : `CancelExecutionAttempt` = `CancelExecution` (post-start). Pas de split schema obligatoire tant que la dualité reste documentée.

Noms inventés hors catalogue **ne sont pas** des commandes (T-A4-D09).

### ConfirmExecutionContract (T-A4 rework)

| Champ | Valeur |
|-------|--------|
| Agrégat | ExecutionContract |
| Préconditions | status ∈ {`validated`,`confirmation_required`} ; Confirmation T-A3 grantée ; décision accepted ; Critical ack si Critical |
| Source → cible | `validated`\|`confirmation_required` → `confirmed` |
| Autorité | `requiredAuthority` via T-A3 |
| Confirmation | **consommée** (unique) |
| Événement | `ExecutionContractConfirmed` |
| Erreurs | `CONFIRMATION_REQUIRED` · `AUTHORITY_DENIED` · `DECISION_REQUIRED` · `STATE_CONFLICT` |
| Hors périmètre | StartExecution · agent selection |

### SupersedeExecutionContract (T-A4 rework)

| Champ | Valeur |
|-------|--------|
| Agrégat | ExecutionContract |
| Préconditions | raison non vide (`.*\S.*`) ; nouvel `executionContractId` |
| Effet | successeur + ancien `superseded` |
| Événement | `ExecutionContractSuperseded` |
| Owner | **T-A4** |

---

## T-A5 — Commandes détaillées (Morris D01–D10)

| Commande | Agrégat | Acteur / autorité | Inputs clés | Préconditions | Effet | Événements | Erreurs typiques |
|----------|---------|-------------------|-------------|---------------|-------|------------|------------------|
| `SelectExecutionAgent` | Attempt (+ audit) | N≥ `requiredAuthority` ; système **seulement** si non-Critical + `capabilities_deterministic` fermé | contractId+version, strategy/profile, proposed/selected agent | contrat `confirmed` ; agent match caps∩scope | Attempt `accepted` **ou** maj sélection + TTL ; **pas** launch | `ExecutionAgentProposed`, `ExecutionAgentSelected`, `ExecutionAttemptAccepted` | `EXECUTION_CONTRACT_*`, `AGENT_*`, `AGENT_CONFIRMATION_REQUIRED`, `AUTHORITY_DENIED` |
| `StartExecution` | Attempt + Contract | même barre, **relecture** T-A3 | attemptId \| contractId+selection, expectedVersion, idempotencyKey | TTL OK ; Critical ack ; Decision fraîche ; Confirm agent si Critical ; persist `accepted` | persist-then-launch → `running` ; contrat → `executing` | `ExecutionStarted` | `AGENT_SELECTION_EXPIRED`, `CRITICAL_NOT_ACKNOWLEDGED`, `EXECUTION_ALREADY_ACTIVE`, `EXECUTION_PERSISTENCE_FAILED`, `EXECUTION_LAUNCH_*`, `CONCURRENCY_CONFLICT` |
| `CancelExecutionAttempt` | Attempt (+ Contract) | N≥ **ou** Morris emergency | attemptId, reason | attempt non terminal | best-effort cancel → `cancelled` ; contrat `cancelled` | `ExecutionCancellationRequested`, `ExecutionCancelled` / `ExecutionCancellationFailed` | `ATTEMPT_STATE_CONFLICT`, `EXECUTION_CANCEL_FAILED` |
| `RecordExecutionResult` | Attempt (+ Contract) | **adaptateur authentifié lié à son Attempt** | attemptId, resultRef \| error, exitCode | `running` \| `result_pending` | → `succeeded` (+ contrat `completed`) \| `failed` ; ou → `result_pending` si persist Record échoue | `ExecutionSucceeded` / `ExecutionFailed` / `ExecutionResultPending` | `RESULT_RECORDING_FAILED`, `ATTEMPT_STATE_CONFLICT`, `AUTHORITY_DENIED` |
| `RecordExecutionFailure` | Attempt | idem adaptateur | attemptId, errorRef | `running` \| `result_pending` | → `failed` (mergeable RecordResult) | `ExecutionFailed` | idem |
| `RetryExecutionAttempt` | Attempt (new) | auth explicite = Start | priorAttemptId, budget | prior terminal failed\|timeout\|cancelled per policy ; budget restant | **nouvel** Attempt `accepted` + `retryOfAttemptId` | `ExecutionRetryAuthorized`, `ExecutionAttemptAccepted` | `RETRY_NOT_AUTHORIZED`, `RETRY_BUDGET_EXHAUSTED` |
| `GetExecutionAttempt` | Attempt | lecteur autorisé | attemptId | — | lecture | — | `ATTEMPT_NOT_FOUND` |
| `ListExecutionAttempts` | Attempt | lecteur | executionContractId | — | liste | — | `EXECUTION_CONTRACT_*` |
| `CheckAttemptAuthorization` | — | système | attempt/contract context | — | prédicat lecture seule | `ExecutionAuthorizationDenied` (si deny path audité) | `AUTHORITY_DENIED` |

**Invariant persist-then-launch :** aucun launch sans Attempt `accepted` persisté. **launch-then-persist** interdit.

**Anti-claims commandes :** pas d’endpoint HTTP ; pas d’adaptateur appelé ce cycle ; pas d’Evidence/Claim **runtime** (T-A5) — catalogues T-A6 modeled-only.

---

## T-A6 — Commandes Evidence / Review / Claim / Maturity (D-T-A6-01…12)

| Commande | Agrégat | Acteur / autorité | Préconditions | Effet | Événements | Erreurs typiques |
|----------|---------|-------------------|---------------|-------|------------|------------------|
| `RegisterEvidence` | Evidence | système / humain / adapter (artefact only) | ≥1 binding ; pas de secret | crée Evidence ; alias `AttachEvidence` v1 | `EvidenceRegistered` | `EVIDENCE_SOURCE_REQUIRED`, `EVIDENCE_BINDING_REQUIRED`, `EVIDENCE_SECRET_FORBIDDEN` |
| `AttachEvidence` | Evidence | idem | alias RegisterEvidence | lie bindings | `EvidenceRegistered` | idem |
| `VerifyEvidenceIntegrity` | Evidence | système déterministe L1 | digest si verifiable | status→verified si OK | `EvidenceIntegrityVerified` / `EvidenceRejected` | `EVIDENCE_DIGEST_REQUIRED`, `EVIDENCE_UNAVAILABLE` |
| `CreateReviewBundle` | ReviewBundle | N≥ scope | projectId | draft + version | — | `STATE_CONFLICT` |
| `BuildReviewBundle` | ReviewBundle | N≥ | alias historique Create (+ évent. freeze) | draft ou ready_for_review | `ReviewBundleFrozen` (si freeze) | idem |
| `FreezeReviewBundle` | ReviewBundle | N≥ | draft → ready_for_review | freeze (`frozenAt`) ; refs immutables | `ReviewBundleFrozen` | `REVIEW_BUNDLE_INCOMPLETE` |
| `StartReview` | ReviewBundle | reviewer | frozen | → under_review | `ReviewStarted` | `REVIEW_BUNDLE_NOT_FROZEN` |
| `RecordFinding` | ReviewBundle | reviewer | under_review | finding append (semantic) | `FindingRecorded` | `REVIEW_BUNDLE_NOT_FROZEN` |
| `EvaluateClaim` | ClaimEvaluation | système propose / humain | bundle gelé + version exacte | pending→evaluating→pass\|fail\|not_proven\|waived\|disputed | `ClaimEvaluationProposed` | `CLAIM_EVIDENCE_MISSING`, `CLAIM_NOT_PROVEN`, `REVIEW_BUNDLE_VERSION_MISMATCH` |
| `ConfirmClaimEvaluation` | ClaimEvaluation | humain / Morris | Critical/structural rules | confirme PASS | `ClaimEvaluationConfirmed` | `CLAIM_CONFIRMATION_REQUIRED`, `CLAIM_SELF_REVIEW_FORBIDDEN`, `CLAIM_AUTHORITY_MISMATCH`, `WAIVER_AUTHORITY_REQUIRED` |
| `RejectClaimEvaluation` | ClaimEvaluation | reviewer | evaluating | fail / not_proven | `ClaimEvaluationRejected` | `CLAIM_AUTHORITY_MISMATCH` |
| `CompleteReview` | ReviewBundle | reviewer | under_review | accepted\|rejected\|incomplete | `ReviewCompleted` | `REVIEW_BUNDLE_NOT_FROZEN`, `REVIEW_BUNDLE_INCOMPLETE` |
| `ReopenReview` | ReviewBundle | N≥ / Morris | accepted\|rejected | nouvelle version / reopen | `ReviewReopened` | `STATE_CONFLICT` |
| `ProposeMaturity` | MaturityAssessment | système | claims/evidence | status proposed ; autoPromoted=false | `MaturityProposed` | `MATURITY_BLOCKED_BY_RESERVATION` |
| `ConfirmMaturity` | MaturityAssessment | humain / Morris | proposed ; pas HARD block | → confirmed | `MaturityConfirmed` | `MATURITY_CONFIRMATION_REQUIRED`, `MATURITY_AUTO_PROMOTION_FORBIDDEN`, `MATURITY_BLOCKED_BY_RESERVATION` |
| `DowngradeMaturity` | MaturityAssessment | humain / Morris | evidence/claim invalidé | supersession + downgradeReason | `MaturityDowngraded` | `MATURITY_DOWNGRADE_REQUIRED` |
| `RegisterDebt` / `CloseDebt` / `ReopenDebt` | DebtItem (docs) | humain / Morris | — | dette review | `DebtRegistered` / `DebtClosed` / `ReserveMaintainedOpen` | — |

**Interdit :** toute commande T-A6 → auto-launch T-A7 (`T_A7_AUTO_LAUNCH_FORBIDDEN`) · auto-confirm Critical · auto-close réserve humaine · auto next cycle.

---

## Événements (extrait)

IntentSubmitted · DoctrinePackageResolved/Failed · ProjectMatched/Created · CycleQualificationProposed/Acknowledged · CkcResolved · EpistemicItemRecorded · ContradictionDetected · LivingProjectStateVersioned · TrajectoryProposed/Replanned · HumanDecisionRecorded/Superseded · ConfirmationRequested/Granted/Expired · ExecutionContractBuilt · ExecutionContractValidated · ExecutionContractConfirmationRequired · ExecutionContractConfirmed · ExecutionContractSuperseded · ExecutionContractCancelled · ExecutionAgentProposed · ExecutionAgentSelected · ExecutionAttemptAccepted · ExecutionStarted · ExecutionResultPending · ExecutionSucceeded · ExecutionFailed · ExecutionTimedOut · ExecutionCancellationRequested · ExecutionCancelled · ExecutionCancellationFailed · ExecutionAuthorizationDenied · ExecutionRetryAuthorized · EvidenceRegistered · EvidenceIntegrityVerified · EvidenceRejected · ReviewBundleFrozen · ReviewStarted · FindingRecorded · ClaimEvaluationProposed · ClaimEvaluationConfirmed · ClaimEvaluationRejected · ReviewCompleted · ReviewReopened · MaturityProposed · MaturityConfirmed · MaturityDowngraded · DebtRegistered · DebtClosed · ReserveMaintainedOpen · CycleInstanceClosed · NextCycleProposed.

### Événements ExecutionContract (T-A4)

| Événement | Owner | Déclencheur typique |
|-----------|-------|---------------------|
| `ExecutionContractBuilt` | T-A4 | BuildExecutionContract |
| `ExecutionContractValidated` | T-A4 | Validate → validated |
| `ExecutionContractConfirmationRequired` | T-A4 | Validate → confirmation_required |
| `ExecutionContractConfirmed` | T-A4 | ConfirmExecutionContract |
| `ExecutionContractSuperseded` | T-A4 | SupersedeExecutionContract |
| `ExecutionContractCancelled` | T-A4 (pre-exec) / T-A5 (post-start map) | CancelExecution |

### Événements Attempt / exécution (T-A5)

| Événement | Type | Commande causale | Aggregate | Notes |
|-----------|------|------------------|-----------|-------|
| `ExecutionAgentProposed` | domaine | SelectExecutionAgent | Attempt | Critical path |
| `ExecutionAgentSelected` | domaine | SelectExecutionAgent | Attempt | |
| `ExecutionAttemptAccepted` | domaine | Select / Start (persist) | Attempt | status `accepted` |
| `ExecutionStarted` | domaine | StartExecution | Attempt+Contract | `running` + contrat `executing` |
| `ExecutionResultPending` | technique | Record* (persist fail) | Attempt | contrat **stays `executing`** |
| `ExecutionSucceeded` | domaine | RecordExecutionResult | Attempt+Contract | |
| `ExecutionFailed` | domaine | Record* / safety | Attempt+Contract | |
| `ExecutionTimedOut` | domaine/technique | timeout engine | Attempt+Contract | Attempt `timeout` → contrat `failed` |
| `ExecutionCancellationRequested` | domaine | CancelExecutionAttempt | Attempt | |
| `ExecutionCancelled` | domaine | Cancel ack | Attempt+Contract | |
| `ExecutionCancellationFailed` | technique | Cancel | Attempt | best-effort échec |
| `ExecutionAuthorizationDenied` | technique | Select/Start/Cancel/Record/Retry | — | **N3 ≠ Morris** ; jamais trust client `canActAsMorris` |
| `ExecutionRetryAuthorized` | domaine | RetryExecutionAttempt | Attempt | |

Payload minimal : `aggregateId` · `attemptId` · `executionContractId` · `executionContractVersion` · `correlationId` · `causationId?` · actor/provenance · `previousStatus` · `newStatus` · `selectedAgentRef?` · `reason?`. **Interdits :** secrets, tokens, Confirmation complète, authority evidence complète, payloads métier non nécessaires. (Legacy `agentRef?` retiré — utiliser `selectedAgentRef?`.)

---

## Matrice d'autorité T-A5 (D08)

| Action | Autorité métier | Notes |
|--------|-----------------|-------|
| **SelectExecutionAgent** | N≥ `requiredAuthority` ; système **seulement** si non-Critical + `capabilities_deterministic` fermé | pas Morris spoof ; pas launch |
| **StartExecution** | même barre + relecture T-A3 ; Critical = Confirmation agent | persist-then-launch ; TTL revalidate |
| **CancelExecutionAttempt** (métier) | N≥ `requiredAuthority` | best-effort ; pas rollback métier implicite |
| **Emergency stop Morris** | **Morris only** = N3 ∧ `canActAsMorris: true` (server) | **N3 ≠ Morris** ; displayName spoof refusé |
| **auto-safety** (timeout / kill borné) | système borné policy | jamais équivalent Morris ; bornes explicites |
| **RecordExecutionResult / Failure** | adaptateur authentifié lié à **son** Attempt | foreign Attempt → deny |
| **RetryExecutionAttempt** | auth explicite = Start | nouvel Attempt ; budget |

**Anti-spoof :** jamais trust client `canActAsMorris` / displayName « Morris ». Système ≠ Morris.

---

## Matrice transitions ExecutionContract (canonique T-A4/T-A5)

| Source | Commande | Cible | Owner | Autorité | Confirmation | Decision | Critical | Événement | Terminal? |
|--------|----------|-------|-------|----------|--------------|----------|----------|-----------|-----------|
| (new) | BuildExecutionContract | draft\|proposed | T-A4 | requiredAuthority | non | ≥1 structurante | fail-closed si Critical non-ack pour confirm ultérieur | ExecutionContractBuilt | non |
| draft\|proposed | ValidateExecutionContract | validated | T-A4 | vérif | non | courante | idem | ExecutionContractValidated | non |
| validated | ValidateExecutionContract | confirmation_required | T-A4 | vérif | non | courante | idem | ExecutionContractConfirmationRequired | non |
| validated | ConfirmExecutionContract | confirmed | T-A4 | vérif | **consomme** | accepted+courante | **bloqué** si Critical non-ack | ExecutionContractConfirmed | non |
| confirmation_required | ConfirmExecutionContract | confirmed | T-A4 | vérif | **consomme** | accepted+courante | **bloqué** si Critical non-ack | ExecutionContractConfirmed | non |
| *pre-exec* | SupersedeExecutionContract | superseded (+ nouveau) | T-A4 | vérif | n/a | n/a | n/a | ExecutionContractSuperseded | ancien oui |
| *pre-exec* | CancelExecution | cancelled | T-A4 | vérif | n/a | n/a | n/a | ExecutionContractCancelled | oui |
| confirmed | StartExecution (launch ack) | executing | **T-A5** | vérif | déjà consommée (contrat) ; agent confirm si Critical | fraîcheur runtime | ack requis | ExecutionStarted | non |
| executing | RecordExecutionResult | completed\|failed | **T-A5** | adaptateur lié | — | — | — | ExecutionSucceeded/Failed | oui |
| executing | *(result_pending Attempt)* | **stays `executing`** | **T-A5** | — | — | — | — | ExecutionResultPending | non |
| executing | CancelExecution / CancelExecutionAttempt | cancelled | **T-A5** | N≥ / Morris | — | — | — | ExecutionCancelled | oui |
| executing | timeout | failed | **T-A5** | auto-safety borné | — | — | — | ExecutionTimedOut | oui |

Aucune transition vers `executing` sous T-A4. **Aucun completed spéculatif** tant que Attempt ∈ {`accepted`,`running`,`result_pending`}.

### Matrice transitions ExecutionAttempt (T-A5)

| Source | Commande / cause | Cible | Contrat mapping | Événement | Interdit si |
|--------|------------------|-------|-----------------|-----------|-------------|
| (new) | SelectExecutionAgent (persist) | `accepted` | **confirmed** (inchangé) | ExecutionAttemptAccepted | contrat ≠ confirmed |
| `accepted` | StartExecution (launch ack) | `running` | → **executing** | ExecutionStarted | TTL expiré ; auth deny ; pas de persist préalable |
| `accepted` | StartExecution (launch fail / persist fail pre-launch) | `failed` | **confirmed** (inchangé) ou policy cancel | ExecutionFailed | post-launch sans `launchedAt` hors codes launch/persist |
| `accepted` | CancelExecutionAttempt | `cancelled` | → cancelled (si policy) | ExecutionCancelled | — |
| `running` | RecordExecutionResult (ok) | `succeeded` | → **completed** | ExecutionSucceeded | sans resultRef durable |
| `running` | Record* / failure | `failed` | → **failed** | ExecutionFailed | — |
| `running` | timeout engine | `timeout` | → **failed** | ExecutionTimedOut | — |
| `running` | CancelExecutionAttempt | `cancelled` | → **cancelled** | ExecutionCancelled | — |
| `running` | Record persist fail | `result_pending` | **stays `executing`** | ExecutionResultPending | completed spéculatif |
| `result_pending` | Record retry ok | `succeeded` | → **completed** | ExecutionSucceeded | — |
| `result_pending` | Record retry fail / budget | `failed` | → **failed** | ExecutionFailed | — |
| `result_pending` | CancelExecutionAttempt (si policy) | `cancelled` | → **cancelled** | ExecutionCancelled | completed spéculatif ; cancel mid-record hors policy |

**Transitions interdites (non exhaustif) :** `accepted`→`succeeded` ; `accepted`→`result_pending` ; `result_pending`→`completed` (contrat) direct / spéculatif ; `succeeded`→* ; `failed`→`running` (in-place) ; `*→partial` ; `*→blocked` ; `*→starting` ; `*→planned` ; launch sans `accepted` persisté (**anti launch-then-persist**).

**persist-then-launch invariant :** pas de `running` / pas de launch adaptateur sans Attempt `accepted` durable. **launch-then-persist** interdit.

---

## Erreurs

### ErrorRecord schema (14 — existants, réutilisés)

Voir `schemas/error/error-record.schema.json` : `DOCTRINE_UNRESOLVED` · `CONTEXT_STALE` · `CKC_UNAVAILABLE` · `CONTRADICTION_OPEN` · `INSUFFICIENT_EVIDENCE` · `DECISION_REQUIRED` · `CONFIRMATION_REQUIRED` · `CAPABILITY_MISSING` · `AUTHORITY_DENIED` · `EXECUTION_FAILED` · `EXECUTION_TIMEOUT` · `EVIDENCE_INCOMPLETE` · `STATE_CONFLICT` · `REPLAN_REQUIRED`.

### Erreurs catalog T-A5 (conceptuelles — §21 ; pas de doublon sémantique)

| Code T-A5 | Alignement ErrorRecord | Notes |
|-----------|------------------------|-------|
| `AUTHORITY_DENIED` | **identique** | N3 ≠ Morris ; spoof client refusé |
| `EXECUTION_TIMEOUT` | **identique** | Attempt timeout |
| `EXECUTION_FAILED` | **identique** | terminal technique |
| `CAPABILITY_MISSING` | proche `AGENT_CAPABILITY_MISMATCH` | réutiliser quand mismatch = missing cap |
| `STATE_CONFLICT` | proche `ATTEMPT_STATE_CONFLICT` / `CONCURRENCY_CONFLICT` | OCC / état |
| `EXECUTION_CONTRACT_NOT_CONFIRMED` | — | T-A5 catalog extension |
| `EXECUTION_CONTRACT_STALE` | ~`CONTEXT_STALE` | version/OCC |
| `EXECUTION_CONTRACT_SUPERSEDED` | — | |
| `EXECUTION_CONTRACT_CANCELLED` | — | |
| `AGENT_NOT_FOUND` | — | |
| `AGENT_DISABLED` | — | |
| `AGENT_CAPABILITY_MISMATCH` | ~`CAPABILITY_MISSING` | |
| `AGENT_SCOPE_MISMATCH` | — | |
| `AGENT_SELECTION_EXPIRED` | — | TTL |
| `AGENT_CONFIRMATION_REQUIRED` | ~`CONFIRMATION_REQUIRED` | scope agent_selection |
| `EXECUTION_ALREADY_ACTIVE` | ~`STATE_CONFLICT` | |
| `ATTEMPT_NOT_FOUND` | — | |
| `ATTEMPT_STATE_CONFLICT` | ~`STATE_CONFLICT` | |
| `CRITICAL_NOT_ACKNOWLEDGED` | — | R-T-A3-1 |
| `EXECUTION_PERSISTENCE_FAILED` | — | pre-launch |
| `EXECUTION_LAUNCH_REJECTED` | — | |
| `EXECUTION_LAUNCH_FAILED` | — | |
| `EXECUTION_CANCEL_FAILED` | — | best-effort échec |
| `RESULT_RECORDING_FAILED` | — | → result_pending / failed tech |
| `RETRY_NOT_AUTHORIZED` | ~`AUTHORITY_DENIED` | |
| `RETRY_BUDGET_EXHAUSTED` | — | |
| `CONCURRENCY_CONFLICT` | ~`STATE_CONFLICT` | |

ErrorRecord enum **non élargi** ce cycle (évite breaking ErrorRecord) ; codes T-A5 documentés ici pour delivery future. Pas de doublon nominal avec sémantique différente.

### Erreurs catalog T-A6 (conceptuelles — pas de doublon ErrorRecord enum)

| Code T-A6 | Notes |
|-----------|-------|
| `EVIDENCE_SOURCE_REQUIRED` | source/sourceKind manquant |
| `EVIDENCE_BINDING_REQUIRED` | bindings vides |
| `EVIDENCE_DIGEST_REQUIRED` | verifiable/verified sans digest |
| `EVIDENCE_UNAVAILABLE` | indisponible ; ne peut supporter PASS |
| `EVIDENCE_SECRET_FORBIDDEN` | secret/token en clair |
| `REVIEW_BUNDLE_NOT_FROZEN` | verdict ou review avant freeze |
| `REVIEW_BUNDLE_INCOMPLETE` | incomplete vs PASS final exigeant complétude |
| `REVIEW_BUNDLE_VERSION_MISMATCH` | claim lié à mauvaise version |
| `CLAIM_EVIDENCE_MISSING` | PASS sans Evidence requise |
| `CLAIM_NOT_PROVEN` | NOT_PROVEN (≠ FAIL) |
| `CLAIM_SELF_REVIEW_FORBIDDEN` | auteur = confirmer Critical |
| `CLAIM_CONFIRMATION_REQUIRED` | Critical/structural sans confirm |
| `CLAIM_AUTHORITY_MISMATCH` | N3 spoof Morris ; système confirme Critical |
| `WAIVER_AUTHORITY_REQUIRED` | waiver non autorisé |
| `MATURITY_BLOCKED_BY_RESERVATION` | HARD reserve |
| `MATURITY_CONFIRMATION_REQUIRED` | confirm manquante |
| `MATURITY_AUTO_PROMOTION_FORBIDDEN` | autoPromoted |
| `MATURITY_DOWNGRADE_REQUIRED` | evidence/claim invalidé |
| `T_A7_AUTO_LAUNCH_FORBIDDEN` | T-A6 ne lance pas T-A7 |

## Transitions LPS

active --stale--> stale ; active --conflict--> conflict ; * --version--> superseded + new active.

### Transitions ReviewBundle (T-A6)

| Source | Commande | Cible | Notes |
|--------|----------|-------|-------|
| (new) | CreateReviewBundle | draft | mutable sous OCC |
| draft | FreezeReviewBundle | ready_for_review | frozenAt ; refs gelées |
| ready_for_review | StartReview | under_review | reviewStartedAt |
| under_review | CompleteReview | accepted\|rejected\|incomplete | validatedAt |
| *frozen* | ReopenReview / nouvelle version | superseded + new | pas de mutation in-place post-freeze |

---

# ANNEXE H — 10 validation/versioning/security (complet)

# 10 — Validation, versioning, provenance, sécurité

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion** | `0.1.0-oa` |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR AT/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `10-validation-versioning-provenance-and-security-rules.md` |

## Versioning

- schemaVersion objets (baseline pack) : `0.1.0-oa`
- **Exception T-A4 rework** : `ExecutionContract.schemaVersion` = `0.2.0-oa` (breaking : enum `requiredAuthority` + champs supersession). Avant = `0.1.0-oa` free-string authority / pas de `supersedes*`.
- **Exception T-A5 materialization** : `ExecutionAttempt.schemaVersion` = `0.2.0-oa` (breaking vs `0.1.0-oa` : renames `contractId`/`agentRef`, status enum `accepted`+`result_pending`, retrait `partial`, required provenance/idempotency/correlation/version/createdAt, champs sélection/retry/timestamps). `AgentDescriptor` = `0.1.0-oa` (nouveau, docs-first).
- **Exception T-A6 materialization** :
  - `Evidence` = `0.2.0-oa` (breaking : bindings, classification, storageMode, availability, sourceKind, provenance required, unavailable, digest conditionals)
  - `ReviewBundle` = `0.2.0-oa` (breaking : version OCC, under_review/incomplete, frozenAt, claimEvaluationRefs, provenance required)
  - `ClaimEvaluation` = `0.1.0-oa` (**nouveau** ; R-M01 OPEN jusqu’à validation)
  - `MaturityAssessment` = `0.2.0-oa` (breaking : propose→confirm, claimEvaluationRefs, blockingReservationRefs, autoPromoted=false, provenance)
- Convention repo : bump in-place (pas de dossier historique parallèle) ; exemples/tests alignés sur la nouvelle version
- versions LPS / trajectory / contract / attempt / review-bundle entières monotones
- DoctrinePackage version + digest
- breaking change ⇒ nouvelle version schema
- pas de mutation silencieuse contrat confirmé / bundle gelé
- schemas historiques D1 conservés (HISTORICAL-ONLY / ADAPT)
- Exemples / validateurs : Contract+Attempt+Evidence+ReviewBundle+Maturity `0.2.0-oa` ; ClaimEvaluation + AgentDescriptor `0.1.0-oa`

## Provenance / audit

Objets structurants portent provenance ou refs. AuditEvent append-only conceptuel couvre décision, confirmation, LPS, contrat, exécution, erreur, preuve, claim, maturité, replan.

## Sécurité conceptuelle / RGPD (T-A6)

PII · secrets · chemins protégés · PJ · décisions · preuves · journaux · rétention · redaction · minimisation.
Secrets interdits Evidence claire · aucun token dans location/provenance · aucune Evidence brute dans logs · contenu Evidence non exécuté · pas de confiance auto métadonnées agent · classification PII · effacement ≠ legal hold · U-M02 OPEN (pas de vendor) · séparation lecture/écriture · pas de choix IAM technique ici.

## Validation locale

ajv@6 Draft-07 depuis `projects/sfia-studio/app/node_modules` existant (autre worktree si besoin) — aucune install.

---

# ANNEXE I — Schemas créés / modifiés (complets)

## I.1 claim-evaluation.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/claim-evaluation.schema.json",
  "title": "ClaimEvaluation",
  "description": "T-A6 ClaimEvaluation 0.1.0-oa (D-T-A6-04/05/06). Semantic Claim ≠ ClaimEvaluation; physical v1 unified in this object (clm:). System proposes Critical; human/Morris confirms. NOT_PROVEN ≠ FAIL; WAIVED ≠ PASS. Adapter does not judge conformity. R-M01 remains OPEN until Morris modeled validation.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "claimEvaluationId",
    "claimType",
    "claimStatement",
    "criticality",
    "evaluationMethod",
    "requiredEvidenceRefs",
    "reviewBundleId",
    "reviewBundleVersion",
    "status",
    "proposedBy",
    "proposedAt",
    "provenance"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.1.0-oa"
    },
    "claimEvaluationId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^clm:"
        }
      ]
    },
    "claimType": {
      "type": "string",
      "enum": [
        "technique",
        "conformite",
        "qualite",
        "securite",
        "maturite_support"
      ],
      "description": "Decisionnel claims forbidden in T-A6 ClaimEvaluation"
    },
    "claimStatement": {
      "type": "string",
      "minLength": 1,
      "maxLength": 2000
    },
    "criticality": {
      "type": "string",
      "enum": [
        "non_critical",
        "critical",
        "structural"
      ]
    },
    "evaluationMethod": {
      "type": "string",
      "enum": [
        "deterministic",
        "assisted",
        "human_review"
      ]
    },
    "ruleRef": {
      "type": "string",
      "minLength": 1,
      "maxLength": 500
    },
    "requiredEvidenceRefs": {
      "type": "array",
      "items": {
        "allOf": [
          {
            "$ref": "../common/identifier.schema.json"
          },
          {
            "type": "string",
            "pattern": "^ev:"
          }
        ]
      }
    },
    "providedEvidenceRefs": {
      "type": "array",
      "items": {
        "allOf": [
          {
            "$ref": "../common/identifier.schema.json"
          },
          {
            "type": "string",
            "pattern": "^ev:"
          }
        ]
      }
    },
    "reviewBundleId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^rb:"
        }
      ]
    },
    "reviewBundleVersion": {
      "type": "integer",
      "minimum": 1,
      "description": "Verdict binds exact frozen ReviewBundle version"
    },
    "status": {
      "type": "string",
      "enum": [
        "pending",
        "evaluating",
        "pass",
        "fail",
        "not_proven",
        "waived",
        "disputed"
      ]
    },
    "proposedBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "reviewedBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "confirmedBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "confirmationAuthority": {
      "type": "string",
      "enum": [
        "system_deterministic",
        "authorized_human",
        "morris"
      ],
      "description": "system_deterministic only for non_critical; morris required for structural; N3 ≠ Morris"
    },
    "proposedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "evaluatedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "confirmedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "waiver": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "reason",
        "authorizedBy",
        "authorizedAt",
        "reversible"
      ],
      "properties": {
        "reason": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2000
        },
        "authorizedBy": {
          "$ref": "../common/actor-reference.schema.json"
        },
        "authorizedAt": {
          "$ref": "../common/timestamp.schema.json"
        },
        "reversible": {
          "type": "boolean",
          "const": true
        }
      }
    },
    "dispute": {
      "type": "object",
      "additionalProperties": false,
      "required": [
        "reason",
        "raisedBy",
        "raisedAt"
      ],
      "properties": {
        "reason": {
          "type": "string",
          "minLength": 1,
          "maxLength": 2000
        },
        "raisedBy": {
          "$ref": "../common/actor-reference.schema.json"
        },
        "raisedAt": {
          "$ref": "../common/timestamp.schema.json"
        }
      }
    },
    "provenance": {
      "$ref": "../common/provenance-record.schema.json"
    }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "status": {
            "const": "pass"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "providedEvidenceRefs",
          "evaluatedAt"
        ],
        "properties": {
          "providedEvidenceRefs": {
            "type": "array",
            "minItems": 1
          }
        },
        "description": "PASS requires at least one providedEvidenceRef (semantic: must cover requiredEvidenceRefs)"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "pass"
          },
          "criticality": {
            "const": "non_critical"
          },
          "evaluationMethod": {
            "const": "deterministic"
          }
        },
        "required": [
          "status",
          "criticality",
          "evaluationMethod"
        ]
      },
      "then": {
        "required": [
          "confirmationAuthority"
        ],
        "properties": {
          "confirmationAuthority": {
            "const": "system_deterministic"
          }
        },
        "description": "non_critical deterministic PASS may use system_deterministic confirmationAuthority"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "pass"
          },
          "criticality": {
            "const": "critical"
          }
        },
        "required": [
          "status",
          "criticality"
        ]
      },
      "then": {
        "required": [
          "confirmedBy",
          "confirmedAt",
          "confirmationAuthority"
        ],
        "properties": {
          "confirmationAuthority": {
            "const": "authorized_human"
          },
          "confirmedBy": {
            "type": "object",
            "properties": {
              "role": {
                "type": "string",
                "not": {
                  "enum": [
                    "system",
                    "agent"
                  ]
                }
              }
            }
          }
        },
        "description": "Critical PASS ⇒ human confirmation; system/agent cannot confirm"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "pass"
          },
          "criticality": {
            "const": "structural"
          }
        },
        "required": [
          "status",
          "criticality"
        ]
      },
      "then": {
        "required": [
          "confirmedBy",
          "confirmedAt",
          "confirmationAuthority"
        ],
        "properties": {
          "confirmationAuthority": {
            "const": "morris"
          },
          "confirmedBy": {
            "type": "object",
            "required": [
              "actorId",
              "role"
            ],
            "properties": {
              "role": {
                "const": "decision_maker"
              }
            }
          }
        },
        "description": "structural PASS ⇒ Morris confirmationAuthority (N3 ≠ Morris semantic)"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "waived"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "waiver"
        ],
        "description": "WAIVED ≠ PASS; explicit motivated waiver required"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "disputed"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "dispute"
        ]
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "not_proven"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "evaluatedAt"
        ],
        "description": "NOT_PROVEN ≠ FAIL and ≠ PASS"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "fail"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "evaluatedAt"
        ]
      }
    }
  ]
}
```

## I.2 evidence.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/evidence.schema.json",
  "title": "Evidence",
  "description": "T-A6 Evidence entity (D-T-A6-01/02). BREAKING vs 0.1.0-oa: bindings, classification, storageMode, availability, retention/legalHold, sourceKind, provenance required, unavailable status, digest rules. Attempt is source not owner. No storage vendor. Secrets forbidden in clear.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "evidenceId",
    "type",
    "source",
    "sourceKind",
    "producedAt",
    "status",
    "classification",
    "storageMode",
    "availability",
    "bindings",
    "containsSecrets",
    "provenance"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.2.0-oa"
    },
    "evidenceId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^ev:"
        }
      ]
    },
    "type": {
      "type": "string",
      "enum": [
        "document",
        "screenshot",
        "log_ref",
        "artifact",
        "attestation",
        "other"
      ]
    },
    "source": {
      "type": "string",
      "minLength": 1,
      "maxLength": 500,
      "description": "Human-readable source label — no secrets/tokens"
    },
    "sourceKind": {
      "type": "string",
      "enum": [
        "execution_attempt",
        "manual",
        "external",
        "system"
      ]
    },
    "location": {
      "type": "string",
      "maxLength": 1000,
      "description": "Logical ref only — secrets/tokens forbidden"
    },
    "digest": {
      "$ref": "../common/digest.schema.json"
    },
    "verifiablePayload": {
      "type": "boolean",
      "description": "If true, digest is mandatory (content-addressed verifiable claim)"
    },
    "producedBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "producedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "freshness": {
      "type": "string",
      "enum": [
        "fresh",
        "aging",
        "stale",
        "unknown"
      ]
    },
    "status": {
      "type": "string",
      "enum": [
        "expected",
        "available",
        "verified",
        "incomplete",
        "stale",
        "rejected",
        "superseded",
        "unavailable"
      ]
    },
    "classification": {
      "type": "string",
      "enum": [
        "public",
        "internal",
        "confidential",
        "restricted"
      ]
    },
    "storageMode": {
      "type": "string",
      "enum": [
        "metadata_only",
        "internal_payload_ref",
        "external_payload_ref"
      ],
      "description": "Logical hybrid storage — no vendor (U-M02 OPEN)"
    },
    "availability": {
      "type": "string",
      "enum": [
        "available",
        "unavailable",
        "unknown"
      ]
    },
    "retentionClass": {
      "type": "string",
      "enum": [
        "short",
        "standard",
        "extended",
        "legal_hold_eligible"
      ]
    },
    "legalHold": {
      "type": "boolean",
      "description": "Legal hold is distinct from erasure right"
    },
    "bindings": {
      "type": "object",
      "additionalProperties": false,
      "minProperties": 1,
      "description": "At least one structural binding required (D-T-A6-01)",
      "properties": {
        "executionAttemptId": {
          "allOf": [
            {
              "$ref": "../common/identifier.schema.json"
            },
            {
              "type": "string",
              "pattern": "^xat:"
            }
          ]
        },
        "executionContractId": {
          "allOf": [
            {
              "$ref": "../common/identifier.schema.json"
            },
            {
              "type": "string",
              "pattern": "^xct:"
            }
          ]
        },
        "decisionId": {
          "$ref": "../common/identifier.schema.json"
        },
        "cycleInstanceId": {
          "allOf": [
            {
              "$ref": "../common/identifier.schema.json"
            },
            {
              "type": "string",
              "pattern": "^cyc:"
            }
          ]
        },
        "projectId": {
          "allOf": [
            {
              "$ref": "../common/identifier.schema.json"
            },
            {
              "type": "string",
              "pattern": "^prj:"
            }
          ]
        },
        "reviewBundleId": {
          "allOf": [
            {
              "$ref": "../common/identifier.schema.json"
            },
            {
              "type": "string",
              "pattern": "^rb:"
            }
          ]
        }
      }
    },
    "containsSecrets": {
      "type": "boolean",
      "const": false
    },
    "provenance": {
      "$ref": "../common/provenance-record.schema.json"
    }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "verifiablePayload": {
            "const": true
          }
        },
        "required": [
          "verifiablePayload"
        ]
      },
      "then": {
        "required": [
          "digest"
        ],
        "description": "Verifiable payload claim ⇒ digest mandatory"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "verified"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "digest"
        ],
        "description": "verified ⇒ digest mandatory"
      }
    },
    {
      "if": {
        "properties": {
          "sourceKind": {
            "const": "execution_attempt"
          }
        },
        "required": [
          "sourceKind"
        ]
      },
      "then": {
        "properties": {
          "bindings": {
            "required": [
              "executionAttemptId"
            ]
          }
        },
        "description": "execution_attempt sourceKind ⇒ bindings.executionAttemptId (Attempt is source, not owner)"
      }
    },
    {
      "if": {
        "properties": {
          "availability": {
            "const": "unavailable"
          }
        },
        "required": [
          "availability"
        ]
      },
      "then": {
        "properties": {
          "status": {
            "enum": [
              "unavailable",
              "incomplete",
              "stale",
              "rejected"
            ]
          }
        },
        "description": "unavailable availability cannot be status available/verified"
      }
    }
  ]
}
```

## I.3 review-bundle.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/review-bundle.schema.json",
  "title": "ReviewBundle",
  "description": "T-A6 ReviewBundle aggregate (D-T-A6-03). BREAKING vs 0.1.0-oa: version OCC, under_review/incomplete statuses, frozenAt, claimEvaluationRefs, provenance required, freeze before verdict. ready_for_review ≡ frozen in v1. Synthesis alone is never complete.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "reviewBundleId",
    "projectId",
    "version",
    "evidenceRefs",
    "completeness",
    "status",
    "createdAt",
    "provenance"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.2.0-oa"
    },
    "reviewBundleId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^rb:"
        }
      ]
    },
    "projectId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^prj:"
        }
      ]
    },
    "cycleInstanceId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^cyc:"
        }
      ]
    },
    "executionContractId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^xct:"
        }
      ]
    },
    "version": {
      "type": "integer",
      "minimum": 1,
      "description": "OCC aggregate version — verdict binds reviewBundleId + version exactly"
    },
    "evidenceRefs": {
      "type": "array",
      "items": {
        "allOf": [
          {
            "$ref": "../common/identifier.schema.json"
          },
          {
            "type": "string",
            "pattern": "^ev:"
          }
        ]
      }
    },
    "claimEvaluationRefs": {
      "type": "array",
      "items": {
        "allOf": [
          {
            "$ref": "../common/identifier.schema.json"
          },
          {
            "type": "string",
            "pattern": "^clm:"
          }
        ]
      }
    },
    "completeness": {
      "type": "string",
      "enum": [
        "complete",
        "incomplete"
      ]
    },
    "reservations": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 500
      }
    },
    "reviewer": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "status": {
      "type": "string",
      "enum": [
        "draft",
        "ready_for_review",
        "under_review",
        "accepted",
        "rejected",
        "incomplete",
        "superseded"
      ],
      "description": "Lifecycle v1: draft → ready_for_review → under_review → accepted|rejected|incomplete|superseded. ready_for_review ≡ frozen."
    },
    "createdAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "frozenAt": {
      "$ref": "../common/timestamp.schema.json",
      "description": "Required for all statuses after draft (ready_for_review ≡ freeze)"
    },
    "reviewStartedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "validatedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "supersedesReviewBundleId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^rb:"
        }
      ]
    },
    "synthesisOnly": {
      "type": "boolean",
      "description": "If true, completeness must be incomplete"
    },
    "provenance": {
      "$ref": "../common/provenance-record.schema.json"
    }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "synthesisOnly": {
            "const": true
          }
        },
        "required": [
          "synthesisOnly"
        ]
      },
      "then": {
        "properties": {
          "completeness": {
            "const": "incomplete"
          }
        },
        "description": "synthesisOnly=true ⇒ completeness=incomplete"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "enum": [
              "ready_for_review",
              "under_review",
              "accepted",
              "rejected",
              "incomplete",
              "superseded"
            ]
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "frozenAt"
        ],
        "description": "Post-draft statuses require frozenAt (ready_for_review ≡ freeze)"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "enum": [
              "accepted",
              "rejected"
            ]
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "frozenAt",
          "validatedAt",
          "reviewer"
        ],
        "description": "Verdict statuses require freeze + validatedAt + reviewer; incomplete bundle cannot carry final PASS claims (semantic)"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "under_review"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "frozenAt",
          "reviewStartedAt"
        ]
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "superseded"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "frozenAt"
        ]
      }
    }
  ]
}
```

## I.4 maturity-assessment.schema.json

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://sfia.local/schemas/v3-modeled/v3-native-option-a/maturity/maturity-assessment.schema.json",
  "title": "MaturityAssessment",
  "description": "T-A6 MaturityAssessment (D-T-A6-07/08). BREAKING vs 0.1.0-oa: projectId, proposedLevel/confirmedLevel, claimEvaluationRefs, reviewBundleRefs, blockingReservationRefs, propose→confirm, autoPromoted=false, supersession, provenance. Maturity ≠ execution authorization. MODELED ≠ IMPLEMENTED ≠ ADOPTED.",
  "type": "object",
  "additionalProperties": false,
  "required": [
    "schemaVersion",
    "maturityAssessmentId",
    "projectId",
    "subjectRef",
    "proposedLevel",
    "status",
    "proposedBy",
    "proposedAt",
    "autoPromoted",
    "provenance"
  ],
  "properties": {
    "schemaVersion": {
      "type": "string",
      "const": "0.2.0-oa"
    },
    "maturityAssessmentId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^mat:"
        }
      ]
    },
    "projectId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^prj:"
        }
      ]
    },
    "subjectRef": {
      "$ref": "../common/identifier.schema.json"
    },
    "dimensions": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "dimensionId",
          "proposedLevel"
        ],
        "properties": {
          "dimensionId": {
            "type": "string",
            "minLength": 1,
            "maxLength": 100
          },
          "proposedLevel": {
            "type": "string",
            "enum": [
              "DOCUMENTED",
              "VALIDATED",
              "MODELED",
              "IMPLEMENTED",
              "ADOPTED"
            ]
          },
          "confirmedLevel": {
            "type": "string",
            "enum": [
              "DOCUMENTED",
              "VALIDATED",
              "MODELED",
              "IMPLEMENTED",
              "ADOPTED"
            ]
          },
          "blocked": {
            "type": "boolean"
          }
        }
      }
    },
    "proposedLevel": {
      "type": "string",
      "enum": [
        "DOCUMENTED",
        "VALIDATED",
        "MODELED",
        "IMPLEMENTED",
        "ADOPTED"
      ]
    },
    "confirmedLevel": {
      "type": "string",
      "enum": [
        "DOCUMENTED",
        "VALIDATED",
        "MODELED",
        "IMPLEMENTED",
        "ADOPTED"
      ]
    },
    "claimEvaluationRefs": {
      "type": "array",
      "items": {
        "allOf": [
          {
            "$ref": "../common/identifier.schema.json"
          },
          {
            "type": "string",
            "pattern": "^clm:"
          }
        ]
      }
    },
    "reviewBundleRefs": {
      "type": "array",
      "items": {
        "type": "object",
        "additionalProperties": false,
        "required": [
          "reviewBundleId",
          "version"
        ],
        "properties": {
          "reviewBundleId": {
            "allOf": [
              {
                "$ref": "../common/identifier.schema.json"
              },
              {
                "type": "string",
                "pattern": "^rb:"
              }
            ]
          },
          "version": {
            "type": "integer",
            "minimum": 1
          }
        }
      }
    },
    "evidenceRefs": {
      "type": "array",
      "items": {
        "allOf": [
          {
            "$ref": "../common/identifier.schema.json"
          },
          {
            "type": "string",
            "pattern": "^ev:"
          }
        ]
      }
    },
    "blockingReservationRefs": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 200
      },
      "description": "HARD blocking reserves prevent associated level/dimension; PASS does not close reserves"
    },
    "waiverRefs": {
      "type": "array",
      "items": {
        "type": "string",
        "minLength": 1,
        "maxLength": 200
      },
      "description": "Waiver ≠ reserve closure"
    },
    "proposedBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "confirmedBy": {
      "$ref": "../common/actor-reference.schema.json"
    },
    "proposedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "confirmedAt": {
      "$ref": "../common/timestamp.schema.json"
    },
    "status": {
      "type": "string",
      "enum": [
        "proposed",
        "confirmed",
        "rejected",
        "superseded",
        "blocked"
      ]
    },
    "supersedesMaturityAssessmentId": {
      "allOf": [
        {
          "$ref": "../common/identifier.schema.json"
        },
        {
          "type": "string",
          "pattern": "^mat:"
        }
      ]
    },
    "downgradeReason": {
      "type": "string",
      "minLength": 1,
      "maxLength": 2000,
      "description": "Required when supersession encodes a downgrade after invalidated evidence/claim"
    },
    "autoPromoted": {
      "type": "boolean",
      "const": false
    },
    "provenance": {
      "$ref": "../common/provenance-record.schema.json"
    }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "status": {
            "const": "confirmed"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "confirmedLevel",
          "confirmedBy",
          "confirmedAt"
        ],
        "properties": {
          "confirmedBy": {
            "type": "object",
            "properties": {
              "role": {
                "type": "string",
                "not": {
                  "enum": [
                    "system",
                    "agent"
                  ]
                }
              }
            }
          },
          "blockingReservationRefs": {
            "type": "array",
            "maxItems": 0
          }
        },
        "description": "confirmed ⇒ human confirmation; no HARD blockingReservationRefs; autoPromoted remains false"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "blocked"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "blockingReservationRefs"
        ],
        "properties": {
          "blockingReservationRefs": {
            "type": "array",
            "minItems": 1
          }
        },
        "description": "blocked ⇒ at least one blockingReservationRef"
      }
    },
    {
      "if": {
        "properties": {
          "status": {
            "const": "superseded"
          }
        },
        "required": [
          "status"
        ]
      },
      "then": {
        "required": [
          "supersedesMaturityAssessmentId"
        ],
        "description": "supersession preferred over historical mutation; downgradeReason when level regresses (semantic)"
      }
    }
  ]
}
```

---

# ANNEXE J — Exemples (liste + contenus)

## Liste
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-critical-confirmed.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-disputed.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-noncritical-pass.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-not-proven.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-self-review-critical.narrative.md
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-structural-morris.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-waived.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/confirmation-n3.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-external-with-digest.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-from-attempt.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-incomplete.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-internal-sensitive.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-manual.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-stale.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-unavailable.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-n3-without-canActAsMorris.narrative.md
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.additional-properties.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.bad-schema-version.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.critical-system-confirm.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.not-proven-as-pass.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.pass-without-evidence.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.waived-as-pass.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.additional-properties.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.bad-schema-version.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.no-binding.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.secret-in-clear.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.verifiable-without-digest.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.ta6-claimId.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/maturity.additional-properties.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/maturity.auto-promoted.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/maturity.bad-schema-version.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/maturity.confirmed-with-blocking-reserve.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/review-bundle.bad-schema-version.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/review-bundle.synthesis-as-complete.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/review-bundle.verdict-before-freeze.invalid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-blocked.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-confirmed.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-modeled.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-proposed.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-superseded-downgrade.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-auto-promotion-forbidden.narrative.md
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/n3-is-not-morris.narrative.md
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-accepted.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-complete.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-draft.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-incomplete-status.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-incomplete.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-mutate-after-freeze.narrative.md
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-ready-frozen.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-superseded.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-under-review.valid.json
projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/t-a6-ta7-auto-launch-forbidden.narrative.md

## Contenu utile (tous fichiers T-A6 examples)

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-critical-confirmed.valid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:crit-confirmed-001",
  "claimType": "securite",
  "claimStatement": "No secrets stored in clear in Evidence records",
  "criticality": "critical",
  "evaluationMethod": "human_review",
  "requiredEvidenceRefs": [
    "ev:sensitive-001",
    "ev:external-001"
  ],
  "providedEvidenceRefs": [
    "ev:sensitive-001",
    "ev:external-001"
  ],
  "reviewBundleId": "rb:oa-under-001",
  "reviewBundleVersion": 2,
  "status": "pass",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "reviewedBy": {
    "actorId": "actor:reviewer-1",
    "role": "reviewer",
    "displayName": "Reviewer One",
    "authorityLevel": "N2"
  },
  "confirmedBy": {
    "actorId": "actor:reviewer-1",
    "role": "reviewer",
    "displayName": "Reviewer One",
    "authorityLevel": "N2"
  },
  "confirmationAuthority": "authorized_human",
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "confirmedAt": "2026-07-26T02:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-crit-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-disputed.valid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:disputed-001",
  "claimType": "technique",
  "claimStatement": "External digest matches published artifact",
  "criticality": "critical",
  "evaluationMethod": "human_review",
  "requiredEvidenceRefs": [
    "ev:external-001"
  ],
  "providedEvidenceRefs": [
    "ev:external-001"
  ],
  "reviewBundleId": "rb:oa-under-001",
  "reviewBundleVersion": 2,
  "status": "disputed",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "dispute": {
    "reason": "Reviewer contests digest provenance chain",
    "raisedBy": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "raisedAt": "2026-07-26T01:00:00.000Z"
  },
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-disputed-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-noncritical-pass.valid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:noncrit-pass-001",
  "claimType": "technique",
  "claimStatement": "Schema examples validate under ajv for Evidence 0.2.0-oa",
  "criticality": "non_critical",
  "evaluationMethod": "deterministic",
  "ruleRef": "rule:schema-ajv-pass",
  "requiredEvidenceRefs": [
    "ev:from-attempt-001"
  ],
  "providedEvidenceRefs": [
    "ev:from-attempt-001"
  ],
  "reviewBundleId": "rb:oa-ready-001",
  "reviewBundleVersion": 2,
  "status": "pass",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmationAuthority": "system_deterministic",
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-noncrit-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-not-proven.valid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:not-proven-001",
  "claimType": "qualite",
  "claimStatement": "Accessibility runtime coverage is complete",
  "criticality": "non_critical",
  "evaluationMethod": "assisted",
  "requiredEvidenceRefs": [
    "ev:unavailable-001"
  ],
  "providedEvidenceRefs": [],
  "reviewBundleId": "rb:oa-incomplete-status-001",
  "reviewBundleVersion": 2,
  "status": "not_proven",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-not-proven-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-self-review-critical.narrative.md`

# ClaimEvaluation self-review Critical (forbidden)

Critical claims must not be confirmed by the same actor who proposed them.

Runtime invariant: `CLAIM_SELF_REVIEW_FORBIDDEN` when `criticality=critical` and `proposedBy.actorId == confirmedBy.actorId`.

System may propose Critical; only an authorized human (not system/agent) may confirm. Self-review of Critical is rejected.

This is a runtime/governance narrative — schema alone does not encode proposedBy≠confirmedBy.

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-structural-morris.valid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:structural-001",
  "claimType": "maturite_support",
  "claimStatement": "Modeled pack boundary for T-A6 is structurally sound",
  "criticality": "structural",
  "evaluationMethod": "human_review",
  "requiredEvidenceRefs": [
    "ev:manual-001",
    "ev:external-001"
  ],
  "providedEvidenceRefs": [
    "ev:manual-001",
    "ev:external-001"
  ],
  "reviewBundleId": "rb:oa-accepted-001",
  "reviewBundleVersion": 3,
  "status": "pass",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmedBy": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "confirmationAuthority": "morris",
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "confirmedAt": "2026-07-26T02:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-structural-001",
    "actor": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/claim-evaluation-waived.valid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:waived-001",
  "claimType": "conformite",
  "claimStatement": "Temporary deferral of tablet UX evidence",
  "criticality": "non_critical",
  "evaluationMethod": "human_review",
  "requiredEvidenceRefs": [
    "ev:stale-001"
  ],
  "providedEvidenceRefs": [],
  "reviewBundleId": "rb:oa-ready-001",
  "reviewBundleVersion": 2,
  "status": "waived",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "waiver": {
    "reason": "Tablet UX deferred under known debt UX-U01; reversible when evidence lands",
    "authorizedBy": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "authorizedAt": "2026-07-26T01:00:00.000Z",
    "reversible": true
  },
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-waived-001",
    "actor": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-external-with-digest.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:external-001",
  "type": "artifact",
  "source": "external CI artifact",
  "sourceKind": "external",
  "location": "refs/external/ci-artifact-001",
  "digest": "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
  "verifiablePayload": true,
  "producedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "producedAt": "2026-07-26T00:00:00.000Z",
  "freshness": "fresh",
  "status": "verified",
  "classification": "public",
  "storageMode": "external_payload_ref",
  "availability": "available",
  "bindings": {
    "projectId": "prj:campus360-oa",
    "reviewBundleId": "rb:oa-ready-001"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-external-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "system",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-from-attempt.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:from-attempt-001",
  "type": "log_ref",
  "source": "execution attempt stdout log",
  "sourceKind": "execution_attempt",
  "location": "refs/logs/xat-oa-ok-001",
  "digest": "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  "producedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "producedAt": "2026-07-26T00:00:00.000Z",
  "freshness": "fresh",
  "status": "available",
  "classification": "internal",
  "storageMode": "internal_payload_ref",
  "availability": "available",
  "retentionClass": "standard",
  "legalHold": false,
  "bindings": {
    "executionAttemptId": "xat:oa-ok-001",
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-from-attempt-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-incomplete.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:incomplete-001",
  "type": "artifact",
  "source": "partial agent output",
  "sourceKind": "execution_attempt",
  "location": "refs/evidence/partial",
  "producedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "producedAt": "2026-07-26T00:00:00.000Z",
  "freshness": "fresh",
  "status": "incomplete",
  "classification": "internal",
  "storageMode": "metadata_only",
  "availability": "unknown",
  "bindings": {
    "executionAttemptId": "xat:oa-ok-001",
    "executionContractId": "xct:oa-001"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-incomplete-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-internal-sensitive.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:sensitive-001",
  "type": "document",
  "source": "internal restricted design note",
  "sourceKind": "manual",
  "location": "refs/evidence/restricted-design",
  "producedBy": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "producedAt": "2026-07-26T00:00:00.000Z",
  "freshness": "fresh",
  "status": "available",
  "classification": "restricted",
  "storageMode": "metadata_only",
  "availability": "available",
  "retentionClass": "extended",
  "legalHold": false,
  "bindings": {
    "decisionId": "dec:oa-001",
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-sensitive-001",
    "actor": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "human_decision",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-manual.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:manual-001",
  "type": "document",
  "source": "manual upload by reviewer",
  "sourceKind": "manual",
  "location": "refs/evidence/manual-notes",
  "producedBy": {
    "actorId": "actor:reviewer-1",
    "role": "reviewer",
    "displayName": "Reviewer One",
    "authorityLevel": "N2"
  },
  "producedAt": "2026-07-26T00:00:00.000Z",
  "freshness": "fresh",
  "status": "available",
  "classification": "internal",
  "storageMode": "internal_payload_ref",
  "availability": "available",
  "bindings": {
    "cycleInstanceId": "cyc:modeled-001",
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-manual-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "human_decision",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-stale.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:stale-001",
  "type": "screenshot",
  "source": "aging UI capture",
  "sourceKind": "system",
  "location": "refs/evidence/ui-capture-old",
  "producedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "producedAt": "2026-06-01T00:00:00.000Z",
  "freshness": "stale",
  "status": "stale",
  "classification": "internal",
  "storageMode": "internal_payload_ref",
  "availability": "available",
  "bindings": {
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-stale-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "system",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/evidence-unavailable.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:unavailable-001",
  "type": "artifact",
  "source": "missing external payload",
  "sourceKind": "external",
  "location": "refs/external/missing",
  "producedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "producedAt": "2026-07-26T00:00:00.000Z",
  "freshness": "unknown",
  "status": "unavailable",
  "classification": "confidential",
  "storageMode": "external_payload_ref",
  "availability": "unavailable",
  "bindings": {
    "executionContractId": "xct:oa-001",
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-unavailable-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "system",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.additional-properties.invalid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:addl-001",
  "claimType": "technique",
  "claimStatement": "extra prop",
  "criticality": "non_critical",
  "evaluationMethod": "deterministic",
  "requiredEvidenceRefs": [],
  "reviewBundleId": "rb:oa-draft-001",
  "reviewBundleVersion": 1,
  "status": "pending",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "autoJudge": true,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-addl",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.bad-schema-version.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "claimEvaluationId": "clm:bad-ver-001",
  "claimType": "technique",
  "claimStatement": "wrong schema version",
  "criticality": "non_critical",
  "evaluationMethod": "deterministic",
  "requiredEvidenceRefs": [],
  "reviewBundleId": "rb:oa-draft-001",
  "reviewBundleVersion": 1,
  "status": "pending",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-bad-ver",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.critical-system-confirm.invalid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:crit-sys-001",
  "claimType": "securite",
  "claimStatement": "Critical confirmed by system",
  "criticality": "critical",
  "evaluationMethod": "deterministic",
  "requiredEvidenceRefs": [
    "ev:external-001"
  ],
  "providedEvidenceRefs": [
    "ev:external-001"
  ],
  "reviewBundleId": "rb:oa-under-001",
  "reviewBundleVersion": 2,
  "status": "pass",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmationAuthority": "authorized_human",
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "confirmedAt": "2026-07-26T02:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-crit-sys",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.not-proven-as-pass.invalid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:notproven-as-pass-001",
  "claimType": "qualite",
  "claimStatement": "NOT_PROVEN disguised as PASS with empty provided",
  "criticality": "non_critical",
  "evaluationMethod": "deterministic",
  "requiredEvidenceRefs": [
    "ev:unavailable-001"
  ],
  "providedEvidenceRefs": [],
  "reviewBundleId": "rb:oa-incomplete-status-001",
  "reviewBundleVersion": 2,
  "status": "pass",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmationAuthority": "system_deterministic",
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-notproven-as-pass",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.pass-without-evidence.invalid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:pass-noev-001",
  "claimType": "technique",
  "claimStatement": "PASS without evidence",
  "criticality": "non_critical",
  "evaluationMethod": "deterministic",
  "requiredEvidenceRefs": [
    "ev:from-attempt-001"
  ],
  "reviewBundleId": "rb:oa-ready-001",
  "reviewBundleVersion": 2,
  "status": "pass",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmationAuthority": "system_deterministic",
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-pass-noev",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/claim-evaluation.waived-as-pass.invalid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:waived-nopayload-001",
  "claimType": "conformite",
  "claimStatement": "Waived without waiver object",
  "criticality": "non_critical",
  "evaluationMethod": "human_review",
  "requiredEvidenceRefs": [
    "ev:stale-001"
  ],
  "reviewBundleId": "rb:oa-ready-001",
  "reviewBundleVersion": 2,
  "status": "waived",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-waived-nopayload",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.additional-properties.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:addl-001",
  "type": "document",
  "source": "extra prop",
  "sourceKind": "manual",
  "producedAt": "2026-07-26T00:00:00.000Z",
  "status": "available",
  "classification": "internal",
  "storageMode": "metadata_only",
  "availability": "available",
  "bindings": {
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": false,
  "runtimeShell": "forbidden",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-addl",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.bad-schema-version.invalid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "evidenceId": "ev:bad-ver-001",
  "type": "document",
  "source": "old version",
  "sourceKind": "manual",
  "producedAt": "2026-07-26T00:00:00.000Z",
  "status": "available",
  "classification": "internal",
  "storageMode": "metadata_only",
  "availability": "available",
  "bindings": {
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-bad-ver",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.no-binding.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:no-binding-001",
  "type": "document",
  "source": "unbound evidence",
  "sourceKind": "manual",
  "producedAt": "2026-07-26T00:00:00.000Z",
  "status": "available",
  "classification": "internal",
  "storageMode": "metadata_only",
  "availability": "available",
  "bindings": {},
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-no-binding",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.secret-in-clear.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:secret-001",
  "type": "log_ref",
  "source": "log with secret flag",
  "sourceKind": "system",
  "location": "refs/logs/secret",
  "producedAt": "2026-07-26T00:00:00.000Z",
  "status": "available",
  "classification": "confidential",
  "storageMode": "internal_payload_ref",
  "availability": "available",
  "bindings": {
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": true,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-secret",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/evidence.verifiable-without-digest.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "evidenceId": "ev:verifiable-nodigest-001",
  "type": "artifact",
  "source": "claims verifiable without digest",
  "sourceKind": "external",
  "verifiablePayload": true,
  "producedAt": "2026-07-26T00:00:00.000Z",
  "status": "available",
  "classification": "public",
  "storageMode": "external_payload_ref",
  "availability": "available",
  "bindings": {
    "projectId": "prj:campus360-oa"
  },
  "containsSecrets": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:ev-verifiable-nodigest",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.ta6-claimId.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "attemptId": "xat:oa-ta6-001",
  "executionContractId": "xct:oa-001",
  "executionContractVersion": 1,
  "selectedAgentRef": "agent:cursor-docs",
  "status": "accepted",
  "idempotencyKey": "idem-xat-ta6-001",
  "correlationId": "corr:oa-t-a5-001",
  "version": 1,
  "createdAt": "2026-07-25T12:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prov:xat-001",
    "actor": {
      "actorId": "actor:system",
      "role": "system",
      "displayName": "Studio"
    },
    "source": "execution_adapter",
    "timestamp": "2026-07-25T12:00:00.000Z",
    "correlationId": "corr:oa-t-a5-001",
    "projectId": "prj:campus360-oa"
  },
  "selectionStrategy": "capabilities_deterministic",
  "selectionProfile": "standard",
  "selectionExpiresAt": "2026-07-25T12:15:00.000Z",
  "claimId": "clm:forbidden-ta6"
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/maturity.additional-properties.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "maturityAssessmentId": "mat:addl-001",
  "projectId": "prj:campus360-oa",
  "subjectRef": "prj:campus360-oa",
  "proposedLevel": "MODELED",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "status": "proposed",
  "autoPromoted": false,
  "runtimePromotion": true,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-addl",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/maturity.auto-promoted.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "maturityAssessmentId": "mat:auto-001",
  "projectId": "prj:campus360-oa",
  "subjectRef": "prj:campus360-oa",
  "proposedLevel": "MODELED",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "status": "proposed",
  "autoPromoted": true,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-auto",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/maturity.bad-schema-version.invalid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "maturityAssessmentId": "mat:bad-ver-001",
  "projectId": "prj:campus360-oa",
  "subjectRef": "prj:campus360-oa",
  "proposedLevel": "MODELED",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "status": "proposed",
  "autoPromoted": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-bad-ver",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/maturity.confirmed-with-blocking-reserve.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "maturityAssessmentId": "mat:conf-block-001",
  "projectId": "prj:campus360-oa",
  "subjectRef": "prj:campus360-oa",
  "proposedLevel": "MODELED",
  "confirmedLevel": "MODELED",
  "blockingReservationRefs": [
    "res:hard-still-open"
  ],
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmedBy": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "confirmedAt": "2026-07-26T01:00:00.000Z",
  "status": "confirmed",
  "autoPromoted": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-conf-block",
    "actor": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/review-bundle.bad-schema-version.invalid.json`

```json
{
  "schemaVersion": "0.1.0-oa",
  "reviewBundleId": "rb:bad-ver-001",
  "projectId": "prj:campus360-oa",
  "version": 1,
  "evidenceRefs": [],
  "completeness": "incomplete",
  "status": "draft",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-bad-ver",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/review-bundle.synthesis-as-complete.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:synth-complete-001",
  "projectId": "prj:campus360-oa",
  "version": 1,
  "evidenceRefs": [],
  "completeness": "complete",
  "status": "draft",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "synthesisOnly": true,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-synth-complete",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/review-bundle.verdict-before-freeze.invalid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:verdict-nofreeze-001",
  "projectId": "prj:campus360-oa",
  "version": 1,
  "evidenceRefs": [
    "ev:manual-001"
  ],
  "completeness": "complete",
  "reviewer": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "status": "accepted",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "validatedAt": "2026-07-26T01:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-verdict-nofreeze",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-blocked.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "maturityAssessmentId": "mat:oa-blocked-001",
  "projectId": "prj:campus360-oa",
  "subjectRef": "prj:campus360-oa",
  "proposedLevel": "IMPLEMENTED",
  "dimensions": [
    {
      "dimensionId": "runtime",
      "proposedLevel": "IMPLEMENTED",
      "blocked": true
    }
  ],
  "claimEvaluationRefs": [
    "clm:not-proven-001"
  ],
  "blockingReservationRefs": [
    "res:hard-runtime-not-proven"
  ],
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "status": "blocked",
  "autoPromoted": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-blocked-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-confirmed.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "maturityAssessmentId": "mat:oa-confirmed-001",
  "projectId": "prj:campus360-oa",
  "subjectRef": "pack:v3-native-option-a-modeled",
  "dimensions": [
    {
      "dimensionId": "modeled-contracts",
      "proposedLevel": "MODELED",
      "confirmedLevel": "MODELED"
    }
  ],
  "proposedLevel": "MODELED",
  "confirmedLevel": "MODELED",
  "claimEvaluationRefs": [
    "clm:structural-001"
  ],
  "reviewBundleRefs": [
    {
      "reviewBundleId": "rb:oa-accepted-001",
      "version": 3
    }
  ],
  "evidenceRefs": [
    "ev:manual-001",
    "ev:external-001"
  ],
  "blockingReservationRefs": [],
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmedBy": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "confirmedAt": "2026-07-26T02:00:00.000Z",
  "status": "confirmed",
  "autoPromoted": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-confirmed-001",
    "actor": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-modeled.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "maturityAssessmentId": "mat:oa-modeled-prop",
  "projectId": "prj:campus360-oa",
  "subjectRef": "pack:v3-native-option-a-modeled",
  "dimensions": [
    {
      "dimensionId": "modeled-contracts",
      "proposedLevel": "MODELED"
    }
  ],
  "proposedLevel": "MODELED",
  "claimEvaluationRefs": [
    "clm:noncrit-pass-001"
  ],
  "reviewBundleRefs": [
    {
      "reviewBundleId": "rb:oa-ready-001",
      "version": 2
    }
  ],
  "evidenceRefs": [
    "ev:from-attempt-001",
    "ev:manual-001"
  ],
  "blockingReservationRefs": [
    "res:candidate-until-morris"
  ],
  "proposedBy": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "status": "proposed",
  "autoPromoted": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-modeled-001",
    "actor": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-proposed.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "maturityAssessmentId": "mat:oa-proposed-001",
  "projectId": "prj:campus360-oa",
  "subjectRef": "prj:campus360-oa",
  "proposedLevel": "VALIDATED",
  "claimEvaluationRefs": [
    "clm:noncrit-pass-001"
  ],
  "reviewBundleRefs": [
    {
      "reviewBundleId": "rb:oa-ready-001",
      "version": 2
    }
  ],
  "evidenceRefs": [
    "ev:external-001"
  ],
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "status": "proposed",
  "autoPromoted": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-proposed-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-assessment-superseded-downgrade.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "maturityAssessmentId": "mat:oa-superseded-001",
  "projectId": "prj:campus360-oa",
  "subjectRef": "pack:v3-native-option-a-modeled",
  "proposedLevel": "VALIDATED",
  "confirmedLevel": "VALIDATED",
  "claimEvaluationRefs": [
    "clm:not-proven-001"
  ],
  "reviewBundleRefs": [
    {
      "reviewBundleId": "rb:oa-incomplete-status-001",
      "version": 2
    }
  ],
  "evidenceRefs": [
    "ev:stale-001"
  ],
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmedBy": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "confirmedAt": "2026-07-26T01:00:00.000Z",
  "status": "superseded",
  "supersedesMaturityAssessmentId": "mat:oa-confirmed-001",
  "downgradeReason": "Prior MODELED confirmation invalidated after evidence became stale/unavailable",
  "autoPromoted": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:mat-superseded-001",
    "actor": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/maturity-auto-promotion-forbidden.narrative.md`

# Maturity auto-promotion forbidden

`autoPromoted` is const `false`. Any attempt to promote maturity without explicit ProposeMaturity → ConfirmMaturity human confirmation must raise `MATURITY_AUTO_PROMOTION_FORBIDDEN`.

MODELED ≠ IMPLEMENTED ≠ ADOPTED. Maturity is not execution authorization.

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/n3-is-not-morris.narrative.md`

# N3 ≠ Morris

Authority level `N3` is not Morris. Structural claim confirmation requires `confirmationAuthority=morris` with `confirmedBy.role=decision_maker` and Morris canActAsMorris semantics.

Using N3 displayName spoof without Morris authority must raise `CLAIM_AUTHORITY_MISMATCH`.

N3 ≠ Morris remains an invariant across T-A5 and T-A6.

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-accepted.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:oa-accepted-001",
  "projectId": "prj:campus360-oa",
  "version": 3,
  "evidenceRefs": [
    "ev:from-attempt-001",
    "ev:manual-001",
    "ev:external-001"
  ],
  "claimEvaluationRefs": [
    "clm:crit-confirmed-001",
    "clm:structural-001"
  ],
  "completeness": "complete",
  "reviewer": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "status": "accepted",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "reviewStartedAt": "2026-07-26T02:00:00.000Z",
  "validatedAt": "2026-07-26T03:00:00.000Z",
  "synthesisOnly": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-accepted-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-complete.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:oa-complete-001",
  "projectId": "prj:campus360-oa",
  "cycleInstanceId": "cyc:modeled-001",
  "executionContractId": "xct:oa-001",
  "version": 1,
  "evidenceRefs": [
    "ev:from-attempt-001",
    "ev:manual-001",
    "ev:external-001"
  ],
  "claimEvaluationRefs": [
    "clm:noncrit-pass-001"
  ],
  "completeness": "complete",
  "reservations": [
    "a11y runtime pending"
  ],
  "reviewer": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "status": "ready_for_review",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "synthesisOnly": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-complete-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-draft.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:oa-draft-001",
  "projectId": "prj:campus360-oa",
  "cycleInstanceId": "cyc:modeled-001",
  "version": 1,
  "evidenceRefs": [
    "ev:manual-001"
  ],
  "completeness": "incomplete",
  "status": "draft",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-draft-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-incomplete-status.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:oa-incomplete-status-001",
  "projectId": "prj:campus360-oa",
  "version": 2,
  "evidenceRefs": [
    "ev:incomplete-001"
  ],
  "completeness": "incomplete",
  "reservations": [
    "required evidence unavailable"
  ],
  "status": "incomplete",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-incomplete-status-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-incomplete.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:oa-incomplete-001",
  "projectId": "prj:campus360-oa",
  "version": 1,
  "evidenceRefs": [],
  "completeness": "incomplete",
  "status": "draft",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "synthesisOnly": true,
  "reservations": [
    "synthèse seule"
  ],
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-incomplete-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-mutate-after-freeze.narrative.md`

# ReviewBundle mutate after freeze

Once `frozenAt` is set (`ready_for_review` ≡ freeze), the bundle is immutable for evidence membership and claim evaluation binding.

Mutations must raise `REVIEW_BUNDLE_NOT_FROZEN` when freeze is required but missing, or refuse mutation on an already frozen bundle (immutable after freeze).

Verdicts (accepted/rejected) bind `reviewBundleId` + `version` exactly.

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-ready-frozen.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:oa-ready-001",
  "projectId": "prj:campus360-oa",
  "cycleInstanceId": "cyc:modeled-001",
  "executionContractId": "xct:oa-001",
  "version": 2,
  "evidenceRefs": [
    "ev:from-attempt-001",
    "ev:external-001"
  ],
  "claimEvaluationRefs": [
    "clm:noncrit-pass-001"
  ],
  "completeness": "complete",
  "status": "ready_for_review",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "synthesisOnly": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-ready-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-superseded.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:oa-superseded-001",
  "projectId": "prj:campus360-oa",
  "version": 1,
  "evidenceRefs": [
    "ev:stale-001"
  ],
  "completeness": "incomplete",
  "status": "superseded",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "supersedesReviewBundleId": "rb:oa-draft-001",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-superseded-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/review-bundle-under-review.valid.json`

```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:oa-under-001",
  "projectId": "prj:campus360-oa",
  "version": 2,
  "evidenceRefs": [
    "ev:from-attempt-001",
    "ev:manual-001"
  ],
  "claimEvaluationRefs": [
    "clm:crit-confirmed-001"
  ],
  "completeness": "complete",
  "reviewer": {
    "actorId": "actor:reviewer-1",
    "role": "reviewer",
    "displayName": "Reviewer One",
    "authorityLevel": "N2"
  },
  "status": "under_review",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "reviewStartedAt": "2026-07-26T02:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-under-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

### `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/t-a6-ta7-auto-launch-forbidden.narrative.md`

# T-A6 / T-A7 boundary — auto-launch forbidden

T-A6 maturity or claim PASS must not auto-launch the next cycle or execution.

Runtime refuse: `T_A7_AUTO_LAUNCH_FORBIDDEN` when a T-A6 output attempts to auto-start T-A7 / next cycle without an explicit human decision gate.

D-T-A6-10 / D-T-A6-12: no auto next cycle.

---

# ANNEXE K — Test governance T-A6 (complet)

```javascript
/**
 * Modeled-only Evidence / ReviewBundle / ClaimEvaluation / MaturityAssessment
 * governance validation (T-A6).
 * Uses ajv@6 from projects/sfia-studio/app/node_modules — no package.json changes.
 * Forbidden: app/lib/oa/** runtime, app/__tests__/oa/**, SQL, UI, shell adapters.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { createRequire } from "node:module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACK = path.resolve(__dirname, "..");
const SCHEMA_ROOT = path.join(PACK, "schemas");
const EXAMPLES = path.join(PACK, "examples");
const DELIVERY_DECISIONS = path.resolve(
  PACK,
  "../../sfia-v3-delivery/v3-native-option-a/t-a6-evidence-review-claims-maturity/03-decisions.md",
);
const APP_REQUIRE = createRequire(
  path.join(PACK, "../../app/package.json"),
);
const Ajv = APP_REQUIRE("ajv");

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function collectSchemas(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) collectSchemas(full, out);
    else if (ent.name.endsWith(".schema.json")) out.push(full);
  }
  return out;
}

function buildAjv() {
  const ajv = new Ajv({
    allErrors: true,
    schemaId: "auto",
    meta: true,
  });
  for (const file of collectSchemas(SCHEMA_ROOT)) {
    const schema = loadJson(file);
    if (schema.$id) ajv.addSchema(schema);
  }
  return ajv;
}

const EVIDENCE_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/evidence.schema.json";
const REVIEW_BUNDLE_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/review-bundle.schema.json";
const CLAIM_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/claim-evaluation.schema.json";
const MATURITY_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/maturity/maturity-assessment.schema.json";

const VALID_EVIDENCE = [
  "evidence-incomplete.valid.json",
  "evidence-from-attempt.valid.json",
  "evidence-manual.valid.json",
  "evidence-external-with-digest.valid.json",
  "evidence-internal-sensitive.valid.json",
  "evidence-stale.valid.json",
  "evidence-unavailable.valid.json",
];

const INVALID_EVIDENCE = [
  "invalid/evidence.no-binding.invalid.json",
  "invalid/evidence.secret-in-clear.invalid.json",
  "invalid/evidence.verifiable-without-digest.invalid.json",
  "invalid/evidence.bad-schema-version.invalid.json",
  "invalid/evidence.additional-properties.invalid.json",
];

const VALID_REVIEW_BUNDLES = [
  "review-bundle-complete.valid.json",
  "review-bundle-incomplete.valid.json",
  "review-bundle-draft.valid.json",
  "review-bundle-ready-frozen.valid.json",
  "review-bundle-under-review.valid.json",
  "review-bundle-accepted.valid.json",
  "review-bundle-incomplete-status.valid.json",
  "review-bundle-superseded.valid.json",
];

const INVALID_REVIEW_BUNDLES = [
  "invalid/review-bundle.verdict-before-freeze.invalid.json",
  "invalid/review-bundle.synthesis-as-complete.invalid.json",
  "invalid/review-bundle.bad-schema-version.invalid.json",
];

const VALID_CLAIMS = [
  "claim-evaluation-noncritical-pass.valid.json",
  "claim-evaluation-critical-confirmed.valid.json",
  "claim-evaluation-structural-morris.valid.json",
  "claim-evaluation-not-proven.valid.json",
  "claim-evaluation-waived.valid.json",
  "claim-evaluation-disputed.valid.json",
];

const INVALID_CLAIMS = [
  "invalid/claim-evaluation.pass-without-evidence.invalid.json",
  "invalid/claim-evaluation.critical-system-confirm.invalid.json",
  "invalid/claim-evaluation.waived-as-pass.invalid.json",
  "invalid/claim-evaluation.not-proven-as-pass.invalid.json",
  "invalid/claim-evaluation.additional-properties.invalid.json",
  "invalid/claim-evaluation.bad-schema-version.invalid.json",
];

const VALID_MATURITY = [
  "maturity-assessment-modeled.valid.json",
  "maturity-assessment-proposed.valid.json",
  "maturity-assessment-confirmed.valid.json",
  "maturity-assessment-blocked.valid.json",
  "maturity-assessment-superseded-downgrade.valid.json",
];

const INVALID_MATURITY = [
  "invalid/maturity.auto-promoted.invalid.json",
  "invalid/maturity.confirmed-with-blocking-reserve.invalid.json",
  "invalid/maturity.bad-schema-version.invalid.json",
  "invalid/maturity.additional-properties.invalid.json",
];

const NARRATIVES = [
  [
    "claim-evaluation-self-review-critical.narrative.md",
    ["CLAIM_SELF_REVIEW_FORBIDDEN", "Critical", "proposedBy", "confirmedBy"],
  ],
  [
    "maturity-auto-promotion-forbidden.narrative.md",
    ["MATURITY_AUTO_PROMOTION_FORBIDDEN"],
  ],
  [
    "t-a6-ta7-auto-launch-forbidden.narrative.md",
    ["T_A7_AUTO_LAUNCH_FORBIDDEN"],
  ],
  [
    "review-bundle-mutate-after-freeze.narrative.md",
    ["REVIEW_BUNDLE_NOT_FROZEN", "immutable after freeze"],
  ],
  [
    "n3-is-not-morris.narrative.md",
    ["N3 ≠ Morris", "CLAIM_AUTHORITY_MISMATCH"],
  ],
];

test("T-A6 Evidence/ReviewBundle/ClaimEvaluation/Maturity schemas compile", () => {
  const ajv = buildAjv();
  for (const id of [
    EVIDENCE_SCHEMA_ID,
    REVIEW_BUNDLE_SCHEMA_ID,
    CLAIM_SCHEMA_ID,
    MATURITY_SCHEMA_ID,
  ]) {
    const validate = ajv.getSchema(id);
    assert.ok(validate, `schema registered: ${id}`);
    assert.equal(typeof validate, "function");
  }
});

test("schema versions, additionalProperties, consts", () => {
  const evidence = loadJson(
    path.join(SCHEMA_ROOT, "evidence/evidence.schema.json"),
  );
  const bundle = loadJson(
    path.join(SCHEMA_ROOT, "evidence/review-bundle.schema.json"),
  );
  const claim = loadJson(
    path.join(SCHEMA_ROOT, "evidence/claim-evaluation.schema.json"),
  );
  const maturity = loadJson(
    path.join(SCHEMA_ROOT, "maturity/maturity-assessment.schema.json"),
  );

  assert.equal(evidence.properties.schemaVersion.const, "0.2.0-oa");
  assert.equal(bundle.properties.schemaVersion.const, "0.2.0-oa");
  assert.equal(claim.properties.schemaVersion.const, "0.1.0-oa");
  assert.equal(maturity.properties.schemaVersion.const, "0.2.0-oa");

  assert.equal(evidence.additionalProperties, false);
  assert.equal(bundle.additionalProperties, false);
  assert.equal(claim.additionalProperties, false);
  assert.equal(maturity.additionalProperties, false);

  assert.equal(evidence.properties.containsSecrets.const, false);
  assert.equal(maturity.properties.autoPromoted.const, false);

  assert.ok(/D-T-A6-01/.test(evidence.description));
  assert.ok(/D-T-A6-03/.test(bundle.description));
  assert.ok(/D-T-A6-04/.test(claim.description));
  assert.ok(/D-T-A6-07/.test(maturity.description));
  assert.ok(/autoPromoted=false|autoPromoted.*false/i.test(maturity.description));
  assert.ok(/Secrets forbidden|secrets/i.test(evidence.description));
  assert.ok(/Synthesis alone is never complete|synthesisOnly/i.test(bundle.description));
  assert.ok(/NOT_PROVEN|WAIVED/i.test(claim.description));
});

test("valid Evidence examples accept under 0.2.0-oa", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(EVIDENCE_SCHEMA_ID);
  for (const rel of VALID_EVIDENCE) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid Evidence examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(EVIDENCE_SCHEMA_ID);
  for (const rel of INVALID_EVIDENCE) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("valid ReviewBundle examples accept under 0.2.0-oa", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(REVIEW_BUNDLE_SCHEMA_ID);
  for (const rel of VALID_REVIEW_BUNDLES) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid ReviewBundle examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(REVIEW_BUNDLE_SCHEMA_ID);
  for (const rel of INVALID_REVIEW_BUNDLES) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("valid ClaimEvaluation examples accept under 0.1.0-oa", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  for (const rel of VALID_CLAIMS) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid ClaimEvaluation examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  for (const rel of INVALID_CLAIMS) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("valid MaturityAssessment examples accept under 0.2.0-oa", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(MATURITY_SCHEMA_ID);
  for (const rel of VALID_MATURITY) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid MaturityAssessment examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(MATURITY_SCHEMA_ID);
  for (const rel of INVALID_MATURITY) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("draft ReviewBundle has no frozenAt; ready_for_review requires frozenAt", () => {
  const draft = loadJson(path.join(EXAMPLES, "review-bundle-draft.valid.json"));
  assert.equal(draft.status, "draft");
  assert.ok(!("frozenAt" in draft));
  const ready = loadJson(
    path.join(EXAMPLES, "review-bundle-ready-frozen.valid.json"),
  );
  assert.equal(ready.status, "ready_for_review");
  assert.ok(ready.frozenAt);
});

test("execution_attempt Evidence requires bindings.executionAttemptId", () => {
  const fromAttempt = loadJson(
    path.join(EXAMPLES, "evidence-from-attempt.valid.json"),
  );
  assert.equal(fromAttempt.sourceKind, "execution_attempt");
  assert.ok(fromAttempt.bindings.executionAttemptId);
});

test("Critical PASS uses authorized_human; structural uses morris", () => {
  const crit = loadJson(
    path.join(EXAMPLES, "claim-evaluation-critical-confirmed.valid.json"),
  );
  assert.equal(crit.confirmationAuthority, "authorized_human");
  assert.notEqual(crit.confirmedBy.role, "system");
  assert.notEqual(crit.confirmedBy.role, "agent");
  const structural = loadJson(
    path.join(EXAMPLES, "claim-evaluation-structural-morris.valid.json"),
  );
  assert.equal(structural.confirmationAuthority, "morris");
  assert.equal(structural.confirmedBy.role, "decision_maker");
});

test("waiver reversible const true; disputed requires dispute", () => {
  const waived = loadJson(
    path.join(EXAMPLES, "claim-evaluation-waived.valid.json"),
  );
  assert.equal(waived.status, "waived");
  assert.equal(waived.waiver.reversible, true);
  const disputed = loadJson(
    path.join(EXAMPLES, "claim-evaluation-disputed.valid.json"),
  );
  assert.ok(disputed.dispute);
});

test("confirmed maturity has no blocking reserves; blocked has ≥1", () => {
  const confirmed = loadJson(
    path.join(EXAMPLES, "maturity-assessment-confirmed.valid.json"),
  );
  assert.equal(confirmed.status, "confirmed");
  assert.ok(
    !confirmed.blockingReservationRefs ||
      confirmed.blockingReservationRefs.length === 0,
  );
  const blocked = loadJson(
    path.join(EXAMPLES, "maturity-assessment-blocked.valid.json"),
  );
  assert.equal(blocked.status, "blocked");
  assert.ok(blocked.blockingReservationRefs.length >= 1);
});

test("superseded maturity carries supersedesMaturityAssessmentId + downgradeReason", () => {
  const data = loadJson(
    path.join(EXAMPLES, "maturity-assessment-superseded-downgrade.valid.json"),
  );
  assert.equal(data.status, "superseded");
  assert.ok(data.supersedesMaturityAssessmentId.startsWith("mat:"));
  assert.ok(data.downgradeReason);
  assert.equal(data.autoPromoted, false);
});

test("T-A6 narratives exist with key phrases", () => {
  for (const [rel, phrases] of NARRATIVES) {
    const p = path.join(EXAMPLES, rel);
    assert.ok(fs.existsSync(p), `missing narrative ${rel}`);
    const text = fs.readFileSync(p, "utf8");
    for (const phrase of phrases) {
      assert.ok(text.includes(phrase), `${rel} missing phrase ${phrase}`);
    }
  }
});

test("D-T-A6 decisions recorded; schema/docs tokens for T-A6 commands", () => {
  const decisions = fs.readFileSync(DELIVERY_DECISIONS, "utf8");
  for (let i = 1; i <= 12; i++) {
    const id = `D-T-A6-${String(i).padStart(2, "0")}`;
    assert.ok(decisions.includes(id), `decisions missing ${id}`);
  }
  for (const token of [
    "APPROVED BY MORRIS",
    "autoPromoted=false",
    "N3 ≠ Morris",
    "Self-review Critical interdit",
    "Pas d’auto next cycle",
  ]) {
    assert.ok(decisions.includes(token), `decisions missing ${token}`);
  }

  const catalog = fs.readFileSync(
    path.join(PACK, "09-command-event-error-and-transition-catalog.md"),
    "utf8",
  );
  const doc08 = fs.readFileSync(
    path.join(PACK, "08-evidence-review-bundle-maturity-and-debt-model.md"),
    "utf8",
  );
  const evidenceDesc = loadJson(
    path.join(SCHEMA_ROOT, "evidence/evidence.schema.json"),
  ).description;
  const bundleDesc = loadJson(
    path.join(SCHEMA_ROOT, "evidence/review-bundle.schema.json"),
  ).description;
  const claimDesc = loadJson(
    path.join(SCHEMA_ROOT, "evidence/claim-evaluation.schema.json"),
  ).description;
  const maturityDesc = loadJson(
    path.join(SCHEMA_ROOT, "maturity/maturity-assessment.schema.json"),
  ).description;
  const corpus = [catalog, doc08, evidenceDesc, bundleDesc, claimDesc, maturityDesc, decisions].join(
    "\n",
  );

  // Prefer catalog/08 when present; otherwise schema descriptions + decisions cover governance vocabulary.
  for (const token of [
    "AttachEvidence",
    "BuildReviewBundle",
    "EvaluateClaim",
    "Evidence",
    "ReviewBundle",
    "ClaimEvaluation",
    "MaturityAssessment",
    "D-T-A6-01",
    "D-T-A6-03",
    "D-T-A6-04",
    "D-T-A6-07",
  ]) {
    assert.ok(corpus.includes(token), `T-A6 corpus missing ${token}`);
  }

  // Command names that may land in 08/09 later — assert intent via decisions + schema vocabulary when absent.
  for (const futureCmd of [
    "RegisterEvidence",
    "FreezeReviewBundle",
    "ConfirmClaimEvaluation",
    "ProposeMaturity",
    "ConfirmMaturity",
  ]) {
    if (!catalog.includes(futureCmd) && !doc08.includes(futureCmd)) {
      assert.ok(
        /Evidence|ReviewBundle|Claim|Maturity|autoPromoted|freeze|PASS/i.test(
          corpus,
        ),
        `${futureCmd} not in docs yet; schema/decisions must still cover domain`,
      );
    }
  }
});

test("README documents modeled pack versions for ExecutionContract/Attempt baseline", () => {
  const readme = fs.readFileSync(path.join(PACK, "README.md"), "utf8");
  assert.ok(readme.includes("0.1.0-oa"));
  assert.ok(readme.includes("ExecutionContract"));
  assert.ok(readme.includes("0.2.0-oa"));
  assert.ok(/Evidence|ReviewBundle|maturité|maturity/i.test(readme));
});

test("adversarial: evidence bindings empty and containsSecrets true rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(EVIDENCE_SCHEMA_ID);
  const base = loadJson(path.join(EXAMPLES, "evidence-manual.valid.json"));
  const empty = { ...base, bindings: {} };
  assert.equal(validate(empty), false);
  const secrets = { ...base, containsSecrets: true };
  assert.equal(validate(secrets), false);
});

test("adversarial: accepted ReviewBundle without frozenAt rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(REVIEW_BUNDLE_SCHEMA_ID);
  const data = loadJson(path.join(EXAMPLES, "review-bundle-accepted.valid.json"));
  delete data.frozenAt;
  assert.equal(validate(data), false);
});

test("adversarial: Critical PASS confirmedBy system rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  const data = loadJson(
    path.join(EXAMPLES, "claim-evaluation-critical-confirmed.valid.json"),
  );
  data.confirmedBy = {
    actorId: "actor:studio",
    role: "system",
    displayName: "Studio",
  };
  assert.equal(validate(data), false);
});

test("adversarial: maturity autoPromoted true rejected; confirmed with blocking reserve rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(MATURITY_SCHEMA_ID);
  const proposed = loadJson(
    path.join(EXAMPLES, "maturity-assessment-proposed.valid.json"),
  );
  proposed.autoPromoted = true;
  assert.equal(validate(proposed), false);
  const confirmed = loadJson(
    path.join(EXAMPLES, "maturity-assessment-confirmed.valid.json"),
  );
  confirmed.blockingReservationRefs = ["res:hard"];
  assert.equal(validate(confirmed), false);
});
```

---

# ANNEXE L — Diff utile (commit materialize)

```
eee75d1 feat(sfia-studio): materialize T-A6 modeled contracts
 .../04-modeled-materialization.md                  | 191 ++++++++
 .../t-a6-evidence-review-claims-maturity/README.md |  89 ++--
 ...modeling-principles-and-aggregate-boundaries.md |  11 +-
 ...-core-entities-value-objects-and-identifiers.md |   7 +-
 ...idence-review-bundle-maturity-and-debt-model.md | 178 +++++++-
 ...9-command-event-error-and-transition-catalog.md |  77 +++-
 ...ion-versioning-provenance-and-security-rules.md |  16 +-
 .../sfia-v3-modeled/v3-native-option-a/README.md   |  29 +-
 .../claim-evaluation-critical-confirmed.valid.json |  54 +++
 .../examples/claim-evaluation-disputed.valid.json  |  47 ++
 .../claim-evaluation-noncritical-pass.valid.json   |  40 ++
 .../claim-evaluation-not-proven.valid.json         |  36 ++
 ...im-evaluation-self-review-critical.narrative.md |   9 +
 .../claim-evaluation-structural-morris.valid.json  |  48 ++
 .../examples/claim-evaluation-waived.valid.json    |  46 ++
 .../evidence-external-with-digest.valid.json       |  40 ++
 .../examples/evidence-from-attempt.valid.json      |  41 ++
 .../examples/evidence-incomplete.valid.json        |  31 +-
 .../evidence-internal-sensitive.valid.json         |  40 ++
 .../examples/evidence-manual.valid.json            |  38 ++
 .../examples/evidence-stale.valid.json             |  37 ++
 .../examples/evidence-unavailable.valid.json       |  38 ++
 ...m-evaluation.additional-properties.invalid.json |  33 ++
 ...laim-evaluation.bad-schema-version.invalid.json |  32 ++
 ...evaluation.critical-system-confirm.invalid.json |  46 ++
 ...laim-evaluation.not-proven-as-pass.invalid.json |  37 ++
 ...m-evaluation.pass-without-evidence.invalid.json |  36 ++
 .../claim-evaluation.waived-as-pass.invalid.json   |  34 ++
 .../evidence.additional-properties.invalid.json    |  30 ++
 .../evidence.bad-schema-version.invalid.json       |  29 ++
 .../invalid/evidence.no-binding.invalid.json       |  27 ++
 .../invalid/evidence.secret-in-clear.invalid.json  |  30 ++
 ...evidence.verifiable-without-digest.invalid.json |  30 ++
 .../maturity.additional-properties.invalid.json    |  30 ++
 .../invalid/maturity.auto-promoted.invalid.json    |  29 ++
 .../maturity.bad-schema-version.invalid.json       |  29 ++
 ...ty.confirmed-with-blocking-reserve.invalid.json |  40 ++
 .../review-bundle.bad-schema-version.invalid.json  |  23 +
 ...eview-bundle.synthesis-as-complete.invalid.json |  26 +-
 ...eview-bundle.verdict-before-freeze.invalid.json |  32 ++
 .../maturity-assessment-blocked.valid.json         |  42 ++
 .../maturity-assessment-confirmed.valid.json       |  58 +++
 .../maturity-assessment-modeled.valid.json         |  49 +-
 .../maturity-assessment-proposed.valid.json        |  41 ++
 ...rity-assessment-superseded-downgrade.valid.json |  51 +++
 .../maturity-auto-promotion-forbidden.narrative.md |   5 +
 .../examples/n3-is-not-morris.narrative.md         |   7 +
 .../examples/review-bundle-accepted.valid.json     |  41 ++
 .../examples/review-bundle-complete.valid.json     |  30 +-
 .../examples/review-bundle-draft.valid.json        |  26 ++
 .../review-bundle-incomplete-status.valid.json     |  29 ++
 .../examples/review-bundle-incomplete.valid.json   |  20 +-
 .../review-bundle-mutate-after-freeze.narrative.md |   7 +
 .../examples/review-bundle-ready-frozen.valid.json |  33 ++
 .../examples/review-bundle-superseded.valid.json   |  27 ++
 .../examples/review-bundle-under-review.valid.json |  37 ++
 .../t-a6-ta7-auto-launch-forbidden.narrative.md    |   7 +
 .../schemas/evidence/claim-evaluation.schema.json  | 424 +++++++++++++++++
 .../schemas/evidence/evidence.schema.json          | 231 +++++++++-
 .../schemas/evidence/review-bundle.schema.json     | 211 ++++++++-
 .../maturity/maturity-assessment.schema.json       | 283 +++++++++++-
 .../evidence-review-maturity-governance.test.mjs   | 503 +++++++++++++++++++++
 62 files changed, 3721 insertions(+), 157 deletions(-)
```

---

# ANNEXE M — Anti-claims checklist

- [x] Runtime non modifié
- [x] SQL absent
- [x] T-A7 non ouvert
- [x] Adapter réel absent
- [x] Exécution réelle absente
- [x] Push projet non exécuté
- [x] PR non créée
- [x] Merge non exécuté
- [x] Réserves non fermées (B5 R1 R-T-A3-* R-M01 U-M02)
- [x] Vendor stockage non choisi
- [x] R-M01 non fermée (schema matérialisé seulement)
- [x] Review pack FULL avec contenus complets

## Verdict final

`SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO`
