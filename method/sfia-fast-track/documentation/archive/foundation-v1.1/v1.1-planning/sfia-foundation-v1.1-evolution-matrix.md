# SFIA Foundation v1.1 — Evolution Matrix

**Date** : 2026-07-03
**Branche** : `capitalization/sfia-documentation-completeness`
**Mode** : planification uniquement — aucun document fondateur source modifié

## 1. Objectif

Cette matrice prépare l'évolution v1.1 des documents fondateurs SFIA.

L'objectif est de conserver les documents fondateurs existants comme base, puis d'identifier les enrichissements à intégrer après :

- le projet Interv360 ;
- la méthode SFIA Fast Track ;
- le workspace cleanup PR #81 ;
- l'automatisation des échanges ChatGPT ↔ Cursor ;
- la préparation future de Notion comme couche de connaissance.

## 2. Logique de version

| Version | Signification |
|---------|---------------|
| v1.0 | Fondation initiale SFIA — exports Notion, vision plateforme modulaire |
| v1.1 | Fondation consolidée post-Interv360, Fast Track, cleanup repo, operating model ChatGPT ↔ Cursor |
| v2.0 | SFIA automatisée avec moteurs actifs et intégration Notion opérationnelle |

## 3. Matrice par document fondateur

| Document | Statut actuel | À conserver | À enrichir en v1.1 | À ne pas intégrer | Commentaire |
|----------|---------------|-------------|--------------------|-------------------|-------------|
| `docs/architecture/sfia-platform-architecture.md` | v1.0 — ~2100 lignes, export Notion | Vision modulaire Core/Studio/Runtime/Knowledge/Lab/Projects ; principes fondateurs ; rôle Notion natif | Cartographie repo Git post-PR #81 ; couche `method/sfia-fast-track/` opérationnelle ; `docs/practices/` ; distinction Git détaillé vs Notion éditorialisé ; référence Interv360 | Implémentation moteurs (v2.0) ; sync Notion brute | Base conceptuelle intacte — ajouter couche exécution repo |
| `docs/architecture/2026-06-27-sfia-decision-engine.md` | v1.0 — moteur décisionnel officiel | Qualification demande, orchestration modules, capitalisation décisions | Décisions GO/NO-GO Fast Track ; réserves non bloquantes ; arbitrage PR/post-merge ; lien ADR Interv360 ; décision « consolidation vs Notion » | Logique métier applicative Interv360 | Enrichir avec patterns décisionnels prouvés |
| `docs/architecture/sfia-delivery-pipeline.md` | v1.0 — pipeline officiel | Phases, quality gates, capitalisation projet → plateforme | Cycle Fast Track réel (1 cycle = 1 objectif) ; conventions branches ; PR unique ; post-merge ; releases/tags ; séquence Interv360 00–09 ; capitalisations cycles | Micro-incréments `inc-*` (archivés) ; détail fichiers delivery | Relier pipeline théorique à preuve opérationnelle |
| `docs/architecture/sfia-domain-model.md` | v1.0 — objets métier v1 | Experiment, Project, Component, Standard, etc. | Objets **Cycle**, **Prompt**, **Template**, **Practice**, **Role Method**, **Reference Project**, **Knowledge Page**, **Audit Report**, **REX** ; mapping `docs/practices/roles/` | Objets code applicatif | Étendre sans casser identifiants v1 |
| `docs/architecture/sfia-meta-model.md` | v1.0 — langage commun artefacts | Modules Core/Studio/Runtime/Knowledge/Laboratory/Projects ; cycles de vie ; maturité | Relations prompts ↔ templates ↔ practices ↔ méthode FT ↔ Notion cible ; statuts Draft/Official Role Method ; archives vs actif | Arborescence fichier par fichier | Modéliser relations post-cleanup |
| `docs/architecture/sfia-repository-blueprint.md` | v1.0 — blueprint Git + Notion | Espaces Core/Knowledge/Projects/Platform ; gouvernance versioning | Arborescence validée PR #81 : `method/`, `method/complementary/`, `docs/practices/` (ex `docs/methods/`), `prompts/`, `exports/notion/` ; règle archives ; index README | Chemins obsolètes `methods/`, `docs/methods/` | Alignement structurel prioritaire v1.1 |
| `docs/foundation/sfia-engineering-principles.md` | v1.0 — 10 principes | Principes 1–10 transverses | Garde-fous Fast Track ; Cursor/ChatGPT ; Notion jamais auto-sync ; validation humaine ; Figma Design-first ; séparation cycles | Règles opérationnelles détaillées (→ rules doc) | Enrichir, ne pas dupliquer `sfia-rules-update.md` |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | Vision opérationnelle — pas versionnée v1.0 | Vision self-service ; boucle ChatGPT ↔ Cursor ; 8 moteurs conceptuels | Passage explicite v1.1 ; renvoi vers specs moteurs dédiées ; frontière v1.1 spec / v2.0 implémentation ; maturité Interv360 comme preuve | Code moteurs | Document pivot automation — référencer nouveaux docs |
| `method/sfia-fast-track/core/sfia-global-capitalization.md` | Capitalisation post-Interv360 | Principes FT validés ; prompts Cursor §13 ; leçons MVP/Premium UI | Cross-références vers v1.1 architecture ; statut « preuve opérationnelle » vs « référentiel conceptuel » ; lien cas référence | Re-copier contenu dans `platform-architecture` | Rôle : validation terrain — pas remplacement docs architecture |
| `method/sfia-fast-track/core/sfia-rules-update.md` | Règles opérationnelles FT | 8+ règles cycle, PR, post-merge, Figma, Notion | Cross-référence `sfia-rules-and-guardrails.md` v1.1 ; statuts réserves audit ; garde-fous checklists | Fusion destructive immédiate | Conserver jusqu'à consolidation P1 |

## 4. Enrichissements transverses à intégrer

| Sujet | Document cible recommandé | Justification |
|-------|---------------------------|---------------|
| ChatGPT ↔ Cursor operating model | **Nouveau** `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | Lacune P0 — boucle décrite dans automation §2–3 et capitalization §13, pas de doc autonome |
| Repository execution loop | `sfia-repository-blueprint.md` v1.1 + **nouveau** `sfia-repository-execution-engine.md` | Blueprint = structure ; moteur = comportement branches/PR/commits |
| Prompt generation engine | **Nouveau** `sfia-prompt-generation-engine.md` | Extraire automation §5.5 + `prompt-catalog.md` |
| Validation engine | **Nouveau** `sfia-validation-engine.md` | Extraire automation §5.7 + checklists |
| Documentation engine | `sfia-automation-architecture.md` v1.1 (référence) ou spec dédiée v2.0 | Moins urgent — couvert par templates + capitalisation |
| Knowledge / Notion layer | **Nouveau** `sfia-knowledge-layer.md` | Distinguer IDE métier Notion vs sync brut ; lier mapping cible |
| Role / métier modeling | `sfia-domain-model.md` + `sfia-meta-model.md` v1.1 | Relier `docs/practices/roles/` (6 Role Methods, 1 Official) |
| Interv360 reference implementation | Enrichissements ciblés delivery pipeline, domain model, platform architecture | Cas référence — résumer, ne pas importer 299 fichiers |
| Workspace cleanup PR #81 | `sfia-repository-blueprint.md`, `sfia-platform-architecture.md` | Structure validée — documenter comme état cible v1.1 |
| Controlled Delivery complémentaire | `sfia-delivery-pipeline.md` (note) + `method/complementary/` | Méthode parallèle — ne pas fusionner avec Fast Track |

## 5. Documents nouveaux recommandés

| Document cible | Priorité | Rôle | Justification |
|----------------|----------|------|---------------|
| `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` | **P0** | Modèle opératoire ChatGPT ↔ Cursor | Sujet transversal sans place naturelle unique dans un doc v1.0 |
| `method/sfia-fast-track/core/sfia-rules-and-guardrails.md` | **P1** | Règles unifiées | Fusion `engineering-principles` + `rules-update` + `guardrails-checklist` — sans supprimer sources |
| `method/sfia-fast-track/automation/sfia-prompt-generation-engine.md` | **P1** | Spec moteur prompts | Extraction automation §5.5 |
| `method/sfia-fast-track/automation/sfia-validation-engine.md` | **P1** | Spec moteur validation | Extraction automation §5.7 |
| `method/sfia-fast-track/automation/sfia-repository-execution-engine.md` | **P1** | Spec moteur repo | Extraction automation §5.6 |
| `method/sfia-fast-track/core/sfia-knowledge-layer.md` | **P1** | Knowledge / Notion layer | Préparer chantier Notion — pas de sync |
| `method/sfia-fast-track/automation/sfia-documentation-engine.md` | **P2** | Spec moteur documentation | Optionnel v1.1 — peut attendre v2.0 |

## 6. Sources d'enrichissement par document (Interv360 + Fast Track)

| Source opérationnelle | Documents v1.1 alimentés |
|-----------------------|--------------------------|
| `sfia-global-capitalization.md` | Platform Architecture, Delivery Pipeline, Decision Engine |
| `sfia-rules-update.md` + checklists | Engineering Principles, Rules & Guardrails (nouveau) |
| `sfia-automation-architecture.md` | Platform Architecture, nouveaux moteurs |
| `cycles/interv360-*` | Delivery Pipeline, Domain Model |
| `projects/interv360/06-audit-rex/current-application-audit.md` | Decision Engine, Validation Engine |
| `pr-81-post-merge-status.md` | Repository Blueprint, Platform Architecture |
| `notion-target-content-map.md` | Knowledge Layer (nouveau) |
| `docs/practices/roles/` | Domain Model, Metamodel |

## 7. Décision proposée

> Les documents fondateurs v1.0 sont **conservés** et promus en base v1.1.

La consolidation v1.1 doit **enrichir** les documents existants sans effacer leur rôle fondateur.

Les nouveaux documents doivent uniquement couvrir les **lacunes transverses** absentes des documents v1.0 :

- operating model ChatGPT ↔ Cursor (P0) ;
- specs moteurs autonomes (P1) ;
- knowledge layer (P1) ;
- rules unifiées (P1).

La **v2.0** reste réservée à l'implémentation des moteurs et à Notion opérationnel.

## 8. Frontière v1.1 / v2.0

| v1.1 (documentation) | v2.0 (futur) |
|----------------------|--------------|
| Specs moteurs + operating model | Implémentation moteurs exécutables |
| Alignement repo blueprint | Scripts / agents automatisés |
| Domain model étendu | Objets CMP/Notion synchronisés |
| Knowledge layer défini | Sync Notion opérationnelle sélective |
| Enrichissement 6 référentiels architecture | Decision Engine actif en runtime |

## Update — Capitalization Inputs Inventory

Un inventaire détaillé des apports de capitalisation v1.1 a été produit avant mise à jour des documents fondateurs.

**Livrables :**

- `v1.1-inputs/sfia-v1.1-capitalization-inputs-inventory.md`
- `v1.1-inputs/sfia-v1.1-foundation-impact-matrix.md`

Il couvre :

- Interv360 (00–09, ADR, audit, REX, MVP/Premium UI, roadmap post-MVP) ;
- SFIA Fast Track (core, automation, cycles, UI, templates, checklists) ;
- workspace cleanup PR #81 ;
- audits et REX ;
- prompts et catalogue ;
- templates (FT + plateforme) ;
- practices et Role Methods ;
- Controlled Delivery complémentaire ;
- automatisation ChatGPT ↔ Cursor ;
- knowledge / Notion layer ;
- sources additionnelles : consolidation roadmap, notion mapping, final architecture audit, exports/notion.

**Décision inventaire :** apports suffisamment identifiés pour lancer consolidation v1.1.

Cet inventaire doit servir de référence avant toute modification des documents fondateurs.
