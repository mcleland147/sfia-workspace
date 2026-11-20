# Contrat d'exécution Cursor — SFIA v2.6 — SFIA Studio Next
## Ensemble 07 · Projet, Trajectoire et conduite conversationnelle Nora

**DOCUMENT INTÉGRAL À FOURNIR À CURSOR — un seul cycle, un seul prompt instancié depuis le template SFIA v2.6 officiel.** Ni template parallèle ni nouveau standard SFIA. L'objectif est un résultat réellement utilisable, fonctionnel et extrêmement fidèle aux 13 maquettes Figma validées, avec tests et preuves visuelles. Ne pas arrêter la réalisation à un prototype statique.

## 1. Objectif, cycle et profil

**Objectif utilisateur :** lorsque le Pilote crée un projet depuis le SAS, le projet confirmé demeure durable et accessible. Nora engage indépendamment une qualification initiale de trajectoire fondée sur les types de cycles et les CKI disponibles. Pendant cette analyse, Travail est consultable mais le compositeur est visiblement et réellement indisponible ; Trajectoire affiche le même état de progression. Nora produit spontanément dans le fil SAS→Projet une première proposition séquentielle de cycles ou une clarification ciblée, une seule fois, avec reprise sûre après fermeture/perte réseau. Travail et Trajectoire s'actualisent sans rechargement manuel. Les vues Projet et Trajectoire affichent les états, activités, cycles clos/actifs/envisagés, bilans historiques, CKI et méthode véritables. La suite des cycles est recommandée proactivement par Nora mais le Pilote garde tous les GO métier, validés par D6 et appliqués par D5. Les treize références Figma sont reproduites avec le plus haut niveau de fidélité pratique possible.

**Famille SFIA :** cycle projet. **Type : Delivery projet** selon le routing guide §6.6. **Typologie : EVOL** intégrée transverse. **Profil : Standard** avec QA renforcée Figma, données, continuité et autorité (ne pas se déclarer Critical sans nouveau gate Morris). **Macro-lot : R5 / ML4D / Ensemble 07**, résultat cohérent unique ; ni 13 micro-cycles ni 13 PR. Les domaines D2/D3/D4/D5/D6 sont concernés selon les frontières du dossier validé. Gate C toujours OPEN ; ML5/R6 non atteints.

**Cycle Knowledge Contract externe SFIA :** vérifier la route du guide, sans importer le CKC expérimental ou l'ancien runtime comme doctrine produit Next. Le CKI principal du produit cible reste propriétaire D5 et n'existe qu'avec un cycle réellement ouvert.

**Niveau de preuve attendu :** IMPLEMENTED + COVERAGE VERIFIED sur comportements testables ; BEHAVIOR PROVEN uniquement pour parcours réellement observés en navigateur ; LIVE/REAL seulement si environnement, fournisseur et effets vérifiés dans une autorisation explicite. Aucune déclaration ADOPTED.

## 2. Local Git Truth Check — AVANT TOUT CODE

- Dépôt attendu : mcleland147/sfia-workspace.
- Base source de vérité produit et règles approuvées pour ce cycle : commit exact **e36fd8b0531c4f649830990a18f9cfdaecb3c03f**.
- Branche documentaire d'origine : **docs/next-ensemble07-r2-cursor-contract-20261120**, issue de la branche documentaire Ensemble 07, **candidate non mergée**. Le fichier contenant ce prompt peut être un commit descendant : il ne change pas le commit de base de code indiqué.
- main vérifié au cadrage : **6e93a33d64dfeea2eab88fb7896d733b34053f97**. Vérifier origin/main réellement présent, sans supposer qu'il n'a pas avancé.
- Branche d'exécution locale à créer ou vérifier : **sfia/next-ensemble07-projet-trajectoire-delivery** issue **exactement** de e36fd8b0531c4f649830990a18f9cfdaecb3c03f, jamais créée depuis un main qui ne contient pas encore les addenda normatifs.
- Exécuter et rapporter : git rev-parse --show-toplevel ; git branch --show-current ; git status --short ; git rev-parse HEAD ; git rev-parse origin/main ; git merge-base ; git diff --name-status ; git diff --cached --name-status ; git log -5 --oneline.
- Aucune modification/staged/untracked inattendue. Le worktree local est **NON OBSERVÉ** par ChatGPT : Cursor l'inspecte sans inventer sa propreté. Si branche d'exécution existe déjà à un autre HEAD : STOP.
- Vérifier la présence à la base du contrat fonctionnel/UX, du dossier d'architecture et des trois addenda normatifs RG-CRE-031..033, RG-CONV-016..019, RG-TRJ-041..044. Enregistrer les SHA/blobs et les différences par rapport à main.
- Si origin/main a avancé, si la branche/base diverge, si une source manque ou si état local inattendu : **STOP — REPO PRE-CHECK INCOMPLETE / MORRIS DECISION REQUIRED**. Aucun rebase/merge forcé, ni inventaire fictif du runtime.

## 3. Sources obligatoires à lire, Git et responsabilités

**Méthode SFIA v2.6 sur main :**
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md : §§2.1, 4.3.0b, 6.6, 7–10.
- prompts/templates/sfia-cycle-execution-template.md : §§2.0.H, 3, 5, 6.4, **6.6 Figma visual contract**, 6.14–6.16, **7 review pack/handoff**, 8 STOP, 9.1 rapport.
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md.
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md.
- method/sfia-fast-track/checklists/sfia-validation-checklist.md.
- docs/architecture/sfia-delivery-pipeline.md ; docs/architecture/2026-06-27-sfia-decision-engine.md.
- scripts/sfia/README.md et scripts/sfia/publish-review-handoff.sh si le publisher canonique existe.

**Studio Next sur le commit candidat approuvé :**
- projects/sfia-studio-next/governance/SEF.md §10.
- projects/sfia-studio-next/governance/roadmap.md, état vivant et Gate C.
- projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md, 2026-11-07-pilotage-decisions-formal-exit.md, 2026-11-15-r5-ml4c-acceptation-cloture-avec-reserves.md ; décisions plus récentes applicables.
- projects/sfia-studio-next/governance/product-naming-conventions.md.
- projects/sfia-studio-next/governance/environnements-recette-et-promotions.md (**ENV-01 REQUIRED**, statut VALIDATED main, blob précheck 14b61f0d1265cf85fcca09b028dd09bd8c71597f).
- projects/sfia-studio-next/governance/product-versioning.md (**REQUIRED**, VALIDATED main, blob précheck 8bc93e0fafac0f981c446e978a37f5f93d183875).
- projects/sfia-studio-next/cadrage/vision-cible/README.md + **ses trois PNG réellement lus** lorsque disponibles ; ne pas prétendre avoir inspecté une image absente. Vision fondatrice ≠ architecture imposée.
- projects/sfia-studio-next/cadrage/vision-produit.md et conduite des intentions Nora.
- projects/sfia-studio-next/conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md (**§9, RG-CRE-031..033, PF-CRE-31..37**).
- projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md (**§16, RG-CONV-016..019, PF-CONV-E07-01..10**).
- projects/sfia-studio-next/conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md (**§10, RG-TRJ-041..044, PF-TRJ-31..40**, et règles 001..040).
- projects/sfia-studio-next/conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md (D4), decisions-et-gouvernance-du-pilote.md (D6).
- projects/sfia-studio-next/architecture-technique/cadrage-r4.md et contrat-observabilite-transverse.md ; ADR R4 et DATA-01 applicables.
- **CONTRAT UX EXÉCUTOIRE** : projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md, **13 maquettes VALIDÉES MORRIS**, §4 bis et scénarios.
- **DOSSIER ARCHITECTURE APPROUVÉ** : projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-dossier-architecture-fonctionnelle-technique-candidat.md, contenu validé Morris, **AC-01..AC-08, I-01..I-12, AS-IS/TO-BE, options et grilles E07-A/B/C/U**.
- projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md ; ux-ui/espace-projet-interaction-pilote-nora.md ; construction/convergence-ux-ui-globale/registre-central-revues.md ; contrats visuels UX applicables.
- Ancienne doctrine produit 30/32/34/35/37 sous projects/sfia-studio/sfia-v3-framing/ uniquement comme vision pertinente ; ne pas reprendre par inertie son code ou sa gouvernance de construction.

**Code Next à analyser AVANT choix technique, à ref candidate vs main :**
- web/src/domains/preparation/create-project.ts ; web/src/app/api/preparations/[preparationId]/create-project/route.ts ; web/src/app/preparations/[preparationId]/page.tsx.
- web/src/domains/conversation/intent-conduction.ts, mission-continuity.ts, service.ts ; web/src/components/figma/NoraConversation.tsx ; routes réelles de conversations/messages à découvrir dans web/src/app/api/.
- web/src/domains/pilotage/service.ts, types.ts, cki-resolve.ts ; web/src/app/api/projects/[projectId]/pilotage/route.ts ; web/src/components/PilotagePanel.tsx.
- web/src/components/figma/ProjectOverview.tsx, ProjectChrome.tsx ; web/src/app/projects/[projectId]/page.tsx ; shell/nav ; D4 Journal/Docs et D6 en lecture.
- web/src/db/schema.ts ; web/src/db/migrations/ (base inspectée jusqu'à 014_journal_d4_revisions.sql).
- Tests existants : web/tests/integration/create-project.pg.test.ts, ml3-pilotage.pg.test.ts, migrations-fresh.pg.test.ts ; web/tests/e2e/g4-chat-first-sas.spec.ts, ml3-pilotage.spec.ts, project-surface-nav-intent.spec.ts, ml4c-long-thread-composer.spec.ts et tests Ensemble 06.

**Git truth > décisions > sources propriétaires > conception validée > hypothèses.** Pour chaque source, noter chemins, ref/HEAD, sections lues et statut. Contradiction code/doc = KNOWN GAP, pas arbitrage implicite.

## 4. Figma — CONTRAT DE FIDÉLITÉ VISUELLE MAXIMALE (BLOQUANT)

**Fichier Figma validé par Morris :** https://www.figma.com/design/itgvCulInEnFY6DvgIegvP ; fileKey itgvCulInEnFY6DvgIegvP. L'objectif n'est **pas** de produire une UI « inspirée » mais de reproduire **les écrans réellement validés** en conservant structure, éléments, texte d'interface, icônes, couleurs, typographies, espacements, alignements, hiérarchie, CTA et états. Les contraintes métier peuvent remplacer uniquement les **données illustratives** par des valeurs réelles, sans changer la direction artistique.

**Les 13 références à inspecter obligatoirement avec MCP Figma :**
1. 09.01 Projet — Vue d'ensemble : **983:47**.
2. 09.02 Trajectoire — Vue principale : **983:90**.
3. 09.03 Bilan historique de cycle : **983:133**.
4. 09.04 Étape future envisagée : **983:176**.
5. 09.05 CKI et méthode : **983:219**.
6. 09.06 Projet sans cycle : **999:261**.
7. 09.07 Trajectoire initialisation/clarification : **999:285**.
8. 09.08 Entre deux cycles : **999:335**.
9. 09.09 Premier cycle actif : **1005:428**.
10. SAS 06 — Pop-up création/préparation : **1022:112**.
11. Travail 05.17 — Qualification initiale et compositeur verrouillé : **1036:114**.
12. Trajectoire 09.10 — Analyse en cours : **1034:480**.
13. Trajectoire 09.11 — Première proposition séquentielle : **1034:505**.

**GATE AVANT CODE UI — template v2.6 §6.6.D :**
- Lire chaque frame directement **via MCP Figma**, enregistrer IDs lus, dimensions et source d'observation. Si Figma inaccessible ou nœud manquant : **FIGMA CONTRACT INCOMPLETE — MORRIS DECISION REQUIRED**. Ne pas improviser de reproduction depuis des résumés.
- Produire un tableau **Contrat visuel Figma extrait par frame** avec : structure, largeur/hauteur/viewport de référence (desktop nominal 1680×970), repères du rail projet 246 px et topbar 70 px lorsqu'applicables, bounding rectangles clés, grilles/colonnes, paddings/gaps, alignements, fonts Inter et poids/taille/interligne, color tokens, ombres/traits/rayons, icônes exactes, libellés UI exacts, CTA/badges/états, composants et comportements. Valeur manquante = « À EXTRAIRE », jamais valeur inventée.
- Faire **l'inventaire de tous les éléments visibles de chacune des 13 frames** : élément attendu, texte exact ou statut de donnée illustrative, propriétaire React, règle métier d'affichage, navigation et preuve.
- **Ne pas ajouter de libellés décoratifs ou techniques**, de badges inutiles, d'icônes approximatives, de cartes supplémentaires, d'états fictifs, de textes d'aide superflus ni de nouvelles pages. Ne pas réépaissir la pop-up SAS allégée. Ne pas utiliser d'emoji comme substitution d'icône.
- Utiliser SVG/icônes/tokens exacts disponibles, pas un pictogramme Lucide seulement « ressemblant » quand un asset Figma précis est accessible.
- Si une identité, date, compteur ou nom de projet dans Figma est fictif : **seule la donnée métier est illustrative**, pas sa typographie, sa position ni la hiérarchie. Aucune donnée d'exemple « Projet Horizon » hardcodée.
- Réutiliser le design system/shell existant, sans refondre les neuf maquettes ou modifier Figma.
- Exiger **très haute fidélité**, sans promettre un score de 100 % impossible à mesurer. Sur les repères stables couverts par F1/F2, contrôler la tolérance validée d'environ **≤2 px CSS** ; aucun seuil universel de diff d'image ou d'anti-aliasing n'est inventé.
- Sans contrat visuel extrait avant modification : STOP et aucun « READY ».

**GATE APRÈS CODE UI — comparaison runtime vraie :**
- Pour **chacune des 13 références**, produire l'export/capture Figma et la **capture navigateur runtime** au **même état et viewport comparable** (référence 1680×970, puis responsive/zoom pertinent), avec SHA code, build/lane, navigateur, horodatage, jeu de données ou fixture identifié.
- Dresser une grille **Figma ↔ runtime** par frame : structure, éléments présents, textes de chrome UI, icônes, rectangles/géométrie, spacings, typo, couleur, CTA, états, interactions, responsive/accessibilité, capture et écart exact. Statuts Conforme / Partiellement conforme / Non conforme / Capture requise.
- Comparer **vraiment** les captures côte à côte, au besoin superposition/diff raisonné, sans confondre variations de contenu avec défaut graphique. Réaliser **itérations correction → recapture → revue** jusqu'à suppression des écarts visuels substantiels connus.
- Une divergence manifeste de structure, hiérarchie, texte UI, icône, espacement majeur ou contrôle absent est **bloquante** pour READY. Une impossibilité technique doit être démontrée, discutée avec Morris et signalée comme réserve ; jamais masquée.
- Contrôler responsive (au moins viewport réduit), keyboard focus, tooltip clavier, contraste, scroll, longs contenus, zéro élément, loading et erreur.
- **Sans captures Figma et navigateur comparées**, verdict maximum : **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED**. Avec écarts majeurs : **FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED**. READY visuel uniquement après comparaison tangible des 13 références.
- Conserver localement les captures, tableau et chemins précis dans le Review Pack. Si le fichier handoff texte ne contient pas les images binaires, **ne pas les prétendre disponibles à distance** ; fournir leurs chemins et les pièces visuelles à transmettre pour revue Morris.

## 5. Contrats fonctionnels complets et frontières propriétaires

**Appliquer sans omission AC-01..AC-08 et I-01..I-12 du dossier.** Les clauses ci-dessous complètent le minimum exécutable et les scénarios négatifs :

**A. Création D2, autonomie et reprise**
- Conserver createProjectCommand et ses protections : clic explicite, confirmation d'existence réelle, idempotence, ACK perdu, même projet/fil, séparation des droits Pilote.
- Après création **confirmée**, lancer/retrouver une seule qualification initiale durable et indépendante de la requête HTTP et de l'onglet. Fermeture de Studio, réseau perdu, crash après commit et avant qualification, double clic et deux onglets ne produisent ni deuxième projet ni deuxième qualification concurrente irréconciliable.
- Pop-up 3 étapes, étape 1 uniquement après commit D2, étapes 2/3 et 3/3 non simulées ; **Accéder au projet** disponible après confirmation, même si analyse en cours. Projet visible au portefeuille ; pas de dialogue bloqué hors Travail.
- Échec d'analyse ne retire pas le projet. Inconnu ≠ échec ≠ succès ; reprise bornée, non bloquante à terme.

**B. Nora D3, proposition et premier message unique**
- Nora confronte intention SAS et D4 acquis/contraintes/inconnues **sourcés** aux types de cycles/CKI effectivement disponibles, sans algorithme simpliste de mots-clés ni premier Cadrage obligatoire.
- Trajectoire initiale **séquentielle** : Cycle 1 recommandé → Cycle 2 et éventuellement 3 envisagés, seulement si pertinents, sans quota, sans micro-lots, sans trois choix concurrents. En manque d'informations, Nora l'explique et pose une question ciblée.
- Première intervention Nora **proactive sans message du Pilote** dans le fil continu SAS→Projet ; unique et durable. Une proposition calculée mais non publiée à la fois dans D5 **et** dans le fil n'est **pas** un état terminal UI. Corréler version d'analyse, proposition D5, message, reprise après réponse perdue.
- Erreur fournisseur/technique = état Studio, pas faux message Nora. Aucun CKI principal activé ni HumanDecision créée pendant la qualification.

**C. Travail 05.17 / Trajectoire 09.10–09.11 / 09.07**
- Pendant analyse, compositeur visuellement présent, **grisé, verrouillé pour saisie/focus d'édition/envoi/raccourcis**, motif compréhensible au **survol et focus clavier d'un repère informatif distinct**. L'API serveur refuse aussi un nouveau tour sur le fil. **Aucune queue de messages concurrente**.
- Pendant verrou, lecture des autres onglets permise, sans relancer le calcul par navigation. La modal ne se rouvre pas systématiquement à chaque retour.
- Un état durable partagé pilote SAS/Travail/Trajectoire, sans trois moteurs. Un changement réel d'opération met à jour **sur place** Trajectoire 09.10→09.11 ou 09.07/incident sans rafraîchissement manuel, et Travail insère le message puis déverrouille le compositeur.
- Déverrouillage seulement après **publication cohérente vérifiée** (proposition/clarification + message) ou incident technique **confirmé**. UNKNOWN en réconciliation bornée, jamais verrou perpétuel. Pas de pourcentage IA inventé ; étapes 1/3, 2/3, 3/3 indiquent des faits observés.
- Trajectoire PROPOSED et RETAINED distinctes ; aucune carte « ACTIVE » sans cycle réel. Sans trajectoire qualifiée, Nora poursuit l'investigation et non une progression structurée fictive.

**D. Pilotage continu D5/D6, CKI et méthode**
- Seul Pilote autorise retenir, démarrer, clôturer, transiter, choisir méthode durable ou lever restriction par GO suffisamment clair dans le chat. Nora suggère, challenge proportionnellement, prépare et **recommande** la clôturabilité et la suite ; ne décide ni n'applique seule. Ambiguïté/restriction = clarification ou refus vérifié.
- Réutiliser services et commandes D5/D6, révisions, transactions, déduplication et index unique ACTIVE. Le panneau PilotagePanel actuel **n'est pas l'UX cible** mais **ne pas supprimer les capacités et gardes** avant que le déclenchement conversationnel D3→D6→D5 soit implémenté, testé et prouvé.
- Un cycle ouvert seulement après GO, CKI principal associé au cycle effectif ; distinguer catalogue consulté, ASSOCIATED, RESOLVED, DELIVERED **prouvé**. Méthode applicable distincte du CKI.
- Nora apprécie la maturité sur événements significatifs, pas à chaque tour avec score artificiel. Clôture peut porter bilan et réserves reportables, mais aucun effet sans GO, aucune méthode imposée.

**E. Projet 09.01/09.06 et trajectoire 09.02..09.09**
- Projet : identité, description si source durable qualifiée, carte cycle ou absence, **trois cartes** Sujets ouverts / Décisions applicables / Documents en cours avec compteurs exacts, jusqu'à deux exemples représentatifs et « +N » réel ; liens vers Journal/Docs/Travail. Ne pas confondre Sujet ACTIVE D4 et Point OPEN ; « Documents en cours » exige un critère métier vrai, pas total de toutes versions.
- Trajectoire : frise passé CLOSED / cycle ACTIVE / futur PROPOSED ou RETAINED, historique **à date de clôture** avec travaux, résultats, réserves, documents/révisions vérifiables ; CKI/méthode éditoriale, dernière appréciation qualitative de Nora **si elle existe**. 09.04 est étape envisagée **non ouverte** ; 09.08 entre cycles sans état actif inventé ; 09.09 premier cycle sans passé fictif.
- D4/Docs et D6 demeurent propriétaires ; si ancien cycle n'est pas reconstituable à partir des sources, marquer les lacunes, jamais fabriquer l'état historique. Évaluer projection temporelle existante puis capture bornée au moment de clôture si nécessaire, sans mémoire/autorité concurrente.
- Isolation Pilote/projet et contrôles d'accès à chaque API/projection, même en cas de reprise ou de navigation rapide.

## 6. Choix techniques, allowlist, contraintes d'architecture

**Principe :** Cursor choisit la solution technique **la plus simple conforme au code R4 actuel** et démontre pourquoi elle respecte les invariants. Réutiliser d'abord les domaines preparation/conversation/pilotage/knowledge, les routes/API et états existants ; ne pas construire un nouveau moteur général de workflow, de conversation, d'autorité, de mémoire ou un bus supplémentaire par inertie.

**Écritures locales autorisées UNIQUEMENT pour la réalisation de cette capacité :**
- projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx et app/api/preparations/[preparationId]/create-project/route.ts ; web/src/domains/preparation/ fonctions liées.
- web/src/domains/conversation/ et web/src/components/figma/NoraConversation.tsx ; routes réelles d'API des tours à identifier par le code (aucun chemin inventé).
- web/src/domains/pilotage/, web/src/app/api/projects/[projectId]/pilotage/, web/src/components/PilotagePanel.tsx pour réutilisation/transition de façade sans suppression d'autorité.
- web/src/app/projects/[projectId]/page.tsx, web/src/components/figma/ProjectOverview.tsx, ProjectChrome.tsx, nouveaux composants **nommés par responsabilité produit** sous web/src/components/figma/, styles nécessaires et shell uniquement si navigation impactée réellement.
- D4/D6/Docs **en lecture par défaut**. Une adaptation de projection purement en lecture dans leurs propriétaires peut être justifiée et bornée ; changement de leur autorité/données = STOP Morris.
- web/src/db/schema.ts et **une migration additive compatible** dans web/src/db/migrations/ **uniquement si une persistance minimale est réellement indispensable**, après démonstration de l'insuffisance du modèle existant, sans migration destructive ni réécriture historique. **DEV seulement** ; tests migration fresh/upgrade, données historiques et compatibilité ; STOP avant pivot de modèle, backfill fictif, migration RECETTE/STABLE ou changement cassant.
- tests de la capacité et régressions dans web/tests/{unit,integration,e2e}/ ; documentation d'architecture as-built dans construction/convergence-ux-ui-globale/ et architecture-technique/ seulement si code réellement modifié ; construction/delivery-history.md append-only, statut NO RELEASE.
- Captures et preuves visuelles en espace local de revue/évidence réellement accessible, sans réutiliser les données d'un autre projet ou ajouter des fixtures de production.

**Pour tout nouveau fichier :** déclarer propriétaire, responsabilité, alternative de réutilisation et raison ; un concept = un nom durable, pas F2/P6/ML4D/legacy/temp dans le produit.

**Interdits sans gate supplémentaire :** projets historiques projects/sfia-studio/, method/, prompts/, .sfia/, gouvernance SEF/Roadmap/décisions, documents R2 validés (ceux-ci sont **lecture seule pour Cursor**), code global D9, secrets, CI hors mandat, nouvel outil d'analytics/tracking, refonte générale des domaines, schémas destructifs, changement de DB, effet Git externe, Notion/CMP, suppression de branche, version/release. Si périmètre additionnel indispensable : STOP et note d'arbitrage, pas d'élargissement autonome.

## 7. ENV-01 / Produit / Fake-Real

**ENV-01 REQUIRED :** lire la politique VALIDATED main (blob à re-vérifier 14b61f0d1265cf85fcca09b028dd09bd8c71597f). **Écritures/exécution tests : DEV local seulement**, sous vérification worktree/code/build, DB PostgreSQL + rôle, schema, sessions/cookies, volumes, secrets et ports. **RECETTE/STABLE protégées**, aucune migration/déploiement/écriture dans ces lanes. Rappeler qu'un port distinct sur le même hôte n'isole pas automatiquement les cookies ; utiliser isolation réelle de profil/host/session et vérifier. Si isolation non démontrée : **STOP — NEXT ENVIRONMENT GATE FAILED**. Candidate RECETTE immuable pour ce cycle : **NOT AVAILABLE** tant que gate séparé non accordé. Capture DEV = preuve BROWSER, pas UAT RECETTE.

**Versioning Next REQUIRED :** politique VALIDATED main (blob à re-vérifier 8bc93e0fafac0f981c446e978a37f5f93d183875). STABLE **NOT AVAILABLE**. Le package 0.0.0-dev reste une version technique. Classe de ce cycle **NO RELEASE** (construction DEV sans promotion) ; une version fonctionnelle MINOR est à qualifier pour une future livraison, non attribuée par ce prompt ; MAJOR = gate Morris. Tenir une entrée de delivery-history avec date, source SHA, statut, tests, réserves et aucun claim STABLE. Ne pas changer product-version pour simuler release.

**Fake / Real Qualification : APPLICABLE OUI.** Frontières : modèle Nora/fournisseur, contexte D4/CKI, PostgreSQL, browser, D6→D5, éventuels outils externes existants. Autorisé : fixtures/test adapters **uniquement en tests**, état réellement servi dans le navigateur DEV et simulation contrôlée des échecs/retries ; elles restent marquées DETERMINISTIC/FAKE. Preuve LIVE fournisseur ou effet externe = **uniquement** si autorisation spécifique, appel réel, logs et qualité observés. Sans cela : **LIVE NOT PROVEN**. N'assimiler jamais DETERMINISTIC PROVEN à READY FOR REAL, ni RESOLVED CKI à DELIVERED. Aucune promotion L5.

## 8. Cadencement — un seul macro-lot intégré, validations intermédiaires

**Étape 0 :** Git truth, sources, politiques ENV-01/versioning, code réel et tests. Identifier collisions/risques ; si source manquante STOP.

**Étape 1 :** **Contrat visuel Figma des 13 frames AVANT code UI**, exports/captures, matrice de tous les composants/textes/rectangles et interaction. STOP si incomplet. Conserver ce contrat dans le Review Pack, avec preuve de la date de lecture Figma.

**Étape 2 :** Cartographier les propriétaires et le flux AS-IS/TO-BE avec références de fonctions ; choisir la solution minimale (continuation D2/D3, proposition D5 structurée et versionnée, projection, reprise, historicité), alternatives rejetées et blast radius ; STOP avant pivot ou migration cassante. Ne pas ouvrir un POC/fixture autonome.

**Étape 3 :** Réaliser le **vertical slice réel** SAS→projet créé→qualification durable→état partagé Travail/Trajectoire→Nora message et proposition/version D5→terminal→compositeur disponible. Inclure immédiatement les tests d'idempotence/erreurs/reprise et ne pas bâtir les surfaces comme mocks déconnectés.

**Étape 4 :** Projet et Trajectoire complets : cartes/sémantiques propriétaires, passé/actif/futur, bilan historique honnête, CKI/méthode, initiative Nora, GO humain D6→commandes D5. Préserver toute commande gouvernée existante.

**Étape 5 :** Transposition Figma **très haute fidélité** des 13 états et parcours avec captures runtime, comparaison pixel/structure raisonnable, correction des écarts, recapture et contrôle responsive/clavier. **Itérer autant que nécessaire**, pas seulement une passe de capture.

**Étape 6 :** Qualification transverse intégrée : tests unitaires, PG, migrations, Playwright/browser, incident et concurrence, isolation autre Pilote, non-régression Ensemble 05 Travail, Ensemble 06 Journal/Documents, création SAS, ML3 pilotage, navigation et shell. Synchroniser docs as-built et delivery-history dans le même cycle.

**Étape 7 :** Review Pack FULL mono-cycle complet, publication handoff Git L3 et vérification distante, retour à la branche projet, rapport Cursor et verdict véridique. Aucune PR/merge de projet, pas d'UAT Morris simulée.

**Parallélisme :** uniquement sous-travaux dont interfaces et fichiers sont séparés et intégrateur désigné ; toute intégration finale et tests de non-régression communs. Ne pas scinder le code, tests et doc en micro-cycles.

## 9. Tests et preuves obligatoires — critères de réception

**Scripts à vérifier avant usage dans web/package.json :** npm run build ; npm run test:unit ; npm run test:integration ; npm run test:e2e ; npm run db:migrate (uniquement DB DEV vérifiée). Le script npm run lint peut être inadapté au package actuel : ne pas inventer PASS ; utiliser la vérification effective disponible, tracer remplacement/motif. Lire les scripts réels avant exécution.

**Couverture fonctionnelle exhaustive :** PF-CRE-31..37, PF-CONV-E07-01..10, PF-TRJ-31..40 ; grille du dossier E07-A01..A10, B01..B08, C01..C06, U01..U02, plus régressions préexistantes. Chaque exigence doit avoir preuve ou réserve explicite ; ne pas confondre un test défini, exécuté et passé.

**Exigences de tests, notamment :**
- Création : double clic, ACK perdu, fermeture avant/après commit, deux onglets, crash entre commit et qualification, reprise du même projet/opération et du fil, incident IA, absence de message dupliqué.
- Publication : D5 PROPOSED enregistré mais message absent, message publié mais ACK perdu, UNKNOWN sans faux terminal, version commune, sans deux réponses Nora.
- UI : compositeur grisé, réellement non focusable pour éditer, non envoyable au clavier/API, tooltip accessible survol/focus ; déverrouillage uniquement sur terminal durable/incident confirmé ; aucune queue de messages ; un onglet Trajectoire 09.10 ouvert reçoit le résultat sans refresh ni navigation forcée.
- Trajectoire : un cycle proposé suffit, 1→2→3 réellement séquentiels si disponibles ; préférence différente du Pilote, GO ambigu, restriction, 1 ACTIVE max, clôture motivée sans GO automatique, CKI catalogue/association/résolution/délivrance distincts.
- Historique : état à date de clôture, versions Docs et D4 sourcées, évolution post-clôture ne réécrit pas le passé, lacunes historiques explicitement signalées.
- Projet : bonnes sémantiques de Sujets ouverts / Décisions applicables / Documents en cours, exactitude des compteurs et liens, vides/longues valeurs, isolation d'un autre Pilote/projet.
- UX : **13 paires captures Figma ↔ navigateur** au viewport comparable, tableau d'écarts et itérations, focus/mobile, textes exacts, aucun label hors design ou icon approximative.

**Critères pour READY :** zéro régression d'autorité/données, pas de double effet, processus initial récupérable, vérité historique/CKI, fonctionnement navigateur effectivement prouvé, **chaque frame visible Figma reproduite et comparée** sans écart visuel majeur connu, document as-built cohérent. Des tests unitaires verts ne prouvent pas tout.

## 10. STOP et contrôles négatifs obligatoires

STOP et demander Morris, sans substituer une hypothèse, si :
1. Base Git/branche/HEAD/status non conforme ; main a bougé et non réconcilié ; source R2/SEF/roadmap/décision absente.
2. Source Figma non lisible, frame introuvable, contrat visuel non établi avant code, ou capture runtime impossible pour conclure READY.
3. Besoin de nouvelle autorité, moteur D3/D5, bus/queue générale, pivot architecture/persistance, migration destructrice, changement sémantique D4/D6 ou autre chemin protégé.
4. Risque de duplication projet/trajectoire/message/cycle, verrou UNKNOWN permanent, transition non autorisée, CKI livré sans preuve, contrôle d'accès impossible.
5. Lane DEV non isolée, DB RECETTE/STABLE exposée, collision de cookies/secret identités ou appel externe REAL sans gate.
6. Déviation visuelle majeure non corrigeable dans le scope ou exigeant une modification de maquette déjà validée.
7. Tests faussement annoncés comme PASS, preuve BROWSER/REAL absente mais revendiquée, bilan historique fictif.
8. PR, merge, push projet, release, STABLE, ADOPTED ou suppression de branche sans GO Morris.
9. Review Pack incomplet, synthèse-only, contenu modifié absent, handoff distant non vérifié.

En cas de STOP : conserver les changements locaux intacts, produire l'écart précis, source/code/impact, options et décision attendue ; ne pas prétendre que le macro-lot est terminé.

## 11. Review Pack FULL et Review Handoff — obligatoires SFIA v2.6

**Review Pack : FULL obligatoire** (exécution transverse et comparaison visuelle très exigeante). **Dès début** : réinitialiser par écrasement intégral .tmp-sfia-review/chatgpt-review.md ; mono-cycle strict, dossier à créer si absent, aucun append d'un ancien rapport.

**FULL doit contenir :** date/heure, cycle Standard EVOL, Git truth et refs, sources effectivement lues, décisions/risques, architecture réellement choisie et alternatives, fichiers modifiés/créés, diff/stat/sha, **contenu complet de chaque fichier créé** et **sections entières modifiées ou diff utile complet de chaque fichier modifié**, y compris tests/migrations/as-built. Une synthèse seule ou un stub final donne **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING**. Ajouter tests/logs/versions, Fake/Real, erreurs, niveaux de preuve, anomalies, corrections et écarts.

**Figma dans FULL :** extrait design préalable, node IDs réellement lus, métriques et styles, **tableau par 13 frames**, chemin des captures Figma + captures runtime au même viewport/état, itérations de correction, éléments conformes/partiels/non conformes et raisons. Ne pas déclarer à distance des captures disponibles si seuls des chemins locaux existent. Exposer les pièces visuelles à Morris pour inspection. Dossier de preuves utile au Review Pack sans dupliquer tout le dépôt.

**Review Handoff Git : REQUIRED. Justification : rapport Cursor FULL nécessitant vérification ChatGPT distante.**
**Mode : publish-in-cycle.** Mode local-only seulement si **exception technique réelle** du §7.10.3, avec motif et verdict HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED. Valeur not-required interdite.
**Push handoff : OUI — L3 borné**, déjà autorisé pour ce cycle uniquement :
- branche unique : **sfia/review-handoff** ;
- fichier canonique unique : **sfia-review-handoff/latest-chatgpt-review.md** ;
- source : **.tmp-sfia-review/chatgpt-review.md**.
- Si publisher disponible, utiliser scripts/sfia/publish-review-handoff.sh selon README ; respecter exact scope. Sinon séquence du template SFIA v2.6 §7.10.4.
- **Ordre atomique dans le même cycle :** review pack COMPLET → copie/commit MONO-FICHIER du handoff → push **fast-forward only** sur origin/sfia/review-handoff → vérification du SHA remote → **relecture distante du contenu canonique** → retour branche projet → vérification de conservation de son diff/staged/untracked → rapport final. Ne pas s'arrêter au fichier local. Si divergence remote / force push nécessaire : STOP.
- **Interdit de committer/pousser la branche projet avec le GO handoff**, de créer PR/merge ou d'écrire un autre fichier dans sfia/review-handoff.

**Rapport final Cursor** : date/heure et tous les champs §9.1 du template : branche/head avant/après/base, fichiers lus et modifiés, validations, screenshots et revue 13 frames, différences résiduelles, niveau de preuve, Fake/Real, réserves, statut Git, no-release, risques, décision Morris requise, Review Pack FULL, handoff local/remote/sha/relecture/retour branche, verdict. Insérer obligatoirement le bloc **Instruction ChatGPT obligatoire** §9.1 :
« Avant de répondre à Morris, ChatGPT doit relire depuis Git la branche sfia/review-handoff, fichier sfia-review-handoff/latest-chatgpt-review.md, vérifier l'identité du cycle, le HEAD, les sources, le contenu modifié, les preuves et la publication distante avant de donner son propre verdict. »
Si handoff incomplet, ne déclarer aucun READY.

**Verdicts autorisés :**
- FIGMA TO RUNTIME ALIGNED — READY seulement après 13 comparaisons valides, sans écart bloquant ;
- DELIVERY READY FOR MORRIS UAT si fonctions, autorité, tests, preuve navigateur et visuels sont prêts ;
- FIGMA TO RUNTIME PARTIAL — DELIVERY REQUIRED si défauts visuels subsistent ;
- REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED si captures/comparaison manquantes ;
- READY WITH GOVERNED RESERVES seulement si réserves bornées et sans acceptation tacite ;
- STOP — MORRIS DECISION REQUIRED pour frontière structurante.
**Jamais : Gate C CLOSED, MERGED, STABLE, RELEASED, ADOPTED, LIVE PROVEN sans preuve réelle.**

## 12. Instruction finale Cursor

Exécute **en autonomie dans le mandat**, sans question redondante sur les décisions déjà tracées, mais sans franchir les gates Morris. **Code + tests + documentation + preuve UX réelle font un seul résultat.** Respecte à la lettre le fonctionnement du dossier et les maquettes Figma, sans renommer ou déplacer arbitrairement des responsabilités. Considère la fidélité visuelle comme une exigence de livraison bloquante : **pas de verdict flatteur sans les captures et les corrections nécessaires**.

**Ordre de fin :** controles métier et QA → screenshots comparatifs 13/13 → Review Pack FULL complet → handoff Git L3 publié/vérifié dans le même cycle → retour branche projet → rapport final avec Instruction ChatGPT → verdict sous réserve du gate Morris.

**Règle de vérité : conception validée ≠ implémentation ≠ couverture de tests ≠ comportement navigateur prouvé ≠ adoption.**
