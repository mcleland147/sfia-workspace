# SFIA Studio Next — Ensemble 06
## Bibliothèque Documents — Contrat de réalisation fonctionnel, UX et technique (candidat)

| Champ | Valeur |
|---|---|
| Version | **v0.1 — 19 novembre 2026** |
| Statut | **DOCUMENTED — CONTRACT CANDIDATE / NOT VALIDATED SPEC** |
| Autorité de validation et de construction | **Morris** ; aucune approbation du contenu contractuel ni GO Cursor déduits du GO de préparation |
| Origine | Étape 2 après diagnostic de convergence approuvé par Morris |
| Base Git analysée | `mcleland147/sfia-workspace` — `main@d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Branche documentaire candidate | `sfia/next-documents-convergence-20261119` — sans PR/merge |
| Référence UX validée | [Figma, page 08 — Bibliothèque Documents](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=930-2) — accord Morris du 19/11/2026 |
| Contrat amont | [Diagnostic de convergence Documents](documents-diagnostic-convergence.md) — v0.1, accepté en analyse puis publié |
| Macro-lot de rattachement | **Ensemble 06 : Journal V4 + Bibliothèque Documents** |
| État du code actuel | **IMPLEMENTED partiellement** au SHA Git analysé ; navigateur et comportement LIVE non exécutés dans cette revue |
| Étape suivante | Revue/validation Morris du présent contrat ; ensuite seulement qualification du contrat Cursor SFIA v2.6 et GO technique distinct |

> **Nature et autorité.** Ce document organise la réalisation future dans le respect des sources SEF/R1/R2/R3/R4 et des arbitrages récents de Morris. Ses propositions techniques (états, protocole, contrôle atomique, scénarios) **ne sont pas de nouvelles décisions approuvées** tant que Morris n'a pas validé explicitement le contenu. La publication d'un DRAFT sur branche candidate ne constitue ni baseline `main`, ni preuve, ni autorisation de code.

## 1. Résultat utilisateur et périmètre

Le Pilote doit retrouver les documents du projet, inspecter et comparer leurs versions, puis demander à **Nora dans le fil unique** toute évolution documentaire. Nora conserve le document ciblé en visionneuse 50/50 et gère la révision ; Studio D4 enregistre une **nouvelle version**, jamais un écrasement silencieux.

**IN — capacité cohérente :**

- Bibliothèque centrale (liste, sélection, recherche pertinente aux documents) et panneau d'actions ;
- Inspection approfondie Markdown en lecture seule, avec métadonnées et provenance réellement accessibles ;
- Historique, lecture de la version exacte choisie, tags « Courante » / « Historique » ;
- Comparaison libre de deux versions, sélecteur initialement replié, visualisation 50/50 et différences ;
- Transition Documents → Travail avec Nora, fil durable existant à gauche et visionneuse documentaire à droite ;
- Demande de révision uniquement en langage naturel via Nora, proposition candidate inspectable, confirmation de conservation ;
- Révision de la version courante ou d'une base historique volontairement confirmée, numérotation strictement croissante ;
- Droits, concurrence, idempotence, observabilité, erreurs, reprise, tests, synchronisation architecture/documentation dans le delivery.

**OUT par défaut :** édition directe par le Pilote, second chat, nouvel éditeur universel, gestion de documents Office/PDF avancée, changement de source de vérité D4, modification métier D6, publication Git implicite, création d'un second moteur de mémoire, suppression/archivage de versions historiques, fusion de l'Ensemble 06 ou Gate C automatique.

La suppression éventuelle d'anciennes versions évoquée par Morris est une **capacité distincte à instruire**, sans suppression physique ni masquage implicite au présent macro-lot. La création d'une nouvelle version ne dépend pas d'une opération de nettoyage des précédentes.

## 2. Sources et précédence

**Git, branche et consultation :** `main@d3d199ad` et branche `sfia/next-documents-convergence-20261119`, dernière lecture distante le 19/11/2026. Git local, services, base RECETTE et état LIVE : **NON OBSERVÉS**.

Sources applicables : `governance/SEF.md` (v0.2) ; `governance/roadmap.md` (historique au 15/11, KNOWN GAP de synchronisation) ; `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` ; `governance/product-naming-conventions.md` ; `conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md` ; `ux-ui/espace-projet-interaction-pilote-nora.md` ; `architecture-technique/cadrage-r4.md` ; diagnostic Documents de l'étape 1 et Figma page 08.

**Important :** les textes R3/R4 comportent des snapshots historiques antérieurs au code actuel. Ils restent des sources de conception à replacer dans le temps, pas une preuve que l'application serait encore NON IMPLÉMENTÉE. Contradiction fonctionnel/architecture actuelle vs code = **KNOWN GAP** à synchroniser dans le même lot d'intégration.

**Référence Journal :** décision Morris du 19/11/2026 d'accepter **Journal V4 en RECETTE avec réserves**, [dossier de recette sur branche distincte](https://github.com/mcleland147/sfia-workspace/blob/docs/next-journal-v4-recette-20261119/projects/sfia-studio-next/validation-qualite/journal-v4-recette-utilisateur-20261119.md). Journal non clos sur Git ; pas d'intégration isolée prévue avant la fin de l'Ensemble 06.

## 3. Contrat visuel : Figma page 08

La page 08 et ses huit frames constituent la référence d'acceptation de disposition, non une garantie de comportement runtime. La taille source est **1680 × 970** ; conserver les principes au breakpoint cible sans écraser les contenus.

| Frame | État / surface | Contenu contractuel UX |
|---|---|---|
| `08.01 / 930:3` | Bibliothèque | Rail permanent ; liste de documents ~70 % ; fiche et actions contextuelles ~30 %. Sélection sans ouverture immédiate ; « Ouvrir », « Reprendre avec Nora », « Voir les versions », « Sources / provenance ». |
| `08.02 / 930:4` | Lecture | Document rendu principal ~70 % ; actions à droite ~30 % ; « Demander une révision », « Historique », « Origine et références ». Pas de textarea. |
| `08.03 / 930:5` | Travail + Nora | Rail conservé ; **chat gauche / visionneuse existante droite 50/50** ; document et version ciblés visibles dès l'entrée, sans nouveau fil. |
| `08.04 / 930:6` | Historique initial | Liste des révisions ~70 % ; version sélectionnée et actions ~30 % ; tags courant/historique. Comparateur **replié par défaut**. |
| `08.05 / 930:7` | Historique, comparateur ouvert | Après clic « Comparer deux versions », afficher deux sélecteurs, puis « Afficher la comparaison ». |
| `08.06 / 930:8` | Comparaison | Deux documents en 50/50, versions explicitement nommées, changements distinguables, retour Historique. Lecture seule. |
| `08.07 / 930:9` | Nora, base historique | Nora détecte V2 historique face à V3 courante ; indique les deux options et demande confirmation de la base choisie avant la révision. |
| `08.08 / 930:10` | Nora, proposition candidate | Proposition documentaire non enregistrée affichable dans la visionneuse ; demande explicite de conservation ; futur V4 sans altération de V1–V3. |

**Réutilisation obligatoire :** ne pas réimplémenter `NoraConversation`, `ProjectChrome` ou `TravailViewer` pour obtenir le 50/50 ; adapter leurs contrats de transition et la référence ciblée seulement si nécessaire. La sélection de la version historique doit rester cohérente après retour navigateur et reprise de session. Toute différence visuelle structurante entre Figma et capture runtime est un écart à qualifier, pas une validation implicite.

## 4. Contrats fonctionnels et transitions

### 4.1. Bibliothèque → sélection → lecture

1. Entrer dans Documents n'ouvre aucun document par déduction.
2. Sélectionner une ligne affiche la fiche du **document exact** dans le panneau droit. Une sélection ne lit pas/écrit pas de contenu non autorisé.
3. « Ouvrir » affiche la version **réellement disponible** ; une version indisponible, en erreur ou inconnue n'est pas substituée silencieusement.
4. « Reprendre avec Nora » ouvre Travail avec le même document et la version ciblée dans la visionneuse, en conservant le fil conversationnel du projet.
5. « Voir les versions » ouvre l'historique du même document ; « Sources / provenance » expose seulement les références vérifiées (source conversationnelle, ID/version, origine D4 et éventuel lien Git/commit effectivement résolu).
6. État vide, refus d'accès, chargement, document absent et erreur de lecture donnent un résultat explicite.

**Critères anti-ambiguïté :** l'identité documentaire ne doit pas être déduite d'un titre seul si plusieurs documents peuvent correspondre. Une référence Git facultative ne rend pas Git obligatoire pour consulter la ressource interne.

### 4.2. Lecture et version historique

- Depuis Historique, « Lire cette version » ouvre **l'ID exact de la révision** choisie, jamais un fallback vers `latest`.
- La lecture historique est signalée comme telle et conserve un retour clair vers son historique.
- Le label « Courante » est une **projection métier** de D4 ; le label « Historique » n'est pas le statut technique `AVAILABLE`.
- Un statut technique `SAVING`, `FAILED` ou `UNKNOWN` ne doit jamais être présenté comme contenu courant confirmé. Préserver la distinction « dernière version attribuée » / « dernière version disponible vérifiée ».
- Une lecture, comparaison ou sélection ne déclenche ni création de version, ni révision, ni acte métier D6.

### 4.3. Historique et comparaison

- Historique : versions du même document, sélection explicite et navigation réversible ; ordre par numéro de révision, badges lisibles.
- Comparateur replié **à l'arrivée**, même si l'utilisateur l'a déplié dans une session précédente, sauf comportement de continuité explicitement qualifié sans surprise.
- Ouverture : deux sélecteurs indiquent les numéros et identités exacts des révisions. L'utilisateur peut comparer V1/V2, V1/V3 ou V2/V3, **dans n'importe quel ordre de sélection**.
- Le bouton « Afficher la comparaison » n'agit que pour deux versions distinctes, autorisées et `AVAILABLE`.
- Rendu double 50/50 du contenu de chacune des révisions ; différences identifiables et localisation/explication adaptée. Ne pas confondre un simple compteur d'ajouts/suppressions avec une comparaison visuelle complète.
- En cas de limite algorithmique `DIFF_BUDGET_EXCEEDED`, afficher explicitement une comparaison dégradée/non exhaustive ; ne jamais inventer un diff détaillé ni un PASS.
- Retour à l'historique et lecture indépendante sans modification.

## 5. Contrat Nora → révision documentaire

### 5.1. Intention et référence structurée

« Demander une révision » depuis Lecture ou Historique :

1. ouvre la **surface Travail existante** ;
2. affiche immédiatement à droite le document et la révision sélectionnée, sous réserve de relecture D4 autorisée ;
3. conserve à gauche le **fil unique** et le composeur de Nora, sans envoi automatique de message ;
4. transmet au contexte de la demande au minimum l'identité du projet/préparation, du document, de la `sourceRevisionId` et de son numéro, en garantissant que le Pilote ne change pas involontairement de cible ;
5. permet à Nora de clarifier la section, le but, les contraintes et les ambiguïtés avant toute proposition.

Le raccord peut réutiliser les identités `TravailViewerResource` et les outils D4 existants ; **ne pas inventer un second protocole conversationnel**. Le canal choisi pour transmettre ce contexte doit être résistant aux reloads et contrôlé en droits côté serveur, et ne doit pas se limiter à une information visuelle côté client.

### 5.2. Révision courante

Pour V1, V2, V3 disponibles et V3 courante :

- Nora prend V3 comme base après vérification D4.
- Nora produit une **proposition** complète ou ciblée, explicitement non enregistrée.
- Le Pilote peut poursuivre le dialogue et demander des corrections sans faire muter D4 à chaque phrase.
- La conservation résulte d'une **intention explicite** du Pilote dans la conversation ou via l'action de confirmation associée à la proposition, sans créer de HumanDecision D6 ni d'éditeur manuel.
- D4 effectue une révision idempotente, attribue V4 si les préconditions sont satisfaites, puis retourne un accusé vérifiable avant affichage « Disponible ».

### 5.3. Révision d'une ancienne version : V2 → V4

**Règle validée par Morris :** la version utilisée comme base de rédaction peut être V1 ou V2 ; le résultat enregistré est toujours la version suivant le dernier numéro attribué au document, **V4** dans l'exemple V1/V2/V3.

Parcours attendu :

1. Le Pilote choisit la révision exacte V2 dans l'historique, puis « Retravailler avec Nora ».
2. D4 restitue l'identité et le contenu de V2, et indique la dernière révision connue (V3) ainsi que sa disponibilité.
3. Nora énonce clairement : « Tu repars de V2, mais V3 existe. Souhaites-tu baser la nouvelle version sur V2 ou repartir de V3 ? »
4. Nora **attend la confirmation** de la base historique lorsque le choix est déterminant ; un simple clic « Lire V2 » n'est pas une confirmation de révision.
5. Nora prépare le contenu candidat à partir de la base confirmée, sans réécrire les autres versions ni les règles/autorités métier applicables.
6. Le Pilote demande la conservation. D4 vérifie atomiquement les préconditions, crée **V4** avec référence à la base V2 et aux confirmations pertinentes.
7. V1/V2/V3 restent inchangées, disponibles selon leurs états et droits. V4 devient courante uniquement après effet durable confirmé.

**Important :** l'avertissement sur la base historique et la concurrence technique sont deux causes distinctes. L'une n'autorise pas à ignorer l'autre.

### 5.4. Cas limite : actualisation concurrente

Si Nora et le Pilote ont pris connaissance de V3, mais qu'une V4 est créée entre la préparation et l'enregistrement de leur proposition :

- le système doit détecter le changement au point de commit ;
- ne pas attribuer V4 à la nouvelle proposition si V4 est déjà attribuée ;
- arrêter la conservation, conserver le candidat et la corrélation, exposer la nouvelle version courante et demander la requalification/confirmation nécessaire ;
- après nouvelle intention autorisée, le prochain numéro sera **V5**.

Le système ne doit ni utiliser aveuglément `latest AVAILABLE` comme tête pour contourner un `UNKNOWN/SAVING`, ni écraser les autres révisions, ni répéter l'effet en cas de retry.

## 6. Invariants D4 et protocole technique candidat

Cette section est une **proposition de contrat technique à valider**, non un mandat d'implémenter un schéma déterminé.

### 6.1. Vérités existantes

Le schéma `documents` / `document_revisions` porte déjà `revisionNumber`, `baseRevisionId`, `status`, `correlationKey` et `provenanceJson`. Le service actuel `reviseDocument` verrouille le document, vérifie la base et attribue `latest.revisionNumber + 1`, mais retourne `BASE_STALE` si la base n'est pas la dernière révision `AVAILABLE`. C'est un **écart fonctionnel identifié** : ne pas retirer ce garde-fou sans remplacement équivalent.

### 6.2. Contrat atomique attendu

L'interface métier de commande devra distinguer **trois données indépendantes** :

- `sourceRevisionId` : révision choisie pour construire le nouveau contenu, parfois historique ;
- `observedHeadRevisionId` (ou équivalent) : révision courante exacte observée par le Pilote/Nora au moment de la confirmation ; le serveur doit également connaître l'état des numéros attribués et les opérations non terminales ;
- `confirmedHistoricalSource` : preuve de confirmation explicite du choix historique lorsque nécessaire, liée à la portée de la commande, sans réutilisation abusive.

**Au point de conservation**, sous propriétaire et verrou de document uniques :

1. Contrôler droits, existence, association document/révision, disponibilité du contenu source, contexte et ownership du tour Nora si applicable.
2. Rejouer à l'identique les commandes déjà identifiées par une `correlationKey` et une empreinte scellée ; toute divergence de payload sous la même clé conduit à CONFLICT, pas à un second effet.
3. Vérifier que la tête observée à la confirmation reste applicable ; si elle a changé, revenir à Nora/Pilote pour requalification.
4. Refuser l'acceptation silencieuse d'une révision plus récente `SAVING`, `FAILED` ou `UNKNOWN` ; résoudre/reconcilier l'incertitude selon les mécanismes existants avant nouveau numéro.
5. Si la source est historique, vérifier que l'autorisation de reprendre cette source reste rattachée à la **commande exacte** et à la tête observée, et non au simple document.
6. Attribuer atomiquement le **numéro strictement supérieur au plus grand numéro durablement attribué** à ce document, sans réutilisation de numéro après échec, masquage ou suppression.
7. Enregistrer une nouvelle révision sous une nouvelle identité, la filiation, la provenance, les repères de commande et les empreintes nécessaires ; conserver V1–V3.
8. Retourner état, numéro/identité exacts et preuve de persistance. Le client ne présente une nouvelle version comme disponible que sur résultat effectivement confirmé.

**Anti-patterns interdits :** remplacer le contenu de V2/V3, positionner un indicateur courant concurrent qui diverge du numéro canonique, « rebasing » tacite vers latest, contourner les droits via un ID d'URL, déclencher une sauvegarde au seul affichage, supprimer les tables de contrôle concurrent/idempotence.

### 6.3. Filiation et données minimales

Priorité à la **réutilisation** de `baseRevisionId` et de `provenanceJson`, sans migration gratuite. Le contrat définit logiquement :

| Information | Propriétaire | Attendu |
|---|---|---|
| Document et projet/préparation/pilote | D4 | Liaison, droits et isolation vérifiables |
| Source de rédaction choisie | D4 | Identité révision exacte, potentiellement historique |
| Dernière version observée/confirmée | D4 + acte Pilote | Empreinte ou identité contrôlée au commit |
| Confirmation du choix historique | D3/Pilote → D4 | Explicite et reliée au contexte et à la commande |
| Nouveau numéro attribué | D4 | Monotone et unique |
| Disponibilité technique | D4 | `SAVING/AVAILABLE/FAILED/UNKNOWN`, sans masquer les états inconnus |
| Provenance et source | D4 | Origine vérifiable, version, source conversationnelle/commande, portée |
| Badge « Courante » / « Historique » | Projection UI/Nora de D4 | Calculé, non autorité persistante concurrente |
| Publication Git | D9 seulement | Opération, droits et preuve distincts |

Un nouveau champ ou une migration n'est proposé **que si** une preuve d'insuffisance du schéma/protocole existant le justifie, avec blast radius, migration/rollback et tests. Le champ `baseRevisionId` existant peut représenter la source historique, mais le modèle doit également tracer la tête observée ou la condition de concurrence via un mécanisme fiable.

### 6.4. Contrat d'erreurs, reprise et idempotence

| Situation | Comportement attendu |
|---|---|
| Document/version inaccessible | DENIED/NOT_FOUND sans contenu ni information interprojet révélée |
| Source historique non disponible | Pas de proposition prétendant être fondée sur son contenu ; clarification ou refus |
| Tête devenue plus récente avant commit | CONFLICT ; candidat conservé ; nouvelle confirmation si nécessaire |
| Tête en sauvegarde ou incertaine | UNKNOWN/STALE ou équivalent explicite ; pas de numéro promis |
| ACK perdu après commit | Relecture scellée par corrélation ; **ne pas redéclencher** une autre version |
| Retry même clé / même payload | Résultat du même effet, aucun V5 en doublon |
| Retry même clé / payload différent | CONFLICT |
| Perte d'ownership du tour | STOP/FAILED sans mutation |
| Diff trop volumineux | Résultat dégradé visible, sans faux diff complet |
| Navigation interdocument/projet | Références périmées invalidées ; interdiction de montrer un contenu d'un autre propriétaire |
| Source/provenance non résolue | Provenance « indisponible/non vérifiée » ; jamais lien/commit inventé |

Le protocole de reprise doit conserver suffisamment d'information pour distinguer **proposition non enregistrée**, **enregistrement inconnu** et **enregistrement disponible confirmé**.

## 7. Responsabilités et blast radius

| Domaine | Responsabilité | Zone d'impact principale |
|---|---|---|
| Pilote | Sélectionner, formuler la demande, confirmer la base historique, autoriser la conservation | UX/intentions |
| D3 / Nora | Cibler, avertir, clarifier, composer la proposition, poursuivre dans le même fil | `document-act.ts`, `document-command.ts`, service conversation, projection |
| D4 / Documents | Protéger versions, isolation, concurrence, numérotation, disponibilité, sources et lecture ciblée | `domains/document/service.ts`, `d4-read-tools.ts`, schéma si strictement nécessaire |
| UX / Espace Projet | Rail, listes, inspection, historique, comparaison, ouverture de la visionneuse existante | `DocumentSurfaces.tsx`, `app/projects/[projectId]/page.tsx`, `TravailViewer.tsx` |
| D6 | Aucune mutation de HumanDecision par l'effet documentaire | Régression négative |
| D7/D8 | Exécution technique et qualification de preuves selon le processus externe | Tests, report Cursor, revue |
| D9 | Autorité et traçabilité Git distinctes de la révision interne | Non-régression publication |
| Gouvernance Morris | Validation contrat, GO technique, recette, gates de l'Ensemble 06 | Décisions/PR/merge/promotions distincts |

**Blast radius à confirmer par Cursor sous contrat :** API de commandes documentaires, schéma & migrations, traitement des messages Nora, contexte D4, navigation/URL et retour, tests unitaires/PG/browser, portées des références de source, compatibilité clients existants et ergonomie responsive. Ne pas autoriser Cursor à modifier les surfaces Journal/D6/D9 par commodité.

## 8. Stratégie de réalisation : macro-lot Documents unique

**Résultat intégré :** un Pilote utilise la Bibliothèque, consulte, compare, retourne dans son fil avec Nora, fait produire une nouvelle version d'une base historique ou courante et la retrouve après reprise, avec protections et preuves.

**Sous-travaux intégrés dans un seul macro-lot**, non des micro-lots indépendants :

- UX/runtime : Bibliothèque 70/30, Lecture 70/30, Historique 70/30, comparaison ouverte sur demande, comparateur 50/50 ; retirer le parcours d'édition manuelle et conserver le rail.
- D3/continuité : document et version ciblés dans Travail, Nora informée de la base historique, confirmation explicite, proposition candidate inspectable.
- D4/transaction : numérotation et filiation, contrôle de concurrence indépendant de la base historique, provenance, idempotence, erreurs.
- Tests & preuve : scénarios nominaux/négatifs, PG, navigateur, captures RECETTE, observabilité.
- Documentation : architecture CURRENT, interfaces et contrats cohérents avec le code livré, dette/exits et rapport de revue dans le **même cycle d'intégration**.

**Dépendances :** Figma page 08 validée ; diagnostic étape 1 accepté ; contrat étape 2 à valider ; branch/code base locaux Cursor à observer ; ensemble 06 journal à ne pas intégrer séparément.

**STOP avant technique :** absence d'un GO Morris D3 ; contradiction majeure source/code/UX ; branche/source non identifiées ; contournement de `BASE_STALE` sans protocole concurrent alternatif ; risque de migration non instruite ; ambiguïté sur la suppression de versions ; blocage de preuve. Aucun prompt Cursor n'est généré dans ce document.

## 9. Matrice d'acceptation produit et preuves

Les identifiants DOC-UAT reprennent le diagnostic approuvé. Les niveaux de preuve doivent être explicités (**DETERMINISTIC**, **PG**, **BROWSER**, **LIVE/REAL manuel** si autorisé) ; la présence d'un test n'est pas son exécution.

| ID | Parcours / invariant | Vérification attendue |
|---|---|---|
| DOC-UAT-01 | Sélection sans ouverture | Browser : fiche droite actualisée sans changement implicite de surface |
| DOC-UAT-02 | Lecture 70/30 | Browser + capture runtime comparée aux frames 930:3/930:4 |
| DOC-UAT-03 | Documents → Travail | Browser : fil unique à gauche, bon document/version chargés à droite en 50/50, y compris après reload |
| DOC-UAT-04 | Pas d'édition manuelle | Browser/DOM : aucun `textarea` de modification documentaire ni voie de mutation Pilote non encadrée ; API protégée |
| DOC-UAT-05 | Courante / Historique | Unit + PG + Browser : labels fondés sur données D4, états techniques distingués |
| DOC-UAT-06 | Lire version historique exacte | PG/API + Browser : V2 affichée, pas fallback V3 |
| DOC-UAT-07 | Comparateur replié puis libre | Browser : ouverture conditionnelle ; choix V1/V3 et V2/V3 ; rendu 50/50 |
| DOC-UAT-08 | Nora avertit V2 historique | Qualification D3 + Browser : V3 mentionnée, question déterminante, pas d'enregistrement avant réponse |
| DOC-UAT-09 | Révision V2 → V4 | PG + Browser : `sourceRevisionId=V2`, V4 durable ; V1/V2/V3 intègres, filiation visible |
| DOC-UAT-10 | Concurrence V2/V3/V4 | PG : V4 concurrente après confirmation entraîne CONFLICT, pas de double V4 ; nouvelle intention → V5 |
| DOC-UAT-11 | ACK perdu / idempotence | Unit + PG : même `correlationKey` et payload → un seul effet ; variation → CONFLICT |
| DOC-UAT-12 | Droits/source absente | Unit + PG + Browser : refus/non disponible explicite, pas de fuite entre projets |
| DOC-UAT-13 | Git distinct | DETERMINISTIC + Browser : conserver V4 n'entraîne ni commit ni publication D9 |
| DOC-TECH-14 | États D4 incertains | PG : `SAVING/FAILED/UNKNOWN` non exposés comme AVAILABLE ; reprise sans invention |
| DOC-TECH-15 | Diff volumineux | Unit + Browser : `DEGRADED` explicite, pas de comparaison fictive |
| DOC-TECH-16 | Navigation multi-documents | Browser : changement rapide A→B, retour, back/forward et absence de race montrant A sous B |
| DOC-TECH-17 | Reprise de session | Browser/PG : fil existant, dernière version réelle, aucune sauvegarde candidate fantôme |
| DOC-TECH-18 | Régression transversale | Tests ciblés Journal V4, Travail/Ensemble 05, D4 ML2, commandes ML4C, D6 et D9 selon blast radius réel |

**Preuves attendues dans le Review Pack SFIA v2.6 :** SHA/base/branche, inventaire complet du diff et des éventuelles migrations, créations et modifications intégrales/diffs exploitables, tests exécutés et périmètres, captures runtime, erreurs/limites, identité de RECETTE/BUILD, résidus de dette, verdict, handoff canonique validé. Un résumé seul ne vaut pas revue de code.

**Critères de sortie :** intégration UX comportementale conforme, versionnement historique sûr, aucun éditeur manuel utilisateur, aucune régression des autorités, et capacité de Morris à réaliser sa recette sur des données RECETTE sans campagne LIVE non autorisée.

## 10. Dette, exclusions et gates

**Dette évitée :** pas de second service D4, deuxième fil, nouveau store de versions, migration « pour faire propre », gestion de documents externes universelle, modèle `currentVersion` redondant, POC ou fixture qui remplace la preuve cible.

**Dette/limites possibles :** provenance d'anciennes versions incomplète (ne pas inventer), algorithme de comparaison dégradé sous budget (signalé), suppression de versions hors lot, responsive sur affichages étroits à qualifier, limites LIVE/REAL explicitement bornées.

**Gates distincts :**

1. **Gate A — contrat :** Morris examine et valide ou corrige le présent candidat. `VALIDATED SPEC` seulement après décision explicite.
2. **Gate B — construction :** pré-check Git/code/branche local Cursor ; prompt v2.6 depuis les fichiers Git officiels ; GO technique précis ; code/tests/doc dans un macro-lot.
3. **Gate C — recette Documents :** parcours UAT, preuves, réserves, validation Morris.
4. **Gate Ensemble 06 :** Journal V4 accepté avec réserves **et** Documents acceptés ; réconciliation intégrée code/contrats/architecture/Roadmap/preuves, PR/merge sous GO ; aucune clôture isolée par défaut.
5. **Gate promotions :** RECETTE, STABLE, RELEASE, ADOPTED non déduits de Figma, du commit de ce contrat ou d'un PASS de tests limité.

**Verdict actuel :** `DOCUMENTED / CONTRACT CANDIDATE — READY FOR MORRIS REVIEW`.
**Prochaine capacité :** si approuvé, préparation du macro-lot Documents exécutable par Cursor. Sinon, correction ciblée du même document. Aucune exécution technique ni intégration Git globale engagée.
