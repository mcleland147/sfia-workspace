# SFIA Studio Next — Suivi du macro-lot correctif intégré ML5
## Fiabilisation de la conduite et de la continuité projet

| Champ | Valeur |
| --- | --- |
| Date / version | 27 novembre 2026 — v0.1, état d'entrée après revue de la reprise |
| Nature | Suivi opérationnel documentaire D1, non normatif, non mergé ; ne remplace ni Roadmap, ni registre de couverture ML5, ni Delivery History, ni contrats |
| Mandat | GO explicite Morris du 27/11 pour créer ce document sur Git et le maintenir à chaque revue Cursor ; cinq ensembles et revues intermédiaires approuvés |
| Autorités | Morris arbitre les réserves et gates ; ChatGPT tient ce suivi et revoit ; Cursor construit et fournit les preuves |
| Programme | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / 17 MP OPEN EN RECETTE / T09 NOT SENT / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |
| Git | main `997897fd7cf914771e7d08e8030dc7123fab7d25` ; branche documentaire candidate `docs/next-openai-studio-convergence-20261126`, base avant création `f6cfd5ac01f848f6708501e1a390f37243721ab9` |
| DEV | Branche locale rapportée `sfia/next-ml5-integrated-delivery-20261123` @ `58ca9486003805f74e69a0842f2c0792a7184437`, worktree dirty rapporté ; état local NON OBSERVÉ directement par ChatGPT ; :3100 / PG :5433 rapportés |
| RECETTE protégée | `e8e6e06961fa0a7224db3badb3b591b8be8046ac` / BUILD `rpEczSp61evIZ7d6fnIWR` / PG :5434 schéma 027, :3200 ; MaintiPlan suspendu après T08 ; WEB et Admin OFF |
| Gate courant | NOT READY pour qualification LIVE ; GO Morris ensemble 1 en DEV uniquement, sous contrat Cursor distinct. Aucun GO commit projet, LIVE, cutover, PR, merge ou adoption |

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
| E1 Continuité cognitive et fonctionnelle | B.1–B.8 ; D3/D4/D5/D6, données/projections ; Journal et réutilisation | GO Morris, mandat à exécuter | Contrats propriétaires + socle A existant ; preuves déterministes et navigateur ciblées ; passage E2 après revue |
| E2 Garanties cognitives résiduelles | A.1–A.7, intégration multi-intentions, reprise, recherche hybride, OBS/FinOps | À FAIRE (acquis antérieurs conservés) | Interfaces E1 ; risques d'autorité critiques signalés immédiatement ; calibration préparée, pas de LIVE |
| E3 Conformité UX et panneau droit | D.1–D.6 ; projections et accès directs ; Figma | À FAIRE | Données E1, états E2 ; navigateur réel DEV simulé fournisseur |
| E4 Audio et compositeur | C.1–C.5 | À FAIRE | Interfaces E2/E3 ; transport et robustesse DET ; dictée LIVE gate |
| E5 Qualification intégrée et exit | Candidat unique, suites applicables, 25 parcours, 18 oracles, docs/pack, mandat LIVE borné | À FAIRE | E1–E4 revus ; aucun GO LIVE avant décision Morris |

Séquence approuvée ; parallélisme uniquement après qualification explicite des interfaces/fichiers, intégrateur et tests communs. Revue ChatGPT après chaque ensemble avant de poursuivre le suivant dépendant. Pas de nouveau mandat général de rattrapage par défaut. Un blocage propriétaire partagé est instruit au plus tôt, pas repoussé mécaniquement.

## 3. Registre des 26 sous-ensembles (état indépendant initial)

| ID | Responsable | Acquis rapporté / preuve publiée | Reliquat obligatoire |
| --- | --- | --- | --- |
| A.1 | E2 | Option C, qualified exact, tests ciblés | Cohérence politique/qualification modèle-effort-lane, fallback, droits, calibrage ; LIVE séparé |
| A.2 | E2 | listPilotageEffectBindings, guidance typée | Négations, ambiguïtés, langues, multi-intentions naturelles ; pas de lexique |
| A.3 | E2 | Deux D5 appliqués PG, agrégat et ownership | Dépendances inter-capacités (notamment D4), refus partiels, reprise/idempotence, résultat de chaque effet |
| A.4 | E2 | Trim contexte, régression revision>0 corrigée (4 PG PASS) | Fraîcheur, reprise froide, non-régression connaissance, lectures et mesure T08 |
| A.5 | E2 | Helper terminal, IDLE corrigé après assemblage | Vérifier états/effets réels et travail restant, tests finaux et diff exact |
| A.6 | E2 | Restitution améliorée, PARTIAL déclaré | Corrélation message/travail/segment/requête/capacité/effet/usage ; activité spécifique réelle |
| A.7 | E2 | Filtre billable, attribution et couverture | Calculs/populations, estimations vs facturation, cache, finalisation, attribution projet, réconciliation fournisseur LIVE |
| B.1 | E1 | maybeCapitalizeFromExchange et zéro proposition | Qualification apports Pilote ET résultats Nora, mutations sélectives, reprise et preuve source→effet |
| B.2 | E1 | parentSubjectId, test PG enfant d'un parent précréé | Parent+enfant dans même travail, opérations de réorganisation accessibles à Nora, liens/provenance, invalides, autonomie LIVE |
| B.3 | E1 | Structures et révisions existantes | Synthèses à jour, consolidation acquis, contradictions, historique/provenance, référence message exact, pas de faux fait |
| B.4 | E1 | PG résolution factuelle + projection | Cycle de vie complet, rattachement, rapprochement, titre court canonique, refus de résolution gouvernée, historique |
| B.5 | E1 | D6 existant, déclaré HORS P2 à tort | Arbitrage local/durable, GO, restriction/révocation, autorité, provenance, négatifs ; intégrer D6 sans dupliquer |
| B.6 | E1 | Libellés améliorés, objectif displayable | Trajectoire envisagée/retenue évolutive, finalité contextualisée, liens acquis/points, CKI, enum résiduel, un cycle actif |
| B.7 | E1 | Outils D4 et trim A.4 | Sélection/lecture et réutilisation réelle de sujets, références et versions ; fraîcheur/reprise ; trace et mesure LIVE |
| B.8 | E1 | Compteur doc identité, points OPEN | Compteurs sujets/décisions/doc PG→API→DOM, cohérence 4 surfaces, rafraîchissement ; E3 propriétaire du panneau UX et consultations |
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
| 03 Points ouverts | E1 | PARTIEL | Cycle de vie et projections ; E3 accès directs |
| 04 Animation | E3 | PARTIEL | Preuve dynamique sur état final |
| 05 Lisibilité | E3 | PARTIEL | Comparaisons avant/après, typographie |
| 06 Dictée | E4 | GATE LIVE + DET PARTIEL | Transport, erreurs, reprise ; Realtime distinct |
| 07 Onde audio | E4 | ACQUIS CIBLÉ unit | Préserver et vérifier signal réel |
| 08 Panneau droit | E3 | MANQUANT/PARTIEL | Récents multitypes, accès direct/version/droits, Figma ; E1 données points |
| 09 Multi-intentions | E2 | PARTIEL | PG nominal acquis, négatifs/dépendances/reprise ; LIVE naturel |
| 10 Continuité | E1 | MANQUANT/PARTIEL | B.1–B.7, preuve autonome LIVE ultérieure |
| 11 Restitution/activité | E2 | PARTIEL | OBS réelle ; E3 restitution UX |
| 12 Trajectoire | E1 | MANQUANT/PARTIEL | Évolution D5 et finalité, projections |
| 13 Compteurs | E1 | PARTIEL | Documents acquis ciblé, sujets/décisions + API/DOM |
| 14 Performance | E2 | GATE LIVE + DET à vérifier | T08 909844 tokens / 6 segments / 13m33 ; 40 observations ≠ 40 HTTP ; qualité comparable |
| 15 Allocation | E2 | GATE LIVE | Admission DET acquise ciblée, calibration et politique |
| 16 FinOps | E2 | GATE LIVE + DET à vérifier | Calculs/attribution, coût estimé ≠ facturé |
| 17 Paramètres | E3 | PARTIEL | Montage acquis, parcours toutes variantes |

Exigences complémentaires non négociables : arborescence dynamique, qualification des résultats Nora, réutilisation et trajectoire vivante (E1) ; compositeur partagé (E4) ; pied de rail commun et cinq récents (E3) ; compteur bibliothèque (E1). Préserver MP et exigences même si déjà implémentées : démontrer sans réécriture inutile.

## 5. Oracles de continuité §10 (18) — suivi d'exécution, pas simple mapping

| # | Oracle | Responsable / intégration | État initial / preuve restant à obtenir |
| --- | --- | --- | --- |
| 1 | Exploration → création | E1/E5 | Tests historiques ; identité/rattachement bout en bout |
| 2 | Hiérarchie | E1 | PG parent précréé ; parent+enfant, reprise, LIVE naturel |
| 3 | Réorganisation | E1 | reparent historique cité ; raccordement, invariants, provenance, LIVE |
| 4 | Apport Pilote + investigation Nora | E1 | Partiel ; corrélation source→mutation et LIVE |
| 5 | Correction acquis | E1 | Tests historiques cités ; consolidation/version/historique à exercer |
| 6 | Résolution question | E1/E3 | PG résolution acquis ciblé ; négatifs et vues synchronisées |
| 7 | Arbitrage local vs durable | E1/E2 | D6 préservé mais couverture insuffisante ; actes et négatifs |
| 8 | Demande combinée | E2/E1 | PG nominal ; dépendances, reprise, LIVE T05/T06 |
| 9 | Réorientation Figma | E1 | Partiel ; D5 persistant et négatifs, LIVE naturel |
| 10 | Finalité cycle | E1 | Affichage partiel ; liens D4 et méthode |
| 11 | Compteurs | E1 | Doc identité unit ; PG→API→DOM tous compteurs |
| 12 | 5 consultations multitypes | E3 | Manquant ; 6 ressources, revisite/version/droits/reprise |
| 13 | Points panneau | E1/E3 | PG OPEN ; titre et lien exact, vue réactualisée |
| 14 | Navigation et interruption | E1/E3/E5 | Partiel ; 4 surfaces, fraîcheur/reprise |
| 15 | Réutilisation longue | E1/E2 | Trim unit ; lectures réelles, corpus comparable LIVE |
| 16 | V1→V2 MaintiPlan T09 | E1/E2/E5 | T09 non envoyé ; DET analogue DEV puis GO RECETTE distinct |
| 17 | Échange sans apport | E1 | Zéro proposition cité ; négatif et absence d'appel superflu |
| 18 | Isolation / échec | E1/E2/E5 | Tests historiques ; droits, concurrence, reprise et effets non persistés |

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
| 27/11 | Présent document | E1 à lancer sous Cycle 8 Critical DEV ; aucun nouveau statut de maturité |

Prochaine revue : E1 B.1–B.8. Vérifier code/propriétaires, 18 oracles concernés, preuves de raccordement et tests négatifs ; préserver l'existant ; aucune réécriture gratuite. Les exigences de réutilisation/hiérarchisation naturelle restent à qualifier LIVE mais leur raccordement déterministe doit être complet avant. E2 ensuite, selon revue et gate Morris. Aucun GO LIVE, candidat RECETTE, reprise T09 ou acceptation Livraison 1 implicite.

Trajectoire finale : E1→E2→E3→E4→E5 (revues intermédiaires) → arbitrage réserves et GO LIVE borné → qualification LIVE → GO candidat et cutover RECETTE distincts → rejeu ciblé 17 MP → reprise T09 jusqu'au seuil de réalisation → gate Livraison 1 → Livraison 2 sous mandat distinct.

Morris décide ; ChatGPT prépare, revoit et tient le suivi ; Cursor exécute ; Git trace.
