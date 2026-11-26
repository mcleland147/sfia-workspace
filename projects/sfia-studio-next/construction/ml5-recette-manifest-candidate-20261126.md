# ML5 — Manifeste candidat RECETTE (régularisation native 2026-11-26)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD code | *(figé au commit de régularisation — voir delivery-history)* |
| BUILD_ID | *(figé au build production post-commit)* |
| Lock | `@openai/agents@0.21.0` · `openai@7.50.0` · `pdfjs-dist@4.10.38` |
| Schéma | `022_provider_usage_observations` — **aucune migration** |
| Classe | **NO RELEASE** |
| Cutover | **NON APPLIQUÉ** |
| G-RECETTE | **NON CONSOMMÉ** |
| WEB LIVE | **OFF** |
| G-WEB-MIXED | **FERMÉ** |
| Politique DEV | v0.2 provisoire (Terra Medium défaut) |
| Extension v0.2 → RECETTE | **Proposition bornée — non activée** (décision Morris) |

## Capacités

| Capacité | État |
|---|---|
| Comptage natif `POST /v1/responses/input_tokens` | **LIVE PASS** — count ≡ usage (28=28) |
| Frontière : native bound obligatoire si enveloppe stricte | DETERMINISTIC + LIVE |
| Injection `max_output_tokens` | DETERMINISTIC PROVEN |
| Injection `max_tool_calls` (hosted) | DETERMINISTIC PROVEN — **≠** unité facturée hosted |
| Agents SDK tool-loop multi-Responses + count | DETERMINISTIC PROVEN |
| Investigation LIVE Chantiers360 | LIVE PASS capitalisé (non rejoué) |
| FinOps PG ↔ API ↔ UI même work scope | **PASS** (`cgw_b20fcbe3…` : 8 req / 123377 tok) |
| PDF viewer auth PG endpoint | DETERMINISTIC PG PASS (8 scénarios) |
| D6 WEB authority residual (purpose/destination/policy/revocation/expiry) | DETERMINISTIC extended |
| G-WEB-PUBLIC | **BLOCKED** — borne hosted facturable non établie |
| Git PDF text LIVE | **BLOCKED CORPUS MISSING** |
| F2 visuelle | réservée Morris |

## Politique RECETTE proposée (non activée)

- Terra Medium défaut ; Sol L/M/H admis ; Luna L/M expérimentaux **hors** RECETTE sauf GO Morris
- Terra High candidat sans promotion implicite ; rollback `legacy_sol`
- WEB OFF par défaut ; WEB public soumis au gate ; G-WEB-MIXED fermé
- FinOps + OBS ; PDF sur chemins qualifiés
- Isolation fingerprints lane ; dataset DEV isolé

## Réserves A/B/C/D

| Id | Classe | Isolation / exit |
|---|---|---|
| R-G-WEB-PUBLIC-HOSTED | B | WEB OFF ; arbitrage `max_tool_calls` actualisé — GO Morris alternatif 1–3 |
| R-GIT-PDF-TEXT | B | capacité isolée — corpus textuel autorisé manquant |
| R-F2 | C | Morris |
| R-WEB05 | C | si gate WEB ouvert plus tard |
| R-MODEL-APPLIED | D↓C | LIVE count a observé `model=gpt-6.1-terra` ; conserver UNVERIFIED si non observable |

**Aucune réserve A ouverte.**

## Smoke (DEV artefact)

- `/login` 200 · `/settings/consumption` 200 (DOM KPIs) · work detail 8 req / 123 377 tok
- RECETTE :3200 non mutée · gel `a150926c` inchangé

## Rollback RECETTE (procédure — non exécutée)

1. Ne pas cutover tant que GO Morris absent.
2. Si cutover futur : restaurer gel RECETTE `a150926c` (artefact + schéma + flags WEB OFF) — un revert DEV seul ≠ rollback RECETTE.
3. Vérifier ports 3200/5434, fingerprints, smoke post-restauration.

## Verdict manifeste

**CANDIDATE PREPARED — NATIVE PROVIDER BOUNDS QUALIFIED — CUTOVER NOT APPLIED — CAPABILITY RESERVES (WEB PUBLIC / GIT PDF) EXPLICIT.**
