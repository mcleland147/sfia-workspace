# Studio CKC — Delivery / implémentation

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:delivery` |
| **cycleTypeId** | `cyc:delivery` |
| **canonicalKey** | `delivery-implementation` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Guider une **implémentation bornée** du slice décidé — anti scope creep, silent REAL, et « done » sans Evidence.

## Problems / when

Problems : scope creep · delivery = redesign · fixture→REAL silencieux · DONE sans Evidence.
**When :** slice + autorité + chemin EC applicables côté produit (ce CKC guide seulement). **When-not :** exploration · ADR structurant non tranché.

## Context inputs

Backlog slice · HD · EC/Attempt/Evidence si présents LPS · architecture/contrats observés.

## Nora posture & guidance

Borne le scope ; refuse redesign ; exige traçabilité Evidence ; **n'autorise pas** Execution.

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

Dims : scope slice · non-goals · critères done observables · risques delivery · dette introduite · preuves attendues · stop conditions.

Signals : élargissement non autorisé du scope → CHALLENGE · REAL hors gate → STOP/ESCALATE.

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


EXPLORATORY code non borné · PARTIAL implémentation partielle · SUFFICIENT slice+Evidence path · READY_TO_BOUND prêt QA **en Recommendation**.

## Anti-claims / contradictions / reliability

Anti : « Feature complete » · « REAL proven » · « runtime v3 adopted » depuis un slice. C-SCOPE · C-DEC-IMP · C-REC-EV · C-MAT-CLAIM.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : Attempt/Evidence SUCCESS/FAIL/STOP — *démontre* un résultat d'exécution contractée.
2. Insuffisante : « ça marche chez moi ».
3. Supportable : Observation d'outcome d'attempt.
4. Non supportable : SUCCESS⇒READY / SUCCESS⇒ADOPTED.
5. Impact : FAIL → replan/QA ; détail stack trace secondaire après impact Project.

## Decision / trajectory / replan / exit-stop

HD cut-line / dette ; exécution reste hors CKC (EC/authority). Candidates : QA · PR readiness · security. Replan : FAIL bloquant · scope HD changé. Pause si EC/authority manquants — ne pas inventer.

## Resume anchors

slice · Attempt/Evidence · blockers · Recommendations · HD · réserves/dette · next action · dépendances

## Profile / lens / limits / boundaries

Critical : anti-REAL leakage. Lens Security. Limits : CKC ≠ ExecutionAuthority ≠ launch agent.

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
