# V3.1-D1 — Cycle Type Catalog Runtime Contract

## A. Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-30 20:48:00 CEST (+0200) |
| **Cycle** | 8 — Delivery / implémentation |
| **Profil** | **Critical** |
| **Typologie** | EVOL |
| **GO Morris consommé** | `GO DELIVERY SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — ADOPTED FIFTEEN IDS — RUNTIME CONTRACT ONLY — NO QUALIFYCYCLE BRIDGE — NO UI — NO CREATECYCLE` (2026-07-30 20:35 CEST) |
| **Branche** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
| **CKC Delivery** | fallback carte synthétique + méthode §4.8 · method-candidate · consommation obligatoire · `executionAuthority=false` |
| **Statut Delivery** | `V3.1-D1 CYCLE TYPE CATALOG RUNTIME CONTRACT IMPLEMENTED — MANDATORY CKC MAPPING IMPLEMENTED` |
| **Statut QA (historique)** | FAIL → correctif → revalidation — [`01`](./01-qa-validation-report.md) · [`02`](./02-corrective-delivery-report.md) · [`03`](./03-qa-revalidation-report.md) |
| **QA-G3 Morris** | **PASS** (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED |
| **Statut PR readiness** | `READY FOR PR` — [`04`](./04-pr-readiness-report.md) — commit/push/PR **requièrent GO Morris** |
| **Commit / push / PR projet** | **non** (pas encore autorisés) |

## B. Objectif

Produire le **contrat runtime pur** des quinze types de cycle adoptés et leur **mapping CKC obligatoire**, sans orchestration resolver, sans bridge QualifyCycle, sans UI, sans CreateCycle.

## C. Décisions Morris consommées

D-V3.1-CAT-01…08 adoptées — voir [`14`](../first-user-visible-vertical-slice-framing/14-v3-1-cycle-type-catalog-functional-architecture.md).

Quinze IDs CAT-I1 : `cyc:framing` … `cyc:capitalization` (inchangé).

## D. Implémentation

| Fichier | Rôle |
|---------|------|
| `app/lib/oa/cycle/domain/cycleTypeCatalog.ts` | Types + données immuables + opérations pures + validation |
| `app/lib/oa/cycle/index.ts` | Export public du contrat |
| `app/__tests__/oa/cycle/cycleTypeCatalog.test.ts` | Preuves positives / négatives |

**Version catalogue :** `0.1.0-v3.1-d1`

**Opérations publiques :** `listCycleTypes` · `getCycleTypeById` · `isKnownCycleTypeId` · `validateCycleTypeCatalog` · constantes/paths CKC · `CYCLE_TYPE_CATALOG` · `ADOPTED_CYCLE_TYPE_IDS`

**CycleTypeDefinition :** id · canonicalKey · label · shortDescription · displayOrder · lifecycleStatus · methodCycleNumber · methodReference · ckc · aliases

**CycleTypeCkcMapping :** mandatory · primaryLevel · primaryReference · fallbackPolicy · fallbackReference? · executionAuthority=false · doctrineStatus · unavailableBehavior

Aucun I/O · aucun fs runtime · aucun React · aucun singleton mutable.

## E. Mapping complet

| # | cycleTypeId | Label | CKC |
|---|-------------|-------|-----|
| 1 | `cyc:framing` | Cadrage | detailed → pilots/01 + synthetic fallback |
| 2 | `cyc:functional-design` | Conception fonctionnelle | detailed → pilots/02 + synthetic fallback |
| 3 | `cyc:functional-architecture` | Architecture fonctionnelle | synthetic map |
| 4 | `cyc:ux-ui` | UX/UI | synthetic map |
| 5 | `cyc:backlog` | Backlog / user stories | synthetic map |
| 6 | `cyc:technical-architecture` | Architecture technique | detailed → pilots/03 + synthetic fallback |
| 7 | `cyc:integration-devops` | Intégration / DevOps | synthetic map |
| 8 | `cyc:delivery` | Delivery / implémentation | synthetic map |
| 9 | `cyc:qa-validation` | QA / validation | detailed → pilots/04 + synthetic fallback |
| 10 | `cyc:security` | Sécurité / RSSI | synthetic map |
| 11 | `cyc:release` | Déploiement / release | synthetic map |
| 12 | `cyc:observability` | Observabilité / RUN readiness | synthetic map |
| 13 | `cyc:pr-readiness` | PR readiness | synthetic map |
| 14 | `cyc:post-merge` | Post-merge | synthetic map |
| 15 | `cyc:capitalization` | Capitalisation / REX | synthetic map |

Synthetic map path : `method/.../02-fifteen-cycles-synthetic-map.md`

## F. Invariants

Exactement 15 · IDs/keys/numbers/orders uniques · pattern OA `cyc:` · `cyc:capitalization` exact · labels/descriptions non vides · CKC mandatory · `executionAuthority=false` · 4 detailed + 11 synthetic · detailed ⇒ fallback synthétique · type ≠ profil · immuabilité · fail-closed metadata · pas de parsing Markdown runtime.

## G. Tests

```bash
cd projects/sfia-studio/app
npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts
npm test -- __tests__/oa/cycle/
npm run typecheck
npm run lint
npm run build
```

Résultats Delivery (2026-07-30) : catalog 24/24 PASS · suite oa/cycle 72/72 PASS · typecheck PASS · lint PASS · build PASS.

### QA Critical (cycle 9 — 2026-07-30)

- Tests renforcés ajoutés dans `cycleTypeCatalog.test.ts` (immutabilité, bornes, doctrine, alias, version).
- Après renforcement (avant correctif) : **34 PASS / 12 FAIL**.
- Rapport historique : [`01-qa-validation-report.md`](./01-qa-validation-report.md) (**inchangé**).

### Delivery correctif (cycle 8 — 2026-07-30)

- `validateCycleTypeCatalog` renforcé (R-QA-01…09) — données/API/tests **inchangés**.
- Après correctif : catalog **46/46 PASS** · suite oa/cycle **94/94** · `npm test` **827/827**.
- Rapport : [`02-corrective-delivery-report.md`](./02-corrective-delivery-report.md).

### QA revalidation (cycle 9 — 2026-07-30)

- Production + tests **figés** (rejeu indépendant des preuves).
- Résultats rejoués : **46/46** · **94/94** · **827/827** · typecheck/lint/build **PASS**.
- R-QA-01…09 : **CLOSED BY REVALIDATION**.
- Rapport : [`03-qa-revalidation-report.md`](./03-qa-revalidation-report.md).

### QA-G3 Morris (2026-07-30 21:36 CEST)

- **PASS** — R-QA-01…09 CLOSED — PR readiness next — D2/D3 non autorisés.

### PR readiness (cycle 13 — 2026-07-30)

- Package prospectif 13 fichiers · une PR · 2 commits planifiés · **aucun** staging/commit/push/PR exécuté.
- Rapport : [`04-pr-readiness-report.md`](./04-pr-readiness-report.md).
- Verdict Cursor : **READY FOR PR** — actions Git soumises à GO Morris.

## H. Frontières

- Resolver opérationnel : **NON** (D2)
- Bridge QualifyCycle : **NON** (D2)
- Vertical-slice runtime : **NON**
- UI / CreateCycle / LPS / epistemic : **NON**
- method/** import runtime : **NON**

## I. Risques et réserves

D2 requis pour résolution orchestrée · D3 réserve Figma · process-local hors D1 · aucune CycleInstance · pas de preuve produit end-to-end.

## J. Anti-claims

Registry D1 ≠ mécanisme CKC complet · mapping ≠ résolution · export domaine ≠ exposition vertical-slice · tests unitaires ≠ validation produit · implementation ≠ PR readiness · D2/D3 non ouverts · pas PRODUCT/RUN/IAM/AGENT READY · pas DELIVERY/CUTOVER AUTHORIZED · pas HARD CLOSED / T-A6 COMPLETE.

## K. Verdict

**Delivery / QA / correctif / revalidation :** historiques dans 01–03.

**QA-G3 Morris :** PASS.

**PR readiness (Cursor) :**

```
V3.1-D1 PR READINESS COMPLETE —
READY FOR PR —
QA-G3 PASS RECORDED —
PR PACKAGE COMPLETE —
COMMIT PUSH AND PR REQUIRE MORRIS GO —
D2/D3 NOT AUTHORIZED
```

READY FOR PR ≠ PR créée. D2/D3 **non autorisés**.
