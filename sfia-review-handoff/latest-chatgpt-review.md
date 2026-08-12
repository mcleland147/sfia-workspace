# SFIA Studio Convergence — Cycle 13 PR Creation

| Champ | Valeur |
| --- | --- |
| **Horodatage** | 2026-08-13 01:56:28 +0200 (Europe/Paris) |
| **Cycle** | 13 — PR readiness / publication |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Review pack** | FULL (synthesis-only = **NO**) |
| **Décision Morris consommée** | GO PUSH + CREATE PR |

---

## 0. Verdict

**PR CREATED — REMOTE PATCH VERIFIED — SFIA STUDIO CONVERGENCE READY FOR FINAL PR READINESS — MORRIS MERGE GATE STILL REQUIRED**

Merge performed = **NO**.

---

## 1. Local Git Truth

| Champ | Valeur |
| --- | --- |
| Worktree | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-convergence-foundations` |
| Branch | `docs/sfia-studio-convergence-foundations` |
| HEAD | `da0618db8ce8dd6f1d7e98f8e207f7e169811d17` |
| Parent | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| origin/main (avant push) | `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| Staged | EMPTY |
| Status | uniquement `?? .tmp-sfia-review/` |

```
?? .tmp-sfia-review/

```

---

## 2. Handoff entrant

| Champ | Valeur |
| --- | --- |
| Tip | `fbff9c660cddc20e92f3ea10678e8f65e0ce392b` |
| Blob | `3f062cebbd916cf0b3c80072e579f931c9c0cd94` |
| Verdict | READY FOR MORRIS PUSH / PR GATE |

---

## 3. Push

| Champ | Valeur |
| --- | --- |
| Remote branch avant | **ABSENTE** (Cas A) |
| Commande | `git push -u origin docs/sfia-studio-convergence-foundations` (sans force) |
| Remote SHA après | `da0618db8ce8dd6f1d7e98f8e207f7e169811d17` |
| ls-remote | `da0618db8ce8dd6f1d7e98f8e207f7e169811d17` |
| Identité | **PASS** |

---

## 4. Pull Request

| Champ | Valeur |
| --- | --- |
| Number | **334** |
| URL | https://github.com/mcleland147/sfia-workspace/pull/334 |
| Title | docs(sfia-studio): add convergence doctrine and roadmap |
| State | OPEN |
| Base | `main` |
| Head | `docs/sfia-studio-convergence-foundations` |
| Head SHA | `da0618db8ce8dd6f1d7e98f8e207f7e169811d17` |
| Commits | **1** |
| Changed files | **6** |
| Additions | **648** |
| Deletions | **10** |
| Merge performed | **NO** |

### Exact file list

1. method/sfia-fast-track/core/sfia-cycle-routing-guide.md (modified)
2. method/sfia-fast-track/core/sfia-knowledge-layer.md (modified)
3. projects/sfia-studio/README.md (modified)
4. projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md (created)
5. projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md (created)
6. prompts/templates/sfia-cycle-execution-template.md (modified)

app/** = **0**

---

## 5. Patch / anti-claims

| Check | Résultat |
| --- | --- |
| Patch identity vs validated commit | **PASS** |
| A sha256 | `be306b6e2277e928876cfeebbd018ed4ba0b1166463fba34282968741b326bc9` |
| B sha256 | `898d01efbde1a8facef75bc51590b610bfe0e505bc0bfd86c5bcde3ffb1336a6` |
| 2 created + 4 modified | **PASS** |
| Anti-claims (NON ADOPTED / NOT DECIDED / NOT_SELECTED) | **PASS** |
| git diff --check | **PASS** |

---

## 6. Worktrees BEFORE handoff publish

```
=== BEFORE HANDOFF ===
Thu Aug 13 01:56:27 CEST 2026
worktree /Users/morris/Projects/sfia-workspace
HEAD 0cdf57a12843891da8b8db2d550cb38c7ba9f60a
branch refs/heads/delivery/flex-office-demo-option-a

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
HEAD 4e4db74f744718b6dd1e9842d48e912e8eff4870
detached

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-t0-103-section-33-requalification
HEAD 4e4db74f744718b6dd1e9842d48e912e8eff4870
detached

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/delivery-t0-103-section-33-requalification-clean
HEAD 489605cb2f2bd7c5db7174af2bc94715f1d3a8e1
branch refs/heads/delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t0-operational-backlog-103-section-33-requalification-clean

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/main-post-merge
HEAD 52c1d753ee890daf04a80ba37b11c6bf077dc307
branch refs/heads/backlog/sfia-studio-v3-1-d2-d-integration-foundation

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-execution-pack
HEAD 8dc54db0069eed78a8d8930cc2b035450ab56ad1
detached

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-execution-pack-clean
HEAD 8dc54db0069eed78a8d8930cc2b035450ab56ad1
detached

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack
HEAD e1e00df244aa78a063bf2abf21f69325e1036f3a
detached

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t1-pack/.tmp-sfia-review/worktrees/finops-t6-post-t2-probe
HEAD e1e00df244aa78a063bf2abf21f69325e1036f3a
detached

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main
HEAD 4b1a058050ae81d56cb6d96b88e8a57380799a86
branch refs/heads/main

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-hard-prerequisites
HEAD 4b1a058050ae81d56cb6d96b88e8a57380799a86
branch refs/heads/framing/sfia-studio-f3-real-hard-prerequisites

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f3-real-prerequisites-delivery
HEAD 4b1a058050ae81d56cb6d96b88e8a57380799a86
branch refs/heads/delivery/sfia-studio-f3-real-prerequisites

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-convergence-foundations
HEAD da0618db8ce8dd6f1d7e98f8e207f7e169811d17
branch refs/heads/docs/sfia-studio-convergence-foundations

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t3-preparation
HEAD 2641263b9e9ef7336a4a2ac7824c13bb928f5199
branch refs/heads/delivery/sfia-studio-assistant-sfia-native-openai-finops-t3-alert-morris-review-state

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t4-preparation
HEAD fdc60f4c575715284f0047e6b97b5ccdbcbc8ae6
branch refs/heads/delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-s30-soft-enforcement-foundation

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t4-projection-refresh
HEAD 95cb95cdd1c99a5dfc3f45ffaec43bf8e318aa3b
branch refs/heads/delivery/sfia-studio-assistant-sfia-native-openai-finops-t4-projection-refresh

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation
HEAD 093fd91632d4c7ba1b6c4e707a8fb46fa2f08f2c
branch refs/heads/delivery/sfia-studio-assistant-sfia-native-openai-finops-technical-lot-t6-foundation-audit

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-foundation-post-t2-delivery
HEAD 3931a82eadb101d01ba10a5efa135dfbd10f6cf2
branch refs/heads/delivery/sfia-studio-assistant-sfia-native-openai-finops-t6-foundation-post-t2-integration

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t6-runtime-composition
HEAD 40cbff6aba59cbc224de1b845e61c7d12a3625df
branch refs/heads/delivery/sfia-studio-assistant-sfia-native-openai-finops-t6-runtime-composition

worktree /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t7-preparation
HEAD 137d3846e4b00ffe686db7ab473f0fdcd58df82e
branch refs/heads/implementation-preparation/sfia-studio-assistant-sfia-native-openai-finops-t7-rollout-activation-readiness

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
HEAD fbff9c660cddc20e92f3ea10678e8f65e0ce392b
branch refs/heads/sfia/review-handoff

--- WT ---
branch=docs/sfia-studio-convergence-foundations HEAD=da0618db8ce8dd6f1d7e98f8e207f7e169811d17
?? .tmp-sfia-review/
--- SRC ---
branch=delivery/sfia-studio-f3-real-prerequisites HEAD=4b1a058050ae81d56cb6d96b88e8a57380799a86
 M method/sfia-fast-track/core/sfia-cycle-routing-guide.md
 M method/sfia-fast-track/core/sfia-knowledge-layer.md
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/helpers.ts
 M projects/sfia-studio/app/__tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts
 M projects/sfia-studio/app/lib/d1/db.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/startExecution.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/index.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/application/confirmExecutionContract.ts
 M projects/sfia-studio/app/lib/oa/execution-contract/index.ts
 M projects/sfia-studio/app/lib/platform/t-a7/hardBlockerFoundation.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/app/package.json
 M prompts/templates/sfia-cycle-execution-template.md
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/oa/critical-ack/
?? projects/sfia-studio/app/__tests__/oa/execution-attempt/durableLaunchMarkers.test.ts
?? projects/sfia-studio/app/app/api/
?? projects/sfia-studio/app/auth.ts
?? projects/sfia-studio/app/lib/oa/critical-ack/
?? projects/sfia-studio/app/types/
?? projects/sfia-studio/convergence/
--- HANDOFF ---
branch=sfia/review-handoff HEAD=fbff9c660cddc20e92f3ea10678e8f65e0ce392b

```

Attachment drift expected after handoff = **NO**. If drift detected → STOP.

---

## 7. Décisions toujours fermées

merge · cleanup branch/worktree · instructions ChatGPT · Option 1 · persistence · Auth/Ack · Cursor REAL · Gate D · runtime v3 adoption

---

## 8. Capitalisation / REX (traçabilité)

validated content → isolated commit → remote branch → PR #334

---

## 9. FULL INLINE — Build Doctrine (A)

sha256 `be306b6e2277e928876cfeebbd018ed4ba0b1166463fba34282968741b326bc9`

```text
# SFIA Studio Convergence / Build Doctrine

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Doctrine de **construction / convergence** de SFIA Studio |
| **Statut** | **CANDIDATE — READY FOR MORRIS REVIEW** (non promu main / non baseline) |
| **Portée** | Travaux de construction / évolution de **SFIA Studio uniquement** |
| **Git SoT** | Repository `mcleland147/sfia-workspace` — Git courant prime |
| **Doctrine produit associée** | SFIA Studio v3 framing `30`–`37` = **CE QUE** Studio doit être |
| **Roadmap associée** | [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md) = **OÙ** en est la construction |
| **Processus opérationnel actuel** | SFIA **v2.6** = baseline ChatGPT ↔ Cursor externe |
| **Runtime v3** | **NON ADOPTED** tant que preuves/gates manquent |
| **Snapshot création** | HEAD `4b1a058050ae81d56cb6d96b88e8a57380799a86` · 2026-08-12 21:52:01 CEST (+0200) |

## A1. Anti-claims (ouverts)

Ce document **n’est pas** :

- une doctrine produit runtime remplaçant `sfia-v3-framing/30`–`37` ;
- une autorisation d’adoption runtime v3 ;
- une baseline méthodologique globale remplaçant SFIA v2.6 ;
- une décision d’architecture technique (Option 1 reste **recommandation** jusqu’à GO Morris) ;
- une sélection Product persistence ;
- une autorisation Cursor REAL / Gate D ;
- une instruction projet ChatGPT (couche 1 = PENDING hors ce cycle).

## A2. Finalité

> La doctrine produit **SFIA Studio v3** fixe la **destination**.
> La **Build Doctrine** fixe les **lois de construction** qui empêchent de perdre cette destination.
> La **Convergence Roadmap** fixe l’**état factuel** et la **prochaine capacité** à obtenir.

## A3. Cible produit (boucle métier)

Décision Morris explicite — cible produit Studio (≠ runtime ADOPTED) :

```text
Morris
  → SFIA Studio / Nora
  → connaissance + contexte v3 (DoctrinePackage / CKC)
  → qualification cycle / profil / lenses
  → analyse / clarification
  → Living Project State
  → trajectoire / options / recommandation
  → HumanDecision Morris
  → Confirmation (si requise)
  → ExecutionContract
  → Cursor / agent sous contrat
  → Evidence / ReviewBundle / Git
  → analyse Nora
  → mise à jour LPS / replanification
  → décision Morris
  → cycle suivant
```

Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine ; runtime coverage progressive via Roadmap).

## A4. Règles fondatrices de construction (R1–R20)

| ID | Règle |
| --- | --- |
| **R1** | Tout développement doit avoir un **lien direct** avec une capacité v3 (fondation V3-Fxx et/ou étape de la boucle A3). |
| **R2** | La **boucle métier complète** prime sur la profondeur locale non bloquante. |
| **R3** | **Réutiliser** l’existant utile ; **ne jamais** conserver uniquement par inertie / coût passé. |
| **R4** | Classifier les actifs : **KEEP / ADAPT / COMPLETE / HARVEST / REPLACE / FREEZE / RETIRE LATER**. |
| **R5** | Une étape **intermédiaire** n’est autorisée qu’avec justification, cible, condition de sortie et trajectoire de sortie. |
| **R6** | Une impasse ou **architecture parallèle** sans cible explicite est **interdite** comme chemin de construction par défaut. |
| **R7** | Aucun **POC / fixture / spike gratuit** sur le chemin critique. |
| **R8** | Construire par **capacités utilisateur end-to-end**, pas par accumulation de micro-composants. |
| **R9** | La roadmap est une **roadmap de convergence** (état → capacité → preuve), pas un catalogue de tickets. |
| **R10** | Le **chemin critique** doit rester visible à tout moment (Roadmap B10). |
| **R11** | Pas de dette volontaire sans propriétaire + condition de remboursement ou de retrait. |
| **R12** | **Git** reste la vérité technique et documentaire. |
| **R13** | La **décision structurante** reste humaine (Morris). |
| **R14** | GPT/Nora **raisonne, challenge, recommande** ; il/elle ne transforme pas une recommandation en décision. |
| **R15** | Cursor/agent **exécute uniquement** dans un périmètre/contrat gouverné. |
| **R16** | Automatiser le **répétable**, pas l’arbitrage structurant. |
| **R17** | Ne pas élargir un chantier uniquement pour « préparer le futur » sans lien trajectoire. |
| **R18** | Fermer dans un **même lot** les gaps cohérents servant une seule capacité utilisateur, sauf raison de scission. |
| **R19** | Aucun claim de maturité / READY / ADOPTED sans **preuve**. |
| **R20** | Toute brique **temporaire** doit rendre visible sa **sortie**. |

## A5. Challenge obligatoire avant tout chantier Studio

Avant cadrage / prompt Cursor / delivery Studio, répondre :

1. Quelle **capacité v3** ce travail débloque-t-il ?
2. Est-ce utile **maintenant** (chemin critique) ?
3. Existe-t-il déjà une brique **réutilisable** (KEEP/ADAPT/HARVEST) ?
4. Créons-nous une **architecture ou un moteur parallèle** ?
5. Peut-on fermer **plusieurs petits gaps** dans le même lot cohérent ?
6. Quelle **preuve end-to-end** permettra de déclarer la capacité obtenue ?
7. Quelle capacité ou décision vient **ensuite** ?
8. Quelle **dette** est créée ?
9. Action **répétable/automatisable** ou **arbitrage humain** ?
10. Un **gate Morris** est-il nécessaire ?

Si **1** ou **7** n’a pas de réponse exploitable :

```text
STOP — TRAJECTORY LINK MISSING
```

## A6. Politique POC / prototype / fixture

| Cas | Règle |
| --- | --- |
| Historique existant | Exploitable comme **preuve / harvest**, pas comme produit final. |
| Nouvelle création | **Interdite par défaut** sur chemin critique. |
| Exception | Uniquement risque technique précis non résoluble autrement + exit explicite. |
| Gate | Morris gate si l’exception ouvre une branche de trajectoire. |
| Interdit | Traiter POC/fixture comme produit final ou comme preuve REAL silencieuse. |

## A7. Politique d’intermédiaire

| Label | Autorisé ? | Exigence |
| --- | --- | --- |
| **TEMPORARY WITH EXIT** | OUI | Justification + cible + preuve de sortie + owner |
| **TEMPORARY WITHOUT EXIT** | NON | Interdit (R5/R11/R20) |

## A8. Politique de classification des actifs

| Classe | Sens | Conditions | Conséquence roadmap | Preuve |
| --- | --- | --- | --- | --- |
| **KEEP** | Conserver tel quel sur le chemin | Utile à la boucle v3 ; pas de dette structurante | Aucun rewrite ; usage direct | Présence Git + usage actuel |
| **ADAPT** | Conserver + adapter interfaces | Cœur utile ; frontières à aligner | Lot d’adaptation borné | Contrat/port clarifié |
| **COMPLETE** | Combler un trou d’une brique presque prête | Manque wiring/durabilité/UI | Milestone COMPLETE | Capacité e2e démontrée |
| **HARVEST** | Extraire une capacité d’un système parallèle | Valeur isolable (ex. Cursor spawn) | Anti-corruption adapter | Adapter branché sans dual-product |
| **REPLACE** | Remplacer par équivalent cible | Brique incompatible / non alignée | Migration + exit ancien | Ancien hors chemin critique |
| **FREEZE** | Ne plus étendre | N’aide pas le chemin critique | STOP DOING recommandé jusqu’à GO | Recommandation ≠ décision tant que Morris n’a pas tranché |
| **RETIRE LATER** | Retrait différé | Remplacé ou inutile après milestone | Disposition gate | Plan de retrait + preuve non-régression |

## A9. Chemin critique (priorité)

```text
capacité utilisateur complète
  > hardening local non bloquant
  > transverse non bloquant
  > expérimentation
```

## A10. Preuve de sortie

Une milestone **ne se termine pas** parce qu’un composant « existe ».
Elle se termine lorsqu’une **capacité utilisateur** ou une **précondition structurante** explicitement définie est **démontrée** (preuve Git / handoff / parcours UI).

`technical SUCCESS ≠ functional READY ≠ V3 RUNTIME ADOPTED`.

## A11. Gouvernance des sources

| Source | Rôle |
| --- | --- |
| Git + décisions Morris explicites | Vérité + autorité |
| Doctrine produit v3 (`30`–`37`) | Destination produit |
| **Build Doctrine (ce document)** | Lois de construction |
| **Convergence Roadmap** | État + prochaine capacité |
| Sources cycle / repo | Preuves locales du chantier |
| Mémoire conversationnelle | Non SoT |

## A12. Trois couches de vérification

| Couche | Rôle | Statut après CE cycle |
| --- | --- | --- |
| **1. Instructions projet ChatGPT** | Déclenche la consultation | **PENDING — next step** (hors périmètre) |
| **2. Repo / Source Routing** | Indique quoi consulter et dans quel ordre | **IMPLEMENTED CANDIDATE** (routing guide + Knowledge Layer) |
| **3. Template Cursor canonique** | Empêche génération de prompt Studio sans contexte convergence | **IMPLEMENTED CANDIDATE** |

Séquence attendue :

```text
Repo-informed pre-check
  → si Studio trigger : Convergence pre-check
  → qualification cycle
  → CKC/process guidance applicable (v2.6 process only)
  → sources spécifiques
  → instanciation prompt Cursor
```

## A13. Anti-patterns

- micro-hardening sans blocker utilisateur ;
- troisième moteur parallèle ;
- POC sans exit ;
- dette « on verra plus tard » ;
- conservation par sunk cost ;
- fonctionnalité fictive pour tester un concept déjà cadré ;
- roadmap par composants sans user outcome ;
- décision candidate présentée comme acquise ;
- mass rewrite historique ;
- Build Doctrine transformée en doctrine runtime.

## A14. Stop markers

```text
STOP — TRAJECTORY LINK MISSING
STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
```

## A15. Gouvernance d’évolution

- Document **stable** : modification uniquement via cycle explicite + impact analysé + décision Morris.
- La **Roadmap** évolue plus souvent (après décisions, milestones, preuves, dépendances).
- Ne pas appliquer automatiquement A+B à des projets SFIA **sans rapport** avec la construction de SFIA Studio.

## Références

- Roadmap : [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md)
- Doctrine produit : `projects/sfia-studio/sfia-v3-framing/30`–`37`
- Routing : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Knowledge Layer : `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- Template : `prompts/templates/sfia-cycle-execution-template.md`

```

---

## 10. FULL INLINE — Convergence Roadmap (B)

sha256 `898d01efbde1a8facef75bc51590b610bfe0e505bc0bfd86c5bcde3ffb1336a6`

```text
# SFIA Studio Convergence Roadmap

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
| **Statut** | **CANDIDATE — READY FOR MORRIS REVIEW** |
| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
| **Snapshot Git** | HEAD / origin/main `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
| **Timestamp** | 2026-08-12 21:53:10 CEST (+0200) |
| **Sources** | Git courant · handoff convergence tip `c5b417dc13fa3700787d28571e5b5abe0599ae98` blob `31a5db07fba2555a59ee8c65ad76b537bbd8a73d` · framing `30`–`37` · code `projects/sfia-studio/app/**` |
| **Anti-claims** | ≠ architecture décidée · ≠ persistence sélectionnée · ≠ v3 runtime ADOPTED · ≠ Cursor REAL authorized |

## B1. Nature du document

Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
Observation / Recommendation / Decision Required doivent rester **distincts**.

## B2. Destination (boucle produit v3)

Voir Build Doctrine A3 — boucle Morris → Nora → … → Evidence → LPS → Morris.
Fondations V3-F01…F15 = couverture doctrine progressive (B9).

## B3. Point de départ factuel

### Sur main (`4b1a058050ae81d56cb6d96b88e8a57380799a86`)

| Capacité | État observé |
| --- | --- |
| `/studio` Project create/view | WIRED — process-local Memory T-A1 |
| F1 Nora chat | WIRED — contextual assistant |
| F2 qualification / proposal / Morris gate | WIRED — process-local + demo authority |
| F3 T-A4→T-A5→T-A6 | WIRED — **FIXTURE ONLY** (`TestExecutionAdapter`) |
| Evidence UI reinjection | WIRED — DTO panel ; **pas** LPS write-back |
| OPS1 Cursor REAL | EXISTS — UI `/ops1` parallèle ; flag `OPS1_CURSOR_REAL` |
| D1 SQLite projects | EXISTS — UI `/projects` parallèle |
| execution-run D2-D | EXISTS — **non** branché F1–F3 |
| FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
| Product persistence | **NOT_SELECTED** |
| Cursor REAL depuis Nora | **0** |
| Gate D | **NOT CONSUMED** |

### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`)

| Élément | État |
| --- | --- |
| Auth.js GitHub + Critical Ack composition | Présent localement ; **pas sur HEAD** |
| SqliteAuthorityAttemptJournal wiring | Présent localement ; pilot-bounded ; ≠ Product persistence |
| Classification | Observation / prérequis candidat — **promotion = Decision Required** |

### Recommandation d’audit (≠ décision)

Option 1 — OA Native Backbone + Harvest OPS1 Cursor = **RECOMMENDATION — NOT DECIDED**.

## B4. Asset disposition matrix (actuelle)

Légende : classifications = **recommandations de convergence** jusqu’à validation Morris, sauf KEEP factuel d’usage main.

| Actif | Preuve | Classification | Justification courte |
| --- | --- | --- | --- |
| T-A0 Doctrine | `lib/oa/doctrine` + project create | **KEEP** | Appelé ; DoctrinePackage cible F03 |
| T-A1 Project/LPS | Memory store + `/studio` | **COMPLETE** | Bonne base ; manque durabilité |
| T-A2 Cycle/CKC | wired ; F2 qualify uses CKC | **ADAPT** / **COMPLETE** | Qualify OK ; CycleInstance UI non branché |
| T-A3 HD/Confirm/Authority | Memory + F2 decide | **COMPLETE** | Backbone ; manque durable + autorité réelle |
| T-A4 ExecutionContract | F3 prepare/confirm | **KEEP** / **COMPLETE** | Consommable ; path REAL + durable manquent |
| T-A5 Attempt/Adapter port | F3 fixture adapter | **ADAPT** / **HARVEST** | Port OK ; adapter REAL à harvest OPS1 |
| T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
| T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
| Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
| F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition root Studio |
| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable |
| execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
| FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
| Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
| Persistence Memory OA | factories Memory* | **REPLACE** (adapters durables derrière ports) | Decision Required tech |

## B5. Gap map → boucle cible

| Gap | Statut | Bloque |
| --- | --- | --- |
| Project/LPS durable | MISSING | M1, contextSnapshot |
| GuidedSession / historique durable | PARTIAL / MISSING | M2 daily use |
| CycleInstance réel lié F2 | EXISTS BUT NOT WIRED | M2/M3 |
| HumanDecision durable/authoritative | PROCESS_LOCAL / demo | M3, Gate D |
| CKC ↔ cycle binding | PARTIAL (qualify only) | M2 |
| live contextSnapshot | BLOCKED (no durable project) | F2 final / contracts |
| ExecutionContract from real HD | FIXTURE path only | M3/M4 |
| Cursor projection canonique | PARTIAL | M3/M4 |
| Cursor REAL behind T-A5 | MISSING on Nora | M4 |
| Critical Ack UI | CANDIDATE unwired | M4 |
| Evidence durable | MISSING | M5 |
| ReviewBundle → LPS writeback | MISSING | M5/M6 |
| Nora post-exec analysis | PARTIAL (UI cards) | M5 |
| Restart safety Studio core | MISSING | M1+ |
| IAM/authz product-grade | PARTIAL (candidate Auth.js) | M4/M8 |

## B6. Decisions / gates ouverts (non tranchés ici)

1. Architecture convergence Option 1 vs 2 — **Decision Required**
2. Product persistence technology — **NOT_SELECTED**
3. Promotion Auth.js / Critical Ack candidate — **Decision Required**
4. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
5. Disposition OPS1 / D1 / execution-run — **Decision Required**
6. Adoption explicite de cette Roadmap candidate — **Decision Required**
7. Couche Instructions ChatGPT update — **PENDING** (cycle séparé)

## B7–B8. Roadmap capability-driven (milestones)

### Gate 0 — Convergence architecture / persistence

| Champ | Contenu |
| --- | --- |
| **ID** | G0 |
| **Capacité v3** | Précondition : un seul backbone de construction (évite multi-moteurs) |
| **Outcome** | Morris tranche Option architecture + Product persistence (compact) |
| **Fondations** | transversal (débloque F02/F05/F12…) |
| **État actuel** | Audit complet ; Option 1 **recommandée** ; persistence NOT_SELECTED |
| **Actifs** | audit handoff ; Build Doctrine |
| **Gaps** | décisions structurantes ouvertes |
| **Travaux** | pack décision compact — **pas** long cycle architecture gratuit |
| **Gates Morris** | OUI — architecture + persistence |
| **Hors périmètre** | implémentation ; Cursor REAL |
| **Preuve de sortie** | décisions écrites consommables par Delivery |
| **Dette tolérée** | aucune implementation speculative |
| **Exit dette** | N/A |
| **Next** | M1 |
| **Statut** | **READY FOR DECISION** |

### Milestone 1 — Socle projet v3 fiable

| Champ | Contenu |
| --- | --- |
| **ID** | M1 |
| **Capacité v3** | V3-F02 LPS (+ Project) durable et exploitable |
| **Outcome** | Morris crée/reprend un Project et retrouve LPS/contexte critique après redémarrage |
| **État actuel** | Memory process-local `/studio` |
| **Actifs** | T-A1 ports ; vertical-slice UI ; doctrine FS |
| **Classification** | COMPLETE T-A1 ; ADAPT composition |
| **Gaps** | L1 durable repo ; L4 contextSnapshot ; L10 composition switch |
| **Dépendances** | G0 persistence |
| **Gates** | Delivery après G0 |
| **Hors périmètre** | Cursor REAL ; multi-region |
| **Preuve e2e** | create → restart process → get same project/LPS/digest |
| **Dette** | coexistence temporaire D1 UI |
| **Exit dette** | disposition D1 après M1 stable |
| **Next** | M2 |
| **Statut** | **NOT STARTED** (prérequis G0) |

### Milestone 2 — Pilotage cognitif v3 utilisable

| Champ | Contenu |
| --- | --- |
| **ID** | M2 |
| **Capacité v3** | V3-F01 CKC · F03 DoctrinePackage · F04 épistémologie (base) · F05 chaîne cognitive |
| **Outcome** | Dialogue Nora dans un projet durable ; qualification cycle ; LPS actualisé sans wizard rigide |
| **État actuel** | F1/F2 wired process-local |
| **Actifs** | F1, F2, platform AI, CKC qualify |
| **Gaps** | historique conversation durable optionnel ; CycleInstance wire ; live context |
| **Dépendances** | M1 |
| **Preuve e2e** | conversation → proposal avec contextSnapshot live → LPS version visible |
| **Statut** | **PARTIAL** (UI existe ; durabilité non) |

### Milestone 3 — Gouvernance humaine + préparation réelle

| Champ | Contenu |
| --- | --- |
| **ID** | M3 |
| **Capacité v3** | V3-F05 chaîne · HumanDecision · ExecutionContract (F12 réversibilité) |
| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor |
| **État actuel** | F2 demo authority ; F3 fixture prepare |
| **Actifs** | T-A3/T-A4 ; F2/F3 UI |
| **Gaps** | L2 durable HD ; L3 proposal binding ; L8 REAL contract fields ; autorité non-demo |
| **Dépendances** | M1–M2 ; IAM minimal |
| **Preuve e2e** | GO Morris → HD accepted/current survive restart → contract fingerprint stable |
| **Statut** | **PARTIAL** |

### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio

| Champ | Contenu |
| --- | --- |
| **ID** | M4 |
| **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
| **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
| **État actuel** | F3 fixture only ; OPS1 REAL parallèle |
| **Actifs** | T-A5 port ; OPS1 Cursor (**HARVEST**) ; critical-ack candidate |
| **Gaps** | L6 adapter ; L7 Ack UI ; Gate D |
| **Dépendances** | M3 ; promotion Ack ; Gate D |
| **Preuve e2e** | Attempt REAL + journal markers + Evidence non-fixture ; FAIL CLOSED si adapter unavailable |
| **Statut** | **NOT STARTED** |

### Milestone 5 — Retour de preuve + analyse Nora

| Champ | Contenu |
| --- | --- |
| **ID** | M5 |
| **Capacité v3** | V3-F14 Artifact Completeness · Evidence/ReviewBundle · F13 learning (base) |
| **Outcome** | Evidence/ReviewBundle liés contrat/décision ; réinjectés Nora + LPS ; handoff Git transitionnel OK |
| **État actuel** | UI cards Memory ; pas LPS write-back |
| **Gaps** | L9 Evidence→LPS ; durable evidence |
| **Dépendances** | M4 |
| **Preuve e2e** | post-exec : ReviewBundle visible + LPS updated + recommendation next gate |
| **Statut** | **PARTIAL** |

### Milestone 6 — Boucle projet complète

| Champ | Contenu |
| --- | --- |
| **ID** | M6 |
| **Capacité v3** | V3-F05 + F09 replanification (base) |
| **Outcome** | Sans copier-coller manuel : conversation → qualification → décision → exécution → preuve → analyse → update projet → next step |
| **État actuel** | Chaîne fragmentée / process-local / fixture |
| **Dépendances** | M1–M5 |
| **Preuve e2e** | parcours complet redémarrage-safe documenté |
| **Statut** | **NOT STARTED** |

### Milestone 7 — Élargissement contrôlé doctrine v3

| Champ | Contenu |
| --- | --- |
| **ID** | M7 |
| **Capacité v3** | Couverture progressive F06–F10, F08, F13–F15 au-delà du backbone |
| **Outcome** | Cycles/lenses/artefacts/transitions/contradictions/dette/capitalisation étendus **depuis** backbone utilisé |
| **Dépendances** | M6 |
| **Preuve** | matrice B9 avance avec preuves par fondation |
| **Statut** | **NOT STARTED** |

### Milestone 8 — Adoption produit / exploitation

| Champ | Contenu |
| --- | --- |
| **ID** | M8 |
| **Capacité v3** | Conditions d’un futur claim **v3 runtime ADOPTED** |
| **Outcome** | persistence, IAM/authz, sécurité, observabilité, backup/reprise, qualité, rétention, multi-user si requis, coverage doctrine obligatoire |
| **Anti-claim** | Ce milestone **ne préjuge pas** des critères non décidés et **n’autorise pas** le claim ADOPTED |
| **Statut** | **NOT STARTED** |

## B9. Matrice de couverture doctrine V3-F01…F15

| Fondation | Capacité | État courant | Milestone(s) | Preuve attendue | Gap / décision |
| --- | --- | --- | --- | --- | --- |
| V3-F01 CKC | Qualification cognitive | PARTIAL (F2 qualify) | M2, M7 | CKC lié cycle + proposal | CycleInstance wire |
| V3-F02 LPS | Living Project State | PARTIAL Memory | M1, M5 | LPS durable + writeback | persistence |
| V3-F03 DoctrinePackage | Package pin/digest | KEEP files | M1–M2 | live digest in snapshot | contextSnapshot |
| V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels | M2, M7 | tags/stop contradictions | later depth |
| V3-F05 Chaîne conv→exec | Boucle native | PARTIAL fixture | M2–M6 | e2e sans copier-coller | backbone |
| V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
| V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
| V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
| V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
| V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
| V3-F11 AgentCapability | Caps agents | Fixture agent | M4 | REAL agent descriptor | harvest |
| V3-F12 Réversibilité | Action policy | Partial confirmations | M3–M4 | confirm+ack path | Ack UI |
| V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
| V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |

## B10. Chemin critique explicite

```text
CRITICAL PATH:
  G0 (archi+persistence)
  → M1 durable Project/LPS
  → M2 Nora contextuel durable
  → M3 HD durable + ExecutionContract exact
  → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
  → M5 Evidence/ReviewBundle + LPS writeback
  → M6 boucle complète sans copier-coller

TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
DECISION REQUIRED: Option 1/2 · persistence tech · OPS1/D1/execution-run disposition · Ack promotion · Roadmap adoption · ChatGPT instructions
```

## B11. Freeze / stop-doing (**RECOMMENDATION**)

Tant que le chemin critique n’est pas servi, **ne pas** étendre par défaut :

- nouveaux lots FinOps sans dépendance Studio user-visible ;
- nouvelles features execution-run indépendantes ;
- expansion OPS1 UI (hors harvest adapter) ;
- expansion D1 `/projects` ;
- micro-hardening T-A7 sans blocker utilisateur.

Ces FREEZE sont des **recommandations** jusqu’à validation Morris.

## B12. Maintenance de la roadmap

Mettre à jour après : décision Morris structurante · milestone obtenue · nouvelle preuve · changement de dépendance · architecture validée · réserve bloquante · post-merge structurant.
Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.

## Références

- Build Doctrine : [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md)
- Audit handoff : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
- Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37`

```

---

## 11. DIFF COMPLET — PR #334

```diff
diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index a331746a..8949e764 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -165,7 +165,10 @@ Si le type de cycle n'est pas clair, lancer d'abord un **cycle de cadrage** (mé

 > **Référence détaillée :** `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.4-consolidation-operating-efficiency-standard.md`
 > **Statut version :** héritage opérationnel **absorbé dans SFIA v2.6 (baseline opérationnelle)** — v2.4 = baseline historique précédente.
-> **v3.0 :** immediate NO-GO — toute discussion v3.0 = décision Morris dédiée.
+> **SFIA v2.6 :** baseline opérationnelle actuelle du processus externe ChatGPT ↔ Cursor.
+> **SFIA Studio v3 :** doctrine **produit cible Studio** explicitement décidée par Morris (construction/convergence — voir §4.3.0a).
+> **≠** promotion de v3 en baseline méthodologique globale ; **≠** claim runtime v3 ADOPTED ; **≠** suppression de v2.6.
+> Toute promotion v3 baseline globale, claim runtime ADOPTED, ou discussion v3 hors trajectoire Studio décidée = **décision Morris dédiée**.

 SFIA v2.4 reste le **standard de consolidation** de référence pour les cycles. Il couvre notamment :

@@ -211,11 +214,45 @@ Morris valide le profil si **Critical** ou changement de doctrine.
 - changement de doctrine ;
 - arbitrage structurant ;
 - passage vers v2.5+ ;
-- toute discussion **v3.0** ;
+- promotion **v3 baseline globale**, claim **v3 runtime ADOPTED**, ou discussion v3 **hors** trajectoire Studio déjà décidée ;
 - automatisation L3 structurante, L4, tout L5 ;
 - merge et clôture structurante ;
 - dette méthode ou projet importante.

+#### 4.3.0a SFIA STUDIO CONVERGENCE PRE-CHECK
+
+> **Portée :** uniquement les travaux dont l’objet est la **construction ou l’évolution de SFIA Studio**.
+> **Ne s’applique pas** aux autres projets SFIA sans rapport avec la construction de SFIA Studio.
+
+**Trigger = oui** si la demande concerne analyse, cadrage, roadmap, architecture, conception, delivery, validation, PR readiness, post-merge, capitalisation, prompt Cursor, évolution méthode/template ou évolution runtime **de SFIA Studio**.
+
+**Sources obligatoires supplémentaires (ordre) :**
+
+1. Git courant + décisions Morris explicites ;
+2. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` ;
+3. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` ;
+4. doctrine produit v3 applicable (`projects/sfia-studio/sfia-v3-framing/**`, notamment `30`–`37`) ;
+5. sources Studio/repo spécifiques au cycle ;
+6. processus SFIA **v2.6** nécessaire à l’exécution du cycle (template, operating model, guardrails).
+
+**Clarifications obligatoires :**
+
+| Affirmation | Statut |
+| --- | --- |
+| SFIA Studio v3 | doctrine **produit cible Studio** (décidée) |
+| SFIA v2.6 | baseline **opérationnelle** du processus ChatGPT/Cursor externe |
+| Build Doctrine + Roadmap | gouvernance de **construction** — **pas** doctrine runtime produit |
+| Runtime v3 ADOPTED | **non** tant que preuves/gates manquent |
+| Coexistence doctrinale runtime v2.6/v3 dans Studio | **ne pas réintroduire** |
+
+Consulter le template v2.6 pour **exécuter** les cycles de construction **ne signifie pas** charger v2.6 comme doctrine produit Studio.
+
+Si le contexte convergence requis n’est pas chargé :
+
+```text
+STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
+```
+
 **Sans gate Morris dédié** (contrôles L1 ou validations techniques non structurantes) :

 - vérifications read-only de cohérence documentaire ;
@@ -921,7 +958,7 @@ SFIA **ne doit pas** automatiser la décision finale.
 - arbitrage projet ;
 - décision de delivery impactante.

-**Complément SFIA v2.4 (§4.3.3) :** les contrôles L1 read-only, validations techniques non structurantes et post-merge documentaire **ne nécessitent pas** un gate Morris dédié. Morris reste L0 pour tout arbitrage structurant, passage v2.5+, discussion v3.0, L3 structurant / L4 / L5, merge et clôture structurante.
+**Complément SFIA v2.4 (§4.3.3) :** les contrôles L1 read-only, validations techniques non structurantes et post-merge documentaire **ne nécessitent pas** un gate Morris dédié. Morris reste L0 pour tout arbitrage structurant, passage v2.5+, promotion v3 baseline globale / claim runtime ADOPTED / discussion v3 hors trajectoire Studio décidée, L3 structurant / L4 / L5, merge et clôture structurante.

 ## 10. Règle d'exécution Cursor

diff --git a/method/sfia-fast-track/core/sfia-knowledge-layer.md b/method/sfia-fast-track/core/sfia-knowledge-layer.md
index 7fe5b0e5..1c774269 100644
--- a/method/sfia-fast-track/core/sfia-knowledge-layer.md
+++ b/method/sfia-fast-track/core/sfia-knowledge-layer.md
@@ -145,6 +145,7 @@ Cette matrice doit être utilisée avant toute création documentaire significat
 | Post-merge | PR, merge commit, branch status | Post-merge status, capitalisation | Dossier de capitalisation ou projet concerné | Clôture / trace | PR, commit, branche, décision, prochaine étape |
 | Archive / cleanup | Repository Blueprint, docs existants, audit | Archive map, cleanup report | `archive/` ou dossier archive local | Traçabilité | Justification, git mv, aucun delete brutal |
 | Foundation consolidation | Evolution matrix, capitalization inputs, foundation docs | Foundation update, consistency rules | `docs/architecture/`, `method/sfia-fast-track/core/` | Fondation v1.1 | v1.0 preserved, v1.1 prevails, no source rewrite |
+| **SFIA Studio — construction / convergence** | **Build Doctrine** `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` ; **Convergence Roadmap** `…/sfia-studio-convergence-roadmap.md` ; doctrine produit v3 applicable (`sfia-v3-framing/30`–`37`) ; Git/docs Studio ; sources cycle | Selon type de cycle ; tout livrable doit indiquer **capacité v3 ciblée** + lien roadmap | Actifs produit/convergence → `projects/sfia-studio/` ; méthode/template **uniquement** si le cycle porte explicitement sur méthode/template | Convergence / construction Studio | capacité v3 ; milestone roadmap ; classification KEEP/ADAPT/COMPLETE/HARVEST/REPLACE/FREEZE/RETIRE LATER ; gaps fermés ; hors périmètre ; exit proof ; gates Morris ; dette temporaire + trajectoire de sortie |

 Règle :

@@ -186,6 +187,9 @@ La Documentation Routing Matrix n'est pas remplacée. Le Cycle Routing Guide la
 | Routage CKC candidat (expérimental) | Routing guide §4.4.5, README CKC, pilote ou carte synthétique | Déclaration de consultation CKC ; évolutions CKC si cycle méthode dédié | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/` | Capitalisation méthode candidate | Statut candidate ; usage experimental cognitive guidance ; aucune autorité d'exécution |

 **Séparation préservée :** Knowledge Layer = où classer et ranger · Routing guide = quoi lire et quand.
+**Pas d’index parallèle :** Build Doctrine + Roadmap s’insèrent dans cette matrice et dans le routing guide ; aucun registre/moteur documentaire supplémentaire.
+
+> **Studio construction :** Build Doctrine / Roadmap = gouvernance de **construction** (pas doctrine runtime). Runtime v3 reste non ADOPTED tant que les preuves/gates manquent. SFIA v2.6 reste la baseline opérationnelle du processus ChatGPT ↔ Cursor.

 ### 6.2 Complément SFIA v2.4 — index méthode unique

diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 75f05989..37f76839 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -5,7 +5,9 @@
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
 | **Statut** | `sfia-canonical-context-engine-local` — moteur de contexte SFIA **implémenté** sur branche locale ; **pas de commit/push/PR** ; validation live Morris **requise** ; MVP / production **fermés** |
-| **Baseline méthode** | **SFIA v2.6** (Option C méthode ; inchangée) |
+| **Baseline méthode (processus)** | **SFIA v2.6** — baseline opérationnelle actuelle ChatGPT ↔ Cursor externe |
+| **Doctrine produit cible Studio** | **SFIA Studio v3** (`sfia-v3-framing/30`–`37`) — cible produit décidée ; **runtime v3 NON ADOPTED** |
+| **Convergence** | [`convergence/sfia-studio-convergence-build-doctrine.md`](./convergence/sfia-studio-convergence-build-doctrine.md) · [`convergence/sfia-studio-convergence-roadmap.md`](./convergence/sfia-studio-convergence-roadmap.md) — **CANDIDATE** |
 | **Autorité** | Morris (L0) |
 | **Exécuteur** | Cursor — delivery harness-only POC-G9 (DELIVERY/POC/ARCH/SEC/QA, Critical) |
 | **Typologie cycle** | DELIVERY / POC / ARCH / SEC / QA — Critical |
@@ -120,9 +122,15 @@ Couverture **progressive**. Pas d’obligation dans le POC ou le MVP. Sous-ensem

 Contrainte de **preuve** du POC — **pas** plateforme produit définitive.

-### Relation méthode (G4 — Option C)
+### Relation méthode (G4 — Option C) — alignement cible Studio

-Produit indépendant **consommant** SFIA v2.6. Pas de v2.7 / v3.0. Évolution méthode = CAPA/EVOL séparé + GO Morris.
+- **SFIA v2.6** : baseline opérationnelle actuelle du processus ChatGPT ↔ Cursor externe.
+- **SFIA Studio v3** : doctrine **produit cible Studio** (framing `30`–`37`) — décidée pour la construction/convergence.
+- **Runtime v3** : **non ADOPTED** tant que capacités, preuves et gates nécessaires ne sont pas atteints.
+- Évolution méthode globale / promotion v3 baseline méthodologique = CAPA/EVOL séparé + GO Morris.
+- Documents de construction actifs : [Build Doctrine](./convergence/sfia-studio-convergence-build-doctrine.md) · [Convergence Roadmap](./convergence/sfia-studio-convergence-roadmap.md) (**CANDIDATE**).
+
+> Formulation historique « Pas de v2.7 / v3.0 » (pré-convergence) : **superseded** pour la **cible produit Studio**. Elle ne doit plus être lue comme interdiction de construire vers Studio v3. Elle conserve sa valeur historique comme refus de promotion baseline globale sans GO.

 ---

@@ -156,6 +164,13 @@ Architecture Option B **intégrée**. A–E **CLOSED_WITH_RESERVATIONS**. Cadrag

 ## 3. Navigation

+### Convergence (actif — CANDIDATE)
+
+| Document | Rôle |
+|----------|------|
+| [convergence/sfia-studio-convergence-build-doctrine.md](./convergence/sfia-studio-convergence-build-doctrine.md) | Lois de construction / convergence Studio |
+| [convergence/sfia-studio-convergence-roadmap.md](./convergence/sfia-studio-convergence-roadmap.md) | Roadmap vivante état → capacités v3 |
+
 ### Pré-cadrage (historique)

 | Document | Rôle |
@@ -389,7 +404,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01

 | Élément | Source |
 |---------|--------|
-| Méthode | SFIA v2.6 — Option C méthode |
+| Méthode (processus) | SFIA v2.6 — baseline opérationnelle ChatGPT ↔ Cursor |
+| Doctrine produit Studio | SFIA Studio v3 framing `30`–`37` — cible ; runtime **non ADOPTED** |
+| Convergence (CANDIDATE) | `convergence/sfia-studio-convergence-build-doctrine.md` · `convergence/sfia-studio-convergence-roadmap.md` |
 | Socle applicatif / harness A–E | `main` @ `6a4c4a7044a54698f96e5ba8ce3a85f60c0afc25` (PR #234 MERGED) |
 | Vertical slice A–E | Docs `32`–`40` ; clôture `CLOSED_WITH_RESERVATIONS` |
 | Cadrage OPS1 | Docs `41`–`44` — **VALIDATED WITH RESERVATIONS** ; **intégrés** sur `main` via PR [#235](https://github.com/mcleland147/sfia-workspace/pull/235) / squash `b686eb1394bb4d550eeff1dd64669b3d405579ad` ; cleanup branche effectué |
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
new file mode 100644
index 00000000..05914319
--- /dev/null
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
@@ -0,0 +1,212 @@
+# SFIA Studio Convergence / Build Doctrine
+
+| Métadonnée | Valeur |
+| --- | --- |
+| **Rôle** | Doctrine de **construction / convergence** de SFIA Studio |
+| **Statut** | **CANDIDATE — READY FOR MORRIS REVIEW** (non promu main / non baseline) |
+| **Portée** | Travaux de construction / évolution de **SFIA Studio uniquement** |
+| **Git SoT** | Repository `mcleland147/sfia-workspace` — Git courant prime |
+| **Doctrine produit associée** | SFIA Studio v3 framing `30`–`37` = **CE QUE** Studio doit être |
+| **Roadmap associée** | [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md) = **OÙ** en est la construction |
+| **Processus opérationnel actuel** | SFIA **v2.6** = baseline ChatGPT ↔ Cursor externe |
+| **Runtime v3** | **NON ADOPTED** tant que preuves/gates manquent |
+| **Snapshot création** | HEAD `4b1a058050ae81d56cb6d96b88e8a57380799a86` · 2026-08-12 21:52:01 CEST (+0200) |
+
+## A1. Anti-claims (ouverts)
+
+Ce document **n’est pas** :
+
+- une doctrine produit runtime remplaçant `sfia-v3-framing/30`–`37` ;
+- une autorisation d’adoption runtime v3 ;
+- une baseline méthodologique globale remplaçant SFIA v2.6 ;
+- une décision d’architecture technique (Option 1 reste **recommandation** jusqu’à GO Morris) ;
+- une sélection Product persistence ;
+- une autorisation Cursor REAL / Gate D ;
+- une instruction projet ChatGPT (couche 1 = PENDING hors ce cycle).
+
+## A2. Finalité
+
+> La doctrine produit **SFIA Studio v3** fixe la **destination**.
+> La **Build Doctrine** fixe les **lois de construction** qui empêchent de perdre cette destination.
+> La **Convergence Roadmap** fixe l’**état factuel** et la **prochaine capacité** à obtenir.
+
+## A3. Cible produit (boucle métier)
+
+Décision Morris explicite — cible produit Studio (≠ runtime ADOPTED) :
+
+```text
+Morris
+  → SFIA Studio / Nora
+  → connaissance + contexte v3 (DoctrinePackage / CKC)
+  → qualification cycle / profil / lenses
+  → analyse / clarification
+  → Living Project State
+  → trajectoire / options / recommandation
+  → HumanDecision Morris
+  → Confirmation (si requise)
+  → ExecutionContract
+  → Cursor / agent sous contrat
+  → Evidence / ReviewBundle / Git
+  → analyse Nora
+  → mise à jour LPS / replanification
+  → décision Morris
+  → cycle suivant
+```
+
+Fondations doctrine produit associées : **V3-F01…V3-F15** (VALIDATED doctrine ; runtime coverage progressive via Roadmap).
+
+## A4. Règles fondatrices de construction (R1–R20)
+
+| ID | Règle |
+| --- | --- |
+| **R1** | Tout développement doit avoir un **lien direct** avec une capacité v3 (fondation V3-Fxx et/ou étape de la boucle A3). |
+| **R2** | La **boucle métier complète** prime sur la profondeur locale non bloquante. |
+| **R3** | **Réutiliser** l’existant utile ; **ne jamais** conserver uniquement par inertie / coût passé. |
+| **R4** | Classifier les actifs : **KEEP / ADAPT / COMPLETE / HARVEST / REPLACE / FREEZE / RETIRE LATER**. |
+| **R5** | Une étape **intermédiaire** n’est autorisée qu’avec justification, cible, condition de sortie et trajectoire de sortie. |
+| **R6** | Une impasse ou **architecture parallèle** sans cible explicite est **interdite** comme chemin de construction par défaut. |
+| **R7** | Aucun **POC / fixture / spike gratuit** sur le chemin critique. |
+| **R8** | Construire par **capacités utilisateur end-to-end**, pas par accumulation de micro-composants. |
+| **R9** | La roadmap est une **roadmap de convergence** (état → capacité → preuve), pas un catalogue de tickets. |
+| **R10** | Le **chemin critique** doit rester visible à tout moment (Roadmap B10). |
+| **R11** | Pas de dette volontaire sans propriétaire + condition de remboursement ou de retrait. |
+| **R12** | **Git** reste la vérité technique et documentaire. |
+| **R13** | La **décision structurante** reste humaine (Morris). |
+| **R14** | GPT/Nora **raisonne, challenge, recommande** ; il/elle ne transforme pas une recommandation en décision. |
+| **R15** | Cursor/agent **exécute uniquement** dans un périmètre/contrat gouverné. |
+| **R16** | Automatiser le **répétable**, pas l’arbitrage structurant. |
+| **R17** | Ne pas élargir un chantier uniquement pour « préparer le futur » sans lien trajectoire. |
+| **R18** | Fermer dans un **même lot** les gaps cohérents servant une seule capacité utilisateur, sauf raison de scission. |
+| **R19** | Aucun claim de maturité / READY / ADOPTED sans **preuve**. |
+| **R20** | Toute brique **temporaire** doit rendre visible sa **sortie**. |
+
+## A5. Challenge obligatoire avant tout chantier Studio
+
+Avant cadrage / prompt Cursor / delivery Studio, répondre :
+
+1. Quelle **capacité v3** ce travail débloque-t-il ?
+2. Est-ce utile **maintenant** (chemin critique) ?
+3. Existe-t-il déjà une brique **réutilisable** (KEEP/ADAPT/HARVEST) ?
+4. Créons-nous une **architecture ou un moteur parallèle** ?
+5. Peut-on fermer **plusieurs petits gaps** dans le même lot cohérent ?
+6. Quelle **preuve end-to-end** permettra de déclarer la capacité obtenue ?
+7. Quelle capacité ou décision vient **ensuite** ?
+8. Quelle **dette** est créée ?
+9. Action **répétable/automatisable** ou **arbitrage humain** ?
+10. Un **gate Morris** est-il nécessaire ?
+
+Si **1** ou **7** n’a pas de réponse exploitable :
+
+```text
+STOP — TRAJECTORY LINK MISSING
+```
+
+## A6. Politique POC / prototype / fixture
+
+| Cas | Règle |
+| --- | --- |
+| Historique existant | Exploitable comme **preuve / harvest**, pas comme produit final. |
+| Nouvelle création | **Interdite par défaut** sur chemin critique. |
+| Exception | Uniquement risque technique précis non résoluble autrement + exit explicite. |
+| Gate | Morris gate si l’exception ouvre une branche de trajectoire. |
+| Interdit | Traiter POC/fixture comme produit final ou comme preuve REAL silencieuse. |
+
+## A7. Politique d’intermédiaire
+
+| Label | Autorisé ? | Exigence |
+| --- | --- | --- |
+| **TEMPORARY WITH EXIT** | OUI | Justification + cible + preuve de sortie + owner |
+| **TEMPORARY WITHOUT EXIT** | NON | Interdit (R5/R11/R20) |
+
+## A8. Politique de classification des actifs
+
+| Classe | Sens | Conditions | Conséquence roadmap | Preuve |
+| --- | --- | --- | --- | --- |
+| **KEEP** | Conserver tel quel sur le chemin | Utile à la boucle v3 ; pas de dette structurante | Aucun rewrite ; usage direct | Présence Git + usage actuel |
+| **ADAPT** | Conserver + adapter interfaces | Cœur utile ; frontières à aligner | Lot d’adaptation borné | Contrat/port clarifié |
+| **COMPLETE** | Combler un trou d’une brique presque prête | Manque wiring/durabilité/UI | Milestone COMPLETE | Capacité e2e démontrée |
+| **HARVEST** | Extraire une capacité d’un système parallèle | Valeur isolable (ex. Cursor spawn) | Anti-corruption adapter | Adapter branché sans dual-product |
+| **REPLACE** | Remplacer par équivalent cible | Brique incompatible / non alignée | Migration + exit ancien | Ancien hors chemin critique |
+| **FREEZE** | Ne plus étendre | N’aide pas le chemin critique | STOP DOING recommandé jusqu’à GO | Recommandation ≠ décision tant que Morris n’a pas tranché |
+| **RETIRE LATER** | Retrait différé | Remplacé ou inutile après milestone | Disposition gate | Plan de retrait + preuve non-régression |
+
+## A9. Chemin critique (priorité)
+
+```text
+capacité utilisateur complète
+  > hardening local non bloquant
+  > transverse non bloquant
+  > expérimentation
+```
+
+## A10. Preuve de sortie
+
+Une milestone **ne se termine pas** parce qu’un composant « existe ».
+Elle se termine lorsqu’une **capacité utilisateur** ou une **précondition structurante** explicitement définie est **démontrée** (preuve Git / handoff / parcours UI).
+
+`technical SUCCESS ≠ functional READY ≠ V3 RUNTIME ADOPTED`.
+
+## A11. Gouvernance des sources
+
+| Source | Rôle |
+| --- | --- |
+| Git + décisions Morris explicites | Vérité + autorité |
+| Doctrine produit v3 (`30`–`37`) | Destination produit |
+| **Build Doctrine (ce document)** | Lois de construction |
+| **Convergence Roadmap** | État + prochaine capacité |
+| Sources cycle / repo | Preuves locales du chantier |
+| Mémoire conversationnelle | Non SoT |
+
+## A12. Trois couches de vérification
+
+| Couche | Rôle | Statut après CE cycle |
+| --- | --- | --- |
+| **1. Instructions projet ChatGPT** | Déclenche la consultation | **PENDING — next step** (hors périmètre) |
+| **2. Repo / Source Routing** | Indique quoi consulter et dans quel ordre | **IMPLEMENTED CANDIDATE** (routing guide + Knowledge Layer) |
+| **3. Template Cursor canonique** | Empêche génération de prompt Studio sans contexte convergence | **IMPLEMENTED CANDIDATE** |
+
+Séquence attendue :
+
+```text
+Repo-informed pre-check
+  → si Studio trigger : Convergence pre-check
+  → qualification cycle
+  → CKC/process guidance applicable (v2.6 process only)
+  → sources spécifiques
+  → instanciation prompt Cursor
+```
+
+## A13. Anti-patterns
+
+- micro-hardening sans blocker utilisateur ;
+- troisième moteur parallèle ;
+- POC sans exit ;
+- dette « on verra plus tard » ;
+- conservation par sunk cost ;
+- fonctionnalité fictive pour tester un concept déjà cadré ;
+- roadmap par composants sans user outcome ;
+- décision candidate présentée comme acquise ;
+- mass rewrite historique ;
+- Build Doctrine transformée en doctrine runtime.
+
+## A14. Stop markers
+
+```text
+STOP — TRAJECTORY LINK MISSING
+STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
+PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
+```
+
+## A15. Gouvernance d’évolution
+
+- Document **stable** : modification uniquement via cycle explicite + impact analysé + décision Morris.
+- La **Roadmap** évolue plus souvent (après décisions, milestones, preuves, dépendances).
+- Ne pas appliquer automatiquement A+B à des projets SFIA **sans rapport** avec la construction de SFIA Studio.
+
+## Références
+
+- Roadmap : [`sfia-studio-convergence-roadmap.md`](./sfia-studio-convergence-roadmap.md)
+- Doctrine produit : `projects/sfia-studio/sfia-v3-framing/30`–`37`
+- Routing : `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
+- Knowledge Layer : `method/sfia-fast-track/core/sfia-knowledge-layer.md`
+- Template : `prompts/templates/sfia-cycle-execution-template.md`
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
new file mode 100644
index 00000000..d8d4899a
--- /dev/null
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -0,0 +1,297 @@
+# SFIA Studio Convergence Roadmap
+
+| Métadonnée | Valeur |
+| --- | --- |
+| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
+| **Statut** | **CANDIDATE — READY FOR MORRIS REVIEW** |
+| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
+| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
+| **Snapshot Git** | HEAD / origin/main `4b1a058050ae81d56cb6d96b88e8a57380799a86` |
+| **Timestamp** | 2026-08-12 21:53:10 CEST (+0200) |
+| **Sources** | Git courant · handoff convergence tip `c5b417dc13fa3700787d28571e5b5abe0599ae98` blob `31a5db07fba2555a59ee8c65ad76b537bbd8a73d` · framing `30`–`37` · code `projects/sfia-studio/app/**` |
+| **Anti-claims** | ≠ architecture décidée · ≠ persistence sélectionnée · ≠ v3 runtime ADOPTED · ≠ Cursor REAL authorized |
+
+## B1. Nature du document
+
+Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
+Observation / Recommendation / Decision Required doivent rester **distincts**.
+
+## B2. Destination (boucle produit v3)
+
+Voir Build Doctrine A3 — boucle Morris → Nora → … → Evidence → LPS → Morris.
+Fondations V3-F01…F15 = couverture doctrine progressive (B9).
+
+## B3. Point de départ factuel
+
+### Sur main (`4b1a058050ae81d56cb6d96b88e8a57380799a86`)
+
+| Capacité | État observé |
+| --- | --- |
+| `/studio` Project create/view | WIRED — process-local Memory T-A1 |
+| F1 Nora chat | WIRED — contextual assistant |
+| F2 qualification / proposal / Morris gate | WIRED — process-local + demo authority |
+| F3 T-A4→T-A5→T-A6 | WIRED — **FIXTURE ONLY** (`TestExecutionAdapter`) |
+| Evidence UI reinjection | WIRED — DTO panel ; **pas** LPS write-back |
+| OPS1 Cursor REAL | EXISTS — UI `/ops1` parallèle ; flag `OPS1_CURSOR_REAL` |
+| D1 SQLite projects | EXISTS — UI `/projects` parallèle |
+| execution-run D2-D | EXISTS — **non** branché F1–F3 |
+| FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
+| Product persistence | **NOT_SELECTED** |
+| Cursor REAL depuis Nora | **0** |
+| Gate D | **NOT CONSUMED** |
+
+### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`)
+
+| Élément | État |
+| --- | --- |
+| Auth.js GitHub + Critical Ack composition | Présent localement ; **pas sur HEAD** |
+| SqliteAuthorityAttemptJournal wiring | Présent localement ; pilot-bounded ; ≠ Product persistence |
+| Classification | Observation / prérequis candidat — **promotion = Decision Required** |
+
+### Recommandation d’audit (≠ décision)
+
+Option 1 — OA Native Backbone + Harvest OPS1 Cursor = **RECOMMENDATION — NOT DECIDED**.
+
+## B4. Asset disposition matrix (actuelle)
+
+Légende : classifications = **recommandations de convergence** jusqu’à validation Morris, sauf KEEP factuel d’usage main.
+
+| Actif | Preuve | Classification | Justification courte |
+| --- | --- | --- | --- |
+| T-A0 Doctrine | `lib/oa/doctrine` + project create | **KEEP** | Appelé ; DoctrinePackage cible F03 |
+| T-A1 Project/LPS | Memory store + `/studio` | **COMPLETE** | Bonne base ; manque durabilité |
+| T-A2 Cycle/CKC | wired ; F2 qualify uses CKC | **ADAPT** / **COMPLETE** | Qualify OK ; CycleInstance UI non branché |
+| T-A3 HD/Confirm/Authority | Memory + F2 decide | **COMPLETE** | Backbone ; manque durable + autorité réelle |
+| T-A4 ExecutionContract | F3 prepare/confirm | **KEEP** / **COMPLETE** | Consommable ; path REAL + durable manquent |
+| T-A5 Attempt/Adapter port | F3 fixture adapter | **ADAPT** / **HARVEST** | Port OK ; adapter REAL à harvest OPS1 |
+| T-A6 Evidence/ReviewBundle | F3 ingest + UI cards | **COMPLETE** | UI reinjection ; LPS write-back manquant |
+| T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
+| Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
+| F1 / F2 / F3 UI | `features/project-assistant` | **KEEP** / **ADAPT** | Remplacer demo/fixture bindings progressivement |
+| vertical-slice-runtime | `wireOaStack` | **KEEP** / **ADAPT** | Composition root Studio |
+| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable |
+| execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
+| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
+| FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
+| Auth.js / Critical Ack candidate | dirty only | **COMPLETE** (après GO promotion) | Prérequis REAL Critical |
+| Persistence Memory OA | factories Memory* | **REPLACE** (adapters durables derrière ports) | Decision Required tech |
+
+## B5. Gap map → boucle cible
+
+| Gap | Statut | Bloque |
+| --- | --- | --- |
+| Project/LPS durable | MISSING | M1, contextSnapshot |
+| GuidedSession / historique durable | PARTIAL / MISSING | M2 daily use |
+| CycleInstance réel lié F2 | EXISTS BUT NOT WIRED | M2/M3 |
+| HumanDecision durable/authoritative | PROCESS_LOCAL / demo | M3, Gate D |
+| CKC ↔ cycle binding | PARTIAL (qualify only) | M2 |
+| live contextSnapshot | BLOCKED (no durable project) | F2 final / contracts |
+| ExecutionContract from real HD | FIXTURE path only | M3/M4 |
+| Cursor projection canonique | PARTIAL | M3/M4 |
+| Cursor REAL behind T-A5 | MISSING on Nora | M4 |
+| Critical Ack UI | CANDIDATE unwired | M4 |
+| Evidence durable | MISSING | M5 |
+| ReviewBundle → LPS writeback | MISSING | M5/M6 |
+| Nora post-exec analysis | PARTIAL (UI cards) | M5 |
+| Restart safety Studio core | MISSING | M1+ |
+| IAM/authz product-grade | PARTIAL (candidate Auth.js) | M4/M8 |
+
+## B6. Decisions / gates ouverts (non tranchés ici)
+
+1. Architecture convergence Option 1 vs 2 — **Decision Required**
+2. Product persistence technology — **NOT_SELECTED**
+3. Promotion Auth.js / Critical Ack candidate — **Decision Required**
+4. Cursor REAL / Gate D — **NOT AUTHORIZED / NOT CONSUMED**
+5. Disposition OPS1 / D1 / execution-run — **Decision Required**
+6. Adoption explicite de cette Roadmap candidate — **Decision Required**
+7. Couche Instructions ChatGPT update — **PENDING** (cycle séparé)
+
+## B7–B8. Roadmap capability-driven (milestones)
+
+### Gate 0 — Convergence architecture / persistence
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | G0 |
+| **Capacité v3** | Précondition : un seul backbone de construction (évite multi-moteurs) |
+| **Outcome** | Morris tranche Option architecture + Product persistence (compact) |
+| **Fondations** | transversal (débloque F02/F05/F12…) |
+| **État actuel** | Audit complet ; Option 1 **recommandée** ; persistence NOT_SELECTED |
+| **Actifs** | audit handoff ; Build Doctrine |
+| **Gaps** | décisions structurantes ouvertes |
+| **Travaux** | pack décision compact — **pas** long cycle architecture gratuit |
+| **Gates Morris** | OUI — architecture + persistence |
+| **Hors périmètre** | implémentation ; Cursor REAL |
+| **Preuve de sortie** | décisions écrites consommables par Delivery |
+| **Dette tolérée** | aucune implementation speculative |
+| **Exit dette** | N/A |
+| **Next** | M1 |
+| **Statut** | **READY FOR DECISION** |
+
+### Milestone 1 — Socle projet v3 fiable
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M1 |
+| **Capacité v3** | V3-F02 LPS (+ Project) durable et exploitable |
+| **Outcome** | Morris crée/reprend un Project et retrouve LPS/contexte critique après redémarrage |
+| **État actuel** | Memory process-local `/studio` |
+| **Actifs** | T-A1 ports ; vertical-slice UI ; doctrine FS |
+| **Classification** | COMPLETE T-A1 ; ADAPT composition |
+| **Gaps** | L1 durable repo ; L4 contextSnapshot ; L10 composition switch |
+| **Dépendances** | G0 persistence |
+| **Gates** | Delivery après G0 |
+| **Hors périmètre** | Cursor REAL ; multi-region |
+| **Preuve e2e** | create → restart process → get same project/LPS/digest |
+| **Dette** | coexistence temporaire D1 UI |
+| **Exit dette** | disposition D1 après M1 stable |
+| **Next** | M2 |
+| **Statut** | **NOT STARTED** (prérequis G0) |
+
+### Milestone 2 — Pilotage cognitif v3 utilisable
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M2 |
+| **Capacité v3** | V3-F01 CKC · F03 DoctrinePackage · F04 épistémologie (base) · F05 chaîne cognitive |
+| **Outcome** | Dialogue Nora dans un projet durable ; qualification cycle ; LPS actualisé sans wizard rigide |
+| **État actuel** | F1/F2 wired process-local |
+| **Actifs** | F1, F2, platform AI, CKC qualify |
+| **Gaps** | historique conversation durable optionnel ; CycleInstance wire ; live context |
+| **Dépendances** | M1 |
+| **Preuve e2e** | conversation → proposal avec contextSnapshot live → LPS version visible |
+| **Statut** | **PARTIAL** (UI existe ; durabilité non) |
+
+### Milestone 3 — Gouvernance humaine + préparation réelle
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M3 |
+| **Capacité v3** | V3-F05 chaîne · HumanDecision · ExecutionContract (F12 réversibilité) |
+| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor |
+| **État actuel** | F2 demo authority ; F3 fixture prepare |
+| **Actifs** | T-A3/T-A4 ; F2/F3 UI |
+| **Gaps** | L2 durable HD ; L3 proposal binding ; L8 REAL contract fields ; autorité non-demo |
+| **Dépendances** | M1–M2 ; IAM minimal |
+| **Preuve e2e** | GO Morris → HD accepted/current survive restart → contract fingerprint stable |
+| **Statut** | **PARTIAL** |
+
+### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M4 |
+| **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
+| **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
+| **État actuel** | F3 fixture only ; OPS1 REAL parallèle |
+| **Actifs** | T-A5 port ; OPS1 Cursor (**HARVEST**) ; critical-ack candidate |
+| **Gaps** | L6 adapter ; L7 Ack UI ; Gate D |
+| **Dépendances** | M3 ; promotion Ack ; Gate D |
+| **Preuve e2e** | Attempt REAL + journal markers + Evidence non-fixture ; FAIL CLOSED si adapter unavailable |
+| **Statut** | **NOT STARTED** |
+
+### Milestone 5 — Retour de preuve + analyse Nora
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M5 |
+| **Capacité v3** | V3-F14 Artifact Completeness · Evidence/ReviewBundle · F13 learning (base) |
+| **Outcome** | Evidence/ReviewBundle liés contrat/décision ; réinjectés Nora + LPS ; handoff Git transitionnel OK |
+| **État actuel** | UI cards Memory ; pas LPS write-back |
+| **Gaps** | L9 Evidence→LPS ; durable evidence |
+| **Dépendances** | M4 |
+| **Preuve e2e** | post-exec : ReviewBundle visible + LPS updated + recommendation next gate |
+| **Statut** | **PARTIAL** |
+
+### Milestone 6 — Boucle projet complète
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M6 |
+| **Capacité v3** | V3-F05 + F09 replanification (base) |
+| **Outcome** | Sans copier-coller manuel : conversation → qualification → décision → exécution → preuve → analyse → update projet → next step |
+| **État actuel** | Chaîne fragmentée / process-local / fixture |
+| **Dépendances** | M1–M5 |
+| **Preuve e2e** | parcours complet redémarrage-safe documenté |
+| **Statut** | **NOT STARTED** |
+
+### Milestone 7 — Élargissement contrôlé doctrine v3
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M7 |
+| **Capacité v3** | Couverture progressive F06–F10, F08, F13–F15 au-delà du backbone |
+| **Outcome** | Cycles/lenses/artefacts/transitions/contradictions/dette/capitalisation étendus **depuis** backbone utilisé |
+| **Dépendances** | M6 |
+| **Preuve** | matrice B9 avance avec preuves par fondation |
+| **Statut** | **NOT STARTED** |
+
+### Milestone 8 — Adoption produit / exploitation
+
+| Champ | Contenu |
+| --- | --- |
+| **ID** | M8 |
+| **Capacité v3** | Conditions d’un futur claim **v3 runtime ADOPTED** |
+| **Outcome** | persistence, IAM/authz, sécurité, observabilité, backup/reprise, qualité, rétention, multi-user si requis, coverage doctrine obligatoire |
+| **Anti-claim** | Ce milestone **ne préjuge pas** des critères non décidés et **n’autorise pas** le claim ADOPTED |
+| **Statut** | **NOT STARTED** |
+
+## B9. Matrice de couverture doctrine V3-F01…F15
+
+| Fondation | Capacité | État courant | Milestone(s) | Preuve attendue | Gap / décision |
+| --- | --- | --- | --- | --- | --- |
+| V3-F01 CKC | Qualification cognitive | PARTIAL (F2 qualify) | M2, M7 | CKC lié cycle + proposal | CycleInstance wire |
+| V3-F02 LPS | Living Project State | PARTIAL Memory | M1, M5 | LPS durable + writeback | persistence |
+| V3-F03 DoctrinePackage | Package pin/digest | KEEP files | M1–M2 | live digest in snapshot | contextSnapshot |
+| V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels | M2, M7 | tags/stop contradictions | later depth |
+| V3-F05 Chaîne conv→exec | Boucle native | PARTIAL fixture | M2–M6 | e2e sans copier-coller | backbone |
+| V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
+| V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
+| V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
+| V3-F09 Replanif | Governed replan | DOC | M6–M7 | next-step from ReviewBundle | after M5 |
+| V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
+| V3-F11 AgentCapability | Caps agents | Fixture agent | M4 | REAL agent descriptor | harvest |
+| V3-F12 Réversibilité | Action policy | Partial confirmations | M3–M4 | confirm+ack path | Ack UI |
+| V3-F13 Learning | REX contrôlé | DOC / capitalisation | M5, M7 | learning from Evidence | later |
+| V3-F14 Artifact Completeness | Completeness gates | Partial ReviewBundle | M5 | completeness checks | durable evidence |
+| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 | M8 | anti-claim maturity | no false READY |
+
+## B10. Chemin critique explicite
+
+```text
+CRITICAL PATH:
+  G0 (archi+persistence)
+  → M1 durable Project/LPS
+  → M2 Nora contextuel durable
+  → M3 HD durable + ExecutionContract exact
+  → M4 Cursor REAL borné (T-A5+harvest+Ack+Gate D)
+  → M5 Evidence/ReviewBundle + LPS writeback
+  → M6 boucle complète sans copier-coller
+
+TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
+FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
+DECISION REQUIRED: Option 1/2 · persistence tech · OPS1/D1/execution-run disposition · Ack promotion · Roadmap adoption · ChatGPT instructions
+```
+
+## B11. Freeze / stop-doing (**RECOMMENDATION**)
+
+Tant que le chemin critique n’est pas servi, **ne pas** étendre par défaut :
+
+- nouveaux lots FinOps sans dépendance Studio user-visible ;
+- nouvelles features execution-run indépendantes ;
+- expansion OPS1 UI (hors harvest adapter) ;
+- expansion D1 `/projects` ;
+- micro-hardening T-A7 sans blocker utilisateur.
+
+Ces FREEZE sont des **recommandations** jusqu’à validation Morris.
+
+## B12. Maintenance de la roadmap
+
+Mettre à jour après : décision Morris structurante · milestone obtenue · nouvelle preuve · changement de dépendance · architecture validée · réserve bloquante · post-merge structurant.
+Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.
+
+## Références
+
+- Build Doctrine : [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md)
+- Audit handoff : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
+- Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37`
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index b9ce0a9f..85ca7391 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -74,6 +74,7 @@ routing guide (sfia-cycle-routing-guide.md)
 → template d'exécution (prompts/templates/sfia-cycle-execution-template.md)
 → operating model (sfia-chatgpt-cursor-operating-model.md)
 → guardrails (sfia-rules-and-guardrails.md)
+→ si objet = construction/évolution SFIA Studio : Convergence Pre-check (§2.0.G)
 → contexte projet (documents projet concernés)
 → prompt Cursor généré (contrat d'exécution)
 ```
@@ -124,6 +125,30 @@ Repo-informed pre-check ChatGPT
 - push handoff autorisé : oui — L3 borné (automatique si rapport Cursor, sauf exception technique)
 - limites / incertitudes :
 - verdict : PROMPT CURSOR READY / NEED MORRIS CLARIFICATION
+
+SFIA Studio Convergence Pre-check :
+- triggered : oui / non
+- Build Doctrine :
+  - path : projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md
+  - ref :
+  - lue : oui/non
+  - statut :
+- Convergence Roadmap :
+  - path : projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+  - ref :
+  - lue : oui/non
+  - snapshot/milestone courant :
+- doctrine v3 applicable :
+- capacité v3 ciblée :
+- milestone ciblée :
+- classification actifs :
+- gap(s) fermé(s) :
+- lien trajectoire :
+- exit proof :
+- dette temporaire :
+- trajectoire de sortie :
+- gates Morris :
+- verdict : CONVERGENCE CONTEXT LOADED / PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE / STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
 ```

 #### E. Cas Git inaccessible
@@ -144,15 +169,61 @@ Cursor devra renforcer la découverte locale et stopper si divergence.

 | Niveau | Rôle | Source |
 |--------|------|--------|
-| **1. Instructions projet ChatGPT** | Déclencheur dans un **nouveau chat** — évite la dépendance à la mémoire conversationnelle | Projet ChatGPT (hors Git) — voir §10 |
-| **2. Template Git** | Source canonique versionnée — procédure Repo-informed pre-check | Ce fichier sur Git `main` |
+| **1. Instructions projet ChatGPT** | Déclencheur dans un **nouveau chat** — évite la dépendance à la mémoire conversationnelle | Projet ChatGPT (hors Git) — voir §10 ; **couche Studio convergence = PENDING** (mise à jour instructions = étape ultérieure Morris) |
+| **2. Template Git** | Source canonique versionnée — procédure Repo-informed pre-check (+ Convergence Pre-check Studio) | Ce fichier sur Git `main` |
 | **3. Prompt Cursor généré** | Contrat d'exécution — vérifié localement par Local Git Truth Check | Prompt instancié par ChatGPT |

+#### G. SFIA Studio Convergence Pre-check (spécialisation bornée)
+
+> **Ne s’applique pas** aux projets SFIA sans rapport avec la construction de SFIA Studio.
+> **Ne transforme pas** ce template en template Studio-only.
+
+**Trigger Studio = oui** si l’objet est la construction, l’évolution, l’architecture, la roadmap, la validation ou le prompting de **SFIA Studio** (même trigger que routing guide §4.3.0a).
+
+Lorsque trigger = oui, ChatGPT **doit** lire depuis Git **avant** de générer le prompt :
+
+1. `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
+2. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
+3. sources v3 applicables (`projects/sfia-studio/sfia-v3-framing/**`)
+4. état repo/projet Studio concerné
+
+**Règle dure :**
+
+```text
+trigger Studio = oui
+ET (Build Doctrine non lue
+    OU Roadmap non lue
+    OU capacité / trajectory link non qualifié)
+→ NE PAS générer le prompt Cursor
+
+PROMPT NOT GENERATED — SFIA STUDIO CONVERGENCE PRE-CHECK INCOMPLETE
+```
+
+Si l’analyse Studio elle-même n’a pas chargé le contexte convergence requis :
+
+```text
+STUDIO WORK NOT QUALIFIED — CONVERGENCE CONTEXT NOT LOADED
+```
+
+Séquence :
+
+```text
+Repo-informed pre-check
+→ si Studio trigger : Convergence Pre-check (§2.0.G + mini-fiche)
+→ qualification cycle
+→ CKC/process guidance applicable
+→ sources spécifiques
+→ instanciation prompt Cursor
+```
+
+Clarifications : Build Doctrine + Roadmap = gouvernance de **construction** ; doctrine v3 = destination produit ; v2.6 = baseline opérationnelle processus ; runtime v3 **non ADOPTED** par défaut.
+
 ### 2.1 Déclenchement

 À partir d'une demande Morris (nouveau chat ou conversation en cours) :

 0. **Repo-informed pre-check** — §2.0 si trigger actif
+0bis. **SFIA Studio Convergence Pre-check** — §2.0.G si objet = construction/évolution SFIA Studio ; sinon N/A
 1. **Qualifier** la demande — objectif, risque, impact, livrable attendu
 2. **Identifier le type de cycle projet** — cartographie §4 (15 cycles)
 2bis. **Résoudre le Cycle Knowledge Contract candidat** — routing guide §4.4.5 ; lire pilote si disponible ; sinon carte synthétique + fallback méthode v2.6 ; déclarer statut `candidate` / `absent` dans la mini-fiche §2.0.D
@@ -163,7 +234,7 @@ Cursor devra renforcer la découverte locale et stopper si divergence.
 7. **Définir le périmètre Git/documentaire** — fichiers autorisés, interdits, protégés
 8. **Décider review pack** — §7 : pour tout cycle Cursor **produisant un rapport** → **light** ou **full** obligatoire (jamais `none`) ; opération read-only sans rapport Cursor → hors contrat review pack
 9. **Décider Review Handoff Git** — §7.10–§7.11 : pour tout cycle Cursor **produisant un rapport** → **required** + Mode **`publish-in-cycle`** + `Push handoff autorisé = oui — L3 borné` **automatiques** ; `local-only` = exception technique documentée uniquement (§7.10.3) — jamais `not required` pour un rapport Cursor ; combinaison invalide (rapport + none / not required / local-only non conforme) → `PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING` ; mode contradictoire → `PROMPT INCOMPLETE — REVIEW HANDOFF MODE INCONSISTENT`
-10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite ; le CKC reste hors contrat d'exécution Cursor
+10. **Générer le prompt Cursor complet** — squelette §5, blocs activés injectés, verdict attendu explicite ; le CKC reste hors contrat d'exécution Cursor ; **interdit** si §2.0.G échoue

 ### 2.2 Nouveau chat et sources projet


```

---

## 12. Instruction ChatGPT

Lire ce handoff depuis Git avant verdict.
Si remote SHA / PR head = `da0618db...`, base main, 1 commit, 6 fichiers, handoff PASS, merge non effectué :
**PR CREATED — REMOTE PATCH VERIFIED — SFIA STUDIO CONVERGENCE READY FOR FINAL PR READINESS — MORRIS MERGE GATE STILL REQUIRED**
Ne pas merger sans nouveau GO Morris.
