# SFIA Studio Next — ML4 | Historique de réalisation et cahier de RECETTE E2E

**Date :** 9 novembre 2026
**Statut :** **VALIDATED IN CONTENT BY MORRIS — 2026-11-09** ; publication documentaire D1 sur branche dédiée ; **NOT MERGED** ; recette Morris **NOT RUN**
**Périmètre :** R5 / ML4 « Collaborer et publier avec Git » — environnement DEV, déploiement RECETTE et parcours utilisateur
**Responsables :** Morris (RECETTE, arbitrages et gates) ; ChatGPT (analyse, suivi, revue) ; Cursor (technique sous mandat SFIA v2.6)
**Chemin Git de publication documentaire :** `projects/sfia-studio-next/construction/integration-git/recette-ml4-historique-et-scenarios-e2e.md`

## 1. Pourquoi ML4 ?

ML4 permet au Pilote de travailler dans Studio Next **sans Git obligatoire**, puis de connecter GitHub à la carte, choisir un dépôt autorisé, faire lire des sources versionnées à Nora, produire et réviser un document D4, et préparer sa publication documentaire. Un effet Git est gouverné par **HumanDecision D6**, exécuté via **D7/D9** et qualifié par **D8**. Le merge, s'il devient disponible, exige une décision distincte ; il est **actuellement bloqué en REAL**. Les travaux techniques exécutés par Cursor relèvent de ML5, pas des écritures autonomes ML4.

**Fondations utilisées :** ML1 (identité/projets/conversation), ML2 (Nora et documents D4), ML3 (pilotage et décisions D5/D6) ; décision Morris du **07/11/2026** ; **18 écrans Figma ML4 218–235 validés en spécification**, non assimilés à une preuve de fidélité navigateur.

## 2. Chronologie synthétique de la construction

| Étape | Réalisé | Niveau de preuve / limite |
|---|---|---|
| **1 — Cadrage (07/11)** | Portée ML4 Git documentaire / ML5 Cursor ; Git facultatif ; « Paramètres → Intégrations » ; règles d'autorité et contrat UX. | **Décision en contenu et UX VALIDATED SPEC** ; non équivalent à code prouvé. |
| **2 — Construction DEV (08/11)** | Interfaces Intégrations, association des dépôts, outils de lecture Git pour Nora, lien document/révision D4, préparation/diff/publication, chaînes D6 → D7 → D9 → D8 ; migrations additives **008–012**. | Tests **SCRIPTED/déterministes** et non-régressions ; ne prouvaient initialement aucun effet fournisseur réel. |
| **3 — Durcissement DEV (08–09/11)** | Contrôles de mandat et permissions, `HEAD`/base, idempotence/lease, refus de doubles effets, récupération après réponse ambiguë, provenance REAL/SCRIPTED, preuve D8 fail-closed ; corrections B1–B9, R1–R8, `ML4-REC-01`. | Couverture locale ; tests pertinents, build et Playwright **13/13** annoncés lors des cycles DEV, sans équivalence avec RECETTE Morris. |
| **4 — App GitHub DEV (08/11)** | GitHub App **`sfia-studio-next-dev`**, App ID `5670639`, installation `179935689`, dépôt sandbox `mcleland147/chantiers360` ; lecture installation REAL, puis **OAuth utilisateur user-to-server REAL** et dépôt/HEAD lus. | **REAL READ PROVEN en DEV** ; login Studio, App installée et consentement utilisateur restent distincts. |
| **5 — Premier effet documentaire DEV (09/11)** | Sur sandbox, document D4 → branche `sfia/pub-pub-e2e-2026` → commit **`790a5315…`** → [PR #18](https://github.com/mcleland147/chantiers360/pull/18) **OPEN**. Relecture distante et corrélation D4/effet consolidées. | **REAL documentaire borné prouvé en DEV**, `main` inchangée, **pas de merge** ; ne pas modifier cette PR pendant la RECETTE. |
| **6 — App GitHub RECETTE (09/11)** | Création **`sfia-studio-next-recette`** App ID `5677465`, installation `180092114`, scope **seul dépôt `chantiers360`** ; Client ID, Client Secret et PEM conservés hors Git ; callback `127.0.0.1:3200`. | Identité GitHub différente de DEV ; aucune autorisation d'écriture implicite. |
| **7 — Préparation RECETTE (09/11)** | Correction de liaison App par `STUDIO_LANE` **DEV/RECETTE**, refus des croisements ; commit local **`974b0030…`** ; **207 unitaires PASS + TypeScript PASS** annoncés ; base dédiée `sfia_next_recette_ml4` (PostgreSQL `5434`, migrations **001–012**) ; build figé. | App RECETTE **installation READ REAL PROVEN** ; OAuth utilisateur RECETTE **NOT RUN**. |
| **8 — Bascule RECETTE (09/11)** | G4 arrêté proprement ; ML4 démarré sur **`http://127.0.0.1:3200`**, build `RzpCuGMK6SnwfucphK7Qa` ; clé OpenAI RECETTE réutilisée depuis ML3 ; G4 et DEV préservés. | HTTP `/login`, `/portfolio`, `/settings/integrations` **200** ; OpenAI **CONFIGURED mais Nora LIVE NOT PROVEN** ; Git REAL WRITE **désactivé** ; **USER E2E NOT RUN**. |

## 3. Point d'entrée et vérité environnement

| Objet | Valeur au dernier handoff Cursor (09/11, 09:43 CET) |
|---|---|
| **RECETTE URL** | `http://127.0.0.1:3200` |
| **Source SHA locale servie** | `974b0030a94469bef05496151792e8c35a9a83e9` |
| **Tree / build** | `6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357` / `RzpCuGMK6SnwfucphK7Qa` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-974b0030` |
| **PostgreSQL** | `sfia_next_recette_ml4` — données fraîches, indépendantes des anciens cycles |
| **GitHub RECETTE** | App `5677465` / installation `180092114` / `mcleland147/chantiers360` |
| **Secrets** | `~/.config/sfia-studio-next/recette/.env.local` ; ne jamais les recopier dans rapports/ChatGPT/Git |
| **DEV / ancien G4** | DEV sur `3100` préservé ; ancien G4 arrêté, base et artefacts conservés |
| **Git Product** | local `974b0030…` ; branche distante `51b0c3b6…` ; `main` `c658f590…` ; **aucun push Product ni PR** |
| **Dernière preuve de bascule** | handoff L3 `22cb78164345edb6f90c7e4303d6b498e26bebcc` |

**Seuil de preuve :** cette table décrit le dernier état **rapporté par Cursor** et le handoff distant vérifié, non une observation permanente du Mac. Le premier contrôle utilisateur doit confirmer que l'URL répond toujours. **Aucune STABLE, release, ADOPTED ou clôture ML4.**

## 4. Cahier de RECETTE utilisateur — scénarios prioritaires

**Mode opératoire :** ouvrir la RECETTE dans un **profil navigateur dédié** (les ports `3100/3200` sur `127.0.0.1` ne suffisent pas à isoler les cookies). Pour chaque scénario, noter **PASS / FAIL / BLOCKED / NOT RUN**, le fait observé, une capture ou référence, et l'anomalie éventuelle. **Initialement : tous NOT RUN.** Procéder par parcours fonctionnels cohérents, pas par 22 micro-cycles.

### Phase A — Sans écriture GitHub (à lancer immédiatement)

| ID / ML4-AT | Manipulation Morris | Résultat attendu et preuve à relever |
|---|---|---|
| **R01** · 01, 19 | Se connecter à Studio, ouvrir/créer un projet et discuter avec Nora **sans GitHub**. | Aucun dépôt obligatoire, aucune redirection bloquante ; projet et conversation conservés après actualisation. |
| **R02** · 02, 03 | Ouvrir **Paramètres → Intégrations**, connecter GitHub ; accomplir le **consentement utilisateur RECETTE**. | App `sfia-studio-next-recette` reconnue ; état **CONNECTED** persistant ; login Studio ≠ autorisation de dépôt ; aucun secret exposé. |
| **R03** · 04, 06 | Afficher les dépôts disponibles, sélectionner `chantiers360`, l'associer au projet ; inspecter l'état des droits. | Uniquement le dépôt autorisé ; aucune déduction de droits depuis le login ; état *en attente/refus* vérifié si réellement testable, sinon **NOT RUN**. |
| **R04** · 05, 08, 20 | Dans Nora, demander de lire un fichier du dépôt (ex. README) et d'indiquer sa **source, ref, SHA et lien GitHub**. | Réponse **LIVE**, lecture réellement observée et attribuée, provenance correcte ; pas de `main` ou contenu inventé. |
| **R05** · 09 | Présenter à Nora un fichier test contenant une instruction hostile, **sans modifier le sandbox existant**. | Le contenu reste une donnée ; pas de mandat D6 ni d'effet Git déclenché par l'instruction. Si fichier de test absent : préparation nécessaire, **NOT RUN**. |
| **R06** · 10 | Produire un document D4 depuis Nora, sauvegarder, modifier, rouvrir et consulter ses versions/sources. | Document et révision **réellement persistés** ; provenance Git lisible ; aucun commit GitHub automatique. |
| **R07** · 11, 17 | Préparer une publication du document, examiner dépôt, branche, fichier, base/HEAD, contenu, diff et acteurs. | Diff intelligible, périmètre documentaire ; aucune écriture sans autorisation ; code/CI/secrets refusés. |
| **R08** · 02, 17, 18 | Tenter une action d'écriture **sans GO ni activation des mutations** ; examiner les états de preuve. | Refus explicite ; aucun commit/PR créé ; une préparation ou un commit ne devient pas « tests prouvés », « merged » ou « adopted ». |
| **R09** · 07, 22 | Vérifier les états déconnecté, dépôt détaché et accès révoqué **seulement après les parcours de lecture**, avec une séquence réversible. | Les droits sont réévalués ; documents internes et références historiques conservés. Éviter de retirer toute l'installation sans préparation. |
| **R10** · 21 | Parcourir Intégrations, Nora, documents et préparation de publication au clavier et sur largeur réduite ; comparer aux écrans Figma pertinents. | Navigation, focus, libellés, erreurs et responsive exploitables ; captures d'écarts UX. |
| **R11** · 16 | Si un deuxième compte de test autorisé existe : vérifier l'isolation de deux Pilotes partageant le sandbox. | Un dépôt partagé n'unit pas les sessions, documents, mémoires ou mandats. **BLOCKED/NOT RUN** si second compte indisponible. |

### Phase B — Écritures documentaires REAL (GO Morris **distinct** obligatoire)

Avant cette phase : choisir un **nouveau document et une branche de test dédiés**, vérifier l'état distant de `chantiers360`, **ne pas toucher à `main` ni à la PR #18 DEV**, et obtenir un GO borné pour activer les mutations documentaires REAL de la RECETTE. L'activation d'un flag technique **ne remplace jamais** la HumanDecision D6 de l'effet.

| ID / ML4-AT | Manipulation Morris | Résultat attendu et preuve à relever |
|---|---|---|
| **R12** · 11 | Avec GO, inspection du diff puis **HumanDecision D6**, publier **un document seulement** sur une branche dédiée. | D7/D9 produit un **vrai commit distant**, relu avec SHA, auteur, chemin, contenu et corrélation exacte à la révision D4 ; `main` inchangée. |
| **R13** · 12, 18 | Ouvrir la PR documentaire puis consulter les faits et l'historique de la tentative. | PR **OPEN réellement visible**, base/head vérifiés ; D8 ne revendique ni merge, ni tests CI, ni conformité non observés. |
| **R14** · 14, 15 | Tester, en environnement contrôlé, divergence de HEAD, répétition d'une demande ou réponse distante ambiguë. | Conflit ou résultat **UNKNOWN** honnête ; refus/requalification ou réconciliation ; pas de double commit/PR ni fausse complétion. Tester sans perturber la PR #18. |

### Limite connue, non confondue avec une réussite

**`ML4-AT-13` — merge documentaire REAL :** contrat cible avec deuxième HumanDecision, mais implémentation actuelle **HARD-BLOCKED**. Ne pas tester de merge ni le noter PASS ; qualifier **KNOWN GAP / NON EXÉCUTABLE** tant qu'une évolution et un GO distincts ne sont pas approuvés. **Multi-repo REAL** également non prouvé : ne pas extrapoler le test mono-repo `chantiers360` à plusieurs dépôts.

## 5. Critères de sortie et suite

**Pour passer à une décision de sortie ML4**, disposer d'un parcours utilisateur documenté de bout en bout, des preuves LIVE Nora et REAL GitHub appropriées, des refus de sécurité, d'un état de couverture des **22 `ML4-AT`** (PASS/FAIL/BLOCKED/NOT RUN avec justifications), et d'une liste courte d'anomalies ou écarts assumés. Aucun verdict de RECETTE ne provoque à lui seul push Product, PR, merge, STABLE, release ou ADOPTED.

**Suivi d'un cas :** `ID | date | SHA/build | attendu | observé | preuve/capture | verdict | anomalie/action | arbitrage Morris`. Les corrections éventuelles sont regroupées en lot cohérent et nécessitent un **nouveau SHA/build RECETTE**.

**Publication documentaire :** document **validé en contenu par Morris le 09/11/2026**, publié sur branche documentaire dédiée sous GO D1 ; **non mergé sur `main`**. La création de PR et le merge nécessitent des GO Morris distincts. Cet artefact de suivi **non normatif** ne remplace ni la Roadmap ni la matrice d'acceptation.

### Sources de vérité pour reprise

- `projects/sfia-studio-next/governance/roadmap.md` ; décision `governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md` ; politique `governance/environnements-recette-et-promotions.md`.
- `projects/sfia-studio-next/construction/integration-git/contrat-acceptation.md`, `specification-technique.md` et **`matrice-acceptation.md` (ML4-AT-01…22)**.
- `projects/sfia-studio-next/construction/delivery-history.md` (séquences DEV, OAuth et publication) ; `ux-ui/integration-git-ux-ml4.md` (Figma 218–235).
- `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff@22cb78164345edb6f90c7e4303d6b498e26bebcc` (bascule) et les handoffs précédents (construction).
- [Sandbox PR #18 — témoin DEV, **OPEN**](https://github.com/mcleland147/chantiers360/pull/18).

**Première action du nouveau chat :** ouvrir `http://127.0.0.1:3200` dans un profil navigateur RECETTE, commencer par **R01**, puis progresser scénario par scénario à partir des observations Morris.