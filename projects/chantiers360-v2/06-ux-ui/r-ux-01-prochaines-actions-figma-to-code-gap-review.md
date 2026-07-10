# R-UX-01 — Figma-to-code gap review — `/prochaines-actions`

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-to-code-gap-review.md`  
**Date et heure initiale :** 2026-07-10 10:01 CEST (UTC+0200)  
**Date correction :** 2026-07-10 10:25 CEST (UTC+0200)  
**Cycle :** R-UX-01 — UX/UI + Figma-to-code gap review (correction post-capture runtime)  
**Profil SFIA :** Standard léger  
**Méthode :** SFIA v2.5 **candidate** — SFIA v2.4 baseline opérationnelle  
**Branche :** `ux/chantiers360-r-ux-01-prochaines-actions` @ `306261c`

**Documents liés :**
- [`r-ux-01-prochaines-actions-figma-brief.md`](r-ux-01-prochaines-actions-figma-brief.md)
- [`r-ux-01-prochaines-actions-ux-review.md`](r-ux-01-prochaines-actions-ux-review.md)

---

## 1. Contexte

| Élément | Statut |
|---------|--------|
| **Frames Figma P2** | ✅ Produites — page MVP P2 (2026-07-10) |
| **Implémentation code** | ✅ Existante — livrée INC-05, E2E `inc-05.spec.ts` |
| **Réserve R-UX-01** | **Ouverte** — non clôturée |
| **R-QA-04** | **CLOSED** — inchangée |
| **Modification application** | ❌ **Aucune** — revue documentaire uniquement |

Les frames Figma `05 — Prochaines actions / nominal` et `05 — Prochaines actions / vide` ont été produites et validées visuellement par Morris (sidebar gauche corrigée, pattern P2 secondaire matérialisé).

L'écran `/prochaines-actions` est **fonctionnel** (agrégation PostgreSQL, navigation vers fiche chantier). Cette revue compare la **référence Figma P2** avec l'**implémentation runtime** pour qualifier un cycle delivery d'alignement UI — **sans modifier le code ni les tests**.

---

## 1 bis. Correction de verdict après capture runtime Morris

**Date correction :** 2026-07-10 10:25 CEST

| Élément | Détail |
|---------|--------|
| **Verdict initial (10:01)** | `NO DELIVERY REQUIRED — R-UX-01 CAN MOVE TO CLOSURE` |
| **Verdict corrigé (10:25)** | `DELIVERY ALIGNMENT REQUIRED — SIGNIFICANT VISUAL GAP CONFIRMED` |
| **Source correction** | Capture runtime Morris `/prochaines-actions` + capture frame Figma P2 nominale |

### Raisons de la correction

1. La première conclusion **NO DELIVERY REQUIRED** reposait principalement sur une **comparaison structurelle et fonctionnelle** (code, brief, wireframes) — pas sur une comparaison visuelle runtime vs Figma.
2. La **capture runtime** fournie par Morris montre un **écart visuel significatif** avec la frame Figma P2 nominale.
3. La revue initiale **n'aurait pas dû** conclure `NO DELIVERY REQUIRED` sans capture runtime comparée à la frame Figma — ou sans verdict limité à `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED`.
4. Morris / ChatGPT confirment : **l'écran runtime n'est pas visuellement aligné** avec la frame Figma P2 validée.

> **Le verdict est corrigé.** La production Figma reste validée ; l'alignement code reste à faire.

---

## 2. Références Figma

| Élément | Valeur |
|---------|--------|
| **Fichier** | Chantiers360 v2 — Design Figma MVP |
| **fileKey** | `9sxmnPQjMN34kXb4JE2nmz` |
| **Page** | MVP P2 |
| **Page node-id** | `124:2` |
| **Page URL** | https://www.figma.com/design/9sxmnPQjMN34kXb4JE2nmz/Chantiers360-v2-%E2%80%94-Design-Figma-MVP?node-id=124-2 |
| **Frame nominale** | `05 — Prochaines actions / nominal` — node-id **TBD** |
| **Frame vide** | `05 — Prochaines actions / vide` — node-id **TBD** |

### Constat visuel Morris validé — frame Figma (2026-07-10)

- Sidebar à gauche (nominal + vide)
- Header « Vue transverse / Prochaines actions »
- Annotation « 100 % dérivé — pas de saisie manuelle »
- État nominal : 4 actions (Retard, Tâche, Réserve, Jalon)
- État vide sans bouton d'ajout
- Aucun filtre, tri manuel ou formulaire
- Pattern P2 secondaire matérialisé

### Constat visuel Morris — capture runtime (2026-07-10 10:25)

- **Écart visuel global** confirmé vs frame Figma P2 nominale
- Fonctionnalité et navigation présentes — écart **visuel**, pas fonctionnel

---

## 3. Références code

| Fichier | Responsabilité |
|---------|----------------|
| `app/app/prochaines-actions/page.tsx` | Page route — AppShell, fil retour, header carte, section liste |
| `app/components/prochaines-actions/ProchainesActionsList.tsx` | Rendu liste nominale / état vide, CTA navigation |
| `app/lib/prochaines-actions/queries.ts` | Agrégation PostgreSQL, tri `sortKey` |
| `app/lib/prochaines-actions/types.ts` | 5 types source |
| `app/lib/prochaines-actions/format.ts` | Labels source, href fiche chantier |
| `app/components/layout/AppShell.tsx` | Layout sidebar gauche + zone contenu |
| `app/components/dashboard/Sidebar.tsx` | Navigation latérale P1 |

**Tests existants (lecture seule) :** `app/e2e/inc-05.spec.ts` — US-12 / US-13

---

## 4. Grille d'écart Figma → code (structurelle — revue initiale)

> Grille conservée à titre historique. Verdict structurel seul **insuffisant** pour clôture — voir §4 bis comparaison visuelle runtime.

| # | Point | Verdict initial | Commentaire |
|---|-------|-----------------|-------------|
| 1 | AppShell / sidebar gauche | Conforme | Structure alignée |
| 2 | Retour dashboard | Conforme | Lien + icône présents |
| 3–5 | Surtitre, titre, description | Conforme (texte) | Contenu sémantique OK |
| 6–22 | Voir revue initiale | Mixte | Sous-estimé sans capture runtime |

---

## 4 bis. Grille d'écarts visuels réels — runtime vs Figma

Comparaison basée sur **capture runtime Morris** vs **frame Figma P2 nominale**.

| # | Point de comparaison | Statut | Impact | Recommandation |
|---|----------------------|--------|--------|----------------|
| 1 | **Header runtime en carte blanche** vs **Figma bandeau navy pleine largeur** | Écart significatif | Hiérarchie visuelle P2 non respectée ; écran perçu comme P1 extrapolé | Delivery — restructurer header conforme Figma (navy pleine largeur ou équivalent) |
| 2 | **Annotation « 100 % dérivé »** intégrée au paragraphe runtime vs **badge dédié Figma** | Écart significatif | Règle métier peu visible ; pattern P2 annotation absent | Delivery — badge/callout dédié « 100 % dérivé — pas de saisie manuelle » |
| 3 | **Liste runtime en cartes verticales séparées** vs **Figma liste/table compacte dans une grande carte** | Écart significatif | Densité et scannabilité différentes ; pattern liste P2 non matérialisé côté code | Delivery — liste compacte unifiée dans carte principale |
| 4 | **Type source runtime en texte caps discret** vs **badges colorés Figma** (Retard / Tâche / Réserve / Jalon) | Écart significatif | Identification type source moins rapide (< 3 s) | Delivery — badges colorés par type source |
| 5 | **Retard runtime non priorisé visuellement** vs **ligne retard avec liseré/emphasis Figma** | Écart significatif | Urgence retard non perceptible | Delivery — emphasis visuel retard (liseré, couleur alerte modérée) |
| 6 | **CTA runtime noir/navy sombre** vs **bouton primary violet/bleu Figma** | Écart significatif | Incohérence CTA avec frame validée Morris | Delivery — CTA aligné tokens Figma P2 |
| 7 | **Densité runtime très aérée** vs **Figma plus compacte et scannable** | Écart significatif | Parcours priorisation quotidienne moins efficace visuellement | Delivery — réduire espacement vertical, densifier liste |
| 8 | **Hiérarchie visuelle runtime** moins proche du **pattern P2 attendu** | Écart significatif | Frame P2 validée mais non reflétée en delivery | Delivery — alignement global pattern P2 secondaire |
| 9 | **Spacing / pixel-perfect exact** | Non vérifiable | Mesure au pixel près non documentée | Capture côte à côte post-delivery |
| 10 | **Responsive mobile 375px** | Non vérifiable | Non testé dans cette correction | Vérification viewport optionnelle post-delivery |
| 11 | **AppShell / sidebar gauche** | Conforme | Structure commune runtime/Figma | Maintenir |
| 12 | **Absence ajout / filtre / tri manuel / formulaire** | Conforme | Règles métier respectées | Maintenir — interdits delivery |
| 13 | **État vide sans bouton d'ajout** | Conforme (fonctionnel) | Message présent — présentation à aligner si Figma diffère | Vérifier alignement visuel état vide au delivery |
| 14 | **Navigation CTA → fiche chantier** | Conforme (fonctionnel) | Comportement US-13 OK — style à aligner | Maintenir logique ; ajuster style |

---

## 5. Écarts identifiés (classification corrigée)

### Bloquants pour clôture UX sans delivery

| Écart | Détail |
|-------|--------|
| **Écart visuel global** | Runtime non aligné frame Figma P2 validée Morris — clôture R-UX-01 **suspendue** sans delivery ou acceptation explicite écart |

### Non bloquants fonctionnels

| Écart | Détail |
|-------|--------|
| Logique métier | Agrégation 100 % dérivée — OK |
| Navigation | Retour dashboard, CTA fiche chantier — OK |
| États | Nominal et vide fonctionnels — OK |
| E2E INC-05 | US-12 / US-13 couverts — OK |

### Polish UI (inclus dans delivery recommandé)

| Écart | Détail |
|-------|--------|
| Badges type source | Texte caps → badges colorés |
| Emphasis retard | Liseré / couleur alerte |
| CTA | Navy sombre → primary Figma |
| Densité / spacing | Aération → compact scannable |
| Annotation 100 % dérivé | Paragraphe → badge dédié |
| Header | Carte blanche → bandeau navy |

### Non vérifiable

| Écart | Détail |
|-------|--------|
| Pixel-perfect exact | Sans mesure post-delivery |
| Responsive 375px | Sans test viewport dédié |

### Documentation seulement

| Écart | Détail |
|-------|--------|
| `figma-brief.md` §4 ligne 8 | Toujours « Non produit » — mise à jour au commit final |
| node-id frames Figma | TBD |

---

## 6. Recommandation

### **DELIVERY ALIGNMENT REQUIRED — SIGNIFICANT VISUAL GAP CONFIRMED**

**Ouvrir un cycle delivery ciblé d'alignement UI `/prochaines-actions` sur la frame Figma P2 avant clôture R-UX-01.**

**Rationale :**

1. Frame Figma P2 **validée Morris** — référence visuelle officielle.
2. Capture runtime confirme **écart visuel significatif** — pas un simple polish optionnel.
3. Fonctionnalité OK — delivery **UI uniquement**, périmètre strict.
4. Clôture R-UX-01 **sans delivery** possible uniquement via **acceptation explicite Morris de l'écart** — **non recommandé**.

---

## 7. Périmètre delivery recommandé

### Fichiers candidats

| Fichier | Modification probable |
|---------|----------------------|
| `app/app/prochaines-actions/page.tsx` | Header navy, structure page, badge annotation |
| `app/components/prochaines-actions/ProchainesActionsList.tsx` | Liste compacte, badges, emphasis retard, CTA |
| `app/lib/prochaines-actions/format.ts` | Labels / classes badges si nécessaire |

### Alignements attendus

- Header navy pleine largeur ou structure équivalente conforme Figma
- Badge « 100 % dérivé — pas de saisie manuelle »
- Carte liste compacte unifiée
- Badges colorés Retard / Tâche / Réserve / Jalon
- Emphasis visuel sur retard
- CTA aligné Figma (primary violet/bleu)
- Maintien états nominal et vide
- Aucune création manuelle d'action
- Aucun filtre, tri manuel, formulaire

### Tests à exécuter

- `app/e2e/inc-05.spec.ts` — régression US-12 / US-13
- Vérification visuelle Morris post-delivery (capture runtime vs Figma)

### Interdits delivery

- Pas de nouveau besoin fonctionnel
- Pas de changement modèle de données
- Pas de modification PostgreSQL / schema
- Pas de modification R-QA-04
- Pas d'Option B/C
- Pas de refonte globale AppShell
- Pas de changement hors `/prochaines-actions` sauf dépendance UI strictement nécessaire

### Stop conditions

- Régression E2E INC-05 → rollback
- Scope élargi au-delà alignement UI → nouveau cycle
- Nouveau besoin fonctionnel détecté → gate Morris

### Décision Morris requise

**GO cycle delivery ciblé d'alignement UI `/prochaines-actions`** — recommandé avant clôture R-UX-01.

---

## 7 bis. Règle qualité — futures gap reviews Figma-to-code

Une gap review Figma-to-code **ne peut pas** conclure `NO DELIVERY REQUIRED` sans :

1. **Capture runtime** de l'écran concerné ;
2. **Comparaison visuelle explicite** avec la frame Figma de référence ;
3. **Ou** verdict limité à : `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED`

Sans ces éléments, seule une analyse structurelle/fonctionnelle est autorisée — verdict maximum : `REVIEW INCONCLUSIVE` ou `DELIVERY ALIGNMENT RECOMMENDED — PENDING VISUAL COMPARISON`.

---

## 8. Garde-fous

| Garde-fou | Statut |
|-----------|--------|
| Aucun code modifié (cette étape) | ✅ |
| Aucun test modifié | ✅ |
| Aucun commit | ✅ |
| R-UX-01 non clôturée | ✅ |
| R-QA-04 reste CLOSED | ✅ |
| Option B/C non lancées | ✅ |
| `.tmp-sfia-review/` hors commit | ✅ |

---

## 9. Décision Morris requise

1. **GO cycle delivery ciblé d'alignement UI `/prochaines-actions`** — **recommandé**
2. **Acceptation explicite de l'écart visuel et clôture sans delivery** — possible mais **non recommandé**
3. **Capture/runtime complémentaire** — déjà fournie ; correction intégrée

---

## 10. Verdict

### **DELIVERY ALIGNMENT REQUIRED — SIGNIFICANT VISUAL GAP CONFIRMED**

> Verdict initial (2026-07-10 10:01) : `NO DELIVERY REQUIRED — R-UX-01 CAN MOVE TO CLOSURE` — **révoqué** après capture runtime Morris (2026-07-10 10:25).

---

## 11. Delivery UI alignement — en cours / réalisé (2026-07-10)

| Élément | Statut |
|---------|--------|
| **Delivery** | ✅ Réalisé — alignement UI `/prochaines-actions` |
| **Code modifié** | `page.tsx`, `ProchainesActionsList.tsx`, `format.ts` |
| **Tests** | `npm run lint` ✅ · `npm run build` ✅ · `inc-05.spec.ts` 4/4 ✅ |
| **Revue Morris** | ⏳ En attente — capture runtime post-delivery |
| **Clôture R-UX-01** | ⏳ Suspendue — gate revue visuelle Morris |

### Alignements réalisés

| Écart gap review | Action |
|------------------|--------|
| Header carte blanche | Bandeau `bg-navy-hero` pleine largeur |
| Annotation 100 % dérivé | Badge callout dédié |
| Liste cartes aérées | Carte unifiée compacte `divide-y` |
| Types source texte caps | Badges colorés par type |
| Retard sans emphasis | `border-l-accent-red` + fond léger |
| CTA navy sombre | `bg-accent-purple` (token Figma) |
| Densité | `py-3.5` lignes compactes |

### Écarts restants / réserves

| Écart | Statut |
|-------|--------|
| Tri global retard-first | **Non modifié** — logique métier `queries.ts` inchangée — réserve documentée |
| Pixel-perfect Figma | Revue Morris requise |
| Responsive mobile 375px | Non testé — hors scope cycle |

### Verdict delivery (premier pass)

### **DELIVERY UI ALIGNMENT DONE — AWAITING MORRIS VISUAL REVIEW**

> Révoqué après revue visuelle Morris (2026-07-10) — voir §12.

---

## 12. Second pass UI — revue Morris post-delivery (2026-07-10)

| Élément | Statut |
|---------|--------|
| **Date / heure** | 2026-07-10 — second pass UI (CEST) |
| **Déclencheur** | Revue visuelle Morris post-premier delivery — capture runtime `http://127.0.0.1:3000/prochaines-actions` vs frame Figma P2 |
| **Verdict post-premier pass** | **DELIVERY UI ALIGNMENT PARTIAL — ADDITIONAL UI PASS REQUIRED** |
| **Second pass** | ✅ Réalisé — `page.tsx`, `ProchainesActionsList.tsx` |
| **format.ts** | ❌ Inchangé — premier pass suffisant |
| **Tests** | `npm run lint` ✅ · `npm run build` ✅ · `inc-05.spec.ts` 4/4 ✅ |
| **Revue Morris** | ⏳ En attente — capture runtime post-second pass |
| **Clôture R-UX-01** | ⏳ Suspendue — gate revue visuelle Morris |

### Écarts Morris traités (second pass)

| Écart Morris | Action second pass |
|--------------|-------------------|
| Header navy — hauteur / respiration | `pb-12 pt-3`, hiérarchie surtitre / titre / description / badge affinée, conteneur `max-w-6xl` |
| Chevauchement header / liste trop agressif | Suppression `-mt-4` → `mt-6` — transition propre sous le bandeau |
| Layout « carte unique » vs lignes compactes | Grille desktop colonnes + en-tête tableau masqué mobile |
| Colonnes Figma | Type · Chantier · Action · Statut · Date · CTA — grille `sm:grid-cols-[…]` |
| Largeur container liste | `max-w-6xl` aligné header + carte `rounded-xl border` |
| CTA trop massif | `px-3 py-1.5 text-xs rounded-lg` — moins imposant |
| Une seule action réelle | Ligne compacte sans min-height excessive — prêt multi-lignes |
| État vide | Même header ; message centré `py-14` dans carte unifiée |
| Retard trop massif | `border-l-2` + fond `bg-accent-red/[0.025]` — emphasis sobre |

### Écarts restants / réserves

| Écart | Statut |
|-------|--------|
| Tri global retard-first | **Non modifié** — `queries.ts` hors périmètre |
| Pixel-perfect Figma | Revue Morris requise |
| Responsive mobile 375px | Stack mobile simplifié — non validé Morris |
| Données démo multi-lignes | **Non inventées** — une action réelle en nominal |

### Verdict second pass

### **DELIVERY UI SECOND PASS DONE — AWAITING MORRIS VISUAL REVIEW**

> Révoqué après revue Morris + capture Figma (2026-07-10 11:15) — voir §13.

---

## 13. Third pass UI — revue visuelle stricte MCP + capture Morris (2026-07-10)

| Élément | Statut |
|---------|--------|
| **Date / heure** | 2026-07-10 11:15 CEST (UTC+0200) |
| **MCP Figma** | ✅ Utilisé — `get_metadata` page `124:2` + `get_design_context` frame nominale `121:5` |
| **Frames node-id récupérés** | `121:5` nominal · `121:99` vide |
| **Capture Figma Morris** | ✅ Utilisée — captures chat 11:14–11:15 |
| **Capture runtime** | ✅ Comparée — second pass Morris |
| **Verdict intermédiaire** | **SECOND PASS IMPROVED — STILL NOT READY FOR CLOSURE** |
| **Third pass** | ✅ Réalisé — `page.tsx`, `ProchainesActionsList.tsx`, `format.ts` |
| **Tests** | lint ✅ · build ✅ · `inc-05.spec.ts` 4/4 ✅ |
| **Revue Morris** | ⏳ En attente — capture runtime post-third pass |

### Observations MCP Figma (mesures clés)

| Élément Figma | Valeur observée |
|---------------|-----------------|
| Header hauteur | 200px — `pt-32 pb-24 pl-48`, contenu centré verticalement |
| Lien retour | Dans le bandeau navy (« ← Tableau de bord ») |
| Description | « Actions dérivées automatiquement… » (texte court) |
| Zone contenu | `p-32`, gap 16px, pleine largeur (pas max-w étroit) |
| Titre carte | « Prochaines actions » + compteur « N actions » hors carte blanche |
| Carte liste | `rounded-12`, border `#f3f4f6`, lignes h-56px |
| Colonnes ligne | barre 4px · badge 80px · chantier 240px · action flex · statut pill 100px · date 60px · CTA |
| Retard | barre gauche `#ef4444` 4px — badge type ambre |
| Statuts | pills colorées (En retard, À faire, Ouverte, Planifié) |
| CTA | `#4f46e5`, `rounded-10`, px-16 py-8, text 13px |
| Vide | icône check-circle · titre · sous-titre 2 lignes · « 0 actions » |

### Écarts Morris confirmés et traités

| Écart | Action third pass |
|-------|-------------------|
| Header trop massif / mal équilibré | `h-[200px] justify-center` — lien retour intégré |
| Contenu header trop haut, vide en bas | Padding Figma `pt-8 pb-6 gap-2` |
| Carte liste trop basse | `pt-8` immédiat sous header — suppression zone retour séparée |
| Table sous-dimensionnée | Suppression `max-w-6xl` — pleine largeur `px-8` |
| Colonnes trop espacées | Flex `gap-3` + largeurs fixes Figma (80/240/100/60) |
| Pas d’en-tête carte + compteur | `ListSectionHeader` avec « N actions » |
| Statuts texte brut | Pills `getStatusBadgeClass` |
| Badges type hors palette Figma | Couleurs MCP (ambre/indigo/vert) |
| CTA isolé | `rounded-[10px] px-4 py-2 text-[13px]` aligné colonne |
| Retard discret | Barre `w-1 bg-red-500` 4px |
| État vide minimal | Icône + titre + sous-titre Figma + « 0 actions » |
| En-tête tableau colonnes | Supprimé (absent Figma) |

### Écarts restants / réserves

| Écart | Statut |
|-------|--------|
| Pixel-perfect Figma | Revue Morris requise |
| Responsive mobile | Stack simplifié — non validé Morris |
| Tri retard-first | Inchangé — `queries.ts` hors périmètre |
| Données multi-lignes démo | Non inventées |

### Verdict third pass

### ~~DELIVERY UI THIRD PASS DONE — MCP/CAPTURE VISUAL REVIEW APPLIED — AWAITING MORRIS VISUAL REVIEW~~

> Révoqué — clôture Morris §14.

---

## 14. Clôture après delivery UI et validation Morris acceptable (2026-07-10)

| Élément | Valeur |
|---------|--------|
| **Date / heure** | 2026-07-10 12:54 CEST (UTC+0200) |
| **Verdict initial** | `DELIVERY ALIGNMENT REQUIRED — SIGNIFICANT VISUAL GAP CONFIRMED` |
| **Traitement** | Plusieurs passes UI d'alignement (passes 1–3 + ajustements badges/layout) |
| **Décision Morris** | Résultat **acceptable à ce stade** — GO clôture R-UX-01 |
| **Réserve produit/design** | **Clôturée** pour `/prochaines-actions` |
| **Limites restantes** | Figma-to-code pixel-perfect, MCP Figma — **capitalisation REX post-MVP**, pas blocage R-UX-01 |
| **R-QA-04** | **CLOSED** — inchangé |
| **Statut final** | **R-UX-01 — CLOSED** |

### Verdict clôture

### **R-UX-01 — CLOSED**

---

*Chantiers360 v2 — R-UX-01 — Figma-to-code gap review — SFIA v2.5 candidate — Morris décide.*
