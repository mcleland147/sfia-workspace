# SFIA v3.0 — D1 Project Framing — Implementation Design

| Champ | Valeur |
|-------|--------|
| **Statut** | **D1 IMPLEMENTATION DESIGN CANDIDATE** |
| **BCDI** | `BCDI-D1-PROJECT-FRAMING-DESIGN` |
| **Gate consommé** | `GO VALIDATION V3-MODELED — FOUNDATION AND SLICE D1` |
| **Gate suivant** | `GO VALIDATION CONCEPTION D1 — IMPLEMENTATION READINESS` |
| **Baseline** | SFIA v2.6 |
| **Statut v3** | V3-MODELED CANDIDATE (inchangé) |
| **Code / migrations** | Interdits dans ce cycle |

## Objectif

Transformer `sfia-v3-modeled` (slice D1) en dossier de conception implémentable : composants, services, API/commandes, persistance, GPT borné, policies/gates, UX, ReviewBundle, sécurité, RUN, tests, backlog.

## Contenu

| # | Fichier |
|---|---------|
| 01 | Scope & décisions de conception |
| 02 | Architecture de composants cible |
| 03 | Services applicatifs & responsabilités |
| 04 | Contrats API / commandes |
| 05 | Persistance & transactions |
| 06 | Conception GuidedSession GPT |
| 07 | Policy & orchestration des gates |
| 08 | Parcours UX & contrats d’écran |
| 09 | ReviewBundle & audit |
| 10 | Sécurité, RGPD, permissions |
| 11 | Observabilité, RUN, résilience |
| 12 | Stratégie de tests & acceptation |
| 13 | Découpage delivery & backlog |
| 14 | ADR technologiques candidats |
| 15 | Decision pack — implementation readiness |
| diagrams/ | Mermaid (conteneurs, composants, séquences, data lifecycle) |

## Sources d’entrée

- `projects/sfia-studio/sfia-v3-modeled/**` (validé gate)
- `projects/sfia-studio/sfia-v3-framing/01–29`
- Acquis Control Tower / OPS1 (`node:sqlite`, Next.js server actions, conversation GPT, Git read, policy/gate patterns) — **réutilisation logique**, pas modification ici

## Anti-claims

Pas V3-IMPLEMENTED · pas adoption v3 · pas code · pas migrations · pas D2/D3 complets · canoniques v2.6 intactes.
