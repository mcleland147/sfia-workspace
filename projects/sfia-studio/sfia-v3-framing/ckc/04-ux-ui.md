# Studio CKC — UX/UI

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:ux-ui` |
| **cycleTypeId** | `cyc:ux-ui` |
| **canonicalKey** | `ux-ui` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Définir le **contrat d'expérience** (parcours, états, honnêteté UI, accessibilité) aligné clarification → décision → exécution — sans rewrite runtime ni outil de design comme SoT produit.

## Problems / when

Extrapolation design · stepper/cockpit multi-panneaux contre doctrine conversation · confirmation malhonnête · confusion wireframe/écran/runtime · accessibilité cosmétique.

**When :** parcours Pilote ; états empty/loading/error/blocked ; confirmation ; responsive.
**When-not :** règles métier seules · implémentation UI sans contrat.

## Context inputs

- Parcours utilisateur et contrats d'interaction existants (LPS / Evidence design)
- États fonctionnels observés ou requis
- Contraintes accessibilité sourcées
- Doctrine expérience applicable (conversation dominante si établie)
- HD / Recommendations liées à l'expérience
- Outil de design éventuel = **exemple non normatif** seulement (jamais imposé par ce CKC)

## Nora posture

Défend l'honnêteté des états ; refuse stepper comme IA principale si doctrine contraire ; sépare Recommendation visuelle vs HumanDecision ; ne mute pas d'outil de design.

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

Parcours · états empty/loading/error/blocked · confirmation / autorité visible · Evidence business-first en UI · responsive · accessibilité · fidélité vs exploration · alignement conversation Nora · dette UX connue si LPS · anti-clutter si design system produit.

## Signals

Stepper principal → CHALLENGE doctrine · Confirmation soft → CHALLENGE sûreté · Pixel sans parcours → ASK/Hypothesis.

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


EXPLORATORY moodboards · PARTIAL wireframes partiels · SUFFICIENT états critiques + confirmation · READY_TO_BOUND contrat écran bornable ≠ runtime ADOPTED.

## Anti / contradictions

« UX approuvée » · « WCAG compliant » sans preuve · « runtime aligné maquette ».
C-DOC-RT · C-DEC-IMP · C-MAT-CLAIM · C-SCOPE.

## Evidence (business-first)

1. Significative : contrats d'interaction / revues sourcées — *démontre* un parcours compréhensible pour le Pilote.
2. Insuffisante : capture isolée.
3. Supportable : Observation d'état UI vs comportement attendu.
4. Non supportable : VALIDATED / runtime ADOPTED depuis maquette.
5. Impact : UAT fail → REPLAN ; détail pixel secondaire.

## Decision / trajectory / replan

HD : direction IA, confirmation model, adoption de référence visuelle.
Peut coexister avec conception/archi fct. Transition delivery = Recommendation après HD si requise.
Replan : UAT fail · contradiction doctrine expérience · Evidence accessibilité bloquante.

## Resume anchors

parcours actifs · états · Recommendations design · Options · HD · blockers · Evidence visuelle · réserves UX · next action · dépendances.

## Profile / limits

Critical : confirmation + authority UX. Lenses : Accessibility, UX/UI, Security (anti-phishing UI).
CKC ≠ outil design SoT · ≠ Delivery UI · ≠ runtime v3.

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

Wizard 7 étapes vs conversation dominante → CHALLENGE ; Options ; ESCALATE HD si insistence.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.

