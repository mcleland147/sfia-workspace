# R-UX-01 — Prochaines actions — revue UX/UI

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`  
**Date et heure :** 2026-07-10 01:11 CEST (UTC+0200)  
**Cycle :** UX/UI + validation documentaire — Option A2 post-MVP  
**Profil SFIA :** Standard léger  
**Méthode :** SFIA v2.5 **candidate** — SFIA v2.4 baseline opérationnelle

---

## 1. Contexte Option A2

| Élément | Statut |
|---------|--------|
| **Roadmap** | Option A2 — R-QA-04 puis R-UX-01 |
| **R-QA-04** | **CLOSED** — PR #151 @ `2aa68f4`, clôture doc PR #152 @ `306261c` (2026-07-09) |
| **R-UX-01** | **CLOSED** — clôture documentaire 2026-07-10 |
| **Option B/C** | Non lancées |
| **Base git** | `main` @ `306261c` |

**Objectif du cycle :** qualifier si une frame Figma dédiée `/prochaines-actions` est nécessaire, ou si le maintien documenté de la réserve est acceptable — **sans delivery code** à ce stade.

---

## 2. Statut R-UX-01

| Élément | Valeur |
|---------|--------|
| **ID** | R-UX-01 |
| **Écran** | `/prochaines-actions` |
| **Statut actuel** | **CLOSED** — clôture documentaire 2026-07-10 12:54 CEST |
| **Sévérité** | UX / méthode — non bloquante (levée) |
| **Origine** | INC-05 — décision D9 |
| **Statut final** | **R-UX-01 — CLOSED** |

> **Clôture :** décision Morris du 2026-07-10 — sujet Figma / alignement visuel `/prochaines-actions` accepté à ce stade. Voir §21.

---

## 3. Documents consultés

| Document | Rôle |
|----------|------|
| `00-framing/2026-07-10-chantiers360-post-mvp-framing.md` | Roadmap post-MVP, registre réserves |
| `00-framing/chantiers360-post-mvp-option-a-reserves-first.md` | Cadrage Option A2, §4 R-UX-01 |
| `08-qa-test/inc-05/qa-reserves.md` | Constat, garde-fous R-UX-01 |
| `07-delivery-inc-05/2026-07-07-inc-05-closure-report.md` | Clôture INC-05 WITH RESERVES |
| `07-delivery-inc-05/2026-07-06-delivery-inc-05-decisions.md` | D9 — accepté sans maquette dédiée |
| `04-design/figma-brief.md` | Frame P2 « Vue prochaines actions » — ⏳ Non produit |
| `app/app/prochaines-actions/page.tsx` | Implémentation actuelle (lecture seule) |

---

## 4. Rappel de la réserve

L'écran **Prochaines actions** (`/prochaines-actions`, US-12/US-13) agrège les actions dérivées (tâches, réserves, jalons, retards) depuis PostgreSQL. Il est **fonctionnellement complet** et couvert par les E2E INC-05.

La réserve porte sur l'**absence de frame Figma P2 dédiée** : l'écran a été livré par extrapolation des patterns UI des 4 frames P1 validées Morris, sans validation visuelle spécifique de cet écran transverse.

**Ce n'est pas :** un bug fonctionnel, une régression QA, ni une dette de données.

**C'est :** une dette **design / méthode** — couverture design coverage SFIA v2.0.

---

## 5. Origine de la dette UX/UI

| Étape | Événement |
|-------|-----------|
| Design Figma MVP | 4 frames **P1** validées Morris — écrans P2 (dont prochaines actions) **non produits** (`figma-brief.md` §4, ligne 8) |
| INC-05 delivery | D9 — accepté sans maquette dédiée ; extrapolation patterns UI |
| QA INC-05 | R-UX-01 créée — ouverte, acceptée, non bloquante |
| Capitalisation MVP | F4 — couverture design non systématique documentée |
| Design coverage SFIA v2.0 | PR #129–#130 — règle formalisée ; R-UX-01 **non levée** |
| Option A2 | R-QA-04 traitée en premier ; R-UX-01 = étape 2 |

---

## 6. Impact produit réel

| Dimension | Évaluation |
|-----------|------------|
| **Utilisabilité** | Écran utilisable — liste triée, liens vers fiche + onglet source |
| **Cohérence visuelle** | Aligné sur tokens/patterns P1 (AppShell, cartes, badges) — **non validé Morris** pour cet écran |
| **Parcours** | Accessible via hero dashboard « Prochaines actions » ; lien retour dashboard |
| **Crédibilité données** | Données réelles — cohérent avec panneau dashboard post R-QA-04 |
| **Blocage métier** | **Aucun** |

**Observation post R-QA-04 :** le parcours « prochaines actions » est désormais **cohérent en données** (dashboard + vue transverse) mais **hétérogène en gouvernance design** (P1 Figma validé vs P2 extrapolé).

---

## 7. Impact méthode SFIA

| Dimension | Impact |
|-----------|--------|
| **Design coverage standard** | PR #129 — écran livré hors frame Figma = cas d'école R-UX-01 |
| **Gate design** | Gate P1 OK — gate P2 non exécuté pour cet écran |
| **Traçabilité** | Réserve formalisée, acceptée, non bloquante — conforme CLOSED WITH RESERVES |
| **Capitalisation** | Décision Morris sur R-UX-01 alimentera la règle design coverage pour cycles post-MVP |
| **Option B/C** | Toute évolution UI sans décision R-UX-01 répète le pattern d'extrapolation |

---

## 8. Risques si maintien sans frame Figma

| Risque | Gravité |
|--------|---------|
| Écart visuel non détecté entre `/prochaines-actions` et frames P1 | Faible à moyenne |
| Nouvelles features UI construites sur extrapolation | Moyenne |
| Dette design P2 reportée indéfiniment | Faible — documentée |
| Non-conformité stricte design coverage SFIA v2.0 | Faible — exception acceptée si Morris acte |
| Blocage fonctionnel ou QA | **Aucun** |

---

## 9. Bénéfices si frame Figma dédiée

| Bénéfice | Détail |
|----------|--------|
| **Gouvernance design** | Source visuelle validée Morris pour écran transverse P2 |
| **Alignement backlog** | `design-to-backlog-alignment.md` complété pour US-12/US-13 |
| **Cohérence parcours** | Parcours dashboard → prochaines actions → fiche sous même référentiel |
| **Réduction dette** | Levée explicite R-UX-01 — base saine avant Option B |
| **Capitalisation méthode** | Cas pilote design coverage P2 post-MVP |

---

## 10. Options de traitement

### Option UX-1 — Créer une frame Figma dédiée `/prochaines-actions`

| Dimension | Contenu |
|-----------|---------|
| **Description** | Produire frame P2 dans le fichier Figma existant ; valider Morris ; documenter alignement |
| **Bénéfices** | Gouvernance design ; levée R-UX-01 possible ; base pour delivery alignement UI ultérieur |
| **Limites** | Cycle UX/UI supplémentaire ; pas de correction code dans ce cycle documentaire |
| **Dette** | Aucune si frame validée + alignement documenté |
| **Cycles suivants** | UX/UI Standard (Figma) → éventuel Delivery ciblé alignement UI |
| **Décision Morris** | GO production frame Figma P2 |
| **Recommandation** | **Recommandée** si Morris priorise conformité design coverage avant Option B |

### Option UX-2 — Maintenir la réserve avec justification documentée

| Dimension | Contenu |
|-----------|---------|
| **Description** | Acter que l'extrapolation patterns P1 est suffisante ; R-UX-01 reste ouverte ou passe en « acceptée long terme » |
| **Bénéfices** | Rapidité ; pas de cycle Figma ; écran déjà fonctionnel et testé |
| **Limites** | Dette design P2 persiste ; exception design coverage permanent |
| **Dette** | R-UX-01 ouverte ou acceptée — non levée |
| **Cycles suivants** | Option B ou R-QA-03/05 sans gate design P2 |
| **Décision Morris** | GO maintien réserve acceptée |
| **Recommandation** | **Acceptable** si Morris juge l'écart visuel négligeable et la dette assumée |

### Option UX-3 — Clôturer sans frame (couverture suffisante)

| Dimension | Contenu |
|-----------|---------|
| **Description** | Clôturer R-UX-01 sans frame Figma — argument : patterns P1 + wireframes Markdown + implémentation stable couvrent l'écran |
| **Bénéfices** | Clôture immédiate ; pas de cycle Figma |
| **Limites** | **Non démontré** qu'une validation Morris explicite de l'écran a eu lieu ; contredit `figma-b brief` (P2 non produit) et D9 (accepté **sans** maquette, pas « couvert ») |
| **Dette** | Risque de clôture prématurée — capitalisation design coverage affaiblie |
| **Décision Morris** | GO clôture sans frame — **condition :** revue visuelle Morris documentée (capture + OK explicite) |
| **Recommandation** | **Non recommandée** sans revue visuelle Morris formalisée — prérequis : session revue écran actuel vs P1 |

---

## 11. Recommandation proposée

**Option UX-1** (frame Figma P2 dédiée) **ou** **Option UX-2** (maintien accepté) — selon priorité Morris :

| Priorité Morris | Option | Rationale |
|-----------------|--------|-----------|
| Conformité design coverage avant Option B | **UX-1** | Aligné standard SFIA v2.0 ; levée propre R-UX-01 |
| Rapidité vers Option B / valeur produit | **UX-2** | Dette assumée ; écran fonctionnel ; E2E OK |

**Option UX-3** : réservée à une **revue visuelle Morris explicite** de l'écran actuel — sans cela, clôture non justifiable documentairement.

**Séquence suggérée si UX-1 :**
1. Cycle UX/UI — production frame Figma P2 (Standard léger)
2. Gate Morris — validation visuelle
3. Documenter alignement — `design-to-backlog-alignment.md` ou addendum R-UX-01
4. Décision clôture R-UX-01 — cycle séparé, post-validation

---

## 14. Décision Morris — GO UX-1 complet (2026-07-10)

| Élément | Valeur |
|---------|--------|
| **Décision** | **GO Option UX-1 complet** — production frame Figma P2 `/prochaines-actions` |
| **Brief Figma dédié** | [`r-ux-01-prochaines-actions-figma-brief.md`](r-ux-01-prochaines-actions-figma-brief.md) |
| **Statut R-UX-01** | **Ouverte** — non clôturée |
| **Statut proposé cycle** | **DELIVERY ALIGNMENT REQUIRED — SIGNIFICANT VISUAL GAP CONFIRMED** |
| **Commit** | Reporté — **commit unique en fin de cycle UX complet** sur `ux/chantiers360-r-ux-01-prochaines-actions` |

**Étape courante :** frames Figma P2 produites (MVP P2) — revue visuelle OK après correction sidebar — en attente décision clôture formelle Morris.

**Objectif élargi (documentation) :** la frame `/prochaines-actions` sert aussi de **pattern de référence** pour les écrans secondaires P2 — sans élargir le scope de production à tous ces écrans.

**Prochaine gate :** GO cycle delivery alignement UI `/prochaines-actions` — ou acceptation explicite écart (non recommandé).

---

## 15. Production Figma et revue visuelle (2026-07-10)

| Élément | Valeur |
|---------|--------|
| **GO UX-1 complet** | ✅ Réalisé |
| **Page Figma** | MVP P2 — node-id `124:2` |
| **Frames produites** | `05 — Prochaines actions / nominal` + `05 — Prochaines actions / vide` |
| **Sidebar gauche** | ✅ Corrigée sur les deux frames — cohérence P1 |
| **Revue visuelle initiale** | ✅ OK (Morris / ChatGPT) — après correction sidebar |
| **Pattern P2 secondaire** | ✅ Matérialisé |
| **Nouveau scope fonctionnel** | ❌ Aucun |
| **Statut R-UX-01** | **Ouverte** — non clôturée |
| **Statut proposé** | **FIGMA P2 PRODUCED — AWAITING FORMAL MORRIS CLOSURE DECISION** |

**Référence :** [`r-ux-01-prochaines-actions-figma-brief.md`](r-ux-01-prochaines-actions-figma-brief.md) — §11 bis Production Figma réalisée.

---

## 16. Gap review Figma → code (2026-07-10)

| Élément | Valeur |
|---------|--------|
| **Document** | [`r-ux-01-prochaines-actions-figma-to-code-gap-review.md`](r-ux-01-prochaines-actions-figma-to-code-gap-review.md) |
| **Verdict gap review initial** | ~~NO DELIVERY REQUIRED~~ — **révoqué** |
| **Verdict gap review corrigé** | **DELIVERY ALIGNMENT REQUIRED — SIGNIFICANT VISUAL GAP CONFIRMED** |
| **Clôture R-UX-01** | **Suspendue** — delivery alignement UI ou acceptation explicite écart |

---

## 17. Correction gap review — visual gap confirmed (2026-07-10 10:25)

| Élément | Valeur |
|---------|--------|
| **Production Figma** | ✅ Validée — frames MVP P2 |
| **Capture runtime Morris** | ✅ Fournie — écart visuel significatif confirmé |
| **R-UX-01** | **Ouverte** — non clôturée |
| **Statut proposé** | **DELIVERY ALIGNMENT REQUIRED — SIGNIFICANT VISUAL GAP CONFIRMED** |

**Constat :** comparaison runtime vs frame Figma P2 — écart visuel significatif. Gap review initiale révoquée.

**Référence :** [`r-ux-01-prochaines-actions-figma-to-code-gap-review.md`](r-ux-01-prochaines-actions-figma-to-code-gap-review.md) — §1 bis, §4 bis.

---

## 18. Delivery UI alignement (2026-07-10)

| Élément | Valeur |
|---------|--------|
| **Delivery** | ✅ Réalisé — `page.tsx`, `ProchainesActionsList.tsx`, `format.ts` |
| **Tests** | lint ✅ · build ✅ · `inc-05.spec.ts` 4/4 ✅ |
| **Statut proposé** | **DELIVERY UI ALIGNMENT DONE — AWAITING MORRIS VISUAL REVIEW** |
| **Clôture R-UX-01** | ⏳ Gate revue visuelle Morris post-delivery |

**Alignements :** header navy, badge 100 % dérivé, liste compacte unifiée, badges colorés, emphasis retard, CTA accent-purple.

**Réserve :** tri global retard-first non modifié (`queries.ts` hors périmètre).

**Prochaine gate :** revue visuelle Morris — capture runtime vs Figma P2.

> Révoqué après revue Morris — premier pass partiel — voir §19.

---

## 19. Second pass UI — revue Morris post-delivery (2026-07-10)

| Élément | Valeur |
|---------|--------|
| **Déclencheur** | Capture runtime Morris post-premier delivery — écran amélioré mais encore trop éloigné de Figma P2 |
| **Statut intermédiaire** | **DELIVERY UI ALIGNMENT PARTIAL — ADDITIONAL UI PASS REQUIRED** |
| **Second pass** | ✅ Réalisé — `page.tsx`, `ProchainesActionsList.tsx` |
| **Logique métier / queries** | ❌ Inchangées |
| **Tests** | lint ✅ · build ✅ · `inc-05.spec.ts` 4/4 ✅ |
| **Statut proposé** | **DELIVERY UI SECOND PASS DONE — AWAITING MORRIS VISUAL REVIEW** |
| **Clôture R-UX-01** | ⏳ Gate revue visuelle Morris post-second pass |

**Corrections :** header navy respiration, suppression chevauchement agressif, grille colonnes type tableau, CTA compact, retard sobre, container `max-w-6xl`, état vide cohérent.

**Réserve :** tri global retard-first non modifié (`queries.ts` hors périmètre).

**Prochaine gate :** revue visuelle Morris — capture runtime post-second pass vs Figma P2.

---

## 20. Third pass UI — revue visuelle stricte MCP + capture Morris (2026-07-10)

| Élément | Valeur |
|---------|--------|
| **MCP Figma** | ✅ `get_metadata` `124:2` · `get_design_context` `121:5` |
| **Frames** | `121:5` nominal · `121:99` vide |
| **Capture Figma Morris** | ✅ Fournie dans chat Cursor |
| **Constat** | Second pass amélioré — encore écart significatif vs Figma P2 |
| **Third pass** | ✅ Header 200px, lien intégré, carte pleine largeur, colonnes Figma, pills statut, compteur actions, vide enrichi |
| **Tests** | lint ✅ · build ✅ · `inc-05.spec.ts` 4/4 ✅ |
| **Statut proposé** | **DELIVERY UI THIRD PASS DONE — MCP/CAPTURE VISUAL REVIEW APPLIED — AWAITING MORRIS VISUAL REVIEW** |

**Prochaine gate :** revue visuelle Morris post-third pass.

---

## 12. Décisions Morris requises

1. ~~**GO Option UX-1**~~ ✅ — GO UX-1 complet (2026-07-10)
2. ~~**Production frame Figma P2**~~ ✅ — nominal + vide (MVP P2, 2026-07-10)
3. ~~**Validation visuelle Morris**~~ ✅ — OK frame Figma (2026-07-10)
4. ~~**Gap review Figma → code**~~ ✅ — corrigée (2026-07-10 10:25)
5. ~~**Delivery alignement UI (premier pass)**~~ ✅ — réalisé (2026-07-10) — verdict partiel Morris
6. ~~**Second pass UI**~~ ✅ — réalisé (2026-07-10) — verdict partiel Morris
7. ~~**Third pass UI (MCP + capture)**~~ ✅ — réalisé (2026-07-10 11:15)
8. ~~**GO revue visuelle Morris**~~ ✅ — validation acceptable Morris (2026-07-10)
9. ~~**GO clôture R-UX-01**~~ ✅ — clôture documentaire (2026-07-10 12:54 CEST)
10. **GO commit final cycle UX** — fin cycle complet
11. **GO push / PR** — publication sur `main`

---

## 13. Verdict

### **R-UX-01 — CLOSED**

> Clôture documentaire Morris (2026-07-10 12:54 CEST) — voir §21.

---

## 21. Clôture documentaire R-UX-01 (2026-07-10 12:54 CEST)

| Élément | Valeur |
|---------|--------|
| **Date / heure** | 2026-07-10 12:54 CEST (UTC+0200) |
| **Décision Morris** | Sujet Figma / alignement visuel `/prochaines-actions` **acceptable à ce stade** — GO clôture R-UX-01 |
| **Production Figma P2** | ✅ Frames nominale + vide — page MVP P2 (`124:2`) |
| **Revue visuelle Morris** | ✅ Frame Figma validée ; runtime post-delivery validé acceptable |
| **Delivery UI alignement** | ✅ Plusieurs passes UI ciblées — badges, header, liste, CTA |
| **Tests (cycle delivery)** | `npm run lint` ✅ · `npm run build` ✅ · `inc-05.spec.ts` 4/4 ✅ |
| **Nouveau scope fonctionnel** | ❌ Aucun |
| **R-QA-04** | **CLOSED** — inchangé |
| **Réserve méthode REX** | Difficultés Figma-to-code pixel-perfect et usage MCP Figma — à capitaliser REX post-MVP Chantiers360 |

### Formulation de clôture

La réserve **R-UX-01** est **clôturée** pour le périmètre `/prochaines-actions`, après :

1. production des frames Figma P2 nominale et vide ;
2. revue visuelle Morris ;
3. alignement UI ciblé de l'écran applicatif ;
4. validation Morris acceptable du résultat à ce stade.

Les limites restantes sur la qualité Figma-to-code relèvent de la **capitalisation méthode** (REX post-MVP), pas d'un blocage produit R-UX-01.

### Verdict clôture

### **R-UX-01 — CLOSED**

---

*Chantiers360 v2 — R-UX-01 — Option A2 étape 2 — SFIA v2.5 candidate — Morris décide.*
