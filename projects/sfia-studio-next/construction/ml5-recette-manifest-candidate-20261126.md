# ML5 — Manifeste candidat RECETTE (préparation, sans cutover)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `4bfc1c1ed0861a1d8f5f4405ccb8cee487b8984d` |
| Tree | `23f32fec5d5203455eb6fad013d4046f499d36d4` |
| Web tree | `24d8f65820c5ea6956085c9d56bd7ecddbeb3389` |
| Lockfile | `package-lock.json` — `@openai/agents@0.21.0` · `openai@7.50.0` · `pdfjs-dist@4.10.38` |
| Schéma | `022_provider_usage_observations` (attempt_id déjà présent — **aucune migration appliquée**) |
| BUILD_ID | `emfz_yP5MBF9GxQRrnJGP` |
| Classe | **NO RELEASE** |
| STABLE | NOT AVAILABLE |
| Cutover | **NON APPLIQUÉ** |
| G-RECETTE | **NON CONSOMMÉ** |
| G-WEB-MIXED | **FERMÉ** |
| WEB LIVE défaut | **OFF** |
| Politique cognitive DEV | v0.2 provisoire (Terra Medium ; Luna L/M expérimental ; Sol historique ; rollback `legacy_sol`) |
| Extension v0.2 → RECETTE | **Décision Morris distincte — non activée** |

## Capacités qualifiées

| Capacité | État | Preuve |
|---|---|---|
| Build production Next | DETERMINISTIC PROVEN | `NODE_ENV=production` · BUILD_ID `emfz_yP5MBF9GxQRrnJGP` |
| Frontière HTTP + ALS + campagne process | DETERMINISTIC + LIVE | `createFrontierAwareFetch` · latch · `attachConfiguredLiveCampaignFromEnv` · A-03/A-04 SDK |
| Enveloppes opposables | DETERMINISTIC + LIVE | per-request ceilings · injection `max_output_tokens` · pas de faux 50k/4k |
| Restitution C2 | DETERMINISTIC | `ml5-c2-c4-restitution-conductor` · soft-stop sans acquis ≠ restitution |
| FinOps HTTP↔attempt | DETERMINISTIC + LIVE | `recordNoraProviderUsageWithHttpCorrelation` · 25 obs LIVE · markers HTTP_ATTEMPT |
| Autorité WEB D6 | DETERMINISTIC | deny missing project/pilot/policy · turnPublicTopics catalog |
| PDF viewer auth | DETERMINISTIC | `workProjectId` obligatoire si scope projet · footprint session |
| G-LIVE-API LIVE-01..04 | LIVE PROVEN | ledger `/tmp/sfia-ml5-g-live-api-20261126/` |
| G-WEB-PUBLIC | **BLOCKED** | `HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1` |
| PDF Git REAL textuel | **BLOCKED CORPUS MISSING** | fixtures ≠ corpus Git projet |
| F2 visuelle | C | décision Morris |

## Configuration proposée RECETTE (décision Morris distincte)

- Politique cognitive : **ne pas** activer automatiquement v0.2 expérimentale (Luna)
- `SFIA_WEB_SEARCH_LIVE=0` / `SFIA_WEB_SEARCH_ENABLED=0` par défaut
- Isolation fournisseur fingerprints lane
- Rollback : tip `4bfc1c1e` précédent `b69451e3` ; WEB OFF ; `legacy_sol` si requis

## Réserves classées A/B/C/D

| Id | Classe | Justification |
|---|---|---|
| R-GIT-PDF-TEXT | B | Corpus Git PDF text manquant |
| R-G-WEB-PUBLIC-HOSTED | B | Borne hosted ASSUMED_1 — gate avant G-WEB-PUBLIC |
| R-MODEL-APPLIED-UNVERIFIED | C | FinOps PARTIAL / modelAppliedUnverified — estimation ≠ facture |
| R-WEB05 | C | Confrontation sources — recette |
| R-F2 | C | Recette visuelle Morris |
| R-EFFICIENCE-RB | C | Dette efficience RoomBooking |

**Aucune réserve A de socle bloquante ouverte sur le candidat final.**

## Smoke tests cutover (non exécutés en RECETTE)

1. Isolation ports 3100/3200/5433
2. Session Pilote + FinOps `/settings/consumption` (200 observé DEV)
3. Tour Nora simple Terra medium (WEB OFF) — LIVE-01 OK DEV
4. Viewer PDF harness `/dev/pdf-viewer-harness` (200 DEV)
5. Flags WEB = 0 sur processus actif

## Rollback

Revert tip conformité ; WEB OFF ; politique `legacy_sol` si besoin ; aucune migration à annuler.

## Verdict manifeste

**CANDIDATE PREPARED FOR MORRIS REVIEW — CUTOVER NOT APPLIED — G-RECETTE NOT CONSUMED — FOUNDATION + G-LIVE-API QUALIFIED WITH EXPLICIT CAPABILITY RESERVES (WEB PUBLIC / GIT PDF).**
