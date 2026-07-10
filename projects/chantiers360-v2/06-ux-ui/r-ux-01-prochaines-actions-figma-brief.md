# R-UX-01 — Brief Figma P2 — `/prochaines-actions`

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md`  
**Date et heure :** 2026-07-10 02:08 CEST (UTC+0200)  
**Cycle :** R-UX-01 — UX/UI Option A2 — étape production Figma P2  
**Profil SFIA :** Standard léger  
**Méthode :** SFIA v2.5 **candidate** — SFIA v2.4 baseline opérationnelle

**Documents liés :**
- [`r-ux-01-prochaines-actions-ux-review.md`](r-ux-01-prochaines-actions-ux-review.md)
- [`r-ux-01-prochaines-actions-figma-to-code-gap-review.md`](r-ux-01-prochaines-actions-figma-to-code-gap-review.md)
- [`../04-design/figma-brief.md`](../04-design/figma-brief.md)
- [`../02-ux-ui/wireframes-functional.md`](../02-ux-ui/wireframes-functional.md) — §7
- [`../02-ux-ui/screen-map.md`](../02-ux-ui/screen-map.md) — §8

---

## 1. Contexte R-UX-01

| Élément | Valeur |
|---------|--------|
| **Réserve** | R-UX-01 — écran `/prochaines-actions` sans frame Figma P2 dédiée |
| **Statut réserve** | **Ouverte — acceptée** (non clôturée) |
| **Origine** | INC-05 — décision D9 — extrapolation patterns P1 |
| **R-QA-04** | **CLOSED** — PR #151 @ `2aa68f4` (2026-07-09) |
| **Option B/C** | Non lancées |
| **Branche cycle UX** | `ux/chantiers360-r-ux-01-prochaines-actions` @ `306261c` |

L'écran est **livré et fonctionnel** (agrégation réelle, E2E INC-05). Ce brief prépare la **production Figma** — pas le delivery code.

---

## 2. Décision Morris

**GO Option UX-1 complet** — produire une frame Figma P2 dédiée `/prochaines-actions`.

**Gouvernance cycle :** un seul commit final en fin de cycle UX complet sur la branche `ux/chantiers360-r-ux-01-prochaines-actions` — pas de commit intermédiaire à cette étape.

---

## 3. Objectif de la frame Figma P2

Fournir une **référence visuelle validée Morris** pour l'écran transverse « Prochaines actions », alignée sur les 4 frames P1 existantes, afin de :

1. lever la dette design coverage sur l'écran P2 le plus visible du parcours « actions à traiter » ;
2. documenter la hiérarchie d'information attendue (type source, chantier, libellé, statut, date) ;
3. servir de base à une éventuelle revue d'écart delivery — **sans imposer de modification code dans ce cycle** ;
4. **servir de pattern de référence** pour les écrans secondaires P2 du produit : vues transverses, listes dérivées, écrans non-CRUD principaux, écrans accessibles depuis le dashboard, écrans de priorisation / synthèse.

> **Garde-fou :** cet objectif **n'élargit pas** le scope à la production de tous les écrans secondaires P2 dans ce cycle — voir §3 bis.

---

## 3 bis. Pattern secondaire P2 réutilisable

La frame `/prochaines-actions` sert de **cas pilote** pour formaliser le traitement UX des écrans secondaires P2.

Elle doit permettre de stabiliser :

- la structure d'un écran transverse — AppShell + contenu secondaire ;
- la hiérarchie titre / description / liste ;
- les états nominal et vide ;
- la navigation retour / détail ;
- l'usage des badges, cartes et CTA issus des patterns P1 ;
- la règle « contenu 100 % dérivé » lorsque l'écran agrège des informations existantes.

**Portée du pattern :** ce pattern peut guider les futurs écrans secondaires P2 (vues transverses, listes dérivées, synthèses accessibles depuis le dashboard).

**Limites explicites :**

- cette frame **ne vaut pas** validation automatique de tous les écrans secondaires ;
- une future vue P2 pourra soit **réutiliser** ce pattern, soit **nécessiter une frame dédiée** — décision Morris au cas par cas ;
- ce cycle **ne produit pas** les autres écrans P2 (jalons, comptes rendus, etc.) — uniquement le cas pilote `/prochaines-actions`.

---

## 4. Écran concerné

| Attribut | Valeur |
|----------|--------|
| **Route** | `/prochaines-actions` |
| **US** | US-12 (vue transverse), US-13 (navigation vers fiche + onglet source) |
| **UC** | UC-09 |
| **Priorité backlog** | P2 |
| **Frame Figma actuelle** | ⏳ **Non produite** (`figma-brief.md` §4, ligne 8) |

### Fichier Figma cible

| Élément | Valeur |
|---------|--------|
| **Fichier** | [Chantiers360 v2 — Design Figma MVP](https://www.figma.com/design/9sxmnPQjMN34kXb4JE2nmz/Chantiers360-v2-%E2%80%94-Design-Figma-MVP) |
| **fileKey** | `9sxmnPQjMN34kXb4JE2nmz` |
| **Page recommandée** | Nouvelle page **MVP P2 — Validé Morris** (ou section dédiée P2 sur page existante — décision Morris à la production) |
| **Référence P1** | Page **MVP P1 — Validé Morris** (`node-id=38-2`) |

---

## 5. Parcours utilisateur à représenter

```mermaid
flowchart LR
  A[Dashboard /] -->|Hero ou nav| B[/prochaines-actions]
  B -->|Consulter liste| B
  B -->|Identifier type source| B
  B -->|CTA Voir sur le chantier| C[Fiche chantier ?tab=]
  B -->|Retour au tableau de bord| A
  C -->|Retour| A
```

| Étape | Comportement à figurer |
|-------|------------------------|
| **Arrivée depuis dashboard** | Lien « Prochaines actions » (hero dashboard) ou navigation AppShell |
| **Consultation liste** | Liste dérivée triée — aucune saisie manuelle |
| **Identification source** | Type visible : Tâche / Réserve / Prochaine intervention / Jalon à venir / Retard chantier |
| **Navigation fiche** | CTA vers `/chantiers/[id]?tab=taches|reserves|jalons` selon source |
| **Retour dashboard** | Lien « Retour au tableau de bord » en tête de page |

---

## 6. Structure attendue de l'écran

Alignée sur l'implémentation livrée (`app/prochaines-actions/page.tsx`, `ProchainesActionsList.tsx`) et wireframe Markdown §7.

| Zone | Contenu | Référence code / UX |
|------|---------|---------------------|
| **AppShell** | Sidebar + zone contenu — cohérent P1 | `AppShell` — nav active dashboard |
| **Fil retour** | Lien « Retour au tableau de bord » + icône flèche | `page.tsx` L14–32 |
| **Header carte** | Surtitre « Vue transverse » + titre H1 « Prochaines actions » + paragraphe descriptif (règle 100 % dérivé) | `page.tsx` L34–43 |
| **Section liste** | Carte blanche `shadow-card`, aria-label « Prochaines actions dérivées » | `page.tsx` L45–50 |
| **Item liste** | Ligne : type source · chantier (caps) → libellé action → statut + date optionnelle → CTA | `ProchainesActionsList.tsx` |
| **CTA item** | Bouton pill « Voir sur le chantier » — navy | Lien vers fiche + onglet |
| **État vide** | Message explicite — pas de bouton d'ajout | L12–16 |
| **Responsive** | Stack vertical mobile ; row desktop (sm+) | `flex-col sm:flex-row` |

**Interdit dans la frame :** bouton « Ajouter une action », formulaire de saisie manuelle, toute interaction créant une action non dérivée.

---

## 7. Données à représenter

Correspondance domaine (`lib/prochaines-actions/types.ts`, `format.ts`) :

| Type source (`sourceType`) | Label affiché | Onglet cible | Exemple libellé |
|----------------------------|---------------|--------------|-----------------|
| `tache` | Tâche | `taches` | Poser carrelage sol |
| `reserve` | Réserve | `reserves` | Fuite robinet cuisine voisine |
| `jalon-intervention` | Prochaine intervention | `jalons` | Intervention prévue |
| `jalon-milestone` | Jalon à venir | `jalons` | Pose carrelage |
| `retard` | Retard chantier | `null` (fiche sans tab) | Chantier en retard |

**Champs par item :**

| Champ | Obligatoire frame | Notes |
|-------|-------------------|-------|
| Type source | Oui | Badge ou label caps — 5 variantes |
| Titre chantier | Oui | Contexte chantier |
| Libellé action | Oui | Texte principal |
| Statut | Oui | ex. « À faire », « Ouverte », « En retard » |
| Date / échéance | Optionnel | `dueDate` si présent — format FR |
| CTA | Oui | « Voir sur le chantier » |

**Tri :** respecter l'ordre agrégé livré (retards et échéances prioritaires — figurer au moins un item retard en tête dans l'état nominal dense).

---

## 8. États UX à couvrir

| État | Frame Figma | Contenu minimal |
|------|-------------|-----------------|
| **Nominal — plusieurs actions** | **Obligatoire** | ≥ 4 items — mix tâche, réserve, jalon, retard |
| **Vide** | **Obligatoire** | Message « Aucune action dérivée… » — pas de CTA ajout |
| **Retard / priorité élevée** | **Recommandé** | Item « Retard chantier » en tête — emphasis visuel modéré (badge, couleur alerte cohérente P1) |
| **Dense / chargé** | Optionnel | ≥ 8 items — scroll implicite |
| **Responsive mobile** | Optionnel | Variante 375px — stack vertical, CTA full-width |

---

## 9. Cohérence avec les frames P1

| Frame P1 | Node ID | Éléments à réutiliser / aligner |
|----------|---------|--------------------------------|
| **01 — Dashboard** | `38:502` | AppShell, hero, tokens couleur navy/surface, cartes `shadow-card` |
| **02 — Fiche tâches** | `38:294` | Badges statut, typographie titres, boutons pill |
| **03 — Fiche réserves** | `38:105` | Liste items, séparateurs, hiérarchie texte |
| **04 — Création chantier** | `38:3` | Espacements px-8 py-8, rounded-2xl, ombres |

**Tokens à respecter :** palette navy / slate / surface — pas de nouvelle palette sans décision Morris.

**Écart autorisé :** layout liste transverse spécifique P2 — tant que cohérent avec le langage visuel P1.

---

## 10. Critères de validation Morris

| Critère | Question de revue |
|---------|-------------------|
| **Cohérence visuelle** | L'écran « appartient-il » au même produit que les 4 frames P1 ? |
| **Lisibilité** | Type source, chantier et libellé action sont-ils scannables en < 3 s ? |
| **Hiérarchie** | Retard / urgence visible sans surcharger ? |
| **Navigation** | Retour dashboard et CTA chantier sont-ils évidents ? |
| **Patterns existants** | Réutilisation cartes, boutons, typo — pas de composant alien |
| **Pas de nouveau besoin fonctionnel** | Aucun bouton ajout, filtre ou édition non prévu backlog |
| **Réutilisabilité P2** | La frame peut-elle servir de référence pour d'autres écrans secondaires **sans créer de nouveau scope fonctionnel** ? |

**Gate :** validation Morris explicite sur la frame — capture + OK documenté — **condition future de clôture R-UX-01**.

---

## 11. Livrables Figma attendus

| Livrable | Détail |
|----------|--------|
| **Frame principale** | `05 — Prochaines actions` (nommage recommandé — suite numérotation P1 01–04) |
| **Variantes** | Frame nominal + frame état vide (minimum) |
| **Nommage layer** | Préfixe cohérent P1 — ex. `05-prochaines-actions/nominal`, `05-prochaines-actions/empty` |
| **Annotations** | Rappel « 100 % dérivé — pas de saisie » ; liens navigation ; légende types source |
| **Composants réutilisés** | AppShell, carte container, bouton CTA navy, badge type si existant bibliothèque |
| **Capture repo** | Export PNG dans `04-design/captures/` — **cycle séparé post-validation** |
| **Écarts delivery** | Documenter dans addendum R-UX-01 ou `design-to-backlog-alignment.md` — **si écart détecté à la revue** |

### node-id

| Élément | node-id | Statut |
|---------|---------|--------|
| **Page MVP P2** | `124:2` | ✅ Documenté |
| **Frame nominale** | `05 — Prochaines actions / nominal` | TBD — à compléter avant clôture si nécessaire |
| **Frame vide** | `05 — Prochaines actions / vide` | TBD — à compléter avant clôture si nécessaire |

**URL page Figma :** [MVP P2](https://www.figma.com/design/9sxmnPQjMN34kXb4JE2nmz/Chantiers360-v2-%E2%80%94-Design-Figma-MVP?node-id=124-2)

---

## 11 bis. Production Figma réalisée

**Date production / revue :** 2026-07-10

| Élément | Valeur |
|---------|--------|
| **Fichier** | Chantiers360 v2 — Design Figma MVP |
| **fileKey** | `9sxmnPQjMN34kXb4JE2nmz` |
| **Page** | MVP P2 |
| **Page node-id** | `124:2` |
| **Page URL** | https://www.figma.com/design/9sxmnPQjMN34kXb4JE2nmz/Chantiers360-v2-%E2%80%94-Design-Figma-MVP?node-id=124-2 |

### Frames produites

| Frame | Statut |
|-------|--------|
| `05 — Prochaines actions / nominal` | ✅ Produite |
| `05 — Prochaines actions / vide` | ✅ Produite |

### Constat visuel Morris / revue (2026-07-10)

| Contrôle | Résultat |
|----------|----------|
| Sidebar à gauche (nominal + vide) | ✅ Corrigée — alignée P1 et état vide |
| Cohérence AppShell nominal / vide | ✅ |
| Header « Vue transverse / Prochaines actions » | ✅ |
| Annotation « 100 % dérivé — pas de saisie manuelle » | ✅ |
| État nominal — 4 actions (Retard, Tâche, Réserve, Jalon) | ✅ |
| État vide — sans bouton d'ajout | ✅ |
| Absence filtre / tri manuel / formulaire | ✅ |
| Pattern secondaire P2 matérialisé | ✅ |
| Nouveau scope fonctionnel | ❌ Aucun |

> **Garde-fou :** production Figma documentée — **R-UX-01 CLOSED** (2026-07-10).

---

## 12. Conditions futures de clôture R-UX-01

| # | Condition | Statut |
|---|-----------|--------|
| 1 | Frame P2 `/prochaines-actions` produite dans Figma | ✅ 2026-07-10 — page MVP P2 |
| 2 | Revue visuelle Morris effectuée — OK explicite | ✅ 2026-07-10 |
| 3 | Décision Morris documentée | ✅ 2026-07-10 — clôture documentaire |
| 4 | Alignement documentaire mis à jour | ✅ 2026-07-10 |
| 5 | Écart delivery identifié et traité | ✅ Delivery UI alignement — passes multiples |
| 6 | Portée pattern P2 documentée | ✅ Documentée pour `/prochaines-actions` — réutilisation future au cas par cas |

**Statut final :** **R-UX-01 — CLOSED**

> **Note REX :** les enseignements sur le Figma-to-code pixel-perfect et l'usage MCP Figma seront repris au REX post-MVP Chantiers360.

---

## 13. Garde-fous

| Garde-fou | Règle |
|-----------|-------|
| **Pas de delivery** | Ce brief ne déclenche aucune modification applicative |
| **Pas de clôture** | ~~R-UX-01 reste ouverte~~ — **CLOSED** 2026-07-10 |
| **Pas de commit intermédiaire** | Commit unique en fin cycle UX complet |
| **Pas de nouveau scope** | Pas de filtres, tri UI, édition — périmètre US-12/US-13 existant |
| **Pas de régression R-QA-04** | Dashboard panneaux droits — hors scope |
| **Mono-branche** | Tous livrables UX sur `ux/chantiers360-r-ux-01-prochaines-actions` |

---

## 14. Prochaines étapes (hors ce document)

1. ~~**Production Figma**~~ ✅ — frames nominal + vide (MVP P2, 2026-07-10)
2. ~~**Revue visuelle Morris**~~ ✅ — OK
3. ~~**Décision clôture formelle R-UX-01**~~ ✅ — CLOSED (2026-07-10)
4. ~~**Delivery alignement UI**~~ ✅ — passes multiples
5. **Commit final cycle UX** — GO Morris

---

## 15. Verdict

### **R-UX-01 — CLOSED**

> Verdict précédent : FIGMA P2 PRODUCED — AWAITING FORMAL MORRIS CLOSURE DECISION.  
> Clôture documentaire Morris : 2026-07-10.

---

*Chantiers360 v2 — R-UX-01 — Brief Figma P2 — SFIA v2.5 candidate — Morris valide production.*
