# SFIA Review Pack — FULL — T-A6 Modeled Validation

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 01:56:48 CEST (+0200) |
| **Cycle** | QA / validation |
| **Profil** | Critical |
| **Gate** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `eee75d19c98c19baf23802e3d276c9de89484841` |
| **HEAD final** | `b80fa9f4f85e860a7a30005d1acbf9821f4e5e30` |
| **Commits locaux** | `6449d290` fix findings · `983aa287` validate docs · `b80fa9f4` record HEAD |
| **Push projet** | **NON** |
| **PR / merge** | **NON** |
| **Runtime / SQL / T-A7 / adapter / exécution** | **NON / ABSENT / NON / ABSENT / ABSENTE** |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED VALIDATED AFTER CORRECTION — DELIVERY FRAMING REQUIRES MORRIS GO` |

---

## 1. Truth Check

PASS — branche/HEAD initial/main/merge-base exacts ; clean hors `.tmp-sfia-review/` ; handoff source blob `a219fb44…` MATERIALIZED.

### Status final

```
## framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
?? .tmp-sfia-review/
```

### Worktrees (extrait)

```
worktree /Users/morris/Projects/sfia-workspace
HEAD bb3c9e29936a925174beb0c1758e8fe887e58bc3
branch refs/heads/delivery/sfia-studio-control-tower-fast-track

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-main-ckc-postmerge
HEAD b25c20e6eb131cba7dc811697b763fd033f3f652
branch refs/heads/main

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher

worktree /Users/morris/Projects/sfia-workspace-shared-platform-delivery
HEAD 08c282abafd97685bcc0b7e525ec96e6721ec589
branch refs/heads/delivery/sfia-studio-shared-technical-platform

worktree /Users/morris/Projects/sfia-workspace-template-handoff-fix
HEAD 134be301792efbf6f9739d13f0572062ef976da7
detached

worktree /Users/morris/Projects/sfia-workspace-ux-reconciliation
HEAD 7bdabdcc0ea5f760383da190a661250dcd5d2598
branch refs/heads/project/sfia-studio-ux-ui-reconciliation

worktree /Users/morris/Projects/sfia-workspace-v3-doctrine-consolidation
HEAD daf6f7d02bbac09024f6275a793769e66b2b3878
branch refs/heads/method/sfia-studio-v3-doctrine-consolidation

worktree /Users/morris/Projects/sfia-workspace-v3-native-audit
HEAD 56ddf32e811f0f5f8b82f31400da18ceecf3bc30
branch refs/heads/audit/sfia-studio-v3-native-dependencies

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-arch
HEAD 577ff0c22491288d2293fd9730ed26f0af4095b0
branch refs/heads/design/sfia-studio-v3-native-option-a-functional-architecture

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-design
HEAD e22bc243c8854df4e9422fafe46e92135fe242e9
branch refs/heads/design/sfia-studio-v3-native-option-a-functional

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-modeled
HEAD 52891e5c5a9b1254143e422111ea4955ca3a0940
branch refs/heads/modeled/sfia-studio-v3-native-option-a

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-tech
HEAD b80fa9f4f85e860a7a30005d1acbf9821f4e5e30
branch refs/heads/framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity

worktree /Users/morris/Projects/sfia-workspace-v3-native-option-a-ux
HEAD 608d3d4cb3bee46ef2a533aa9cf94ee427c4cf71
branch refs/heads/design/sfia-studio-v3-native-option-a-ux-ui
```

## 2. Handoff source

- blob `a219fb44e711ad5afae57bbadf181cc7cf76cca3`
- verdict MATERIALIZED — MODELED VALIDATION REQUIRES MORRIS GO

## 3. CKC

`pilots/04-qa-validation.md` (candidate, executionAuthority=false) ; fallback `02-conception-fonctionnelle.md`

## 4. Sources

template cycle ; delivery 01–04 ; modeled 01–12 / schemas / examples / tests ; runtime T-A3–5 lecture seule

## 5. Diff initial (materialize → validate start)

HEAD `eee75d19` = materialize tip. Corrections = commit `6449d290`.

## 6. Fichiers

### Créés
- `05-modeled-validation.md`
- invalids : pass-empty-required · waiver-system · critical-agent · accepted-synthesis-only · incomplete-status-complete · accepted-incomplete

### Modifiés
- claim-evaluation.schema.json · review-bundle.schema.json · tests T-A6 · doc 08 · delivery README · modeled README

### Supprimés
- aucun

## 7. Versions

Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` (contraintes renforcées in-place avant VALIDATED)

## 8. Validation synthèse

- Evidence PASS
- ReviewBundle PASS après freeze/accepted/incomplete corrections
- ClaimEvaluation PASS après PASS-required + waiver authority
- Maturity PASS
- Authority/Critical/T-A6-T-A7/automation/output PASS
- Security/RGPD/storage principles PASS ; U-M02 OPEN
- Commands/events/errors PASS

## 9. Tests (réexécutés)

| Suite | Résultat |
|-------|----------|
| T-A6 | **27 PASS** / 0 fail / ~202ms |
| Modeled complete | **73 PASS** / 0 fail / ~159ms (vs 69 materialize) |
| JSON | PASS |
| Secret scan | PASS |
| diff-check | PASS |
| app/** | unchanged |

Commandes :
```
node --test projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/evidence-review-maturity-governance.test.mjs
node --test projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/*.test.mjs
```

## 10. Findings

Critical : aucun
Major corrigés : F-T-A6-V-01…04
Minor acceptés : self-review narrative, cross-objet Evidence status, etc.
Observations : immutabilité processuelle, Draft-07 required⊆provided

## 11. Corrections

```
commit 6449d290b6820aafdd512b1991d3b75beca49119
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 01:55:43 2026 +0200

    fix(sfia-studio): correct T-A6 modeled validation findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

 ...idence-review-bundle-maturity-and-debt-model.md |  4 +-
 ...-evaluation.critical-agent-confirm.invalid.json | 54 +++++++++++++++++++
 ...aim-evaluation.pass-empty-required.invalid.json | 38 ++++++++++++++
 ...evaluation.waiver-system-authorize.invalid.json | 46 ++++++++++++++++
 .../review-bundle.accepted-incomplete.invalid.json | 41 +++++++++++++++
 ...iew-bundle.accepted-synthesis-only.invalid.json | 41 +++++++++++++++
 ...-bundle.incomplete-status-complete.invalid.json | 29 ++++++++++
 .../schemas/evidence/claim-evaluation.schema.json  | 30 ++++++++++-
 .../schemas/evidence/review-bundle.schema.json     | 50 +++++++++++++++++-
 .../evidence-review-maturity-governance.test.mjs   | 61 ++++++++++++++++++++++
 10 files changed, 390 insertions(+), 4 deletions(-)
```

## 12. Réserves

B5 R1 R-T-A3-1…4 **OPEN** · R-M01 **OPEN** (`VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION`) · U-M02 **OPEN** · R-T-A6-1…9 non CREATE VALIDATED

## 13. Gate suivant

`GO FRAME T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## 14. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED VALIDATED AFTER CORRECTION — DELIVERY FRAMING REQUIRES MORRIS GO`

---

# ANNEXE A — 05-modeled-validation.md (complet)

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

---

# ANNEXE B — README delivery (complet)

# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6` (**CONSUMED**) |
| **Gate arbitrage** | `GO ARBITRATE T-A6` (**CONSUMED**) |
| **Gate décision** | `GO DECIDE T-A6` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A6 MODELED` (**CONSUMED**) |
| **Gate validate** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Runtime** | **NONE** modifié |
| **Push / PR / merge projet** | **NONE** |
| **Statut pack** | **MODELED VALIDATED AFTER CORRECTION** |
| **Horodatage validate** | 2026-07-26 01:52:29 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED VALIDATED AFTER CORRECTION — DELIVERY FRAMING REQUIRES MORRIS GO` |
| **Gate suivant** | `GO FRAME T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Valider formellement les contrats modeled T-A6 (Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment) contre D-T-A6-01…12 — sans runtime, SQL, vendor, ni T-A7.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md)
3. [02-arbitration.md](./02-arbitration.md)
4. [03-decisions.md](./03-decisions.md)
5. [04-modeled-materialization.md](./04-modeled-materialization.md)
6. [05-modeled-validation.md](./05-modeled-validation.md) — **validation modeled**

## Versions schemas (validées)

| Schema | Version |
|--------|---------|
| Evidence | `0.2.0-oa` |
| ReviewBundle | `0.2.0-oa` |
| ClaimEvaluation | `0.1.0-oa` |
| MaturityAssessment | `0.2.0-oa` |

## Tests (validate cycle)

| Suite | Résultat |
|-------|----------|
| T-A6 governance | **27 PASS** |
| Modeled Option A complete | **73 PASS** |

## Corrections validation

`fix(sfia-studio): correct T-A6 modeled validation findings` — F-T-A6-V-01…04 (Major) fermés en schema + exemples + tests.

## Réserves (OPEN — inchangées)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD) |
| R-T-A3-2 | **OPEN** (HARD) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION |
| U-M02 | **OPEN** |

## Anti-claims

- Pas READY FOR DELIVERY / runtime / production ready
- Pas R-M01 fermée / U-M02 fermée / vendor
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge

## Modeled de référence

- `sfia-v3-modeled/v3-native-option-a/08-…`
- schemas Evidence / ReviewBundle / ClaimEvaluation / MaturityAssessment
- `tests/evidence-review-maturity-governance.test.mjs`

---

# ANNEXE C — Diff utile claim-evaluation (correction)

```diff
commit 6449d290b6820aafdd512b1991d3b75beca49119
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 01:55:43 2026 +0200

    fix(sfia-studio): correct T-A6 modeled validation findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/claim-evaluation.schema.json b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/claim-evaluation.schema.json
index 53a0dfa..e5eccff 100644
--- a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/claim-evaluation.schema.json
+++ b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/claim-evaluation.schema.json
@@ -223,16 +223,21 @@
       },
       "then": {
         "required": [
+          "requiredEvidenceRefs",
           "providedEvidenceRefs",
           "evaluatedAt"
         ],
         "properties": {
+          "requiredEvidenceRefs": {
+            "type": "array",
+            "minItems": 1
+          },
           "providedEvidenceRefs": {
             "type": "array",
             "minItems": 1
           }
         },
-        "description": "PASS requires at least one providedEvidenceRef (semantic: must cover requiredEvidenceRefs)"
+        "description": "PASS requires non-empty requiredEvidenceRefs and providedEvidenceRefs (semantic: provided must cover required; Evidence unavailable/stale/incomplete cannot support PASS)"
       }
     },
     {
@@ -365,7 +370,28 @@
         "required": [
           "waiver"
         ],
-        "description": "WAIVED ≠ PASS; explicit motivated waiver required"
+        "properties": {
+          "waiver": {
+            "type": "object",
+            "properties": {
+              "authorizedBy": {
+                "type": "object",
+                "properties": {
+                  "role": {
+                    "type": "string",
+                    "not": {
+                      "enum": [
+                        "system",
+                        "agent"
+                      ]
+                    }
+                  }
+                }
+              }
+            }
+          }
+        },
+        "description": "WAIVED ≠ PASS; explicit motivated waiver required; system/agent cannot authorize waiver"
       }
     },
     {
```

---

# ANNEXE D — Diff utile review-bundle (correction)

```diff
commit 6449d290b6820aafdd512b1991d3b75beca49119
Author: Morris Cleland <morris@macbook-air1.home>
Date:   Sun Jul 26 01:55:43 2026 +0200

    fix(sfia-studio): correct T-A6 modeled validation findings

    Co-authored-by: Cursor <cursoragent@cursor.com>

diff --git a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/review-bundle.schema.json b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/review-bundle.schema.json
index 6c9d7c8..98fd8e0 100644
--- a/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/review-bundle.schema.json
+++ b/projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/evidence/review-bundle.schema.json
@@ -227,7 +227,55 @@
           "validatedAt",
           "reviewer"
         ],
-        "description": "Verdict statuses require freeze + validatedAt + reviewer; incomplete bundle cannot carry final PASS claims (semantic)"
+        "properties": {
+          "synthesisOnly": {
+            "const": false
+          }
+        },
+        "description": "Verdict statuses require freeze + validatedAt + reviewer; synthesisOnly cannot receive accepted/rejected verdict"
+      }
+    },
+    {
+      "if": {
+        "properties": {
+          "status": {
+            "const": "accepted"
+          }
+        },
+        "required": [
+          "status"
+        ]
+      },
+      "then": {
+        "properties": {
+          "completeness": {
+            "const": "complete"
+          },
+          "synthesisOnly": {
+            "const": false
+          }
+        },
+        "description": "accepted ⇒ completeness=complete and not synthesisOnly"
+      }
+    },
+    {
+      "if": {
+        "properties": {
+          "status": {
+            "const": "incomplete"
+          }
+        },
+        "required": [
+          "status"
+        ]
+      },
+      "then": {
+        "properties": {
+          "completeness": {
+            "const": "incomplete"
+          }
+        },
+        "description": "status=incomplete ⇒ completeness=incomplete"
       }
     },
     {
```

---

# ANNEXE E — Invalids ajoutés (complets)

### `invalid/claim-evaluation.pass-empty-required.invalid.json`
```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:pass-empty-required-001",
  "claimType": "technique",
  "claimStatement": "Schema examples validate under ajv for Evidence 0.2.0-oa",
  "criticality": "non_critical",
  "evaluationMethod": "deterministic",
  "ruleRef": "rule:schema-ajv-pass",
  "requiredEvidenceRefs": [],
  "providedEvidenceRefs": [
    "ev:from-attempt-001"
  ],
  "reviewBundleId": "rb:oa-ready-001",
  "reviewBundleVersion": 2,
  "status": "pass",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "confirmationAuthority": "system_deterministic",
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-noncrit-001",
    "actor": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```
### `invalid/claim-evaluation.waiver-system-authorize.invalid.json`
```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:waiver-system-001",
  "claimType": "conformite",
  "claimStatement": "Temporary deferral of tablet UX evidence",
  "criticality": "non_critical",
  "evaluationMethod": "human_review",
  "requiredEvidenceRefs": [
    "ev:stale-001"
  ],
  "providedEvidenceRefs": [],
  "reviewBundleId": "rb:oa-ready-001",
  "reviewBundleVersion": 2,
  "status": "waived",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "waiver": {
    "reason": "Tablet UX deferred under known debt UX-U01; reversible when evidence lands",
    "authorizedBy": {
      "actorId": "actor:studio",
      "role": "system",
      "displayName": "Studio",
      "authorityLevel": "none"
    },
    "authorizedAt": "2026-07-26T01:00:00.000Z",
    "reversible": true
  },
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-waived-001",
    "actor": {
      "actorId": "actor:morris",
      "role": "decision_maker",
      "displayName": "Morris",
      "authorityLevel": "N3"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```
### `invalid/claim-evaluation.critical-agent-confirm.invalid.json`
```json
{
  "schemaVersion": "0.1.0-oa",
  "claimEvaluationId": "clm:crit-agent-001",
  "claimType": "securite",
  "claimStatement": "No secrets stored in clear in Evidence records",
  "criticality": "critical",
  "evaluationMethod": "human_review",
  "requiredEvidenceRefs": [
    "ev:sensitive-001",
    "ev:external-001"
  ],
  "providedEvidenceRefs": [
    "ev:sensitive-001",
    "ev:external-001"
  ],
  "reviewBundleId": "rb:oa-under-001",
  "reviewBundleVersion": 2,
  "status": "pass",
  "proposedBy": {
    "actorId": "actor:studio",
    "role": "system",
    "displayName": "Studio",
    "authorityLevel": "none"
  },
  "reviewedBy": {
    "actorId": "actor:reviewer-1",
    "role": "reviewer",
    "displayName": "Reviewer One",
    "authorityLevel": "N2"
  },
  "confirmedBy": {
    "actorId": "actor:agent-ta5",
    "role": "agent",
    "displayName": "T-A5 Agent",
    "authorityLevel": "none"
  },
  "confirmationAuthority": "authorized_human",
  "proposedAt": "2026-07-26T00:00:00.000Z",
  "evaluatedAt": "2026-07-26T01:00:00.000Z",
  "confirmedAt": "2026-07-26T02:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:clm-crit-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```
### `invalid/review-bundle.accepted-synthesis-only.invalid.json`
```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:accepted-synth-001",
  "projectId": "prj:campus360-oa",
  "version": 3,
  "evidenceRefs": [
    "ev:from-attempt-001",
    "ev:manual-001",
    "ev:external-001"
  ],
  "claimEvaluationRefs": [
    "clm:crit-confirmed-001",
    "clm:structural-001"
  ],
  "completeness": "incomplete",
  "reviewer": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "status": "accepted",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "reviewStartedAt": "2026-07-26T02:00:00.000Z",
  "validatedAt": "2026-07-26T03:00:00.000Z",
  "synthesisOnly": true,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-accepted-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```
### `invalid/review-bundle.incomplete-status-complete.invalid.json`
```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:incomplete-complete-mismatch-001",
  "projectId": "prj:campus360-oa",
  "version": 2,
  "evidenceRefs": [
    "ev:incomplete-001"
  ],
  "completeness": "complete",
  "reservations": [
    "required evidence unavailable"
  ],
  "status": "incomplete",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-incomplete-status-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```
### `invalid/review-bundle.accepted-incomplete.invalid.json`
```json
{
  "schemaVersion": "0.2.0-oa",
  "reviewBundleId": "rb:accepted-incomplete-001",
  "projectId": "prj:campus360-oa",
  "version": 3,
  "evidenceRefs": [
    "ev:from-attempt-001",
    "ev:manual-001",
    "ev:external-001"
  ],
  "claimEvaluationRefs": [
    "clm:crit-confirmed-001",
    "clm:structural-001"
  ],
  "completeness": "incomplete",
  "reviewer": {
    "actorId": "actor:morris",
    "role": "decision_maker",
    "displayName": "Morris",
    "authorityLevel": "N3"
  },
  "status": "accepted",
  "createdAt": "2026-07-26T00:00:00.000Z",
  "frozenAt": "2026-07-26T01:00:00.000Z",
  "reviewStartedAt": "2026-07-26T02:00:00.000Z",
  "validatedAt": "2026-07-26T03:00:00.000Z",
  "synthesisOnly": false,
  "provenance": {
    "schemaVersion": "0.1.0-oa",
    "provenanceRecordId": "prv:rb-accepted-001",
    "actor": {
      "actorId": "actor:reviewer-1",
      "role": "reviewer",
      "displayName": "Reviewer One",
      "authorityLevel": "N2"
    },
    "source": "review",
    "timestamp": "2026-07-26T00:00:00.000Z",
    "correlationId": "corr:oa-t-a6-001"
  }
}
```

---

# ANNEXE F — Modeled README (statut validate)

# Modeled — Option A v3-native

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **VALIDATED BY MORRIS** (pack historique) ; T-A6 **matérialisé — validation Morris requise** |
| **Gate AT (consommé)** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Gate T-A6 materialize** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate T-A6 validate** | `GO VALIDATE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED** — VALIDATED AFTER CORRECTION) |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion (baseline)** | `0.1.0-oa` |
| **ExecutionContract** | `0.2.0-oa` (T-A4 modeled rework — breaking) |
| **ExecutionAttempt** | `0.2.0-oa` (T-A5 materialization — breaking vs `0.1.0-oa`) |
| **AgentDescriptor** | `0.1.0-oa` (docs-first ; not a live registry) |
| **Evidence** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **ReviewBundle** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **ClaimEvaluation** | `0.1.0-oa` (T-A6 — **nouveau** ; R-M01 OPEN jusqu’à validation) |
| **MaturityAssessment** | `0.2.0-oa` (T-A6 — breaking vs `0.1.0-oa`) |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | T-A6 modeled VALIDATED AFTER CORRECTION ≠ READY FOR DELIVERY · Pas SCHEMAS ADOPTED runtime · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED · Pas T-A4/T-A5/T-A6 RUNTIME · Pas T-A7 · Pas vendor stockage · Pas réserves fermées · R-M01 closure requires Morris |
| **Code / SQL / Figma** | **Interdits** |

## Objectif

Contrats modeled versionnables pour la chaîne Option A (intention → LPS → décision → N1–N3 → ExecutionContract → Evidence / ReviewBundle / ClaimEvaluation → maturité).

## Index

| # | Fichier |
|---|---------|
| 01 | Principes & frontières d’agrégats |
| 02 | Entités, VOs, identifiants |
| 03 | Living Project State |
| 04 | DoctrinePackage & CKC |
| 05 | Cycle, trajectoire, épistémologie |
| 06 | Décision, confirmation, autorité |
| 07 | ExecutionContract, Attempt, agents |
| 08 | Evidence, ReviewBundle, ClaimEvaluation, maturité, dette (**T-A6**) |
| 09 | Commandes, événements, erreurs, transitions (**+ T-A6**) |
| 10 | Validation, versioning, provenance, sécurité (**+ T-A6**) |
| 11 | Réemploi / migration actifs existants |
| 12 | Decision pack M-OA |
| schemas/ | JSON Schema Draft-07 (`0.1.0-oa` baseline ; Contract+Attempt+Evidence+ReviewBundle+Maturity `0.2.0-oa` ; ClaimEvaluation+AgentDescriptor `0.1.0-oa`) |
| examples/ | Exemples valides / invalid/ / narratives (T-A4…T-A6) |
| tests/ | Validation ajv governance modeled-only (Contract · Attempt · Evidence/Review/Claim/Maturity) |

## Verdict pack

**SFIA STUDIO V3-NATIVE OPTION A MODELED CONTRACTS VALIDATED BY MORRIS — TECHNICAL ARCHITECTURE IN PROGRESS**

T-A6 modeled : **VALIDATED AFTER CORRECTION** — gate suivant `GO FRAME T-A6 DELIVERY` (**NOT consumed**).

Réserves maintenues : B5 · R1 · R-T-A3-1…4 · **R-M01** (`VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION`) · **U-M02** · pas READY FOR DELIVERY · schemas non adoptés runtime · aucune implémentation · T-A7 non ouvert.

---

# ANNEXE G — Anti-claims checklist

- [x] Runtime non modifié
- [x] SQL absent
- [x] T-A7 non ouvert
- [x] Adapter réel absent
- [x] Exécution réelle absente
- [x] Push/PR/merge non exécutés
- [x] Réserves non fermées
- [x] R-M01 non fermée (VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS)
- [x] U-M02 OPEN
- [x] Vendor non choisi
- [x] Review pack FULL

## Verdict final

`SFIA STUDIO V3-NATIVE OPTION A T-A6 MODELED VALIDATED AFTER CORRECTION — DELIVERY FRAMING REQUIRES MORRIS GO`
