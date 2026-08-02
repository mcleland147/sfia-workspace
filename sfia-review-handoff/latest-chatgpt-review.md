# Full Review Pack — SFIA Studio V3.1-D2-A PR Readiness Corrective

## Métadonnées
Date/heure/fuseau : 2026-08-02 14:22:29 CEST (+0200)
Rôle Cursor : cycle 13 PR readiness corrective documentaire
Profil **Critical** · Typologie **DOC**
Justification : supprimer contradiction de statut avant gate commit/push/PR sur package public fail-closed.

## Gate Morris
```text
GO PR READINESS CORRECTIVE SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
REMOVE STALE “PR READINESS NON OUVERTE” STATUS FROM LIVING REGISTERS —
PRESERVE ALL CODE, TESTS, REPORTS 01–04 AND QA-G3 EVIDENCE —
RECHECK TWENTY-FILE PACKAGE —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-B —
NO D2-C —
NO D3 —
NO METHOD PROMOTION
```

## CKC / template
Fallback §4.13 · method-candidate · `executionAuthority=false`. Template consulté.
Limite pre-check ChatGPT : état local non inspecté ; Cursor a exécuté Local Git Truth Check.

## Git Truth / handoff
```text
2026-08-02 14:21:46 CEST (+0200)
BRANCH=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
ORIGIN_MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
DIVERGENCE=0	0
HANDOFF_TIP=a275ce48bbb5e3428f517079decd1b76ea42c5df
HANDOFF_BLOB=987129bbf541c55c5a2a1b64a020a0de5fbe0bf9
WORKTREES=77
STAGED=empty
DELIVERY_REMOTE=0
STALE_OCCURRENCES=2
```
Archive PR readiness : `.tmp-sfia-review/v3-1-d2-a-pr-readiness-chatgpt-review-preserved.md` (blob `987129bb…`).
QA-G3 ACCEPTED · R-QA-D2A-01 CLOSED.

## Finding R-PR-D2A-04
Deux occurrences stale avant :
1. 08 L59
2. 19 L872
Après : aucune. CLOSED.

## Sections / diffs
### Contexte 08 avant
```text
| Architecture fonctionnelle D2 | **adoptée (FA-C)** — [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** |
| Architecture technique D2 | **adoptée** — [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
| Backlog D2-A/B/C | **validé** — [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) · 17 stories préservées |
| Delivery D2-A | **complète localement** — contrats, HASH-A, projection pure · [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
| QA D2-A | **exécutée — FAIL Cursor** · R-QA-D2A-01 bloquante · [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
| Delivery corrective D2-A | **complète localement** · [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) |
| QA revalidation D2-A | **PASS** · R-QA-D2A-01 **CLOSED** · [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) |
| QA-G3 D2-A | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST |
| PR readiness D2-A | **READY FOR PR WITH RESERVES** · [04](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md) · commit/push/PR non exécutés |
| PR readiness D2-A | **non ouverte** |
| Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
| Delivery D2-C | **fermée** |
| D2-D (extensions) | **gated** · non ouvert |
| D3 | **non ouvert** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception validée** · **FA-C adoptée** · **TA adoptée** · **backlog validé** · D2-A Delivery/QA/correctif/revalidation **PASS** · QA-G3 **ACCEPTED** · PR readiness **READY WITH RESERVES** · commit/push/PR non exécutés · D2-B/C **fermées** · slicing **A→B→C** · D2-D gated |
```
### Diff 08
```diff
--- .tmp-sfia-review/v3-1-d2-a-pr-corrective-08-before.md	2026-08-02 14:11:00
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md	2026-08-02 14:21:46
@@ -56,7 +56,6 @@
 | QA revalidation D2-A | **PASS** · R-QA-D2A-01 **CLOSED** · [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) |
 | QA-G3 D2-A | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST |
 | PR readiness D2-A | **READY FOR PR WITH RESERVES** · [04](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md) · commit/push/PR non exécutés |
-| PR readiness D2-A | **non ouverte** |
 | Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
 | Delivery D2-C | **fermée** |
 | D2-D (extensions) | **gated** · non ouvert |
```
### Contexte 08 après
```text
| Architecture technique D2 | **adoptée** — [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
| Backlog D2-A/B/C | **validé** — [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) · 17 stories préservées |
| Delivery D2-A | **complète localement** — contrats, HASH-A, projection pure · [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
| QA D2-A | **exécutée — FAIL Cursor** · R-QA-D2A-01 bloquante · [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
| Delivery corrective D2-A | **complète localement** · [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) |
| QA revalidation D2-A | **PASS** · R-QA-D2A-01 **CLOSED** · [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) |
| QA-G3 D2-A | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST |
| PR readiness D2-A | **READY FOR PR WITH RESERVES** · [04](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md) · commit/push/PR non exécutés |
| Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
| Delivery D2-C | **fermée** |
| D2-D (extensions) | **gated** · non ouvert |
| D3 | **non ouvert** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
```
### Contexte 19 avant
```text
| Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` créée depuis `e1befcb8…` |
| BL-D2-A-01 | **exécutée** — contrats D2-A et projection fingerprint fermée |
| BL-D2-A-02 | **exécutée** — HASH-A statique + garde SHA-256 test-only |
| BL-D2-A-03 | **exécutée** — Catalog Projection pure et fail-closed |
| BL-D2-A-04 | **exécutée** — 24 tests D2-A + non-régression D1 |
| Tests ciblés | fingerprint **8/8** · projection **16/16** |
| Baseline pré-mutation | catalogue D1 **46/46** · cycle OA **94/94** |
| Delivery D2-A | **complète localement** |
| QA D2-A indépendante | **exécutée — FAIL** · voir registre AI |
| Delivery corrective D2-A | **complète localement** · voir registre AJ |
| QA revalidation D2-A | **PASS** · voir registre AK |
| QA-G3 / PR readiness D2-A | **QA-G3 ACCEPTED** · readiness **READY WITH RESERVES** · voir registre AL |
| PR readiness D2-A | **non ouverte** |
| D2-B / D2-C | **fermés** — aucun élément implémenté |
| D2-D / D3 | **fermés** |
| Git projet | aucun commit · aucun push · aucune PR |

**Statut d'exécution :**
`D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY`.
```
### Diff 19
```diff
--- .tmp-sfia-review/v3-1-d2-a-pr-corrective-19-before.md	2026-08-02 14:11:00
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md	2026-08-02 14:21:46
@@ -869,7 +869,6 @@
 | Delivery corrective D2-A | **complète localement** · voir registre AJ |
 | QA revalidation D2-A | **PASS** · voir registre AK |
 | QA-G3 / PR readiness D2-A | **QA-G3 ACCEPTED** · readiness **READY WITH RESERVES** · voir registre AL |
-| PR readiness D2-A | **non ouverte** |
 | D2-B / D2-C | **fermés** — aucun élément implémenté |
 | D2-D / D3 | **fermés** |
 | Git projet | aucun commit · aucun push · aucune PR |
```
### Contexte 19 après
```text
| BL-D2-A-01 | **exécutée** — contrats D2-A et projection fingerprint fermée |
| BL-D2-A-02 | **exécutée** — HASH-A statique + garde SHA-256 test-only |
| BL-D2-A-03 | **exécutée** — Catalog Projection pure et fail-closed |
| BL-D2-A-04 | **exécutée** — 24 tests D2-A + non-régression D1 |
| Tests ciblés | fingerprint **8/8** · projection **16/16** |
| Baseline pré-mutation | catalogue D1 **46/46** · cycle OA **94/94** |
| Delivery D2-A | **complète localement** |
| QA D2-A indépendante | **exécutée — FAIL** · voir registre AI |
| Delivery corrective D2-A | **complète localement** · voir registre AJ |
| QA revalidation D2-A | **PASS** · voir registre AK |
| QA-G3 / PR readiness D2-A | **QA-G3 ACCEPTED** · readiness **READY WITH RESERVES** · voir registre AL |
| D2-B / D2-C | **fermés** — aucun élément implémenté |
| D2-D / D3 | **fermés** |
| Git projet | aucun commit · aucun push · aucune PR |

**Statut d'exécution :**
`D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY`.
```

## Empreintes
### Avant
```text
2026-08-02 14:21:46 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  blob=b436ee328fa9dfdb1d6eb3bc165dad285723113d
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=fe4d6cee6be7e232eb662e44b9e562067650a2a762dd058efd0eaf392a385882  blob=93ca7a25f544bda5f9dbdd2f72f46801f372528c
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=6a690a2c0d03f41af75e3578cc0f09508a09ce0893340486227d92555c852e94  blob=008db361ce7e3757880c5dedd577cdf26a371d2a
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=22e47628ffeaf52001635faf7b67fec7d383ce0e14185e25c6bd0a166b6bde5f  blob=18ecc21bd815684b8ccfca4664c145bf69422193
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=1b2cbe9b847bfbab5674430b4e488216197a08058a68d98369da675d676d55c8  blob=ef9db9c0c600e330897220a31dcc62fdc1ba99db
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  blob=caaddbaa8a0de6596e5382f3f02d83643a896e2b
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md  sha256=9388f3c7eaec6758153093f8ca689b65793d8fb7c22396754a7737c061e8ba1b  blob=e386d8b1f283b349b18ff049b4e0fc557a1a81b0
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md  sha256=0492b2431881323b0496c7efa6d2c0765c9e66c498ea1044d7d349b0b84ab2ec  blob=02abb0d8f50c41536403a404b57b4b4a36942b96
```
### Après
```text
2026-08-02 14:22:29 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  blob=b436ee328fa9dfdb1d6eb3bc165dad285723113d  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=fe4d6cee6be7e232eb662e44b9e562067650a2a762dd058efd0eaf392a385882  blob=93ca7a25f544bda5f9dbdd2f72f46801f372528c  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=fe3c40e86e77dbccf3e3ba18e389cac69e2999d8bb291534d4fe86ada70b44f2  blob=f011b4e4533349f4eabe2d49d8d78456325d8fce  match_pre=False
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=b5234b4add67e97d81fab5c493993662ebbc9666f7556490b44f63cbdf0524e9  blob=47a3037b3fab652423c2b282068963568b2fcdcd  match_pre=False
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=1b2cbe9b847bfbab5674430b4e488216197a08058a68d98369da675d676d55c8  blob=ef9db9c0c600e330897220a31dcc62fdc1ba99db  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  blob=caaddbaa8a0de6596e5382f3f02d83643a896e2b  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md  sha256=9388f3c7eaec6758153093f8ca689b65793d8fb7c22396754a7737c061e8ba1b  blob=e386d8b1f283b349b18ff049b4e0fc557a1a81b0  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md  sha256=0492b2431881323b0496c7efa6d2c0765c9e66c498ea1044d7d349b0b84ab2ec  blob=02abb0d8f50c41536403a404b57b4b4a36942b96  match_pre=True
```

## Package 20 fichiers
```text
1	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
2	projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
3	projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
4	projects/sfia-studio/app/lib/oa/cycle/index.ts
5	projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
6	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
7	projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
8	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
9	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
10	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
11	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
12	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
13	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
14	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
15	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
16	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
17	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
18	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
19	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
20	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
```
```text
files=20
tracked_files=3 add=68 del=26
untracked_files=17 add=11125 del=0
combined_add=11193 del=26
cycle_corrective_delta=08:-1 19:-1 add=0
top5_by_bytes:
  118180	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
  83160	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
  76911	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
  63695	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
  49368	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
binaries=none
files_gt_1MiB=none
```

Diff tracked package :
```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
index 3daf575..9ad18b7 100644
--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
+++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
@@ -10,6 +10,9 @@ export * from "./domain/errors";
 export * from "./domain/invariants";
 export * from "./domain/qualification";
 export * from "./domain/cycleTypeCatalog";
+export * from "./domain/ckcQualificationContracts";
+export * from "./domain/catalogFingerprint";
+export * from "./domain/catalogProjection";

 export * from "./ports/cycleRepository";
 export * from "./ports/trajectoryRepository";
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
index c138afc..f011b4e 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
@@ -32,7 +32,7 @@ Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.

 **QA-G3 Morris :** **PASS** (2026-07-30 21:36 CEST).

-**Statut PR readiness :** `READY FOR PR` — [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) — commit/push/draft PR **soumis à GO**.
+**Statut PR / merge / capitalisation (historique) :** PR #296 + capitalisation #297 **mergées** · D1 **techniquement clos** sur `main`.

 Docs :
 - [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
@@ -44,24 +44,44 @@ Docs :
 | Revalidation / readiness tests | 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS |
 | QA-G2 | vert |
 | QA-G3 | **PASS Morris** |
-| PR readiness | **READY FOR PR** · package 13 fichiers · PR **non créée** |
-| D2 / D3 | **non ouverts** |
+| PR / merge / capitalisation | PR #296 + #297 mergées · D1 techniquement clos sur `main` @ `e1befcb8…` |
+| D2 cadrage | **terminé et arbitré** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
+| D2 conception fonctionnelle | **validée** — [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) |
+| Architecture fonctionnelle D2 | **adoptée (FA-C)** — [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** |
+| Architecture technique D2 | **adoptée** — [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
+| Backlog D2-A/B/C | **validé** — [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) · 17 stories préservées |
+| Delivery D2-A | **complète localement** — contrats, HASH-A, projection pure · [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
+| QA D2-A | **exécutée — FAIL Cursor** · R-QA-D2A-01 bloquante · [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
+| Delivery corrective D2-A | **complète localement** · [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) |
+| QA revalidation D2-A | **PASS** · R-QA-D2A-01 **CLOSED** · [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) |
+| QA-G3 D2-A | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST |
+| PR readiness D2-A | **READY FOR PR WITH RESERVES** · [04](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md) · commit/push/PR non exécutés |
+| Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
+| Delivery D2-C | **fermée** |
+| D2-D (extensions) | **gated** · non ouvert |
+| D3 | **non ouvert** |

 ### Slicing CAT-08

 | Lot | Contenu | Statut |
 |-----|---------|--------|
-| **V3.1-D1** | Catalogue · mapping · validateur | Delivery + QA-G3 PASS · **PR readiness READY** · Git pending GO |
-| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **non autorisé** |
+| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
+| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception validée** · **FA-C adoptée** · **TA adoptée** · **backlog validé** · D2-A Delivery/QA/correctif/revalidation **PASS** · QA-G3 **ACCEPTED** · PR readiness **READY WITH RESERVES** · commit/push/PR non exécutés · D2-B/C **fermées** · slicing **A→B→C** · D2-D gated |
 | **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |

 ### Réserves QA

-R-QA-01…09 **CLOSED**. QA-G3 PASS. PR readiness ≠ autorisation commit/push/PR.
+R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.

 ### Réserves D2

-Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit.
+Catalog Projection D2-A Delivery/QA/correctif/revalidation complets ; R-QA-D2A-01 **CLOSED** ; QA-G3 **ACCEPTED BY MORRIS** ; PR readiness **READY FOR PR WITH RESERVES** ; commit/push/PR non exécutés.
+Orchestration CKC, resolver et bridge QualifyCycle restent fermés en D2-B/C —
+voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) /
+[`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) /
+[`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) /
+[`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) /
+[`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md).

 ## Lot V3.2 / V4 / V5 / V6

diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
index 23b6c6f..93ca7a2 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
@@ -2,36 +2,55 @@

 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `FRAMING LIVING — V3.1-D1 QA-G3 PASS — PR READINESS READY FOR PR — COMMIT/PUSH/PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED` |
-| **Date** | 2026-07-30 21:45:00 CEST (+0200) |
-| **Cycle courant** | 13 — PR readiness V3.1-D1 |
+| **Statut** | `FRAMING LIVING — V3.1-D2-A PR READINESS READY WITH RESERVES — QA-G3 ACCEPTED — NO COMMIT/PUSH/PR` |
+| **Date** | 2026-08-02 14:11:00 CEST (+0200) |
+| **Cycle courant** | 13 — PR readiness V3.1-D2-A |
 | **Profil** | **Critical** |
 | **Typologie** | EVOL |
-| **Gate courant** | `GO PR READINESS SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 21:37 CEST) |
-| **QA-G3 Morris** | **PASS** (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED |
-| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
-| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
-| **Rapports D1** | [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) · [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) · [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) · [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) |
-| **Docs protégées** | `12` / `13` / rapports `01`–`03` **inchangés** pendant readiness |
+| **Gate courant** | GO ACCEPT QA-G3 + PR readiness **consommé** (2026-08-02 14:01 CEST) |
+| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
+| **QA-G3 D2-A** | **ACCEPTED BY MORRIS** |
+| **PR readiness** | **READY FOR PR WITH RESERVES** — [04](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md) |
+| **Commit / push / PR** | **non exécutés** |
+| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| **Docs D2** | [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) · [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) |
+| **Package** | 20 fichiers prospectifs |
+| **D2-B** | **fermé** jusqu’à intégration D2-A + GO distinct |
+| **D2-C** | **fermé** |
+| **D2-D** | **gated** |
+| **D3** | **fermé** |
+| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |

 ## Synthèse

 | Lot | État |
 |-----|------|
-| V1 / V2 | intégrés `main` |
-| V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
-| **V3.1-D1 Delivery + correctif + revalidation** | **terminés** |
-| **QA-G3** | **PASS Morris** |
-| **PR readiness** | **READY FOR PR** — package 13 fichiers · **aucune** PR créée |
-| V3.1-D2 / D3 | **non ouverts** · Figma D3 inchangé |
-| V3.2 / V4–V6 | non autorisés |
+| V1 / V2 / V3.1-D1 | intégrés / clos `main` |
+| **V3.1-D2 FA/TA/backlog** | adoptés / validé |
+| **D2-A Delivery → QA → correctif → revalidation** | complets · R-QA-D2A-01 CLOSED |
+| **QA-G3** | **ACCEPTED BY MORRIS** |
+| **PR readiness** | **READY WITH RESERVES** |
+| **Commit/push/PR** | gates distincts requis |
+| Delivery D2-B/C | **fermées** |
+| D3 | **fermé** |

-**R-V3.1-CATALOG-01 :** contrat résolu · runtime D1 · validateur corrigé · QA-G3 PASS · orchestration **pending D2**.
+**INHERITED-R-01 (README) :** condensation framing — **ACCEPTED — STILL TRACEABLE — NOT LIFTED**.

 ## Gate candidat suivant

-`GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — USE APPROVED PR PACKAGE — TARGET MAIN — NO MERGE — NO D2 — NO UI — NO CREATECYCLE`
+```text
+GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+USE APPROVED PR PACKAGE AND COMMIT PLAN —
+TARGET MAIN —
+NO MERGE —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```

 ## Verdict

-`V3.1-D1 PR READINESS COMPLETE — READY FOR PR — QA-G3 PASS RECORDED — PR PACKAGE COMPLETE — COMMIT PUSH AND PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED`
+`V3.1-D2-A PR READINESS COMPLETE — READY FOR PR WITH CLASSIFIED RESERVES — NO BLOCKING OR MAJOR RESERVE — QA-G3 ACCEPTED — COMMIT PUSH AND PR REQUIRE DISTINCT MORRIS GO — D2-B AND D2-C REMAIN CLOSED — D3 NOT OPENED`
```

Diff untracked package (complet) :

```diff
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
new file mode 100644
index 0000000..d611410
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
@@ -0,0 +1,75 @@
+import type {
+  CycleTypeCkcMapping,
+  CycleTypeLifecycleStatus,
+} from "./cycleTypeCatalog";
+
+/** Read-only context required to select a cycle type from the D1 catalog. */
+export type CatalogSelectionContext = {
+  readonly cycleTypeId: string;
+  readonly catalogVersion: string;
+  readonly catalogHash: string;
+  readonly correlationId: string;
+};
+
+/** Closed projection of contractually relevant catalog fields for HASH-A. */
+export type CatalogFingerprintEntry = {
+  readonly cycleTypeId: string;
+  readonly canonicalKey: string;
+  readonly lifecycleStatus: CycleTypeLifecycleStatus;
+  readonly methodCycleNumber: number;
+  readonly ckc: {
+    readonly mandatory: true;
+    readonly primaryLevel: "detailed" | "synthetic";
+    readonly primaryReference: string;
+    readonly fallbackPolicy: "synthetic_map" | "none";
+    readonly fallbackReference: string | null;
+    readonly executionAuthority: false;
+    readonly doctrineStatus: "method-candidate";
+    readonly unavailableBehavior: "fail-closed";
+  };
+};
+
+/** Validated read-only D1 projection passed to the later D2-B boundary. */
+export type ValidatedCycleTypeProjection = {
+  readonly cycleTypeId: string;
+  readonly label: string;
+  readonly shortDescription: string;
+  readonly lifecycleStatus: CycleTypeLifecycleStatus;
+  readonly ckc: Readonly<CycleTypeCkcMapping>;
+  readonly catalogVersion: string;
+  readonly catalogHash: string;
+  readonly correlationId: string;
+};
+
+export type CatalogProjectionErrorCode =
+  | "CATALOG_CORRELATION_ID_REQUIRED"
+  | "CATALOG_VERSION_INCOMPATIBLE"
+  | "CATALOG_FINGERPRINT_STALE"
+  | "CYCLE_TYPE_UNKNOWN"
+  | "CYCLE_TYPE_NOT_SELECTABLE"
+  | "CYCLE_TYPE_MAPPING_INVALID";
+
+export type CatalogProjectionError = {
+  readonly code: CatalogProjectionErrorCode;
+  readonly message: string;
+  readonly blocking: true;
+  readonly retryable: boolean;
+  readonly recoverable: boolean;
+  readonly correlationId?: string;
+  readonly cycleTypeId?: string;
+  readonly lifecycleStatus?: CycleTypeLifecycleStatus;
+};
+
+export type CatalogProjectionSuccess = {
+  readonly ok: true;
+  readonly projection: ValidatedCycleTypeProjection;
+};
+
+export type CatalogProjectionFailure = {
+  readonly ok: false;
+  readonly error: CatalogProjectionError;
+};
+
+export type CatalogProjectionResult =
+  | CatalogProjectionSuccess
+  | CatalogProjectionFailure;
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
new file mode 100644
index 0000000..3c51ccc
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
@@ -0,0 +1,49 @@
+import {
+  CYCLE_TYPE_CATALOG,
+  type CycleTypeCatalog,
+} from "./cycleTypeCatalog";
+import type { CatalogFingerprintEntry } from "./ckcQualificationContracts";
+
+/** HASH-A representation format. Cryptographic verification is test-only. */
+export const CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT =
+  "sha256-canonical-json-v1" as const;
+
+/**
+ * Static, versioned HASH-A fingerprint of the canonical D1 contract projection.
+ * It is guarded by a Node-only SHA-256 test; no runtime hashing is required.
+ */
+export const CYCLE_TYPE_CATALOG_FINGERPRINT =
+  "sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc" as const;
+
+/** Build the closed, ordered projection used by the catalog fingerprint. */
+export function projectCatalogFingerprint(
+  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
+): readonly CatalogFingerprintEntry[] {
+  return Object.freeze(
+    catalog.entries.map((entry) =>
+      Object.freeze({
+        cycleTypeId: entry.cycleTypeId,
+        canonicalKey: entry.canonicalKey,
+        lifecycleStatus: entry.lifecycleStatus,
+        methodCycleNumber: entry.methodCycleNumber,
+        ckc: Object.freeze({
+          mandatory: entry.ckc.mandatory,
+          primaryLevel: entry.ckc.primaryLevel,
+          primaryReference: entry.ckc.primaryReference,
+          fallbackPolicy: entry.ckc.fallbackPolicy,
+          fallbackReference: entry.ckc.fallbackReference ?? null,
+          executionAuthority: entry.ckc.executionAuthority,
+          doctrineStatus: entry.ckc.doctrineStatus,
+          unavailableBehavior: entry.ckc.unavailableBehavior,
+        }),
+      }),
+    ),
+  );
+}
+
+/** Deterministic serialization of the canonical, fixed-property projection. */
+export function serializeCatalogFingerprint(
+  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
+): string {
+  return JSON.stringify(projectCatalogFingerprint(catalog));
+}
diff --git a/projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts b/projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
new file mode 100644
index 0000000..b436ee3
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
@@ -0,0 +1,198 @@
+import {
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_VERSION,
+  type CycleTypeCatalog,
+  type CycleTypeCkcMapping,
+  type CycleTypeDefinition,
+} from "./cycleTypeCatalog";
+import {
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  serializeCatalogFingerprint,
+} from "./catalogFingerprint";
+import type {
+  CatalogProjectionError,
+  CatalogProjectionErrorCode,
+  CatalogProjectionResult,
+  CatalogSelectionContext,
+} from "./ckcQualificationContracts";
+
+const SAFE_MESSAGES: Readonly<Record<CatalogProjectionErrorCode, string>> =
+  Object.freeze({
+    CATALOG_CORRELATION_ID_REQUIRED: "A correlation identifier is required.",
+    CATALOG_VERSION_INCOMPATIBLE: "The catalog version is incompatible.",
+    CATALOG_FINGERPRINT_STALE: "The catalog fingerprint is stale.",
+    CYCLE_TYPE_UNKNOWN: "The cycle type is unknown.",
+    CYCLE_TYPE_NOT_SELECTABLE: "The cycle type is not selectable.",
+    CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
+  });
+
+/** Canonical HASH-A serialization of the authoritative D1 catalog. */
+const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
+  serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);
+
+/**
+ * Fail-closed binding: the catalog actually used must match HASH-A.
+ * Identity with the singleton is sufficient; clones are compared by serialization.
+ */
+function catalogMatchesCanonicalFingerprint(
+  catalog: Pick<CycleTypeCatalog, "entries">,
+): boolean {
+  if (catalog === CYCLE_TYPE_CATALOG) {
+    return true;
+  }
+  try {
+    return (
+      serializeCatalogFingerprint(catalog) ===
+      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
+    );
+  } catch {
+    return false;
+  }
+}
+
+const ALLOWED_MAPPING_KEYS = new Set([
+  "mandatory",
+  "primaryLevel",
+  "primaryReference",
+  "fallbackPolicy",
+  "fallbackReference",
+  "executionAuthority",
+  "doctrineStatus",
+  "unavailableBehavior",
+]);
+
+function failure(
+  code: CatalogProjectionErrorCode,
+  context: CatalogSelectionContext,
+  options: {
+    readonly lifecycleStatus?: CycleTypeDefinition["lifecycleStatus"];
+    readonly retryable?: boolean;
+    readonly recoverable?: boolean;
+  } = {},
+): CatalogProjectionResult {
+  const error: CatalogProjectionError = Object.freeze({
+    code,
+    message: SAFE_MESSAGES[code],
+    blocking: true,
+    retryable: options.retryable ?? false,
+    recoverable: options.recoverable ?? true,
+    ...(context.correlationId.trim()
+      ? { correlationId: context.correlationId }
+      : {}),
+    ...(context.cycleTypeId ? { cycleTypeId: context.cycleTypeId } : {}),
+    ...(options.lifecycleStatus
+      ? { lifecycleStatus: options.lifecycleStatus }
+      : {}),
+  });
+  return Object.freeze({ ok: false, error });
+}
+
+function hasValidMapping(mapping: CycleTypeCkcMapping): boolean {
+  if (
+    Object.keys(mapping).some((key) => !ALLOWED_MAPPING_KEYS.has(key)) ||
+    mapping.mandatory !== true ||
+    !mapping.primaryReference.trim() ||
+    mapping.executionAuthority !== false ||
+    mapping.doctrineStatus !== "method-candidate" ||
+    mapping.unavailableBehavior !== "fail-closed"
+  ) {
+    return false;
+  }
+
+  if (mapping.primaryLevel === "detailed") {
+    return (
+      mapping.fallbackPolicy === "synthetic_map" &&
+      mapping.fallbackReference === CKC_SYNTHETIC_MAP_PATH
+    );
+  }
+
+  if (mapping.primaryLevel === "synthetic") {
+    return (
+      mapping.primaryReference === CKC_SYNTHETIC_MAP_PATH &&
+      mapping.fallbackPolicy === "none" &&
+      mapping.fallbackReference === undefined
+    );
+  }
+
+  return false;
+}
+
+function freezeMapping(
+  mapping: CycleTypeCkcMapping,
+): Readonly<CycleTypeCkcMapping> {
+  return Object.freeze({
+    mandatory: mapping.mandatory,
+    primaryLevel: mapping.primaryLevel,
+    primaryReference: mapping.primaryReference,
+    fallbackPolicy: mapping.fallbackPolicy,
+    ...(mapping.fallbackReference
+      ? { fallbackReference: mapping.fallbackReference }
+      : {}),
+    executionAuthority: mapping.executionAuthority,
+    doctrineStatus: mapping.doctrineStatus,
+    unavailableBehavior: mapping.unavailableBehavior,
+  });
+}
+
+/**
+ * Pure, fail-closed D2-A selection from the authoritative D1 catalog.
+ * The optional catalog is a pure test seam; production callers use the singleton.
+ */
+export function projectSelectableCycleType(
+  context: CatalogSelectionContext,
+  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
+): CatalogProjectionResult {
+  if (!context.correlationId.trim()) {
+    return failure("CATALOG_CORRELATION_ID_REQUIRED", context);
+  }
+  if (context.catalogVersion !== CYCLE_TYPE_CATALOG_VERSION) {
+    return failure("CATALOG_VERSION_INCOMPATIBLE", context, {
+      retryable: true,
+    });
+  }
+  if (context.catalogHash !== CYCLE_TYPE_CATALOG_FINGERPRINT) {
+    return failure("CATALOG_FINGERPRINT_STALE", context, {
+      retryable: true,
+    });
+  }
+
+  const entry = catalog.entries.find(
+    (candidate) => candidate.cycleTypeId === context.cycleTypeId,
+  );
+  if (!entry) {
+    return failure("CYCLE_TYPE_UNKNOWN", context);
+  }
+  if (entry.lifecycleStatus !== "active") {
+    return failure("CYCLE_TYPE_NOT_SELECTABLE", context, {
+      lifecycleStatus: entry.lifecycleStatus,
+    });
+  }
+  if (!entry.ckc || !hasValidMapping(entry.ckc)) {
+    return failure("CYCLE_TYPE_MAPPING_INVALID", context, {
+      lifecycleStatus: entry.lifecycleStatus,
+      recoverable: false,
+    });
+  }
+
+  // Binding after local entry checks so precise codes keep precedence.
+  if (!catalogMatchesCanonicalFingerprint(catalog)) {
+    return failure("CATALOG_FINGERPRINT_STALE", context, {
+      retryable: true,
+    });
+  }
+
+  return Object.freeze({
+    ok: true,
+    projection: Object.freeze({
+      cycleTypeId: entry.cycleTypeId,
+      label: entry.label,
+      shortDescription: entry.shortDescription,
+      lifecycleStatus: entry.lifecycleStatus,
+      ckc: freezeMapping(entry.ckc),
+      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+      correlationId: context.correlationId,
+    }),
+  });
+}
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
new file mode 100644
index 0000000..0d06190
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
@@ -0,0 +1,133 @@
+/**
+ * V3.1-D2-A — canonical catalog fingerprint tests.
+ * @vitest-environment node
+ */
+import { createHash } from "node:crypto";
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  projectCatalogFingerprint,
+  serializeCatalogFingerprint,
+  type CycleTypeCatalog,
+  type CycleTypeDefinition,
+} from "@/lib/oa/cycle";
+
+function cloneCatalog(
+  mutate?: (entries: CycleTypeDefinition[]) => void,
+): CycleTypeCatalog {
+  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+    ...entry,
+    ckc: { ...entry.ckc },
+    aliases: [...entry.aliases],
+  }));
+  mutate?.(entries);
+  return { version: CYCLE_TYPE_CATALOG.version, entries };
+}
+
+function sha256(serialized: string): string {
+  return `sha256:${createHash("sha256").update(serialized).digest("hex")}`;
+}
+
+describe("V3.1-D2-A catalog fingerprint", () => {
+  it("projects exactly fifteen entries in contractual order", () => {
+    const projection = projectCatalogFingerprint();
+    expect(projection).toHaveLength(15);
+    expect(projection.map((entry) => entry.cycleTypeId)).toEqual(
+      CYCLE_TYPE_CATALOG.entries.map((entry) => entry.cycleTypeId),
+    );
+  });
+
+  it("includes only the closed contractual field set", () => {
+    for (const entry of projectCatalogFingerprint()) {
+      expect(Object.keys(entry)).toEqual([
+        "cycleTypeId",
+        "canonicalKey",
+        "lifecycleStatus",
+        "methodCycleNumber",
+        "ckc",
+      ]);
+      expect(Object.keys(entry.ckc)).toEqual([
+        "mandatory",
+        "primaryLevel",
+        "primaryReference",
+        "fallbackPolicy",
+        "fallbackReference",
+        "executionAuthority",
+        "doctrineStatus",
+        "unavailableBehavior",
+      ]);
+      expect(entry).not.toHaveProperty("label");
+      expect(entry).not.toHaveProperty("shortDescription");
+      expect(entry).not.toHaveProperty("displayOrder");
+      expect(entry).not.toHaveProperty("methodReference");
+      expect(entry).not.toHaveProperty("aliases");
+    }
+  });
+
+  it("serializes deterministically and matches the static SHA-256", () => {
+    const first = serializeCatalogFingerprint();
+    const second = serializeCatalogFingerprint();
+    expect(second).toBe(first);
+    expect(sha256(first)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
+    expect(CYCLE_TYPE_CATALOG_FINGERPRINT).toMatch(/^sha256:[0-9a-f]{64}$/);
+  });
+
+  it("detects a contractual field change", () => {
+    const changed = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        canonicalKey: `${entries[0].canonicalKey}-changed`,
+      };
+    });
+    expect(sha256(serializeCatalogFingerprint(changed))).not.toBe(
+      CYCLE_TYPE_CATALOG_FINGERPRINT,
+    );
+  });
+
+  it("ignores label and shortDescription changes", () => {
+    const changed = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        label: "Changed presentation",
+        shortDescription: "Changed description",
+      };
+    });
+    expect(serializeCatalogFingerprint(changed)).toBe(
+      serializeCatalogFingerprint(),
+    );
+  });
+
+  it("normalizes absent fallbackReference to explicit null", () => {
+    const synthetic = projectCatalogFingerprint().find(
+      (entry) => entry.ckc.primaryLevel === "synthetic",
+    );
+    expect(synthetic?.ckc.fallbackReference).toBeNull();
+    expect(serializeCatalogFingerprint()).toContain(
+      '"fallbackReference":null',
+    );
+  });
+
+  it("returns frozen projections without mutating the D1 catalog", () => {
+    const before = serializeCatalogFingerprint();
+    const projection = projectCatalogFingerprint();
+    expect(Object.isFrozen(projection)).toBe(true);
+    expect(projection.every(Object.isFrozen)).toBe(true);
+    expect(projection.every((entry) => Object.isFrozen(entry.ckc))).toBe(true);
+    expect(serializeCatalogFingerprint()).toBe(before);
+  });
+
+  it("keeps production fingerprint code client-safe and dependency-free", () => {
+    const source = readFileSync(
+      path.resolve(
+        __dirname,
+        "../../../lib/oa/cycle/domain/catalogFingerprint.ts",
+      ),
+      "utf8",
+    );
+    expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
+    expect(source).not.toMatch(/infrastructure\//);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
new file mode 100644
index 0000000..a744504
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
@@ -0,0 +1,269 @@
+/**
+ * V3.1-D2-A — pure fail-closed catalog projection tests.
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  CYCLE_TYPE_CATALOG_VERSION,
+  projectSelectableCycleType,
+  serializeCatalogFingerprint,
+  type CatalogProjectionErrorCode,
+  type CatalogSelectionContext,
+  type CycleTypeCatalog,
+  type CycleTypeDefinition,
+} from "@/lib/oa/cycle";
+
+function context(
+  overrides: Partial<CatalogSelectionContext> = {},
+): CatalogSelectionContext {
+  return {
+    cycleTypeId: "cyc:delivery",
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: "cor:d2-a-test",
+    ...overrides,
+  };
+}
+
+function cloneCatalog(
+  mutate: (entries: CycleTypeDefinition[]) => void,
+): CycleTypeCatalog {
+  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+    ...entry,
+    ckc: { ...entry.ckc },
+    aliases: [...entry.aliases],
+  }));
+  mutate(entries);
+  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
+}
+
+function expectFailure(
+  result: ReturnType<typeof projectSelectableCycleType>,
+  code: CatalogProjectionErrorCode,
+): void {
+  expect(result.ok).toBe(false);
+  if (result.ok) throw new Error("Expected catalog projection failure");
+  expect(result.error.code).toBe(code);
+  expect(result.error.blocking).toBe(true);
+  expect(result).not.toHaveProperty("projection");
+  expect(result.error).not.toHaveProperty("projection");
+  expect(result.error).not.toHaveProperty("ckc");
+}
+
+describe("V3.1-D2-A catalog projection", () => {
+  it("projects an active type and preserves canonical context", () => {
+    const result = projectSelectableCycleType(context());
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error(result.error.message);
+    expect(result.projection).toMatchObject({
+      cycleTypeId: "cyc:delivery",
+      label: "Delivery / implémentation",
+      lifecycleStatus: "active",
+      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+      correlationId: "cor:d2-a-test",
+    });
+    expect(result.projection.ckc).toMatchObject({
+      mandatory: true,
+      primaryLevel: "synthetic",
+      primaryReference: CKC_SYNTHETIC_MAP_PATH,
+      fallbackPolicy: "none",
+      executionAuthority: false,
+      doctrineStatus: "method-candidate",
+      unavailableBehavior: "fail-closed",
+    });
+    expect(Object.isFrozen(result.projection)).toBe(true);
+    expect(Object.isFrozen(result.projection.ckc)).toBe(true);
+  });
+
+  it("rejects an absent correlationId first", () => {
+    expectFailure(
+      projectSelectableCycleType(
+        context({
+          correlationId: "  ",
+          catalogVersion: "wrong",
+          catalogHash: "wrong",
+          cycleTypeId: "cyc:unknown",
+        }),
+      ),
+      "CATALOG_CORRELATION_ID_REQUIRED",
+    );
+  });
+
+  it("rejects an incompatible catalog version", () => {
+    expectFailure(
+      projectSelectableCycleType(context({ catalogVersion: "stale" })),
+      "CATALOG_VERSION_INCOMPATIBLE",
+    );
+  });
+
+  it("rejects a stale catalog fingerprint", () => {
+    expectFailure(
+      projectSelectableCycleType(
+        context({ catalogHash: `sha256:${"0".repeat(64)}` }),
+      ),
+      "CATALOG_FINGERPRINT_STALE",
+    );
+  });
+
+  it("rejects an unknown cycle type", () => {
+    expectFailure(
+      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
+      "CYCLE_TYPE_UNKNOWN",
+    );
+  });
+
+  it.each(["deprecated", "unavailable"] as const)(
+    "rejects lifecycle %s",
+    (lifecycleStatus) => {
+      const catalog = cloneCatalog((entries) => {
+        entries[7] = { ...entries[7], lifecycleStatus };
+      });
+      const result = projectSelectableCycleType(context(), catalog);
+      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
+      if (!result.ok) {
+        expect(result.error.lifecycleStatus).toBe(lifecycleStatus);
+      }
+    },
+  );
+
+  it("fails closed for an unknown runtime lifecycle status", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        lifecycleStatus:
+          "future-status" as CycleTypeDefinition["lifecycleStatus"],
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_NOT_SELECTABLE",
+    );
+  });
+
+  it("rejects mandatory false", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          mandatory: false as unknown as true,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects executionAuthority true", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          executionAuthority: true as unknown as false,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects invalid doctrineStatus and unavailableBehavior", () => {
+    for (const field of ["doctrineStatus", "unavailableBehavior"] as const) {
+      const catalog = cloneCatalog((entries) => {
+        entries[7] = {
+          ...entries[7],
+          ckc: { ...entries[7].ckc, [field]: "invalid" },
+        } as CycleTypeDefinition;
+      });
+      expectFailure(
+        projectSelectableCycleType(context(), catalog),
+        "CYCLE_TYPE_MAPPING_INVALID",
+      );
+    }
+  });
+
+  it("rejects a detailed mapping without canonical fallback", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          fallbackPolicy: "none",
+          fallbackReference: undefined,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(
+        context({ cycleTypeId: "cyc:framing" }),
+        catalog,
+      ),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects a synthetic mapping with a non-canonical reference", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          primaryReference: "method/non-canonical.md",
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects an extended mapping", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          dynamicResolution: true,
+        } as CycleTypeDefinition["ckc"],
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("does not expose profile, Morris decision, or partial failure data", () => {
+    const success = projectSelectableCycleType(context());
+    expect(success.ok).toBe(true);
+    if (!success.ok) throw new Error(success.error.message);
+    expect(success.projection).not.toHaveProperty("profile");
+    expect(success.projection).not.toHaveProperty("recommendedProfile");
+    expect(success.projection).not.toHaveProperty("isMorrisDecision");
+    expect(success.projection).not.toHaveProperty("consumed");
+
+    const failure = projectSelectableCycleType(
+      context({ cycleTypeId: "cyc:unknown" }),
+    );
+    expectFailure(failure, "CYCLE_TYPE_UNKNOWN");
+  });
+
+  it("does not mutate the production catalog", () => {
+    const before = serializeCatalogFingerprint();
+    const firstEntry = CYCLE_TYPE_CATALOG.entries[0];
+    projectSelectableCycleType(context());
+    expect(serializeCatalogFingerprint()).toBe(before);
+    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(firstEntry);
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG.entries[0])).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
new file mode 100644
index 0000000..aa91cc5
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
@@ -0,0 +1,317 @@
+/**
+ * V3.1-D2-A — Independent QA reinforcement for HASH-A fingerprint.
+ * Production and Delivery tests must remain untouched.
+ * @vitest-environment node
+ */
+import { createHash } from "node:crypto";
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT,
+  projectCatalogFingerprint,
+  serializeCatalogFingerprint,
+  type CycleTypeCatalog,
+  type CycleTypeDefinition,
+} from "@/lib/oa/cycle";
+
+function cloneCatalog(
+  mutate?: (entries: CycleTypeDefinition[]) => void,
+): CycleTypeCatalog {
+  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+    ...entry,
+    ckc: { ...entry.ckc },
+    aliases: [...entry.aliases],
+  }));
+  mutate?.(entries);
+  return { version: CYCLE_TYPE_CATALOG.version, entries };
+}
+
+function sha256(serialized: string): string {
+  return `sha256:${createHash("sha256").update(serialized).digest("hex")}`;
+}
+
+describe("V3.1-D2-A QA — catalog fingerprint", () => {
+  it("uses the exact HASH-A format sha256:<64 lowercase hex>", () => {
+    expect(CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT).toBe(
+      "sha256-canonical-json-v1",
+    );
+    expect(CYCLE_TYPE_CATALOG_FINGERPRINT).toMatch(/^sha256:[0-9a-f]{64}$/);
+  });
+
+  it("recomputes SHA-256 from serializeCatalogFingerprint reproducibly", () => {
+    const first = serializeCatalogFingerprint();
+    const second = serializeCatalogFingerprint();
+    expect(second).toBe(first);
+    expect(sha256(first)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
+    expect(sha256(second)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
+  });
+
+  it("projects fifteen entries in contractual order with frozen structure", () => {
+    const projection = projectCatalogFingerprint();
+    expect(projection).toHaveLength(15);
+    expect(projection.map((entry) => entry.cycleTypeId)).toEqual(
+      CYCLE_TYPE_CATALOG.entries.map((entry) => entry.cycleTypeId),
+    );
+    expect(Object.isFrozen(projection)).toBe(true);
+    for (const entry of projection) {
+      expect(Object.isFrozen(entry)).toBe(true);
+      expect(Object.isFrozen(entry.ckc)).toBe(true);
+    }
+  });
+
+  it("refuses or ignores mutation of the fingerprint projection", () => {
+    const projection = projectCatalogFingerprint();
+    const originalId = projection[0].cycleTypeId;
+    expect(() => {
+      (projection as unknown as CatalogFingerprintEntryMutable[])[0] = {
+        ...projection[0],
+        cycleTypeId: "cyc:tampered",
+      };
+    }).toThrow();
+    expect(() => {
+      (projection[0] as { cycleTypeId: string }).cycleTypeId = "cyc:tampered";
+    }).toThrow();
+    expect(() => {
+      (projection[0].ckc as { primaryReference: string }).primaryReference =
+        "method/tampered.md";
+    }).toThrow();
+    expect(projection[0].cycleTypeId).toBe(originalId);
+  });
+
+  it.each([
+    [
+      "cycleTypeId",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        cycleTypeId: `${entry.cycleTypeId}-x`,
+      }),
+    ],
+    [
+      "canonicalKey",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        canonicalKey: `${entry.canonicalKey}-x`,
+      }),
+    ],
+    [
+      "lifecycleStatus",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        lifecycleStatus: "deprecated",
+      }),
+    ],
+    [
+      "methodCycleNumber",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        methodCycleNumber: (entry.methodCycleNumber % 15) + 1,
+      }),
+    ],
+    [
+      "mandatory",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: { ...entry.ckc, mandatory: false as unknown as true },
+      }),
+    ],
+    [
+      "primaryLevel",
+      (entry: CycleTypeDefinition): CycleTypeDefinition =>
+        entry.ckc.primaryLevel === "detailed"
+          ? {
+              ...entry,
+              ckc: {
+                mandatory: true,
+                primaryLevel: "synthetic",
+                primaryReference:
+                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
+                fallbackPolicy: "none",
+                executionAuthority: false,
+                doctrineStatus: "method-candidate",
+                unavailableBehavior: "fail-closed",
+              },
+            }
+          : {
+              ...entry,
+              ckc: {
+                mandatory: true,
+                primaryLevel: "detailed",
+                primaryReference: entry.ckc.primaryReference,
+                fallbackPolicy: "synthetic_map",
+                fallbackReference:
+                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
+                executionAuthority: false,
+                doctrineStatus: "method-candidate",
+                unavailableBehavior: "fail-closed",
+              },
+            },
+    ],
+    [
+      "primaryReference",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          primaryReference: `${entry.ckc.primaryReference}-x`,
+        },
+      }),
+    ],
+    [
+      "fallbackPolicy",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          fallbackPolicy:
+            entry.ckc.fallbackPolicy === "none" ? "synthetic_map" : "none",
+        },
+      }),
+    ],
+    [
+      "fallbackReference",
+      (entry: CycleTypeDefinition): CycleTypeDefinition =>
+        entry.ckc.fallbackReference === undefined
+          ? {
+              ...entry,
+              ckc: {
+                ...entry.ckc,
+                fallbackReference:
+                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
+              },
+            }
+          : {
+              ...entry,
+              ckc: {
+                mandatory: entry.ckc.mandatory,
+                primaryLevel: entry.ckc.primaryLevel,
+                primaryReference: entry.ckc.primaryReference,
+                fallbackPolicy: entry.ckc.fallbackPolicy,
+                executionAuthority: entry.ckc.executionAuthority,
+                doctrineStatus: entry.ckc.doctrineStatus,
+                unavailableBehavior: entry.ckc.unavailableBehavior,
+              },
+            },
+    ],
+    [
+      "executionAuthority",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          executionAuthority: true as unknown as false,
+        },
+      }),
+    ],
+    [
+      "doctrineStatus",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          doctrineStatus: "baseline" as "method-candidate",
+        },
+      }),
+    ],
+    [
+      "unavailableBehavior",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          unavailableBehavior: "soft-fail" as "fail-closed",
+        },
+      }),
+    ],
+  ])("detects contractual field change: %s", (_field, mutateEntry) => {
+    const changed = cloneCatalog((entries) => {
+      entries[0] = mutateEntry(entries[0]);
+    });
+    expect(serializeCatalogFingerprint(changed)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expect(sha256(serializeCatalogFingerprint(changed))).not.toBe(
+      CYCLE_TYPE_CATALOG_FINGERPRINT,
+    );
+  });
+
+  it.each([
+    ["label", { label: "Changed label" }],
+    ["shortDescription", { shortDescription: "Changed description" }],
+    ["displayOrder", { displayOrder: 99 }],
+    ["methodReference", { methodReference: "method/changed.md §9.9" }],
+    ["aliases", { aliases: ["alias:changed"] }],
+  ] as const)("ignores excluded field change: %s", (_field, patch) => {
+    const changed = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], ...patch };
+    });
+    expect(serializeCatalogFingerprint(changed)).toBe(
+      serializeCatalogFingerprint(),
+    );
+    expect(sha256(serializeCatalogFingerprint(changed))).toBe(
+      CYCLE_TYPE_CATALOG_FINGERPRINT,
+    );
+  });
+
+  it("normalizes absent fallbackReference to explicit null", () => {
+    const synthetic = projectCatalogFingerprint().find(
+      (entry) => entry.ckc.primaryLevel === "synthetic",
+    );
+    expect(synthetic?.ckc.fallbackReference).toBeNull();
+    expect(serializeCatalogFingerprint()).toContain('"fallbackReference":null');
+  });
+
+  it("detects reordering of contractual entries", () => {
+    const reordered: CycleTypeCatalog = {
+      version: CYCLE_TYPE_CATALOG.version,
+      entries: [
+        ...CYCLE_TYPE_CATALOG.entries.slice(1, 2),
+        ...CYCLE_TYPE_CATALOG.entries.slice(0, 1),
+        ...CYCLE_TYPE_CATALOG.entries.slice(2),
+      ].map((entry) => ({
+        ...entry,
+        ckc: { ...entry.ckc },
+        aliases: [...entry.aliases],
+      })),
+    };
+    expect(serializeCatalogFingerprint(reordered)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expect(sha256(serializeCatalogFingerprint(reordered))).not.toBe(
+      CYCLE_TYPE_CATALOG_FINGERPRINT,
+    );
+  });
+
+  it("does not mutate the authoritative D1 catalog", () => {
+    const before = serializeCatalogFingerprint();
+    const first = CYCLE_TYPE_CATALOG.entries[0];
+    projectCatalogFingerprint();
+    serializeCatalogFingerprint();
+    expect(serializeCatalogFingerprint()).toBe(before);
+    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
+    expect(Object.isFrozen(first)).toBe(true);
+  });
+
+  it("keeps production fingerprint module free of crypto, fs, Next and infra", () => {
+    const source = readFileSync(
+      path.resolve(
+        __dirname,
+        "../../../lib/oa/cycle/domain/catalogFingerprint.ts",
+      ),
+      "utf8",
+    );
+    expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
+    expect(source).not.toMatch(/infrastructure\//);
+  });
+});
+
+type CatalogFingerprintEntryMutable = {
+  cycleTypeId: string;
+  canonicalKey: string;
+  lifecycleStatus: string;
+  methodCycleNumber: number;
+  ckc: Record<string, unknown>;
+};
diff --git a/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
new file mode 100644
index 0000000..1ba9408
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
@@ -0,0 +1,662 @@
+/**
+ * V3.1-D2-A — Independent QA reinforcement for Catalog Projection.
+ * Production and Delivery tests must remain untouched.
+ * Evidence of public seam / fingerprint binding defects must stay failing.
+ * @vitest-environment node
+ */
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  ADOPTED_CYCLE_TYPE_IDS,
+  CKC_PILOT_CADRAGE_PATH,
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  CYCLE_TYPE_CATALOG_VERSION,
+  projectSelectableCycleType,
+  serializeCatalogFingerprint,
+  type CatalogProjectionErrorCode,
+  type CatalogSelectionContext,
+  type CycleTypeCatalog,
+  type CycleTypeDefinition,
+} from "@/lib/oa/cycle";
+
+function context(
+  overrides: Partial<CatalogSelectionContext> = {},
+): CatalogSelectionContext {
+  return {
+    cycleTypeId: "cyc:delivery",
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: "cor:d2-a-qa",
+    ...overrides,
+  };
+}
+
+function cloneCatalog(
+  mutate: (entries: CycleTypeDefinition[]) => void,
+): CycleTypeCatalog {
+  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+    ...entry,
+    ckc: { ...entry.ckc },
+    aliases: [...entry.aliases],
+  }));
+  mutate(entries);
+  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
+}
+
+function expectFailure(
+  result: ReturnType<typeof projectSelectableCycleType>,
+  code: CatalogProjectionErrorCode,
+): void {
+  expect(result.ok).toBe(false);
+  if (result.ok) {
+    throw new Error(`Expected failure ${code}, got success`);
+  }
+  expect(result.error.code).toBe(code);
+  expect(result.error.blocking).toBe(true);
+  expect(typeof result.error.message).toBe("string");
+  expect(result.error.message.length).toBeGreaterThan(0);
+  expect(result).not.toHaveProperty("projection");
+  expect(result.error).not.toHaveProperty("projection");
+  expect(result.error).not.toHaveProperty("ckc");
+}
+
+function expectPublicRejectsDivergentCatalog(
+  catalog: CycleTypeCatalog,
+  cycleTypeId = "cyc:delivery",
+): void {
+  const result = projectSelectableCycleType(context({ cycleTypeId }), catalog);
+  // INV-D2A-11/12: public API must not accept a contractually divergent catalog
+  // while still validating the static canonical fingerprint.
+  expect(result.ok).toBe(false);
+  if (result.ok) {
+    throw new Error(
+      "Public Catalog Projection accepted a divergent catalog with canonical fingerprint",
+    );
+  }
+}
+
+describe("V3.1-D2-A QA — Catalog Projection nominals", () => {
+  it("projects every active adopted cycle type with frozen read-only success", () => {
+    for (const cycleTypeId of ADOPTED_CYCLE_TYPE_IDS) {
+      const result = projectSelectableCycleType(context({ cycleTypeId }));
+      expect(result.ok).toBe(true);
+      if (!result.ok) throw new Error(result.error.message);
+      const production = CYCLE_TYPE_CATALOG.entries.find(
+        (entry) => entry.cycleTypeId === cycleTypeId,
+      )!;
+      expect(result.projection).toMatchObject({
+        cycleTypeId,
+        label: production.label,
+        shortDescription: production.shortDescription,
+        lifecycleStatus: "active",
+        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+        correlationId: "cor:d2-a-qa",
+      });
+      expect(result.projection.ckc).toEqual(production.ckc);
+      expect(Object.isFrozen(result)).toBe(true);
+      expect(Object.isFrozen(result.projection)).toBe(true);
+      expect(Object.isFrozen(result.projection.ckc)).toBe(true);
+      expect(result.projection).not.toHaveProperty("profile");
+      expect(result.projection).not.toHaveProperty("recommendedProfile");
+      expect(result.projection).not.toHaveProperty("gate");
+      expect(result.projection).not.toHaveProperty("consumed");
+      expect(result.projection).not.toHaveProperty("isMorrisDecision");
+    }
+  });
+});
+
+describe("V3.1-D2-A QA — fail-closed priority and exact variants", () => {
+  it("rejects empty/whitespace correlationId before other checks", () => {
+    expectFailure(
+      projectSelectableCycleType(
+        context({
+          correlationId: "   ",
+          catalogVersion: "wrong",
+          catalogHash: "wrong",
+          cycleTypeId: "cyc:unknown",
+        }),
+      ),
+      "CATALOG_CORRELATION_ID_REQUIRED",
+    );
+  });
+
+  it("rejects incompatible version before fingerprint", () => {
+    expectFailure(
+      projectSelectableCycleType(
+        context({
+          catalogVersion: "stale",
+          catalogHash: "wrong",
+          cycleTypeId: "cyc:unknown",
+        }),
+      ),
+      "CATALOG_VERSION_INCOMPATIBLE",
+    );
+  });
+
+  it("rejects stale fingerprint before type lookup", () => {
+    expectFailure(
+      projectSelectableCycleType(
+        context({
+          catalogHash: `sha256:${"0".repeat(64)}`,
+          cycleTypeId: "cyc:unknown",
+        }),
+      ),
+      "CATALOG_FINGERPRINT_STALE",
+    );
+  });
+
+  it("rejects unknown type before lifecycle/mapping", () => {
+    expectFailure(
+      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
+      "CYCLE_TYPE_UNKNOWN",
+    );
+  });
+
+  it.each([
+    ["version whitespace", { catalogVersion: ` ${CYCLE_TYPE_CATALOG_VERSION}` }],
+    ["version case", { catalogVersion: CYCLE_TYPE_CATALOG_VERSION.toUpperCase() }],
+    [
+      "version suffix",
+      { catalogVersion: `${CYCLE_TYPE_CATALOG_VERSION}-extra` },
+    ],
+  ] as const)("rejects version variant: %s", (_label, overrides) => {
+    expectFailure(
+      projectSelectableCycleType(context(overrides)),
+      "CATALOG_VERSION_INCOMPATIBLE",
+    );
+  });
+
+  it.each([
+    [
+      "hash whitespace",
+      { catalogHash: ` ${CYCLE_TYPE_CATALOG_FINGERPRINT}` },
+    ],
+    [
+      "hash uppercase",
+      { catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT.toUpperCase() },
+    ],
+    ["hash wrong prefix", { catalogHash: `md5:${"a".repeat(64)}` }],
+    ["hash short", { catalogHash: `sha256:${"a".repeat(63)}` }],
+  ] as const)("rejects fingerprint variant: %s", (_label, overrides) => {
+    expectFailure(
+      projectSelectableCycleType(context(overrides)),
+      "CATALOG_FINGERPRINT_STALE",
+    );
+  });
+
+  it("rejects empty cycleTypeId and propagates valid correlationId on failure", () => {
+    const result = projectSelectableCycleType(context({ cycleTypeId: "" }));
+    expectFailure(result, "CYCLE_TYPE_UNKNOWN");
+    if (!result.ok) {
+      expect(result.error.correlationId).toBe("cor:d2-a-qa");
+    }
+  });
+});
+
+describe("V3.1-D2-A QA — lifecycle and mapping negatives", () => {
+  it.each(["deprecated", "unavailable", "future-status"] as const)(
+    "rejects lifecycle %s",
+    (lifecycleStatus) => {
+      const catalog = cloneCatalog((entries) => {
+        entries[7] = {
+          ...entries[7],
+          lifecycleStatus:
+            lifecycleStatus as CycleTypeDefinition["lifecycleStatus"],
+        };
+      });
+      const result = projectSelectableCycleType(context(), catalog);
+      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
+    },
+  );
+
+  it("rejects mandatory=false", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: { ...entries[7].ckc, mandatory: false as unknown as true },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects unknown primaryLevel", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          primaryLevel: "unknown" as "synthetic",
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects empty/whitespace primaryReference", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: { ...entries[7].ckc, primaryReference: "  " },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects executionAuthority=true", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          executionAuthority: true as unknown as false,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects invalid doctrineStatus and unavailableBehavior", () => {
+    for (const field of ["doctrineStatus", "unavailableBehavior"] as const) {
+      const catalog = cloneCatalog((entries) => {
+        entries[7] = {
+          ...entries[7],
+          ckc: { ...entries[7].ckc, [field]: "invalid" },
+        } as CycleTypeDefinition;
+      });
+      expectFailure(
+        projectSelectableCycleType(context(), catalog),
+        "CYCLE_TYPE_MAPPING_INVALID",
+      );
+    }
+  });
+
+  it("rejects detailed mappings without canonical fallback", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          fallbackPolicy: "none",
+          fallbackReference: undefined,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(
+        context({ cycleTypeId: "cyc:framing" }),
+        catalog,
+      ),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects detailed with wrong fallbackPolicy or fallbackReference", () => {
+    const wrongPolicy = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: { ...entries[0].ckc, fallbackPolicy: "none" },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(
+        context({ cycleTypeId: "cyc:framing" }),
+        wrongPolicy,
+      ),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+
+    const wrongRef = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          fallbackReference:
+            "method/wrong.md" as typeof CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(
+        context({ cycleTypeId: "cyc:framing" }),
+        wrongRef,
+      ),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference", () => {
+    const badPrimary = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          primaryReference: "method/non-canonical.md",
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), badPrimary),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+
+    const badPolicy = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: { ...entries[7].ckc, fallbackPolicy: "synthetic_map" },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), badPolicy),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+
+    const badFallback = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), badFallback),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+
+    const emptyFallback = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          fallbackReference: "" as unknown as typeof CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), emptyFallback),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects extended mapping properties", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          dynamicResolution: true,
+        } as CycleTypeDefinition["ckc"],
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+});
+
+describe("V3.1-D2-A QA — error contract", () => {
+  it("covers the six documented error codes with blocking safe failures", () => {
+    const cases: Array<[CatalogProjectionErrorCode, () => ReturnType<typeof projectSelectableCycleType>]> =
+      [
+        [
+          "CATALOG_CORRELATION_ID_REQUIRED",
+          () => projectSelectableCycleType(context({ correlationId: "" })),
+        ],
+        [
+          "CATALOG_VERSION_INCOMPATIBLE",
+          () => projectSelectableCycleType(context({ catalogVersion: "x" })),
+        ],
+        [
+          "CATALOG_FINGERPRINT_STALE",
+          () =>
+            projectSelectableCycleType(
+              context({ catalogHash: `sha256:${"1".repeat(64)}` }),
+            ),
+        ],
+        [
+          "CYCLE_TYPE_UNKNOWN",
+          () =>
+            projectSelectableCycleType(context({ cycleTypeId: "cyc:missing" })),
+        ],
+        [
+          "CYCLE_TYPE_NOT_SELECTABLE",
+          () =>
+            projectSelectableCycleType(
+              context(),
+              cloneCatalog((entries) => {
+                entries[7] = { ...entries[7], lifecycleStatus: "deprecated" };
+              }),
+            ),
+        ],
+        [
+          "CYCLE_TYPE_MAPPING_INVALID",
+          () =>
+            projectSelectableCycleType(
+              context(),
+              cloneCatalog((entries) => {
+                entries[7] = {
+                  ...entries[7],
+                  ckc: {
+                    ...entries[7].ckc,
+                    executionAuthority: true as unknown as false,
+                  },
+                };
+              }),
+            ),
+        ],
+      ];
+
+    for (const [code, run] of cases) {
+      const result = run();
+      expectFailure(result, code);
+      if (!result.ok) {
+        expect(Object.isFrozen(result)).toBe(true);
+        expect(Object.isFrozen(result.error)).toBe(true);
+      }
+    }
+  });
+
+  it("documents retryable/recoverable classification for catalog stale errors", () => {
+    const version = projectSelectableCycleType(
+      context({ catalogVersion: "wrong" }),
+    );
+    const hash = projectSelectableCycleType(
+      context({ catalogHash: `sha256:${"2".repeat(64)}` }),
+    );
+    expect(version.ok).toBe(false);
+    expect(hash.ok).toBe(false);
+    if (!version.ok && !hash.ok) {
+      expect(version.error.retryable).toBe(true);
+      expect(hash.error.retryable).toBe(true);
+      expect(version.error.recoverable).toBe(true);
+      expect(hash.error.recoverable).toBe(true);
+    }
+  });
+});
+
+describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () => {
+  it("exposes the catalog seam on the public API signature", () => {
+    // JS Function.length ignores parameters with defaults; inspect source instead.
+    const source = readFileSync(
+      path.resolve(
+        __dirname,
+        "../../../lib/oa/cycle/domain/catalogProjection.ts",
+      ),
+      "utf8",
+    );
+    expect(source).toMatch(
+      /export function projectSelectableCycleType\(\s*context: CatalogSelectionContext,\s*catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,/,
+    );
+    const indexSource = readFileSync(
+      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
+      "utf8",
+    );
+    expect(indexSource).toContain(
+      'export * from "./domain/catalogProjection";',
+    );
+  });
+
+  it("rejects a catalog with modified canonicalKey under canonical fingerprint", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        canonicalKey: `${entries[7].canonicalKey}-divergent`,
+      };
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog);
+  });
+
+  it("rejects a catalog with modified methodCycleNumber under canonical fingerprint", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = { ...entries[7], methodCycleNumber: 99 };
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog);
+  });
+
+  it("rejects a catalog with swapped still-valid contractual CKC mapping", () => {
+    const catalog = cloneCatalog((entries) => {
+      // Convert synthetic delivery into a still-valid detailed mapping that
+      // differs from the authoritative D1 contract for cyc:delivery.
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          mandatory: true,
+          primaryLevel: "detailed",
+          primaryReference: CKC_PILOT_CADRAGE_PATH,
+          fallbackPolicy: "synthetic_map",
+          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+          executionAuthority: false,
+          doctrineStatus: "method-candidate",
+          unavailableBehavior: "fail-closed",
+        },
+      };
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    const result = projectSelectableCycleType(context(), catalog);
+    expect(result.ok).toBe(false);
+    if (result.ok) {
+      // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
+      expect(result.projection.ckc.primaryLevel).not.toBe("detailed");
+    }
+  });
+
+  it("rejects a reordered catalog under canonical fingerprint", () => {
+    const catalog: CycleTypeCatalog = {
+      version: CYCLE_TYPE_CATALOG_VERSION,
+      entries: [
+        ...CYCLE_TYPE_CATALOG.entries.slice(1, 2),
+        ...CYCLE_TYPE_CATALOG.entries.slice(0, 1),
+        ...CYCLE_TYPE_CATALOG.entries.slice(2),
+      ].map((entry) => ({
+        ...entry,
+        ckc: { ...entry.ckc },
+        aliases: [...entry.aliases],
+      })),
+    };
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog, "cyc:framing");
+  });
+
+  it("rejects a catalog with an extra entry under canonical fingerprint", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries.push({
+        ...entries[0],
+        cycleTypeId: "cyc:extra-qa",
+        canonicalKey: "extra-qa",
+        methodCycleNumber: 16,
+        displayOrder: 16,
+      });
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog);
+  });
+
+  it("rejects a catalog missing an entry under canonical fingerprint", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries.splice(14, 1);
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog);
+  });
+});
+
+describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
+  it("keeps index.ts limited to the three additive D2-A exports", () => {
+    const source = readFileSync(
+      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
+      "utf8",
+    );
+    expect(source).toContain(
+      'export * from "./domain/ckcQualificationContracts";',
+    );
+    expect(source).toContain('export * from "./domain/catalogFingerprint";');
+    expect(source).toContain('export * from "./domain/catalogProjection";');
+    expect(source).not.toMatch(
+      /ckcQualificationResolver|ConsumptionProof|QualifyCycleBridge|createD2|D2Factory/,
+    );
+  });
+
+  it("keeps production projection free of D2-B/C and runtime I/O imports", () => {
+    for (const relative of [
+      "ckcQualificationContracts.ts",
+      "catalogFingerprint.ts",
+      "catalogProjection.ts",
+    ]) {
+      const source = readFileSync(
+        path.resolve(__dirname, `../../../lib/oa/cycle/domain/${relative}`),
+        "utf8",
+      );
+      expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
+      expect(source).not.toMatch(/infrastructure\//);
+      expect(source).not.toMatch(
+        /QualifyCycle|ResolveCycleKnowledgeContract|CkcResolverPort|CycleAuditEvent|CreateCycle|consumed|recommendedProfile|isMorrisDecision/,
+      );
+    }
+  });
+
+  it("does not mutate production catalog entries across calls", () => {
+    const before = serializeCatalogFingerprint();
+    const first = CYCLE_TYPE_CATALOG.entries[0];
+    const firstCkc = first.ckc;
+    projectSelectableCycleType(context());
+    projectSelectableCycleType(context({ cycleTypeId: "cyc:framing" }));
+    expect(serializeCatalogFingerprint()).toBe(before);
+    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
+    expect(CYCLE_TYPE_CATALOG.entries[0].ckc).toBe(firstCkc);
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
+    expect(Object.isFrozen(first)).toBe(true);
+    expect(Object.isFrozen(firstCkc)).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
new file mode 100644
index 0000000..c09f234
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
@@ -0,0 +1,547 @@
+# 15 — V3.1-D2 Cadrage — CKC Resolver & QualifyCycle Bridge
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-08-01 14:34:28 CEST (+0200) |
+| **Cycle projet** | 1 — Cadrage |
+| **Profil SFIA** | Standard |
+| **Typologie** | DOC |
+| **Gate Morris consommé** | Formulation Morris : « après c'est logique que D1 ne couvre pas l'ensemble mais si elle respecte la doctrine 3.0 c'est ok, donc ok pour lancer le cadrage de D2 » — interprétation bornée : `GO CADRAGE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE — …` (2026-08-01 14:03 CEST +0200) |
+| **Branche locale** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
+| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| **CKC (ce cycle)** | Pilote détaillé `pilots/01-cadrage.md` · method-candidate · consommation obligatoire · `executionAuthority=false` |
+| **Statut documentaire** | `V3.1-D2 FRAMING ARBITRATED — FUNCTIONAL DESIGN AUTHORIZED — D-V3.1-D2-01…12 ADOPTED BY MORRIS — NO ARCHITECTURE — NO DELIVERY` |
+| **Code / Delivery / D3 / UI / Figma / CreateCycle** | **non** |
+| **Commit / push / PR projet** | **non autorisés** |
+
+## B. Gate Morris
+
+**Autorisé :** cadrage repo-informed D2 ; options ; recommandation candidate ; decision pack ; mise à jour de traçabilité (`08`, README framing) ; Review Handoff Git.
+
+**Interdit :** implémentation ; Delivery ; architecture adoptée ; D3 ; UI ; Figma ; CreateCycle ; modification catalogue D1 ; modification QualifyCycle ; promotion méthode ; commit/push/PR projet.
+
+
+## B2. Decision record Morris (arbitrage)
+
+| Champ | Valeur |
+|-------|--------|
+| **Formulation réelle Morris** | `D2-01 = B` · `D2-02 = B` · `D2-03 = statuts détaillés avec mapping T-A2` · `D2-04 = C` · `D2-05 = fail-closed strict pour l'exploitabilité produit` · `D2-06 = A` · `D2-07 = C` · `D2-08 = catalogue explicite plus tard` · `D2-09 = D2-A → D2-B → D2-C, D2-D gated` · `D2-10 = D2 sans UI` · `D2-11 = version + hash + correlationId` · `D2-12 = conception fonctionnelle ensuite` · « Ok pour le recommandations » |
+| **Interprétation** | Morris adopte les recommandations candidates du decision pack D-V3.1-D2-01…12 |
+| **Heure d'adoption** | Non horodatée dans le transcript ; adoption **immédiatement antérieure** au GO conception |
+| **Enregistrement documentaire** | 2026-08-01 15:05:34 CEST (+0200) |
+| **GO conception lié** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2 …` — 2026-08-01 14:58 CEST (+0200) |
+| **Conséquence** | Conception fonctionnelle autorisée · architecture / Delivery / D3 **non** autorisées |
+
+## C. Sources consultées
+
+### Gouvernance
+
+- `prompts/templates/sfia-cycle-execution-template.md`
+- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
+- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
+- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
+- `method/sfia-fast-track/checklists/sfia-validation-checklist.md`
+- `docs/foundation/sfia-engineering-principles.md`
+- `docs/architecture/sfia-delivery-pipeline.md`
+- `method/.../cycle-knowledge-contracts/pilots/01-cadrage.md`
+- `method/.../02-fifteen-cycles-synthetic-map.md`
+- `method/.../sfia-v2.5-project-cycles-method-candidate.md`
+
+### Trajectoire V3 / V3.1
+
+- framing `08`, `12`, `13`, `14`, `README`
+- D1 `README`, `05-capitalization-rex.md`
+- `app/lib/oa/cycle/domain/cycleTypeCatalog.ts`
+- `app/lib/oa/cycle/index.ts`
+- ports / application existants T-A2 : `ports/ckcResolver.ts`, `application/resolveCycleKnowledgeContract.ts`, `application/qualifyCycle.ts`, `domain/types.ts`, `domain/qualification.ts`
+- handoff `sfia/review-handoff` tip `9ac1ad6…` / blob `87a8670…`
+
+## D. État D1 et héritage
+
+### D1 fournit (intégré `main`)
+
+- quinze `cycleTypeId` stables `cyc:*` ;
+- métadonnées catalogue version `0.1.0-v3.1-d1` ;
+- mapping CKC **mandatory** (4 detailed + fallback synthétique ; 11 synthetic) ;
+- `executionAuthority=false`, `doctrineStatus`, `unavailableBehavior=fail-closed` ;
+- validateur multi-issues ;
+- opérations pures `listCycleTypes` / `getCycleTypeById` / `isKnownCycleTypeId` / `validateCycleTypeCatalog` ;
+- **aucun** parsing Markdown runtime.
+
+### D1 ne fournit pas
+
+- résolution opérationnelle du CKC ;
+- validation d’un résultat de résolution pour l’exploitabilité produit ;
+- preuve de consommation CKC ;
+- bridge catalogue → QualifyCycle enrichi ;
+- projection vertical-slice produit ;
+- UI.
+
+### Héritage T-A2 déjà présent (à ne pas confondre avec D2 produit)
+
+| Artefact | Rôle actuel | Limite pour D2 |
+|----------|-------------|----------------|
+| `CkcResolverPort` / `memoryCkcResolver` | Port guidance ; mémoire ; `executionAuthority=false` | **Non** branché sur le catalogue D1 ; pas de preuve produit de consommation |
+| `ResolveCycleKnowledgeContract` | Use-case résolution ; absent/unavailable OK pour guidance ; **ne bloque pas CreateCycle** pour CKC absent | Comportement CreateCycle ≠ règle d’exploitabilité produit V3.1 (doc 13) |
+| `QualifyCycle` | Recommandation de **profil** depuis six signaux ; `isMorrisDecision=false` | Ne consomme pas le mapping D1 ; ne produit pas l’état CKC produit |
+
+### Décisions héritées (déjà tranchées — non rouvertes ici)
+
+- L’utilisateur sélectionne le type ; pas de saisie libre ; pas de recommandation automatique du type.
+- T-A2 recommande uniquement le profil ; type ≠ profil ; recommandation ≠ décision Morris.
+- Six signaux explicites ; Critical informatif fail-closed ; `isMorrisDecision=false`.
+- CKC mandatory ; `executionAuthority=false` ; doctrine method-candidate.
+- Slicing adopté **D1 → D2 → D3** (D-V3.1-CAT-08) — Delivery D2/D3 non ouvertes avant GO.
+- Aucun CreateCycle / LPS / EpistemicItem dans V3.1 visible slice.
+- Git = source contractuelle ; pas de parsing Markdown runtime.
+- Réserve README framing : **ACCEPTED — STILL TRACEABLE — NOT LIFTED**.
+
+## E. Problème produit D2
+
+**Question centrale :**
+
+> Comment SFIA Studio transforme-t-il un `cycleTypeId` sélectionné et validé en **contexte CKC résolu**, puis en **qualification de profil T-A2 exploitable**, sans inventer d’autorité, sans recommander automatiquement le type et sans créer de `CycleInstance` ?
+
+**Écart D1 → produit :**
+
+| Concept | État après D1 |
+|---------|----------------|
+| Mapping CKC | Présent (statique) |
+| Résolution CKC | Absente (orchestration) |
+| Consommation CKC | Absente (preuve produit) |
+| Bridge QualifyCycle | Absent (exploitabilité enrichie) |
+| UI | Absente (D3) |
+
+## F. Objectif et valeur
+
+### Intention
+
+Rendre **observable et testable** le passage « type catalogue validé → CKC résolu/consommé → profil recommandé traçable », en read-only, avant toute UI.
+
+### Valeur utilisateur (sans UI)
+
+- Un opérateur / revueur / testeur peut obtenir un **résultat structuré** : type, statut CKC, source/fallback, profil, rationale, disclosures, erreurs.
+- La doctrine 3.0 est **consommée** (pas seulement référencée) sans autorité d’exécution.
+- D3 pourra s’appuyer sur un contrat d’entrées/sorties stable.
+
+### Pourquoi D2 avant D3
+
+Sans D2, une UI D3 afficherait un type et un profil **sans** preuve CKC — confusion mapping ≠ résolution ≠ consommation. D2 fixe le contrat d’exploitabilité ; D3 ne fait qu’exposer.
+
+## G. Usager et autorité
+
+| Rôle | Consomme D2 ? | Autorité |
+|------|---------------|----------|
+| Utilisateur produit (futur D3) | Indirectement via UI | Sélectionne le type ; répond aux signaux |
+| Opérateur / QA / revueur | Directement (API/domaine/projection) | Lit le résultat ; n’adopte pas de gate |
+| Morris | Arbitrage des décisions D2 | Seul décideur d’adoption |
+| CKC / QualifyCycle | Guidance / recommandation | **Aucune** autorité d’exécution ; `isMorrisDecision=false` |
+
+## H. Entrées
+
+| Entrée | Source | Obligatoire | Notes |
+|--------|--------|-------------|-------|
+| `cycleTypeId` | Sélection utilisateur validée via D1 | Oui | Pas de saisie libre |
+| Catalogue version / fingerprint | D1 `CYCLE_TYPE_CATALOG_VERSION` (+ hash candidat) | Oui | Traçabilité |
+| Mapping CKC de l’entrée | D1 `CycleTypeCkcMapping` | Oui | detailed/synthetic + fallback |
+| Six signaux Oui/Non | Utilisateur / harness | Oui pour QualifyCycle | Absence ≠ `false` |
+| `requestedProfile` | — | **Candidate exclusion** | Doc 13 : non exposé V3.1 — maintenir exclusion sauf décision Morris |
+| Contexte projet (objectif/scope) | Optionnel | Non | Affichage futur ; **n’influence pas** QualifyCycle actuel |
+| `correlationId` / horodatage | Runtime | Recommandé | Traçabilité |
+
+## I. Sorties
+
+Sorties candidates d’un résultat D2 read-only :
+
+| Sortie | Description |
+|--------|-------------|
+| `cycleTypeId` + métadonnées catalogue | Type sélectionné / labels / lifecycle |
+| `ckcResolutionStatus` | Statut de résolution (voir §K) |
+| `ckcPrimaryLevel` / `ckcSourceUsed` | detailed \| synthetic |
+| `fallbackUsed` | booléen |
+| `ckcConsumptionProof` | Preuve structurée de consommation (voir §L) |
+| `recommendedProfile` | Light \| Standard \| Critical |
+| `rationale` | Code/texte T-A2 |
+| `criticalSignalsPresent` | booléen |
+| `isMorrisDecision` | **toujours** `false` |
+| `disclosures` / `reserves` | Dont doctrine method-candidate |
+| `errorCodes` | Fail-closed (voir §O) |
+| `catalogVersion` / `resolvedAt` | Traçabilité |
+
+**Hors sorties D2 :** `CycleInstance`, lien LPS, EpistemicItem, gate Morris consommé, recommandation de type.
+
+## J. Resolver CKC
+
+### Responsabilités (cadrage — non architecture)
+
+1. Lire le mapping D1 pour un `cycleTypeId` **déjà validé**.
+2. Résoudre une référence CKC **opératoire** selon priorité detailed → synthetic fallback.
+3. Produire un résultat de résolution déterministe, traçable, sans `executionAuthority`.
+4. Ne **pas** parser les documents Markdown méthode au runtime.
+5. Ne **pas** inventer de contenu detailed si absent.
+6. Ne **pas** appeler QualifyCycle (responsabilité du bridge).
+
+### Frontières
+
+| Inclut | Exclut |
+|--------|--------|
+| Statuts / codes / source utilisée | Recommandation de profil |
+| Validation de cohérence mapping↔résultat | UI |
+| Fingerprint / version catalogue | CreateCycle / persistance |
+| Fail-closed sur invalid/unavailable | Promotion baseline méthode |
+
+### Propriétés attendues (critères — non design technique)
+
+- Déterminisme pour entrées identiques.
+- Testabilité sans I/O réseau.
+- Pureté préférable ; dépendances acceptables = ports injectés **sans** fs Markdown.
+- Idempotence logique (même entrée → même statut/source).
+- Git reste la source contractuelle des chemins CKC ; le runtime consomme des **références et métadonnées**, pas le texte Markdown.
+
+> **Aucune architecture technique n’est adoptée dans ce document.** Les ports T-A2 existants sont des **observations** d’héritage, pas une décision D2.
+
+## K. Résolution et statuts
+
+### Statuts détaillés (ADOPTED — D-V3.1-D2-03)
+
+| Statut candidat | Signification |
+|-----------------|---------------|
+| `resolved_detailed` | Référence detailed valide et sélectionnée |
+| `resolved_synthetic` | Référence synthétique primaire (11 types) |
+| `resolved_fallback_synthetic` | Detailed indisponible/invalide → fallback synthétique utilisé |
+| `unresolved_invalid_mapping` | Mapping absent/incohérent |
+| `unresolved_unavailable` | Références attendues indisponibles |
+| `unresolved_catalog_incompatible` | Version/fingerprint catalogue incompatible |
+| `unresolved_cycle_not_selectable` | deprecated / unavailable / inconnu |
+
+### Priorité de résolution (héritée D1, à confirmer en D2)
+
+1. Si `primaryLevel=detailed` et primary utilisable → detailed.
+2. Sinon si fallbackPolicy + fallbackReference synthétique utilisable → fallback.
+3. Si `primaryLevel=synthetic` → synthetic map.
+4. Sinon → fail-closed (`unavailableBehavior`).
+
+## L. Consommation CKC
+
+### Distinctions obligatoires
+
+| Concept | Définition cadrage |
+|---------|-------------------|
+| **Mapping présent** | Entrée D1 `ckc.mandatory=true` + références |
+| **Référence résolue** | Statut `resolved_*` avec source utilisée |
+| **Résolution valide** | Statut resolved + invariants (`executionAuthority=false`, chemins non vides, cohérence level) |
+| **Guidance consommée** | Le résultat D2 **porte** explicitement le contexte CKC résolu (ids, level, source, fallbackUsed, doctrineStatus) dans le payload exploitable |
+| **Preuve de consommation** | Champ structuré `ckcConsumptionProof` : `{ catalogVersion, cycleTypeId, resolutionStatus, sourceRef, fallbackUsed, resolvedAt, correlationId }` |
+| **QualifyCycle exploitable** | Profil produit **uniquement si** résolution valide **et** six signaux complets |
+| **Exécution autorisée** | **Jamais** par D2 / CKC / QualifyCycle |
+
+### Règle produit candidate (doc 13)
+
+Un résultat QualifyCycle n’est **contractuellement exploitable** dans le parcours produit que si la résolution CKC est **valide** (detailed ou synthetic/fallback).
+Cela **ne** reprend **pas** la sémantique CreateCycle T-A2 (« absent n’bloque pas la création ») — CreateCycle reste hors V3.1-D2.
+
+### Confirmation d’autorité
+
+- Consommer un CKC ≠ accorder une autorité.
+- QualifyCycle reste une recommandation.
+- D2 ne consomme aucun gate Morris.
+- CKC invalide/indisponible → résultat produit **non exploitable** (fail-closed) selon le contrat adopté.
+
+## M. Bridge QualifyCycle
+
+### Flux candidat
+
+```text
+catalogue D1
+  → validate cycleTypeId
+  → resolver CKC (+ validation résolution)
+  → si résolution invalide : stop exploitabilité (codes §O)
+  → six signaux explicites complets
+  → QualifyCycle (domaine T-A2 inchangé)
+  → résultat read-only enrichi + preuve consommation CKC
+```
+
+### Responsabilités du bridge
+
+| Fait | Ne fait pas |
+|------|-------------|
+| Orchestre l’ordre catalogue → CKC → QualifyCycle | Dupliquer `recommendProfile` / invariants T-A2 |
+| Enrichit le résultat avec état CKC + preuve | Créer une instance / persister |
+| Applique fail-closed d’exploitabilité produit | Recommander le type |
+| Passe `cycleTypeId` comme hint capitalization | Exposer `requestedProfile` (sauf décision contraire) |
+
+### Données vers QualifyCycle
+
+- `signals` (six booléens explicites)
+- `cycleTypeId` (hint capitalization)
+- éventuellement `objective`/`scope` **non scorés**
+
+### Données hors QualifyCycle (restent au bridge)
+
+- mapping / résolution / preuve CKC
+- version catalogue
+- disclosures doctrine
+- codes d’erreur CKC
+
+### Erreurs
+
+- Erreur CKC → pas d’appel QualifyCycle **ou** appel isolé non exposé comme exploitable (à trancher — recommandation : **ne pas exposer** de profil exploitable).
+- Signaux incomplets → refus avant QualifyCycle.
+
+### Relation D3
+
+D3 consommera le **même contrat de sortie** ; le bridge ne connaît pas le parcours UI.
+
+## N. Multi-CKC — options
+
+**Statut : DECIDED — ADOPTED BY MORRIS (D-V3.1-D2-07 = C).**
+Le multi-CKC n’est **pas** activé ; approche progressive Core-only maintenant.
+
+### Option D2-CKC-A — Mono-CKC D1 conservé
+
+- Un CKC principal par type ; fallback de **remplacement** (déjà D1).
+- Pas de consommation simultanée d’extensions.
+- **Valeur maintenant :** maximale simplicité ; aligné D1.
+- **Risque :** extensibilité future plus coûteuse si le contrat D2 fige trop le mono.
+
+### Option D2-CKC-B — Core + extensions contrôlées
+
+- CKC Core obligatoire + 0..N extensions listées explicitement.
+- Activation déterministe ; conflits à définir.
+- **Valeur :** richesse doctrinale.
+- **Risque :** combinatoire, dette de tests, priorité/conflits, impact D3.
+
+### Option D2-CKC-C — Slicing progressif
+
+- D2 initial : resolver Core + fallback D1 uniquement.
+- Contrat D2 **extensible** (champs préparés) **sans** implémenter les extensions.
+- Incrément ultérieur (D2-D ou lot dédié) : extensions après preuve d’usage + GO Morris.
+
+### Comparaison
+
+| Critère | A | B | C |
+|---------|---|---|---|
+| Valeur immédiate | Haute | Moyenne | Haute |
+| Complexité maintenant | Basse | Haute | Basse→moyenne |
+| Dette | Moyenne si rigidité | Haute | Contrôlée |
+| Testabilité | Haute | Basse | Haute puis progressive |
+| Traçabilité | Simple | Complexe | Simple puis enrichie |
+| Impact D3 | Faible | Fort | Faible |
+| Compatibilité D1 | Native | Nécessite extension contrat | Native |
+| Doctrine | Stable | Risque de sur-promesse | Stable |
+
+### Challenge
+
+Le multi-CKC est-il utile **dès** le premier D2, ou suffit-il de rendre le contrat **extensible** sans implémenter les extensions ?
+
+### Recommandation historique (devenue décision D-V3.1-D2-07)
+
+**D2-CKC-C** adoptée : livrer D2 sur le mono-CKC D1 ; préparer l’extensibilité **sans** activer d’extensions ; D2-D gated.
+
+## O. Fail-closed
+
+| Scénario | Résultat candidat | Code candidat | Bloquant exploitabilité | Retry | Gate |
+|----------|-------------------|---------------|-------------------------|-------|------|
+| `cycleTypeId` inconnu | Refus | `CYCLE_TYPE_UNKNOWN` | Oui | Après correction sélection | Non |
+| Cycle deprecated | Refus sélection / non exploitable | `CYCLE_TYPE_DEPRECATED` | Oui | Non (sauf réactivation catalogue) | Morris structure |
+| Cycle unavailable | Refus | `CYCLE_TYPE_UNAVAILABLE` | Oui | Plus tard | Non |
+| Mapping CKC absent | Non exploitable | `CKC_MAPPING_MISSING` | Oui | Non (bug catalogue) | Correctif D1 |
+| Detailed invalide + fallback OK | `resolved_fallback_synthetic` | `CKC_FALLBACK_USED` (info) | Non si fallback valide | — | Non |
+| Detailed + fallback invalides | Non exploitable | `CKC_UNAVAILABLE` | Oui | Non | Correctif |
+| Synthetic invalide | Non exploitable | `CKC_SYNTHETIC_INVALID` | Oui | Non | Correctif |
+| Version catalogue incompatible | Non exploitable | `CATALOG_VERSION_INCOMPATIBLE` | Oui | Après alignement | Possible |
+| Signaux incomplets | Refus QualifyCycle | `SIGNALS_INCOMPLETE` | Oui | Oui | Non |
+| Résultat CKC incohérent | Non exploitable | `CKC_RESOLUTION_INCOHERENT` | Oui | Non | Correctif |
+| Erreur interne | Non exploitable | `D2_INTERNAL_ERROR` | Oui | Limité | Non |
+| Contexte stale (fingerprint) | Non exploitable | `CATALOG_STALE` | Oui | Recharger catalogue | Non |
+
+**Information utilisateur future (D3) :** message clair, non technique autant que possible, sans faux « prêt à exécuter ».
+
+## P. Anti-claims
+
+D2 **ne** :
+
+- décide pas du cycle ;
+- remplace pas le contrat T-A2 pour le profil ;
+- crée / persiste rien ;
+- consomme aucun gate Morris ;
+- accorde aucune autorité au CKC ;
+- rend pas le produit production-ready ;
+- promeut pas les CKC en baseline méthode globale ;
+- constitue pas D3 ;
+- n’est pas « IMPLEMENTED / READY FOR DELIVERY / ARCHITECTURE ADOPTED » : le cadrage est arbitré et la conception fonctionnelle autorisée/réalisée localement, mais architecture et Delivery restent fermées.
+
+## Q. Frontières D2 / D3
+
+| D2 | D3 |
+|----|----|
+| Contrats / orchestration read-only | UI sélection type + signaux + lecture résultat |
+| Preuve consommation CKC | Affichage disclosures / erreurs |
+| Bridge QualifyCycle | Aucune règle métier nouvelle |
+| Pas de Figma | Réserve Figma (parcours) |
+
+**Données que D3 devra pouvoir consommer :** type sélectionné ; profil ; justification lisible ; état CKC ; source/fallback ; disclosures ; erreurs ; Critical blocked (informatif) ; non-persistance.
+
+**Non produits ici :** parcours détaillé D3, architecture UI, frames, composants, code.
+
+## R. Slicing candidat
+
+| Lot | Contenu | Dépendances |
+|-----|---------|-------------|
+| **D2-A** | Projection catalogue + contrat de résolution (types/statuts/codes) | D1 |
+| **D2-B** | Resolver CKC + fail-closed + preuve consommation | D2-A |
+| **D2-C** | Bridge QualifyCycle + résultat enrichi exploitable | D2-B + T-A2 |
+| **D2-D** (éventuel) | Extensions multi-CKC | Décision Morris multi-CKC + preuve d’usage |
+
+### Modes de livraison candidats
+
+1. **Une Delivery** couvrant A+B+C (risque big-bang).
+2. **Trois incréments** A → B → C (recommandation candidate).
+3. **A+B puis C** (compromis).
+
+**Slicing D2 :** **D2-A → D2-B → D2-C** adopté (D-V3.1-D2-09) ; **D2-D gated**.
+
+## S. Critères de succès du cadrage
+
+- Problème D2 clair ; D1/D2/D3 séparés.
+- Resolver ≠ bridge ; résolution ≠ consommation.
+- Règles T-A2 non dupliquées.
+- Multi-CKC traité avec décision C (Core-only) ; extensions non activées.
+- Fail-closed et authority boundaries explicites.
+- Decision pack complet ; options comparables.
+- Aucun code ; aucune architecture adoptée ; aucune Delivery ; aucun D3.
+
+## T. Risques et réserves
+
+| ID | Risque | Mitigation cadrage |
+|----|--------|--------------------|
+| R-D2-01 | Duplication méthode dans le runtime | Références + métadonnées ; pas de Markdown parse |
+| R-D2-02 | Confusion mapping/résolution/consommation | Sections L + glossaire anti-claims |
+| R-D2-03 | Sur-promesse recommandation de type | Héritage V3 : sélection utilisateur seule |
+| R-D2-04 | Multi-CKC combinatoire | Option C ; D2-D gated |
+| R-D2-05 | Extensions implicites | Liste explicite obligatoire si B |
+| R-D2-06 | Duplication T-A2 | Bridge orchestre seulement |
+| R-D2-07 | Critical overclaim | Informatif ; pas de gate |
+| R-D2-08 | Confusion recommandation/décision | `isMorrisDecision=false` |
+| R-D2-09 | Couplage prématuré D3 | Frontière Q |
+| R-D2-10 | Dette versionnement | Fingerprint catalogue + codes stale |
+| R-D2-11 | Preuve consommation insuffisante | Champ structuré obligatoire |
+| R-D2-12 | Héritage `ResolveCycleKnowledgeContract` vs produit | Distinguer CreateCycle guidance ≠ exploitabilité V3.1 |
+| **INHERITED-R-01** | Condensation README framing | **ACCEPTED — STILL TRACEABLE — NOT LIFTED** — non bloquant D2 cadrage |
+
+## U. Decision pack Morris
+
+**Statut global :** `DECIDED — ADOPTED BY MORRIS` (D-V3.1-D2-01…12).
+
+Les options historiques et risques sont conservés. Les recommandations retenues deviennent décisions.
+
+### D-V3.1-D2-01 — Promesse produit D2
+
+- **Problème :** que garantit D2 sans UI ?
+- **Options :** (a) contrat + projection testable seule ; (b) + bridge QualifyCycle enrichi ; (c) inclure UI minimale.
+- **Reco candidate historique :** (b).
+- **Décision :** **B** — type validé → CKC consommé → profil recommandé traçable → résultat read-only → **aucune UI**.
+- **Conséquence fonctionnelle :** le succès D2 inclut toujours preuve de consommation + recommandation T-A2 enrichie.
+- **Risques / dette :** sur-scope UI évité ; dette de bridge à concevoir.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-02 — Contrat du resolver CKC
+
+- **Options :** (a) lookup only ; (b) résolution + invariants ; (c) + QualifyCycle.
+- **Décision :** **B** — résout, applique priorités/fallback, contrôle invariants, produit résolution ; **n'appelle pas** QualifyCycle ; **aucune** autorité d'exécution.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-03 — Statuts de résolution
+
+- **Décision :** statuts fonctionnels **détaillés** (§K) **avec mapping explicite** vers `CkcLevel` / `CkcStatus` / `CkcSource` T-A2 ; conserver le statut détaillé D2 dans le résultat pour ne pas perdre primary vs fallback.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-04 — Définition de « CKC consommé »
+
+- **Décision :** **C** — résolution valide **et** preuve structurée de consommation dans le payload.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-05 — Règle fail-closed
+
+- **Décision :** fail-closed **strict** pour l'exploitabilité produit D2 ; CKC invalide/non résolvable → résultat non exploitable **et** QualifyCycle **non appelé** dans le bridge D2 ; CreateCycle historique hors périmètre.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-06 — Contrat du bridge QualifyCycle
+
+- **Décision :** **A** — bridge unique orchestre catalogue → resolver → validation consommation → QualifyCycle → enrichissement ; QualifyCycle **inchangé**.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-07 — Mono-CKC ou multi-CKC contrôlé
+
+- **Décision :** **C** — D2 initial = un seul CKC Core effectif ; fallback = **substitution** (pas d'addition) ; contrat extensible ; **aucune** extension activée maintenant.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-08 — Activation des extensions CKC
+
+- **Décision :** si extensions ultérieures → déclaration **explicite** dans le catalogue ; pas d'invention dynamique ; GO Morris distinct ; **capacité fermée** sous D2 actuel.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-09 — Slicing D2
+
+- **Décision :** **D2-A → D2-B → D2-C** ; **D2-D gated**.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-10 — Frontière D2/D3
+
+- **Décision :** D2 **sans UI** ; D3 consommera ultérieurement données/états D2.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-11 — Versionnement et traçabilité
+
+- **Décision :** `catalogVersion` + empreinte déterministe (`catalogHash`) + `correlationId`.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+
+### D-V3.1-D2-12 — Gate de sortie
+
+- **Décision :** après arbitrage → **conception fonctionnelle** ; puis architecture fonctionnelle ; puis technique si besoin ; Delivery D2-A seulement après GO Morris distinct.
+- **Statut :** `DECIDED — ADOPTED BY MORRIS`.
+- **Note :** le présent cycle exécute la conception fonctionnelle autorisée par cette décision et le GO du 2026-08-01 14:58 CEST.
+
+## V. Synthèse post-arbitrage
+
+1. Promesse B adoptée.
+2. Resolver B ; bridge A ; QualifyCycle inchangé.
+3. Consommation = C ; fail-closed strict produit.
+4. Multi-CKC = C (Core seul maintenant) ; extensions fermées (08).
+5. Slicing A→B→C ; D2-D gated.
+6. Traçabilité version+hash+correlationId.
+7. Conception fonctionnelle = cycle courant ; architecture / Delivery **non** ouvertes.
+
+## W. Gates suivants candidats
+
+```text
+GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE —
+USE VALIDATED FUNCTIONAL DESIGN —
+DEFINE COMPONENT RESPONSIBILITIES, CONTRACT BOUNDARIES, DATA FLOWS, STATUS MAPPING, CONSUMPTION PROOF AND SLICING —
+NO TECHNICAL ARCHITECTURE —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+**Aucun GO Delivery / D3 / UI n'est proposé en enchaînement automatique.**
+
+## X. Verdict
+
+```text
+V3.1-D2 FRAMING ARBITRATED —
+D-V3.1-D2-01…12 ADOPTED BY MORRIS —
+FUNCTIONAL DESIGN AUTHORIZED —
+NO ARCHITECTURE ADOPTED —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+**Statut :** `FRAMING ARBITRATED — FUNCTIONAL DESIGN AUTHORIZED — ARCHITECTURE AND DELIVERY REQUIRE DISTINCT MORRIS GO — D3 NOT OPENED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
new file mode 100644
index 0000000..928d60a
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
@@ -0,0 +1,473 @@
+# 16 — V3.1-D2 CKC Resolver & QualifyCycle Bridge — Conception fonctionnelle
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-08-01 15:05:34 CEST (+0200) |
+| **Cycle projet** | 2 — Conception fonctionnelle |
+| **Profil SFIA** | Standard |
+| **Typologie** | DOC |
+| **Gate Morris** | `GO CONCEPTION FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE — APPLY ADOPTED D-V3.1-D2-01…12 — NO ARCHITECTURE — NO DELIVERY — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION` (2026-08-01 14:58 CEST +0200) |
+| **Branche** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
+| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| **CKC** | `pilots/02-conception-fonctionnelle.md` · method-candidate · `executionAuthority=false` |
+| **Statut** | `FUNCTIONAL DESIGN VALIDATED — FUNCTIONAL ARCHITECTURE AUTHORIZED — NO TECHNICAL ARCHITECTURE — NO DELIVERY — D3 NOT OPENED` |
+| **Code / UI / D3 / CreateCycle** | **non** |
+
+## B. Gate Morris et décision record
+
+**Adoption Morris (immédiatement antérieure au GO conception) :**
+
+```text
+D2-01 = B · D2-02 = B · D2-03 = statuts détaillés avec mapping T-A2 · D2-04 = C
+D2-05 = fail-closed strict pour l'exploitabilité produit · D2-06 = A · D2-07 = C
+D2-08 = catalogue explicite plus tard · D2-09 = D2-A → D2-B → D2-C, D2-D gated
+D2-10 = D2 sans UI · D2-11 = version + hash + correlationId · D2-12 = conception fonctionnelle ensuite
+Ok pour le recommandations
+```
+
+Enregistrement documentaire : **2026-08-01 15:05:34 CEST (+0200)** — heure d’adoption transcript non disponible ; adoption immédiatement antérieure au GO 14:58 CEST.
+
+Décisions complètes : voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) §B2 et §U — statut `DECIDED — ADOPTED BY MORRIS`.
+
+## B2. Validation Morris — architecture fonctionnelle autorisée
+
+| Champ | Valeur |
+|-------|--------|
+| **Formulation réelle Morris** | « ok go architecture fonctionnelle D2 » |
+| **Date/heure** | 2026-08-01 15:13 CEST (+0200) |
+| **Interprétation** | `GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2 …` — conception fonctionnelle **validée** ; architecture fonctionnelle **autorisée** |
+| **Document d’architecture** | [`17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) |
+| **Architecture technique** | **fermée** |
+| **Delivery D2 / D3 / UI / CreateCycle** | **fermés** |
+| **Règles / AC / scénarios de ce document 16** | **inchangés** — non rouverts |
+
+## C. Sources consultées
+
+Gouvernance SFIA · CKC `02-conception-fonctionnelle` · carte synthétique · méthode v2.5 · framing `08`/`12`/`13`/`14`/`15`/README · D1 README/`05`/`cycleTypeCatalog` · T-A2 `ckcResolver`/`resolveCycleKnowledgeContract`/`qualifyCycle`/`qualification`/`invariants`/`types`/`errors`/`memoryCkcResolver` · handoff tip `5d4f3bb…`.
+
+## D. Héritage D1, cadrage D2 et contrats T-A2
+
+| Héritage | Rôle | Limite |
+|----------|------|--------|
+| Catalogue D1 | 15 types + mapping CKC mandatory | Pas de résolution produit |
+| Cadrage doc 15 | Problème, options, décisions | Arbitré |
+| `QualifyCycle` / `qualifyCycle` | Recommandation profil | Inchangé |
+| `CkcResolverPort` / `MemoryCkcResolver` | Port guidance T-A2 | Non équivalent au produit D2 ; observation seulement |
+| `ResolveCycleKnowledgeContract` | Guidance ; absent n’bloque pas CreateCycle | **≠** fail-closed produit D2 |
+| CreateCycle | Hors V3.1-D2 | Ne modifie pas la règle D2 |
+
+Ce document **ne duplique pas** et **ne remplace pas** le domaine T-A2 ; il définit le comportement produit D2 qui **consomme** ces contrats.
+
+## E. Objectif fonctionnel
+
+À partir d’un `cycleTypeId` sélectionné, d’un catalogue D1 compatible (version + hash), d’un mapping CKC valide, de six signaux explicites et d’un `correlationId`, D2 produit :
+
+1. **Succès** read-only exploitable : type + CKC résolu + preuve de consommation + profil T-A2 + traçabilité + disclosures + `isMorrisDecision=false` ; **ou**
+2. **Échec** structuré fail-closed : aucun résultat exploitable, aucun `consumed=true`.
+
+Aucune mutation (`CycleInstance`, LPS, EpistemicItem, gate Morris).
+
+## F. Valeur et bénéficiaires
+
+- Opérateur / QA / revueur : résultat structuré testable sans UI.
+- Futur D3 : contrat d’entrée stable.
+- Morris : frontières d’autorité explicites.
+
+## G. Périmètre inclus
+
+Projection catalogue · validation sélection · résolution CKC Core · preuve de consommation · bridge QualifyCycle · résultat enrichi · fail-closed · traçabilité version/hash/correlationId · contrat de données pour D3.
+
+## H. Hors périmètre
+
+Architecture technique · Delivery · D3/UI/Figma · CreateCycle · multi-CKC extensions (D2-D) · parsing Markdown · scoring · recommandation automatique du type · promotion méthode · IAM · agent/LLM live.
+
+## I. Acteurs et limites d’autorité
+
+| Acteur | Fait | N’a pas d’autorité de |
+|--------|------|------------------------|
+| Utilisateur (futur D3) | Sélectionne type ; répond signaux | Décider du profil à la place de T-A2 ; exécuter |
+| Bridge D2 | Orchestre ; bloque si non consommable | Modifier règles T-A2 ; créer |
+| Resolver CKC | Résout + invariants | Appeler QualifyCycle ; exécuter |
+| QualifyCycle | Recommande profil | Décision Morris ; création |
+| CKC | Guidance method-candidate | `executionAuthority` |
+| Morris | Adopte décisions / gates | — |
+
+## J. Glossaire fonctionnel
+
+| Terme | Définition |
+|-------|------------|
+| Mapping CKC | Métadonnées D1 `CycleTypeCkcMapping` |
+| Résolution | Statut détaillé D2 + projection T-A2 |
+| Consommation | Résolution valide **et** preuve structurée |
+| Fallback | Substitution du Core indisponible — jamais un 2ᵉ CKC simultané |
+| Exploitable | Succès D2 avec `consumed=true` et recommandation T-A2 |
+| Core CKC | Unique CKC effectif du type (detailed ou synthetic primaire) |
+
+## K. Préconditions
+
+- Catalogue D1 versionné et empreinte cohérente.
+- `cycleTypeId` sélectionné via catalogue (pas de saisie libre non validée).
+- Six signaux Oui/Non explicites avant QualifyCycle.
+- `correlationId` fourni.
+- `requestedProfile` **non** exposé / non utilisé.
+- Aucune extension CKC active.
+
+## L. Entrées fonctionnelles
+
+| Entrée | Obligatoire | Règles |
+|--------|-------------|--------|
+| `cycleTypeId` | Oui | Connu, actif, sélectionnable |
+| `catalogVersion` | Oui | Version D1 |
+| `catalogHash` | Oui (fonctionnel) | Empreinte déterministe du contenu pertinent ; algo → architecture ; mismatch → stale |
+| `correlationId` | Oui | Bout-en-bout ; pas d’identité IAM |
+| Six signaux | Oui pour QualifyCycle | Absence ≠ `false` |
+| `objective` / `scope` | Non | Non scorés |
+| `requestedProfile` | Non | Non exposé |
+
+## M. Parcours nominal
+
+1. Recevoir type + traçabilité (version, hash, correlationId).
+2. Vérifier compatibilité version/hash.
+3. Vérifier existence et sélectionnabilité du type.
+4. Lire mapping CKC Core obligatoire.
+5. Résoudre selon priorité (N).
+6. Valider invariants (`executionAuthority=false`, doctrine method-candidate, sources).
+7. Produire preuve structurée (P) → `consumed=true` si resolved_*.
+8. Vérifier six signaux complets.
+9. Appeler QualifyCycle **une fois** (contrat existant).
+10. Enrichir avec métadonnées cycle, état CKC, preuve, disclosures.
+11. Retourner succès read-only.
+12–15. Ne pas créer CycleInstance / LPS / EpistemicItem / gate.
+
+Si une étape avant 9 échoue → échec structuré ; QualifyCycle **non appelé**.
+
+## N. Résolution CKC
+
+### Mapping detailed
+
+1. Detailed valide/disponible → `resolved_detailed`.
+2. Sinon fallback synthétique valide → `resolved_fallback_synthetic`.
+3. Sinon → non exploitable (`unresolved_*`).
+
+### Mapping synthetic
+
+1. Synthétique primaire valide → `resolved_synthetic`.
+2. Sinon → non exploitable.
+
+Fallback = **substitution**, jamais addition.
+
+## O. Statuts détaillés et mapping T-A2
+
+### Statuts D2
+
+| Statut D2 | fallbackUsed | exploitable | QualifyCycle |
+|-----------|--------------|-------------|--------------|
+| `resolved_detailed` | false | true | Oui (si signaux OK) |
+| `resolved_synthetic` | false | true | Oui |
+| `resolved_fallback_synthetic` | true | true | Oui + disclosure |
+| `unresolved_invalid_mapping` | — | false | Non |
+| `unresolved_unavailable` | — | false | Non |
+| `unresolved_catalog_incompatible` | — | false | Non |
+| `unresolved_cycle_not_selectable` | — | false | Non |
+
+### Mapping vers types T-A2 existants (sans modifier les enums)
+
+| Statut D2 | `CkcLevel` | `CkcStatus` | `CkcSource` | Perte d’info T-A2 |
+|-----------|------------|-------------|-------------|-------------------|
+| `resolved_detailed` | `detailed` | `resolved` | `repository_candidate` | Aucune significative |
+| `resolved_synthetic` | `synthetic` | `synthetic` | `intra_v3_synthetic` | Aucune |
+| `resolved_fallback_synthetic` | `synthetic` | `synthetic` | `intra_v3_synthetic` | **Perte** primary vs fallback → **statut D2 obligatoire** dans résultat enrichi |
+| `unresolved_invalid_mapping` | `absent` | `invalid` | `unavailable` | Cause fine dans code D2 |
+| `unresolved_unavailable` | `absent` | `unavailable` | `unavailable` | Idem |
+| `unresolved_catalog_incompatible` | `absent` | `unavailable` | `unavailable` | Cause = catalogue ; code D2 |
+| `unresolved_cycle_not_selectable` | `absent` | `invalid` | `unavailable` | Cause = lifecycle ; code D2 |
+
+`fallbackPolicy` T-A2 candidat : `intra_v3_only` lorsque le mapping D1 déclare un fallback ; sinon `none` pour synthetic-only — détail d’implémentation réservé architecture.
+
+## P. Définition et preuve de consommation CKC
+
+### Consommé si et seulement si
+
+- type sélectionnable ;
+- mapping D1 valide ;
+- statut ∈ {`resolved_detailed`,`resolved_synthetic`,`resolved_fallback_synthetic`} ;
+- `executionAuthority=false` ;
+- `doctrineStatus=method-candidate` ;
+- source identifiée ;
+- preuve structurée complète ;
+- aucun invariant bloquant violé.
+
+### Preuve structurée (minimum)
+
+`cycleTypeId` · statut détaillé D2 · level/status/source T-A2 · référence primaire attendue · référence utilisée · `fallbackUsed` · `fallbackReference?` · `catalogVersion` · `catalogHash` · `correlationId` · `resolvedAt` · `doctrineStatus=method-candidate` · `executionAuthority=false` · `consumed=true` · réserves/disclosures.
+
+La preuve **ne** contient **pas** le texte brut du CKC, **ne** parse **pas** Markdown, **n’est pas** un gate ni une décision.
+
+## Q. Bridge QualifyCycle
+
+### Responsabilités
+
+Orchestrer · empêcher QualifyCycle si CKC non consommé ou signaux incomplets · transmettre uniquement les champs T-A2 acceptés (`signals`, `cycleTypeId` hint, objective/scope optionnels non scorés) · ne pas dupliquer `recommendProfile` · conserver `isMorrisDecision=false` · enrichir après · erreur structurée sinon.
+
+### QualifyCycle reste responsable de
+
+Priorité Critical · Light si `lowRiskBounded` sans critique · Standard défaut · rationale · `criticalSignalsPresent` · `requiresJustificationForCritical` · `capitalizationViaCycleTypeId` · `isMorrisDecision=false`.
+
+### Interdits bridge
+
+Recalcul profil · score parallèle · changer priorité signaux · transformer Critical en décision · créer/persister.
+
+## R. Résultat fonctionnel D2
+
+### Succès
+
+`state=success` · `cycleTypeId` · label/description · `lifecycleStatus` · `catalogVersion` · `catalogHash` · `correlationId` · statut détaillé CKC · preuve consommation · `recommendedProfile` · `rationale` · `criticalSignalsPresent` · `requiresJustificationForCritical` · `capitalizationViaCycleTypeId` · `isMorrisDecision=false` · disclosures · `resolvedAt`/`qualifiedAt`.
+
+### Échec
+
+`state=failure` · code fonctionnel · message · `blocking` · `retryable` · `recoverable` · `correlationId` · `cycleTypeId?` · timestamp · **aucune** recommandation exploitable · **aucune** preuve `consumed=true`.
+
+## S. Fail-closed, erreurs et recovery
+
+| Cas | Statut D2 | Code candidat | Blocking | QualifyCycle | Retry | Recovery |
+|-----|-----------|---------------|----------|--------------|-------|----------|
+| `cycleTypeId` absent | — | `CYCLE_TYPE_REQUIRED` | oui | non | oui | fournir type |
+| invalide | — | `CYCLE_TYPE_INVALID` | oui | non | oui | corriger |
+| inconnu | `unresolved_cycle_not_selectable` | `CYCLE_TYPE_UNKNOWN` | oui | non | non* | catalogue |
+| deprecated/unavailable | idem | `CYCLE_TYPE_NOT_SELECTABLE` | oui | non | non* | catalogue |
+| mapping absent/incohérent | `unresolved_invalid_mapping` | `CKC_MAPPING_INVALID` | oui | non | non | correctif D1 |
+| detailed+fallback KO | `unresolved_unavailable` | `CKC_UNAVAILABLE` | oui | non | non | correctif |
+| synthetic primaire KO | idem | `CKC_SYNTHETIC_INVALID` | oui | non | non | correctif |
+| detailed KO + fallback OK | `resolved_fallback_synthetic` | `CKC_FALLBACK_USED` (info) | non | oui | — | disclosure |
+| version incompatible | `unresolved_catalog_incompatible` | `CATALOG_VERSION_INCOMPATIBLE` | oui | non | oui | aligner version |
+| hash stale | idem | `CATALOG_STALE` | oui | non | oui | recharger catalogue |
+| signaux incomplets | (CKC peut être OK) | `SIGNALS_INCOMPLETE` | oui | non | oui | compléter |
+| résolution incohérente | `unresolved_*` | `CKC_RESOLUTION_INCOHERENT` | oui | non | non | correctif |
+| `executionAuthority≠false` | — | `CKC_EXECUTION_AUTHORITY_FORBIDDEN` | oui | non | non | correctif |
+| erreur interne | — | `D2_INTERNAL_ERROR` | oui | non | limité | support |
+
+\* sauf réactivation catalogue / nouveau type.
+
+### Mapping candidat vers `CycleDetailCode` T-A2 (sans modifier enums)
+
+| Code D2 | Detail T-A2 candidat |
+|---------|----------------------|
+| `CYCLE_TYPE_*` (sauf NOT_SELECTABLE métier) | `CYCLE_INVALID` |
+| `CYCLE_TYPE_NOT_SELECTABLE` / UNKNOWN | `CYCLE_INVALID` |
+| `CKC_*` (sauf FALLBACK_USED) | `CKC_UNAVAILABLE` |
+| `CATALOG_VERSION_INCOMPATIBLE` / `CATALOG_STALE` | `CONTEXT_STALE` |
+| `SIGNALS_INCOMPLETE` | `CYCLE_INVALID` |
+| `D2_INTERNAL_ERROR` | `PERSISTENCE_FAILURE` |
+| `CKC_FALLBACK_USED` | pas une erreur — disclosure |
+
+Implémentation du mapping = architecture.
+
+## T. Invariants T-A2 et règles de profil
+
+Hérités, non modifiés :
+
+1. Un signal Critical (`structuralChange|securityImpact|architectureImpact|dataImpact|irreversible`) → Critical.
+2. Sinon `lowRiskBounded=true` → Light.
+3. Sinon → Standard.
+4. Critical gagne sur `lowRiskBounded`.
+5. `isMorrisDecision=false` toujours.
+6. `requestedProfile` non exposé dans D2.
+7. Capitalization = `cycleTypeId`, pas un profil.
+
+## U. Mono-CKC Core et extensibilité future
+
+- Exactement **un** CKC Core effectif.
+- **Zéro** extension active.
+- Fallback = substitution.
+- Aucun tableau d’extensions consommées.
+- Aucun résultat ne revendique le support multi-CKC.
+- Extensibilité future : ne pas empêcher D2-D ; déclaration catalogue explicite ; GO Morris distinct ; pas de structure technique imposée ici.
+
+## V. Versionnement, hash et correlationId
+
+| Champ | Règle |
+|-------|-------|
+| `catalogVersion` | Version contractuelle D1 |
+| `catalogHash` | Change si identité, lifecycle ou mapping CKC pertinent change ; algo/périmètre exact → architecture |
+| `correlationId` | Obligatoire ; propagé succès/erreurs/audit futur ; pas d’autorité IAM |
+
+## W. Contrat de projection futur D3
+
+D3 pourra lire : type · profil · rationale · état CKC · source · fallbackUsed · disclosures · erreurs · Critical informatif · non-persistance · absence de décision Morris.
+
+**Non produits :** écrans, parcours UI, Figma, composants, routes, textes UI finaux.
+
+## X. Critères d’acceptation
+
+| ID | Critère |
+|----|---------|
+| AC-D2-FD-01 | Detailed valide → `resolved_detailed` + `consumed=true` |
+| AC-D2-FD-02 | Synthetic valide → `resolved_synthetic` |
+| AC-D2-FD-03 | Detailed KO + fallback OK → `resolved_fallback_synthetic` + disclosure |
+| AC-D2-FD-04 | Mapping invalide bloque avant QualifyCycle |
+| AC-D2-FD-05 | Catalogue incompatible/stale bloque avant QualifyCycle |
+| AC-D2-FD-06 | Signaux incomplets bloquent QualifyCycle |
+| AC-D2-FD-07 | Succès CKC → QualifyCycle **une** fois |
+| AC-D2-FD-08 | Bridge ne modifie pas la recommandation T-A2 |
+| AC-D2-FD-09 | Critical + `isMorrisDecision=false` |
+| AC-D2-FD-10 | Aucun succès avec CycleInstance/LPS/EpistemicItem |
+| AC-D2-FD-11 | Aucune extension CKC activée |
+| AC-D2-FD-12 | version + hash + correlationId présents si exploitable |
+| AC-D2-FD-13 | `executionAuthority=false` |
+| AC-D2-FD-14 | Distinction synthetic primaire vs fallback conservée (statut D2) |
+| AC-D2-FD-15 | D3 peut consommer sans réimplémenter les règles métier |
+
+## Y. Scénarios fonctionnels
+
+### Y1 — Cadrage detailed + aucun critique + lowRiskBounded=true
+
+- **Précond. :** `cyc:framing` detailed OK ; catalogue OK.
+- **Entrée :** six signaux ; seul `lowRiskBounded=true`.
+- **Étapes :** M1–11.
+- **Résultat :** success · `resolved_detailed` · profil **Light** · QualifyCycle **oui**.
+- **Anti-claim :** pas de CreateCycle.
+- **Recovery :** n/a.
+
+### Y2 — Architecture technique detailed + securityImpact=true
+
+- **Résultat :** success · `resolved_detailed` · profil **Critical** · `requiresJustificationForCritical=true` · `isMorrisDecision=false` · QualifyCycle oui.
+- **Anti-claim :** Critical ≠ gate.
+
+### Y3 — QA detailed indisponible + fallback synthétique valide
+
+- **Résultat :** success · `resolved_fallback_synthetic` · `fallbackUsed=true` · disclosure · QualifyCycle oui.
+
+### Y4 — Delivery synthetic + aucun critique + lowRiskBounded=false
+
+- **Résultat :** success · `resolved_synthetic` · profil **Standard** · QualifyCycle oui.
+
+### Y5 — Cycle inconnu
+
+- **Résultat :** failure · `CYCLE_TYPE_UNKNOWN` · QualifyCycle **non**.
+
+### Y6 — Cycle unavailable
+
+- **Résultat :** failure · `CYCLE_TYPE_NOT_SELECTABLE` · QualifyCycle non.
+
+### Y7 — Mapping detailed et fallback invalides
+
+- **Résultat :** failure · `CKC_UNAVAILABLE` · QualifyCycle non.
+
+### Y8 — Catalogue stale
+
+- **Résultat :** failure · `CATALOG_STALE` · QualifyCycle non · retry après rechargement.
+
+### Y9 — Signaux incomplets
+
+- **Précond. :** CKC pourrait être OK.
+- **Résultat :** failure · `SIGNALS_INCOMPLETE` · QualifyCycle non · retry.
+
+### Y10 — Critical + lowRiskBounded simultanés
+
+- **Résultat :** success · profil **Critical** (priorité) · QualifyCycle oui.
+
+### Y11 — Capitalization via cycleTypeId
+
+- **Entrée :** `cyc:capitalization`.
+- **Résultat :** success · `capitalizationViaCycleTypeId=true` · profil selon signaux · QualifyCycle oui.
+
+### Y12 — Resolver renvoie executionAuthority=true
+
+- **Résultat :** failure · `CKC_EXECUTION_AUTHORITY_FORBIDDEN` · QualifyCycle non · `consumed` jamais true.
+
+### Y13 — Erreur interne
+
+- **Résultat :** failure · `D2_INTERNAL_ERROR` · QualifyCycle non · retry limité.
+
+### Y14 — Tentative implicite d’extension CKC
+
+- **Résultat :** failure ou rejet fonctionnel · aucune extension consommée · anti-claim multi-CKC · QualifyCycle non si Core non consommé.
+
+## Z. Anti-claims
+
+D2 conception **n’est pas** : implémenté · architecture adoptée · Delivery ouverte · D3 ouvert · multi-CKC supporté · extensions actives · CreateCycle · exécution autorisée · baseline méthode · recommandation automatique du type · parsing Markdown · UI.
+
+## AA. Risques et réserves
+
+| ID | Risque | Mitigation |
+|----|--------|------------|
+| R-D2-FD-01 | Confusion CreateCycle vs fail-closed D2 | §D, §S |
+| R-D2-FD-02 | Perte primary/fallback dans T-A2 | Statut D2 obligatoire |
+| R-D2-FD-03 | Duplication règles profil | Bridge n’appelle que QualifyCycle |
+| R-D2-FD-04 | Hash mal borné | Question architecture |
+| R-D2-FD-05 | Sur-interprétation MemoryCkcResolver | Observation ≠ produit |
+| R-D2-FD-06 | Ouverture implicite D2-D | §U fermé |
+| **INHERITED-R-01** | Condensation README | **ACCEPTED — STILL TRACEABLE — NOT LIFTED** |
+
+## AB. Slicing D2-A / D2-B / D2-C / D2-D
+
+| Lot | Contenu fonctionnel | Entrée | Sortie | Dépend |
+|-----|---------------------|--------|--------|--------|
+| **D2-A** | Projection catalogue · validation lifecycle · version/hash · contrat projection | Catalogue D1 | Projection validée / erreurs sélection | D1 |
+| **D2-B** | Resolver Core · priorités · statuts · mapping T-A2 · preuve · fail-closed | Sortie A | Résolution + preuve ou erreur CKC | D2-A |
+| **D2-C** | Bridge · signaux · QualifyCycle · enrichissement · disclosures | Sortie B + signaux | Résultat D2 success/failure | D2-B + T-A2 |
+| **D2-D** | Extensions multi-CKC | GO Morris | — | **gated — non ouvert** |
+
+Critères de sortie d’incrément = AC pertinents (§X). Delivery **non ouverte**. Tests futurs = unitaires/intégration après architecture.
+
+## AC. Questions réservées à l’architecture
+
+1. Emplacement exact du bridge.
+2. Réutilisation / adaptation de `CkcResolverPort`.
+3. Représentation TypeScript des statuts détaillés.
+4. Mapping des erreurs D2 → `CycleDetailCode`.
+5. Calcul et périmètre de `catalogHash`.
+6. Source runtime des références CKC sans parsing Markdown.
+7. Stratégie de validation des références.
+8. Audit / observabilité.
+9. Injection des dépendances.
+10. Compatibilité avec `ResolveCycleKnowledgeContract` / CreateCycle.
+11. Frontière domaine / application.
+12. Plan de tests unitaires et d’intégration.
+
+**Aucune de ces questions n’est tranchée ici.**
+
+## AD. Gate suivant candidat
+
+```text
+GO ARCHITECTURE FONCTIONNELLE SFIA STUDIO V3.1-D2 CKC RESOLVER AND QUALIFYCYCLE BRIDGE —
+USE VALIDATED FUNCTIONAL DESIGN —
+DEFINE COMPONENT RESPONSIBILITIES, CONTRACT BOUNDARIES, DATA FLOWS, STATUS MAPPING, CONSUMPTION PROOF AND SLICING —
+NO TECHNICAL ARCHITECTURE —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+Ne pas exécuter sans nouveau GO Morris.
+
+## AE. Verdict
+
+```text
+V3.1-D2 FUNCTIONAL DESIGN COMPLETE —
+D-V3.1-D2-01…12 RECORDED AS ADOPTED BY MORRIS —
+READ-ONLY TYPE TO CKC CONSUMPTION TO PROFILE FUNCTIONAL CONTRACT DEFINED —
+DETAILED CKC RESOLUTION STATUSES AND T-A2 MAPPING DEFINED —
+STRUCTURED CKC CONSUMPTION PROOF SPECIFIED —
+FAIL-CLOSED BEHAVIOUR DEFINED —
+QUALIFYCYCLE REMAINS UNCHANGED —
+CORE CKC ONLY —
+MULTI-CKC EXTENSIONS NOT OPENED —
+D2-A TO D2-B TO D2-C FUNCTIONAL SLICING DEFINED —
+D2-D GATED —
+VERSION HASH AND CORRELATIONID TRACEABILITY DEFINED —
+NO ARCHITECTURE ADOPTED —
+NO IMPLEMENTATION —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO FIGMA —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+**Statut :** `FUNCTIONAL DESIGN VALIDATED — FUNCTIONAL ARCHITECTURE AUTHORIZED — TECHNICAL ARCHITECTURE AND DELIVERY REQUIRE DISTINCT MORRIS GO — D3 NOT OPENED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
new file mode 100644
index 0000000..9011736
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
@@ -0,0 +1,562 @@
+# 17 — V3.1-D2 CKC Resolver & QualifyCycle Bridge — Architecture fonctionnelle
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-08-01 15:20:47 CEST (+0200) |
+| **Cycle projet** | 3 — Architecture fonctionnelle |
+| **Profil SFIA** | **Critical** |
+| **Typologie** | DOC |
+| **Gate Morris** | Formulation : « ok go architecture fonctionnelle D2 » — 2026-08-01 15:13 CEST (+0200) |
+| **Branche** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
+| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| **CKC** | Fallback : carte synthétique + §4.3 · method-candidate · `executionAuthority=false` |
+| **Statut** | `FUNCTIONAL ARCHITECTURE ADOPTED — TECHNICAL ARCHITECTURE AUTHORIZED — NO DELIVERY — D3 NOT OPENED` |
+| **Doc 15** | **strictement inchangé** |
+| **Doc technique** | [`18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) |
+| **Code / UI / D3 / CreateCycle** | **non** |
+
+## B. Gate Morris et autorité
+
+**Autorisé (cycle FA historique) :** architecture fonctionnelle ; options FA-A/B/C ; decision pack D-V3.1-D2-FA ; traçabilité ; handoff.
+
+**Interdit (cycle FA historique) :** architecture technique ; code ; Delivery ; D3 ; UI ; Figma ; CreateCycle ; D2-D ; adoption implicite des décisions FA ; promotion méthode.
+
+**Justification Critical :** frontières structurantes catalogue / resolver / consommation / bridge / résultat / D3 ; mauvais découpage → duplication, fail-open, dette, incohérence T-A2. Critical ≠ autorité d’exécution ni Delivery.
+
+## B2. Decision record Morris — FA adoptées · architecture technique autorisée
+
+| Champ | Valeur |
+|-------|--------|
+| **Formulation réelle Morris** | `FA-01 = FA-C` · `FA-02 = preuve autonome logiquement, colocalisée dans le composant 2` · `FA-03 = resolver : résolution + projection T-A2` · `FA-04 = normalisation orchestrateur + Result Projection` · `FA-05 = statut détaillé produit par le resolver et conservé ensuite` · `FA-06 = contrôle version/hash dans Catalog Projection` · `FA-07 = correlationId + événements minimaux` · `FA-08 = contrat résultat unique pour D3` · `FA-09 = composants répartis clairement entre D2-A/B/C` · `FA-10 = adaptation contrôlée de T-A2` · `FA-11 = événements fonctionnels minimaux` · `FA-12 = architecture technique avant backlog Delivery` · « ok pour les recommandations » |
+| **Adoption** | Immédiatement antérieure au GO architecture technique |
+| **Heure d’adoption transcript** | **indisponible** |
+| **Date documentaire d’enregistrement** | 2026-08-01 16:29:26 CEST (+0200) |
+| **GO architecture technique** | 2026-08-01 16:16 CEST (+0200) — `GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2 — APPLY ADOPTED D-V3.1-D2-FA-01…12 — NO DELIVERY — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION` |
+| **Option retenue** | **FA-C** (Catalog Projection · Resolution+Consumption · Orchestrator · Result Projection · Envelope T) |
+| **Conséquence** | Architecture technique **autorisée** · Delivery / backlog / D3 / UI / CreateCycle / D2-D **fermés** |
+| **Document 18** | [`18-…-technical-architecture.md`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) |
+
+## C. Sources consultées
+
+Gouvernance · carte synthétique · routing matrix · §4.3 · framing 08/12–16/README · D1 · T-A2 ports/types/qualify/errors/MemoryCkcResolver (observations) · handoff `308130e…`.
+
+## D. Héritage validé
+
+| Source | Statut |
+|--------|--------|
+| D1 catalogue | Intégré `main` |
+| D-V3.1-D2-01…12 | `ADOPTED BY MORRIS` (doc 15) |
+| Doc 16 | Validée par Morris 15:13 CEST — règles/AC/scénarios **inchangés** |
+| T-A2 QualifyCycle | Inchangé — observation |
+| Ports CKC T-A2 | Observation — non décision FA |
+
+## E. Problème d’architecture fonctionnelle
+
+Comment structurer les responsabilités pour réaliser le parcours read-only du doc 16 sans chevauchement, sans fail-open, sans sur-architecture, et en préservant le slicing D2-A→B→C ?
+
+## F. Objectifs et principes
+
+Respecter les 20 principes du GO (Git contractuel, no Markdown parse, catalogue autoritatif, type sélectionné, resolver ≠ profil, QualifyCycle ≠ CKC, bridge sans duplication, consumed avant exploitabilité, fail-closed avant QualifyCycle, preuve structurée, statut D2 + projection T-A2, `executionAuthority=false`, `isMorrisDecision=false`, read-only, Core seul, fallback substitution, extensions fermées, D3 consomme résultat, responsabilités vérifiables).
+
+## G. Vue de contexte
+
+```mermaid
+flowchart LR
+  Actor[Opérateur / futur D3] -->|demande D2| D2[Système D2 read-only]
+  D1[Catalogue D1] --> D2
+  T-A2[QualifyCycle T-A2] --> D2
+  CKCrefs[Références CKC Git] -.->|métadonnées seules| D2
+  D2 -->|Success/Failure Result| Actor
+  D2 -.->|aucune mutation| Forbidden[CreateCycle / LPS / Epistemic]
+```
+
+## H. Carte des composants fonctionnels
+
+### Recommandation candidate (non adoptée) — modèle FA-C
+
+```mermaid
+flowchart TB
+  CP[1 Catalog Projection]
+  RC[2 CKC Resolution and Consumption]
+  QO[3 Qualification Orchestrator]
+  RP[4 Read-only Result Projection]
+  TE[T Traceability Envelope]
+  CP --> RC
+  RC --> QO
+  QO --> RP
+  TE -.-> CP
+  TE -.-> RC
+  TE -.-> QO
+  TE -.-> RP
+  QO -->|appel unique| QC[QualifyCycle T-A2]
+```
+
+Variantes étudiées : FA-A (3) · FA-B (5) · FA-C (4) — §AH.
+
+## I. Responsabilités et exclusions (FA-C candidate)
+
+### 1 — Cycle Type Catalog Projection (D2-A)
+
+| Inclut | Exclut |
+|--------|--------|
+| Version/hash check | Résolution CKC |
+| Type sélectionnable + lifecycle | Preuve consumed |
+| Mapping CKC Core exposé | QualifyCycle / profil |
+| Erreurs catalogue | Mutations |
+
+### 2 — CKC Resolution and Consumption (D2-B)
+
+| Inclut | Exclut |
+|--------|--------|
+| Priorité detailed/fallback/synthetic | Profil / QualifyCycle |
+| Statut détaillé D2 + projection T-A2 | Extensions multi-CKC |
+| Invariants + preuve structurée | Assemblage résultat D3 |
+| `executionAuthority=false` | UI |
+
+**Sous-responsabilités logiques (même composant FA-C) :** Resolver · Consumption Validator/Proof Builder — séparables en FA-B.
+
+### 3 — Profile Qualification Orchestrator (D2-C)
+
+| Inclut | Exclut |
+|--------|--------|
+| Enchaînement + signaux | Recalcul profil |
+| Bloquer si non consommé | Création cycle |
+| Appel unique QualifyCycle | Parsing CKC |
+
+### 4 — D2 Read-only Result Projection (D2-C)
+
+| Inclut | Exclut |
+|--------|--------|
+| Assemblage Success/Failure | Règles métier |
+| Disclosures / réserves | Persistance |
+| Contrat unique pour D3 | Multi-appels internes |
+
+### T — Error and Traceability Envelope (transverse)
+
+correlationId · horodatages · codes · blocking/retryable/recoverable · événements fonctionnels · pas d’IAM.
+
+## J. Frontières et dépendances
+
+```text
+Catalog Projection ──▶ Resolution+Consumption ──▶ Orchestrator ──▶ Result Projection
+                              │                        │
+                              │                        └──▶ QualifyCycle (externe T-A2)
+                              └── interdit d’appeler QualifyCycle
+```
+
+Dépendances **interdites** : Catalog → QualifyCycle ; Resolver → Result sans orchestrateur ; Result → Resolver ; tout → CreateCycle.
+
+## K. Contrats d’entrée
+
+### Catalog Selection Context
+
+`cycleTypeId` · `catalogVersion` · `catalogHash` · `correlationId`
+
+### Qualification Input (vers QualifyCycle uniquement)
+
+`signals` (6) · `cycleTypeId` · `objective?`/`scope?` non scorés · **pas** `requestedProfile`
+
+## L. Contrats de sortie
+
+### Validated Cycle Type Projection
+
+type + label + description + lifecycle + mapping CKC + version + hash + correlationId
+
+### CKC Resolution Result
+
+statut détaillé D2 · level/status/source T-A2 · refs · fallbackUsed · doctrineStatus · `executionAuthority=false` · resolvedAt · correlationId · exploitable
+
+### CKC Consumption Proof
+
+Champs doc 16 §P — `consumed=true` **uniquement** si resolved_* valide
+
+### D2 Success / Failure Result
+
+Conforme doc 16 §R — Success assemblé par Result Projection ; Failure normalisé (voir FA-04)
+
+## M. Flux nominal bout en bout
+
+```mermaid
+sequenceDiagram
+  participant A as Demandeur
+  participant CP as Catalog Projection
+  participant RC as Resolution+Consumption
+  participant QO as Orchestrator
+  participant QC as QualifyCycle
+  participant RP as Result Projection
+  A->>CP: Selection Context
+  CP->>CP: version/hash/type/mapping
+  CP-->>QO: Validated Projection
+  QO->>RC: mapping + traçabilité
+  RC->>RC: resolve + proof
+  RC-->>QO: Proof consumed=true
+  QO->>QO: signaux complets?
+  QO->>QC: Qualification Input
+  QC-->>QO: recommendation
+  QO->>RP: assemble
+  RP-->>A: Success Result
+```
+
+## N. Flux detailed
+
+Mapping detailed + primary OK → `resolved_detailed` · fallbackUsed=false · preuve · QualifyCycle si signaux OK.
+
+## O. Flux synthetic primaire
+
+Mapping synthetic + primary OK → `resolved_synthetic` · fallbackUsed=false.
+
+## P. Flux fallback synthetic
+
+Detailed KO + fallback OK → `resolved_fallback_synthetic` · fallbackUsed=true · disclosure obligatoire · QualifyCycle autorisé.
+
+```mermaid
+sequenceDiagram
+  participant A as Demandeur
+  participant CP as Catalog Projection
+  participant RC as Resolution+Consumption
+  participant QO as Orchestrator
+  participant QC as QualifyCycle
+  participant RP as Result Projection
+  A->>CP: Selection Context
+  CP-->>QO: Validated Projection (detailed mapping)
+  QO->>RC: resolve
+  RC->>RC: detailed KO
+  RC->>RC: fallback synthetic OK
+  RC-->>QO: Proof consumed=true fallbackUsed=true
+  QO->>QC: Qualification Input
+  QC-->>QO: recommendation
+  QO->>RP: assemble + disclosure fallback
+  RP-->>A: Success Result
+```
+
+## Q. Flux fail-closed
+
+```mermaid
+sequenceDiagram
+  participant A as Demandeur
+  participant CP as Catalog Projection
+  participant RC as Resolution+Consumption
+  participant QO as Orchestrator
+  participant RP as Result Projection
+  A->>CP: contexte
+  alt version/hash/type KO
+    CP-->>RP: erreur catalogue
+    RP-->>A: Failure (QualifyCycle NON)
+  else mapping/CKC KO
+    CP-->>QO: projection
+    QO->>RC: resolve
+    RC-->>RP: erreur CKC
+    RP-->>A: Failure (QualifyCycle NON)
+  else signaux incomplets
+    RC-->>QO: consumed=true
+    QO-->>RP: SIGNALS_INCOMPLETE
+    RP-->>A: Failure (QualifyCycle NON)
+  end
+```
+
+**Règle centrale :** aucun échec antérieur à la qualification n’appelle QualifyCycle ; aucun Failure avec profil exploitable ou `consumed=true`.
+
+## R. Projection catalogue D1
+
+Propriétaire : composant 1 · source autoritative D1 · erreurs : VERSION/STALE/UNKNOWN/NOT_SELECTABLE.
+
+## S. Résolution CKC Core
+
+Propriétaire : composant 2 (sous-rôle Resolver) · priorités doc 16 · produit statut D2 + projection T-A2 · n’appelle pas QualifyCycle.
+
+## T. Validation et preuve de consommation
+
+Propriétaire logique : Consumption Validator (FA-C : dans composant 2 ; FA-B : composant autonome) · `consumed=true` seulement après invariants · refuse extensions implicites.
+
+## U. Bridge QualifyCycle
+
+= Orchestrator (composant 3) · orchestration seule · QualifyCycle inchangé.
+
+## V. Projection du résultat read-only
+
+= composant 4 · assemble Success/Failure · frontière unique D3.
+
+## W. Statuts D2 et mapping T-A2
+
+Reprise **stricte** doc 16 §O.
+
+| Où | Qui |
+|----|-----|
+| Statut détaillé D2 | Resolver (comp. 2) |
+| Projection T-A2 | Resolver (comp. 2) |
+| Compensation primary/fallback | Statut D2 conservé dans Proof + Success Result |
+| Exposition D3 | Result Projection |
+
+Pas de nouveaux enums T-A2.
+
+## X. Erreurs, normalisation et recovery
+
+**Recommandation candidate (FA-04) :** normalisation dans **Orchestrator + Result Projection** — chaque composant émet une erreur locale ; l’orchestrateur/projection produit le Failure Result unique.
+
+Codes : inchangés vs doc 16 §S · mapping T-A2 candidat inchangé.
+
+## Y. Version, hash et correlationId
+
+| Concern | Responsable candidat |
+|---------|----------------------|
+| Fournir version/hash attendus | Demandeur / contexte |
+| Vérifier version/hash | Catalog Projection (premier contrôle) |
+| Hash de référence conceptuel | Catalogue D1 (algo → tech) |
+| Stale vs CKC invalid | Codes distincts `CATALOG_*` vs `CKC_*` |
+| correlationId entrée | obligatoire ; absent → Failure |
+| Propagation | Envelope T sur tous contrats |
+
+Double contrôle borné (catalogue + orchestrateur) = option FA-06 — reco candidate : **projection catalogue** comme point principal.
+
+## Z. Traçabilité et événements fonctionnels
+
+Événements candidats (minimaux, non preuve production) :
+
+| Événement | Obligatoire? |
+|-----------|--------------|
+| catalog projection validated | oui |
+| CKC resolution started/succeeded/failed | oui |
+| CKC fallback used | oui si fallback |
+| CKC consumption validated/rejected | oui |
+| profile qualification started/succeeded | oui si appelé |
+| D2 result produced / request failed | oui |
+
+Données : correlationId · cycleTypeId? · statut? · code? · pas de données sensibles.
+
+## AA. Frontière D2/D3
+
+```text
+D3 ──lit──▶ D2 Success Result | D2 Failure Result
+D3 ──interdit──▶ appels séparés resolver/QualifyCycle / recalcul / extensions
+```
+
+**Reco candidate FA-08 :** contrat résultat **unique**.
+
+## AB. Extensibilité multi-CKC / D2-D
+
+Core seul · zéro extension · fallback substitution · pas de collection d’extensions · D2-D fermé · extensibilité documentaire seulement.
+
+## AC. Allocation D2-A / D2-B / D2-C
+
+```mermaid
+flowchart LR
+  D2A[D2-A Catalog Projection] --> D2B[D2-B Resolution and Consumption]
+  D2B --> D2C[D2-C QualifyCycle Bridge]
+  D2C -.->|futur GO| D3[D3 UI consomme résultat]
+  D2D[D2-D Extensions] -.->|gated| D2B
+```
+
+| Lot | Composants FA-C | Sortie |
+|-----|-----------------|--------|
+| **D2-A** | Catalog Projection (+ envelope partiel) | Validated Cycle Type Projection |
+| **D2-B** | Resolution + Consumption | Proof ou Failure CKC |
+| **D2-C** | Orchestrator + Result Projection | Success/Failure D2 |
+| **D2-D** | — | **gated** |
+
+**Reco FA-09 :** composants **strictement séparés par lot** avec contrats progressifs.
+
+## AD. Dépendances et ordre
+
+D1 → D2-A → D2-B → D2-C → (D3 futur) · T-A2 QualifyCycle requis dès D2-C · D2-D après GO.
+
+## AE. Invariants d’architecture fonctionnelle
+
+1. Un propriétaire unique par responsabilité.
+2. Fail-closed avant QualifyCycle.
+3. Statut D2 + T-A2 toujours co-présents en succès CKC.
+4. `executionAuthority=false` / `isMorrisDecision=false`.
+5. Aucune mutation.
+6. Aucune extension active.
+7. Indépendance framework/protocole/stockage.
+
+## AF. Critères d’acceptation d’architecture
+
+AC-D2-FA-01…20 — conformes au GO (propriétaire unique, catalogue ne résout pas, resolver sans profil, consumed après invariants, bridge sans duplication T-A2, statut D2+T-A2, fallback visible, échec bloque QualifyCycle, pas de profil/consumed en Failure, version/hash/correlationId, frontière D3 unique, pas de mutation, authority false, pas d’extensions, slicing distinct, indépendance tech, perte T-A2 documentée, normalisation erreurs, événements non production-ready, décisions FA soumises à Morris).
+
+## AG. Scénarios de validation architecturale
+
+| # | Scénario | Composants | QualifyCycle | Résultat |
+|---|----------|------------|--------------|----------|
+| 1 | Detailed → Light | 1→2→3→QC→4 | oui | Success Light |
+| 2 | Synthetic → Standard | idem | oui | Success Standard |
+| 3 | Fallback + disclosure | idem | oui | Success + fallbackUsed |
+| 4 | Critical + CKC OK | idem | oui | Success Critical |
+| 5 | Version incompatible | 1→4 | non | Failure |
+| 6 | Hash stale | 1→4 | non | Failure |
+| 7 | Type non sélectionnable | 1→4 | non | Failure |
+| 8 | Mapping invalide | 1→2→4 | non | Failure |
+| 9 | Résolution incohérente | 1→2→4 | non | Failure |
+| 10 | executionAuthority=true | 1→2→4 | non | Failure |
+| 11 | Preuve incomplète | 1→2→4 | non | Failure |
+| 12 | Signaux incomplets | 1→2→3→4 | non | Failure |
+| 13 | Critical+lowRiskBounded | 1→2→3→QC→4 | oui | Critical (T-A2) |
+| 14 | Capitalization | idem | oui | capitalizationViaCycleTypeId |
+| 15 | Erreur interne | *→4 | non si avant QC | Failure |
+| 16 | D3 appelle QC direct | — | interdit | Anti-claim |
+| 17 | Extension implicite | 2→4 | non | Failure |
+| 18 | correlationId perdu | *→4 | non | Failure |
+| 19 | Mismatch statut/T-A2 | 2→4 | non | Failure |
+| 20 | consumed après échec | 2/4 | non | Invariant cassé → Failure |
+
+## AH. Options et trade-offs
+
+| Critère | FA-A (3) | FA-B (5) | FA-C (4) |
+|---------|----------|----------|----------|
+| Simplicité | Haute | Basse | Moyenne |
+| Cohésion preuve | Risque couplage resolver | Haute | Haute si sous-rôles clairs |
+| Couplage | Moyen-élevé | Faible | Moyen |
+| Testabilité | Moyenne | Haute | Haute |
+| Sur-architecture | Faible | Risque | Contrôlé |
+| Slicing A/B/C | Moins net | Très net | Net |
+| Compatibilité T-A2 | OK | OK | OK |
+| Impact D3 | Bridge chargé | Clair | Clair |
+| Dette | Moyenne si grossit | Contrats nombreux | Équilibrée |
+
+### Challenge — propriétaire de la preuve
+
+| Option | Cohésion | Fail-closed | Slicing |
+|--------|----------|-------------|---------|
+| Resolver seul | Risque mélange | Moyen | B flou |
+| Autonome | Haute | Haute | B net (FA-B) |
+| Bridge | Mauvaise | Risque late | C pollué |
+
+**Reco candidate :** preuve = **responsabilité autonome logique** ; sous FA-C elle vit dans le composant 2 comme Validator distinct du Resolver ; sous FA-B = composant 3 dédié.
+
+### Recommandation candidate globale (**ADOPTÉE — FA-C**)
+
+**FA-C** — quatre composants : équilibre Critical / anti-sur-architecture ; preuve distincte logiquement dans Resolution+Consumption ; orchestrateur mince ; projection résultat séparée pour D3.
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS` (voir §B2).
+
+## AI. Decision pack Morris
+
+**Statut pack :** `DECIDED — ADOPTED BY MORRIS` pour D-V3.1-D2-FA-01…12 (formulation §B2). Options et trade-offs historiques **conservés**.
+
+### D-V3.1-D2-FA-01 — Modèle de composants
+
+- Options : FA-A / FA-B / FA-C
+- Reco candidate : **FA-C**
+- **Retenu :** FA-C
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-02 — Propriétaire de la preuve
+
+- Options : resolver / autonome / bridge
+- Reco candidate : **autonome** (logique ; colocated en FA-C dans comp. 2)
+- **Retenu :** preuve autonome logiquement, colocalisée dans le composant 2
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-03 — Frontière du resolver
+
+- Options : résolution only / + projection T-A2 / + consommation
+- Reco candidate : **résolution + projection T-A2** ; consommation séparée logiquement (même comp. si FA-C)
+- **Retenu :** résolution + projection T-A2
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-04 — Point de normalisation des erreurs
+
+- Options : chaque composant / orchestrateur / projection
+- Reco candidate : **orchestrateur + projection résultat**
+- **Retenu :** orchestrateur + Result Projection
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-05 — Propriétaire du statut détaillé D2
+
+- Options : resolver / preuve / résultat final only
+- Reco candidate : **resolver** (produit) ; preuve et résultat le **conservent**
+- **Retenu :** statut détaillé produit par le resolver et conservé ensuite
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-06 — Point de contrôle version/hash
+
+- Options : projection catalogue / bridge / double contrôle
+- Reco candidate : **projection catalogue** (principal)
+- **Retenu :** contrôle version/hash dans Catalog Projection
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-07 — Modèle de traçabilité
+
+- Options : correlationId minimal / +événements / enveloppe complète
+- Reco candidate : **correlationId + événements fonctionnels minimaux**
+- **Retenu :** correlationId + événements minimaux
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-08 — Frontière D3
+
+- Options : contrat unique / appels séparés / projection spécifique
+- Reco candidate : **contrat résultat unique**
+- **Retenu :** contrat résultat unique pour D3
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-09 — Allocation D2-A/B/C
+
+- Options : séparés par lot / partagés progressifs / lot unique
+- Reco candidate : **composants séparés par lot**
+- **Retenu :** composants répartis clairement entre D2-A/B/C · D2-D gated
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-10 — Compatibilité T-A2
+
+- Options : réutilisation directe / adaptation contrôlée / domaine parallèle
+- Reco candidate : **adaptation contrôlée** ; domaine parallèle **rejeté** sauf preuve exceptionnelle
+- **Retenu :** adaptation contrôlée de T-A2
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-11 — Formalisation des événements
+
+- Options : aucun / minimaux / audit complet
+- Reco candidate : **événements fonctionnels minimaux**
+- **Retenu :** événements fonctionnels minimaux
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-FA-12 — Gate de sortie
+
+- Options : arbitrage puis archi technique / arbitrage puis backlog D2-A / Delivery directe
+- Reco candidate : **arbitrage Morris puis architecture technique** (ou backlog D2-A si archi technique légère différée) — **pas** Delivery directe
+- **Retenu :** architecture technique avant backlog Delivery
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+## AJ. Questions réservées à l’architecture technique
+
+Fichiers/modules · classes · CkcResolverPort · ResolveCycleKnowledgeContract · composition root · DI · TS contracts · enums · erreurs · hash algo · sérialisation · validation refs sans Markdown · source métadonnées · cache · perf · audit · tests · migration · packaging D2-A/B/C.
+
+**Traitées comme options dans le document 18 — non tranchées ici.** Voir [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md).
+
+## AK. Risques et réserves
+
+Sur-architecture · composants artificiels · chevauchements · confusion resolver/consommation/bridge · domaine parallèle · duplication T-A2 · perte primary/fallback · hash mal borné · correlationId perdu · normalisation trop tardive · fail-open · D3 multi-couplé · multi-CKC implicite · slicing non livrable · audit disproportionné · tech anticipée · Delivery implicite · **INHERITED-R-01 ACCEPTED — STILL TRACEABLE — NOT LIFTED**.
+
+## AL. Gates suivants candidats
+
+```text
+GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2 —
+APPLY ADOPTED D-V3.1-D2-FA-01…12 —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+**Statut :** **consommé** (2026-08-01 16:16 CEST) — voir document 18.
+
+Gate ultérieur (ne pas exécuter ici) : arbitrage decision pack D-V3.1-D2-TA-01…12.
+
+## AM. Verdict
+
+```text
+V3.1-D2 FUNCTIONAL ARCHITECTURE ADOPTED —
+D-V3.1-D2-FA-01…12 RECORDED AS ADOPTED BY MORRIS —
+FA-C RETAINED —
+TECHNICAL ARCHITECTURE AUTHORIZED —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO FIGMA —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+**Statut :** `FUNCTIONAL ARCHITECTURE ADOPTED — TECHNICAL ARCHITECTURE AUTHORIZED — BACKLOG AND DELIVERY REQUIRE DISTINCT MORRIS GATES — D3 NOT OPENED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
new file mode 100644
index 0000000..c4d88af
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
@@ -0,0 +1,610 @@
+# 18 — V3.1-D2 CKC Resolver & QualifyCycle Bridge — Architecture technique
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-08-01 16:29:26 CEST (+0200) |
+| **Cycle projet** | 6 — Architecture technique |
+| **Profil SFIA** | **Critical** |
+| **Typologie** | DOC |
+| **Gate Morris** | `GO ARCHITECTURE TECHNIQUE SFIA STUDIO V3.1-D2 — APPLY ADOPTED D-V3.1-D2-FA-01…12 — NO DELIVERY — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION` (2026-08-01 16:16 CEST +0200) |
+| **Branche** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
+| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| **CKC** | `pilots/03-architecture-technique.md` · candidate v0.1.0 · `executionAuthority=false` |
+| **Statut** | `TECHNICAL ARCHITECTURE ADOPTED — BACKLOG D2-A/B/C AUTHORIZED — NO DELIVERY — D3 NOT OPENED` |
+| **Doc backlog** | [`19-v3-1-d2-a-b-c-delivery-backlog.md`](./19-v3-1-d2-a-b-c-delivery-backlog.md) |
+| **Docs protégés** | 12–16 **inchangés** · 15 SHA `534904ea…` |
+| **Code / tests / Delivery / D3** | **non** |
+
+## B. Gate Morris et décision record FA
+
+**Adoption FA (immédiatement antérieure au GO TA) :** formulation Morris FA-01…12 = recommandations candidates · « ok pour les recommandations ». Heure transcript **indisponible**. Enregistrement documentaire : 2026-08-01 16:29:26 CEST (+0200). GO TA : 2026-08-01 16:16 CEST.
+
+| ID | Retenu |
+|----|--------|
+| FA-01 | **FA-C** |
+| FA-02 | Preuve autonome logiquement, colocalisée composant 2 |
+| FA-03 | Resolver = résolution + projection T-A2 |
+| FA-04 | Normalisation orchestrateur + Result Projection |
+| FA-05 | Statut détaillé produit par resolver, conservé ensuite |
+| FA-06 | Version/hash dans Catalog Projection |
+| FA-07 | correlationId + événements minimaux |
+| FA-08 | Contrat résultat unique D3 |
+| FA-09 | D2-A / D2-B / D2-C séparés · D2-D gated |
+| FA-10 | Adaptation contrôlée T-A2 |
+| FA-11 | Événements fonctionnels minimaux |
+| FA-12 | Architecture technique avant backlog Delivery |
+
+Voir [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) §B2 — `DECIDED — ADOPTED BY MORRIS`.
+
+## B2. Decision record Morris — TA adoptées · Backlog autorisé
+
+| Champ | Valeur |
+|-------|--------|
+| **Formulation réelle Morris** | `TA-01 = TA-P-A` · `TA-02 = fonctions de domaine pures` · `TA-03 = HASH-A` · `TA-04 = CKC-S-A` · `TA-05 = PORT-B` · `TA-06 = TYPE-B` · `TA-07 = PROOF-A` · `TA-08 = ORCH-A` · `TA-09 = ERR-B` · `TA-10 = AUDIT-A` · `TA-11 = COMP-B` · `TA-12 = backlog D2-A/B/C séparé après arbitrage` · « ok pour les recommandations » |
+| **Adoption** | Immédiatement antérieure au GO Backlog |
+| **Heure d’adoption transcript** | **indisponible** |
+| **Date documentaire d’enregistrement** | 2026-08-01 16:55:05 CEST (+0200) |
+| **GO Backlog** | 2026-08-01 16:45 CEST (+0200) — `GO BACKLOG SFIA STUDIO V3.1-D2-A/B/C — APPLY ADOPTED D-V3.1-D2-TA-01…12 — PREPARE TESTABLE DELIVERY SLICES — NO IMPLEMENTATION — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION` |
+| **Option globale retenue** | TA-P-A · HASH-A · CKC-S-A · PORT-B · TYPE-B · PROOF-A · ORCH-A · ERR-B · AUDIT-A · COMP-B · backlog A→B→C |
+| **Conséquence** | Backlog D2-A/B/C **autorisé** · Delivery / D3 / UI / CreateCycle / D2-D **fermés** · aucune implémentation |
+| **Document 19** | [`19-v3-1-d2-a-b-c-delivery-backlog.md`](./19-v3-1-d2-a-b-c-delivery-backlog.md) |
+
+## C. Sources consultées
+
+Gouvernance · CKC `03-architecture-technique` · routing matrix · §4.6 · framing 08/12–17/README · D1 · T-A2 intégral (`types`/`errors`/`invariants`/`qualification`/`ckcResolver`/`cycleAudit`/`resolveCycleKnowledgeContract`/`qualifyCycle`/`createCycle`/`memoryCkcResolver`/`observability`/`index`) · tests `oa/cycle/**` · `package.json`/`tsconfig`/`vitest`/`next.config` · handoff `fa0ceebc…`.
+
+**Limite pre-check ChatGPT :** état local non inspecté directement par ChatGPT ; contrôle local Cursor obligatoire — **exécuté et conforme**.
+
+## D. Git Truth
+
+Branche framing @ `e1befcb8…` · main/origin/main alignés 0/0 · staged vide · 08/README modifiés · 15/16/17 non suivis · 77 WT · prune vide · branche projet distante absente · handoff tip `fa0ceebc…` blob `4e764890…` · doc15 `534904ea…`.
+
+## E. CKC Architecture technique
+
+Pilote `03-architecture-technique.md` · candidate · héritage §4.6 · guidance cognitive · **pas** d’autorité d’exécution. Dimensions 1–11 couvertes. Interdictions : stack par habitude · mono-option · benchmark inventé · sécu cosmétique · astronaut · code sous archi · claims scalable/secure/prod/zéro dette sans preuve.
+
+## F. Architecture fonctionnelle adoptée
+
+FA-C : (1) Catalog Projection (2) CKC Resolution and Consumption — resolver + proof logique distincte (3) Qualification Orchestrator (4) Read-only Result Projection (T) Error/Traceability Envelope.
+
+## G. État technique actuel
+
+### Observations confirmées localement
+
+| Élément | Observation |
+|---------|-------------|
+| `cycleTypeCatalog.ts` | Domaine pur · 15 entrées · version `0.1.0-v3.1-d1` · mapping CKC · **pas de hash** · pas d’I/O |
+| `CkcResolverPort` | `cycleTypeId`/`resolvedAt`/`correlationId?` → `CkcResolution` |
+| `MemoryCkcResolver` | Registre mémoire indépendant catalogue · `randomBytes` · unavailable si absent · **pas** primary vs fallback · **pas** preuve D2 |
+| `ResolveCycleKnowledgeContract` | Guidance · absent/unavailable = `ok:true` · ≠ fail-closed D2 |
+| `QualifyCycle` | Recommandation · `isMorrisDecision=false` · ne résout pas CKC |
+| `CycleAuditEvent` | Union T-A2 · `oa.ckc.resolved` / `oa.cycle.qualified` · pas d’événements D2 |
+| `createInMemoryCycleServices` | Composition T-A2 + repos mutation |
+| `node:crypto`/`randomBytes` | createCycle, trajectories, epistemic, **MemoryCkcResolver** |
+| Socle | Next 15 · React 19 · TS strict · bundler · Vitest · **pas** de lib hash dédiée |
+
+## H. Contraintes et NFR
+
+| NFR | Exigence |
+|-----|----------|
+| Déterminisme | Mêmes entrées contractuelles → même résultat hors timestamps/IDs variables · hash reproductible · mapping stable |
+| Testabilité | Domaine pur · clock/audit injectables · pas de Next obligatoire · fail-closed vérifiable |
+| Compatibilité | QualifyCycle inchangé · adaptation T-A2 · API publique additive · pas de domaine parallèle |
+| Sécurité | Pas de Markdown parse · refs typées · pas de secret · correlationId ≠ identité · pas de payload sensible |
+| Performance | 15 entrées · pas de cache disproportionné · coût hash explicite · **aucun claim sans mesure** |
+| Résilience | Fail-closed · pas de profil/`consumed=true` après échec · pas de mutation partielle |
+| Observabilité | Événements minimaux · correlationId · pas de RUN readiness |
+| DevOps | Next/Vitest/TS · pas de nouvelle dépendance sans justification · **pas de CI dans ce cycle** |
+
+## I. Principes techniques
+
+Les 25 principes du GO (catalogue autoritatif, no Markdown, QualifyCycle inchangé, adaptation T-A2, proof distincte, fail-closed avant QualifyCycle, `executionAuthority=false`, Core seul, contrat D3 unique, pas de mutation, noms sémantiques hors dette « D2 », API additive).
+
+## J. Frontière serveur/client
+
+```mermaid
+flowchart TB
+  subgraph shareable [Partageable / pur]
+    Cat[cycleTypeCatalog]
+    Types[Contrats D2 types]
+    Proj[Catalog Projection pure]
+    Proof[Proof Builder pur]
+    ResProj[Result Projection pure]
+  end
+  subgraph serverish [Serveur ou neutre injecté]
+    Orch[Orchestrator use case]
+    Manifest[CKC metadata manifest]
+    Audit[CycleAuditPort sink]
+    Crypto[node:crypto — INTERDIT côté client D2]
+  end
+  D3[Futur D3] -->|importe seulement| Types
+  D3 -->|importe seulement| ResProj
+  D3 -.->|interdit| Crypto
+  D3 -.->|interdit| ManifestInfra[Infra résolution]
+```
+
+- Modules purs : catalogue, projection, preuve, types résultat, mapping statut.
+- Orchestrateur : neutre si dépendances injectées (clock/audit/resolver) — **pas** d’import `node:crypto`.
+- Toute crypto/hash runtime Node : **adaptateur serveur** ou constante précalculée (HASH-A).
+- Aucune route / Server Action / React dans ce cycle.
+
+## K. Cartographie des modules actuels
+
+```mermaid
+flowchart LR
+  index[index.ts barrel + factory]
+  domain[domain/*]
+  app[application/*]
+  ports[ports/*]
+  infra[infrastructure/*]
+  index --> domain
+  index --> app
+  index --> ports
+  index --> infra
+  app --> domain
+  app --> ports
+  infra --> ports
+  infra --> domain
+  createCycle[CreateCycle] --> repos[Repos mutation]
+  resolveCKC[ResolveCKC guidance] --> ckcPort[CkcResolverPort]
+  qualify[QualifyCycle] --> qualDom[qualification.ts]
+```
+
+## L. Options de packaging technique
+
+| | TA-P-A Extension répertoires existants | TA-P-B Sous-module sémantique borné | TA-P-C Domaine parallèle |
+|--|--|--|--|
+| Cohésion | Moyenne | Haute | Fausse isolation |
+| Couplage T-A2 | Faible-moyen | Contrôlé | Duplication |
+| API | Barrel existant | Facade bornée | Divergence |
+| Dette | Fichiers nombreux | Structure nouvelle | **Élevée** |
+| Slicing A/B/C | Possible par fichiers | Clair | Risqué |
+| Réversibilité | Haute | Moyenne | Faible |
+
+**Reco candidate : TA-P-A** — fichiers sémantiques sous `domain/`/`application/`/`ports/`/`infrastructure/` avec noms **métier** (ex. `catalogProjection`, `ckcConsumptionProof`, `qualifyCycleBridge`) — **pas** un package externe. TA-P-C **rejeté**. TA-P-B optionnellement si Morris veut façade plus stricte.
+
+## M. Architecture cible candidate (non adoptée)
+
+Nommage sémantique candidat (documentaire) :
+
+| Rôle FA-C | Emplacement candidat | Nature |
+|-----------|----------------------|--------|
+| Catalog Projection | `domain/catalogProjection.ts` | Fonctions pures |
+| catalogHash | `domain/catalogFingerprint.ts` (+ constante) | Pur |
+| Contrats D2 | `domain/ckcQualificationContracts.ts` | Types |
+| Resolver D2 | `ports/ckcQualificationResolver.ts` + infra adaptateur | Port + infra |
+| Manifest CKC | `infrastructure/ckcReferenceManifest.ts` | Données typées |
+| Proof Builder | `domain/ckcConsumptionProof.ts` | Pur |
+| Orchestrator | `application/qualifyCycleWithCkc.ts` | Use case |
+| Result Projection | `domain/ckcQualificationResult.ts` | Pur |
+| Erreurs D2 | `domain/ckcQualificationErrors.ts` | Types + adaptateur |
+| Factory | `createCkcQualificationServices` dans `index.ts` ou voisin | Composition |
+
+```mermaid
+flowchart TB
+  CP[catalogProjection] --> OR[qualifyCycleWithCkc]
+  RES[ckcQualificationResolver] --> OR
+  PRF[ckcConsumptionProof] --> OR
+  QC[QualifyCycle T-A2] --> OR
+  OR --> RP[ckcQualificationResult]
+  MAN[ckcReferenceManifest] --> RES
+  AUD[CycleAuditPort] --> OR
+  CLK[ClockPort] --> OR
+```
+
+**Imports interdits :** CreateCycle repos · Markdown FS · `node:crypto` dans modules purs · QualifyCycle modifié · UI.
+
+### Séquence nominale technique
+
+```mermaid
+sequenceDiagram
+  participant Caller
+  participant CP as catalogProjection
+  participant RES as ckcQualificationResolver
+  participant PRF as ckcConsumptionProof
+  participant OR as qualifyCycleWithCkc
+  participant QC as QualifyCycle
+  participant RP as resultProjection
+  Caller->>OR: Selection Context + signals + correlationId
+  OR->>CP: projectSelectableCycleType
+  CP-->>OR: Validated Projection
+  OR->>RES: resolve(mapping)
+  RES-->>OR: Resolution Result + detailedStatus
+  OR->>PRF: buildProof
+  PRF-->>OR: consumed=true
+  OR->>QC: execute(QualifyCycleRequest)
+  QC-->>OR: recommendation
+  OR->>RP: assemble Success
+  RP-->>Caller: Success Result
+```
+
+### Séquence fail-closed technique
+
+```mermaid
+sequenceDiagram
+  participant Caller
+  participant CP as catalogProjection
+  participant RES as ckcQualificationResolver
+  participant OR as qualifyCycleWithCkc
+  participant RP as resultProjection
+  Caller->>OR: contexte
+  alt catalog/version/hash KO
+    OR->>CP: project
+    CP-->>OR: erreur locale
+    OR->>RP: normalize Failure
+    RP-->>Caller: Failure (QC non appelé)
+  else CKC/preuve KO
+    OR->>CP: project OK
+    OR->>RES: resolve
+    RES-->>OR: erreur locale
+    OR->>RP: normalize Failure
+    RP-->>Caller: Failure (QC non appelé)
+  end
+```
+
+## N. Mapping FA-C → technique
+
+### Dépendances entre composants techniques
+
+```mermaid
+flowchart LR
+  CP[catalogProjection] --> OR[qualifyCycleWithCkc]
+  MAN[ckcReferenceManifest] --> RES[ckcQualificationResolver]
+  RES --> OR
+  RES --> PRF[ckcConsumptionProof]
+  PRF --> OR
+  QC[QualifyCycle] --> OR
+  OR --> RP[ckcQualificationResult]
+  AUD[CycleAuditPort] --> OR
+  CLK[ClockPort] --> OR
+```
+
+| FA-C | Type | Entrées | Sorties | Deps OK | Deps interdites | Public? | Lot | Tests | Réversibilité |
+|------|------|---------|---------|---------|-----------------|---------|-----|-------|---------------|
+| Catalog Projection | domaine pur | Selection Context | Validated Projection / erreur | catalogue D1 | resolver, QC | oui (lecture) | A | purs | haute |
+| Resolver (+ statut D2 + T-A2) | port+infra | mapping validé | Resolution Result | manifest | QC, CreateCycle | interne/port | B | unit+contrat | moyenne |
+| Proof Builder | domaine pur | Resolution Result | Proof / erreur | aucun I/O | QC | interne | B | purs | haute |
+| Orchestrator | application | contexte+signaux | assemblage | CP,RES,PRF,QC,clock,audit | repos écriture | façade | C | intégration | moyenne |
+| Result Projection | domaine pur | pièces + erreurs | Success/Failure | aucun I/O | rules métier | **contrat D3** | C | purs | haute |
+| Envelope T | transverse | correlationId | events/erreurs | audit port | IAM | via orch | A–C | unit | haute |
+
+## O. Contrats et types TypeScript candidats
+
+**Reco TYPE-B :** fichier `domain/ckcQualificationContracts.ts` (ou nom sémantique équivalent) exporté additivement via `index.ts`.
+
+Types candidats (documentaires) :
+
+- `CatalogSelectionContext`
+- `ValidatedCycleTypeProjection`
+- `D2DetailedCkcStatus` (statuts doc 16)
+- `CkcQualificationResolution`
+- `CkcConsumptionProof`
+- `CkcQualificationSuccessResult` / `CkcQualificationFailureResult`
+- Réutilisation : `CkcLevel`/`CkcStatus`/`CkcSource`/`QualifyCycleRequest`/`QualifyCycleRecommendation` T-A2
+
+TYPE-C rejeté (perte primary/fallback/preuve). TYPE-A acceptable mais fichier `types.ts` déjà large.
+
+## P. D2-A — Catalog Projection
+
+API candidate pure :
+
+- `projectSelectableCycleType(ctx) → ValidatedCycleTypeProjection | CatalogProjectionError`
+- Réutilise `getCycleTypeById` / validateurs D1 existants
+- Vérifie `catalogVersion` / `catalogHash` / lifecycle / sélectionnabilité
+- Expose mapping CKC Core
+- **N’appelle pas** resolver ni QualifyCycle
+
+## Q. Version et catalogHash
+
+Contenu contractuel de l’empreinte (candidat) :
+
+`cycleTypeId` · `canonicalKey` · `lifecycleStatus` · `methodCycleNumber` · mapping CKC (level, primary, fallback, doctrine, executionAuthority, unavailableBehavior) · références.
+
+**Labels/descriptions :** **exclure** de l’empreinte (changement i18n ≠ stale contractuel) — option à confirmer Morris via TA-03.
+
+| | HASH-A constante+test | HASH-B sérialisation+adaptateur | HASH-C artefact build |
+|--|--|--|--|
+| Client-safe | Oui | Selon adaptateur | Oui si statique |
+| Dérive | Manuelle | Faible | Pipeline |
+| Dette | Faible | Crypto/env | CI/script |
+| Proportion 15 entrées | **Bonne** | Moyenne | Disproportionnée |
+
+**Reco candidate : HASH-A** — constante versionnée exportée + test de cohérence sur projection contractuelle. HASH-B en réserve si dérive manuelle observée. HASH-C déconseillé pour cette taille.
+
+Algo : **non choisi** ici (SHA-256 vs autre) — si HASH-A, l’algo est hors runtime (empreinte figée).
+
+## R. D2-B — CKC Resolution
+
+**Reco PORT-B :** port spécialisé `CkcQualificationResolverPort` (fail-closed, detailed/fallback, statut D2) + projection vers champs T-A2 (`level`/`status`/`source`) sans casser `CkcResolverPort` historique.
+
+PORT-A risque de rupture CreateCycle. PORT-C incompatible (guidance `ok` sur unavailable).
+
+Flux : detailed → fallback synthetic → synthetic primaire · Core seul · `executionAuthority=false` forcé · pas de QualifyCycle.
+
+## S. Source runtime des métadonnées CKC
+
+| | CKC-S-A manifest typé | CKC-S-B enrichir D1 | CKC-S-C MemoryCkcResolver |
+|--|--|--|--|
+| Autorité | Registre contrôlé | Catalogue | Double source |
+| Markdown | Non | Non | Non |
+| Fallback détaillé | Oui si modélisé | Possible | **Non** |
+| Preuve D2 | Compatible | Couplage | **Absente** |
+| Impact D1 | Nul | **Fort** | Nul mais incorrect |
+
+**Reco candidate : CKC-S-A** — manifest TypeScript des références autorisées (niveau, version, disponibilité, source). Paths Git = provenance, **pas** ouverts. CKC-S-C **rejeté** comme source autoritative produit. CKC-S-B nécessite GO D1 distinct.
+
+## T. CKC Consumption Validator / Proof Builder
+
+**Reco PROOF-A :** fonction pure domaine — reçoit résolution + contexte validé → Proof ou erreur. Aucune I/O. Colocalisé module Resolution+Consumption (FA-02). PROOF-C viole FA-02. PROOF-B inutile sans deps.
+
+## U. Statuts détaillés et mapping T-A2
+
+Resolver produit statut D2 (doc 16) **et** projection `CkcLevel`/`CkcStatus`/`CkcSource`. Proof + Success conservent le détail pour compenser perte primary/fallback dans T-A2. Pas de nouveaux enums T-A2.
+
+## V. D2-C — Qualification Orchestrator
+
+**Reco ORCH-A :** use case `QualifyCycleWithCkc` (nom candidat) injecté :
+
+dépendances : CatalogProjection · CkcQualificationResolver · ProofBuilder · **QualifyCycle existant** · ClockPort · Audit · ResultProjection.
+
+ORCH-B / ORCH-C **rejetés** (mélange responsabilités / guidance).
+
+Règles : signaux 6 · pas `requestedProfile` · QualifyCycle **une fois** · stop si non consommé · normalisation FA-04.
+
+## W. Réutilisation de QualifyCycle
+
+Fonctionnellement **inchangé**. Orchestrateur appelle `execute(QualifyCycleRequest)`. Domaine `qualification.ts` non dupliqué. `isMorrisDecision=false` conservé.
+
+## X. Read-only Result Projection
+
+Fonctions pures assemblant Success/Failure (doc 16). Disclosures (fallback). Frontière unique D3. Aucune règle métier. Aucune persistance.
+
+## Y. Erreurs et normalisation
+
+**Reco ERR-B :** codes/erreurs D2 typés (`CATALOG_*`, `CKC_*`, `SIGNALS_*`, … doc 16) + adaptateur optionnel vers enveloppe `CycleStructuredError` si besoin de sink commun. ERR-A élargit fortement `CycleDetailCode` (risque dilution). ERR-C rejeté.
+
+Flux : erreur locale composant → orchestrateur arrête → Result Projection émet Failure (pas de profil, pas `consumed=true`).
+
+## Z. Traçabilité et événements
+
+**Reco AUDIT-A :** extension **additive** de `CycleAuditEvent` avec événements D2 minimaux (catalog validated, resolution started/succeeded/failed, fallback used, consumption validated/rejected, qualification started/succeeded, result produced, request failed). AUDIT-C incompatible FA-07/11. AUDIT-B si union devient trop large.
+
+Champs : `correlationId` obligatoire · `ts` · codes · **pas** de données sensibles.
+
+## AA. Composition root et API publique
+
+**Reco COMP-B :** factory/façade `createCkcQualificationServices` (nom candidat) — **sans** repos mutation. Réutilise `QualifyCycle` + clock + audit. COMP-A couple D2 à CreateCycle. COMP-C rejeté (UI).
+
+Exports additifs via `index.ts` : contrats résultat + factory. **Pas** de breaking change obligatoire.
+
+## AB. Déterminisme, horloge et identifiants
+
+- `resolvedAt`/`qualifiedAt` : ClockPort injectable.
+- `correlationId` : fourni par appelant ; absent → Failure.
+- `ckcResolutionId` historique (`randomBytes`) : **ne pas** hériter pour logique déterministe D2 ; ID résultat read-only **optionnel** — si requis, générateur injecté ou dérivé déterministe du contexte (décision TA ouverte).
+- Pas de dépendance à l’ordre d’un `Map` mutable pour le hash.
+
+## AC. Sécurité
+
+Analyse bornée : refs CKC via manifest typé · pas de FS/Markdown · pas de secrets · correlationId non-IAM · Failure sans fuite `internalCauseRef` côté D3 · pas d’exposition infra à D3.
+
+**Aucun claim « sécurisé ».**
+
+## AD. Performance et résilience
+
+15 entrées · projection O(n) négligeable · hash constante (HASH-A) O(1) runtime · **aucune mesure** → **aucun claim perf**. Résilience = fail-closed documenté.
+
+## AE. Observabilité et DevOps fit
+
+Événements minimaux · journals mémoire/console existants · Vitest pour domaine · **pas** de CI/script dans ce cycle · **pas** de nouvelle dépendance proposée (HASH-A / WebCrypto non requis).
+
+## AF. Compatibilité et migration T-A2
+
+| Artefact | Stratégie |
+|----------|-----------|
+| QualifyCycle | Inchangé |
+| ResolveCycleKnowledgeContract | Conservé pour CreateCycle/guidance · **non** utilisé comme exploitabilité D2 |
+| CkcResolverPort / MemoryCkcResolver | Conservés historiques · non source autoritative D2 |
+| CycleServices | Inchangé ou extension additive optionnelle |
+| Tests historiques | Régression obligatoire en Delivery |
+
+## AG. Stratégie de tests future (aucun test créé)
+
+**D2-A :** version/hash · inconnu · lifecycle · stale · déterminisme fingerprint.
+
+**D2-B :** detailed/synthetic/fallback · mapping invalide · ref non autorisée · executionAuthority · preuve · extension implicite · mapping T-A2.
+
+**D2-C :** signaux · QC ×1 · QC jamais si amont KO · Critical/Capitalization · Success/Failure · correlationId · events.
+
+**Intégration :** A→B→C · frontière unique · aucune mutation · coexistence factory T-A2 · régression.
+
+```mermaid
+flowchart TB
+  unitA[Unit D2-A purs] --> int[Intégration A-B-C]
+  unitB[Unit D2-B port+proof] --> int
+  unitC[Unit D2-C orch+QC mock] --> int
+  regr[Régression T-A2 historiques] --> int
+```
+
+## AH. Packaging D2-A / D2-B / D2-C
+
+```mermaid
+flowchart LR
+  A[D2-A Catalog Projection + fingerprint] --> B[D2-B Resolver + Manifest + Proof]
+  B --> C[D2-C Orchestrator + Result + Audit events]
+  C -.->|futur| D3[D3 consomme Result]
+```
+
+Chaque lot : contrats de sortie testables · gate Morris Delivery distinct · D2-D gated.
+
+## AI. Dépendances et impacts build
+
+Aucune nouvelle dépendance runtime recommandée. Impact : fichiers TS additifs · typecheck/Vitest · attention imports `node:crypto` hors client. **package.json / CI non modifiés** dans ce cycle.
+
+## AJ. Alternatives et trade-offs
+
+Synthèse : packaging A vs B · HASH A/B/C · CKC-S A/B/C · PORT A/B/C · TYPE A/B/C · PROOF A/B/C · ORCH A/B/C · ERR A/B/C · AUDIT A/B/C · COMP A/B/C — voir §§ L–AA et decision pack.
+
+**Recommandation technique globale (**ADOPTÉE**) :**
+
+TA-P-A · Catalog Projection pure · HASH-A · CKC-S-A · PORT-B · TYPE-B · PROOF-A · ORCH-A · ERR-B · AUDIT-A · COMP-B · slicing A→B→C.
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS` (voir §B2).
+
+## AK. Decision pack Morris
+
+**Statut pack :** `DECIDED — ADOPTED BY MORRIS` pour D-V3.1-D2-TA-01…12 (formulation §B2). Options et trade-offs historiques **conservés**.
+
+### D-V3.1-D2-TA-01 — Packaging
+
+- Problème : où placer le code D2 sans domaine parallèle.
+- Options : extension répertoires / sous-module borné / domaine parallèle.
+- Reco : **extension sémantique (TA-P-A)** ; parallèle rejeté.
+- **Retenu :** TA-P-A
+- NFR : cohésion, dette, réversibilité.
+- Impact API : additive via barrel.
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-02 — Catalog Projection
+
+- Options : fonctions pures / service applicatif / extension comportementale catalogue.
+- Reco : **fonctions de domaine pures**.
+- **Retenu :** fonctions de domaine pures
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-03 — catalogHash
+
+- Options : constante+test / sérialisation+adaptateur / artefact build.
+- Reco : **HASH-A**.
+- **Retenu :** HASH-A (labels/descriptions exclus)
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-04 — Source métadonnées CKC
+
+- Options : manifest typé / enrichir D1 / MemoryCkcResolver.
+- Reco : **CKC-S-A** ; Memory comme autorité **rejeté**.
+- **Retenu :** CKC-S-A
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-05 — Resolver port
+
+- Options : évoluer port / port D2+adaptateur / wrapper ResolveCKC.
+- Reco : **PORT-B**.
+- **Retenu :** PORT-B
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-06 — Placement contrats
+
+- Options : types.ts / fichier dédié / T-A2 exclusive.
+- Reco : **fichier domaine sémantique dédié (TYPE-B)**.
+- **Retenu :** TYPE-B
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-07 — Preuve
+
+- Options : validator pur / service / orchestrateur.
+- Reco : **PROOF-A**.
+- **Retenu :** PROOF-A
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-08 — Orchestration
+
+- Options : nouveau use case / modifier QualifyCycle / modifier ResolveCKC.
+- Reco : **ORCH-A** ; B/C rejetés.
+- **Retenu :** ORCH-A
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-09 — Erreurs
+
+- Options : étendre CycleDetailCode / erreurs D2+adaptateur / génériques.
+- Reco : **ERR-B**.
+- **Retenu :** ERR-B
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-10 — Audit
+
+- Options : extension CycleAuditEvent / port D2+adaptateur / aucun.
+- Reco : **AUDIT-A**.
+- **Retenu :** AUDIT-A
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-11 — Composition / API
+
+- Options : étendre CycleServices / factory D2 séparée / depuis D3.
+- Reco : **COMP-B** ; depuis D3 rejeté.
+- **Retenu :** COMP-B
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+### D-V3.1-D2-TA-12 — Slicing / gate sortie
+
+- Options : backlog A/B/C séparé / lot unique / Delivery directe.
+- Reco : **backlog séparé après arbitrage TA** ; Delivery directe déconseillée.
+- **Retenu :** backlog D2-A/B/C séparé
+- Statut : **DECIDED — ADOPTED BY MORRIS**
+
+Pour chaque décision : options et reco historiques conservés · **retenues adoptées** · dette/réversibilité documentées · T-A2 préservé · D3 consomme résultat · Delivery **non autorisée** dans ce cycle.
+
+## AL. Questions ouvertes
+
+- Nom exact des fichiers/modules sémantiques.
+- Inclusion labels dans fingerprint.
+- Algorithme si HASH-B choisi plus tard.
+- Besoin d’un `qualificationResultId`.
+- Étendue exacte des événements additifs vs port dédié si union grossit.
+- Export public minimal pour D3 (types only vs helpers).
+- Stratégie de versionnement `CYCLE_TYPE_CATALOG_VERSION` vs fingerprint.
+- Migration progressive MemoryCkcResolver (tests only) vs dépréciation documentation.
+
+## AM. Risques, dette et réversibilité
+
+Sur-architecture · nommage « D2 » · types.ts surchargé · domaine parallèle · duplication T-A2 · port cassant · ResolveCKC mal réutilisé · double source CKC · Markdown · hash manuel divergent · sérialisation non canonique · `node:crypto` client · artefact build · random ID · correlationId perdu · erreurs diluées · audit/factory surchargés · D3↔infra · fail-open · mutation · package inutile · slicing non livrable · Delivery implicite · claims prod sans preuve · **INHERITED-R-01 ACCEPTED — STILL TRACEABLE — NOT LIFTED**.
+
+Réversible facilement : HASH-A→B · AUDIT-A→B · COMP-B wiring. Coûteux : PORT-A cassant · domaine parallèle · enrichissement D1.
+
+## AN. Backlog handoff candidat
+
+Backlog D2-A/B/C : voir [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) — **autorisé** ; Delivery **fermée**.
+
+## AO. Gates suivants candidats
+
+```text
+GO BACKLOG SFIA STUDIO V3.1-D2-A/B/C —
+APPLY ADOPTED D-V3.1-D2-TA-01…12 —
+PREPARE TESTABLE DELIVERY SLICES —
+NO IMPLEMENTATION —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+**Statut :** **consommé** (2026-08-01 16:45 CEST) — voir document 19.
+
+Gate Delivery candidat (ne pas exécuter) : GO DELIVERY V3.1-D2-A …
+
+## AP. Critères d’acceptation AC-D2-TA-01…24
+
+Respect FA-C · pas de domaine parallèle · QualifyCycle inchangé · ResolveCKC ≠ D2 fail-closed · catalogue autoritatif · no Markdown · source CKC typée · hash déterministe selon option · frontière serveur/client · pas de crypto client implicite · preuve isolable · resolver≠QC · orch≠recalcul · Success/Failure unique · erreurs structurées · correlationId · events mappés · pas de mutation · slicing testable · TS/Next/Vitest · pas de dep sans justification · réversibilité identifiée · **aucun code modifié** · décisions TA soumises à Morris.
+
+## AQ. Scénarios techniques 1–30
+
+Couvrent : import pur · hash stable/stale · labels · type inconnu · detailed/synthetic/fallback · ref non autorisée · executionAuthority · mismatch · preuve · signaux · QC ×1 / jamais · Critical · Capitalization · correlationId · event fallback · Failure normalisée · D3 types-only · coexistence factory · Memory non autoritatif · randomBytes isolé · extension CKC · aucune mutation · bundle client · tests A indépendants · rollback sans casser D1.
+
+## AR. Verdict
+
+```text
+V3.1-D2 TECHNICAL ARCHITECTURE ADOPTED —
+D-V3.1-D2-TA-01…12 RECORDED AS ADOPTED BY MORRIS —
+BACKLOG D2-A/B/C AUTHORIZED —
+NO IMPLEMENTATION —
+NO DELIVERY —
+NO D3 —
+NO UI —
+NO FIGMA —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+**Statut :** `TECHNICAL ARCHITECTURE ADOPTED — BACKLOG D2-A/B/C AUTHORIZED — DELIVERY REQUIRES DISTINCT MORRIS GO — D3 NOT OPENED`
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
new file mode 100644
index 0000000..47a3037
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
@@ -0,0 +1,950 @@
+# 19 — V3.1-D2-A/B/C — Backlog de Delivery
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| **Date/heure/fuseau** | 2026-08-01 16:55:05 CEST (+0200) |
+| **Cycle projet** | 5 — Backlog / user stories |
+| **Profil SFIA** | **Standard** |
+| **Typologie** | DOC |
+| **Gate Morris** | `GO BACKLOG SFIA STUDIO V3.1-D2-A/B/C — APPLY ADOPTED D-V3.1-D2-TA-01…12 — PREPARE TESTABLE DELIVERY SLICES — NO IMPLEMENTATION — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION` (2026-08-01 16:45 CEST) |
+| **Branche** | `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` |
+| **Base** | `main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| **CKC** | Fallback carte synthétique + §4.5 · method-candidate · `executionAuthority=false` |
+| **Statut** | `V3.1-D2 DELIVERY BACKLOG COMPLETE LOCALLY — READY FOR MORRIS VALIDATION — NO DELIVERY AUTHORIZED` |
+| **Stories** | D2-A×4 · D2-B×6 · D2-C×7 = **17** |
+| **Code / Delivery / D3** | **non** |
+
+## B. Gate Morris et décision record TA
+
+Adoption immédiatement antérieure au GO Backlog — formulation Morris TA-01…12 = recommandations · « ok pour les recommandations » · heure transcript **indisponible** · enregistrement documentaire 2026-08-01 16:55:05 CEST (+0200) · GO Backlog 16:45 CEST.
+
+| ID | Retenu |
+|----|--------|
+| TA-01 | TA-P-A |
+| TA-02 | Fonctions domaine pures |
+| TA-03 | HASH-A |
+| TA-04 | CKC-S-A |
+| TA-05 | PORT-B |
+| TA-06 | TYPE-B |
+| TA-07 | PROOF-A |
+| TA-08 | ORCH-A |
+| TA-09 | ERR-B |
+| TA-10 | AUDIT-A |
+| TA-11 | COMP-B |
+| TA-12 | Backlog A→B→C séparé |
+
+Voir [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) §B2 — `DECIDED — ADOPTED BY MORRIS`.
+
+## C. Sources consultées
+
+Gouvernance · carte synthétique · routing · §4.5 · framing 08/12–18/README · D1/T-A2 chemins confirmés · handoff `84963516…`.
+
+**Limite pre-check ChatGPT :** état local non inspecté par ChatGPT ; contrôle Cursor **PASS**.
+
+## D. Git Truth
+
+framing @ `e1befcb8…` · main 0/0 · staged vide · 15–18 non suivis · 08/README modifiés · 77 WT · handoff tip `84963516…` blob `92130ad0…` · doc15 `534904ea…` · doc16 `d65088ac…`.
+
+## E. CKC Backlog et fallback
+
+Pilote détaillé **absent** → fallback `02-fifteen-cycles-synthetic-map.md` + §4.5 · finalité stories testables · risque stories fourre-tout · `executionAuthority=false`.
+
+## F. Héritage fonctionnel et technique adopté
+
+FA-C · docs 15–17 · TA-01…12 · QualifyCycle inchangé · Core-only · D2-D gated · pas de domaine parallèle.
+
+## G. Objectif du backlog
+
+Découper D2-A/B/C en stories testables pour futurs prompts Delivery — **sans** implémenter ni autoriser Delivery.
+
+## H. Principes de découpage
+
+Une story = un résultat vérifiable · pas de fourre-tout « implémenter D2-A » · INVEST · dépendances explicites · pas d’exigence inventée · pas d’implémentation anticipée · backlog ≠ autorisation Delivery · ordre A→B→C.
+
+## I. Périmètre global inclus
+
+Contrats · fingerprint · Catalog Projection · manifest · port/resolver · erreurs · preuve · events · Result Projection · signaux · orch · factory read-only · tests futurs documentés.
+
+## J. Hors périmètre global
+
+Code · tests exécutés · package/CI · D3/UI/Figma · CreateCycle/mutation · Markdown parse · multi-CKC · D2-D · API/Server Action · nouveau package · rouvrir TA · Delivery.
+
+## K. Ordonnancement D2-A → D2-B → D2-C
+
+```mermaid
+flowchart LR
+  A[D2-A 4 stories] --> B[D2-B 6 stories]
+  B --> C[D2-C 7 stories]
+  D2D[D2-D] -.->|gated| X[hors trajectoire]
+```
+
+B n’entre en Delivery qu’après A intégré/validé. C après A+B. Chaque incrément = GO Delivery distinct.
+
+### Challenge d’ordonnancement (non adopté)
+
+Option alternative : démarrer BL-D2-B-04 en parallèle de BL-D2-B-03 après B-02, et BL-D2-C-01 en parallèle de fin B si contrats preuve stables.
+
+**Impact :** accélération locale possible · **dette :** intégration plus risquée · **risque :** contrats instables.
+
+**Ordre retenu :** A-01→…→A-04 · B-01→…→B-06 · C-01→…→C-07. Aucune adoption d’ordre alternatif.
+
+## L. Vue des épics
+
+| Epic | Stories | Profil candidat | Objectif |
+|------|---------|-----------------|----------|
+| **D2-A** | A-01…A-04 | Standard | Projection catalogue + fingerprint |
+| **D2-B** | B-01…B-06 | Critical | Résolution + preuve |
+| **D2-C** | C-01…C-07 | Critical | Bridge + résultat unique |
+
+## M. Epic D2-A — Catalog Projection
+
+Objectif : projection pure déterministe du catalogue D1 avec version et empreinte contractuelle.
+
+**Critères de sortie D2-A :** contracts · fingerprint protégé · Catalog Projection · erreurs catalogue · tests · aucun resolver/profil/mutation · validable indépendamment.
+
+## N. Stories D2-A
+
+### BL-D2-A-01 — Contrats D2 et projection contractuelle du fingerprint
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-A-01` |
+| **Epic** | D2-A Catalog Projection |
+| **Résultat vérifiable** | Contrats TypeScript D2 dans fichier domaine sémantique dédié ; projection fingerprint contractuelle ; labels/descriptions exclus ; aucune résolution CKC ; aucune dépendance Next/infra. |
+| **Formulation** | En tant que développeur D2, je veux des contrats D2 typés et une définition d’empreinte contractuelle, afin d’ancrer Catalog Projection sans surcharger types.ts. |
+| **Justification** | TYPE-B + HASH-A exigent une base de contrats avant constante et projection. |
+| **Décisions héritées** | TYPE-B · HASH-A · TA-P-A · FA-C |
+| **Préconditions** | TA-01…12 adoptées · catalogue D1 stable · docs 16–18 |
+| **Périmètre inclus** | Fichier contrats sémantique · types Selection Context / Validated Projection / fingerprint fields · exclusion labels |
+| **Hors périmètre** | Resolver · QualifyCycle · factory · hash constante · UI · D3 |
+| **Contrats** | CatalogSelectionContext · fingerprint field set · ValidatedCycleTypeProjection (squelette) |
+| **Fichiers candidats** | `domain/ckcQualificationContracts.ts` · export additif `index.ts` si nécessaire |
+| **Dépendances** | Aucune story D2 antérieure |
+| **Tests futurs** | Compilation TS · tests de type/contrat · absence import infra/node:crypto |
+| **Preuves de fin** | Diff limité · typecheck futur · review pack Delivery |
+| **Risques** | Surcharge types.ts · duplication T-A2 · domaine parallèle |
+| **Stop conditions** | Besoin d’enrichir D1 · rupture API publique · nouveau package |
+| **Réversibilité** | Haute — fichier dédié isolable |
+| **Profil Delivery candidat** | Standard |
+| **Gate Morris** | GO DELIVERY D2-A |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given TypeScript strict, When les contrats D2 sont déclarés dans un fichier dédié, Then ils compilent sans étendre domain/types.ts de façon fourre-tout.
+2. Given le fingerprint contractuel, When on liste ses champs, Then seuls cycleTypeId, canonicalKey, lifecycleStatus, methodCycleNumber, mapping CKC, références, fallback, doctrineStatus, executionAuthority, unavailableBehavior sont inclus.
+3. Given labels/descriptions, When l’empreinte est définie, Then ils sont explicitement exclus.
+4. Given les contrats, When on inspecte les imports, Then aucun import infrastructure, Next ou node:crypto n’existe.
+5. Given T-A2, When on compare, Then pas de duplication complète des types historiques ; adaptation contrôlée seulement.
+
+### BL-D2-A-02 — Constante catalogFingerprint et garde de cohérence
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-A-02` |
+| **Epic** | D2-A Catalog Projection |
+| **Résultat vérifiable** | Constante versionnée exposée ; test de cohérence avec projection contractuelle ; changement contractuel sans MAJ empreinte → échec test ; pas d’artefact build ; pas de crypto runtime. |
+| **Formulation** | En tant que développeur D2, je veux une empreinte HASH-A testée, afin de détecter les drifts catalogue sans package crypto. |
+| **Justification** | HASH-A adopté ; 15 entrées — constante + test proportionné. |
+| **Décisions héritées** | HASH-A · TA-P-A |
+| **Préconditions** | BL-D2-A-01 |
+| **Périmètre inclus** | Constante fingerprint · test cohérence · doc mécanisme simple |
+| **Hors périmètre** | HASH-B/C · script CI · dépendance crypto · resolver |
+| **Contrats** | catalogFingerprint constant + projection contractuelle |
+| **Fichiers candidats** | `domain/catalogFingerprint.ts` · tests `__tests__/oa/cycle/**` |
+| **Dépendances** | BL-D2-A-01 |
+| **Tests futurs** | Même projection → même empreinte · changement champ contractuel → fail · changement label → pas d’obligation MAJ |
+| **Preuves de fin** | Tests fingerprint verts · aucune dep ajoutée |
+| **Risques** | Dérive manuelle · sérialisation non documentée |
+| **Stop conditions** | HASH-A exige artefact/package non adopté |
+| **Réversibilité** | Haute → HASH-B possible plus tard |
+| **Profil Delivery candidat** | Standard |
+| **Gate Morris** | GO DELIVERY D2-A |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given deux projections contractuelles identiques, When on compare à la constante, Then elles correspondent.
+2. Given un champ contractuel modifié sans MAJ constante, When le test de garde s’exécute, Then il échoue.
+3. Given un label/description modifié seulement, When le test s’exécute, Then aucune obligation de changer l’empreinte.
+4. Given le module fingerprint, When on inspecte, Then aucune dépendance crypto runtime ni script CI n’est ajouté.
+
+### BL-D2-A-03 — Catalog Projection pure et fail-closed catalogue
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-A-03` |
+| **Epic** | D2-A Catalog Projection |
+| **Résultat vérifiable** | Fonction pure (cycleTypeId, catalogVersion, catalogHash, correlationId) → Validated Projection ou erreur D2 locale ; validations version/hash/existence/lifecycle/sélectionnabilité ; aucun resolver/QC. |
+| **Formulation** | En tant que consommateur D2, je veux une projection catalogue fail-closed, afin de bloquer les contextes stale avant résolution CKC. |
+| **Justification** | FA-06 + TA-02 ; point de contrôle version/hash. |
+| **Décisions héritées** | TA-02 · HASH-A · FA-06 · ERR-B |
+| **Préconditions** | BL-D2-A-01 · BL-D2-A-02 |
+| **Périmètre inclus** | catalogProjection pure · erreurs catalogue · mapping CKC exposé |
+| **Hors périmètre** | Resolver · preuve · QualifyCycle · factory complète |
+| **Contrats** | ValidatedCycleTypeProjection · erreurs CATALOG_* |
+| **Fichiers candidats** | `domain/catalogProjection.ts` |
+| **Dépendances** | BL-D2-A-01 · BL-D2-A-02 |
+| **Tests futurs** | nominal · version KO · hash stale · type inconnu · deprecated · unavailable · correlationId absent · mapping invalide |
+| **Preuves de fin** | Tests purs · typecheck |
+| **Risques** | Lifecycle mal mappé · fail-open accidentel |
+| **Stop conditions** | Modification contrat D1 requise · parsing Markdown |
+| **Réversibilité** | Haute |
+| **Profil Delivery candidat** | Standard |
+| **Gate Morris** | GO DELIVERY D2-A |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given un type sélectionnable et version/hash valides, When projectSelectableCycleType, Then Validated Projection est retournée avec mapping CKC.
+2. Given version incompatible ou hash stale, When projection, Then erreur catalogue structurée et aucun appel resolver.
+3. Given type inconnu/deprecated/unavailable, When projection, Then fail-closed avec code approprié.
+4. Given correlationId absent, When projection, Then erreur locale (pas de parcours silencieux).
+5. Given la fonction, When imports inspectés, Then aucun QualifyCycle ni resolver.
+
+### BL-D2-A-04 — Validation et régression D2-A
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-A-04` |
+| **Epic** | D2-A Catalog Projection |
+| **Résultat vérifiable** | Suite tests D2-A complète ; tests D1 conservés ; exports additifs strictement nécessaires ; pas d’import serveur dans logique pure ; preuves typecheck/lint/tests/build futurs. |
+| **Formulation** | En tant que reviewer, je veux une validation D2-A indépendante, afin de livrer A sans B/C. |
+| **Justification** | Critères de sortie D2-A ; non-régression D1. |
+| **Décisions héritées** | TA-P-A · COMP-B (pas de factory complète dans A) |
+| **Préconditions** | BL-D2-A-01…03 |
+| **Périmètre inclus** | Tests D2-A · exports additifs minimaux · checklist sortie A |
+| **Hors périmètre** | Factory D2 complète · D2-B/C · UI |
+| **Contrats** | Exports publics minimaux contrats/projection/fingerprint |
+| **Fichiers candidats** | `index.ts` (additif) · tests `__tests__/oa/cycle/**` |
+| **Dépendances** | BL-D2-A-01…03 |
+| **Tests futurs** | Suite A · régression cycleTypeCatalog · absence node:crypto dans purs |
+| **Preuves de fin** | Rapport Delivery A · suite verte · build futur |
+| **Risques** | Export trop large · couplage prématuré factory |
+| **Stop conditions** | Inclusion resolver/QC dans A |
+| **Réversibilité** | Moyenne |
+| **Profil Delivery candidat** | Standard |
+| **Gate Morris** | GO DELIVERY D2-A |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given D2-A implémenté, When tests D2-A et D1 s’exécutent, Then tous passent sans ignore.
+2. Given barrel index, When exports D2-A ajoutés, Then ils sont additifs et minimaux.
+3. Given modules purs A, When graphe d’imports, Then aucun import serveur/crypto.
+4. Given critères sortie A, When checklist, Then contracts+fingerprint+projection+erreurs catalogue présents ; aucun resolver/profil/mutation.
+
+
+## O. Epic D2-B — CKC Resolution and Consumption
+
+Objectif : résoudre CKC Core depuis mapping validé ; statut D2 + projection T-A2 + preuve structurée.
+
+**Critères de sortie D2-B :** manifest · port · resolver fail-closed · preuve · erreurs · events · tests · aucun QC · aucun résultat D3 final · validable après A.
+
+## P. Stories D2-B
+
+### BL-D2-B-01 — Manifest CKC typé et contrôle de cohérence D1
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-B-01` |
+| **Epic** | D2-B CKC Resolution and Consumption |
+| **Résultat vérifiable** | Manifest statique typé (référence, niveau, version, statut, source, disponibilité) ; aucun Markdown ; test cohérence catalogue↔manifest. |
+| **Formulation** | En tant que développeur D2, je veux un registre CKC typé, afin de résoudre sans parser Markdown ni lire des chemins. |
+| **Justification** | CKC-S-A adopté. |
+| **Décisions héritées** | CKC-S-A · TA-P-A |
+| **Préconditions** | BL-D2-A-04 intégré/validé |
+| **Périmètre inclus** | ckcReferenceManifest · test cohérence D1 |
+| **Hors périmètre** | Enrichissement contrat D1 · MemoryCkcResolver comme autorité · Markdown |
+| **Contrats** | CkcReferenceManifest entries |
+| **Fichiers candidats** | `infrastructure/ckcReferenceManifest.ts` · tests |
+| **Dépendances** | BL-D2-A-04 |
+| **Tests futurs** | primaires D1 autorisées · fallbacks autorisés · ref inconnue · niveau incohérent · orphelin documenté |
+| **Preuves de fin** | Tests cohérence · diff limité |
+| **Risques** | Double source vs catalogue · dérive manuelle |
+| **Stop conditions** | Story exige enrichir contrat D1 |
+| **Réversibilité** | Moyenne |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-B (après A) |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given catalogue D1, When manifest est validé, Then toutes références primary/fallback D1 sont autorisées.
+2. Given référence inconnue, When contrôle, Then détection d’erreur.
+3. Given le manifest, When runtime, Then aucun contenu Markdown n’est chargé et aucun chemin arbitraire n’est lu.
+
+### BL-D2-B-02 — Port resolver D2 spécialisé
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-B-02` |
+| **Epic** | D2-B CKC Resolution and Consumption |
+| **Résultat vérifiable** | Port D2 borné ; entrée projection validée + traçabilité ; sortie detailed/synthetic/fallback/unresolved_* + projection T-A2 ; CkcResolverPort historique inchangé ; pas de QualifyCycle. |
+| **Formulation** | En tant qu’architecte, je veux un port D2 distinct, afin de préserver le port guidance T-A2. |
+| **Justification** | PORT-B adopté. |
+| **Décisions héritées** | PORT-B · FA-03 |
+| **Préconditions** | BL-D2-B-01 · contrats A |
+| **Périmètre inclus** | Interface port D2 · types résolution D2 |
+| **Hors périmètre** | Modification CkcResolverPort · wrapper ResolveCKC · QC |
+| **Contrats** | CkcQualificationResolverPort · CkcQualificationResolution |
+| **Fichiers candidats** | `ports/ckcQualificationResolver.ts` |
+| **Dépendances** | BL-D2-B-01 · BL-D2-A-01 |
+| **Tests futurs** | Contrat port · non-régression CkcResolverPort |
+| **Preuves de fin** | Diff ports · tests contrat |
+| **Risques** | Élargissement cassant du port historique |
+| **Stop conditions** | Modification fonctionnelle port historique requise sans GO |
+| **Réversibilité** | Moyenne |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-B |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given le port D2, When déclaré, Then il accepte projection validée + correlationId et produit statuts détaillés D2 + projection T-A2.
+2. Given CkcResolverPort historique, When Delivery B, Then il reste inchangé.
+3. Given le port D2, When dépendances, Then QualifyCycle n’est pas référencé.
+
+### BL-D2-B-03 — Resolver Core detailed / synthetic / fallback
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-B-03` |
+| **Epic** | D2-B CKC Resolution and Consumption |
+| **Résultat vérifiable** | Stratégie résolution docs 16–18 ; detailed prioritaire ; fallback substitution ; synthetic primaire sans second fallback ; fail-closed ; executionAuthority=false ; pas d’extension ; pas de randomBytes pour décision. |
+| **Formulation** | En tant que consommateur D2, je veux une résolution Core fail-closed, afin d’obtenir un statut détaillé exploitable uniquement si valide. |
+| **Justification** | Cœur D2-B ; FA fail-closed. |
+| **Décisions héritées** | PORT-B · CKC-S-A · FA-03 · FA-05 |
+| **Préconditions** | BL-D2-B-02 |
+| **Périmètre inclus** | Adaptateur infra resolver · mapping T-A2 · statut D2 |
+| **Hors périmètre** | QualifyCycle · multi-CKC · Memory comme autorité |
+| **Contrats** | Resolution Result · detailed statuses |
+| **Fichiers candidats** | adaptateur sous `infrastructure/` · utilise manifest |
+| **Dépendances** | BL-D2-B-01 · BL-D2-B-02 |
+| **Tests futurs** | detailed · synthetic · fallback · both invalid · ref non autorisée · executionAuthority=true · extension implicite |
+| **Preuves de fin** | Tests résolution · pas de random dans décision |
+| **Risques** | Perte primary/fallback · fail-open · héritage MemoryCkcResolver |
+| **Stop conditions** | Extension multi-CKC · randomBytes requis pour décision métier |
+| **Réversibilité** | Moyenne |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-B |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given detailed valide, When resolve, Then resolved_detailed + fallbackUsed=false + executionAuthority=false.
+2. Given detailed KO et fallback OK, When resolve, Then resolved_fallback_synthetic + disclosure fallback.
+3. Given aucune source valide, When resolve, Then unresolved_* fail-closed, pas de profil.
+4. Given executionAuthority=true ou extension implicite, When resolve, Then rejet.
+5. Given la décision fonctionnelle, When code, Then aucun randomBytes n’influence le statut.
+
+### BL-D2-B-04 — Erreurs D2 et adaptation T-A2
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-B-04` |
+| **Epic** | D2-B CKC Resolution and Consumption |
+| **Résultat vérifiable** | Erreurs D2 typées ; adaptateur enveloppe T-A2 si utile ; codes doc 16 ; blocking/retryable/recoverable ; pas d’exception générique ; pas de mélange CycleInstance. |
+| **Formulation** | En tant que développeur, je veux des erreurs D2 structurées, afin de normaliser Failures sans fuites. |
+| **Justification** | ERR-B adopté. |
+| **Décisions héritées** | ERR-B · FA-04 |
+| **Préconditions** | Contrats A · port B (BL-D2-B-02) |
+| **Périmètre inclus** | ckcQualificationErrors · mapping codes |
+| **Hors périmètre** | ERR-C · élargissement massif CycleDetailCode sans besoin |
+| **Contrats** | Erreurs D2 typées · adaptateur optionnel |
+| **Fichiers candidats** | `domain/ckcQualificationErrors.ts` |
+| **Dépendances** | BL-D2-B-02 (préparation parallèle possible après B-02 ; intégration ordonnée) |
+| **Tests futurs** | Codes catalogue/CKC · pas de fuite internalCauseRef vers D3 |
+| **Preuves de fin** | Tests erreurs |
+| **Risques** | Dilution codes CycleInstance · fuite info |
+| **Stop conditions** | Exceptions génériques comme contrat |
+| **Réversibilité** | Haute |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-B |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given codes fonctionnels doc 16, When erreurs D2, Then ils sont typés et mappables.
+2. Given erreur interne, When exposition, Then message sûr sans fuite.
+3. Given CycleInstance errors, When D2 errors, Then pas de mélange implicite.
+
+### BL-D2-B-05 — Consumption Proof Builder pur
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-B-05` |
+| **Epic** | D2-B CKC Resolution and Consumption |
+| **Résultat vérifiable** | Validator/builder pur ; consumed=true seulement après validation complète ; champs preuve adoptés ; statut D2+T-A2 conservés ; version/hash/correlationId ; pas I/O/profil/mutation. |
+| **Formulation** | En tant que bridge, je veux une preuve structurée, afin de n’appeler QualifyCycle qu’après consommation valide. |
+| **Justification** | PROOF-A · FA-02/04. |
+| **Décisions héritées** | PROOF-A · FA-02 · FA-05 |
+| **Préconditions** | BL-D2-B-03 · BL-D2-B-04 |
+| **Périmètre inclus** | ckcConsumptionProof pur |
+| **Hors périmètre** | Preuve dans orchestrateur · I/O · profil |
+| **Contrats** | CkcConsumptionProof |
+| **Fichiers candidats** | `domain/ckcConsumptionProof.ts` |
+| **Dépendances** | BL-D2-B-03 · BL-D2-B-04 |
+| **Tests futurs** | nominal detailed/synthetic/fallback · incomplète · mismatch · doctrine invalide · authority · correlationId · consumed après échec interdit |
+| **Preuves de fin** | Tests purs preuve |
+| **Risques** | consumed=true trop tôt · confusion resolver/preuve |
+| **Stop conditions** | I/O dans proof · appel QC |
+| **Réversibilité** | Haute |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-B |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given résolution valide complète, When buildProof, Then consumed=true avec statut D2 + projection T-A2.
+2. Given preuve incomplète ou mismatch, When buildProof, Then erreur et consumed≠true.
+3. Given échec, When résultat, Then aucune preuve consumed=true.
+4. Given le module, When imports, Then aucune I/O/Next.
+
+### BL-D2-B-06 — Événements résolution/consommation et validation D2-B
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-B-06` |
+| **Epic** | D2-B CKC Resolution and Consumption |
+| **Résultat vérifiable** | Extension additive CycleAuditEvent pour events B ; CycleAuditPort conservé ; tests B ; non-régression T-A2 ; pas de factory mutation. |
+| **Formulation** | En tant qu’opérateur, je veux des événements minimaux B, afin de tracer résolution/consommation sans audit prod. |
+| **Justification** | AUDIT-A · FA-07/11. |
+| **Décisions héritées** | AUDIT-A |
+| **Préconditions** | BL-D2-B-01…05 |
+| **Périmètre inclus** | Events resolution/consumption · suite tests B · checklist sortie B |
+| **Hors périmètre** | Modèle audit complet · factory CreateCycle · D2-C orch |
+| **Contrats** | CycleAuditEvent additif |
+| **Fichiers candidats** | `ports/cycleAudit.ts` (additif) · tests |
+| **Dépendances** | BL-D2-B-01…05 |
+| **Tests futurs** | events started/succeeded/failed/fallback/validated/rejected · régression oa.ckc.resolved historique |
+| **Preuves de fin** | Suite B verte · non-régression T-A2 |
+| **Risques** | Union audit surchargée |
+| **Stop conditions** | Port audit breaking · events sensibles |
+| **Réversibilité** | Moyenne |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-B |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given résolution/consommation, When audit, Then events minimaux B émis avec correlationId.
+2. Given CycleAuditPort, When extension, Then additive et non breaking pour events historiques.
+3. Given checklist sortie B, When validation, Then manifest+port+resolver+preuve+erreurs+events ; aucun QC ; aucun résultat D3 final.
+
+
+## Q. Epic D2-C — QualifyCycle Bridge and Result Projection
+
+Objectif : orchestrer A+B+QualifyCycle ; Success/Failure read-only unique.
+
+**Critères de sortie D2-C :** bridge · contrat unique · QC inchangé · erreurs normalisées · events · factory read-only · intégration · aucune mutation · aucun D3.
+
+## R. Stories D2-C
+
+### BL-D2-C-01 — Result Projection pure
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-C-01` |
+| **Epic** | D2-C QualifyCycle Bridge and Result Projection |
+| **Résultat vérifiable** | Fonctions pures Success/Failure ; contrat unique ; statut D2 + preuve en succès ; pas de profil/consumed en Failure ; disclosures ; pas de règle qualification ; pas d’infra. |
+| **Formulation** | En tant que futur D3, je veux un contrat résultat unique, afin de consommer D2 sans appeler resolver/QC. |
+| **Justification** | FA-08 · Result Projection. |
+| **Décisions héritées** | FA-08 · COMP-B (contrat) |
+| **Préconditions** | BL-D2-B-06 |
+| **Périmètre inclus** | ckcQualificationResult · Success/Failure builders |
+| **Hors périmètre** | Règles profil · infra · UI |
+| **Contrats** | D2 Success/Failure Result |
+| **Fichiers candidats** | `domain/ckcQualificationResult.ts` |
+| **Dépendances** | BL-D2-B-05/06 · contrats A |
+| **Tests futurs** | Success conserve preuve · Failure sans profil/consumed · disclosures fallback |
+| **Preuves de fin** | Tests purs résultat |
+| **Risques** | Règle métier glissée dans projection |
+| **Stop conditions** | Import infra · recalcul profil |
+| **Réversibilité** | Haute |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-C (après A+B) |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given pièces succès, When assemble, Then Success Result unique avec statut D2 + preuve.
+2. Given erreur, When assemble Failure, Then aucun recommendedProfile exploitable ni consumed=true.
+3. Given module, When imports, Then aucun infra/QC.
+
+### BL-D2-C-02 — Validation des six signaux
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-C-02` |
+| **Epic** | D2-C QualifyCycle Bridge and Result Projection |
+| **Résultat vérifiable** | Six signaux T-A2 obligatoires/explicites ; absence≠false ; requestedProfile non exposé ; objective/scope non scorés ; SIGNALS_INCOMPLETE avant QC. |
+| **Formulation** | En tant que bridge, je veux valider les signaux avant QC, afin d’éviter un appel QualifyCycle invalide. |
+| **Justification** | Doc 16 signaux · fail-closed. |
+| **Décisions héritées** | ORCH-A · FA bridge |
+| **Préconditions** | BL-D2-C-01 · QualifyCycleRequest T-A2 |
+| **Périmètre inclus** | Validation signaux pure ou helper orch |
+| **Hors périmètre** | requestedProfile · scoring parallèle |
+| **Contrats** | Qualification Input / signaux |
+| **Fichiers candidats** | helper dans domain ou application (candidat) |
+| **Dépendances** | BL-D2-C-01 |
+| **Tests futurs** | complets · incomplets · absence vs false · requestedProfile rejeté |
+| **Preuves de fin** | Tests signaux |
+| **Risques** | Absence traitée comme false |
+| **Stop conditions** | Exposition requestedProfile dans parcours D2 |
+| **Réversibilité** | Haute |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-C |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given un signal manquant, When validation, Then SIGNALS_INCOMPLETE et QC non appelé.
+2. Given absence de booléen, When validation, Then ce n’est pas équivalent à false.
+3. Given requestedProfile, When parcours D2, Then non exposé/rejeté.
+
+### BL-D2-C-03 — Use case QualifyCycle Bridge
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-C-03` |
+| **Epic** | D2-C QualifyCycle Bridge and Result Projection |
+| **Résultat vérifiable** | Use case injecté read-only ; CP→resolver→proof→QC×1 si validé ; QC jamais si échec amont ; pas de duplication recommendProfile ; isMorrisDecision=false ; pas de mutation. |
+| **Formulation** | En tant que système D2, je veux orchestrer A+B+QC, afin de produire une recommandation seulement après CKC consommé. |
+| **Justification** | ORCH-A cœur D2-C. |
+| **Décisions héritées** | ORCH-A · FA-C · COMP-B deps |
+| **Préconditions** | BL-D2-C-01 · BL-D2-C-02 · A+B intégrés |
+| **Périmètre inclus** | qualifyCycleWithCkc use case |
+| **Hors périmètre** | modifier QualifyCycle/ResolveCKC · CreateCycle · mutation |
+| **Contrats** | Orchestration I/O → Result |
+| **Fichiers candidats** | `application/qualifyCycleWithCkc.ts` |
+| **Dépendances** | BL-D2-A-03 · BL-D2-B-03/05 · BL-D2-C-01/02 |
+| **Tests futurs** | Light/Standard/Critical/Capitalization · signaux KO · stale · CKC KO · fallback · erreur QC · correlationId perdu · QC×1 |
+| **Preuves de fin** | Tests use case avec QC mock |
+| **Risques** | Fail-open · double appel QC · duplication règles |
+| **Stop conditions** | Modification fonctionnelle QualifyCycle |
+| **Réversibilité** | Moyenne |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-C |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given parcours nominal, When execute, Then QC appelé exactement une fois après preuve valide.
+2. Given échec amont, When execute, Then QC jamais appelé et Failure produit.
+3. Given QualifyCycle, When Delivery C, Then fonctionnellement inchangé.
+4. Given isMorrisDecision, When résultat, Then false.
+5. Given deps, When factory wiring, Then aucun repository mutation.
+
+### BL-D2-C-04 — Normalisation des erreurs bout en bout
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-C-04` |
+| **Epic** | D2-C QualifyCycle Bridge and Result Projection |
+| **Résultat vérifiable** | Orchestrateur arrête le flux ; Result Projection construit Failure ; origine/code conservés ; erreur interne masquée ; retryable/recoverable ; pas de résultat partiel exploitable. |
+| **Formulation** | En tant que consommateur, je veux des Failures normalisées, afin de traiter les erreurs sans ambiguïté. |
+| **Justification** | FA-04 · ERR-B. |
+| **Décisions héritées** | FA-04 · ERR-B |
+| **Préconditions** | BL-D2-C-01 · BL-D2-C-03 · BL-D2-B-04 |
+| **Périmètre inclus** | Chemin normalisation orch→Result |
+| **Hors périmètre** | Exceptions brutes vers D3 |
+| **Contrats** | D2 Failure Result |
+| **Fichiers candidats** | qualifyCycleWithCkc + ckcQualificationResult |
+| **Dépendances** | BL-D2-C-01 · BL-D2-C-03 |
+| **Tests futurs** | chaque famille d’erreur amont → Failure · pas de profil |
+| **Preuves de fin** | Tests normalisation |
+| **Risques** | Normalisation trop tardive · fuite |
+| **Stop conditions** | Résultat partiel avec profil |
+| **Réversibilité** | Haute |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-C |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given erreur locale composant, When orch, Then flux arrêté et Failure normalisé.
+2. Given erreur interne, When Failure, Then message sûr.
+3. Given Failure, When champs, Then pas de recommendedProfile exploitable ni consumed=true.
+
+### BL-D2-C-05 — Événements qualification et résultat
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-C-05` |
+| **Epic** | D2-C QualifyCycle Bridge and Result Projection |
+| **Résultat vérifiable** | Events additifs : qualification started/succeeded · result produced · request failed ; correlationId ; pas de données sensibles ; pas d’audit prod. |
+| **Formulation** | En tant qu’observateur, je veux des events C minimaux, afin de tracer le bridge sans RUN readiness. |
+| **Justification** | AUDIT-A · FA-07/11. |
+| **Décisions héritées** | AUDIT-A |
+| **Préconditions** | BL-D2-C-03 |
+| **Périmètre inclus** | Events C additifs sur CycleAuditEvent |
+| **Hors périmètre** | Audit production complet |
+| **Contrats** | CycleAuditEvent additif |
+| **Fichiers candidats** | `ports/cycleAudit.ts` |
+| **Dépendances** | BL-D2-C-03 |
+| **Tests futurs** | events émis · correlationId · pas de payload sensible |
+| **Preuves de fin** | Tests audit C |
+| **Risques** | Union surchargée · claim prod |
+| **Stop conditions** | Données sensibles dans events |
+| **Réversibilité** | Moyenne |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-C |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given succès/échec D2, When audit, Then events C minimaux avec correlationId.
+2. Given events, When contenu, Then aucune donnée sensible et aucun claim production-ready.
+
+### BL-D2-C-06 — Factory/façade D2 read-only
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-C-06` |
+| **Epic** | D2-C QualifyCycle Bridge and Result Projection |
+| **Résultat vérifiable** | Factory/façade séparée ; deps resolver D2 + clock + audit + QualifyCycle ; pas de repos mutation ; pas CreateCycle ; API additive ; D3 peut importer contrats sans infra. |
+| **Formulation** | En tant qu’intégrateur, je veux une façade read-only, afin de composer D2 sans CreateCycle. |
+| **Justification** | COMP-B adopté. |
+| **Décisions héritées** | COMP-B |
+| **Préconditions** | BL-D2-C-03…05 |
+| **Périmètre inclus** | createCkcQualificationServices (nom candidat) · exports additifs |
+| **Hors périmètre** | Extension CycleServices mutation · construction depuis D3/UI |
+| **Contrats** | Factory API publique additive |
+| **Fichiers candidats** | composition près de `index.ts` · exports `index.ts` |
+| **Dépendances** | BL-D2-C-03 |
+| **Tests futurs** | Factory sans repos écriture · coexistence createInMemoryCycleServices |
+| **Preuves de fin** | Tests composition · review imports |
+| **Risques** | Couplage CreateCycle · fuite infra vers D3 |
+| **Stop conditions** | Exposition repositories mutation |
+| **Réversibilité** | Moyenne |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-C |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given factory D2, When créée, Then aucun repository mutation ni CreateCycle n’est exposé.
+2. Given exports, When D3 futur, Then contrats résultat importables sans infrastructure.
+3. Given API, When changement, Then additif ou arbitrage Morris explicite.
+
+### BL-D2-C-07 — Validation intégrée D2-A→B→C
+
+| Champ | Valeur |
+|-------|--------|
+| **ID** | `BL-D2-C-07` |
+| **Epic** | D2-C QualifyCycle Bridge and Result Projection |
+| **Résultat vérifiable** | Parcours nominal/fallback/fail-closed ; QC×1 succès ; QC jamais échec amont ; aucune mutation ; coexistence T-A2 ; typecheck/lint/tests/build futurs ; contrat D3 unique sans UI. |
+| **Formulation** | En tant que reviewer, je veux une validation bout en bout, afin de clôturer D2-C sans ouvrir D3. |
+| **Justification** | Critères sortie D2-C. |
+| **Décisions héritées** | TA-12 · FA-C |
+| **Préconditions** | BL-D2-C-01…06 · A+B intégrés |
+| **Périmètre inclus** | Tests intégration A→B→C · checklist sortie C |
+| **Hors périmètre** | UI D3 · Delivery D2-D · CreateCycle |
+| **Contrats** | Success/Failure unique vérifié |
+| **Fichiers candidats** | tests `__tests__/oa/cycle/**` |
+| **Dépendances** | BL-D2-C-01…06 |
+| **Tests futurs** | intégration · régression oa/cycle · suite complète future |
+| **Preuves de fin** | Rapport Delivery C · preuves commandes futures |
+| **Risques** | Big-bang · ignore tests · snapshot aveugle |
+| **Stop conditions** | Mutation détectée · D3 UI inclus |
+| **Réversibilité** | Faible une fois intégré — tests protègent |
+| **Profil Delivery candidat** | Critical |
+| **Gate Morris** | GO DELIVERY D2-C |
+| **Statut** | `BACKLOG READY — DELIVERY NOT AUTHORIZED` |
+
+**Critères d’acceptation :**
+
+1. Given parcours nominal/fallback, When intégration, Then Success et QC×1.
+2. Given échec amont, When intégration, Then Failure et QC=0.
+3. Given services T-A2 historiques, When coexistence, Then non-régression.
+4. Given checklist sortie C, When validation, Then bridge+Failure/Success+factory+events ; aucune mutation ; aucun D3.
+
+
+## S. Dépendances inter-stories
+
+```text
+A-01 → A-02 → A-03 → A-04
+A-04 → B-01 → B-02 → B-03 → B-04 → B-05 → B-06
+B-06 → C-01 → C-02 → C-03 → C-04 → C-05 → C-06 → C-07
+```
+
+## T. Matrice story → architecture adoptée
+
+| Story | FA-C / TA clés |
+|-------|----------------|
+| A-01 | TYPE-B · HASH-A · TA-P-A |
+| A-02 | HASH-A |
+| A-03 | TA-02 · FA-06 · ERR-B |
+| A-04 | Sortie A · non-régression D1 |
+| B-01 | CKC-S-A |
+| B-02 | PORT-B · FA-03 |
+| B-03 | PORT-B · CKC-S-A · FA-05 |
+| B-04 | ERR-B · FA-04 |
+| B-05 | PROOF-A · FA-02 |
+| B-06 | AUDIT-A · FA-07/11 |
+| C-01 | FA-08 Result Projection |
+| C-02 | Signaux · fail-closed |
+| C-03 | ORCH-A |
+| C-04 | FA-04 normalisation |
+| C-05 | AUDIT-A |
+| C-06 | COMP-B |
+| C-07 | Intégration A→B→C · TA-12 |
+
+## U. Matrice story → fichiers candidats
+
+| Story | Fichiers candidats (non autorisés ce cycle) |
+|-------|---------------------------------------------|
+| A-01 | `domain/ckcQualificationContracts.ts` · `index.ts` additif |
+| A-02 | `domain/catalogFingerprint.ts` · tests |
+| A-03 | `domain/catalogProjection.ts` |
+| A-04 | `index.ts` · tests oa/cycle |
+| B-01 | `infrastructure/ckcReferenceManifest.ts` |
+| B-02 | `ports/ckcQualificationResolver.ts` |
+| B-03 | adaptateur `infrastructure/*Resolver*` |
+| B-04 | `domain/ckcQualificationErrors.ts` |
+| B-05 | `domain/ckcConsumptionProof.ts` |
+| B-06 | `ports/cycleAudit.ts` additif · tests |
+| C-01 | `domain/ckcQualificationResult.ts` |
+| C-02 | helper domain/application |
+| C-03 | `application/qualifyCycleWithCkc.ts` |
+| C-04 | orch + result |
+| C-05 | `ports/cycleAudit.ts` |
+| C-06 | factory composition · `index.ts` |
+| C-07 | tests intégration |
+
+**Règles :** recommandations de backlog seulement · futur Delivery confirme Git · noms métier stables · pas de sous-domaine externe.
+
+## V. Matrice story → tests futurs
+
+| Story | Domaine | Contrat | Adaptateur | Use case | Intégration | Non-régression |
+|-------|---------|---------|------------|----------|-------------|----------------|
+| A-01 | ● | ● | | | | |
+| A-02 | ● | ● | | | | D1 |
+| A-03 | ● | | | | | |
+| A-04 | | | | | ● | D1/oa |
+| B-01 | | ● | ● | | | D1 |
+| B-02 | | ● | | | | port hist. |
+| B-03 | | | ● | | | |
+| B-04 | ● | ● | | | | |
+| B-05 | ● | | | | | |
+| B-06 | | | | | ● | audit hist. |
+| C-01 | ● | ● | | | | |
+| C-02 | ● | | | | | |
+| C-03 | | | | ● | | QualifyCycle |
+| C-04 | | | | ● | | |
+| C-05 | | | | | ● | |
+| C-06 | | | | | ● | CycleServices |
+| C-07 | | | | | ● | suite oa/cycle |
+
+Contrôles globaux futurs : tests ciblés · suite oa/cycle · suite complète · typecheck · lint · build — **non exécutés** ici.
+
+## W. Matrice story → risques
+
+| Story | Risque principal |
+|-------|------------------|
+| A-01 | Domaine parallèle / types.ts |
+| A-02 | Drift fingerprint manuel |
+| A-03 | Fail-open catalogue |
+| A-04 | Export trop large |
+| B-01 | Double source / enrichir D1 |
+| B-02 | Casser port historique |
+| B-03 | Fail-open CKC / random |
+| B-04 | Fuite erreur |
+| B-05 | consumed trop tôt |
+| B-06 | Audit surchargé |
+| C-01 | Règle métier dans projection |
+| C-02 | absence=false |
+| C-03 | Double QC / modifier QC |
+| C-04 | Résultat partiel |
+| C-05 | Données sensibles |
+| C-06 | Mutation via factory |
+| C-07 | Big-bang / ignore tests |
+
+## X. Critères d’entrée Delivery
+
+**D2-A :** backlog validé Morris · doc 19 · TA adoptées · archi adoptée · branche/base explicites · main à jour · fichiers A confirmés · profil requalifié · tests identifiés · handoff courant · pas de réserve bloquante.
+
+**D2-B :** A intégré/validé · contrats A stables · fingerprint+projection dispo · tests A verts · REX/post-merge A · GO B distinct.
+
+**D2-C :** A+B intégrés/validés · preuve+resolver+events B · GO C distinct.
+
+## Y. Critères de sortie par incrément
+
+Voir §§ M/O/Q. Preuves Delivery futures : Git Truth · diff limité · tests complets · pas d’ignore · pas de package · pas CreateCycle/mutation · non-régression · review Full · handoff.
+
+## Z. Profils Delivery candidats
+
+| Incrément | Profil candidat | Justification |
+|-----------|-----------------|---------------|
+| D2-A | **Standard** | Purs · pas resolver/orch · risque fingerprint |
+| D2-B | **Critical** | Fail-closed · preuve · authority · statut |
+| D2-C | **Critical** | Orchestration · QC · frontière D3 · mutation |
+
+Recommandations de backlog — chaque Delivery requalifie repo-informed.
+
+## AA. Gates Morris futurs
+
+```text
+GO DELIVERY SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+USE VALIDATED BACKLOG AND ADOPTED TA-01…12 —
+IMPLEMENT CONTRACTS, CATALOG FINGERPRINT AND PURE CATALOG PROJECTION —
+NO D2-B — NO D2-C — NO D3 — NO UI — NO CREATECYCLE — NO METHOD PROMOTION
+```
+
+D2-B/C : gates distincts après intégration amont. **D2-D :** aucun gate.
+
+## AB. Stratégie de branches, commits et PR candidate
+
+Branche Delivery distincte par incrément · PR par incrément · commits atomiques · pas de big-bang · B sur A intégré · C sur B intégré · **aucune création** dans ce cycle.
+
+## AC. Stratégie QA future
+
+Tests domaine/contrat/adaptateur/use case/intégration/non-régression · suites A/B/C · contrôles globaux · pas de snapshot aveugle · revalidation profil Critical pour B/C.
+
+## AD. Anti-claims
+
+- Backlog ≠ Delivery autorisée
+- Aucune story `DELIVERY AUTHORIZED`
+- Aucune implémentation / test modifié / branche projet
+- Aucun D3 / UI / CreateCycle / multi-CKC / D2-D
+- Aucune estimation jours/points/heures
+- QualifyCycle / ResolveCKC / D1 non modifiés ici
+- INHERITED-R-01 NOT LIFTED
+
+## AE. Risques et réserves
+
+Stories fourre-tout (évitées) · drift fingerprint · double source CKC · fail-open · consumed prématuré · factory mutation · big-bang · rouvrir TA · **INHERITED-R-01 ACCEPTED — STILL TRACEABLE — NOT LIFTED**.
+
+## AF. Readiness du backlog
+
+READY si : 17 stories à résultat vérifiable · AC complets · deps explicites · fichiers candidats · tests futurs · profils justifiés · A/B/C séparés · pas D2-D · pas d’implémentation · pas Delivery · TA non rouvertes · review pack + handoff.
+
+**Statut readiness local :** `BACKLOG COMPLETE LOCALLY — AWAITING MORRIS VALIDATION`
+
+## AG. Verdict
+
+```text
+V3.1-D2 DELIVERY BACKLOG COMPLETE —
+D-V3.1-D2-TA-01…12 RECORDED AS ADOPTED BY MORRIS —
+D2-A D2-B AND D2-C DECOMPOSED INTO TESTABLE STORIES —
+DEPENDENCIES AND ACCEPTANCE CRITERIA DOCUMENTED —
+CANDIDATE FILES AND FUTURE TESTS DOCUMENTED —
+DELIVERY PROFILES RECOMMENDED —
+D2-A TO D2-B TO D2-C ORDER PRESERVED —
+D2-D NOT OPENED —
+NO IMPLEMENTATION —
+NO TEST MODIFIED —
+NO BRANCH CREATED —
+NO BACKLOG DELIVERY EXECUTED —
+NO DELIVERY AUTHORIZED —
+NO D3 —
+NO UI —
+NO FIGMA —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+**Statut :** `V3.1-D2 DELIVERY BACKLOG READY FOR MORRIS VALIDATION — D2-A DELIVERY REQUIRES DISTINCT MORRIS GO — D2-B AND D2-C REMAIN CLOSED — D3 NOT OPENED`
+
+## AH. Registre d'exécution D2-A — 2026-08-02
+
+Ce registre complète l'historique du backlog sans réécrire le statut initial
+des dix-sept stories.
+
+| Élément | État d'exécution |
+|---------|------------------|
+| GO Delivery D2-A | **consommé** — 2026-08-02 03:16 CEST (+0200) |
+| Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` créée depuis `e1befcb8…` |
+| BL-D2-A-01 | **exécutée** — contrats D2-A et projection fingerprint fermée |
+| BL-D2-A-02 | **exécutée** — HASH-A statique + garde SHA-256 test-only |
+| BL-D2-A-03 | **exécutée** — Catalog Projection pure et fail-closed |
+| BL-D2-A-04 | **exécutée** — 24 tests D2-A + non-régression D1 |
+| Tests ciblés | fingerprint **8/8** · projection **16/16** |
+| Baseline pré-mutation | catalogue D1 **46/46** · cycle OA **94/94** |
+| Delivery D2-A | **complète localement** |
+| QA D2-A indépendante | **exécutée — FAIL** · voir registre AI |
+| Delivery corrective D2-A | **complète localement** · voir registre AJ |
+| QA revalidation D2-A | **PASS** · voir registre AK |
+| QA-G3 / PR readiness D2-A | **QA-G3 ACCEPTED** · readiness **READY WITH RESERVES** · voir registre AL |
+| D2-B / D2-C | **fermés** — aucun élément implémenté |
+| D2-D / D3 | **fermés** |
+| Git projet | aucun commit · aucun push · aucune PR |
+
+**Statut d'exécution :**
+`D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY`.
+
+
+## AI. Registre QA D2-A — 2026-08-02
+
+| Élément | État |
+|---------|------|
+| GO QA | **consommé** — 2026-08-02 04:10 CEST (+0200) |
+| Profil | **Critical** |
+| Tests QA ajoutés | `catalogFingerprint.qa.test.ts` (25) · `catalogProjection.qa.test.ts` (37) |
+| Résultats | fingerprint QA 25/25 PASS · projection QA 31/37 · 6 FAIL binding |
+| Verdict Cursor | **FAIL** |
+| Réserve | R-QA-D2A-01 **bloquante** — seam public accepte catalogue divergent avec fingerprint canonique |
+| Correction production | **aucune** |
+| Fichiers protégés | **inchangés** |
+| QA-G3 Morris | **en attente** |
+| PR readiness | **fermée** |
+| D2-B / D2-C | **fermés** |
+| D3 | **fermé** |
+
+**Statut QA :** `D2-A INDEPENDENT QA FAIL — CORRECTIVE DELIVERY REQUIRES DISTINCT MORRIS GO`.
+
+## AJ. Registre Delivery corrective D2-A — 2026-08-02
+
+| Élément | État |
+|---------|------|
+| GO correctif | **consommé** — 2026-08-02 04:39 CEST (+0200) |
+| Finding | R-QA-D2A-01 traité en production |
+| Correction | limitée à `catalogProjection.ts` — binding HASH-A avant succès |
+| Tests QA | **préservés** — aucun oracle modifié |
+| Résultats | fingerprint QA 25/25 · projection QA 37/37 · Delivery 24/24 · D1 46/46 · oa/cycle 180/180 · suite 913/913 |
+| typecheck / lint / build | PASS |
+| Statut finding | CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION |
+| QA-G3 Morris | **non décidé** |
+| PR readiness | **fermée** |
+| D2-B / D2-C | **fermés** |
+| D3 | **fermé** |
+
+**Statut :** `CORRECTIVE DELIVERY COMPLETE LOCALLY — QA REVALIDATION REQUIRED — NOT PR READY`.
+
+## AK. Registre QA revalidation D2-A — 2026-08-02
+
+| Élément | État |
+|---------|------|
+| GO | **consommé** — 2026-08-02 05:31 CEST (+0200) |
+| Périmètre | RV-01…RV-13 · binding public · priorité erreurs · HASH-A · non-régression |
+| Résultat RV-01…RV-13 | **tous PASS** |
+| Statut finding | `CLOSED — INDEPENDENT QA REVALIDATION PASS` |
+| Verdict QA | **PASS** |
+| Correction pendant QA | **aucune** · fichiers code/tests inchangés |
+| QA-G3 Morris | **en attente** — NOT DECIDED |
+| PR readiness | **fermée** |
+| D2-B / D2-C | **fermés** |
+| D3 | **fermé** |
+
+**Statut :** `QA REVALIDATION PASS — R-QA-D2A-01 CLOSED — QA-G3 MORRIS DECISION REQUIRED — NOT PR READY`.
+
+## AL. Registre QA-G3 / PR readiness D2-A — 2026-08-02
+
+| Élément | État |
+|---------|------|
+| QA-G3 | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST (+0200) |
+| Finding | R-QA-D2A-01 **CLOSED** |
+| Cycle | 13 — PR readiness |
+| Package | **20 fichiers** · code 4 · tests 4 · framing 7 · Delivery/QA 5 |
+| Checks | FP 8 · Proj 16 · FP QA 25 · Proj QA 37 · D1 46 · OA 180 · suite 913 · typecheck/lint/build PASS |
+| Réserves | mineures R-PR-D2A-01…03 · INHERITED-R-01 · aucune bloquante/majeure |
+| Verdict | **READY FOR PR WITH RESERVES** |
+| Staging/commit/push/PR | **non exécutés** |
+| Prochain gate | GO COMMIT PUSH AND OPEN DRAFT PR … |
+| D2-B / D2-C | **fermés** |
+| D3 | **fermé** |
+
+**Statut :** `PR READINESS COMPLETE — READY FOR PR WITH RESERVES — QA-G3 ACCEPTED — NO COMMIT/PUSH/PR`.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
new file mode 100644
index 0000000..ef9db9c
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
@@ -0,0 +1,255 @@
+# V3.1-D2-A — Catalog Projection
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| Date/heure/fuseau | 2026-08-02 03:26 CEST (+0200) |
+| Cycle | 8 — Delivery / implémentation |
+| Profil | Standard |
+| Typologie | EVOL |
+| Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
+| Base / HEAD | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| Statut | `PR READINESS COMPLETE — READY FOR PR WITH RESERVES — QA-G3 ACCEPTED — NO COMMIT/PUSH/PR` |
+
+Le profil Standard est proportionné à un diff de fonctions de domaine pures,
+types readonly, constante statique et tests, sans resolver, infrastructure,
+mutation, UI, dépendance ni changement d'architecture.
+
+## B. Gate Morris
+
+Gate consommé le 2026-08-02 à 03:16 CEST :
+
+```text
+GO DELIVERY SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+USE VALIDATED BACKLOG AND ADOPTED TA-01…12 —
+IMPLEMENT CONTRACTS, CATALOG FINGERPRINT AND PURE CATALOG PROJECTION —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+## C. Sources
+
+Template d'exécution SFIA, routing guide, operating model, guardrails,
+validation checklist, engineering principles, delivery pipeline, carte CKC,
+matrice CKC, méthode cycle §4.8, documents D2 `15` à `19`, backlog `08`,
+README framing, contrat catalogue D1, types/erreurs/invariants/index T-A2,
+tests cycle OA, README D1 et configurations TypeScript/Vitest/Next.
+
+CKC : contrat détaillé absent ; fallback carte synthétique + méthode §4.8,
+statut `method-candidate`, guidance cognitive expérimentale,
+`executionAuthority=false`.
+
+## D. Git Truth et transition de branche
+
+- branche initiale : `framing/sfia-studio-v3-1-d2-ckc-resolver-cadrage` ;
+- `HEAD = main = origin/main = e1befcb8…` ; divergence `0/0` ;
+- staged vide ; état documentaire attendu uniquement ;
+- 77 worktrees ; prune dry-run vide ;
+- branche Delivery locale et distante absentes ;
+- handoff source : tip `dbb4e80…`, blob `85596ce…` ;
+- branche créée localement, sans commit ni push ;
+- empreintes SHA-256 de `15` à `19`, `08` et README identiques avant/après.
+
+## E. Stories consommées
+
+- BL-D2-A-01 — contrats dédiés et projection contractuelle ;
+- BL-D2-A-02 — fingerprint statique et garde SHA-256 ;
+- BL-D2-A-03 — projection pure et fail-closed ;
+- BL-D2-A-04 — tests et non-régression.
+
+## F. Décisions TA consommées
+
+TA-01, TA-02, TA-03, TA-06 et la partie locale de TA-09 sont implémentées.
+TA-04/05/07 appartiennent à D2-B ; TA-08/11 à D2-C ; TA-10 à D2-B/C.
+TA-12 est respectée : D2-B et D2-C restent fermés.
+
+## G. Périmètre
+
+Contrats D2-A, projection fermée du catalogue, sérialisation canonique,
+HASH-A statique, contrôle SHA-256 test-only, projection de sélection pure,
+erreurs locales, exports additifs, tests et documentation.
+
+## H. Hors périmètre
+
+Resolver, manifest CKC, preuve de consommation, bridge QualifyCycle,
+résultat global D2, audit, factory, infrastructure, CreateCycle, mutation,
+UI, API, D2-B, D2-C, D2-D et D3.
+
+## I. Contrats D2-A
+
+`CatalogSelectionContext` conserve `cycleTypeId`, `catalogVersion`,
+`catalogHash`, `correlationId`. `CatalogFingerprintEntry` ferme exactement
+les champs identitaires, lifecycle, numéro de méthode et mapping CKC.
+`ValidatedCycleTypeProjection` expose présentation D1, lifecycle, mapping CKC,
+version, hash et corrélation, sans profil, décision ni consommation.
+
+## J. Projection contractuelle du fingerprint
+
+La projection conserve l'ordre contractuel des quinze entrées et un ordre fixe
+des propriétés. `fallbackReference` absent est normalisé en `null`.
+Labels, descriptions, displayOrder, methodReference et aliases sont exclus.
+
+## K. HASH-A et mécanisme de garde
+
+- format : `sha256-canonical-json-v1` ;
+- valeur : `sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc` ;
+- production : sérialisation JSON déterministe uniquement ;
+- test : `createHash("sha256")` depuis `node:crypto`, jamais importé en production ;
+- aucun artefact généré, script permanent, package ou changement CI.
+
+## L. Catalog Projection
+
+`projectSelectableCycleType` applique dans l'ordre : corrélation, version,
+fingerprint, existence, lifecycle active, puis cohérence du mapping CKC.
+Elle accepte un seam de catalogue pur pour les tests négatifs et utilise le
+singleton D1 par défaut. Le résultat de succès et le mapping sont gelés.
+
+## M. Erreurs locales
+
+Erreurs structurées, bloquantes et sans projection partielle :
+`CATALOG_CORRELATION_ID_REQUIRED`, `CATALOG_VERSION_INCOMPATIBLE`,
+`CATALOG_FINGERPRINT_STALE`, `CYCLE_TYPE_UNKNOWN`,
+`CYCLE_TYPE_NOT_SELECTABLE`, `CYCLE_TYPE_MAPPING_INVALID`.
+`CycleDetailCode` et `CycleStructuredError` restent inchangés.
+
+## N. Fichiers
+
+Créés : trois modules de domaine, deux suites de tests et ce rapport.
+Modifiés : barrel `index.ts` par trois exports uniquement, documents framing
+`19`, `08` et `README`. Aucun autre fichier projet.
+
+## O. Tests
+
+Baseline avant modification : catalogue D1 **46/46 PASS** ; cycle OA
+**94/94 PASS**. D2-A ciblé : fingerprint **8/8 PASS** ; projection
+**16/16 PASS**.
+
+## P. Résultats complets
+
+- fingerprint D2-A : **8/8 PASS** ;
+- Catalog Projection D2-A : **16/16 PASS** ;
+- catalogue D1 historique : **46/46 PASS** ;
+- suite `oa/cycle` : **118/118 PASS** ;
+- suite complète : **851/851 PASS** ;
+- typecheck : **PASS** ;
+- lint : **PASS**, aucun warning ni erreur ;
+- build Next : **PASS**, compilation et 10 pages statiques ;
+- frontières d'import : **PASS**.
+
+Le détail reproductible est conservé dans le review pack et le rapport
+temporaire du cycle.
+
+## Q. Diff et volumétrie
+
+Diff borné aux fichiers autorisés. Les documents `12` à `18`, les documents
+D1, les dépendances, configurations et modules T-A2 protégés sont inchangés.
+
+## R. Anti-claims
+
+Delivery locale ≠ QA indépendante ; tests verts ≠ PR ready ; mapping CKC ≠
+résolution ; fingerprint ≠ preuve de consommation ; projection ≠ bridge
+QualifyCycle. Aucun commit/push/PR projet, aucune promotion méthode.
+
+## S. Risques et réserves
+
+Le fingerprint doit être mis à jour explicitement si un champ contractuel D1
+change ; le test empêche une dérive silencieuse. `INHERITED-R-01` reste
+acceptée, traçable et non levée. D2-B dépend d'une intégration/validation
+ultérieure de D2-A et d'un gate Morris distinct.
+
+## T. Readiness QA
+
+La Delivery D2-A est complète localement et prête pour une QA indépendante.
+La QA n'est pas exécutée par ce cycle et la PR readiness n'est pas ouverte.
+
+## U. Verdict
+
+```text
+V3.1-D2-A CATALOG PROJECTION DELIVERY COMPLETE —
+BL-D2-A-01…04 IMPLEMENTED —
+STATIC HASH-A AND TEST-ONLY SHA-256 GUARD IMPLEMENTED —
+PURE FAIL-CLOSED CATALOG PROJECTION IMPLEMENTED —
+D1 PRESERVED —
+READY FOR INDEPENDENT QA —
+NOT PR READY —
+NO D2-B — NO D2-C — NO D2-D — NO D3 —
+NO PROJECT COMMIT — NO PROJECT PUSH — NO PR
+```
+
+## V. QA indépendante — 2026-08-02
+
+| Champ | Valeur |
+|-------|--------|
+| Date/heure/fuseau | 2026-08-02 04:30:25 CEST (+0200) |
+| GO QA | consommé 2026-08-02 04:10 CEST |
+| Profil | Critical |
+| Tests QA ajoutés | 62 (fingerprint 25 · projection 37) |
+| Résultats QA | fingerprint 25/25 PASS · projection 31 PASS / 6 FAIL |
+| Réserve | R-QA-D2A-01 bloquante — binding fingerprint/catalogue |
+| Verdict Cursor | **FAIL** |
+| QA-G3 Morris | non décidé |
+| PR readiness | fermée |
+| D2-B / D2-C | fermés |
+| Correction production | aucune |
+
+Rapport : [`01-qa-validation-report.md`](./01-qa-validation-report.md).
+
+## W. Delivery corrective — R-QA-D2A-01 — 2026-08-02 04:46:44 CEST (+0200)
+
+| Champ | Valeur |
+|-------|--------|
+| Date/heure/fuseau | 2026-08-02 04:46:44 CEST (+0200) |
+| GO correctif | consommé 2026-08-02 04:39 CEST (+0200) |
+| Finding | R-QA-D2A-01 — contournement public binding fingerprint/catalogue |
+| Cause | hash contextuel lié à la constante, pas au catalogue effectivement utilisé |
+| Fichier production modifié | `catalogProjection.ts` uniquement |
+| Tests QA | **préservés** (empreintes inchangées) |
+| Baseline rouge | 6 FAIL binding reproduits |
+| Après correction | projection QA **37/37 PASS** · fingerprint QA 25/25 · Delivery 8+16 · D1 46 · oa/cycle 180 · suite 913 |
+| HASH-A | inchangé |
+| Crypto runtime / dépendance | aucune |
+| Statut | `CORRECTIVE DELIVERY COMPLETE LOCALLY — QA REVALIDATION REQUIRED` |
+| R-QA-D2A-01 | CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION |
+| QA-G3 Morris | non décidé |
+| PR readiness | fermée |
+| D2-B / D2-C / D3 | fermés |
+
+Rapport : [`02-corrective-delivery-report.md`](./02-corrective-delivery-report.md).
+
+## X. QA revalidation — R-QA-D2A-01 — 2026-08-02 13:57:07 CEST (+0200)
+
+| Champ | Valeur |
+|-------|--------|
+| Date/heure/fuseau | 2026-08-02 13:57:07 CEST (+0200) |
+| GO revalidation | consommé 2026-08-02 05:31 CEST (+0200) |
+| Profil | Critical |
+| Tests rejoués | projection QA 37 · fingerprint Delivery/QA 8+25 · projection Delivery 16 · D1 46 · oa/cycle 180 · suite 913 |
+| Résultats | **tous PASS** · binding filter 7/7 (6 historiques + seam) |
+| Statut R-QA-D2A-01 | `CLOSED — INDEPENDENT QA REVALIDATION PASS` |
+| Réserves | aucune bloquante ou majeure |
+| Correction pendant QA | **aucune** |
+| QA-G3 Morris | **en attente** — NOT DECIDED |
+| PR readiness | fermée |
+| D2-B / D2-C / D3 | fermés |
+
+Rapport : [`03-qa-revalidation-report.md`](./03-qa-revalidation-report.md).
+
+## Y. PR readiness — 2026-08-02 14:11:00 CEST (+0200)
+
+| Champ | Valeur |
+|-------|--------|
+| QA-G3 | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST (+0200) |
+| PR readiness | exécutée |
+| Package | **20 fichiers** confirmés |
+| Checks | 913/913 · typecheck/lint/build PASS |
+| Verdict | **READY FOR PR WITH RESERVES** |
+| Réserves | R-PR-D2A-01…03 mineures · INHERITED-R-01 |
+| Staging / commit / push / PR | **non exécutés** |
+| D2-B / D2-C / D3 | fermés |
+
+Rapport : [`04-pr-readiness-report.md`](./04-pr-readiness-report.md).
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
new file mode 100644
index 0000000..8fbbd38
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
@@ -0,0 +1,2315 @@
+# V3.1-D2-A — QA / Validation Report (Critical)
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| Date/heure/fuseau | 2026-08-02 04:30:25 CEST (+0200) |
+| Cycle | 9 — QA / validation |
+| Profil | **Critical** |
+| Typologie | EVOL |
+| Branche | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
+| HEAD / main / origin/main | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| Handoff pré-cycle | tip `ed6ef243…` · blob `82ce40df…` |
+| Statut | `V3.1-D2-A INDEPENDENT QA FAIL — BLOCKING OR MAJOR CONTRACT FINDING IDENTIFIED — NO CORRECTIVE IMPLEMENTATION PERFORMED — CORRECTIVE DELIVERY REQUIRES DISTINCT MORRIS GO — PR READINESS NOT AUTHORIZED — D2-B AND D2-C REMAIN CLOSED — D3 NOT OPENED` |
+| Décision Morris QA-G3 | **non consommée** |
+
+## B. Gate Morris
+
+```text
+GO QA VALIDATION SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+VERIFY CONTRACTS, FINGERPRINT DETERMINISM, FAIL-CLOSED CATALOG PROJECTION, IMPORT BOUNDARIES AND NON-REGRESSION —
+NO CORRECTIVE IMPLEMENTATION UNLESS DISTINCT MORRIS GO —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+Interprétation du message Morris « ok go » comme consommation du gate candidat
+immédiatement précédent, datée 2026-08-02 04:10 CEST (+0200).
+
+## C. Objet à valider
+
+Contrats D2-A, projection fingerprint HASH-A, Catalog Projection fail-closed,
+binding fingerprint↔catalogue, frontières publiques, immuabilité, non-régression
+D1/OA cycle, absence D2-B/C.
+
+## D. Référentiel
+
+Stories BL-D2-A-01…04 · FA-C / FA-06 · TA-P-A / TA-02 / HASH-A / TYPE-B /
+ERR-B / TA-12 · docs framing 15–19 · README Delivery · handoff Delivery ·
+CKC QA pilot · standard QA v2 · méthode §4.9 · précédent QA D1.
+
+## E. CKC QA
+
+Path : `method/.../pilots/04-qa-validation.md` · candidate v0.1.0 ·
+consommation obligatoire · `executionAuthority=false` · guidance expérimentale.
+Dimensions 1–12 appliquées. Anti-patterns évités : QA symbolique, confirmation
+Delivery seule, correction production, claim « sans bug ».
+
+## F. Git Truth
+
+```text
+2026-08-02 04:26:21 CEST (+0200)
+branch=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
+HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+handoff_tip=ed6ef243c26afb680aea429edeb6b7d877144a6d
+handoff_blob=82ce40df42ce7c21368e089288d0351036182b88
+```
+
+Branche Delivery locale conservée. Branche distante Delivery absente.
+77 worktrees. Staged vide. Aucun commit/push/PR projet.
+
+## G. État initial
+
+Tracked modifiés Delivery : `index.ts`, framing `08`, framing `README`.
+Non suivis D2-A attendus présents. Limite pre-check ChatGPT : état local non
+inspecté directement ; Cursor a exécuté le Local Git Truth Check complet.
+
+## H. Empreintes de préservation
+
+### Avant QA
+
+```text
+2026-08-02 04:26:21 CEST (+0200)
+projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
+projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
+projects/sfia-studio/app/lib/oa/cycle/domain/types.ts  sha256=25f937e21d4ca2a5d0adc1b5c1427928e1c7ea0a267d840f82e8914af93fb9fc  blob=9f245b1ccc7b08ef42fd27e78ec9d455b490597e
+projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts  sha256=e929b13141f10d40e0f9d079f4de5e9c00e0ed75a50c8a2703ae0392baec20da  blob=5fe6aaf53de0f1d9650d108d97de350969d31a14
+projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts  sha256=d8827e2c0b0c93b0e6a1aa73f390bb0d190d2484e90b94490c3e56a973de9643  blob=7ea06a9bdbdb7056215ac166980f8896ae64aabe
+projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
+projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=56366c6a4957c211d59a917b9a7353d036641ce7ee0a8bea5ca9307c38ef11df  blob=012665ba18da544e7a1a06553a31c7f697e5092f
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=e2f5068f0cbe3785b8e92c806b84a614d585e1aab735c849b7e9c54baaf617c6  blob=2a09c3b8164ad6e70b3d967b281a6f20f0fbf2fa
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=76e21d474f8f5d46273a8c646b1027393062f1694b516393fc281af512e648cc  blob=b43ac12098b62471dc5a2eae9123f0666fa72701
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=bb32eddc80e5c1e06e70ee9ad0df4d8c2f3714cb18e2507250cf096230afe53b  blob=51e086fc8259189ea05cfe8cc3af443ea6dcb7a3
+.tmp-sfia-review/chatgpt-review.md  sha256=42f63a7ed596d51d3712513b92e455808700bb5d1bbecde65573c1a8f6da2ed6  blob=82ce40df42ce7c21368e089288d0351036182b88
+```
+
+### Après QA (fichiers protégés)
+
+```text
+2026-08-02 04:28:02 CEST (+0200)
+projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
+projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
+projects/sfia-studio/app/lib/oa/cycle/domain/types.ts  sha256=25f937e21d4ca2a5d0adc1b5c1427928e1c7ea0a267d840f82e8914af93fb9fc  blob=9f245b1ccc7b08ef42fd27e78ec9d455b490597e
+projects/sfia-studio/app/lib/oa/cycle/domain/errors.ts  sha256=e929b13141f10d40e0f9d079f4de5e9c00e0ed75a50c8a2703ae0392baec20da  blob=5fe6aaf53de0f1d9650d108d97de350969d31a14
+projects/sfia-studio/app/lib/oa/cycle/domain/invariants.ts  sha256=d8827e2c0b0c93b0e6a1aa73f390bb0d190d2484e90b94490c3e56a973de9643  blob=7ea06a9bdbdb7056215ac166980f8896ae64aabe
+projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
+projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
+```
+
+Résultat : **PROTECTED_HASHES_UNCHANGED**.
+
+## I. Baseline Delivery
+
+| Commande | Résultat | Exit |
+|----------|----------|------|
+| catalogFingerprint.test.ts | 8/8 PASS | 0 |
+| catalogProjection.test.ts | 16/16 PASS | 0 |
+| cycleTypeCatalog.test.ts | 46/46 PASS | 0 |
+| __tests__/oa/cycle/ | 118/118 PASS | 0 |
+
+## J. Stratégie QA
+
+1. Préservation des fichiers protégés.
+2. Baseline Delivery reproduite.
+3. Renforcement négatif fingerprint + projection.
+4. Campagne critique binding fingerprint/catalogue via seam public.
+5. Frontières, immuabilité, imports.
+6. Classification stricte ; **aucune correction production**.
+
+## K. Matrice invariants
+
+| ID | Invariant | Preuve | Résultat | Réserve |
+|----|-----------|--------|----------|---------|
+| INV-D2A-01 | Contrats dédiés readonly | lecture + exports | PASS | — |
+| INV-D2A-02 | Fingerprint champs fermés | fingerprint.qa | PASS | — |
+| INV-D2A-03 | Exclus n’impactent pas hash | fingerprint.qa | PASS | — |
+| INV-D2A-04 | Sérialisation déterministe | fingerprint.qa | PASS | — |
+| INV-D2A-05 | SHA-256 = constante | fingerprint.qa | PASS | — |
+| INV-D2A-06 | Pas de crypto runtime prod | static + QA | PASS | — |
+| INV-D2A-07 | Validations ordre/fail-closed | projection.qa | PASS | — |
+| INV-D2A-08 | Failure sans projection | projection.qa | PASS | — |
+| INV-D2A-09 | Success sans profil/gate/consumed | projection.qa | PASS | — |
+| INV-D2A-10 | D1 autoritatif inchangé | hashes + immutabilité | PASS | — |
+| INV-D2A-11 | Catalogue divergent ≠ succès | projection.qa binding | **FAIL** | R-QA-D2A-01 |
+| INV-D2A-12 | Seam test ≠ contournement public | projection.qa binding | **FAIL** | R-QA-D2A-01 |
+| INV-D2A-13 | Catalogue prod non muté | projection.qa | PASS | — |
+| INV-D2A-14 | Pas de D2-B/C exposé | static imports | PASS | — |
+| INV-D2A-15 | Non-régression hors défauts QA | D1 46/46 ; Delivery 24/24 | PASS* | *suite globale rouge uniquement à cause des 6 FAIL QA binding |
+
+## L. Couverture Delivery existante
+
+Nominale + négatifs lifecycle/mapping/version/hash. Ne couvrait pas le binding
+fingerprint↔catalogue injecté via API publique.
+
+## M. Tests QA ajoutés
+
+### `catalogFingerprint.qa.test.ts` — contenu complet
+
+```typescript
+/**
+ * V3.1-D2-A — Independent QA reinforcement for HASH-A fingerprint.
+ * Production and Delivery tests must remain untouched.
+ * @vitest-environment node
+ */
+import { createHash } from "node:crypto";
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT,
+  projectCatalogFingerprint,
+  serializeCatalogFingerprint,
+  type CycleTypeCatalog,
+  type CycleTypeDefinition,
+} from "@/lib/oa/cycle";
+
+function cloneCatalog(
+  mutate?: (entries: CycleTypeDefinition[]) => void,
+): CycleTypeCatalog {
+  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+    ...entry,
+    ckc: { ...entry.ckc },
+    aliases: [...entry.aliases],
+  }));
+  mutate?.(entries);
+  return { version: CYCLE_TYPE_CATALOG.version, entries };
+}
+
+function sha256(serialized: string): string {
+  return `sha256:${createHash("sha256").update(serialized).digest("hex")}`;
+}
+
+describe("V3.1-D2-A QA — catalog fingerprint", () => {
+  it("uses the exact HASH-A format sha256:<64 lowercase hex>", () => {
+    expect(CYCLE_TYPE_CATALOG_FINGERPRINT_FORMAT).toBe(
+      "sha256-canonical-json-v1",
+    );
+    expect(CYCLE_TYPE_CATALOG_FINGERPRINT).toMatch(/^sha256:[0-9a-f]{64}$/);
+  });
+
+  it("recomputes SHA-256 from serializeCatalogFingerprint reproducibly", () => {
+    const first = serializeCatalogFingerprint();
+    const second = serializeCatalogFingerprint();
+    expect(second).toBe(first);
+    expect(sha256(first)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
+    expect(sha256(second)).toBe(CYCLE_TYPE_CATALOG_FINGERPRINT);
+  });
+
+  it("projects fifteen entries in contractual order with frozen structure", () => {
+    const projection = projectCatalogFingerprint();
+    expect(projection).toHaveLength(15);
+    expect(projection.map((entry) => entry.cycleTypeId)).toEqual(
+      CYCLE_TYPE_CATALOG.entries.map((entry) => entry.cycleTypeId),
+    );
+    expect(Object.isFrozen(projection)).toBe(true);
+    for (const entry of projection) {
+      expect(Object.isFrozen(entry)).toBe(true);
+      expect(Object.isFrozen(entry.ckc)).toBe(true);
+    }
+  });
+
+  it("refuses or ignores mutation of the fingerprint projection", () => {
+    const projection = projectCatalogFingerprint();
+    const originalId = projection[0].cycleTypeId;
+    expect(() => {
+      (projection as unknown as CatalogFingerprintEntryMutable[])[0] = {
+        ...projection[0],
+        cycleTypeId: "cyc:tampered",
+      };
+    }).toThrow();
+    expect(() => {
+      (projection[0] as { cycleTypeId: string }).cycleTypeId = "cyc:tampered";
+    }).toThrow();
+    expect(() => {
+      (projection[0].ckc as { primaryReference: string }).primaryReference =
+        "method/tampered.md";
+    }).toThrow();
+    expect(projection[0].cycleTypeId).toBe(originalId);
+  });
+
+  it.each([
+    [
+      "cycleTypeId",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        cycleTypeId: `${entry.cycleTypeId}-x`,
+      }),
+    ],
+    [
+      "canonicalKey",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        canonicalKey: `${entry.canonicalKey}-x`,
+      }),
+    ],
+    [
+      "lifecycleStatus",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        lifecycleStatus: "deprecated",
+      }),
+    ],
+    [
+      "methodCycleNumber",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        methodCycleNumber: (entry.methodCycleNumber % 15) + 1,
+      }),
+    ],
+    [
+      "mandatory",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: { ...entry.ckc, mandatory: false as unknown as true },
+      }),
+    ],
+    [
+      "primaryLevel",
+      (entry: CycleTypeDefinition): CycleTypeDefinition =>
+        entry.ckc.primaryLevel === "detailed"
+          ? {
+              ...entry,
+              ckc: {
+                mandatory: true,
+                primaryLevel: "synthetic",
+                primaryReference:
+                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
+                fallbackPolicy: "none",
+                executionAuthority: false,
+                doctrineStatus: "method-candidate",
+                unavailableBehavior: "fail-closed",
+              },
+            }
+          : {
+              ...entry,
+              ckc: {
+                mandatory: true,
+                primaryLevel: "detailed",
+                primaryReference: entry.ckc.primaryReference,
+                fallbackPolicy: "synthetic_map",
+                fallbackReference:
+                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
+                executionAuthority: false,
+                doctrineStatus: "method-candidate",
+                unavailableBehavior: "fail-closed",
+              },
+            },
+    ],
+    [
+      "primaryReference",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          primaryReference: `${entry.ckc.primaryReference}-x`,
+        },
+      }),
+    ],
+    [
+      "fallbackPolicy",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          fallbackPolicy:
+            entry.ckc.fallbackPolicy === "none" ? "synthetic_map" : "none",
+        },
+      }),
+    ],
+    [
+      "fallbackReference",
+      (entry: CycleTypeDefinition): CycleTypeDefinition =>
+        entry.ckc.fallbackReference === undefined
+          ? {
+              ...entry,
+              ckc: {
+                ...entry.ckc,
+                fallbackReference:
+                  "method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md",
+              },
+            }
+          : {
+              ...entry,
+              ckc: {
+                mandatory: entry.ckc.mandatory,
+                primaryLevel: entry.ckc.primaryLevel,
+                primaryReference: entry.ckc.primaryReference,
+                fallbackPolicy: entry.ckc.fallbackPolicy,
+                executionAuthority: entry.ckc.executionAuthority,
+                doctrineStatus: entry.ckc.doctrineStatus,
+                unavailableBehavior: entry.ckc.unavailableBehavior,
+              },
+            },
+    ],
+    [
+      "executionAuthority",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          executionAuthority: true as unknown as false,
+        },
+      }),
+    ],
+    [
+      "doctrineStatus",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          doctrineStatus: "baseline" as "method-candidate",
+        },
+      }),
+    ],
+    [
+      "unavailableBehavior",
+      (entry: CycleTypeDefinition): CycleTypeDefinition => ({
+        ...entry,
+        ckc: {
+          ...entry.ckc,
+          unavailableBehavior: "soft-fail" as "fail-closed",
+        },
+      }),
+    ],
+  ])("detects contractual field change: %s", (_field, mutateEntry) => {
+    const changed = cloneCatalog((entries) => {
+      entries[0] = mutateEntry(entries[0]);
+    });
+    expect(serializeCatalogFingerprint(changed)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expect(sha256(serializeCatalogFingerprint(changed))).not.toBe(
+      CYCLE_TYPE_CATALOG_FINGERPRINT,
+    );
+  });
+
+  it.each([
+    ["label", { label: "Changed label" }],
+    ["shortDescription", { shortDescription: "Changed description" }],
+    ["displayOrder", { displayOrder: 99 }],
+    ["methodReference", { methodReference: "method/changed.md §9.9" }],
+    ["aliases", { aliases: ["alias:changed"] }],
+  ] as const)("ignores excluded field change: %s", (_field, patch) => {
+    const changed = cloneCatalog((entries) => {
+      entries[0] = { ...entries[0], ...patch };
+    });
+    expect(serializeCatalogFingerprint(changed)).toBe(
+      serializeCatalogFingerprint(),
+    );
+    expect(sha256(serializeCatalogFingerprint(changed))).toBe(
+      CYCLE_TYPE_CATALOG_FINGERPRINT,
+    );
+  });
+
+  it("normalizes absent fallbackReference to explicit null", () => {
+    const synthetic = projectCatalogFingerprint().find(
+      (entry) => entry.ckc.primaryLevel === "synthetic",
+    );
+    expect(synthetic?.ckc.fallbackReference).toBeNull();
+    expect(serializeCatalogFingerprint()).toContain('"fallbackReference":null');
+  });
+
+  it("detects reordering of contractual entries", () => {
+    const reordered: CycleTypeCatalog = {
+      version: CYCLE_TYPE_CATALOG.version,
+      entries: [
+        ...CYCLE_TYPE_CATALOG.entries.slice(1, 2),
+        ...CYCLE_TYPE_CATALOG.entries.slice(0, 1),
+        ...CYCLE_TYPE_CATALOG.entries.slice(2),
+      ].map((entry) => ({
+        ...entry,
+        ckc: { ...entry.ckc },
+        aliases: [...entry.aliases],
+      })),
+    };
+    expect(serializeCatalogFingerprint(reordered)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expect(sha256(serializeCatalogFingerprint(reordered))).not.toBe(
+      CYCLE_TYPE_CATALOG_FINGERPRINT,
+    );
+  });
+
+  it("does not mutate the authoritative D1 catalog", () => {
+    const before = serializeCatalogFingerprint();
+    const first = CYCLE_TYPE_CATALOG.entries[0];
+    projectCatalogFingerprint();
+    serializeCatalogFingerprint();
+    expect(serializeCatalogFingerprint()).toBe(before);
+    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
+    expect(Object.isFrozen(first)).toBe(true);
+  });
+
+  it("keeps production fingerprint module free of crypto, fs, Next and infra", () => {
+    const source = readFileSync(
+      path.resolve(
+        __dirname,
+        "../../../lib/oa/cycle/domain/catalogFingerprint.ts",
+      ),
+      "utf8",
+    );
+    expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
+    expect(source).not.toMatch(/infrastructure\//);
+  });
+});
+
+type CatalogFingerprintEntryMutable = {
+  cycleTypeId: string;
+  canonicalKey: string;
+  lifecycleStatus: string;
+  methodCycleNumber: number;
+  ckc: Record<string, unknown>;
+};
+```
+
+### `catalogProjection.qa.test.ts` — contenu complet
+
+```typescript
+/**
+ * V3.1-D2-A — Independent QA reinforcement for Catalog Projection.
+ * Production and Delivery tests must remain untouched.
+ * Evidence of public seam / fingerprint binding defects must stay failing.
+ * @vitest-environment node
+ */
+import { readFileSync } from "node:fs";
+import path from "node:path";
+import { describe, expect, it } from "vitest";
+import {
+  ADOPTED_CYCLE_TYPE_IDS,
+  CKC_PILOT_CADRAGE_PATH,
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  CYCLE_TYPE_CATALOG_VERSION,
+  projectSelectableCycleType,
+  serializeCatalogFingerprint,
+  type CatalogProjectionErrorCode,
+  type CatalogSelectionContext,
+  type CycleTypeCatalog,
+  type CycleTypeDefinition,
+} from "@/lib/oa/cycle";
+
+function context(
+  overrides: Partial<CatalogSelectionContext> = {},
+): CatalogSelectionContext {
+  return {
+    cycleTypeId: "cyc:delivery",
+    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+    correlationId: "cor:d2-a-qa",
+    ...overrides,
+  };
+}
+
+function cloneCatalog(
+  mutate: (entries: CycleTypeDefinition[]) => void,
+): CycleTypeCatalog {
+  const entries = CYCLE_TYPE_CATALOG.entries.map((entry) => ({
+    ...entry,
+    ckc: { ...entry.ckc },
+    aliases: [...entry.aliases],
+  }));
+  mutate(entries);
+  return { version: CYCLE_TYPE_CATALOG_VERSION, entries };
+}
+
+function expectFailure(
+  result: ReturnType<typeof projectSelectableCycleType>,
+  code: CatalogProjectionErrorCode,
+): void {
+  expect(result.ok).toBe(false);
+  if (result.ok) {
+    throw new Error(`Expected failure ${code}, got success`);
+  }
+  expect(result.error.code).toBe(code);
+  expect(result.error.blocking).toBe(true);
+  expect(typeof result.error.message).toBe("string");
+  expect(result.error.message.length).toBeGreaterThan(0);
+  expect(result).not.toHaveProperty("projection");
+  expect(result.error).not.toHaveProperty("projection");
+  expect(result.error).not.toHaveProperty("ckc");
+}
+
+function expectPublicRejectsDivergentCatalog(
+  catalog: CycleTypeCatalog,
+  cycleTypeId = "cyc:delivery",
+): void {
+  const result = projectSelectableCycleType(context({ cycleTypeId }), catalog);
+  // INV-D2A-11/12: public API must not accept a contractually divergent catalog
+  // while still validating the static canonical fingerprint.
+  expect(result.ok).toBe(false);
+  if (result.ok) {
+    throw new Error(
+      "Public Catalog Projection accepted a divergent catalog with canonical fingerprint",
+    );
+  }
+}
+
+describe("V3.1-D2-A QA — Catalog Projection nominals", () => {
+  it("projects every active adopted cycle type with frozen read-only success", () => {
+    for (const cycleTypeId of ADOPTED_CYCLE_TYPE_IDS) {
+      const result = projectSelectableCycleType(context({ cycleTypeId }));
+      expect(result.ok).toBe(true);
+      if (!result.ok) throw new Error(result.error.message);
+      const production = CYCLE_TYPE_CATALOG.entries.find(
+        (entry) => entry.cycleTypeId === cycleTypeId,
+      )!;
+      expect(result.projection).toMatchObject({
+        cycleTypeId,
+        label: production.label,
+        shortDescription: production.shortDescription,
+        lifecycleStatus: "active",
+        catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+        catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+        correlationId: "cor:d2-a-qa",
+      });
+      expect(result.projection.ckc).toEqual(production.ckc);
+      expect(Object.isFrozen(result)).toBe(true);
+      expect(Object.isFrozen(result.projection)).toBe(true);
+      expect(Object.isFrozen(result.projection.ckc)).toBe(true);
+      expect(result.projection).not.toHaveProperty("profile");
+      expect(result.projection).not.toHaveProperty("recommendedProfile");
+      expect(result.projection).not.toHaveProperty("gate");
+      expect(result.projection).not.toHaveProperty("consumed");
+      expect(result.projection).not.toHaveProperty("isMorrisDecision");
+    }
+  });
+});
+
+describe("V3.1-D2-A QA — fail-closed priority and exact variants", () => {
+  it("rejects empty/whitespace correlationId before other checks", () => {
+    expectFailure(
+      projectSelectableCycleType(
+        context({
+          correlationId: "   ",
+          catalogVersion: "wrong",
+          catalogHash: "wrong",
+          cycleTypeId: "cyc:unknown",
+        }),
+      ),
+      "CATALOG_CORRELATION_ID_REQUIRED",
+    );
+  });
+
+  it("rejects incompatible version before fingerprint", () => {
+    expectFailure(
+      projectSelectableCycleType(
+        context({
+          catalogVersion: "stale",
+          catalogHash: "wrong",
+          cycleTypeId: "cyc:unknown",
+        }),
+      ),
+      "CATALOG_VERSION_INCOMPATIBLE",
+    );
+  });
+
+  it("rejects stale fingerprint before type lookup", () => {
+    expectFailure(
+      projectSelectableCycleType(
+        context({
+          catalogHash: `sha256:${"0".repeat(64)}`,
+          cycleTypeId: "cyc:unknown",
+        }),
+      ),
+      "CATALOG_FINGERPRINT_STALE",
+    );
+  });
+
+  it("rejects unknown type before lifecycle/mapping", () => {
+    expectFailure(
+      projectSelectableCycleType(context({ cycleTypeId: "cyc:unknown" })),
+      "CYCLE_TYPE_UNKNOWN",
+    );
+  });
+
+  it.each([
+    ["version whitespace", { catalogVersion: ` ${CYCLE_TYPE_CATALOG_VERSION}` }],
+    ["version case", { catalogVersion: CYCLE_TYPE_CATALOG_VERSION.toUpperCase() }],
+    [
+      "version suffix",
+      { catalogVersion: `${CYCLE_TYPE_CATALOG_VERSION}-extra` },
+    ],
+  ] as const)("rejects version variant: %s", (_label, overrides) => {
+    expectFailure(
+      projectSelectableCycleType(context(overrides)),
+      "CATALOG_VERSION_INCOMPATIBLE",
+    );
+  });
+
+  it.each([
+    [
+      "hash whitespace",
+      { catalogHash: ` ${CYCLE_TYPE_CATALOG_FINGERPRINT}` },
+    ],
+    [
+      "hash uppercase",
+      { catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT.toUpperCase() },
+    ],
+    ["hash wrong prefix", { catalogHash: `md5:${"a".repeat(64)}` }],
+    ["hash short", { catalogHash: `sha256:${"a".repeat(63)}` }],
+  ] as const)("rejects fingerprint variant: %s", (_label, overrides) => {
+    expectFailure(
+      projectSelectableCycleType(context(overrides)),
+      "CATALOG_FINGERPRINT_STALE",
+    );
+  });
+
+  it("rejects empty cycleTypeId and propagates valid correlationId on failure", () => {
+    const result = projectSelectableCycleType(context({ cycleTypeId: "" }));
+    expectFailure(result, "CYCLE_TYPE_UNKNOWN");
+    if (!result.ok) {
+      expect(result.error.correlationId).toBe("cor:d2-a-qa");
+    }
+  });
+});
+
+describe("V3.1-D2-A QA — lifecycle and mapping negatives", () => {
+  it.each(["deprecated", "unavailable", "future-status"] as const)(
+    "rejects lifecycle %s",
+    (lifecycleStatus) => {
+      const catalog = cloneCatalog((entries) => {
+        entries[7] = {
+          ...entries[7],
+          lifecycleStatus:
+            lifecycleStatus as CycleTypeDefinition["lifecycleStatus"],
+        };
+      });
+      const result = projectSelectableCycleType(context(), catalog);
+      expectFailure(result, "CYCLE_TYPE_NOT_SELECTABLE");
+    },
+  );
+
+  it("rejects mandatory=false", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: { ...entries[7].ckc, mandatory: false as unknown as true },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects unknown primaryLevel", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          primaryLevel: "unknown" as "synthetic",
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects empty/whitespace primaryReference", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: { ...entries[7].ckc, primaryReference: "  " },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects executionAuthority=true", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          executionAuthority: true as unknown as false,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects invalid doctrineStatus and unavailableBehavior", () => {
+    for (const field of ["doctrineStatus", "unavailableBehavior"] as const) {
+      const catalog = cloneCatalog((entries) => {
+        entries[7] = {
+          ...entries[7],
+          ckc: { ...entries[7].ckc, [field]: "invalid" },
+        } as CycleTypeDefinition;
+      });
+      expectFailure(
+        projectSelectableCycleType(context(), catalog),
+        "CYCLE_TYPE_MAPPING_INVALID",
+      );
+    }
+  });
+
+  it("rejects detailed mappings without canonical fallback", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          fallbackPolicy: "none",
+          fallbackReference: undefined,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(
+        context({ cycleTypeId: "cyc:framing" }),
+        catalog,
+      ),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects detailed with wrong fallbackPolicy or fallbackReference", () => {
+    const wrongPolicy = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: { ...entries[0].ckc, fallbackPolicy: "none" },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(
+        context({ cycleTypeId: "cyc:framing" }),
+        wrongPolicy,
+      ),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+
+    const wrongRef = cloneCatalog((entries) => {
+      entries[0] = {
+        ...entries[0],
+        ckc: {
+          ...entries[0].ckc,
+          fallbackReference:
+            "method/wrong.md" as typeof CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(
+        context({ cycleTypeId: "cyc:framing" }),
+        wrongRef,
+      ),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference", () => {
+    const badPrimary = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          primaryReference: "method/non-canonical.md",
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), badPrimary),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+
+    const badPolicy = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: { ...entries[7].ckc, fallbackPolicy: "synthetic_map" },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), badPolicy),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+
+    const badFallback = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), badFallback),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+
+    const emptyFallback = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          fallbackReference: "" as unknown as typeof CKC_SYNTHETIC_MAP_PATH,
+        },
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), emptyFallback),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+
+  it("rejects extended mapping properties", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          ...entries[7].ckc,
+          dynamicResolution: true,
+        } as CycleTypeDefinition["ckc"],
+      };
+    });
+    expectFailure(
+      projectSelectableCycleType(context(), catalog),
+      "CYCLE_TYPE_MAPPING_INVALID",
+    );
+  });
+});
+
+describe("V3.1-D2-A QA — error contract", () => {
+  it("covers the six documented error codes with blocking safe failures", () => {
+    const cases: Array<[CatalogProjectionErrorCode, () => ReturnType<typeof projectSelectableCycleType>]> =
+      [
+        [
+          "CATALOG_CORRELATION_ID_REQUIRED",
+          () => projectSelectableCycleType(context({ correlationId: "" })),
+        ],
+        [
+          "CATALOG_VERSION_INCOMPATIBLE",
+          () => projectSelectableCycleType(context({ catalogVersion: "x" })),
+        ],
+        [
+          "CATALOG_FINGERPRINT_STALE",
+          () =>
+            projectSelectableCycleType(
+              context({ catalogHash: `sha256:${"1".repeat(64)}` }),
+            ),
+        ],
+        [
+          "CYCLE_TYPE_UNKNOWN",
+          () =>
+            projectSelectableCycleType(context({ cycleTypeId: "cyc:missing" })),
+        ],
+        [
+          "CYCLE_TYPE_NOT_SELECTABLE",
+          () =>
+            projectSelectableCycleType(
+              context(),
+              cloneCatalog((entries) => {
+                entries[7] = { ...entries[7], lifecycleStatus: "deprecated" };
+              }),
+            ),
+        ],
+        [
+          "CYCLE_TYPE_MAPPING_INVALID",
+          () =>
+            projectSelectableCycleType(
+              context(),
+              cloneCatalog((entries) => {
+                entries[7] = {
+                  ...entries[7],
+                  ckc: {
+                    ...entries[7].ckc,
+                    executionAuthority: true as unknown as false,
+                  },
+                };
+              }),
+            ),
+        ],
+      ];
+
+    for (const [code, run] of cases) {
+      const result = run();
+      expectFailure(result, code);
+      if (!result.ok) {
+        expect(Object.isFrozen(result)).toBe(true);
+        expect(Object.isFrozen(result.error)).toBe(true);
+      }
+    }
+  });
+
+  it("documents retryable/recoverable classification for catalog stale errors", () => {
+    const version = projectSelectableCycleType(
+      context({ catalogVersion: "wrong" }),
+    );
+    const hash = projectSelectableCycleType(
+      context({ catalogHash: `sha256:${"2".repeat(64)}` }),
+    );
+    expect(version.ok).toBe(false);
+    expect(hash.ok).toBe(false);
+    if (!version.ok && !hash.ok) {
+      expect(version.error.retryable).toBe(true);
+      expect(hash.error.retryable).toBe(true);
+      expect(version.error.recoverable).toBe(true);
+      expect(hash.error.recoverable).toBe(true);
+    }
+  });
+});
+
+describe("V3.1-D2-A QA — public fingerprint/catalog binding (critical)", () => {
+  it("exposes the catalog seam on the public API signature", () => {
+    // JS Function.length ignores parameters with defaults; inspect source instead.
+    const source = readFileSync(
+      path.resolve(
+        __dirname,
+        "../../../lib/oa/cycle/domain/catalogProjection.ts",
+      ),
+      "utf8",
+    );
+    expect(source).toMatch(
+      /export function projectSelectableCycleType\(\s*context: CatalogSelectionContext,\s*catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,/,
+    );
+    const indexSource = readFileSync(
+      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
+      "utf8",
+    );
+    expect(indexSource).toContain(
+      'export * from "./domain/catalogProjection";',
+    );
+  });
+
+  it("rejects a catalog with modified canonicalKey under canonical fingerprint", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = {
+        ...entries[7],
+        canonicalKey: `${entries[7].canonicalKey}-divergent`,
+      };
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog);
+  });
+
+  it("rejects a catalog with modified methodCycleNumber under canonical fingerprint", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries[7] = { ...entries[7], methodCycleNumber: 99 };
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog);
+  });
+
+  it("rejects a catalog with swapped still-valid contractual CKC mapping", () => {
+    const catalog = cloneCatalog((entries) => {
+      // Convert synthetic delivery into a still-valid detailed mapping that
+      // differs from the authoritative D1 contract for cyc:delivery.
+      entries[7] = {
+        ...entries[7],
+        ckc: {
+          mandatory: true,
+          primaryLevel: "detailed",
+          primaryReference: CKC_PILOT_CADRAGE_PATH,
+          fallbackPolicy: "synthetic_map",
+          fallbackReference: CKC_SYNTHETIC_MAP_PATH,
+          executionAuthority: false,
+          doctrineStatus: "method-candidate",
+          unavailableBehavior: "fail-closed",
+        },
+      };
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    const result = projectSelectableCycleType(context(), catalog);
+    expect(result.ok).toBe(false);
+    if (result.ok) {
+      // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
+      expect(result.projection.ckc.primaryLevel).not.toBe("detailed");
+    }
+  });
+
+  it("rejects a reordered catalog under canonical fingerprint", () => {
+    const catalog: CycleTypeCatalog = {
+      version: CYCLE_TYPE_CATALOG_VERSION,
+      entries: [
+        ...CYCLE_TYPE_CATALOG.entries.slice(1, 2),
+        ...CYCLE_TYPE_CATALOG.entries.slice(0, 1),
+        ...CYCLE_TYPE_CATALOG.entries.slice(2),
+      ].map((entry) => ({
+        ...entry,
+        ckc: { ...entry.ckc },
+        aliases: [...entry.aliases],
+      })),
+    };
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog, "cyc:framing");
+  });
+
+  it("rejects a catalog with an extra entry under canonical fingerprint", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries.push({
+        ...entries[0],
+        cycleTypeId: "cyc:extra-qa",
+        canonicalKey: "extra-qa",
+        methodCycleNumber: 16,
+        displayOrder: 16,
+      });
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog);
+  });
+
+  it("rejects a catalog missing an entry under canonical fingerprint", () => {
+    const catalog = cloneCatalog((entries) => {
+      entries.splice(14, 1);
+    });
+    expect(serializeCatalogFingerprint(catalog)).not.toBe(
+      serializeCatalogFingerprint(),
+    );
+    expectPublicRejectsDivergentCatalog(catalog);
+  });
+});
+
+describe("V3.1-D2-A QA — public boundary, immutability and imports", () => {
+  it("keeps index.ts limited to the three additive D2-A exports", () => {
+    const source = readFileSync(
+      path.resolve(__dirname, "../../../lib/oa/cycle/index.ts"),
+      "utf8",
+    );
+    expect(source).toContain(
+      'export * from "./domain/ckcQualificationContracts";',
+    );
+    expect(source).toContain('export * from "./domain/catalogFingerprint";');
+    expect(source).toContain('export * from "./domain/catalogProjection";');
+    expect(source).not.toMatch(
+      /ckcQualificationResolver|ConsumptionProof|QualifyCycleBridge|createD2|D2Factory/,
+    );
+  });
+
+  it("keeps production projection free of D2-B/C and runtime I/O imports", () => {
+    for (const relative of [
+      "ckcQualificationContracts.ts",
+      "catalogFingerprint.ts",
+      "catalogProjection.ts",
+    ]) {
+      const source = readFileSync(
+        path.resolve(__dirname, `../../../lib/oa/cycle/domain/${relative}`),
+        "utf8",
+      );
+      expect(source).not.toMatch(/node:crypto|node:fs|from ["']next/);
+      expect(source).not.toMatch(/infrastructure\//);
+      expect(source).not.toMatch(
+        /QualifyCycle|ResolveCycleKnowledgeContract|CkcResolverPort|CycleAuditEvent|CreateCycle|consumed|recommendedProfile|isMorrisDecision/,
+      );
+    }
+  });
+
+  it("does not mutate production catalog entries across calls", () => {
+    const before = serializeCatalogFingerprint();
+    const first = CYCLE_TYPE_CATALOG.entries[0];
+    const firstCkc = first.ckc;
+    projectSelectableCycleType(context());
+    projectSelectableCycleType(context({ cycleTypeId: "cyc:framing" }));
+    expect(serializeCatalogFingerprint()).toBe(before);
+    expect(CYCLE_TYPE_CATALOG.entries[0]).toBe(first);
+    expect(CYCLE_TYPE_CATALOG.entries[0].ckc).toBe(firstCkc);
+    expect(Object.isFrozen(CYCLE_TYPE_CATALOG)).toBe(true);
+    expect(Object.isFrozen(first)).toBe(true);
+    expect(Object.isFrozen(firstCkc)).toBe(true);
+  });
+});
+```
+
+Résultats : fingerprint QA **25/25 PASS** · projection QA **31 PASS / 6 FAIL**.
+
+Correction d’oracle documentée : le test d’arité `Function.length === 2` a été
+remplacé par inspection source, car JS ignore les paramètres avec défaut dans
+`.length`. Les 6 tests de binding restent en échec volontaire.
+
+## N. Fingerprint
+
+Format, déterminisme, champs inclus/exclus, gel, réordonnancement, absence
+crypto runtime : **PASS**.
+
+## O. Catalog Projection
+
+Nominaux quinze types, priorité fail-closed, variantes exactes, lifecycle,
+mapping, six codes d’erreur, immuabilité success/failure : **PASS**.
+
+## P. Binding catalogue/fingerprint
+
+### Constat
+
+`projectSelectableCycleType(context, catalog?)` est exporté publiquement.
+La validation `catalogHash === CYCLE_TYPE_CATALOG_FINGERPRINT` utilise la
+constante statique, **sans** recalculer l’empreinte du catalogue effectivement
+consommé.
+
+### Preuves FAIL (6)
+
+1. canonicalKey modifié → `ok=true`
+2. methodCycleNumber modifié → `ok=true`
+3. mapping CKC encore valide mais divergent (synthetic→detailed) → `ok=true`
+4. catalogue réordonné → `ok=true`
+5. entrée supplémentaire → `ok=true`
+6. entrée manquante → `ok=true`
+
+Commande :
+`npm test -- __tests__/oa/cycle/catalogProjection.qa.test.ts` · exit 1.
+
+## Q. Frontière publique
+
+Trois exports D2-A additifs uniquement. Aucun resolver/proof/bridge/factory D2
+ajouté. Le seam catalogue optionnel est toutefois public — voir R-QA-D2A-01.
+
+## R. Immuabilité
+
+Catalogue/entrées/mappings D1 gelés ; projections et erreurs gelées : **PASS**.
+
+## S. Import boundaries
+
+Aucune occurrence `node:crypto|node:fs|next|infrastructure|QualifyCycle|
+ResolveCycleKnowledgeContract|CkcResolverPort|CreateCycle|consumed|
+recommendedProfile|isMorrisDecision` dans les trois modules production : **PASS**.
+
+## T. Résultats complets
+
+```text
+===== FP =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  8 passed (8)
+   Start at  04:28:52
+   Duration  276ms (transform 84ms, setup 21ms, collect 121ms, tests 3ms, environment 0ms, prepare 25ms)
+
+EXIT_FP=0
+===== PROJ =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 4ms
+
+ Test Files  1 passed (1)
+      Tests  16 passed (16)
+   Start at  04:28:52
+   Duration  258ms (transform 75ms, setup 21ms, collect 107ms, tests 4ms, environment 0ms, prepare 26ms)
+
+EXIT_PROJ=0
+===== FPQA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 5ms
+
+ Test Files  1 passed (1)
+      Tests  25 passed (25)
+   Start at  04:28:53
+   Duration  279ms (transform 73ms, setup 21ms, collect 104ms, tests 5ms, environment 0ms, prepare 24ms)
+
+EXIT_FPQA=0
+===== PROJQA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 10ms
+   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 2ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
+   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 0ms
+   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
+   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 3ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 0ms
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 0ms
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 0ms
+
+⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
+    560|     );
+    561|     const result = projectSelectableCycleType(context(), catalog);
+    562|     expect(result.ok).toBe(false);
+       |                       ^
+    563|     if (result.ok) {
+    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯
+
+
+ Test Files  1 failed (1)
+      Tests  6 failed | 31 passed (37)
+   Start at  04:28:53
+   Duration  270ms (transform 75ms, setup 21ms, collect 105ms, tests 10ms, environment 0ms, prepare 30ms)
+
+EXIT_PROJQA=1
+===== D1 =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms
+
+ Test Files  1 passed (1)
+      Tests  46 passed (46)
+   Start at  04:28:54
+   Duration  264ms (transform 76ms, setup 20ms, collect 107ms, tests 7ms, environment 0ms, prepare 24ms)
+
+EXIT_D1=0
+===== OA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 8ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 5ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 6ms
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 7ms
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 11ms
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 16ms
+   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 4ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 1ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
+   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 0ms
+   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
+   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 5ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 1ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 1ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 0ms
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 0ms
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 0ms
+ ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 78ms
+ ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 95ms
+
+⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
+    560|     );
+    561|     const result = projectSelectableCycleType(context(), catalog);
+    562|     expect(result.ok).toBe(false);
+       |                       ^
+    563|     if (result.ok) {
+    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯
+
+
+ Test Files  1 failed | 7 passed (8)
+      Tests  6 failed | 174 passed (180)
+   Start at  04:28:54
+   Duration  450ms (transform 343ms, setup 267ms, collect 1.21s, tests 226ms, environment 1ms, prepare 294ms)
+
+EXIT_OA=1
+===== ALL =====
+
+> sfia-studio@0.1.0 test
+> vitest run
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/ops1/actionGate.test.ts (10 tests) 123ms
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:56.193Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:56.285Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":92,"providerMode":"fake"}
+
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 21ms
+   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 3ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 1ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
+   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 1ms
+   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
+   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 6ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 1ms
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 1ms
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 1ms
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:56.286Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}
+
+ ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 118ms
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:56.443Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":157,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:56.444Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:56.544Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":100,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:56.544Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:56.544Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":0,"providerMode":"fake"}
+
+ ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 353ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-2a381fa8-5c2b-4930-adc4-114b7c34e307 fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-2a381fa8-5c2b-4930-adc4-114b7c34e307 15 tools=0
+
+ ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 119ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-62c8fdf1-1304-478f-b7ae-aeba5a5a6a68 fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-62c8fdf1-1304-478f-b7ae-aeba5a5a6a68 30 tools=0
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-280b883e-6006-4a32-9f85-c28d936ee6b5 fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-b2670280-fe79-42d8-98c7-51d207bf458f ops1-att-280b883e-6006-4a32-9f85-c28d936ee6b5 45 tools=0
+
+ ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 102ms
+ ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 170ms
+ ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 186ms
+ ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 198ms
+stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-1cc61b43-0ef8-4d7f-a216-e2783b7272a0 ops1-att-767e6747-961e-4a0f-9dff-be003db757db fake-test
+
+ ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 136ms
+stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-1cc61b43-0ef8-4d7f-a216-e2783b7272a0 ops1-att-767e6747-961e-4a0f-9dff-be003db757db 45 tools=1
+
+ ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 97ms
+ ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 713ms
+   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  457ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-c8aee00d-7a3e-4927-b6c4-2b833d855155 ops1-att-48a611b2-07fa-4509-ba77-21139b266aa2 fake-test
+
+stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
+[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-c8aee00d-7a3e-4927-b6c4-2b833d855155 ops1-att-48a611b2-07fa-4509-ba77-21139b266aa2 INTERNAL
+
+ ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 818ms
+   ✓ ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write  339ms
+   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  395ms
+ ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 61ms
+ ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 120ms
+ ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 148ms
+ ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 85ms
+ ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 94ms
+ ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 77ms
+ ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 62ms
+ ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 39ms
+ ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 137ms
+ ✓ __tests__/ops1/repository.test.ts (6 tests) 67ms
+ ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 102ms
+ ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 29ms
+ ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 35ms
+ ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 21ms
+ ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 12ms
+ ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 28ms
+ ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 46ms
+ ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 18ms
+ ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 4ms
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:28:57.939Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
+{"event":"d1.project_create","ts":"2026-08-02T02:28:57.943Z","status":"ok","projectId":"proj-a87486d8-d6a7-4910-8f34-279de189731b","durationMs":1}
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:28:57.944Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:28:57.944Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}
+
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
+{"event":"d1.project_create","ts":"2026-08-02T02:28:57.947Z","status":"ok","projectId":"proj-044e32ad-de82-41d2-b9b6-cd20a880353c","durationMs":0}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:28:57.947Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:28:57.949Z","status":"ok","projectId":"proj-044e32ad-de82-41d2-b9b6-cd20a880353c","durationMs":2}
+
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:28:57.949Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}
+
+ ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 14ms
+ ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 10ms
+ ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 16ms
+ ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 20ms
+ ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 21ms
+ ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 34ms
+ ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 18ms
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 11ms
+ ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 9ms
+ ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 8ms
+ ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 8ms
+ ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 8ms
+ ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 9ms
+ ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 11ms
+ ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 7ms
+ ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 11ms
+ ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 7ms
+ ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 6ms
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
+ ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 8ms
+ ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 5ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 4ms
+ ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 8ms
+ ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 6ms
+ ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 6ms
+ ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 7ms
+ ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 6ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 8ms
+ ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 4ms
+ ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 3ms
+ ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 2ms
+ ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 3ms
+ ✓ __tests__/platform/platform-ai.test.ts (5 tests) 2ms
+ ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 4ms
+ ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
+ ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 1ms
+ ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3224ms
+   ✓ SFIA context resolver > detects context stale on head mismatch  405ms
+   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  314ms
+   ✓ SFIA action compiler > denies commit/push operations  317ms
+   ✓ SFIA action compiler > preserves exact content  343ms
+   ✓ SFIA action compiler > instantiates cursor prompt from real template  357ms
+   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  355ms
+   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  308ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.641Z","status":"started","intentLength":53,"sessionLocalId":"s1"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:59.723Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":82,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.724Z","status":"started","intentLength":22,"sessionLocalId":"s2"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T02:28:59.836Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":112,"providerMode":"fake"}
+
+ ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 180ms
+ ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 194ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.836Z","status":"started","intentLength":22,"sessionLocalId":"s2"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:28:59.974Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":138,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.922Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:29:00.024Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":102,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:29:00.025Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:29:00.026Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
+
+stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
+{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:29:00.025Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
+{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:29:00.026Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.028Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.028Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.028Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.029Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.029Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.029Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.029Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.029Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:29:00.037Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":8,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:29:00.037Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.037Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.037Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T02:29:00.037Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:29:00.037Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.037Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.037Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:29:00.038Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":1,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
+{"event":"d1.project_create","ts":"2026-08-02T02:29:00.042Z","status":"ok","projectId":"proj-1f4c265a-52f2-48f8-a586-ac07bf0ede28","durationMs":0}
+{"event":"d1.project_create","ts":"2026-08-02T02:29:00.043Z","status":"ok","projectId":"proj-88bc18ac-3ed2-4991-89ff-436208f2d8bb","durationMs":1}
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:29:00.043Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:29:00.043Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:29:00.043Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+ ✓ __tests__/d1/intake-c3.test.ts (16 tests) 122ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:28:59.975Z","status":"started","intentLength":39,"sessionLocalId":"s4"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:29:00.083Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":108,"providerMode":"fake","errorCode":"PROVIDER"}
+
+ ✓ __tests__/d1/intake-c2.test.ts (13 tests) 446ms
+ ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 591ms
+ ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 103ms
+ ✓ __tests__/increment-e.test.tsx (4 tests) 64ms
+ ✓ __tests__/shell.test.tsx (1 test) 53ms
+ ✓ __tests__/increment-a.test.tsx (8 tests) 117ms
+ ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 43ms
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
+[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T02:29:00.945Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.946Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.946Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
+{"event":"d1.project_create","ts":"2026-08-02T02:29:00.947Z","status":"ok","projectId":"proj-d8d00ed1-1eae-4fd9-8894-de03f26688fe","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:29:00.947Z","status":"SUCCEEDED","projectId":"proj-d8d00ed1-1eae-4fd9-8894-de03f26688fe","sessionLocalId":"s1","durationMs":1,"proposalId":"rrp-1"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.952Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.953Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
+{"event":"d1.project_create","ts":"2026-08-02T02:29:00.953Z","status":"ok","projectId":"proj-d7effc5c-3043-4f16-b946-c4407dbb95b9","durationMs":0}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:29:00.953Z","status":"SUCCEEDED","projectId":"proj-d7effc5c-3043-4f16-b946-c4407dbb95b9","sessionLocalId":"s2","durationMs":1,"proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.953Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.953Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T02:29:00.953Z","status":"ALREADY_APPLIED","projectId":"proj-d7effc5c-3043-4f16-b946-c4407dbb95b9","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.957Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.957Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
+{"event":"d1.project_create","ts":"2026-08-02T02:29:00.958Z","status":"ok","projectId":"proj-f0aab84d-136d-401c-b359-02a39f9b7232","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:29:00.958Z","status":"SUCCEEDED","projectId":"proj-f0aab84d-136d-401c-b359-02a39f9b7232","sessionLocalId":"s3","durationMs":1,"proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.958Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:29:00.958Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T02:29:00.958Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
+{"event":"d1.project_create","ts":"2026-08-02T02:29:00.961Z","status":"ok","projectId":"proj-ef71b076-79e3-4c87-b228-0b752a66940d","durationMs":0}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.961Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
+[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T02:29:00.962Z","status":"NO_MUTATION","projectId":"proj-ef71b076-79e3-4c87-b228-0b752a66940d","sessionLocalId":"s4","durationMs":1,"proposalId":"rrp-4"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
+{"event":"d1.project_create","ts":"2026-08-02T02:29:00.966Z","status":"ok","projectId":"proj-81c94ff2-02b9-4447-a4b0-8747a260f037","durationMs":2}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:29:00.966Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:29:00.967Z","status":"ok","projectId":"proj-81c94ff2-02b9-4447-a4b0-8747a260f037","durationMs":1}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.967Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
+[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:29:00.967Z","status":"STALE","projectId":"proj-81c94ff2-02b9-4447-a4b0-8747a260f037","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.971Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T02:29:00.971Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.971Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T02:29:00.971Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:29:00.975Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
+[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:29:00.975Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}
+
+ ✓ __tests__/d1/intake-c4.test.ts (10 tests) 39ms
+ ✓ __tests__/increment-d.test.tsx (5 tests) 61ms
+ ✓ __tests__/navigation.test.tsx (2 tests) 51ms
+ ✓ __tests__/increment-c.test.tsx (8 tests) 1143ms
+   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  304ms
+ ✓ __tests__/gates.test.tsx (1 test) 54ms
+ ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1767ms
+   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  772ms
+   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  312ms
+   ✓ ops1 I5 execution contract + fixture run > rejects run adapterMode mismatch (no silent real→fixture swap)  328ms
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
+{"event":"d1.project_create","ts":"2026-08-02T02:29:01.404Z","status":"ok","projectId":"proj-5760b508-7382-4259-bbb8-0647f2fff730","durationMs":1}
+
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
+{"event":"d1.project_create","ts":"2026-08-02T02:29:01.409Z","status":"ok","projectId":"proj-2e77beab-cdaf-4aef-8165-c5941976aa7c","durationMs":1}
+{"event":"d1.project_create","ts":"2026-08-02T02:29:01.409Z","status":"idempotent","projectId":"proj-2e77beab-cdaf-4aef-8165-c5941976aa7c","durationMs":0}
+
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
+{"event":"d1.project_create","ts":"2026-08-02T02:29:01.412Z","status":"ok","projectId":"proj-0bc7a590-2f83-4bf5-bfce-52ca9be567c2","durationMs":0}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:29:01.412Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:29:01.413Z","status":"ok","projectId":"proj-0bc7a590-2f83-4bf5-bfce-52ca9be567c2","durationMs":1}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:29:01.413Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:29:01.413Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}
+
+ ✓ __tests__/d1/project-foundation.test.ts (7 tests) 18ms
+ ✓ __tests__/increment-b.test.tsx (6 tests) 42ms
+ ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
+ ✓ __tests__/status-pill.test.tsx (1 test) 19ms
+ ✓ __tests__/fixtures.test.ts (2 tests) 2ms
+ ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 11ms
+ ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
+ ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 2899ms
+   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1633ms
+   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  300ms
+ ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2870ms
+   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  645ms
+   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  643ms
+   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  363ms
+   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  303ms
+   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  305ms
+
+⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
+    560|     );
+    561|     const result = projectSelectableCycleType(context(), catalog);
+    562|     expect(result.ok).toBe(false);
+       |                       ^
+    563|     if (result.ok) {
+    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯
+
+
+ Test Files  1 failed | 93 passed (94)
+      Tests  6 failed | 907 passed (913)
+   Start at  04:28:55
+   Duration  6.92s (transform 3.11s, setup 3.09s, collect 11.58s, tests 18.77s, environment 5.83s, prepare 3.37s)
+
+EXIT_ALL=1
+===== TYPE =====
+
+> sfia-studio@0.1.0 typecheck
+> tsc --noEmit
+
+EXIT_TYPE=0
+===== LINT =====
+
+> sfia-studio@0.1.0 lint
+> next lint
+
+`next lint` is deprecated and will be removed in Next.js 16.
+For new projects, use create-next-app to choose your preferred linter.
+For existing projects, migrate to the ESLint CLI:
+npx @next/codemod@canary next-lint-to-eslint-cli .
+
+✔ No ESLint warnings or errors
+EXIT_LINT=0
+===== BUILD =====
+
+> sfia-studio@0.1.0 build
+> next build
+
+   ▲ Next.js 15.5.20
+
+   Creating an optimized production build ...
+ ✓ Compiled successfully in 924ms
+   Linting and checking validity of types ...
+   Collecting page data ...
+   Generating static pages (0/10) ...
+   Generating static pages (2/10)
+   Generating static pages (4/10)
+   Generating static pages (7/10)
+ ✓ Generating static pages (10/10)
+   Finalizing page optimization ...
+   Collecting build traces ...
+
+Route (app)                                 Size  First Load JS
+┌ ○ /                                      127 B         103 kB
+├ ○ /_not-found                            127 B         103 kB
+├ ○ /cycle-actif                         3.82 kB         119 kB
+├ ○ /decision                            5.53 kB         120 kB
+├ ƒ /nouvelle-demande                    10.1 kB         116 kB
+├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
+├ ƒ /projects/[id]                       2.66 kB         108 kB
+├ ○ /projects/new                        2.62 kB         108 kB
+├ ƒ /studio/projects/[id]                2.15 kB         112 kB
+├ ○ /studio/projects/new                 4.07 kB         114 kB
+├ ○ /synthese                            4.83 kB         120 kB
+└ ƒ /workspace                             571 B         106 kB
++ First Load JS shared by all             102 kB
+  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
+  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
+  └ other shared chunks (total)          1.96 kB
+
+
+○  (Static)   prerendered as static content
+ƒ  (Dynamic)  server-rendered on demand
+
+EXIT_BUILD=0
+===== GIT_DIFF_CHECK =====
+EXIT_DIFFCHECK=0
+```
+
+Synthèse :
+
+| Commande | Exit | Résultat |
+|----------|------|----------|
+| fingerprint Delivery | 0 | 8/8 |
+| projection Delivery | 0 | 16/16 |
+| fingerprint QA | 0 | 25/25 |
+| projection QA | 1 | 31/37 · 6 FAIL binding |
+| D1 | 0 | 46/46 |
+| oa/cycle | 1 | 174/180 · 6 FAIL QA |
+| npm test | 1 | 907/913 · 6 FAIL QA |
+| typecheck | 0 | PASS |
+| lint | 0 | PASS |
+| build | 0 | PASS |
+| git diff --check | 0 | PASS |
+
+## U. Non-régression
+
+Delivery et D1 restent verts. La rougeur des suites agrégées est uniquement
+due aux 6 tests QA démontrant R-QA-D2A-01. Aucune régression D1/Delivery.
+
+## V. Écarts
+
+### R-QA-D2A-01 — Contournement public fingerprint/catalogue
+
+- **Invariant :** INV-D2A-11 · INV-D2A-12
+- **Attendu :** aucun `ok=true` si le catalogue injecté est contractuellement
+  divergent du fingerprint canonique.
+- **Observé :** succès public avec fingerprint canonique + catalogue divergent
+  (canonicalKey, methodCycleNumber, mapping valide divergent, ordre, +1/−1 entrée).
+- **Preuve :** `catalogProjection.qa.test.ts` describe binding · exit 1
+- **Commande :** `npm test -- __tests__/oa/cycle/catalogProjection.qa.test.ts`
+- **Sévérité :** **BLOQUANTE**
+- **Impact :** D2-B/C pourrait consommer une projection issue d’un catalogue
+  stale/divergent tout en portant le hash canonique.
+- **Recommandation :** Delivery correctif — soit retirer le seam du public API,
+  soit lier le contrôle hash à `serializeCatalogFingerprint(catalog utilisé
+  soit n’accepter que le singleton D1.
+- **Gate :** GO DELIVERY CORRECTIVE
+- **Statut :** OPEN
+
+## W. Classification des réserves
+
+| ID | Sévérité | Statut |
+|----|----------|--------|
+| R-QA-D2A-01 | Bloquante | OPEN |
+
+Aucune réserve mineure ou environnementale.
+
+## X. Limites de campagne
+
+Pas de fuzzing exhaustif multi-processus. Pas de preuve runtime UI. Pas de
+mesure de couverture instrumentée. Les tests Delivery restent verts et ne
+masquent pas le défaut : les tests QA le démontrent.
+
+## Y. Anti-claims
+
+QA ≠ PASS · Delivery verte ≠ QA validée · typecheck/lint/build verts ≠ contrat
+fail-closed complet · aucun claim « prêt prod », « sans bug », « PR ready »,
+« D2-B autorisé ».
+
+## Z. Conditions du verdict
+
+FAIL car réserve bloquante reproductible sur invariant contractuel obligatoire,
+sans correction production.
+
+## AA. Gate suivant candidat
+
+```text
+GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+ADDRESS ONLY R-QA-D2A FINDINGS —
+PRESERVE QA TESTS —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+Ne pas exécuter automatiquement.
+
+## AB. Verdict
+
+```text
+V3.1-D2-A INDEPENDENT QA FAIL —
+BLOCKING OR MAJOR CONTRACT FINDING IDENTIFIED —
+NO CORRECTIVE IMPLEMENTATION PERFORMED —
+CORRECTIVE DELIVERY REQUIRES DISTINCT MORRIS GO —
+PR READINESS NOT AUTHORIZED —
+D2-B AND D2-C REMAIN CLOSED —
+D3 NOT OPENED
+```
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
new file mode 100644
index 0000000..caaddba
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
@@ -0,0 +1,1459 @@
+# V3.1-D2-A — Corrective Delivery Report (Critical)
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| Date/heure/fuseau | 2026-08-02 04:46:44 CEST (+0200) |
+| Cycle | 8 — Delivery / implémentation corrective |
+| Profil | **Critical** |
+| Typologie | EVOL / corrective |
+| Branche | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
+| HEAD / main / origin/main | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| Handoff pré-cycle | tip `5274d88…` · blob `a2d0742b…` |
+| Statut | `V3.1-D2-A CORRECTIVE DELIVERY READY FOR INDEPENDENT QA REVALIDATION — R-QA-D2A-01 PENDING REVALIDATION — QA-G3 NOT DECIDED — NOT PR READY — D2-B AND D2-C REMAIN CLOSED — D3 NOT OPENED` |
+
+## B. Gate Morris
+
+```text
+GO DELIVERY CORRECTIVE SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+ADDRESS ONLY R-QA-D2A-01 —
+PRESERVE QA TESTS —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+Interprétation : GO consommé 2026-08-02 04:39 CEST (+0200).
+
+## C. Finding consommé
+
+| Champ | Valeur |
+|-------|--------|
+| ID | R-QA-D2A-01 |
+| Sévérité | BLOQUANTE |
+| Invariants | INV-D2A-11 · INV-D2A-12 |
+| Statut initial | OPEN |
+| Statut après correctif | CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION |
+
+Attendu : aucun `ok=true` si le catalogue réellement utilisé est contractuellement
+divergent du fingerprint canonique.
+
+Observé (pré-correctif) : succès public avec fingerprint canonique + catalogue
+divergent (six variantes).
+
+## D. Référentiel
+
+Stories BL-D2-A-01…04 · FA-C / FA-06 · TA-P-A / TA-02 / HASH-A / TYPE-B /
+ERR-B / TA-12 · rapport QA 01 · CKC fallback Delivery §4.8 · standard QA v2.
+
+## E. Git Truth
+
+```text
+2026-08-02 04:44:22 CEST (+0200)
+BRANCH=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
+HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+ORIGIN_MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+DIVERGENCE=0 0
+HANDOFF_TIP=5274d88eedd62345dcb662fdba8bcf92540b34c8
+HANDOFF_BLOB=a2d0742b9a2e62ec7dfe6832e98360fbae01dcb2
+WORKTREES=77
+DELIVERY_REMOTE_COUNT=0
+```
+
+## F. Empreintes avant correction
+
+```text
+2026-08-02 04:44:21 CEST (+0200)
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1  blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
+projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
+projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
+projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c
+projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=14aa3da501cbd7fe69c9bfb08560842565cbd5a6cd401bd4e0635024533c5a71  blob=e92e12822036c087659983aa831a514c07d72b02
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=74335bede5d9b006e1d03bd1329a007879bcac73e43a2d4f1a124989d86eee0a  blob=cc7ef6ce9e5f35ed90ebf8861e574be579f9b5e5
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=b505cc43d4046021231db9a8e8a6fd15e425afc104a47b62c8252c2ea5977cff  blob=56b328920985acda076d0fe876d9b05900f28358
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=07aee6399672b1fa383bfe33b53efafcdc6b1aa9669276d0b9d9429953ec15b1  blob=35bc85b12294e87524b87cfa968571c7a27a51ca
+.tmp-sfia-review/chatgpt-review.md  sha256=6930a683d377d854c17d0311010c8e4677cbc427b02e4ebdcaf97733c144d177  blob=a2d0742b9a2e62ec7dfe6832e98360fbae01dcb2
+```
+
+`catalogProjection.ts` pré-correctif :
+`sha256=9e348d9c00946f60188120a4e369bace9cb4cad3eb02f3e08d893a23f71233a1`
+`blob=d1bb3b9cb144b35104341b2f75b679b2ffb20892` — **MATCH**.
+
+## G. Baseline rouge reproduite
+
+```text
+===== FP DELIVERY =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  8 passed (8)
+   Start at  04:44:27
+   Duration  345ms (transform 85ms, setup 55ms, collect 116ms, tests 3ms, environment 0ms, prepare 35ms)
+
+EXIT_FP=0
+===== PROJ DELIVERY =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  16 passed (16)
+   Start at  04:44:28
+   Duration  252ms (transform 72ms, setup 21ms, collect 102ms, tests 3ms, environment 0ms, prepare 25ms)
+
+EXIT_PROJ=0
+===== FP QA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms
+
+ Test Files  1 passed (1)
+      Tests  25 passed (25)
+   Start at  04:44:28
+   Duration  269ms (transform 74ms, setup 24ms, collect 104ms, tests 4ms, environment 0ms, prepare 27ms)
+
+EXIT_FPQA=0
+===== PROJ QA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 6 failed) 10ms
+   ✓ V3.1-D2-A QA — Catalog Projection nominals > projects every active adopted cycle type with frozen read-only success 2ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty/whitespace correlationId before other checks 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects incompatible version before fingerprint 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects stale fingerprint before type lookup 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects unknown type before lifecycle/mapping 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version whitespace 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version case 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects version variant: version suffix 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash whitespace 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash uppercase 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash wrong prefix 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects fingerprint variant: hash short 0ms
+   ✓ V3.1-D2-A QA — fail-closed priority and exact variants > rejects empty cycleTypeId and propagates valid correlationId on failure 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle deprecated 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle unavailable 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects lifecycle future-status 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects mandatory=false 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects unknown primaryLevel 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects empty/whitespace primaryReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects executionAuthority=true 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects invalid doctrineStatus and unavailableBehavior 1ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed mappings without canonical fallback 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects detailed with wrong fallbackPolicy or fallbackReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects synthetic with bad primaryReference, fallbackPolicy or fallbackReference 0ms
+   ✓ V3.1-D2-A QA — lifecycle and mapping negatives > rejects extended mapping properties 0ms
+   ✓ V3.1-D2-A QA — error contract > covers the six documented error codes with blocking safe failures 0ms
+   ✓ V3.1-D2-A QA — error contract > documents retryable/recoverable classification for catalog stale errors 0ms
+   ✓ V3.1-D2-A QA — public fingerprint/catalog binding (critical) > exposes the catalog seam on the public API signature 0ms
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint 3ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   × V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint 0ms
+     → expected true to be false // Object.is equality
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps index.ts limited to the three additive D2-A exports 0ms
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > keeps production projection free of D2-B/C and runtime I/O imports 0ms
+   ✓ V3.1-D2-A QA — public boundary, immutability and imports > does not mutate production catalog entries across calls 0ms
+
+⎯⎯⎯⎯⎯⎯⎯ Failed Tests 6 ⎯⎯⎯⎯⎯⎯⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified canonicalKey under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:527:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[1/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with modified methodCycleNumber under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:537:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[2/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with swapped still-valid contractual CKC mapping
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:562:23
+    560|     );
+    561|     const result = projectSelectableCycleType(context(), catalog);
+    562|     expect(result.ok).toBe(false);
+       |                       ^
+    563|     if (result.ok) {
+    564|       // Evidence for R-QA-D2A-01: consumable divergent mapping leaked.
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[3/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a reordered catalog under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:585:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[4/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog with an extra entry under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:601:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[5/6]⎯
+
+ FAIL  __tests__/oa/cycle/catalogProjection.qa.test.ts > V3.1-D2-A QA — public fingerprint/catalog binding (critical) > rejects a catalog missing an entry under canonical fingerprint
+AssertionError: expected true to be false // Object.is equality
+
+- Expected
++ Received
+
+- false
++ true
+
+ ❯ expectPublicRejectsDivergentCatalog __tests__/oa/cycle/catalogProjection.qa.test.ts:73:21
+     71|   // INV-D2A-11/12: public API must not accept a contractually diverge…
+     72|   // while still validating the static canonical fingerprint.
+     73|   expect(result.ok).toBe(false);
+       |                     ^
+     74|   if (result.ok) {
+     75|     throw new Error(
+ ❯ __tests__/oa/cycle/catalogProjection.qa.test.ts:611:5
+
+⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯[6/6]⎯
+
+
+ Test Files  1 failed (1)
+      Tests  6 failed | 31 passed (37)
+   Start at  04:44:29
+   Duration  269ms (transform 75ms, setup 21ms, collect 106ms, tests 10ms, environment 0ms, prepare 28ms)
+
+EXIT_PROJQA=1
+===== D1 =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms
+
+ Test Files  1 passed (1)
+      Tests  46 passed (46)
+   Start at  04:44:29
+   Duration  271ms (transform 76ms, setup 20ms, collect 106ms, tests 7ms, environment 0ms, prepare 29ms)
+
+EXIT_D1=0
+```
+
+Synthèse attendue et observée :
+
+| Suite | Résultat |
+|-------|----------|
+| fingerprint Delivery | 8/8 PASS |
+| projection Delivery | 16/16 PASS |
+| fingerprint QA | 25/25 PASS |
+| projection QA | 31 PASS / **6 FAIL binding** |
+| D1 | 46/46 PASS |
+
+Six FAIL exacts : canonicalKey · methodCycleNumber · mapping CKC · ordre ·
++entrée · −entrée.
+
+## H. Cause racine
+
+`projectSelectableCycleType` validait `context.catalogHash` contre la constante
+`CYCLE_TYPE_CATALOG_FINGERPRINT`, puis consommait le catalogue injecté sans
+vérifier l’équivalence contractuelle HASH-A du catalogue réellement utilisé.
+
+## I. Option corrective retenue
+
+Comparer la sérialisation HASH-A (`serializeCatalogFingerprint`) du catalogue
+utilisé à celle du singleton D1, **après** les contrôles locaux (type /
+lifecycle / mapping), **avant** le succès. Divergence → `CATALOG_FINGERPRINT_STALE`
+(`blocking=true`, `retryable=true`). Fast-path identité `catalog === CYCLE_TYPE_CATALOG`.
+Exception de sérialisation → fail-closed (divergence). Aucune crypto runtime.
+
+## J. Diff complet de catalogProjection.ts
+
+### Avant
+
+```typescript
+import {
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_VERSION,
+  type CycleTypeCatalog,
+  type CycleTypeCkcMapping,
+  type CycleTypeDefinition,
+} from "./cycleTypeCatalog";
+import { CYCLE_TYPE_CATALOG_FINGERPRINT } from "./catalogFingerprint";
+import type {
+  CatalogProjectionError,
+  CatalogProjectionErrorCode,
+  CatalogProjectionResult,
+  CatalogSelectionContext,
+} from "./ckcQualificationContracts";
+
+const SAFE_MESSAGES: Readonly<Record<CatalogProjectionErrorCode, string>> =
+  Object.freeze({
+    CATALOG_CORRELATION_ID_REQUIRED: "A correlation identifier is required.",
+    CATALOG_VERSION_INCOMPATIBLE: "The catalog version is incompatible.",
+    CATALOG_FINGERPRINT_STALE: "The catalog fingerprint is stale.",
+    CYCLE_TYPE_UNKNOWN: "The cycle type is unknown.",
+    CYCLE_TYPE_NOT_SELECTABLE: "The cycle type is not selectable.",
+    CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
+  });
+
+const ALLOWED_MAPPING_KEYS = new Set([
+  "mandatory",
+  "primaryLevel",
+  "primaryReference",
+  "fallbackPolicy",
+  "fallbackReference",
+  "executionAuthority",
+  "doctrineStatus",
+  "unavailableBehavior",
+]);
+
+function failure(
+  code: CatalogProjectionErrorCode,
+  context: CatalogSelectionContext,
+  options: {
+    readonly lifecycleStatus?: CycleTypeDefinition["lifecycleStatus"];
+    readonly retryable?: boolean;
+    readonly recoverable?: boolean;
+  } = {},
+): CatalogProjectionResult {
+  const error: CatalogProjectionError = Object.freeze({
+    code,
+    message: SAFE_MESSAGES[code],
+    blocking: true,
+    retryable: options.retryable ?? false,
+    recoverable: options.recoverable ?? true,
+    ...(context.correlationId.trim()
+      ? { correlationId: context.correlationId }
+      : {}),
+    ...(context.cycleTypeId ? { cycleTypeId: context.cycleTypeId } : {}),
+    ...(options.lifecycleStatus
+      ? { lifecycleStatus: options.lifecycleStatus }
+      : {}),
+  });
+  return Object.freeze({ ok: false, error });
+}
+
+function hasValidMapping(mapping: CycleTypeCkcMapping): boolean {
+  if (
+    Object.keys(mapping).some((key) => !ALLOWED_MAPPING_KEYS.has(key)) ||
+    mapping.mandatory !== true ||
+    !mapping.primaryReference.trim() ||
+    mapping.executionAuthority !== false ||
+    mapping.doctrineStatus !== "method-candidate" ||
+    mapping.unavailableBehavior !== "fail-closed"
+  ) {
+    return false;
+  }
+
+  if (mapping.primaryLevel === "detailed") {
+    return (
+      mapping.fallbackPolicy === "synthetic_map" &&
+      mapping.fallbackReference === CKC_SYNTHETIC_MAP_PATH
+    );
+  }
+
+  if (mapping.primaryLevel === "synthetic") {
+    return (
+      mapping.primaryReference === CKC_SYNTHETIC_MAP_PATH &&
+      mapping.fallbackPolicy === "none" &&
+      mapping.fallbackReference === undefined
+    );
+  }
+
+  return false;
+}
+
+function freezeMapping(
+  mapping: CycleTypeCkcMapping,
+): Readonly<CycleTypeCkcMapping> {
+  return Object.freeze({
+    mandatory: mapping.mandatory,
+    primaryLevel: mapping.primaryLevel,
+    primaryReference: mapping.primaryReference,
+    fallbackPolicy: mapping.fallbackPolicy,
+    ...(mapping.fallbackReference
+      ? { fallbackReference: mapping.fallbackReference }
+      : {}),
+    executionAuthority: mapping.executionAuthority,
+    doctrineStatus: mapping.doctrineStatus,
+    unavailableBehavior: mapping.unavailableBehavior,
+  });
+}
+
+/**
+ * Pure, fail-closed D2-A selection from the authoritative D1 catalog.
+ * The optional catalog is a pure test seam; production callers use the singleton.
+ */
+export function projectSelectableCycleType(
+  context: CatalogSelectionContext,
+  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
+): CatalogProjectionResult {
+  if (!context.correlationId.trim()) {
+    return failure("CATALOG_CORRELATION_ID_REQUIRED", context);
+  }
+  if (context.catalogVersion !== CYCLE_TYPE_CATALOG_VERSION) {
+    return failure("CATALOG_VERSION_INCOMPATIBLE", context, {
+      retryable: true,
+    });
+  }
+  if (context.catalogHash !== CYCLE_TYPE_CATALOG_FINGERPRINT) {
+    return failure("CATALOG_FINGERPRINT_STALE", context, {
+      retryable: true,
+    });
+  }
+
+  const entry = catalog.entries.find(
+    (candidate) => candidate.cycleTypeId === context.cycleTypeId,
+  );
+  if (!entry) {
+    return failure("CYCLE_TYPE_UNKNOWN", context);
+  }
+  if (entry.lifecycleStatus !== "active") {
+    return failure("CYCLE_TYPE_NOT_SELECTABLE", context, {
+      lifecycleStatus: entry.lifecycleStatus,
+    });
+  }
+  if (!entry.ckc || !hasValidMapping(entry.ckc)) {
+    return failure("CYCLE_TYPE_MAPPING_INVALID", context, {
+      lifecycleStatus: entry.lifecycleStatus,
+      recoverable: false,
+    });
+  }
+
+  return Object.freeze({
+    ok: true,
+    projection: Object.freeze({
+      cycleTypeId: entry.cycleTypeId,
+      label: entry.label,
+      shortDescription: entry.shortDescription,
+      lifecycleStatus: entry.lifecycleStatus,
+      ckc: freezeMapping(entry.ckc),
+      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+      correlationId: context.correlationId,
+    }),
+  });
+}
+```
+
+### Après
+
+```typescript
+import {
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_VERSION,
+  type CycleTypeCatalog,
+  type CycleTypeCkcMapping,
+  type CycleTypeDefinition,
+} from "./cycleTypeCatalog";
+import {
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  serializeCatalogFingerprint,
+} from "./catalogFingerprint";
+import type {
+  CatalogProjectionError,
+  CatalogProjectionErrorCode,
+  CatalogProjectionResult,
+  CatalogSelectionContext,
+} from "./ckcQualificationContracts";
+
+const SAFE_MESSAGES: Readonly<Record<CatalogProjectionErrorCode, string>> =
+  Object.freeze({
+    CATALOG_CORRELATION_ID_REQUIRED: "A correlation identifier is required.",
+    CATALOG_VERSION_INCOMPATIBLE: "The catalog version is incompatible.",
+    CATALOG_FINGERPRINT_STALE: "The catalog fingerprint is stale.",
+    CYCLE_TYPE_UNKNOWN: "The cycle type is unknown.",
+    CYCLE_TYPE_NOT_SELECTABLE: "The cycle type is not selectable.",
+    CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
+  });
+
+/** Canonical HASH-A serialization of the authoritative D1 catalog. */
+const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
+  serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);
+
+/**
+ * Fail-closed binding: the catalog actually used must match HASH-A.
+ * Identity with the singleton is sufficient; clones are compared by serialization.
+ */
+function catalogMatchesCanonicalFingerprint(
+  catalog: Pick<CycleTypeCatalog, "entries">,
+): boolean {
+  if (catalog === CYCLE_TYPE_CATALOG) {
+    return true;
+  }
+  try {
+    return (
+      serializeCatalogFingerprint(catalog) ===
+      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
+    );
+  } catch {
+    return false;
+  }
+}
+
+const ALLOWED_MAPPING_KEYS = new Set([
+  "mandatory",
+  "primaryLevel",
+  "primaryReference",
+  "fallbackPolicy",
+  "fallbackReference",
+  "executionAuthority",
+  "doctrineStatus",
+  "unavailableBehavior",
+]);
+
+function failure(
+  code: CatalogProjectionErrorCode,
+  context: CatalogSelectionContext,
+  options: {
+    readonly lifecycleStatus?: CycleTypeDefinition["lifecycleStatus"];
+    readonly retryable?: boolean;
+    readonly recoverable?: boolean;
+  } = {},
+): CatalogProjectionResult {
+  const error: CatalogProjectionError = Object.freeze({
+    code,
+    message: SAFE_MESSAGES[code],
+    blocking: true,
+    retryable: options.retryable ?? false,
+    recoverable: options.recoverable ?? true,
+    ...(context.correlationId.trim()
+      ? { correlationId: context.correlationId }
+      : {}),
+    ...(context.cycleTypeId ? { cycleTypeId: context.cycleTypeId } : {}),
+    ...(options.lifecycleStatus
+      ? { lifecycleStatus: options.lifecycleStatus }
+      : {}),
+  });
+  return Object.freeze({ ok: false, error });
+}
+
+function hasValidMapping(mapping: CycleTypeCkcMapping): boolean {
+  if (
+    Object.keys(mapping).some((key) => !ALLOWED_MAPPING_KEYS.has(key)) ||
+    mapping.mandatory !== true ||
+    !mapping.primaryReference.trim() ||
+    mapping.executionAuthority !== false ||
+    mapping.doctrineStatus !== "method-candidate" ||
+    mapping.unavailableBehavior !== "fail-closed"
+  ) {
+    return false;
+  }
+
+  if (mapping.primaryLevel === "detailed") {
+    return (
+      mapping.fallbackPolicy === "synthetic_map" &&
+      mapping.fallbackReference === CKC_SYNTHETIC_MAP_PATH
+    );
+  }
+
+  if (mapping.primaryLevel === "synthetic") {
+    return (
+      mapping.primaryReference === CKC_SYNTHETIC_MAP_PATH &&
+      mapping.fallbackPolicy === "none" &&
+      mapping.fallbackReference === undefined
+    );
+  }
+
+  return false;
+}
+
+function freezeMapping(
+  mapping: CycleTypeCkcMapping,
+): Readonly<CycleTypeCkcMapping> {
+  return Object.freeze({
+    mandatory: mapping.mandatory,
+    primaryLevel: mapping.primaryLevel,
+    primaryReference: mapping.primaryReference,
+    fallbackPolicy: mapping.fallbackPolicy,
+    ...(mapping.fallbackReference
+      ? { fallbackReference: mapping.fallbackReference }
+      : {}),
+    executionAuthority: mapping.executionAuthority,
+    doctrineStatus: mapping.doctrineStatus,
+    unavailableBehavior: mapping.unavailableBehavior,
+  });
+}
+
+/**
+ * Pure, fail-closed D2-A selection from the authoritative D1 catalog.
+ * The optional catalog is a pure test seam; production callers use the singleton.
+ */
+export function projectSelectableCycleType(
+  context: CatalogSelectionContext,
+  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
+): CatalogProjectionResult {
+  if (!context.correlationId.trim()) {
+    return failure("CATALOG_CORRELATION_ID_REQUIRED", context);
+  }
+  if (context.catalogVersion !== CYCLE_TYPE_CATALOG_VERSION) {
+    return failure("CATALOG_VERSION_INCOMPATIBLE", context, {
+      retryable: true,
+    });
+  }
+  if (context.catalogHash !== CYCLE_TYPE_CATALOG_FINGERPRINT) {
+    return failure("CATALOG_FINGERPRINT_STALE", context, {
+      retryable: true,
+    });
+  }
+
+  const entry = catalog.entries.find(
+    (candidate) => candidate.cycleTypeId === context.cycleTypeId,
+  );
+  if (!entry) {
+    return failure("CYCLE_TYPE_UNKNOWN", context);
+  }
+  if (entry.lifecycleStatus !== "active") {
+    return failure("CYCLE_TYPE_NOT_SELECTABLE", context, {
+      lifecycleStatus: entry.lifecycleStatus,
+    });
+  }
+  if (!entry.ckc || !hasValidMapping(entry.ckc)) {
+    return failure("CYCLE_TYPE_MAPPING_INVALID", context, {
+      lifecycleStatus: entry.lifecycleStatus,
+      recoverable: false,
+    });
+  }
+
+  // Binding after local entry checks so precise codes keep precedence.
+  if (!catalogMatchesCanonicalFingerprint(catalog)) {
+    return failure("CATALOG_FINGERPRINT_STALE", context, {
+      retryable: true,
+    });
+  }
+
+  return Object.freeze({
+    ok: true,
+    projection: Object.freeze({
+      cycleTypeId: entry.cycleTypeId,
+      label: entry.label,
+      shortDescription: entry.shortDescription,
+      lifecycleStatus: entry.lifecycleStatus,
+      ckc: freezeMapping(entry.ckc),
+      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+      correlationId: context.correlationId,
+    }),
+  });
+}
+```
+
+### Diff unifié
+
+```diff
+--- .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection-before.ts	2026-08-02 04:44:22
++++ projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts	2026-08-02 04:45:14
+@@ -6,7 +6,10 @@
+   type CycleTypeCkcMapping,
+   type CycleTypeDefinition,
+ } from "./cycleTypeCatalog";
+-import { CYCLE_TYPE_CATALOG_FINGERPRINT } from "./catalogFingerprint";
++import {
++  CYCLE_TYPE_CATALOG_FINGERPRINT,
++  serializeCatalogFingerprint,
++} from "./catalogFingerprint";
+ import type {
+   CatalogProjectionError,
+   CatalogProjectionErrorCode,
+@@ -24,6 +27,30 @@
+     CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
+   });
+
++/** Canonical HASH-A serialization of the authoritative D1 catalog. */
++const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
++  serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);
++
++/**
++ * Fail-closed binding: the catalog actually used must match HASH-A.
++ * Identity with the singleton is sufficient; clones are compared by serialization.
++ */
++function catalogMatchesCanonicalFingerprint(
++  catalog: Pick<CycleTypeCatalog, "entries">,
++): boolean {
++  if (catalog === CYCLE_TYPE_CATALOG) {
++    return true;
++  }
++  try {
++    return (
++      serializeCatalogFingerprint(catalog) ===
++      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
++    );
++  } catch {
++    return false;
++  }
++}
++
+ const ALLOWED_MAPPING_KEYS = new Set([
+   "mandatory",
+   "primaryLevel",
+@@ -148,6 +175,13 @@
+     });
+   }
+
++  // Binding after local entry checks so precise codes keep precedence.
++  if (!catalogMatchesCanonicalFingerprint(catalog)) {
++    return failure("CATALOG_FINGERPRINT_STALE", context, {
++      retryable: true,
++    });
++  }
++
+   return Object.freeze({
+     ok: true,
+     projection: Object.freeze({
+```
+
+## K. Ordre des validations
+
+1. correlationId
+2. catalogVersion
+3. catalogHash fourni
+4. cycleTypeId connu
+5. lifecycle sélectionnable
+6. mapping CKC cible valide
+7. **binding catalogue utilisé ↔ HASH-A canonique**
+8. succès
+
+## L. Binding catalogue/fingerprint
+
+Mécanisme : `serializeCatalogFingerprint(catalog) === serializeCatalogFingerprint(CYCLE_TYPE_CATALOG)`.
+Rejette les six variantes contractuelles. Accepte les écarts hors HASH-A
+(label, shortDescription, displayOrder, methodReference, aliases) si les autres
+invariants restent valides.
+
+## M. Préservation HASH-A
+
+Constante inchangée :
+`sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc`.
+`catalogFingerprint.ts` empreinte inchangée.
+
+## N. Préservation des tests QA
+
+`catalogFingerprint.qa.test.ts` et `catalogProjection.qa.test.ts` : empreintes
+identiques avant/après. Aucun skip/todo/only. Aucun oracle modifié.
+
+## O. Résultats après correction
+
+```text
+===== FP DELIVERY =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  8 passed (8)
+   Start at  04:45:21
+   Duration  314ms (transform 78ms, setup 39ms, collect 109ms, tests 3ms, environment 0ms, prepare 35ms)
+
+EXIT_FP=0
+===== PROJ DELIVERY =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  16 passed (16)
+   Start at  04:45:22
+   Duration  273ms (transform 73ms, setup 21ms, collect 103ms, tests 3ms, environment 0ms, prepare 36ms)
+
+EXIT_PROJ=0
+===== FP QA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms
+
+ Test Files  1 passed (1)
+      Tests  25 passed (25)
+   Start at  04:45:22
+   Duration  259ms (transform 72ms, setup 20ms, collect 102ms, tests 4ms, environment 0ms, prepare 23ms)
+
+EXIT_FPQA=0
+===== PROJ QA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 6ms
+
+ Test Files  1 passed (1)
+      Tests  37 passed (37)
+   Start at  04:45:23
+   Duration  276ms (transform 75ms, setup 22ms, collect 105ms, tests 6ms, environment 0ms, prepare 29ms)
+
+EXIT_PROJQA=0
+===== D1 =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms
+
+ Test Files  1 passed (1)
+      Tests  46 passed (46)
+   Start at  04:45:23
+   Duration  267ms (transform 79ms, setup 20ms, collect 111ms, tests 7ms, environment 0ms, prepare 22ms)
+
+EXIT_D1=0
+===== OA CYCLE =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 5ms
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 5ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 6ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 7ms
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 9ms
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 17ms
+ ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 81ms
+ ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 98ms
+
+ Test Files  8 passed (8)
+      Tests  180 passed (180)
+   Start at  04:45:24
+   Duration  466ms (transform 353ms, setup 306ms, collect 1.29s, tests 229ms, environment 1ms, prepare 322ms)
+
+EXIT_OA=0
+===== FULL TEST =====
+
+> sfia-studio@0.1.0 test
+> vitest run
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/ops1/actionGate.test.ts (10 tests) 118ms
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.396Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.498Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":102,"providerMode":"fake"}
+
+ ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 94ms
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.499Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.642Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":143,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.643Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.737Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":94,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:25.738Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:25.738Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":0,"providerMode":"fake"}
+
+ ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 344ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-b6b4e9ff-7752-4a9a-b948-00452ef5ef44 fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-b6b4e9ff-7752-4a9a-b948-00452ef5ef44 15 tools=0
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-5044f642-f98d-411d-a493-ef1e2f9d98ce fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-5044f642-f98d-411d-a493-ef1e2f9d98ce 30 tools=0
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-a392a8ef-d782-452d-bee1-adeaabaa4cfd fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-9a12dacb-4f5b-4008-b5cf-ca2b6c999d64 ops1-att-a392a8ef-d782-452d-bee1-adeaabaa4cfd 45 tools=0
+
+ ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 120ms
+ ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 113ms
+ ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 124ms
+ ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 130ms
+ ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 185ms
+stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-74a4afce-6d73-4f92-927c-94a4671e3752 ops1-att-0e12f573-2c6a-4278-bbdb-0a4fc690bee9 fake-test
+
+stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-74a4afce-6d73-4f92-927c-94a4671e3752 ops1-att-0e12f573-2c6a-4278-bbdb-0a4fc690bee9 45 tools=1
+
+ ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 618ms
+   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  388ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-5fc99972-12ec-414b-868b-18dc1f092134 ops1-att-a17f9a5a-c450-411f-a1c8-66ffab1c4aff fake-test
+
+stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
+[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-5fc99972-12ec-414b-868b-18dc1f092134 ops1-att-a17f9a5a-c450-411f-a1c8-66ffab1c4aff INTERNAL
+
+ ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 707ms
+   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  339ms
+ ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 109ms
+ ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 65ms
+ ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 93ms
+ ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 105ms
+ ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 107ms
+ ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 124ms
+ ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 83ms
+ ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 76ms
+ ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 122ms
+ ✓ __tests__/ops1/repository.test.ts (6 tests) 82ms
+ ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 71ms
+ ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 51ms
+ ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 41ms
+ ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 54ms
+ ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 45ms
+ ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 56ms
+ ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 14ms
+ ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 8ms
+ ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 19ms
+ ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 19ms
+ ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 21ms
+ ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 6ms
+ ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 15ms
+ ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 24ms
+ ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 9ms
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.264Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
+{"event":"d1.project_create","ts":"2026-08-02T02:45:27.269Z","status":"ok","projectId":"proj-e6cfc8bf-d0e7-4cb9-be4b-81fd2fdf07eb","durationMs":1}
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.270Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:27.270Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}
+
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
+{"event":"d1.project_create","ts":"2026-08-02T02:45:27.273Z","status":"ok","projectId":"proj-b54d0d9a-de42-4564-98f3-ae41cd65840e","durationMs":0}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:27.273Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:27.274Z","status":"ok","projectId":"proj-b54d0d9a-de42-4564-98f3-ae41cd65840e","durationMs":1}
+
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T02:45:27.274Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}
+
+ ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 14ms
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 21ms
+ ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 17ms
+ ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 17ms
+ ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 4ms
+ ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 5ms
+ ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 7ms
+ ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 6ms
+ ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 9ms
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 14ms
+ ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 12ms
+ ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 7ms
+ ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 6ms
+ ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 4ms
+ ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 6ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 10ms
+ ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 18ms
+ ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 11ms
+ ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 16ms
+ ✓ __tests__/platform/platform-ai.test.ts (5 tests) 3ms
+ ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 7ms
+ ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 8ms
+ ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 10ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 7ms
+ ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 6ms
+ ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 8ms
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 6ms
+ ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 5ms
+ ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
+ ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 2ms
+ ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
+ ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 4ms
+ ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 5ms
+ ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3361ms
+   ✓ SFIA context resolver > detects context stale on head mismatch  352ms
+   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  305ms
+   ✓ SFIA action compiler > denies commit/push operations  352ms
+   ✓ SFIA action compiler > denies context stale  326ms
+   ✓ SFIA action compiler > preserves exact content  342ms
+   ✓ SFIA action compiler > instantiates cursor prompt from real template  341ms
+   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  415ms
+   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  350ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:28.965Z","status":"started","intentLength":53,"sessionLocalId":"s1"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.102Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":137,"providerMode":"fake"}
+
+ ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 197ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.102Z","status":"started","intentLength":22,"sessionLocalId":"s2"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T02:45:29.200Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":98,"providerMode":"fake"}
+
+ ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 218ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.200Z","status":"started","intentLength":22,"sessionLocalId":"s2"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.307Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":107,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.308Z","status":"started","intentLength":39,"sessionLocalId":"s4"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.416Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":108,"providerMode":"fake","errorCode":"PROVIDER"}
+
+ ✓ __tests__/d1/intake-c2.test.ts (13 tests) 456ms
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T02:45:29.355Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T02:45:29.458Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":103,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.460Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T02:45:29.460Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
+
+stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
+{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:45:29.460Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
+{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T02:45:29.460Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.462Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.462Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.463Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":1,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.463Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.463Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.463Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.463Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.463Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:45:29.471Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":8,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.471Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.471Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:45:29.471Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.471Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.471Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.472Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":1,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.472Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T02:45:29.472Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T02:45:29.472Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.472Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.472Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T02:45:29.472Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
+{"event":"d1.project_create","ts":"2026-08-02T02:45:29.477Z","status":"ok","projectId":"proj-635ace86-de7d-4154-8ca4-88b503c2e7aa","durationMs":1}
+{"event":"d1.project_create","ts":"2026-08-02T02:45:29.477Z","status":"ok","projectId":"proj-00af8979-45c5-472a-924e-79260310e9e6","durationMs":0}
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T02:45:29.477Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T02:45:29.478Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T02:45:29.478Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+ ✓ __tests__/d1/intake-c3.test.ts (16 tests) 124ms
+ ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 612ms
+ ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 125ms
+ ✓ __tests__/increment-a.test.tsx (8 tests) 148ms
+ ✓ __tests__/increment-e.test.tsx (4 tests) 94ms
+ ✓ __tests__/increment-d.test.tsx (5 tests) 69ms
+ ✓ __tests__/navigation.test.tsx (2 tests) 55ms
+ ✓ __tests__/shell.test.tsx (1 test) 64ms
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
+[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T02:45:30.414Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.415Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.415Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.417Z","status":"ok","projectId":"proj-0d740cfc-1950-467b-b6c0-90d4e0bc20a9","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.417Z","status":"SUCCEEDED","projectId":"proj-0d740cfc-1950-467b-b6c0-90d4e0bc20a9","sessionLocalId":"s1","durationMs":2,"proposalId":"rrp-1"}
+
+ ✓ __tests__/increment-c.test.tsx (8 tests) 1208ms
+   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  307ms
+ ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 49ms
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.421Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.421Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.422Z","status":"ok","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.422Z","status":"SUCCEEDED","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","sessionLocalId":"s2","durationMs":1,"proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.422Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.422Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T02:45:30.422Z","status":"ALREADY_APPLIED","projectId":"proj-42d3db9d-65f1-427b-bb50-e32cd3534178","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.425Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.425Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.426Z","status":"ok","projectId":"proj-522910ad-5c81-42aa-95d4-92e52dfa67aa","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T02:45:30.426Z","status":"SUCCEEDED","projectId":"proj-522910ad-5c81-42aa-95d4-92e52dfa67aa","sessionLocalId":"s3","durationMs":1,"proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.426Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T02:45:30.426Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T02:45:30.426Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.430Z","status":"ok","projectId":"proj-00c6d8ff-3f8f-49f1-a7df-990c2d6e9845","durationMs":1}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.430Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
+[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T02:45:30.430Z","status":"NO_MUTATION","projectId":"proj-00c6d8ff-3f8f-49f1-a7df-990c2d6e9845","sessionLocalId":"s4","durationMs":0,"proposalId":"rrp-4"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.434Z","status":"ok","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","durationMs":0}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.435Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.435Z","status":"ok","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","durationMs":1}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.435Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
+[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:45:30.435Z","status":"STALE","projectId":"proj-ea24be6d-06a3-47b1-bced-e93ee84f5d17","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.438Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T02:45:30.438Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.439Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T02:45:30.439Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T02:45:30.442Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
+[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T02:45:30.442Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}
+
+ ✓ __tests__/d1/intake-c4.test.ts (10 tests) 36ms
+ ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1704ms
+   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  725ms
+   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  321ms
+ ✓ __tests__/gates.test.tsx (1 test) 76ms
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.849Z","status":"ok","projectId":"proj-c5f1fbea-d4b2-41aa-bea3-34d3059ae260","durationMs":1}
+
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.854Z","status":"ok","projectId":"proj-bccbb46b-0371-44dc-a22f-ed4e76614af3","durationMs":0}
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.854Z","status":"idempotent","projectId":"proj-bccbb46b-0371-44dc-a22f-ed4e76614af3","durationMs":0}
+
+ ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
+{"event":"d1.project_create","ts":"2026-08-02T02:45:30.858Z","status":"ok","projectId":"proj-9aa09b0a-c669-4c9f-9b9b-40f4b4e26069","durationMs":0}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.859Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.859Z","status":"ok","projectId":"proj-9aa09b0a-c669-4c9f-9b9b-40f4b4e26069","durationMs":0}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T02:45:30.859Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T02:45:30.860Z","status":"failed","durationMs":1,"errorCode":"CONFLICT"}
+
+ ✓ __tests__/d1/project-foundation.test.ts (7 tests) 18ms
+ ✓ __tests__/fixtures.test.ts (2 tests) 3ms
+ ✓ __tests__/increment-b.test.tsx (6 tests) 46ms
+ ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 2ms
+ ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 17ms
+ ✓ __tests__/status-pill.test.tsx (1 test) 23ms
+ ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 3031ms
+   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1773ms
+   ✓ V2-A2 Create Project UI > calls only the runtime action with the exact DTO and parsed constraints  304ms
+ ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2964ms
+   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  625ms
+   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  619ms
+   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  452ms
+   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  311ms
+   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  308ms
+
+ Test Files  94 passed (94)
+      Tests  913 passed (913)
+   Start at  04:45:25
+   Duration  6.97s (transform 2.99s, setup 3.27s, collect 11.76s, tests 18.96s, environment 6.08s, prepare 3.54s)
+
+EXIT_ALL=0
+===== TYPECHECK =====
+
+> sfia-studio@0.1.0 typecheck
+> tsc --noEmit
+
+EXIT_TC=0
+===== LINT =====
+
+> sfia-studio@0.1.0 lint
+> next lint
+
+`next lint` is deprecated and will be removed in Next.js 16.
+For new projects, use create-next-app to choose your preferred linter.
+For existing projects, migrate to the ESLint CLI:
+npx @next/codemod@canary next-lint-to-eslint-cli .
+
+✔ No ESLint warnings or errors
+EXIT_LINT=0
+===== BUILD =====
+
+> sfia-studio@0.1.0 build
+> next build
+
+   ▲ Next.js 15.5.20
+
+   Creating an optimized production build ...
+ ✓ Compiled successfully in 949ms
+   Linting and checking validity of types ...
+   Collecting page data ...
+   Generating static pages (0/10) ...
+   Generating static pages (2/10)
+   Generating static pages (4/10)
+   Generating static pages (7/10)
+ ✓ Generating static pages (10/10)
+   Finalizing page optimization ...
+   Collecting build traces ...
+
+Route (app)                                 Size  First Load JS
+┌ ○ /                                      127 B         103 kB
+├ ○ /_not-found                            127 B         103 kB
+├ ○ /cycle-actif                         3.82 kB         119 kB
+├ ○ /decision                            5.53 kB         120 kB
+├ ƒ /nouvelle-demande                    10.1 kB         116 kB
+├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
+├ ƒ /projects/[id]                       2.66 kB         108 kB
+├ ○ /projects/new                        2.62 kB         108 kB
+├ ƒ /studio/projects/[id]                2.15 kB         112 kB
+├ ○ /studio/projects/new                 4.07 kB         114 kB
+├ ○ /synthese                            4.83 kB         120 kB
+└ ƒ /workspace                             571 B         106 kB
++ First Load JS shared by all             102 kB
+  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
+  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
+  └ other shared chunks (total)          1.96 kB
+
+
+○  (Static)   prerendered as static content
+ƒ  (Dynamic)  server-rendered on demand
+
+EXIT_BUILD=0
+```
+
+| Commande | Exit | Résultat |
+|----------|------|----------|
+| fingerprint Delivery | 0 | 8/8 |
+| projection Delivery | 0 | 16/16 |
+| fingerprint QA | 0 | 25/25 |
+| projection QA | 0 | **37/37** |
+| D1 | 0 | 46/46 |
+| oa/cycle | 0 | 180/180 |
+| npm test | 0 | 913/913 |
+| typecheck | 0 | PASS |
+| lint | 0 | PASS sans warning |
+| build | 0 | PASS |
+
+## P. Non-régression
+
+Delivery, D1, OA cycle et suite complète verts. Priorité des codes d’erreur
+préservée (tests Delivery mapping/lifecycle/unknown verts).
+
+## Q. Contrôles statiques
+
+`rg` imports I/O / Next / infrastructure / D2-B/C dans `catalogProjection.ts` :
+aucune occurrence.
+
+## R. Fichiers protégés
+
+Tous les fichiers protégés listés (hors `catalogProjection.ts`) :
+**PROTECTED_HASHES_UNCHANGED**.
+
+## S. Diff et volumétrie
+
+Production corrective : **un seul fichier** — `catalogProjection.ts`
+(+ ~35 lignes utiles : import, helper binding, contrôle avant succès).
+Documents autorisés mis à jour : README Delivery, 19, 08, framing README.
+Nouveau : `02-corrective-delivery-report.md`.
+
+## T. Anti-claims
+
+Corrective Delivery ≠ QA revalidée · R-QA-D2A-01 ≠ CLOSED · ≠ QA PASS ·
+≠ QA-G3 · ≠ PR ready · ≠ D2-B/C autorisé · ≠ production ready.
+
+## U. Risques et réserves
+
+Risque résiduel : la revalidation QA indépendante doit confirmer la fermeture
+de R-QA-D2A-01 et l’absence de régression de priorité d’erreurs. Aucune réserve
+mineure additionnelle introduite par ce correctif.
+
+## V. Statut R-QA-D2A-01
+
+`CORRECTIVE IMPLEMENTATION COMPLETE — PENDING INDEPENDENT QA REVALIDATION`
+
+## W. QA revalidation requise
+
+Oui — gate distinct Morris. Ne pas déclarer QA PASS dans ce cycle.
+
+## X. Gate suivant candidat
+
+```text
+GO QA REVALIDATION SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+VERIFY R-QA-D2A-01 CLOSURE, PUBLIC CATALOG FINGERPRINT BINDING, ERROR PRECEDENCE AND FULL NON-REGRESSION —
+NO CORRECTIVE IMPLEMENTATION UNLESS DISTINCT MORRIS GO —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+Ne pas exécuter automatiquement.
+
+## Y. Verdict
+
+```text
+V3.1-D2-A CORRECTIVE DELIVERY COMPLETE —
+R-QA-D2A-01 ADDRESSED IN PRODUCTION —
+PUBLIC CATALOG FINGERPRINT BINDING IMPLEMENTED —
+SIX QA REGRESSION TESTS PRESERVED AND PASSING —
+HASH-A UNCHANGED —
+ERROR PRECEDENCE PRESERVED —
+D1 AND D2-A NON-REGRESSION PASS —
+NO RUNTIME CRYPTO —
+NO NEW DEPENDENCY —
+NO D2-B —
+NO D2-C —
+NO D2-D —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION —
+NO PROJECT COMMIT —
+NO PROJECT PUSH —
+NO PR
+```
+
+Statut :
+
+```text
+V3.1-D2-A CORRECTIVE DELIVERY READY FOR INDEPENDENT QA REVALIDATION —
+R-QA-D2A-01 PENDING REVALIDATION —
+QA-G3 NOT DECIDED —
+NOT PR READY —
+D2-B AND D2-C REMAIN CLOSED —
+D3 NOT OPENED
+```
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
new file mode 100644
index 0000000..e386d8b
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
@@ -0,0 +1,1099 @@
+# V3.1-D2-A — QA Revalidation Report (Critical)
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| Date/heure/fuseau | 2026-08-02 13:57:07 CEST (+0200) |
+| Cycle | 9 — QA / validation |
+| Sous-type | QA revalidation corrective |
+| Profil | **Critical** |
+| Typologie | EVOL |
+| Branche | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
+| HEAD / main / origin/main | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
+| Handoff pré-cycle | tip `d6bdcd6…` · blob `abe83802…` |
+| Verdict | **PASS** |
+| R-QA-D2A-01 | `CLOSED — INDEPENDENT QA REVALIDATION PASS` |
+| QA-G3 Morris | **NOT DECIDED — MORRIS DECISION REQUIRED** |
+
+## B. Gate Morris
+
+```text
+GO QA REVALIDATION SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+VERIFY R-QA-D2A-01 CLOSURE, PUBLIC CATALOG FINGERPRINT BINDING, ERROR PRECEDENCE AND FULL NON-REGRESSION —
+NO CORRECTIVE IMPLEMENTATION UNLESS DISTINCT MORRIS GO —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+GO consommé 2026-08-02 05:31 CEST (+0200).
+
+## C. Objet de revalidation
+
+Vérifier, sans correction, la clôture technique de R-QA-D2A-01 après Delivery
+corrective : binding public fingerprint/catalogue, six scénarios historiques,
+priorité des erreurs, HASH-A, non-régression.
+
+## D. Référentiel
+
+RV-01…RV-13 · INV-D2A-11/12 · BL-D2-A-01…04 · HASH-A · rapport QA 01 ·
+rapport correctif 02 · handoff Corrective Delivery.
+
+## E. CKC QA
+
+`pilots/04-qa-validation.md` candidate v0.1.0 · `executionAuthority=false`.
+Verdicts autorisés : PASS / PASS WITH RESERVES / FAIL. Aucun GO implicite.
+
+## F. Git Truth
+
+```text
+2026-08-02 13:54:16 CEST (+0200)
+BRANCH=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
+HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+ORIGIN_MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+DIVERGENCE=0	0
+HANDOFF_TIP=d6bdcd688a137ad20b03685bebff0e4b79111bcd
+HANDOFF_BLOB=abe83802e88c0b352e5eb6b1b580784406953ab8
+WORKTREES=77
+DELIVERY_REMOTE_COUNT=0
+FINDING_STATUS=PENDING INDEPENDENT QA REVALIDATION
+```
+
+## G. Handoff correctif source
+
+Tip `d6bdcd688a137ad20b03685bebff0e4b79111bcd` · blob
+`abe83802e88c0b352e5eb6b1b580784406953ab8`.
+Archive locale : `.tmp-sfia-review/v3-1-d2-a-corrective-chatgpt-review-preserved.md`.
+Statut pré-cycle : PENDING INDEPENDENT QA REVALIDATION (pas CLOSED).
+
+## H. Empreintes de préservation
+
+### Avant
+
+```text
+2026-08-02 13:54:16 CEST (+0200)
+projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
+projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  blob=b436ee328fa9dfdb1d6eb3bc165dad285723113d
+projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
+projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  blob=caaddbaa8a0de6596e5382f3f02d83643a896e2b
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=5ffa22142b4ee7c9422f72d411d0fe6196cedd950d6a102771054b8195180788  blob=8c8d0970238e00a095c523f4e16ec3bd8008fd63
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=b39b10def35df8cca3398fca5935e55e5f7c184ed4605d97a991ed211f08e47d  blob=adef939f784b253cf69c111f836d954f50228c3e
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=54027d0c3bf21657e53253da7354478fb80a33645824338bdec04d6e35cfa8bd  blob=9327aca5218ce9c6c96412d7467607efbcd587e3
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=a64cdda88170750007591fb92bdb212f786556650fa116bbf3c7a82ba282a515  blob=020f6fc4f60ad8aa515ec2b03a2fa0dbb595275b
+.tmp-sfia-review/chatgpt-review.md  sha256=50c23f77d18f76e6b603f9c6a930070bdc5458e97791f219238c3145e41edd17  blob=abe83802e88c0b352e5eb6b1b580784406953ab8
+```
+
+### Après (code/tests protégés)
+
+```text
+2026-08-02 13:54:56 CEST (+0200)
+projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  match_pre=True
+projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  match_pre=True
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  match_pre=True
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  match_pre=True
+projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  match_pre=True
+projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  match_pre=True
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  match_pre=True
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  match_pre=True
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  match_pre=True
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  match_pre=True
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  match_pre=True
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  match_pre=True
+PROTECTED_HASHES_UNCHANGED
+```
+
+`catalogProjection.ts` = empreinte corrective
+`sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d`.
+
+## I. Finding initial
+
+R-QA-D2A-01 BLOQUANTE — seam public + fingerprint canonique + catalogue
+divergent → `ok=true`. Invariants INV-D2A-11 / INV-D2A-12.
+
+## J. Correctif déclaré
+
+Binding via `serializeCatalogFingerprint` après contrôles locaux ; divergence →
+`CATALOG_FINGERPRINT_STALE` ; pas de crypto runtime ; HASH-A inchangé.
+
+## K. Inspection du diff correctif
+
+```diff
+--- .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection-before.ts	2026-08-02 04:44:22
++++ projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts	2026-08-02 04:45:14
+@@ -6,7 +6,10 @@
+   type CycleTypeCkcMapping,
+   type CycleTypeDefinition,
+ } from "./cycleTypeCatalog";
+-import { CYCLE_TYPE_CATALOG_FINGERPRINT } from "./catalogFingerprint";
++import {
++  CYCLE_TYPE_CATALOG_FINGERPRINT,
++  serializeCatalogFingerprint,
++} from "./catalogFingerprint";
+ import type {
+   CatalogProjectionError,
+   CatalogProjectionErrorCode,
+@@ -24,6 +27,30 @@
+     CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
+   });
+
++/** Canonical HASH-A serialization of the authoritative D1 catalog. */
++const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
++  serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);
++
++/**
++ * Fail-closed binding: the catalog actually used must match HASH-A.
++ * Identity with the singleton is sufficient; clones are compared by serialization.
++ */
++function catalogMatchesCanonicalFingerprint(
++  catalog: Pick<CycleTypeCatalog, "entries">,
++): boolean {
++  if (catalog === CYCLE_TYPE_CATALOG) {
++    return true;
++  }
++  try {
++    return (
++      serializeCatalogFingerprint(catalog) ===
++      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
++    );
++  } catch {
++    return false;
++  }
++}
++
+ const ALLOWED_MAPPING_KEYS = new Set([
+   "mandatory",
+   "primaryLevel",
+@@ -148,6 +175,13 @@
+     });
+   }
+
++  // Binding after local entry checks so precise codes keep precedence.
++  if (!catalogMatchesCanonicalFingerprint(catalog)) {
++    return failure("CATALOG_FINGERPRINT_STALE", context, {
++      retryable: true,
++    });
++  }
++
+   return Object.freeze({
+     ok: true,
+     projection: Object.freeze({
+```
+
+Diff limité à : import `serializeCatalogFingerprint` · sérialisation canonique ·
+helper `catalogMatchesCanonicalFingerprint` · contrôle avant succès. Aucun
+refactoring opportuniste observé.
+
+## L. Plan de revalidation
+
+Étapes 1–8 exécutées : inspection diff · tests QA projection · filtre binding ·
+fingerprint · Delivery · D1 · OA cycle · suite complète · typecheck/lint/build ·
+statiques · Git.
+
+## M. Matrice RV-01…RV-13
+
+| ID | Exigence | Preuve | Résultat |
+|----|----------|--------|----------|
+| RV-01 | Six binding historiques PASS | `catalogProjection.qa.test.ts` binding · 37/37 · filtre 7/7 | **PASS** |
+| RV-02 | Succès catalogue canonique | QA nominals + Delivery | **PASS** |
+| RV-03 | Clone contractuellement identique | binding = égalité sérialisation HASH-A ; clone deep sans divergence contractuelle ⇒ serialize identique (fingerprint.qa déterminisme) + helper identité/`serialize` | **PASS** |
+| RV-04 | Champs exclus ne déclenchent pas STALE | fingerprint.qa `ignores excluded field change` (label, shortDescription, displayOrder, methodReference, aliases) + binding sur serialize | **PASS** |
+| RV-05 | Champ inclus ⇒ STALE | six scénarios binding (canonicalKey, methodCycleNumber, mapping, ordre, +/− entrée) | **PASS** |
+| RV-06 | Ordre erreurs 1→8 | source + tests priorité QA/Delivery | **PASS** |
+| RV-07 | Codes précis préservés | Delivery + QA mapping/lifecycle/unknown/version/hash | **PASS** |
+| RV-08 | Exception sérialisation fail-closed | `try/catch` dans helper → `false` → STALE sans projection ; aucune exception exposée | **PASS** |
+| RV-09 | HASH-A exact | constante `sha256:27316864…efd2cc` | **PASS** |
+| RV-10 | catalogFingerprint.ts inchangé | empreinte pré=post | **PASS** |
+| RV-11 | Quatre tests D2-A inchangés | empreintes pré=post | **PASS** |
+| RV-12 | Pas crypto/I/O/D2-B/C | `rg` vide | **PASS** |
+| RV-13 | Non-régression complète | 913/913 · typecheck/lint/build | **PASS** |
+
+## N. Binding public catalogue/fingerprint
+
+### Source actuelle
+
+```typescript
+import {
+  CKC_SYNTHETIC_MAP_PATH,
+  CYCLE_TYPE_CATALOG,
+  CYCLE_TYPE_CATALOG_VERSION,
+  type CycleTypeCatalog,
+  type CycleTypeCkcMapping,
+  type CycleTypeDefinition,
+} from "./cycleTypeCatalog";
+import {
+  CYCLE_TYPE_CATALOG_FINGERPRINT,
+  serializeCatalogFingerprint,
+} from "./catalogFingerprint";
+import type {
+  CatalogProjectionError,
+  CatalogProjectionErrorCode,
+  CatalogProjectionResult,
+  CatalogSelectionContext,
+} from "./ckcQualificationContracts";
+
+const SAFE_MESSAGES: Readonly<Record<CatalogProjectionErrorCode, string>> =
+  Object.freeze({
+    CATALOG_CORRELATION_ID_REQUIRED: "A correlation identifier is required.",
+    CATALOG_VERSION_INCOMPATIBLE: "The catalog version is incompatible.",
+    CATALOG_FINGERPRINT_STALE: "The catalog fingerprint is stale.",
+    CYCLE_TYPE_UNKNOWN: "The cycle type is unknown.",
+    CYCLE_TYPE_NOT_SELECTABLE: "The cycle type is not selectable.",
+    CYCLE_TYPE_MAPPING_INVALID: "The cycle type mapping is invalid.",
+  });
+
+/** Canonical HASH-A serialization of the authoritative D1 catalog. */
+const CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION =
+  serializeCatalogFingerprint(CYCLE_TYPE_CATALOG);
+
+/**
+ * Fail-closed binding: the catalog actually used must match HASH-A.
+ * Identity with the singleton is sufficient; clones are compared by serialization.
+ */
+function catalogMatchesCanonicalFingerprint(
+  catalog: Pick<CycleTypeCatalog, "entries">,
+): boolean {
+  if (catalog === CYCLE_TYPE_CATALOG) {
+    return true;
+  }
+  try {
+    return (
+      serializeCatalogFingerprint(catalog) ===
+      CANONICAL_CATALOG_FINGERPRINT_SERIALIZATION
+    );
+  } catch {
+    return false;
+  }
+}
+
+const ALLOWED_MAPPING_KEYS = new Set([
+  "mandatory",
+  "primaryLevel",
+  "primaryReference",
+  "fallbackPolicy",
+  "fallbackReference",
+  "executionAuthority",
+  "doctrineStatus",
+  "unavailableBehavior",
+]);
+
+function failure(
+  code: CatalogProjectionErrorCode,
+  context: CatalogSelectionContext,
+  options: {
+    readonly lifecycleStatus?: CycleTypeDefinition["lifecycleStatus"];
+    readonly retryable?: boolean;
+    readonly recoverable?: boolean;
+  } = {},
+): CatalogProjectionResult {
+  const error: CatalogProjectionError = Object.freeze({
+    code,
+    message: SAFE_MESSAGES[code],
+    blocking: true,
+    retryable: options.retryable ?? false,
+    recoverable: options.recoverable ?? true,
+    ...(context.correlationId.trim()
+      ? { correlationId: context.correlationId }
+      : {}),
+    ...(context.cycleTypeId ? { cycleTypeId: context.cycleTypeId } : {}),
+    ...(options.lifecycleStatus
+      ? { lifecycleStatus: options.lifecycleStatus }
+      : {}),
+  });
+  return Object.freeze({ ok: false, error });
+}
+
+function hasValidMapping(mapping: CycleTypeCkcMapping): boolean {
+  if (
+    Object.keys(mapping).some((key) => !ALLOWED_MAPPING_KEYS.has(key)) ||
+    mapping.mandatory !== true ||
+    !mapping.primaryReference.trim() ||
+    mapping.executionAuthority !== false ||
+    mapping.doctrineStatus !== "method-candidate" ||
+    mapping.unavailableBehavior !== "fail-closed"
+  ) {
+    return false;
+  }
+
+  if (mapping.primaryLevel === "detailed") {
+    return (
+      mapping.fallbackPolicy === "synthetic_map" &&
+      mapping.fallbackReference === CKC_SYNTHETIC_MAP_PATH
+    );
+  }
+
+  if (mapping.primaryLevel === "synthetic") {
+    return (
+      mapping.primaryReference === CKC_SYNTHETIC_MAP_PATH &&
+      mapping.fallbackPolicy === "none" &&
+      mapping.fallbackReference === undefined
+    );
+  }
+
+  return false;
+}
+
+function freezeMapping(
+  mapping: CycleTypeCkcMapping,
+): Readonly<CycleTypeCkcMapping> {
+  return Object.freeze({
+    mandatory: mapping.mandatory,
+    primaryLevel: mapping.primaryLevel,
+    primaryReference: mapping.primaryReference,
+    fallbackPolicy: mapping.fallbackPolicy,
+    ...(mapping.fallbackReference
+      ? { fallbackReference: mapping.fallbackReference }
+      : {}),
+    executionAuthority: mapping.executionAuthority,
+    doctrineStatus: mapping.doctrineStatus,
+    unavailableBehavior: mapping.unavailableBehavior,
+  });
+}
+
+/**
+ * Pure, fail-closed D2-A selection from the authoritative D1 catalog.
+ * The optional catalog is a pure test seam; production callers use the singleton.
+ */
+export function projectSelectableCycleType(
+  context: CatalogSelectionContext,
+  catalog: Pick<CycleTypeCatalog, "entries"> = CYCLE_TYPE_CATALOG,
+): CatalogProjectionResult {
+  if (!context.correlationId.trim()) {
+    return failure("CATALOG_CORRELATION_ID_REQUIRED", context);
+  }
+  if (context.catalogVersion !== CYCLE_TYPE_CATALOG_VERSION) {
+    return failure("CATALOG_VERSION_INCOMPATIBLE", context, {
+      retryable: true,
+    });
+  }
+  if (context.catalogHash !== CYCLE_TYPE_CATALOG_FINGERPRINT) {
+    return failure("CATALOG_FINGERPRINT_STALE", context, {
+      retryable: true,
+    });
+  }
+
+  const entry = catalog.entries.find(
+    (candidate) => candidate.cycleTypeId === context.cycleTypeId,
+  );
+  if (!entry) {
+    return failure("CYCLE_TYPE_UNKNOWN", context);
+  }
+  if (entry.lifecycleStatus !== "active") {
+    return failure("CYCLE_TYPE_NOT_SELECTABLE", context, {
+      lifecycleStatus: entry.lifecycleStatus,
+    });
+  }
+  if (!entry.ckc || !hasValidMapping(entry.ckc)) {
+    return failure("CYCLE_TYPE_MAPPING_INVALID", context, {
+      lifecycleStatus: entry.lifecycleStatus,
+      recoverable: false,
+    });
+  }
+
+  // Binding after local entry checks so precise codes keep precedence.
+  if (!catalogMatchesCanonicalFingerprint(catalog)) {
+    return failure("CATALOG_FINGERPRINT_STALE", context, {
+      retryable: true,
+    });
+  }
+
+  return Object.freeze({
+    ok: true,
+    projection: Object.freeze({
+      cycleTypeId: entry.cycleTypeId,
+      label: entry.label,
+      shortDescription: entry.shortDescription,
+      lifecycleStatus: entry.lifecycleStatus,
+      ckc: freezeMapping(entry.ckc),
+      catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
+      catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
+      correlationId: context.correlationId,
+    }),
+  });
+}
+```
+
+Le seam public est conservé ; le succès exige l’équivalence HASH-A du catalogue
+effectivement utilisé.
+
+## O. Six scénarios historiques
+
+Tous dans describe `public fingerprint/catalog binding (critical)` — désormais
+verts (filtre `-t "public fingerprint/catalog binding"` : **7 passed | 30 skipped**,
+dont les 6 rejects + expose seam) :
+
+1. canonicalKey modifiée
+2. methodCycleNumber modifié
+3. mapping CKC contractuel divergent encore valide
+4. ordre modifié
+5. entrée supplémentaire
+6. entrée manquante
+
+## P. Champs inclus et exclus HASH-A
+
+Inclus : cycleTypeId, canonicalKey, lifecycleStatus, methodCycleNumber, mapping
+CKC contractuel (mandatory, primaryLevel, primaryReference, fallbackPolicy,
+fallbackReference, executionAuthority, doctrineStatus, unavailableBehavior).
+
+Exclus (fingerprint.qa) : label, shortDescription, displayOrder, methodReference,
+aliases — ne modifient pas la sérialisation ni le binding.
+
+## Q. Priorité des erreurs
+
+Ordre source confirmé : correlationId → version → hash fourni → type →
+lifecycle → mapping → **binding** → succès. Tests Delivery/QA conservent les
+codes précis (pas de transformation mapping→STALE).
+
+## R. Gestion des exceptions
+
+`catalogMatchesCanonicalFingerprint` capture les erreurs de
+`serializeCatalogFingerprint` et retourne `false` → Failure
+`CATALOG_FINGERPRINT_STALE` sans projection.
+
+## S. Tests ciblés
+
+`npm test -- __tests__/oa/cycle/catalogProjection.qa.test.ts` → **37/37 PASS**, exit 0.
+
+Filtre binding → **7/7 PASS**, exit 0.
+
+## T. Tests fingerprint
+
+Delivery **8/8** · QA **25/25** · HASH-A inchangé.
+
+## U. Tests Delivery
+
+Projection **16/16 PASS**.
+
+## V. D1 et OA cycle
+
+D1 **46/46** · oa/cycle **180/180**.
+
+## W. Suite complète
+
+`npm test` → **913/913 PASS**, exit 0.
+
+## X. Typecheck/lint/build
+
+typecheck 0 · lint PASS sans warning · build PASS.
+
+## Y. Contrôles statiques
+
+Aucune occurrence I/O/Next/infrastructure/D2-B/C/`consumed` dans
+`catalogProjection.ts`.
+
+## Z. Non-régression
+
+Delivery, QA, D1, OA cycle, suite globale : verts. Aucune régression de priorité.
+
+## AA. Fichiers protégés
+
+**PROTECTED_HASHES_UNCHANGED** pour code/tests et rapports 01/02. Aucune
+correction pendant la revalidation.
+
+## AB. Réserves
+
+Aucune réserve bloquante, majeure, mineure ou environnementale.
+
+## AC. Limites
+
+Pas de fuzzing multi-processus. Pas de preuve UI. Clôture technique du finding ≠
+décision Morris QA-G3 ≠ PR readiness.
+
+## AD. Anti-claims
+
+QA revalidation PASS ≠ QA-G3 accepté · ≠ PR ready · ≠ D2-B/C autorisé ·
+≠ production ready · ≠ « sans bug ».
+
+## AE. Statut R-QA-D2A-01
+
+`CLOSED — INDEPENDENT QA REVALIDATION PASS`
+
+Clôture **technique** uniquement.
+
+## AF. QA-G3 Morris
+
+**NOT DECIDED — MORRIS DECISION REQUIRED.**
+
+## AG. Gate suivant candidat
+
+```text
+GO ACCEPT QA-G3 SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+ACCEPT QA REVALIDATION VERDICT AND R-QA-D2A-01 CLOSURE —
+PR READINESS NEXT —
+NO COMMIT —
+NO PUSH —
+NO PR —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+Ne pas exécuter automatiquement.
+
+## AH. Verdict
+
+```text
+V3.1-D2-A INDEPENDENT QA REVALIDATION PASS —
+R-QA-D2A-01 CLOSED BY REPRODUCIBLE QA EVIDENCE —
+PUBLIC CATALOG FINGERPRINT BINDING VERIFIED —
+SIX HISTORICAL BINDING FAILURES NOW PASS —
+ERROR PRECEDENCE VERIFIED —
+HASH-A UNCHANGED —
+QA TESTS UNCHANGED —
+D1 AND D2-A FULL NON-REGRESSION PASS —
+NO CORRECTIVE IMPLEMENTATION DURING QA —
+QA-G3 MORRIS DECISION REQUIRED —
+NOT PR READY —
+NO D2-B —
+NO D2-C —
+NO D2-D —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO PROJECT COMMIT —
+NO PROJECT PUSH —
+NO PR
+```
+
+## Annexes — résultats complets
+
+```text
+===== PROJ QA FULL =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 6ms
+
+ Test Files  1 passed (1)
+      Tests  37 passed (37)
+   Start at  13:54:26
+   Duration  361ms (transform 86ms, setup 50ms, collect 122ms, tests 6ms, environment 0ms, prepare 38ms)
+
+EXIT_PROJQA=0
+===== PROJ QA BINDING FILTER =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts -t public fingerprint/catalog binding
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests | 30 skipped) 2ms
+
+ Test Files  1 passed (1)
+      Tests  7 passed | 30 skipped (37)
+   Start at  13:54:26
+   Duration  254ms (transform 74ms, setup 20ms, collect 103ms, tests 2ms, environment 0ms, prepare 35ms)
+
+EXIT_BINDING=0
+===== FP DELIVERY =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  8 passed (8)
+   Start at  13:54:27
+   Duration  247ms (transform 70ms, setup 20ms, collect 98ms, tests 3ms, environment 0ms, prepare 25ms)
+
+EXIT_FP=0
+===== FP QA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms
+
+ Test Files  1 passed (1)
+      Tests  25 passed (25)
+   Start at  13:54:27
+   Duration  250ms (transform 71ms, setup 20ms, collect 100ms, tests 4ms, environment 0ms, prepare 25ms)
+
+EXIT_FPQA=0
+===== PROJ DELIVERY =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  16 passed (16)
+   Start at  13:54:28
+   Duration  260ms (transform 76ms, setup 22ms, collect 108ms, tests 3ms, environment 0ms, prepare 22ms)
+
+EXIT_PROJ=0
+===== D1 =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms
+
+ Test Files  1 passed (1)
+      Tests  46 passed (46)
+   Start at  13:54:28
+   Duration  258ms (transform 76ms, setup 21ms, collect 105ms, tests 7ms, environment 0ms, prepare 22ms)
+
+EXIT_D1=0
+===== OA CYCLE =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 7ms
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 4ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 7ms
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 11ms
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 14ms
+ ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 83ms
+ ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 90ms
+
+ Test Files  8 passed (8)
+      Tests  180 passed (180)
+   Start at  13:54:29
+   Duration  427ms (transform 293ms, setup 277ms, collect 1.12s, tests 220ms, environment 1ms, prepare 292ms)
+
+EXIT_OA=0
+===== FULL TEST =====
+
+> sfia-studio@0.1.0 test
+> vitest run
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:30.330Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:30.399Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":69,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:30.399Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}
+
+ ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 117ms
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:30.517Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":118,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:30.517Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:30.603Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":86,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:30.603Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:30.604Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":1,"providerMode":"fake"}
+
+ ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 275ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-9e782db4-4d9d-4d2d-8488-b495bac2c00c fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-9e782db4-4d9d-4d2d-8488-b495bac2c00c 15 tools=0
+
+ ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 84ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-150a1196-2dd2-4dc4-9e0a-f39be8a901df fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-150a1196-2dd2-4dc4-9e0a-f39be8a901df 30 tools=0
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-c3e9d0d5-35f5-411a-8db4-ede26cb4676c fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-f92b1ae6-cbe6-4c93-abdb-10e6f4082c57 ops1-att-c3e9d0d5-35f5-411a-8db4-ede26cb4676c 45 tools=0
+
+ ✓ __tests__/ops1/actionGate.test.ts (10 tests) 132ms
+ ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 164ms
+ ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 192ms
+ ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 252ms
+stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-4c4e9830-6d7d-41ea-8ea1-4df291e1d3f9 ops1-att-2626bccd-af95-4ac7-bbb5-3b87ba0cea56 fake-test
+
+stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-4c4e9830-6d7d-41ea-8ea1-4df291e1d3f9 ops1-att-2626bccd-af95-4ac7-bbb5-3b87ba0cea56 45 tools=1
+
+ ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 585ms
+   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  375ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-79bec5b8-135e-4ebf-b3e1-52d8f7acfd64 ops1-att-9b1ea496-5fc7-40a5-803c-1f4c4e3c707d fake-test
+
+stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
+[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-79bec5b8-135e-4ebf-b3e1-52d8f7acfd64 ops1-att-9b1ea496-5fc7-40a5-803c-1f4c4e3c707d INTERNAL
+
+ ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 688ms
+   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  324ms
+ ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 102ms
+ ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 94ms
+ ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 89ms
+ ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 97ms
+ ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 110ms
+ ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 109ms
+ ✓ __tests__/ops1/repository.test.ts (6 tests) 57ms
+ ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 92ms
+ ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 74ms
+ ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 72ms
+ ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 41ms
+ ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 92ms
+ ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 170ms
+ ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 50ms
+ ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 52ms
+ ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 151ms
+ ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 15ms
+ ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 33ms
+ ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 18ms
+ ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 23ms
+ ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 14ms
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T11:54:32.060Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
+{"event":"d1.project_create","ts":"2026-08-02T11:54:32.065Z","status":"ok","projectId":"proj-21249fd6-e8ff-4bb3-8f6f-cc54d85c8a2b","durationMs":1}
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T11:54:32.065Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:32.065Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}
+
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
+{"event":"d1.project_create","ts":"2026-08-02T11:54:32.069Z","status":"ok","projectId":"proj-e5d29426-60d0-46aa-92f2-bb055148b423","durationMs":1}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T11:54:32.069Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:32.069Z","status":"ok","projectId":"proj-e5d29426-60d0-46aa-92f2-bb055148b423","durationMs":0}
+
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T11:54:32.070Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}
+
+ ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 13ms
+ ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 7ms
+ ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 11ms
+ ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 12ms
+ ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 16ms
+ ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 18ms
+ ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 18ms
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 13ms
+ ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 11ms
+ ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 3ms
+ ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 9ms
+ ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 10ms
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 16ms
+ ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 9ms
+ ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 7ms
+ ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 9ms
+ ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 12ms
+ ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 15ms
+ ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 7ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 9ms
+ ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 10ms
+ ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 8ms
+ ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 8ms
+ ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 7ms
+ ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 5ms
+ ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 7ms
+ ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 5ms
+ ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 8ms
+ ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 4ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 7ms
+ ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 4ms
+ ✓ __tests__/platform/platform-ai.test.ts (5 tests) 2ms
+ ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
+ ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 8ms
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 8ms
+ ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 3ms
+ ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 1ms
+ ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 3ms
+ ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3043ms
+   ✓ SFIA context resolver > detects context stale on head mismatch  364ms
+   ✓ SFIA action compiler > denies protected path  303ms
+   ✓ SFIA action compiler > preserves exact content  328ms
+   ✓ SFIA action compiler > instantiates cursor prompt from real template  317ms
+   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  362ms
+   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  316ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:33.644Z","status":"started","intentLength":53,"sessionLocalId":"s1"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:33.718Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":74,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:33.719Z","status":"started","intentLength":22,"sessionLocalId":"s2"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T11:54:33.815Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":96,"providerMode":"fake"}
+
+ ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 186ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:33.815Z","status":"started","intentLength":22,"sessionLocalId":"s2"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:33.918Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":103,"providerMode":"fake"}
+
+ ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 215ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:33.919Z","status":"started","intentLength":39,"sessionLocalId":"s4"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T11:54:34.022Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":103,"providerMode":"fake","errorCode":"PROVIDER"}
+
+ ✓ __tests__/d1/intake-c2.test.ts (13 tests) 382ms
+ ✓ __tests__/increment-a.test.tsx (8 tests) 101ms
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T11:54:34.307Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T11:54:34.393Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":86,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T11:54:34.394Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T11:54:34.394Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
+
+stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
+{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T11:54:34.394Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
+{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T11:54:34.394Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.395Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.395Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.396Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":1,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.396Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.396Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.397Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":1,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.397Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.397Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T11:54:34.404Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":7,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.404Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.404Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T11:54:34.405Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":1,"proposalId":"rrp-none","sourceProjectCount":1}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.405Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.405Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.405Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.405Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.405Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.405Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.405Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.405Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T11:54:34.405Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.405Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.405Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T11:54:34.405Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.406Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.406Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T11:54:34.406Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
+{"event":"d1.project_create","ts":"2026-08-02T11:54:34.412Z","status":"ok","projectId":"proj-da400e64-8372-49e1-ba46-9a62862be30e","durationMs":1}
+{"event":"d1.project_create","ts":"2026-08-02T11:54:34.412Z","status":"ok","projectId":"proj-72d8f769-02e6-4777-8312-353712d8bc0c","durationMs":0}
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T11:54:34.412Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T11:54:34.412Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":0,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T11:54:34.413Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+ ✓ __tests__/d1/intake-c3.test.ts (16 tests) 107ms
+ ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 111ms
+ ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 637ms
+ ✓ __tests__/increment-e.test.tsx (4 tests) 73ms
+ ✓ __tests__/gates.test.tsx (1 test) 41ms
+ ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 42ms
+ ✓ __tests__/increment-d.test.tsx (5 tests) 64ms
+ ✓ __tests__/navigation.test.tsx (2 tests) 62ms
+ ✓ __tests__/shell.test.tsx (1 test) 71ms
+ ✓ __tests__/increment-b.test.tsx (6 tests) 42ms
+ ✓ __tests__/increment-c.test.tsx (8 tests) 1152ms
+   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  328ms
+ ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1561ms
+   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  642ms
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
+[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T11:54:35.296Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.297Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.297Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.298Z","status":"ok","projectId":"proj-73bab015-f2df-4251-ac5d-99825f3d3f6a","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T11:54:35.298Z","status":"SUCCEEDED","projectId":"proj-73bab015-f2df-4251-ac5d-99825f3d3f6a","sessionLocalId":"s1","durationMs":1,"proposalId":"rrp-1"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.302Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.302Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.303Z","status":"ok","projectId":"proj-51651c81-2efe-4986-aa80-87451185e244","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T11:54:35.303Z","status":"SUCCEEDED","projectId":"proj-51651c81-2efe-4986-aa80-87451185e244","sessionLocalId":"s2","durationMs":1,"proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.303Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.303Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T11:54:35.303Z","status":"ALREADY_APPLIED","projectId":"proj-51651c81-2efe-4986-aa80-87451185e244","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.306Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.306Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.307Z","status":"ok","projectId":"proj-4ecd3c0b-bdde-47d1-8166-ab7491368c2b","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T11:54:35.307Z","status":"SUCCEEDED","projectId":"proj-4ecd3c0b-bdde-47d1-8166-ab7491368c2b","sessionLocalId":"s3","durationMs":1,"proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.307Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T11:54:35.307Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T11:54:35.307Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.310Z","status":"ok","projectId":"proj-35e0d22d-f219-4244-87dd-5692e906c127","durationMs":0}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.310Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
+[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T11:54:35.311Z","status":"NO_MUTATION","projectId":"proj-35e0d22d-f219-4244-87dd-5692e906c127","sessionLocalId":"s4","durationMs":1,"proposalId":"rrp-4"}
+
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.321Z","status":"ok","projectId":"proj-35141983-aa34-412f-8b36-ad993fa98ad5","durationMs":1}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.322Z","status":"ok","projectId":"proj-11cc0293-2fa9-411e-8fd3-548a684c44b6","durationMs":3}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T11:54:35.322Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:35.323Z","status":"ok","projectId":"proj-11cc0293-2fa9-411e-8fd3-548a684c44b6","durationMs":1}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.323Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
+[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T11:54:35.323Z","status":"STALE","projectId":"proj-11cc0293-2fa9-411e-8fd3-548a684c44b6","sessionLocalId":"s5","durationMs":0,"errorCode":"CONFLICT","proposalId":"rrp-5"}
+
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.327Z","status":"ok","projectId":"proj-b81eaf3f-df1b-48b6-92e6-c1775632ecb4","durationMs":1}
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.327Z","status":"idempotent","projectId":"proj-b81eaf3f-df1b-48b6-92e6-c1775632ecb4","durationMs":0}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.327Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T11:54:35.327Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.328Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T11:54:35.328Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
+
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
+{"event":"d1.project_create","ts":"2026-08-02T11:54:35.331Z","status":"ok","projectId":"proj-a7a33b6e-d8cc-48ce-a6d4-530264217e0c","durationMs":1}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T11:54:35.331Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:35.332Z","status":"ok","projectId":"proj-a7a33b6e-d8cc-48ce-a6d4-530264217e0c","durationMs":1}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T11:54:35.332Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T11:54:35.332Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T11:54:35.332Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
+[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T11:54:35.332Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}
+
+ ✓ __tests__/d1/intake-c4.test.ts (10 tests) 45ms
+ ✓ __tests__/d1/project-foundation.test.ts (7 tests) 22ms
+ ✓ __tests__/status-pill.test.tsx (1 test) 17ms
+ ✓ __tests__/fixtures.test.ts (2 tests) 2ms
+ ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 19ms
+ ✓ __tests__/ops1/domain.test.ts (6 tests) 2ms
+ ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
+ ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2663ms
+   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  547ms
+   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  573ms
+   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  377ms
+ ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 2792ms
+   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1551ms
+
+ Test Files  94 passed (94)
+      Tests  913 passed (913)
+   Start at  13:54:30
+   Duration  6.51s (transform 2.53s, setup 2.97s, collect 10.87s, tests 17.82s, environment 5.32s, prepare 3.26s)
+
+EXIT_ALL=0
+===== TYPECHECK =====
+
+> sfia-studio@0.1.0 typecheck
+> tsc --noEmit
+
+EXIT_TC=0
+===== LINT =====
+
+> sfia-studio@0.1.0 lint
+> next lint
+
+`next lint` is deprecated and will be removed in Next.js 16.
+For new projects, use create-next-app to choose your preferred linter.
+For existing projects, migrate to the ESLint CLI:
+npx @next/codemod@canary next-lint-to-eslint-cli .
+
+✔ No ESLint warnings or errors
+EXIT_LINT=0
+===== BUILD =====
+
+> sfia-studio@0.1.0 build
+> next build
+
+   ▲ Next.js 15.5.20
+
+   Creating an optimized production build ...
+ ✓ Compiled successfully in 939ms
+   Linting and checking validity of types ...
+   Collecting page data ...
+   Generating static pages (0/10) ...
+   Generating static pages (2/10)
+   Generating static pages (4/10)
+   Generating static pages (7/10)
+ ✓ Generating static pages (10/10)
+   Finalizing page optimization ...
+   Collecting build traces ...
+
+Route (app)                                 Size  First Load JS
+┌ ○ /                                      127 B         103 kB
+├ ○ /_not-found                            127 B         103 kB
+├ ○ /cycle-actif                         3.82 kB         119 kB
+├ ○ /decision                            5.53 kB         120 kB
+├ ƒ /nouvelle-demande                    10.1 kB         116 kB
+├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
+├ ƒ /projects/[id]                       2.66 kB         108 kB
+├ ○ /projects/new                        2.62 kB         108 kB
+├ ƒ /studio/projects/[id]                2.15 kB         112 kB
+├ ○ /studio/projects/new                 4.07 kB         114 kB
+├ ○ /synthese                            4.83 kB         120 kB
+└ ƒ /workspace                             571 B         106 kB
++ First Load JS shared by all             102 kB
+  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
+  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
+  └ other shared chunks (total)          1.96 kB
+
+
+○  (Static)   prerendered as static content
+ƒ  (Dynamic)  server-rendered on demand
+
+EXIT_BUILD=0
+```
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
new file mode 100644
index 0000000..02abb0d
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
@@ -0,0 +1,1157 @@
+# V3.1-D2-A — PR Readiness Report (Critical)
+
+## A. Métadonnées
+
+| Champ | Valeur |
+|-------|--------|
+| Date/heure/fuseau | 2026-08-02 14:11:00 CEST (+0200) |
+| Cycle | 13 — PR readiness |
+| Profil | **Critical** |
+| Typologie | EVOL |
+| Branche | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
+| Base / HEAD | `main` / `origin/main` @ `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` · 0/0 |
+| CKC | fallback carte synthétique + méthode §4.13 · method-candidate · `executionAuthority=false` |
+| Handoff QA | tip `2282ed3…` · blob `86b5d5c3…` |
+| Verdict | **READY FOR PR WITH RESERVES** |
+| QA-G3 | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST (+0200) |
+
+## B. Gates Morris
+
+| Gate | Effet |
+|------|-------|
+| GO ACCEPT QA-G3 | QA revalidation PASS acceptée · R-QA-D2A-01 CLOSED · PR readiness autorisée |
+| GO PR readiness (ce cycle) | revue package · **aucun** staging/commit/push/PR |
+| D2-B / D2-C / D2-D / D3 | **fermés** |
+
+```text
+GO ACCEPT QA-G3 SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+ACCEPT QA REVALIDATION VERDICT AND R-QA-D2A-01 CLOSURE —
+PR READINESS NEXT —
+NO COMMIT —
+NO PUSH —
+NO PR —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+## C. Décision QA-G3
+
+`QA-G3 SFIA Studio V3.1-D2-A — ACCEPTED BY MORRIS — 2026-08-02 14:01 CEST (+0200)`.
+
+Acceptés : verdict PASS · R-QA-D2A-01 CLOSED · binding public · HASH-A · non-régression · ouverture PR readiness.
+Non autorisés : staging · commit · push · PR · merge · D2-B/C/D · D3 · UI · CreateCycle · promotion méthode.
+
+## D. Historique D2-A
+
+Cadrage 15 · conception 16 · FA-C 17 · TA 18 · backlog 19 → Delivery D2-A → QA FAIL (`01`, R-QA-D2A-01) → correctif (`02`) → revalidation PASS (`03`) → **QA-G3 ACCEPTED** → PR readiness (`04`).
+
+## E. Git Truth
+
+```text
+2026-08-02 14:08:47 CEST (+0200)
+BRANCH=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
+HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+ORIGIN_MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
+DIVERGENCE=0	0
+HANDOFF_TIP=2282ed33406a95e14a1cc384cf2c4574dfaeab8c
+HANDOFF_BLOB=86b5d5c37944dfc1e508a00ecfb30d864e98a941
+WORKTREES=77
+DELIVERY_REMOTE_COUNT=0
+STAGED=empty
+```
+
+Staged vide · branche distante Delivery absente · 77 worktrees · aucun commit/push/PR projet.
+
+## F. Handoff QA source
+
+Tip `2282ed33406a95e14a1cc384cf2c4574dfaeab8c` · blob `86b5d5c37944dfc1e508a00ecfb30d864e98a941`.
+Archive : `.tmp-sfia-review/v3-1-d2-a-qa-revalidation-chatgpt-review-preserved.md`.
+
+## G. Package prospectif (20 fichiers)
+
+| # | Path | A/M | Catégorie | Justification |
+|---|------|-----|-----------|---------------|
+| 1 | `app/lib/oa/cycle/domain/ckcQualificationContracts.ts` | A | code | Contrats D2-A |
+| 2 | `app/lib/oa/cycle/domain/catalogFingerprint.ts` | A | code | HASH-A |
+| 3 | `app/lib/oa/cycle/domain/catalogProjection.ts` | A | code | Projection + binding |
+| 4 | `app/lib/oa/cycle/index.ts` | M | code | +3 exports additifs |
+| 5 | `app/__tests__/oa/cycle/catalogFingerprint.test.ts` | A | test | Delivery FP |
+| 6 | `app/__tests__/oa/cycle/catalogProjection.test.ts` | A | test | Delivery projection |
+| 7 | `app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts` | A | test | QA FP |
+| 8 | `app/__tests__/oa/cycle/catalogProjection.qa.test.ts` | A | test | QA projection + binding |
+| 9 | `framing/README.md` | M | docs | Statut vivant |
+| 10 | `framing/08-….md` | M | docs | Backlog / statut |
+| 11 | `framing/15-….md` | A | docs | Cadrage D2 |
+| 12 | `framing/16-….md` | A | docs | Conception D2 |
+| 13 | `framing/17-….md` | A | docs | FA-C |
+| 14 | `framing/18-….md` | A | docs | TA |
+| 15 | `framing/19-….md` | A | docs | Backlog A/B/C |
+| 16 | `…/d2-a…/README.md` | A | docs | Synthèse lot |
+| 17 | `…/01-qa-validation-report.md` | A | docs | QA FAIL historique |
+| 18 | `…/02-corrective-delivery-report.md` | A | docs | Correctif |
+| 19 | `…/03-qa-revalidation-report.md` | A | docs | Revalidation PASS |
+| 20 | `…/04-pr-readiness-report.md` | A | docs | Ce rapport |
+
+`.tmp-sfia-review/**` : **exclu**.
+
+## H. Statistiques du diff
+
+Reconstruction sans staging : `git diff` (tracked) + `git diff --no-index /dev/null <path>` (untracked).
+
+```text
+files=20
+tracked_files=3 add=69 del=26
+untracked_files=17 add=11126 del=0
+combined_add=11195 del=26
+top5_by_bytes:
+  118180	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
+  83262	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
+  76911	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
+  63695	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
+  49408	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
+binaries=none
+files_gt_1MiB=none
+```
+
+Après inclusion de ce rapport 04, le package compte **20 fichiers**. Volumétrie dominante = preuves QA Full (01–03), cohérente avec le précédent D1.
+
+Aucun binaire · aucun fichier > 1 MiB.
+
+## I. Cohérence du scope
+
+**Résultat utile unique :** contrats D2-A + HASH-A + Catalog Projection fail-closed + preuves QA.
+
+Challenge 20 fichiers : **une PR unique avec deux commits prospectifs** est justifiée —
+chaîne traçabilité architecture→backlog→code→QA→readiness ; docs 15–19 prospectives pour B/C sans implémentation ; aucun fichier hors scope ; volumétrie élevée mais révisable par segments.
+
+Inclus : D2-A code/tests/docs/preuves.
+Exclus : D2-B/C code · D3 · CreateCycle · deps · méthode · `.tmp`.
+
+## J. Revue code
+
+- Contrats dédiés readonly · pas d’extension `domain/types.ts` · pas de profil/gate/consumed/Morris dans la projection.
+- Fingerprint fermé HASH-A · constante `sha256:27316864…efd2cc` · crypto Node uniquement en tests · pas de package/script génération.
+- Projection pure · ordre fail-closed 1→8 · binding catalogue utilisé · exception sérialisation fail-closed · immuabilité · pas de D2-B/C.
+- `index.ts` : uniquement +3 `export *` D2-A. Les symboles `ResolveCycleKnowledgeContract` / `CkcResolverPort` préexistent sur `main` (hors diff D2-A).
+
+## K. Revue tests
+
+Delivery 8+16 · QA 25+37 · aucun skip/todo/only · six scénarios binding conservés · historique FAIL→correctif→PASS préservé · oracles explicites.
+
+## L. Revue documentation
+
+15–19 : décisions Morris, FA/TA, backlog, D2-B/C non exécutés, pas de claim D3.
+01–03 : historiques intacts pendant readiness.
+README/08/19 : QA-G3 enregistré · readiness · D2-B/C fermés · INHERITED-R-01 non levée.
+
+## M. Hygiène et secrets
+
+```text
+=== SECRET-LIKE ===
+NONE
+=== PATHS/ARTEFACTS ===
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:71:Archive locale : `.tmp-sfia-review/v3-1-d2-a-corrective-chatgpt-review-preserved.md`.
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:100:.tmp-sfia-review/chatgpt-review.md  sha256=50c23f77d18f76e6b603f9c6a930070bdc5458e97791f219238c3145e41edd17  blob=abe83802e88c0b352e5eb6b1b580784406953ab8
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:138:--- .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection-before.ts	2026-08-02 04:44:22
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:586: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:602: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:618: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:634: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:650: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:666: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:682: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md:705: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:91:.tmp-sfia-review/chatgpt-review.md  sha256=6930a683d377d854c17d0311010c8e4677cbc427b02e4ebdcaf97733c144d177  blob=a2d0742b9a2e62ec7dfe6832e98360fbae01dcb2
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:107: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:123: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:139: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:155: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:336: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:752:--- .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection-before.ts	2026-08-02 04:44:22
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:851: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:867: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:883: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:899: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:915: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:931: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md:954: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md:99:.tmp-sfia-review/chatgpt-review.md  sha256=42f63a7ed596d51d3712513b92e455808700bb5d1bbecde65573c1a8f6da2ed6  blob=82ce40df42ce7c21368e089288d0351036182b88
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md:1220: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md:1236: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md:1252: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md:1268: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md:1449: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md:1465: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md:1653: RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+=== QUALITY ===
+NONE
+=== D2BC CODE ===
+projects/sfia-studio/app/lib/oa/cycle/index.ts:35:export { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
+projects/sfia-studio/app/lib/oa/cycle/index.ts:61:import { ResolveCycleKnowledgeContract } from "./application/resolveCycleKnowledgeContract";
+projects/sfia-studio/app/lib/oa/cycle/index.ts:73:import type { CkcResolverPort } from "./ports/ckcResolver";
+projects/sfia-studio/app/lib/oa/cycle/index.ts:80:  ckc: CkcResolverPort;
+projects/sfia-studio/app/lib/oa/cycle/index.ts:91:  resolveCycleKnowledgeContract: ResolveCycleKnowledgeContract;
+projects/sfia-studio/app/lib/oa/cycle/index.ts:98:  ckcResolver?: CkcResolverPort;
+projects/sfia-studio/app/lib/oa/cycle/index.ts:152:    resolveCycleKnowledgeContract: new ResolveCycleKnowledgeContract(
+=== CONFIG UNCHANGED ===
+=== FILE SIZES ===
+  118180 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
+   76911 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
+   63695 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
+   48466 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
+   29526 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
+   26995 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
+   23589 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
+   23033 projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
+   20847 projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
+   10309 projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
+```
+
+Aucun secret/credential. Pas de TODO/FIXME/HACK/debugger/@ts-ignore dans le package code/test.
+Chemins `/Users/morris/...` et mentions `.tmp-sfia-review` : uniquement dans transcripts historiques 01–03 → réserve **mineure** R-PR-D2A-01/02.
+
+## N. Dépendances/configuration
+
+`package.json` · lock · tsconfig · Next · Vitest · CI · scripts · method/** : **inchangés**.
+
+## O. Résultats des checks
+
+```text
+===== FP DELIVERY =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  8 passed (8)
+   Start at  14:08:54
+   Duration  330ms (transform 78ms, setup 50ms, collect 111ms, tests 3ms, environment 0ms, prepare 34ms)
+
+EXIT_FP=0
+===== PROJ DELIVERY =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms
+
+ Test Files  1 passed (1)
+      Tests  16 passed (16)
+   Start at  14:08:54
+   Duration  267ms (transform 72ms, setup 23ms, collect 102ms, tests 3ms, environment 0ms, prepare 33ms)
+
+EXIT_PROJ=0
+===== FP QA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogFingerprint.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 4ms
+
+ Test Files  1 passed (1)
+      Tests  25 passed (25)
+   Start at  14:08:55
+   Duration  262ms (transform 71ms, setup 21ms, collect 101ms, tests 4ms, environment 0ms, prepare 25ms)
+
+EXIT_FPQA=0
+===== PROJ QA =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/catalogProjection.qa.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 7ms
+
+ Test Files  1 passed (1)
+      Tests  37 passed (37)
+   Start at  14:08:56
+   Duration  272ms (transform 76ms, setup 22ms, collect 106ms, tests 7ms, environment 0ms, prepare 26ms)
+
+EXIT_PROJQA=0
+===== D1 =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/cycleTypeCatalog.test.ts
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 7ms
+
+ Test Files  1 passed (1)
+      Tests  46 passed (46)
+   Start at  14:08:56
+   Duration  267ms (transform 77ms, setup 21ms, collect 110ms, tests 7ms, environment 0ms, prepare 27ms)
+
+EXIT_D1=0
+===== OA CYCLE =====
+
+> sfia-studio@0.1.0 test
+> vitest run __tests__/oa/cycle/
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 6ms
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 3ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 4ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 6ms
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 11ms
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 12ms
+ ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 82ms
+ ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 89ms
+
+ Test Files  8 passed (8)
+      Tests  180 passed (180)
+   Start at  14:08:57
+   Duration  449ms (transform 319ms, setup 283ms, collect 1.21s, tests 212ms, environment 1ms, prepare 306ms)
+
+EXIT_OA=0
+===== FULL TEST =====
+
+> sfia-studio@0.1.0 test
+> vitest run
+
+
+ RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/projects/sfia-studio/app
+
+ ✓ __tests__/oa/doctrine/schemaValidation.test.ts (3 tests) 45ms
+ ✓ __tests__/ops1/actionGate.test.ts (10 tests) 112ms
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:08:58.203Z","status":"started","intentLength":53,"sessionLocalId":"plat-1"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > loads canonical core sources and returns telemetry
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T12:08:58.286Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-1","durationMs":83,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:08:58.286Z","status":"started","intentLength":76,"sessionLocalId":"plat-2"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > runs a read-only git tool when fixture marker present
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T12:08:58.421Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":76,"sessionLocalId":"plat-2","durationMs":135,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:08:58.422Z","status":"started","intentLength":77,"sessionLocalId":"plat-3"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > denies reading .env via tool (POLICY) without fake success
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T12:08:58.508Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":77,"sessionLocalId":"plat-3","durationMs":86,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:08:58.509Z","status":"started","intentLength":53,"sessionLocalId":"plat-4"}
+
+stdout | __tests__/d1/intake-platform-integration.test.ts > D1 Shared Platform Integration > legacy path when flag disabled skips tool loop sources optional
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T12:08:58.509Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"plat-4","durationMs":0,"providerMode":"fake"}
+
+ ✓ __tests__/d1/intake-platform-integration.test.ts (5 tests) 308ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-7c87c668-23e4-4e84-8cbd-f74e65257067 ops1-att-07797281-36d8-46bd-80ad-16f44592190f fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-7c87c668-23e4-4e84-8cbd-f74e65257067 ops1-att-07797281-36d8-46bd-80ad-16f44592190f 15 tools=0
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-7c87c668-23e4-4e84-8cbd-f74e65257067 ops1-att-b3be0850-270a-49b7-b113-0187bc4fa017 fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-7c87c668-23e4-4e84-8cbd-f74e65257067 ops1-att-b3be0850-270a-49b7-b113-0187bc4fa017 30 tools=0
+
+ ✓ __tests__/oa/project/projectLpsFoundation.test.ts (26 tests) 112ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-7c87c668-23e4-4e84-8cbd-f74e65257067 ops1-att-5105d413-9626-48bc-b437-14a9c0b88e7a fake-test
+
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > persists live multi-turn with ordered history; rejects mode mismatch before write
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-7c87c668-23e4-4e84-8cbd-f74e65257067 ops1-att-5105d413-9626-48bc-b437-14a9c0b88e7a 45 tools=0
+
+ ✓ __tests__/oa/execution-contract/adversarialCriticalAntiTa5.test.ts (12 tests) 91ms
+ ✓ __tests__/oa/execution-contract/runtimeValidationHardening.test.ts (16 tests) 107ms
+ ✓ __tests__/oa/execution-contract/executionContractGovernance.test.ts (18 tests) 156ms
+stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-dcbaa1c1-3ed3-4111-a201-05bcab0b86f0 ops1-att-8930193f-636e-40fb-bdc3-8ace024f663a fake-test
+
+ ✓ __tests__/oa/execution-attempt/lifecycleFoundation.test.ts (24 tests) 244ms
+stdout | __tests__/ops1/controlTowerTools.test.ts > GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker
+[ops1] CONVERSATION_ATTEMPT_SUCCEEDED ops1-sess-dcbaa1c1-3ed3-4111-a201-05bcab0b86f0 ops1-att-8930193f-636e-40fb-bdc3-8ace024f663a 45 tools=1
+
+ ✓ __tests__/ops1/controlTowerTools.test.ts (7 tests) 568ms
+   ✓ GitLocalReadAdapter + ToolRouter > live fake provider runs tool loop for git status marker  352ms
+ ✓ __tests__/oa/execution-attempt/qaAdversarialValidation.test.ts (12 tests) 114ms
+stdout | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
+[ops1] CONVERSATION_ATTEMPT_STARTED ops1-sess-c68b786d-b876-4869-9b43-75848e629c52 ops1-att-5b762126-d9be-4fbc-be41-5d9778ca0212 fake-test
+
+stderr | __tests__/ops1/conversation-repository.test.ts > ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error
+[ops1] CONVERSATION_ATTEMPT_FAILED ops1-sess-c68b786d-b876-4869-9b43-75848e629c52 ops1-att-5b762126-d9be-4fbc-be41-5d9778ca0212 INTERNAL
+
+ ✓ __tests__/ops1/conversation-repository.test.ts (9 tests) 704ms
+   ✓ ops1 i2 repository + immutable session mode > keeps user turn and marks attempt failed without fake assistant on provider error  354ms
+ ✓ __tests__/oa/decision/validationAdversarial.test.ts (12 tests) 147ms
+ ✓ __tests__/vertical-slice-core/localProjectComposition.test.ts (13 tests) 74ms
+ ✓ __tests__/oa/decision/adversarialAuthority.test.ts (8 tests) 75ms
+ ✓ __tests__/oa/execution-contract/supersedeCancelAuthz.test.ts (11 tests) 82ms
+ ✓ __tests__/oa/doctrine/resolveDoctrinePackage.test.ts (22 tests) 86ms
+ ✓ __tests__/oa/cycle/cycleTrajectoryEpistemicCkc.test.ts (22 tests) 111ms
+ ✓ __tests__/vertical-slice-runtime/runtimeApplicationService.test.ts (8 tests) 62ms
+ ✓ __tests__/oa/cycle/adversarialValidation.test.ts (22 tests) 131ms
+ ✓ __tests__/oa/decision/decisionConfirmationAuthority.test.ts (26 tests) 123ms
+ ✓ __tests__/platform/t-a7-path-policy-loader-asymmetry.probe.test.ts (5 tests) 33ms
+ ✓ __tests__/vertical-slice-runtime/importBoundaries.test.ts (5 tests) 37ms
+ ✓ __tests__/d1/t-a7-method-mode-hold-boundaries.test.ts (4 tests) 76ms
+ ✓ __tests__/ops1/repository.test.ts (6 tests) 62ms
+ ✓ __tests__/platform/t-a7-hard-ta6-persistence-foundation.test.ts (15 tests) 38ms
+ ✓ __tests__/vertical-slice-core/importBoundaries.test.ts (3 tests) 42ms
+ ✓ __tests__/platform/t-a7-ops1-oa-isolation.probe.test.ts (5 tests) 27ms
+ ✓ __tests__/oa/execution-contract/antiLegacy.test.ts (4 tests) 8ms
+ ✓ __tests__/ops1/controlTowerReinjection.test.ts (2 tests) 22ms
+ ✓ __tests__/oa/doctrine/antiLegacy.test.ts (3 tests) 16ms
+ ✓ __tests__/platform/t-a7-canonical-consumers.probe.test.ts (3 tests) 15ms
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks transitions while hold is active
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T12:08:59.873Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
+{"event":"d1.project_create","ts":"2026-08-02T12:08:59.877Z","status":"ok","projectId":"proj-b1369c19-4ed8-444d-91ed-8e71bdaef802","durationMs":1}
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T12:08:59.878Z","status":"blocked","reasonCount":7,"codes":"B5_OPEN,R1_OPEN,R_M01_OPEN,HARD_OPEN,T_A7_BOUNDED_LOT_ACTIVE,F11_2_INCOMPLETE,F13_4_INCOMPLETE"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T12:08:59.878Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}
+
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > allows transitions when hold is inactive (test override)
+{"event":"d1.project_create","ts":"2026-08-02T12:08:59.882Z","status":"ok","projectId":"proj-fae5b7ea-ea00-4ee9-b27b-948e0ff579df","durationMs":0}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T12:08:59.882Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T12:08:59.883Z","status":"ok","projectId":"proj-fae5b7ea-ea00-4ee9-b27b-948e0ff579df","durationMs":1}
+
+stdout | __tests__/d1/t-a7-method-mode-hold.test.ts > T-A7 lot1 MethodMode hold > blocks when hold is active even with empty reasons
+{"event":"d1.method_mode_hold_blocked","ts":"2026-08-02T12:08:59.883Z","status":"blocked","reasonCount":0,"codes":"ACTIVE_NO_REASONS"}
+
+ ✓ __tests__/d1/t-a7-method-mode-hold.test.ts (6 tests) 15ms
+ ✓ __tests__/oa/cycle/catalogProjection.qa.test.ts (37 tests) 8ms
+ ✓ __tests__/platform/import-boundaries.test.ts (3 tests) 9ms
+ ✓ __tests__/oa/cycle/cycleTypeCatalog.test.ts (46 tests) 12ms
+ ✓ __tests__/oa/evidence-review/maturityAssessmentLifecycle.test.ts (10 tests) 10ms
+ ✓ __tests__/oa/evidence-review/adversarialCoordinationValidation.test.ts (7 tests) 21ms
+ ✓ __tests__/oa/evidence-review/claimEvaluationLifecycle.test.ts (14 tests) 18ms
+ ✓ __tests__/oa/evidence-review/recommendNextGate.test.ts (11 tests) 20ms
+ ✓ __tests__/oa/project/antiLegacy.test.ts (4 tests) 7ms
+ ✓ __tests__/oa/evidence-review/adversarialMaturityValidation.test.ts (3 tests) 11ms
+ ✓ __tests__/oa/decision/antiLegacy.test.ts (4 tests) 9ms
+ ✓ __tests__/oa/evidence-review/adversarialClaimEvaluationValidation.test.ts (4 tests) 7ms
+ ✓ __tests__/platform/t-a7-consolidated-blocker-reduction.test.ts (19 tests) 9ms
+ ✓ __tests__/oa/evidence-review/reviewBundleLifecycle.test.ts (14 tests) 10ms
+ ✓ __tests__/oa/evidence-review/verifyAndUnavailable.test.ts (13 tests) 10ms
+ ✓ __tests__/oa/evidence-review/registerEvidence.test.ts (8 tests) 4ms
+ ✓ __tests__/oa/evidence-review/reviewBundleDomain.test.ts (12 tests) 6ms
+ ✓ __tests__/oa/execution-attempt/registryAndAdapters.test.ts (19 tests) 8ms
+ ✓ __tests__/oa/evidence-review/adversarialValidation.test.ts (9 tests) 8ms
+ ✓ __tests__/ops1/openai-provider.test.ts (2 tests) 10ms
+ ✓ __tests__/d1/t-a7-operational-readiness.test.ts (7 tests) 9ms
+ ✓ __tests__/oa/evidence-review/ingestExecutionAttemptEvidence.test.ts (7 tests) 6ms
+ ✓ __tests__/oa/cycle/antiLegacy.test.ts (4 tests) 11ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.qa.test.ts (25 tests) 6ms
+ ✓ __tests__/oa/execution-attempt/attemptRepository.test.ts (33 tests) 5ms
+ ✓ __tests__/platform/t-a7-bounded-history.test.ts (10 tests) 7ms
+ ✓ __tests__/ops1/t-a7-allowlist-method-hits.probe.test.ts (3 tests) 4ms
+ ✓ __tests__/oa/evidence-review/adversarialReviewBundleValidation.test.ts (4 tests) 13ms
+ ✓ __tests__/oa/evidence-review/evidenceRepository.test.ts (7 tests) 4ms
+ ✓ __tests__/oa/cycle/catalogFingerprint.test.ts (8 tests) 6ms
+ ✓ __tests__/oa/cycle/catalogProjection.test.ts (16 tests) 5ms
+ ✓ __tests__/ops1/conversation-domain.test.ts (7 tests) 3ms
+ ✓ __tests__/platform/t-a7-f11-f13-absence.probe.test.ts (3 tests) 2ms
+ ✓ __tests__/oa/evidence-review/domainInvariants.test.ts (13 tests) 4ms
+ ✓ __tests__/platform/platform-ai.test.ts (5 tests) 3ms
+ ✓ __tests__/platform/t-a7-local-volume.probe.test.ts (1 test) 1ms
+ ✓ __tests__/oa/evidence-review/maturityAssessmentDomain.test.ts (4 tests) 6ms
+ ✓ __tests__/ops1/sfia/canonicalEngine.test.ts (17 tests) 3245ms
+   ✓ SFIA context resolver > detects context stale on head mismatch  414ms
+   ✓ SFIA action compiler > compiles valid CREATE and persists ActionCandidate  322ms
+   ✓ SFIA action compiler > denies commit/push operations  334ms
+   ✓ SFIA action compiler > denies context stale  314ms
+   ✓ SFIA action compiler > preserves exact content  304ms
+   ✓ SFIA action compiler > instantiates cursor prompt from real template  338ms
+   ✓ SFIA conversation integration (fixture markers) > CREATE marker → ActionCandidate live  365ms
+   ✓ SFIA conversation integration (fixture markers) > commit marker → POLICY_DENIED  308ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:09:01.631Z","status":"started","intentLength":53,"sessionLocalId":"s1"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > produces a validated proposal without mutation side effects
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T12:09:01.709Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"s1","durationMs":78,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:09:01.709Z","status":"started","intentLength":22,"sessionLocalId":"s2"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_clarification_requested","ts":"2026-08-02T12:09:01.828Z","status":"NEED_CLARIFICATION","intentLength":22,"sessionLocalId":"s2","durationMs":119,"providerMode":"fake"}
+
+ ✓ __tests__/vertical-slice-ui/projectWorkspaceUi.test.tsx (4 tests) 226ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:09:01.829Z","status":"started","intentLength":22,"sessionLocalId":"s2"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > asks for clarification then accepts an answer
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T12:09:01.941Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":22,"sessionLocalId":"s2","durationMs":113,"providerMode":"fake"}
+
+ ✓ __tests__/ops1/globalModeBadge.ui.test.tsx (5 tests) 223ms
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:09:01.942Z","status":"started","intentLength":39,"sessionLocalId":"s4"}
+
+stdout | __tests__/d1/intake-c2.test.ts > D1-C2 analyzeIntent service > maps provider error to D1Error PROVIDER
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T12:09:02.035Z","status":"PROVIDER","intentLength":39,"sessionLocalId":"s4","durationMs":93,"providerMode":"fake","errorCode":"PROVIDER"}
+
+ ✓ __tests__/d1/intake-c2.test.ts (13 tests) 410ms
+ ✓ __tests__/ops1/Ops1SessionScreen.test.tsx (4 tests) 117ms
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
+[d1.intake] {"event":"intake_analysis_started","ts":"2026-08-02T12:09:02.329Z","status":"started","intentLength":53,"sessionLocalId":"harden-1"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > sends system role separately from user intent
+[d1.intake] {"event":"intake_proposal_generated","ts":"2026-08-02T12:09:02.438Z","status":"CREATE_PROJECT_CANDIDATE","intentLength":53,"sessionLocalId":"harden-1","durationMs":109,"providerMode":"fake"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T12:09:02.440Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
+[d1.intake] {"event":"intake_provider_failed","ts":"2026-08-02T12:09:02.441Z","status":"CONFIG","providerMode":"live","errorCode":"CONFIG"}
+
+stderr | __tests__/d1/intake-c3.test.ts > D1-C2 hardening > fails explicitly when live requested without secrets
+{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T12:09:02.440Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
+{"event":"d1_intake_live_config_unavailable","ts":"2026-08-02T12:09:02.441Z","message":"D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > exact name ranks first with strong evidence
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.442Z","status":"started","sessionLocalId":"m1","proposalId":"rrp-campus"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.442Z","status":"AVAILABLE","sessionLocalId":"m1","durationMs":0,"proposalId":"rrp-campus","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T12:09:02.443Z","status":"STRONG_MATCH","sessionLocalId":"m1","durationMs":1,"proposalId":"rrp-campus","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > detects semantic proximity for contrats
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.443Z","status":"started","sessionLocalId":"m2","proposalId":"rrp-c"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.443Z","status":"AVAILABLE","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T12:09:02.443Z","status":"STRONG_MATCH","sessionLocalId":"m2","durationMs":0,"proposalId":"rrp-c","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > flags multiple close matches as ambiguity
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.443Z","status":"started","sessionLocalId":"m3","proposalId":"rrp-multi"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.443Z","status":"AVAILABLE","sessionLocalId":"m3","durationMs":0,"proposalId":"rrp-multi","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T12:09:02.448Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m3","durationMs":5,"proposalId":"rrp-multi","candidateCount":2,"topScoreBand":"WEAK_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > returns no-match without inventing ids
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.448Z","status":"started","sessionLocalId":"m4","proposalId":"rrp-none"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.448Z","status":"AVAILABLE","sessionLocalId":"m4","durationMs":0,"proposalId":"rrp-none","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T12:09:02.449Z","status":"NO_MATCH","sessionLocalId":"m4","durationMs":1,"proposalId":"rrp-none","sourceProjectCount":1}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > warns on inactive project without auto-resume
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.449Z","status":"started","sessionLocalId":"m5","proposalId":"rrp-draft"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.449Z","status":"AVAILABLE","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T12:09:02.449Z","status":"STRONG_MATCH","sessionLocalId":"m5","durationMs":0,"proposalId":"rrp-draft","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > analyze-only does not force attachment
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.449Z","status":"started","sessionLocalId":"m6","proposalId":"rrp-ao"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.449Z","status":"AVAILABLE","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","sourceProjectCount":1,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T12:09:02.449Z","status":"STRONG_MATCH","sessionLocalId":"m6","durationMs":0,"proposalId":"rrp-ao","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > distinguishes context unavailable from empty
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.449Z","status":"started","sessionLocalId":"m7","proposalId":"rrp-u"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.449Z","status":"UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"proposalId":"rrp-u","sourceProjectCount":0,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_unavailable","ts":"2026-08-02T12:09:02.449Z","status":"CONTEXT_UNAVAILABLE","sessionLocalId":"m7","durationMs":0,"errorCode":"UNAVAILABLE","proposalId":"rrp-u"}
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.449Z","status":"started","sessionLocalId":"m8","proposalId":"rrp-e"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.449Z","status":"EMPTY","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_no_match","ts":"2026-08-02T12:09:02.449Z","status":"NO_MATCH","sessionLocalId":"m8","durationMs":0,"proposalId":"rrp-e","sourceProjectCount":0}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 matching engine > caps candidates at 5 and keeps scores bounded
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.449Z","status":"started","sessionLocalId":"m9","proposalId":"rrp-cap"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.449Z","status":"AVAILABLE","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","sourceProjectCount":8,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_ambiguous","ts":"2026-08-02T12:09:02.449Z","status":"MULTIPLE_MATCHES","sessionLocalId":"m9","durationMs":0,"proposalId":"rrp-cap","candidateCount":5,"topScoreBand":"WEAK_MATCH"}
+
+stdout | __tests__/d1/intake-c3.test.ts > D1-C3 snapshot from real repository (read-only) > matches against created projects without mutation
+{"event":"d1.project_create","ts":"2026-08-02T12:09:02.455Z","status":"ok","projectId":"proj-edbbe6be-028f-48dc-b790-a1b207a0fc2f","durationMs":1}
+{"event":"d1.project_create","ts":"2026-08-02T12:09:02.455Z","status":"ok","projectId":"proj-2fbf42ff-80b8-44f8-9f27-c979e710ffa6","durationMs":0}
+[d1.intake] {"event":"intake_context_lookup_started","ts":"2026-08-02T12:09:02.455Z","status":"started","sessionLocalId":"repo-1","proposalId":"rrp-repo"}
+[d1.intake] {"event":"intake_context_snapshot_built","ts":"2026-08-02T12:09:02.456Z","status":"AVAILABLE","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","sourceProjectCount":2,"truncationApplied":false}
+[d1.intake] {"event":"intake_context_match_generated","ts":"2026-08-02T12:09:02.456Z","status":"STRONG_MATCH","sessionLocalId":"repo-1","durationMs":1,"proposalId":"rrp-repo","candidateCount":1,"topScoreBand":"STRONG_MATCH"}
+
+ ✓ __tests__/d1/intake-c3.test.ts (16 tests) 128ms
+ ✓ __tests__/d1/intake-c1.test.tsx (6 tests) 635ms
+   ✓ D1-C2 IntakeView > shows structured proposal without executable confirm  310ms
+ ✓ __tests__/increment-e.test.tsx (4 tests) 76ms
+ ✓ __tests__/shell.test.tsx (1 test) 56ms
+ ✓ __tests__/increment-a.test.tsx (8 tests) 126ms
+ ✓ __tests__/navigation.test.tsx (2 tests) 44ms
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > creates project only with explicit confirmation and audits
+[d1.intake] {"event":"intake_mutation_failed","ts":"2026-08-02T12:09:02.947Z","status":"FAILED","sessionLocalId":"s1","durationMs":0,"errorCode":"VALIDATION","proposalId":"rrp-1"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.948Z","status":"CREATE_PROJECT","sessionLocalId":"s1","proposalId":"rrp-1"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T12:09:02.948Z","status":"confirmed","sessionLocalId":"s1","proposalId":"rrp-1"}
+{"event":"d1.project_create","ts":"2026-08-02T12:09:02.949Z","status":"ok","projectId":"proj-47a1c040-4d1b-42e7-a8bf-295624bb7930","durationMs":1}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T12:09:02.949Z","status":"SUCCEEDED","projectId":"proj-47a1c040-4d1b-42e7-a8bf-295624bb7930","sessionLocalId":"s1","durationMs":1,"proposalId":"rrp-1"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > replays same key same payload without duplicate
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.954Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T12:09:02.954Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
+{"event":"d1.project_create","ts":"2026-08-02T12:09:02.954Z","status":"ok","projectId":"proj-e69e4fbf-122f-4c39-91fe-d075af0e8927","durationMs":0}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T12:09:02.954Z","status":"SUCCEEDED","projectId":"proj-e69e4fbf-122f-4c39-91fe-d075af0e8927","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.954Z","status":"CREATE_PROJECT","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T12:09:02.954Z","status":"confirmed","sessionLocalId":"s2","proposalId":"rrp-2"}
+[d1.intake] {"event":"intake_project_creation_replayed","ts":"2026-08-02T12:09:02.954Z","status":"ALREADY_APPLIED","projectId":"proj-e69e4fbf-122f-4c39-91fe-d075af0e8927","sessionLocalId":"s2","durationMs":0,"proposalId":"rrp-2"}
+
+ ✓ __tests__/increment-d.test.tsx (5 tests) 53ms
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > conflicts when same key different payload
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.958Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T12:09:02.958Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
+{"event":"d1.project_create","ts":"2026-08-02T12:09:02.958Z","status":"ok","projectId":"proj-0f4b1fbc-a396-430f-9bbb-ba7605de75b5","durationMs":0}
+[d1.intake] {"event":"intake_project_created","ts":"2026-08-02T12:09:02.958Z","status":"SUCCEEDED","projectId":"proj-0f4b1fbc-a396-430f-9bbb-ba7605de75b5","sessionLocalId":"s3","durationMs":0,"proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.958Z","status":"CREATE_PROJECT","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_project_creation_confirmed","ts":"2026-08-02T12:09:02.958Z","status":"confirmed","sessionLocalId":"s3","proposalId":"rrp-3"}
+[d1.intake] {"event":"intake_mutation_rejected","ts":"2026-08-02T12:09:02.958Z","status":"CONFLICT","sessionLocalId":"s3","durationMs":0,"errorCode":"IDEMPOTENCY","proposalId":"rrp-3"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > existing project confirm is NO_MUTATION without invented link
+{"event":"d1.project_create","ts":"2026-08-02T12:09:02.963Z","status":"ok","projectId":"proj-53f65025-1000-4845-9282-079319d196bb","durationMs":0}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.963Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s4","proposalId":"rrp-4"}
+[d1.intake] {"event":"intake_existing_project_confirmed","ts":"2026-08-02T12:09:02.963Z","status":"NO_MUTATION","projectId":"proj-53f65025-1000-4845-9282-079319d196bb","sessionLocalId":"s4","durationMs":0,"proposalId":"rrp-4"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > detects stale existing project conflict
+{"event":"d1.project_create","ts":"2026-08-02T12:09:02.969Z","status":"ok","projectId":"proj-c275aa95-d980-464a-b3e6-98d8ee17e88b","durationMs":0}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T12:09:02.969Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T12:09:02.970Z","status":"ok","projectId":"proj-c275aa95-d980-464a-b3e6-98d8ee17e88b","durationMs":1}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.970Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s5","proposalId":"rrp-5"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > analyze-only and cancel produce no mutation
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.974Z","status":"ANALYZE_ONLY","sessionLocalId":"s6","proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_analyze_only_completed","ts":"2026-08-02T12:09:02.974Z","status":"NO_MUTATION","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.974Z","status":"CANCEL","sessionLocalId":"s6","proposalId":"rrp-6"}
+[d1.intake] {"event":"intake_confirmation_cancelled","ts":"2026-08-02T12:09:02.974Z","status":"CANCELLED","sessionLocalId":"s6","durationMs":0,"proposalId":"rrp-6"}
+
+stdout | __tests__/d1/intake-c4.test.ts > D1-C4 bounded mutations > missing existing project returns CONFLICT
+[d1.intake] {"event":"intake_confirmation_presented","ts":"2026-08-02T12:09:02.978Z","status":"CONFIRM_EXISTING_PROJECT_CONTEXT","sessionLocalId":"s7","proposalId":"rrp-7"}
+[d1.intake] {"event":"intake_existing_project_conflict","ts":"2026-08-02T12:09:02.978Z","status":"NOT_FOUND","projectId":"proj-missing-does-not-exist","sessionLocalId":"s7","durationMs":0,"errorCode":"NOT_FOUND","proposalId":"rrp-7"}
+
+ ✓ __tests__/d1/intake-c4.test.ts (10 tests) 39ms
+ ✓ __tests__/ops1/allowlistEvaluation.test.ts (9 tests) 47ms
+ ✓ __tests__/increment-c.test.tsx (8 tests) 1277ms
+   ✓ Increment C — editable demand + confirmation > accepts editable Campus360 demand and shows exact text in confirmation  331ms
+   ✓ Increment C — editable demand + confirmation > back from confirmation allows editing again  327ms
+ ✓ __tests__/increment-b.test.tsx (6 tests) 48ms
+ ✓ __tests__/ops1/executionI5.test.ts (5 tests) 1723ms
+   ✓ ops1 I5 execution contract + fixture run > creates contract, records GO linked to hash, runs fixture, blocks double exec  701ms
+   ✓ ops1 I5 execution contract + fixture run > refuses HEAD drift and remote flags stay true  325ms
+   ✓ ops1 I5 execution contract + fixture run > rejects run adapterMode mismatch (no silent real→fixture swap)  319ms
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > creates project with audit and mono-operator assignments
+{"event":"d1.project_create","ts":"2026-08-02T12:09:03.398Z","status":"ok","projectId":"proj-df26c0ed-b598-4e88-ba39-398cace74294","durationMs":2}
+
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > is idempotent on duplicate key
+{"event":"d1.project_create","ts":"2026-08-02T12:09:03.404Z","status":"ok","projectId":"proj-381153ab-9c3f-4f0b-a111-d62f30b7e916","durationMs":0}
+{"event":"d1.project_create","ts":"2026-08-02T12:09:03.404Z","status":"idempotent","projectId":"proj-381153ab-9c3f-4f0b-a111-d62f30b7e916","durationMs":0}
+
+stdout | __tests__/d1/project-foundation.test.ts > d1 repository commands > selects method mode with optimistic locking
+{"event":"d1.project_create","ts":"2026-08-02T12:09:03.408Z","status":"ok","projectId":"proj-aabcfed9-4979-45d6-b51d-9e6a8c2b9d20","durationMs":1}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T12:09:03.408Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T12:09:03.409Z","status":"ok","projectId":"proj-aabcfed9-4979-45d6-b51d-9e6a8c2b9d20","durationMs":1}
+{"event":"d1.method_mode_hold_allowed","ts":"2026-08-02T12:09:03.409Z","status":"allowed","provenance":"test-override"}
+{"event":"d1.method_mode_selected","ts":"2026-08-02T12:09:03.409Z","status":"failed","durationMs":0,"errorCode":"CONFLICT"}
+
+ ✓ __tests__/d1/project-foundation.test.ts (7 tests) 19ms
+ ✓ __tests__/gates.test.tsx (1 test) 40ms
+ ✓ __tests__/recommendation-vs-decision.test.tsx (2 tests) 16ms
+ ✓ __tests__/status-pill.test.tsx (1 test) 17ms
+ ✓ __tests__/ops1/domain.test.ts (6 tests) 3ms
+ ✓ __tests__/fixtures.test.ts (2 tests) 2ms
+ ✓ __tests__/ops1/globalModeBadge.test.ts (6 tests) 1ms
+ ✓ __tests__/ops1/executionI6.test.ts (10 tests) 2881ms
+   ✓ ops1 I6 report + continuation > generates COMPLETED report with coverage and metrics  621ms
+   ✓ ops1 I6 report + continuation > refuses sealed report overwrite (no auto-retry)  624ms
+   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  404ms
+   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  303ms
+   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  302ms
+ ✓ __tests__/vertical-slice-ui/createProjectUi.test.tsx (12 tests) 2992ms
+   ✓ V2-A2 Create Project UI > validates name, short reference, and per-line constraint lengths  1801ms
+
+ Test Files  94 passed (94)
+      Tests  913 passed (913)
+   Start at  14:08:57
+   Duration  6.83s (transform 2.80s, setup 3.21s, collect 11.37s, tests 18.58s, environment 5.71s, prepare 3.40s)
+
+EXIT_ALL=0
+===== TYPECHECK =====
+
+> sfia-studio@0.1.0 typecheck
+> tsc --noEmit
+
+EXIT_TC=0
+===== LINT =====
+
+> sfia-studio@0.1.0 lint
+> next lint
+
+`next lint` is deprecated and will be removed in Next.js 16.
+For new projects, use create-next-app to choose your preferred linter.
+For existing projects, migrate to the ESLint CLI:
+npx @next/codemod@canary next-lint-to-eslint-cli .
+
+✔ No ESLint warnings or errors
+EXIT_LINT=0
+===== BUILD =====
+
+> sfia-studio@0.1.0 build
+> next build
+
+   ▲ Next.js 15.5.20
+
+   Creating an optimized production build ...
+ ✓ Compiled successfully in 928ms
+   Linting and checking validity of types ...
+   Collecting page data ...
+   Generating static pages (0/10) ...
+   Generating static pages (2/10)
+   Generating static pages (4/10)
+   Generating static pages (7/10)
+ ✓ Generating static pages (10/10)
+   Finalizing page optimization ...
+   Collecting build traces ...
+
+Route (app)                                 Size  First Load JS
+┌ ○ /                                      127 B         103 kB
+├ ○ /_not-found                            127 B         103 kB
+├ ○ /cycle-actif                         3.82 kB         119 kB
+├ ○ /decision                            5.53 kB         120 kB
+├ ƒ /nouvelle-demande                    10.1 kB         116 kB
+├ ○ /ops1/nouvelle-demande               18.5 kB         133 kB
+├ ƒ /projects/[id]                       2.66 kB         108 kB
+├ ○ /projects/new                        2.62 kB         108 kB
+├ ƒ /studio/projects/[id]                2.15 kB         112 kB
+├ ○ /studio/projects/new                 4.07 kB         114 kB
+├ ○ /synthese                            4.83 kB         120 kB
+└ ƒ /workspace                             571 B         106 kB
++ First Load JS shared by all             102 kB
+  ├ chunks/255-3981a3d1f3561bd8.js       46.2 kB
+  ├ chunks/4bd1b696-c023c6e3521b1417.js  54.2 kB
+  └ other shared chunks (total)          1.96 kB
+
+
+○  (Static)   prerendered as static content
+ƒ  (Dynamic)  server-rendered on demand
+
+EXIT_BUILD=0
+```
+
+| Commande | Exit | Résultat |
+|----------|------|----------|
+| fingerprint Delivery | 0 | 8/8 |
+| projection Delivery | 0 | 16/16 |
+| fingerprint QA | 0 | 25/25 |
+| projection QA | 0 | 37/37 |
+| D1 | 0 | 46/46 |
+| oa/cycle | 0 | 180/180 |
+| npm test | 0 | 913/913 |
+| typecheck | 0 | PASS |
+| lint | 0 | PASS sans warning |
+| build | 0 | PASS |
+| git diff --check | 0 | PASS |
+
+## P. Risques et réserves
+
+| ID | Sévérité | Contenu | Statut |
+|----|----------|---------|--------|
+| R-PR-D2A-01 | Mineure | Chemins locaux Vitest dans rapports QA historiques | OPEN — acceptable |
+| R-PR-D2A-02 | Mineure | Références `.tmp-sfia-review` dans preuves historiques (fichiers exclus du package) | OPEN — acceptable |
+| R-PR-D2A-03 | Mineure | Volumétrie documentaire élevée (transcripts Full QA) | OPEN — maîtrisée |
+| INHERITED-R-01 | Mineure acceptée | Condensation framing README | NOT LIFTED |
+| — | Bloquante / Majeure | **aucune** | — |
+
+## Q. Granularité Git
+
+**1 PR** · **2 commits** (non exécutés) :
+
+### Commit 1
+
+`feat(sfia-studio): add V3.1-D2-A catalog projection contract`
+
+Fichiers 1–8 (code + tests).
+
+### Commit 2
+
+`docs(sfia-studio): document V3.1-D2 architecture and QA evidence`
+
+Fichiers 9–20 (framing + Delivery/QA/PR readiness).
+
+## R. Package PR
+
+| Champ | Valeur |
+|-------|--------|
+| Titre | `feat(sfia-studio): add V3.1-D2-A catalog projection contract` |
+| Base | `main` |
+| Head | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
+| Type | Draft PR |
+| Fichiers | 20 |
+
+## S. Draft PR body
+
+```markdown
+## Summary
+
+- Add the V3.1-D2-A domain contracts for catalog selection.
+- Add the static HASH-A catalog fingerprint and its automated consistency guard.
+- Add the pure fail-closed Catalog Projection.
+- Bind the canonical fingerprint to the catalog actually used by the public API.
+- Add Delivery and independent QA evidence for D2-A, including the R-QA-D2A-01 corrective path.
+
+## Morris decisions
+
+- D-V3.1-D2-01…12 adopted.
+- D-V3.1-D2-FA-01…12 adopted with FA-C.
+- D-V3.1-D2-TA-01…12 adopted.
+- D2-A backlog BL-D2-A-01…04 validated.
+- QA-G3 accepted on 2026-08-02 at 14:01 CEST.
+- R-QA-D2A-01 closed by independent QA revalidation PASS.
+- Commit, push, PR and merge require separate Morris gates.
+- D2-B, D2-C, D2-D and D3 are not authorized by this package.
+
+## Scope
+
+### Code
+
+- D2-A catalog-selection contracts (`ckcQualificationContracts.ts`).
+- Contractual catalog fingerprint projection and static SHA-256 HASH-A.
+- Pure Catalog Projection with fail-closed binding of the catalog actually used.
+- Additive public exports only in `index.ts` (+3 lines).
+
+### Tests
+
+- Delivery tests for fingerprint and projection (8 + 16).
+- Independent QA tests for determinism, immutability, boundaries and fail-closed behavior (25 + 37).
+- Regression coverage for the public catalog/fingerprint binding finding.
+
+### Documentation
+
+- D2 framing, functional design, functional architecture and technical architecture (15–18).
+- D2-A/B/C validated backlog (19) — D2-B/C remain prospective only.
+- D2-A Delivery, initial QA FAIL, corrective Delivery, QA revalidation PASS and PR readiness evidence.
+
+## Runtime contract
+
+- Catalog version inherited from D1.
+- HASH-A: `sha256:27316864454634a45342baaa1782898bea12914a4ec9cd9b051622eef9efd2cc`
+- No runtime cryptographic dependency.
+- No I/O, Next.js or infrastructure dependency in D2-A domain modules.
+- Fail-closed validation order: correlationId → version → hash → type → lifecycle → mapping → catalog binding → success.
+
+## QA evidence
+
+- Initial independent QA identified R-QA-D2A-01 as blocking.
+- Corrective Delivery was limited to `catalogProjection.ts`.
+- Independent revalidation closed R-QA-D2A-01.
+- QA-G3 was accepted by Morris on 2026-08-02 at 14:01 CEST.
+- PR-readiness replay proofs:
+  - fingerprint Delivery: 8/8;
+  - projection Delivery: 16/16;
+  - fingerprint QA: 25/25;
+  - projection QA: 37/37;
+  - D1 catalog: 46/46;
+  - OA cycle: 180/180;
+  - full suite: 913/913;
+  - typecheck, lint and build: PASS.
+
+## Boundaries
+
+- No CKC resolver, manifest, Consumption Proof or QualifyCycle Bridge implementation in this package.
+- No D2-B or D2-C implementation.
+- No D2-D, D3, UI, Figma or CreateCycle.
+- No mutation, persistence, dependency or method change.
+
+The D2-B/C content in framing/backlog documents is prospective architecture and planning only. It does not authorize their Delivery.
+
+## Risks and reserves
+
+### Minor
+
+- Historical QA reports embed local Vitest paths (`/Users/morris/...`) and `.tmp-sfia-review` archive references as reproducible evidence. Not secrets; excluded from executable package paths; retained for auditability.
+- Documentation volumetry is high (~10k added lines) because Full QA reports embed complete command transcripts. Scope remains a single D2-A result.
+- INHERITED-R-01 (framing README condensation) remains accepted and not lifted.
+
+### Boundary retained
+
+- D2-B requires D2-A integration and a distinct Morris GO.
+- D2-C remains closed.
+- Local tests do not replace remote CI.
+- Draft PR does not imply merge readiness.
+
+## Test plan
+
+```bash
+cd projects/sfia-studio/app
+npm test -- __tests__/oa/cycle/catalogFingerprint.test.ts
+npm test -- __tests__/oa/cycle/catalogProjection.test.ts
+npm test -- __tests__/oa/cycle/catalogFingerprint.qa.test.ts
+npm test -- __tests__/oa/cycle/catalogProjection.qa.test.ts
+npm test -- __tests__/oa/cycle/cycleTypeCatalog.test.ts
+npm test -- __tests__/oa/cycle/
+npm test
+npm run typecheck
+npm run lint
+npm run build
+```
+
+## Review guidance
+
+1. framing/18 — adopted technical architecture.
+2. framing/19 — validated D2-A/B/C backlog and boundaries.
+3. `ckcQualificationContracts.ts`.
+4. `catalogFingerprint.ts`.
+5. `catalogProjection.ts`.
+6. four D2-A test files.
+7. `index.ts` additive exports.
+8. reports 01 → 04.
+9. framing 15 → 17, 08 and README.
+
+## Checklist
+
+- [x] QA revalidation PASS.
+- [x] R-QA-D2A-01 closed.
+- [x] QA-G3 accepted by Morris.
+- [x] No new dependency or migration.
+- [x] No D2-B/C implementation.
+- [x] No D3/UI/CreateCycle.
+- [x] PR package reviewed locally (20 files).
+- [ ] Commit — requires distinct Morris GO.
+- [ ] Push — requires distinct Morris GO.
+- [ ] Draft PR creation — requires distinct Morris GO.
+- [ ] Remote CI and review.
+- [ ] Merge — requires a later distinct Morris GO.
+```
+
+## T. Review guidance
+
+1. framing/18 · 2. framing/19 · 3. contrats · 4. fingerprint · 5. projection ·
+6. tests · 7. index · 8. 01→04 · 9. framing 15–17/08/README.
+
+## U. Gates suivants
+
+```text
+GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
+USE APPROVED PR PACKAGE AND COMMIT PLAN —
+TARGET MAIN —
+NO MERGE —
+NO D2-B —
+NO D2-C —
+NO D3 —
+NO UI —
+NO CREATECYCLE —
+NO METHOD PROMOTION
+```
+
+Ne pas exécuter automatiquement.
+
+Si NOT READY (non applicable ici) : GO PR READINESS CORRECTIVE …
+
+## V. Anti-claims
+
+READY FOR PR ≠ PR créée · ≠ merge ready · ≠ CI distante verte · ≠ production ready ·
+≠ D2-B ouvert · ≠ D2-A intégré à main.
+
+## W. Verdict
+
+```text
+V3.1-D2-A PR READINESS COMPLETE —
+READY FOR PR WITH CLASSIFIED RESERVES —
+NO BLOCKING OR MAJOR RESERVE —
+QA-G3 ACCEPTED —
+COMMIT PUSH AND PR REQUIRE DISTINCT MORRIS GO —
+D2-B AND D2-C REMAIN CLOSED —
+D3 NOT OPENED
+```
+
+## Annexe — empreintes pré-readiness
+
+```text
+2026-08-02 14:08:47 CEST (+0200)
+projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=d85c739df6256db66a2afb2fe8931c89abd443c87c2f0bba8fa3a2b9daa2c4e6  blob=6a4cfae85507f185dd52d1984dd9e742b77c3212
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=444d66e54a881b0370dd273fa7a0c7af9b2654324bb50c9abb4ef590f2ace8bb  blob=885a2dbb8fcaadaf299941162d15fb2b00853878
+projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
+projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  blob=b436ee328fa9dfdb1d6eb3bc165dad285723113d
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
+projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b
+projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=42f0e3f0e315dd04c6a98f4c311a7a151331fe9b3de1036dd32400780bdd0996  blob=18bba44a969342e5608bd8afcf952162f1572c95
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=f532704bd974cfe3497ebc3d078c1de50052ee7ca4bb7f86927cf74dccac2559  blob=4d4c50b25b26fa788d6d7b4e0ad5066ec1614e42
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  blob=caaddbaa8a0de6596e5382f3f02d83643a896e2b
+projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md  sha256=9388f3c7eaec6758153093f8ca689b65793d8fb7c22396754a7737c061e8ba1b  blob=e386d8b1f283b349b18ff049b4e0fc557a1a81b0
+projects/sfia-studio/app/lib/oa/cycle/domain/cycleTypeCatalog.ts  sha256=f959343c676f99fec292757d7e74213316d365585fc03e18ac5fba7d6984c682  blob=9968f040283d8f626c65db48bbec7abd69c56e2d
+projects/sfia-studio/app/__tests__/oa/cycle/cycleTypeCatalog.test.ts  sha256=719a1f00603fb3374b29f003cf761c8ffc8740444f818d82592dd502bcda3bf1  blob=0102fc02edb6e6f16420ea0de31a0d6361b221ba
+.tmp-sfia-review/chatgpt-review.md  sha256=14abeb7de209961f8a67b68d1b426db77bc78dde1b6b86cf71282ac8df7947fe  blob=86b5d5c37944dfc1e508a00ecfb30d864e98a941
+```
+
+## Annexe — diff tracked
+
+```diff
+diff --git a/projects/sfia-studio/app/lib/oa/cycle/index.ts b/projects/sfia-studio/app/lib/oa/cycle/index.ts
+index 3daf575..9ad18b7 100644
+--- a/projects/sfia-studio/app/lib/oa/cycle/index.ts
++++ b/projects/sfia-studio/app/lib/oa/cycle/index.ts
+@@ -10,6 +10,9 @@ export * from "./domain/errors";
+ export * from "./domain/invariants";
+ export * from "./domain/qualification";
+ export * from "./domain/cycleTypeCatalog";
++export * from "./domain/ckcQualificationContracts";
++export * from "./domain/catalogFingerprint";
++export * from "./domain/catalogProjection";
+
+ export * from "./ports/cycleRepository";
+ export * from "./ports/trajectoryRepository";
+diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+index c138afc..6a4cfae 100644
+--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
++++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
+@@ -32,7 +32,7 @@ Plusieurs PR (lots), commits atomiques. Framing docs séparés. Pas de big-bang.
+
+ **QA-G3 Morris :** **PASS** (2026-07-30 21:36 CEST).
+
+-**Statut PR readiness :** `READY FOR PR` — [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) — commit/push/draft PR **soumis à GO**.
++**Statut PR / merge / capitalisation (historique) :** PR #296 + capitalisation #297 **mergées** · D1 **techniquement clos** sur `main`.
+
+ Docs :
+ - [`../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/README.md)
+@@ -44,24 +44,43 @@ Docs :
+ | Revalidation / readiness tests | 46/46 · 94/94 · 827/827 · typecheck/lint/build PASS |
+ | QA-G2 | vert |
+ | QA-G3 | **PASS Morris** |
+-| PR readiness | **READY FOR PR** · package 13 fichiers · PR **non créée** |
+-| D2 / D3 | **non ouverts** |
++| PR / merge / capitalisation | PR #296 + #297 mergées · D1 techniquement clos sur `main` @ `e1befcb8…` |
++| D2 cadrage | **terminé et arbitré** — [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
++| D2 conception fonctionnelle | **validée** — [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) |
++| Architecture fonctionnelle D2 | **adoptée (FA-C)** — [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** |
++| Architecture technique D2 | **adoptée** — [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
++| Backlog D2-A/B/C | **validé** — [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) · 17 stories préservées |
++| Delivery D2-A | **complète localement** — contrats, HASH-A, projection pure · [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
++| QA D2-A | **exécutée — FAIL Cursor** · R-QA-D2A-01 bloquante · [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
++| Delivery corrective D2-A | **complète localement** · [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) |
++| QA revalidation D2-A | **PASS** · R-QA-D2A-01 **CLOSED** · [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) · QA-G3 Morris non décidé |
++| PR readiness D2-A | **non ouverte** |
++| Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
++| Delivery D2-C | **fermée** |
++| D2-D (extensions) | **gated** · non ouvert |
++| D3 | **non ouvert** |
+
+ ### Slicing CAT-08
+
+ | Lot | Contenu | Statut |
+ |-----|---------|--------|
+-| **V3.1-D1** | Catalogue · mapping · validateur | Delivery + QA-G3 PASS · **PR readiness READY** · Git pending GO |
+-| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **non autorisé** |
++| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
++| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception validée** · **FA-C adoptée** · **TA adoptée** · **backlog validé** · D2-A Delivery complète · D2-A QA **FAIL** · Delivery corrective complète · QA revalidation **PASS** · R-QA-D2A-01 **CLOSED** · QA-G3 en attente · D2-B/C **fermées** · slicing **A→B→C** · D2-D gated |
+ | **V3.1-D3** | UI · état CKC | **non autorisé** · réserve Figma |
+
+ ### Réserves QA
+
+-R-QA-01…09 **CLOSED**. QA-G3 PASS. PR readiness ≠ autorisation commit/push/PR.
++R-QA-01…09 **CLOSED**. QA-G3 PASS. Historique PR readiness conservé.
+
+ ### Réserves D2
+
+-Orchestration CKC · consommation fail-closed runtime · bridge QualifyCycle · exposition vertical-slice · exploitabilité produit.
++Catalog Projection D2-A Delivery complète ; QA initiale **FAIL** ; Delivery corrective complète ; QA revalidation **PASS** — R-QA-D2A-01 **CLOSED** (finding technique) ; QA-G3 Morris non décidé.
++Orchestration CKC, resolver et bridge QualifyCycle restent fermés en D2-B/C —
++voir [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) /
++[`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) /
++[`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) /
++[`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) /
++[`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md).
+
+ ## Lot V3.2 / V4 / V5 / V6
+
+diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+index 23b6c6f..885a2db 100644
+--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
++++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
+@@ -2,17 +2,27 @@
+
+ | Champ | Valeur |
+ |-------|--------|
+-| **Statut** | `FRAMING LIVING — V3.1-D1 QA-G3 PASS — PR READINESS READY FOR PR — COMMIT/PUSH/PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED` |
+-| **Date** | 2026-07-30 21:45:00 CEST (+0200) |
+-| **Cycle courant** | 13 — PR readiness V3.1-D1 |
++| **Statut** | `FRAMING LIVING — V3.1-D2-A QA REVALIDATION PASS — R-QA-D2A-01 CLOSED — QA-G3 MORRIS DECISION REQUIRED — NOT PR READY` |
++| **Date** | 2026-08-02 13:57:07 CEST (+0200) |
++| **Cycle courant** | 9 — QA / validation (revalidation corrective) V3.1-D2-A |
+ | **Profil** | **Critical** |
+ | **Typologie** | EVOL |
+-| **Gate courant** | `GO PR READINESS SFIA STUDIO V3.1-D1 …` **consommé** (2026-07-30 21:37 CEST) |
+-| **QA-G3 Morris** | **PASS** (2026-07-30 21:36 CEST) — R-QA-01…09 CLOSED |
+-| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d1-cycle-type-catalog-runtime` |
+-| **Base** | `origin/main` @ `3e8a4374405dce98866e35fb60c5c7329701f191` |
+-| **Rapports D1** | [`01`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/01-qa-validation-report.md) · [`02`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/02-corrective-delivery-report.md) · [`03`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/03-qa-revalidation-report.md) · [`04`](../first-user-visible-vertical-slice-v3-1-d1-cycle-type-catalog-runtime/04-pr-readiness-report.md) |
+-| **Docs protégées** | `12` / `13` / rapports `01`–`03` **inchangés** pendant readiness |
++| **Gate courant** | GO QA REVALIDATION D2-A **consommé** (2026-08-02 05:31 CEST) |
++| **Branche Delivery** | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` |
++| **Décisions D2 produit** | D-V3.1-D2-01…12 **ADOPTED BY MORRIS** |
++| **Décisions D2-FA** | D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** (FA-C) |
++| **Décisions D2-TA** | D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
++| **Backlog** | [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) **validé** — 17 stories |
++| **Delivery D2-A** | complète localement |
++| **QA D2-A initiale** | **FAIL** — [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
++| **Delivery corrective** | complète — [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) |
++| **QA revalidation** | **PASS** — [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) · R-QA-D2A-01 **CLOSED** |
++| **QA-G3 Morris** | **NOT DECIDED** |
++| **Base `main`** | `e1befcb80ed5e3c789a7de9036a8207d6b3e6771` |
++| **Docs D2** | [`15`](./15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md) · [`16`](./16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md) · [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) |
++| **Docs protégées** | `12`–`18`, code/tests D2-A **inchangés pendant revalidation** |
++| **Git projet** | aucun commit · aucun push · aucune PR |
++| **Réserve README** | `ACCEPTED MINOR DOCUMENTATION RESERVE — STILL TRACEABLE — NOT LIFTED` |
+
+ ## Synthèse
+
+@@ -20,18 +30,36 @@
+ |-----|------|
+ | V1 / V2 | intégrés `main` |
+ | V3 / V3.1 cadrage–conception–adoption | terminés (`12`/`13`/`14`) |
+-| **V3.1-D1 Delivery + correctif + revalidation** | **terminés** |
+-| **QA-G3** | **PASS Morris** |
+-| **PR readiness** | **READY FOR PR** — package 13 fichiers · **aucune** PR créée |
+-| V3.1-D2 / D3 | **non ouverts** · Figma D3 inchangé |
+-| V3.2 / V4–V6 | non autorisés |
++| **V3.1-D1** | **techniquement clos** sur `main` |
++| **V3.1-D2 FA/TA / backlog** | **adoptés / validé** |
++| **Delivery D2-A** | **complète localement** |
++| **QA D2-A initiale** | **FAIL** · R-QA-D2A-01 |
++| **Delivery corrective** | **complète localement** |
++| **QA revalidation** | **PASS** · R-QA-D2A-01 **CLOSED** |
++| **QA-G3** | **NOT DECIDED** |
++| Delivery D2-B/C | **fermées** |
++| D2-D extensions | **gated** |
++| V3.1-D3 | **fermé** · réserve Figma |
+
+-**R-V3.1-CATALOG-01 :** contrat résolu · runtime D1 · validateur corrigé · QA-G3 PASS · orchestration **pending D2**.
++**INHERITED-R-01 (README) :** condensation framing — **ACCEPTED — STILL TRACEABLE — NOT LIFTED**.
+
+ ## Gate candidat suivant
+
+-`GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D1 CYCLE TYPE CATALOG AND MANDATORY CKC MAPPING — USE APPROVED PR PACKAGE — TARGET MAIN — NO MERGE — NO D2 — NO UI — NO CREATECYCLE`
++```text
++GO ACCEPT QA-G3 SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
++ACCEPT QA REVALIDATION VERDICT AND R-QA-D2A-01 CLOSURE —
++PR READINESS NEXT —
++NO COMMIT —
++NO PUSH —
++NO PR —
++NO D2-B —
++NO D2-C —
++NO D3 —
++NO UI —
++NO CREATECYCLE —
++NO METHOD PROMOTION
++```
+
+ ## Verdict
+
+-`V3.1-D1 PR READINESS COMPLETE — READY FOR PR — QA-G3 PASS RECORDED — PR PACKAGE COMPLETE — COMMIT PUSH AND PR REQUIRE MORRIS GO — D2/D3 NOT AUTHORIZED`
++`V3.1-D2-A INDEPENDENT QA REVALIDATION PASS — R-QA-D2A-01 CLOSED BY REPRODUCIBLE QA EVIDENCE — PUBLIC CATALOG FINGERPRINT BINDING VERIFIED — SIX HISTORICAL BINDING FAILURES NOW PASS — ERROR PRECEDENCE VERIFIED — HASH-A UNCHANGED — QA TESTS UNCHANGED — D1 AND D2-A FULL NON-REGRESSION PASS — NO CORRECTIVE IMPLEMENTATION DURING QA — QA-G3 MORRIS DECISION REQUIRED — NOT PR READY — NO D2-B — NO D2-C — NO D2-D — NO D3 — NO UI — NO CREATECYCLE — NO PROJECT COMMIT — NO PROJECT PUSH — NO PR`
+```
```

## Preuves techniques
TECHNICAL EVIDENCE CARRIED FORWARD BY HASH IDENTITY —
913/913, TYPECHECK, LINT AND BUILD FROM PR READINESS REMAIN APPLICABLE.

## Réserves
R-PR-D2A-01…03 OPEN mineures · INHERITED-R-01 NOT LIFTED · R-PR-D2A-04 CLOSED.
Plan 2 commits + body rapport 04 applicables.

## Rapport temporaire complet
# V3.1-D2-A — PR Readiness Corrective Report (Critical / DOC)

## 1. Métadonnées
Date/heure/fuseau : 2026-08-02 14:22:29 CEST (+0200)
Rôle Cursor : cycle 13 PR readiness corrective documentaire
Profil : **Critical** · Typologie : **DOC**

## 2. Gate Morris
```text
GO PR READINESS CORRECTIVE SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
REMOVE STALE “PR READINESS NON OUVERTE” STATUS FROM LIVING REGISTERS —
PRESERVE ALL CODE, TESTS, REPORTS 01–04 AND QA-G3 EVIDENCE —
RECHECK TWENTY-FILE PACKAGE —
NO COMMIT —
NO PUSH —
NO PR —
NO D2-B —
NO D2-C —
NO D3 —
NO METHOD PROMOTION
```

## 3. CKC
Fallback carte synthétique + méthode §4.13 · method-candidate · `executionAuthority=false`.

## 4. Git Truth
```text
2026-08-02 14:21:46 CEST (+0200)
BRANCH=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
ORIGIN_MAIN=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
DIVERGENCE=0	0
HANDOFF_TIP=a275ce48bbb5e3428f517079decd1b76ea42c5df
HANDOFF_BLOB=987129bbf541c55c5a2a1b64a020a0de5fbe0bf9
WORKTREES=77
STAGED=empty
DELIVERY_REMOTE=0
STALE_OCCURRENCES=2
```

## 5. Handoff source
Tip `a275ce48…` · blob `987129bb…` · archive PR readiness préservée.

## 6. Finding R-PR-D2A-04
Incohérence documentaire : statut READY WITH RESERVES coexistant avec « PR readiness D2-A — non ouverte ».
Sévérité pré-cycle : MAJEURE. Statut post-cycle : **CLOSED — STALE LIVING-REGISTRY STATUS REMOVED**.

## 7. Occurrences avant correction
Exactement 2 :
- framing/08 ligne 59
- framing/19 ligne 872

## 8–9. Contextes avant
### 08
```text
| Architecture fonctionnelle D2 | **adoptée (FA-C)** — [`17`](./17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md) · D-V3.1-D2-FA-01…12 **ADOPTED BY MORRIS** |
| Architecture technique D2 | **adoptée** — [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
| Backlog D2-A/B/C | **validé** — [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) · 17 stories préservées |
| Delivery D2-A | **complète localement** — contrats, HASH-A, projection pure · [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
| QA D2-A | **exécutée — FAIL Cursor** · R-QA-D2A-01 bloquante · [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
| Delivery corrective D2-A | **complète localement** · [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) |
| QA revalidation D2-A | **PASS** · R-QA-D2A-01 **CLOSED** · [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) |
| QA-G3 D2-A | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST |
| PR readiness D2-A | **READY FOR PR WITH RESERVES** · [04](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md) · commit/push/PR non exécutés |
| PR readiness D2-A | **non ouverte** |
| Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
| Delivery D2-C | **fermée** |
| D2-D (extensions) | **gated** · non ouvert |
| D3 | **non ouvert** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
| **V3.1-D2** | Projection · resolver · QualifyCycle bridge | **cadrage arbitré** · **conception validée** · **FA-C adoptée** · **TA adoptée** · **backlog validé** · D2-A Delivery/QA/correctif/revalidation **PASS** · QA-G3 **ACCEPTED** · PR readiness **READY WITH RESERVES** · commit/push/PR non exécutés · D2-B/C **fermées** · slicing **A→B→C** · D2-D gated |
```
### 19
```text
| Branche locale | `delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection` créée depuis `e1befcb8…` |
| BL-D2-A-01 | **exécutée** — contrats D2-A et projection fingerprint fermée |
| BL-D2-A-02 | **exécutée** — HASH-A statique + garde SHA-256 test-only |
| BL-D2-A-03 | **exécutée** — Catalog Projection pure et fail-closed |
| BL-D2-A-04 | **exécutée** — 24 tests D2-A + non-régression D1 |
| Tests ciblés | fingerprint **8/8** · projection **16/16** |
| Baseline pré-mutation | catalogue D1 **46/46** · cycle OA **94/94** |
| Delivery D2-A | **complète localement** |
| QA D2-A indépendante | **exécutée — FAIL** · voir registre AI |
| Delivery corrective D2-A | **complète localement** · voir registre AJ |
| QA revalidation D2-A | **PASS** · voir registre AK |
| QA-G3 / PR readiness D2-A | **QA-G3 ACCEPTED** · readiness **READY WITH RESERVES** · voir registre AL |
| PR readiness D2-A | **non ouverte** |
| D2-B / D2-C | **fermés** — aucun élément implémenté |
| D2-D / D3 | **fermés** |
| Git projet | aucun commit · aucun push · aucune PR |

**Statut d'exécution :**
`D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY`.
```

## 10. Empreintes pré-correctif
```text
2026-08-02 14:21:46 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  blob=b436ee328fa9dfdb1d6eb3bc165dad285723113d
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=fe4d6cee6be7e232eb662e44b9e562067650a2a762dd058efd0eaf392a385882  blob=93ca7a25f544bda5f9dbdd2f72f46801f372528c
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=6a690a2c0d03f41af75e3578cc0f09508a09ce0893340486227d92555c852e94  blob=008db361ce7e3757880c5dedd577cdf26a371d2a
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=22e47628ffeaf52001635faf7b67fec7d383ce0e14185e25c6bd0a166b6bde5f  blob=18ecc21bd815684b8ccfca4664c145bf69422193
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=1b2cbe9b847bfbab5674430b4e488216197a08058a68d98369da675d676d55c8  blob=ef9db9c0c600e330897220a31dcc62fdc1ba99db
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  blob=caaddbaa8a0de6596e5382f3f02d83643a896e2b
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md  sha256=9388f3c7eaec6758153093f8ca689b65793d8fb7c22396754a7737c061e8ba1b  blob=e386d8b1f283b349b18ff049b4e0fc557a1a81b0
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md  sha256=0492b2431881323b0496c7efa6d2c0765c9e66c498ea1044d7d349b0b84ab2ec  blob=02abb0d8f50c41536403a404b57b4b4a36942b96
```

## 11. Diff exact du correctif
### 08
```diff
--- .tmp-sfia-review/v3-1-d2-a-pr-corrective-08-before.md	2026-08-02 14:11:00
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md	2026-08-02 14:21:46
@@ -56,7 +56,6 @@
 | QA revalidation D2-A | **PASS** · R-QA-D2A-01 **CLOSED** · [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) |
 | QA-G3 D2-A | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST |
 | PR readiness D2-A | **READY FOR PR WITH RESERVES** · [04](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md) · commit/push/PR non exécutés |
-| PR readiness D2-A | **non ouverte** |
 | Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
 | Delivery D2-C | **fermée** |
 | D2-D (extensions) | **gated** · non ouvert |
```
### 19
```diff
--- .tmp-sfia-review/v3-1-d2-a-pr-corrective-19-before.md	2026-08-02 14:11:00
+++ projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md	2026-08-02 14:21:46
@@ -869,7 +869,6 @@
 | Delivery corrective D2-A | **complète localement** · voir registre AJ |
 | QA revalidation D2-A | **PASS** · voir registre AK |
 | QA-G3 / PR readiness D2-A | **QA-G3 ACCEPTED** · readiness **READY WITH RESERVES** · voir registre AL |
-| PR readiness D2-A | **non ouverte** |
 | D2-B / D2-C | **fermés** — aucun élément implémenté |
 | D2-D / D3 | **fermés** |
 | Git projet | aucun commit · aucun push · aucune PR |
```
Total cycle : **2 lignes supprimées · 0 ajoutée**.

## 12. Occurrences après
Recherche `rg -nF '| PR readiness D2-A | **non ouverte** |'` sur registres vivants : **aucune**.

## 13. Contextes après
### 08
```text
| Architecture technique D2 | **adoptée** — [`18`](./18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md) · D-V3.1-D2-TA-01…12 **ADOPTED BY MORRIS** |
| Backlog D2-A/B/C | **validé** — [`19`](./19-v3-1-d2-a-b-c-delivery-backlog.md) · 17 stories préservées |
| Delivery D2-A | **complète localement** — contrats, HASH-A, projection pure · [rapport](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md) |
| QA D2-A | **exécutée — FAIL Cursor** · R-QA-D2A-01 bloquante · [01](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md) |
| Delivery corrective D2-A | **complète localement** · [02](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md) |
| QA revalidation D2-A | **PASS** · R-QA-D2A-01 **CLOSED** · [03](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md) |
| QA-G3 D2-A | **ACCEPTED BY MORRIS** — 2026-08-02 14:01 CEST |
| PR readiness D2-A | **READY FOR PR WITH RESERVES** · [04](../first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md) · commit/push/PR non exécutés |
| Delivery D2-B | **fermée** — gate distinct requis après validation/intégration D2-A |
| Delivery D2-C | **fermée** |
| D2-D (extensions) | **gated** · non ouvert |
| D3 | **non ouvert** |

### Slicing CAT-08

| Lot | Contenu | Statut |
|-----|---------|--------|
| **V3.1-D1** | Catalogue · mapping · validateur | **intégré `main`** · capitalisation REX publiée |
```
### 19
```text
| BL-D2-A-01 | **exécutée** — contrats D2-A et projection fingerprint fermée |
| BL-D2-A-02 | **exécutée** — HASH-A statique + garde SHA-256 test-only |
| BL-D2-A-03 | **exécutée** — Catalog Projection pure et fail-closed |
| BL-D2-A-04 | **exécutée** — 24 tests D2-A + non-régression D1 |
| Tests ciblés | fingerprint **8/8** · projection **16/16** |
| Baseline pré-mutation | catalogue D1 **46/46** · cycle OA **94/94** |
| Delivery D2-A | **complète localement** |
| QA D2-A indépendante | **exécutée — FAIL** · voir registre AI |
| Delivery corrective D2-A | **complète localement** · voir registre AJ |
| QA revalidation D2-A | **PASS** · voir registre AK |
| QA-G3 / PR readiness D2-A | **QA-G3 ACCEPTED** · readiness **READY WITH RESERVES** · voir registre AL |
| D2-B / D2-C | **fermés** — aucun élément implémenté |
| D2-D / D3 | **fermés** |
| Git projet | aucun commit · aucun push · aucune PR |

**Statut d'exécution :**
`D2-A DELIVERY COMPLETE LOCALLY — READY FOR QA — NOT PR READY`.
```

## 14. Statuts valides préservés
QA-G3 ACCEPTED · R-QA-D2A-01 CLOSED · READY FOR PR WITH RESERVES · commit/push/PR non exécutés · D2-B/C fermés.

## 15. Empreintes post-correctif
```text
2026-08-02 14:22:29 CEST (+0200)
projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts  sha256=a6ca59664db98affe370401694c86f89b9d22c13037bd3158309ee11c84bd867  blob=d6114109dd0acedfddfff6401db62bb58ffbfb26  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts  sha256=f19680055679c3fde0f449d2ea8f7f6209eaa1c33ce8a8d3254499457326181c  blob=3c51ccc7e3db96a9c97d769b5b3212aeffa53ceb  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts  sha256=235cc0030c5e42340086ef9e4452d668edaa440d6aabf11c27af1be18ca60a5d  blob=b436ee328fa9dfdb1d6eb3bc165dad285723113d  match_pre=True
projects/sfia-studio/app/lib/oa/cycle/index.ts  sha256=51b8517e62ab3d322c16fa05b2a0be437e0ab668e89411bb37a9f744d8b14800  blob=9ad18b7e4d873c9930b6804fc13f19499911c740  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts  sha256=75957e5ac1c5a213fcab5e772d582757e2c270331305d747b69a9d079d0eb680  blob=0d06190d253d77c868690bf709bb32b86c3a66a2  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts  sha256=136dec5d7439054f106e509b6d309a441fd1e0f5e7bcd7173f09f0c7c49451b6  blob=a744504fd5d2108cb49e74ad0548c7e356deeb56  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts  sha256=4386bfec4ee2ca59b725703a000738c6e27d32c276c228c10ff96a4f0ab242f6  blob=aa91cc5c36ea2dc27f36e5e8db89cd066fb5166b  match_pre=True
projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts  sha256=af7c6418dcac125ecad43464c5a7bb7079e60097139ef6f5be662e9d2795864e  blob=1ba9408249d7489bf1d30687129bc04f73e1214c  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md  sha256=fe4d6cee6be7e232eb662e44b9e562067650a2a762dd058efd0eaf392a385882  blob=93ca7a25f544bda5f9dbdd2f72f46801f372528c  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md  sha256=fe3c40e86e77dbccf3e3ba18e389cac69e2999d8bb291534d4fe86ada70b44f2  blob=f011b4e4533349f4eabe2d49d8d78456325d8fce  match_pre=False
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md  sha256=534904ea71555d89388c03a72ef84418ea4ce6a1c67cbbb6c7a03a0f559bb9bc  blob=c09f234c8257355f64fcab5c6405a3595a54e5ff  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md  sha256=d65088ac9a6546b8c77ca00981bc101e5d412431948c95b6455fc1adbb349bf4  blob=928d60a7b9b6b0bda2831a1d31ba0ba11d362370  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md  sha256=968add603817539b01196b00b5f6f37d1031638b544a8b94e4a2bdb5f98e3af5  blob=9011736593b8bbd6ec0807a116c9b38a3a32e1f1  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md  sha256=4d16cae594168ae8bbcdf5eabd085420fc132358c9afe2a0bd0de207067ceab1  blob=c4d88af2725d885084f55d3a1336ac61d005759f  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md  sha256=b5234b4add67e97d81fab5c493993662ebbc9666f7556490b44f63cbdf0524e9  blob=47a3037b3fab652423c2b282068963568b2fcdcd  match_pre=False
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md  sha256=1b2cbe9b847bfbab5674430b4e488216197a08058a68d98369da675d676d55c8  blob=ef9db9c0c600e330897220a31dcc62fdc1ba99db  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md  sha256=4013fe2163e7faed9d88b8b8f6d280fa15b51d18aaf2cdcd770e332e14d6a82c  blob=8fbbd38d379fa406790c96d9a1df2bcbb47a641d  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md  sha256=fcc238a5f7d2b67af79af17d1e981c7d85ebb9be4ae4a14127a9ecd231b2a30c  blob=caaddbaa8a0de6596e5382f3f02d83643a896e2b  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md  sha256=9388f3c7eaec6758153093f8ca689b65793d8fb7c22396754a7737c061e8ba1b  blob=e386d8b1f283b349b18ff049b4e0fc557a1a81b0  match_pre=True
projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md  sha256=0492b2431881323b0496c7efa6d2c0765c9e66c498ea1044d7d349b0b84ab2ec  blob=02abb0d8f50c41536403a404b57b4b4a36942b96  match_pre=True
```
Seuls 08 et 19 diffèrent.

## 16. Code/tests/rapports 01–04 inchangés
match_pre=True pour les 18 autres fichiers package, y compris code, tests, README Delivery, framing README, 15–18, 01–04.

## 17–18. Package 20 fichiers et stats
```text
1	projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
2	projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
3	projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
4	projects/sfia-studio/app/lib/oa/cycle/index.ts
5	projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
6	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
7	projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
8	projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
9	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
10	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
11	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
12	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
13	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
14	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
15	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
16	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
17	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
18	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
19	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
20	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
```
```text
files=20
tracked_files=3 add=68 del=26
untracked_files=17 add=11125 del=0
combined_add=11193 del=26
cycle_corrective_delta=08:-1 19:-1 add=0
top5_by_bytes:
  118180	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
  83160	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
  76911	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
  63695	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
  49368	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
binaries=none
files_gt_1MiB=none
```

## 19. Scope recheck
Résultat utile unique D2-A · pas d’implémentation D2-B/C · docs 15–19 prospectives · rapports 01–04 intacts · contradiction de statut levée.

## 20. Preuves techniques
TECHNICAL EVIDENCE CARRIED FORWARD BY HASH IDENTITY —
913/913, TYPECHECK, LINT AND BUILD FROM PR READINESS REMAIN APPLICABLE.
(Non rejoués ; empreintes code/tests identiques.)

## 21–22. Réserves
R-PR-D2A-01…03 : OPEN — acceptable/maîtrisée.
INHERITED-R-01 : NOT LIFTED.
R-PR-D2A-04 : **CLOSED**.

## 23–25. Commits / titre / body
Plan 2 commits et body du rapport 04 **toujours applicables** (04 inchangé).

## 26. Absence action Git
Aucun staging · commit · push · PR.

## 27. Verdict
```text
V3.1-D2-A PR READINESS CORRECTIVE COMPLETE —
R-PR-D2A-04 CLOSED —
STALE “PR READINESS NON OUVERTE” STATUS REMOVED FROM BOTH LIVING REGISTERS —
TWENTY-FILE PACKAGE REVERIFIED —
CODE TESTS AND REPORTS 01–04 UNCHANGED —
QA-G3 ACCEPTED —
R-QA-D2A-01 CLOSED —
READY FOR PR WITH CLASSIFIED MINOR RESERVES CONFIRMED —
NO BLOCKING OR MAJOR RESERVE —
NO STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
D2-B AND D2-C REMAIN CLOSED —
D3 NOT OPENED
```

Statut :
`V3.1-D2-A READY FOR PR WITH RESERVES — R-PR-D2A-01…03 REMAIN MINOR — INHERITED-R-01 NOT LIFTED — COMMIT PUSH AND DRAFT PR REQUIRE DISTINCT MORRIS GO`

## 28. Gate suivant
```text
GO COMMIT PUSH AND OPEN DRAFT PR SFIA STUDIO V3.1-D2-A CATALOG PROJECTION —
USE APPROVED TWENTY-FILE PR PACKAGE AND TWO-COMMIT PLAN —
TARGET MAIN —
NO MERGE —
NO D2-B —
NO D2-C —
NO D3 —
NO UI —
NO CREATECYCLE —
NO METHOD PROMOTION
```


## État Git final
```text
2026-08-02 14:22:29 CEST (+0200)
branch=delivery/sfia-studio-visible-slice-v3-1-d2-a-catalog-projection
HEAD=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
origin/main=e1befcb80ed5e3c789a7de9036a8207d6b3e6771
divergence=0	0
staged=(empty)
cycle_delta=08:-1 19:-1
package_files=20
files=20
tracked_files=3 add=68 del=26
untracked_files=17 add=11125 del=0
combined_add=11193 del=26
cycle_corrective_delta=08:-1 19:-1 add=0
top5_by_bytes:
  118180	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
  83160	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
  76911	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
  63695	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
  49368	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
binaries=none
files_gt_1MiB=none

status=
 M projects/sfia-studio/app/lib/oa/cycle/index.ts
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/08-implementation-backlog-and-slicing.md
 M projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/README.md
?? .tmp-sfia-review/MERGE_SHA.txt
?? .tmp-sfia-review/_gen_d2a_corrective_reports.py
?? .tmp-sfia-review/_gen_d2a_pr_readiness_reports.py
?? .tmp-sfia-review/_gen_d2a_qa_reports.py
?? .tmp-sfia-review/_gen_d2a_qa_revalidation_reports.py
?? .tmp-sfia-review/_gen_d2a_reports.py
?? .tmp-sfia-review/_gen_doc19.py
?? .tmp-sfia-review/archive-comparison.txt
?? .tmp-sfia-review/archive-source-sha256.txt
?? .tmp-sfia-review/archive-target-sha256.txt
?? .tmp-sfia-review/before-corrective/01-qa-validation-report.md
?? .tmp-sfia-review/before-corrective/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-corrective/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-corrective/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-corrective/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-corrective/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-corrective/d1-README.md
?? .tmp-sfia-review/before-corrective/framing-README.md
?? .tmp-sfia-review/before-corrective/index.ts
?? .tmp-sfia-review/before-d1/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-d1/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-d1/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-d1/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-d1/README.md
?? .tmp-sfia-review/before-pr-readiness/01-qa-validation-report.md
?? .tmp-sfia-review/before-pr-readiness/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-pr-readiness/03-qa-revalidation-report.md
?? .tmp-sfia-review/before-pr-readiness/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-pr-readiness/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-pr-readiness/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-pr-readiness/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-pr-readiness/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-pr-readiness/d1-README.md
?? .tmp-sfia-review/before-pr-readiness/framing-README.md
?? .tmp-sfia-review/before-pr-readiness/index.ts
?? .tmp-sfia-review/before-publication/01.md
?? .tmp-sfia-review/before-publication/02.md
?? .tmp-sfia-review/before-publication/03.md
?? .tmp-sfia-review/before-publication/04.md
?? .tmp-sfia-review/before-publication/08.md
?? .tmp-sfia-review/before-publication/12.md
?? .tmp-sfia-review/before-publication/13.md
?? .tmp-sfia-review/before-publication/14.md
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-publication/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-publication/d1-README.md
?? .tmp-sfia-review/before-publication/framing-README.md
?? .tmp-sfia-review/before-publication/index.ts
?? .tmp-sfia-review/before-qa/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-qa/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-qa/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-qa/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-qa/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-qa/d1-README.md
?? .tmp-sfia-review/before-qa/framing-README.md
?? .tmp-sfia-review/before-qa/index.ts
?? .tmp-sfia-review/before-revalidation/01-qa-validation-report.md
?? .tmp-sfia-review/before-revalidation/02-corrective-delivery-report.md
?? .tmp-sfia-review/before-revalidation/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before-revalidation/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before-revalidation/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before-revalidation/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.test.ts
?? .tmp-sfia-review/before-revalidation/cycleTypeCatalog.ts
?? .tmp-sfia-review/before-revalidation/d1-README.md
?? .tmp-sfia-review/before-revalidation/framing-README.md
?? .tmp-sfia-review/before-revalidation/index.ts
?? .tmp-sfia-review/before/08-implementation-backlog-and-slicing.md
?? .tmp-sfia-review/before/12-v3-cycle-recommendation-cadrage.md
?? .tmp-sfia-review/before/13-v3-1-profile-qualification-functional-design.md
?? .tmp-sfia-review/before/14-v3-1-cycle-type-catalog-functional-architecture.md
?? .tmp-sfia-review/before/README.md
?? .tmp-sfia-review/cap-truth.txt
?? .tmp-sfia-review/chatgpt-review.md
?? .tmp-sfia-review/ci-jobs.json
?? .tmp-sfia-review/ci-run.json
?? .tmp-sfia-review/evidence/v2-a2/01-initial.png
?? .tmp-sfia-review/evidence/v2-a2/02-validation-errors.png
?? .tmp-sfia-review/evidence/v2-a2/03-success-real-runtime.png
?? .tmp-sfia-review/evidence/v2-a3/01-workspace-missing.png
?? .tmp-sfia-review/evidence/v2-a3/02-workspace-after-create-not-found.png
?? .tmp-sfia-review/evidence/v2-a3/03-create-form-filled.png
?? .tmp-sfia-review/evidence/v2-a3/04-create-success.png
?? .tmp-sfia-review/evidence/v2-a3/05-workspace-loaded.png
?? .tmp-sfia-review/final-git-state.txt
?? .tmp-sfia-review/framing-README-main.md
?? .tmp-sfia-review/framing-README-pr.md
?? .tmp-sfia-review/local-numstat.txt
?? .tmp-sfia-review/main-worktree-inspection.txt
?? .tmp-sfia-review/main-worktree-status.txt
?? .tmp-sfia-review/main-worktree-untracked-evidence.txt
?? .tmp-sfia-review/merge-commit-source.txt
?? .tmp-sfia-review/merge-readiness-truth.txt
?? .tmp-sfia-review/merge-revalidation.txt
?? .tmp-sfia-review/merge-truth.txt
?? .tmp-sfia-review/pr-296-after-api.json
?? .tmp-sfia-review/pr-296-after-body-metadata.json
?? .tmp-sfia-review/pr-296-after-merge.json
?? .tmp-sfia-review/pr-296-archive-and-cleanup-report.md
?? .tmp-sfia-review/pr-296-before-metadata.json
?? .tmp-sfia-review/pr-296-before-view.json
?? .tmp-sfia-review/pr-296-before.json
?? .tmp-sfia-review/pr-296-body-after.md
?? .tmp-sfia-review/pr-296-body-api-json.md
?? .tmp-sfia-review/pr-296-body-api-raw.md
?? .tmp-sfia-review/pr-296-body-authorized.diff
?? .tmp-sfia-review/pr-296-body-before-vs-remote-after.diff
?? .tmp-sfia-review/pr-296-body-before.md
?? .tmp-sfia-review/pr-296-body-concurrent-check.md
?? .tmp-sfia-review/pr-296-body-final.md
?? .tmp-sfia-review/pr-296-body-hashes.txt
?? .tmp-sfia-review/pr-296-body-remote-after.md
?? .tmp-sfia-review/pr-296-body-update-response.json
?? .tmp-sfia-review/pr-296-body-update.json
?? .tmp-sfia-review/pr-296-body.md
?? .tmp-sfia-review/pr-296-checks.json
?? .tmp-sfia-review/pr-296-checks.txt
?? .tmp-sfia-review/pr-296-comments.json
?? .tmp-sfia-review/pr-296-commits.txt
?? .tmp-sfia-review/pr-296-concurrent-meta.json
?? .tmp-sfia-review/pr-296-concurrent.json
?? .tmp-sfia-review/pr-296-diff-correspondence.txt
?? .tmp-sfia-review/pr-296-fetch-main-attempt.txt
?? .tmp-sfia-review/pr-296-files.txt
?? .tmp-sfia-review/pr-296-final-metadata.json
?? .tmp-sfia-review/pr-296-inline-comments-after.json
?? .tmp-sfia-review/pr-296-inline-comments-before.json
?? .tmp-sfia-review/pr-296-inline-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments-after.json
?? .tmp-sfia-review/pr-296-issue-comments-before.json
?? .tmp-sfia-review/pr-296-issue-comments-concurrent.json
?? .tmp-sfia-review/pr-296-issue-comments.json
?? .tmp-sfia-review/pr-296-jobs.json
?? .tmp-sfia-review/pr-296-merge-body-after.md
?? .tmp-sfia-review/pr-296-merge-body-authorized.diff
?? .tmp-sfia-review/pr-296-merge-body-before.md
?? .tmp-sfia-review/pr-296-merge-body-concurrent.md
?? .tmp-sfia-review/pr-296-merge-body-final.md
?? .tmp-sfia-review/pr-296-merge-body-remote-after.md
?? .tmp-sfia-review/pr-296-merge-report.md
?? .tmp-sfia-review/pr-296-merge-response.json
?? .tmp-sfia-review/pr-296-metadata.json
?? .tmp-sfia-review/pr-296-pm-inline-comments.json
?? .tmp-sfia-review/pr-296-pm-issue-comments.json
?? .tmp-sfia-review/pr-296-pm-reviews.json
?? .tmp-sfia-review/pr-296-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-post-merge-runs.json
?? .tmp-sfia-review/pr-296-postmerge-body.md
?? .tmp-sfia-review/pr-296-postmerge-jobs.json
?? .tmp-sfia-review/pr-296-postmerge-pr.json
?? .tmp-sfia-review/pr-296-postmerge-run.json
?? .tmp-sfia-review/pr-296-pre-merge.json
?? .tmp-sfia-review/pr-296-pre-ready.json
?? .tmp-sfia-review/pr-296-ready-transition-report.md
?? .tmp-sfia-review/pr-296-remote-review-report.md
?? .tmp-sfia-review/pr-296-remote.diff
?? .tmp-sfia-review/pr-296-resume-inline-comments.json
?? .tmp-sfia-review/pr-296-resume-issue-comments.json
?? .tmp-sfia-review/pr-296-resume-pr.json
?? .tmp-sfia-review/pr-296-resume-reviews.json
?? .tmp-sfia-review/pr-296-resumed-post-merge-cleanup-report.md
?? .tmp-sfia-review/pr-296-reviews-after.json
?? .tmp-sfia-review/pr-296-reviews-before.json
?? .tmp-sfia-review/pr-296-reviews-concurrent.json
?? .tmp-sfia-review/pr-296-reviews.json
?? .tmp-sfia-review/pr-296-run.json
?? .tmp-sfia-review/pr-296-runs-after.json
?? .tmp-sfia-review/pr-296-switch-main-attempt.txt
?? .tmp-sfia-review/pr-296-view.json
?? .tmp-sfia-review/pr-297-after-ready.json
?? .tmp-sfia-review/pr-297-before-ready.json
?? .tmp-sfia-review/pr-297-body-after-ci-checkbox.md
?? .tmp-sfia-review/pr-297-body-after-merge-go.md
?? .tmp-sfia-review/pr-297-body-after-publish.md
?? .tmp-sfia-review/pr-297-body-before-merge.md
?? .tmp-sfia-review/pr-297-body-before-ready.md
?? .tmp-sfia-review/pr-297-body-checkbox-diff.patch
?? .tmp-sfia-review/pr-297-body-current.md
?? .tmp-sfia-review/pr-297-body-final-merged.md
?? .tmp-sfia-review/pr-297-body-merge-diff.patch
?? .tmp-sfia-review/pr-297-body-only-correction-pack.md
?? .tmp-sfia-review/pr-297-body-ready-f02-correction.md
?? .tmp-sfia-review/pr-297-branch-inventory.txt
?? .tmp-sfia-review/pr-297-ci-premerge.json
?? .tmp-sfia-review/pr-297-cleanup-before-after-comparison.json
?? .tmp-sfia-review/pr-297-cleanup-chatgpt-review-preserved.md
?? .tmp-sfia-review/pr-297-cleanup-ci.json
?? .tmp-sfia-review/pr-297-cleanup-command-log.txt
?? .tmp-sfia-review/pr-297-cleanup-final-state.txt
?? .tmp-sfia-review/pr-297-cleanup-findings.md
?? .tmp-sfia-review/pr-297-cleanup-git-truth-initial.txt
?? .tmp-sfia-review/pr-297-cleanup-handoff-ahead-note.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-before.txt
?? .tmp-sfia-review/pr-297-cleanup-local-branches-final.txt
?? .tmp-sfia-review/pr-297-cleanup-pr.json
?? .tmp-sfia-review/pr-297-cleanup-readiness.md
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-before.txt
?? .tmp-sfia-review/pr-297-cleanup-remote-heads-final.txt
?? .tmp-sfia-review/pr-297-cleanup-state-before-handoff.txt
?? .tmp-sfia-review/pr-297-cleanup-tmp-evidence-before.json
?? .tmp-sfia-review/pr-297-cleanup-tmp-evidence-verification.md
?? .tmp-sfia-review/pr-297-cleanup-worktrees-after-source-cleanup.txt
?? .tmp-sfia-review/pr-297-cleanup-worktrees-before.txt
?? .tmp-sfia-review/pr-297-cleanup-worktrees-final.txt
?? .tmp-sfia-review/pr-297-document-05.md
?? .tmp-sfia-review/pr-297-final-findings.md
?? .tmp-sfia-review/pr-297-main-proof.txt
?? .tmp-sfia-review/pr-297-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-merge-decision-pack.md
?? .tmp-sfia-review/pr-297-merge-readiness-body.md
?? .tmp-sfia-review/pr-297-merge-readiness-findings.md
?? .tmp-sfia-review/pr-297-merge-readiness.diff
?? .tmp-sfia-review/pr-297-merge-readiness.json
?? .tmp-sfia-review/pr-297-pm-inline-comments.json
?? .tmp-sfia-review/pr-297-pm-issue-comments.json
?? .tmp-sfia-review/pr-297-pm-reviews.json
?? .tmp-sfia-review/pr-297-post-merge-body.md
?? .tmp-sfia-review/pr-297-post-merge-ci-initial.json
?? .tmp-sfia-review/pr-297-post-merge-ci-list.json
?? .tmp-sfia-review/pr-297-post-merge-ci-status.txt
?? .tmp-sfia-review/pr-297-post-merge-ci-view.txt
?? .tmp-sfia-review/pr-297-post-merge-ci.json
?? .tmp-sfia-review/pr-297-post-merge-commit-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-doc-proof.txt
?? .tmp-sfia-review/pr-297-post-merge-findings.md
?? .tmp-sfia-review/pr-297-post-merge-pr.json
?? .tmp-sfia-review/pr-297-post-merge-validation-chatgpt-review-preserved.md
?? .tmp-sfia-review/pr-297-post-merge.json
?? .tmp-sfia-review/pr-297-postmerge-final-git.txt
?? .tmp-sfia-review/pr-297-postmerge-git-truth.txt
?? .tmp-sfia-review/pr-297-pre-merge-final.json
?? .tmp-sfia-review/pr-297-pre-merge.json
?? .tmp-sfia-review/pr-297-pre-ready.json
?? .tmp-sfia-review/pr-297-premerge-ci-ref.json
?? .tmp-sfia-review/pr-297-ready-f02-body-diff.patch
?? .tmp-sfia-review/pr-297-ready-findings.md
?? .tmp-sfia-review/pr-297-source-one-file.diff
?? .tmp-sfia-review/pr-297-worktree-inventory.txt
?? .tmp-sfia-review/pr-297-worktree-paths.txt
?? .tmp-sfia-review/pr-297-worktree-statuses.txt
?? .tmp-sfia-review/pr-297-worktree-summary.json
?? .tmp-sfia-review/pr-body-v2-a3.md
?? .tmp-sfia-review/pr-body.md
?? .tmp-sfia-review/pr-checks.txt
?? .tmp-sfia-review/pr-readiness-truth.txt
?? .tmp-sfia-review/primary-truth.txt
?? .tmp-sfia-review/pub-truth.txt
?? .tmp-sfia-review/ready-final-git.txt
?? .tmp-sfia-review/ready-truth.txt
?? .tmp-sfia-review/remote-review-commit.txt
?? .tmp-sfia-review/remote-review-truth.txt
?? .tmp-sfia-review/review-timestamp-cleanup.txt
?? .tmp-sfia-review/review-timestamp-d2-fa.txt
?? .tmp-sfia-review/review-timestamp-d2-fd.txt
?? .tmp-sfia-review/review-timestamp-d2.txt
?? .tmp-sfia-review/review-timestamp.txt
?? .tmp-sfia-review/source-inspection.txt
?? .tmp-sfia-review/v3-1-d1-cap-source-commit.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-body-delta.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-ci-initial.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-cleanup-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-commit-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-merge-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package-manifest.md
?? .tmp-sfia-review/v3-1-d1-capitalization-package.diff
?? .tmp-sfia-review/v3-1-d1-capitalization-post-merge-validation-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-proof.json
?? .tmp-sfia-review/v3-1-d1-capitalization-pr-readiness-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-publication-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-ready-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-body.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci-checks.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-ci.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-diff.patch
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-findings.md
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-pr.json
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-proof.txt
?? .tmp-sfia-review/v3-1-d1-capitalization-remote-review-report.md
?? .tmp-sfia-review/v3-1-d1-capitalization-rex-report.md
?? .tmp-sfia-review/v3-1-d1-pr-body.md
?? .tmp-sfia-review/v3-1-d2-08-after.md
?? .tmp-sfia-review/v3-1-d2-08.diff
?? .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection-before.ts
?? .tmp-sfia-review/v3-1-d2-a-corrective-catalogProjection.diff
?? .tmp-sfia-review/v3-1-d2-a-corrective-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-a-corrective-delivery-report.md
?? .tmp-sfia-review/v3-1-d2-a-corrective-final-state.txt
?? .tmp-sfia-review/v3-1-d2-a-corrective-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-a-corrective-post-results.txt
?? .tmp-sfia-review/v3-1-d2-a-corrective-pre-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-corrective-red-baseline.txt
?? .tmp-sfia-review/v3-1-d2-a-delivery-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-a-delivery-report.md
?? .tmp-sfia-review/v3-1-d2-a-post-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-post-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-08-before.md
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-08-context-before.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-08.diff
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-19-before.md
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-19-context-before.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-19.diff
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-package-combined.diff
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-package-files.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-package-stats.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-package-tracked.diff
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-package-untracked.diff
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-post-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-corrective-pre-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-package-combined.diff
?? .tmp-sfia-review/v3-1-d2-a-pr-package-files.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-package-stats.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-package-tracked.diff
?? .tmp-sfia-review/v3-1-d2-a-pr-package-untracked.diff
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-corrective-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-corrective-report.md
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-final-state.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-hygiene.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-pre-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-report.md
?? .tmp-sfia-review/v3-1-d2-a-pr-readiness-results.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-doc-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-pre-branch-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-a-qa-command-results.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-final-state.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-post-protected-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-pre-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-report.md
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-corrective-diff.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-final-state.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-post-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-pre-hashes.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-report.md
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-results.txt
?? .tmp-sfia-review/v3-1-d2-a-qa-revalidation-rv-adhoc.txt
?? .tmp-sfia-review/v3-1-d2-backlog-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-backlog-final-state.txt
?? .tmp-sfia-review/v3-1-d2-backlog-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-backlog-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-backlog-report.md
?? .tmp-sfia-review/v3-1-d2-backlog-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-bl-doc18-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-decision-pack.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen-ta.md
?? .tmp-sfia-review/v3-1-d2-doc15-frozen.md
?? .tmp-sfia-review/v3-1-d2-doc16-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-doc16-frozen-ta.md
?? .tmp-sfia-review/v3-1-d2-doc17-frozen-bl.md
?? .tmp-sfia-review/v3-1-d2-document-15-after.md
?? .tmp-sfia-review/v3-1-d2-document-15.md
?? .tmp-sfia-review/v3-1-d2-document-16.md
?? .tmp-sfia-review/v3-1-d2-fa-doc16-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-fa-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-final-state.txt
?? .tmp-sfia-review/v3-1-d2-framing-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-framing-report.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-final-state.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-phrase-scan.txt
?? .tmp-sfia-review/v3-1-d2-functional-architecture-report.md
?? .tmp-sfia-review/v3-1-d2-functional-architecture-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-functional-design-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-functional-design-final-state.txt
?? .tmp-sfia-review/v3-1-d2-functional-design-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-functional-design-report.md
?? .tmp-sfia-review/v3-1-d2-functional-design-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-readme-after.md
?? .tmp-sfia-review/v3-1-d2-readme.diff
?? .tmp-sfia-review/v3-1-d2-source-inventory.md
?? .tmp-sfia-review/v3-1-d2-ta-doc17-modified-sections.md
?? .tmp-sfia-review/v3-1-d2-ta-phrase-scan.txt
?? .tmp-sfia-review/v3-1-d2-ta-pre-mutation-hashes.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-chatgpt-review-preserved.md
?? .tmp-sfia-review/v3-1-d2-technical-architecture-final-state.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-git-truth.txt
?? .tmp-sfia-review/v3-1-d2-technical-architecture-report.md
?? .tmp-sfia-review/v3-1-d2-technical-architecture-source-inventory.md
?? .tmp-sfia-review/worktree-after.txt
?? .tmp-sfia-review/worktree-before.txt
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.qa.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogFingerprint.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.qa.test.ts
?? projects/sfia-studio/app/__tests__/oa/cycle/catalogProjection.test.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogFingerprint.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/catalogProjection.ts
?? projects/sfia-studio/app/lib/oa/cycle/domain/ckcQualificationContracts.ts
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/15-v3-1-d2-ckc-resolver-qualify-cycle-bridge-cadrage.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/16-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-design.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/17-v3-1-d2-ckc-resolver-qualify-cycle-bridge-functional-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/18-v3-1-d2-ckc-resolver-qualify-cycle-bridge-technical-architecture.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-framing/19-v3-1-d2-a-b-c-delivery-backlog.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/01-qa-validation-report.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/02-corrective-delivery-report.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/03-qa-revalidation-report.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/04-pr-readiness-report.md
?? projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/first-user-visible-vertical-slice-v3-1-d2-a-catalog-projection/README.md
```

`REVIEW PACK FULL — COMPLETE`.

```text
V3.1-D2-A PR READINESS CORRECTIVE COMPLETE —
R-PR-D2A-04 CLOSED —
STALE “PR READINESS NON OUVERTE” STATUS REMOVED FROM BOTH LIVING REGISTERS —
TWENTY-FILE PACKAGE REVERIFIED —
CODE TESTS AND REPORTS 01–04 UNCHANGED —
QA-G3 ACCEPTED —
R-QA-D2A-01 CLOSED —
READY FOR PR WITH CLASSIFIED MINOR RESERVES CONFIRMED —
NO BLOCKING OR MAJOR RESERVE —
NO STAGING —
NO PROJECT COMMIT —
NO PROJECT PUSH —
NO PR —
D2-B AND D2-C REMAIN CLOSED —
D3 NOT OPENED
```
