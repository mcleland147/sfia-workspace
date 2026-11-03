# Decision Record / ADR intégrés — Sortie R4 · SFIA Studio Next

**Nature :** **DÉCISION D2 APPROUVÉE PAR MORRIS EN CONTENU — R4 CLOSED IN DESIGN WITH CARRIED RESERVES**, publiée sur branche R4 candidate ; **aucun runtime implémenté ni adoption**.  
**Chemin canonique :** `projects/sfia-studio-next/governance/decisions/2026-11-04-r4-architecture-exit.md`  
**Jalon :** R4 — conception d'architecture ; **clôture de conception validée par Morris le 2026-11-04**, avec réserves R5/R6. PR/merge et démarrage R5 restent des gates séparés.  
**Base examinée :** `main@7067c846ce7c57825dd31c532433d809e1a01216` ; `sfia/next-r4-architecture-scoping@95836b931c7aa4d764e9989b6557749df6b7eebf`.  
**Références :** SEF v0.2 ; Roadmap Next ; décision R3 du 2026-11-03 ; R1/R2 ; UX R3 ; `architecture-technique/cadrage-r4.md` v0.9 ; `governance/environnements-recette-et-promotions.md` ENV-01.

## 1. Décision Morris — acquise en contenu le 2026-11-04

**Décision : `R4 — ARCHITECTURE DESIGN VALIDATED / CLOSED IN DESIGN WITH CARRIED RESERVES`.** Morris a explicitement validé les **quatre ADR R4-01 à R4-04**, **DATA-01** et le paquet de revue R4 ; il demande la synchronisation de la Roadmap et la préparation de la PR en direction d'un merge gouverné. Ce GO porte sur **les choix de conception**, pas sur l'existence d'un runtime Next ni sur un `ADOPTED`.

**Portée de conception :** application web neuve, modulaire et sobre, propriétaires de contrats uniques, source transactionnelle cohérente, adaptateurs externes contrôlés ; scénario V-A préservation de la continuité sas→projet. ENV-01 était déjà approuvée et publiée sur branche candidate. **R4 fixe les frontières et invariants ; R5 sélectionne et implémente les mécanismes concrets** de cognition Nora, d'authentification, de session, de persistance et d'API sous ces contrats, sans pivot structurant silencieux. Les gates Git PR, merge, R5 et ADOPTED restent autonomes.

## 2. ADR structurants approuvés par Morris — conception R4

### ADR R4-01 — Application modulaire neuve, sans duplication d'autorité

**Décision validée (orientation architecturale) :** construire Next en application web modulaire, modules logiques D1–D9 propriétaires, une seule vérité métier par objet/effet, frontières d'adaptateurs. **Alternatives écartées à ce stade :** microservices par domaine, moteur généraliste CKI, reprise mécanique de l'ancien runtime. **Justification :** continuité de l'expérience et de la transaction, moindre coût cognitif et opérationnel, restrictions d'autorité plus auditables. **Réexamen :** charge réelle, besoin d'isolation technique démontré, contrainte d'intégration indépendante.

### ADR R4-02 — Sas/projet, V-A et persistance

**Décision validée (orientation architecturale) :** préparation durable avant création, rattachement transactionnel au projet sur acte explicite, pas de copie systématique des conversations/documents ; identité/versions durables, contrôle de concurrence et idempotence. **PostgreSQL** cible de premier incrément R5, local puis déplaçable sur serveur ; une seule base active pour les objets transactionnels du produit, vues/index reconstructibles ; stockage objet éventuel selon volumes. **Alternatives écartées :** double base d'autorité, transfert/copie du fil au clic, SQLite pris uniquement par héritage, synchronisation continue local/distant. **Réexamen :** contraintes d'exploitation, performance ou besoin de stockage établis.

### ADR R4-03 — HumanDecision et chaîne d'exécution/preuve

**Décision validée (orientation architecturale) :** Nora conseille/produit sans décider ; D6 possède l'autorité humaine ; D7 possède le contrat inspecté, l'instruction corrélée, le dispatch/tentative ; D8 possède le verdict probatoire ; D9 possède l'observation Git et ses permissions. La réponse perdue ne déclenche pas de retry aveugle, STOP demandé n'est pas STOP observé. **Alternatives écartées :** exécution directe depuis UI/Nora, double moteur d'effets, présomption de conformité depuis le rapport d'un agent. **Réexamen :** seulement sur preuve d'un contrat fournisseur garantissant mieux les mêmes invariants.

### ADR R4-04 — Intégrations, environnements et trajectoire de déploiement

**Décision validée (orientation architecturale) :** Git facultatif ; GitHub App privilégiée à accès borné et droits de Cursor séparés ; une interface d'adaptation D7 pour exécuteur externe ; **Cursor CLI est l'option d'étude prioritaire**, Cloud Agents API reste une variante soumise à démonstration des capacités et droits. Application d'abord locale, hébergement distant ultérieur possible sans double vérité active. Politique **ENV-01 déjà validée en contenu Morris**, à mettre en œuvre en R5 via DEV/RECETTE/STABLE réellement isolées et recette d'un SHA figé avant merge. **Alternatives écartées :** autorisation d'écriture déduite de la simple identité GitHub, secret unique inter-lanes, promotion automatique, environnement de recette mutable. **Réexamen :** disponibilités démontrées des fournisseurs, coûts/sécurité/exploitation.

## 3. DATA-01 — politique validée par Morris le 2026-11-04

**Décision de principe et valeurs de départ validées :** préparations enregistrées sans purge automatique, archivage non destructif après 90 jours d'inactivité ; corbeille après suppression pendant 30 jours ; journaux techniques non critiques environ 14 jours ; sauvegardes chiffrées quotidiennes locale (7 quotidiennes + 4 hebdomadaires) et serveur distant (30 jours), copies sur emplacement indépendant, tests de restauration. Les protections des preuves/décisions, la minimisation et l'effacement des données personnelles, la purge différée des sauvegardes, le RPO/RTO réalisable et les tests de restauration restent à décliner et à vérifier en R5/R6. Ces durées approuvées sont des **valeurs de politique à implémenter**, non des mécanismes déjà en place. Les besoins légaux de suppression peuvent primer sur les durées par défaut.

## 4. Réserves reportées et exit

| Réserve | Propriétaire de construction | Exit contrôlable |
| --- | --- | --- |
| AUTH / droits / GitHub App | R5 A/D | Isolation utilisateurs, révocation, scopes et absence de passage de jetons |
| ENV-01 / isolation et promotion | R5 premier lot | DEV/RECETTE/STABLE disponibles selon besoin, DB/ports/secrets/volumes indépendants, SHA de recette, tests de non-contamination |
| DATA-01 / sauvegarde et purge | R5 A puis R6 | **Politique approuvée en contenu** ; démontrer reprise 15+ jours, archivage et suppression, sauvegarde/restauration, délais d'effacement et minimisation |
| Cursor capabilities / STOP / publication | R5 C/D avant REAL | CLI/API évaluées sur mandat et environnement de test ; impossibilité de push/PR hors autorisation prouvée, UNKNOWN et STOP fidèles |
| UX Figma / accessibilité | R5 A–D et R6 | Tokens et rail 240/246 arbitrés avant UI concernée ; captures browser et clavier/zoom/reflow testés |
| E2E / QA | R5 et R6 | Tests réels pour invariants et 7 E2E, preuves déterministes/browser/LIVE/REAL bornées ; aucune fiction d'adoption |

## 5. Gates indépendants

- **Gate de validation de contenu D2 — SATISFAIT :** Morris a confirmé ADR R4-01..04, DATA-01 et les réserves de conception le 2026-11-04.
- **Gate Git documentaire — AUTORISÉ SUR BRANCHE CANDIDATE :** Morris a demandé la synchronisation du Decision Record et de la Roadmap dans la contribution R4. Réf et diff à vérifier ; aucun effet sur `main` sans merge.
- **Gate PR — PRÉPARATION AUTORISÉE :** Morris demande d'avancer vers le merge ; ouverture de PR subordonnée au contrôle HEAD/base/fichiers et à son contenu exact.
- **Gate merge — SÉPARÉ ET NON PRÉJUGÉ :** vérifier PR, CI applicable, approbations/protection et mergeability ; obtenir ou confirmer un GO de merge applicable à la PR vérifiée, puis relire `main` après l'effet. Aucun merge ne découle automatiquement du seul verdict de conception.
- **Gate R5** : GO de macro-capacité technique, prompt Cursor v2.6 et ENV-01 consultés à la baseline retenue ; code/tests/doc/preuves sous contrat.
- **Gate R6/ADOPTED** : qualification fonctionnelle, technique, E2E et REAL selon preuve disponible et autorité Morris.

**Traçabilité de décision :** validation Morris explicite dans la conversation du 2026-11-04. Référentiel de travail : `mcleland147/sfia-workspace`, `main@7067c846ce7c57825dd31c532433d809e1a01216`, branche `sfia/next-r4-architecture-scoping` (base vérifiée avant publication de ce record). **Les SHA de publication, la PR, les checks et le merge éventuel doivent être vérifiés à leurs étapes ; ils ne sont pas inventés dans ce record.**

**Verdict : `R4 CLOSED IN DESIGN BY MORRIS — WITH CARRIED RESERVES ; CODE N/A — NON IMPLÉMENTÉ ; R5 NOT STARTED ; PR/MERGE GATES DISTINCTS`.**