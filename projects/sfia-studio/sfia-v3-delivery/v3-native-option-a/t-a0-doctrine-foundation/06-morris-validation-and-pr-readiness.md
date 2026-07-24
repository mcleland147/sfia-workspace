# 06 — Morris validation and PR readiness

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 (Europe/Paris) |
| **Gate consommé** | `GO PR READINESS DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0` |
| **Branche** | `delivery/sfia-studio-v3-native-option-a-t-a0-doctrine-foundation` |
| **HEAD (pre-docs)** | `02839b8a942b02f376f28dfff7f1a424e9e8b55a` |
| **origin/main** | `939c33a61f2fe8889b4fa31063cdcd05bddbf0d5` |
| **Statut slice** | **VALIDATED** (Morris) — with reserves |
| **PR readiness** | Pack local prêt — push/PR autorisés ; **merge interdit** dans ce cycle |

## Verdict

**T-A0 Doctrine Foundation VALIDATED** — décisions **T-A0-D01…D08** acceptées with reserves ; réserve AJV **fermée** ; symlink registry **corrigé** ; ouverture PR autorisée sous revue Morris. **Pas** MERGED · **Pas** T-A1 AUTHORIZED · **Pas** DOCTRINE RUNTIME GLOBALLY ADOPTED.

## Décisions T-A0-D01…D08

| ID | Décision | Statut Morris |
|----|----------|---------------|
| **T-A0-D01** | Structure `app/lib/oa/doctrine/{domain,application,ports,infrastructure}` | **VALIDATED** |
| **T-A0-D02** | Registry `registry.json` + `packages/<dir>/manifest.json` ; path ≠ id | **VALIDATED** |
| **T-A0-D03** | Digest SHA-256 JSON canonique hors champ `digest` | **VALIDATED** |
| **T-A0-D04** | AJV Draft-07 sur schemas modeled `0.1.0-oa` (consommation bornée) | **VALIDATED** — AJV **direct** `ajv@^6.15.0` (`6.15.0` lock) |
| **T-A0-D05** | Validation sémantique id/version/digest/sources/status/freshness/provenance/anti-v2.6 | **VALIDATED** |
| **T-A0-D06** | Detail codes → ErrorRecord `DOCTRINE_UNRESOLVED` / `CONTEXT_STALE` | **VALIDATED** with reserve (enum modeled extension = dette) |
| **T-A0-D07** | Absence de cache en T-A0 | **VALIDATED** |
| **T-A0-D08** | Readiness = fondation + tests ; pas d’adoption globale runtime | **VALIDATED** |

## Corrections PR-readiness (ce cycle)

| Item | Commit | Preuve |
|------|--------|--------|
| AJV runtime direct | `7782918` `fix(sfia-studio): declare AJV runtime dependency for T-A0` | `npm ci` + `npm ci --omit=dev` → `ajv@6.15.0` présent ; eslint absent sous omit=dev ; adapter validate PASS |
| Symlink registry | `02839b8` `fix(sfia-studio): secure T-A0 doctrine registry paths` | `realpath` containment ; internal symlink OK ; escape / method / dir-symlink → `path_forbidden` |

## Validations rejouées (post AJV + symlink)

| Commande | Exit | Durée | Résultat |
|----------|------|-------|----------|
| `npx vitest run __tests__/oa/doctrine` | 0 | 0.63s | **28/28** PASS |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | 0 | 0.63s | **10/10** PASS |
| `npx tsc --noEmit` | 0 | 0.95s | PASS |
| `npx next lint --dir lib/oa --dir __tests__/oa` | 0 | 1.68s | PASS |
| `npx next build` | 0 | 6.91s | PASS |
| `git diff --check origin/main...HEAD` | 0 | 0.04s | PASS |
| Grep secrets `lib/oa` | 1 (none) | — | PASS |
| Grep SQL (hors faux positifs `.execute`) | — | — | PASS (pas de SQL) |
| Grep `method/` imports runtime | 1 (none) | — | PASS |
| Anti-legacy imports | 1 (none) | — | PASS |

## Réserves maintenues

1. Detail codes T-A0 non encore dans enum ErrorRecord modeled
2. Provenance requise runtime T-A0 vs optionnelle schema modeled
3. Example modeled digest placeholder
4. Pas de métriques runtime / pas de DI container
5. Module non branché sessions Studio (activation future = T-A1+)
6. DB / IAM / Evidence retention / RGPD ouverts (hors T-A0)

## Anti-claims

- Pas T-A0 **MERGED**
- Pas T-A1 **AUTHORIZED** / started
- Pas READY FOR DELIVERY GLOBAL
- Pas DOCTRINE RUNTIME GLOBALLY ADOPTED
- Pas V2.6 REMOVED / MethodMode REMOVED / OPS1 RETIRED
- Pas OPTION A IMPLEMENTED (slice foundation only)
- Pas cutover

## Gate suivant

Revue PR Morris → merge **uniquement** après décision explicite Morris. Ensuite seulement : `GO DELIVERY … T-A1` (non autorisé ici).
