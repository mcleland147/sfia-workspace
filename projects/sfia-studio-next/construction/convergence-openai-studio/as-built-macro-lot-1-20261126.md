# Convergence OpenAI–Studio — As-built Macro-lot 1 (Integrated foundation completion)

| Champ | Valeur |
|---|---|
| Date | 2026-11-27 (Intervention 1 — integrated completion) |
| Statut | **IMPLEMENTED / COVERAGE VERIFIED (DEV substituted)** — **NOT ADOPTED** · **NO RELEASE** |
| HEAD entrée cycle | `348cf6bd1f55c2f84ebcc079b7e8c10acb276d47` |
| Migrations DEV | `023` + `024` (corrigée) + `025` security+canon · PG 16.16 |
| Hors GO | Admin LIVE · création clé · WEB LIVE · tracing ON ops · continuité ON ops · Figma apply · push projet · RECETTE |

## Corrections Intervention 1

| Chantier | Résultat | Niveau |
|---|---|---|
| A Sécurité PG | LOGIN roles NOLOGIN ; auth refuse ; secrets retirés des sources courantes ; SET ROLE proofs | BEHAVIOR PROVEN |
| A Provenance | `collection_provenance` dans index unique NULLS NOT DISTINCT ; upsert conflict cols | BEHAVIOR PROVEN |
| A Transport | TEST/LIVE WeakSet ; envelope ; parsing ; READY ≠ HTTP 200 seul | COVERAGE VERIFIED |
| B FinOps | `evaluateFinOpsReconciliation` sur chemin service ; COMPARABLE + refus droits | BEHAVIOR PROVEN |
| B UX | Figma page 13 inspectée RO ; proposition visuelle candidate | DOCUMENTED (NOT APPLIED) |
| C Tracing | Real `@openai/agents` + tool loop + spans + oracle export=[] | BEHAVIOR PROVEN |
| D Frontier/WEB | UNKNOWN→MEASURED=PARTIAL ; A3 Option 1/2 | BEHAVIOR PROVEN / DOCUMENTED |
| E Continuité D3 | `buildStudioContinuityFromWork` données réelles ; chain null ; OFF | BEHAVIOR PROVEN |
| F Campagne | Collecte→PG→FinOps→D3→tracing→frontier substituée | BEHAVIOR PROVEN |

## Flux as-built

```
Collecteur isolé (TEST|LIVE)
  → envelope bornée (émission)
  → PG snapshots (provenance in canon)
  → repository lecture LIVE only (produit)
  → FinOps evaluateFinOpsReconciliation (service path)
  → UI existante (non-régression ; delta UX candidat)

Conducteur D3
  → buildStudioContinuityFromWork(work)
  → continuityChain null (OFF)
  → frontier emission (WEB OFF)

Agents SDK
  → processors locaux + ALS correlation
  → oracle réseau (export distant = 0)
  → opérationnel OFF jusqu’à G-TRACING-LOCAL
```

## Fake/Real

| Surface | Niveau |
|---|---|
| PostgreSQL DEV | REAL |
| Process / API Studio | REAL (après build final) |
| SDK Agents | REAL installé + transport substitué |
| Admin OpenAI | SUBSTITUTED |
| Responses / WEB / continuité native | SUBSTITUTED / OFF |
| Figma | REAL RO screenshot+metadata |

## Gates

Voir `dossier-gates-morris-consolide-ml1-20261127.md`.

**Levé DEV :** G-PROVIDER-SNAPSHOT-MIGRATION  
**Proposables :** G-ADMIN-SECRET · G-FINOPS-UX · G-TRACING-LOCAL · G-NATIVE-CONTINUITY  
**Fermés / NOT RUN :** G-ADMIN-LIVE · G-WEB-PUBLIC/A3 · G-PROVIDER-LIVE-QUALIFICATION · RECETTE

## Lignes 023 préexistantes

Provenance défaut `UNKNOWN` — exclues des projections LIVE (pas de DELETE métier).

## Version produit

NO RELEASE · STABLE NOT AVAILABLE · NOT ADOPTED
