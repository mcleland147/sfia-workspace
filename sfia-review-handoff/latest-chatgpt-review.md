# RECOVERY-DOCS-WRITE-MODE-SEALING-01 — FULL Review Pack
## Cycle 8 — Delivery / implémentation · CRITICAL

Generated: 2026-09-26T13:18:00Z
Macro: RECOVERY-DOCS-WRITE-MODE-SEALING-01
Cycle: 8 — Delivery / implémentation
Profile: CRITICAL
Morris GO: CORRECTION AUTHORIZED — consumed for local Product source/test work only
Project commit/push/PR/merge: **NOT performed / NOT authorized**

---

## 1. GIT TRUTH

| Field | Value |
|-------|-------|
| Branch | `fix/sfia-studio-recovery-docs-write-mode-sealing-01` |
| HEAD / origin/main | `cf1fa4ca139fdbdbf825e134e732f4e25b4c0aa0` |
| Main moved | NO |
| Unrelated Product dirt | NONE (only `.tmp-sfia-review/**` local artifacts) |
| Project commit | **NONE** — LOCAL / NOT COMMITTED / NOT PUSHED |

---

## 2. NATURAL STUDYFLOW REAL FAILURE (READ-ONLY)

Campaign Product DB (read-only / query_only):

`projects/sfia-studio/.sfia-exec/new-project-campaign-01/product/oa-product.sqlite`

| Field | Observed |
|-------|----------|
| Attempt | `xat:w3a:d6df3f9e31e8b84b` |
| Status | `failed` |
| stopReason | `REAL_LAUNCH_FAILED: ARTIFACT_WRITE_MODE_UNRESOLVED` |
| Successor EC | `xct:m3-res:dec:w2-trj:408666c3-2c87-4967-a683-87bfe2b0d74e` |
| EC status | `confirmed` |
| action | `cursor.docs_write.apply` |
| target | `workspace.isolated.docs_write` |
| inputs.targetPath | `projects/studyflow/01-cadrage/note-de-cadrage.md` |
| inputs.artifactWriteMode | **ABSENT** |
| Evidence for Attempt | diagnostic `log_ref` only — **no artifact success** |

StudyFlow Product: **NOT MUTATED** in this cycle.
Managed clone: **NOT MUTATED**.

Proof level of natural evidence:

**REAL BOUNDARY REACHED / BUSINESS EFFECT FAILED**

---

## 3. ROOT CAUSE (VERIFIED AGAINST SOURCE)

Recovery path:

`resolveRecoveryExecutionBinding()`
→ `cloneDocsWriteInputsForRecoverySuccessor()` (keepKeys **omit** `artifactWriteMode`)
→ `prepareDocsWriteRecoverySuccessorFromDecision()` spread binding inputs into resolve
→ Execute / Cursor REAL
→ `assertArtifactWriteModeAtExecution({ requireResolvedWriteMode: true })`
→ **`ARTIFACT_WRITE_MODE_UNRESOLVED`**

Normal docs_write PREPARE already seals CREATE/UPDATE via
`classifyArtifactWriteMode` + `hasDurableSameArtifactEvidence` (activeCycleGovernedContinuation).
Recovery prepare did **not** reseal from current managed-repo truth.

Root cause matches current `origin/main`.

---

## 4. HARD DESIGN RULES APPLIED

- Do **not** add `artifactWriteMode` to clone keepKeys as authority
- Do **not** copy historical CREATE/UPDATE from failed source EC
- Do **not** default CREATE or UPDATE
- Do **not** weaken `assertArtifactWriteModeAtExecution` / `requireResolvedWriteMode`
- Historical mode is ignored; current trusted facts win
- ASK / UNKNOWN → fail closed (no executable successor)

---

## 5. IMPLEMENTATION

Primary file:

`projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts`

### New helper — `sealRecoveryDocsWriteArtifactWriteMode`

A. Trusted launch context already resolved (reused — no second launch resolve for SHA).
B. Require `managedRepoRoot` non-null (UNKNOWN ≠ ABSENT).
C. `probeManagedRepoRelativePathExists` on binding.targetPath under managed clone.
D. If exists: `evidenceReviewServices.repository.listByProject` + `hasDurableSameArtifactEvidence`.
E. `classifyArtifactWriteMode({ targetExists, intentClearlySameDeliverable })`.
F. Require CREATE|UPDATE; ASK → `ARTIFACT_WRITE_MODE_ASK`.
G. Seal into resolveM3 `inputs.artifactWriteMode`.
H. Explicitly drop any residual source `artifactWriteMode` from cloned inputs before seal.

### Idempotent reuse

Reuse current recovery docs_write successor only when durable EC inputs already carry
CREATE|UPDATE; otherwise fall through and re-seal.

### Execution safety retained

`assertArtifactWriteModeAtExecution` unchanged. Still fails:

- ARTIFACT_WRITE_MODE_UNRESOLVED
- ARTIFACT_WRITE_MODE_ASK
- ARTIFACT_WRITE_MODE_EXECUTION_REVALIDATION_UNAVAILABLE
- ARTIFACT_WRITE_MODE_STALE_CREATE_AT_EXECUTION
- ARTIFACT_WRITE_MODE_STALE_UPDATE_AT_EXECUTION

### Test harness adaptations (non-Product runtime)

- `w2Harness.seedQualifiedProject`: ensure managed clone skeleton for per-suffix
  repository binding identity so existence probes are EMPTY≠UNKNOWN.
- `pjReproof05`: unpinned prepare still fail-closed; accept
  `MANAGED_REPO_UNAVAILABLE` **or** `BASE_HEAD_SHA_UNRESOLVED` when skeleton exists
  but HEAD is unreadable (VITEST still does not auto-pin).

---

## 6. SEMANTICS PROVEN

| Case | Result |
|------|--------|
| A — target absent | CREATE sealed |
| B — exists + same-artifact Evidence | UPDATE sealed |
| C — exists without proof | ASK fail-closed |
| D — existence unavailable | EXISTENCE_UNAVAILABLE fail-closed |
| E — stale source CREATE, current UPDATE truth | fresh UPDATE wins |
| F — stale source UPDATE, target absent | fresh CREATE wins |
| Contradictory Evidence | ASK fail-closed |
| Sealed CREATE/UPDATE at guard | no UNRESOLVED |
| TOCTOU CREATE→appears / UPDATE→disappears | STALE_* retained |

---

## 7. FILES CHANGED

```
M  projects/sfia-studio/app/features/project-assistant/w2/prepareDocsWriteRecoverySuccessor.ts
A  projects/sfia-studio/app/__tests__/project-assistant/recoveryDocsWriteModeSealing.d0.test.ts
M  projects/sfia-studio/app/__tests__/project-assistant/w2Harness.ts
M  projects/sfia-studio/app/__tests__/project-assistant/pjReproof05.executionEligibility.d0.test.ts
```

Forbidden paths: NONE.

### Meaningful prepare sealing excerpt

After trusted launch succeeds:

1. strip residual `artifactWriteMode` from cloned business inputs
2. `sealRecoveryDocsWriteArtifactWriteMode({ identity, managedRepoRoot, targetPath })`
3. inject `artifactWriteMode: CREATE|UPDATE` into `resolveM3ExecutionContract` inputs
4. preserve `assertArtifactWriteModeAtExecution` at Fake/REAL launch boundaries unchanged

---

## 8. TARGETED VALIDATION

Files / suites:

- `recoveryDocsWriteModeSealing.d0.test.ts` (RWM-01…11 + StudyFlow-equivalent)
- `checkpointF.recoveryDocsWriteSuccessor.d0.test.ts`
- `recoveryOwnership.*` (no regression)
- `pjReproof05.executionEligibility.d0.test.ts`
- `projectWorkspaceArtifactRouting.d0.test.ts`

Result: **PASS** (34/34 on last focused batch including RWM+checkpointF+pjReproof05).

---

## 9. FULL VALIDATION

| Gate | Result |
|------|--------|
| typecheck | PASS |
| lint | PASS |
| build | PASS |
| Vitest | **431 files passed** / 17 skipped · **4758 tests passed** / 137 skipped · **0 failed** |
| modeled governance | **73 pass / 0 fail** |

Delta vs prior integrated macro (~430 files / 4744 tests): +1 file / +14 tests (RWM suite).

---

## 10. FAKE / REAL QUALIFICATION

| Claim | Status |
|-------|--------|
| Deterministic recovery write-mode sealing | **PROVEN** |
| Natural StudyFlow docs_write REAL success | **NOT claimed** |
| Artifact written / artifact Evidence REAL | **NOT claimed** |
| Cursor REAL launched from this cycle | **NO** |
| Fake boundary used only as external substitute in tests | YES (where applicable) |

Proof level this cycle:

**DETERMINISTIC RECOVERY WRITE-MODE SEALING PROVEN**

---

## 11. RESERVES / ANTI-CLAIMS / OUT OF SCOPE

- Nora `recommended_option_ref_only_on_recommendation`: OPEN / NON-BLOCKING / OUT OF SCOPE
- StudyFlow natural Pilot→Studio→Nora REAL reproof: **NEXT AFTER integration**
- no Product-global READY
- runtime v3 NON ADOPTED
- no PR / merge readiness claim
- StudyFlow NOT resumed / NOT mutated
- managed clone NOT mutated
- #524 recovery ownership behavior retained (CLASS 1 / CLASS 2)

---

## 12. DEBT / EXIT

Exit proof of this Cursor cycle: deterministic sealing + guard acceptance.

Next after ChatGPT review + repository delivery + merge:

same StudyFlow project → recovery PREPARE → Inspect/Confirm/Authorize/Execute →
expect no `ARTIFACT_WRITE_MODE_UNRESOLVED` when current repo truth supports CREATE/UPDATE.

---

## 13. FINAL VERDICT

**RECOVERY DOCS_WRITE MODE SEALING — DETERMINISTICALLY PROVEN / READY FOR CHATGPT REVIEW**
