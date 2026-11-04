# SFIA Studio Next — R5 / ML1 — Revue de cohérence technique

> **État Git au versement (2026-11-04) :** publication documentaire candidate sur `docs/next-r5-delivery-preparation-20261104`, base `main@a0b80b9ecd64149ed51f87235ae246e197e66462`. Ni `VALIDATED SPEC`, ni merge, ni GO Cursor. Les formules `NOT ON GIT` et `NO GIT WRITE` dans les historiques décrivent leur état à la rédaction, pas cette publication.


**Date** : 2026-11-04 (Europe/Paris)  
**Nature** : revue documentaire D0 de conception, après GO conversationnel de Morris ; **ni décision d'architecture, ni validation de spécification, ni écriture Git ni mandat Cursor**.  
**Git observé** : `mcleland147/sfia-workspace`, `main@a0b80b9ecd64149ed51f87235ae246e197e66462` ; PR #646 mergée au même SHA. **Local/worktrees NON OBSERVÉS.**  
**Runtime Next** : `N/A — NON IMPLÉMENTÉ` ; aucun test, navigateur, LIVE Nora ou REAL Cursor/Git observé.  
**Candidats revus** : référence delivery R5 v0.3, contrat de spécification v0.2, matrice ML1 v0.2, spécification ML1 v0.1, inventaire D1/D2 (103 IDs), qualification ML1 v0.1.  
**Sources canoniques** : `governance/SEF.md`, `governance/roadmap.md`, `governance/decisions/2026-11-04-r4-architecture-exit.md`, `governance/environnements-recette-et-promotions.md` (ENV-01), `conception-fonctionnelle/` D1–D4, `ux-ui/contrat-transposition-figma-code.md`, `ux-ui/index-geometrie-frames-r3.json`, `architecture-technique/cadrage-r4.md` (§5.3 et §8.1), `cadrage/vision-produit.md` (E2E 01/03/04/07).

**Verdict : `REVIEW FAVORABLE WITH MANDATORY CONTRACT CORRECTIONS / IMPLEMENTATION CHOICES STILL OPEN / NOT VALIDATED SPEC`.** L'intention et le périmètre vertical sont cohérents ; le contrat n'est pas encore assez fermé pour une délégation D3. Des corrections de rédaction/contrat ont été intégrées dans les brouillons locaux v0.2/v0.3/v0.4 ci-dessous ; les sélections de technologies et interfaces restent des propositions à examiner, non des décisions.

## 1. Éléments conformes à R1–R4

- **Capacité utilisateur** : D1 portefeuille personnel → D2 sas pré-projet durable → D3 Nora utile sans cycle → D2 acte dédié de création → même fil visible → D4 premiers acquis/documents vrais. Couvre le cœur du R1 E2E 01 et les interfaces utiles des E2E 03/04. Ne revendique pas l'exécution des E2E 05/06/07.
- **Architecture approuvée** : R4-01 et R4-02, application modulaire neuve et une vérité transactionnelle PostgreSQL, préparation avant projet, lien durable et création avec idempotence/contrainte SQL, aucune copie du transcript lors du passage.
- **Autorité et frontières** : acte D2 `Créer le projet` distinct de la suggestion de Nora et des futures décisions D6 ; aucun cycle, méthode, dépôt, mandat ou tentative Cursor créés par simple navigation ou dialogue.
- **UX** : références Figma identifiées par IDs ; 30 IDs centraux contrôlés dans le manifeste R3 de 223 frames (aucun manquant dans la sélection contrôlée) ; aucune extraction profonde préalable imposée, mais extraction native **avant le code de chaque surface concernée** ; validation navigateur au SHA. La divergence 240/246 px concerne des références desktop, pas mobile ; elle reste une réserve ciblée.
- **Qualité** : 16 oracles QA A01–A16 retrouvés ; leurs scripts et assertions spécifiques seront produits avec le runtime/l'environnement ; aucune preuve revendiquée à ce stade.

## 2. Écarts et corrections appliquées au brouillon technique

| ID | Priorité | Constat revu | Correctif ou traitement | Source principale |
|---|---|---|---|---|
| REV-01 | **Bloquant contrat** | Propriété des messages durables ambiguë entre D3 et D4. Risque de deuxième vérité de conversation. | D3 = conversations, messages, génération et statut ; D4 = documents, versions, acquis, provenance ; liens entre responsabilités. | R4 §5.3.2–5.3.3 ; R2 D3/D4 |
| REV-02 | **Bloquant contrat** | Idempotence explicitée mais ni empreinte de commande ni ordre des vérifications suffisamment fermes. Une nouvelle version de préparation pourrait invalider le replay d'une création déjà committée. | Déduplication par clé **et empreinte** ; relecture du résultat existant avant contrôle de version ; `expectedCreationRevision` porte sur l'aperçu approuvé, pas chaque message ; unicité SQL indépendante d'un TTL de clé. | R4 §5.3.3–5.3.4 ; `RG-CRE-008/010/011/024` |
| REV-03 | **Contrat à préciser** | Nora « utile » ne décrit pas assez clairement la durée de vie d'un message ou les issues d'un appel modèle interrompu. | Écriture et identité D3 avant l'appel, génération corrélée, streaming provisoire vs sauvegarde réelle, reprise sans faux succès ni retry fournisseur aveugle, contexte sélectionné et autorisé. | R2 `RG-CONV`, `RG-CTX`, D4 ; R4 §5.3.5 |
| REV-04 | **Contrat à préciser** | Stockage du premier document laissé trop ouvert, au risque d'introduire d'emblée une deuxième ressource de vérité. | Proposition de simplicité : contenu textuel ML1 conservé avec métadonnées dans PostgreSQL ; stockage d'objets seulement si taille/type/usage le justifient, sans verrouiller le choix en décision. | ADR R4-02 ; R2 `RG-CRE-027`, `RG-KNOW-016..020` |
| REV-05 | **Correction de couverture** | Le scénario A11 exige une source révoquée ; une révocation Git LIVE ne peut être certifiée sans D9/ML4. | Distinguer protection générique testable ML1 et preuve Git réellement différée ML4 ; ne jamais annoncer `A11 FULL PASS` sur une simulation. | R4 §5.3.9 A11 ; R2 D2/D9 |
| REV-06 | **Gate de preuve** | L'expression « LIVE si disponible » pouvait permettre de déclarer ML1 terminé sans avoir observé la conversation Nora qui fonde le résultat utilisateur. | Un **appel Nora LIVE borné** devient une condition d'un verdict ML1 vertical complet ; un mock seul qualifie des transitions, pas l'expérience Nora réelle. | R1 E2E 01/03 ; R2 `RG-CONV-002/005` ; SEF §6 |
| REV-07 | **Cohérence documentaire** | Référence R5 §8 exigeait géométrie et tolérances avant « l'entrée en code », contraire au séquencement R5 §5/§12 clarifié par Morris. | Séparer références UX au **gate d'ouverture du lot** et extraction native ciblée **avant chaque composant UX**. Pas de tolérance inventée. | R3 contrat transposition §4 ; échanges Morris 2026-11-04 |
| REV-08 | **Mise à jour factuelle** | Roadmap R4 encore rédigée comme si PR/merge étaient attendus ; Git montre #646 mergée. | Prévalence de Git observé ; correction Roadmap uniquement sous mandat Git approprié. | Git PR #646 / HEAD main |

Les corrections REV-01–REV-07 sont intégrées dans la spécification candidate ML1 v0.2, la matrice v0.3 et la référence R5 v0.4. REV-08 reste un **écart de fraîcheur documentaire dans Git**, non une autorisation de modifier la Roadmap.

## 3. Choix techniques encore ouverts avant spécification implémentable

| Famille | Décision R4 acquise | Niveau de définition à produire dans ML1 | Critères d'arbitrage / risques |
|---|---|---|---|
| Application web | Application modulaire neuve, pas de moteurs concurrents | Framework/runtime, modules métier, frontières serveur/client, gestion de configuration et de build | Simplicité locale, sécurité sessions, reproductibilité RECETTE, test navigateur, migration future serveur |
| Identité et session | Connexion GitHub individuelle, aucun droit Git induit | Fournisseur/protocole de login, session durable et révocable, cookies, CSRF, rôles DB et contrôle de propriétaire | Deux comptes isolés, expiration/revocation, aucune fuite inter-lanes ou interprojets |
| Nora | D3 produit sans autoriser, contexte approprié et sauvegarde vraie | Provider/SDK, flux/streaming, modèle et budget, génération/ordonnancement, erreur et retry, journalisation expurgée | Appel réel testable, reprise véridique, coût borné, aucune création via outil Nora |
| PostgreSQL | Une vérité active pour les objets transactionnels et V-A | Schéma/migrations/contraintes uniques et FK, transaction D2, version d'aperçu, opération idempotente, politique de backup | Double clic, timeout après commit, changement de compte, restore et concurrence |
| Documents D4 | Identité/version durables et vérité de sauvegarde | Contrat de contenu textuel initial, stockage, état de disponibilité et liaison au sas/projet | Extension ML2 sans migration jetable, pas de copie ni de sauvegarde fictive |
| Interfaces | Parcours et comportements R2/R3 approuvés | Routes/commandes/payloads/types/erreurs, séparant lecture et effet | Sécurité et contrat « création explicite » vérifiables |
| QA et environnement | 16 oracles R4 A, politique ENV-01/DATA-01 | Harnais et jeux de test à construire avec les interfaces, comptes isolés, RECETTE SHA figé, restauration | Rien de déclaré `COVERAGE VERIFIED` sans exécution et preuve |

**Recommandation de méthode** : il n'est pas nécessaire de demander à Morris un GO par bibliothèque, classe, route ou index SQL. Regrouper les sélections techniques en **un paquet de revue de ML1**, avec comparaison minimale des options et impacts. Morris arbitre les choix structurants et valide le contrat ; les détails ordinaires restent sous la revue intégrée, sans pivot silencieux. Aucune technologie précise n'est adoptée par la présente revue.

## 4. Frontière ML1 / ML2–ML5 et acceptation

**Dans ML1** : premier document du sas avec identité/version et état de sauvegarde vrai ; connexion personnelle ; portefeuille ; conversation Nora et persistance des messages ; création contrôlée ; réouverture/reprise ; UX propre à ces capacités ; fondations PostgreSQL, DEV/RECETTE, tests et preuves correspondants.

**Hors ML1 positif** : bibliothèque/révision documentaire avancée et sujets complets (ML2), cycles/méthode/HumanDecision complets (ML3), accès/permissions réels à Git et révocation Git (ML4), contrat Exécuter/Cursor/rapport et vérification D8 (ML5). Les contraintes négatives correspondantes doivent toutefois être satisfaites en ML1 (aucun effet indu, pas de fuite ou d'autorité implicite). Cette frontière **ne transforme pas** une exigence R2 approuvée en exigence supprimée.

**Critères de sortie à concevoir dans la spec puis exécuter** : `A01–A10`, `A12–A16` sur les capacités disponibles ; `A11` réparti selon l'intégration effective des sources. La restauration des métadonnées et contenus ML1 doit être testée selon la portée DATA-01 réellement implémentée. L'E2E 01 navigateur + DB doit montrer la création unique après action dédiée et la continuité après reload/restart. La valeur cognitive Nora est observée au minimum en LIVE borné pour une conclusion de capacité complète. Le niveau R6/ADOPTED reste séparé.

## 5. Recommandations à soumettre à Morris — sans GO implicite

1. **Confirmer le périmètre ML1** tel que défini en v0.2 : premier document de sas inclus, fonctions documentaires approfondies exclues ; conversation Nora réelle dès la verticale initiale ; Git facultatif non requis au démarrage.
2. **Approuver le principe de traçabilité différée** pour A11/Git, sans faux résultat global : ML1 fournit les garde-fous qu'il peut prouver ; ML4 apportera le test de révocation Git LIVE.
3. **Autoriser l'approfondissement des options techniques au niveau du lot**, avec remise d'une proposition groupée (stack, auth, Nora, DDL, API, stockage de document, sécurité et test). Ce n'est **pas** encore le GO de code.
4. **Valider ensuite le contrat technique final et les gates** dans une revue séparée de l'autorisation D3 Cursor. Tout pivot d'architecture R4, de droit, d'autorité ou de persistance doit être soumis expressément.

## 6. Livrables D0 de cette revue

- [spécification technique ML1](specification-technique.md) : v0.2 revue, enrichie ensuite en v0.3 par un paquet de choix techniques **candidats**, non validés.
- [matrice de traçabilité](matrice-tracabilite.md) : A11 partiellement différé, niveau LIVE Nora explicite.
- [référence R5](../reference-delivery-r5.md) : harmonisation du gate Figma, références corrigées.

**Aucune publication Git, aucun changement des décisions R4 ni des spécifications R2/R3, aucune implémentation, aucun test exécuté, aucun prompt Cursor.** L'accès natif Figma chez Cursor demeure une capacité annoncée, non vérifiée dans ce travail documentaire.

**Verdict final D0** : `R5/ML1 DESIGN REVIEW COMPLETE — REVISIONS PREPARED LOCALLY — MORRIS APPROVAL AND TECHNICAL SELECTIONS PENDING — R5 BUILD NOT STARTED`.