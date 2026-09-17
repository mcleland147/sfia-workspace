# ChatGPT Review Pack — FULL
## PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 — Checkpoint F REAL failure forensic diagnosis

**Timestamp (UTC):** 2026-09-17T19:59:49Z
**Pack kind:** FULL (diagnostic only — **no Product code change in this lot**)
**Pack revision:** R5 — Checkpoint F REAL failure forensic diagnosis
**Automation:** L3 handoff publish only; **NO** project commit/push/PR/merge; **NO** REAL retry; **NO** Execute

---

## 1. Git Truth

| Field | Value |
|---|---|
| Repo | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| Branch | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| origin/main | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Baseline match | YES (`HEAD == origin/main == 26478b1ea5b010c625f0c6039c969fac5c135cf5`) |
| Macro | PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 |
| Cycle | 9 — QA / Validation |
| Typologie | EVOL |
| Profil | CRITICAL |

### git status --short

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-contract/m3ExecutionContractPrepare.test.ts
 M projects/sfia-studio/app/__tests__/pre-m6-product-ui/trajectorySurface.ui.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof10.decisionContextContinuity.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/TrajectorySurface.tsx
 M projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/prepareM3FromDecision.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/activeProposalDecisionSubject.ts
 M projects/sfia-studio/app/features/project-assistant/w2/proposeTrajectoryOptions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/types.ts
 M projects/sfia-studio/app/package-lock.json
?? .tmp-sfia-review/checkpoint-e-prepare-fix.diff
?? .tmp-sfia-review/checkpoint-e-r4-evidence-coherence.diff
?? .tmp-sfia-review/checkpoint-e-resume-full.diff
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceCoherence.d0.test.ts
?? projects/sfia-studio/app/__tests__/oa/execution-contract/checkpointE.docsWriteEvidenceRematerialize.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/checkpointE.prepareResume.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/docsWriteEvidenceContradictionView.ts
?? projects/sfia-studio/app/features/project-assistant/f3/rematerializeDocsWriteEvidenceRequirements.ts
?? projects/sfia-studio/app/features/project-assistant/w2/prepareReadyProposalPursueContinuation.ts
```

### Confirmation

- Worktree / branch / baseline: **OK**
- Local R1/R3/R4 Product dirty files: **still present** (untouched by this forensic lot)
- `package-lock.json`: dirty préexistant — **LEFT UNTOUCHED / hors scope**
- This lot: **no Product code edits**; only this Review Pack (+ handoff publish)

---

## 2. État campagne (post-Execute fail)

| Item | Value |
|---|---|
| Product DB | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01/projects/sfia-studio/.sfia-exec/pje2e-real-01/product/oa-product.sqlite` |
| Project | `prj:e3fe8a45-5c9e-4651-bd2c-bde1cdf77c38` |
| Cycle | `cyc:trj-979cf448c5a6f0e7685f937f` status=`active` (**not auto-closed**) |
| HumanDecision | `dec:w2-prop:0e4b08bb-5b5c-4c99-b57f-d49234abb693` |
| EC courant | `xct:m3-ev:8aaa188b3a3bd7a7` status=`failed` |
| Attempt | `xat:w3a:1f49d8e25e20837a` status=`failed` |
| oa_execution_attempts count | **1** |
| READY | **none** |
| Business success | **none** |
| External file effect | **none** (target ABSENT all trees; managed+M4 wt clean) |

---

## 3. Attempt exact (Phase 1 — faits durables)

| Field | Value |
|---|---|
| attemptId | `xat:w3a:1f49d8e25e20837a` |
| status | `failed` |
| startedAt / launchedAt | `2026-09-17T19:46:53.199Z` |
| failedAt | `2026-09-17T19:46:55.265Z` |
| durationMs | `1534` |
| technicalExitCode | `1` |
| stopReason | `REAL_PROCESS_NONZERO_EXIT` |
| selectedAgentRef | `agt:m4.cursor.bounded_docs_write` |
| executionContractId | `xct:m3-ev:8aaa188b3a3bd7a7` |
| adapter / gateway (frontier) | `adp:m4-cursor-cli-real` |
| authority receipt | `avr:5f823d0641d6a21b` outcome=`authorized` @ `2026-09-17T19:46:53.147Z` |
| confirmation | `cfm:w2:xct:m3-ev:8aaa188b3a3bd7a7:v2` status=`consumed` |
| boundaryProofMode (durable frontier) | `cursor_real` |
| processRef | `pid:51943` |
| realProcessInvoked (frontier LAUNCHED) | **true** |
| stdout/stderr durable | **ABSENT** (Evidence `storageMode=metadata_only`; runner keeps buffers in-process only) |
| targetPath (EC) | `projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md` |
| repositoryRef | `mcleland147/sfia-workspace` |
| baseHeadSha | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| evidenceRequirements (EC) | `["evreq:docs_write_artifact"]` |
| resultRef | **ABSENT** (failure path; no success result recorded) |

### Launch frontier (launch-safety.sqlite)

| kind | occurred_at | process_ref | payload |
|---|---|---|---|
| CREATED | 2026-09-17T19:46:53.199Z |  | `{}` |
| LAUNCHED | 2026-09-17T19:46:53.199Z | pid:51943 | `{"gatewayId":"adp:m4-cursor-cli-real","boundaryProofMode":"cursor_real","realProcessInvoked":true}` |

---

## 4. Chronologie Execute → failure (Phase 2)

| Step | Input | Output | Gate | Proof |
|---|---|---|---|---|
| UI Execute / governedExecute | EC `xct:m3-ev:8aaa188b3a3bd7a7` confirmed+authorized | start path entered | authority authorized | `avr:5f823d0641d6a21b` |
| Select agent | docs_write profile | `agt:m4.cursor.bounded_docs_write` | passed | Attempt payload |
| Gate D / launch frontier CREATED | attempt+EC fingerprint | CREATED record | passed | launch-safety CREATED |
| StartExecution → REAL gateway | `adp:m4-cursor-cli-real` | ACK spawn | passed | LAUNCHED `realProcessInvoked:true` `pid:51943` |
| Process runner | bin+argv+cwd+env | child exit 1 in ~1534ms | process completed non-zero | Attempt `technicalExitCode=1` |
| completeBoundedReadOnlyLaunch | observation exit≠0 | `stopReason=REAL_PROCESS_NONZERO_EXIT` | **fail here** | code + Attempt payload |
| W3B Evidence/RB | failed attempt | `ev:w3b:0b7609835db72e9a` / `rb:w3b:0b7609835db72e9a` | diagnostic only | DB |
| W3C Nora post-Evidence | deriveAttemptProvenance **without** `boundaryProofMode` | Nora text claims `realProcessInvoked:false` | projection miss | `w3cPostEvidenceLoop.ts` + `deriveAttemptProvenance.ts` |

**Where `REAL_PROCESS_NONZERO_EXIT` appears:** `completeBoundedReadOnlyLaunch` when `observation.realProcessInvoked===true` and `observation.exitCode !== 0` (not timeout) → `recordExecutionFailure(stopReason: "REAL_PROCESS_NONZERO_EXIT")`.

---

## 5. Commande / process (Phase 4) — reconstructed from gateway code + campaign env

Durable spawn cmdline file for this Attempt: **ABSENT** (unlike historical Reproof09 capitalisation asset). Reconstruction from `studioCursorRealLaunchGateway.ts` + `.env.local` + prepared worktree:

| Item | Value |
|---|---|
| executable (resolved) | `/Applications/Cursor.app/Contents/Resources/app/bin/cursor` via `SFIA_CURSOR_BIN` (**PRESENT**) |
| argv shape (docs_write) | `agent --print --workspace <WT> --trust --sandbox disabled --force <instruction>` |
| cwd / workspace | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-0b7609835db72e9aba58c125` |
| managed repo base | `/tmp/sfia-pje2e` (`SFIA_STUDIO_MANAGED_REPO_ROOT_BASE` **PRESENT**) |
| `SFIA_STUDIO_CURSOR_REAL` | **PRESENT** (`1`) |
| `CURSOR_API_KEY` | **ABSENT** (in campaign `.env.local`) |
| mutating confinement | `local` effect class (strip SSH/GH tokens; keep host Cursor session inheritance except stripped keys) |
| stdin | ignored (`stdio: ["ignore","pipe","pipe"]`) |
| stdout/stderr | capped 64KiB in-memory only — **not written to Evidence** |
| timeout | EC `executionWindowClass=standard` → resolvedMaxDurationMs=`900000` (not hit; duration 1534ms) |
| kill signal | not indicated (timedOut false / not recorded) |
| target absolute under WT | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-0b7609835db72e9aba58c125/projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md` |

Instruction provenance: gateway `buildDocsWriteInstruction` from EC sealed inputs (`targetPath`, allowlist, brief, contentRequirements, fingerprint=`214f5dcd…`).

---

## 6. `realProcessInvoked:false` (Phase 3) — résolution factuelle

### Durable spawn truth

`m4_launch_frontier` LAUNCHED payload:

```json
{"gatewayId":"adp:m4-cursor-cli-real","boundaryProofMode":"cursor_real","realProcessInvoked":true}
```

processRef=`pid:51943`. Attempt stopReason=`REAL_PROCESS_NONZERO_EXIT` requires `observation.realProcessInvoked===true` in `completeBoundedReadOnlyLaunch`.

### Nora / UI false

`w3cPostEvidenceLoop.ts` calls:

```ts
deriveAttemptProvenance({ attempt: loaded.attempt, agent })
// boundaryProofMode OMITTED
```

With M4-shaped agent but `boundaryProofMode` omitted → proof=`fixture` → branch:

> M4-shaped agent selected but not yet launched / no boundary composed → `realProcessInvoked: false`

Therefore Nora's `realProcessInvoked:false` is a **post-Evidence projection bug**, not a spawn denial.

### Phase 3 letter answers (spawn reality)

| Letter | Applies? | Proof |
|---|---|---|
| A | **NO** | frontier LAUNCHED + pid |
| B | **NO** | gateway invokes resolved `cursor` bin with `agent …` argv |
| **C** | **YES (best-supported)** | Cursor CLI process invoked; exited 1 in ~1.5s; target file never created; wt/managed clean |
| D | **NOT PROVEN** | no durable stdout/stderr/agent-turn proof of instruction processing |
| **E** | **YES (Nora field only)** | omit `boundaryProofMode` → false while frontier true |
| F | — | — |

**Combined:** Spawn reality = **C**; Nora displayed field = **E**.

---

## 7. Managed repo / target (Phase 5)

| Item | Value |
|---|---|
| Managed repo exists | YES |
| Managed HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| Managed dirty | `CLEAN` |
| M4 worktree exists | YES (`wt-0b7609835db72e9aba58c125`) |
| M4 WT HEAD | `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| M4 WT dirty | `CLEAN` |
| Sandbox parent | PRESENT (contains `increment-d/` only) |

### Target existence

| Tree | Path | Status |
|---|---|---|
| campaign | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01/projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md` | ABSENT |
| managed | `/tmp/sfia-pje2e/mcleland147__sfia-workspace/projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md` | ABSENT |
| m4_wt | `/Users/morris/Projects/sfia-studio-product-journey-e2e-real-reconciliation-01/projects/sfia-studio/.sfia-exec/m4-worktrees/wt-0b7609835db72e9aba58c125/projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md` | ABSENT |

**Partial effect:** none proven. No Attempt-created target; git status clean on managed + M4 wt.

---

## 8. Evidence / ReviewBundle (Phase 6)

| Object | ID | Notes |
|---|---|---|
| Evidence | `ev:w3b:0b7609835db72e9a` | type=`log_ref`; source=`execution attempt … (failed)`; location=`refs/attempts/…/diagnostic`; **storageMode=`metadata_only`**; status=`available` |
| ReviewBundle | `rb:w3b:0b7609835db72e9a` | status=`ready_for_review`; completeness=`complete`; evidenceRefs=[ev…]; claimEvaluationRefs=[] |
| ClaimEvaluation | `clm:w3b:0b7609835db72e9a` | status=`fail` (contract result assessment) |
| RB reservations | Evidence requise; Apprentissage non démarrés; **« Exécuteur de substitution — pas d'effet externe réel »**; **Aucun READY** |

What failure Evidence **proves:** Attempt failed; diagnostic metadata exists; no READY.

What it **does not prove:** Cursor stdout/stderr content; business artifact; successful REAL boundary; that no OS process ran (reservation text is misleading vs frontier).

**No** positive `evreq:docs_write_artifact` satisfaction. Cycle remains `active`.

---

## 9. Stdout / stderr + root cause (Phase 7)

**Useful stderr/stdout excerpt:** **UNAVAILABLE** in durable artefacts.

Studio OA log (`terminals/245476.txt`) only shows:

```json
{"event":"oa.execution_attempt.failed","attemptId":"xat:w3a:1f49d8e25e20837a","stopReason":"REAL_PROCESS_NONZERO_EXIT",...}
```

### Lowest proven causal chain

1. Cursor OS process was spawned (`realProcessInvoked:true`, `pid:51943`).
2. Process exited with code **1** after ~**1534ms**.
3. Product mapped that to `REAL_PROCESS_NONZERO_EXIT` and terminalized Attempt/EC as `failed`.
4. No target file materialization.
5. stdout/stderr were captured only in-memory by `NodeCursorProcessRunner` and **not persisted**, so the **CLI leaf reason for exit 1 is not recoverable** from durable artefacts.

### Category (Phase 7 letters)

| Layer | Category | Status |
|---|---|---|
| Product failure mapping | G (wiring/ingest) | Proven — maps exit≠0 → NONZERO_EXIT correctly |
| Nora false flag | G / projection | Proven — omit `boundaryProofMode` |
| Missing durable stderr | H (executor implementation debt) | Proven — blocks leaf diagnosis |
| **Why Cursor exited 1** | **J — UNKNOWN** | **Not proven** (stderr absent; auth/bin/prompt/runtime all candidates) |

Managed repo / path / worktree preparation: **not** indicated as failure (WT complete @ expected SHA; sandbox parent present).

---

## 10. Delta vs historical REAL PASS (Phase 8)

Historical PASS (Reproof09 / capitalisation): Attempt `xat:w3a:9eef34f25802c186` → `succeeded`, `technicalExitCode=0`, durationMs≈23244, target `gestion-de-taches.md` materialized under prepared WT.

| Dimension | Historical PASS | This FAIL |
|---|---|---|
| Gateway | `adp:m4-cursor-cli-real` | same |
| frontier realProcessInvoked | true | true |
| argv shape | `agent --print --workspace … --trust --sandbox disabled --force <instruction>` | same shape (code) |
| Live-captured executable (PASS assets) | `/Users/morris/.local/bin/cursor-agent` → versions/2026.09.15… | Campaign env resolves App `…/Cursor.app/…/bin/cursor` |
| duration | ~23s | ~1.5s |
| exit | 0 | 1 |
| target effect | PRESENT | ABSENT |
| durable spawn cmdline | PRESENT (capitalisation asset) | ABSENT |
| durable stderr | not required (success) | **needed but missing** |
| base SHA | `b739ddd…` | `26478b1…` |
| target name | `gestion-de-taches.md` | `product-journey-e2e-real-01.md` |
| managed base | `/tmp/sfia-r09c` (historical) | `/tmp/sfia-pje2e` |

**Significant deltas:** (1) short non-zero exit vs long zero exit; (2) no durable CLI transcript for FAIL; (3) executable resolution may differ from PASS live capture (App `cursor` vs `cursor-agent`) — **candidate**, not proven cause without stderr.

---

## 11. Classification de sortie (Phase 9)

**Primary for Cursor exit-1 leaf:** **H — inconnu / preuves insuffisantes**

Missing proof: durable observation stdout/stderr (or equivalent Cursor CLI log) for `pid:51943`.

**Secondary proven defects (not the exit-1 leaf, but real):**

| Class | Defect | Minimal fix candidate (**NOT executed**) |
|---|---|---|
| **B** | `w3cPostEvidenceLoop` omits `boundaryProofMode` → Nora `realProcessInvoked:false` | Pass composed launch-port `boundaryProofMode` (or read frontier) into `deriveAttemptProvenance` |
| **C** | Failure Evidence does not persist runner stdout/stderr | On NONZERO_EXIT, attach redacted observation streams to diagnostic Evidence / attempt payload |
| **A** (candidate only) | `CURSOR_API_KEY` ABSENT; bin may differ from PASS live capture | Before next Morris REAL GO: confirm Cursor CLI non-interactive auth + bin parity — **no silent reauth in this lot** |

**Not G structural.** Product backbone / authority / EC / Evidence failure handling remain KEEP.

---

## 12. Correctifs candidats — NON exécutés

1. **Diagnostic durability (C):** persist redacted stdout/stderr on REAL failure Evidence.
2. **Nora honesty (B):** thread `boundaryProofMode=cursor_real` into post-Evidence provenance.
3. **Env/bin gate (A — verify-only):** before any new REAL, Morris-approved check of Cursor CLI auth + `SFIA_CURSOR_BIN` parity with known PASS — without spawning a campaign REAL.

**No fix implemented in this lot.**

---

## 13. Fichiers lus (diagnostic)

- Campaign DB + launch-safety (read-only)
- `deriveAttemptProvenance.ts`, `w3cPostEvidenceLoop.ts`
- `studioCursorRealLaunchGateway.ts`, `nodeCursorProcessRunner.ts`, `mutatingCursorConfinementEnv.ts`
- `completeBoundedReadOnlyLaunch.ts`, `completeBoundedDocsWriteLaunch.ts`
- Studio terminal OA log `245476.txt`
- Historical PASS capitalisation assets under `sfia-studio-product-docs-write-real-pass-capitalisation/.tmp-sfia-review/reproof09-real-c/`
- Campaign `.env.local` keys presence-only
- Managed repo + M4 worktree paths (status/HEAD/target existence)

Doctrine/method sources listed in brief: consulted as campaign governance context; **not modified**.

---

## 14. Fichiers modifiés (this lot)

| Path | Action |
|---|---|
| `.tmp-sfia-review/chatgpt-review.md` | **UPDATED** (R5) |
| Product code | **NONE** |
| SQLite | **NONE** |
| Target / managed repo | **NONE** |

---

## 15. Attempts / REAL / effets externes

| Metric | Value |
|---|---|
| Attempts (campaign) | **1** (failed REAL) |
| REAL process spawns (budget) | **1 consumed** / **0 new authorized** |
| External effects | **none proven** (targets ABSENT; trees clean) |
| Cycle auto-close | **no** |

---

## 16. Réserves

- Exit-1 leaf cause not recoverable without stderr.
- RB reservation « exécuteur de substitution » contradicts frontier `realProcessInvoked:true` — diagnostic wording debt.
- Historical PASS executable delta is suggestive only.
- R1–R4 local dirty Product files remain; unrelated to this forensic lot.
- package-lock dirty préexistant hors scope.

---

## 17. Claims

### Authorized (max)

**ONE GOVERNED CURSOR REAL ATTEMPT EXECUTED AND FAILED — FAILURE EVIDENCE CAPTURED — NO BUSINESS SUCCESS CLAIM**

### Forbidden

- REAL PASS / REAL BOUNDARY PROVEN (this campaign)
- Product Journey E2E usable / READY
- runtime v3 ADOPTED
- retry authorized / new REAL without Morris GO
- “no real process” (false — spawn proven)

---

## 18. Gates Morris

1. Accept forensic diagnosis (this pack).
2. Optional: authorize **bounded Product fix lot** for (B) Nora provenance + (C) stderr persistence — still **ZERO REAL**.
3. Optional: authorize **env/bin verification** (non-campaign) — still **ZERO campaign REAL**.
4. Only after ChatGPT+Morris review: distinct **NEW GO** for a **new** REAL Attempt (budget currently 0).
5. **No** Execute / retry / replan / instruct-options in this lot.

---

## 19. Verdict

**CHECKPOINT F REAL FAILURE — ROOT CAUSE NOT PROVEN**

(Proven: governed Cursor REAL spawn occurred and exited 1 with no business effect; Nora `realProcessInvoked:false` is a projection bug. **Not proven:** the Cursor CLI leaf reason for exit code 1 — durable stdout/stderr absent.)
