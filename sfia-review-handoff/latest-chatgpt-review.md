# ChatGPT Review Pack — FULL
## R13 — CONTRACT-RESULT-EXTENSIBILITY-FRAMING-01

**Timestamp (UTC):** 2026-09-18T04:14:38Z
**Pack kind:** FULL (architecture framing — complete framing document embedded)
**Pack revision:** R13 — Contract Result extensibility framing
**Automation:** handoff L3 publish-in-cycle **AUTHORIZED** · project commit/push/PR/merge **FORBIDDEN** · **ZERO REAL** · **ZERO Product code** · **ZERO Execute** · **ZERO Attempt**

---

## 1. Git Truth

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-studio-contract-result-extensibility-framing-01` |
| Branch (local, not pushed) | `arch/sfia-studio-contract-result-extensibility-framing-01` |
| origin/main | `bb6af3cabef663bd8619b85326dbc205057b7c7d` |
| HEAD | `bb6af3cabef663bd8619b85326dbc205057b7c7d` |
| Baseline drift | **NONE** |
| Prior campaign WT | **NOT** used as SoT (clean worktree from origin/main) |
| Parent PR #501 | MERGED / POST-MERGE VERIFIED |

---

## 2. SFIA qualification

| Field | Value |
|---|---|
| Cycle | Architecture technique / framing |
| Typologie | EVOL |
| Profil | CRITICAL |
| Macro | CONTRACT-RESULT-EXTENSIBILITY-FRAMING-01 (R13) |
| Parent | PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01 |
| CKC | `ckc:studio:technical-architecture` CONTENT VALIDATED · no execution authority |
| runtime v3 | **NON ADOPTED** |

---

## 3. Convergence qualification

Build Doctrine VALIDATED · Roadmap tip already states R13 next/NOT STARTED · C1 unchanged · capitalization R12 facts consumed as input · **Roadmap NOT modified** this lot.

---

## 4. Sources read (representative)

Process templates + Build Doctrine + Roadmap tip + capitalization + v3 framing 32/34/35 + CKC architecture-technique + ContractResult stack (`contractResultSemanticEvaluator`, `contractResultAssessment`, `evaluateContractResult`, types, W3-B materialize/projection, `ingestDocsWriteArtifactEvidence`, bound snapshot, semantic material) + G0 decision-pack convention.

---

## 5. Current architecture (summary)

Single EvaluateContractResult shell · bound-snapshot-only material · 1 Evidence in request · RB may hold N · EO/ER AND · **one hard-coded rule** (`product:generate-temporary-artifact` + `cap:product-temp-artifact`) · soft `no_applicable_contract_result_rule` · docs_write ingests Artifact Evidence + **draft** RB and **never** calls EvaluateContractResult.

GENERIC: CE/RB/Evidence/bound/AND shell. SPECIFIC: rule resolve + temp-artifact assessors + W3-B pinned ids.

---

## 6. R12 root cause (restated)

Attempt `xat:w3a:c4c5670edb4658cc` technical SUCCESS + Artifact Evidence proven; CE `not_proven` because no applicable CR rule for docs_write; W3-B path evaluates technical Evidence; secondary success-path REAL provenance gap (`processDiagnostic` failure-only).

---

## 7. Options

1. **Action-specific rules** (valid short-term; debt in core)
2. **Result Semantics Registry** (server-owned static) — **technical recommendation candidate**
3. **Declarative contract-driven predicates** — excessive for current maturity
4. Optional: Opt1 temporary WITH EXIT → Opt2

---

## 8. Tradeoffs

See framing §10 matrix. Opt2 wins on reuse + no parallel + progressive extensibility without over-generalization.

---

## 9. Technical recommendation candidate

**OPTION 2 — Result Semantics Registry** (NOT ADOPTED).

Reuse EvaluateContractResult shell; replace hard-coded resolve/assessors with static registry; temp-artifact = entry #1; docs_write = entry #2; no SQLite migration preferred; HOW=applicability(action+caps) · WHAT=EO/ER assessors · Evidence selector from frozen RB.

---

## 10. Attempt 3 requalification

**Classification: B** — freeze docs-write draft RB + new CE ids/keys + Artifact Evidence + Product CE selection. Not A (no in-place re-eval). Not D (facts already Evidence-backed). Optional sub-decision **C** if Morris requires `supersedesClaimEvaluationId` on EvaluateContractResult.

---

## 11. Success REAL provenance

**DEFER** (does not drive CR architecture). Optional ADAPT sidecar in Lot B if trivial.

---

## 12. Migration

**No persistence migration preferred.** Historical CE immutable; new CE for new evals.

---

## 13. Progressive trajectory

Lot A registry seam + temp-artifact port · Lot B docs_write semantic + Attempt 3 deterministic requal if B · Lot C future effects only when Product needs them.

---

## 14. Files changed (this lot)

| Path | Action |
|---|---|
| `projects/sfia-studio/convergence/sfia-studio-contract-result-extensibility-framing.md` | **CREATED** (local only — not project-committed) |
| `.tmp-sfia-review/chatgpt-review.md` | Review Pack (handoff only) |

**Product source:** unchanged.

---

## 15. Morris decisions required

See framing §18 (architecture option, multi-Evidence selector, Attempt 3 B vs C, provenance DEFER/ADAPT, A vs A+B scope, implementation GO).

---

## 16. Verdict

**CONTRACT RESULT EXTENSIBILITY ARCHITECTURE QUALIFIED — MORRIS DECISION REQUIRED**

---

## 17. Complete framing document

```markdown
# SFIA Studio — Contract Result Extensibility — Framing Pack

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Pack de **framing / décision technique** — extensibilité ContractResult |
| **Statut** | **CANDIDATE — MORRIS DECISION REQUIRED** |
| **Macro** | `CONTRACT-RESULT-EXTENSIBILITY-FRAMING-01` (R13) |
| **Parent** | `PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01` |
| **Horodatage création** | 2026-09-18 06:15:00 CEST (+0200) |
| **Baseline Git** | `origin/main` `bb6af3cabef663bd8619b85326dbc205057b7c7d` (PR **#501** MERGED / POST-MERGE VERIFIED) |
| **Branche locale (non poussée)** | `arch/sfia-studio-contract-result-extensibility-framing-01` |
| **Cycle** | Architecture technique / framing · **EVOL** · **CRITICAL** |
| **CKC** | `ckc:studio:technical-architecture` — CONTENT VALIDATED · **aucune autorité d’exécution** |
| **runtime v3** | **NON ADOPTED** |
| **global L5** | **NOT ADOPTED** |
| **Product code / REAL / Execute** | **ZERO** ce lot |
| **Anti-claims** | ≠ architecture ADOPTED · ≠ docs_write ContractResult PASS · ≠ Attempt 3 Product PASS · ≠ Product Journey READY · ≠ runtime v3 ADOPTED · ≠ effets Git/PR/CI généralisés supportés |

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

## 11. Technical recommendation candidate

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

## 12. Why recommendation is not yet a decision

- Architecture structurante = **Morris** (Build Doctrine / operating model).
- ChatGPT doit challenger / recommander.
- Tradeoffs Option 1 (vitesse) vs Option 2 (seam) vs Option 4 (temp+exit) restent ouverts.
- Sous-décisions CE identity / supersession / provenance success-path restent ouvertes.

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

### Classification : **B**

**B — small non-structural lifecycle wiring needed**

Pour une requalification déterministe **sans REAL** :

1. Freeze (ou reopen→freeze) du RB docs_write existant contenant l’Artifact Evidence ;
2. Nouvel appel `EvaluateContractResult` avec **nouveaux** `claimEvaluationId` + `idempotencyKey` (les ids W3-B pinned ne recalculent pas) ;
3. Evidence request = Artifact docs_write (pas `ev:w3b:`) ;
4. Rule docs_write applicable (après implémentation Option 2 Lot B) ;
5. Product terminal doit **sélectionner** ce CE (aujourd’hui le path W3-B lit `clm:w3b:…`).

**Pas A** : le lifecycle actuel ne re-évalue pas in-place.
**Pas D** : les faits d’exécution/Evidence Artifact existent déjà.
**Sous-décision Morris (peut monter en C)** : si Morris exige une **lignée unique** CE par Attempt via `supersedesClaimEvaluationId` branché sur EvaluateContractResult → classer **C** pour ce sous-point uniquement. Sinon B suffit avec convention d’id docs_write distincte + sélection Product.

**Interdit :** rewrite SQLite / mutation Attempt 3 / fake PASS.

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
