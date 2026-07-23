# SFIA Review Pack — FULL — UX Validation Studio Conversational Flow

## Niveau
FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure Truth Check | 2026-07-23 12:31:32 CEST (+0200) |
| Fuseau | Europe/Paris |
| Cycle | 4 — UX/UI · UX Validation — Studio Conversational Flow |
| Profil | Critical |
| Typologie | DOC / UX / Figma |
| Gate consommé | `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW` |
| Worktree | /Users/morris/Projects/sfia-workspace-d1-conversational-convergence |
| Branche | `ux/sfia-studio-d1-conversational-convergence` |
| HEAD initial | `5cb285a78ed59bab09953bf0066b8f842b38ebde` |
| HEAD final | `7dc6f9fc7e16f13de08a1003b492b0b6e243f05e` |
| origin/main | `2014e941f548c519d152ebc70d0d4ddad29a6397` |
| merge-base | `416af8a5b3a8e41a996cfc52220465ab0a5b13ca` |
| Commit local | `docs(sfia-studio): validate D1 conversational flow decisions` |
| Push UX | **non** |
| Code modifié | **non** |
| Doc 86 | **absent** |

## Décisions Morris validées (2026-07-23)

| ID | Décision |
|----|----------|
| CC-D01 | Option A — conversation + panneau vivant + confirmations structurantes |
| CC-D03 | Panneau sticky ; 360–400@1440 ; ~320@1280 ; sheet ≤1024 ; état utile ; pas de CKC brut |
| CC-D05 | Épistémologie distincte ; gates visibles ; métier + ID SFIA secondaire ; pas de CTA générique |
| CC-D06 | 3 niveaux de confirmation ; explicite avant mutation |
| CC-D12 | Fallback CKC silencieux UI ; audit interne seulement |
| CC-D13 | Project ≠ Cycle ; anti-claims projet via cycle |

**Encore ouvertes (12) :** CC-D02 · D04 · D07 · D08 · D09 · D10 · D11 · D14 · D15 · D16 · D17 · D18.

## Verdict

**STUDIO CONVERSATIONAL FLOW UX VALIDATED — FUNCTIONAL DESIGN REQUIRED**

## Gate suivant candidat

`GO CONCEPTION FONCTIONNELLE — STUDIO CKC CONTRACT`

---

## 1. Local Git Truth Check

| Contrôle | Résultat |
|----------|----------|
| branche | `ux/sfia-studio-d1-conversational-convergence` |
| HEAD initial | `5cb285a…` (confirmé) |
| origin/main | `2014e941…` |
| merge-base | `416af8a…` |
| staged initial | vide |
| untracked | `.tmp-sfia-review/` |
| lock | NO_LOCK |
| docs 87/88/89/README | présents |
| remote UX | absente — non poussée |
| stop | aucun |

---

## 2. CKC et fallback

Cycle 4 absent · fallback carte synthétique + v2.6 · silencieux UI (CC-D12) · aucune autorité · frame CC-15 sans jargon CKC.

---

## 3. Sources consultées

Template · routing · OM · KL · PGE · carte CKC · docs 87/88/89/README · handoff `dd03775…` · Figma MCP page D1.

---

## 4. Figma initial → final

| | Initial | Final |
|--|---------|-------|
| fileKey | `8xR5zSTfGtEVZSr6KK8Gww` | idem |
| page | D1 LF `0:1` | idem |
| frames | CC-01…12 | CC-01…**17** |
| desktop | 1440×1024 | idem |
| mobile | 390×844 | CC-12 + **CC-17** |

### Frames modifiées

| Frame | node-id | Changement |
|-------|---------|------------|
| CC-03 | `2:48` / panel `2:53` | Panneau Projet/Cycle vivant |
| CC-05 | panel `2:102` | Panneau archi + gate ADR |
| CC-06 | panel `2:136` | Panneau reprise NO_MUTATION |

### Frames créées

| Frame | node-id | Taille | Décision |
|-------|---------|--------|----------|
| CC-13 Gate Morris et décisions | `6:49` | 1440×1024 | CC-D05 |
| CC-14 Confirmation structurante N2 | `7:2` | 1440×1024 | CC-D06 |
| CC-15 Fallback silencieux | `7:31` | 1440×1024 | CC-D12 |
| CC-16 Erreur et blocage | `7:56` | 1440×1024 | CC-D05 |
| CC-17 Mobile sheet état projet | `7:79` | 390×844 | CC-D03 |

### Preuves Figma (liens)

- https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=2-48
- https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=6-49
- https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=7-2
- https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=7-31
- https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=7-56
- https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=7-79

Captures MCP obtenues pour CC-03, CC-13, CC-15 (screenshots session).

---

## 5. Scénarios validés (documentaire + Figma)

| # | Scénario | Preuve |
|---|----------|--------|
| 1 | Cadrage | CC-03 + CC-13 + CC-14 |
| 2 | Architecture technique | CC-05 panneau gate ADR |
| 3 | QA | CC-15 réserves · anti UX READY |
| 4 | Cycle sans CKC | CC-15 silencieux |
| 5 | Création | CC-09 + CC-D06/13 |
| 6 | Mobile | CC-12 + CC-17 sheet |

---

## 6. Accessibilité (contrat)

Navigation clavier · focus visible · labels texte · aria-live · aria-modal/focus trap confirmations · retour de focus · sheet accessible · pas de dépendance exclusive couleur · cibles ≥40 px LF · contraste LF à renforcer HF · structure titres.

---

## 7. Fichiers créés/modifiés

| Fichier | Action |
|---------|--------|
| `87-…ux-functional-design.md` | M |
| `88-…visual-contract.md` | M |
| `89-…decision-pack.md` | M |
| `README.md` | M |
| Figma D1 page | M + A frames |
| `.tmp-sfia-review/chatgpt-review.md` | remplacé |

---

## 8. Validations Git

| Contrôle | Résultat |
|----------|----------|
| git diff --check | PASS |
| seuls docs UX + README | PASS |
| 6 décisions validées seulement | PASS |
| 12 ouvertes conservées | PASS |
| pas de code / doctrine | PASS |
| branche UX non poussée | PASS |
| claims interdits absents | PASS |

---

## 9. Réserves / dette / non exécuté

Voir `89` §11–13. Points : LPV ouverte · runtime ≠ Option A · HF limité · 12 décisions ouvertes · pas de push/PR/Delivery/runtime.

---

## 10. État Git final

```
branche: ux/sfia-studio-d1-conversational-convergence
HEAD: 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
push UX: non
```

---

## 11. Diff complet exploitable — commit `7dc6f9f`

```diff
diff --git a/projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md b/projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md
index 3ac72f8..7b3019b 100644
--- a/projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md
+++ b/projects/sfia-studio/87-d1-conversational-convergence-ux-functional-design.md
@@ -3,20 +3,21 @@
 | Métadonnée | Valeur |
 |------------|--------|
 | **Document** | `87-d1-conversational-convergence-ux-functional-design.md` |
-| **Complète** | `88` (visuel) · `89` (decision pack & convergence) |
-| **Statut** | `ux-design-candidate` — **recommandation Cursor** ; **décision Morris requise** |
-| **Cycle** | 4 — UX/UI · UX D1 — Conversational Convergence |
+| **Complète** | `88` (visuel) · `89` (decision pack & validation) |
+| **Statut** | `ux-flow-validated-partial` — Option A **validée** (CC-D01) · 6 décisions Morris · runtime **non** matché |
+| **Cycle** | 4 — UX/UI · UX Validation — Studio Conversational Flow |
 | **Profil** | Critical |
-| **Gate consommé** | `GO UX D1 — CONVERSATIONAL CONVERGENCE` (reprise) ; conception initiale `GO UX/UI — D1 CONVERSATIONAL CONVERGENCE DESIGN` |
+| **Gate consommé** | `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW` |
 | **Branche** | `ux/sfia-studio-d1-conversational-convergence` |
 | **Worktree** | `/Users/morris/Projects/sfia-workspace-d1-conversational-convergence` |
-| **SHA de départ** | `c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9` (HEAD D1 post-timeout ; contenu mergé `main` via PR #257 squash `499c6b3…`) |
-| **Base canonique** | `origin/main` @ `2014e941…` (PR #258 CKC routing) — branche UX **non rebasée** dans ce cycle |
+| **SHA de départ (validation)** | `5cb285a78ed59bab09953bf0066b8f842b38ebde` |
+| **Base canonique** | `origin/main` @ `2014e941…` (PR #258 CKC routing) |
 | **Dépendance** | Branche D1 `delivery/sfia-studio-d1-shared-platform-integration` |
 | **Baseline méthode** | SFIA v2.6 |
-| **CKC** | Cycle 4 — **absent** · fallback `02-fifteen-cycles-synthetic-map.md` + méthode v2.6 · experimental cognitive guidance · **aucune autorité d’exécution** |
-| **Doc 86** | **Réservé** à la clôture Live Product Validation — **non créé** |
-| **Gate suivant candidat** | `GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE` (**non consommé**) |
+| **CKC** | Cycle 4 — **absent** · fallback silencieux UI (CC-D12) · **aucune autorité** |
+| **Doc 86** | **Réservé** LPV — **non créé** |
+| **Décisions validées** | CC-D01 · CC-D03 · CC-D05 · CC-D06 · CC-D12 · CC-D13 — **2026-07-23** |
+| **Gate suivant candidat** | `GO CONCEPTION FONCTIONNELLE — STUDIO CKC CONTRACT` (**non consommé**) |

 > Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris requise**.
 > Ce document **ne décide pas**. Aucune claim « DESIGN APPROVED », « D1 COMPLETE », « LIVE PRODUCT VALIDATED », « CYCLE OPENED ».
@@ -456,29 +457,30 @@ Scénario LPV « Créer une application de suivi de contrats » + vagues / contr
 | A11y | ●●● | ●● | ●● |
 | Zéro mutation implicite | ●●● | ●●● | ●●● |

-**Recommandation Cursor :** **Option A**, avec confirmation plein cadre (emprunt léger à C) et matching compact. **Décision Morris requise.**
+**Recommandation Cursor :** **Option A**, avec confirmation plein cadre (emprunt léger à C) et matching compact.
+
+**Décision Morris — 2026-07-23 (CC-D01) :** Option A **validée** — conversation principale + panneau vivant + confirmations structurantes. Stepper principal et workspace multi-panneaux complexes **hors MVP**.

 ---

-## 15. Décisions Morris requises
+## 15. Décisions Morris
+
+### Validées — 2026-07-23
+
+| ID | Décision |
+|----|----------|
+| CC-D01 | Option A — conversation + panneau vivant + confirmations structurantes |
+| CC-D03 | Panneau sticky ; 360–400@1440 ; ~320@1280 ; sheet ≤1024 ; état utile ; pas de CKC brut |
+| CC-D05 | Épistémologie distincte ; gates visibles ; métier + ID SFIA secondaire ; pas de CTA générique |
+| CC-D06 | 3 niveaux de confirmation ; explicite avant mutation |
+| CC-D12 | Fallback CKC silencieux UI ; audit interne seulement |
+| CC-D13 | Project ≠ Cycle ; anti-claims projet via cycle |

-Registre formalisé **CC-D01…CC-D18** dans `89-d1-conversational-convergence-decision-pack.md` §9 (colonne Décision Morris **ouverte**).
+Registre complet : `89` §9.

-Synthèse (inchangée en substance) :
+### Encore ouvertes

-1. Architecture d’information (A / B / C / hybride) — **CC-D01**.
-2. Conversation principale vs étapes souples — **CC-D02**.
-3. Panneau latéral vivant (contenu §89.4 ; largeur) — **CC-D03**.
-4. Visibilité cycle / décisions / gates — **CC-D05**.
-5. Maturité (bandes + dimensions) — **CC-D11**.
-6. Timing matching / weak matches — **CC-D15 / D16**.
-7. `DynamicProposal` — **CC-D14**.
-8. Confirmations structurantes — **CC-D06**.
-9. Responsive / mobile — **CC-D08 / D09**.
-10. Fallback CKC silencieux — **CC-D12**.
-11. Projet vs cycle — **CC-D13**.
-12. Trajectoire Figma → validation → (plus tard) Delivery — **CC-D18**.
-13. Doctrine SFIA / onze CKC — **cycle méthode séparé** (hors périmètre).
+CC-D02 · CC-D04 · CC-D07 · CC-D08 · CC-D09 · CC-D10 · CC-D11 · CC-D14 · CC-D15 · CC-D16 · CC-D17 · CC-D18.

 ---

@@ -486,12 +488,10 @@ Synthèse (inchangée en substance) :

 - Code applicatif / prompts / méthode / routing CKC / PGE.
 - Création des onze CKC · promotion baseline.
-- Correction scoring C3.
-- Live GPT supplémentaire.
-- B′ · Cycle runtime · GuidedSession.
+- Correction scoring C3 · Live GPT · GuidedSession.
 - Clôture LPV (doc **86**).
-- Push / PR / merge de la branche UX · modification `main`.
-- Design HF final · Delivery.
+- Push / PR / merge UX · modification `main`.
+- Design HF final · Delivery · runtime validation.

 ---

@@ -499,26 +499,25 @@ Synthèse (inchangée en substance) :

 | Dette | Note |
 |-------|------|
-| Schéma C2 actuel ≠ DynamicProposal | Mapping Delivery requis |
-| Confidence 0–1 vs bandes maturité | Remplacement UX + éventuellement contrat |
-| Alternatives non activables | Remplacer par propositions à `effect` |
-| Dualité OPS1 vs D1 historique | Capitaliser ; ne pas élargir ici |
-| LPV incomplète | Observations partielles U01 |
-| Figma LF seulement | Enrichissement panneau vivant après CC-D03 |
-| CKC UX absent | Fallback uniquement — ne pas inventer |
+| Schéma C2 ≠ DynamicProposal | CC-D14 ouverte |
+| Confidence 0–1 vs bandes | CC-D11 ouverte |
+| Alternatives non activables | `effect` bornés |
+| LPV incomplète | Doc 86 |
+| Runtime ≠ Option A | Conception fct / Delivery futurs |
+| HF / tokens | Hors LF |

 ---

 ## 18. Gate suivant candidat

-`GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`
-puis `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW`.
+`GO CONCEPTION FONCTIONNELLE — STUDIO CKC CONTRACT`

-**Non** : Delivery tant que décisions + preuves insuffisantes.
+**Non** Delivery tant que conception + preuves runtime insuffisantes.

 ---

 ## 19. Verdict documentaire

-Conception fonctionnelle **complète au niveau candidat**, alignée doctrine conversationnelle + CKC opaque.
-Validation produit = **MORRIS UX DECISIONS REQUIRED**.
+Architecture Option A et règles CC-D03/05/06/12/13 **validées Morris**.
+Runtime **non** matché · Delivery **non** autorisé.
+Verdict : aligné sur **STUDIO CONVERSATIONAL FLOW UX VALIDATED — FUNCTIONAL DESIGN REQUIRED**.
diff --git a/projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md b/projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md
index 63523a4..044f300 100644
--- a/projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md
+++ b/projects/sfia-studio/88-d1-conversational-convergence-visual-contract.md
@@ -4,14 +4,16 @@
 |------------|--------|
 | **Document** | `88-d1-conversational-convergence-visual-contract.md` |
 | **Complète** | `87` (conception) · `89` (decision pack) |
-| **Statut** | `visual-contract-candidate` — basse/moyenne fidélité ; **non HF** · **non visual-validated** |
-| **Gate** | `GO UX D1 — CONVERSATIONAL CONVERGENCE` (reprise) |
+| **Statut** | `visual-contract-validated-lf` — LF aligné décisions Morris · **non HF** · **non runtime-matched** · **non visual-validated runtime** |
+| **Gate** | `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW` |
 | **Figma file** | `8xR5zSTfGtEVZSr6KK8Gww` |
 | **Figma URL** | https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww |
 | **Page** | `D1 — Conversational Convergence (LF)` |
 | **Fidélité** | Wireframes basse / moyenne — **pas** design final |
 | **Fichier Studio historique** | `IS70XDnBMvZuJYmaI5eZT2` — **non modifié** (isolation volontaire) |
-| **CKC en UI** | **Interdit** — aucune frame « formulaire CKC » |
+| **CKC en UI** | **Interdit** — fallback silencieux (CC-D12) |
+| **Décisions validées** | CC-D01 · CC-D03 · CC-D05 · CC-D06 · CC-D12 · CC-D13 — **2026-07-23** |
+| **Architecture** | **Option A validée** (CC-D01) |

 ---

@@ -30,26 +32,29 @@ Ces dimensions sont des **références de conception**, pas une décision de sup

 ## 2. Structure des écrans (Option A recommandée)

-### Desktop 1440
+### Desktop 1440 — **CC-D01 / CC-D03 validés**

 ```
 ┌──────────────────────────────────────────────────────────────┐
 │ App chrome SFIA Studio (existant)                            │
 ├────────────────────────────┬─────────────────────────────────┤
-│ CONVERSATION (scroll)      │ SYNTHÈSE VIVANTE (sticky)       │
-│  · messages humain/GPT     │  · intention / objectif         │
-│  · challenges inline       │  · hypothèses taguées           │
-│  · cartes trajectoires     │  · maturité (bande)             │
-│  · match contextuel        │  · questions ouvertes           │
-│                            │  · sources (repli)              │
+│ CONVERSATION (scroll)      │ ÉTAT PROJET VIVANT (sticky)     │
+│  · messages humain/GPT     │  · Projet / Cycle actif         │
+│  · challenges inline       │  · objectif / périmètre         │
+│  · cartes trajectoires     │  · progression (bande)          │
+│  · match contextuel        │  · hypothèses / décisions       │
+│                            │  · gate + prochaine étape       │
+│                            │  · risques / réserves / livrables│
 ├────────────────────────────┴─────────────────────────────────┤
 │ COMPOSER fixe : [ champ libre multipligne ] [ Envoyer ]      │
 │ Micro-actions contextuelles au-dessus du composer (chips)    │
 └──────────────────────────────────────────────────────────────┘
 ```

+**Panneau :** 360–400 px @1440 · ~320 px @1280 · sticky · scroll interne.
 **Zones fixes :** chrome · composer · (option) header session.
 **Zones défilantes :** fil conversation · contenu panneau si overflow.
+**Pas de stepper principal** (CC-D01).

 ### Hiérarchie visuelle

@@ -242,30 +247,37 @@ Mentions obligatoires candidates :
 | fileKey | `8xR5zSTfGtEVZSr6KK8Gww` |
 | URL | https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww |
 | Page | `D1 — Conversational Convergence (LF)` · node page `0:1` |
-| Vérification MCP | 2026-07-23 — `get_metadata` : **12 frames** présentes, dimensions confirmées |
-| Modifications ce cycle | **Aucune** écriture Figma (contrat documentaire enrichi seulement) |
-
-| # | Frame | node-id | Taille | Rôle | Confirmé |
-|---|-------|---------|--------|------|----------|
-| 01 | `CC-01 Intake initial` | `2:2` | 1440×1024 | Composer vide | oui |
-| 02 | `CC-02 Exploration` | `2:23` | 1440×1024 | Fil + challenges | oui |
-| 03 | `CC-03 Synthèse vivante` | `2:48` | 1440×1024 | Panneau peuplé | oui |
-| 04 | `CC-04 Challenge hypothèse` | `2:72` | 1440×1024 | Chip correction | oui |
-| 05 | `CC-05 Trajectoires candidates` | `2:97` | 1440×1024 | Cartes dynamiques | oui |
-| 06 | `CC-06 Matching fort` | `2:131` | 1440×1024 | Carte reprise | oui |
-| 07 | `CC-07 Matching faible multiple` | `2:151` | 1440×1024 | Accordion | oui |
-| 08 | `CC-08 Préparation bornée` | `2:169` | 1440×1024 | Contrat effets | oui |
-| 09 | `CC-09 Confirm création` | `2:186` | 1440×1024 | C4 create | oui |
-| 10 | `CC-10 Confirm reprise NO_MUTATION` | `2:201` | 1440×1024 | C4 existing | oui |
-| 11 | `CC-11 Pause abandon` | `2:217` | 1440×1024 | Dialog | oui |
-| 12 | `CC-12 Mobile exploration` | `2:230` | 390×844 | Sheet synthèse | oui |
-
-**Prototype cliquable minimal (nominal P1) :**
-`01 → 02 → 03 → 05 → 08 → 09` (reactions ON_CLICK sur frames).
-
-Lien frame 01 : https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=2-2
-
-**Non framé encore (documentaire `89`) :** états fallback CKC silencieux · contradiction · Git indisponible · gate Morris générique · panneau vivant complet §4.
+| Vérification MCP | 2026-07-23 — **17 frames** (CC-01…CC-17) |
+| Modifications ce cycle | Panneaux vivants CC-03/05/06 · créations CC-13…CC-17 |
+
+| # | Frame | node-id | Taille | Rôle | Décision | Confirmé |
+|---|-------|---------|--------|------|----------|----------|
+| 01 | `CC-01 Intake initial` | `2:2` | 1440×1024 | État initial | CC-D01 | oui |
+| 02 | `CC-02 Exploration` | `2:23` | 1440×1024 | Conversation active | CC-D01 | oui |
+| 03 | `CC-03 État projet vivant` | `2:48` | 1440×1024 | Panneau Projet/Cycle enrichi | CC-D03/13 | oui (modifié) |
+| 04 | `CC-04 Challenge hypothèse` | `2:72` | 1440×1024 | Hypothèses | CC-D05 | oui |
+| 05 | `CC-05 Trajectoires candidates` | `2:97` | 1440×1024 | Options / reco + panneau archi | CC-D05 | oui (panneau modifié) |
+| 06 | `CC-06 Matching fort` | `2:131` | 1440×1024 | Reprise + panneau | CC-D13 | oui (panneau modifié) |
+| 07 | `CC-07 Matching faible multiple` | `2:151` | 1440×1024 | Weak matches | — | oui |
+| 08 | `CC-08 Préparation bornée` | `2:169` | 1440×1024 | Préparation | CC-D06 | oui |
+| 09 | `CC-09 Confirm création` | `2:186` | 1440×1024 | Création Project | CC-D06/13 | oui |
+| 10 | `CC-10 Confirm reprise NO_MUTATION` | `2:201` | 1440×1024 | Reprise | CC-D06/13 | oui |
+| 11 | `CC-11 Pause abandon` | `2:217` | 1440×1024 | Dialog N1/N2 | CC-D06 | oui |
+| 12 | `CC-12 Mobile exploration` | `2:230` | 390×844 | Mobile + FAB | CC-D03 | oui |
+| 13 | `CC-13 Gate Morris et décisions` | `6:49` | 1440×1024 | Gate + épistémologie | CC-D05 | **créé** |
+| 14 | `CC-14 Confirmation structurante N2` | `7:2` | 1440×1024 | Modale structurante | CC-D06 | **créé** |
+| 15 | `CC-15 Fallback silencieux (sans CKC UI)` | `7:31` | 1440×1024 | Continuité sans jargon CKC | CC-D12 | **créé** |
+| 16 | `CC-16 Erreur et blocage` | `7:56` | 1440×1024 | Blocage explicite | CC-D05 | **créé** |
+| 17 | `CC-17 Mobile sheet état projet` | `7:79` | 390×844 | Sheet + focus trap | CC-D03 | **créé** |
+
+**Prototype nominal (cadrage) :** `01 → 02 → 03 → 13 → 14 → 09`
+
+Liens utiles :
+- CC-03 : https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=2-48
+- CC-13 : https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=6-49
+- CC-15 : https://www.figma.com/design/8xR5zSTfGtEVZSr6KK8Gww?node-id=7-31
+
+**Accessibilité documentaire (contrat) :** landmarks conversation/panneau/composer · labels texte (pas couleur seule) · focus trap sheet/modale · Esc ferme · retour de focus · `aria-live` polite messages / assertive blocage · cibles ≥ 40 px LF · contraste LF à renforcer en HF.

 ---

@@ -282,10 +294,11 @@ Réutiliser tokens Studio P0 quand Delivery viendra ; ce fichier LF n’impose p
 - Fichier Figma **nouveau** (isolation) — pas encore fusionné au file `IS70XDnBMvZuJYmaI5eZT2`.
 - Fidélité LF : gris / structure, pas polish marque.
 - Option A illustrée ; B/C non framées exhaustivement (décrites dans 87 / 89).
-- Écart panneau LF ↔ panneau vivant cible (§4 / `89` §4) — **CC-R04**.
+- Écart panneau LF ↔ panneau vivant cible (§4 / `89` §4) — **CC-R04** partiellement levé (CC-03/13/17) ; densité HF encore limitée.
+- Douze décisions CC encore ouvertes (D02/04/07–11/14–18).
 - LPV non clôturée : copies susceptibles d’évoluer après doc 86.
-- Prototype = parcours nominal seulement.
-- **Pas** de claim « visual validated » ni match runtime.
+- Prototype = parcours nominal + scénarios validation.
+- **Pas** de claim « visual validated » runtime ni « RUNTIME MATCHED ».

 ## 16. Éléments non conçus (volontairement)

@@ -299,7 +312,8 @@ Réutiliser tokens Studio P0 quand Delivery viendra ; ce fichier LF n’impose p

 ---

-## 17. Décision Morris
+## 17. Décision Morris / validation

-Le contrat visuel est **prêt pour arbitrage**, pas approuvé.
-Prochain gate candidat : décisions Morris (`89`) puis validation Figma/flow — **pas** Delivery tant que preuves insuffisantes.
+Six décisions **validées 2026-07-23** (CC-D01/03/05/06/12/13) — contrat LF aligné.
+**Pas** HF · **pas** runtime matched · **pas** Delivery.
+Gate suivant : `GO CONCEPTION FONCTIONNELLE — STUDIO CKC CONTRACT`.
diff --git a/projects/sfia-studio/89-d1-conversational-convergence-decision-pack.md b/projects/sfia-studio/89-d1-conversational-convergence-decision-pack.md
index 4b5c653..85ae8a4 100644
--- a/projects/sfia-studio/89-d1-conversational-convergence-decision-pack.md
+++ b/projects/sfia-studio/89-d1-conversational-convergence-decision-pack.md
@@ -4,18 +4,20 @@
 |------------|--------|
 | **Document** | `89-d1-conversational-convergence-decision-pack.md` |
 | **Complète** | `87` (conception) · `88` (contrat visuel) |
-| **Statut** | `ux-decision-pack-candidate` — **recommandations Cursor** ; **Décision Morris** non remplie sauf trace Git antérieure |
-| **Cycle** | 4 — UX/UI · UX D1 — Conversational Convergence |
+| **Statut** | `ux-flow-validated-partial` — **6 décisions Morris validées** (CC-D01/03/05/06/12/13) · 12 ouvertes · **pas** Delivery · **pas** runtime matched |
+| **Cycle** | 4 — UX/UI · UX Validation — Studio Conversational Flow |
 | **Profil** | Critical |
-| **Gate consommé** | `GO UX D1 — CONVERSATIONAL CONVERGENCE` |
+| **Gate consommé** | `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW` |
 | **Branche** | `ux/sfia-studio-d1-conversational-convergence` |
 | **Baseline méthode** | SFIA v2.6 |
-| **CKC** | Cycle 4 UX/UI — **absent détaillé** · fallback carte synthétique + méthode v2.6 · **aucune autorité d’exécution** |
+| **CKC** | Cycle 4 UX/UI — **absent détaillé** · fallback carte synthétique + méthode v2.6 · **aucune autorité d’exécution** · **silencieux UI** (CC-D12) |
 | **Doc 86** | **Réservé** LPV — **non créé** |
 | **Figma** | `8xR5zSTfGtEVZSr6KK8Gww` — page `D1 — Conversational Convergence (LF)` |
+| **Décisions validées** | CC-D01 · CC-D03 · CC-D05 · CC-D06 · CC-D12 · CC-D13 — **2026-07-23** |
+| **Gate suivant candidat** | `GO CONCEPTION FONCTIONNELLE — STUDIO CKC CONTRACT` (**non consommé**) |

 > Formulations : **Observation** · **Hypothèse** · **Option** · **Recommandation** · **Décision Morris**.
-> Ce document **ne décide pas**. Aucune claim « UX READY », « VISUAL VALIDATED », « RUNTIME MATCHED », « CKC ADOPTED », « DELIVERY AUTHORIZED ».
+> Claims interdits : « UX READY FOR DELIVERY » · « VISUAL VALIDATED » · « RUNTIME MATCHED » · « DELIVERY AUTHORIZED » · « CKC ADOPTED ».

 ---

@@ -117,49 +119,124 @@ Découvrir besoin · clarifier · contester · enrichir · choisir trajectoire

 ---

-## 4. Panneau latéral vivant (« état utile »)
+## 4. Panneau latéral vivant (« état utile ») — **CC-D03 VALIDÉE**

-Limiter le contenu **visible** à :
+### 4.1 Comportement responsive (validé)
+
+| Viewport | Largeur panneau | Comportement |
+|----------|-----------------|--------------|
+| Desktop 1440 | **360–400 px** | Sticky ; hauteur viewport ; scroll interne ; conversation indépendante |
+| Desktop 1280 | **~320 px** | Sticky ; sections compactes ; priorisation du contenu |
+| ≤1024 | Sheet / drawer | Déclencheur visible ; focus trap ; Esc ferme ; retour de focus |
+
+### 4.2 Contenu borné (validé)

 | Bloc | Contenu | Notes |
 |------|---------|-------|
-| Cycle courant | Label candidat ou « non qualifié » | Proposition ≠ cycle ouvert |
+| Projet | Nom + rôle conteneur long terme | **CC-D13** |
+| Cycle actif | Type + intitulé borné | Proposition ≠ ouvert |
 | Objectif | Texte validable | |
 | Périmètre | Texte / bullets | |
-| Progression | Bande qualitative (exploratoire → prête à borner) | Pas de % |
+| Progression | Bande qualitative | Pas de % |
 | Hypothèses | Liste courte taguée | |
-| Décisions validées | Liste humaine | |
+| Décisions validées | Liste humaine | Séparées des ouvertes |
 | Décisions ouvertes | Gate / arbitrages | |
-| Risques | Liste courte | |
-| Réserves | Dont LPV / doctrine | |
-| Livrables | Attendus du cycle / session | |
-| Gate courant | Ex. « Décision humaine » / « Confirmation création » | Libellé métier |
+| Risques / réserves | Listes courtes | |
+| Livrables | Attendus session / cycle | |
+| Gate | Formulation métier + ID SFIA secondaire | **CC-D05** |
 | Prochaine étape | Une phrase | |

-**Interdit en panneau permanent :** dimensions brutes CKC, 25 sections, score % trompeur, « CKC absent », raw digests techniques.
+**Interdit :** dimensions CKC, 25 sections, score %, « CKC absent », digests techniques.
+
+---
+
+## 4bis. Architecture générale — **CC-D01 VALIDÉE**
+
+Cible **validée** :
+
+- conversation dominante ;
+- panneau vivant complémentaire ;
+- confirmations structurantes ;
+- **aucun** stepper principal ;
+- **aucun** workspace multi-panneaux complexe dans le MVP ;
+- artefacts secondaires futurs possibles **sans** remettre en cause la structure A.
+
+---
+
+## 5. Confirmations structurantes — **CC-D06 VALIDÉE**
+
+### Niveau 1 — action réversible
+
+Interaction directe ou confirmation légère · **pas** d’écran plein cadre.
+
+### Niveau 2 — action structurante
+
+Grande modale ou plein cadre · résumé · effets · projet · cycle · périmètre · décisions associées · réversibilité · bouton explicite.
+
+### Niveau 3 — action critique / irréversible
+
+Plein cadre · gate Morris · effets Git/méthode · éléments modifiés · action exacte · avertissement · confirmation explicite · **aucune** activation automatique.
+
+| Parcours | Niveau |
+|----------|--------|
+| Création de projet | 2–3 |
+| Reprise NO_MUTATION | 2 |
+| Validation de cadrage | 2 |
+| Sélection cycle structurant | 2–3 |
+| Changement majeur de périmètre | 2 |
+| Préparation Delivery / push / PR / merge | 3 (futur documenté seulement) |
+
+---
+
+## 5bis. Décisions et gates — **CC-D05 VALIDÉE**
+
+| Statut | Rôle | Visuel |
+|--------|------|--------|
+| Observation | Fait constaté | Tag texte |
+| Hypothèse | À valider / corriger | Tag + actions |
+| Option | Choix possible | Carte |
+| Recommandation | Proposition GPT | Tag — non exécutable |
+| Décision validée | Acte humain explicite | Tag + historique |
+| Décision requise | Attente Morris / humain | Mise en avant |
+| Réserve | Limitation connue | Tag |
+| Blocage | Empêche progression | Banner |

-**Mobile :** bottom sheet / FAB « État » (même contenu).
+Exemple de gate dans le panneau :
+
+```
+Décision requise avant de poursuivre
+Choisir l’architecture cible
+Gate SFIA : GO ARCHITECTURE TECHNIQUE
+```
+
+Aucune validation implicite via CTA générique (« Continuer », « OK »).

 ---

-## 5. Confirmations structurantes
+## 5ter. Fallback CKC — **CC-D12 VALIDÉE** · Projet/Cycle — **CC-D13 VALIDÉE**
+
+**UI :** aucune mention CKC · aucune erreur · aucune dégradation · questions adaptées · continuité.
+
+**Audit interne seulement :** cycle qualifié · CKC absent · fallback activé · source synthétique · couverture incomplète · aucun contrat inventé.

-Confirmation **plein écran ou modale renforcée** lorsque :
+**Projet** = conteneur long terme (objectif global, contexte, parties, décisions structurantes, artefacts, historique).

-| Cas | Gate UX | Mutation |
-|-----|---------|----------|
-| Validation de cadrage (bornage intention/périmètre) | `human_confirm` | Non (état) |
-| Choix de cycle structurant (proposition de cycle) | `morris_go` / humain | Non (préparation) |
-| Modification majeure de périmètre | `human_confirm` | Non jusqu’à confirm |
-| Arbitrage architecture (futur) | `morris_go` | Hors D1 intake |
-| Lancement Delivery | `morris_go` | Hors ce cycle UX |
-| Publication Git / PR / merge | `morris_go` | Hors surface Studio intake |
-| Promotion méthode / baseline | `morris_go` | Interdit ici |
-| Création Project | `human_confirm` | Oui (C4) |
-| Reprise Project | `human_confirm` | NO_MUTATION |
-| Action irréversible | `human_confirm` | Selon effet |
+**Cycle actif** = séquence bornée (type, objectif, statut, progression, gate, livrables, verdict).

-**Règle.** Aucune exécution automatique d’un arbitrage structurant. Composer désactivé seulement pendant modal stricte.
+Exemple panneau :
+
+```
+Projet
+SFIA Studio
+
+Cycle actif
+UX/UI — D1 Conversational Convergence
+
+Statut
+Décisions Morris partiellement validées
+```
+
+Claims **interdits** : projet validé/terminé sur un cycle · projet créé sans mutation confirmée · cycle lancé sans gate réel.

 ---

@@ -284,19 +361,19 @@ Ne pas figer une machine à états Delivery unique sans CC-D01.

 | ID | Sujet | Options | Impacts | Dette | Recommandation ChatGPT / Cursor | Décision Morris |
 |----|-------|---------|---------|-------|----------------------------------|-----------------|
-| CC-D01 | Structure principale écran | A conversation+panneau · B étapes · C workspace hybride | Refonte IntakeView ; a11y ; mobile | Runtime actuel formulaire | **A** + confirmation plein cadre | *(ouverte)* |
+| CC-D01 | Structure principale écran | A conversation+panneau · B étapes · C workspace hybride | Refonte IntakeView ; a11y ; mobile | Runtime actuel formulaire | **A** + confirmation plein cadre | **Décision Morris — 2026-07-23 :** Option A validée — conversation principale + panneau vivant + confirmations structurantes. Pas de stepper principal. Pas de workspace multi-panneaux complexe dans le MVP. |
 | CC-D02 | Conversation dominante vs étapes | Dominante libre · stepper souple | Pédagogie vs liberté | Sync étapes | Dominante libre (A) | *(ouverte)* |
-| CC-D03 | Panneau latéral — largeur / comportement | 360–400 @1440 · 320 @1280 · sheet ≤1024 | Densité ; ignore risque | Refonte layout | Sticky complémentaire `aria` | *(ouverte)* |
+| CC-D03 | Panneau latéral — largeur / comportement | 360–400 @1440 · 320 @1280 · sheet ≤1024 | Densité ; ignore risque | Refonte layout | Sticky complémentaire `aria` | **Décision Morris — 2026-07-23 :** Panneau sticky desktop ; 360–400 px @1440 ; ~320 px @1280 ; sheet/drawer ≤1024 ; contenu borné à l’état utile ; aucune exposition du CKC brut. |
 | CC-D04 | Nav conversation ↔ artefacts | Inline · onglets · drawer | Charge cognitive | — | Inline + sheet preuves | *(ouverte)* |
-| CC-D05 | Visibilité cycle courant + décisions | Toujours · on-demand · desktop-only | Confusion cycle ouvert | Labels anti-claim | Toujours dans panneau (candidat) | *(ouverte)* |
-| CC-D06 | Format confirmations | Plein cadre · panneau · dialog | Erreurs de mutation | Routes | Plein cadre create/reprise ; dialog pause | *(ouverte)* |
+| CC-D05 | Visibilité cycle courant + décisions | Toujours · on-demand · desktop-only | Confusion cycle ouvert | Labels anti-claim | Toujours dans panneau (candidat) | **Décision Morris — 2026-07-23 :** Observations / hypothèses / options / recommandations / décisions validées distinctes ; décisions ouvertes vs validées séparées ; gates visibles dans le panneau ; formulation métier claire + identifiant SFIA secondaire ; aucune validation implicite via CTA générique. |
+| CC-D06 | Format confirmations | Plein cadre · panneau · dialog | Erreurs de mutation | Routes | Plein cadre create/reprise ; dialog pause | **Décision Morris — 2026-07-23 :** Confirmation légère si réversible ; dialog pour pause/action limitée ; plein cadre ou modale renforcée si structurante ; résumé effets / périmètre / réversibilité / gate ; confirmation explicite avant toute mutation. |
 | CC-D07 | Densité compacte vs détaillée | Compact pro · confortable · dense | Lisibilité | — | Compact professionnel | *(ouverte)* |
 | CC-D08 | Responsive | 1440-only · set `88` · mobile first | Coût Delivery | R-UX historique | Set `88` (1440/1280/1024/390) | *(ouverte)* |
 | CC-D09 | Comportement mobile | Sheet synthèse · FAB · split | A11y | Frame CC-12 LF | FAB + sheet | *(ouverte)* |
 | CC-D10 | Historique conversationnel | Linéaire · épisodes repliables | Perf perçue | — | Épisodes + ancre synthèse | *(ouverte)* |
 | CC-D11 | Représentation maturité / sources | Bandes+dimensions · % · masqué | Confiance | Contrat C2 score | Bandes + dimensions courtes ; sources repliées | *(ouverte)* |
-| CC-D12 | Traitement fallback CKC | Silencieux · badge technique · erreur | Confiance ; doctrine | Trace audit | **Silencieux** côté UI | *(ouverte)* |
-| CC-D13 | Distinction projet vs cycle | Labels stricts · fusionnés | Anti-claims | Runtime | Strict : Project ≠ Cycle ouvert | *(ouverte)* |
+| CC-D12 | Traitement fallback CKC | Silencieux · badge technique · erreur | Confiance ; doctrine | Trace audit | **Silencieux** côté UI | **Décision Morris — 2026-07-23 :** Fallback CKC totalement silencieux côté utilisateur ; aucune mention « CKC manquant » ; carte synthétique + méthode v2.6 en interne ; trace audit interne seulement ; aucune invention de contrat. |
+| CC-D13 | Distinction projet vs cycle | Labels stricts · fusionnés | Anti-claims | Runtime | Strict : Project ≠ Cycle ouvert | **Décision Morris — 2026-07-23 :** Séparation stricte — Project = conteneur long terme ; Cycle = séquence de travail bornée ; aucun claim « projet validé / lancé / terminé » à partir du seul état d’un cycle. |
 | CC-D14 | Contrat `DynamicProposal` | Adopter · adapter · différer | Mapping C2 | Schéma | Adopter comme candidat UX | *(ouverte)* |
 | CC-D15 | Timing matching | Immédiat · après synthèse · manuel | Charge | C3 | Après synthèse utile + progressif | *(ouverte)* |
 | CC-D16 | Weak matches | Repliés · masqués · toujours | Confiance | — | Repliés par défaut | *(ouverte)* |
@@ -315,13 +392,14 @@ Ne pas figer une machine à états Delivery unique sans CC-D01.

 ## 10. Trajectoire vers conception fonctionnelle

-**Recommandation (≠ décision).**
+**État.** Six décisions structurantes **validées** (CC-D01/03/05/06/12/13). Douze décisions **encore ouvertes** (CC-D02/04/07–11/14–18).

-1. Morris arbitre **CC-D01…D18** (priorité D01, D03, D05, D06, D12, D13).
-2. Gate candidat : `GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`.
-3. Puis : `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW` (Figma + parcours).
-4. Ensuite seulement : conception fonctionnelle détaillée / Delivery UX (**GO séparés**).
-5. Ne pas ouvrir Delivery tant que décisions + preuves Figma/runtime insuffisantes.
+1. ~~Morris arbitre CC-D01/03/05/06/12/13~~ — **fait 2026-07-23**.
+2. ~~`GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW`~~ — **consommé** (ce cycle).
+3. Gate candidat suivant : `GO CONCEPTION FONCTIONNELLE — STUDIO CKC CONTRACT`.
+4. Décisions ouvertes restantes : arbitrage Morris ultérieur si bloquantes pour conception fct.
+5. Delivery UX : **interdit** tant que conception fct + preuves runtime insuffisantes.
+6. Ne pas conclure RUNTIME MATCHED / UX READY FOR DELIVERY.

 ---

@@ -332,11 +410,13 @@ Ne pas figer une machine à états Delivery unique sans CC-D01.
 | CC-R01 | LPV non clôturée (pas de doc 86) |
 | CC-R02 | Runtime IntakeView ≠ contrat conversationnel |
 | CC-R03 | Figma LF isolé (`8xR5…`) non fusionné au file Studio historique |
-| CC-R04 | Frames LF n’illustrent pas encore tous les blocs « état projet vivant » §4 |
-| CC-R05 | Options B/C non framées exhaustivement |
+| CC-R04 | ~~Panneau vivant non framé~~ — enrichi ce cycle ; densité HF encore limitée |
+| CC-R05 | Options B/C non framées (A validée — B/C écartées pour MVP) |
 | CC-R06 | Aucune capture runtime de la cible conversationnelle |
-| CC-R07 | CKC UX/UI détaillé absent — fallback seulement |
-| CC-R08 | Branche UX **locale seulement** (pas de remote au Truth Check) |
+| CC-R07 | CKC UX/UI détaillé absent — fallback silencieux seulement |
+| CC-R08 | Branche UX **locale seulement** |
+| CC-R09 | Douze décisions CC encore ouvertes (D02/04/07–11/14–18) |
+| CC-R10 | Preuve Figma = LF wireframes — **pas** HF / **pas** visual validated runtime |

 ---

@@ -344,29 +424,31 @@ Ne pas figer une machine à états Delivery unique sans CC-D01.

 | Dette | Note |
 |-------|------|
-| Mapping C2 → DynamicProposal | Delivery futur |
-| Confidence 0–1 → bandes | Contrat + UI |
+| Mapping C2 → DynamicProposal | CC-D14 ouverte |
+| Confidence 0–1 → bandes | CC-D11 ouverte |
 | Alternatives non activables | Remplacer par `effect` |
-| Enrichissement frames panneau vivant | Après CC-D03 |
-| Clôture LPV | Doc 86 |
 | HF / tokens DS | Hors LF |
+| Clôture LPV | Doc 86 |
+| Conception fonctionnelle Studio | Gate suivant |

 ---

 ## 13. Actions non exécutées (ce cycle)

-- Code / composants / API
-- Push branche UX / PR / merge
-- Modification `main` / doctrine CKC / onze CKC
-- Delivery / architecture technique détaillée
-- Claim UX READY / VISUAL VALIDATED
+- Code / composants / API / runtime
+- Push branche UX / PR / merge / main
+- Doctrine CKC / onze CKC / baseline
+- Delivery / architecture technique
+- Claims UX READY / VISUAL VALIDATED / RUNTIME MATCHED
+- Transformation des 12 décisions ouvertes en validées

 ---

 ## 14. Gate suivant candidat

-`GO MORRIS UX DECISIONS — STUDIO CONVERSATIONAL CONVERGENCE`
-(alternatif après décisions : `GO UX VALIDATION — STUDIO CONVERSATIONAL FLOW`)
+`GO CONCEPTION FONCTIONNELLE — STUDIO CKC CONTRACT`
+
+Alternatifs si besoin : `GO FIGMA COMPLETION — STUDIO CONVERSATIONAL FLOW` · `GO MORRIS UX DECISIONS` (pour D02/04/07–11/14–18).

 **Non consommés.**

@@ -374,6 +456,6 @@ Ne pas figer une machine à états Delivery unique sans CC-D01.

 ## 15. Verdict documentaire

-Pack de convergence **complet au niveau candidat** (audit, modèle, surfaces, états, règles, 5 scénarios, registre, trajectoire).
-Validation produit = **MORRIS UX DECISIONS REQUIRED**.
-Preuve visuelle LF existante mais **non** « visual validated » runtime.
+Six décisions Morris **tracées et intégrées** · frames D1 adaptées · preuves Figma LF.
+**Pas** de preuve runtime · **pas** Delivery.
+Verdict cycle : **STUDIO CONVERSATIONAL FLOW UX VALIDATED — FUNCTIONAL DESIGN REQUIRED**.
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index c3ebfc5..8101c0d 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -527,9 +527,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | [84-d1-shared-platform-integration-delivery-report.md](./84-d1-shared-platform-integration-delivery-report.md) | Delivery D1 ↔ Shared Platform (tools + contexte) — intégré via [#257](https://github.com/mcleland147/sfia-workspace/pull/257) |
 | [85-d1-shared-platform-integration-validation-report.md](./85-d1-shared-platform-integration-validation-report.md) | Validation technique fake — intégré via [#257](https://github.com/mcleland147/sfia-workspace/pull/257) |
 | `86` | **Réservé** — clôture Live Product Validation (**non créé** ; LPV engagée, non clôturée) |
-| [87-d1-conversational-convergence-ux-functional-design.md](./87-d1-conversational-convergence-ux-functional-design.md) | Conception UX/fonctionnelle convergence conversationnelle D1 — **`ux-design-candidate`** |
-| [88-d1-conversational-convergence-visual-contract.md](./88-d1-conversational-convergence-visual-contract.md) | Contrat visuel LF + frames Figma — **`visual-contract-candidate`** |
-| [89-d1-conversational-convergence-decision-pack.md](./89-d1-conversational-convergence-decision-pack.md) | Audit, modèle cible, scénarios CKC, registre CC-D01…D18 — **`ux-decision-pack-candidate`** |
+| [87-d1-conversational-convergence-ux-functional-design.md](./87-d1-conversational-convergence-ux-functional-design.md) | Conception UX/fonctionnelle convergence conversationnelle D1 — **`ux-flow-validated-partial`** (CC-D01/03/05/06/12/13) |
+| [88-d1-conversational-convergence-visual-contract.md](./88-d1-conversational-convergence-visual-contract.md) | Contrat visuel LF + frames Figma CC-01…17 — **`visual-contract-validated-lf`** |
+| [89-d1-conversational-convergence-decision-pack.md](./89-d1-conversational-convergence-decision-pack.md) | Audit, modèle, scénarios, registre — **6 décisions Morris validées** · 12 ouvertes |

 > **Statut Git :** Shared Technical Platform **MERGED** (#255). Docs 75–80 consolidés (#256). D1 shared platform + timeout 60s **MERGED** (#257 @ `499c6b3…`). Routage CKC candidat **MERGED** (#258 @ `2014e941…`).
-> **Séquence active :** D1 unifié sur `main` → LPV **ouverte** (pas de doc 86) → convergence conversationnelle (`87`/`88`/`89`, décisions Morris ouvertes) → `GO MORRIS UX DECISIONS` / `GO UX VALIDATION` — **pas** Delivery tant que preuves insuffisantes.
+> **Séquence active :** convergence conversationnelle — **6 décisions validées** · flow UX validé LF · gate suivant `GO CONCEPTION FONCTIONNELLE — STUDIO CKC CONTRACT` — **pas** Delivery / **pas** runtime matched.
```

---

## 12. Handoff (post-publish)

| Champ | Valeur |
|-------|--------|
| Mode | publish-in-cycle |
| Message | docs(review-handoff): publish Studio conversational flow validation |
| Commit / blob | *(après publish)* |

---

## 13. Verdict exact

**STUDIO CONVERSATIONAL FLOW UX VALIDATED — FUNCTIONAL DESIGN REQUIRED**
