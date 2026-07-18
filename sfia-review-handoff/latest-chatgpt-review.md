# SFIA Studio — Review Handoff Git — UX Option B + corrections de cohérence

**Handoff publié :** 2026-07-19 00:55:28 CEST
**Branche handoff :** `sfia/review-handoff`
**Fichier canonique :** `sfia-review-handoff/latest-chatgpt-review.md`
**Source :** worktree `sfia-workspace-ux-reconciliation` / `.tmp-sfia-review/chatgpt-review.md`

### Distinction handoff

| Niveau | Statut |
|---|---|
| Cycle Option B initial | `HANDOFF NOT REQUIRED — JUSTIFIED` (transmission locale directe) |
| Publication actuelle (corrections revue ChatGPT) | `HANDOFF REQUIRED — UPDATED — REMOTE VERIFIED` |

**Instruction ChatGPT :** lire ce fichier et vérifier les trois corrections (13, README, distinction handoff), plus les contenus complets 14/15/16 et diffs README/07/13.

---

# SFIA Studio — Review Pack FULL — Option B UX/UI + corrections de cohérence documentaire

**Date/heure :** 2026-07-19 00:55:28 CEST
**Niveau :** FULL
**Cycle :** Correction documentaire ciblée (post-revue ChatGPT Option B)
**Profil :** Light
**Typologie :** DOC
**Verdict :** READY FOR COMMIT — DOCUMENTARY CONSISTENCY RESTORED

### Statuts handoff (distinction obligatoire)

| Niveau | Statut | Signification |
|---|---|---|
| Handoff du cycle Option B **initial** | `HANDOFF NOT REQUIRED — JUSTIFIED` | Transmission locale directe du pack Option B ; pas de publication handoff requise à ce moment |
| Publication de revue **actuelle** (corrections) | `HANDOFF REQUIRED — UPDATED — REMOTE VERIFIED` | Commit + push `origin/sfia/review-handoff` + vérification remote pour revue ChatGPT des corrections |

---

## 1. Identité Git

| Champ | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-ux-reconciliation` |
| Branche projet | `project/sfia-studio-ux-ui-reconciliation` |
| HEAD | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| origin/main | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| Staged projet | aucun |
| Commit / push / PR projet | aucun |

---

## 2. Écarts identifiés par ChatGPT

1. `13` : formulation « Aucun cycle suivant lancé » contradictoire avec UX/UI clôturé.
2. `README` : double « 5. Sort des branches » dans ## 8. Prochaine décision.
3. Handoff publié : « HANDOFF NOT REQUIRED » ambigu pour la publication canonique de revue.

---

## 3. Corrections appliquées

### A. 13-functional-architecture-decision-pack.md

**Avant :** `Aucun cycle suivant lancé.`
**Après :** `Aucun cycle delivery, architecture technique, POC ou MVP lancé.`

Conservé : UX/UI clôturé ; AF-CAND-11B VALIDÉE ; architecture non clôturée ; delivery autorisé non exécuté.

### B. README.md — ## 8. Prochaine décision

Liste unique :

1. Revue ChatGPT de la synchronisation documentaire UX Option B.
2. GO commit de la branche projet.
3. GO push et PR distincts.
4. Lancement du cycle delivery / implémentation.
5. Clôture formelle du cycle architecture, décision distincte.
6. Sort des branches `pre-framing` / `functional-design` / `functional-architecture`.

Ces items restent des **recommandations / prochaines décisions**, non des décisions validées.

### C. Handoff

Distinction des deux niveaux (voir tableau en tête). Publication actuelle = **required**.

---

## 4. Fichiers

| Fichier | Statut cette correction |
|---|---|
| README.md | **Modifié** (numérotation) |
| 13-…decision-pack.md | **Modifié** (phrase) |
| 07-…decision-pack.md | **Inchangé** (reste M Option B) |
| 14 / 15 / 16 | **Inchangés** |
| 11 / 12 | Non touchés |

---

## 5. Diff stat (projet vs HEAD)

```
 .../07-product-trajectory-and-decision-pack.md     | 65 ++++++++++--------
 .../13-functional-architecture-decision-pack.md    | 37 ++++++-----
 projects/sfia-studio/README.md                     | 77 +++++++++++++++-------
 3 files changed, 109 insertions(+), 70 deletions(-)

```

## 6. Diff check

`git diff --check` : propre.

---

## 7. Contenu complet — 14-ux-ui-contract.md (inchangé)

```markdown
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

```

---

## 8. Contenu complet — 15-ux-ui-flows-and-screens.md (inchangé)

```markdown
# SFIA Studio — Parcours UX/UI et écrans P0

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `15-ux-ui-flows-and-screens.md` |
| **Cycle** | 4 — UX/UI (**CLÔTURÉ**) |
| **Statut** | `ux-ui-closed-implementation-reference` |
| **Horodatage consolidation** | 2026-07-19 00:44:00 CEST |
| **Décision Morris** | **Option B** ; P0 = **4 frames** uniquement |
| **Companion** | [`14`](./14-ux-ui-contract.md) · [`16`](./16-ux-ui-decision-pack.md) |
| **Figma** | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO (`lrjA1WEyRpL05vKR8k29LO`) |

> Description fonctionnelle des **quatre** écrans P0 et de leurs parcours. Aucun écran supplémentaire n’est inventé. L’ancien inventaire S01–S10 est **hors P0 actif** (historique / futur candidat).

---

## 1. Navigation P0

```text
P0-01C Vue synthèse
   ├─► P0-00C Nouvelle demande
   ├─► P0-02C Cycle actif
   └─► P0-03C Décision Morris
P0-02C Cycle actif ──► P0-03C Décision Morris
P0-00C Nouvelle demande ──► P0-02C (après qualification) / P0-01C
```

Shell commun (rail + topbar + copilote) : voir `14`.

---

## 2. P0-00C — Nouvelle demande / Product premium

| Champ | Contenu |
|-------|---------|
| **node ID** | `19:2` |
| **Objectif** | Capturer une intention de cycle ; contextualiser le repo ; préparer la suite sans GO implicite |
| **Acteurs** | Morris (primaire) ; copilote (recommandation) |
| **Données visibles** | Titre / description demande ; contexte repo/ref ; pièces jointes ; activité / timeline ; suggestions copilote |
| **Actions principales** | Saisir demande ; attacher contexte ; CTA primaire de poursuite (qualification / préparation) |
| **Navigation** | Depuis P0-01C ; vers P0-02C après qualification ; retour synthèse |
| **États principaux** | Brouillon demande ; contexte Git affiché ; suggestions copilote |
| **Gates Morris** | Aucun GO distant depuis cet écran ; toute action distante → P0-03C |
| **Rôle copilote** | Qualifier / suggérer typologie et prochaines étapes — **≠ décision** |
| **Interdit** | Auto-lancer Cursor ; push/PR ; présenter candidat comme validé |

**Réserves :** empty / error / loading détaillés — à compléter en delivery ; autosave = comportement candidat non contractuel technique.

---

## 3. P0-01C — Vue synthèse / Product premium

| Champ | Contenu |
|-------|---------|
| **node ID** | `22:2` |
| **Objectif** | Comprendre l’état global du workspace / portefeuille et orienter vers un cycle |
| **Acteurs** | Morris ; lecteur éventuel (read-only) |
| **Données visibles** | Hero ; métriques ; portefeuille cycles/projets ; panneau gates ; activité ; copilote |
| **Actions principales** | Ouvrir un cycle ; créer une demande (→ P0-00C) ; consulter gates |
| **Navigation** | Hub vers P0-00C / P0-02C / P0-03C |
| **États principaux** | Synthèse chargée ; gates ouverts/fermés ; activité récente |
| **Gates Morris** | Affichage ; ouverture décision via P0-03C |
| **Rôle copilote** | Résumer risques et priorités — **≠ arbitrage** |
| **Interdit** | GO distant depuis la synthèse ; masquer divergence Git |

**Réserves :** mapping exact métriques ↔ sources Git — delivery ; empty portefeuille.

---

## 4. P0-02C — Cycle actif / Product premium

| Champ | Contenu |
|-------|---------|
| **node ID** | `22:133` |
| **Objectif** | Piloter le cycle courant pas à pas (qualification → preuves → décision → exécution → clôture) |
| **Acteurs** | Morris ; Cursor (exécuteur hors UI) ; copilote |
| **Données visibles** | Hero cycle ; stepper ; checklist / work area ; inspector (refs, stop conditions) ; copilote |
| **Actions principales** | Avancer une étape ; ouvrir preuves ; STOP ; demander décision (→ P0-03C) |
| **Navigation** | Depuis P0-01C / P0-00C ; vers P0-03C |
| **États principaux** | Étape active ; items checklist ; stop conditions |
| **Gates Morris** | Avant exécution sensible et avant actions distantes |
| **Rôle copilote** | Guider l’étape courante ; signaler risques |
| **Interdit** | Sauter un gate ; fusionner commit/push/PR ; auto-clôture |

**Réserves :** libellés exacts des steps — alignement copy Figma en delivery ; loading/error run.

---

## 5. P0-03C — Décision Morris / Product premium

| Champ | Contenu |
|-------|---------|
| **node ID** | `22:270` |
| **Objectif** | Prononcer une décision explicite (GO / NO-GO / amendement / STOP / clôture / sélection) sur la base de preuves |
| **Acteurs** | **Morris uniquement** pour la décision |
| **Données visibles** | Hero ; panneau evidence ; options de décision ; confirmation ; copilote |
| **Actions principales** | Choisir option ; confirmer ; annuler |
| **Navigation** | Depuis P0-02C / P0-01C ; retour cycle après décision |
| **États principaux** | Evidence listée ; option sélectionnée ; confirmation requise |
| **Gates Morris** | **Cet écran est le gate** — autorité / portée / durée / révocabilité à afficher |
| **Rôle copilote** | Résumer preuves et risques — **jamais** décider |
| **Interdit** | Pré-cocher un GO ; décision silencieuse ; grouper merge+delete |

**Réserves :** texte exact des options GO selon typologie d’action — delivery ; empty evidence.

---

## 6. Parcours prioritaires (bornés aux 4 écrans)

### P-A — Ouvrir le workspace et comprendre l’état

P0-01C → lecture métriques / gates / activité → éventuel P0-02C.

### P-B — Créer une nouvelle demande

P0-01C → P0-00C → (qualification) → P0-02C.

### P-C — Suivre un cycle actif

P0-02C → checklist / inspector → STOP si besoin → P0-03C si gate.

### P-D — Prononcer un GO / STOP / clôture

P0-02C ou P0-01C → P0-03C → confirmation → retour P0-02C / P0-01C ; résultat vérifiable dans Git **après** exécution autorisée (hors ce cycle documentaire).

### P-E — Divergence / reprise (réserve)

Comportements détaillés empty/error/divergence : **à compléter après runtime** ; principe : Git prime ; pas de seconde vérité UI.

---

## 7. Hors P0 actif (historique / futur)

L’inventaire documentaire antérieur S01–S10 (portefeuille dédié, Git Truth dédié, registre, prompt, suivi, review, audit, paramètres…) n’est **pas** dans le P0 validé. Il peut informer un cycle UX/UI ultérieur après runtime, sans être baseline d’implémentation actuelle.

---

## 8. Liens

- Contrat visuel : [`14-ux-ui-contract.md`](./14-ux-ui-contract.md)
- Décisions : [`16-ux-ui-decision-pack.md`](./16-ux-ui-decision-pack.md)

---

*Parcours P0 — 4 frames Figma — UX/UI clôturé — Option B — Morris décide delivery.*

```

---

## 9. Contenu complet — 16-ux-ui-decision-pack.md (inchangé)

```markdown
# SFIA Studio — Decision pack UX/UI

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `16-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI (**CLÔTURÉ**) |
| **Statut** | `ux-ui-closed-implementation-reference` |
| **Horodatage consolidation** | 2026-07-19 00:44:00 CEST |
| **Décision Morris** | **Option B** — consolidation partielle |
| **Figma** | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO (`lrjA1WEyRpL05vKR8k29LO`) |
| **Architecture fonctionnelle** | **NON clôturée** formellement |
| **D-VAL-12 / D-VAL-13** | **Aucune** |

> Traçabilité des décisions UX/UI Morris. Distingue **validées**, **observations**, **réserves**, **recommandations** et **ouvertes**.

---

## 1. Décisions validées

| ID | Décision | Statut | Notes |
|----|----------|--------|-------|
| UX-DEC-01 | Sélection du cycle UX/UI (AF-CAND-11B) | **VALIDÉE** | Consomme AF-CAND-11A |
| UX-DEC-02 | Exécution du cycle UX/UI sur Figma | **VALIDÉE** | fileKey `lrjA1WEyRpL05vKR8k29LO` |
| UX-DEC-03 | Direction artistique Product premium | **VALIDÉE** | Référence d’implémentation **initiale** — non intangible |
| UX-DEC-04 | P0 limité à quatre frames | **VALIDÉE** | P0-00C…P0-03C |
| UX-DEC-05 | Validation des quatre frames + node IDs | **VALIDÉE** | `19:2`, `22:2`, `22:133`, `22:270` ; 1440×1024 |
| UX-DEC-06 | Suppression / hors P0 des frames et inventaires antérieurs (ex. 10 écrans) | **VALIDÉE** | Non baseline implémentation |
| UX-DEC-07 | Polish transversal et correction des chevauchements | **VALIDÉE** | Observé dans Figma |
| UX-DEC-08 | Option B — consolidation 14/15/16 | **VALIDÉE** | Pas de `14-ux-ui-design-contract.md` |
| UX-DEC-09 | Cycle UX/UI **clôturé** | **VALIDÉE** | |
| UX-DEC-10 | Figma autorisé comme référence d’implémentation initiale | **VALIDÉE** | |
| UX-DEC-11 | Nouveau cycle UX/UI possible après runtime | **VALIDÉE** (autorisation future) | |
| UX-DEC-12 | Architecture fonctionnelle non clôturée formellement | **CONFIRMÉE** | Décision distincte requise |
| UX-DEC-13 | Delivery = prochaine étape après sync documentaire | **AUTORISÉE** — **non exécutée** | |
| UX-DEC-14 | Commit / push / PR / merge interdits dans ce cycle local | **VALIDÉE** | Nouveau GO requis |

---

## 2. Observations (≠ décisions)

- Page Figma nommée `UX-B — P0` : cohérente avec un parcours guidé dans un shell gouverné.
- Les documents candidats pré-Figma (14/15/16 locaux antérieurs) proposaient dix écrans P0 et un Figma pending — **obsolètes** pour l’état validé.
- Sur `main` historique, AF-CAND-11B figurait NON DÉCIDÉE — état **historique** avant cette synchronisation.

---

## 3. Réserves

| Réserve | Contenu |
|---------|---------|
| R-UX-01 | Accessibilité non entièrement validée (cible WCAG 2.2 AA) |
| R-UX-02 | Responsive hors 1440 non validé |
| R-UX-03 | Micro-interactions / empty / error / loading à compléter |
| R-UX-04 | Tokens Figma précis à extraire en delivery |
| R-UX-05 | Conformité runtime non acquise — capture obligatoire |
| R-UX-06 | Les 4 frames ne couvrent pas tous les états produit futurs |

---

## 4. Recommandations (≠ décisions)

| Reco | Contenu | Statut |
|------|---------|--------|
| Reco-1 | En delivery, ancrer chaque écran aux node IDs §1 | Ouverte |
| Reco-2 | Comparer runtime ↔ Figma avant tout READY visuel | Ouverte |
| Reco-3 | Reporter Git Truth / audit dédiés à une itération UX post-runtime si besoin | Ouverte |

---

## 5. Décisions encore ouvertes

1. GO commit de la synchronisation documentaire (worktree).
2. GO push / PR / merge.
3. Lancement effectif du cycle **delivery / implémentation**.
4. Clôture formelle du cycle d’architecture fonctionnelle.
5. Architecture technique / stack / POC / MVP.
6. Contenu exact des itérations UX post-runtime.

---

## 6. Historique des options UX (REX)

| Option | Description | Sort |
|--------|-------------|------|
| UX-A | Cockpit dense gouvernance | Non retenue comme baseline seule |
| UX-B | Parcours guidé | **Direction Figma P0** (page UX-B) — référence visuelle |
| UX-H | Hybride | Recommandation documentaire pré-Figma — **non décision de clôture** ; shell+guidage présents dans Figma |

Les UX-CAND pré-Figma (inventaire S01–S10, Figma à produire, etc.) sont **historiques** et **non binding**.

---

## 7. Effets sur AF-CAND-11B

| Avant (historique Git) | Après (décision Morris) |
|------------------------|-------------------------|
| AF-CAND-11B NON DÉCIDÉE | **VALIDÉE** — UX/UI sélectionné, exécuté, clôturé |

Cette décision est **postérieure** aux packs architecture historiques et **ne** clôt **pas** l’architecture fonctionnelle.

---

## 8. Verdict de clôture UX/UI

**Cycle UX/UI : CLÔTURÉ**

Référence d’implémentation initiale : Figma `lrjA1WEyRpL05vKR8k29LO` — frames P0-00C…P0-03C.

Prochaine étape autorisée : **delivery / implémentation** (non lancée ici).

---

*Decision pack UX/UI — Option B — cycle clôturé — architecture ouverte — Morris décide versionnement.*

```

---

## 10. Diff utile complet — README.md

```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1264b2f..470e8dc 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,14 +4,16 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `functional-architecture-post-merge-integrated` — Architecture **VALIDÉE** et **INTÉGRÉE** ; sync post-merge **intégrée** (#212) ; finalisation documentaire **intégrée** (#213) ; clôture formelle **non prononcée** |
+| **Statut** | `ux-ui-closed-implementation-reference` — UX/UI **CLÔTURÉ** (référence Figma initiale) ; architecture **VALIDÉE** + **INTÉGRÉE** ; clôture formelle architecture **non prononcée** |
 | **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — post-merge #213 (DOC, Critical) — trace locale |
-| **Typologie cycle** | DOC — post-merge / intégration finale |
-| **Cycle projet** | 3 — Architecture (**VALIDÉE** + **INTÉGRÉE**) ; sync + finalisation **intégrées** ; clôture formelle **ouverte** |
+| **Exécuteur** | Cursor — capitalisation UX/UI Option B (DOC, Standard) — worktree local |
+| **Typologie cycle** | DOC — clôture documentaire UX/UI / transition delivery |
+| **Cycle projet** | 4 — UX/UI (**CLÔTURÉ**) ; architecture cycle 3 **intégrée** ; clôture formelle architecture **ouverte** |
 | **Profil SFIA** | Critical |
-| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `0b61d728…`) |
+| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée**) |
+| **Branche UX (worktree)** | `project/sfia-studio-ux-ui-reconciliation` — locale ; **non poussée** |
+| **Figma UX** | [lrjA1WEyRpL05vKR8k29LO](https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO) — P0-00C…P0-03C @ 1440×1024 |
 | **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
 | **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
@@ -26,15 +28,16 @@
 | **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
 | **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base canonique** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
 | **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
-| **AF-CAND-11B** | **NON DÉCIDÉE** — sélection du prochain cycle |
+| **AF-CAND-11B** | **VALIDÉE** — UX/UI sélectionné, exécuté et **clôturé** |
 | **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
-| **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) |
-| **Prochain cycle** | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (AF-CAND-11A) |
+| **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` — clôture formelle **NON PRONONCÉE** |
+| **UX/UI** | **CLÔTURÉ** — Option B ; 4 frames Figma ; docs `14`–`16` |
+| **Prochain cycle** | **Delivery** autorisé — **non exécuté** ; tech/POC/MVP **non lancés** |

 ---

@@ -54,7 +57,7 @@
 | Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
+| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
 | Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
 | Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
@@ -65,10 +68,11 @@
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
 | Clôture formelle cycle architecture | **NON PRONONCÉE** |
-| Prochain cycle | **Non sélectionné** (AF-CAND-11B) |
+| Cycle UX/UI | **CLÔTURÉ** — Option B ; Figma référence initiale |
+| Prochain cycle | **Delivery** autorisé — **non exécuté** |
 | Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |

-> PR #207 / #209 : historiques. PR #211 : architecture **intégrée** (`84e4863…`) — **fait Git** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). PR #212 : sync post-merge **intégrée** (`cb870544…`). PR #213 : finalisation documentaire **intégrée** (`19302836…`). Cette intégration ne prononce ni la clôture formelle du cycle d’architecture fonctionnelle, ni la sélection d’AF-CAND-11B, ni la suppression des branches conservées.
+> PR #207 / #209 : historiques. PR #211 : architecture **intégrée** (`84e4863…`) — **fait Git** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). PR #212 : sync post-merge **intégrée** (`cb870544…`). PR #213 : finalisation documentaire **intégrée** (`19302836…`). Les merges architecture/sync/finalisation ne prononcent pas la clôture formelle architecture ni la suppression des branches. **AF-CAND-11B a depuis été VALIDÉE** (UX/UI clôturé — décision Morris distincte).

 ---

@@ -140,12 +144,15 @@ Pré-cadrage                    ← terminé historiquement
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
   → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
-  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync #212 **intégrée** (`cb870544…`) — finalisation #213 **intégrée** (`19302836…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
-  → UX/UI (recommandé AF-CAND-11A) / architecture technique / POC ← **non sélectionnés** (AF-CAND-11B)
-  → MVP → delivery → industrialisation plateforme
+  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (#211–#214 / `5f1eb908…`) — clôture formelle **ouverte**
+  → UX/UI ← **SÉLECTIONNÉ** → **EXÉCUTÉ** → **CLÔTURÉ** (AF-CAND-11B ; Option B ; Figma P0-00C…03C)
+  → synchronisation documentaire ← **en cours** (worktree local)
+  → delivery / implémentation ← **autorisé** — **non exécuté**
+  → architecture technique / POC / MVP ← **non lancés**
+  → industrialisation plateforme
 ```

-Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (AF-Option C ; AF-CAND-01…10, 11A, 12). Cycle suivant **non sélectionné**. POC / MVP non lancés. Clôture formelle architecture **non automatique**.
+Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE**. UX/UI **CLÔTURÉ**. Delivery **non lancé**. POC / MVP non lancés. Clôture formelle architecture **non automatique**.

 ---

@@ -189,7 +196,24 @@ Aucune stack / architecture **technique** validée. Architecture **fonctionnelle
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |

-> Statut `functional-architecture-post-merge-integrated`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. PR #211 **MERGED** + acceptée. PR #212 **MERGED**. PR #213 **MERGED** — finalisation sur `main` (`19302836…`). Clôture formelle **non prononcée**.
+> Statut architecture `functional-architecture-post-merge-integrated` (intégration). **AF-Option C VALIDÉE**. AF-CAND-01…10, 11A, 12 **VALIDÉES**. **AF-CAND-11B VALIDÉE** (UX/UI clôturé). Aucune D-VAL-12. Clôture formelle architecture **non prononcée**.
+
+### UX/UI — CLÔTURÉ (cycle 4)
+
+| Document | Rôle |
+|----------|------|
+| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | Contrat visuel + règles transverses ; Figma `lrjA1WEyRpL05vKR8k29LO` |
+| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | Quatre écrans P0 et parcours |
+| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | Décisions UX Morris / Option B |
+
+| Frame | node | Dimensions |
+|-------|------|------------|
+| P0-00C Nouvelle demande | `19:2` | 1440×1024 |
+| P0-01C Vue synthèse | `22:2` | 1440×1024 |
+| P0-02C Cycle actif | `22:133` | 1440×1024 |
+| P0-03C Décision Morris | `22:270` | 1440×1024 |
+
+> Statut `ux-ui-closed-implementation-reference`. Référence Figma = implémentation **initiale** (non intangible). Delivery **autorisé**, non exécuté. Runtime screenshot obligatoire avant verdict visuel fort.

 ---

@@ -274,7 +298,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | AF-Option C (Studio / orchestrateur séparés) | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10 | **VALIDÉES** |
 | AF-CAND-11A (trajectoire recommandée) | **VALIDÉE** (recommandation uniquement) |
-| AF-CAND-11B (sélection prochain cycle) | **NON DÉCIDÉE** |
+| AF-CAND-11B (sélection prochain cycle) | **VALIDÉE** — UX/UI clôturé |
 | AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
 | D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |

@@ -282,7 +306,9 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01

 | Décision | Statut |
 |----------|--------|
-| AF-CAND-11B — sélection / lancement prochain cycle | **NON DÉCIDÉE** — UX/UI recommandé via 11A |
+| AF-CAND-11B — sélection / lancement prochain cycle | **VALIDÉE** — UX/UI clôturé |
+| Option B consolidation 14/15/16 | **VALIDÉE** |
+| Delivery | **Autorisé** — non exécuté |
 | Acceptation / régularisation documentaire du merge #211 | **Ouverte** — fait Git tracé ; pas de D-VAL auto |
 | Commit / push / PR sync (#212) + finalisation (#213) | **Réalisés et intégrés** — trace post-#213 locale éventuelle **non versionnée** ici |
 | Clôture formelle cycle architecture | **Non** — non automatique |
@@ -296,11 +322,12 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01

 ## 8. Prochaine décision

-1. Revue ChatGPT du handoff **post-merge #213**.
-2. Clôture formelle du cycle architecture (**non prononcée**).
-3. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
-4. Sort des branches (`pre-framing` / `functional-design` / `functional-architecture`).
-5. Sort des branches (décisions distinctes — suppression interdite ici).
+1. Revue ChatGPT de la synchronisation documentaire UX Option B.
+2. GO commit de la branche projet.
+3. GO push et PR distincts.
+4. Lancement du cycle delivery / implémentation.
+5. Clôture formelle du cycle architecture, décision distincte.
+6. Sort des branches `pre-framing` / `functional-design` / `functional-architecture`.

 **Verdict documentaire :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`

@@ -324,4 +351,4 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01

 ---

-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE — UX/UI CLÔTURÉ (Option B ; Figma P0) — delivery NON LANCÉ — clôture architecture NON PRONONCÉE — Option C méthode préservée — Morris décide.*

```

---

## 11. Diff utile complet — 07 (inchangé cette correction ; conservé pour revue)

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 6d25f39..fd47e29 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -7,10 +7,10 @@
 | **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
 | **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
-| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; acceptation #211 **VALIDÉE** |
+| **Statut** | `ux-ui-closed-implementation-reference` ; architecture `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` ; cycle 2 **clôturé** ; UX/UI **clôturé** |
+| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; **AF-CAND-11B VALIDÉE** (UX/UI clôturé) ; Option B UX **VALIDÉE** ; acceptation #211 **VALIDÉE** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `19302836b45d49f19698c624e99f2d68afa7b290` — cadrage + conception + architecture + sync + finalisation **intégrés** |
+| **Source de vérité** | Git `main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` — cadrage + conception + architecture + sync + finalisation + trace **intégrés** ; sync UX locale worktree |

 > Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`). Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`). Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`). Acceptation/régularisation #211 **VALIDÉE** (Morris — 2026-07-18). Clôture formelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.

@@ -36,7 +36,7 @@
 | Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
+| AF-CAND-11B | **VALIDÉE** — UX/UI **clôturé** |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
 | Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
 | Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
@@ -44,7 +44,8 @@
 | Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` |
 | Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
 | Clôture formelle cycle architecture | **NON PRONONCÉE** |
-| Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
+| Cycle UX/UI | **CLÔTURÉ** — Option B ; Figma `lrjA1WEyRpL05vKR8k29LO` ; docs `14`–`16` |
+| Prochain cycle | **Delivery** autorisé — **non exécuté** ; tech/POC/MVP **non lancés** |
 | Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |

 > Merges #207 / #209/#210 : historiques. Merge #211 (`84e4863…`) : architecture **intégrée** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). Merge #212 (`cb870544…`) : sync **intégrée**. Merge #213 (`19302836…`) : finalisation documentaire **intégrée** — ne prononce ni clôture formelle, ni AF-CAND-11B, ni suppression de branches.
@@ -124,8 +125,10 @@ Pré-cadrage                         ← terminé historiquement
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
   → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
-  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync #212 **intégrée** (`cb870544…`) — finalisation #213 **intégrée** (`19302836…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
-  → UX/UI (recommandé AF-CAND-11A)  ← **non sélectionnée** (AF-CAND-11B)
+  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (`5f1eb908…`) — clôture formelle **ouverte**
+  → UX/UI                           ← **SÉLECTIONNÉ → EXÉCUTÉ → CLÔTURÉ** (AF-CAND-11B ; Option B)
+  → synchronisation documentaire    ← **locale** (worktree)
+  → delivery / implémentation       ← **autorisé** — **non exécuté**
   → architecture technique candidate
   → définition du POC
   → POC de faisabilité (lot multi-cycle)
@@ -150,7 +153,7 @@ Pré-cadrage                         ← terminé historiquement
 - Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`).
 - Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`).
 - **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
-- **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
+- **AF-CAND-11B** : **VALIDÉE** — UX/UI clôturé.
 - Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
 - Clôture formelle architecture **non prononcée**.

@@ -188,21 +191,23 @@ Pré-cadrage                         ← terminé historiquement
 | Profil | Critical |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
 | D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
 | Branche | `project/sfia-studio-functional-architecture` — **conservée** |
 | Commits / merges | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync `33d61e3…` ; merge #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836…` |
 | Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) |
 | Acceptation #211 | **VALIDÉE** Morris 2026-07-18 (sans D-VAL-12) |
-| Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; clôture auto ; AF-CAND-11B |
+| Ne lance pas | Architecture technique ; stack ; POC ; MVP ; code ; clôture auto architecture |

 ### 4.3 UX/UI

 | Champ | Contenu |
 |-------|---------|
-| Statut | **Recommandé** (AF-CAND-11A) — **non sélectionné** (AF-CAND-11B) |
-| Déclencheur | GO Morris sur AF-CAND-11B |
-| Pourquoi pas maintenant | Sélection cycle non décidée ; Figma non lancé |
+| Statut | **CLÔTURÉ** — AF-CAND-11B VALIDÉE ; Option B ; Figma P0-00C…03C |
+| Référence | https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO |
+| Livrables | `14` / `15` / `16` |
+| Suite | Delivery autorisé — non exécuté ; runtime screenshot avant verdict visuel fort |
+| Ne lance pas | Architecture technique ; stack ; POC ; MVP ; clôture architecture |

 ### 4.4 Architecture technique

@@ -236,10 +241,13 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-2i3 | Sync post-merge PR #212 | Observation Git | **MERGED** (`cb870544…`) — sync **intégrée** |
 | D-NEXT-2i4 | Finalisation post-merge PR #213 | Observation Git | **MERGED** (`19302836…`) — finalisation **intégrée** |
 | D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
-| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
+| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **VALIDÉE** — UX/UI clôturé |
+| D-NEXT-2g1 | Option B consolidation UX docs | Morris | **VALIDÉE** |
+| D-NEXT-2g2 | Lancement delivery | Morris | **Autorisé** — non exécuté |
+| D-NEXT-2g3 | Commit/push/PR sync UX | Morris | **Non autorisé** (ce cycle) |
 | D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
-| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; architecture fonctionnelle validée sur le fond ; suite **non sélectionnée** |
+| D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; architecture validée ; **UX/UI clôturé** ; delivery suivant |
 | D-NEXT-5 | Niveau de preuve préalable au POC | Morris | Non pris |
 | D-NEXT-6 | Stratégie de mesure de la valeur | Morris / cadrage MVP | Non pris |
 | D-NEXT-7 | Gouvernance fournisseurs IA | Morris | Non pris |
@@ -283,7 +291,7 @@ Pré-cadrage                         ← terminé historiquement

 **AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.

-**AF-CAND-11B :** **NON DÉCIDÉE** — aucun cycle suivant lancé. Nouveau GO Morris requis.
+**AF-CAND-11B :** **VALIDÉE** — UX/UI clôturé. Delivery = prochain GO. Clôture architecture = GO distinct.

 Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici. Clôture formelle architecture **non prononcée**.

@@ -301,18 +309,18 @@ Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |

-Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). Sync #212 + finalisation #213 : **INTÉGRÉES** (`19302836…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **non décidée**.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). Sync #212 + finalisation #213 : **INTÉGRÉES** (`19302836…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **VALIDÉE** (UX/UI clôturé).

 ---

 ## 8. Questions Morris

-1. Clôturez-vous formellement le cycle architecture ?
-2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
-3. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
-4. Quel niveau d’architecture minimale avant POC ?
-5. Quelles priorités NFR avant le POC ?
-6. Autorisez-vous une trace documentaire post-#213 éventuelle (commit/push/PR) ?
+1. Autorisez-vous commit / push / PR de la sync UX (Option B) ?
+2. Lancez-vous le cycle **delivery / implémentation** ?
+3. Clôturez-vous formellement le cycle architecture (décision **distincte**) ?
+4. Quel sort pour les branches historiques ?
+5. Quelles priorités NFR / accessibilité avant le premier runtime review ?
+6. Quand planifiez-vous une itération UX post-runtime ?

 ---

@@ -335,7 +343,7 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Acceptation #211 | **VALIDÉE** — 2026-07-18 |
 | AF-Option C | **VALIDÉE** |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
 | Prochain cycle après architecture | **Non sélectionné** |

 ---
@@ -356,11 +364,11 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Finalisation #213 | **INTÉGRÉE** — `19302836…` |
 | Acceptation #211 | **VALIDÉE** |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |
 | Ready for POC / MVP / tech | **Non** |
 | Ready for Morris #213 post-merge review | **Oui** (trace locale) |

-**Verdict :** `SFIA STUDIO PR #213 POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
+**Verdict :** `READY FOR CHATGPT DOCUMENTARY REVIEW`

 ---

@@ -377,5 +385,8 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** et **INTÉGRÉE** |
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
+| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | UX/UI — contrat |
+| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | UX/UI — écrans P0 |
+| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | UX/UI — décisions |

-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE — UX/UI CLÔTURÉ (Option B) — delivery NON LANCÉ — clôture architecture NON PRONONCÉE — Morris décide.*

```

---

## 12. Diff utile complet — 13

```diff
diff --git a/projects/sfia-studio/13-functional-architecture-decision-pack.md b/projects/sfia-studio/13-functional-architecture-decision-pack.md
index 5d14684..76b244b 100644
--- a/projects/sfia-studio/13-functional-architecture-decision-pack.md
+++ b/projects/sfia-studio/13-functional-architecture-decision-pack.md
@@ -6,7 +6,7 @@
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
 | **Profil** | Critical |
-| **Base / main** | `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base / main** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Commit head PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **Merge #211** | `84e48636bb78808774b51f67329167f8e9749a6b` |
 | **Acceptation #211** | **VALIDÉE** — Morris — 2026-07-18 (sans D-VAL-12) |
@@ -15,7 +15,7 @@
 | **Commit finalisation #213** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
 | **Merge #213** | `19302836b45d49f19698c624e99f2d68afa7b290` |
 | **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** |
-| **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |
+| **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) · UX [14](./14-ux-ui-contract.md)–[16](./16-ux-ui-decision-pack.md) |

 > **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.
 > **AF-Option A/B/C** = options d’architecture fonctionnelle — **distinctes** de l’**Option C méthode** SFIA v2.6 (relation produit/méthode déjà validée).
@@ -36,7 +36,7 @@

 ## 2. Hors périmètre (interdit)

-Stack ; API ; BDD ; services techniques ; Figma ; backlog ; POC ; MVP ; code ; commit/push/PR projet ; lancement cycle suivant ; D-VAL-12.
+Stack ; API ; BDD ; services techniques ; backlog ; POC ; MVP ; code ; commit/push/PR projet (sans GO) ; clôture architecture automatique ; D-VAL-12. *(Figma UX désormais référencé dans `14`–`16` — hors architecture technique.)*

 ---

@@ -142,7 +142,7 @@ Justification : préserve INV-12 / BR-019 / BR-025 ; évite fusion Studio/décid
 | AF-CAND-09 | Preuve / audit : journal ≠ preuve Git ≠ verdict ≠ décision | **VALIDÉE** | Observabilité | ≠ outil APM |
 | AF-CAND-10 | Option d’architecture = **AF-Option C** | **VALIDÉE** | Orientation | ≠ validation tech |
 | AF-CAND-11A | Trajectoire recommandée après architecture fonctionnelle (voir §6.1) | **VALIDÉE** (recommandation uniquement) | Oriente la séquence | Ne lance aucun cycle |
-| AF-CAND-11B | Sélection effective du prochain cycle | **NON DÉCIDÉE / À SÉLECTIONNER** | — | Nouveau GO Morris requis |
+| AF-CAND-11B | Sélection effective du prochain cycle | **VALIDÉE** — UX/UI sélectionné, exécuté et **clôturé** | Morris — post-architecture | **Ne clôt pas** l’architecture fonctionnelle ; Option B UX ; Figma P0 ; delivery autorisé non exécuté |
 | AF-CAND-12 | Aucune D-VAL-12 ; AF-CAND ≠ D-VAL | **VALIDÉE** | Gouvernance | — |

 ### 6.1 AF-CAND-11A — Trajectoire recommandée (VALIDÉE)
@@ -158,13 +158,13 @@ Après validation et intégration documentaire de l’architecture fonctionnelle

 **Effets :** oriente la séquence ; prépare le futur cycle UX/UI ; **ne lance** aucun cycle ; **ne valide** aucune architecture technique ; **ne définit** ni POC ni MVP.

-### 6.2 AF-CAND-11B — Sélection du prochain cycle (NON DÉCIDÉE)
+### 6.2 AF-CAND-11B — Sélection du prochain cycle (**VALIDÉE** — UX/UI clôturé)

 La sélection effective du prochain cycle reste une décision Morris **distincte**.

-**Statut :** **NON DÉCIDÉE / À SÉLECTIONNER**.
+**Statut :** **VALIDÉE** — cycle UX/UI sélectionné, exécuté sur Figma et **clôturé** (décision Morris postérieure à ce pack historique).

-**Effets :** aucun cycle lancé automatiquement ; UX/UI reste seulement le prochain cycle **recommandé** (via 11A) ; un nouveau GO Morris est requis pour sélectionner et lancer le cycle suivant.
+**Effets :** UX/UI **lancé et clôturé** ; docs `14`–`16` ; Figma `lrjA1WEyRpL05vKR8k29LO` (P0-00C…03C). **Ne clôt pas** l’architecture fonctionnelle. Delivery = prochaine étape **autorisée**, non exécutée. Tech/POC/MVP non lancés.

 ---

@@ -240,7 +240,7 @@ Voir document 12 §9 — couverture complète via AF-01…AF-15.
 | 11 | AF-12 |
 | 12 | FB-12, **AF-Option C** |
 | 13 | AF-06/10 |
-| 14 | AF-CAND-* ; AF-CAND-11B non décidée |
+| 14 | AF-CAND-* ; AF-CAND-11B VALIDÉE (UX/UI clôturé) — postérieur |

 ### AC-01…08 / RF-01…07

@@ -254,11 +254,11 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde

 ## 8. Risques / réserves / questions Morris

-**Risques :** AF-Option B seconde vérité (écartée) ; FB pris pour microservices ; Runtime contractuel implicite ; confusion AF-Option C / Option C méthode ; promotion implicite d’AF-CAND-11B.
-**Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; cycle suivant non sélectionné.
+**Risques :** AF-Option B seconde vérité (écartée) ; FB pris pour microservices ; Runtime contractuel implicite ; confusion AF-Option C / Option C méthode ; confusion delivery/clôture architecture (AF-CAND-11B déjà tranché).
+**Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; UX/UI clôturé (AF-CAND-11B) ; delivery non exécuté ; clôture architecture ouverte.
 **Questions Morris restantes :**
 1. Clôturez-vous formellement le cycle architecture ?
-2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
+2. (Historique) AF-CAND-11B — **VALIDÉE** depuis (UX/UI clôturé). Prochaine question : lancez-vous le **delivery** ?
 3. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
 4. Quel niveau d’architecture minimale avant POC ?
 5. Autorisez-vous une trace documentaire post-#213 éventuelle ?
@@ -271,14 +271,15 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 |------|--------|
 | Validation AF-Option C | **FAIT** |
 | Validation AF-CAND-01…10, 11A, 12 | **FAIT** |
-| AF-CAND-11B sélection cycle | **OUVERT** |
+| AF-CAND-11B sélection cycle | **VALIDÉE** — UX/UI clôturé |
 | Versionnement architecture | **FAIT** |
 | Intégration PR #211 sur `main` | **FAIT Git** (`84e4863…`) |
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 |
 | Sync post-merge PR #212 | **INTÉGRÉE** — `cb870544…` |
 | Finalisation post-merge PR #213 | **INTÉGRÉE** — `19302836…` |
 | Clôture formelle cycle architecture | **Non** — **non prononcée** |
-| Lancement UX/UI / tech / POC / MVP | **Non** |
+| Lancement UX/UI | **Fait / clôturé** |
+| Lancement tech / POC / MVP | **Non** |

 ---

@@ -290,7 +291,7 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 | FB-01…12 | Services créés |
 | AF-CAND-01…10, 11A, 12 | D-VAL-12 |
 | AF-CAND-11A (trajectoire) | Cycle suivant lancé |
-| AF-CAND-11B | Toujours **non décidée** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI clôturé |

 ---

@@ -298,7 +299,7 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde

 **Recommandation (AF-CAND-11A VALIDÉE) :** UX/UI fonctionnelle et visuelle en premier, puis architecture technique, POC borné, MVP après retour POC.

-**Sélection (AF-CAND-11B) :** **NON DÉCIDÉE**. Aucun cycle lancé. Nouveau GO Morris requis.
+**Sélection (AF-CAND-11B) :** **VALIDÉE** — UX/UI clôturé. Delivery autorisé non exécuté. Clôture architecture = GO distinct.

 ---

@@ -307,9 +308,9 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 **Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` — PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).

 Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12 ; acceptation #211.
-Non décidé : AF-CAND-11B ; clôture formelle.
-Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Clôture formelle **non prononcée**.
+Non décidé : clôture formelle architecture ; delivery effectif ; tech/POC/MVP.
+Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle delivery, architecture technique, POC ou MVP lancé. Clôture formelle **non prononcée**.

 ---

-*Pack AF validé et intégré — Critical — sync #212 + finalisation #213 intégrées — Morris décide AF-CAND-11B / clôture.*
+*Pack AF validé et intégré — AF-CAND-11B VALIDÉE (UX/UI clôturé) — architecture NON clôturée — Morris décide delivery / clôture archi.*

```

---

## 13. Décisions Morris (rappel, non modifiées)

Option B ; 14/15/16 conservés ; pas de 14-ux-ui-design-contract.md ; P0 = 4 frames ; UX clôturé ; Figma référence initiale ; architecture non clôturée ; delivery autorisé non exécuté ; pas de commit/push/PR projet dans ce cycle.

## 14. Figma (rappel)

URL https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO — fileKey `lrjA1WEyRpL05vKR8k29LO` — P0-00C `19:2` ; P0-01C `22:2` ; P0-02C `22:133` ; P0-03C `22:270` — 1440×1024. Runtime screenshot obligatoire avant verdict visuel fort.

## 15. Réserves

Responsive / a11y / micro-interactions / empty-error-loading / conformité runtime / delivery non lancé.

## 16. Validations

- « Aucun cycle suivant lancé » : **absent**
- Liste README 1–6 sans doublon : **OK**
- Distinction handoff initial / publication actuelle : **OK**
- 07/14/15/16 non modifiés par cette correction : **OK**
- Aucun staged / commit projet : **OK**

## 17. Verdict

**READY FOR COMMIT — DOCUMENTARY CONSISTENCY RESTORED**

Publication handoff : **HANDOFF REQUIRED — UPDATED — REMOTE VERIFIED** (après push).
