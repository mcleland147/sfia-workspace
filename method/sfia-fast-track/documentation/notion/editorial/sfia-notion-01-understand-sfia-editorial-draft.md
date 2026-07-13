# 01 — Comprendre SFIA

| Métadonnée | Valeur |
|------------|--------|
| **Page P0** | 01 — Comprendre SFIA |
| **Statut** | Draft éditorial — non publié |
| **Cycle** | Préparation Notion — Cycle 2 |
| **Profil** | Standard |
| **Baseline** | SFIA v2.4 |
| **v2.5** | Candidate — non baseline |
| **Audience** | Nouvel utilisateur, PO, chef de projet |
| **Niveau** | L1–L2 |
| **Propriétaire** | Morris |
| **Sources Git** | `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` ; `docs/foundation/sfia-engineering-principles.md` ; `method/sfia-fast-track/README.md` |
| **Commit** | `6407913689b14e84e0a487a3137ff290bb6e2ff8` |
| **Date** | 2026-07-13 13:11 Europe/Paris |

---

## 1. Objectif de la page

Donner une définition claire de SFIA, des rôles dans la boucle opératoire, et du cadre documentaire (baseline, candidate, validated) — sans imposer la lecture du repository.

## 2. À retenir en 30 secondes

- SFIA = méthode de livraison **contrôlée** avec IA (ChatGPT + Cursor) et **validation humaine** (Morris).
- **Un cycle = un objectif utile** — branche Git dédiée, traçabilité, PR quand pertinent.
- **Git** porte la méthode ; **Notion** aide à la comprendre.
- **Baseline opérationnelle : SFIA v2.4**. Les évolutions v2.5 sont **Candidate** jusqu'à validation explicite.

## 3. Contenu éditorial principal

### Qu'est-ce que SFIA ?

SFIA Fast Track est la méthode utilisée pour livrer des produits numériques en combinant :

- cadrage et objectifs bornés ;
- cycles courts avec garde-fous ;
- prompts Cursor comme **contrats d'exécution** ;
- revues, PR et capitalisation ;
- montée progressive en automatisation.

### Les trois acteurs

| Acteur | Rôle |
|--------|------|
| **Morris** | Autorité de décision — gates structurants, merge, validation baseline |
| **ChatGPT** | Qualification, instanciation des prompts, revue (via handoff Git si requis) |
| **Cursor** | Exécution repository — ne décide pas, n'élargit pas le périmètre |

### Cycle de vie documentaire

| Statut | Signification pour le lecteur |
|--------|------------------------------|
| **validated** | Référence opérationnelle stable (baseline v2.4) |
| **candidate** | Proposition en test — **non baseline** |
| **draft** | Travail en cours |
| **historical** | Contexte passé — ne pas appliquer sans vérification |

### Niveau d'automatisation actuel

SFIA v1.1 correspond au **niveau 0** : orchestration **manuelle assistée**. Les moteurs (prompt generation, validation, repository execution) sont spécifiés mais l'humain reste au centre des décisions structurantes.

## 4. Fonctionnement ou parcours

**Suite recommandée :** cette page → [03 Comment fonctionne un cycle](sfia-notion-03-how-a-cycle-works-editorial-draft.md) → [04 Cycles et profils](sfia-notion-04-cycles-profiles-gates-editorial-draft.md).

## 5. Exemple pédagogique

Un PO découvre SFIA : il lit cette page, comprend que Morris valide les merges critiques, puis consulte **Routage** pour savoir quel cycle ouvrir pour « rédiger des user stories » — sans ouvrir le prompt catalog.

## 6. Points de vigilance

- Ne pas confondre **profil Capitalization** (intention de capitaliser) avec **Critical** (risque structurant).
- Les documents **Candidate v2.5** (ex. template d'exécution cycles projet) enrichissent la méthode mais **ne remplacent pas** v2.4 tant que non validés.

## 7. Liens parcours

→ [02 Valeur](sfia-notion-02-value-proposition-editorial-draft.md) · [03 Cycle](sfia-notion-03-how-a-cycle-works-editorial-draft.md) · [07 Gouvernance](sfia-notion-07-governance-guardrails-editorial-draft.md) · [11 Glossaire](sfia-notion-11-glossary-editorial-draft.md)

## 8. Sources canoniques Git

- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md` (validated)
- `docs/foundation/sfia-engineering-principles.md` (validated)
- `method/sfia-fast-track/README.md` (validated)

## 9. Métadonnées publication futures

Type : **canonical summary** + synthèse éditoriale. Badge Candidate sur mentions v2.5.

## 10. Réserves Morris

Propriétaire éditorial : Morris. Niveau de détail automation (niveaux 1–4) : résumé seulement — détail dans Git.
