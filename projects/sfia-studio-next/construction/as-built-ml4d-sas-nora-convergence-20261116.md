# As-built — ML4D Sas Nora convergence + corrective (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + correctif |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Candidat Sas initial | `596718b1029f32e48c1cb5c9a6ac586372b857c1` |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | docs@`22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` 607:3…277 — VALIDATED UX Morris, non modifié |
| Lane | DEV only — RECETTE inchangée |
| Build DEV (correctif) | `9uKvoZLw0AsjIFm46-eAC` @ `127.0.0.1:3102` |
| RECETTE | `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ `:3200` — **non modifiée** |

## Architecture

1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `preparationAssessment*`).
2. Draft projection après qualification ; **persistance seulement après commit terminal COMPLETE**.
3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED`.
4. `updatePreview` / PATCH = `applyPilotApercuCorrection` (preview + projection, même révision).
5. Création : `createProjectCommand` + verrou advisory pilote `sfia:d2:project-name` puis clé d’idempotence ; comparaison JS unique (`normalizeProjectNameKey` / `namesConflictForSamePilot`).
6. UI : conversation + aperçu ; outils Journal/Documents en secondaire (`<details>`).

## Quatre écarts corrigés

| Écart | Cause | Correction |
| --- | --- | --- |
| A Unicité concurrente | Verrou seulement sur idempotencyKey | Advisory lock pilote avant check ; comparaison JS (pas SQL `lower`) |
| B Correction Pilote | PATCH preview sans projection | `applyPilotApercuCorrection` ; create via `inspectedCreatePayload` (pas « Projet sans titre ») |
| C Maturation Nora | Regex « suffisant » ; outcome/scope null ; projection avant commit | Champs structurés ; assessment typé ; persist post-commit |
| D UI sas | Onglets Discussion/Journal/Documents permanents | Outils secondaires ; pas de chrome projet avant création |

## Contradiction PF-CRE-14

Orientation Morris (unicité / Pilote) vs PF-CRE-14 (homonymes autorisés). Implémentation locale app-level. **R2 non réécrit.** Gate Morris D2 ouvert.

## Migration 013

`projection_json` jsonb additive — présente dans le candidat. Ce GO ne promeut pas RECETTE. Gate migration explicite avant mise à disposition RECETTE. Rollback logique = revert code ; `DROP COLUMN` perd les projections enregistrées.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT projection / rail | PASS |
| PG REAL (21) dont GapA concurrent + GapB correction | PASS |
| BROWSER FAKE sas corrective (4) | PASS (parcours sans formulaire + négation) |
| UX-003/004 | voir Review Pack |
| NORA LIVE | **NOT PROVEN** |

## Rollback

Revert commit correctif (+ candidat Sas si besoin). Aucune migration destructive ajoutée dans ce correctif.
