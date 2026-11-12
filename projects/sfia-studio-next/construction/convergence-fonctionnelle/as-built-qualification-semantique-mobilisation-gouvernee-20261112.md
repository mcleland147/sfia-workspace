# As-built — Qualification sémantique Nora + mobilisation gouvernée (Q1/Q2 final runtime)

Date: 2026-11-12 ~15:10 CET (Europe/Paris)
Branche locale: `fix/next-semantic-intent-convergence-20261112`
Base candidat: `2416e2ee25662821b015407346c64ec204f67488`
Profil: Critical / EVOL corrective QA / NO RELEASE / publication produit INTERDITE

## Objectif de ce cycle

Fermer les deux preuves manquantes du Review Pack précédent (TECHNICAL REVIEWABLE — INTEGRATION GATE NOT YET CLEARED) :

1. **Q1** — Mission `AWAITING_PILOT_ACT` obtenue par le **vrai parcours D2** (sas sans projet, sans clic « Créer le projet »), puis blocage S05 d’une intention B concurrente.
2. **Q2** — Isolation ENV-01 runtime + PostgreSQL démontrée (pas seulement variables d’environnement).

Les corrections C-01..C-04 / F1–F4 / integrator sont **conservées**.

## Q1 — Parcours D2 réel (origine de la mission)

### Étapes

1. Authentifier Pilote DEV.
2. Ouvrir une préparation `OPEN` **sans** lien projet (`preparationProjectLinks` vide).
3. Envoyer via API conversation réelle : `"Je veux créer un projet."`
4. Nora uniquement à la frontière `TEST_BOUNDARY` (fixture DEV+E2E).
5. Qualification structurée → `d2.create_project` / `REQUEST_EFFECT`.
6. Studio prépare l’intention D2 ; `service.ts` produit `MissionProjection` via `buildD2OwnerActBinding` + `d2MissionIdempotencyKey` → status `AWAITING_PILOT_ACT`.
7. **Aucun** clic sur « Créer le projet » → **aucun** projet durable.
8. Relecture : `loadLatestMissionsByIntentKey` / oracle E2E après COMPLETE et après refresh.

### Différence vs ancien seed artificiel (C-02)

| | Seed `seed_awaiting_mission` | Parcours Q1 réel |
| --- | --- | --- |
| Précondition | Projet souvent déjà créé, puis mission « créer projet » injectée | Sas `OPEN`, zéro projet |
| `ownerActBinding` | JSON partiel possible | Complet : `kind=D2_CREATE_PROJECT`, `preparationId`, `clientIntentKey`, `suggestedIdempotencyKey` (= `d2MissionIdempotencyKey`) |
| Origine | Fixture HTTP écrit `resultJson` | `postUserMessageAndNora` / route messages Studio |
| Preuve S05 | Gate sait bloquer si projection présente | Gate bloque une mission **métier atteignable** |

### Contrôle positif B

Préparation DEV distincte **sans** mission AWAITING : document CREATE nominal → `documentCount+1`, `pendingEffectBlocked ≠ true`.

### Contrôle négatif B

Sur la préparation portant A : message documentaire concurrent → `pendingEffectBlocked=true`, raison `S05_MISSION_BLOCKS_EFFECT`, aucun document/projet/décision D6, A toujours `AWAITING_PILOT_ACT`.

### Preuves

| Suite | Résultat |
| --- | --- |
| `ml4c-d2-mission-s05.pg.test.ts` | 3 PASS |
| `ml4c-d2-mission-real-s05.spec.ts` (Playwright :3101) | 1 PASS |
| LIVE OpenAI | NOT RUN |

## Q2 — ENV-01 runtime / PostgreSQL

### Identité runtime (Playwright mutatif)

| Champ | Valeur observée |
| --- | --- |
| Port web E2E | `127.0.0.1:3101` (éphémère via `scripts/e2e-web-server.sh`) |
| Bind | `-H 127.0.0.1` (loopback) |
| Worktree code | candidat local `…/sfia-workspace-next-semantic-intent-20261112` |
| HEAD | `2416e2ee` + worktree dirty (non poussé) |
| Mode | `next dev`, `distDir=.next-e2e` |
| Lane flags | `STUDIO_LANE=DEV`, `STUDIO_E2E=1`, `STUDIO_FORCE_NORA_FIXTURE=1`, `OPENAI_API_KEY` neutralisé |
| RECETTE observée | process distinct PID sur `:3200`, cwd `…/sfia-workspace-next-ml4-recette-build-2416e2ee` — **non utilisé** par les tests mutatifs |

### Identité PostgreSQL (expurgée)

| Champ | DEV/E2E observé |
| --- | --- |
| Conteneur | `sfia-next-dev-pg` → `127.0.0.1:5433` |
| `current_database()` | `sfia_next_e2e` (vitest mutatif / Playwright) |
| `current_user` | `sfia_next_dev` |
| Bases sur conteneur DEV | `sfia_next_dev`, `sfia_next_e2e`, `sfia_next_ml4` |
| Conteneur RECETTE | `sfia-next-recette-pg` → `127.0.0.1:5434` |
| Cross-lane | Identifiants DEV → `:5434/sfia_next_recette` = **28P01 DENIED** |

### Matrice ENV-R01..R15

| ID | Résultat | Preuve |
| --- | --- | --- |
| ENV-R01 | PASS | Playwright webServer = worktree candidat + `.next-e2e` |
| ENV-R02 | PASS | Port 3101 éphémère documenté ; RECETTE :3200 PID/cwd distincts |
| ENV-R03 | PASS | `next dev -H 127.0.0.1` ; docker PG `127.0.0.1:5433` |
| ENV-R04 | PASS | `current_database()=sfia_next_e2e` |
| ENV-R05 | PASS | `current_user=sfia_next_dev` |
| ENV-R06 | PASS | DEV creds DENIED sur RECETTE :5434 |
| ENV-R07 | PASS | Bases/ports distincts ; mutatif confiné `sfia_next_e2e` |
| ENV-R08 | PASS | distDir `.next-e2e` vs operator `.next` / RECETTE autre worktree |
| ENV-R09 | NOT VERIFIED | Isolation cookies multi-lane non mesurée hors sessions DEV E2E |
| ENV-R10 | PASS (partiel) | Secrets non publiés ; roles/ports séparés ; mots de passe distincts (DENIED) |
| ENV-R11 | PASS | `e2eFixtureMutationsAllowed` refuse production/RECETTE/sans E2E |
| ENV-R12 | PASS | Gate vitest rewrite → `sfia_next_e2e` only |
| ENV-R13 | PASS | Aucune mutation RECETTE dans ce cycle ; cross-auth DENIED |
| ENV-R14 | PASS | `e2e-web-server.sh` + playwright.config reproductibles |
| ENV-R15 | PASS | Pack handoff sans secrets (contrôle publisher) |

**ENV-R09 = NOT VERIFIED** (ne pas convertir en PASS). Pas de STOP : frontière mutative PG/runtime démontrée.

## Runner / D4 / fixture (conservés)

- D5/D6 : classify → findByIntent/ActionKey avant STALE ; `stash.applied` obligatoire.
- D4 : pas de FACT sur seul `established` Nora.
- Fixture : DEV ∧ E2E=1 ∧ ¬production.

## Non-déclarations

ML4C ACCEPTED · S02-01 PASS · A-006/A-007 CLOSED · Gate C CLOSED · ADOPTED · READY FOR REAL · product push/PR/merge · LIVE Nora

## Réserves / gates Morris restants

- LIVE Nora pertinence (NOT RUN)
- S02-01 Intervencia FAIL (source exacte indisponible)
- A-006/A-007 ouvertes
- PR #676 OPEN / NON MERGÉE
- ENV-R09 sessions multi-lane NOT VERIFIED
- Décision d’intégration Git / RECETTE / promotion = Morris uniquement
