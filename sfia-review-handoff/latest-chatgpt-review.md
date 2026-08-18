# REVIEW PACK FULL — SFIA STUDIO PRODUCT COMPLETION CYCLE 1 CADRAGE

| Champ | Valeur |
| --- | --- |
| **Timestamp** | 2026-08-18 13:37:48 CEST (+0200) — Europe/Paris |
| **Mode** | EXECUTION DOCUMENTAIRE BORNEE — PRODUCT FRAMING ONLY |
| **Cycle** | 1 — Cadrage |
| **Nom** | SFIA Studio Product Completion from MVP |
| **Profil** | CRITICAL |
| **Typologie** | EVOL / DOC |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` · version `0.1.0` · statut **candidate** · experimental cognitive guidance · **aucune autorité d'exécution** |
| **GO Morris consommé** | GO MORRIS — CYCLE 1 CADRAGE — SFIA STUDIO PRODUCT COMPLETION FROM MVP — NO DELIVERY |
| **Repo** | `mcleland147/sfia-workspace` |
| **Review pack level** | FULL |
| **Handoff** | required · publish-in-cycle · L3 borné |
| **ZERO REAL** | OPENAI_LIVE_CALL_COUNT = 0 · CURSOR_REAL_PRODUCT_PROCESS_COUNT = 0 |

---

## 1. Git PRE

| Champ | Valeur |
| --- | --- |
| **Timestamp PRE** | 2026-08-18 13:27:18 CEST (+0200) |
| **Branche au fetch** | `delivery/flex-office-demo-option-a` |
| **HEAD PRE** | `0cdf57a12843891da8b8db2d550cb38c7ba9f60a` |
| **origin/main PRE** | `e142f7bdb9ee29dbd258a68f016850269535f1e6` |
| **origin/sfia/review-handoff PRE** | `eb45cb8b5aede4fcca0c4140e49c3e44ba26eba9` |
| **Handoff blob PRE** | `1eba6f4ed096d9cca629105f728f6042e639e2a0` |
| **Staged PRE** | EMPTY |
| **Tracked dirty PRE** | EMPTY |
| **Untracked PRE** | `.cursor/settings.json` · `.tmp-sfia-review/` · `projects/eventops-poc/` · `projects/flex-office-demo/` |
| **PR #362** | MERGED · merge commit `e142f7bdb9ee29dbd258a68f016850269535f1e6` · mergedAt 2026-08-18T11:00:08Z |
| **Post-merge CI** | run `32129543999` SUCCESS · headSha `e142f7b…` |
| **Source branch rebaseline** | `docs/sfia-studio-product-completion-rebaseline` @ `69cb915ee00d901ba900e2992aa576dc56b863b5` PRESERVED |
| **PRE-M6 source branch** | `delivery/sfia-studio-pre-m6-ui-option-a` @ `3c4c478d7664c6111f38e6c4f49e98042e3a8473` PRESERVED |
| **STOP origin/main drift** | NON — origin/main = expected SHA · aucune évolution Studio non qualifiée |

---

## 2. Git POST (après branche locale + livrable)

| Champ | Valeur |
| --- | --- |
| **Branche locale Cycle 1** | `docs/sfia-studio-product-completion-c1-cadrage` |
| **HEAD POST** | `e142f7bdb9ee29dbd258a68f016850269535f1e6` (= origin/main) |
| **Tracking** | set up to track `origin/main` (local only · **NO PUSH** de la branche projet) |
| **origin/main POST** | `e142f7bdb9ee29dbd258a68f016850269535f1e6` |
| **Fichier versionné créé** | `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` (untracked) |
| **Autres fichiers tracked modifiés** | AUCUN |
| **Staged projet** | EMPTY |
| **Branche projet poussée** | NON |
| **Commit projet** | NON |

`git status --short` POST (hors handoff) :

```text
?? .cursor/settings.json
?? .tmp-sfia-review/
?? projects/eventops-poc/
?? projects/flex-office-demo/
?? projects/sfia-studio/product-completion/
```

`git diff --name-status` / `git diff --stat` tracked : EMPTY (nouveau fichier untracked, conformément à l'interdiction `git add` projet).

`git diff --stat --no-index` du livrable : 954 insertions / 1 file.

`git diff --check` tracked : clean.

`git diff --check --no-index` du livrable : aucun trailing whitespace / conflict / CR-at-EOL. Exit 1 = comportement `--no-index` quand les fichiers diffèrent, pas une erreur whitespace.

---

## 3. Dernier Review Handoff lu

| Champ | Valeur |
| --- | --- |
| **Commit** | `eb45cb8b5aede4fcca0c4140e49c3e44ba26eba9` |
| **Blob** | `1eba6f4ed096d9cca629105f728f6042e639e2a0` |
| **Path** | `sfia-review-handoff/latest-chatgpt-review.md` |
| **Alignement prompt** | Conforme aux SHA attendus du GO |

---

## 4. Sources consultées

- Git courant + décisions Morris (PR #362, CI, PRE-M6 EXIT, MVP baseline)
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` (PC-A…N, B-PC-DEBT, M6/M7, B9, B10 — metadata pré-#362 non micro-fixée)
- Doctrine v3 : `sfia-v3-framing/30`–`37` ; harvest `16`–`17`
- Historiques : `01` · `04`–`07` · harvest `08`–`09`
- Processus v2.6 : template d'exécution · routing guide · knowledge layer · operating model · guardrails · `sfia-v2.5-project-cycles-method-candidate.md` · CKC pilote cadrage
- MVP : `projects/sfia-studio/app/features/pre-m6-product-ui/**` · `project-assistant/**` · `lib/oa/{project,cycle,decision,execution-contract,execution-attempt,evidence-review,doctrine}/**` · `lib/vertical-slice-runtime/**` · `lib/platform/ai/openaiProvider.ts`
- Publisher : `scripts/sfia/publish-review-handoff.sh`

---

## 5. Convergence Pre-check

| Champ | Qualification |
| --- | --- |
| **Capacité v3 servie** | Product-level integration des fondations V3-F01…F15 à travers une cible produit et une ProjectTrajectory cohérentes |
| **Étapes de boucle** | intention / contexte · qualification · LPS · ProjectTrajectory · Recommendation / HumanDecision · ExecutionContract · Cursor / agent · Evidence / ReviewBundle · replanning · cycle history / capitalization |
| **Milestone** | PRODUCT-COMPLETION — CYCLE 1 CADRAGE |
| **État actuel** | MVP fonctionnel intégré sur main · PRE-M6 EXIT accepté avec dette gouvernée · runtime v3 NON ADOPTED |
| **Prochaine capacité candidate** | Cycle 2 Conception fonctionnelle — **hypothèse / recommandation, pas décision** |
| **Lien trajectoire** | Explicite — pas STOP TRAJECTORY LINK MISSING |

---

## 6. Vérités consommées

**MVP baseline :** CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED.

**PRE-M6 EXIT :** ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT. PRE-M6 ≠ COMPLETE WITHOUT RESERVES.

**Dette OPEN conservée :** UAT-UX-06 · UAT-RECOVERY-03 · V3-F10/M5-C · CONV-PL · PROP-PL · CONF-PL · N7-HID.

**Roadmap metadata pré-#362 :** Git + GO + PR #362 MERGED supersèdent les champs « Cycle 1 NOT AUTHORIZED » / snapshot `a53c323…`. Roadmap **non modifiée**.

---

## 7. Objectifs du Cycle 1

Définir exhaustivement (niveau cadrage) : intention, utilisateurs, valeur, cible, capacités, scope/out-of-scope, parcours macro, NFR, dette, risques, inconnues, options M6/M7, ProjectTrajectory candidate, décisions Morris, next cycle. **Sans** conception détaillée, architecture technique, UX, backlog, Delivery, REAL.

---

## 8. Fichier créé

`projects/sfia-studio/product-completion/01-product-completion-cadrage.md`

Statut document : **CANDIDATE — CYCLE 1 CADRAGE — AWAITING MORRIS REVIEW / DECISION**

Exactement **1** nouveau fichier versionné. Aucun README supplémentaire. Aucun autre fichier versionné modifié.

---

## 9. CONTENU COMPLET DU CADRAGE CRÉÉ

Le contenu intégral suit. Une synthèse seule serait `REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING`.

# SFIA Studio — Product Completion — Cycle 1 Cadrage

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Cycle** | 1 — Cadrage |
| **Nom** | SFIA Studio Product Completion from MVP |
| **Profil** | CRITICAL |
| **Typologie** | EVOL / DOC |
| **Milestone** | PRODUCT-COMPLETION — CYCLE 1 CADRAGE |
| **Statut du document** | **CANDIDATE — CYCLE 1 CADRAGE — AWAITING MORRIS REVIEW / DECISION** |
| **Autorité** | Morris décide. Cursor analyse et produit le cadrage dans le périmètre autorisé. |
| **Git main de départ** | `origin/main` @ `e142f7bdb9ee29dbd258a68f016850269535f1e6` |
| **Merge de rebaseline** | PR **#362** MERGED — Product Completion rebaseline |
| **MVP baseline** | Vertical slice fonctionnel actuel sur `main` (PR **#361** / head `3c4c478d7664c6111f38e6c4f49e98042e3a8473` / merge `a53c323e47e5fae1d35671f3ae232609a59b0f3f`) |
| **PRE-M6 EXIT** | **ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT** |
| **Doctrine produit cible** | SFIA Studio v3 exclusive — framing `30`–`37` — fondations **V3-F01…F15 VALIDATED** (doctrine) |
| **Runtime v3** | **NON ADOPTED** |
| **Processus externe de ce cycle** | SFIA v2.6 (ChatGPT ↔ Cursor) — **interdit** comme doctrine produit runtime Studio |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` · version `0.1.0` · statut **candidate** · experimental cognitive guidance · **aucune autorité d’exécution** |
| **Branche locale** | `docs/sfia-studio-product-completion-c1-cadrage` (locale seulement · **non poussée**) |
| **GO Morris consommé** | GO MORRIS — CYCLE 1 CADRAGE — SFIA STUDIO PRODUCT COMPLETION FROM MVP — NO DELIVERY |
| **Arborescence** | `projects/sfia-studio/product-completion/` porte le **nouveau lifecycle Product Completion**. Ce n’est **pas** une architecture parallèle. |

---

## A. Autorité, sources, anti-claims

### A.1 Hiérarchie d’autorité appliquée

```text
Git / runtime proofs
> décisions Morris
> Convergence Build Doctrine / Roadmap (construction)
> doctrine Studio v3 (destination produit)
> docs projet historiques
> contexte conversationnel / hypothèses
```

### A.2 GO consommé — ce qu’il autorise / n’autorise pas

**Autorisé :** ouverture du Cycle 1 ; lecture Git ; branche locale depuis `origin/main` ; création de **ce seul** fichier versionné ; analyse repo-informed du MVP ; options / recommandations / risques / inconnues / critères / trajectoire candidate ; Review Pack FULL ; publication Review Handoff L3.

**Non autorisé par ce GO :** architecture fonctionnelle détaillée ; architecture technique ; choix de stack ; choix de persistence ; schema/migration ; UX/UI détaillée ; Figma ; backlog détaillé / user stories ; code ; Delivery ; mutation runtime ; OpenAI LIVE ; Cursor REAL produit ; commit projet ; push branche projet ; PR projet ; merge ; suppression de branche ; modification Build Doctrine / doctrine v3 / méthode / template / routing ; lancement automatique du Cycle 2 ; lancement M6 ou M7 ; runtime v3 ADOPTED.

### A.3 Vérité de départ non négociable

> **MORRIS DECISION — CURRENT SFIA STUDIO VERTICAL SLICE ON MAIN IS THE FUNCTIONAL MVP BASELINE FOR THE PRODUCT COMPLETION TRAJECTORY — REUSE EXISTING BACKBONE — DO NOT RESTART FROM ZERO — RUNTIME V3 REMAINS NON ADOPTED**

> **PRE-M6 EXIT = ACCEPTED FOR PRODUCT-TRAJECTORY PURPOSES WITH GOVERNED DEBT**

Dette héritée **OPEN** (contraintes du cadrage, **pas** un chantier de micro-hardening ici) : `UAT-UX-06` · `UAT-RECOVERY-03` · `V3-F10 / M5-C` · Conversation process-local · Proposal process-local · Confirmation process-local · `N7-HID`.

### A.4 Note Roadmap metadata (ne pas micro-fixer)

La Roadmap sur `main` conserve encore des champs textuels pré-merge #362 (snapshot `a53c323…`, « Cycle 1 NOT AUTHORIZED », « NEXT REPO GATE = Draft PR rebaseline »). **Git actuel + GO consommé + PR #362 MERGED prime.** Ce cycle **ne modifie pas** la Roadmap.

### A.5 Anti-claims (ouverts)

Ce document **n’est pas** et **n’autorise pas** :

- Cadrage **VALIDATED** / **ADOPTED** / **CLOSED**
- Scope gelé définitivement
- Trajectoire **ADOPTED**
- READY FOR CONCEPTION / READY FOR DELIVERY
- Cycle 2 autorisé
- M6 / M7 lancés ou redéfinis par décision Morris
- Runtime v3 ADOPTED
- Architecture technique / stack / persistence choisies ici
- UX détaillée / Figma
- Backlog détaillé
- Architecture parallèle au backbone MVP
- Doctrine v2.6 comme runtime Studio
- Remboursement de la dette héritée
- Claim REAL nouveau
- Décision Morris inventée

### A.6 Sources consultées (path / statut)

| Source | Statut d’usage pour ce cadrage |
| --- | --- |
| Git `origin/main` `e142f7b…` · PR #362 MERGED · CI `32129543999` SUCCESS | **SoT** |
| Décision Morris MVP baseline + PRE-M6 EXIT (Roadmap / rebaseline) | **Autorité** |
| `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` | Construction **VALIDATED — ACTIVE ON MAIN** |
| `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` | État construction — metadata pré-#362 **supersédée par Git** pour le GO Cycle 1 |
| `projects/sfia-studio/sfia-v3-framing/30`–`37` | Doctrine produit cible **VALIDATED** · runtime **NON ADOPTED** |
| `projects/sfia-studio/sfia-v3-framing/16`–`17` | Harvest parcours / couches d’information · **candidats historiques** · ne pas copier v2.6 comme doctrine Studio |
| `projects/sfia-studio/01` · `04`–`07` | Historiques importants · **harvest** · postulat v2.6 Option C **SUPERSEDED** pour la cible Studio |
| `projects/sfia-studio/08`–`09` | Conception/flux historiques · harvest sélectif · **pas** doctrine active Product Completion |
| `projects/sfia-studio/app/**` | Preuve d’existence du MVP — lecture cadrage, pas revue de code exhaustive |
| Processus v2.6 (`prompts/templates/sfia-cycle-execution-template.md` · routing · knowledge layer · operating model · guardrails · méthode cycles · CKC cadrage) | **Processus externe de ce cycle seulement** |

### A.7 Convergence pre-check

| Champ | Qualification |
| --- | --- |
| **Capacité v3 servie** | Product-level integration des fondations **V3-F01…F15** à travers une cible produit et une ProjectTrajectory cohérentes. |
| **Étapes de boucle particulièrement concernées** | intention / contexte · qualification · Living Project State · ProjectTrajectory · Recommendation / HumanDecision · ExecutionContract · Cursor / agent · Evidence / ReviewBundle · replanning · cycle history / capitalization |
| **Milestone** | PRODUCT-COMPLETION — CYCLE 1 CADRAGE |
| **État actuel** | MVP fonctionnel intégré sur `main`. PRE-M6 EXIT accepté pour la trajectoire produit avec dette gouvernée. Runtime v3 **NON ADOPTED**. |
| **Prochaine capacité candidate** | À déterminer à l’issue de ce cadrage + revue Morris. **Hypothèse forte actuelle :** Cycle 2 — Conception fonctionnelle. **Ce n’est pas une décision.** |
| **Lien trajectoire** | Explicite : MVP réutilisé → cadrage de la cible complète → cycles de conception/architecture/UX/backlog/technique/delivery selon dépendances réelles. **Pas** `STOP — TRAJECTORY LINK MISSING`. |

---

## B. Résumé exécutif

**Pourquoi Product Completion existe.** Le vertical slice sur `main` a prouvé qu’une boucle projet gouvernée est **faisable et utilisable** (création de Project, Nora, qualification, HumanDecision, ExecutionContract, exécution bornée, Evidence, reprise honnête du durable). Il n’a **pas** encore défini ni construit le **produit cible abouti** : pilotage de projet complet, trajectoire exploitable, contrat d’exécution générique, autorités proportionnées, historique utile, artefacts/sources, durabilité de confort, expérience métier product-grade.

**Pourquoi maintenant.** M1→M5 sont CLOSED. PRE-M6 EXIT est accepté **pour la trajectoire produit** avec dette gouvernée. Relancer un POC ou reconstruire depuis zéro violerait la décision Morris et la Build Doctrine (R3/R6/R7). Le goulot n’est plus la faisabilité de la boucle minimale : c’est le **cadrage de la cible complète** avant conception.

**Problème produit restant malgré le MVP.** Morris peut déjà conduire une boucle bornée, mais le Studio n’est pas encore un cockpit de projet abouti : visibilité de trajectoire limitée ; historique factuel mais peu exploitable comme mémoire de cycle ; conversation/proposal/confirmation non durables ; ExecutionContract encore spécialisé (PREPARE / read-only borné) plutôt que générique ; artefacts utilisateur absents ; STOP/FAIL et Evidence encore trop techniques par endroits ; UX PRE-M6 utile mais non product-grade cible.

**Ce que le MVP a déjà prouvé (faits Git).** Backbone OA Native (Project, LPS, CycleInstance, HumanDecision, DecisionBasis, ExecutionContract, Attempt, Evidence, ReviewBundle) ; conversation dominante PRE-M6 ; OpenAI provider ; Cursor REAL gateway borné default OFF avec preuve historique M4 read-only ; recovery honnête du durable ; fake/real fidelity ; Git comme vérité.

**Ce que ce cycle doit permettre de décider.** Cible métier ; utilisateurs ; MUST/SHOULD/FUTURE/OUT-OF-SCOPE ; carte de capacités ; parcours macro ; NFR candidates ; routage de la dette ; risques ; inconnues ; options M6/M7 ; ProjectTrajectory candidate ; prochain cycle. **Sans** concevoir ni livrer.

---

## C. Intention vs solution

### C.1 INTENTION

Construire un **SFIA Studio abouti** qui internalise la boucle de pilotage projet avec Nora et l’exécution gouvernée, à partir du MVP existant, pour que Morris pilote un projet de bout en bout **sans reconstruire manuellement** la méthode, le contrat, les preuves et la reprise.

### C.2 CONTRAINTES DOCTRINALES DÉJÀ DÉCIDÉES

Ces éléments sont des **contraintes**, pas des solutions à concevoir ici :

- doctrine Studio **v3 exclusive** (D-V3-02 / D-V3-03) — v2.6 = processus externe / historique, pas runtime Studio ;
- conversation **dominante** (CC-D01) ;
- **Project ≠ Cycle** (CC-D13) ;
- Observation / Hypothèse / Option / Recommandation / Décision **distinctes** (CC-D05 / V3-F04) ;
- HumanDecision explicite — aucune automatisation d’arbitrage (R13 / anti-L5) ;
- ExecutionContract **natif structuré** ; export Markdown Cursor = **adaptateur** (V3-F11/F12, `34`) ;
- Git = vérité technique et documentaire (R12) ;
- ProjectTrajectory = recommandation jusqu’à HumanDecision (V3-F06) ;
- Evidence / ReviewBundle / Artifact Completeness (V3-F14) ;
- CKC = guidance cognitive, **aucune** autorité d’exécution (V3-F01) ;
- réversibilité et confirmations proportionnées N1–N3 (CC-D06 / V3-F12) ;
- IDs techniques **secondaires** dans l’UX ;
- réutiliser le backbone MVP — **ne pas** restart from zero ;
- runtime v3 **NON ADOPTED** même si des fondations sont IMPLEMENTED PARTIAL.

### C.3 SOLUTIONS ENCORE À CONCEVOIR (hors cadrage)

UX exacte et structure d’écrans ; modèle fonctionnel détaillé ; persistence des objets encore process-local / Memory ; APIs ; moteur Cursor générique ; schéma ; stack incremental vs G0 déjà consommé ; Figma Cycle 4 ; backlog.

**Règle CKC :** ne pas présenter une solution candidate comme besoin. Exemple : « il faut SQLite pour la conversation » est une solution. Le besoin est : « Morris doit pouvoir reprendre honnêtement un échange de qualification s’il est dans le périmètre cible ».

---

## D. Problème utilisateur / opportunité / valeur

### D.1 Requalification des docs 04–07

Les docs historiques 04–07 décrivent correctement la **friction multi-outils** et le besoin d’un cockpit métier. Ils sont **dépassés** sur trois postulats :

| Postulat historique 04–07 | Traitement |
| --- | --- |
| Studio consomme SFIA v2.6 Option C | **REPLACE / SUPERSEDED** — cible = doctrine v3 exclusive |
| POC = prochaine preuve | **REPLACE / SUPERSEDED** — le MVP fonctionnel existe sur `main` |
| MVP non défini | **REPLACE / SUPERSEDED** — Morris a décidé le vertical slice actuel = baseline MVP |
| Trajectoire pré-cadrage → POC → MVP | **HARVEST** l’idée de progressivité · **REPLACE** la séquence (MVP déjà là) |
| Friction copier/coller GPT ↔ Cursor | **KEEP** comme problème encore partiellement vrai (contrat non générique, hors-Studio encore utilisé pour beaucoup de cycles) |
| Morris utilisateur primaire / Git / gates / réversibilité / audit | **KEEP** |

### D.2 Friction restante — faits observés vs hypothèses

| Sujet | Faits observés (Git / MVP) | Hypothèse |
| --- | --- | --- |
| Friction restante | ExecutionContract PREPARE-only + capacité Cursor native = read-only borné. Write/commit/push/PR **pas** des classes produit natives. Conversation/proposal/confirmation process-local. | Sans contrat générique + autorités proportionnées, Morris continuera une boucle mixte Studio + ChatGPT/Cursor externe. |
| Visibilité projet / trajectoire | LPS durable affiché (« ÉTAT DU PROJET »). `ProjectTrajectory` **modeled** + **Memory** (pas Product SQLite). LPS peut porter `trajectoryId` mais la trajectoire n’est pas un objet produit vivant. | Sans trajectoire exploitable, le LPS dit « où on en est factuellement » plus que « où on va / ce qui reste ». |
| Historique exploitable | History = ancres factuelles (Project, LPS, cycle, Evidence, ReviewBundle, Recommendation). Pas de capsule de cycle (qualification, décisions, livrables, conversation liée). | Un historique d’ancres ne suffit pas à relire un cycle terminé comme mémoire de pilotage. |
| Durabilité / reprise | Recovery honnête : durable relisible ; conversation/proposal/confirmation peuvent être perdues. `UAT-RECOVERY-03` : confirmation préparée non reprojetée après reload. | La reprise est sûre (fail-closed) mais pas continue. |
| Gouvernance d’exécution | HD durable ; Confirmation Memory ; Gate D one-shot historique ; autorité locale Morris TEMPORARY WITH EXIT. | Le produit abouti doit rendre visibles gates, enveloppe d’autorité et sorties SUCCESS/STOP/FAIL **métier**. |
| Contexte / sources / artefacts | DoctrinePackage pin/digest en snapshot F2. Pas d’intake PJ utilisateur produit. Evidence `type: artifact` = preuve d’exécution, pas pièce jointe Morris. | Sans rattachement de sources/PJ, Nora raisonne surtout sur le chat + Git/doctrine. |
| UX product-grade | PRE-M6 Option A intégrée ; conversation dominante ; IDs secondaires en partie. `UAT-UX-06` : Evidence encore trop technique. | La baseline visuelle PRE-M6 est un **KEEP** à adapter, pas le produit fini. |
| STOP / FAIL clairs | Statuts Attempt `succeeded/failed/timeout/cancelled` durables. Semantic labels UI existent. Pas de parcours produit générique STOP gouverné / FAIL technique / escalation sans promotion silencieuse. | Risque de lire un terminal technique comme succès métier. |
| Nora → contrat → Cursor → Evidence → Nora | Chaîne **partielle** prouvée sur le slice (fixture-safe + M4 RO historique + M5 Evidence→RecommendNextGate). Pas une boucle projet générique continue. | C’est le cœur de valeur restant de Product Completion / M6 requalifié. |

**Valeur cible (qualitative, aucun seuil inventé) :** réduire la boucle externe ChatGPT↔Cursor pour le pilotage Studio ; rendre l’état et la trajectoire lisibles en quelques instants ; rendre les décisions et preuves retrouvables ; permettre une reprise honnête ; garder la technique secondaire.

**Coût de l’inaction :** figer le MVP comme produit ; empiler du micro-hardening PRE-M6 ; ou reconstruire une architecture parallèle « plus propre ».

---

## E. Utilisateurs / bénéficiaires / stakeholders

| Acteur | Nature | Rôle pour Product Completion |
| --- | --- | --- |
| **Morris** | Humain | **Utilisateur primaire** et **décideur** (L0). Seul opérateur cible **décidé**. |
| **Futurs opérateurs autorisés** | Humain | **Candidats uniquement**. Aucune décision Morris ne les inscrit dans la cible actuelle. Le cadrage peut **préparer l’évolutivité** sans concevoir le multi-user. |
| GPT / Nora | Système | Raisonne, challenge, recommande. **Pas** stakeholder humain. **Pas** décideur. |
| Cursor / agent | Système | Exécute dans l’enveloppe autorisée. Autonome sur le HOW technique. |
| Git / GitHub | Système | Vérité / revue / preuves. |
| Sécurité / exploitation | Exigence future | Pas un persona inventé ; NFR à qualifier plus tard (M8 / cycles conditionnels). |

**Interdit :** inventer organisation, équipe commerciale, rôle admin, ou persona sans source.

**Inconnue critique liée :** Morris reste-t-il le seul opérateur cible à court terme ? Voir §T et D-PC-02.

---

## F. Vision produit cible

SFIA Studio est la **plateforme métier** qui permet à Morris de **créer, comprendre, piloter, décider, faire exécuter, prouver, reprendre et enchaîner** un projet sous doctrine v3, avec Nora comme surface dominante et Cursor comme exécuteur gouverné.

Boucle métier cible (compatible Build Doctrine A3 + framing `30`) :

```text
Morris
  → Studio / Nora
  → contexte v3 (DoctrinePackage / CKC cognitif)
  → qualification
  → analyse / clarification
  → Living Project State
  → trajectoire / options / recommandation
  → HumanDecision
  → Confirmation (si requise, proportionnée)
  → ExecutionContract natif
  → Cursor / agent sous contrat
  → Evidence / ReviewBundle / Git
  → Nora (analyse, sans transformer reco en décision)
  → LPS / replanification
  → décision Morris
  → cycle suivant
```

**Industrialisation** = industrialiser la **plateforme** (sûreté, observabilité, reprise, distribution éventuelle), **pas** « industrialiser les cycles ». M8 reste le lieu d’un futur claim runtime ADOPTED — **hors** succès de ce Cycle 1.

---

## G. Product outcomes

Résultats utilisateur attendus — **pas** des composants. Aucune métrique chiffrée inventée.

| ID | Outcome |
| --- | --- |
| O-01 | Comprendre l’état d’un projet en quelques instants (objectif, cycle, prochaine action, blockers). |
| O-02 | Savoir où l’on est dans la trajectoire (proposé / actif / fait / bloqué) et ce qui peut être replanifié. |
| O-03 | Travailler avec Nora sans piloter manuellement la méthode (qualification, challenge, options). |
| O-04 | Prendre les décisions structurantes **explicitement** (GO / GO with reserves / AMEND / NO-GO). |
| O-05 | Exécuter via Cursor **sans reconstruire manuellement** le contrat. |
| O-06 | Distinguer succès métier, STOP gouverné, FAIL technique — aucun succès silencieux. |
| O-07 | Retrouver décisions, cycles, preuves, livrables. |
| O-08 | Reprendre honnêtement après interruption / reload. |
| O-09 | Rattacher documents / PJ / sources au Project / Cycle, avec provenance. |
| O-10 | Garder la technique (IDs, SHA, chemins) secondaire dans l’UX. |
| O-11 | Voir la dette et les réserves, sans les oublier. |
| O-12 | Enchaîner un cycle suivant après décision, sans reset de projet. |

---

## H. Carte de capacités de niveau cadrage

Requalification de **PC-A…PC-N** (Roadmap = inputs, **pas** specs validées). Niveau = cadrage. **Pas** d’implémentation.

Légende statut actuel : **KEEP** / **ADAPT** / **COMPLETE** / **NEW CAPABILITY** / **FUTURE**.

| Domaine | PC | Finalité utilisateur | Statut actuel | Preuve Git actuelle | Gap | Dépendances | Criticité | Niveau cadrage |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Project / pilotage** | PC-A | Créer, lister, ouvrir, comprendre un projet | **KEEP** backbone · **ADAPT** pilotage | `/studio` · Product SQLite Project/LPS · PR #337/#361 | Pilotage ≠ liste + LPS : manque trajectoire, next-step vivant, blockers | LPS, Trajectory, Nora | Haute | MUST |
| **Nora / conversation** | PC-B | Discuter, clarifier, challenger, proposer | **KEEP** surface · **COMPLETE** durabilité si in-scope | ConversationSurface dominante · OpenAI provider · process-local | Continuité d’échange ; anti-questionnaire | Qualification, LPS | Haute | MUST (conversation) · durabilité = décision |
| **Qualification** | PC-C | Qualifier intention → cycle/profil/périmètre **métier** | **KEEP** F2 · **ADAPT** généricité | `qualify.ts` · CycleInstance SQLite · CKC binding M2 · Proposal process-local | Proposal non durable ; jargon encore présent en profondeur | CKC cognitif, LPS | Haute | MUST |
| **Knowledge / DoctrinePackage / sources** | PC-N | Travailler avec un contexte v3 piné, traçable | **KEEP** pin/digest partiel · **COMPLETE** package produit | Doctrine types T-A0 · digest `F2ContextSnapshot` | DoctrinePackage runtime complet ; CKC 15/15 = M7 | V3-F03/F07 | Haute (pin) / M7 (15/15) | MUST pin · FUTURE 15/15 |
| **LPS** | PC-A | Voir un état projet **utile** | **KEEP** durable · **ADAPT** utilité métier | `LivingProjectState` SQLite · LpsSurface · W1 Evidence refs | Panneau encore partiel vs contenu doctrinal `32` | Evidence, Trajectory, Decisions | Haute | MUST |
| **ProjectTrajectory** | PC-E | Voir / ajuster une trajectoire dynamique | **ADAPT** modeled · **COMPLETE** produit | Types `ProjectTrajectory` · **Memory** repo · pas d’UI produit dédiée | Objet Memory ; pas de replanification produit | HD, LPS, Nora | Haute | MUST cible · durabilité à décider |
| **Decision** | PC-B/C | Trancher explicitement | **KEEP** HD durable · **ADAPT** UX décision | HumanDecision + DecisionBasis SQLite M3 · GO/reserves/AMEND/NO-GO UI | AMEND loop G-UX-08 OPEN/DEFERRED | Proposal, Confirmation | Haute | MUST |
| **ExecutionContract** | PC-G | Comprendre le contrat avant d’autoriser | **KEEP** natif · **ADAPT** vers générique | EC SQLite · `buildExecutionContract` · projection PREPARE-only | Encore spécialisé slice / RO ; pas contrat générique projet | HD, AgentCapability | Haute | MUST |
| **AgentCapability / authority** | PC-I | Savoir ce que l’agent a le droit de faire | **KEEP** RO borné · **NEW** classes d’effet | `m4BoundedReadOnlyCursorAgent` · Gate D · local Morris TEMPORARY WITH EXIT | write/commit/push/PR/merge **non** natifs | ExecutionContract, gates | Haute | MUST classes cadrées · autorisation **pas** globale |
| **Cursor projection** | PC-H | Cursor reçoit un adaptateur, reste autonome sur le HOW | **KEEP** adaptateur PREPARE · **ADAPT** générique | `cursorPrepareOnlyProjection.ts` · REAL gateway default OFF | Pas 15 moteurs ; pas commandes statiques par cycle ; projection générique absente | EC natif | Haute | MUST adaptateur · FOREIDDEN 15 moteurs |
| **Execution lifecycle** | PC-J | Suivre une exécution | **KEEP** Attempt durable · **ADAPT** généricité | Attempt SQLite M5 · running observation UI | Lifecycle lié au slice actuel | Confirmation, gateway | Haute | MUST |
| **STOP / escalation** | PC-J | Traiter STOP gouverné vs FAIL | **COMPLETE** / **NEW** parcours produit | Statuts Attempt + stopConditions sur EC · pas de parcours générique métier | Pas d’escalade automatique d’autorité | HD, gates | Haute | MUST |
| **Evidence / ReviewBundle** | PC-K | Comprendre le résultat et la preuve | **KEEP** durable · **ADAPT** lisibilité | Evidence/RB SQLite · remount PR #351 · UAT-UX-06 OPEN | Preuve trop technique ; analyse Nora = Recommendation-only | Attempt, LPS | Haute | MUST |
| **Cycle history** | PC-D | Relire un cycle terminé / l’historique projet | **ADAPT** ancres · **COMPLETE** capsule | HistorySurface / ProjectHistoryPanel = ancres factuelles | Pas de capsule (synthèse, décisions, livrables, lien conversation) | Evidence, HD, Cycle | Moyenne-haute | SHOULD (capsule) · MUST (ancres honnêtes) |
| **Artifacts / attachments** | PC-F | Joindre / analyser une source ou PJ | **NEW CAPABILITY** | Absent produit. Evidence artifact ≠ PJ. D1 intake **FREEZE** parallèle | Intake + provenance + rattachement Project/Cycle | Knowledge, Nora | Moyenne | SHOULD · types MUST vs FUTURE = décision |
| **Recovery / durability** | PC-L | Reprendre sans fiction | **KEEP** honest recovery · **COMPLETE** selon objets | RecoverySurface · durable restart-safe M1–M5 · process-local CONV/PROP/CONF | UAT-RECOVERY-03 ; journal M5-C | Confirmation, conversation | Haute (honnêteté) | MUST honnêteté · profondeur = décision |
| **Product Experience** | PC-M | UX métier compréhensible, responsive | **KEEP** PRE-M6 baseline · **ADAPT** product-grade | ProductShell · Option A PR #361 · Visual Contract PRE-M6 Freeze | UAT-UX-06 ; G-UX-08 ; responsive/a11y à qualifier | Tous domaines | Haute | MUST principes · Figma = Cycle 4 conditionnel |
| **Governance / audit** | PC-N / PC-I | Tracer, arrêter, ne pas contourner les gates | **KEEP** rails T-A7 · **ADAPT** visibilité | Honesty rails · provenance fields · anti-claims runtime | DebtItem runtime F10 incomplet ; journal sans owner | HD, Evidence, Git | Haute | MUST |

**Interprétation :** le MVP **KEEP** le backbone. Product Completion **ADAPT/COMPLETE** la généricité, la lisibilité, la trajectoire, l’historique utile, les autorités, les artefacts et la durabilité proportionnée. Rien de tout cela n’autorise une architecture parallèle.

---

## I. Parcours utilisateur macro cibles

Parcours **fonctionnels**, non visuels. Pas de wireframes, pas d’écran par écran.

| # | Parcours | Entrée | Résultat utilisateur | Gate typique | Stop / erreur honnête |
| --- | --- | --- | --- | --- | --- |
| 1 | Créer un projet | Intention Morris | Project + LPS initial + conversation possible | Confirmation de création si structurante | Intention vide ; doctrine unresolved |
| 2 | Reprendre un projet | Liste / projet courant | État durable relu ; pas d’invention de conversation perdue | — | Recovery explicite si process-local perdu |
| 3 | Discuter avec Nora | Composer libre | Clarification, challenge, options — **≠** décision | — | Anti-questionnaire ; phrase chat ≠ GO |
| 4 | Qualifier une intention / poursuivre | Conversation + contexte v3 | Qualification cycle/profil/périmètre proposée | Revue Morris si Critical / ambigu | CKC absent = fallback intra-v3 silencieux, pas v2.6 |
| 5 | Consulter / ajuster une trajectoire | LPS / trajectoire | Trajectoire candidate ou validée visible ; replan = reco | HD si replan structurant | Trajectoire Memory actuelle ≠ disparition silencieuse du besoin |
| 6 | Prendre une HumanDecision | Proposal / options | GO / GO with reserves / AMEND / NO-GO enregistré | Oui — décision humaine | AMEND aujourd’hui différé (G-UX-08) = gap connu |
| 7 | Préparer / comprendre un ExecutionContract | Post-HD | Contrat natif lisible (objectif, scope, stops, preuves, autorité) | Revue avant confirmation | Champs unresolved visibles — pas de contrat fictif |
| 8 | Autoriser une action proportionnée | Contrat + enveloppe | Confirmation N1–N3 selon effet | Oui si mutation / irréversible | Pas d’auto-escalade |
| 9 | Suivre une exécution | Attempt running | Progression / running / attente résultat | Stop possible | Timeout ≠ succès |
| 10 | Traiter SUCCESS | Attempt succeeded + Evidence | Preuve métier + reco Nora + LPS factuel | HD pour next step | Recommendation ≠ décision |
| 11 | Traiter STOP gouverné | Stop condition / scope / source / cap | Exécution arrêtée ; Morris voit pourquoi et quoi décider | Oui pour élargir | STOP ≠ FAIL ≠ SUCCESS |
| 12 | Traiter FAIL technique | Adapter / process / timeout | Échec visible ; pas de mutation déguisée en succès | Rejouer / requalifier | Journal technique ≠ Product Store |
| 13 | Consulter Evidence / ReviewBundle | History / conversation | Preuve et revue utiles, IDs secondaires | — | UAT-UX-06 = gap lisibilité |
| 14 | Reprendre après reload / interruption | Reload | Durable restauré ; process-local non inventé | Requalify si confirmation perdue | UAT-RECOVERY-03 |
| 15 | Consulter un cycle terminé | History / capsule | Synthèse, décisions, livrables, preuves | — | Capsule = SHOULD (pas encore là) |
| 16 | Consulter l’historique projet | History | Suite d’ancres / cycles dans le temps | — | Pas de seconde vérité vs Git |
| 17 | Joindre / analyser un artefact ou une source | Workspace / conversation | Source rattachée, provenance, analyse Nora | Si write large / externe | artefact ≠ doctrine ; restitution ≠ SoT |
| 18 | Lancer le cycle suivant après décision | Reco + HD | Nouveau CycleInstance sur **le même** Project | HD | Project ≠ Cycle ; pas de reset |

---

## J. Périmètre cible

Ce ne sont **pas** des tickets. Catégories de **cible produit abouti**.

### J.1 MUST target capability

- Créer / lister / ouvrir / reprendre un Project.
- LPS utile (état, prochaine action, cycle distinct).
- Conversation Nora dominante pour qualifier et accompagner.
- HumanDecision explicite.
- ExecutionContract natif intelligible, rattaché Project/Cycle/Decision.
- Adaptateur Cursor (pas moteur par cycle).
- Suivi d’exécution + Evidence/ReviewBundle utiles.
- Distinction SUCCESS / STOP / FAIL.
- Recovery **honnête**.
- Git comme vérité ; anti-claims de maturité.
- Réutilisation du backbone MVP.

### J.2 SHOULD target capability

- ProjectTrajectory **produit** (visible, replanifiable, pas seulement modeled/Memory).
- Capsule / historique de cycle exploitable.
- Durabilité Confirmation (ou requalify explicite sans execute silencieux).
- Intake documents/PJ/sources avec provenance (profondeur = D-PC-06).
- Autorités Cursor au-delà du read-only, **gated** (profondeur = D-PC-05).
- Lisibilité Evidence métier (remboursement UAT-UX-06).
- AMEND loop (G-UX-08) si toujours dans la cible UX.

### J.3 FUTURE / OPTIONAL

- Multi-user / IAM product-grade / Auth.js.
- CKC 15/15 détaillé + validation système (M7).
- Runtime v3 ADOPTED (M8).
- Merge / push / PR **natifs** comme classes d’effet courantes.
- Notion comme couche éditoriale (jamais SoT).
- FinOps produit profond ; observabilité RUN industrialisée.
- Tous les 15 types de cycle **prouvés** exécutables nativement (question M6, §U).
- Capitalisation CKC → méthode v2.6 externe (gate méthode distinct).

### J.4 OUT OF SCOPE (produit abouti **et** ce cycle)

Voir §K.

---

## K. Hors périmètre / non-objectifs

| Non-objectif | Pourquoi |
| --- | --- |
| Remplacer Git comme vérité | Doctrine / R12 |
| Arbitrage automatique / L5 global | Anti-L5 · R13/R14 |
| 15 moteurs Cursor spécifiques | PC-H · R6 |
| Commandes Cursor statiques par cycle | Cursor autonome sur le HOW |
| Architecture parallèle au backbone | R6 · décision Morris reuse |
| v2.6 comme doctrine runtime Studio | D-V3-02/03 |
| Migration générale des historiques | D7 |
| POC gratuits | R7 |
| Micro-hardening PRE-M6 non bloquant | PRE-M6 EXIT accepté · dette gouvernée |
| Adoption runtime automatique | V3-F15 |
| Notion comme SoT | Knowledge Layer v2.6 : Notion éditorial ; Git SoT |
| Automatisation des décisions Morris | Gouvernance |
| Restart from zero / rewrite M1–M5 | Décision Morris MVP |
| Concevoir stack / schema / APIs dans Cycle 1 | Hors GO |
| Figma / UX détaillée dans Cycle 1 | Cycle 4 conditionnel |
| Lancer M6/M7/Cycle 2 par ce document | Revue Morris requise |
| Stakeholders inventés | CKC |

---

## L. ExecutionContract / Cursor — cadrage fonctionnel seulement

**Doctrine acquise :** ExecutionContract Studio = contrat **natif structuré**. Export Markdown Cursor = **adaptateur**. Cursor reste autonome sur le HOW **dans l’enveloppe autorisée**.

### L.1 Informations métier / gouvernance qui doivent exister dans un contrat

Sans API, sans schema, sans TypeScript :

- rattachement **Project / Cycle / HumanDecision** (et Confirmation si requise) ;
- **action** métier (ce qui doit arriver) ;
- **cible** et **périmètre** (in / out) ;
- **sources** autorisées et fraîcheur attendue ;
- **autorité requise** et **capacités** d’effet (read / write / git / protected) ;
- **contraintes** et **stop conditions** (source absente, hors scope, chemin protégé, capacité insuffisante, Git incohérent) ;
- **preuves attendues** (quoi doit exister pour SUCCESS) ;
- **réversibilité** de l’effet ;
- **fenêtre** d’exécution gouvernée (besoin : bornée ; pas un timeout client inventé) ;
- statut du contrat (préparé / à confirmer / confirmé / exécutant / terminal) **lisible métier**.

### L.2 Expression sources / scope / stops / preuves / gates

L’utilisateur doit pouvoir répondre : *quoi est autorisé, quoi est interdit, quand s’arrêter, quoi produire, qui a dit oui*. Les IDs restent secondaires.

### L.3 Autorité bornée

Le contrat **déclare** l’enveloppe ; il **n’accorde pas** une classe supérieure. Escalade = nouvelle décision Morris, jamais automatique.

### L.4 Remontée SUCCESS / STOP / FAIL

| Sortie | Sens produit |
| --- | --- |
| SUCCESS | Preuves attendues disponibles **et** effet dans le périmètre |
| STOP gouverné | Condition de gouvernance (scope, source, cap, gate) — **décision** requise pour continuer |
| FAIL technique | Adapter / process / timeout / crash — **pas** un succès ; replay ou requalify |

### L.5 Rattachement

Un contrat sans Project, sans Decision lorsque l’effet est structurant, ou sans Evidence requirements, n’est pas un contrat produit abouti.

**État MVP :** contrat natif existe et est durable ; projection Cursor PREPARE-only (`executionAllowed=false`) ; REAL default OFF. **ADAPT** vers un contrat **générique** de projet, pas un second moteur.

**Interdit ici :** API, schema, interfaces TS, choix de moteur, prompt technique final.

---

## M. AgentCapability / authority envelope

Les classes d’effet **nécessaires au produit** ne sont **pas** toutes autorisées.

| Classe d’effet | Besoin produit | Gate candidat | Dans Product Completion initial ? |
| --- | --- | --- | --- |
| **read** | Comprendre le repo / sources | N1 · déjà prouvé M4 RO borné | **MUST** — KEEP preuve |
| **temporary generation** | Produire un artefact temporaire (rapport, projection) | N1–N2 | **MUST** besoin · pas d’auto-write Git |
| **local write** | Modifier des fichiers autorisés | N2 (N3 si irréversible / protégé) | **SHOULD** pour boucle générique · **pas** autorisé globalement |
| **commit** | Ancrer un résultat dans Git | N2–N3 + Morris si structurant | **SHOULD / FUTURE** — D-PC-05 |
| **push** | Publier une branche | N3 Morris | **FUTURE** sauf décision contraire |
| **PR** | Ouvrir une revue | N3 Morris | **FUTURE** sauf décision contraire |
| **merge** | Intégrer | N3 Morris only | **FUTURE** · quasi irréversible |
| **protected actions** | Secrets, doctrine, chemins protégés, delete critique | N3 Morris · fail-closed | **MUST** comme **refus par défaut** |

Aucune escalade automatique. Ack critique (N2/N3 / IAM) reste **DEFERRED** historiquement (D-M4-05) — dette à router, pas à rembourser ici.

---

## N. Sources / artefacts / pièces jointes

| Famille | Rôle | SoT ? | Cadrage |
| --- | --- | --- | --- |
| Contexte utilisateur (chat) | Intention, clarification | Non | Process-local aujourd’hui ; durabilité = décision |
| Fichiers / PJ | Preuve ou matière à analyser | Non (artefact métier) | **NEW** SHOULD · types MUST vs FUTURE = D-PC-06 |
| Documents projet versionnés | Cadrage, conception, etc. | Git | KEEP |
| Git | Vérité code/docs/preuves | Oui | KEEP |
| DoctrinePackage | Contexte doctrinal piné | Doctrine pinée | MUST pin · COMPLETE runtime package = plus tard |
| CKC | Guidance cognitive | Non (pas d’autorité) | KEEP usage actuel · 15/15 = M7 |
| Sources externes autorisées | Contexte borné | Selon autorisation | FUTURE / gated |
| Provenance / fraîcheur | Faire confiance sans fiction | Attributs V3-F07 | MUST concept |
| Rattachement Project / Cycle | Retrouver | Métadonnée d’état | MUST si intake in-scope |
| Outputs générés | Restitutions | Non | restitution ≠ SoT |

Règles : **artefact utilisateur ≠ doctrine** ; **restitution ≠ SoT**. Harvest possible de `17` (cinq couches) **sans** réactiver Excel/SQL comme doctrine ni D1 parallèle.

---

## O. Product Experience / UX — finalité seulement

**Contraintes doctrinales acquises :** conversation dominante ; Project ≠ Cycle ; LPS utile / vivant ; gates visibles ; Obs/Hyp/Option/Reco/Decision distincts ; IDs secondaires ; confirmations proportionnées.

**Besoins à cadrer (pas designer) :**

| Surface | Finalité |
| --- | --- |
| Home / Project | Lister, créer, reprendre |
| Trajectoire | Voir le chemin, pas un stepper d’implémentation |
| Cycle actif | Travailler le cycle sans le confondre avec le projet |
| Cycle history / capsule | Relire un cycle terminé |
| Decisions | Retrouver les arbitrages |
| Evidence | Comprendre le résultat |
| Artifacts | Voir les PJ/sources rattachées |
| Blockers / STOP | Agir sur un stop |
| Next action | Une phrase utile |
| Responsive | Usage local Morris (macOS) ; référentiel a11y à qualifier |
| Recovery | Honnêteté > magie |

PRE-M6 Visual Contract (Freeze `uUdLBElF2B4dOefaAYt4QY`) = **référence visuelle héritée**, pas le contrat visuel final Product Completion.

**Figma** = futur **Cycle 4** si trajectoire confirmée. **Aucune** mutation Figma ici.

---

## P. Durabilité / reprise

**Ne pas choisir la persistence.** Distinguer le besoin.

### P.1 Durabilité indispensable à l’autorité / truth (déjà largement KEEP)

Project · LPS · CycleInstance · HumanDecision · DecisionBasis · ExecutionContract · ExecutionAttempt · Evidence · ReviewBundle · liens factuels LPS.

Sans ces objets, l’autorité et la reprise **mentiraient**. Ils sont durables sur le Product Store existant (fait G0-B consommé — **rappel de contrainte de construction**, pas un nouveau choix de cadrage).

### P.2 Durabilité de confort / UX (ouverte)

| Objet | Besoin produit | État MVP | Classe cadrage |
| --- | --- | --- | --- |
| Conversation | Continuité de clarification | Process-local | Confort **sauf** si l’audit de qualification l’exige |
| Proposal | Reprendre une reco non décidée | Process-local | Confort + risque de re-qualifier |
| Confirmation | Ne pas perdre un « oui » pré-exécution | Memory / process-local | **Proche de l’autorité** (UAT-RECOVERY-03) — fail-closed aujourd’hui |
| ProjectTrajectory | Pilotage « où on va » | Memory | **Proche du pilotage** — SHOULD |
| Epistemic items | Mémoire Obs/Hyp/Option | Memory | SHOULD / FUTURE profondeur |
| Cycle history capsule | Relire un cycle | Ancres seulement | SHOULD |
| Journal M5-C | Sûreté launch REAL | TEMPORARY WITH EXIT · owner non enregistré | Dette V3-F10 · **pas** Product Store |

**Interruption / restart :** le produit abouti doit toujours **dire vrai** (ce qui est perdu est dit perdu). Rendre durable un objet de confort est une **décision** (D-PC-04), pas un bug du MVP.

---

## Q. Exigences non fonctionnelles candidates

Aucun seuil inventé. Chaque NFR = besoin + risque + moment de qualification + preuve future.

| NFR | Besoin | Risque | Quand qualifier | Preuve future |
| --- | --- | --- | --- | --- |
| Sécurité | Contrôler effets agents, chemins protégés, gates | Authority leak · contournement UI | Conception + sécu conditionnelle | Parcours STOP / refuse |
| Confidentialité | Minimiser contexte envoyé aux fournisseurs | Fuite projet / secrets | Conception / NFR sécu | Politique de contexte |
| Secrets | Jamais dans Evidence/chat/Git | Exposition | Déjà fail-closed partiel · à confirmer | `containsSecrets: false` + audit |
| Traçabilité | Relier intention → décision → contrat → preuve | Décision hors Git/état | Conception | Chaîne d’IDs secondaires + Git |
| Auditabilité | Relire a posteriori | Histoire inventée | Cycle history | Capsule + Evidence |
| Réversibilité | Arrêter / revert selon classe | Irréversible silencieux | AgentCapability | Taxonomie `34` projetée UX |
| Fiabilité | Boucle reproductible | Divergence fake/real | QA | Fixtures = frontière externe seulement |
| Restart-safety | Reprise honnête | Execute silencieux post-reload | Durability / QA | UAT-RECOVERY-03 |
| Accessibilité | UI métier utilisable | Exclusion / non-conformité | UX Cycle 4 | Référentiel choisi **alors** |
| Performance | Latence conversation / exec acceptable | UX bloquée · timeout mal lu | Pas de SLA maintenant | Observation ; `CURSOR_REAL_TIMEOUT_POLICY` OPEN |
| Coût / FinOps | Voir inducteurs (tokens, exec, stockage) | Coût opaque | Transverse · pas bloquant Cycle 1 | FinOps isolé KEEP/FREEZE lots |
| Maintenabilité | Réutiliser backbone | Rewrite / parallèle | Tous cycles | Classification KEEP/ADAPT |
| Observabilité | Diagnostiquer sans seconde vérité | Bruit / fuite | RUN conditionnel | Journal ≠ Product Store |
| Interopérabilité | Git, OpenAI, Cursor bornés | Lock-in / rupture | Conception / technique | Contrats d’adaptateur |
| Dépendance fournisseurs | OpenAI / Cursor | Indisponibilité | Risque structurant | Mode dégradé honnête |
| Rétention traces/contextes | Garder l’utile, pas tout le chat brut | RGPD / volume | Si conversation durable | Politique rétention |
| Sobriété | Assez de contexte, pas trop | Sur-contexte / sur-auto | Qualification continue | Anti-questionnaire |
| RGPD | Qualifier si données perso (opérateur unique aujourd’hui) | Traitement non cadré | Si multi-user ou rétention chat | Qualification · pas DPIA ici |

**RGPD maintenant :** opérateur unique Morris, usage local. Qualification **légère** : pas de persona fichier client. Si conversation durable ou multi-user → **requalifier**.

---

## R. Dette héritée (B-PC-DEBT)

**Ne pas rembourser dans ce cycle.**

| ID | État | Impact Product Completion | Cycle candidat | Condition de remboursement | Preuve future | Gate Morris |
| --- | --- | --- | --- | --- | --- | --- |
| **UAT-UX-06** | OPEN | Evidence trop technique | UX / Delivery UX | Evidence primaire métier, IDs secondaires | UAT/E2E sans IDs obligatoires | Si contrat de présentation change |
| **UAT-RECOVERY-03** | OPEN | Confirmation préparée absente après reload | Conception durabilité / M6 requalifié | Restore honnête ou requalify sans execute silencieux | Reload proof | Si Confirmation persistée |
| **V3-F10 / M5-C** | OPEN | Journal ≠ Product Store · owner absent | GO dédié post-conception | Safety equivalence + owner + retire ou KEEP restated | Morris GO journal | **Oui** (retirement) |
| **CONV-PL** | OPEN | Perte conversation | Cadrage→conception durabilité | Durable **si** in-scope | Restart-safe conversation | Si persistence conversation |
| **PROP-PL** | OPEN | Perte proposal | Idem | Durable **si** in-scope | Restart-safe proposal | Si persistence proposal |
| **CONF-PL** | OPEN | Perte confirmation · fail-closed | Durability / M6 | Restart-safe ou requalify | Reload + no silent execute | Si Confirmation durable |
| **N7-HID** | OPEN | Harness E2E faux négatif | QA Product Completion | Harness aligne IDs cachés | E2E aligné produit | Non (harness-only) |

**Non classé dette PRE-M6 :** CKC 15/15 · Cursor write/dev/commit/push/PR générique · boucle projet arbitraire complète · runtime v3 adoption.

Autres réserves **non bloquantes** à garder visibles : `CURSOR_REAL_TIMEOUT_POLICY` ; G-UX-08 AMEND ; Claims/Maturity Memory ; IAM/Ack ; D1/OPS1/execution-run **FREEZE** recommandés.

---

## S. Risques structurants

| ID | Risque | P | Impact | Mitigation cadrage | Gate |
| --- | --- | --- | --- | --- | --- |
| R-01 | Produit trop centré sur l’implémentation actuelle | M | Cible = slice figé | Intention vs solution · outcomes | Revue cible |
| R-02 | Reconstruction au lieu de réutilisation | M | Perte M1–M5 | KEEP backbone · R3 | Anti-restart |
| R-03 | Architecture parallèle | M | Dual-product | R6 · freeze D1/OPS1/execution-run | Si tentation rewrite |
| R-04 | UI cockpit trop complexe | M | Charge cognitive | Conversation dominante · IDs secondaires | Cycle 4 |
| R-05 | Questionnaire déguisé | M | Nora inutilisable | CKC anti-checklist · Composer libre | Conception |
| R-06 | Automatisation excessive | M | Contournement Morris | Anti-L5 · reco ≠ décision | Tous cycles |
| R-07 | Authority leak | M | Effet hors enveloppe | Classes d’effet + gates · pas d’auto-escalade | Sécu / HD |
| R-08 | Divergence fake/real | M | Fausse preuve | R21 · fixture = frontière externe | REAL GO distinct |
| R-09 | Seconde source de vérité | M | Git contourné | Restitution ≠ SoT · LPS dérivé | Conception |
| R-10 | History/persistence surdimensionnée | M | Usine à gaz | Distinguer truth vs confort | D-PC-04 |
| R-11 | Dépendance Cursor/OpenAI | H (fait) | Indispo / coût | Mode dégradé honnête · FinOps inducteurs | NFR |
| R-12 | Product scope trop large | H | Trajectoire infinie | MUST/SHOULD/FUTURE · 5–10 décisions | Revue périmètre |
| R-13 | Confusion Cycle vs Project | M | UX/doctrine cassée | CC-D13 · parcours 1/15/18 | Conception/UX |
| R-14 | Roadmap linéaire vs Trajectory dynamique | M | 15 étapes forcées | Types ≠ séquence obligatoire | D-PC-07 |
| R-15 | Dette héritée oubliée | M | Reprise PRE-M6 | B-PC-DEBT routée | Pas de micro-fix maintenant |
| R-16 | Exigence 15 cycles à M6 arbitraire | H si non tranchée | Scope explosion ou 15 moteurs | Options §U | D-PC-03 |

---

## T. Hypothèses et inconnues critiques

Inconnues **qui peuvent invalider le cadrage** si fausses. **Pas** un questionnaire de 40 items. **Pas** de résolution par invention.

| ID | Inconnue | Si fausse | Traitement |
| --- | --- | --- | --- |
| U-01 | Morris reste le seul opérateur cible à court terme | Gouvernance, IAM, RGPD, UX multi-user trop tôt ou trop tard | D-PC-02 |
| U-02 | Profondeur d’historique de cycle réellement utile (ancres vs capsule vs transcript) | Sur-persistence ou sous-mémoire | D-PC-04 + conception |
| U-03 | Types de PJ réellement critiques (docs projet vs binaires vs URLs) | Intake inutile ou trop large | D-PC-06 |
| U-04 | Autorité Cursor native du produit mature (RO vs write vs git) | Soit Studio reste un cockpit de lecture, soit fuites d’autorité | D-PC-05 |
| U-05 | Durabilité Conversation/Proposal nécessaire au succès produit | Confort vs audit | D-PC-04 |
| U-06 | M6 doit-il prouver 15 cycles exécutables ? | Scope M6 explosé | D-PC-03 |
| U-07 | M7 reste-t-il après M6 ? | CKC 15/15 mal placé (trop tôt / oublié) | D-PC-03 |
| U-08 | Critères de « produit abouti » (MUST de ce doc vs autre barre) | Trajectoire sans fin ou trop courte | D-PC-01 |
| U-09 | G-UX-08 AMEND est-il MUST UX ? | Parcours décision incomplet | Conception / UX |
| U-10 | Multi-user : concevoir maintenant ou seulement éviter les impasses ? | Refonte IAM tardive | D-PC-02 — recommandation : **préparer, ne pas livrer** |

**Hypothèses assumées pour ce candidat (explicites, révisables) :**

- H1 : la friction restante est la **généricité + lisibilité + continuité**, pas l’absence de backbone.
- H2 : un contrat **générique** + adaptateur unique bat 15 moteurs (doctrine `34` / PC-H).
- H3 : PRE-M6 UX est une **base** à adapter, pas à jeter.
- H4 : « produit abouti » ≠ runtime ADOPTED.

---

## U. M6 / M7 requalification

M6 et M7 **ne sont pas supprimés**. Rôles historiques **KEEP** comme descriptions Roadmap. Requalification = **options**, pas décision Morris.

### U.1 Question obligatoire

> **Tous les 15 cycles doivent-ils être exécutables nativement via Studio à la sortie M6 ?**

**Analyse (pas de réponse implicite) :**

- La doctrine v3 démarre par **intention** puis qualification dynamique (`36` Adapted/Replaced). Les 15 types sont une **cartographie**, pas une séquence obligatoire (Roadmap Product Completion lifecycle).
- Docs historiques 01/04/06 : couverture **progressive** ; pas d’obligation immédiate des 15 — **KEEP** ce principe, **REPLACE** le lien Option C.
- Prouver 15 exécutions natives à M6 force soit **15 moteurs** (interdit), soit **15 campagnes UAT** sur un même moteur générique (preuve lourde, pas la même chose que « exécutable »).
- Un moteur **générique gouverné** peut **héberger** n’importe quel type une fois le contrat et l’enveloppe prêts ; cela **≠** 15 types déjà exercés.
- CKC 15/15 (M7) est une **complétude cognitive**, distincte de l’exécutabilité native.

**Options pour la question 15-cycles-at-M6 :**

| Option | Contenu | Bénéfice | Risque |
| --- | --- | --- | --- |
| **15-A** | Oui : 15 types exécutables nativement = exit M6 | Complet | Scope explosion · confusion CKC vs exec · 15 moteurs |
| **15-B** | Non : M6 = boucle **générique** prouvée sur un sous-ensemble représentatif de types | Aligné doctrine · évite R-16 | Sous-couverture perçue |
| **15-C** | Non à M6 ; **critère ultérieur** (post-M7 ou Product Completion tardif) | Sépare cognitif / exécution | M7 mal lu comme « tout est exécutable » |

**Recommandation défendable : 15-B** (générique + sous-ensemble représentatif). **Pas** une décision Morris.

### U.2 Options M6 / M7

#### OPTION 1 — KEEP

M6 reste « boucle projet complète » proche de la définition actuelle (conv → … → next step). M7 reste CKC 15/15 post-M6.

- **Bénéfices :** continuité Roadmap ; peu de rewording.
- **Risques :** M6 absorbe UX, durabilité, artefacts, autorités **et** la boucle générique → scope fourre-tout ; question des 15 cycles reste collée à M6.
- **Dépendances :** Cycle 1+conception avant tout Delivery M6.
- **Impact Roadmap :** mineur.
- **Dette :** B-PC-DEBT toujours hors M6 auto-close.
- **Preuve :** parcours e2e restart-safe (définition historique).
- **Décision Morris :** D-PC-03.

#### OPTION 2 — RECUT

M6 = **capacité générique d’exécution gouvernée** (contrat natif générique, adaptateur Cursor unique, STOP/FAIL, Evidence→Nora→LPS→next), **indépendante du nombre de cycles**. M7 = **complétude cognitive CKC 15/15**.

- **Bénéfices :** sépare exécution générique et cognitif ; répond 15-B ; évite 15 moteurs ; aligne PC-G/H/I/J/K.
- **Risques :** « M6 complete » mal lu comme produit abouti (UX/artefacts/history encore ouverts).
- **Dépendances :** conception du contrat générique + enveloppe d’autorité.
- **Impact Roadmap :** rewording M6 exit après décision Morris (prochain update Roadmap — **pas ce cycle**).
- **Dette :** UX/durabilité/PJ restent Product Completion **autour** de M6, pas silently in M6.
- **Preuve :** une boucle générique documentée sur ≥1 type, plus un second type distinct si utile, **sans** exiger 15.
- **Décision Morris :** D-PC-03.

#### OPTION 3 — REPOSITION

Certaines capacités Product Experience / project management / durability deviennent des **étapes explicites** avant ou autour de M6/M7 (ex. conception+UX+durability **puis** M6 générique **puis** M7 CKC).

- **Bénéfices :** évite que M6 soit un dump ; rend visibles UX et reprise.
- **Risques :** inflation de milestones ; confusion milestone construction vs cycle projet.
- **Dépendances :** ProjectTrajectory candidate (§X) déjà dans ce sens.
- **Impact Roadmap :** plus fort (noms/ordre).
- **Dette :** routée par cycle, pas par « M6 magic ».
- **Preuve :** chaque étape a un outcome utilisateur.
- **Décision Morris :** D-PC-03.

### U.3 Recommandation (non décidée)

**OPTION 2 (RECUT) + séquencement de type OPTION 3 via la ProjectTrajectory** (conception / archi fonctionnelle / UX / backlog **avant** toute Delivery d’une boucle générique appelée M6). M7 **reste après** une M6 requalifiée, comme complétude CKC — **pas** un blocker du cadrage.

M8 reste adoption / runtime ADOPTED — **hors** Product Completion initial.

---

## V. Critères de succès produit

Aucun seuil arbitraire. Observables.

### V.1 Succès Cycle 1 (ce document)

- Intention distincte de la solution.
- Problème / valeur requalifiés vs MVP.
- Utilisateur primaire / stakeholders **sans invention**.
- Périmètre / hors scope explicites.
- Carte de capacités exploitable.
- Parcours macro couverts.
- NFR identifiées sans SLA inventés.
- Dettes héritées routées.
- Risques et inconnues visibles.
- M6/M7 analysés en options.
- ProjectTrajectory **candidate**.
- Décisions Morris listées (regroupées).
- Prochain cycle **recommandé**, non autorisé.

### V.2 Succès Product Completion (cible, pas claim actuel)

- Un Project peut être créé, compris, piloté, repris.
- Nora peut qualifier et accompagner un cycle.
- Morris prend des décisions explicites.
- Trajectoire exploitable et replanifiable.
- ExecutionContract intelligible et gouverné.
- Exécution Cursor possible **selon capabilities autorisées**.
- STOP/FAIL ne deviennent pas des succès silencieux.
- Evidence / ReviewBundle utiles.
- Cycle history et project history exploitables au niveau décidé.
- Reprise honnête.
- Artefacts/sources traçables **si** in-scope.
- Dette visible.
- UX métier compréhensible.
- Aucune architecture parallèle.
- Runtime v3 adoption **toujours séparée** de l’implémentation.

---

## W. Critères de sortie Cycle 1

Le cadrage peut être **recommandé prêt à décision** (et l’est, comme candidat) si les critères V.1 tiennent.

**Interdit :** « Cadrage validé » avant revue Morris.

**Maturité CKC estimée :** `suffisante_pour_decider` — périmètre + succès + inconnues listées ; **pas** `prete_a_borner` au sens « Cycle 2 ouvert ».

---

## X. ProjectTrajectory candidate

**Statut : RECOMMENDATION jusqu’à décision Morris.** Pas 15 étapes imposées.

Point de départ :

```text
MVP ON MAIN (PR #361 / vérité #362)
  → Cycle 1 Cadrage (ce cycle, candidate)
```

| Étape candidate | Nécessité | Entrée | Sortie | Dépendance | Décision Morris | Preuve attendue |
| --- | --- | --- | --- | --- | --- | --- |
| **C1 Cadrage** | Nécessaire | MVP + doctrine v3 + dette | Cible / scope / options | GO actuel | Revue de **ce** document | Ce fichier + handoff |
| **C2 Conception fonctionnelle** | **Nécessaire** si usages MUST/SHOULD à détailler | Cadrage décidé | Comportements, règles, parcours détaillés **sans** UI | C1 accepté | GO Cycle 2 | Docs conception Product Completion (futurs) |
| **C3 Architecture fonctionnelle** | **Nécessaire** pour frontières Project/Nora/contrat/preuves **après** comportements | Conception | Blocs logiques, flux, non-stack | C2 | GO C3 | Archi fonctionnelle **delta** vs backbone |
| **C4 UX/UI** | **Conditionnel / probable** — surface conversationnelle est centrale | C2/C3 + harvest PRE-M6 | Contrat visuel Product Completion | C2 a minima | GO Figma/UX | Figma + comparaison runtime **plus tard** |
| **C5 Backlog** | **Nécessaire** avant Delivery | C2–C4 selon besoin UX | Tranches capacité, pas tickets orphelins | C2 | GO backlog | Slices e2e |
| **C6 Architecture technique** | **Conditionnel** — G0-A/G0-B **déjà consommés** | Écarts vs backbone | Delta technique, **pas** restart | C3 | GO technique | ADR delta · pas second store « par habitude » |
| **Intégration / DevOps** | Conditionnel | Si CI/preuve l’exige | Pipeline borné | Existant Studio CI | Si gap réel | CI existante KEEP |
| **Delivery / implémentation** | Nécessaire **par tranches de capacité** | Backlog + GO | Capacités e2e | Conception | GO par tranche · M6 Delivery **séparé** | Preuve utilisateur |
| **QA / validation** | Nécessaire par tranche | Delivery | UAT/E2E · dettes | Delivery | Acceptation | Dont UAT-UX-06 / recovery |
| **Sécurité / RSSI** | Conditionnel | Si write/git/IAM | Contrôles | AgentCapability | GO sécu | Threat/contrôles **alors** |
| **Release** | Conditionnel | Si distribution | — | M8 plutôt | — | Hors initial |
| **Observabilité / RUN** | Conditionnel | Si exploitation | — | M8 | — | Journal ≠ Product |
| **PR readiness / post-merge / capitalisation** | **Transverse** chaque intégration | Diff | Handoff / Roadmap update | Git | GO commit/push/PR **distincts** | Process v2.6 externe |

**Cycles nécessaires maintenant (candidate) :** C1 (ici) → C2.

**Conditionnels :** C4 selon besoin visuel ; C6 seulement en **delta** ; sécu/release/RUN selon autorités réellement visées.

**Transverses :** PR readiness, post-merge, capitalisation, honesty rails.

M6 (si OPTION 2) = **jalon de capacité** « boucle générique gouvernée », pas un 8ᵉ type de cycle forcé. M7 = jalon CKC, pas un cycle UX.

---

## Y. Next-cycle options

| Option | Contenu | Quand elle gagne | Risque |
| --- | --- | --- | --- |
| **A — Cycle 2 Conception fonctionnelle** | Détailler comportements MUST/SHOULD, règles, parcours, ExecutionContract générique **fonctionnel**, durabilité comme besoin, artefacts comme règles | Usages encore trop gros pour architecturer ; CKC : « usages à détailler → conception » | Mini-conception trop technique |
| **B — Architecture fonctionnelle avant conception détaillée** | Blocs et frontières d’abord | Si le cadrage avait déjà des comportements stables — **ce n’est pas le cas** pour EC générique, PJ, trajectory produit, STOP métier | Structurer trop tôt l’existant slice |
| **C — UX/UI anticipée** | Explorer visuellement parce que le besoin utilisateur ne serait pas cadrable | Si Morris ne pouvait pas se représenter Home/LPS/conversation | Figma trop tôt · PRE-M6 existe déjà comme référence · Cycle 4 prévu |

**Recommandation argumentée : A.**

Raisons : (1) CKC Cadrage → Conception si usages à détailler ; (2) les gaps MUST (contrat générique, STOP, trajectoire, capsule, PJ, durabilité Confirmation) sont des **comportements**, pas d’abord des modules ; (3) une archi fonctionnelle maintenant recoderait le backbone ; (4) l’UX n’est pas le goulot de **compréhension** — PRE-M6 + outcomes suffisent à cadrer ; Figma reste Cycle 4 ; (5) `08` historique est harvest, pas spec active (Option C SUPERSEDED).

**A n’est pas auto-sélectionné.** Morris tranche D-PC-08.

---

## MORRIS DECISIONS REQUIRED

Maximum structurant. Git a déjà répondu au reste.

### D-PC-01 — Cible et périmètre Product Completion

- **Contexte :** MUST/SHOULD/FUTURE/OOS de ce document vs barre « produit abouti » (U-08).
- **Options :** (i) accepter la carte J/K ; (ii) resserrer (ex. PJ FUTURE, write FUTURE) ; (iii) élargir (ex. 15 exec natives, multi-user).
- **Recommandation :** (i) carte J/K.
- **Impact :** borne toute la trajectoire.
- **Invariant :** MVP réutilisé ; v3 exclusive ; runtime non adopté.

### D-PC-02 — Opérateur cible

- **Contexte :** U-01 / U-10.
- **Options :** (i) Morris seul à court terme, évolutivité sans delivery multi-user ; (ii) concevoir multi-user maintenant ; (iii) geler multi-user y compris evolutivité.
- **Recommandation :** (i).
- **Impact :** IAM/RGPD/UX.
- **Invariant :** Morris reste L0 même si (ii).

### D-PC-03 — Pack M6 / M7 / 15 cycles à M6

- **Contexte :** §U.
- **Options :** OPTION 1 KEEP · OPTION 2 RECUT · OPTION 3 REPOSITION ; et 15-A / 15-B / 15-C.
- **Recommandation :** OPTION 2 + 15-B ; M7 après M6 requalifiée ; séquence conception/UX **autour** (esprit OPTION 3) sans renommer toutes les milestones maintenant.
- **Impact :** exit proof M6 ; Roadmap (update **ultérieur**).
- **Invariant :** M6/M7 non supprimés ; M6 Delivery **pas** autorisée par cette décision seule.

### D-PC-04 — Profondeur de durabilité Product Completion initial

- **Contexte :** P.2 · CONV/PROP/CONF · Trajectory · UAT-RECOVERY-03.
- **Options :** (i) truth-only (KEEP actuel + recovery honnête) ; (ii) truth + Confirmation + Trajectory ; (iii) (ii) + Conversation/Proposal.
- **Recommandation :** (ii) comme SHOULD ; (iii) si Morris juge la continuité de Nora MUST.
- **Impact :** conception / éventuellement C6 delta — **pas** un choix SQLite ici.
- **Invariant :** jamais inventer une conversation perdue ; fail-closed si Confirmation absente.

### D-PC-05 — Enveloppe Cursor native initiale

- **Contexte :** §M · U-04.
- **Options :** (i) read + temporary generation seulement ; (ii) + local write gated ; (iii) + commit ; (iv) + push/PR/merge natifs.
- **Recommandation :** (ii) comme cible initiale ; (iii) SHOULD ; (iv) FUTURE.
- **Impact :** sécu, Ack, REAL GOs futurs.
- **Invariant :** aucune classe n’est autorisée globalement ; REAL reste GO distinct.

### D-PC-06 — Artefacts / PJ / sources

- **Contexte :** §N · U-03.
- **Options :** (i) Git + docs projet + DoctrinePackage seulement ; (ii) + PJ utilisateur bornées ; (iii) + sources externes.
- **Recommandation :** (i) MUST ; (ii) SHOULD ; (iii) FUTURE gated.
- **Impact :** Nora contexte ; RGPD/rétention si (ii)/(iii).
- **Invariant :** artefact ≠ doctrine.

### D-PC-07 — ProjectTrajectory candidate

- **Contexte :** §X.
- **Options :** (i) accepter C1→C2→C3→(C4)→C5→(C6 delta)→delivery par tranches ; (ii) compresser (ex. C2+C3) ; (iii) imposer 15 cycles projet.
- **Recommandation :** (i).
- **Impact :** planning réel.
- **Invariant :** types de cycle disponibles ≠ 15 étapes obligatoires.

### D-PC-08 — Prochain cycle

- **Contexte :** §Y.
- **Options :** A Conception fonctionnelle · B Architecture fonctionnelle · C UX/UI anticipée.
- **Recommandation :** **A**.
- **Impact :** prochain GO.
- **Invariant :** aucun Cycle 2 sans GO explicite ; pas de Delivery.

---

## Matrice de réutilisation des anciens actifs

Les docs **04–07 ne deviennent pas** une deuxième doctrine active.

| Actif | Statut historique | Valeur actuelle | Classe | Traitement Product Completion |
| --- | --- | --- | --- | --- |
| `04` detailed product framing | Validé D-VAL-9 · Option C | Friction, Morris, Git, gates | **HARVEST** / **REPLACE** Option C | Relu · non recopié · non réécrit |
| `05` capabilities/use cases | C1–C16 cibles | Beaucoup encore vrais (qualification, contrat, suivi, preuves) | **HARVEST** / **ADAPT** | Mapper vers domaines §H · retirer POC/Option C |
| `06` scope/success | Produit≠POC≠MVP | Distinctions utiles · MVP désormais défini | **HARVEST** / **REPLACE** MVP/POC | NFR candidates KEEP esprit |
| `07` trajectory/decision pack | Trajectoire P0/POC | Historique consommé | **FREEZE** / **HARVEST** gates | Ne pas relancer POC |
| `01` opportunity/vision | Pré-cadrage | Problème de plateforme | **HARVEST** | Vision réécrite v3 dans §F |
| `08`–`09` conception/flux | Validés 2026-07-18 | Parcours F1–F12 harvestables | **HARVEST** / **ADAPT** | Reconception Product Completion au Cycle 2 · pas spec active |
| `16`–`17` v3 journeys / info arch | Candidats | Patron parcours · 5 couches | **HARVEST** | Sans Excel/SQL doctrine · sans v2.6 SoT |
| v3 framing `30`–`37` | Doctrine VALIDATED | Destination produit | **KEEP** | Cible · runtime non adopté |
| Convergence Build Doctrine | VALIDATED construction | R1–R21 | **KEEP** | Non modifiée |
| Convergence Roadmap | ACTIVE construction | PC-A…N · M6/M7 · B-PC-DEBT | **KEEP** + metadata pré-#362 **ignorée** | Non micro-fixée ici |
| M1→M5 backbone | CLOSED/MERGED | MVP | **KEEP** | Réutiliser |
| PRE-M6 UI | EXIT accepté + dette | ProductShell / conversation | **KEEP** / **ADAPT** | Pas rouvert |
| OpenAI provider | Implémenté | Nora live possible | **KEEP** | **ZERO LIVE** ce cycle |
| Cursor bounded REAL gateway | M4 CLOSED · default OFF | Preuve RO | **KEEP** | **ZERO REAL** ce cycle · futur GO |
| Evidence / ReviewBundle | M5 ON MAIN | Preuve + reco | **KEEP** / **ADAPT** lisibilité | UAT-UX-06 |
| History / Recovery | PRE-M6 | Honnêteté | **KEEP** / **COMPLETE** selon D-PC-04 | UAT-RECOVERY-03 |
| ExecutionContract courant | M3 durable · PREPARE-only | Natif existant | **KEEP** / **ADAPT** générique | Pas second contrat |
| Project / LPS | M1 durable | Socle | **KEEP** / **ADAPT** utilité | Contenu doctrinal `32` progressivement |
| CycleInstance / CKC binding | M2 | Qualification réelle | **KEEP** | Proposal process-local = dette |
| HumanDecision / DecisionBasis | M3 | Autorité | **KEEP** | Confirmation Memory = dette |
| ProjectTrajectory modeled/Memory | T-A2 | Besoin réel | **COMPLETE** produit | Pas persistence choisie ici |
| DoctrinePackage types | T-A0 | Pin partiel | **KEEP** / **COMPLETE** later | M7 pour 15/15 |
| D1 / OPS1 UI / execution-run | Parallèles | Harvest OPS1 Cursor déjà classé | **FREEZE** / **HARVEST** déjà | Pas de nouvelle harvest inventée |
| FinOps OA | Isolé | Inducteurs | **KEEP** isolé / **FREEZE** lots | Transverse |

---

## Inventaire MVP actuel (lecture cadrage)

**Surfaces utilisateur actuelles (PRE-M6 Option A — KEEP/ADAPT) :**

- `/studio` — home projets (`ProductShell` + `ProjectsPage`)
- `/studio/projects/new` — intention / création
- `/studio/projects/[id]` — workspace : conversation dominante, LPS, history, recovery

**Surfaces historiques encore présentes dans l’app** (`/`, `/workspace`, `/cycle-actif`, `/decision`, `/synthese`, `/projects/*`, `/ops1/*`, `/nouvelle-demande`) : **FREEZE / RETIRE LATER** recommandés — **pas** de retraite dans ce cycle.

| Brique | Présent ? | Durabilité | Classe |
| --- | --- | --- | --- |
| Project / LPS | Oui | Product SQLite | KEEP |
| Nora / conversation | Oui | Process-local | KEEP surface · durabilité ouverte |
| Qualification F2 | Oui | Cycle SQLite · Proposal process-local | KEEP / COMPLETE proposal |
| Proposal / Recommendation | Oui | Process-local / Recommendation-only | KEEP rails · durabilité ouverte |
| HumanDecision | Oui | Product SQLite | KEEP |
| DecisionBasis | Oui (embarqué HD) | Avec HD | KEEP |
| ExecutionContract | Oui natif | Product SQLite | KEEP / ADAPT générique |
| Confirmation | Oui concept + UI | Memory / process-local | KEEP concept · COMPLETE si D-PC-04 |
| ExecutionAttempt | Oui | Product SQLite | KEEP |
| Evidence / ReviewBundle | Oui | Product SQLite · remount UI | KEEP / ADAPT UX |
| History / Recovery | Oui ancres + honesty | Durable facts only | KEEP / ADAPT capsule |
| OpenAI provider | Oui | N/A | KEEP · unused this cycle |
| Cursor REAL gateway | Oui, default OFF | Journal M5-C temporaire | KEEP · ZERO REAL ici |
| ProjectTrajectory | Types + use cases | **Memory** | COMPLETE produit |
| Epistemic | Types | **Memory** | ADAPT / FUTURE profondeur |
| DoctrinePackage / CKC runtime | Pin/digest + resolver Memory | Partial | KEEP / FUTURE M7 |
| Artefact / PJ intake | **Non** produit | — | NEW SHOULD |
| Capability enforcement | RO borné + T-A7 | Local Morris TEMPORARY WITH EXIT | KEEP / NEW classes gated |

Absence d’une capacité future **≠** bug.

---

## Explicit non-claims (rappel de clôture documentaire)

- Pas de cadrage validé.
- Pas de scope / trajectory adopted.
- Pas de Cycle 2 / M6 / M7 autorisés.
- Pas de runtime v3 ADOPTED.
- Pas d’architecture technique, stack, persistence, schema.
- Pas d’UX détaillée ni Figma.
- Pas de backlog détaillé.
- Pas de Delivery, REAL, OpenAI live.
- Pas de commit / push / PR / merge projet.
- Pas de modification Doctrine / Roadmap / method / app.
- Options M6/M7 et next cycle = **recommandations**.

---

## Gate suivant

```text
MORRIS REVIEW — SFIA STUDIO PRODUCT COMPLETION CYCLE 1 CADRAGE
— DECIDE PRODUCT TARGET / SCOPE / TRAJECTORY / NEXT CYCLE
— NO CONCEPTION OR DELIVERY UNTIL EXPLICIT GO
```

---

*SFIA Studio — Product Completion — Cycle 1 Cadrage — CANDIDATE — AWAITING MORRIS REVIEW / DECISION — Morris décide.*


---

## 10. Synthèse exploitable (ne remplace PAS le contenu §9)

### Classification des actifs
Voir matrice dans le cadrage : 04–07 HARVEST/REPLACE Option C · v3 30–37 KEEP cible · Build Doctrine/Roadmap KEEP construction · M1–M5 KEEP · PRE-M6 KEEP/ADAPT · OpenAI/Cursor gateway KEEP · Trajectory Memory COMPLETE produit · PJ NEW SHOULD.

### Capability map
Domaines requalifiés PC-A…PC-N : Project, Nora, Qualification, Knowledge, LPS, Trajectory, Decision, ExecutionContract, AgentCapability, Cursor adapter, Execution lifecycle, STOP/FAIL, Evidence, Cycle history, Artifacts, Recovery, Product Experience, Governance.

### Scope
MUST = Project/LPS/Nora/HD/EC natif/Evidence/STOP-FAIL/recovery honnête/reuse MVP.
SHOULD = Trajectory produit, capsule, Confirmation durable ou requalify, PJ, write gated, Evidence métier, AMEND.
FUTURE = multi-user, CKC 15/15, runtime ADOPTED, push/PR/merge natifs, Notion.
OUT OF SCOPE = remplacer Git, L5, 15 moteurs, parallèle, v2.6 runtime, POC gratuits, micro-hardening PRE-M6, auto-adoption, auto-décision Morris.

### User journeys
18 parcours macro fonctionnels (créer → cycle suivant), non visuels.

### NFR
Identifiées sans seuils (sécu, confidentialité, secrets, traçabilité, audit, réversibilité, fiabilité, restart-safety, a11y, perf, FinOps, maintenabilité, observabilité, interop, fournisseurs, rétention, sobriété, RGPD qualification légère).

### Dettes
B-PC-DEBT intégralement routée, non remboursée.

### Risques
R-01…R-16 (reconstruction, parallèle, authority leak, 15-cycle arbitraire, etc.).

### Inconnues
U-01…U-10 (opérateur, history depth, PJ, autorité Cursor, durabilité conv, 15-at-M6, M7, barre « abouti », AMEND, multi-user evolutivité).

### M6/M7 options
OPTION 1 KEEP · OPTION 2 RECUT · OPTION 3 REPOSITION.
Recommandation : OPTION 2 + séquence type OPTION 3 via ProjectTrajectory.
15-cycles-at-M6 : 15-A/B/C · recommandation **15-B** (générique + sous-ensemble représentatif) · **pas** décision.

### ProjectTrajectory candidate
MVP → C1 → C2 conception → C3 archi fonctionnelle → C4 UX conditionnel → C5 backlog → C6 technique **delta** → delivery par tranches. M6 = jalon capacité générique si OPTION 2.

### Morris Decisions Required
D-PC-01 cible/périmètre · D-PC-02 opérateur · D-PC-03 M6/M7/15 · D-PC-04 durabilité · D-PC-05 enveloppe Cursor · D-PC-06 PJ · D-PC-07 trajectory · D-PC-08 next cycle.

### Next-cycle options + recommandation
A Conception fonctionnelle · B Archi fonctionnelle · C UX anticipée.
**Recommandation : A.** Non autorisé.

---

## 11. git diff --check / staged

- tracked `git diff --check` : clean
- livrable untracked `git diff --check --no-index` : pas d'issues whitespace
- **Staged projet : EMPTY**

---

## 12. ZERO REAL

- Studio non démarré
- OPENAI_LIVE_CALL_COUNT = 0
- CURSOR_REAL_PRODUCT_PROCESS_COUNT = 0
- Preuves REAL historiques citées uniquement comme evidence existante (M4 RO)

---

## 13. Actions réalisées

- date + git fetch origin main / handoff / rebaseline / pre-m6
- Git truth check (main, PR #362, CI, branches préservées, blob handoff)
- création branche locale `docs/sfia-studio-product-completion-c1-cadrage` depuis `origin/main`
- lecture doctrine construction, roadmap, v3 30–37, historiques 01/04–07, harvest 08/09/16/17, processus v2.6, CKC, inventaire MVP
- création de `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- Review Pack FULL (ce fichier) avec contenu complet du cadrage
- publication Review Handoff L3 (après ce pack)

---

## 14. Actions NON réalisées

- git add / commit / push branche projet
- gh pr create / merge / delete branch / force push / rebase / amend / reset --hard / git clean
- modification Build Doctrine, Roadmap, framing v3, docs 01–09, app, method, prompts, schemas, migrations
- architecture technique / stack / persistence / schema
- UX détaillée / Figma
- backlog détaillé
- Delivery / M6 / M7 / Cycle 2
- OpenAI LIVE / Cursor REAL produit
- remboursement dette
- invention de décision Morris

---

## 15. Verdict

PASS — SFIA STUDIO PRODUCT COMPLETION CYCLE 1 CADRAGE PREPARED — CURRENT MVP REUSED AS BASELINE — PRODUCT INTENT / USERS / VALUE / TARGET CAPABILITIES / SCOPE / OUT-OF-SCOPE / MACRO JOURNEYS / NFR / GOVERNANCE / INHERITED DEBT / RISKS / UNKNOWNS QUALIFIED — HISTORICAL ASSETS CLASSIFIED — M6/M7 REQUALIFICATION OPTIONS PREPARED — CANDIDATE PROJECT TRAJECTORY PREPARED — MORRIS DECISIONS REQUIRED IDENTIFIED — NEXT-CYCLE OPTIONS + RECOMMENDATION PREPARED — RUNTIME V3 NON ADOPTED — ZERO REAL — NO DELIVERY — NO PROJECT COMMIT/PUSH/PR — READY FOR MORRIS CADRAGE REVIEW

**Non-claims :** CADRAGE VALIDATED · SCOPE ADOPTED · TRAJECTORY ADOPTED · READY FOR DELIVERY · CYCLE 2 AUTHORIZED — **non utilisés**.

---

## 16. Next gate

```text
MORRIS REVIEW — SFIA STUDIO PRODUCT COMPLETION CYCLE 1 CADRAGE
— DECIDE PRODUCT TARGET / SCOPE / TRAJECTORY / NEXT CYCLE
— NO CONCEPTION OR DELIVERY UNTIL EXPLICIT GO
```
