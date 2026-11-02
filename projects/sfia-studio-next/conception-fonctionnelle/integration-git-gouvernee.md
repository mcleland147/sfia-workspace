# SFIA Studio Next — Spécification fonctionnelle R2
## Intégration Git gouvernée et facultative par projet

| Métadonnée | Qualification |
| --- | --- |
| **Version/date** | **v0.1 — VALIDATED SPEC (Morris, 2026-11-02) — interfaces réservées** |
| **Domaine propriétaire** | **9 — Intégration Git** (R1 §§2.23–2.24, 2.28, 2.36) |
| **Résultat Pilote** | Consulter et exploiter ses ressources Git autorisées, faire préparer des mutations bornées et collaborer par dépôt partagé sans confondre projet Studio, droits Git et autorisation technique |
| **Git contrôlé** | `mcleland147/sfia-workspace` ; `main@8751775edc314e8fc7f0855104e5000290be9839` ; R2 `sfia/next-r2-functional-specs@de3778a91f6460273b6c6a90c3f73932dc85bdbe` |
| **Sources R2** | D3 Nora v0.4, D4 Connaissance v0.1, D5 Trajectoire/CKI v0.1, D6 Gouvernance v0.1, D7 Réalisation v0.1, D8 Résultats/Preuves v0.1 — toutes `VALIDATED SPEC` sur la branche R2 |
| **CKI** | Corpus CKI Next v0.2 **CANDIDATE** (15 autonomes, matrice de 50 relations non contraignantes) |
| **Étendue** | GitHub dans le périmètre d’identité R1 ; Git et dépôts accessibles au besoin, **sans imposer Git, CI/CD ou Kubernetes** |
| **État produit** | **N/A — NON IMPLÉMENTÉ**, aucune interaction Git/Cursor Next LIVE/REAL prouvée |
| **Gate** | **VALIDATED SPEC** : contenu approuvé par Morris et publié sous mandat documentaire sur branche R2 ; aucune PR/merge ni adoption anticipés |

## 1. Finalité utilisateur et périmètre de responsabilité

Le Pilote ne doit pas apprendre à administrer Git pour conduire son projet avec Nora. Il conserve cependant le choix effectif des ressources et des mutations qu’il autorise ; Nora peut proposer les emplacements et investigations pertinents. La connexion GitHub du Pilote au produit n’équivaut jamais à l’accès global à ses dépôts. **Le Git partagé n’est pas un espace projet Studio partagé.**

**IN :** Git facultatif au niveau projet, sélection/rattachement de sources, consultation réelle sous permissions, provenance ref/branche/commit, currentness, préconditions Git des mutations, conflits de base et collaboration par dépôts partagés sous identité individuelle, erreurs et dégradation sans effet fictif. **OUT :** création implicite de dépôt, modèle de branche imposé, moteur technique d’écriture Git concurrent de D7, authentification produit D1, création projet D2, décision/mandat D6, tentative d’exécution D7, verdict de preuve D8, CI/CD/Kubernetes comme capacité automatique, fusion des projets/mémoires/décisions des Pilotes, adoption historique de packages ou règles SFIA v2.6.

### 1.1. Contrats et responsables, sans copie de règles voisines

| Domaine | Propriété canonique | Usage par D9, sans substitution |
| --- | --- | --- |
| **D1 — Accès et portefeuille** | Authentifier l’identité personnelle Studio | Consommer une identité établie ; ne pas authentifier un second compte Studio |
| **D2 — Création de projet** | Sas et création effective de projet | Rattacher Git au besoin, sans obliger ni créer de dépôt par défaut |
| **D3 — Nora** | Analyse, sélection de sources, recommandations et restitution | Fournir des ressources accessibles et leur contexte, pas des prompts obligatoires |
| **D4 — Connaissance** | Mémoire individuelle, provenance et sujets | Fournir les références de source Git courantes, pas un second journal de projet |
| **D5 — Trajectoire/CKI** | Cycles, spécialité active, méthode durable | Aucune ouverture de cycle ni sélection de CKI sur détection d’un dépôt |
| **D6 — Décisions et gouvernance** | Autorisations, restrictions, révisions et suspensions | Consommer les décisions applicables avant tout effet Git, sans nouvel autorisateur |
| **D7 — Réalisation opérationnelle** | Contrat, tentative, instruction et déclenchement technique | Vérifier cibles, références et accès Git et restituer leurs états ; ne pas exécuter |
| **D8 — Résultats et preuves** | Force probatoire, conformité, écarts, bilan | Fournir état/ref Git réellement observé ; ne pas certifier la conformité |
| **D9 — Intégration Git** | Accès et sources Git, référence courante, périmètre, préconditions et conflits | **Propriétaire de ce contrat** |

## 2. Contrats fonctionnels et informations minimales

### 2.1. Consultation Git
Une consultation utile peut porter sur un dépôt, un fichier, une PR, un commit, une branche ou une recherche ciblée. Elle distingue : **Pilote et projet courant**, ressource voulue, permission réellement disponible pour Studio/Nora, ref/version consultée, source et date/condition d’actualité, confidentialité et limite éventuelle. La lecture ne change pas l’état du projet ni ne crée une autorisation d’écriture.

### 2.2. Préparation d’une cible d’effet Git
Si le travail requiert une mutation : référencer **dépôt/organisation**, répertoire/fichiers et effets envisagés, **branche/HEAD/base** pertinentes, identité et droits effectifs **de Cursor** pour l’opération, risques de collision, contrat D7 inspecté, acte D6 applicable et éléments de contrôle attendus. Ce contrat est **proportionné à l’effet** ; il n’impose pas de fixer une convention de branche globale ni une structure Git historique.

### 2.3. Retour de Git et qualification distincte
D9 peut retourner un commit, une ref, un statut de PR, un refus d’accès ou un changement de HEAD **réellement observé**. D7 possède la tentative et la commande, D8 décide ce que la référence démontre, D6 garde l’acceptation du Pilote. Le résultat de lecture peut être historisé/lié aux sujets de D4 avec provenance ; il ne se transforme pas en second registre de décision ni en preuve indépendante de tout autre critère.

### 2.4. Absence de Git et disponibilité des autres fonctions
Un projet sans dépôt continue à utiliser Nora, les cycles, décisions, mémoire et résultats cognitifs. L’absence d’accès Git suspend seulement les recherches et effets qui en dépendent réellement. Un déploiement Kubernetes, un pipeline CI ou une infrastructure externe relèvent des contrats techniques et de sécurité dédiés lorsqu’ils deviennent pertinents, **pas de la simple présence de D9**.

## 3. Règles de gestion fonctionnelles validées — propriétaire domaine 9 (interfaces réservées)

### 3.A — Git facultatif, rattachement et choix des ressources

- **RG-GIT-001 — Projet autonome sans Git.** Un projet Studio existe et Nora travaille sans dépôt rattaché ; aucune création de dépôt, de répertoire ou de branche ne découle de « Créer le projet ». **Interfaces :** R1 §§2.23/2.28/2.36 ; D3 RG-CONV-005 ; D2 à spécifier.

- **RG-GIT-002 — Rattachement au besoin.** L’association d’une ressource Git au projet est proposée lorsqu’un usage concret le justifie, sans interrompre un travail non dépendant ni requérir une association anticipée. **Interfaces :** R1 §2.28 ; D4 RG-KNOW-001/002.

- **RG-GIT-003 — Séparation lecture et emplacement d’écriture.** Une consultation peut porter sur une ressource Git accessible sans que ce dépôt soit choisi comme cible d’écriture du projet. Lecture/rattachement ne créent aucun mandat de mutation. **Interfaces :** R1 §2.23 ; D6 RG-GOV-023/025.

- **RG-GIT-004 — Emplacement décidé ou proposé.** Le Pilote peut prescrire dépôt, organisation, répertoire, branche ou autre emplacement pertinent. Nora peut proposer les éléments manquants, mais ne remplace pas silencieusement un choix du Pilote. **Interfaces :** R1 §§2.23/2.28 ; D6 RG-GOV-007 ; D7 RG-REAL-009.

- **RG-GIT-005 — Aucune arborescence historique imposée.** Le rattachement Git n’impose pas de dépôt, de nom de branche ni de structure de dossiers par défaut provenant du Studio historique, de SFIA v2.6 ou d’un CKI. Une convention explicite et applicable peut être respectée selon sa portée. **Interfaces :** R1 §§2.23/2.28 ; D3 RG-METH-006 ; D5 RG-TRJ-040.

- **RG-GIT-006 — Révision et retrait du rattachement.** Un rattachement peut être adapté ou supprimé avec vérification de portée et d’autorité applicables ; ce changement n’efface pas les références historiques ni les preuves mais peut rendre des sources indisponibles. **Interfaces :** R1 §§2.24/2.28 ; D4 RG-KNOW-007/012 ; D6 RG-GOV-010.

- **RG-GIT-007 — Pluralité de dépôts proportionnée.** Un projet peut avoir besoin de consulter plusieurs dépôts ou références. Cette possibilité ne crée pas un modèle de dépôt principal obligatoire ni un lien implicite entre les projets Studio des propriétaires Git. **Interfaces :** R1 §§2.23/2.24 ; D4 RG-KNOW-002.

### 3.B — Identité, permissions et consultation autorisée

- **RG-GIT-008 — Trois identités/capacités distinctes.** L’authentification GitHub du Pilote dans Studio, les autorisations de lecture de l’intégration Studio/Nora et les droits Git de l’environnement Cursor sont évalués séparément ; la réussite de l’un n’atteste pas les autres. **Interfaces :** R1 §§2.23/2.28/2.36 ; D6 RG-GOV-003 ; D7 RG-REAL-018.

- **RG-GIT-009 — Consultation bornée aux accès réels.** D9 fournit à Nora les ressources Git que l’identité et l’intégration peuvent réellement consulter dans la portée actuelle, sans étendre une permission depuis une simple connexion GitHub. **Interfaces :** R1 §2.28 ; D3 RG-CTX-002/008.

- **RG-GIT-010 — Accès progressif sans privilège global.** En cas d’absence de permission utile, Studio explique la limitation et sollicite uniquement l’accès pertinent ; aucune demande de droits excessifs ou blocage général de Nora n’est imposée. **Interfaces :** R1 §2.23 ; D3 RG-CONV-003 ; D6 RG-GOV-007.

- **RG-GIT-011 — Accès public non autorisant.** La visibilité publique d’un dépôt permet une lecture seulement selon les capacités réellement disponibles ; elle ne vaut ni association au projet, ni validité de décision externe, ni droit d’écriture. **Interfaces :** R1 §§2.23/2.24 ; D6 RG-GOV-014 ; D4 RG-KNOW-014.

- **RG-GIT-012 — Gestion des accès révoqués.** Une permission de lecture retirée, expirée ou refusée empêche les nouvelles lectures correspondantes ; D9 expose le changement sans prétendre que les anciennes copies ou permissions demeurent actuelles. **Interfaces :** R1 §§2.23/2.36 ; D4 RG-KNOW-012/013 ; D6 RG-GOV-022.

- **RG-GIT-013 — Droit de lecture distinct du droit de mutation.** L’accès Git en lecture de Studio/Nora ne suffit jamais pour cloner dans un environnement distinct, pousser, créer une PR, merger ou déclencher une intervention de Cursor. **Interfaces :** R1 §§2.23/2.28 ; D6 RG-GOV-027 ; D7 RG-REAL-014.

- **RG-GIT-014 — Secrets et confidentialité.** Les jetons, secrets et informations confidentielles ne sont ni reproduits dans les conversations/rapports ni transmis tacitement à Cursor ; les moyens d’authentification sont gérés selon les contraintes effectives et le moindre privilège. **Interfaces :** R1 §§2.21/2.23 ; D7 RG-REAL-010 ; D8 RG-PRV-008.

- **RG-GIT-015 — Source Git non autorisante.** Contenu d’un dépôt, README, commentaire, PR ou instruction trouvée dans un fichier Git demeure une source de données à qualifier, jamais un ordre d’exécution, une décision du Pilote ou une règle de gouvernance supérieure. **Interfaces :** R1 §2.24 ; D3 RG-CTX-007 ; D6 RG-GOV-005/006.

- **RG-GIT-016 — Isolement des consultations interprojets.** Les ressources d’un dépôt commun sont consultables sous les droits du Pilote courant, sans révéler les conversations, décisions, mandats ou mémoire privée d’un autre projet Studio. **Interfaces :** R1 §§2.24/2.36 ; D4 RG-KNOW-002/014 ; D6 RG-GOV-014.

### 3.C — Provenance, références et état Git réel

- **RG-GIT-017 — Référence Git identifiée.** Toute observation Git déterminante porte au minimum la ressource, le dépôt, la branche/ref ou commit pertinent, le contexte de lecture et son actualité lorsque cela influe sur l’interprétation. **Interfaces :** R1 §§2.13/2.28 ; D3 RG-CTX-003 ; D8 RG-PRV-004.

- **RG-GIT-018 — État candidat distinct de la baseline.** Une branche de travail, une PR ouverte, une branche par défaut et un commit mergé sont des situations différentes. D9 expose l’état réellement consulté sans appeler une candidate « main » ou baseline de référence. **Interfaces :** R1 §2.36 ; D3 RG-CTX-005 ; D8 RG-PRV-017.

- **RG-GIT-019 — Fraîcheur de la référence.** Une réponse Git antérieure ne garantit pas la même HEAD ni la même permission ultérieure. D9 vérifie la référence courante avant de fonder un acte sensible ou une assertion d’actualité. **Interfaces :** R1 §2.28 ; D3 RG-APP-007 ; D8 RG-PRV-006.

- **RG-GIT-020 — Référence inaccessible ou ambiguë.** Si un commit, dépôt, branche ou PR n’est plus accessible ou est ambigu, D9 retourne l’information effectivement connue et son incertitude, sans inventer un résultat de lecture ou une HEAD. **Interfaces :** R1 §§2.13/2.36 ; D4 RG-KNOW-013 ; D8 RG-PRV-015.

- **RG-GIT-021 — Branches et commits comme informations, non décisions.** L’existence d’un commit, d’un statut CI, d’une PR ou d’un merge peut être constatée sous preuve Git, mais ne décide ni acceptation métier, ni conformité globale, ni disponibilité utilisateurs ou ADOPTED. **Interfaces :** R1 §§2.27/2.28 ; D6 RG-GOV-031/036 ; D8 RG-PRV-021.

- **RG-GIT-022 — Traces de changement sans duplication.** D9 met à disposition les références Git et leurs états réels ; D4 possède la connaissance, D7 l’exécution et D8 le verdict. Des liens vers les mêmes objets ne forment pas plusieurs registres de vérité. **Interfaces :** R1 §§2.24/2.28 ; D4 RG-KNOW-010 ; D7 RG-REAL-035 ; D8 RG-PRV-005.

- **RG-GIT-023 — Comparaison ciblée de base et changements.** Une divergence entre base annoncée et HEAD observée, ou entre diff déclaré et chemins réels, doit être présentée avec les références et limites de visibilité ; une branche différente ne prouve pas le contenu d’une autre. **Interfaces :** R1 §2.36 ; D7 RG-REAL-030 ; D8 RG-PRV-007/017.

- **RG-GIT-024 — Disponibilité des artefacts de vérification.** Une PR, un diff, un commit ou un résultat de vérification Git n’est offert comme consultation probante que s’il a été obtenu ou vérifié dans les permissions et versions pertinentes. **Interfaces :** R1 §2.28 ; D8 RG-PRV-010/011/020.

### 3.D — Préconditions Git des opérations autorisées

- **RG-GIT-025 — Écriture sous contrat propriétaire D7.** Toute création ou modification de dépôt, répertoire, branche, fichier, commit, push, PR ou merge est un effet technique dont D7 porte le contrat/lancement et D6 l’autorisation ; D9 fournit les accès, cibles et préconditions Git, sans second exécuteur. **Interfaces :** R1 §§2.23/2.28 ; D6 RG-GOV-024/025 ; D7 RG-REAL-013/016.

- **RG-GIT-026 — Cible d’effet explicitement bornée.** Avant tout lancement, le dépôt, l’organisation éventuelle, la branche et la base, le répertoire/fichiers ou la portée des effets doivent être suffisamment déterminés et cohérents avec ce qui a été inspecté. **Interfaces :** R1 §§2.23/2.36 ; D6 RG-GOV-025/026 ; D7 RG-REAL-007/009.

- **RG-GIT-027 — Préconditions actuelles de la bonne identité.** D9 confirme les capacités Git effectives de l’environnement exécuteur du Pilote sur les ressources concernées. Une connexion Studio ou une session Cursor identifiée sans autorisation Git suffisante ne satisfait pas la précondition. **Interfaces :** R1 §§2.23/2.36 ; D6 RG-GOV-027 ; D7 RG-REAL-018.

- **RG-GIT-028 — Contrôle de base et concurrence.** Avant écriture, la validité de la ref de base et les changements concurrents significatifs sont requalifiés ; une ancienne HEAD, un conflit ou une cible élargie n’est pas silencieusement avalisé. **Interfaces :** R1 §§2.24/2.28/2.36 ; D7 RG-REAL-030 ; D6 RG-GOV-026.

- **RG-GIT-029 — Permission changeante pendant exécution.** Une révocation ou un changement de droits est appliqué aux effets futurs/encore contrôlables ; D9 transmet l’état observé à D7/D6, sans prétendre annuler les mutations déjà enregistrées. **Interfaces :** R1 §2.36 ; D6 RG-GOV-022/027 ; D7 RG-REAL-025/030.

- **RG-GIT-030 — Absence de merge implicite.** Un push, une PR, des tests verts, un avis CKI ou une exécution terminée n’autorisent pas de merge, de suppression de branche ni de promotion ; un tel effet requiert son propre périmètre et autorisation applicable. **Interfaces :** R1 §§2.28/2.36 ; D6 RG-GOV-023/036 ; D7 RG-REAL-036.

- **RG-GIT-031 — Mutations effectives distinctes des commandes.** Commande Git envoyée, accusé reçu, commit présent sur branche distante et PR intégrée sont des faits distincts. D9 expose l’état réellement observable ; D7 conserve la tentative et D8 en examine la portée probatoire. **Interfaces :** R1 §2.36 ; D7 RG-REAL-020/024 ; D8 RG-PRV-014.

- **RG-GIT-032 — Récupération après conflit ou réponse perdue.** Après timeout, changement de HEAD ou réponse ambiguë, l’état Git est relu avant de suggérer un nouvel effet ; aucun commit, push ou PR en double n’est supposé sûr par défaut. **Interfaces :** R1 §2.36 ; D7 RG-REAL-017/029 ; D6 RG-GOV-028.

### 3.E — Dépôts partagés, continuité et limites du domaine

- **RG-GIT-033 — Dépôt commun sans projet commun.** Deux Pilotes peuvent accéder au même dépôt selon leurs droits, mais gardent des projets Studio et des autorités distincts. La coïncidence du dépôt ne fusionne aucun cycle, CKI, mandat, décision, mémoire ni conversation. **Interfaces :** R1 §§2.24/2.28/2.36 ; D4 RG-KNOW-002 ; D6 RG-GOV-014.

- **RG-GIT-034 — Écritures indépendantes qualifiées.** Des travaux sur des chemins effectivement indépendants peuvent progresser sans sérialisation artificielle, à condition de conserver bases, branches, permissions et contrats propres et de justifier l’indépendance au regard du risque. **Interfaces :** R1 §§2.24/2.36 ; D6 RG-GOV-013/021 ; D7 RG-REAL-028.

- **RG-GIT-035 — Conflits inter-Pilotes non masqués.** En cas de travaux sur les mêmes fichiers, de branche commune changeante, de base incompatible ou d’impact incertain, D9 expose le conflit et fournit les références utiles ; D7/D6 requalifient l’effet ou l’arrêt, sans écrasement silencieux. **Interfaces :** R1 §§2.24/2.28/2.36 ; D7 RG-REAL-030.

- **RG-GIT-036 — Connaissance partagée sans transfert d’autorité.** Une décision publiée dans Git peut être une information consultable par l’autre Pilote mais ne devient pas sa décision, son mandat, son autorisation ou sa règle de projet ; toute applicabilité est qualifiée dans son contexte. **Interfaces :** R1 §§2.24/2.36 ; D3 RG-APP-002 ; D6 RG-GOV-014.

- **RG-GIT-037 — Reprise entre sessions sans fiction.** Après redémarrage ou changement d’accès, D9 retrouve seulement les références Git encore observables ; D4 assure la continuité sémantique, D7 les tentatives, D6 les actes et D8 les bilans. **Interfaces :** R1 §2.36 ; D4 RG-KNOW-015 ; D7 RG-REAL-029.

- **RG-GIT-038 — Pas d’obligation CKI ou DevOps.** Les CKI DevOps/PR readiness/Post-merge/Release peuvent recommander des vérifications adaptées mais ne créent ni branche obligatoire, ni séquence de cycles, ni gate, ni mandat d’effet. **Interfaces :** R1 §§2.16–2.18 ; D5 RG-TRJ-013/025..029 ; D6 RG-GOV-034.

- **RG-GIT-039 — Kubernetes hors contrat Git générique.** Kubernetes, CI/CD, hébergement et gestion d’infrastructure ne sont pas des prérequis de D9 et ne deviennent pas une capacité Git implicite ; si une mission l’exige, ses opérations et preuves sont qualifiées dans D7/D8 et l’architecture future, sous droits propres. **Interfaces :** R1 §§2.26–2.28 ; D7 RG-REAL-001/007 ; D8 RG-PRV-017.

- **RG-GIT-040 — Échec Git proportionné et continuité.** Un refus Git ou une absence de dépôt bloque uniquement le travail qui dépend réellement de cette ressource ; Nora peut poursuivre le travail cognitif et D9 ne simule aucune action, source ou droit. **Interfaces :** R1 §§2.13/2.28 ; D3 RG-CTX-008 ; D7 RG-REAL-005.

## 4. Scénarios fonctionnels de référence et couverture

| Scénario | Situation et stimulation | Résultat attendu | Règles associées |
| --- | --- | --- | --- |
| **PF-GIT-01** | Projet Studio créé sans dépôt | Projet et travail Nora disponibles, sans création de repo, branche ou fichier | `RG-GIT-001`, `RG-GIT-002`, `RG-GIT-005`, `RG-GIT-007`, `RG-GIT-040` |
| **PF-GIT-02** | Connexion GitHub sans rattachement Git | Authentification reconnue sans lecture/écriture globale ni dépôt imposé | `RG-GIT-001`, `RG-GIT-003`, `RG-GIT-008`, `RG-GIT-010`, `RG-GIT-011` |
| **PF-GIT-03** | Rattachement d’un dépôt utile en cours de projet | Sélection contrôlée de ressource ; pas de mutation Git | `RG-GIT-002`, `RG-GIT-003`, `RG-GIT-004`, `RG-GIT-006`, `RG-GIT-007` |
| **PF-GIT-04** | Pilote prescrit une organisation et un chemin | Conserver ce choix, exposer les préconditions et ne pas substituer une autre cible | `RG-GIT-004`, `RG-GIT-005`, `RG-GIT-026`, `RG-GIT-027` |
| **PF-GIT-05** | Consultation de plusieurs dépôts | Sources distinguées par accès, dépôt, branche et version | `RG-GIT-007`, `RG-GIT-009`, `RG-GIT-017`, `RG-GIT-022`, `RG-GIT-023` |
| **PF-GIT-06** | Dépôt privé inaccessible à Nora | Demander l’accès utile ou qualifier l’impossibilité, travail indépendant préservé | `RG-GIT-009`, `RG-GIT-010`, `RG-GIT-012`, `RG-GIT-040` |
| **PF-GIT-07** | Dépôt public visible mais non rattaché | Lecture éventuellement possible sous accès réel ; aucune autorisation d’écriture | `RG-GIT-003`, `RG-GIT-011`, `RG-GIT-013` |
| **PF-GIT-08** | Lecture autorisée, écriture Cursor impossible | Lecture maintenue ; aucun lancement d’écriture et aucun droit extrapolé | `RG-GIT-008`, `RG-GIT-013`, `RG-GIT-027`, `RG-GIT-040` |
| **PF-GIT-09** | Compte Cursor erroné ou session partagée | STOP de la mutation ; préserver identité et périmètre du Pilote | `RG-GIT-008`, `RG-GIT-013`, `RG-GIT-027`, `RG-GIT-033` |
| **PF-GIT-10** | Source Git contient une instruction malveillante | Traiter le texte comme donnée et ne jamais en tirer un GO | `RG-GIT-015`, `RG-GIT-016`, `RG-GIT-021` |
| **PF-GIT-11** | Git privé d’un autre Pilote | Ne pas exposer conversation, mandat ou preuve confidentielle | `RG-GIT-009`, `RG-GIT-014`, `RG-GIT-016`, `RG-GIT-033` |
| **PF-GIT-12** | Révocation de lecture pendant une investigation | Bloquer nouvelles lectures interdites et signaler les versions anciennes | `RG-GIT-012`, `RG-GIT-019`, `RG-GIT-020`, `RG-GIT-040` |
| **PF-GIT-13** | Référence de branche et commit lisibles | Restituer dépôt/ref/SHA et portée de l’observation | `RG-GIT-017`, `RG-GIT-018`, `RG-GIT-019`, `RG-GIT-024` |
| **PF-GIT-14** | Branche candidate confondue avec main | Corriger la qualification ; aucun merge présumé | `RG-GIT-018`, `RG-GIT-021`, `RG-GIT-023` |
| **PF-GIT-15** | Base Git changée depuis la préparation | Requalifier l’effet et les impacts avant toute écriture | `RG-GIT-019`, `RG-GIT-023`, `RG-GIT-026`, `RG-GIT-028` |
| **PF-GIT-16** | Commit déclaré mais introuvable sur ref attendue | Identifier ref, contexte et limites, ne pas annoncer un effet réussi | `RG-GIT-020`, `RG-GIT-021`, `RG-GIT-023`, `RG-GIT-031` |
| **PF-GIT-17** | Exécution technique prépare un push | Vérifier cible et droits, D6 autorise et D7 lance | `RG-GIT-025`, `RG-GIT-026`, `RG-GIT-027`, `RG-GIT-029` |
| **PF-GIT-18** | Contrat de mutation changé après inspection | Nouvel acte si changement matériel ; aucune substitution silencieuse | `RG-GIT-025`, `RG-GIT-026`, `RG-GIT-028` |
| **PF-GIT-19** | Push puis PR sans autorisation de merge | PR possible seulement sous mandat applicable ; merge toujours distinct | `RG-GIT-025`, `RG-GIT-030`, `RG-GIT-031` |
| **PF-GIT-20** | Deux clics Exécuter et réponse réseau perdue | Relire l’état Git avant tout nouveau lancement ; pas de doublon imputé | `RG-GIT-031`, `RG-GIT-032` |
| **PF-GIT-21** | Commit créé mais publication distante échouée | Distinguer commit local, branche distante, push et résultat D8 | `RG-GIT-017`, `RG-GIT-021`, `RG-GIT-031`, `RG-GIT-032` |
| **PF-GIT-22** | Merge annoncé sans vérification de ref | Ne pas déclarer merge ou adoption ; vérifier commit et branche cible | `RG-GIT-018`, `RG-GIT-021`, `RG-GIT-030`, `RG-GIT-031` |
| **PF-GIT-23** | Deux Pilotes travaillent sur répertoires disjoints | Autoriser travaux indépendants étayés sous leurs propres mandats | `RG-GIT-028`, `RG-GIT-033`, `RG-GIT-034` |
| **PF-GIT-24** | Deux Pilotes modifient le même fichier | Conflit et base explicités ; STOP/requalification des effets incompatibles | `RG-GIT-028`, `RG-GIT-034`, `RG-GIT-035` |
| **PF-GIT-25** | Décision du projet B publiée dans Git | Référence lisible mais pas décision applicable automatiquement au projet A | `RG-GIT-016`, `RG-GIT-033`, `RG-GIT-036` |
| **PF-GIT-26** | Rattachement de dépôt retiré | Traçabilité conservée, accès actuel requalifié, autres travaux maintenus | `RG-GIT-003`, `RG-GIT-006`, `RG-GIT-012`, `RG-GIT-037`, `RG-GIT-040` |
| **PF-GIT-27** | Changement de permissions pendant une exécution | Restreindre les effets restants, ne pas prétendre rollback des faits antérieurs | `RG-GIT-012`, `RG-GIT-027`, `RG-GIT-029`, `RG-GIT-031` |
| **PF-GIT-28** | Aucun cycle PR readiness ou DevOps ouvert | Nora peut consulter Git et conseiller sans activer de CKI secondaire | `RG-GIT-001`, `RG-GIT-038`, `RG-GIT-040` |
| **PF-GIT-29** | CKI propose une séquence PR–merge–release obligatoire | Vérifier la source du gate applicable ; ignorer la contrainte purement CKI | `RG-GIT-030`, `RG-GIT-038` |
| **PF-GIT-30** | Projet non logiciel utilise Git seulement pour les documents | D9 reste facultatif et proportionné, aucun chemin logiciel imposé | `RG-GIT-001`, `RG-GIT-005`, `RG-GIT-007`, `RG-GIT-040` |
| **PF-GIT-31** | Demande Kubernetes intégrée dans un travail Git | Qualifier Kubernetes comme effet technique séparé si pertinent ; ne pas inférer ses droits depuis Git | `RG-GIT-008`, `RG-GIT-013`, `RG-GIT-025`, `RG-GIT-039` |
| **PF-GIT-32** | Relance après incident Git et déconnexion | Récupérer refs et mutations visibles sans inventer succès ou identité | `RG-GIT-020`, `RG-GIT-023`, `RG-GIT-032`, `RG-GIT-037` |
| **PF-GIT-33** | Preuve Git après commit mais tests non observés | D9 fournit la référence ; D8 limite la conformité aux éléments vérifiés | `RG-GIT-021`, `RG-GIT-022`, `RG-GIT-023`, `RG-GIT-024` |
| **PF-GIT-34** | Fusion de projets Studio souhaitée du fait d’un dépôt commun | Ne pas fusionner mémoires/mandats, expliciter la collaboration limitée à Git | `RG-GIT-016`, `RG-GIT-033`, `RG-GIT-036` |

**Contrôle de couverture documentaire :** les **40** règles `RG-GIT-001..040` sont référencées dans au moins un des **34** scénarios `PF-GIT-01..34` ; les identifiants sont sans trou. Ce contrôle vérifie la traçabilité des scénarios, **pas** leur passage en runtime. Les négatifs prioritaires sont : accès révoqué, identité Cursor erronée, branche périmée, double effet après perte réseau et dépôt partagé à modifications concurrentes.

## 5. Revue croisée et traitement des écarts

### 5.1. Compatibilité documentaire avec les contrats existants

| Source comparée | Contrôle de non-contradiction | Verdict limité |
| --- | --- | --- |
| **R1 §§2.23–2.24, 2.28, 2.36** | Six conditions du domaine, projet sans Git, séparation identité/lecture/écriture et collaboration individuelle préservées | **COMPATIBLE au niveau R2 candidat** |
| **D3 Nora v0.4** | Sources pertinentes et non fiables, dialogue et proposition non autorisants ; pas d’initiative technique automatique | **COMPATIBLE au niveau documentaire** |
| **D4 Connaissance v0.1** | Provenance, points ouverts, mémoire individuelle et sources partagées sans fusion d’autorité | **COMPATIBLE au niveau documentaire** |
| **D5 Trajectoire/CKI v0.1** | Pas de cycle/CKI imposé par Git ; matrice informative sans gate ni précédence | **COMPATIBLE au niveau documentaire** |
| **D6 Gouvernance v0.1** | D6 décide mandats/STOP ; D9 n’augmente pas les permissions en reliant Git | **COMPATIBLE au niveau documentaire** |
| **D7 Réalisation v0.1** | D7 lance/exécute, D9 atteste accès/cibles/états Git ; deux moteurs interdits | **COMPATIBLE au niveau documentaire** |
| **D8 Résultats/Preuves v0.1** | Une ref Git soutient une observation bornée, jamais tous les critères ni une acceptation | **COMPATIBLE au niveau documentaire** |
| **CKI Next v0.2 candidate / matrice** | Conseils Git/PR/DevOps/QA non opposables, pas de nouveaux cycles obligatoires | **AUCUNE CONTRADICTION NORMATIVE DIRECTE OBSERVÉE**, contenu CKI non validé |
| **D1/D2 non spécifiés** | Identité produit et rattachement du projet | **NON ÉVALUÉ** contre futures specs propriétaires |

### 5.2. Reprise des réserves D6–D8 et des interfaces méthodologiques

| Réserve amont | Traitement proposé par D9 | Limite restant ouverte |
| --- | --- | --- |
| `D6-03` / `REAL-02` | Cible Git, ref de base et droits exécuteur contrôlés sur le contrat applicable (`RG-GIT-025..028`) | Identité contrat/commande à prouver en R4–R6 |
| `D6-05` / `REAL-03` | Trois identités/capacités séparées et sessions non mutualisées (`RG-GIT-008/014/027`) | Authentification GitHub/Cursor et isolation multi-Pilotes à prouver |
| `REAL-04` / `REAL-07` | Relecture des refs, conflits, droits, récupération après timeout (`RG-GIT-019/028/032/036`) | Atomicité, idempotence et interactions concurrentes en R4–R6 |
| `PRV-04` | Références, provenance, source hostile comme donnée (`RG-GIT-015/017/020/023`) | Démonstration de protection des sources et de l’intégrité en R4–R6 |
| `PRV-06` | Permissions courantes, révocation, isolement et confidentialité (`RG-GIT-009/012/014/016`) | D1/D4, mécanismes de protection R4 |
| `PRV-10` | Ref/branche/commit vérifiés sans généraliser aux autres environnements (`RG-GIT-017..024`) | Preuve de conformité D8 indépendante, tests R5/R6 |
| `PRV-12` | Aucun droit créé par une décision, une acceptation ou un CKI ; contrôle applicable D6/D9 | Restrictions externes à qualifier en R4 et éventuel arbitrage Morris |
| `5.1-1` et `D6-06` | CKI/CKC restent un seul concept cible non opposable ; aucune spécialité Git obligatoire | Harmonisation documentaire des specs validées en consolidation R2 |
| Roadmap `main` | `KNOWN GAP`, texte pré-merge non synchronisé malgré PR #639 vérifiée | Mandat de gouvernance D2 distinct, sans modifier la Roadmap dans ce lot |

### 5.3. Réserves D9, responsables et critères de sortie

| Réserve | Qualification actuelle | Responsable et jalon | Exit vérifiable |
| --- | --- | --- | --- |
| **GIT-01 — Identité GitHub et authentification Studio** | R1 établi, mécanisme non retenu | D1/R2, R4, R5–R6 | Démontrer identité et isolement sans déduction de droits globaux |
| **GIT-02 — Autorisations de lecture et accès progressif** | Fonctionnellement qualifié, permissions LIVE non prouvées | D1/D9 R2 ; R4–R6 | Lecture limitée aux dépôts réellement accessibles ; refus et révocation éprouvés |
| **GIT-03 — Droits Git de l’environnement Cursor** | Frontière D7/D9 clarifiée ; aucune session CLI adoptée | D7/D9 R2 ; R4–R6 | Bonne identité exécuteur, droit effectif par opération, aucun jeton Studio transmis tacitement |
| **GIT-04 — Choix de dépôt et absence de défaut imposé** | Défini au niveau R2 ; UX non conçue | D2/D9 R2 ; R3–R6 | Choix Pilot-first et projet sans dépôt, sans automatisme de création |
| **GIT-05 — Référence de base, concurrence et conflits** | Contrat fonctionnel décrit, mécanisme inconnu | D7/D9 R4 ; R5–R6 | Pas d’écrasement, conflits visibles, reprise sous base vérifiée |
| **GIT-06 — Effets Git et idempotence réelle** | Distinction commande/résultat définie, non prouvée | D7/D9 R4 ; R5–R6 | Aucun push/PR doublé après timeout, état distant reconstituable |
| **GIT-07 — Source Git comme donnée non autorisante** | Frontière D3/D6/CKI qualifiée | D3/D6/D9 R2 ; tests R5–R6 | Prompt injection et faux GO n’obtiennent ni droit ni changement de règles |
| **GIT-08 — Dépôt partagé et isolation des projets** | R1 validé, REAL multi-Pilotes inexistant | D1/D4/D6/D9 R4 ; R5–R6 | Deux Pilotes avec droits distincts sans transfert de mémoire, de décision ou de mandat |
| **GIT-09 — Git utilisé comme élément de preuve** | D8 publié, interface Git précisée ; pas de preuve runtime | D8/D9 R2 ; R4–R6 | Ref/SHA/source et fraîcheur vérifiables, aucune conformité extrapolée |
| **GIT-10 — PR et merge distincts de release/adoption** | Frontière de responsabilité définie, contrôles techniques à prouver | D6/D7/D8/D9 R4–R6 | Merge seulement avec autorité valable, release non présumée |
| **GIT-11 — Kubernetes et outillage non-Git** | Hors D9 par R1 ; pas d’arbitrage d’intégration | D7/R4 si besoin produit réel | N’ajouter ni orchestration Kubernetes ni dépendance Git sans mandat et besoin démontré |
| **GIT-12 — Retour aux domaines 1–2 et consolidation R2** | Interfaces D1–D2 encore non couvertes par specs propriétaires | D1/D2 et consolidation R2 | Définir identité/projet/sas sans doubler D9 ; états et erreurs E2E compatibles |
| **GIT-13 — Roadmap main désynchronisée** | KNOWN GAP Git/roadmap, hors mandat R2 | Morris / gouvernance, mandat D2 | Actualisation normative sous GO distinct après preuve des statuts |
| **GIT-14 — CKC historique, CKI Next et spécialité Git** | Terminologie hétérogène, corpus CKI candidat non adopté | D3/D5, consolidation R2 ; R5/R6 | Un seul CKI principal, aucune obligation de parcours PR/merge à partir du corpus |

**Contradictions apparentes mais non normatives :** « Git facultatif » est compatible avec « identité GitHub pour accéder à Studio » car rattacher un dépôt est autre chose que s’authentifier ; « lecture possible » ne signifie pas « écriture autorisée » ; « branche/PR présente » ne signifie pas « mergée, en release ou adoptée » ; « source partagée » ne signifie pas « décision partagée » ; « Kubernetes mentionné » ne signifie pas « autorité technique de D9 ». Une vraie contradiction externe exige source, portée et action, et ne peut être déclarée résolue sur la seule présence de ce document.

## 6. Acceptation fonctionnelle validée et suites R3–R6

| Jalon | Résultat attendu, responsabilité et limite |
| --- | --- |
| **R2** | Morris revoit D9 v0.1 ; document validé puis publication sous mandat Git distinct ; D1/D2 à spécifier et revue de cohérence globale des neuf domaines avant exit R2. |
| **R3 UX** | Choix de dépôt, ref/branche, demande d’accès ciblée, instruction inspectable et alertes de conflit ou révocation compréhensibles sans déverser Git dans chaque échange. |
| **R4 Architecture** | Comparer authentification/intégration GitHub, sessions Cursor, secrets, isolation, granularité des accès, vérité distante, concurrence, reprise ; ne pas reprendre automatiquement les composants de l’ancien Studio. |
| **R5 Construction** | Macro-capacité E2E : Pilote identifié → lecture autorisée → contrat D7 inspecté et autorisé D6 → accès Git effectif Cursor → opération Git tracée → observation D9 → qualification D8 → bilan Nora. |
| **R6 Qualification** | Tester deux Pilotes/deux projets sur dépôt commun, permissions dissymétriques, base divergente, révocation, timeout, faux merge, preuve périmée, projet sans Git, injection de source et absence de double effet. |

**Critères R2 proposés :** autonomie complète du projet sans dépôt ; identité/permissions séparées ; lecture Git vérifiée et contextualisée ; cible/branche/base à effet significatif explicites ; mutations D7/D6 seulement ; ref d’observation D9 distincte du verdict D8 ; projet partagé seulement par Git accessible ; refus ou requalification sur conflit ; pas de CKI ou Kubernetes imposé. **Aucune architecture ni preuve REAL adoptée.**

**Verdict documentaire : `R2 — DOMAINE 9 / INTÉGRATION GIT GOUVERNÉE — v0.1 VALIDATED SPEC (Morris, 2026-11-02)` ; 40 règles `RG-GIT-001..040`, 34 scénarios `PF-GIT-01..34`, 14 réserves `GIT-*`, confrontation R1/D3–D8/CKI v0.2 ; D1–D2 `NON ÉVALUÉS` contre specs futures ; Studio Next `N/A — NON IMPLÉMENTÉ`.**
