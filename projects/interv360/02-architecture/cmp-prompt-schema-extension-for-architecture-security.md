# Interv360 — Extension schéma CMP Prompt pour Architecture & Sécurité

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Lot** : 1 — Architecture & Sécurité  
**Composant** : CMP-001  
**Type** : Décision technique outillage  
**Statut** : Implemented — Not published  
**Objet** : permettre une publication propre des prompts Architecture et Sécurité dans SFIA Prompt Library

---

## 1. Contexte

- L'**inventaire Prompt Library** (`notion-sync-existing-prompt-library-inventory.md`) a identifié le **Lot 1** comme prochain lot recommandé hors QA.
- Les prompts concernés sont **PROMPT-ARCH-001** et **PROMPT-SEC-001** — seuls prompts formalisés en fichiers Draft sous `prompts/` hors famille QA.
- L'objectif est d'**éviter de mapper** ces prompts en **Analysis** ou autre catégorie générique.
- La **Prompt Library** doit porter des **catégories propres** alignées avec les familles métier SFIA.

---

## 2. Problème identifié

| Limite | Impact |
|--------|--------|
| **Catégorie Architecture absente** | PROMPT-ARCH-001 classé en Analysis ou tag-only — perte de lisibilité Prompt Library |
| **Catégorie Security absente** | PROMPT-SEC-001 idem — nuance RSSI / Sécurité non portée en colonne Category |
| **Risque classification générique** | Prompts à forte valeur métier mal filtrables dans Notion |
| **Pas de update prompt** | Correction post-publication = manuelle ou évolution CMP |
| **Pas de batch** | Une commande `create prompt` par entrée |
| **Export Notion obsolète** | `exports/notion/prompts.json` ne reflète pas les QA publiés — rafraîchir avant exécution |

---

## 3. Décision

**Décision** : étendre le schéma CMP `prompt` pour supporter les catégories **Architecture** et **Security**.

Précisions :

- **PROMPT-ARCH-001** utilisera `category: Architecture`.
- **PROMPT-SEC-001** utilisera `category: Security` (valeur CMP stable ASCII ; nuances **Sécurité**, **RSSI** via tags).
- **`summary`** et **`content`** sont déjà supportés depuis l'extension QA (`page_content`).
- **Aucune publication Notion** dans cette tâche.

---

## 4. Modifications réalisées

| Fichier | Modification |
|---------|--------------|
| `tools/cmp-001/src/schemas/prompt.schema.json` | Ajout `Architecture` et `Security` dans l'enum `category` |
| Catégorie **QA** | Inchangée |
| Code CMP | Inchangé — `createObject.js` exploite déjà `buildPageContentBlocks` |

---

## 5. Limites restantes

- Pas de **`update prompt`**.
- Pas de **batch**.
- Publication en **Draft** (statut source des deux prompts).
- **Dédoublonnage manuel** avant exécution — export Git sans PROMPT-ARCH-001 / PROMPT-SEC-001 au moment de la préparation.
- **Réexporter Notion** avant lots suivants si possible.

---

## 6. Garde-fous

- [x] pas de publication Notion ;
- [x] pas d'appel API ;
- [x] pas de `create prompt` ;
- [x] pas de secret affiché ;
- [x] pas de delivery ouvert.

---

## 7. Conclusion

Le schéma CMP **Prompt** permet désormais une **publication propre du Lot 1 Architecture & Sécurité** dans **SFIA Prompt Library**.

La publication reste à réaliser dans une **tâche dédiée**, après **revue manuelle** du payload (`notion-sync-prompt-library-lot1-architecture-security-cmp-payload.json`).

---

*Extension schéma CMP Prompt — Lot 1 Architecture & Sécurité — non publié dans Notion.*
