# SFIA Studio Next — Suivi de la trajectoire corrective post-recette Equipéo

| Champ | Valeur |
| --- | --- |
| Date / version | 28 novembre 2026 — v0.4, sortie technique L1 |
| Nature | Suivi opérationnel D1, non normatif, branche documentaire candidate ; ne remplace ni Roadmap, ni PV, ni registre de couverture, ni contrats |
| Mandat Morris | 28/11/2026 : accord sur l'ordre des sept lots proposé après revue du diagnostic ; GO création/publication du présent fichier sur Git sans validation rédactionnelle supplémentaire, suivi à chaque revue ; préparation du premier mandat Cursor |
| Périmètre Git D1 | Création de ce fichier uniquement sur `docs/next-openai-studio-convergence-20261126`, base `ed38685aa6ee3dd46961a88698d833a88f7a50a0` ; actualisations factuelles de ce fichier sous le mandat de suivi borné aux sept lots, relecture distante et SHA à chaque écriture. Changement de portée, doctrine, contrats normatifs et gates : GO distinct. |
| Autorités | Morris décide ; ChatGPT tient le suivi, prépare les mandats et revoit ; Cursor exécute sous contrat SFIA v2.6. |
| Programme | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / 17 MP OPEN / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |
| Campagne | Equipéo STOPPED BY MORRIS après T09 bis ; T08 DEFERRED, T10–T13 NOT RUN ; 8/13 tours exercés + répétition T09, R00 partiel. MaintiPlan suspendu. |
| Entrée produit | `sfia/next-ml5-integrated-delivery-20261123@0ae9e1f7aaee3658eb3e9a135523e83a72631b31`, tree `842537274c3ad0b2f672c9ebe2e9e0f54c55d968` ; main `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| RECETTE de référence | :3200 BUILD `p0S18hfVdGrMjGeNMGlbV`, PG :5434 schéma 027 ; DEV :3100 PG :5433. États locaux rapportés par Cursor, NON OBSERVÉS indépendamment par ChatGPT ; recontrôler à chaque mandat. WEB LIVE OFF, Admin OFF. |
| Candidat DEV courant | `96c0129f6dce61cd1f545d1b07821ea6d6e67e9b`, tree `8b320ccaa383fa14cf296e7e3b0255eb9254397b` — PUBLISHED DEV, CI distante NOT RUN. RECETTE reste au candidat d'entrée. |
| Gate courant | L1 : Cursor et ChatGPT READY WITH RESERVES — sortie technique favorable (§9), acceptation Morris et qualification RECETTE distinctes. L2 prêt à être cadré sous GO Morris, non engagé. Commit/push DEV autorisé dans les mandats techniques bornés ; aucun GO config, LIVE, promotion, PR ou merge. |

## 1. Objet et sources

Fiabiliser la Livraison 1 après les constats de la campagne Equipéo, en préservant les capacités déjà démontrées. Sept lots cohérents, séquencés avec revue à chaque sortie ; un résultat utilisateur et un intégrateur par lot. Les lots ne sont ni sept releases, ni des portes d'adoption indépendantes. Les corrections restent dans ML5 ; ne pas créer un macro-jalon concurrent.

- [SEF v0.2](../governance/SEF.md), [Roadmap](../governance/roadmap.md), [ENV-01](../governance/environnements-recette-et-promotions.md), [versioning](../governance/product-versioning.md), [nommage](../governance/product-naming-conventions.md), [R4/DATA-01](../governance/decisions/2026-11-04-r4-architecture-exit.md), [SEM](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md), [P2/F1/F2](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md).
- [PV Equipéo v0.2 §9](https://github.com/mcleland147/sfia-workspace/blob/ed38685aa6ee3dd46961a88698d833a88f7a50a0/projects/sfia-studio-next/construction/recette-metier-ml5-e2e-post-correctif-20261127.md), blob `88474002768d1705258e5db3ad0510c21deb6fe4` : observations et arbitrages, registre des 17 MP et DOC-A..F. Il reste la référence de recette, non dupliquée ici.
- [Suivi historique E1–E5 v0.19](https://github.com/mcleland147/sfia-workspace/blob/ed38685aa6ee3dd46961a88698d833a88f7a50a0/projects/sfia-studio-next/construction/suivi-macro-lot-correctif-continuite-fiabilite-ml5.md), blob `64196bd322690283cc9fd5953b0955bd97e0ba49` : séquence antérieure conservée, ce nouveau suivi porte exclusivement l'après-Equipéo.
- [Premier diagnostic](https://github.com/mcleland147/sfia-workspace/blob/1a21618c26d89f05dd82e8fa1f8e82f01ce22251/sfia-review-handoff/latest-chatgpt-review.md) : revue ChatGPT NOT READY ; [diagnostic approfondi](https://github.com/mcleland147/sfia-workspace/blob/515561e7e5bf395907bf4ec0f4c9990a36dc4aa7/sfia-review-handoff/latest-chatgpt-review.md), blob `7dddb39b87405de30d997f2e8a6d4900ae56b1d2` : READY WITH RESERVES, revue ChatGPT favorable à la préparation des corrections, pas READY FOR IMPLEMENTATION global.
- [Continuité](../conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md), [D4](../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md), [conducteur D3](../architecture-technique/conducteur-cognitif-et-production-nora.md), [allocation/FinOps](../architecture-technique/allocation-cognitive-recherche-web-et-finops.md), [CA](contrat-acceptation-cognition-et-realisation-gouvernee.md), [Travail avec Nora](convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md).
- SFIA v2.6 : guide de routage et template d'exécution sur main, routage Next uniquement. Les docs candidats non mergés ne sont pas une baseline intégrée.

## 2. Tableau de bord des sept lots

Ordre approuvé par Morris le 28/11. Les détails de mise en œuvre, scopes précis et preuves restent qualifiés dans chaque mandat. Les identifiants L1–L7 sont de suivi uniquement, jamais des noms de composants produit. Les statuts sont opérationnels : PREPARATION / AUTHORIZED / IN PROGRESS / READY FOR REVIEW / READY WITH RESERVES / NOT READY / REVIEWED / BLOCKED / ACCEPTED BY MORRIS. Distinguer construction, preuves DET/PG/BROWSER, preuve LIVE et acceptation ; aucune clôture implicite de MP. À la revue v0.4 : 1/7 lot avec revue de sortie technique favorable et réserves de recette explicites ; 0/7 lots acceptés par Morris à ce stade ; 6 non engagés.

| Ordre | Lot | Résultat et références | Statut courant | Dernière preuve / gate |
| --- | --- | --- | --- | --- |
| 1 | Intégrité du cycle documentaire | V1→V2→V3, brouillon inspectable, head correcte, historique et identité fiables. DOC-A/B/C, D/E si bornés ; MP08/10/11/13 au périmètre. | REVIEWED — READY WITH RESERVES (SORTIE TECHNIQUE FAVORABLE) | 96c0129f / be036274 ; trois gardes revues, DET PASS ; BROWSER/RECETTE différés §9 |
| 2 | Fraîcheur des projections projet | Compteurs et surfaces actualisés après effets sans reload. MP13. | NOT STARTED | Diagnostic §9 ; attendre revue L1 |
| 3 | Admission cognitive RECETTE | Politique adaptative explicitement admise et configuration prouvée, rollback. MP15 ; prérequis MP14. | NOT STARTED — GO CONFIG DISTINCT | Diagnostic §4 ; variables absentes en RECETTE |
| 4 | Activité et restitution Nora | Activité contextualisée, historique fiable, conversation métier non parasitée. MP11, DOC-F (comparaison). | NOT STARTED | Diagnostic §5 ; arbitrer confirmations et états |
| 5 | Corrélation et fiabilité FinOps | Rattachement des mesures aux travaux, compteurs, coûts et inconnues intelligibles. MP16, support MP14. | NOT STARTED | Diagnostic §6 ; cause d'écriture du lien à localiser |
| 6 | Qualification et correction de la dictée | Diagnostic LIVE court, puis dictée et onde réellement fonctionnelles. MP06/07, MP01/02 associés. | NOT STARTED — GO LIVE DISTINCT | Diagnostic §8 ; cause fournisseur NOT OBSERVED |
| 7 | Convergence UX résiduelle | Cohérence visuelle et navigation, animation, repères, provenance et libellés, Markdown. MP02/04/05/08/10/12/17 et DOC résiduels. | NOT STARTED | Diagnostic §9 ; Figma/DOM à états appariés |

## 3. Contrats de sortie et frontières par lot

### L1 — Intégrité du cycle documentaire

- IN : DOC-A (prévisualisation du candidat), DOC-B (courante/historique exact vs actuel), DOC-C (focus obsolète après conservation). DOC-D (titre métier stable, suffixe version géré par Studio) et DOC-E (proposition consommée vs expirée) conditionnels au mandat initial ; report L7 confirmé dans le mandat de finalisation (§8). DOC-F : présentation des comparaisons L4, Markdown historique L7 sauf dépendance directe nécessaire à l'inspection.
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

| 28/11/2026 09:21 +01 | L1 — construction locale et revue indépendante | Cursor READY WITH RESERVES / ChatGPT NOT READY pour sortie ; handoff 451e9179, §7 | Complément ciblé sous GO Morris ; pas de L2 |

| 28/11/2026 | Arbitrage Morris : publication DEV avant revue | Commit/push source autorisé par mandat, CI distante non lancée, handoff maintenu | Appliqué à la finalisation L1 |
| 28/11/2026 09:52 +01 | L1 — finalisation publiée | 30d59851 / c186d999 ; Cursor READY WITH RESERVES, ChatGPT NOT READY pour sortie (§8) | Correctif résiduel ciblé à arbitrer, pas de L2 |

| 28/11/2026 | Arbitrage Morris : qualification proportionnée DEV/RECETTE | DEFERRED TO RECETTE pour contrôles difficiles en DEV, sans faux PASS ni report d'un défaut avéré | Applicable aux sept lots, §9.1 |
| 28/11/2026 10:05 +01 | L1 — ajustement final et revue | 96c0129f / be036274 ; Cursor et ChatGPT READY WITH RESERVES, sortie technique favorable | GO Morris pour L2 attendu ; recette différée |

**Prochaine action :** arbitrage Morris de sortie technique L1 et GO borné du L2 — Fraîcheur des projections projet. Pas de reprise générale L1, mutation RECETTE, PR/merge, clôture de MP ou adoption.

## 7. Revue indépendante L1 — 28 novembre 2026

### 7.1 Identité et contrôle de portée

Rapport Critical Cursor 09:21+01 ; pack 09:20:09+01. [Handoff Full](https://github.com/mcleland147/sfia-workspace/blob/451e9179f0f5a608a47c92a06796552438374eae/sfia-review-handoff/latest-chatgpt-review.md), blob `a4fe170bde6db3120e0ebafe395d376e70136731`, 1217 lignes, commit mono-fichier vérifié. Main, produit et docs d'entrée inchangés avant cette mise à jour. Code de base `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`, tree `842537274c3ad0b2f672c9ebe2e9e0f54c55d968`. Diff local non committé : SHA candidat final NON ATTRIBUÉ. ChatGPT a relu le diff et le test nouveau inclus au pack, les sources SEF/Roadmap/P2/SEM et les portions de code d'entrée ; état local, exécution des tests, captures binaires et PG non vérifiés indépendamment.

8 fichiers rapportés : page projet, DocumentSurfaces, TravailViewer, fixture-semantic-qualify, unit documents-surfaces-projection, nouveau e2e document-revision-lifecycle, delivery-history et as-built Ensemble 06. 7 modifications + 1 création. Le fichier `web/src/domains/conversation/fixture-semantic-qualify.ts` n'était pas dans l'allowlist code explicite : extension bornée de fixture vraisemblablement utile, garde TEST_BOUNDARY préexistante constatée dans Git ; écart de périmètre à régulariser explicitement, pas d'autorisation rétroactive supposée. Aucune modification du service propriétaire D4 ni de document-act/service conversation dans le diff fourni. Pas de migration. La preuve de diff complet repose sur le pack et le statut rapporté. La mention « Content coverage N/A » est erronée pour un lot comportant code et documents modifiés ; contenu créé et diff sont effectivement fournis, couverture à corriger et confirmer.

### 7.2 Résultats positifs et preuves

| Sujet | Résultat et niveau |
| --- | --- |
| DOC-C | Rebase du focus après AVAILABLE du document correspondant vers révision écrite ; garde historique serveur inchangée. Cause statique corroborée ; payload T09 bis original absent. |
| DOC-A | Identité candidat distincte d'une révision durable, incrément du numéro de requête à la projection, corps candidat affiché au nominal ; erreur de corps prévue. Course exacte pré-correctif non reproduite en navigateur de façon discriminante. |
| DOC-B | Exact distinct de courant/historique, état non vérifié introduit ; nominal courant V2/V3 et V1 historique exercés. |
| DET | 18 PASS documents-surfaces-projection sur état final rapporté ; 8 PASS document-act/pending-proposal-viewer avant déplacement des fonctions, à rejouer au diff final. |
| PG | 10 PASS : historique (4), autonomie documentaire (3), conserve-only (1), candidat (1), hauth/pdoc (1). Gardes propriétaires inchangées. |
| BROWSER | 1 spec nouveau PASS 24,2 s, :3101 / sfia_next_e2e, Nora substituée, vrai parcours client : V1 → candidat V2 visible → pas de V2 durable avant conservation → V2 courante → candidat V3 dans même fil sans reload/injection → V3 courante → historique V1/V2/V3, une identité, V1 historique demande confirmation, aucune V4 sans choix, reload V3. Les marqueurs textuels sont discriminants ; empreintes intégrales non rapprochées. |
| Environnement | Webpack canonique échoue sur @cursor/sdk/agent.d.ts.map ; test réussi sous Turbopack, même port/base de test rapportés, clé OpenAI vidée, serveur arrêté. Lint ciblé exit 0 et diff --check clean. TypeScript et build de production non documentés. RECETTE BUILD p0S18hf inchangé selon Cursor ; aucune émission LIVE. |
| Captures | 6 PNG locales inventoriées avec empreintes dans pack ; non consultées indépendamment. Pas de F2. |
| DOC-D/E | Report proposé au L7 : pas de suppression lexicale aveugle de V1 ni backfill ; distinction consommée/expirée à projeter à partir des états réels (nécessité d'un nouvel état durable non démontrée). |

### 7.3 Réserves de revue et complément ciblé avant sortie

1. **Identité / concurrence client (bloquant pour sortie).** Annexe A : `resolveTravailDocumentPresentation` identifie une proposition par égalité Markdown alors que `proposalCandidateId` existe ; une révision durable de contenu identique pourrait être étiquetée proposition. Utiliser identité de ressource/candidat et contenu vérifié, pas texte seul. Dans `page.tsx` le retour AVAILABLE efface pending globalement et peut actualiser le viewer de n'importe quel document ; le garde documentId de la fonction pure ne couvre pas toute la chaîne. Le retour candidat peut réutiliser le focus courant d'un autre document et la restauration asynchrone du candidat au reload ne vérifie pas systématiquement qu'il s'agit encore du focus sélectionné. Scénarios de navigation A→B, retour tardif, restauration, réponses concurrentes : reproduire/infirmer, corriger strictement les chemins démontrés, pas de réarchitecture. Le garde `documentTurnGenRef` englobe tout `res.ok`, donc risque de sauter réconciliation et restitution d'autres effets D3/D5/D6 ; démontrer l'impossibilité du cas ou isoler la garde au contexte documentaire, conserver les résultats propriétaires. Vérifier également l'actualité sur head non disponible ou snapshot contradictoire et ne pas inventer de numéro si le résultat ne le fournit pas.
2. **Contrat de preuve (bloquant).** A17 liens exacts conversationnels non rejoués, B empreinte/contenu intégral avant/après non rapprochés, C09/C13/C14 absence d'essai BROWSER discriminant, C10 ownership non rejoué ; C03/C04 et historique E2E à compléter/rejouer proportionnellement. Couvrir notamment candidat remplacé/indisponible, contenu identique candidat/révision, lecture D4 tardive après proposition, changement de document pendant attente et reload/reprise du candidat/ACK perdu. ACK perdu : ne pas rebaser vers une head non attribuable ; examiner chemin de réconciliation par corrélation de la conservation connue et prouver absence de doublon et reprise honnête. Ne pas exiger une nouvelle émission LIVE. Tests existants possibles : réutiliser les PG et spec historique, prouver intégrité par comparaison intégrale/empreinte des révisions et candidat, vérifier base V2 réellement transmise, aucune injection d'identifiants contournant la chaîne. Fixture V3 distincte est une preuve mécanique, pas preuve de qualité cognitive cumulative.
3. **Qualification technique (bloquant avant commit).** Rejouer les tests affectés au diff final, TypeScript et build de production isolé, lint/diff, analyser le blocage webpack avec cause et baseline démontrées (ne pas réparer @cursor/sdk dans ce lot). Un échec préexistant peut rester réserve après qualification et arbitrage, pas un PASS fictif. Identifier les tests non exécutés et les sources obligatoires effectivement lues (la liste §4 du pack est insuffisante pour confirmer SEF/ENV/SEM/méthode lus par Cursor). Contrat UX page 08 réutilisé, pas de redesign ni F2 fort.
4. **Mandat et traçabilité.** Régulariser la fixture test-only via GO borné de Morris (ou alternative autorisée), vérifier son inaccessibilité hors fixture lane, corriger la content coverage (created/modified, pas N/A), restituer diff final complet et preuve mono-cycle. Aucun commit projet ni nouvelle autorisation externe.

### 7.4 Verdict et gate

**ChatGPT : NOT READY — résultat central positif, complément de fiabilité et preuves avant sortie du lot.** Ne pas annuler le travail nominal ; pas de reprise intégrale, ni nouveau macro-lot. Le choix de report DOC-D/E vers L7 et l'extension de fixture sont proposés à Morris. Le lot 1 reste ouvert ; les six autres restent non démarrés. Prochaine décision : GO borné pour le complément de L1, puis nouvelle revue distante avant commit éventuel. Préserver diff actuel, RECETTE et projets métier. Aucune acceptation de réserve, MP clôturée, mutation produit ou évolution de la trajectoire approuvée par cette contribution D1.

Mandat de cette actualisation : suivi documentaire borné accordé par Morris le 28/11, fichier unique, base `b93cf033dc906c35ff5aecd949590c9d5d46d11b`, branche `docs/next-openai-studio-convergence-20261126`. Pas de modification des autres documents, ni main, ni produit, ni handoff.

## 8. Revue indépendante de finalisation L1 — 28 novembre 2026

### 8.1 Nouveau mode de publication approuvé

Morris décide, après la revue v0.2, que chaque mandat technique autorisé de cette trajectoire doit produire un candidat source DEV complet et cohérent sur la branche produit, commit/push fast-forward avant revue, sans déclenchement de CI distante à ce stade. Le Review Handoff reste required / publish-in-cycle, séparé du commit produit. Sur un diagnostic sans changement, vérifier le SHA existant, aucun commit artificiel. Le code, les tests et l'as-built autorisés sont publiés ; secrets, données, dumps, caches et artefacts locaux exclus. Vérifier SHA/tree, diff et identité distante ; pas de PR, merge, main, promotion RECETTE, STABLE ou changement de workflow sans gate distinct. PUBLISHED DEV ≠ REVIEWED ≠ ACCEPTED ≠ PROMOTED. Cette trace opérationnelle D1 ne modifie ni SEF, ni SFIA v2.6. DOC-D/E reportés au L7 ; extension de fixture test-only régularisée par le mandat de finalisation.

### 8.2 Git et résultats

- [Candidat DEV](https://github.com/mcleland147/sfia-workspace/commit/30d598515766781d987f8dba3348f6fa9e659a80) : parent `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`, tree `29f61e767b37a44c54c3e75818b96496fd1b6624`, HEAD distant vérifiés indépendamment. Comparaison Git : un commit en avance, 0 en retard, 8 fichiers, +1102/-143, périmètre autorisé. Main `997897fd7cf914771e7d08e8030dc7123fab7d25` inchangé. Aucun workflow exécuté sur ce SHA selon API Actions (total_count=0). Pas de mutation de workflow.
- [Handoff Full](https://github.com/mcleland147/sfia-workspace/blob/c186d99932b15402af01704748e0dd613ae378ac/sfia-review-handoff/latest-chatgpt-review.md) : blob `8609af4367f33d283f0252fd5ae8f792eff159f6`, 1813 lignes, commit mono-fichier, pack 09:52+01, SHA produit présent ; diff utile et nouveau test accessibles sur Git. Cursor READY WITH RESERVES.
- Revue directe : page.tsx, DocumentSurfaces, TravailViewer, fixture, tests unitaires et Playwright, portions de dépendances D4 et as-built/delivery history. Code propriétaire et gardes serveur inchangés dans le diff. Local, données PG et captures non contrôlés indépendamment. Cursor n'a pas relu intégralement SEF/Roadmap/PV/contrats et décisions dans ce cycle ; écart documentaire de processus, à éviter. Les preuves locales ci-dessous sont rapportées, les assertions et branches citées ont été relues.

| Contrôle | Résultat |
| --- | --- |
| DOC-A/B/C nominal | V1→V2→V3, 1 document, V2 base effective de V3 ; identité candidat distincte, V2/V3 inspectables avant sauvegarde, exact/courant/historique distingués. BROWSER substitué rapporté PASS. |
| Intégrité | Les tests API comparent markdown intégral et empreinte scellée des candidats V2/V3 aux révisions ; V1/V2 inchangées après V3. Le DOM vérifie les marqueurs et identités, pas un rendu intégral textuel équivalent au markdown. |
| DET / PG / BROWSER | 30 / 10 / 2 PASS rapportés. Le deuxième Playwright retarde l'envoi POST de conservation, ferme la visionneuse puis libère la requête ; V2 effectivement écrite, visionneuse non rouverte. Historique V1/V2 consulté, vraie base historique exige choix, aucune V4 avant choix. |
| Build / lint | next build isolé exit 0 et contrôle types du build PASS, lint ciblé exit 0, diff --check propre. tsc --noEmit exit 2 sur tests hors lot selon Cursor ; préexistence non démontrée par rejeu comparatif de la base dans le pack. |
| Webpack | /login 500, parse @cursor/sdk/agent.d.ts.map via chaîne adapter/service/supervisor non modifiée ; Turbopack :3101 / sfia_next_e2e, 40,1 s pour 2 tests. Cause d'outillage crédible, préexistence non reproduite sur base immuable. Ne pas corriger le SDK dans L1. |
| ENV/REAL | RECETTE :3200 toujours worktree 0ae9e1f7, BUILD p0S18hf de référence selon historique, processus 77113 selon Cursor ; aucune nouvelle émission fournisseur ni migration rapportées. LIVE NOT RUN ; aucune preuve F2. |

### 8.3 Réserves résiduelles et décision proposée

**Défaut statique concret restant, au périmètre du complément demandé :** dans [page.tsx L2225–2303](https://github.com/mcleland147/sfia-workspace/blob/30d598515766781d987f8dba3348f6fa9e659a80/projects/sfia-studio-next/web/src/app/projects/%5BprojectId%5D/page.tsx#L2225-L2303), la restauration asynchrone protège la branche de succès par pendingCandidateRestoreIsCurrent (projet, document, candidat, génération). Mais les branches HTTP/état non PENDING/markdown absent (L2228) et catch (L2302) exécutent setPendingProposal(null) sans garde équivalente. Un retour ancien en erreur peut effacer la proposition active plus récente ; le statusHint HEAD peut également polluer le contexte. Ce chemin n'est pas couvert par le test DET de succès obsolète. Corriger la garde d'identité sur **tous** les retours (succès, erreur, exception) ; prouver par test discriminant au moins un échec tardif après changement de document/candidat. Aucun effet durable D4 à annuler ; impact UI et capacité de conservation, pas de corruption PG démontrée. 

**Autres incohérences à traiter dans le même ajustement borné si confirmées :** [DocumentSurfaces.tsx L94–121](https://github.com/mcleland147/sfia-workspace/blob/30d598515766781d987f8dba3348f6fa9e659a80/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx#L94-L121) copie l'ancien numéro de source si save.revisionNumber absent, puis l'associe au nouvel ID ; laisser inconnu plutôt que présenter un numéro erroné. [page.tsx L1611–1645](https://github.com/mcleland147/sfia-workspace/blob/30d598515766781d987f8dba3348f6fa9e659a80/projects/sfia-studio-next/web/src/app/projects/%5BprojectId%5D/page.tsx#L1611-L1645) attend la head avant de changer le focus, sans génération de sélection vérifiée sur retour ; tester A→B avec résolution retardée, y compris même document/révision différente si pertinent. Ne pas étendre aux autres domaines. Vérifier le contrat de réponse propriétaire avant de qualifier les chemins dégradés. Le garde global L2898 ignore le résultat d'un tour ancien déjà dépassé ; vérifier que le snapshot plus récent ou la réconciliation couvre les effets durables, ne pas annoncer une garantie absolue non exercée.

**Réserves de preuve restantes :** A→B, lecture D4 tardive, restauration obsolète et ACK perdu non exercés au navigateur ; anciens liens exacts conversationnels non explicitement testés (historique bibliothèque vérifié). Le refus historique sans V4 est exercé, pas l'intégralité du parcours de confirmation dans cette nouvelle spec ; PG couvre les protections propriétaires. Ne pas refaire une campagne globale. Prioriser un test discriminant du défaut identifié et les assertions de focus/numéro ; conserver les autres limites en qualification intégrée ciblée si Morris les accepte. Aucune résolution LIVE nécessaire. Les échecs TypeScript global et Webpack sont réserves d'outillage à suivre et à réconcilier avant intégration/CI, pas preuve de régression L1 ; ne pas lancer de chantier SDK ou réparation tests hors lot. DOC-D/E confirmés L7, ne pas créer un nouvel état durable sans nécessité démontrée.

**Verdict ChatGPT : NOT READY pour sortie L1, nominal BROWSER substitué et intégrité API/PG positifs, publication DEV vérifiée.** Le risque concret de retour d'erreur obsolète concerne directement le contrat du complément et justifie un dernier ajustement ciblé plutôt qu'une troisième reprise générale. Proposer à Morris ce mandat borné, puis revue au nouveau SHA ; L2 reste non engagé. Aucun verdict de clôture MP ou acceptation Livraison 1. Le registre conserve les réserves v0.2 comme historique, sans les confondre avec l'état actuel.

Actualisation D1 du fichier unique à partir de `18997b8d452115d7296a8e76f0baa571c89a6576`, branche `docs/next-openai-studio-convergence-20261126`, sous mandat de suivi Morris. Aucun changement de code, main, handoff, configuration ou norme.

## 9. Revue indépendante de sortie technique L1 — 28 novembre 2026

### 9.1 Arbitrage Morris — qualification proportionnée DEV/RECETTE

GO du 28/11 : pour ce complément et les lots suivants, privilégier les preuves déterministes, PG et BROWSER raisonnablement obtenables en DEV. Ne pas imposer de harness ou simulation disproportionnés pour les comportements naturellement vérifiables en RECETTE. Un contrôle différé doit porter le statut DEFERRED TO RECETTE, une raison, un protocole, un résultat attendu, les preuves à recueillir et son caractère bloquant ou non pour l'acceptation finale. Un report n'est pas un PASS. Les défauts avérés restent à traiter ; les invariants d'intégrité, sécurité, autorité et persistance doivent être sécurisés. Pas d'acceptation produit par simple sortie technique. Cet arbitrage opérationnel ne modifie pas SEF ni ENV-01 ; aucun GO de promotion ou LIVE implicite.

### 9.2 Candidat et revue

- [Commit DEV](https://github.com/mcleland147/sfia-workspace/commit/96c0129f6dce61cd1f545d1b07821ea6d6e67e9b), parent `30d598515766781d987f8dba3348f6fa9e659a80`, tree `8b320ccaa383fa14cf296e7e3b0255eb9254397b` vérifiés directement ; avance 1/retard 0, 5 fichiers (+175/-10), tous dans l'allowlist. Main `997897fd7cf914771e7d08e8030dc7123fab7d25` inchangé. API Actions : 0 run pour ce SHA.
- [Handoff](https://github.com/mcleland147/sfia-workspace/blob/be0362745860f38760b3934e4b09d7966b2fe4d1/sfia-review-handoff/latest-chatgpt-review.md), blob `2c4bcab75179d6f1035860938ec3ee2e75150128`, 477 lignes, mono-fichier vérifié, pack 10:05+01 ; diff complet, aucune création, SHA produit présent. Cycle 08 / Critical / Full. Cursor READY WITH RESERVES.
- Revue ChatGPT directe du code final et du diff : page.tsx, DocumentSurfaces, tests unitaires associés et garde de génération utilisée lors de fermeture/changement de sélection ; as-built et delivery history mis à jour. SEF, Roadmaps main/candidate, P2, SEM, R4 et ENV-01 revérifiés. Aucun changement de D4, schéma, workflow, configuration ou architecture. État local, captures et exécutions non observés indépendamment. Cursor indique une lecture ciblée, sans relecture intégrale de certaines sources demandées ; écart de processus non bloquant pour ce complément borné, sources applicables à reconsulter au prochain mandat.

| Correction | Vérification |
| --- | --- |
| Restauration en erreur | page.tsx L2238–2279 et L2329–2348 : garde pendingCandidateRestoreOwnsContext avant effets HTTP/non PENDING/corps manquant et catch ; contrôle projet/document/candidat/génération ; effacement conditionnel de la proposition correspondante. Succès réutilise la même garde et vérifie document/corps. |
| Numéro inconnu | DocumentSurfaces.tsx L94–121 : nouvel ID conservé, numéros source/head undefined si D4 ne fournit pas de numéro ; aucun héritage de l'ancien numéro. |
| Résolution de sélection | page.tsx L1622–1655 : génération réservée avant await, contrôle de projet/génération/fermeture au retour, avant focus, viewer et demande historique. Fermeture et changement de projet invalident la génération. |
| Preuve actuelle | 25 PASS unitaires documentaires rapportés ; assertions lues (gardes positives/négatives, numéro absent). Lint ciblé exit 0, build de production isolé et types du build PASS, diff --check propre. DET et intégration statique vérifiées, pas de nouvelle preuve navigateur. |
| Preuves héritées | 10 PG et 2 Playwright PASS sur 30d59851 seulement ; D4 inchangé. V1→V2→V3, identité unique, contenu/empreintes et historique prouvés sur ce candidat antérieur avec Nora substituée. Ne pas les présenter comme rejoués sur 96c0129f. |
| Environnements | RECETTE processus 77113 sur :3200 inchangé selon Cursor ; DEV :3100 processus 55011 ; aucun redémarrage, aucune émission OpenAI, aucune migration rapportés. Local NON OBSERVÉ. |

### 9.3 Contrôles de recette à reprendre

Tous les contrôles ci-dessous restent ouverts ; aucun PASS déduit. Exécuter sur un futur SHA/build RECETTE figé sous GO Morris distinct, projet de qualification isolé des campagnes historiques ; tracer le SHA, les résultats et les preuves. Les reproductions de course doivent être discriminantes (ordre des réponses observé), pas seulement un clic nominal.

| Contrôle | Conditions / résultat attendu | Preuve et gate |
| --- | --- | --- |
| DOC-REC-01 — restauration en erreur obsolète | Proposition en attente, reload, ralentir/interrompre la requête candidat puis changer de document/candidat. L'ancienne erreur ne modifie pas proposition, focus, visionneuse ou statut du nouveau contexte. Erreur encore courante : traitement honnête du candidat concerné. | Manuel instrumenté : capture UI et chronologie réseau expurgée ; requis avant acceptation Livraison 1. |
| DOC-REC-02 — résolution de tête dépassée | Depuis historique, demande de révision A puis B (ou autre révision du même document) pendant lecture retardée ; variante fermeture. Seule dernière sélection applicable ; pas de confirmation historique pour A abandonnée ; viewer fermé reste fermé. | Manuel instrumenté : capture fil et chronologie réseau ; requis avant acceptation Livraison 1. |
| DOC-REC-03 — parcours nominal | V1→proposition V2 inspectée→conservation→proposition V3 depuis V2→conservation, sans reload intermédiaire ; une identité, trois révisions, V1/V2 intactes et vraie base historique protégée. | Rejeu fonctionnel sur futur candidat, Nora LIVE seulement sous GO ; requis avant acceptation. |
| DOC-REC-04 — ACK perdu | Interruption après effet de conservation, reprise par identité/corrélation ; aucune duplication, aucun rebase sur une head non attribuable ; état inconnu honnête si non résolu. | Manuel instrumenté, données de test ; preuve propriétaire + UI ; contrôle d'intégrité requis avant acceptation. |
| DOC-REC-05 — références exactes | Ouvrir depuis anciennes réponses Nora les liens V1/V2 après V3 ; contenu exact préservé, statut courant/historique exact, aucune mutation. | Manuel : captures et révisions identifiées ; requis avant acceptation. |
| DOC-REC-06 — autres courses A→B | Lecture D4 tardive pendant proposition, sélection d'un autre document pendant conservation, retour tardif et restauration devenue obsolète. Résultat A conservé sans contaminer B ; pas de perte des autres effets du tour. | Manuel instrumenté, réconciliation des effets ; requis avant acceptation. |

DOC-D/E restent au L7. Fidélité Figma et UX résiduelle au L7. Webpack `@cursor/sdk` et TypeScript global hors lot restent réserves d'outillage à réconcilier avant intégration/CI, pas nouveaux chantiers L1. Aucun résultat LIVE ni F2 fort. Les contrôles RECETTE ne peuvent pas être exercés sur le build actuellement figé en 0ae9e1f7 comme preuve de ce correctif.

### 9.4 Verdict et gate

**ChatGPT : READY WITH RESERVES — sortie technique L1 favorable.** Les trois gardes identifiées sont corrigées dans le candidat publié, les fonctions déterministes testées sont effectivement branchées. Les preuves existantes, le build et les réserves explicites suffisent pour recommander le passage au L2 sans nouveau cycle L1. Ce verdict ne vaut ni acceptation Morris, ni qualification RECETTE, ni clôture DOC/MP, ni promotion. L2 non engagé : prochain GO Morris, périmètre MP13. Les statuts programme restent inchangés.

Actualisation D1 du fichier unique à partir de `1e49602a4ad8eba5079ad9240b3b2fba5e7af348`, branche `docs/next-openai-studio-convergence-20261126`, sous mandat de suivi Morris. Aucun changement produit, main, handoff, configuration ou norme.
