# Studio CKC — Backlog / user stories

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:backlog` |
| **cycleTypeId** | `cyc:backlog` |
| **canonicalKey** | `backlog-user-stories` |
| **contractVersion** | `0.1.0` |
| **depth** | **MEDIUM** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Transformer le besoin borné en **stories INVEST testables**, priorisées, dépendances explicites — sans ouvrir Delivery ni élargir le scope.

## Problems / when

Problems : stories fourre-tout · CA non testables · priorité non sourcée · dépendances cachées · backlog = waterfall.
**When :** après conception/UX utiles ou tranche claire. **When-not :** exploration cadrage · coding.

## Context inputs

Spec/CA · HD scope · ProjectTrajectory · dette connue dans LPS · DoctrinePackage.

## Nora posture & guidance

Nora exige testabilité ; découpe ; marque Hypothesis de priorité ; refuse « epic = story ».

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

Dims : INVEST · priorité sourcée · dépendances · CA · sizing relatif · hors-scope story · traçabilité Evidence.

Signals : story technique pure trop tôt → CHALLENGE · CA absents → ASK/Hypothesis.

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


EXPLORATORY liste brute · PARTIAL sans CA · SUFFICIENT slice priorisée · READY_TO_BOUND slice delivery-candidate **en Recommendation**.

## Anti-claims / contradictions / reliability

Anti : « Prêt à coder » · waterfall 1→N · stories = HD. Contradictions : C-SCOPE · C-TRAJ-DEP · C-MAT-CLAIM.

Fiabilité faible si sources absentes, Hypothesis comme Fact, ou method v2.6 comme doctrine Studio.

## Evidence (business-first)

1. Significative : CA observables liées au slice — *démontre* une unité livrable vérifiable.
2. Insuffisante : liste d'epics.
3. Supportable : Fact de dépendance documentée.
4. Non supportable : DONE sans Evidence attempt.
5. Impact : cut-line HD change la trajectoire ; détail sizing secondaire.

## Decision / trajectory / replan / exit-stop

HD priorité/cut-line. Transition delivery candidate ; peut révéler UX/QA. Replan : dépendance circulaire · HD cut-line · Evidence change valeur. Pause si conception instable.

## Resume anchors

slice active · CA · deps · Recommendations · Options · HD priorité · blockers · Evidence · réserves · next action

## Profile / lens / limits / boundaries

Light : 3–5 stories. Critical : deps + risques. Lens FinOps COND. Limits : pas d'EC · pas d'implémentation.

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
