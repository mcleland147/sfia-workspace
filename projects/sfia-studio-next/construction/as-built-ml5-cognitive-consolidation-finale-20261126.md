# As-built — ML5 consolidation cognitive transverse finale (2026-11-26)

Classe : **NO RELEASE** · Lane : **DEV** · Cutover RECETTE : **NON APPLIQUÉ**

## Architecture consolidée (KEEP)

| Frontière | Responsabilité | Source de vérité |
|---|---|---|
| D3 conducteur | Stratégie cognitive, continuité, budgets métier | `cognitive-conductor` / `cognitive_works` |
| Adaptateur fournisseur | Émission technique + observation | `nora-adapter` + `provider-emission-frontier` |
| FinOps | Observations et projections | `provider_usage_observations` |
| D6 | Autorité humaine exceptionnelle WEB | `human_decisions` (RECORD_DECISION) |
| B1 | Admission / egress WEB query-only | `public-web-search-frontier` / `web-egress-guard` |
| Visionneuse | Consultation octets autorisés | `pdf-viewer` + sessions B1 |

## S1 — Frontière fournisseur commune

- Module `provider-emission-frontier.ts` : réserve / commit / release + enveloppe de campagne ALS.
- Branché avant `run()` Nora LIVE et worker WEB isolé.
- Oracle déterministe : émissions observées à la frontière ≠ maxTurns SDK.
- Lane guard + admission modèle/effort avant contact.

## S2 — Allocation

- Proposition refusée sans hold → `RESOURCE_CONTINUITY_SUSPEND_NO_SILENT_SUBSTITUTION`.
- `runSegment` n'émet pas ; conducteur marque `SUSPENDED`.
- Pas de substitution silencieuse Terra/Sol pour un besoin non satisfait.

## S3 — FinOps

- `computeMeasureCoveragePercent` = couverture d'observation (KNOWN+PARTIAL).
- `computeEstimationCompletenessPercent` = complétude financière (KNOWN seul).
- KPI UI : sous-libellé estimation connue distinct.

## S4 — Autorité WEB

- Parse `AUTHORIZE_PUBLIC_QUERY` = extracteur technique uniquement.
- Promotion exactQueries uniquement via `d6BoundExactQueries` / HumanDecision RECORD_DECISION.
- Module `web-public-query-authority.ts` (pas de registre parallèle ; pas d'extension DECISION_KINDS sans GO Morris).

## S5 — PDF / sessions

- Rotation `viewerToken` si fingerprint change ; ancien jeton révoqué.
- Endpoint viewer : owner + lane + project obligatoires (token seul insuffisant).
- Couverture : jamais COMPLETE si corps tronqué / pages partielles.

## Réserves connues

| Id | Classe | Libellé |
|---|---|---|
| R-GIT-PDF-TEXT | B | Corpus PDF textuel Git REAL manquant (scanné SCANNED_NO_TEXT) |
| R-WEB05 | C | Confrontation WEB-05 PARTIAL — retest LIVE conditionnel |
| R-D6-KIND | D | Kind dédié WEB éventuel — décision Morris (RECORD_DECISION suffisant pour lier) |
| R-F2 | C | Recette visuelle F2 Morris |
| R-LIVE-REENVELOPPE | B | Retests LIVE 12.1/12.2 uniquement si comportement réellement modifié |

## WEB LIVE

Rétabli **OFF** (`SFIA_WEB_SEARCH_LIVE=0`, `SFIA_WEB_SEARCH_ENABLED=0`) en fin de consolidation.
G-WEB-MIXED fermé.
