# SFIA Studio Next — Journal de campagne de recette utilisateur ML4C

**Campagne :** `ML4C-UAT-2026-11-12`\
**Version du registre :** `v0.2 — 2026-11-12`\
**Statut :** `D1 — registre factuel évolutif, non normatif ; publié sur branche documentaire candidate, non fusionné`\
**Autorité :** Morris (Pilote, verdict d’acceptation et gates) ; ChatGPT (qualification, suivi, analyse).\
**Périmètre :** 53 cas S01–S07 de la convergence fonctionnelle intégrée ML4C.\

> Ce registre est le journal d’exécution de la campagne, **pas** le cahier de recette validé. Il s’inspire du registre historique ML4 `construction/ml4-integration-git/recette-ml4-r01-r14-anomalies.md` (constats, preuves, anomalies et verdicts bornés). La tenue de ce registre ne vaut ni validation normative, ni autorisation d'effet produit, ni acceptation ML4C.

## 1. Référentiel, candidat et limites de preuve

| Champ | Référence / vérité disponible |
|---|---|
| Dépôt | `mcleland147/sfia-workspace` |
| Produit | SFIA Studio Next — R5/ML4C |
| PR produit | [#676](https://github.com/mcleland147/sfia-workspace/pull/676) — OPEN, non mergée au contrôle Git du 12/11 |
| Candidat Git | `2416e2ee25662821b015407346c64ec204f67488` |
| Tree candidat | `88c05766afa04355f5fbb63dcda603686a3f11a6` |
| Build attendu selon manifeste RECETTE | `qB8JvXfdL7FMOFYMf31kL` — non relu directement dans le processus servi pendant S01-01 |
| Environnement | `RECETTE` — `http://127.0.0.1:3200` |
| Base RECETTE de référence | `sfia_next_recette_ml4`, port `5434` — référence technique antérieure, non inspectée pendant le test |
| Cahier de recette | `construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md`, branche documentaire `docs/next-r5-ml4c-cp2-preparation-20261111` @ `493fead2295e7d0deaf660f24e4bba31289b6067` |
| Source historique de suivi | `construction/ml4-integration-git/recette-ml4-r01-r14-anomalies.md` sur `main` |
| Vérité Git locale / sessions / logs | **NON OBSERVÉS** indépendamment au cours de S01-01 |
| Publication Git du registre initial (historique) | **D1 — branche documentaire** `docs/next-r5-ml4c-cp2-preparation-20261111` ; fichier vivant, ensuite intégré sur `main` par la PR #677 |

**Reprise CURRENT — retest utilisateur du 12/11/2026 :** candidat RECETTE figé selon le handoff Cursor [Git](https://github.com/mcleland147/sfia-workspace/blob/sfia/review-handoff/sfia-review-handoff/latest-chatgpt-review.md) : `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`, tree `64167c6fc4c98da3c3d4168518911636961bc5c6`, BUILD_ID `wYKCZCblBxWLiVsNjIr3e`, [CI Next SUCCESS](https://github.com/mcleland147/sfia-workspace/actions/runs/43278752662), PR #676 **OPEN / NON MERGÉE**. Le runtime servi/BUILD_ID ont été contrôlés par Cursor lors du freeze ; les captures UAT suivantes prouvent l'interface et les effets visibles, **pas** une inspection indépendante du BUILD_ID ni des transactions PostgreSQL. Base historique `sfia_next_recette_ml4:5434` et sas FAIL `prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b` annoncés conservés. Nouvelle préparation distincte : `prep_51effa9f-edc5-47fa-81c1-c18838de362a`. Journal D1 de reprise sur branche `docs/next-ml4c-uat-journal-20261112`, sans changement du cahier validé.

**Gouvernance des preuves :** retour utilisateur et captures navigateur ≠ preuve de callback serveur ≠ état du serveur/DB ≠ preuve Git distant. Le PASS ci-dessous concerne le parcours navigateur réellement réalisé ; il ne clôt ni la politique de session ni la sécurité inter-identités. Tout changement de SHA/build requiert une requalification des preuves affectées. Aucune LIVE/REAL supplémentaire n’est inférée.

## 2. Tableau de bord de campagne

| Famille | Cas | PASS | FAIL | BLOCKED | NOT RUN | Réserves ouvertes |
|---|---:|---:|---:|---:|---:|---:|
| S01 | 6 | 4 | 0 | 0 | 2 | 5 |
| S02 | 6 | 1 | 0 | 0 | 5 | 1 |
| S03 | 7 | 0 | 0 | 0 | 7 | 0 |
| S04 | 8 | 0 | 0 | 0 | 8 | 0 |
| S05 | 8 | 0 | 0 | 0 | 8 | 0 |
| S06 | 11 | 0 | 0 | 0 | 11 | 0 |
| S07 | 7 | 0 | 0 | 0 | 7 | 0 |
| **TOTAL** | **53** | **5** | **0** | **0** | **48** | **6** |

**Verdict global : `INCOMPLETE — RECETTE IN PROGRESS`**. Aucune réception ML4C prononcée. L’état particulier `PASS WITH RESERVES` n’est pas un statut contractuel de cas : le cas reçoit `PASS` et ses réserves sont conservées séparément. Seuls les verdicts `PASS / FAIL / BLOCKED / NOT RUN` sont comptés.

## 3. Journal d’exécution — S01-01

### Fiche de test `S01-01` — 12 novembre 2026

| Champ | Contenu |
|---|---|
| Objectif | Ouvrir Studio RECETTE et établir une véritable session GitHub OAuth. |
| Attendu | Authentification effective, identité du Pilote correcte, absence de contournement de session. |
| Navigateur | Safari/macOS, session courante puis fenêtre de navigation privée. |
| Phase 1 — session existante | Accès direct au portefeuille ; identité affichée `mcleland147 · github-oauth` ; clic « Continuer avec GitHub » sans nouvelle saisie d’identifiants. |
| Phase 2 — session privée | Morris rapporte : arrivée sur page de connexion Studio, redirection GitHub, formulaire de credentials GitHub, authentification réussie, retour au portefeuille. |
| État après connexion | Capture : portefeuille personnel, projet `CampusFlow`, 2 préparations ouvertes (`prep_cd1`, `prep_faf`). |
| Preuves | `S01-01-E01` : portefeuille avec session préexistante. `S01-01-E02` : portefeuille après OAuth privé. Le parcours intermédiaire GitHub est attesté par le récit Morris, sans capture des écrans de credentials. |
| Verdict | **PASS — parcours utilisateur observé par Morris** ; build effectivement servi à requalifier au bilan de preuve. |
| Réserves | `ML4C-A-001` absence de contrôle déconnexion ; `ML4C-A-002` politique d’expiration/renouvellement non qualifiée. |
| Observation non-anomalie | `ML4C-O-001` : retour direct au portefeuille avec session existante, comportement compatible avec la réutilisation normale de session. |

**Conclusion bornée :** le chemin neuf Studio → GitHub → Studio est utilisable dans Safari privé selon les gestes et le résultat confirmés par Morris. Aucune preuve ici d’une expiration à durée fixe, d’une révocation serveur, d’une isolation de deux comptes ou de la politique exacte de cookies.

### Fiche de suivi `S01-02` — observation intermédiaire du 12 novembre 2026

| Champ | Contenu |
|---|---|
| Action Morris | Actualisation du portefeuille avec `Cmd + R` après authentification GitHub OAuth. |
| Observation | Morris confirme que l’affichage demeure identique à la capture initiale : un projet `CampusFlow`, deux préparations ouvertes (`prep_cd1`, `prep_faf`), sans erreur ni variation inattendue rapportée. |
| Résultat borné | **PASS du contrôle visuel de stabilité après rafraîchissement** ; liste et compteurs préservés du point de vue utilisateur. |
| Preuve | `S01-02-U01` — confirmation explicite Morris « yep good après refresh » ; référence visuelle antérieure `S01-01-E01/E02`. |
| Limite | Pas de lecture indépendante des propriétaires métier, de la DB, des API ou d’une seconde identité ; fidélité transactionnelle des états et isolation d’autorisation non démontrées. |
| Verdict du scénario | **NOT RUN (verdict final non attribué)** tant que les autres contrôles d’autorité et de vérité métier nécessaires ne sont pas rapprochés. Aucune anomalie nouvelle enregistrée. |
| Suite | Ouvrir `CampusFlow` et vérifier sa continuité en `S01-03`, puis le sas en `S01-04` ; réévaluer `S01-02` selon les preuves disponibles. |

### Fiche de test `S01-03` — clôture utilisateur du 12 novembre 2026

| Champ | Contenu |
|---|---|
| Action Morris | Depuis le portefeuille, ouvrir `CampusFlow`, changer de vue puis revenir à `Travail`. |
| Attendu | Même projet et même contexte retrouvés, historique Nora conservé après navigation et rafraîchissement. |
| Observé | Ouverture correcte du projet `CampusFlow` ; retour sur `Travail` sans problème rapporté ; historique conversationnel et contexte du projet visibles. Morris signale une navigation fluide, sans problème de performance ressenti. |
| Preuve | `S01-03-E01` — capture de l’espace `Travail avec Nora` : projet `proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d`, même fil visible, message initial du Pilote et réponse Nora. `S01-03-U01` — confirmation Morris du changement de vue et du retour au contexte. |
| Contrôle réalisé | **PASS observé** sur ouverture, changement de vue, retour et restitution visuelle du fil. |
| Actualisation après retour sur `Travail` | Morris confirme explicitement « oui. toujours présent » à la demande de `Cmd + R` dans la vue projet : historique et contexte encore visibles après rafraîchissement. |
| Limites | Vérification navigateur et utilisateur uniquement : pas de lecture indépendante de l’état DB/conversation ; build effectivement servi à rapprocher du manifeste. |
| Verdict du scénario | **PASS — parcours utilisateur** : ouverture, changement de vue, retour, persistance après rafraîchissement ; réserve UX `ML4C-A-003` maintenue ouverte. |
| Réserve UX connexe | `ML4C-A-003` : compositeur `Écrire à Nora` partiellement hors de la fenêtre visible, obligeant le Pilote à défiler pour accéder à la saisie et à l’envoi. |
| Suite | Poursuivre `S01-04` — reprise d'une préparation ouverte ; reporter la réserve visuelle au macro-lot ML4D sous contrôle de l’impact fonctionnel. |

### Fiche de test `S01-04` — 12 novembre 2026

| Champ | Contenu |
|---|---|
| Action Pilote | Depuis le portefeuille, cliquer `Reprendre` sur la préparation affichée `prep_cd1`, sans constituer de proposition ni créer de projet. |
| Attendu | La préparation ouverte est retrouvée, son contexte est conservé, et un projet non créé n’est pas annoncé comme créé. |
| Observé | L'écran indique `Préparation retrouvée`, `Espace de préparation — Projet non créé` et `Non créé` dans l'aperçu. Le fil du Pilote sur CampusFlow est présent. `Aucune proposition enregistrée` est affiché ; `Constituer une proposition` est proposé et `Créer le projet` apparaît désactivé. |
| Identité visible | Préparation `prep_cd102aa2-bcca-4f91-9c5d-29abf7a27a1a` (identifiant lu sur capture). Ce sas reste distinct de l'espace du projet CampusFlow déjà accessible au portefeuille ; la coïncidence du nom dans l'intention ne prouve pas de lien transactionnel. |
| Preuve | `S01-04-E01` — capture navigateur Morris sur la vue de reprise ; aucune nouvelle mutation volontaire pendant le scénario. |
| Verdict | **PASS — parcours utilisateur / état présenté** : reprise et conservation du fil observées, aucune création implicitement présentée. |
| Limite | Pas de preuve transactionnelle indépendante de l'absence de création ou de l'identité du build réellement servi. |
| Observations connexes | `ML4C-O-002` : message antérieur `NORA · FAILED` avec `SFIA_COG_PROFILE_TYPE requis hors DEV`, conservé dans l'historique ; **aucune nouvelle tentative Nora ni panne actuelle démontrée**. La saisie Nora est également partiellement visible en bas de l’écran, deuxième occurrence de `ML4C-A-003`. |
| Suite | `S01-05` — vérifier les messages d'accès/refus/erreur par des manipulations sûres, sans forcer une expiration ni perturber le runtime. |

### Fiche de suivi `S01-05` — contrôle d'accès sans session du 12 novembre 2026

| Champ | Contenu |
|---|---|
| Action Pilote | Accéder directement à `http://127.0.0.1:3200/portfolio` en navigateur normal avec session existante puis en fenêtre privée sans session Studio. |
| Attendu | Portefeuille accessible uniquement avec une session valable ; utilisateur non authentifié redirigé vers `Connexion Studio` sans exposition des projets. |
| Observé avec session | Navigateur habituel : accès direct au portefeuille, cohérent avec la session Studio préexistante. |
| Observé sans session | Fenêtre privée : écran `Connexion Studio` avec bouton GitHub OAuth et boutons `Pilote A (DEV)` / `Pilote B (DEV)` ; aucun contenu du portefeuille personnel n'est visible. |
| Preuves | `S01-05-E01` : capture de l'écran de connexion depuis la fenêtre privée ; `S01-05-U01` : récit Morris comparant les deux contextes ; `S01-05-U02` : confirmation d'un renvoi à la connexion depuis l'URL directe de CampusFlow en navigation privée. |
| Résultat borné | **PASS visuel du contrôle d'accès sans session** sur les liens directs `/portfolio` et `/projects/[projectId]`, et du maintien d'une session existante ; aucune fuite du portefeuille ni du projet n'est observée sur les parcours essayés. |
| Contrôle complémentaire | Morris confirme que l'ouverture de l'URL directe du projet CampusFlow dans une fenêtre privée non authentifiée renvoie également à `Connexion Studio`, sans afficher l'historique ou les ressources du projet. L'URL exacte n'est pas copiée dans le rapport ; la conclusion porte sur le parcours déclaré. |
| Verdict scénario | **NOT RUN — partiellement couvert** au sens du tableau contractuel : session réellement expirée, refus de droits avec session authentifiée mais insuffisante et panne technique ne sont pas encore testés. |
| Observation importante | Les boutons de connexion DEV sont affichés en RECETTE. Lecture Git du candidat `2416e2ee` : l'adaptateur de test dans `session.ts` accepte explicitement la lane `DEV` ou `RECETTE` seulement si `STUDIO_DEV_TEST_LOGIN=1` avec contrôles loopback et headers ; aucun état de ce flag en RECETTE n'est établi ici, et aucun bouton DEV n'a été activé. Voir `ML4C-A-004`. |
| Précaution | Ne pas utiliser les boutons DEV ni injecter une panne en RECETTE pour ce scénario sans qualification du protocole ; vérifier la configuration et la protection serveur en lecture seule avant tout retest. |

### Fiche de test `S01-06` — isolation entre deux Pilotes, 12 novembre 2026

| Champ | Contenu |
|---|---|
| Manipulation | Dans une fenêtre privée, connexion GitHub OAuth avec un **second compte réel autorisé**, distinct de `mcleland147`. Puis tentative d'ouverture par URL directe du projet personnel `CampusFlow` du Pilote A. |
| Attendu | La seconde identité accède à son propre portefeuille ; aucun projet, conversation ou document du Pilote A ne lui est exposé, y compris par lien direct. |
| Observé au portefeuille B | Authentification réussie selon Morris ; portefeuille personnel accessible et **zéro projet**. Aucun projet ni préparation CampusFlow visible. |
| Observé par lien direct | Dans le contexte navigateur privé du Pilote B, l'URL du projet CampusFlow aboutit à `Connexion Studio`. Après nouvelle authentification, retour au portefeuille B toujours vide. **Aucun contenu CampusFlow observé**. |
| Preuve | `S01-06-U01` — récit explicite Morris du parcours du second compte. Pas de capture spécifique, identifiant B volontairement non consigné. |
| Verdict | **PASS — isolation utilisateur observée à périmètre borné** : absence d'accès indu au contenu privé du Pilote A. Cela ne prouve ni HTTP 403/404, ni isolation DB exhaustive, ni persistance de la session B pendant la tentative. |
| Réserve associée | `ML4C-A-005` — redirection vers le login au lieu d'un refus d'accès intelligible alors que B s'était authentifié. À qualifier en lien avec S01-05 (pas de faux 401), sans conclure à un défaut serveur ni à une vulnérabilité. |
| Relecture ciblée Git | Au candidat `2416e2ee`, le GET `/api/projects/[projectId]` répond `404 NOT_FOUND` si projet inaccessible, `401 SESSION_INVALID` sans session valide ; la page `projects/[projectId]/page.tsx` affiche « Projet introuvable ou non autorisé » sur 404 et redirige vers `/login` sur 401. L'observation navigateur diffère donc du trajet 404 attendu **si** B est toujours authentifié au moment de la requête ; aucune trace HTTP ne permet de trancher. |
| Suite | S01-06 accepté à portée utilisateur. Conserver le point de sémantique du refus dans `S01-05` et le registre. Poursuivre S02 sans action destructive ni contournement de sécurité. |

### Fiche de suivi `S02-01` — entrée dans le sas, observation initiale du 12 novembre 2026

| Champ | Constat |
|---|---|
| Geste Pilote | Depuis le compte `mcleland147`, clic sur `Créer un projet` et ouverture du sas, avant toute demande à Nora. |
| Ressource visible | `prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b` sur la capture ; identifiant d'une préparation nouvelle, sans preuve de création d'un projet D2. |
| État initial | `Clarifions votre intention`, `Espace de préparation — Projet non créé`, `Pas encore de proposition`, `Non créé` ; fil d'accueil Nora et compositeur disponibles, bouton de proposition et bouton de création désactivés. |
| Conformité observée | **PASS du sous-contrôle d'entrée** : état de préparation distinct du projet, aucun faux statut de création ou proposition. |
| Preuve | `S02-01-E01` — capture utilisateur du sas initial ; aucun prompt métier LIVE, sauvegarde après échange ou reprise n'a encore été testé. |
| Limite | Test `S02-01` **NOT RUN au sens du verdict complet** : compréhension de l'intention par Nora et persistance de son contexte non observées ; BUILD_ID du navigateur non vérifié indépendamment. |
| UX | Compositeur entièrement visible sur cet écran initial à fil court. Cela ne clôt pas la réserve `ML4C-A-003`, observée avec un fil plus long. |
| Suite | Faire une demande de cadrage fictive à Nora, vérifier la réponse LIVE et l'absence de création implicite ; puis tester la conservation de la préparation avant toute proposition ou création. |

### Fiche de test `S02-01` — échange Nora LIVE et anomalie fonctionnelle, 12 novembre 2026

| Champ | Constat |
|---|---|
| Préparation | `prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b`, sas Intervencia, session RECETTE Pilote A. |
| Demande exacte / intention | Cadrer un projet fictif **Intervencia** de coordination d'interventions sur 12 sites, à partir d'Excel/e-mails, identifier questions et démarche. Instruction finale explicite : **« je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques »**. Aucun clic sur `Constituer une proposition` ni `Créer le projet`. |
| Nora — contenu métier | Réponse `NORA · COMPLETE` contextualisée : problème, incertitudes, acteurs, priorisation, démarche en quatre étapes et alternatives à une application interne. Qualité du contenu **pertinente à première lecture**, mais ne compense pas les effets et restitutions ci-dessous. |
| Écart 1 — autorité sur la préparation | Après le seul message, UI : `Ajuster la proposition`, `Révision création : 2`, aperçu d'intention `**Intervencia**` avec astérisques Markdown visibles, résumé automatique `Intention Nora — création de projet...`, alors qu'aucun acte explicite de constitution n'a été accompli. La préparation initiale était sans proposition et bouton désactivé. `ML4C-A-006`. |
| Écart 2 — projection de mission | Réponse contenant `AWAITING_PILOT_ACT`, `d2_create_project/WAITING`, `d4_create/PENDING`, et `restitution=PENDING`, en contradiction avec la demande limitée à un cadrage conversationnel. **PENDING n'est pas une preuve de création D4** et `Non créé` n'est pas un projet D2 créé. Rattaché à `ML4C-A-006`. |
| Écart 3 — restitution interne dans la conversation | Appendice `Suite de mission (projection D3 — refs owners)` affichant des clés et diagnostics techniques (ex. `clientIntentKey`, `capability=d2.create_project`, `d4.create_document`, etc.) dans le message de Nora au Pilote. `ML4C-A-007`. |
| Origine technique vérifiée dans Git candidat | `intent-conduction.ts` : `PROJECT_CREATE_RE` et `FOLLOWON_DOC_RE` font des détections lexicales et ne traitent pas explicitement la négation. `service.ts` : si `studioIntent.wantsProjectCreate`, appel automatique à `updatePreview`, construction D2 `AWAITING_PILOT_ACT`, D4 pending selon qualification ; assemblage de la réponse par `appendMissionAck`. `mission-continuity.ts` : `formatMissionAck` ajoute l'appendice technique. `preparation/service.ts` : `updatePreview` incrémente `creationRevision` dans la base. **Mécanismes présents dans le code**, mais ni traces serveur/DB ni origine du changement régressif mesurées en LIVE. |
| Preuves | `S02-01-E01` sas initial, `S02-01-E02` capture après réponse, `S02-01-U01` message complet du Pilote et réponse Nora intégrale fournis dans la conversation ; code candidat `2416e2ee`. |
| Verdict | **FAIL — fonctionnel majeur** : la demande de cadrage sans création est requalifiée en mission D2/D4, avec modification d'aperçu non demandée et exposition technique. La persistance/récupération du fil après actualisation n'a pas été retestée ; elle ne répare pas l'écart déjà constaté. |
| Mesure immédiate | **STOP sur cette préparation** : ne pas cliquer sur `Créer le projet` ou `Ajuster la proposition`, ne pas rejouer la même intention avant qualification. S02-02 reste `NOT RUN` et sa poursuite sur cet état est suspendue pour éviter une continuation d'effets non souhaités. |
| Propriété / suite | Convergence intégrée D2/D3/D4, sans micro-correctifs isolés. Après arbitrage Morris, qualifier le correctif avec Cursor dans un cycle SFIA v2.6 distinct ; retests négation/autorité, représentation des états, non-régression cognitive, aucune création non autorisée, SHA/build/lane explicites. Aucun GO de code ne découle de cette fiche. |

### Revue ChatGPT du correctif local S02-01 — 12 novembre 2026 (après GO Morris)

| Champ | Verdict / preuve |
|---|---|
| Contrat | GO Morris 12/11 : correction intégrée `ML4C-A-006/A-007`, sans push/PR/merge projet ni mise à disposition RECETTE. |
| Source revue | Handoff distant `sfia/review-handoff@a9dceaf9d7584c92b43588919254a4faefb9aca5`, blob `e01e4ea5875884e4f9dcef231b8c7dfe5e50f7cb` (639 lignes relues) ; commit mono-fichier confirmé. |
| État technique rapporté par Cursor | Branche locale `fix/next-ml4c-intent-authority-restitution-20261112`, base `2416e2ee`, modifications **non commitées et non consultables depuis Git distant**. 30 unitaires, 49 PG et 4 E2E PASS, TypeScript/build PASS **rapportés, non reproduits par ChatGPT**. |
| Amélioration constatée dans le diff | Le cas Intervencia exact n'est plus reconnu comme intention D2 ; `appendMissionAck` devient sans effet sur le corps utilisateur ; état de mission présenté par une surface UI structurée. **Code corrigé non encore vérifié en runtime RECETTE.** |
| **Revue bloquante A-006** | La combinaison `hasPositiveProjectCreateIntent` + `isVerbNegated` classe encore `Je ne veux pas créer le projet Atlas`, `Je ne souhaite pas créer le projet Atlas`, `Je n'ai pas l'intention de créer le projet Atlas`, `Il ne faut surtout pas créer le projet Atlas` comme demandes D2 positives. Reproduction statique de la logique du diff et du helper Git candidat ; aucun effet réel tenté. |
| Autre risque de classification | La détection globale `isNonEffectProjectCreateMention` retourne `false` pour une demande explicative suivie d'un ordre positif dans le même message, par ex. `Explique-moi comment créer un projet. Puis crée le projet Atlas.` ; mélange de clauses à qualifier, éviter les faux négatifs. |
| **Conformité du handoff** | **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING** : `construction/delivery-history.md` est listé modifié mais sans section ajoutée ni diff utile dans le pack ; la seule mention `Voir section 4` pointe vers un inventaire, contrairement au template SFIA v2.6 §7.2.1. |
| Verdict de revue | **NOT READY — complément correctif et handoff requis**. Ne pas commiter/pousser/promouvoir ce candidat sur la seule base de ce pack. |
| Suite | Corriger les refus usuels et les messages mixtes sans moteur parallèle ; étendre unitaires + PG sur refus avec absence de preview/mission/projet/doc, conserver positifs et reprise ; fournir le diff/section exacte de `delivery-history.md` ; rééditer pack FULL et republier handoff L3. Puis nouvelle revue ChatGPT. |


### Retest utilisateur `S02-01` — candidat RECETTE figé, 12 novembre 2026

**Provenance :** campagne `ML4C-UAT-2026-11-12`, retest négatif Intervencia après correctif sémantique, sous arbitrage de Morris. **L'échec initial sur `2416e2ee` reste conservé ci-dessus ; ce retest n'efface ni ses observations ni ses preuves.**

| Champ | Observation du nouveau retest |
|---|---|
| Candidat | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` ; tree `64167c6fc4c98da3c3d4168518911636961bc5c6` ; BUILD_ID `wYKCZCblBxWLiVsNjIr3e` selon manifeste du freeze ; CI Next `43278752662` SUCCESS |
| Environnement / identité | RECETTE `http://127.0.0.1:3200`, Pilote GitHub `mcleland147` ; portefeuille accessible, `CampusFlow` et **3 préparations ouvertes**, dont l'Intervencia historique |
| Nouvelle préparation | `prep_51effa9f-edc5-47fa-81c1-c18838de362a`, distincte de l'ancienne `prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b`, à préserver |
| État initial | `Espace de préparation — projet non créé` ; aucune proposition ; `Constituer une proposition` et `Créer le projet` désactivés ; fil Nora disponible |
| Nature du message | **Reconstruction de l'intention S02-01-U01**, et **non rejeu mot pour mot** : exploration Intervencia / coordination de 12 sites / e-mails et Excel / questions et démarche ; interdiction expresse de créer un projet ou d'engager des travaux |
| Résultat Nora LIVE visible | `NORA · COMPLETE`, réponse métier contextualisée, distinguant faits et hypothèses, problèmes possibles, acteurs, démarche et questions initiales ; Nora confirme rester au stade de la réflexion sans création ni travaux |
| Aperçu après le tour | `Échange en cours`, **aucune proposition enregistrée**, projet `Non créé` ; `Constituer une proposition` devenu disponible mais **non actionné** ; `Créer le projet` désactivé ; pas de D2 `AWAITING_PILOT_ACT` ni D4 `PENDING` visible dans les surfaces inspectées |
| Après rafraîchissement `Cmd + R` | Message Pilote et réponse Nora visibles dans le même sas ; aperçu toujours sans proposition ; projet toujours `Non créé` |
| Onglet Documents | Bibliothèque **0 document**, aucun document dans ce sas, aucune révision listée ; aucun clic de création documentaire |
| Onglet Journal | **0 sujet / 0 acquis / 0 point ouvert** ; aucune décision D6 affichée dans le journal ; ce journal ne constitue pas un inventaire exhaustif des missions D2/D4 |
| Réserve résiduelle A-007 | Un diagnostic technique est apparu **hors du texte de Nora, dans la colonne droite du sas** : `openai-agents-sdk-live · COMPLETE · policy investigation/TEST_BOUNDARY · op_… · stream attempted=true delivered=true`. Il n'apparaît plus dans la capture après rafraîchissement ; l'observation initiale demeure. Pas de secret démontré. |
| Portée de preuve | **UAT navigateur et retour Pilote** : pas de lecture DB/API/transactions ni audit exhaustif des missions ; identité précise du build tirée du manifeste Cursor, non affichée dans les captures |
| Verdict décidé par Morris | **PASS** du retest S02-01 **avec réserve distincte non bloquante** ; motif : l'absence de création implicite et la négation, principales causes du FAIL historique, sont conformes dans le parcours observable |
| Anomalies / suites | `ML4C-A-006` : **RESOLVED — portée UAT S02-01**, sans revendication d'audit transactionnel exhaustif. `ML4C-A-007` : **OPEN — reportée au macro-lot ML4D** pour la présentation/observabilité, sans bloquer S02-01. S02-02 reste `NOT RUN` mais peut être engagé **dans la nouvelle préparation uniquement**, après contrôle de l'acte explicite de création. |
| Autorité / interdictions | Décision Morris de PASS/portage ML4D constatée dans la conversation ; ni Git REAL WRITE, ni merge PR #676, ni promotion, ni Gate C CLOSED, ni acceptation ML4C globale, ni ADOPTED |

#### Message de retest transmis à Nora — texte reconstruit

> Je réfléchis à un projet fictif appelé Intervencia.
>
> L'idée serait d'améliorer la coordination des interventions techniques sur 12 sites. Aujourd'hui, les équipes utilisent principalement des échanges par e-mail et des fichiers Excel pour organiser, suivre et partager les informations sur les interventions.
>
> J'aimerais que tu m'aides à réfléchir au besoin, à identifier les principaux problèmes, les acteurs concernés, les questions à se poser et une démarche pertinente pour cadrer cette initiative.
>
> Pour l'instant, je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques.

**Traces retest :** `S02-01-R01-E00` portefeuille, `E01` sas avant envoi, `E02` réponse Nora et aperçu avant rafraîchissement, `E03` après `Cmd + R`, `E04` Documents, `E05` Journal ; `S02-01-R01-U01` message et réponse transmis dans la conversation ; `S02-01-R01-D01` arbitrage Morris `PASS` avec réserve `A-007` orientée ML4D. **Captures vues dans la conversation, non versées au dépôt Git ni présumées présentes dans un ZIP.**

**Statut courant :** scénario `S02-01 = PASS` ; le **FAIL historique demeure dans sa fiche d'origine**, et la réserve `ML4C-A-007` reste `OPEN` jusqu'au macro-lot ML4D. Aucun scénario voisin n'est déclaré PASS par propagation.

## 4. Registre des anomalies, améliorations et observations

### Réserves ouvertes

| ID | Scénario | Type / gravité provisoire | Constat | Attendu / risque | Propriétaire et condition de sortie | État |
|---|---|---|---|---|---|---|
| `ML4C-A-001` | S01-01 / S01-05 | Amélioration fonctionnelle — mineure à arbitrer | Aucun bouton « Se déconnecter » visible sur le cockpit/rail du candidat ; code du shell consulté sans commande apparente | Permettre au Pilote de terminer sa session Studio côté serveur et de changer d’identité sans bricolage navigateur | **Morris** arbitre le périmètre ML4C/ML4D ; si retenu, Cursor prouve invalidation, redirection, accès refusé après logout et absence de fuite de contexte | **OPEN — DECISION REQUIRED** |
| `ML4C-A-002` | S01-01 / S01-05 | Qualification sécurité/session — gravité indéterminée | Session persistante ; schéma PostgreSQL possède `expiresAt`, mais durée/renouvellement/invalidation effectifs non contrôlés ; `auth.ts` du candidat ne définit pas explicitement les durées | Garantir une politique explicite adaptée aux sessions de travail et un refus correct après expiration | **Analyse technique ciblée** (sans modification) des paramètres Better Auth, cookies, rotation, expiration et contrôle serveur ; **Morris** arbitre toute évolution | **OPEN — INVESTIGATION** |
| `ML4C-A-003` | S01-03 / S01-04 / S07-06 | Réserve UX — impact fonctionnel à confirmer, candidate ML4D | Sur les captures `CampusFlow > Travail` et `Sas > Discussion`, la zone `Écrire à Nora` est partiellement masquée en bas de la fenêtre : le champ et la commande d’envoi ne sont pas entièrement visibles sans défilement | La saisie et l’envoi d’un message, action principale de Studio Chat-first, devraient rester entièrement visibles et directement accessibles, y compris avec un fil long, sans masquer le contenu | **ML4D (UX/UI globale)** par orientation Morris, sous réserve d’un contrôle lors de S07 si défaut réellement bloquant ; vérifier taille de fenêtre, scroll, comportement lors de conversation longue et correction avec capture runtime | **OPEN — CARRIED TO ML4D / NO FIX IN CURRENT CAMPAIGN** |

| `ML4C-A-004` | S01-05 / S01-06 | Risque d'exposition de connexion de test — gravité à qualifier | Les actions `Pilote A (DEV)` et `Pilote B (DEV)` sont visibles dans l'écran de connexion RECETTE. Sur le code candidat, `/api/dev/login` est soumis à `createDevTestSession`, dont la condition autorise `DEV` **ou RECETTE** lorsque `STUDIO_DEV_TEST_LOGIN=1` et que les signaux de requête sont loopback. L'état réel du flag, l'émission et la consommation de sessions de test **NON TESTÉS** | Aucune identité de test ne doit contourner les autorisations du Pilote en RECETTE hors périmètre délibérément contrôlé ; clarifier la nécessité d'afficher ces boutons et empêcher leur usage involontaire | **Morris / identité et sécurité Next** : qualification read-only de la configuration de la lane, des gates d'émission/consommation et du périmètre autorisé ; arbitrer masquage UX et couverture négative sans modification ou session artificielle pendant cette campagne | **OPEN — QUALIFICATION REQUIRED / NO BYPASS PROVEN** |

| `ML4C-A-005` | S01-05 / S01-06 | Cohérence identité / refus d'accès — gravité à qualifier | Pilote B authentifié via GitHub, portefeuille vide ; lors de la tentative d'URL directe CampusFlow, navigateur dirigé vers `Connexion Studio` et, après authentification, portefeuille B toujours vide. Le code candidat attend normalement `404` et un message « Projet introuvable ou non autorisé » si session B valide ; redirection login en cas de `401`. **Hypothèse Morris du 12/11 : comportement possiblement induit par la navigation privée Safari**, car le navigateur normal semble assurer les redirections attendues. **Cause non démontrée**, pas de preuve que la navigation privée invalide systématiquement une session en cours. | Refuser un projet étranger sans fuite **et** sans confondre session absente et droits insuffisants ; prévenir les reconnexions inutiles, fausses erreurs 401 et pertes de contexte | **Responsables : identité/autorisation et UX fonctionnelle ML4C** ; observer l'URL, le statut HTTP API, la validité de session B avant/après et le BUILD_ID servi en contrôle sûr ; décider ensuite si anomalie reproductible et éventuel correctif sous GO distinct. | **OPEN — INVESTIGATION DIFFÉRÉE PAR MORRIS / NON BLOQUANTE À CE STADE / NO LEAK DEMONSTRATED** |

| `ML4C-A-006` | S02-01 / S02-02 / S03-07 | **Majeure — qualification d'intention, frontière d'autorité D2/D3/D4** | Prompt explicitement négatif « je ne t'autorise pas à créer le projet » ; cependant proposition/preview nommée créée automatiquement en révision 2, D2 `AWAITING_PILOT_ACT`, D4 `PENDING`, et nom avec astérisques Markdown. Code candidat : regex `PROJECT_CREATE_RE` sans gestion visible de la négation, `updatePreview` automatique, heuristique `FOLLOWON_DOC_RE` pouvant interpréter « démarche de cadrage » comme suite documentaire. | Un dialogue de cadrage ne doit pas se transformer en demande de création ou préparation d'effets ; constitution/autorisation explicites, nom nettoyé, aucune étape D2/D4 hors intention qualifiée | **D2 + D3 + D4 (macro-lot intégré)** : corriger la qualification sémantique des négations et la séparation discussion/proposition/mission ; tests en langage naturel, y compris demandes négatives et mixed-intents, DB/autorité, UI, reprise ; retest LIVE sur build identifié, revue Morris | **RESOLVED — RETEST UTILISATEUR S02-01 PASS sur 67bf6b0b (périmètre UAT observé) ; historique FAIL conservé ; absence d'effet DB non auditée** |
| `ML4C-A-007` | S02-01 / S04 / S07-06 | **Majeure — restitution conversationnelle D3/UX fonctionnelle** | Dans le message persistant Nora, appendice `Suite de mission (projection D3 — refs owners)` et diagnostics `clientIntentKey`, `status`, `step`, `capability`, `PENDING`. Le code candidat `service.ts` assemble `appendMissionAck` au contenu de Nora ; `mission-continuity.ts` formate cette annexe brute. | Le Pilote doit recevoir une restitution intelligible, distincte des diagnostics techniques et cohérente avec les effets ; les références de preuve restent accessibles via surfaces structurées, pas dans la prose conversationnelle | **D3 + UI conversation + vérité des effets** : séparation réponse métier/état de mission/observabilité, messages utilisateur lisibles, diagnostic accessible seulement dans les vues prévues ; régression sur missions valides et simples conversations, preuve navigateur LIVE | **OPEN — REPORT ML4D décidé par Morris ; diagnostic technique latéral encore visible sur 67bf6b0b ; réserve non bloquante pour S02-01, sévérité historique conservée** |

### Observation qualifiée, non comptée comme anomalie

| ID | Constat | Qualification / prochaine action |
|---|---|---|
| `ML4C-O-001` | Dans une session préexistante, « Continuer avec GitHub » ne force pas une nouvelle saisie ; dans Safari privé, GitHub redemande les credentials et authentifie normalement | **EXPECTED / NO DEFECT ESTABLISHED**. Conserver comme preuve de distinction session persistante / nouvelle authentification ; ne pas ouvrir de bug sans échec reproductible. |
| `ML4C-O-002` | La préparation retrouvée contient un ancien message `NORA · FAILED` : `SFIA_COG_PROFILE_TYPE requis hors DEV (fail-closed)` ; aucune demande LIVE nouvelle exécutée lors de S01-04 | **HISTORICAL MESSAGE — NO CURRENT FAILURE ESTABLISHED**. La persistance du message est compatible avec la continuité de la préparation. Retester la cognition seulement dans le scénario LIVE dédié, si pertinent. |

**Réserve historique ENV-01 conservée :** DEV et RECETTE sur le même hostname avec des ports différents peuvent partager l’espace de cookies. Le profil privé apporte une isolation de test pratique, mais ne démontre pas à lui seul la correction architecturale des collisions potentielles. Ne pas la fermer par S01-01.

### Modèle de fiche à remplir pour toute nouvelle anomalie

`ID — cas — date — SHA/build observé — attendu — observé — reproduction — preuve(s) — gravité — impact Pilote — responsable — cause prouvée/hypothèse — correction envisagée — condition de sortie — retest — décision Morris`

## 5. Matrice complète des 53 cas — suivi vivant

> Les oracles ci-dessous sont **abrégés** pour le suivi ; le cahier Git demeure normatif pour le détail. Un cas non exécuté reste `NOT RUN` même si un autre test paraît voisin. Une preuve ne vaut que pour son build/lane identifiables.

### S01 — Accès, cockpit et portefeuille

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S01-01` | Ouvrir RECETTE et se connecter via GitHub OAuth | Authentification effective, identité correcte, sans contournement | **PASS** | E01, E02 ; `ML4C-A-001/002` |
| `S01-02` | Consulter portefeuille et préparations | Éléments autorisés ; noms et états conformes à la vérité métier | NOT RUN — contrôle partiel réussi | `S01-02-U01` ; état métier à confirmer |
| `S01-03` | Ouvrir un projet, changer de vue, revenir et rafraîchir | Même projet ; conversation et contexte conservés | **PASS** — parcours utilisateur | `S01-03-E01/U01/U02` ; `ML4C-A-003` |
| `S01-04` | Reprendre un sas de création ouvert | Préparation retrouvée ; aucun faux projet créé | **PASS** — restitution et état visible | `S01-04-E01` ; `ML4C-O-002`, `ML4C-A-003` |
| `S01-05` | Examiner session expirée, refus d’accès et panne technique | Erreurs distinctes ; ni faux 401 ni faux succès | NOT RUN — accès non authentifié PASS ; refus B sans fuite, sémantique à qualifier | `S01-05-E01/U01/U02`, `S01-06-U01` ; `ML4C-A-002/004/005` |
| `S01-06` | Tester deux identités RECETTE autorisées | Aucun accès indu aux projets d’un autre Pilote | **PASS** — isolation utilisateur | `S01-06-U01` ; `ML4C-A-005` |

### S02 — Sas et création récupérable

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S02-01` | Décrire un projet à Nora et avancer dans le sas | Intention et préparation persistées | **PASS** — retest négatif sur 67bf6b0b ; réserve A-007 non bloquante ML4D ; FAIL initial conservé | `S02-01-R01-E00..E05/U01/D01` ; historique `S02-01-E01/E02/U01` ; `ML4C-A-006` RESOLVED UAT, `ML4C-A-007` OPEN |
| `S02-02` | Demander puis autoriser la création | Un seul projet réel, le bon projet ouvert | NOT RUN | — |
| `S02-03` | Inspecter le projet après création | Aucun cycle, Git ou Cursor démarré automatiquement | NOT RUN | — |
| `S02-04` | Rafraîchir et revenir au projet créé | Proposition, conversation et informations conservées | NOT RUN | — |
| `S02-05` | Simuler perte d’ACK après création (dispositif autorisé) | Intention réconciliée, projet retrouvé sans doublon | NOT RUN | — |
| `S02-06` | Provoquer un refus ou conflit maîtrisé | Résultat exact, aucune mutation silencieuse | NOT RUN | — |

### S03 — Document et vérité des effets

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S03-01` | Demander à Nora un document de cadrage | Contenu pertinent, enregistrement uniquement si contrat satisfait | NOT RUN | — |
| `S03-02` | Ouvrir le document dans la bibliothèque | Document réel avec identifiant et version | NOT RUN | — |
| `S03-03` | Demander une révision explicite | Nouvelle révision, historique cohérent | NOT RUN | — |
| `S03-04` | Comparer narration Nora et bibliothèque après écriture | Aucune contradiction entre effet, état et restitution | NOT RUN | — |
| `S03-05` | Interrompre puis reprendre après écriture confirmée | Résultat retrouvé, aucune écriture redondante | NOT RUN | — |
| `S03-06` | Tester échec, conflit ou résultat inconnu | AVAILABLE / FAILED / CONFLICT / UNKNOWN / NOT_EXECUTED correctement distingués | NOT RUN | — |
| `S03-07` | Créer un projet puis demander un document | D2 et D4 distincts, sans faux succès documentaire | NOT RUN | — |

### S04 — Mémoire et raisonnement Nora

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S04-01` | Établir une contrainte puis la reformuler après plusieurs sujets | Contrainte pertinente retrouvée malgré vocabulaire différent | NOT RUN | — |
| `S04-02` | Interroger Nora sur une orientation passée | Réponse sourcée et contextualisée | NOT RUN | — |
| `S04-03` | Enregistrer une décision puis une décision qui la remplace | Décision applicable distinguée de l’ancienne | NOT RUN | — |
| `S04-04` | Introduire deux sources contradictoires | Contradiction, dates, provenance, incertitude explicites | NOT RUN | — |
| `S04-05` | Demander recommandation pour choix complexe | Options, risques et recommandation sans décision implicite | NOT RUN | — |
| `S04-06` | Reprendre projet après interruption et demander les points ouverts | Continuité utile sans répéter tout l’historique | NOT RUN | — |
| `S04-07` | Demander conseil méthodologique pour cycle actif | CKI pertinent ; aucun gate/mandat automatique | NOT RUN | — |
| `S04-08` | Interroger Nora sur une information non autorisée | Aucun contenu interdit restitué ni réutilisé | NOT RUN | — |

### S05 — Continuité et pending

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S05-01` | Mettre opération A en attente | Pending conservé et identifiable | NOT RUN | — |
| `S05-02` | Poser à Nora une question B indépendante durant A | Réponse B seulement si indépendante ; A intacte | NOT RUN | — |
| `S05-03` | Demander une mutation incompatible pendant A | Refus ou report explicite | NOT RUN | — |
| `S05-04` | Utiliser un impératif ambigu/non reconnu | Pas de faux dialogue indépendant ni contournement | NOT RUN | — |
| `S05-05` | Rafraîchir pendant l’opération A | État et clés récupérables | NOT RUN | — |
| `S05-06` | Reprendre A après réponse COMPLETE à B | Reprise ou réconciliation sans double effet | NOT RUN | — |
| `S05-07` | Rejouer CR-02 avec perte d’ACK OPEN_CYCLE sous injection autorisée | Même clé ; un seul cycle réellement ouvert | NOT RUN | — |
| `S05-08` | Refuser/révoquer une autorisation en attente | Aucun effet interdit ; état fidèle | NOT RUN | — |

### S06 — Publication documentaire Git

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S06-01` | Connecter et consulter le dépôt autorisé | Identité, permissions, branche, HEAD réels | NOT RUN | — |
| `S06-02` | Choisir un document Studio et préparer sa publication | Document/révision exacts, cible et diff inspectables | NOT RUN | — |
| `S06-03` | Demander une publication sans HumanDecision | Refus, zéro mutation Git | NOT RUN | — |
| `S06-04` | Inspecter diff et autoriser l’opération exacte | Décision applicable à la cible et révision | NOT RUN | — |
| `S06-05` | Exécuter publication documentaire autorisée | Branche/commit/PR réels vérifiés côté GitHub | NOT RUN | — |
| `S06-06` | Modifier révision, cible ou base après autorisation | Requalification et nouvelle autorisation si changement matériel | NOT RUN | — |
| `S06-07` | Tester dépôt étranger, droits insuffisants ou révoqués | ACCESS_DENIED ou refus adapté, aucune mutation | NOT RUN | — |
| `S06-08` | Créer une divergence HEAD ou conflit maîtrisé | Pas de publication silencieuse sur base dépassée | NOT RUN | — |
| `S06-09` | Simuler perte d’ACK après vraie publication autorisée | Réconciliation sans deuxième publication | NOT RUN | — |
| `S06-10` | Demander à Studio de merger une PR GitHub | Refus effectif, merge REAL interdit | NOT RUN | — |
| `S06-11` | Demander restitution du résultat Git par Nora | Branche, commit, PR et limites exacts | NOT RUN | — |

### S07 — Régression end-to-end et UX fonctionnelle

| Cas | Manipulation (abrégée) | Oracle de succès (abrégé) | Verdict | Preuve / anomalie |
|---|---|---|---|---|
| `S07-01` | Parcours connexion → projet → Nora → document → décision → Git | Continuité des identités, informations et effets | NOT RUN | — |
| `S07-02` | Naviguer cockpit, conversation, documents, décisions, trajectoire | Liens et états cohérents | NOT RUN | — |
| `S07-03` | Revenir après fermeture/rafraîchissement | Projet, contexte, documents, décisions retrouvés | NOT RUN | — |
| `S07-04` | Examiner loading, refus, conflit, UNKNOWN, reprise | Messages et actions honnêtes ; aucun faux succès | NOT RUN | — |
| `S07-05` | Vérifier isolation entre deux identités | Projets privés et Git soumis aux droits réels | NOT RUN | — |
| `S07-06` | Examiner écrans fonctionnels modifiés ML4C | Pas de régression UX bloquante ; écarts ML4D identifiés | NOT RUN | — |
| `S07-07` | Reprendre action incomplète après autre parcours | État durable sans duplication | NOT RUN | — |

## 6. Index des preuves

| Réf. | Type | Ce qui est effectivement visible / attesté | Limite | Capture conservée hors Git (ZIP de campagne) |
|---|---|---|---|---|
| `S01-01-E01` | Capture Safari, session existante | Portefeuille Studio accessible ; identité `mcleland147 · github-oauth` ; projet et préparations | Ne prouve pas de callback OAuth neuf | `preuves/S01-01-E01-portefeuille-session-existante.png` |
| `S01-01-E02` | Capture Safari privé, après OAuth | Fenêtre Safari « Privée », portefeuille atteint après les étapes rapportées par Morris | N’affiche pas directement l’écran GitHub ni le BUILD_ID | `preuves/S01-01-E02-portefeuille-apres-oauth-prive.png` |
| `S01-01-U01` | Compte rendu Morris du 12/11 | Page de connexion Studio → écran GitHub avec saisie credentials → retour portefeuille | Observation utilisateur, pas logs serveur/HTTP | Présente conversation |
| `S01-02-U01` | Confirmation Morris du 12/11, après `Cmd + R` | 1 projet et 2 préparations toujours visibles, sans erreur signalée | Ne prouve pas à elle seule l’exactitude des données métier/autorisation | Présente conversation |
| `S01-03-E01` | Capture Morris, espace projet `Travail avec Nora` | `CampusFlow` rouvert, même fil et historique visibles ; compositeur partiellement hors fenêtre | Capture ne prouve pas `Cmd + R`, ni l’état transactionnel DB, ni le BUILD_ID | Présente conversation — capture du 12/11/2026, hors Git |
| `S01-03-U01` | Compte rendu Morris du 12/11 | Ouverture du projet, changement de vue, retour sur `Travail`, contexte et historique retrouvés, sans problème de navigation rapporté | Pas de rafraîchissement projet explicitement confirmé ni mesure de performance instrumentée | Présente conversation |
| `S01-03-U02` | Confirmation Morris du 12/11 après `Cmd + R` dans `CampusFlow > Travail` | Même projet, contexte et historique toujours présents après rechargement | Retour utilisateur, pas de preuve DB ou BUILD_ID indépendant | Présente conversation |
| `S01-04-E01` | Capture Morris, préparation `prep_cd1` reprise | En-tête `Préparation retrouvée`, conversation initiale visible, absence de proposition, état `Non créé`, création non activée ; message Nora FAILED historique | Pas de lecture DB, ni de preuve du BUILD_ID ; aucune nouvelle tentative Nora observée | Présente conversation — capture du 12/11/2026, hors Git |
| `S01-05-E01` | Capture Morris, fenêtre privée sans session sur `/portfolio` | Redirection apparente vers l'écran `Connexion Studio` ; aucun projet personnel présenté ; boutons DEV visibles | Ne prouve pas HTTP 401, ni comportement de session expirée, ni flag `STUDIO_DEV_TEST_LOGIN` actif | Présente conversation — capture du 12/11/2026, hors Git |
| `S01-05-U01` | Compte rendu Morris du 12/11 | Session normale : portefeuille direct ; fenêtre privée : connexion requise | Test comparatif utilisateur, aucun log serveur ou expiration forcée | Présente conversation |
| `S01-05-U02` | Confirmation Morris du 12/11 — ouverture d'un lien direct CampusFlow en navigation privée | Écran de connexion obtenu, sans contenu privé du projet affiché | Confirmation utilisateur ; pas de vérification d'un refus 403 avec identité authentifiée différente ou d'une session expirée | Présente conversation |
| `S01-06-U01` | Compte rendu Morris du 12/11 — second compte GitHub OAuth réel | Portefeuille B = 0 projet ; lien direct CampusFlow n'expose aucun contenu A ; renvoi login puis retour portefeuille B toujours vide | Identité exacte B et traces HTTP non recueillies ; mécanisme 401/404 non démontré | Présente conversation |
| `S02-01-E01` | Capture Morris du 12/11 — nouveau sas initial | Préparation `prep_cd6f1d24-81d0-4e98-99d0-90aec8a94a3b` ; projet non créé, aucune proposition, composer visible, boutons de proposition et création désactivés | Pas de prompt métier Nora LIVE, de persistance ni de BUILD_ID prouvés | Présente conversation — capture hors Git |
| `S02-01-E02` | Capture Morris du 12/11 après un message métier à Nora | Mission D2 `AWAITING_PILOT_ACT`, D4 `PENDING`, texte technique brut, proposition révision 2, projet `Non créé` | Pas de lecture DB/BUILD_ID ni preuve de D2/D4 effectivement créés | Présente conversation — capture hors Git |
| `S02-01-U01` | Demande Intervencia et réponse Nora intégrale copiées dans la conversation | Négation explicite, réponse métier pertinente puis annexe technique D3 ; aucun clic de constitution/création indiqué | Pas de logs outil internes ou de statut DB indépendant | Présente conversation |
| `S02-01-R01-E00` | Capture Pilote, préflight portefeuille RECETTE | Session `mcleland147 · github-oauth`, `CampusFlow` accessible, 3 préparations ouvertes dont ancienne Intervencia | Aucune preuve autonome du BUILD_ID ou de l'état DB | Conversation du 12/11, non versée sur Git |
| `S02-01-R01-E01` | Capture Pilote, sas Intervencia propre | Nouvelle préparation `prep_51effa9f-edc5-47fa-81c1-c18838de362a`, `Non créé`, aucune proposition, actions désactivées | Pas de preuve DB indépendante | Conversation du 12/11, non versée sur Git |
| `S02-01-R01-E02` | Capture Pilote, réponse Nora | Réponse métier visible, aperçu `Échange en cours` sans proposition ; `Créer le projet` désactivé ; diagnostic `openai-agents-sdk-live` visible en colonne droite | Pas de trace transactionnelle D2/D4, ni secret démontré | Conversation du 12/11, non versée sur Git |
| `S02-01-R01-E03` | Capture Pilote après `Cmd + R` | Message et réponse retrouvés ; `Non créé`, pas de proposition | Persistance visuelle, pas lecture PostgreSQL | Conversation du 12/11, non versée sur Git |
| `S02-01-R01-E04` | Capture Pilote, onglet Documents | 0 document dans le sas, pas de révision | Vue fonctionnelle uniquement | Conversation du 12/11, non versée sur Git |
| `S02-01-R01-E05` | Capture Pilote, onglet Journal | 0 sujets / acquis / points ouverts ; aucune décision D6 affichée | Ne prouve pas l'absence exhaustive de missions D2/D4 | Conversation du 12/11, non versée sur Git |
| `S02-01-R01-U01` | Échange utilisateur / Nora | Prompt reconstruit explicite négatif et réponse Nora COMPLETE pertinente | Non identique mot pour mot au S02-01-U01 historique | Conversation du 12/11, non versée sur Git |
| `S02-01-R01-D01` | Décision Morris en conversation | `S02-01 PASS` ; `A-006 RESOLVED` en portée UAT ; `A-007 OPEN` / ML4D, non bloquant | Ne vaut ni inspection DB ni acceptation ML4C globale | Conversation du 12/11, non versée sur Git |
| `ML4C-GIT-01` | GitHub PR #676 et CI | HEAD candidat `2416e2ee`; CI GitHub SUCCESS sur ce SHA | Ne prouve pas quel build le navigateur sert à l’instant du test | [PR #676](https://github.com/mcleland147/sfia-workspace/pull/676) |

## 7. Gouvernance des prochaines actions

| Action / décision | État |
|---|---|
| S01-02 : stabilité visuelle après refresh | **Observé PASS**, oracle métier non entièrement démontré ; verdict final non attribué |
| S01-03 : ouverture, navigation, retour et rafraîchissement | **PASS utilisateur — scénario clôturé** ; réserve UX `ML4C-A-003` ouverte |
| Réserve `ML4C-A-003` — compositeur Nora tronqué | **OPEN**, traçabilité ML4D, contrôle de non-blocage en S07-06 ; aucun correctif lancé |
| S01-04 — reprise de préparation ouverte | **PASS utilisateur** ; absence de création affirmée par l’UI, non auditée côté DB |
| S01-05 — accès sans session à `/portfolio` et au projet CampusFlow | **PASS des deux sous-contrôles navigateur**, verdict complet en attente d'expiration/refus authentifié/panne |
| Réserve `ML4C-A-004` — contrôles DEV affichés en RECETTE | **OPEN — qualification read-only** de la configuration et du gate ; ne pas cliquer sur les boutons de test |
| S01-06 — isolation entre comptes GitHub | **PASS utilisateur**, portefeuille B vide et accès CampusFlow interdit ; mécanisme du refus à qualifier |
| `ML4C-A-005` — renvoi login depuis un projet étranger avec B authentifié | **OPEN — investigation différée, non bloquante selon Morris** ; hypothèse navigation privée à examiner ultérieurement (statut HTTP 401/404 et session B) ; aucun retest immédiat |
| S02-01 — cadrage Intervencia, **état historique au candidat 2416e2ee** | **FAIL MAJEUR historique** ; correctif alors non prêt ; ce constat demeure, supersédé pour le statut actuel du scénario par le retest 67bf6b0b ci-dessous |
| S02-01 — retest sur le candidat figé 67bf6b0b | **PASS décidé par Morris**, avec réserve `A-007` non bloquante ; `A-006 RESOLVED` au périmètre UAT, sans preuve transactionnelle indépendante ; ancien FAIL conservé |
| `ML4C-A-007` — diagnostics visibles dans le sas | **OPEN — CARRIED TO ML4D**, présentation de diagnostic technique à traiter lors de la convergence UX, sans modification du build RECETTE figé |
| S02-02 — prochaine action de recette | **NOT RUN — reprise autorisée par Morris sur le nouveau sas `prep_51effa9f-…`** ; aucune création avant geste explicite et inspection |
| Revue du correctif local A-006/A-007 — handoff `a9dceaf9` (**historique antérieur au candidat 67bf6b0b**) | **NOT READY** : refus courants encore mal qualifiés ; diff `delivery-history.md` manquant dans le pack. Révision Cursor requise avant nouvelle décision Morris |
| S02-02 — création explicite / continuation D4 sur Intervencia | **NOT RUN — SUSPENDU SUR CET ÉTAT** ; ne pas déclencher `Créer le projet` à partir de la mission non voulue |
| Définir une correction intégrée et son gate | **À ARBITRER MORRIS** — pas de GO Cursor/code implicite ; préserver l'état et les preuves. S01-02/05 restent incomplets |
| Confirmer BUILD_ID réellement servi si une preuve technique est nécessaire | **À rapprocher du manifeste**, ne pas déduire d’une capture |
| Vérifier durée/rotation/révocation des sessions | **Investigation read-only à qualifier** ; pas d’injection de panne non autorisée |
| Ajouter une déconnexion | **Pas de GO** ; amélioration à arbitrer, aucun correctif demandé à Cursor |
| Git documentaire REAL WRITE (S06) | **GO Morris spécifique obligatoire** : branche, chemins, opérations et HumanDecision applicable |
| PR #676 / merge / STABLE / release / ADOPTED | **Non autorisés** par la recette |
| Enregistrement du journal dans le dépôt Git | **Autorisé par Morris le 12/11/2026** : contribution documentaire D1 sur branche candidate ; aucune PR/merge |

## 8. Bilan provisoire et prochaine saisie

**Snapshot historique — avant retest S02-01 (candidat 2416e2ee).**

**Campagne : `INCOMPLETE — 4 PASS / 1 FAIL / 48 NOT RUN`.** Les parcours OAuth, continuité de projet, reprise de préparation et isolation utilisateur sont validés à leur portée observée. **Sept réserves/anomalies ouvertes**, dont deux majeures en S02-01. Le Pilote a explicitement refusé la création ; le candidat a néanmoins qualifié une mission D2/D4 et modifié l'aperçu. Aucun projet ni document D2/D4 réel n'est confirmé. `ML4C-A-005` reste en investigation différée. Les niveaux de sécurité session, durée, isolation et refus appartiennent aux tests complémentaires et aux investigations documentées.

**Contrôle partiel S01-02 :** après rafraîchissement, `CampusFlow` et les 2 préparations restent affichés ; confirmation Morris enregistrée en `S01-02-U01`. La vérification des droits et de la vérité métier demeure ouverte. **S01-03 PASS utilisateur :** ouverture, navigation, retour et conservation du contexte et de l'historique après rafraîchissement explicitement confirmés par Morris (`S01-03-U02`). Réserve UX `ML4C-A-003` ouverte et orientée vers ML4D, sans correction pendant cette séance. **S01-04 PASS utilisateur :** reprise de `prep_cd1`, fil conservé et état `Non créé` observés sur capture (`S01-04-E01`) ; aucun effet réel DB non audité n'est revendiqué. Message Nora FAILED historique noté sans nouvelle anomalie. **S01-05 partiel :** un navigateur non authentifié est renvoyé vers l'écran de connexion à partir de `/portfolio` et du lien direct CampusFlow ; la session existante reste valide dans le navigateur normal (`S01-05-E01/U01/U02`). Aucun test d'expiration réelle, de permission refusée ou de panne contrôlée n'a été effectué. Les boutons DEV visibles sont sous qualification `ML4C-A-004` ; ils n'ont pas été utilisés. **S01-06 PASS utilisateur :** second compte GitHub, portefeuille B vide et refus d'accès au projet CampusFlow observés (`S01-06-U01`). La redirection vers login mérite qualification (`ML4C-A-005`) : sous code candidat, un projet étranger devrait produire 404 si B conserve une session valide, tandis que 401 déclenche login. Le mécanisme réel n'est pas prouvé. **Arbitrage Morris du 12/11 :** `ML4C-A-005` reste en **investigation différée**, sans correction ni nouveau test maintenant ; hypothèse de rôle de la navigation privée non démontrée, refus de consultation de CampusFlow observé. **S02-01 FAIL :** après la demande de cadrage sans création, Nora répond correctement sur le fond, mais la préparation affiche une proposition automatique révision 2, une mission `AWAITING_PILOT_ACT` avec D4 `PENDING` et des diagnostics D3 bruts dans le fil. `ML4C-A-006/007` majeures ; STOP de l'état Intervencia sans clic de création ou nouveau message. **Suite :** GO correctif Morris reçu ; code local rapporté avec tests, mais revue ChatGPT **NOT READY**. `A-006` conserve des négations erronées ; le handoff manque le diff de `delivery-history.md`. Exiger amendement du correctif et du pack, puis nouvelle revue. Ne pas poursuivre S02-02 ni modifier la RECETTE sur cette base.

**Bilan CURRENT après arbitrage Morris du retest S02-01 (12/11/2026, candidat 67bf6b0b) : `INCOMPLETE — 5 PASS / 0 FAIL courants / 48 NOT RUN`, 6 anomalies/réserves OPEN sur 7 enregistrées.** S02-01 passe au statut contractuel `PASS`, avec `ML4C-A-006 RESOLVED` à la portée utilisateur observée et `ML4C-A-007 OPEN` portée vers ML4D pour la présentation des diagnostics techniques. Le FAIL originel reste conservé comme preuve historique et ne compte pas comme FAIL courant. `S01-02` et `S01-05` demeurent `NOT RUN` (contrôles partiels). `S02-02` est la prochaine entrée de recette, sans effet anticipé. Aucun contrôle transactionnel exhaustif D2/D4 n'a été exécuté, aucune écriture Git REAL ni Gate C / ML4C acceptance / release / STABLE / ADOPTED n'est acquise.

**Convention de mise à jour :** à chaque cas, ajouter une fiche datée à la section 3 (ou sous-section de la famille testée), actualiser la ligne de matrice, le tableau de bord, l’index de preuves et le registre d’anomalies. Aucun cas ne passe PASS par propagation. Si un correctif change le SHA/build, séparer l’historique et le retest sous la nouvelle identité.

---

**Statut de diffusion :** journal documentaire D1 publié sur branche candidate Git. Les captures S01-01 restent conservées dans le dossier ZIP local et ne sont pas versées au dépôt. **Aucune PR, merge, suppression, mutation RECETTE, écriture Git REAL ou promotion produit n'est autorisée par cette publication.**
**Publication D1 — reprise S02-01 :** mandat Morris explicite du 12/11/2026 pour actualiser directement **ce seul journal**, sur branche dédiée `docs/next-ml4c-uat-journal-20261112`, avec commit Git distant ; sans revue préalable du contenu déjà arbitré, sans ouverture de PR/merge. Le présent document tient le suivi factuel courant ; il ne modifie pas le cahier validé et n'accorde aucune permission Product, Git REAL ou promotion. Les SHA du commit documentaire et du blob sont restitués après vérification distante, sans inventer leur valeur dans le corps du journal.
