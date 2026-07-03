# Interv360 — Publication bloquée SFIA Components — CMP Technical Roadmap

**Projet** : PRJ-INTERV360  
**Type** : Trace blocage publication Notion  
**Statut** : Blocked — Not published  
**Publication Notion** : bloquée volontairement  
**API Notion** : non appelée pour publication  
**CMP-001 create component** : non exécuté

---

## 1. Objectif

Documenter le **blocage de publication Notion** de la roadmap technique CMP dans **SFIA Components**, afin d'éviter la création d'un **doublon**.

---

## 2. Contexte

La roadmap technique CMP / SFIA outillage a été préparée après la clôture de la **SFIA Prompt Library 39/39**.

La cible correcte est **SFIA Components**, car les évolutions concernent le composant d'outillage **CMP-001** et son écosystème :

- Prompt Library ;
- export Notion ;
- batch ;
- contrôle doublons ;
- publication contrôlée ;
- lifecycle Draft → Tested.

Le type CMP **`component`** est disponible, mais **`update component`** n'est pas supporté.

---

## 3. Publication envisagée

| Élément | Valeur |
|---------|--------|
| **Type CMP** | `component` |
| **Base cible** | SFIA Components |
| **Item** | SFIA-COMP-CMP-001 — CMP-001 Notion Connector |
| **Modèle retenu** | 1 fiche composant principale, roadmap intégrée |
| **Commande prévue** | `node src/cli.js create component /tmp/sfia-components-roadmap/SFIA-COMP-CMP-001.json` |

La commande de publication **n'a pas été exécutée**.

---

## 4. Vérification doublon

| Recherche | Résultat |
|-----------|----------|
| **CMP-001** | **Trouvé** — fiche existante `CMP-001 — SFIA Notion Sync` |
| **SFIA-COMP-CMP-001** | Non trouvé |
| **CMP-001 Notion Connector** | Non trouvé |
| **Notion Connector** | Non trouvé en titre |

**Fiche existante** :

| Champ | Valeur |
|-------|--------|
| **Titre** | CMP-001 — SFIA Notion Sync |
| **ID Notion** | `38c0bc33-8074-810b-af32-f8ce4e87a5f7` |
| **URL Notion** | https://app.notion.com/p/CMP-001-SFIA-Notion-Sync-38c0bc338074810baf32f8ce4e87a5f7 |
| **Statut** | Active |
| **Type** | Connector |
| **Export** | `exports/notion/components.json` |
| **Date export** | `2026-06-27T17:12:34Z` |

---

## 5. Décision

**Décision** : **publication bloquée**.

La fiche **CMP-001 — SFIA Notion Sync** existe déjà dans SFIA Components et représente le **même composant**.

En l'absence de commande CMP **`update component`**, il est **interdit** de créer une nouvelle fiche **SFIA-COMP-CMP-001**, afin d'éviter un doublon dans Notion.

---

## 6. Action retenue

**Option retenue** :

**Option A — enrichir la fiche existante.**

La roadmap CMP doit être ajoutée à la fiche existante **CMP-001 — SFIA Notion Sync** :

- soit **manuellement** dans Notion ;
- soit plus tard via CMP lorsque **`update component`** sera disponible.

Le contenu source reste disponible dans Git :

- `docs/roadmaps/cmp-technical-roadmap.md`
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-payload.json`
- `projects/interv360/02-architecture/notion-sync-cmp-technical-roadmap-sfia-components-review.md`

---

## 7. Roadmap à intégrer dans la fiche existante

- **CMP-ROADMAP-001** — Ajouter update prompt
- **CMP-ROADMAP-002** — Ajouter un mode batch
- **CMP-ROADMAP-003** — Formaliser prompts Draft sous `prompts/<famille>/`
- **CMP-ROADMAP-004** — Passage Draft → Tested
- **CMP-ROADMAP-005** — Fiabiliser export Notion
- **CMP-ROADMAP-006** — Contrôle doublons renforcé
- **CMP-ROADMAP-007** — Procédure standard publication Prompt Library
- **CMP-ROADMAP-008** — Clôture semi-automatique des lots publiés

---

## 8. Impacts

- **0** composant publié dans Notion.
- **0** appel API Notion de publication.
- **0** doublon créé.
- Les **8** évolutions ne sont **pas** publiées comme fiches séparées.
- La roadmap est **conservée dans Git**.
- La fiche existante **CMP-001** reste la **cible de référence** dans SFIA Components.

---

## 9. Garde-fous respectés

- [x] aucun secret affiché ;
- [x] `.env` non modifié ;
- [x] pas de `create component` exécuté ;
- [x] pas de `update project` exécuté ;
- [x] pas de delivery ouvert ;
- [x] pas de backlog ;
- [x] pas de user stories ;
- [x] pas de code applicatif ;
- [x] pas de scénarios ou cas de test projet ;
- [x] **Git** reste source détaillée ;
- [x] **Notion** reste couche de synthèse.

---

## 10. Prochaine étape

1. Ouvrir une **PR vers `main`** pour intégrer la roadmap et la note de blocage.
2. Mettre à jour **manuellement** la fiche Notion existante **CMP-001 — SFIA Notion Sync** avec la roadmap.
3. Ajouter **`update component`** à la roadmap CMP afin de permettre une mise à jour contrôlée à l'avenir.

---

*Publication bloquée SFIA Components — roadmap technique CMP — gouvernance SFIA — aucun doublon Notion créé.*
