# SFIA Review Pack — FULL — CRITICAL

## 00. Identity

| Field | Value |
| --- | --- |
| Timestamp UTC | 2026-10-22T19:36:20Z |
| Cycle | AKG-M4-A / T-A04 — Storage Topology, Persistence Boundaries & Migration Strategy Assessment |
| Profile | CRITICAL |
| Type | Cycle 6 — Architecture technique · DOC / Architecture / Rationalization Assessment |
| Branch | `analysis/akg-m4a-ta04-storage-migration` |
| HEAD | `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` |
| origin/main | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` |
| PR #604 | Draft · CI SUCCESS · non mergée |
| Document | `projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/08-m4a-storage-persistence-and-migration-assessment.md` (untracked) |
| Document hash-object | `8dd4d32daf647a06321f9daa338853f291539135` |
| Antecedent T-A01 | `42de13a95c9ca4b103c9192147a4511f4f1df1dd` |
| Antecedent T-A02 | `510210231ee3ee82647a2e53b21643e536a677e1` |
| Antecedent T-A03 | `640f19c1ab9d0952ae877bc5328f6705f77a9474` |
| Project commit/push | NONE |
| M4-A | NON CLOSED |
| Migration | design-only · NO dual-write · NO DB open |

## 01. Scope

AUTHORIZED: static storage/persistence/migration assessment; local `08` only; Full pack; L3 handoff.
NOT AUTHORIZED: open/modify user DBs; run migrations; dual-write; runtime/code/tests/config changes; REAL; FinOps SHADOW ON; project commit/push/PR; close M4-A; declare P6 PASS / v3 ADOPTED; definitive KEEP/REBUILD/RETIRE arbitration.

## 02. Git Review Index

```
?? projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/08-m4a-storage-persistence-and-migration-assessment.md
```

| Control | Result |
| --- | --- |
| Branch/HEAD/main | MATCH expected |
| T-A01/T-A02/T-A03 WTs | NOT modified |
| Project files besides `08` | NONE |
| `git diff --no-index --check` | exit `1` (new file; no trailing whitespace) |
| Trailing whitespace | NONE |
| Document hash-object | `8dd4d32daf647a06321f9daa338853f291539135` |

### Diff identity

```
...torage-persistence-and-migration-assessment.md} | 352 +++++++++++++++++++++
 1 file changed, 352 insertions(+)
```

## 03. Sources

SFIA v2.6 template/routing/OM/rules/knowledge; Build Doctrine R23/R24; Roadmap B-AKG; G0 pack; AKG README + M4 01–04; PRR 01–09; doctrine v3 30/32/34/35/37; handoffs T-A01/02/03.
Code: Product `lib/oa/project/infrastructure/sqlite/*`; Nora `sessionPaths`/`productSqliteSession`/`controlledContinuation`; D1 `lib/d1/*`; OPS1 `lib/ops1/*`; process-local stores; Gate D journal; mission-result/Evidence ingest; FinOps shadow composition (OFF).

## 04. ST-01 → ST-06 results

| ID | Verdict | Durability class |
| --- | --- | --- |
| ST-01 Product Truth C | CONFIRMED schema M9 incl. oa_syntheses; UoW IMMEDIATE; path env/cwd-sensitive | COND-DURABLE |
| ST-02 Nora Memory B | CONFIRMED sibling sqlite; ≠ Truth C; RunState cross-restart DEFER | COND-DURABLE session; PROCESS-LOCAL RunState |
| ST-03 D1 | CONFIRMED 5 tables; proj-* ≠ OA; no user volumes; no dual-write | COND-DURABLE island |
| ST-04 OPS1 | CONFIRMED parallel execution island + worktrees FS non-atomic with DB | COND-DURABLE island |
| ST-05 process-local | Proposal/offer/MW5/receipts/runtime Maps — lost on restart; carriers ≠ authority | PROCESS-LOCAL |
| ST-06 other | Gate D launch-safety; mission-result FS+SQLite non-atomic; execution-run memory; FinOps PG SHADOW OFF | mixed |

## 05. MIG-A → MIG-D

| Scenario | Design summary | Hard constraints |
| --- | --- | --- |
| MIG-A D1→Product | inventory → archive → id map → convert → cutover → retire | no dual-write; volumes UNKNOWN |
| MIG-B OPS1→Product caps | harvest concepts; archive rows; do not map gate→HD | OPS1≠Product authority |
| MIG-C offers/proposals | requalify / re-present / HD11; optional durable carrier under GO | never invent HD/Authorization |
| MIG-D Evidence multi-store | orphan/reconcile candidates; keep NOT_PROVEN honest | no cross-store atomicity today |

## 06. Major risks

R1 dual identity · R2 OPS1 gate as HD · R3 path drift · R4 FS↔SQLite orphans · R5 process-local as authority · R6 retention missing · R7 FinOps SHADOW · R8 migrate without inventory · R9 fake external rollback.

## 07. Existing vs proposed guarantees

| Existing (CODE) | Proposed (design only) |
| --- | --- |
| Product UoW intra-file | archive D1/OPS1 read-only |
| Path guards refuse d1/ops1 | explicit id mapping tables if migrate |
| HD11 without offer | optional PresentedSubject non-authority |
| Evidence fail-closed / NOT_PROVEN | reconcile FS orphans |
| Gate D local atomic | keep technical journals separate from Truth C |

## 08. Validations

Topology covered · authority vs Memory B vs carrier vs technical · no dual-write · no unjustified DB merge · restart qualified · historical data without assuming volumes · coherent with T-A01/02/03 · Mermaid AS-IS + proposed target · only `08` · whitespace clean · no runtime effects.

## 09. R23/R24 / Fake-Real

R24 NO PRODUCT SEMANTIC IMPACT. Static only. REAL NOT PROVEN. SHADOW NOT ACTIVATED. Migration design-only.

## 10. Handoff L3

Branch `sfia/review-handoff` · `sfia-review-handoff/latest-chatgpt-review.md`
Prior tip preserved: `640f19c1ab9d0952ae877bc5328f6705f77a9474`
Message: `docs(review-handoff): AKG-M4-A T-A04 storage persistence migration assessment`

## 11. Human decisions still required

- Accept/correct T-A04 LOCAL CANDIDATE after Critical Review.
- Any KEEP/HARVEST/REPLACE/REBUILD/RETIRE remains **candidate** until MethodMode/Morris GO.
- Inventory of real D1/OPS1 volumes before any Delivery migration.
- Carrier durability GO (MIG-C4) yes/no.
- T-A05 impact pack sequencing.

## 12. Instruction ChatGPT (§9.1)

Read Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (this pack).
Optional priors: T-A03 `640f19c1…` · T-A02 `51021023…` · T-A01 `42de13a9…`.

Perform: **CHATGPT CRITICAL REVIEW — AKG-M4-A / T-A04**.

Verify ST-01–ST-06 vs code; COND-DURABLE qualification; no dual-write; MIG-A–D design-only; no invented volumes/rollback; Mermaid AS-IS vs proposed; only `08`; M4-A NON CLOSED; DET≠REAL.

## 13. Verdict target

READY FOR CHATGPT CRITICAL REVIEW — AKG-M4-A / T-A04 LOCAL CANDIDATE

---

## 14. Full document `08` (verbatim)


# AKG-M4-A / T-A04 — Storage, Persistence & Migration Assessment

| Champ | Valeur |
| --- | --- |
| Cycle | **AKG-M4-A / T-A04** — Storage Topology, Persistence Boundaries & Migration Strategy |
| Type / Profil | Cycle 6 — Architecture technique · **Critical** |
| Typologie | DOC / Architecture / Rationalization Assessment |
| Baseline | `analysis/akg-m4a-ta04-storage-migration` @ `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` |
| `origin/main` | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` |
| PR #604 | Draft · CI SUCCESS · non mergée |
| Antecedents | T-A01 `42de13a9…` · T-A02 `51021023…` · T-A03 `640f19c1…` (handoffs immuables) |
| Méthode | Audit **statique** code + schémas · **pas** d'ouverture DB utilisateur · **pas** de migration exécutée |
| Principe | **OR-13** · **G0-A/B** · **aucun dual-write D1/OA** |
| Statut | **LOCAL CANDIDATE** · M4-A **NON CLOSED** · options **candidates** |
| Non-claims | DETERMINISTIC ≠ REAL · P6 GLOBAL **NOT PASSED** · v3 **NON ADOPTED** · volumes utilisateur D1/OPS1 **UNKNOWN** · migration **design-only** |

> **AS-IS :** code + schémas + tests > PRR. « Durable » = **conditionnel** au chemin/backend stables. Une dépendance active ≠ conservation permanente (OR-13).

---

## 1. Baseline et maturité

Worktree isolé ; WTs T-A01/T-A02/T-A03 **non modifiés**. Documents `05`/`06`/`07` lus via handoffs immuables. CKC Architecture : **fallback méthode canonique**.

**Maturité :** topologie AS-IS **CONFIRMED** pour les schémas et résolveurs de chemin ; volumes de données réelles **UNKNOWN** (aucune ouverture DB utilisateur) ; migrations **design candidates** seulement.

---

## 2. Sources et méthode

- SFIA v2.6 template / routing / operating model / rules / knowledge layer.
- Build Doctrine R23/R24 · Roadmap B-AKG · G0 pack · AKG README · M4 `01`–`04`.
- PRR 01–09 (focus 05/06).
- Doctrine v3 30/32/34/35/37.
- Handoffs T-A01 (consumers) · T-A02 (capabilities) · T-A03 (authority/restart).
- Code : Product sqlite `db.ts`/`paths.ts`/`sqliteProductStore.ts` · Nora `sessionPaths`/`productSqliteSession` · D1 `db.ts`/`paths.ts` · OPS1 `db.ts`/`paths.ts` · process-local stores · Gate D journal · mission-result / Evidence · FinOps composition (SHADOW OFF).

**Méthode :** inventaire tables/agrégats → writers/readers → autorité → durabilité conditionnelle → txn/idempotence réelle → restart → risque → valeur cible → option candidate. Pas d'invention de volumes.

---

## 3. Topologie AS-IS (observée)

```mermaid
flowchart TB
  subgraph TruthC["Truth C — Product SQLite"]
    P[(oa-product.sqlite)]
    P --- OA[Project/LPS/Cycle/HD/EC/Attempt/Evidence/RB/CE/Synthesis]
  end
  subgraph MemB["Memory B — Nora Session SQLite"]
    N[(nora-session.sqlite)]
    N --- SESS[session_items / LPT / transcript / cycle_journal]
  end
  subgraph Legacy["Legacy islands — séparés"]
    D1[(d1.sqlite)]
    OPS1[(ops1.sqlite)]
  end
  subgraph Tech["Technical journals / FS"]
    LS[(launch-safety.sqlite)]
    FS[mission-result-refs + managed repos / worktrees]
  end
  subgraph Ephem["Process-local"]
    MAP[Proposal / PREPARE offer / MW5 / receipts / execution-run Map]
  end
  subgraph Off["Off / not Product"]
    PG[(FinOps PostgreSQL — SHADOW NOT ACTIVATED)]
  end
  UI[Studio UI / PA] --> TruthC
  UI --> MemB
  UI -.-> Legacy
  Attempt[OA Attempt launch] --> LS
  Attempt --> FS
  Evidence[Evidence ingest] --> P
  Evidence --> FS
```

*Légende : flèches = flux d'écriture/lecture observés. Pas de dual-write D1↔OA. Paths défaut sous `.sfia-exec/` (cwd/env-sensitive).*

---

## 4. Matrice ST-01 → ST-06

**Légende durabilité :** `COND-DURABLE` = fichier SQLite/FS **si** chemin/env stables · `PROCESS-LOCAL` = perdu au restart process · `VOLATILE-DEFAULT` = défaut recomputé · `EXT-DURABLE-IF-WIRED` = PG si composé.

### 4.1 ST-01 — Product SQLite / Truth C

| Storage ID | Agrégat | Owner | Backend | Localisation | Writers | Readers | Autorité | Durabilité | Txn / idempotence | Restart | Risque | Valeur | Option | Preuve | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST01-PATH | Product DB file | OA project infra | node:sqlite | `SFIA_STUDIO_PRODUCT_DB_PATH` ou `{studioRoot}/.sfia-exec/product/oa-product.sqlite` ; refuse d1/ops1 basenames | `SqliteProductStore` | all Product services | Truth C container | COND-DURABLE | UoW `BEGIN IMMEDIATE` | reload if same path | cwd drift orphans | REQUIRED | KEEP | `paths.ts` L9+ ; `sqliteProductStore.ts` L53, L72 | C |
| ST01-SCHEMA | schema_meta M1→M9 | OA | same | same | `openProductSqlite` migrations | open | technical | COND-DURABLE | migrate on open | version gate | unsupported schema fail | REQUIRED | KEEP | `db.ts` L3–11, L324+, L409+ | C |
| ST01-PROJECT | oa_projects / LPS | OA project | same | same | project/LPS repos | PA / LPS readers | Truth C | COND-DURABLE | project idempotency table | durable | — | REQUIRED | KEEP | `db.ts` L21–46 | C |
| ST01-CYCLE | oa_cycle_instances + trajectories/epistemic | OA cycle | same | same | cycle services | PA | Truth C | COND-DURABLE | cycle journals | durable | epistemic drafts non-materialized = process | REQUIRED | KEEP | `db.ts` L71–82, L204–254 | C |
| ST01-HD | oa_human_decisions (+ DecisionRef in payload/epistemic) | OA decision | same | same | DecisionServices / recordF2Decision / SHE | verify PREPARE / resume HD11 | Truth C authority | COND-DURABLE | confirmation + decision journals | durable | DecisionRef ≠ table dédiée | REQUIRED | KEEP | `db.ts` L91–104 ; T-A03 | C |
| ST01-EC | oa_execution_contracts + inspection + confirmations + auth receipts | OA EC | same | same | prepare / SHE / authorize | inspect / execute | Truth C | COND-DURABLE | unique idempotency keys | durable | OCC/version mismatch | REQUIRED | KEEP | `db.ts` L111–123, L228–290 | C |
| ST01-ATT | oa_execution_attempts (+ active, result_budget) | OA Attempt | same | same | Select/Start/Record | governed execute | Truth C technical attempt | COND-DURABLE | adapter-bound record ; result_pending | durable | Attempt≠PROVEN | REQUIRED | KEEP | `db.ts` L132–155 ; T-A03 CORR-02 | C |
| ST01-EVID | oa_evidence / review_bundles / claim_evaluations (+ idempotency sidecars) | OA evidence-review | same + FS payloads | same | ingest / materializeW3b | W3C / resolution | Truth C proof | COND-DURABLE meta ; payload external COND | sidecar idempotency ; **FS+DB not cross-atomic** | meta durable ; file may orphan | orphan refs | REQUIRED | KEEP / CONSOLIDATE FS later | `db.ts` L157–319 ; ingestMissionResultEvidence | C |
| ST01-SYN | oa_syntheses M9 | OA synthesis | same | same | synthesis services | product-derived views | Product-derived ≠ HD | COND-DURABLE | — | durable | PRR 06 omits table | OPTIONAL | KEEP | `db.ts` L324–339 | C |

### 4.2 ST-02 — Nora Session / Memory B

| Storage ID | Agrégat | Owner | Backend | Localisation | Writers | Readers | Autorité | Durabilité | Txn / idempotence | Restart | Risque | Valeur | Option | Preuve | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST02-PATH | Nora session DB | nora-cognitive-runtime | node:sqlite | `SFIA_STUDIO_NORA_SESSION_DB_PATH` ou sibling `nora-session.sqlite` ; refuse oa-product/d1/ops1 | ProductSqliteSession | turn orchestration | Memory B ≠ Truth C | COND-DURABLE | batch append / atomic replace | durable if path | path drift orphans chat | REQUIRED (conversation) | KEEP distinct | `sessionPaths.ts` L12–32 | C |
| ST02-ITEMS | session_items / LPT / retry bindings | session | same | same | Session SDK methods | Nora turns | Memory B | COND-DURABLE | logical-turn bindings | durable | clearSession ≠ wipe journal | REQUIRED | KEEP | `productSqliteSession.ts` | C |
| ST02-JOURNAL | pilot_transcript / cycle_journal / mutation ledger | cycleJournalStore | same | same | append / materialize | continuity / UI | Memory B journal | COND-DURABLE | ledger PKs | durable | unbounded growth UNKNOWN GC | REQUIRED | KEEP ; retention later | cycleJournalStore | C |
| ST02-RUNSTATE | OpenAI RunState | nora Agents turn | process memory | in-process | Runner.run segments | same-turn resume | technical cognition | PROCESS-LOCAL (same turn) | N/A durable | **cross-restart NOT IMPLEMENTED / DEFER** | false continuity claim | OPTIONAL future | DEFER | `controlledContinuation.ts` L1–6 | C |

### 4.3 ST-03 — D1 SQLite

| Storage ID | Agrégat | Owner | Backend | Localisation | Writers | Readers | Autorité | Durabilité | Txn / idempotence | Restart | Risque | Valeur | Option | Preuve | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST03-D1 | d1_projects / assignments / audit / idempotency / atomic_audit | lib/d1 | node:sqlite | `.sfia-exec/local-i1/state/d1.sqlite` (env overrides) | createProjectAtomic / mode / activate / BoundedAtomicAudit | workspace UI / readiness | **D1 island ≠ OA Project** (`proj-*` vs OA ids) | COND-DURABLE | BEGIN IMMEDIATE + idempotency keys | durable if path | parallel identity vs Truth C | OPTIONAL historical / MethodMode hold | HARVEST patterns ; RETIRE LATER consumers | `d1/db.ts` L8–91 ; `paths.ts` ; `ids.ts` | C |
| ST03-VOLUMES | user blobs/docs | — | — | — | — | — | — | — | — | — | unknown demand | UNKNOWN | N/A until designed | no tables | U |
| ST03-HOLD | MethodMode hold override | methodModeHold | process slot | in-mem override | tests | readiness | evaluation hold | VOLATILE-DEFAULT | N/A | lost → default | confuse with DB column | OPTIONAL | KEEP code-level | methodModeHold.store.ts | C |

### 4.4 ST-04 — OPS1 SQLite

| Storage ID | Agrégat | Owner | Backend | Localisation | Writers | Readers | Autorité | Durabilité | Txn / idempotence | Restart | Risque | Valeur | Option | Preuve | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST04-OPS1 | sessions / turns / events / qualifications / candidates / gates / allowlist / contracts / attempts / results / reports / coverage | lib/ops1 | node:sqlite + worktrees FS | `.sfia-exec/local-i1/state/ops1.sqlite` + worktrees | ops1 actions / orchestrator / adapter | OPS1 UI | **OPS1 island ≠ Product Spine** ; project_key fixed | COND-DURABLE DB ; FS separate | local DB txns ; worktree **not** in DB txn | DB durable ; worktree may orphan | confuse gate≠HD ; growth no TTL | OPTIONAL historical harvest | HARVEST concepts ; RETIRE LATER ; **do not map gate→OA HD** | `ops1/db.ts` L9–234 ; `paths.ts` | C |

### 4.5 ST-05 — Process-local

| Storage ID | Agrégat | Owner | Backend | Localisation | Writers | Readers | Autorité | Durabilité | Txn / idempotence | Restart | Risque | Valeur | Option | Preuve | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST05-PROP | F2 Proposal Map | f2/proposalStore | globalThis Map | `__SFIA_F2_PROPOSAL_STORE__` | saveProposal | recordDecision / prepare | **carrier ≠ authority** | PROCESS-LOCAL | none | **lost** | false durable proposal | OPTIONAL continuity UX | REBUILD carrier candidate — **not** 2e vérité | proposalStore.ts L8–32 | C |
| ST05-OFFER | Pending Generic PREPARE offer | pendingGenericPrepareOfferStore | globalThis Map | keyed project+session | remember/clear | prepare continuity | presentation ≠ HD | PROCESS-LOCAL | none | **lost** (intended) | cross-session bind if key wrong | OPTIONAL | ADAPT/REBUILD under GO ; HD11 without offer | store L21–25, L30+ | C |
| ST05-MW5 | MW5 challenge | mw5ChallengeSessionStore | globalThis Map | process | remember challenge | intentAnalysis | episode integrity | PROCESS-LOCAL | none | lost | forge if bypassed | REQUIRED volatile | KEEP volatile | mw5ChallengeSessionStore | C |
| ST05-RECEIPT | CognitiveExecutionReceipt | cognitiveExecutionReceipt | module Map | max 512 | remember | conservation UX | ≠ Product | PROCESS-LOCAL | eviction | lost | stale UX | OPTIONAL | KEEP volatile | cognitiveExecutionReceipt.ts | C |
| ST05-RUNTIME | RuntimeApplicationService singleton | vertical-slice | globalThis | process | getRuntime… | actions | composition | PROCESS-LOCAL | N/A | recreate | multi-instance skew | REQUIRED process | KEEP | singleton.ts | C |

### 4.6 ST-06 — Autres persistances

| Storage ID | Agrégat | Owner | Backend | Localisation | Writers | Readers | Autorité | Durabilité | Txn / idempotence | Restart | Risque | Valeur | Option | Preuve | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ST06-GATED | Gate D grants + launch frontier | Attempt launch safety | sqlite isolé | `.sfia-exec/m4/launch-safety.sqlite` | SqliteLaunchSafetyJournal | StartExecution consume | technical ≠ Product Store | COND-DURABLE | atomicConsumeGrantAndCreateFrontier BEGIN IMMEDIATE | durable | frontier≠Attempt row atomicity | REQUIRED for REAL safety when composed | KEEP separate | sqliteLaunchSafetyJournal.ts L225+ | C |
| ST06-MISSION-FS | mission-result JSON | F3 / evidence | filesystem | `{productDir}/mission-result-refs/...` | persistMissionResultPayload | ingest / tools | payload bytes ; Evidence row = pointer authority | COND-DURABLE FS | **file then SQLite — not one txn** | both may diverge | orphan file or meta-only | REQUIRED when path used | CONSOLIDATE later | ingestMissionResultEvidence.ts | C |
| ST06-EXEC-RUN | ExecutionRun | oa/execution-run | Memory Map | process | composeExecutionRunMemory | get/list | aggregate in-mem | PROCESS-LOCAL | invariants before save | lost (`restartSafe:false`) | mistaken FinOps ledger | OPTIONAL | REPLACE if selected later | composeExecutionRunMemory.ts | C |
| ST06-FINOPS | FinOps aggregates | oa/finops | PostgreSQL | external DSN | postgres*Store if composed | T7 / shadow | FinOps when activated | EXT-DURABLE-IF-WIRED | PG txns | survives PG | accidental SHADOW ON | OPTIONAL | KEEP OFF ; not Product | composeFinOpsT7Shadow… SHADOW NOT ACTIVATED | C |
| ST06-EXT-FS | managed repos / M4 worktrees / docs artifacts | OA / F3 | FS+git | managedRepoRootBase ; `.sfia-exec/m4-worktrees` | launch / persistDocsWrite | path probes | external effects referenced by OA | COND-DURABLE FS | outside Product UoW | may orphan | path escape | REQUIRED for REAL delivery surface | KEEP + policy | managedRepoPathFacts ; composeStudioProductRealBoundary | C |

---

## 5. Writers, readers et frontières de vérité

| Frontière | Contient | N'est pas |
| --- | --- | --- |
| Truth C | Project, LPS, Cycle, HD, EC, Attempt, Evidence, RB, CE, Synthesis | Session chat ; Proposal Map ; OPS1 gate |
| Memory B | Session items, transcript, cycle journal | Autorité métier ; RunState durable |
| D1 island | proj-* projects, MethodMode column, I1 audit | OA Project ; dual-write target |
| OPS1 island | session/gate/allowlist/contract/attempt/report | Product HD/EC/Attempt |
| Technical journals | Gate D launch-safety ; mission-result files | HumanDecision |
| Process-local | Proposal, offer, MW5, receipts, execution-run | Truth C |

**Aucun dual-write D1/OA** (G0 ; path guards Product refusent d1/ops1).

---

## 6. Transactions, idempotence, cohérence multi-stockages

| Périmètre | Garantie réelle | Limite |
| --- | --- | --- |
| Product UoW | `BEGIN IMMEDIATE` / COMMIT / ROLLBACK | **intra**-fichier Product |
| D1 create | IMMEDIATE + idempotency | **intra**-D1 |
| OPS1 DB | local txns | worktree FS **hors** txn |
| Gate D journal | atomic consume grant+frontier | **≠** Attempt row dans même txn |
| Mission-result | file write → puis Evidence SQLite | **non** cross-atomic ; Attempt may succeed with Evidence fail (T-A03) |
| FinOps PG | PG txns if wired | SHADOW NOT ACTIVATED |

**Pas** de migration atomique inter-bases implémentée. **Pas** de rollback d'effets externes promis.

---

## 7. Restart / recovery

| Classe | Exemples | Après restart |
| --- | --- | --- |
| COND-DURABLE Truth C | HD, EC, Attempt, Evidence meta | rechargeable si même path |
| COND-DURABLE Memory B | session/journal | rechargeable si même path |
| COND-DURABLE islands | D1, OPS1, launch-safety | rechargeable si même path |
| PROCESS-LOCAL | Proposal, offer, MW5, RunState, execution-run | **lost** |
| DEFER | RunState cross-restart | NOT IMPLEMENTED |
| Reconstitution | HD11 PREPARE without offer ; rehydrate*FromLps | **implemented** for those paths |
| Interdit | inventer HD / Authorization / presentation / PROVEN | fail-closed |

---

## 8. Données historiques à préserver (qualification)

| Source | Utile à préserver (candidate) | Lecture historique seule | Obsolescence candidate | Volume réel |
| --- | --- | --- | --- | --- |
| Truth C | all current Product aggregates | N/A | N/A | env-dependent UNKNOWN |
| Memory B | transcript/journal for continuity | optional archive | GC policy missing | UNKNOWN |
| D1 | audit/idempotency patterns ; MethodMode semantics | project rows if any exist | UI D1 path | **UNKNOWN** (schema only audited) |
| OPS1 | gate/allowlist/report **concepts** ; past reports | full OPS1 DB as archive | runtime OPS1 after Product harvest | UNKNOWN |
| Process-local | none as durable history | N/A | N/A | N/A |
| mission-result FS | payloads referenced by Evidence | orphans after GC | unreferenced files | UNKNOWN |

Ne **pas** présumer de données utilisateur présentes dans l'environnement d'analyse.

---

## 9. Scénarios MIG-A → MIG-D (design-only)

### MIG-A — D1 → Product

| Aspect | Constat | Option design |
| --- | --- | --- |
| Identités | `proj-*` ≠ OA project ids | mapping table explicite **si** migration ; jamais silent merge |
| Modèle | D1 project+assignment+MethodMode column vs OA Project+LPS+Cycle | MethodMode semantics → OA/policy fields **candidate** ; pas dual-write |
| Audit/idempotence | D1 tables | harvest patterns into OA audit ; archive D1 events |
| Volumes | **not implemented** | N/A |
| Ordre | inventaire → read-only archive → map ids → convert controlled → cutover readers → retire D1 UI | **design** ; GO Delivery required later |
| Rollback | backup file + keep D1 read-only | external effects N/A for D1 project create |

### MIG-B — OPS1 → capacités Product

| Aspect | Constat | Option design |
| --- | --- | --- |
| Authority | OPS1 gate ≠ OA HD | **ne pas** importer décisions OPS1 comme HD |
| Contract/Attempt | parallel schemas | harvest controls into OA Attempt ; archive OPS1 rows |
| Allowlist | OPS1 evaluations | rebuild under Product path policy / managed repo |
| Report/reinject | OPS1 report | harvest requirements into W3C Evidence/synthesis |
| Worktrees FS | outside DB txn | quarantine + retention policy |
| Cursor adapter | OPS1_CURSOR_REAL coupled safety (T-A01) | retire after Product gateway exclusive |

### MIG-C — Continuité offres / propositions

| Option | Description | Garde-fou |
| --- | --- | --- |
| C1 Requalify | after restart, re-run F2/W2 qualification | **default** ; no invent HD |
| C2 Controlled re-present | UI re-shows prepare from Truth C EC if exists | presentation ≠ new authority |
| C3 Reconstitute from Truth C | HD11 verify → PREPARE without offer Map | **implemented** (T-A03) |
| C4 Durable carrier | new PresentedSubject store under GO | **must not** become 2e vérité / silent Authorization |

### MIG-D — Preuves multi-stockages

| Risque | Observation | Option design |
| --- | --- | --- |
| Orphan mission-result file | FS write before SQLite ingest | reconcile job candidate ; fail-closed Product already |
| Attempt succeeded + Evidence fail | T-A03 continuity fail codes | keep honest NOT_PROVEN ; repair path explicit |
| result_pending | technical persist fail | Attempt durable ; contract stays executing |
| Missing ReviewBundle | materialize path not run | do not invent PROVEN |
| Cross-store atomicity | **absent** | document ; optional future single UoW — **new GO** if changing G0 |

---

## 10. Comparaison options migration / reconstruction

| Stratégie | Pros | Cons | Fit OR-13 / G0 |
| --- | --- | --- | --- |
| Keep islands + Product Truth C | low immediate risk | dual UX / identity confusion | interim OK |
| Archive D1/OPS1 read-only + Product-only write | clear authority | need inventory tooling | aligns G0 |
| Dual-write | — | **FORBIDDEN** | violates G0 |
| Merge all DBs into one file | simple ops myth | mixes Memory B / technical / legacy authority | **reject as principle** |
| Rebuild carriers (Proposal/Offer) | UX continuity | risk of 2e vérité | only with explicit non-authority design |
| Harvest OPS1→OA capabilities | capability preserve | mapping authority carefully | OR-13 preferred |

```mermaid
flowchart LR
  subgraph ASIS["AS-IS observé"]
    A1[Product Truth C]
    A2[Nora Memory B]
    A3[D1]
    A4[OPS1]
    A5[process-local]
  end
  subgraph TARGET["Scénario proposé — NON IMPLÉMENTÉ"]
    T1[Truth C unique métier]
    T2[Memory B distincte]
    T3[Technical journals]
    T4[Archive historique D1/OPS1 lecture]
    T5[Carriers éphémères non-autorité]
  end
  A1 --> T1
  A2 --> T2
  A3 -.->|archive / harvest MethodMode| T4
  A4 -.->|harvest concepts / archive rows| T4
  A5 -.->|requalify or optional durable presentation| T5
  T4 -.->|retire later consumers| X[RETIRE LATER]
```

*Diagramme cible = **scénario proposé**, pas preuve d'implémentation.*

---

## 11. Risques

| ID | Risque | Mitigation candidate |
| --- | --- | --- |
| R1 | Dual identity D1 vs OA | cutover readers ; no dual-write |
| R2 | OPS1 gate treated as HD | explicit non-mapping (T-A03/T-A02) |
| R3 | Path/env drift orphans Truth C or Memory B | pin env paths in ops ; document |
| R4 | FS↔SQLite orphan Evidence | reconcile ; keep NOT_PROVEN honest |
| R5 | Process-local mistaken for durable authority | CORR-01/T-A03 narration ; optional carrier GO |
| R6 | Unbounded OPS1/session growth | retention policy missing |
| R7 | Accidental FinOps SHADOW ON | keep OFF ; composition refuse |
| R8 | Migration without inventory | design requires inventory first — volumes UNKNOWN |
| R9 | External effect rollback promised | **forbid** without demonstrated mechanism |

---

## 12. Recommandations pour T-A05

1. Impact pack : coût dual-path SHE + historical ; OPS1 harvest vs retire.
2. Storage impact : D1/OPS1 archive strategy ; carrier continuity GO yes/no.
3. Evidence multi-store coherence as delivery risk item.
4. MethodMode disposition (T-A02) tied to MIG-A.
5. **No** Delivery GO from T-A04 alone.

---

## 13. Gaps / preuves manquantes

| Gap | Statut |
| --- | --- |
| Volumes réels D1/OPS1/Product en prod | UNKNOWN (DB non ouvertes) |
| Retention/GC session & OPS1 events | NOT IMPLEMENTED |
| RunState cross-restart | DEFER |
| Cross-store atomic Evidence | absent |
| PRR 06 omits `oa_syntheses` | DOC drift vs CODE |
| Multi-process SQLite writers | UNKNOWN |
| Full call-graph every write in UoW | PARTIAL |
| REAL E2E / P6 GLOBAL | NOT PASSED |

---

## 14. Conditions de sortie M4-A

| Condition | État |
| --- | --- |
| T-A01 / T-A02 / T-A03 | Acceptés (handoffs) |
| T-A04 storage/migration | **LOCAL CANDIDATE** (ce document) |
| T-A05 impact pack | **NON** |
| T-A06 Critical alignement | **NON** |
| M4-A CLOSED | **NON** |

---

## 15. Traçabilité SFIA / R23-R24

| Règle | Application |
| --- | --- |
| R23 | Périmètre analysis-only ; pas de Delivery |
| R24 | **NO PRODUCT SEMANTIC IMPACT** — documentation uniquement |
| OR-13 | Capacités/invariants > implémentations historiques |
| G0-A/B | OA backbone + Product sqlite ; **pas** dual-write ; D1/OPS1 séparés |
| Fake-Real | DET ≠ REAL ; SHADOW NOT ACTIVATED ; pas de Cursor REAL |

---

END — `AKG-M4-A / T-A04` — LOCAL CANDIDATE STORAGE & MIGRATION ASSESSMENT
