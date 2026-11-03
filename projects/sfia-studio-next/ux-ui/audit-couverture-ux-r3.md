# SFIA Studio Next — Audit de couverture UX R3 (candidat D0)

**Date :** 3 novembre 2026  
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