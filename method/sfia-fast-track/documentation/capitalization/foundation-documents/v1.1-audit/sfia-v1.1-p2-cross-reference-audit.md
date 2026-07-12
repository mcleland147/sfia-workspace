---
status: candidate
version: v1.1
updated_after: SFIA prompt templates creation
scope: p2 cross-reference audit
---

# SFIA v1.1 P2 Cross-Reference Audit

**Version:** v1.1
**Status:** Candidate audit
**Scope:** P2 cross-reference and capitalization index alignment before foundation v1.1 closure
**Branch audited from:** `capitalization/sfia-foundation-v1.1` @ `683ed4f`

## 1. Objectif

Cet audit vise à sécuriser la dernière passe P2 avant clôture de la consolidation foundation SFIA v1.1.

Il ne modifie pas les documents historiques ou index ciblés.

Il identifie les écarts restants entre le référentiel v1.1 désormais disponible et les documents historiques, index ou audits qui prédatent ou ne reflètent pas encore cette couche.

Il produit une recommandation d'action claire pour les cycles P2.1 et P2.2.

## 2. Périmètre audité

### Documents cibles P2 (à modifier dans un cycle ultérieur)

| Document | Chemin réel |
|----------|-------------|
| Global Capitalization | `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` |
| Rules Update | `method/sfia-fast-track/core/sfia-rules-update.md` |
| Architecture README | `docs/architecture/README.md` |
| Completeness Matrix | `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md` |

> **Note de chemin :** la matrice de complétude n'est pas dans `foundation-documents/` mais dans `method/sfia-fast-track/documentation/capitalization/`.

### Audits et inventaires existants

| Document | Chemin |
|----------|--------|
| Foundation Documents Audit | `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md` |
| Foundation Documents Inventory | `method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md` |
| Documentation Capitalization Audit | `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md` |
| v1.1 Capitalization Inputs Inventory | `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md` |
| v1.1 Foundation Impact Matrix | `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md` |
| v1.1 Consolidation Plan | `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md` |
| v1.1 Evolution Matrix | `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-planning/sfia-foundation-v1.1-evolution-matrix.md` |

### README et index déjà partiellement alignés v1.1

| Document | État constaté |
|----------|---------------|
| `method/sfia-fast-track/README.md` | Aligné — référence Operating Model, Rules & Guardrails, Knowledge Layer, moteurs P1, Prompt Catalog, Prompt Templates |
| `method/sfia-fast-track/automation/README.md` | Aligné — liste les 3 moteurs P1 et Documentation Engine optionnel |
| `method/sfia-fast-track/checklists/README.md` | Aligné — `sfia-validation-checklist.md` en tête ; 3 checklists legacy toujours listées |
| `prompts/README.md` | Aligné — section Templates et lien vers `templates/README.md` |
| `prompts/templates/README.md` | Aligné — index des 10 templates prioritaires |

## 3. Référentiel v1.1 attendu

Les actifs suivants constituent le référentiel opérationnel v1.1 que les documents historiques et index doivent désormais référencer ou distinguer explicitement.

| Asset | Expected role |
|-------|---------------|
| `docs/foundation/sfia-engineering-principles.md` | Norme supérieure d'exécution |
| `docs/architecture/2026-06-27-sfia-decision-engine.md` | Décisions, réserves, GO / NO-GO |
| `docs/architecture/sfia-repository-blueprint.md` | Source de vérité repository |
| `docs/architecture/sfia-delivery-pipeline.md` | PR, post-merge, delivery |
| `docs/architecture/sfia-platform-architecture.md` | Architecture plateforme v1.1 |
| `docs/architecture/sfia-domain-model.md` | Objets domaine opérationnels v1.1 |
| `docs/architecture/sfia-meta-model.md` | Relations artefacts v1.1 |
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Boucle ChatGPT ↔ Cursor |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | Règles opérationnelles actuelles |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | Documentation routing et knowledge |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Synthèse automation v1.1 |
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | Génération de prompts |
| `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` | Exécution repository |
| `method/sfia-fast-track/automation/sfia-validation-engine.md` | Validation et décisions |
| `method/sfia-fast-track/checklists/sfia-validation-checklist.md` | Checklist opérationnelle |
| `prompts/prompt-catalog.md` | Catalogue de familles et prompt cards |
| `prompts/templates/` | Templates prompts complets |

## 4. Documents audités

| Document | Current role | Current state | v1.1 gap | Recommended action | Priority |
|----------|--------------|---------------|----------|--------------------|----------|
| `sfia-global-capitalization-reference.md` | Preuve opérationnelle Interv360 ; synthèse Fast Track pré-v1.1 | Substantiel (~340 lignes) ; merge status PR #79 ; §16 pointe uniquement vers Automation Architecture | Aucune mention v1.1 ; pas de cross-réfs Operating Model, Knowledge Layer, Rules & Guardrails, moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates, Engineering Principles, Decision Engine ; rôle normatif vs preuve opérationnelle non clarifié | Ajouter section **v1.1 Cross-References** + note de statut : *operational evidence / capitalization proof* — référence normative vivante = fondations v1.1 | **P1** |
| `sfia-rules-update.md` | Trace historique des règles post-Interv360 | Substantiel (~167 lignes) ; §8 annonce règles exécutables pour futurs prompts/moteurs | Aucune mention v1.1 ; pas de renvoi vers `sfia-rules-and-guardrails.md` comme référence opérationnelle actuelle ; pas de renvoi vers Validation Checklist | Ajouter note de statut : *historical consolidation trace* ; pointer `sfia-rules-and-guardrails.md` comme référence opérationnelle ; cross-réf légère vers checklists v1.1 | **P1** |
| `docs/architecture/README.md` | Index des 6 documents fondateurs architecture | 17 lignes ; liste les 6 fichiers sans versions | Pas de mention v1.1 ; pas de renvois Fast Track (Operating Model, moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates, Knowledge Layer) ; pas de lien Engineering Principles | Ajouter section **SFIA v1.1 Architecture References** ou **Related Fast Track References** | **P1** |
| `sfia-documentation-completeness-matrix.md` | Matrice globale complétude documentaire | Datée 2026-07-03 ; branche `capitalization/sfia-documentation-completeness` ; terminologie SFA/SFIA mixte | Ne couvre pas les actifs v1.1 (Operating Model, Rules & Guardrails, Knowledge Layer, 3 moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates) ; §12 indique consolidation non terminée ; automation = 1 doc ; checklists = 3 legacy ; prompts = catalogue seul sans templates | Mettre à jour après P2.1 ; ajouter lignes v1.1 ; corriger statuts ; ajouter référence à cet audit ; §12 clôture v1.1 | **P1** |
| `2026-07-03-sfia-foundation-documents-audit.md` | Audit pré-consolidation fondateurs | Décision **FONDATIONS PARTIELLES** ; lacunes P0 sur engines autonomes | Obsolète post-v1.1 — engines, Operating Model, Knowledge Layer existent | Ajouter section **Update — superseded by v1.1 consolidation** ou mettre à jour en P2.2 ; ne pas réécrire l'audit historique | **P1** |
| `2026-07-03-sfia-documentation-capitalization-audit.md` | Audit complétude globale pré-v1.1 | Décision **COMPLETE AVEC RÉSERVES** ; terminologie SFA | Ne reflète pas foundation v1.1 ; automation = 1 doc ; core = 4 docs | Mettre à jour synthèse post-v1.1 en P2.2 ; conserver analyse historique | **P1** |
| `sfia-foundation-documents-inventory.md` | Inventaire identification fondateurs | Mode identification uniquement ; docs architecture v1.0 | Ne liste pas les nouveaux docs v1.1 Fast Track ; README architecture sans v1.1 | Ajouter section **Update — v1.1 assets created** en P2.2 | **P2** |
| `sfia-v1.1-capitalization-inputs-inventory.md` | Inventaire apports v1.1 | À jour jusqu'aux Prompt Templates | Complet pour la passe foundation ; follow-up P2 identifié | Ajouter référence à cet audit ; pas de réécriture | **P2** |
| `sfia-v1.1-foundation-impact-matrix.md` | Matrice impact v1.1 | global-capitalization et rules-update classés **P2** | Confirmé — actions P2.1 ciblées | Référencer cet audit ; cocher après exécution P2 | **P2** |
| `sfia-foundation-v1.1-consolidation-plan.md` | Plan consolidation v1.1 | Phases 1–10 exécutées ; critères §7 non cochés formellement | Clôture formelle pending | Ajouter référence audit ; décision clôture après P2.1 + P2.2 | **P1** |
| `method/sfia-fast-track/README.md` | Point d'entrée Fast Track | Aligné v1.1 | Aucun écart bloquant | Aucune action P2 requise | — |
| `method/sfia-fast-track/checklists/README.md` | Index checklists | `sfia-validation-checklist` + 3 legacy | Statut legacy des 3 anciennes checklists non clarifié | Optionnel P2.2 : marquer legacy ou fusionner | **P2** |
| `notion-target-content-map.md` | Mapping Notion futur | Terminologie SFA résiduelle (l.5, 13, 19, 63) | Hors scope cross-ref directe ; prérequis Notion | Revue terminologie SFIA — cycle Notion prep séparé | **P2** |

## 5. Écarts identifiés

### Cross-reference gaps

- `sfia-global-capitalization-reference.md` ne référence que `sfia-automation-architecture.md` (§16) parmi les actifs v1.1.
- `sfia-rules-update.md` n'a aucun renvoi vers `sfia-rules-and-guardrails.md`.
- `docs/architecture/README.md` isole les 6 référentiels sans lien vers la couche opérationnelle Fast Track v1.1.
- Les 6 référentiels architecture eux-mêmes incluent déjà des sections v1.1 et des renvois Operating Model — l'écart est concentré sur l'index README et les docs core historiques.

### Status clarification gaps

- `sfia-global-capitalization-reference.md` peut être lu comme norme vivante alors qu'il documente une **preuve opérationnelle** Interv360 et une vision pré-consolidation.
- `sfia-rules-update.md` peut être lu comme référence opérationnelle actuelle alors que `sfia-rules-and-guardrails.md` est le document canonique v1.1.
- Trois checklists legacy (`validation-checklist.md`, `guardrails-checklist.md`, `notion-publication-checklist.md`) coexistent avec `sfia-validation-checklist.md` sans statut explicite.

### Index / README gaps

- `docs/architecture/README.md` : seul README majeur non aligné v1.1.
- `method/sfia-fast-track/README.md`, `automation/README.md`, `checklists/README.md`, `prompts/README.md` : déjà alignés.

### Completeness matrix gaps

- Matrice datée pré-consolidation ; branche et commit de référence obsolètes.
- Manque : Operating Model, Rules & Guardrails, Knowledge Layer, 3 moteurs P1, Validation Checklist, Prompt Catalog, Prompt Templates, P2 cross-reference audit.
- §3 Automation : « 1 document » au lieu de synthèse + 3 engines.
- §3 Checklists : « 3 fichiers » sans `sfia-validation-checklist.md`.
- §7 Prompts : pas de `prompts/templates/`.
- §12 Update : « consolidation non terminée » — contradictoire avec l'état actuel post-templates.
- Terminologie SFA dans titre et corps (l.1, 9, 11, 30, 34, 98).

### Historical document positioning gaps

- `2026-07-03-sfia-foundation-documents-audit.md` : lacunes P0 (engines autonomes, Operating Model) **comblées** — audit historique à repositionner.
- `2026-07-03-sfia-documentation-capitalization-audit.md` : même constat — base SFA substantielle mais périmètre automation incomplet au regard v1.1.
- `sfia-foundation-documents-inventory.md` : snapshot identification v1.0 — pas de trace des créations v1.1.

## 6. Actions recommandées

| Action | Files | Goal | Priority | Suggested commit |
|--------|-------|------|----------|------------------|
| Cross-références core historiques | `sfia-global-capitalization-reference.md`, `sfia-rules-update.md` | Clarifier rôle historique ; pointer référentiel v1.1 | **P1** | `docs: add SFIA v1.1 cross-references` |
| Index architecture v1.1 | `docs/architecture/README.md` | Relier référentiels architecture et couche Fast Track v1.1 | **P1** | (même commit P2.1) |
| Mise à jour matrice complétude | `sfia-documentation-completeness-matrix.md` | Refléter actifs v1.1 ; corriger statuts ; terminologie SFIA | **P1** | `docs: update SFIA v1.1 capitalization indexes` |
| Mise à jour audits capitalisation | `2026-07-03-sfia-foundation-documents-audit.md`, `2026-07-03-sfia-documentation-capitalization-audit.md` | Ajouter sections Update post-v1.1 ; repositionner décisions historiques | **P1** | (même commit P2.2) |
| Mise à jour inventaire fondateurs | `sfia-foundation-documents-inventory.md` | Tracer créations v1.1 | **P2** | (P2.2 ou inclus) |
| Clarification checklists legacy | `checklists/README.md`, éventuellement headers legacy | Distinguer canonique v1.1 vs legacy | **P2** | Optionnel P2.2 |
| Réconciliation familles prompts Interv360 | `prompts/prompt-catalog.md` Annexe A | Mapper familles pilote → 8 familles v1.1 | **P2** | Cycle séparé |
| Décision Documentation Engine | — | Ne pas créer sans cycle dédié | **P2** | Aucun commit |
| Revue terminologie Notion mapping | `notion-target-content-map.md` | SFIA exclusive avant chantier Notion | **P2** | Cycle Notion prep |
| Clôture formelle foundation v1.1 | consolidation plan §7, post-merge status | Décision GO clôture après P2.1 + P2.2 | **P1** | `docs: record SFIA foundation v1.1 closure` |

## 7. Priorisation

| Priority | Meaning |
|----------|---------|
| **P0** | Blocking before v1.1 closure |
| **P1** | Required for clean closure |
| **P2** | Can be handled after closure |

| Action | Priority | Justification |
|--------|----------|---------------|
| Cross-réfs `global-capitalization` + `rules-update` | **P1** | Risque de confusion norme vs preuve historique |
| Index `docs/architecture/README.md` | **P1** | Point d'entrée architecture non connecté au référentiel v1.1 |
| Matrice complétude + audits index | **P1** | Traçabilité clôture ; évite décisions sur base obsolète |
| Clôture formelle foundation v1.1 | **P1** | Critères §7 consolidation plan non cochés |
| Réconciliation prompts Interv360 | **P2** | Annexe A — non bloquant clôture foundation |
| Documentation Engine | **P2** | Optionnel — décision reportée |
| Checklists legacy | **P2** | Coexistence gérable ; clarification souhaitable |
| Terminologie Notion mapping | **P2** | Prérequis Notion, pas foundation closure |
| Harmonisation FR/EN templates | **P2** | Amélioration éditoriale post-usage |

**Aucune action P0 bloquante identifiée.** La foundation v1.1 est structurellement complète ; les écarts restants concernent l'alignement des documents historiques et index.

## 8. Découpage recommandé des cycles P2

### Cycle P2.1 — Core and Architecture Cross-References

**Objectif :** clarifier le rôle des documents core historiques et connecter l'index architecture au référentiel v1.1.

**Files :**

- `method/sfia-fast-track/core/sfia-global-capitalization-reference.md`
- `method/sfia-fast-track/core/sfia-rules-update.md`
- `docs/architecture/README.md`

**Actions :**

1. Ajouter front matter ou section statut v1.1 (sans réécrire le corps historique).
2. Section **v1.1 Cross-References** listant les 14 actifs du référentiel §3.
3. Clarifier : *operational evidence* vs *living normative reference*.
4. Pour `rules-update` : pointer `sfia-rules-and-guardrails.md` comme référence opérationnelle.

**Suggested commit:**

```text
docs: add SFIA v1.1 cross-references
```

**Validation :** utiliser `prompts/templates/04-validate-cursor-result.md` puis `2026-07-04-05-validate-pr-readiness.md`.

### Cycle P2.2 — Capitalization Index and Completeness Matrix

**Objectif :** aligner index, matrices et audits sur l'état post-foundation v1.1.

**Files :**

- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md`
- `method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md` (critères §7)

**Actions :**

1. Ajouter lignes v1.1 dans la matrice complétude.
2. Corriger terminologie SFIA dans les sections modifiées.
3. Ajouter sections **Update — post v1.1 consolidation** aux audits historiques (sans effacer).
4. Référencer `v1.1-audit/sfia-v1.1-p2-cross-reference-audit.md`.
5. Optionnel : clarifier statut checklists legacy.

**Suggested commit:**

```text
docs: update SFIA v1.1 capitalization indexes
```

### Cycle P2.3 — Foundation v1.1 Closure (recommandé après P2.1 + P2.2)

**Objectif :** décision formelle de clôture.

**Actions :**

1. Cocher critères §7 du consolidation plan.
2. Produire post-merge status (template 07) si merge PR foundation v1.1.
3. Décision GO clôture avec réserves P2 explicites.

**Suggested commit:**

```text
docs: record SFIA foundation v1.1 closure
```

## 9. Réserves

- Ne pas réécrire les documents historiques — ajouter cross-références et clarifications de rôle uniquement.
- Conserver le détail historique de consolidation dans `sfia-rules-update.md` et `sfia-global-capitalization-reference.md`.
- Ne pas fusionner destructivement les checklists legacy dans P2 — clarification de statut suffit.
- Ne pas créer `sfia-documentation-engine.md` en P2 sauf décision dédiée validée humainement.
- Ne pas lancer de sync Notion ni publication Notion.
- Ne pas modifier `tools/cmp-001/`, payloads JSON CMP, code Interv360, CI, exports Figma.
- Ne pas corriger massivement la terminologie SFA dans les documents historiques non modifiés — limiter aux sections ajoutées en P2.
- `notion-target-content-map.md` : revue terminologique reportée au cycle Notion prep.

## 10. Décision

**Decision: GO for P2 cross-reference cycles** — les écarts identifiés sont confirmés et limités à l'alignement des documents historiques et index.

La consolidation foundation v1.1 est **structurellement complète**.

La clôture formelle reste **pending** tant que P2.1 et P2.2 ne sont pas exécutés et validés.

**Recommended sequence:**

1. P2.1 — Core and architecture cross-references.
2. P2.2 — Capitalization indexes and completeness matrix.
3. P2.3 — Final foundation v1.1 closure decision.

## 11. Next Steps

1. Validate this audit (human review).
2. Generate the P2.1 cross-reference prompt from `prompts/templates/02-update-document-v1-1.md` or adapted template.
3. Execute P2.1.
4. Validate P2.1 using `sfia-validation-checklist.md`.
5. Generate the P2.2 capitalization index prompt.
6. Execute P2.2.
7. Prepare final foundation v1.1 closure decision (P2.3).

---

*Référentiel SFIA — P2 Cross-Reference Audit v1.1 — candidate audit before foundation closure.*
## Update — P2.2 Capitalization Indexes Updated

The P2.2 cycle has updated the capitalization indexes, completeness matrix and historical audits to reflect the current SFIA foundation v1.1 status.

Updated references include:

- `method/sfia-fast-track/documentation/capitalization/sfia-documentation-completeness-matrix.md`
- `method/sfia-fast-track/documentation/capitalization/2026-07-03-sfia-documentation-capitalization-audit.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/2026-07-03-sfia-foundation-documents-audit.md`
- `method/sfia-fast-track/documentation/archive/foundation-v1.1/sfia-foundation-documents-inventory.md`
- `method/sfia-fast-track/documentation/capitalization/foundation-documents/v1.1-planning/sfia-foundation-v1.1-consolidation-plan.md`

Current status:

- foundation v1.1 structurally complete;
- capitalization indexes aligned;
- formal closure pending P2.3.
## Update — Foundation v1.1 Closure Recorded

The P2.3 cycle records the formal closure of SFIA foundation v1.1:

- `method/sfia-fast-track/documentation/archive/foundation-v1.1/v1.1-closure/sfia-foundation-v1.1-closure-status.md`

The closure confirms:

- foundation v1.1 structurally complete;
- P2.1 cross-references completed;
- P2.2 capitalization indexes completed;
- deferred P2 items non-blocking;
- PR readiness and merge remain separate human-validated steps.
