# As-built — ML4D Sas Nora convergence + garanties de création (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + garanties |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Candidat Sas | `cd091385` + **convergence UX Figma→code (ce cycle)** |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | docs@`22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` 607:3 / 62 / 131 / 203 / 277 — VALIDATED UX Morris, **aucune écriture Figma** |
| Lane | DEV only — RECETTE figée |
| Build DEV | turbopack @ `127.0.0.1:3102` (BUILD_ID fichier `T03qorYZpGs0odz56Nb9f` / source post-commit) |
| RECETTE | `cd091385` / BUILD `E3J7wVO4MsKgl5aCTDhed` @ `:3200` — **inchangée** |

## Architecture

1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `proposedProjectName`, `preparationAssessment*`).
2. Draft projection après qualification ; **persistance seulement après commit terminal COMPLETE**.
3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED` / `PILOT_UI_EDIT`.
4. PATCH aperçu = `applyPilotApercuCorrection` + CAS `expectedCreationRevision` **obligatoire** ; résultat classifié `APPLIED_CURRENT` / `APPLIED_SUPERSEDED` / `CONFLICT_NOT_APPLIED` / `UNKNOWN`.
5. Assessment Nora **uniquement** si fourni dans la qualification (pas d’heuristique).
6. Création : `createProjectCommand` sous verrou ; **nom = proposition D2 inspectée** (projection.name sinon preview_name) ; refus d’un nom client arbitraire.
7. UI : conversation + aperçu ; Journal/Documents secondaires ; pas de succès trompeur sur PATCH superseded.

## Garanties consolidées (ce cycle)

| Écart | Constat | Correction |
| --- | --- | --- |
| G1 Nom inspecté | Mission binding acceptait un nom client arbitraire | Contrôle décisif sous `FOR UPDATE` dans `createProjectCommand` ; mission non réécrite depuis le payload |
| G2 Parcours navigateur | E2E multi-tours PATCH injecté avant Créer | T1→T5 conversationnel avec nom unique ; aucun PATCH de rattrapage ; T3 sans `REQUEST_EFFECT` artificiel |
| G3 PATCH concurrent | 200 + « Aperçu corrigé » après supersession | `writeStatus` honnête ; UI distingue courant / remplacé / non appliqué |

## Contradiction PF-CRE-14

Orientation Morris (unicité / Pilote) vs PF-CRE-14. **R2 non réécrit.** Gate Morris ouvert.

## Migration 013

Déjà appliquée sur RECETTE (cycle déploiement antérieur). **Aucune migration** dans le cycle UX.

## Convergence UX Figma → code (cycle 8)

Composition partagée `sas-*` pilotée par `sas-presentation` (assessment D2 + reprise), sans nouveau moteur métier.

| État | Node Figma | Runtime |
| --- | --- | --- |
| Première intention | 607:3 | stage `first_intention` |
| Clarification | 607:62 | `clarification` |
| Proposition | 607:131 | `proposal` |
| Base suffisante | 607:203 | `base_sufficient` + CTA aperçu |
| Reprise | 607:277 | `resume` |

F2 géométrie stable (1680×970) : rail 246 / header 72 / composer 118 / preview 518 / conversation 800 — **Δ 0 CSS px**.

Harness DEV : `/dev/sas-visual/[state]` (fixtures déterministes, hors RECETTE).

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT presentation / rail | PASS |
| Captures Figma + runtime 5 états | PASS (voir `.tmp-sfia-review/`) |
| F2 géométrie | PASS (Δ0) |
| NORA LIVE | **NOT PROVEN** |
| MORRIS UI visuelle | **PENDING** |
| RECETTE | **inchangée** `E3J7wVO4MsKgl5aCTDhed` |

## Rollback

Revert commit(s) UX. Aucune migration destructive. RECETTE non touchée.
