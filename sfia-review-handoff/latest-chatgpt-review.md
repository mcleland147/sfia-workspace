# SFIA Review Pack — FULL — T-A6 D4 MaturityAssessment Validation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 11:19:55 CEST (+0200) |
| **Cycle** | QA / validation / T-A6-D4 MaturityAssessment |
| **Profil** | Critical |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `357fe58fdad60859e2410be3d1e553b39a157308` |
| **HEAD final** | `fb5e11ccb48fb40aecf95de63459efcccd501ca8` |
| **Commits** | `5bb399d` fix · `5e666d4` validate docs · `07a2e1f` record · `fb5e11c` point HEAD |
| **Push projet / PR / merge** | **NON** |
| **D5** | **NON** |
| **Modeled / T-A3–T-A5 / packages** | **NON** modifiés |
| **D1–D3 régressés** | **NON** (122 PASS D1–D4) |
| **SQL / API / UI / T-A7 / adapter / exécution réelle** | **ABSENTS** |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT VALIDATED AFTER CORRECTION — D5 REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — branche/HEAD/merge-base exacts · staged vide · untracked `.tmp-sfia-review/` · handoff source blob `45bd2aff…`.

### Status

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
HEAD fb5e11ccb48fb40aecf95de63459efcccd501ca8
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
HEAD a197322c9fabfb58aa52a23fbfa58d3df3348856
branch refs/heads/sfia/review-handoff
```

### Handoff source

blob `45bd2affb52a547f2837e1504fee585ef32f4683` — IMPLEMENTED — VALIDATION REQUIRES MORRIS GO

### CKC

`04-qa-validation.md` candidate · `executionAuthority=false`

---

## 2. Diff initial

Working tree clean at `357fe58fdad60859e2410be3d1e553b39a157308` before validation corrections.

### Fix commit stat

```
commit 5bb399d83c39bb55e34e8a5d5cd206297dff59cc
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 11:19:38 2026 +0200

    fix(sfia-studio): correct T-A6 D4 validation findings
    
    Re-assess ClaimEvaluation bindings before ConfirmMaturity, and refuse Propose
    when no eligible PASS supports a modeled level.
    
    Co-authored-by: Cursor <cursoragent@cursor.com>

 .../adversarialMaturityValidation.test.ts          | 255 +++++++++++++++++++++
 .../maturityAssessmentDomain.test.ts               |  14 ++
 .../maturityAssessmentLifecycle.test.ts            |  14 +-
 .../evidence-review/application/confirmMaturity.ts |  98 +++++++-
 .../application/maturityCalculation.ts             |  80 ++++++-
 .../evidence-review/application/proposeMaturity.ts |   6 +
 .../app/lib/oa/evidence-review/index.ts            |   2 +
 7 files changed, 454 insertions(+), 15 deletions(-)

```

---

## 3. Fichiers

### Créés

- `adversarialMaturityValidation.test.ts`
- `16-delivery-d4-validation.md`

### Modifiés

- `confirmMaturity.ts` · `maturityCalculation.ts` · `proposeMaturity.ts` · `index.ts`
- lifecycle/domain tests · README

### Supprimés

Aucun.

---

## 4. Contenu complet — 16-delivery-d4-validation.md

```markdown
# 16 — T-A6-D4 MaturityAssessment Validation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D4 — MaturityAssessment |
| **Cycle** | QA / validation (Critical) |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `357fe58fdad60859e2410be3d1e553b39a157308` |
| **HEAD final** | `07a2e1f70beddbb42709a28262031b79ec4d05d2` |
| **Horodatage** | 2026-07-26 11:19:00 CEST (+0200) |
| **Handoff source** | blob `45bd2affb52a547f2837e1504fee585ef32f4683` |
| **Statut** | **T-A6-D4 VALIDATED AFTER CORRECTION** |
| **D1 / D2 / D3** | VALIDATED AFTER CORRECTION (non régressés) |
| **D5** | **NON** |
| **Fake-only / mémoire** | **oui** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT VALIDATED AFTER CORRECTION — D5 REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

Delivery `01`…`15` · README · handoff D4 · runtime `evidence-review/**` · schema MaturityAssessment `0.2.0-oa` · ClaimEvaluation D3 · T-A3 RO · CKC `04-qa-validation.md` (candidate, `executionAuthority=false`).

---

## 2. Méthode (7 niveaux)

1. Conformité décisions Morris  
2. Domaine MaturityAssessment vs `0.2.0-oa`  
3. Binding ClaimEvaluation exacts  
4. Calcul / promotion fail-closed  
5. Confirmation / autorité  
6. Downgrade / supersession / OCC / idempotence  
7. Sécurité / audit / non-régression  

---

## 3. Conformité décisions

| Décision | Résultat |
|----------|----------|
| Module unique `evidence-review/**` | **PASS** |
| Maturity autonome · OCC propre | **PASS** |
| Use cases spécialisés · sync fail-closed | **PASS** (Confirm renforcé) |
| Mémoire / fake-only | **PASS** |
| D4 only · D1–D3 non breaking | **PASS** |
| D5 / Decision / executionAuthority absents | **PASS** |

---

## 4. Domaine / niveaux / critères / gaps

| Zone | Résultat |
|------|----------|
| ID `mat:` · statuses · niveaux modeled | **PASS** |
| Critères eligible/confirmed/modeled/implemented/adopted/no_hard_reserve | **PASS** |
| Gaps explicites | **PASS** |
| `autoPromoted=false` | **PASS** |
| DOCUMENTED exige ≥1 eligible PASS | **PASS** (après F-A6-D4-02) |
| Copies défensives | **PASS** |

---

## 5. Binding / éligibilité / promotion

| Invariant | Résultat |
|-----------|----------|
| ClaimEvaluationReader RO · id+version exacts | **PASS** |
| disputed/waived/superseded/non confirmé exclus | **PASS** |
| Confirm re-assess bindings avant confirm | **PASS** (après F-A6-D4-01) |
| Propose refuse si aucun eligible (hors blocked HARD) | **PASS** (après F-A6-D4-02) |
| Aucune moyenne / auto-promotion | **PASS** |

---

## 6. Commandes

| Commande | Résultat |
|----------|----------|
| ProposeMaturity | **PASS** |
| ConfirmMaturity | **PASS** (re-assess + Morris IMPLEMENTED/ADOPTED) |
| DowngradeMaturity | **PASS** (explicite · atomique · humain) |

---

## 7. Findings

### Critical

Aucun.

### Major (corrigés)

| ID | Fichier | Invariant | Preuve | Impact | Correction | Blocker D4 | Blocker D5 |
|----|---------|-----------|--------|--------|------------|------------|------------|
| **F-A6-D4-01** | `confirmMaturity.ts` | Confirm exige claims encore éligibles aux versions exactes | Confirm promo `proposed`→`confirmed` sans relire ClaimEvaluation ; claim superseded post-propose ⇒ faux confirm | Confirmation indue / maturité figée sur claims périmées | Inject `ClaimEvaluationReader` ; `reassessStoredBindings` + recalcul avant authority/update | oui (avant) | oui |
| **F-A6-D4-02** | `maturityCalculation.ts` / `proposeMaturity.ts` | DOCUMENTED ⇒ ≥1 eligible PASS | Calcul assignait DOCUMENTED avec `supportedLevel` même sans eligible ; Propose waived-only réussissait | Fausse maturité DOCUMENTED | `supportedLevel=null` sans eligible ; Propose fail `MATURITY_CLAIM_NOT_ELIGIBLE` (sauf blocked HARD) | oui (avant) | oui |

### Minor / Observations

| ID | Note |
|----|------|
| O-D4-1 | Seuils runtime documentés (modeled sans formule numérique) |
| O-D4-2 | C1–C4 NOT VALIDATED |
| O-D4-3 | Downgrade peut enregistrer un successeur avec gaps après invalidation (DEL-07) |
| O-D4-4 | Replay idempotent peut ré-émettre audit ok — acceptable |

---

## 8. Corrections

Commit : `fix(sfia-studio): correct T-A6 D4 validation findings`

- Confirm re-assess ClaimEvaluation  
- supportedLevel null / Propose fail-closed sans eligible  
- Tests adversariaux `adversarialMaturityValidation.test.ts` (+3)  
- Tests lifecycle/domain mis à jour  

---

## 9. Tests (réexécution propre)

| Suite | Commande | Avant | Après | Résultat |
|-------|----------|-------|-------|----------|
| evidence-review D1–D4 | `npm test -- __tests__/oa/evidence-review` | 119 | **122** | **PASS** (+3 adversariaux) |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | 50 | **PASS** |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | 61 | **PASS** |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | 88 | **PASS** |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | 27 | 27 | **PASS** |
| typecheck / lint / build / diff-check | — | — | — | **PASS** |

Durées : evidence-review ~0.77s · T-A3 ~0.4s · T-A4 ~0.5s · T-A5 ~0.5s · modeled ~0.15s. Skipped : 0.

---

## 10. Sécurité / audit / réserves

Actors/motifs filtrés · audit refs-only · fake-only · U-M02 **OPEN**.

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**  
C1–C4 **RECOMMENDED — NOT VALIDATED**

---

## 11. Anti-claims

Pas D5 READY · DELIVERY COMPLETE · persistence réelle · T-A7 · R-M01/U-M02 fermées · C1–C4 validées · exécution réelle · Decision Morris créée.

---

## 12. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT VALIDATED AFTER CORRECTION — D5 REQUIRES MORRIS GO`

```

---

## 5. Contenu complet — README

```markdown
# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Profil** | Critical |
| **Gate D1 validate** | `GO VALIDATE T-A6 DELIVERY D1` (**CONSUMED**) |
| **Gate D2 validate** | `GO VALIDATE T-A6 DELIVERY D2` (**CONSUMED**) |
| **Gate D3 validate** | `GO VALIDATE T-A6 DELIVERY D3` (**CONSUMED**) |
| **Gate D4 implement** | `GO IMPLEMENT T-A6 DELIVERY D4` (**CONSUMED**) |
| **Gate D4 validate** | `GO VALIDATE T-A6 DELIVERY D4 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` |
| **Runtime D1** | **VALIDATED** (après correction) |
| **Runtime D2** | **VALIDATED AFTER CORRECTION** |
| **Runtime D3** | **VALIDATED AFTER CORRECTION** |
| **Runtime D4** | MaturityAssessment — **T-A6-D4 VALIDATED AFTER CORRECTION** |
| **Fake-only / mémoire** | **oui** |
| **Persistence réelle** | **NON** |
| **D5** | **NON** lancé |
| **Push / PR / merge** | **NONE** |
| **Statut pack** | **T-A6-D4 VALIDATED AFTER CORRECTION** |
| **Horodatage D4 validate** | 2026-07-26 11:19:00 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT VALIDATED AFTER CORRECTION — D5 REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Livrables

1. [README.md](./README.md)
2. [01](./01-framing.md) … [15-delivery-d4-implementation.md](./15-delivery-d4-implementation.md)
3. [16-delivery-d4-validation.md](./16-delivery-d4-validation.md)
4. Runtime : `app/lib/oa/evidence-review/**` (D1–D4)
5. Tests : `app/__tests__/oa/evidence-review/**`

## D4 validé

ProposeMaturity / ConfirmMaturity / DowngradeMaturity · bindings ClaimEvaluation exacts · Confirm re-assess · DOCUMENTED sans eligible refusé · Morris IMPLEMENTED/ADOPTED · 122 tests D1–D4 PASS

## Réserves (OPEN)

B5 · R1 · R-T-A3-1..4 (HARD 1–2) · R-M01 · U-M02 **OPEN**
C1–C4 **RECOMMENDED — NOT VALIDATED**

## Anti-claims

Pas D5 READY / DELIVERY COMPLETE / persistence réelle / T-A7 / R-M01 fermée / C1–C4 validées / exécution réelle

```

---

## 6. Diff utile corrections

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialMaturityValidation.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialMaturityValidation.test.ts
new file mode 100644
index 0000000..6c44737
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/adversarialMaturityValidation.test.ts
@@ -0,0 +1,255 @@
+/**
+ * T-A6-D4 adversarial validation — Confirm re-assess, no DOCUMENTED without eligible,
+ * IMPLEMENTED/ADOPTED Morris, defensive copies.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import type { ActorReference } from "@/lib/oa/evidence-review";
+import { ACTOR, DIGEST_A, buildServices } from "./helpers";
+
+const REVIEWER: ActorReference = {
+  actorId: "actor:reviewer-1",
+  role: "reviewer",
+  authorityLevel: "N2",
+};
+
+const SYSTEM: ActorReference = {
+  actorId: "actor:studio",
+  role: "system",
+  authorityLevel: "none",
+};
+
+async function seedVerifiedEvidence(
+  s: ReturnType<typeof buildServices>,
+  id: string,
+) {
+  await s.registerEvidence.execute({
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
+  s.fakePayload.setScript(id, { digest: DIGEST_A });
+  await s.verifyEvidenceIntegrity.execute({
+    evidenceId: id,
+    actor: ACTOR,
+    expectedVersion: 1,
+  });
+}
+
+async function freezeBundle(
+  s: ReturnType<typeof buildServices>,
+  rbId: string,
+  evidenceIds: string[],
+) {
+  for (const id of evidenceIds) await seedVerifiedEvidence(s, id);
+  await s.createReviewBundle.execute({
+    reviewBundleId: rbId,
+    idempotencyKey: `idem-create-${rbId}`,
+    actor: ACTOR,
+    projectId: "prj:campus360-oa",
+    evidenceIds,
+  });
+  await s.freezeReviewBundle.execute({
+    reviewBundleId: rbId,
+    idempotencyKey: `idem-freeze-${rbId}`,
+    actor: ACTOR,
+    expectedVersion: 1,
+  });
+}
+
+async function seedPassClaim(
+  s: ReturnType<typeof buildServices>,
+  claimId: string,
+  evidenceId: string,
+  rbId: string,
+) {
+  await freezeBundle(s, rbId, [evidenceId]);
+  const evaluated = await s.evaluateClaim.execute({
+    claimEvaluationId: claimId,
+    idempotencyKey: `idem-eval-${claimId}`,
+    actor: SYSTEM,
+    claimType: "technique",
+    claimStatement: "Support maturity",
+    criticality: "non_critical",
+    evaluationMethod: "deterministic",
+    requiredEvidenceRefs: [evidenceId],
+    reviewBundleId: rbId,
+    reviewBundleVersion: 2,
+  });
+  expect(evaluated.ok).toBe(true);
+  if (!evaluated.ok) return null;
+  return evaluated.claimEvaluation;
+}
+
+describe("T-A6-D4 adversarial — Confirm re-assessment", () => {
+  it("refuses Confirm after bound claim is superseded post-propose", async () => {
+    const s = buildServices();
+    s.fakeClaimAuthority.grant({
+      actorId: REVIEWER.actorId,
+      level: "N2",
+      scope: "oa.maturity_assessment",
+    });
+    const claim = await seedPassClaim(
+      s,
+      "clm:adv-sup-old",
+      "ev:adv-sup",
+      "rb:adv-sup",
+    );
+    expect(claim).toBeTruthy();
+    const proposed = await s.proposeMaturity.execute({
+      maturityAssessmentId: "mat:adv-sup",
+      idempotencyKey: "idem-mat-adv-sup-p",
+      actor: SYSTEM,
+      projectId: "prj:campus360-oa",
+      subjectRef: "prj:campus360-oa",
+      requestedLevel: "VALIDATED",
+      claimBindings: [
+        {
+          claimEvaluationId: "clm:adv-sup-old",
+          claimEvaluationVersion: claim!.version,
+        },
+      ],
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+
+    const successor = await s.evaluateClaim.execute({
+      claimEvaluationId: "clm:adv-sup-new",
+      idempotencyKey: "idem-clm-adv-sup-new",
+      actor: SYSTEM,
+      claimType: "technique",
+      claimStatement: "Superseding evaluation",
+      criticality: "non_critical",
+      evaluationMethod: "deterministic",
+      requiredEvidenceRefs: ["ev:adv-sup"],
+      reviewBundleId: "rb:adv-sup",
+      reviewBundleVersion: 2,
+      supersedesClaimEvaluationId: "clm:adv-sup-old",
+    });
+    expect(successor.ok).toBe(true);
+    expect(await s.claimEvaluationReader.isSuperseded("clm:adv-sup-old")).toBe(
+      true,
+    );
+
+    const confirmed = await s.confirmMaturity.execute({
+      maturityAssessmentId: "mat:adv-sup",
+      idempotencyKey: "idem-mat-adv-sup-c",
+      actor: REVIEWER,
+      expectedVersion: 1,
+    });
+    expect(confirmed.ok).toBe(false);
+    if (confirmed.ok) return;
+    expect(
+      confirmed.error.detailCode === "MATURITY_CLAIM_SUPERSEDED" ||
+        confirmed.error.detailCode === "MATURITY_CLAIM_NOT_ELIGIBLE",
+    ).toBe(true);
+  });
+});
+
+describe("T-A6-D4 adversarial — IMPLEMENTED Morris + defensive copies", () => {
+  it("refuses IMPLEMENTED confirm without Morris gate", async () => {
+    const s = buildServices();
+    s.fakeClaimAuthority.grant({
+      actorId: REVIEWER.actorId,
+      level: "N2",
+      scope: "oa.maturity_assessment",
+    });
+    s.fakeClaimAuthority.grant({
+      actorId: REVIEWER.actorId,
+      level: "N2",
+      scope: "oa.claim_evaluation",
+    });
+    // Build critical confirmed claim to support IMPLEMENTED
+    await freezeBundle(s, "rb:adv-impl", ["ev:adv-impl"]);
+    const evaluated = await s.evaluateClaim.execute({
+      claimEvaluationId: "clm:adv-impl-001",
+      idempotencyKey: "idem-clm-adv-impl-e",
+      actor: SYSTEM,
+      claimType: "securite",
+      claimStatement: "Critical claim",
+      criticality: "critical",
+      evaluationMethod: "human_review",
+      requiredEvidenceRefs: ["ev:adv-impl"],
+      reviewBundleId: "rb:adv-impl",
+      reviewBundleVersion: 2,
+    });
+    expect(evaluated.ok).toBe(true);
+    if (!evaluated.ok) return;
+    expect(evaluated.claimEvaluation.status).toBe("evaluating");
+    const claimConfirmed = await s.confirmClaimEvaluation.execute({
+      claimEvaluationId: "clm:adv-impl-001",
+      idempotencyKey: "idem-clm-adv-impl-c",
+      actor: REVIEWER,
+      expectedVersion: 1,
+    });
+    expect(claimConfirmed.ok).toBe(true);
+    if (!claimConfirmed.ok) return;
+
+    const proposed = await s.proposeMaturity.execute({
+      maturityAssessmentId: "mat:adv-impl",
+      idempotencyKey: "idem-mat-adv-impl-p",
+      actor: SYSTEM,
+      projectId: "prj:campus360-oa",
+      subjectRef: "prj:campus360-oa",
+      requestedLevel: "IMPLEMENTED",
+      claimBindings: [
+        {
+          claimEvaluationId: "clm:adv-impl-001",
+          claimEvaluationVersion: claimConfirmed.claimEvaluation.version,
+        },
+      ],
+    });
+    expect(proposed.ok).toBe(true);
+    if (!proposed.ok) return;
+    expect(proposed.maturityAssessment.proposedLevel).toBe("IMPLEMENTED");
+
+    const confirmed = await s.confirmMaturity.execute({
+      maturityAssessmentId: "mat:adv-impl",
+      idempotencyKey: "idem-mat-adv-impl-c",
+      actor: REVIEWER,
+      expectedVersion: 1,
+    });
+    expect(confirmed.ok).toBe(false);
+    if (confirmed.ok) return;
+    expect(confirmed.error.detailCode).toBe("MATURITY_AUTHORITY_FORBIDDEN");
+  });
+
+  it("defensive copies on maturity get", async () => {
+    const s = buildServices();
+    const claim = await seedPassClaim(
+      s,
+      "clm:adv-clone-001",
+      "ev:adv-clone",
+      "rb:adv-clone",
+    );
+    await s.proposeMaturity.execute({
+      maturityAssessmentId: "mat:adv-clone",
+      idempotencyKey: "idem-mat-adv-clone",
+      actor: SYSTEM,
+      projectId: "prj:campus360-oa",
+      subjectRef: "prj:campus360-oa",
+      requestedLevel: "VALIDATED",
+      claimBindings: [
+        {
+          claimEvaluationId: "clm:adv-clone-001",
+          claimEvaluationVersion: claim!.version,
+        },
+      ],
+    });
+    const got = await s.maturityAssessmentRepository.findById("mat:adv-clone");
+    expect(got).toBeTruthy();
+    if (!got) return;
+    got.status = "confirmed";
+    got.claimBindings[0]!.eligibleForPositive = false;
+    const again = await s.maturityAssessmentRepository.findById("mat:adv-clone");
+    expect(again?.status).toBe("proposed");
+    expect(again?.claimBindings[0]?.eligibleForPositive).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentDomain.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentDomain.test.ts
index ad47b79..1087d9e 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentDomain.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentDomain.test.ts
@@ -121,11 +121,25 @@ describe("T-A6-D4 maturity domain", () => {
       bindings: [eligible],
       blockingReservationRefs: [],
     });
+    expect(calc.supportedLevel).toBe("MODELED");
     expect(calc.proposedLevel).toBe("MODELED");
     expect(calc.gaps.some((g) => g.code === "requested_level_unsupported")).toBe(
       true,
     );
 
+    const none = calculateMaturityLevel({
+      requestedLevel: "DOCUMENTED",
+      bindings: [
+        assessClaimEligibility({
+          claim: baseClaim({ status: "waived" }),
+          expectedVersion: 1,
+          isSuperseded: false,
+        }),
+      ],
+      blockingReservationRefs: [],
+    });
+    expect(none.supportedLevel).toBeNull();
+
     const blocked = calculateMaturityLevel({
       requestedLevel: "MODELED",
       bindings: [eligible],
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts
index 0bbf775..f91b719 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts
@@ -189,7 +189,7 @@ describe("T-A6-D4 ProposeMaturity", () => {
     expect(badVer.error.detailCode).toBe("MATURITY_CLAIM_VERSION_MISMATCH");
   });
 
-  it("does not promote from waived or disputed claims", async () => {
+  it("refuses propose when waived/disputed only (no eligible PASS)", async () => {
     const s = buildServices();
     await freezeBundle(s, "rb:mat-waive", ["ev:mat-waive"]);
     s.fakeClaimAuthority.grant({
@@ -229,15 +229,9 @@ describe("T-A6-D4 ProposeMaturity", () => {
         },
       ],
     });
-    expect(proposed.ok).toBe(true);
-    if (!proposed.ok) return;
-    expect(proposed.maturityAssessment.proposedLevel).toBe("DOCUMENTED");
-    expect(
-      proposed.maturityAssessment.claimBindings[0]?.eligibleForPositive,
-    ).toBe(false);
-    expect(proposed.maturityAssessment.gaps?.some((g) => g.code === "claim_waived")).toBe(
-      true,
-    );
+    expect(proposed.ok).toBe(false);
+    if (proposed.ok) return;
+    expect(proposed.error.detailCode).toBe("MATURITY_CLAIM_NOT_ELIGIBLE");
   });
 
   it("blocks proposal when HARD reservation present", async () => {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmMaturity.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmMaturity.ts
index 16a79d4..2cdd971 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmMaturity.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/confirmMaturity.ts
@@ -1,7 +1,8 @@
 /**
  * ConfirmMaturity — human confirmation of proposed maturity.
- * System/agent forbidden. ADOPTED / structural levels require Morris.
+ * System/agent forbidden. ADOPTED / IMPLEMENTED require Morris.
  * HARD blockingReservationRefs forbid confirm. autoPromoted remains false.
+ * Re-assesses ClaimEvaluation bindings at exact versions before confirm (fail-closed).
  * Never launches D5 / Decision / executionAuthority.
  */
 import type { ClockPort } from "@/lib/oa/doctrine";
@@ -21,6 +22,7 @@ import type {
 } from "../domain/maturityAssessmentTypes";
 import { containsForbiddenSecret } from "../domain/invariants";
 import type { ClaimAuthorityPort } from "../ports/claimAuthorityPort";
+import type { ClaimEvaluationReaderPort } from "../ports/claimEvaluationReader";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
 import type { IdGeneratorPort } from "../ports/idGenerator";
 import type { MaturityAssessmentRepositoryPort } from "../ports/maturityAssessmentRepository";
@@ -29,12 +31,17 @@ import {
   fingerprintCommand,
   registerFingerprintBody,
 } from "./evidenceSupport";
+import {
+  calculateMaturityLevel,
+  reassessStoredBindings,
+} from "./maturityCalculation";
 
 const MATURITY_AUTHORITY_SCOPE = "oa.maturity_assessment";
 
 export class ConfirmMaturity {
   constructor(
     private readonly repo: MaturityAssessmentRepositoryPort,
+    private readonly claims: ClaimEvaluationReaderPort,
     private readonly authority: ClaimAuthorityPort,
     private readonly clock: ClockPort,
     private readonly audit: EvidenceAuditPort,
@@ -214,6 +221,91 @@ export class ConfirmMaturity {
         }
       }
 
+      // Re-assess exact ClaimEvaluation bindings before PASS confirm (fail-closed).
+      const freshBindings = await reassessStoredBindings({
+        bindings: current.claimBindings,
+        claims: this.claims,
+      });
+      const missing = freshBindings.find(
+        (b) => b.ineligibilityCode === "missing",
+      );
+      if (missing) {
+        return fail("MATURITY_CLAIM_NOT_FOUND", "claim_missing_at_confirm", {
+          claimEvaluationId: missing.claimEvaluationId,
+          maturityAssessment: current,
+        });
+      }
+      const versionMismatch = freshBindings.find(
+        (b) => b.ineligibilityCode === "version_mismatch",
+      );
+      if (versionMismatch) {
+        return fail(
+          "MATURITY_CLAIM_VERSION_MISMATCH",
+          "claim_version_mismatch_at_confirm",
+          {
+            claimEvaluationId: versionMismatch.claimEvaluationId,
+            maturityAssessment: current,
+          },
+        );
+      }
+      const disputed = freshBindings.find(
+        (b) => b.ineligibilityCode === "disputed",
+      );
+      if (disputed) {
+        return fail("MATURITY_CLAIM_DISPUTED", "claim_disputed_at_confirm", {
+          claimEvaluationId: disputed.claimEvaluationId,
+          maturityAssessment: current,
+        });
+      }
+      const waived = freshBindings.find(
+        (b) => b.ineligibilityCode === "waived",
+      );
+      if (waived) {
+        return fail("MATURITY_CLAIM_WAIVED", "claim_waived_at_confirm", {
+          claimEvaluationId: waived.claimEvaluationId,
+          maturityAssessment: current,
+        });
+      }
+      const superseded = freshBindings.find(
+        (b) => b.ineligibilityCode === "superseded",
+      );
+      if (superseded) {
+        return fail(
+          "MATURITY_CLAIM_SUPERSEDED",
+          "claim_superseded_at_confirm",
+          {
+            claimEvaluationId: superseded.claimEvaluationId,
+            maturityAssessment: current,
+          },
+        );
+      }
+
+      const calc = calculateMaturityLevel({
+        requestedLevel: current.proposedLevel,
+        bindings: freshBindings,
+        blockingReservationRefs: current.blockingReservationRefs,
+        dimensions: current.dimensions?.map((d) => ({
+          dimensionId: d.dimensionId,
+          proposedLevel: d.proposedLevel,
+        })),
+      });
+      if (calc.supportedLevel === null || calc.status === "blocked") {
+        return fail(
+          calc.status === "blocked"
+            ? "MATURITY_BLOCKED_BY_RESERVATION"
+            : "MATURITY_CLAIM_NOT_ELIGIBLE",
+          "confirm_reassess_unsupported",
+          { maturityAssessment: current },
+        );
+      }
+      if (levelRank(calc.proposedLevel) < levelRank(current.proposedLevel)) {
+        return fail(
+          "MATURITY_CLAIM_NOT_ELIGIBLE",
+          "confirm_level_regressed_after_reassess",
+          { maturityAssessment: current },
+        );
+      }
+
       const requireMorris =
         current.proposedLevel === "ADOPTED" ||
         current.proposedLevel === "IMPLEMENTED";
@@ -246,6 +338,10 @@ export class ConfirmMaturity {
         confirmedLevel: current.proposedLevel,
         confirmedBy: { ...request.actor },
         confirmedAt: timestamp,
+        claimBindings: structuredClone(freshBindings),
+        criteriaResults: structuredClone(calc.criteriaResults),
+        gaps: structuredClone(calc.gaps),
+        calculatedAt: timestamp,
         dimensions: current.dimensions?.map((d) => ({
           ...d,
           confirmedLevel: d.proposedLevel,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/maturityCalculation.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/maturityCalculation.ts
index e6c11f5..f5d19e6 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/maturityCalculation.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/maturityCalculation.ts
@@ -90,6 +90,8 @@ export function assessClaimEligibility(
 }
 
 export type MaturityCalculation = {
+  /** Highest modeled level supported by eligible claims; null if none eligible. */
+  supportedLevel: MaturityLevel | null;
   proposedLevel: MaturityLevel;
   status: "proposed" | "blocked";
   criteriaResults: MaturityCriterionResult[];
@@ -229,7 +231,8 @@ export function calculateMaturityLevel(input: {
     },
   ];
 
-  let supported: MaturityLevel = "DOCUMENTED";
+  // Fail-closed: no eligible PASS ⇒ no supported modeled level (DOCUMENTED requires ≥1).
+  let supported: MaturityLevel | null = null;
   if (hasEligible) supported = "DOCUMENTED";
   if (hasEligible && hasConfirmed) supported = "VALIDATED";
   if (hasEligible && hasConfirmed && hasModeledSupport) supported = "MODELED";
@@ -239,9 +242,42 @@ export function calculateMaturityLevel(input: {
   if (hasEligible && hasConfirmed && hasAdoptedSupport) {
     supported = "ADOPTED";
   }
-  if (!hasEligible) {
-    // Fail-closed floor: still DOCUMENTED proposal with gaps — never invent higher.
-    supported = "DOCUMENTED";
+
+  if (supported === null) {
+    gaps.push({
+      code: "insufficient_for_level",
+      level: input.requestedLevel,
+    });
+    // proposedLevel kept as requested for gap context only — callers must not persist
+    // a positive maturity without eligible claims (Propose/Confirm fail-closed).
+    const placeholder = minLevel(input.requestedLevel, "DOCUMENTED");
+    if (hardBlocked) {
+      gaps.push({
+        code: "hard_reserve_blocks_level",
+        level: placeholder,
+      });
+      return {
+        supportedLevel: null,
+        proposedLevel: placeholder,
+        status: "blocked",
+        criteriaResults,
+        gaps,
+        dimensions: [
+          {
+            dimensionId: "default",
+            proposedLevel: placeholder,
+            blocked: true,
+          },
+        ],
+      };
+    }
+    return {
+      supportedLevel: null,
+      proposedLevel: placeholder,
+      status: "proposed",
+      criteriaResults,
+      gaps,
+    };
   }
 
   let proposedLevel = minLevel(input.requestedLevel, supported);
@@ -268,6 +304,7 @@ export function calculateMaturityLevel(input: {
       blocked: true,
     }));
     return {
+      supportedLevel: supported,
       proposedLevel,
       status: "blocked",
       criteriaResults,
@@ -290,6 +327,7 @@ export function calculateMaturityLevel(input: {
   }));
 
   return {
+    supportedLevel: supported,
     proposedLevel,
     status: "proposed",
     criteriaResults,
@@ -298,6 +336,40 @@ export function calculateMaturityLevel(input: {
   };
 }
 
+/** Re-read exact ClaimEvaluation bindings (Confirm fail-closed). Never mutates claims. */
+export async function reassessStoredBindings(input: {
+  bindings: MaturityClaimBinding[];
+  claims: {
+    findById(id: string): Promise<ClaimEvaluation | null>;
+    isSuperseded(id: string): Promise<boolean>;
+  };
+}): Promise<MaturityClaimBinding[]> {
+  const out: MaturityClaimBinding[] = [];
+  for (const bound of input.bindings) {
+    const claim = await input.claims.findById(bound.claimEvaluationId);
+    if (!claim) {
+      out.push(
+        missingClaimBinding(
+          bound.claimEvaluationId,
+          bound.claimEvaluationVersion,
+        ),
+      );
+      continue;
+    }
+    const isSuperseded = await input.claims.isSuperseded(
+      bound.claimEvaluationId,
+    );
+    out.push(
+      assessClaimEligibility({
+        claim,
+        expectedVersion: bound.claimEvaluationVersion,
+        isSuperseded,
+      }),
+    );
+  }
+  return out;
+}
+
 export function missingClaimBinding(
   claimEvaluationId: string,
   expectedVersion: number,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/proposeMaturity.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/proposeMaturity.ts
index 3e7dc0d..61846a2 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/proposeMaturity.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/proposeMaturity.ts
@@ -242,6 +242,12 @@ export class ProposeMaturity {
         dimensions: request.dimensions,
       });
 
+      // DOCUMENTED requires ≥1 eligible PASS — never propose a positive level without support
+      // unless HARD reserves force an explicit blocked assessment.
+      if (calc.supportedLevel === null && calc.status !== "blocked") {
+        return fail("MATURITY_CLAIM_NOT_ELIGIBLE", "no_eligible_claims_for_propose");
+      }
+
       const assessment: MaturityAssessment = {
         schemaVersion: "0.2.0-oa",
         maturityAssessmentId: request.maturityAssessmentId,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 222f22e..63898ae 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -78,6 +78,7 @@ export {
   assessClaimEligibility,
   calculateMaturityLevel,
   missingClaimBinding,
+  reassessStoredBindings,
 } from "./application/maturityCalculation";
 
 export { MemoryEvidenceStore } from "./infrastructure/memoryEvidenceStore";
@@ -363,6 +364,7 @@ export function createInMemoryEvidenceReviewServices(
     ),
     confirmMaturity: new ConfirmMaturity(
       maturityAssessmentRepository,
+      claimEvaluationReader,
       claimAuthority,
       clock,
       audit,

```

---

## 7. Synthèse validation

| Zone | Résultat |
|------|----------|
| Propose / Confirm / Downgrade | PASS |
| Confirm re-assess ClaimEvaluation | PASS après F-A6-D4-01 |
| DOCUMENTED sans eligible refusé | PASS après F-A6-D4-02 |
| disputed/waived/superseded exclus | PASS |
| Morris IMPLEMENTED/ADOPTED | PASS |
| Downgrade explicite atomique | PASS |
| D5 / Decision / executionAuthority | absents |

---

## 8. Tests

| Suite | Commande | Tests | Résultat |
|-------|----------|-------|----------|
| D1–D4 | `npm test -- __tests__/oa/evidence-review` | **122** | PASS |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | PASS |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | PASS |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | PASS |
| Modeled | `node --test …maturity-governance.test.mjs` | 27 | PASS |
| tsc / lint / build / diff-check | — | — | PASS |

119 → **122** (+3 adversariaux).

---

## 9. Findings / corrections

Critical: aucun ouvert.  
Major corrigés: **F-A6-D4-01**, **F-A6-D4-02**.  
Observations: O-D4-1..4.

Corrections: commit `5bb399d` · retests PASS.

---

## 10. Réserves

B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 **OPEN**  
C1–C4 **NOT VALIDATED**

---

## 11. Commits locaux

1. `5bb399d` — fix(sfia-studio): correct T-A6 D4 validation findings
2. `5e666d4` — docs(sfia-studio): validate T-A6 D4 maturity assessment
3. `07a2e1f` — docs(sfia-studio): record T-A6 D4 validation HEAD
4. `fb5e11c` — docs(sfia-studio): point D4 validation HEAD final at record commit

---

## 12. Gate suivant (NOT consumed)

`GO IMPLEMENT T-A6 DELIVERY D5 — SFIA STUDIO V3-NATIVE — OPTION A`

---

## 13. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D4 MATURITY ASSESSMENT VALIDATED AFTER CORRECTION — D5 REQUIRES MORRIS GO`
