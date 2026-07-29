# 05 — Visual contract and Figma reference

## 1. Figma

| Champ | Valeur |
|-------|--------|
| FileKey | `lrjA1WEyRpL05vKR8k29LO` |
| Source | `app/styles/tokens.css` header |
| Page existante | `0:1` — **UX-B — P0** |
| Écriture ce cycle | **aucune** (pas d’écrasement P0) |
| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED` |
| D-VS-05 reco | Créer page **`FRAMING — First visible VS`** dans le même fichier après GO Morris |

## 2. Design system

**Réutiliser** tokens existants (`--sfia-*`), StudioShell, StatusPill, MetricCard, CtaButton, Card.
**Interdit** : nouveau design system parallèle.

## 3. Dimensions

| Viewport | Size |
|----------|------|
| Desktop | 1440 × 1024 |
| Laptop | 1280 × 800 |
| Mobile ref | 390 × 844 |

## 4. Frames (contrat Git)

| # | Frame | Objectif | Contenu clé | Actions | États | Mapping | Acceptation |
|---|-------|----------|-------------|---------|-------|---------|-------------|
| 1 | Project list / empty | Accueil | disclosure + empty CTA | Créer | empty/loading | — | CTA unique visible |
| 2 | Create project | Formulaire | champs minimaux | Submit / Cancel | validation errors | T-A0/T-A1 | projet créé local |
| 3 | Project overview | Fiche | LPS, doctrine, blockers | Recommander / Décider | partial/blocked | T-A1/T-A7 | données cœur |
| 4 | Cycle recommendation | Reco | profil, justification, epistemic | Accepter pour décision | confidence low | T-A2 | bandeau ≠ décision |
| 5 | Morris decision | Décision | 4 actions + mode LOCAL DEMO | Valider/Refuser/Reporter/Corriger | Critical blocked | T-A3 | decisionId enregistré |
| 6 | Readiness dashboard | Synthèse | HARD/T-A6/IAM/persistence/RUN | Voir historique | NOT READY | T-A6/T-A7 | anti-claims visibles |
| 7 | Decision confirmation | Confirm | résumé avant accept | Confirmer / Annuler | — | T-A3 confirm APIs | pas d’auto-accept |
| 8 | Refusal / correction | États négatifs | motif | Retour overview | — | T-A3 | historique mis à jour |
| 9 | Critical blocked | Stop Critical | R-T-A3-1 OPEN | Retour | blocked | T-A3/T-A7 | aucun faux GO |
| 10 | Local data disclosure | Transparence | local vs produit | Fermer | — | T-A7 persistence | wording NOT_SELECTED |
| 11 | Mobile / narrow | Responsive | stack vertical | mêmes actions | — | — | usable 390 |
| 12 | Error / empty | Erreurs | messages liés champs | Retry | error | mapped codes | a11y labels |

Node IDs Figma : **à créer** (non disponibles — écriture non exécutée).

## 5. Layout contract

- Shell : rail gauche + topbar + canvas (+ copilot optionnel)
- Bandeau sticky : `LOCAL BOUNDED · IAM NOT_SELECTED · NO REAL AGENT · DELIVERY NOT AUTHORIZED`
- Une action primaire par écran
- Blockers en liste textuelle (pas couleur seule)
- Focus visible sur CTA et champs

## 6. Tokens

Conserver palette flush Studio existante. Pas de thème purple-AI générique nouveau.
