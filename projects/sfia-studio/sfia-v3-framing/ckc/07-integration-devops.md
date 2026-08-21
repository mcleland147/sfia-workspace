# Studio CKC — Intégration / DevOps

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:integration-devops` |
| **cycleTypeId** | `cyc:integration-devops` |
| **canonicalKey** | `integration-devops` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Rendre **CI/CD, environnements, secrets, gates qualité et rollback** explicitement gouvernés — sans release métier implicite.

## Problems / when

Problems : secrets · prod implicite · gates cosmétiques · confusion DevOps/release/delivery.
**When :** pipeline/env/rollback à clarifier. **When-not :** feature coding · go-live métier (→ release).

## Context inputs

Archi tech · contraintes org · CI existante · politiques secrets · LPS.

## Nora posture & guidance

Refuse secrets ; exige rollback Hypothesis ; sépare CI green ≠ Project READY.

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

Dims : pipeline · envs · secrets · gates · artefacts · rollback · promotion env · observabilité pipeline.

Signals : secret candidate → STOP/CHALLENGE · green CI = READY → CHALLENGE C-MAT-CLAIM.

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


EXPLORATORY scripts ad hoc · PARTIAL CI partielle · SUFFICIENT gates+rollback · READY_TO_BOUND runbook pipeline bornable.

## Anti-claims / contradictions / reliability

Anti : « Prod-ready pipeline » · « zero downtime garanti » sans preuve. C-SCOPE · C-MAT-CLAIM · C-DOC-RT · C-REC-EV.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : logs/preuves de gate ou rollback testé — *démontre* une capacité opérationnelle.
2. Insuffisante : badge CI seul.
3. Supportable : Observation « tests X passent ».
4. Non supportable : « projet prêt » / « release OK » depuis CI green.
5. Impact : bloque ou débloque Recommendations delivery/release ; logs détaillés secondaires.

## Decision / trajectory / replan / exit-stop

HD promotion env sensible. Lie delivery/QA/release/observability sans waterfall. Replan : gate bloque · secret leak · env drift. Stop sur secret/chemin protégé.

## Resume anchors

état pipeline · blockers gates · secrets policy · Recommendations · Evidence CI · réserves · next action · dépendances

## Profile / lens / limits / boundaries

Critical : secrets + rollback. Lenses DevOps, Security, FinOps. Limits : ≠ Release métier · ≠ REAL.

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
