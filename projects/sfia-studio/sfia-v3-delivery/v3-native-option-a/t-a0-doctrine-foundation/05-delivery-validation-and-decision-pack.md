# 05 — Delivery validation and decision pack

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 (Europe/Paris) |
| **Gate** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0` |
| **Verdict candidat** | `SFIA STUDIO V3-NATIVE OPTION A T-A0 DOCTRINE FOUNDATION IMPLEMENTED — MORRIS VALIDATION REQUIRED` |

## Validations exécutées

| Commande | Résultat |
|----------|----------|
| `npx tsc --noEmit` | PASS |
| `npx vitest run __tests__/oa/doctrine` | PASS 24/24 |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | PASS 10/10 |
| `next lint` (fichiers OA ciblés) | PASS |
| `npx next build` | PASS |
| `git diff --check` | PASS |
| Grep SQL/migration dans `lib/oa` | aucun |
| Grep secrets | aucun |
| Anti-legacy imports | PASS |

## Décisions candidates (non validées sans Morris)

| ID | Décision | Proposition |
|----|----------|-------------|
| **T-A0-D01** | Structure module | `app/lib/oa/doctrine/{domain,application,ports,infrastructure}` |
| **T-A0-D02** | Format registry | `registry.json` + `packages/<dir>/manifest.json` ; path ≠ id |
| **T-A0-D03** | Digest | SHA-256 du JSON canonique du manifest hors champ `digest` |
| **T-A0-D04** | Validation schema | AJV Draft-07 sur schemas modeled `0.1.0-oa` (consommation bornée) |
| **T-A0-D05** | Validation sémantique | id/version/digest, sources, status, freshness, provenance, anti-v2.6 |
| **T-A0-D06** | Erreurs | Detail codes T-A0 → ErrorRecord `DOCTRINE_UNRESOLVED` / `CONTEXT_STALE` |
| **T-A0-D07** | Cache | **Absence de cache** en T-A0 |
| **T-A0-D08** | Readiness T-A0 | Fondation implémentée + tests ; pas d’adoption globale runtime |

## Hypothèses

- `ajv@6` transitive suffit pour T-A0 sans nouvelle dépendance déclarée
- Provenance obligatoire côté runtime T-A0 même si schema modeled la laisse optionnelle
- Registry locale filesystem est l’unique adaptateur P0

## Inconnues / hors T-A0

DB · IAM · Evidence retention · activation session · T-A1 LPS pin

## Anti-claims

Pas T-A0 VALIDATED · Pas MERGED · Pas T-A1 AUTHORIZED · Pas DOCTRINE GLOBALLY ADOPTED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED

## Gate suivant candidat

`GO VALIDATION DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0`
(puis seulement après validation + PR/merge : `GO DELIVERY … T-A1`)
