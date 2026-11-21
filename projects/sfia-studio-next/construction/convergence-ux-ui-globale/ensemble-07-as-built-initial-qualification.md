# Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

**Statut:** construction DEV corrective — NO RELEASE · candidat Git local figé (post-RECETTE Equip'Campus)
**Base Git figée RECETTE (immuable):** `6ecdb987ee867a04ff816b699eb8870ac200db0a` · tree `d0ad47ff515676f1c033a39030e886859f7272f7`
**Branche DEV:** `sfia/next-ensemble07-projet-trajectoire-delivery` — gel local correctif (parent = base RECETTE)
**Date:** 2026-11-21 (correctif intégré UAT-02/06/08/09/10/11/12 + QA concurrence GET)

## Architecture retenue

Option A hybride (dossier §8.1) + corrections P0 stabilisation + **correctif continuité Pilot/Nora/Studio** :

1. Après `createProjectCommand` confirmé : `ensureInitialQualification` (retry) **avant** `continueAfterProjectCreated`, puis `kickInitialQualificationProcessing` (P0-05).
2. Kick uniquement depuis create / reconcile POST — **jamais depuis GET**.
3. Publication : D5 `PROPOSE_TRAJECTORY` avec `effectOwnerFence` évalué **dans** `runBusinessCommand` (FOR UPDATE op) au point de mutate (P0-01).
4. `resultJson.assistantContent` durable pour reprise exacte message (P0-02).
5. Lien `preparation_project_links.initial_qualification_expected` (migration 016) : legacy = false → pas de verrou synthétique (P0-04).
6. RETAIN conversationnel résout la PROPOSED courante côté serveur (FIX-08) — pas de cible D5 dans le body USER_MESSAGE.
7. Forecast déterministe + `validateStructuredForecast` (FIX-07) — LIVE Nora NOT PROVEN ce cycle.
8. Documents « en cours » = statut `SAVING` uniquement (FIX-11).
9. **Normalisation `cycleType`** à la frontière classify D5 (`cycle-type-normalize.ts`) — variants sûrs (`cadrage`→`CADRAGE`) ; inconnus refusés sans remap silencieux.
10. **Catalogue cycles** injecté dans le contexte Nora (`nora-context.ts`) — identifiants + libellés seulement, pas les fiches CKI.
11. **Restitution post-effet** déterministe (`composePilotageEffectRestitution`) avant persistance du message assistant — APPLIED / REJECTED / CONFLICT / UNKNOWN / ALREADY_APPLIED.
12. **Projection fil Travail** : dumps techniques mission filtrés en lecture (`listMessages`) ; nouveaux continues métier sans `projectId=` brut.
13. **Sync surfaces** : `selectSurface` et l'effet URL `searchParams` (rail `<Link>`) déclenchent `refreshDurablePilotage` — projection pilotage complète (+ messages) via GET projet, sans F5, sans mutation.
14. **Projections de tour** : `listTurnProjections` expose aussi `pilotageEffect` (sibling `resultJson`) pour corrélation API/UI.
15. **Fixture E2E** : OPEN émet `cycleType="cadrage"` (frontière LIVE) ; GO naturel + RETAIN + type inconnu enregistrés.
16. **Stale GET guard** : `shouldApplyDurableRefresh` (génération + projectId) appliqué **avant** tout `setState` dans `refreshDurablePilotage`.
17. **Trajectoire vs ACTIVE** : si cycle ACTIVE, les bandeaux qualification (CLARIFICATION/…) n'occultent plus parcours/CKI.
18. **CKI UI** : `data-testid=trajectory-cki-id|trajectory-cki-absent` pour assertions navigateur strictes.
19. **Course GET A/B** : QA-FINAL-01 Playwright prouve barrières A tenu → B appliqué+observable → A relâché sans écrasement (marqueurs objectifs).

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
| `web/src/domains/pilotage/cycle-type-normalize.ts` | normalisation cycleType LIVE→D5 |
| `web/src/domains/pilotage/nora-context.ts` | snippets pilotage + catalogue cycles |
| `web/src/domains/conversation/pilotage-effect-restitution.ts` | restitution métier post-effet + filtre dumps |
| `web/src/domains/conversation/service.ts` | compose restitution avant commit ; `listMessages` projection |
| `web/src/app/projects/[projectId]/page.tsx` | refresh pilotage au changement de surface |
| `web/src/components/figma/TrajectoryBoard.tsx` | surface Trajectoire 09.02/07/10/11 |
| `web/src/components/figma/SasCreateProgressPopup.tsx` | pop-up SAS 06 allégée |
| `web/src/components/figma/ProjectOverview.tsx` | 09.01 / 09.06 |
| `web/src/components/figma/NoraConversation.tsx` | verrou 05.17 |

## Preuves

- Unit: `ensemble07-forecast-builder`, `ensemble07-qualification-lock`, `ensemble07-ensure-idempotent`, `ensemble07-cycle-type-normalize` (`cadrage`→`CADRAGE`), `ensemble07-pilotage-effect-restitution`
- Integration PG: `ensemble07-initial-qualification.pg.test.ts` (OPEN avec `cycleType=cadrage` → ACTIVE CADRAGE), `ml3-pilotage`, `intent-continuity-global`
- LIVE Nora fournisseur : **NOT RUN — GATE REQUIRED** (pas de nouvel appel fournisseur ce cycle)
- RECETTE `:3200` : **non mutée**

## Réserves connues

- Fidélité visuelle pixel des 13 frames : hors mandat correctif (OUT Figma).
- LIVE cognitive réelle sur projet synthétique DEV : gate Morris + autorisation fournisseur requises.
- CONFLICT/UNKNOWN : UNIT DETERMINISTIC ; BROWSER NOT RUN ce cycle.
- LIVE Nora fournisseur : NOT RUN.
