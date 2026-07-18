# SFIA Studio — Contrat UX/UI

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `14-ux-ui-contract.md` |
| **Cycle** | 4 — UX/UI (**CLÔTURÉ**) |
| **Profil** | Standard (clôture documentaire / capitalisation) |
| **Typologie** | DOC / UX |
| **Statut** | `ux-ui-closed-implementation-reference` — **validé pour implémentation initiale** |
| **Horodatage consolidation** | 2026-07-19 00:44:00 CEST |
| **Décision Morris** | **Option B** — consolidation partielle |
| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| **Branche worktree** | `project/sfia-studio-ux-ui-reconciliation` |
| **AF-CAND-11A** | **VALIDÉE** (recommandation trajectoire) |
| **AF-CAND-11B** | **VALIDÉE** — cycle UX/UI sélectionné, exécuté et clôturé |
| **Figma** | Référence visuelle **validée** pour l’implémentation initiale |
| **Lien Figma** | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO |
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Architecture fonctionnelle** | **NON clôturée** formellement |
| **D-VAL-12** | **Aucune** |

> Contrat visuel et règles transverses UX/UI. Distingue : (1) référence visuelle Figma validée ; (2) comportements fonctionnels documentés ; (3) réserves non vérifiables avant runtime ; (4) ajustements UX possibles après développement.

> **Règle dure :** aucun verdict visuel fort après développement sans **capture runtime** comparée à Figma.

---

## 1. Décisions Morris appliquées (Option B)

| Décision | État |
|----------|------|
| Option B — consolidation partielle 14/15/16 | **VALIDÉE** |
| Cycle UX/UI sélectionné (AF-CAND-11B) | **VALIDÉE** |
| Cycle UX/UI exécuté sur Figma | **VALIDÉE** |
| P0 limité à **quatre** frames | **VALIDÉE** |
| Direction artistique **Product premium** | **VALIDÉE** — référence d’implémentation initiale |
| Cycle UX/UI **clôturé** | **VALIDÉE** |
| Figma = source visuelle d’exécution initiale | **VALIDÉE** |
| Nouveau cycle UX/UI possible après runtime | **AUTORISÉ** (futur) |
| Clôture formelle architecture | **NON PRONONCÉE** |
| Delivery | **Autorisé** comme prochaine étape après sync documentaire — **non exécuté** |
| Commit / push / PR / merge (ce cycle) | **Non autorisés** |

---

## 2. Frames P0 validées

| ID | Nom | node ID | Dimensions |
|----|-----|---------|------------|
| P0-00C | Nouvelle demande / Product premium | `19:2` | **1440 × 1024** |
| P0-01C | Vue synthèse / Product premium | `22:2` | **1440 × 1024** |
| P0-02C | Cycle actif / Product premium | `22:133` | **1440 × 1024** |
| P0-03C | Décision Morris / Product premium | `22:270` | **1440 × 1024** |

**Page Figma :** `UX-B — P0` (`0:1`).

**Hors P0 actif :** tout inventaire antérieur à dix écrans (S01–S10) est **obsolète** pour le périmètre d’implémentation initiale. Ces écrans éventuels restent des candidats futurs hors contrat actuel.

**Viewport complémentaire 1280 × 832 :** **non validé** dans les frames P0 — réserve delivery / itération UX.

---

## 3. Architecture visuelle commune

Structure observée et retenue pour les quatre frames :

| Zone | Rôle |
|------|------|
| **Utility rail** | Navigation système / brand / icônes / identité utilisateur |
| **Workspace shell / Top bar** | Contexte workspace, pills d’état, onglets, CTA globaux |
| **Canvas principal** | Contenu métier de l’écran (hero, formulaire, métriques, stepper, preuves…) |
| **Panneau copilote** | Assistance contextuelle (recommandations ≠ décisions) |
| **Brand accent** | Accent polish premium (`SFIA Polish / Brand accent`) |

### 3.1 Rail utilitaire

- Colonne gauche étroite (~64 px).
- Brand mark + icônes de navigation + avatar / pill bas.
- Ne porte **pas** de GO implicite.

### 3.2 Top bar / workspace shell

- Eyebrow + titre workspace.
- Pills d’état (statut cycle / Git / mode).
- Onglets de navigation inter-écrans.
- CTA globaux (ex. action principale) — toujours **non destructifs** sans modal GO.

### 3.3 Canvas principal

- Hero / strip de contexte.
- Cartes métier, formulaires, listes, stepper, panneaux d’évidence selon l’écran.
- Densité premium : espacement généreux, pas de surcharge informationnelle masquant un statut Git.

### 3.4 Panneau copilote

- Header (identité / état).
- Messages / résumé.
- Actions suggérées (**recommandations**).
- Bloc risque / insight.
- Composer.
- **Interdit :** présenter une suggestion copilote comme décision Morris validée ; aucun auto-GO.

### 3.5 Cartes, badges, CTA

- **Cartes :** contexte repo, métriques, lignes projet, checklist, evidence, options de décision.
- **Badges / pills :** états visibles (draft, ready, merged, closed, clôturé, candidat, validé, ouvert, risque…).
- **CTA primaire :** une action dominante par zone ; actions distantes toujours séparées (commit ≠ push ≠ PR ≠ merge ≠ delete).

---

## 4. Hiérarchie typographique et densité

| Niveau | Usage |
|--------|-------|
| Eyebrow | Contexte / section |
| Titre workspace / hero | Orientation écran |
| Titres de section | Structure canvas |
| Body | Contenu métier |
| Meta / labels | Secondaire |
| Mono (delivery) | SHA, chemins, diffs — **réserve d’implémentation** si non visible Figma |

**Densité :** confortable / premium. Espacements larges ; éviter la compaction qui masque un gate.

**Tokens précis (couleurs hex, tailles exactes hors frames) :** **non inventés** ici — à extraire en delivery depuis Figma (`get_design_context` / variables). Toute valeur non vérifiée = **réserve**.

---

## 5. Direction artistique

- **Product premium** validée comme référence d’implémentation initiale.
- Page Figma : **UX-B — P0** (parcours guidé dans un shell gouverné).
- **Non** baseline UX intangible : un nouveau cycle UX/UI reste possible après confrontation runtime.
- Polish transversal et correction des chevauchements : **réalisés** dans Figma (brand accent ; structure sans chevauchement apparent).

**Règle de non-chevauchement :** aucun élément décoratif ou badge flottant ne doit masquer un statut Git, un gate ou un CTA critique.

---

## 6. Garde-fous fonctionnels préservés

1. Aucune action distante sans confirmation explicite Morris.
2. Aucune décision candidate affichée comme validée.
3. Aucun statut local présenté comme vérité Git distante.
4. Chaque donnée critique affiche sa source (quand exposée).
5. Chaque gate affiche autorité, portée, durée, révocabilité (quand exposé).
6. Commit / push / PR / merge / suppression = actions **séparées**.
7. Aucune action destructive groupée.
8. Confirmation renforcée pour irréversibles.
9. États draft / ready / merged / closed / clôturé distincts.
10. Historique reconstructible depuis Git.
11. Aucun dark pattern ; aucun automatisme d’arbitrage.
12. Studio ≠ orchestrateur candidat ≠ Cursor.

---

## 7. Accessibilité (contraintes à vérifier en delivery)

| Exigence | Statut contrat |
|----------|----------------|
| Cible WCAG 2.2 AA | **Cible** — non entièrement validée |
| Clavier / focus visible | À vérifier runtime |
| Contraste | À vérifier runtime vs Figma |
| Labels screen reader (badges, SHA, gates) | À implémenter / vérifier |
| Sens non porté par la seule couleur | Obligatoire |

**Ne pas prétendre** que l’accessibilité est entièrement validée.

---

## 8. Responsive

| Élément | Statut |
|---------|--------|
| Desktop 1440 × 1024 | **Validé** (frames P0) |
| 1280 × 832 | **Réserve** — non validé P0 |
| Mobile / tablette | **Hors P0** — non validé |

---

## 9. Règles Figma-to-code et runtime

1. Source visuelle d’exécution initiale = Figma `lrjA1WEyRpL05vKR8k29LO` + frames §2.
2. Avant verdict visuel fort : produire un tableau **Figma vs Runtime** (élément / attendu / observé / statut / preuve).
3. Si capture runtime absente → maximum autorisé : `REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED`.
4. Ne pas conclure « aligné » uniquement parce que des composants existent.
5. Micro-interactions, loading, empty, error détaillés : **réserves** tant que non spécifiés frame par frame en delivery.

---

## 10. Éléments reportés après développement

- Viewport 1280 et responsive étendu
- Écrans hors P0 (Git Truth dédié, audit complet, paramètres…)
- Design system / tokens exhaustifs
- Micro-interactions finalisées
- Accessibilité entièrement validée
- Comparaison Figma/runtime (gate delivery)
- Architecture technique / stack / POC / MVP

---

## 11. Liens

- Parcours / écrans : [`15-ux-ui-flows-and-screens.md`](./15-ux-ui-flows-and-screens.md)
- Decision pack UX : [`16-ux-ui-decision-pack.md`](./16-ux-ui-decision-pack.md)
- Trajectoire : [`07-product-trajectory-and-decision-pack.md`](./07-product-trajectory-and-decision-pack.md)

---

*SFIA Studio — UX/UI CLÔTURÉ — Figma référence initiale — Option B — architecture NON clôturée — delivery non lancé — Morris décide commit/push/PR.*
