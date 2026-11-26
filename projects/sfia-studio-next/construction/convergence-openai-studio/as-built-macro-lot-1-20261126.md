# Convergence OpenAI–Studio — As-built Macro-lot 1 (Admin & FinOps qualification)

| Champ | Valeur |
|---|---|
| Date | 2026-11-26 (Admin & FinOps qualification) |
| Statut | Qualification Admin/FinOps DEV — **NOT ADOPTED** · **NO RELEASE** |
| HEAD entrée cycle | `106c6392` |
| Migrations DEV | `023` + `024` (provenance) · PG 16.16 |
| Hors GO | Admin LIVE · création clé · WEB · tracing ON · continuité ON · Figma apply · push projet |

## Corrections de ce cycle

| Sujet | Correction |
|---|---|
| Intégrité upsert | Partial ne met plus à jour les métriques d’une ligne complete ; `WHERE` SQL + mémoire |
| Provenance | `collection_provenance` TEST_SUBSTITUTED \| LIVE \| UNKNOWN ; TEST exclu des projections |
| Fallback mémoire | Produit → UNAVAILABLE si PG down ; mémoire seulement `VITEST` + flag explicite |
| Transport | Registry WeakSet ; re-check GO avant retry ; body borné pendant lecture |
| Enveloppe | start_time requis ; LIVE exige end_time + project_ids ; maxPages ≤ 20 |
| FinOps | `assessPeriodEquality` ; COMPARABLE positif possible ; fraîcheur périmètre |
| Rôles PG | LOGIN exercés ; refus INSERT reader / SELECT pilots collector prouvés |
| Restore | `pg_restore` réel vers `sfia_next_dev_restore_probe` puis DROP (44 tables) |

## Flux

```
Collecteur isolé (TEST|LIVE)
  → envelope bornée
  → PG snapshots (provenance)
  → repository lecture LIVE only
  → FinOps reconciliation (periodEqual démontrable)
  → UI existante (non-régression)
```

## Gates

**Levé DEV :** G-PROVIDER-SNAPSHOT-MIGRATION  
**Proposables si readiness OK :** G-ADMIN-SECRET (après revue Morris)  
**Fermés :** G-ADMIN-LIVE · G-FINOPS-UX · G-WEB-PUBLIC/A3 · G-TRACING-LOCAL · G-NATIVE-CONTINUITY · G-PROVIDER-LIVE-QUALIFICATION · RECETTE

## Lignes 023 préexistantes

Provenance défaut `UNKNOWN` — exclues des projections LIVE (pas de DELETE).
