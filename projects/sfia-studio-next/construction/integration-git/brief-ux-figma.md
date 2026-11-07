# Phase UX/Figma — Contrat de conception candidat ML4

**Statut ACTUEL : UX VALIDATED SPEC — Morris, 2026-11-07** (sections de préparation ci-dessous conservées comme historique).  
**Fichier Figma source (vérifié en lecture native le 2026-11-07) :** https://www.figma.com/design/itgvCulInEnFY6DvgIegvP  
**Page :** `01 · Parcours produit — Référence UX R3` (`94:49`) ; **223 frames au snapshot R3 historique**, **242 après création des écrans ML4 et INDEX**.  
**Autres pages :** `00 · Fondations — Composants UI` (`120:27`) ; `02 · Contrats visuels — Nora et états` (`104:14`).  
**Limites :** noms et structure Figma lus par connecteur ; deux screenshots générés par l'API mais non inspectés pixel à pixel dans le runtime. Pas de modification native, de capture immuable validée, de QA visuelle ou d'acceptation UX prétendue.

## 1. Positionnement

L'expérience « Intégrations » appartient à la **navigation générale de Studio**, pas à la conversation de Nora ni au paramétrage exclusif d'un projet. Elle doit néanmoins être déclenchable contextuellement depuis le sas, un projet et une demande de Nora. Le Pilote conserve son travail et revient au contexte précédent après le parcours GitHub.

**Principe :** développer une **surface Paramètres → Intégrations** durable, mais ne rendre réellement activable **que GitHub** dans ML4 ; pas de marketplace, pas d'extension runtime générique, pas de collection de boutons « Connecter » fictifs.

## 2. Surfaces existantes à réemployer (inventaire natif vérifié)

| Figma | Nom réel observé | Réemploi ML4 |
|---|---|---|
| [09](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=94-923) | Source Git — accès indisponible | Refus, accès manquant, dégradation Nora |
| [12](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=96-148) | Sources Git — consultation | Inspection sourcée |
| [70](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=158-696) | Portefeuille — Git non autorisé | Proposition facultative, sans bloquer portefeuille |
| [87](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=159-1081) | Sas — source Git consultée | Retour depuis autorisation contextuelle |
| [171](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-333) | Projet — sans dépôt Git | Non-obligation de dépôt |
| [172](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-471) | Sources Git — rattachement proposé | Sélection facultative de source |
| [173](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-609) | Sources Git — ressource sélectionnée | Relation repo / projet |
| [175](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-885) | Sources Git — référence et provenance | SHA, ref, original GitHub |
| [176](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-1023) | Sources Git — dépôt privé inaccessible | Autorisation manquante et alternative |
| [177](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-1161) | Sources Git — lecture révoquée | Révocation et information périmée |
| [178](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-1299) | Sources Git — identités et droits distincts | Identité Studio / App / opération |
| [182](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-1851) | Sources Git — base devenue périmée | Empêcher publication avec ancien HEAD |
| [184](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-2127) | Sources Git — cible d'effet sous contrat | Inspection mutation documentaire sous D7 |
| [185](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=236-2265) | Sources Git — commit, push, PR et merge | Représentation réelle de séquence Git, sans simuler commande API |
| [186](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=237-363) | Sources Git — accusé perdu et doublon évité | Réconciliation sans action répétée |
| [187](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=237-501) | Sources Git — publication distante échouée | Erreur Git partielle |
| [188](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=237-639) | Sources Git — merge non confirmé | Acte distinct de fusion |
| [190](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=237-915) | Sources Git — collision sur un même fichier | Conflit de base et de chemin |
| [191](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=237-1053) | Sources Git — rattachement retiré | **Ne pas confondre** retrait source projet et révocation App |
| [192](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=237-1191) | Sources Git — reprise après déconnexion | Reprise et accès requalifiés |
| [193](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=237-1329) | Sources Git — preuve insuffisante | SHA Git ≠ validation métier |

**Constat Figma natif :** aucune frame principale dénommée « Paramètres », « Intégrations », « Connecteurs » ou « Gestion de GitHub » n'a été retrouvée dans l'inventaire des 223 frames de la page produit. C'est un **gap de parcours**, pas la preuve que les composants de base sont absents.

## 3. Nouveaux écrans/states à concevoir — pas de numéro figé

| Surface | Contenus/fonctions clés | Sorties et variantes discriminantes |
|---|---|---|
| **A. Paramètres → Intégrations** | Fournisseur GitHub réel, statut de connexion, possibilité de connecter ou gérer, aide sur usage et permission | Non connecté ; connecté ; indisponible ; aucune liste de faux plugins |
| **B. Détail GitHub** | Compte/organisation, mode d'accès, dépôts effectivement autorisés, permissions lues côté serveur, accès personnel, scopes, date d'actualisation | Gérer les dépôts ; réautoriser ; déconnecter ; organisation en attente d'approbation |
| **C. Connexion facultative initiale** | Invitation post-login dismissible, sens et bénéfice de l'autorisation | Configurer / Plus tard ; Studio utilisable sans Git |
| **D. Appel contextuel Nora/projet** | Pourquoi le dépôt demandé est nécessaire, lien vers le parcours GitHub | Aller autoriser / continuer sans Git / retour à conversation ou projet préservé |
| **E. Retour GitHub / statut de vérification** | Progression sans certitude fictive, installation, autorisation du Pilote, dépôts effectivement visibles | Réussite vérifiée, erreur, autorisation partielle, organisation en attente, utilisateur différent |
| **F. Gestion de portée des sources du projet** | Choisir parmi les ressources réellement autorisées, refs, rattacher/détacher | Retrait projet **n'efface pas** installation ni documents Git |
| **G. Publication d'une révision Studio** | Document ID/révision/digest, repo/path/base/HEAD, diff, auteur Git effectif et restrictions | Réviser, annuler, demander autorisation pour commit/PR |
| **H. PR/merge et résultat** | PR réelle, base/head, contrôles disponibles, révision publiée, GO de merge séparé, statut final vérifié | En attente ; refusé ; HEAD changeant ; merge bloqué ; absence de preuves tests |

Ces écrans peuvent être **regroupés** si un parcours plus simple couvre l'ensemble des contrats : ne pas créer 8 pages au seul motif qu'il y a 8 états dans le tableau.

## 4. Parcours de navigation à prototyper

### Parcours 1 — facultatif après login (`N-15`, `N-16`, `N-17`, `N-18`)

Connexion Studio → portail/portefeuille utilisable → option « Connecter GitHub » ou « Plus tard » → Paramètres → choix GitHub → GitHub installation et autorisation → retour Studio → contrôle serveur des droits → statut et comptes lisibles.

### Parcours 2 — ajout ultérieur à la carte (`N-20`, `N-21`, `N-22`, `N-23`, `N-25`)

Paramètres → GitHub → dépôts accessibles → « Gérer les dépôts » **redirige vers GitHub** → changement sélection (selon droits) → retour et relecture réelle → nouveau dépôt utilisable → distinction : retirer du projet / retirer de l'installation / déconnecter.

### Parcours 3 — Nora rencontre une ressource non autorisée (`N-19`, `N-24`)

Pilote formule un besoin → Nora identifie un dépôt inaccessible **sans prétendre l'avoir lu** → proposition de permission utile → GitHub autorisation/approbation → retour au même fil et source/version revalidée, ou message d'impossibilité non bloquant.

### Parcours 4 — document publié depuis Studio (`N-02..N-13`)

Document D4 et révision durable → proposition de destination → inspection du diff (écran 184 réutilisé) → autorisation D6 → commit distant vérifié → PR ouverte (185) → review/contrôles → merge **nouvel acte** si éligible → état observé et lien document/Git en lecture après reconnexion.

## 5. Contrats d'état et de données des vues

Ne jamais afficher un simple statut trompeur « GitHub connecté » sans sa portée :

- `STUDIO AUTHENTIFIÉ` : information d'identité D1, **pas** permission Git.
- `APP NON INSTALLÉE / À CONFIGURER` : aucun droit repo présumé.
- `APP INSTALLÉE / AUTORISATION UTILISATEUR ABSENTE` : installation distincte du token user-to-server.
- `APPROBATION ORGANISATION EN ATTENTE` : aucun accès anticipé.
- `DÉPÔT AUTORISÉ EN LECTURE` ; `ÉCRITURE POSSIBLE SELON CONTROLES D6/D7` : les capacités sont vérifiées par opération au point d'effet.
- `RÉF PÉRIMÉE / DÉPÔT RETIRÉ / JETON RÉVOQUÉ` : dégradation proportionnée, référence historique toujours retrouvable si licite.
- `COMMIT DISTANT OBSERVÉ / PR OBSERVÉE / MERGE OBSERVÉ` : faits distincts ; jamais adoption inférée.

**Champs utiles :** ressource, dépôt, ref/SHA, statut d'accès, acteur Git réel, vérification de permission, version D4, état de l'opération, horodatage constaté et lien vers l'original si licite.

## 6. Contract de tests UX et visuels

- Figma : prototype cliquable pour tous les parcours et principales erreurs, état mobile `390px`, desktop `1680px` et compact `1280px` ; inspection `320px` et reflow selon contrat R3.
- Aucun bouton « Connecter » visible pour un futur provider non implémenté ; alternative : omettre entièrement ces fournisseurs du premier écran.
- Navigation clavier, focus visibles, sortie de dialogue, messages accessibles, absence de scroll horizontal parasite, textes longs et erreurs sans troncature des commandes.
- Retour de GitHub n'efface pas l'intention Nora, ni le document en cours ; l'incertitude est visible sans boucle bloquante.
- La sélection de droits par GitHub n'est pas représentée comme un formulaire Studio qui accorde lui-même les permissions.
- Aucune écriture, merge, suppression, publication ou déconnexion par simple affichage d'un aperçu.
- Contrat visuel de la nouvelle surface et **capture Figma native datée** avant code ; capture navigateur RECETTE nécessaire pour verdict fort après implémentation.

## 7. Workflow Figma proposé (pas encore réalisé)

1. Relever design system et primitives réutilisables depuis page 00, puis états/navigation Git page 01.
2. Modéliser le parcours « Intégrations » **dans le même fichier Next** sur une surface clairement identifiée et sans supprimer les frames R3 validées.
3. Prototyper connexion, sélection/ajout/retour, Nora contextuel, publication/PR/merge, erreurs/refus.
4. Vérifier cohérence D1–D9 et règles `RG-GIT-*`, accepter les variantes de plateforme GitHub réelle (user authorization vs installation, callback vs Setup URL selon configuration).
5. Capturer les frames versionnées et faire arbitrer Morris ; seulement ensuite transposer en contrat technique et code.

**Gate :** revue et validation visuelle Morris à réaliser ; **aucun changement Figma n'est revendiqué par ce document**.

---

## 8. Bilan de la phase Figma — validation Morris du 2026-11-07

Ce brief décrivait initialement les écrans « à concevoir ». Ils sont désormais **réalisés nativement et validés** : **18 écrans 218–235**, INDEX `388:425`, 36 liens de boutons et 27 liens de revue sur la page `94:49` (242 frames racines, contre 223 avant ML4). [Registre de traçabilité](../../ux-ui/integration-git-ux-ml4.md). **VALIDATED SPEC UX** seulement : aucune preuve de comportement navigateur, permission GitHub réelle ou publication distante ; snapshot Figma immuable non encore versionné sur Git.

**Attention :** 227→228 et 229→230 sont des passages illustratifs entre états **après décision/effet**, pas des actions techniques ni des autorisations automatiques. Les variantes en attente/révocation 222/223 sont consultables depuis l'INDEX sans callback réel.
