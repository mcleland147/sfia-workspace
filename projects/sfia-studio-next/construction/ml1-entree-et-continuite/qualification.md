# SFIA Studio Next — R5 / ML1 · Qualification de la première capacité verticale

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.


**Statut :** `D0 — QUALIFICATION CANDIDATE / NOT VALIDATED SPEC / NO CODE / NO CURSOR PROMPT / GIT CANDIDATE NON MERGÉ`  
**Date :** 2026-11-04 (Europe/Paris)  
**Dépôt/ref inspecté :** `mcleland147/sfia-workspace`, `main@a0b80b9ecd64149ed51f87235ae246e197e66462`, PR #646 `MERGED` ; `main` protégée ; Git local, fichiers staged/untracked et worktrees : **NON OBSERVÉS**.  
**Méthode :** SEF v0.2, Next R1–R4, ENV-01, SFIA v2.6 (processus externe, **aucun prompt instancié**).  
**Statut produit :** Studio Next `N/A — NON IMPLÉMENTÉ`; ni environnement, ni code, ni preuve browser/LIVE/REAL, ni STABLE, ni ADOPTED observés.

## 1. Pourquoi ce macro-lot existe

**Résultat utilisateur attendu** : un Pilote entre dans Studio avec son identité, retrouve son portefeuille, explore une nouvelle intention avec Nora **sans projet**, retrouve sa préparation après interruption, peut produire un premier document de sas, crée son projet **par un acte explicite**, puis continue dans le même fil visible avec les références et informations réellement persistées. Le portefeuille reflète le projet enregistré, sans l'inventer. Pas de cycle, CKI, dépôt Git, mandat ou tentative d'exécution créés par défaut.

**Trajectoire** : fondation produit réellement utilisable sur PostgreSQL et lanes DEV/RECETTE gouvernées → rend possibles la production/capitalisation avancée (ML2), le pilotage/autorité (ML3), les sources facultatives (ML4), l'exécution gouvernée (ML5). **Pas** de relecture exhaustive des 9 domaines à chaque interaction.

**Références canoniques** :

- R1, vision `cadrage/vision-produit.md`, **E2E 01 §2.30**, E2E 03 §2.32 pour la part cognitive, E2E 04 §2.33 pour reprise ; E2E 07 §2.36 pour les interdictions de confusion Git/projet.
- R2 D1 `conception-fonctionnelle/acces-et-portefeuille.md` : 25 `RG-ACC` et 24 `PF-ACC` ; R2 D2 `creation-de-projet-et-continuite-du-sas.md` : 27 `RG-CRE` et 27 `PF-CRE`, **dont complément post-clôture `CRE-027`** ; interfaces ciblées D3/D4.
- R3 `ux-ui/contrat-transposition-figma-code.md`, `ux-ui/index-geometrie-frames-r3.json` et fichier Figma `itgvCulInEnFY6DvgIegvP`. R3 couvre les familles/variantes ; **géométrie profonde partielle**.
- R4 `architecture-technique/cadrage-r4.md` §§5.3 et 8.1, ADR **R4-01/02**, DATA-01, ENV-01, QA **A01–A16**.
- Matrice de rattachement précise : `sfia-next-r5-matrice-tracabilite-ml1-v0.1.md` ; inventaire D1/D2 : `sfia-next-r5-r2-ml1-inventaire-v0.1.csv`. Ces deux artefacts sont locaux, non Git, proposés pour revue.

## 2. Périmètre IN / OUT et propriétaires

| Famille | IN ML1 (résultat testable) | OUT / propriétaire ultérieur |
|---|---|---|
| D1 — Identité/portefeuille | Authentification et session applicables, isolation des Pilotes, liste personnelle, choix explicite, navigation sans Nora globale, erreurs et reprise | Suppression/transfert de projets non spécifiés par D1 ; aucun droit de dépôt créé par login |
| D2 — Sas/création | Préparation durable et récupérable, aperçu non autorisant, acte « Créer le projet », vérification du résultat, double clic/timeout/restart, projet unique par préparation, retour au même fil | Aucun cycle/CKI/contrat Cursor ou dépôt lancé ; pas de seconde version de vérité « projet » |
| D3 — Conversation Nora minimale | Dialogue utile avec/sans projet, question ciblée, récupération pertinente, absence de GO déduit du texte, limites de la source et des capacités | Cycle/méthode/CKI complets et arrêt d'exécuteur réel ; réalisation positive ML3/ML5 |
| D4 — Première ressource documentaire | Brouillon dans le sas, identité/version/état de sauvegarde vérifiables, références/provenance conservées au rattachement | Gestion documentaire approfondie, vues de versions, révision collaborative et connaissance structurée ML2 |
| D5/D6 — Frontière | Démontrer **l'absence** de cycle et d'autorisation d'effet implicites ; ne pas promouvoir hypothèse → décision | Cycle actif, décisions et mandats durables ML3 |
| D7/D8/D9 — Frontière | Pas d'exécution, de preuve fictive ni d'effet Git par simple création/navigation | Intégrations Git ML4, effet externe/contrat/preuve ML5 ; si un test positif de Git devient nécessaire, gate distinct |
| ENV-01 | Développement et recette isolés, gestion SHA candidat, secrets/bases séparées, contrat de promotion | STABLE non déclarée « opérationnelle » avant build validé/promu ; R6 ne remplace pas les tests ML1 |

### 2.1. Frontières à ne pas casser

- **R1/R2 :** la continuité du *même fil visible* est un besoin produit ; cela n'autorise pas à inventer une équivalence « historique intégral envoyé au modèle ». La sélection de contexte relève de D3/D4.
- **R4 V-A :** préparation durable indépendante, association au projet lors de l'acte explicite, transaction côté métadonnées essentielles, sans transfert systématique/copie du fil ni double base autoritative.
- **R2 D4 :** un document de sas peut exister avant projet ; l'association ultérieure préserve son identité et ne prétend pas que les octets ont été durablement sauvegardés lorsque ce n'est pas établi.
- **R2 D1 :** la connexion Studio, les droits de lecture GitHub et les droits d'un exécuteur sont trois faits distincts ; seul le premier est nécessaire au parcours nominal ML1.
- **Nommage :** modules/classes/API nommés selon leur responsabilité durable, jamais selon `ML1`, `R5`, `F2` ou `legacy`.

## 3. Contrat technique à construire, sans anticiper les choix ouverts

| Fonctionnalité | Contrat technique exigé | R2 | Oracle / preuve R4 | Points encore à concevoir en R5 |
|---|---|---|---|---|
| Identité/session | Résolution fiable du Pilote, session valide/révoquée/expirée, vérification systématique de propriété | ACC-001..007, ACC-015/021 ; PF-ACC-01..04/10 | A10 + refus cross-account | Fournisseur/session, modèle de révocation, stockage des secrets et erreurs exactes |
| Portefeuille/entrée | Projets réellement persistés et autorisés ; distinction absence/erreur/état inconnu ; aucune Nora globale | ACC-008..018, ACC-020/023/025 ; PF-ACC-05/08/09/11/14/15 | A01, A14 | Contrats de lecture/projections, routes, états et pagination adaptés |
| Préparation | Identité durable d'une préparation sans `Project`, propriétaire, version, historique/références récupérables | CRE-001..007/015/027 ; PF-CRE-01..06/13/27 | A01, A02, A08, A09 | États persistés, révisions, contrôle de concurrence, politique DATA-01 |
| Conversation Nora | Produire une réponse utile et fidèlement restituée ; distinguer proposition, constat, source et autorité | CONV-001..006, CTX-001..008 ; CRE-002/003/016 | A02, A06, A11, A13 | SDK/provider, session, messages, budget, règles de currentness, séparation cognition/effet |
| Création explicite | Vérifier l'acte humain, version de la préparation, droit du Pilote, unicité et idempotence ; succès uniquement après preuve DB | CRE-008..014/024/025 ; PF-CRE-07..14/16/24/25 | A03..A06, A10, A12, A15 | Noms et payloads des commandes, contrainte DB, clé d'idempotence, gestion d'ACK perdu |
| Continuité | Résoudre le contexte après association, conserver le fil visible, marqueur fondé sur effet vrai, recharger après incident | CRE-017..024/026 ; PF-CRE-15..23 | A07, A11, A13, A16 | Identifiants et flux d'association, ordre de messages, réhydratation, provenance |
| Document du sas | Ressource/version et état SAVING/SAVED/FAILED/UNKNOWN non fictifs, association correcte après création | CRE-027 ; KNOW-016..020 ; PF-CRE-27 | A08, A09, A13, A16 | Métadonnées DB, stockage d'octets, transactions/compensation, stratégie d'erreurs |
| Lanes/recette | Trois configurations isolables ; candidat immuable testé en RECETTE ; non-contamination et restauration | ENV-01, DATA-01 | A16 + contrôles ENV-01 | Scripts/ports/config réels, exploitation PostgreSQL, sauvegarde, smoke tests |

**Orientation approuvée R4 (ne pas rouvrir sans motif) :** application modulaire neuve, frontière transactionnelle V-A et **PostgreSQL dès le premier incrément R5**, responsabilités D1–D4 distinctes et sans duplication d'autorité. **Non décidés à ce niveau** : framework, ORM, schéma final, routes, protocole exact des agents, UI kit, outils de migration ou d'authentification.

### 3.1. Données/invariants qui conditionnent le code

1. **Une préparation peut exister sans projet** et ne crée rien d'autre à elle seule.
2. Une préparation n'est associée qu'à un projet réellement créé ; les appels répétés retrouvent le même résultat ou exposent un état indéterminé à réconcilier.
3. L'acte « Créer le projet » est distinct du texte Nora, d'un résumé ou du simple rafraîchissement d'une vue.
4. La création et l'association de la préparation sont **atomiques dans la frontière transactionnelle décidée** ; les ressources externes à cette transaction ont un état séparé et vérifiable.
5. Toute lecture vérifie identité et droits courants ; un même dépôt/source externe accessible ne fusionne pas les préparations/projets de deux Pilotes.
6. Messages et documents ont des références et statuts vérifiables ; le fil reste visible, mais le modèle cognitif consomme une sélection de contexte proportionnée.
7. Une perte d'ACK, un crash ou un double clic ne mène pas à une seconde création cachée.
8. L'absence d'un fournisseur externe (Git/Cursor) n'interdit pas de poursuivre le nominal du sas/projet si cette capacité est indépendante.

**Contrats à choisir explicitement avant code :** noms/type/versions des commandes, modèle et contraintes DB, politique d'auth/session, modèle des données documentaires, règles de retries et réconciliation, liens avec R2/R3, secrets/logs, scripts de recette. Ces mécanismes font partie de la future spécification technique détaillée, pas de la présente qualification D0.

## 4. Transposition UX R3 : cadre strict de consommation

**Source Figma :** `fileKey=itgvCulInEnFY6DvgIegvP`, page 01 `94:49`. **Snapshot index Git :** version v0.3 du 2026-11-03, blob `9d75cba6560896c279712982cd56b41488209685`. Les liens ci-dessous pointent sur les *frames Figma* ; celles-ci peuvent avoir changé depuis le snapshot.

| Parcours/état ML1 | Figma `node-id` vérifiés dans le manifeste | Caractère |
|---|---|---|
| Portefeuille et sas de référence | `94:50` (01), `94:135` (02), `94:214` (03) | Compositions centrales, à transposer fidèlement |
| Fil créé et reprise | `96:262` (13), `96:370` (14), `159:1153` (88) | Continuité, provenance, reprise après session |
| Accès et états portefeuille | `158:120` (62), `158:192` (63), `158:264` (64), `158:336` (65), `158:912` (73) | Connexion, expiration, liste/vide, retour sans projet |
| Sas, préparation, ambiguïté | `159:145` (74), `159:217` (75), `159:289` (76), `159:793` (83), `159:865` (84) | Réouverture, clarification, aperçu, sources, demande combinée |
| Création : en cours / inconnue / refus / retour | `159:361` (77), `159:433` (78), `159:505` (79), `159:577` (80), `159:649` (81), `159:937` (85), `159:1009` (86) | Cas négatifs indispensables |
| Document du sas | `159:721` (82), `162:457` (124) | Brouillon et inspection, lien ML2 à préserver |
| Nora utile et reprise | `161:216` (109), `161:288` (110), `187:276` (135), `162:241` (121) | Conversation, reprise, travail direct, connexion en cours |
| Variantes de composition | `94:1037` (10, 1280), `238:440` (199, 1280), `238:471` (200, 390), `238:581` (204, 1280) | Responsive/réponse longue/brouillon ; pertinence à confirmer par sous-fonction |
| Index de revue A | `169:275` | **Index de revue, pas écran à développer** |

**Obligations d'entrée UX pour Cursor :**

1. Extraire **depuis Figma natif** les descendants des composants touchés (identifiants, parents, contraintes, x/y/w/h, auto-layout, gaps, typographies, variables, interaction) et figer le snapshot/captures pour les références applicables.
2. Décider le **rail 240 vs 246 px**, les tokens communs et la calibration de comparaison ; le seuil ≤2 px est seulement **proposé**, pas validé.
3. Transposer un **composant par responsabilité avec états**, pas un écran technique par frame ; ne pas inventer un écran supplémentaire pour contourner une ambiguïté.
4. Vérifier le rendu navigateur et le comportement à 1680/1280/390 px et le reflow 320 px, focus/clavier/zoom/erreurs/long contenu. Les captures identiques ne prouvent pas la création réelle.
5. Toute divergence entre référence Figma, R2 et flux runtime devient `KNOWN GAP`, avec arbitrage au bon niveau ; Cursor ne choisit pas librement un nouveau design.

**Gate :** tant que l'extraction nécessaire n'est pas réalisée, ce lot n'est **pas « prêt à coder UX »**, même si la liste des frames est connue.

## 5. Contrat QA/proof et ENV-01

La [matrice ML1](sfia-next-r5-matrice-tracabilite-ml1-v0.1.md) attache **A01–A16** à des exigences, oracles et frames. Leur état à cette date est **`DESIGN ONLY / NOT EXECUTED`**.

**Niveaux adaptés, à prouver séparément :**

- **DETERMINISTIC/INTEGRATION :** identité/permissions, PostgreSQL transaction réelle, unicité et idempotence, données documents, refus et persistance après restart.
- **BROWSER :** parcours entrée/sas/création/fil/reprise, comparaison aux références Figma à SHA et viewport connus, navigation/clavier/responsive.
- **LIVE ciblé** si la capacité Nora réellement branchée est évaluée : pertinence et fidélité, droits/sources et limites sans test simulé présenté comme réel.
- **REAL externe Cursor/Git :** **N/A pour le nominal ML1** ; aucun claim de mutation Git, de STOP Cursor ou de preuve de réalisation externe.

**ENV-01 :** première capacité verticalement utile, DEV mutable et RECETTE isolée sur SHA figé, PostgreSQL/bases/comptes/secrets/volumes distincts ; STABLE seulement après promotion gouvernée. Une correction de recette crée un **nouveau candidat**. Pas de lecture/écriture secrète entre lanes, sauvegarde DATA-01 applicable, sans prétendre à une restauration testée avant exécution.

**Critère de sortie ML1 candidat** : le Pilote réalise E2E 01 de manière fiable dans RECETTE, les tests de non-effet/non-fuite sont exécutés, les 16 QA A pertinents sont évalués avec verdicts honnêtes, la comparaison UX pertinente existe, les données survivent à des interruptions vérifiées, les écarts et dettes sont tracés ; Morris statue sur l'intégration selon ses gates. **Pas d'ADOPTED implicite**.

## 6. Risques et arbitrages à préparer, pas à improviser

| Sujet | Risque réel | Traitement avant contrat d'exécution |
|---|---|---|
| Session/identité GitHub vs droits dépôt | Confusion de droits ou fuite inter-Pilotes | Contrat d'auth et de session, tests deux comptes, séparation scopes/tokens |
| Choix technique Nora | Session/mémoire éphémère, effet cognitif non borné | Option évaluée selon R2/R4, modèle de messages et règles de provenance, preuve LIVE ciblée |
| Sas et documents | Brouillon jetable dans un lot, puis double source lors de ML2 | Modèle D4 partagé dès ML1 et stratégies de conservation/état d'enregistrement |
| Crash/retry / concurrence | Deux projets, message perdu ou faux marqueur | Invariant DB, scénarios de panne A04–A06/A16, réconciliation explicite |
| Figma non entièrement extrait | Cursor comble les blancs de composition | Référence native/snapshot et arbitres visuels avant code |
| QA R4 non exécutée | Conception présentée comme preuve | Oracle concret, fixture, test, artefact, SHA, verdict par scénario |
| Taille du lot et dépendances D3/D4 | ML1 absorbe ML2/ML3 ou au contraire ne livre pas E2E 01 | Minimal vertical durable, interfaces explicites, scope positif et interdictions négatives |
| Gouvernance git/lanes | Recette mutable, secrets croisés, promotion tacite | ENV-01, diff/revue, SHA, gates Morris autonomes |

### 6.1. Ce qui relève d'un arbitrage Morris

- **Périmètre exact ML1 :** inclure le premier document de sas durable et Nora réellement utile, tout en renvoyant les capacités documentaires avancées à ML2 ; valider cette frontière de valeur.
- **Fidélité visuelle :** choix des références maîtres lorsque plusieurs frames du rail divergent, et tolérances de rendu visuel après étalonnage.
- **Pivot/écart R1–R4 :** si les contrats nécessitent un changement de vision, règle, UX ou ADR, passage par l'autorité et le document propriétaire correspondants.
- **Git/Cursor/code :** un GO technique séparé et borné, au moment où la spécification et les preuves attendues sont prêtes.

En revanche, le choix ordinaire d'un type interne, d'un nom de fonction ou d'un mécanisme conforme peut être préparé dans la spécification ML1 et revu dans son périmètre, sans soumettre une micro-décision à Morris.

## 7. Séquence proposée et STOP avant le code

1. **D0 — réalisé dans cette itération :** confirmer baseline Git/merge R4, relire R1–R4 applicables, inventorier D1/D2 (103 IDs) et QA A01–A16, pointer les références R3 dans le manifeste, qualifier IN/OUT et dépendances.
2. **D0 — à approfondir :** revue de correspondance avec les PF transversaux D3/D4, audit précis des états/couches Figma pertinents et inventaire des réserves R2/R3/R4 qui conditionnent ML1.
3. **D0 → D2 selon nature :** convertir la qualification en **spécification technique détaillée** conforme au modèle documentaire : contrats d'API, identité, données, transaction, erreurs, tests, UX mesurée et ENV-01. Mettre à la revue les arbitrages structurants, sans adopter de nouveaux mécanismes prématurément.
4. **Gate Morris :** validation explicite du contenu de la spécification et du périmètre à coder, puis mandat technique borné pour Cursor ; vérifier les sources Git canoniques SFIA v2.6 *au moment du prompt*.
5. **D3 technique Cursor, plus tard seulement :** code neuf + QA + UX + documentation dans le même macro-lot, Review Pack/handoff et recette selon ENV-01 ; aucun push projet/PR/merge/promotion par GO de préparation.

**STOP qualifiant :** changement d'autorité non arbitré, absence de garantie de transaction/idempotence, source Figma requise non extraite, preuve de droits indispensable non disponible, fournisseur d'effets externes non confiné, ou contexte Git/base divergent non requalifié. Les écarts non structurants peuvent rester des réserves avec owner et exit, mais ne sont pas « passés » tacitement.

## 8. Verdict et prochaine capacité

**Verdict : `ML1 QUALIFIED AT SOURCE/PERIMETER LEVEL — TECHNICAL SPEC NOT YET VALIDATED — UX EXTRACTION PENDING — CODE N/A — NON IMPLÉMENTÉ`.**

**Prochaine capacité après ML1** : documents/connaissances et continuité exploitable (ML2), sans devoir déplacer ou recréer les données du sas ; pilotage (ML3), lecture Git facultative (ML4) et exécution gouvernée (ML5) s'appuient sur le même noyau d'identité, de contexte et d'autorité.

**Aucune opération Git, aucun prompt Cursor, aucun démarrage R5 technique.**