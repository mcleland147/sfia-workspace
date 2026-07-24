# 03 — Risques, réserves, guide de revue

## Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Confusion VALIDATED ≠ MERGED | Fausse readiness globale | Anti-claims explicites ; merge interdit |
| T-A2 lu comme autorisé | Delivery prématuré | Gate T-A2 non ouvert |
| Concurrent double-append fork | Histoire LPS bifurquée | **Fermé** — mutex + re-check (`861ca76`) |
| Pin append sans re-verify digest | Doctrine drift non détecté à l’append | Option A pin-compare documentée (réserve) |
| Mémoire seule | Perte au restart | Ports prêts ; DATABASE SELECTED ouvert |
| Error mapping approx | Clients mal classent NOT_FOUND | `detailCode` + réserve D08 |

## Réserves maintenues

Mémoire only · detail codes hors enum modeled · NOT_FOUND/INVALID → STATE_CONFLICT · pas metrics · non branché UI · Option A pin-compare only · historique non borné · dette enum D08

## Focus revue (prioritaire)

1. **Mutex** `MemoryProjectStore.runInTransaction` — sérialisation ; nested rollback non re-entrant
2. **Double-append** concurrent même `expectedVersion` — un seul winner ; l’autre `LPS_VERSION_CONFLICT`
3. **Rollback** atomique create/append (fail hooks) — aucun orphelin
4. **structuredClone** write/read/return — pas d’aliasing mutable
5. **Doctrine pin** — resolve on create ; Option A pin-compare on append
6. **UTF-8 limit** `MAX_LPS_SNAPSHOT_BYTES=256_000` (limit-1 / limit / limit+1 + Unicode)
7. **Error mapping** — `STATE_CONFLICT` / `DOCTRINE_UNRESOLVED` + detail codes
8. **Legacy isolation** — pas d’imports ops1 / sfia-context / method / filesystem doctrine dans domain
