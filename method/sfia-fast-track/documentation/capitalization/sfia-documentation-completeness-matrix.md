# SFIA Documentation Completeness Matrix

**Date** : 2026-07-03  
**Branche** : `capitalization/sfia-documentation-completeness`  
**Référence** : `main` @ `3b521c6`  
**Dernière mise à jour** : foundation v1.1 — P2.2 (branche `capitalization/sfia-foundation-v1.1`)

## Update — Foundation v1.1 Consolidation Status

The SFIA foundation v1.1 consolidation has now produced the following operational assets:

- Engineering Principles;
- Decision Engine;
- Repository Blueprint;
- Delivery Pipeline;
- Platform Architecture v1.1;
- Domain Model v1.1;
- Meta-Model v1.1;
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

The previous matrix sections are preserved as historical baseline where relevant.

**Current decision:** SFIA foundation v1.1 is formally closed at repository documentation level. PR readiness and merge remain pending.

## Update — Foundation v1.1 Closure Recorded

The SFIA foundation v1.1 closure decision is recorded in:

- `foundation-documents/v1.1-closure/sfia-foundation-v1.1-closure-status.md`

Current status:

- foundation v1.1: formally closed at repository documentation level;
- PR readiness: pending;
- merge: not performed;
- deferred items: non-blocking and tracked.

## 1. Objectif

Cette matrice vérifie que la documentation SFIA est complète avant toute publication ou synchronisation Notion.

L'objectif est de s'assurer que la méthode, les templates, les prompts, les pratiques, les standards et le cas de référence Interv360 sont suffisamment capitalisés pour servir de base à SFIA.

**Inventaires associés** : `inventory-*.md-list.txt` (même dossier).

## 2. Niveaux de statut

| Statut | Signification |
|--------|---------------|
| OK | Document présent, à jour et bien positionné |
| À compléter | Document présent mais incomplet |
| À créer | Document manquant |
| À déplacer | Document présent mais mal placé |
| À archiver | Document obsolète ou historique |
| À arbitrer | Décision humaine nécessaire |

## 3. Méthode SFIA Fast Track

| Domaine | Document attendu | Emplacement attendu | Statut | Commentaire |
|---------|------------------|---------------------|--------|-------------|
| Vision globale | Capitalisation globale SFIA | `method/sfia-fast-track/core/sfia-global-capitalization.md` | **OK** | Preuve opérationnelle Interv360 — cross-réfs v1.1 ajoutées (P2.1) |
| Règles méthode | Règles opérationnelles actuelles | `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | **OK** | Référence opérationnelle v1.1 |
| Règles historiques | Trace consolidation règles | `method/sfia-fast-track/core/sfia-rules-update.md` | **OK** | Trace historique — cross-réfs v1.1 ajoutées (P2.1) |
| Operating Model | Boucle ChatGPT ↔ Cursor | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | **OK** | Foundation v1.1 |
| Knowledge Layer | Routing documentation et knowledge | `method/sfia-fast-track/core/sfia-knowledge-layer.md` | **OK** | Foundation v1.1 |
| Standards architecture | Standards architecture | `method/sfia-fast-track/core/sfia-architecture-standards.md` | **OK** | Présent |
| Roadmap consolidation | Roadmap amélioration SFIA | `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | **OK** | Pilote chantiers consolidation |
| Automation | Architecture + moteurs P1 | `method/sfia-fast-track/automation/` | **OK** | Automation Architecture v1.1 + Prompt Generation, Repository Execution, Validation engines |
| Cycle type | Déroulé de cycle SFIA | `method/sfia-fast-track/cycles/` + `templates/cycle-template.md` | **À compléter** | 2 capitalisations Interv360 ; pas de doc cycle générique autonome hors template |
| UI / UX | Méthode UI / Figma Design-first | `method/sfia-fast-track/ui/figma-design-first-ui-method.md` | **OK** | Référence active |
| Audit / REX | Méthode audit et REX | `method/sfia-fast-track/audit-rex/interv360-application-rex.md` | **À compléter** | REX Interv360 présent ; méthode audit/REX générique SFIA non formalisée |
| Documentation | Plan documentaire et Notion | `method/sfia-fast-track/documentation/` | **À compléter** | Mapping Notion OK ; `documentation-audit.md` et `documentation-structure-target.md` pré-Round 3 |
| Templates | Templates opérationnels Fast Track | `method/sfia-fast-track/templates/` (6 fichiers) | **OK** | Cycle, PR, post-merge, audit, REX, MVP pattern — pas de README dossier |
| Checklists | Checklists de validation | `method/sfia-fast-track/checklists/` | **OK** | `sfia-validation-checklist.md` = checklist canonique v1.1 ; 3 checklists legacy conservées |
| README méthode | Point d'entrée Fast Track | `method/sfia-fast-track/README.md` | **OK** | Arborescence et liens documentés |
| Archive méthode | Méthode historique | `method/sfia-fast-track/archive/interv360-realization/` | **OK** | Archivée, traçable |

## 4. Pratiques plateforme

| Domaine | Document attendu | Emplacement attendu | Statut | Commentaire |
|---------|------------------|---------------------|--------|-------------|
| Architecture fonctionnelle | Pratique + standard + checklist | `docs/practices/architecture/` (3 fichiers) | **OK** | Complet |
| Business analysis | Pratique BA | `docs/practices/roles/business-analyst-method.md` | **À compléter** | Présent — statut **Draft** |
| Product ownership | Pratique PO | `docs/practices/roles/product-owner-method.md` | **À compléter** | Présent — statut **Draft** |
| Project management | Pratique PM | `docs/practices/roles/project-manager-method.md` | **À compléter** | Présent — statut **Draft** |
| UX/UI | Pratique UX/UI + reprise | `docs/practices/roles/ux-ui-designer-method.md` + `docs/practices/ux-ui/` | **À compléter** | Role Method Draft ; pack reprise UX (3 fichiers) OK |
| QA / Test | Pratique QA | `docs/practices/roles/qa-tester-method.md` | **OK** | Seule Role Method **Official** |
| RSSI / Sécurité | Pratique sécurité | `docs/practices/roles/rssi-method.md` | **À compléter** | Présent — statut **Draft** |
| Architecte | Pratique architecte | `docs/practices/roles/architect-method.md` | **À compléter** | Présent — statut **Draft** |
| BPMN / Process | Pratique process | `docs/practices/process/` (5 fichiers) | **OK** | Méthode, standard, checklist, audit, clôture |
| Contrôle structure | Rapport cohérence arborescence | `docs/practices/methods-structure-check.md` | **À compléter** | Présent — diagramme §2 encore `docs/methods/` |
| Index pratiques | README pratiques | `docs/practices/README.md` | **OK** | Aligné Round 3 |

## 5. Méthodes complémentaires

| Domaine | Document attendu | Emplacement attendu | Statut | Commentaire |
|---------|------------------|---------------------|--------|-------------|
| Controlled Delivery | Standard, checklist, template, prompts | `method/complementary/controlled-delivery/` (14 fichiers) | **OK** | Méthode complète et capitalisée |
| Index complémentaire | README | `method/complementary/README.md` | **OK** | Distinction FT explicite |

## 6. Templates

| Type | Document attendu | Emplacement attendu | Statut | Commentaire |
|------|------------------|---------------------|--------|-------------|
| Cycle | Template cycle | `method/sfia-fast-track/templates/cycle-template.md` | **OK** | |
| PR | Template PR | `method/sfia-fast-track/templates/pr-body-template.md` | **OK** | |
| Post-merge | Template post-merge | `method/sfia-fast-track/templates/post-merge-template.md` | **OK** | |
| Audit | Template audit | `method/sfia-fast-track/templates/audit-template.md` | **OK** | |
| REX | Template REX | `method/sfia-fast-track/templates/rex-template.md` | **OK** | |
| MVP delivery | Pattern lots MVP | `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` | **OK** | |
| Architecture plateforme | Templates archi fonctionnelle | `docs/templates/architecture/` (3 fichiers) | **OK** | |
| BPMN plateforme | Templates process | `docs/templates/process/` (3 fichiers) | **OK** | |
| UX/UI plateforme | Templates UX reprise | `docs/templates/ux-ui/` (3 fichiers) | **OK** | |
| Penpot | Template Penpot | `docs/templates/tooling/penpot/README.md` | **OK** | |

## 7. Prompts

| Famille | Document attendu | Emplacement attendu | Statut | Commentaire |
|---------|------------------|---------------------|--------|-------------|
| Catalogue | Index prompts SFIA v1.1 | `prompts/prompt-catalog.md` | **OK** | 8 familles, 26 prompt cards |
| Templates prompts | Templates opérationnels complets | `prompts/templates/` | **OK** | 10 templates prioritaires v1.1 |
| Intake / Cadrage | Prompts cadrage | `prompts/cadrage/` | **À créer** | Dossier vide — entrées catalogue seulement |
| Arbitrages | Prompts arbitrages MVP | `prompts/arbitrages/` | **À créer** | Dossier vide |
| Architecture | Prompts architecture | `prompts/architecture/` (2 fichiers) | **OK** | PROMPT-ARCH-001 + famille archi fonctionnelle |
| UX/UI | Prompts UX/UI | `prompts/ux-ui/ux-ui-reprise-prompt-family.md` | **À compléter** | Famille reprise OK ; brief/validation catalogue sans fichiers dédiés |
| Delivery | Prompts delivery | `prompts/` | **À créer** | Pas de famille delivery formalisée |
| QA / Test | Famille QA | `prompts/qa/qa-tester-prompt-family.md` | **OK** | 10 prompts candidats documentés |
| BPMN | Famille BPMN | `prompts/bpmn/bpmn-prompt-family.md` | **OK** | |
| Sécurité | Prompt RSSI | `prompts/security/PROMPT-SEC-001-*.md` | **OK** | 1 prompt formalisé |
| Rôles | Extraction Role Method | `prompts/roles/` | **À créer** | Dossier vide |
| Gouvernance | Contrôles structure | `prompts/governance/` | **À créer** | Dossier vide |
| Notion | Prompts sync gouvernance | `prompts/governance/notion/` | **À créer** | Dossier vide |
| Automation | Prompts automation SFIA | `prompts/` + moteurs P1 | **OK** | Couvert par Prompt Catalog, Templates et Prompt Generation Engine |
| Penpot | Agent design Penpot | `prompts/tooling/penpot/` | **OK** | |

## 8. Documentation plateforme (hors practices)

| Domaine | Emplacement | Statut | Commentaire |
|---------|-------------|--------|-------------|
| Architecture plateforme | `docs/architecture/` (6 fichiers v1.1 + README) | **OK** | 6 référentiels v1.1 + index connecté Fast Track (P2.1) |
| Principes fondateurs | `docs/foundation/sfia-engineering-principles.md` | **OK** | Engineering Principles v1.1 — norme supérieure |
| ADR plateforme | `docs/adr/` | **À compléter** | README seul — pas d'ADR actifs |
| Knowledge | `docs/knowledge/` | **À compléter** | README placeholder |
| REX plateforme | `docs/rex/` | **À compléter** | README placeholder |
| Roadmaps | `docs/roadmaps/cmp-technical-roadmap.md` | **À compléter** | 1 doc Draft — pas de README dossier |
| Standards | `docs/standards/` | **À compléter** | 1 standard UX/UI V1 — périmètre étroit |
| Tooling | `docs/tooling/penpot/` | **À compléter** | Doc Penpot présente — pas de README `docs/tooling/` |

## 9. Projet de référence Interv360

| Phase | Document attendu | Emplacement attendu | Statut | Commentaire |
|-------|------------------|---------------------|--------|-------------|
| 00 Intake | Intake, besoin, stratégie tests | `projects/interv360/00-intake/` (3 md) | **OK** | README + intake + test strategy |
| 01 Cadrage | Cadrage métier, MVP, arbitrages | `projects/interv360/01-cadrage/` (14 md) | **OK** | Riche et capitalisé |
| 02 Architecture | ADR, synthèses architecture | `projects/interv360/02-architecture/` (13 md + 9 ADR) | **OK** | Actif propre ; payloads JSON CMP historiques à part |
| 03 Design | Design, UX, Figma, Penpot | `projects/interv360/03-design/` (16 md) | **OK** | Design system et cycles documentés |
| 04 Delivery | Livraison MVP/Premium UI | `projects/interv360/04-delivery/` (50 md) | **À compléter** | Contenu riche ; **pas de README** phase |
| 05 Release | Release readiness | `projects/interv360/05-release/mvp-release-readiness.md` | **À compléter** | 1 doc clé ; **pas de README** |
| 06 Audit/REX | Audit application, REX | `projects/interv360/06-audit-rex/` | **À compléter** | `current-application-audit.md` OK ; README obsolète (« 07 REX », « à venir ») |
| 07 Documentation | Documentation transverse projet | `projects/interv360/07-documentation/` | **À créer** | README placeholder seul — aucun document transverse |
| 08 Présentation | Démo, support, runbook | `projects/interv360/08-presentation/` (4 md) | **À compléter** | Contenu présent ; **pas de README** |
| 09 Roadmap | Roadmap post-MVP | `projects/interv360/09-roadmap/` (14 md) | **À compléter** | Riche ; **pas de README** |
| Index projet | README Interv360 | `projects/interv360/README.md` | **OK** | Séquence 00–09 documentée |

## 10. Décision globale

**Décision :**

> **COMPLETE AVEC RÉSERVES**

La base méthodologique SFIA est **exploitable** : méthode Fast Track structurée, pratiques rôles présentes, cas Interv360 capitalisé, templates et checklists opérationnels, mapping Notion préparé.

Les réserves concernent surtout la **maturité** (Role Methods Draft, prompts non formalisés, README manquants, documentation transverse Interv360 vide) et quelques **documents de gouvernance** à rafraîchir post-cleanup — pas l'absence de fondation méthodologique.

## 11. Actions recommandées

| Priorité | Action | Zone | Justification |
|----------|--------|------|---------------|
| P0 | Aucune action bloquante identifiée | — | La base documentaire existe et est positionnée |
| P1 | Rafraîchir `documentation-audit.md` et `notion-publication-plan.md` | `method/sfia-fast-track/documentation/` | Références pré-Round 3 ; préparation Notion |
| P1 | Créer README phases Interv360 04, 05, 06 (corriger), 08, 09 | `projects/interv360/` | Points d'entrée phase manquants ou obsolètes |
| P1 | Formaliser prompts cadrage, arbitrages, gouvernance, rôles | `prompts/` | Dossiers vides malgré catalogue riche |
| P1 | Peupler `07-documentation/` ou arbitrer son rôle | `projects/interv360/07-documentation/` | Placeholder sans contenu |
| P2 | Élever maturité Role Methods Draft → revue officielle | `docs/practices/roles/` | 5/6 rôles encore Draft |
| P2 | Actualiser `methods-structure-check.md` §2 | `docs/practices/` | Diagramme obsolète |
| P2 | Ajouter README `templates/`, `checklists/`, `docs/roadmaps/`, `docs/tooling/` | Divers | Index dossier manquants |
| P2 | Régénérer payloads JSON CMP (chemins `docs/methods/`) | `02-architecture/` | Chantier Notion — pas sync brut |

## 12. Update — SFIA Foundation Documents Identification

Une passe d'identification des documents fondateurs SFIA a été ouverte en parallèle de cette matrice.

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

**Résultat** : six référentiels fondateurs identifiés dans `docs/architecture/` ; lacunes P0 sur operating model ChatGPT ↔ Cursor et specs moteurs autonomes.

**Mise à jour P2.2** : ces lacunes ont été comblées par la consolidation foundation v1.1. Voir la section **Update — Foundation v1.1 Consolidation Status** en tête de document.

**Priorité révisée (historique)** : consolidation fondations **avant** chantier Notion — **atteinte structurellement** ; clôture formelle enregistrée (P2.3).

## Current Closure Status

The foundation v1.1 consolidation is formally closed at repository documentation level.

Formal closure recorded. PR readiness and merge remain pending.

Deferred P2 items:

- Interv360 prompt family reconciliation;
- Documentation Engine decision;
- Notion mapping terminology review;
- legacy checklist clarification or consolidation;
- template language harmonization after real usage.
