# SFIA Fast Track — Documentation Structure Target

## 1. Objectif

Ce document propose une arborescence cible pour la documentation SFIA.

Il ne déplace aucun fichier.

Il prépare une future réorganisation documentaire contrôlée.

## 2. Principes de structure

La documentation doit distinguer :

- la méthode SFIA ;
- les règles et standards ;
- les templates ;
- les checklists ;
- les projets ;
- les audits ;
- les REX ;
- les releases ;
- les plans Notion ;
- les documents internes non publiables.

Règles transverses :

- `method/sfia-fast-track/` = méthode Fast Track et consolidation ;
- `docs/` = vision plateforme SFIA, méthodes rôles, tooling transverse ;
- `projects/<projet>/` = documentation projet par phase ;
- `methods/controlled-delivery/` = méthode parallèle, conservée distincte ;
- archives = zone dédiée, jamais suppression directe.

## 3. Arborescence cible proposée

```text
method/
  sfia-fast-track/
    README.md                          # Index méthode Fast Track
    core/
      sfia-global-capitalization-reference.md    # ← existant
      sfia-automation-architecture.md  # ← existant
      sfia-consolidation-roadmap.md    # ← existant
      sfia-rules-update.md             # Chantier 5
      sfia-architecture-standards.md   # Chantier 5
    cycles/
      interv360-mvp-delivery-capitalization.md   # ← existant
      interv360-final-capitalization.md        # ← existant
      cycle-lifecycle.md               # À créer — synthèse un cycle
      pr-and-post-merge.md             # À créer
      release-management.md            # À créer
    ui/
      figma-design-first-ui-method.md  # ← existant
      ui-premium-checklist.md          # Chantier 5
    audit-rex/
      interv360-application-rex.md     # ← existant
      audit-template.md                # Chantier 5
      rex-template.md                  # Chantier 5
    documentation/
      documentation-audit.md           # ← existant (Chantier 4)
      documentation-structure-target.md  # ← ce document
      notion-publication-plan.md       # ← Chantier 4
    templates/
      mvp-delivery-pattern-template.md # ← existant
      cycle-template.md                # Chantier 5
      pr-body-template.md              # Chantier 5
      post-merge-template.md           # Chantier 5
    checklists/
      validation-checklist.md          # Chantier 5
      guardrails-checklist.md          # Chantier 5
      notion-publication-checklist.md  # Chantier 5
    archive/
      interv360-realization/           # ← method/interv360-realization/* actuel

docs/                                  # Inchangé — plateforme SFIA
  architecture/
  methods/
  templates/
  tooling/
  ...

methods/
  controlled-delivery/                 # Inchangé — méthode parallèle

projects/
  interv360/
    00-intake/                         # ← existant
    01-cadrage/                        # ← existant
    02-architecture/
      adr/                             # ← ADR actifs
      archive/                         # figma-v1, clarification, notion-sync logs
    03-design/                         # ← existant (exports hors git)
    07-delivery/                       # docs delivery actifs
      archive/                         # inc-01 à inc-04
    07-audit-rex/                      # Regroupement cible (optionnel)
      current-application-audit.md     # ← depuis 07-delivery/
    06-release/                        # ← existant
    08-presentation/                   # ← existant
    09-architecture/                   # ← existant — roadmaps produit
    README.md                          # Index projet Interv360
```

## 4. Mapping existant → cible

| Fichier / famille actuelle | Emplacement cible proposé | Action |
|----------------------------|--------------------------|--------|
| `method/sfia-fast-track/core/sfia-global-capitalization-reference.md` | `core/` | Déplacer plus tard |
| `method/sfia-fast-track/automation/sfia-automation-architecture.md` | `core/` | Déplacer plus tard |
| `method/sfia-fast-track/core/sfia-consolidation-roadmap.md` | `core/` | Déplacer plus tard |
| `method/sfia-fast-track/figma-design-first-ui-method.md` | `ui/` | Déplacer plus tard |
| `method/sfia-fast-track/interv360-application-rex.md` | `audit-rex/` | Déplacer plus tard |
| `method/sfia-fast-track/interv360-mvp-delivery-capitalization.md` | `cycles/` | Déplacer plus tard |
| `method/sfia-fast-track/interv360-final-capitalization.md` | `cycles/` | Déplacer plus tard |
| `method/sfia-fast-track/templates/mvp-delivery-pattern-template.md` | `templates/` | Conserver emplacement actuel ou déplacer |
| `method/sfia-fast-track/documentation-*.md`, `notion-publication-plan.md` | `documentation/` | Déplacer plus tard |
| `method/interv360-realization/*` (8 fichiers) | `archive/interv360-realization/` | Archiver |
| `projects/interv360/04-delivery/current-application-audit.md` | `07-audit-rex/` ou conserver | Déplacer plus tard (optionnel) |
| `projects/interv360/archive/inc-01-*` (~45) | `07-delivery/archive/inc-01/` | Archiver |
| `projects/interv360/archive/inc-02-*` à `inc-04-*` | `07-delivery/archive/inc-02-04/` | Archiver |
| `projects/interv360/02-architecture/notion-sync-*` (~35) | `02-architecture/archive/notion-sync/` | Archiver |
| `projects/interv360/02-architecture/clarification-*` | `02-architecture/archive/clarification/` | Archiver |
| `projects/interv360/02-architecture/figma-*` | Conserver ou `archive/figma-v1/` | À revoir — partie encore utile |
| `projects/interv360/04-delivery/premium-design-system.md` | `07-delivery/` | Conserver |
| `projects/interv360/ADR-001` à `008` | `02-architecture/adr/` | Conserver |
| `docs/architecture/*` | `docs/architecture/` | Conserver |
| `methods/controlled-delivery/*` | Inchangé | Conserver |

## 5. Documents à publier dans Notion

| Document | Publiable Notion | Commentaire |
|----------|------------------|-------------|
| `sfia-global-capitalization-reference.md` | Oui | Adapter — retirer références Git internes |
| `figma-design-first-ui-method.md` | Oui | Publier tel quel |
| `sfia-automation-architecture.md` | Oui | Résumer vision — détail moteurs optionnel |
| `interv360-mvp-delivery-capitalization.md` | Oui | Cas de référence MVP |
| `interv360-application-rex.md` | Oui | Adapter — focus enseignements |
| `interv360-final-capitalization.md` | Oui (résumé) | Fusionner avec REX côté Notion |
| `sfia-consolidation-roadmap.md` | Non | Interne pilotage consolidation |
| `documentation-audit.md` | Non | Interne repo |
| `documentation-structure-target.md` | Non | Interne repo |
| `notion-publication-plan.md` | Non | Méta-document |
| `current-application-audit.md` | Oui (résumé) | Synthèse décision + réserves |
| `premium-design-system.md` | Oui (résumé) | Extraire critères et garde-fous |
| `2026-07-02-mvp-release-readiness.md` | Oui (résumé) | Pattern release |
| `ADR-001` à `008` | Oui (sélection) | Publier ADR clés seulement |
| `inc-01-*`, `notion-sync-*` | Non | Historique opérationnel |
| Sections « Statut de merge » | Non | Interne repo |
| `method/interv360-realization/*` | Non | Obsolète |
| `docs/architecture/sfia-platform-architecture.md` | Oui | Vision plateforme |
| `controlled-delivery-standard.md` | Oui | Méthode parallèle — page dédiée |

## 6. Documents internes uniquement repo

- post-merge et statuts de merge (§ dans tous les docs récents) ;
- logs `notion-sync-*` et `cmp-payload-review` ;
- incréments `inc-01-*` à `inc-04-*` ;
- `documentation-audit.md`, `documentation-structure-target.md` ;
- `sfia-consolidation-roadmap.md` (tant que consolidation en cours) ;
- préparations PR (`push-and-pr.md`, `pr-preparation.md`) ;
- rapports workspace readiness ;
- extensions schéma CMP ;
- documents de transition pré-Fast Track (`interv360-realization/`).

## 7. Règles de nommage

- fichiers en **kebab-case** ;
- préfixes limités : `inc-`, `ADR-`, `notion-sync-` — éviter nouveaux préfixes opaques ;
- documents archivés : suffixe ou dossier `archive/` explicite ;
- pas de doublons de nom entre `method/` et `projects/` ;
- chaque document rattachement à une **famille** (méthode, delivery, audit, release…) ;
- statut explicite en tête ou en fin : `Actif`, `Cycle clos`, `Archivé`, `Obsolète` ;
- un seul document **source de vérité** par sujet (audit app = `current-application-audit.md`).

## 8. Stratégie d'archivage

1. **Ne jamais supprimer** directement.
2. Créer `archive/` par zone (`method/sfia-fast-track/archive/`, `projects/interv360/04-delivery/archive/`).
3. Ajouter en tête du fichier archivé :

   ```markdown
   > **Statut : Archivé** — Remplacé par : `<chemin>`
   > **Date archivage :** YYYY-MM-DD
   ```

4. Référencer le document remplaçant dans l'index README.
5. Archiver uniquement après validation humaine (PR dédiée « docs: archive … »).
6. Premier lot d'archive recommandé : `inc-01-*` + `notion-sync-*` (~80 fichiers).

## 9. Décision

Décision proposée :

> La documentation SFIA doit être restructurée autour d'un noyau méthode (`core/`, `cycles/`, `ui/`), de règles exécutables (Chantier 5), de templates/checklists, et d'une séparation claire entre documentation publiable et documentation interne repo.

Priorité de réorganisation :

1. README + index `method/sfia-fast-track/` ;
2. Archive `interv360-realization/` ;
3. Archive `inc-*` et `notion-sync-*` Interv360 ;
4. Déplacement structurel `core/`, `documentation/` (PR unique) ;
5. Templates Chantier 5.

## 10. Suites

Ce document alimente :

- le plan Notion ;
- le Chantier 5 — amélioration SFIA ;
- une future PR de réorganisation documentaire si validée.
