# SFIA STUDIO NEXT — ML4
# REVIEW PACK FULL — CYCLE 11 BASCULE G4→ML4 — COMPLETED

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 09:43 CET |
| Processus | SFIA v2.6 |
| Cycle | 11 |
| Profil | CRITICAL |
| Type | BASCULE ENVIRONNEMENT RECETTE |
| Version | 0.0.0-dev / NO RELEASE |
| GO | Morris — reprise directe après correction OpenAI (clé historique RECETTE) |

## 2. Git Truth

| Item | Valeur | Match |
|---|---|---|
| Local / served candidate | 974b0030a94469bef05496151792e8c35a9a83e9 | OK |
| Tree | 6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357 | OK |
| Parent | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b | OK |
| Remote Product | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b | OK (no push) |
| main | c658f59023d44a0e22448c7ee034e3c1dda292a2 | OK |
| L3 parent entrée | 4d4f37788333ef86112026844dfec39adc62ac16 | OK |
| BUILD_ID servi | RzpCuGMK6SnwfucphK7Qa | OK |
| Worktree servi | /Users/morris/Projects/sfia-workspace-next-ml4-recette-build-974b0030 | OK |
| Listener PID | 43774 | OK |

## 3. Correction OpenAI (sans divulgation)

| Emplacement contrôlé | OPENAI_API_KEY |
|---|---|
| G4 `.env.local` (29535d07) | ABSENT |
| G4 process env (avant arrêt) | ABSENT |
| `~/.config/sfia-studio-next/g4/` | ABSENT |
| RECETTE ML3 `…-ml3-recette-build-61fe295b` | PRESENT (sk- shape) — **source retenue** |
| RECETTE ML3 autres builds / ML2 | PRESENT (même empreinte) |
| RECETTE ML1 | PRESENT (empreinte distincte) |
| DEV worktree | **NON consulté** |

Action : reprise **uniquement** `OPENAI_API_KEY` → `~/.config/sfia-studio-next/recette/.env.local` (0600).
Identités GitHub / DB / Better Auth / integration crypto ML4 **inchangées**.
OpenAI : **CONFIGURED** — appel LIVE **NOT PROVEN**.

## 4. Bascule

1. Préflight OpenAI PASS après transfert.
2. Arrêt propre G4 (TERM npm parent 74141 / next 74165).
3. Port 3200 libre vérifié.
4. Démarrage ML4 : `node_modules/.bin/next start -H 127.0.0.1 -p 3200` sous `env -i` (pas `npm run start` → 3100).
5. cwd listener = ML4 worktree ; BUILD_ID=RzpCuGMK6SnwfucphK7Qa.
6. Artefacts/DB G4 préservés.

## 5. Smoke technique (non destructif)

| Check | Résultat |
|---|---|
| GET /login | 200 |
| GET /portfolio | 200 |
| GET /settings/integrations | 200 |
| GET /api/integrations/status | 401 (non auth) |
| STUDIO_LANE | RECETTE |
| DB | sfia_next_recette_ml4 / 33 tables |
| Better Auth URL / callback | :3200 alignés |
| App READ-ONLY | PASS 5677465 / 180092114 / chantiers360 |
| mutationsAllowed | false |
| STUDIO_GITHUB_ALLOW_MUTATIONS | absente |
| DEV :3100 | intact (43816) |
| Logs | pas de fuite sk-/PEM |
| User OAuth navigateur | NOT RUN |
| Nora conversation | NOT RUN |
| Mutation GitHub | NOT RUN |

## 6. Fake/Real §6.16

| Capacité | Qualification |
|---|---|
| Instance :3200 | REAL SERVING ML4 |
| App installation READ | REAL READ-ONLY PROVEN |
| OpenAI key presence | CONFIGURED |
| OpenAI LIVE / Nora UX | NOT PROVEN |
| USER RECETTE | NOT RUN |
| Git write REAL | BLOCKED |

## 7. Gates respectés

Aucun push Product · PR · merge · mutation GitHub · USER RECETTE · STABLE · suppression G4.

## 8. Reprise ML4 / rollback G4

Voir manifeste ENV-01 `restart_ml4` / `rollback_g4`.

## 9. Verdict unique

**ML4 RECETTE ENVIRONMENT — SWITCH COMPLETED — TECHNICALLY VERIFIED — READY FOR MORRIS USER RECETTE — USER E2E NOT RUN.**

## 10. ML4 — USER RECETTE HANDOVER (court)

- URL : http://127.0.0.1:3200
- SHA/build : 974b0030a94469bef05496151792e8c35a9a83e9 / RzpCuGMK6SnwfucphK7Qa
- App RECETTE : 5677465 / 180092114 / chantiers360
- DB : sfia_next_recette_ml4
- Profil navigateur dédié (réserve cookies A)
- STOP si App DEV, mauvais BUILD_ID, ou mutations activées hors GO
- Prochaine étape : nouveau chat Morris — parcours Studio→Nora→GitHub→D4→D6→publication→D8
