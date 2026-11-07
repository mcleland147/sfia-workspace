# SFIA Studio Next — Qualification de convergence UX du parcours existant (ML1–ML3)

**Statut :** `DOCUMENTED / QUALIFICATION CANDIDATE — A1/A2/A3 VALIDÉS EN PÉRIMÈTRE PAR MORRIS ; CONTRAT NON ENCORE VALIDÉ`
**Date de qualification :** 2026-11-07 (Europe/Paris)
**Dépôt et référence :** `mcleland147/sfia-workspace`, `main@d37ea0882ee9256ec206e2f0523a71bf13674e88` — SHA Git distant observé.
**État local, staged/untracked, déploiement et session navigateur :** `NON OBSERVÉ`. Les deux captures runtime sont celles communiquées par Morris, pas des captures reproductibles sur un SHA identifié.
**Source UX :** fichier Figma `itgvCulInEnFY6DvgIegvP`, page `01 · Parcours produit — Référence UX R3` (`94:49`), consultée en lecture native. Page à **242 frames** dont écrans ML4 218–235 et INDEX déjà validés ; aucune mutation Figma réalisée lors de cette qualification.
**Autorité :** Morris a validé **A1, A2, A3** et autorisé le **versement documentaire borné** sur une branche Git ainsi que les addenda de traçabilité R3/R5. Aucun GO code/DB/Figma, aucune PR, aucun merge, aucune promotion ou adoption. Voir [décision des arbitrages](../../governance/decisions/2026-11-07-convergence-ux-arbitrages.md).

## 1. Décision de trajectoire applicable

Le document `governance/decisions/2026-11-07-ml4-ux-validation-convergence.md`, désormais intégré dans `main` via PR #663, définit la suite : **préparation documentaire ML4 achevée et intégrée → convergence UX des capacités ML1–ML3 sous contrat et GO distinct → construction technique ML4 Git → ML5 Cursor → R6**. La présente qualification applique cet ordre sans réouvrir les clôtures historiques ML1 et ML3 ni inventer une clôture formelle ML2.

La convergence est **un résultat utilisateur transversal de R5**, nommé par responsabilité « **Parcours Pilote–Nora intégré** » (nom candidat, non nom de code). Elle ne nécessite pas de micro-lots indépendants pour chaque écran ni de macro-lot numéroté supplémentaire sans décision Morris.

## 2. Référentiels et preuves examinées

- **Gouvernance :** `governance/SEF.md`, `governance/roadmap.md`, décision de séquencement 2026-11-07, `governance/product-naming-conventions.md`.
- **UX R3 :** `ux-ui/audit-couverture-ux-r3.md` notamment §§7.3 et 9.2–9.5 ; `ux-ui/espace-projet-interaction-pilote-nora.md` (contrats courants en fin de document) ; `ux-ui/contrat-transposition-figma-code.md` ; `ux-ui/revue-formelle-sortie-r3.md` ; frames Figma natives examinées et quatre captures Figma consultées : **01** (`94:50`), **03** (`94:214`), **24** (`127:106`), **40** (`129:72`).
- **Construction déjà livrée :** `construction/ml1-entree-et-continuite/matrice-tracabilite.md`, `construction/ml2-production-et-capitalisation-nora/matrice-tracabilite.md`, `construction/ml2-production-et-capitalisation-nora/contrat-visuel-figma-ml2.md`, `construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md`, `construction/pilotage-et-decisions/specification-technique.md` et `construction/reference-delivery-r5.md`.
- **Runtime code sur main :** `web/src/app/layout.tsx`, `globals.css`, pages login/portfolio/sas/projet, `components/PilotagePanel.tsx`, `SafeMarkdown.tsx`, routes `/api/portfolio`, `/api/preparations`, `/api/projects/[projectId]`, `/api/preparations/[preparationId]/documents`, `/api/preparations/[preparationId]/knowledge` et leurs services D1–D6.
- **Preuve produit :** PR #663 mergée, deux CI vertes au dernier contrôle ; preuves ML1–ML3 documentées par lot. **Aucun test utilisateur, visuel ou navigateur de convergence n'a été effectué dans cette analyse.** Réussir la CI précédente ne démontre pas la fidélité au design R3.

**Lien Figma racine :** https://www.figma.com/design/itgvCulInEnFY6DvgIegvP
**Liens Git racine :** https://github.com/mcleland147/sfia-workspace/tree/d37ea0882ee9256ec206e2f0523a71bf13674e88/projects/sfia-studio-next

## 3. Constat transverse — problème à résoudre

**Capacité métier :** les propriétaires D1–D6 sont implémentés à des niveaux déjà validés dans ML1–ML3 ; leurs statuts et réserves historiques restent applicables.
**Présentation :** le shell de `web/src/app/layout.tsx` possède un rail de 246 px avec seulement « Portefeuille » et « Connexion ». Le portefeuille présente les projets dans une liste technique, le sas a ses propres onglets `Travail / Journal — Sujets / Document`, le projet ses onglets `Travail / Pilotage / Journal / Documents`, et le pilotage est regroupé dans `PilotagePanel.tsx` (920 lignes) avec affichage dense de champs et de statuts. Les captures de Morris concordent avec cette conception.
**Référence Figma :** système de navigation hiérarchisé entre espace personnel, projet, travail Nora, journal, trajectoire/méthode, décisions et documents ; composition visuelle centrée sur la tâche et états distincts. Ce **n'est pas une simple retouche de couleurs** : navigation, provenance et distinction des actes doivent être testées en usage.

**Principe de réalisation :** réutiliser les services métier et les API existants. Le shell, les projections, les points d'entrée, les composants de surface, les variantes d'état et la navigation peuvent changer ; **ne pas** réinventer HumanDecision, états de cycle, révision D4, motorisation de Nora ni moteur d'effets.

## 4. Matrice de convergence initiale (sources code + R3)

**Lecture des statuts :** `EXISTE` = service/élément de code identifiable ; `PARTIEL` = code présent mais parcours UX incomplet ; `À QUALIFIER` = dépendance fonctionnelle ou choix produit. **Aucun statut `PASS`, `COVERAGE VERIFIED` ou `BEHAVIOR PROVEN` n'est donné.** Les identifiants `CU-01..16` sont des repères d'analyse, pas de nouvelles RG/PF normatives.

| Repère | Capacité / parcours actuel | Sources R3 Figma principales | Constat vérifié sur `main` | Convergence candidate / frontière | Risque |
|---|---|---|---|---|---|
| `CU-01` | Connexion et identité D1 | 62 `158:120`, 63 `158:192`, 66 `158:408` | Page `/login`, GitHub OAuth et session ; visualisation technique et entrée d'essai DEV conditionnelle au contexte | Écran de connexion conforme R3 ; message clair « identité Studio ≠ droits Git » ; états d'attente/refus/expiration réels | UX/SEC |
| `CU-02` | Portefeuille personnel | 01 `94:50`, 64 `158:264`, 65 `158:336`, 71 `158:768` | Liste simple, ID brut, bouton « Ouvrir », statut et compte de préparations | Cockpit, cartes de projets, accès clair à une préparation et états vide/erreur/chargement ; ne pas inférer les « dernières activités » si le service ne les expose pas | UX/D1–D2 |
| `CU-03` | Retrouver une préparation non rattachée | 73 `158:912`, 74 `159:145`, 88 `159:1153` | `loadPortfolio` compte les préparations ouvertes **sans les lister** ; `/api/preparations` expose seulement POST qui, sans ID, **crée une nouvelle préparation** | **A1 VALIDÉ EN PÉRIMÈTRE** : exposer une reprise ciblée, vraisemblablement lecture/API bornée à l'utilisateur ; ne pas fabriquer une liste depuis le compteur | **FONCTIONNEL/API** |
| `CU-04` | Sas, aperçu et création gouvernée | 02 `94:135`, 75 `159:217`, 76 `159:289`, 77–81 `159:*`, 13 `96:262` | Conversation, aperçu, commande séparée `create-project`, idempotence et bascule projet existent ; composition provisoire | Un chemin lisible clarification → aperçu → inspection → acte de création → retour vérifié au bon fil, sans ouverture de cycle ou Git induite | UX/D2 |
| `CU-05` | Conversation Nora et activité | 03 `94:214`, 109 `161:216`, 110 `161:288`, 206–208 `281:*` | Texte + SafeMarkdown + statut `preparing/error` et persistance ; longues cartes techniques et flux de lecture peu maîtrisé | Travail central, réponses lisibles, activité **réellement observable seulement**, contexte compact et inspection sans faux outil/streaming | UX/D3 |
| `CU-06` | Composition de réponse et choix | 03, 04 `94:370`, 112 `161:432`, 118 `161:864` | Rendu HTML échappé Markdown et boutons externes au message ; pas de moteur générique de cartes interactives Nora constaté | Rendre lisibles les structures réellement produites (texte/listes/tableaux/liens), **pas de commandes D6/D7 implicites** depuis la prose Nora ; choix actionnables seulement si API/mandat existants | **UX/FONCTIONNEL** |
| `CU-07` | Documents et révisions D4 | 04, 18 `97:359`, 89–96 `160:*`, 205 `241:385` | Sas : sauvegarde, révision sur base et diff ; projet : **liste/inspection en lecture seule** dans son onglet Documents | **A2 VALIDÉ EN PÉRIMÈTRE** : parcours document cohérent après création ; réemployer l'API de révision par `preparationId` après vérification d'ownership et d'accès ; aucune seconde source de vérité | **UX/D4/API** |
| `CU-08` | Journal de connaissances D4 | 05 `94:515`, 97–100 `160:*`, 110 | API `rename/merge/split` ; sas : renommer/séparer ; projet : surtout consulter sujets/acquis | Journal unifié avec sujets, acquis, points ouverts et opérations réellement autorisées ; vérifier la nécessité d'exposer `merge` et son maintien de provenance | UX/D4 |
| `CU-09` | Navigation contextuelle et retour | 01–05, 13/14, 89, 110 | Deux jeux d'onglets locaux sans route/surface commune ; peu de liens profonds vers l'origine | Shell commun, route et panneau de destination compréhensibles, retour à la source/document/fil et maintien du projet actif | UX/D1–D4 |
| `CU-10` | Trajectoire et cycle D5 | 22 `125:33`, 23–27 `127:*`, 47 `131:156`, 52–56 `143:*` | Projections et commandes cycle via `PilotagePanel` ; affichage formulaire technique | Trajectoire et cycle sous forme d'états/maturité, inspections conditionnelles et actes explicites ; ne pas ouvrir un cycle sur simple suggestion | UX/D5–D6 |
| `CU-11` | Méthodes et guidance CKI | 28–29 `127:*`, 39 `128:622`, 48 `131:227`, 58–60 | Réf/version présentes, méthodes retain/replace/withdraw ; disponibilité CKI et limite disponibles via projection | Méthode lisible et guidance réellement résolue ; indisponibilité honnête ; ne pas inventer un nouveau registre CKI | UX/D5 |
| `CU-12` | Décisions humaines D6 | 30–32 `127/128:*`, 40 `129:72`, 43 `129:286` | Journal de décisions intégré dans `PilotagePanel`, actes de révision et historique, légende technique dense | Journal des décisions consultable et révision traçable, état applicable/retiré précis ; Nora ne décide jamais à la place du Pilote | UX/**AUTH** |
| `CU-13` | Restrictions / suspensions | 33 `128:195`, 34 `128:266`, 41 `129:144` | Commandes Apply/Lift, ciblage `CYCLE_MUTATION` et journal existants ; type/ID bruts exposés | Exposer portée et conséquence avant confirmation, blocage réel et historique ; ne pas réinterpréter un conflit technique comme refus D6 | UX/**AUTH** |
| `CU-14` | Reprise après réponse incertaine | 78 `159:433`, 92–93, 52–56 et 111 | Réconciliation des commandes/turns, clés et erreurs déjà codées ; écran affiche parfois clés internes | Différencier « en cours », « résultat inconnu », « confirmé », « refusé » ; garder réconciliation/idempotence et éviter un bouton de retry aveugle | UX/**FIABILITÉ** |
| `CU-15` | Responsive et accessibilité | 10, 216 `282:468`, 217 `282:492` | Le rail global est `hidden md:flex`, **aucune navigation mobile équivalente repérée dans le layout** ; formulaires fonctionnels mais faibles contrats de focus/reflow | Navigation accessible à 390/320 px et clavier, zoom 200 %, lisibilité des tableaux et fil long, navigation par régions / focus | **UX/A11Y** |
| `CU-16` | Frontières non livrées ML4/ML5 | 06–09, 12, 135–140, 209–215, 218–235 | Pas de runtime D7/D8/D9 Git dans ML1–ML3 ; maquettes de réalisation/Intégrations existent | **EXCLURE** tout effet technique, faux accès Git, fausse PR/merge/STOP Cursor et toute animation de tâches non observées ; ne garder que navigation sans action ou état clairement non disponible | **SEC/AUTH** |

### Deux écarts à arbitrer, pas à maquiller en seuls composants

1. **A1 — Reprendre les préparations.** Le backend comptabilise les préparations non liées, mais l'API portefeuille retourne seulement ce **compteur** et non une collection exploitable. L'action « Ouvrir un sas » crée une préparation neuve. Les URLs de préparation permettent de recharger une préparation connue, mais aucun parcours portefeuille ne la retrouve aujourd'hui. **Décision Morris A1 : oui, la convergence inclut la reprise ciblée des préparations non rattachées.** La liste, les champs et le contrat d'API restent à concevoir ; l'accès doit être filtré par propriétaire et la continuité vérifiée après reconnexion. Ne pas préjuger du modèle de tri ou de l'historique à exposer.
2. **A2 — Édition documentaire dans l'espace projet.** Les routes D4 sont adressées par `preparationId`, y compris une fois le projet rattaché ; la page projet dispose de cet ID mais **n'expose pas de bouton de révision**. Le parcours UX cible implique documents consultables, inspection puis révision appropriée. **Décision Morris A2 : la révision documentaire doit être accessible depuis l'espace projet.** La présentation exacte reste à qualifier : entrée contextuelle vers le document de sa préparation, ou écran projet documents qui consomme les mêmes services D4. Préférer **un seul propriétaire et un seul workflow de révision** ; confirmer la portée métier et les états après projet avant de développer.

Un troisième choix, **A3**, concerne la **richesse des réponses Nora** : transposer le rendu et les interactions **réellement supportés** maintenant, ou ajouter au lot des commandes interactives structurées non encore implémentées. **Décision Morris A3 : retenir la présentation sûre, lisible et inspectable des réponses effectivement prises en charge.** Aucune grammaire générique de nouvelles commandes ou actions interactives Nora n'est créée dans ce lot ; toute nouvelle sémantique d'effet exigerait un arbitrage fonctionnel séparé.

## 5. Résultat et frontières proposés

**Résultat Pilote :** « Depuis une session Studio, je retrouve mon travail, traverse portefeuille → sas → projet, échange avec Nora, consulte/révise les documents et les acquis, visualise ma trajectoire et mes décisions, et reprends après incident sans perdre le contexte ni déclencher d'effet non autorisé. »

**IN :** shell/navigation cohérents, vues R3 applicables ML1–ML3, design system existant, connexion/portfolio/sas/projet, Nora et documents/Journal, trajectoire/CKI/décisions/restrictions, états d'erreur/récupération et responsive/accessibilité, tests intégrés, documentation architecture/code synchronisée.

**OUT :** construire GitHub App, connecter des dépôts, effets D7/D9, résultats/preuves D8 complets, exécution Cursor/CI/DevOps, nouvelle mémoire D4, nouveaux modèles d'HumanDecision, système de plugins, pagination/collaboration avancée sans besoin prouvé, rafraîchissement cosmétique illimité de 242 frames et adoption globale.

**Dépendances :** branche `main` intégrée PR #663 ; R1/R2/R3/R4 et specs ML1–ML3 ; données et services réels existants ; Figma R3 natif ; contrôles ENV-01 et réserves reportées ; Cursor SFIA v2.6 **uniquement après GO de construction**.

**Frontières propriétaires :** D1 session ; D2 portefeuille/sas/projet ; D3 Nora cognitive ; D4 documents et connaissance ; D5 état de cycle/méthode/CKI ; D6 autorité/décisions/restrictions. L'UX projette ces propriétaires et n'ajoute aucun moteur métier. D7/D8/D9 restent hors du travail de convergence.

## 6. Organisation en un résultat cohérent, sans micro-lots

**Capacité A — Entrer et reprendre :** shell et navigation, connexion/portfolio/sas/projet, sélection de projet, préparations reprenables selon A1 validé, avec contrat d'accès encore à finaliser, états empty/expired/unknown. Mise en place d'une ossature réutilisable par ML4.

**Capacité B — Travailler avec Nora et les acquis :** fil conversationnel, rendu sûr et états d'activité, inspection documentaire, versions/diff/conflit, journal/sujets/points ouverts, retour contextuel. A2 et A3 approuvés en portée ; détailler leurs transitions et états dans le contrat final avant construction.

**Capacité C — Piloter et décider :** trajectoire, cycles, méthode/CKI, décisions, révisions, restrictions, journal, retour au travail, états inconnus et reprise sans changement de source d'autorité.

**Intégration transversale commune :** mêmes composants, conventions et routes ; contrats QA / visuels, CI, isolation, clavier, mobile, taux d'erreurs et preuves sur le **même SHA**. A/B/C sont des sous-parcours d'un **seul macro-résultat** avec une recette intégrée ; ce ne sont pas trois mini-projets ni des changements normatifs automatiques.

## 7. Matrice de réception proposée (`UXC-01..14`, candidate)

| ID | Preuve discriminante | Attendu / interdiction |
|---|---|---|
| `UXC-01` | Connexion + portefeuille sans Git | Accès personnel, expiration/refus honnêtes ; aucune permission Git induite |
| `UXC-02` | Portefeuille vide/chargé et reprise d'un sas | Projets exacts ; A1 validé : reprise ciblée sans créer une préparation neuve |
| `UXC-03` | Sas → aperçu → création → projet | Même contexte récupéré et un seul projet réellement créé, pas de cycle ou mandat implicite |
| `UXC-04` | Conversation longue Nora + changement de surface | Fil durable et lisible, scroll/focus stables, aucune activité externe inventée |
| `UXC-05` | Sources / contexte et Markdown sûr | Tableaux, listes, liens, refus de contenu hostile ; aucune commande exécutable depuis une réponse |
| `UXC-06` | Documents dans sas puis projet | Consultation, révision sur base, diff, conflit, provenance et historique inchangés ; A2 validé ; service D4 unique |
| `UXC-07` | Journal de connaissance | Sujets, acquis, points ouverts, filiation ; opérations réellement implémentées et gouvernées |
| `UXC-08` | Projet sans cycle / sans méthode | État normal représenté, proposition ≠ effet ; aucun faux état « en retard » |
| `UXC-09` | Cycle actif + méthode + guidance | Projection D5 vraie, CKI indisponible explicité, fermeture/transition gouvernées |
| `UXC-10` | Décision et restriction D6 | Journal consultable, révision/révocation traçables, portée/refus conformes à l'autorité actuelle |
| `UXC-11` | Réseau incertain, double clic, rechargement | PENDING/UNKNOWN/CONFIRMED distincts, relecture avant retry, aucune duplication métier |
| `UXC-12` | 2 Pilotes / 2 projets + navigation | Isolation et provenance maintenues malgré le nouveau shell |
| `UXC-13` | Rendu réel vs Figma (1680/1280/390/320, zoom 200 %) | Capture navigateur à SHA figé, diff visuel qualifié, focus/clavier/reflow/contraste, écarts motivés et arbitrés |
| `UXC-14` | Régression intégrée ML1–ML3 + gates | Tests/DB/BROWSER/Nora LIVE ciblés conservés, interdiction de simuler D7/D8/D9, revue Morris |

**États de preuve requis** : `DOCUMENTED` à l'étape actuelle ; `VALIDATED SPEC` pour ce lot après **revue et approbation distinctes du contrat d'acceptation complet** (les seuls arbitrages A1–A3 sont déjà validés en périmètre) ; `IMPLEMENTED` après code ; `COVERAGE VERIFIED` après tests ; `BEHAVIOR PROVEN` après navigateur et effets réels pertinents ; `ADOPTED` seulement si gate formel ultérieur. Le statut Figma R3 déjà validé ne valide pas automatiquement la transposition runtime.

## 8. Contrat visuel de référence à figer avant code

**Parcours canonique minimal (nœuds effectifs)** :

- **Entrée/identité** : 62 (`158:120`), 63 (`158:192`), 01 (`94:50`), 64 (`158:264`), 65 (`158:336`).
- **Sas et continuité** : 02 (`94:135`), 75 (`159:217`), 76 (`159:289`), 78 (`159:433`), 13 (`96:262`), 14 (`96:370`).
- **Nora et connaissance** : 03 (`94:214`), 109 (`161:216`), 110 (`161:288`), 05 (`94:515`), 97 (`160:751`), 100 (`160:967`), 206 (`281:389`), 208 (`281:751`).
- **Documents** : 04 (`94:370`), 18 (`97:359`), 89 (`160:175`), 90 (`160:247`), 91 (`160:319`), 92 (`160:391`), 93 (`160:463`), 205 (`241:385`).
- **Pilotage/autorité** : 22 (`125:33`), 24 (`127:106`), 28 (`127:391`), 29 (`127:462`), 31 (`128:52`), 33 (`128:195`), 34 (`128:266`), 40 (`129:72`), 54 (`143:447`), 58 (`144:179`).
- **Responsive** : 10 (`94:1037`), 216 (`282:468`), 217 (`282:492`).

La première extraction profonde doit figer les **compositions et états prioritaires** (01, 02, 03, 04, 05, 22, 24, 40 et variantes d'erreur), puis aller au niveau calque/composant nécessaire pour le code. Ne pas extraire les 242 frames exhaustivement ni annoncer « pixel perfect » sans captures. Les frames 218–235 représentent **ML4 Git** et demeurent hors implémentation dans la convergence.

## 9. Blast radius, réserves et STOP

| Couche | Surface d'impact | Contrôle / exit |
|---|---|---|
| Routes/layout | Navigation et shell global, onglets temporaires | Retour au bon projet/fil et états URL/refresh, sans navigation vers projet tiers |
| UI composants | Extraction de composants existants si utile, responsive et design system | Aucune abstraction de marketplace/plugin, pas de double contrôleur de state |
| D1/D2 | Portefeuille/Préparations/A1 | Session, ownership, reprise, idempotence, évolution API autorisée en principe par A1, mais contrat technique et GO code à instruire |
| D3 | Conversation/composition | `SafeMarkdown` et provenance conservés, aucune injonction depuis source externe |
| D4 | Documents/sujets/A2 | Révisions/conflits/transactions d'origine maintenus ; ne pas déplacer l'autorité dans UI |
| D5/D6 | Pilotage + journal | Appel des commandes existantes, portée/versions/refus/récupération non affaiblis |
| DB/CI | Migrations et fixtures si nécessaires | Ne pas introduire une migration pour un simple écran ; QA PostgreSQL existante et régressions |
| R3/R4/docs | Contrat visuel et as-built | Synchronisation des différences code/doc dans le même lot, qualification `KNOWN GAP` sinon |
| Sécurité | Session, droits, prompt injection, fuite entre projets, visibilités | Pas d'accès Git implicite, aucun secret/ID sensible exposé par défaut |

**STOP immédiat** si la convergence nécessite un nouveau propriétaire d'autorité, un second moteur d'état D5/D6, une permission Git non prévue, un nouveau mode de persistance à portée non bornée, une réinterprétation des actes métier, une action R3 C/D/D9 non implémentée présentée comme disponible ou une transposition Figma qui invaliderait un contrat R2 sans décision Morris. Tout amendement normatif devient D2, et toute construction code relève de Cursor D3 après le pré-check SFIA v2.6.

## 10. Gates et suite

1. **Arbitrages de périmètre Morris :** A1 (reprise ciblée) **validé** ; A2 (révision depuis le projet) **validé** ; A3 (aucun nouveau moteur d'actions Nora) **validé**. Le statut de **contrat d'acceptation complet reste candidat** ; aucun nouveau macro-lot numéroté automatiquement.
2. **Traçabilité documentaire :** qualification, contrat candidat et décision d'arbitrage à publier sur une **branche dédiée**, avec addenda datés R3 et R5. Pas de modification des décisions historiques, pas de PR ni merge.
3. **Contrat UX/technique de convergence :** sélectionner la petite liste de frames R3 à figer, définir routes, navigation, composants, état, exceptions, QA et captures. Clarifier l'intégrateur et l'impact A1/A2 éventuel.
4. **GO technique Cursor distinct** : consulter les routing/template SFIA v2.6 sur Git avant tout prompt ; exécuter code + tests + docs ensemble, pas un chantier design isolé suivi d'un chantier QA isolé.
5. **Recette navigateur Morris** au SHA candidat et revue d'écarts, puis intégration Git selon gates. **ML4 Git technique** ne démarre qu'ensuite.

### Verdict D0

**CONVERGENCE UX WORK QUALIFIED — CANDIDATE, NOT AUTHORIZED FOR BUILD.** Un macro-résultat cohérent est identifiable. Deux écarts montrent pourquoi une simple campagne cosmétique serait insuffisante : **récupération des préparations** et **continuité documentaire du sas au projet**. **Leurs orientations ont été arbitrées par Morris** ; les contrats détaillés de reprise et de révision restent à contractualiser et accepter avant code. Les autres écarts sont majoritairement navigation/hiérarchie/composants/états, à réaliser sans rouvrir les responsabilités D1–D6 déjà construites.

**Historique de l'analyse :** D0 produit sans mutation. **Présent versement :** contribution documentaire Git sur branche candidate sous GO Morris ; aucun code, Figma, PR, merge ni adoption.
