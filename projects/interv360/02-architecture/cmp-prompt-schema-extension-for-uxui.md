# Interv360 — Extension schéma CMP Prompt pour UX/UI

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Lot** : 2 — UX/UI V1 Governance  
**Composant** : CMP-001  
**Type** : Décision technique outillage  
**Statut** : Implemented — Not published  
**Objet** : permettre une publication propre des prompts UX/UI V1 Governance dans SFIA Prompt Library

---

## 1. Contexte

- **Lot 0 QA** (10 prompts) et **Lot 1 Architecture & Sécurité** (2 prompts) sont **déjà publiés** — total 12 prompts dans SFIA Prompt Library.
- **Lot 2** concerne **UX/UI V1 Governance** — **15 prompts** PROMPT-UXUI-001 à PROMPT-UXUI-015.
- Les prompts sont référencés dans `prompts/prompt-catalog.md` §13 avec sources projet documentées.
- L'objectif est d'**éviter de mapper** ces prompts en **Analysis** ou **Writing**.
- La Prompt Library doit porter une **catégorie UX/UI** propre ; la nuance **V1 Governance** via les tags.

---

## 2. Problème identifié

| Limite | Impact |
|--------|--------|
| **Catégorie UX/UI absente** | Risque de classification générique (Analysis, Writing) |
| **Risque classification générique** | Filtrage Prompt Library peu lisible pour la famille UX/UI |
| **Sources projet à vérifier** | Prompts candidats — pas de fichiers dédiés sous `prompts/ux-ui/` |
| **Pas de update prompt** | Correction post-publication manuelle |
| **Pas de batch** | 15 commandes `create prompt` distinctes |
| **Export Notion obsolète** | `exports/notion/prompts.json` ne reflète pas les 12 prompts publiés |

---

## 3. Décision

**Décision** : étendre le schéma CMP `prompt` pour supporter la catégorie **UX/UI**.

Précisions :

- Les prompts **PROMPT-UXUI-*** utiliseront `category: UX/UI`.
- Les nuances **V1 Governance** seront portées par les **tags** (UXUI, Governance, Vigilance si applicable).
- **`summary`** et **`content`** sont déjà supportés (`page_content`).
- **Aucune publication Notion** dans cette tâche.

---

## 4. Modifications réalisées

| Fichier | Modification |
|---------|--------------|
| `tools/cmp-001/src/schemas/prompt.schema.json` | Ajout `UX/UI` dans l'enum `category` |
| Catégories QA, Architecture, Security | Inchangées |
| Code CMP | Inchangé — mécanisme `buildPageContentBlocks` générique |

---

## 5. Limites restantes

- Pas de **`update prompt`**.
- Pas de **batch** — lot volumineux (15 entrées).
- Publication future en **Draft**.
- **Dédoublonnage manuel** avant exécution.
- **Revue manuelle obligatoire** — lot volumineux ; synthèse catalogue ≠ corps exécutable complet sous `prompts/ux-ui/`.

---

## 6. Garde-fous

- [x] pas de publication Notion ;
- [x] pas d'appel API ;
- [x] pas de `create prompt` ;
- [x] pas de secret affiché ;
- [x] pas de delivery ouvert.

---

## 7. Conclusion

Le schéma CMP **Prompt** permet désormais une **publication propre du Lot 2 UX/UI V1 Governance** dans **SFIA Prompt Library**.

La publication reste à réaliser dans une **tâche dédiée**, après **revue manuelle** du payload (`notion-sync-prompt-library-lot2-uxui-v1-governance-cmp-payload.json`).

---

*Extension schéma CMP Prompt — Lot 2 UX/UI — non publié dans Notion.*
