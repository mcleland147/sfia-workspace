# SFIA Studio — W3-B TD-W3B-02 Bound Contract Material Clarification — Review Pack FULL

**Cycle 6 · CRITICAL · DOC · Architecture technique — targeted clarification**

Timestamps: **2026-08-24 23:35 CEST** · **2026-08-24 21:35 UTC**

---

## Morris decision (exact — consumed)

MORRIS DECISION — W3-B TD-W3B-02 BOUND CONTRACT MATERIAL — OPTION B ADOPTED — EXECUTIONATTEMPT CAPTURES AT ACCEPTANCE AN IMMUTABLE CANONICAL SNAPSHOT OF THE BOUND EXECUTIONCONTRACT SEMANTIC MATERIAL USING THE EXISTING executionContractSemanticMaterial() REPRESENTATION + BOUND EC VERSION + SEMANTIC FINGERPRINT — EXISTING ATTEMPT PRODUCT-SQLITE PAYLOAD ONLY — EXECUTIONCONTRACT REMAINS THE SINGLE CURRENT LIFECYCLE SoT — SNAPSHOT IS HISTORICAL BINDING EVIDENCE, NOT A SECOND EC — NO LATEST-EC CROSS-VERSION MATCHING — NO AUTO-MIGRATION — NO EC HISTORY REPOSITORY — NO SEMANTIC-VERSION REDESIGN — C6 CLOSED — W1/W2/W3-A CLOSED — W3-B CURRENT / NOT CLOSED — W4 OUT — RUNTIME V3 NON ADOPTED.

---

## Git truth

| Item | Value |
| --- | --- |
| Repository | `mcleland147/sfia-workspace` |
| origin/main | `a71d9413e0435a8252ab4c695163b67354d193aa` |
| Branch | `docs/sfia-studio-w3-b-td-w3b-02-bound-material-clarification` |
| Worktree | `/Users/morris/Projects/sfia-workspace-w3b-td02-clarification` |
| Base | `a71d9413e0435a8252ab4c695163b67354d193aa` (exact `origin/main`) |
| W3-B Delivery candidate (read-only reference) | `756cda50e03b177ef6e41f52b6d43ab9e232efe2` on `delivery/sfia-studio-product-completion-w3-b-td-reconciled` |
| Delivery worktree | **NOT mutated** |
| Project push / PR / merge | **NOT authorized** |

---

## Mandatory sources loaded

- Convergence: build doctrine + roadmap (main baseline)
- Product completion: docs 01–12, UX experience architecture
- v3 framing: 32, 34, 35, 37
- Process: cycle execution template, routing guide
- Runtime read-only: `semanticFingerprint.ts`, EC/Attempt types, `sqliteExecutionAttemptRepository.ts`
- Latest W3-B Delivery handoff: `d1a611b0` / blob `43b1dfab…` — Pass 2 candidate `756cda50` + TD-W3B-02 structural blocker confirmed

---

## Vertical C1 → W4 validation

| Layer | Alignment |
| --- | --- |
| **C1 O-07…O-12** | Continuity/restart requires exact bound contract truth — Option B strengthens O-07/O-08/O-11 without new product concepts |
| **C2 L→…→W** | Snapshot captured after W2 authorization boundary; no HumanDecision/Trajectory reopen |
| **FA FC-08→FC-13** | FC-10 Attempt owns binding snapshot; FC-11 consumes CE+Attempt; FC-12 does not own EC lifecycle; no second engine |
| **Backlog W3** | Execute/Prove/Replan unchanged; W3-B blocker closed at architecture level only |
| **W4** | Internal honesty for S7/S8/S9/S10/S12; no new Product surface |
| **v3 V3-F02/F06/F09/F11/F12/F14/F15** | Continuity, trajectory, replan, execution governance, evidence completeness, anti-claims — all compatible |

---

## Architectural contradiction (Delivery-evidenced)

1. `ExecutionContract.version` = lifecycle/OCC revision counter (increments on validate/confirm/cancel/terminal paths).
2. `semanticFingerprint` = hash of `executionContractSemanticMaterial()` — **excludes** `status` and `version`.
3. Attempt binds `executionContractVersion` at accept.
4. Post-accept lifecycle may bump EC.version without fingerprint change.
5. Repository has **no** historical EC lookup by exact version.
6. **Therefore:** Attempt@EC vN + latest EC vN+k (same fingerprint) **≠** exact bound material required by TD-W3B-02.
7. Pass 2 Delivery fingerprint-gated latest-EC reads = **forbidden cross-version matching**.

### Runtime evidence — semanticFingerprint.ts

```typescript
export type ExecutionContractSemanticMaterial = {
  executionContractId: string;
  projectId: string;
  // ... action, target, scope, expectedOutputs, evidenceRequirements, etc.
  // excludes status, version
};

export function executionContractSemanticMaterial(contract: Pick<ExecutionContract, ...>): ExecutionContractSemanticMaterial { ... }

export function computeExecutionContractSemanticFingerprint(contract): string {
  const material = executionContractSemanticMaterial(contract);
  return sha256(canonicalizeJson(material));
}
```

### Runtime evidence — Attempt persistence

- Domain: `ExecutionAttempt.executionContractVersion` at accept (`types.ts`)
- Store: Product SQLite `oa_execution_attempts.payload_json` full Attempt JSON (`sqliteExecutionAttemptRepository.ts`)
- **No** EC history table; **no** `findByIdAndVersion`

---

## Options A / B / C

| Option | Summary | Decision |
| --- | --- | --- |
| **A** | Global semantic version separate from OCC | Not selected now — W2 blast radius; not permanently rejected |
| **B** | Attempt-bound immutable snapshot at accept | **ADOPTED** |
| **C** | EC history repository | Not selected — new persistence breadth; C6 impact |

---

## Option B — canonical snapshot contract

```text
ExecutionAttempt.boundExecutionContract:
  executionContractSchemaVersion
  executionContractVersion      # exact at acceptance
  semanticFingerprint           # exact at acceptance
  semanticMaterial              # executionContractSemanticMaterial(contract) at acceptance
```

---

## Ownership / SoT matrix

| Aggregate | Role |
| --- | --- |
| ExecutionContract | Sole **current** mutable lifecycle SoT |
| boundExecutionContract on Attempt | Immutable historical binding evidence |
| ClaimEvaluation | Consumes bound snapshot for Contract Result |
| FC-11 | Never evaluates latest EC heuristically |
| FC-12 | Does not own EC lifecycle |

---

## Binding / cross-version semantics

- Assessment uses **bound snapshot only** — no latest-EC substitution
- Lifecycle OCC bump on current EC does **not** mutate Attempt binding
- Amended/superseded EC: prior Attempt/CE valid only for prior snapshot; prior CE cannot satisfy new EC/Attempt
- No version drift tolerance; no auto-migration

---

## Historical Attempts / persistence / parallelism

- **No backfill** — missing snapshot → fail-closed NOT_PROVEN/UNCLAIMED (R-TD02-01)
- **Persistence:** additive Attempt `payload_json` field only — no new table/DB (C6 CLOSED)
- **No parallel architecture:** not a second EC, not EC history, not ProductOutcome, not Stop Engine

---

## Downstream impact (summary)

| Wave | Impact |
| --- | --- |
| W1/W2/W3-A | No reopen |
| W3-B | Architecture blocker closed; Delivery must persist snapshot + re-prove X-W3B-01…12 |
| W3-C/D/E/W4/REAL/runtime v3 | As documented in DOC12 §11 |

---

## Debt / exits

| ID | Reserve | Exit |
| --- | --- | --- |
| R-TD02-01 | Historical Attempts lack snapshot | Fail-closed; no backfill for W3-B |
| R-TD02-02 | Material duplication in Attempt payload | Accepted; not second mutable SoT |
| R-TD02-03 | Future semantic material schema change | Versioning responsibility; not W3-B blocker |

---

## Modified project files (exactly two)

1. `projects/sfia-studio/product-completion/12-product-completion-w3-b-targeted-technical-architecture-addendum.md`
2. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

**Stat:** 2 files, +176 / −22 lines

---

## Wave / gate states

| Gate | State |
| --- | --- |
| W1 / W2 / W3-A | CLOSED BY MORRIS |
| W3 | IN PROGRESS / NOT CLOSED |
| W3-B | CURRENT / NOT CLOSED |
| W3-C/D/E | NOT STARTED |
| C6 | CLOSED |
| REAL | OUT |
| FinOps/T7 | FREEZE |
| W4 | OUT |
| runtime v3 | NON ADOPTED |

---

## Next gate

ChatGPT review of architecture clarification → integrate/review-clean → resume same W3-B Delivery candidate correction (implement Option B snapshot + re-prove X-W3B-01…12).

---

## Verdict

**READY FOR REVIEW** — Morris Option B recorded in DOC12 + Roadmap; no code; no Delivery mutation; local project commit only.

---

## Complete useful diff

```diff
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index 364ec831..07be7318 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -6,8 +6,9 @@
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
 | **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
 | **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
-| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; ce document **≠** embed permanent `origin/main` HEAD)* · **Référence de maintenance / W3-B POST-MERGE** = `origin/main` @ `bcc39fba04664edc09fca782e61e5f5e70a45d35` (merge PR **#410** W3-B Targeted Technical Architecture) · PR head `cbad09d54518c56d9fd894a788e55b53d2b6b5a5` · PR-head CI **`32764582915` SUCCESS** · push/main CI **`32765431464` SUCCESS** · prior W3-A post-closure `ba7aa2db408b7fd00faf9638da060ce0833b794b` · **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · **W3-B targeted architecture ADOPTED BY MORRIS / INTEGRATED ON MAIN** · TD-W3B-01…04 **ADOPTED** · ARCH-R01…ARCH-R06 **REVIEW-CLEAN** · Option A **ADOPTED** · Option S2 **ADOPTED** · **W3 IN PROGRESS / NOT CLOSED** · **W3-B CURRENT CAPABILITY / NOT CLOSED** · W3-B Delivery **NOT RESTARTED / REQUALIFICATION REQUIRED** · W3-C/D/E **NOT STARTED** · C6 **CLOSED** · REAL **OUT / NOT CONSUMED** · FinOps/T7 **FREEZE** · W4 **OUT / NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE / NON TERMINÉE** · **≠** W3 CLOSED · **≠** W3-B complete · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
-| **Timestamp maintenance courant** | 2026-08-24 21:07 CEST (+0200) — **W3-B POST-MERGE TRUTH SYNC** — PR **#410 MERGED** · merge `bcc39fba04664edc09fca782e61e5f5e70a45d35` · head `cbad09d54518c56d9fd894a788e55b53d2b6b5a5` · PR-head CI **`32764582915` SUCCESS** · push/main CI **`32765431464` SUCCESS** · TD-W3B-01…04 **ADOPTED / INTEGRATED ON MAIN** · post-merge DOC12 + Roadmap truth **represented in merge-stable form** · repository transport/integration state **RESOLVE FROM GIT / PR EVIDENCE** · W3-B Delivery **NOT RESTARTED** · W3 **IN PROGRESS / NOT CLOSED** · REAL **OUT** · FinOps/T7 **FREEZE** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** W3-B complete · **≠** READY FOR REAL |
+| **Snapshot Git courant** | **RESOLVE FROM REPOSITORY** *(Git SoT ; ce document **≠** embed permanent `origin/main` HEAD)* · **Référence de maintenance courante** = `origin/main` @ `a71d9413e0435a8252ab4c695163b67354d193aa` · **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · **W3-B targeted architecture ADOPTED BY MORRIS / INTEGRATED ON MAIN** (PR **#410**) · **TD-W3B-02 Option B (bound snapshot) ADOPTED BY MORRIS — architecture clarification Cycle 6 DOC** · TD-W3B-01…04 **ADOPTED** · ARCH-R01…ARCH-R06 **REVIEW-CLEAN** · Option A **ADOPTED** · Option S2 **ADOPTED** · **W3 IN PROGRESS / NOT CLOSED** · **W3-B CURRENT CAPABILITY / NOT CLOSED** · W3-B Delivery **restarted under Morris** · local reviewed candidate **`756cda50`** · TD-W3B-02 structural blocker **closed at architecture level** · **implementation + re-proof still required** · clarification **must be review-clean before resuming same Delivery correction** · W3-C/D/E **NOT STARTED** · C6 **CLOSED** · REAL **OUT / NOT CONSUMED** · FinOps/T7 **FREEZE** · W4 **OUT / NOT STARTED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE / NON TERMINÉE** · **≠** W3 CLOSED · **≠** W3-B complete · **≠** READY FOR REAL |
+| **Timestamp maintenance courant** | 2026-08-24 23:35 CEST (+0200) — **W3-B TD-W3B-02 OPTION B ARCHITECTURE CLARIFICATION** — Morris Option B **ADOPTED** · Attempt-bound immutable canonical EC semantic snapshot · existing `executionContractSemanticMaterial()` · existing Attempt Product SQLite payload only · **no** latest-EC cross-version matching · **no** EC history repository · W3-B Delivery Pass 2 candidate `756cda50` exposed structural contradiction · architecture blocker **closed at DOC level** · Delivery correction **NOT resumed in this cycle** · W3 **IN PROGRESS / NOT CLOSED** · W3-B **NOT CLOSED** · C6 **CLOSED** · REAL **OUT** · FinOps/T7 **FREEZE** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3-B closure · **≠** W3-C start |
+| **Timestamp maintenance historique W3-B POST-MERGE TRUTH SYNC** | 2026-08-24 21:07 CEST (+0200) — **W3-B POST-MERGE TRUTH SYNC** — *(historique · superseded by TD-W3B-02 Option B clarification)* — PR **#410 MERGED** · merge `bcc39fba04664edc09fca782e61e5f5e70a45d35` · head `cbad09d54518c56d9fd894a788e55b53d2b6b5a5` · PR-head CI **`32764582915` SUCCESS** · push/main CI **`32765431464` SUCCESS** · TD-W3B-01…04 **ADOPTED / INTEGRATED ON MAIN** · W3-B Delivery **NOT RESTARTED** *(true then)* · W3 **IN PROGRESS / NOT CLOSED** · REAL **OUT** · FinOps/T7 **FREEZE** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
 | **Timestamp maintenance historique W3-A POST-CLOSURE TRUTH SYNC** | 2026-08-24 11:04 CEST (+0200) — **W3-A POST-CLOSURE TRUTH SYNC** — *(historique · superseded by W3-B POST-MERGE truth sync)* — **W3-A CLOSED BY MORRIS** · US-P1-04 / FC-10 exit X-W3A-01…08 **SATISFIED** · PR **#408 MERGED** · merge `686e545a4bb058b95c8c456a517322ceb3e0bcaa` · PR-head CI **`32702286010` SUCCESS** · post-merge main CI **`32703289053` SUCCESS** · proof **DETERMINISTIC PRODUCT-NATIVE PROVEN** · TestExecutionAdapter remains fake external executor · W3 **IN PROGRESS / NOT CLOSED** · next capability candidate **W3-B** (US-P1-05 / US-P1-06) · **W3-B NOT AUTHORIZED / NOT STARTED** *(true then · later architecture adopted via PR #410)* · REAL **OUT** · FinOps/T7 **FREEZE** · W4 **NOT STARTED** · C6 **CLOSED** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
 | **Timestamp maintenance historique W3-A R16/R09 correction candidate** | 2026-08-24 08:44 CEST (+0200) — **W3-A R16 reserved Confirmation + R09 visual lifecycle** — *(historique · superseded by W3-A CLOSED + post-closure truth sync)* — contradiction fail-closed · system-owned constraint namespaces · legacy exploit blocked · R09 PNG 07/08/09 honest · Playwright Server Action latch (test-only) · W4 **NOT TOUCHED** · awaiting ChatGPT re-review *(true then · later integrated via PR #408)* · W3 **NOT CLOSED** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
 | **Timestamp maintenance historique W2 POST-CLOSURE TRUTH SYNC** | 2026-08-23 20:37:16 CEST (+0200) — **W2 POST-CLOSURE TRUTH SYNC** — *(historique · superseded by W3 DELIVERY START)* — `origin/main` @ `1e4b0dbb…` then PR **#406** → `3a3b1cf…` · **W2 CLOSED BY MORRIS** · **NEXT CAPACITY** was **NEXT-CAPABILITY REQUALIFICATION** *(later SATISFIED / CONSUMED)* · W3 was **NOT STARTED / NOT AUTHORIZED** *(true then · later AUTHORIZED)* · FinOps/T7 **FREEZE** · C6 **CLOSED** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** |
@@ -52,14 +53,14 @@
 | **Product Completion Functional Architecture (Cycle 3)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · path : `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md` · PR **#378 MERGED** · head `1018aa79d1d8ebb8783d11ce25ff08036764e87e` · merge `18b89ec9d6f1a91f8ff49df9c895299b6676b572` · PR CI **#240 SUCCESS** · post-merge CI **#241 SUCCESS** · post-merge sync PR **#379 MERGED** · sync head `0aa644d935b5df1ba7f4c2278fd63320555b9f6a` · sync merge `134f4105fea09543a100749e74ca5e3be32bfda2` · PR CI **#242 SUCCESS** · post-merge CI **#243 SUCCESS** · final closure PR **#380 MERGED** · head `53aeceea…` · merge `14329c60…` · post-merge CI **#245 SUCCESS** · **POST-MERGE COHERENCE COMPLETE** · PM-R01 **CLOSED** · PM-R02 **CLOSED** · FC-01…FC-15 **APPROVED** · OA-aligned Option A + thin orchestration C **APPROVED** · no parallel architecture · targeted durability technical delta **QUALIFIED** then **partially realized via W1** · FA-R01…FA-R12 **CLOSED** · C1 §H/J.1 + C2 A→W preserved · H-01…H-04 **CARRY** · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (requested ephemeral / granted+ durable · PR #395) · ProjectTrajectory durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · **downstream gaps remain** (HD/replan liaison complète · Recovery E2E · taxonomie épistémique complète → W2/W3) · UAT **OPEN** · SC-02 **NON-BLOCKING** · **RESERVE-GOV-EC-ORDER CLOSED** · Pre-M6 debt **CARRY** · source branch cleanup **NOT PERFORMED** · **≠** Architecture technique fully exhausted · **≠** Product Completion terminée · **≠** REAL |
 | **RESERVE-GOV-EC-ORDER** | **CLOSED ON MAIN** via PR **#381** — Build Doctrine execution order aligned with validated C2 / Functional Architecture : HumanDecision → EC Prepare → EC Inspect → Confirmation if required → effective authority → Execute · Confirmation **runtime** durability **IMPLEMENTED AT W1 SCOPE** (PR #395) · remaining continuity/authority gaps stay **DOWNSTREAM** · ≠ reserve reopen |
 | **Morris trajectory decision (post-FA requalification)** | **HISTORICAL** — Governance EC Order Sync → C6 → Next-Cycle Requalification *(superseded for forward path by CKC-first)* |
-| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 completed · **NOW:** **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · **W3-B targeted architecture ADOPTED BY MORRIS / INTEGRATED ON MAIN** via PR **#410** (`bcc39fba…`) · **W3 IN PROGRESS / NOT CLOSED** · **W3-B CURRENT CAPABILITY / NOT CLOSED** · W3-B Delivery **NOT RESTARTED / REQUALIFICATION REQUIRED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** W3-B complete · **≠** REAL · **≠** FinOps PASS |
+| **Morris trajectory decision (post-C6 / CKC)** | **SUPERSEDED FOR FORWARD PATH** — CKC-first + G2 + W1 + W2 completed · **NOW:** **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · **W3-B targeted architecture ADOPTED BY MORRIS / INTEGRATED ON MAIN** via PR **#410** · **TD-W3B-02 Option B ADOPTED** (bound snapshot clarification) · **W3 IN PROGRESS / NOT CLOSED** · **W3-B CURRENT CAPABILITY / NOT CLOSED** · W3-B Delivery **restarted** · reviewed local candidate **`756cda50`** · TD-W3B-02 blocker **closed at architecture level** · **resume same Delivery correction after clarification review-clean** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · C6 **CLOSED** · REAL **OUT** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED · **≠** W3-B complete · **≠** REAL · **≠** FinOps PASS |
 | **Product Completion W2 Track D / bounded CKC Phase B** | **INTEGRATED ON MAIN** · PR **#403 MERGED** · head `1cdf4b41270cffe31be28e02e3effe17a1b15477` · merge `e4a93fea77c7edd01c4e6fc2d47455db14e102e8` · PR-head CI **`32645232920` SUCCESS / Required Gate PASS** · head→merge **0-file content delta** · push/main CI **`32646038871` SUCCESS / Required Gate PASS** · D-W2-02 / US-P1-14 / REQ-24 · product-native CKC cognition before Options/Recommendation · delivery + security via **same generic product path** · Recommendation remains Recommendation · no automatic HumanDecision · no authority from CKC · **STOP BEFORE EXECUTE** · legacy OptionSet cutover fail-closed · business-first Pilote output · structured provenance retained · proof **DETERMINISTIC PROVEN** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · W2 later **CLOSED BY MORRIS** *(post-requalification)* · full CKC track **DOWNSTREAM W3** · C6 **CLOSED** · FinOps/T7 **FREEZE** · Execute **OUT** · REAL **OUT** · runtime v3 **NON ADOPTED** · **≠** W2 incomplete at Phase B timestamp · **≠** full CKC completion · **≠** REAL BOUNDARY PROVEN · **≠** W3 authorized |
 | **Product Completion W2 Final Closure Requalification** | **ACCEPTED BY MORRIS** · Cycle 9 QA · typology DOC · evidence on `main@1e4b0dbb…` · X01…X08 **PROVEN** · H→N 18-step **PROVEN** · PASS WITH NON-BLOCKING RESERVES · W2-CL-R01…R03 **CLOSED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · proof ceiling **DETERMINISTIC PRODUCT E2E PROVEN** · path `projects/sfia-studio/product-completion/10-product-completion-wave-2-final-closure-qualification.md` · **≠** W3 authorized · **≠** REAL · runtime v3 **NON ADOPTED** |
 | **Product Completion W2 Closure Decision** | **W2 CLOSED BY MORRIS** · exit contracts X01…X08 + integrated H→N path **ACCEPTED AS SUFFICIENT W2 EXIT PROOF** · residuals retained · Product Completion **INCOMPLETE** · W3 later **AUTHORIZED** under distinct GO · **≠** W3 CLOSED · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
 | **Product Completion W3 Delivery Readiness** | **QUALIFIED** · path `projects/sfia-studio/product-completion/11-product-completion-wave-3-delivery-readiness.md` · GO Morris W3 Delivery **CONSUMED** · W3 scope = backlog existant · C6 **CLOSED** / implement-only · REAL **OUT** · FinOps **FREEZE** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **≠** W3 CLOSED |
 | **Product Completion W3-A Governed Execute** | **CLOSED BY MORRIS / INTEGRATED ON MAIN** · PR **#408 MERGED** · candidate `a69e3ad1924b7e33407ff0f9d62dd2189300f785` · merge `686e545a4bb058b95c8c456a517322ceb3e0bcaa` · PR-head CI **`32702286010` SUCCESS** · push/main CI **`32703289053` SUCCESS** · head→merge **0-file / tree parity** · US-P1-04 / FC-10 · X-W3A-01…08 **PASS** · proof **DETERMINISTIC PRODUCT-NATIVE PROVEN** · TestExecutionAdapter remains external executor fake · post-merge evidence handoff `b3108f4f…` · source branch `delivery/sfia-studio-product-completion-w3-a-governed-execute` **PRESERVED** · **≠** W3 CLOSED · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
 | **Product Completion W3-B Targeted Technical Architecture** | **VALIDATED / ADOPTED BY MORRIS — INTEGRATED ON MAIN** · path `projects/sfia-studio/product-completion/12-product-completion-w3-b-targeted-technical-architecture-addendum.md` · PR **#410 MERGED** · head `cbad09d54518c56d9fd894a788e55b53d2b6b5a5` · merge `bcc39fba04664edc09fca782e61e5f5e70a45d35` · PR-head CI **`32764582915` SUCCESS** · push/main CI **`32765431464` SUCCESS** · ARCH-R01…ARCH-R06 **REVIEW-CLEAN** · TD-W3B-01…04 **ADOPTED** · Option A ClaimEvaluation adaptation · Option S2 same-Attempt system-governed STOP · Product SQLite **KEEP** · C6 **CLOSED / not reopened** · no parallel Claim Engine · no Stop Engine · Delivery **NOT restarted** · **≠** W3-B complete · **≠** W3 closed · **≠** READY FOR REAL · **≠** runtime v3 ADOPTED |
-| **Product Completion W3 Delivery** | **AUTHORIZED BY MORRIS / IN PROGRESS / NOT CLOSED** · historical closed slice **W3-A** · **W3-B CURRENT CAPABILITY / IN PROGRESS AT PRODUCT-CAPABILITY LEVEL** · historical Delivery attempt existed under W3 Delivery GO then paused on W3B-D01/D02 structural architecture gaps · those architecture gaps **CLOSED AT ARCHITECTURE-DECISION LEVEL** through DOC12 (PR **#410**) · W3-B Delivery **NOT RESTARTED / REQUALIFICATION REQUIRED** against current main + adopted TD-W3B-01…04 + existing dirty Delivery candidate · canonical `/studio` · **≠** W3 CLOSED · **≠** W3-B Delivery authorized to resume · **≠** READY FOR REAL · **≠** Evidence loop complete |
+| **Product Completion W3 Delivery** | **AUTHORIZED BY MORRIS / IN PROGRESS / NOT CLOSED** · historical closed slice **W3-A** · **W3-B CURRENT CAPABILITY / IN PROGRESS AT PRODUCT-CAPABILITY LEVEL** · W3-B Delivery **restarted under Morris** · reviewed local candidate **`756cda50`** (Pass 2) · TD-W3B-02 structural blocker **closed at architecture level via Morris Option B** · **resume same Delivery correction after clarification review-clean** · canonical `/studio` · **≠** W3 CLOSED · **≠** W3-B closed · **≠** READY FOR REAL · **≠** Evidence loop complete |
 | **Product Completion W2 Final Closure Product Correction** | **INTEGRATED ON MAIN** · PR **#405 MERGED** · head `330b36258f5a5fcb117fb562b12ff173b3675d94` · merge `1e4b0dbb8de291f1a02e084f03231d62d04dfb0b` · PR-head CI SUCCESS · push/main CI **`32654262020` SUCCESS** · R01 Phase B Product E2E cognition · R02 material EC amend/reinspect + R1 recovery-safe · C6 **CLOSED** · no `lib/oa` mutation · **≠** W3 · **≠** REAL · runtime v3 **NON ADOPTED** |
 | **Product Completion W2-G3 Delivery** | **INTEGRATED ON MAIN** · PR **#400 MERGED** · delivery head `a276f170faece84a2121f5fe5796c24ae443674d` · merge `dd852243a652e85cce455a68fae5ac7aa13d2bea` · PR-head CI **`32632461315` SUCCESS / Required Gate PASS** · push/main CI **`32633308148` SUCCESS** · E+A+B+C governed trajectory: Options / Recommendation / HumanDecision / EC inspect / conditional Confirmation / authority+executor sufficiency · **STOP BEFORE EXECUTE** · ProjectTrajectory SoT **KEEP** · C6 **CLOSED** · D-W2-CI-FINOPS-FREEZE-01 **ADOPTED** · FinOps/T7 **FREEZE** · T7-C04 **DEFERRED** · Phase B later **INTEGRATED** via PR **#403** · **≠** W2 finally closed · **≠** Execute · **≠** REAL · **≠** FinOps PASS · runtime v3 **NON ADOPTED** |
 | **Product Completion Backlog (Cycle 5)** | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · PR **#393 MERGED** · merge `7750b2a4017338c1a236433c4db8f5cc97dc2feb` · path `projects/sfia-studio/product-completion/05-product-completion-backlog-user-stories.md` · 5 Epics · 4 Waves · P0/P1 cut-line · réserve R5 non bloquante · **≠** Delivery authorized by validation alone · W1 Delivery later **CONSUMED via distinct G3/Morris GOs** |
@@ -74,7 +75,7 @@
 | **ROADMAP-POST-MERGE-CKC-388** | **CLOSED ON MAIN** via PR **#389** / merge `c4dc1c9ce78290f00354e58dde451dd09616f49e` · post-merge CI **`32527209975` SUCCESS** · Roadmap sync integrated on main · **≠** DoctrinePackage runtime binding · **≠** Nora proven |
 | **DoctrinePackage / runtime CKC architecture qualification** | **ARCHITECTURE DIRECTION ADOPTED BY MORRIS — INTEGRATED ON MAIN** via PR **#390 + PR #391** · **G2 materialization DECIDED + GIT-INTEGRATED** via PR **#394** (`b3e978fe…`) · **W1 runtime materialization INTEGRATED** via PR **#395** (`ddd39181…`) · `pkg:sfia-studio-doctrine-v3@1.0.0` · OPTION A root `projects/sfia-studio/app/lib/oa/doctrine/product/` · resolver/repository **KEEP** · D02 Option B **KEEP** · fallback **NONE** · fixture quarantine/test-only → retire later · Product pin **fail-closed** · Phase A package-bound **INTEGRATED** · Phase A **≠** Phase B complete · bounded CKC→Nora seam **PROVEN (W1)** · bounded Phase B / generic multi-cycle cognition **INTEGRATED** (PR **#403**) · full CKC catalog evolvability **DOWNSTREAM W3** · runtime v3 **NON ADOPTED** |
 | **SFIA Studio product design tooling** | **MORRIS DECISION — PENPOT IS THE REFERENCE DESIGN WORKSPACE FOR SFIA STUDIO PRODUCT DESIGN** · Studio product design only · Git remains SoT for governance/contracts/decisions · R-04 EA historical recommendation **SUPERSEDED FOR FUTURE SFIA STUDIO PRODUCT DESIGN** · **≠** global SFIA methodological baseline · **≠** v3 doctrine change · **≠** runtime v3 adoption · EA document **not** retroactively rewritten |
-| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · W1 **CLOSED** · **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · **W3-B architecture ADOPTED / INTEGRATED ON MAIN** (PR **#410** / `bcc39fba…`) · **W3 IN PROGRESS / NOT CLOSED** · **W3-B CURRENT CAPABILITY / NOT CLOSED** · **W3-B Delivery NOT RESTARTED / REQUALIFICATION REQUIRED** · W3-B Delivery restart requires distinct Morris decision after qualification · W3-C/D/E **NOT STARTED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · REAL **NOT CONSUMED** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · repository transport state **RESOLVE FROM GIT / PR EVIDENCE** · **NO REAL WITHOUT DISTINCT MORRIS GO** |
+| **Gates courants** | C1…C6 **INTEGRATED / C6 CLOSED** · W1 **CLOSED** · **W2 CLOSED BY MORRIS** · **W3-A CLOSED BY MORRIS** · **W3-B architecture ADOPTED / INTEGRATED ON MAIN** (PR **#410**) · **TD-W3B-02 Option B ADOPTED** (architecture clarification) · **W3 IN PROGRESS / NOT CLOSED** · **W3-B CURRENT CAPABILITY / NOT CLOSED** · W3-B Delivery **restarted** · candidate **`756cda50`** · **resume Delivery correction after clarification review-clean** · W3-C/D/E **NOT STARTED** · W2-CL-R04 **OPEN_NON_BLOCKING** · PB-RES-REAL-01 **OPEN / TRACE ONLY** · FinOps/T7 **FREEZE** · REAL **NOT CONSUMED** · W4 **OUT** · runtime v3 **NON ADOPTED** · Product Completion **INCOMPLETE** · **NO REAL WITHOUT DISTINCT MORRIS GO** |
 | **Intégration Git** | **C2 :** PR #369 / head `3c78c6763d0d090bdc38f3866ecd71ed6be219d0` / merge `2406ccda211842fc7f8da3699bb186a30f7dc105` · **Post-merge sync :** PR #370 (integration vehicle · Git evidence authoritative) · CI SFIA Studio **#222** SUCCESS (PR head) · post-merge CI **#223** SUCCESS · source branch `docs/sfia-studio-product-completion-c2-integration-clean` **PRESERVED** · historical unauthorized branch `docs/sfia-studio-product-completion-c2-functional-design` @ `780ab4c5` **PRESERVED FOR AUDIT** · Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · **M5 Delivery (Option B + W1) :** PR #350 / head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` / merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI SFIA Studio **#184** SUCCESS · post-merge CI **#185** SUCCESS · **M5 UI/Nora durable rehydrate :** PR #351 / head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` / merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI SFIA Studio **#186** SUCCESS · post-merge CI **#187** SUCCESS · M5 exit re-evaluation handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab` · M5 EXIT PROOF **SATISFIED ON MAIN** · **M5 capitalization / Roadmap sync :** PR #352 / head `c26824c602ec041cb1d40e9078191c0f1cde4e95` / merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI SFIA Studio PR run **#31875337665** SUCCESS · post-merge CI run **#31875621317** SUCCESS · post-merge handoff `0121e184c936f8dc73ffe80e20d43027fec495d7` · blob `4c293ae07a0d516b16d6dd2d4087d3e25858e275` · GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · User wording **« ok go pour la modification »** · governed interpretation **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY — KEEP M5 CLOSED — KEEP M5-C — NO UX DESIGN EXECUTION YET — NO FIGMA ACTION YET — NO UI DELIVERY — NO M6 — ZERO REAL — NO PROJECT GIT WRITE** · **M5 closure / Pre-M6 sequencing Roadmap :** PR #353 / title `docs(sfia-studio): close M5 and sequence Pre-M6 UX baseline` / base `3467ecdf74ac2010c45f34545fb8684563dea547` / head `7a744c8cec889be547eebe231279620189819dd0` / merge `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` — records M5 closure + inserts Pre-M6 before M6 · **≠** Slice A candidate (Slice A is later local work) · PRE-M6 USER JOURNEY / UX BASELINE = **FUNCTIONAL BASELINE + GAP READINESS COMPLETE · G-UX-15 EXIT PROOF ACCEPTED / TECHNICAL BLOCKER CLOSED · LOCAL CANDIDATE NOT YET ON MAIN · FIGMA/UI DELIVERY NOT AUTHORIZED** · **G-UX-15 Slice A controlled integration :** PR #354 / title `feat(sfia-studio): close Pre-M6 G-UX-15 execution wiring gap` / base `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` / head `22ae8e5e4bddb0f997384a5e8ba87c9b35245693` / merge `a6df83a640afeb0911cb572d118d27a03c9923a7` · CI SFIA Studio **#192** SUCCESS · post-merge main CI **#193** SUCCESS · post-merge truth **PASS** (exact 5-file SHAs on main) · feature branch **PRESERVED** (no delete) · **Cycle 14 docs sync :** PR #355 / title `docs(sfia-studio): sync Pre-M6 G-UX-15 post-merge current state` / merge `dd284e9f20de89b2c8fc7782e4177d0d125c24d2` — **MERGED ON MAIN** · **historique :** OPEN / DRAFT avant merge · **Cycle 15 visual adoption docs integration :** PR #356 / title `docs(sfia-studio): record Pre-M6 visual contract adoption` / head `3a93d0e5cfd86e46bb795ce22c0f7dd79078ef2a` / merge `50f31994b0d9b5a3a3514e2fa9a063d688071c50` — **MERGED ON MAIN** · CI SFIA Studio **#198** SUCCESS on final PR head · post-merge main CI **#199** SUCCESS · post-merge truth **PASS** · source branch **PRESERVED** (NO BRANCH DELETE) · **historique :** OPEN / DRAFT avant merge · **D-PRE-M6-UX-05 :** ADOPTED AS PRE-M6 VISUAL REFERENCE ON MAIN (Freeze `uUdLBElF2B4dOefaAYt4QY`) — UI Delivery still **NOT AUTHORIZED** · **Cycle 14 PR #356 post-merge current-state sync :** PR #357 / title `docs(sfia-studio): sync PR 356 post-merge current state` / head `70643624c494f16fb91e3bede772a80f4eece783` / merge `b834fdd40d3e7028e80cf7b388b93df2f31e18e4` — **MERGED ON MAIN** · CI SFIA Studio **#200** SUCCESS on PR head · post-merge CI **#201** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · **PRE-M6 UI DELIVERY GATE / SCOPE QUALIFICATION :** **COMPLETE** — Review Handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` — verdict READY FOR MORRIS DELIVERY DECISION (**≠** UI Delivery authorized) — OPTION A = RECOMMENDATION AWAITING MORRIS DECISION *(historique qualification)* · **Cycle 15 Pre-M6 UI gap + CKC trajectory Roadmap :** PR #358 / title `docs(sfia-studio): record Pre-M6 UI gap and CKC trajectory` / head `c91ce1afd498ef9a5275e3b90509e7a045f240a0` / merge `0a80b92cb2c05f5b3f001438988b52c07c3bf0b6` — **MERGED ON MAIN** · CI SFIA Studio **#202** SUCCESS on PR head · post-merge CI **#203** SUCCESS · source branch **PRESERVED** · **historique :** OPEN / DRAFT avant merge · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** (user « bon ok go option A ») — OPTION A = **ADOPTED BY MORRIS AS PRE-M6 UI DELIVERY SCOPE** · OPTION A SCOPE ADOPTED **≠** UI DELIVERY EXECUTION AUTHORIZED · NEXT PRODUCT GATE *(historique jusqu’à PR #361)* = **MORRIS PRE-M6 UI DELIVERY EXECUTION AUTHORIZATION — OPTION A** · **PR #359** Option A adoption sync **MERGED** (`0d33478…`) · **PR #360** fake-real progressive proof **MERGED** (`a3ac418…`) · **PRE-M6 PRODUCT VERTICAL SLICE :** PR #361 / title `feat(sfia-studio): consolidate Pre-M6 product vertical slice` / head `3c4c478d7664c6111f38e6c4f49e98042e3a8473` / merge `a53c323e47e5fae1d35671f3ae232609a59b0f3f` — **MERGED ON MAIN** · post-merge CI run **`32122892559` SUCCESS** · source branch `delivery/sfia-studio-pre-m6-ui-option-a` **PRESERVED** · GO Morris **PR #361 READY + MERGE — PRESERVE SOURCE BRANCH — THEN POST-MERGE VALIDATION** · **MORRIS DECISION — CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE FOR THE PRODUCT COMPLETION TRAJECTORY — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED** · **MORRIS DECISION — ACCEPT PRE-M6 EXIT FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT — CURRENT MAIN VERTICAL SLICE IS THE SFIA STUDIO FUNCTIONAL MVP BASELINE FOR PRODUCT COMPLETION — CARRY UAT-UX-06 / UAT-RECOVERY-03 / V3-F10 / PROCESS-LOCAL DURABILITY / N7 AS GOVERNED DEBT — RUNTIME V3 REMAINS NON ADOPTED** · PRE-M6 EXIT = **ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT** · PRE-M6 **≠ COMPLETE WITHOUT RESERVES** · NEXT PRODUCT GATE = **GO MORRIS — CYCLE 1 CADRAGE — SFIA STUDIO PRODUCT COMPLETION FROM MVP** (consumable only after this documentation is integrated on main · **NOT AUTHORIZED now**) · NEXT REPOSITORY GATE = **MORRIS REVIEW — PRODUCT COMPLETION REBASELINE DRAFT PR — NO MERGE UNTIL EXPLICIT GO** |
 | **Sources** | Git `main` @ `a53c323e47e5fae1d35671f3ae232609a59b0f3f` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347/#348/#349/#350/#351/#352/#353/#354/#355/#356/#357/#358/#359/#360/#361 · CI #158/#162/#166/#172/#176/#178/#184/#185/#186/#187/#192/#193/#197/#198/#199/#200/#201/#202/#203 · Pre-M6 UI Delivery qualification handoff `2577776360c8a5a3492806b447d4bf88f0239898` / blob `9084a97b368472aaaa7ab61f85baf2efcb819e51` · GO Morris **ADOPT PRE-M6 UI DELIVERY SCOPE OPTION A** · PR #352 CI run #31875337665 / post-merge #31875621317 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · D-PRE-M6-UX-05 visual review handoff `69106c82024158889f77e9d31508a222ea5f3a0f` / blob `3593ddbdc286cd244790f0ca1d2c421128202c5c` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · GO Morris **VALIDATE D-PRE-M6-UX-05 FIGMA VISUAL CONTRACT — ADOPT AS PRE-M6 VISUAL REFERENCE** · M4 Product path on main `projects/sfia-studio/app/**` |
 | **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · M5 CLOSED **≠** M6 AUTHORIZED · M5 CLOSED **≠** M6 STARTED · M5 CLOSED **≠** runtime v3 ADOPTED · M5 CLOSED **≠** global v3 baseline promoted · M5 CLOSED **≠** M5-C retired · M5 exit accepted **≠** global Cursor REAL authorization · M5 CLOSED future **≠** M6 automatically authorized · Pre-M6 trajectory decided **≠** Pre-M6 UX qualification executed · **D-PRE-M6-UX-05 ADOPTED AS PRE-M6 VISUAL REFERENCE ≠ UI Delivery authorized ≠ runtime implemented ≠ browser/product E2E proven ≠ Figma/runtime aligned ≠ WCAG compliant ≠ Pre-M6 complete ≠ historical UI retired** · Accepted M-03/M-04/provenance reserves ≠ reserves closed · new UX baseline **≠** runtime rewrite · existing UI not canonical **≠** existing UI automatically deleted · UI asset audit **COMPLETE/CLASSIFIED** **≠** individual dispositions ADOPTED · existing UI audit **≠** REPLACE/retirement authorized · M1→M5 runtime KEEP **≠** all runtime complete · Pre-M6 user proof **≠** runtime v3 ADOPTED · M6 after Pre-M6 **≠** M6 automatically authorized · Validated UX decisions in framing **30/37** (CC-D01) prevail over older candidate wording in framing **11** · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable · G-UX-15 technical blocker **CLOSED BY MORRIS** ≠ Pre-M6 complete · G-UX-15 exit proof accepted ≠ browser/product E2E proven · fixture-safe proof accepted ≠ REAL proof · G-UX-15 Slice A **MERGED ON MAIN** (PR #354) ≠ Pre-M6 complete · merged on main ≠ product/browser E2E proven · merged on main ≠ UI Delivery/M6 authorized · Pre-M6 progress ≠ M6 authorized · Confirmation process-local = KEEP RESERVE *(HISTORICAL Pre-M6 / G-UX-15)* · **SUPERSEDED for Confirmation by W1 selective durability** · **≠** restart-safe Confirmation as full envelope · **PR #356 MERGED ≠ UI Delivery authorized** · CI #197/#198/#199 SUCCESS ≠ Pre-M6 complete ≠ UI Delivery authorized · post-merge truth PASS ≠ UI Delivery gate consumed · UI Delivery qualification COMPLETE ≠ UI Delivery authorized · **Option A SCOPE ADOPTED BY MORRIS ≠ UI Delivery execution authorized** · gap treatment adopted as scope ≠ gap closed · G-UX-08 deferred ≠ G-UX-08 closed · G-UX-09 accepted ≠ Conversation durable · Confirmation KEEP *(historical Pre-M6)* ≠ restart-safe · G-UX-11 planned ≠ browser E2E proven · M7 CKC 15/15 future ≠ CKC complete now ≠ CKC Delivery authorized · 4 pilots + 11 fallback ≠ CKC system complete · CKC→v2.6 capitalization option ≠ v2.6 modification decided · CKC validation future ≠ runtime v3 ADOPTED · PR #357 MERGED ≠ UI Delivery authorized · CI #201 SUCCESS ≠ Pre-M6 complete · PR #358 MERGED ≠ UI Delivery authorized · CI #202/#203 SUCCESS ≠ Pre-M6 complete ≠ Delivery authorized · Option A scope adopted ≠ Delivery GO consumed · Execution Authorization IS the Delivery GO ≠ second Delivery GO required · G-UX-11 E2E exit proof ≠ Delivery entry prerequisite · global v3 baseline **NOT PROMOTED** · **PR #361 MERGED ≠ PRE-M6 COMPLETE ≠ PRE-M6 EXIT ACCEPTED ≠ runtime v3 ADOPTED ≠ M6 AUTHORIZED ≠ M7 AUTHORIZED ≠ CKC 15/15 COMPLETE ≠ generic Cursor write/dev/commit/push/PR proven** · **MVP FUNCTIONAL BASELINE ≠ produit final ≠ UX finale ≠ production-ready ≠ generic ExecutionContract complete** · Product Completion trajectory recorded **≠** Cycle 1 Cadrage authorized **≠** Delivery authorized · PRE-M6 requalification **≠** PRE-M6 CLOSED · **PRE-M6 EXIT ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT ≠ PRE-M6 COMPLETE ≠ PRE-M6 all gaps closed ≠ runtime v3 ADOPTED ≠ M6 STARTED ≠ M6 AUTHORIZED ≠ Product Completion Delivery authorized ≠ Cycle 1 Cadrage authorized** |
@@ -135,9 +136,9 @@ Fondations V3-F01…F15 = couverture doctrine progressive (B9).
 | Product Completion Product Screens & Visual State Contract | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · `projects/sfia-studio/product-completion/ux-product-experience/03-product-screens-visual-state-contract.md` · PR #376 / head `6e2cd066…` / merge `7d2f9a61…` · PR CI **#236 SUCCESS** · post-merge CI **#237 SUCCESS** · Penpot `63bdc57a…` page 03 · 17 screens · page 04 = 0 · Components 0 · C1 alignment PASS · PASS 3 PASS WITH ONE NON-BLOCKING EVIDENCE-FRAMING RESERVE · UX-BLK-01/02/03 CLOSED · H-01…H-04 **CARRY** · source branch cleanup **COMPLETED** · **≠** Components · **≠** Delivery |
 | Product Completion Functional Architecture (Cycle 3) | **VALIDATED BY MORRIS — INTEGRATED ON MAIN** · `projects/sfia-studio/product-completion/03-product-completion-architecture-fonctionnelle.md` · PR #378 / head `1018aa79…` / merge `18b89ec9…` · PR CI **#240 SUCCESS** · post-merge CI **#241 SUCCESS** · post-merge sync PR **#379** / head `0aa644d…` / merge `134f4105…` · PR CI **#242 SUCCESS** · post-merge CI **#243 SUCCESS** · final closure PR **#380** / head `53aeceea…` / merge `14329c60…` · post-merge CI **#245 SUCCESS** · **POST-MERGE COHERENCE COMPLETE** · PM-R01/PM-R02 **CLOSED** · FC-01…FC-15 APPROVED · OA Option A + thin C APPROVED · targeted durability delta QUALIFIED then **W1-realized for Confirmation + ProjectTrajectory** · FA-R01…FA-R12 CLOSED · **RESERVE-GOV-EC-ORDER CLOSED** · downstream HD/replan / Phase B / Recovery E2E remain · **≠** Product Completion terminée · **≠** Delivery W2+ |
 | COMPLETED / INTEGRATED | **C1 CADRAGE** · **C2 FUNCTIONAL DESIGN** · **UX EXPERIENCE ARCHITECTURE** · **E2E WIREFRAMES & INTERACTION MODEL** · **PRODUCT SCREENS & VISUAL STATE CONTRACT** · **FUNCTIONAL ARCHITECTURE (Cycle 3)** · post-merge sync PR **#379** · final closure PR **#380** · PR #369 / `2406ccda…` · PR #370 post-merge sync **HISTORICAL / MERGED** · PR #372 / `fb311f2f…` · PR #373 / `6b67ada7…` · PR #374 / `404d2d3e…` · PR #375 post-merge sync · PR #376 / `7d2f9a61…` · PR #378 / `18b89ec9…` · PR #379 / `134f4105…` · PR #380 / `14329c60…` |
-| CURRENT REPOSITORY TRANSITION | **W3-B targeted architecture INTEGRATED ON MAIN** via PR **#410** (`bcc39fba…`) · post-merge DOC12 + Roadmap truth **represented in merge-stable form** · repository integration status **RESOLVE FROM GIT / PR EVIDENCE** · **no Delivery restart** · FinOps/T7 **FREEZE** · REAL **OUT** · W4 **OUT** · Product Completion **INCOMPLETE** · W3 **IN PROGRESS / NOT CLOSED** |
-| NEXT ORDERED STEP | Resolve current main / Git evidence · **IF** this post-merge truth state is not yet integrated on current main: complete its governed repository integration under the applicable Morris gate · **ONCE** this truth state is present on current main: perform **W3-B Delivery requalification** → distinct Morris Delivery restart decision if qualified · **≠** W3-B Delivery automatic · **≠** W3 closure · **≠** W3-C start · **≠** REAL GO · **≠** runtime v3 ADOPTED |
-| NEXT PRODUCT CAPABILITY | **W3-B** — terminal semantics Product (SUCCESS/STOP/FAIL) + Evidence business-first (US-P1-05 / US-P1-06) — **CURRENT / IN PROGRESS / NOT CLOSED** · W3-B Delivery **NOT RESTARTED / REQUALIFICATION REQUIRED** · W3 macro **NOT CLOSED** · REAL **OUT** · runtime v3 **NON ADOPTED** |
+| CURRENT REPOSITORY TRANSITION | **TD-W3B-02 Option B architecture clarification** (Cycle 6 DOC) · W3-B Delivery reviewed candidate **`756cda50`** · structural blocker **closed at architecture level** · **implementation pending** · FinOps/T7 **FREEZE** · REAL **OUT** · W4 **OUT** · Product Completion **INCOMPLETE** · W3 **IN PROGRESS / NOT CLOSED** |
+| NEXT ORDERED STEP | **TD-W3B-02 clarification review/integration** (ChatGPT) → **resume same W3-B Delivery candidate correction** (persist bound snapshot · evaluate Contract Result from snapshot only · re-prove X-W3B-01…12) → later W3-B closure gate → downstream W3 only · **≠** W3-B automatic closure · **≠** W3-C start · **≠** REAL GO · **≠** runtime v3 ADOPTED |
+| NEXT PRODUCT CAPABILITY | **W3-B** — terminal semantics Product (SUCCESS/STOP/FAIL) + Evidence business-first (US-P1-05 / US-P1-06) — **CURRENT / IN PROGRESS / NOT CLOSED** · TD-W3B-02 Option B **ADOPTED** · Delivery correction **pending after clarification review** · W3 macro **NOT CLOSED** · REAL **OUT** · runtime v3 **NON ADOPTED** |
 | M6 / M7 | **HISTORICAL MILESTONES — SUPERSEDED / ABSORBED BY PRODUCT COMPLETION** · traces conservées · hors forward critical path |

 ### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`) — historique / harvest
diff --git a/projects/sfia-studio/product-completion/12-product-completion-w3-b-targeted-technical-architecture-addendum.md b/projects/sfia-studio/product-completion/12-product-completion-w3-b-targeted-technical-architecture-addendum.md
index 380e4175..cecf9ae2 100644
--- a/projects/sfia-studio/product-completion/12-product-completion-w3-b-targeted-technical-architecture-addendum.md
+++ b/projects/sfia-studio/product-completion/12-product-completion-w3-b-targeted-technical-architecture-addendum.md
@@ -297,7 +297,7 @@ FC-11 Product SUCCESS requires **`status=pass`** on a contract-result ClaimEvalu
 `ClaimEvaluation.status = pass` may be written **server-side only** when **ALL** hold:

 1. Attempt technical state is compatible for SUCCESS evaluation (technical succeeded / terminal success path — architecture does not weaken C2).
-2. EC id / version / semanticFingerprint match **exactly** the Attempt’s bound contract material.
+2. EC id / version / semanticFingerprint match **exactly** the Attempt’s bound contract material (**bound semantic snapshot per TD-W3B-02 Option B — §4.10.2**).
 3. Bound ReviewBundle is the **expected frozen** version.
 4. All required Evidence are valid per FC-12 rules applicable to this assessment.
 5. **Every mandatory** expected-output assessment is **PASS**.
@@ -402,6 +402,150 @@ No large EO/ER DSL. EC expectation **strings** remain the expectation source for

 ---

+## 4.10.1 TD-W3B-02 — Current-model contradiction (Delivery-evidenced)
+
+W3-B Delivery Pass 2 review (`756cda50` local candidate above reviewed checkpoint `0b1e50a5`) exposed a **structural contradiction** between TD-W3B-02 and the current ExecutionContract version model. This section records the contradiction faithfully. **Do not weaken it.**
+
+### Repository facts (read-only evidence on current main)
+
+| Fact | Source |
+| --- | --- |
+| `ExecutionContract.version` increments on lifecycle/OCC transitions (validate, confirm, cancel, terminal record paths) | T-A5 execution-contract application layer |
+| `ExecutionContract.semanticFingerprint` is computed from execution-significant material via `executionContractSemanticMaterial()` and **excludes** `status` and `version` | `semanticFingerprint.ts` |
+| `ExecutionAttempt` binds `executionContractVersion` at accept/select | W3-A select/accept seam |
+| Repository exposes **current** EC lookup only — **no** `findByIdAndVersion` / EC history store | execution-contract repository ports |
+| Attempt durable persistence is Product SQLite `oa_execution_attempts.payload_json` | `sqliteExecutionAttemptRepository.ts` |
+
+### Contradiction
+
+1. Attempt binds EC `@vN` at acceptance.
+2. After acceptance, lifecycle operations may advance **current** `ExecutionContract.version` to `@vN+k` **without** changing `semanticFingerprint`.
+3. TD-W3B-02 requires Contract Result assessment against the **exact bound EC-version material**, not merely “same fingerprint on latest row”.
+4. Therefore: **Attempt bound to EC@vN + latest EC@vN+k with same fingerprint DOES NOT satisfy TD-W3B-02** if assessment reads latest EC payload as substitute material.
+5. **Forbidden workaround:** latest-EC cross-version matching, fingerprint-gated substitution, sync-forward of Attempt version, or tolerance of lifecycle drift for semantic material resolution.
+
+Pass 2 Delivery temporarily used fingerprint-gated latest-EC reads. Architecture review classifies that as **forbidden cross-version matching** under TD-W3B-02. **Morris Option B** closes the blocker without reopening C6 or inventing EC history.
+
+---
+
+## 4.10.2 TD-W3B-02 — Morris Option B: Bound ExecutionContract Semantic Snapshot
+
+**Status:** **ADOPTED BY MORRIS — 2026-08-24 — targeted clarification (Cycle 6 DOC)**
+
+**Morris decision (exact):** At Attempt binding/acceptance, capture an **immutable canonical snapshot** of bound ExecutionContract semantic material using the **existing** `executionContractSemanticMaterial()` representation, plus bound EC version and semantic fingerprint, persisted in the **existing** Attempt Product SQLite payload only. ExecutionContract remains the single **current** lifecycle SoT. The snapshot is historical binding evidence — **not** a second EC. **No** latest-EC cross-version matching. **No** auto-migration. **No** EC history repository. **No** semantic-version redesign.
+
+### Options considered (binding-material resolution)
+
+| Option | Summary | Decision |
+| --- | --- | --- |
+| **A** | Separate OCC revision from semantic contract version globally | **Not selected now** — broader EC model change; impacts W2 inspection/version semantics; wider migration blast radius; unnecessary on current W3 critical path. **Not permanently rejected** — possible future refactor if broader EC-version requirement appears. |
+| **B** | Attempt-bound immutable canonical semantic snapshot at accept | **ADOPTED** — local FC-10 ownership; no second EC lifecycle; reuses existing helper + Product SQLite Attempt payload; no new store/table/repository; supports exact restart/recovery; W1/W2/W3-A transparent; W4 transparent. |
+| **C** | Historical ExecutionContract repository / `findByIdAndVersion` | **Not selected** — new persistence/history capability; new repository breadth; larger C6/architecture impact; solves more than W3 needs. |
+
+### Canonical snapshot contract (conceptual shape)
+
+```text
+ExecutionAttempt.boundExecutionContract:
+  executionContractSchemaVersion   # schema of semanticMaterial payload
+  executionContractVersion         # exact version at acceptance
+  semanticFingerprint              # exact fingerprint at acceptance
+  semanticMaterial                 # executionContractSemanticMaterial(contract) at acceptance
+```
+
+**Rules:**
+
+| Rule | Requirement |
+| --- | --- |
+| Material producer | **MUST** use existing `executionContractSemanticMaterial(contract)` — **not** a W3-B-specific subset |
+| Canonical representation | `ExecutionContractSemanticMaterial` is the execution-significant representation; excludes lifecycle (`status`, current OCC `version`, volatile provenance) while retaining execution-significant fields |
+| Capture point | Once at Attempt acceptance/binding (existing W3-A Select/accepted seam) |
+| Mutability | **Never** edited after capture; lifecycle writes **MUST NOT** mutate snapshot |
+| Second aggregate | Snapshot is **not** a second ExecutionContract; **not** promoted to current EC; **not** a repository/catalog |
+
+### Ownership / SoT matrix
+
+| Aggregate | Role |
+| --- | --- |
+| **ExecutionContract** | Sole mutable/current lifecycle SoT before and through execution lifecycle |
+| **Bound snapshot on Attempt** | Immutable historical binding evidence; exact material for Contract Result assessment |
+| **ClaimEvaluation** | Consumes bound snapshot (+ frozen RB + Evidence) for Contract Result assessment |
+| **FC-11** | Consumes CE + Attempt/Evidence truth; **never** evaluates latest EC heuristically |
+| **FC-12** | Does **not** own EC lifecycle |
+
+### Binding / cross-version semantics (TD-W3B-02 unchanged core + Option B material source)
+
+For an Attempt:
+
+| Binding element | Rule |
+| --- | --- |
+| `executionContractVersion` | Exact version at acceptance — **immutable** |
+| `semanticFingerprint` | Exact fingerprint at acceptance — **immutable** |
+| EO/ER item identity | `(bound semanticFingerprint, kind ∈ {EO, ER}, ordinal)` |
+| Assessment material source | **Bound snapshot only** — not latest EC row |
+| Latest EC substitution | **Forbidden** |
+| Version drift tolerance | **Forbidden** |
+| Cross-version semantic recognition | **Forbidden** |
+| Auto-migration | **Forbidden** |
+
+**Lifecycle OCC bump vs bound material:** A later lifecycle/OCC version bump on the **current** ExecutionContract **does not** mutate or migrate the Attempt's binding or snapshot.
+
+**Prior Attempt vs successor/amended EC:** A materially amended or superseding EC has its own material/fingerprint. It **does not** invalidate the historical truth of a completed prior Attempt. Prior CE remains valid **only** for its prior Attempt/bound snapshot. Prior CE **MUST NOT** satisfy a successor EC or a new Attempt.
+
+### Self-consistency / corruption rules (future Delivery)
+
+Future Delivery **MUST** fail-closed when snapshot integrity cannot be verified. Minimum checks:
+
+1. Snapshot EC id matches Attempt `executionContractId`.
+2. Snapshot bound version matches Attempt `executionContractVersion`.
+3. Recomputed fingerprint from snapshot `semanticMaterial` equals stored bound `semanticFingerprint`.
+4. Required identity/project/cycle relationships are coherent.
+
+**Forbidden on corruption/missing snapshot:** reconstruction from latest EC; fake historical EC object; auto-migration.
+
+### Historical Attempts (no backfill)
+
+| Case | Rule |
+| --- | --- |
+| Attempt **without** bound semantic snapshot | Remains readable; **MUST NOT** obtain Product SUCCESS via latest-EC reconstruction |
+| Contract Result for such Attempts | NOT_PROVEN / UNCLAIMED fail-closed per existing FC-11 contract |
+| Backfill / fake snapshot | **Forbidden** in this architecture cycle |
+| Migration redesign | **Out of scope** |
+
+### Persistence direction
+
+| Decision | Detail |
+| --- | --- |
+| Store | Existing ExecutionAttempt Product SQLite persistence (`payload_json`) |
+| Change class | Domain/payload **additive field** on Attempt aggregate |
+| Forbidden | New database technology; new aggregate repository; EC history table; new persistence engine |
+| SQL schema migration | Future Delivery detail if payload validation/versioning requires it — **no new table** in this architecture cycle |
+| C6 | **CLOSED — not reopened** |
+
+### Architecture parallelism check (Option B creates none of)
+
+- second ExecutionContract aggregate
+- EC-history repository
+- semantic-version subsystem
+- ProductOutcome aggregate
+- second Attempt lifecycle
+- second Claim Engine
+- Stop Engine
+- Evidence pipeline
+- W3-B-specific product route
+- per-cycle snapshot engine
+
+Snapshot is **one immutable value object** inside the existing Attempt aggregate.
+
+### Bounded reserves (R-TD02)
+
+| ID | Reserve | Exit |
+| --- | --- | --- |
+| **R-TD02-01** | Historical Attempts lack bound snapshot | Remain fail-closed; no backfill required for W3-B |
+| **R-TD02-02** | Snapshot duplicates canonical EC semantic material into Attempt payload | Accepted architectural duplication for historical binding; **not** a second mutable SoT |
+| **R-TD02-03** | Future change to `ExecutionContractSemanticMaterial` schema | Versioning responsibility for interpretability — **not** a W3-B blocker; no generalized migration framework now |
+
+---
+
 ## 4.11 ARCH-R06-C — Mode-specific review authority (Contract Result)

 **Problem (repo-validated):** Generic ClaimEvaluation today couples `ClaimCriticality.structural` to Morris runtime authority:
@@ -779,12 +923,17 @@ No invented latency/SLA targets.

 ## 11. Downstream impact

-| Wave | Impact |
+| Wave / domain | Impact |
 | --- | --- |
-| **W3-C** | Consume **same** Evidence/RB + durable **contract-result** assessment · no second Nora path · restart-safe · fail-closed if assessment store down |
-| **W3-D** | Assessment generic · **no** cycleType switch engine |
-| **W3-E** | Same canonical path |
-| **W4** | Presentation only · no UX work here |
+| **W1** | **No reopen.** Continuity/restart truth strengthened by Attempt-bound immutable contract material. |
+| **W2** | **No reopen.** HumanDecision, Trajectory, EC inspection, Confirmation, authority unchanged. Snapshot captured **only after** existing W2 authorization boundary. |
+| **W3-A** | **CLOSED / no reopen.** Capture at existing Select/accepted seam. No new execution engine. |
+| **W3-B** | **Direct TD-W3B-02 blocker closed at architecture level.** Future Delivery must: persist bound snapshot; evaluate Contract Result **only** from it; revalidate Confirm path against it; close remaining Evidence freshness reserves; rerun X-W3B-01…12. **≠ W3-B closed.** |
+| **W3-C/D/E** | No scope moved into W3-B. Snapshot provides stable historical contract context for Evidence→Nora/replan/recovery. Catalog evolvability remains downstream W3. |
+| **CKC** | No authority impact. `doctrinePackageRef` inside existing semantic material preserves provenance only. |
+| **W4** | No new Product concept/surface. Internal snapshot supports S7 History / S8 Recovery / S9 Evidence / S10 EC / S12 Attempt honesty. W4 remains Product Experience closure only. |
+| **REAL** | No gate impact. Same snapshot must serve deterministic and future REAL execution. REAL remains OUT. |
+| **runtime v3** | No promotion. NON ADOPTED. |

 ### Backlog note (no mutation this cycle)

@@ -797,7 +946,7 @@ Post-merge DOC12 + Roadmap truth state is represented in this Cycle 14 documenta
 | ID | Decision | Status |
 | --- | --- | --- |
 | **TD-W3B-01** | Contract-result assessment = adapted ClaimEvaluation + explicit **contract-result subject/mode** + structured EO/ER assessments + **`ClaimEvaluation.status` canonical durable verdict** + **`contractResultVerdict` server-derived projection only** + **explicit mode-specific confirmation authority (no automatic legacy structural→Morris in Contract Result mode)** + Product SQLite durability; generic ClaimEvaluation unchanged outside Contract Result mode (Option A) | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24** |
-| **TD-W3B-02** | EO/ER identity = deterministic immutable EC-version item identity `(semanticFingerprint, kind∈{EO,ER}, ordinal)` + explicit EC/Attempt/RB/Evidence bindings · **no** cross-version semantic matching · no auto-migrate | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24** |
+| **TD-W3B-02** | EO/ER identity = deterministic immutable EC-version item identity `(semanticFingerprint, kind∈{EO,ER}, ordinal)` + explicit EC/Attempt/RB/Evidence bindings · **no** cross-version semantic matching · no auto-migrate · **bound semantic material = Attempt snapshot via Morris Option B** (`executionContractSemanticMaterial()` + version + fingerprint at accept · existing Attempt Product SQLite payload) | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24 · Option B clarification ADOPTED — 2026-08-24** |
 | **TD-W3B-03** | SYSTEM_GOVERNED_STOP = separate FC-10 use case on same Attempt lifecycle for **post-running / proven execution-frontier** runtime guards · human Cancel distinct · pre-running block ≠ terminal STOP · adapter cancel ACK safety reused | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24** |
 | **TD-W3B-04** | Runtime guard STOP provenance = **mandatory durable server-owned** stop provenance on Attempt substrate · U2/U2b harvest as reconciliation/guard source · **no** Guard aggregate · **no** Stop Engine | **VALIDATED / ADOPTED BY MORRIS — 2026-08-24** |

@@ -807,19 +956,22 @@ Post-merge DOC12 + Roadmap truth state is represented in this Cycle 14 documenta
 | --- | --- |
 | **Date** | 2026-08-24 |
 | **Authority** | Morris — SFIA Studio construction / architecture governance |
-| **Decision** | TD-W3B-01…04 **VALIDATED / ADOPTED** for W3-B |
-| **Basis** | ARCH-R01…ARCH-R06 closed for architecture review · ChatGPT architecture re-review PASS · Option A REVIEW-CLEAN · Option S2 REVIEW-CLEAN · C6 remains CLOSED · no parallel Claim Engine · no Stop Engine · Product SQLite KEEP · generic ClaimEvaluation semantics outside Contract Result mode KEEP |
-| **Anti-effects** | Adoption architecture ≠ merge PR #410 · ≠ Delivery restart · ≠ W3-B completion · ≠ W3 completion · ≠ Product Completion completion · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED |
+| **Decision** | TD-W3B-01…04 **VALIDATED / ADOPTED** for W3-B · **TD-W3B-02 Option B (bound snapshot) ADOPTED — 2026-08-24** |
+| **Basis** | ARCH-R01…ARCH-R06 closed for architecture review · ChatGPT architecture re-review PASS · Option A REVIEW-CLEAN · Option S2 REVIEW-CLEAN · C6 remains CLOSED · no parallel Claim Engine · no Stop Engine · Product SQLite KEEP · generic ClaimEvaluation semantics outside Contract Result mode KEEP · W3-B Delivery Pass 2 exposed TD-W3B-02 current-model contradiction · vertical C1→W4 review |
+| **Option B trace** | Attempt captures immutable `boundExecutionContract` at accept using existing `executionContractSemanticMaterial()` · no EC history repo · no latest-EC substitution |
+| **Anti-effects** | Adoption architecture ≠ merge PR #410 · ≠ Delivery implementation in DOC cycle · ≠ W3-B completion · ≠ W3 completion · ≠ Product Completion completion · ≠ READY FOR REAL · ≠ runtime v3 ADOPTED |

 ---

 ## 13. Migration / backfill (candidate only)

 - New DBs: **NONE**
+- New EC history tables: **NONE** (Option B — Attempt payload only)
 - Historical ClaimEvaluations: may be **irrecoverable**
 - Historical Attempts without assessment: **NOT_PROVEN**
+- Historical Attempts **without bound semantic snapshot**: readable · Contract Result fail-closed · **no** latest-EC reconstruction · **no** fake snapshot · **no backfill** (R-TD02-01)
 - Historical cancelled without trustworthy system provenance: **do not** reclassify as SYSTEM_GOVERNED_STOP
-- Forward writes only after later Delivery GO
+- Forward snapshot capture only after later Delivery GO + architecture clarification review-clean
 - **No migration executed** in this architecture cycle

 ---
@@ -896,7 +1048,8 @@ Post-merge DOC12 + Roadmap truth state is represented in this Cycle 14 documenta
 3. **Contract Result review policy reference shape** — remains a bounded Delivery detail to confirm/implement within the adopted architecture (minimal server-owned policy — not broad authority DSL).
 4. **Git integration** — **CLOSED** — PR **#410 MERGED** — `bcc39fba04664edc09fca782e61e5f5e70a45d35`.
 5. **Post-merge documentary truth** — represented in merge-stable form in this document and the living Roadmap · repository transport/integration status **RESOLVE FROM GIT / PR EVIDENCE** · no product/Delivery authority follows from transport status alone.
-6. **Delivery** — **NOT** restarted · remains subject to W3-B Delivery requalification against current main · restart requires distinct Morris authorization if qualification passes · integration of this documentation alone never authorizes restart.
+6. **Delivery** — W3-B Delivery **restarted under Morris** and produced reviewed local candidate `756cda50` (Pass 2 above `0b1e50a5`) · review exposed TD-W3B-02 structural blocker · **Morris Option B now ADOPTED** in §4.10.2 · **architecture clarification must be review-clean before continuing same W3-B Delivery candidate correction** · this DOC cycle **does not** implement snapshot · **does not** close W3-B.
+7. **TD-W3B-02 architecture blocker** — **CLOSED at architecture-decision level** via Option B · **implementation + X-W3B-01…12 re-proof still required** in Delivery.

 ~~Prior open question on accepted→cancelled system STOP as Product STOP~~ — **resolved by ARCH-R03**. No C2/FA rewrite.

@@ -904,6 +1057,6 @@ Post-merge DOC12 + Roadmap truth state is represented in this Cycle 14 documenta

 ## 17. Final architecture verdict (this document)

-**W3-B TARGETED TECHNICAL ARCHITECTURE ADDENDUM — ARCH-R01…ARCH-R06 REVIEW-CLEAN — TD-W3B-01…04 VALIDATED / ADOPTED BY MORRIS — INTEGRATED ON MAIN via PR #410 / `bcc39fba04664edc09fca782e61e5f5e70a45d35`**
+**W3-B TARGETED TECHNICAL ARCHITECTURE ADDENDUM — ARCH-R01…ARCH-R06 REVIEW-CLEAN — TD-W3B-01…04 VALIDATED / ADOPTED BY MORRIS — TD-W3B-02 OPTION B CLARIFICATION ADOPTED — INTEGRATED ON MAIN via PR #410 / `bcc39fba04664edc09fca782e61e5f5e70a45d35`**

-Architecture adopted and integrated on main · post-merge documentary truth represented in merge-stable form · repository integration status resolved from Git/PR evidence · W3-B Delivery not restarted · W3-B remains incomplete pending implementation/proof · C6 remains CLOSED · runtime v3 NON ADOPTED.
+Architecture adopted on main · TD-W3B-02 bound-material contradiction closed by Morris Option B at documentation level · W3-B **NOT CLOSED** · Delivery implementation/re-proof pending after clarification review · C6 remains CLOSED · REAL OUT · runtime v3 NON ADOPTED.
```
