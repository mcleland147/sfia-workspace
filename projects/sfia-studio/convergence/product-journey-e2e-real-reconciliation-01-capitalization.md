# SFIA Studio — Product Journey E2E REAL Reconciliation 01 — Capitalisation

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Titre** | Product Journey E2E REAL Reconciliation — campagne R1–R12 consolidée |
| **Macro campagne** | `PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-01` |
| **Macro intégration** | `PRODUCT-JOURNEY-E2E-REAL-RECONCILIATION-INTEGRATION-01` |
| **Cycle** | **15 — Capitalisation / REX + intégration Git** |
| **Typologie** | **EVOL** (intégration / capitalisation) |
| **Profil** | **CRITICAL** |
| **Branche** | `qa/sfia-studio-product-journey-e2e-real-reconciliation-01` |
| **Baseline pré-intégration** | `origin/main` = `26478b1ea5b010c625f0c6039c969fac5c135cf5` |
| **Project Golden Journey** | SFIA Studio — Golden Journey REAL Acceptance 01 |
| **Campaign DB (hors Git)** | `projects/sfia-studio/.sfia-exec/pje2e-real-01/product/oa-product.sqlite` |
| **Statut documentaire (pré-merge)** | **INTEGRATION CANDIDATE** — Product R1–R10 + capitalisation + Roadmap tip |
| **runtime v3** | **NON ADOPTED** |
| **global L5** | **NOT ADOPTED** |
| **REAL this integration macro** | **ZERO REAL** |

---

## A. Identité / statut factuel

Campagne QA CRITICAL visant à faire fonctionner Studio comme produit sur le parcours :

Project → Cycle → cadrage → Recommendation → HumanDecision → ExecutionContract → Cursor REAL → Evidence → recovery / replan.

État consolidé avant R13 :

- **PARTIAL / EVIDENCE-BACKED**
- Claim maximum autorisé : **CURSOR REAL TECHNICAL SUCCESS + DOCS_WRITE ARTIFACT EFFECT PROVEN IN M4 WT**
- Claim interdit : **PRODUCT JOURNEY E2E USABLE / READY**
- Gap structurel ouvert : **ContractResult extensibility + Evidence wiring** pour `cursor.docs_write.apply`

---

## B. Objectif de la campagne

Utiliser Studio de bout en bout sans architecture parallèle, avec fail-close, recovery gouverné, et preuve Artifact/Evidence avant claim produit.

---

## C. Checkpoints consolidés

### Checkpoint A — Project persistence

PASS (campagne) — Project Golden Journey durable.

### Checkpoint C — Nora / CKC / framing

PASS (campagne) — cadrage / décision amont.

### Checkpoint E / R1 — PREPARE evidence mapping

PASS — PREPARE corrige le mapping EvidenceRequirements docs_write invalide / contradictoire.

### R3 — restart PREPARE continuation

PASS — poursuite PREPARE survit au restart (`pursue_prepare_ready` / DecisionBasis sans EC).

### R4 — docs_write EvidenceRequirements coherence

PASS — rematerialization / cohérence lifecycle Git vs cible sandbox ; pas de contrat docs_write contradictoire.

### Attempt REAL 1 — `xat:w3a:1f49d8e25e20837a`

FAIL — `REAL_PROCESS_NONZERO_EXIT`. Root cause initiale non observable (pré-R6).

### R6 — REAL failure observability / provenance

PASS — stdout/stderr redacted + `processDiagnostic` + `boundaryProofMode` sur FAIL ; recovery provenance REAL.

### R7 — recovery options context

PASS — options post-Evidence consomment l’épisode FAIL durable + Evidence + ReviewBundle.

### R8 — docs_write recovery successor

PASS — binding recovery → successor `cursor.docs_write.apply` (Cancel wrong generic + PREPARE successor).

### R9 — diagnostic restart precedence

PASS (diagnostic) — wrong generic pre-exec monopolisait la next action après restart.

### R10 — restart CTA precedence

PASS — CTA recovery primary ; Inspect secondaire ; next-action ownership après restart.

### Attempt REAL 2 — `xat:w3a:88dadf7fa682cc93`

FAIL — `Authentication required` (stderr durable).

### R11 — Cursor CLI auth forensic

PASS (forensic, **aucun code Product**) — CLI API auth incomplet malgré marqueur login local ; login interactif Morris + `--list-models` PASS ; ZERO REAL.

### Attempt REAL 3 — `xat:w3a:c4c5670edb4658cc`

- technical **succeeded** (`technicalExitCode=0`, ~84s)
- EC `xct:m3-res:dec:w2-trj:e00839c5-5022-4bd8-8243-f0a2dd6e79cb`
- adapter episode `adp:m4-cursor-cli-real`
- target `projects/sfia-studio/.sandbox/product-journey-e2e-real-01.md`
- M4 WT `wt-b62e7e34320e78ea2494ac1a` : fichier **EXISTS**, sections requises présentes, digest `sha256:3cb08ee5…`
- Evidence docs-write `ev:docs-write:xat:w3a:c4c5670edb4658cc` : artifact + location + digest match
- Product result : **UNCLAIMED**

### R12 — product qualification forensic

PASS (forensic, **aucun code Product**) — root cause :

1. ContractResult n’a **pas** de règle applicable pour `cursor.docs_write.apply` / `evreq:docs_write_artifact` (`no_applicable_contract_result_rule`)
2. CE W3B consomme Evidence technique (`ev:w3b:…` / `refs/attempts/…/result`) au lieu de l’Artifact docs-write
3. wording « exécuteur de substitution » sur success path (provenance REAL absente sur Attempt succeeded) — secondaire

Fingerprint `a63c…` (inspect v2) → `3cc5…` (post-confirm) = **KEEP** (confirmationRef dans material sémantique).

---

## D. Claims

### PROVEN

- Launch Cursor REAL gouverné (frontière M4)
- Auth CLI après remediation interactive (R11)
- Effet bounded docs_write dans M4 WT isolé
- Ingestion Artifact Evidence docs-write (digest)
- Boucles recovery via HumanDecision / successor EC (R7/R8/R10)
- Corrections déterministes PREPARE / EvidenceRequirements / observability (R1/R3/R4/R6)

### NOT PROVEN / FORBIDDEN

- Product Journey E2E READY / COMPLETE / usable
- ContractResult PASS docs_write
- runtime v3 ADOPTED
- support REAL généralisé (commit/push/PR/merge Studio)
- toutes classes EvidenceRequirement

---

## E. Attempt history

| # | Attempt | Status | Note |
| --- | --- | --- | --- |
| 1 | `xat:w3a:1f49d8e25e20837a` | failed | pré-observability |
| 2 | `xat:w3a:88dadf7fa682cc93` | failed | Authentication required |
| 3 | `xat:w3a:c4c5670edb4658cc` | succeeded | Product UNCLAIMED |

Budget REAL restant campagne : **0**. Aucun secret dans ce document.

---

## F. Structural debt / next gate

**ContractResult extensibility** :

expected effects + EvidenceRequirements + observed Evidence → ContractResult.

Décision d’architecture **NON prise** ici.

État : **MORRIS STRUCTURAL DECISION REQUIRED**.

Prochain macro (après cette intégration) :

**R13 — Contract Result extensibility framing — ZERO REAL** (hors scope de ce lot).

---

## G. Architecture / debt principles

- Pas de second moteur ContractResult
- Pas de hardcoding action-par-action comme architecture finale sans décision Morris
- docs_write = cas révélateur, pas nécessairement la cible d’architecture
- effets Git/PR/CI nécessiteront plus tard des sémantiques Evidence dédiées
- Build Doctrine **inchangée**
- C1 **inchangé**
- runtime v3 reste **NON ADOPTED**

---

## H. Mapping fichiers Product → checkpoints (intégration)

| Checkpoint | Fichiers principaux |
| --- | --- |
| R1 / R4 | `boundedDocsWriteM3ResolutionProfile.ts`, `rematerializeDocsWriteEvidenceRequirements.ts`, `docsWriteEvidenceContradictionView.ts`, `resolveM3ExecutionContract.ts`, `prepareM3FromDecision.ts`, tests `checkpointE.docsWrite*`, `m3ExecutionContractPrepare.test.ts` |
| R3 | `prepareReadyProposalPursueContinuation.ts`, `activeProposalDecisionSubject.ts`, `checkpointE.prepareResume.d0.test.ts`, `corrProof10…` (adaptations) |
| R6 | `processFailureDiagnostic.ts`, `resolveDurableBoundaryProofMode.ts`, `recordExecutionFailure.ts`, `types.ts` (attempt), `completeBoundedReadOnlyLaunch.ts`, `w3bProductTerminalProjection.ts`, `materializeW3bProductTerminal.ts`, `w3cPostEvidenceLoop.ts`, `checkpointF.realFailureObservability.d0.test.ts` |
| R7 | `resolvePostEvidenceRecoveryContext.ts`, `proposeTrajectoryOptions.ts`, `trajectoryOptions.ts`, `types.ts`, `checkpointF.recoveryOptionsContext.d0.test.ts` |
| R8 | `resolveRecoveryExecutionBinding.ts`, `prepareDocsWriteRecoverySuccessor.ts`, `actions.ts`, `checkpointF.recoveryDocsWriteSuccessor.d0.test.ts` |
| R10 | `recoveryReplaceableCurrentContract.ts`, `TrajectorySurface.tsx`, `trajectorySurface.ui.test.tsx`, `checkpointF.recoveryCtaRestartPrecedence.d0.test.ts` |
| R11–R12 | aucun code Product |

Hors commit : `package-lock.json`, `.tmp-sfia-review/**`, campaign DB / M4 WTs, secrets.
