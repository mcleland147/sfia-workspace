# As-built — ML4D Sas Nora convergence + garanties de création (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + garanties |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Candidat Sas | `e52cec0d` + **correctif CTA D2 (ce cycle)** → SHA post-commit |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | docs@`22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` 607:3 / 62 / 131 / 203 / 277 — VALIDATED UX Morris, **aucune écriture Figma** |
| Lane | DEV → RECETTE (GO Morris cutover ce cycle) |
| CTA création | `shouldShowCreateProjectCta` = D2 `canCreate` uniquement — **pas** de gate Nora `BASE_SUFFICIENTE` (SAS-F-07 / AF-06) |
| Build DEV | post-commit (voir delivery-history) |
| RECETTE | nouveau SHA/build après bascule (rollback `cd091385` / `E3J7wVO4MsKgl5aCTDhed`) |

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
| Base suffisante | 607:203 | `base_sufficient` + CTA aperçu mis en valeur |
| Reprise | 607:277 | `resume` |

CTA « Créer le projet » : visible dès préconditions D2 (`canCreateFromProjection`), y compris CLARIFYING / PROPOSAL / reprise / assessment absent. Emphase visuelle frame 04 conservée sans gate métier.

F2 géométrie stable (1680×970) : rail 246 / header 72 / composer 118 / preview 518 / conversation 800 — **Δ 0 CSS px** (cycle UX précédent).

Harness DEV : `/dev/sas-visual/[state]` (aide seulement). Route réelle : `/preparations/{id}`.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT presentation / CTA D2 / rail / projection | PASS |
| PG create-project | PASS |
| BROWSER FAKE Sas + chat-first | PASS |
| Captures Figma cycle UX | réutilisées — **pas** de nouvelle campagne pixel |
| NORA LIVE | **NOT PROVEN** |
| MORRIS UX visuelle | **PENDING** (Morris sur RECETTE) |
| Verdict technique | `TECHNICALLY READY FOR MORRIS USER REVIEW` |

## Rollback

Applicatif : bascule LaunchAgent vers worktree `cd091385` / build `E3J7wVO4MsKgl5aCTDhed`. Aucune migration destructive. `projection_json` conservé.
