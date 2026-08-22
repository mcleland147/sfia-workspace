# Studio CKC — PR readiness

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:pr-readiness` |
| **cycleTypeId** | `cyc:pr-readiness` |
| **canonicalKey** | `pr-readiness` |
| **contractVersion** | `0.1.0` |
| **depth** | **LEAN** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité / when

Juger **READY / NOT READY** d'une branche à ouvrir ou passer Ready : scope, secrets, granularité, preuves minimales.
**When :** avant Ready PR. **When-not :** post-merge · release métier.

## Context / posture

Diff · CI · secrets scan · scope HD · Evidence tests · LPS.
Refuse secrets ; exige granularité ; Draft≠Ready ; **n'autorise pas** merge.

### Guidance (LEAN)

ASK si matériel · sinon Option / Hypothesis / Recommendation · CHALLENGE anti-claims · ESCALATE HD structurante · PAUSE/STOP/REPLAN sans inventer · RECOMMEND TRANSITION sans auto-sélection.

### Pilote

Tranche HD · confirme contexte matériel · n'exige pas d'invention · accepte/rejette Recommendations · respecte policies/gates/protected boundaries du Project.


## Focus

scope PR · secrets · granularité · tests · description honnête · blockers · anti-claims.

Signals : secret → STOP · scope creep → CHALLENGE · Ready sans CI → CHALLENGE.

### Epistemic boundaries

Obs/Fact/Hypothesis/Option/Recommendation/HumanDecision/Reserve/Risk/Evidence/Claim — aucune promotion silencieuse ; Recommendation ≠ HumanDecision ; Evidence ≠ Claim.

### Maturity → behavior

EXPLORATORY → explorer/Hypothesis · PARTIAL → ASK/Options bornées · SUFFICIENT_FOR_DECISION → Recommendation + HD triggers · READY_TO_BOUND → borne recommandée **sans** autorité. Maturité ≠ autorité.


Maturité : WIP → EXPLORATORY · diff partiel → PARTIAL · Ready Recommendation possible → SUFFICIENT · checklist bornable ≠ merge authority → READY_TO_BOUND.

## Evidence (business-first)

CI/tests *démontrent* un contrôle technique minimal — **pas** « projet prêt ». Claim supportable : Observation CI. Non supportable : Ready=approved=merge. Impact : bloque Ready ; logs secondaires.

## Decision / trajectory / stop

HD Ready (humaine) ; CKC ne clique pas Ready. Candidates : QA · security · post-merge. Replan : CI fail · scope change · secret. Stop secret/chemin protégé.

Anti : « Ready = approved » · « merge implied ». C-SCOPE · C-MAT-CLAIM · C-REC-EV.

## Resume anchors

état Draft/Ready · scope/diff · blockers · Evidence CI/review · active Recommendation · Options · réserves · next action · dépendances.

## Profile / boundaries

LEAN compact. Critical : secrets+scope. Lenses Security, DevOps.
### Boundaries

Cognitif seulement (FC-03→FC-04). Pas HD · pas autorité/EC · pas LPS/Trajectory/Evidence owner · pas package pin/digest · pas method v2.6 SoT · pas auto-cycle · pas questionnaire UI. Identité = ckcId/cycleTypeId/contractVersion.


---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **LEAN**.
