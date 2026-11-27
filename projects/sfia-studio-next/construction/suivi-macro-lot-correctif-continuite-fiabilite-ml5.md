# SFIA Studio Next — Suivi du macro-lot correctif intégré ML5
## Fiabilisation de la conduite et de la continuité projet

| Champ | Valeur |
| --- | --- |
| Date / version | 27 novembre 2026 — v0.9, snapshot DEV publié et arbitrage D3 instruit depuis le code |
| Nature | Suivi opérationnel documentaire D1, non normatif, non mergé ; ne remplace ni Roadmap, ni registre de couverture ML5, ni Delivery History, ni contrats |
| Mandat | GO explicite Morris du 27/11 pour créer ce document sur Git et le maintenir à chaque revue Cursor ; cinq ensembles et revues intermédiaires approuvés |
| Autorités | Morris arbitre les réserves et gates ; ChatGPT tient ce suivi et revoit ; Cursor construit et fournit les preuves |
| Programme | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / 17 MP OPEN EN RECETTE / T09 NOT SENT / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |
| Git | main `997897fd7cf914771e7d08e8030dc7123fab7d25` ; branche documentaire candidate `docs/next-openai-studio-convergence-20261126`, base avant création `f6cfd5ac01f848f6708501e1a390f37243721ab9` |
| DEV | Branche `sfia/next-ml5-integrated-delivery-20261123` publiée @ `53b9d452ab73732eef82677ab9a90529ccd973c8`, tree `18e8fd99a88396fed7041f146c46bd54f1f75658` vérifiés ; état local NON OBSERVÉ (deux chemins tmp dirty rapportés) ; :3100 / PG :5433 rapportés |
| RECETTE protégée | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` / BUILD `rpEczSp61evIZ7d6fnIWR` / PG :5434 schéma 027, :3200 ; MaintiPlan suspendu après T08 ; WEB et Admin OFF |
| Gate courant | Sortie construction E1 VALIDÉE MORRIS avec reports de preuves et reliquats affectés (§11) ; E2 revu — acquis DET ciblés, contrôles C02/FinOps favorables ; gate E3 conditionné à un arbitrage ciblé du séquencement D3 (§15–16), sans reprise générale. GO ponctuel snapshot consommé ; aucun nouveau GO commit/push projet, LIVE, cutover, PR, merge ou adoption. NOT READY pour qualification LIVE globale |

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
| E1 Continuité cognitive et fonctionnelle | B.1–B.8 ; D3/D4/D5/D6, données/projections ; Journal et réutilisation | SORTIE CONSTRUCTION VALIDÉE MORRIS AVEC RÉSERVES | §10–11 ; reports recette acceptés, reliquats E2/E3/E5 suivis ; aucune clôture RECETTE |
| E2 Garanties cognitives résiduelles | A.1–A.7, intégration multi-intentions, reprise, recherche hybride, OBS/FinOps | REVU — acquis DET ciblés, arbitrage D3 requis | §15–16 ; snapshot vérifié, conduite uniforme proposée à arbitrage Morris ; préserver C02/FinOps/D4 acquis ; aucune reprise générale |
| E3 Conformité UX et panneau droit | D.1–D.6 ; projections et accès directs ; Figma | À FAIRE | Données E1, états E2 ; navigateur réel DEV simulé fournisseur |
| E4 Audio et compositeur | C.1–C.5 | À FAIRE | Interfaces E2/E3 ; transport et robustesse DET ; dictée LIVE gate |
| E5 Qualification intégrée et exit | Candidat unique, suites applicables, 25 parcours, 18 oracles, docs/pack, mandat LIVE borné | À FAIRE | E1–E4 revus ; aucun GO LIVE avant décision Morris |

Séquence approuvée ; parallélisme uniquement après qualification explicite des interfaces/fichiers, intégrateur et tests communs. Revue ChatGPT après chaque ensemble avant de poursuivre le suivant dépendant. Pas de nouveau mandat général de rattrapage par défaut. Un blocage propriétaire partagé est instruit au plus tôt, pas repoussé mécaniquement.

## 3. Registre des 26 sous-ensembles (état indépendant courant)

| ID | Responsable | Acquis rapporté / preuve publiée | Reliquat obligatoire |
| --- | --- | --- | --- |
| A.1 | E2 | Stamp effectif version, UNVERIFIED, token versionné strict ; bare qualified rejeté ; unit ciblé | ACQUIS CIBLÉ admission ; calibration réelle et choix naturel sous gate ; extraction signal appliqué et estimation à réconcilier si nécessaire |
| A.2 | E2 | Guidance inter-capacité, normalize FACT→ACQUIS, qualification structurée | ACQUIS CIBLÉ ; dépendances exprimables ; application uniforme par D3 à arbitrer (§15) ; SEM-02 exhaustif à consolider ; naturel en recette |
| A.3 | E2 | Corrélation intentId et proposalKind, D4 préalable transitive par vagues + remaining, C02 union stash/projection ; PG ciblés | PARTIEL : ordre fixe early D4→D5/D6→remaining D4, préconditions de remaining non contrôlées dans le raccordement publié ; limite de conduite à arbitrer, pas nouvelle reprise générale (§15) |
| A.4 | E2 | PG hybrid fake-embed 2 PASS rapportés, fingerprint open_point aligné, audit structurel, omit/PREFERRED conservés | ACQUIS CIBLÉ PG ; droits, fraîcheur et contribution naturelle à recetter ; T08 réel et métriques disponibles à qualifier, pas d'optimisation hypothétique |
| A.5 | E2 | CONTINUE→OPEN, checkpoint CONTINUE distinct d'AWAIT_PILOT ; C02 lookup projection absente/partielle | ACQUIS CIBLÉ ; préserver lors de l'arbitrage D3 ; reprise réelle et finalisation naturelle en recette |
| A.6 | E2 | Cartographie OBS existante (tour, autorité, D4, documents, fournisseur, hybrid, FinOps) | INSPECTION : E3 consomme événements réels ; latences et corrélations lecture/version non démontrées exhaustivement, inconnues explicites, mesure T08 recette |
| A.7 | E2 | Conflits détectés hors fenêtre et avant filtre, PG exact 110/0/316, période 7j et isolation autre Pilote | ACQUIS DET CIBLÉ ; conserver mécanisme, présenter conflit distinct du hors projet E3 ; coût facturé indisponible Admin OFF, pas de nouvelle reprise générale |
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
| 09 Multi-intentions | E2 | ACQUIS DET D4→D5, D4 indépendante et C02 ; limite de séquencement identifiée | §15 arbitrage D3 : préconditions uniformes, ordre inter-capacités et traitement explicite ; recette naturelle |
| 10 Continuité | E1 | CONSTRUCTION REVUE — arborescence et réorganisation raccordées | R-REC-E1-01 capitalisation/consolidation/réutilisation naturelles ; E2 recherche hybride |
| 11 Restitution/activité | E2 | CARTOGRAPHIE OBS DISPONIBLE — inspection | E3 présentation réelle, corrélation et latences non mesurées à conserver comme inconnues |
| 12 Trajectoire | E1 | CONSTRUCTION REVUE — forecast durable, retain et admission sécurisés | R-REC-E1-01 évolution naturelle et projections |
| 13 Compteurs | E1 | CONSTRUCTION REVUE — PG et inspection | R-REC-E1-02 V1→V2 et PG→API→DOM, 4 surfaces |
| 14 Performance | E2 | ACQUIS CIBLÉ PG + preuve réelle | Audit structurel et PG hybrid ciblé ; comparaison T08 à qualité équivalente, métriques disponibles uniquement |
| 15 Allocation | E2 | ACQUIS CIBLÉ admission stricte | Calibration et choix naturel sous GO ; vérifier applied si observable |
| 16 FinOps | E2 | ACQUIS DET CIBLÉ — conflit hors fenêtre, services PG et montants exacts | E3 présentation du conflit et des mesures ; coût facturé non disponible Admin OFF |
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

Prochaine action recommandée : arbitrage Morris de la conduite uniforme des effets D3 (§16) avant mandat technique puis gate E3 ; préserver E1 et acquis A ; pas de reprise générale ni nouveau cycle correctif sans arbitrage. Aucun GO LIVE, candidat RECETTE, reprise T09 ou acceptation Livraison 1 implicite.

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


## 10. Revue consolidée des compléments E1 — 27/11/2026 (avis avant gate, décision §11)

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


## 11. Gate Morris — sortie construction E1 et GO E2 — 27/11/2026

Décision exprimée en conversation : « ok go », en réponse à la proposition explicite de valider conjointement la sortie de construction E1, le report des preuves cognitives naturelles et DOM en recette, le transfert des reliquats E2/E3/E5 et le lancement E2 Critical DEV. Référence de revue : handoff `41087f1b36c6943070513c45c2ff61db40483b25` / blob `6e5326dba91b77758f80f736e6b60f025f809ec3`, suivi v0.3 commit `696516d98f4bfa02aa9080e42a259d9b7a19be1e`.

| Réserve / gate | Arbitrage Morris et condition de sortie |
| --- | --- |
| E1 construction | Sortie de construction acceptée avec preuves ciblées et réserves ; pas BEHAVIOR PROVEN global ni clôture MP |
| R-REC-E1-01 / R-E1-LIVE | Report accepté en recette naturelle ; examiner capitalisation USER/Nora, arborescence et réorganisation, consolidation, points ouverts, décisions, trajectoire, réutilisation et provenance |
| R-REC-E1-02 / R-E1-DOM | Report accepté en recette ; E3/E5 préparent parcours, état réel et rétablissement DEV si nécessaire ; DOM non prouvé |
| R-E1-HYBRID | Reliquat affecté E2 : cause derivedUsed=false, correction si défaut, preuve proportionnée et mesure T08 ultérieure |
| R-E1-E3 | Reliquat affecté E3 : panneau, accès précis, fidélité UX |
| R-E1-PACK | Régularisation au pré-check E2 avant nouvelles modifications : publier delta as-built final et test RETAIN exact, ou démontrer absence de delta ; ne pas rouvrir E1 entier |
| R-E1-VALID | Réconcilier tsc/lint/build/diff-check selon delta en E2 et intégration E5 ; aucune preuve acquise par report |
| E2 | GO construction Critical DEV uniquement ; A.1–A.7, MP09/11/14/15/16 et interfaces directes ; E1 préservé ; E3–E5 non engagés |

Le GO ne couvre aucune émission LIVE, aucune mutation RECETTE, aucune promotion, aucun commit/push projet, aucune PR/merge, aucune décision d'architecture nouvelle. Les 17 MP restent OPEN RECETTE. Livraison 1 NOT ACCEPTED. Le macro-lot reste ouvert. E2 sera revu avant passage E3. Le travail de construction reste à réaliser par Cursor sous contrat SFIA v2.6. Aucune affirmation d'exécution ou de résultat E2 à ce stade.


## 12. Revue indépendante E2 — 27/11/2026 (historique v0.5, réconcilié §13)

[Handoff E2](https://github.com/mcleland147/sfia-workspace/blob/80cdef6ce151e0414b9aafb952bfa276966fc06c/sfia-review-handoff/latest-chatgpt-review.md), blob `981a26d5878db22fe0348762f5f714d72a2f2d71`, 2448 lignes. Main 997897fd, branche docs 6c10079c et tip handoff vérifiés. Worktree exact NON OBSERVÉ. 91 PASS unit sur 8 fichiers rapportés, exit 0 ; git diff --check ciblé clean. Aucun PG E2, tsc/lint non rejoués, build non exécuté. DEV HTTP500, RECETTE préservée selon Cursor ; aucun LIVE ni commit projet. Ne pas additionner aux tests historiques comme tests uniques. As-built E1 complet §15 et oracle RETAIN §4 : R-E1-PACK régularisée ; pas de nouveau cycle E1. R-E1-HYBRID cause de fixture isolée, pas preuve PG opérationnel. R-E1-VALID demeure suivi.

### 12.1 Actions résiduelles recommandées (complément E2, pas nouvelle architecture)

| ID | Constat / source | Action / exit |
| --- | --- | --- |
| E2-REL-01 Allocation versionnée | §15 provisional-cognitive-policy et tests : `return raw === "qualified"` accepte toute version active ; LEGACY_UNVERSIONED trace mais ne bloque pas. v0.1 et v0.2 ont couples distincts. A.1 stamp corrigé. | Recommander admission RECETTE liée explicitement à la politique calibrée ; traiter compatibilité non versionnée sous arbitrage Morris, pas activation. Vérifier modèle/effort proposés/admis/demandés/appliqués, UNKNOWN sans invention, tarifs et propagation aux frontières. Tests mismatch et fallback. Calibration LIVE ultérieure. |
| E2-REL-02 Orchestration/reprise | §15 helper et guidance : cross-cap fail-closed, Nora instruite de limiter dependsOn à D5/D6 ; sécurité améliorée mais demande légitime D4→D5 bloquée. §12 C02 multi-replay incomplet. | Préserver fail-closed si précondition réellement inconnue ; exploiter ordre et résultats propriétaires existants pour satisfaire dépendance valide ; ne pas masquer une dépendance dans la qualification. Récupérer résultats de toutes intentions durables, aucune duplication après reprise UNKNOWN. Vérifier aussi ordre, cycles, effet non exécuté et terminalisation réelle (CONTINUE ≠ AWAIT_PILOT sans justification). Quelques PG intégrés discriminants et régression E1/MP09/S08/S05 selon impact. Si changement structurant requis, arbitrage ciblé. |
| E2-REL-03 Contexte/hybrid/efficience | §15 seul ajout projectId au resume ; test file-index épingle backend=file et flag ON, correction légitime de fixture mais ne prouve pas PG; aucun audit de lectures exactes ou correction redondance nouvelle publié. | Vérifier chemin PG réellement sélectionné, semanticHits, identité/ranking/droits et fallback avec adaptateur existant, sans fournisseur ; pas de nouveau moteur ni réindexation massive. Examiner concrètement les lectures et réinjections, réutilisation et fraîcheur ; corriger seulement redondances démontrées. Comparaison réelle T08 et qualité en recette. |
| E2-REL-04 OBS/activité | §15 événements D5/D6 et billable hasData ; pas de cartographie ni preuve suffisante de corrélation complète, lecture/version, latences par frontière, requêtes distinctes. | Réconcilier événements existants et lacunes concrètes, instrumenter minimalement opérations réelles manquantes nécessaires à E3 et mesure T08 ; préserver distinction émission/observation/segment, inconnues, sécurité. Pas de console supplémentaire ni raisonnement privé. |
| E2-REL-05 FinOps | §15 usage-read-service : filtre OR direct projectId ou work.projectId, sans condition de conflit ; fallback resolveObservedProjectId sur slice déjà filtrée potentiellement masque multi-projet. Cas p1 work / p2 observation peut être inclus dans deux filtres d'un même Pilote ; risque à reproduire, pas incident constaté. Helpers labels/hasData acquis. Test attribution antérieur regex (14177ee1) ne prouve pas SQL. | Définir règle propriétaire cohérente scope direct/work/hors projet/incohérent, ne pas réattribuer historique massivement ; vérifier requêtes/observations facturables inconnues, cache et tarifs UNVERIFIED, couvertures, filtres, agrégats/détail, coûts moyens et attribution sas→projet. PG ciblé/service réel avec données contrôlées ; pas de facture inventée, Admin OFF. UX headline E3. |
| E2-REL-06 Dossier/qualité | 91 unit ciblés sans PG, pas de tsc/lint/build ; matrice MP §8 intervertit MP11/15, livraison écrit READY WITH RESERVES (ChatGPT) avant revue ; pack ne fournit pas Git Review Index ni preuve exhaustive SEM-02. | Corriger traçabilité, vérifier code/contrats effectifs et absence de fallback lexical métier, publier sections réellement modifiées, tsc/lint delta/build applicable et tests utiles. E5 intégration globale, report DOM accepté E1 mais E3 doit traiter preuve UX. Pas de cycle documentaire autonome. |

### 12.2 Arbitrage des réserves E2

R-E2-01 calibration : report légitime sous gate ultérieur, distinct des règles d'admission. R-E2-02 comparaison T08 : report légitime pour mesure réelle uniquement, instrumentation et audit structurel E2. R-E2-03 C02 multi-replay : non recommandé au report sans garantie de reprise ; R-E2-04 cross-cap : fail-closed légitime, insuffisant pour traiter demande valide ; ne pas interdire l'expression sémantique du besoin. R-E2-05 navigateur : preuve reportable à E3/recette, pas de refonte tooling E2. R-E2-06 applied fournisseur : inconnue légitime tant que signal absent ; vérifier extraction si SDK l'expose, pas d'inférence. R-E2-07 hybrid PG : preuve runtime avec fournisseur distincte ; mécanisme PG à vérifier en DET proportionné. Facturation : indisponible Admin OFF, pas d'activation implicite ; aucune réserve E2 acceptée par Morris à ce stade.

### 12.3 Gate et suite

E2 PARTIEL — NOT READY pour passage E3. Acquis à conserver ; complément ciblé en trois blocs cohérents (allocation/orchestration et reprise ; contexte/OBS ; FinOps et intégration documentaire). Contrôles critiques avant recette ; pas de simulation exhaustive, pas de nouveau LIVE, pas de mutation RECETTE. E1 construction validée avec réserves selon §11 ; E3/E4/E5 à faire. Les 17 MP restent OPEN RECETTE. R5 IN PROGRESS, ML5 OPEN, Livraison 1 NOT ACCEPTED, T09 NOT SENT, NO RELEASE, NOT ADOPTED.


## 13. Revue du complément E2 — 27/11/2026 (historique v0.6, réconcilié §14)

[Handoff E2 complément](https://github.com/mcleland147/sfia-workspace/blob/93e8f4a660eb5c69e063db202e34342389916555/sfia-review-handoff/latest-chatgpt-review.md), blob `bf32de4e4d01e0a20a4656de75b608f648b56ada`, 4316 lignes. Main 997897fd, docs d5ef3764, tip handoff vérifiés. GO Morris complément E2 reçu après §12.3. Worktree exact NON OBSERVÉ. 89 PASS ciblés rapportés dont hybrid PG 2 PASS, mp09 PG annoncé ; tsc delta sans erreur rapporté (global non vert), ESLint 0 erreur, diff-check clean ; build final non établi. Commande tests groupée, pas de décompte détaillé par fichier. Aucun LIVE ni commit projet ; RECETTE préservée rapportée ; ne pas sommer les PASS de cycles comme tests distincts. Diffs souvent cumulés contre HEAD et non delta d'entrée exact ; revue des sections déterminantes, pas exécution locale indépendante.

### 13.1 Réconciliation des six reliquats

| ID | Acquis | Reliquat / décision proposée |
| --- | --- | --- |
| REL-01 | qualified-v0.x exact, bare rejected, rollback legacy_sol, unit | Admission DET ciblée favorable ; calibration et signal appliqué réel à qualifier sous gate ; inconnue explicite acceptable |
| REL-02 | D4 précoce, crossCap map, guidance inter-capacité, C02 liste d'effets, cause CONTINUE | NOT READY : attribution de succès D4 et dépendances propres ; replay sans resultJson ; non-régression forecast/provenance ; voir §13.2 |
| REL-03 | Test PG avec client substitué, derivedUsed et channel sémantique, révocation de contribution dérivée ; FP open_point aligné ; audit des répétitions et omit préservé | Acquis DET ciblé (test peut skip si table absente, rapport annonce 2 PASS) ; révocation ne prouve pas retrait de tout résultat lexical, ni isolation globale ; naturel et mesure T08 en recette ; pas de nouveau cache |
| REL-04 | Cartographie §208–222 disponible pour E3 | Inspection, pas instrumentation nouvelle démontrée ; conserver latences inconnues, vérifier données activité réelles E3 et mesure T08 ; pas de nouveau chantier OBS autonome |
| REL-05 | SQL A/A et NULL/A, conflit direct B/A exclu ; helper work-level, USAGE_UNKNOWN seul conservé | PARTIEL : multi-projet work NULL et slice filtrée ; service SQL non exercé par nouveau PG ; voir §13.2 |
| REL-06 | Git Review Index, mapping MP exact, verdict Cursor distinct, docs publiées | Acquis documentaire ; tsc/lint delta rapportés, build E5 ; inventaire SEM-02 actif/dormant non exhaustivement démontré ; pas de cycle doc autonome |

### 13.2 Derniers contrôles ciblés avant sortie E2

| Action | Constat de revue et preuve | Exit attendu |
| --- | --- | --- |
| E2-FINAL-01 Orchestration D4/D5/D6 | Pack L1897–2001 : batch early appelle extractKnowledgeProposals(qualification) sans filtrer les propres dependsOn des propositions ; related.some(AVAILABLE/OK) considère succès partiel comme succès ; fallback related.length=0 + hadProposal + any successful capitalisation peut attribuer le succès d'un autre intent. D4 résultats merge/split/rename/reparent existants sans intentId visibles L3220–3398. L1959 assistantMessageId=null, vérifier provenance finale. L2120–2140 preQualified ne montre pas forecastSteps : vérifier si propriétaire récupère durablement le champ et si absence est régression ; ne pas affirmer perte effective sans test. | Corrélation exacte intention→résultat propriétaire, aucune satisfaction par succès d'une autre ; traiter dépendances de chaque mutation, succès complet requis selon contrat ; préserver l'autorité, pas d'orchestration concurrente ; preuve PG nominal D4→D5 et négatif avec D4 A réussie / B échouée, dépendance inverse ou cyclique pertinente ; vérifier provenance et forecast conversationnel E1 avec oracle applicable. Si frontière structurante, arbitrage Morris. |
| E2-FINAL-02 C02 replay | Pack L1735–1798 : retourne immédiatement fromJsonEffects ou singular fromJson ; branche reconstruction par semanticIntentIds ne reçoit dans les deux call sites publiés (L1655–1658, L1825–1839) que IDs tirés de fromJsonEffects. Si liste disponible, retour anticipé ; si resultJson absent, aucun ID durable fourni ; repli primaire. Une intention non retrouvée est ignorée par continue. | Récupérer IDs depuis qualification durable existante indépendamment du resultJson, réconcilier chaque résultat avec propriétaire, marquer inconnu/non exécuté, pas de duplication ni succès fabriqué ; test PG d'interruption avant persistance resultJson avec deux intentions, vérifier reprise/lookup ; préserver fencing et état terminal. |
| E2-FINAL-03 FinOps scope | Pack L2360–2450 : pour work.projectId NULL, directConcordant accepte obs A et obs B du même work dans filtres distincts ; post-filter est par ligne. L2489/2501 effectiveFinOpsProjectIdForWork reçoit slice déjà filtrée ; conflit multi-scope peut disparaître ; une même ligne B/A connue n'est plus double comptée, mais cohérence globale/détail reste à résoudre. L1542–1583 test attribution regex, pas exécution SQL. | Déterminer scope propriétaire à partir des données pertinentes non préfiltrées, distinguer conflit de hors projet, ne pas inventer rattachement ni supprimer usage global ; vérifier cohérence global/projets/liste/détail/période/modèle avec petit test PG/service réel A/A, B/A et work NULL observations A+B. Clarifier mesure si une ligne sans usage reste inconnue. Pas de nouveau moteur ni réécriture historique. |

Les écarts ci-dessus sont constatés dans les extraits publiés ; leurs effets runtime précis restent à reproduire ou écarter. Recommander un seul complément très ciblé, sans rouvrir l'allocation ni hybrid ni optimisation T08. Pas de nouvelle campagne LIVE. Réconcilier les tests/documents touchés dans le même handoff. Si l'orchestration actuelle ne peut satisfaire ces garanties sans pivot, STOP ciblé pour décision d'architecture, pas empilement de fallbacks.

### 13.3 Réserves proposées et gate

Calibration réelle (R-E2c-CAL), T08 réel (R-E2c-T08), autonomie naturelle (R-E2c-NAT), indisponibilité facture Admin OFF (R-E2c-ADMIN), présentation E3 : report recommandé, non accepté à ce stade. R-REC-E1-01/02 déjà acceptées par Morris §11. L'audit d'efficience structurel et PG fake-embed permettent de préparer la recette, sans prétendre à un gain mesuré ni au comportement fournisseur. R-E1-HYBRID techniquement instruit en PG ciblé, preuve naturelle reste ouverte. R-E1-VALID et validation globale E5 restent suivis. SEM-02 : inspection applicable à compléter si modifications concernées, ne pas déclarer suppression globale prouvée. Pack final E2c vérifié pour les sections déterminantes ; vérifier couverture exacte du delta final, commandes et tests supplémentaires au prochain handoff. Aucune clôture MP ni acceptation de réserve nouvelle.

Verdict indépendant : E2 PARTIEL — NOT READY pour passage E3. Préserver acquis et limiter suite aux trois contrôles §13.2. E1 construction validée avec réserves. E3/E4/E5 non engagés, 17 MP OPEN RECETTE, R5 IN PROGRESS, ML5 OPEN, Livraison 1 NOT ACCEPTED, T09 NOT SENT, NO RELEASE, NOT ADOPTED.


## 14. Revue de la sécurisation finale E2 — 27/11/2026 (historique v0.7, réconcilié §15)

[Handoff E2 final](https://github.com/mcleland147/sfia-workspace/blob/a582a53d5b06d7423c21973184fcbaf3d3853c17/sfia-review-handoff/latest-chatgpt-review.md), blob `d5d2da211a1c6ddbda79aaf992a6df2d82db9681`, 1921 lignes. Main 997897fd, docs 3c691e52, tip handoff vérifiés. GO Morris sécurisation ciblée reçu après §13.3. 16 PASS ciblés rapportés (11 unit + 3 PG orchestration/C02 + 2 PG FinOps), lot affecté 59 PASS incluant FINAL ; ne pas sommer. Tsc filtré 0 erreur delta rapporté, global non vert, diff-check OK ; ESLint rapport mentionne warnings et exclusion unused préexistant, exit exact non fourni ; build non exécuté/établi. DEV :5433 sfia_next_dev rapporté, app HTTP500 historique ; isolation base E2E exacte NON OBSERVÉE, tests exigent DATABASE_URL et lane DEV mais pas contrôle DB dédiée dans fichiers publiés ; vérifier avant nouvelle écriture de fixtures. RECETTE préservée rapportée, pas de LIVE ni commit projet. Code local intégral et exécution indépendante NON OBSERVÉS.

### 14.1 Acquis des trois contrôles

- FINAL-01 : crossCapOutcomeFromCapitalisations filtre intentId ; PARTIAL non satisfaisant ; FACT→ACQUIS et intentId ajoutés ; PG nominal D4→OPEN_CYCLE et négatif D4 B sans proposition→D5 refusé. Test négatif ne démontre pas que D4 A a effectivement persisté (pas assertion D4 A) ; test nominal n'exerce pas PROPOSE avec forecast ni provenance finale. Inspection forecast déclaré écarté par Cursor. Conserver corrections.
- FINAL-02 : extractDurablePilotageIntentIds récupère semanticQualification dans resultJson stash, UNKNOWN explicite si propriétaire non retrouvé. PG simule suppression des projections d'effets après tour COMPLETE, puis lookup read-only ; les deux IDs sont retrouvés, open_count ≤1, pas de faux APPLIED sans commandId. Ne prouve pas crash mid-write ni reprise mutante ni résultat exact de tous effets ; preuve ciblée de lookup, pas de reprise globale.
- FINAL-03 : loadAttributionConflictWorkIds avant filtre projet ; conflits work NULL + obs A+B et B/A exclus des vues projet dans fixture 30j, détail null, global observations présentes, autre Pilote isolé. Test service PG réel acquis. Assertion tokensA+tokensB <309 ne garantit pas les montants exacts 110/0/316 (global) ; ne pas revendiquer réconciliation exhaustive.

### 14.2 Contrôle d'intégration résiduel, pas nouvelle reprise générale

| Point | Constat sourcé et limite | Exit minimal |
| --- | --- | --- |
| D4 restantes / dépendances | Nouveau pack L1654–1790 : d4DepsForPilotage ne contient que les prédécesseurs directs D4 de D5/D6, puis exécution par intention ; capitalisationRanBeforePilotage = ranAny ou set non vide. Handoff 93e8f4a6 L2264–2285 : branche ultérieure si ce booléen vrai émet seulement un résumé, n'exécute pas D4. Nouveau pack ne publie pas la branche finale. Risque concret d'omission d'une intention D4 indépendante, de prédécesseur transitif non inclus ou de D4 dépendante d'un D5 déjà exécuté ; le PG négatif ne vérifie pas D4 A. Séquencement par intention peut aussi perdre le batch parent/enfant E1. | Examiner état local complet ; vérifier chaque intention admissible exécutée ou explicitement en attente/refusée, jamais perdue ; ordre transitif/inverse, pas de double write, conservation batch E1 et provenance. Corriger défaut avéré par mécanismes D3/D4 existants ; si frontière structurante, arbitrage Morris. Un scénario PG intégré mixte et assertions propriétaires discriminantes suffisent, pas nouvelle campagne. |
| Succès D4 incomplet | Pack L334–374 : hasRecordPrimary déduit le type du résultat présent ; si seul subject AVAILABLE émis sans ligne primaire, le helper peut renvoyer APPLIED. Test intitulé subject side-effect alone L506–520 contient en réalité acquis FAILED. | Vérifier que le propriétaire émet toujours un résultat primaire pour chaque opération attendue, sinon contrôler type attendu avant succès ; confirmer/écarter avec test ciblé si utile. |
| C02 projection partielle | Pack L1505–1630 : stash utilisé si pas de liste ni effet singulier ; retour anticipé sur toute liste non vide ou effet singulier abouti. Une projection partielle peut masquer une intention durable ; call sites finaux non publiés. | Vérifier complétude par rapport aux intentions durables et réconcilier seulement les manquantes ; conserver lookup acquis. Panne réelle/reprise UX en recette/E5 si mécanisme correct ; aucune simulation disproportionnée. |
| FinOps scope stable | Pack L1329–1397 : conflict loader applique gte(createdAt,since), seulement pour input.projectId ; fenêtre plus courte peut masquer une observation contradictoire ancienne ; global/list/detail finales non entièrement publiées. | Examiner portée temporelle définie par contrat et cohérence des vues, conserver conflits distincts du hors-projet ; données PG existantes avec montants exacts, période/modèle si utile. Si politique historique ambiguë, arbitrage précis. E3 présentation uniquement. |
| Pack et non-régression | §8/12 annoncent delivery, registre, as-built mais aucun contenu modifié correspondant n'apparaît dans les 1921 lignes ; extraits service et usage-read-service tronqués avant raccordements finaux. | Publier uniquement deltas manquants et chemins complets touchés, vérifier état final, forecast/provenance E1. REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING pour docs et raccordements annoncés non publiés. |

### 14.3 Recommandation et gate

Ne pas rouvrir allocation, hybrid, T08, OBS ni A.1–A.7 globalement. Contrôle d'intégration unique borné, centré sur les risques ci-dessus, sous GO Morris ; privilégier lecture du code et quelques assertions utiles. Si risque D4 structurel confirmé et pas de correction simple dans le conducteur existant, proposer arbitrage d'architecture au lieu de nouveaux fallbacks. Pas de nouvelle campagne LIVE. Réserves calibration, allocation naturelle, pertinence hybrid, comparaison T08, reprise utilisateur, présentation E3, coût facturé indisponible Admin OFF et qualification globale E5 : reports recommandés, aucune nouvelle acceptation Morris à ce stade. R-REC-E1-01/02 déjà acceptées §11. Verdict : E2 PARTIEL — sortie conditionnée au contrôle d'intégration et à la régularisation du pack ; pas de gate E3 acquis. 17 MP OPEN RECETTE, R5 IN PROGRESS, ML5 OPEN, Livraison 1 NOT ACCEPTED, T09 NOT SENT, NO RELEASE, NOT ADOPTED.


## 15. Revue d'intégration E2 — 27/11/2026

[Handoff E2-INT](https://github.com/mcleland147/sfia-workspace/blob/4bb938242d8455aedd4b4336a5c2f305a3534cd7/sfia-review-handoff/latest-chatgpt-review.md), blob `a70fb67a5b384754fef1e9e737b61b049f997e3e`, 1882 lignes. Main 997897fd, docs 3bab4aa1, tip handoff vérifiés. GO contrôle d'intégration reçu après §14.3. 20 PASS FINAL/INT rapportés (12 unit, 5 PG orchestration/C02, 3 PG FinOps), 63 PASS lot affecté incluant FINAL/INT ; exit 0 rapporté, ne pas sommer. Tsc filtré 0 erreur delta rapporté, diff-check OK ; commandes complètes, lint et build finaux non restitués. Base `sfia_next_e2e` 47 tables et rewrite vitest vérifiés selon Cursor ; code local/exécution indépendante NON OBSERVÉS. RECETTE préservée rapportée, pas de LIVE ni commit projet. §12 publie les extraits delivery/registre/as-built précédemment manquants, §13 les raccordements déterminants, §14 tests complets ; traçabilité précédente améliorée, delta exact et content coverage final exhaustif non attestés par une matrice explicite.

### 15.1 Réconciliation des contrôles §14.2

| Contrôle | Constat / preuve | Qualification |
| --- | --- | --- |
| D4 restantes | L188–292 remaining présent ; PG L1334+ vérifie D4 early et D4 indépendante, D5 appliqué | Risque omission écarté pour cas testé. Closure transitive et vagues D4 préalables L293–482, amélioration inspectée ; conservation de tous les batches inter-phases non démontrée. |
| Succès primaire | L646–700 proposalKind empêche subject-only de satisfaire ACQUIS ; unit L925+ | Correction ciblée acquise. |
| C02 partiel | L483–645 union stash∪projection, reconstruction manquants ; PG L1532+ | Preuve lookup partiel ciblée acquise. UNKNOWN non assimilé à succès ; panne physique/reprise mutante non prouvées, report proposé. |
| FinOps | L701–853 conflit sur histoire complète par Pilote/lane ; PG L1797–1879 exact 110/0/316 et fenêtre 7j | Acquis DET ciblé ; 199 tokens conflictuels, 7 hors projet, 110 projet A. Ne pas inventer coût facturé. Présentation explicite du conflit E3, données nécessaires à qualifier. |
| Dossier | L118–185 extraits docs, L188–853 raccordements, tests L854+ | Contenus antérieurs régularisés pour la revue ciblée ; pas de nouveau cycle documentaire autonome. |

### 15.2 Arbitrage ciblé du contrat de conduite D3

Constat dans le code publié : la fermeture transitive ne traverse que les intentions D4 précédant D5/D6. L377–400 bloque une D4 préalable qui dépend d'une intention D5/D6 encore non exécutée. L215–249 appelle le propriétaire avec toutes les propositions remaining D4 sans contrôle visible de leurs propres dependsOn ; L250+ fait de même sur la branche normale lorsque aucune D4 précoce. Ainsi une chaîne valide D5-A→D4-B→D5-C peut être bloquée malgré A aboutie ; et une D4 remaining dépendant d'un effet D5/D6 refusé pourrait muter en dépit de la précondition non satisfaite. Effets précis non reproduits ; le test mixte publié utilise deux D4 sans dépendance propre et une D5 dépendante de la première. Ce n'est pas une preuve d'ordre inverse/alterné ni de batch parent/enfant réparti entre phases. Ne pas confondre preuve naturelle restante et invariant déterministe insuffisamment raccordé.

Recommandation ChatGPT (non décidée) : arbitrer la conduite unique des intentions admissibles dans D3 à partir de leurs dépendances et des résultats propriétaires, plutôt qu'ajouter des exceptions aux phases fixes. Réutiliser qualification, ownership, fencing, résultats, checkpoints et replay existants ; préserver les groupes D4 cohérents nécessaires aux références parent/enfant. Une intention prête peut poursuivre ; une dépendance refusée/inconnue bloque seulement les effets concernés ; une dépendance légitime satisfaite ultérieurement peut être reprise ; aucune mutation sans autorité propriétaire. Ne pas imposer un DAG générique, nouvelle persistance, moteur concurrent, multi-agents ou appel IA systématique. Instruire l'option minimale dans le conducteur actuel avant décision Morris ; si modification structurante réellement nécessaire, qualifier blast radius, dette/exit et preuve. Limite d'implémentation constatée, nécessité d'un pivot non démontrée. Un contrôle discriminant négatif D5/D6 refusé→D4 dépendante, un ordre alterné valide et la conservation des effets indépendants/batch E1 suffisent à orienter l'arbitrage. Pas de nouvelle campagne LIVE ni reprise A.1–A.7.

### 15.3 Gate et gouvernance

Avis indépendant : acquis E2 ciblés à conserver ; sortie construction E2 non encore recommandée sans arbitrage de conduite §15.2, distinct des réserves de preuve. Proposer report calibration, allocation naturelle, hybrid naturel, T08, reprise utilisateur, présentation E3 et qualification globale E5 ; coût facturé indisponible Admin OFF. R-REC-E1-01/02 déjà acceptées §11. Aucun nouvel arbitrage Morris consommé. 17 MP OPEN RECETTE, R5 IN PROGRESS, ML5 OPEN, Livraison 1 NOT ACCEPTED, E3/E4/E5 non engagés, T09 NOT SENT, NO RELEASE, NOT ADOPTED.

Discussion séparée en conversation : publication systématique du code DEV et handoff centré sur preuves envisagés par Morris sous forme de question exploratoire, pas de GO ni changement de doctrine. Option ponctuelle de publication d'un snapshot candidat DEV sous mandat Git explicite à instruire, distincte d'une évolution permanente SFIA v2.6. Aucun commit/push projet autorisé par cette discussion ; aucune modification de template ou de gate.


## 16. Snapshot DEV et arbitrage D3 instruit — 27/11/2026

GO ponctuel Morris de publication du candidat DEV sans CI, formulé après §15.3 ; pas de changement de doctrine. Snapshot [53b9d452](https://github.com/mcleland147/sfia-workspace/tree/53b9d452ab73732eef82677ab9a90529ccd973c8), tree `18e8fd99a88396fed7041f146c46bd54f1f75658`, parent 58ca9486, 87 fichiers du commit, branche projet et main 997897fd vérifiés par lecture Git distante. [Handoff](https://github.com/mcleland147/sfia-workspace/blob/f01bf5526804c47e21e217b762cf52c83bbd7a3c/sfia-review-handoff/latest-chatgpt-review.md) commit f01bf5526804c47e21e217b762cf52c83bbd7a3c / blob 58a5b4a5b556233b08bd29e939ff720abedea004 vérifiés. 125 commits ahead, scan secrets sans détection, absence de runs CI/PR, RECETTE préservée et deux chemins tmp exclus rapportés par Cursor ; aucune nouvelle exécution indépendante. CI main/PR only vérifiée sur main précédemment, configuration candidate vérifiée par Cursor. Publication ≠ PASS CI, validation E2, promotion, déploiement ou adoption. GO consommé pour ce snapshot seulement. Roadmap candidate du 27/11 porte encore l'état historique branche locale non publiée ; cette section trace l'état courant sans modification normative.

### 16.1 Diagnostic direct depuis snapshot immuable

Chemins relatifs à web/src/domains/ du snapshot.
- conversation/service.ts blob 51ed348c2a5000fb5f1345bf38c051f34a2fbef3, 4801 lignes : qualification stashed avant effets L1728–1774, D4 préalable L2008–2216, D5/D6 L2217–2365, D4 restante/normale L2534–2653. Le contrôle dependsOn D5/D6 est effectué en L2252–2283 ; remaining D4 est filtrée uniquement par appartenance à l'ensemble early, sans contrôle de ses propres dépendances, confirmé également sur la branche normale. L'early D4 bloque explicitement un prédécesseur D5/D6 non encore exécuté. Limite de séquencement confirmée par inspection ; pas incident runtime reproduit.
- conversation/semantic-qualification.ts blob efa03dd7d3c895b5b620d45314277e84d1a75840 L451–520 : validation IDs, références, self et cycles existe déjà. L702–750 : ordre D5/D6 limité au sous-ensemble ; L1066–1098 : extraction des propositions D4 ne transmet pas dependsOn. knowledge/service.ts blob 7b18ace3c98358f5d3ecbe02628a213acfa8fd57 L1410–1580 : D4 traite un batch propriétaire et précrée les sujets, sans contrat de dépendances inter-domaines. Les propriétaires ne doivent pas devenir un second conducteur.
- pilotage/conversation-authority.ts blob 08631798b9a712f55065ec7240ff14393a18ff2c L303–510 : reconstitution C02 par clé/intent, relecture projection avant commande, pas de fallback lexical dans ce chemin, USER_MESSAGE D5 PROPOSE/RETAIN propriétaire. pilotage/service.ts L612–618, L717, L860–870 : forecast durable et refus body client préservés par inspection. Ne pas réintroduire forecast client.
- conversation/service.ts L4435–4510 : restitution post-effet existante ; qualification et réponse préparées avant effets, ce qui impose de distinguer ordonnancement d'effet et nouvelle compréhension si un résultat préalable modifie matériellement la suite.

### 16.2 Proposition d'arbitrage (non décidée)

Recommandation : supprimer les exceptions early/remaining pour la conduite des effets D4 connaissance / D5 / D6 et appliquer, dans D3 existant, un seul séquencement déterministe par intentions déjà qualifiées, dépendances et résultats propriétaires. Réutiliser la validation de graphe existante, stash, clés, fencing, résultats et C02 ; pas de nouveau moteur, stockage, agent, autorité ou appel IA systématique. Exécuter uniquement les intentions prêtes, grouper les propositions D4 compatibles en conservant les références parent/enfant et règles E1 ; vérifier toutes les préconditions avant mutation, y compris D4. Résultat PARTIAL/FAILED/UNKNOWN non satisfaisant par défaut, dépendances terminales explicitement non exécutées ; indépendantes poursuivent si ownership/autorité le permettent. Préserver la distinction entre dépendance technique et autorisation métier ; si résultat change le contenu nécessaire, continuation cognitive existante et requalification ciblée si requise, pas exécution aveugle du contenu préconstruit. Aucun basculement de D4 documentaire, D2, D7, D8/D9 ou publication/merge vers une nouvelle orchestration dans ce lot ; dépendances hors propriétaires intégrés non satisfaites sans preuve effective du résultat, limites explicites. Qualifier les interfaces avec ces chemins avant modification, pas de prétention à couverture globale.

Alternative A : conserver les trois phases et compléter les gardes D4 restantes ; réduit le risque de mutation prématurée mais conserve la limite d'ordre alterné. Non recommandé comme cible. Alternative B (recommandée) : conduite uniforme bornée dans D3, sans réécriture du moteur cognitif. Alternative C : orchestrateur générique/persistant tous domaines, non justifié par preuves actuelles, OUT. Blast radius B : conversation/service, qualification/bindings/agrégation et interfaces D4/D5/D6, checkpoint/replay, provenance, restitution et tests ; aucun changement de schéma attendu, pas de modification de politique allocation/FinOps/UX. Sortie : ordre alterné valide D6→D4→D5 (autorité et résultat exact), négatif D5/D6 refusé→D4 bloquée sans bloquer indépendante, batch E1 + replay déjà acquis préservés, preuve ciblée PostgreSQL isolée, diff et docs synchronisés. Pas de LIVE. Pas de nouveau mandat Cursor tant que Morris n'a pas arbitré cette orientation ; tout commit/push suivant exige GO distinct. Gate E2 non acquis ; E3 non engagé. Réserves de preuve §15.3 inchangées.
