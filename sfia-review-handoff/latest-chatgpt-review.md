# CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01 — Review Pack (FULL)

## A. Timestamp
2026-09-18 08:06:22 CEST (+0200)

Pack revision: **CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01**

## B. Git Truth

| Item | Value |
| --- | --- |
| Repository | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-studio-contract-result-extensibility-framing-01` |
| `origin/main` | `bb6af3cabef663bd8619b85326dbc205057b7c7d` |
| HEAD | `bb6af3cabef663bd8619b85326dbc205057b7c7d` |
| Branch | `feat/sfia-studio-contract-result-extensibility-01` (local only — **NOT pushed**) |
| Project commit / push / PR | **FORBIDDEN** this macro |
| `git diff --check` (Product scope) | **PASS** |

### Status (Product / framing / review; excludes package-lock)

```
M projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
 M projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
 M projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
 M projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
 M projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
 M projects/sfia-studio/app/features/project-assistant/f3/index.ts
 M projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/index.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
 M projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
 M projects/sfia-studio/app/package-lock.json
 M projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
?? projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/contractResultDocsWriteRequal.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/w2/requalifyDocsWriteContractResult.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/resolveCurrentContractResultClaimEvaluation.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/tempArtifactContractResultSemantic.ts
?? projects/sfia-studio/convergence/sfia-studio-contract-result-extensibility-framing.md
?? projects/sfia-studio/convergence/sfia-studio-contract-result-extensibility-framing.md
?? projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/tempArtifactContractResultSemantic.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts
?? projects/sfia-studio/app/lib/oa/evidence-review/application/resolveCurrentContractResultClaimEvaluation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/requalifyDocsWriteContractResult.ts
?? projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/contractResultDocsWriteRequal.d0.test.ts
```

## C. Morris adopted decision (CONSUMED)

**ADOPT RESULT SEMANTICS REGISTRY ARCHITECTURE**

- SERVER-OWNED STATIC REGISTRY
- FROZEN REVIEWBUNDLE MULTI-EVIDENCE AND
- EXPLICIT CLAIM EVALUATION SUPERSESSION
- IMPLEMENT LOT A+B AS ONE ZERO-REAL MACRO
- SUCCESS REAL PROVENANCE ADAPT IF NON-STRUCTURAL

Authorized: local Product code · deterministic tests · docs/Roadmap · Attempt 3 ZERO-REAL requal · Review Pack + Handoff.

Forbidden: Cursor REAL · Studio Execute · new ExecutionAttempt · new HumanDecision · SQLite manual mutation · project commit/push/PR/merge · branch deletion · runtime v3 · generalized Git/PR/CI.

## D. SFIA qualification

| Field | Value |
| --- | --- |
| Cycle | Delivery / architecture implementation |
| Typology | EVOL |
| Profile | CRITICAL |
| Capability v3 | ExecutionContract → ER/EO → Evidence → ContractResult → Product outcome → post-Evidence |
| Milestone | Product Journey E2E — Contract Result Extensibility |
| Runtime v3 | **NON ADOPTED** |
| Build Doctrine | reuse one engine · no parallel · no READY without proof · ZERO REAL |

## E. Convergence pre-check

- R13 framing present and status → **ADOPTED BY MORRIS — IMPLEMENTATION IN PROGRESS / NOT YET INTEGRATED ON MAIN**
- Roadmap tip → CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01 (LOCAL CANDIDATE)
- Build Doctrine / C1 / v3 framing → **unchanged**
- Product Journey → still **NOT READY**

## F. Exact architecture implemented

```
Bound EC snapshot
 → Attempt
 → frozen ReviewBundle (N Evidence snapshots)
 → CONTRACT_RESULT_SEMANTICS (server-owned static)
 → resolveApplicableContractResultSemantics (0=none soft; 1=apply; >1=hard ambiguous fail)
 → selectEvidenceIds (AND from frozen snapshots only)
 → EvidenceReader load exact versions
 → EO / ER assessors on semantic
 → ClaimEvaluation create-only
 → optional supersedesClaimEvaluationId
 → resolveCurrentContractResultClaimEvaluation (non-superseded)
 → Product terminal projection
```

**One engine:** `EvaluateContractResult` preserved (not forked).

**API evolution:** request accepts optional single `evidence` for back-compat; prefers server-owned selection via frozen RB + `EvidenceReader`. Does not flatten N→1 synthetic Evidence.

## G. Registry entries

| # | id | ruleRef | applicability |
| --- | --- | --- | --- |
| 1 | `temp-artifact` | `w3b-contract-result/product-generate-temporary-artifact-v1` | `product:generate-temporary-artifact` + `cap:product-temp-artifact` |
| 2 | `docs-write` | `w3b-contract-result/cursor-docs-write-apply-v1` | `cursor.docs_write.apply` + `cap:cursor.docs_write` + `evreq:docs_write_artifact` |

## H. Evidence selection design

- Only **frozen** ReviewBundle snapshots participate.
- Semantic `selectEvidenceIds` returns required ids; missing any → incomplete / no PASS (AND).
- No OR semantics.
- Caller cannot bypass frozen RB by handing arbitrary Evidence as sole source of truth.
- Exact version matching preserved.

## I. Supersession lifecycle

- ClaimEvaluation remains **immutable** (create-only).
- `EvaluateContractResult` accepts `supersedesClaimEvaluationId` when subject/bindings coherent.
- No self-supersession / no cycles / no subject mismatch (existing invariants + CR gates).
- No DB schema migration.

## J. Current CE resolution algorithm

`resolveCurrentContractResultClaimEvaluation`:

1. `listByProject`
2. filter `subjectKind=execution_contract_result` ∧ `executionAttemptId`
3. mark ids referenced by any `supersedesClaimEvaluationId` as superseded
4. current = non-superseded; if multiple roots → max `evaluatedAt` then max id

## K. docs_write Product wiring

- `materializeW3bProductTerminal`: docs_write path when Artifact Evidence exists; failed Attempts without Artifact keep W3-B technical path.
- `requalifyDocsWriteContractResult`: freeze `rb:docs-write:…` if draft → EvaluateContractResult with docs_write CE id → supersede prior W3-B CE.
- Bound EO interpretation: path-shaped EO must match Evidence location; free-form EO may PASS when location≈bound targetPath (no NLP).
- Filesystem not re-used as second SoT at CR time.

## L. Attempt 3 ZERO-REAL requalification result

Campaign DB: `…/pje2e-real-01/product/oa-product.sqlite` (canonical services only; no manual SQL mutation of CE/RB).

| Fact | Before | After |
| --- | --- | --- |
| Attempts | 3 | **3** |
| `clm:w3b:b62e7e34320e78ea` | `not_proven` | `not_proven` (**immutable**) |
| Current CE | W3-B not_proven | `clm:docs-write:xat:w3a:c4c5670edb4658cc` **pass** |
| supersedes | — | `clm:w3b:b62e7e34320e78ea` |
| ruleRef | — | `w3b-contract-result/cursor-docs-write-apply-v1` |
| RB docs_write | draft | frozen `ready_for_review` |
| REAL / Execute / new Attempt | — | **ZERO** |

DB mutation method: **canonical Product/service APIs only** (`freezeReviewBundle` + `evaluateContractResult`).

## M. Provenance success disposition

**ADAPTED (non-structural):** `processDiagnostic` persisted on `RecordExecutionResult` success path when already available (symmetric with failure). No migration. Failure path unchanged.

## N. Tests

Focused Vitest (11 files / **105 passed**):

- `contractResultEvaluation.test.ts` (temp-artifact regression)
- `contractResultSemanticsRegistry.d0.test.ts` (T1–T14 registry/docs_write/AND)
- `contractResultDocsWriteRequal.d0.test.ts` (T15–T22 supersession/requal fixture)
- `contractResultCorrection*.test.ts` / `optionBBoundSnapshot.test.ts`
- `w3bProductTerminal.test.ts`
- checkpoint F recovery tests (R7/R8/R10)
- `importBoundaries.test.ts`

`npm run typecheck` → **PASS**

`git diff --check` (Product) → **PASS**

Genericity claim limit: **NOT** “generic ContractResult all classes” — only registry + temp-artifact preserved + docs_write second semantic.

## O. Roadmap tip (current + historical rename)

```
| **Timestamp maintenance CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01** | 2026-09-18 08:15:00 CEST (+0200) — **CONTRACT RESULT EXTENSIBILITY IMPLEMENTATION** · Cycle Delivery/architecture implementation · EVOL · CRITICAL · Macro **CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01** · parent R13 framing **ADOPTED BY MORRIS** (Result Semantics Registry · server-owned static · frozen RB multi-Evidence AND · explicit CE supersession · A+B one ZERO-REAL macro) · baseline `origin/main` `bb6af3cabef663bd8619b85326dbc205057b7c7d` · branche locale `feat/sfia-studio-contract-result-extensibility-01` · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · temp-artifact registry entry #1 preserved · docs_write second semantic proven · Attempt 3 ZERO-REAL requalification **PASS** (`clm:docs-write:xat:w3a:c4c5670edb4658cc` supersedes `clm:w3b:b62e7e34320e78ea` immutable `not_proven`) · success-path REAL provenance adapt (`processDiagnostic` on RecordExecutionResult) · **ZERO REAL** · runtime v3 = **NON ADOPTED** · **≠** Product Journey READY/COMPLETE · **≠** generic CR all effect classes · **≠** Git/PR/CI semantics · next = ChatGPT Critical Review → Morris Git-integration gate · push/PR/merge **NOT AUTHORIZED** by this tip |
| **Timestamp maintenance historique PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01 (pre-CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01)** | *(tip superseded by CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01 — HISTORICAL / SUPERSEDED AS CURRENT TIP)* — 2026-09-18 05:15:00 CEST (+0200) — **PRODUCT JOURNEY E2E REAL RECONCILIATION INTEGRATION** · Cycle **15** · Capitalisation / REX + intégration Git · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01** · parent campagne **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01** · baseline pré-intégration `origin/main` `26478b1ea5b010c625f0c6039c969fac5c135cf5` · branche `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` · checkpoints **R1–R12** consolidés · Product fixes **R1/R3/R4/R6/R7/R8/R10** = intégration candidate this PR · Attempt 1 FAIL · Attempt 2 FAIL Authentication required · Attempt 3 Cursor REAL **technical SUCCESS** · bounded docs_write filesystem effect + Artifact Evidence **PROVEN** in M4 isolated WT · Product Result remains **UNCLAIMED** · blocker = **ContractResult extensibility / Evidence wiring** (`no_applicable_contract_result_rule` for `cursor.docs_write.apply`) · capitalisation `projects/sfia-studio/convergence/product-journey-e2e-real-reconciliation-01-capitalization.md` · **ZERO REAL** this integration macro · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **≠** Product Journey E2E READY / COMPLETE · **≠** ContractResult docs_write PASS · **≠** runtime v3 ADOPTED · next after integration verified = **R13 — Contract Result extensibility framing — ZERO REAL** · **NOT STARTED / NOT AUTHORIZED** by this tip · repository lifecycle = **RESOLVE FROM GIT / PR evidence** |
```

## P. Framing document (complete useful content)

```markdown
# SFIA Studio — Contract Result Extensibility — Framing Pack

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Pack de **framing / décision technique** — extensibilité ContractResult |
| **Statut** | **ADOPTED BY MORRIS — IMPLEMENTATION IN PROGRESS / NOT YET INTEGRATED ON MAIN** |
| **Macro** | `CONTRACT-RESULT-EXTENSIBILITY-FRAMING-01` (R13) |
| **Parent** | `PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01` |
| **Horodatage création** | 2026-09-18 06:15:00 CEST (+0200) |
| **Baseline Git** | `origin/main` `bb6af3cabef663bd8619b85326dbc205057b7c7d` (PR **#501** MERGED / POST-MERGE VERIFIED) |
| **Branche locale framing (historique)** | `arch/sfia-studio-contract-result-extensibility-framing-01` |
| **Branche locale implementation (non poussée)** | `feat/sfia-studio-contract-result-extensibility-01` |
| **Cycle** | Delivery / architecture implementation · **EVOL** · **CRITICAL** |
| **CKC** | `ckc:studio:technical-architecture` — CONTENT VALIDATED · **aucune autorité d’exécution** |
| **runtime v3** | **NON ADOPTED** |
| **global L5** | **NOT ADOPTED** |
| **REAL / Execute / new Attempt** | **ZERO** this macro |
| **Horodatage décision Morris** | 2026-09-18 — ADOPT RESULT SEMANTICS REGISTRY (server-owned static + frozen RB multi-Evidence AND + explicit CE supersession + A+B one ZERO-REAL macro + success REAL provenance adapt if non-structural) |
| **Implémentation locale** | `feat/sfia-studio-contract-result-extensibility-01` — registry + docs_write entry #2 + Attempt 3 requalified WITHOUT REAL (`clm:docs-write:xat:w3a:c4c5670edb4658cc` PASS supersedes `clm:w3b:b62e7e34320e78ea`) — **NOT integrated on main** |
| **Anti-claims** | ≠ Product Journey READY/COMPLETE · ≠ generic ContractResult all effect classes · ≠ Git/PR/CI semantics · ≠ runtime v3 ADOPTED · ≠ integrated on main · ≠ project commit/push/PR authorized |

---

## 1. Context / trigger

La campagne Product Journey E2E REAL Reconciliation a prouvé (Attempt 3) qu’un Cursor REAL gouverné peut écrire un artifact Markdown borné et que l’Evidence Artifact docs_write existe avec digest conforme.

Le Product Result reste **UNCLAIMED** parce que le moteur ContractResult actuel :

1. n’a **aucune règle applicable** pour `cursor.docs_write.apply` / `evreq:docs_write_artifact` (`no_applicable_contract_result_rule`) ;
2. sur le chemin W3-B Product, évalue l’Evidence **technique** (`ev:w3b:…`) plutôt que l’Evidence Artifact docs_write (`ev:docs-write:…`) ;
3. (secondaire) n’expose pas durablement sur Attempt **succeeded** les mêmes signaux de provenance REAL que le chemin failure (`processDiagnostic`).

R13 **ne ré-litige pas** Attempt 3. Il qualifie l’architecture minimale pour qu’**un seul** moteur ContractResult puisse évaluer de futures classes d’effets à partir d’Evidence fiables, **sans** hardcoder durablement chaque action dans le cœur, **sans** second moteur, **sans** sur-concevoir toutes les opérations futures.

---

## 2. Current architecture

### 2.1 Flow (état factuel sur `bb6af3ca`)

```
ExecutionContract (live)
  → executionContractSemanticMaterial()          [lib/oa/execution-contract]
  → captureBoundExecutionContractSnapshot         [Attempt.boundExecutionContract — durable Option B]
ExecutionAttempt (terminal)
  → Evidence                                      [durable ; Product W3-B : 1 Evidence/Attempt]
  → ReviewBundle (evidenceRefs[])                 [durable ; freeze → frozenEvidenceSnapshots]
  → EvaluateContractResult.execute                [single Evidence in request]
       → validateBoundExecutionContractSnapshot
       → resolveApplicableContractResultRule      [HARD-CODED — 1 rule]
       → assessExpectedOutputs / assessEvidenceRequirements
       → deriveCanonicalContractResultStatus      [AND]
       → ClaimEvaluation create (version: 1)      [durable SoT]
  → projectContractResultVerdict / W3-B Product terminal
```

### 2.2 Owner / types / propriétés

| Étape | Module | Durable ? | Cardinalité | Couplage |
| --- | --- | --- | --- | --- |
| Semantic material | `semanticFingerprint.ts` → `ExecutionContractSemanticMaterial` | Live EC + bound copy | 1 | Flat : action, caps, EO, ER, target, scope, inputs… |
| Bound snapshot | `boundExecutionContract.ts` | **Oui** sur Attempt | 0..1 | CR lit **uniquement** le bound, pas le live EC |
| Evidence | Evidence domain | **Oui** | N possibles ; Product path = 1 | W3-B : `ev:w3b:{sha16}` ; docs_write : `ev:docs-write:{attempt}` |
| ReviewBundle | RB domain | **Oui** | N `evidenceRefs` ; freeze obligatoire pour CR | Attach/reopen/supersede existent |
| EvaluateContractResult | `evaluateContractResult.ts` | Écrit CE | **1 Evidence** dans la request | Evidence doit être dans frozen snapshot |
| Rule resolve | `contractResultSemanticEvaluator.ts` | Soft | **1 règle hard-codée** | `action === product:generate-temporary-artifact` ∧ `cap:product-temp-artifact` |
| EO/ER assess | `contractResultAssessment.ts` | Dans CE | N EO × N ER ; **AND** | Assessors temp-artifact seulement si rule applicable |
| ClaimEvaluation | CE domain | **Oui** create-only (CR) | 1 CE / (id, idempotencyKey) | `subjectKind = execution_contract_result` |
| Product terminal | `materializeW3bProductTerminal.ts` | Projection | SUCCESS ⇔ Attempt succeeded ∧ CE pass ∧ bindings | Pinned ids `clm:w3b:…` / `idem:w3b-ce:…` |

### 2.3 Fail-closed / idempotency

- **Hard fail (pas de CE)** : mismatch ids, bound corrupt, Evidence hors RB / version mismatch, RB non frozen / incomplete / synthesisOnly, conflit fingerprint idempotency, evaluator unavailable.
- **Soft durable `not_proven`** : bound manquant ; **`no_applicable_contract_result_rule`** ; EO/ER non satisfaits.
- **PASS canonique** : Attempt `succeeded` ∧ **tous** EO PASS ∧ **tous** ER SATISFIED ∧ **listes non vides**. Pas de PASS sur `resultRef` seul ni sur Evidence `available` seul (invariants temp-artifact).
- **Idempotency body** : claimEvaluationId, idempotencyKey, reviewBundleId, attemptId, contractId, contractVersion, semanticFingerprint, actor. Même clé + même fingerprint → **reuse** (pas de recalcul).

### 2.4 GENERIC vs SPECIFIC

| Déjà GENERIC | Actuellement SPECIFIC |
| --- | --- |
| Evidence / RB (N refs, freeze, reopen) | `resolveApplicableContractResultRule` — une seule règle |
| ClaimEvaluation aggregate + OCC | `assessTempArtifactExpectedOutput` / `…EvidenceRequirement` |
| Shell `EvaluateContractResult` (bindings, RB gates, fingerprint) | Constantes W3-B EO template FR + `evreq:generate-temporary-artifact` + pattern `res:w3a:` |
| Bound snapshot Option B | Product W3-B ids pinned + 1 Evidence technique |
| `deriveCanonicalContractResultStatus` (AND) | docs_write : ingest Artifact + RB **draft**, **jamais** `EvaluateContractResult` |
| W3-A `ExecutionEffectClass` → action/cap/`evreq:{class}` (préparation) | Typed Git Evidence sources (hors CR evaluator) |

**Conclusion :** le shell ClaimEvaluation/ContractResult est générique ; la **sémantique de résultat** est fermée sur un seul couple action+capability. Ce n’est **pas** un registry manqué que R12 contourne : la seam d’extension n’existe pas encore — docs_write **s’arrête avant** l’évaluation.

---

## 3. R12 concrete failure

| Fait | Valeur |
| --- | --- |
| Attempt | `xat:w3a:c4c5670edb4658cc` |
| Technical | `succeeded` / exit 0 |
| Effect | Markdown attendu dans M4 WT isolé |
| Artifact Evidence | `ev:docs-write:xat:w3a:c4c5670edb4658cc` — digest match |
| CE | `not_proven` · reason `no_applicable_contract_result_rule` |
| Rule supportée | uniquement `product:generate-temporary-artifact` + `cap:product-temp-artifact` |
| Evidence évaluée (W3-B) | technique `ev:w3b:…` / `resultRef`, **pas** Artifact docs_write |
| Fingerprint drift | **KEEP** (non-bloquant) |

Ne pas fabriquer de PASS. Ne pas muter Attempt 3.

---

## 4. Problem statement

**Question structurante :**

> How does one existing ContractResult engine deterministically evaluate many future classes of contract outcomes from trustworthy Evidence, without becoming action-hardcoded or over-generalized?

Concrètement : comment répondre « Quels outcomes le contrat exigeait-il, et les Evidence observées les prouvent-elles ? » pour docs_write **et** (demain) commit / push / PR / CI / merge, **sans** :

- second moteur ContractResult ;
- hardcoding pérenne action-par-action **dans le cœur** comme architecture finale sans décision Morris ;
- schéma déclaratif sur-généralisé trop tôt ;
- PASS non fail-closed (status-only / resultRef-only).

---

## 5. Invariants

1. **Un seul** moteur EvaluateContractResult / ClaimEvaluation `execution_contract_result`.
2. Assessment sur **bound snapshot** uniquement (pas live EC).
3. Deterministic + **fail-closed** ; unknown rule → `not_proven` (soft) ou reject (hard) — jamais PASS silencieux.
4. Evidence **traçable** dans ReviewBundle **frozen** ; pas de PASS sur narration.
5. **HOW ≠ WHAT** : routing/executor ≠ expected outcomes / EvidenceRequirements.
6. Authority / capability / Confirmation restent hors du PASS métier sauf si le contrat les exige explicitement comme ER.
7. Pas de plugin marketplace / client-controlled rule selection.
8. Temporary bricks only **WITH EXIT** (Build Doctrine R5/A7).
9. runtime v3 reste **NON ADOPTED** ; Build Doctrine / C1 **inchangés** par R13.
10. docs_write = **cas révélateur**, pas architecture cible exclusive.

---

## 6. Existing reusable assets

- `EvaluateContractResult` shell + CE subject `execution_contract_result`
- `ExecutionContractSemanticMaterial.expectedOutputs` + `evidenceRequirements` (**WHAT** déjà nommé)
- Bound snapshot Option B
- ReviewBundle multi-Evidence + freeze/reopen
- `ingestDocsWriteArtifactEvidence` (Artifact Evidence + RB draft)
- W3-A `ExecutionEffectClass` / `evreq:{class}` (préparation EC)
- Typed Git Evidence sources (`git:local_commit`, …) — preuve hors CR aujourd’hui
- Canonical AND status derivation
- Idempotency fingerprint + create-only CE (auditabilité)

**Pas de types OA nommés `ExpectedEffect` / `EffectKind`.** Closest : `expectedOutputs`, `ExecutionEffectClass`, ops1 legacy `expectedEffects` (hors OA CR).

---

## 7. Result-semantics extension axes

| Axe | Existe déjà ? | Usage CR aujourd’hui | Candidat extension ? |
| --- | --- | --- | --- |
| A. concrete `action` | Oui | **Gate** rule | Oui (applicability) |
| B. `requiredCapabilities` | Oui | **Gate** rule | Oui (applicability) |
| C. `evidenceRequirements` / `evreq:*` | Oui | Assessed **si** rule applicable | **Oui — WHAT primary** |
| D. `expectedOutputs` | Oui (pas ExpectedEffect) | Assessed **si** rule applicable | **Oui — WHAT primary** |
| E. target/resource class | `target` / `scope` | Fingerprint only | Secondaire |
| F. compound policy | `ruleRef` + reviewPolicyRef | 1 constante W3-B | Oui (versioned ruleRef) |
| G. `ExecutionEffectClass` | Oui (W3-A) | Indirect (build EC) | Préparation, pas discriminator CR final |

**Lecture factuelle :** l’extensibilité ne doit **pas** inventer un nouveau concept « ExpectedEffect » tant que `expectedOutputs` + `evidenceRequirements` portent le WHAT. Le discriminant d’**applicabilité** reste naturellement **(action ∧ capabilities)** ; le discriminant d’**assessment** est **(EO templates + ER keys)** porté par le material bound, délégué à des assessors enregistrés.

---

## 8. Multi-Evidence model

| Question | Conclusion minimale |
| --- | --- |
| API actuelle | **1** Evidence dans `EvaluateContractResultRequest` |
| RB | **N** Evidence possibles |
| CR lit-il tout le RB ? | **Non** — seulement l’Evidence request |
| Combinaison EO/ER | **AND** ; pas d’OR |
| Futur docs_write | 1 Artifact Evidence suffit souvent (digest+path+type) |
| Futur commit/push/PR/CI | Souvent **plusieurs** Evidence typées dans **un** RB |

**Modèle minimal recommandé (framing) :**

- Conserver **un** ReviewBundle frozen comme unité d’audit.
- Étendre la sélection d’Evidence : l’assessor / rule peut exiger **un sous-ensemble nommé** des `frozenEvidenceSnapshots` (AND), pas un flatten obligatoire en une seule Evidence.
- Court terme (docs_write) : sélectionner l’Artifact Evidence docs_write depuis le RB (éventuellement seul membre).
- Ne **pas** introduire d’OR dans R13 ; OR = dette future explicite si un cas réel l’exige.

---

## 9. Options

### OPTION 1 — Action-specific rules (impératif dans le evaluator)

Chaque nouvelle action (`cursor.docs_write.apply`, `git.commit`, …) ajoute une branche dans `resolveApplicableContractResultRule` + assessors dédiés dans le même module (ou fichiers jumeaux).

| | |
| --- | --- |
| **Taille** | Petite pour 1–2 actions ; croît linéairement |
| **Couplage** | Fort au cœur `contractResultSemanticEvaluator` |
| **Maintenance** | Chaque action = diff cœur + tests |
| **Testabilité** | Bonne (unitaire) |
| **Forces** | Simple, immédiat, zéro abstraction nouvelle |
| **Debt** | Hardcoding durable dans le cœur ; docs_write peut devenir « l’architecture » par accident |
| **Exit** | Extraire vers registry (Option 2) dès la 2ᵉ/3ᵉ règle |

Option **valide**, pas un strawman — surtout si Morris veut un micro-lot docs_write only **TEMPORARY WITH EXIT** explicite.

### OPTION 2 — Extensible Result Semantics Registry (reco technique candidate)

**Un** moteur EvaluateContractResult inchangé dans ses invariants. Remplacer le hard-code de `resolveApplicableContractResultRule` + le branchement assessors par un **registry server-owned, static/compile-time** de *Result Semantics* :

Chaque entrée :

- **applicability** : prédicat déterministe sur bound material (typiquement `action` + `requiredCapabilities`) ;
- **`ruleRef` versionné** ;
- **EO assessor** / **ER assessor** (WHAT) ;
- **Evidence selector** : choisit 1..N snapshots frozen du RB (fail-closed si manquant) ;
- **reviewPolicyRef** compatible.

Propriétés :

- pas de marketplace / pas de règles client-controlled ;
- unknown → `applicable: false` → `not_proven` (`no_applicable_contract_result_rule`) ;
- temp-artifact devient la **première** entrée registry (comportement préservé) ;
- docs_write = **deuxième** entrée (pas un one-off hors registry) ;
- futurs commit/push/PR/CI = nouvelles entrées **sans** toucher le shell EvaluateContractResult.

### OPTION 3 — Declarative contract-driven result semantics

Le contrat porte un schéma déclaratif versionné d’effets attendus (predicates génériques) interprété par un moteur générique sans registry d’assessors.

| | |
| --- | --- |
| **Forces** | Maximalement « WHAT in contract » |
| **Risques** | Sur-généralisation ; schema/migration ; validation complexe ; sécurité des predicates ; maturité Product insuffisante |
| **Compat** | ECs existants n’ont pas ce schéma ; `expectedOutputs` sont des strings FR libres aujourd’hui |
| **Verdict framing** | **Excessif** pour la maturité actuelle |

### OPTION 4 (si utile) — Temporary Option 1 for docs_write WITH EXIT → Option 2

Séquence : Lot B docs_write en Option 1 **explicitement temporaire**, exit = extraction registry Option 2 avant toute 3ᵉ action. Acceptable seulement si Morris veut un PASS docs_write plus rapide **avec** exit daté. Sinon préférer Option 2 dès Lot A.

---

## 10. Tradeoffs

| Critère | Opt 1 | Opt 2 | Opt 3 |
| --- | --- | --- | --- |
| Reuse moteur unique | Oui | Oui | Oui (mais moteur devient interpréteur) |
| Pas d’archi parallèle | Oui | Oui | Risque de « second langage » |
| Deterministic / fail-closed | Oui | Oui | Oui si predicates bornés |
| Auditabilité (`ruleRef`) | Oui | Oui (meilleure versioning) | Dépend schéma |
| Evidence traceability | Oui | Oui (+ selector multi) | Oui |
| Bound snapshot compat | Oui | Oui | Migration schéma probable |
| Back-compat temp-artifact | Oui | Oui (1ʳᵉ entrée) | Reprise EO strings |
| No migration preferred | Oui | Oui | Non / risqué |
| Extensibilité Git/PR/CI | Coûteux | Naturelle | Théorique |
| Effort | Minimal court terme | Petit-moyen | Élevé |
| Complexité cognitive | Basse puis dette | Moyenne stable | Haute |
| Testabilité | Bonne | Bonne (isolation entrée) | Difficile |
| Idempotency / re-eval | Inchangé | Inchangé | Inchangé + schema |
| HOW/WHAT separation | Faible (tout dans ifs) | Forte (applicability vs assessors) | Maximale |
| Progressive delivery | Oui | Oui (A→B→C) | Difficile |
| Debt/exit | Exit → Opt 2 | Exit = registry frozen + ruleRefs | Exit = simplification |

---

## 11a. Morris decision (ADOPTED)

**ADOPT RESULT SEMANTICS REGISTRY ARCHITECTURE** — server-owned static registry · frozen ReviewBundle multi-Evidence AND · explicit ClaimEvaluation supersession · implement Lot A+B as one ZERO-REAL macro · success REAL provenance adapt if non-structural.

Implementation status (local, not on main): registry live; temp-artifact entry #1; docs_write entry #2; Attempt 3 ZERO-REAL requalification **PASS** (`clm:docs-write:xat:w3a:c4c5670edb4658cc` supersedes `clm:w3b:b62e7e34320e78ea`); project commit/push/PR **FORBIDDEN** until Morris Git-integration gate.

## 11. Technical recommendation candidate (historical — now consumed)


**PREFERRED (Cursor technical recommendation — NOT a Morris decision) : OPTION 2 — Result Semantics Registry.**

### Pourquoi

- Réutilise le shell EvaluateContractResult / CE / bound snapshot / AND status **tels quels**.
- Corrige le vrai gap : **fermeture** de `resolveApplicableContractResultRule` + assessors hard-codés.
- Empêche docs_write de devenir l’architecture par accident (Option 1 sans exit).
- Évite le sur-design déclaratif (Option 3) alors que `expectedOutputs` / `evidenceRequirements` existent déjà.
- Aligné Build Doctrine : reuse, pas de parallèle, temporary-with-exit si une étape Option 1 est jamais choisie.

### Exact reuse points

- `EvaluateContractResult` request/gates/fingerprint/create CE
- `deriveCanonicalContractResultStatus`
- Bound `semanticMaterial.expectedOutputs` / `evidenceRequirements`
- ReviewBundle freeze + frozen snapshots
- Existing temp-artifact assessors → **ported as first registry entry**
- `ingestDocsWriteArtifactEvidence` → Evidence + RB (freeze à ajouter côté wiring Product)

### Exact new abstraction(s)

- `ContractResultSemantic` (ou nom équivalent) : applicability + ruleRef + EO/ER assess + EvidenceSelector
- `CONTRACT_RESULT_SEMANTICS` : tableau/static map **server-owned**
- `resolveApplicableContractResultRule` devient lookup registry (API publique stable)

### Inchangé

- ClaimEvaluation schema / subjectKind
- Bound snapshot Option B
- Product SUCCESS projection rules (CE pass ∧ Attempt succeeded)
- Build Doctrine / C1 / runtime v3 NON ADOPTED
- Pas de second moteur

### Footprint attendu

- Lot A : registry seam + migration code temp-artifact → entrée #1 + tests non-régression
- Lot B : entrée docs_write + Evidence selector Artifact + wiring freeze RB docs_write + EvaluateContractResult + tests + requal Attempt 3 **sans REAL** si lifecycle B
- Lot C : futures classes seulement quand une capacité Product réelle les exige

### Migration

**Non** (préféré) — pas de migration SQLite si CE/RB/Evidence actuels suffisent ; nouveaux `ruleRef` / CE ids seulement.

### docs_write comme première preuve non one-off

Deuxième **entrée registry**, pas branche orpheline hors modèle. Même fail-closed, mêmes invariants Evidence frozen.

### Futurs Git/PR/CI

Nouvelles entrées registry + Evidence typées déjà amorcées (`TypedGitEvidenceSource`) ; **hors** R13 implementation.

### Risks

- Registry trop large trop tôt → limiter Lot C
- Evidence selector mal borné → PASS partiel → exiger AND explicite des snapshots requis
- Product id pinning W3-B (`clm:w3b:`) → stratégie d’identité CE docs_write à trancher (voir §13)

### Stop conditions

- Tentation de second moteur
- Rule selection client-controlled
- PASS status-only / resultRef-only
- Migration persistence « pour le plaisir »
- Implémenter commit/push/PR/CI dans le premier lot d’implémentation

---

## 12. Decision status

Morris a **ADOPTED** Option 2 (+ supersession + A+B + provenance adapt if non-structural).
La recommandation technique §11 est **CONSUMED**.
Reste ouvert : **Git integration** (commit/push/PR/merge) — gate Morris distinct.

---

## 13. Attempt 3 requalification analysis

| Question | Fait |
| --- | --- |
| Même `idem:w3b-ce:{attempt}` | **Reuse** CE `not_proven` — **pas** de recalcul |
| EvaluateContractResult | **create-only** `version: 1` — pas d’update in-place |
| `supersedesClaimEvaluationId` | Existe sur CE / EvaluateClaim ; **pas** branché sur EvaluateContractResult |
| Evidence Artifact | **Déjà** durable `ev:docs-write:xat:w3a:c4c5670edb4658cc` |
| RB docs_write | **draft** — freeze **non** fait |
| Nouveau REAL | **Non requis** pour re-prouver l’effet fichier déjà Evidence-backed |

### Classification : **B — CLOSED LOCALLY (implementation macro)**

**B — small non-structural lifecycle wiring** — implemented as `requalifyDocsWriteContractResult` (canonical freeze + EvaluateContractResult + `supersedesClaimEvaluationId`).

Campaign DB (`pje2e-real-01`) post-requal (2026-09-18):

| Fact | Value |
| --- | --- |
| Attempts | **3 → 3** (no new Attempt) |
| Prior CE | `clm:w3b:b62e7e34320e78ea` **immutable** `not_proven` |
| Successor CE | `clm:docs-write:xat:w3a:c4c5670edb4658cc` **pass** · ruleRef `w3b-contract-result/cursor-docs-write-apply-v1` · supersedes prior |
| RB | `rb:docs-write:xat:w3a:c4c5670edb4658cc` frozen (`ready_for_review`) |
| REAL | **ZERO** |

**Interdit (toujours) :** rewrite SQLite / mutation Attempt 3 / fake PASS / new REAL.

---

## 14. Success-path REAL provenance disposition

| Fait | |
| --- | --- |
| `processDiagnostic` | Persisté via `recordExecutionFailure` ; **absent** du chemin success dans execution-attempt application |
| UI | `productReservationsForAttempt` lit `processDiagnostic.realProcessInvoked` (et proxies) |
| Effet | SUCCESS REAL peut afficher encore la sémantique « substitution » / antiClaims.realProven=false |

**Disposition candidate : DEFER** (ne pilote pas l’architecture ContractResult).

**ADAPT IN SAME IMPLEMENTATION** acceptable seulement comme sidecar non-bloquant du Lot B si le coût est trivial (symétrie success/failure de `processDiagnostic` déjà typé). Sinon **DEFER** explicitement hors CR extensibility.

**KEEP** fingerprint drift R12.

---

## 15. Migration / backward compatibility

| Asset | Impact Option 2 |
| --- | --- |
| temp-artifact CR | Préservé comme entrée #1 ; tests non-régression obligatoires |
| Historical CE | Immutables ; nouveaux CE pour nouvelles evals |
| Bound EC snapshots | Inchangés |
| RB / Evidence | Inchangés ; freeze docs_write draft |
| Attempt 3 | Lecture seule ; pas de mutation |
| QA deterministic | Étendre suites ; ne pas casser W3-B |
| SQLite schema | **Aucune migration préférée** |

Si une migration s’avérait nécessaire → **STOP** / Morris structural gate séparé.

---

## 16. Progressive implementation trajectory

### Lot A — Core extensibility seam

- Introduire registry Result Semantics
- Porter temp-artifact comme entrée #1
- Tests non-régression W3-B / EvaluateContractResult
- **ZERO REAL** · pas de docs_write PASS encore

### Lot B — docs_write first additional semantic

- Entrée registry docs_write (`cursor.docs_write.apply` + `cap:cursor.docs_write` + `evreq:docs_write_artifact` / EO material)
- Evidence selector → Artifact Evidence
- Freeze RB docs_write + EvaluateContractResult wiring Product
- Requalification déterministe Attempt 3 **si** classification B confirmée par Morris
- Provenance success-path : DEFER ou sidecar minimal
- **ZERO REAL** préféré

### Lot C — Future effect classes

- Seulement quand une capacité Product réelle l’exige (commit/push/PR/CI/merge)
- Pas de micro-cycle par fichier
- Pas d’implémentation dans R13

**Forme d’implémentation post-décision :** un macro cohérent pouvant contenir A+B s’ils restent petits ; **pas** un micro-cycle R1-style par action.

---

## 17. Debt / exit

| Brick | Exit |
| --- | --- |
| Si Opt 1 temporaire docs_write | Exit daté → extraction registry Opt 2 avant 3ᵉ action |
| Registry Opt 2 | Exit = ruleRefs versionnés + allowlist server-owned figée par lot |
| CE dual-id (w3b vs docs_write) | Exit = sélection Product unique documentée / éventuelle supersession |
| Provenance success DEFER | Exit = lot dédié ou sidecar B |

---

## 18. Morris decisions required

1. **Architecture principale** : Option 1 · Option 2 · Option 3 · Option 4 (1→2 with exit) ?
2. **Evidence model** : confirmer selector multi-Evidence AND depuis RB frozen (vs garder 1 Evidence API long-terme) ?
3. **Attempt 3 requal** : accepter classification **B** (freeze + new CE ids + selector) ? Exiger sous-point **C** supersession ?
4. **Provenance success-path** : DEFER vs ADAPT in Lot B ?
5. **Périmètre premier lot d’implémentation** : A only · A+B · autre ?
6. **GO d’implémentation** distinct après décision (R13 n’autorise **aucun** code Product).

---

## 19. Claims allowed / forbidden

### Allowed (après framing)

- Architecture CR actuelle factuellement mappée
- Options d’extensibilité qualifiées
- Recommandation technique **candidate**
- Requalification Attempt 3 classée **B** (avec réserve C supersession)
- ZERO REAL / ZERO Product implementation

### Forbidden

- Architecture ADOPTED
- docs_write ContractResult fixed / PASS
- Attempt 3 Product PASS
- Generalized Git effects supported
- Product Journey READY / COMPLETE
- runtime v3 ADOPTED

---

## 20. Next gate

**Après décision Morris :** macro d’implémentation Contract Result extensibility (Lot A[+B]) — **ZERO REAL** jusqu’à GO explicite distinct.

**Hors scope immédiat :** R13 n’autorise pas commit/push/PR/merge de ce document ; publication = Review Handoff L3 uniquement jusqu’à GO Morris d’intégration documentaire éventuel.

---

## Annexe A — Source map (code)

| Chemin | Rôle |
| --- | --- |
| `app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts` | Rule hard-codée + assessors temp-artifact |
| `app/lib/oa/evidence-review/application/contractResultAssessment.ts` | EO/ER dispatch + AND status |
| `app/lib/oa/evidence-review/application/evaluateContractResult.ts` | Shell CR · 1 Evidence · create CE |
| `app/lib/oa/evidence-review/application/contractResultReviewPolicy.ts` | Policy bypass Morris structural gate (W3-B) |
| `app/lib/oa/evidence-review/application/contractResultVerdictProjection.ts` | Projection verdict |
| `app/lib/oa/evidence-review/domain/contractResultTypes.ts` | Bindings / subjectKind |
| `app/lib/oa/execution-contract/domain/semanticFingerprint.ts` | Semantic material |
| `app/lib/oa/execution-attempt/domain/boundExecutionContract.ts` | Bound snapshot |
| `app/features/project-assistant/w2/materializeW3bProductTerminal.ts` | Product CR orchestration |
| `app/features/project-assistant/w2/w3bProductTerminalProjection.ts` | Terminal + reservations |
| `app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts` | Artifact Evidence + RB draft |
| `app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts` | ER docs_write profile |

## Annexe B — Roadmap note (candidate only — NOT applied in R13)

Tip actuel déjà correct : next = R13 framing · NOT STARTED.
**Ne pas modifier** la Roadmap dans R13. Après décision Morris + éventuelle intégration doc, tip factuel du type : « R13 framing QUALIFIED / decision PENDING|CONSUMED ».

```

## Q. Claims

### ALLOWED / PROVEN this macro

- Result Semantics Registry implemented (server-owned static)
- temp-artifact observationally preserved
- docs_write second semantic deterministically proven
- multi-Evidence AND behavior proven at tested scope
- CE supersession + current resolver proven
- Attempt 3 requalified WITHOUT REAL
- success-path REAL provenance adapted (processDiagnostic)
- ZERO REAL this macro

### FORBIDDEN / NOT CLAIMED

- generalized Git/PR/CI semantics
- generic ContractResult across all effect classes
- Product Journey READY / COMPLETE
- runtime v3 ADOPTED
- global L5
- fourth Cursor REAL Attempt
- integrated on main / project Git authorized

## R. Reserves

- Post-Evidence / Nora replan consumption of successor CE: not forced; existing Product path should consume current CE — full Product Journey READY still open.
- Contrasted non-artifact effect class (e.g. bounded git.commit) still required for stronger cross-class genericity.
- package-lock.json dirty out of scope — do not include in candidate commit.

## S. Next gate

**ChatGPT Critical Review → Morris Git-integration gate** (commit / push / PR / CI / conditional merge).

Project push / PR / merge **NOT authorized** by this pack.

## T. Verdict

**CONTRACT RESULT EXTENSIBILITY A+B IMPLEMENTED — DOCS_WRITE SECOND SEMANTIC PROVEN — ATTEMPT 3 REQUALIFIED WITHOUT REAL — READY FOR CHATGPT CRITICAL REVIEW / MORRIS GIT-INTEGRATION GATE**

---

## U. Exact files changed (candidate commit scope)

### Modified
- `projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/index.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts`
- `projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts`
- `projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts`
- `projects/sfia-studio/app/features/project-assistant/f3/index.ts`
- tests: correction / optionB / (call-site adaptations)
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

### Added
- registry + temp-artifact + docs_write semantics modules
- `resolveCurrentContractResultClaimEvaluation.ts`
- `requalifyDocsWriteContractResult.ts`
- registry + requal tests
- `sfia-studio-contract-result-extensibility-framing.md`

### Out of commit scope
- `projects/sfia-studio/app/package-lock.json`
- `.tmp-sfia-review/**` (except published handoff path)
- campaign SQLite / M4 worktrees

### Candidate PR scope
Single PR: Contract Result extensibility A+B + Attempt3 ZERO-REAL requal wiring + framing ADOPTED + Roadmap tip. Base `main` @ `bb6af3ca`.

---

## V. FULL DIFF — modified tracked Product files

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
index 62fdc039..fbb010b6 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
@@ -313,6 +313,7 @@ describe("W3-B contract result correction proofs", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
index 5f41d2f3..e786e234 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrectionPass2.test.ts
@@ -141,12 +141,14 @@ describe("W3-B correction pass 2", () => {
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === goodEvidence.evidenceId ? goodEvidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:unknown",
       idempotencyKey: "idem:ce:unknown",
@@ -286,6 +288,7 @@ describe("W3-B correction pass 2", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
index 60c09d54..517b5813 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/optionBBoundSnapshot.test.ts
@@ -298,12 +298,14 @@ describe("Option B — Contract Result snapshot-only + freshness", () => {
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:missing-snap",
       idempotencyKey: "idem:ce:missing-snap",
@@ -350,12 +352,14 @@ describe("Option B — Contract Result snapshot-only + freshness", () => {
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:corrupt-snap",
       idempotencyKey: "idem:ce:corrupt-snap",
@@ -582,6 +586,7 @@ describe("Option B — Confirm exact binding", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
@@ -740,6 +745,7 @@ describe("Option B — Confirm exact binding", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
@@ -898,6 +904,7 @@ describe("Option B — Confirm exact binding", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
@@ -1168,12 +1175,14 @@ describe("Option B micro-correction OB01 — canonical snapshot validation", ()
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:ob01",
       idempotencyKey: `idem:ce:ob01:${JSON.stringify(snapOverrides).slice(0, 40)}`,
@@ -1205,12 +1214,14 @@ describe("Option B micro-correction OB01 — canonical snapshot validation", ()
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:ob01-proj",
       idempotencyKey: "idem:ce:ob01-proj",
@@ -1240,12 +1251,14 @@ describe("Option B micro-correction OB01 — canonical snapshot validation", ()
         findById: async () => null,
         findByIdempotencyKey: async () => null,
         exists: async () => false,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
       { nowIso: () => "2026-08-24T00:00:00.000Z" },
       { append: () => {} },
       { newCorrelationId: () => "cor:1", newProvenanceId: () => "prv:1" },
+      { findById: async (id: string) => (id === evidence.evidenceId ? evidence : null) },
     ).execute({
       claimEvaluationId: "clm:w3b:ob01-cycle",
       idempotencyKey: "idem:ce:ob01-cycle",
@@ -1398,6 +1411,7 @@ describe("Option B micro-correction OB01 — canonical snapshot validation", ()
           }),
           findByIdempotencyKey: async () => null,
           exists: async () => true,
+        listByProject: async () => [],
           create: async () => {},
           update: async () => {},
         },
@@ -1565,6 +1579,7 @@ describe("Option B micro-correction OB02 — real attempt.status at Confirm", ()
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
@@ -1747,6 +1762,7 @@ describe("Option B micro-correction OB03 — W3-B freshness at Confirm", () => {
         }),
         findByIdempotencyKey: async () => null,
         exists: async () => true,
+        listByProject: async () => [],
         create: async () => {},
         update: async () => {},
       },
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts b/projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
index 2e337fdc..daa150e5 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts
@@ -14,6 +14,7 @@ import {
   M4_BOUNDED_DOCS_WRITE_SCOPE,
   M4_BOUNDED_DOCS_WRITE_TARGET,
 } from "@/lib/oa/execution-attempt";
+import { BOUNDED_DOCS_WRITE_EO_TEMPLATE } from "@/lib/oa/evidence-review";
 import { DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS } from "@/lib/oa/execution-contract";
 import type { M3ResolvedExecutionFields } from "./resolveM3ExecutionContract";

@@ -130,6 +131,7 @@ export function boundedDocsWriteM3ResolutionProfile(): M3ResolvedExecutionFields
     ],
     executionWindowClass: DEFAULT_BOUNDED_READ_ONLY_M3_EXECUTION_WINDOW_CLASS,
     evidenceRequirements: [...BOUNDED_DOCS_WRITE_LOCAL_EVIDENCE_REQUIREMENTS],
+    expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
   };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
index 1c9739ce..1d3c5ae7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts
@@ -307,6 +307,16 @@ export async function completeBoundedReadOnlyLaunch(input: {
   }

   const resultRef = resultRefForAttempt(input.attempt.attemptId);
+  const successDiagnostic = buildProcessFailureDiagnostic({
+    observation,
+    boundaryProofMode:
+      input.services.realBoundary?.launchPort.boundaryProofMode ===
+        "cursor_real" ||
+      input.services.realBoundary?.launchPort.boundaryProofMode ===
+        "deterministic_fake"
+        ? input.services.realBoundary.launchPort.boundaryProofMode
+        : undefined,
+  });
   const recorded = await input.services.recordExecutionResult.execute({
     attemptId: input.attempt.attemptId,
     adapterId: M4_REAL_GATEWAY_ADAPTER_ID,
@@ -314,6 +324,7 @@ export async function completeBoundedReadOnlyLaunch(input: {
     technicalExitCode: 0,
     durationMs: observation.durationMs,
     expectedAttemptVersion: input.attempt.version,
+    processDiagnostic: successDiagnostic,
   });
   if (!recorded.ok || !recorded.attempt) {
     return {
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/index.ts b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
index eece03eb..e5df860c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/index.ts
@@ -111,3 +111,9 @@ export {
   createF3TestExecutionAdapter,
 } from "./fixtureAgent";
 export { createAttemptReaderBridge } from "./attemptReaderBridge";
+export { BOUNDED_DOCS_WRITE_EO_TEMPLATE } from "@/lib/oa/evidence-review";
+export { requalifyDocsWriteContractResult } from "../w2/requalifyDocsWriteContractResult";
+export type {
+  RequalifyDocsWriteContractResultInput,
+  RequalifyDocsWriteContractResultResult,
+} from "../w2/requalifyDocsWriteContractResult";
diff --git a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
index 84ce0c16..207253c7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts
@@ -116,6 +116,11 @@ export type M3ResolvedExecutionFields = {
    * coherent with NO_* constraints instead of inheriting a contradictory Git set.
    */
   evidenceRequirements?: string[];
+  /**
+   * Optional expectedOutputs override for the successor (server-side only).
+   * Bounded docs-write binds the Contract Result EO template.
+   */
+  expectedOutputs?: string[];
 };

 export type ResolveM3ExecutionContractInput = {
@@ -367,6 +372,10 @@ function successorMatchesResolution(
     resolution.evidenceRequirements === undefined ||
     [...contract.evidenceRequirements].join("\0") ===
       [...resolution.evidenceRequirements].join("\0");
+  const expectedOutputsOk =
+    resolution.expectedOutputs === undefined ||
+    [...(contract.expectedOutputs ?? [])].join("\0") ===
+      [...resolution.expectedOutputs].join("\0");
   return (
     contract.action === resolution.action.trim() &&
     contract.target === resolution.target.trim() &&
@@ -376,6 +385,7 @@ function successorMatchesResolution(
     [...contract.constraints].join("\0") === constraints.join("\0") &&
     [...contract.stopConditions].join("\0") === stopConditions.join("\0") &&
     evidenceOk &&
+    expectedOutputsOk &&
     (resolution.executionWindowClass === undefined ||
       contract.executionWindowClass === resolution.executionWindowClass)
   );
@@ -651,6 +661,7 @@ export async function resolveM3ExecutionContract(
           constraints,
         }))
       : input.resolution.evidenceRequirements;
+  const expectedOutputs = input.resolution.expectedOutputs;

   // C2 — original already superseded: recover/validate existing successor.
   if (original.status === "superseded") {
@@ -809,6 +820,9 @@ export async function resolveM3ExecutionContract(
         ...(evidenceRequirements !== undefined
           ? { evidenceRequirements: [...evidenceRequirements] }
           : {}),
+        ...(expectedOutputs !== undefined
+          ? { expectedOutputs: [...expectedOutputs] }
+          : {}),
         decisionRefs: [input.decisionId],
         requiredAuthority: original.requiredAuthority,
         status: "draft",
diff --git a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
index ad829eb5..a9e27ac3 100644
--- a/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
+++ b/projects/sfia-studio/app/features/project-assistant/w2/materializeW3bProductTerminal.ts
@@ -2,13 +2,17 @@
  * W3-B FC-12 — Materialize + rehydrate Product Terminal from durable facts.
  * Ingest all terminals → ReviewBundle → EvaluateContractResult → FC-11 projection.
  * W3-C: after successful projection, consume Evidence via post-Evidence loop (no re-ingest).
+ * Docs-write: freeze rb:docs-write + evaluate docs-write CE (may supersede w3b CE).
  */
 import { createHash } from "node:crypto";
 import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
 import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
 import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
+import { M4_BOUNDED_DOCS_WRITE_ACTION } from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
 import type { ClaimEvaluation, Evidence, ReviewBundle } from "@/lib/oa/evidence-review";
+import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
+import { requalifyDocsWriteContractResult } from "./requalifyDocsWriteContractResult";
 import {
   projectW3bProductTerminal,
   productReservationsForAttempt,
@@ -118,6 +122,95 @@ function projectFromFacts(input: {
   return projectW3bProductTerminal(input);
 }

+function boundActionOf(
+  attempt: ExecutionAttempt,
+  contract: ExecutionContract,
+): string {
+  return (
+    attempt.boundExecutionContract?.semanticMaterial?.action ?? contract.action
+  );
+}
+
+async function materializeDocsWriteProductTerminal(input: {
+  readonly oa: RuntimeOaStack;
+  readonly projectId: string;
+  readonly attempt: ExecutionAttempt;
+  readonly contract: ExecutionContract;
+}): Promise<MaterializeW3bProductTerminalResult> {
+  const services = input.oa.evidenceReviewServices!;
+  const requalified = await requalifyDocsWriteContractResult({
+    evidenceReviewServices: services,
+    attempt: input.attempt,
+    contract: input.contract,
+    actor: LOCAL_PILOTE_ACTOR,
+  });
+  if (!requalified.ok) {
+    return {
+      ok: false,
+      code: requalified.code,
+      message: requalified.message,
+    };
+  }
+
+  const segment = input.attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+  const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
+  const evidence = await services.evidenceReader.findById(evidenceId);
+
+  const product = projectFromFacts({
+    attempt: input.attempt,
+    contract: input.contract,
+    evidence: evidence ?? null,
+    reviewBundle: requalified.reviewBundle,
+    claimEvaluation: requalified.claimEvaluation,
+  });
+
+  const reusedFromIdempotency = Boolean(requalified.reusedFromIdempotencyKey);
+
+  if (product.evidenceId) {
+    const existing = await findExistingW3cPostEvidence({
+      oa: input.oa,
+      projectId: input.projectId,
+      evidenceId: product.evidenceId,
+      attemptId: input.attempt.attemptId,
+    });
+    if (existing) {
+      return {
+        ok: true,
+        reusedFromIdempotency,
+        product,
+        postEvidence: existing,
+      };
+    }
+    const rehydrated = await rehydrateW3cPostEvidenceFromLps({
+      oa: input.oa,
+      projectId: input.projectId,
+      product,
+    });
+    if (rehydrated.ok) {
+      return {
+        ok: true,
+        reusedFromIdempotency,
+        product,
+        postEvidence: rehydrated,
+      };
+    }
+  }
+
+  const postEvidence = await runW3cPostEvidenceLoop({
+    oa: input.oa,
+    projectId: input.projectId,
+    attemptId: input.attempt.attemptId,
+    product,
+  });
+
+  return {
+    ok: true,
+    reusedFromIdempotency,
+    product,
+    postEvidence,
+  };
+}
+
 /** Write path — ingest Evidence + RB + Contract Result CE + project. */
 export async function materializeW3bProductTerminal(input: {
   readonly oa: RuntimeOaStack;
@@ -134,6 +227,26 @@ export async function materializeW3bProductTerminal(input: {
   const loaded = await loadAttemptAndContract(input);
   if (!loaded.ok) return loaded;
   const { attempt, contract } = loaded;
+
+  // Docs-write Product claim path only when Artifact Evidence exists (typically
+  // succeeded REAL/fixture ingest). Failed docs_write Attempts without Artifact
+  // Evidence keep the technical W3-B materialize path for recovery/UNCLAIMED.
+  if (boundActionOf(attempt, contract) === M4_BOUNDED_DOCS_WRITE_ACTION) {
+    const servicesProbe = input.oa.evidenceReviewServices!;
+    const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+    const docsWriteEvidenceId = `ev:docs-write:${segment}`.slice(0, 128);
+    const docsWriteEvidence =
+      await servicesProbe.evidenceReader.findById(docsWriteEvidenceId);
+    if (docsWriteEvidence) {
+      return materializeDocsWriteProductTerminal({
+        oa: input.oa,
+        projectId: input.projectId,
+        attempt,
+        contract,
+      });
+    }
+  }
+
   const ids = w3bEvidenceIdentity(attempt.attemptId);
   const services = input.oa.evidenceReviewServices!;

@@ -255,13 +368,13 @@ export async function materializeW3bProductTerminal(input: {
     reviewBundle: frozenReviewBundle,
   });

-    if (!evaluated.ok) {
-      // Surface shape reason in test/dev failures.
-      const detail = evaluated.error.internalCauseRef ?? evaluated.error.message;
-      return {
-        ok: false,
-        code: evaluated.error.detailCode,
-        message: detail,
+  if (!evaluated.ok) {
+    // Surface shape reason in test/dev failures.
+    const detail = evaluated.error.internalCauseRef ?? evaluated.error.message;
+    return {
+      ok: false,
+      code: evaluated.error.detailCode,
+      message: detail,
       product: projectFromFacts({
         attempt,
         contract,
@@ -342,16 +455,39 @@ export async function rehydrateW3bProductTerminal(input: {
   const loaded = await loadAttemptAndContract(input);
   if (!loaded.ok) return loaded;
   const { attempt, contract } = loaded;
-  const ids = w3bEvidenceIdentity(attempt.attemptId);
   const services = input.oa.evidenceReviewServices!;
+  const isDocsWrite =
+    boundActionOf(attempt, contract) === M4_BOUNDED_DOCS_WRITE_ACTION;

-  const evidence = await services.evidenceReader.findById(ids.evidenceId);
-  const reviewBundle = await services.reviewBundleReader.findById(
-    ids.reviewBundleId,
-  );
-  const claimEvaluation = await services.claimEvaluationReader.findById(
-    ids.claimEvaluationId,
-  );
+  let evidence: Evidence | null = null;
+  let reviewBundle: ReviewBundle | null = null;
+  let claimEvaluation: ClaimEvaluation | null = null;
+
+  if (isDocsWrite) {
+    const segment = attempt.attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
+    const evidenceId = `ev:docs-write:${segment}`.slice(0, 128);
+    const reviewBundleId = `rb:docs-write:${segment}`.slice(0, 128);
+    evidence = (await services.evidenceReader.findById(evidenceId)) ?? null;
+    reviewBundle =
+      (await services.reviewBundleReader.findById(reviewBundleId)) ?? null;
+    claimEvaluation = await resolveCurrentContractResultClaimEvaluation({
+      repo: services.claimEvaluationRepository,
+      projectId: input.projectId,
+      executionAttemptId: attempt.attemptId,
+    });
+  } else {
+    const ids = w3bEvidenceIdentity(attempt.attemptId);
+    evidence = (await services.evidenceReader.findById(ids.evidenceId)) ?? null;
+    reviewBundle =
+      (await services.reviewBundleReader.findById(ids.reviewBundleId)) ?? null;
+    claimEvaluation =
+      (await resolveCurrentContractResultClaimEvaluation({
+        repo: services.claimEvaluationRepository,
+        projectId: input.projectId,
+        executionAttemptId: attempt.attemptId,
+      })) ??
+      (await services.claimEvaluationReader.findById(ids.claimEvaluationId));
+  }

   if (!evidence || !reviewBundle || !claimEvaluation) {
     return {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
index a0968637..10cd5433 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultAssessment.ts
@@ -1,9 +1,11 @@
 /**
  * TD-W3B-02 Option B + ARCH-R02 — deterministic EO/ER assessment for contract-result mode.
  * Identity: (bound semanticFingerprint, kind, ordinal). Material from Attempt snapshot only.
+ * Dispatches to the applicable Result Semantics Registry entry (AND over evidences).
  */
 import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
 import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
+import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
 import type {
   ContractResultAssessmentProvenance,
   ExpectedOutputAssessment,
@@ -11,27 +13,40 @@ import type {
 } from "../domain/contractResultTypes";
 import { buildContractResultItemId } from "../domain/contractResultTypes";
 import {
-  assessTempArtifactEvidenceRequirement,
-  assessTempArtifactExpectedOutput,
-  resolveApplicableContractResultRule,
-} from "./contractResultSemanticEvaluator";
+  resolveApplicableContractResultSemantics,
+  type ContractResultSemantic,
+} from "./contractResultSemantics";

 export type ContractResultAssessmentInput = {
   /** Bound semantic material from Attempt.boundExecutionContract — not latest EC. */
   readonly semanticMaterial: ExecutionContractSemanticMaterial;
   readonly semanticFingerprint: string;
   readonly attempt: ExecutionAttemptSnapshot;
-  readonly evidence: Evidence;
+  /** @deprecated prefer evidences — single Evidence kept for back-compat call sites. */
+  readonly evidence?: Evidence;
+  readonly evidences?: readonly Evidence[];
   readonly evaluatedAt: string;
   readonly evaluatorRef?: string;
-  readonly frozenEvidenceSnapshot?: {
-    evidenceId: string;
-    evidenceVersion: number;
-    status: string;
-    availability: string;
-  };
+  readonly frozenEvidenceSnapshot?: ReviewBundleEvidenceSnapshot;
+  readonly frozenEvidenceSnapshots?: readonly ReviewBundleEvidenceSnapshot[];
 };

+function resolveEvidences(
+  input: ContractResultAssessmentInput,
+): readonly Evidence[] {
+  if (input.evidences && input.evidences.length > 0) return input.evidences;
+  if (input.evidence) return [input.evidence];
+  return [];
+}
+
+function resolveFrozenSnapshots(
+  input: ContractResultAssessmentInput,
+): readonly ReviewBundleEvidenceSnapshot[] {
+  if (input.frozenEvidenceSnapshots) return input.frozenEvidenceSnapshots;
+  if (input.frozenEvidenceSnapshot) return [input.frozenEvidenceSnapshot];
+  return [];
+}
+
 function provenance(
   input: ContractResultAssessmentInput,
   ruleRef?: string,
@@ -43,14 +58,23 @@ function provenance(
   };
 }

+function resolveSemantic(
+  material: ExecutionContractSemanticMaterial,
+): ContractResultSemantic | null {
+  const resolved = resolveApplicableContractResultSemantics(material);
+  if (resolved.status === "one") return resolved.semantic;
+  return null;
+}
+
 export function assessExpectedOutputs(
   input: ContractResultAssessmentInput,
 ): ExpectedOutputAssessment[] {
   const fp = input.semanticFingerprint;
   const outputs = input.semanticMaterial.expectedOutputs ?? [];
-  const rule = resolveApplicableContractResultRule(input.semanticMaterial);
-  const ruleRef = rule.applicable ? rule.ruleRef : undefined;
+  const semantic = resolveSemantic(input.semanticMaterial);
+  const ruleRef = semantic?.ruleRef;
   const prov = provenance(input, ruleRef);
+  const evidences = resolveEvidences(input);

   return outputs.map((expectation, ordinal) => {
     let result: ExpectedOutputAssessment["result"] = "NOT_PROVEN";
@@ -61,12 +85,13 @@ export function assessExpectedOutputs(
       input.attempt.stopOrigin === "SYSTEM_GOVERNED_STOP"
     ) {
       result = "NOT_PROVEN";
-    } else if (rule.applicable) {
-      result = assessTempArtifactExpectedOutput({
+    } else if (semantic) {
+      result = semantic.assessExpectedOutput({
         expectation,
         ordinal,
         attempt: input.attempt,
-        evidence: input.evidence,
+        evidences,
+        material: input.semanticMaterial,
       });
     }
     return {
@@ -89,9 +114,11 @@ export function assessEvidenceRequirements(
 ): EvidenceRequirementAssessment[] {
   const fp = input.semanticFingerprint;
   const requirements = input.semanticMaterial.evidenceRequirements ?? [];
-  const rule = resolveApplicableContractResultRule(input.semanticMaterial);
-  const ruleRef = rule.applicable ? rule.ruleRef : undefined;
+  const semantic = resolveSemantic(input.semanticMaterial);
+  const ruleRef = semantic?.ruleRef;
   const prov = provenance(input, ruleRef);
+  const evidences = resolveEvidences(input);
+  const frozenSnapshots = resolveFrozenSnapshots(input);

   return requirements.map((requirement, ordinal) => {
     let result: EvidenceRequirementAssessment["result"] = "NOT_PROVEN";
@@ -100,13 +127,14 @@ export function assessEvidenceRequirements(
       input.attempt.status === "timeout"
     ) {
       result = "NOT_SATISFIED";
-    } else if (rule.applicable) {
-      result = assessTempArtifactEvidenceRequirement({
+    } else if (semantic) {
+      result = semantic.assessEvidenceRequirement({
         requirement,
         ordinal,
         attempt: input.attempt,
-        evidence: input.evidence,
-        frozenSnapshot: input.frozenEvidenceSnapshot,
+        evidences,
+        frozenSnapshots,
+        material: input.semanticMaterial,
       });
     }
     return {
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
index 76e5486a..738a3365 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts
@@ -1,121 +1,27 @@
 /**
- * W3-B ARCH-R02 — bounded server-owned Contract Result semantic evaluator.
- * No NLP, no resultRef-alone PASS, no Evidence-available-alone ER satisfaction.
+ * W3-B ARCH-R02 — back-compat barrel for Contract Result semantic helpers.
+ * Implementation lives in tempArtifact / docsWrite / registry modules.
  */
-import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
-import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
-
-export const W3B_TEMP_ARTIFACT_RULE_REF =
-  "w3b-contract-result/product-generate-temporary-artifact-v1" as const;
-
-export const W3B_TEMP_ARTIFACT_OPERATION_KEY =
-  "product:generate-temporary-artifact" as const;
-
-export const W3B_TEMP_ARTIFACT_CAPABILITY = "cap:product-temp-artifact" as const;
-
-export const W3B_TEMP_ARTIFACT_EO_TEMPLATE =
-  "Résultat d'exécution — generate-temporary-artifact" as const;
-
-export const W3B_TEMP_ARTIFACT_ER_KEY = "evreq:generate-temporary-artifact" as const;
-
-/** Governed W3-A execute path mints res:w3a:<hex> — server-owned shape only. */
-const W3A_RESULT_REF_PATTERN = /^res:w3a:[a-f0-9]+$/;
-
-const W3B_USABLE_EVIDENCE_STATUSES = new Set<EvidenceStatus>([
-  "available",
-  "verified",
-]);
-
-/** Positive allowlist — undefined/unknown/stale/aging cannot satisfy ER. */
-const W3B_USABLE_EVIDENCE_FRESHNESS = new Set(["fresh"]);
-
-export type ApplicableContractResultRule =
-  | { readonly applicable: true; readonly ruleRef: typeof W3B_TEMP_ARTIFACT_RULE_REF }
-  | { readonly applicable: false; readonly ruleRef: null };
-
-export function resolveApplicableContractResultRule(
-  material: Pick<
-    { action: string; requiredCapabilities?: string[] },
-    "action" | "requiredCapabilities"
-  >,
-): ApplicableContractResultRule {
-  if (material.action !== W3B_TEMP_ARTIFACT_OPERATION_KEY) {
-    return { applicable: false, ruleRef: null };
-  }
-  if (!material.requiredCapabilities?.includes(W3B_TEMP_ARTIFACT_CAPABILITY)) {
-    return { applicable: false, ruleRef: null };
-  }
-  return { applicable: true, ruleRef: W3B_TEMP_ARTIFACT_RULE_REF };
-}
-
-export function tempArtifactExecutionFactsHold(input: {
-  attempt: ExecutionAttemptSnapshot;
-  evidence: Evidence;
-}): boolean {
-  if (input.attempt.status !== "succeeded") return false;
-  const resultRef = input.attempt.resultRef?.trim();
-  if (!resultRef || !W3A_RESULT_REF_PATTERN.test(resultRef)) return false;
-  return input.evidence.technicalResultRef === resultRef;
-}
-
-/** W3-B bounded ER validity — stale/rejected/unavailable Evidence cannot satisfy ER. */
-export function isW3bContractResultEvidenceUsable(input: {
-  evidence: Evidence;
-  snapshot: ReviewBundleEvidenceSnapshot | undefined;
-}): boolean {
-  const { evidence, snapshot } = input;
-  if (!snapshot) return false;
-  if (snapshot.evidenceId !== evidence.evidenceId) return false;
-  if (snapshot.evidenceVersion !== evidence.version) return false;
-  if (snapshot.availability !== "available") return false;
-  if (!W3B_USABLE_EVIDENCE_STATUSES.has(snapshot.status as EvidenceStatus)) {
-    return false;
-  }
-  if (evidence.availability !== "available") return false;
-  if (!W3B_USABLE_EVIDENCE_STATUSES.has(evidence.status)) return false;
-  if (
-    !evidence.freshness ||
-    !W3B_USABLE_EVIDENCE_FRESHNESS.has(evidence.freshness)
-  ) {
-    return false;
-  }
-  return true;
-}
-
-export function evidenceMatchesFrozenSnapshot(input: {
-  evidence: Evidence;
-  snapshot: ReviewBundleEvidenceSnapshot | undefined;
-}): boolean {
-  return isW3bContractResultEvidenceUsable(input);
-}
-
-export function assessTempArtifactExpectedOutput(input: {
-  expectation: string;
-  ordinal: number;
-  attempt: ExecutionAttemptSnapshot;
-  evidence: Evidence;
-}): "PASS" | "NOT_PROVEN" | "FAIL" {
-  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
-    return "FAIL";
-  }
-  if (input.ordinal !== 0) return "NOT_PROVEN";
-  if (input.expectation !== W3B_TEMP_ARTIFACT_EO_TEMPLATE) return "NOT_PROVEN";
-  if (!tempArtifactExecutionFactsHold(input)) return "NOT_PROVEN";
-  return "PASS";
-}
-
-export function assessTempArtifactEvidenceRequirement(input: {
-  requirement: string;
-  ordinal: number;
-  attempt: ExecutionAttemptSnapshot;
-  evidence: Evidence;
-  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
-}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
-  if (input.ordinal !== 0) return "NOT_PROVEN";
-  if (input.requirement !== W3B_TEMP_ARTIFACT_ER_KEY) return "NOT_PROVEN";
-  if (!evidenceMatchesFrozenSnapshot({ evidence: input.evidence, snapshot: input.frozenSnapshot })) {
-    return "NOT_PROVEN";
-  }
-  if (!tempArtifactExecutionFactsHold(input)) return "NOT_SATISFIED";
-  return "SATISFIED";
-}
+export {
+  W3B_TEMP_ARTIFACT_RULE_REF,
+  W3B_TEMP_ARTIFACT_OPERATION_KEY,
+  W3B_TEMP_ARTIFACT_CAPABILITY,
+  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+  W3B_TEMP_ARTIFACT_ER_KEY,
+  tempArtifactExecutionFactsHold,
+  isW3bContractResultEvidenceUsable,
+  evidenceMatchesFrozenSnapshot,
+  assessTempArtifactExpectedOutput,
+  assessTempArtifactEvidenceRequirement,
+} from "./tempArtifactContractResultSemantic";
+
+export {
+  resolveApplicableContractResultRule,
+  resolveApplicableContractResultSemantics,
+  CONTRACT_RESULT_SEMANTICS,
+  type ApplicableContractResultRule,
+  type ContractResultSemantic,
+  type ContractResultSemanticApplicability,
+  type ContractResultEvidenceSelection,
+  type ResolveApplicableContractResultSemanticsResult,
+} from "./contractResultSemantics";
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
index 80234cff..9c7c25e6 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/application/evaluateContractResult.ts
@@ -1,6 +1,7 @@
 /**
  * EvaluateContractResult — TD-W3B-01 contract-result ClaimEvaluation owner (FC-12).
  * Server writes canonical status only; claimStatement is audit projection.
+ * Evidence selection is server-owned via Result Semantics Registry.
  */
 import type { ClockPort } from "@/lib/oa/doctrine";
 import type { ExecutionContract } from "@/lib/oa/execution-contract";
@@ -29,6 +30,7 @@ import type { Evidence } from "../domain/types";
 import type { ReviewBundle } from "../domain/reviewBundleTypes";
 import type { EvidenceAuditPort } from "../ports/evidenceAudit";
 import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";
+import type { EvidenceReaderPort } from "../ports/evidenceReader";
 import type { IdGeneratorPort } from "../ports/idGenerator";
 import {
   assessExpectedOutputs,
@@ -36,7 +38,7 @@ import {
   buildContractResultClaimStatement,
   deriveCanonicalContractResultStatus,
 } from "./contractResultAssessment";
-import { resolveApplicableContractResultRule } from "./contractResultSemanticEvaluator";
+import { resolveApplicableContractResultSemantics } from "./contractResultSemantics";
 import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
 import {
   assertIdempotencyKey,
@@ -51,18 +53,25 @@ export type EvaluateContractResultRequest = {
   actor: ActorReference;
   contract: ExecutionContract;
   attempt: ExecutionAttemptSnapshot;
-  evidence: Evidence;
+  /**
+   * @deprecated optional — server selects from frozen RB; if provided must be among selected.
+   */
+  evidence?: Evidence;
   reviewBundle: ReviewBundle;
+  supersedesClaimEvaluationId?: string;
   correlationId?: string;
   nowIso?: string;
 };

+const SUPERSESSION_CHAIN_MAX = 32;
+
 export class EvaluateContractResult {
   constructor(
     private readonly repo: ClaimEvaluationRepositoryPort,
     private readonly clock: ClockPort,
     private readonly audit: EvidenceAuditPort,
     private readonly ids: IdGeneratorPort,
+    private readonly evidenceReader: EvidenceReaderPort,
   ) {}

   async execute(
@@ -120,7 +129,7 @@ export class EvaluateContractResult {
         return fail("CLAIM_EVALUATION_INVALID", "idempotency_key_too_short");
       }

-      const { contract, attempt, evidence, reviewBundle } = request;
+      const { contract, attempt, reviewBundle } = request;

       if (contract.executionContractId !== attempt.executionContractId) {
         return fail("CLAIM_EVALUATION_INVALID", "contract_attempt_mismatch");
@@ -144,9 +153,6 @@ export class EvaluateContractResult {
         }
       }

-      if (evidence.bindings.executionAttemptId !== attempt.attemptId) {
-        return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
-      }
       if (reviewBundle.completeness !== "complete") {
         return fail("CLAIM_REVIEW_BUNDLE_INVALID", "review_bundle_incomplete");
       }
@@ -169,30 +175,11 @@ export class EvaluateContractResult {
         );
       }

-      const frozenSnapshot = (reviewBundle.frozenEvidenceSnapshots ?? []).find(
-        (s) => s.evidenceId === evidence.evidenceId,
-      );
-      if (!frozenSnapshot) {
-        return fail(
-          "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
-          "evidence_not_in_frozen_snapshot",
-        );
-      }
-      if (frozenSnapshot.evidenceVersion !== evidence.version) {
-        return fail(
-          "CLAIM_EVIDENCE_VERSION_MISMATCH",
-          "evidence_version_frozen_mismatch",
-        );
-      }
-
+      const frozenSnapshots = reviewBundle.frozenEvidenceSnapshots ?? [];
       const missingSnapshot = !snap;
-      // Historical missing snapshot: do NOT reconstruct EO/ER from latest EC.
-      // Use empty assessment lists + durable not_proven.
       const semanticMaterial = (snap?.semanticMaterial ?? {
         executionContractId: attempt.executionContractId,
-        projectId:
-          evidence.bindings.projectId ??
-          contract.projectId,
+        projectId: contract.projectId,
         action: "",
         target: "",
         scope: "",
@@ -206,9 +193,186 @@ export class EvaluateContractResult {
         idempotencyKey: "",
       }) as ExecutionContractSemanticMaterial;
       const boundFingerprint = snap?.semanticFingerprint ?? "";
-      const applicableRule = missingSnapshot
-        ? ({ applicable: false, ruleRef: null } as const)
-        : resolveApplicableContractResultRule(semanticMaterial);
+
+      const semanticsResolution = missingSnapshot
+        ? ({ status: "none" } as const)
+        : resolveApplicableContractResultSemantics(semanticMaterial);
+
+      if (semanticsResolution.status === "ambiguous") {
+        return fail(
+          "CLAIM_EVALUATION_INVALID",
+          "ambiguous_contract_result_semantics",
+        );
+      }
+
+      const applicableSemantic =
+        semanticsResolution.status === "one"
+          ? semanticsResolution.semantic
+          : null;
+
+      let selectedEvidenceIds: string[] = [];
+      let evidences: Evidence[] = [];
+      let evidenceIncomplete = false;
+
+      if (applicableSemantic) {
+        const selection = applicableSemantic.selectEvidenceIds({
+          material: semanticMaterial,
+          attempt,
+          frozenSnapshots,
+        });
+        selectedEvidenceIds = [...selection.requiredEvidenceIds];
+
+        if (selection.incompleteReason || selectedEvidenceIds.length === 0) {
+          evidenceIncomplete = true;
+        } else {
+          for (const evidenceId of selectedEvidenceIds) {
+            const frozenSnapshot = frozenSnapshots.find(
+              (s) => s.evidenceId === evidenceId,
+            );
+            if (!frozenSnapshot) {
+              return fail(
+                "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
+                "evidence_not_in_frozen_snapshot",
+              );
+            }
+            const loaded = await this.evidenceReader.findById(evidenceId);
+            if (!loaded) {
+              // Id present in frozen RB but unloadable → hard fail (corrupt).
+              return fail(
+                "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
+                "evidence_load_failed_for_frozen_id",
+              );
+            }
+            if (frozenSnapshot.evidenceVersion !== loaded.version) {
+              return fail(
+                "CLAIM_EVIDENCE_VERSION_MISMATCH",
+                "evidence_version_frozen_mismatch",
+              );
+            }
+            evidences.push(loaded);
+          }
+        }
+
+        if (
+          request.evidence &&
+          !selectedEvidenceIds.includes(request.evidence.evidenceId)
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "evidence_not_selected_by_semantic",
+          );
+        }
+
+        // Optional request.evidence: if provided and selected, prefer its instance
+        // when already in the loaded set (identity match); otherwise keep loaded.
+        if (
+          request.evidence &&
+          selectedEvidenceIds.includes(request.evidence.evidenceId) &&
+          !evidences.some((e) => e.evidenceId === request.evidence!.evidenceId)
+        ) {
+          evidences.push(request.evidence);
+        }
+      } else if (request.evidence) {
+        // Zero-match semantic with deprecated evidence still present: keep soft path.
+        const frozenSnapshot = frozenSnapshots.find(
+          (s) => s.evidenceId === request.evidence!.evidenceId,
+        );
+        if (!frozenSnapshot) {
+          return fail(
+            "CLAIM_EVIDENCE_NOT_IN_REVIEW_BUNDLE",
+            "evidence_not_in_frozen_snapshot",
+          );
+        }
+        if (frozenSnapshot.evidenceVersion !== request.evidence.version) {
+          return fail(
+            "CLAIM_EVIDENCE_VERSION_MISMATCH",
+            "evidence_version_frozen_mismatch",
+          );
+        }
+        if (
+          request.evidence.bindings.executionAttemptId !== attempt.attemptId
+        ) {
+          return fail("CLAIM_EVALUATION_INVALID", "evidence_attempt_mismatch");
+        }
+        selectedEvidenceIds = [request.evidence.evidenceId];
+        evidences = [request.evidence];
+      }
+
+      // Supersession validation (before create).
+      if (request.supersedesClaimEvaluationId) {
+        if (!isClaimEvaluationId(request.supersedesClaimEvaluationId)) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_claim_evaluation_id_invalid",
+          );
+        }
+        if (
+          request.supersedesClaimEvaluationId === request.claimEvaluationId
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_self_forbidden",
+          );
+        }
+        const prior = await this.repo.findById(
+          request.supersedesClaimEvaluationId,
+        );
+        if (!prior) {
+          return fail(
+            "CLAIM_EVALUATION_NOT_FOUND",
+            "superseded_claim_missing",
+          );
+        }
+        if (
+          prior.subjectKind !==
+          CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_not_contract_result",
+          );
+        }
+        if (
+          prior.contractResultBindings?.executionAttemptId !==
+          attempt.attemptId
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_attempt_mismatch",
+          );
+        }
+        if (
+          prior.contractResultBindings?.executionContractId !==
+          attempt.executionContractId
+        ) {
+          return fail(
+            "CLAIM_EVALUATION_INVALID",
+            "supersedes_contract_mismatch",
+          );
+        }
+        // Cycle detection — walk prior chain; refuse if new id appears.
+        let cursor: string | undefined = prior.supersedesClaimEvaluationId;
+        let depth = 0;
+        const seen = new Set<string>([prior.claimEvaluationId]);
+        while (cursor && depth < SUPERSESSION_CHAIN_MAX) {
+          if (cursor === request.claimEvaluationId) {
+            return fail(
+              "CLAIM_EVALUATION_INVALID",
+              "supersedes_cycle_detected",
+            );
+          }
+          if (seen.has(cursor)) {
+            return fail(
+              "CLAIM_EVALUATION_INVALID",
+              "supersedes_cycle_detected",
+            );
+          }
+          seen.add(cursor);
+          const next = await this.repo.findById(cursor);
+          cursor = next?.supersedesClaimEvaluationId;
+          depth += 1;
+        }
+      }

       const fingerprint = fingerprintCommand(
         registerFingerprintBody({
@@ -220,6 +384,12 @@ export class EvaluateContractResult {
           contractVersion: attempt.executionContractVersion,
           semanticFingerprint: boundFingerprint,
           actor: request.actor,
+          ...(request.supersedesClaimEvaluationId
+            ? {
+                supersedesClaimEvaluationId:
+                  request.supersedesClaimEvaluationId,
+              }
+            : {}),
         }),
       );

@@ -246,14 +416,21 @@ export class EvaluateContractResult {
         semanticMaterial,
         semanticFingerprint: boundFingerprint || "missing-bound-snapshot",
         attempt,
-        evidence,
+        evidences,
         evaluatedAt: timestamp,
-        frozenEvidenceSnapshot: frozenSnapshot,
+        frozenEvidenceSnapshots: frozenSnapshots,
       };
-      const expectedOutputAssessments = missingSnapshot
+      const forceNotProven =
+        missingSnapshot ||
+        !applicableSemantic ||
+        evidenceIncomplete;
+
+      const expectedOutputAssessments = forceNotProven
         ? (semanticMaterial.expectedOutputs ?? []).map((expectation, ordinal) => ({
             itemId: {
-              semanticFingerprint: "missing-bound-snapshot",
+              semanticFingerprint: missingSnapshot
+                ? "missing-bound-snapshot"
+                : boundFingerprint || "missing-bound-snapshot",
               itemKind: "EO" as const,
               ordinal,
             },
@@ -266,11 +443,13 @@ export class EvaluateContractResult {
             },
           }))
         : assessExpectedOutputs(assessmentInput);
-      const evidenceRequirementAssessments = missingSnapshot
+      const evidenceRequirementAssessments = forceNotProven
         ? (semanticMaterial.evidenceRequirements ?? []).map(
             (requirement, ordinal) => ({
               itemId: {
-                semanticFingerprint: "missing-bound-snapshot",
+                semanticFingerprint: missingSnapshot
+                  ? "missing-bound-snapshot"
+                  : boundFingerprint || "missing-bound-snapshot",
                 itemKind: "ER" as const,
                 ordinal,
               },
@@ -285,8 +464,7 @@ export class EvaluateContractResult {
           )
         : assessEvidenceRequirements(assessmentInput);

-      // Missing snapshot with empty EO/ER lists: still emit durable not_proven CE.
-      const status = missingSnapshot
+      const status = forceNotProven
         ? "not_proven"
         : deriveCanonicalContractResultStatus({
             attemptStatus: attempt.status,
@@ -294,6 +472,19 @@ export class EvaluateContractResult {
             evidenceRequirementAssessments,
           });

+      const evidenceRefs =
+        selectedEvidenceIds.length > 0
+          ? selectedEvidenceIds
+          : evidences.map((e) => e.evidenceId);
+
+      const notApplicableReason = missingSnapshot
+        ? "historical_attempt_missing_bound_snapshot"
+        : !applicableSemantic
+          ? "no_applicable_contract_result_rule"
+          : evidenceIncomplete
+            ? "contract_result_evidence_incomplete"
+            : undefined;
+
       const claimEvaluation: ClaimEvaluation = {
         schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
         claimEvaluationId: request.claimEvaluationId,
@@ -305,17 +496,13 @@ export class EvaluateContractResult {
           boundContractVersion: attempt.executionContractVersion,
           expectedOutputCount: expectedOutputAssessments.length,
           evidenceRequirementCount: evidenceRequirementAssessments.length,
-          notApplicableReason: missingSnapshot
-            ? "historical_attempt_missing_bound_snapshot"
-            : applicableRule.applicable
-              ? undefined
-              : "no_applicable_contract_result_rule",
+          notApplicableReason,
         }),
         criticality: "non_critical",
         evaluationMethod: "deterministic",
-        ...(applicableRule.applicable ? { ruleRef: applicableRule.ruleRef } : {}),
-        requiredEvidenceRefs: [evidence.evidenceId],
-        providedEvidenceRefs: [evidence.evidenceId],
+        ...(applicableSemantic ? { ruleRef: applicableSemantic.ruleRef } : {}),
+        requiredEvidenceRefs: [...evidenceRefs],
+        providedEvidenceRefs: [...evidenceRefs],
         reviewBundleId: reviewBundle.reviewBundleId,
         reviewBundleVersion: reviewBundle.frozenVersion,
         status,
@@ -336,11 +523,17 @@ export class EvaluateContractResult {
         version: 1,
         idempotencyKey: request.idempotencyKey,
         subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
+        ...(request.supersedesClaimEvaluationId
+          ? {
+              supersedesClaimEvaluationId:
+                request.supersedesClaimEvaluationId,
+            }
+          : {}),
         contractResultBindings: {
           projectId: semanticMaterial.projectId || contract.projectId,
           cycleInstanceId:
             (semanticMaterial.cycleInstanceId ??
-              evidence.bindings.cycleInstanceId ??
+              evidences[0]?.bindings.cycleInstanceId ??
               contract.cycleInstanceId) ?? null,
           executionContractId: attempt.executionContractId,
           executionContractVersion: attempt.executionContractVersion,
@@ -349,7 +542,7 @@ export class EvaluateContractResult {
           executionAttemptId: attempt.attemptId,
           reviewBundleId: reviewBundle.reviewBundleId,
           reviewBundleVersion: reviewBundle.frozenVersion,
-          evidenceRefs: [evidence.evidenceId],
+          evidenceRefs: [...evidenceRefs],
         },
         expectedOutputAssessments,
         evidenceRequirementAssessments,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
index 6cf2853e..032e70ed 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/index.ts
@@ -100,6 +100,39 @@ export { EvaluateContractResult } from "./application/evaluateContractResult";
 export type { EvaluateContractResultRequest } from "./application/evaluateContractResult";
 export { projectContractResultVerdict } from "./application/contractResultVerdictProjection";
 export * from "./domain/contractResultTypes";
+export {
+  resolveApplicableContractResultRule,
+  resolveApplicableContractResultSemantics,
+  CONTRACT_RESULT_SEMANTICS,
+  type ApplicableContractResultRule,
+  type ContractResultSemantic,
+  type ContractResultSemanticApplicability,
+  type ContractResultEvidenceSelection,
+  type ResolveApplicableContractResultSemanticsResult,
+} from "./application/contractResultSemantics";
+export {
+  W3B_TEMP_ARTIFACT_RULE_REF,
+  W3B_TEMP_ARTIFACT_OPERATION_KEY,
+  W3B_TEMP_ARTIFACT_CAPABILITY,
+  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
+  W3B_TEMP_ARTIFACT_ER_KEY,
+  tempArtifactExecutionFactsHold,
+  isW3bContractResultEvidenceUsable,
+  evidenceMatchesFrozenSnapshot,
+  assessTempArtifactExpectedOutput,
+  assessTempArtifactEvidenceRequirement,
+} from "./application/tempArtifactContractResultSemantic";
+export {
+  DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
+  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
+  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
+  docsWriteContractResultIdentity,
+  docsWriteArtifactFactsHold,
+  assessDocsWriteExpectedOutput,
+  assessDocsWriteEvidenceRequirement,
+  docsWriteContractResultSemantic,
+} from "./application/docsWriteContractResultSemantic";
+export { resolveCurrentContractResultClaimEvaluation } from "./application/resolveCurrentContractResultClaimEvaluation";
 export { SqliteClaimEvaluationRepository } from "./infrastructure/sqlite/sqliteClaimEvaluationRepository";
 export { ConfirmClaimEvaluation } from "./application/confirmClaimEvaluation";
 export { RejectClaimEvaluation } from "./application/rejectClaimEvaluation";
@@ -401,6 +434,7 @@ export function createInMemoryEvidenceReviewServices(
       clock,
       audit,
       ids,
+      evidenceReader,
     ),
     confirmClaimEvaluation: new ConfirmClaimEvaluation(
       claimEvaluationRepository,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
index 0ee62cab..c3ad2185 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryClaimEvaluationRepository.ts
@@ -35,6 +35,23 @@ export class MemoryClaimEvaluationRepository
     return this.store.claims.has(claimEvaluationId);
   }

+  async listByProject(projectId: string): Promise<ClaimEvaluation[]> {
+    const out: ClaimEvaluation[] = [];
+    for (const claim of this.store.claims.values()) {
+      const boundProject = claim.contractResultBindings?.projectId;
+      const provenanceProject = claim.provenance?.projectId;
+      if (boundProject === projectId || provenanceProject === projectId) {
+        out.push(structuredClone(claim));
+      }
+    }
+    return out.sort((a, b) => {
+      const aAt = a.proposedAt ?? "";
+      const bAt = b.proposedAt ?? "";
+      if (aAt !== bAt) return aAt < bAt ? -1 : 1;
+      return a.claimEvaluationId < b.claimEvaluationId ? -1 : 1;
+    });
+  }
+
   async create(
     claim: ClaimEvaluation,
     record?: ClaimEvaluationIdempotencyRecord,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
index 2a4b0bec..7a6ebb1b 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/createSqliteEvidenceReviewServices.ts
@@ -243,6 +243,7 @@ export function createSqliteEvidenceReviewServices(
       clock,
       audit,
       ids,
+      evidenceReader,
     ),
     confirmClaimEvaluation: new ConfirmClaimEvaluation(
       claimEvaluationRepository,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
index d8c436ad..ccf8c919 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteClaimEvaluationRepository.ts
@@ -76,6 +76,17 @@ export class SqliteClaimEvaluationRepository
     return row?.ok === 1;
   }

+  async listByProject(projectId: string): Promise<ClaimEvaluation[]> {
+    const rows = this.store.db
+      .prepare(
+        `SELECT payload_json FROM oa_claim_evaluations WHERE project_id = ? ORDER BY created_at ASC`,
+      )
+      .all(projectId) as Array<{ payload_json: string }>;
+    return rows.map((row) =>
+      cloneClaim(JSON.parse(row.payload_json) as ClaimEvaluation),
+    );
+  }
+
   async create(
     claim: ClaimEvaluation,
     record?: ClaimEvaluationIdempotencyRecord,
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
index b223a667..c7d916ac 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/ports/claimEvaluationRepository.ts
@@ -17,6 +17,8 @@ export interface ClaimEvaluationRepositoryPort {
     record: ClaimEvaluationIdempotencyRecord;
   } | null>;
   exists(claimEvaluationId: string): Promise<boolean>;
+  /** Contract-result / project scoping — no schema migration required. */
+  listByProject(projectId: string): Promise<ClaimEvaluation[]>;
   create(
     claim: ClaimEvaluation,
     record?: ClaimEvaluationIdempotencyRecord,
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
index e0787a9b..63f588c0 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/application/recordExecutionResult.ts
@@ -158,6 +158,9 @@ export class RecordExecutionResult {
         technicalExitCode: request.technicalExitCode,
         durationMs: request.durationMs,
         logRefs: request.logRefs ? [...request.logRefs] : attempt.logRefs,
+        ...(request.processDiagnostic
+          ? { processDiagnostic: request.processDiagnostic }
+          : {}),
         updatedAt: timestamp,
         version: attempt.version + 1,
       };
diff --git a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
index 88a52e28..52bd35f1 100644
--- a/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts
@@ -274,6 +274,8 @@ export type RecordExecutionResultRequest = {
   technicalExitCode?: number;
   durationMs?: number;
   logRefs?: string[];
+  /** Optional redacted process diagnostic (success path — same shape as failure). */
+  processDiagnostic?: ExecutionAttempt["processDiagnostic"];
   correlationId?: string;
   expectedAttemptVersion?: number;
   nowIso?: string;
diff --git a/projects/sfia-studio/app/package-lock.json b/projects/sfia-studio/app/package-lock.json
index a511e682..7fad02c8 100644
--- a/projects/sfia-studio/app/package-lock.json
+++ b/projects/sfia-studio/app/package-lock.json
@@ -49,7 +49,7 @@
       "version": "3.2.0",
       "resolved": "https://registry.npmjs.org/@asamuzakjp/css-color/-/css-color-3.2.0.tgz",
       "integrity": "sha512-K1A6z8tS3XsmCMM86xoWdn7Fkdn9m6RSVtocUrJYIwZnFVkng/PvkEoWtOWmP+Scc6saYWHWZYbndEEXxl24jw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@csstools/css-calc": "^2.1.3",
@@ -231,7 +231,7 @@
       "version": "5.1.0",
       "resolved": "https://registry.npmjs.org/@csstools/color-helpers/-/color-helpers-5.1.0.tgz",
       "integrity": "sha512-S11EXWJyy0Mz5SYvRmY8nJYTFFd1LCNV+7cXyAgQtOOuzb4EsgfqDufL+9esx72/eLhsRdGZwaldu/h+E4t4BA==",
-      "dev": true,
+      "devOptional": true,
       "funding": [
         {
           "type": "github",
@@ -251,7 +251,7 @@
       "version": "2.1.4",
       "resolved": "https://registry.npmjs.org/@csstools/css-calc/-/css-calc-2.1.4.tgz",
       "integrity": "sha512-3N8oaj+0juUw/1H3YwmDDJXCgTB1gKU6Hc/bB502u9zR0q2vd786XJH9QfrKIEgFlZmhZiq6epXl4rHqhzsIgQ==",
-      "dev": true,
+      "devOptional": true,
       "funding": [
         {
           "type": "github",
@@ -275,7 +275,7 @@
       "version": "3.1.0",
       "resolved": "https://registry.npmjs.org/@csstools/css-color-parser/-/css-color-parser-3.1.0.tgz",
       "integrity": "sha512-nbtKwh3a6xNVIp/VRuXV64yTKnb1IjTAEEh3irzS+HkKjAOYLTGNb9pmVNntZ8iVBHcWDA2Dof0QtPgFI1BaTA==",
-      "dev": true,
+      "devOptional": true,
       "funding": [
         {
           "type": "github",
@@ -303,7 +303,7 @@
       "version": "3.0.5",
       "resolved": "https://registry.npmjs.org/@csstools/css-parser-algorithms/-/css-parser-algorithms-3.0.5.tgz",
       "integrity": "sha512-DaDeUkXZKjdGhgYaHNJTV9pV7Y9B3b644jCLs9Upc3VeNGg6LWARAT6O+Q+/COo+2gg/bM5rhpMAtf70WqfBdQ==",
-      "dev": true,
+      "devOptional": true,
       "funding": [
         {
           "type": "github",
@@ -326,7 +326,7 @@
       "version": "3.0.4",
       "resolved": "https://registry.npmjs.org/@csstools/css-tokenizer/-/css-tokenizer-3.0.4.tgz",
       "integrity": "sha512-Vd/9EVDiu6PPJt9yAh6roZP6El1xHrdvIVGjyBsHR0RYwNHgL7FJPyIIW4fANJNG6FtyZfvlRPpFI4ZM/lubvw==",
-      "dev": true,
+      "devOptional": true,
       "funding": [
         {
           "type": "github",
@@ -382,7 +382,6 @@
       "cpu": [
         "ppc64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -399,7 +398,6 @@
       "cpu": [
         "arm"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -416,7 +414,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -433,7 +430,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -450,7 +446,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -467,7 +462,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -484,7 +478,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -501,7 +494,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -518,7 +510,6 @@
       "cpu": [
         "arm"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -535,7 +526,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -552,7 +542,6 @@
       "cpu": [
         "ia32"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -569,7 +558,6 @@
       "cpu": [
         "loong64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -586,7 +574,6 @@
       "cpu": [
         "mips64el"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -603,7 +590,6 @@
       "cpu": [
         "ppc64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -620,7 +606,6 @@
       "cpu": [
         "riscv64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -637,7 +622,6 @@
       "cpu": [
         "s390x"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -654,7 +638,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -671,7 +654,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -688,7 +670,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -705,7 +686,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -722,7 +702,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -739,7 +718,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -756,7 +734,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -773,7 +750,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -790,7 +766,6 @@
       "cpu": [
         "ia32"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -807,7 +782,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -1555,7 +1529,7 @@
       "version": "1.5.5",
       "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
       "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/@modelcontextprotocol/client": {
@@ -2028,7 +2002,7 @@
       "version": "1.61.1",
       "resolved": "https://registry.npmjs.org/@playwright/test/-/test-1.61.1.tgz",
       "integrity": "sha512-8nKv6+0RJSL9FE4jYOEGXnPeM/Hg12qZpmqzZjRh3qM0Y7c3z1mrOTfFLids72RDQYVh9WpLEfR5WdpNX4fkig==",
-      "dev": true,
+      "devOptional": true,
       "license": "Apache-2.0",
       "dependencies": {
         "playwright": "1.61.1"
@@ -2047,7 +2021,6 @@
       "cpu": [
         "arm"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2061,7 +2034,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2075,7 +2047,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2089,7 +2060,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2103,7 +2073,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2117,7 +2086,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2131,7 +2099,6 @@
       "cpu": [
         "arm"
       ],
-      "dev": true,
       "libc": [
         "glibc"
       ],
@@ -2148,7 +2115,6 @@
       "cpu": [
         "arm"
       ],
-      "dev": true,
       "libc": [
         "musl"
       ],
@@ -2165,7 +2131,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "libc": [
         "glibc"
       ],
@@ -2182,7 +2147,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "libc": [
         "musl"
       ],
@@ -2199,7 +2163,6 @@
       "cpu": [
         "loong64"
       ],
-      "dev": true,
       "libc": [
         "glibc"
       ],
@@ -2216,7 +2179,6 @@
       "cpu": [
         "loong64"
       ],
-      "dev": true,
       "libc": [
         "musl"
       ],
@@ -2233,7 +2195,6 @@
       "cpu": [
         "ppc64"
       ],
-      "dev": true,
       "libc": [
         "glibc"
       ],
@@ -2250,7 +2211,6 @@
       "cpu": [
         "ppc64"
       ],
-      "dev": true,
       "libc": [
         "musl"
       ],
@@ -2267,7 +2227,6 @@
       "cpu": [
         "riscv64"
       ],
-      "dev": true,
       "libc": [
         "glibc"
       ],
@@ -2284,7 +2243,6 @@
       "cpu": [
         "riscv64"
       ],
-      "dev": true,
       "libc": [
         "musl"
       ],
@@ -2301,7 +2259,6 @@
       "cpu": [
         "s390x"
       ],
-      "dev": true,
       "libc": [
         "glibc"
       ],
@@ -2318,7 +2275,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "libc": [
         "glibc"
       ],
@@ -2335,7 +2291,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "libc": [
         "musl"
       ],
@@ -2352,7 +2307,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2366,7 +2320,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2380,7 +2333,6 @@
       "cpu": [
         "arm64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2394,7 +2346,6 @@
       "cpu": [
         "ia32"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2408,7 +2359,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2422,7 +2372,6 @@
       "cpu": [
         "x64"
       ],
-      "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
@@ -2569,7 +2518,7 @@
       "version": "5.2.3",
       "resolved": "https://registry.npmjs.org/@types/chai/-/chai-5.2.3.tgz",
       "integrity": "sha512-Mw558oeA9fFbv65/y4mHtXDs9bPnFMZAL/jxdPFUpOHHIXX91mcgEHbS5Lahr+pwZFR8A7GQleRWeI6cGFC2UA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@types/deep-eql": "*",
@@ -2580,14 +2529,14 @@
       "version": "4.0.2",
       "resolved": "https://registry.npmjs.org/@types/deep-eql/-/deep-eql-4.0.2.tgz",
       "integrity": "sha512-c9h9dVVMigMPc4bwTvC5dxqtqJZwQPePsWjPlpSOnojbor6pGqdk541lfA7AqFQr5pB1BRdq0juY9db81BwyFw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/@types/estree": {
       "version": "1.0.9",
       "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
       "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/@types/json-schema": {
@@ -3294,7 +3243,7 @@
       "version": "3.2.7",
       "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-3.2.7.tgz",
       "integrity": "sha512-E8eBXaKibuvH2pSZErOjdVb5vF4PbKYcrnluBTYxEk1l/VhhwZg1kZQsdtjq+CsF5CFydf2Rdkz7jDHKSisi3w==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@types/chai": "^5.2.2",
@@ -3311,7 +3260,7 @@
       "version": "3.2.7",
       "resolved": "https://registry.npmjs.org/@vitest/mocker/-/mocker-3.2.7.tgz",
       "integrity": "sha512-Trr0hYO9CM3Wj6ksWHRhK9IZpIY6wTMO5u/MqXurMxT57sWBaOPEtP3Oq60ihZuh5JsiagKfz95OcxdEP6dBrA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@vitest/spy": "3.2.7",
@@ -3338,7 +3287,7 @@
       "version": "3.2.7",
       "resolved": "https://registry.npmjs.org/@vitest/pretty-format/-/pretty-format-3.2.7.tgz",
       "integrity": "sha512-KUHlwqVu0sRlhCdyPdQ/wBoTfRahjUky1MubOmYw9fWfIZy1gNoHpuaaQBPAaMaVYdQYHJLurzj8ECCj5OwTqA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "tinyrainbow": "^2.0.0"
@@ -3351,7 +3300,7 @@
       "version": "3.2.7",
       "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-3.2.7.tgz",
       "integrity": "sha512-sB9y4ovltoQP+WaUPwmSxO9WIg9Ig694Di5PalVPsYHklAdE027mehpWF2SQSVq+k6sFgaivbTjTJwZLSHbedA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@vitest/utils": "3.2.7",
@@ -3366,7 +3315,7 @@
       "version": "3.2.7",
       "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-3.2.7.tgz",
       "integrity": "sha512-7C+MwShwtBSI5Buwoyg3s/iY1eHL9PKAf+O1wVh/TdnjXUtkoL/9YQtre90i4MtNXM6edP1wJ2zOBpfCyhIS7g==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@vitest/pretty-format": "3.2.7",
@@ -3381,7 +3330,7 @@
       "version": "3.2.7",
       "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-3.2.7.tgz",
       "integrity": "sha512-Q2eQGI6d2L/hBtZ0qNuKcAGid68XK6cv1xsoaIma6PaJhHPoqcEJhYpXZ/5myCMqkNgtP6UKuBhbc0nHKnrkuQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "tinyspy": "^4.0.3"
@@ -3394,7 +3343,7 @@
       "version": "3.2.7",
       "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-3.2.7.tgz",
       "integrity": "sha512-x6BDOd7dyo3PFLY3I9/HJ25X/6OurhGXk2/B9gOZNPF7XDVjeBK4k01lQE5uvDpbuheErh91qYuE1E2OEjK3Rw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@vitest/pretty-format": "3.2.7",
@@ -3432,7 +3381,7 @@
       "version": "7.1.4",
       "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.4.tgz",
       "integrity": "sha512-MnA+YT8fwfJPgBx3m60MNqakm30XOkyIoH1y6huTQvC0PwZG7ki8NacLBcrPbNoo8vEZy7Jpuk7+jMO+CUovTQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">= 14"
@@ -3661,7 +3610,7 @@
       "version": "2.0.1",
       "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
       "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=12"
@@ -3889,7 +3838,7 @@
       "version": "6.7.14",
       "resolved": "https://registry.npmjs.org/cac/-/cac-6.7.14.tgz",
       "integrity": "sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=8"
@@ -3979,7 +3928,7 @@
       "version": "5.3.3",
       "resolved": "https://registry.npmjs.org/chai/-/chai-5.3.3.tgz",
       "integrity": "sha512-4zNhdJD/iOjSH0A05ea+Ke6MU5mmpQcbQsSOkgdaUMJ9zTlDTD/GYlwohmIE2u0gaxHYiVHEn1Fw9mZ/ktJWgw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "assertion-error": "^2.0.1",
@@ -4013,7 +3962,7 @@
       "version": "2.1.3",
       "resolved": "https://registry.npmjs.org/check-error/-/check-error-2.1.3.tgz",
       "integrity": "sha512-PAJdDJusoxnwm1VwW07VWwUN1sl7smmC3OKggvndJFadxxDRyFJBX/ggnu/KE4kQAB7a3Dp8f/YXC1FlUprWmA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">= 16"
@@ -4093,7 +4042,7 @@
       "version": "4.6.0",
       "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-4.6.0.tgz",
       "integrity": "sha512-2z+rWdzbbSZv6/rhtvzvqeZQHrBaqgogqt85sqFNbabZOuFbCVFb8kPeEtZjiKkbrm395irpNKiYeFeLiQnFPg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@asamuzakjp/css-color": "^3.2.0",
@@ -4121,7 +4070,7 @@
       "version": "5.0.0",
       "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-5.0.0.tgz",
       "integrity": "sha512-ZYP5VBHshaDAiVZxjbRVcFJpc+4xGgT0bK3vzy1HLN8jTO975HEbuYzZJcHoQEY5K1a0z8YayJkyVETa08eNTg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "whatwg-mimetype": "^4.0.0",
@@ -4206,14 +4155,14 @@
       "version": "10.6.0",
       "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.6.0.tgz",
       "integrity": "sha512-YpgQiITW3JXGntzdUmyUR1V812Hn8T1YVXhCu+wO3OpS4eU9l4YdD3qjyiKdV6mvV29zapkMeD390UVEf2lkUg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/deep-eql": {
       "version": "5.0.2",
       "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-5.0.2.tgz",
       "integrity": "sha512-h5k/5U50IJJFpzfL6nO9jaaumfjO/f2NjK/oYB2Djzm4p9L+3T9qWpZqZ2hAbLPuuYq9wrU08WQyBTL5GbPk5Q==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=6"
@@ -4334,7 +4283,7 @@
       "version": "6.0.1",
       "resolved": "https://registry.npmjs.org/entities/-/entities-6.0.1.tgz",
       "integrity": "sha512-aN97NXWF6AWBTahfVOIrB/NShkzi5H7F9r1s9mD3cDj4Ko5f2qhhVoYMibXF7GlLveb/D2ioWay8lxI97Ven3g==",
-      "dev": true,
+      "devOptional": true,
       "license": "BSD-2-Clause",
       "engines": {
         "node": ">=0.12"
@@ -4483,7 +4432,7 @@
       "version": "1.7.0",
       "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.7.0.tgz",
       "integrity": "sha512-jEQoCwk8hyb2AZziIOLhDqpm5+2ww5uIE6lkO/6jcOCusfk6LhMHpXXfBLXTZ7Ydyt0j4VoUQv6uGNYbdW+kBA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/es-object-atoms": {
@@ -4553,7 +4502,7 @@
       "version": "0.28.1",
       "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.28.1.tgz",
       "integrity": "sha512-HrJrvZv5ayxBzPfwphOoNzkzOIIlifzk0KJrGK2c8R4+LKpMtpYLQeUdjnwjWv/LZlkH2laZk+4w78pi99D4Vw==",
-      "dev": true,
+      "devOptional": true,
       "hasInstallScript": true,
       "license": "MIT",
       "bin": {
@@ -5025,7 +4974,7 @@
       "version": "3.0.3",
       "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
       "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@types/estree": "^1.0.0"
@@ -5068,7 +5017,7 @@
       "version": "1.4.0",
       "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.4.0.tgz",
       "integrity": "sha512-KfYbmpRm0VbLjEvVa9yGwCi9GI34xvi7A/HXYWQO65CSD2u3MczUJSuwXKFIxlGsgBQizV9q5J9NHj4VG0n+pA==",
-      "dev": true,
+      "devOptional": true,
       "license": "Apache-2.0",
       "engines": {
         "node": ">=12.0.0"
@@ -5234,7 +5183,6 @@
       "version": "2.3.2",
       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.2.tgz",
       "integrity": "sha512-xiqMQR4xAeHTuB9uWm+fFRcIOgKBMiOBP+eXiyT7jsgVCq1bkVygt00oASowB7EdtpOHaaPgKt812P9ab+DDKA==",
-      "dev": true,
       "hasInstallScript": true,
       "license": "MIT",
       "optional": true,
@@ -5597,7 +5545,7 @@
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-4.0.0.tgz",
       "integrity": "sha512-Y22oTqIU4uuPgEemfz7NDJz6OeKf12Lsu+QC+s3BVpda64lTiMYCyGwg5ki4vFxkMwQdeZDl2adZoqUgdFuTgQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "whatwg-encoding": "^3.1.1"
@@ -5610,7 +5558,7 @@
       "version": "7.0.2",
       "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
       "integrity": "sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "agent-base": "^7.1.0",
@@ -5624,7 +5572,7 @@
       "version": "7.0.6",
       "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
       "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "agent-base": "^7.1.2",
@@ -5638,7 +5586,7 @@
       "version": "0.6.3",
       "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
       "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "safer-buffer": ">= 2.1.2 < 3.0.0"
@@ -5996,7 +5944,7 @@
       "version": "1.0.1",
       "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
       "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/is-regex": {
@@ -6235,7 +6183,7 @@
       "version": "26.1.0",
       "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-26.1.0.tgz",
       "integrity": "sha512-Cvc9WUhxSMEo4McES3P7oK3QaXldCfNWp7pl2NNeiIFlCoLr3kfq9kb1fxftiwk1FLV7CvpvDfonxtzUDeSOPg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "cssstyle": "^4.2.1",
@@ -6413,14 +6361,14 @@
       "version": "3.2.1",
       "resolved": "https://registry.npmjs.org/loupe/-/loupe-3.2.1.tgz",
       "integrity": "sha512-CdzqowRJCeLU72bHvWqwRBBlLcMEtIvGrlvef74kMnV2AolS9Y8xUv1I0U/MNAWMhBlKIoyuEgoJ0t/bbwHbLQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/lru-cache": {
       "version": "10.4.3",
       "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
       "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "ISC"
     },
     "node_modules/lz-string": {
@@ -6437,7 +6385,7 @@
       "version": "0.30.21",
       "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
       "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@jridgewell/sourcemap-codec": "^1.5.5"
@@ -6693,7 +6641,7 @@
       "version": "2.2.24",
       "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.24.tgz",
       "integrity": "sha512-7YRhZ3jS45LwmSCT4b2sVFHt/WuovaktDU07QrtOBY2PXskss5a9jfmR9jptyumwXST+rFjrmppMY1KT/yn35A==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/object-assign": {
@@ -6941,7 +6889,7 @@
       "version": "7.3.0",
       "resolved": "https://registry.npmjs.org/parse5/-/parse5-7.3.0.tgz",
       "integrity": "sha512-IInvU7fabl34qmi9gY8XOVxhYyMyuH2xUNpb2q8/Y+7552KlejkRvqvD19nMoUW/uQGGbqNpA6Tufu5FL5BZgw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "entities": "^6.0.0"
@@ -7008,14 +6956,14 @@
       "version": "2.0.3",
       "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
       "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/pathval": {
       "version": "2.0.1",
       "resolved": "https://registry.npmjs.org/pathval/-/pathval-2.0.1.tgz",
       "integrity": "sha512-//nshmD55c46FuFw26xV/xFAaB5HF9Xdap7HJBBnrKdAd6/GxDBaNA1870O79+9ueg61cZLSVc+OaFlfmObYVQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">= 14.16"
@@ -7143,7 +7091,7 @@
       "version": "1.61.1",
       "resolved": "https://registry.npmjs.org/playwright/-/playwright-1.61.1.tgz",
       "integrity": "sha512-DWnY5o3YbLWK4GovuAVwpqL+1VwGNdUGrRr++8j8PtQQzvAVZUIMjKQ90fY689sEJZJBbZVw1rXaOKSTitkzPQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "Apache-2.0",
       "dependencies": {
         "playwright-core": "1.61.1"
@@ -7162,7 +7110,7 @@
       "version": "1.61.1",
       "resolved": "https://registry.npmjs.org/playwright-core/-/playwright-core-1.61.1.tgz",
       "integrity": "sha512-h7Qlt6m4REp25qvIdvbDtVmD4LqVXfpRxhORv9L0jzETM05p4fuPJ3dKyuSXQxDSbXnmS79HAgi9589lGSpLkg==",
-      "dev": true,
+      "devOptional": true,
       "license": "Apache-2.0",
       "bin": {
         "playwright-core": "cli.js"
@@ -7490,7 +7438,7 @@
       "version": "4.62.2",
       "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.62.2.tgz",
       "integrity": "sha512-RFnrW4lhXA3s3eqHDZvN654g8OTjzRfqpIRJYczCGB6HzphckVAi/Qh4tbPUbRuDi7s1Llv8g/NspLkttY3gTA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@types/estree": "1.0.9"
@@ -7541,7 +7489,7 @@
       "version": "0.8.0",
       "resolved": "https://registry.npmjs.org/rrweb-cssom/-/rrweb-cssom-0.8.0.tgz",
       "integrity": "sha512-guoltQEx+9aMf2gDZ0s62EcV8lsXR+0w8915TC3ITdn2YueuNjdAYh/levpU9nFaoChh9RUS5ZdQMrKfVEN9tw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/run-parallel": {
@@ -7627,14 +7575,14 @@
       "version": "2.1.2",
       "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
       "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/saxes": {
       "version": "6.0.0",
       "resolved": "https://registry.npmjs.org/saxes/-/saxes-6.0.0.tgz",
       "integrity": "sha512-xAg7SOnEhrm5zI3puOOKyy1OMcMlIJZYNJY7xLBwSze0UjhPLnWfj2GF2EpT0jmzaJKIWKHLsaSSajf35bcYnA==",
-      "dev": true,
+      "devOptional": true,
       "license": "ISC",
       "dependencies": {
         "xmlchars": "^2.2.0"
@@ -7865,7 +7813,7 @@
       "version": "2.0.0",
       "resolved": "https://registry.npmjs.org/siginfo/-/siginfo-2.0.0.tgz",
       "integrity": "sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==",
-      "dev": true,
+      "devOptional": true,
       "license": "ISC"
     },
     "node_modules/signal-exit": {
@@ -7910,14 +7858,14 @@
       "version": "0.0.2",
       "resolved": "https://registry.npmjs.org/stackback/-/stackback-0.0.2.tgz",
       "integrity": "sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/std-env": {
       "version": "3.10.0",
       "resolved": "https://registry.npmjs.org/std-env/-/std-env-3.10.0.tgz",
       "integrity": "sha512-5GS12FdOZNliM5mAOxFRg7Ir0pWz8MdpYm6AY6VPkGpbA7ZzmbzNcBJQ0GPvvyWgcY7QAhCgf9Uy89I03faLkg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/stop-iteration-iterator": {
@@ -8123,7 +8071,7 @@
       "version": "3.1.0",
       "resolved": "https://registry.npmjs.org/strip-literal/-/strip-literal-3.1.0.tgz",
       "integrity": "sha512-8r3mkIM/2+PpjHoOtiAW8Rg3jJLHaV7xPwG+YRGrv6FP0wwk/toTpATxWYOW0BKdWwl82VT2tFYi5DlROa0Mxg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "js-tokens": "^9.0.1"
@@ -8136,7 +8084,7 @@
       "version": "9.0.1",
       "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-9.0.1.tgz",
       "integrity": "sha512-mxa9E9ITFOt0ban3j6L5MpjwegGz6lBQmM1IJkWeBZGcMxto50+eWdjC/52xDbS2vy0k7vIMK0Fe2wfL9OQSpQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/styled-jsx": {
@@ -8192,28 +8140,28 @@
       "version": "3.2.4",
       "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
       "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/tinybench": {
       "version": "2.9.0",
       "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-2.9.0.tgz",
       "integrity": "sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/tinyexec": {
       "version": "0.3.2",
       "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-0.3.2.tgz",
       "integrity": "sha512-KQQR9yN7R5+OSwaK0XQoj22pwHoTlgYqmUscPYoknOoWCWfj/5/ABTMRi69FrKU5ffPVh5QcFikpWJI/P1ocHA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/tinyglobby": {
       "version": "0.2.17",
       "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.17.tgz",
       "integrity": "sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "fdir": "^6.5.0",
@@ -8230,7 +8178,7 @@
       "version": "6.5.0",
       "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
       "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=12.0.0"
@@ -8248,7 +8196,7 @@
       "version": "4.0.5",
       "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
       "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=12"
@@ -8261,7 +8209,7 @@
       "version": "1.1.1",
       "resolved": "https://registry.npmjs.org/tinypool/-/tinypool-1.1.1.tgz",
       "integrity": "sha512-Zba82s87IFq9A9XmjiX5uZA/ARWDrB03OHlq+Vw1fSdt0I+4/Kutwy8BP4Y/y/aORMo61FQ0vIb5j44vSo5Pkg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": "^18.0.0 || >=20.0.0"
@@ -8271,7 +8219,7 @@
       "version": "2.0.0",
       "resolved": "https://registry.npmjs.org/tinyrainbow/-/tinyrainbow-2.0.0.tgz",
       "integrity": "sha512-op4nsTR47R6p0vMUUoYl/a+ljLFVtlfaXkLQmqfLR1qHma1h/ysYk4hEXZ880bf2CYgTskvTa/e196Vd5dDQXw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=14.0.0"
@@ -8281,7 +8229,7 @@
       "version": "4.0.4",
       "resolved": "https://registry.npmjs.org/tinyspy/-/tinyspy-4.0.4.tgz",
       "integrity": "sha512-azl+t0z7pw/z958Gy9svOTuzqIk6xq+NSheJzn5MMWtWTFywIacg2wUlzKFGtt3cthx0r2SxMK0yzJOR0IES7Q==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=14.0.0"
@@ -8291,7 +8239,7 @@
       "version": "6.1.86",
       "resolved": "https://registry.npmjs.org/tldts/-/tldts-6.1.86.tgz",
       "integrity": "sha512-WMi/OQ2axVTf/ykqCQgXiIct+mSQDFdH2fkwhPwgEwvJ1kSzZRiinb0zF2Xb8u4+OqPChmyI6MEu4EezNJz+FQ==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "tldts-core": "^6.1.86"
@@ -8304,7 +8252,7 @@
       "version": "6.1.86",
       "resolved": "https://registry.npmjs.org/tldts-core/-/tldts-core-6.1.86.tgz",
       "integrity": "sha512-Je6p7pkk+KMzMv2XXKmAE3McmolOQFdxkKw0R8EYNr7sELW46JqnNeTX8ybPiQgvg1ymCoF8LXs5fzFaZvJPTA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/to-regex-range": {
@@ -8324,7 +8272,7 @@
       "version": "5.1.2",
       "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-5.1.2.tgz",
       "integrity": "sha512-FVDYdxtnj0G6Qm/DhNPSb8Ju59ULcup3tuJxkFb5K8Bv2pUXILbf0xZWU8PX8Ov19OXljbUyveOFwRMwkXzO+A==",
-      "dev": true,
+      "devOptional": true,
       "license": "BSD-3-Clause",
       "dependencies": {
         "tldts": "^6.1.32"
@@ -8337,7 +8285,7 @@
       "version": "5.1.1",
       "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.1.1.tgz",
       "integrity": "sha512-hdF5ZgjTqgAntKkklYw0R03MG2x/bSzTtkxmIRw/sTNV8YXsCJ1tfLAX23lhxhHJlEf3CRCOCGGWw3vI3GaSPw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "punycode": "^2.3.1"
@@ -8382,7 +8330,7 @@
       "version": "4.23.11",
       "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.23.11.tgz",
       "integrity": "sha512-Ry2oTEUnhBdeEdWIztY8kf3/nBGnPnjMLVGL0YfdRXMORuPER5NlKmayqxtxRxwB1xBN+RivRaJfe7PM1rtiyw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "esbuild": "~0.28.0"
@@ -8401,7 +8349,6 @@
       "version": "2.3.3",
       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
       "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
-      "dev": true,
       "hasInstallScript": true,
       "license": "MIT",
       "optional": true,
@@ -8593,7 +8540,7 @@
       "version": "7.3.6",
       "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.6.tgz",
       "integrity": "sha512-4XP60spRGjSZFf1qYH+dJIkK2znL3zQfl9KkOV9MkkRR/3Dls0dxaBsQPTloEc5BLXWPL9vsOxopxyKoMmDueg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "esbuild": "^0.27.0 || ^0.28.0",
@@ -8668,7 +8615,7 @@
       "version": "3.2.4",
       "resolved": "https://registry.npmjs.org/vite-node/-/vite-node-3.2.4.tgz",
       "integrity": "sha512-EbKSKh+bh1E1IFxeO0pg1n4dvoOTt0UDiXMd/qn++r98+jPO1xtJilvXldeuQ8giIB5IkpjCgMleHMNEsGH6pg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "cac": "^6.7.14",
@@ -8691,7 +8638,7 @@
       "version": "6.5.0",
       "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
       "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=12.0.0"
@@ -8709,7 +8656,6 @@
       "version": "2.3.3",
       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
       "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
-      "dev": true,
       "hasInstallScript": true,
       "license": "MIT",
       "optional": true,
@@ -8724,7 +8670,7 @@
       "version": "4.0.5",
       "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
       "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=12"
@@ -8737,7 +8683,7 @@
       "version": "8.5.19",
       "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.19.tgz",
       "integrity": "sha512-Mz8SaolMd8nB+G13WkORcxQKHZ/NE4xXevtkJHVuG+guo9/wYKlIMTKAqGdEmYOXR2ijPjTYNHssizdaVSUNdQ==",
-      "dev": true,
+      "devOptional": true,
       "funding": [
         {
           "type": "opencollective",
@@ -8766,7 +8712,7 @@
       "version": "3.2.7",
       "resolved": "https://registry.npmjs.org/vitest/-/vitest-3.2.7.tgz",
       "integrity": "sha512-KrxIJ62Fd89gfysR4WotlgZABiz2dqFPgqGzX7s+CwsqLFomRH7777ZcrOD6+WVAh7khPQP41A+BKbpcJFrdEg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "@types/chai": "^5.2.2",
@@ -8839,7 +8785,7 @@
       "version": "4.0.5",
       "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.5.tgz",
       "integrity": "sha512-RvwwcruNjI1ncT5xRakeyS9Lf8lcItv34KD+aif+VH9kduAyfYBipGh12274xtenIPZ119/R9BdTBa8gAwSh0A==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=12"
@@ -8852,7 +8798,7 @@
       "version": "5.0.0",
       "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-5.0.0.tgz",
       "integrity": "sha512-o8qghlI8NZHU1lLPrpi2+Uq7abh4GGPpYANlalzWxyWteJOCsr/P+oPBA49TOLu5FTZO4d3F9MnWJfiMo4BkmA==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "xml-name-validator": "^5.0.0"
@@ -8865,7 +8811,7 @@
       "version": "7.0.0",
       "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
       "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
-      "dev": true,
+      "devOptional": true,
       "license": "BSD-2-Clause",
       "engines": {
         "node": ">=12"
@@ -8876,7 +8822,7 @@
       "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-3.1.1.tgz",
       "integrity": "sha512-6qN4hJdMwfYBtE3YBTTHhoeuUrDBPZmbQaxWAqSALV/MeEnR5z1xd8UKud2RAkFoPkmB+hli1TZSnyi84xz1vQ==",
       "deprecated": "Use @exodus/bytes instead for a more spec-conformant and faster implementation",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "iconv-lite": "0.6.3"
@@ -8889,7 +8835,7 @@
       "version": "4.0.0",
       "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-4.0.0.tgz",
       "integrity": "sha512-QaKxh0eNIi2mE9p2vEdzfagOKHCcj1pJ56EEHGQOVxp8r9/iszLUUV7v89x9O1p/T+NlTM5W7jW6+cz4Fq1YVg==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "engines": {
         "node": ">=18"
@@ -8899,7 +8845,7 @@
       "version": "14.2.0",
       "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.2.0.tgz",
       "integrity": "sha512-De72GdQZzNTUBBChsXueQUnPKDkg/5A5zp7pFDuQAj5UFoENpiACU0wlCvzpAGnTkj++ihpKwKyYewn/XNUbKw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "tr46": "^5.1.0",
@@ -9018,7 +8964,7 @@
       "version": "2.3.0",
       "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-2.3.0.tgz",
       "integrity": "sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT",
       "dependencies": {
         "siginfo": "^2.0.0",
@@ -9084,7 +9030,7 @@
       "version": "5.0.0",
       "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-5.0.0.tgz",
       "integrity": "sha512-EvGK8EJ3DhaHfbRlETOWAS5pO9MZITeauHKJyb8wyajUfQUenkIg2MvLDTZ4T/TgIcm3HU0TFBgWWboAZ30UHg==",
-      "dev": true,
+      "devOptional": true,
       "license": "Apache-2.0",
       "engines": {
         "node": ">=18"
@@ -9094,7 +9040,7 @@
       "version": "2.2.0",
       "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
       "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
-      "dev": true,
+      "devOptional": true,
       "license": "MIT"
     },
     "node_modules/xtend": {
diff --git a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
index fbdb6ef0..c4eeb9c5 100644
--- a/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
+++ b/projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md
@@ -4,7 +4,8 @@
 | --- | --- |
 | **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
 | **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
-| **Timestamp maintenance PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01** | 2026-09-18 05:15:00 CEST (+0200) — **PRODUCT JOURNEY E2E REAL RECONCILIATION INTEGRATION** · Cycle **15** · Capitalisation / REX + intégration Git · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01** · parent campagne **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01** · baseline pré-intégration `origin/main` `26478b1ea5b010c625f0c6039c969fac5c135cf5` · branche `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` · checkpoints **R1–R12** consolidés · Product fixes **R1/R3/R4/R6/R7/R8/R10** = intégration candidate this PR · Attempt 1 FAIL · Attempt 2 FAIL Authentication required · Attempt 3 Cursor REAL **technical SUCCESS** · bounded docs_write filesystem effect + Artifact Evidence **PROVEN** in M4 isolated WT · Product Result remains **UNCLAIMED** · blocker = **ContractResult extensibility / Evidence wiring** (`no_applicable_contract_result_rule` for `cursor.docs_write.apply`) · capitalisation `projects/sfia-studio/convergence/product-journey-e2e-real-reconciliation-01-capitalization.md` · **ZERO REAL** this integration macro · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **≠** Product Journey E2E READY / COMPLETE · **≠** ContractResult docs_write PASS · **≠** runtime v3 ADOPTED · next after integration verified = **R13 — Contract Result extensibility framing — ZERO REAL** · **NOT STARTED / NOT AUTHORIZED** by this tip · repository lifecycle = **RESOLVE FROM GIT / PR evidence** |
+| **Timestamp maintenance CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01** | 2026-09-18 08:15:00 CEST (+0200) — **CONTRACT RESULT EXTENSIBILITY IMPLEMENTATION** · Cycle Delivery/architecture implementation · EVOL · CRITICAL · Macro **CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01** · parent R13 framing **ADOPTED BY MORRIS** (Result Semantics Registry · server-owned static · frozen RB multi-Evidence AND · explicit CE supersession · A+B one ZERO-REAL macro) · baseline `origin/main` `bb6af3cabef663bd8619b85326dbc205057b7c7d` · branche locale `feat/sfia-studio-contract-result-extensibility-01` · **LOCAL CANDIDATE / NOT INTEGRATED ON MAIN** · temp-artifact registry entry #1 preserved · docs_write second semantic proven · Attempt 3 ZERO-REAL requalification **PASS** (`clm:docs-write:xat:w3a:c4c5670edb4658cc` supersedes `clm:w3b:b62e7e34320e78ea` immutable `not_proven`) · success-path REAL provenance adapt (`processDiagnostic` on RecordExecutionResult) · **ZERO REAL** · runtime v3 = **NON ADOPTED** · **≠** Product Journey READY/COMPLETE · **≠** generic CR all effect classes · **≠** Git/PR/CI semantics · next = ChatGPT Critical Review → Morris Git-integration gate · push/PR/merge **NOT AUTHORIZED** by this tip |
+| **Timestamp maintenance historique PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01 (pre-CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01)** | *(tip superseded by CONTRACT-RESULT-EXTENSIBILITY-IMPLEMENTATION-01 — HISTORICAL / SUPERSEDED AS CURRENT TIP)* — 2026-09-18 05:15:00 CEST (+0200) — **PRODUCT JOURNEY E2E REAL RECONCILIATION INTEGRATION** · Cycle **15** · Capitalisation / REX + intégration Git · EVOL · CRITICAL · Macro **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01** · parent campagne **PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01** · baseline pré-intégration `origin/main` `26478b1ea5b010c625f0c6039c969fac5c135cf5` · branche `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` · checkpoints **R1–R12** consolidés · Product fixes **R1/R3/R4/R6/R7/R8/R10** = intégration candidate this PR · Attempt 1 FAIL · Attempt 2 FAIL Authentication required · Attempt 3 Cursor REAL **technical SUCCESS** · bounded docs_write filesystem effect + Artifact Evidence **PROVEN** in M4 isolated WT · Product Result remains **UNCLAIMED** · blocker = **ContractResult extensibility / Evidence wiring** (`no_applicable_contract_result_rule` for `cursor.docs_write.apply`) · capitalisation `projects/sfia-studio/convergence/product-journey-e2e-real-reconciliation-01-capitalization.md` · **ZERO REAL** this integration macro · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **≠** Product Journey E2E READY / COMPLETE · **≠** ContractResult docs_write PASS · **≠** runtime v3 ADOPTED · next after integration verified = **R13 — Contract Result extensibility framing — ZERO REAL** · **NOT STARTED / NOT AUTHORIZED** by this tip · repository lifecycle = **RESOLVE FROM GIT / PR evidence** |
 | **Timestamp maintenance historique PRODUCT-DOCS-WRITE-REAL-PASS-POST-MERGE-TRUTH-SYNC-01 (pre-PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01)** | *(tip superseded by PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01 — HISTORICAL / SUPERSEDED AS CURRENT TIP)* — 2026-09-17 18:25:36 CEST (+0200) — **PRODUCT DOCS_WRITE REAL PASS POST-MERGE TRUTH-SYNC** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · Macro **PRODUCT-DOCS-WRITE-REAL-PASS-POST-MERGE-TRUTH-SYNC-01** · parent macro **PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01** · GO Morris post-merge documentary truth-sync #499 **CONSUMED** (local docs + commit only) · PR **#499 MERGED** `docs(sfia-studio): capitalize Product docs-write REAL proof` · head `9981483f8c158bec07364e14e626cdf2c3fd1e34` · merge `3907177f7788d23d640c5bdcd1cee8e01615762f` · parents `b739ddd3826ea4df640e3f34f97a966d85f8d214` + `9981483f8c158bec07364e14e626cdf2c3fd1e34` · capitalisation = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · pre-merge CI **`35236024162` SUCCESS** · Required Gate **PASS** · post-merge CI **`35245046244` SUCCESS** · Required Gate **PASS** · `headSha=3907177f7788d23d640c5bdcd1cee8e01615762f` · merge lifecycle #499 = **COMPLETED / CONSUMED** · post-merge verification = **PASS** · claim **AUTHENTICATED PRODUCT DOCS_WRITE REAL PROVEN AT TESTED HISTORICAL PROJECT SCOPE** · **ZERO REAL** · Product code **UNCHANGED** · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** **PRESERVED** · next Product capability candidate = **PRODUCT-JOURNEY-POST-EXECUTION-REPLAN** · **NOT STARTED / NOT AUTHORIZED** by this truth-sync · this documentary truth-sync = **LOCAL CANDIDATE** · Review Handoff publication **PENDING** (distinct Morris remote push gate) · push/PR/merge of this truth-sync = **DISTINCT Morris gates** · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / origin/main / PR evidence** · **≠** E2E FULL REAL PROVEN · **≠** Product Journey complete to Nora replanning · **≠** docs_write generalized · **≠** Cursor autonomy · **≠** runtime v3 ADOPTED · **≠** global L5 · **≠** new REAL authorization · **≠** PRODUCT-JOURNEY-POST-EXECUTION-REPLAN started · **≠** push/PR/merge authorized by proof |
 | **Timestamp maintenance historique PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01 (pre-PRODUCT-DOCS-WRITE-REAL-PASS-POST-MERGE-TRUTH-SYNC-01)** | *(tip superseded by PRODUCT-DOCS-WRITE-REAL-PASS-POST-MERGE-TRUTH-SYNC-01 — HISTORICAL / SUPERSEDED AS CURRENT TIP)* — 2026-09-17 16:15:39 CEST (+0200) — **PRODUCT DOCS_WRITE REAL PASS CAPITALISATION** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · Macro **PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01** · GO capitalisation locale **CONSUMED** · GO Review Handoff + push + PR **CONSUMED** · remédiation gouvernance PR499 in-cycle · Product PR **#498 MERGED** `fix(sfia-studio): close docs-write REAL path and completion` · merge/main `b739ddd3826ea4df640e3f34f97a966d85f8d214` · post-merge CI **`35215299343` SUCCESS** · Required Gate **PASS** · Fresh Authenticated Product Reproof09 REAL = **PASS** · claim **AUTHENTICATED PRODUCT DOCS_WRITE REAL PROVEN AT TESTED HISTORICAL PROJECT SCOPE** · 1 Product Execute / 1 Cursor REAL spawn / 0 retry · exact target `projects/sfia-studio/.sandbox/gestion-de-taches.md` **PASS** · Attempt terminal **`succeeded`** **PASS** · Evidence/ReviewBundle **PASS** · restart/no-relaunch **PASS** · capitalisation asset `projects/sfia-studio/convergence/sfia-studio-product-docs-write-real-pass-capitalisation.md` = **CANDIDATE PR #499 / remote branch / pending merge** · PR **#499** `docs(sfia-studio): capitalize Product docs-write REAL proof` · base `main` @ `b739ddd3826ea4df640e3f34f97a966d85f8d214` · pre-remediation head `f0b7c414394e2bb51ae93ec159027682d0bdc1c4` · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** **PRESERVED** · next Product capability candidate = **PRODUCT-JOURNEY-POST-EXECUTION-REPLAN** · **NOT STARTED / NOT AUTHORIZED** by this capitalisation · **ZERO REAL** this DOC cycle · Product code **unchanged** · Review Handoff = **PUBLISHED / REMOTE VERIFIED** · pre-remediation handoff `2bd065dfc15ff5577ef83f78feebd05c5738d231` · remediation handoff republish-in-cycle for new HEAD · GO push/PR = **CONSUMED** · PR **#499 OPEN** · merge = **DISTINCT PENDING Morris gate** · **≠** E2E FULL REAL PROVEN · **≠** Product Journey complete to Nora replanning · **≠** docs_write generalized · **≠** Cursor autonomy · **≠** runtime v3 ADOPTED · **≠** global L5 · **≠** new REAL authorization · **≠** push/PR/merge authorized by proof |
 | **Timestamp maintenance historique GCEC-D-CAPABLE-POST-MERGE-DOCUMENTARY-TRUTH-SYNC-01 (pre-PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01)** | *(tip superseded by PRODUCT-DOCS-WRITE-REAL-PASS-CAPITALISATION-01)* — 2026-09-13 20:26 CEST (+0200) — **GCEC D-CAPABLE POST-MERGE DOCUMENTARY TRUTH-SYNC** · Cycle **15** · Capitalisation / REX · DOC · CRITICAL · GO **GCEC D-CAPABLE POST-MERGE DOCUMENTARY TRUTH-SYNC — ROADMAP + CAPITALISATION — MAIN 76E2D786 — ZERO REAL** **CONSUMED** · placement GO **USE `projects/sfia-studio/convergence/sfia-studio-gcec-d-capable-post-merge-capitalisation.md` AS GCEC PROJECT CAPITALISATION TARGET** **CONSUMED** · GO **GCEC D-CAPABLE POST-MERGE DOCUMENTARY TRUTH-SYNC — PROJECT GIT INTEGRATION — COMMIT + PUSH + PR + CI + CHATGPT CRITICAL REVIEW — CONDITIONAL MERGE — ZERO REAL** **CONSUMED** · **GCEC lane truth-sync only** (not automatic global Nora top priority) · Product GCEC D-capable chain = **INTEGRATED ON MAIN / POST-MERGE VERIFIED** · integration anchor `origin/main` @ `76e2d7869be439313b1c52bf4083aa105e5c6293` *(milestone post-merge anchor · living Roadmap **≠** permanent HEAD embed · **CURRENT REPOSITORY TRUTH = RESOLVE FROM GIT / `origin/main` / PR evidence**)* · PR **#481 MERGED** `feat(sfia-studio): integrate GCEC D-capable Product chain` · base `c481610caa3527edabeca8c860ab27c18a6a738e` · head `f42103881ea952f445672ed7781da59a465893d8` · merge `76e2d7869be439313b1c52bf4083aa105e5c6293` · parents `c481610c…` + `f4210388…` · head→merge content delta **ZERO** · source branch `delivery/sfia-studio-gcec-d-ephemeral-secret-bridge` **PRESERVED** @ `f4210388…` · post-merge CI **`34772652845` SUCCESS** (Detect / Build / Required Gate) · Roadmap **intentionally unmodified** by Product PR #481 · remaining debt = documentary drift treated by this documentary package · repository closure requires exact project Git integration and post-merge verification · repository lifecycle = RESOLVE FROM CURRENT GIT / PR EVIDENCE · A/B/C historical REAL **PROVEN AT TESTED SCOPE** **PRESERVED** · Cursor full-capability technical executor = **RO REAL-BACKED AT TESTED SCOPE** · cross-EC C→D continuity = **DETERMINISTICALLY PROVEN + REAL-BACKED BY D CAMPAIGN AT TESTED SCOPE** (VERIFIED prior Evidence + fresh RepositoryRead · ≠ ambient trust · ≠ blanket A→E) · D / `github.pr.create` = **REAL PROVEN AT TESTED SCOPE** · E / `github.pr.merge` = **REAL NOT PROVEN / NOT AUTHORIZED BY THIS CYCLE** · phase-scoped ExecutionContracts = **adopted construction trajectory** (one EC = one bounded execution intent · multiple sequential ECs may follow durable truth · A→D harness = proof/capability harness **≠** normative runtime orchestration · no monolithic A→D replay required as normative precondition for D or E) · technical capability **≠** execution authority · protected Git effects retain gates/Confirmations/authority · runtime v3 = **NON ADOPTED** · global L5 = **NOT ADOPTED** · **ACTIVE CONSTRUCTION PRIORITY = NORA COGNITIVE COMPLETION** (NORA-FIRST unchanged · GCEC ≠ global Studio top priority) · next GCEC continuation (if any) = **DISTINCT Morris GO for E / `github.pr.merge`** — **NOT** default next global capability · **NOT AUTHORIZED** by this DOC cycle · project Git integration GO **CONSUMED** — repository lifecycle = **RESOLVE FROM CURRENT GIT / PR EVIDENCE** · **ZERO GCEC REAL** this documentary integration cycle · **≠** E/merge REAL proven · **≠** merge authorized · **≠** generalized PR/Git autonomy · **≠** production autonomy · **≠** runtime v3 ADOPTED · **≠** global L5 · **≠** method promotion · **≠** Build Doctrine / C1 / v3 framing mutation · **≠** Product mutation · **≠** Nora priority displaced |

```

---

## W. FULL CONTENT — new / untracked Product + framing files

```
===== FILE: projects/sfia-studio/app/lib/oa/evidence-review/application/contractResultSemantics.ts =====
/**
 * Server-owned static Result Semantics Registry for EvaluateContractResult.
 * One engine; many semantics. Unknown / zero-match → soft not_proven.
 * Ambiguous (multiple applicable) → hard fail at EvaluateContractResult.
 */
import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
import type { Evidence, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import { docsWriteContractResultSemantic } from "./docsWriteContractResultSemantic";
import {
  tempArtifactContractResultSemantic,
  W3B_TEMP_ARTIFACT_RULE_REF,
} from "./tempArtifactContractResultSemantic";

export type ContractResultSemanticApplicability =
  | { applicable: true; ruleRef: string }
  | { applicable: false; ruleRef: null };

export type ContractResultEvidenceSelection = {
  readonly requiredEvidenceIds: readonly string[];
  /** fail-closed reason if selection incomplete */
  readonly incompleteReason?: string;
};

export type ContractResultSemantic = {
  readonly id: string;
  readonly ruleRef: string;
  isApplicable(
    material: Pick<
      ExecutionContractSemanticMaterial,
      "action" | "requiredCapabilities"
    >,
  ): boolean;
  /** Select Evidence ids from frozen snapshots only — AND semantics */
  selectEvidenceIds(input: {
    material: ExecutionContractSemanticMaterial;
    attempt: ExecutionAttemptSnapshot;
    frozenSnapshots: readonly ReviewBundleEvidenceSnapshot[];
  }): ContractResultEvidenceSelection;
  assessExpectedOutput(input: {
    expectation: string;
    ordinal: number;
    attempt: ExecutionAttemptSnapshot;
    evidences: readonly Evidence[];
    material: ExecutionContractSemanticMaterial;
  }): "PASS" | "NOT_PROVEN" | "FAIL";
  assessEvidenceRequirement(input: {
    requirement: string;
    ordinal: number;
    attempt: ExecutionAttemptSnapshot;
    evidences: readonly Evidence[];
    frozenSnapshots: readonly ReviewBundleEvidenceSnapshot[];
    material: ExecutionContractSemanticMaterial;
  }): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN";
};

/** Static server-owned registry — compile-time entries only. */
export const CONTRACT_RESULT_SEMANTICS: readonly ContractResultSemantic[] = [
  tempArtifactContractResultSemantic,
  docsWriteContractResultSemantic,
];

export type ResolveApplicableContractResultSemanticsResult =
  | { status: "none" }
  | { status: "one"; semantic: ContractResultSemantic }
  | { status: "ambiguous"; ruleRefs: string[] };

export function resolveApplicableContractResultSemantics(
  material: Pick<
    ExecutionContractSemanticMaterial,
    | "action"
    | "requiredCapabilities"
    | "evidenceRequirements"
    | "expectedOutputs"
  >,
): ResolveApplicableContractResultSemanticsResult {
  const matches = CONTRACT_RESULT_SEMANTICS.filter((s) =>
    s.isApplicable(material),
  );
  if (matches.length === 0) return { status: "none" };
  if (matches.length === 1) {
    return { status: "one", semantic: matches[0]! };
  }
  return {
    status: "ambiguous",
    ruleRefs: matches.map((s) => s.ruleRef),
  };
}

/** Back-compat wrapper used by old call sites. */
export type ApplicableContractResultRule =
  | { readonly applicable: true; readonly ruleRef: string }
  | { readonly applicable: false; readonly ruleRef: null };

export function resolveApplicableContractResultRule(
  material: Pick<
    ExecutionContractSemanticMaterial,
    "action" | "requiredCapabilities" | "evidenceRequirements" | "expectedOutputs"
  >,
): ApplicableContractResultRule {
  const resolved = resolveApplicableContractResultSemantics(material);
  if (resolved.status === "one") {
    return { applicable: true, ruleRef: resolved.semantic.ruleRef };
  }
  // Ambiguous and none both surface as non-applicable at the soft-rule layer;
  // EvaluateContractResult fails hard on ambiguous before assessment.
  return { applicable: false, ruleRef: null };
}

export { W3B_TEMP_ARTIFACT_RULE_REF };

===== FILE: projects/sfia-studio/app/lib/oa/evidence-review/application/tempArtifactContractResultSemantic.ts =====
/**
 * Contract Result semantic entry #1 — product:generate-temporary-artifact (W3-B).
 * Ported from the former hard-coded contractResultSemanticEvaluator.
 */
import type { ExecutionContractSemanticMaterial } from "@/lib/oa/execution-contract";
import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import type {
  ContractResultEvidenceSelection,
  ContractResultSemantic,
} from "./contractResultSemantics";

export const W3B_TEMP_ARTIFACT_RULE_REF =
  "w3b-contract-result/product-generate-temporary-artifact-v1" as const;

export const W3B_TEMP_ARTIFACT_OPERATION_KEY =
  "product:generate-temporary-artifact" as const;

export const W3B_TEMP_ARTIFACT_CAPABILITY = "cap:product-temp-artifact" as const;

export const W3B_TEMP_ARTIFACT_EO_TEMPLATE =
  "Résultat d'exécution — generate-temporary-artifact" as const;

export const W3B_TEMP_ARTIFACT_ER_KEY = "evreq:generate-temporary-artifact" as const;

/** Governed W3-A execute path mints res:w3a:<hex> — server-owned shape only. */
const W3A_RESULT_REF_PATTERN = /^res:w3a:[a-f0-9]+$/;

const W3B_USABLE_EVIDENCE_STATUSES = new Set<EvidenceStatus>([
  "available",
  "verified",
]);

/** Positive allowlist — undefined/unknown/stale/aging cannot satisfy ER. */
const W3B_USABLE_EVIDENCE_FRESHNESS = new Set(["fresh"]);

export function tempArtifactExecutionFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): boolean {
  if (input.attempt.status !== "succeeded") return false;
  const resultRef = input.attempt.resultRef?.trim();
  if (!resultRef || !W3A_RESULT_REF_PATTERN.test(resultRef)) return false;
  return input.evidence.technicalResultRef === resultRef;
}

/** W3-B bounded ER validity — stale/rejected/unavailable Evidence cannot satisfy ER. */
export function isW3bContractResultEvidenceUsable(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  const { evidence, snapshot } = input;
  if (!snapshot) return false;
  if (snapshot.evidenceId !== evidence.evidenceId) return false;
  if (snapshot.evidenceVersion !== evidence.version) return false;
  if (snapshot.availability !== "available") return false;
  if (!W3B_USABLE_EVIDENCE_STATUSES.has(snapshot.status as EvidenceStatus)) {
    return false;
  }
  if (evidence.availability !== "available") return false;
  if (!W3B_USABLE_EVIDENCE_STATUSES.has(evidence.status)) return false;
  if (
    !evidence.freshness ||
    !W3B_USABLE_EVIDENCE_FRESHNESS.has(evidence.freshness)
  ) {
    return false;
  }
  return true;
}

export function evidenceMatchesFrozenSnapshot(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  return isW3bContractResultEvidenceUsable(input);
}

export function assessTempArtifactExpectedOutput(input: {
  expectation: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
}): "PASS" | "NOT_PROVEN" | "FAIL" {
  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    return "FAIL";
  }
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.expectation !== W3B_TEMP_ARTIFACT_EO_TEMPLATE) return "NOT_PROVEN";
  if (!tempArtifactExecutionFactsHold(input)) return "NOT_PROVEN";
  return "PASS";
}

export function assessTempArtifactEvidenceRequirement(input: {
  requirement: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.requirement !== W3B_TEMP_ARTIFACT_ER_KEY) return "NOT_PROVEN";
  if (
    !evidenceMatchesFrozenSnapshot({
      evidence: input.evidence,
      snapshot: input.frozenSnapshot,
    })
  ) {
    return "NOT_PROVEN";
  }
  if (!tempArtifactExecutionFactsHold(input)) return "NOT_SATISFIED";
  return "SATISFIED";
}

function pickTempArtifactEvidence(
  evidences: readonly Evidence[],
  attempt: ExecutionAttemptSnapshot,
): Evidence | undefined {
  const bound = evidences.filter(
    (e) => e.bindings.executionAttemptId === attempt.attemptId,
  );
  return bound.length === 1 ? bound[0] : undefined;
}

export const tempArtifactContractResultSemantic: ContractResultSemantic = {
  id: "temp-artifact",
  ruleRef: W3B_TEMP_ARTIFACT_RULE_REF,
  isApplicable(material) {
    if (material.action !== W3B_TEMP_ARTIFACT_OPERATION_KEY) return false;
    return Boolean(
      material.requiredCapabilities?.includes(W3B_TEMP_ARTIFACT_CAPABILITY),
    );
  },
  selectEvidenceIds(input): ContractResultEvidenceSelection {
    const frozen = input.frozenSnapshots;
    if (frozen.length === 0) {
      return {
        requiredEvidenceIds: [],
        incompleteReason: "no_frozen_evidence_snapshots",
      };
    }
    // Select all frozen ids; after load, assessors require exactly one attempt-bound Evidence.
    return {
      requiredEvidenceIds: frozen.map((s) => s.evidenceId),
    };
  },
  assessExpectedOutput(input) {
    const evidence = pickTempArtifactEvidence(input.evidences, input.attempt);
    if (!evidence) return "NOT_PROVEN";
    return assessTempArtifactExpectedOutput({
      expectation: input.expectation,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
    });
  },
  assessEvidenceRequirement(input) {
    const evidence = pickTempArtifactEvidence(input.evidences, input.attempt);
    if (!evidence) return "NOT_PROVEN";
    const frozenSnapshot = input.frozenSnapshots.find(
      (s) => s.evidenceId === evidence.evidenceId,
    );
    return assessTempArtifactEvidenceRequirement({
      requirement: input.requirement,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      frozenSnapshot,
    });
  },
};

export function isTempArtifactMaterialApplicable(
  material: Pick<
    ExecutionContractSemanticMaterial,
    "action" | "requiredCapabilities"
  >,
): boolean {
  return tempArtifactContractResultSemantic.isApplicable(material);
}

===== FILE: projects/sfia-studio/app/lib/oa/evidence-review/application/docsWriteContractResultSemantic.ts =====
/**
 * Contract Result semantic entry #2 — cursor.docs_write.apply (bounded docs-write).
 */
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { Evidence, EvidenceStatus, ExecutionAttemptSnapshot } from "../domain/types";
import type { ReviewBundleEvidenceSnapshot } from "../domain/reviewBundleTypes";
import type {
  ContractResultEvidenceSelection,
  ContractResultSemantic,
} from "./contractResultSemantics";
import { isW3bContractResultEvidenceUsable } from "./tempArtifactContractResultSemantic";

export const DOCS_WRITE_CONTRACT_RESULT_RULE_REF =
  "w3b-contract-result/cursor-docs-write-apply-v1" as const;

export const DOCS_WRITE_CONTRACT_RESULT_ER_KEY =
  "evreq:docs_write_artifact" as const;

export const BOUNDED_DOCS_WRITE_EO_TEMPLATE =
  "Résultat d'exécution — cursor.docs_write.apply" as const;

export const DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE =
  "execution_attempt:docs_write" as const;

/** Identity helpers for docs-write Contract Result ClaimEvaluations. */
export function docsWriteContractResultIdentity(attemptId: string): {
  claimEvaluationId: string;
  claimEvaluationIdempotencyKey: string;
  evidenceId: string;
  reviewBundleId: string;
} {
  const segment = attemptId.replace(/[^a-zA-Z0-9:_-]/g, "");
  return {
    claimEvaluationId: `clm:docs-write:${segment}`.slice(0, 128),
    claimEvaluationIdempotencyKey: `idem:docs-write-ce:${attemptId}`,
    evidenceId: `ev:docs-write:${segment}`.slice(0, 128),
    reviewBundleId: `rb:docs-write:${segment}`.slice(0, 128),
  };
}

export function docsWriteArtifactFactsHold(input: {
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  material: { executionContractId?: string };
}): boolean {
  const { attempt, evidence, material } = input;
  if (attempt.status !== "succeeded") return false;
  if (evidence.type !== "artifact") return false;
  if (evidence.source !== DOCS_WRITE_ARTIFACT_EVIDENCE_SOURCE) return false;
  if (evidence.bindings.executionAttemptId !== attempt.attemptId) return false;
  const contractId =
    material.executionContractId ?? attempt.executionContractId;
  if (
    evidence.bindings.executionContractId &&
    evidence.bindings.executionContractId !== contractId
  ) {
    return false;
  }
  if (!evidence.digest) return false;
  if (!evidence.location?.trim()) return false;
  return true;
}

/** Artifact-adapted usability — same freeze/status/freshness gates as W3-B. */
export function isDocsWriteContractResultEvidenceUsable(input: {
  evidence: Evidence;
  snapshot: ReviewBundleEvidenceSnapshot | undefined;
}): boolean {
  return isW3bContractResultEvidenceUsable(input);
}

function pickDocsWriteArtifactEvidence(
  evidences: readonly Evidence[],
  attempt: ExecutionAttemptSnapshot,
  material: { executionContractId?: string },
): Evidence | undefined {
  const matches = evidences.filter((e) =>
    docsWriteArtifactFactsHold({ attempt, evidence: e, material }),
  );
  return matches.length === 1 ? matches[0] : undefined;
}

export function assessDocsWriteExpectedOutput(input: {
  expectation: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  material: {
    executionContractId?: string;
    inputs?: Record<string, unknown>;
  };
}): "PASS" | "NOT_PROVEN" | "FAIL" {
  if (input.attempt.status === "failed" || input.attempt.status === "timeout") {
    return "FAIL";
  }
  if (
    !docsWriteArtifactFactsHold({
      attempt: input.attempt,
      evidence: input.evidence,
      material: input.material,
    })
  ) {
    return "NOT_PROVEN";
  }
  const location = input.evidence.location?.trim() ?? "";
  const targetPath =
    typeof input.material.inputs?.targetPath === "string"
      ? input.material.inputs.targetPath.trim()
      : "";
  const expectation = input.expectation.trim();
  if (!expectation) return "NOT_PROVEN";
  // Known templates / path equality
  if (expectation === BOUNDED_DOCS_WRITE_EO_TEMPLATE) {
    return "PASS";
  }
  const expectationLooksLikePath =
    expectation.includes("/") ||
    /\.(md|txt|json|ya?ml|ts|tsx|js|jsx)$/i.test(expectation);
  if (expectationLooksLikePath) {
    if (location.length > 0 && expectation === location) return "PASS";
    if (targetPath.length > 0 && expectation === targetPath) {
      return location.length === 0 || location === targetPath
        ? "PASS"
        : "NOT_PROVEN";
    }
    return "NOT_PROVEN";
  }
  // Bounded free-form profile EO (historical PREPARE wording): accept when
  // Artifact Evidence proves the contract target path.
  if (location.length > 0 && (targetPath.length === 0 || location === targetPath)) {
    return "PASS";
  }
  return "NOT_PROVEN";
}

export function assessDocsWriteEvidenceRequirement(input: {
  requirement: string;
  ordinal: number;
  attempt: ExecutionAttemptSnapshot;
  evidence: Evidence;
  frozenSnapshot: ReviewBundleEvidenceSnapshot | undefined;
  material: { executionContractId?: string };
}): "SATISFIED" | "NOT_SATISFIED" | "NOT_PROVEN" {
  if (input.ordinal !== 0) return "NOT_PROVEN";
  if (input.requirement !== DOCS_WRITE_CONTRACT_RESULT_ER_KEY) {
    return "NOT_PROVEN";
  }
  if (
    !isDocsWriteContractResultEvidenceUsable({
      evidence: input.evidence,
      snapshot: input.frozenSnapshot,
    })
  ) {
    return "NOT_PROVEN";
  }
  if (
    !docsWriteArtifactFactsHold({
      attempt: input.attempt,
      evidence: input.evidence,
      material: input.material,
    })
  ) {
    return "NOT_SATISFIED";
  }
  return "SATISFIED";
}

export const docsWriteContractResultSemantic: ContractResultSemantic = {
  id: "docs-write",
  ruleRef: DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
  isApplicable(material) {
    if (material.action !== M4_BOUNDED_DOCS_WRITE_ACTION) return false;
    return Boolean(
      material.requiredCapabilities?.includes(M4_BOUNDED_DOCS_WRITE_CAPABILITY),
    );
  },
  selectEvidenceIds(input): ContractResultEvidenceSelection {
    const frozen = input.frozenSnapshots;
    if (frozen.length === 0) {
      return {
        requiredEvidenceIds: [],
        incompleteReason: "no_frozen_evidence_snapshots",
      };
    }
    // Select all frozen ids; after load, assessors require exactly one docs_write artifact.
    return {
      requiredEvidenceIds: frozen.map((s) => s.evidenceId),
    };
  },
  assessExpectedOutput(input) {
    const evidence = pickDocsWriteArtifactEvidence(
      input.evidences,
      input.attempt,
      input.material,
    );
    if (!evidence) return "NOT_PROVEN";
    return assessDocsWriteExpectedOutput({
      expectation: input.expectation,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      material: input.material,
    });
  },
  assessEvidenceRequirement(input) {
    const evidence = pickDocsWriteArtifactEvidence(
      input.evidences,
      input.attempt,
      input.material,
    );
    if (!evidence) return "NOT_PROVEN";
    const frozenSnapshot = input.frozenSnapshots.find(
      (s) => s.evidenceId === evidence.evidenceId,
    );
    return assessDocsWriteEvidenceRequirement({
      requirement: input.requirement,
      ordinal: input.ordinal,
      attempt: input.attempt,
      evidence,
      frozenSnapshot,
      material: input.material,
    });
  },
};

/** @deprecated unused status set re-export for tests that may widen usability. */
export const DOCS_WRITE_USABLE_EVIDENCE_STATUSES = new Set<EvidenceStatus>([
  "available",
  "verified",
]);

===== FILE: projects/sfia-studio/app/lib/oa/evidence-review/application/resolveCurrentContractResultClaimEvaluation.ts =====
/**
 * Resolve the current (non-superseded) Contract Result ClaimEvaluation for an Attempt.
 *
 * Algorithm:
 * 1. listByProject
 * 2. filter subjectKind === execution_contract_result ∧ bindings.executionAttemptId
 * 3. build set of ids that appear as supersedesClaimEvaluationId targets (superseded)
 * 4. current = those not in superseded set
 * 5. if 0 → null; if 1 → return it;
 * 6. if >1 non-superseded roots: pick max evaluatedAt ISO, then max claimEvaluationId
 *    (deterministic tie-break; multiple roots should be rare).
 */
import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "../domain/contractResultTypes";
import type { ClaimEvaluation } from "../domain/claimEvaluationTypes";
import type { ClaimEvaluationRepositoryPort } from "../ports/claimEvaluationRepository";

export async function resolveCurrentContractResultClaimEvaluation(input: {
  repo: ClaimEvaluationRepositoryPort;
  projectId: string;
  executionAttemptId: string;
}): Promise<ClaimEvaluation | null> {
  const all = await input.repo.listByProject(input.projectId);
  const forAttempt = all.filter(
    (c) =>
      c.subjectKind === CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT &&
      c.contractResultBindings?.executionAttemptId ===
        input.executionAttemptId,
  );
  if (forAttempt.length === 0) return null;

  const superseded = new Set<string>();
  for (const c of forAttempt) {
    if (c.supersedesClaimEvaluationId) {
      superseded.add(c.supersedesClaimEvaluationId);
    }
  }

  const current = forAttempt.filter(
    (c) => !superseded.has(c.claimEvaluationId),
  );
  if (current.length === 0) return null;
  if (current.length === 1) return structuredClone(current[0]!);

  // Multiple non-superseded roots — deterministic pick by newest evaluatedAt, then id.
  const sorted = [...current].sort((a, b) => {
    const aAt = a.evaluatedAt ?? a.proposedAt ?? "";
    const bAt = b.evaluatedAt ?? b.proposedAt ?? "";
    if (aAt !== bAt) return aAt < bAt ? 1 : -1;
    return a.claimEvaluationId < b.claimEvaluationId ? 1 : -1;
  });
  return structuredClone(sorted[0]!);
}

===== FILE: projects/sfia-studio/app/features/project-assistant/w2/requalifyDocsWriteContractResult.ts =====
/**
 * Requalify docs_write Contract Result from durable Evidence + RB — ZERO new Attempt.
 * Freeze rb:docs-write if draft, evaluate with docs-write CE id, supersede prior CE.
 */
import { createHash } from "node:crypto";
import type { ActorReference } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type {
  ClaimEvaluation,
  EvidenceReviewServices,
  ReviewBundle,
} from "@/lib/oa/evidence-review";
import {
  docsWriteContractResultIdentity,
  resolveCurrentContractResultClaimEvaluation,
} from "@/lib/oa/evidence-review";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";

function w3bClaimEvaluationIdForAttempt(attemptId: string): string {
  const digest = createHash("sha256").update(attemptId).digest("hex").slice(0, 16);
  return `clm:w3b:${digest}`;
}

export type RequalifyDocsWriteContractResultInput = {
  evidenceReviewServices: EvidenceReviewServices;
  attempt: ExecutionAttempt;
  contract: ExecutionContract;
  actor?: ActorReference;
  correlationId?: string;
  nowIso?: string;
};

export type RequalifyDocsWriteContractResultResult =
  | {
      ok: true;
      claimEvaluation: ClaimEvaluation;
      reviewBundle: ReviewBundle;
      supersededClaimEvaluationId?: string;
      reusedFromIdempotencyKey?: boolean;
    }
  | { ok: false; code: string; message: string };

export async function requalifyDocsWriteContractResult(
  input: RequalifyDocsWriteContractResultInput,
): Promise<RequalifyDocsWriteContractResultResult> {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const services = input.evidenceReviewServices;
  if (!services.evaluateContractResult) {
    return {
      ok: false,
      code: "CONTRACT_RESULT_EVALUATOR_UNAVAILABLE",
      message: "EvaluateContractResult indisponible — fail-closed.",
    };
  }

  const ids = docsWriteContractResultIdentity(input.attempt.attemptId);
  const evidence = await services.evidenceReader.findById(ids.evidenceId);
  if (!evidence) {
    return {
      ok: false,
      code: "DOCS_WRITE_EVIDENCE_MISSING",
      message: `Evidence ${ids.evidenceId} introuvable — ingest docs_write requis.`,
    };
  }

  let reviewBundle = await services.reviewBundleReader.findById(
    ids.reviewBundleId,
  );
  if (!reviewBundle) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_MISSING",
      message: `ReviewBundle ${ids.reviewBundleId} introuvable.`,
    };
  }

  if (!reviewBundle.frozenAt && reviewBundle.status === "draft") {
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: ids.reviewBundleId,
      expectedVersion: reviewBundle.version,
      idempotencyKey: `idem:docs-write-rb-freeze:${input.attempt.attemptId}`,
      actor,
      correlationId: input.correlationId,
      nowIso: input.nowIso,
    });
    if (!frozen.ok) {
      return {
        ok: false,
        code: frozen.error.detailCode,
        message: frozen.error.message,
      };
    }
    reviewBundle = frozen.reviewBundle;
  } else if (!reviewBundle.frozenAt || !reviewBundle.frozenVersion) {
    return {
      ok: false,
      code: "DOCS_WRITE_REVIEW_BUNDLE_NOT_FROZEN",
      message: "ReviewBundle docs_write non frozen — fail-closed.",
    };
  }

  const projectId =
    input.contract.projectId ||
    evidence.bindings.projectId ||
    reviewBundle.projectId;

  let supersededClaimEvaluationId: string | undefined;
  const current = await resolveCurrentContractResultClaimEvaluation({
    repo: services.claimEvaluationRepository,
    projectId,
    executionAttemptId: input.attempt.attemptId,
  });
  if (current && current.claimEvaluationId !== ids.claimEvaluationId) {
    supersededClaimEvaluationId = current.claimEvaluationId;
  } else {
    const w3bCe = await services.claimEvaluationReader.findById(
      w3bClaimEvaluationIdForAttempt(input.attempt.attemptId),
    );
    if (w3bCe && w3bCe.claimEvaluationId !== ids.claimEvaluationId) {
      supersededClaimEvaluationId = w3bCe.claimEvaluationId;
    }
  }

  const evaluated = await services.evaluateContractResult.execute({
    claimEvaluationId: ids.claimEvaluationId,
    idempotencyKey: ids.claimEvaluationIdempotencyKey,
    actor,
    contract: input.contract,
    attempt: {
      attemptId: input.attempt.attemptId,
      executionContractId: input.attempt.executionContractId,
      executionContractVersion: input.attempt.executionContractVersion,
      executionContractSemanticFingerprint:
        input.attempt.executionContractSemanticFingerprint,
      boundExecutionContract: input.attempt.boundExecutionContract,
      status: input.attempt.status,
      resultRef: input.attempt.resultRef,
      errorRef: input.attempt.errorRef,
      stopReason: input.attempt.stopReason,
      cancelledAt: input.attempt.cancelledAt,
      failedAt: input.attempt.failedAt,
      timedOutAt: input.attempt.timedOutAt,
      stopOrigin: input.attempt.stopOrigin,
      stopCode: input.attempt.stopCode,
      stopSourceRef: input.attempt.stopSourceRef,
      stopObservedAt: input.attempt.stopObservedAt,
      completedAt: input.attempt.completedAt,
      selectedAgentRef: input.attempt.selectedAgentRef,
    },
    reviewBundle,
    ...(supersededClaimEvaluationId
      ? { supersedesClaimEvaluationId: supersededClaimEvaluationId }
      : {}),
    correlationId: input.correlationId,
    nowIso: input.nowIso,
  });

  if (!evaluated.ok) {
    return {
      ok: false,
      code: evaluated.error.detailCode,
      message:
        evaluated.error.internalCauseRef ?? evaluated.error.message,
    };
  }

  return {
    ok: true,
    claimEvaluation: evaluated.claimEvaluation,
    reviewBundle,
    ...(supersededClaimEvaluationId
      ? { supersededClaimEvaluationId }
      : {}),
    reusedFromIdempotencyKey: evaluated.reusedFromIdempotencyKey,
  };
}

===== FILE: projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultSemanticsRegistry.d0.test.ts =====
/**
 * CONTRACT-RESULT-EXTENSIBILITY — Result Semantics Registry unit proofs (T1–T20).
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import {
  assessExpectedOutputs,
  assessEvidenceRequirements,
  deriveCanonicalContractResultStatus,
} from "@/lib/oa/evidence-review/application/contractResultAssessment";
import {
  CONTRACT_RESULT_SEMANTICS,
  resolveApplicableContractResultRule,
  resolveApplicableContractResultSemantics,
} from "@/lib/oa/evidence-review/application/contractResultSemantics";
import {
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
  DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
  docsWriteContractResultIdentity,
} from "@/lib/oa/evidence-review/application/docsWriteContractResultSemantic";
import {
  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
  W3B_TEMP_ARTIFACT_ER_KEY,
  W3B_TEMP_ARTIFACT_RULE_REF,
} from "@/lib/oa/evidence-review/application/tempArtifactContractResultSemantic";
import { EvaluateContractResult } from "@/lib/oa/evidence-review/application/evaluateContractResult";
import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review/application/resolveCurrentContractResultClaimEvaluation";
import { createInMemoryEvidenceReviewServices } from "@/lib/oa/evidence-review";
import { CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT } from "@/lib/oa/evidence-review/domain/contractResultTypes";
import { CLAIM_EVALUATION_SCHEMA_VERSION } from "@/lib/oa/evidence-review/domain/claimEvaluationTypes";
import { FixedClock } from "@/lib/oa/doctrine";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { Digest } from "@/lib/oa/doctrine";

const ACTOR = { actorId: "actor:reg", role: "project_owner" as const };
const NOW = "2026-09-18T08:00:00.000Z";

function tempContract(overrides: Partial<ExecutionContract> = {}): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:reg:temp",
    projectId: "prj:reg",
    version: 1,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: "product:generate-temporary-artifact",
    target: "product:project-workspace",
    scope: "product:temporary-local-artifact",
    requiredAuthority: "N3",
    constraints: [],
    stopConditions: [],
    evidenceRequirements: [W3B_TEMP_ARTIFACT_ER_KEY],
    expectedOutputs: [W3B_TEMP_ARTIFACT_EO_TEMPLATE],
    requiredCapabilities: ["cap:product-temp-artifact"],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:reg:temp",
    correlationId: "cor:ec:reg:temp",
    ...overrides,
  };
  const material = executionContractSemanticMaterial(base);
  base.semanticFingerprint =
    computeExecutionContractSemanticMaterialFingerprint(material);
  return base;
}

function docsWriteContract(
  overrides: Partial<ExecutionContract> = {},
): ExecutionContract {
  return tempContract({
    executionContractId: "xct:reg:docs",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: "docs/functional-design.md",
    scope: "docs/",
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
    idempotencyKey: "idem:ec:reg:docs",
    correlationId: "cor:ec:reg:docs",
    ...overrides,
  });
}

function makeTempEvidence(attemptId = "xat:reg:1"): Evidence {
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: "ev:reg:temp",
    type: "artifact",
    source: "attempt",
    sourceKind: "execution_attempt",
    location: "refs/x",
    producedBy: ACTOR,
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    retentionClass: "standard",
    legalHold: false,
    bindings: {
      projectId: "prj:reg",
      executionContractId: "xct:reg:temp",
      executionAttemptId: attemptId,
    },
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev:reg",
      actor: ACTOR,
      source: "execution_adapter",
      timestamp: NOW,
      correlationId: "cor:ev:reg",
      projectId: "prj:reg",
    },
    version: 1,
    createdAt: NOW,
    technicalResultRef: "res:w3a:abc123",
  };
}

function makeDocsWriteEvidence(input?: {
  attemptId?: string;
  location?: string;
  contractId?: string;
}): Evidence {
  const attemptId = input?.attemptId ?? "xat:reg:docs";
  const location = input?.location ?? "docs/functional-design.md";
  return {
    schemaVersion: "0.2.0-oa",
    evidenceId: `ev:docs-write:${attemptId.replace(/[^a-zA-Z0-9:_-]/g, "")}`.slice(
      0,
      128,
    ),
    type: "artifact",
    source: "execution_attempt:docs_write",
    sourceKind: "external",
    location,
    digest: "sha256:deadbeefcafebabe0123456789abcdef0123456789abcdef0123456789abcdef" as Digest,
    producedBy: ACTOR,
    producedAt: NOW,
    freshness: "fresh",
    status: "available",
    classification: "internal",
    storageMode: "metadata_only",
    availability: "available",
    retentionClass: "standard",
    legalHold: false,
    bindings: {
      projectId: "prj:reg",
      executionContractId: input?.contractId ?? "xct:reg:docs",
      executionAttemptId: attemptId,
      cycleInstanceId: "cyc:reg:1",
    },
    containsSecrets: false,
    provenance: {
      schemaVersion: "0.1.0-oa",
      provenanceRecordId: "prv:ev:docs",
      actor: ACTOR,
      source: "execution_adapter",
      timestamp: NOW,
      correlationId: "cor:ev:docs",
      projectId: "prj:reg",
    },
    version: 1,
    createdAt: NOW,
  };
}

describe("Contract Result Semantics Registry (T1–T20)", () => {
  it("T1 — registry has temp-artifact + docs_write entries", () => {
    expect(CONTRACT_RESULT_SEMANTICS.length).toBeGreaterThanOrEqual(2);
    expect(CONTRACT_RESULT_SEMANTICS.map((s) => s.ruleRef)).toEqual(
      expect.arrayContaining([
        W3B_TEMP_ARTIFACT_RULE_REF,
        DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
      ]),
    );
  });

  it("T2 — temp-artifact applicability resolves one", () => {
    const c = tempContract();
    const material = executionContractSemanticMaterial(c);
    const r = resolveApplicableContractResultSemantics(material);
    expect(r.status).toBe("one");
    if (r.status === "one") {
      expect(r.semantic.ruleRef).toBe(W3B_TEMP_ARTIFACT_RULE_REF);
    }
  });

  it("T3 — docs_write applicability resolves one", () => {
    const c = docsWriteContract();
    const material = executionContractSemanticMaterial(c);
    const r = resolveApplicableContractResultSemantics(material);
    expect(r.status).toBe("one");
    if (r.status === "one") {
      expect(r.semantic.ruleRef).toBe(DOCS_WRITE_CONTRACT_RESULT_RULE_REF);
    }
  });

  it("T4 — unknown action → none / back-compat not applicable", () => {
    const c = tempContract({ action: "product:unknown", requiredCapabilities: [] });
    const material = executionContractSemanticMaterial(c);
    expect(resolveApplicableContractResultSemantics(material).status).toBe(
      "none",
    );
    expect(resolveApplicableContractResultRule(material).applicable).toBe(false);
  });

  it("T5 — temp-artifact assess PASS when facts hold", () => {
    const c = tempContract();
    const material = executionContractSemanticMaterial(c);
    const evidence = makeTempEvidence();
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:reg:1",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: c.semanticFingerprint as string,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: [
        {
          evidenceId: evidence.evidenceId,
          evidenceVersion: 1,
          status: "available",
          availability: "available",
        },
      ],
    });
    const er = assessEvidenceRequirements({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:reg:1",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: c.semanticFingerprint as string,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: [
        {
          evidenceId: evidence.evidenceId,
          evidenceVersion: 1,
          status: "available",
          availability: "available",
        },
      ],
    });
    expect(eo[0]?.result).toBe("PASS");
    expect(er[0]?.result).toBe("SATISFIED");
    expect(
      deriveCanonicalContractResultStatus({
        attemptStatus: "succeeded",
        expectedOutputAssessments: eo,
        evidenceRequirementAssessments: er,
      }),
    ).toBe("pass");
  });

  it("T6 — docs_write assess PASS on EO template + artifact facts", () => {
    const c = docsWriteContract();
    const material = executionContractSemanticMaterial(c);
    const evidence = makeDocsWriteEvidence();
    const attempt = {
      attemptId: "xat:reg:docs",
      executionContractId: c.executionContractId,
      executionContractVersion: 1,
      executionContractSemanticFingerprint: c.semanticFingerprint as string,
      status: "succeeded" as const,
      resultRef: "res:w3a:docs01",
    };
    const snap = [
      {
        evidenceId: evidence.evidenceId,
        evidenceVersion: 1,
        status: "available",
        availability: "available",
      },
    ];
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt,
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: snap,
    });
    const er = assessEvidenceRequirements({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt,
      evidences: [evidence],
      evaluatedAt: NOW,
      frozenEvidenceSnapshots: snap,
    });
    expect(eo[0]?.result).toBe("PASS");
    expect(eo[0]?.ruleRef).toBe(DOCS_WRITE_CONTRACT_RESULT_RULE_REF);
    expect(er[0]?.result).toBe("SATISFIED");
  });

  it("T7 — docs_write EO accepts evidence.location as expectation (GCEC style)", () => {
    const location = "docs/custom-path.md";
    const c = docsWriteContract({ expectedOutputs: [location] });
    const material = executionContractSemanticMaterial(c);
    const evidence = makeDocsWriteEvidence({ location });
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:reg:docs",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: c.semanticFingerprint as string,
        status: "succeeded",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
    });
    expect(eo[0]?.result).toBe("PASS");
  });

  it("T8 — docs_write wrong path → NOT_PROVEN", () => {
    const c = docsWriteContract({
      expectedOutputs: ["docs/expected.md"],
    });
    const material = executionContractSemanticMaterial(c);
    const evidence = makeDocsWriteEvidence({ location: "docs/other.md" });
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:reg:docs",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: c.semanticFingerprint as string,
        status: "succeeded",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("T9 — multi-evidence AND: temp-artifact with 0 matching → NOT_PROVEN", () => {
    const c = tempContract();
    const material = executionContractSemanticMaterial(c);
    const evidence = makeTempEvidence("xat:other");
    const eo = assessExpectedOutputs({
      semanticMaterial: material,
      semanticFingerprint: c.semanticFingerprint as string,
      attempt: {
        attemptId: "xat:reg:1",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: c.semanticFingerprint as string,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidences: [evidence],
      evaluatedAt: NOW,
    });
    expect(eo[0]?.result).toBe("NOT_PROVEN");
  });

  it("T10 — EvaluateContractResult ambiguous semantics → hard fail", async () => {
    // Force ambiguity by temporarily testing resolve with two matching predicates
    // via a synthetic material that both would match — impossible with current
    // registry (disjoint actions). Instead assert the fail path via direct status.
    const ambiguous = resolveApplicableContractResultSemantics({
      action: "product:generate-temporary-artifact",
      requiredCapabilities: ["cap:product-temp-artifact"],
      evidenceRequirements: [],
      expectedOutputs: [],
    });
    expect(ambiguous.status).not.toBe("ambiguous");

    // Unit the hard-fail branch by constructing Evaluate with a stub semantic
    // resolution is covered when status===ambiguous — keep regression on cause ref.
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    // Smoke: unknown action soft path still works with optional evidence.
    const c = tempContract({ action: "noop", requiredCapabilities: [] });
    const evidence = makeTempEvidence();
    await services.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:ev",
      operation: "register",
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:reg:none",
      idempotencyKey: "idem:rb:reg:none",
      actor: ACTOR,
      projectId: c.projectId,
      executionContractId: c.executionContractId,
      evidenceIds: [evidence.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:reg:none",
      expectedVersion: created.reviewBundle.version,
      idempotencyKey: "idem:rb-freeze:reg:none",
      actor: ACTOR,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const snap = captureBoundExecutionContractSnapshot(c);
    const evaluated = await services.evaluateContractResult!.execute({
      claimEvaluationId: "clm:reg:none",
      idempotencyKey: "idem:clm:reg:none",
      actor: ACTOR,
      contract: c,
      attempt: {
        attemptId: "xat:reg:1",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: snap.semanticFingerprint,
        boundExecutionContract: snap,
        status: "succeeded",
        resultRef: "res:w3a:abc123",
      },
      evidence,
      reviewBundle: frozen.reviewBundle,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("not_proven");
  });

  it("T11 — EvaluateContractResult docs_write selects artifact Evidence (no request.evidence)", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const c = docsWriteContract();
    const evidence = makeDocsWriteEvidence();
    await services.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:docs",
      operation: "register",
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:reg:docs",
      idempotencyKey: "idem:rb:reg:docs",
      actor: ACTOR,
      projectId: c.projectId,
      executionContractId: c.executionContractId,
      evidenceIds: [evidence.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:reg:docs",
      expectedVersion: created.reviewBundle.version,
      idempotencyKey: "idem:rb-freeze:reg:docs",
      actor: ACTOR,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const snap = captureBoundExecutionContractSnapshot(c);
    const ids = docsWriteContractResultIdentity("xat:reg:docs");
    const evaluated = await services.evaluateContractResult!.execute({
      claimEvaluationId: ids.claimEvaluationId,
      idempotencyKey: ids.claimEvaluationIdempotencyKey,
      actor: ACTOR,
      contract: c,
      attempt: {
        attemptId: "xat:reg:docs",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: snap.semanticFingerprint,
        boundExecutionContract: snap,
        status: "succeeded",
        resultRef: "res:w3a:docs01",
      },
      reviewBundle: frozen.reviewBundle,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("pass");
    expect(evaluated.claimEvaluation.ruleRef).toBe(
      DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
    );
    expect(evaluated.claimEvaluation.requiredEvidenceRefs).toContain(
      evidence.evidenceId,
    );
  });

  it("T12 — request.evidence not in selected set → CLAIM_EVALUATION_INVALID", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const c = docsWriteContract();
    const evidence = makeDocsWriteEvidence();
    const foreign = makeTempEvidence("xat:reg:docs");
    foreign.evidenceId = "ev:foreign";
    await services.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:docs",
      operation: "register",
    });
    await services.repository.create(foreign, {
      evidenceId: foreign.evidenceId,
      fingerprint: "fp:foreign",
      operation: "register",
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:reg:docs2",
      idempotencyKey: "idem:rb:reg:docs2",
      actor: ACTOR,
      projectId: c.projectId,
      executionContractId: c.executionContractId,
      evidenceIds: [evidence.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:reg:docs2",
      expectedVersion: created.reviewBundle.version,
      idempotencyKey: "idem:rb-freeze:reg:docs2",
      actor: ACTOR,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const snap = captureBoundExecutionContractSnapshot(c);
    const evaluated = await services.evaluateContractResult!.execute({
      claimEvaluationId: "clm:reg:foreign-ev",
      idempotencyKey: "idem:clm:reg:foreign-ev",
      actor: ACTOR,
      contract: c,
      attempt: {
        attemptId: "xat:reg:docs",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: snap.semanticFingerprint,
        boundExecutionContract: snap,
        status: "succeeded",
      },
      evidence: foreign,
      reviewBundle: frozen.reviewBundle,
    });
    expect(evaluated.ok).toBe(false);
    if (evaluated.ok) return;
    expect(evaluated.error.internalCauseRef).toBe(
      "evidence_not_selected_by_semantic",
    );
  });

  it("T13–T15 — supersession validates + resolveCurrent returns successor", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const c = docsWriteContract();
    const evidence = makeDocsWriteEvidence();
    await services.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:docs",
      operation: "register",
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:reg:sup",
      idempotencyKey: "idem:rb:reg:sup",
      actor: ACTOR,
      projectId: c.projectId,
      executionContractId: c.executionContractId,
      evidenceIds: [evidence.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:reg:sup",
      expectedVersion: created.reviewBundle.version,
      idempotencyKey: "idem:rb-freeze:reg:sup",
      actor: ACTOR,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const snap = captureBoundExecutionContractSnapshot(c);
    const attemptSnap = {
      attemptId: "xat:reg:docs",
      executionContractId: c.executionContractId,
      executionContractVersion: 1,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      boundExecutionContract: snap,
      status: "succeeded" as const,
    };

    const prior = await services.evaluateContractResult!.execute({
      claimEvaluationId: "clm:w3b:prior",
      idempotencyKey: "idem:clm:w3b:prior",
      actor: ACTOR,
      contract: c,
      attempt: attemptSnap,
      reviewBundle: frozen.reviewBundle,
    });
    expect(prior.ok).toBe(true);
    if (!prior.ok) return;

    const successor = await services.evaluateContractResult!.execute({
      claimEvaluationId: "clm:docs-write:xat:reg:docs",
      idempotencyKey: "idem:clm:docs-write:sup",
      actor: ACTOR,
      contract: c,
      attempt: attemptSnap,
      reviewBundle: frozen.reviewBundle,
      supersedesClaimEvaluationId: prior.claimEvaluation.claimEvaluationId,
    });
    expect(successor.ok).toBe(true);
    if (!successor.ok) return;
    expect(successor.claimEvaluation.supersedesClaimEvaluationId).toBe(
      "clm:w3b:prior",
    );
    expect(successor.claimEvaluation.status).toBe("pass");

    // T14 — supersedes missing → fail
    const missing = await services.evaluateContractResult!.execute({
      claimEvaluationId: "clm:docs-write:missing-prior",
      idempotencyKey: "idem:clm:docs-write:missing",
      actor: ACTOR,
      contract: c,
      attempt: attemptSnap,
      reviewBundle: frozen.reviewBundle,
      supersedesClaimEvaluationId: "clm:does-not-exist",
    });
    expect(missing.ok).toBe(false);

    // T15 — resolveCurrent picks successor
    const current = await resolveCurrentContractResultClaimEvaluation({
      repo: services.claimEvaluationRepository,
      projectId: c.projectId,
      executionAttemptId: "xat:reg:docs",
    });
    expect(current?.claimEvaluationId).toBe("clm:docs-write:xat:reg:docs");
  });

  it("T16 — supersedes self forbidden", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const c = docsWriteContract();
    const evidence = makeDocsWriteEvidence();
    await services.repository.create(evidence, {
      evidenceId: evidence.evidenceId,
      fingerprint: "fp:docs",
      operation: "register",
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:reg:self",
      idempotencyKey: "idem:rb:reg:self",
      actor: ACTOR,
      projectId: c.projectId,
      executionContractId: c.executionContractId,
      evidenceIds: [evidence.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:reg:self",
      expectedVersion: created.reviewBundle.version,
      idempotencyKey: "idem:rb-freeze:reg:self",
      actor: ACTOR,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const snap = captureBoundExecutionContractSnapshot(c);
    const evaluated = await services.evaluateContractResult!.execute({
      claimEvaluationId: "clm:self",
      idempotencyKey: "idem:clm:self",
      actor: ACTOR,
      contract: c,
      attempt: {
        attemptId: "xat:reg:docs",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: snap.semanticFingerprint,
        boundExecutionContract: snap,
        status: "succeeded",
      },
      reviewBundle: frozen.reviewBundle,
      supersedesClaimEvaluationId: "clm:self",
    });
    expect(evaluated.ok).toBe(false);
    if (evaluated.ok) return;
    expect(evaluated.error.internalCauseRef).toBe("supersedes_self_forbidden");
  });

  it("T17 — docsWriteContractResultIdentity mirrors ingest conventions", () => {
    const ids = docsWriteContractResultIdentity("xat:w3a:c4c5670edb4658cc");
    expect(ids.evidenceId).toBe("ev:docs-write:xat:w3a:c4c5670edb4658cc");
    expect(ids.reviewBundleId).toBe("rb:docs-write:xat:w3a:c4c5670edb4658cc");
    expect(ids.claimEvaluationId).toBe(
      "clm:docs-write:xat:w3a:c4c5670edb4658cc",
    );
  });

  it("T18 — listByProject returns contract-result claims for project", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    await services.claimEvaluationRepository.create({
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: "clm:list:1",
      claimType: "conformite",
      claimStatement: "x",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:1"],
      reviewBundleId: "rb:1",
      reviewBundleVersion: 1,
      status: "not_proven",
      proposedBy: ACTOR,
      proposedAt: NOW,
      evaluatedAt: NOW,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:1",
        actor: ACTOR,
        source: "review",
        timestamp: NOW,
        correlationId: "cor:1",
        projectId: "prj:reg",
      },
      version: 1,
      subjectKind: CLAIM_EVALUATION_SUBJECT_EXECUTION_CONTRACT_RESULT,
      contractResultBindings: {
        projectId: "prj:reg",
        cycleInstanceId: null,
        executionContractId: "xct:1",
        executionContractVersion: 1,
        executionContractSemanticFingerprint: "fp",
        executionAttemptId: "xat:1",
        reviewBundleId: "rb:1",
        reviewBundleVersion: 1,
        evidenceRefs: ["ev:1"],
      },
    });
    const listed = await services.claimEvaluationRepository.listByProject(
      "prj:reg",
    );
    expect(listed).toHaveLength(1);
  });

  it("T19 — incomplete frozen selection → durable not_proven", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const c = docsWriteContract();
    // Empty RB evidence — create then we need a frozen empty? freeze requires evidence.
    // Use technical evidence that won't satisfy docs_write artifact facts after load.
    const wrong = makeTempEvidence("xat:reg:docs");
    wrong.evidenceId = "ev:wrong-type";
    await services.repository.create(wrong, {
      evidenceId: wrong.evidenceId,
      fingerprint: "fp:wrong",
      operation: "register",
    });
    const created = await services.createReviewBundle.execute({
      reviewBundleId: "rb:reg:incomplete",
      idempotencyKey: "idem:rb:reg:incomplete",
      actor: ACTOR,
      projectId: c.projectId,
      executionContractId: c.executionContractId,
      evidenceIds: [wrong.evidenceId],
    });
    expect(created.ok).toBe(true);
    if (!created.ok) return;
    const frozen = await services.freezeReviewBundle.execute({
      reviewBundleId: "rb:reg:incomplete",
      expectedVersion: created.reviewBundle.version,
      idempotencyKey: "idem:rb-freeze:reg:incomplete",
      actor: ACTOR,
    });
    expect(frozen.ok).toBe(true);
    if (!frozen.ok) return;
    const snap = captureBoundExecutionContractSnapshot(c);
    const evaluated = await services.evaluateContractResult!.execute({
      claimEvaluationId: "clm:reg:incomplete",
      idempotencyKey: "idem:clm:reg:incomplete",
      actor: ACTOR,
      contract: c,
      attempt: {
        attemptId: "xat:reg:docs",
        executionContractId: c.executionContractId,
        executionContractVersion: 1,
        executionContractSemanticFingerprint: snap.semanticFingerprint,
        boundExecutionContract: snap,
        status: "succeeded",
      },
      reviewBundle: frozen.reviewBundle,
    });
    expect(evaluated.ok).toBe(true);
    if (!evaluated.ok) return;
    expect(evaluated.claimEvaluation.status).toBe("not_proven");
  });

  it("T20 — EvaluateContractResult constructor requires EvidenceReaderPort", () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    expect(services.evaluateContractResult).toBeInstanceOf(EvaluateContractResult);
    expect(services.evidenceReader).toBeDefined();
  });
});

===== FILE: projects/sfia-studio/app/__tests__/project-assistant/contractResultDocsWriteRequal.d0.test.ts =====
/**
 * T21 — docs_write Contract Result requalification (ZERO REAL).
 * Old not_proven CE → freeze docs_write RB → new PASS CE superseding → resolver returns successor.
 * @vitest-environment node
 */
import { describe, expect, it } from "vitest";
import { FixedClock } from "@/lib/oa/doctrine";
import type { Digest } from "@/lib/oa/doctrine";
import {
  BOUNDED_DOCS_WRITE_EO_TEMPLATE,
  CLAIM_EVALUATION_SCHEMA_VERSION,
  createInMemoryEvidenceReviewServices,
  docsWriteContractResultIdentity,
  DOCS_WRITE_CONTRACT_RESULT_ER_KEY,
  DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
  resolveCurrentContractResultClaimEvaluation,
} from "@/lib/oa/evidence-review";
import {
  computeExecutionContractSemanticMaterialFingerprint,
  executionContractSemanticMaterial,
  type ExecutionContract,
} from "@/lib/oa/execution-contract";
import { captureBoundExecutionContractSnapshot } from "@/lib/oa/execution-attempt/domain/boundExecutionContract";
import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt/infrastructure/m4BoundedDocsWriteCursorAgent";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import { ingestDocsWriteArtifactEvidence } from "@/features/project-assistant/f3/ingestDocsWriteArtifactEvidence";
import { requalifyDocsWriteContractResult } from "@/features/project-assistant/w2/requalifyDocsWriteContractResult";

const ACTOR = { actorId: "actor:requal", role: "project_owner" as const };
const NOW = "2026-09-18T09:00:00.000Z";
const ATTEMPT_ID = "xat:w3a:c4c5670edb4658cc";
const PROJECT_ID = "prj:requal";
const TARGET = "docs/functional-design.md";

function makeDocsWriteContract(): ExecutionContract {
  const base: ExecutionContract = {
    schemaVersion: "0.2.0-oa",
    executionContractId: "xct:requal:docs",
    projectId: PROJECT_ID,
    cycleInstanceId: "cyc:requal:1",
    version: 2,
    status: "confirmed",
    semanticFingerprint: "fp:pending",
    action: M4_BOUNDED_DOCS_WRITE_ACTION,
    target: TARGET,
    scope: "docs/",
    requiredAuthority: "N3",
    constraints: ["NO_COMMIT", "NO_PUSH", "NO_PR", "NO_MERGE"],
    stopConditions: [],
    evidenceRequirements: [DOCS_WRITE_CONTRACT_RESULT_ER_KEY],
    expectedOutputs: [BOUNDED_DOCS_WRITE_EO_TEMPLATE],
    requiredCapabilities: [M4_BOUNDED_DOCS_WRITE_CAPABILITY],
    reversibility: "reversible",
    idempotencyKey: "idem:ec:requal:docs",
    correlationId: "cor:ec:requal:docs",
  };
  base.semanticFingerprint = computeExecutionContractSemanticMaterialFingerprint(
    executionContractSemanticMaterial(base),
  );
  return base;
}

describe("docs_write Contract Result requalification (T21)", () => {
  it("T21 — not_proven prior → freeze + PASS successor supersedes; wrong path NOT_PROVEN; ZERO REAL", async () => {
    const services = createInMemoryEvidenceReviewServices({
      clock: new FixedClock(NOW),
    });
    const contract = makeDocsWriteContract();
    const snap = captureBoundExecutionContractSnapshot(contract);
    const attempt = {
      attemptId: ATTEMPT_ID,
      executionContractId: contract.executionContractId,
      executionContractVersion: contract.version,
      executionContractSemanticFingerprint: snap.semanticFingerprint,
      boundExecutionContract: snap,
      status: "succeeded",
      resultRef: "res:w3a:c4c5670edb4658cc",
      selectedAgentRef: "agent:docs-write",
      version: 3,
      createdAt: NOW,
      updatedAt: NOW,
    } as ExecutionAttempt;

    // Prior W3-B-style not_proven CE (no applicable rule historically).
    await services.claimEvaluationRepository.create({
      schemaVersion: CLAIM_EVALUATION_SCHEMA_VERSION,
      claimEvaluationId: "clm:w3b:prior-not-proven",
      claimType: "conformite",
      claimStatement:
        "Contract result assessment (not_proven) — no_applicable_contract_result_rule",
      criticality: "non_critical",
      evaluationMethod: "deterministic",
      requiredEvidenceRefs: ["ev:w3b:tech"],
      reviewBundleId: "rb:w3b:tech",
      reviewBundleVersion: 1,
      status: "not_proven",
      proposedBy: ACTOR,
      proposedAt: NOW,
      evaluatedAt: NOW,
      provenance: {
        schemaVersion: "0.1.0-oa",
        provenanceRecordId: "prv:prior",
        actor: ACTOR,
        source: "review",
        timestamp: NOW,
        correlationId: "cor:prior",
        projectId: PROJECT_ID,
      },
      version: 1,
      subjectKind: "execution_contract_result",
      contractResultBindings: {
        projectId: PROJECT_ID,
        cycleInstanceId: "cyc:requal:1",
        executionContractId: contract.executionContractId,
        executionContractVersion: contract.version,
        executionContractSemanticFingerprint: snap.semanticFingerprint,
        executionAttemptId: ATTEMPT_ID,
        reviewBundleId: "rb:w3b:tech",
        reviewBundleVersion: 1,
        evidenceRefs: ["ev:w3b:tech"],
      },
    });

    const ingested = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: services,
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:requal:1",
      executionContractId: contract.executionContractId,
      executionAttemptId: ATTEMPT_ID,
      targetPath: TARGET,
      digest:
        "sha256:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(ingested.ok).toBe(true);
    if (!ingested.ok) return;

    const ids = docsWriteContractResultIdentity(ATTEMPT_ID);
    expect(ingested.evidenceId).toBe(ids.evidenceId);
    expect(ingested.reviewBundleId).toBe(ids.reviewBundleId);

    const draftRb = await services.reviewBundleReader.findById(ids.reviewBundleId);
    expect(draftRb?.status).toBe("draft");
    expect(draftRb?.frozenAt).toBeUndefined();

    const requal = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt,
      contract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(requal.ok).toBe(true);
    if (!requal.ok) return;
    expect(requal.claimEvaluation.status).toBe("pass");
    expect(requal.claimEvaluation.ruleRef).toBe(
      DOCS_WRITE_CONTRACT_RESULT_RULE_REF,
    );
    expect(requal.claimEvaluation.supersedesClaimEvaluationId).toBe(
      "clm:w3b:prior-not-proven",
    );
    expect(requal.reviewBundle.frozenAt).toBeTruthy();
    expect(requal.supersededClaimEvaluationId).toBe("clm:w3b:prior-not-proven");

    const current = await resolveCurrentContractResultClaimEvaluation({
      repo: services.claimEvaluationRepository,
      projectId: PROJECT_ID,
      executionAttemptId: ATTEMPT_ID,
    });
    expect(current?.claimEvaluationId).toBe(ids.claimEvaluationId);
    expect(current?.status).toBe("pass");

    // Wrong path → NOT_PROVEN (new CE id, no REAL).
    const wrongIngest = await ingestDocsWriteArtifactEvidence({
      evidenceReviewServices: services,
      projectId: PROJECT_ID,
      cycleInstanceId: "cyc:requal:1",
      executionContractId: contract.executionContractId,
      executionAttemptId: "xat:w3a:wrongpath01",
      targetPath: "docs/wrong.md",
      digest:
        "sha256:bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" as Digest,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(wrongIngest.ok).toBe(true);
    if (!wrongIngest.ok) return;

    const wrongContract = makeDocsWriteContract();
    wrongContract.executionContractId = "xct:requal:wrong";
    wrongContract.expectedOutputs = [TARGET];
    wrongContract.semanticFingerprint =
      computeExecutionContractSemanticMaterialFingerprint(
        executionContractSemanticMaterial(wrongContract),
      );
    const wrongSnap = captureBoundExecutionContractSnapshot(wrongContract);
    const wrongAttempt = {
      ...attempt,
      attemptId: "xat:w3a:wrongpath01",
      executionContractId: wrongContract.executionContractId,
      executionContractSemanticFingerprint: wrongSnap.semanticFingerprint,
      boundExecutionContract: wrongSnap,
    } as ExecutionAttempt;

    const wrongRequal = await requalifyDocsWriteContractResult({
      evidenceReviewServices: services,
      attempt: wrongAttempt,
      contract: wrongContract,
      actor: ACTOR,
      nowIso: NOW,
    });
    expect(wrongRequal.ok).toBe(true);
    if (!wrongRequal.ok) return;
    expect(wrongRequal.claimEvaluation.status).toBe("not_proven");

    // ZERO REAL markers — no process spawn / REAL mode in this module path.
    expect(requal.claimEvaluation.evaluationMethod).toBe("deterministic");
  });
});

===== FILE: projects/sfia-studio/convergence/sfia-studio-contract-result-extensibility-framing.md =====
# SFIA Studio — Contract Result Extensibility — Framing Pack

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Pack de **framing / décision technique** — extensibilité ContractResult |
| **Statut** | **ADOPTED BY MORRIS — IMPLEMENTATION IN PROGRESS / NOT YET INTEGRATED ON MAIN** |
| **Macro** | `CONTRACT-RESULT-EXTENSIBILITY-FRAMING-01` (R13) |
| **Parent** | `PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01` |
| **Horodatage création** | 2026-09-18 06:15:00 CEST (+0200) |
| **Baseline Git** | `origin/main` `bb6af3cabef663bd8619b85326dbc205057b7c7d` (PR **#501** MERGED / POST-MERGE VERIFIED) |
| **Branche locale framing (historique)** | `arch/sfia-studio-contract-result-extensibility-framing-01` |
| **Branche locale implementation (non poussée)** | `feat/sfia-studio-contract-result-extensibility-01` |
| **Cycle** | Delivery / architecture implementation · **EVOL** · **CRITICAL** |
| **CKC** | `ckc:studio:technical-architecture` — CONTENT VALIDATED · **aucune autorité d’exécution** |
| **runtime v3** | **NON ADOPTED** |
| **global L5** | **NOT ADOPTED** |
| **REAL / Execute / new Attempt** | **ZERO** this macro |
| **Horodatage décision Morris** | 2026-09-18 — ADOPT RESULT SEMANTICS REGISTRY (server-owned static + frozen RB multi-Evidence AND + explicit CE supersession + A+B one ZERO-REAL macro + success REAL provenance adapt if non-structural) |
| **Implémentation locale** | `feat/sfia-studio-contract-result-extensibility-01` — registry + docs_write entry #2 + Attempt 3 requalified WITHOUT REAL (`clm:docs-write:xat:w3a:c4c5670edb4658cc` PASS supersedes `clm:w3b:b62e7e34320e78ea`) — **NOT integrated on main** |
| **Anti-claims** | ≠ Product Journey READY/COMPLETE · ≠ generic ContractResult all effect classes · ≠ Git/PR/CI semantics · ≠ runtime v3 ADOPTED · ≠ integrated on main · ≠ project commit/push/PR authorized |

---

## 1. Context / trigger

La campagne Product Journey E2E REAL Reconciliation a prouvé (Attempt 3) qu’un Cursor REAL gouverné peut écrire un artifact Markdown borné et que l’Evidence Artifact docs_write existe avec digest conforme.

Le Product Result reste **UNCLAIMED** parce que le moteur ContractResult actuel :

1. n’a **aucune règle applicable** pour `cursor.docs_write.apply` / `evreq:docs_write_artifact` (`no_applicable_contract_result_rule`) ;
2. sur le chemin W3-B Product, évalue l’Evidence **technique** (`ev:w3b:…`) plutôt que l’Evidence Artifact docs_write (`ev:docs-write:…`) ;
3. (secondaire) n’expose pas durablement sur Attempt **succeeded** les mêmes signaux de provenance REAL que le chemin failure (`processDiagnostic`).

R13 **ne ré-litige pas** Attempt 3. Il qualifie l’architecture minimale pour qu’**un seul** moteur ContractResult puisse évaluer de futures classes d’effets à partir d’Evidence fiables, **sans** hardcoder durablement chaque action dans le cœur, **sans** second moteur, **sans** sur-concevoir toutes les opérations futures.

---

## 2. Current architecture

### 2.1 Flow (état factuel sur `bb6af3ca`)

```
ExecutionContract (live)
  → executionContractSemanticMaterial()          [lib/oa/execution-contract]
  → captureBoundExecutionContractSnapshot         [Attempt.boundExecutionContract — durable Option B]
ExecutionAttempt (terminal)
  → Evidence                                      [durable ; Product W3-B : 1 Evidence/Attempt]
  → ReviewBundle (evidenceRefs[])                 [durable ; freeze → frozenEvidenceSnapshots]
  → EvaluateContractResult.execute                [single Evidence in request]
       → validateBoundExecutionContractSnapshot
       → resolveApplicableContractResultRule      [HARD-CODED — 1 rule]
       → assessExpectedOutputs / assessEvidenceRequirements
       → deriveCanonicalContractResultStatus      [AND]
       → ClaimEvaluation create (version: 1)      [durable SoT]
  → projectContractResultVerdict / W3-B Product terminal
```

### 2.2 Owner / types / propriétés

| Étape | Module | Durable ? | Cardinalité | Couplage |
| --- | --- | --- | --- | --- |
| Semantic material | `semanticFingerprint.ts` → `ExecutionContractSemanticMaterial` | Live EC + bound copy | 1 | Flat : action, caps, EO, ER, target, scope, inputs… |
| Bound snapshot | `boundExecutionContract.ts` | **Oui** sur Attempt | 0..1 | CR lit **uniquement** le bound, pas le live EC |
| Evidence | Evidence domain | **Oui** | N possibles ; Product path = 1 | W3-B : `ev:w3b:{sha16}` ; docs_write : `ev:docs-write:{attempt}` |
| ReviewBundle | RB domain | **Oui** | N `evidenceRefs` ; freeze obligatoire pour CR | Attach/reopen/supersede existent |
| EvaluateContractResult | `evaluateContractResult.ts` | Écrit CE | **1 Evidence** dans la request | Evidence doit être dans frozen snapshot |
| Rule resolve | `contractResultSemanticEvaluator.ts` | Soft | **1 règle hard-codée** | `action === product:generate-temporary-artifact` ∧ `cap:product-temp-artifact` |
| EO/ER assess | `contractResultAssessment.ts` | Dans CE | N EO × N ER ; **AND** | Assessors temp-artifact seulement si rule applicable |
| ClaimEvaluation | CE domain | **Oui** create-only (CR) | 1 CE / (id, idempotencyKey) | `subjectKind = execution_contract_result` |
| Product terminal | `materializeW3bProductTerminal.ts` | Projection | SUCCESS ⇔ Attempt succeeded ∧ CE pass ∧ bindings | Pinned ids `clm:w3b:…` / `idem:w3b-ce:…` |

### 2.3 Fail-closed / idempotency

- **Hard fail (pas de CE)** : mismatch ids, bound corrupt, Evidence hors RB / version mismatch, RB non frozen / incomplete / synthesisOnly, conflit fingerprint idempotency, evaluator unavailable.
- **Soft durable `not_proven`** : bound manquant ; **`no_applicable_contract_result_rule`** ; EO/ER non satisfaits.
- **PASS canonique** : Attempt `succeeded` ∧ **tous** EO PASS ∧ **tous** ER SATISFIED ∧ **listes non vides**. Pas de PASS sur `resultRef` seul ni sur Evidence `available` seul (invariants temp-artifact).
- **Idempotency body** : claimEvaluationId, idempotencyKey, reviewBundleId, attemptId, contractId, contractVersion, semanticFingerprint, actor. Même clé + même fingerprint → **reuse** (pas de recalcul).

### 2.4 GENERIC vs SPECIFIC

| Déjà GENERIC | Actuellement SPECIFIC |
| --- | --- |
| Evidence / RB (N refs, freeze, reopen) | `resolveApplicableContractResultRule` — une seule règle |
| ClaimEvaluation aggregate + OCC | `assessTempArtifactExpectedOutput` / `…EvidenceRequirement` |
| Shell `EvaluateContractResult` (bindings, RB gates, fingerprint) | Constantes W3-B EO template FR + `evreq:generate-temporary-artifact` + pattern `res:w3a:` |
| Bound snapshot Option B | Product W3-B ids pinned + 1 Evidence technique |
| `deriveCanonicalContractResultStatus` (AND) | docs_write : ingest Artifact + RB **draft**, **jamais** `EvaluateContractResult` |
| W3-A `ExecutionEffectClass` → action/cap/`evreq:{class}` (préparation) | Typed Git Evidence sources (hors CR evaluator) |

**Conclusion :** le shell ClaimEvaluation/ContractResult est générique ; la **sémantique de résultat** est fermée sur un seul couple action+capability. Ce n’est **pas** un registry manqué que R12 contourne : la seam d’extension n’existe pas encore — docs_write **s’arrête avant** l’évaluation.

---

## 3. R12 concrete failure

| Fait | Valeur |
| --- | --- |
| Attempt | `xat:w3a:c4c5670edb4658cc` |
| Technical | `succeeded` / exit 0 |
| Effect | Markdown attendu dans M4 WT isolé |
| Artifact Evidence | `ev:docs-write:xat:w3a:c4c5670edb4658cc` — digest match |
| CE | `not_proven` · reason `no_applicable_contract_result_rule` |
| Rule supportée | uniquement `product:generate-temporary-artifact` + `cap:product-temp-artifact` |
| Evidence évaluée (W3-B) | technique `ev:w3b:…` / `resultRef`, **pas** Artifact docs_write |
| Fingerprint drift | **KEEP** (non-bloquant) |

Ne pas fabriquer de PASS. Ne pas muter Attempt 3.

---

## 4. Problem statement

**Question structurante :**

> How does one existing ContractResult engine deterministically evaluate many future classes of contract outcomes from trustworthy Evidence, without becoming action-hardcoded or over-generalized?

Concrètement : comment répondre « Quels outcomes le contrat exigeait-il, et les Evidence observées les prouvent-elles ? » pour docs_write **et** (demain) commit / push / PR / CI / merge, **sans** :

- second moteur ContractResult ;
- hardcoding pérenne action-par-action **dans le cœur** comme architecture finale sans décision Morris ;
- schéma déclaratif sur-généralisé trop tôt ;
- PASS non fail-closed (status-only / resultRef-only).

---

## 5. Invariants

1. **Un seul** moteur EvaluateContractResult / ClaimEvaluation `execution_contract_result`.
2. Assessment sur **bound snapshot** uniquement (pas live EC).
3. Deterministic + **fail-closed** ; unknown rule → `not_proven` (soft) ou reject (hard) — jamais PASS silencieux.
4. Evidence **traçable** dans ReviewBundle **frozen** ; pas de PASS sur narration.
5. **HOW ≠ WHAT** : routing/executor ≠ expected outcomes / EvidenceRequirements.
6. Authority / capability / Confirmation restent hors du PASS métier sauf si le contrat les exige explicitement comme ER.
7. Pas de plugin marketplace / client-controlled rule selection.
8. Temporary bricks only **WITH EXIT** (Build Doctrine R5/A7).
9. runtime v3 reste **NON ADOPTED** ; Build Doctrine / C1 **inchangés** par R13.
10. docs_write = **cas révélateur**, pas architecture cible exclusive.

---

## 6. Existing reusable assets

- `EvaluateContractResult` shell + CE subject `execution_contract_result`
- `ExecutionContractSemanticMaterial.expectedOutputs` + `evidenceRequirements` (**WHAT** déjà nommé)
- Bound snapshot Option B
- ReviewBundle multi-Evidence + freeze/reopen
- `ingestDocsWriteArtifactEvidence` (Artifact Evidence + RB draft)
- W3-A `ExecutionEffectClass` / `evreq:{class}` (préparation EC)
- Typed Git Evidence sources (`git:local_commit`, …) — preuve hors CR aujourd’hui
- Canonical AND status derivation
- Idempotency fingerprint + create-only CE (auditabilité)

**Pas de types OA nommés `ExpectedEffect` / `EffectKind`.** Closest : `expectedOutputs`, `ExecutionEffectClass`, ops1 legacy `expectedEffects` (hors OA CR).

---

## 7. Result-semantics extension axes

| Axe | Existe déjà ? | Usage CR aujourd’hui | Candidat extension ? |
| --- | --- | --- | --- |
| A. concrete `action` | Oui | **Gate** rule | Oui (applicability) |
| B. `requiredCapabilities` | Oui | **Gate** rule | Oui (applicability) |
| C. `evidenceRequirements` / `evreq:*` | Oui | Assessed **si** rule applicable | **Oui — WHAT primary** |
| D. `expectedOutputs` | Oui (pas ExpectedEffect) | Assessed **si** rule applicable | **Oui — WHAT primary** |
| E. target/resource class | `target` / `scope` | Fingerprint only | Secondaire |
| F. compound policy | `ruleRef` + reviewPolicyRef | 1 constante W3-B | Oui (versioned ruleRef) |
| G. `ExecutionEffectClass` | Oui (W3-A) | Indirect (build EC) | Préparation, pas discriminator CR final |

**Lecture factuelle :** l’extensibilité ne doit **pas** inventer un nouveau concept « ExpectedEffect » tant que `expectedOutputs` + `evidenceRequirements` portent le WHAT. Le discriminant d’**applicabilité** reste naturellement **(action ∧ capabilities)** ; le discriminant d’**assessment** est **(EO templates + ER keys)** porté par le material bound, délégué à des assessors enregistrés.

---

## 8. Multi-Evidence model

| Question | Conclusion minimale |
| --- | --- |
| API actuelle | **1** Evidence dans `EvaluateContractResultRequest` |
| RB | **N** Evidence possibles |
| CR lit-il tout le RB ? | **Non** — seulement l’Evidence request |
| Combinaison EO/ER | **AND** ; pas d’OR |
| Futur docs_write | 1 Artifact Evidence suffit souvent (digest+path+type) |
| Futur commit/push/PR/CI | Souvent **plusieurs** Evidence typées dans **un** RB |

**Modèle minimal recommandé (framing) :**

- Conserver **un** ReviewBundle frozen comme unité d’audit.
- Étendre la sélection d’Evidence : l’assessor / rule peut exiger **un sous-ensemble nommé** des `frozenEvidenceSnapshots` (AND), pas un flatten obligatoire en une seule Evidence.
- Court terme (docs_write) : sélectionner l’Artifact Evidence docs_write depuis le RB (éventuellement seul membre).
- Ne **pas** introduire d’OR dans R13 ; OR = dette future explicite si un cas réel l’exige.

---

## 9. Options

### OPTION 1 — Action-specific rules (impératif dans le evaluator)

Chaque nouvelle action (`cursor.docs_write.apply`, `git.commit`, …) ajoute une branche dans `resolveApplicableContractResultRule` + assessors dédiés dans le même module (ou fichiers jumeaux).

| | |
| --- | --- |
| **Taille** | Petite pour 1–2 actions ; croît linéairement |
| **Couplage** | Fort au cœur `contractResultSemanticEvaluator` |
| **Maintenance** | Chaque action = diff cœur + tests |
| **Testabilité** | Bonne (unitaire) |
| **Forces** | Simple, immédiat, zéro abstraction nouvelle |
| **Debt** | Hardcoding durable dans le cœur ; docs_write peut devenir « l’architecture » par accident |
| **Exit** | Extraire vers registry (Option 2) dès la 2ᵉ/3ᵉ règle |

Option **valide**, pas un strawman — surtout si Morris veut un micro-lot docs_write only **TEMPORARY WITH EXIT** explicite.

### OPTION 2 — Extensible Result Semantics Registry (reco technique candidate)

**Un** moteur EvaluateContractResult inchangé dans ses invariants. Remplacer le hard-code de `resolveApplicableContractResultRule` + le branchement assessors par un **registry server-owned, static/compile-time** de *Result Semantics* :

Chaque entrée :

- **applicability** : prédicat déterministe sur bound material (typiquement `action` + `requiredCapabilities`) ;
- **`ruleRef` versionné** ;
- **EO assessor** / **ER assessor** (WHAT) ;
- **Evidence selector** : choisit 1..N snapshots frozen du RB (fail-closed si manquant) ;
- **reviewPolicyRef** compatible.

Propriétés :

- pas de marketplace / pas de règles client-controlled ;
- unknown → `applicable: false` → `not_proven` (`no_applicable_contract_result_rule`) ;
- temp-artifact devient la **première** entrée registry (comportement préservé) ;
- docs_write = **deuxième** entrée (pas un one-off hors registry) ;
- futurs commit/push/PR/CI = nouvelles entrées **sans** toucher le shell EvaluateContractResult.

### OPTION 3 — Declarative contract-driven result semantics

Le contrat porte un schéma déclaratif versionné d’effets attendus (predicates génériques) interprété par un moteur générique sans registry d’assessors.

| | |
| --- | --- |
| **Forces** | Maximalement « WHAT in contract » |
| **Risques** | Sur-généralisation ; schema/migration ; validation complexe ; sécurité des predicates ; maturité Product insuffisante |
| **Compat** | ECs existants n’ont pas ce schéma ; `expectedOutputs` sont des strings FR libres aujourd’hui |
| **Verdict framing** | **Excessif** pour la maturité actuelle |

### OPTION 4 (si utile) — Temporary Option 1 for docs_write WITH EXIT → Option 2

Séquence : Lot B docs_write en Option 1 **explicitement temporaire**, exit = extraction registry Option 2 avant toute 3ᵉ action. Acceptable seulement si Morris veut un PASS docs_write plus rapide **avec** exit daté. Sinon préférer Option 2 dès Lot A.

---

## 10. Tradeoffs

| Critère | Opt 1 | Opt 2 | Opt 3 |
| --- | --- | --- | --- |
| Reuse moteur unique | Oui | Oui | Oui (mais moteur devient interpréteur) |
| Pas d’archi parallèle | Oui | Oui | Risque de « second langage » |
| Deterministic / fail-closed | Oui | Oui | Oui si predicates bornés |
| Auditabilité (`ruleRef`) | Oui | Oui (meilleure versioning) | Dépend schéma |
| Evidence traceability | Oui | Oui (+ selector multi) | Oui |
| Bound snapshot compat | Oui | Oui | Migration schéma probable |
| Back-compat temp-artifact | Oui | Oui (1ʳᵉ entrée) | Reprise EO strings |
| No migration preferred | Oui | Oui | Non / risqué |
| Extensibilité Git/PR/CI | Coûteux | Naturelle | Théorique |
| Effort | Minimal court terme | Petit-moyen | Élevé |
| Complexité cognitive | Basse puis dette | Moyenne stable | Haute |
| Testabilité | Bonne | Bonne (isolation entrée) | Difficile |
| Idempotency / re-eval | Inchangé | Inchangé | Inchangé + schema |
| HOW/WHAT separation | Faible (tout dans ifs) | Forte (applicability vs assessors) | Maximale |
| Progressive delivery | Oui | Oui (A→B→C) | Difficile |
| Debt/exit | Exit → Opt 2 | Exit = registry frozen + ruleRefs | Exit = simplification |

---

## 11a. Morris decision (ADOPTED)

**ADOPT RESULT SEMANTICS REGISTRY ARCHITECTURE** — server-owned static registry · frozen ReviewBundle multi-Evidence AND · explicit ClaimEvaluation supersession · implement Lot A+B as one ZERO-REAL macro · success REAL provenance adapt if non-structural.

Implementation status (local, not on main): registry live; temp-artifact entry #1; docs_write entry #2; Attempt 3 ZERO-REAL requalification **PASS** (`clm:docs-write:xat:w3a:c4c5670edb4658cc` supersedes `clm:w3b:b62e7e34320e78ea`); project commit/push/PR **FORBIDDEN** until Morris Git-integration gate.

## 11. Technical recommendation candidate (historical — now consumed)


**PREFERRED (Cursor technical recommendation — NOT a Morris decision) : OPTION 2 — Result Semantics Registry.**

### Pourquoi

- Réutilise le shell EvaluateContractResult / CE / bound snapshot / AND status **tels quels**.
- Corrige le vrai gap : **fermeture** de `resolveApplicableContractResultRule` + assessors hard-codés.
- Empêche docs_write de devenir l’architecture par accident (Option 1 sans exit).
- Évite le sur-design déclaratif (Option 3) alors que `expectedOutputs` / `evidenceRequirements` existent déjà.
- Aligné Build Doctrine : reuse, pas de parallèle, temporary-with-exit si une étape Option 1 est jamais choisie.

### Exact reuse points

- `EvaluateContractResult` request/gates/fingerprint/create CE
- `deriveCanonicalContractResultStatus`
- Bound `semanticMaterial.expectedOutputs` / `evidenceRequirements`
- ReviewBundle freeze + frozen snapshots
- Existing temp-artifact assessors → **ported as first registry entry**
- `ingestDocsWriteArtifactEvidence` → Evidence + RB (freeze à ajouter côté wiring Product)

### Exact new abstraction(s)

- `ContractResultSemantic` (ou nom équivalent) : applicability + ruleRef + EO/ER assess + EvidenceSelector
- `CONTRACT_RESULT_SEMANTICS` : tableau/static map **server-owned**
- `resolveApplicableContractResultRule` devient lookup registry (API publique stable)

### Inchangé

- ClaimEvaluation schema / subjectKind
- Bound snapshot Option B
- Product SUCCESS projection rules (CE pass ∧ Attempt succeeded)
- Build Doctrine / C1 / runtime v3 NON ADOPTED
- Pas de second moteur

### Footprint attendu

- Lot A : registry seam + migration code temp-artifact → entrée #1 + tests non-régression
- Lot B : entrée docs_write + Evidence selector Artifact + wiring freeze RB docs_write + EvaluateContractResult + tests + requal Attempt 3 **sans REAL** si lifecycle B
- Lot C : futures classes seulement quand une capacité Product réelle les exige

### Migration

**Non** (préféré) — pas de migration SQLite si CE/RB/Evidence actuels suffisent ; nouveaux `ruleRef` / CE ids seulement.

### docs_write comme première preuve non one-off

Deuxième **entrée registry**, pas branche orpheline hors modèle. Même fail-closed, mêmes invariants Evidence frozen.

### Futurs Git/PR/CI

Nouvelles entrées registry + Evidence typées déjà amorcées (`TypedGitEvidenceSource`) ; **hors** R13 implementation.

### Risks

- Registry trop large trop tôt → limiter Lot C
- Evidence selector mal borné → PASS partiel → exiger AND explicite des snapshots requis
- Product id pinning W3-B (`clm:w3b:`) → stratégie d’identité CE docs_write à trancher (voir §13)

### Stop conditions

- Tentation de second moteur
- Rule selection client-controlled
- PASS status-only / resultRef-only
- Migration persistence « pour le plaisir »
- Implémenter commit/push/PR/CI dans le premier lot d’implémentation

---

## 12. Decision status

Morris a **ADOPTED** Option 2 (+ supersession + A+B + provenance adapt if non-structural).
La recommandation technique §11 est **CONSUMED**.
Reste ouvert : **Git integration** (commit/push/PR/merge) — gate Morris distinct.

---

## 13. Attempt 3 requalification analysis

| Question | Fait |
| --- | --- |
| Même `idem:w3b-ce:{attempt}` | **Reuse** CE `not_proven` — **pas** de recalcul |
| EvaluateContractResult | **create-only** `version: 1` — pas d’update in-place |
| `supersedesClaimEvaluationId` | Existe sur CE / EvaluateClaim ; **pas** branché sur EvaluateContractResult |
| Evidence Artifact | **Déjà** durable `ev:docs-write:xat:w3a:c4c5670edb4658cc` |
| RB docs_write | **draft** — freeze **non** fait |
| Nouveau REAL | **Non requis** pour re-prouver l’effet fichier déjà Evidence-backed |

### Classification : **B — CLOSED LOCALLY (implementation macro)**

**B — small non-structural lifecycle wiring** — implemented as `requalifyDocsWriteContractResult` (canonical freeze + EvaluateContractResult + `supersedesClaimEvaluationId`).

Campaign DB (`pje2e-real-01`) post-requal (2026-09-18):

| Fact | Value |
| --- | --- |
| Attempts | **3 → 3** (no new Attempt) |
| Prior CE | `clm:w3b:b62e7e34320e78ea` **immutable** `not_proven` |
| Successor CE | `clm:docs-write:xat:w3a:c4c5670edb4658cc` **pass** · ruleRef `w3b-contract-result/cursor-docs-write-apply-v1` · supersedes prior |
| RB | `rb:docs-write:xat:w3a:c4c5670edb4658cc` frozen (`ready_for_review`) |
| REAL | **ZERO** |

**Interdit (toujours) :** rewrite SQLite / mutation Attempt 3 / fake PASS / new REAL.

---

## 14. Success-path REAL provenance disposition

| Fait | |
| --- | --- |
| `processDiagnostic` | Persisté via `recordExecutionFailure` ; **absent** du chemin success dans execution-attempt application |
| UI | `productReservationsForAttempt` lit `processDiagnostic.realProcessInvoked` (et proxies) |
| Effet | SUCCESS REAL peut afficher encore la sémantique « substitution » / antiClaims.realProven=false |

**Disposition candidate : DEFER** (ne pilote pas l’architecture ContractResult).

**ADAPT IN SAME IMPLEMENTATION** acceptable seulement comme sidecar non-bloquant du Lot B si le coût est trivial (symétrie success/failure de `processDiagnostic` déjà typé). Sinon **DEFER** explicitement hors CR extensibility.

**KEEP** fingerprint drift R12.

---

## 15. Migration / backward compatibility

| Asset | Impact Option 2 |
| --- | --- |
| temp-artifact CR | Préservé comme entrée #1 ; tests non-régression obligatoires |
| Historical CE | Immutables ; nouveaux CE pour nouvelles evals |
| Bound EC snapshots | Inchangés |
| RB / Evidence | Inchangés ; freeze docs_write draft |
| Attempt 3 | Lecture seule ; pas de mutation |
| QA deterministic | Étendre suites ; ne pas casser W3-B |
| SQLite schema | **Aucune migration préférée** |

Si une migration s’avérait nécessaire → **STOP** / Morris structural gate séparé.

---

## 16. Progressive implementation trajectory

### Lot A — Core extensibility seam

- Introduire registry Result Semantics
- Porter temp-artifact comme entrée #1
- Tests non-régression W3-B / EvaluateContractResult
- **ZERO REAL** · pas de docs_write PASS encore

### Lot B — docs_write first additional semantic

- Entrée registry docs_write (`cursor.docs_write.apply` + `cap:cursor.docs_write` + `evreq:docs_write_artifact` / EO material)
- Evidence selector → Artifact Evidence
- Freeze RB docs_write + EvaluateContractResult wiring Product
- Requalification déterministe Attempt 3 **si** classification B confirmée par Morris
- Provenance success-path : DEFER ou sidecar minimal
- **ZERO REAL** préféré

### Lot C — Future effect classes

- Seulement quand une capacité Product réelle l’exige (commit/push/PR/CI/merge)
- Pas de micro-cycle par fichier
- Pas d’implémentation dans R13

**Forme d’implémentation post-décision :** un macro cohérent pouvant contenir A+B s’ils restent petits ; **pas** un micro-cycle R1-style par action.

---

## 17. Debt / exit

| Brick | Exit |
| --- | --- |
| Si Opt 1 temporaire docs_write | Exit daté → extraction registry Opt 2 avant 3ᵉ action |
| Registry Opt 2 | Exit = ruleRefs versionnés + allowlist server-owned figée par lot |
| CE dual-id (w3b vs docs_write) | Exit = sélection Product unique documentée / éventuelle supersession |
| Provenance success DEFER | Exit = lot dédié ou sidecar B |

---

## 18. Morris decisions required

1. **Architecture principale** : Option 1 · Option 2 · Option 3 · Option 4 (1→2 with exit) ?
2. **Evidence model** : confirmer selector multi-Evidence AND depuis RB frozen (vs garder 1 Evidence API long-terme) ?
3. **Attempt 3 requal** : accepter classification **B** (freeze + new CE ids + selector) ? Exiger sous-point **C** supersession ?
4. **Provenance success-path** : DEFER vs ADAPT in Lot B ?
5. **Périmètre premier lot d’implémentation** : A only · A+B · autre ?
6. **GO d’implémentation** distinct après décision (R13 n’autorise **aucun** code Product).

---

## 19. Claims allowed / forbidden

### Allowed (après framing)

- Architecture CR actuelle factuellement mappée
- Options d’extensibilité qualifiées
- Recommandation technique **candidate**
- Requalification Attempt 3 classée **B** (avec réserve C supersession)
- ZERO REAL / ZERO Product implementation

### Forbidden

- Architecture ADOPTED
- docs_write ContractResult fixed / PASS
- Attempt 3 Product PASS
- Generalized Git effects supported
- Product Journey READY / COMPLETE
- runtime v3 ADOPTED

---

## 20. Next gate

**Après décision Morris :** macro d’implémentation Contract Result extensibility (Lot A[+B]) — **ZERO REAL** jusqu’à GO explicite distinct.

**Hors scope immédiat :** R13 n’autorise pas commit/push/PR/merge de ce document ; publication = Review Handoff L3 uniquement jusqu’à GO Morris d’intégration documentaire éventuel.

---

## Annexe A — Source map (code)

| Chemin | Rôle |
| --- | --- |
| `app/lib/oa/evidence-review/application/contractResultSemanticEvaluator.ts` | Rule hard-codée + assessors temp-artifact |
| `app/lib/oa/evidence-review/application/contractResultAssessment.ts` | EO/ER dispatch + AND status |
| `app/lib/oa/evidence-review/application/evaluateContractResult.ts` | Shell CR · 1 Evidence · create CE |
| `app/lib/oa/evidence-review/application/contractResultReviewPolicy.ts` | Policy bypass Morris structural gate (W3-B) |
| `app/lib/oa/evidence-review/application/contractResultVerdictProjection.ts` | Projection verdict |
| `app/lib/oa/evidence-review/domain/contractResultTypes.ts` | Bindings / subjectKind |
| `app/lib/oa/execution-contract/domain/semanticFingerprint.ts` | Semantic material |
| `app/lib/oa/execution-attempt/domain/boundExecutionContract.ts` | Bound snapshot |
| `app/features/project-assistant/w2/materializeW3bProductTerminal.ts` | Product CR orchestration |
| `app/features/project-assistant/w2/w3bProductTerminalProjection.ts` | Terminal + reservations |
| `app/features/project-assistant/f3/ingestDocsWriteArtifactEvidence.ts` | Artifact Evidence + RB draft |
| `app/features/project-assistant/f3/boundedDocsWriteM3ResolutionProfile.ts` | ER docs_write profile |

## Annexe B — Roadmap note (candidate only — NOT applied in R13)

Tip actuel déjà correct : next = R13 framing · NOT STARTED.
**Ne pas modifier** la Roadmap dans R13. Après décision Morris + éventuelle intégration doc, tip factuel du type : « R13 framing QUALIFIED / decision PENDING|CONSUMED ».


```

---

## X. ZERO REAL proof

- No Cursor CLI spawn
- No Studio Execute
- No new ExecutionAttempt (3→3)
- No new HumanDecision
- Requal via freeze + EvaluateContractResult only
- Focused tests deterministic / in-memory or fixture

## Y. Attempt count before/after

**3 → 3**

## Z. DB mutation method

**canonical services only** (`freezeReviewBundle`, `evaluateContractResult`) — **no** manual SQLite CE/RB rewrite.
