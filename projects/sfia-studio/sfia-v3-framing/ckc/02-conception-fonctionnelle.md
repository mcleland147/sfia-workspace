# Studio CKC — Conception fonctionnelle

| Champ | Valeur |
| --- | --- |
| **ckcId** | `ckc:studio:functional-design` |
| **cycleTypeId** | `cyc:functional-design` |
| **canonicalKey** | `conception-fonctionnelle` |
| **contractVersion** | `0.1.0` |
| **depth** | **COMPLET** |
| **contentStatus** | **VALIDATED** |
| **validationStatus** | **CONTENT VALIDATED BY MORRIS** |
| **runtimeHumanActor** | **Pilote** |

> **CONTENT VALIDATED BY MORRIS** pour le contenu cognitif. N'est **PAS** : MODELED · IMPLEMENTED · ADOPTED runtime · DoctrinePackage-integrated · runtime-resolved · Nora-consumption-proven · Product READY.

---

## Finalité

Rendre **testable et cohérent** le comportement attendu : rôles, parcours, objets métier, règles — **sans** figer l'architecture technique ni le pixel UI.

## Problems / when

Problems : spec narrative non vérifiable · « on verra à l'implémentation » pour règles structurantes · confusion fct/tech/UX · exhaustivité illusoire · permissions inventées.

**When :** usages à formaliser après cadrage utile ; règles ambiguës ; avant backlog ou archi fct.
**When-not :** stack/NFR seuls · parcours UI dominant sans règles · coding.

## Context inputs

LPS cadrage / HD périmètre / Evidence métier · objets et règles Facts vs Hypotheses · permissions **sourcées** · intégrations fonctionnelles (quoi ≠ comment) · DoctrinePackage actif.

## Nora posture

Cohérence usages↔règles↔données ; refuse le report des règles structurantes ; sépare fct / tech / pixel ; couvre nominaux **et** exceptions sans exhaustivité cosmétique.

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

Usagers/rôles · parcours nominaux · exceptions métier · objets & états · règles/invariants · CA observables · permissions/refus · intégrations fct · limites vs archi tech · traçabilité Evidence future.

## Signals

| Signal | Mode |
| --- | --- |
| Règle structurante « plus tard » | CHALLENGE + ESCALATE si HD |
| Stack dans la spec | CHALLENGE C-SCOPE |
| Happy path seul | ASK exception **ou** Hypothesis |
| CA non observables | CHALLENGE |

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


**Maturité :** EXPLORATORY intentions vagues · PARTIAL happy path sans exceptions · SUFFICIENT règles+CA+réserves · READY_TO_BOUND spec bornable sans « complétude » illusoire.

## Reliability / anti / contradictions

Anti-claims : « Spec complète » · « Prêt à coder sans backlog » · « Architecture validée » · « UX approuvée ».
Contradictions : C-SCOPE · C-REC-EV · C-MAT-CLAIM · C-DEC-IMP · C-SRC.

## Evidence (business-first)

1. Significative : CA testables liées à règles — *démontre* un comportement vérifiable.
2. Insuffisante : prose marketing.
3. Supportable : Fact sur règle sourcée.
4. Non supportable : « prêt delivery » depuis spec seule.
5. Impact : FAIL d'attempt peut réouvrir règles (REPLAN) ; détail technique secondaire.

## Decision / trajectory / replan / exit

HD : arbitrages métier, permissions conflictuelles, acceptation réserve fonctionnelle.
Candidates : UX · archi fct · backlog · (rare) archi tech si NFR seuls.
Replan : métier instable · Evidence contredit règles · HD périmètre cassée.
Stop si décision produit structurante sans Pilote.

## Resume anchors

périmètre fct borné · règles Facts vs Hypotheses · CA · Options/Recommendations · HD métier · blockers · Evidence · réserves/dette · next action · dépendances.

## Profile / lens / limits

Light : happy path + 1 exception. Critical : permissions + exceptions + CA dures. Lenses : RGPD, Accessibility, Security COND.
Pas d'ADR technique · pas de pixel-perfect · pas d'EC.

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

« L'admin peut tout voir » → refuse Fact ; ASK source ou Hypothesis moindre privilège + Options.

---

**Statut stable :** CONTENT VALIDATED BY MORRIS · contractVersion `0.1.0` · depth **COMPLET**.

