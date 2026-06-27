# Matrice des statuts officiels SFIA

Document de référence pour l'harmonisation des statuts Notion par type d'objet.  
**Proposition v1 — à valider avant toute migration massive.**

## Principes

1. Un statut décrit l'**état de vie** de l'objet, pas sa qualité.
2. Les objets de test et brouillons restent identifiables par leur titre ou tag.
3. L'archivage est **non destructif** : l'objet reste consultable.

## Matrice par type

| Type SFIA | Statuts officiels | Statut initial | Statut actif | Statut terminal |
|-----------|-------------------|----------------|--------------|-----------------|
| **Experiment** | Idea, Running, Review, Validated, Rejected | Idea | Running | Validated / Rejected |
| **Component** | Backlog, Design, Build, Active, Deprecated | Backlog | Active | Deprecated |
| **Project** | Not started, In progress, At risk, Done, Cancelled | Not started | In progress | Done / Cancelled |
| **Prompt** | Draft, Testing, Approved, Retired | Draft | Approved | Retired |
| **Template** | Draft, Review, Published, Deprecated | Draft | Published | Deprecated |
| **Standard** | Draft, Review, Published, Deprecated | Draft | Published | Deprecated |
| **ADR** | Draft, Review, Accepted, Superseded | Draft | Accepted | Superseded |
| **REX** | Draft, Review, Published, Archived | Draft | Published | Archived |
| **KPI** | Defined, Measured, At risk, On target, Archived | Defined | On target | Archived |
| **Knowledge Article** | Draft, Review, Published, Archived | Draft | Published | Archived |
| **Reference Page** | Draft, Published, Archived *(proposé)* | Draft | Published | Archived |

## Équivalences transverses

| Intention SFIA | Experiment | Component | Prompt | Template / Standard | ADR | REX / Knowledge / KPI |
|----------------|------------|-----------|--------|---------------------|-----|-------------------------|
| Brouillon | Idea | Backlog | Draft | Draft | Draft | Draft |
| En cours | Running | Build | Testing | Review | Review | Review |
| Validé / actif | Validated | Active | Approved | Published | Accepted | Published / On target |
| Retiré | Rejected | Deprecated | Retired | Deprecated | Superseded | Archived |

## Règles d'archivage des tests

| Cas | Action |
|-----|--------|
| Base avec statut `Archived` | Passer l'objet en `Archived` + préfixer le titre `[ARCHIVED TEST]` |
| Base sans `Archived` | Préfixer uniquement le titre avec `[ARCHIVED TEST]` |
| Objet réel (sans préfixe test) | **Ne jamais modifier** |

## Prochaines étapes (validation requise)

- [ ] Valider la matrice avec l'équipe SFIA
- [ ] Aligner les bases Notion sans `Archived` (Experiment, Component, Project, Prompt, Template, Standard, ADR)
- [ ] Documenter les transitions autorisées (workflow) par type
- [ ] Intégrer la matrice dans les schémas JSON du connecteur
