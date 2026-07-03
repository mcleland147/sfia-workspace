# SFIA/SFA Documentation Capitalization Audit

**Date** : 2026-07-03  
**Branche** : `capitalization/sfia-documentation-completeness`  
**Point de départ** : `main` @ `3b521c6`  
**Matrice associée** : `sfia-documentation-completeness-matrix.md`

## 1. Objectif

Ce document audite la complétude documentaire du workspace SFIA/SFA avant toute préparation ou synchronisation Notion.

L'objectif est de vérifier que les fichiers, templates, prompts, pratiques, standards, phases projet et documents méthodologiques nécessaires existent, sont bien placés et sont exploitables.

## 2. Périmètre

**Périmètre audité :**

- méthode active SFIA Fast Track (47 fichiers `.md`) ;
- méthodes complémentaires (14 fichiers) ;
- pratiques plateforme (21 fichiers) ;
- documentation plateforme `docs/` (54 fichiers `.md`) ;
- templates plateforme (11 fichiers) ;
- prompts (9 fichiers `.md` + catalogue) ;
- projet de référence Interv360 (299 fichiers `.md` hors `app/`, `backend/`, exports Figma) ;
- audit / REX / UX / architecture / release ;
- préparation Notion (mapping, plans, checklists).

**Hors périmètre :**

- code applicatif (`projects/interv360/app/`, `backend/`) ;
- CI (`.github/workflows/`) ;
- `tools/cmp-001/` ;
- exports Figma non suivis ;
- synchronisation Notion.

## 3. Synthèse

**Décision :**

> **COMPLETE AVEC RÉSERVES**

**Résumé :**

Le workspace SFIA contient une **base méthodologique SFA substantielle et exploitable**. La méthode Fast Track est structurée en domaines actifs (`core`, `automation`, `cycles`, `ui`, `audit-rex`, `documentation`, `templates`, `checklists`). Les pratiques plateforme couvrent les 6 rôles cœur, le BPMN, l'architecture fonctionnelle et la reprise UX. Le cas Interv360 capitalise l'ensemble du cycle 00–09 avec ~300 documents projet.

Les réserves portent sur la **maturité éditoriale** (Role Methods Draft, prompts catalogue sans fichiers, README phases manquants), quelques **zones placeholder** (`07-documentation/`, `docs/knowledge/`, `docs/rex/`) et des **documents de gouvernance** non rafraîchis après le cleanup PR #81.

Aucun manque structurel bloquant n'empêche d'ouvrir le chantier Notion — à condition d'une **sélection éditoriale**, pas d'un sync brut.

## 4. Analyse par domaine

### 4.1. Méthode SFIA Fast Track

| Sous-dossier | Rôle | Statut | Commentaire |
|-------------|------|--------|-------------|
| `core/` | Vision, règles, standards, roadmap | **OK** | 4 documents + README ; capitalisation globale solide |
| `automation/` | Vision application factory SFA | **OK** | 1 document de référence + README |
| `cycles/` | Capitalisations par cycle | **À compléter** | 2 docs Interv360 (MVP + final) ; pas de guide cycle générique hors template |
| `ui/` | Figma Design-first | **OK** | Méthode UI complète |
| `audit-rex/` | Audit et REX méthode | **À compléter** | REX Interv360 présent ; pas de méthode audit/REX transverse SFIA |
| `documentation/` | Qualité doc, audits workspace, Notion | **À compléter** | Riche en audits post-cleanup ; `documentation-audit.md` obsolète (pré-R3) |
| `templates/` | Modèles opérationnels FT | **OK** | 6 templates — manque README index |
| `checklists/` | Validation, garde-fous, Notion | **OK** | 3 checklists — manque README index |
| `archive/` | Méthode interv360-realization | **OK** | 8 fichiers historiques bien isolés |

**Documents structurants lus** : `sfia-global-capitalization.md`, `sfia-rules-update.md`, `sfia-architecture-standards.md`, `sfia-automation-architecture.md`, `figma-design-first-ui-method.md`, `notion-target-content-map.md` — tous présents et cohérents avec la vision SFA.

### 4.2. Méthodes complémentaires

| Domaine | Statut | Commentaire |
|---------|--------|-------------|
| `method/complementary/controlled-delivery/` | **OK** | 14 fichiers : standard, checklist, template, prompts, publication |
| `method/complementary/README.md` | **OK** | Distinction FT explicite |

### 4.3. Pratiques plateforme

| Domaine | Document | Statut | Commentaire |
|---------|----------|--------|-------------|
| Architecture fonctionnelle | 3 fichiers `architecture/` | **OK** | Méthode + standard + checklist |
| BPMN / Process | 5 fichiers `process/` | **OK** | Cycle complet documenté |
| UX reprise | 3 fichiers `ux-ui/` | **OK** | Pack reprise capitalisé |
| BA | `business-analyst-method.md` | **À compléter** | Draft — contenu riche |
| PO | `product-owner-method.md` | **À compléter** | Draft |
| PM | `project-manager-method.md` | **À compléter** | Draft |
| UX/UI Designer | `ux-ui-designer-method.md` | **À compléter** | Draft |
| Architecte | `architect-method.md` | **À compléter** | Draft |
| RSSI | `rssi-method.md` | **À compléter** | Draft |
| QA / Testeur | `qa-tester-method.md` | **OK** | Official — seule méthode rôle stabilisée |
| Contrôle structure | `methods-structure-check.md` | **À compléter** | Utile mais diagramme §2 obsolète |

### 4.4. Documentation plateforme (hors practices)

| Zone | Statut | Commentaire |
|------|--------|-------------|
| `docs/architecture/` | **OK** | 6 docs plateforme (meta-modèle, pipeline, blueprint…) |
| `docs/foundation/` | **OK** | Principes engineering |
| `docs/templates/` | **OK** | 11 templates plateforme |
| `docs/standards/` | **À compléter** | 1 standard UX/UI V1 — périmètre limité |
| `docs/adr/` | **À compléter** | README seul |
| `docs/knowledge/` | **À compléter** | README placeholder |
| `docs/rex/` | **À compléter** | README placeholder |
| `docs/roadmaps/` | **À compléter** | 1 roadmap CMP Draft — pas de README |
| `docs/tooling/` | **À compléter** | Penpot doc présente — pas de README racine |

### 4.5. Templates

| Type | Emplacement | Statut | Commentaire |
|------|-------------|--------|-------------|
| Fast Track opérationnels | `method/sfia-fast-track/templates/` | **OK** | 6/6 attendus présents |
| Plateforme architecture | `docs/templates/architecture/` | **OK** | 3 templates |
| Plateforme process | `docs/templates/process/` | **OK** | 3 templates |
| Plateforme UX/UI | `docs/templates/ux-ui/` | **OK** | 3 templates |
| Penpot | `docs/templates/tooling/penpot/` | **OK** | |

**Doublon justifié** : templates FT vs templates plateforme — documenté dans `prompts/README.md`.

### 4.6. Prompts

| Famille | Statut | Commentaire |
|---------|--------|-------------|
| Catalogue | **OK** | `prompt-catalog.md` — référentiel central (~370 lignes) |
| Architecture | **OK** | PROMPT-ARCH-001 + famille archi fonctionnelle |
| Sécurité / RSSI | **OK** | PROMPT-SEC-001 |
| QA / Testeur | **OK** | Famille 10 prompts |
| BPMN | **OK** | Famille complète |
| UX/UI reprise | **OK** | Famille reprise |
| Penpot | **OK** | Agent design |
| Cadrage | **À créer** | Dossier `prompts/cadrage/` vide |
| Arbitrages | **À créer** | Dossier `prompts/arbitrages/` vide |
| Rôles | **À créer** | Dossier `prompts/roles/` vide |
| Gouvernance | **À créer** | Dossier `prompts/governance/` vide |
| Notion / CMP | **À créer** | Dossier `prompts/governance/notion/` vide |
| Delivery | **À créer** | Pas de famille — couvert indirectement par capitalisations cycles |
| Audit / REX | **À arbitrer** | Pas de famille dédiée — templates + REX docs suffisants pour l'instant |

**Ratio formalisation** : 9 fichiers prompts / ~15 familles catalogue = **partiel**.

### 4.7. Interv360

| Phase | Fichiers `.md` | Statut | Commentaire |
|-------|----------------|--------|-------------|
| `00-intake/` | 3 | **OK** | README + intake + test strategy |
| `01-cadrage/` | 14 | **OK** | Cadrage complet, arbitrages, brief UX |
| `02-architecture/` | 13 + 9 ADR | **OK** | ADR actifs ; ~14 JSON CMP historiques (chemins anciens) |
| `03-design/` | 16 | **OK** | Figma + Penpot + design cycles |
| `04-delivery/` | 50 | **À compléter** | Très riche (MVP, premium UI, batches) ; pas de README |
| `05-release/` | 1 | **À compléter** | `mvp-release-readiness.md` présent ; pas de README |
| `06-audit-rex/` | 2 | **À compléter** | Audit app OK ; README obsolète (titre « 07 REX », statut « à venir ») |
| `07-documentation/` | 1 | **À créer** | README seul — aucun document transverse |
| `08-presentation/` | 4 | **À compléter** | Demo package, script, runbook ; pas de README |
| `09-roadmap/` | 14 | **À compléter** | Roadmaps produit riches ; pas de README |

**Documents clés validés** :

- `04-delivery/premium-design-system.md` — présent
- `05-release/mvp-release-readiness.md` — présent
- `06-audit-rex/current-application-audit.md` — présent
- `02-architecture/adr/` — 9 ADR actifs

## 5. Documents manquants

| Priorité | Document manquant | Emplacement cible | Justification |
|----------|-------------------|-------------------|---------------|
| P1 | Prompts cadrage formalisés | `prompts/cadrage/` | Catalogue §3–4 — dossier vide |
| P1 | Prompts arbitrages formalisés | `prompts/arbitrages/` | Catalogue — dossier vide |
| P1 | Prompts gouvernance / Notion | `prompts/governance/`, `prompts/governance/notion/` | Catalogue PROMPT-GOV-* — dossiers vides |
| P1 | Prompts extraction rôle | `prompts/roles/` | PROMPT-ROLE-003 catalogue — dossier vide |
| P1 | Contenu documentation transverse Interv360 | `projects/interv360/07-documentation/` | Phase créée mais vide |
| P2 | Méthode audit/REX générique SFIA | `method/sfia-fast-track/audit-rex/` | Seul REX Interv360 — pas de guide transverse |
| P2 | Guide cycle SFIA générique | `method/sfia-fast-track/cycles/` | Hors capitalisations pilote |
| P2 | ADR plateforme | `docs/adr/` | Zone prévue, non peuplée |
| P2 | Connaissance / REX plateforme | `docs/knowledge/`, `docs/rex/` | README seuls |

**P0** : aucun document manquant bloquant la capitalisation méthodologique de base.

## 6. Documents à compléter

| Priorité | Document | Complément attendu |
|----------|----------|-------------------|
| P1 | `documentation-audit.md` | Mettre à jour périmètre post-PR #81 (`docs/practices/`, `method/complementary/`) |
| P1 | `notion-publication-plan.md` | Citer explicitement `docs/practices/` et `method/complementary/` |
| P1 | `documentation-structure-target.md` | Aligner sur structure actuelle |
| P1 | `06-audit-rex/README.md` | Corriger titre phase, statut, références |
| P1 | 5 Role Methods Draft | Revue maturité avant publication Notion |
| P2 | `methods-structure-check.md` §2 | Diagramme `docs/practices/` |
| P2 | `docs/standards/` | Élargir ou documenter périmètre volontairement restreint |
| P2 | README `method/sfia-fast-track/templates/` | Index des 6 templates |
| P2 | README `method/sfia-fast-track/checklists/` | Index des 3 checklists |

## 7. Documents à déplacer ou archiver

| Priorité | Document | Action proposée | Justification |
|----------|----------|----------------|---------------|
| P2 | Payloads JSON `02-architecture/notion-sync-*.json` | Archiver ou régénérer au chantier Notion | Chemins `docs/methods/` embarqués — artefacts historiques |
| — | Contenu `archive/` Interv360 | Aucune action | Déjà archivé correctement |

**Aucun document actif mal placé identifié** nécessitant un déplacement immédiat.

## 8. Doublons ou incohérences

| Sujet | Diagnostic | Décision proposée |
|-------|------------|-------------------|
| Templates FT vs plateforme | Deux couches intentionnelles | Conserver — documenté |
| REX méthode vs REX projet | `audit-rex/` FT vs `06-audit-rex/` Interv360 | Conserver — rôles distincts |
| `06-audit-rex/README.md` vs contenu | README dit « à venir » mais audit présent | Corriger README (P1) |
| `documentation-audit.md` vs état réel | Compteurs et chemins pré-cleanup | Rafraîchir (P1) |
| Prompts catalogue vs fichiers | 15 familles catalogue, 6 familles fichiers | Formaliser progressivement (P1) |
| QA Official vs autres rôles Draft | Maturité inégale | Arbitrer élévation statut (P2) |

## 9. Préparation Notion

| Zone | Prêt pour Notion ? | Commentaire |
|------|--------------------|-------------|
| Méthode active | **Partiel** | Contenu riche — adaptation éditoriale requise ; exclusions définies dans mapping |
| Méthodes complémentaires | **Partiel** | Controlled Delivery capitalisé — sélection éditoriale |
| Pratiques | **Partiel** | 6 rôles présents — 5 Draft ; QA Official prête |
| Templates | **Oui** | FT + plateforme exploitables après sélection |
| Prompts | **Partiel** | Catalogue utile ; familles vides à ne pas publier brut |
| Interv360 | **Partiel** | Cas référence riche — résumer, pas miroir |
| Archives | **Non brut** | Exclure inc-*, logs, payloads, inventaires |
| Automation / vision SFIA | **Partiel** | `sfia-automation-architecture.md` — résumer pour Notion |

**Verdict préparation Notion : PARTIELLE** — le repo est une **base source** fiable, pas un miroir Notion prêt à l'emploi.

## 10. Recommandation

**Décision recommandée :**

> **Consolider les documents fondateurs SFIA (P0 fondations), puis faire une passe de complétion documentaire ciblée (P1), puis ouvrir le chantier Notion.**

La consolidation fondations est prioritaire : six référentiels `docs/architecture/` existent mais doivent être alignés avec le repo nettoyé ; le operating model ChatGPT ↔ Cursor et les specs moteurs doivent être extraits en documents canoniques.

## 11. Plan d'action proposé

| Priorité | Action | Commit suggéré |
|----------|--------|----------------|
| P0 | Consolider documents fondateurs SFIA | `docs: consolidate SFIA foundation documents` |
| P0 | Créer `sfia-chatgpt-cursor-operating-model.md` | `docs: add SFIA ChatGPT Cursor operating model` |
| P1 | Rafraîchir `documentation-audit.md` post-PR #81 | `docs: refresh SFIA documentation audit after workspace cleanup` |
| P1 | Mettre à jour `notion-publication-plan.md` (practices, complementary) | `docs: align notion publication plan with practice layers` |
| P1 | Corriger README `06-audit-rex/` + créer README phases 04, 05, 08, 09 | `docs: add interv360 phase README indexes` |
| P1 | Formaliser 2–4 prompts prioritaires (cadrage, arbitrages, gouvernance) | `docs: formalize priority SFIA prompt families` |
| P2 | Élever maturité Role Methods (revue Draft) | `docs: review SFIA role method maturity` |
| P2 | Peupler ou arbitrer `07-documentation/` | `docs: define interv360 transverse documentation scope` |
| P2 | README templates/checklists FT + docs/roadmaps/tooling | `docs: add missing documentation folder indexes` |
| Chantier Notion | Ouvrir `notion/sfia-business-ide-preparation` | **Après** consolidation fondations — sélection éditoriale, pas sync brut |

## 12. Inventaires produits

| Fichier | Lignes |
|---------|--------|
| `inventory-sfia-fast-track.md-list.txt` | 47 |
| `inventory-complementary-methods.md-list.txt` | 14 |
| `inventory-platform-docs.md-list.txt` | 54 |
| `inventory-practices.md-list.txt` | 21 |
| `inventory-platform-templates.md-list.txt` | 11 |
| `inventory-prompts.md-list.txt` | 9 |
| `inventory-interv360-docs.md-list.txt` | 299 |

## 13. Update — SFIA Foundation Documents Identification

Une passe d'identification des documents fondateurs SFIA a été ouverte.

Elle vise à identifier les documents portant :

- Platform Architecture ;
- Decision Engine ;
- Delivery Pipeline ;
- Domain Model ;
- Metamodel ;
- Rules & Guardrails ;
- Automation / Orchestration ;
- ChatGPT ↔ Cursor workflow ;
- Repository Execution ;
- Validation Engine ;
- Knowledge / Notion Layer ;
- Role / Métier Modeling ;
- Interv360 comme cas de référence.

**Livrables** : `foundation-documents/sfia-foundation-documents-inventory.md`, `foundation-documents/sfia-foundation-documents-audit.md`.

**Décision identification** : **FONDATIONS PARTIELLES** — noyau `docs/architecture/` fort ; consolidation moteurs et operating model ChatGPT ↔ Cursor requis avant Notion.

Cette passe n'est **pas terminée** tant que les documents fondateurs n'ont pas été consolidés.

## 14. Garde-fous de cette passe

- Aucune sync Notion exécutée
- Aucune publication Notion
- Aucun code, backend, CI, `tools/cmp-001/` touché
- Aucun déplacement de fichier
- Aucune refonte d'arborescence
- Pas de push / pas de PR

## Update — Post Foundation v1.1 Consolidation

This audit is preserved as a historical capitalization baseline.

Since this audit, the SFIA foundation v1.1 consolidation has produced:

- ChatGPT ↔ Cursor Operating Model;
- Rules & Guardrails;
- Knowledge Layer;
- Automation Architecture v1.1;
- Prompt Generation Engine;
- Repository Execution Engine;
- Validation Engine;
- Validation Checklist;
- Prompt Catalog;
- Prompt Templates;
- P2 Cross-Reference Audit;
- P2.1 Cross-References.

The original findings remain useful as historical evidence, but the operational foundation status has changed.

**Current decision:**

- The SFIA foundation v1.1 is structurally complete.
- Formal closure remains pending P2.3.

**Related current references:**

- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/automation/sfia-automation-architecture.md`
- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
- `prompts/prompt-catalog.md`
- `prompts/templates/`
