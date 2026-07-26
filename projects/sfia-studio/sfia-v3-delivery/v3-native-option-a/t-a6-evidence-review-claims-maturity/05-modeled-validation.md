# 05 — T-A6 Modeled Validation

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | QA / validation (Critical) |
| **Gate** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `eee75d19c98c19baf23802e3d276c9de89484841` |
| **HEAD après correction** | `6449d290b6820aafdd512b1991d3b75beca49119` |
| **HEAD final (docs validate)** | `983aa287850b125629830882cc5eab623093285c` |
| **Horodatage** | 2026-07-26 01:52:29 CEST (+0200) |
| **Runtime / SQL / API / UI** | **NONE** modifié |
| **Push / PR / merge projet** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED VALIDATED AFTER CORRECTION — DELIVERY FRAMING REQUIRES MORRIS GO` |
| **Gate suivant** | `GO FRAME T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Autorité & CKC

Gate Morris consommé. Décisions D-T-A6-01…12 non renégociées. Corrections strictement modeled pour findings Major schema-exprimables.

| Item | Valeur |
|------|--------|
| CKC | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |
| Fallback | `02-conception-fonctionnelle.md` |

---

## 2. Scope & méthodes

Quatre niveaux :

1. **Documentaire** — décisions, README, anti-claims, réserves OPEN, pas de vendor
2. **Schema** — Draft-07, AJV6, required/enums/conditionals, exemples
3. **Sémantique** — invariants cross-objet (docs + narratives + erreurs catalogue)
4. **Non-régression / bornage** — T-A3/4/5 modeled, runtime inchangé, pas T-A7

Versions validées : Evidence `0.2.0-oa` · ReviewBundle `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` · MaturityAssessment `0.2.0-oa` (contraintes renforcées in-place avant VALIDATED ; non adoptées runtime).

---

## 3. Matrices de conformité (D-T-A6-01…12)

| ID | Matérialisé | Validé | Notes |
|----|-------------|--------|-------|
| D-T-A6-01 | oui | **oui** | Evidence `ev:` + bindings ; Attempt non-owner |
| D-T-A6-02 | oui | **oui** | hybride logique ; unavailable ; U-M02 OPEN |
| D-T-A6-03 | oui | **oui** + correction | freeze ; accepted⇒complete ; incomplete status cohérent |
| D-T-A6-04 | oui | **oui** | ClaimEvaluation unifié ; R-M01 closure requires Morris |
| D-T-A6-05 | oui | **oui** + correction | PASS requires non-empty required+provided refs |
| D-T-A6-06 | oui | **oui** + correction | Critical/agent/system ; waiver ≠ system/agent |
| D-T-A6-07 | oui | **oui** | propose→confirm ; autoPromoted=false |
| D-T-A6-08 | oui | **oui** | blockingReservationRefs ; PASS ≠ close |
| D-T-A6-09 | oui | **oui** | principles only ; no vendor |
| D-T-A6-10 | oui | **oui** | T_A7_AUTO_LAUNCH_FORBIDDEN |
| D-T-A6-11 | oui | **oui** | L0–L3 / L4 gated / L5 out |
| D-T-A6-12 | oui | **oui** | no auto next cycle |

---

## 4. Evidence

**PASS.** `0.2.0-oa` : classification, storageMode, availability, bindings≥1, digest conditionnel, containsSecrets=false, provenance.

Adversarial couvert : no-binding · secret · verifiable sans digest · bad version · additionalProperties · Attempt non-owner (docs).

Sémantique restante (non blocker) : statut Evidence unavailable/stale/incomplete ⇒ pas de PASS (cross-objet ; docs 08 + runtime futur).

---

## 5. ReviewBundle

**PASS après correction.** Freeze post-draft ; ready_for_review ≡ frozen ; accepted⇒completeness=complete ∧ synthesisOnly=false ; status=incomplete⇒completeness=incomplete ; synthesisOnly⇒incomplete.

Adversarial : verdict sans freeze · synthesis-as-complete · accepted-synthesis-only · accepted-incomplete · incomplete-status-complete.

Immutabilité post-freeze : narrative (process) — OK modeled.

---

## 6. ClaimEvaluation

**PASS après correction.** Statuses / criticality / methods conformes. Critical⇒authorized_human (≠system/agent). Structural⇒morris. PASS⇒requiredEvidenceRefs.minItems≥1 ∧ providedEvidenceRefs.minItems≥1. Waiver≠system/agent.

Adversarial : pass-without-evidence · pass-empty-required · critical-system · critical-agent · waiver-system · waived without waiver · bad version.

Sémantique restante (Minor/Observation, non blocker) : self-review same actorId ; required ⊆ provided ; Evidence status cross-objet ; N3≠Morris (canActAsMorris server).

---

## 7. MaturityAssessment

**PASS.** propose→confirm ; autoPromoted=false ; blocked⇒blockingReservationRefs ; confirmed sans HARD ; supersession+downgradeReason.

Adversarial : autoPromoted=true · confirmed+blocking reserve.

Sémantique restante : niveau structurant Morris (runtime/authority) — docs.

---

## 8. Autorité / Critical / T-A6-T-A7 / automation / output

Matrices doc 08 + schemas cohérentes. Aucune commande T-A6 n’auto-confirme Critical, n’auto-promouvoit maturité, ne ferme réserve humaine, ne lance T-A7, n’autorise exécution. Output sans auto next cycle.

---

## 9. Sécurité / RGPD / stockage

Secrets interdits ; scan **no hits** ; classification/rétention/legalHold documentés ; U-M02 **OPEN** ; aucun vendor.

---

## 10. Commandes / événements / erreurs

Catalogue 09 T-A6 couvre Register/Attach/Verify Evidence · Create/Build/Freeze/Start/Complete/Reopen Review · Evaluate/Confirm/Reject Claim · Propose/Confirm/Downgrade Maturity · Debt* ; événements et erreurs EVIDENCE_*/REVIEW_BUNDLE_*/CLAIM_*/MATURITY_*/T_A7_AUTO_LAUNCH_FORBIDDEN.

---

## 11. Tests (réexécution ce cycle)

| Suite | Commande | Résultat |
|-------|----------|----------|
| T-A6 governance | `node --test …/evidence-review-maturity-governance.test.mjs` | **27 PASS** (après correction ; was 23) |
| Modeled Option A complete | `node --test …/tests/*.test.mjs` | **73 PASS** (après correction ; materialize était 69) |
| JSON parse schemas+examples | python json.loads | **PASS** |
| Secret scan | rg patterns | **PASS** |
| `git diff --check` | sur commits T-A6 | **PASS** |
| Runtime `app/**` | diff vs main | **unchanged** |
| package/lockfiles | | **unchanged** |

Skipped : 0 · Fail : 0.

---

## 12. Findings

### Critical

Aucun.

### Major (corrigés)

| ID | Impact | Correction |
|----|--------|------------|
| F-T-A6-V-01 | PASS avec `requiredEvidenceRefs=[]` | schema + invalid + test |
| F-T-A6-V-02 | waiver autorisé par system/agent | schema + invalid + test |
| F-T-A6-V-03 | status=incomplete + completeness=complete | schema + invalid + test |
| F-T-A6-V-04 | accepted + synthesisOnly / incomplete | schema + invalids + tests |

### Minor (acceptés — non blockers)

| ID | Note |
|----|------|
| F-T-A6-V-05 | self-review Critical — narrative + runtime |
| F-T-A6-V-07 | agent confirm — **corrigé** (invalid ajouté) |
| F-T-A6-V-08…12 | N3/Morris spoof, Evidence status cross-objet, maturity structural authority — sémantique/runtime |
| F-T-A6-V-10 | waived-as-pass fixture = waived sans waiver (toujours invalide) |

### Observations

Immutabilité post-freeze processuelle · versions · catalogue T-A7 interdit · pas de `links` legacy · required⊆provided Draft-07 limité.

---

## 13. Corrections

Commit : `6449d290…` — `fix(sfia-studio): correct T-A6 modeled validation findings`

Fichiers : claim-evaluation.schema.json · review-bundle.schema.json · 6 invalids · tests · doc 08.

Retest : **73 PASS**.

---

## 14. Réserves

| ID | Statut |
|----|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD exécution réelle) |
| R-T-A3-2 | **OPEN** (HARD) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — `VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION` |
| U-M02 | **OPEN** |

R-T-A6-1…9 : risques/invariants/dettes — pas CREATE VALIDATED ; aucune fermeture.

---

## 15. Anti-claims

- Pas READY FOR DELIVERY / runtime ready / production ready
- Pas R-M01 / U-M02 / B5 / R1 / R-T-A3-* fermées
- Pas vendor stockage
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge projet

---

## 16. Gate suivant

`GO FRAME T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

Gate Morris séparé requis pour fermer R-M01.

---

## 17. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED VALIDATED AFTER CORRECTION — DELIVERY FRAMING REQUIRES MORRIS GO`
