# SFIA Studio Next — Suivi de la trajectoire corrective post-recette Equipéo

| Champ | Valeur |
| --- | --- |
| Date / version | 28 novembre 2026 — v0.1 |
| Nature | Suivi opérationnel D1, non normatif, branche documentaire candidate ; ne remplace ni Roadmap, ni PV, ni registre de couverture, ni contrats |
| Mandat Morris | 28/11/2026 : accord sur l'ordre des sept lots proposé après revue du diagnostic ; GO création/publication du présent fichier sur Git sans validation rédactionnelle supplémentaire, suivi à chaque revue ; préparation du premier mandat Cursor |
| Périmètre Git D1 | Création de ce fichier uniquement sur `docs/next-openai-studio-convergence-20261126`, base `ed38685aa6ee3dd46961a88698d833a88f7a50a0` ; actualisations factuelles de ce fichier sous le mandat de suivi borné aux sept lots, relecture distante et SHA à chaque écriture. Changement de portée, doctrine, contrats normatifs et gates : GO distinct. |
| Autorités | Morris décide ; ChatGPT tient le suivi, prépare les mandats et revoit ; Cursor exécute sous contrat SFIA v2.6. |
| Programme | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / 17 MP OPEN / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |
| Campagne | Equipéo STOPPED BY MORRIS après T09 bis ; T08 DEFERRED, T10–T13 NOT RUN ; 8/13 tours exercés + répétition T09, R00 partiel. MaintiPlan suspendu. |
| Entrée produit | `sfia/next-ml5-integrated-delivery-20261123@0ae9e1f7aaee3658eb3e9a135523e83a72631b31`, tree `842537274c3ad0b2f672c9ebe2e9e0f54c55d968` ; main `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| RECETTE de référence | :3200 BUILD `p0S18hfVdGrMjGeNMGlbV`, PG :5434 schéma 027 ; DEV :3100 PG :5433. États locaux rapportés par Cursor, NON OBSERVÉS indépendamment par ChatGPT ; recontrôler à chaque mandat. WEB LIVE OFF, Admin OFF. |
| Gate courant | Trajectoire approuvée ; diagnostic READY WITH RESERVES (revue ChatGPT). Lot 1 à engager sous mandat concentré ; aucun autre GO technique, config, LIVE, promotion, push produit, PR ou merge. |

## 1. Objet et sources

Fiabiliser la Livraison 1 après les constats de la campagne Equipéo, en préservant les capacités déjà démontrées. Sept lots cohérents, séquencés avec revue à chaque sortie ; un résultat utilisateur et un intégrateur par lot. Les lots ne sont ni sept releases, ni des portes d'adoption indépendantes. Les corrections restent dans ML5 ; ne pas créer un macro-jalon concurrent.

- [SEF v0.2](../governance/SEF.md), [Roadmap](../governance/roadmap.md), [ENV-01](../governance/environnements-recette-et-promotions.md), [versioning](../governance/product-versioning.md), [nommage](../governance/product-naming-conventions.md), [R4/DATA-01](../governance/decisions/2026-11-04-r4-architecture-exit.md), [SEM](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md), [P2/F1/F2](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md).
- [PV Equipéo v0.2 §9](https://github.com/mcleland147/sfia-workspace/blob/ed38685aa6ee3dd46961a88698d833a88f7a50a0/projects/sfia-studio-next/construction/recette-metier-ml5-e2e-post-correctif-20261127.md), blob `88474002768d1705258e5db3ad0510c21deb6fe4` : observations et arbitrages, registre des 17 MP et DOC-A..F. Il reste la référence de recette, non dupliquée ici.
- [Suivi historique E1–E5 v0.19](https://github.com/mcleland147/sfia-workspace/blob/ed38685aa6ee3dd46961a88698d833a88f7a50a0/projects/sfia-studio-next/construction/suivi-macro-lot-correctif-continuite-fiabilite-ml5.md), blob `64196bd322690283cc9fd5953b0955bd97e0ba49` : séquence antérieure conservée, ce nouveau suivi porte exclusivement l'après-Equipéo.
- [Premier diagnostic](https://github.com/mcleland147/sfia-workspace/blob/1a21618c26d89f05dd82e8fa1f8e82f01ce22251/sfia-review-handoff/latest-chatgpt-review.md) : revue ChatGPT NOT READY ; [diagnostic approfondi](https://github.com/mcleland147/sfia-workspace/blob/515561e7e5bf395907bf4ec0f4c9990a36dc4aa7/sfia-review-handoff/latest-chatgpt-review.md), blob `7dddb39b87405de30d997f2e8a6d4900ae56b1d2` : READY WITH RESERVES, revue ChatGPT favorable à la préparation des corrections, pas READY FOR IMPLEMENTATION global.
- [Continuité](../conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md), [D4](../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md), [conducteur D3](../architecture-technique/conducteur-cognitif-et-production-nora.md), [allocation/FinOps](../architecture-technique/allocation-cognitive-recherche-web-et-finops.md), [CA](contrat-acceptation-cognition-et-realisation-gouvernee.md), [Travail avec Nora](convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md).
- SFIA v2.6 : guide de routage et template d'exécution sur main, routage Next uniquement. Les docs candidats non mergés ne sont pas une baseline intégrée.

## 2. Tableau de bord des sept lots

Ordre approuvé par Morris le 28/11. Les détails de mise en œuvre, scopes précis et preuves restent qualifiés dans chaque mandat. Les identifiants L1–L7 sont de suivi uniquement, jamais des noms de composants produit. Les statuts sont opérationnels : PREPARATION / AUTHORIZED / IN PROGRESS / READY FOR REVIEW / READY WITH RESERVES / NOT READY / REVIEWED / BLOCKED / ACCEPTED BY MORRIS. Distinguer construction, preuves DET/PG/BROWSER, preuve LIVE et acceptation ; aucune clôture implicite de MP. A l'initialisation, 0/7 lots qualifiés ou acceptés.

| Ordre | Lot | Résultat et références | Statut initial | Dernière preuve / gate |
| --- | --- | --- | --- | --- |
| 1 | Intégrité du cycle documentaire | V1→V2→V3, brouillon inspectable, head correcte, historique et identité fiables. DOC-A/B/C, D/E si bornés ; MP08/10/11/13 au périmètre. | PREPARATION | Diagnostic §3 ; prochain mandat de construction DEV |
| 2 | Fraîcheur des projections projet | Compteurs et surfaces actualisés après effets sans reload. MP13. | NOT STARTED | Diagnostic §9 ; attendre revue L1 |
| 3 | Admission cognitive RECETTE | Politique adaptative explicitement admise et configuration prouvée, rollback. MP15 ; prérequis MP14. | NOT STARTED — GO CONFIG DISTINCT | Diagnostic §4 ; variables absentes en RECETTE |
| 4 | Activité et restitution Nora | Activité contextualisée, historique fiable, conversation métier non parasitée. MP11, DOC-F (comparaison). | NOT STARTED | Diagnostic §5 ; arbitrer confirmations et états |
| 5 | Corrélation et fiabilité FinOps | Rattachement des mesures aux travaux, compteurs, coûts et inconnues intelligibles. MP16, support MP14. | NOT STARTED | Diagnostic §6 ; cause d'écriture du lien à localiser |
| 6 | Qualification et correction de la dictée | Diagnostic LIVE court, puis dictée et onde réellement fonctionnelles. MP06/07, MP01/02 associés. | NOT STARTED — GO LIVE DISTINCT | Diagnostic §8 ; cause fournisseur NOT OBSERVED |
| 7 | Convergence UX résiduelle | Cohérence visuelle et navigation, animation, repères, provenance et libellés, Markdown. MP02/04/05/08/10/12/17 et DOC résiduels. | NOT STARTED | Diagnostic §9 ; Figma/DOM à états appariés |

## 3. Contrats de sortie et frontières par lot

### L1 — Intégrité du cycle documentaire

- IN : DOC-A (prévisualisation du candidat), DOC-B (courante/historique exact vs actuel), DOC-C (focus obsolète après conservation). DOC-D (titre métier stable, suffixe version géré par Studio) et DOC-E (proposition consommée vs expirée) à inclure seulement si correction locale et cohérente au même cycle de vie, sinon reporter explicitement en L7. DOC-F : présentation des comparaisons L4, Markdown historique L7 sauf dépendance directe nécessaire à l'inspection.
- Cause code CONFIRMED : focus post-AVAILABLE conserve sourceRevisionId/observedHeadRevisionId anciens ; resolveReviseTarget puis garde sourceIsHistorical légitime. Lien transactionnel T09 bis PROBABLE (payload absent, PG deux révisions). DOC-A PROBABLE : identité de base et candidat mélangées, overwrite possible. DOC-B : exact et head inconnue traités comme historique. Reproduire et confirmer avant patch.
- Propriétaires D3/D4 et projections ; pas de second moteur, pas de révision sans contrôle serveur, ni mise à jour rétroactive Equipéo. Préserver BASE_STALE, autorisation historique, ownership, idempotence, lien exact, identité unique et contenu scellé.
- Exit : test BROWSER en vrai parcours client (Documents → inspecter V1 → réviser → inspecter candidat V2 → conserver → V2 courante → réviser V3 sans reset/reload/hauth artificiels → conserver), contenu affiché = candidat scellé = contenu conservé, un document / trois révisions, V1/V2 historiques intactes ; vrai historique exige confirmation, head concurrente refuse, retry/reprise sûr. DET/PG complémentaires, preuves BROWSER substituées identifiées ; LIVE ciblé distinct après autorisation.
- OUT : compteurs globaux, activité transverse, FinOps, allocation, audio, Capacité 2, redesign. Synchronisation sémantique du contrat/as-built applicable au même lot, sans modification normative non autorisée. Risque : retoucher les gardes ou références exactes ; STOP si besoin de migration ou changement d'autorité.

### L2 — Fraîcheur des projections projet

- IN : MP13 ; setProjectActivity seulement au chargement ; refresh post-tour ne répercute pas l'agrégat. Examiner aussi effets D4/D5/D6, conservation, réconciliation, retour navigation et races. Préserver le calcul propriétaire (une identité documentaire malgré plusieurs révisions).
- OUT : refonte de la carte Projet, changements de modèle D4, correction générale des connaissances. Exit : après mutation réussie, compteurs/surfaces reflètent l'état réel sans reload ; résultat partiel et erreur ne créent pas de faux succès ; BROWSER et PG sur données isolées.

### L3 — Admission cognitive RECETTE

- IN : MP15 ; même candidat, policy v0.2 présente en DEV, policy et admit absents en RECETTE → legacy_sol selon diagnostic ; contrôler configuration effective et chaîne de cutover. Proposition technique : `SFIA_COG_PROVISIONAL_POLICY=v0.2` et `SFIA_COG_PROVISIONAL_RECETTE_ADMIT=qualified-v0.2` (valeurs et conditions à revérifier). Le SHA de fichier env obsolète est rapporté surchargé au lancement.
- GO Morris distinct pour configuration, redémarrage/cutover et LIVE ; preuves non sensibles d'identité lane, admission et modèle demandé/appliqué, pas d'alternance artificielle, pas de changement de code si config suffit. Rollback documenté vers configuration précédente, vérifier les états et isolation. OUT : calibration large, T08, migration, ouverture Admin/WEB. Exit : qualification proportionnée de la politique réelle et contrôle réutilisable de promotion.

### L4 — Activité et restitution Nora

- IN : MP11 ; événements spécialisés persistés mais headline terminal générique ; confirmations ajoutées une fois par effet dans assistantBody ; DOC-F (paire de révisions et comparaison). Enrichir activité selon nature du travail avec événements réels ; historique conservé après fin/reload, distinguer identifié/consulté/comparé, effet tenté/réussi/partiel/échoué. Vérifier corrélation avec propriétaires.
- Principe Morris déjà exprimé : les acks opérationnels appartiennent à activité/historique, non au fil métier ; garder dans conversation résultats significatifs, échecs bloquants et décisions nécessitant le Pilote. Détail à arbitrer avant mandat, pas de suppression aveugle ni raisonnement privé.
- OUT : nouveau moteur OBS, activité fictive, refonte FinOps et modèle d'allocation. Exit : parcours simple et complexe contextualisés, comparaison encore visible après fin, effets exacts et sans répétition parasite, échec explicite, preuve BROWSER et PG.

### L5 — Corrélation et fiabilité FinOps

- IN : MP16 ; 44 observations sans work id, 18 sur le seul OPEN (AWAIT_PILOT), 0 sur COMPLETE alors que 5 COMPLETE rapportés. Localiser la rupture de rattachement à la production des observations avant correction ; tous les appels n'exigent pas artificiellement un travail durable. Ne pas clôturer AWAIT_PILOT par réflexe ; vérifier pertinence métier du statut séparément si nécessaire.
- Rendre lisibles période, modèle demandé/appliqué, coût connu/partiel/inconnu, tokens cache inclus dans entrée, travail/tour/génération, état terminal et mesures. Couverture des observations ≠ couverture tarifaire, estimé ≠ facturé. Admin OFF.
- Exit : chaîne réelle corrélée de bout en bout sur cas contrôlé, agrégats cohérents avec mêmes filtres et période, zéro double comptage, états légitimes et inconnues explicites. Dépendance L3 pour observation de diversification et L4 pour corrélations communes. OUT : T08, backfill automatique, nouvelle facturation fournisseur.

### L6 — Qualification et correction de la dictée

- IN : MP06/07 ; PROVIDER_ERROR au premier essai, cause LIVE non observée, flag et transport live rapportés, pas de log serveur exploitable, tests E4/E5 substitués. D'abord GO distinct pour un essai court et discriminant (proposition Cursor : 1 session sas/60s max, enveloppe et conditions à valider). Tracer code erreur/événement non sensible, admission, transport, timeout, arrêt, cleanup, brouillon et usage.
- Ne pas patcher par spéculation. Corriger la cause démontrée sous contrat borné ; vérifier voix FR, onde silence/parole, annulation et reprise du brouillon, aucun doublon. DET/PG/BROWSER et LIVE court distincts ; préserver isolation. OUT : refonte compositeur non liée, changement de modèle global.

### L7 — Convergence UX résiduelle

- IN : MP02/04/05/08/10/12/17, DOC-D/E résiduels et DOC-F Markdown, points à clarifier en puces, icônes par type, badge enfant, provenance Pilote/Nora, finalités métier et titres non techniques, animation réelle, navigation et compositeur. Requalifier les résiduels après L1–L6, scinder seulement pour frontière réelle.
- Revoir contrats/Figma applicables avant modification ; pas de verdict F2 sans mesures DOM/styling/capture à état apparié. Animation dynamique vérifiée, reduced-motion respecté. Ne pas changer le sens métier pour un libellé. OUT : approfondissement de capitalisation Capacité 2 et redesign non autorisé.
- Exit : parcours ciblés, accessibilité et fidélité contractée, non-régression des lots précédents, écarts non démontrés explicitement reportés.

## 4. Capacité 2 et qualification différée — hors des sept mandats

La constitution initiale de la continuité sas→projet, la qualification/capitalisation sélective des points ouverts, l'organisation évolutive des sujets, les acquis, la provenance et la réutilisation sont des approfondissements fonctionnels structurants (MP03/10/12). Diagnostic : fil conservé, capitalisation initiale dédiée absente, questions textuelles ≠ intentions D4 ; mécanisme exact et pertinence des intentions à approfondir. Ne pas créer un extracteur mécanique de toutes les questions ni une seconde mémoire. L7 peut traiter les bugs de projection avérés sans attendre. Capacité 2 à cadrer et arbitrer séparément ; aucune huitième autorisation implicite, aucun report silencieux d'un blocant d'acceptation. Réconcilier en D2 la règle Morris T07 (acquis vs HumanDecision), sans backfill. Gate Livraison 1 ne peut être franchi avec écarts non arbitrés.

MP14/T08 : investigation longue reportée jusqu'à admission et corrélation fiables, qualité et enveloppe comparables ; T10–T13 et autres contrôles non exercés restent ouverts. Préparer une qualification intégrée et un nouveau candidat RECETTE sous GO distinct après les corrections pertinentes, puis recette ciblée et arbitrage des réserves. Aucun PASS par déduction.

## 5. Couverture et réserves transverses

| Références | Traitement |
| --- | --- |
| MP01/06/07 | L6, accès micro positif à préserver, LIVE audio non qualifié |
| MP02/04/05/17 | L7 (MP02 aussi L6), couverture UI non exhaustive |
| MP03 | Capacité 2, L7 pour projection visuelle uniquement |
| MP08 | L1 documentaire, L7 repères/UX |
| MP09 | Nominal T05 positif à préserver par non-régression ; négatifs/idempotence/reprise à qualifier, pas de correction dédiée démontrée |
| MP10 | L1 documentaire, L7 projection, Capacité 2 connaissance |
| MP11 | L4, DOC-E éventuellement L1 |
| MP12 | L7 finalités/libellés, Capacité 2 pertinence des projections |
| MP13 | L2, L1 conserve identité unique |
| MP14 | Qualification différée après L3/L5 |
| MP15/16 | L3/L5, corrélations avec L4 |
| DOC-A/B/C/D/E/F | L1 (A/B/C, D/E conditionnels), L4 (F comparaison), L7 (résiduels D/E/F) |

Réserves du diagnostic à ne pas masquer : payload exact T09 bis non archivé ; overwrite candidat DOC-A probable ; raison de perte du work id à démontrer ; cause LIVE audio inconnue ; provenance/finalité et Figma partiels ; analyse E1–E5 améliorée mais non exhaustive ; décompte PG de sujets rapporté à réconcilier avec vues (3 observés en recette vs 2 rapportés au diagnostic) ; horodatage rapport 08:43 vs pack 08:50 ; certaines sources non relues intégralement lors de la reprise. Données locales et configuration rapportées par Cursor, non contrôlées directement par ChatGPT. Préserver les preuves positives (multi-intentions, hiérarchie, acquis, V2, garde historique, comptage unique, événements de comparaison persistés). Aucune correction de données historiques.

## 6. Modalité de pilotage et journal des revues

Pour chaque lot : pré-check Git/SEF/Roadmap/décisions, contrat SFIA v2.6 depuis Git, GO et scope bornés, un agent principal par mandat, pas de parallélisme d'intentions hétérogènes ; implémentation/tests/documentation ensemble ; review pack mono-cycle et handoff distant vérifié. Réviser cette fiche après revue, jamais sur simple affirmation de succès. Tenir : date, GO, scope effectivement exécuté, HEAD initial/final, diff et chemins, tests exacts et niveaux, handoff SHA/blob, verdict Cursor/ChatGPT, réserves, dette/exit, décisions Morris, prochaine action. L'ancien état reste dans l'historique Git et le journal ci-dessous. Si un lot est NOT READY, corriger/compléter ce lot avant d'avancer sauf arbitrage explicite. Aucun lot suivant automatiquement autorisé.

| Date | Événement | Référence / verdict | Suite |
| --- | --- | --- | --- |
| 28/11/2026 | Campagne Equipéo arrêtée après T09 bis | PV v0.2 @ ed38685a | Diagnostic causal |
| 28/11/2026 | Premier diagnostic | 1a21618c / revue NOT READY | Approfondissement demandé |
| 28/11/2026 | Diagnostic repris | 515561e7 / revue READY WITH RESERVES | Trajectoire proposée |
| 28/11/2026 | Accord Morris sur les sept lots et publication du suivi | Présent document v0.1, mandat D1 ; 0/7 acceptés | Préparer mandat L1, autres lots sous gates distincts |

**Prochaine action :** L1 intégrité du cycle documentaire, construction ciblée DEV après pré-check et contrat Cursor. Pas de mutation RECETTE, de push produit, de PR/merge, de clôture de MP ou d'adoption. La publication du présent suivi n'est ni un résultat technique ni un nouvel arbitrage normatif.
