# 04 — T-A6 Modeled Materialization

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | Architecture fonctionnelle / matérialisation modeled (Critical) |
| **Gate** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `e3ee1042c9b6a4c09e7b5aeb3ed9e89b97638625` |
| **Horodatage** | 2026-07-26 01:36:42 CEST (+0200) |
| **Runtime / SQL / API / UI** | **NONE** modifié |
| **Push / PR / merge projet** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Autorité

Gate Morris consommé. Décisions D-T-A6-01…12 non renégociées. Cursor matérialise schemas/docs/exemples/tests modeled uniquement.

### CKC

| Item | Valeur |
|------|--------|
| Cycle | architecture fonctionnelle / matérialisation modeled |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |
| Fallback | `01-cadrage.md` (cycles framing/decide antérieurs) |

---

## 2. Décisions matérialisées

| ID | Formulation | Materialization |
|----|-------------|-----------------|
| D-T-A6-01 | OPTION C | Evidence entité `ev:` + bindings ; Attempt source non-owner |
| D-T-A6-02 | OPTION C | stockage logique hybride ; digest ; unavailable ; U-M02 OPEN |
| D-T-A6-03 | OPTION A+D | ReviewBundle versionné ; freeze ; `ready_for_review` ≡ frozen |
| D-T-A6-04 | OPTION B | ClaimEvaluation unifié v1 `clm:` ; R-M01 OPEN |
| D-T-A6-05 | OPTION D | matrice type × criticité dans schema + doc 08 |
| D-T-A6-06 | AUTHORITY MATRIX | confirmationAuthority ; N3 ≠ Morris |
| D-T-A6-07 | OPTION C | Maturity propose→confirm ; `autoPromoted=false` |
| D-T-A6-08 | OPTION D | blockingReservationRefs ; waiver ≠ close |
| D-T-A6-09 | PRINCIPLES PACK | docs 08/10 ; aucun vendor |
| D-T-A6-10 | T-A6/T-A7 BOUNDARY | docs ; `T_A7_AUTO_LAUNCH_FORBIDDEN` |
| D-T-A6-11 | L0–L3 / L4 gated / L5 out | docs 08 |
| D-T-A6-12 | OUTPUT WITHOUT AUTO NEXT | docs 08 |

---

## 3. Schemas créés / modifiés

| Schema | Avant | Après | Path |
|--------|-------|-------|------|
| Evidence | `0.1.0-oa` | **`0.2.0-oa`** | `schemas/evidence/evidence.schema.json` |
| ReviewBundle | `0.1.0-oa` | **`0.2.0-oa`** | `schemas/evidence/review-bundle.schema.json` |
| ClaimEvaluation | *absent* | **`0.1.0-oa`** | `schemas/evidence/claim-evaluation.schema.json` |
| MaturityAssessment | `0.1.0-oa` | **`0.2.0-oa`** | `schemas/maturity/maturity-assessment.schema.json` |

Convention : bump **in-place** (T-A4/T-A5) — pas de dossier historique parallèle.

---

## 4. Objets & lifecycles

### Evidence

Statuses : expected · available · verified · incomplete · stale · rejected · superseded · **unavailable**

Bindings (≥1) : executionAttemptId · executionContractId · decisionId · cycleInstanceId · projectId · reviewBundleId

storageMode : metadata_only · internal_payload_ref · external_payload_ref

### ReviewBundle

`draft` → `ready_for_review` → `under_review` → `accepted` \| `rejected` \| `incomplete` \| `superseded`

`frozenAt` requis post-draft. synthesisOnly ⇒ incomplete.

### ClaimEvaluation

status : pending · evaluating · pass · fail · not_proven · waived · disputed

criticality : non_critical · critical · structural

### MaturityAssessment

status : proposed · confirmed · rejected · superseded · blocked

`autoPromoted=false` const.

---

## 5. Invariants

### JSON Schema (Draft-07)

- additionalProperties=false
- containsSecrets=false ; autoPromoted=false
- bindings minProperties 1 ; execution_attempt ⇒ executionAttemptId
- verifiablePayload/verified ⇒ digest
- synthesisOnly ⇒ incomplete
- post-draft ⇒ frozenAt ; accepted/rejected ⇒ validatedAt+reviewer
- Critical PASS ⇒ authorized_human + confirmedBy ≠ system/agent
- structural PASS ⇒ confirmationAuthority=morris
- waived ⇒ waiver ; disputed ⇒ dispute
- confirmed maturity ⇒ confirmedLevel/By/At ; blockingReservationRefs maxItems 0
- blocked ⇒ ≥1 blockingReservationRef

### Sémantiques (docs + narratives)

- PASS ≠ EvidenceAttempt.status seul
- PASS impossible si Evidence obligatoire unavailable/incomplete/stale
- NOT_PROVEN ≠ FAIL ; WAIVED ≠ PASS
- Self-review Critical interdit
- N3 ≠ Morris
- Bundle non gelé non verdictable ; refs immutables post-freeze
- PASS ne ferme aucune réserve ; waiver ≠ fermeture
- Maturité ≠ authz exécution ; MODELED ≠ IMPLEMENTED ≠ ADOPTED
- T-A6 ne lance pas T-A7 ; pas d’auto next cycle

---

## 6. Commandes / événements / erreurs

Voir `09-command-event-error-and-transition-catalog.md` section T-A6.

Commandes clés : RegisterEvidence · FreezeReviewBundle · EvaluateClaim · ConfirmClaimEvaluation · ProposeMaturity · ConfirmMaturity · …

Événements clés : EvidenceRegistered · ReviewBundleFrozen · ClaimEvaluationConfirmed · MaturityConfirmed · ReserveMaintainedOpen · …

Erreurs clés : EVIDENCE_* · REVIEW_BUNDLE_* · CLAIM_* · MATURITY_* · T_A7_AUTO_LAUNCH_FORBIDDEN

---

## 7. Sécurité / RGPD / stockage logique

Principes D-T-A6-09 matérialisés en docs (08/10) et champs schema (classification, retentionClass, legalHold, availability, storageMode). **Aucun vendor.** U-M02 OPEN.

---

## 8. Tests

| Suite | Résultat |
|-------|----------|
| `evidence-review-maturity-governance.test.mjs` | **PASS 23** |
| Suite modeled Option A complète (`tests/*.test.mjs`) | **PASS 69** (incl. T-A4 Contract + T-A5 Attempt + T-A6) |
| Non-régression T-A3/T-A4/T-A5 modeled | **PASS** (Contract + Attempt governance inclus dans 69) |
| JSON parse schemas/examples | **PASS** |
| Secret scan examples | **PASS** (no hits) |
| `git diff --check` | **PASS** |
| Runtime `app/**` | **unchanged** |

---

## 9. Réserves (OPEN — inchangées)

| ID | Statut |
|----|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD) |
| R-T-A3-2 | **OPEN** (HARD) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — schema ClaimEvaluation matérialisé ; **pas** VALIDATED |
| U-M02 | **OPEN** |

R-T-A6-1…9 : risques/invariants/dettes — **pas** CREATE VALIDATED.

---

## 10. Écarts restants / anti-claims

- Validation Morris T-A6 non consommée
- Runtime T-A6 absent
- DebtItem schema non créé
- Bornes numériques taille/count non chiffrées en schema (dette D-T-A6-09)
- Propagation LPS sous B5

Anti-claims : pas MODELED VALIDATED · pas READY FOR DELIVERY · pas vendor · pas réserves fermées · pas T-A7 · pas exécution réelle · pas push/PR/merge

---

## 11. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED CONTRACTS MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO`
