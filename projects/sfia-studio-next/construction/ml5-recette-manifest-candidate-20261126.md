# ML5 — Manifeste candidat RECETTE (convergence 2026-11-26)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD code | `f77a42e434dd1af883b9b43ecc73e022f4757b94` |
| BUILD_ID | `XGqFqt2I6aCNTZLjirvtW` |
| Tree / web | post-commit tip |
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
| Frontière HTTP + estimate input + restart latch | DETERMINISTIC PROVEN |
| Agents SDK tool-loop multi-Responses | DETERMINISTIC PROVEN |
| Investigation LIVE Chantiers360 | LIVE PASS (critères individuels) |
| FinOps API `/api/finops/*` + UI | LIVE PASS |
| FinOps no double-count correlation rows | DETERMINISTIC + LIVE |
| G-WEB-PUBLIC | **BLOCKED** — borne hosted non démontrable |
| Git PDF text LIVE | **BLOCKED CORPUS MISSING** (fixtures ≠ corpus) |
| F2 visuelle | réservée Morris |

## Politique RECETTE proposée (non activée)

- Terra Medium défaut ; couples Luna L/M expérimentaux **hors** RECETTE sauf GO
- WEB OFF par défaut
- Isolation fingerprints lane
- Dataset DEV isolé ; pas de secrets dans preuves

## Réserves A/B/C/D

| Id | Classe | Isolation |
|---|---|---|
| R-G-WEB-PUBLIC-HOSTED | B | WEB OFF ; dossier arbitrage |
| R-GIT-PDF-TEXT | B | capacité isolée |
| R-MODEL-APPLIED-UNVERIFIED | C | FinOps PARTIAL honnête |
| R-F2 | C | Morris |
| R-WEB05 | C | si gate WEB ouvert plus tard |

**Aucune réserve A ouverte.**

## Smoke (DEV artefact)

- `/login` 200 · `/settings/consumption` 200 · `/dev/pdf-viewer-harness` 200 · projet Chantiers360 200
- RECETTE :3200 non mutée

## Rollback

Revert tip `f77a42e4` → `f27e0102` ; WEB OFF ; `legacy_sol` si besoin.

## Verdict manifeste

**CANDIDATE PREPARED — CUTOVER NOT APPLIED — CONVERGENCE QUALIFIED WITH EXPLICIT CAPABILITY RESERVES (WEB PUBLIC / GIT PDF).**
