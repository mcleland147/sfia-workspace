# 07 — Authority Invariants & Failure Modes

**As-implemented @ `b4aa09bdef29a635e624bb5c396711e75057df4d`** (baseline documentaire historique)

**Amendement documentaire D-P6-SHE-01 (requalifié AKG-M3 G6 — 2026-10-21) :** SINGLE HUMAN EXECUTE / Option A est **CURRENT ON MAIN** — Product integrated via **PR #590** merge `c9abdbc3` (ancestor of main tip `c2b3d00c…`). DETERMINISTIC at tested scope. Les invariants SHE ci-dessous restent CURRENT. Les invariants « STRUCTURAL PREPARE requires HD » restent **HISTORICAL / disposition-before-PREPARE** (chemin encore disponible) — ils ne bloquent plus l’inspectable PREPARE sous SHE. Prior wording « CURRENT on Delivery / PR DRAFT pending merge / NOT INTEGRATED ON MAIN » is **HISTORICAL**. ≠ REAL/HQA PROVEN · ≠ P6 GLOBAL PASS · runtime v3 NON ADOPTED.

## Overlay — PR #618 effect-based confinement + write-mode without Product Binding (CURRENT ON MAIN — PR #618 MERGED — DET scope — 2026-10-26)

| ID | Statement | Status |
|---|---|---|
| INV-CONFINE-BY-EFFECT | Mutating Cursor child env follows authorized effects / sealed slice — **not** `isDocsWrite` | **CURRENT ON MAIN** · **DETERMINISTIC AT TESTED SCOPE** · **≠** REAL |
| INV-WRITE-MODE-NO-BINDING | CREATE/UPDATE/ASK for automatic `projects/<key>` uses sealed env probe identity + managed base — **not** `Project.repositoryBinding` | **CURRENT ON MAIN** · **DETERMINISTIC AT TESTED SCOPE** (PWR routing) · **≠** REAL |
| INV-NO-RESTORE-DOCS-WRITE | docs_write Product admission remains **RETIRED** on main | **CURRENT ON MAIN** |

## Invariant catalog — CURRENT IMPLEMENTED

| ID | Statement | Enforcing code (examples) | Tests | Epistemic |
|---|---|---|---|---|
| INV-REC-NE-HD | Recommendation ≠ HumanDecision | presentation labels; decision services | recommendation-vs-decision tests | CURRENT IMPLEMENTED |
| INV-HD-NE-CONF | HumanDecision ≠ Confirmation | OA decision vs confirmation aggregates | domain tests | CURRENT IMPLEMENTED |
| INV-CAP-NE-AUTH | Capability ≠ Authority | EC/authority receipts | execution-contract tests | CURRENT IMPLEMENTED |
| INV-PROJ-NE-CYCLE | Project ≠ CycleInstance | cycle create/link | cycle tests | CURRENT IMPLEMENTED |
| INV-MEMB-NE-TRUTHC | Memory B ≠ Truth C | sessionPaths vs product DB | continuity actions | CURRENT IMPLEMENTED |
| INV-COG-NE-AUTH | Cognition ≠ Authority | intentAnalysis non-authoritative hints | corrProof07/09 | CURRENT IMPLEMENTED |
| INV-PROP-NE-HD | Proposal ≠ HumanDecision | proposalStore vs recordDecision | F2 tests | CURRENT IMPLEMENTED |
| INV-EC-NO-EXPAND-WHAT | EC cannot expand DecisionBasis WHAT | execution-contract domain | EC tests | CURRENT IMPLEMENTED |
| INV-NO-EXEC-BEFORE-AUTH | No execution before effective authority | REAL gates + EC/attempt | launch safety | CURRENT IMPLEMENTED |
| INV-ARTIFACT-COND | Artifact conditional (applicability) | obligation snapshot + assess | corrProof06 | CURRENT IMPLEMENTED |
| INV-ATTEMPT-NE-PROVEN | Attempt terminal ≠ Product Result PROVEN | claim/result semantics | evidence-review | CURRENT IMPLEMENTED |
| INV-SUCCESS-NE-READY | Technical SUCCESS ≠ READY | result disclosures | journey integrity | CURRENT IMPLEMENTED |
| INV-FAKE-REAL-SM | Fake/Real share product state machine at boundary | provider boundary + server gates | Fake/Real tests | CURRENT IMPLEMENTED |
| INV-PROP-NOT-SOLE-RESTART | Proposal process-local ≠ sole restart authority | proposalStore notice | journey integrity | CURRENT IMPLEMENTED |
| INV-OLD-CYCLE-HD | Old-cycle HD ≠ current-cycle authority | `hasCurrentRequireArtifactObligation` subject scoping | corrProof07 T13/CR05-B | CURRENT IMPLEMENTED |
| INV-UNKNOWN-NE-APPLICABLE | UNKNOWN ≠ APPLICABLE | assessFinalization / bridge gate | bridge CORR-01 T4 | CURRENT IMPLEMENTED |
| INV-NO-SILENT-REPLAN | No silent replan | replan guards | replan tests | CURRENT IMPLEMENTED |
| INV-NO-SILENT-HD | No silent/auto HumanDecision | recordDecision only on Pilot action | bridge T2 | CURRENT IMPLEMENTED |
| INV-NO-V3-ADOPT | No automatic runtime v3 adoption | docs + absence of adoption flags | this corpus | CURRENT IMPLEMENTED |
| INV-APPLICABILITY-NE-AUTHORITY | Artifact APPLICABLE ≠ execution authorized | activeCycleGovernedContinuation bridge | bridge CORR-01 | CURRENT IMPLEMENTED |
| INV-OFFER-NE-AUTH | Pending Generic PREPARE offer ≠ Authorization | pendingGenericPrepareOfferStore + prepare gates | DER16 / M-HD / G-D4 | CURRENT IMPLEMENTED |
| INV-INSPECT-NE-CONFIRM | Inspection ≠ Confirmation | unified exam + confirm services | Pass03/04 UIC | CURRENT IMPLEMENTED |
| INV-CONFIRM-NE-AUTH | Confirmation ≠ Authorization | authorize* services | authorizeGeneric / confirmForAuthorization | CURRENT IMPLEMENTED |
| INV-AUTH-NE-EXEC | Authorization ≠ Execution | governedExecute Select/Start | projectScopedCursorSelection | CURRENT IMPLEMENTED |
| INV-EMPTY-REFS-NE-STRUCTURAL | HISTORICAL: `decisionRefs=[]` only for NON_STRUCTURAL. SHE CURRENT: empty refs also admissible on server-stamped `sheDeferredStructuralAuthority` PREPARE (READ/INSPECT continuity only — GAP-01); Confirm/Authorize still refuse empty STRUCTURAL without HD | Option 1 / G-D4 + SHE continuity | p6.o1 / gD4 / p6.she.* | CURRENT (SHE) + HISTORICAL (G-D4-only) |
| INV-STRUCTURAL-NEEDS-VERIFIED-HD | HISTORICAL disposition-before-PREPARE: verified mission-bound HD before that PREPARE path. SHE CURRENT: verified applicable HD required before **launch** on Exécuter — not before inspectable PREPARE | verifyGenericMissionHumanDecisionForPrepare / SHE Record | mHd01 / DER16 / p6.she.* | HISTORICAL at PREPARE; CURRENT at Execute (SHE) |
| INV-STRUCTURAL-PREPARE-REQUIRES-ACCEPTED-HD | HISTORICAL: STRUCTURAL disposition PREPARE requires accepted HD. SHE CURRENT: inspectable STRUCTURAL PREPARE without prior HD; Accept alone ≠ Execute; Refuse/Amend still refuse disposition-before-PREPARE | verify* / singleHumanExecutePreparedContract | mHd01 / p6.she.* | HISTORICAL at PREPARE; CURRENT SHE deferral |
| INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING | Pathless NON_STRUCTURAL requires **one** positive structured non-mutating claim: `intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}` (plus other Product gates). `unknown`/`write` always refuse. `repositoryMutation` **absent** refuses **only when** `read_only` is also absent — absence alone does not invalidate an admissible `read_only` claim | qualifyBoundedNonMutatingAnalysisMission | toolFirst A–J / safetyClosureR1R2 | CURRENT IMPLEMENTED |
| INV-STAMP-NE-REAL-NOWRITE | Contract `NO_REPOSITORY_MUTATION_*` / bounded analysis stamp ≠ Cursor REAL technical no-write | boundedNonMutatingRealLaunchGate + generalist REAL launch | safetyClosureR1R2 | CURRENT IMPLEMENTED |
| INV-R2-REAL-PATHLESS-BLOCK | Pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **both** Select and Start (distinct effects — see R2 note) | assertBoundedNonMutatingCursorRealAdmissible | safetyClosureR1R2 | CURRENT IMPLEMENTED |
| INV-INSPECT-NE-EXECUTE-CTA | Inspection attestation ≠ Execute; Tool-First Exécuter may fold Confirm server-side after attest only | pilotExecutionPresentation / ExecutionSurface | durable continuity / R02 | CURRENT IMPLEMENTED (partial fold Confirm ; TARGET étend le fold) |

## Dual admission paths — CURRENT (SHE + historical disposition)

**Chemin SHE (CURRENT — D-P6-SHE-01):** STRUCTURAL / HD-required / UNKNOWN → inspectable PREPARE (empty refs allowed with server SHE stamp) → Inspect → Pilot Exécuter → applicable HD + Confirm (if required) + Authorize + launch gates → Cursor iff admissible else STOP · 0 Attempt. No silent HD. PREPARE creates neither Authorization nor Attempt.

**Chemin A — STRUCTURAL disposition-before-PREPARE (HISTORICAL / still available):** mission signals / HD-required materiality → process-local presentation carrier → Pilot disposition:
- **Accept** → durable HD `accepted` → verify → PREPARE (refs verified) → inspect → Confirm (if required) → Authorize → Execute.
- **Refuse** → HD refused → this path forbids PREPARE (`HD_REFUSED`); no Authorization; no Attempt.
- **Amend** → new presentation required → PREPARE forbidden on this path until a new accepted applicable HD.
No artificial HD. Unbound historical HD does not unlock a different mission. Accept alone ≠ Execute.

**Chemin B — NON_STRUCTURAL (CURRENT):** Materiality CURRENT NON_STRUCTURAL → PREPARE with `decisionRefs=[]` iff Product gates admit → inspect → Confirm (if required) → Authorize → Execute. OA Confirm/Authorize gates remain. UNKNOWN inspectable PREPARE allowed; Execute fail-closed without admissible authority. **Tool-First R1:** pathless admission requires a positive non-mutating claim (INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING) **and** complementary Product gates. Declaration alone ≠ Product authority. No invented file path; no systematic HD.

**SHE / Tool-First ordinary CTA (CURRENT):** after Inspect attest, Pilot **Exécuter** records applicable HD when required, may fold Confirm (server), then Authorize+launch — Inspect ≠ Execute; HD ≠ Confirm ≠ Authorize ≠ Execute remain.

**R2 REAL pathless (Select ≠ Start effects):** when REAL is armed for a pathless non-mutating EC:
- **Select:** gate fires **before** creating a new ExecutionAttempt — no Select-accepted Attempt; no Cursor REAL call.
- **Start:** if an Attempt already exists in `accepted` (e.g. created under Fake/DET), gate re-evaluates and **refuses Start** — Attempt remains `accepted` (not `running`); launch-port call count unchanged; no Cursor REAL effect.
Fake/DET (`CURSOR_REAL≠1`) remains admissible for both phases. Ordinary write / concrete-path contracts are not blocked by this gate.

**Separations (KEEP — CURRENT et TARGET):** Recommendation ≠ HD; Offer ≠ Authorization; HD ≠ Confirmation; Inspection ≠ Confirmation; Confirmation ≠ Authorization; Authorization ≠ Execution; Attempt terminal ≠ Product SUCCESS PROVEN; Stamp ≠ REAL no-write.

**CURRENT revalidation:** when Product material facts change, Materiality / applicability / presentation digest must be re-checked before PREPARE resume — do not invent currentness rules beyond candidate `resolveAuthoritativeProductMateriality` + HD verify. Restart: process-local offer loss ≠ universal PREPARE ban when durable accepted HD remains verifiable (see vol 06 / HD11).

---

## SHE CURRENT — D-P6-SHE-01 (2026-10-19) — SINGLE HUMAN EXECUTE / Option A

**Tag :** **CURRENT ON DELIVERY** · déterministe prouvé (`p6.she.*`, GAP-01..05, I17) · **≠ INTEGRATED_ON_MAIN** (merge Morris distinct) · **≠ REAL/HQA PROVEN**

Les invariants HISTORICAL `INV-STRUCTURAL-*PREPARE*HD` et la contrainte PREPARE-only de `INV-EMPTY-REFS-NE-STRUCTURAL` restent vraies pour le **chemin disposition-before-PREPARE** et les suites mHd01 / DER16. Sous SHE, leur **timing PREPARE** est superseded (autorité structurelle avant **lancement**).

### SHE invariant catalog (CURRENT ON MAIN — DET at tested scope)

| ID | Statement (CURRENT SHE) | Proof owner |
|---|---|---|
| INV-SHE-PREPARE-NO-AUTHORITY | PREPARE ne consomme aucune autorité ; ne crée ni Attempt ni Authorization | `p6.she.singleHumanExecute*` |
| INV-SHE-STRUCTURAL-INSPECTABLE | STRUCTURAL / UNKNOWN n’interdit pas PREPARE ni inspection d’un contrat honnêtement stampé | SHE + continuity GAP-01 |
| INV-SHE-AUTHORITY-BEFORE-LAUNCH | Autorité structurelle / effective vérifiée **avant** tout lancement Cursor (pas avant PREPARE) | SHE Execute path |
| INV-SHE-EXECUTE-BINDS-INSPECTED | Le clic Exécuter est lié au contrat inspecté (id + version + semantic fingerprint) | SHE + GAP-04 |
| INV-SHE-NO-SILENT-HD | Aucune HumanDecision silencieuse ; HD uniquement sur action Pilote explicite (sujet/version/digest) | SHE Record |
| INV-SHE-NO-EXEC-WITHOUT-EFFECTIVE-AUTH | Aucune exécution sans autorité effective ; 0 Attempt si gate pré-lancement échoue | SHE |
| INV-SHE-NO-AUTO-ELEVATION | Aucune élévation automatique de capacité / permission / chemin protégé | SHE |
| INV-SHE-UNKNOWN-BLOCKS-NONADMISSIBLE | UNKNOWN / matérialité non admissible interdit l’exécution (fail-closed) | SHE UNKNOWN gate |
| INV-SHE-STALE-CONTRACT-BLOCKS | Exécution refusée sur contrat obsolète (version/fp/currentness) | SHE currentness |
| INV-SHE-IDEMPOTENT-EXECUTE | Double-clic / retry / restart : idempotence Attempt ; pas de second Cursor silencieux | SHE T23 |
| INV-SHE-SINGLE-UX-PATH | Même parcours UX STRUCTURAL / NON_STRUCTURAL (matérialité ≠ boutons distincts) | ExecutionSurface |
| INV-SHE-NO-EXTRA-HUMAN-CTA | Pas de confirmation humaine supplémentaire après Exécuter pour le même contrat inspecté (Confirm/HD restent transitions OA internes) | SHE |

**Chemin SHE unique (UX) :**

```text
PREPARE (inspectable, decisionRefs peuvent être vides en proposition)
→ INSPECT (attestation)
→ EXECUTE (seul clic)
→ HD applicable? + Confirm applicable? + Authorize + launch gates (interne)
→ Cursor SI admissible
sinon STOP · 0 Attempt
```

**Dette OPEN (inchangée) :** TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT — non résolue par D-P6-SHE-01.

---

## Overlay — AKG-M5 L2-D2 conditional invariants (CURRENT ON MAIN — PR #614; DET scope)

Code integrated on main. Invariants apply **when** exclusive is armed (trim=`"1"`). Default OFF = historical D1 operator path. **G-ACTIVATION OPEN** — LIVE arming **NOT PROVEN**.

| ID | Statement | Source | Proof class |
|---|---|---|---|
| INV-L2D2-D1-REFUSED-EXCLUSIVE | When exclusive ON, D1 open + guarded mutative APIs refuse with `D1Error` `FORBIDDEN` | `localOaExclusiveMode.ts` / `db.ts` / `repository.ts` / `boundedAtomicAudit.ts` | CURRENT IMPLEMENTED · BEHAVIOR PROVEN AT TESTED SCOPE (DET) |
| INV-L2D2-CONFIRM-FORBIDDEN-OK-FALSE | Confirmation `FAILED`+`FORBIDDEN` → `actionExecuteConfirmation` `ok:false` / `FORBIDDEN` | `confirmation/actions.ts` | CURRENT IMPLEMENTED · DET |
| INV-L2D2-CONFIRM-NO-ONDONE-ON-REFUSAL | UI must not treat refused confirmation as success (`ConfirmationPanel` skips `onDone` on `!ok`) | `ConfirmationPanel.tsx` + tests | CURRENT IMPLEMENTED · DET |
| INV-L2D2-NO-MUTATION-VIA-GUARDED-APIS | No D1 write via guarded repository/audit APIs under exclusive (incl. injected connection) | injected suite | CURRENT IMPLEMENTED · DET |
| INV-L2D2-OPEN-HANDLE-MUTATION-GATED | `openD1Db` Proxy **allowlist** (`prepare`/`exec`/`close` + safe getters) + native `setAuthorizer` (not exposable): under exclusive, prepare/exec/Statement `run|get|all` refuse (`D1Error`); `iterate` refused always (deferred-escape); `setAuthorizer`/`createTagStore`/`deserialize`/session/changeset/extension/UDF refused (**CR-S2-01 + CR-S2-02**) | `wrapD1DatabaseSyncForExclusiveGate.ts` / S2 suite | CURRENT IMPLEMENTED · DET |
| INV-L2D2-SINGLETON-SEAL-ON-CUTOVER | `sealD1DbSingletonForLocalOaExclusiveCutover` closes process singleton before exclusive arming | `db.ts` / S2+S4 | CURRENT IMPLEMENTED · DET |
| INV-L2D2-NO-PROJ-TO-PRJ-MAP | Legacy D1 deep links do not rewrite `proj-*` → `prj:*` | `legacyNavigation.ts` / D4 tests + S3 harness | CURRENT IMPLEMENTED · DET · LIVE HTTP NOT PROVEN |
| INV-REC-NE-HD / INV-MEMB-NE-TRUTHC | Recommendation ≠ HD ; Memory B ≠ Truth C | existing catalog | CURRENT IMPLEMENTED |

**Residual KNOWN GAP (R-03):** `new DatabaseSync(path)` constructed **outside** `openD1Db` is **not** wrapped — honest negative test retained. Applicative path DET-proven. Full close needs Morris architecture decision (not done). DET row oracles under exclusive use disposable `{ readOnly: true }` file opens — **≠** Q12 product fallback · **≠** exclusive OFF.

**Failure mode (when exclusive ON):** D1 create/confirm refused ; Product OA create path remains the target continuity surface.

## Failure modes (selected) — CURRENT IMPLEMENTED

| Code/State | Layer | Trigger | User effect | Mutations | Fail-closed |
|---|---|---|---|---|---|
| `no_require_artifact` | ACGC | materialization signal without CURRENT REQUIRE_ARTIFACT / APPLICABLE∧¬SATISFIED | when actionable: Generic PREPARE on same cycle (P6-HQA-F05-GD4-01); else clarification — **never** invent REQUIRE_ARTIFACT HD | none unauthorized | yes |
| `artifact_already_satisfied` | ACGC | Artifact SATISFIED | blocked | none | yes |
| `lifecycle_assess_failed` | ACGC | assess throw/!ok | blocked | none | yes |
| `no_active_cycle` | ACGC | missing active id | blocked | none | yes |
| `NEW_CYCLE_FORMALIZATION` | ACGC | no materialization intent / explicit new-cycle formalization | historical new-cycle path — **not** aliased from optional documentary `no_require_artifact` | may createCycle on other path | intent-gated |
| `CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE` | Generic PREPARE | unknown / privileged / spoofed capability identity | prepare refused | none | yes — exact identity match only |
| `MATERIALITY_UNKNOWN` (pathless without positive claim) | Materiality / Tool-First R1 | No positive claim: (`repositoryMutation` absent **and** not `read_only`) **or** `unknown`/`write` **or** other Product contradictions | PREPARE refused — no silent NON_STRUCTURAL | none | yes |
| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Select) | F10 R2 | pathless non-mutating EC + REAL=1 at Select | **No new Attempt**; Select refused; no REAL launch | none | yes — Fake/DET still OK |
| `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` (Start) | F10 R2 | same EC + REAL=1 at Start with prior `accepted` Attempt | Start refused; Attempt stays `accepted`; no launch-port call | none | yes — Fake/DET still OK |
| `CKC_*` | CKC | incoherent/unavailable mapping | qualification fail | none unauthorized | yes |
| `POST_EVIDENCE_CKC_NOT_ELIGIBLE` / `POST_EVIDENCE_CKC_AMBIGUOUS` | W3-C post-Evidence CKC | Project-only without positive Generic NON_STRUCTURAL Delivery eligibility on Attempt EC (absence of durable WHAT / impact / materiality gates) | W3-C fail-closed before Nora/LPS mutation; **no** universal `cyc:delivery`; Option 1 preserves declared mutation only — never invents `"write"` | none unauthorized | yes — **HISTORICAL LOCAL CANDIDATE PRE-MERGE** · **CURRENT ON MAIN** via PR #626 · DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE · EP-S2-08-PROOF-01 Option A + Option 1 · ≠ REAL |
| `HD_MUTATION_DECLARATION_CONFLICT` / `mutation_write_vs_read_only_intent` | Generic PREPARE / EC internal consistency (R-INSPECT-01) | Sealed HD `intentKind=read_only` (or bounded non-mutating / NO_REPOSITORY_MUTATION stamp) contradicts analysis/`inputs.repositoryMutationDeclared=write` | PREPARE refuse or SHE consistency refuse — no silent override; declaration ≠ authorization; fingerprint alone ≠ visual disclosure | none unauthorized | yes — **HISTORICAL LOCAL CANDIDATE PRE-MERGE** · **CURRENT ON MAIN** via PR #626 · DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE · R-INSPECT-01 / R-HD-01 · ≠ REAL · ≠ HD bypass |
| `POST_EVIDENCE_CKC_ATTEMPT_PROJECT_MISMATCH` / `POST_EVIDENCE_CKC_CYCLE_LINEAGE_MISMATCH` / `POST_EVIDENCE_CKC_PROVENANCE_INCOHERENT` | W3-C post-Evidence CKC | Attempt/EC/LPS cycle or project lineage incoherent | orientation refused — no silent LPS cycle substitution for old Attempt | none unauthorized | yes — **HISTORICAL LOCAL CANDIDATE PRE-MERGE** · **CURRENT ON MAIN** via PR #626 · DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE · EP-S2-08-PROOF-01 · ≠ fabricated provenance · ≠ REAL |
| `AUTHORITY_NOT_CONFIGURED` | authz | missing local Pilot gate | cannot decide | none | yes |
| `MANAGED_REPO_ROOT_BASE_UNCONFIGURED` | **CURRENT ON MAIN after #618:** missing managed root still fail-closes; **not** a docs_write Product-admission gate (admission RETIRED). Historical « docs_write REAL » association = **HISTORICAL** | missing managed root | cannot REAL write | none | yes |
| `repository_remote_identity_mismatch` | F10 seal (`sealRepositoryBindingFromExecutionInputs`) — **CORR-02 CURRENT ON MAIN (#618)** | provided remote does not match canonical git-target identity | REAL start refused (`REAL_WORKSPACE_INVALID`); no synthesized GitHub URL fallback | none | yes — DET · **≠** REAL |
| `managed_repo_identity_mismatch` | managed resolver (`resolveIdentityMatchedLocalRepo` / `guardedManagedRepoRootForProtectedGit`) — **CORR-02 CURRENT ON MAIN (#618)** | checkout `origin` missing or does not match sealed identity (including one-hop worktree gitfile whose resolved origin mismatches) | protected Git fail-closed (`REAL_WORKSPACE_INVALID`); non-protected work does not fail solely because the checkout is unusable | none | yes — DET · **≠** REAL |
| Session path orphan | Memory B | worktree cwd default | empty transcript UI | Truth C intact | operational |

Governance STOP ≠ product defect: blocked continuation for UNKNOWN Artifact is **expected**.

**Note SHE CURRENT :** sous D-P6-SHE-01 (**CURRENT ON MAIN**), STRUCTURAL sans HD préalable peut PREPARE inspectable ; les refus d’autorité portent sur **Exécuter** (HD/Confirm/Authorize/currentness). REAL/HQA / P6 GLOBAL PASS restent des gates Morris distincts (non acquis).


## Overlay — AKG-M5 L3-S2 Option B / S8 Project-first (CURRENT ON MAIN — PR #623 MERGED — 2026-10-27)

> **Epistemic class:** **CURRENT ON MAIN** via [PR #623](https://github.com/mcleland147/sfia-workspace/pull/623) **MERGED** `2026-10-27T15:02:16Z` · merge **`6c8b661c50a5c1d9bd04793192b9294b63349bb1`** · parents **`6e957ecbf50b009b692cf1fcba2748ee1aa9c862`** + **`73f0166c6a71c301a7b2a9c2471beb30ad068221`** · [post-merge CI #40526990871](https://github.com/mcleland147/sfia-workspace/actions/runs/40526990871) **COMPLETED / SUCCESS** (Detect · Typecheck · Lint · Build · Vitest · Modeled Governance · Secret Pattern Scan · Trailing Whitespace · **SFIA Studio Required Gate PASS**) · event=`push` · branch=`main` · HEAD=merge. Integrated Product commits: `0577ca5c…` (feat) · `90bbf479…` (pre-merge R24 LOCAL docs+manifest) · `f7c9ba78…` (**CORR-CI-623-01** Tool-First first-prompt) · `73f0166c…` (**CORR-CI-623-02** multi-path unclaimed redaction). Pre-merge CI [run #40519630827](https://github.com/mcleland147/sfia-workspace/actions/runs/40519630827) SUCCESS on `73f0166c…`. Prior overlay wording **LOCAL CANDIDATE / dirty Product / PROJECT GIT INTEGRATION NOT AUTHORIZED / ≠ CURRENT ON MAIN** = **HISTORICAL AS TIP** (true at 2026-10-27 pre-merge authoring). Proof ceiling: **DETERMINISTIC BEHAVIOR PROVEN AT TESTED SCOPE**. REAL / G-REAL / OA-exclusive activation / runtime v3 **NOT** claimed. **L3 GLOBAL OPEN**. EP-S2-05 **NOT PROVEN**. EP-S2-08 **PARTIAL**. ≠ Product PASS invented · ≠ L3 GLOBAL CLOSED.

### Invariants / failure modes (CURRENT ON MAIN DET — Option B)

| ID | Statement | Status |
|---|---|---|
| INV-L3S2-PROJECT-FIRST | Project required; CycleInstance optional; **no fictive cycle** for Generic PREPARE | CURRENT ON MAIN DET · ADAPT Product path |
| INV-L3S2-EVIDENCE-OWNERSHIP | W3-B admits Evidence only when Project/EC/Attempt/(Cycle) bindings + role/sourceKind/provenance match | CURRENT ON MAIN DET · R-S8-01 |
| INV-L3S2-ABSENT-NE-REJECTED | Present incoherent Evidence is **REJECTED** (observable Product code/message), never silent-as-ABSENT | CURRENT ON MAIN DET · R-S8-03 |
| INV-L3S2-REJECT-BEFORE-RB | REJECTED path returns **before** `createReviewBundle` / freeze / positive CE | LOCAL DET |
| INV-L3S2-LATE-EVIDENCE-FC | Late Evidence after frozen RB under same idempotency → `IDEMPOTENCY_CONFLICT` fail-closed | CURRENT ON MAIN DET · R-S8-02 |
| INV-L3S2-TECH-NE-PRODUCT | Attempt Technical SUCCESS ≠ Product PASS; Generic without applicable Result Semantic → **UNCLAIMED** | CURRENT ON MAIN DET · KEEP |
| INV-L3S2-SHE-AUTHORITY | SHE authority unchanged; review refusal ≠ Cursor process failure | CURRENT ON MAIN DET · KEEP |

Refusal codes (Product-local mapping): `EVIDENCE_PROJECT_MISMATCH`, `EVIDENCE_CONTRACT_MISMATCH`, `EVIDENCE_ATTEMPT_MISMATCH`, `EVIDENCE_CYCLE_MISMATCH`, `W3B_EVIDENCE_ADMISSION_REJECTED`.
