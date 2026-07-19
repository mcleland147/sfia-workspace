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
| **Statut** | `validated-for-versioning` — UX/UI + correctif **validés Morris** ; merge PR = GO distinct |
| **Figma fileKey** | `lrjA1WEyRpL05vKR8k29LO` |
| **Page source** | `UX-B — P0` |
| **Page créée** | `UX-B — POC Vertical Slice` |
| **Correctif** | GO UX/UI correctif borné — dix états / Abandonner / clôture slice |
| **Code / live** | **Aucun** |

> Contrat UX/UI du parcours gouverné en **dix états fonctionnels** (storyboard), **pas dix routes**.
> Continuité visuelle Product premium (P0). Les **quatre vues P0** restent la structure applicative de référence.
> Frames VS-UX = storyboard validé Morris sur le fond. Ne pas modifier les frames P0. Merge PR = GO distinct.

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
