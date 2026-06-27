# Roadmap — CMP-001 SFIA Notion Sync

Ce document décrit les orientations futures du composant.

## v1.0.0 — Livré ✓

- Création des 11 types d'objets SFIA dans Notion
- CLI `create`, `discover`, `types`
- Validation JSON et mapping vers propriétés Notion
- Tests d'intégration validés (10/10)

## v1.1.0 — Livré ✓

- Export Notion → JSON (`export`) pour audit SFIA
- Manifest d'export (`export-manifest.json`)

---

## v1.2 — Confort et robustesse

Objectif : améliorer l'expérience opérationnelle sans changer le périmètre fonctionnel de base.

| Orientation | Description |
|-------------|-------------|
| **Mise à jour ciblée** | Commande `update <type> <page-id> <json>` pour modifier une page existante |
| **Export enrichi** | Filtres, pagination, export incrémental |
| **Découverte enrichie** | Meilleure résolution des doublons de bases (ex. plusieurs « SFIA — Components ») |
| **Messages d'erreur** | Diagnostics plus explicites en cas d'écart schéma / base Notion |
| **Schémas configurables** | Fichier de mapping optionnel pour adapter les colonnes sans modifier le code |
| **Reference Page en tests** | Extension de la suite de tests à 11/11 objets |

---

## v2.0 — Plateforme SFIA

Objectif : faire évoluer le connecteur vers un outil de synchronisation structurée du catalogue SFIA.

| Orientation | Description |
|-------------|-------------|
| **Relations Notion** | Liens entre objets (Project → Component, ADR → Standard, etc.) |
| **Idempotence** | Détection par clé métier (slug, external ID) pour éviter les doublons |
| **Sync batch contrôlé** | Import de dossiers JSON avec rapport d'exécution et mode dry-run |
| **Validation stricte** | JSON Schema complet (AJV) et contrats de données versionnés |
| **Contenu de page** | Création de blocs Notion (corps de page) en plus des propriétés |
| **Intégration CI/CD** | Webhooks, GitHub Actions, déclenchement depuis Cursor / ChatGPT |
| **Observabilité** | Logs structurés, métriques de sync, traçabilité des opérations |

---

## Principes directeurs

1. **Ne jamais supprimer de données** par défaut
2. **Une opération = un objet** tant que le batch n'est pas maîtrisé
3. **Extensibilité par schémas** — le Domain Model SFIA reste la source de vérité
4. **Compatibilité Notion** — respect des limites et types de l'API officielle
