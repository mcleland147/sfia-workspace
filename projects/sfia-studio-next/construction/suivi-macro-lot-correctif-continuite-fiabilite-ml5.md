# SFIA Studio Next — Suivi du macro-lot correctif intégré ML5
## Fiabilisation de la conduite et de la continuité projet

| Champ | Valeur |
| --- | --- |
| Date / version | 27 novembre 2026 — v0.3, revue des compléments E1 (108044ef / 41087f1b) |
| Nature | Suivi opérationnel documentaire D1, non normatif, non mergé ; ne remplace ni Roadmap, ni registre de couverture ML5, ni Delivery History, ni contrats |
| Mandat | GO explicite Morris du 27/11 pour créer ce document sur Git et le maintenir à chaque revue Cursor ; cinq ensembles et revues intermédiaires approuvés |
| Autorités | Morris arbitre les réserves et gates ; ChatGPT tient ce suivi et revoit ; Cursor construit et fournit les preuves |
| Programme | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / 17 MP OPEN EN RECETTE / T09 NOT SENT / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |
| Git | main `997897fd7cf914771e7d08e8030dc7123fab7d25` ; branche documentaire candidate `docs/next-openai-studio-convergence-20261126`, base avant création `f6cfd5ac01f848f6708501e1a390f37243721ab9` |
| DEV | Branche locale rapportée `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486003805f74e69a0842f2c0792a7184437`, worktree dirty rapporté ; état local NON OBSERVÉ directement par ChatGPT ; :3100 / PG :5433 rapportés |
| RECETTE protégée | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` / BUILD `rpEczSp61evIZ7d6fnIWR` / PG :5434 schéma 027, :3200 ; MaintiPlan suspendu après T08 ; WEB et Admin OFF |
| Gate courant | Sortie construction E1 recommandée avec réserves proposées de preuve et traçabilité ; gate Morris requis avant E2. NOT READY pour qualification LIVE globale ; E2 non engagé. Aucun GO commit projet, LIVE, cutover, PR, merge ou adoption |

## 1. Objectif et sources

Permettre au Pilote de conduire naturellement un projet avec Nora : compréhension sémantique, effets gouvernés, continuité cognitive exploitable, Journal vivant hiérarchisé, trajectoire évolutive, projections fiables, dictée/compositeur partagé, UX lisible, allocation adaptative et consommation observable. Préserver la qualité intellectuelle déjà appréciée. Un seul macro-lot, un candidat DEV intégré et un gate de sortie ; cinq mandats ciblés avec revues intermédiaires, pas cinq livraisons.

Sources (refs immuables pour les revues historiques) :
- [SEF v0.2](../governance/SEF.md), [Roadmap](../governance/roadmap.md), [ENV-01](../governance/environnements-recette-et-promotions.md), [versioning](../governance/product-versioning.md), [SEM](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md), [ADR R4 / DATA-01](../governance/decisions/2026-11-04-r4-architecture-exit.md).
- [PV MaintiPlan](recette-utilisateur-ml5-maintiplan-20261127.md), [bilan intégré](convergence-openai-studio/bilan-integre-20261127.md), [contrat d'acceptation](contrat-acceptation-cognition-et-realisation-gouvernee.md).
- [Contrat de continuité](../conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md), blob `1a5f822f650442ba8325287dcfc65c81e9113e6e` ; contrats propriétaires D3/D4/D5/D6/D8/D9 ; [conducteur D3](../architecture-technique/conducteur-cognitif-et-production-nora.md), allocation et observabilité.
- Figma [page 05 / panneau nominal](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1405-610), [initial](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1405-696), [page 13](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1332-2305), page 12 si applicable. F1/F2 conservés.
- [Diagnostic](https://github.com/mcleland147/sfia-workspace/blob/f6999c97abc6a1fd01c18e2ff441d66189ff9a33/sfia-review-handoff/latest-chatgpt-review.md), [construction initiale + MP09](https://github.com/mcleland147/sfia-workspace/blob/9897b91dc76cb1748a80d5597f2e98131dc0f456/sfia-review-handoff/latest-chatgpt-review.md), [reprise + P4](https://github.com/mcleland147/sfia-workspace/blob/14177ee1c672b9d4680487777bc296f706ab788f/sfia-review-handoff/latest-chatgpt-review.md) (blob `0235ea6ddea7cc6bbecaf246e4f36c141463495e`, 10804 lignes ; §§5–12, 14–17, diffs et tests).
- SFIA v2.6 template et routing v1.4 sur main indiqué ; pas de template parallèle. Contrats initiaux et revues ChatGPT/Morris du 27/11 : 26 sous-ensembles, 17 MP, 18 oracles continuité, 25 parcours transverses.

## 2. Modalité de suivi et gates

Les états ci-dessous sont des états de suivi, non des statuts de maturité SEF : ACQUIS CIBLÉ (preuve bornée), PARTIEL (construction/preuve incomplète), MANQUANT (écart identifié), À INSTRUIRE, À FAIRE, GATE LIVE (preuve hors mandat), BLOQUÉ, EN COURS (seulement lancement constaté), REVUE ATTENDUE, REVU (niveau déclaré), RÉSERVE PROPOSÉE / ACCEPTÉE PAR MORRIS / RÉSOLUE AVEC PREUVE. Une ligne peut porter plusieurs reliquats ; aucun pourcentage global trompeur, aucune clôture RECETTE induite.

À chaque rapport : ChatGPT vérifie tip/blob et contenu distant, compare le delta et les tests au mandat de l'ensemble, met à jour ce document sous mandat D1 borné (un seul fichier, branche candidate, diff/commit/relecture), conserve les acquis et historique, inscrit les nouveaux risques, les réserves et la prochaine action. Aucun suivi automatique en arrière-plan ; mise à jour lors de chaque revue. Cursor ne modifie pas ce suivi indépendant ; il synchronise ses documents techniques et apporte les preuves. Une réserve acceptée cite la décision Morris exacte, portée, risque, exit ; un PASS rapporté n'est pas une acceptation. Un changement du périmètre, de l'architecture ou de la gouvernance exige arbitrage distinct. Le registre ML5 propriétaire continue à porter la couverture produit, ce suivi référence ses évolutions, sans le remplacer.

| Ensemble | Périmètre et résultat | État au 27/11 | Dépendances / sortie |
| --- | --- | --- | --- |
| E1 Continuité cognitive et fonctionnelle | B.1–B.8 ; D3/D4/D5/D6, données/projections ; Journal et réutilisation | REVU — construction favorable, preuve DET ciblée et inspection ; gate Morris attendu | §10 ; reports recette et régularisation documentaire proposés ; E2 après GO |
| E2 Garanties cognitives résiduelles | A.1–A.7, intégration multi-intentions, reprise, recherche hybride, OBS/FinOps | À FAIRE (acquis antérieurs conservés) | Interfaces E1 ; risques d'autorité critiques signalés immédiatement ; calibration préparée, pas de LIVE |
| E3 Conformité UX et panneau droit | D.1–D.6 ; projections et accès directs ; Figma | À FAIRE | Données E1, états E2 ; navigateur réel DEV simulé fournisseur |
| E4 Audio et compositeur | C.1–C.5 | À FAIRE | Interfaces E2/E3 ; transport et robustesse DET ; dictée LIVE gate |
| E5 Qualification intégrée et exit | Candidat unique, suites applicables, 25 parcours, 18 oracles, docs/pack, mandat LIVE borné | À FAIRE | E1–E4 revus ; aucun GO LIVE avant décision Morris |

Séquence approuvée ; parallélisme uniquement après qualification explicite des interfaces/fichiers, intégrateur et tests communs. Revue ChatGPT après chaque ensemble avant de poursuivre le suivant dépendant. Pas de nouveau mandat général de rattrapage par défaut. Un blocage propriétaire partagé est instruit au plus tôt, pas repoussé mécaniquement.

## 3. Registre des 26 sous-ensembles (état indépendant courant)

| ID | Responsable | Acquis rapporté / preuve publiée | Reliquat obligatoire |
| --- | --- | --- | --- |
| A.1 | E2 | Option C, qualified exact, tests ciblés | Cohérence politique/qualification modèle-effort-lane, fallback, droits, calibrage ; LIVE séparé |
| A.2 | E2 | listPilotageEffectBindings, guidance typée | Négations, ambiguïtés, langues, multi-intentions naturelles ; pas de lexique |
| A.3 | E2 | Deux D5 appliqués PG, agrégat et ownership | Dépendances inter-capacités (notamment D4), refus partiels, reprise/idempotence, résultat de chaque effet |
| A.4 | E2 | Trim contexte, régression revision>0 corrigée (4 PG PASS) | Fraîcheur, reprise froide, non-régression connaissance, lectures et mesure T08 |
| A.5 | E2 | Helper terminal, IDLE corrigé après assemblage | Vérifier états/effets réels et travail restant, tests finaux et diff exact |
| A.6 | E2 | Restitution améliorée, PARTIAL déclaré | Corrélation message/travail/segment/requête/capacité/effet/usage ; activité spécifique réelle |
| A.7 | E2 | Filtre billable, attribution et couverture | Calculs/populations, estimations vs facturation, cache, finalisation, attribution projet, réconciliation fournisseur LIVE |
| B.1 | E1 | Extraction sélective et chemin Pilote/Nora→D4 inspectés, tests ciblés antérieurs conservés | Construction revue ; R-REC-E1-01 : autonomie et provenance réelle des contributions, zéro mutation inutile |
| B.2 | E1 | Batch parent/enfant ; rename/reparent/merge/split/detach raccordés ; fusion réparent enfants ACTIVE, refus ancêtre→descendant, fencing ; PG ciblés PASS | Construction revue, intégrité nominale et négatifs ciblés acquis ; R-REC-E1-01 pertinence des réorganisations ; E2 concurrence transverse si impact |
| B.3 | E1 | Chemins synthèse/capitalisation/supersede inspectés ; ciblage invalide et conflit id/titre refusés ; tests ciblés | Construction revue ; R-REC-E1-01 consolidation CampusNova-like, contradictions, historique et références exactes |
| B.4 | E1 | PG ouverture/résolution + compteur ; openPointTitle → provenance.canonicalTitle → shortTitle, PG/unit ciblés | Construction revue ; R-REC-E1-01 cycle de vie naturel et historique ; E3 accès exact et présentation |
| B.5 | E1 | PG record/revise/replay/revoke et négatifs D6, non-régression 10 PG B.5/B.6 rapportée | Acquis DET ciblés ; R-REC-E1-01 cas T07, portée et reconnaissance naturelle ; E2 garanties multi-effets |
| B.6 | E1 | forecastSteps durable → D5, RETAIN supersède PROPOSED ; refus body forecast USER_MESSAGE, chemin direct préservé ; tests PG ciblés | Construction revue ; R-REC-E1-01 réorientation naturelle, finalité/liens D4/CKI et historique en situation |
| B.7 | E1 | Outils D4 exposés, PREFERRED + omit marker inspectés et PG ciblés | Construction revue ; R-REC-E1-01 exploitation des sources/version et fraîcheur ; hybrid derivedUsed=false et mesure T08 → E2 |
| B.8 | E1 | Compteurs sujets/décisions, identité documentaire, shortTitle ; PG/service et inspection | Construction revue ; R-REC-E1-02 DOM/4 surfaces, refresh et V1→V2 à recetter ; E3 présentation ; DEV HTTP500 |
| C.1 | E4 | NoraSharedComposer créé, sas/projet | Mutualisation réelle des interactions (deux branches textarea), contexte distinct |
| C.2 | E4 | Saisie auto-grow et brouillons rapportés | Clavier, taille, navigation, isolation, mobile, pas d'envoi involontaire |
| C.3 | E4 | Routes prep dictée, guards | Transport réel et diagnostic timeout LIVE ; droits/identité/finalisation DET |
| C.4 | E4 | listening-only unit | Onde signal réel, connexion/écoute/silence/arrêt/finalisation |
| C.5 | E4 | Guards, PARTIAL | Permissions, erreurs, interruption, reprise, sessions successives, texte préservé, attribution usage |
| D.1 | E3 | CSS typographie 12.5px/1.65, sondes | Écart 11px, avant/après court/moyen/long, listes/tableaux/espacements, contenu naturel |
| D.2 | E3 | Spinner CSS + archive dynamique | Animation effective sur candidat final sans LIVE, terminal/erreur/reduced motion |
| D.3 | E3 | Agrégation restitution, unit | Restitution fidèle de tous effets, refus/erreurs, activité observable ; E2 propriétaire de vérité des effets |
| D.4 | E3 | 5 max, localStorage par Pilote/projet, doc/Git partiels | 7 types, consultation réussie seulement, identité/version exacte, révocation/accès direct, titres courts/liens directs points, Figma non optionnel |
| D.5 | E3 | Pied rail partagé, preuves portfolio/sas | Toutes variantes concernées, identité/menu, clavier, focus, navigation sans perte brouillon |
| D.6 | E3 | Spot checks, manifeste partiel | États vides/erreurs, responsive, visionneuse, F1/F2 mesurés, captures accessibles |
| Exit commun | E5 | 1451 PASS / 2 FAIL avant derniers correctifs, build PASS rapporté | Suites finales complètes, lint, tsc tests, intégration/navigateur, docs as-built, identité exacte du diff, pack et mandat LIVE |

## 4. Registre indépendant 17 MP

Tous OPEN en RECETTE. État de construction/probatoire seulement, priorités du PV conservées (MP06 critique ; 11 hautes, 5 moyennes).

| MP | Responsable principal | État de revue | Action / dépendance |
| --- | --- | --- | --- |
| 01 Micro sas | E4 | ACQUIS CIBLÉ navigateur | Préserver et vérifier compositeur commun et accessibilité |
| 02 Compositeur extensible | E4 | PARTIEL | Mutualisation, clavier, brouillons |
| 03 Points ouverts | E1 | CONSTRUCTION REVUE — titre canonique et PG ciblés | R-REC-E1-01 cycle de vie naturel, E3 accès direct, DOM |
| 04 Animation | E3 | PARTIEL | Preuve dynamique sur état final |
| 05 Lisibilité | E3 | PARTIEL | Comparaisons avant/après, typographie |
| 06 Dictée | E4 | GATE LIVE + DET PARTIEL | Transport, erreurs, reprise ; Realtime distinct |
| 07 Onde audio | E4 | ACQUIS CIBLÉ unit | Préserver et vérifier signal réel |
| 08 Panneau droit | E3 | MANQUANT/PARTIEL | Récents multitypes, accès direct/version/droits, Figma ; E1 données points |
| 09 Multi-intentions | E2 | PARTIEL | PG nominal acquis, négatifs/dépendances/reprise ; LIVE naturel |
| 10 Continuité | E1 | CONSTRUCTION REVUE — arborescence et réorganisation raccordées | R-REC-E1-01 capitalisation/consolidation/réutilisation naturelles ; E2 recherche hybride |
| 11 Restitution/activité | E2 | PARTIEL | OBS réelle ; E3 restitution UX |
| 12 Trajectoire | E1 | CONSTRUCTION REVUE — forecast durable, retain et admission sécurisés | R-REC-E1-01 évolution naturelle et projections |
| 13 Compteurs | E1 | CONSTRUCTION REVUE — PG et inspection | R-REC-E1-02 V1→V2 et PG→API→DOM, 4 surfaces |
| 14 Performance | E2 | GATE LIVE + DET à vérifier | T08 909844 tokens / 6 segments / 13m33 ; 40 observations ≠ 40 HTTP ; qualité comparable |
| 15 Allocation | E2 | GATE LIVE | Admission DET acquise ciblée, calibration et politique |
| 16 FinOps | E2 | GATE LIVE + DET à vérifier | Calculs/attribution, coût estimé ≠ facturé |
| 17 Paramètres | E3 | PARTIEL | Montage acquis, parcours toutes variantes |

Exigences complémentaires non négociables : arborescence dynamique, qualification des résultats Nora, réutilisation et trajectoire vivante (E1) ; compositeur partagé (E4) ; pied de rail commun et cinq récents (E3) ; compteur bibliothèque (E1). Préserver MP et exigences même si déjà implémentées : démontrer sans réécriture inutile.

## 5. Oracles de continuité §10 (18) — suivi d'exécution, pas simple mapping

État historique v0.2 complété par la réconciliation §10.2 ; lire §10 pour les preuves nouvelles, les reports et le gate courant.

| # | Oracle | Responsable / intégration | État initial / preuve restant à obtenir |
| --- | --- | --- | --- |
| 1 | Exploration → création | E1/E5 | Tests historiques ; identité/rattachement bout en bout |
| 2 | Hiérarchie | E1 | PG parent+enfant même batch PASS ; reprise/fence et LIVE naturel |
| 3 | Réorganisation | E1 | Raccord rename/reparent code, test PG reparent direct ; merge/split et provenance/reprise à exercer, LIVE |
| 4 | Apport Pilote + investigation Nora | E1 | Unit propositions injectées ; appel direct D4 intégré ; corrélation résultat réel/source→mutation non démontrée, LIVE |
| 5 | Correction acquis | E1 | Tests historiques cités ; consolidation/version/historique à exercer |
| 6 | Résolution question | E1/E3 | PG résolution acquis ciblé ; négatifs et vues synchronisées |
| 7 | Arbitrage local vs durable | E1/E2 | D6 PG record/revise/replay/revoke et ambiguïté/dialogue ; cas T07 et portée/restrictions à compléter, LIVE |
| 8 | Demande combinée | E2/E1 | PG nominal ; dépendances, reprise, LIVE T05/T06 |
| 9 | Réorientation Figma | E1 | PG orientation proposée, dialogue no-op ; forecast conversationnel et RETAIN projection incomplets, LIVE |
| 10 | Finalité cycle | E1 | PG objectif contextualisé ; liens D4 et méthode/CKI non démontrés, DOM |
| 11 | Compteurs | E1 | PG ctx + Journal décisions PASS ; V1→V2 et API→DOM à exercer |
| 12 | 5 consultations multitypes | E3 | Manquant ; 6 ressources, revisite/version/droits/reprise |
| 13 | Points panneau | E1/E3 | PG OPEN + identités ; titre dérivé éditorial ≠ titre canonique ; accès exact/DOM E3 |
| 14 | Navigation et interruption | E1/E3/E5 | Partiel ; 4 surfaces, fraîcheur/reprise |
| 15 | Réutilisation longue | E1/E2 | PG PREFERRED+omit ; lecture réelle D4, sources/versions, fraîcheur, reprise ; corpus comparable LIVE |
| 16 | V1→V2 MaintiPlan T09 | E1/E2/E5 | Compteur bibliothèque ≠ révision contextualisée ; analogue DEV à exercer, T09 non envoyé |
| 17 | Échange sans apport | E1 | Extraction zéro et retour D4 vide PASS ciblés ; vérifier aucune écriture/appel superflu sur conducteur |
| 18 | Isolation / échec | E1/E2/E5 | PG parent étranger et hints étrangers refusés ; cible sujet/acquis invalide, fence, concurrence, reprise à compléter |

## 6. Parcours transverses du mandat initial (25)

Chaque parcours doit disposer d'un résultat observé, commande/scénario, niveau DET/browser/LIVE, identité du candidat, preuve et réserve. E5 réconcilie l'ensemble, sans rejouer inutilement une preuve exacte encore applicable.

| # | Parcours | Responsable |
| --- | --- | --- |
| 1 | Préparation sas | E4/E5 |
| 2 | Compositeur partagé et saisie longue | E4 |
| 3 | Création et préparation animée | E3/E5 |
| 4 | Qualification multi-intentions | E2 |
| 5 | Ouverture cycle gouvernée | E1/E2 |
| 6 | Sujets/sous-sujets | E1 |
| 7 | Enrichissement connaissance | E1 |
| 8 | Décision durable/arbitrage local | E1 |
| 9 | Points ouverts et résolution | E1 |
| 10 | Production documentaire | E1/E5 |
| 11 | Compteur documentaire | E1 |
| 12 | Révision sans double comptage | E1 |
| 13 | Six consultations | E3 |
| 14 | Cinq plus récentes | E3 |
| 15 | Revisite sans doublon | E3 |
| 16 | Réorientation trajectoire | E1 |
| 17 | Navigation surfaces | E3/E1 |
| 18 | Reprise sujet ancien | E1 |
| 19 | Exploitation connaissance | E1/E2 |
| 20 | Paramètres globaux | E3 |
| 21 | Observabilité | E2 |
| 22 | FinOps | E2 |
| 23 | Isolation projets/Pilotes | E1–E5 |
| 24 | Erreurs/interruption/reprise | E1–E5 |
| 25 | Non-régression capacités existantes | E5 |

## 7. Réserves et actions d'intégration

Constats historiques à conserver ; les réserves E1 sont réconciliées au §10, sans acceptation Morris implicite.

Aucune réserve de cette revue n'est acceptée par Morris à ce stade. Le GO de séquencement n'est pas une acceptation. Les IDs ci-dessous sont des repères de suivi, pas des identifiants produit.

| Sujet | Nature / constat | Responsable / exit |
| --- | --- | --- |
| Continuité B.1–B.8 | PARTIAL/HORS P2/EXISTANT ne prouve pas raccordement | E1 ; tests discriminants et revue complète ; LIVE séparé |
| MP09 | Dépendances non D5/D6 ignorées par helper ; garantie ailleurs à vérifier | E2 ; E1 signale blocage partagé ; PG négatifs et reprise |
| Recherche hybride | ml2-derived-embedding-index derivedUsed=false | E2 ; diagnostic comparatif, correction si dans scope, sinon arbitrage preuve/risque ; impact E1 |
| T08 | Qualité et performance comparables non mesurées | E2 prépare, gate LIVE ; pas de plafond relevé arbitrairement |
| Allocation | Droits/calibration réels non démontrés | E2 prépare, gate LIVE ; RECETTE non admise sans preuve |
| FinOps | Réconciliation fournisseur / coûts | E2 prépare, gate LIVE ; calcul DET à vérifier |
| Récents | Types exécution/résultat/bilan/preuve absents ; P2/P4 divergent sur Git ; enregistrement avant vérification droits, accès générique/version insuffisante | E3 ; tous parcours propriétaires disponibles, accès exact et droits ; D7 réalisation L2 reste OUT |
| Points panneau | Troncature brute et navigation Journal générique | E1 titre canonique et données ; E3 accès point/sujet et Figma |
| F2 | Écart visuel explicite, captures locales non accessibles, Playwright timeout @cursor/sdk | E3/E5 ; réparer ou alternative navigateur déterministe, preuve accessible et δ<=2 CSS px sur rectangles contractés |
| Audio | MP06 LIVE fail historique ; robustness DET partielle | E4 ; tests puis LIVE borné |
| Suite finale | 1451 PASS / 2 FAIL, C16 corrigé ciblé ; pas de full rerun ; code sortie pipeline incertain ; lint non exécuté ; TS tests erreurs | E5 ; instruire échecs et exécuter commandes applicables avec exit réels ; ne pas accepter seul |
| Documentation | Delivery History ancien 88 PASS ; registre header v0.30 ; as-built absent | Chaque ensemble synchronise ses contrats ; E5 réconcilie cumul et registre |
| Handoff | 64 entrées, correctifs post-assemblage notamment cycle-type-labels.ts non intégralement publiés ; REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING | Chaque ensemble pack mono-cycle exact + références anciennes ; E5 pack cumulé final exhaustif |
| Mandat LIVE | §12 budget TBD, émissions/retries/sessions non bornés | E2/E4 préparent, E5 consolide budget sourcé et critères STOP ; Morris arbitre |
| T09 | MaintiPlan suspendu | Gate RECETTE ultérieur ; aucun envoi actuel |

Réserves historiques ENV-01 cookies/PG localhost trust et identité org/projet fournisseur conservées. Pas de migration structurante ni changement de doctrine. Multi-agents produit = piste exploratoire OUT. WEB/Admin OFF ; L2 OUT.

## 8. Journal des revues et prochaine action

| Date | Référence | Revue / décision |
| --- | --- | --- |
| 27/11 | Diagnostic f6999c97 | Causes partielles ; Option C et macro-lot intégré approuvés |
| 27/11 | adad5b06 / cac70a87 / 9897b91d | Acquis initiaux ; NOT READY ; pack incomplet, S08/S05 à instruire ; GO reprise |
| 27/11 | e6ab1ab2 / 14177ee1 | S08/S05 régression A.4 corrigée, PG nominal, build PASS rapporté ; revue indépendante NOT READY, continuité et UX incomplètes ; GO Morris cinq ensembles et suivi D1 |
| 27/11 | 6a211aea | Création suivi v0.1 ; E1 lancé sous Cycle 8 Critical DEV |
| 27/11 | a97145b1 / d08fc94e | E1 58 PASS ciblés (20 PG), 7 PG rejoués rapportés ; revue ChatGPT NOT READY exit E1 ; réserves non acceptées ; complément ciblé recommandé |
| 27/11 | 108044ef | Neuf reliquats repris, 51 PASS (19 PG) rapportés ; GO Morris qualification proportionnée et sécurisation finale ciblée |
| 27/11 | 41087f1b | Deux risques confirmés et corrigés, 38 PASS dont 5 nouveaux ; recommandation ChatGPT sortie construction E1 sous gate, réserves non acceptées |

Prochaine action recommandée : arbitrage Morris de sortie construction E1 (§10), puis E2 sous mandat distinct. Préserver les acquis DET ; ne pas relancer E1 pour les preuves utilisateur reportables. Aucun GO LIVE, candidat RECETTE, reprise T09 ou acceptation Livraison 1 implicite.

Trajectoire finale : E1→E2→E3→E4→E5 (revues intermédiaires) → arbitrage réserves et GO LIVE borné → qualification LIVE → GO candidat et cutover RECETTE distincts → rejeu ciblé 17 MP → reprise T09 jusqu'au seuil de réalisation → gate Livraison 1 → Livraison 2 sous mandat distinct.

Morris décide ; ChatGPT prépare, revoit et tient le suivi ; Cursor exécute ; Git trace.


## 9. Revue indépendante E1 — 27/11/2026 (historique v0.2, état supersédé par §10)

[Handoff final E1](https://github.com/mcleland147/sfia-workspace/blob/d08fc94e1619c5593fa65188e1e3dd091fa326ba/sfia-review-handoff/latest-chatgpt-review.md), blob `7c05e3d508b5cc35584433478dc7e0685ffb9029`, 3677 lignes. Handoff distant vérifié ; 58 tests ciblés sur 9 fichiers dont 20 PG, exit 0 rapporté (§17–18). Handoff §16 diff de référence mélange aussi des changements MP09 précédents ; état local intégral NON OBSERVÉ. Pas de nouveau build/lint final E1 publié ; tsc global non vert, caractère préexistant rapporté mais comparaison non fournie ; DEV :3100 HTTP500 ; RECETTE préservée selon Cursor. Dossier §22 annonce modifications registre/Delivery History dont le contenu exploitable n'apparaît pas dans §16 ; vérifier aussi contenu complet des nouveaux tests, delta final et empreinte. REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING pour les modifications documentaires non publiées. Nouveau as-built présent. Aucun nouveau commit projet ni effet LIVE autorisé.

### 9.1 Reliquats E1 à traiter avant proposition de gate

| Action | Constat et preuve | Exit attendu |
| --- | --- | --- |
| E1-REL-01 Réorganisation complète | §25 R-E1-MERGE : merge/split API UI seulement ; contrat §6.1 les prévoit pour Nora. Rename/reparent raccordés mais test intégré L~1058 appelle reparent direct. | Raccorder les opérations propriétaires compatibles, détachement racine si prévu ; preuves via qualification/capitalisation, conservation liens/historique/provenance, négatifs et reprise. Arbitrage seulement si véritable changement de modèle/autorité. |
| E1-REL-02 Intégrité D4 | §16 knowledge/service.ts : precreateBatchSubjects continue si subjectId explicite invalide, peut créer un autre sujet ; parentRef=self filtré ; subjectId partagé entre propositions et échec assertSubjectRef non explicitement refusé pour ACQUIS/OPEN_POINT ; titre peut écraser id ; reparent/rename appels sans fence visible ; résultats succès après rename FAILED potentiels. Risques à confirmer, pas incidents observés. | Tests cible invalide/étrangère, titre ambigu/conflit id, échec parent, dépendances, perte ownership avant chaque effet, reprise et résultat exact ; corriger défauts confirmés sans pivot. |
| E1-REL-03 Capitalisation et connaissance | §15/30 tests injectent propositions ou appellent propriétaire directement ; unit Nora result teste extraction epistemic ; scénario intégré utilise newId msg non créé dans test, pas de preuve message exact ni consolidation/supersede, pas de résolution via conducteur. | Parcours service D3 avec adapter déterministe contrôlé, résultats USER/Nora et références réellement persistées, zéro écriture, correction acquis/consolidation et résolution sourcée, historique et négatifs. |
| E1-REL-04 Titre point ouvert | §15 openPointShortTitle = editorialDisplayBullet(statement,72) ; §6.2 contrat demande titre canonique, pas simple troncature. | Vérifier mécanisme éditorial réel, mobiliser titre court qualifié durable dans contrat existant, compatibilité historique ; E3 affiche/navigation. |
| E1-REL-05 Trajectoire | R-E1-FORECAST-CONV : forecastJson absent du binding durable conversationnel. Test de future steps appelle executePilotageCommand direct. R-E1-RETAIN-VIS : test accepte PROPOSED source et RETAINED même orientation. | Préserver historique, une projection courante non ambiguë, nouvelle proposition distincte si évolution ; prévisions structurées issues de qualification durable, pas de body client libre ; test conversationnel PROPOSE→RETAIN→réorientation avec étapes, liens D4 et finalité/CKI ; soumettre arbitrage si changement normatif réel. |
| E1-REL-06 D6 | PG record/revise/replay et négatifs ciblés acquis ; revoke direct ; T07 et portée/référence/restrictions non exhaustifs. | Compléter tests D6 applicables et D4 référence sans autorité concurrente ; compteur conforme états/portée. |
| E1-REL-07 Réutilisation | §21/annexe PG sélection PREFERRED+omit et isolation, pas appel outil D4 via conducteur, pas preuve fraîcheur/reprise/version exacte. | Exercer lecture ciblée de connaissance et source/version/message exact, reprise et nouvel acquis sur chaîne DET ; hybrid diagnostic transverse E2, LIVE mesure séparée. |
| E1-REL-08 Projections/qualité | PG→ctx acquis ; pas DOM, DEV 500 ; alternative qualify:start connue mais non exécutée. V1→V2 analogue non démontré. | Rétablir DEV par chemin existant autorisé, preuve E1 4 surfaces et compteurs V1/V2, refresh/reprise ; F2 général E3. Build/lint/tsc E1 et non-régression S08/S05/MP09 selon impact, résultats exacts. |
| E1-REL-09 Dossier | §22/16 docs modifiés sans diff publié ; pack assemblage/delta final à réconcilier. | Diff documentaire et code complet E1, preuves et couverture par fichier, relecture distante ; préserver as-built et traces précédentes. |

### 9.2 Réserves proposées et gate

- R-E1-LIVE : légitime comme preuve hors mandat ; aucune autonomie Nora revendiquée. Réserve proposée, non acceptée.
- R-E1-EMB : E2 pour recherche hybride/mesure T08 ; fallback flag OFF ne résout pas échec hybrid flag ON. Ne pas bloquer E1 si chemin propriétaire utilisable et prouvé. Non acceptée.
- R-E1-NAV : HTTP500 n'est pas preuve DOM ; distinguer remise en service et parcours fonctionnels E1 de la qualification graphique E3. À traiter E1 dans la mesure autorisée, sinon arbitrage tooling documenté.
- R-E1-MERGE, R-E1-FORECAST-CONV : fonctionnalités explicitement prévues ; pas des réserves LIVE. À compléter ou arbitrage technique précis si frontière réelle.
- R-E1-RETAIN-VIS : préserver historique et distinguer projection actuelle/historique ; ne pas inventer état SUPERSEDED ni modifier D5 sans qualifier mécanisme existant. À traiter.
- R-E1-TSC : tsc global FAIL ; preuve comparative manquante. E5 intégration globale, E1 vérifie son delta et les non-régressions directement affectées.

Verdict indépendant : acquis DET ciblés, E1 PARTIEL / NOT READY pour passage E2. Toutes réserves non acceptées à cette date. Aucun nouveau gate produit. Recommandation : un complément E1 borné aux neuf reliquats ci-dessus, sous GO Morris ; pas de réécriture des 58 tests ni de réouverture des autres axes. E2/E3/E4/E5 restent À FAIRE.


## 10. Revue consolidée des compléments E1 — 27/11/2026

[Complément neuf reliquats](https://github.com/mcleland147/sfia-workspace/blob/108044efaefa80ebb09c6a21153e7d68d4ac53c8/sfia-review-handoff/latest-chatgpt-review.md), blob `95ef9e14c6e451a2ef417120cb49da8615f76507` (2151 lignes). [Sécurisation finale](https://github.com/mcleland147/sfia-workspace/blob/41087f1b36c6943070513c45c2ff61db40483b25/sfia-review-handoff/latest-chatgpt-review.md), blob `6e5326dba91b77758f80f736e6b60f025f809ec3` (1769 lignes). Tips et blobs vérifiés, main inchangé. Worktree exact NON OBSERVÉ ; tests et ENV locaux rapportés par Cursor. Pas de LIVE, pas de mutation RECETTE rapportée, aucun commit projet. Les tests de passages différents se recouvrent, ne pas sommer les PASS comme tests distincts.

Morris a validé le principe d'une qualification proportionnée : cohérence/raccordement et invariants critiques en DEV, preuves naturelles ou navigateur disproportionnées à proposer en recette. Aucun report ni réserve individuelle n'est accepté implicitement. Pas de nouvelle campagne de simulation ou LIVE systématique.

### 10.1 Réconciliation des neuf reliquats

| Action | Acquis consolidé | Reliquat / niveau |
| --- | --- | --- |
| REL-01 Réorganisation | subjectOrganization MERGE/SPLIT/DETACH → propriétaires existants ; fusion réparent enfants ACTIVE dans transaction, conserve identité, event reparentedChildIds ; refuse ancêtre→descendant | DET ciblé merge et cycle, inspection split/detach ; pertinence naturelle en recette ; concurrence transverse E2 si impact |
| REL-02 Intégrité D4 | Refus id invalide/étranger et conflit id/titre, fencing, rename fail explicite ; tests PG ciblés | Invariants ciblés acquis ; ne pas revendiquer preuve exhaustive concurrence |
| REL-03 Capitalisation | Chemin extract→D4 étendu et inspecté, mécanismes de synthèse/supersede | R-REC-E1-01 : résultats Nora et Pilote, consolidation, provenance réelle, résolution |
| REL-04 Point ouvert | openPointTitle → provenance.canonicalTitle → shortTitle ; compatibilité historique | DET ciblé ; E3 projection et navigation |
| REL-05 Trajectoire | forecastSteps durable, RETAIN supersède propositions avec historique ; rejet body non vide USER_MESSAGE et garde mutation, direct préservé | 3 nouveaux PG admission + non-régression B.5/B.6 ; R-REC-E1-01 orientation naturelle et liens |
| REL-06 D6 | 10 PG B.5/B.6 rejoués PASS rapportés | T07 naturel et portée à recetter, garanties multi-effets E2 |
| REL-07 Réutilisation | PREFERRED/omit + outils D4 inspectés ; 3 PG B.7/B.8 rapportés au complément | R-REC-E1-01 exploitation, sources/versions et fraîcheur ; hybrid/T08 E2 |
| REL-08 Projections | Compteurs, identité documentaire et shortTitle vérifiés par inspection/PG | R-REC-E1-02 : DOM, quatre surfaces, refresh et V1→V2 ; DEV HTTP500, E3 visuel |
| REL-09 Pack/docs | Diffs code D4/D5, nouveau test complet, delivery et registre publiés ; as-built précédent intégral et RETAIN testé dans 108044ef L1913 | Réserve documentaire proposée : dernier pack annonce as-built local modifié, mais §1670–1765 ne publie que delivery et registre ; extrait test e1-ensemble L1659–1668 tronqué avant assertion. Régulariser contenu exact au prochain mandat E2 avant construction, ou démontrer absence de delta. Pas de nouveau cycle E1 autonome recommandé. |

Validations finales rapportées : e1-final-safeguards 5/5, e1-reliquats 5/5, e1-ensemble-b5-b6 10/10, ml2-corrective-integrity 18/18, total 38 PASS (dont 33 non-régression), exit 0. Vérification du code et tests publiés, pas exécution indépendante. Pas de résultat final tsc/lint/build/diff-check dans le dernier pack ; ne pas les déclarer PASS. E5 consolide validations globales ; E2 vérifie les contrôles de son delta. DEV HTTP500 conservé, RECETTE intacte rapportée.

### 10.2 Oracles : réconciliation des nouveaux acquis et preuves restantes

| # | État consolidé / reliquat | Responsable |
| --- | --- | --- |
| 1 | Création historique acquise ; parcours naturel R-REC-E1-01 | E1 recette/E5 |
| 2 | Parent/enfant même tour DET ciblé ; pertinence naturelle | E1 recette |
| 3 | Réorganisation raccordée, merge arbre/cycle PG ; split/detach inspectés ; naturel | E1 recette |
| 4 | Chaîne contributions inspectée ; capitalisation du résultat réel et provenance | E1 recette |
| 5 | Consolidation/correction naturelle et historique | E1 recette |
| 6 | Résolution propriétaire PG ; résolution naturelle/historique | E1 recette/E3 |
| 7 | D6 PG ciblé ; T07 acte naturel | E1 recette/E2 |
| 8 | PG nominal multi-intentions antérieur ; dépendances et reprise résiduelles | E2 |
| 9 | Forecast conversationnel admis DET ; réorientation naturelle | E1 recette |
| 10 | Finalité contextualisée PG ; liens D4/CKI et affichage réel | E1 recette |
| 11 | Compteurs PG/inspection ; V1→V2 et DOM | E1 recette/E3 |
| 12 | Récents multitypes toujours à traiter | E3 |
| 13 | Titre canonique et identités acquis ciblés ; accès exact/DOM | E3 |
| 14 | Navigation/interruption et actualisation réelles | E3/E5/recette |
| 15 | PREFERRED/omit et outils ; fraîcheur/réemploi naturel et mesure T08 | E2/recette |
| 16 | T09 non envoyé ; révision contextualisée en recette distincte | E5/recette |
| 17 | Sélectivité DET ciblée ; absence mutation inutile réelle | E1 recette |
| 18 | Isolation/fencing ciblés ; concurrence et reprise transverses | E2/E5 |

### 10.3 Réserves proposées et gate

- R-REC-E1-01 / R-E1-LIVE : parcours conversationnel naturel, capitalisation des deux contributions, arbre, consolidation, réorganisation, points ouverts, décision durable, réorientation, reprise d'ancien sujet, sources et connaissance. Observer persistance et cohérence, sans mots déclencheurs. Non accepté à ce stade.
- R-REC-E1-02 / R-E1-DOM : vérifier Travail/Projet/Journal/Trajectoire, compteurs, révisions et rafraîchissement ; DEV :3100 HTTP500. Rétablissement via mécanisme existant au moment opportun E3/E5 ; preuve utilisateur proposée, non acquise.
- R-E1-HYBRID : embedding derivedUsed=false, diagnostic causal et T08 → E2. Ne pas déclarer hybrid fonctionnel sur seul fallback flag OFF.
- R-E1-E3 : panneau, navigation exacte, fidélité UX → E3.
- R-E1-PACK : as-built final et extrait RETAIN incomplets dans publication finale, détail REL-09. Publication distante vérifiée, couverture du code cœur suffisante pour revue des deux risques ; conserver réserve formelle MODIFIED CONTENT MISSING pour delta documentaire annoncé non publié. Régularisation au pré-check E2 proposée, pas d'acceptation unilatérale.
- R-E1-VALID : tsc/lint/build et diff-check finaux non fournis ; qualification proportionnée des changements et intégration E5 ; aucune preuve inventée.

Verdict indépendant : favorable à sortie construction E1 avec réserves proposées (READY WITH RESERVES pour gate de construction, pas READY FOR REAL). Aucun nouveau cycle E1 autonome recommandé ; confirmer gate Morris, report des preuves et régularisation documentaire au démarrage E2. E2 non engagé, E3/E4/E5 à faire. 17 MP OPEN RECETTE, R5 IN PROGRESS, ML5 OPEN, Livraison 1 NOT ACCEPTED, T09 NOT SENT, NO RELEASE, NOT ADOPTED.

Prochain mandat E2 : A.1–A.7, intégrer acquis option C/MP09/S08/A.5 ; instruire dépendances inter-capacités, reprises/refus, recherche hybride, contexte, OBS et FinOps ; préparer preuves réelles proportionnées, pas de LIVE sans GO. Préserver E1, régulariser traces avant modifications. Ne pas rouvrir E1 sauf défaut critique démontré.
