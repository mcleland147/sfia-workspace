# Product Completion — Cycle 6 Targeted Technical Architecture Delta
## Truth & Authority Durability

| Métadonnée | Valeur |
| --- | --- |
| **Project** | SFIA Studio — Product Completion |
| **Cycle** | **6 — Architecture technique** |
| **Profile** | **CRITICAL** |
| **Typology** | **DOC** |
| **Milestone** | PRODUCT COMPLETION — CYCLE 6 — TARGETED TECHNICAL ARCHITECTURE DELTA — TRUTH & AUTHORITY DURABILITY |
| **Git base** | `origin/main` @ `e21803b1b316627a9dc917465707e96443378913` (PR **#383** merge — C6 documentary closure) |
| **Post-merge CI entry proof** | SFIA Studio CI run **`32473181947`** · event `push` · branch `main` · headSha `e21803b1…` · conclusion **success** |
| **Morris start GO** | **CONSUMED** — GO MORRIS — START CYCLE 6 TARGETED TECHNICAL ARCHITECTURE DELTA — ARCHITECTURE / ANALYSIS ONLY |
| **Morris architecture validation** | **CONSUMED** — MORRIS VALIDATION — CYCLE 6 TARGETED TECHNICAL ARCHITECTURE — ADOPT C6-R1 CONSOLIDATED ARCHITECTURE DIRECTION · **2026-08-21 Europe/Paris** |
| **ChatGPT final documentary review** | **PASS** |
| **Morris Git integration GO** | **CONSUMED** — commit exact 2 files · push source branch · Draft PR #382 · later merge under distinct Morris gate |
| **PR #382** | **MERGED** · source head `fe46d2c117e2c3314af885e1a19a0f0c4e4c3ce0` · merge `641cf9b3ed6c0f879c932bfe535ed4876ee08969` · PR CI `32469751405` **SUCCESS** · post-merge CI `32470240316` **SUCCESS** |
| **Original architecture source branch** | `docs/sfia-studio-product-completion-c6-technical-architecture-delta` @ `fe46d2c1…` · **PRESERVED** |
| **Morris post-merge GO (architecture)** | **CONSUMED** — GO MORRIS — C6 POST-MERGE DOCUMENTARY COHERENCE + EXIT QUALIFICATION ONLY |
| **Morris C6 closure decision** | **CONSUMED** — ACCEPT C6 EXIT PROOF + CLOSE C6 · TD-C6-01…06 REMAIN ADOPTED |
| **C6 EXIT PROOF** | **ACCEPTED BY MORRIS** |
| **C6 status** | **CLOSED BY MORRIS** · ≠ IMPLEMENTED · ≠ MIGRATED · ≠ runtime durability complete · ≠ BACKLOG · ≠ DELIVERY · ≠ REAL · ≠ Product Completion complete · ≠ RUNTIME V3 ADOPTED |
| **PR #383** | **MERGED** · source head `c0cd769ea2054cee8794ca05175e7e870e50e9c7` · merge `e21803b1b316627a9dc917465707e96443378913` · PR CI `32472673361` **SUCCESS** · post-merge CI `32473181947` **SUCCESS** |
| **Closure source branch** | `docs/sfia-studio-product-completion-c6-post-merge-closure` @ `c0cd769e…` · **PRESERVED** |
| **Closure documentary sync** | **INTEGRATED ON MAIN VIA PR #383** |
| **C6 POST-MERGE TRUTH** | **PASS / SATISFIED** (exact content blobs match · post-merge CI SUCCESS) |
| **Morris post-merge truth GO** | **CONSUMED** — GO MORRIS — C6 POST-MERGE COHERENCE SYNC + TRUTH QUALIFICATION ONLY · historical local-only truth-sync pass *(superseded by PR **#384** transport)* |
| **Final documentary coherence transport** | **PR #384** = controlled Git transport vehicle · current integration state **RESOLVE FROM GIT** · this document does **not** hard-code Draft/open/merged as a durable invariant |
| **Candidate status** | **C6 CONSOLIDATED TECHNICAL ARCHITECTURE — TD-C6-01…06 ADOPTED BY MORRIS — ARCHITECTURE INTEGRATED ON MAIN VIA PR #382 — CLOSURE DOCUMENTATION INTEGRATED ON MAIN VIA PR #383 — POST-MERGE TRUTH SATISFIED — EXIT PROOF ACCEPTED BY MORRIS — C6 CLOSED BY MORRIS — FINAL DOCUMENTARY COHERENCE TRANSPORTED VIA PR #384 — CURRENT PR/INTEGRATION STATE RESOLVE FROM GIT — NOT IMPLEMENTED — NO BACKLOG — NO DELIVERY — ZERO REAL — RUNTIME V3 NON ADOPTED** |
| **Truth-sync source branch** | `docs/sfia-studio-product-completion-c6-post-merge-truth-sync` · **PUSHED** · PR **#384** source branch |
| **Primary path** | `projects/sfia-studio/product-completion/06-product-completion-architecture-technique-delta.md` |
| **Runtime v3** | **NON ADOPTED** |
| **Delivery / Backlog / REAL** | **NOT AUTHORIZED** · **ZERO REAL** |
| **CKC** | pilot `03-architecture-technique.md` candidate 0.1.0 — **experimental guidance only · NO execution authority** |

---

## 1. Purpose / non-goals

### Purpose

Concevoir **COMMENT** fermer, sous OA Native Backbone + Product SQLite existants, les gaps déjà qualifiés par C1 / C2 / Functional Architecture :

1. **ProjectTrajectory** active/décidée — durabilité ou reconstruction fiable ;
2. **Confirmation consommée** portant autorité — durabilité / auditabilité / reconstruction ;
3. **EpistemicItems matérialisés** (notamment Recommendation active) — qualification sélective de la durabilité vraiment nécessaire ;
4. **Invariants techniques** : atomicité, UoW, idempotence, restart/recovery, audit et reconstruction honnête de l’autorité.

### Non-goals (STRICT)

- ≠ implémentation / migration exécutable / code / tests Delivery
- ≠ Backlog / User Stories / Delivery / REAL / Gate D
- ≠ rouvrir OA / Product SQLite / stack / DB / API gateway
- ≠ greenfield architecture / parallel engine
- ≠ redesign UX / Components / H-01…H-04 / SC-02
- ≠ modification C1/C2/FA/Build Doctrine/framing v3
- ≠ adoption runtime v3
- ≠ implementation / Delivery malgré **ARCHITECTURE DIRECTION ADOPTED**
- ≠ claim Product Completion complete

---

## 2. Source authority model

| Source | Rôle | Autorité |
| --- | --- | --- |
| Git + runtime courant sous `projects/sfia-studio/app/lib/oa/**` | SoT technique factuel | **PRIMARY** pour inventory |
| Morris construction decisions | GO start C6 ; C6-R1 consolidated adoption (TD-C6-01…06) ; trajectoire Governance → C6 → requalification | **PRIMARY** pour gates |
| C1 cadrage | Target / completion bar / MUST durability | **PRIMARY** WHAT |
| C2 conception | Ordre Prepare→Inspect→Confirm→authority→Execute | **PRIMARY** comportement |
| Functional Architecture (Cycle 3) | Qualification delta ciblé ; ownership FC | **PRIMARY** frontières |
| Build Doctrine A3 | Ordre d’autorité aligné (RESERVE-GOV-EC-ORDER **CLOSED**) | **KEEP** |
| Product Experience UX docs | Contrats Trajectory/Confirmation/Recovery | READ ONLY |
| Framing v3 `31`–`35` | Doctrine produit cible | READ ONLY · ≠ runtime ADOPTED |
| Processus SFIA v2.6 + CKC Architecture technique | Process only | **NO execution authority** |
| Architecture direction (ce document) | TD-C6-01…06 **ADOPTED BY MORRIS** | Architecture direction ≠ implementation · remaining gates = documentary/Git only |

---

## 3. Convergence qualification

| Champ | Contenu |
| --- | --- |
| **Capability v3** | Truth & Authority Durability — V3-F06 Trajectory · V3-F04/F08 Epistemology · V3-F07 Provenance · V3-F11/F12 Authority/execution governance · C1 semantic continuity |
| **Current state** | Architecture **INTEGRATED ON MAIN** via PR **#382** · closure documentation **INTEGRATED ON MAIN** via PR **#383** (`e21803b1…` · head `c0cd769e…`) · PR CI `32472673361` SUCCESS · post-merge CI `32473181947` SUCCESS · content truth PASS · **C6 POST-MERGE TRUTH SATISFIED** · C6-R1 / TD-C6-01…06 **ADOPTED BY MORRIS** · **C6 EXIT PROOF ACCEPTED BY MORRIS** · **C6 CLOSED BY MORRIS** · final documentary coherence **TRANSPORTED VIA PR #384** · current PR/integration state **RESOLVE FROM GIT** · **NOT IMPLEMENTED** · runtime implementation **OPEN / NOT AUTHORIZED** · runtime v3 **NON ADOPTED** |
| **Dependencies** | C1/C2/FA/UX integrated · Build Doctrine order aligned · Product SQLite M1–M5 durable backbone KEEP |
| **Assets** | OA KEEP · Product SQLite KEEP · existing ports KEEP · Memory Trajectory/Confirmation/Epistemic → COMPLETE/ADAPT under adopted direction · Authority Memory + receipts QUALIFY |
| **Gaps closed by C6 (design)** | Trajectory durability · Confirmation lifecycle from `granted` · selective Epistemic by materialization · AuthorityVerificationReceipt audit · U2/U2b execution checkpoints |
| **Critical path** | PR **#384** transport vehicle (state **RESOLVE FROM GIT**) → **IF** Git proves PR **#384** integrated on main **AND** post-merge truth satisfied → **NEXT-CYCLE REQUALIFICATION** · capability selection **NONE / NOT YET** · Delivery only under later distinct GO |
| **Exit proof C6 (documentary)** | TD-C6-01…06 adopted · consolidated corrections applied · Review Pack FULL · no unauthorized implementation claims |
| **Debt / exit** | Runtime durability remains OPEN until Delivery · H-01…H-04 CARRY · UAT OPEN · SC-02 NON-BLOCKING · Pre-M6 debt CARRY · M5-C journal debt OPEN |
| **Next ordered step after C6 exit** | **NEXT-CYCLE REQUALIFICATION** — only **IF** Git proves PR **#384** integrated on main **AND** post-merge truth satisfied · **NOT EXECUTED** · ≠ capability · ≠ Backlog auto · ≠ Delivery auto |
| **Next capability** | **NONE / NOT YET** — to be determined only by NEXT-CYCLE REQUALIFICATION + applicable Morris decision/gate · next cycle **NOT SELECTED** |

---

## 4. Current-state technical inventory (repo-first)

### 4.1 Exact runtime files inspected

| Area | Exact path | Durability |
| --- | --- | --- |
| Trajectory port | `app/lib/oa/cycle/ports/trajectoryRepository.ts` | interface |
| Trajectory Memory | `app/lib/oa/cycle/infrastructure/memoryTrajectoryRepository.ts` | **Memory** |
| Epistemic port | `app/lib/oa/cycle/ports/epistemicRepository.ts` | interface |
| Epistemic Memory | `app/lib/oa/cycle/infrastructure/memoryEpistemicRepository.ts` | **Memory** |
| Memory cycle store | `app/lib/oa/cycle/infrastructure/memoryCycleStore.ts` | **Memory** |
| Cycle SQLite factory | `app/lib/oa/cycle/infrastructure/sqlite/createSqliteCycleServices.ts` | Cycle durable · Trajectory/Epistemic **Memory** |
| Cycle SQLite repo | `app/lib/oa/cycle/infrastructure/sqlite/sqliteCycleRepository.ts` | **SQLite** |
| Confirmation port | `app/lib/oa/decision/ports/confirmationRepository.ts` | interface |
| Confirmation Memory | `app/lib/oa/decision/infrastructure/memoryConfirmationRepository.ts` | **Memory** |
| Decision Memory store | `app/lib/oa/decision/infrastructure/memoryDecisionStore.ts` | **Memory** |
| Decision SQLite factory | `app/lib/oa/decision/infrastructure/sqlite/createSqliteDecisionServices.ts` | HD durable · Confirmation **Memory** · Authority default **Memory** |
| Decision SQLite repo | `app/lib/oa/decision/infrastructure/sqlite/sqliteDecisionRepository.ts` | **SQLite** |
| Authority port | `app/lib/oa/decision/ports/authorityResolver.ts` | interface |
| Authority Memory | `app/lib/oa/decision/infrastructure/memoryAuthorityResolver.ts` | **Memory only implementor** |
| Product store / UoW | `app/lib/oa/project/infrastructure/sqlite/sqliteProductStore.ts` | **SQLite shared UoW** |
| Product handle | `app/lib/oa/project/infrastructure/sqlite/productSqliteHandle.ts` | shared handle |
| Schema / migrations | `app/lib/oa/project/infrastructure/sqlite/db.ts` | M1→M2→M3→M5 · **no** trajectory/confirmation/epistemic/authority tables |
| Vertical-slice wiring | `app/lib/vertical-slice-runtime/service.ts` | shared Product SQLite + MemoryAuthorityResolver |
| Domain types cycle | `app/lib/oa/cycle/domain/types.ts` | `ProjectTrajectory` · `EpistemicItem` |
| Domain types decision | `app/lib/oa/decision/domain/types.ts` | `Confirmation` · `AuthorityEvidence` |
| Consume / start path | `app/lib/oa/execution-attempt/application/startExecution.ts` | Attempt may already be `accepted` before StartExecution · consumes Confirmation at authority-to-execute · **≠** invent second Attempt lifecycle |

### 4.2 Durability matrix (observed)

| Aggregate | Current | Target (C1/FA) |
| --- | --- | --- |
| Project / LPS | Product SQLite | KEEP |
| CycleInstance | Product SQLite | KEEP |
| HumanDecision | Product SQLite | KEEP |
| ExecutionContract | Product SQLite | KEEP |
| ExecutionAttempt / Evidence / ReviewBundle | Product SQLite | KEEP |
| **ProjectTrajectory** | **Memory** (even under SQLite cycle factory) | **MUST durable or reliable reconstruction** |
| **Confirmation** | **Memory / process-local** | **`granted`+ later MUST durable** · `requested` ephemeral by default |
| **EpistemicItem** | **Memory** | **SELECTIVE-BY-MATERIALIZATION** |
| **AuthorityEvidence** | **Memory only** | Registrar may stay Memory · **AuthorityVerificationReceipt** durable for audit |

### 4.3 Domain shape (existing — reuse)

**ProjectTrajectory** (`schemaVersion: 0.1.0-oa`): `trajectoryId`, `projectId`, `version`, `status` ∈ {candidate, validated, active, stale, superseded}, `steps[]`, `supersedesTrajectoryVersion?`.

**Confirmation**: `confirmationId`, `level` N1|N2|N3, `actionRef`, actors, `scope`, `status` ∈ {requested, granted, refused, expired, cancelled, consumed, superseded}, `idempotencyKey`, optional `decisionRef` / impacts / risks / timestamps / provenance.

**EpistemicItem**: types Observation|Hypothesis|Option|Recommendation|DecisionRef|Reservation|Contradiction|EvidenceRef ; status active|superseded|rejected|resolved.

**AuthorityEvidence**: `evidenceId`, `actorId`, `level`, `scope`, `issuedAt`, `expiresAt?`, `source`, `canActAsMorris?`.

### 4.4 Facts confirmed

- CycleInstance / HumanDecision / EC / Attempt durable Product SQLite — **CONFIRMED**
- ProjectTrajectory / Epistemic / Confirmation / Authority still Memory — **CONFIRMED**
- Product SQLite selected & shared — **CONFIRMED**
- No SQLite trajectory/confirmation/epistemic/authority tables — **CONFIRMED**
- Runtime does **not** contradict C6 entry assumptions — **PASS**

---

## 5. Non-negotiable invariants (already decided)

1. OA Native Backbone G0-A = **KEEP**
2. Product SQLite G0-B = **KEEP** — no DB technology re-decision
3. Existing ports = **KEEP** — adapters under ports, not new domains
4. No parallel engine / no greenfield / no API gateway redesign
5. Execution order (Build Doctrine A3 + C2 + FA):
   HumanDecision → EC Prepare → EC Inspect → Confirmation if required → effective authority / executor sufficiency → Execute
6. Confirmation = scoped consent after inspect — **≠** global permission · **≠** pre-inspect authorization
7. Recommendation ≠ HumanDecision ≠ Fact
8. Never invent missing HD / Confirmation / decided Trajectory / authority on restart
9. Fail-closed on missing/corrupt authority-bearing state
10. Runtime v3 **NON ADOPTED** · ZERO REAL · no v2.6 runtime dependency

---

## 6. ProjectTrajectory technical delta

### Problem

Active/validated/decided trajectory versions live only in process memory. Restart loses continuity required by C1 MUST / FC-06.

### Options analysed (preserved)

| ID | Option | Summary |
| --- | --- | --- |
| **T-A** | **Direct Product SQLite aggregate under `TrajectoryRepositoryPort`** | `oa_project_trajectories` + explicit `oa_project_trajectory_current` locator · `payload_json` + indexed columns + OCC/version |
| **T-B** | **Reconstruction-primary** | Rebuild “current” from HumanDecision + LPS + audit ; minimal pointer only |

| Criteria | T-A Direct SQLite | T-B Reconstruction |
| --- | --- | --- |
| C1 continuity | Strong — exact version reload | Weaker — rebuild may drift from runtime steps |
| Complexity | Medium — known SQLite repo pattern | High — reconstruction rules + edge cases |
| Audit | Version rows + audit journal | Depends on HD/LPS completeness |
| Migration | Empty→forward for new writes ; Memory history irrecoverable | No table ; disclose Memory loss |
| Reversibility | Adapter swap behind port | Harder semantic coupling |
| Risk | Bounded growth of versions | Incorrect reconstruction = false continuity |

### Decision — **TD-C6-01 = T-A**

**ADOPTED BY MORRIS — ARCHITECTURE DIRECTION — 2026-08-21 Europe/Paris**

Persist `ProjectTrajectory` versions in Product SQLite behind existing `TrajectoryRepositoryPort`, with:

- indexed: `trajectory_id`, `project_id`, `version`, `status`, `updated_at`
- `payload_json` full aggregate
- uniqueness `(project_id, version)`
- **`oa_project_trajectory_current`** = **locator / projection only** · **≠ second SoT**
- truth of trajectory = **version rows**
- current pointer targets **only** the trajectory that is **effectively active/decided**
- a trajectory that is only **proposed** remains a **Recommendation** · may be versioned/materialized · **never** becomes current effective trajectory without applicable HumanDecision
- `markSuperseded` updates prior version status atomically with save of new version + current-pointer update in same Product UoW (U1)

**Rejected as primary:** T-B alone.

**≠ IMPLEMENTED · ≠ MIGRATED**

---

## 7. Confirmation / authority technical delta

### Problem

Confirmations and authority evidence are process-local. After restart, an Attempt may exist without reconstructible consent/authority basis → violates FC-09 / fail-closed recovery.

### Confirmation options analysed (preserved)

| ID | Option | Summary |
| --- | --- | --- |
| **C-A** | **Durable Confirmation aggregate (from `granted` upward)** | Persist `granted` / `consumed` / terminal states under `ConfirmationRepositoryPort` ; `requested` ephemeral by default |
| **C-B** | **Consumed-only + authority receipt** | Persist only `consumed` + Attempt-attached snapshot |

### Authority options analysed (preserved)

| ID | Option | Summary |
| --- | --- | --- |
| **A-A** | **AuthorityVerificationReceipt (immutable snapshot)** | Persist evaluation proof used for a given Attempt/EC context · **≠** durable IAM |
| **A-B** | **Durable AuthorityEvidence registry** | Full resolver-backed SQLite evidence store |

### Decision — **TD-C6-02 = C-A** · **TD-C6-05** · **TD-C6-03 = A-A**

**ADOPTED BY MORRIS — ARCHITECTURE DIRECTION — 2026-08-21 Europe/Paris**

#### Confirmation (TD-C6-02 + TD-C6-05)

- Product SQLite `oa_confirmations` behind existing `ConfirmationRepositoryPort`
- Durable **minimum** from **`granted`** and later useful states. Conceptual mapping to current domain taxonomie (`requested` · `granted` · `refused` · `expired` · `cancelled` · `consumed` · `superseded`) :
  - **`requested`** = **EPHEMERAL / process-local by default**
  - durable : **`granted`**, **`consumed`**, **`expired`**, **`cancelled`**, **`refused`**, **`superseded`** (and any Delivery mapping of “invalidated” onto existing terminals — do not invent enums beyond domain)
- Unique `idempotencyKey`
- Consume = OCC status transition (`granted` → `consumed`) fail-closed if already consumed
- Confirmation remains **scoped consent after EC inspect** — store `actionRef` / `scope` / `level` / linkage to EC/HD/Cycle/Project as available · never unbounded permission

**Normative semantics of restored `granted`:**

```text
Persisted Confirmation status = granted
= prior scoped consent known / auditable
≠ current effective authority
≠ permanent permission
≠ automatic right to execute after restart
```

Before any new execution, **full revalidation** of all still-applicable conditions is mandatory:

- exact ExecutionContract
- EC version / semantic fingerprint
- scope / action / target
- applicable HumanDecision
- AgentCapability / policy
- runtime guardrails
- protected boundaries
- Confirmation validity / expiry
- material context
- executor sufficiency

If revalidation is impossible → **fail-closed** → re-inspect / re-confirm / requalify / STOP by cause.

#### AuthorityVerificationReceipt (TD-C6-03)

**Normative effective-authority formula (Build Doctrine / C2):**

```text
valid human authorization
∩ ExecutionContract scope
∩ AgentCapability / policy
∩ runtime guardrails
∩ valid required Confirmations
= effective authority
```

AuthorityVerificationReceipt:

- is a **PROOF / SNAPSHOT** of that evaluation
- is **NOT** an additional intersection term
- is **NOT** a permission layer
- is **NOT** reusable to authorize a future execution
- is **AUDIT ONLY** for historical Attempts

Conceptual required information (concrete schema fields deferred to Delivery; do not invent unsupported closed invariants):

- `receiptId`
- Attempt ID
- ExecutionContract ID
- EC version
- semantic fingerprint
- actor
- applicable HumanDecision / authorization refs
- applicable Confirmation ref(s)
- required authority
- verified authority
- action / target / scope
- AgentCapability / policy ref/version/digest when existent
- guardrails / protected-boundary context when pertinent
- evidence IDs used
- verification result
- `verifiedAt`
- executor sufficiency result/ref **if** actually available in model

MemoryAuthorityResolver may remain session/runtime registrar. **A-B not adopted.**

**≠ IMPLEMENTED · ≠ IAM redesign**

---

## 8. Epistemic durability — **E-A SELECTIVE-BY-MATERIALIZATION**

### Options analysed (preserved)

| ID | Option | Summary |
| --- | --- | --- |
| **E-A** | Selective Product SQLite Epistemic store under `EpistemicRepositoryPort` | Materialization-driven selection |
| **E-B** | No Epistemic table — reconstruct from LPS/HD only | |

### Decision — **TD-C6-04 = E-A SELECTIVE-BY-MATERIALIZATION**

**ADOPTED BY MORRIS — ARCHITECTURE DIRECTION — 2026-08-21 Europe/Paris**

Primary durability criterion is **not type alone**. Primary criterion:

> Has this EpistemicItem been **explicitly materialized** as necessary to Project truth, current arbitration, provenance, or semantic resume?

When materialized, coverage includes:

- Observation
- Fact
- Hypothesis **with its status**
- Option **with its status**
- Recommendation active / materialized
- blocking Contradiction
- Reserve / Risk pertinent to continuity
- refs to HumanDecision / Evidence rather than content duplication when possible

Must **not** be persisted automatically:

- raw internal reasoning / chain-of-thought
- non-materialized working drafts
- Hypotheses/Options never presented
- internal scores not required for Project State
- purely transient conversation

Persistence **never** changes epistemic level:

- persisted Hypothesis ≠ Fact
- persisted Option ≠ Recommendation
- persisted Recommendation ≠ HumanDecision

**≠ IMPLEMENTED**

---

## 9. Transaction, atomicity, idempotence, concurrency, restart

### Reuse

`SqliteProductStore.runInTransaction` (`BEGIN IMMEDIATE`) — **KEEP**.

### Required atomic / checkpoint units (design)

| Unit | Meaning | Why |
| --- | --- | --- |
| **U1** Trajectory advance | save new version + supersede prior + update **current pointer** atomically | Avoid two effectives / lost supersede |
| **U2** Authority-to-execute checkpoint | For an Attempt **already candidate for execution** (runtime may already have Attempt `accepted` before StartExecution), the required Confirmation consumption (when applicable), effective-authority verification proof, AuthorityVerificationReceipt, and durable execution-intent/checkpoint marker (if needed) form one coherent idempotent frontier bound to the **same Attempt + same EC/version/fingerprint** | Prevent ambiguous authorize/consume crash windows **without** inventing a second Attempt lifecycle |
| **U2b** External-effect acknowledgement transition | After real acknowledgement of the execution frontier, durable transition toward running/executing is **idempotent**, forbids second launch on replay, and treats crash ambiguity fail-closed / reconciliation when external effect is indeterminate | Harvest M4 safety-journal **patterns** only if pertinent · **≠** promote M5-C / historical safety journal as Product Store default · **≠** REAL expansion |
| **U3** Structuring HD ↔ decided Trajectory | Only when a HumanDecision’s scope is adoption/amendment of Trajectory: link HD with the **effectively decided** Trajectory version | Not every HD modifies Trajectory |

**INTERDIT (removed as active invariant):** presenting U2 as generic “Confirmation consume + Attempt create”.

### Idempotence

- Confirmation: durable unique `idempotencyKey`
- Trajectory: `(project_id, version)` unique ; retries reuse same version write
- U2/U2b: checkpoint / ack markers idempotent under StartExecution replay
- Attempt creation patterns: reuse existing M5 idempotency — do not redesign lifecycle

### Concurrency

- OCC on trajectory version / current pointer
- Consume Confirmation: single-row status CAS
- Stale read: fail-closed → reload → re-inspect / reconfirm / revalidate as required by C2

### Restart semantics

| Missing state | Behavior |
| --- | --- |
| Active/decided trajectory missing | Disclose · requalify · never invent decided · proposed ≠ current |
| Consumed Confirmation missing but Attempt exists | Fail-closed / quarantine · disclose · do not re-execute as authorized |
| Granted Confirmation restored | Auditable prior consent only · **full revalidation required** before execute |
| Requested Confirmation missing | Ephemeral by default · re-request if still needed |
| Active/materialized Recommendation missing | Disclose · regenerate as Recommendation (≠ Decision) |
| Receipt present, live evidence missing | Receipt = historical audit only · new execute needs fresh verify |
| Receipt missing/corrupt on historical Attempt | Disclose / quarantine · no silent authorize |

---

## 10. Data ownership and repository / UoW boundaries

| Concern | Owner domain | Port | Adapter target (architecture direction) |
| --- | --- | --- | --- |
| Trajectory | OA Cycle | `TrajectoryRepositoryPort` | `SqliteTrajectoryRepository` **ADOPTED direction · NOT IMPLEMENTED** |
| Epistemic | OA Cycle | `EpistemicRepositoryPort` | `SqliteEpistemicRepository` selective-by-materialization **ADOPTED direction · NOT IMPLEMENTED** |
| Confirmation | OA Decision | `ConfirmationRepositoryPort` | `SqliteConfirmationRepository` **ADOPTED direction · NOT IMPLEMENTED** |
| Authority verify | OA Decision | `AuthorityResolverPort` | Memory registrar + **AuthorityVerificationReceipt** persistence **ADOPTED direction · NOT IMPLEMENTED** |
| UoW | Product | `SqliteProductStore` | KEEP shared |

Factory wiring replacements are **Delivery-only**.

---

## 11. Failure / recovery scenarios (mandatory)

| # | Scenario | Design response |
| --- | --- | --- |
| 1 | Crash before U2 checkpoint | No authorize/consume frontier committed · safe retry from accepted Attempt path |
| 2 | Crash after U2 checkpoint but before external effect | Checkpoint durable · no second authorize · proceed to U2b or reconcile fail-closed |
| 3 | External effect launched but ack durable absent | Ambiguity → reconciliation / STOP · **no silent retry launch** |
| 4 | Ack present but Attempt not transitioned to running/executing | Idempotent U2b completion · no second launch |
| 5 | Replay StartExecution | U2/U2b idempotency · forbid double launch |
| 6 | Receipt missing/corrupt on historical Attempt | Disclose/quarantine |
| 7 | Confirmation already consumed | Reject reuse · CAS fail-closed |
| 8 | Consumed Confirmation reloaded as available | Impossible if status durable `consumed` |
| 9 | Restart, current effective Trajectory missing | Disclose · requalify ; T-A + pointer prevent for new writes |
| 10 | Concurrent/stale Trajectory versions | OCC + supersede + pointer consistency |
| 11 | Proposed trajectory treated as current | Forbidden by TD-C6-06 |
| 12 | Materialized Hypothesis/Option missing or promoted | Restore with same epistemic level · refuse illegal promotion |
| 13 | Orphan Project/Cycle/HD/EC/Confirmation/Attempt relations | Logical checks at write · recovery disclose |
| 14 | Structuring HD without Trajectory update when required | Enforce U3 only for trajectory-scoping HD |

---

## 12. Options summary → adopted outcomes

Already decided beforehand: OA KEEP · Product SQLite KEEP · ports KEEP · EC/Confirmation order KEEP.

| ID | Options | Adopted |
| --- | --- | --- |
| **TD-C6-01** | T-A / T-B | **T-A** |
| **TD-C6-02** | C-A / C-B | **C-A** |
| **TD-C6-03** | A-A / A-B | **A-A** |
| **TD-C6-04** | E-A / E-B | **E-A SELECTIVE-BY-MATERIALIZATION** |
| **TD-C6-05** | granted-upward vs consumed-only | **durable from `granted` upward** · `requested` ephemeral |
| **TD-C6-06** | explicit current pointer vs status-only | **explicit current pointer** · effective active/decided only |

---

## 13. Architecture package **C6-R1** (adopted direction)

**Tag: ADOPTED BY MORRIS — ARCHITECTURE DIRECTION — 2026-08-21 Europe/Paris**

**C6-R1 — Port-preserving Product SQLite durability delta:**

1. Trajectory versions in Product SQLite + explicit current pointer (locator only).
2. Confirmations durable from `granted` upward ; `requested` ephemeral ; CAS consume.
3. AuthorityVerificationReceipt immutable audit snapshot of effective-authority evaluation.
4. Epistemic selective-by-materialization (incl. Hypothesis/Option when materialized).
5. Shared `SqliteProductStore` UoW ; enforce U1 / **U2 authority-to-execute checkpoint** / **U2b external-effect ack** / U3 when applicable.
6. No new stack, no parallel engine, no IAM redesign, no Confirmation-before-inspect, no second Attempt lifecycle.

**≠ IMPLEMENTED · ≠ MIGRATED · ≠ DELIVERY AUTHORIZED**

---

## 14. Data model / persistence delta (conceptual only)

> ≠ executable migration · ≠ SQL to run · ≠ schema code commit
> Status: **ADOPTED ARCHITECTURE DIRECTION** · **NOT IMPLEMENTED**

### Conceptual structures

**`oa_project_trajectories`** (SoT for versions)
- PK `trajectory_id`
- `project_id`, `version` UNIQUE(project_id, version)
- `status`, `supersedes_version` NULL
- `payload_json`, timestamps, `schema_version`

**`oa_project_trajectory_current`** (locator/projection only · ≠ second SoT)
- PK `project_id` → `trajectory_id`, `version`, `occ_token`
- points only to **effective active/decided** trajectory

**`oa_confirmations`**
- PK `confirmation_id` · UNIQUE `idempotency_key`
- logical links Project/Cycle/HD/EC as available
- `action_ref`, `level`, `scope`, `status`
- durable statuses from `granted` upward · `requested` not required durable
- `payload_json`, timestamps, `schema_version`

**`oa_authority_verification_receipts`**
- PK `receipt_id`
- bindings: Attempt, EC id/version/fingerprint, actor, HD/auth refs, Confirmation refs, required/verified authority, action/target/scope, policy refs when existent, guardrail context, evidence IDs, result, `verifiedAt`, executor sufficiency if available
- **audit only · never reusable authorization**

**`oa_epistemic_items`**
- PK `epistemic_item_id`
- `project_id`, `type`, `status`, `blocking`, **`materialized` BOOL**
- must allow materialized Hypothesis / Option / Observation / Fact / Recommendation / Contradiction / Reserve
- `payload_json`, `created_at`, `supersedes`, `schema_version`
- index `(project_id, type, status, materialized)`

Schema version bump conceptual: **`m6-truth-authority-0.1.0`** additive after `m5-0.1.0` — **Delivery gate only**.

---

## 15. Migration / backfill / compatibility strategy (architecture only)

| Topic | Proposal |
| --- | --- |
| Historical Memory data | **Irrecoverable** across process boundary — disclose as Pre-C6 debt · no fake backfill |
| Forward path | New writes to SQLite adapters after Delivery GO |
| Old DBs | Additive migration fail-closed on unknown versions (existing pattern) |
| Dual-read | Not required if cutover is single factory swap behind ports |
| Compatibility | Domain `schemaVersion: 0.1.0-oa` payloads retained |

---

## 16. Security / authority audit (bounded RSSI lens)

**Normative formula (do not replace with “receipt ∩ …”):**

```text
valid human authorization
∩ ExecutionContract scope
∩ AgentCapability / policy
∩ runtime guardrails
∩ valid required Confirmations
= effective authority
```

- AuthorityVerificationReceipt = **audit evidence of evaluated effective authority** · **≠ authority source**
- Restored Confirmation `granted` ≠ authorization replay
- Non-replay / non-double-consume: durable consumed status + idempotency + U2/U2b
- Fail-closed: missing/corrupt receipt/Confirmation/Trajectory ⇒ block execute / disclose
- Provenance fields kept ; receipts immutable
- No Auth.js/IAM redesign
- Hostile client `authorityLevel` ignored (existing AuthorityResolver rule) — preserved

---

## 17. Relevant NFR

| NFR | Note |
| --- | --- |
| Integrity / consistency | U1 / U2 / U2b / U3 + OCC |
| Restart safety | Durable Trajectory · `granted`+ Confirmations · receipts |
| Auditability | Receipts + confirmation lifecycle |
| Authority security | Fail-closed · scoped consent · no receipt replay |
| Maintainability | Port-preserving adapters |
| Testability | Restart / checkpoint / materialization proofs |
| Recoverability | Disclose · revalidate · reconfirm · requalify |
| Data growth | Selective-by-materialization · trajectory versions via supersede |

No invented SLA/latency/HA numbers — **none sourced**.

---

## 18. Future test / evidence strategy (Delivery — not this cycle)

**Trajectory**
- exact restart reload
- proposed ≠ current decided
- concurrent OCC
- pointer consistency with version SoT
- supersede atomicity (U1)

**Confirmation**
- grant persistence
- restart then **full revalidation** before execute
- consume CAS / double consume
- stale/expired fail-closed
- `requested` remains ephemeral by default

**Authority**
- receipt generated from exact EC/version/fingerprint
- receipt audit after restart
- receipt **cannot** authorize new execute
- missing receipt on historical Attempt disclosed/quarantined

**Epistemic**
- materialized Hypothesis survives restart **as Hypothesis**
- materialized Option survives **as Option**
- Recommendation survives **as Recommendation**
- non-materialized drafts not persisted
- no semantic promotion

**Execution checkpoint**
- U2 crash injection (before/after checkpoint)
- U2b replay / no double launch
- external ambiguity → reconciliation / STOP rather than silent retry

**No tests executed as implementation evidence in this architecture cycle.**

---

## 19. Candidate Technical Decision Register

| ID | Context | Options | Decision | Status | Reversibility | Impact | Morris Decision Required | ADR trigger |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **TD-C6-01** | Trajectory durability | T-A / T-B | **T-A** | **ADOPTED BY MORRIS** | High (adapter) | FC-06 continuity | **NO** (consumed) | REQUIRED/PREPARE NEXT if standard requires ADR after adopt · else generate at C6 finalization/integration gate |
| **TD-C6-02** | Confirmation durability scope | C-A / C-B | **C-A** | **ADOPTED BY MORRIS** | High | FC-09 | **NO** | same |
| **TD-C6-03** | Authority audit | A-A / A-B | **A-A** | **ADOPTED BY MORRIS** | High | Audit / security | **NO** | same · fold with Confirmation ADR if useful |
| **TD-C6-04** | Epistemic selective persistence | E-A / E-B | **E-A SELECTIVE-BY-MATERIALIZATION** | **ADOPTED BY MORRIS** | Medium | Resume honesty | **NO** | conditional |
| **TD-C6-05** | Durable from `granted` vs consumed-only | sub C-A | **from `granted` upward** · `requested` ephemeral | **ADOPTED BY MORRIS** | High | UX reconfirm / restart | **NO** | fold into Confirmation ADR |
| **TD-C6-06** | Current trajectory pointer | pointer / status-only | **explicit current pointer** · effective active/decided only | **ADOPTED BY MORRIS** | High | Concurrency / honesty | **NO** | fold into Trajectory ADR |

No ADR created in this documentary correction pass unless a repo standard explicitly requires immediate ADR creation for an already-adopted decision (none applied here).

---

## 20. ADR / DAA / DAT qualification

| Artifact | Now | Next |
| --- | --- | --- |
| **ADR** | **NOT created in this pass** | May be generated during C6 finalization/integration gate if required by standard (Trajectory ; Confirmation+Receipt ; Epistemic if non-trivial) |
| **DAA** | N/A | N/A unless interface contracts need separate pack |
| **DAT** | **NOT created** — no exploitation target without Delivery GO | |

Avoid overdocumentation: do not ADR already-decided OA/SQLite/ports.

---

## 21. Debt / reserves / exit conditions

### Remains OPEN / CARRY

- Confirmation **runtime** durability OPEN until Delivery
- ProjectTrajectory **runtime** durability OPEN until Delivery
- Epistemic selective materialization **runtime** OPEN until Delivery
- H-01…H-04 CARRY · UAT OPEN · SC-02 NON-BLOCKING · Pre-M6 debt CARRY · M5-C journal debt OPEN
- runtime v3 **NON ADOPTED**

### Remaining Morris / repository gates (NOT TD-C6-01…06)

1. ~~ChatGPT final documentary review~~ → **PASS**
2. ~~C6 architecture Git integration (PR #382)~~ → **COMPLETE**
3. ~~Morris C6 CLOSURE decision~~ → **CONSUMED** · **C6 EXIT PROOF ACCEPTED BY MORRIS** · **C6 CLOSED BY MORRIS**
4. ~~C6 documentary closure Git integration (PR #383)~~ → **COMPLETE ON MAIN** · post-merge CI `32473181947` SUCCESS · content truth PASS · **C6 POST-MERGE TRUTH SATISFIED**
5. **Final documentary coherence** — **TRANSPORTED VIA PR #384** · truth-sync branch **PUSHED** · current PR/integration state **RESOLVE FROM GIT**
6. **NEXT-CYCLE REQUALIFICATION** = **NEXT ORDERED STEP ONLY IF** Git proves PR **#384** integrated on main **AND** post-merge truth satisfied · **NOT EXECUTED** · capability selection **NONE / NOT YET**
7. Later distinct GO for any Delivery / implementation

### Documentary conditions for this post-merge truth / coherence pass

1. PR #383 MERGED · head `c0cd769e…` · merge `e21803b1…`
2. PR CI `32472673361` SUCCESS · post-merge CI `32473181947` SUCCESS
3. Exact content blobs match at PR #383 merge (C6 `9c07ce6b…` · Roadmap `378dcf31…`)
4. Closure + original C6 source branches **PRESERVED**
5. Final documentary coherence transport vehicle = **PR #384** · source branch **PUSHED** · current PR/integration state **RESOLVE FROM GIT**
6. C6 EXIT PROOF **ACCEPTED BY MORRIS** · C6 **CLOSED BY MORRIS** · TD-C6-01…06 remain **ADOPTED**
7. Runtime implementation **OPEN / NOT AUTHORIZED** · reserves remain OPEN/CARRY

---

## 22. Impact on future Backlog / Delivery

Prerequisites only (≠ stories · ≠ authorized):

- Implement SQLite adapters + schema bump under ports
- Wire factories
- Restart / U2 / U2b / materialization tests listed in §18
- Recovery disclosure copy aligned with PE contracts
- Cutover note for irrecoverable pre-C6 Memory state

**No Backlog authorized. No Delivery authorized.**

---

## 23. Exit criteria / exit proof Cycle 6

| Criterion | Status |
| --- | --- |
| Architecture-only targeted delta | **PASS** |
| TD-C6-01…06 adopted | **PASS** (remain ADOPTED) |
| C1 alignment | **PASS** |
| C2 alignment | **PASS** |
| Product Experience alignment | **PASS** |
| Functional Architecture alignment | **PASS** |
| OA / Product SQLite / ports preserved | **PASS** |
| No parallel architecture | **PASS** |
| PR #382 exact scope (2 docs) | **PASS** |
| PR CI `32469751405` | **PASS** |
| Merge PR #382 | **PASS** |
| Content on main truth | **PASS** |
| Source branch preserved | **PASS** |
| Post-merge CI `32470240316` | **PASS** |
| No implementation / migration | **PASS** |
| No Backlog / Delivery / REAL | **PASS** |
| Runtime v3 NON ADOPTED | **PASS** |
| **C6 EXIT PROOF** | **ACCEPTED BY MORRIS** |
| **C6 CLOSED** | **YES — CLOSED BY MORRIS** |
| Documentary closure sync Git-integrated | **PASS** (PR **#383** on main) |
| C6 POST-MERGE TRUTH | **SATISFIED** |
| Final documentary coherence transport | **PR #384** = transport vehicle · truth-sync branch **PUSHED** · current PR/integration state **RESOLVE FROM GIT** |
| Implementation / Delivery-ready | **NOT CLAIMED** |

**C6 EXIT PROOF ACCEPTED BY MORRIS. C6 CLOSED BY MORRIS. C6 CLOSURE INTEGRATION + POST-MERGE TRUTH SATISFIED.** Final documentary coherence transport vehicle = **PR #384** (state **RESOLVE FROM GIT**). **NEXT-CYCLE REQUALIFICATION** becomes actionable **only IF** Git proves PR **#384** integrated on main **AND** post-merge truth satisfied.

---

## 24. Morris decisions required (remaining)

**Consumed / closed:** TD-C6-01…06 · ChatGPT final documentary review PASS · PR #382 · exit qualification · Morris C6 CLOSURE · PR #383 · post-merge CI + content truth (**C6 POST-MERGE TRUTH SATISFIED**) · final coherence Git transport via PR **#384** (vehicle exists; integration state **RESOLVE FROM GIT**).

**Still required (documentary/Git gates only):**

1. Resolve PR **#384** from Git (integration decision / post-merge truth as applicable)
2. **IF** Git proves PR **#384** integrated on main **AND** post-merge truth satisfied: **NEXT-CYCLE REQUALIFICATION** (**NOT EXECUTED**)
3. Capability selection **NONE / NOT YET**
4. Do **not** infer Backlog / Delivery / REAL / runtime v3 from C6 closure, post-merge truth, or PR **#384** existence

---

## 25. Anti-claims

This document does **NOT**:

- implement or migrate anything
- claim C6 CLOSED = architecture implemented / migrations applied / runtime durability complete
- claim post-merge truth PASS = Delivery authorized
- complete Product Completion
- authorize Backlog / Delivery / REAL
- adopt runtime v3
- reopen OA or Product SQLite
- create parallel architecture
- treat Recommendation as Decision
- treat receipt as authority source
- treat restored `granted` as effective authority
- treat proposed Trajectory as current effective Trajectory
- invent a second Attempt lifecycle
- hard-code PR **#384** Draft/open/merged as a durable documentary invariant (state **RESOLVE FROM GIT**)
- execute NEXT-CYCLE REQUALIFICATION in this pass
- select a next capability / cycle

---

## 26. Final candidate verdict

**C6 CONSOLIDATED TECHNICAL ARCHITECTURE — TD-C6-01…06 ADOPTED BY MORRIS — ARCHITECTURE INTEGRATED ON MAIN VIA PR #382 — CLOSURE DOCUMENTATION INTEGRATED ON MAIN VIA PR #383 — POST-MERGE TRUTH SATISFIED — EXIT PROOF ACCEPTED BY MORRIS — C6 CLOSED BY MORRIS — FINAL DOCUMENTARY COHERENCE TRANSPORTED VIA PR #384 — CURRENT PR/INTEGRATION STATE RESOLVE FROM GIT — NOT IMPLEMENTED — NO BACKLOG — NO DELIVERY — ZERO REAL — RUNTIME V3 NON ADOPTED**

Do **not** declare:
- READY FOR DELIVERY
- IMPLEMENTED / MIGRATED
- RUNTIME V3 ADOPTED
- NEXT-CYCLE REQUALIFICATION executed
- next capability / Backlog / Delivery cycle selected
- PR **#384** MERGED / post-merge truth for #384 already PASS *(unless Git itself proves it)*

---

*ARCHITECTURE DIRECTION ADOPTED BY MORRIS · CLOSURE INTEGRATED ON MAIN · POST-MERGE TRUTH SATISFIED · C6 CLOSED BY MORRIS · FINAL COHERENCE TRANSPORTED VIA PR #384 · STATE RESOLVE FROM GIT · NO CODE · NO MIGRATION · NO BACKLOG · NO DELIVERY · ZERO REAL · RUNTIME V3 NON ADOPTED · ADOPTION ≠ IMPLEMENTATION*
