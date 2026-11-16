# As-built — ML4D Sas Nora convergence + garanties de création (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + garanties |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Candidat Sas | `596718b1` → `1dfc79ff` → `acb5ce65` → **garanties G1/G2/G3 (ce cycle)** |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | docs@`22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` 607:3…277 — VALIDATED UX Morris, non modifié |
| Lane | DEV only — RECETTE inchangée |
| Build DEV | `T03qorYZpGs0odz56Nb9f` @ `127.0.0.1:3102` (attendu) |
| RECETTE | `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ `:3200` — **non modifiée** |

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

Additive `projection_json` — **non promue RECETTE** par ce GO. Aucune migration 014.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT projection / writeStatus / instructions LIVE structurelles | PASS |
| PG REAL create-project + PATCH + intent-continuity | PASS |
| BROWSER FAKE sas (multi-tours sans PATCH) | PASS |
| NORA LIVE | **NOT PROVEN** |
| MORRIS UI | **PENDING** |

## Rollback

Revert commit(s) correctifs. Aucune migration destructive.
