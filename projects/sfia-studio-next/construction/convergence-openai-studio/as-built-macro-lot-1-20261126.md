# Convergence OpenAI–Studio — As-built Macro-lot 1 (corrective)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 (corrective) |
| Statut | CORRECTIVE INTEGRATED (périmètre autorisé) — **NOT ADOPTED** · **NO RELEASE** |
| HEAD entrée corrective | `5794584a` |
| Contrats | `1e2e188d` blobs exacts |
| Hors GO | Admin LIVE · migration PG · WEB LIVE · UX Figma apply · continuité native ON · push projet |

## Cartographie KEEP / ADAPT / REPLACE / BUILD / DEFER

| Domaine | Classe | État corrective |
|---|---|---|
| Tracing | ADAPT | ALS corrélation ; `processorsReplaced` honnête ; oracle réseau fetch indépendant |
| OBS | KEEP | Causalité métier |
| Frontier | ADAPT | tool_usage + stream UNKNOWN ; continuité branchée (mode OFF) |
| Collecteur Admin | BUILD/ADAPT | Parsing buckets→results officiel ; paths SDK ; transport isolé ; secret hors Next |
| FinOps | ADAPT | Décimal string ; comparabilité par évidence (pas flag seul) |
| Continuité | ADAPT | Raccord frontier ALS ; runtime OFF |
| WEB | KEEP OFF | Dossier A3 |
| Decisions / retrieval / audio / L2 | DEFER | Lots suivants |

## Readiness Admin

Critères locaux satisfaits pour demander G-ADMIN-SECRET / G-ADMIN-LIVE **après revue** :

- Parsing conforme page/bucket/results
- Transport GET allowlist + retries bornés
- Isolation process (`SFIA_ADMIN_COLLECTOR_PROCESS=1`)
- Produit ne lit pas `OPENAI_ADMIN_KEY`
- Erreurs/pagination/idempotence testées

**ADMIN COLLECTOR — READY FOR BOUNDED LIVE QUALIFICATION** (technique locale) — activation LIVE toujours gate Morris.

## Gates restants

1. G-PROVIDER-SNAPSHOT-MIGRATION  
2. G-ADMIN-SECRET  
3. G-ADMIN-LIVE  
4. G-FINOPS-UX  
5. G-WEB-PUBLIC / A3  
6. G-TRACING-LOCAL  
7. G-NATIVE-CONTINUITY  
8. G-PROVIDER-LIVE-QUALIFICATION  

## Provisionnement Admin (hors chat)

1. Morris crée la clé sur https://platform.openai.com/settings/organization/admin-keys  
2. Provisionne uniquement dans l’env isolé du process collecteur (`OPENAI_ADMIN_KEY`)  
3. `SFIA_ADMIN_COLLECTOR_PROCESS=1` · `STUDIO_LANE=DEV` · `SFIA_ADMIN_USAGE_LIVE=1` après GO  
4. Jamais dans Next, Nora, navigateur, Git, chat, pack  

## Fichiers clés corrective

- `provider-admin-usage-collector.ts` (rewrite)
- `provider-admin-http-transport.ts`
- `decimal-money.ts`
- `scripts/finops-admin-collect.mts`
- `agents-sdk-tracing.ts` (ALS + network oracle)
- frontier continuity bind + stream usage
- dossiers migration / A3 / UX candidats
