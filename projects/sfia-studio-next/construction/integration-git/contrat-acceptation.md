# R5 — Contrat de capacité candidat : Collaborer et publier avec Git

**Jalon :** R5 / macro-lot ML4 — nom de pilotage, **pas** nom de module permanent.  
**Statut :** `DOCUMENTED — DRAFT CONTRACT / NOT VALIDATED SPEC / NOT IMPLEMENTED / NOT AUTHORIZED FOR BUILD`  
**Base :** `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5`. Qualification candidate `3bb9224`, revue acceptée en conversation.  
**Propriétaire de décision et d'acceptation :** Morris. **Conception/revue :** ChatGPT. **Construction technique si autorisée :** Cursor sous SFIA v2.6.  
**Intégrateur :** à désigner au GO de construction.  
**UX :** phase Figma préalable à la validation définitive du présent contrat (voir `04-brief-ux-figma-ml4-candidate.md`).

## 1. Résultat utilisateur et valeur livrable

Le Pilote peut travailler avec Nora **sans connecter de dépôt**, puis connecter GitHub au moment où il en a besoin, choisir/ajouter/retirer des dépôts, investiguer leurs ressources sous permissions, produire un document interne durable, préparer et inspecter sa publication dans un dépôt, **autoriser des effets Git documentaires**, retrouver le commit/PR/merge réellement vérifiés et conserver une continuité de projet claire.

**Premier E2E ML4 à démontrer sans Cursor :**

1. Pilote authentifié par GitHub OAuth dans Studio, sans accès repo implicite ; projet existant sans Git.
2. Il connecte l'intégration GitHub via Paramètres ou à la demande de Nora ; GitHub permet l'installation sur les dépôts choisis, et l'autorisation utilisateur est vérifiée séparément.
3. Nora consulte des fichiers du dépôt choisi avec version/ref/SHA, analyse leur contenu et en cite la provenance ; ne suit pas d'instruction hostile.
4. Le Pilote demande une production documentaire ; la **révision interne D4 réellement persistée** est identifiable.
5. Nora propose une destination et les changements ; le Pilote consulte **contenu, diff, dépôt, chemin, base/HEAD, identité d'acteur et risques**.
6. D6 valide un mandat borné ; le composant D7 déclenche l'effet Git via D9 (GitHub API) et conserve l'état réel. Une API distante peut créer un commit sans `git push` local : l'UX ne prétend pas avoir lancé une commande absente.
7. La PR distante est vérifiée ; l'intégration en branche cible est **un deuxième acte**, avec mandat distinct et règles de protection effectives.
8. La conversation, la bibliothèque documentaire et l'inspection de Git restituent référence exacte/état réel après reconnexion. Pas de STABLE, release ou ADOPTED induits.

## 2. Périmètre IN

- Connexion GitHub facultative, configuration volontaire ou contextuelle, **gestion centrale « Intégrations »**, GitHub seul fournisseur fonctionnel ML4.
- Installation et autorisation du fournisseur selon droits réels ; association de dépôts au contexte du Pilote et éventuelle sélection de sources du projet, ajout/retrait ultérieur ; compréhension des restrictions d'organisation.
- Lire/rechercher Git autorisé : dépôt, arborescence, fichiers, commits, branches, PR, statut observable, ref/SHA et fraîcheur ; permissions revérifiées.
- Nora : consultation cognitive avec outils Git à scope serveur, sélection de sources pertinente, synthèse/révision de document D4, provenance et véracité, refus de l'instruction hostile.
- Documents : produire/réviser/inspecter versions existantes ; rattacher **un résultat de publication Git** à une révision interne exactement identifiée, sous états distincts.
- Opérations Git **documentaires** : préparer et inspecter création/actualisation de fichier, branche, commit distant, PR et merge distinct ; verrous/conditions d'actualité, contrôle de cible, politique de droits.
- D6/D7/D8/D9 : autorisation, effets bornés, tentative minimale, réconciliation après timeout, observation Git et preuve strictement limitée au fait.
- Reprise, erreurs, permissions révoquées, concurrence et dépôts communs entre Pilotes isolés.
- UX navigation, responsive, accessibilité et preuve browser pour le parcours choisi ; sécurité et journalisation sans secrets.

## 3. Périmètre OUT

- Rendre Git obligatoire, créer un dépôt ou une branche automatiquement lors de « Créer projet ».
- Publier du **code exécutable, scripts, migrations, pipelines, configuration d'infrastructure, secrets**, ou déclencher un build technique via l'agent ; ces effets appartiennent à un contrat ML5 ou à un mandat de gouvernance propre.
- Supprimer automatiquement dépôts/branches, force push, admin GitHub, règles de protection, gestion d'organisation ou droits humains.
- Merge automatique, branche `main` ciblée par défaut, convention Git imposée à chaque projet, auto-approbation de PR, publication automatique lors de la sauvegarde D4.
- Synchronisation permanente bidirectionnelle entre document Studio et fichier Git ; deuxième registre D4.
- Marketplace, connecteur Figma/Jira/M365/Gmail opérationnel, moteur universel de plugins ; **seule l'interface UX « Intégrations » est conçue extensible**.
- Développement du runner Cursor, session CLI, STOP Cursor réel, CI/CD ou vérification de conformité du code : ML5.
- Travail collaboratif natif multi-propriétaire sur un même projet Studio, transfert de décisions/mandats/mémoire entre Pilotes.
- Déploiement STABLE, release, R6 global, adoption produit.

## 4. Contrats et propriétaires uniques

| Propriétaire | Contrat ML4 |
|---|---|
| D1 | Fournir `PilotId`, session en cours et contexte de navigation ; ne délivrer aucun droit repo depuis OAuth login |
| D2 | Maintenir projet/sas sans Git obligatoire ; identifiant projet non dérivé du dépôt |
| D3 | Produire/investiguer avec outils de lecture Git autorisés, sources non autorisantes ; proposition de publication, jamais mutation déclenchée par modèle |
| D4 | Conserver document, révision, version/contenu, sources et lien de publication prouvé ; pas de copie permanente ou effacement historique |
| D5 | Aucune obligation de cycle CKI / PR readiness pour accéder à Git |
| D6 | Mandat d'effet explicite et courant, auteur/projet/version/cible/scope, restrictions ; merge distinct ; contrôle à chaque effet |
| D7 | **Unité d'effet minimale** inspectée, corrélée/idempotente, déclenchée et réconciliée ; une seule frontière de dispatch réutilisable en ML5 |
| D8 | Qualifier uniquement ce que prouve l'observation Git ; décider des limites d'un rapport, jamais de l'acceptation humaine |
| D9 | Acteur GitHub App, accès/permissions, refs, HEAD, conflits, opérations et observations de GitHub réels |

**Contrats à figer après revue d'architecture :** acteur Git au nom du Pilote ou installation technique, identité et appartenance de l'installation, effet composé autorisé vs actes séparés, preuve de révision D4, détection de conflits, opération de merge et récupération après effet inconnu.

## 5. Préconditions et dépendances

**Acquis consommés :** ML1 identité/projet/sas durable, ML2 documents/révisions et cognition Nora, ML3 autorité D5/D6 et restrictions, conventions de nommage VALIDATED, R3 UX et R4 ADR. Les réserves ML1–ML3 ne disparaissent pas.

**À obtenir avant effet REAL :** application GitHub et installation/test limités à des dépôts de RECETTE, autorisations utilisateurs réelles, permissions minimales par opération, session et secrets isolés par lane, environnement RECETTE cohérent, chemins autorisés, version de branche et mandat connu. Choix de fournisseur et authentification ne sont jamais prouvés par une simple variable configurée.

## 6. Risques/contrôles

| Risque | Invariant / preuve de sortie |
|---|---|
| Élévation de privilège OAuth → Git | Login D1 ≠ App installation ≠ autorisation utilisateur ≠ mandat D6 ; test refus 401/403 |
| Dépôt privé d'un autre Pilote | Scopes serveur + isolation PostgreSQL + tests multi-comptes |
| Source hostile dans Git | Contenu traité comme donnée, non instructions ; tests adversariaux LIVE Nora et appels d'effet absents |
| Révision D4 remplacée avant publication | Liaison par ID/révision/digest, diff inspecté; conflit et nouveau GO si portée modifiée |
| HEAD/base évolue après inspection | Revalidation de cible/HEAD et refus sans écrasement silencieux |
| Response perdue sur commit/PR/merge | Relecture distante avant nouvel effet ; tentative et inconnus restitués |
| Merge interdit/CI en cours | Pas de contournement protection, pas de merge présenté comme réussi |
| Fonctionnalité « document » utilisée pour code | Contrôles contenu/chemins/autorité ; STOP/escalade si modification technique |
| Confusion des preuves | Commit et PR ≠ tests, acceptation, STABLE ni ADOPTED |
| Fuite de token | Secrets serveur uniquement ; pas de token dans contexte modèle, logs ou navigateur |
| Exécuteurs concurrents | D7 propriétaire unique, GitHub adapter D9 ; Cursor ultérieur ne crée pas seconde autorité |

## 7. Contrat d'acceptation — niveaux séparés

**DOCUMENTED / VALIDATED SPEC :** addenda R1–R5 approuvés et compatibles ; UX Figma versionnée validée ; RG/PF/E2E et réserves reliés à la matrice ; choix détaillés Morris tracés.

**IMPLEMENTED :** API/DB/Nora/UI présentes sur branche réelle, droits actuels et acteur effectif testés, migration sûre, aucune régression des données ML1–ML3.

**COVERAGE VERIFIED :** QA unitaires/DB/contrats/réseau, tests 401/403/409, droits revocation, stale base, timeout/double clic, inter-Pilotes, outils D3 et sécurité ; runs + SHA.

**BEHAVIOR PROVEN (portée limitée) :** browser sur RECETTE, vrai compte/dépôt GitHub **isolé**, lecture/diff/commit/PR/merge autorisé ou refusé, chemin de secours ; Nora réellement consultative sans effet inventé ; capture et journal de sources avec versions. Preuves LIVE/REAL propres, pas seulement fixtures.

**Acceptation Morris :** revue fonctionnelle des parcours et réserves ; clôture de macro-lot distincte du merge Git, de la promotion STABLE, de la release et de l'adoption globale.

## 8. Organisation du lot et suite

**Une macro-capacité cohérente**, pouvant inclure sous-travaux maîtrisés (UX, Git provider/auth, D4/Nora, D6/D7/D8, intégration/QA), mais intégrateur et validation E2E communs. Ne pas scinder artificiellement les écrans, la sécurité, la doc et les tests en lots indépendants.

**Gate de lancement code :** (a) addenda normatifs R1–R5 validés et intégrés selon GO Git, (b) Figma validé avec snapshot, (c) choix d'identité / types d'effets et contrats d'interface tranchés, (d) matrice QA et fournisseurs éligibles, (e) mandat Morris/Cursor SFIA v2.6. **Pas de prompt Cursor dans le présent lot D0.**

**Capacité suivante ML5 :** brancher Cursor comme exécuteur technique sur la même frontière d'effet, avec contrat exact, tentative, STOP et D8 probatoire, sans reprendre les mécanismes Git déjà éprouvés.
