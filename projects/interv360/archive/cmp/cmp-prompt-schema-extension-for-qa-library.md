# Interv360 — Extension schéma CMP Prompt pour QA Library

**Projet** : PRJ-INTERV360  
**Chantier** : QA / Testeur  
**Composant** : CMP-001  
**Type** : Décision technique outillage  
**Statut** : Implemented — Not published  
**Objet** : permettre une publication riche des prompts QA / Testeur dans SFIA Prompt Library

---

## 1. Contexte

- La **famille QA / Testeur** est prête et validée (`prompt-catalog-qa-tester-validation.md`).
- La **SFIA Prompt Library** (base Notion **Prompts**) doit recevoir **une entrée par prompt** (PROMPT-QA-001 à PROMPT-QA-010).
- Le schéma CMP `prompt` limitait la publication à des **propriétés simples** (titre, status, model, category, tags).
- La catégorie **QA** n'était pas supportée dans l'enum `category` (seuls Agent, RAG, Coding, Analysis, Writing).
- Les champs **`summary`** et **`content`** (`page_content`) n'étaient pas déclarés dans `prompt.schema.json`, contrairement à `project` et `knowledge`.
- La préparation initiale (`notion-sync-qa-prompt-library-preparation.md`) retenait **Draft + Analysis** — acceptable techniquement mais insuffisant méthodologiquement.

---

## 2. Problème identifié

| Limite | Impact |
|--------|--------|
| **Catégorie QA absente** | Impossible de classer proprement les prompts QA dans Notion — recours provisoire à Analysis |
| **Candidate non supporté** | Statut catalogue « Candidat » non mappable — première publication en **Draft** |
| **page_content absent** | Fiches Prompt Library sans objectif, entrées, garde-fous ni sources Git |
| **update prompt absent** | Mise à jour ultérieure impossible via CMP — recréation ou intervention manuelle |
| **Pas de batch** | 10 commandes `create prompt` distinctes requises |

---

## 3. Décision

**Décision** : étendre le schéma CMP `prompt` pour supporter une **catégorie QA** et des champs **`summary` / `content`** exploitables en contenu de page.

Précisions :

- **Status** reste **Draft** pour la première publication.
- **Category** devient **QA** ; le rôle Testeur est porté par les **tags** (`QA`, `Testeur`, `Interv360`, `Vigilance` si applicable).
- **`update prompt`** reste **hors périmètre** de cette tâche.
- Le **batch** reste **hors périmètre**.
- **Aucune modification de code CMP** requise : `createObject.js` appelle déjà `buildPageContentBlocks` de façon générique pour tous les types.

---

## 4. Modifications réalisées

| Fichier | Modification |
|---------|--------------|
| `tools/cmp-001/src/schemas/prompt.schema.json` | Ajout enum `QA` dans `category` |
| `tools/cmp-001/src/schemas/prompt.schema.json` | Ajout champs `summary` et `content` avec `notionType: page_content` |
| `projects/interv360/02-architecture/notion-sync-qa-prompt-library-cmp-payload.json` | 10 items enrichis : `category: QA`, `summary`, `content` |
| `projects/interv360/02-architecture/notion-sync-qa-prompt-library-preparation.md` | Section mise à jour post-extension |

**Code CMP** : inchangé — le mécanisme `buildPageContentBlocks` / `appendPageBlocks` dans `createObject.js` et `notionClient.js` est déjà générique.

---

## 5. Effets attendus

- Les prompts QA pourront être **créés avec une fiche riche** (résumé + sections markdown).
- La Prompt Library affichera une **catégorie QA** propre.
- **Git** reste la source détaillée ; **Notion** devient une synthèse exploitable par prompt.
- **Publication non exécutée** dans cette tâche.

---

## 6. Limites restantes

- Pas de **`update prompt`** — hors périmètre.
- Pas de **batch** — une commande par entrée.
- Première publication en **Draft** — passage à Testing/Approved après usage réel.
- Pas de **dédoublonnage automatique** — vérifier l'absence de PROMPT-QA-* dans Notion avant exécution.
- La valeur **QA** doit exister ou être créée dans la colonne Category Notion (l'API peut créer les options select).

---

## 7. Garde-fous

- [x] pas de publication Notion ;
- [x] pas d'appel API ;
- [x] pas d'exécution CMP `create prompt` ;
- [x] pas de secret affiché ;
- [x] pas de delivery ouvert ;
- [x] pas de modification `.env`.

---

## 8. Conclusion

Le schéma CMP **Prompt** est désormais mieux aligné avec la **gouvernance SFIA** et permet une **publication propre** des prompts QA / Testeur dans **SFIA Prompt Library**.

La publication reste à réaliser dans une **tâche dédiée**, après **revue manuelle** du payload CMP enrichi (`notion-sync-qa-prompt-library-cmp-payload.json`).

---

*Extension schéma CMP Prompt — gouvernance SFIA — non publié dans Notion.*
