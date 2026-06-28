# Interv360 — Extension schéma CMP Prompt pour lot final Prompt Library

**Projet** : PRJ-INTERV360  
**Cible Notion** : SFIA Prompt Library  
**Lot** : Final — prompts restants  
**Composant** : CMP-001  
**Type** : Décision technique outillage  
**Statut** : Implemented — Not published  
**Objet** : permettre une publication propre des prompts restants dans SFIA Prompt Library

---

## 1. Contexte

- **Lots 0, 1 et 2** sont **déjà publiés** — **27 prompts** dans SFIA Prompt Library (10 QA + 2 Architecture/Sécurité + 15 UX/UI V1 Governance).
- Il reste **12 prompts** du catalogue référencés en §4 : **Cadrage**, **Arbitrages**, **UX/UI classique**, **Rôles** et **Gouvernance**.
- L'objectif est de **finaliser la capitalisation Prompt Library** en un lot consolidé.
- Ces familles étaient initialement marquées « Candidat catalogue seul » ; des **sources projet** sous `projects/interv360/01-cadrage/` et `docs/methods/` ont été vérifiées pour permettre une **synthèse Draft v0.1** sans inventer de contenu.
- Certaines entrées (**PROMPT-GOV-001**, **PROMPT-ROLE-003**) conservent un **arbitrage ou une formalisation** recommandée avant publication définitive.

---

## 2. Problème identifié

| Limite | Impact |
|--------|--------|
| **Catégories Framing, Governance, Role, Arbitration absentes** | Risque de mapper Cadrage, Rôles, Arbitrages et Gouvernance en Analysis ou Agent |
| **Sources parfois incomplètes** | 12 prompts sans fichier dédié sous `prompts/<famille>/` — synthèse catalogue + livrables projet uniquement |
| **Pas de update prompt** | Correction post-publication manuelle ou évolution CMP |
| **Pas de batch** | 12 commandes `create prompt` distinctes pour le lot final |
| **Export Notion potentiellement obsolète** | `exports/notion/prompts.json` ne reflète pas les 27 prompts publiés — dédoublonnage manuel obligatoire |

---

## 3. Décision

**Décision** : étendre le schéma CMP `prompt` pour supporter les catégories **Framing**, **Governance**, **Role** et **Arbitration**.

Précisions :

- **Cadrage** (`PROMPT-CAD-*`) → `category: Framing`
- **Arbitrages** (`PROMPT-ARB-*`) → `category: Arbitration`
- **UX/UI classique** (`PROMPT-UX-*`) → `category: UX/UI` *(déjà supportée)*
- **Rôles** (`PROMPT-ROLE-*`) → `category: Role`
- **Gouvernance** (`PROMPT-GOV-*`) → `category: Governance`
- Nuances métier via **tags** (Cadrage, Arbitrage, MVP, Notion, Méthode, etc.)
- **`summary`** et **`content`** inchangés (`page_content`)
- **Aucune publication Notion** dans cette tâche

---

## 4. Modifications réalisées

| Fichier | Modification |
|---------|--------------|
| `tools/cmp-001/src/schemas/prompt.schema.json` | Ajout `Framing`, `Governance`, `Role`, `Arbitration` dans l'enum `category` |
| Catégories QA, Architecture, Security, UX/UI | Inchangées |
| Code CMP | Inchangé — mécanisme `buildPageContentBlocks` générique |

---

## 5. Limites restantes

- **PROMPT-GOV-001** : méta-sync Notion — arbitrage recommandé avant publication (comme UXUI-011).
- **PROMPT-ROLE-003** : extraction méthode rôle — formalisation fichier sous `prompts/roles/` recommandée avant statut Tested.
- Aucun des 12 prompts n'a encore de **fichier prompt formalisé** sous `prompts/<famille>/` (hors ARCH/SEC/QA déjà publiés).
- Pas de **`update prompt`** ; pas de **batch**.
- Publication future en **Draft** ; revue manuelle obligatoire.

---

## 6. Garde-fous

- [x] pas de publication Notion ;
- [x] pas d'appel API ;
- [x] pas de `create prompt` ;
- [x] pas de secret affiché ;
- [x] pas de delivery ouvert.

---

## 7. Conclusion

Le schéma CMP Prompt est **prêt pour le lot final** si les sources sont jugées suffisantes en revue manuelle. La publication reste à réaliser dans une **tâche dédiée** après revue du payload consolidé.

---

*Décision technique CMP-001 — extension schéma lot final Prompt Library — gouvernance SFIA — non publié dans Notion.*
