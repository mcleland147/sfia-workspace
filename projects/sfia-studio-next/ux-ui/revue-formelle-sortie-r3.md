# SFIA Studio Next — Revue formelle de sortie R3 (candidate pour décision Morris)

**Date de préparation : 2026-11-03 (Europe/Paris).**  
**Nature :** rapport de qualification documentaire du jalon R3, **non** Decision Record, **non** clôture automatique.  
**Verdict proposé :** `R3 EXIT REVIEW FAVORABLE — CLOSE WITH CARRIED RESERVES`.  
**Autorité et gate :** Morris doit encore **prononcer explicitement le GO de clôture R3** après lecture du présent rapport. Son GO antérieur concerne uniquement les quatre clarifications fonctionnelles et leur intégration Git.  
**Dépôt/ref :** `mcleland147/sfia-workspace`, branche `sfia/next-r3-ux-interaction-candidate` ; `main` reste la baseline publiée, statut local **NON OBSERVÉ**.

## 1. Résultat et validation de conception

Le jalon R3 produit une conception UX Pilote–Nora, organisée en quatre macro-lots A–D, complétée par les états d'activité Nora et un contrat mesurable Figma → code. Morris a validé le contenu des maquettes et confirmé après lancement de la Présentation Figma que le parcours de revue lui convient, les micro-ajustements non bloquants étant reportables.

| Domaine / résultat | Preuve ou source | Verdict de conception |
| --- | --- | --- |
| Accès, sas, fil, documents et continuité — lot A | [conception UX](espace-projet-interaction-pilote-nora.md) | **ACCEPTÉ MORRIS — réserves portées** |
| Trajectoire, cycles, CKI, décisions et autorité — lot B | [guide de couverture](audit-couverture-ux-r3.md) | **ACCEPTÉ MORRIS — réserves portées** |
| Contrat, instruction, tentative, arrêt et restitution — lot C | [UX §32](espace-projet-interaction-pilote-nora.md) | **CONTENU VALIDÉ MORRIS** |
| Git facultatif, sources, droits, conflits et qualité transverse — lot D | [UX §33–34](espace-projet-interaction-pilote-nora.md) | **CONTENU VALIDÉ MORRIS** |
| Activité Nora, arrêt/reprise, mobile | [UX §35](espace-projet-interaction-pilote-nora.md), [index Figma Nora](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=283-398) | **CONCEPTION ACCEPTÉE / clarifications normatives intégrées** |
| Reproduction mesurable Figma–Cursor | [contrat de transposition](contrat-transposition-figma-code.md), [manifeste](index-geometrie-frames-r3.json) | **COUVERTURE DES FAMILLES / MESURES PROFONDES PARTIELLES** |

Les **neuf responsabilités R1/D1–D9** et **sept scénarios E2E R1** sont représentés. Le [point de départ Figma de revue intégrale](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=264-401) permet d'inspecter **223/223 frames**, dont sept index de revue, sur la page 01. La revue Figma a trouvé **2 263 liens NODE**, **zéro destination cassée**, **zéro action visible sans réaction** ; la présentation dispose de trois entrées (nominal, intégral, compact). Le flux nominal ne déclenche pas automatiquement les effets conditionnels : création confirmée, arrêt réellement observé ou succès Cursor restent non prouvés.

**Niveau de preuve atteint :** `DOCUMENTED / UX CONTENT VALIDATED BY MORRIS / FIGMA PROTOTYPE GRAPH VERIFIED`, pas `IMPLEMENTED`, `COVERAGE VERIFIED`, `BEHAVIOR PROVEN` ou `ADOPTED`.

## 2. Quatre clarifications R1/R2 — arbitrage Morris acquis

**Morris a explicitement validé les quatre précisions et leur intégration sur la branche candidate R3 le 2026-11-03.** Cette décision de contenu D2 **ne** modifie **ni** les décisions antérieures R1/R2 **ni** les règles de transition ou l'autorité du futur Pilote. Elle est traçable par l'[index R2 §24](../conception-fonctionnelle/README.md). **Aucune nouvelle règle RG/PF numérotée n'a été créée.**

| Clarification de contenu validée | Sources propriétaires mises à jour | Contrats préexistants conservés |
| --- | --- | --- |
| **1. Visibilité métier de l'activité** | [R1 §9](../cadrage/vision-produit.md) | États/limites réellement connus, cible STOP explicite, pas de raisonnement interne |
| **2. Cognition / outil / Cursor distincts** | [D3 §13](../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) | `RG-CTX-003/006`, `RG-AUTH-005`, événements D7 réellement observables |
| **3. Commande Arrêter bornée** | [D6 §9](../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md), [D7 §9.1](../conception-fonctionnelle/realisation-operationnelle-gouvernee.md) | `RG-GOV-016/018/019/020`, `RG-REAL-019/026/027` : reçu/transmis/observé/indisponible/inconnu |
| **4. Acquis et reprise fiable** | [D3 §13.2](../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [D7 §9.2](../conception-fonctionnelle/realisation-operationnelle-gouvernee.md), [D8 §9](../conception-fonctionnelle/resultats-et-preuves.md) | `RG-REAL-029`, `RG-PRV-014/022/025` : réalisé/reste à faire/à vérifier, permissions/mandat/effets recontrôlés |

**Portée du GO consommé :** validation D2 de ces quatre clarifications et écriture documentaire sur la branche candidate. **Non consommé :** GO de clôture formelle R3, écriture de décision normative de clôture, modification de Roadmap, PR, merge, démarrage R4.

## 3. Contrôle des critères de sortie du SEF v0.2 §8

| Gate | Éléments qualifiés | Évaluation |
| --- | --- | --- |
| G1 — Périmètre R1/R2 et contrats métier | 9 domaines, 7 E2E, quatre compléments normatifs tracés aux propriétaires | **PASS CONCEPTION** |
| G2 — Parcours et contenu Pilot-first | Présentation Figma inspectée et validée par Morris | **PASS VALIDATION UX** |
| G3 — Contrat / synthèse / autorité / preuve | Six sections et instruction technique consultables, neuf rubriques de restitution, réception D6 distincte | **PASS CONCEPTION** |
| G4 — Présentation et variantes | 223/223 frames reliées à la revue, sans destination cassée ; nominal vs événements conditionnels séparés | **PASS GRAPHE** |
| G5 — Contrat de transposition | 223 frames et 901 blocs racines mesurés ; descendants détaillés d'écrans de référence | **PASS AVEC RÉSERVE** : compléter mesures par capacité en R5 |
| G6 — Observabilité, STOP et reprise | 12 variantes Nora 206–217 et quatre clarifications R1/R2 validées | **PASS CONCEPTION ; PREUVE R4–R6 NON ACQUISE** |
| G7 — Effets externes, navigateur, sécurité, accessibilité | Contrats d'acceptation formulés, aucun runtime Next observé | **NON PROUVÉ — report cohérent vers R4–R6** |
| G8 — Gouvernance du jalon / Git | Branche candidate écrite ; `main` non promue ; clôture Morris non prononcée | **GATE OUVERT — PROCHAIN GO** |

## 4. Réserves reportées et sorties attendues

- **R4 — Architecture technique :** propriété des événements, granularité réellement fournie par l'API Nora/Cursor, identité de tentative, droits, versionnement, persistance, récupération, non-duplication, interruption disponible ou non, autorité D6, liaison des preuves D8. **N/A — NON IMPLÉMENTÉ.**
- **R4/R5 — Fondations UI :** arbitrer les tokens partagés (notamment le rail **240 vs 246 px**), extraire les dimensions profondes pertinentes par capacité et fixer les tolérances de comparaison visuelle ; ne pas développer 223 versions indépendantes d'un même composant.
- **R5–R6 — Construction et qualification :** captures/runtime navigateur, responsive, animation réduite, focus, contraste, activité/outils réels, interruption effective, reprise/reload, collision, refus, idempotence et preuve des effets. **Aucune preuve LIVE/REAL acquise en R3.**
- **Git — Intégration :** branch candidate divergente de `main` avant ce complément ; réévaluer ref, diff, conflits, CI et mergeability au gate PR. Ne pas inférer une promotion de l'existence des commits.

Aucune réserve identifiée ne justifie à elle seule de reprendre une conception UX transversale. **Leur éventuel caractère bloquant pour la clôture R3 reste un arbitrage Morris**, à documenter dans une décision ultérieure.

## 5. Prochain jalon explicite — GO de clôture R3

**Proposition à soumettre à Morris : `R3 CLOSED BY MORRIS — WITH CARRIED RESERVES` (niveau conception UX).**

Au point de décision, examiner :
1. le tableau des gates G1–G8 et les réserves reportées ;
2. la traçabilité Git des quatre clarifications R1/R2 validées ;
3. le fait que la conclusion **ne couvre pas** l'architecture, le code, les tests navigateur ni une adoption ;
4. la portée séparée d'un éventuel mandat Git de Decision Record, Roadmap ou PR.

**Décision de clôture : PENDING MORRIS.** Sans ce GO : rester `R3 EXIT REVIEW FAVORABLE — CLOSURE PENDING`. Après le GO, enregistrer la décision sous mandat D2 puis préparer les opérations Git selon leurs gates propres ; aucun GO de merge ou de lancement R4 implicite.

**Rapport documentaire de revue — statut `EXIT REVIEW CANDIDATE`.** Ne constitue ni exécution Cursor, ni décision Morris, ni PR, merge ou mise à jour de `main`.
