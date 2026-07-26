# 10 — T-A6-D1 Evidence Core Validation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D1 — Evidence core |
| **Cycle** | QA / validation (Critical) |
| **Gate** | `GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `dc1c7f5f524adedc57e2b42b9ecec77ec9731836` |
| **HEAD final** | `363d7ddc55a1980c72e7343776521369fe3c42a9` |
| **Horodatage** | 2026-07-26 02:52:30 CEST (+0200) |
| **Handoff source** | blob `b51d9d8d045eca0b3a6a7e2865b6b6c8fbeee0a9` |
| **Statut** | **T-A6-D1 VALIDATED AFTER CORRECTION** |
| **Fake-only / mémoire** | **oui** |
| **D2–D5** | **NON** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE VALIDATED AFTER CORRECTION — D2 REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources / CKC

| Item | Valeur |
|------|--------|
| Delivery | `01`…`09` + README + handoff D1 |
| Runtime | `app/lib/oa/evidence-review/**` + tests D1 |
| Modeled RO | Evidence `0.2.0-oa` |
| T-A3–T-A5 | lecture seule |
| CKC | `…/pilots/04-qa-validation.md` · candidate · `executionAuthority=false` |
| Fallback | architecture technique |

---

## 2. Méthode (5 niveaux)

1. Conformité décisions DEL-01/03/04/05/06/08/09/10
2. Domaine Evidence vs schema 0.2.0-oa
3. Application + infrastructure (use cases, ports, fakes, OCC)
4. Tests adversariaux (+ corrections)
5. Bornage / non-régression T-A3–T-A5 / modeled / packages

---

## 3. Conformité décisions

| Décision | Résultat |
|----------|----------|
| DEL-01 module `evidence-review/**` | **PASS** |
| DEL-03 use cases par fichier | **PASS** |
| DEL-04 ingestion T-A5 explicite RO | **PASS** |
| DEL-05 OCC `expectedVersion` | **PASS** |
| DEL-06 contrôles sync fail-closed + audit | **PASS** |
| DEL-08 fake / metadata-only | **PASS** (renforcé après correction) |
| DEL-09 D1 avant D2–D5 | **PASS** — D2–D5 absents |
| DEL-10 pas de auto-launch | **PASS** |

---

## 4. Résultats domaine / use cases

| Zone | Résultat |
|------|----------|
| Evidence IDs / bindings / source / provenance | **PASS** |
| Classification / storageMode / availability / freshness | **PASS** |
| Digest `sha256:`+64hex ; requis si verified/verifiable | **PASS** |
| Retention / legalHold distincts | **PASS** |
| Attempt ≠ owner ; succeeded ≠ verified ≠ PASS | **PASS** |
| RegisterEvidence (candidate only) | **PASS** |
| Ingest (succeeded+resultRef only ; Attempt immuable) | **PASS** |
| Verify (metadata-only ; pas d’écho expectedDigest) | **PASS** après correction |
| MarkUnavailable (pas de cascade) | **PASS** |
| MemoryEvidenceRepository OCC / clones | **PASS** |

---

## 5. Sécurité / RGPD / audit

| Contrôle | Résultat |
|----------|----------|
| Secrets source/location/reason/provenance | **PASS** après correction provenance |
| Audit refs-only | **PASS** |
| Payload jamais exécuté | **PASS** |
| Fake sans réseau/shell/FS productif | **PASS** |
| Secret scan lib | **CLEAN** |
| U-M02 | **OPEN** (inchangé) |

---

## 6. Tests (réexécution propre)

| Suite | Commande | Avant | Après | Résultat |
|-------|----------|-------|-------|----------|
| D1 | `npm test -- __tests__/oa/evidence-review` | 48 | **57** | **PASS** (+9 adversariaux) |
| T-A3 | `npm test -- __tests__/oa/decision` | 50 | 50 | **PASS** |
| T-A4 | `npm test -- __tests__/oa/execution-contract` | 61 | 61 | **PASS** |
| T-A5 | `npm test -- __tests__/oa/execution-attempt` | 88 | 88 | **PASS** |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | 27 | 27 | **PASS** |
| Typecheck | `npm run typecheck` | PASS | **PASS** | |
| Lint | `npm run lint` | PASS | **PASS** (0 warning) | |
| Diff check | `git diff --check` | PASS | **PASS** | |
| Build | — | — | non exécuté (typecheck OK) | |

Durées approximatives : D1 ~290–320ms · T-A3 ~410ms · T-A4 ~470ms · T-A5 ~530ms · modeled ~130ms.
Skipped : 0.

---

## 7. Findings

### Critical

Aucun.

### Major (corrigés)

| ID | Fichier | Règle | Preuve | Correction | Blocker D1 |
|----|---------|-------|--------|------------|------------|
| F-A6-D1-01 | `fakeEvidencePayloadAdapter.ts` | Pas de faux verified | Sans script, digest = expectedDigest ⇒ verified | Fail-closed sans script ; digest observé explicite uniquement ; jamais d’écho | **oui → corrigé** |
| F-A6-D1-02 | `invariants.ts` + Register/Ingest | Secrets interdits dans provenance | displayName Bearer/token persistables | `validateProvenanceSecrets` + scan actor displayName | **oui → corrigé** |

### Minor

Aucun ouvert bloquant. Tests adversariaux ajoutés pour timeout/cancelled, digest invalide, Register verified forbidden, clones imbriqués, OCC concurrent.

### Observations

| ID | Note |
|----|------|
| O1 | Cross-aggregate Evidence↔ReviewBundle → D2 |
| O2 | Self-review Critical runtime → C2 candidate |
| O3 | Bornes taille/nombre → C3 candidate |
| O4 | LPS → C4 / B5 |
| O5 | `CONCURRENT_MODIFICATION` alias peu utilisé (VERSION_CONFLICT primaire) |
| O6 | MarkUnavailable réécrit `idempotencyKey` agrégat (index create conservé) |

---

## 8. Corrections

Périmètre strict D1 :

- `FakeEvidencePayloadAdapter` fail-closed
- `validateProvenanceSecrets` + scans Register/Ingest
- `adversarialValidation.test.ts` (9 tests)

Commit correctif : `fix(sfia-studio): correct T-A6 D1 validation findings`

Retests : toutes suites PASS après correction.

---

## 9. Réserves (OPEN — inchangées)

| ID | Statut |
|----|--------|
| B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 | **OPEN** |
| R-T-A6-DEL-C1…C4 | **RECOMMENDED — NOT VALIDATED** |

R-T-A3-1 / R-T-A3-2 HARD pour exécution réelle.
R-M01 : VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION (non fermée).

---

## 10. Anti-claims

- Pas D2 READY / DELIVERY COMPLETE / runtime ready / production ready
- Pas R-M01 / U-M02 / C1–C4 fermées ou validées
- Pas persistence réelle / vendor / T-A7 / exécution réelle
- Pas modification modeled / T-A3–T-A5 / packages
- VALIDATED ≠ ADOPTED · D2 non lancé

---

## 11. Gate suivant

`GO IMPLEMENT T-A6 DELIVERY D2 — SFIA STUDIO V3-NATIVE — OPTION A`
(**NOT consumed**)

---

## 12. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE VALIDATED AFTER CORRECTION — D2 REQUIRES MORRIS GO`
