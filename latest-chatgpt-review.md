# Review pack — SFIA Studio POC vertical slice UX/UI CORRECTIF

| Champ | Valeur |
|-------|--------|
| **Date / heure / fuseau** | 2026-07-19 22:03:49 CEST |
| **Cycle** | 4 — UX/UI (correctif borné) |
| **Profil** | Standard |
| **Branche** | `design/sfia-studio-poc-vertical-slice` (locale — aucun push projet) |
| **HEAD / base** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **origin/main** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **GO Morris consommé** | GO UX/UI correctif borné |
| **Niveau** | **full** |
| **Verdict** | `SFIA STUDIO VERTICAL SLICE UX/UI CORRECTED — MORRIS FINAL VALIDATION REQUIRED` |

---

## 1. Truth Check

OK — branche `design/sfia-studio-poc-vertical-slice` · HEAD=origin/main=`eb180638…` · staged vide · untracked attendus (32–37 + .tmp) · aucun app/harness.

---

## 2. Sources consultées

Template cycle · P0 `14`–`16` · fonctionnel `32`–`34` · UX `35`–`37` (avant correctif) · app/** lecture seule · handoff `f3c7e6f…` · Figma page `51:2` frames `51:415` / `51:1204` / note `52:34`.

---

## 3. État avant → après

| Élément | Avant | Après |
|---------|-------|-------|
| Navigation | 10 frames ambiguës vs routes | **Dix états** storyboard → **4 vues P0** documentées |
| Gate VS-UX-04 | 3 cartes + note Abandon | **4 actions explicites** dont Abandonner destructif + confirmation |
| Note `52:34` | Présente | **Supprimée** |
| Clôture VS-UX-10 | Portfolio multi-projet hérité | **Slice-only** (requestId, décision, MD, preuves, FinOps, traçabilité) |
| Docs 35–37 | Pré-correctif | Alignés (états≠routes, Abandonner, clôture) |

---

## 4. Preuve « dix états, pas dix routes »

Documentée dans 35 §1bis, 36 §3, 37 §1/3.  
Mapping : Nouvelle demande (01–03) · Gate (04) · Cycle actif (05–08) · Décision finale (09) · Synthèse/clôture (10).  
Delivery = états/variantes dans routes P0 existantes. **Aucune nouvelle route.**

---

## 5. Preuve quatre actions gate

VS-UX-04 `51:415` : GO · NO-GO · CORRIGER · **ABANDONNER** (danger, confirmation, ≠ NO-GO ≠ STOP).  
Invalidation GO reste variante `52:26` / bandeau séparé.

Capture : `.tmp-sfia-review/figma-screenshots/VS-UX-04-corrected.png`

---

## 6. Preuve nettoyage clôture

VS-UX-10 `51:1204` : plus de lignes Interv360/Campus360/etc.  
Contenu : requestId, décision, output.md, preuves, appels GPT À définir, traçabilité, réserves.  
Capture : `.tmp-sfia-review/figma-screenshots/VS-UX-10-corrected.png`

---

## 7. Frames modifiées / non modifiées

### Modifiées
- `51:415` VS-UX-04  
- `51:1204` VS-UX-10  
- `52:34` **supprimée**

### Non modifiées (principales)
VS-UX-01…03, 05…09 · variantes Loading/Erreur/STOP/GO-invalide · **toutes frames P0** (`19:2`, `22:2`, `22:133`, `22:270`)

Dimensions principales : **1440 × 1024** confirmées.

---

## 8. Fichiers modifiés / non modifiés

### Modifiés (untracked docs)
- `35` (220 lignes) · `36` (170) · `37` (102)
- `.tmp-sfia-review/chatgpt-review.md` + captures

### Non modifiés
- `01`–`34` · `app/**` · `harness/**` · prompts/method · aucune config

---

## 9. git status

```
?? .tmp-sfia-review/
?? projects/sfia-studio/32-poc-vertical-slice-functional-design.md
?? projects/sfia-studio/33-poc-vertical-slice-flows-and-rules.md
?? projects/sfia-studio/34-poc-vertical-slice-decision-pack.md
?? projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
?? projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
?? projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
```

Aucun staged · aucun commit/push/PR projet.

---

## 10. Réserves

1. Chrome topbar/pills secondaires peuvent encore porter du générique mineur.  
2. Densité gate (4 options) — polish optionnel.  
3. Accessibilité = contrat cible, pas audit.  
4. Docs non versionnés projet.  
5. Plafond GPT toujours « À définir ».

---

## 11. Décisions Morris restantes

1. Validation finale visuelle post-correctif.  
2. GO versionnement docs.  
3. Ne pas traiter comme delivery / 10 routes / live / merge.

---

## 12. Confirmation

Aucun code · aucun live · aucune nouvelle route · aucune nouvelle frame principale · P0 intact · handoff review only.

---

## 13. Verdict

`SFIA STUDIO VERTICAL SLICE UX/UI CORRECTED — MORRIS FINAL VALIDATION REQUIRED`

---

# ANNEXE A — Contenu intégral document 35 (après correctif)

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
| **Statut** | `draft-for-morris-final-validation` — correctif appliqué ; **validation finale Morris requise** |
| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page source** | `UX-B — P0` |
| **Page créée** | `UX-B — POC Vertical Slice` |
| **Correctif** | GO UX/UI correctif borné — dix états / Abandonner / clôture slice |
| **Code / live** | **Aucun** |

> Contrat UX/UI du parcours gouverné en **dix états fonctionnels** (storyboard), **pas dix routes**.  
> Continuité visuelle Product premium (P0). Les **quatre vues P0** restent la structure applicative de référence.  
> Frames VS-UX = candidates jusqu’à validation finale Morris. Ne pas modifier les frames P0.

---

## 1. Décisions Morris appliquées (amont)

| ID | Statut appliqué |
|----|-----------------|
| VS-CAND-01 … VS-CAND-13 | **VALIDÉES** |
| VS-CAND-15 | **VALIDÉE** |
| VS-CAND-14 | **VALIDÉE AVEC RÉSERVE** — plafond GPT obligatoire, valeur numérique **À définir** (non inventée) |

Architecture Option B, Git = vérité, Morris L0, GPT ≠ décision, Cursor sandbox borné : **maintenus**.

### Correctif Morris appliqué (ce cycle)

| Décision | Statut |
|----------|--------|
| Dix frames = **dix états** de parcours, **pas dix routes** | **VALIDÉE / appliquée** |
| Quatre vues P0 = structure produit de référence | **VALIDÉE / appliquée** |
| Action **Abandonner** explicite dans le gate Morris | **VALIDÉE / appliquée** |
| Clôture spécifique au vertical slice (sans portfolio hors contexte) | **VALIDÉE / appliquée** |

---

## 1bis. Modèle de navigation — dix états, quatre vues

**Règle dure :** les frames VS-UX-01…10 forment un **storyboard d’états fonctionnels**. Elles **ne constituent pas** dix nouvelles routes applicatives. Toute nouvelle route = arbitrage Morris distinct.

| Vue applicative P0 (référence) | États VS-UX couverts | Mode delivery cible |
|--------------------------------|----------------------|---------------------|
| **Nouvelle demande** (P0-00C) | VS-UX-01, VS-UX-02, VS-UX-03 | États / panneaux / transitions dans la route existante |
| **Décision Morris / Gate** (P0-03C) | VS-UX-04 | Gate à 4 actions dans la vue décision |
| **Cycle actif** (P0-02C) | VS-UX-05, VS-UX-06, VS-UX-07, VS-UX-08 | Stepper / variantes d’état |
| **Décision Morris finale** (P0-03C) | VS-UX-09 | Même famille « décision », phase post-verdict |
| **Vue synthèse / clôture** (P0-01C) | VS-UX-10 | Synthèse **du slice courant** uniquement |

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

## 4. Matrice parcours → état (frame) → vue P0 → autorité

| État | Frame | Vue P0 de rattachement | Autorité action | Preuve UI |
|------|-------|------------------------|-----------------|-----------|
| 1 Nouvelle demande | VS-UX-01 | Nouvelle demande | Morris saisit | StudioRequest |
| 2 Qualification en cours | VS-UX-02 | Nouvelle demande | Système GPT ; STOP Morris | event qualif |
| 3 Qualification proposée | VS-UX-03 | Nouvelle demande | Morris revue | QualificationCandidate |
| 4 Gate Morris | VS-UX-04 | Décision Morris / Gate | **Morris seul** | MorrisGateDecision |
| 5 Exécution | VS-UX-05 | Cycle actif | Harness/Cursor ; STOP Morris | ExecutionEvents |
| 6 Rapport | VS-UX-06 | Cycle actif | Morris lit | CursorExecutionReport |
| 7 Analyse GPT | VS-UX-07 | Cycle actif | GPT analyse ; STOP conso | event analyse |
| 8 Verdict proposé | VS-UX-08 | Cycle actif | GPT candidat | GptVerdictCandidate |
| 9 Décision Morris | VS-UX-09 | Décision Morris finale | **Morris seul** | MorrisFinalDecision |
| 10 Clôture | VS-UX-10 | Vue synthèse / clôture | Affichage dérivé | CycleSummary |

> **Pas de routes nouvelles** : le delivery privilégie états, variantes, panneaux et transitions dans les quatre vues P0.

---

## 5. Exigences UX `VS-UX-FR-*`

| ID | Exigence |
|----|----------|
| VS-UX-FR-01 | Dix frames = **dix états** storyboard 1440×1024 ; **pas** dix routes ; pas de fusion silencieuse |
| VS-UX-FR-02 | Shell P0 conservé (rail / topbar / canvas / copilote) |
| VS-UX-FR-03 | Copilote jamais présenté comme décision Morris |
| VS-UX-FR-04 | GO visible uniquement sur VS-UX-04 ; ancré hash/HEAD/branche/allowlist |
| VS-UX-FR-05 | Invalidation GO représentée (bandeau / état invalide) — **distincte** d’Abandonner |
| VS-UX-FR-06 | STOP prioritaire et accessible clavier — **≠** Abandonner / NO-GO |
| VS-UX-FR-07 | FinOps : appels GPT séparés (qualif ≠ analyse) ; plafond « À définir » ; pas de retry auto |
| VS-UX-FR-08 | Verdict GPT étiqueté **candidat** |
| VS-UX-FR-09 | Clôture uniquement via décision Morris (VS-UX-09→10) |
| VS-UX-FR-10 | Aucun secret / token / PII réelle dans les maquettes |
| VS-UX-FR-11 | Aucune écriture Git distante groupée dans les CTA |
| VS-UX-FR-12 | Source de statut (Git / harness / dérivé Studio) lisible |
| VS-UX-FR-13 | Fail-closed GPT visible (erreur + pas de suite) |
| VS-UX-FR-14 | Frames P0 non modifiées ; VS non « baseline validée » |
| VS-UX-FR-15 | Gate Morris : **quatre** actions explicites GO · NO-GO · Demander une correction · **Abandonner** |
| VS-UX-FR-16 | Abandonner : visible, destructif, confirmation, conséquence « état abandonné », pas d’action Git distante |
| VS-UX-FR-17 | Clôture (VS-UX-10) : **uniquement** données du vertical slice courant — **aucun** portfolio multi-projet hors contexte |

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
| **Abandonner** | Nom accessible explicite « Abandonner le cycle » ; danger **aussi** textuel (pas couleur seule) ; confirmation clavier ; message de conséquence ; focus visible |

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

# ANNEXE B — Contenu intégral document 36 (après correctif)

# SFIA Studio — Flows, frames et inventaire Figma (vertical slice POC)

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `36-poc-vertical-slice-ux-ui-flows-and-frames.md` |
| **Cycle** | 4 — UX/UI (correctif borné) |
| **Profil** | Standard |
| **Statut** | `draft-for-morris-final-validation` — correctif appliqué |
| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page** | `UX-B — POC Vertical Slice` (`51:2`) |
| **Companion** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |

> Inventaire des frames candidates = **storyboard d’états**.  
> **Dix états, pas dix routes.** Quatre vues P0 = structure applicative de référence.

---

## 1. Pages Figma

| Page | node ID | Rôle |
|------|---------|------|
| `UX-B — P0` | `0:1` | Référence validée — **non modifiée** |
| `UX-B — POC Vertical Slice` | `51:2` | Frames VS candidates |

---

## 2. Frames sources P0 (lues, non modifiées)

| Frame | node ID | Dimensions |
|-------|---------|------------|
| P0-00C — Nouvelle demande | `19:2` | 1440 × 1024 |
| P0-01C — Vue synthèse | `22:2` | 1440 × 1024 |
| P0-02C — Cycle actif | `22:133` | 1440 × 1024 |
| P0-03C — Décision Morris | `22:270` | 1440 × 1024 |

---

## 3. Modèle — dix états → quatre vues P0

| Vue applicative P0 | États VS-UX | Delivery cible |
|--------------------|-------------|----------------|
| Nouvelle demande | 01, 02, 03 | États / panneaux dans route existante |
| Décision Morris / Gate | 04 | 4 actions gate |
| Cycle actif | 05, 06, 07, 08 | Stepper / variantes |
| Décision Morris finale | 09 | Phase post-verdict |
| Vue synthèse / clôture | 10 | Synthèse **slice courant** seul |

Toute **nouvelle route** = arbitrage Morris distinct (hors correctif).

---

## 4. Inventaire frames vertical slice

| Frame (état) | node ID | Dimensions | Vue P0 | Étape |
|--------------|---------|------------|--------|-------|
| VS-UX-01 — Nouvelle demande | `51:3` | 1440 × 1024 | Nouvelle demande | 1 |
| VS-UX-02 — Qualification en cours | `51:139` | 1440 × 1024 | Nouvelle demande | 2 |
| VS-UX-03 — Qualification proposée | `51:277` | 1440 × 1024 | Nouvelle demande | 3 |
| VS-UX-04 — Gate Morris | `51:415` | 1440 × 1024 | Décision / Gate | 4 |
| VS-UX-05 — Exécution | `51:540` | 1440 × 1024 | Cycle actif | 5 |
| VS-UX-06 — Rapport disponible | `51:678` | 1440 × 1024 | Cycle actif | 6 |
| VS-UX-07 — Analyse GPT | `51:816` | 1440 × 1024 | Cycle actif | 7 |
| VS-UX-08 — Verdict proposé | `51:954` | 1440 × 1024 | Cycle actif | 8 |
| VS-UX-09 — Décision Morris | `51:1079` | 1440 × 1024 | Décision finale | 9 |
| VS-UX-10 — Clôture | `51:1204` | 1440 × 1024 | Synthèse / clôture | 10 |

Lien : https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO?node-id=51-2

---

## 5. Variantes / annotations

| Variante | node ID | Dimensions | Rôle |
|----------|---------|------------|------|
| VS-UX-VAR — Loading GPT | `52:2` | 720 × 420 | Phase active + FinOps |
| VS-UX-VAR — Erreur fail-closed | `52:10` | 720 × 420 | Rejet GPT |
| VS-UX-VAR — STOP Morris | `52:18` | 720 × 420 | STOP prioritaire |
| VS-UX-VAR — GO invalide | `52:26` | 720 × 420 | Invalidation ancrage |

**Supprimée (correctif) :** `VS-UX-NOTE — Gate 4 actions` (`52:34`) — redondante après 4e action explicite.

---

## 6. Contenu fonctionnel par état

### VS-UX-01 … 03 — vue Nouvelle demande
Inchangés fonctionnellement (saisie → qualif → proposition). Aucun GO.

### VS-UX-04 — Gate Morris (**correctif**)
- Dossier ancré : requestId, contractId, contractHash, branche, HEAD, allowlist, autorité, horodatage.
- **Quatre actions explicites :**
  1. **GO** — autoriser Cursor sandbox  
  2. **NO-GO** — refuser l’exécution (pas de spawn)  
  3. **Demander une correction** (CORRIGER) — re-qualification  
  4. **Abandonner** — visible, destructif (traitement danger), confirmation, conséquence « état abandonné », **aucune** action Git distante  
- **Abandonner ≠ NO-GO ≠ STOP**  
- Invalidation GO = bandeau / variante **séparée** (pas un substitut à Abandonner)

### VS-UX-05 … 08 — vue Cycle actif
Inchangés (exécution → rapport → analyse → verdict candidat).

### VS-UX-09 — Décision Morris finale
Clôturer · Corriger · Relancer (nouveau GO) · Abandonner — hors Git groupé.

### VS-UX-10 — Clôture (**correctif**)
Affiche **uniquement** le vertical slice courant :
- requestId · statut final · décision Morris  
- fichier Markdown produit · rapport & preuves  
- appels GPT (n / À définir) · réserves  
- traçabilité branche / HEAD / contractHash  
- prochaines actions candidates **séparées**  
**Retiré :** portfolio multi-projet / lignes héritées P0 hors contexte.  
**Aucun** claim MVP / production-ready.

---

## 7. Transitions UX

```text
01 → 02 (Qualifier)
02 → 03 (qualif OK) | erreur/STOP
03 → 04 (Ouvrir gate) | correction → 02
04 → 05 (GO) | NO-GO → clôture négative | Abandonner → abandonné | correction → 02
05 → 06 | STOP → stoppé
06 → 07
07 → 08 | fail-closed
08 → 09
09 → 10 | correction/relance (nouveau GO) | abandon
```

---

## 8. Distinction Abandonner / NO-GO / STOP

| Action | Moment | Effet | Git distant |
|--------|--------|-------|-------------|
| **STOP** | Pendant qualif / exec / analyse | Interrompt activité en cours → `stoppé` | Non |
| **NO-GO** | Gate pré-exécution | Refuse spawn Cursor | Non |
| **Abandonner** | Gate (et décision finale) | Cycle → `abandonné` après confirmation | Non |
| **Invalidation GO** | Si hash/HEAD/branche/allowlist change | GO invalide — re-gate | Non |

---

## 9. Écarts au P0 (après correctif)

| Écart | Traitement |
|-------|------------|
| 10 états vs 4 vues | Mapping §3 — **pas** 10 routes |
| Gate 4 actions | Matérialisé sur VS-UX-04 |
| Clôture vs synthèse | Contenu slice-only ; portfolio générique retiré |
| Note 52:34 | **Supprimée** |

---

## 10. Accessibilité (rappel Abandonner)

- Nom accessible : « Abandonner le cycle »  
- Danger textuel + style (pas couleur seule)  
- Confirmation focusable clavier  
- Conséquence lisible  
- Tab order : options → confirmation → confirmer  

---

## 11. Limites

- Chrome topbar (CTA « Interv360 », pills héritées) peut rester générique — hors nettoyage portfolio.  
- Variantes = annotations 720×420.  
- Frames VS toujours **candidates** jusqu’à validation finale Morris.


---

# ANNEXE C — Contenu intégral document 37 (après correctif)

# SFIA Studio — Decision pack UX/UI vertical slice POC

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `37-poc-vertical-slice-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI (correctif borné) |
| **Profil** | Standard |
| **Statut** | `draft-for-morris-final-validation` — correctif appliqué ; **validation finale requise** |
| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
| **Figma** | `lrjA1WEyRpL05vKR8k29LO` · page `51:2` |
| **Companions** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`36`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md) |

> Pack après correctif Morris. Distingue **décisions déjà appliquées**, **candidates restantes** et **gates suivants**.

---

## 1. Synthèse du correctif

GO Morris : **UX/UI correctif borné** consommé.

| Correction | Fait |
|------------|------|
| Dix frames = **états**, pas routes | Documenté 35/36/37 + mapping 4 vues P0 |
| Abandonner explicite au gate | VS-UX-04 — 4 actions ; note `52:34` **supprimée** |
| Clôture slice-only | VS-UX-10 — portfolio multi-projet **retiré** |

Aucun code · aucune route · aucune modif P0 / app / harness · aucun live · aucun commit projet.

---

## 2. Observations

1. Les quatre vues P0 restent le modèle applicatif de référence.
2. Le storyboard Figma reste utile pour revue visuelle sans imposer 10 routes.
3. Abandonner / NO-GO / STOP / invalidation GO sont désormais distingués.
4. La clôture ne doit plus être lue comme une synthèse portefeuille.

---

## 3. Décisions Morris déjà appliquées

| ID | Décision | Statut |
|----|----------|--------|
| VS-CAND-01…13, 15 | Amont fonctionnel | **VALIDÉES** |
| VS-CAND-14 | Plafond GPT obligatoire, valeur À définir | **VALIDÉE AVEC RÉSERVE** |
| **VS-UX-CAND-02** (amendée) | Dix frames = **dix états** (pas dix routes) | **VALIDÉE / appliquée** |
| **VS-UX-CAND-10** (amendée) | Abandonner = **4e action explicite** au gate | **VALIDÉE / appliquée** |
| Correctif clôture | VS-UX-10 sans portfolio hors contexte | **VALIDÉE / appliquée** |
| Mapping 4 vues | Regroupement états → vues P0 | **VALIDÉE / appliquée** |

---

## 4. Décisions UX candidates restantes

| ID | Décision candidate | Statut |
|----|-------------------|--------|
| VS-UX-CAND-01 | Page Figma dédiée | Ouverte (page créée) |
| VS-UX-CAND-03 | Continuité Product premium | Ouverte |
| VS-UX-CAND-04…09, 11 | FinOps / STOP / candidat / variantes / a11y | Ouvertes |
| VS-UX-CAND-12 | Séquencement validation → backlog → delivery | Ouverte |
| VS-UX-CAND-13 | Validation finale visuelle post-correctif | **Attendue** |

---

## 5. Impacts / risques / dette

| Thème | Impact | Risque | Dette |
|-------|--------|--------|-------|
| États ≠ routes | Clarifie delivery | Mésinterprétation future | Doc à préserver |
| 4 actions gate | Gate complet | Densité UI | Polish optionnel |
| Clôture slice | Moins de bruit | Chrome topbar encore générique | Mineure |
| Note 52:34 | Supprimée | — | — |

---

## 6. Gates Morris suivants

| Gate | Objet |
|------|-------|
| **G-VS-UX-FINAL** | Validation finale visuelle post-correctif |
| G-VS-UX-DOC | Commit / push / PR / merge docs 35–37 (+32–34 si lot) |
| G-VS-UX-DEL | Delivery UI (états dans 4 routes P0 — **pas** 10 routes) |
| G-VS-LIVE | Live GPT/Cursor |
| G-VS-LIMIT | Valeur numérique plafond GPT |

---

## 7. Décisions Morris attendues

1. Validation finale du correctif (frames 04/10 + docs).  
2. Autoriser ou non versionnement documentaire.  
3. **Ne pas** interpréter comme GO delivery / live / 10 routes / merge.

---

## 8. Verdict candidat

`SFIA STUDIO VERTICAL SLICE UX/UI CORRECTED — MORRIS FINAL VALIDATION REQUIRED`

### Interdits

CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · FRAMES VALIDATED · TEN ROUTES APPROVED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN


---

# ANNEXE D — Contenu complet docs 35–37 (diff utile)

diff --git a/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md b/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
--- a/projects/sfia-studio/35-poc-vertical-slice-ux-ui-contract.md
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
+| **Statut** | `draft-for-morris-final-validation` — correctif appliqué ; **validation finale Morris requise** |
+| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
+| **Page source** | `UX-B — P0` |
+| **Page créée** | `UX-B — POC Vertical Slice` |
+| **Correctif** | GO UX/UI correctif borné — dix états / Abandonner / clôture slice |
+| **Code / live** | **Aucun** |
+
+> Contrat UX/UI du parcours gouverné en **dix états fonctionnels** (storyboard), **pas dix routes**.  
+> Continuité visuelle Product premium (P0). Les **quatre vues P0** restent la structure applicative de référence.  
+> Frames VS-UX = candidates jusqu’à validation finale Morris. Ne pas modifier les frames P0.
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
+### Correctif Morris appliqué (ce cycle)
+
+| Décision | Statut |
+|----------|--------|
+| Dix frames = **dix états** de parcours, **pas dix routes** | **VALIDÉE / appliquée** |
+| Quatre vues P0 = structure produit de référence | **VALIDÉE / appliquée** |
+| Action **Abandonner** explicite dans le gate Morris | **VALIDÉE / appliquée** |
+| Clôture spécifique au vertical slice (sans portfolio hors contexte) | **VALIDÉE / appliquée** |
+
+---
+
+## 1bis. Modèle de navigation — dix états, quatre vues
+
+**Règle dure :** les frames VS-UX-01…10 forment un **storyboard d’états fonctionnels**. Elles **ne constituent pas** dix nouvelles routes applicatives. Toute nouvelle route = arbitrage Morris distinct.
+
+| Vue applicative P0 (référence) | États VS-UX couverts | Mode delivery cible |
+|--------------------------------|----------------------|---------------------|
+| **Nouvelle demande** (P0-00C) | VS-UX-01, VS-UX-02, VS-UX-03 | États / panneaux / transitions dans la route existante |
+| **Décision Morris / Gate** (P0-03C) | VS-UX-04 | Gate à 4 actions dans la vue décision |
+| **Cycle actif** (P0-02C) | VS-UX-05, VS-UX-06, VS-UX-07, VS-UX-08 | Stepper / variantes d’état |
+| **Décision Morris finale** (P0-03C) | VS-UX-09 | Même famille « décision », phase post-verdict |
+| **Vue synthèse / clôture** (P0-01C) | VS-UX-10 | Synthèse **du slice courant** uniquement |
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
+## 4. Matrice parcours → état (frame) → vue P0 → autorité
+
+| État | Frame | Vue P0 de rattachement | Autorité action | Preuve UI |
+|------|-------|------------------------|-----------------|-----------|
+| 1 Nouvelle demande | VS-UX-01 | Nouvelle demande | Morris saisit | StudioRequest |
+| 2 Qualification en cours | VS-UX-02 | Nouvelle demande | Système GPT ; STOP Morris | event qualif |
+| 3 Qualification proposée | VS-UX-03 | Nouvelle demande | Morris revue | QualificationCandidate |
+| 4 Gate Morris | VS-UX-04 | Décision Morris / Gate | **Morris seul** | MorrisGateDecision |
+| 5 Exécution | VS-UX-05 | Cycle actif | Harness/Cursor ; STOP Morris | ExecutionEvents |
+| 6 Rapport | VS-UX-06 | Cycle actif | Morris lit | CursorExecutionReport |
+| 7 Analyse GPT | VS-UX-07 | Cycle actif | GPT analyse ; STOP conso | event analyse |
+| 8 Verdict proposé | VS-UX-08 | Cycle actif | GPT candidat | GptVerdictCandidate |
+| 9 Décision Morris | VS-UX-09 | Décision Morris finale | **Morris seul** | MorrisFinalDecision |
+| 10 Clôture | VS-UX-10 | Vue synthèse / clôture | Affichage dérivé | CycleSummary |
+
+> **Pas de routes nouvelles** : le delivery privilégie états, variantes, panneaux et transitions dans les quatre vues P0.
+
+---
+
+## 5. Exigences UX `VS-UX-FR-*`
+
+| ID | Exigence |
+|----|----------|
+| VS-UX-FR-01 | Dix frames = **dix états** storyboard 1440×1024 ; **pas** dix routes ; pas de fusion silencieuse |
+| VS-UX-FR-02 | Shell P0 conservé (rail / topbar / canvas / copilote) |
+| VS-UX-FR-03 | Copilote jamais présenté comme décision Morris |
+| VS-UX-FR-04 | GO visible uniquement sur VS-UX-04 ; ancré hash/HEAD/branche/allowlist |
+| VS-UX-FR-05 | Invalidation GO représentée (bandeau / état invalide) — **distincte** d’Abandonner |
+| VS-UX-FR-06 | STOP prioritaire et accessible clavier — **≠** Abandonner / NO-GO |
+| VS-UX-FR-07 | FinOps : appels GPT séparés (qualif ≠ analyse) ; plafond « À définir » ; pas de retry auto |
+| VS-UX-FR-08 | Verdict GPT étiqueté **candidat** |
+| VS-UX-FR-09 | Clôture uniquement via décision Morris (VS-UX-09→10) |
+| VS-UX-FR-10 | Aucun secret / token / PII réelle dans les maquettes |
+| VS-UX-FR-11 | Aucune écriture Git distante groupée dans les CTA |
+| VS-UX-FR-12 | Source de statut (Git / harness / dérivé Studio) lisible |
+| VS-UX-FR-13 | Fail-closed GPT visible (erreur + pas de suite) |
+| VS-UX-FR-14 | Frames P0 non modifiées ; VS non « baseline validée » |
+| VS-UX-FR-15 | Gate Morris : **quatre** actions explicites GO · NO-GO · Demander une correction · **Abandonner** |
+| VS-UX-FR-16 | Abandonner : visible, destructif, confirmation, conséquence « état abandonné », pas d’action Git distante |
+| VS-UX-FR-17 | Clôture (VS-UX-10) : **uniquement** données du vertical slice courant — **aucun** portfolio multi-projet hors contexte |
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
+| **Abandonner** | Nom accessible explicite « Abandonner le cycle » ; danger **aussi** textuel (pas couleur seule) ; confirmation clavier ; message de conséquence ; focus visible |
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
--- a/projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
+++ b/projects/sfia-studio/36-poc-vertical-slice-ux-ui-flows-and-frames.md
+# SFIA Studio — Flows, frames et inventaire Figma (vertical slice POC)
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `36-poc-vertical-slice-ux-ui-flows-and-frames.md` |
+| **Cycle** | 4 — UX/UI (correctif borné) |
+| **Profil** | Standard |
+| **Statut** | `draft-for-morris-final-validation` — correctif appliqué |
+| **fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
+| **Page** | `UX-B — POC Vertical Slice` (`51:2`) |
+| **Companion** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`37`](./37-poc-vertical-slice-ux-ui-decision-pack.md) |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+
+> Inventaire des frames candidates = **storyboard d’états**.  
+> **Dix états, pas dix routes.** Quatre vues P0 = structure applicative de référence.
+
+---
+
+## 1. Pages Figma
+
+| Page | node ID | Rôle |
+|------|---------|------|
+| `UX-B — P0` | `0:1` | Référence validée — **non modifiée** |
+| `UX-B — POC Vertical Slice` | `51:2` | Frames VS candidates |
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
+## 3. Modèle — dix états → quatre vues P0
+
+| Vue applicative P0 | États VS-UX | Delivery cible |
+|--------------------|-------------|----------------|
+| Nouvelle demande | 01, 02, 03 | États / panneaux dans route existante |
+| Décision Morris / Gate | 04 | 4 actions gate |
+| Cycle actif | 05, 06, 07, 08 | Stepper / variantes |
+| Décision Morris finale | 09 | Phase post-verdict |
+| Vue synthèse / clôture | 10 | Synthèse **slice courant** seul |
+
+Toute **nouvelle route** = arbitrage Morris distinct (hors correctif).
+
+---
+
+## 4. Inventaire frames vertical slice
+
+| Frame (état) | node ID | Dimensions | Vue P0 | Étape |
+|--------------|---------|------------|--------|-------|
+| VS-UX-01 — Nouvelle demande | `51:3` | 1440 × 1024 | Nouvelle demande | 1 |
+| VS-UX-02 — Qualification en cours | `51:139` | 1440 × 1024 | Nouvelle demande | 2 |
+| VS-UX-03 — Qualification proposée | `51:277` | 1440 × 1024 | Nouvelle demande | 3 |
+| VS-UX-04 — Gate Morris | `51:415` | 1440 × 1024 | Décision / Gate | 4 |
+| VS-UX-05 — Exécution | `51:540` | 1440 × 1024 | Cycle actif | 5 |
+| VS-UX-06 — Rapport disponible | `51:678` | 1440 × 1024 | Cycle actif | 6 |
+| VS-UX-07 — Analyse GPT | `51:816` | 1440 × 1024 | Cycle actif | 7 |
+| VS-UX-08 — Verdict proposé | `51:954` | 1440 × 1024 | Cycle actif | 8 |
+| VS-UX-09 — Décision Morris | `51:1079` | 1440 × 1024 | Décision finale | 9 |
+| VS-UX-10 — Clôture | `51:1204` | 1440 × 1024 | Synthèse / clôture | 10 |
+
+Lien : https://www.figma.com/design/lrjA1WEyRpL05vKR8k29LO?node-id=51-2
+
+---
+
+## 5. Variantes / annotations
+
+| Variante | node ID | Dimensions | Rôle |
+|----------|---------|------------|------|
+| VS-UX-VAR — Loading GPT | `52:2` | 720 × 420 | Phase active + FinOps |
+| VS-UX-VAR — Erreur fail-closed | `52:10` | 720 × 420 | Rejet GPT |
+| VS-UX-VAR — STOP Morris | `52:18` | 720 × 420 | STOP prioritaire |
+| VS-UX-VAR — GO invalide | `52:26` | 720 × 420 | Invalidation ancrage |
+
+**Supprimée (correctif) :** `VS-UX-NOTE — Gate 4 actions` (`52:34`) — redondante après 4e action explicite.
+
+---
+
+## 6. Contenu fonctionnel par état
+
+### VS-UX-01 … 03 — vue Nouvelle demande
+Inchangés fonctionnellement (saisie → qualif → proposition). Aucun GO.
+
+### VS-UX-04 — Gate Morris (**correctif**)
+- Dossier ancré : requestId, contractId, contractHash, branche, HEAD, allowlist, autorité, horodatage.
+- **Quatre actions explicites :**
+  1. **GO** — autoriser Cursor sandbox  
+  2. **NO-GO** — refuser l’exécution (pas de spawn)  
+  3. **Demander une correction** (CORRIGER) — re-qualification  
+  4. **Abandonner** — visible, destructif (traitement danger), confirmation, conséquence « état abandonné », **aucune** action Git distante  
+- **Abandonner ≠ NO-GO ≠ STOP**  
+- Invalidation GO = bandeau / variante **séparée** (pas un substitut à Abandonner)
+
+### VS-UX-05 … 08 — vue Cycle actif
+Inchangés (exécution → rapport → analyse → verdict candidat).
+
+### VS-UX-09 — Décision Morris finale
+Clôturer · Corriger · Relancer (nouveau GO) · Abandonner — hors Git groupé.
+
+### VS-UX-10 — Clôture (**correctif**)
+Affiche **uniquement** le vertical slice courant :
+- requestId · statut final · décision Morris  
+- fichier Markdown produit · rapport & preuves  
+- appels GPT (n / À définir) · réserves  
+- traçabilité branche / HEAD / contractHash  
+- prochaines actions candidates **séparées**  
+**Retiré :** portfolio multi-projet / lignes héritées P0 hors contexte.  
+**Aucun** claim MVP / production-ready.
+
+---
+
+## 7. Transitions UX
+
+```text
+01 → 02 (Qualifier)
+02 → 03 (qualif OK) | erreur/STOP
+03 → 04 (Ouvrir gate) | correction → 02
+04 → 05 (GO) | NO-GO → clôture négative | Abandonner → abandonné | correction → 02
+05 → 06 | STOP → stoppé
+06 → 07
+07 → 08 | fail-closed
+08 → 09
+09 → 10 | correction/relance (nouveau GO) | abandon
+```
+
+---
+
+## 8. Distinction Abandonner / NO-GO / STOP
+
+| Action | Moment | Effet | Git distant |
+|--------|--------|-------|-------------|
+| **STOP** | Pendant qualif / exec / analyse | Interrompt activité en cours → `stoppé` | Non |
+| **NO-GO** | Gate pré-exécution | Refuse spawn Cursor | Non |
+| **Abandonner** | Gate (et décision finale) | Cycle → `abandonné` après confirmation | Non |
+| **Invalidation GO** | Si hash/HEAD/branche/allowlist change | GO invalide — re-gate | Non |
+
+---
+
+## 9. Écarts au P0 (après correctif)
+
+| Écart | Traitement |
+|-------|------------|
+| 10 états vs 4 vues | Mapping §3 — **pas** 10 routes |
+| Gate 4 actions | Matérialisé sur VS-UX-04 |
+| Clôture vs synthèse | Contenu slice-only ; portfolio générique retiré |
+| Note 52:34 | **Supprimée** |
+
+---
+
+## 10. Accessibilité (rappel Abandonner)
+
+- Nom accessible : « Abandonner le cycle »  
+- Danger textuel + style (pas couleur seule)  
+- Confirmation focusable clavier  
+- Conséquence lisible  
+- Tab order : options → confirmation → confirmer  
+
+---
+
+## 11. Limites
+
+- Chrome topbar (CTA « Interv360 », pills héritées) peut rester générique — hors nettoyage portfolio.  
+- Variantes = annotations 720×420.  
+- Frames VS toujours **candidates** jusqu’à validation finale Morris.

diff --git a/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md b/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
--- a/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
+++ b/projects/sfia-studio/37-poc-vertical-slice-ux-ui-decision-pack.md
+# SFIA Studio — Decision pack UX/UI vertical slice POC
+
+| Métadonnée | Valeur |
+|------------|--------|
+| **Document** | `37-poc-vertical-slice-ux-ui-decision-pack.md` |
+| **Cycle** | 4 — UX/UI (correctif borné) |
+| **Profil** | Standard |
+| **Statut** | `draft-for-morris-final-validation` — correctif appliqué ; **validation finale requise** |
+| **Base Git** | `eb180638ad334a29a86b9fb757f401814003a0d8` |
+| **Figma** | `lrjA1WEyRpL05vKR8k29LO` · page `51:2` |
+| **Companions** | [`35`](./35-poc-vertical-slice-ux-ui-contract.md) · [`36`](./36-poc-vertical-slice-ux-ui-flows-and-frames.md) |
+
+> Pack après correctif Morris. Distingue **décisions déjà appliquées**, **candidates restantes** et **gates suivants**.
+
+---
+
+## 1. Synthèse du correctif
+
+GO Morris : **UX/UI correctif borné** consommé.
+
+| Correction | Fait |
+|------------|------|
+| Dix frames = **états**, pas routes | Documenté 35/36/37 + mapping 4 vues P0 |
+| Abandonner explicite au gate | VS-UX-04 — 4 actions ; note `52:34` **supprimée** |
+| Clôture slice-only | VS-UX-10 — portfolio multi-projet **retiré** |
+
+Aucun code · aucune route · aucune modif P0 / app / harness · aucun live · aucun commit projet.
+
+---
+
+## 2. Observations
+
+1. Les quatre vues P0 restent le modèle applicatif de référence.
+2. Le storyboard Figma reste utile pour revue visuelle sans imposer 10 routes.
+3. Abandonner / NO-GO / STOP / invalidation GO sont désormais distingués.
+4. La clôture ne doit plus être lue comme une synthèse portefeuille.
+
+---
+
+## 3. Décisions Morris déjà appliquées
+
+| ID | Décision | Statut |
+|----|----------|--------|
+| VS-CAND-01…13, 15 | Amont fonctionnel | **VALIDÉES** |
+| VS-CAND-14 | Plafond GPT obligatoire, valeur À définir | **VALIDÉE AVEC RÉSERVE** |
+| **VS-UX-CAND-02** (amendée) | Dix frames = **dix états** (pas dix routes) | **VALIDÉE / appliquée** |
+| **VS-UX-CAND-10** (amendée) | Abandonner = **4e action explicite** au gate | **VALIDÉE / appliquée** |
+| Correctif clôture | VS-UX-10 sans portfolio hors contexte | **VALIDÉE / appliquée** |
+| Mapping 4 vues | Regroupement états → vues P0 | **VALIDÉE / appliquée** |
+
+---
+
+## 4. Décisions UX candidates restantes
+
+| ID | Décision candidate | Statut |
+|----|-------------------|--------|
+| VS-UX-CAND-01 | Page Figma dédiée | Ouverte (page créée) |
+| VS-UX-CAND-03 | Continuité Product premium | Ouverte |
+| VS-UX-CAND-04…09, 11 | FinOps / STOP / candidat / variantes / a11y | Ouvertes |
+| VS-UX-CAND-12 | Séquencement validation → backlog → delivery | Ouverte |
+| VS-UX-CAND-13 | Validation finale visuelle post-correctif | **Attendue** |
+
+---
+
+## 5. Impacts / risques / dette
+
+| Thème | Impact | Risque | Dette |
+|-------|--------|--------|-------|
+| États ≠ routes | Clarifie delivery | Mésinterprétation future | Doc à préserver |
+| 4 actions gate | Gate complet | Densité UI | Polish optionnel |
+| Clôture slice | Moins de bruit | Chrome topbar encore générique | Mineure |
+| Note 52:34 | Supprimée | — | — |
+
+---
+
+## 6. Gates Morris suivants
+
+| Gate | Objet |
+|------|-------|
+| **G-VS-UX-FINAL** | Validation finale visuelle post-correctif |
+| G-VS-UX-DOC | Commit / push / PR / merge docs 35–37 (+32–34 si lot) |
+| G-VS-UX-DEL | Delivery UI (états dans 4 routes P0 — **pas** 10 routes) |
+| G-VS-LIVE | Live GPT/Cursor |
+| G-VS-LIMIT | Valeur numérique plafond GPT |
+
+---
+
+## 7. Décisions Morris attendues
+
+1. Validation finale du correctif (frames 04/10 + docs).  
+2. Autoriser ou non versionnement documentaire.  
+3. **Ne pas** interpréter comme GO delivery / live / 10 routes / merge.
+
+---
+
+## 8. Verdict candidat
+
+`SFIA STUDIO VERTICAL SLICE UX/UI CORRECTED — MORRIS FINAL VALIDATION REQUIRED`
+
+### Interdits
+
+CONCEPTION VALIDATED · POC PROVEN · MVP DEFINED · READY FOR DELIVERY · PRODUCTION READY · FRAMES VALIDATED · TEN ROUTES APPROVED · DOCUMENTATION MERGED · L5 GLOBAL PROVEN

