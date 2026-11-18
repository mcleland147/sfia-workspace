# UAT-03 — Correctif + observabilité + redéploiement RECETTE

**Date :** 2026-11-18  
**GO Morris :** correctif + QA + build + cutover RECETTE, même cycle SFIA v2.6  
**Profil :** Critical · NO RELEASE · NO PRODUCT PUSH/PR/MERGE · NO STABLE / Gate C / ADOPTED  

## Identités

| Élément | Valeur |
| --- | --- |
| Parent RECETTE | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` · tree `f94e8eccf912f76506702cd8c19a5e57df9b9ba2` · build `_eeb9Jy2hV242myk86VTu` |
| Nouveau candidat figé | `90c3e59f4a355b463ea047cc45486906bde15680` · tree `1c7fa402d6029ee6c0b5582ba8d0a2b94f5bcceb` |
| Commits locaux | `cbfc4577` (fix+obs) → `90c3e59f` (exclude evidence `.ts` from typecheck) |
| Build ID | `5C3be3-ils1iOmH3qXo4d` (commentaire HTML Next : `5C3be3_ils1iOmH3qXo4d`) |
| Worktree isolé | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| URL | `http://127.0.0.1:3200` |
| DB | `127.0.0.1:5434` / `sfia_next_recette_ml4` |
| Config | `~/.config/sfia-studio-next/recette/.env.local` (non recopié depuis DEV) |

## Correctif fonctionnel

- `sequence.steps[].detail` : `z.string().max(400)` → `max(5000)` (schéma Agent).
- Parse : `MAX_SEQUENCE_STEP_DETAIL = 5000`.
- Autres familles (`relations` / `synthesis` / etc.) : **inchangées** (plafond 400 conservé où applicable).
- Instructions D3 SEQUENCE : plafond 5000 clarifié ; pas d’objectif de longueur ; pas d’invention ; pas de troncature critique.

## Observabilité durable

- Classification `PROVIDER_SCHEMA_OR_OUTPUT` / `structured_output_schema_validation` / `stream_drain`.
- Métadonnées : `zod_issue_path`, `validation_rule_hint`, fingerprint, generation/attempt ids, provider contacted, stream state.
- Variantes `Invalid output type` / `invalid output_type` sans dépendance exclusive à une classe minifiée.
- `STUDIO_NORA_DIAG_EPHEMERAL` / sensitive dump : **vidés** en RECETTE.

## Qualification

| Contrôle | Résultat |
| --- | --- |
| Vitest bornes detail 400/401/1200/5000/5001 + 6 steps | **PASS** (`uat03-sequence-detail-limit` 10) |
| Vitest obs corrective | **PASS** (`nora-adapter-corrective` 10) |
| `next build` isolé | **PASS** |
| Smoke login / portfolio / projet / fil | **PASS** |
| Isolation Pilot B → projet A | **404** |
| FORCE / SIM / DIAG ephemeral | absents / vides au runtime |
| DB avant/après | `23\|117\|544\|4` **inchangé** |
| UNKNOWN historiques | **conservés** (2 projections UNKNOWN) |

## Réserves reportées (hors périmètre)

- UX-01 — alignement icônes/titres  
- UX-02 — titre superflu « Matrice de comparaison »  
- Autres réserves matrice V0.9  

## Statut UAT-03

`FIX DEPLOYED — MORRIS USER RETEST PENDING`

## Verdict Cursor

`UAT-03 FIX DEPLOYED — RECETTE READY FOR MORRIS RETEST`
