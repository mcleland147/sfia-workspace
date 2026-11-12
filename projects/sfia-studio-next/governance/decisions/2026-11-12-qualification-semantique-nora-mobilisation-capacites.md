# SFIA Studio Next — Décision de principe : qualification sémantique des intentions par Nora

| Champ | Valeur |
| --- | --- |
| **Date** | **12 novembre 2026** (Europe/Paris) |
| **Autorité** | **Morris** |
| **Décision exprimée et validée** | **VALIDATED IN CONTENT BY MORRIS — ORIENTATION PRODUIT ET CONCEPTION FONCTIONNELLE** |
| **Nature** | Décision de gouvernance produit / modification du fonctionnement cible Next |
| **Portée** | Relation Pilote–Nora–Studio ; compréhension et mobilisation des capacités D1–D9, selon leur disponibilité réelle |
| **Sources** | [Conception validée](../../construction/convergence-fonctionnelle/conception-qualification-semantique-mobilisation-gouvernee.md) ; [vision conduite des intentions](../../cadrage/conduite-intentions-continuite-cognitive-nora-studio.md) ; [contrat ML4C](../../construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md) |
| **État Git de référence** | `main@6d237452680640324eeadbb18f4601fd7de99850` ; produit candidat PR #676 `2416e2ee25662821b015407346c64ec204f67488` (**OPEN / NON MERGÉ**) |
| **Nature de cette trace** | Formalisation documentaire de l'arbitrage explicite du 12/11 ; aucun verdict technique ou LIVE nouveau |
| **Limite du mandat** | Publication documentaire sur branche dédiée uniquement ; **pas de GO code/DB/CI, PR, merge, promotion, release, Gate C ni ADOPTED** |

## 1. Motif de la décision

Dans la recette ML4C `S02-01`, une demande de cadrage d'Intervencia contenant une interdiction explicite de création a pourtant été interprétée par des mécanismes applicatifs comme une intention D2/D4, avec modification d'aperçu et restitution de diagnostics internes. Le cas est classé **FAIL** ; les réserves `ML4C-A-006` et `ML4C-A-007` restent ouvertes. Aucune création effective D2/D4 n'a été démontrée.

L'audit statique transverse du candidat `2416e2ee` a identifié plusieurs familles de **regex, listes de formulations et heuristiques lexicales jouant le rôle de classificateurs d'intentions métier ou de routeurs de capacités** : projet D2, documents D4, pilotage D5/D6, publication Git D9, tri des tours en attente, politique cognitive et sélection/capitalisation de connaissance. Il s'agit d'un problème de conception transverse, non d'un simple synonyme manquant.

Cet état est en écart avec la vision validée de Next : **le Pilote exprime une intention libre ; Nora la comprend et mobilise les capacités ; Studio contrôle et exécute les seuls effets admissibles**.

## 2. Arbitrages exprimés par Morris le 12 novembre 2026

| Référence | Décision validée | Portée / limite |
| --- | --- | --- |
| **SEM-01 — Responsabilité de compréhension** | La qualification des intentions du Pilote doit relever de la compréhension contextuelle et sémantique de **Nora**, non de mots-clés imposés par Studio. | Inclut synonymes, négations, langage naturel, nuances et demandes multi-intentions ; aucun terme déclencheur obligatoire. |
| **SEM-02 — Suppression effective** | **Remplacer puis supprimer** les regex/listes lexicales servant de mécanisme principal de reconnaissance des intentions et de sélection des capacités métier. | Ne pas se contenter d'ajouter une couche IA en laissant l'ancien moteur actif, dormant ou en fallback silencieux. Suppression à prouver. |
| **SEM-03 — Préservation des règles techniques** | Les regex de validation de formats, identifiants, chemins, versions et structures restent légitimes. | Ne pas supprimer les contrôles de sécurité, de contrat, de parsing, d'idempotence ni d'autorité déterministe. |
| **SEM-04 — Autorité et effets** | Nora qualifie, organise, prépare et mobilise ; les domaines de Studio possèdent la validation, les droits, les décisions humaines et l'exécution réelle. | L'intelligence du modèle ne constitue **ni HumanDecision ni autorisation implicite**. Les actes explicites du Pilote demeurent requis là où le contrat métier le prévoit. |
| **SEM-05 — Étendue transverse** | La convergence doit couvrir **tous les points applicables** de Next, et non seulement la création D2 ou l'ouverture de cycle D5. | Inventaire exhaustif des chemins opérationnels comme condition d'exit ; respect des frontières D1–D9. |
| **SEM-06 — Pérennité et preuves** | Le remplacement doit fonctionner sous diverses formulations et langues, sans accumulation de synonymes et règles ad hoc. | Tests sémantiques, négatifs, positifs, multi-intentions et preuves LIVE proportionnées ; pas de faux PASS. |
| **SEM-07 — Synchronisation documentaire** | Mettre à jour les documents utiles et la traçabilité **en même temps que la transformation applicative**, sans perdre la conception validée. | Contrats, architecture, documentation `as-built`, tests, delivery et recette synchronisés ; gates normatifs applicables. |
| **SEM-08 — Séquencement** | Concevoir, documenter et arbitrer le **contrat technique** avant un nouveau contrat d'exécution Cursor. | La présente décision approuve le principe et la conception déjà discutée, **pas un mécanisme technique final ni un GO technique**. |

## 3. Frontières et responsabilités maintenues

- **D3 / Nora :** compréhension de l'intention, clarification, organisation du travail, mobilisation et restitution cognitive.
- **D1–D9 / propriétaires :** contrôle des préconditions et des autorisations, résolution de cible, mutations métier, état durable, idempotence, preuves et erreurs.
- **Pilote :** arbitrages, consentements, décisions et mandats requis au point d'effet.
- **Studio :** services applicatifs gouvernés et validation déterministe ; ni interpréteur métier lexical parallèle ni registre d'autorité concurrent.
- **SFIA v2.6 externe :** Cursor réalise la technique uniquement sous contrat et GO adaptés ; l'arbitrage produit de Morris n'autorise aucun push ou merge.

Le fonctionnement cible demeure **Pilote → Nora → capacités Studio → autorité applicable → effet observé → preuve → continuation**.

## 4. Conséquences et traitement des travaux ouverts

1. Le correctif local `A-006/A-007` fondé sur `2416e2ee`, déclaré `FIX IMPLEMENTED WITH RESERVES — REVIEW REQUIRED`, a reçu une revue `NOT READY`. **Il ne doit pas être intégré tel quel** ; ses apports réutilisables seront réévalués dans la convergence sémantique.
2. `S02-01` demeure **FAIL**, `S02-02` n'est pas autorisé à partir de l'état Intervencia observé ; la RECETTE actuelle ne doit pas être modifiée par cette décision.
3. La PR produit #676 reste **OPEN / NON MERGÉE**. Les documents candidats de cette branche ne deviennent pas la baseline `main` par leur seule publication.
4. Le macro-lot de convergence devra réunir architecture, implémentation, suppression effective, tests, documentation et revue ; la conception détaillée décidera d'éventuelles frontières de livraison motivées.
5. Les sources R1/R2 conformes à cette orientation gardent leur autorité et n'ont pas à être réécrites pour une simple correction d'implémentation. Les contradictions et documents `as-built` doivent en revanche être traités.

## 5. Complément Morris du 12 novembre 2026 — validation des principes techniques

Après revue du [contrat technique de qualification sémantique et mobilisation gouvernée](../../construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md), Morris confirme **« OK GO, je valide l'ensemble »**, portant sur les cinq principes soumis lors de la revue.

**Arbitrages complémentaires validés en contenu :**

1. Qualification canonique structurée par Nora D3 dans la même conduite cognitive ; `outputType` + Zod **privilégié**, pas encore prouvé compatible en intégration Next sur la version verrouillée `@openai/agents@0.21.0`.
2. Aucune création, décision, publication ou mutation sur la seule sortie IA.
3. Autorité humaine ancrée dans le message USER authentifié, vérifiée au point d'effet par le propriétaire compétent D2/D4/D5/D6/D9 ; la sortie de Nora ne vaut pas HumanDecision.
4. Qualification validée **durablement avant tout nouvel effet** et réutilisée lors des reprises sans reclassification libre ; aucune migration DB autorisée implicitement.
5. Suppression effective, après remplacement et preuve, des routeurs lexicaux métier ; aucun fallback caché ou silencieux. Les contrôles déterministes de sécurité, format, droits et état sont préservés.

**Décision de gouvernance : CONTRAT TECHNIQUE VALIDÉ EN CONTENU AVEC RÉSERVES D'EXÉCUTABILITÉ.** Il ne s'agit **ni de l'approbation d'une API finalisée et testée**, ni d'un GO Cursor, d'un pivot persistance, d'un déploiement, d'un merge ou d'une adoption produit.

**Réserves à lever :** compatibilité SDK verrouillé (sorties structurées, `finalOutput`, outils, streaming), contrat détaillé de preuve d'acte humain conversationnel D5/D6, stockage pré-effet et reprise dans le journal existant, mesure des budgets/latences et corpus LIVE avec limites explicites. Si une migration ou un changement d'autorité s'avère indispensable : **STOP et nouveau gate Morris**.

**Documentation :** la présente décision, le contrat technique, le contrat ML4C et la roadmap sont tenus en cohérence sur branche documentaire candidate. La mise à jour de l'architecture `as-built`, des contrats R2 impactés, des tests et de `delivery-history.md` sera obligatoire **dans la même livraison que les modifications techniques**, avec gate sur toute modification normative. Le journal de recette conserve `S02-01 FAIL` jusqu'à retest effectif.

## 6. Gates restants

**Acquis :** orientation produit et conception fonctionnelle de la qualification sémantique validées par Morris le 12/11 ; documentation du principe autorisée.

**Validé en contenu :** les cinq principes du contrat technique Nora → Studio. **À vérifier et lever :** l'exécutabilité SDK/streaming, la preuve d'autorité D5/D6 par acte, la persistance pré-effet, le blast radius final, la mesure coût/latence et les preuves de suppression des routeurs lexicaux métier.

**Non autorisé par la présente décision :** développement ou reprise Cursor, écriture DB/runtime/CI, restructuration normative imprévue, édition de sources protégées, push projet, PR/merge, mise à disposition RECETTE, STABLE, release, clôture de Gate C ou ADOPTED.

**Prochain gate Morris :** arbitrage des écarts d'implémentation ou de persistance qui dépasseraient la conception approuvée, puis **GO d'exécution SFIA v2.6 distinct** après pré-check et sécurisation des réserves ; aucun GO Cursor implicite.

**Verdict actualisé au 12/11 : DÉCISION DE PRINCIPE VALIDÉE / CONCEPTION FONCTIONNELLE VALIDÉE / CONTRAT TECHNIQUE VALIDÉ EN CONTENU AVEC RÉSERVES D'EXÉCUTABILITÉ / CONSTRUCTION ET PREUVES NON ACQUISES.**
