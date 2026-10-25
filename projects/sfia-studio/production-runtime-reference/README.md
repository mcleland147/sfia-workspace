# SFIA Studio — Living Production Runtime Reference

**Nature:** CURRENT AS-IMPLEMENTED / LIVING PRODUCTION RUNTIME REFERENCE
**Corpus historical Reviewed commit (REC-01 / prior overlays):** `b433d4316b1c8d04dc043e3ee46a6dc4dbff4da9` @ 2026-10-10T21:48:00+0200 — not a claim that the entire corpus was re-audited in this pass.
**Nora post-merge status sync (scoped):** merge `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` · reviewed at 2026-10-12 (Europe/Paris) — Git/status requalification of PR #577 overlays; later consolidated with PR #578 (see below). **Not** a full Living Reference re-audit of the entire corpus.
**Consolidated documentary closure (scoped):** baseline runtime `440066485eaae458ccca188b2c91f8f47bd4987f` (main after PR #578) · reviewed at 2026-10-13 (Europe/Paris) — Nora Product overlays PR #577 + RCD-01/PR #578 only; **not** a full Living Reference re-audit.
**Macro foundation:** SFIA-STUDIO-LIVING-PRODUCTION-RUNTIME-REFERENCE-01
**Stabilization overlay:** PRODUCT-CYCLE-E2E-STABILIZATION-01 (deterministic Product server-action E2E oracle)
**Last audit overlay:** SFIA-STUDIO-LEGACY-ARCHITECTURE-DECOMMISSION-01 (no SAFE removal; CURRENT clarifications only)
**First Framing overlay:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 / P6 — conversational Framing START path documented in volumes 03 / 08 / 09 (PR #574)
**REC-01 overlay:** P6-HQA-02 / REC-01 — governed Work Recommendation materialization + Option A CONTRADICTORY continuity (PR #576 @ `b433d431`) — volumes 02 / 03 / 04 / 08 / 09
**Nora autonomy overlay (INTEGRATED ON MAIN):** P6 / **PR #577 MERGED** @ `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc` (mergedAt 2026-10-12T12:53:30Z) — P0 incomplete Status Honesty; P1 Adaptive Runner Budget (Routine 5 / Focused 8 / Deep·HA 10, ceiling 10); P2 native RunState Controlled Continuation + Session-on-resume (TV01); numeric fail-closed for explicit non-finite `maxTurns`. Post-merge CI: [run 38251916421](https://github.com/mcleland147/sfia-workspace/actions/runs/38251916421) SUCCESS (Required Gate PASS). Proof level: **DETERMINISTIC VERIFIED** at Product wiring + next-turn input scope. REAL **NOT PROVEN**. Runtime v3 **NON ADOPTED**.
**RCD-01 documentary reliability overlay (INTEGRATED ON MAIN):** P6-MIN-09 / **PR #578 MERGED** @ merge `440066485eaae458ccca188b2c91f8f47bd4987f` (source `9b855d8ddabd9bf9fffb8561f63d1138d8939be4`; mergedAt 2026-10-13T07:18:56Z) — honest Git read coverage; secret-safe redaction progression; final model-visible JSON envelope truth; bounded oversized-line skip (`lineExceedsCap`); honest budget-exhausted restitution. Post-merge CI: [run 38361885447](https://github.com/mcleland147/sfia-workspace/actions/runs/38361885447) SUCCESS (Required Gate PASS). Proof: **DETERMINISTIC CORRECTION PROVEN AT TESTED SCOPE** (R1–R7). **GDR REAL PASS / P6 GLOBAL PASS / Product READY: NOT CLAIMED**. Runtime v3 **NON ADOPTED**. FinOps ceilings unchanged (adaptive maxTurns ≤ 10; `CT_MAX_TOOL_RESULT_CHARS` = 12000). Volumes 02 / 03 / 04 / 06 / 08 / 09 + README + digests. Debt `RCD-01-PRR-SEMANTIC-COHERENCE`: documentary correction prepared locally — **integration of this PRR sync still PENDING**.
**PR #585 cumulative CI correction overlay (scoped, Delivery):** baseline reviewed `e7774a0c71e3b052f091ed2dffdd70651916dd2d` · 2026-10-15 (Europe/Paris) — CI-HQA-F01 NEW_CYCLE vs Artifact natural-signal boundary + digest sync for tracked F2/P6 sources; volumes 03 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 admission only. **Not** a full Living Reference re-audit. P6 GLOBAL PASS / REAL / runtime v3 **NOT CLAIMED**.
**PR #586 optional Artifact / Generic PREPARE overlay (scoped, Delivery):** Product baseline reviewed `9b9cd5e5052da5781678a23a86c82b8b3283627e` · 2026-10-15 (Europe/Paris) — P6-HQA-F05-GD4-01: ordinary documentary request without closure `REQUIRE_ARTIFACT` may route to Generic PREPARE on the same active cycle (`no_require_artifact` ≠ NEW_CYCLE_FORMALIZATION; ≠ invented HD); exact capability identities; Nora path candidates non-authoritative at PREPARE. Volumes 02 / 03 / 04 / 06 / 07 / 08 / 09 + digests. **BOUNDED SEMANTIC IMPACT** on F05 routing + Fake fixture cue. **Not** a full Living Reference re-audit. Pending offer process-local. OpenAI LIVE / e66 / Cursor REAL **NOT CLAIMED**. P6 GLOBAL PASS / runtime v3 **NOT CLAIMED**.
**Tool-First Generic Execution + R1/R2 safety — status requalification (AKG-M0 R-S02, 2026-10-19):**

| Epistemic class | Element | Git evidence |
|---|---|---|
| **HISTORICAL CANDIDATE** | Delivery/candidate lineage `fix/sfia-studio-p6-tool-first-safety-r1r2` @ ~`e03c7b9` / tip known `c56cc480` — documented as PENDING_GIT_INTEGRATION before main absorption | remote branch may still exist; **branch existence ≠ non-integration** |
| **CURRENT IMPLEMENTED ON MAIN** | **R1** — pathless NON_STRUCTURAL admission requires a **positive** non-mutating claim (`intentKind=read_only` **OR** `repositoryMutationDeclared ∈ {none,read}`); `repositoryMutation` absent refuses **only when** `read_only` is also absent; unknown/write/contradictions fail-closed; no invented path; no systematic HD | code `resolveAuthoritativeProductMateriality.ts` / `prepareGenericExecutionContractDraft.ts` · test `p6.toolFirst.safetyClosureR1R2.d0.test.ts` · PRR 07 INV-PATHLESS-NEEDS-POSITIVE-NONMUTATING **CURRENT IMPLEMENTED** · integrated via **PR #588** merge `304e30e8` (ancestor of main `c9abdbc3`) |
| **CURRENT IMPLEMENTED ON MAIN** | **R2** — pathless non-mutating + `SFIA_STUDIO_CURSOR_REAL=1` → Product gate `BOUNDED_NON_MUTATING_REAL_ENFORCEMENT_UNAVAILABLE` on **Select** (no new Attempt) and **Start** (Attempt may stay `accepted`; no launch) | code `boundedNonMutatingRealLaunchGate.ts` · same test · PRR 07 INV-R2-REAL-PATHLESS-BLOCK **CURRENT IMPLEMENTED** · same PR #588 lineage |
| **CURRENT IMPLEMENTED ON MAIN** | Pilot **Exécuter** may fold server Confirm after inspection attestation (Inspect ≠ Execute) — shared with SHE ordinary CTA | PR #590 Delivery + continuity suites |
| **RELATED — DISTINCT** | **Single Human Execute (Option A)** structural inspectable PREPARE → Exécuter HD/Confirm/Authorize | **PR #589** governance/docs+coordinators (`476b1c20`) · **PR #590** Product Delivery (`c9abdbc3`) — **≠** automatic proof that every historical candidate file was consumed under the Tool-First branch name |
| **OPEN DEBT** | `TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT` — Product admission / refusal gate **≠** technical Cursor REAL no-write sandbox | PRR 07 explicit OPEN · not closed by #588/#589/#590 |
| **NOT PROVEN** | REAL BOUNDARY / HQA LIVE / P6 GLOBAL PASS / runtime v3 ADOPTED | explicit non-claims |

**Correction vs prior README wording:** the overlay that still said « local candidate — PENDING_GIT_INTEGRATION / Not integrated on main » is **obsolete as CURRENT** after **PR #588 MERGED**. Treat that wording as **HISTORICAL**. Residual PENDING phrasing may still appear in some volume bodies (03/05/09) outside this README allowlist edit — do not promote those stale phrases over Git + volume 07 CURRENT invariants.

Fake/DET remains the deterministic proof path for R1/R2 at tested scope. Deterministic proof **≠** READY FOR REAL.

**AKG-M0 methodological continuity overlay — historical preparation vs PR candidate:** **Historical snapshot (2026-10-19, étape 1 authoring):** README role/coverage/maintenance + R-S02 Tool-First CURRENT requalification + read-only vs Delivery proportion were authored locally; at that stage **manifest digests were not yet refreshed** (`REFERENCE REVIEW REQUIRED` then). **Later in the same AKG-M0 documentary lot (PR #591 candidate):** the README digest was synchronized into `production-runtime-reference.manifest.json` after semantic acceptance — digest match is a **deterministic conformance** fact of this candidate, **not** semantic exhaustiveness and **not** proof that AKG-M0 is ACTIVE ON MAIN. **Activation on main** remains contingent on merge + post-merge verification under distinct Morris gates. P6 GLOBAL PASS / runtime v3 ADOPTED / TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT closed / AKG-M0 ACTIVE ON MAIN **NOT CLAIMED**.

**AKG-M5 L2-D2 local OA Fresh Start cutover readiness — CURRENT ON MAIN (PR #614) + Cycle 14 documentary truth-sync (2026-10-24):**

| Epistemic class | Element |
|---|---|
| **A — Historical (pre-integration)** | **A1 LOCAL AUTHORING:** Delivery + CORR-02 + R24/Cycle13 on `feat/akg-m5-l2-d2-local-oa-cutover`, initially dirty/uncommitted over base `1a380f22c2ee9c63c525213e01de4bca14dff9ca`. **A2 G-GIT:** source commit `4647983aa36b76ae393200a7a8caaaed96936149` created (≠ dirty HEAD). **A3 INTEGRATION:** [PR #614](https://github.com/mcleland147/sfia-workspace/pull/614) MERGED → `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` · CI [#40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) SUCCESS — **HISTORICAL AS TIP** (see prior handoffs) |
| **B — Git Integration** | [PR #614](https://github.com/mcleland147/sfia-workspace/pull/614) **MERGED** · merge `1a0ccd846247d8d96c4c6e1258edd739a2bb5d11` · [post-merge CI #40130977607](https://github.com/mcleland147/sfia-workspace/actions/runs/40130977607) **SUCCESS** |
| **C — CURRENT @ marker OFF (default)** | Code on main ; exclusive inactive ; historical D1 paths unchanged for operators who do not arm the marker |
| **D — Conditional @ marker ON (DET)** | Fail-closed D1 open+mutation (incl. injected writers) ; confirmation `ok:false`/FORBIDDEN ; D4 redirect/notFound ; O-01 LPS objective→UI — **31 PASS / 7 suites** at tested scope |
| **E — LIVE** | Studio HTTP / Application Support / R-CUT / coherent snapshot restore — **NOT PROVEN** |
| **F — Gates** | **G-ACTIVATION OPEN** · [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · documentary **G-MERGE consumed** · **R-01 EXIT PROOF SATISFIED** · **R-01 FORMAL CLOSE NOT CONSUMED** · digest conformance ≠ semantic exhaustiveness · OA-exclusive **NOT ACTIVATED** |
| **Runtime v3** | **NON ADOPTED** |
| **Anti-claims** | OA-exclusive **not** ACTIVATED · CUTOVER LIVE **not** PROVEN · O-01 LIVE E2E **not** COMPLETE · P6 GLOBAL PASS **not** claimed · DET ≠ LIVE · AKG-M5 GLOBAL **OPEN** |

Cycle 14 documentary truth-sync [PR #615](https://github.com/mcleland147/sfia-workspace/pull/615) **MERGED** · merge `7b64ab21aa29211d5fce93d06d24bce539a0c5a5` · [post-merge CI #40138037280](https://github.com/mcleland147/sfia-workspace/actions/runs/40138037280) **SUCCESS** · eight Cycle-14 digests on main · **R-01 exit proof satisfied** · formal close **NOT CONSUMED** · digest match ≠ semantic exhaustiveness (**NO PRODUCT SEMANTIC IMPACT**) · code L2-D2 remains DEFAULT OFF / NOT ACTIVATED (PR #614 distinct).

**Main tip truth-sync (2026-10-25):** [PR #617](https://github.com/mcleland147/sfia-workspace/pull/617) **MERGED ON MAIN** · merge `7db8afd7c27720712f08000274dbbc4e1a62d935` = `origin/main` · [CI #40169014052](https://github.com/mcleland147/sfia-workspace/actions/runs/40169014052) **SUCCESS** · L2-D2 activation prep S1–S4 is **CURRENT ON MAIN**. [PR #616](https://github.com/mcleland147/sfia-workspace/pull/616) **MERGED** `d7aad77e999e4fe64f31a776ddf39c1d99278b1b` (R-01 evidence status) sits between #615 and #617. Exclusive remains **DEFAULT OFF / NOT ACTIVATED**. **G-ACTIVATION / G-REAL NOT GRANTED**. This truth-sync does **not** retire RepositoryBinding or docs_write Product admission — both remain historically present on `7db8afd7`.

**G-ACTIVATION PREPARATION S1–S4 + CORR-01 + CR-S2-02 (IMPLEMENTED — DET scope — CURRENT ON MAIN via PR #617 — 2026-10-25):** Product `VACUUM INTO` snapshot/restore (closed_copy unavailable; RO integrity) · `openD1Db` native **allowlist** Proxy (closes `setAuthorizer`/`createTagStore`/`deserialize`/deferred `iterate` escapes — **CR-S2-01/02**) · D4 DET harness · R-CUT DET rehearsal (exclusive held; disposable RO D1 oracle ≠ Q12). Volumes 05–09 describe this behaviour. **Operational anti-claims (unchanged by Git Integration):** exclusive **DEFAULT OFF / NOT ACTIVATED** · G-ACTIVATION / G-REAL **NOT GRANTED** · H4 real instance **NOT QUALIFIED** · D4 HTTP LIVE / R-CUT LIVE **NOT PROVEN** · raw `new DatabaseSync` outside `openD1Db` **KNOWN GAP** · Q12 **OPEN** · runtime v3 **NON ADOPTED**.

**Product RepositoryBinding + docs_write Product specialization — LOCAL DELIVERY CANDIDATE / NOT ON MAIN (Morris GO 2026-10-25):**

| Epistemic class | Element |
|---|---|
| **CURRENT ON MAIN** | `origin/main` `7db8afd7` (PR #617) still has server-owned RepositoryBinding on CreateProject, `SFIA_STUDIO_PROJECT_REPOSITORY_*` in preflight / `.env.example`, and docs_write Product admission (`intentKind` / cap / action) in active lib+features. That is historical presence on main, not this retirement. |
| **LOCAL DELIVERY CANDIDATE / NOT ON MAIN** | Branch `feat/akg-m5-remove-repository-binding-docs-write`. **DECIDED BY MORRIS 2026-10-25**. **LOCAL IMPLEMENTED**. **RepositoryBinding RETIRED IN LOCAL DELIVERY** (CreateProject has no `repositoryBinding`; `PROJECT_REPOSITORY_*` removed from preflight and `.env.example`). **docs_write Product specialization RETIRED IN LOCAL DELIVERY** (Product admission of `intentKind` / cap / action removed from active lib+features). `projectWorkspaceKey` / `projects/<key>` routing **PRESERVED**. O-01 DET **PASS**. Typecheck **PASS**. **Known regressions accepted**. |
| **Gates** | **PENDING REVIEW** · **PENDING GIT INTEGRATION** · **NOT MERGED**. **H4 / G-REAL / G-ACTIVATION NOT GRANTED**. **AKG-M5 OPEN**. Runtime v3 **NON ADOPTED**. |
| **Anti-claims** | ≠ **MERGED ON MAIN** · ≠ exclusive ACTIVATED · ≠ REAL PROVEN · ≠ P6 GLOBAL PASS · historical D-PC-09 / docs_write sentences in volumes 02–09 stay the main record until merge |

- **CORR-01 (LOCAL DELIVERY CANDIDATE):** Review Pack completeness + generic invariant coverage restored (ambiguity / mission / criteria / continuity wording). **Not GI**. **NOT MERGED**. **≠** REAL.
- **CORR-02 (LOCAL DELIVERY CANDIDATE):** Git target fidelity on the structural removal — identity↔remote↔checkout **DETERMINISTIC VERIFIED** at tested scope. Evidence FS-anchor allowlist tightened to historical `execution_attempt:docs_write` (+ dotted suffix); residual stubs removed. **NOT MERGED**. **≠** REAL.

Checked-out tree may already contain this uncommitted retirement. That working-tree fact is **not** integration on main. Volumes below that still describe binding or docs_write as as-implemented behaviour describe **CURRENT ON MAIN** unless they are explicitly marked **LOCAL DELIVERY CANDIDATE**.

## What this corpus is

This corpus describes **how SFIA Studio actually works** in Git:

- objects and responsibilities;
- end-to-end flows;
- upstream/downstream dependencies;
- persistence / restart / recovery;
- authority / cognition / execution boundaries;
- environments and configuration;
- tests and proof oracles;
- impact-analysis procedure for future changes.

For RepositoryBinding and docs_write Product admission, **CURRENT ON MAIN** (`origin/main` `7db8afd7`) wins over the uncommitted local retirement until merge.

It is the primary **impact-analysis substrate** for future Studio corrections.

### Canonical documentary role (AKG-M0)

The PRR is the **canonical documentary reference** for Studio’s **CURRENT as-implemented** behaviour.

**CP03 — authority boundary:**

1. **Git current tree** and **primary proofs** (tests, schemas, runtime observations) remain **superior** to any descriptive documentation.
2. The PRR **never** outranks Git or primary proofs.
3. When code/proofs contradict the PRR: **code/proofs win**; record an explicit **KNOWN GAP** (do not silently “fix” narrative to match hope).

### Progressive architectural dimensions

Cover progressively via existing volumes (do **not** invent a parallel corpus; do **not** auto-create one volume per dimension):

| Dimension | Primary volumes |
|---|---|
| Functional capabilities / journeys | 03 (+ Roadmap B9 doctrine coverage) |
| Technical components | 01, 02 |
| Responsibilities | 02, 07 |
| Interfaces / interactions | 03, 04 |
| Dependencies | 04 |
| Flows / events | 03 |
| Business objects | 02 |
| Data / transformations | 02, 06 |
| Persistence / transactions | 06 |
| Authority / governance | 07 |
| Recovery / resilience | 06 |
| External integrations | 05 |
| Tests / proofs | 08 |
| Debt / reserves | 09 |
| Component history / disposition | 09 + Convergence Roadmap (history) — do not duplicate chronology here |

**Articulation:** technical inventory (01/02) ↔ functional capabilities & journeys (03) ↔ interactions/dependencies (03/04).

### Coverage status vocabulary (CP04)

Do **not** use “covered” as a synonym for “fully proven behaviour”.

| Status | Meaning |
|---|---|
| **DOCUMENTED** | Information is described in the corpus |
| **COVERAGE VERIFIED** | Scope identified and documentary coverage checked against relevant Git/sources |
| **BEHAVIOR PROVEN** | Behaviour supported by an explicit proof whose **level** is stated (deterministic / REAL boundary / E2E REAL / …) |
| **KNOWN GAP** | Missing, contradictory, or insufficiently demonstrated |

A domain may be DOCUMENTED without being COVERAGE VERIFIED or BEHAVIOR PROVEN. Digest match alone never implies semantic validity.

**AKG-M0 does not declare the PRR exhaustive.**

## What this corpus is NOT

It does **not** replace:

- doctrine produit v3 (`sfia-v3-framing/**`);
- Build Doctrine / Roadmap (`convergence/**`);
- Product Completion C1 (`product-completion/**`);
- Morris decisions;
- Pilot HumanDecisions;
- the Transmission Guide as pedagogy/history.

It does **not** invent architecture, promote Runtime v3, or change product behavior.

## Source hierarchy (authority of facts)

1. **Git current tree** (code + tests + schemas + config examples)
2. **Deterministic product tests** (behavior oracles — with documented weaknesses)
3. Product Completion / doctrine / Transmission Guide — **guidance / intent / history only**

When docs conflict with code: **code wins**; mark the conflict as a gap.

## Relation to Transmission Guide

| Corpus | Role |
|---|---|
| `sfia-studio-transmission-guide.md` | Bootstrap / why / pedagogy / capitalization chronology |
| `production-runtime-reference/` | Current machine / how it works **now** |

Do not treat the Transmission Guide as the as-implemented oracle.

## Volumes

| File | Purpose |
|---|---|
| [01-system-runtime-overview.md](./01-system-runtime-overview.md) | System map, composition, layers |
| [02-runtime-object-catalog.md](./02-runtime-object-catalog.md) | Runtime objects |
| [03-end-to-end-flow-catalog.md](./03-end-to-end-flow-catalog.md) | E2E flows F01–F20 |
| [04-dependency-impact-map.md](./04-dependency-impact-map.md) | Dependencies + impact procedure + samples |
| [05-environments-configuration-and-boundaries.md](./05-environments-configuration-and-boundaries.md) | Env/config / Fake-Real |
| [06-persistence-restart-and-recovery.md](./06-persistence-restart-and-recovery.md) | Stores + restart matrix |
| [07-authority-invariants-and-failure-modes.md](./07-authority-invariants-and-failure-modes.md) | Invariants + failure modes |
| [08-test-proof-and-conformance-map.md](./08-test-proof-and-conformance-map.md) | Tests / oracles / bypasses |
| [09-known-gaps-reserves-and-current-boundaries.md](./09-known-gaps-reserves-and-current-boundaries.md) | Gaps + campaign findings |
| [production-runtime-reference.manifest.json](./production-runtime-reference.manifest.json) | Machine-readable index |

## Living maintenance contract

**Proportionnalité — lecture seule vs Delivery (AKG-M0 clarification):**

| Mode | Obligations |
|---|---|
| **Analyse read-only** (architecture / impact / rationalisation sans mutation Product) | Consulter les volumes PRR **applicables** ; qualifier le code CURRENT ; étudier dépendances ; identifier impacts, risques, preuves et gaps. **Aucune** obligation automatique de lancer des tests ni de modifier la PRR. |
| **Delivery** (changement qui modifie réellement le comportement / chemins trackés) | Analyser impacts ; sélectionner tests pertinents ; vérifier invariants applicables ; synchroniser sections PRR si la sémantique change ; qualifier `NO SEMANTIC IMPACT` si inchangée ; rafraîchir digests concernés **seulement après** revue sémantique. |

Un seul contrat living — deux **modes d’application**. La proportionnalité reste obligatoire.

For any Studio change touching tracked paths in the manifest — and for **architecture-informed** analyses of Studio behaviour (even read-only):

1. **Consult beforehand** the applicable PRR volumes (proportionate selection — not necessarily all volumes).
2. Run **impact analysis** (see volume 04): direct and indirect impacts.
3. Review affected object cards, flows, dependencies, invariants.
4. Review env / persistence / restart if applicable.
5. Record **coverage status** for touched domains (DOCUMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / KNOWN GAP).
6. Run mapped regression tests when behaviour is at stake (**Delivery** with behavioural risk — not automatic for pure read-only analysis).
7. Update architecture **content** if semantics changed (documentary continuity) — **Delivery** when semantics move.
8. Record `NO SEMANTIC IMPACT` when only implementation changed without semantic shift.
9. Refresh digests **only after** human/ChatGPT **semantic** review of content.
10. Keep non-claims honest (no P6 GLOBAL PASS / runtime v3 ADOPTED inflation).

**AUTOMATE DRIFT DETECTION — NEVER AUTOMATE STRUCTURAL ARBITRATION.**

A digest mismatch means: `REFERENCE REVIEW REQUIRED`.
Refreshing a digest ≠ validating semantic correctness.
Documentary sync is a **validation criterion** of the change set when semantics move.

## Conformance tooling

- Manifest: `production-runtime-reference.manifest.json`
- Checker script: `projects/sfia-studio/app/scripts/check-production-runtime-reference.mjs`
- Vitest: `projects/sfia-studio/app/__tests__/architecture/productionRuntimeReference.conformance.d0.test.ts`

## Explicit non-claims

- Runtime v3 **NON ADOPTED**
- Product Journey **not** declared READY
- E2E REAL **not** declared PROVEN
- PocketTasks campaign gaps are recorded, not fixed here
