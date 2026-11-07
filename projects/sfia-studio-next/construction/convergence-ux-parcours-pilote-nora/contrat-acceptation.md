# SFIA Studio Next — Contrat d'acceptation de convergence UX : Parcours Pilote–Nora intégré

**Version :** `v0.3 CANDIDATE — CONTRAT DE TRANSPOSITION RENFORCÉ / REVUE D0`; **date :** 2026-11-07.
**Statut :** `DOCUMENTED / A1–A3 VALIDATED IN SCOPE / FULL ACCEPTANCE CONTRACT + VISUAL TOLERANCES PENDING MORRIS / NOT IMPLEMENTED`.
**Git :** `main@d37ea0882ee9256ec206e2f0523a71bf13674e88` ; candidat documentaire `docs/next-ux-convergence-qualification-20261107@b692376c984c669af81e583c230a4d393671bf9c`.
**Périmètre :** R5 transversal, ML1–ML3 ; **non** un ML supplémentaire numéroté. Contrat à approuver avant toute spécification technique ou exécution Cursor.

## 1. Résultat Pilote

« Depuis mon compte personnel, je retrouve mes projets et mes préparations non rattachées, je reprends le même contexte, je collabore avec Nora, je consulte et révise les documents du projet, je retrouve les sujets et acquis, je lis la trajectoire et les décisions, et je peux poursuivre après un incident sans acte métier non autorisé, ni nouvelle préparation créée par erreur. »

Le produit doit avoir un **shell cohérent** entre portefeuille, sas, espace projet, travail Nora, journal, documents et pilotage. Chaque élément visuel reflète un état ou un service **réellement implémenté**, pas une maquette de future opération Git/Cursor.

## 2. Frontières, propriétaires et dépendances

**IN :** navigation/shell global, connexion, portefeuille et reprise A1, sas/création D2, fil Nora et rendu sûr A3, documents/révisions D4 A2, journal des connaissances, trajectoire/méthode/CKI D5, décisions/restrictions D6, états d'attente/incertitude/erreur, reprise, responsive/accessibilité, tests/QA/docs du même ensemble.

**OUT :** GitHub App, lecture/écriture Git ML4, D7/D8/D9, Cursor comme fonctionnalité produit ML5, moteur générique d'actions Nora, moteur concurrent D4/D5/D6, catalogue de plugins, nouvelle persistance sans justification, refonte de l'ensemble des 242 frames, release ou adoption globale.

**Propriétaires inchangés :** D1 identité/portefeuille ; D2 préparation/création ; D3 cognition ; D4 documents/connaissance ; D5 trajectoire/méthode/CKI ; D6 décision/restriction. UI = projection, non autorité. Les contrats R1–R4 validés restent applicables, et les réserves ML1–ML3 demeurent ouvertes à leur portée historique.

**Dépendances :** R3 Figma référence (`94:49`), audit et transposition R3 ; PR documentaire ML4 #663 intégrée à `main` ; runtime du SHA examiné ; preuves et réserves R5 ML1–ML3 ; mode/lane ENV-01. **Local Git, serveur déployé et navigateur réel : NON OBSERVÉS** au titre de cette revue.

## 3. Contrats de parcours

### A1 — Retrouver et reprendre une préparation

**Décision Morris acquise :** oui à la liste et à la reprise ciblée depuis le portefeuille.

**Proposition UX et fonctionnelle pour validation finale :**

1. Le portefeuille distingue **Mes projets**, **Préparations à reprendre** et **Créer une préparation**. Une préparation n'est affichable comme reprenable que si elle appartient au Pilote, est `OPEN` et **n'est liée à aucun projet**. L'éventuelle discordance de statut/lien est signalée comme anomalie, non corrigée par l'UI.
2. Chaque entrée expose les données réelles disponibles : nom/aperçu s'ils existent (sinon intitulé neutre), date de création authentique et état, sans inférer une « activité récente ». Tri par `createdAt` décroissant puis ID en départage comme **proposition** de stabilité, non choix d'architecture imposé.
3. **Reprendre** ouvre l'ID déjà existant dans le même fil/context de préparation. Aucun POST de création ; **Nouvelle préparation** reste une action séparée et explicitement mutante.
4. Le serveur contrôle session et `ownerPilotId` sur la liste et la reprise. 401, absence de permission et 404 ne divulguent jamais un sas d'un autre Pilote ; la projection est vide si aucun sas admissible.
5. Le parcours conserve la continuité au rechargement de l'URL ; une préparation devenue rattachée entre-temps renvoie vers son projet uniquement après relecture serveur, et ne crée rien.

**Point de conception à confirmer :** forme de l'interface de liste et contrat de lecture de la collection. `GET /api/portfolio` ne retourne actuellement qu'un compteur `openPreparations` ; `POST /api/preparations` crée, il est interdit de le réutiliser pour une lecture. Un `GET /api/preparations` borné ou une projection D1 équivalente sont des **options de construction**, non des endpoints déjà existants.

### A2 — Consulter et réviser un document depuis le projet

**Décision Morris acquise :** oui, par le propriétaire D4 existant.

**Proposition UX pour validation finale :**

1. Depuis le projet, **Documents → bibliothèque → document → inspection** montre titre, version/statut courant, provenance existante, contenu, historique et comparaison lorsque disponible. Une entrée contextuelle depuis le fil Nora peut ouvrir le même inspecteur.
2. L'action **Réviser** reste dans le contexte du projet : ouvrir la révision inspectée, saisir la proposition/modification, montrer la base courante et enregistrer une **nouvelle révision**, sans altérer les versions antérieures.
3. L'écriture réutilise `reviseDocument(pilotId, preparationId, {documentId, baseRevisionId, correlationKey, ...})` ou son contrat public ; une base périmée produit un **CONFLICT** (HTTP 409) avec la référence actuelle, sans écrasement ni succès supposé.
4. Réponse `AVAILABLE` = nouvelle révision vérifiée ; `SAVING/UNKNOWN/FAILED` = état distinct, clé/intention stable, relecture avant toute relance. Un diff dégradé doit être présenté comme tel ; pas de comparaison complète inventée.
5. Le projet retrouve sa `preparationId` **par contexte serveur sous ownership**, pas par un paramètre fourni par un tiers ; le service D4, les documents et la table de révisions demeurent uniques. Le retour au fil et au document conserve le contexte du même projet.

**Point important observé :** le sas a actuellement deux commandes différentes : `savePreparationDocument` sur la route collection, et `reviseDocument` sur la route du document. Leur contrôle de base n'est pas identique. Le contrat de convergence exige une **sémantique visible et cohérente** de révision protégée, pas le simple clonage de l'écran « Sauvegarder ».

### A3 — Présentation des contenus Nora et limites d'autorité

**Décision Morris acquise :** aucune nouvelle grammaire d'actions mutantes intégrée aux réponses.

1. Conserver le rendu HTML échappé de `SafeMarkdown` et ses formats pris en charge : titres, paragraphes, listes, tableaux, code, liens, emphase. Afficher lisiblement les messages longs, états d'activité **réels**, sources et contexte lorsqu'ils sont réellement fournis.
2. Les commandes de cycle, méthode, décision ou restriction restent dans leurs surfaces D5/D6 avec leurs validations actuelles ; aucune sortie Markdown ne déclenche `HumanDecision`, commande métier ou opération externe.
3. Conserver la distinction entre proposition Nora, contexte/sources, confirmation du Pilote, réponse réussie, erreur et résultat indéterminé. Aucun bouton visuellement actif ne doit être relié à une fonction non disponible.
4. Tester contenu hostile, tableaux étendus, longs blocs de code, focus, liens et retour conversationnel. L'absence d'éléments structurés non fournis par D3 se présente honnêtement.

### Shell, navigation et pilotage transversal

- **Shell partagé** sur surfaces existantes : espace personnel ≠ projet actif ≠ sas ; entrée explicite vers travail, documents, journal, trajectoire et décisions applicables, sans navigation fictive D7/D9.
- **Mobile obligatoire** : le rail actuel disparaît en-dessous de `md`; il faut une navigation accessible équivalente (menu ou autre patron validé R3), pas une simple réduction de largeur.
- **Transitions :** passage portefeuille → sas → projet → document/journal/trajectoire et retour sans mélange de projets ; rafraîchissement/reconnexion/restauration déterministes ; lien profond valide ou refus clair.
- **D5/D6 :** états de cycle/méthode/restriction/journal reflètent les projections réelles. Un état sans cycle et sans méthode est normal ; une suggestion Nora ou un clic de navigation ne mutent jamais le système.
- **Figma :** appliquer les familles/variantes R3 listées dans la matrice CU, non tous les écrans ; en cas de contradiction des rails (240/246 px historiques), mesurer et arbitrer le shell commun. Pas d'extraction géométrique exhaustive avant le code.

## 4. Matrice de réception — 14 contrôles discriminants, tous NOT RUN

| UXC | Parcours CU principalement couverts | Condition positive vérifiable | Négatif / preuve refusée |
| --- | --- | --- | --- |
| **UXC-01** | 01 | Connexion, session et portefeuille exacts | 401/expiration sans ressource divulguée, pas de droit Git créé |
| **UXC-02** | 02/03 | Projets et préparations repris à l'ID, liste ownership, statut OPEN sans lien, état vide | Le bouton Reprendre ne fait **aucun POST** de création, compteur ≠ liste |
| **UXC-03** | 04/09 | Sas, aperçu, confirmation puis projet unique ; contexte/fil retrouvés | Pas de création automatique, même double clic/timeout |
| **UXC-04** | 05/09 | Long échange Nora, même fil à la navigation/refresh, activité réelle lisible | Pas de streaming ni source simulés |
| **UXC-05** | 05/06 | Markdown sûr, tableaux/long texte, liens, listes et code lisibles | Pas d'injection HTML/JS ni d'instruction transformée en commande |
| **UXC-06** | 07 | Bibliothèque et inspecteur projet, révision protégée D4, versions/diff/provenance exactes | BASE_STALE 409 sans écrasement, réponse UNKNOWN sans double création |
| **UXC-07** | 08 | Sujets, acquis, points ouverts et provenance identifiables ; opérations existantes | Pas de fusion/split inventés ni mémoire transverse de projet |
| **UXC-08** | 10 | Sans cycle/méthode : état normal, proposition lisible sans mutation | Aucun faux cycle « en retard » et aucun effet au simple changement d'écran |
| **UXC-09** | 10/11 | Cycle actif, CKI/méthode connus, transitions gouvernées sous D5/D6 | Disponibilité CKI non supposée, refus/indisponibilité honnêtes |
| **UXC-10** | 12/13 | Journal D6 consultable, décision révisée/restriction appliquée ou levée selon autorité | Aucun GO implicite, version et portée exactes, audit traçable |
| **UXC-11** | 03/04/07/13/14 | Perte d'ACK, base périmée et reprise : états en cours/incertain/confirmé distincts | Pas de retry aveugle, pas de doublon de préparation/document/commande |
| **UXC-12** | 01/03/07/08/12 | Deux Pilotes/deux projets : liste, documents, journal et nav isolés | Aucun 403/404 transformé en accès ; aucune fuite par réponse/URL |
| **UXC-13** | 02/05/09/15 | Source Figma datée + extraction profonde L2 des composants utiles + manifestes hashés ; DOM rects/style et captures navigateur au SHA exact en 1680/1280/390/320 px, zoom 200 %, clavier/focus/reflow/contraste et négatifs ; rapports de delta et écarts qualifiés | Aucun PASS sur capture seule, aucune donnée Figma critique déduite, aucun masquage de troncature/chevauchement ; seuils de diff approuvés avant code |
| **UXC-14** | 06/16, ensemble | Régressions unitaires, PG, HTTP, navigateur, Nora LIVE ciblée si périmètre cognitif impacté ; revue intégrée Morris | Aucun faux Git, PR/merge, Cursor, ADOPTED ; aucun PASS sans rapport/artefact |

**Oracle commun :** une capture Figma + un test déterministe ne remplacent pas une démonstration navigateur au même SHA. Les tests sont à instancier dans le futur contrat de réalisation, avec mode DEV/RECETTE, fixtures, intégrateur et scénario E2E. `UXC` n'est pas une nouvelle série RG/PF R2.

## 5. Traçabilité CU → Figma et critères

| Famille CU | Figma R3 principal | Contrôles de recette |
| --- | --- | --- |
| 01–04 Entrer/reprendre/créer | 01 `94:50`, 02 `94:135`, 62–66, 73 `158:912`, 74 `159:145`, 78–81, 13/14 | UXC-01/02/03/11/12 |
| 05–06 Nora/rendu | 03 `94:214`, 109–118, 206–208, 216–217 | UXC-04/05/13/14 |
| 07–08 Documents/connaissance | 04 `94:370`, 18 `97:359`, 05 `94:515`, 89 `160:175`, 92–100, 205 `241:385` | UXC-06/07/11/12 |
| 09 Shell et navigation | 01–05, 13–14, 110 | UXC-03/04/13 |
| 10–13 Trajectoire/D6 | 22–34, 39–41, 47/48, 52–60 | UXC-08/09/10/11/12 |
| 14–16 Reprise/mobile/frontières | 10, 63/66/78, 92/93/111, 216 `282:468`, 217 `282:492` | UXC-11/12/13/14 |

**Référence de géométrie et composants :** [R3 transposition](https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md) ; [Figma source](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-49). La revue ciblée des nouvelles UX devra confirmer les propriétés des seuls nœuds réellement codés. Frames Git ML4 218–235 **exclues** de ce lot.

## 6. Risques, dette/exit et points de STOP

| Couche | Risque pertinent | Mesure de maîtrise / exit |
| --- | --- | --- |
| Session/portefeuille D1 | liste de préparation d'un autre Pilote, état ouvert fictif | ownership serveur, test 2 Pilotes, statut et lien réel |
| Sas/projet D2 | « Reprendre » crée un nouveau sas ; vue perd le bon fil | GET pur, même préparation/conversation après refresh, sécurité 401/404 |
| D4 | base version non vérifiée, divergence entre sauvegarder et réviser | viser `reviseDocument`, `correlationKey`, 409, version et diff contrôlés, aucun second service |
| D3 | réponse hostile transformée en action, HTML non échappé | SafeMarkdown sécurisé, états réels, aucune commande dans la prose |
| D5/D6 | portage illégitime de l'autorité dans le composant visuel | réutiliser projections/commandes existantes, journal et HumanDecision réels |
| UX / responsive | navigation impossible en mobile ou contenu long | menu/alternative accessible, tests 320/390/1280/1680 et zoom 200 %, clavier |
| Qualité/gates | acceptation sur impression visuelle, régression isolée des tests | SHA/CI/PG/BROWSER/LIVE lorsque pertinent, preuves R3 à source datée |

**STOP** si un choix crée un moteur métier concurrent, autorise des effets Git/Cursor, modifie l'autorité R2 sans D2, crée un nouveau modèle de persistance disproportionné, ou si un frame est non lisible/corrélé à la bonne fonction.

## 7. Gates de décision

1. **Morris — validation contractuelle encore attendue :** confirmer P1 (liste A1), P2 (révision D4 dans l'espace projet) et P3 (shell et vues R3 applicables), ou demander des corrections ciblées.
2. **Après validation seulement :** synchroniser ce contrat dans le dossier documentaire du lot, mettre à jour la traçabilité R3/R5 sur une branche sous mandat Git distinct ; vérification diff/SHA, aucun merge tacite.
3. **Préparation technique ultérieure :** préciser les API/types et modèles existants, les composants et variantes Figma réellement utiles, intégrateur, plan QA, risques ENV-01, critères STOP et dépendances ; consulter routage + template Git SFIA v2.6 seulement pour un prompt Cursor autorisé.
4. **GO construction indépendant :** Cursor construit code/tests/docs, recettage navigateur/LIVE adapté, revue Morris, PR/merge puis promotion éventuelle sous autorisations propres.

**Verdict courant :** `ACCEPTANCE CONTRACT v0.3 CANDIDATE — FIDELITY PROTOCOL PREPARED / VISUAL PACK NOT EXTRACTED / READY FOR MORRIS REVIEW`, pas `VALIDATED SPEC` complet, pas `IMPLEMENTED`, pas `COVERAGE VERIFIED`, pas `BEHAVIOR PROVEN`, pas `ADOPTED`.


## 8. Complément contractuel D0 — Fidélité Figma mesurée pour la convergence

Le [protocole complémentaire R3 candidat](../../ux-ui/protocole-fidelite-figma-runtime.md) constitue l'annexe préparatoire de la future synchronisation Git. Son contenu **ne remplace pas** le contrat R3 validé tant que Morris n'a pas approuvé les choix de seuils et de fondation.

**Obligations proposées avant code :** sélectionner les frames réellement utiles à `CU-01..16`, extraire les descendants implémentables L2 avec parenté et géométrie, figer un export Figma de référence par état et viewport, fournir la mapping des composants/states/tokens, identifier les différences de fondation (dont rail 240/246 px), puis seulement lancer la réalisation technique.

**Oracle UXC-13 renforcé :** comparaison déterministe des bounding boxes DOM contre Figma, computed styles, snapshots visuels de même état, contrôle d'overflow/chevauchement/troncature, tests clavier/scroll/zoom/mobile et preuves au SHA du runtime. Les seuils candidats de geometry (objectif 0 px, maximum 2 px sur blocs stables) **ne sont pas validés**. La comparaison image nécessite une calibration avec Morris ; aucun seuil global ne doit masquer un défaut d'alignement ou d'autorité.

**IMPORTANT :** l'index JSON R3 du 2026-11-03 compte 223 frames et 901 blocs racines ; ce n'est pas un manifeste géométrique profond. Les écrans ML4 218–235 ne sont pas inclus dans la convergence ML1–ML3.

**Statut :** contrat et protocole publiés en préparation documentaire candidate ; aucun snapshot Figma immuable, aucun pack L2 complet, aucun token partagé validé, code, capture navigateur ni preuve LIVE issus de cette révision. Les tolérances et le rail 240/246 px demeurent ouverts à décision Morris.

**Relevé géométrique de départ :** [11 frames L1 partielles](../../ux-ui/releves-geometriques-convergence-l1.json). Ce relevé ne suffit pas à construire les composants sans extraction L2 et arbitrages G1/G2.
