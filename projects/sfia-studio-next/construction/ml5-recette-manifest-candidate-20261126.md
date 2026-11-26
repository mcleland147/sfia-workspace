# ML5 — Manifeste candidat RECETTE (préparation, sans cutover)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 |
| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD | `c46a8a9ab8b7ea90e423a2e8f237d580ce82908f` |
| Classe | **NO RELEASE** |
| STABLE | NOT AVAILABLE |
| Cutover | **NON APPLIQUÉ** |
| G-RECETTE | **NON CONSOMMÉ** |
| G-WEB-MIXED | **FERMÉ** |
| WEB LIVE défaut | **OFF** |

## Capacités qualifiées

| Capacité | État | Preuve |
|---|---|---|
| Frontière fournisseur commune + enveloppe campagne | DETERMINISTIC PROVEN | `ml5-provider-emission-frontier` · wired Nora + WEB worker |
| Allocation sans substitution silencieuse | DETERMINISTIC PROVEN | `RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION` |
| FinOps observation vs estimation | DETERMINISTIC PROVEN | `computeMeasureCoveragePercent` + `computeEstimationCompletenessPercent` |
| Autorité WEB D6 (parse ≠ authority) | DETERMINISTIC PROVEN | `web-public-query-authority` · registry no auto-promote |
| PDF viewerToken rotation + auth owner/lane/project | DETERMINISTIC PROVEN | session + route tests |
| Politique cognitive v0.2 DEV | PRÉSERVÉE | Terra Medium ; Luna L/M expérimental ; rollback `legacy_sol` |
| StockTrack IT-06 V2 conserve | REUSED (prior LIVE) | tip antérieur `8c82b6c1` — retest déterministe préféré |
| RoomBooking investigation longue | REUSED | pas de replay 71 req ; corrections via unit/intégration |
| PDF Git REAL textuel | **BLOCKED CORPUS MISSING** | BPMN scanné SCANNED_NO_TEXT |
| WEB LIVE public | PRIOR LIVE OBSERVED puis **OFF** | retest autorité D6 LIVE conditionnel §12.2 |
| WEB-05 confrontation | PARTIAL | classe C — vérifiable en recette / retest ciblé |

## Configuration proposée RECETTE (décision Morris distincte)

- Politique cognitive : **ne pas** activer automatiquement v0.2 expérimentale (Luna) ; soumettre couples admissibles à Morris
- Ressource initiale suggérée si GO : Terra Medium (ou Sol historique si rollback `legacy_sol`)
- `SFIA_WEB_SEARCH_LIVE=0` / `SFIA_WEB_SEARCH_ENABLED=0` par défaut
- Qualification WEB utilisateur : projet public dédié + HumanDecision RECORD_DECISION + enveloppe §12.2
- Isolation fournisseur : fingerprints lane déjà séparés — préserver
- Capacités accessibles : cognition D3, FinOps page 13, PDF viewer, Git RO, WEB OFF
- Rollback : tip précédent + flags WEB 0 + politique `legacy_sol` si requis

## Réserves classées A/B/C/D

| Id | Classe | Justification |
|---|---|---|
| R-BUILD-404 | A | `next build` échoue prerender /404 Html (Next 15.5.29) — artefact RECETTE non reproductible |
| R-GIT-PDF-TEXT | B | Capacité Git PDF text isolable ; scanné déjà prouvé comme limite |
| R-WEB05 | C | Confrontation sources — socle sûr ; qualité intellectuelle en recette |
| R-D6-WEB-KIND | D | Kind dédié optionnel ; RECORD_DECISION lie déjà le payload |
| R-F2 | C | Recette visuelle Morris |
| R-EFFICIENCE-RB | C | Dette efficience RoomBooking — non critique sécurité |
| R-LIVE-REENVELOPPE | B | Tout retest LIVE doit réutiliser frontière S1 |

**Réserve A** : build production Next `/404` — bloque cutover jusqu'à correction. Socle S1–S5 déterministe OK. Revue ChatGPT + GO Morris cutover requis.

## Smoke tests cutover (non exécutés)

1. Health DEV/RECETTE isolation ports 3100/3200/5433
2. Session Pilote + FinOps summary KPI
3. Tour Nora simple Terra medium (WEB OFF)
4. Viewer PDF fixture owner match / cross-owner 403
5. Flags WEB = 0 sur processus actif

## Rollback

Revert tip consolidation ; WEB OFF ; politique `legacy_sol` si besoin ; aucune migration à annuler.

## Verdict manifeste

**CANDIDATE INSTRUCTED FOR G-RECETTE — CUTOVER NOT APPLIED — MORRIS GO REQUIRED.**
