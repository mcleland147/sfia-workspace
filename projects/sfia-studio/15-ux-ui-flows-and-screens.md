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
