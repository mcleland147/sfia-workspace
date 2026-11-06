# SFIA Studio Next — R5 / ML3 — Matrice individuelle de traçabilité D5/D6
## Version candidate v0.2 — R01–R04 traités en conception, publiée sur branche documentaire, sans preuve de test

**Références associées :** [Spécification technique v0.4](specification-technique.md) · [Revue de conception v0.2](revue-conception.md).

**Date :** 2026-11-06. **Baseline :** `main@ab18316b9c1e849ff557f4ba561c638e9961bb89`. **Sources R2 :** `conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md` (blob `964893817d351b668e221e25085ee00b909337de`) et `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` (blob `de4b3de245484620ea60f0662004c6993ea808b1`). **R3 UX :** `ux-ui/audit-couverture-ux-r3.md` §7.4, blob `81c62c700b2e1b377da7e27e4a92db506bfb6e38`. **R4 QA :** `architecture-technique/cadrage-r4.md` §5.5.7, blob `f390f3d87d18e3c6c91f8a57e5960b2be946e60a`.

**Complément :** `R01–R04` = contrats proposés dans la spécification v0.4 §8 bis ; traitement documentaire à valider Morris, non preuve runtime.

**Lecture :** `IN` = comportement attendu dans ML3 ; `INTERFACE` = invariant/contrat exposé sans moteur d’effet D7/D8/D9 ; `IN + INTERFACE` = part ML3 et part futur distinctes. QA = oracle R4 à instancier en test ; pas une réussite, pas forcément preuve exhaustive du point. `UX` = numéro de surface Figma dans l’inventaire R3 ; aucun nœud natif ni runtime inspecté dans cette revue. Chaque entrée est `DOCUMENTARY MAPPED / TEST NOT EXECUTED`.

### 1. RG-TRJ — 40 règles

| Règle R2 | Intitulé propriétaire | Contrat ML3 | Portée | QA candidat |
|---|---|---|---|---|
| `RG-TRJ-001` | Trajectoire non préalable | CTX — identité/continuité | IN | B01 |
| `RG-TRJ-002` | Projection distincte des faits | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-003` | Orientation personnalisable | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-004` | Révision sans rétroactivité | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-005` | Dépendance réelle et justifiée | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-006` | Requalification proportionnée | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-007` | Références de continuité | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-008` | Cycle actif unique | CYC — cycles et commandes | IN | B05 [R03] |
| `RG-TRJ-009` | Ouverture gouvernée | CYC — cycles et commandes | IN | B03 [R03] |
| `RG-TRJ-010` | Type et résultat cohérents | CYC — cycles et commandes | IN | B03 [R03] |
| `RG-TRJ-011` | Deuxième ouverture incompatible | CYC — cycles et commandes | IN | B05 [R03] |
| `RG-TRJ-012` | Clôture gouvernée et honnête | CYC — cycles et commandes | IN | B07 [R03] |
| `RG-TRJ-013` | Pas de gate de cycle automatique | CYC — cycles et commandes | IN | B08 [R03] |
| `RG-TRJ-014` | GO combiné à effets distincts | CYC — cycles et commandes | IN | B07 [R03/R04] |
| `RG-TRJ-015` | État réel avant confirmation | CYC — cycles et commandes | IN | B06 [R03/R04] |
| `RG-TRJ-016` | Rejeu et concurrence | CYC — cycles et commandes | IN | B05/B06 [R03/R04] |
| `RG-TRJ-017` | Correspondance canonique | CKI — spécialisation Nora | IN | B11/B12 [R01] |
| `RG-TRJ-018` | Un seul CKI principal | CKI — spécialisation Nora | IN | B11 [R01] |
| `RG-TRJ-019` | Autonomie intrinsèque des CKI | CKI — spécialisation Nora | IN | B11 [R01] |
| `RG-TRJ-020` | Guidance à responsabilité bornée | CKI — spécialisation Nora | IN | B11/B12 [R01] |
| `RG-TRJ-021` | Version et provenance interprétables | CKI — spécialisation Nora | IN | B12 [R01] |
| `RG-TRJ-022` | Disponibilité non fictionnelle | CKI — spécialisation Nora | IN | B12 [R01] |
| `RG-TRJ-023` | Pas de sélection dynamique hors cycle | CKI — spécialisation Nora | IN | B01 [R01] |
| `RG-TRJ-024` | Évolution CKI sans effet rétroactif | CKI — spécialisation Nora | IN | B10 [R01] |
| `RG-TRJ-025` | Matrice purement informative | CKI — spécialisation Nora | IN | B11 |
| `RG-TRJ-026` | Pertinence contextualisée | CKI — spécialisation Nora | IN | B11 |
| `RG-TRJ-027` | Analyse transverse sans second CKI | CKI — spécialisation Nora | IN | B11 |
| `RG-TRJ-028` | Matrice non exhaustive | CKI — spécialisation Nora | IN | B11 |
| `RG-TRJ-029` | Différence transmission / preuve | CKI — spécialisation Nora | IN | B12 |
| `RG-TRJ-030` | Maturité proactive non répétitive | MAT — maturité et progression | IN | B08 |
| `RG-TRJ-031` | Unification de la guidance | MAT — maturité et progression | IN | B08 |
| `RG-TRJ-032` | Clôturabilité argumentée | MAT — maturité et progression | IN | B08 |
| `RG-TRJ-033` | Continuité sans mémoire parallèle | MAT — maturité et progression | IN | B18 |
| `RG-TRJ-034` | Reprise fidèle après interruption | MAT — maturité et progression | IN | B18 |
| `RG-TRJ-035` | Réserve/suspension non résolue | MAT — maturité et progression | IN | B14 |
| `RG-TRJ-036` | Visibilité proportionnée | MAT — maturité et progression | IN | B18 |
| `RG-TRJ-037` | État de méthode porté par le projet | METH — méthode projet | IN | B09 [R02] |
| `RG-TRJ-038` | Application d'un changement de méthode | METH — méthode projet | IN | B09/B10 [R02] |
| `RG-TRJ-039` | Requalification des cycles touchés | METH — méthode projet | IN | B10 [R02] |
| `RG-TRJ-040` | Méthode et CKI sans autorité concurrente | METH — méthode projet | IN | B10/B12 [R02] |

### 2. RG-GOV — 37 règles

| Règle R2 | Intitulé propriétaire | Contrat ML3 | Portée | QA candidat ou propriétaire futur |
|---|---|---|---|---|
| `RG-GOV-001` | Catégories non interchangeables | DEC — décisions et portée | IN | B04 |
| `RG-GOV-002` | Expression naturelle et suffisante | DEC — décisions et portée | IN | B03 [R03] |
| `RG-GOV-003` | Auteur et projet compétents | DEC — décisions et portée | IN | B15 [R03] |
| `RG-GOV-004` | Ambiguïté déterminante | DEC — décisions et portée | IN | B04 [R03] |
| `RG-GOV-005` | Acte observé et source fiable | DEC — décisions et portée | IN | B04 [R03] |
| `RG-GOV-006` | Refus de fausse formalisation | DEC — décisions et portée | IN | B04 |
| `RG-GOV-007` | Autorité non universelle | DEC — décisions et portée | IN | B15 |
| `RG-GOV-008` | Pas de décision métier autonome de Nora | DEC — décisions et portée | IN | B03 |
| `RG-GOV-009` | Référence durable d'un arbitrage structurant | DEC — décisions et portée | IN | B17 [R02] |
| `RG-GOV-010` | Historique non réécrit | DEC — décisions et portée | IN | B17 [R02] |
| `RG-GOV-011` | Révision gouvernée | DEC — décisions et portée | IN | B17 [R02] |
| `RG-GOV-012` | Conflits d'autorité | DEC — décisions et portée | IN | B13 [R02/R03] |
| `RG-GOV-013` | Délimitation et propagation bornées | REST — restrictions/STOP | IN + INTERFACE | B16 |
| `RG-GOV-014` | Isolation des projets individuels | DEC — décisions et portée | IN | B15 [R03] |
| `RG-GOV-015` | Contrainte supérieure applicable | REST — restrictions/STOP | IN + INTERFACE | B13/B16 |
| `RG-GOV-016` | Reprise sans autorité inventée | REST — restrictions/STOP | IN + INTERFACE | B14 [R03] |
| `RG-GOV-017` | Suspension humaine durable | REST — restrictions/STOP | IN + INTERFACE | B14 [R02/R03] |
| `RG-GOV-018` | Levée humaine contextualisée | REST — restrictions/STOP | IN + INTERFACE | B14 [R02] |
| `RG-GOV-019` | Suspension humaine vs pause technique | REST — restrictions/STOP | IN + INTERFACE | B14 + D7 futur |
| `RG-GOV-020` | Interdiction des confirmations d'arrêt fictives | REST — restrictions/STOP | IN + INTERFACE | B14 + D7 futur [R03] |
| `RG-GOV-021` | Changement significatif de besoin | REST — restrictions/STOP | IN + INTERFACE | B16 |
| `RG-GOV-022` | Révocation et opérations en cours | REST — restrictions/STOP | IN + INTERFACE | B16 + D7 futur [R02] |
| `RG-GOV-023` | Proposition n'est pas permission | DEC — décisions et portée | IN | B04 |
| `RG-GOV-024` | Contrat inspecté et « Exécuter » | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-025` | Liaison au bon périmètre | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-026` | Requalification des changements matériels | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-027` | Vérification actuelle avant effet | REST — restrictions/STOP | INTERFACE | B16 + D7/D9 futur [R03] |
| `RG-GOV-028` | Rejeu sans élargissement d'autorité | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver [R03] |
| `RG-GOV-029` | GO de cycle distinct du contrat technique | CYC — cycles et commandes | IN | B03/B07 [R03/R04] |
| `RG-GOV-030` | Création de projet à acte explicite propre | CTX — identité/continuité | INTERFACE | B01 + D2 existant |
| `RG-GOV-031` | Acceptation humaine distincte de conformité | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-032` | Décision informée et résultat qualifié | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-033` | Correction sous nouveau mandat | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-034` | Méthode et CKI non autorisants | CKI — spécialisation Nora | IN | B12 |
| `RG-GOV-035` | Choix durable de méthode et autorité | METH — méthode projet | IN | B09/B10 [R02] |
| `RG-GOV-036` | Interdiction de fabriquer une adoption | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-037` | Choix documentaire non autorisant | DEC — décisions et portée | IN | B04 |

### 3. PF-TRJ — 30 scénarios

| Scénario R2 | Intitulé | Contrat ML3 | Portée | UX R3 # | QA candidat |
|---|---|---|---|---|---|
| `PF-TRJ-01` | Sas et projet sans cycle | CTX — identité/continuité | IN | 2,22,28 | B01 |
| `PF-TRJ-02` | Trajectoire suggérée sans ouverture | TRAJ — trajectoire | IN | 22,23 | B02 |
| `PF-TRJ-03` | Début direct par l’architecture technique | CYC — cycles et commandes | IN | 22,50,61,51,57 | B03 |
| `PF-TRJ-04` | Ouverture autorisée par conversation | CYC — cycles et commandes | IN | 23,52,24,54 | B03 [R03] |
| `PF-TRJ-05` | GO ambigu | CYC — cycles et commandes | IN | 41,23 | B04 [R03] |
| `PF-TRJ-06` | Demande d’un second cycle simultané | CYC — cycles et commandes | IN | 26,24 | B05 [R03] |
| `PF-TRJ-07` | Digression sécurité pendant UX | CKI — spécialisation Nora | IN | 24,59,3 | B11 [R01] |
| `PF-TRJ-08` | CKI absent ou version non applicable | CKI — spécialisation Nora | IN | 39,58 | B12 [R01] |
| `PF-TRJ-09` | Relation Architecture vers DevOps | CKI — spécialisation Nora | IN | 51,59,3 | B11 |
| `PF-TRJ-10` | Matrice silencieuse et facultative | CKI — spécialisation Nora | IN | 59,3 | B11 |
| `PF-TRJ-11` | Transfert Conception vers UX | CKI — spécialisation Nora | IN | 22,59,3 | B11 |
| `PF-TRJ-12` | QA révèle une contradiction fonctionnelle | CKI — spécialisation Nora | IN | 59,3,40 | B11 |
| `PF-TRJ-13` | Maturité suffisante avec réserve reportable | MAT — maturité et progression | IN | 25,27,49 | B08 |
| `PF-TRJ-14` | Maturité non démontrée | MAT — maturité et progression | IN | 44,25 | B08 |
| `PF-TRJ-15` | Clôture avec GO effectif | CYC — cycles et commandes | IN | 25,53,27,54 | B07 [R03] |
| `PF-TRJ-16` | GO conjoint, effet partiel | CYC — cycles et commandes | IN | 42,49,47,57 | B07 / partiel conditionnel [R04] |
| `PF-TRJ-17` | Ouvertures concurrentes | CYC — cycles et commandes | IN | 26,56 | B05 [R03] |
| `PF-TRJ-18` | Rejeu d’un GO | CYC — cycles et commandes | IN | 52,56,24 | B06 [R03] |
| `PF-TRJ-19` | Reprise du même fil après interruption ou transition de cycle | CTX — identité/continuité | IN | 55,24,40 | B18 [R03] |
| `PF-TRJ-20` | Suspension du Pilote | REST — restrictions/STOP | IN | 33,25 | B14 [R03] |
| `PF-TRJ-21` | Nouvelle version CKI disponible | CKI — spécialisation Nora | IN | 48,58 | B10 [R01] |
| `PF-TRJ-22` | Changement de méthode projet | METH — méthode projet | IN | 60,32,46 | B10 [R02] |
| `PF-TRJ-23` | Réorientation et retour sans cycle forcé | TRAJ — trajectoire | IN | 59,3 | B02 |
| `PF-TRJ-24` | Interprojets et Git partagé | CTX — identité/continuité | IN | 11,12 | B15 [R03] |
| `PF-TRJ-25` | Pratiques transversales sans spécialité dédiée | CKI — spécialisation Nora | IN | 51,59,3 | B11 [R01] |
| `PF-TRJ-26` | CKI guide un livrable non obligatoire | CKI — spécialisation Nora | IN | 58,3 | B11 |
| `PF-TRJ-27` | État durable explicitement sans méthode | METH — méthode projet | IN | 28,55 | B01/B09 [R02] |
| `PF-TRJ-28` | Choix de méthode exprimé naturellement | METH — méthode projet | IN | 29,31 | B09 [R02] |
| `PF-TRJ-29` | Nouvelle version et cycle actif | METH — méthode projet | IN | 60,32,46 | B10 [R02] |
| `PF-TRJ-30` | Technique CKI incompatible avec la méthode projet | METH — méthode projet | IN | 58,60,3 | B10/B12 [R01/R02] |

### 4. PF-GOV — 29 scénarios

| Scénario R2 | Intitulé | Contrat ML3 | Portée | UX R3 # | QA candidat ou domaine futur |
|---|---|---|---|---|---|
| `PF-GOV-01` | Le Pilote dit « préfère un tableau » | DEC — décisions et portée | IN | 3 | B04 |
| `PF-GOV-02` | Décision structurante avec portée claire | DEC — décisions et portée | IN | 31,40 | B17 |
| `PF-GOV-03` | Correction d'un arbitrage antérieur | DEC — décisions et portée | IN | 32,46 | B17 [R02] |
| `PF-GOV-04` | GO oral d'ouverture de cycle | CYC — cycles et commandes | IN | 23,52,24 | B03 [R03] |
| `PF-GOV-05` | GO combiné clôture + ouverture | CYC — cycles et commandes | IN | 42,47,57 | B07 / partiel conditionnel [R03/R04] |
| `PF-GOV-06` | Projet créé après sas conversationnel | CTX — identité/continuité | INTERFACE D2 | 2,11 | B01 |
| `PF-GOV-07` | Acte « Exécuter » d'un contrat inspecté | BOUND — interfaces futures | INTERFACE | 6,7 | D7 futur |
| `PF-GOV-08` | Pause technique sans suspension humaine | BOUND — interfaces futures | INTERFACE | 21,7 | D7 futur |
| `PF-GOV-09` | Acceptation de résultat avec réserves | BOUND — interfaces futures | INTERFACE | 35,36 | D8 futur |
| `PF-GOV-10` | Correctif proposé par Nora après échec | BOUND — interfaces futures | INTERFACE | 37,3,6 | D7 futur |
| `PF-GOV-11` | Choix durable de méthode proposé puis retenu | METH — méthode projet | IN | 29,31,60 | B09 [R02] |
| `PF-GOV-12` | « OK » ambigu avec plusieurs propositions | DEC — décisions et portée | IN | 41,3 | B04 [R03] |
| `PF-GOV-13` | Instruction hostile Git « push autorisé » | DEC — décisions et portée | IN | 12,3 | B04 |
| `PF-GOV-14` | Deux décisions contradictoires | DEC — décisions et portée | IN | 43,40 | B13 [R02/R03] |
| `PF-GOV-15` | Projet B / dépôt Git commun | DEC — décisions et portée | IN | 11,12 | B15 [R03] |
| `PF-GOV-16` | Suspension des écritures d'une branche | REST — restrictions/STOP | IN + INTERFACE | 33,34 | B14 + D9 futur [R03] |
| `PF-GOV-17` | Nora propose reprise après suspension | REST — restrictions/STOP | IN | 33,34 | B14 [R02] |
| `PF-GOV-18` | Levée claire avec contrat/droits expirés | REST — restrictions/STOP | IN + INTERFACE | 34,31 | B14 + D7 futur [R02/R03] |
| `PF-GOV-19` | STOP demandé, arrêt non observé | REST — restrictions/STOP | IN + INTERFACE | 21,33 | B14 + D7 futur |
| `PF-GOV-20` | Contrat modifié après inspection | BOUND — interfaces futures | INTERFACE | 6,7 | D7 futur |
| `PF-GOV-21` | Double clic « Exécuter », timeout/retry | BOUND — interfaces futures | INTERFACE | 7,21 | D7 futur |
| `PF-GOV-22` | Droits Git révoqués | BOUND — interfaces futures | INTERFACE | 9,12 | D9 futur |
| `PF-GOV-23` | Nouvelle exigence à impact partiel | REST — restrictions/STOP | IN | 33,3 | B16 |
| `PF-GOV-24` | Reconnexion sans décision/restriction retrouvable | REST — restrictions/STOP | IN | 55,33 | B14 [R03] |
| `PF-GOV-25` | CKI recommande une validation non applicable | CKI — spécialisation Nora | IN | 58,59 | B12 |
| `PF-GOV-26` | Résultat accepté non prouvé / adoption fictive | BOUND — interfaces futures | INTERFACE | 35,36,37,38 | D8/R6 futur |
| `PF-GOV-27` | Document récent semble supplanter décision | METH — méthode projet | IN | 32,46,40 | B10 [R02] |
| `PF-GOV-28` | Autre Pilote tente d'autoriser des effets | DEC — décisions et portée | IN | 11,12 | B15 |
| `PF-GOV-29` | Brouillon apprécié sans GO ni validation | DEC — décisions et portée | IN | 4,18 | B04 |

### 5. Revue de couverture et limites

| Contrôle | Résultat documentaire | Limite |
|---|---|---|
| Identités RG D5 | 40/40 | Aucun test ML3 exécuté |
| Identités RG D6 | 37/37, y compris GOV-037 | Autorités externes D7/D8/D9 = interface seulement |
| PF D5 | 30/30 avec numéro UX R3 | Correspondance UX, pas rendu navigateur |
| PF D6 | 29/29 avec numéro UX R3, y compris GOV-29 | Certaines surfaces partagées A/C/D ne sont pas du runtime ML3 |
| QA R4 B01–B18 | 18 oracles présents dans le cadrage R4 ; liens candidats dans cette matrice | Assertions détaillées, données, code, lane et SHA à produire |
| Option A / PF-TRJ-16 | Oracle B07 sur la transaction interne ; éventuel partiel reste conditionnel | Ne pas simuler un partiel d’effets PG atomiques |

**Dette de traçabilité à fermer dans le même macro-lot :** enrichir chaque ligne avec `implementationRef`, `testCaseRef`, `testRun/evidence`, `environment`, `sourceSha`, `verdict` après construction ; les domaines D7/D8/D9 seront reliés à leurs propres macro-lots lorsqu’ils existent. La matrice n’est pas un duplicata des RG/PF ni un registre de preuves actuel.

**Verdict :** `MAPPING DOCUMENTAIRE INDIVIDUEL 136/136 — QA LINKS CANDIDATE — NO TEST EXECUTED — NOT COVERAGE VERIFIED`.

### 6. R01–R04 — assertions de recette et preuve cible (sans multiplier les 136 tests)

| Contrat candidat | Sources déterminantes | Assertions obligatoires / oracle | UX R3 | Propriétaire et niveau de preuve |
|---|---|---|---|---|
| R01 — pin CKI, disponibilité, provenance | RG-TRJ-017..024 ; PF-TRJ-08/21 ; B10/B11/B12 | Pin version/digest réellement disponible au GO ; aucune auto-substitution ; `NULL` honnête sans version ; retour **même digest** permis ; changement de version explicite ; contenu hostile non livré | #24, #39, #48, #58/#59 | D5 + D3 ; PostgreSQL/manifest, fixtures négatives, LIVE pour qualité, pas de preuve d'usage depuis la seule référence |
| R02 — méthode et autorité | RG-TRJ-037..040 ; RG-GOV-009..012/035 ; PF-TRJ-27..30 ; B09/B10/B13/B16/B17 | Remplacement A→B atomique ; retrait → ABSENT ; suspension sans retrait ; révocation base courante → ABSENT sans fallback ; révocation historique sans effet courant ; cible ambiguë refusée | #28–32, #40, #46, #60 | D5 + D6 ; PostgreSQL/révision/reprise, navigateur refus/état, traçabilité historique |
| R03 — intégrité et idempotence | RG-TRJ-008..016 ; RG-GOV-003/017/027/028 ; B03..B07/B14..B16 | Deux PG simultanés un ACTIVE ; même clé même résultat ; autre clé même source/intention zéro doublon ; même clé autre fingerprint CONFLICT ; STOP concurrent selon ordre commit ; rejet source externe ; réponse perdue réconciliée | #24, #33, #41, #47, #52–56 | D5/D6 ; PG réel 2 connexions, fault injection, redémarrage, navigateur/auth, pas de seule fixture |
| R04 — combiné atomique / partiel séparé | RG-TRJ-014..016 ; RG-GOV-029 ; PF-TRJ-16/PF-GOV-05 ; B07 | Si OPEN(B) échoue avant commit, A reste ACTIVE ; après commit A CLOSED+B ACTIVE ; ACK perdu = UNKNOWN puis réconciliation ; **aucun PARTIAL ni écran #42 pour effet interne** | #47, #54, #56 ; **#42 conditionnel futur** | D5/D6 interne PG réel ; éventuel `PARTIAL` positif relève d'une frontière future réelle D7/D9, non testée par ML3 |

**Validation de ces lignes :** références documentaires établies ; assertions sont des obligations de recette futures, **toutes `NOT EXECUTED`**. Un test peut satisfaire plusieurs références. L'état `INTERFACE` des PF D7/D8/D9 dans les 136 lignes demeure inchangé. Les extensions de matrice n'altèrent ni les identifiants, ni les statuts validés des RG/PF R2.
---

## Preuves code/tests ML3 (2026-11-06) — mapping condensé

| QA | Preuve primaire |
|---|---|
| B01 | `ml3-pilotage.pg.test.ts` empty projection + e2e cycle-absent |
| B03 | open cycle APPLIED + human decision |
| B04 | ambiguous utterance REJECTED |
| B05 | concurrent open → one ACTIVE |
| B06 | same client key replay ALREADY_APPLIED |
| B07 | transition fault hook → rollback A ACTIVE |
| B09/B10 | CHOOSE/REPLACE/WITHDRAW method |
| B11/B12 | `ml3-cki-intent` / cki-resolve unit + open pin |
| B14 | restriction blocks open |
| B15 | cross-project isolation |
| B16 | revoke founding method → ABSENT |
| B17 | GET `/decisions` journal |
| B18 | GET pilotage read-only |

Statut : `CODE MAPPED / LOCAL TESTS` — pas ADOPTED. LIVE Nora : NOT EXECUTED.

## As-built correctif ML3 — testCaseRef B01–B18 (2026-11-06)

Appendice après correctifs F01–F08 / T01–T04. N'altère pas la matrice R2. Les identifiants sont les noms de cas dans le code, pas une nouvelle exigence. Lane visée : DEV. Pas une preuve RECETTE.

| QA | testCaseRef | Ce que le cas couvre après correctif |
|---|---|---|
| B01 | `PostgreSQL ML3 pilotage and decisions` › `starts empty: no cycle, no method, no retained trajectory` ; e2e `cycle-absent` | Projet neuf sans cycle ni méthode |
| B02 | même fichier › `propose stays non-authoritative until an explicit retain` ; UI `retain-trajectory` | Proposition non ouvrante ; rétention explicite |
| B03 | même fichier › `opens a cycle from an explicit utterance without an operation` ; e2e champ « Énoncé GO » | GO naturel EXPLICIT_INTERACTION sans `operation` |
| B04 | même fichier › `rejects an ambiguous OK without opening a cycle` ; unit `qualifies a clear GO` | Énoncé équivoque rejeté |
| B05 | même fichier › `keeps a single ACTIVE cycle when two opens race` | Une seule ligne ACTIVE |
| B06 | même fichier › `replays the same key and conflicts when the fingerprint changes` ; `does not apply the same human act twice when only the client key changes` ; `reconcileCommandByClientKey` | Même clé rejouée ; même `actInstanceId` non dupliqué. Perte réseau UI : statut UNKNOWN + bouton réconcilier (non exécuté en PG) |
| B07 | même fichier › `rolls back a transition when opening the next cycle fails` | CLOSE+OPEN annulés ensemble |
| B08 | non couvert par un cas dédié | Nora ne clôt pas un cycle sur un jugement de maturité : consigne d'adapter, pas un oracle exécuté |
| B09 | même fichier › `chooses, replaces, withdraws and revokes the current method base without restoring the previous one` | Choix / remplacement / retrait / révocation de base |
| B10 | unit `pins RESOLVED only when the file digest matches the approved manifest` | Pas de remplacement implicite du pin : digest hors manifeste → UNAVAILABLE |
| B11 | unit `maps each cycle type to one CKI specialty file` | Une spécialité par type. Digression Nora hors spécialité : non exécutée comme tour LIVE |
| B12 | unit `stays ASSOCIATED without a pin and UNAVAILABLE when the digest diverges` ; cas manifeste ci-dessus | Pas de fallback si octets absents ou non approuvés |
| B13 | unit `ml3-b13-divergence` (+ C01/C02) ; PG `B13-*` + `C01` nora-context ; e2e C02 motifs | **Niveau A message↔décision** : DETERMINISTIC + PG ctx (FAKE adapter). **Niveau B typé** : PG INTEGRATION PROVEN. **Libre-texte matériel** : NOT PROVEN machine. **UX motifs** : unit + BROWSER FAKE (RESTRICTION vs HUMAN_INTENT contrôlé) |
| B14 | même fichier › restrictions + `CR-01: transition blocked when target B or source A is restricted` | STOP global, cible, et transition A→B (restriction sur A ou B) |
| B15 | même fichier › `isolates pilotage across projects and rejects a foreign user message` | Pas d'import inter-projets |
| B16 | même fichier › révocation de la méthode fondatrice dans le cas méthode | Révocation avant effet courant, sans restauration |
| B17 | e2e `decision-state` contient `APPLICABLE` ; PG `CR-02` journal `REVISED` / `APPLICABLE` | Journal affiche `state`, pas une validité séparée |
| B18 | même fichier › `starts empty` lecture seule `getPilotageProjection` ; GET `/pilotage` ne poste pas de commande | Navigation / lecture sans GO |

### Ajustement autorité CR-01..CR-04 (2026-11-06)

| CR | testCaseRef | Verdict |
| --- | --- | --- |
| CR-01 | unit `CR-01: TRANSITION_CYCLE is blocked when source A or target B is restricted` ; PG `CR-01: transition blocked when target B or source A is restricted; A stays ACTIVE` | **CLOSED** (DEV PG + unit) |
| CR-02 | PG `CR-02: REVISE_DECISION allowed for RECORD; refused for D5 founding kinds` | **CLOSED** (refuse sûr + typed ops) |
| CR-03 | PG `CR-03: different RECORD statements on same objectRef do not globally block OPEN` | **CLOSED** for false-positive removal ; material free-text conflict **PARTIAL / NEEDS MORRIS** |
| CR-04 | Review Pack FULL with embedded raw logs `/tmp/ml3-*.txt` | **CLOSED** if handoff verified |

Statut candidat : `IMPLEMENTED — CANDIDATE` (branche projet) — **NOT RECETTE — NOT MERGED — NOT ADOPTED**. LIVE Nora : NOT EXECUTED. B08/B11 LIVE cognitive : GOVERNED DEBT. B13 libre-texte matériel Niveau B : NOT PROVEN / PARTIAL.

### B13-01..10 (2026-11-06) — contrat VALIDATED IN CONTENT BY MORRIS

| ID | testCaseRef | Preuve | Limite |
| --- | --- | --- | --- |
| B13-01 | unit compatible formulations ; PG `B13-01/04` + `C01: two different but compatible…` | DETERMINISTIC + PG | pas de faux refus d'effet |
| B13-02 | unit fixture `levelASignals` ; PG `C01: single D6 + new USER…` → adapter FAKE | FAKE intégration conversationnelle | LIVE cognitive NOT PROVEN |
| B13-03 | PG `B13-03/07` restriction typed | PG INTEGRATION | libre-texte matériel NOT PROVEN (couverture partielle) |
| B13-04 | PG independent open despite RECORD divergence | PG | — |
| B13-05 | PG REPLACE → SUPERSEDED + nouvelle APPLICABLE | PG | via op typée ; pas de 2e clic rituel |
| B13-06 | unit intent ambiguous OK (ml3-cki-intent) ; C01 ambiguous framing | DETERMINISTIC | aucune mutation sans acte |
| B13-07 | PG restriction persists on projection reload | PG | — |
| B13-08 | PG COGNITIVE_PROPOSAL cannot OPEN | PG | — |
| B13-09 | PG REVOKE founding method → ABSENT | PG | REVOKED non présenté comme APPLICABLE (unit C01) |
| B13-10 | PG act-instance / reconcile ALREADY_APPLIED | PG | — |
| C01–C02 UX | unit `qualifyCommandOutcome` ; e2e RESTRICTION vs HUMAN_INTENT contrôlé | DETERMINISTIC + BROWSER FAKE | pixel Figma NOT VERIFIED |
| R1 | unit UNKNOWN≠authority ; e2e RESTRICTION→UNKNOWN→APPLIED sans motif périmé | DETERMINISTIC + BROWSER FAKE | — |
| R2 | unit jamais/aucunement/apostrophe typo + restatements positifs | DETERMINISTIC | famille FR bornée ; ≠ oracle D6 |
| R3 | PG isolation : décision B APPLICABLE avant gen A ; même objectRef + marqueur ; ctx B+ / ctx A− | PG INTEGRATION (FAKE Nora) | LIVE NOT EXECUTED ; libre-texte matériel NOT PROVEN |
