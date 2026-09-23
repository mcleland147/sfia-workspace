# PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01
# B1 EVIDENCE CHAIN + B3 MANAGED RESOLVER CORRECTIVE
# ZERO REAL — PR #512

## 1. Timestamp
2026-09-23T12:53:00+02:00 (Europe/Paris local corrective close)

## 2. Git Truth
- Workspace: `/Users/morris/Projects/sfia-workspace`
- Branch: `fix/sfia-studio-product-journey-real-behavior-readiness-01`
- Pre-corrective HEAD: `3522d983bc73b55366b4b57515046c4881cbb0c4`
- origin/main (pre-push check): `8f53d724813afdc027c18898467c465abc3ca3db`
- PR #512: OPEN, NON MERGED
- Staged empty at start; only `.tmp-sfia-review/chatgpt-review.md` dirty outside scope

## 3. Morris corrective GO
GO Morris corrective B1 Evidence chain + B3 managed resolver —
same PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01 / PR #512
— **CONSUMED** (same macro / no micro-cycle).

## 4. SAME MACRO / NO MICRO-CYCLE
Corrective remains inside PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01 Delivery B1+B2+B3+B4.
No new micro-cycle. No new engine. Second project commit on same branch/PR only.

## 5. Sources
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- Studio convergence doctrine + roadmap + product-completion cadrage
- sfia-v3-framing 34 + 36 (read-only)
- Review handoff `sfia/review-handoff` @ `fd194a8980b6ce444f44a57817e5667f8aa212c2`
- B1/B3 corrective sources listed in the GO (ingest, materialize, semantic, ManagedProjectRepositoryResolver)

## 6. ChatGPT blockers d'entrée
- **B1**: Mission Evidence chain incomplete — parallel mission RB unused by W3-B Product materialize; isolated A7 ≠ Product path.
- **B3**: `evaluateProductRealReadiness` used a parallel identity sanitizer / path.join without canonical ManagedProjectRepositoryResolver + containment.

## 7. Ancien B1 broken chain
Cursor Complete → MissionResultPayload → Mission Evidence → **separate mission ReviewBundle**
while `materializeW3bProductTerminal` froze a **different** W3-B RB from technical Attempt Evidence only.
Mission Result Semantic correct in isolation; Product SUCCESS path did not consume Mission Evidence.

## 8. Nouveau Evidence ownership
- `ingestMissionResultEvidence` owns: durable payload + Mission Evidence + integrity verify.
- Does **not** create a parallel ReviewBundle.
- `materializeW3bProductTerminal` is the sole W3-B owner of Create → Freeze → EvaluateContractResult.

## 9. Provenance ExecutionAttempt
Mission Evidence ingested via canonical `IngestExecutionAttemptEvidence`:
- `sourceKind = execution_attempt`
- provenance `execution_adapter`
- deterministic `ev:mission-result:{attemptId}`
- bindings project / cycle / EC / Attempt

## 10. technicalResultRef
For succeeded Attempts, `technicalResultRef = Attempt.resultRef` (native ingest bridge).
Mission semantic fail-closes if Evidence.technicalResultRef ≠ Attempt.resultRef when both present.

## 11. Canonical payload persistence
`persistMissionResultPayload`:
```
body = canonicalizeMissionResultPayload(payload)
digest = sha256(body)
writeFile(body)
```
No pretty-print vs digest drift.

## 12. Digest calculation
`digestMissionResultPayload` hashes the same canonical body written to disk.

## 13. VerifyEvidenceIntegrity
After ingest (status `available`), Product path runs `VerifyEvidenceIntegrity` via configured EvidencePayloadPort.
`digest.startsWith("sha256:")` alone is **not** integrity proof.
Product SQLite composes `PreferFilesystemEvidencePayloadAdapter`:
- real location on disk → independent filesystem hash
- else Fake scripts (GCEC harness setScript) — fail-closed without script
Product code never scripts Fake digests.

## 14. Post-verification tamper defense
`missionResultEvidenceFactsHold` requires `status === "verified"` and recomputes
`digestMissionResultPayload(parsed) === evidence.digest`.
N2: tamper file after verify → Product outcome ≠ SUCCESS.

## 15. ReviewBundle réellement évalué
For mission Product with verified Mission Evidence, W3-B RB evidenceRefs = **[missionEvidenceId] only**
(so CE bindings from mission `selectEvidenceIds` match RB evidenceRefs — no stale-binding UNCLAIMED).
Absent/unverified Mission Evidence → tech-only RB → honest NOT_PROVEN / UNCLAIMED.

## 16. ContractResult mission
`EvaluateContractResult` with mission semantic `w3b-contract-result/product-mission-result-v1`.
E2E asserts CE `status=pass` + `ruleRef=MISSION_RESULT_RULE_REF`.

## 17. Product SUCCESS
`materializeW3bProductTerminal` → `projectW3bProductTerminal` → `outcome=SUCCESS`, `claimAllowed=true`,
`evidenceId=ev:mission-result:…` when CE pass + bindings match.

## 18. W3-C / Nora continuation
E2E asserts `postEvidence.ok === true` after Product SUCCESS (W3-C loop / Nora path).
Launch count remains 1 (no second spawn).

## 19. E2E test complet
`productMissionEvidenceChain.e2e.d0.test.ts`:
seed → clarify Decision → prepare/inspect/confirm/authorize → Select/Start →
TestOnly completion with structured CursorExecutionReport → Complete awaitIfPending →
verified Mission Evidence → **real** materializeW3bProductTerminal →
frozen RB contains Mission Evidence → CE pass → Product SUCCESS → W3-C → ZERO REAL.

## 20. Negative tests
- N1: no missionResult → Attempt may succeed; no Mission Evidence; Product ≠ SUCCESS
- N2: tamper payload after verify → ≠ SUCCESS
- N6: repository mismatch → Complete `REPORT_REPOSITORY_MISMATCH`
- N7: baseSha mismatch → Complete `REPORT_BASE_SHA_MISMATCH`
- N8: forbidden effect `filesystem.modify` → ≠ SUCCESS
- A7 unit suite retained for semantic isolation
- Readiness: identity `..` / `../../other` / absolute; pathRoot traversal / absolute

## 21. Ancien B3 custom sanitizer
Removed parallel `sanitizeIdentity` + `path.join(managedBase, sanitize…)` reconstruction.

## 22. ManagedProjectRepositoryResolver reuse
`evaluateProductRealReadiness` uses exclusively:
`new ManagedProjectRepositoryResolver().resolveLocalRepoRoot({ identity }, managedBase)`.
null → `MANAGED_REPO_ABSENT` / invalid identity fail-closed.

## 23. Repo identity containment
Traversal / invalid identities → NOT READY (tested).

## 24. pathRoot containment
`resolveContainedPathRoot`: relative only, no `..`, no absolute, resolved path must be repoRoot child;
`existsSync` only after containment; no silent create.

## 25. B2 non-regression
`productGenericCursorCompletion.d0.test.ts` updated to use live contract
`repositoryBindingIdentity` / `baseHeadSha` (raw JSON report bind now active).
awaitIfPending + CURSOR_REPORT_PENDING preserved; no fixture fallback.

## 26. B4 non-regression
auth.state = EXTERNAL_PREFLIGHT_REQUIRED; auth.proven = false;
readyForProductRealExecute = false. No auth provider call. Binary resolver unchanged.

## 27. Targeted tests
- missionResultContractResultSemantic.d0.test.ts PASS
- productGenericCursorCompletion.d0.test.ts PASS
- productMissionEvidenceChain.e2e.d0.test.ts PASS
- evaluateProductRealReadiness.d0.test.ts PASS

## 28. Regressions
W3-A governed execute, postExecution continuity, ContractResult registry/suites,
import boundaries (vertical-slice + project-assistant), docs_write await wiring — PASS.

## 29. Full npm test
From `projects/sfia-studio/app`:
**401 test files passed | 17 skipped**
**4474 tests passed | 137 skipped**
(prior baseline 400 files / 4465 tests — delta = new E2E + adapter coverage)

## 30. Typecheck
`npm run typecheck` PASS

## 31. Lint
`npm run lint` PASS (no warnings/errors)

## 32. Build
`npm run build` PASS (existing better-sqlite3 optional resolve warning unchanged)

## 33. Diff-check
`git diff --check` clean on project files (review pack local whitespace only under `.tmp-sfia-review/**`, not committed)

## 34. ZERO REAL
- `SFIA_STUDIO_CURSOR_REAL` unset
- No Cursor REAL process
- No provider/auth call
- No Batch Cookinb DB mutation
- No Product REAL Attempt
- REAL budget 1 spawn / 0 retry — **UNUSED**

## 35. Batch Cookinb RO requalification
DB (read-only):
`projects/sfia-studio/.sfia-exec/pwr-dpc09-real-reproof-01/product/oa-product.sqlite`
- Project `prj:21e87219-9d46-483a-8206-722e25f2fb24` present
- Legacy EC `xct:w3a:dec:w2-trj:62b92385-7602-4d4f-b892-df9e2013c4a8`
- Fingerprint `ca296bb5609fb21edc19b75b64013a9020fef3097a81ee116a149c7ede20ccac` — **MATCH**
- Attempts: **0** — **MATCH**
- status: validated — unchanged
- Mission Evidence path now consumable by W3-B (deterministic E2E proven)
- Managed-repo preflight uses canonical resolver
- **Aucune mutation**

## 36. Legacy fingerprint / attempts
Fingerprint + attempts count unchanged (see §35).

## 37. Final diff (project)
Bounded to B1/B3 + tests + PreferFilesystem payload adapter:
- ingestMissionResultEvidence (Attempt ingest + verify; no parallel RB)
- materializeW3bProductTerminal (mission Evidence in evaluated RB)
- missionResultContractResultSemantic (verified + digest recompute + selectEvidenceIds)
- governedExecute (raw JSON report parse; mission refs)
- evaluateProductRealReadiness (canonical resolver + pathRoot containment)
- PreferFilesystemEvidencePayloadAdapter + FilesystemEvidencePayloadAdapter
- E2E + readiness + B2 repo-identity fix + continuity filesystem verify adaptation

## 38. Remaining gaps
- Cursor REAL / auth provider not proven (B4 EXTERNAL_PREFLIGHT_REQUIRED)
- DETERMINISTIC PRE-REAL ≠ READY FOR REAL
- N3/N4/N5/N9 covered partially via semantic unit + N1/N2/N8 Product path (optional further isolation tests not required for gate)
- No third automatic corrective without new structural cause

## 39. REAL budget
1 spawn / 0 retry — **UNUSED**

## 40. Verdict
**PRODUCT-JOURNEY-REAL-BEHAVIOR-REPROOF-01 CORRECTIVE COMPLETE —**
**MISSION EVIDENCE → FROZEN REVIEWBUNDLE → CONTRACTRESULT → W3-C PROVEN —**
**MANAGED REPOSITORY PREFLIGHT FAIL-CLOSED —**
**PR #512 GREEN (pending remote CI after push) —**
**READY FOR CHATGPT FINAL PR REVIEW —**
**ZERO REAL —**
**MERGE NOT AUTHORIZED**
