# SFIA Review Pack — PR #466 MERGE + POST-MERGE + GLOBAL MODEL × REASONING CAMPAIGN READINESS REQUALIFICATION

## Metadata
- timestamp: 2026-09-05 14:23:11 CEST
- Cycle: 8 — Delivery / EVOL — MERGE + POST-MERGE + CAMPAIGN READINESS REQUALIFICATION
- Profil: CRITICAL
- Level: FULL
- ZERO REAL: YES
- Decision consumed: `GO MORRIS — MERGE PR #466 — GLOBAL MODEL × REASONING PRE-CAMPAIGN HARNESS G1+G2+G3`

## Sources consulted
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` (READ ONLY — not mutated)
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` (READ ONLY — not mutated; historical MW6 wording reserve accepted)
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` (READ ONLY)
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md` (READ ONLY)
- `projects/sfia-studio/nora-cognitive-completion/08-nora-openai-native-first-cognitive-trajectory.md` (READ ONLY)
- Review Handoff pré-merge tip `25325c19d3618dd9f7e2ba825b4dbff26f0cdcc9`
- PR #466 + CI runs `33964726221` (PR) / `33965677986` (post-merge main)

---

## 1. Morris decision consumed
`GO MORRIS — MERGE PR #466 — GLOBAL MODEL × REASONING PRE-CAMPAIGN HARNESS G1+G2+G3`

Authorized sequence (single coherent cycle): pre-merge truth → squash merge → post-merge Git → post-merge CI → G1/G2/G3 on main → campaign readiness F1–F10 → Review Pack → Review Handoff → final report.

NOT authorized / NOT performed: branch delete · force push · product commit · Roadmap/Doctrine/C1/v3 mutation · semantic correction · REAL · Hosted Web Search REAL · production routing · runtime v3 · Cognitive Completion claim.

---

## 2. Git Truth pré-merge (Étape A)

| Field | Value |
| --- | --- |
| repository | `mcleland147/sfia-workspace` |
| worktree | `/Users/morris/Projects/sfia-workspace-global-model-reasoning-pre-campaign-harness` |
| local branch | `delivery/sfia-studio-global-model-reasoning-pre-campaign-harness-hardening` |
| HEAD local | `fa3f9a93fd6d1c91d45905122222758413e48fdb` |
| `origin/main` pré-merge | `d3fee38b270d805144e621804b96ef1e5de3e208` |
| PR | #466 OPEN |
| title | `feat(sfia-studio): harden global model reasoning pre-campaign harness` |
| base | `main` @ `d3fee38b270d805144e621804b96ef1e5de3e208` |
| head | `delivery/sfia-studio-global-model-reasoning-pre-campaign-harness-hardening` @ `fa3f9a93fd6d1c91d45905122222758413e48fdb` |
| mergeable | MERGEABLE / CLEAN |
| commits on PR | 1 |
| changed files | **10 exactly** |
| PR CI | run `33964726221` — Detect / Build / Required Gate **SUCCESS** |
| ChatGPT Critical PR Review | PASS (consumed from prior handoff) |
| Review Handoff tip | `25325c19d3618dd9f7e2ba825b4dbff26f0cdcc9` |

Pre-merge STOP checks: **PASS** (main + head + mergeability + CI + 10-file scope all matched baseline).

### Exact 10-file scope
```
projects/sfia-studio/app/__tests__/nora-eval/g1.global-capability-policy.test.ts
projects/sfia-studio/app/__tests__/nora-eval/g2.catalog-versioning-mw6.test.ts
projects/sfia-studio/app/__tests__/nora-eval/g3.human-decision-pilote-only.test.ts
projects/sfia-studio/app/lib/nora-eval/capabilityBudget.ts
projects/sfia-studio/app/lib/nora-eval/catalog.ts
projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
projects/sfia-studio/app/lib/nora-eval/index.ts
projects/sfia-studio/app/lib/nora-eval/mw6Observe.ts
projects/sfia-studio/app/lib/nora-eval/scorers.ts
projects/sfia-studio/app/lib/nora-eval/types.ts
```

---

## 3. Merge (Étape B)

| Field | Value |
| --- | --- |
| method | **SQUASH MERGE** (`gh pr merge 466 --squash`) |
| subject | `feat(sfia-studio): harden global model reasoning pre-campaign harness` |
| merge / squash SHA | `23d850fda45fe55ba519e0feefe63369d349afcc` |
| parent | `d3fee38b270d805144e621804b96ef1e5de3e208` (= ancien main) |
| tree | `7f940e0a772ebf566cfa64ec6e0c6f9f8f477505` (= same tree as reviewed head `fa3f9a93…`) |
| mergedAt | `2026-09-05T12:18:40Z` |
| PR final state | **MERGED** |
| branch deletion | **NOT performed** (delivery branch preserved) |

Squash body included GO Morris + G1/G2/G3 summary + ZERO REAL / NOT SELECTED / NOT PROVEN / NON ADOPTED anti-claims.

---

## 4. Main post-merge (Étape C)

| Check | Result |
| --- | --- |
| `git fetch origin main` | `d3fee38b…` → `23d850fd…` |
| `origin/main` | `23d850fda45fe55ba519e0feefe63369d349afcc` |
| PR #466 | MERGED |
| parent of new main | `d3fee38b270d805144e621804b96ef1e5de3e208` **MATCH** |
| filelist old→new main | **exact 10 files** = PR scope **MATCH** |
| blob parity head `fa3f9a93` ↔ main for all 10 paths | **HEAD_CONTENT_ON_MAIN** (all MATCH) |
| docs/Roadmap/Doctrine/C1/v3 in merge delta | **NONE** |
| delivery branch still on remote | `fa3f9a93…` **PRESERVED** |

### G1 on main (verified)
- `buildMw0CapabilityManifest()` historical allowlist preserved: Luna/Terra × none/low/medium; MW0 screening caveat retained.
- `buildGlobalModelReasoningCapabilityManifest()` distinct: Luna/Terra/Sol × none/low/medium/high/xhigh/max.
- minimal rejected; unknown model fail-closed (capability checks + tests present).

### G2 on main (verified)
- `NORA_EVAL_CATALOG_VERSION = "mw0-catalog-v1"` historical default preserved.
- `NORA_EVAL_GLOBAL_CATALOG_VERSION = "global-mr-catalog-v1"` present with MW6-S01/S02.
- `mw6Observe.ts` present.
- `evidenceRefs: [\`catalog:${scenario.catalogVersion}\`]` in `d0Runner.ts` (coherent provenance).
- historical-under-global retains global catalog provenance (covered by G2 tests on main).

### G3 on main (verified)
- `human_decision_pilote_only` scorer: Pilote/none/absent PASS; morris/nora FAIL; comment `NO MORRIS RUNTIME PERSONA`.

### Explicit absences confirmed
- no production router introduced
- no new persistence
- no new provider
- no runtime auth mutation (scope = `nora-eval/**` only)
- no Roadmap / Doctrine / C1 / v3 framing mutation

---

## 5. CI post-merge (Étape D)

| Field | Value |
| --- | --- |
| run ID | `33965677986` |
| workflow | SFIA Studio CI |
| event | `push` |
| branch | `main` |
| head SHA | `23d850fda45fe55ba519e0feefe63369d349afcc` |
| status | completed |
| conclusion | **success** |
| URL | https://github.com/mcleland147/sfia-workspace/actions/runs/33965677986 |

### Jobs
| Job | Conclusion |
| --- | --- |
| Detect SFIA Studio changes | success |
| Build and validate SFIA Studio | success (typecheck / lint / build / vitest / governance / secret scan / whitespace) |
| SFIA Studio Required Gate | success |

**Post-merge CI = VERIFIED / GREEN.**

---

## 6. Post-merge proof (Étape E)

| Claim | Status |
| --- | --- |
| PR #466 | **MERGED** |
| G1/G2/G3 | **INTEGRATED ON MAIN** |
| post-merge CI | **VERIFIED / GREEN** |
| PRE-CAMPAIGN HARNESS HARDENING | **INTEGRATED ON MAIN / POST-MERGE VERIFIED** |
| Max proof ceiling for G1/G2/G3 | **DETERMINISTIC TESTED + GIT INTEGRATED + POST-MERGE CI VERIFIED** |
| REAL proof | **NOT claimed** (ZERO REAL this cycle) |

---

## 7. Campaign readiness requalification F1→F10 (Étape F — READ ONLY)

No campaign launched. No REAL. No Stage A.

### F1 — Candidate model capability policy → **READY**
Present on main via `buildGlobalModelReasoningCapabilityManifest`:
- GPT-5.6 Luna / Terra / Sol
- efforts none / low / medium / high / xhigh / max
- minimal rejected
- unknown fail-closed

Reserve: provider capability snapshot = **dated evidence**, not permanent doctrine — revalidate each campaign.

### F2 — Eval harness → **READY**
- Framework `projects/sfia-studio/app/lib/nora-eval/**` reused (KEEP / ADAPT)
- Historical MW0 catalog interpretable (`mw0-catalog-v1`)
- Global catalog versioned (`global-mr-catalog-v1`)
- MW6 observables (`mw6Observe.ts`) available
- Evidence provenance coherent (`catalog:${scenario.catalogVersion}`)
- No second framework introduced

### F3 — Workload coverage → **READY** (semantic; selection glue = contractual)

| Workload family | Reusable scenario(s) on main | Coverage | Gap / glue |
| --- | --- | --- | --- |
| Routine | MW0-S01/S02 catalog/BAR; MW2-S01 strategy/effort decoupling | Strong deterministic | Campaign cell matrix selection (contract) |
| Clarification | MW0-S03 bounded clarification; MW5-S01–S04 challenge/clarification | Strong | Scenario subset for Stage A (contract) |
| Analysis | MW3 disposition + Cognitive STOP; MW4 grounding | Strong | Cell selection |
| High-Assurance | MW2 high-assurance invariants; MW3/MW4 high-assurance dispositions | Strong | Cell selection |
| Memory | MW1-S01/S02 memory availability + compaction | Strong | Cell selection |
| Sources | MW6-S01/S02 source strategy + search≠read + partiality | Strong (global catalog) | REAL hosted ops only under later Morris auth |

No structural harness gap requiring new product code before contract prep. Glue = campaign ExecutionContract scenario matrix — **not created in this cycle**.

### F4 — Metrics

| Metric | Status |
| --- | --- |
| correctness / completeness | **AVAILABLE NOW** (D0 scorers + pass/fail + hard invariants) |
| grounding | **AVAILABLE NOW** (MW4 scorers) |
| contradiction handling | **PARTIAL** (MW3/MW5 related; deepen in campaign design) |
| clarification discipline | **AVAILABLE NOW** (MW0-S03 + MW5) |
| challenge quality | **AVAILABLE NOW** (MW5 bound/ordering) |
| epistemic separation | **AVAILABLE NOW** (OPTION≠REC≠HD + labels) |
| authority respect | **AVAILABLE NOW** (HD pilote-only + no synth authority + MW6 no promotion) |
| cognitive STOP honesty | **AVAILABLE NOW** (MW3) |
| multi-turn stability | **PARTIAL** (MW1 memory path; full multi-turn REAL stability = campaign evidence) |
| latency | **PARTIAL** (usage/timing records exist; campaign must define SLOs) |
| tokens | **AVAILABLE NOW** (usage records / estimates) |
| cost | **AVAILABLE NOW** (`estimateCostUsd` + `CampaignBudgetPolicy` tracker; values must be campaign-specific) |

Nothing invented beyond existing assets.

### F5 — Campaign staging → **READY** (orchestration = contract)
Primitives support Screening / Deepening / Confirmation with soft/hard stop (`CampaignBudgetPolicy` target/soft/hard; `BudgetTracker` hard-stop). Explicit Stage A/B/C + early-stop policy must be written into the consolidated campaign ExecutionContract — **not missing harness code**. Stages **not executed**.

### F6 — Budget contract → **CAMPAIGN BUDGET CONTRACT STILL REQUIRED**
Existing primitives (must be **explicitly** bound — not silent defaults):
- `NoraCampaignBudget`: maxModelInvocations / maxHostedWebOperations / maxAggregateRealCalls / hostedHardCapCapability / denial codes
- Eval `CampaignBudgetPolicy`: targetUsd / softStopUsd / hardCapUsd
- Historical labels: `H17_HISTORICAL_AUTHORIZED_AGGREGATE_CALLS = 100` / observed 141 — **historical constants only**
- `createNoraCampaignBudget` requires explicit limits; aggregate defaults to maxModel when omitted — **does not auto-load H17=100**
- `MW0_BUDGET_POLICY` (3/4/5 USD) is **MW0 screening historical** — must **not** silently reuse for Global MR campaign

**Verdict F6:** CAMPAIGN BUDGET CONTRACT STILL REQUIRED (contractual consolidation; not a blocking harness rewrite).

No spend authorized this cycle.

### F7 — Authority / REAL gate → **PASS (unchanged by merge)**
- Merge scope = `nora-eval/**` only → product auth / MW6 REAL bridge / Pilote resolution **not mutated**
- Pilote = runtime human actor (G3 scorer enforces Pilote-only HD semantics for eval)
- Morris ≠ runtime persona (`NO MORRIS RUNTIME PERSONA`)
- No implicit REAL authorization from merge
- No `NORA_RUNTIME_AUTHORIZED` global introduced
- No production model selection
- No global L5
- Note: exact historical symbol names `requestPilotDecision` / `READ_NONE` not present as current identifiers; current boundary uses Pilote resolution + MW6 external-discovery / REAL authorization bridges — **unchanged by #466**

### F8 — Model routing → **NO ROUTER BEFORE EVIDENCE**
No production router introduced by #466. Disposition stands: no router before campaign evidence of material multi-model benefit.

### F9 — Possible campaign outcomes (CANDIDATES only — not decisions)
- A: one dominant model + adaptive reasoning effort
- B: materially useful multi-model strategy
- C: insufficient evidence
- D: no measured gain justifies complexity/cost

### F10 — Remaining blockers before Stage A REAL (closed list)

| Item | Class | Challenge |
| --- | --- | --- |
| Consolidated Global MR ExecutionContract (stages A/B/C, early-stop, cell matrix, catalog=`global-mr-catalog-v1`, capability=`buildGlobalModelReasoningCapabilityManifest`) | **BLOCKING** (before REAL) | Necessary now? Yes before REAL. Code? No — contract. Absorbable in next lot? Yes. Morris decision? Yes to approve contract then REAL. |
| Campaign-specific budget numbers (max model / hosted / aggregate / USD target-soft-hard) ≠ H17=100 ≠ MW0 3/4/5 silent reuse | **BLOCKING** (before REAL) | Contractual; primitives exist |
| Scenario / cell selection for Stage A screening subset | **BLOCKING** (before REAL) | Contractual selection over existing catalog |
| Morris GO authorizing Stage A REAL spend | **BLOCKING** (before REAL) | Decision only — after contract |
| Dated revalidation of provider capability snapshot at campaign start | **NON-BLOCKING** (process) | Evidence refresh, not code |
| Multi-turn stability SLO definition | **OPTIONAL** | Can be absorbed in contract metrics section |
| Soft deepening glue scripts | **OPTIONAL / NON-BLOCKING** | Prefer absorb in contract; avoid micro-cycle |
| Roadmap MW6 wording truth-sync | **NON-BLOCKING** reserve | Explicitly out of scope this GO |
| Production router | **OPTIONAL — deferred** | NO ROUTER BEFORE EVIDENCE |
| Runtime v3 / Cognitive Completion | **OUT OF SCOPE** | NON ADOPTED / NOT PROVEN |

No blocking harness code gap identified that requires a product correction cycle before ExecutionContract preparation.

---

## 8. Campaign readiness verdict

**`GLOBAL MODEL × REASONING CAMPAIGN — READY FOR ONE CONSOLIDATED EXECUTION CONTRACT PREPARATION — ZERO REAL`**

Rationale: G1/G2/G3 harness preconditions are integrated and post-merge verified. Remaining work before Stage A REAL is contractual (ExecutionContract + budget + scenario/stage selection + Morris REAL auth) — not a structuring harness rewrite.

Merge does **not** produce `REAL AUTHORIZED`.

---

## 9. Réserves
- Roadmap may still carry historical MW6 “integration pending” wording — documentary reserve; Git product truth primes; not mutated here.
- Provider capability snapshot is dated evidence.
- Process-local campaign budget lease (no durable persistence) remains a known realism gap for multi-process runs — document in contract; not a #466 defect.
- H17 FAIL 141/100 remains historical governance deviation — not a silent campaign default.

---

## 10. Anti-claims
- ZERO REAL this cycle
- Production model routing **NOT SELECTED**
- Cognitive Completion **NOT PROVEN**
- Runtime v3 **NON ADOPTED**
- Global Model × Reasoning Campaign **NOT AUTHORIZED** / Stage A **NOT STARTED**
- No router introduced
- G1/G2/G3 proof ceiling = DETERMINISTIC + GIT INTEGRATED + POST-MERGE CI — **≠ REAL proof**

---

## 11. Next Morris gate
Prepare **one consolidated Global Model × Reasoning Campaign ExecutionContract** (ZERO REAL):
- Stage A/B/C + early-stop
- cell/scenario matrix on `global-mr-catalog-v1`
- capability policy = global manifest
- explicit budget caps (not H17 / not MW0 silent reuse)
- outcomes A–D as campaign candidates
- then request Morris decision for Stage A REAL authorization (separate GO)

---

## 12. Final merge + readiness verdicts

`PR #466 MERGED — PRE-CAMPAIGN HARNESS INTEGRATED ON MAIN / POST-MERGE VERIFIED`

`GLOBAL MODEL × REASONING CAMPAIGN — READY FOR ONE CONSOLIDATED EXECUTION CONTRACT PREPARATION — ZERO REAL`
