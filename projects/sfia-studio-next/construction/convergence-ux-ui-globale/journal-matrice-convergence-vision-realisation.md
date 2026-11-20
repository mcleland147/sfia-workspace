# SFIA Studio Next — Ensemble 06 / Journal
## Matrice vivante de convergence — vision, contrats, UX, réalisation Cursor et preuves

**Version :** v0.7 — 19 novembre 2026 (Europe/Paris)  
**Statut :** **DOCUMENTED / AUDIT 12 CAPTURES DEV VS 11 FIGMA — FIGMA-TO-RUNTIME PARTIAL / CORRECTIF NON REÇU / CUTOVER NON AUTORISÉ**  
**Périmètre :** Journal du projet : Sujets, mémoire, points ouverts, Décisions, recherche, sources et continuité Nora. La Bibliothèque Documents reste propriétaire de sa propre expérience ; seuls les liens depuis le Journal entrent ici.  
**Autorité de la vision et des gates :** Morris. **Rôle du présent document :** outil de revue ChatGPT, sans créer de doctrine, de décision D6, de nouvelle spécification produit ni de statut ADOPTED.  
**Mode Git :** création documentaire sur la branche candidate **sfia/next-journal-conception-fonctionnelle-ux-20261119** ; pas de push produit, PR, merge, mise à jour de la Roadmap, migration ou code.  
**Référence de méthode :** [Matrice Ensemble 05 — v0.10](grammaire-visuelle-conversationnelle/06-matrice-convergence-vision-realisation.md). Nous en reprenons la discipline *vision → contrat → réalisation → preuve → réserve → gate*, **sans importer ses identifiants C-01…C-22, ses décisions d'architecture ou ses preuves de Travail**.

> **Contrat d'usage pour les revues suivantes :** relire cette matrice *avec les sources Git et le handoff reçu*, contrôler chaque J-C01…J-C16, distinguer précisément **code observé, résultat Cursor déclaré, test réellement vérifié, comportement démontré et acceptation Morris**, puis mettre à jour les statuts **sans réécrire le passé**. Ce document n'est jamais la preuve à lui seul de ce qu'il évalue.

---

## État courant — revue indépendante des 12 captures DEV vs Figma et handoff FULL (v0.7)

**Verdict : FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED / NOT READY FOR RECETTE CUTOVER.** Cette conclusion provient d'une comparaison **visuelle effective** des **douze PNG runtime 1680×970 fournis par Morris** (état vide + 11 noms de frames), confrontés aux **onze captures natives Figma** récupérées depuis `itgvCulInEnFY6DvgIegvP` page `828:2` (Figma MCP, 19/11/2026). **Les données illustratives ne sont pas exigées à l'identique** ; les écarts sont dans la structure et les parcours.

**Handoff canonique actualisé pendant cette revue :** branche `sfia/review-handoff@445014db103ba244ec9c627da2a71556828256cc`, [lecture du pack FULL](https://github.com/mcleland147/sfia-workspace/blob/445014db103ba244ec9c627da2a71556828256cc/sfia-review-handoff/latest-chatgpt-review.md), blob `2277af43c47db54b7aebe73c58eba06de5ceaf10`, **5 487 lignes**. Ce nouveau pack **remplace** le handoff initial incomplet `8d2bd1fb` (1 333 lignes). Il inclut désormais code complet de ProjectJournal.tsx et page.tsx, spec Playwright captures et parcours, ProjectChrome, CSS Journal pertinent, diffs et logs ciblés : **la réserve « modified content missing » antérieure est matériellement réduite/levée pour les chemins critiques reproduits**. Son évaluation visuelle « 11/11 ALIGNED » est en revanche **contredite par les PNG**. Le code produit candidat `sfia/next-journal-delivery-20261119@0eb3157b1678b993162fa79c98f5e4de26a9e4e3` reste **local/non publié**, sans réexécution autonome par ChatGPT ; la RECETTE `:3200` reste, selon pack, sur `d5bf7eb7`.

**Preuves discriminantes :**
- Les PNG `02-runtime-842-26-sujet-autonome-40-60.png` et `03-runtime-842-131-sujet-parent-40-60.png` ne diffèrent que de **21 pixels sur 1 629 600** (0,0013 %) ; les deux affichent le même sujet et le badge **« Sujet autonome »**, alors que Figma 842:131 exige un **sujet parent** avec cartes d'enfants numérotées et vision globale.
- Le test de captures est PASS si la capture existe : `journal-v4-figma-captures.spec.ts` clique le parent puis prend un screenshot **sans assertion sur le viewer title, `selectedSubjectId`, badge `Sujet parent` ou liste de descendants**. La capture 05 dite parent agrandi montre encore **« Continuité Git » / « Sujet autonome »** ; cela invalide l'oracle parent et ne prouve pas les deux parcours distincts.
- Les vues agrandies 04/05/11 utilisent des blocs majoritairement empilés sur toute la largeur, tandis que Figma 835:159, 835:239 et 860:360 exige une **colonne principale avec aside de repères**, sections et sous-sujets spécifiques. Écart **STRUCTURAL**, pas décoratif.
- Les captures recherche 06 et filtre 07 conservent l'arbre et le viewer du sujet sélectionné ; Figma 859:42 demande des cartes de **résultats contextualisés**, 859:146 une **liste transversale de points ouverts** et une lecture centrée sur le point. L'activation UI du filtre n'établit pas ce parcours.
- Décisions : nominal 08 proche du langage de cartes, mais la lecture 09 et recherche 10 sont simplifiées (histoire, autorité/portée, justification contextualisée), et 11 agrandie ne reproduit pas le panneau latéral Figma. Une autre réserve sémantique du code : `decisionStatusLabel` traite `applicable === false` comme **REMPLACÉE** avant le statut `SUSPENDUE` ; vérifier que la projection ne confond pas non-applicable/suspendue/révoquée et véritable remplacement.

**Progrès à préserver** : titre « Journal », copy Figma, exploration pleine largeur, état vide sobre sans viewer permanent, rail/onglets/recherche, split et agrandissement disponibles, jeux DEV isolés ; **ne pas revenir** à la première version RECETTE non conforme. **Les tests tsc/unit/Playwright rapportés prouvent des assertions ciblées, pas la comparaison perceptive des états.**

**À faire dans le même macro-lot correctif** : aligner précisément les états parent/autonome, grand lecteur à deux colonnes, résultat recherche, points ouverts transversaux, décision enrichie ; corriger les oracles E2E par **assertions sémantiques et structurelles par frame** avant screenshot, et distinguer les données naturelles des examples Figma ; revue CSS/captures après correction. **Morris garde le verdict esthétique de RECETTE** après un GO cutover séparé. Aucun push produit/PR/merge/cutover/ADOPTED autorisé par cette revue.

**Voir §18 : nouvelle matrice de 11 états et contrôle de sortie.** Les sections antérieures restent des instantanés historiques.

## État historique — retour Morris RECETTE et audit Figma du 19/11/2026 (snapshot v0.6)

**Verdict actuel : JOURNAL UX NOT READY — FIGMA TO RUNTIME PARTIAL / DELIVERY REQUIRED ; conformité visuelle de l'exploration : NON CONFORME.** L'environnement RECETTE technique reste disponible selon le [handoff 31c495af](https://github.com/mcleland147/sfia-workspace/blob/31c495af5c5afeadcc5e120b32427ceafd61acf5/sfia-review-handoff/latest-chatgpt-review.md), mais cette disponibilité **ne vaut pas livraison conforme à Figma**. Morris a fourni une capture de la RECETTE de CampusFlow (19/11/2026) et rejette explicitement l'UX actuelle : titre « Sujets et acquis », contenu réduit à une phrase brute isolée, deux très grands panneaux presque vides, textes explicatifs redondants. Il exige **l'identité visuelle des onze frames Figma V4 validées**, sans variante approchante ; le titre de la surface doit être « Journal ».

**Source primaire effectivement reconsultée :** Figma fichier itgvCulInEnFY6DvgIegvP, page 828:2 ; onze frames 835:71, 842:26, 842:131, 835:159, 835:239, 859:42, 859:146, 860:58, 860:136, 860:251, 860:360 lues via MCP Figma, y compris leurs textes/hiérarchies. Contrat fonctionnel/UX Journal v1.0 (VALIDATED SPEC), technique v0.3 §16, R1/R2 D3/D4/D6 et R4 sur Git ; handoffs 03eda7e8, 7a065cec, 9d56e6a5, 45bd3d37 et 31c495af audités dans les revues précédentes. **Candidat produit d5bf7eb7 NON POUSSÉ**, code exécutable local NON OBSERVÉ directement ; le screenshot Morris est une observation de la RECETTE, les handoffs prouvent des tests techniques ciblés, **pas la fidélité visuelle**.

**Constat discriminant :** sur Figma 835:71, header **« Journal »**, sous-titre **« La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation. »**, tabs discrets, recherche avec icône, en-tête « THÈMES DU PROJET », arbre pleine largeur de thèmes hiérarchisés ; lecture 40/60 **uniquement lorsqu'un sujet/décision est sélectionné**. La capture actuelle montre un titre et un sous-titre étrangers à cette cible, une pseudo-liste non éditorialisée et une visionneuse vide permanente. **Ce seul écran suffit à constater une NON-CONFORMITÉ de l'état exploration**, sans présumer du comportement des dix autres états.

**État vide :** les onze frames illustrent des données, pas l'absence de données. L'état « aucun sujet / aucune décision » ne doit **ni inventer des contenus ni afficher des panneaux gigantesques** : dériver un état vide sobre de l'enveloppe Figma, titre Journal conservé et onglets/recherche pertinents ; absence de sujet sélectionné = pas de visionneuse inactive. Toute incertitude de design à fort impact est soumise à Morris, sans solution arbitraire Cursor.

**Point de données à qualifier** : la capture CampusFlow affiche un intitulé brut débutant « la première source Git consultée et corrige la distinction entre le SHA du fichi… ». Cela peut relever d'un titre D4 mal formé, d'un jeu de test, d'un rattachement inter-préparations ou d'un problème d'isolation ; **aucune fuite interprojets n'est établie par l'image seule**. Cursor devra tracer subjectId/projectId/preparationId/provenance et le contenu API, sans altérer ni supprimer la donnée pour masquer l'écart. Si une fuite interprojets est démontrée, STOP sécurité et gate Morris.

**Décision de travail explicitement demandée par Morris** : correction du delivery UX à l'identique des onze maquettes Figma, suppression des textes parasites et revue de complétude du Journal ; **pas** de pivot D1–D9, changement normatif, promotion Git implicite, ni déclaration ADOPTED. La nouvelle matrice détaillée et les sorties sont au **§17**. Le §16 reste historique, et ne doit plus servir à conclure « UAT prêt » en présence de l'écart visuel.

## État historique — cinquième revue indépendante du 19/11/2026 (snapshot v0.5)

**Verdict ChatGPT : RECETTE TECHNICALLY AVAILABLE WITH RESERVES — READY FOR MORRIS USER ACCEPTANCE ; UAT NOT STARTED.**

**Handoff immuable vérifié :** [31c495af5c5afeadcc5e120b32427ceafd61acf5](https://github.com/mcleland147/sfia-workspace/blob/31c495af5c5afeadcc5e120b32427ceafd61acf5/sfia-review-handoff/latest-chatgpt-review.md), blob ef73c7877819830a1b73fb9615216762b1b32a5d, 734 lignes ; manifeste RECETTE créé FULL, as-built courant FULL et diff utile delivery-history, pack non synthesis-only. Candidat produit **local non publié**, SHA d5bf7eb762a21cc309744bb703926e2c0bc844ed, tree f5c05cb94f5137d06a26107b7003ab1bf073f923 ; main d3d199adb782462b93467934f5f1e8a0c98fb492. Le code du candidat, DB et logs/runtime RECETTE sont **NON OBSERVÉS directement** par ChatGPT ; les assertions de déploiement sont celles de Cursor, revues pour cohérence.

**Mise à disposition déclarée :** même RECETTE existante sur http://127.0.0.1:3200, même service com.sfia.studio.next.recette.ml4d-ux004 et même DB sfia_next_recette_ml4. Passage du build E05 IEINNuPl0bHWJOWkh0ZhG / SHA 5c94c867 vers build Journal PV12SV9VToVGK-ReSxTqk / SHA d5bf7eb7. Migration 014 additive appliquée après dump sur RECETTE ; trois tables D4 vérifiées ; 23 projets et 560 messages avant et après, 196 conversations après. Ancien build E05 conservé avec script de rollback ; **restauration non exercée** et code rollback ≠ restauration automatique de données.

**QA/smoke déclaré :** tsc PASS et 14/14 UNIT Journal/fixture rejoués au cutover ; tests lint/build/PG/BROWSER antérieurs rapportés au même SHA. Navigateur RECETTE : connexion Pilote A de test, portfolio, projet historique, Journal (Sujets/Décisions/recherche), Travail (Nora et huit messages), API Journal 200 authentifiée, 401 sans session, fixtures 403. Le smoke rapporte journalHasSubjects=false : **interface accessible, contenu Journal métier non éprouvé sur ce projet**. Aucune recette utilisateur réalisée.

**Réserves :** suites Playwright complètes ML2/ML4C/E05 NOT RUN ; trois FAIL suite unitaire globale cognitive-policy/github-app-oauth déclarés préexistants sans baseline comparative dans le handoff ; STUDIO_DEV_TEST_LOGIN=1 sur RECETTE et login Pilote A de test, identité Morris normale non éprouvée dans ce smoke ; retour arrière build disponible mais non testé ; compteurs DB non exhaustifs ; documents manifeste/as-built/delivery-history non committés sur la branche produit ; commentaire de migration 014 historiquement limité DEV devenu obsolète après le GO de cutover. Les §16.1–16.4 distinguent les réserves bloquantes ou non pour UAT.

**Gouvernance :** Morris arbitre et exécutera sa propre UAT fonctionnelle et esthétique. Aucun test automatisé de conversation n'est à poursuivre. Aucun push produit, PR, merge, Gate C, STABLE ni ADOPTED. **§16 constitue la matrice de revue actuelle ; les sections précédentes demeurent historiques.**

## État historique — quatrième revue indépendante du 19/11/2026 (snapshot v0.4)

**Verdict ChatGPT : READY FOR MORRIS REVIEW WITH RESERVES — §5 DÉTERMINISTE RENFORCÉ ; NORA LIVE 1/20 UNIQUEMENT ; JOURNAL MULTI-TOURS NOT PROVEN.**

**Git source :** [handoff 45bd3d375a097e0d01754ab4c985b700d2fd69ca](https://github.com/mcleland147/sfia-workspace/blob/45bd3d375a097e0d01754ab4c985b700d2fd69ca/sfia-review-handoff/latest-chatgpt-review.md), blob 589cbf735d803250648f91bbcf01434fa01b96a8, **1 323 lignes**, deux créations FULL et huit diffs utiles. Candidat local déclaré **sfia/next-journal-delivery-20261119@d5bf7eb762a21cc309744bb703926e2c0bc844ed**, précédent a122bf27, non publié ; main distante d3d199adb782462b93467934f5f1e8a0c98fb492 ; base documentaire à l'entrée c3f1254c15bc6de72b92d706e9dedb3981b4e5dd. Code produit local, DB, commandes et logs d'exécution **NON OBSERVÉS directement** par ChatGPT.

**§5 déterministe amélioré selon code et tests du pack :** J-C08 recherche acquis hors titre + badge, J-C11 recherche d'explication D6, J-C13 retour Journal par rail avec recherche/filtre/split, J-C14 clic source documentaire et révision exacte, J-C07 deux préparations du même projet, J-C05 révision indisponible refusée, J-C16 garde fixture. PASS **rapportés** : tsc, lint, build, Journal PG 15/15, ML3 PG 49/49, BROWSER seeded 2/2. ML2/ML4C/E05 full **NOT RUN**.

**CampusFlow LIVE :** vrai projet fictif DEV, réponse **E01** rendue avec état **openai-agents-sdk-live · COMPLETE** et identifiant de message ; cadrage prudent sans décision fictive. **E02–E20, T10 et T20 NON EXÉCUTÉS** ; arrêt opérateur indiqué sans preuve indépendante de cause ni auteur exact. **T0 vide normal** avant dialogue ; pas d'observation Journal post-E01. Durée **647 537 ms (~10 min 48 s)**. Coût annoncé **0,35 USD = estimation forfaitaire**, non facturation ni mesure réelle : estimateUsd est appelé sans métriques tokens.

**Risque de qualification du harnais :** assertions finales acceptent un seul tour (strictement >0), statut peut accepter FAILED/UNKNOWN ou simple mot Nora, timeout global 20 min alors que E01 dure >10 min, toute relance crée un nouveau projet et repart E01, et T20 peut être étiqueté à tort après arrêt anticipé. **REAL BOUNDARY PROVEN sur E01 seulement ≠ END-TO-END REAL PROVEN du Journal 20 tours**. Les détails et conditions de sortie sont en **§15**, qui prévaut sur les snapshots historiques.

**Gates :** GO Morris déjà donné pour 20 échanges fictifs LIVE bornés en DEV ; aucune preuve de complétude, pas de nouveau GO de projet, de push produit, PR/merge, Gate C, RECETTE/STABLE ou ADOPTED. **Revue visuelle et ergonomique finale réservée à Morris en RECETTE.**

## État historique — troisième revue indépendante du 19/11/2026 (snapshot v0.3)

**Verdict : READY FOR MORRIS REVIEW WITH RESERVES — CANDIDAT LOCAL / COUVERTURE FONCTIONNELLE NON ENCORE INTÉGRALEMENT PROUVÉE.**

Le [handoff immuable 9d56e6a5](https://github.com/mcleland147/sfia-workspace/blob/9d56e6a5d47719c3f1016c3daafbf6d31027024b/sfia-review-handoff/latest-chatgpt-review.md), blob 54234f95717f4b2d14a516e1bc9807158a449afb, a été relu sur Git : **1 450 lignes, deux fichiers créés intégraux et neuf diffs utiles**. Le candidat produit a122bf27fa46ede3300474217bc57c27cd1e496d est **local, NON OBSERVÉ sur GitHub** ; les tests et leur exécution sont rapportés par Cursor, non rejoués par ChatGPT. Main est d3d199adb782462b93467934f5f1e8a0c98fb492 et la base documentaire de cette revue est 2ae685a5f2523fafdf15bf6375e33cde500cc6f7.

**Progrès réels dans le code audité :** revalidation de la portée projet lors d'une réactivation, Git main+SHA requalifié UNVERIFIED sans vérification distante, résolution factuelle exigeant une source DB existante, E2E métier non vide, sélection et agrandissement Journal enfin non conditionnels. Cursor rapporte tsc/lint/build PASS, 6 UNIT PASS, 12 PG PASS et 1 BROWSER PASS. La preuve BROWSER couvre mieux le Journal, mais **plusieurs assertions ne correspondent pas encore aux oracles du contrat**. Les suites ML2/ML3/ML4C/E05 full restent NOT RUN, LIVE Nora et REAL Git NOT PROVEN.

**Écarts critiques nouveaux dans la vérification statique :** (1) la recherche « traçabilité » n'établit pas une correspondance **dans les acquis seulement**, car le sujet est déjà intitulé « Traçabilité Git » ; (2) le test retourne au Journal par page.goto et admet que sélection et filtres puissent être réinitialisés ; (3) le document est ouvert par URL directe avec documentId, sans clic de référence et sans révision exacte ; (4) le test couvre 40 messages, pas une conversation de 1 000+ ; (5) les synthèses et motifs sont rédigés par la fixture plutôt que réellement composés par D3 ; (6) existence d'une source en DB ne démontre pas sa suffisance factuelle.

**Rôle UX :** Cursor vérifie les interactions, ChatGPT la cohérence de vision et la couverture des preuves, **Morris juge l'apparence et l'ergonomie en RECETTE**. Le pixel-perfect n'est pas un gate DEV. **Aucun push produit / PR / merge / Gate C / RECETTE / STABLE / ADOPTED inféré.**

**Le §14 est la matrice de revue actuelle.** Les sections précédentes demeurent des snapshots historiques, sans clôture rétroactive de réserves.

## État historique — deuxième handoff du 19/11/2026 (snapshot v0.2)

**Verdict : progrès du socle Journal et Review Pack désormais exploitable ; NOT READY FOR FULL JOURNAL FUNCTIONAL ACCEPTANCE.**

**Source de livraison :** [handoff 7a065cec](https://github.com/mcleland147/sfia-workspace/blob/7a065cec48ddee643cf428b06e5a27012c6d8015/sfia-review-handoff/latest-chatgpt-review.md), blob 685883caabe76ac3cfabeb628cb5430f09b79191. Candidat de code **local uniquement** sfia/next-journal-delivery-20261119 @ 782c93ecd94446f586a2f4f5344f14eb4530e87a (cycle 1 78c3c3b0) : code réuni dans le handoff mais commit/worktree non directement inspectables sur GitHub. Main @ d3d199adb782462b93467934f5f1e8a0c98fb492, candidat documentaire @ b02192e5b447bcef2b150f36277c96fbf5e1b9d9 à l'entrée. Aucun push projet, PR, merge, RECETTE, STABLE ni ADOPTED constaté.

**Résultats déclarés et inspectés :** 13 J-C IMPLEMENTED et 3 PARTIAL selon Cursor ; tsc PASS, lint PASS, cognition UNIT 4/4, Journal PG 10/10, Playwright 1/1 en DEV/e2e. Le handoff de 4 219 lignes contient les nouveaux fichiers complets, le tip des fichiers créés au cycle 1 et les diffs utiles du cycle 2 : la réserve de contenu incomplet du premier handoff est **levée pour la revue statique du pack**, pas pour la vérification du dépôt local ou des commandes réellement exécutées.

**Réserve centrale :** le test Playwright passe quand le Journal ne contient **aucun sujet ni aucune décision**. La sélection du sujet, le split 40/60 et l'agrandissement sont situés dans une condition sur la présence d'un sujet : l'assertion peut être sautée. Le test ne clique ni référence de message exact ni document versionné, et ne vérifie pas un brouillon préexistant conservé. Les captures DEV fournies par Morris montrent des états principalement vides, pas les fiches métier. **Un BROWSER PASS ciblé ne prouve pas onze parcours UX de bout en bout.**

**Responsabilités validées :** Cursor construit/teste les interactions ; ChatGPT contrôle la vision R1/R2/R3/R4 et les oracles fonctionnels ; **Morris assure la revue esthétique et ergonomique finale en RECETTE**. Le pixel-perfect 11/11 n'est **pas un critère de clôture du cycle technique DEV** ; la preuve d'interaction avec données métier reste obligatoire.

Les §§1, 4, 5, 6, 7, 8 et 11 gardent leur valeur **historique v0.1** ; pour l'état présent, lire la **matrice de couverture actualisée au §13**, qui prévaut à portée de preuve équivalente.

## 1. Snapshot historique — premier handoff Journal du 19/11/2026

**Verdict de revue ChatGPT : NOT READY — SCOPE INCOMPLETE / REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING.**

Le premier handoff Cursor [03eda7e8](https://github.com/mcleland147/sfia-workspace/blob/03eda7e8ffbed23917850befb9cfa676ab18b670/sfia-review-handoff/latest-chatgpt-review.md), blob **f0d1265bd6bc009dad56a99ff32c50474b9618d6**, déclare un **socle local Journal V4** : migration additive 014, stockage de révisions de synthèses et d'explications, identité/parentage D4, lecture projet inter-préparations, API Journal, onglets et recherche, consultation 40/60 et agrandie. Il rapporte **TypeScript PASS** et **six tests PG PASS**, sans exécution BROWSER ni LIVE Nora.

**Ces éléments sont des résultats déclarés, pas un code produit contrôlé indépendamment** : le candidat **sfia/next-journal-delivery-20261119@78c3c3b0007b6bf67ef6e92f15241d44cd2ab752** est indiqué **local seulement**, non publié sur GitHub. L'état exact des fichiers locaux (staged/untracked) n'est pas inspectable par ChatGPT depuis ce Git distant. La migration 014 est reproduite dans le handoff, mais son exécution DEV, ses logs et ses résultats précis sont non vérifiés indépendamment.

**Couverture déclarée sur les seize J-C canoniques :**
- **4 NOT IMPLEMENTED** : J-C04, J-C06, J-C13, J-C14 ;
- **11 PARTIAL** : J-C01, J-C02, J-C05, J-C07, J-C08, J-C09, J-C10, J-C11, J-C12, J-C15, J-C16 ;
- **1 IMPLEMENTED par affirmation de code uniquement** : J-C03, **sans test d'API ou de comportement navigateur** ; son niveau indépendant reste non prouvé.

**Interprétation produit :** des fondations techniques utiles sont annoncées, mais la **mémoire réellement vivante, la provenance/contradiction, le retour au message exact et les références documentaires** ne sont pas livrés dans cette première étape. L'écran V4 rapporté ne peut pas être reçu comme expérience conforme sans BROWSER/Figma-runtime, tests d'intégration et contrôle des données réelles. La vision fonctionnelle v1.0, la conception D4 en domaine existant et les onze maquettes sont **conservées, non rouvertes**.

**Gates :** aucun push projet / PR / merge d'après Cursor ; Git distant confirme **main@d3d199adb782462b93467934f5f1e8a0c98fb492** et branche documentaire candidate **6879d34eb38fbd1d8f899c6f8713ccc98f0ae178** à cette revue. Gate C OPEN selon Roadmap main ; **pas de réception Journal, pas de BEHAVIOR PROVEN global, pas de promotion, pas d'ADOPTED**. Une annonce « READY FOR MORRIS REVIEW WITH RESERVES » autorise une **revue**, pas une réception produit.

## 2. Sources, refs et niveaux de preuve

| Source | Ref réellement examinée | Statut et fonction |
| --- | --- | --- |
| [Vision produit R1](../../cadrage/vision-produit.md) §§2.10–2.13, E2E 04 | main@d3d199ad | **Vision validée** : autonomie de Nora, sujet évolutif, deux vues, questions non perdues, multi-sources. |
| [R2 D4 — connaissance](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) et [R2 D3](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) | main@d3d199ad | **Contrats validés** : RG-KNOW et frontières du raisonnement, provenance, reprise. |
| [R2 D6 — décisions](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md) | main@d3d199ad | **Autorité** : décisions/mandats/restrictions, état opposable et historique. |
| [R3 — espace projet et Nora](../../ux-ui/espace-projet-interaction-pilote-nora.md) | main@d3d199ad | Navigation Projet/Travail/Journal, conservation du contexte, références/retour et droits. |
| [R4 — architecture](../../architecture-technique/cadrage-r4.md) et [décision d'exit R4](../../governance/decisions/2026-11-04-r4-architecture-exit.md) | main@d3d199ad | D1–D9, données et domaines propriétaires ; pas de moteurs concurrents. |
| [R5 — décision ML4C/ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md), [SEF](../../governance/SEF.md), [Roadmap](../../governance/roadmap.md) | main@d3d199ad | Frontière convergence UX / extension fonctionnelle ; méthode, preuves, autorisations et gates. |
| [Contrat Journal fonctionnel/UX v1.0](journal-contrat-fonctionnel-ux-candidat.md) | branche documentaire @6879d34e, **VALIDATED SPEC Morris** | Résultat Pilote, comportement attendu, états Figma V4 ; **source de lecture prioritaire du périmètre**. |
| [Contrat technique Journal v0.3](contrat-technique-journal.md) §16 | branche documentaire @6879d34e, **candidat** ; principe d'évolution interne D4 validé | Architecture, interfaces et **IDs J-C01…J-C16 canoniques**. Un détail technique candidat ne supplante pas R1/R2 ni une décision Morris. |
| [Figma Journal page 07](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=828-2) | 11 maquettes v1.0 approuvées le 19/11 | **Contrat de conception UX**, pas écran runtime ni preuve BROWSER. |
| [Premier Review Handoff](https://github.com/mcleland147/sfia-workspace/blob/03eda7e8ffbed23917850befb9cfa676ab18b670/sfia-review-handoff/latest-chatgpt-review.md) | commit **03eda7e8ffbed23917850befb9cfa676ab18b670** ; blob **f0d1265b…** | **Handoff distant vérifié**, contenu source des déclarations Cursor. Son nom « FULL » ne garantit pas que les diffs complets sont présents. |
| Candidat code et preuves locales | local annoncé **78c3c3b0…**, base doc **6879d34e…** | **NON OBSERVÉ DIRECTEMENT** : pas de branche produit poussée, pas de code/diff local complet ni logs PG/PNG/BROWSER examinables via ce Git. |

**Échelle de qualification :** DOCUMENTED (contrat) → VALIDATED SPEC (Morris) → IMPLEMENTED (code inspecté à SHA) → COVERAGE VERIFIED (oracles exécutés et vérifiés) → BEHAVIOR PROVEN (parcours observé dans des conditions explicites) → ADOPTED (acte Morris). Les mentions PARTIAL / NOT IMPLEMENTED de Cursor sont des **statuts rapportés**, distincts d'une validation indépendante.

**Distinction des environnements :** PG DEV annoncé ≠ API/BROWSER ≠ LIVE Nora ≠ REAL Git ≠ RECETTE ; TypeScript PASS ne prouve ni scénario fonctionnel ni UX. Un écran Figma validé n'est pas un comportement runtime démontré. Les huit UAT de composition d'Ensemble 05 **ne prouvent pas** Journal Ensemble 06.

## 3. Règles permanentes de convergence

1. **La vision prime.** Ne pas supprimer, réduire ou repousser implicitement une exigence R1/R2 ou v1.0 pour correspondre au code existant. Un changement de vision ou une dette assumée nécessite Morris.
2. **D3 / D4 / D6 restent distincts.** D3/Nora retrouve, qualifie et rédige ; D4 organise, versionne et sert la connaissance et les documents ; D6 est l'unique propriétaire des HumanDecision et restrictions. La nouvelle capacité enrichit D4, **pas un moteur bis**.
3. **Une seule mémoire de projet.** Le sas peut avoir sa provenance ; le Journal retrouve les connaissances autorisées du projet et les échanges pertinents sans recopie de documents, duplication du fil ou fusion abusive par titre.
4. **Synthèse ≠ verbatim.** Un sujet et une décision sont expliqués par une reconstruction cohérente, contextualisée et sourcée, y compris si le passage déterminant est ancien. Une motivation incertaine reste qualifiée comme telle.
5. **Statut de réalisation ≠ statut de preuve.** Un « IMPLEMENTED » rapporté sans lecture du code ou un test isolé ne devient pas COVERAGE VERIFIED. Un résultat NOT RUN reste visible.
6. **Recherche et rangement sont deux contrats.** Un arbre correct n'établit pas qu'un contenu est retrouvable ; la recherche doit fonctionner sur connaissance capitalisée et rester honnête sur sa couverture.
7. **Dégradation fidèle.** Source absente, décision remplacée, restriction D6 ACTIVE, question ancienne, échec de persistance et absence de données ne doivent pas produire de succès fictif, d'oubli silencieux ou d'autorité inventée.
8. **Revue à chaque handoff, pas uniquement à la fin.** Actualiser les seize lignes stables, leur preuve, leur dette/exit, l'intégrité du pack et le verdict ; ne pas considérer le résumé Cursor comme le résultat produit.
9. **Un macro-lot cohérent.** Corriger ensemble le domaine propriétaire, l'API, l'UX, les tests et l'as-built lorsque liés. Scinder uniquement si une dépendance/autorité/gate réel impose une frontière.
10. **Jamais de promotion implicite.** Une matrice D1 et un handoff L3 n'autorisent ni push projet, ni PR, ni merge, ni Gate C, ni ADOPTED ; chaque effet suit son gate Morris.

## 4. Matrice de convergence initiale — J-C01 à J-C16 (snapshot premier handoff)

**Mode de lecture :** « Cursor » = ce que **déclare le handoff du 19/11** ; « revue » = qualification **sur source handoff**, pas audit du commit local ; « sortie » = oracle réellement exigé par le contrat v0.3. Aucune ligne n'est soldée par une intention ou un fichier seul.

### A. Mémoire, sujets et continuité — D3/D4

| ID | Résultat de la vision validée | Premier handoff Cursor | Qualification de revue | Réserve et preuve de sortie |
| --- | --- | --- | --- | --- |
| **J-C01** | Synthèse éditoriale feuille/parent **durable, contextualisée, versionnée et sourcée** ; correction sans perte d'histoire, actualisation sélective. | PARTIAL : révisions de synthèses dans journal.ts, migration 014, PG PASS déclaré. | **PARTIEL RAPPORTÉ / NON VÉRIFIÉ EN CODE** ; stockage ne prouve pas production/révision autonome par Nora. | Examiner service entier/DDL, provenance, source/version, comparaison de révisions, retry ; test PG de correction + génération contextualisée, zéro écriture pour bruit. |
| **J-C02** | Nora peut organiser, rapprocher, scinder, fusionner, reparentager ; feuille→parent sans perdre ID, sources ni enfants. | PARTIAL : reparent et ensureSubject parent-aware, PG PASS déclaré. | **PARTIEL RAPPORTÉ** ; pas de preuve de conduite autonome, cycles, homonymes sous parents distincts, fusion et perte d'enfants. | Tests PG des transitions, homonymes, cycles/parents étrangers, transferts d'acquis/points et référence après scission/fusion ; preuve D3 de sélection sémantique. |
| **J-C03** | Acquis et questions restent reliés au sujet d'origine jusqu'à la fiche et à la navigation. | IMPLEMENTED annoncé : page.tsx conserve subjectId ; **aucun test** associé. | **CODE RAPPORTÉ / COVERAGE NOT VERIFIED**, pas « entièrement reçu ». | Inspecter DTO/route/UI, tester API+BROWSER clic et retour, sujet après déplacement, source de bon projet. |
| **J-C04** | Nora réactive opportunément une question ancienne non résolue, au-delà de la session/cycle ; ni oubli ni spam. | **NOT IMPLEMENTED** annoncé. | **MANQUANT**, pas seulement preuve LIVE manquante. | Implémentation D3/D4 et tests PG + scénario de reprise multi-sessions ; LIVE borné si autorisé, avec rappel pertinent et absence de rappel systématique. |
| **J-C05** | Fait résolu sur source suffisante ; historique et réouverture possibles ; réserve/suspension D6 intacte. | PARTIAL : resolve/reopen, PG PASS déclaré. | **PARTIEL RAPPORTÉ** ; frontière D6 à contrôler en négatif. | PG avec source insuffisante, réouverture, restriction ACTIVE malgré clôture factuelle, audit source/date/acteur et API. |
| **J-C06** | Vérifier source/version/portée, état actuel vs historique, contradictions, Git main vs candidate, droits et incertitude. | **NOT IMPLEMENTED** annoncé. | **MANQUANT** ; bloque fiabilité cognitive. | D3/D4 vérifient sources discordantes et retirées ; tests de branche/ref/SHA, source périmée, preuve D8 vs déclaration ; aucune assertion actuelle injustifiée. |
| **J-C07** | Journal et Nora retrouvent les connaissances **du même projet** entre préparations autorisées, avec isolation stricte. | PARTIAL : listProjectKnowledge ; **pas de test identifié**. | **PARTIEL RAPPORTÉ** ; scoping projet/préparation à éprouver. | PG+API : deux préparations du même projet et une autre identité/projet ; aucune fuite dans liste, recherche, compte, extraits et accès profond ; aucune copie D4. |

### B. Recherche, décisions et gouvernance — D4/D6

| ID | Résultat de la vision validée | Premier handoff Cursor | Qualification de revue | Réserve et preuve de sortie |
| --- | --- | --- | --- | --- |
| **J-C08** | Rechercher dans titres, synthèses, acquis et points ; filtre Points ouverts **transversal sans troisième onglet** ; chemin/raison du résultat. | PARTIAL : searchJournalSubjects + UI, PG PASS déclaré ; BROWSER NOT RUN. | **PARTIEL RAPPORTÉ**. | API/BROWSER terme absent du titre mais présent dans acquis, filtre combiné, chemin d'un sous-sujet, pagination, EMPTY/PARTIAL honnête et isolation. |
| **J-C09** | Décisions D6 réellement applicables, révisions, remplacements, restrictions et historique ; Journal en lecture sans autorité bis. | PARTIAL : decisions + restrictions read-only ; tests API/BROWSER non indiqués. | **PARTIEL RAPPORTÉ**, pas d'opposabilité prouvée. | PG/API pour acte actuel, remplacé, suspendu/restriction ACTIVE/LIFTED, droits et absence d'effet D6 de l'inspection ; BROWSER de badge pertinent. |
| **J-C10** | **Explication reconstruite** des choix du Pilote à partir de plusieurs sources, alternatives et motivations établies, distincte de l'acte D6. | PARTIAL : table/révisions d'explication et PG PASS déclaré ; LIVE NOT RUN. | **PARTIEL RAPPORTÉ** ; versionnement ≠ raisonnement réellement produit. | Comparer synthèse aux échanges longs ; citations exactes, alternatives, déductions explicites, source absente/contradictoire ; aucune HumanDecision créée ; PG + essai cognitif borné. |
| **J-C11** | Recherche **dans les décisions** et leurs explications accessibles, pas dans tous les messages ni tous les actes éphémères. | PARTIAL : searchJournalDecisions ; PG évoqué sans résultat par cas ; BROWSER NOT RUN. | **PARTIEL RAPPORTÉ**. | API/BROWSER sur acte D6 et motif lié, filtre par statut/portée, source périmée, recherche négative, droits et retour à la décision sélectionnée. |

### C. Parcours UX V4 et continuité réelle

| ID | Résultat de la vision validée | Premier handoff Cursor | Qualification de revue | Réserve et preuve de sortie |
| --- | --- | --- | --- | --- |
| **J-C12** | Deux onglets, Journal nominal → **40/60** → lecture agrandie → retour préservé, avec les **11 états Figma V4**. | PARTIAL : tabs, 40/60 et enlarge dans ProjectJournal ; **BROWSER et captures runtime NOT RUN**. | **PARTIEL RAPPORTÉ / VISUAL NOT PROVEN**. | Captures comparées pour 11 frames, vrai runtime 1680×970 puis 1280/reflow, clavier/focus, densité, chargements, erreurs, liste/filtres/restauration à l'identique. |
| **J-C13** | Un lien ouvre **le message exact** du fil Nora unique puis revient au Journal sans perdre sélection, brouillon ni envoyer de message. | **NOT IMPLEMENTED** annoncé. | **MANQUANT** ; bloque le parcours fondamental de reprise. | BROWSER fil long (>1 000 messages) avec message ancien non chargé initialement, ancrage exact, refresh/retour et brouillon intact ; zéro auto-send. |
| **J-C14** | Références vers **document canonique et sa version**, droits revalidés ; jamais de copie documentaire indépendante. | **NOT IMPLEMENTED** annoncé. | **MANQUANT** ; l'UX ne donne pas accès aux sources requises. | API+BROWSER docId/revision/source disponible puis retirée, renvoi Bibliothèque Documents, droits de lecture courants et erreur honnête. |

### D. Sûreté, qualification et livraison

| ID | Résultat de la vision validée | Premier handoff Cursor | Qualification de revue | Réserve et preuve de sortie |
| --- | --- | --- | --- | --- |
| **J-C15** | Transactions, idempotence, expectedRevision, ACK perdu, droits multi-Pilote/projet, performance et coût du long fil. | PARTIAL : operationId/expectedRevision + PG mentionné ; pas de preuve de charge/sécurité globale. | **PARTIEL RAPPORTÉ**. | PG/API concurrence/fault injection/ACK perdu, test droits interprojets et source retirée, recherche volumineuse, mesure latence/coût avec SHA/lane. |
| **J-C16** | Non-régression E05/ML2/ML3/ML4C, TypeScript/lint/build, docs as-built et contrôle de couverture complet. | PARTIAL : tsc PASS ; as-built + delivery-history annoncés ; PG six tests ; autres suites NOT RUN. | **PARTIEL RAPPORTÉ**, documentation créée non intégralement inspectée. | Typecheck/lint/build, suites anciennes pertinentes, BROWSER E05, vrai diff et as-built comparés au code, aucun nouveau gap silencieux. |

**Bilan numérique du premier handoff (statuts Cursor, non verdict de preuve) :** **1 IMPLEMENTED déclaré / 11 PARTIAL / 4 NOT IMPLEMENTED / 0 J-C entièrement vérifiés et reçus indépendamment**. **Aucun J-C absent de cette matrice.**

## 5. Couverture des onze maquettes et principaux parcours

| Famille V4 validée | Figma (node-id) | Contrat fonctionnel | Réalisation/préuve actuelle |
| --- | --- | --- | --- |
| Sujets : exploration | [835:71](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-71) | Découvrir le Journal et l'arbre | ProjectJournal V4 rapporté ; **BROWSER NOT RUN** |
| Sujets : sujet autonome 40/60 | [842:26](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-26) | Consulter une feuille sans perdre l'arbre | Code rapporté ; **non comparé** |
| Sujets : parent 40/60 | [842:131](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-131) | Synthèse parent et enfants | Synthèse parent **partielle** ; **non comparé** |
| Sujets : sujet autonome agrandi | [835:159](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-159) | Lecture approfondie réversible | Code rapporté ; **non comparé** |
| Sujets : parent agrandi | [835:239](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-239) | Parent approfondi, sous-sujets | Code rapporté ; **non comparé** |
| Recherche Sujets | [859:42](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-42) | Retrouver et expliquer une correspondance | Backend/UI **partiels** ; **BROWSER NOT RUN** |
| Filtre Points ouverts | [859:146](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-146) | Points de plusieurs sujets, sans registre bis | Backend/UI **partiels** ; **BROWSER NOT RUN** |
| Décisions nominales | [860:58](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-58) | Actes D6 officiels et états | Projection **partielle** ; **BROWSER NOT RUN** |
| Décision 40/60 | [860:136](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-136) | Acte distinct de son explication | Explication **partielle** ; **BROWSER NOT RUN** |
| Recherche Décisions | [860:251](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-251) | Requête et fiche sans quitter Journal | Recherche **partielle** ; **BROWSER NOT RUN** |
| Décision agrandie | [860:360](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-360) | Cheminement, alternatives, provenance et état | Narrative **partielle**, **non comparée** |

**Preuve de navigation transverse indispensable :** Journal → référence message/document → fil/ressource exact → retour avec position et brouillon ; un écran correct sans cette chaîne n'est **pas** une réception fonctionnelle.

## 6. WBS intégrateur — suite du même macro-lot Journal

| Travail cohérent | Déjà annoncé / à conserver sous vérification | Manquant ou à qualifier avant clôture | Condition de sortie |
| --- | --- | --- | --- |
| **Socle D4 : mémoire et intégrité** | Migration 014 et journal.ts, ensureSubject, révisions et open-point events, chargement inter-préparations | Identité/homonymes et cycles, provenance, concurrence, historique et liens réels ; 6 PG rapportés non ventilés par oracle | J-C01/02/03/05/07/15 en PG + API, avec DDL et code complets inspectables |
| **Conduite D3 : mémoire vraiment vivante** | Capitalisation et outils historiques existants de main, non reconstruits | Réactivation J-C04, contradictions/fraîcheur J-C06, production de synthèses/explications J-C01/10 | Tests négatifs, D3 avec contexte ancien, source contradictoire et bilan de coût/qualité |
| **Décisions D6 en lecture** | Projection décisions+restrictions et stockage d'explications annoncés | Statut applicable vs historique, revocation/suspension, sélection durable, explication riche et recherche | J-C09/10/11, D6 non modifié, PG/API + scénario de restitution |
| **Parcours Journal V4** | ProjectJournal annoncé : onglets, recherche, filtre, 40/60/agrandi | J-C13 message exact, J-C14 document versionné, tous les états BROWSER, a11y, responsive et retours | J-C08/11/12/13/14 avec captures Figma/runtime par scénario |
| **Intégration et qualification** | tsc PASS, PG 6/6 rapportés, as-built/delivery-history locaux annoncés | Code candidat non disponible à la revue distante, diffs complets absents, tests ML2/ML3/E05/BROWSER non exécutés | Review Pack Full exploitable, logs, captures, tests négatifs et J-C16 ; verdict indépendant |
| **Gate et réception** | Handoff L3 mono-fichier publié, sans push projet | Réserves J-C et pack incomplet, gate ML4D/effets structurants à vérifier | Morris statue sur périmètre et gate ; aucun push/PR/merge/RECETTE implicite |

**Règle anti-fragmentation :** le diagnostic, la correction du domaine, le raccordement UI, les tests et l'as-built doivent converger sur **un même résultat utilisateur** ; l'extension à la persistance respecte les gates applicables, sans maquiller une évolution D4 en simple polish ML4D. Une micro-livraison de maquettes ou de tables seules ne solde pas le Journal.

## 7. Contrat de preuves discriminant et intégrité du Review Pack

| Contrôle | État au premier handoff | Oracle restant |
| --- | --- | --- |
| **Git distant du handoff** | **REMOTE VERIFIED** : commit 03eda7e8, blob f0d1265b… ; code produit local non poussé. | Conserver cette distinction ; obtenir artefacts revue sans push projet non autorisé, ou revue locale contrôlée. |
| **Inventaire de modifications** | Diff stat reproduit **8 fichiers suivis** ; statut liste aussi API, migration, journal.ts, test PG et as-built **non suivis**. | Capturer l'ensemble des créations/edits, pas seulement git diff --stat, et preuves de leur intégration au commit local. |
| **Contenu inspectable** | Migration 014 **complète**, journal.ts **100 premières lignes seulement** ; absence des autres fichiers créés et diffs suffisants des modifications. | **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING** ; produire les contenus/diffs selon SFIA v2.6 pour chaque création et modification pertinente. |
| **PG et migration** | six tests PG PASS et application DEV annoncés par Cursor ; **logs détaillés, fixture et vérification DB indépendante indisponibles**. | Commandes, SHA, nom de chaque test et assertions, état migration DEV et contrôle compatibilité historique, failure/retry. |
| **D3 / cognition** | LIVE Nora NOT RUN, J-C04 et J-C06 NOT IMPLEMENTED. | Code et tests déterministes d'abord ; LIVE uniquement sous GO, preuve de source/doute et de capitalisation spontanée. |
| **BROWSER et Figma** | **NOT RUN** ; Figma extraction annoncée pour quatre frames seulement dans la liste des sources du handoff. | Parcours et captures réellement comparables pour les **11 frames**, interactions, focus, reflow, 1680 et compact ; ne pas inférer 11/11 du nom V4. |
| **D6 et sécurité** | Décisions/restrictions read-only rapportées, pas de tests par statut/opposabilité/ACL. | Cas D6 ACTIVE/LIFTED, ancien acte, état remplacé, isolation interprojets et interdiction mutation. |
| **Non-régression** | tsc PASS ; lint/build, suites ML2/ML3/ML4C/E05 et navigation historique **non exécutés ou non démontrés**. | Exécuter le pack pertinent et qualifier les tests impossibles, avec effet sur verdict. |
| **Recette / LIVE / REAL** | RECETTE annoncée non mutée, **LIVE / REAL NOT RUN**. | Aucun claim de recette, de spontanéité cognitive globale ou d'ADOPTED ; GO séparés si nécessaires. |

**Règle de revue :** le Review Handoff peut être **correctement publié** tout en étant **incomplet comme pack de contenu**. Ne pas lever la réserve après un simple nouveau push L3 ; exiger une relecture des sources/diffs réellement ajoutés, et conserver le SHA du pack auquel le verdict se rapporte.

## 8. Carte de traitement, risques et gates

| Décision opérationnelle candidate | Ce qui doit être fait | Limite et dépendance |
| --- | --- | --- |
| **CONSERVER** | Architecture D1–D9, D3 sens/Nora, D4 connaissance/versionnement, D6 autorité, PostgreSQL existant et onze frames V4 validées. | Pas de nouvel écran, moteur, base ou gouvernance. |
| **CONSERVER SOUS CONTRÔLE** | Migration 014, services/API et interface réalisés localement, sans réécrire ce premier travail par principe. | Lire code complet, vérifier modèle du §16, données, provenance et test d'intégration avant de conclure. |
| **COMPLÉTER PRIORITAIREMENT** | J-C04 et J-C06 (mémoire cognitive), J-C13 et J-C14 (retour aux sources), puis J-C PARTIAL. | Ne pas assimiler manque de LIVE à manque de code : ces quatre lignes sont **NOT IMPLEMENTED par Cursor**. |
| **QUALIFIER** | D6 applicable et restrictions, projet/préparations, split/merge, qualité de synthèse et recherche. | PG/API avec négatifs, source exacte, refus droits et incertitude. |
| **PROUVER VISUELLEMENT** | Vérifier 11 références Figma en runtime et interactions réelles. | BROWSER NOT RUN → V4 NOT PROVEN, même si l'interface compile. |
| **REFAIRE LE PACK DE REVUE** | Full créé/modifié, including untracked et logs, SHA et contexte Git local. | Pack incomplet → revue de code bloquée indépendamment du test PG. |
| **STOP / GATE MORRIS** | Promotion, PR/merge, changement normatif, révision de périmètre, migration RECETTE, coûts LIVE/REAL hors mandat. | Rapport Cursor = proposition de revue, jamais GO automatique. |

**Principaux risques de dérive à surveiller à chaque itération :** (a) persistance de synthèses sans production cognitive effective ; (b) hiérarchie créée par titre mais sans sens et sans filiation robuste ; (c) explication d'acte D6 confondue avec motif officiel ; (d) points factuels réputés résoudre une suspension gouvernée ; (e) capture Figma utilisée à la place d'une capture navigateur ; (f) quatre scénarios omis reportés à « plus tard » malgré le contrat intégré ; (g) corrections sur un nouveau domaine au lieu d'enrichir D4 ; (h) pertes de brouillon/scroll au retour depuis une source.

## 9. Historique des revues Cursor — append-only

| Date, candidat et handoff | Réalisations déclarées | Ce qui est inspecté ici | Verdict / impact sur J-C | Décision et suite |
| --- | --- | --- | --- | --- |
| **19/11/2026 — premier cycle Delivery Critical** ; candidat local **78c3c3b0** ; [handoff 03eda7e8](https://github.com/mcleland147/sfia-workspace/blob/03eda7e8ffbed23917850befb9cfa676ab18b670/sfia-review-handoff/latest-chatgpt-review.md), blob **f0d1265b…** | Migration 014, journal.ts, parent-aware, projection multipréparation, GET Journal et UI V4 ; tsc PASS, PG 6/6 PASS annoncés ; aucun push projet. | Handoff Git complet **en tant que fichier** (294 lignes), matrice 16 IDs, migration 014 et extrait journal.ts ; **pas** de code produit local/patch complet, ni de logs PG, ni de BROWSER/LIVE. | **NOT READY — SCOPE INCOMPLETE** : 4 absents, 11 partiels, 1 code-only non prouvé ; **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING**. | Revue Morris des réserves, complément intégré sous GO distinct ; aucun Gate C, push projet, PR, merge ou réception imputé. |
| **19/11/2026 — second cycle Critical** ; candidat local 782c93ec ; [handoff 7a065cec](https://github.com/mcleland147/sfia-workspace/blob/7a065cec48ddee643cf428b06e5a27012c6d8015/sfia-review-handoff/latest-chatgpt-review.md) | J-C04/06/13/14 raccordés, 4 UNIT+10 PG+1 BROWSER PASS annoncés, 13 IMPLEMENTED/3 PARTIAL selon Cursor. | Code/diffs du pack 4 219 lignes inspectés et captures DEV fournies, tests fonctionnels sur données vides, pas de code produit local accessible. | **REVIEW PACK CONTENT COMPLETE / FUNCTIONAL COVERAGE PARTIAL** : écarts E06-01..06, pas de réception. | Complément DEV probant, revue Morris en RECETTE distincte, aucun push projet/PR/merge inféré. |
| **19/11/2026 — troisième cycle Critical** ; local a122bf27 ; [handoff 9d56e6a5](https://github.com/mcleland147/sfia-workspace/blob/9d56e6a5d47719c3f1016c3daafbf6d31027024b/sfia-review-handoff/latest-chatgpt-review.md) | E06-05 projet, E06-03 Git UNVERIFIED, E06-04 message, E06-01 E2E seed, E06-02 PG et E06-06 source DB ; tsc/lint/build, UNIT 6/6, PG 12/12, BROWSER 1/1 annoncés. | Handoff 1 450 lignes, 2 créations FULL, 9 diffs relus, test navigateur sur données métier mais encore incomplet ; worktree et tests NON OBSERVÉS directement. | **REVUE AVEC RÉSERVES / NON REÇU** : recherche acquise faux positif titre, retour page.goto, document via URL sans revisionId, cognition et non-régressions. | Compléter QA DEV, gate RECETTE Morris distinct ; pas de push projet/PR/merge. |
| **19/11/2026 — quatrième cycle Critical / LIVE CampusFlow** ; candidat local d5bf7eb7 ; [handoff 45bd3d37](https://github.com/mcleland147/sfia-workspace/blob/45bd3d375a097e0d01754ab4c985b700d2fd69ca/sfia-review-handoff/latest-chatgpt-review.md) | J-C05/07/08/11/13/14 déterministes améliorés ; tsc/lint/build, PG Journal15, ML3 PG49, BROWSER2 PASS annoncés ; E01 Nora réel COMPLETE. | 2 créations FULL + 8 diffs inspectés ; T0 vide, E01 647s, coût 0,35 USD proxy, E02–E20/T10/T20 NOT RUN ; code local NON OBSERVÉ. | **LIVE 1/20 PARTIAL** ; harnais trop permissif, reprise non prévue, coût/timeout, aucune mémoire LIVE prouvée. | Instrumentation latence + reprise bornée E02 au même projet puis nouvelle revue, aucun push produit/RECETTE. |
| **19/11/2026 — qualification et cutover RECETTE Journal** ; SHA local d5bf7eb7 ; [handoff 31c495af](https://github.com/mcleland147/sfia-workspace/blob/31c495af5c5afeadcc5e120b32427ceafd61acf5/sfia-review-handoff/latest-chatgpt-review.md) | Même RECETTE E05 :3200 / service / DB ; build PV12SV9VToVGK-ReSxTqk, migration 014 et conservation 23/560 ; API 200/401, fixtures 403, Projet/Journal/Travail smoke PASS déclarés. | Pack 734 lignes, manifeste FULL, as-built FULL et diff historique ; code et runtime locaux non accessibles directement à ChatGPT. | **TECHNICALLY AVAILABLE WITH RESERVES / UAT PENDING** : suites transverses full NOT RUN, 3 unit FAIL, identité test, rollback non exercé, docs locales non commit. | Morris conduit sa campagne ; aucune publication produit/PR/merge/adoption. |
| **19/11/2026 — retour RECETTE Morris et audit UX 11 frames** ; capture CampusFlow fournie en conversation, Figma file itgvCulInEnFY6DvgIegvP page 828:2 réouvert via MCP | Observé : header Sujets et acquis, phrases brutes, deux panneaux inertes ; cible Figma exploration « Journal » et arborescence pleine zone. | **835:71 NON CONFORME ; 10 états NON OBSERVÉS en runtime** ; 11 designs lus ; contrat UX v1.0, technique v0.3 et handoffs reconsultés. | **UX NO-GO** : texte/origine à qualifier, empty state sobre, refonte d'alignement Figma ; aucune preuve de fuite interprojets à ce stade. | Correctif Cursor sous GO Morris, preuves 11 captures DEV, recette update via gate distinct ; pas de push projet. |

**Règle de version :** à chaque nouveau handoff, garder cette ligne historique ; ajouter une **ligne datée avec SHA exact** et revoir §1, §4, §5, §7 et §8. Les résultats plus récents prévalent **uniquement sur le périmètre qu'ils prouvent**. Un nouveau BROWSER ne transforme pas un ancien test PG absent en PASS rétroactif.

## 10. Procédure de contrôle ChatGPT à chaque handoff — guide de non-dérive

**A. Pré-check source de vérité.** Lire Git main/ref/HEAD, SEF, Roadmap, décisions R4/R5, contrat UX v1.0, technique v0.3 et ce registre **depuis Git**. Distinguer ce qui est dans main, branche documentaire, branche candidat publiée ou **worktree local NON OBSERVÉ**. Ne pas prétendre inspecter des PNG, logs ou fichiers locaux absents.

**B. Vérification du Review Pack.** Relire le dernier handoff canonique à SHA immuable et vérifier le triplet **rapport/diff/code**, les nouveaux fichiers et contenus modifiés, la matrice complète, les logs, le type de preuve, la date et les réserves. Handoff présent ≠ pack complet.

**C. Confrontation indépendante aux exigences.** Pour chacune des seize lignes J-C :
- retrouver la règle R1/R2/R3 ou UX v1.0 correspondante, y compris les quatre exigences complémentaires ;
- inspecter la responsabilité D3/D4/D6 et la réalisation réellement disponible ;
- vérifier l'API/UI qui consomme la capacité, et non seulement sa fonction dans un service ;
- vérifier oracle négatif, autorisations, versions, errors/retry et non-régression ;
- écrire état de code, état de preuve, lacune, risque et exit, sans « % d'avancement » arbitraire.

**D. Relecture de vision utilisateur.** Jouer mentalement puis tester sur runtime lorsque disponible : **entrée Journal → sujet → recherche → points ouverts → décision expliquée → source message/document exact → retour → reprise Nora**. Si un maillon exige une fonctionnalité non construite, le parcours n'est pas livré.

**E. Contrôle de frontière.** Toute mutation supplémentaire de code, DB, D6, rail global, méthode, versioning, CI, PR ou RECETTE se confronte au blast radius et au gate. Un « correctif facile » n'autorise pas un second moteur ou une nouvelle autorité.

**F. Verdict fondé sur les preuves.** Mettre à jour le présent fichier sur mandat Git borné, publier SHA/diff/relecture distante, et produire l'un des verdicts exacts : **NOT READY — SCOPE INCOMPLETE**, **REVIEW PACK INCOMPLETE**, **READY FOR MORRIS REVIEW WITH RESERVES**, ou **READY FOR MORRIS REVIEW** seulement quand la couverture applicable est démontrée. Morris décide ensuite réception/promotion ; ChatGPT ne clôt pas les réserves à sa place.

## 11. Registre initial des lacunes (snapshot premier handoff)

| Lacune actuelle | Nature | Sortie vérifiable | Statut |
| --- | --- | --- | --- |
| **Réactivation Nora J-C04** | Fonction absente rapportée | Comportement D3/D4 avec contexte ancien et rappel opportun, test négatif | **OPEN / BLOCKING** |
| **Sources et contradictions J-C06** | Fonction absente rapportée | Contradiction/version/droits honnêtes, test sources antagonistes | **OPEN / BLOCKING** |
| **Message exact J-C13** | Fonction absente rapportée | BROWSER grand fil, ancrage et retour avec brouillon non envoyé | **OPEN / BLOCKING** |
| **Document versionné J-C14** | Fonction absente rapportée | API+BROWSER origine/révision/droits, erreur si source retirée | **OPEN / BLOCKING** |
| **J-C01/02/03/05/07–12/15/16** | Réalisation partielle ou seulement annoncée | Oracles du §4, tests, négatifs, preuves et accès au code complet | **OPEN / COVERAGE INCOMPLETE** |
| **Pack de revue contenu/code** | Preuve source insuffisante | Contenu complet des créations et diffs modifiés, index Git exhaustif, tests/logs | **OPEN / REVIEW PACK INCOMPLETE** |
| **Figma/runtime** | Aucun BROWSER Journal | Capture/runtime de chaque état pertinent et retour fonctionnel, reflow et clavier | **OPEN / NOT RUN** |
| **LIVE/REAL, RECETTE** | Non exécutés / pas de gate | Test uniquement sous GO borné, sans assimilation à l'absence de code | **NOT RUN / NO GO INFERRED** |

**Aucune sortie n'est acquise du fait de la création de cette matrice.** Les travaux restent dans l'Ensemble 06 Journal ; la conception des autres surfaces Documents ne doit pas être absorbée en douce dans ce contrôle.

## 13. Revue historique — second cycle Cursor, matrice J-C01 à J-C16 (snapshot v0.2)

**Nature de la preuve :** code et diffs **reproduits dans le Review Pack**, pas inspection exécutable du worktree local. Tests UNIT/PG/BROWSER PASS **rapportés** par Cursor et examinés sur leurs assertions ; les captures fournies dans cette conversation sont des observations DEV. **Aucune acceptation Morris** par la présente matrice.

| ID | Évolution observée dans le pack v2 | Qualification indépendante et critère de sortie |
| --- | --- | --- |
| **J-C01** | Révisions immuables et append/get summary D4 ; PG rapportés. | **PARTIAL** : stockage présent, mais génération Nora de synthèse cohérente à travers plusieurs échanges et correction autonome non démontrées ; tester D3 vers D4, sources, version et zéro écriture sur bruit. |
| **J-C02** | parent-aware, reparent et refus de cycle ; PG rapportés. | **PARTIAL** : prouver feuille devenue parent sans perte, homonymes, split/merge avec enfants et choix sémantique par Nora. |
| **J-C03** | subjectId préservé par les chemins de projection. | **CODE OBSERVABLE / BROWSER PARTIAL** : tester un vrai sujet avec acquis, point rattaché et sélection de fiche. |
| **J-C04** | Helper de réactivation par recouvrement lexical/cooldown, branché aux snippets D3 ; tests UNIT/PG. | **PARTIAL** : réactivation déterministe existe, mais pertinence en longue reprise multi-session et décision de Nora de la faire apparaître restent à démontrer ; contrôler négatifs et anti-spam. |
| **J-C05** | Résolution factuelle, restriction D6 inchangée ; PG. | **PARTIAL** : test de résolution utilise une référence documentaire textuelle non démontrée réelle ; refuser source fictive/inaccessible, vérifier portée projet et séparation D6. |
| **J-C06** | Helpers source/currentness, contradictions et refus d'overclaiming ; UNIT/PG. | **KNOWN GAP ÉLEVÉ** : ref Git main avec SHA **fourni** reçoit CURRENT sans vérification distante du SHA/HEAD. Détection de contradictions principalement lexicale. Source non vérifiée = UNKNOWN/UNVERIFIED, pas CURRENT ; tests ref fausse, source retirée, inférences antagonistes. |
| **J-C07** | Projection inter-préparations D4 et test isolation deux Pilotes/projets. | **PARTIAL** : aucun scénario montré avec **deux préparations du même projet** ; ajouter source première préparation reprise dans deuxième, isolation et homonymes. |
| **J-C08** | Recherche dans acquis, raisons, UI recherche/checkbox ; PG et BROWSER ciblés. | **PARTIAL BROWSER** : runtime vide ; exiger résultat de vrai sujet, chemin/rattachement, filtre combiné, erreurs/absence de résultat et droits. |
| **J-C09** | D6 decisions/restrictions read-only, applicability et historique dans projection ; PG. | **PARTIAL** : écran D6 vide ; vérifier décisions applicable/remplacée/suspendue et restrictions ACTIVE/LIFTED, badge lié à vraie autorité. |
| **J-C10** | Révision d'explication et fingerprint d'acte D6, PG. | **PARTIAL** : le test écrit une explication de fixture avec source message fictive ; récit réellement construit depuis alternatives, motivations, messages anciens et sources vérifiables reste à démontrer. |
| **J-C11** | Recherche décisions dans service/API ; PG. | **PARTIAL BROWSER** : recherche saisie sur liste vide ; tester vraie décision et sélection, état, explication et retour. |
| **J-C12** | Composant plein/split/agrandi, un scénario navigateur et captures vides. | **PARTIAL BROWSER** : split/agrandissement sont conditionnels, non garantis par le test ; semer sujet/parent/décision et tester nominal vers 40/60 vers agrandi puis retour. **VISUAL REVIEW PENDING MORRIS — RECETTE**. |
| **J-C13** | API message par ID, focus/scroll, état Journal conservé. | **KNOWN GAP** : le test n'ouvre pas de source ; fallback ajoute un ancien message à la **fin du tableau**, potentiellement hors chronologie. Tester ancrage vrai sur >1000 messages, insertion chronologique, brouillon préparé avant navigation, aucun auto-send et retour Journal. |
| **J-C14** | onOpenDocument raccordé au lecteur canonique D4, revisionId transporté. | **PARTIAL** : aucune référence documentaire cliquée dans le test navigateur ; vérifier version exacte, permission, source retirée, absence de doublon et retour. |
| **J-C15** | operationId/expectedRevision, PG. | **KNOWN GAP SÉCURITÉ / PARTIAL** : markOpenPointReactivated valide le propriétaire du point mais pas le rattachement réel du point au projectId fourni avant écriture de l'événement. Tester autre projet du même Pilote, concurrence, ACK perdu, permissions des APIs et performance longue conversation. |
| **J-C16** | As-built/delivery-history actualisés ; tsc/lint, 4 UNIT, 10 PG et 1 BROWSER PASS rapportés ; pack complet. | **PARTIAL QA** : tests ML2/ML3/ML4C/E05 complets, build Next, charge et preuve de continuité globale non établis. Rejouer suites affectées et relier résultats à SHA/lane. |

**Bilan :** 16/16 critères présents ; **13 IMPLEMENTED / 3 PARTIAL déclarés par Cursor**, mais les oracles plus larges de la vision n'ont **pas** été complètement éprouvés. Les quatre critères manquants du premier handoff ont un **code inspectable dans ce nouveau pack** ; ils ne restent donc pas marqués NOT IMPLEMENTED, mais leur conformité métier reste **PARTIAL / NOT YET PROVEN**. Aucun résultat global n'est ADOPTED.

### 13.1. Couverture des captures / UX sans arbitrage esthétique par ChatGPT

| Pièce utilisateur | Ce qui est observable | Ce qui ne l'est pas |
| --- | --- | --- |
| figma-835-71.png | Référence V4 Sujets exploration validée dans la conception. | Ce n'est pas un runtime. |
| runtime-1680-sujets-exploration.png | Journal ouvert en DEV, message « Aucun sujet capitalisé pour l'instant ». | Hiérarchie, contenu sujet, sélection, lecture 40/60, agrandi. |
| runtime-1680-filtre-points.png | Requête saisie, filtre coché, toujours aucun sujet. | Résultat pertinent, points de plusieurs sujets et retour au sujet. |
| runtime-1680-decisions.png | Recherche Décisions, aucun acte affiché. | Décision applicable, historique, restriction et explication. |
| runtime-1280-journal.png | Journal sur largeur compacte, toujours aucune décision. | Fiche D6, navigation/lecture et comportement contextualisé. |

Les captures ont été effectivement partagées dans cette conversation mais **ne sont pas publiées comme preuves Git par cette contribution**. Les critères visuels esthétiques (densité, typographie, fidélité, ergonomie) relèvent de Morris **en RECETTE** ; le fait que les données soient vides est une limite **fonctionnelle de preuve**, pas un jugement esthétique.

### 13.2. Écarts prioritaires et gates de sortie

| Risque | Priorité | Contrôle de sortie exigé |
| --- | --- | --- |
| **E06-01 BROWSER sur données vides** | Bloquant pour claim de complétude | Cursor crée un scénario DEV avec sujet autonome/parent, acquis/points, décision D6, message ancien et document versionné ; assertions obligatoires 40/60/agrandi/recherche/retour, aucune branche conditionnelle sautant le parcours central. |
| **E06-02 mémoire réellement intelligente** | Haute | Nora/D3 consolide et restitue synthèse/explication multi-source, incertitude, reprise et révision ; scénario déterministe significatif puis LIVE uniquement sous GO. |
| **E06-03 Git currentness** | Haute | Vérification effective repo/ref/SHA et droit avant statut CURRENT, sinon UNKNOWN ; cas ref décalée, fausse et inaccessible. |
| **E06-04 message exact/ordre et brouillon** | Haute | Source cliquée puis message ancien trouvé à la bonne position, brouillon déjà écrit conservé, retour et zéro envoi, fil long. |
| **E06-05 portée sécurité événement réactivation** | Haute | Lien point/projet/Pilote revalidé côté serveur, refus interprojets même Pilote, test négatif. |
| **E06-06 non-régression et API/document D6** | Haute | Test vrai D6 et doc revision, suites ML2/ML3/ML4C/E05, build, erreurs/révocations, contrat DB intact. |

**Verdict de sortie de revue :** **PACK FULL REVIEWABLE — FUNCTIONAL COVERAGE INCOMPLETE / READY FOR MORRIS REVIEW WITH RESERVES**, pas READY FOR RECETTE ni Gate C. **Prochaine action recommandée :** complétude bornée en DEV des points E06-01..06 et tests fonctionnels non vides ; puis GO séparé de Morris pour mise à disposition RECETTE, où il assurera la validation esthétique/UX. Pas de push projet, PR/merge, modification de gouvernance ou de vision par la présente revue.

## 14. Revue cycle 3 — matrice historique J-C01 à J-C16 (snapshot v0.3)

**Méthode :** code et tests inspectés **dans le handoff**, exécution locale, données et logs bruts **NON OBSERVÉS directement**. Un test PASS rapporté ne devient pas une recette de comportement global.

| ID | Réalisation / test cycle 3 | Qualification de la revue et sortie |
| --- | --- | --- |
| **J-C01** | Révisions de synthèse D4, PG PASS rapporté. | **PARTIAL** : deux contenus écrits directement par le test ne démontrent pas une synthèse D3 issue d'échanges sourcés, ni une correction autonome. |
| **J-C02** | Parentage et garde de cycle ; seed parent, feuille, homonyme. | **PARTIAL** : vérifier deux identités homonymes distinctes, feuille→parent, split/merge/reparent avec enfants et provenance, sélection sémantique Nora. |
| **J-C03** | Sujet non vide et sélection BROWSER. | **CODE + BROWSER CIBLÉ** : vérifier aussi acquis/point affichés dans la bonne fiche et par ID, avant et après reparentage. |
| **J-C04** | Réactivation D3/D4 positive/négative PG et UNIT. | **DETERMINISTIC CIBLÉ** : pertinence de reprise multi-session et initiative Nora LIVE NOT PROVEN, pas de rappel répétitif non contrôlé. |
| **J-C05** | Document fictif refusé, révision réelle admise ; restriction D6 intacte. | **PARTIAL** : existence/portée DB ≠ contenu suffisamment probant ; tester source réelle non pertinente, version retirée et refus factuel. |
| **J-C06** | main+SHA déclaré → UNVERIFIED, candidate séparée, gate d'honnêteté ; UNIT PASS. | **CORRECTIF CIBLÉ** : aucune preuve REAL Git, absence de fausse certitude à vérifier pour toutes sources ; contradictions complexes non prouvées. |
| **J-C07** | Isolation Pilotes/projets et projection D4 rapportées. | **PARTIAL** : test de **deux préparations du même projet NOT RUN**, provenance et non-fusion à couvrir. |
| **J-C08** | Recherche UI + PG/BROWSER, terme « traçabilité ». | **FAUX POSITIF D'ORACLE** : le titre du sujet est « Traçabilité Git », ce mot ne prouve donc pas la recherche dans les acquis. Tester terme présent **seulement dans acquis**, absent de tous titres, puis raison de match et filtre. |
| **J-C09** | Décision applicable D6 sélectionnée en BROWSER. | **PARTIAL** : historique/remplacement, restriction ACTIVE/LIFTED, portée et source d'autorité D6 non parcourus en BROWSER. |
| **J-C10** | Explication D6 versionnée en seed/PG. | **PARTIAL** : motifs/alternatives de fixture, pas de reconstruction par Nora à partir des échanges/versions. LIVE NOT PROVEN. |
| **J-C11** | Recherche Décisions API/UI existante. | **PARTIAL** : BROWSER n'entre pas un terme de recherche D6 puis ne sélectionne pas un résultat ; tester recherche dans explication, filtre et retour. |
| **J-C12** | 40/60, agrandi puis réduit **non conditionnels** en BROWSER rempli. | **CORE BROWSER PASS RAPPORTÉ** ; parent/décision agrandie, retour, focus/accessibilité et 1280 non entièrement exercés. VISUAL REVIEW PENDING MORRIS — RECETTE. |
| **J-C13** | Message ancien ciblé, ordre non aveuglément append, brouillon préparé avant retour. | **PARTIAL** : 40 messages, test seulement early≠last ; retour par **page.goto** sans assertion de préservation onglet/sélection/filtre, aucun auto-send non prouvé par compteur. |
| **J-C14** | Document et deux versions créés ; lecteur D4 accessible par URL. | **PARCOURS NON PROUVÉ** : pas de clic source dans Journal, URL sans revisionId, aucun contrôle version V2 exacte, droits retirés et retour. |
| **J-C15** | loadOwnedOpenPoint vérifie Pilote+projet, PG refuse cross-project même Pilote et préserve zéro write/idempotence. | **CORRECTION CIBLÉE SOLIDE** sur pack ; concurrents/ACK perdu, autre Pilote et performance long fil restent à mesurer. |
| **J-C16** | tsc/lint/build, UNIT 6/6, PG 12/12, BROWSER 1/1, sous-suite ML3 : PASS rapportés ; docs as-built. | **PARTIAL** : suites ML2/ML3/ML4C/E05 complètes NOT RUN, contrôle isolation/migration 014 et sécurité route seed hors DEV à renforcer. |

**Bilan :** Cursor présente douze J-C comme implémentés avec preuves ciblées et quatre PARTIAL (07/10/11/16). La revue ne retire pas les progrès constatés, mais **le contrat d'acceptation complet de plusieurs autres lignes reste PARTIAL** au regard de leurs oracles. Les statuts de code, de tests et de réception sont distincts.

### 14.1. Suivi E06 — réserves et fermeture

| Réserve | État évalué | Condition de fermeture |
| --- | --- | --- |
| E06-05 : portée D4 | **FIX COHÉRENT / TEST PG RAPPORTÉ** | Vérifier opérations voisines, cross-Pilote et refus sans écriture ; relecture code à SHA candidat. |
| E06-03 : Git currentness | **HONNÊTETÉ CORRIGÉE**, REAL NOT RUN | Conserver UNVERIFIED tant qu'aucun vrai repo/ref/SHA autorisé vérifié ; tester autres chemins CURRENT. |
| E06-04 : message exact | **PARTIAL** | Retour applicatif préservant sélection, onglet, recherche, filtre et brouillon ; test fil réellement long et zéro auto-send. |
| E06-01 : BROWSER non vide | **PROGRÈS / PARTIAL** | Corriger faux positif de recherche acquis, rechercher une vraie décision, ouvrir une révision via le Journal, tester parent et état compact. |
| E06-02 : mémoire cognitive | **PARTIAL** | Prouver passage D3→D4 contextuel sur sources vérifiées, reconstitution/révision ; LIVE sous gate distinct. |
| E06-06 : D6, documents et non-régression | **PARTIAL** | Vérifier source valide et **pertinente**, statut/version/droits/retrait, test gate route fixture et suites ML2/ML3/ML4C/E05. |

### 14.2. Risque des données d'essai et frontière de RECETTE

Le nouveau endpoint DEV/E2E de seed écrit des sujets, révisions documentaires et **HumanDecision D6 de test** dans un projet DEV. Son admission appelle le garde existant e2eFixtureMutationsAllowed, relu sur main : **NODE_ENV production refusé**, **STUDIO_LANE doit valoir DEV** et **STUDIO_E2E doit valoir 1**. Ce garde statique est une bonne protection, mais la preuve de refus d'accès effectif avec flags absents, depuis une autre lane ou sous mauvaise identité n'est **pas fournie**. Tester ce comportement et consigner identité/DB/version pour préparer une RECETTE isolée, sans muter RECETTE à ce stade.

L'absence de validation visuelle pixel-perfect dans DEV ne bloque pas la QA des interactions. **Morris garde la revue visuelle et ergonomique en RECETTE**. Aucun effet Git projet, PR, merge, décision D2, Gate C ni promotion n'est couvert par cette revue documentaire.

### 14.3. Prochaine étape recommandée

**Complément DEV ciblé de preuve et de comportement**, sans architecture parallèle ni nouvelle migration : tests discriminants sur recherche acquis, décision, version documentaire et retours d'état ; négatifs de sources et permissions ; vrai scénario deux préparations/un projet ; pipeline D3→D4 ; suites de non-régression et sécurité route fixture. Obtenir ensuite un candidat produit immuable, une preuve ENV-01 de DEV, la matrice J-C et le pack vérifiables **avant** éventuel GO Morris de mise à disposition RECETTE. Le produit local a122bf27 ne vaut pas candidat RECETTE automatiquement.

## 15. Revue historique — cycle 4 Journal §5 + première épreuve Nora LIVE (snapshot v0.4)

**Méthode :** code et assertions inspectés dans le handoff, tests PASS annoncés par Cursor sans réexécution indépendante. Les décisions et la réception Morris ne découlent pas du rapport.

### 15.1. Couverture J-C01 à J-C16

| ID | Code/test de la livraison | Qualification de la preuve et sortie |
| --- | --- | --- |
| **J-C01** | Révisions D4 PG, E01 Nora produit du cadrage | LIVE synthèse D3→D4 NON PROUVÉE ; aucun relevé post-E01 |
| **J-C02** | Parent/homonymes/reparent PG historiques | Hiérarchie autonome Nora LIVE et split/merge non éprouvés |
| **J-C03** | Sujets/acquis BROWSER seeded | PASS déterministe rapporté, aucun objet issu de Nora LIVE |
| **J-C04** | Réactivation D3/D4 UNIT/PG | E18 absent ; initiative spontanée LIVE NON PROUVÉE |
| **J-C05** | PG refuse révision non AVAILABLE | PASS rapporté ; existence et droits ≠ pertinence épistémique |
| **J-C06** | Git UNVERIFIED, contradictions heuristiques | REAL Git et contradiction LIVE NOT RUN |
| **J-C07** | PG deux préparations même projet, homonymes distincts | PASS rapporté ; continuité LIVE inter-préparations NOT RUN |
| **J-C08** | Recherche titre sans traçabilité, acquis avec token, badge acquis | Faux positif antérieur corrigé, BROWSER PASS rapporté |
| **J-C09** | Acte D6 et applicability seeded | Aucun arbitrage E17 LIVE ; état historique UX partiel |
| **J-C10** | Explication D6 via seed/PG | PARTIAL : récit Nora construit multi-sources LIVE NOT PROVEN |
| **J-C11** | Recherche token seulement dans explication D6, résultat BROWSER | PG+BROWSER PASS rapportés |
| **J-C12** | 40/60 et agrandi BROWSER seeded | PASS ciblé rapporté ; VISUAL REVIEW PENDING MORRIS — RECETTE |
| **J-C13** | Source ancien message et retour rail conservant filtre/recherche/split/brouillon | BROWSER PASS ciblé ; fil LIVE et 1000+ NON PROUVÉS |
| **J-C14** | Clic référence documentaire et contenu version v2 exact | BROWSER PASS ciblé ; source retirée en UX LIVE non éprouvée |
| **J-C15** | Portée/idempotence PG | PERF LIVE : E01 ≈647 s, coût mesuré UNKNOWN ; long fil/ACK perdu partiels |
| **J-C16** | tsc/lint/build, Journal PG15, ML3 PG49, BROWSER2 PASS rapportés | PARTIAL : suites ML2/ML4C/E05 full NOT RUN, LIVE 1/20 |

**Bilan :** 16/16 obligations réévaluées ; oracles déterministes J-C05/07/08/11/13/14 renforcés. Les capacités cognitives et l'évolution du Journal sur 20 échanges **NE SONT PAS PROUVÉES**.

### 15.2. Critères cognitifs C1 à C14 : E01 seulement

| Critère | Résultat de la revue |
| --- | --- |
| **C1** | PASS OBSERVÉ E01 : cadrage fictif compris |
| **C2** | NOT OBSERVED : pas de sujets D4 post-E01 |
| **C3** | PARTIAL : réponse structurée, aucune synthèse D4 prouvée |
| **C4** | NOT OBSERVED : capitalisation sélective non mesurée |
| **C5** | PARTIAL : hypothèse distinguée, pas d'acte D6 à éprouver |
| **C6** | NOT OBSERVED : correction budget E15/16 absente |
| **C7** | NOT OBSERVED : contradiction E13 absente |
| **C8** | NOT OBSERVED : rappel E18 absent |
| **C9** | NOT OBSERVED : reprise T10 absente |
| **C10** | NOT OBSERVED, PAS FAILED : T0 vide attendu avant conversation |
| **C11** | NOT APPLICABLE E01 : aucun acte D6 |
| **C12** | PASS OBSERVÉ E01 : pas de preuve externe inventée |
| **C13** | PARTIAL : premier cadrage utile, pas de trajectoire longue |
| **C14** | RISQUE ÉLEVÉ : E01 647537 ms, coût fallback 0,35 USD, tokens réels inconnus |

### 15.3. Risques spécifiques du harnais LIVE

| ID | Défaut / limite vérifié(e) dans le code | Exit technique |
| --- | --- | --- |
| **LIVE-Q01** | Test final exige seulement un tour LIVE >0, pas 20 | PASS exige 20 COMPLETE réellement corrélés aux 20 messages ; arrêt = PARTIAL/STOP |
| **LIVE-Q02** | Regex accepte FAILED/UNKNOWN/le mot Nora | Vérifier COMPLETE strict, nouvelle réponse ID après chaque envoi, timeout et échec réel |
| **LIVE-Q03** | Timeout global 20 min ; E01 >10m | Instrumenter provider/outils/DB/DOM et diagnostiquer la latence avant reprise longue |
| **LIVE-Q04** | estimateUsd appelé sans tokens = proxy 0,35 USD | Rapporter usage réel ou UNKNOWN ; contrôle plafond/cout explicitement approximatif |
| **LIVE-Q05** | Chaque run crée nouveau CampusFlow et repart E01 | Reprise dans le même projet/fil à E02, idempotente, sans replay E01 |
| **LIVE-Q06** | Capture T20 même en interruption propre possible | N'étiqueter T10/T20 qu'après nombre exact de tours ; sinon PARTIAL_AFTER_E01 |
| **LIVE-Q07** | STOP opérateur/sur demande non documenté au-delà du rapport | Ne pas l'attribuer à Morris sans preuve ; consigner acteur/cause |
| **LIVE-Q08** | Pas de snapshot D4 après E01 ; T10/T20 absents | Capturer état réel à chaque jalon, IDs sources et révisions ; aucune fixture pour LIVE |

**Priorité de suite :** diagnostiquer la latence de E01, corriger les oracles de succès/complétude, la comptabilité des coûts, le snapshot et la reprise **dans le projet déjà créé** avant toute nouvelle campagne. Ne pas relancer 20 tours aveuglément ni faire passer E01 pour un test du Journal. Compléter les suites ML2/ML4C/E05. Nouveau GO Morris si variation du budget/périmètre ou effet hors DEV ; GO initial ne vaut ni push produit ni recette.

### 15.4. Verdict et gates

**READY FOR MORRIS REVIEW WITH RESERVES — REAL PROVIDER E01 SEUL / 19 TOURS NON JOUÉS / CAPITALISATION JOURNAL LIVE NOT PROVEN.** Handoff Git complet et distant vérifié. Code produit local non publié ; recettes et assertions esthétiques réservées à Morris en RECETTE ; pas de Gate C, PR, merge, STABLE ni ADOPTED.

## 16. Revue historique — qualification technique et disponibilité RECETTE (snapshot v0.5)

### 16.1. Matrice J-C01 à J-C16 à la mise à disposition

**Important :** code servi, tests DEV, smoke RECETTE et acceptation Morris sont quatre niveaux distincts. Les tests ont été exécutés et rapportés par Cursor, pas indépendamment par ChatGPT.

| ID | Effet de la livraison | Limite actuelle / sortie |
| --- | --- | --- |
| **J-C01** | 014 en RECETTE, tables révisions D4 présentes | Synthèse réelle et versions de connaissance non éprouvées par le smoke |
| **J-C02** | Services de hiérarchie et UI inclus dans le build | Parent/feuille et réorganisation non examinés en RECETTE |
| **J-C03** | API Journal 200 et navigation réalisée | Sélection d'un sujet et acquis rattaché non démontrés |
| **J-C04** | Contrats réactivation D3/D4 livrés | Utilité des anciens points ouverts à évaluer en UAT |
| **J-C05** | Contrats de résolution et refus source indisponible testés en DEV | Vérification factuelle réelle à apprécier sur source pertinente |
| **J-C06** | Contrats d'honnêteté/provenance issus des cycles précédents | Contradiction et qualification de sources non éprouvées par le smoke |
| **J-C07** | PG DEV deux préparations d'un projet précédemment PASS | Continuité réelle dans deux préparations non testée en RECETTE |
| **J-C08** | Onglet Sujets et recherche accessibles | Recherche métier non exercée sur le projet sans sujets |
| **J-C09** | Vue Décisions et restrictions présentes dans réponse API | Acte D6 et restriction réellement consultés non testés |
| **J-C10** | Table D4 d'explication D6 présente | Narration contextualisée de décision non exercée |
| **J-C11** | Recherche Décisions accessible, tests DEV précédents | Recherche de décision réelle non effectuée en RECETTE |
| **J-C12** | Journal shell servi et onglets visibles | Viewer 40/60 et agrandi non parcourus au smoke ; VISUAL REVIEW PENDING MORRIS — RECETTE |
| **J-C13** | Travail et huit messages historiques accessibles | Lien exact Journal vers message non parcouru au smoke |
| **J-C14** | Code de référence documentaire versionnée embarqué | Lien vers révision exacte non exercé au smoke |
| **J-C15** | DB 014, isolation API 401/403, build et backup | Auth Morris normale, intégrité étendue DB et rollback réel à qualifier |
| **J-C16** | tsc/14 UNIT/smoke RECETTE PASS rapportés ; ancien build conservé | PARTIAL : trois FAIL suite full unit ; suites ML2/ML4C/E05 complètes NOT RUN |

**Bilan :** les fonctions du Journal sont techniquement disponibles dans la RECETTE existante selon le handoff ; la **conformité utilisateur des seize lignes reste à qualifier**, sans rétrograder les preuves DEV déjà obtenues.

### 16.2. Registre des huit réserves de mise à disposition

| ID | Observation | Qualification / condition de sortie |
| --- | --- | --- |
| **DEP-01** | Build RECETTE PV12SV9VToVGK-ReSxTqk et SHA d5bf7eb7 rapportés sur même port/service | READY FOR UAT TECHNIQUE ; si build perçu différent, suspendre et requalifier |
| **DEP-02** | 014 appliquée après dump, trois tables D4 et compteurs 23/560 inchangés | DB MIGRATION REPORTED VERIFIED ; pas de rollback de données sans gate |
| **DEP-03** | E05 Travail et projet de huit messages smoke PASS | NON-RÉGRESSION PARTIELLE : composition et E05 complets non rejoués |
| **DEP-04** | STUDIO_DEV_TEST_LOGIN=1 en RECETTE, session Pilote A DEV utilisée | IDENTITÉ / SESSIONS à qualifier avec vrai accès Morris et profil RECETTE séparé |
| **DEP-05** | Trois FAIL full unit déclarés préexistants ; ML2/ML4C/E05 NOT RUN | Ne pas convertir en PASS global ; documenter baseline/impact |
| **DEP-06** | Dump et rollback build préparés, restauration non exécutée | PREPARED NOT EXERCISED ; préserver artefacts et données |
| **DEP-07** | Manifeste nouveau FULL, as-built FULL, diff delivery-history au handoff | REVIEWABLE, mais docs non committés dans Git produit |
| **DEP-08** | Commentaire migration 014 anciennement DEV-only dans fichier livré | KNOWN DOC GAP mineur, à synchroniser lors d'un lot utile sans nouveau chantier |

### 16.3. Trajectoire de la campagne utilisateur

**GO existant :** Morris peut commencer la campagne sur le même poste et la même RECETTE au port 3200, sous son identité normale et avec un profil navigateur distinct de DEV. Le scénario manuel à préparer portera sur la progression d'un **projet fictif créé via l'application**, permettant de vérifier sujets, acquis, points ouverts, décisions humaines, recherche, historique, sources et retours. Ne pas injecter de connaissances par script ; les défauts observés seront inscrits dans la matrice et corrigés dans des lots bornés. **Aucun prolongement de la campagne automatisée de conversation antérieure.**

**Préalable pratique :** confirmer que Morris est bien connecté sous l'identité destinée à la recette, non simplement sous le Pilote A de test du smoke. Ne pas déduire un défaut de produit d'une confusion d'identité ou de session.

### 16.4. Verdict / gates

**RECETTE TECHNICALLY AVAILABLE WITH RESERVES — READY FOR MORRIS USER ACCEPTANCE.** Le smoke n'est pas une recette utilisateur. L'acceptation visuelle, ergonomique et métier reste un gate distinct de Morris ; aucun push produit, PR, merge, Gate C, STABLE ou ADOPTED inféré. La mise à jour ici est **documentaire D1 uniquement**.

## 17. Sixième revue — écart UX constaté par Morris en RECETTE et audit des onze frames Figma

### 17.1. Matrice Figma V4 vs RECETTE

**Lecture des statuts :** seule l'exploration Sujets est **visuellement observée** dans la capture Morris. Les autres états sont extraits des frames natives via MCP Figma, mais **aucune capture de leur runtime dans cette RECETTE n'a été fournie** ; ils ne sont donc pas déclarés conformes ou non conformes sans observation. Les dimensions natives Figma des états inspectés sont 1680×970 ; rail partagé page 05 et enveloppe constante.

| Frame | État cible | Verdict prouvable maintenant |
| --- | --- | --- |
| [835:71](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-71) | Sujets — exploration | **NON CONFORME** : header, hiérarchie, densité, panneaux et copy divergents dans capture Morris |
| [842:26](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-26) | Sujet autonome — 40/60 | **NON OBSERVÉ** en RECETTE ; code split seul ≠ rendu conforme |
| [842:131](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-131) | Sujet parent — 40/60 | **NON OBSERVÉ** en RECETTE ; contenu enfants/repères à éprouver |
| [835:159](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-159) | Sujet autonome — agrandi | **NON OBSERVÉ** en RECETTE ; layout hero/synthèse/acquis/points/sources/asides à comparer |
| [835:239](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-239) | Sujet parent — agrandi | **NON OBSERVÉ** en RECETTE ; 3 enfants riches, synthèse parent et asides à comparer |
| [859:42](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-42) | Recherche Sujets — résultat 40/60 | **NON OBSERVÉ** en RECETTE ; match reason, chemin, sélection et viewer |
| [859:146](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-146) | Filtre Points ouverts — 40/60 | **NON OBSERVÉ** en RECETTE ; transversal et sujet origine |
| [860:58](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-58) | Décisions — exploration | **NON OBSERVÉ** en RECETTE ; liste D6, statuts et hiérarchie |
| [860:136](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-136) | Décision — 40/60 | **NON OBSERVÉ** en RECETTE ; choix D6, pourquoi/contexte, statut |
| [860:251](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-251) | Recherche Décisions — résultat 40/60 | **NON OBSERVÉ** en RECETTE ; résultat et contexte |
| [860:360](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-360) | Décision — agrandie | **NON OBSERVÉ** en RECETTE ; hero, motifs sourcés, repères et histoire |

**Point clé :** les textes des frames Figma sont des **données illustratives**, à ne pas hardcoder. Seuls les libellés d'interface, géométrie, typographie, hiérarchie, styles et interactions approuvés sont à reproduire ; la connaissance affichée vient exclusivement des vraies données D4/D6 autorisées.

### 17.2. Registre correctif UX — IN du même macro-lot Ensemble 06

| Écart | Résultat requis | Gate |
| --- | --- | --- |
| **UX-01** — Identité, textes et header | Titre Journal exact, sous-titre approuvé, breadcrumb/tabs/recherche alignés ; retirer « Sujets et acquis », double heading de D4/D6 et textes techniques en UX finale | **BLOCKER** |
| **UX-02** — Exploration nominale | Arborescence éditorialisée pleine largeur, titres, descriptions, parenté, compteurs contextuels, grille et style copiés de Figma 835:71 ; ne pas afficher 40/60 sans sélection | **BLOCKER** |
| **UX-03** — État initial/vide | Projet sans connaissance : shell Journal V4 fidèle, pas de fixture ni sujet inventé, état sobre et explicite, pas de deuxième paneau inerte ; charge/erreur/no results distincts | **BLOCKER** |
| **UX-04** — Visionneuses sujet | 40/60 réel (526/784 à viewport Figma), lecture autonome/parent selon contenu, agrandi/réduit, typographie, hero, cartes, sources et asides conformes aux quatre frames | **BLOCKER** |
| **UX-05** — Sujets recherche / points ouverts | Résultat avec chemin et raison, filtre discret près de recherche, projection transverse et viewer ; Figma 859:42/146 | **HIGH** |
| **UX-06** — Décisions | Trois états + agrandi V4 exacts, distinction acte D6 vs explication D4, statuts, sources et recherche conformes à Figma 860:58/136/251/360 | **BLOCKER** |
| **UX-07** — Contenu mal présenté / possible mauvaise portée | Tracer la phrase « première source Git » jusqu'au sujet, projet, préparation, sources et API ; corriger titre tronqué/texte brut si UI en cause ; stopper si fuite interprojets confirmée | **HIGH SECURITY CONDITIONAL** |
| **UX-08** — Preuves runtime et Figma | Comparaison 11/11 Figma screenshot ↔ runtime au même 1680×970 et contrôles 1280, vrais états avec objets autorisés ; tableau écarts géométrie/style/interaction ; aucun READY sans comparaison | **BLOCKER** |

**Critère hard-stop :** capture runtime absent(e), design contract Figma incomplet, ou écart visuel majeur encore présent = **FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED / NOT READY FOR MORRIS UX UAT**. Une présence de composants React, un PASS tsc/PG/Playwright ou l'identité du build ne remplacent pas ce gate. Revue esthétique finale par Morris après livraison conforme aux frames.

### 17.3. Réconciliation obligatoire avec le périmètre fonctionnel/technique J-C01…J-C16

| Obligation | Contrôle de non-dérive |
| --- | --- |
| **J-C01** | Capacité D4 versionnement déjà développée selon handoff ; qualité de la présentation de synthèse en UI non prouvée |
| **J-C02** | Hiérarchie D4 disponible dans code rapporté ; rendu Figma parent/feuille/descendants non conforme ou non démontré |
| **J-C03** | subjectId véhiculé selon tests ; le panneau doit afficher acquis/points au bon sujet selon Figma |
| **J-C04** | Réactivation D3/D4 non à réinventer ; résultat pertinent non vérifié en UAT |
| **J-C05** | Résolution factuelle côté D4/D6 à préserver ; présentation des statuts attendue |
| **J-C06** | Sources/contradictions du service à restituer sans texte brut orphelin, ni fausse fraîcheur |
| **J-C07** | Portée projet/inter-préparations testée côté PG, mais phrase Git sous CampusFlow requiert inspection de provenance réelle |
| **J-C08** | Recherche fonctionnelle ciblée PASS rapporté ; restitution de résultats Figma non comparée |
| **J-C09** | D6 lecture, historique et restrictions non à reconstruire ; vue décision Figma à refaire |
| **J-C10** | Explication D6 à éditorialiser dans la visionneuse selon Figma, sans autorité ni motif inventé |
| **J-C11** | Recherche D6 testée en DEV mais état visuel de résultat Figma non comparé |
| **J-C12** | **BLOCKER** : UX exploration 835:71 non conforme, dix autres frames sans comparaison runtime ; correction V4 réelle requise |
| **J-C13** | Lien message exact testé ciblé ; affordance Figma et retour en UI à vérifier |
| **J-C14** | Document/version testé ciblé ; affordance, présentation et retour Figma à vérifier |
| **J-C15** | Garanties de sécurité/DB conservées ; vérifier données de CampusFlow, ne pas masquer anomalie |
| **J-C16** | Matrice tests DEV et smoke RECETTE ne sont pas preuve visuelle ; screenshot et comparaison 11/11 indispensables, E05 non-régression à conserver |

Les six références majeures sont à lire **ensemble** : vision R1, R2 D3/D4/D6, R3, architecture R4, contrat UX v1.0 et technique Journal v0.3 §16. Aucune ligne J-C01…16 ne peut être déclarée achevée uniquement sur test de compilation ou sur capture d'état vide ; préserver les preuves techniques déjà acquises sans surpromettre la conformité UX.

### 17.4. Trajectoire et gates de livraison

- **Macro-lot unique** : correctif UX V4 + intégration UI réelle + tests BROWSER + captures et comparaison Figma 11/11 + non-régression E05. **Pas de nouvelle UX alternative, deuxième moteur, nouvel onglet ni schéma DB par défaut.**
- **Ordre** : Git local truth check ; extraction Figma native 11 frames ; contrat visuel structuré ; audit du composant ProjectJournal et de la page Projet ; état vide/nominaux/split/agrandi ; correction dans la branche produit locale ; build/tests/captures DEV ; comparaison géométrique et visuelle ; Review Pack Full + handoff L3. Aucun nouveau code si gate Figma impossible.
- **RECETTE existante** : URL/DB/service de l'Ensemble 05/06 inchangés ; **pas de cutover sans gate Morris explicite** pour ce nouveau correctif. Conserver build/backup/rollback existants et ne pas rejouer migration 014. Une fois correctif techniquement démontré, préparer la mise à jour de la même RECETTE, sans instance parallèle ni nouveau service.
- **Morris** : accepte/refuse l'UX finale et la campagne utilisateur ; ChatGPT revoit code, source, captures et met à jour la matrice ; Cursor exécute. Pas de push projet/PR/merge/ADOPTED implicites.
- **Aucune reprise du test conversation automatisé interrompu** : hors de ce contrat correctif.

### 17.5. Verdict de revue et action suivante

**NOT READY — JOURNAL UX DOES NOT MATCH VALIDATED FIGMA.** La cause immédiate est la divergence du layout et des libellés sur la capture de la RECETTE. Le périmètre exact des autres écarts visuels sera établi par 11 comparaisons Figma/runtime ; anomalie de texte Git à investiguer sans conclure prématurément à une fuite. **Prochaine action : contrat Cursor Critical de correction visuelle et fonctionnelle V4 à l'identique**, puis vérification du candidat DEV et GO Morris distinct pour mettre à jour RECETTE.

## 18. Septième revue — douze captures DEV livrées, comparaison Figma/native et handoff corrigé

### 18.1. Matrice visuelle effective — 11 frames

| Frame | État | Qualification de revue | Motif / sortie |
| --- | --- | --- | --- |
| [835:71](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-71) | Exploration Sujets | **PARTIAL** | Titre, présentation et état arbre rapprochés ; hiérarchie/densité/repères et interaction restent à comparer sur objet réel |
| [842:26](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-26) | Autonome 40/60 | **PARTIAL** | Split et contenu présents, mais référence/sections non attendues ou non chargées au moment de capture ; attendre contenu complet |
| [842:131](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=842-131) | Parent 40/60 | **FAIL** | PNG 03 identique au 02 à 21 pixels près : même enfant et badge « Sujet autonome », pas fiche parent/3 enfants |
| [835:159](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-159) | Autonome agrandi | **FAIL** | Pas de colonne de repères Figma ; blocs pleine largeur, composition attendue article + aside absente |
| [835:239](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=835-239) | Parent agrandi | **FAIL** | PNG 05 affiche encore « Sujet autonome », sans sous-sujets parent ni aside de repères |
| [859:42](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-42) | Recherche Sujets | **PARTIAL / LAYOUT GAP** | Mot-clé trouvé dans acquis, mais arbre filtré persiste au lieu des cartes de résultats avec origine/raisons attendues |
| [859:146](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=859-146) | Points ouverts transversaux | **FAIL** | Bouton actif seulement ; même sujet affiché, pas liste transverse de questions avec provenance et fiche question |
| [860:58](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-58) | Décisions nominales | **PARTIAL** | Onglet, cartes et statuts proches ; la donnée D6 diffère légitimement de l'exemple, hiérarchie et repères incomplets |
| [860:136](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-136) | Décision 40/60 | **PARTIAL / STRUCTURAL GAP** | Choix/motifs/restrictions visibles ; autorité, portée, historique et séparation du récit attendus par Figma non reproduits |
| [860:251](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-251) | Recherche Décisions | **PARTIAL** | Filtre et décision trouvée ; présentation de correspondance et navigation/contextes Figma incomplets |
| [860:360](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=860-360) | Décision agrandie | **FAIL** | Grande colonne unique au lieu de fiche principale + aside de repères (autorité/portée/évolutions), contexte sources absent |

**État supplémentaire :** `00-runtime-empty-exploration.png` — **ACCEPTABLE EN DIRECTION**, état dérivé non spécifié par frame Figma : titre Journal, explication honnête, pas de viewer inerte. L'acceptation esthétique finale demeure Morris.

### 18.2. Cause du faux « 11/11 ALIGNED »

Le test `journal-v4-figma-captures.spec.ts` contrôle essentiellement la **présence** des éléments et effectue douze screenshots ; il ne compare pas les pixels/geometries des PNG avec les frames natives ni ne garantit pour les captures 03/05 un `Sujet parent` réellement sélectionné. Une seule spec Playwright PASS sur 12 images **n'est pas une preuve de 11 conformités visuelles**. Vérification par lecture du code complet dans le nouveau handoff `445014db` : aucun oracle fort parent, pas de mesure de conformité. **La conclusion ALIGNED du tableau Cursor est réfutée sur plusieurs états par confrontation visuelle indépendante**.

### 18.3. Correctifs et preuves de sortie, sans nouveau chantier

1. **Vues parent/autonome discriminées** : assertions parent id, badge, titre, childCount, hiérarchie, cartographie sous-sujets, puis PNG ; sélection du parent réellement persistée au moment de la capture.
2. **Agrandi conforme** : article + aside Figma, résumé/sous-sujets/acquis/questions/sources et repères D6 spécifiques ; ne pas présenter une simple liste de cartes pleine largeur.
3. **Recherche et Points ouverts** : liste de résultats contextualisés + liste de questions traversant les sujets, fiche point et provenance ; contrôle fonctionnel sans changer autorité.
4. **Décisions** : vue détaillée autorité/historique, statut officiel opposable (éviter « non applicable = remplacée » sans distinction), contexte, source et lecteur agrandi en deux colonnes.
5. **Tests et pack** : vérifier les onze vues sémantiquement **avant capture**, reproduire la géométrie native, comparer PNG réellement côte à côte et intégrer le verdict de chaque frame sans PASS générique. Préserver tsc/PG/sécurité/E05 et déclarer explicitement les suites full non exécutées.
6. **Gates** : candidat `0eb3157b` non prêt pour cutover. Conserver RECETTE existante servie `d5bf7eb7` et sa sauvegarde ; nouveau build/GO Morris distinct après preuves révisées. Aucune reprise de la campagne automatisée.

### 18.4. Verdict

**FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED / NOT READY FOR MORRIS UX RECETTE.** Cette revue couvre la fidélité visuelle à partir de douze captures transmises, **pas** une réception du code d'exécution en RECETTE. Le nouveau handoff FULL permet d'inspecter le code critique ; il ne transforme pas des captures matériellement différentes en équivalence Figma. Résoudre les défauts du même delivery avant soumission au gate Morris.

## 12. Historique documentaire

| Date/version | Opération et source | Qualification |
| --- | --- | --- |
| **19/11/2026 — v0.1** | Création de la matrice vivante Ensemble 06 Journal, à partir du modèle Ensemble 05 v0.10, des contrats validés R1–R4/Journal v1.0, du contrat technique v0.3, des 11 Figma et du premier handoff Git 03eda7e8 | **DOCUMENTED — REVUE D1** ; 16/16 critères tracés ; aucune preuve de livraison complète, aucun effet produit ni adoption |
| **19/11/2026 — v0.2** | Deuxième handoff 7a065cec, code/diffs et 5 captures comparés aux contrats v1.0/v0.3 ; §13 actualisé 16/16 J-C, E06-01..06 et réservation de la revue visuelle à Morris | **DOCUMENTED / D1 CANDIDATE** ; aucune mutation produit, aucun GO PR/merge/RECETTE/ADOPTED |
| **19/11/2026 — v0.3** | Handoff 9d56e6a5 relu, nouvelle matrice actuelle §14 J-C01..16, réserve faux positif acquis, retours et versions, provenance source, gate E2E et suites ; historique conservé | **DOCUMENTED D1 CANDIDATE** ; sans effet produit/DB/RECETTE, pas de Gate C/ADOPTED |
| **19/11/2026 — v0.4** | Revue du handoff 45bd3d37, matrice §15 complète J-C01…16/C1…14/LIVE-Q01…08 ; E01 provider réel distinct des 19 non exécutés, latence/coût et reprise qualifiés | **DOCUMENTED D1 CANDIDATE** ; aucune relance LIVE, aucun effet code/DB/RECETTE ni adoption |
| **19/11/2026 — v0.5** | Handoff 31c495af relu, §16 couvre 16 J-C et 8 réserves DEP-01..08, distinction DEV/smoke/UAT et démarrage de la campagne Morris | **DOCUMENTED D1 CANDIDATE**, aucun effet code/DB/RECETTE, aucun push produit, pas de Gate C |
| **19/11/2026 — v0.6** | Audit de la capture Morris RECETTE contre onze frames natives Figma ; §17 nouveau registre UX-01..08 et matrice J-C01..16 de non-dérive ; aucune modification des contrats validés | **DOCUMENTED — D1 CANDIDATE / UX NO-GO**, sans code, sans déploiement, sans push projet/PR/merge/Gate C |
| **19/11/2026 — v0.7** | Douze captures runtime utilisateur vs onze frames natives Figma ; nouveau handoff FULL 445014db relu ; §18 statut frame-par-frame, défaut de test parent 21 pixels, aside agrandis, parcours recherche/points et exactitude D6 ; snapshot append-only | **DOCUMENTED D1 — FIGMA PARTIAL / NO CUTOVER**, pas de modification produit, RECETTE, PR ou adoption |

