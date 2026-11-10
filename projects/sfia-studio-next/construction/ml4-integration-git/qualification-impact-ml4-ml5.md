# SFIA Studio Next — Qualification d'impact de la trajectoire ML4 / ML5

**Statut :** QUALIFICATION v0.2 — REVUE MORRIS ACCEPTÉE ; COPIE CORRIGÉE POUR LA BRANCHE D2, SANS GO BUILD
**Date :** 2026-11-07, Europe/Paris
**Dépôt :** `mcleland147/sfia-workspace`, `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5` (GitHub distant observé).
**Local Git :** `NON OBSERVÉ`. **Branche candidate ML4, état du GitHub App existant dans les comptes, environnement d'exécution LIVE :** `NON OBSERVÉS`.
**Autorité :** qualification v0.2 approuvée en revue par Morris le 2026-11-07 ; copie synchronisée dans le paquet documentaire après correction d'exemple d'endpoint GitHub. La Figma est validée en conception, tandis que les modalités techniques restent à qualifier ; pas de GO Cursor, PR ni merge.

## 1. Résumé et décision à préparer

### Orientation de capacité (accord de principe exprimé par Morris)

**ML4 : collaborer, produire et publier avec Git depuis SFIA Studio et Nora.** Git est facultatif par projet. La capacité couvre lectures, exploration sourcée, production et révision de documents D4, liaison document-révision/source-ref, choix des cibles, création de branches, écritures documentaires, commits distants, publication, PR, revue/contrôles, merge explicitement autorisé et état réel restitué. L'accès et les effets sont bornés aux droits et aux mandats du Pilote. **Aucun projet Studio partagé ni dépôt obligatoire.**

**ML5 : réalisation technique gouvernée avec Cursor.** Préparer le contrat technique complet, autoriser une tentative exécuteur Cursor, effectuer code/tests/interventions, traiter STOP et retours, rendre preuves D8, utiliser les capacités Git de D9 si réellement nécessaires. **Ne pas construire un second moteur d'effets.**

**Capacité transversale à matérialiser dès ML4 : « Intégrations ».** Le Pilote dispose d'une gestion centrale des services externes connectés, avec GitHub comme **seul fournisseur fonctionnel du lot**. Il peut autoriser GitHub immédiatement après son premier login **ou ultérieurement**, configurer les dépôts autorisés, en ajouter ou en retirer à la carte, gérer une autorisation manquante depuis Nora ou un projet, puis retrouver l'état et les limites de ses accès. Cette expérience doit anticiper l'ajout futur de services (Figma, Jira, Teams, SharePoint, OneDrive, Gmail, etc.) **sans** construire de marketplace ni d'architecture universelle d'extensions dans ML4.

### Verdict

- La nouvelle orientation **crée un résultat Pilote cohérent** en ML4, et correspond à une construction end-to-end sans Cursor. L'expérience « Intégrations » devient la façade de gestion des autorisations GitHub, sans conditionner la création ni l'utilisation générale de Studio.
- Elle **contredit explicitement** la lecture littérale de R1 §2.23, §2.28 condition 4 et E2E07 §2.36, qui confient les effets Git à Cursor via D7 ; D9 R2 §1/§2.2 et `RG-GIT-025/027`, ainsi que le séquencement R5 existant, doivent être synchronisés.
- L'ADR R4-03 **peut être conservé dans son invariant** : D6 autorité, D7 propriété du lancement/du contrat et des faits de tentative, D8 qualité probatoire, D9 Git. L'extension précise D7 : **opérations Git natives Studio** en ML4, **exécuteur Cursor** en ML5.
- **Décision D2 ciblée nécessaire** avant publication des mises à jour normatives. La validation conversationnelle de la direction fonctionnelle n'autorise pas les effets distants.

## 2. Pré-check Git et constat réel

| Élément | Observation / limite |
|---|---|
| Git `main` | `84bf3496a459bae9c3f9e0ac7acce4b57a595bc5`, distante ; branche `main` protégée |
| SEF | v0.2, macro-lot cohérent, §10 D0–D3, aucune publication autonome sans GO |
| Roadmap | R5 IN PROGRESS ; ML1 CLOSED avec réserves, #649 merged ; ML2 recette acceptée avec réserves, #659 merged, pas de clôture supplémentaire inférée ; ML3 CLOSED D5/D6/CKI avec réserves, #661 merged ; ML4 CANDIDATE / NOT STARTED / NOT AUTHORIZED |
| D1 | Better Auth GitHub OAuth dans `web/src/lib/auth.ts`, `GITHUB_CLIENT_ID/SECRET` ; aucun scope repo demandé, identité Studio uniquement |
| D3 | `nora-adapter.ts`, `cognitive-policy.ts` : outils de lecture D4 seulement ; texte système déclare Git/Web/Cursor indisponibles ; pas d'outil Git natif |
| D4 | `document/service.ts` + schéma `documents`/`document_revisions`, versions, corrélation/idempotence, comparaison, API documents ; ne pas reconstruire l'éditeur/l'historique de ML2 |
| D5/D6 | commandes de pilotage et décisions/restrictions existantes, bornées ML3 ; **pas de moteur d'effet Git déjà prouvé** |
| D7/D8/D9 | pas de domaines de runtime dédiés ni d'API Git Next repérés dans l'arbre Git courant |
| UX | R3 §14 : 41 règles, 36 PF reliés à 35 écrans Git 171–205 + écrans 09/12 ; **maquettes et audit documentaires**, non comportement navigateur. Aucun parcours central « Paramètres → Intégrations » ni traversée login → consentement → retour → projet n'est prouvé. |
| Proof | aucune publication Git Next LIVE/REAL, aucune opération Git ML4 ou intégration Cursor ML5 prouvée |
| Côté GitHub | Enregistrement/installation de GitHub App d'intégration non observable depuis les sources ; à configurer/vérifier sous mandat futur. GitHub distingue installation (compte/organisation, sélection des dépôts), autorisation utilisateur (si action en son nom) et configuration de l'intégration ; approbation d'organisation potentiellement requise. |

## 3. Frontières de responsabilité recommandées

| Domaine | Responsable canonique | Ce que ML4 consomme ou étend |
|---|---|---|
| D1 | Identité et session du Pilote | Session Studio authentifiée ; **aucun droit dépôt déduit d'OAuth** ; accès à « Paramètres → Intégrations » après identification |
| D2 | Projet créé/continu et sas | Projet facultativement associé à 0..n ressources Git ; lien **projet ↔ ressources** distinct de l'autorisation du **Pilote ↔ fournisseur** ; pas de dépôt créé par « Créer projet » |
| D3 Nora | Comprendre, chercher, comparer, rédiger, recommander | Outils de lecture Git sous scope serveur ; production/révision guidée ; ne décide pas/ n'appelle pas directement les API d'écriture |
| D4 | Documents, révisions, acquis, provenance, sources | Document Studio reste document D4 ; associer provenance de sources Git et publication éventuelle sans dupliquer les objets métier |
| D5 | Trajectoire/cycles/CKI | Pas de cycle « Git » obligatoire, ni CKI imposant une séquence |
| D6 | HumanDecision, autorisation, restriction, révocation | Autoriser cibles/effets sous portée, version, identité ; merge **acte distinct** ; recontrôle au point d'effet |
| D7 | Contrat inspectable, déclenchement et suivi des effets externes | **Tranche minimale réelle** pour mutation Git native via D9, sans runner Cursor et sans second moteur parallèle |
| D8 | Déclaration vs observation vs conformité vs acceptation | Restituer référence/commit/PR/merge observés, statut de vérification et limites ; aucun ADOPTED inféré |
| D9 | Adapter GitHub, ressources, permissions, ref/base/conflits, opérations Git | GitHub App, installation + autorisation utilisateur, inventaire des dépôts réellement accessibles, mise à jour des accès à la carte, read/write sous D6 et D7 ; aucun moteur d'extensions concurrent |

### Invariants à ne pas perdre

1. Intention en langage naturel ≠ permission ni effet.
2. Autoriser une création de branche/commit/PR ne préautorise pas un merge ; aucun merge automatique.
3. Une source Git hostile est donnée, jamais commande ou décision.
4. Permission de lecture, permission d'écriture, droits du Pilote et droits du connecteur restent distincts ; droits Cursor s'ajoutent en ML5.
5. L'identité du demandeur, l'acteur effectif GitHub et l'identité du propriétaire du projet sont vérifiables.
6. Une ref/HEAD et un diff observés ne sont jamais réutilisés aveuglément pour une écriture ultérieure.
7. Document D4, fichier Git, commit, PR, fusion et acceptation sont des objets/faits distincts.
8. Timeout/retour perdu : relire l'état distant avant reprise ; pas de doubles commits ou PR supposés sûrs.
9. Pas de projet partagé induit par dépôt Git commun ; pas de diffusion tacite de mémoire/décisions d'un autre Pilote.
10. Aucun résultat sans observation, aucune preuve de conformité générale depuis un SHA.

### 3.1. Frontière indispensable : intégration, ressource, autorisation d'effet

Il faut séparer **quatre réalités**, faute de quoi l'UX « Connecter GitHub » deviendrait trompeuse :

| Niveau | Question traitée | Propriétaire | Ne doit jamais être confondu avec |
|---|---|---|---|
| **Session du Pilote** | Qui est connecté à Studio ? | D1 | Autorisation de dépôt GitHub |
| **Intégration personnelle** | À quelle GitHub App/installation le Pilote a-t-il effectivement accès, pour quels dépôts et permissions ? | D9, identité D1 consommée | Rattachement à un projet Studio |
| **Ressource du projet** | Quel dépôt, fichier ou ref ce projet souhaite-t-il consulter ou employer ? | D9 / D4 selon la nature du lien | Autorisation de modifier la ressource |
| **Opération externe** | Quel effet précis, quelle cible, quelle version et quel GO sont applicables maintenant ? | D6 acte, D7 déclenchement, D9 Git, D8 observation | Permission permanente ou merge implicite |

Une intégration personnelle GitHub ne crée pas automatiquement un rattachement à tous les projets du Pilote. Inversement, retirer un dépôt d'un projet n'enlève pas automatiquement le droit GitHub de l'application. Le Pilote peut connecter GitHub avant son premier projet, pendant le sas, depuis un projet, ou seulement lorsque Nora en a besoin.

## 4. Requalification RG-GIT-001..041

Lecture de la **spécification R2 D9 existante**. Les 41 règles restent applicables ; le classement ci-dessous indique seulement si la **formulation/interface** doit être réévaluée. `C = conserver son principe`; `R = requalifier le texte/l'interface` (sans présumer un changement de doctrine).

| Règle | Libellé existant | Analyse ML4/ML5 |
|---|---|---|
| `RG-GIT-001` | Projet autonome sans Git | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-002` | Rattachement au besoin | **R — Différencier ajout d’accès GitHub à un compte et rattachement d’une ressource à un projet ; aucun dépôt automatique.** |
| `RG-GIT-003` | Séparation lecture et emplacement d'écriture | **R — Clarifier source consultée ≠ cible de publication ; aucun mandat automatique.** |
| `RG-GIT-004` | Emplacement décidé ou proposé | **R — Cible proposée par Nora, explicitement confirmée si effet.** |
| `RG-GIT-005` | Aucune arborescence historique imposée | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-006` | Révision et retrait du rattachement | **R — Distinguer détacher la source d’un projet, retirer un dépôt de l’installation et déconnecter l’intégration.** |
| `RG-GIT-007` | Pluralité de dépôts proportionnée | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-008` | Trois identités/capacités distinctes | **R — Distinguer session Studio, installation GitHub App, identité d'opération Git, identité Cursor (ML5).** |
| `RG-GIT-009` | Consultation bornée aux accès réels | **R — Consultation conditionnée par session, autorisation utilisateur et dépôt effectivement accessible via l’installation.** |
| `RG-GIT-010` | Accès progressif sans privilège global | **R — Préciser accès anticipé facultatif et demande contextuelle Nora/projet avec reprise de la tâche.** |
| `RG-GIT-011` | Accès public non autorisant | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-012` | Gestion des accès révoqués | **R — Révocation à trois niveaux : source projet, permission dépôt de l’installation et autorisation de l’app ; dégradation sans fuite.** |
| `RG-GIT-013` | Droit de lecture distinct du droit de mutation | **R — Lecture Studio ≠ écriture Studio ; écriture Studio ≠ droits Cursor.** |
| `RG-GIT-014` | Secrets et confidentialité | **R — Secrets App/jetons limités au serveur ; aucun transfert vers Nora/Cursor.** |
| `RG-GIT-015` | Source Git non autorisante | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-016` | Isolement des consultations interprojets | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-017` | Référence Git identifiée | **R — Provenance d'une source et lien document Studio ↔ version Git.** |
| `RG-GIT-018` | État candidat distinct de la baseline | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-019` | Fraîcheur de la référence | **R — HEAD, droits et révision revalidés au point d'effet.** |
| `RG-GIT-020` | Référence inaccessible ou ambiguë | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-021` | Branches et commits comme informations, non décisions | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-022` | Traces de changement sans duplication | **R — Historique Git et historique document D4 reliés, sans double autorité.** |
| `RG-GIT-023` | Comparaison ciblée de base et changements | **R — Diff documentaire Studio/Git et base distante requalifiés.** |
| `RG-GIT-024` | Disponibilité des artefacts de vérification | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-025` | Écriture sous contrat propriétaire D7 | **R — D7 pilote les opérations Git natives en ML4 via D9 ; Cursor est une autre voie en ML5.** |
| `RG-GIT-026` | Cible d'effet explicitement bornée | **R — Cible, chemins, contenu/diff, ref/base et effet inspectés pour chaque opération.** |
| `RG-GIT-027` | Préconditions actuelles de la bonne identité | **R — Préconditions de l'acteur Git réel, non exclusivement de Cursor.** |
| `RG-GIT-028` | Contrôle de base et concurrence | **R — Conflit de version et comparaison préalable au commit/merge.** |
| `RG-GIT-029` | Permission changeante pendant exécution | **R — Révocations pendant séquences Git ; effets déjà produits non effacés.** |
| `RG-GIT-030` | Absence de merge implicite | **R — GO distinct pour merge et périmètre sensible ; aucune fusion automatique.** |
| `RG-GIT-031` | Mutations effectives distinctes des commandes | **R — Distinguer demande, effet distant, commit, PR et merge, y compris par API.** |
| `RG-GIT-032` | Récupération après conflit ou réponse perdue | **R — Relecture distante après timeout, idempotence sans retry aveugle.** |
| `RG-GIT-033` | Dépôt commun sans projet commun | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-034` | Écritures indépendantes qualifiées | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-035` | Conflits inter-Pilotes non masqués | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-036` | Connaissance partagée sans transfert d'autorité | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-037` | Reprise entre sessions sans fiction | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-038` | Pas d'obligation CKI ou DevOps | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-039` | Kubernetes hors contrat Git générique | C — maintenir, démontrer en ML4 si applicable |
| `RG-GIT-040` | Échec Git proportionné et continuité | **R — Un Pilote peut ignorer/repousser l’intégration ; seules les actions Git dépendantes échouent.** |
| `RG-GIT-041` | Aperçu Git et ouverture de l'original | C — maintenir, démontrer en ML4 si applicable |

**Contrôle :** 41 règles lues, **23 requalifications de formulation ou interface proposées** et **18 principes conservés**. Le classement n'invalide aucune règle validée : tout changement normatif est un addendum à approuver.

## 5. Requalification PF-GIT-01..36

`ML4` = scénario principalement testable avec Git Studio. `ML5` = réservé à Cursor/intervention technique. `MIXTE` = variante ML4 à ajouter et variante Cursor historique à conserver.

| Scénario existant | Sujet | Affectation candidate et traitement |
|---|---|---|
| `PF-GIT-01` | Projet Studio créé sans dépôt | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-02` | Connexion GitHub sans rattachement Git | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-03` | Rattachement d'un dépôt utile en cours de projet | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-04` | Pilote prescrit une organisation et un chemin | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-05` | Consultation de plusieurs dépôts | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-06` | Dépôt privé inaccessible à Nora | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-07` | Dépôt public visible mais non rattaché | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-08` | Lecture autorisée, écriture Cursor impossible | **MIXTE** — Deux variantes : Git Studio refusé en ML4 ; Cursor refusé en ML5. |
| `PF-GIT-09` | Compte Cursor erroné ou session partagée | **ML5** — Contrôle identité/session Cursor réservé à ML5. |
| `PF-GIT-10` | Source Git contient une instruction malveillante | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-11` | Git privé d'un autre Pilote | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-12` | Révocation de lecture pendant une investigation | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-13` | Référence de branche et commit lisibles | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-14` | Branche candidate confondue avec main | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-15` | Base Git changée depuis la préparation | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-16` | Commit déclaré mais introuvable sur ref attendue | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-17` | Exécution technique prépare un push | **MIXTE** — ML4 : déclenchement Git natif D7/D9 ; ML5 : contrat technique Cursor. |
| `PF-GIT-18` | Contrat de mutation changé après inspection | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-19` | Push puis PR sans autorisation de merge | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-20` | Deux clics Exécuter et réponse réseau perdue | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-21` | Commit créé mais publication distante échouée | **MIXTE** — Scénario local commit/push Cursor = ML5 ; ML4 : effet API distant et PR échouée à qualifier. |
| `PF-GIT-22` | Merge annoncé sans vérification de ref | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-23` | Deux Pilotes travaillent sur répertoires disjoints | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-24` | Deux Pilotes modifient le même fichier | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-25` | Décision du projet B publiée dans Git | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-26` | Rattachement de dépôt retiré | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-27` | Changement de permissions pendant une exécution | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-28` | Aucun cycle PR readiness ou DevOps ouvert | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-29` | CKI propose une séquence PR–merge–release obligatoire | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-30` | Projet non logiciel utilise Git seulement pour les documents | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-31` | Demande Kubernetes intégrée dans un travail Git | **ML5** — Kubernetes et réalisation technique hors ML4 ; conserver seulement séparation de droits. |
| `PF-GIT-32` | Relance après incident Git et déconnexion | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-33` | Preuve Git après commit mais tests non observés | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-34` | Fusion de projets Studio souhaitée du fait d'un dépôt commun | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-35` | Nora cite une branche candidate et un fichier GitHub | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |
| `PF-GIT-36` | Référence Git privée devenue inaccessible | **ML4** — décliner avec Git Studio, vérification réelle et droits applicables |

**Contrôle :** 36 scénarios classés : **31 ML4, 3 mixtes, 2 ML5**, sans suppression d'une couverture R2. Les variantes mixtes doivent garder leur identifiant historique ou être complétées par des scénarios nouveaux validés, **pas** être réétiquetées rétroactivement.

## 6. Nouveaux scénarios produit à spécifier (identifiants de travail uniquement)

| ID provisoire | Expérience attendue | Condition d'acceptation discriminante |
|---|---|---|
| N-01 | Nora consulte un Git privé autorisé | Installation/user permissions réelles, dépôt/ref/SHA sourcés ; pas de lecture si révocation |
| N-02 | Document D4 produit, révisé, utilisé comme source | Une révision document durable existe ; aucune écriture Git induite |
| N-03 | Nora propose une destination Git | Source consultée ≠ destination d'écriture ; le Pilote peut choisir/rejeter la cible |
| N-04 | Document D4 → branche candidate + publication | Inspecter contenu/diff, chemin, HEAD, branche avant GO ; commit distant observé sur branche, main inchangée |
| N-05 | Publication → PR | PR réelle avec base/head distincts ; résultat observé et lien ouvert ; pas de merge par défaut |
| N-06 | PR documentaire → merge autorisé séparément | Diff, head SHA et protections revalidés, GO explicite ; statut final vérifié, aucune adoption/promotions induites |
| N-07 | Effet API GitHub et timeout | Vérifier commit/branche/PR à distance avant retry ; absence de doublon |
| N-08 | Git a changé depuis le document/revision local | Divergence clairement exposée, aucun écrasement de source plus récente ; relecture et GO adapté |
| N-09 | PR mêlant documentation et code / chemin protégé | Hors portée ML4 autonome ; STOP ou escalade vers workflow ML5/gate adapté |
| N-10 | Deux Pilotes, même dépôt, différents droits | Pas d'accès transverse à D4/D6 et pas de fusion des projets ; collisions détectées |
| N-11 | Relance de session et statut Git | Révision D4 conservée, lien commit/PR actualisé, provenance maintenue |
| N-12 | Instructions hostiles Git/PR/README | Nora ne prend pas de GO depuis la source ; aucune mutation |
| N-13 | Permission d'installation ou de l'utilisateur révoquée | Refus à la prochaine lecture/écriture ; effet antérieur non effacé ; état courant honnête |
| N-14 | Studio demande Git sur un projet sans dépôt | Travail cognitif continue ; pas de Git requis par défaut |

### Chemin d'acceptation central ML4

1. Partir d'un **document D4 existant** (ML2, version contrôlée).
2. Lire une **source Git pertinente** via droits effectifs (ML4).
3. Faire proposer, par Nora, un amendement au document D4, qui reste un brouillon tant que non confirmé.
4. Faire inspecter au Pilote la cible Git, la base, la version documentaire et le **diff réel**.
5. Après autorisation D6, opérer par **GitHub App** sous la responsabilité de lancement D7 et l'adaptateur D9.
6. Créer/mettre à jour la branche, publier le contenu et vérifier le commit distant ; **ne pas inventer un `git push` si l'API crée directement un commit distant**.
7. Créer la PR sur ordre autorisé ; inspecter CI et règles de dépôt sans confondre résultats techniques, validation métier et statut réel.
8. Demander une autorisation **distincte** pour le merge ; si autorisé et permis par les règles GitHub, vérifier l'intégration distante ; ne pas laisser entendre STABLE/ADOPTED.
9. Retrouver le document Studio, la révision publiée, la branche, le commit et la PR après changement de session.

### Précision sur GitHub API

Les endpoints GitHub REST permettent de créer/mettre à jour un fichier en créant un **commit distant** (`PUT /repos/{owner}/{repo}/contents/{path}`), sans dépôt local ni phase distincte de `git push`. Le produit doit afficher l'effet réel, pas une commande Git simulée. Selon le besoin de lot documentaire multi-fichiers, évaluer l'API Git Trees/Commits/Refs et ses préconditions ; ne pas introduire d'environnement local Git artificiel. Une PR requiert la permission Pull requests write ; le merge exige Contents write, droits d'acteur et respect des règles de dépôt ; la GitHub App n'accorde aucun bypass de principe.

### Complément — parcours d'intégration au niveau Studio (nouveaux candidats)

Les scénarios suivants complètent les 36 scénarios D9 existants sans les renuméroter. Ils doivent être raccordés à D1/D2/D3/D4/D9, au contrat UX et aux preuves de ML4.

| ID provisoire | Expérience | Critère discriminant |
|---|---|---|
| **N-15** | Première connexion, GitHub non installé | Studio utilisable immédiatement ; proposition facultative, aucun consentement Git forcé |
| **N-16** | « Paramètres → Intégrations → GitHub » | Statut précis : absent / autorisation requise / ressources accessibles / indisponible ; actions autorisées et limites lisibles |
| **N-17** | Première installation GitHub App | Choix du compte ou organisation et des dépôts via GitHub, permissions explicites, aucun accès non demandé présumé |
| **N-18** | Retour de GitHub à Studio | Vérifier serveur-side l'installation et l'autorisation, ne pas faire confiance à `installation_id` non authentifié |
| **N-19** | Nora a besoin d'un dépôt absent | CTA contextuel proportionné, consentement chez GitHub puis reprise du contexte sans inventer la lecture |
| **N-20** | Ajout d'un nouveau dépôt trois semaines plus tard | « Gérer les dépôts » relance la configuration GitHub, retour Studio, actualisation vérifiée sans nouvelle création de projet |
| **N-21** | Retrait d'un dépôt de l'installation | Nouvelle lecture/écriture sur ce dépôt refusée ; références historiques D4 conservées avec statut d'accès actuel requalifié |
| **N-22** | Suppression du rattachement d'un dépôt à un projet | Rattachement projet retiré sans désinstaller GitHub App ni supprimer les contenus Git |
| **N-23** | Déconnexion de l'intégration GitHub | Nouveaux appels bloqués ; impact sur projets liés annoncé, session Studio et documents internes conservés |
| **N-24** | Organisation requérant une approbation | Statut « autorisation en attente » sans accès anticipé ; lien vers procédure GitHub et alternative de travail sans Git |
| **N-25** | Deux comptes/organisations ou droits différents | Inventaire par installation/ressource/acteur, sans sur-autorisation ; l'UX ne simplifie pas au prix d'une fausse permission |
| **N-26** | Intégrations autres que GitHub | Information future ou absence d'UI « Connecter » inerte ; aucun fournisseur non implémenté présenté comme fonctionnel |
| **N-27** | Lien original source externe | Ouvre la vraie ressource GitHub seulement si elle est diffusible, avec provenance et limites d'accès ; pas de droit dérivé |

**Priorité de recette :** N-15→N-20, puis N-21/N-23/N-24 ; N-22 et N-25 en couverture complémentaire, tous sous permissions réelles. Ces variantes ne prétendent pas être des `PF-GIT-*` validés.

## 7. Architecture/permissions GitHub — options et recommandation

**État réel observé :** `web/src/lib/auth.ts` Better Auth GitHub OAuth avec scopes repo absents, `githubOAuthStatus().provider=github-oauth-studio-identity-only`. Aucun module `domains/git`, table installation/repos ni routes Git déclarés dans l'arbre Git courant. L'existence réelle d'une installation/app dans GitHub Settings n'est pas vérifiée.

**Option préférée :** conserver l'authentification utilisateur Studio, ajouter une GitHub App dédiée aux dépôts, installée sur un ensemble explicitement choisi de repositories. Nécessite enregistrer `App ID`, installation ID, secrets/clé privée sécurisés, attribution et autorisations par utilisateur et projet, lifecycle de tokens et contrôle des droits. Les noms de paramètres exacts sont à qualifier avec l'implémentation.

**Deux modes d'attribution possibles :**
- **User-to-server** : GitHub App autorisée par le Pilote ; le jeton agit en son nom, avec droits = intersection user + app + installation. **Recommandé comme option de qualification prioritaire** au vu du principe R1 « Git individuel ».
- **Installation-to-server** : effet attribué à l'application installée ; utile pour mécanismes système, mais demande une liaison auditée `Pilote/mandat → opération GitHub App`, et le serveur doit limiter lui-même la portée par projet et identité. Ne pas l'utiliser pour contourner la permission personnelle.

**Permissions de départ à étudier, selon endpoints réellement utilisés :** Metadata read (base) ; Contents read puis write ; Pull requests read puis write ; checks/status read si consultés ; aucune permission Administration write, Workflow write ou org-wide par défaut. Vérifier séparément les restrictions GitHub de base/branch, la possibilité de merge et les politiques d'organisation.

**Configuration UX nécessaire :** connexion Studio ≠ installation GitHub App ; écran d'ajout d'accès optionnel, choix des dépôts, lecture/écriture visibles, acteur de publication, révocation, erreurs et réautorisation progressive. **Installations personnelles ou d'organisation** : les utilisateurs non administrateurs peuvent devoir demander une approbation, sans accès présumé.

**Attention aux redirections GitHub :** GitHub autorise une `Setup URL` après installation et, en option, après modification des dépôts (« Redirect on update »). Cependant **si « Request user authorization (OAuth) during installation » est activé**, la documentation fournisseur indique que la Setup URL ne peut pas être configurée ; le retour s'organise alors via l'URL de callback d'autorisation. **Ne pas concevoir un seul callback fictif pour les deux variantes.** Les valeurs de retour (`installation_id`, `state`, etc.) doivent être vérifiées côté serveur contre l'identité réelle, sans confiance naïve dans l'URL. Ces options sont à valider au cadrage technique, pas à figer ici.

**Cycle d'accès :** installation limitée aux dépôts choisis, modification de la sélection dans la configuration GitHub, actualisation serveur dans Studio, et revalidation des droits avant chaque opération. Pour les requêtes au nom du Pilote, un jeton utilisateur GitHub App respecte l'intersection droits du compte / application / installation. Prévoir expiration, refresh sécurisé et révocation, sans stocker de jetons dans D3, D4 ou les logs.

## 7 bis. UX produit — espace « Intégrations » dès ML4

### 7 bis.1. Positionnement recommandé

Créer un écran **« Paramètres → Intégrations »** dans Studio, conçu pour accueillir à terme plusieurs fournisseurs mais implémentant uniquement GitHub dans ML4. **Ne pas adopter une architecture de marketplace/plugins génériques, de SDK d'extensions ou de connecteurs Figma/Jira/Teams/SharePoint/OneDrive/Gmail dans ce lot.** Les autres fournisseurs sont des exemples de trajectoire, sans fonctionnalités ni permission promises.

**Décision de conception candidate :** présenter un seul état et des actions réelles, pas une liste décorative de boutons inertes. Les futurs connecteurs pourront être mentionnés de façon éditoriale hors d'un catalogue installable, ou rester absents de la version livrée. L'architecture de modules applicatifs validée R4 reste sobre ; une vue commune **n'implique pas** une abstraction fournisseur générale avant besoin réel.

### 7 bis.2. Trois points d'entrée sans friction

| Point d'entrée | Condition | Affordance / sortie |
|---|---|---|
| **Après le premier login** | Pilote authentifié, aucune intégration dépôt | Invitation facultative « Configurer GitHub », avec « Plus tard » ; aucune redirection obligatoire ni écriture |
| **Paramètres → Intégrations → GitHub** | À tout moment | Installer, voir comptes/organisations et dépôts accessibles, « Gérer les dépôts », réautoriser, déconnecter et connaître les effets |
| **Nora / sas / projet** | Une consultation ou une publication exige un dépôt non autorisé | Explication contextualisée, action d'accès seulement pour la ressource utile, retour à l'intention initiale après vérification |

Si la ressource demeure inaccessible, l'investigation doit produire une limite explicite et préserver le travail indépendant. L'affichage de « connecté » est toujours **qualifié** : session GitHub Studio active ≠ installation GitHub App ≠ autorisation d'un repo précis ≠ droit d'écriture.

### 7 bis.3. Modèle mental minimal des contrôles

- **Gérer les comptes/installations :** voir de quelle identité/organisation viennent les accès et si une approbation admin manque.
- **Gérer les dépôts autorisés :** ouvrir la configuration de l'installation GitHub, sélectionner un dépôt ajouté ultérieurement, revenir dans Studio et rafraîchir les permissions effectives.
- **Gérer les sources du projet :** ajouter/retirer les dépôts/références utilisés dans le projet, sans changer silencieusement les permissions GitHub.
- **Déconnecter GitHub :** retirer l'usage de la connexion Studio ↔ GitHub App selon le pouvoir de l'utilisateur ; signaler les conséquences sur les futures lectures/écritures, sans supprimer arbitrairement l'installation de l'organisation ni l'historique D4.
- **Autoriser une écriture :** inspection contenu/diff/cible/base puis acte D6 ; aucun bouton de paramétrage d'intégration ne constitue un mandat de commit/PR/merge.

### 7 bis.4. États et erreurs d'UX à tester

`NON CONNECTÉ`, `INSTALLATION À CONFIGURER`, `AUTORISATION UTILISATEUR MANQUANTE`, `APPROBATION ORGANISATION EN ATTENTE`, `CONNECTÉ — DÉPÔTS DÉLIMITÉS`, `DÉPÔT NON AUTORISÉ`, `ACCÈS RÉVOQUÉ`, `EXPIRÉ / À RENOUVELER`, `DROITS LECTURE SEULE`, `ERREUR TRANSITOIRE`, `DÉCONNECTÉ`. Les libellés sont indicatifs : les statuts finaux appartiendront au contrat UX/technique, sans inventer une permission sous prétexte de simplifier la présentation.

### 7 bis.5. Protection UX et confidentialité

Éviter les listes de dépôts jamais autorisés, les noms de dépôts privés non visibles, les secrets et la divulgation de jetons. La demande d'extension d'accès doit rendre visible le motif et le niveau de permission ; seul GitHub attribue les droits effectifs. Le produit ne doit pas réclamer l'accès à **tous** les dépôts par défaut. Le retrait d'accès doit provoquer une dégradation fiable et compréhensible dans Nora et les pages projet.

## 8. Contrats à définir avant code, sans surconstruction

### Références minimales

- **ConnectedService / ServiceAuthorization** (noms logiques candidats, pas deux tables imposées) : fournisseur GitHub, Pilote, autorisation utilisateur, installation(s) pertinentes, statut, permissions observées et date de contrôle ; **aucun état d'accès « définitif »**.
- **RepositoryAccessScope** (nom logique candidat) : ressources effectivement ouvertes à l'installation et au Pilote, sans les confondre avec les liens de projet ni stocker un inventaire de dépôts privés inaccessible.
- **GitResourceRef** (nom logique candidat) : provider, installation autorisée/acteur, repo, path/objet, ref/commit, version/horodatage observé, URL originale, limites d'accès.
- **DocumentPublicationLink** (nom logique candidat) : document D4 ID + revision ID + content digest, destination repo/path, branche/commit, PR/merge refs et état observé. **Pas de synchronisation bidirectionnelle autonome**.
- **GitOperation** (nom logique candidat, sous propriété de D7 pour ses transitions) : type d'effet, cibles et ref/base inspectées, version d'autorisation D6, identité effective, key idempotente, état réellement observé, réponse GitHub. Ne pas constituer un second moteur `D9-Execution`.
- **ObservedGitResult** : fait observé Git, source/date/version/limites ; consommation D8 distincte de la réception métier.

Noms **conceptuels non VALIDATED** ; conformer le nommage à `governance/product-naming-conventions.md`.

### Points de conception à arbitrer

1. **Nature des écritures ML4** : recommander documents et artefacts éditoriaux Studio/Nora, avec exclusions code/exécutables/secrets/configuration, et chemins normatifs sous validation renforcée. Git comme outil n'exige pas de permettre toute mutation matérielle de code.
2. **Merge** : recommander l'opération disponible dans ML4 **sur PR documentaire éligible**, GO distinct, contrôle du contenu réel + politiques GitHub ; PR technique ou mixte traitée dans parcours ML5.
3. **Identité d'effet** : user-to-server en priorité, fallback installation seulement sur justification traçable.
4. **Mode de publication** : privilégier opérations directes API sur GitHub ; limiter le besoin de « push Git » local réel à des cas démontrés.
5. **Couplage document Studio/Git** : liaison/version/conflit explicite ; pas d'auto-sync permanent ni de source de vérité concurrente.
6. **Projet/dépôt** : association facultative ; création de repository non implicite, candidat hors premier parcours tant que non nécessaire.
7. **Multiples fichiers** : autoriser une transaction Git cohérente lorsque nécessaire et techniquement prouvée ; éviter publication partielle masquée ; ne pas promettre atomicité inter-systèmes GitHub/PostgreSQL.
8. **Parcours Intégrations** : proposer après login sans forcer, gestion centralisée et entrée contextuelle ; statut serveur prouvé, pas de simplification trompeuse.
9. **Installation vs autorisation utilisateur** : considérer plusieurs comptes/organisations, approbation admin et callback/Setup URL réellement compatibles ; aucune autorisation repo déduite du seul login Better Auth.
10. **Déconnexion vs détachement** : le retrait d'une source projet est distinct de la modification d'une installation GitHub et de la révocation d'une autorisation utilisateur.
11. **Ouverture future** : définir la navigation et la séparation des responsabilités, mais ne concevoir d'interface pluggable générique qu'à l'arrivée d'un second fournisseur justifiant sa valeur.

## 9. Évaluation du blast radius

| Couche | Impacts réels probables | Contrôle requis |
|---|---|---|
| Auth/D1 | Comptes OAuth, GitHub App installation, user token, révocation et point d'entrée Paramètres → Intégrations | Ne pas mélanger session et droits dépôt ; tests 401/403, ajout d'accès ultérieur et déconnexion |
| Projet/D2 | Association facultative repos/branches | Zéro Git à la création ; isolation Pilote/projet |
| Nora/D3 | Tools Git lecture/recherche, sélection de contexte et anti-prompt-injection | Scope fixé côté serveur ; budgets ; citations et incertitudes ; LIVE Nora |
| Docs/D4 | Révision source, publication, liens et conflits | Révision identifiée/digest ; pas d'écrasement ou double source |
| Gouvernance/D6 | Action Git autorisée, portée/versions/capacités, merge séparé | Revalidation au point d'effet, suspension/retrait |
| Effets/D7 | Tranche réelle opérations Git déclenchées, statut/ambiguïté | Une frontière commune réutilisable ML5, no second runner |
| Preuves/D8 | Confirmation distante des commits/PR/merge, limite des checks | Observé ≠ conforme ≠ accepté |
| Git/D9 | Connecteur App, REST, ref/branch/PR, conflit, permissions | Tests fournisseurs réels, 409, erreurs, rate-limit, API version |
| UX/Figma | Navigation Paramètres → Intégrations, premier login facultatif, ajout de dépôt à la carte, consentement/retour, rattachement projet et publication diff/PR | R3 nodes 171–205 et vues 09/12 ; compléter les nouveaux parcours, Figma natif à auditer et versions/captures à figer |
| DB/infra | Lien document ↔ ressource/version Git, audit minimal, secrets | Migrations additives ; aucune persistance secrète en clair |
| Tests | Unit/PG/intégration/navigateur/LIVE/REAL, multi-Pilotes | Recette Git sur dépôts/lane bornés ; absence de bypass |
| Sécurité | Prompt injection, exfiltration repo privé, code/hors périmètre, merge malicieux | Allowlists, diff, droits, protections GitHub, relecture fournisseur |

## 10. Plan de synchronisation documentaire à réaliser sous mandat D2

**Un seul paquet cohérent** avec revue et publication gouvernée ; **ne pas transformer chaque fichier en un micro-lot**. Préserver les historiques de décisions, appliquer des addenda identifiés.

| Source canonique | Type d'évolution | Gate |
|---|---|---|
| `governance/decisions/` (nouveau decision record daté) | Arbitrage officiel ML4 Git lecture/écriture, ML5 Cursor, changement de séquencement et disposition R1/R2/R4 | **D2 Morris contenu + GO Git distinct** |
| `governance/roadmap.md` | ML4 nouveau résultat/IN-OUT/dépendances/gates, ML5 exécution Cursor, conserver statuts non commencés | **D2** |
| `cadrage/vision-produit.md` (§§2.23,2.28,2.36) | Addendum à la vision : écritures Git natives gouvernées via D7/D9 ; E2E07 à reformuler en tranche ML4 + suite ML5 | **D2** |
| `conception-fonctionnelle/integration-git-gouvernee.md` + `acces-et-portefeuille.md` | RG/PF requalifiés + installation/autorisation GitHub, gestion à la carte, déconnexion/rattachement, variantes publication documentaire, remote commit, merge, sécurité | **D2 / nouvelle VALIDATED SPEC** |
| `conception-fonctionnelle/realisation-operationnelle-gouvernee.md` | Première mise en oeuvre D7 bornée aux effets Git, extension Cursor en ML5 sans moteur parallèle | **D2 si contrat modifié** |
| `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` | Autorisations différenciées write, PR, merge, portée, chemins, changements de version ; réutiliser ML3 D6 | **D2 si norme modifiée** |
| `conception-fonctionnelle/resultats-et-preuves.md` | Limites de preuve Git et événements de réception ; pas de conformité/adoption inférée | **D2 si norme modifiée** |
| `conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md` + `connaissance-sujets-et-continuite-du-projet.md` | Lecture Git réelle pour Nora, production/révision D4 et lien version publié ; ne pas refaire ML2 | **D2 si norme modifiée** |
| `architecture-technique/cadrage-r4.md` + décision ADR R4 | Actualiser le **séquencement**, conserver les ADR de responsabilité ; mentionner GitHub App/effet direct sans remplacer historique | **D2** |
| `ux-ui/audit-couverture-ux-r3.md`, `espace-projet-interaction-pilote-nora.md`, `contrat-transposition-figma-code.md`, Figma | Réutiliser écrans Git 171–205 ; concevoir Paramètres → Intégrations, première connexion facultative, ajout/retrait de dépôts et reprise contextuelle, puis inspection document→diff→PR→merge | Revue visuelle Morris, extraction/capture native ciblée et contrat visuel versionné avant code |
| `construction/reference-delivery-r5.md` | Répartir ML4/ML5, liens R1–R4, proof plan et gates | Intégré au paquet documentaire |
| `construction/<nom par responsabilité>/specification-technique.md` + matrice de traçabilité ML4 | Contrat macro-lot Git + Intégrations, parcours, identité/permissions, documentation, architecture, QA, Figma, scénarios et preuves ; réutiliser modèle R5 existant | Validation Morris avant prompt Cursor |
| `governance/SEF.md`, `product-naming-conventions.md`, archives décisionnelles | **Aucune modification recommandée par défaut** ; ne changer que si contradiction réelle est démontrée | D2 si nécessaire |

## 10 bis. Phase Figma dédiée — préparation sans modification de la source native

**Objectif :** transposer les besoins en un parcours visuel continu, pas multiplier des écrans isolés. L'audit R3 §14 documente déjà 35 écrans Git 171–205, les vues 09/12 et des variantes. **Leur état natif actuel n'a pas été relu dans cet exercice** : aucune création/édition Figma n'est revendiquée.

### Séquence recommandée

1. **Audit ciblé de la Figma Next actuelle** : vérifier la version, les frames et composants de navigation/portfolio/sas/projet, les écrans Git 171–205, les interactions, la page Paramètres si elle existe, et les surfaces d'autorité/inspection de ML3. Ne pas inventer une page déjà dessinée.
2. **Contrat de navigation** : depuis le premier login (invitation facultative), depuis Paramètres → Intégrations et depuis Nora/projet ; préserver le fil et la reprise contextuelle après sortie vers GitHub.
3. **Parcours d'autorisation** : installation GitHub App pour un compte/organisation, choix initial des dépôts, autorisation au nom du Pilote si retenue, approbation en attente, retour GitHub→Studio et rafraîchissement des permissions.
4. **Administration à la carte** : ajouter dépôt, retirer dépôt, distinguer rattachement projet et accès global, gérer expiration/refus/révocation/déconnexion et le texte d'explication.
5. **Publication gouvernée** : document D4 → cible Git/ref/base → diff → GO du Pilote → commit/PR → merge séparé éventuel → références observées / échec / reprise ; réutiliser les patrons d'inspection existants.
6. **Contrat visuel et test UX** : navigation réelle dans Figma, versions/snapshots, interactions, mobile 390/320, desktop, focus clavier, erreurs longueurs et états asynchrones ; revue Morris et ajustements avant code.

**Cible UX candidate :** une page « Intégrations » capable d'afficher plusieurs fournisseurs, mais **seul GitHub est réellement activable**. Éviter toute liste de connecteurs fictifs installables.

**Gate :** la proposition ne vaut pas autorisation de modifier Figma. Lorsque la phase sera ouverte, lecture native ciblée, contrat source (fileKey/node-id/version/capture) et validation Morris du parcours précéderont l'implémentation. Ce travail est **intégré à ML4**, pas un macro-lot documentaire concurrent.

## 11. Recette et critères de sortie candidats ML4

### Périmètre minimal démontrable sans artificialité

- **REAL GitHub** : GitHub App sélectionnée, dépôt privé de test autorisé, lecture, accès révoqué/refus et identité d'opération effective ; démonstration de l'ajout d'un nouveau dépôt **après** la connexion initiale et des limitations d'approbation organisationnelle si applicables.
- **LIVE Nora + D4** : investigation multi-sources sourcée, document interne existant/révisé, proposition pertinente sans décision inventée.
- **REAL publication** : branche candidate, diff inspecté, GO D6, commit distant, PR, vérification de SHA et base ; reprise après session.
- **REAL merge distinct**, sur PR documentaire de test et cible autorisées, avec protections effectives ; non-merge sur erreur/refus.
- **Qualité** : tests négatifs timeout, double effet, 403, base périmée, source hostile, deux Pilotes/projets même repo, responsabilité et absence de fuite.
- **Browser/UX** : premier login sans autorisation forcée ; page Intégrations ; installation/gestion/révocation ; entrée contextuelle Nora/projet et retour ; action documentaire Git complète sur parcours R3, focus/clavier/reflow et preuves visibles.

**Niveaux à déclarer séparément :** DOCUMENTED / VALIDATED SPEC / IMPLEMENTED / COVERAGE VERIFIED / BEHAVIOR PROVEN / ADOPTED. Ni tests déterministes, ni commit distant, ni PR mergée ne valent automatiquement satisfaction des autres niveaux ou adoption globale.

### Conditions de STOP

- GO d'arbitrage normatif absent.
- GitHub App et droits fournisseur non réellement prouvés.
- Mécanisme d'autorité Git concurrent de D6 ou second moteur concurrent de D7.
- Permission, identité, cible, ref/base, contenu diff, propriété de la source ou révocation ambiguës.
- Accès privé/transverse non isolé, fuite de secret, source externe utilisée comme instruction.
- Publication technique/code ou documents normatifs sans mandat adapté.
- Contradiction code/doc ou Figma/contrat, preuve REAL ou recette insuffisante.

## 12. Arbitrages Morris proposés (non encore décidés normativement)

| Question | Proposition ChatGPT | Effet de la décision |
|---|---|---|
| A1 — Exécuteur des écritures Git ML4 | Studio directement via GitHub App, **sous D6 + D7 minimal + D9**, sans Cursor | Addendum R1/R2/R4/R5 D2 |
| A2 — Classe d'effets Git ML4 | Workflow documentaire et artefacts éditoriaux Studio/Nora ; code/migrations/CI/secrets via ML5 | Frontière de sécurité et critères QA |
| A3 — Merge en ML4 | Oui pour PR documentaire éligible ; GO distinct + contrôles protection/HEAD, aucun merge automatique | Contrat d'autorisation et UX |
| A4 — Attribution GitHub | GitHub App user-to-server à étudier en priorité, installation bot seulement si nécessaire | Identités, tokens, preuves, audit |
| A5 — Lien D4/Git | Publication explicite avec version liée, **pas** d'autosynchronisation bidirectionnelle | Données/UX/conflits |
| A6 — Git CRUD large | Lecture/navigation/branche/commit/PR/merge ciblés ; création de repository, suppression de branche, force push et workflow modifications hors premier contrat | Réduction de risque et cohérence |
| A7 — Espace Intégrations | Nouvelle page « Paramètres → Intégrations » dès ML4 ; GitHub seul activable, architecture/UX ouverte à d'autres fournisseurs sans marketplace ni SDK | Ajout au périmètre ML4 et phase Figma ciblée |
| A8 — Moment du consentement | Non obligatoire au premier login ; activation volontaire en réglages **et** déclenchement contextuel depuis Nora/projet | Conserve le caractère facultatif de Git |
| A9 — Étendue des accès | Dépôts sélectionnés par défaut ; ajout/retrait ultérieur via GitHub ; distinguer permission d'installation, autorisation utilisateur et rattachement au projet | D1/D2/D9 + UX + sécurité |
| A10 — Mode de retour GitHub | Concevoir après qualification du mode réel Setup URL vs callback d'autorisation, jamais promettre les deux simultanément | Spécification technique/faisabilité, non décision d'UX prématurée |

**Interprétation de la conversation :** « Git lecture+écriture native dans ML4 ; Cursor dans ML5 » et **la création d'une expérience « Intégrations » dès ML4, avec GitHub seul activable**, ont été explicitement approuvés comme direction produit. Le caractère facultatif du consentement à la première connexion et l'accès à la carte sont les recommandations UX discutées favorablement. Les détails A2–A6, A9 (défaut précis), A10 et les modalités d'autorisation/merge restent des **propositions à arbitrer** avant changement normatif.

## 13. Suite opérationnelle et gates

1. Revue de cette analyse D0 actualisée et arbitrages A1–A10 **par Morris**, notamment la restriction des effets documentaires, les merges, l'attribution GitHub et le consentement progressif.
2. Rédaction dans un **même paquet** des addenda D2 / Roadmap / R1–R4 et du contrat ML4 R5, avec matrice de traçabilité, droits, QA et périmètre ML5.
3. **Phase Figma intégrée à ML4** : audit natif de la navigation existante et écrans D9 171–205, nouvelles surfaces Intégrations/onboarding/gestion à la carte, parcours publication, validation Morris, version/capture de référence avant code.
4. **Qualification candidate actuelle** : publier **ce document d'analyse non normatif seulement** sur une branche documentaire dédiée après mandat D1 borné (voir proposition ci-dessous). Cette publication ne valide pas les arbitrages et ne modifie aucune source R1–R5.
5. Après relecture de l'analyse par Morris et arbitrages D2, produire le **paquet cohérent R1–R5 + spécification technique ML4**, sur mandat Git séparé et sous gates de contenu adaptés ; Figma constitue une étape fonctionnelle/visuelle de ce même lot.
6. Après relecture distante des documents de référence, arbitrage/validation Figma et **GO de construction distinct**, préparation éventuelle du prompt Cursor à partir des sources SFIA v2.6 **actuelles** et du template de Git ; pas maintenant.

### Proposition de mandat Git pour la seule qualification (non encore exécutable)

- **Branche candidate à autoriser :** `docs/next-ml4-git-qualification-20261107`, créée depuis `main@84bf3496a459bae9c3f9e0ac7acce4b57a595bc5` sous réserve de revalidation de `main` au moment de la mutation.
- **Chemin unique proposé :** `projects/sfia-studio-next/construction/integration-git/qualification-impact-ml4-ml5.md` (répertoire nommé par responsabilité produit).
- **Actions proposées :** création d'une branche documentaire et commit distant unique de ce **rapport D0 candidat** ; relecture Git distante et SHA restitué.
- **Hors mandat :** écriture de la Roadmap/SEF/R1–R5, modification d'ADR, code, migration, Figma, création PR/merge, changement de statut, adoption ou démarrage Cursor.

Le mandat doit être **accepté explicitement par Morris pour cette branche, ce chemin et ces actions** avant publication. La demande générale d'intégrer la qualification sur Git exprime l'intention, mais elle ne fixe pas ces bornes d'exécution.

## 14. Sources Git examinées

**Git principale :**
https://github.com/mcleland147/sfia-workspace/commit/84bf3496a459bae9c3f9e0ac7acce4b57a595bc5

- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/governance/SEF.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/governance/roadmap.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/cadrage/vision-produit.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/conception-fonctionnelle/integration-git-gouvernee.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/conception-fonctionnelle/realisation-operationnelle-gouvernee.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/conception-fonctionnelle/resultats-et-preuves.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/architecture-technique/cadrage-r4.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/governance/decisions/2026-11-04-r4-architecture-exit.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/ux-ui/audit-couverture-ux-r3.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/construction/reference-delivery-r5.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/web/src/lib/auth.ts
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/web/src/domains/document/service.ts
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/web/src/db/schema.ts
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md
- https://github.com/mcleland147/sfia-workspace/blob/main/projects/sfia-studio-next/governance/product-naming-conventions.md

**Documentation fournisseur consultée le 2026-11-07 :**
- https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps
- https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user
- https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-an-installation-access-token-for-a-github-app
- https://docs.github.com/en/rest/repos/contents
- https://docs.github.com/en/rest/pulls/pulls
- https://docs.github.com/en/apps/using-github-apps/installing-a-github-app-from-a-third-party
- https://docs.github.com/en/apps/using-github-apps/reviewing-and-modifying-installed-github-apps
- https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/about-the-setup-url
- https://docs.github.com/en/apps/creating-github-apps/registering-a-github-app/registering-a-github-app
- https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/generating-a-user-access-token-for-a-github-app

**Réserves de lecture :** les couches réellement déployées en DEV/RECETTE, secrets, installations d'apps privées, sessions du Pilote, Git local et état natif courant des frames Figma ne sont pas prouvés par cette lecture de dépôt. Les descriptions fonctionnelles et la couverture Figma sont issues des sources Git, non d'une validation directe des pixels ou d'une exécution navigateur. Les capacités fournisseur GitHub sont des possibilités documentées, **pas la preuve qu'une GitHub App Studio est déjà enregistrée/configurée**.

---
**Fin de la qualification v0.2, corrigée sur la branche documentaire candidate ; aucune modification du runtime ni de Figma.**

---

## 15. Addendum de fin de qualification — Figma ML4 validé (2026-11-07)

La qualification v0.2 est **acceptée en revue par Morris** et les arbitrages du lot demeurent les mêmes. Les paragraphes historiques décrivant Figma comme « à faire » ont été **dépassés par la construction et la validation des écrans 218–235 avec INDEX 388:425** ; voir [registre UX](../../ux-ui/integration-git-ux-ml4.md). Les analyses de 41 RG / 36 PF / 27 N, les frontières et réserves demeurent pertinentes. **Séquence confirmée :** paquet ML4 R1–R5 intégré → convergence UX du runtime ML1–ML3 sous mandat distinct → réalisation technique Git ML4. Aucun effet Git, test navigateur, STABLE ou ADOPTED n'est prouvé par ce dossier.
