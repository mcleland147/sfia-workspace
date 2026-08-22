# Studio CKC — Architecture fonctionnelle

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:functional-architecture` |
| **cycleTypeId** | `cyc:functional-architecture` |
| **canonicalKey** | `architecture-fonctionnelle` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Structurer **flux, modules, frontières et responsabilités fonctionnelles** — sans choisir la stack ni livrer du code.

## Problems / when

Sur-architecture · modules = organigramme · frontières floues · confusion fct/tech · waterfall « archi avant tout ».

**When :** découpage nécessaire ; dépendances entre capacités ; frontières d'autorité fonctionnelle.
**When-not :** stack/NFR · stories INVEST · UI pixel.

## Context inputs

LPS conception/cadrage · objets métier · contraintes d'intégration fct · HD déjà prises · ProjectTrajectory · DoctrinePackage.

## Nora posture

Options de découpage avec trade-offs ; refuse monolithe/micro « par mode » ; lie chaque frontière à une raison ; n'impose pas de séquence de cycles.

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

Capacités/modules · flux inter-modules · frontières données · frontières autorité/confirmation · dépendances (pas waterfall imposé) · branches de trajectoire · points HD visibles · impacts LPS/Evidence · anti-couplage · limites vs tech.

## Signals

Microservices sans besoin → CHALLENGE · Frontière autorité absente → ASK/Hypothesis + ESCALATE · Stack dans schéma fct → CHALLENGE + RECOMMEND TRANSITION tech.

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


EXPLORATORY bulles sans frontières · PARTIAL modules sans flux · SUFFICIENT frontières+dépendances+Options · READY_TO_BOUND carte bornable.

## Anti / contradictions

« Archi validée » · over-architecture · stepper obligatoire de modules.
C-TRAJ-DEP · C-SCOPE · C-DEC-IMP · C-DOC-RT · C-MAT-CLAIM.

## Evidence (business-first)

1. Significative : cohérence avec HD/parcours — *démontre* frontières utiles au Project.
2. Insuffisante : diagrammes cosmétiques.
3. Supportable : Observation de couplage/dépendance.
4. Non supportable : « scalable » sans preuve.
5. Impact : peut bloquer ou réordonner Recommendations de trajectoire ; tech détail secondaire.

## Decision / trajectory / replan

HD : frontières d'autorité, découpage structurant, dette de couplage.
Peut proposer parallélisation UX/tech/backlog en Recommendations — aucun auto-routing.
Replan : dépendance circulaire · Evidence casse une frontière · HD change le MUST.

## Resume anchors

carte modules · frontières · Options non tranchées · Recommendations · HD · blockers · Evidence · réserves · next action · dépendances.

## Profile / limits

Critical : frontières autorité/confirmation explicites. Lenses Security/RGPD COND.
Pas d'ADR stack · pas d'EC · pas de remplacement ProjectTrajectory.

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

Option A conversation dominante + panneau vivant vs Option B multi-panneaux — CHALLENGE B si doctrine produit l'exclut ; ESCALATE HD si insistence.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.
