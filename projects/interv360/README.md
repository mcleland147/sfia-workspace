# Interv360

| Champ | Valeur |
|-------|--------|
| **Nom** | Interv360 |
| **Statut** | In progress |
| **Phase actuelle** | 03-process |
| **Intake** | Validated (v1.3) |
| **Objectif** | Plateforme SAV avec intégrations simulées — projet pilote SFIA |
| **Gouvernance** | SFIA |

## Règle fondamentale

Aucune solution technique ne doit être produite avant validation du cadrage métier.

## Phases du projet

| Dossier | Phase | Statut |
|---------|-------|--------|
| `00-intake/` | Intake | Clôturé — validé |
| `01-cadrage/` | Cadrage métier | Clôturé |
| `02-architecture/` | Architecture / clarification | Clôturé |
| `03-process/` | Processus BPMN | **Active** — cycle SAV MVP, exceptions métier, anomalies d'intégration |
| `04-adr/` | ADR structurantes | **Active** — décisions d'architecture issues du cadrage, de la clarification et du cycle BPMN |
| `05-functional-architecture/` | Architecture fonctionnelle détaillée | **Active** — issue des cycles clarification, BPMN et ADR |
| `06-ux-ui/` | Reprise UX/UI détaillée | **Clôturé** — cycle documentaire (PR #14) |
| `03-design/` | Design UX/UI détaillé | À venir — maquettes et design system (après reprise documentaire) |
| `04-delivery/` | Delivery | À venir |
| `05-tests/` | Tests | À venir |
| `06-documentation/` | Documentation | À venir |
| `07-rex/` | Retour d'expérience | À venir |

## Trajectoire projet

```
01-cadrage → 02-architecture / clarification → 03-process / BPMN → ADR → architecture fonctionnelle → 06-ux-ui / reprise UX documentaire → 03-design / UX détaillée
```

**Note :** `03-process/` précède l'exploitation détaillée de `03-design/`, conformément à la méthode BPMN SFIA. `06-ux-ui/` documente la reprise UX/UI (parcours, écrans, dashboard) sans produire de maquette finale. `03-design/` reste dédié aux maquettes, écrans et parcours utilisateur.

## Intake (clôturé)

| Document | Statut |
|----------|--------|
| [`00-intake/project-intake.md`](00-intake/project-intake.md) | **Validated** (v1.3) |
| [`00-intake/interv360-sfia-test-strategy.md`](00-intake/interv360-sfia-test-strategy.md) | Document garde-fou |
| **Notion** | [KNO-002 — Interv360 Project Intake](https://app.notion.com/p/KNO-002-Interv360-Project-Intake-38c0bc3380748120acc9faa1f3aea148) |

Le projet est référencé dans Notion : **PRJ-INTERV360 — Interv360**.

## Cadrage (clôturé)

| Document | Statut |
|----------|--------|
| [`01-cadrage/business-framing.md`](01-cadrage/business-framing.md) | Draft |

## Architecture / clarification (clôturé)

Cycle de clarification MVP terminé — voir `02-architecture/clarification-cycle-closure.md`.

## Processus BPMN (phase active)

| Document | Statut |
|----------|--------|
| [`03-process/process-scope.md`](03-process/process-scope.md) | Draft — cadrage BPMN |
| `03-process/bpmn/interv360-sav-mvp.bpmn` | À venir |
| `03-process/bpmn/interv360-sav-exceptions.bpmn` | À venir |
| `03-process/bpmn/interv360-integration-errors.bpmn` | À venir |

**Prochaine étape** : préparer le processus principal `interv360-sav-mvp.bpmn` pour Camunda Modeler.

## Reprise UX/UI détaillée (clôturé)

Cycle documentaire de reprise UX/UI Interv360, construit à partir du brief UX/UI existant, des décisions atelier, de Figma V1 comme référence non définitive, de l'architecture fonctionnelle détaillée et des ADR structurantes.

| Document | Rôle |
|----------|------|
| [`06-ux-ui/ux-ui-reprise-analysis.md`](06-ux-ui/ux-ui-reprise-analysis.md) | État des lieux UX/UI existant et points ouverts |
| [`06-ux-ui/ux-ui-reprise-scope.md`](06-ux-ui/ux-ui-reprise-scope.md) | Cadrage du cycle de reprise |
| [`06-ux-ui/user-journeys.md`](06-ux-ui/user-journeys.md) | Parcours utilisateurs consolidés |
| [`06-ux-ui/screen-inventory.md`](06-ux-ui/screen-inventory.md) | Inventaire des vues et écrans |
| [`06-ux-ui/screen-functional-specs.md`](06-ux-ui/screen-functional-specs.md) | Spécifications fonctionnelles des écrans |
| [`06-ux-ui/dashboard-ux-view.md`](06-ux-ui/dashboard-ux-view.md) | Vues dashboard Manager SAV, Technicien et Pilotage |
| [`06-ux-ui/ux-ui-summary.md`](06-ux-ui/ux-ui-summary.md) | Synthèse consolidée |
| [`06-ux-ui/ux-ui-cycle-closure.md`](06-ux-ui/ux-ui-cycle-closure.md) | Clôture du cycle |

## Métadonnées

Voir `project.json` pour l'identifiant et le suivi structuré du projet.
