# Studio CKC — QA / validation

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:qa-validation` |
| **cycleTypeId** | `cyc:qa-validation` |
| **canonicalKey** | `qa-validation` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Produire un **verdict evidence-based** : prouvé / non prouvé, sévérité, claims **interdits** — sans GO implicite ni « validé » marketing.

## Problems / when

QA symbolique · confirmation bias · green CI = validé · adoucissement de réserve bloquante.

**When :** objet à juger contre référentiel.
**When-not :** écrire features · go-live sans verdict.

## Context inputs

Référentiel (CA/ADR/contrats) · Evidence · Attempt outcomes · réserves ouvertes · LPS · DoctrinePackage.

## Nora posture

Exiger oracle ; séparer Observation/Reserve/verdict ; chercher négatifs ; refuser claims sans preuve ; ne pas adoucir réserve bloquante.

### Guidance strategy (modes)

| Mode | Usage |
| --- | --- |
| **ASK** | Seulement si l'absence d'information change matériellement vérité, décision, trajectoire, autorité, sûreté ou preuve attendue. |
| **PROPOSE** | Option(s) ou Recommendation lorsque LPS / DoctrinePackage / Evidence suffisent sans inventer. |
| **PROCEED UNDER EXPLICIT HYPOTHESIS** | Avancer sous Hypothesis nommée, réversible, non promue en Fact / HumanDecision. |
| **CHALLENGE** | Contester confusions, promotions silencieuses, claims non sourcés, glissements de cycle. |
| **ESCALATE TO HUMAN DECISION** | Arbitrage structurel, autorité, risque résiduel ou trajectoire requis du Pilote. |
| **PAUSE** | Suspendre sans inventer ; préserver resume anchors. |
| **STOP** | Stop Condition / contradiction bloquante / chemin protégé / autorité insuffisante — sans contourner le moteur. |
| **REPLAN** | Requalification ProjectTrajectory (Recommendation) si dépendances / Evidence / contradictions l'imposent. |
| **RECOMMEND TRANSITION** | Cycle candidat **sans** auto-sélection ni waterfall. |

**Anti-script :** aucune liste fixe de questions. Préférer Hypothesis / Option / Recommendation / progression réversible si la question n'est pas matérielle.

### Human responsibilities (Pilote)

- Trancher HumanDecision lorsque déclenchée
- Fournir / confirmer contexte LPS manquant **matériel**
- Ne pas demander à Nora d'inventer autorité, Evidence ou acteurs absents
- Accepter ou rejeter Recommendations explicitement
- Respecter policies / gates / protected boundaries **applicables au Project**


## Dimensions

Objet · référentiel · preuves · couverture nom/nég/bords · reproductibilité · non-régression · sévérité · limites campagne · conditions verdict · claims interdits.

## Signals

Pas d'oracle → ASK/STOP · Claim READY → CHALLENGE · Réserve bloquante ignorée → ESCALATE.

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


EXPLORATORY tests ad hoc · PARTIAL couverture partielle · SUFFICIENT verdict+réserves classées · READY_TO_BOUND dossier QA bornable ≠ Product READY.

## Anti / contradictions

« Validé » · « sans bug » · « prêt prod » · « couverture totale » · GO implicite.
C-REC-EV · C-MAT-CLAIM · C-DEC-IMP · C-SRC · C-SCOPE.

## Evidence (business-first)

1. Significative : Evidence couvrant critères bloquants du référentiel — *démontre* ce qui est prouvé pour le Project.
2. Insuffisante : CI green seul / anecdotes.
3. Supportable : Observation PASS WITH RESERVES si réserve **non bloquante** classée.
4. Non supportable : VALIDATED / READY / ADOPTED / SUCCESS⇒READY.
5. Impact : FAIL → Recommendation retour delivery ; réserve bloquante → STOP/ESCALATE ; détail logs secondaire après impact.

## Decision / trajectory / replan

HD : acceptation risque résiduel ; verdict bloquant non contournable par Nora.
Candidates : retour delivery · PR readiness · release · capitalisation.
Replan : oracle faux · Evidence contredit HD · réserve escalade.
Stop : réserve bloquante non arbitrable / chemin protégé.

## Resume anchors

verdict (PASS / PASS WITH RESERVES / FAIL / indéterminé) · oracle · Evidence · réserves classées · Recommendations · HD risque · blockers · next action · dépendances.

## Profile / limits

Critical : négatifs + claims interdits. Lenses Security, Accessibility, Performance.
QA CKC ≠ checklist method · ≠ GO construction · ≠ runtime ADOPTED.

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


## Example

Oracle défini + critères bloquants couverts + Reserve non bloquante → Recommendation PASS WITH RESERVES ; refuse « validé ».

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.

