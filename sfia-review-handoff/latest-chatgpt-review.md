# ChatGPT Review Pack — SFIA Studio Native Assistant OpenAI Technical Implementation Backlog

## 1. Timestamp local et UTC

| Horodatage | Valeur |
|---|---|
| **Consommation Morris** | 2026-08-05 13:53 CEST / 11:53 UTC |
| **Truth Cursor initial** | 2026-08-05 14:08:08 CEST / 12:08:08 UTC |
| **Final project truth** | voir §50 |

---

## 2. GO Morris exact

```text
GO BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — DERIVE TECHNICAL IMPLEMENTATION BACKLOG FROM APPLIED ARCHITECTURE A2 AND ADR DECISIONS
```

BACKLOG-GATE=CONSUMED-BY-MORRIS · Delivery NOT-CONSUMED.

---

## 3. Cycle / profil / typologie

Backlog / user stories · Standard · EVOL/DOC · Documentation-only

---

## 4. Main

`8dc54db0069eed78a8d8930cc2b035450ab56ad1`

---

## 5. Branche / worktree

`backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog` · locale · non poussée

---

## 6. Handoff entrant

tip `79767e64e3e97ffeaa2e87f7dc49bec011b5fb17` · blob `25763db03292f1233912bf6952556ad3efa5f08b`

---

## 7. Template canonique

Lu depuis Git main (cycle).

---

## 8. CKC recherché

Contrat détaillé Backlog / user stories : **non trouvé**.

---

## 9. Fallback CKC

`02-fifteen-cycles-synthetic-map.md` + `sfia-v2.5-project-cycles-method-candidate.md` §4.5 · guidance only.

---

## 10. Sources consultées

Git main · docs 90–102 · handoff · package.json/README · GO backlog.

---

## 11. Local Git Truth initial complet

```text
=== LOCAL GIT TRUTH INITIAL — TECHNICAL BACKLOG ===
2026-08-05 14:08:08 CEST +0200
2026-08-05 12:08:08 UTC
TOPLEVEL=/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
BRANCH=record/sfia-studio-assistant-sfia-native-openai-technical-architecture-decisions-applied
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
UPSTREAM=none
ORIGIN_MAIN=8dc54db0069eed78a8d8930cc2b035450ab56ad1
MERGE_BASE=8dc54db0069eed78a8d8930cc2b035450ab56ad1
AHEAD=0
BEHIND=0
ORIGIN_HANDOFF=79767e64e3e97ffeaa2e87f7dc49bec011b5fb17
--- status --short ---
?? .tmp-sfia-review/
?? projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
?? projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
?? projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
?? projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
?? projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
?? projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
?? projects/sfia-studio/97-assistant-sfia-native-openai-ux-ui-decisions-applied.md
?? projects/sfia-studio/98-assistant-sfia-native-openai-technical-prerequisites-decision-pack.md
?? projects/sfia-studio/99-assistant-sfia-native-openai-technical-prerequisites-decisions-applied.md
?? projects/sfia-studio/app/.tmp-sfia-review/
--- diff name-status ---
--- cached ---
--- diff-check ---
DIFF_CHECK_EXIT:0
--- worktree list --porcelain ---
worktree /Users/morris/Projects/sfia-workspace
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/delivery/eventops-poc-visible-slice-01

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-a5-2-framing
HEAD bd3608c6220e820cc3fa017422a7564a565a1296
branch refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe
HEAD f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
branch refs/heads/qa/sfia-studio-m1-bypass-probe

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
HEAD b502c0069f836a729090bdc187dd98a0c26591ca
branch refs/heads/qa/sfia-studio-m1-bypass-probe-revert

worktree /Users/morris/Projects/sfia-workspace-m1-capitalization
HEAD fa0eebe00ce3b765a8a486aa660dddfab40123a0
branch refs/heads/docs/sfia-studio-m1-capitalization-rex

worktree /Users/morris/Projects/sfia-workspace-option-a-after-t-a6
HEAD aef7fd6d5a678857cf36e490f1550866d47c8887
branch refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance
HEAD 2f9560534e285c5b8105f81dca39c5252667860c
branch refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs
HEAD a42a85c0c0b3e146e59f82ea753329ed9253f278
branch refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge

worktree /Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check
HEAD 9f03916243c470587f6958e058fd58909e5bd75a
branch refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher

worktree /Users/morris/Projects/sfia-workspace-shared-platform-delivery
HEAD 08c282abafd97685bcc0b7e525ec96e6721ec589
branch refs/heads/delivery/sfia-studio-shared-technical-platform

worktree /Users/morris/Projects/sfia-workspace-t-a6-post-merge
HEAD 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
branch refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration
HEAD 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge
HEAD 960c90b32b2c1c5701a668b0ebc70fdd847c681b
branch refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status

worktree /Users/morris/Projects/sfia-workspace-t-a7-framing
HEAD b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
HEAD 08d6cd0dd1503a7f261bf1fe527dba782d8f27ed
detached

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
HEAD 8dc54db0069eed78a8d8930cc2b035450ab56ad1
branch refs/heads/record/sfia-studio-assistant-sfia-native-openai-technical-architecture-decisions-applied

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/main-post-merge
HEAD 52c1d753ee890daf04a80ba37b11c6bf077dc307
branch refs/heads/backlog/sfia-studio-v3-1-d2-d-integration-foundation

worktree /Users/morris/Projects/sfia-workspace-t-a7-next-decision
HEAD 33ea3e87facc8c99c9c5619d6d2424030d3918a2
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step

worktree /Users/morris/Projects/sfia-workspace-t-a7-technical-readiness
HEAD b6a19335f5116940175f5986492e3693722563bc
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions
HEAD f89ba5fb6cfca4e3de97667d944569a20266a8aa
branch refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope
HEAD 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope

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
HEAD 0b696ed970823aa75d013336e44e72de08f2ac57
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
HEAD 79767e64e3e97ffeaa2e87f7dc49bec011b5fb17
branch refs/heads/sfia/review-handoff
```

---

## 12. Documents 100, 101 et 102 hashes/lignes

| Doc | SHA-256 | Lignes |
|---|---|---|
| 100 | `9244ec46bc7b0ea212c03f1e59f05f80521e87c6a8e27c07de801e10b8e2cc20` | 1432 |
| 101 | `698d1e0388cbf2f93b7ae0c983ee66d84a50e4143fd79b4ec92f23ea9918d114` | 1164 |
| 102 | `b5e06cd6cb0f74c3278afc041f22a27bd39f5bcbac54fa851a952b4c810577b1` | 774 |

---

## 13. EMBED_MATCH document 102

**PASS**

---

## 14. Document 103 libre

**PASS** — créé sans collision.

---

## 15. État applicatif constaté

Next.js 15 · React 19 · TypeScript · AJV `^6.15.0` · openai `^6.48.0` · fixtures locales · README : aucun backend · pas de persistance durable démontrée · **non modifié**.

---

## 16. Décisions Architecture préservées

VALIDATION=B · A2 · dix ADR · normalisations · réserves KEEP-OPEN · différés · non-sélections.

---

## 17. Backlog Gate consommée

**PASS** — CONSUMED-BY-MORRIS

---

## 18. Delivery Gate non consommée

**PASS** — NOT-CONSUMED

---

## 19. Épics

EPIC-TB-00 … EPIC-TB-06 (7)

---

## 20. Liste complète des items

TB-00-01, TB-00-02, TB-00-03, TB-00-04, TB-00-05, TB-00-06, TB-01-01, TB-01-02, TB-01-03, TB-01-04, TB-01-05, TB-01-06, TB-02-01, TB-02-02, TB-02-03, TB-02-04, TB-02-05, TB-03-01, TB-03-02, TB-03-03, TB-03-04, TB-03-05, TB-04-01, TB-04-02, TB-04-03, TB-04-04, TB-05-01, TB-05-02, TB-05-03, TB-06-01, TB-06-02, TB-06-03, TB-06-04

---

## 21. Nombre d’items

**33** (cible 24–36)

---

## 22. Preuve de granularité

Chaque item = un résultat vérifiable · types séparés · pas de fourre-tout backend · DECISION-PREP séparés des FEATURE-TECH/QA · AC ≥ 3 · Delivery NOT AUTHORIZED sur chaque item.

---

## 23–25. Critères, preuves, priorités

Voir document 103 §17 · priorités P0–P3 toutes **CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED**.

---

## 26. Dépendances

Voir §20–21 du document 103 · chemin critique auth+store+AJV → persistence → provider → authority → lifecycle → QA.

---

## 27. Lots candidats

LOT-IP-0 (DOC only) · LOT-D1…D5 **NOT AUTHORIZED** · aucun lot sélectionné.

---

## 28. Matrice ADR → backlog

Couverture COMPLETE — voir document 103 §18.

---

## 29. Matrice des 21 impacts

Tous COVERED — voir annexe document 103.

---

## 30. Matrice réserves → backlog

KEEP-OPEN — voir §19 document 103.

---

## 31. Items bloqués par décisions

TB-01-* store · TB-02-03 AJV · TB-03-01 auth · TB-04-02/TB-06-02 TTL+store · TB-06-04 hard cap/TTL — voir §24.

---

## 32. Non-sélections

Store/cloud/ORM/IAM/observability/model/TTL/hard cap/SLO/IaC — NOT SELECTED.

---

## 33–34. DoR / DoD

Candidates documentaires — document 103 §§13–14.

---

## 35. Critères de passage futur vers Delivery

Document 103 §26 · ne consomment pas Delivery.

---

## 36. Document 103 créé

`projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md`

---

## 37. Contenu intégral du document 103

`````markdown
# SFIA Studio — Assistant SFIA natif OpenAI — Technical Implementation Backlog

## 1. Statut

**TECHNICAL IMPLEMENTATION BACKLOG DERIVED FROM APPLIED A2 ARCHITECTURE —**
**BACKLOG GATE CONSUMED BY MORRIS —**
**PRIORITIES AND LOTS ARE CANDIDATE UNTIL MORRIS VALIDATION —**
**TECHNOLOGY SELECTIONS REMAIN OPEN —**
**ALL RESERVES REMAIN OPEN —**
**DELIVERY GATE NOT CONSUMED —**
**NO IMPLEMENTATION AUTHORIZED**

| Champ | Valeur |
|---|---|
| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
| **Items** | 33 |
| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
| **Documents 90–102** | Inchangés |
| **Delivery** | NOT-CONSUMED |

---

## 2. GO Morris

```text
GO BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — DERIVE TECHNICAL IMPLEMENTATION BACKLOG FROM APPLIED ARCHITECTURE A2 AND ADR DECISIONS
```

**Effet :** `BACKLOG-GATE=CONSUMED-BY-MORRIS`

Autorise : création backlog · dérivation stories · séquence candidate · préparation décisions/lots.

N’autorise pas : Delivery · implémentation · sélection store/plateforme · dépendance · commit/push projet · PR/merge.

---

## 3. Autorité et timestamp

| Champ | Valeur |
|---|---|
| **Autorité** | Morris |
| **Consommation** | 2026-08-05 13:53 CEST (+0200) / 11:53 UTC |
| **Rédaction Cursor** | 2026-08-05 14:08 CEST (+0200) / 12:08 UTC |

---

## 4. Cycle / profil / typologie

Backlog / user stories — dérivation backlog technique · Standard · EVOL/DOC · Documentation-only · Doctrine SFIA v2.6

---

## 5. Sources et hiérarchie

1. Git main ; 2. GO courant ; 3. décisions 93/97/99/102 ; 4. architectures 91/94–95/100 ; 5. framing 90 ; 6. packs 92/96/98/101 ; 7. CKC synthétique / §4.5 guidance only ; 8. hypothèses explicites.

**CKC détaillé Backlog :** non trouvé · fallback carte synthétique + §4.5 · aucune autorité d’exécution.

---

## 6. Git et handoff

| Champ | Valeur |
|---|---|
| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
| **Branche** | `backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog` |
| **Handoff entrant** | tip `79767e64e3e97ffeaa2e87f7dc49bec011b5fb17` · blob `25763db03292f1233912bf6952556ad3efa5f08b` |

---

## 7. Documents entrants et hashes

| Doc | SHA-256 | Lignes |
|---|---|---|
| 100 | `9244ec46bc7b0ea212c03f1e59f05f80521e87c6a8e27c07de801e10b8e2cc20` | 1432 |
| 101 | `698d1e0388cbf2f93b7ae0c983ee66d84a50e4143fd79b4ec92f23ea9918d114` | 1164 |
| 102 | `b5e06cd6cb0f74c3278afc041f22a27bd39f5bcbac54fa851a952b4c810577b1` | 774 |

EMBED_MATCH document 102 : **PASS**.

---

## 8. Portée du backlog

Transformer le document 102 en épics/items testables · priorités **candidates** · lots **candidates** · gates humaines · **sans** code, migration exécutable, sélection techno, Delivery.

---

## 9. Décisions appliquées préservées

VALIDATION=B · BUNDLE=A2 · PROFILE=EPHEMERAL_SERVERLESS_OR_MULTI_INSTANCE · CONSTRAINTS=`external-durable-store;explicit-concurrency;no-embedded` · TOPO=A · PERSIST=B · SERVER=C · PURGE=C · AUDIT=B · STREAM=A · VALIDATE-LIB=A · SECRETS=A · ADMIN-AUTHZ=B · HEALTH=C · NORMALIZED SETS acceptés.

Alternatives A1/B1/C **non** rouvertes.

---

## 10. Principes de découpage

Une story = un résultat vérifiable · dépendances visibles · distinguer DECISION-PREP / ENABLER / FEATURE-TECH / NFR / QA / OPS / DOC · priorité candidate ≠ décision Morris · pas de fourre-tout · PASS/FAIL/BLOCKED possible.

---

## 11. Types d’items

DECISION-PREP · ENABLER · FEATURE-TECH · NFR · QA · OPS · DOC — définis dans le GO ; utilisés ci-dessous.

---

## 12. Règles de priorité candidate

P0 fondations/décisions · P1 capacité FPI · P2 durcissement pré-pilote · P3 post-FPI/non bloquant · toutes **CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED**.

---

## 13. Definition of Ready candidate

Résultat vérifiable · source · périmètre · dépendances · techno sélectionnée ou non nécessaire · réserves · AC · preuves · fichiers candidats · gate humaine. **Pas** Ready for Delivery si décision structurante ouverte.

---

## 14. Definition of Done candidate

Périmètre · tests nominaux/négatifs · typecheck/lint/tests · preuve · pas de fuite secret · pas de régression hors scope · docs · réserves tracées · validation indépendante · handoff. **Candidate** — ne valide aucun item actuel.

---

## 15. Architecture de backlog

```text
EPIC-TB-00 Decision Prep
    → EPIC-TB-01 Persistence A2
        → EPIC-TB-02 Provider pipeline
            → EPIC-TB-03 Authority & audit
                → EPIC-TB-04 Lifecycle / FinOps
                    → EPIC-TB-05 Health / observability
                        → EPIC-TB-06 QA / pilot readiness
```

État applicatif constaté (main, non modifié) : Next.js 15 · React 19 · TypeScript · AJV présent · OpenAI SDK présent · fixtures locales · README : aucun backend réel · pas de persistance durable démontrée.

---

## 16. Épics

### EPIC-TB-00 — Implementation preparation and decisions
Préparer décisions ouvertes avant implémentation (auth, AJV, store, data-access, plateforme, secrets/config).

### EPIC-TB-01 — External durable Project persistence
Port externe · modèle · isolation · transactions · idempotence · migration/backup.

### EPIC-TB-02 — OpenAI provider and response pipeline
Port OpenAI · server-only · N1 stream · N2/N3 AJV · erreurs · metering/soft cap.

### EPIC-TB-03 — Authority, administration and audit
Rôles · AuthorityGate · admin config · audit provider/métier.

### EPIC-TB-04 — Lifecycle, purge, privacy and FinOps
TTL config · purge hybride · rétention/redaction · hard cap Decision Pack.

### EPIC-TB-05 — Health, resilience and observability
Liveness/readiness · modes dégradé/fail-closed · logs/métriques.

### EPIC-TB-06 — QA and pilot readiness
Tests A2 · purge/backup · governance · readiness pilote.

---

## 17. Backlog détaillé

Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).

#### TB-00-01 — Inventaire du mécanisme d’authentification existant exploitable

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-01` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | aucune |
| **Gate Morris** | décision nécessaire si aucun mécanisme exploitable |
| **Source** | doc 102 ADR-ASST-ADMIN-AUTHZ-01=B · package/README main · absence auth documentée README P0 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie IAM |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Déterminer si un mécanisme d’auth existant dans le repo peut être étendu pour Admin/Morris sans nouveau sous-système IAM.

**Critères d’acceptation :**
  - Un inventaire écrit liste les points d’auth/session/middleware existants ou constate l’absence.
  - Le constat distingue « exploitable pour extension Admin/Morris » vs « arbitrage dédié requis ».
  - Aucune technologie IAM n’est sélectionnée ; aucun code auth n’est ajouté.

**Preuves attendues :**
  - document d’inventaire / section Decision Prep
  - références de chemins Git main
  - anti-claim : pas de vendor IAM

**Hors périmètre :** code auth, IAM vendor, middleware production

#### TB-00-02 — Vérification d’adéquation AJV pour schémas N2/N3

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-02` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | aucune |
| **Gate Morris** | arbitrage Morris si incompatible |
| **Source** | doc 102 ADR-ASST-VALIDATE-LIB-01=A · package.json ajv · AF-02 · R-TECH-AF02-BOUNDARY-01 |
| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Confirmer que AJV déjà présent convient aux sorties structurées N2/N3 avant toute story d’implémentation validation.

**Critères d’acceptation :**
  - Un rapport d’adéquation décrit version AJV, capacités TypeScript et limites pour schémas N2/N3.
  - Verdict explicite : FIT / FIT-WITH-CONSTRAINTS / NOT-FIT.
  - Si NOT-FIT, stop condition documentée ; aucun remplacement silencieux de bibliothèque.

**Preuves attendues :**
  - rapport AJV fit
  - extrait package.json
  - lien R-TECH-AF02-BOUNDARY-01

**Hors périmètre :** ajout dépendance alternative, changement package.json

#### TB-00-03 — Decision Pack options de store externe durable (A2)

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-03` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | aucune |
| **Gate Morris** | décision Morris store requise avant LOT-D1 |
| **Source** | doc 102 ARCH-BUNDLE=A2 · ADR-ASST-PERSIST-01=B · contraintes external-durable-store;no-embedded |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store, fournisseur store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Préparer un Decision Pack d’options de store externe compatible multi-instance / serverless sans sélectionner le fournisseur.

**Critères d’acceptation :**
  - Au moins deux options comparables de store externe sont documentées avec trade-offs A2.
  - Chaque option couvre concurrence, backup/restore, migration, coût et réversibilité sans inventer de tarif.
  - Aucune option embarquée (SQLite/fs local durable) n’est recommandée comme store opérationnel.

**Preuves attendues :**
  - Decision Pack store candidat
  - matrice trade-offs
  - anti-claims no-embedded

**Hors périmètre :** choix Postgres/Supabase/Neon/etc., code, IaC

#### TB-00-04 — Decision Pack stratégie d’accès données et migrations

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-04` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | TB-00-03 |
| **Gate Morris** | décision Morris data-access/migration |
| **Source** | doc 102 conséquences A2 · impacts migrations · ADR-ASST-PERSIST-01=B |
| **Réserves liées** | aucune |
| **Non-sélections liées** | ORM, outil de migration |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Préparer les options d’accès données / migrations compatibles A2 sans sélectionner ORM ni outil.

**Critères d’acceptation :**
  - Options d’accès données et de migration sont comparées (sans choisir ORM/outil).
  - Les exigences concurrence, unicité et idempotence sont listées comme contraintes d’implémentation futures.
  - Le pack indique explicitement BLOCKED BY FUTURE MORRIS DECISION tant que non décidé.

**Preuves attendues :**
  - Decision Pack data-access/migration
  - dépendances TB-00-03

**Hors périmètre :** sélection ORM, création migration exécutable

#### TB-00-05 — Decision Pack plateforme de déploiement compatible A2

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-05` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | TB-00-03 |
| **Gate Morris** | décision Morris plateforme si lot Delivery la requiert |
| **Source** | doc 102 DEPLOYMENT-PROFILE · ARCH-BUNDLE=A2 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | plateforme cloud, hébergeur, région, nombre d’instances |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Comparer des profils de plateforme compatibles EPHEMERAL_SERVERLESS_OR_MULTI_INSTANCE sans sélectionner cloud/hébergeur.

**Critères d’acceptation :**
  - Options de plateforme sont évaluées contre volume durable externe, multi-instance et absence de persist locale.
  - Le pack n’impose ni région, ni nombre d’instances, ni fournisseur.
  - Incompatibilités A1 (embedded) sont explicitement exclues.

**Preuves attendues :**
  - Decision Pack plateforme candidat
  - critères A2

**Hors périmètre :** choix AWS/Vercel/Azure, IaC, déploiement

#### TB-00-06 — Préparation secrets server-only et paramètres de configuration Admin

| Champ | Valeur |
|---|---|
| **ID** | `TB-00-06` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-00 |
| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | aucune |
| **Gate Morris** | aucune sélection ; fermeture réserves hors scope |
| **Source** | doc 102 ADR-ASST-SECRETS-01=A · ADMIN-AUTHZ=B · FPI-08/FPI-14 différés · R-TECH-TTL-01 · R-TECH-FINOPS-HARD-01 |
| **Réserves liées** | R-TECH-TTL-01, R-TECH-FINOPS-HARD-01 |
| **Non-sélections liées** | secret manager, modèle OpenAI, valeur TTL, hard cap FinOps |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Documenter la frontière secrets env server-only et le catalogue de paramètres Admin (modèle/TTL/soft cap) sans créer .env ni fixer TTL/hard cap.

**Critères d’acceptation :**
  - Catalogue des secrets server-only et interdits navigateur/logs est écrit.
  - Catalogue des paramètres Admin (modèle, TTL, soft cap) est listé sans valeur TTL ni hard cap.
  - Trajectoire secret manager marquée future ; aucun fichier .env créé.

**Preuves attendues :**
  - DOC paramètres/secrets
  - liens réserves TTL/FinOps

**Hors périmètre :** création .env, secret manager vendor, valeur TTL, hard cap

#### TB-01-01 — Port de persistance externe Project (abstraction)

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-01` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-03, TB-00-04 |
| **Gate Morris** | décision store + data-access |
| **Source** | doc 102 impact 1 · PERSIST=B · A2 no-embedded |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store, ORM |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Définir et implémenter ultérieurement le port d’accès store externe sans lier une technologie concrète dans ce backlog.

**Critères d’acceptation :**
  - Le port expose des opérations Project CRUD/query sans API embarquée filesystem.
  - Les tests du port utilisent un double ; aucun store réel n’est hardcodé dans l’interface.
  - Le redémarrage d’instance n’implique aucune perte d’état via le port (contrat documenté).

**Preuves attendues :**
  - contrat de port
  - tests double
  - anti-claim no-embedded

**Hors périmètre :** choix store, schéma SQL exécutable

#### TB-01-02 — Modèle logique de données Project

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-02` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01 |
| **Gate Morris** | décision store pour mapping physique |
| **Source** | doc 102 impact 2 · docs 91/93/100 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | schéma physique final |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Spécifier le modèle logique Project (entités, invariants) aligné AF/UX sans schéma physique final.

**Critères d’acceptation :**
  - Le modèle logique couvre Project et invariants d’isolation.
  - Aucun schéma physique final ni DDL n’est livré comme décision.
  - Traçabilité vers documents 91/93/100 est explicite.

**Preuves attendues :**
  - modèle logique documenté
  - matrice invariants

**Hors périmètre :** schéma physique final, migration appliquée

#### TB-01-03 — Isolation Project et contraintes d’unicité

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-03` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01, TB-01-02 |
| **Gate Morris** | décision store |
| **Source** | doc 102 impacts 2–3 · A2 explicit-concurrency |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Garantir l’isolation Project et les contraintes d’unicité dans le store externe sous concurrence.

**Critères d’acceptation :**
  - Deux Projects distincts ne partagent pas d’état durable.
  - Les contraintes d’unicité pertinentes échouent de façon déterministe sous collision.
  - Aucun store local embarqué n’est utilisé pour l’isolation.

**Preuves attendues :**
  - tests isolation
  - tests unicité

**Hors périmètre :** multi-tenancy cloud vendor

#### TB-01-04 — Transactions et concurrence explicite A2

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-04` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01, TB-01-03 |
| **Gate Morris** | décision store |
| **Source** | doc 102 impacts 3,16 · A2 explicit-concurrency |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Assurer transactions / coordination d’écriture compatibles multi-instance.

**Critères d’acceptation :**
  - Scénarios concurrent writers sont définis et ont un comportement attendu documenté.
  - Aucune hypothèse single-writer A1 n’est utilisée.
  - Échecs de concurrence sont observables et testables.

**Preuves attendues :**
  - spéc concurrency
  - tests concurrence (futurs TB-06-01)

**Hors périmètre :** verrouillage filesystem local

#### TB-01-05 — Idempotence des consommations N2/N3

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-05` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-04, TB-03-02 |
| **Gate Morris** | décision store |
| **Source** | doc 102 impact 4 · F-ARCH-01 · STREAM=A (N2/N3 non streamés) |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Rendre les écritures/consommations N2/N3 idempotentes sous retry et multi-instance.

**Critères d’acceptation :**
  - Un retry de la même consommation N2/N3 ne duplique pas l’effet métier.
  - Les clés d’idempotence sont serveur et auditables.
  - Le provider ne peut pas forcer une double consommation.

**Preuves attendues :**
  - tests idempotence
  - traces audit

**Hors périmètre :** bus événementiel, saga distribuée hors scope FPI

#### TB-01-06 — Fondation migrations, sauvegarde et restauration

| Champ | Valeur |
|---|---|
| **ID** | `TB-01-06` |
| **Type** | OPS |
| **Epic** | EPIC-TB-01 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-04, TB-01-02 |
| **Gate Morris** | décision migration tool + store |
| **Source** | doc 102 impacts 14–15 · PERSIST=B |
| **Réserves liées** | aucune |
| **Non-sélections liées** | outil de migration, technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Préparer fondations migration de schéma + backup/restore Project avant pilote.

**Critères d’acceptation :**
  - Une procédure backup/restore est documentée pour l’état Project durable.
  - Une stratégie de migration de schéma est définie sans outil imposé ici.
  - Un redémarrage d’instance après restore ne perd pas l’état restauré (critère de preuve).

**Preuves attendues :**
  - runbook backup/restore candidat
  - stratégie migration

**Hors périmètre :** IaC, exécution restore production

#### TB-02-01 — Port OpenAI minimal et configuration server-only

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-01` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-06 |
| **Gate Morris** | décision modèle OpenAI hors backlog courant |
| **Source** | doc 102 ADR-ASST-SECRETS-01=A · FPI-10-B · impact 12 · TOPO=A SERVER=C |
| **Réserves liées** | aucune |
| **Non-sélections liées** | modèle OpenAI, endpoint OpenAI |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Introduire le Provider Port minimal OpenAI-only avec secrets/config server-only, sans modèle nommé.

**Critères d’acceptation :**
  - Le port est server-only ; aucune clé n’apparaît côté client.
  - Aucun modèle OpenAI nommé n’est hardcodé dans le backlog/item.
  - Les appels réels restent hors scope jusqu’à GO Delivery + sélection modèle.

**Preuves attendues :**
  - contrat port
  - checklist anti-leak secrets

**Hors périmètre :** appel OpenAI réel, sélection modèle, .env versionné

#### TB-02-02 — Streaming progressif N1 uniquement

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-02` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-02-01 |
| **Gate Morris** | fermeture/clarification réserves UX si surfaces UI touchées |
| **Source** | doc 102 ADR-ASST-STREAM-01=A · SERVER=C · impact 9 · R-TECH-AF02-BOUNDARY-01 · réserves UX |
| **Réserves liées** | R-TECH-AF02-BOUNDARY-01, R-UX-FPI-02, R-UX-FPI-03, R-UX-FPI-04, R-UX-04 |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Permettre le streaming N1 via frontière serveur hybride, sans streaming structurant N2/N3.

**Critères d’acceptation :**
  - N1 peut diffuser une réponse progressive jusqu’à complétion ou cancellation.
  - N2/N3 ne reçoivent pas de chunks structurants partiels.
  - Cancellation et erreurs sont auditables côté provider.

**Preuves attendues :**
  - tests streaming N1
  - preuve absence streaming N2/N3

**Hors périmètre :** protocole vendor imposé, WebSockets hors décision

#### TB-02-03 — Sorties N2/N3 complètes validées via AJV

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-03` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-02, TB-02-01 |
| **Gate Morris** | AJV fit confirmé |
| **Source** | doc 102 VALIDATE-LIB=A · AF-02 · impacts 8,20 · R-TECH-AF02-BOUNDARY-01 |
| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Valider fail-closed les sorties structurées N2/N3 avec AJV avant exposition/consommation.

**Critères d’acceptation :**
  - Une sortie N2/N3 invalide est rejetée fail-closed.
  - Une sortie valide passe la validation avant surface/consommation.
  - Aucun streaming partiel N2/N3 n’est accepté.

**Preuves attendues :**
  - tests validation AJV
  - cas négatifs schéma

**Hors périmètre :** nouvelle lib de validation

#### TB-02-04 — Erreurs provider et cancellation auditables

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-04` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-02-01, TB-03-04 |
| **Gate Morris** | aucune |
| **Source** | doc 102 STREAM=A · AUDIT-STORE=B · F-ARCH-02 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Normaliser erreurs provider et cancellation avec traces d’audit provider.

**Critères d’acceptation :**
  - Cancellation utilisateur/provider produit un enregistrement d’audit provider.
  - Erreurs provider ne laissent pas d’état métier N2/N3 partiel consommé.
  - N1 peut rester en mode dégradé selon HEALTH=C / FPI-15.

**Preuves attendues :**
  - tests erreurs/cancellation
  - enregistrements audit provider

**Hors périmètre :** retry policies cloud vendor

#### TB-02-05 — Metering provider et soft cap (sans hard cap)

| Champ | Valeur |
|---|---|
| **ID** | `TB-02-05` |
| **Type** | NFR |
| **Epic** | EPIC-TB-02 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-02-01, TB-03-04 |
| **Gate Morris** | fermeture R-TECH-FINOPS-HARD-01 / Decision Pack hard cap |
| **Source** | doc 102 FPI-14 soft · R-TECH-FINOPS-HARD-01 · impact metering |
| **Réserves liées** | R-TECH-FINOPS-HARD-01 |
| **Non-sélections liées** | hard cap FinOps, tarif, SLO |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Mesurer l’usage provider et appliquer soft cap ; hard cap reste différé avant pilote.

**Critères d’acceptation :**
  - Le metering enregistre les tentatives provider indépendamment du succès métier.
  - Le soft cap est configurable Admin sans valeur inventée ici.
  - Le hard cap n’est pas implémenté tant que DEFER-BEFORE-PILOT.

**Preuves attendues :**
  - tests soft cap
  - preuve absence hard cap implicite

**Hors périmètre :** tarifs, SLO, hard cap numérique

#### TB-03-01 — Rôles Admin et Morris sur mécanisme auth existant étendu

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-01` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-00-01 |
| **Gate Morris** | auth existante confirmée ou arbitrage dédié |
| **Source** | doc 102 ADMIN-AUTHZ=B · impact 11 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie IAM |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Étendre l’auth existante avec rôles Admin et Morris distincts, contrôles serveur.

**Critères d’acceptation :**
  - Admin et Morris sont des rôles distincts côté serveur.
  - Un spoofing client de rôle est rejeté.
  - Aucun vendor IAM n’est introduit silencieusement.

**Preuves attendues :**
  - tests rôles
  - tests anti-spoofing

**Hors périmètre :** nouveau sous-système IAM (option C)

#### TB-03-02 — AuthorityGate N3 serveur et consommation atomique

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-02` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-03-01, TB-01-05 |
| **Gate Morris** | auth confirmée |
| **Source** | doc 102 ADMIN-AUTHZ=B · F-ARCH-01 · impact 10 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Implémenter AuthorityGate N3 selon F-ARCH-01 : candidate → surface → GO Morris → gate → consommation atomique.

**Critères d’acceptation :**
  - Seul Morris peut consommer une décision N3 via gate serveur.
  - Le provider ne génère/valide/consomme aucun GO.
  - La consommation est atomique et idempotente.

**Preuves attendues :**
  - tests AuthorityGate
  - preuve anti-provider-authority

**Hors périmètre :** workflow externe BPM

#### TB-03-03 — Administration serveur modèle / TTL / soft cap

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-03` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-03-01, TB-00-06 |
| **Gate Morris** | fermeture/policy TTL ; modèle nommé hors item |
| **Source** | doc 102 ADMIN-AUTHZ=B · FPI-08 CONFIG-ADMIN-NO-VALUE · R-TECH-TTL-01 |
| **Réserves liées** | R-TECH-TTL-01, R-UX-04 |
| **Non-sélections liées** | modèle OpenAI, valeur TTL |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Permettre à Admin de configurer modèle, TTL et soft cap côté serveur sans valeurs inventées.

**Critères d’acceptation :**
  - Admin peut lire/écrire la configuration autorisée serveur.
  - TTL reste sans valeur numérique imposée par le backlog.
  - Morris ≠ Admin pour N3.

**Preuves attendues :**
  - tests config Admin
  - preuve TTL non hardcodé

**Hors périmètre :** UI Figma nouvelle, sélection modèle dans cet item

#### TB-03-04 — Lane d’audit provider transverse

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-04` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01 |
| **Gate Morris** | décision store (même tech physique possible) |
| **Source** | doc 102 AUDIT-STORE=B · F-ARCH-02 · impact 6 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store, vendor observabilité |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Enregistrer tentatives/usage provider dans une lane logique séparée avant/indépendamment du métier.

**Critères d’acceptation :**
  - Chaque tentative provider produit un enregistrement d’audit provider.
  - L’échec métier n’empêche pas l’audit provider.
  - La séparation logique provider/métier est vérifiable.

**Preuves attendues :**
  - tests audit provider
  - schéma logique audit

**Hors périmètre :** séparation physique obligatoire, vendor observability

#### TB-03-05 — Lane d’audit métier séparée

| Champ | Valeur |
|---|---|
| **ID** | `TB-03-05` |
| **Type** | ENABLER |
| **Epic** | EPIC-TB-03 |
| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-03-04 |
| **Gate Morris** | décision store |
| **Source** | doc 102 AUDIT-STORE=B · impact 7 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Maintenir l’audit métier distinct de l’audit provider (lane logique).

**Critères d’acceptation :**
  - Les événements métier N2/N3/AuthorityGate sont audités dans la lane métier.
  - Les accès et redactions futurs sont préparés sans politique RGPD inventée.
  - Pas de mélange d’enregistrements provider/métier.

**Preuves attendues :**
  - tests séparation lanes
  - exemples d’événements

**Hors périmètre :** rétention légale chiffrée sans décision

#### TB-04-01 — Configuration TTL administrable sans valeur imposée

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-01` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-04 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-03-03 |
| **Gate Morris** | fermeture R-TECH-TTL-01 / policy TTL |
| **Source** | doc 102 R-TECH-TTL-01 · FPI-08-TTL-DURATION=CONFIG-ADMIN-NO-VALUE |
| **Réserves liées** | R-TECH-TTL-01 |
| **Non-sélections liées** | valeur TTL |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Exposer la configuration TTL Admin sans fixer FPI-08-TTL-DURATION.

**Critères d’acceptation :**
  - La config TTL est lisible/modifiable Admin côté serveur.
  - Aucune durée TTL n’est hardcodée dans le backlog ni inventée.
  - Les items purge référencent cette config.

**Preuves attendues :**
  - tests config TTL
  - preuve absence valeur imposée

**Hors périmètre :** job cron cloud vendor

#### TB-04-02 — Purge hybride lazy + job avec coordination multi-instance

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-02` |
| **Type** | FEATURE-TECH |
| **Epic** | EPIC-TB-04 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01, TB-04-01 |
| **Gate Morris** | décision store + policy TTL |
| **Source** | doc 102 PURGE=C · impacts 5,19 · A2 multi-instance |
| **Réserves liées** | R-TECH-TTL-01 |
| **Non-sélections liées** | valeur TTL, technologie store |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Mettre en œuvre purge lazy sur accès + job planifié coordonné sous A2.

**Critères d’acceptation :**
  - Lazy purge s’exécute sur accès pertinents sans inventer TTL.
  - Job de purge traite expirations/orphelins avec coordination multi-instance.
  - Purge compatible audit et ne casse pas backup/restore.

**Preuves attendues :**
  - tests purge lazy
  - tests job coordination

**Hors périmètre :** durée TTL numérique, vendor scheduler imposé

#### TB-04-03 — Rétention, redaction et compatibilité backup/restore

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-03` |
| **Type** | NFR |
| **Epic** | EPIC-TB-04 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-03-05, TB-01-06, TB-04-02 |
| **Gate Morris** | décisions rétention futures ; R-UX si UI |
| **Source** | doc 102 AUDIT-STORE=B · RGPD pending · impact 14 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Préparer rétention/redaction audit et compatibilité purge↔backup sans inventer durées RGPD.

**Critères d’acceptation :**
  - Procédures de redaction/rétention sont documentées comme candidates.
  - Un restore après purge ne réintroduit pas silencieusement des données hors politique (critère à tester).
  - Aucune durée légale inventée.

**Preuves attendues :**
  - DOC rétention/redaction
  - tests restore/purge

**Hors périmètre :** outil DLP vendor

#### TB-04-04 — Decision Pack hard cap FinOps avant pilote

| Champ | Valeur |
|---|---|
| **ID** | `TB-04-04` |
| **Type** | DECISION-PREP |
| **Epic** | EPIC-TB-04 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | READY-FOR-DECISION |
| **Dépendances** | TB-02-05 |
| **Gate Morris** | décision Morris hard cap avant pilote |
| **Source** | doc 102 FPI-14-HARD-CAP=DEFER-BEFORE-PILOT · R-TECH-FINOPS-HARD-01 |
| **Réserves liées** | R-TECH-FINOPS-HARD-01 |
| **Non-sélections liées** | hard cap FinOps, tarif |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Préparer le Decision Pack hard cap FinOps (FPI-14) sans fixer de seuil.

**Critères d’acceptation :**
  - Options de politique hard cap sont comparées sans valeur numérique inventée.
  - Lien explicite soft cap / metering / pilote est tracé.
  - La réserve R-TECH-FINOPS-HARD-01 reste OPEN jusqu’à décision Morris.

**Preuves attendues :**
  - Decision Pack FinOps hard cap candidat

**Hors périmètre :** seuil inventé, tarification

#### TB-05-01 — Liveness minimale et readiness interne/store

| Champ | Valeur |
|---|---|
| **ID** | `TB-05-01` |
| **Type** | OPS |
| **Epic** | EPIC-TB-05 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-01 |
| **Gate Morris** | décision store ; format endpoint non sélectionné |
| **Source** | doc 102 HEALTH=C · impact 13 · A2 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | format health, vendor observabilité |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Exposer liveness et readiness des dépendances internes/store ; provider non bloquant hors scope ici.

**Critères d’acceptation :**
  - Liveness répond sans dépendre du provider.
  - Readiness reflète store/dépendances internes.
  - Aucune information sensible n’est exposée.

**Preuves attendues :**
  - contrat health
  - tests readiness store down

**Hors périmètre :** format endpoint imposé, vendor APM

#### TB-05-02 — Probe provider optionnelle et modes N1 dégradé / N2-N3 fail-closed

| Champ | Valeur |
|---|---|
| **ID** | `TB-05-02` |
| **Type** | NFR |
| **Epic** | EPIC-TB-05 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-05-01, TB-02-01 |
| **Gate Morris** | aucune |
| **Source** | doc 102 HEALTH=C · FPI-15 · impacts 20–21 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Assurer probe provider non bloquante, N1 dégradé possible, N2/N3 fail-closed si provider requis indisponible.

**Critères d’acceptation :**
  - Provider down n’échoue pas nécessairement la liveness.
  - N1 peut fonctionner en mode dégradé documenté.
  - N2/N3 restent fail-closed sans provider requis.

**Preuves attendues :**
  - tests N1 dégradé
  - tests N2/N3 fail-closed provider down

**Hors périmètre :** SLO de disponibilité inventé

#### TB-05-03 — Observabilité logs, métriques et corrélation sans données sensibles

| Champ | Valeur |
|---|---|
| **ID** | `TB-05-03` |
| **Type** | OPS |
| **Epic** | EPIC-TB-05 |
| **Priorité candidate** | **P3** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-03-04, TB-05-01 |
| **Gate Morris** | vendor observability NOT SELECTED |
| **Source** | doc 102 observabilité · SECRETS=A · AUDIT=B |
| **Réserves liées** | aucune |
| **Non-sélections liées** | vendor observabilité |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Définir corrélation logs/métriques pour provider, audit et health sans fuite de secrets.

**Critères d’acceptation :**
  - Corrélation request/provider/audit est possible via identifiants non secrets.
  - Aucun secret ni payload sensible n’apparaît dans les logs de preuve.
  - Aucun vendor observability n’est imposé.

**Preuves attendues :**
  - checklist anti-leak
  - exemple corrélation

**Hors périmètre :** Datadog/etc. sélection

#### TB-06-01 — Tests concurrence, multi-instance et perte/redémarrage d’instance

| Champ | Valeur |
|---|---|
| **ID** | `TB-06-01` |
| **Type** | QA |
| **Epic** | EPIC-TB-06 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-01-04, TB-01-05, TB-01-06 |
| **Gate Morris** | store/plateforme pour exécution réelle |
| **Source** | doc 102 impacts 16–18 · A2 |
| **Réserves liées** | aucune |
| **Non-sélections liées** | plateforme cloud, nombre d’instances |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Prouver le comportement A2 sous concurrence, multi-instance et restart.

**Critères d’acceptation :**
  - Suite de tests concurrence PASS/FAIL déterministe.
  - Scénario multi-instance documenté et exécutable quand environnement dispo.
  - Restart/loss d’instance ne perd pas l’état durable externe.

**Preuves attendues :**
  - rapport tests
  - scénarios

**Hors périmètre :** charge prod, chaos cloud vendor

#### TB-06-02 — Tests purge et sauvegarde/restauration

| Champ | Valeur |
|---|---|
| **ID** | `TB-06-02` |
| **Type** | QA |
| **Epic** | EPIC-TB-06 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-DECISION |
| **Dépendances** | TB-04-02, TB-01-06, TB-04-03 |
| **Gate Morris** | policy TTL + store |
| **Source** | doc 102 impacts 14,19 · PURGE=C |
| **Réserves liées** | R-TECH-TTL-01 |
| **Non-sélections liées** | valeur TTL |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Valider purge hybride et backup/restore Project.

**Critères d’acceptation :**
  - Tests purge lazy et job couvrent orphelins/expirations sans TTL inventé (fixtures contrôlées).
  - Backup puis restore restaure l’état attendu.
  - Interaction purge/restore est couverte par au moins un cas négatif.

**Preuves attendues :**
  - rapport tests purge/backup

**Hors périmètre :** TTL numérique de production

#### TB-06-03 — Tests N1 dégradé, N2/N3 fail-closed, AuthorityGate et audit

| Champ | Valeur |
|---|---|
| **ID** | `TB-06-03` |
| **Type** | QA |
| **Epic** | EPIC-TB-06 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | CANDIDATE |
| **Dépendances** | TB-02-03, TB-02-04, TB-03-02, TB-03-04, TB-03-05, TB-05-02 |
| **Gate Morris** | aucune |
| **Source** | doc 102 impacts 6–7,10,20–21 · F-ARCH-01/02 |
| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
| **Non-sélections liées** | aucune |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Valider modes dégradé/fail-closed, AuthorityGate et lanes d’audit.

**Critères d’acceptation :**
  - N1 dégradé et N2/N3 fail-closed ont des cas PASS/FAIL.
  - AuthorityGate refuse non-Morris et double consommation.
  - Audit provider et métier sont vérifiés séparément.

**Preuves attendues :**
  - rapport QA governance

**Hors périmètre :** pentest externe

#### TB-06-04 — Vérification sécurité, RGPD, FinOps et readiness pilote

| Champ | Valeur |
|---|---|
| **ID** | `TB-06-04` |
| **Type** | QA |
| **Epic** | EPIC-TB-06 |
| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
| **Statut** | BLOCKED-BY-RESERVE |
| **Dépendances** | TB-04-04, TB-06-01, TB-06-02, TB-06-03, TB-05-03 |
| **Gate Morris** | hard cap + TTL policy + décisions store/plateforme |
| **Source** | doc 102 prérequis pilote · R-TECH-FINOPS-HARD-01 · RGPD pending |
| **Réserves liées** | R-TECH-FINOPS-HARD-01, R-TECH-TTL-01 |
| **Non-sélections liées** | hard cap FinOps, valeur TTL |
| **Delivery** | NOT AUTHORIZED |

**Objectif :** Pack de vérification pré-pilote : sécurité, RGPD, FinOps hard, critères pilote.

**Critères d’acceptation :**
  - Checklist sécurité (secrets, authz, anti-spoofing) a un verdict.
  - Checklist RGPD (purge/rétention/redaction) a un verdict sans durée inventée.
  - Pilote bloqué tant que hard cap FinOps et TTL policy non décidés.

**Preuves attendues :**
  - rapport readiness pilote
  - matrice gates

**Hors périmètre :** certification ISO, audit légal externe

---


## Annexe — Couverture des 21 impacts document 102

| # | Impact | Items | Statut |
|---|---|---|---|
| 1 | abstraction persistance externe | TB-01-01 | COVERED |
| 2 | modèle données Project | TB-01-02 | COVERED |
| 3 | transactions / unicité | TB-01-03 · TB-01-04 | COVERED |
| 4 | idempotence N2/N3 | TB-01-05 | COVERED |
| 5 | coordination purge | TB-04-02 | COVERED |
| 6 | audit provider | TB-03-04 | COVERED |
| 7 | audit métier | TB-03-05 | COVERED |
| 8 | validation AJV | TB-00-02 · TB-02-03 | COVERED |
| 9 | streaming N1 | TB-02-02 | COVERED |
| 10 | AuthorityGate | TB-03-02 | COVERED |
| 11 | rôles Admin/Morris | TB-03-01 | COVERED |
| 12 | configuration server-only | TB-00-06 · TB-02-01 | COVERED |
| 13 | health/readiness | TB-05-01/02 | COVERED |
| 14 | sauvegarde/restauration | TB-01-06 · TB-06-02 | COVERED |
| 15 | migrations | TB-00-04 · TB-01-06 | COVERED |
| 16 | tests concurrence | TB-06-01 | COVERED |
| 17 | tests multi-instance | TB-06-01 | COVERED |
| 18 | tests perte/redémarrage | TB-06-01 | COVERED |
| 19 | tests purge | TB-06-02 | COVERED |
| 20 | tests fail-closed N2/N3 | TB-06-03 | COVERED |
| 21 | tests mode dégradé N1 | TB-06-03 · TB-05-02 | COVERED |

## 18. Matrice de traçabilité Architecture / ADR → items

| Décision | Conséquence | Items | Couverture |
|---|---|---|---|
| D-ASST-ARCH-VALIDATION-01=B | cible technique WITH RESERVES | tous · TB-06-04 | COVERED |
| ARCH-BUNDLE=A2 | store externe · concurrence · no-embedded | TB-00-03/05 · TB-01-* · TB-06-01 | COVERED |
| ADR-ASST-TOPO-01=A | monolithe modulaire Next.js | TB-02-01 · TB-03-* (server) | COVERED |
| ADR-ASST-PERSIST-01=B | store externe | TB-00-03/04 · TB-01-* | COVERED |
| ADR-ASST-SERVER-01=C | hybride Actions/Handlers | TB-02-02 · TB-05-01 | COVERED |
| ADR-ASST-PURGE-01=C | purge hybride | TB-04-01/02 · TB-06-02 | COVERED |
| ADR-ASST-AUDIT-STORE-01=B | lanes logiques | TB-03-04/05 · TB-06-03 | COVERED |
| ADR-ASST-STREAM-01=A | streaming N1 only | TB-02-02/03 · TB-06-03 | COVERED |
| ADR-ASST-VALIDATE-LIB-01=A | AJV | TB-00-02 · TB-02-03 | COVERED |
| ADR-ASST-SECRETS-01=A | env server-only | TB-00-06 · TB-02-01 | COVERED |
| ADR-ASST-ADMIN-AUTHZ-01=B | Admin/Morris + gate | TB-00-01 · TB-03-01/02/03 | COVERED |
| ADR-ASST-HEALTH-01=C | liveness/readiness/probe | TB-05-01/02 · TB-06-03 | COVERED |

**Gaps :** aucun gap silencieux.

---

## 19. Matrice de traçabilité réserves → items

| Réserve | Items | Note |
|---|---|---|
| R-TECH-TTL-01 | TB-00-06 · TB-03-03 · TB-04-01/02 · TB-06-02/04 | KEEP-OPEN |
| R-TECH-FINOPS-HARD-01 | TB-02-05 · TB-04-04 · TB-06-04 | KEEP-OPEN |
| R-TECH-AF02-BOUNDARY-01 | TB-00-02 · TB-02-02/03 · TB-06-03 | KEEP-OPEN |
| R-UX-FPI-02/03/04 · R-UX-04 | TB-02-02 · TB-03-03 | BLOCKED OR LIMITED BY OPEN UX RESERVE sur surfaces UI |

Aucune réserve fermée.

---

## 20. Matrice de dépendances (synthèse)

TB-00-* → TB-01-* → TB-02-* → TB-03-* → TB-04-* → TB-05-* → TB-06-*

Points durs : TB-00-03/04 bloquent TB-01-* · TB-00-01 bloque TB-03-01 · TB-00-02 bloque TB-02-03 · TB-04-04 bloque readiness pilote TB-06-04.

---

## 21. Ordre de réalisation candidat

Phase 0 Decisions (TB-00-*) · Phase 1 Persistence (TB-01-*) · Phase 2 Assistant (TB-02-*) · Phase 3 Governance (TB-03-*) · Phase 4 Lifecycle (TB-04-* + TB-05-*) · Phase 5 Pilot QA (TB-06-*).

**CANDIDATE — MORRIS VALIDATION REQUIRED**

---

## 22. Lots candidats

### LOT-IP-0 — Implementation Preparation
Items : TB-00-01 … TB-00-06 · TB-04-04 · Nature DOC/DECISION-PREP · **aucun code** · Objectif : borner décisions bloquantes.

### LOT-D1 — A2 Persistence Foundation
Items TB-01-* · **NOT AUTHORIZED** · requiert décisions store/data-access.

### LOT-D2 — Assistant Core N1
Items TB-02-01/02/04 · **NOT AUTHORIZED**.

### LOT-D3 — Structured N2/N3 and Authority
Items TB-02-03 · TB-03-* · **NOT AUTHORIZED**.

### LOT-D4 — Lifecycle, Audit and Operations
Items TB-04-01/02/03 · TB-05-* · compléments audit · **NOT AUTHORIZED**.

### LOT-D5 — Pilot Hardening
Items TB-02-05 · TB-06-* · **NOT AUTHORIZED**.

Aucun lot sélectionné par Morris dans ce cycle.

---

## 23. Chemin critique

Auth inventaire (TB-00-01) + Store decision (TB-00-03) + AJV fit (TB-00-02) → Persistence port (TB-01-01) → Provider (TB-02-01) → AuthorityGate (TB-03-02) → Purge/Health → QA pilote (TB-06-04) bloquée par hard cap/TTL.

---

## 24. Items bloqués par décision

| Item | Blocage |
|---|---|
| TB-01-* | store / data-access |
| TB-02-03 | AJV fit |
| TB-03-01/02 | auth existante |
| TB-04-02 · TB-06-02 | store + TTL policy |
| TB-05-01 · TB-06-01 | store/plateforme exécution |
| TB-06-04 | hard cap + TTL + store/plateforme |

Statuts : **BLOCKED BY FUTURE MORRIS DECISION** / **IMPLEMENTATION-PREPARATION REQUIRED**.

---

## 25. Items prérequis avant pilote

TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB-06-01…04 · fermeture ou arbitrage explicite réserves TTL/FinOps.

---

## 26. Critères de passage vers Delivery

Avant tout GO Delivery du premier lot technique :

- backlog validé ChatGPT ;
- priorités validées Morris ;
- lot sélectionné Morris ;
- store sélectionné si requis ;
- migration strategy sélectionnée ;
- auth existante confirmée ou arbitrage ;
- AJV fit confirmé ;
- fichiers Delivery bornés ;
- tests attendus définis ;
- réserves bloquantes identifiées ;
- cohérence 93/97/99/102.

Ces critères **ne consomment pas** Delivery.

---

## 27. Risques et incertitudes

Auth absente (README P0) · store non choisi · AJV fit non prouvé · réserves UX sur surfaces · FinOps hard / TTL ouverts · fixtures-only aujourd’hui (écart backend).

---

## 28. Non-sélections

Store tech/fournisseur · cloud · hébergeur · région · instances · ORM · migration tool · IAM · observability · modèle/endpoint OpenAI · TTL · hard cap · SLO · tarifs · schéma physique · IaC — **NOT SELECTED — FUTURE DEDICATED DECISION OR IMPLEMENTATION-PREPARATION GATE REQUIRED**.

---

## 29. Actions autorisées

Créer 103 · dériver items · proposer priorités/lots · tracer · publier handoff.

---

## 30. Actions interdites

Modifier 90–102 · créer 104 · code · app/** · packages · migration · endpoint · .env · sélection techno · Delivery · fermer réserve · commit/push projet · PR/merge.

---

## 31. Anti-claims

Pas Delivery Ready · pas de lot sélectionné · pas de techno choisie · pas de code · pas de backend créé · pas de persist déployée · pas production-ready · sécurité/RGPD/FinOps non validés · réserves ouvertes · pas PR/merge.

---

## 32. Verdict

**TECHNICAL IMPLEMENTATION BACKLOG DERIVED —**
**BACKLOG GATE CONSUMED BY MORRIS —**
**APPLIED A2 ARCHITECTURE AND TEN ADR FULLY TRACED —**
**ALL TWENTY-ONE CANDIDATE BACKLOG IMPACTS COVERED OR EXPLICITLY BLOCKED —**
**33 TESTABLE ITEMS ACROSS 7 EPICS DOCUMENTED —**
**PRIORITIES AND LOTS REMAIN CANDIDATE UNTIL MORRIS VALIDATION —**
**EXTERNAL DURABLE STORE REMAINS REQUIRED —**
**STORE TECHNOLOGY, CLOUD PLATFORM, ORM, IAM VENDOR, OBSERVABILITY VENDOR AND OPENAI MODEL REMAIN UNSELECTED —**
**ALL EXISTING RESERVES REMAIN OPEN —**
**TTL VALUE REMAINS UNSELECTED —**
**FINOPS HARD CAP REMAINS DEFERRED BEFORE PILOT —**
**DOCUMENT 103 CREATED — DOCUMENTS 90–102 UNCHANGED —**
**NO DOCUMENT 104 — NO CODE — DELIVERY GATE NOT CONSUMED —**
**READY FOR CHATGPT VALIDATION AND MORRIS BACKLOG PRIORITIZATION DECISION**

---

## 33. Prochaine gate candidate

```text
GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
```

Statut : **candidate uniquement — non consommée**.

**TECHNICAL BACKLOG DOCUMENTED — MORRIS PRIORITIZATION AND FIRST LOT DECISION REQUIRED — DELIVERY NOT CONSUMED**
`````

---

## 38. SHA-256 et lignes du document 103

| Item | Valeur |
|---|---|
| SHA-256 | `19d76b1598134410fd5a24e363c0d29790df1946759d531f4bd51986474c87f9` |
| Lignes | 1337 |

---

## 39. Diff complet (RAW — fence 7 backticks)

```````diff
diff --git a/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
new file mode 100644
index 0000000..ce9b45d
--- /dev/null
+++ b/projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
@@ -0,0 +1,1337 @@
+# SFIA Studio — Assistant SFIA natif OpenAI — Technical Implementation Backlog
+
+## 1. Statut
+
+**TECHNICAL IMPLEMENTATION BACKLOG DERIVED FROM APPLIED A2 ARCHITECTURE —**
+**BACKLOG GATE CONSUMED BY MORRIS —**
+**PRIORITIES AND LOTS ARE CANDIDATE UNTIL MORRIS VALIDATION —**
+**TECHNOLOGY SELECTIONS REMAIN OPEN —**
+**ALL RESERVES REMAIN OPEN —**
+**DELIVERY GATE NOT CONSUMED —**
+**NO IMPLEMENTATION AUTHORIZED**
+
+| Champ | Valeur |
+|---|---|
+| **Document** | `projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md` |
+| **Items** | 33 |
+| **Épics** | 7 (EPIC-TB-00 … EPIC-TB-06) |
+| **Documents 90–102** | Inchangés |
+| **Delivery** | NOT-CONSUMED |
+
+---
+
+## 2. GO Morris
+
+```text
+GO BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — DERIVE TECHNICAL IMPLEMENTATION BACKLOG FROM APPLIED ARCHITECTURE A2 AND ADR DECISIONS
+```
+
+**Effet :** `BACKLOG-GATE=CONSUMED-BY-MORRIS`
+
+Autorise : création backlog · dérivation stories · séquence candidate · préparation décisions/lots.
+
+N’autorise pas : Delivery · implémentation · sélection store/plateforme · dépendance · commit/push projet · PR/merge.
+
+---
+
+## 3. Autorité et timestamp
+
+| Champ | Valeur |
+|---|---|
+| **Autorité** | Morris |
+| **Consommation** | 2026-08-05 13:53 CEST (+0200) / 11:53 UTC |
+| **Rédaction Cursor** | 2026-08-05 14:08 CEST (+0200) / 12:08 UTC |
+
+---
+
+## 4. Cycle / profil / typologie
+
+Backlog / user stories — dérivation backlog technique · Standard · EVOL/DOC · Documentation-only · Doctrine SFIA v2.6
+
+---
+
+## 5. Sources et hiérarchie
+
+1. Git main ; 2. GO courant ; 3. décisions 93/97/99/102 ; 4. architectures 91/94–95/100 ; 5. framing 90 ; 6. packs 92/96/98/101 ; 7. CKC synthétique / §4.5 guidance only ; 8. hypothèses explicites.
+
+**CKC détaillé Backlog :** non trouvé · fallback carte synthétique + §4.5 · aucune autorité d’exécution.
+
+---
+
+## 6. Git et handoff
+
+| Champ | Valeur |
+|---|---|
+| **origin/main** | `8dc54db0069eed78a8d8930cc2b035450ab56ad1` |
+| **Branche** | `backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog` |
+| **Handoff entrant** | tip `79767e64e3e97ffeaa2e87f7dc49bec011b5fb17` · blob `25763db03292f1233912bf6952556ad3efa5f08b` |
+
+---
+
+## 7. Documents entrants et hashes
+
+| Doc | SHA-256 | Lignes |
+|---|---|---|
+| 100 | `9244ec46bc7b0ea212c03f1e59f05f80521e87c6a8e27c07de801e10b8e2cc20` | 1432 |
+| 101 | `698d1e0388cbf2f93b7ae0c983ee66d84a50e4143fd79b4ec92f23ea9918d114` | 1164 |
+| 102 | `b5e06cd6cb0f74c3278afc041f22a27bd39f5bcbac54fa851a952b4c810577b1` | 774 |
+
+EMBED_MATCH document 102 : **PASS**.
+
+---
+
+## 8. Portée du backlog
+
+Transformer le document 102 en épics/items testables · priorités **candidates** · lots **candidates** · gates humaines · **sans** code, migration exécutable, sélection techno, Delivery.
+
+---
+
+## 9. Décisions appliquées préservées
+
+VALIDATION=B · BUNDLE=A2 · PROFILE=EPHEMERAL_SERVERLESS_OR_MULTI_INSTANCE · CONSTRAINTS=`external-durable-store;explicit-concurrency;no-embedded` · TOPO=A · PERSIST=B · SERVER=C · PURGE=C · AUDIT=B · STREAM=A · VALIDATE-LIB=A · SECRETS=A · ADMIN-AUTHZ=B · HEALTH=C · NORMALIZED SETS acceptés.
+
+Alternatives A1/B1/C **non** rouvertes.
+
+---
+
+## 10. Principes de découpage
+
+Une story = un résultat vérifiable · dépendances visibles · distinguer DECISION-PREP / ENABLER / FEATURE-TECH / NFR / QA / OPS / DOC · priorité candidate ≠ décision Morris · pas de fourre-tout · PASS/FAIL/BLOCKED possible.
+
+---
+
+## 11. Types d’items
+
+DECISION-PREP · ENABLER · FEATURE-TECH · NFR · QA · OPS · DOC — définis dans le GO ; utilisés ci-dessous.
+
+---
+
+## 12. Règles de priorité candidate
+
+P0 fondations/décisions · P1 capacité FPI · P2 durcissement pré-pilote · P3 post-FPI/non bloquant · toutes **CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED**.
+
+---
+
+## 13. Definition of Ready candidate
+
+Résultat vérifiable · source · périmètre · dépendances · techno sélectionnée ou non nécessaire · réserves · AC · preuves · fichiers candidats · gate humaine. **Pas** Ready for Delivery si décision structurante ouverte.
+
+---
+
+## 14. Definition of Done candidate
+
+Périmètre · tests nominaux/négatifs · typecheck/lint/tests · preuve · pas de fuite secret · pas de régression hors scope · docs · réserves tracées · validation indépendante · handoff. **Candidate** — ne valide aucun item actuel.
+
+---
+
+## 15. Architecture de backlog
+
+```text
+EPIC-TB-00 Decision Prep
+    → EPIC-TB-01 Persistence A2
+        → EPIC-TB-02 Provider pipeline
+            → EPIC-TB-03 Authority & audit
+                → EPIC-TB-04 Lifecycle / FinOps
+                    → EPIC-TB-05 Health / observability
+                        → EPIC-TB-06 QA / pilot readiness
+```
+
+État applicatif constaté (main, non modifié) : Next.js 15 · React 19 · TypeScript · AJV présent · OpenAI SDK présent · fixtures locales · README : aucun backend réel · pas de persistance durable démontrée.
+
+---
+
+## 16. Épics
+
+### EPIC-TB-00 — Implementation preparation and decisions
+Préparer décisions ouvertes avant implémentation (auth, AJV, store, data-access, plateforme, secrets/config).
+
+### EPIC-TB-01 — External durable Project persistence
+Port externe · modèle · isolation · transactions · idempotence · migration/backup.
+
+### EPIC-TB-02 — OpenAI provider and response pipeline
+Port OpenAI · server-only · N1 stream · N2/N3 AJV · erreurs · metering/soft cap.
+
+### EPIC-TB-03 — Authority, administration and audit
+Rôles · AuthorityGate · admin config · audit provider/métier.
+
+### EPIC-TB-04 — Lifecycle, purge, privacy and FinOps
+TTL config · purge hybride · rétention/redaction · hard cap Decision Pack.
+
+### EPIC-TB-05 — Health, resilience and observability
+Liveness/readiness · modes dégradé/fail-closed · logs/métriques.
+
+### EPIC-TB-06 — QA and pilot readiness
+Tests A2 · purge/backup · governance · readiness pilote.
+
+---
+
+## 17. Backlog détaillé
+
+Nombre d’items : **33** (cible 24–36 · couverture 21 impacts + décisions).
+
+#### TB-00-01 — Inventaire du mécanisme d’authentification existant exploitable
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-00-01` |
+| **Type** | DECISION-PREP |
+| **Epic** | EPIC-TB-00 |
+| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | READY-FOR-DECISION |
+| **Dépendances** | aucune |
+| **Gate Morris** | décision nécessaire si aucun mécanisme exploitable |
+| **Source** | doc 102 ADR-ASST-ADMIN-AUTHZ-01=B · package/README main · absence auth documentée README P0 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie IAM |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Déterminer si un mécanisme d’auth existant dans le repo peut être étendu pour Admin/Morris sans nouveau sous-système IAM.
+
+**Critères d’acceptation :**
+  - Un inventaire écrit liste les points d’auth/session/middleware existants ou constate l’absence.
+  - Le constat distingue « exploitable pour extension Admin/Morris » vs « arbitrage dédié requis ».
+  - Aucune technologie IAM n’est sélectionnée ; aucun code auth n’est ajouté.
+
+**Preuves attendues :**
+  - document d’inventaire / section Decision Prep
+  - références de chemins Git main
+  - anti-claim : pas de vendor IAM
+
+**Hors périmètre :** code auth, IAM vendor, middleware production
+
+#### TB-00-02 — Vérification d’adéquation AJV pour schémas N2/N3
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-00-02` |
+| **Type** | DECISION-PREP |
+| **Epic** | EPIC-TB-00 |
+| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | READY-FOR-DECISION |
+| **Dépendances** | aucune |
+| **Gate Morris** | arbitrage Morris si incompatible |
+| **Source** | doc 102 ADR-ASST-VALIDATE-LIB-01=A · package.json ajv · AF-02 · R-TECH-AF02-BOUNDARY-01 |
+| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
+| **Non-sélections liées** | aucune |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Confirmer que AJV déjà présent convient aux sorties structurées N2/N3 avant toute story d’implémentation validation.
+
+**Critères d’acceptation :**
+  - Un rapport d’adéquation décrit version AJV, capacités TypeScript et limites pour schémas N2/N3.
+  - Verdict explicite : FIT / FIT-WITH-CONSTRAINTS / NOT-FIT.
+  - Si NOT-FIT, stop condition documentée ; aucun remplacement silencieux de bibliothèque.
+
+**Preuves attendues :**
+  - rapport AJV fit
+  - extrait package.json
+  - lien R-TECH-AF02-BOUNDARY-01
+
+**Hors périmètre :** ajout dépendance alternative, changement package.json
+
+#### TB-00-03 — Decision Pack options de store externe durable (A2)
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-00-03` |
+| **Type** | DECISION-PREP |
+| **Epic** | EPIC-TB-00 |
+| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | READY-FOR-DECISION |
+| **Dépendances** | aucune |
+| **Gate Morris** | décision Morris store requise avant LOT-D1 |
+| **Source** | doc 102 ARCH-BUNDLE=A2 · ADR-ASST-PERSIST-01=B · contraintes external-durable-store;no-embedded |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie store, fournisseur store |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Préparer un Decision Pack d’options de store externe compatible multi-instance / serverless sans sélectionner le fournisseur.
+
+**Critères d’acceptation :**
+  - Au moins deux options comparables de store externe sont documentées avec trade-offs A2.
+  - Chaque option couvre concurrence, backup/restore, migration, coût et réversibilité sans inventer de tarif.
+  - Aucune option embarquée (SQLite/fs local durable) n’est recommandée comme store opérationnel.
+
+**Preuves attendues :**
+  - Decision Pack store candidat
+  - matrice trade-offs
+  - anti-claims no-embedded
+
+**Hors périmètre :** choix Postgres/Supabase/Neon/etc., code, IaC
+
+#### TB-00-04 — Decision Pack stratégie d’accès données et migrations
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-00-04` |
+| **Type** | DECISION-PREP |
+| **Epic** | EPIC-TB-00 |
+| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | READY-FOR-DECISION |
+| **Dépendances** | TB-00-03 |
+| **Gate Morris** | décision Morris data-access/migration |
+| **Source** | doc 102 conséquences A2 · impacts migrations · ADR-ASST-PERSIST-01=B |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | ORM, outil de migration |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Préparer les options d’accès données / migrations compatibles A2 sans sélectionner ORM ni outil.
+
+**Critères d’acceptation :**
+  - Options d’accès données et de migration sont comparées (sans choisir ORM/outil).
+  - Les exigences concurrence, unicité et idempotence sont listées comme contraintes d’implémentation futures.
+  - Le pack indique explicitement BLOCKED BY FUTURE MORRIS DECISION tant que non décidé.
+
+**Preuves attendues :**
+  - Decision Pack data-access/migration
+  - dépendances TB-00-03
+
+**Hors périmètre :** sélection ORM, création migration exécutable
+
+#### TB-00-05 — Decision Pack plateforme de déploiement compatible A2
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-00-05` |
+| **Type** | DECISION-PREP |
+| **Epic** | EPIC-TB-00 |
+| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | READY-FOR-DECISION |
+| **Dépendances** | TB-00-03 |
+| **Gate Morris** | décision Morris plateforme si lot Delivery la requiert |
+| **Source** | doc 102 DEPLOYMENT-PROFILE · ARCH-BUNDLE=A2 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | plateforme cloud, hébergeur, région, nombre d’instances |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Comparer des profils de plateforme compatibles EPHEMERAL_SERVERLESS_OR_MULTI_INSTANCE sans sélectionner cloud/hébergeur.
+
+**Critères d’acceptation :**
+  - Options de plateforme sont évaluées contre volume durable externe, multi-instance et absence de persist locale.
+  - Le pack n’impose ni région, ni nombre d’instances, ni fournisseur.
+  - Incompatibilités A1 (embedded) sont explicitement exclues.
+
+**Preuves attendues :**
+  - Decision Pack plateforme candidat
+  - critères A2
+
+**Hors périmètre :** choix AWS/Vercel/Azure, IaC, déploiement
+
+#### TB-00-06 — Préparation secrets server-only et paramètres de configuration Admin
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-00-06` |
+| **Type** | DECISION-PREP |
+| **Epic** | EPIC-TB-00 |
+| **Priorité candidate** | **P0** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | READY-FOR-DECISION |
+| **Dépendances** | aucune |
+| **Gate Morris** | aucune sélection ; fermeture réserves hors scope |
+| **Source** | doc 102 ADR-ASST-SECRETS-01=A · ADMIN-AUTHZ=B · FPI-08/FPI-14 différés · R-TECH-TTL-01 · R-TECH-FINOPS-HARD-01 |
+| **Réserves liées** | R-TECH-TTL-01, R-TECH-FINOPS-HARD-01 |
+| **Non-sélections liées** | secret manager, modèle OpenAI, valeur TTL, hard cap FinOps |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Documenter la frontière secrets env server-only et le catalogue de paramètres Admin (modèle/TTL/soft cap) sans créer .env ni fixer TTL/hard cap.
+
+**Critères d’acceptation :**
+  - Catalogue des secrets server-only et interdits navigateur/logs est écrit.
+  - Catalogue des paramètres Admin (modèle, TTL, soft cap) est listé sans valeur TTL ni hard cap.
+  - Trajectoire secret manager marquée future ; aucun fichier .env créé.
+
+**Preuves attendues :**
+  - DOC paramètres/secrets
+  - liens réserves TTL/FinOps
+
+**Hors périmètre :** création .env, secret manager vendor, valeur TTL, hard cap
+
+#### TB-01-01 — Port de persistance externe Project (abstraction)
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-01-01` |
+| **Type** | ENABLER |
+| **Epic** | EPIC-TB-01 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-00-03, TB-00-04 |
+| **Gate Morris** | décision store + data-access |
+| **Source** | doc 102 impact 1 · PERSIST=B · A2 no-embedded |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie store, ORM |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Définir et implémenter ultérieurement le port d’accès store externe sans lier une technologie concrète dans ce backlog.
+
+**Critères d’acceptation :**
+  - Le port expose des opérations Project CRUD/query sans API embarquée filesystem.
+  - Les tests du port utilisent un double ; aucun store réel n’est hardcodé dans l’interface.
+  - Le redémarrage d’instance n’implique aucune perte d’état via le port (contrat documenté).
+
+**Preuves attendues :**
+  - contrat de port
+  - tests double
+  - anti-claim no-embedded
+
+**Hors périmètre :** choix store, schéma SQL exécutable
+
+#### TB-01-02 — Modèle logique de données Project
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-01-02` |
+| **Type** | ENABLER |
+| **Epic** | EPIC-TB-01 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-01-01 |
+| **Gate Morris** | décision store pour mapping physique |
+| **Source** | doc 102 impact 2 · docs 91/93/100 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | schéma physique final |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Spécifier le modèle logique Project (entités, invariants) aligné AF/UX sans schéma physique final.
+
+**Critères d’acceptation :**
+  - Le modèle logique couvre Project et invariants d’isolation.
+  - Aucun schéma physique final ni DDL n’est livré comme décision.
+  - Traçabilité vers documents 91/93/100 est explicite.
+
+**Preuves attendues :**
+  - modèle logique documenté
+  - matrice invariants
+
+**Hors périmètre :** schéma physique final, migration appliquée
+
+#### TB-01-03 — Isolation Project et contraintes d’unicité
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-01-03` |
+| **Type** | ENABLER |
+| **Epic** | EPIC-TB-01 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-01-01, TB-01-02 |
+| **Gate Morris** | décision store |
+| **Source** | doc 102 impacts 2–3 · A2 explicit-concurrency |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie store |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Garantir l’isolation Project et les contraintes d’unicité dans le store externe sous concurrence.
+
+**Critères d’acceptation :**
+  - Deux Projects distincts ne partagent pas d’état durable.
+  - Les contraintes d’unicité pertinentes échouent de façon déterministe sous collision.
+  - Aucun store local embarqué n’est utilisé pour l’isolation.
+
+**Preuves attendues :**
+  - tests isolation
+  - tests unicité
+
+**Hors périmètre :** multi-tenancy cloud vendor
+
+#### TB-01-04 — Transactions et concurrence explicite A2
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-01-04` |
+| **Type** | ENABLER |
+| **Epic** | EPIC-TB-01 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-01-01, TB-01-03 |
+| **Gate Morris** | décision store |
+| **Source** | doc 102 impacts 3,16 · A2 explicit-concurrency |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie store |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Assurer transactions / coordination d’écriture compatibles multi-instance.
+
+**Critères d’acceptation :**
+  - Scénarios concurrent writers sont définis et ont un comportement attendu documenté.
+  - Aucune hypothèse single-writer A1 n’est utilisée.
+  - Échecs de concurrence sont observables et testables.
+
+**Preuves attendues :**
+  - spéc concurrency
+  - tests concurrence (futurs TB-06-01)
+
+**Hors périmètre :** verrouillage filesystem local
+
+#### TB-01-05 — Idempotence des consommations N2/N3
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-01-05` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-01 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-01-04, TB-03-02 |
+| **Gate Morris** | décision store |
+| **Source** | doc 102 impact 4 · F-ARCH-01 · STREAM=A (N2/N3 non streamés) |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie store |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Rendre les écritures/consommations N2/N3 idempotentes sous retry et multi-instance.
+
+**Critères d’acceptation :**
+  - Un retry de la même consommation N2/N3 ne duplique pas l’effet métier.
+  - Les clés d’idempotence sont serveur et auditables.
+  - Le provider ne peut pas forcer une double consommation.
+
+**Preuves attendues :**
+  - tests idempotence
+  - traces audit
+
+**Hors périmètre :** bus événementiel, saga distribuée hors scope FPI
+
+#### TB-01-06 — Fondation migrations, sauvegarde et restauration
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-01-06` |
+| **Type** | OPS |
+| **Epic** | EPIC-TB-01 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-00-04, TB-01-02 |
+| **Gate Morris** | décision migration tool + store |
+| **Source** | doc 102 impacts 14–15 · PERSIST=B |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | outil de migration, technologie store |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Préparer fondations migration de schéma + backup/restore Project avant pilote.
+
+**Critères d’acceptation :**
+  - Une procédure backup/restore est documentée pour l’état Project durable.
+  - Une stratégie de migration de schéma est définie sans outil imposé ici.
+  - Un redémarrage d’instance après restore ne perd pas l’état restauré (critère de preuve).
+
+**Preuves attendues :**
+  - runbook backup/restore candidat
+  - stratégie migration
+
+**Hors périmètre :** IaC, exécution restore production
+
+#### TB-02-01 — Port OpenAI minimal et configuration server-only
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-02-01` |
+| **Type** | ENABLER |
+| **Epic** | EPIC-TB-02 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-00-06 |
+| **Gate Morris** | décision modèle OpenAI hors backlog courant |
+| **Source** | doc 102 ADR-ASST-SECRETS-01=A · FPI-10-B · impact 12 · TOPO=A SERVER=C |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | modèle OpenAI, endpoint OpenAI |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Introduire le Provider Port minimal OpenAI-only avec secrets/config server-only, sans modèle nommé.
+
+**Critères d’acceptation :**
+  - Le port est server-only ; aucune clé n’apparaît côté client.
+  - Aucun modèle OpenAI nommé n’est hardcodé dans le backlog/item.
+  - Les appels réels restent hors scope jusqu’à GO Delivery + sélection modèle.
+
+**Preuves attendues :**
+  - contrat port
+  - checklist anti-leak secrets
+
+**Hors périmètre :** appel OpenAI réel, sélection modèle, .env versionné
+
+#### TB-02-02 — Streaming progressif N1 uniquement
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-02-02` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-02 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-RESERVE |
+| **Dépendances** | TB-02-01 |
+| **Gate Morris** | fermeture/clarification réserves UX si surfaces UI touchées |
+| **Source** | doc 102 ADR-ASST-STREAM-01=A · SERVER=C · impact 9 · R-TECH-AF02-BOUNDARY-01 · réserves UX |
+| **Réserves liées** | R-TECH-AF02-BOUNDARY-01, R-UX-FPI-02, R-UX-FPI-03, R-UX-FPI-04, R-UX-04 |
+| **Non-sélections liées** | aucune |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Permettre le streaming N1 via frontière serveur hybride, sans streaming structurant N2/N3.
+
+**Critères d’acceptation :**
+  - N1 peut diffuser une réponse progressive jusqu’à complétion ou cancellation.
+  - N2/N3 ne reçoivent pas de chunks structurants partiels.
+  - Cancellation et erreurs sont auditables côté provider.
+
+**Preuves attendues :**
+  - tests streaming N1
+  - preuve absence streaming N2/N3
+
+**Hors périmètre :** protocole vendor imposé, WebSockets hors décision
+
+#### TB-02-03 — Sorties N2/N3 complètes validées via AJV
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-02-03` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-02 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-00-02, TB-02-01 |
+| **Gate Morris** | AJV fit confirmé |
+| **Source** | doc 102 VALIDATE-LIB=A · AF-02 · impacts 8,20 · R-TECH-AF02-BOUNDARY-01 |
+| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
+| **Non-sélections liées** | aucune |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Valider fail-closed les sorties structurées N2/N3 avec AJV avant exposition/consommation.
+
+**Critères d’acceptation :**
+  - Une sortie N2/N3 invalide est rejetée fail-closed.
+  - Une sortie valide passe la validation avant surface/consommation.
+  - Aucun streaming partiel N2/N3 n’est accepté.
+
+**Preuves attendues :**
+  - tests validation AJV
+  - cas négatifs schéma
+
+**Hors périmètre :** nouvelle lib de validation
+
+#### TB-02-04 — Erreurs provider et cancellation auditables
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-02-04` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-02 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | CANDIDATE |
+| **Dépendances** | TB-02-01, TB-03-04 |
+| **Gate Morris** | aucune |
+| **Source** | doc 102 STREAM=A · AUDIT-STORE=B · F-ARCH-02 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | aucune |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Normaliser erreurs provider et cancellation avec traces d’audit provider.
+
+**Critères d’acceptation :**
+  - Cancellation utilisateur/provider produit un enregistrement d’audit provider.
+  - Erreurs provider ne laissent pas d’état métier N2/N3 partiel consommé.
+  - N1 peut rester en mode dégradé selon HEALTH=C / FPI-15.
+
+**Preuves attendues :**
+  - tests erreurs/cancellation
+  - enregistrements audit provider
+
+**Hors périmètre :** retry policies cloud vendor
+
+#### TB-02-05 — Metering provider et soft cap (sans hard cap)
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-02-05` |
+| **Type** | NFR |
+| **Epic** | EPIC-TB-02 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-RESERVE |
+| **Dépendances** | TB-02-01, TB-03-04 |
+| **Gate Morris** | fermeture R-TECH-FINOPS-HARD-01 / Decision Pack hard cap |
+| **Source** | doc 102 FPI-14 soft · R-TECH-FINOPS-HARD-01 · impact metering |
+| **Réserves liées** | R-TECH-FINOPS-HARD-01 |
+| **Non-sélections liées** | hard cap FinOps, tarif, SLO |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Mesurer l’usage provider et appliquer soft cap ; hard cap reste différé avant pilote.
+
+**Critères d’acceptation :**
+  - Le metering enregistre les tentatives provider indépendamment du succès métier.
+  - Le soft cap est configurable Admin sans valeur inventée ici.
+  - Le hard cap n’est pas implémenté tant que DEFER-BEFORE-PILOT.
+
+**Preuves attendues :**
+  - tests soft cap
+  - preuve absence hard cap implicite
+
+**Hors périmètre :** tarifs, SLO, hard cap numérique
+
+#### TB-03-01 — Rôles Admin et Morris sur mécanisme auth existant étendu
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-03-01` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-03 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-00-01 |
+| **Gate Morris** | auth existante confirmée ou arbitrage dédié |
+| **Source** | doc 102 ADMIN-AUTHZ=B · impact 11 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie IAM |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Étendre l’auth existante avec rôles Admin et Morris distincts, contrôles serveur.
+
+**Critères d’acceptation :**
+  - Admin et Morris sont des rôles distincts côté serveur.
+  - Un spoofing client de rôle est rejeté.
+  - Aucun vendor IAM n’est introduit silencieusement.
+
+**Preuves attendues :**
+  - tests rôles
+  - tests anti-spoofing
+
+**Hors périmètre :** nouveau sous-système IAM (option C)
+
+#### TB-03-02 — AuthorityGate N3 serveur et consommation atomique
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-03-02` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-03 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-03-01, TB-01-05 |
+| **Gate Morris** | auth confirmée |
+| **Source** | doc 102 ADMIN-AUTHZ=B · F-ARCH-01 · impact 10 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | aucune |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Implémenter AuthorityGate N3 selon F-ARCH-01 : candidate → surface → GO Morris → gate → consommation atomique.
+
+**Critères d’acceptation :**
+  - Seul Morris peut consommer une décision N3 via gate serveur.
+  - Le provider ne génère/valide/consomme aucun GO.
+  - La consommation est atomique et idempotente.
+
+**Preuves attendues :**
+  - tests AuthorityGate
+  - preuve anti-provider-authority
+
+**Hors périmètre :** workflow externe BPM
+
+#### TB-03-03 — Administration serveur modèle / TTL / soft cap
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-03-03` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-03 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-RESERVE |
+| **Dépendances** | TB-03-01, TB-00-06 |
+| **Gate Morris** | fermeture/policy TTL ; modèle nommé hors item |
+| **Source** | doc 102 ADMIN-AUTHZ=B · FPI-08 CONFIG-ADMIN-NO-VALUE · R-TECH-TTL-01 |
+| **Réserves liées** | R-TECH-TTL-01, R-UX-04 |
+| **Non-sélections liées** | modèle OpenAI, valeur TTL |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Permettre à Admin de configurer modèle, TTL et soft cap côté serveur sans valeurs inventées.
+
+**Critères d’acceptation :**
+  - Admin peut lire/écrire la configuration autorisée serveur.
+  - TTL reste sans valeur numérique imposée par le backlog.
+  - Morris ≠ Admin pour N3.
+
+**Preuves attendues :**
+  - tests config Admin
+  - preuve TTL non hardcodé
+
+**Hors périmètre :** UI Figma nouvelle, sélection modèle dans cet item
+
+#### TB-03-04 — Lane d’audit provider transverse
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-03-04` |
+| **Type** | ENABLER |
+| **Epic** | EPIC-TB-03 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-01-01 |
+| **Gate Morris** | décision store (même tech physique possible) |
+| **Source** | doc 102 AUDIT-STORE=B · F-ARCH-02 · impact 6 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie store, vendor observabilité |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Enregistrer tentatives/usage provider dans une lane logique séparée avant/indépendamment du métier.
+
+**Critères d’acceptation :**
+  - Chaque tentative provider produit un enregistrement d’audit provider.
+  - L’échec métier n’empêche pas l’audit provider.
+  - La séparation logique provider/métier est vérifiable.
+
+**Preuves attendues :**
+  - tests audit provider
+  - schéma logique audit
+
+**Hors périmètre :** séparation physique obligatoire, vendor observability
+
+#### TB-03-05 — Lane d’audit métier séparée
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-03-05` |
+| **Type** | ENABLER |
+| **Epic** | EPIC-TB-03 |
+| **Priorité candidate** | **P1** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-03-04 |
+| **Gate Morris** | décision store |
+| **Source** | doc 102 AUDIT-STORE=B · impact 7 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | technologie store |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Maintenir l’audit métier distinct de l’audit provider (lane logique).
+
+**Critères d’acceptation :**
+  - Les événements métier N2/N3/AuthorityGate sont audités dans la lane métier.
+  - Les accès et redactions futurs sont préparés sans politique RGPD inventée.
+  - Pas de mélange d’enregistrements provider/métier.
+
+**Preuves attendues :**
+  - tests séparation lanes
+  - exemples d’événements
+
+**Hors périmètre :** rétention légale chiffrée sans décision
+
+#### TB-04-01 — Configuration TTL administrable sans valeur imposée
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-04-01` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-04 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-RESERVE |
+| **Dépendances** | TB-03-03 |
+| **Gate Morris** | fermeture R-TECH-TTL-01 / policy TTL |
+| **Source** | doc 102 R-TECH-TTL-01 · FPI-08-TTL-DURATION=CONFIG-ADMIN-NO-VALUE |
+| **Réserves liées** | R-TECH-TTL-01 |
+| **Non-sélections liées** | valeur TTL |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Exposer la configuration TTL Admin sans fixer FPI-08-TTL-DURATION.
+
+**Critères d’acceptation :**
+  - La config TTL est lisible/modifiable Admin côté serveur.
+  - Aucune durée TTL n’est hardcodée dans le backlog ni inventée.
+  - Les items purge référencent cette config.
+
+**Preuves attendues :**
+  - tests config TTL
+  - preuve absence valeur imposée
+
+**Hors périmètre :** job cron cloud vendor
+
+#### TB-04-02 — Purge hybride lazy + job avec coordination multi-instance
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-04-02` |
+| **Type** | FEATURE-TECH |
+| **Epic** | EPIC-TB-04 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-01-01, TB-04-01 |
+| **Gate Morris** | décision store + policy TTL |
+| **Source** | doc 102 PURGE=C · impacts 5,19 · A2 multi-instance |
+| **Réserves liées** | R-TECH-TTL-01 |
+| **Non-sélections liées** | valeur TTL, technologie store |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Mettre en œuvre purge lazy sur accès + job planifié coordonné sous A2.
+
+**Critères d’acceptation :**
+  - Lazy purge s’exécute sur accès pertinents sans inventer TTL.
+  - Job de purge traite expirations/orphelins avec coordination multi-instance.
+  - Purge compatible audit et ne casse pas backup/restore.
+
+**Preuves attendues :**
+  - tests purge lazy
+  - tests job coordination
+
+**Hors périmètre :** durée TTL numérique, vendor scheduler imposé
+
+#### TB-04-03 — Rétention, redaction et compatibilité backup/restore
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-04-03` |
+| **Type** | NFR |
+| **Epic** | EPIC-TB-04 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-RESERVE |
+| **Dépendances** | TB-03-05, TB-01-06, TB-04-02 |
+| **Gate Morris** | décisions rétention futures ; R-UX si UI |
+| **Source** | doc 102 AUDIT-STORE=B · RGPD pending · impact 14 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | aucune |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Préparer rétention/redaction audit et compatibilité purge↔backup sans inventer durées RGPD.
+
+**Critères d’acceptation :**
+  - Procédures de redaction/rétention sont documentées comme candidates.
+  - Un restore après purge ne réintroduit pas silencieusement des données hors politique (critère à tester).
+  - Aucune durée légale inventée.
+
+**Preuves attendues :**
+  - DOC rétention/redaction
+  - tests restore/purge
+
+**Hors périmètre :** outil DLP vendor
+
+#### TB-04-04 — Decision Pack hard cap FinOps avant pilote
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-04-04` |
+| **Type** | DECISION-PREP |
+| **Epic** | EPIC-TB-04 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | READY-FOR-DECISION |
+| **Dépendances** | TB-02-05 |
+| **Gate Morris** | décision Morris hard cap avant pilote |
+| **Source** | doc 102 FPI-14-HARD-CAP=DEFER-BEFORE-PILOT · R-TECH-FINOPS-HARD-01 |
+| **Réserves liées** | R-TECH-FINOPS-HARD-01 |
+| **Non-sélections liées** | hard cap FinOps, tarif |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Préparer le Decision Pack hard cap FinOps (FPI-14) sans fixer de seuil.
+
+**Critères d’acceptation :**
+  - Options de politique hard cap sont comparées sans valeur numérique inventée.
+  - Lien explicite soft cap / metering / pilote est tracé.
+  - La réserve R-TECH-FINOPS-HARD-01 reste OPEN jusqu’à décision Morris.
+
+**Preuves attendues :**
+  - Decision Pack FinOps hard cap candidat
+
+**Hors périmètre :** seuil inventé, tarification
+
+#### TB-05-01 — Liveness minimale et readiness interne/store
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-05-01` |
+| **Type** | OPS |
+| **Epic** | EPIC-TB-05 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-01-01 |
+| **Gate Morris** | décision store ; format endpoint non sélectionné |
+| **Source** | doc 102 HEALTH=C · impact 13 · A2 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | format health, vendor observabilité |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Exposer liveness et readiness des dépendances internes/store ; provider non bloquant hors scope ici.
+
+**Critères d’acceptation :**
+  - Liveness répond sans dépendre du provider.
+  - Readiness reflète store/dépendances internes.
+  - Aucune information sensible n’est exposée.
+
+**Preuves attendues :**
+  - contrat health
+  - tests readiness store down
+
+**Hors périmètre :** format endpoint imposé, vendor APM
+
+#### TB-05-02 — Probe provider optionnelle et modes N1 dégradé / N2-N3 fail-closed
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-05-02` |
+| **Type** | NFR |
+| **Epic** | EPIC-TB-05 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | CANDIDATE |
+| **Dépendances** | TB-05-01, TB-02-01 |
+| **Gate Morris** | aucune |
+| **Source** | doc 102 HEALTH=C · FPI-15 · impacts 20–21 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | aucune |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Assurer probe provider non bloquante, N1 dégradé possible, N2/N3 fail-closed si provider requis indisponible.
+
+**Critères d’acceptation :**
+  - Provider down n’échoue pas nécessairement la liveness.
+  - N1 peut fonctionner en mode dégradé documenté.
+  - N2/N3 restent fail-closed sans provider requis.
+
+**Preuves attendues :**
+  - tests N1 dégradé
+  - tests N2/N3 fail-closed provider down
+
+**Hors périmètre :** SLO de disponibilité inventé
+
+#### TB-05-03 — Observabilité logs, métriques et corrélation sans données sensibles
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-05-03` |
+| **Type** | OPS |
+| **Epic** | EPIC-TB-05 |
+| **Priorité candidate** | **P3** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | CANDIDATE |
+| **Dépendances** | TB-03-04, TB-05-01 |
+| **Gate Morris** | vendor observability NOT SELECTED |
+| **Source** | doc 102 observabilité · SECRETS=A · AUDIT=B |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | vendor observabilité |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Définir corrélation logs/métriques pour provider, audit et health sans fuite de secrets.
+
+**Critères d’acceptation :**
+  - Corrélation request/provider/audit est possible via identifiants non secrets.
+  - Aucun secret ni payload sensible n’apparaît dans les logs de preuve.
+  - Aucun vendor observability n’est imposé.
+
+**Preuves attendues :**
+  - checklist anti-leak
+  - exemple corrélation
+
+**Hors périmètre :** Datadog/etc. sélection
+
+#### TB-06-01 — Tests concurrence, multi-instance et perte/redémarrage d’instance
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-06-01` |
+| **Type** | QA |
+| **Epic** | EPIC-TB-06 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-01-04, TB-01-05, TB-01-06 |
+| **Gate Morris** | store/plateforme pour exécution réelle |
+| **Source** | doc 102 impacts 16–18 · A2 |
+| **Réserves liées** | aucune |
+| **Non-sélections liées** | plateforme cloud, nombre d’instances |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Prouver le comportement A2 sous concurrence, multi-instance et restart.
+
+**Critères d’acceptation :**
+  - Suite de tests concurrence PASS/FAIL déterministe.
+  - Scénario multi-instance documenté et exécutable quand environnement dispo.
+  - Restart/loss d’instance ne perd pas l’état durable externe.
+
+**Preuves attendues :**
+  - rapport tests
+  - scénarios
+
+**Hors périmètre :** charge prod, chaos cloud vendor
+
+#### TB-06-02 — Tests purge et sauvegarde/restauration
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-06-02` |
+| **Type** | QA |
+| **Epic** | EPIC-TB-06 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-DECISION |
+| **Dépendances** | TB-04-02, TB-01-06, TB-04-03 |
+| **Gate Morris** | policy TTL + store |
+| **Source** | doc 102 impacts 14,19 · PURGE=C |
+| **Réserves liées** | R-TECH-TTL-01 |
+| **Non-sélections liées** | valeur TTL |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Valider purge hybride et backup/restore Project.
+
+**Critères d’acceptation :**
+  - Tests purge lazy et job couvrent orphelins/expirations sans TTL inventé (fixtures contrôlées).
+  - Backup puis restore restaure l’état attendu.
+  - Interaction purge/restore est couverte par au moins un cas négatif.
+
+**Preuves attendues :**
+  - rapport tests purge/backup
+
+**Hors périmètre :** TTL numérique de production
+
+#### TB-06-03 — Tests N1 dégradé, N2/N3 fail-closed, AuthorityGate et audit
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-06-03` |
+| **Type** | QA |
+| **Epic** | EPIC-TB-06 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | CANDIDATE |
+| **Dépendances** | TB-02-03, TB-02-04, TB-03-02, TB-03-04, TB-03-05, TB-05-02 |
+| **Gate Morris** | aucune |
+| **Source** | doc 102 impacts 6–7,10,20–21 · F-ARCH-01/02 |
+| **Réserves liées** | R-TECH-AF02-BOUNDARY-01 |
+| **Non-sélections liées** | aucune |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Valider modes dégradé/fail-closed, AuthorityGate et lanes d’audit.
+
+**Critères d’acceptation :**
+  - N1 dégradé et N2/N3 fail-closed ont des cas PASS/FAIL.
+  - AuthorityGate refuse non-Morris et double consommation.
+  - Audit provider et métier sont vérifiés séparément.
+
+**Preuves attendues :**
+  - rapport QA governance
+
+**Hors périmètre :** pentest externe
+
+#### TB-06-04 — Vérification sécurité, RGPD, FinOps et readiness pilote
+
+| Champ | Valeur |
+|---|---|
+| **ID** | `TB-06-04` |
+| **Type** | QA |
+| **Epic** | EPIC-TB-06 |
+| **Priorité candidate** | **P2** — CANDIDATE PRIORITY — MORRIS VALIDATION REQUIRED |
+| **Statut** | BLOCKED-BY-RESERVE |
+| **Dépendances** | TB-04-04, TB-06-01, TB-06-02, TB-06-03, TB-05-03 |
+| **Gate Morris** | hard cap + TTL policy + décisions store/plateforme |
+| **Source** | doc 102 prérequis pilote · R-TECH-FINOPS-HARD-01 · RGPD pending |
+| **Réserves liées** | R-TECH-FINOPS-HARD-01, R-TECH-TTL-01 |
+| **Non-sélections liées** | hard cap FinOps, valeur TTL |
+| **Delivery** | NOT AUTHORIZED |
+
+**Objectif :** Pack de vérification pré-pilote : sécurité, RGPD, FinOps hard, critères pilote.
+
+**Critères d’acceptation :**
+  - Checklist sécurité (secrets, authz, anti-spoofing) a un verdict.
+  - Checklist RGPD (purge/rétention/redaction) a un verdict sans durée inventée.
+  - Pilote bloqué tant que hard cap FinOps et TTL policy non décidés.
+
+**Preuves attendues :**
+  - rapport readiness pilote
+  - matrice gates
+
+**Hors périmètre :** certification ISO, audit légal externe
+
+---
+
+
+## Annexe — Couverture des 21 impacts document 102
+
+| # | Impact | Items | Statut |
+|---|---|---|---|
+| 1 | abstraction persistance externe | TB-01-01 | COVERED |
+| 2 | modèle données Project | TB-01-02 | COVERED |
+| 3 | transactions / unicité | TB-01-03 · TB-01-04 | COVERED |
+| 4 | idempotence N2/N3 | TB-01-05 | COVERED |
+| 5 | coordination purge | TB-04-02 | COVERED |
+| 6 | audit provider | TB-03-04 | COVERED |
+| 7 | audit métier | TB-03-05 | COVERED |
+| 8 | validation AJV | TB-00-02 · TB-02-03 | COVERED |
+| 9 | streaming N1 | TB-02-02 | COVERED |
+| 10 | AuthorityGate | TB-03-02 | COVERED |
+| 11 | rôles Admin/Morris | TB-03-01 | COVERED |
+| 12 | configuration server-only | TB-00-06 · TB-02-01 | COVERED |
+| 13 | health/readiness | TB-05-01/02 | COVERED |
+| 14 | sauvegarde/restauration | TB-01-06 · TB-06-02 | COVERED |
+| 15 | migrations | TB-00-04 · TB-01-06 | COVERED |
+| 16 | tests concurrence | TB-06-01 | COVERED |
+| 17 | tests multi-instance | TB-06-01 | COVERED |
+| 18 | tests perte/redémarrage | TB-06-01 | COVERED |
+| 19 | tests purge | TB-06-02 | COVERED |
+| 20 | tests fail-closed N2/N3 | TB-06-03 | COVERED |
+| 21 | tests mode dégradé N1 | TB-06-03 · TB-05-02 | COVERED |
+
+## 18. Matrice de traçabilité Architecture / ADR → items
+
+| Décision | Conséquence | Items | Couverture |
+|---|---|---|---|
+| D-ASST-ARCH-VALIDATION-01=B | cible technique WITH RESERVES | tous · TB-06-04 | COVERED |
+| ARCH-BUNDLE=A2 | store externe · concurrence · no-embedded | TB-00-03/05 · TB-01-* · TB-06-01 | COVERED |
+| ADR-ASST-TOPO-01=A | monolithe modulaire Next.js | TB-02-01 · TB-03-* (server) | COVERED |
+| ADR-ASST-PERSIST-01=B | store externe | TB-00-03/04 · TB-01-* | COVERED |
+| ADR-ASST-SERVER-01=C | hybride Actions/Handlers | TB-02-02 · TB-05-01 | COVERED |
+| ADR-ASST-PURGE-01=C | purge hybride | TB-04-01/02 · TB-06-02 | COVERED |
+| ADR-ASST-AUDIT-STORE-01=B | lanes logiques | TB-03-04/05 · TB-06-03 | COVERED |
+| ADR-ASST-STREAM-01=A | streaming N1 only | TB-02-02/03 · TB-06-03 | COVERED |
+| ADR-ASST-VALIDATE-LIB-01=A | AJV | TB-00-02 · TB-02-03 | COVERED |
+| ADR-ASST-SECRETS-01=A | env server-only | TB-00-06 · TB-02-01 | COVERED |
+| ADR-ASST-ADMIN-AUTHZ-01=B | Admin/Morris + gate | TB-00-01 · TB-03-01/02/03 | COVERED |
+| ADR-ASST-HEALTH-01=C | liveness/readiness/probe | TB-05-01/02 · TB-06-03 | COVERED |
+
+**Gaps :** aucun gap silencieux.
+
+---
+
+## 19. Matrice de traçabilité réserves → items
+
+| Réserve | Items | Note |
+|---|---|---|
+| R-TECH-TTL-01 | TB-00-06 · TB-03-03 · TB-04-01/02 · TB-06-02/04 | KEEP-OPEN |
+| R-TECH-FINOPS-HARD-01 | TB-02-05 · TB-04-04 · TB-06-04 | KEEP-OPEN |
+| R-TECH-AF02-BOUNDARY-01 | TB-00-02 · TB-02-02/03 · TB-06-03 | KEEP-OPEN |
+| R-UX-FPI-02/03/04 · R-UX-04 | TB-02-02 · TB-03-03 | BLOCKED OR LIMITED BY OPEN UX RESERVE sur surfaces UI |
+
+Aucune réserve fermée.
+
+---
+
+## 20. Matrice de dépendances (synthèse)
+
+TB-00-* → TB-01-* → TB-02-* → TB-03-* → TB-04-* → TB-05-* → TB-06-*
+
+Points durs : TB-00-03/04 bloquent TB-01-* · TB-00-01 bloque TB-03-01 · TB-00-02 bloque TB-02-03 · TB-04-04 bloque readiness pilote TB-06-04.
+
+---
+
+## 21. Ordre de réalisation candidat
+
+Phase 0 Decisions (TB-00-*) · Phase 1 Persistence (TB-01-*) · Phase 2 Assistant (TB-02-*) · Phase 3 Governance (TB-03-*) · Phase 4 Lifecycle (TB-04-* + TB-05-*) · Phase 5 Pilot QA (TB-06-*).
+
+**CANDIDATE — MORRIS VALIDATION REQUIRED**
+
+---
+
+## 22. Lots candidats
+
+### LOT-IP-0 — Implementation Preparation
+Items : TB-00-01 … TB-00-06 · TB-04-04 · Nature DOC/DECISION-PREP · **aucun code** · Objectif : borner décisions bloquantes.
+
+### LOT-D1 — A2 Persistence Foundation
+Items TB-01-* · **NOT AUTHORIZED** · requiert décisions store/data-access.
+
+### LOT-D2 — Assistant Core N1
+Items TB-02-01/02/04 · **NOT AUTHORIZED**.
+
+### LOT-D3 — Structured N2/N3 and Authority
+Items TB-02-03 · TB-03-* · **NOT AUTHORIZED**.
+
+### LOT-D4 — Lifecycle, Audit and Operations
+Items TB-04-01/02/03 · TB-05-* · compléments audit · **NOT AUTHORIZED**.
+
+### LOT-D5 — Pilot Hardening
+Items TB-02-05 · TB-06-* · **NOT AUTHORIZED**.
+
+Aucun lot sélectionné par Morris dans ce cycle.
+
+---
+
+## 23. Chemin critique
+
+Auth inventaire (TB-00-01) + Store decision (TB-00-03) + AJV fit (TB-00-02) → Persistence port (TB-01-01) → Provider (TB-02-01) → AuthorityGate (TB-03-02) → Purge/Health → QA pilote (TB-06-04) bloquée par hard cap/TTL.
+
+---
+
+## 24. Items bloqués par décision
+
+| Item | Blocage |
+|---|---|
+| TB-01-* | store / data-access |
+| TB-02-03 | AJV fit |
+| TB-03-01/02 | auth existante |
+| TB-04-02 · TB-06-02 | store + TTL policy |
+| TB-05-01 · TB-06-01 | store/plateforme exécution |
+| TB-06-04 | hard cap + TTL + store/plateforme |
+
+Statuts : **BLOCKED BY FUTURE MORRIS DECISION** / **IMPLEMENTATION-PREPARATION REQUIRED**.
+
+---
+
+## 25. Items prérequis avant pilote
+
+TB-00-* (décisions) · TB-01-06 backup/restore · TB-04-02/04 · TB-05-02 · TB-06-01…04 · fermeture ou arbitrage explicite réserves TTL/FinOps.
+
+---
+
+## 26. Critères de passage vers Delivery
+
+Avant tout GO Delivery du premier lot technique :
+
+- backlog validé ChatGPT ;
+- priorités validées Morris ;
+- lot sélectionné Morris ;
+- store sélectionné si requis ;
+- migration strategy sélectionnée ;
+- auth existante confirmée ou arbitrage ;
+- AJV fit confirmé ;
+- fichiers Delivery bornés ;
+- tests attendus définis ;
+- réserves bloquantes identifiées ;
+- cohérence 93/97/99/102.
+
+Ces critères **ne consomment pas** Delivery.
+
+---
+
+## 27. Risques et incertitudes
+
+Auth absente (README P0) · store non choisi · AJV fit non prouvé · réserves UX sur surfaces · FinOps hard / TTL ouverts · fixtures-only aujourd’hui (écart backend).
+
+---
+
+## 28. Non-sélections
+
+Store tech/fournisseur · cloud · hébergeur · région · instances · ORM · migration tool · IAM · observability · modèle/endpoint OpenAI · TTL · hard cap · SLO · tarifs · schéma physique · IaC — **NOT SELECTED — FUTURE DEDICATED DECISION OR IMPLEMENTATION-PREPARATION GATE REQUIRED**.
+
+---
+
+## 29. Actions autorisées
+
+Créer 103 · dériver items · proposer priorités/lots · tracer · publier handoff.
+
+---
+
+## 30. Actions interdites
+
+Modifier 90–102 · créer 104 · code · app/** · packages · migration · endpoint · .env · sélection techno · Delivery · fermer réserve · commit/push projet · PR/merge.
+
+---
+
+## 31. Anti-claims
+
+Pas Delivery Ready · pas de lot sélectionné · pas de techno choisie · pas de code · pas de backend créé · pas de persist déployée · pas production-ready · sécurité/RGPD/FinOps non validés · réserves ouvertes · pas PR/merge.
+
+---
+
+## 32. Verdict
+
+**TECHNICAL IMPLEMENTATION BACKLOG DERIVED —**
+**BACKLOG GATE CONSUMED BY MORRIS —**
+**APPLIED A2 ARCHITECTURE AND TEN ADR FULLY TRACED —**
+**ALL TWENTY-ONE CANDIDATE BACKLOG IMPACTS COVERED OR EXPLICITLY BLOCKED —**
+**33 TESTABLE ITEMS ACROSS 7 EPICS DOCUMENTED —**
+**PRIORITIES AND LOTS REMAIN CANDIDATE UNTIL MORRIS VALIDATION —**
+**EXTERNAL DURABLE STORE REMAINS REQUIRED —**
+**STORE TECHNOLOGY, CLOUD PLATFORM, ORM, IAM VENDOR, OBSERVABILITY VENDOR AND OPENAI MODEL REMAIN UNSELECTED —**
+**ALL EXISTING RESERVES REMAIN OPEN —**
+**TTL VALUE REMAINS UNSELECTED —**
+**FINOPS HARD CAP REMAINS DEFERRED BEFORE PILOT —**
+**DOCUMENT 103 CREATED — DOCUMENTS 90–102 UNCHANGED —**
+**NO DOCUMENT 104 — NO CODE — DELIVERY GATE NOT CONSUMED —**
+**READY FOR CHATGPT VALIDATION AND MORRIS BACKLOG PRIORITIZATION DECISION**
+
+---
+
+## 33. Prochaine gate candidate
+
+```text
+GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
+```
+
+Statut : **candidate uniquement — non consommée**.
+
+**TECHNICAL BACKLOG DOCUMENTED — MORRIS PRIORITIZATION AND FIRST LOT DECISION REQUIRED — DELIVERY NOT CONSUMED**
```````

---

## 40. SHA-256 et lignes du diff

| Item | Valeur |
|---|---|
| SHA-256 | `58829637b94e2be20810659e49d2814914b6678c02356ef028b73e00e0fab664` |
| Lignes | 1343 |
| Bytes | 52481 |
| no-index | exit 1 · check exit 1 · 0 whitespace diagnostics · **PASS** |
| Représentation | **RAW** |

---

## 41. Documents 90 à 102 inchangés

PASS.

---

## 42. Absence document 104

PASS.

---

## 43. Absence app/**

PASS.

---

## 44. Absence package/lockfile

PASS.

---

## 45. Absence code

PASS.

---

## 46. Absence technologie sélectionnée

PASS.

---

## 47. Absence modèle OpenAI sélectionné

PASS.

---

## 48. Absence commit/push projet

PASS.

---

## 49. git diff --check

```text
DIFF_CHECK_EXIT:0
```

---

## 50. FINAL PROJECT TRUTH BEFORE HANDOFF PUBLICATION

```text
FINAL PROJECT TRUTH BEFORE HANDOFF PUBLICATION
2026-08-05 14:11:35 CEST +0200
2026-08-05 12:11:35 UTC
BRANCH=backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog
HEAD=8dc54db0069eed78a8d8930cc2b035450ab56ad1
ORIGIN_MAIN=8dc54db0069eed78a8d8930cc2b035450ab56ad1
MERGE_BASE=8dc54db0069eed78a8d8930cc2b035450ab56ad1
AHEAD=0
BEHIND=0
--- status --short ---
?? .tmp-sfia-review/
?? projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
?? projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
?? projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
?? projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
?? projects/sfia-studio/90-assistant-sfia-native-openai-first-product-increment-framing.md
?? projects/sfia-studio/91-assistant-sfia-native-openai-first-product-increment-functional-architecture.md
?? projects/sfia-studio/92-assistant-sfia-native-openai-functional-architecture-decision-pack.md
?? projects/sfia-studio/93-assistant-sfia-native-openai-functional-architecture-decisions-applied.md
?? projects/sfia-studio/94-assistant-sfia-native-openai-ux-ui-contract.md
?? projects/sfia-studio/95-assistant-sfia-native-openai-ux-ui-flows-and-states.md
?? projects/sfia-studio/96-assistant-sfia-native-openai-ux-ui-decision-pack.md
?? projects/sfia-studio/97-assistant-sfia-native-openai-ux-ui-decisions-applied.md
?? projects/sfia-studio/98-assistant-sfia-native-openai-technical-prerequisites-decision-pack.md
?? projects/sfia-studio/99-assistant-sfia-native-openai-technical-prerequisites-decisions-applied.md
?? projects/sfia-studio/app/.tmp-sfia-review/
--- diff name-status ---
--- cached ---
--- diff-check ---
DIFF_CHECK_EXIT:0
--- worktree list --porcelain ---
worktree /Users/morris/Projects/sfia-workspace
HEAD e1befcb80ed5e3c789a7de9036a8207d6b3e6771
branch refs/heads/delivery/eventops-poc-visible-slice-01

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-a5-2-framing
HEAD bd3608c6220e820cc3fa017422a7564a565a1296
branch refs/heads/framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-doc32-post-p3-m1
HEAD dd2a68c6a1e45fee1e1f397cb644c2c082a3d877
branch refs/heads/docs/sfia-studio-doc32-post-p3-m1-correction

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-fa6-mitigated-clean
HEAD 67f140a19cf4a992dbc0d7b053abfde579a9a68c
branch refs/heads/docs/sfia-studio-fa6-mitigated-from-main

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe
HEAD f0f0e0f5efdd21dc0207736f9c0cce1c563f1a23
branch refs/heads/qa/sfia-studio-m1-bypass-probe

worktree /Users/morris/Projects/sfia-workspace-m1-bypass-probe-revert
HEAD b502c0069f836a729090bdc187dd98a0c26591ca
branch refs/heads/qa/sfia-studio-m1-bypass-probe-revert

worktree /Users/morris/Projects/sfia-workspace-m1-capitalization
HEAD fa0eebe00ce3b765a8a486aa660dddfab40123a0
branch refs/heads/docs/sfia-studio-m1-capitalization-rex

worktree /Users/morris/Projects/sfia-workspace-option-a-after-t-a6
HEAD aef7fd6d5a678857cf36e490f1550866d47c8887
branch refs/heads/framing/sfia-studio-v3-native-option-a-after-t-a6

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance
HEAD 2f9560534e285c5b8105f81dca39c5252667860c
branch refs/heads/delivery/sfia-studio-v3-native-option-a-ci-merge-governance

worktree /Users/morris/Projects/sfia-workspace-option-a-ci-governance-docs
HEAD a42a85c0c0b3e146e59f82ea753329ed9253f278
branch refs/heads/docs/sfia-studio-option-a-ci-governance-post-merge

worktree /Users/morris/Projects/sfia-workspace-option-a-path-aware-required-check
HEAD 9f03916243c470587f6958e058fd58909e5bd75a
branch refs/heads/delivery/sfia-studio-v3-native-option-a-path-aware-required-check-preparation

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher

worktree /Users/morris/Projects/sfia-workspace-shared-platform-delivery
HEAD 08c282abafd97685bcc0b7e525ec96e6721ec589
branch refs/heads/delivery/sfia-studio-shared-technical-platform

worktree /Users/morris/Projects/sfia-workspace-t-a6-post-merge
HEAD 1f2585712e460b4ba6267d9e520cd0fd3cea6d3e
branch refs/heads/post-merge/sfia-studio-v3-native-option-a-t-a6

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-arbitration
HEAD 6849b6f7530310ae669a5bd2e4f4a3f3323ccda6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-f03-f11-f13-arbitration

worktree /Users/morris/Projects/sfia-workspace-t-a7-f03-f11-f13-readme-post-merge
HEAD 960c90b32b2c1c5701a668b0ebc70fdd847c681b
branch refs/heads/docs/sfia-studio-t-a7-f03-f11-f13-readme-post-merge-status

worktree /Users/morris/Projects/sfia-workspace-t-a7-framing
HEAD b7a5e827fddb7e80f03a71b3b64ca89271ede0a6
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-cutover-preconditions

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge
HEAD 08d6cd0dd1503a7f261bf1fe527dba782d8f27ed
detached

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-d2-d1
HEAD 8dc54db0069eed78a8d8930cc2b035450ab56ad1
branch refs/heads/backlog/sfia-studio-assistant-sfia-native-openai-technical-implementation-backlog

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/main-post-merge
HEAD 52c1d753ee890daf04a80ba37b11c6bf077dc307
branch refs/heads/backlog/sfia-studio-v3-1-d2-d-integration-foundation

worktree /Users/morris/Projects/sfia-workspace-t-a7-next-decision
HEAD 33ea3e87facc8c99c9c5619d6d2424030d3918a2
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-next-decision-step

worktree /Users/morris/Projects/sfia-workspace-t-a7-technical-readiness
HEAD b6a19335f5116940175f5986492e3693722563bc
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-technical-readiness

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-decisions
HEAD f89ba5fb6cfca4e3de97667d944569a20266a8aa
branch refs/heads/record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions

worktree /Users/morris/Projects/sfia-workspace-t-a7-wave-1-legacy-scope
HEAD 4fad47f72a7d6cde655d98a64351bb4624ed9ad1
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope

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
HEAD 0b696ed970823aa75d013336e44e72de08f2ac57
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
HEAD 79767e64e3e97ffeaa2e87f7dc49bec011b5fb17
branch refs/heads/sfia/review-handoff

ORIGIN_HANDOFF=79767e64e3e97ffeaa2e87f7dc49bec011b5fb17
9244ec46bc7b0ea212c03f1e59f05f80521e87c6a8e27c07de801e10b8e2cc20  projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
698d1e0388cbf2f93b7ae0c983ee66d84a50e4143fd79b4ec92f23ea9918d114  projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
b5e06cd6cb0f74c3278afc041f22a27bd39f5bcbac54fa851a952b4c810577b1  projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
19d76b1598134410fd5a24e363c0d29790df1946759d531f4bd51986474c87f9  projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
    1432 projects/sfia-studio/100-assistant-sfia-native-openai-technical-architecture.md
    1164 projects/sfia-studio/101-assistant-sfia-native-openai-technical-architecture-decision-pack.md
     774 projects/sfia-studio/102-assistant-sfia-native-openai-technical-architecture-decisions-applied.md
    1337 projects/sfia-studio/103-assistant-sfia-native-openai-technical-implementation-backlog.md
```

---

## 51. Publisher dry-run

```text
COMMAND:
./scripts/sfia/publish-review-handoff.sh --source .tmp-sfia-review/chatgpt-review.md --commit-message "docs(review-handoff): publish Assistant SFIA technical implementation backlog" --handoff-worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff --dry-run
OUTPUT:
HANDOFF DRY-RUN OK — NO MUTATION
canonical_path=sfia-review-handoff/latest-chatgpt-review.md
blob=009ae99edf3fb414151f1d6647f089a24a4a7b0a
DRY_EXIT:0
```

---

## 52. Worktree handoff propre après dry-run

```text
HEAD=79767e64e3e97ffeaa2e87f7dc49bec011b5fb17
ORIGIN=79767e64e3e97ffeaa2e87f7dc49bec011b5fb17

Interprétation : HEAD inchangé · origin = 79767e64… · status propre · **PASS**
```

---

## 53. Review Handoff

| Champ | Valeur |
|---|---|
| Parent attendu | `79767e64e3e97ffeaa2e87f7dc49bec011b5fb17` |
| Message | `docs(review-handoff): publish Assistant SFIA technical implementation backlog` |
| AF-04=B | mono-commit · mono-fichier · FF · tip/blob externes |

---

## 54. Verdict

**TECHNICAL IMPLEMENTATION BACKLOG DERIVED —**
**BACKLOG GATE CONSUMED BY MORRIS —**
**33 ITEMS / 7 EPICS — 21 IMPACTS COVERED —**
**PRIORITIES AND LOTS CANDIDATE — DELIVERY NOT CONSUMED —**
**DOCUMENT 103 CREATED — 90–102 UNCHANGED —**
**READY FOR CHATGPT VALIDATION AND MORRIS BACKLOG PRIORITIZATION DECISION**

---

## 55. Prochaine gate candidate

```text
GO DECISIONS BACKLOG SFIA STUDIO — ASSISTANT SFIA NATIF OPENAI — VALIDATE TECHNICAL BACKLOG PRIORITIES AND SELECT FIRST IMPLEMENTATION-PREPARATION LOT
```

**TECHNICAL BACKLOG DOCUMENTED — MORRIS PRIORITIZATION AND FIRST LOT DECISION REQUIRED — DELIVERY NOT CONSUMED**

---

## 56. Instruction ChatGPT finale

Consulter tip/blob **externes** du rapport Cursor sur `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`, puis vérifier document 103 intégral, GO Backlog, granularité, traçabilité A2/ADR, 21 impacts, réserves, non-sélections, dépendances, priorités candidates, lots, Delivery NOT-CONSUMED, diff et vérité Git — avant priorité, lot, techno, Delivery ou implémentation.
