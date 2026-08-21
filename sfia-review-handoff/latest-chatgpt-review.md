# ChatGPT Review Pack — SFIA Studio V3 CKC POST-VALIDATION TARGETED CORRECTION

**Niveau :** FULL ciblé
**Timestamp (Europe/Paris) :** 2026-08-21 21:31:20 CEST
**Workflow state (Review Pack only — NOT injected into CKC bodies) :**
POST-VALIDATION TARGETED CORRECTION APPLIED — TARGETED CHATGPT RE-REVIEW REQUIRED — MORRIS RECONFIRMATION REQUIRED BEFORE GIT INTEGRATION.

---

## 1. Local Git Truth

| Champ | Valeur |
| --- | --- |
| pwd | `/Users/morris/Projects/sfia-workspace` |
| repo | `mcleland147/sfia-workspace` |
| branch | `docs/sfia-studio-v3-ckc-corpus-authoring` |
| HEAD | `f1df10a935fbc9688b810bdc7749a3f3e9785429` |
| origin/main | `f1df10a935fbc9688b810bdc7749a3f3e9785429` |
| HEAD == origin/main == expected `f1df10a9…` | **YES** |
| project staged | **NONE** |
| project remote authoring branch | **ABSENTE** |
| project commit / push / PR | **NONE** |

```
?? .tmp-sfia-review/
?? projects/eventops-poc/
?? projects/flex-office-demo/
?? projects/sfia-studio/sfia-v3-framing/ckc/
```

Unrelated untracked preserved : `.tmp-sfia-review/` · `projects/eventops-poc/` · `projects/flex-office-demo/` · local corpus `ckc/`.

---

## 2. GO Morris consommé (exact)

SFIA STUDIO V3 CKC POST-VALIDATION TARGETED CORRECTION

Autorisation exacte :

- corriger uniquement :
  `projects/sfia-studio/sfia-v3-framing/ckc/12-observabilite-run-readiness.md`
  `projects/sfia-studio/sfia-v3-framing/ckc/15-capitalisation-rex.md`

- supprimer toute promotion implicite vers le profil Critical ;

- production / contexte doctrinal = SIGNAUX DE CRITICITÉ UNIQUEMENT ;

- Nora peut : CHALLENGE / RECOMMEND requalification Critical si matériellement justifiée / expliciter facteurs / ESCALATE gate humain ;

- Nora ne doit JAMAIS : auto-requalifier · imposer Critical · créer un gate · transformer Capitalization en Critical automatiquement.

INTERDIT : Roadmap · DoctrinePackage · runtime · Product Backlog · Delivery · REAL · stage/commit/push/PR projet.

Suite : correction locale → Review Pack/Handoff → ChatGPT targeted re-review → Morris reconfirmation → Git integration gate distinct.

---

## 3. Qualification

| Champ | Valeur |
| --- | --- |
| Cycle | 15 — Capitalisation / REX — post-validation targeted correction |
| Profil | Capitalization |
| Profondeur de contrôle | Critical |
| Typologie | CAPA / DOC |
| Capacité primaire | V3-F01 — CKC canonical cognitive layer |
| Milestone | CKC VALIDATED CORPUS — PRE-GIT TARGETED CORRECTION |
| Corpus | CONTENT VALIDATED BY MORRIS (historique gouvernance préservé) |
| Bytes post-correction | **PENDING CHATGPT TARGETED RE-REVIEW + MORRIS RECONFIRMATION** |
| ZERO REAL | YES |
| runtime v3 | NON ADOPTED |

La décision Morris de validation n'est **PAS** annulée. Les bytes corrigés ≠ automatiquement reconfirmés pour transport Git.

---

## 4. Baseline Review Handoff (pre-correction)

| Champ | Valeur |
| --- | --- |
| branch | `sfia/review-handoff` |
| commit | `1afe05676517093cfa2f1653345c74edbc347950` |
| canonical blob | `5c17bd3ecfb63623610a72514c09682703ce09f6` |
| path | `sfia-review-handoff/latest-chatgpt-review.md` |
| remote readback | **VERIFIED** |
| VALIDATED_CORPUS_BASELINE_MATCH | **YES** (18/18 files extracted; local == handoff before edit) |
| baseline review-set digest | `cf6ca40c5e3d1b497ab273263483a3d6d53042dc856d77a8dc23fd9e0981a1c3` |
| old SHA12 | `335e0a193a814712185e236af44f186148a1c44fa7c424003ce7767f4ddfc3f2` |
| old SHA15 | `84c75c46e83023aca86e65408e87845b6135269c27b0c026de8a357a0c0633a2` |

---

## 5. Convergence pre-check

| Check | Verdict |
| --- | --- |
| V3-F01 | YES |
| snapshot `0.1.0-v3.1-d1` | YES |
| 15 = snapshot measure only | YES |
| corpus 15/15 CONTENT VALIDATED BY MORRIS | YES (status preserved) |
| CKC-ID-CONVENTION CLOSED | YES |
| CKC-RV-01…08 CLOSED | YES |
| Evidence business-first PASS | YES (unchanged) |
| Resume continuity PASS | YES (unchanged) |
| individual/cross validation PASS | YES (evidence files UNCHANGED) |
| DP NOT INTEGRATED | YES |
| runtime NOT MODIFIED | YES |
| Nora consumption NOT PROVEN | YES |
| Product Backlog / Delivery | NO |
| ZERO REAL / runtime v3 NON ADOPTED | YES |
| ROADMAP-SYNC-CKC-CONTENT-VALIDATION | **OPEN** (hors scope) |

**Verdict :** CONVERGENCE CONTEXT LOADED

Prochaine capacité : targeted ChatGPT re-review → Morris reconfirmation → Git integration distinct.

---

## 6. CKC-VS-R01 — Observability

**File :** `projects/sfia-studio/sfia-v3-framing/ckc/12-observabilite-run-readiness.md`
**Section only :** Profile / lens / limits / boundaries

### Before

```
MEDIUM depth obligatoire. Critical si prod. Lenses Observability, RUN readiness, FinOps. Limits : ≠ security monitoring complet · ≠ Release go.
```

### After

```
MEDIUM depth obligatoire. La production est un signal de criticité, pas une requalification automatique. Si le contexte production augmente matériellement le risque, l'impact opérationnel ou les exigences de sûreté, Nora CHALLENGE le profil courant, RECOMMEND une requalification vers Critical et explicite les facteurs de criticité ; elle ESCALATE vers le gate humain applicable si nécessaire. Le CKC n'impose pas Critical. Lenses : Observability, RUN readiness, FinOps. Limits : ≠ security monitoring complet · ≠ Release go.
```

### Semantics

production ≠ Critical automatique
Production → signal → CHALLENGE → RECOMMEND requalification si matériellement justifiée → ESCALATE gate humain si applicable
CKC n'impose pas Critical

**Verdict CKC-VS-R01 :** CLOSED

Old SHA : `335e0a193a814712185e236af44f186148a1c44fa7c424003ce7767f4ddfc3f2`
New SHA : `0357629172bcc51a186f645439e52b1271cb229ffe5857e74cbe6516060f912c`

---

## 7. CKC-VS-R02 — Capitalization

**File :** `projects/sfia-studio/sfia-v3-framing/ckc/15-capitalisation-rex.md`
**Section only :** Profile / lens / limits / boundaries

### Before

```
Capitalization naturelle. Critical si doctrinal. Lens Capitalization. Limits : REX ≠ VALIDATED corpus · ≠ DoctrinePackage integrate.
```

### After

```
Capitalization naturelle. Un enjeu doctrinal est un signal de criticité, pas une requalification automatique. Si la portée doctrinale augmente matériellement le risque, l'impact transverse ou la gouvernance requise, Nora CHALLENGE le profil courant, RECOMMEND une requalification vers Critical et explicite les facteurs de criticité ; elle ESCALATE vers le gate humain applicable si nécessaire. Le CKC n'impose pas Critical. Lens : Capitalization. Limits : REX ≠ VALIDATED corpus · ≠ DoctrinePackage integrate.
```

### Semantics

enjeu doctrinal ≠ Critical automatique
Doctrine → signal → CHALLENGE → RECOMMEND requalification si matériellement justifiée → ESCALATE gate humain si applicable
CKC n'impose pas Critical
Capitalization ≠ Critical automatique

**Verdict CKC-VS-R02 :** CLOSED

Old SHA : `84c75c46e83023aca86e65408e87845b6135269c27b0c026de8a357a0c0633a2`
New SHA : `bc82907d30d466912d71614aa9cf80f5ea76479e07a96cd81bdfe89bdaf05792`

---

## 8. Profile governance justification

Profile selection/requalification = gouvernée.
CKC may signal and recommend. CKC does not decide the profile.
Nora may CHALLENGE / RECOMMEND Critical / ESCALATE.
Nora must never auto-requalify, impose Critical, create a gate, or transform Capitalization into Critical automatically.

Allowed (Security, modulation when Critical already active) — NOT auto-triggers: formulations like « Critical : secrets + rollback » describing contract modulation under an already-active Critical profile. Security still states explicitly that the current profile is **not** automatically Critical.

---

## 9. Global implicit-Critical auto-promotion grep

Patterns searched across 15 CKC bodies:
`Critical si` · `automatiquement Critical` · `toujours Critical` · `profil Critical obligatoire` · variants.

| Hit | Interpretation |
| --- | --- |
| `10-securite-rssi.md:116` « n'est pas automatiquement Critical » | **ALLOWED** — explicit negation / governed behavior |
| `Critical si prod` | **REMOVED** (was R01) |
| `Critical si doctrinal` | **REMOVED** (was R02) |

**Verdict :** no implicit Critical auto-promotion remains.

---

## 10. Exact changed project files

**FILES CHANGED = EXACTLY 2**

1. `projects/sfia-studio/sfia-v3-framing/ckc/12-observabilite-run-readiness.md`
2. `projects/sfia-studio/sfia-v3-framing/ckc/15-capitalisation-rex.md`

validation/01 · validation/02 · README · 13 other CKC · Roadmap · pin · framing · runtime · app : **UNCHANGED**

validation evidence changed? **NO**
Justification : references in validation/* remain factually correct after profile-section semantic fix; no explicit claim of « Critical si prod/doctrinal » auto-promotion existed in validation evidence that would become false.

---

## 11. Unchanged corpus byte proof (16 files)

- `01-cadrage.md` SHA256 `a7e0baa93dba1b634c7ebb21e7e7fe59acc4693c56beec8c8e7068ce227165d8` = baseline (UNCHANGED)
- `02-conception-fonctionnelle.md` SHA256 `8f5320efc8d3fad78e8738ff0fa3a61909d7a6e98009258e5f5576f5212cd9c4` = baseline (UNCHANGED)
- `03-architecture-fonctionnelle.md` SHA256 `dba62d4c6ad8308ca2da3f4bdde66f5f6d529f5793bb027ee52acfce27b4791d` = baseline (UNCHANGED)
- `04-ux-ui.md` SHA256 `c597bd4933d35d6f54b117b1060a8535c8bb57ec816d68aac5c6b39a1cccf2c4` = baseline (UNCHANGED)
- `05-backlog-user-stories.md` SHA256 `2e9cbf97defa5eff75f2bba1e386d8f66137ef8f0874f97ca414a2e00a425562` = baseline (UNCHANGED)
- `06-architecture-technique.md` SHA256 `b29180ca421e822eb8dc17b073e6f41c5d069301cbc85f238a621c56b3da5c83` = baseline (UNCHANGED)
- `07-integration-devops.md` SHA256 `5b0930a0f34bb415f06aa4eae34d5b1d5427005f147a4358723f72fa995370ab` = baseline (UNCHANGED)
- `08-delivery-implementation.md` SHA256 `635147d50ca3db8c230c337bae6ae998dc9ee3d200ae4fe865593751c5072e50` = baseline (UNCHANGED)
- `09-qa-validation.md` SHA256 `abb718b19b1ad947a099721467d3540ca493bcad04348c139904e66541f107d0` = baseline (UNCHANGED)
- `10-securite-rssi.md` SHA256 `e3bc560f167ed2cffc14df8864d37cc07417350073a15a1c56adf2b9acc8b939` = baseline (UNCHANGED)
- `11-deploiement-release.md` SHA256 `9073aa245e5489866b3549b99cc7cf5827541c2b787aebedcb87771fde16b004` = baseline (UNCHANGED)
- `13-pr-readiness.md` SHA256 `a486c2f42b3ed892d393c40795ccdd0f2f0ea6f080d6357e56f8e5e879018a63` = baseline (UNCHANGED)
- `14-post-merge.md` SHA256 `52c13c1fae6132f32008287a35d0198c602a0f03fbf098aa40bed48f3f634048` = baseline (UNCHANGED)
- `README.md` SHA256 `32013d5d8e8be23b8ee5568ccff0d254f38cbfc6701a41ffc7e28d05f2244257` = baseline (UNCHANGED)
- `validation/01-individual-validation-prep.md` SHA256 `70af013697ac0d93f51aa35a02f7a84b38a3138f76f7182f6d6e385edaac6740` = baseline (UNCHANGED)
- `validation/02-cross-contract-validation-prep.md` SHA256 `816009cd8f234f4ea511a64d350912bf76b07f916f394c5d5ea11f5badfe3cd0` = baseline (UNCHANGED)

---

## 12. Status / identity / non-regression

| Control | Result |
| --- | --- |
| exactly 15 CKC | YES |
| 15/15 contentStatus VALIDATED | YES |
| 15/15 validationStatus CONTENT VALIDATED BY MORRIS | YES |
| contractVersion `0.1.0` 15/15 | YES (unchanged; no new version) |
| canonical ckcId 15/15 | YES |
| cognitive delta limited to Profile/Lens | YES |
| ckcId / cycleTypeId / canonicalKey / depth / Evidence / Resume / boundaries / anti-claims | byte/semantically preserved outside Profile/Lens line |
| CKC-RV-01…08 | REMAIN CLOSED |
| Evidence business-first | UNCHANGED |
| Resume continuity | UNCHANGED |
| project-generic / DP / runtime boundaries | UNCHANGED |
| no waterfall / auto-routing / execution authority | YES |
| no SUCCESS=>READY / SUCCESS=>ADOPTED | YES |

---

## 13. 18-file review-set SHA256 (post-correction)

Serialization: `<relative-path><TAB><sha256><LF>` · paths relative to `ckc/` · lexicographic · UTF-8 · LF · final newline.

- `01-cadrage.md` → `a7e0baa93dba1b634c7ebb21e7e7fe59acc4693c56beec8c8e7068ce227165d8` (byte-identical to validated baseline)
- `02-conception-fonctionnelle.md` → `8f5320efc8d3fad78e8738ff0fa3a61909d7a6e98009258e5f5576f5212cd9c4` (byte-identical to validated baseline)
- `03-architecture-fonctionnelle.md` → `dba62d4c6ad8308ca2da3f4bdde66f5f6d529f5793bb027ee52acfce27b4791d` (byte-identical to validated baseline)
- `04-ux-ui.md` → `c597bd4933d35d6f54b117b1060a8535c8bb57ec816d68aac5c6b39a1cccf2c4` (byte-identical to validated baseline)
- `05-backlog-user-stories.md` → `2e9cbf97defa5eff75f2bba1e386d8f66137ef8f0874f97ca414a2e00a425562` (byte-identical to validated baseline)
- `06-architecture-technique.md` → `b29180ca421e822eb8dc17b073e6f41c5d069301cbc85f238a621c56b3da5c83` (byte-identical to validated baseline)
- `07-integration-devops.md` → `5b0930a0f34bb415f06aa4eae34d5b1d5427005f147a4358723f72fa995370ab` (byte-identical to validated baseline)
- `08-delivery-implementation.md` → `635147d50ca3db8c230c337bae6ae998dc9ee3d200ae4fe865593751c5072e50` (byte-identical to validated baseline)
- `09-qa-validation.md` → `abb718b19b1ad947a099721467d3540ca493bcad04348c139904e66541f107d0` (byte-identical to validated baseline)
- `10-securite-rssi.md` → `e3bc560f167ed2cffc14df8864d37cc07417350073a15a1c56adf2b9acc8b939` (byte-identical to validated baseline)
- `11-deploiement-release.md` → `9073aa245e5489866b3549b99cc7cf5827541c2b787aebedcb87771fde16b004` (byte-identical to validated baseline)
- `12-observabilite-run-readiness.md` → `0357629172bcc51a186f645439e52b1271cb229ffe5857e74cbe6516060f912c` **CHANGED**
- `13-pr-readiness.md` → `a486c2f42b3ed892d393c40795ccdd0f2f0ea6f080d6357e56f8e5e879018a63` (byte-identical to validated baseline)
- `14-post-merge.md` → `52c13c1fae6132f32008287a35d0198c602a0f03fbf098aa40bed48f3f634048` (byte-identical to validated baseline)
- `15-capitalisation-rex.md` → `bc82907d30d466912d71614aa9cf80f5ea76479e07a96cd81bdfe89bdaf05792` **CHANGED**
- `README.md` → `32013d5d8e8be23b8ee5568ccff0d254f38cbfc6701a41ffc7e28d05f2244257` (byte-identical to validated baseline)
- `validation/01-individual-validation-prep.md` → `70af013697ac0d93f51aa35a02f7a84b38a3138f76f7182f6d6e385edaac6740` (byte-identical to validated baseline)
- `validation/02-cross-contract-validation-prep.md` → `816009cd8f234f4ea511a64d350912bf76b07f916f394c5d5ea11f5badfe3cd0` (byte-identical to validated baseline)

**POST_CORRECTION_VALIDATED_CORPUS_REVIEW_SET_SHA256** =
`7b58cb50cf46db942a2f999e780506b36c060f7e8fd369127125641bae147969`

| Digest | Value |
| --- | --- |
| baseline (pre-correction) | `cf6ca40c5e3d1b497ab273263483a3d6d53042dc856d77a8dc23fd9e0981a1c3` |
| post-correction | `7b58cb50cf46db942a2f999e780506b36c060f7e8fd369127125641bae147969` |
| digests differ | **YES** |

This digest = review/transport freeze only ≠ DoctrinePackage digest ≠ runtime package pin ≠ catalog digest ≠ ckcId.

---

## 14. Roadmap / DP / runtime / backlog / delivery

| Item | State |
| --- | --- |
| ROADMAP-SYNC-CKC-CONTENT-VALIDATION | **OPEN** (not modified this cycle) |
| DoctrinePackage | NO |
| runtime | NO / NOT MODIFIED |
| Product Backlog | NO |
| Delivery | NO |
| ZERO REAL | YES |
| runtime v3 | NON ADOPTED |

---

## 15. Git policy compliance

| Action | Status |
| --- | --- |
| project staged | NONE |
| project commit | NONE |
| project push | NONE |
| project PR | NONE |
| only remote mutation | Review Handoff L3 borné (this cycle) |

---

## 16. Artifact completeness — FULL contents of changed files

### FILE: `projects/sfia-studio/sfia-v3-framing/ckc/12-observabilite-run-readiness.md`

````markdown
# Studio CKC — Observabilité / RUN readiness

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:observability` |
| **cycleTypeId** | `cyc:observability` |
| **canonicalKey** | `observabilite-run-readiness` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Établir la **prêt-à-opérer** : signaux, SLO/SLI candidats, alertes, runbooks — sans « observable » marketing.

## Problems / when

Problems : blind spots · alertes bruit · SLO inventés · confusion debug vs RUN.
**When :** service à opérer / release proche. **When-not :** pure feature · archi sans surface RUN.

## Context inputs

Archis · release plan · incidents passés Evidence · contraintes on-call · LPS.

## Nora posture & guidance

Exige signaux actionnables ; refuse SLO fantaisie ; lie alerte→action.

### Guidance (condensé)

- **ASK** seulement si matériel (vérité / décision / trajectoire / autorité / sûreté / preuve).
- Sinon **PROPOSE** Options/Recommendation, ou **PROCEED UNDER EXPLICIT HYPOTHESIS**.
- **CHALLENGE** promotions silencieuses et mauvais cycle.
- **ESCALATE TO HUMAN DECISION** pour arbitrages structurants ; **PAUSE** / **STOP** / **REPLAN** / **RECOMMEND TRANSITION** selon sûreté — sans auto-routing.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions & signals

Dims : SLI/SLO candidats · golden signals · alertes · runbooks · dashboards · ownership · limites instrumentation.

Signals : dashboard sans action → CHALLENGE · SLO inventé → ASK source.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY logs only · PARTIAL metrics partielles · SUFFICIENT alertes+runbooks · READY_TO_BOUND RUN readiness Recommendation.

## Anti-claims / contradictions / reliability

Anti : « Full observability » · « AIOps ready ». C-MAT-CLAIM · C-REC-EV · C-SCOPE · C-TRAJ-DEP.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : alerte testée + runbook — *démontre* une capacité à détecter/agir.
2. Insuffisante : vanity dashboard.
3. Supportable : Observation de signal/action.
4. Non supportable : « full observability ».
5. Impact : peut bloquer release ; détail instrumentation secondaire après risque opérationnel Project.

## Decision / trajectory / replan / exit-stop

HD adoption SLO / blind spot. Candidates : release · post-merge · capitalisation incident. Replan : incident révèle blind spot · alerte fatigue. Pause si stack observabilité non décidée (lien archi tech).

## Resume anchors

SLOs · alertes · runbooks · HD · Evidence incidents · Recommendations · blockers · next action

## Profile / lens / limits / boundaries

MEDIUM depth obligatoire. La production est un signal de criticité, pas une requalification automatique. Si le contexte production augmente matériellement le risque, l'impact opérationnel ou les exigences de sûreté, Nora CHALLENGE le profil courant, RECOMMEND une requalification vers Critical et explicite les facteurs de criticité ; elle ESCALATE vers le gate humain applicable si nécessaire. Le CKC n'impose pas Critical. Lenses : Observability, RUN readiness, FinOps. Limits : ≠ security monitoring complet · ≠ Release go.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **MEDIUM**.

````

### FILE: `projects/sfia-studio/sfia-v3-framing/ckc/15-capitalisation-rex.md`

````markdown
# Studio CKC — Capitalisation / REX

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:capitalization` |
| **cycleTypeId** | `cyc:capitalization` |
| **canonicalKey** | `capitalisation-rex` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Capturer un **apprentissage réutilisable** : faits, réserves, recommandations — sans promotion prématurée méthode/doctrine.

## Problems / when

Problems : faits≠reco confondus · promotion silencieuse · REX cosmétique · oubli anti-claims.
**When :** après preuve/merge/incident/cycle clos utile. **When-not :** delivery chaotique sans faits.

## Context inputs

Evidence · HD · réserves · dettes · LPS · doctrine applicable.

## Nora posture & guidance

Sépare Fact/Recommendation/HD ; refuse promotion ; propose Options de capitalisation.

### Guidance (condensé)

- **ASK** seulement si matériel (vérité / décision / trajectoire / autorité / sûreté / preuve).
- Sinon **PROPOSE** Options/Recommendation, ou **PROCEED UNDER EXPLICIT HYPOTHESIS**.
- **CHALLENGE** promotions silencieuses et mauvais cycle.
- **ESCALATE TO HUMAN DECISION** pour arbitrages structurants ; **PAUSE** / **STOP** / **REPLAN** / **RECOMMEND TRANSITION** selon sûreté — sans auto-routing.


### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions & signals

Dims : faits établis · erreurs · dettes · reco candidates · décisions prises · anti-claims · réutilisation · non-promotion.

Signals : « mettre à jour la doctrine/méthode maintenant » → CHALLENGE gate distinct · Claim ADOPTED → C-MAT-CLAIM.

### Epistemic outputs (v3)

**Observation · Fact · Hypothesis · Option · Recommendation · HumanDecision · Reserve · Risk · Evidence · Claim**

Option ≠ Recommendation ≠ HumanDecision · Evidence ≠ Claim automatique · Maturité ≠ autorité · Transition candidate ≠ trajectoire décidée.


### Maturity → behavior

| Bande | Comportement Nora |
| --- | --- |
| **EXPLORATORY** | Explorer, challenger, marquer Hypothesis ; pas de Recommendation forte |
| **PARTIAL** | ASK ciblé ou Hypothesis ; Options bornées ; pas de HD implicite |
| **SUFFICIENT_FOR_DECISION** | Recommendation + triggers HD ; Evidence/contradictions visibles |
| **READY_TO_BOUND** | Recommendation de borne + anchors ; **aucune** autorité octroyée |

Maturité n'octroie aucune autorité d'exécution ni HumanDecision.


EXPLORATORY notes · PARTIAL faits partiels · SUFFICIENT REX structuré · READY_TO_BOUND candidate harvest **≠** update SoT automatique.

## Anti-claims / contradictions / reliability

Anti : « Doctrine updated » · « CKC validated » · « runtime adopted » via REX seul. C-DOC-RT · C-MAT-CLAIM · C-REC-EV · C-SRC.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : faits sourcés Evidence — *démontre* un apprentissage Project.
2. Insuffisante : anecdote.
3. Supportable : Fact + Recommendation séparés.
4. Non supportable : promotion méthode/doctrine automatique.
5. Impact : peut proposer évolution méthode/doctrine **sous gouvernance distincte** ; jamais auto Product Backlog / auto-update method.

## Decision / trajectory / replan / exit-stop

HD promotion/harvest sous processus distinct. Replan si fait contredit. Stop si tentative modifier method/runtime sans gate Project applicable.

## Resume anchors

faits · reco · HD promotion · Evidence · réserves · Recommendations · next gate proposé (gouvernance) · dépendances

## Profile / lens / limits / boundaries

Capitalization naturelle. Un enjeu doctrinal est un signal de criticité, pas une requalification automatique. Si la portée doctrinale augmente matériellement le risque, l'impact transverse ou la gouvernance requise, Nora CHALLENGE le profil courant, RECOMMEND une requalification vers Critical et explicite les facteurs de criticité ; elle ESCALATE vers le gate humain applicable si nécessaire. Le CKC n'impose pas Critical. Lens : Capitalization. Limits : REX ≠ VALIDATED corpus · ≠ DoctrinePackage integrate.

### Runtime articulation / boundaries

| FAIT | NE FAIT PAS |
| --- | --- |
| Guider Nora pour le Pilote | Prendre une HumanDecision |
| Distinguer états épistémiques | Convertir Recommendation → HumanDecision |
| Signaler triggers HD / trajectoire / Evidence | Créer/élargir autorité d'exécution |
| Ancrer reprise honnête | Produire ExecutionContract comme décision |
| Rester cognitif (FC-03 → FC-04) | Remplacer LPS / ProjectTrajectory / Evidence / DoctrinePackage |
| | Persister Project truth · auto-sélectionner le cycle suivant |
| | Exposer dimensions comme questionnaire UI |
| | Utiliser method v2.6 comme doctrine Studio active (C-DOC-RT) |
| | Posséder packageId / pin / digest / allowlist |

**R-CKC-01 :** identité = `ckcId` · `cycleTypeId` · `contractVersion`. Envelope DoctrinePackage = binding runtime distinct.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **MEDIUM**.

````

---

## 17. Required next steps (NOT this cycle)

1. Targeted ChatGPT re-review of corrected Profile/Lens semantics
2. Morris reconfirmation of corrected validated bytes
3. Distinct Git integration gate (exact corrected/reconfirmed corpus + Roadmap sync + reserve close)
4. Only then PR readiness / merge / post-merge / eventual DP-runtime qualification

---

## 18. Final verdict (pre-handoff)

SFIA STUDIO V3 CKC POST-VALIDATION TARGETED CORRECTION PASS
— MORRIS GO CONSUMED
— CKC-VS-R01 CLOSED
— OBSERVABILITY PRODUCTION CONTEXT = CRITICALITY SIGNAL ONLY / NO AUTO-CRITICAL
— CKC-VS-R02 CLOSED
— CAPITALIZATION DOCTRINAL CONTEXT = CRITICALITY SIGNAL ONLY / NO AUTO-CRITICAL
— CAPITALIZATION ≠ CRITICAL AUTOMATIC
— EXACT COGNITIVE FILE DELTA = 2
— ALL OTHER VALIDATED COGNITIVE CONTENT BYTE-PRESERVED
— 15/15 REMAIN CONTENT VALIDATED BY MORRIS
— CONTRACTVERSION `0.1.0` UNCHANGED
— CKC-RV-01…08 REMAIN CLOSED
— EVIDENCE BUSINESS-FIRST / RESUME CONTINUITY UNCHANGED
— NEW 18-FILE REVIEW-SET DIGEST COMPUTED
— ROADMAP-SYNC-CKC-CONTENT-VALIDATION REMAINS OPEN
— NO DOCTRINEPACKAGE · NO RUNTIME · NO PRODUCT BACKLOG · NO DELIVERY
— ZERO REAL · RUNTIME V3 NON ADOPTED
— PROJECT NOT STAGED / NOT COMMITTED / NOT PUSHED / NO PR
— REVIEW PACK COMPLETE
— TARGETED CHATGPT RE-REVIEW REQUIRED
— MORRIS RECONFIRMATION REQUIRED BEFORE GIT INTEGRATION
