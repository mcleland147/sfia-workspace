# Manifeste candidat RECETTE — E5 (préparation uniquement)

**Date UTC**: 2026-11-27T21:23:11Z  
**Classe**: NO RELEASE · RECETTE DEPLOYMENT CANDIDATE PENDING GO  
**Aucune mutation RECETTE dans E5.**

## Identités

| Couche | Valeur |
| --- | --- |
| Branche source | `sfia/next-ml5-integrated-delivery-20261123` |
| PUBLISHED INPUT SNAPSHOT | `a3305a42b3fd0f24b2a16bca825fc14eb37e84e6` |
| Tree publié | `72405eddfdd10deea324a5c0dd01a073b30c5f85` |
| LOCAL QUALIFIED CANDIDATE | delta local non commité — sha256 `e41e2a5a84f94de21928df2ba4bb1eb47730d636b33dad8e8ec05b037f2c1d17` |
| BUILD_ID DEV testé | `y06_YWoJEwb4zZZwRW26H` |
| Content digest | `8380c0cd4578a25f83ffcf5fd5e7e259dd9641ea8d6ab0fc4ddc4aec7da710f4` |
| Lane | DEV |
| Schéma | 027 (inchangé) |
| Compatibilité données | OK — aucune migration structurante |

## RECETTE actuelle (à préserver)

| Champ | Valeur |
| --- | --- |
| App | :3200 |
| PG | :5434 / `sfia_next_recette_ml4` |
| Candidat déployé | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` |
| BUILD | `rpEczSp61evIZ7d6fnIWR` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml5-recette-build-e8e6e06961fa` |

## Conditions de basculement (GO Morris distinct)

1. Publication projet éventuelle du LOCAL QUALIFIED CANDIDATE → SHA publié.
2. Build immuable RECETTE depuis ce SHA.
3. Secrets / volumes / sessions RECETTE distincts conservés.
4. Smoke technique :3200 sans LIVE.
5. Rollback = rebuild/repoint vers `e8e6e069` / `rpEczSp61evIZ7d6fnIWR`.

## Capacités vérifiées (DEV)

- Continuité Option B + recovery knowledgeEffects (DET/PG)
- Panneau droits + rail 1280×720 hit-test
- Dictation substituée (DET/PG + browser mic sas/travail)
- Suites unit 1531 · lint · qualify build

## Réserves bloquant « naturel »

- 17 MP OPEN RECETTE
- Dictée LIVE / allocation adaptative / T08 comparatif / autonomie sémantique
- Panneau peuplé naturel (fresh project = vide — honnête)
