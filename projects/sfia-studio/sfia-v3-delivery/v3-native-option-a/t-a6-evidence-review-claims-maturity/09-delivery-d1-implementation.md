# 09 — T-A6-D1 Evidence Core Implementation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Sous-cycle** | T-A6-D1 — Evidence core |
| **Cycle** | Delivery — implémentation (Critical) |
| **Gate** | `GO IMPLEMENT T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `c2507c370abd04ed274f972c9e6e0aa674f6b106` |
| **Horodatage** | 2026-07-26 02:44:00 CEST (+0200) |
| **Handoff source** | blob `91aa963b770eb2e44c3469f395b59ec33ce85d40` |
| **Statut** | **T-A6-D1 IMPLEMENTED — NOT VALIDATED** |
| **Fake-only / mémoire** | **oui** |
| **SQL / API / UI / T-A7** | **ABSENT / ABSENTES / ABSENTES / NON** |
| **Push / PR / merge** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Sources

- Delivery `01`…`08` + README T-A6
- Modeled Evidence `0.2.0-oa` + exemples + tests modeled
- Runtime T-A3 / T-A4 / T-A5 (lecture seule) — conventions Clock, Memory OCC, Audit, use-cases
- Template cycle + CKC architecture technique candidat

### CKC

| Item | Valeur |
|------|--------|
| Cycle | delivery / architecture technique |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |

---

## 2. Périmètre D1

### Inclus

- Domaine Evidence + invariants
- `RegisterEvidence`
- `IngestExecutionAttemptEvidence`
- `VerifyEvidenceIntegrity`
- `MarkEvidenceUnavailable`
- `EvidenceRepository` + `MemoryEvidenceRepository` + OCC
- `EvidencePayloadPort` + `FakeEvidencePayloadAdapter`
- `ExecutionAttemptReader` + `FakeExecutionAttemptReader`
- Audit refs-only, Clock doctrine, IdGenerator local
- Tests domaine / application / repository

### Hors périmètre

- ReviewBundle · ClaimEvaluation · MaturityAssessment · D2–D5
- Persistence réelle · SQL · API · UI · worker · scheduler
- Modification T-A3 / T-A4 / T-A5 / modeled
- Fermeture R-M01 · validation C1–C4 · vendor · T-A7 · exécution réelle

---

## 3. Architecture créée

**Statut :** IMPLEMENTED (D1) — NOT VALIDATED — NOT ADOPTED

Module unique (D-T-A6-DEL-01) :

`projects/sfia-studio/app/lib/oa/evidence-review/**`

### Arborescence réelle

```
evidence-review/
  domain/{types,errors,invariants}.ts
  application/
    registerEvidence.ts
    ingestExecutionAttemptEvidence.ts
    verifyEvidenceIntegrity.ts
    markEvidenceUnavailable.ts
    evidenceSupport.ts
  ports/
    evidenceRepository.ts
    evidencePayloadPort.ts
    executionAttemptReader.ts
    evidenceAudit.ts
    idGenerator.ts
  infrastructure/
    memoryEvidenceStore.ts
    memoryEvidenceRepository.ts
    fakeEvidencePayloadAdapter.ts
    fakeExecutionAttemptReader.ts
    idGenerator.ts
    observability.ts
  index.ts
```

Tests :

```
app/__tests__/oa/evidence-review/
  helpers.ts
  domainInvariants.test.ts
  registerEvidence.test.ts
  ingestExecutionAttemptEvidence.test.ts
  verifyAndUnavailable.test.ts
  evidenceRepository.test.ts
```

---

## 4. Domaine Evidence

Aligné modeled `0.2.0-oa` + champs runtime OCC (`version`, `createdAt`, `updatedAt`, `idempotencyKey`, `technicalResultRef`).

| Concept | Implémentation |
|---------|----------------|
| Identité | `ev:` + `isEvidenceId` |
| Bindings | ≥1 ; prefixes `xat:`/`xct:`/`cyc:`/`prj:`/`rb:` |
| Source / provenance | obligatoires ; Attempt = source ≠ owner |
| Classification | public\|internal\|confidential\|restricted |
| StorageMode | metadata_only\|internal_payload_ref\|external_payload_ref |
| Availability / freshness | enums modeled |
| Digest | `sha256:` + 64 hex ; obligatoire si verified / verifiablePayload |
| Retention / legalHold | metadata distincte ; legalHold ≠ effacement |
| Secrets | `containsSecrets: false` + heuristique fail-closed |

### Invariants fail-closed

- bindings non vides ; prefixes ; source/provenance
- secrets interdits dans source/location/reason
- verified / verifiablePayload ⇒ digest
- unavailable availability ⇒ status compatible
- Attempt never owner
- Register/Ingest n’écrivent jamais `verified`
- `succeeded` ≠ verified ≠ PASS
- version monotone via OCC repository

---

## 5. Use cases

### RegisterEvidence

Valide → crée Evidence candidate (`available` par défaut) → persist v1 → audit sans payload.
Idempotence fingerprint ; conflit `IDEMPOTENCY_CONFLICT`.
Refuse `sourceKind=execution_attempt` (utiliser Ingest).

### IngestExecutionAttemptEvidence

Lit Attempt via reader RO ; **n’accepte que** `status=succeeded` **avec** `resultRef` OA valide.
Refuse failed/running/absent/sans resultRef.
Crée Evidence `available` (jamais verified) avec bindings Attempt + Contract.
`technicalResultRef` = resultRef technique uniquement.
Attempt non muté ; aucune dépendance T-A5 → T-A6.

### VerifyEvidenceIntegrity

OCC `expectedVersion` ; refuse unavailable ; probe metadata-only ; compare digests ; passe à `verified` seulement si digest match.
Jamais de charge/exécution de payload.

### MarkEvidenceUnavailable

Transition explicite + motif safe + OCC + audit ; aucune cascade D2–D5.

---

## 6. Ports / adapters

| Port | Adapter D1 |
|------|------------|
| EvidenceRepository | MemoryEvidenceRepository |
| EvidencePayloadPort | FakeEvidencePayloadAdapter |
| ExecutionAttemptReader | FakeExecutionAttemptReader |
| EvidenceAudit | Memory / Console journals |
| Clock | doctrine SystemClock / FixedClock |
| IdGenerator | RandomIdGenerator / FixedIdGenerator |

Factories : `createInMemoryEvidenceReviewServices` · `createTestEvidenceReviewServices`.

---

## 7. OCC / idempotence

- create version=1 ; update expectedVersion + monotone +1
- erreurs `VERSION_CONFLICT` / `CONCURRENT_MODIFICATION` / `IDEMPOTENCY_CONFLICT`
- index idempotency isolé (fingerprint + operation)
- copies `structuredClone` ; pas de référence mutable exposée
- aucune transaction distribuée

---

## 8. Intégration T-A5

- Lecture seule via `ExecutionAttemptReaderPort`
- Commande explicite d’ingestion
- Aucun hook / polling / dépendance inverse
- Policy documentée : seuls Attempts **succeeded + resultRef**

---

## 9. Sécurité / RGPD / observabilité

- Rejet secrets/tokens ; fixtures adversariales sans données réelles
- Audit : IDs, statut, version, detailCode — jamais payload
- Minimisation ; legal hold distinct ; U-M02 OPEN
- Fake adapters : pas de réseau / shell / filesystem productif

---

## 10. Tests et résultats

| Suite | Commande | Résultat |
|-------|----------|----------|
| D1 Evidence | `npm test -- __tests__/oa/evidence-review` | **48 PASS** (~320ms) |
| T-A3 decision | `npm test -- __tests__/oa/decision` | **50 PASS** |
| T-A4 execution-contract | `npm test -- __tests__/oa/execution-contract` | **61 PASS** |
| T-A5 execution-attempt | `npm test -- __tests__/oa/execution-attempt` | **88 PASS** |
| Modeled T-A6 | `node --test …/evidence-review-maturity-governance.test.mjs` | **27 PASS** |
| Typecheck | `npm run typecheck` | **PASS** |
| Lint | `npm run lint` | **PASS** (warning ESLint legacy next lint OK after unused-fix fix) |
| Diff check | `git diff --check` | **PASS** |
| Secret scan lib | rg on `evidence-review/**` | **CLEAN** (adversarial strings only in tests) |

Build Next non exécuté (durée) — typecheck couvre le module.

---

## 11. Findings

| ID | Sévérité | Description | Blocker D1 |
|----|----------|-------------|------------|
| — | — | Aucun Critical / Major | — |

Observations (non blockers) :

- O1 — Validation cross-aggregate Evidence↔ReviewBundle reportée à D2+
- O2 — Self-review Critical runtime reporté (C2 candidate)
- O3 — Bornes taille/nombre payload reportées (C3 candidate)
- O4 — Propagation LPS reportée (C4 / B5)

Aucune correction post-findings requise.

---

## 12. Réserves / dettes

| ID | Statut |
|----|--------|
| B5 · R1 · R-T-A3-1..4 · R-M01 · U-M02 | **OPEN** (inchangés) |
| R-T-A6-DEL-C1…C4 | **RECOMMENDED — NOT VALIDATED** |

R-T-A3-1 / R-T-A3-2 restent HARD pour exécution réelle.
R-M01 : VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION (non fermée).

---

## 13. Anti-claims

- Pas D1 VALIDATED / D2 READY / DELIVERY COMPLETE / production ready
- Pas Evidence adopted
- Pas R-M01 / U-M02 / candidates fermées ou validées
- Pas stockage réel / vendor / T-A7 / exécution réelle
- Pas modification modeled / T-A3–T-A5 / packages
- IMPLEMENTED ≠ VALIDATED ≠ ADOPTED

---

## 14. Stop conditions respectées

Aucune condition de stop déclenchée.

---

## 15. Gate suivant

`GO VALIDATE T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A`
(**NOT consumed**)

Ne pas lancer D2 avant validation D1 + nouveau GO Morris.

---

## 16. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 D1 EVIDENCE CORE IMPLEMENTED — VALIDATION REQUIRES MORRIS GO`
