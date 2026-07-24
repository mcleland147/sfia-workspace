# 05 — Delivery validation and decision pack

| Champ | Valeur |
|-------|--------|
| **Date** | 2026-07-24 (Europe/Paris) |
| **Gate** | `GO DELIVERY OPTION A — SFIA STUDIO V3-NATIVE — T-A1` |
| **Statut** | Décisions **T-A1-D01…D10 CANDIDATES** — Morris validation required |
| **Verdict** | Fondation T-A1 **IMPLEMENTED** ; **merge / push / PR interdits** sans décision Morris |

## Validations exécutées

| Commande | Résultat |
|----------|----------|
| `npx vitest run __tests__/oa/project` | PASS (voir run) |
| `npx vitest run __tests__/oa/doctrine` | PASS (régression T-A0, attendu 28) |
| `npx vitest run __tests__/platform __tests__/fixtures.test.ts` | PASS |
| `npx tsc --noEmit` | PASS |
| `next lint` (dirs `lib/oa`, `__tests__/oa`) | PASS |
| `npx next build` | PASS si exécuté |
| `git diff --check` | PASS |

## Décisions candidates T-A1-D01…D10

| ID | Décision | Observation | Option retenue | Alternative rejetée | Dette | Réversibilité | Recommandation | Morris |
|----|----------|-------------|----------------|---------------------|-------|---------------|----------------|--------|
| **T-A1-D01** | Boundaries Project/LPS | Modular monolith OA | Module `lib/oa/project` isolé | Fusion dans d1/OPS1 | — | Haute | Valider isolation | attendue |
| **T-A1-D02** | Identité + v1 | Prefix modeled | `prj:` / `lps:` / `prv:` ; LPS v1 | UUID nu | — | Haute | Valider | attendue |
| **T-A1-D03** | Snapshot versionné | ADR-OA-02 | Snapshot + audit minimal | Event sourcing complet | ES futur | Haute | Valider | attendue |
| **T-A1-D04** | Optimistic concurrency | Canonique T-A1 | `expectedVersion` | Pessimistic lock | — | Haute | Valider | attendue |
| **T-A1-D05** | Doctrine pin | T-A0 prêt | Resolve on create ; match on append | Re-resolve chaque append | Verify optionnel | Haute | Valider | attendue |
| **T-A1-D06** | Repos locaux | Pas DB selected | In-memory + ports | SQL migration maintenant | Adapter DB futur | **Haute** | Valider mémoire | attendue |
| **T-A1-D07** | Audit minimal | Events OA | Memory/Console journal | Broker | Métriques | Haute | Valider | attendue |
| **T-A1-D08** | Erreurs / provenance | Enum modeled borné | Detail codes + map STATE_CONFLICT / DOCTRINE_UNRESOLVED | Étendre schema modeled | Enum extension | Moyenne | Valider mapping | attendue |
| **T-A1-D09** | Limite taille | AT <256KB | `MAX_LPS_SNAPSHOT_BYTES=256_000` | Illimité | Tuning | Haute | Valider | attendue |
| **T-A1-D10** | Readiness foundation-only | Pas UI/T-A2 | Slice bornée | Wiring session | Activation future | Haute | Valider | attendue |

## Hypothèses

- Mémoire suffisante pour tests / fondation ; DB ultérieure via ports
- Provenance obligatoire runtime même si optionnelle schema LPS

## Anti-claims

Pas MERGED · Pas T-A2 AUTHORIZED · Pas DATABASE SELECTED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas cutover

## Gate suivant

Revue Morris — puis éventuellement PR readiness / merge GO. Puis `GO DELIVERY … T-A2` (non autorisé ici).
