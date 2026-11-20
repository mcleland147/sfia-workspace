# Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

**Statut:** construction DEV corrective — NO RELEASE · stabilisation fonctionnelle
**Base Git:** `e36fd8b0531c4f649830990a18f9cfdaecb3c03f`
**Branche:** `sfia/next-ensemble07-projet-trajectoire-delivery`
**Date:** 2026-11-20 (stabilisation fonctionnelle — UX gelée)

## Architecture retenue

Option A hybride (dossier §8.1) + corrections P0 stabilisation :

1. Après `createProjectCommand` confirmé : `ensureInitialQualification` (retry) **avant** `continueAfterProjectCreated`, puis `kickInitialQualificationProcessing` (P0-05).
2. Kick uniquement depuis create / reconcile POST — **jamais depuis GET**.
3. Publication : D5 `PROPOSE_TRAJECTORY` avec `effectOwnerFence` évalué **dans** `runBusinessCommand` (FOR UPDATE op) au point de mutate (P0-01).
4. `resultJson.assistantContent` durable pour reprise exacte message (P0-02).
5. Lien `preparation_project_links.initial_qualification_expected` (migration 016) : legacy = false → pas de verrou synthétique (P0-04).
6. RETAIN conversationnel résout la PROPOSED courante côté serveur (FIX-08) — pas de cible D5 dans le body USER_MESSAGE.
7. Forecast déterministe + `validateStructuredForecast` (FIX-07) — LIVE Nora NOT PROVEN.
8. Documents « en cours » = statut `SAVING` uniquement (FIX-11).

## Persistance

- Migration additive `015_trajectory_qualification.sql`.
- Migration additive `016_initial_qualification_expected.sql` (`initial_qualification_expected boolean DEFAULT false`).
- Table `trajectory_qualification_operations`.
- Colonne `trajectory_revisions.forecast_json`.

## Fichiers propriétaires principaux

| Fichier | Rôle |
|---------|------|
| `web/src/domains/pilotage/initial-qualification.ts` | ensure / process / assert admission |
| `web/src/domains/pilotage/forecast-builder.ts` | séquence 1–3 cycles (déterministe FAKE) |
| `web/src/domains/pilotage/qualification-lock.ts` | règles de verrou compositeur |
| `web/src/components/figma/TrajectoryBoard.tsx` | surface Trajectoire 09.02/07/10/11 |
| `web/src/components/figma/SasCreateProgressPopup.tsx` | pop-up SAS 06 allégée |
| `web/src/components/figma/ProjectOverview.tsx` | 09.01 / 09.06 |
| `web/src/components/figma/NoraConversation.tsx` | verrou 05.17 |

## Preuves

- Unit: `ensemble07-forecast-builder`, `ensemble07-qualification-lock`, `ensemble07-ensure-idempotent`
- Integration PG: `ensemble07-initial-qualification.pg.test.ts` (create→propose, idempotence, lock admission, clarification, failure)
- Build: `npm run build` OK
- Figma: 13/13 captures MCP locales sous `.tmp-sfia-review/ensemble07-evidence/figma/`

## Réserves connues

- Fidélité visuelle pixel des 13 frames : itérations runtime encore requises avant READY visuel.
- Vues détail 09.03 / 09.04 / 09.05 : projection partielle (bilan / CKI éditorial) à enrichir.
- GO conversationnel D6→D5 : capacités PilotagePanel conservées ; parcours conversationnel principal à prouver en e2e navigateur.
- LIVE Nora fournisseur : NOT PROVEN (fixture DEV).
