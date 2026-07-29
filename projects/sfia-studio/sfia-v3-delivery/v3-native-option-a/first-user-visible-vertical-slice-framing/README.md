# First user-visible SFIA Studio vertical slice — Framing

| Champ | Valeur |
|-------|--------|
| **Statut** | `FRAMING HISTORICAL — D-VS-01→04 ADOPTED — V1 EXECUTED LOCALLY — V2 NOT AUTHORIZED` |
| **Date** | 2026-07-29 15:45:00 CEST (+0200) |
| **Cycle** | 2 — Conception fonctionnelle (+1/3/4/5/9/15) |
| **Profil** | Standard |
| **Gate** | `GO FRAME FIRST USER-VISIBLE SFIA STUDIO VERTICAL SLICE — PROJECT CREATION TO CYCLE RECOMMENDATION AND MORRIS DECISION DASHBOARD — REUSE T-A0 TO T-A7 CORE — LOCAL BOUNDED DATA ONLY — NO IAM REAL AGENT EXECUTION DELIVERY OR CUTOVER` |
| **Branche framing** | `framing/sfia-studio-first-user-visible-vertical-slice` @ `c1955179a36079e060c41a845c2a1950084966c8` |
| **Branche V1 locale** | `delivery/sfia-studio-visible-slice-v1-project-core-composition` |
| **Base** | `origin/main` @ `7916066310777abce4fd5a64ff0c87759c375fd6` |
| **Code applicatif framing** | **aucune modification** |
| **Exécution V1** | facade headless T-A0/T-A1, OA mémoire, projection et audit optionnel — voir `11` |
| **Push / PR / merge projet V1** | **non autorisés, non exécutés** |

## Objectif

Cadrer le premier parcours **réellement visible et compréhensible** :

**Project Creation → Cycle Recommendation → Morris Decision → Readiness Dashboard**

en réutilisant le cœur T-A0→T-A7, sans IAM, sans persistance produit, sans agent réel, sans delivery/cutover.

## Synthèse

Trois stacks UI coexistent aujourd’hui et **ne sont pas unifiées** :

1. **VS POC** — StudioShell + fixtures/harness (`/synthese`, `/decision`, `/cycle-actif`, `?vs=`).
2. **OPS1** — session conversationnelle legacy (`/ops1/nouvelle-demande`).
3. **D1** — workspace/intake SQLite local (`/nouvelle-demande`, `/workspace`, `/projects/*`).

Le cœur Option A (`lib/oa/**`) est **complet jusqu’à T-A6** (+ fondations T-A7) mais **aucune route UI n’importe `@/lib/oa/**` aujourd’hui**.

Le framing propose une **facade applicative locale** au-dessus des use cases OA + lecture T-A7, en **adaptant StudioShell** et en **séparant strictement** fixture / local / produit.

## Scope / hors scope

**Dans le scope (cible produit local borné)** : création Project/LPS réelle · doctrine T-A0 · qualification cycle T-A2 · décision locale T-A3 honnête · dashboard readiness T-A6/T-A7 · historique borné F13.4.

**Hors scope** : IAM · Critical ack réel · agent/shell Cursor réel · harness BeB comme happy path · persistance produit · API HTTP obligatoire · delivery/cutover · fermeture HARD/T-A6/B5/R1/R-M01 · T-A7 COMPLETE · nouveau design system.

## Parcours cible (résumé)

1. Arrivée — disclosure mode local · CTA Créer un projet
2. Création — champs minimaux → T-A0+T-A1
3. Fiche projet — LPS, cycle, blockers
4. Recommandation — T-A2 (≠ décision)
5. Décision Morris — Valider/Refuser/Reporter/Corriger · mode `LOCAL MORRIS DECISION DEMO`
6. Readiness dashboard — anti-claims honnêtes
7. Historique borné

## Architecture (résumé)

```text
UI (StudioShell + screens)
  → VerticalSliceFacade (application composition)
    → ports T-A0…T-A7 use cases
      → adapters mémoire OA (+ audit SQLite optionnel)
        → UI projections read-only
```

Aucun composant React ne décide Critical / HARD closed / preuve suffisante / autorité / gate.

## Figma

| Item | Valeur |
|------|--------|
| FileKey | `lrjA1WEyRpL05vKR8k29LO` (tokens.css) |
| Page listée | `0:1` — **UX-B — P0** |
| Écriture Figma ce cycle | **non exécutée** (page P0 existante non écrasée) |
| Contrat visuel | **Git** — voir `05` |
| Statut | `FIGMA TARGET RESOLVED — WRITE NOT EXECUTED — GIT VISUAL CONTRACT PRODUCED` |

## Backlog recommandé

V1 Composition locale Project → V2 Create UI → V3 Recommendation → V4 Decision → V5 Dashboard → V6 Consolidation visuelle.

Recommandation de livraison : **plusieurs PR** (une par lot V1–V5), commits atomiques ; V6 peut accompagner ou suivre.

## Décisions Morris

| ID | Statut | Décision |
|----|--------|----------|
| D-VS-01 | `DECIDED — ADOPTED BY MORRIS` | adapter l'UI et StudioShell, sans modification UI en V1 |
| D-VS-02 | `DECIDED — ADOPTED BY MORRIS` | mémoire OA + audit SQLite local optionnel |
| D-VS-03 | `DECIDED — ADOPTED BY MORRIS` | fixtures hors happy path |
| D-VS-04 | `DECIDED — ADOPTED BY MORRIS` | V1 Project creation + core composition |
| D-VS-05 | `NOT DECIDED — NOT CONSUMED` | aucune écriture ou conformité Figma revendiquée |

## Statut d'exécution V1

V1 est exécuté localement sur une branche descendante du commit de framing. La facade compose la résolution Doctrine T-A0 et la création atomique Project/LPS v1 T-A1, puis expose une projection read-only reconstruite depuis T-A1. Les fixtures et le storage navigateur sont hors de cette surface.

Validations : 16 nouveaux tests ; régressions ciblées 109/109 ; suite complète 752/752 ; typecheck, lint et build green. Aucun fichier UI, OA existant, schéma SQLite, package ou lockfile n'est modifié.

V2 reste `NOT AUTHORIZED`. Aucun écran Create Project ni parcours visuel n'est implémenté.

## Anti-claims

- Framing ≠ produit ready ≠ MVP validé
- UI POC ≠ cœur OA branché
- Décision locale ≠ autorité IAM
- Local SQLite ≠ persistance produit
- Recommandation ≠ décision Morris
- HARD/T-A6 restent ouverts

## Index du pack

| Doc | Sujet |
|-----|-------|
| `01` | Inventaire UI + cœur |
| `02` | Journey et scope |
| `03` | Mapping T-A0→T-A7 ↔ UI |
| `04` | IA & navigation |
| `05` | Contrat visuel & Figma |
| `06` | Données locales & composition |
| `07` | A11y / responsive / erreurs |
| `08` | Backlog & slicing |
| `09` | Plan validation / preuves |
| `10` | Risques & decision pack Morris |
| `11` | Exécution locale V1 — Project core composition |

## Gate candidat suivant

`GO REVIEW AND INTEGRATE SFIA STUDIO FIRST VISIBLE SLICE V1 — PUSH BRANCH AND CREATE PR IF PR READINESS PASSES — NO MERGE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`

Après intégration distincte de V1 : `GO IMPLEMENT SFIA STUDIO FIRST VISIBLE SLICE LOT V2 — CREATE PROJECT UI — REUSE STUDIOSHELL AND V1 CORE COMPOSITION — NO IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER`.

Aucun gate automatique.

## Verdict

`SFIA STUDIO FIRST VISIBLE SLICE V1 IMPLEMENTED LOCALLY — PROJECT AND LPS CREATION COMPOSED THROUGH T-A0 AND T-A1 — UI PROJECTION AVAILABLE — OA MEMORY ACTIVE — OPTIONAL LOCAL AUDIT BOUNDED — FIXTURES OFF HAPPY PATH — NO UI ROUTE IAM PRODUCT PERSISTENCE REAL AGENT DELIVERY OR CUTOVER — TESTS GREEN — PROJECT BRANCH NOT PUSHED`
