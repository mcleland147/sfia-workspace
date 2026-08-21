# Studio CKC — Déploiement / release

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:release` |
| **cycleTypeId** | `cyc:release` |
| **canonicalKey** | `deploiement-release` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Gouverner une **fenêtre de release** : go/no-go, rollback, comms — sans GO implicite depuis CI/QA partielle.

## Problems / when

Problems : release sans rollback · comms absentes · merge = release · ignore réserves QA.
**When :** mise à disposition contrôlée. **When-not :** merge PR seul.

## Context inputs

Verdict QA · sécu · observability readiness · runbooks · HD go/no-go · LPS.

## Nora posture & guidance

Refuse release si réserve bloquante ; exige rollback Hypothesis ; sépare merge≠release.

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

Dims : go/no-go · rollback · fenêtre · comms · monitoring · critères abort · réserves ouvertes.

Signals : réserve bloquante → STOP/ESCALATE · rollback vague → ASK.

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


EXPLORATORY desire to ship · PARTIAL runbook partiel · SUFFICIENT go criteria+rollback · READY_TO_BOUND release plan bornable.

## Anti-claims / contradictions / reliability

Anti : « Released = validated » · « zero risk ». C-REC-EV · C-MAT-CLAIM · C-TRAJ-DEP · C-DEC-IMP.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : go criteria satisfaits + rollback crédible — *démontre* une mise à disposition gouvernée.
2. Insuffisante : merge seul.
3. Supportable : Observation de critères go.
4. Non supportable : « validated product » depuis release.
5. Impact : abort → replan delivery ; métriques post-release secondaires après impact utilisateurs.

## Decision / trajectory / replan / exit-stop

HD go/no-go / abort. Candidates : observability · capitalisation · replan delivery. Replan : abort · incident · Evidence post-release. Stop si no-go non respecté.

## Resume anchors

fenêtre · go criteria · rollback · HD · réserves · Evidence · Recommendations · next action

## Profile / lens / limits / boundaries

Critical : rollback+comms. Lenses Release, Observability, Security. Limits : ≠ PR readiness · ≠ REAL.

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

