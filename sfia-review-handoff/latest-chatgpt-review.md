# Review pack — SFIA Studio POC vertical slice UX/UI

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 21:44:24 CEST |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Typologie** | DOC / UX |
| **Branche** | `design/sfia-studio-poc-vertical-slice` (locale — aucun push projet) |
| **HEAD** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **origin/main** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Niveau** | **full** |
| **Verdict** | `SFIA STUDIO VERTICAL SLICE UX/UI READY — MORRIS VISUAL VALIDATION REQUIRED` |
| **Statut** | READY FOR MORRIS UX/UI REVIEW |

---

## 1. Truth Check

| Contrôle | Résultat |
|----------|----------|
| Workspace | `/Users/morris/Projects/sfia-workspace` |
| Branche | `design/sfia-studio-poc-vertical-slice` |
| HEAD / origin/main | Alignés `eb180638…` |
| Docs 32–34 | Présents (untracked) |
| Collision 35–37 | Absente à la création |
| Staged | Aucun |
| Modifs versionnées étrangères | Aucune |
| app/** / harness/** | Non modifiés |

---

## 2. Décisions Morris appliquées

- VS-CAND-01…13, 15 : **VALIDÉES**
- VS-CAND-14 : **VALIDÉE AVEC RÉSERVE** — plafond obligatoire, valeur **À définir**, aucun retry auto

---

## 3. Sources consultées

### Git / docs
- Template cycle + routing guide
- `32`–`34` fonctionnels vertical slice
- UX P0 `14`–`16`
- POC `20`–`31` (contexte)
- Handoff `origin/sfia/review-handoff` @ `b35683c…`
- `app/**` lecture seule (routes, shell, tokens)

### Figma
- fileKey `lrjA1WEyRpL05vKR8k29LO`
- Page P0 `0:1` — frames `19:2`, `22:2`, `22:133`, `22:270` — **1440×1024** confirmés
- P0 **non modifiées** (vérifié post-création)

---

## 4. Rôle documents 35–37

| Doc | Rôle | Lignes |
|-----|------|--------|
| 35 | Contrat UX/UI + contrat visuel Figma extrait | 189 |
| 36 | Flows, inventaire frames, node IDs, variantes | 172 |
| 37 | Decision pack VS-UX-CAND + gates | 138 |

---

## 5. Figma créé

| Élément | ID |
|---------|-----|
| Page | `UX-B — POC Vertical Slice` `51:2` |
| VS-UX-01 | `51:3` |
| VS-UX-02 | `51:139` |
| VS-UX-03 | `51:277` |
| VS-UX-04 | `51:415` |
| VS-UX-05 | `51:540` |
| VS-UX-06 | `51:678` |
| VS-UX-07 | `51:816` |
| VS-UX-08 | `51:954` |
| VS-UX-09 | `51:1079` |
| VS-UX-10 | `51:1204` |
| VAR Loading | `52:2` |
| VAR Erreur | `52:10` |
| VAR STOP | `52:18` |
| VAR GO invalide | `52:26` |
| NOTE Gate 4 actions | `52:34` |

Toutes frames principales : **1440 × 1024**.

Lien : https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO?node-id=51-2

### Captures locales (review pack)
```
.tmp-sfia-review/figma-screenshots/
  VS-UX-01.png, VS-UX-02.png, VS-UX-04.png, VS-UX-05.png,
  VS-UX-08.png, VS-UX-09.png, VS-UX-10.png, VS-UX-VAR-GO-invalide.png
```

---

## 6. Contrat visuel (synthèse)

Shell Product premium : rail 64 · topbar · canvas · copilote · brand accent.  
Tokens : blue/purple/green/orange, Inter, 1440×1024.  
FinOps : compteur + plafond « À définir » + no retry.  
GO invalidable · STOP prioritaire · verdict candidat · clôture Morris.

---

## 7. Couverture 10 étapes

01 Nouvelle demande → 02 Qualif en cours → 03 Qualif proposée → 04 Gate → 05 Exécution → 06 Rapport → 07 Analyse → 08 Verdict → 09 Décision → 10 Clôture.  
Variantes : loading, erreur fail-closed, STOP, GO invalide.

---

## 8. git status

```
?? .tmp-sfia-review/
?? projects/sfia-studio/32-poc-vertical-slice-functional-design.md
?? projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md
?? projects/sfia-studio/34-poc-vertical-slice-decision-pack.md
?? projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
?? projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
?? projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
```

### Preuve aucun app/harness
Aucune entrée `app/**` ou `harness/**` dans le status. Fichiers existants `01`–`34` non modifiés dans ce cycle UX (32–34 non édités).

### Diff stat (nouveaux docs)
| Fichier | Lignes |
|---------|--------|
| 35 | 189 |
| 36 | 172 |
| 37 | 138 |

---

## 9. Fichiers créés / modifiés

### Créés
- `projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md`
- `projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md`
- `projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md`
- `.tmp-sfia-review/chatgpt-review.md`
- `.tmp-sfia-review/figma-screenshots/*.png`

### Modifiés (Git existants)
- **Aucun**

### Figma
- Nouvelle page + 10 frames + 5 annotations — P0 intact

---

## 10. Garde-fous

Option B · Git vérité · Morris L0 · GPT ≠ décision · Cursor sandbox · pas remote Git · timeout ≠ GO · pas secret · plafond À définir · pas retry · pas code · pas live · pas commit projet

---

## 11. Réserves

1. Copy Figma peut nécessiter polish (labels hérités P0 partiels)
2. Abandon gate = note + confirmation (pas 4e carte) — VS-UX-CAND-10
3. Variantes = annotations 720×420, pas full screens
4. Accessibilité = contrat cible, pas audit
5. VS-UX-10 portfolio : certaines lignes héritées synthèse P0
6. Docs 35–37 non versionnés projet
7. Valeur plafond GPT non fixée (volontaire)

---

## 12. Options / recommandations

Voir doc 37. Recommandation : validation visuelle Morris → arbitrage Abandon → backlog → delivery sous GO distincts.

---

## 13. Décisions Morris attendues

1. Valider VS-UX-CAND-01…12
2. Valider frames Figma candidates
3. Arbitrer 4e carte Abandon
4. GO versionnement docs 35–37 (séparé)
5. Ne pas traiter comme GO delivery/live/merge

---

## 14. Contrôles accessibilité / FinOps

Accessibilité : tab order, focus, labels, contraste AA cible, STOP clavier, sens non-couleur — documentés dans 35/36.  
FinOps : compteurs séparés qualif/analyse, plafond À définir, no retry, arrêt avant conso — visibles 02/07.

---

## 15. Confirmation

Aucun code · aucun live GPT/Cursor · aucun commit/push/PR projet · handoff review uniquement.

---

## 16. Verdict

`SFIA STUDIO VERTICAL SLICE UX/UI READY — MORRIS VISUAL VALIDATION REQUIRED`

---

# ANNEXE A — Contenu intégral document 35

# SFIA Studio — Contrat UX/UI du vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio |
| **Document** | `35-poc-vertical-slice-ux-ui-contract.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Typologie** | DOC / UX |
| **Baseline** | SFIA v2.6 |
| **Branche** | `design/sfia-studio-poc-vertical-slice` (**locale**) |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Statut** | `draft-for-morris-visual-validation` — **frames candidates, non validées** |
| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page source** | `UX-B — P0` |
| **Page créée** | `UX-B — POC Vertical Slice` |
| **Code / live** | **Aucun** |

> Contrat UX/UI du parcours gouverné en **dix** étapes. Continuité visuelle Product premium (P0).  
> Les frames VS-UX sont **candidates** jusqu’à GO Morris. Ne pas modifier les frames P0.

---

## 1. Décisions Morris appliquées (amont)

| ID | Statut appliqué |
|----|-----------------|
| VS-CAND-01 … VS-CAND-13 | **VALIDÉES** |
| VS-CAND-15 | **VALIDÉE** |
| VS-CAND-14 | **VALIDÉE AVEC RÉSERVE** — plafond GPT obligatoire, valeur numérique **À définir** (non inventée) |

Architecture Option B, Git = vérité, Morris L0, GPT ≠ décision, Cursor sandbox borné : **maintenus**.

---

## 2. Contrat visuel Figma extrait

| Élément | Valeur observée / retenue |
|---------|---------------------------|
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **page source** | `UX-B — P0` (`0:1`) |
| **frames sources** | P0-00C `19:2` · P0-01C `22:2` · P0-02C `22:133` · P0-03C `22:270` |
| **dimensions** | **1440 × 1024** (confirmé MCP sur les quatre frames) |
| **shell général** | Product premium — fond clair `#f6f9ff` / `#f6f9fe`, ink `#141c30` |
| **rail utilitaire** | ~64 px ; brand « S » ; icônes nav ; avatar / pill bas ; **aucun GO** |
| **topbar** | Eyebrow `SFIA STUDIO` ; titre workspace ; pills statut ; onglets ; CTA global non destructif |
| **canvas** | Hero + zone métier (formulaire / stepper / evidence / options) |
| **panneau copilote** | ~334–340 px ; résumé + suggestions **≠ décision** ; composer |
| **grille / colonnes** | Flush : canvas ~972 px + copilote 340 px ; Floating (00C) : workspace 968 + copilote 334 |
| **spacings clés** | 8 / 12 / 16 / 20 / 24 / 28 px ; rayons 12 / 16 / 20 / 24 |
| **typographies** | Inter (app) ; eyebrow meta 11–12 px ; titres hero ~24–29 px ; body 15–16 px |
| **couleurs / tokens** | Blue `#3863f5` · Purple `#7a4df5` · Green `#21c28a` · Orange `#faa629` · Pink `#f25794` · Navy heroes · Brand accent gradient |
| **cartes** | Surfaces blanches, ombres soft, accent bar métriques |
| **badges / statuts** | Pills (draft, ready, candidat, risque, Git, mode) — sens **aussi** textuel |
| **CTA** | Primaire plein ; secondaire outline ; STOP / danger distinct |
| **styles de gates** | Options décision + dossier preuves ; confirmation explicite |
| **preuves** | Listes evidence / inspector / trust blocks |
| **loading / erreur / STOP / vide** | P0 partiel (STOP box) ; **à étendre** sur VS (documenté ci-dessous) |
| **écarts connus** | App P0 = 4 écrans ; slice = 10 ; loading/error absents en app |
| **incertitudes** | Tokens Figma variables vides côté MCP — hex issus design context / `tokens.css` |
| **impacts VS** | Cloner shell P0 ; adapter canvas par étape ; ne pas toucher `19:2`/`22:*` P0 |

### Limites de lecture MCP

- `get_metadata` + `get_screenshot` : structure et dimensions confirmées.
- Variables Figma : historiquement vides ; tokens app `styles/tokens.css` comme relais documentaire.
- Textes exacts : partiellement masqués en metadata (noms de layers) — copy VS renseignée sur clones.

---

## 3. Objectif UX

Permettre à Morris de **voir et contrôler** le parcours Studio → GPT → gate → harness/Cursor → rapport → GPT verdict → décision → clôture, sans faire de Studio une source de vérité et sans auto-GO.

---

## 4. Matrice parcours → frame → autorité

| Étape | Frame | Shell source | Autorité action | Preuve UI |
|-------|-------|--------------|-----------------|-----------|
| 1 Nouvelle demande | VS-UX-01 | P0-00C floating | Morris saisit | StudioRequest |
| 2 Qualification en cours | VS-UX-02 | P0-02C flush | Système GPT ; STOP Morris | event qualif |
| 3 Qualification proposée | VS-UX-03 | P0-02C | Morris revue | QualificationCandidate |
| 4 Gate Morris | VS-UX-04 | P0-03C | **Morris seul** | MorrisGateDecision |
| 5 Exécution | VS-UX-05 | P0-02C | Harness/Cursor ; STOP Morris | ExecutionEvents |
| 6 Rapport | VS-UX-06 | P0-02C | Morris lit | CursorExecutionReport |
| 7 Analyse GPT | VS-UX-07 | P0-02C | GPT analyse ; STOP conso | event analyse |
| 8 Verdict proposé | VS-UX-08 | P0-03C | GPT candidat | GptVerdictCandidate |
| 9 Décision Morris | VS-UX-09 | P0-03C | **Morris seul** | MorrisFinalDecision |
| 10 Clôture | VS-UX-10 | P0-01C | Affichage dérivé | CycleSummary |

---

## 5. Exigences UX `VS-UX-FR-*`

| ID | Exigence |
|----|----------|
| VS-UX-FR-01 | Dix frames distinctes 1440×1024 ; pas de fusion silencieuse |
| VS-UX-FR-02 | Shell P0 conservé (rail / topbar / canvas / copilote) |
| VS-UX-FR-03 | Copilote jamais présenté comme décision Morris |
| VS-UX-FR-04 | GO visible uniquement sur VS-UX-04 ; ancré hash/HEAD/branche/allowlist |
| VS-UX-FR-05 | Invalidation GO représentée (bandeau / état invalide) |
| VS-UX-FR-06 | STOP prioritaire et accessible clavier |
| VS-UX-FR-07 | FinOps : appels GPT séparés (qualif ≠ analyse) ; plafond « À définir » ; pas de retry auto |
| VS-UX-FR-08 | Verdict GPT étiqueté **candidat** |
| VS-UX-FR-09 | Clôture uniquement via décision Morris (VS-UX-09→10) |
| VS-UX-FR-10 | Aucun secret / token / PII réelle dans les maquettes |
| VS-UX-FR-11 | Aucune écriture Git distante groupée dans les CTA |
| VS-UX-FR-12 | Source de statut (Git / harness / dérivé Studio) lisible |
| VS-UX-FR-13 | Fail-closed GPT visible (erreur + pas de suite) |
| VS-UX-FR-14 | Frames P0 non modifiées ; VS non « baseline validée » |

---

## 6. États transverses (contrat)

| État | Représentation | Frames concernées |
|------|----------------|-------------------|
| Loading | Phase active + spinner textuel + compteur appel | 02, 05, 07 |
| Erreur fail-closed | Banner erreur + CTA correction/abandon | 02, 07 (+ autres) |
| STOP | CTA danger prioritaire + journal | 02, 05, 07 |
| GO invalide | Banner « GO invalide — HEAD/contrat changé » | 04, 05 |
| Vide / incomplet | Message « rapport/pack incomplet » | 06, 08 |
| Candidat | Badge « Candidat GPT » | 03, 08 |

---

## 7. Accessibilité (contrat cible — pas un audit)

Pour **chaque** frame VS-UX :

| Critère | Contrat |
|---------|---------|
| Ordre de tabulation | Rail → topbar → canvas → actions → copilote |
| Focus visible | Outline blue `#3863f5` (app) |
| Labels explicites | Inputs / CTA avec nom accessible |
| CTA | Nom = verbe + objet (ex. « Qualifier la demande ») |
| Couleur | Statuts aussi textuels / icônes |
| Contraste | Cible WCAG 2.2 AA |
| Annonce états | Live region pour loading / erreur / STOP |
| Erreurs | Associées au champ / phase |
| Gates | Conséquences textuelles sous chaque option |
| STOP | Toujours atteignable au clavier dès phases 02/05/07 |

**Ne pas** prétendre qu’un audit complet a été réalisé.

---

## 8. FinOps UI

| Élément | Affichage |
|---------|-----------|
| Appels consommés | Compteur `n / plafond` |
| Plafond | **À définir** (obligatoire, non numérique) |
| Séparation | Qualification vs Analyse |
| Retry | Mention explicite « Aucun retry automatique » |
| Coût € | **Non affiché** (interdit d’inventer) |
| Arrêt | CTA avant nouvel appel |

---

## 9. Sécurité & observabilité UI

Afficher si pertinent : `requestId`, `correlationId`, `contractId`, `contractHash`, branche, HEAD, sandbox, allowlist, horodatage+fuseau, source statut, preuve, erreur, invalidation GO, STOP.

Ne jamais afficher : token, clé API, secret, chemin utilisateur sensible non masqué, PII réelle.

---

## 10. Continuité app (lecture seule)

Routes actuelles : `/nouvelle-demande`, `/synthese`, `/cycle-actif`, `/decision`.  
Shell : `StudioShell` + tokens `styles/tokens.css`.  
**Limite :** l’app ne couvre pas encore les 10 étapes — les frames VS sont le contrat pour un futur delivery (hors cycle).

---

## 11. Hors périmètre

Code · modif `app/**` / harness · API/BDD · live GPT/Cursor · responsive mobile · claim MVP/prod · modif docs `01`–`34` · modif frames P0 · promotion VS comme baseline.

---

## 12. Documents liés

- [`36-poc-vertical-slice-ux-ui-flows-and-frames.md`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md)  
- [`37-poc-vertical-slice-ux-ui-decision-pack.md`](./37-poc-vertical-slice-ux-ui-decision-pack.md)  
- Fonctionnel : [`32`](./32-poc-vertical-slice-functional-design.md)–[`34`](./34-poc-vertical-slice-decision-pack.md)  
- P0 : [`14`](./14-ux-ui-contract.md)–[`16`](./16-ux-ui-decision-pack.md)


---

# ANNEXE B — Contenu intégral document 36

# SFIA Studio — Flows, frames et inventaire Figma (vertical slice POC)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `36-poc-vertical-slice-ux-ui-flows-and-frames.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Statut** | `draft-for-morris-visual-validation` — **non validé** |
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page** | `UX-B — POC Vertical Slice` (`51:2`) |
| **Companion** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |

> Inventaire des frames candidates, node IDs, correspondance aux dix étapes, états, interactions et écarts P0.  
> Les frames **ne sont pas** une baseline validée.

---

## 1. Pages Figma

| Page | node ID | Rôle |
|------|---------|------|
| `UX-B — P0` | `0:1` | Référence validée — **non modifiée** |
| `UX-B — POC Vertical Slice` | `51:2` | Frames VS candidates (ce cycle) |

---

## 2. Frames sources P0 (lues, non modifiées)

| Frame | node ID | Dimensions |
|-------|---------|------------|
| P0-00C — Nouvelle demande | `19:2` | 1440 × 1024 |
| P0-01C — Vue synthèse | `22:2` | 1440 × 1024 |
| P0-02C — Cycle actif | `22:133` | 1440 × 1024 |
| P0-03C — Décision Morris | `22:270` | 1440 × 1024 |

---

## 3. Inventaire frames vertical slice

| Frame | node ID | Dimensions | Clone source | Étape |
|-------|---------|------------|--------------|-------|
| VS-UX-01 — Nouvelle demande | `51:3` | 1440 × 1024 | P0-00C | 1 |
| VS-UX-02 — Qualification en cours | `51:139` | 1440 × 1024 | P0-02C | 2 |
| VS-UX-03 — Qualification proposée | `51:277` | 1440 × 1024 | P0-02C | 3 |
| VS-UX-04 — Gate Morris | `51:415` | 1440 × 1024 | P0-03C | 4 |
| VS-UX-05 — Exécution | `51:540` | 1440 × 1024 | P0-02C | 5 |
| VS-UX-06 — Rapport disponible | `51:678` | 1440 × 1024 | P0-02C | 6 |
| VS-UX-07 — Analyse GPT | `51:816` | 1440 × 1024 | P0-02C | 7 |
| VS-UX-08 — Verdict proposé | `51:954` | 1440 × 1024 | P0-03C | 8 |
| VS-UX-09 — Décision Morris | `51:1079` | 1440 × 1024 | P0-03C | 9 |
| VS-UX-10 — Clôture | `51:1204` | 1440 × 1024 | P0-01C | 10 |

Lien fichier : https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO?node-id=51-2

---

## 4. Variantes / annotations

| Variante | node ID | Dimensions | Rôle | Frames couvertes |
|----------|---------|------------|------|------------------|
| VS-UX-VAR — Loading GPT | `52:2` | 720 × 420 | Phase active + FinOps | 02, 07 (+05) |
| VS-UX-VAR — Erreur fail-closed | `52:10` | 720 × 420 | Rejet GPT | 02, 07 |
| VS-UX-VAR — STOP Morris | `52:18` | 720 × 420 | STOP prioritaire | 02, 05, 07 |
| VS-UX-VAR — GO invalide | `52:26` | 720 × 420 | Invalidation ancrage | 04, 05 |
| VS-UX-NOTE — Gate 4 actions | `52:34` | 720 × 420 | Mapping Abandon | 04 |

---

## 5. Contenu fonctionnel par frame

### VS-UX-01 — Nouvelle demande
- Intention Markdown sandbox ; requestId candidat ; repo/branche/HEAD ; sandbox.
- CTA : **Qualifier la demande** — aucun GO.
- Copilote = recommandation.

### VS-UX-02 — Qualification en cours
- Phase GPT qualification ; compteur `n / À définir` ; aucun retry auto ; STOP ; erreur fail-closed (variante).

### VS-UX-03 — Qualification proposée
- Cycle, profil, périmètre, allowlist/denylist, risques, contrat, contractHash, source GPT.
- CTA : Ouvrir gate Morris / Demander correction — **pas** d’auto-GO.

### VS-UX-04 — Gate Morris
- Dossier ancré : requestId, contractId, contractHash, branche, HEAD, allowlist, autorité, horodatage.
- Actions : GO · NO-GO · CORRECTION · ABANDON (3 cartes + note Abandon).
- Mécanisme invalidation GO (bandeau / variante).

### VS-UX-05 — Exécution
- Harness + Cursor sandbox ; fichier autorisé ; journal dérivé ; STOP ; pas de remote ; pas de commandes inventées.

### VS-UX-06 — Rapport disponible
- Markdown produit ; rapport ; allowlist ; remote=0 ; preuves ; réserves ; CTA analyse GPT.

### VS-UX-07 — Analyse GPT
- Appel distinct ; compteur ; plafond À définir ; aucun retry ; fail-closed ; arrêt avant conso.

### VS-UX-08 — Verdict proposé
- Badge **candidat** ; preuves ; réserves ; incohérences ; CTA décision Morris.

### VS-UX-09 — Décision Morris
- Clôturer · Corriger · Relancer (nouveau GO) · Abandonner ; conséquences ; pas d’actions Git groupées.

### VS-UX-10 — Clôture
- Décision ; statut ; traçabilité ; appels GPT ; réserves ; prochaines actions séparées ; **aucun** claim MVP/prod.

---

## 6. Transitions UX

```text
01 → 02 (Qualifier)
02 → 03 (qualif OK) | variante erreur/STOP
03 → 04 (Ouvrir gate) | correction → 02
04 → 05 (GO) | NO-GO/Abandon → 10- | correction → 02
05 → 06 (fin) | STOP → stoppé
06 → 07 (Lancer analyse)
07 → 08 (verdict OK) | fail-closed
08 → 09
09 → 10 (clôturer) | correction/relance (nouveau GO) | abandon
```

---

## 7. Interactions candidates (non delivery)

| Action UI | Autorité | Effet attendu |
|-----------|----------|---------------|
| Qualifier la demande | Morris | Déclenche qualif GPT via adaptateur→harness |
| STOP | Morris | stoppé immédiat |
| Ouvrir gate | Morris | Affiche dossier |
| GO / NO-GO / Correction / Abandon | Morris | Gate decision |
| Lancer analyse GPT | Morris | 2e appel GPT |
| Confirmer décision finale | Morris | Clôture / reprise |

---

## 8. Écarts au P0

| Écart | Traitement |
|-------|------------|
| 4 écrans P0 vs 10 VS | Extension documentée — P0 inchangé |
| Loading/error absents P0 | Variantes VS ajoutées |
| Gate P0 = 3 options | 4e action Abandon en note + confirmation |
| Synthèse P0 ≠ clôture slice | VS-UX-10 réutilise shell synthèse pour CycleSummary |
| App routes limitées | Hors cycle — delivery futur |

---

## 9. Accessibilité par frame (checklist cible)

| Frame | Tab order | Focus | Labels CTA | STOP | Contraste cible |
|-------|-----------|-------|------------|------|-----------------|
| 01–10 | Rail→top→canvas→actions→copilote | Oui | Verbe+objet | 02/05/07 | WCAG 2.2 AA |

Pas d’audit runtime réalisé.

---

## 10. FinOps / sécurité (rappel UI)

- Plafond : **À définir** · pas de retry auto · pas de coût € inventé.
- IDs visibles · secrets interdits · GO invalidable · Studio dérivé.

---

## 11. Limites

- Copy Figma peut nécessiter polish Morris.
- Variantes = annotations 720×420, pas full 1440 screens.
- Quatrième option gate non matérialisée en 4e carte (candidat VS-UX-CAND).
- Screenshots MCP à capturer dans le review pack.


---

# ANNEXE C — Contenu intégral document 37

# SFIA Studio — Decision pack UX/UI vertical slice POC (candidat)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `37-poc-vertical-slice-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Standard |
| **Statut** | `draft-for-morris-visual-validation` — **aucune VS-UX-CAND validée** |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Figma** | `lrjA1WEyRpL05vKR8k29LO` · page `51:2` |
| **Companions** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`36`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md) |

> Pack de **propositions** UX/UI. Ne jamais écrire que les frames ou candidats sont validés.

---

## 1. Synthèse

Ce cycle produit le **contrat UX/UI** et les **frames Figma candidates** du parcours gouverné en dix étapes du vertical slice POC, en continuité Product premium (P0), sans code, sans live GPT/Cursor, sans commit projet.

| Livrable | Rôle |
|----------|------|
| `35` | Contrat visuel + exigences UX + accessibilité/FinOps |
| `36` | Inventaire frames, node IDs, flux, variantes |
| `37` | Ce pack — options, candidats, gates |
| Figma page `UX-B — POC Vertical Slice` | 10 frames + variantes annotations |

---

## 2. Observations

1. P0 (4 frames) reste la référence visuelle validée ; non modifié.
2. Les 10 étapes fonctionnelles (`32`–`34`) nécessitent 10 frames distinctes — pas de fusion silencieuse.
3. L’app actuelle ne couvre que partiellement les étapes 1 et 9 — écart delivery futur.
4. VS-CAND-14 appliquée : plafond visible, valeur **À définir**.
5. Structure P0-03C limite à 3 cartes option ; Abandon documenté via confirmation + note.

---

## 3. Hypothèses

| ID | Hypothèse |
|----|----------|
| H1 | Continuité Product premium / Inter / tokens flush |
| H2 | Shell rail+topbar+canvas+copilote inchangé conceptuellement |
| H3 | Viewport 1440×1024 seul (pas mobile) |
| H4 | Copilote = recommandation uniquement |
| H5 | Valeur numérique plafond GPT décidée hors design |

---

## 4. Options

| Sujet | Option A | Option B (retenue conception) | Soumis à Morris |
|-------|----------|-------------------------------|-----------------|
| Nombre de frames | Fusionner 8–9 | **10 frames** | Non (contrat) |
| Gate Abandon | Fusionner avec NO-GO | **Action distincte** (note + confirmation) | Oui si 4e carte |
| Variantes | Full 1440 | **Annotations 720×420** | Oui |
| Clôture shell | Nouveau shell | **Réutiliser synthèse P0-01C** | Observation |

---

## 5. Recommandations (non validées)

1. Valider visuellement les 10 frames + variantes avant backlog delivery.
2. Ajouter une 4e carte « Abandon » sur VS-UX-04 en polish si Morris le souhaite.
3. Garder plafond « À définir » jusqu’à décision FinOps séparée.
4. Ne pas lancer delivery UI avant GO validation visuelle.
5. Comparer runtime ↔ Figma avant tout READY visuel futur.

---

## 6. Décisions UX candidates `VS-UX-CAND-*`

| ID | Décision candidate | Impact | Risque | Dette |
|----|-------------------|--------|--------|-------|
| **VS-UX-CAND-01** | Page Figma dédiée `UX-B — POC Vertical Slice` | Isolation P0 | Confusion pages | Faible |
| **VS-UX-CAND-02** | Dix frames 1440×1024 VS-UX-01…10 | Couverture BeB | Effort delivery | Moyenne |
| **VS-UX-CAND-03** | Continuité shell Product premium P0 | Cohérence | Sur-contrainte | Faible |
| **VS-UX-CAND-04** | CTA Qualifier sans GO sur VS-UX-01 | Sécurité | — | Faible |
| **VS-UX-CAND-05** | FinOps visible (compteur + plafond À définir + no retry) | Transparence | — | Faible |
| **VS-UX-CAND-06** | Invalidation GO visuelle obligatoire | Sécurité | Friction | Faible |
| **VS-UX-CAND-07** | STOP prioritaire sur 02/05/07 | Sécurité | — | Faible |
| **VS-UX-CAND-08** | Verdict GPT badge candidat | Autorité | — | Faible |
| **VS-UX-CAND-09** | Variantes loading/erreur/STOP/GO-invalide en annotations | Couverture états | Moins pixel-perfect | Acceptable POC |
| **VS-UX-CAND-10** | Abandon gate via confirmation + note (pas 4e carte encore) | Fidélité P0 clone | Ambiguïté Abandon | Moyenne |
| **VS-UX-CAND-11** | Accessibilité = contrat cible WCAG 2.2 AA (pas audit) | Qualité | Surclaim | Faible |
| **VS-UX-CAND-12** | Séquencement : validation visuelle → backlog → delivery | Ordre | Delivery trop tôt | Faible |

---

## 7. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| 10 frames | Contrat delivery clair | Scope UI large | Implémentation multi-routes |
| Clones P0 | Continuité visuelle | Copy non polishée | Polish Figma |
| 3 vs 4 options gate | — | Abandon peu visible | 4e carte candidate |
| Pas de code | Isolé | App ≠ Figma | Delivery futur |

---

## 8. Gates Morris

| Gate | Objet |
|------|-------|
| G-VS-UX-VAL | Validation visuelle frames + contrat 35–37 |
| G-VS-UX-ABANDON | 4e carte Abandon ou conserver note |
| G-VS-UX-DOC | Commit/push/PR/merge docs 35–37 |
| G-VS-UX-DEL | Delivery UI (app) |
| G-VS-LIVE | Live GPT/Cursor |
| G-VS-LIMIT | Valeur numérique plafond GPT |

---

## 9. Décisions Morris déjà appliquées (amont)

VS-CAND-01…13, 15 **VALIDÉES** · VS-CAND-14 **VALIDÉE AVEC RÉSERVE**.

---

## 10. Décisions Morris attendues

1. Valider / amender / refuser `VS-UX-CAND-*`.
2. Valider ou demander polish des frames Figma.
3. Arbitrer Abandon (4e carte vs note).
4. Autoriser ou non versionnement docs 35–37.
5. **Ne pas** interpréter comme GO delivery / live / merge.

---

## 11. Verdict candidat

`SFIA STUDIO VERTICAL SLICE UX/UI READY — MORRIS VISUAL VALIDATION REQUIRED`

### Interdits

CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · FRAMES VALIDATED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN


---

# ANNEXE D — Diff utile complet (docs 35–37)

diff --git a/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md b/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
+# SFIA Studio — Contrat UX/UI du vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Projet** | SFIA Studio |
+| **Document** | `35-poc-vertical-slice-ux-ui-contract.md` |
+| **Cycle** | 4 — UX/UI |
+| **Profil** | Standard |
+| **Typologie** | DOC / UX |
+| **Baseline** | SFIA v2.6 |
+| **Branche** | `design/sfia-studio-poc-vertical-slice` (**locale**) |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+| **Statut** | `draft-for-morris-visual-validation` — **frames candidates, non validées** |
+| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
+| **Page source** | `UX-B — P0` |
+| **Page créée** | `UX-B — POC Vertical Slice` |
+| **Code / live** | **Aucun** |
+
+> Contrat UX/UI du parcours gouverné en **dix** étapes. Continuité visuelle Product premium (P0).  
+> Les frames VS-UX sont **candidates** jusqu’à GO Morris. Ne pas modifier les frames P0.
+
+---
+
+## 1. Décisions Morris appliquées (amont)
+
+| ID | Statut appliqué |
+|----|-----------------|
+| VS-CAND-01 … VS-CAND-13 | **VALIDÉES** |
+| VS-CAND-15 | **VALIDÉE** |
+| VS-CAND-14 | **VALIDÉE AVEC RÉSERVE** — plafond GPT obligatoire, valeur numérique **À définir** (non inventée) |
+
+Architecture Option B, Git = vérité, Morris L0, GPT ≠ décision, Cursor sandbox borné : **maintenus**.
+
+---
+
+## 2. Contrat visuel Figma extrait
+
+| Élément | Valeur observée / retenue |
+|---------|---------------------------|
+| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
+| **page source** | `UX-B — P0` (`0:1`) |
+| **frames sources** | P0-00C `19:2` · P0-01C `22:2` · P0-02C `22:133` · P0-03C `22:270` |
+| **dimensions** | **1440 × 1024** (confirmé MCP sur les quatre frames) |
+| **shell général** | Product premium — fond clair `#f6f9ff` / `#f6f9fe`, ink `#141c30` |
+| **rail utilitaire** | ~64 px ; brand « S » ; icônes nav ; avatar / pill bas ; **aucun GO** |
+| **topbar** | Eyebrow `SFIA STUDIO` ; titre workspace ; pills statut ; onglets ; CTA global non destructif |
+| **canvas** | Hero + zone métier (formulaire / stepper / evidence / options) |
+| **panneau copilote** | ~334–340 px ; résumé + suggestions **≠ décision** ; composer |
+| **grille / colonnes** | Flush : canvas ~972 px + copilote 340 px ; Floating (00C) : workspace 968 + copilote 334 |
+| **spacings clés** | 8 / 12 / 16 / 20 / 24 / 28 px ; rayons 12 / 16 / 20 / 24 |
+| **typographies** | Inter (app) ; eyebrow meta 11–12 px ; titres hero ~24–29 px ; body 15–16 px |
+| **couleurs / tokens** | Blue `#3863f5` · Purple `#7a4df5` · Green `#21c28a` · Orange `#faa629` · Pink `#f25794` · Navy heroes · Brand accent gradient |
+| **cartes** | Surfaces blanches, ombres soft, accent bar métriques |
+| **badges / statuts** | Pills (draft, ready, candidat, risque, Git, mode) — sens **aussi** textuel |
+| **CTA** | Primaire plein ; secondaire outline ; STOP / danger distinct |
+| **styles de gates** | Options décision + dossier preuves ; confirmation explicite |
+| **preuves** | Listes evidence / inspector / trust blocks |
+| **loading / erreur / STOP / vide** | P0 partiel (STOP box) ; **à étendre** sur VS (documenté ci-dessous) |
+| **écarts connus** | App P0 = 4 écrans ; slice = 10 ; loading/error absents en app |
+| **incertitudes** | Tokens Figma variables vides côté MCP — hex issus design context / `tokens.css` |
+| **impacts VS** | Cloner shell P0 ; adapter canvas par étape ; ne pas toucher `19:2`/`22:*` P0 |
+
+### Limites de lecture MCP
+
+- `get_metadata` + `get_screenshot` : structure et dimensions confirmées.
+- Variables Figma : historiquement vides ; tokens app `styles/tokens.css` comme relais documentaire.
+- Textes exacts : partiellement masqués en metadata (noms de layers) — copy VS renseignée sur clones.
+
+---
+
+## 3. Objectif UX
+
+Permettre à Morris de **voir et contrôler** le parcours Studio → GPT → gate → harness/Cursor → rapport → GPT verdict → décision → clôture, sans faire de Studio une source de vérité et sans auto-GO.
+
+---
+
+## 4. Matrice parcours → frame → autorité
+
+| Étape | Frame | Shell source | Autorité action | Preuve UI |
+|-------|-------|--------------|-----------------|-----------|
+| 1 Nouvelle demande | VS-UX-01 | P0-00C floating | Morris saisit | StudioRequest |
+| 2 Qualification en cours | VS-UX-02 | P0-02C flush | Système GPT ; STOP Morris | event qualif |
+| 3 Qualification proposée | VS-UX-03 | P0-02C | Morris revue | QualificationCandidate |
+| 4 Gate Morris | VS-UX-04 | P0-03C | **Morris seul** | MorrisGateDecision |
+| 5 Exécution | VS-UX-05 | P0-02C | Harness/Cursor ; STOP Morris | ExecutionEvents |
+| 6 Rapport | VS-UX-06 | P0-02C | Morris lit | CursorExecutionReport |
+| 7 Analyse GPT | VS-UX-07 | P0-02C | GPT analyse ; STOP conso | event analyse |
+| 8 Verdict proposé | VS-UX-08 | P0-03C | GPT candidat | GptVerdictCandidate |
+| 9 Décision Morris | VS-UX-09 | P0-03C | **Morris seul** | MorrisFinalDecision |
+| 10 Clôture | VS-UX-10 | P0-01C | Affichage dérivé | CycleSummary |
+
+---
+
+## 5. Exigences UX `VS-UX-FR-*`
+
+| ID | Exigence |
+|----|----------|
+| VS-UX-FR-01 | Dix frames distinctes 1440×1024 ; pas de fusion silencieuse |
+| VS-UX-FR-02 | Shell P0 conservé (rail / topbar / canvas / copilote) |
+| VS-UX-FR-03 | Copilote jamais présenté comme décision Morris |
+| VS-UX-FR-04 | GO visible uniquement sur VS-UX-04 ; ancré hash/HEAD/branche/allowlist |
+| VS-UX-FR-05 | Invalidation GO représentée (bandeau / état invalide) |
+| VS-UX-FR-06 | STOP prioritaire et accessible clavier |
+| VS-UX-FR-07 | FinOps : appels GPT séparés (qualif ≠ analyse) ; plafond « À définir » ; pas de retry auto |
+| VS-UX-FR-08 | Verdict GPT étiqueté **candidat** |
+| VS-UX-FR-09 | Clôture uniquement via décision Morris (VS-UX-09→10) |
+| VS-UX-FR-10 | Aucun secret / token / PII réelle dans les maquettes |
+| VS-UX-FR-11 | Aucune écriture Git distante groupée dans les CTA |
+| VS-UX-FR-12 | Source de statut (Git / harness / dérivé Studio) lisible |
+| VS-UX-FR-13 | Fail-closed GPT visible (erreur + pas de suite) |
+| VS-UX-FR-14 | Frames P0 non modifiées ; VS non « baseline validée » |
+
+---
+
+## 6. États transverses (contrat)
+
+| État | Représentation | Frames concernées |
+|------|----------------|-------------------|
+| Loading | Phase active + spinner textuel + compteur appel | 02, 05, 07 |
+| Erreur fail-closed | Banner erreur + CTA correction/abandon | 02, 07 (+ autres) |
+| STOP | CTA danger prioritaire + journal | 02, 05, 07 |
+| GO invalide | Banner « GO invalide — HEAD/contrat changé » | 04, 05 |
+| Vide / incomplet | Message « rapport/pack incomplet » | 06, 08 |
+| Candidat | Badge « Candidat GPT » | 03, 08 |
+
+---
+
+## 7. Accessibilité (contrat cible — pas un audit)
+
+Pour **chaque** frame VS-UX :
+
+| Critère | Contrat |
+|---------|---------|
+| Ordre de tabulation | Rail → topbar → canvas → actions → copilote |
+| Focus visible | Outline blue `#3863f5` (app) |
+| Labels explicites | Inputs / CTA avec nom accessible |
+| CTA | Nom = verbe + objet (ex. « Qualifier la demande ») |
+| Couleur | Statuts aussi textuels / icônes |
+| Contraste | Cible WCAG 2.2 AA |
+| Annonce états | Live region pour loading / erreur / STOP |
+| Erreurs | Associées au champ / phase |
+| Gates | Conséquences textuelles sous chaque option |
+| STOP | Toujours atteignable au clavier dès phases 02/05/07 |
+
+**Ne pas** prétendre qu’un audit complet a été réalisé.
+
+---
+
+## 8. FinOps UI
+
+| Élément | Affichage |
+|---------|-----------|
+| Appels consommés | Compteur `n / plafond` |
+| Plafond | **À définir** (obligatoire, non numérique) |
+| Séparation | Qualification vs Analyse |
+| Retry | Mention explicite « Aucun retry automatique » |
+| Coût € | **Non affiché** (interdit d’inventer) |
+| Arrêt | CTA avant nouvel appel |
+
+---
+
+## 9. Sécurité & observabilité UI
+
+Afficher si pertinent : `requestId`, `correlationId`, `contractId`, `contractHash`, branche, HEAD, sandbox, allowlist, horodatage+fuseau, source statut, preuve, erreur, invalidation GO, STOP.
+
+Ne jamais afficher : token, clé API, secret, chemin utilisateur sensible non masqué, PII réelle.
+
+---
+
+## 10. Continuité app (lecture seule)
+
+Routes actuelles : `/nouvelle-demande`, `/synthese`, `/cycle-actif`, `/decision`.  
+Shell : `StudioShell` + tokens `styles/tokens.css`.  
+**Limite :** l’app ne couvre pas encore les 10 étapes — les frames VS sont le contrat pour un futur delivery (hors cycle).
+
+---
+
+## 11. Hors périmètre
+
+Code · modif `app/**` / harness · API/BDD · live GPT/Cursor · responsive mobile · claim MVP/prod · modif docs `01`–`34` · modif frames P0 · promotion VS comme baseline.
+
+---
+
+## 12. Documents liés
+
+- [`36-poc-vertical-slice-ux-ui-flows-and-frames.md`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md)  
+- [`37-poc-vertical-slice-ux-ui-decision-pack.md`](./37-poc-vertical-slice-ux-ui-decision-pack.md)  
+- Fonctionnel : [`32`](./32-poc-vertical-slice-functional-design.md)–[`34`](./34-poc-vertical-slice-decision-pack.md)  
+- P0 : [`14`](./14-ux-ui-contract.md)–[`16`](./16-ux-ui-decision-pack.md)

diff --git a/projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md b/projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
+# SFIA Studio — Flows, frames et inventaire Figma (vertical slice POC)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `36-poc-vertical-slice-ux-ui-flows-and-frames.md` |
+| **Cycle** | 4 — UX/UI |
+| **Profil** | Standard |
+| **Statut** | `draft-for-morris-visual-validation` — **non validé** |
+| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
+| **Page** | `UX-B — POC Vertical Slice` (`51:2`) |
+| **Companion** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+
+> Inventaire des frames candidates, node IDs, correspondance aux dix étapes, états, interactions et écarts P0.  
+> Les frames **ne sont pas** une baseline validée.
+
+---
+
+## 1. Pages Figma
+
+| Page | node ID | Rôle |
+|------|---------|------|
+| `UX-B — P0` | `0:1` | Référence validée — **non modifiée** |
+| `UX-B — POC Vertical Slice` | `51:2` | Frames VS candidates (ce cycle) |
+
+---
+
+## 2. Frames sources P0 (lues, non modifiées)
+
+| Frame | node ID | Dimensions |
+|-------|---------|------------|
+| P0-00C — Nouvelle demande | `19:2` | 1440 × 1024 |
+| P0-01C — Vue synthèse | `22:2` | 1440 × 1024 |
+| P0-02C — Cycle actif | `22:133` | 1440 × 1024 |
+| P0-03C — Décision Morris | `22:270` | 1440 × 1024 |
+
+---
+
+## 3. Inventaire frames vertical slice
+
+| Frame | node ID | Dimensions | Clone source | Étape |
+|-------|---------|------------|--------------|-------|
+| VS-UX-01 — Nouvelle demande | `51:3` | 1440 × 1024 | P0-00C | 1 |
+| VS-UX-02 — Qualification en cours | `51:139` | 1440 × 1024 | P0-02C | 2 |
+| VS-UX-03 — Qualification proposée | `51:277` | 1440 × 1024 | P0-02C | 3 |
+| VS-UX-04 — Gate Morris | `51:415` | 1440 × 1024 | P0-03C | 4 |
+| VS-UX-05 — Exécution | `51:540` | 1440 × 1024 | P0-02C | 5 |
+| VS-UX-06 — Rapport disponible | `51:678` | 1440 × 1024 | P0-02C | 6 |
+| VS-UX-07 — Analyse GPT | `51:816` | 1440 × 1024 | P0-02C | 7 |
+| VS-UX-08 — Verdict proposé | `51:954` | 1440 × 1024 | P0-03C | 8 |
+| VS-UX-09 — Décision Morris | `51:1079` | 1440 × 1024 | P0-03C | 9 |
+| VS-UX-10 — Clôture | `51:1204` | 1440 × 1024 | P0-01C | 10 |
+
+Lien fichier : https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO?node-id=51-2
+
+---
+
+## 4. Variantes / annotations
+
+| Variante | node ID | Dimensions | Rôle | Frames couvertes |
+|----------|---------|------------|------|------------------|
+| VS-UX-VAR — Loading GPT | `52:2` | 720 × 420 | Phase active + FinOps | 02, 07 (+05) |
+| VS-UX-VAR — Erreur fail-closed | `52:10` | 720 × 420 | Rejet GPT | 02, 07 |
+| VS-UX-VAR — STOP Morris | `52:18` | 720 × 420 | STOP prioritaire | 02, 05, 07 |
+| VS-UX-VAR — GO invalide | `52:26` | 720 × 420 | Invalidation ancrage | 04, 05 |
+| VS-UX-NOTE — Gate 4 actions | `52:34` | 720 × 420 | Mapping Abandon | 04 |
+
+---
+
+## 5. Contenu fonctionnel par frame
+
+### VS-UX-01 — Nouvelle demande
+- Intention Markdown sandbox ; requestId candidat ; repo/branche/HEAD ; sandbox.
+- CTA : **Qualifier la demande** — aucun GO.
+- Copilote = recommandation.
+
+### VS-UX-02 — Qualification en cours
+- Phase GPT qualification ; compteur `n / À définir` ; aucun retry auto ; STOP ; erreur fail-closed (variante).
+
+### VS-UX-03 — Qualification proposée
+- Cycle, profil, périmètre, allowlist/denylist, risques, contrat, contractHash, source GPT.
+- CTA : Ouvrir gate Morris / Demander correction — **pas** d’auto-GO.
+
+### VS-UX-04 — Gate Morris
+- Dossier ancré : requestId, contractId, contractHash, branche, HEAD, allowlist, autorité, horodatage.
+- Actions : GO · NO-GO · CORRECTION · ABANDON (3 cartes + note Abandon).
+- Mécanisme invalidation GO (bandeau / variante).
+
+### VS-UX-05 — Exécution
+- Harness + Cursor sandbox ; fichier autorisé ; journal dérivé ; STOP ; pas de remote ; pas de commandes inventées.
+
+### VS-UX-06 — Rapport disponible
+- Markdown produit ; rapport ; allowlist ; remote=0 ; preuves ; réserves ; CTA analyse GPT.
+
+### VS-UX-07 — Analyse GPT
+- Appel distinct ; compteur ; plafond À définir ; aucun retry ; fail-closed ; arrêt avant conso.
+
+### VS-UX-08 — Verdict proposé
+- Badge **candidat** ; preuves ; réserves ; incohérences ; CTA décision Morris.
+
+### VS-UX-09 — Décision Morris
+- Clôturer · Corriger · Relancer (nouveau GO) · Abandonner ; conséquences ; pas d’actions Git groupées.
+
+### VS-UX-10 — Clôture
+- Décision ; statut ; traçabilité ; appels GPT ; réserves ; prochaines actions séparées ; **aucun** claim MVP/prod.
+
+---
+
+## 6. Transitions UX
+
+```text
+01 → 02 (Qualifier)
+02 → 03 (qualif OK) | variante erreur/STOP
+03 → 04 (Ouvrir gate) | correction → 02
+04 → 05 (GO) | NO-GO/Abandon → 10- | correction → 02
+05 → 06 (fin) | STOP → stoppé
+06 → 07 (Lancer analyse)
+07 → 08 (verdict OK) | fail-closed
+08 → 09
+09 → 10 (clôturer) | correction/relance (nouveau GO) | abandon
+```
+
+---
+
+## 7. Interactions candidates (non delivery)
+
+| Action UI | Autorité | Effet attendu |
+|-----------|----------|---------------|
+| Qualifier la demande | Morris | Déclenche qualif GPT via adaptateur→harness |
+| STOP | Morris | stoppé immédiat |
+| Ouvrir gate | Morris | Affiche dossier |
+| GO / NO-GO / Correction / Abandon | Morris | Gate decision |
+| Lancer analyse GPT | Morris | 2e appel GPT |
+| Confirmer décision finale | Morris | Clôture / reprise |
+
+---
+
+## 8. Écarts au P0
+
+| Écart | Traitement |
+|-------|------------|
+| 4 écrans P0 vs 10 VS | Extension documentée — P0 inchangé |
+| Loading/error absents P0 | Variantes VS ajoutées |
+| Gate P0 = 3 options | 4e action Abandon en note + confirmation |
+| Synthèse P0 ≠ clôture slice | VS-UX-10 réutilise shell synthèse pour CycleSummary |
+| App routes limitées | Hors cycle — delivery futur |
+
+---
+
+## 9. Accessibilité par frame (checklist cible)
+
+| Frame | Tab order | Focus | Labels CTA | STOP | Contraste cible |
+|-------|-----------|-------|------------|------|-----------------|
+| 01–10 | Rail→top→canvas→actions→copilote | Oui | Verbe+objet | 02/05/07 | WCAG 2.2 AA |
+
+Pas d’audit runtime réalisé.
+
+---
+
+## 10. FinOps / sécurité (rappel UI)
+
+- Plafond : **À définir** · pas de retry auto · pas de coût € inventé.
+- IDs visibles · secrets interdits · GO invalidable · Studio dérivé.
+
+---
+
+## 11. Limites
+
+- Copy Figma peut nécessiter polish Morris.
+- Variantes = annotations 720×420, pas full 1440 screens.
+- Quatrième option gate non matérialisée en 4e carte (candidat VS-UX-CAND).
+- Screenshots MCP à capturer dans le review pack.

diff --git a/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md b/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
new file mode 100644
--- /dev/null
+++ b/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
+# SFIA Studio — Decision pack UX/UI vertical slice POC (candidat)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `37-poc-vertical-slice-ux-ui-decision-pack.md` |
+| **Cycle** | 4 — UX/UI |
+| **Profil** | Standard |
+| **Statut** | `draft-for-morris-visual-validation` — **aucune VS-UX-CAND validée** |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+| **Figma** | `lrjA1WEyRpL05vKR8k29LO` · page `51:2` |
+| **Companions** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`36`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md) |
+
+> Pack de **propositions** UX/UI. Ne jamais écrire que les frames ou candidats sont validés.
+
+---
+
+## 1. Synthèse
+
+Ce cycle produit le **contrat UX/UI** et les **frames Figma candidates** du parcours gouverné en dix étapes du vertical slice POC, en continuité Product premium (P0), sans code, sans live GPT/Cursor, sans commit projet.
+
+| Livrable | Rôle |
+|----------|------|
+| `35` | Contrat visuel + exigences UX + accessibilité/FinOps |
+| `36` | Inventaire frames, node IDs, flux, variantes |
+| `37` | Ce pack — options, candidats, gates |
+| Figma page `UX-B — POC Vertical Slice` | 10 frames + variantes annotations |
+
+---
+
+## 2. Observations
+
+1. P0 (4 frames) reste la référence visuelle validée ; non modifié.
+2. Les 10 étapes fonctionnelles (`32`–`34`) nécessitent 10 frames distinctes — pas de fusion silencieuse.
+3. L’app actuelle ne couvre que partiellement les étapes 1 et 9 — écart delivery futur.
+4. VS-CAND-14 appliquée : plafond visible, valeur **À définir**.
+5. Structure P0-03C limite à 3 cartes option ; Abandon documenté via confirmation + note.
+
+---
+
+## 3. Hypothèses
+
+| ID | Hypothèse |
+|----|----------|
+| H1 | Continuité Product premium / Inter / tokens flush |
+| H2 | Shell rail+topbar+canvas+copilote inchangé conceptuellement |
+| H3 | Viewport 1440×1024 seul (pas mobile) |
+| H4 | Copilote = recommandation uniquement |
+| H5 | Valeur numérique plafond GPT décidée hors design |
+
+---
+
+## 4. Options
+
+| Sujet | Option A | Option B (retenue conception) | Soumis à Morris |
+|-------|----------|-------------------------------|-----------------|
+| Nombre de frames | Fusionner 8–9 | **10 frames** | Non (contrat) |
+| Gate Abandon | Fusionner avec NO-GO | **Action distincte** (note + confirmation) | Oui si 4e carte |
+| Variantes | Full 1440 | **Annotations 720×420** | Oui |
+| Clôture shell | Nouveau shell | **Réutiliser synthèse P0-01C** | Observation |
+
+---
+
+## 5. Recommandations (non validées)
+
+1. Valider visuellement les 10 frames + variantes avant backlog delivery.
+2. Ajouter une 4e carte « Abandon » sur VS-UX-04 en polish si Morris le souhaite.
+3. Garder plafond « À définir » jusqu’à décision FinOps séparée.
+4. Ne pas lancer delivery UI avant GO validation visuelle.
+5. Comparer runtime ↔ Figma avant tout READY visuel futur.
+
+---
+
+## 6. Décisions UX candidates `VS-UX-CAND-*`
+
+| ID | Décision candidate | Impact | Risque | Dette |
+|----|-------------------|--------|--------|-------|
+| **VS-UX-CAND-01** | Page Figma dédiée `UX-B — POC Vertical Slice` | Isolation P0 | Confusion pages | Faible |
+| **VS-UX-CAND-02** | Dix frames 1440×1024 VS-UX-01…10 | Couverture BeB | Effort delivery | Moyenne |
+| **VS-UX-CAND-03** | Continuité shell Product premium P0 | Cohérence | Sur-contrainte | Faible |
+| **VS-UX-CAND-04** | CTA Qualifier sans GO sur VS-UX-01 | Sécurité | — | Faible |
+| **VS-UX-CAND-05** | FinOps visible (compteur + plafond À définir + no retry) | Transparence | — | Faible |
+| **VS-UX-CAND-06** | Invalidation GO visuelle obligatoire | Sécurité | Friction | Faible |
+| **VS-UX-CAND-07** | STOP prioritaire sur 02/05/07 | Sécurité | — | Faible |
+| **VS-UX-CAND-08** | Verdict GPT badge candidat | Autorité | — | Faible |
+| **VS-UX-CAND-09** | Variantes loading/erreur/STOP/GO-invalide en annotations | Couverture états | Moins pixel-perfect | Acceptable POC |
+| **VS-UX-CAND-10** | Abandon gate via confirmation + note (pas 4e carte encore) | Fidélité P0 clone | Ambiguïté Abandon | Moyenne |
+| **VS-UX-CAND-11** | Accessibilité = contrat cible WCAG 2.2 AA (pas audit) | Qualité | Surclaim | Faible |
+| **VS-UX-CAND-12** | Séquencement : validation visuelle → backlog → delivery | Ordre | Delivery trop tôt | Faible |
+
+---
+
+## 7. Impacts / risques / dette
+
+| Thème | Impact | Risque | Dette |
+|-------|--------|--------|-------|
+| 10 frames | Contrat delivery clair | Scope UI large | Implémentation multi-routes |
+| Clones P0 | Continuité visuelle | Copy non polishée | Polish Figma |
+| 3 vs 4 options gate | — | Abandon peu visible | 4e carte candidate |
+| Pas de code | Isolé | App ≠ Figma | Delivery futur |
+
+---
+
+## 8. Gates Morris
+
+| Gate | Objet |
+|------|-------|
+| G-VS-UX-VAL | Validation visuelle frames + contrat 35–37 |
+| G-VS-UX-ABANDON | 4e carte Abandon ou conserver note |
+| G-VS-UX-DOC | Commit/push/PR/merge docs 35–37 |
+| G-VS-UX-DEL | Delivery UI (app) |
+| G-VS-LIVE | Live GPT/Cursor |
+| G-VS-LIMIT | Valeur numérique plafond GPT |
+
+---
+
+## 9. Décisions Morris déjà appliquées (amont)
+
+VS-CAND-01…13, 15 **VALIDÉES** · VS-CAND-14 **VALIDÉE AVEC RÉSERVE**.
+
+---
+
+## 10. Décisions Morris attendues
+
+1. Valider / amender / refuser `VS-UX-CAND-*`.
+2. Valider ou demander polish des frames Figma.
+3. Arbitrer Abandon (4e carte vs note).
+4. Autoriser ou non versionnement docs 35–37.
+5. **Ne pas** interpréter comme GO delivery / live / merge.
+
+---
+
+## 11. Verdict candidat
+
+`SFIA STUDIO VERTICAL SLICE UX/UI READY — MORRIS VISUAL VALIDATION REQUIRED`
+
+### Interdits
+
+CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · FRAMES VALIDATED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN

