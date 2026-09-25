# STUDYFLOW NATURAL POST-INTEGRATION REPROOF
## Phase B — FAILURE DIAGNOSIS & POST-#522 RETRY ELIGIBILITY
## FULL Review Pack — Cursor → ChatGPT

Generated: 2026-09-25T21:35:27Z
Campaign: STUDYFLOW NATURAL POST-INTEGRATION REPROOF
Phase: B — FAILURE DIAGNOSIS & POST-#522 RETRY ELIGIBILITY
Cycle: 9 — QA / validation
Profile: CRITICAL
Morris GO consumed: **GO STUDYFLOW PHASE B — READ-ONLY FAILURE DIAGNOSIS**
Cursor REAL: NOT RUN
Product mutations: NONE
Retry / StartExecution / Confirmation / HD / trajectory mutation: NONE

---

## 1. GO MORRIS CONSUMED

GO STUDYFLOW PHASE B — READ-ONLY FAILURE DIAGNOSIS.

Authorized: Git Truth · code/config non-secret read · Product SQLite RO · Nora Session RO if needed · Evidence/RB/Attempt/Claim inspect · managed repo Git RO · historical vs post-#522 comparison · FULL Review Pack · L3 handoff.

Not authorized / not performed: Cursor REAL · Retry · Select/StartExecution · EC prepare/amend · Confirmation · HD · trajectory/LPS/Evidence mutation · Reservation resolve · durable Nora · fresh StudyFlow · .env.local edit · managed fetch/pull/checkout/worktree · code change · project push/PR/merge · Roadmap · GAP-15.

---

## 2. GIT TRUTH

| Field | Value |
|-------|-------|
| Local branch | `feat/sfia-studio-pilot-execution-experience-recovery-simplification-01` |
| HEAD | `49249101bab1bd1e3a1d91b469fe7b41341c5a01` |
| `origin/main` | `49249101bab1bd1e3a1d91b469fe7b41341c5a01` |
| Match expected post-#522 | **YES** |
| Product dirty | none outside `.tmp-sfia-review/**` |
| Reset/rebase/merge this pass | NONE |

---

## 3. PHASE A ANCHOR

| Field | Value |
|-------|-------|
| Handoff branch | `sfia/review-handoff` |
| Commit | `f1cc8c01a3c44704bc283bada56cab463ddb2f1f` |
| Canonical blob | `3609545c0efbcf8f92df1c66ccf2145ac2a5748a` |
| Match expected | **YES** |

Project: `prj:34e7351c-770c-474a-8edc-9c82a07be41d` · LPS v32 · cycle `cyc:trj-2ee956d99383359aadd408d1` · trajectory v3 **clarify-first** · Phase B = steps 1–2 only.

---

## 4. SOURCES READ

Process templates/checklists/operating model/validation + doctrine v3 32/34/35 + CKC QA + convergence/build/roadmap/product-completion (read-only).

Diagnostic code: `resolveTrustedProductLaunchContext.ts` · `prepareDocsWriteRecoverySuccessor.ts` · `prepareAndResolveM3ProductPath.ts` · `processFailureDiagnostic.ts` · `resolvePostEvidenceRecoveryContext.ts` · `managedProjectRepositoryResolver.ts` · `studioGitWorktreeWorkspace.ts` · `studioCursorRealLaunchGateway.ts` · `startExecution.ts` · `resolveBoundedReadOnlyBaseHeadSha.ts` · `managedRepoRootBaseConfig.ts`.

Remote Phase A handoff canonical file verified before conclusion.

---

## 5. PRODUCT SQLITE

| Field | Value |
|-------|-------|
| Path | `…/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite` (from `SFIA_STUDIO_PRODUCT_DB_PATH` only) |
| Method | `file:…?mode=ro` + `PRAGMA query_only=ON` |
| integrity_check | **ok** |
| schema | `m8-0.1.0` |
| Same StudyFlow truth as Phase A | **YES** |

---

## 6. HISTORICAL EPISODE (DURABLE)

### ExecutionContract
| Field | Value |
|-------|-------|
| executionContractId | `xct:m3-res:dec:w2-prop:0d65e1cd-b259-4222-860b-a783a01bf4c0` |
| Version at Attempt | **3** |
| Status | confirmed |
| semanticFingerprint | `bd43c1aa1b3b4a51b6fd0a10a2cd682fde18c1834d9f7efc05a1e01b9f2b1bb6` |
| action | `cursor.docs_write.apply` |
| target | `workspace.isolated.docs_write` |
| scope | `studio.gcec.docs_write` |
| requiredAuthority | MORRIS |
| requiredCapabilities | `cap:cursor.docs_write` |
| evidenceRequirements | `evreq:docs_write_artifact` |

### Inputs (diagnostic-relevant)
| Field | Status | Value |
|-------|--------|-------|
| baseHeadSha | **PRESENT** | `df6721edb4ce4e71166fe26ca0d369aebd278870` |
| repositoryRef / repositoryBindingIdentity / repositoryIdentity | PRESENT | `mcleland147/sfia-workspace` |
| remoteUrl | PRESENT | `https://github.com/mcleland147/sfia-workspace.git` |
| defaultBranch | PRESENT | `main` |
| pathRoot (EC inputs) | PRESENT | `projects/studyflow/01-cadrage` |
| Project.repositoryBinding.pathRoot | PRESENT | `projects/studyflow` |
| managedRepoRoot | **ABSENT** | — |
| trustedLaunchContextPinnedAtPrepare | **ABSENT** | — |
| targetPath | PRESENT | `projects/studyflow/01-cadrage/note-de-cadrage.md` |
| pathAllowlist / scopeIn | PRESENT | `projects/studyflow/01-cadrage` |

### Attempt
| Field | Value |
|-------|-------|
| attemptId | `xat:w3a:0a9d88215cf8f884` |
| status | failed |
| createdAt | 2026-09-25T15:14:47.224Z |
| failedAt | 2026-09-25T15:14:47.279Z (~55 ms) |
| stopReason | `REAL_LAUNCH_FAILED: REAL_WORKSPACE_INVALID:base_head_sha_missing` |
| selectedAgentRef | `agt:m4.cursor.bounded_docs_write` |
| processDiagnostic | **ABSENT** (failure before Cursor process observation) |
| realProcessInvoked / boundaryProofMode / executable basename / stdout/stderr | **ABSENT** on Attempt payload |

### Evidence / ReviewBundle / Claim
| Object | Status |
|--------|--------|
| `ev:w3b:7b9022c9c4221122` | available · metadata_only · log_ref diagnostic |
| `rb:w3b:7b9022c9c4221122` | ready_for_review · frozen Evidence |
| `clm:w3b:7b9022c9c4221122` | **fail** · EO assessments FAIL |
| Business success | **NOT PROVEN** |

---

## 7. HISTORICAL FAILURE MECHANICS — `base_head_sha_missing`

Code (`StudioGitWorktreeWorkspace.prepareWorkspace`):

1. Validate `baseHeadSha` is full 40-hex (else `base_head_sha_invalid`).
2. Choose `repoRoot` = `request.managedRepoRoot` if provided, else constructor ambient `repoRoot`.
3. Run `git rev-parse --verify <baseHeadSha>^{commit}` in that `repoRoot`.
4. Non-zero exit → throw `REAL_WORKSPACE_INVALID:base_head_sha_missing`.

`StartExecution` for docs_write (current and historically for managed composition):
- Rejects EC-supplied absolute `managedRepoRoot`.
- Resolves managed clone via `ManagedProjectRepositoryResolver` under `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE`.
- Passes that path into workspace prepare.

### A. Historical baseHeadSha requested
`df6721edb4ce4e71166fe26ca0d369aebd278870` — **PRESENT** on EC + bound Attempt material. Studio checkout: **exists** (`df6721ed` = finalization-readiness commit). Managed clone: **absent**.

### B. Historical repoRoot
Not stored as durable field (`managedRepoRoot` ABSENT on EC). **Reconstructible by composition**: docs_write StartExecution resolves managed identity `mcleland147/sfia-workspace` → `…/managed-repos/mcleland147__sfia-workspace` when base configured. That clone still exists today and **does not** contain the historical SHA.

### C. Meaning of the failure
| Hypothesis | Classification |
|------------|----------------|
| SHA formally valid 40-hex but absent from repoRoot used | **PROVEN** (object missing in managed clone; present in Studio) |
| repoRoot = managed clone (not Studio cwd) | **STRONGLY SUPPORTED** (if Studio cwd had been repoRoot, `rev-parse` would have succeeded) |
| Managed clone not synchronized to the SHA that was pinned | **STRONGLY SUPPORTED** |
| Legacy pin from ambient Studio checkout / non-trusted prepare | **STRONGLY SUPPORTED** (`trustedLaunchContextPinnedAtPrepare` ABSENT; pin equals Studio-lineage SHA) |

Cause class: **LEGACY PRE-#522 LAUNCH CONTEXT** (SHA↔repoRoot mismatch) with **ENVIRONMENT / MANAGED REPO PRECONDITION** as the concrete mismatch surface. Not a proven current Product path defect.

---

## 8. CURRENT MANAGED REPOSITORY

| Field | Value |
|-------|-------|
| `SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` | `…/projects/sfia-studio/.sfia-exec/managed-repos` (**PRESENT**, directory exists) |
| Canonical managedRepoRoot | `…/managed-repos/mcleland147__sfia-workspace` |
| Exists / `.git` | YES |
| `rev-parse --is-inside-work-tree` | true |
| toplevel | same canonical path |
| HEAD | `66ffc0d2370d9ed7014348fd25994ce1cda3b3ad` |
| Branch | **detached HEAD** |
| status --short | clean (0 lines) |
| origin URL (diagnostic only) | `/Users/morris/Projects/sfia-workspace` (local path; **not** treated by code as workspace validity invariant) |
| Historical SHA in managed clone | **NO** |
| Current HEAD `rev-parse --verify <HEAD>^{commit}` in same clone | **YES** |
| Managed HEAD vs `origin/main` Studio | Managed at #513-era merge; Studio main at #522 — **stale relative to main** (observation only; no fetch authorized) |

---

## 9. POST-#522 TRUSTED LAUNCH PATH (STATIC + FS/GIT FACTS)

Conceptual replay (not executed):

`Project.repositoryBinding` → `resolveTrustedProductLaunchContext` → `ManagedProjectRepositoryResolver` → managedRepoRoot → `resolveBoundedReadOnlyBaseHeadSha(managedRepoRoot)` → current managed HEAD → `launchContextAsContractInputs` → EC successor → Confirmation → future StartExecution.

Checklist:

| # | Check | Result |
|---|-------|--------|
| 1 | repositoryBinding.identity present | YES `mcleland147/sfia-workspace` |
| 2 | managed root base present | YES |
| 3 | canonical managed clone exists | YES |
| 4 | managed clone readable Git repo | YES |
| 5 | current HEAD full 40-hex | YES `66ffc0d2…` |
| 6 | that HEAD verifiable in **this** clone | YES |
| 7 | Project pathRoot StudyFlow | YES `projects/studyflow` |
| 8 | no silent fallback to process.cwd / Studio checkout in trusted resolver | YES — fail-closed `MANAGED_REPO_UNAVAILABLE` if clone missing |
| 9 | post-#522 pins baseHeadSha from managed clone itself | YES |
| 10 | `trustedLaunchContextPinnedAtPrepare` only after successful resolve | YES (`prepareAndResolveM3ProductPath` / recovery successor) |
| 11 | recovery successor uses same resolver | YES (`prepareDocsWriteRecoverySuccessor`) |
| 12 | client-supplied baseHeadSha cannot widen authority | YES — server resolve; StartExecution rejects EC absolute managedRepoRoot |

Note: `launchContextAsContractInputs` does **not** persist `managedRepoRoot` into EC inputs (by design); StartExecution re-resolves server-side.

---

## 10. HISTORICAL vs POST-#522

| Dimension | HISTORICAL ATTEMPT | CURRENT POST-#522 PATH |
|-----------|--------------------|------------------------|
| Source of baseHeadSha | Studio-lineage SHA `df6721ed…` without trusted pin marker | Managed clone HEAD via `resolveBoundedReadOnlyBaseHeadSha(startDir=managedRepoRoot)` |
| Repository identity | Present on EC | From durable `Project.repositoryBinding` |
| repoRoot at prepare | Managed clone (strongly supported) | Managed clone re-resolved at StartExecution |
| Pin timing | Before #522 trusted pack | Before inspection/authorize when trusted resolve succeeds |
| trusted launch context | ABSENT | Marker set only on success |
| Validation before Confirm/Start | SHA present on EC but not proven in managed objects | Trusted resolve fail-closed before prepare; Start re-resolves managed root |
| If managed repo absent | Historical episode still launched with mismatched pin | Fail-closed (`MANAGED_REPO_UNAVAILABLE` / `docs_write_managed_repo_unresolved`) |
| Ambient Studio checkout fallback | Effective pin source (legacy) | Explicitly forbidden in trusted path comments + fail-closed |
| Recovery successor | N/A for this episode | Same trusted resolver; fail-closed; no auto Execute |
| SHA ↔ repoRoot mismatch | **Occurred** | **Guarded**: SHA derived from same clone used at prepare |

Three notions:
- **A. Historical cause explained** — YES (STRONGLY SUPPORTED / PROVEN mismatch class)
- **B. Current path guards same failure class** — YES
- **C. REAL retry actually proven** — **NOT PROVEN** (out of scope)

---

## 11. CAUSE CLASSIFICATION

**Primary:** LEGACY PRE-#522 LAUNCH CONTEXT

**Secondary surface:** ENVIRONMENT / MANAGED REPO PRECONDITION (managed object store lacked the pinned SHA)

**Not used:** CURRENT PRODUCT PATH DEFECT SUSPECTED (no evidence the post-#522 trusted path still admits the same silent SHA↔repoRoot mismatch before REAL)

Acceptable formulation: failure class is now guarded by the current trusted resolver; current non-REAL trusted-launch preconditions are satisfied; historical root cause reconstructed as SHA pinned outside managed object identity vs repoRoot = managed clone.

Forbidden formulations avoided: fixed in production · retry will succeed · Cursor REAL proven · docs_write works · StudyFlow REAL validated.

---

## 12. CURRENT RETRY PRECONDITION QUALIFICATION

| Precondition | Status |
|--------------|--------|
| StudyFlow Project durable coherent | YES |
| Trajectory = clarify-first | YES |
| No active blocking Reservation | YES (0 active) |
| Repository binding coherent | YES |
| Managed repository root configured | YES |
| Managed clone available | YES |
| Managed clone current HEAD valid | YES |
| Trusted launch resolver can derive full launch context in principle | YES (would pin `66ffc0d2…`) |
| No known structural Product contradiction before REAL | YES |
| Existing failure Evidence correctly FAIL | YES |

**PRECONDITIONS SATISFIED**

(Meaning: sufficient facts to ask for the next governed decision — **≠ READY FOR REAL ≠ authorization to execute**.)

Operational observation (non-blocking for this eligibility definition): managed clone HEAD is stale vs Studio `origin/main` and detached; any future REAL would pin that current managed HEAD until an **authorized** operational sync (not this GO).

---

## 13. FINDINGS

| ID | Finding | Class | Diagnostic tag |
|----|---------|-------|----------------|
| B1 | `base_head_sha_missing` = managed `rev-parse` miss on historical SHA | EXPECTED | LEGACY PRE-#522 FAILURE |
| B2 | Historical SHA in Studio, absent in managed clone | EXPECTED | ENVIRONMENTAL PRECONDITION |
| B3 | No trusted pin marker on historical EC | EXPECTED | LEGACY PRE-#522 FAILURE |
| B4 | Post-#522 trusted path derives SHA from managed clone | EXPECTED | CURRENT PATH GUARD |
| B5 | Managed clone present, HEAD self-verifiable | EXPECTED | — |
| B6 | Managed clone stale / detached vs main #522 | NON-BLOCKING RESERVE | ENVIRONMENTAL PRECONDITION |
| B7 | origin URL is local filesystem path | NON-BLOCKING RESERVE | (diagnostic only; not code invariant) |
| B8 | EC pathRoot `…/01-cadrage` vs Project pathRoot `projects/studyflow` | LEGACY | (historical EC inputs; Project binding remains StudyFlow root) |
| B9 | processDiagnostic absent (fail before process) | EXPECTED | — |
| B10 | REAL retry / docs_write success | NOT PROVEN | — |

---

## 14. GAP-15

OPEN RESERVE · OUT OF CURRENT MACRO · NON-BLOCKING · not reopened · not reproduced.

---

## 15. ROADMAP

MealFlow wording = DOCUMENTARY DRIFT — NON-BLOCKING RESERVE. Not modified.

---

## 16. FAKE / REAL QUALIFICATION

| Item | Status |
|------|--------|
| Historical | REAL PROCESS ATTEMPTED · business FAIL / NOT PROVEN · fail at workspace prepare |
| #522 deterministic | PROVEN at declared scope |
| Phase B | READ-ONLY DIAGNOSIS ONLY |
| Fixtures | NONE |
| REAL BOUNDARY / E2E REAL | OUT OF SCOPE · NOT PROVEN |
| Gate Morris REAL | **REQUIRED BEFORE ANY RETRY** |

Hard rule preserved: DETERMINISTIC PROVEN ≠ CURRENT PRECONDITIONS SATISFIED ≠ READY FOR REAL ≠ REAL BOUNDARY PROVEN ≠ E2E REAL PROVEN.

---

## 17. CLAIMS

**Authorized:** historical failure explained · current trusted launch preconditions satisfied · failure class guarded by current path · retry remains gated and unproven.

**Forbidden (not claimed):** READY FOR REAL · Cursor REAL fixed · docs_write REAL proven · StudyFlow E2E proven · #522 fixes every recovery failure · runtime v3 ADOPTED · global L5 · Product READY · Nora Cognitive Completion complete · GAP-15 closed · Roadmap synced · next macro selected.

---

## 18. NEXT NATURAL ACTION CANDIDATE

Return this diagnosis to ChatGPT for **trajectory step 3 requalification** (réinstruire options recovery — Pilot HumanDecision). Do **not** retry, do **not** REAL, do **not** create the HD in this cycle.

Optional operational note for ChatGPT (not executed): managed clone freshness vs main may matter before any future REAL pin — requires separate authorized ops, not Phase B.

---

## 19. REQUIRED AUTHORITY / GATE

- Now: none beyond ChatGPT/Morris requalification of next contract.
- Trajectory step 3: **PILOT ACTION REQUIRED** (HumanDecision).
- Any docs_write REAL retry: **GO REAL MORRIS DISTINCT** (after next natural action qualification).

---

## 20. FINAL VERDICT

**LEGACY PRE-#522 LAUNCH CONTEXT FAILURE — CURRENT TRUSTED PATH PRECONDITIONS SATISFIED**

This does **not** mean READY FOR REAL or REAL PROVEN.

---

## 21. INSTRUCTION TO CHATGPT

NE PAS continuer automatiquement StudyFlow.
NE PAS lancer Cursor REAL.
NE PAS retry l’Attempt.
NE PAS créer de HumanDecision.
Retourner ce rapport pour requalification de la trajectoire.
