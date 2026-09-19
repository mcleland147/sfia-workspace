# PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01 — Review Pack FULL

**Timestamp (UTC):** 2026-09-19T04:24:46Z
**Campaign:** PRODUCT-JOURNEY-E2E-CURRENT-MAIN-CLOUD-REPROOF-01
**Cycle:** 9 — QA / VALIDATION
**Profile:** CRITICAL
**Level:** FULL / CRITICAL / READ-ONLY AUDIT
**Mode:** CURRENT-MAIN CLOUD CAPABILITY AUDIT
**NO MICRO-CYCLE:** YES
**NO PRODUCT MUTATION:** YES
**NO UI AUTOMATION:** YES
**NO CURSOR REAL:** YES
**NO SECRET VALUES:** YES
**Cloud Agent:** `bc-135bd352-8d09-4c1d-b0d3-a50c2b296436`
**Manual Project:** `prj:288f7e1a-720a-40b2-baac-37710c0e1e87`
**Verdict:** CURRENT-MAIN CLOUD PRODUCT ENVIRONMENT READY WITH PROJECT-LEVEL PRECONDITIONS

---

## 1. Git Truth

| Item | Result |
|---|---|
| origin/main | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| Runtime worktree | `/tmp/sfia-pj-cloud-01-main` |
| Runtime HEAD | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| Product source diff | **NONE** |
| PR #504 on main | **YES** — merge `9c6ac909` · feat `3d48ed70` |
| PR #505 on main | **YES** — merge `a6dba977` · feat `ce61740b` |

### Required current-main file presence

| Path | Status |
|---|---|
| `features/project-assistant/w2/w3cPostEvidenceLoop.ts` | PRESENT |
| `features/project-assistant/w2/resolvePostEvidenceRecoveryContext.ts` | PRESENT |
| `features/project-assistant/f3/postEvidenceNoraAnalysis.ts` | PRESENT |
| `features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion.ts` | PRESENT |
| `lib/oa/evidence-review/application/docsWriteMinConformityVerifier.ts` | PRESENT |

---

## 2. Product Truth C

| Item | Result |
|---|---|
| Product DB path | `/workspace/projects/sfia-studio/.sfia-exec/pje2e-cloud-reproof-01/product/oa-product.sqlite` |
| Opens | YES (read-only) |
| schema_meta | `m8-0.1.0` |

### Persistence families (tables)

| Family | Table | Presence |
|---|---|---|
| Project | `oa_projects` | PRESENT |
| LPS | `oa_lps` | PRESENT |
| LPS current | `oa_lps_current` | PRESENT |
| CycleInstance | `oa_cycle_instances` | PRESENT |
| ProjectTrajectory | `oa_project_trajectories` | PRESENT |
| Trajectory current | `oa_project_trajectory_current` | PRESENT |
| HumanDecision | `oa_human_decisions` | PRESENT |
| Confirmation | `oa_confirmations` | PRESENT |
| ExecutionContract | `oa_execution_contracts` | PRESENT |
| Inspection Attestation | `oa_ec_inspection_attestations` | PRESENT |
| AVR | `oa_authority_verification_receipts` | PRESENT |
| ExecutionAttempt | `oa_execution_attempts` | PRESENT |
| Evidence | `oa_evidence` | PRESENT |
| ReviewBundle | `oa_review_bundles` | PRESENT |
| ClaimEvaluation | `oa_claim_evaluations` | PRESENT |
| Epistemic | `oa_epistemic_items` | PRESENT |

### Current Project snapshot (read-only)

| Field | Value |
|---|---|
| Project exists | **YES** |
| Title | Mini cadrage — Suivi de tâches |
| Current LPS | `lps:c2e892c6cb145785` · **version 2** · active (v1 superseded) |
| Candidate trajectory | **PRESENT** · `trj:lr-bridge-f6380cb62f2a` · version **1** · status **candidate** · 1 step (`Cadrage` / pending) |
| Trajectory current pointer | **ABSENT** (candidate not yet approved/current) |
| HumanDecision count | **0** |
| CycleInstance count | **0** |
| ExecutionContract count | **0** |
| ExecutionAttempt count | **0** (global Attempts table = 0) |
| Product Cursor REAL consumed | **0** |

---

## 3. Memory B / Nora Session

| Item | Result |
|---|---|
| `SFIA_STUDIO_NORA_SESSION_DB_PATH` | UNSET → canonical default resolution used |
| Resolved path | `/tmp/sfia-pj-cloud-01-main/projects/sfia-studio/.sfia-exec/product/nora-session.sqlite` |
| Exists | **YES** |
| `session_items` | PRESENT (count 8) |
| `logical_product_turns` | PRESENT (count 3) |
| `logical_product_turn_retry_bindings` | PRESENT |
| Classification | **MEMORY_B_AVAILABLE** |

No conversation/provider payloads displayed.

---

## 4. Nora LIVE (config only — no model call)

| Variable | Status |
|---|---|
| OPENAI_API_KEY | SET |
| OPENAI_MODEL | SET |
| OPENAI_REASONING_EFFORT | UNSET (intentional) |
| OPS1_CONVERSATION_PROVIDER | UNSET (fake NOT forced) |
| `getLiveConversationAvailability().available` | **true** |

---

## 5. Auth (presence only)

| Variable | Status |
|---|---|
| BETTER_AUTH_SECRET | SET |
| BETTER_AUTH_URL | SET (`http://localhost:3020`) |
| GITHUB_CLIENT_ID | SET |
| GITHUB_CLIENT_SECRET | SET |
| SFIA_STUDIO_ALLOWED_GITHUB_USER_IDS | SET |
| Structural auth config | AVAILABLE |
| Studio `/login` | HTTP 200 · AUTH_CONFIG_ERROR ABSENT |

No re-auth / cookie manipulation performed.

---

## 6. Cursor REAL Product boundary (no launch)

| Check | Result |
|---|---|
| SFIA_STUDIO_CURSOR_REAL | enabled (`1`) |
| Deterministic Cursor boundary | NOT enabled |
| OPS1_CURSOR_REAL | UNSET (not forcing alternate) |
| Native bin | `/home/ubuntu/.local/bin/cursor-agent` · RESOLVED |
| Native auth | PASS (`m.cleland@live.fr`) — no auth material displayed |
| Managed base for composition | `/tmp/sfia-pj-cloud-01-managed` |
| `composeStudioProductRealBoundary` preconditions | **YES** (flag+bin+managed; compose not executed to avoid FS mkdir side-effects) |
| Product Cursor REAL count | **0** unchanged |

---

## 7. Managed repository

| Item | Result |
|---|---|
| SFIA_STUDIO_MANAGED_REPO_ROOT_BASE | `/tmp/sfia-pj-cloud-01-managed` |
| Identity path | `.../mcleland147__sfia-workspace` |
| HEAD | `a6dba9776bfb1b4cb1570a87b20b0c71e546e441` |
| Status | clean |
| Git mutation | NONE |

---

## 8. RepositoryBinding — current Project

| Item | Result |
|---|---|
| RepositoryBinding | **NOT_CONFIGURED** |
| Classification | **PROJECT-LEVEL OPERATIONAL PRECONDITION BEFORE REPOSITORY-TARGETED EXECUTION** |
| Not a missing global Product feature | YES |

---

## 9. Post-#502 / #504 / #505 Product capabilities (code availability only)

| Capability | Class |
|---|---|
| A. W3-C evidence-backed recovery / replan | **AVAILABLE** |
| B. ClaimEvaluation-aware recovery | **AVAILABLE** |
| C. post-Evidence Nora analysis | **AVAILABLE** |
| D. docs_write Result Semantics | **AVAILABLE** |
| E. docs_write min-conformity verifier v2 | **AVAILABLE** |
| F. claim Evidence completion | **AVAILABLE** |
| G. successor ReviewBundle / ClaimEvaluation path | **AVAILABLE** |
| H. Product SUCCESS projection after proven claim | **AVAILABLE** |

None executed.

---

## 10. Conditional / non-global capabilities

| Capability | Class |
|---|---|
| GCEC A/B/C/D (docs_write / commit / push / PR create paths) | **AVAILABLE_BUT_GOVERNED** |
| GCEC E (PR merge) | **NOT_AUTHORIZED** at this campaign scope |
| MW6 hosted web search | **AVAILABLE_BUT_GOVERNED** (proven historically at tested scope; authority-gated) |
| Stage A model×reasoning campaign | **NOT_AUTHORIZED** |
| global L5 | **NOT_ADOPTED** |
| runtime v3 | **NOT_ADOPTED** / **NON ADOPTED** |

Capability ≠ authority.

---

## 11. Final matrix

| Capability/Object | Code on current main | Runtime composed | Current Project ready | Authority/gate status | Notes |
|---|---|---|---|---|---|
| Project | YES | YES | YES | Pilote session required for UI | Exists active |
| Truth C | YES | YES | YES | DB open RO | schema `m8-0.1.0` |
| LPS | YES | YES | YES | — | v2 current |
| Memory B | YES | YES | YES | — | session DB initialized |
| Nora LIVE | YES | YES | YES | provider openai available | no new call |
| Lifecycle Recommendation | YES | YES | YES | — | NEXT_CYCLE framing candidate context |
| ProjectTrajectory | YES | YES | PARTIAL | HD approval pending | candidate present; current pointer absent |
| HumanDecision | YES | YES | NOT YET | Morris Pilote only | count 0 |
| DecisionBasis | YES | YES | N/A | — | code path present |
| Confirmation | YES | YES | NOT YET | Morris | count 0 |
| ExecutionContract | YES | YES | NOT YET | gates | count 0 |
| Inspection | YES | YES | NOT YET | — | table present |
| effective authority / AVR | YES | YES | NOT YET | S1/AVR gates | table present |
| Cursor REAL | YES | YES (composable) | env ready | Execute gated | REAL count 0 |
| ManagedRepo resolver | YES | YES | YES | — | clean @ main |
| RepositoryBinding | YES | YES | **NO** | Project precondition | NOT_CONFIGURED |
| ExecutionAttempt | YES | YES | NOT YET | — | count 0 |
| Evidence | YES | YES | NOT YET | — | empty |
| ReviewBundle | YES | YES | NOT YET | — | empty |
| ClaimEvaluation | YES | YES | NOT YET | — | empty |
| ContractResult | YES | YES | NOT YET | docs_write path on main | not exercised |
| #504 W3-C recovery | YES | YES | code ready | post-Evidence | not executed |
| #505 claim evidence completion | YES | YES | code ready | zero-REAL mechanism | not executed |
| post-Evidence Nora | YES | YES | code ready | LIVE when path uses it | not executed |
| GCEC A/B/C/D | YES | YES | CONDITIONAL | governed + binding | needs RepositoryBinding for repo-targeted |
| GCEC E | YES | YES | NO | NOT_AUTHORIZED | merge |
| MW6 | YES | YES | CONDITIONAL | authority-gated | not this campaign focus |
| Stage A | YES | YES | NO | NOT_AUTHORIZED | — |
| runtime v3 | doctrine only | NO | N/A | NON ADOPTED | — |
| global L5 | doctrine only | NO | N/A | NOT_ADOPTED | — |

---

## 12. Controls honored

READ ONLY · no Product state mutation · no source modification · no DB write · no UI action · no Nora call · no HD/Confirmation/EC/Execute · no Cursor REAL launch · no git mutation · no account mutation · no secrets printed.

---

## 13. Final verdict

**CURRENT-MAIN CLOUD PRODUCT ENVIRONMENT READY WITH PROJECT-LEVEL PRECONDITIONS**

Global Cloud Product runtime for current-main manual Product Journey is composed and available. Project-level gap before repository-targeted execution: **RepositoryBinding NOT_CONFIGURED**. Candidate trajectory already prepared; HumanDecision / Cycle / Execute remain Morris-only next gates. Product Cursor REAL remains **0**. runtime v3 remains **NON ADOPTED**.
