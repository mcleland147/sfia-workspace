# 05 — Delivery validation and decision pack

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 (Europe/Paris) |
| **Gate** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A0` (impl) puis validation / PR readiness |
| **Statut** | Décisions **T-A0-D01…D08 VALIDATED** (Morris) with reserves — voir [06](./06-morris-validation-and-pr-readiness.md) |
| **Verdict** | Fondation T-A0 **VALIDATED** ; PR readiness pack ; **merge interdit** sans décision Morris explicite |

## Validations exécutées (rejouées PR readiness)

| Commande | Résultat |
|----------|----------|
| `npx tsc --noEmit` | PASS (0.95s) |
| `npx vitest run __tests__/oa/doctrine` | PASS **28/28** (0.63s) |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | PASS **10/10** (0.63s) |
| `next lint` (dirs `lib/oa`, `__tests__/oa`) | PASS (1.68s) |
| `npx next build` | PASS (6.91s) |
| `git diff --check` | PASS |
| `npm ci` / `npm ci --omit=dev` | PASS ; `ajv@6.15.0` présent sous omit=dev |
| Symlink escape / method / dir | PASS (refus `path_forbidden`) ; internal symlink OK |
| Grep secrets / SQL / legacy / `method/` runtime | PASS (pas de secrets ; pas de SQL ; pas d’imports legacy) |

## Décisions T-A0-D01…D08

| ID | Décision | Statut |
|----|----------|--------|
| **T-A0-D01** | Structure module | **VALIDATED** |
| **T-A0-D02** | Format registry | **VALIDATED** |
| **T-A0-D03** | Digest | **VALIDATED** |
| **T-A0-D04** | Validation schema AJV Draft-07 | **VALIDATED** (AJV direct) |
| **T-A0-D05** | Validation sémantique | **VALIDATED** |
| **T-A0-D06** | Erreurs | **VALIDATED** with reserve (enum modeled) |
| **T-A0-D07** | Cache absent | **VALIDATED** |
| **T-A0-D08** | Readiness fondation only | **VALIDATED** |

## Réserve AJV

**Fermée** — `ajv@^6.15.0` déclaré dans `projects/sfia-studio/app/package.json` (lock `6.15.0`).

## Hypothèses restantes

- Provenance obligatoire côté runtime T-A0 même si schema modeled la laisse optionnelle
- Registry locale filesystem est l’unique adaptateur P0

## Inconnues / hors T-A0

DB · IAM · Evidence retention · activation session · T-A1 LPS pin

## Anti-claims

Pas MERGED · Pas T-A1 AUTHORIZED · Pas DOCTRINE GLOBALLY ADOPTED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas cutover

## Gate suivant

Revue PR Morris — merge seulement après GO explicite. Puis `GO DELIVERY … T-A1` (non autorisé ici).
