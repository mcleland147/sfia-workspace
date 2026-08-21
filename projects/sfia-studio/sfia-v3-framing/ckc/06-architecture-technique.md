# Studio CKC — Architecture technique

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:technical-architecture` |
| **cycleTypeId** | `cyc:technical-architecture` |
| **canonicalKey** | `architecture-technique` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Choisir et tracer des **options techniques** alignées besoin + NFR avec trade-offs et réversibilité — **sans** implémenter hors Delivery ni proclamer « scalable/sécurisé ».

## Problems / when

Stack par habitude · mono-option · ADR cosmétique · confusion fct/tech · delivery déguisée.

**When :** NFR/stack/frontières techniques à arbitrer après besoin utile.
**When-not :** métier instable · pure CI sans choix (→ DevOps).

## Context inputs

Conception/archi fct · NFR · contraintes sécu · **architecture existante** · **contrats / ports / adapters observés** · Evidence technique · dette existante · DoctrinePackage futur binding (sans metadata package dans ce CKC).

## Nora posture

≥2 Options si structurant ; nommer réversible vs coûteux ; lier choix à exigence ; ne pas « livrer » code.

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

NFR · composants & responsabilités · flux/frontières · dépendances · sécurité · perf · résilience · observabilité · exploitabilité · coûts/dette · alternatives/réversibilité.

## Signals

Mono-option « évidence » → CHALLENGE · Spec métier instable → REPLAN conception · Secrets dans ADR → STOP/CHALLENGE.

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


EXPLORATORY mono-option · PARTIAL options sans trade-offs · SUFFICIENT trade-offs+Recommendation · READY_TO_BOUND ADR bornable ≠ IMPLEMENTED.

## Anti / contradictions

« Architecture validée » · « scalable 1M » · « sécurisé » · « prêt prod » · « zéro dette ».
C-DOC-RT · C-REC-EV · C-MAT-CLAIM · C-TRAJ-DEP · C-DEC-IMP.

## Evidence (business-first)

1. Significative : spikes/mesures sourcés — *démontre* un trade-off utile au risque/coût Project.
2. Insuffisante : benchmark marketing.
3. Supportable : Observation de contrainte technique mesurée.
4. Non supportable : « prêt prod » / « zero debt ».
5. Impact : peut bloquer Delivery/Release Recommendations ; détail stack secondaire après impact Project.

## Decision / trajectory / replan

HD : GO stack / ADR structurant / acceptation dette technique.
Candidates : DevOps · security · delivery · observability. Retour conception si métier casse.
Replan : NFR contredit · Evidence spike fail · HD stack reversal.
Stop : doctrine/chemin protégé/GO stack sans Pilote.

## Resume anchors

Options · Recommendation ADR · HD · NFR Facts · Evidence spikes · dette nommée · blockers · next action · dépendances.

## Profile / limits

Critical : réversibilité + sécu + NFR durs. Lenses : Security, Performance, FinOps, DevOps, Observability.
ADR ≠ EC · ≠ runtime v3 ADOPTED · ≠ Delivery. Aucune stack Project imposée par ce CKC.

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

Option A conserver contrats/ports existants vs Option B moteur parallèle — CHALLENGE B (architecture parallèle) ; ESCALATE HD.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
