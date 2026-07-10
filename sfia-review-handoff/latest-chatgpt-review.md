---
status: temporary-review-handoff
branch: sfia/review-handoff
source: .tmp-sfia-review/chatgpt-review.md
canonical: false
merge_to_main: forbidden
updated_for: PR 3 figma visual contract draft
---

# Review pack — Cycle Capitalisation PR 3 — Figma visual contract / Figma-to-code

**Date et heure de revue :** 2026-07-10 23:18 CEST (UTC+0200)

**Cycle :** 15 — Capitalisation / REX — PR 3 Figma visual contract  
**Branche :** `capitalization/sfia-v2.5-figma-visual-contract` @ `393a34c`  
**Base :** `main` @ `393a34c` (post PR #155)  
**Profil :** Capitalization — Standard  
**Niveau review pack :** **full**  
**Gouvernance :** document candidate — **aucun commit PR 3 à cette étape**

> Review pack **mono-cycle PR 3** — hors commit sur branche PR 3 — **non stub final**.

---

## 1. Objectif PR 3

Formaliser le standard SFIA v2.5 candidate **Figma visual contract / Figma-to-code** pour empêcher les verdicts UX/UI trop optimistes : gate Review UX/Figma, contrat visuel avant code, comparaison Figma vs Runtime, capture runtime obligatoire, interdiction `NO DELIVERY REQUIRED` / « aligné Figma » sans comparaison capture.

---

## 2. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| pwd | `/Users/morris/Projects/sfia-workspace` ✅ |
| Branche active | `capitalization/sfia-v2.5-figma-visual-contract` ✅ |
| HEAD base | `393a34c` ✅ |
| PR #155 dans origin/main | ✅ confirmé |
| Fichiers tracked modifiés | 3 (périmètre autorisé) ✅ |
| Commit PR 3 | ❌ non (conforme) |
| `sfia-review-handoff/` sur branche PR 3 | ❌ absent ✅ |

### git status --short (extrait)

```
 M method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
 M method/sfia-fast-track/core/sfia-cycle-routing-guide.md
 M prompts/templates/sfia-cycle-execution-template.md
?? .tmp-sfia-review/
```

---

## 3. Git Review Index

```text
Git Review Index
- base branch : main @ 393a34c
- HEAD avant : 393a34c
- HEAD après : 393a34c (pas de commit PR 3)
- fichiers modifiés :
  - prompts/templates/sfia-cycle-execution-template.md
  - method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
  - method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- fichiers créés : aucun versionné
- commits créés : aucun (PR 3)
- tests / validations : diff stat ; name-status ; scope ; markdown
- diff stat : 3 files, +198 / -4
- diff name-status : 3 × M
- décisions Morris requises : GO commit PR 3 ; GO push/PR/merge
- review pack : full
- réserves : voir §10
```

---

## 4. Sources consultées (références — sans copie intégrale)

| Source | Rôle | Sections |
|--------|------|----------|
| `method/.../2026-07-10-sfia-v2.5-chantiers360-post-mvp-rex-roadmap.md` | Cadrage PR 3 | §5.4 Figma visual contract ; §6 PR 3 ; O6, I4, I7 |
| `prompts/templates/sfia-cycle-execution-template.md` | Cible §6.6 | Bloc UX/UI + Figma existant |
| `sfia-chatgpt-cursor-operating-model.md` | Cible §18.2.9 | Rôles Figma-to-code |
| `sfia-cycle-routing-guide.md` | Pointeur | §2 complément |
| `sfia-v2.5-project-cycles-method-candidate.md` | Contexte §4.4 UX/UI | Figma, gates |
| `projects/.../r-ux-01-prochaines-actions-figma-to-code-gap-review.md` | Ancrage REX | §1 bis correction verdict ; §4 bis grille runtime |
| `projects/.../r-ux-01-prochaines-actions-figma-brief.md` | Contexte design | lecture seule |
| `projects/.../r-ux-01-prochaines-actions-ux-review.md` | Contexte UX | lecture seule |
| `projects/.../inc-05/qa-reserves.md` | R-UX-01 statut | lecture seule |

**Extrait utile (gap review §1 bis — leçon capitalisée) :**

> La revue initiale n'aurait pas dû conclure `NO DELIVERY REQUIRED` sans capture runtime comparée à la frame Figma — ou sans verdict limité à `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED`.

---

## 5. Fichiers modifiés — synthèse

### 5.1 `prompts/templates/sfia-cycle-execution-template.md` (+159 / -4)

**§6.6** refondu en **Figma visual contract / Figma-to-code** :

- A. Cas d'usage (5 cas)
- B. Gate simple Review UX/Figma (Structure / Fonctionnel / Visuel / Runtime / Verdict)
- C. Règles Cursor obligatoires (MCP, frames, comparaison)
- D. Table « Contrat visuel Figma extrait » + règle avant code
- E. Contenu minimal contrat
- F. Règle MCP Figma (structure ≠ fidélité)
- G. Runtime screenshot obligatoire
- H. Table « Figma vs Runtime » + statuts
- I. Verdicts autorisés (6 verdicts + conditions `NO DELIVERY REQUIRED`)
- J. Règle dure capitalisée
- K. Stop conditions Figma (9 cas)

**§8** — stop conditions 27–29 Figma visual contract

### 5.2 `sfia-chatgpt-cursor-operating-model.md` (+41)

**§18.2.9** — Figma visual contract / Figma-to-code : rôles ChatGPT, Cursor, Git, Morris + règle dure

### 5.3 `sfia-cycle-routing-guide.md` (+2)

Pointeur §2 — standard §6.6 template ; aucun verdict visuel fort sans contrat + comparaison runtime

---

## 6. Éléments intégrés — checklist

| Élément | Statut |
|---------|--------|
| Gate simple Review UX/Figma | ✅ template §6.6.B |
| Design extraction contract avant code | ✅ template §6.6.D |
| Table « Contrat visuel Figma extrait » | ✅ template §6.6.D |
| Table « Figma vs Runtime » | ✅ template §6.6.H |
| Runtime screenshot obligatoire | ✅ template §6.6.G |
| Interdiction NO DELIVERY sans comparaison | ✅ template §6.6.B, I |
| Verdicts FIGMA CONTRACT / REVIEW INCONCLUSIVE | ✅ template §6.6.I |
| Règle MCP Figma insuffisant seul | ✅ template §6.6.F, J |
| Stop conditions Figma | ✅ template §6.6.K + §8.27–29 |
| Operating model rôles | ✅ §18.2.9 |
| Routing guide pointeur | ✅ §2 |
| Document standard dédié séparé | ❌ non créé — template + operating suffisent |

---

## 7. Garde-fous confirmés

| Garde-fou | Statut |
|-----------|--------|
| SFIA v2.5 candidate — pas baseline | ✅ |
| Aucun fichier Chantiers360 modifié | ✅ |
| Aucun SFIA v3 / .sfia / MCP | ✅ |
| Aucun commit/push/PR PR 3 | ✅ |
| main inchangé | ✅ |
| sfia-review-handoff/ absent sur branche PR 3 | ✅ |

---

## 8. Validations

- [x] `git diff --stat` — 3 fichiers, +198/-4
- [x] `git diff --name-status` — 3 M périmètre autorisé
- [x] Aucun fichier Chantiers360 / SFIA v3 / .sfia modifié
- [x] Review pack full — non stub final
- [x] `.tmp-sfia-review/` non staged

---

## 9. Décisions Morris requises

| # | Question |
|---|----------|
| 1 | GO contenu draft PR 3 (3 fichiers méthode) ? |
| 2 | GO commit / push / PR / merge PR 3 ? |
| 3 | Seuils ou ajustements verdicts Figma ? |

---

## 10. Réserves

| # | Réserve | Sévérité |
|---|---------|----------|
| R1 | Pas de document standard dédié `sfia-v2.5-figma-visual-contract.md` — intégration template §6.6 choisie | Info |
| R2 | Captures runtime non versionnées dans Git — référencées dans review pack/rapport uniquement | Attendue |
| R3 | MCP Figma disponibilité variable — stop conditions documentées | Mineure |

---

## 11. Verdict review pack

**PR 3 FIGMA VISUAL CONTRACT DRAFT READY — AWAITING MORRIS REVIEW / COMMIT DECISION**
