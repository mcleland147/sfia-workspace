# SFIA Studio Next — Conception de la qualification sémantique et de la mobilisation gouvernée des capacités

| Champ | Valeur |
| --- | --- |
| Date | 12 novembre 2026 — Europe/Paris |
| Statut du contenu | **VALIDATED IN CONTENT BY MORRIS — orientation et conception fonctionnelle** (échange du 12/11) |
| Niveau de preuve | **DOCUMENTED / VALIDATED SPEC sur le principe**, **NON IMPLÉMENTÉ / NON PROUVÉ** pour cette convergence |
| Programme | R5 — ML4C, convergence fonctionnelle transverse |
| Source technique analysée | `mcleland147/sfia-workspace` ; `main@6d237452680640324eeadbb18f4601fd7de99850` ; candidat PR #676 `2416e2ee25662821b015407346c64ec204f67488` (**non fusionné**) |
| Responsabilité de décision | Morris ; rédaction/qualification ChatGPT ; réalisation technique Cursor sous mandat SFIA v2.6 distinct |
| Source de l'orientation | [Décision du 12/11 — qualification sémantique Nora](../../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) |
| Contrats associés | [Convergence ML4C](contrat-convergence-fonctionnelle-integree.md) ; [conduite des intentions](../../cadrage/conduite-intentions-continuite-cognitive-nora-studio.md) ; [conduite Nora R2](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) |
| Portée du GO | Validation de conception et préparation documentaire ; **aucun nouveau GO Cursor, PR, merge, déploiement, release, Gate C ou ADOPTED** |

## 1. Résultat produit et invariant fondateur

Le Pilote exprime librement son intention en langage naturel, sans connaître les capacités internes ni les mots que Studio attendrait. **Nora comprend, qualifie, raisonne, prépare, organise et mobilise** les capacités pertinentes, en fonction du contexte, des contraintes, des interdictions et des dépendances. **Studio et les propriétaires D1–D9** contrôlent les contrats, les droits, les décisions humaines et l'état réel ; eux seuls réalisent et attestent les effets.

Deux formulations sémantiquement équivalentes doivent conduire à des qualifications métier équivalentes, même lorsque les verbes et les constructions grammaticales changent. La discussion, l'hypothèse, la négation, la citation et l'interrogation ne deviennent pas des commandes au seul motif qu'elles contiennent le nom d'une capacité.

**But de la convergence : remplacer et supprimer les regex, listes de synonymes et heuristiques lexicales lorsqu'elles constituent le mécanisme principal de compréhension des intentions ou de choix des capacités.** Une couche IA ajoutée au-dessus d'un routeur lexical conservé comme fallback ne satisfait pas ce contrat.

## 2. État existant et écart connu

Audit statique du candidat `2416e2ee` : plusieurs fonctions reconnaissent des expressions du Pilote pour sélectionner des actes. Exemples démontrés : `qualifyStudioIntent`, `qualifyDocumentAct`, `qualifyPilotageIntent`, `qualifyPublicationMission`, `qualifyThreadTurn`, `qualifyCognitiveProfile` ; la sélection et la capitalisation de connaissances utilisent également des heuristiques lexicales. Le traitement des décisions emploie des rapprochements linguistiques bornés.

Le cas utilisateur `S02-01` — Intervencia — a produit un **FAIL** : malgré une interdiction explicite de création, Studio a enrichi l'aperçu de projet, exposé une mission D2/D4 en attente et ajouté des diagnostics D3 à la réponse. **Aucune création effective de projet/document n'est démontrée par cette observation.** Les réserves `ML4C-A-006` et `ML4C-A-007` restent ouvertes dans le [journal de recette](journal-recette-utilisateur-ml4c.md).

Le premier correctif local A-006/A-007 sur `2416e2ee` est **non commité, non intégré et REVIEW NOT READY** : le handoff `a9dceaf9` contient encore des cas de négations erronément qualifiés et un diff documentaire incomplet. Son éventuelle valeur doit être réconciliée avec la conception présente ; **ne pas le fusionner tel quel**.

Cet audit établit des familles et des chemins connus, **pas une certification d'exhaustivité ligne par ligne** de tout le dépôt. Un balayage statique complet des sources et des appels résiduels est une preuve de sortie requise avant toute prétention de suppression exhaustive.

## 3. Chaîne cible Nora → Studio

| Étape | Propriétaire | Résultat / invariant |
| --- | --- | --- |
| Réception | D3 / Studio | Message utilisateur authentifié et conservé, clé de tour stable |
| Qualification sémantique | Nora / D3 | Objectif, intention(s), contexte, contraintes, négations, ambiguïtés, dépendances |
| Sortie structurée | Nora / D3 | Qualification typée **distincte de la réponse en prose**, sans autorité acquise par le modèle |
| Validation métier | Domaine(s) propriétaire(s) / Studio | Schéma, droits, ressources, état, autorisations applicables, cibles exactes |
| Mobilisation | Conduite D3 existante | Capacités effectivement disponibles, ordre conditionné aux dépendances |
| Effets | D2 / D4 / D5 / D6 / D7 / D9 selon l'acte | Résultat propriétaire, idempotence, refus et état incertain conservés |
| Continuité | Nora / D3 | Réévaluation de la suite sur les **résultats observés**, pas sur sa narration |
| Restitution | D3 + propriétaires / D8 | Texte intelligible, résultat structuré et preuve ; pas de diagnostics internes bruts dans le fil |

**Préférence de conception :** exploiter les capacités sémantiques de l'agent Nora déjà présent et des sorties structurées / outils typés, sans créer un moteur concurrent. Si une qualification séparée est techniquement nécessaire, la justifier par contrat, coût, latence, reprise et preuve avant validation technique.

## 4. Contenu logique de la qualification

Le modèle de données final sera arbitré dans le contrat technique. Le contrat fonctionnel exige au minimum :

| Donnée logique | Sens |
| --- | --- |
| État de qualification | Qualifiée / clarification nécessaire / indisponible |
| But utilisateur | Résultat réellement recherché |
| Intentions multiples | Actes distincts, non fusionnés artificiellement |
| Capacité proposée | Référence à une capacité existante et autorisée du catalogue |
| Paramètres et provenance | Cible, contexte, valeur, origine et manque éventuel |
| Mode d'intention | Informer, explorer, préparer, demander une opération |
| Contraintes | Interdictions, exclusions, portée et conditions exprimées |
| Dépendances | Ordre, résultat attendu et condition de poursuite |
| Indication d'autorité | Interprétation de l'acte humain **non opposable à elle seule** |
| Clarifications | Points manquants susceptibles de changer le résultat ou le risque |
| Réponse Nora | Message utilisateur séparé du contrat technique |

Une phrase exploratoire ne doit pas neutraliser une commande positive indépendante ; une commande positive ne doit pas effacer une restriction explicite applicable. Une incertitude significative déclenche une clarification ou un refus sûr.

## 5. Autorité, sécurité et continuité

- **Nora ne crée pas une autorité.** Toute HumanDecision, création D2, changement de cycle ou publication Git est soumise au contrat applicable et au Pilote là où son acte est requis.
- Une qualification IA, même typée, **ne constitue pas à elle seule le GO humain**. La preuve doit rester ancrée dans le message authentifié, la ressource et le contrôle propriétaire.
- **D2 :** conserver l'acte explicite `Créer le projet` et la frontière sas/projet. Une simple exploration ne crée ni proposition artificielle ni mission D2.
- **D4 :** séparer rédaction, création persistée, révision, consultation, sélection et capitalisation de connaissance. Une projection de document n'est pas un document AVAILABLE.
- **D5/D6 :** préserver les actes conversationnels humains admissibles selon leurs règles, sans faire de la parole de Nora une signature. Les règles de désignation, unicité et applicabilité des cibles restent aux propriétaires.
- **D7/D8/D9 :** ne pas inventer une capacité, une preuve ou un droit Git ; les autorisations au point d'effet et les références vérifiables restent distinctes.
- **Reprise :** conserver identité du tour, clés d'idempotence, fingerprints, lease, état UNKNOWN et réconciliation des effets déjà commis avant tout nouvel essai.
- **Panne cognitive :** pas de fallback lexical métier silencieux. Restituer la limite, conserver les états et demander reprise ou clarification.
- **Observabilité :** exposer diagnostics et projections via surfaces structurées prévues, sans injecter `clientIntentKey`, `step`, `capability` et autres traces dans la prose de Nora.

La convergence ne doit pas ajouter un second orchestrateur d'intentions, un état d'autorité concurrent ni une transaction générique transversale par défaut.

## 6. Cartographie initiale des suppressions / requalifications

| Source du candidat | Sortie visée |
| --- | --- |
| `conversation/intent-conduction.ts` | Retirer classification lexicale D2 et documents dépendants |
| `conversation/document-act.ts` | Retirer verbes/listes comme oracles d'intention CREATE/REVISE ; garder parseurs de structure documentaire |
| `conversation/mission-continuity.ts` | Retirer détection de publication fondée sur les verbes ; conserver corrélation, mission et reprise |
| `pilotage/intent.ts` | Retirer phrases/synonymes et actes D5/D6 identifiés lexicalement ; conserver types, contrats et données structurées |
| `pilotage/conversation-authority.ts` | Remplacer choix des actes/cibles par la qualification sémantique + validation propriétaire |
| `pilotage/thread-recovery.ts` et interface | Retirer classificateurs lexicaux dialogue/effet ; conserver protection du pending et reprise |
| `conversation/cognitive-policy.ts` | Dissocier droits/outils disponibles de mots-clés ; contrôler budgets, profils et sécurité par politique validée |
| `knowledge/service.ts` | Reconcevoir sélection et capitalisation lexicales, tout en conservant provenance et autorité D4 |
| `decisions/divergence-assist.ts` | Qualifier séparément heuristiques d'aide cognitive et leurs risques ; ne pas supprimer aveuglément les contrôles D6 |
| Fixture Nora | Aides déterministes uniquement pour tests, jamais autorité métier de production |

Ces désignations sont un **inventaire de départ** : supprimer seulement après inventaire exhaustif des usages, remplacement prouvé et vérification des appels. Les regex de validation de SHA, identifiants, chemins Git, noms de fichiers, formats Markdown, contrats API et sécurité sont explicitement **hors suppression**.

## 7. Contrat de vérification

**Parcours sémantiques :** formulations synonymes, paraphrases longues, multi-langues représentatives, négations indirectes, citations, exemples, demandes explicatives, hypothèses, contradictions, instructions positives, multi-intentions et corrections du Pilote.

**Parcours métier :** D2 création explicite et attente d'acte, D4 document CREATE/REVISE réel, D5 ouverture/clôture, D6 décisions et restrictions, D9 préparation/publication gouvernée, connaissance D4 et sélection d'outils.

**Résultats négatifs obligatoires :** aucune modification de l'aperçu, aucune mission D2/D4 artificielle, aucun document, cycle, décision, publication ou autorité induits par un simple cadrage ou une interdiction.

**Preuves :** schéma et validation ; tests unitaires/PG/E2E, reprise et non-doublon ; corpus cognitif évalué avec limites et coût/latence ; navigateur **Nora LIVE** sur même SHA/build/lane ; contrôle statique des appels et des classificateurs supprimés. Fixture déterministe ≠ preuve sémantique LIVE.

**Exit code :** aucun routeur lexical métier résiduel dans les chemins opérationnels, ni encapsulé sous un nouveau nom, ni conservé comme fallback. Les tests antérieurement couplés aux regex doivent devenir des oracles de sens, d'autorité et de résultats.

## 8. Documentation synchronisée dans la même convergence

La mise à jour de documentation est **dans le contrat d'acceptation**, pas différée après code. La livraison devra maintenir cohérents :

- Cadrage R1 et conduite des intentions (préserver leur vision déjà conforme, mise à jour uniquement si contradiction démontrée).
- Spécifications fonctionnelles R2 réellement impactées, sous gates normatifs appropriés.
- Architecture technique Next : contrat D3, entrée/sortie structurée, catalogue de capacités, sécurité et reprise.
- Contrat de convergence ML4C et matrice de suppression.
- Documentation `as-built`, tests de comportement, preuves et `construction/delivery-history.md`.
- Cahier et journal de recette : historique préservé, nouveaux scénarios et retests de `ML4C-A-006/A-007`.
- Roadmap : nouveau statut **après** les gates, jamais par anticipation.

**Contradiction code/document après livraison = KNOWN GAP.** Une conception validée n'est pas une preuve d'implémentation ; un test déterministe n'est pas un PASS LIVE.

## 9. Risques, prérequis et gates

| Risque / frontière | Conduite |
| --- | --- |
| Qualification inexacte ou sortie invalide | Refus/clarification, jamais mutation par supposition |
| Effets D5/D6 avant qualification Nora | Revoir l'ordre de traitement sans perdre l'autorité humaine et la réconciliation |
| Une intention portant plusieurs opérations | Dépendances typées, continuation réelle et idempotente |
| Coût/latence et budget du fournisseur | Mesure et limites proportionnées ; éviter deux analyses inutiles |
| Outillage indisponible | Capacité absente ou erreur réelle, pas succès simulé |
| Schéma DB/persistance | Réutiliser l'existant si possible ; tout pivot nécessite décision spécifique |
| Code local A-006/A-007 non commité | Revoir ses apports et ses risques, ne pas intégrer tel quel |
| Suppression prématurée | Remplacer et prouver avant retrait, pas de fallback lexical |
| UX globale/Figma | ML4D, sauf interface indispensable au contrat fonctionnel |

**Gate de conception (Morris) :** choix détaillés du contrat technique, catalogue des capacités, autorité, risques et critères d'acceptation.

**Gate technique (mandat Cursor séparé) :** réalisation intégrée code + tests + documentation + preuves, revue ChatGPT du Review Pack FULL et handoff Git.

**Gate recette / intégration (Morris) :** candidat identifié, tests de comportement LIVE, acceptation des réserves, GO PR/merge/promotion séparés.

**Verdict : CONCEPTION VALIDÉE EN CONTENU / NON IMPLÉMENTÉE / CONTRAT TECHNIQUE À ARBITRER.**
