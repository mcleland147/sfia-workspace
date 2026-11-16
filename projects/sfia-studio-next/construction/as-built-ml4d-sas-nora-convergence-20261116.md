# As-built — ML4D Sas Nora convergence + correctifs (2026-11-16)

| Champ | Valeur |
| --- | --- |
| Macro-lot | R5 / ML4D — Sas conversationnel + projection + création + correctifs |
| Type | EVOL / MINOR candidate · **NO RELEASE** |
| Base UX-004 | `b05dacf47983ed8d914c92619ede5ffe65ce9264` |
| Candidat Sas | `596718b1` → correctif `1dfc79ff` → **correctif final (ce cycle)** |
| Branche | `feat/next-ml4d-sas-nora-convergence-20261116` |
| Contrats | docs@`22ee5540` (fonctionnel + technique) |
| Figma | `itgvCulInEnFY6DvgIegvP` 607:3…277 — VALIDATED UX Morris, non modifié |
| Lane | DEV only — RECETTE inchangée |
| Build DEV | `4uaTx97JzcebLhzIfr8h-` @ `127.0.0.1:3102` |
| RECETTE | `b05dacf4` / BUILD `20blGylSEta7201PgVvlw` @ `:3200` — **non modifiée** |

## Architecture

1. Tour Nora unique → qualification structurée (`desiredOutcome`, `initialScope`, `proposedProjectName`, `preparationAssessment*`).
2. Draft projection après qualification ; **persistance seulement après commit terminal COMPLETE**.
3. `mergeNoraDraftWithPrior` protège les champs `PILOT_EXPRESSED` / `PILOT_UI_EDIT`.
4. PATCH aperçu = `applyPilotApercuCorrection` + CAS `expectedCreationRevision` **obligatoire** ; HTTP 409/400/401/404/503 classifiés (jamais conflit/DB → SESSION_INVALID).
5. Assessment Nora **uniquement** si fourni dans la qualification (pas d’heuristique name+intention → BASE_SUFFICIENTE).
6. Création : `createProjectCommand` + verrou pilote ; nom inspecté après correction accepté sur mission awaiting.
7. UI : conversation + aperçu ; Journal/Documents secondaires.

## Écarts de ce correctif final

| Écart | Constat | Correction |
| --- | --- | --- |
| A PATCH | CAS partiel ; erreurs → 401 | `expectedCreationRevision` requis ; 200 cohérent ; 409/400/404/503 |
| B Qualification | Heuristique fabriquait l’appréciation | Assessment seulement si structuré ; instructions LIVE maturation ; `proposedProjectName` |
| C Multi-tours | E2E mono-message riche | Fixtures T1–T4 + PG GapC + e2e multi-tours |

## Contradiction PF-CRE-14

Orientation Morris (unicité / Pilote) vs PF-CRE-14. **R2 non réécrit.** Gate Morris ouvert.

## Migration 013

Additive `projection_json` — **non promue RECETTE** par ce GO. Aucune migration 014.

## Preuves

| Niveau | Résultat |
| --- | --- |
| UNIT projection + instructions LIVE structurelles | PASS |
| PG REAL create-project + PATCH | PASS |
| BROWSER FAKE sas (dont multi-tours) | voir Review Pack |
| UX-003/004 | PASS (cycle) |
| NORA LIVE | **NOT PROVEN** |

## Rollback

Revert commit(s) correctifs. Aucune migration destructive.
