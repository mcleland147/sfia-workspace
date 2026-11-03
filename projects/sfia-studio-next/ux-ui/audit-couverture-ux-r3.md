# SFIA Studio Next — Guide de couverture UX R3 (audit initial et suivi candidat)

**Date :** 3 novembre 2026  
**Statut CURRENT :** guide de couverture sur branche UX candidate ; macro-lots A–D validés comme trajectoire, macro-lot B représenté dans Figma mais **pas validé comme sortie R3 / pas prêt à fabriquer globalement**. Les §§1–6 sont le snapshot initial (22 écrans), le §7 décrit le périmètre à jour (48 écrans).  
**Nature :** audit initial de couverture fonctionnelle et de navigabilité ; **NON VALIDATED / NON READY FOR BUILD**.  
**Sources :** `mcleland147/sfia-workspace`, `main@139c706e8b3dca6f1db836a14ffd1aafa1c5e990`, branche documentaire candidate `sfia/next-r3-ux-interaction-candidate@8736ea0353ad8b14fb96cc9c7ad83e7f5803659f`, Figma Next `itgvCulInEnFY6DvgIegvP` page 05, SEF v0.2, Roadmap, Vision R1, neuf propriétaires R2 D1–D9 et complément Inspection, document UX candidat v0.16. Git local non observé.

## 1. Décision de revue

**R3 NON PRÊT À FABRIQUER** : les parcours nominaux sont illustrés mais plusieurs actes, suites alternatives, destinations et états exceptionnels restent non contractés ou non représentés. Aucun indice de complétude des règles/scénarios n'est revendiqué.

Les neuf spécifications sur `main` comportent **324 identifiants RG propriétaires distincts et 259 identifiants PF distincts** (incluant les compléments post-clôture Inspection) : 300 RG/241 PF correspondent à l'ancienne baseline R2 avant ces compléments. L'audit de l'index d'identifiants n'est **pas** une revue individuelle complète de leurs conditions, interactions et résultats. Cette traçabilité exhaustive constitue le principal gate restant de R3.

### Définition de « prêt à fabriquer »

- Chaque capacité utilisateur a un **point d'entrée**, un **état représenté**, un **acte concret et sa destination**, un **retour à l'activité** et des **états non nominaux** ; si une exigence ne crée aucune UI, cette qualification est explicite.
- Chaque exigence `RG-*` et `PF-*` propriétaire est reliée à un contrat UX / composant / scénario, ou classée `R4 TECHNICAL`, `R5/R6 PROOF`, `N/A` avec justification. Aucune ligne `UNMAPPED` ou `AMBIGUOUS` restante sur un contrat relevant de R3.
- Les choix de structure visuelle et d'autorité métier validés R1/R2 ne sont pas redéfinis silencieusement ; toutes les contradictions sont remontées à Morris.
- Les maquettes et composants Figma livrables sont **référencés, explicitement nommés, navigables et vérifiés**. Un titre de bouton qui promet une destination doit mener à cette destination, pas à un écran générique.
- La déclinaison responsive, le focus clavier, la longueur/erreur/loading et le contrat d'accessibilité ont un niveau de preuve déclaré.
- Aucune décision de stack, persistance, rendu A/B/C, droits Git ou architecture d'actions dynamiques n'est imputée à Cursor : réserves et exigences pour R4.

## 2. État observé du Figma de référence

Fichier : https://www.figma.com/design/itgvCulInEnFY6DvgIegvP ; page **05 — Référence UX intégrée — Parcours Pilote Nora** (`94:49`).

| # | Maquette existante | ID Figma | Responsabilité principale | Qualification |
|---|---|---|---|---|
| 01 | Portefeuille et choix du projet | `94:50` | D1 | Nominal illustré ; session/accès alternatifs non couverts |
| 02 | Sas — conversation avant projet | `94:135` | D2/D3 | Nominal ; reprise/échec incertain manquants |
| 03 | Nora — conversation longue / en lecture | `94:214` | D3 | Composite + liens ; cas longs/états à qualifier |
| 04 | Document Nora — consultation | `94:370` | D4/D3 | Une ressource ; catalogue/versions encore à préciser |
| 05 | Journal — sujets et décisions | `94:515` | D4/D6 | Lecture ; organisation/actes manquants |
| 06 | Contrat d'exécution — autoriser distinctement | `94:629` | D7/D6 | Nominal ; instruction détaillée, changements/refus à préciser |
| 07 | Tentative — attente de retour | `94:731` | D7 | Nominal ; STOP et reprise depuis le fil non chaînés |
| 08 | Résultat — preuves et suite | `94:827` | D8 | Restitution ; acte d'acceptation/report/réserve absent |
| 09 | Source Git — accès indisponible | `94:923` | D9 | Refus illustré ; alternative/renouvellement à qualifier |
| 10 | Nora — vue compacte 1280 | `94:1037` | D3 / transversal | Variante isolée ; responsive complet non qualifié |
| 11 | Projet — synthèse consultable | `96:34` | D1/D4/D5 | Vue globale ; responsabilités de trajectoire à préciser |
| 12 | Sources Git — consultation | `96:148` | D9 | Lecture de sources ; rattachement/configuration absent |
| 13 | Projet créé — poursuite du fil | `96:262` | D2 | Continuité nominale |
| 14 | Reprise du travail — contexte retrouvé | `96:370` | D3/D4 | Reprise nominale ; conflits/droits manquants |
| 15 | Conversation — choix A approfondi | `97:35` | D3 | Simulation d'envoi |
| 16 | Conversation — choix B approfondi | `97:143` | D3 | Simulation d'envoi |
| 17 | Conversation — autre choix modifiable | `97:251` | D3 | Préremplissage modifiable illustré |
| 18 | Document Nora — révision guidée | `97:359` | D3/D4 | Révision illustrée ; sélection de version à spécifier |
| 19 | Rapport et preuves — inspection | `100:39` | D7/D8 | Rapport/preuves, accès brut à préciser |
| 20 | Décision — consultation distincte | `102:43` | D6 | Consultation, pas cycle complet des actes humains |
| 21 | Trajectoire — cycle actif (variante) | `106:44` | D5 | Variante isolée du parcours normal |
| 22 | Réalisation — interruption demandée (variante) | `106:158` | D7 | Variante isolée du parcours normal |

La page **06 — Contrats visuels** comporte deux planches : `104:15` (grammaire du fil Nora/actions) et `104:78` (confiance/reprise), non comptées comme écrans produit.

### Audit de navigation factuel

- **22 maquettes**, **179 navigations inter-écrans**, **1 `SCROLL_TO` interne** vers le bloc d'actions de la réponse, **2 actions de lien externe** ; **5 points d'entrée Figma**.
- Le `SCROLL_TO` de « Aller à la dernière réponse » vers `94:336` est bien configuré sur une **section enfant du fil Nora**, **pas une destination brisée**.
- En partant du portefeuille `94:50`, **19/22** écrans sont atteignables ; les trois non atteignables sont des **variantes isolées** : compacte 1280 (`94:1037`), cycle actif (`106:44`), interruption demandée (`106:158`). Ce n'est pas en soi une anomalie pour une planche d'exploration, mais ces états doivent être reliés à des déclencheurs réels ou documentés comme variantes d'état non navigables.
- Tous les accès nommés **« Navigation / Trajectoire »** sur les écrans applicables mènent actuellement à **« Journal — sujets et décisions »** (`94:515`), et non à un état dédié/centré sur la trajectoire. À résoudre explicitement : destination/contextualisation de la vue Trajectoire, sans créer un écran supplémentaire par réflexe.
- Sur Document Nora, **« Consulter les versions »** renvoie à la révision guidée, non à un historique visuel des versions distinct. À qualifier.
- Dans Rapport/preuves, **« Voir le rapport Cursor »** renvoie à la synthèse des résultats, non clairement au rapport détaillé. À qualifier.
- Le Journal affiche visuellement trois choix (« Sujets », « Décisions », « Réserves et recommandations »). Vérifier si le troisième est un simple filtre transversal ; une troisième vue principale imposée contredirait la simplification R1.
- Dans Contrat d'exécution, le texte « Détails de l'intervention — consulter » ne possède pas de navigation distincte observée dans l'inventaire des réactions. Il faut un accès réel à la version de l'instruction exacte ou une représentation consultable appropriée.
- Les clics de démonstration ne prouvent ni stockage, ni permissions, ni idempotence, ni comportement dynamique, ni acceptation du Pilote.

## 3. Matrice de couverture fonctionnelle à consolider

| Domaine / R2 | Maquettes d'appui | Capacités encore absentes ou partiellement représentées | Exemples de PF à confronter |
|---|---|---|---|
| **D1** — 25 RG / 24 PF | 01, 11, 14 | Accès/session invalide ou expirée, refus et reconnexion, lien direct inaccessible, contexte d'autre projet, liste dense, isolation interprojets en alternative | `PF-ACC-02`, `-03`, `-09..10`, `-12..13`, `-16..18`, `-20..24` |
| **D2** — 27 RG / 27 PF | 02, 13 | Reprise d'un sas abandonné, création incertaine, double clic/timeout, refus avant création, création sans méthode/Git/cycle, documents préparés avant création | `PF-CRE-09..16`, `-22`, `-25`, `-27` |
| **D3** — 62 RG / 35 PF | 03, 10, 14–17 ; planche 06 | Méthode applicable, sélection/changement et conflits, guidance CKI discrète, réponses longues consécutives, source hostile, capacité indisponible, actions contextuelles expirées et cas de clarification | `PF-04..07`, `-19..27`, `-28..35` |
| **D4** — 20 RG / 14 PF | 04–05, 11, 14, 18 | Liste/recherche de ressources durables, renommage/fusion de sujets, ouverture/fermeture des points ouverts, historique et versions d'un document, provenance/récupération et droits actuels | `PF-KNOW-03..10`, `-11..14` |
| **D5** — 40 RG / 30 PF | 05, 11, 21 | Trajectoire réellement accessible, projet sans cycle vs proposé/actif, démarrage/fin/GO, second cycle refusé, maturité/réserves, CKI/méthode indisponibles et changement de version, état concurrent | `PF-TRJ-02..06`, `-08`, `-13..22`, `-27..30` |
| **D6** — 37 RG / 29 PF | 05, 06, 20 | Acte de décision formalisable depuis langage naturel, correction/remplacement, portée, suspension/levée/révocation, conflit, ambiguïté, acceptation/refus/report distincts des résultats | `PF-GOV-02..05`, `-09`, `-12`, `-14`, `-16..20`, `-24..29` |
| **D7** — 36 RG / 31 PF | 06–07, 22 | Accès à instruction exacte, modification de version, refus de lancement, attente inconnue, lancement en doublon, STOP demandé/confirmé, retour partiel, reprise technique, correctif et nouveau contrat | `PF-REAL-04..07`, `-10..16`, `-18..28`, `-31` |
| **D8** — 36 RG / 33 PF | 08, 19 | Contradiction rapport/preuve, vérification partielle, preuves périmées, conformité limitée, résultat acceptation avec réserves, refus/report, correction et réévaluation | `PF-PRV-02..14`, `-19`, `-22..32` |
| **D9** — 41 RG / 36 PF | 09, 12 | Choisir/rattacher/retirer un dépôt, distinguer lecture/écriture, références Git, erreurs permissions, ref/base obsolète, push/PR/merge sans confusion, conflit multi-Pilotes, source Git en aperçu vs navigateur | `PF-GIT-02..06`, `-08..09`, `-13..27`, `-32..36` |

**Total R2 courant vérifié par identifiant unique : 324 RG / 259 PF.** La matrice ci-dessus est une **qualification par familles**, pas un verdict de conformité individuelle.

## 4. Écrans et états à produire — regroupés par macro-capacités

Les lignes décrivent des **contrats d'interface** : un item peut être une nouvelle surface, un état de celle-ci, une inspection ou une transition. Ne pas multiplier artificiellement les pages pour faire correspondre 1 règle à 1 écran.

### Macro-lot A — Entrée, sas et continuité (D1–D4)

1. **Accès et session** — entrée, reconnexion, session expirée/refusée, projet inaccessible ; aucune donnée privée affichée après invalidation.
2. **Portefeuille long et navigation** — projet récent, recherche/choix de projet si utile, projet absent, bascule entre projets sans contamination.
3. **Sas repris/abandonné** — brouillon en cours, aperçu, documents éventuels, sortie puis retour, pas de création implicite.
4. **Création incertaine** — en cours, délai d'attente, succès effectivement confirmé, échec, double clic/reconnexion sans doublon ; conservation du même fil visible après confirmation.
5. **Ressources et connaissance du projet** — accès direct à sujets, documents Nora, versions, liens utiles et points ouverts ; sans exiger de poser une question à Nora.
6. **Sujets et journal opérationnels** — détails d'un sujet, renommer/organiser/fusionner lorsque prévu, historique, décisions en vue principale distincte et points ouverts transversaux.
7. **Document Nora complet** — consultation Markdown, révision, version précédente, reprise à distance, état indisponible, consultation/destination différente d'une écriture Git.

**Contrat de sortie :** parcours entrer → préparer → créer → reprendre → retrouver document/sujet, avec alternatives session/perte/double clic, validé R1 E2E 01, 03, 04 et E2E documentaire.

### Macro-lot B — Conduite, cycles, méthode et autorité (D3/D5/D6)

8. **Trajectoire navigable** — même objet projet, état sans cycle / proposé / actif / achevé, prochain jalon, relation entre prévu et effectif, retour Nora.
9. **Cycle et CKI** — qualification du cycle, initiative, proposition, GO du Pilote, ouverture effective, refus d'un deuxième cycle actif, clôture, maturité/réserves et retours.
10. **Méthode applicable** — sélection pertinente, méthode absente, nouvelle version, modification gouvernée en cours de projet, information CKI discrète et non prescriptive.
11. **Décision et gouvernance** — décision naturelle expliquée/enregistrée, portée, correction/remplacement, suspension, levée et révocation, ambiguïté ; pas de page de validation pour chaque propos anodin.
12. **Choix de résultat** — accepter, accepter avec réserves, refuser, reporter ; garder l'acte D6 séparé du constat D8.

**Contrat de sortie :** parcours sans cycle actif, cycle actif, changement de méthode, décision durable et suspension, respectant R1 E2E 02/04/05 et R2 D3/D5/D6.

### Macro-lot C — Contrat, réalisation, STOP et preuves (D6–D8)

13. **Préparation de contrat** — accès depuis Nora sans dépendance artificielle à une décision structurante si elle n'est pas requise ; paramètres manquants réellement déterminants.
14. **Inspection détaillée du contrat** — version, périmètre, instruction exacte, conséquences, exclusions, risques, critères et STOP ; possibilité de revenir à Nora sans exécution.
15. **Contrat devenu invalide** — cible/version/droits modifiés, refus propre, nouvelle inspection, aucune autorisation reportée silencieusement.
16. **Tentative et états réels** — en attente, lancement confirmé, activité observée, erreur, déconnexion/état inconnu, retour terminal, partiel, absence de reçu.
17. **Interruption et reprise** — action de demander STOP lorsqu'elle est disponible ; arrêt demandé distinct d'arrêt confirmé ; reprise sous conditions, suspension humaine différente de pause technique, doublons interdits.
18. **Rapport brut, preuves et conformité** — accès au rapport réellement disponible, tests, diff/captures, niveaux de preuve, contradiction ou preuve manquante, source et limite.
19. **Réception/acceptation** — acceptation/refus/report avec ou sans réserves par le Pilote, sans faire de la décision une preuve de conformité.
20. **Correction gouvernée** — préparer une correction depuis l'écart, inspecter un contrat nouveau ou amendé, autoriser distinctement, retrouver les résultats précédents.

**Contrat de sortie :** R1 E2E 05/06 et complément documentaire réalisés en UX nominal et négatif ; chaque état de D7/D8 et ses transitions visibles, sans promesse de conformité réelle.

### Macro-lot D — Git facultatif et qualité transverse (D9 et D1–D8)

21. **Git facultatif et rattachement** — ne rien imposer, choisir source/dépôt/ref, attacher/détacher, distinguer lecture, source exploitable et cible d'une modification.
22. **Consultation Git sûre** — ref/branche/commit, identité et permissions, lien externe ouvrable, refus et source périmée, contexte préservé.
23. **Effets Git et conflit** — cible/base modifiées, autre Pilote sur dépôt partagé, lecture seule, erreur, commit local vs push distant vs PR vs merge distincts, récupération sans autorité inventée.
24. **Responsive et accessibilité** — grammaire de réponse longue/composite, fenêtre 1280 et cible plus étroite décidée, lecture clavier/focus, contraste, zoom, reflow, fermeture/retour, source indisponible.
25. **États transverses** — vide, chargement, refus, erreur inconnue, changement de session, ressource non retrouvée, permissions retirées, relance incertaine, actions Nora obsolètes, brouillon non envoyé, retour au message récent.

**Contrat de sortie :** R1 E2E 07, E2E documentaires et frontières transverses représentés de manière cohérente. Pas de navigateur intégré requis.

## 5. Contrat minimal « manuel de fabrication » par surface

Avant transmission à Cursor, chaque surface/état réellement nécessaire doit disposer des champs suivants, dans la documentation et Figma :

1. **Identité produit et responsabilité D1–D9** (nom métier, sans code chantier).
2. **Point d'entrée** : action ou condition réelle, acteur, contexte projet/sas, capacités nécessaires.
3. **Sources affichées** : objets propriétaires, champs visibles, provenance et limites, aucun état fictif.
4. **Composition/hiérarchie visuelle** : layout, tailles/états/variantes, contenu court/long, défilement, inspecteur ou surface principale.
5. **Actions** : libellé visible, sens et effet, validation/règle propriétaire, destination Figma exacte, retour et préservation du brouillon.
6. **États** : nominal, vide, loading, échec, refus, source périmée, interruption et reprise, ancien lien ; lesquels s'appliquent à cette surface.
7. **Frontière d'autorité** : simple navigation, message conversationnel, HumanDecision, transition de cycle, inspection/Exécuter ; n'assimiler aucune action à une autre.
8. **Responsive/accessibilité** : taille cible, ordre de lecture, focus, raccourcis clavier, reflow, contraste, lecteurs d'écran, pas de mouvement imposé.
9. **Traçabilité** : IDs RG/PF, E2E R1, réserve propriétaire, statut de maquette, critère UX observable et preuve de revue.
10. **Réserve R4** : contrat technique à résoudre et preuve future attendue, **sans sélection d'implémentation à la place de Morris**.

## 6. Gate R3 recommandé

**Ne pas lancer Cursor en construction sur les seules 22 maquettes.** Construire et revoir les macro-lots A–D, puis effectuer une revue transverse :

- **G1 — Traçabilité 324 RG / 259 PF** : statut explicite et justification de chaque ligne ; 7 E2E d'origine + 2 E2E documentaires, parcours nominaux et exceptions couverts au bon niveau.
- **G2 — Graphe d'interaction** : toutes les actions promises ont une cible et un retour ; liens Trajectoire corrigés ; variantes pertinentes atteignables sous déclencheur ; affordance scroll évaluée ; aucun faux clic « Consulter ».
- **G3 — Qualité visuelle** : nomenclature métier, grammaire des réponses Nora non fermée, deux vues Journal, texte sans jargon interne, composants/états, accessibilité et responsive qualifiés.
- **G4 — Réserves pour R4** : architecture de restitution A/B/C, génération d'actions, session/stockage, permissions, sécurité, idempotence, Git/Cursor, preuve et reprise ; besoin technique sans mécanisme prédécidé.
- **G5 — Décision Morris** : approbation du contrat UX intégré et de ses réserves ; publication Git/PR/merge et ouverture R4 sous gates distincts.

**Prochaine capacité concrète :** corriger d'abord les accès Trajectoire, les étiquettes Jour­nal et les actions document/rapport, puis concevoir un **parcours complet de cycle et de décision**, car ils conditionnent les effets en aval. Enchaîner les macro-lots suivants sans découpage documentaire artificiel. **Statut : R3 WORK NOT COMPLETE — UX COVERAGE UNVERIFIED.**

## 7. Actualisation du référentiel après décision Morris — Figma rationalisé et premier macro-lot B (2026-11-03)

> **Cette section est le constat CURRENT.** Les §§1–6 restent la photographie de l'audit initial de 22 maquettes, conservée pour traçabilité. Les anciens identifiants historiques ne sont plus des destinations actives. Les sources actuelles sont [la page de parcours de référence](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-50) et [les contrats visuels](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=104-15).

### 7.1. Décision de trajectoire et frontière

Morris valide en conversation les **quatre macro-lots A/B/C/D** de cet audit et demande une progression **macro-lot par macro-lot**. L'ordre de production commence par **B — Trajectoire, cycles, méthode, CKI et gouvernance**, puis une revue avant le lot suivant. Cette validation du **découpage** n'est ni une validation d'interface finale, ni un GO R4, R5 ou merge.

**Source Git :** `main@139c706e8b3dca6f1db836a14ffd1aafa1c5e990` ; branche UX `sfia/next-r3-ux-interaction-candidate` (candidate). Local/staged/untracked **NON OBSERVÉS** ; Next **N/A — NON IMPLÉMENTÉ**. La Roadmap sur `main` conserve l'état historique `R3 NOT STARTED`, à synchroniser seulement sous gate distinct.

### 7.2. Nettoyage Figma effectif

Fichier indépendant Next : [Figma SFIA Studio Next](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP). Trois pages conservées :

- **00 — Fondations — Composants UI**, page `120:27` : composants `12:14` (action principale) et `12:16` (secondaire), transférés puis conservés avec leurs instances liées.
- **01 — Parcours produit — Référence UX R3**, page `94:49` : **48 frames de référence**. Vingt et une viennent du premier parcours consolidé (dont interruption et compact), 27 états métier ont été créés dans le lot B.
- **02 — Contrats visuels — Nora et états**, page `104:14` : deux planches `104:15` et `104:78` conservées.

Les quatre anciennes pages d'exploration V3, Inspection, Document Nora et E2E historique ont été **supprimées après extraction des composants réutilisés**. La variante redondante « Cycle actif » `106:44` de la page de référence a aussi été supprimée et remplacée par `127:106` ; les liens du document R3 vers les anciens écrans ont été redirigés vers les vues actives correspondantes, avec le caractère historique des anciennes descriptions explicité.

**Audit de graphe après raccordement :** 48 frames ; 448 navigations inter-écrans ; 2 URL externes ; 1 action de défilement ciblée ; **0 destination manquante et 0 boucle de navigation** ; **41/48** atteignables depuis le cockpit. Les sept vues restantes sont des **variantes conditionnelles** (dont compact, STOP, CKI inaccessible, GO ambigu, transition partielle, maturité insuffisante et transition conjointe confirmée), exposées par points de départ de prototype et **non par faux boutons de choix de résultat**. Dix points de départ Figma sont configurés.

### 7.3. Macro-lot B — surfaces et transitions explicitement câblées (candidat UX)

Chaque ligne identifie une **situation d'entrée**, une **surface visuelle** et les **actions du prototype**, sans prétendre qu'un effet métier réel est exécuté par Figma. Les libellés sont formulés pour le Pilote, non en terminologie d'architecture interne.

| Surface Figma CURRENT | Situation d'entrée / état observable visé | Actions utilisateur et destinations Figma |
| --- | --- | --- |
| [22 · Trajectoire — sans cycle actif](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=125-33) | Projet sans cycle ; consulter les étapes envisagées | `Examiner le cycle proposé` → [Cycle — qualification proposée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-35) ; `Choisir une méthode` → [Méthode — aucune retenue](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-391) |
| [23 · Cycle — qualification proposée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-35) | Nora propose Conception UX ; aucune ouverture | `Ouvrir ce cycle` → [Cycle — actif et guidance CKI](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-106) ; `Retour à la trajectoire` → [Trajectoire — sans cycle actif](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=125-33) |
| [24 · Cycle — actif et guidance CKI](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-106) | GO applicable et ouverture observée | `Examiner la maturité` → [Cycle — clôture envisagée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-178) ; `Envisager un autre cycle` → [Cycle — second cycle incompatible](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-249) ; `Examiner une version CKI` → [CKI — nouvelle version disponible](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=131-227) |
| [25 · Cycle — clôture envisagée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-178) | Bilan argumenté ; clôture possible avec réserves | `Clore ce cycle` → [Cycle — clôture enregistrée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-320) ; `Poursuivre le cycle` → [Cycle — actif et guidance CKI](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-106) |
| [26 · Cycle — second cycle incompatible](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-249) | Demande d'un deuxième cycle alors qu'un premier est actif | `Reprendre le cycle` → [Cycle — actif et guidance CKI](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-106) ; `Examiner la clôture` → [Cycle — clôture envisagée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-178) |
| [27 · Cycle — clôture enregistrée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-320) | Clôture réellement enregistrée, aucun cycle actif | `Voir la trajectoire` → [Trajectoire — sans cycle actif](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=125-33) ; `Continuer avec Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |
| [28 · Méthode — aucune retenue](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-391) | Méthode de projet non retenue | `Examiner une méthode` → [Méthode — évolution proposée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-462) ; `Continuer sans méthode` → [Trajectoire — sans cycle actif](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=125-33) |
| [29 · Méthode — évolution proposée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-462) | Une autre version de méthode est proposée | `Clarifier mon choix` → [Décision — clarification nécessaire](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-533) ; `Garder le cadre actuel` → [Cycle — actif et guidance CKI](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-106) |
| [30 · Décision — clarification nécessaire](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-533) | La portée du choix n'est pas encore claire | `Retenir la révision` → [Décision — en vigueur](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-52) ; `Conserver la méthode` → [Méthode — évolution proposée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-462) |
| [31 · Décision — en vigueur](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-52) | Choix du Pilote effectivement enregistré | `Réviser cette décision` → [Décision — révision](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-124) ; `Suspendre les écritures` → [Suspension — active](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-195) ; `Retour aux décisions` → [Journal — décisions](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-72) |
| [32 · Décision — révision](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-124) | Correction de décision demandée | `Enregistrer la correction` → [Décision — correction enregistrée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=131-85) ; `Révoquer cette décision` → [Décision — révocation](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-428) |
| [33 · Suspension — active](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-195) | Suspension décidée dans un périmètre explicite | `Lever la suspension` → [Suspension — levée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-266) ; `Revenir à Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |
| [34 · Suspension — levée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-266) | Levée de suspension effectivement enregistrée | `Retour au projet` → [Projet — synthèse consultable](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=96-34) ; `Consulter la décision` → [Décision — en vigueur](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-52) |
| [35 · Réception — choix du Pilote](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-337) | Résultat qualifié disponible ; décision de réception attendue | `Accepter avec réserves` → [Réception — acceptée avec réserves](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-409) ; `Refuser le résultat` → [Réception — refusée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-480) ; `Reporter ma décision` → [Réception — reportée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-551) |
| [36 · Réception — acceptée avec réserves](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-409) | Acceptation avec réserves exprimée et enregistrée | `Consulter les preuves` → [Rapport et preuves — inspection](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=100-39) ; `Revenir au bilan` → [Résultat — preuves et suite](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-827) |
| [37 · Réception — refusée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-480) | Réception refusée | `Préparer une correction` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) ; `Examiner les preuves` → [Rapport et preuves — inspection](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=100-39) |
| [38 · Réception — reportée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-551) | Réception différée | `Revenir au bilan` → [Résultat — preuves et suite](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-827) ; `Poursuivre avec Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |
| [39 · CKI — indisponible](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-622) | Guidance CKI momentanément inaccessible (variante) | `Retour au cycle` → [Cycle — actif et guidance CKI](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-106) ; `Revenir à Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |
| [40 · Journal — décisions](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-72) | Journal, vue des décisions | `Consulter une décision` → [Décision — en vigueur](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-52) ; `Revenir aux sujets` → [Journal — sujets et décisions](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-515) ; `Examiner un conflit` → [Décision — contradiction](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-286) |
| [41 · Cycle — GO à clarifier](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-144) | GO d'ouverture ambigu (variante) | `Examiner la proposition` → [Cycle — qualification proposée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-35) ; `Revenir à Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |
| [42 · Cycle — transition partielle](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-215) | GO conjoint dont un effet est non confirmé (variante) | `Voir la trajectoire` → [Trajectoire — sans cycle actif](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=125-33) ; `Revenir à Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |
| [43 · Décision — contradiction](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-286) | Deux décisions potentiellement contradictoires | `Consulter les décisions` → [Journal — décisions](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-72) ; `Clarifier avec Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |
| [44 · Cycle — maturité insuffisante](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-357) | Maturité insuffisante / clôture non recommandée (variante) | `Reprendre le cycle` → [Cycle — actif et guidance CKI](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-106) ; `Réexaminer le bilan` → [Cycle — clôture envisagée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-178) |
| [45 · Décision — révocation](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-428) | Décision révoquée par le Pilote | `Consulter les décisions` → [Journal — décisions](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-72) ; `Retour à Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |
| [46 · Décision — correction enregistrée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=131-85) | Correction enregistrée sans réécrire la version antérieure | `Consulter la version ancienne` → [Décision — en vigueur](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=128-52) ; `Retour aux décisions` → [Journal — décisions](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=129-72) |
| [47 · Cycle — transition conjointe confirmée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=131-156) | Deux effets de transition distincts confirmés (variante) | `Continuer avec Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) ; `Retour au projet` → [Projet — synthèse consultable](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=96-34) |
| [48 · CKI — nouvelle version disponible](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=131-227) | Nouvelle version du CKI disponible, non appliquée automatiquement | `Retour au cycle` → [Cycle — actif et guidance CKI](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=127-106) ; `Examiner avec Nora` → [Nora — conversation longue / en lecture](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-214) |

**Conventions de lecture :** « Ouvert », « clôturé », « enregistré », « accepté » et « levé » sont des **états de scénarios UX** ; R4/R5 devront spécifier et démontrer comment Studio les constate avant de les afficher. « Exécuter » reste distinct d'un GO de cycle, d'une décision de méthode et de la réception d'un résultat. Le prototype ne crée aucune HumanDecision, CycleInstance, tentative ou effet Git.

### 7.4. Traçabilité fonctionnelle ciblée et responsabilités

| Ensemble B | Références de règles et de scénarios R2 à vérifier | Invariant utilisateur |
| --- | --- | --- |
| Trajectoire, qualification, ouverture, clôture, transition | `RG-TRJ-001..016` ; `PF-TRJ-01..06`, `-13..18` ; `RG-GOV-029` ; `PF-GOV-04..05` | Prévu ≠ ouvert ; GO clair ; un cycle actif maximum ; effets confirmés séparément |
| CKI, maturité, relations et méthode | `RG-TRJ-017..040` ; `PF-TRJ-07..14`, `-19..30` ; `RG-GOV-034..035` ; D3 méthode/contextualisation | Un CKI principal uniquement si cycle actif ; guidance informative ; méthode durable sur décision |
| Décisions et conflits | `RG-GOV-001..016`, `-021..030` ; `PF-GOV-01..07`, `-11..15`, `-20..28` | Source/auteur/portée ; historique préservé ; aucune autorité issue d'une recommandation |
| Suspensions, levée, révocation | `RG-GOV-017..022` ; `PF-GOV-16..19`, `-23..24` | Restriction durable ; levée humaine ; arrêt technique jamais inventé |
| Réception du résultat | `RG-GOV-031..036` ; `PF-GOV-09..10`, `-26` ; D8 `PF-PRV-01..14` | Acceptation/refus/report ≠ conformité ni adoption ; réserves conservées |

**Niveau de couverture :** `DOCUMENTED / FIGMA INTERACTIVE CANDIDATE`. Les scénarios listés sont **des rapprochements ciblés**, pas une revue individuelle de conformité. Le gate exhaustif des **324 RG / 259 PF** reste ouvert pour la sortie R3. Le parcours Git, le sas et les états de réalisation seront complétés dans les autres macro-lots.

### 7.5. Livrable de fabrication attendu et réserves

Pour chaque écran/état, maintenir : responsabilité D1–D9 ; entrée/triggers y compris contextes alternatifs ; sources et statuts visibles ; actions avec destination ; retour et focus ; erreurs/refus/attente ; traçabilité RG/PF ; conditions d'observation ; responsive ; dépendances R4. Un composant ou une variante de l'écran peut couvrir plusieurs scénarios : **pas un écran par règle**.

**À requalifier en revue UX B :** exactitude des déclencheurs des variantes, cohérence des retours après correction/décision, clavier, zoom, lisibilité des textes secondaires, navigation entre décisions et sujet, conditions de reprise d'une suspension et retours de cycle. Une destination Figma valide n'est pas une preuve d'état serveur.

**Étude R4 obligatoire :** restitution composite Option A/B/C (orientation A seulement hypothétique), génération libre et résolution sûre des actions contextuelles, continuité/persistance, identité et isolation des Pilotes, concurrence/idempotence des décisions/cycles/effets, protection CKI et méthode versionnés, observabilité et coûts/charge. **Aucune architecture adoptée dans R3.**

**Prochaine revue :** macro-lot B avec Morris ; A, C, D à construire successivement, puis revue transverse R3/gates avant transmission technique à Cursor.
