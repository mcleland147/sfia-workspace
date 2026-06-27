# Évolution proposée — Base Components

**Composant** : CMP-001 — SFIA Notion Sync  
**Date** : 2026-06-27  
**Statut** : Proposition — **non implémentée dans Notion**

## Contexte

La fiche **CMP-001** concentre aujourd'hui de nombreuses métadonnées dans le champ `Current version` (rich text). Cela fonctionne en V1 mais limite l'audit, les filtres et l'exploitation par ChatGPT.

## État actuel (Notion)

| Colonne | Type | Usage actuel |
|---------|------|--------------|
| Component | title | Nom + ID (ex. CMP-001 — SFIA Notion Sync) |
| Status | status | Backlog, Design, Build, Active, Deprecated |
| Type | select | Service, Library, Agent, Connector, UI |
| Criticality | select | Low, Medium, High, Critical |
| Current version | rich_text | Version + métadonnées concaténées |
| Repository | url | Lien dépôt |
| Documentation | url | Lien README |
| Owner | people | Responsable |
| Created / Updated | auto | Horodatage |

## Champs manquants identifiés

| Champ proposé | Type Notion | Obligatoire | Description |
|---------------|-------------|-------------|-------------|
| **Description** | rich_text | Oui | Résumé du composant et de son rôle dans la plateforme SFIA |
| **Objective** | rich_text | Oui | Objectif métier / technique du composant |
| **Version** | rich_text ou select | Oui | Version sémantique (ex. v1.1.0) — distinct de Current version |
| **Tests** | rich_text | Non | Résultat des tests (ex. 10/10 validés) |
| **Production Ready** | checkbox ou select | Oui | Oui / Non / Partiel |
| **Repository** | url | Existant | Conserver — lien vers le code source |
| **Documentation** | url | Existant | Conserver — README principal |
| **Changelog** | url | Non | Lien vers CHANGELOG.md ou page dédiée |
| **Roadmap** | url | Non | Lien vers ROADMAP.md ou page dédiée |

## Schéma cible proposé

```
Component (title)
├── ID              text          CMP-001
├── Status          status        Active | Deprecated | ...
├── Type            select        Connector | Service | ...
├── Criticality     select        Low → Critical
├── Version         rich_text     v1.1.0
├── Description     rich_text
├── Objective       rich_text
├── Tests           rich_text     10/10 — npm run test:all
├── Production Ready checkbox
├── Repository      url
├── Documentation   url
├── Changelog       url
├── Roadmap         url
├── Owner           people
└── Tags            multi_select  optionnel
```

## Bénéfices attendus

1. **Audit SFIA** — export JSON exploitable sans parsing du champ concaténé
2. **Filtres Notion** — composants Production Ready, par version, par criticité
3. **Alignement Domain Model** — champs explicites vs. métadonnées en texte libre
4. **ChatGPT / Cursor** — génération de fiches composant structurées

## Plan de migration (manuel)

1. Ajouter les colonnes dans Notion (sans supprimer `Current version`)
2. Migrer CMP-001 manuellement ou via script ciblé
3. Mettre à jour `component.schema.json` du connecteur
4. Valider avec `node src/cli.js create component ...` puis `export`

## Risques

| Risque | Mitigation |
|--------|------------|
| Régression connecteur | Conserver les anciennes colonnes pendant la transition |
| Doublons Version / Current version | Déprécier `Current version` après migration |
| Owner (people) | Renseigner manuellement — non géré par JSON en V1 |

## Recommandation

Implémenter cette évolution **après validation** de la matrice des statuts et du premier jeu d'objets réels SFIA.
