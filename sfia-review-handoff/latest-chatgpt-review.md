# ChatGPT Review Pack — FULL

## PRE-M6 G-UX-15 EXIT-PROOF ACCEPTANCE CAPITALIZATION + ROADMAP SYNC

**Timestamp (Europe/Paris):** 2026-08-15 16:07:37 CEST

**Mode:** FULL
**Cycle:** Cycle 15 — Capitalisation / REX
**Profile:** Capitalization + Critical
**Typology:** DOC
**Primary:** V3-F05 · Supporting V3-F14 / V3-F15 / V3-F10

---

### 1. Timestamp
2026-08-15 16:07:37 CEST

### 2. Exact Morris acceptance GO
```
GO MORRIS — ACCEPT G-UX-15 SLICE A EXIT PROOF — G-UX-15 TECHNICAL APPLICATION-WIRING BLOCKER CLOSED — KEEP CONFIRMATION PROCESS-LOCAL RESERVE — FIXTURE-SAFE PROOF ACCEPTED AS TECHNICAL PROOF ONLY — PREPARE CONTROLLED INTEGRATION / CAPITALIZATION + ROADMAP SYNC — NO FIGMA YET — NO UI DELIVERY — NO M6 — ZERO REAL
```

### 3. Cycle 15 / Capitalization + Critical / DOC
Capitalizes Morris-accepted G-UX-15 exit proof into Pre-M6 baseline + Convergence Roadmap. Critical because incorrect capitalization could falsely authorize Figma/UI Delivery/M6 or claim product E2E.

### 4. Initial Git Truth
- Branch: `feat/sfia-studio-pre-m6-gux15-slice-a`
- HEAD / origin/main: `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7`
- Remote feat: ABSENT
- Incoming handoff: `ec456dafd441825263df3638105efab520946073` / blob `1fb9a2e82dc2df7bf872103a1f78c0fd0932149f`
- Staged empty · REAL unset
- Pre-cycle delta: Slice A files + Pre-M6 baseline (Roadmap unmodified before this cycle)

### 5. Incoming accepted handoff
Commit `ec456dafd441825263df3638105efab520946073` · blob `1fb9a2e82dc2df7bf872103a1f78c0fd0932149f`

### 6. Mandatory sources
Process + CKC cognitive + Build Doctrine + Roadmap + v3 30/34/35/37 + Pre-M6 baseline + accepted handoff FULL.

### 7. Accepted Slice A integrity — UNCHANGED
Explicit statement: local Slice A resolver / test / index.ts diff **MATCHED** accepted handoff content and were **NOT MODIFIED** in this cycle.

SHA-256:
- resolveM3ExecutionContract.ts: `2c3634caa9489f2dfc576745f049ea1384f39a0b7e60489d22d434c1c6e21e09`
- gux15.resolveM3ExecutionContract.test.ts: `38685bbf9440ce06752a26ed156376fa15ea3baf621001f86dc822e35a288570`
- index.ts: `3692ffdc536e1101f17ffdd50af2137b152bbec764a2594aeb208a8831e0d194`

Preserved accepted evidence (not re-run this DOC cycle): 5 files / 50 tests PASS · typecheck PASS · eslint clean · externalEffects=false · REAL=0 · Gate D=0.

### 8–9. G-UX-15 accepted status
- Exit proof: **ACCEPTED BY MORRIS**
- Technical application-wiring blocker: **CLOSED**
- Fixture-safe proof: **ACCEPTED AS TECHNICAL PROOF ONLY**
- Product/browser/UI E2E: **STILL PENDING**
- Local candidate: **NOT YET ON MAIN**

### 10. Confirmation process-local reserve
Memory / process-local · **KEEP RESERVE FOR NOW** · NON-BLOCKING for accepted technical exit · ≠ restart-safe Confirmation · exit trigger = future UAT/product proof of unsafe ambiguity.

### 11. COMPLETE updated Pre-M6 artifact
```markdown
# SFIA Studio — Qualification pré-M6 du parcours utilisateur / référentiel UX

| Champ | Valeur |
|---|---|
| Statut | **BASELINE FONCTIONNELLE PRÉ-M6 ADOPTÉE PAR MORRIS — READINESS FIGMA / DELIVERY NON ACQUISE — GAPS OUVERTS** |
| Rôle | Artefact de baseline fonctionnelle pré-M6 + readiness consolidée des écarts G-UX-01→15 |
| Cycle | Cycle 2 — Conception fonctionnelle · CONTINUATION / DÉCISION + GAP READINESS |
| Profil / typologie | Critique · DESIGN / DOC / AUDIT / DECISION READINESS |
| Capacité principale | V3-F05 — conversation → décision → exécution |
| Capacités complémentaires | V3-F02 · V3-F14 · V3-F15 |
| Base Git | `origin/main@2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` |
| Jalon | RÉFÉRENTIEL PRÉ-M6 DU PARCOURS UTILISATEUR / UX |
| Acteur produit | Morris / pilote du projet |
| Autorité de livraison | **AUCUNE** — aucune UI Delivery, aucun Figma, M6, Cursor REAL ni changement d’exécution |
| Décision Morris consommée | Timeline : D-PRE-M6-UX-01/02/03 ADOPT ; **historique** D-PRE-M6-UX-04 = REQUALIFY → SELECT SLICE A → AMEND → FINAL AMEND ; **GO ACCEPT G-UX-15 SLICE A EXIT PROOF** (consommé) — technical blocker **CLOSED** ; D-PRE-M6-UX-05 NO DECISION YET |

## 1. Périmètre et conclusion de la qualification

Ce document est la **baseline fonctionnelle pré-M6 adoptée par Morris** pour le parcours utilisateur M1→M5, l’architecture fonctionnelle de l’information et le principe de réutilisation UI. Il conserve l’audit complet antérieur et y ajoute la readiness consolidée pré-Figma des écarts G-UX-01→15.

L’exécution actuelle démontre les capacités requises sur M1→M5. Le chemin durable M3 PREPARE demeure l’audit anchor ; **Slice A** fournit le bridge applicatif `resolveM3ExecutionContract` (successeur résolu via supersession existante). **G-UX-15 = SLICE A EXIT PROOF ACCEPTED BY MORRIS — TECHNICAL APPLICATION-WIRING BLOCKER CLOSED — FIXTURE-SAFE TECHNICAL PROOF ACCEPTED — PRODUCT/BROWSER E2E STILL PENDING**. Preuve fixture-safe = **preuve technique uniquement** (≠ product/browser E2E). Figma / UI Delivery / M6 restent non autorisés. Candidat **local / NOT YET ON MAIN**.

La Conversation et la Proposal restent locales au processus. Morris a **accepté** cette limite pour le **premier test utilisateur fonctionnel borné uniquement**. La future UX doit être honnête sur le redémarrage/la reprise, récupérer depuis l’état durable du projet, requalifier si nécessaire, et ne jamais fabriquer un contexte de travail perdu. Ceci n’autorise aucune nouvelle persistance.

L’interface utilisateur existante ne forme pas un produit cohérent unique. Elle comprend :

1. une tranche verticale `/studio/projects/[id]` adossée à OA, disposant du câblage M1→M5 le plus utile, mais utilisant un vocabulaire d’implémentation et une projection technique dense ;
2. des surfaces D1 d’intention, d’espace de travail et de cockpit, offrant des comportements utiles centrés sur la conversation et des modèles d’orientation, mais reposant sur un modèle d’état distinct et une intégration OA incomplète ;
3. des écrans de fixture P0 `/synthese`, `/cycle-actif`, `/decision`, dont les composants visuels peuvent être récupérés sélectivement, mais dont le flux et les données ne constituent pas l’exécution canonique ;
4. une surface historique OPS1 présentant un comportement historique d’exécution et de rapport, qui doit rester isolée du chemin produit.

Le référentiel **adopté** est une **expérience projet dominée par la conversation**, avec un résumé vivant du projet toujours accessible et des surfaces contextuelles, orientées tâche, pour la décision, l’exécution et les preuves. Il s’appuie sur l’OA Native Backbone et Product SQLite existants. Il ne nécessite ni moteur métier propre à l’interface, ni état de projet dupliqué, ni modèle de décision dupliqué, ni persistance parallèle.

**Résultat :** BASELINE FONCTIONNELLE PRÉ-M6 ADOPTÉE PAR MORRIS — readiness Figma / UI Delivery **non acquises** — gaps G-UX-01→15 classifiés — **G-UX-15 = SLICE A EXIT PROOF ACCEPTED BY MORRIS — TECHNICAL APPLICATION-WIRING BLOCKER CLOSED — FIXTURE-SAFE TECHNICAL PROOF ACCEPTED — PRODUCT/BROWSER E2E STILL PENDING** — Confirmation process-local = **KEEP RESERVE** — candidat local **NOT YET ON MAIN** — **aucun** Figma, UI Delivery, M6 ni REAL autorisé.

**Anti-revendications :** baseline fonctionnelle adoptée ≠ référentiel UX visuel approuvé ≠ Figma autorisé ≠ UI Delivery autorisée ≠ Pre-M6 terminée ≠ M6 Entry Qualification ≠ runtime v3 ADOPTED. G-UX-15 technical blocker CLOSED ≠ product E2E proven ≠ on main. Fixture-safe ≠ REAL. Confirmation process-local reserve **KEEP**. Les dispositions individuelles KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER restent des **recommandations** jusqu’aux gates Delivery pertinentes.

## 2. Autorité et hiérarchie des sources

### 2.1 Ordre de priorité appliqué

1. Implémentation Git et tests à la base indiquée.
2. Décisions explicites de Morris consignées dans l’autorité de convergence actuelle.
3. Sources actuelles validées de convergence et v3.
4. Sources historiques produit/UX.
5. Inférences clairement signalées.

Le cadrage validé `30` et le dossier de décisions `37` prévalent sur les formulations candidates contradictoires des cadrages historiques `11` et `16`. Le contenu historique n’est récupéré que lorsqu’il est compatible avec l’exécution et la doctrine actuelles.

Conversation et Recommendation sont des entrées contextuelles/cognitives, et non une autorité de décision ni des substituts aux preuves Git/d’exécution et à la HumanDecision de Morris.

### 2.2 Sources consultées

Processus et routage :

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `method/sfia-fast-track/core/sfia-knowledge-layer.md`
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md`
- `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md`

Le CKC détaillé du Cycle 2 **est présent**, contrairement à l’hypothèse de repli du contrat de cycle. Son statut est `candidate` ; il n’a servi que de guide cognitif et n’a ni élargi le périmètre ni autorisé de décisions.

Convergence et autorité produit actuelle :

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/sfia-v3-framing/30-knowledge-context-human-decision-doctrine.md`
- `projects/sfia-studio/sfia-v3-framing/31-doctrine-package-and-source-resolution.md`
- `projects/sfia-studio/sfia-v3-framing/32-living-project-state-and-dynamic-trajectory.md`
- `projects/sfia-studio/sfia-v3-framing/33-epistemology-provenance-and-contradiction-model.md`
- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md`
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md`
- `projects/sfia-studio/sfia-v3-framing/37-studio-v3-foundations-and-consolidation-decision-pack.md`

Sources historiques/complémentaires :

- `projects/sfia-studio/sfia-v3-framing/11-sfia-v3-ux-information-architecture.md`
- `projects/sfia-studio/sfia-v3-framing/16-sfia-v3-user-journey-and-doctrine-enforcement.md`
- `projects/sfia-studio/08-functional-design.md`

Les sources d’exécution, d’interface et de tests ont été examinées sous :

- `projects/sfia-studio/app/app/**`
- `projects/sfia-studio/app/features/**`
- `projects/sfia-studio/app/lib/oa/**`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/**`
- `projects/sfia-studio/app/lib/d1/**`
- `projects/sfia-studio/app/__tests__/**`
- `projects/sfia-studio/app/e2e/**`

### 2.3 État de convergence gouverné

- M5 : **CLOSED**.
- M5-C : **KEEP TEMPORARY WITH EXIT** ; propriétaire **non explicitement consigné** (dette de gouvernance post-M5) ; le journal technique de lancement reste distinct du stockage Product Attempt et n’a pas été retiré.
- Trajectoire pré-M6 : **DECIDED**.
- Qualification pré-M6 : **COMPLETE + CHATGPT REVIEW PASS** (artefact français) ; **adoption Morris** consommée dans ce cycle de continuation.
- Parcours utilisateur canonique : **ADOPTED BY MORRIS** (D-PRE-M6-UX-01).
- Architecture fonctionnelle de l’information : **ADOPTED BY MORRIS** (D-PRE-M6-UX-02).
- Principe de réutilisation UI : **ADOPTED BY MORRIS AT PRINCIPLE LEVEL** (D-PRE-M6-UX-03) — dispositions individuelles de composants **non consommées automatiquement**.
- Limitation process-local premier test : **ACCEPTED BY MORRIS**.
- G-UX-15 : **SLICE A EXIT PROOF ACCEPTED BY MORRIS — TECHNICAL APPLICATION-WIRING BLOCKER CLOSED — FIXTURE-SAFE TECHNICAL PROOF ACCEPTED — PRODUCT/BROWSER E2E STILL PENDING** (architecture Slice A **ACCEPTED** ; candidat local **NOT YET ON MAIN** ; Figma / UI Delivery / M6 toujours non autorisés).
- Readiness consolidée G-UX-01→15 : **AUTHORIZED / COMPLETED** (classification historique) ; **G-UX-15 Slice A** a depuis reçu une implémentation candidat locale (+ amends) — hors commit projet.
- Figma Visual Contract : **NOT AUTHORIZED** (D-PRE-M6-UX-05 = NO DECISION YET).
- Pre-M6 UI Delivery : **NOT AUTHORIZED**.
- M6 : **NOT STARTED / NOT AUTHORIZED**.
- runtime v3 : **NON ADOPTED**.
- Consommation de Cursor REAL / Gate D dans ce cycle : **0**.
- Sync Roadmap : **AUTHORIZED / APPLIED** dans ce cycle de capitalisation (Cycle 15) — intégration Git / PR **pas encore**.

## 3. Acteur et tâches à accomplir

### 3.1 Acteur principal

Morris, agissant comme pilote du projet et autorité humaine. L’administration multi-utilisateur, les permissions et l’architecture des personas sont hors du périmètre de ce candidat, sauf si une qualification distincte les exige ultérieurement.

### 3.2 Tâche principale

Piloter un projet avec Nora au travers de la boucle gouvernée M1→M5 sans devoir comprendre les modules OA, les identifiants du dépôt, les mécanismes CKC, Product SQLite, les indicateurs d’implémentation ou les détails de lancement Cursor.

### 3.3 Compréhension requise

À tout moment significatif, Morris doit pouvoir répondre aux questions suivantes :

- Dans quel projet suis-je et quel est son état actuel ?
- Que sait Nora et qu’est-ce qui demeure incertain ?
- L’énoncé affiché est-il une observation, une hypothèse, une option, une Recommendation, une HumanDecision, un fait d’exécution, une Evidence ou une conclusion de revue ?
- Qu’est-ce qui requiert mon autorité maintenant ?
- Qu’est-ce qui serait exactement exécuté et sous quel contrat ?
- L’exécution est-elle non démarrée, en préparation, en cours, réussie, échouée, arrivée à expiration ou bloquée ?
- Quelles Evidence et quel ReviewBundle existent ?
- Que recommande Nora après examen des preuves ?
- Quelle est la prochaine action utile ou validation humaine ?
- Qu’est-ce qui survivra à un rechargement/une reprise, et quel contexte de travail peut être perdu ?

## 4. Contraintes de doctrine UX

1. **CC-D01 :** la Conversation est le modèle d’interaction dominant.
2. **CC-D03 :** LivingProjectState utilise un panneau persistant sur ordinateur et un modèle de feuille/tiroir adaptatif sur les écrans plus petits ; il soutient la conversation plutôt que de la remplacer par un tableau de bord. Les dimensions définitives relèvent d’une future décision de contrat visuel.
3. **CC-D05 / CC-D06 :** HumanDecision et l’autorité d’exécution sont des confirmations explicites et structurées, proportionnées à l’effet : N1 léger/réversible, N2 persistant ou significatif, N3 structurel/irréversible.
4. **CC-D05 :** Recommendation n’est jamais présentée comme une HumanDecision déjà consommée.
5. **CC-D13 :** Project n’est pas Cycle. Un projet peut avoir un cycle actuel et un historique de cycles.
6. **CC-D12 :** les mécanismes internes CKC, les identifiants du dépôt et les empreintes ne sont pas du contenu produit de premier niveau ; le repli reste silencieux dans les sources v3 autorisées.
7. **CC-D01 :** un indicateur principal d’étapes n’est pas le modèle du produit.
8. **CC-D01 :** un espace de travail permanent à plusieurs panneaux n’est pas l’architecture MVP par défaut.
9. La divulgation progressive expose à la demande les détails, la provenance et les diagnostics techniques.
10. Evidence et ReviewBundle restent accessibles, lisibles et liés au résultat pertinent.
11. Product SQLite, `REAL_LOCAL_CORE`, les identifiants internes, les empreintes de contrat, la branche/HEAD, les indicateurs `REAL_*` et les modes d’adaptateur sont des détails de diagnostic, non une navigation principale.
12. La continuité de la Conversation coexiste avec l’état structuré, les décisions, les contrats, l’exécution et les preuves ; le produit n’est pas un clone générique de messagerie.
13. Nora ne dispose que d’une autorité de recommandation et d’analyse. Morris conserve l’autorité de décision et d’exécution.

## 5. Cartographie des capacités d’exécution M1→M5 actuelles

| Étape | Capacité utilisateur/produit | Objets et cas d’utilisation | Adaptateur / persistance | Interface et preuve actuelles | Limite | Traitement pré-M6 |
|---|---|---|---|---|---|---|
| M1 | Créer, ouvrir et recharger un projet avec son état vivant | `Project`, `LivingProjectState` ; cas d’utilisation de création/lecture du projet et du LPS actuel | Unité de travail projet OA Product SQLite | `/studio/projects/new` → `/studio/projects/[id]` ; tests de redémarrage du projet | `/studio` et `/projects` ne disposent pas de page d’accueil de collection ; plusieurs commentaires/divulgations indiquent encore une portée uniquement locale | Présentation + câblage de la liste/navigation des projets |
| M2 | Démarrer/qualifier un cycle selon le contexte actuel et la doctrine résolue | `CycleInstance`, résolution CKC, F2 `ContextSnapshot` ; qualification du cycle / contexte cognitif | Liaison Project/LPS/Cycle durable dans Product SQLite ; contenu conversationnel F2 actif local au processus | Orchestration F2 de l’assistant du projet et tests de pilotage cognitif | Les identifiants CKC et les détails d’exécution débordent dans l’espace de travail ; aucun résumé utilisateur cohérent de l’état de qualification | Présentation ; réutiliser l’orchestration |
| M3 | Examiner une proposition, consigner la décision de Morris, préparer un contrat d’exécution résistant au redémarrage | `Proposal` locale au processus ; `HumanDecision`, `DecisionBasis`, `ExecutionContract` durables ; cas d’utilisation de décision et de préparation/validation/remplacement | Services SQLite de décision/contrat ; Proposal et mémoire de conversation | `ProjectAssistantPanel` ; tests F2/F3/M3 + `resolveM3ExecutionContract` (Slice A) | **Historique :** PREPARE-only non exécutable. **Actuel :** bridge Slice A prouve fixture-safe le successeur résolu via supersession ; UI assistant sans bouton M3 confirm (hors scope) ; AMEND retour clarification incomplet (G-UX-08) | Bridge technique Slice A présent ; UI/E2E produit + acceptation Morris encore ouverts |
| M4 | Examiner le contrat, confirmer l’autorité, démarrer une exécution contrôlée et observer le cycle de vie de l’Attempt | Domaine/ports Attempt, `ExecutionContract`, confirmation, octroi Gate D, `AgentCapability` RO limitée ; `StartExecution` est l’unique séquenceur | Journal technique M5-C CREATED/LAUNCHED dans un SQLite distinct, pas dans Product Store ; adaptateur de fixture sans effet ; REAL désactivé par défaut | Fixture assistant + composition G-UX-15 tests (Confirm/Select/Start) ; tests gouvernance M4 ; Attempts REAL historiques hors ce cycle | **Historique :** seul chemin UI fixture atteignait l’exécution. **Actuel :** composition applicative fixture-safe via Slice A prouvée en tests ; UI produit / REAL toujours non autorisés | Preuve technique fixture-safe ; pas de REAL ; UI Delivery non autorisée |
| M5 | Lire Attempt, Evidence et ReviewBundle durables ; voir les références LPS factuelles et la Recommendation de Nora après rechargement | `ExecutionAttempt`, `Evidence`, `ReviewBundle`, LPS `evidenceIds`/`reviewBundleIds` ; collecter/examiner/recommander/réhydrater | OA Product SQLite pour Attempt/Evidence/ReviewBundle lorsque `productDurablePath` est actif ; rédacteur système factuel W1, autorité `none` | Action/effet de réhydratation de l’assistant ; tests M5 de redémarrage, durabilité, ajout W1 et remontage de l’interface | La présentation des preuves/revues est intégrée et ne permet pas de naviguer dans l’historique du projet ; l’actualité de la Recommendation n’est pas expliquée | Présentation + câblage de l’historique du projet |

### 5.1 Limite de durabilité

Durables actuellement :

- Project et LivingProjectState ;
- liaison CycleInstance et référence actuelle de résolution CKC ;
- HumanDecision et DecisionBasis ;
- ExecutionContract ;
- ExecutionAttempt ;
- Evidence et ReviewBundle ;
- références factuelles LPS de preuve/revue ;
- relecture actuelle des preuves/revues durables après remontage/rechargement.

Locaux au processus ou partiellement locaux au processus actuellement :

- historique de la conversation ;
- Proposal et résultat de qualification de travail ;
- Confirmation en Memory même lorsque HumanDecision/ExecutionContract utilisent Product SQLite ;
- `MemoryAuthorityResolver` local / preuve de validation Morris (temporaire avec sortie) ;
- sous-ensembles de trajectoire/épistémiques, d’affirmations et de maturité non promus à la durabilité produit.

Local au processus ne signifie pas non fonctionnel. Cela signifie que l’UX ne doit pas laisser entendre des garanties de reprise que l’exécution ne fournit pas.

### 5.2 Réalité des actions de l’assistant du projet

Les noms d’action indiqués dans le contrat d’exécution (`projectAssistantStartF1Action`, `ContinueF1`, `AcceptF1`, `QualifyF2`, `DecideF2`, `ReprepareF3AfterRestart`, `ConfirmF3`, `ConfirmAndExecuteF3`) n’existent **pas** à cette base Git.

La surface d’actions actuellement implémentée dans `features/project-assistant/actions.ts` est :

- `projectAssistantSendAction` — orchestration de la conversation/F1 et du tour F2 ;
- `projectAssistantDecideAction` — décision explicite sur la proposition ;
- `projectAssistantPrepareF3FixtureAction` — préparation du contrat de fixture ;
- `projectAssistantPrepareM3Action` — préparation du contrat M3 durable à partir de la décision ;
- `projectAssistantConfirmAndExecuteF3FixtureAction` — confirmation et exécution contrôlée de la fixture via le chemin applicatif gouverné ;
- `projectAssistantRehydrateEvidenceOutcomeAction` — relecture durable de Evidence/ReviewBundle/Recommendation.

Le candidat UX associe ces faits à des tâches utilisateur ; il n’expose pas les noms d’action comme des étapes.

## 6. Audit de l’interface existante

### 6.1 Inventaire des routes

| Route | Responsabilité actuelle | Réalité de l’exécution | Statut candidat |
|---|---|---|---|
| `/` | Redirection vers la synthèse P0 | Entrée de fixture, pas la réalité du portefeuille | REPLACE ultérieurement la destination de la route |
| `/synthese` | Résumé de tranche verticale P0 avec sélecteur d’état de démonstration | État de fixture/harness ; aucune collection de projets canonique | FREEZE ; HARVEST uniquement les primitives visuelles |
| `/nouvelle-demande` | Entrée actuelle principale D1-C1 centrée sur l’intention et appariement déterministe, rendue dans `D1AppShell` | Modèle/SQLite D1 isolé ; aucune chaîne OA M1→M5 | HARVEST BEHAVIOR ; ADAPT dans l’entrée projet/conversation |
| `/workspace` | Liste/orientation actuelle des projets D1 | Commandes/stockage SQLite D1 distincts | HARVEST du comportement d’orientation ; REPLACE le câblage |
| `/projects/new` | Formulaire manuel de projet D1 | Chemin D1, distinct de la tranche verticale OA | FREEZE ; consolider ultérieurement |
| `/projects/[id]` | Cockpit et audit du projet D1 | Modèle de projet D1 distinct | HARVEST du regroupement de l’information ; REPLACE le câblage |
| `/studio` | Aucune route ; page introuvable P0 | Entrée canonique manquante | COMPLETE avec une entrée/liste des projets dans une future Delivery |
| `/studio/projects/new` | Création de projet dans la tranche verticale OA | Chemin actuel Project/LPS Product SQLite | KEEP le câblage ; ADAPT la présentation |
| `/studio/projects/[id]` | Projection du projet OA + assistant Nora + flux M2→M5 | Câblage le plus robuste de l’exécution canonique | KEEP le câblage/comportement ; REPLACE la mise en page et la présentation technique |
| `/cycle-actif` | Écran de cycle P0 | État de tranche verticale de fixture | FREEZE ; HARVEST les composants sélectionnés d’état/preuve |
| `/decision` | Écran de décision Morris P0 | Décision de fixture, pas la décision OA actuelle consignée | FREEZE ; HARVEST le langage d’autorité/comportement des composants |
| `/ops1/nouvelle-demande` | Cockpit d’exécution actif et maintenu I1–I6 sur l’ossature historique OPS1 | Cycle de vie/SQLite OPS1 parallèle avec couverture E2E | FREEZE comme chemin canonique ; HARVEST le comportement limité ; RETIRE LATER uniquement après décision explicite de Morris et preuve de remplacement |

`/projects` n’a pas de page d’index et renvoie l’expérience de page introuvable P0. La route dynamique `/projects/[id]` existe, ce qui crée une ambiguïté de navigation.

### 6.2 Audit des surfaces/composants significatifs et classifications candidates

| Surface / actif | Capacité utile | Dette / conflit | Disposition candidate et granularité de réutilisation | Confiance / validation Morris |
|---|---|---|---|---|
| `app/studio/projects/[id]/page.tsx` | Compose la projection du projet OA et l’assistant Nora | Shell/copilote droit fixe ; affirmations obsolètes `LOCAL_PROCESS`, `NOT_READY`, « lecture seule » malgré les actions M3–M5 | **ADAPT** la route ; KEEP la composition et les limites de données, remplacer les libellés/la mise en page | Élevée ; adoption soumise à D-PRE-M6-UX-03 |
| `ProjectAssistantPanel.tsx` | Conversation, Proposal F2, décision explicite, préparation/confirmation/exécution de fixture F3, réhydratation durable | Composant unique très volumineux ; les modes d’implémentation, le flux d’événements et les cartes d’étape concurrencent la conversation ; la notice locale au processus est toujours technique | **HARVEST BEHAVIOR + WIRING**, pas la conception visuelle ; scinder par états fonctionnels lors d’une future Delivery | Élevée ; validation de disposition significative |
| `ProjectWorkspaceView.tsx` | Lit Project/LPS/Cycle/doctrine/état de préparation depuis l’exécution actuelle | Expose identifiants, référence/empreinte CKC, `REAL_LOCAL_CORE`, indicateurs de persistance et Product SQLite ; grilles de définition centrées sur les objets ; échappatoire OPS1 | **REPLACE PRESENTATION**, KEEP le chargeur et les projections ; récupérer objectif/contraintes/contenu de l’état actuel | Élevée ; validation de disposition significative |
| `ProjectWorkspaceClient.tsx` | Chargement et pont d’action vers l’exécution OA | Commentaires obsolètes affirmant un singleton global en mémoire ; chargement uniquement client dupliquant le comportement possible côté serveur de la page | **ADAPT** le câblage après nettoyage de la source de vérité ; aucune revendication de réutilisation visuelle | Moyenne |
| `CreateProjectForm` (`/studio/projects/new`) | Crée Project/LPS via l’exécution actuelle de tranche verticale | La divulgation technique domine ; le formulaire manuel précède la conversation ; texte obsolète sur la portée locale | **KEEP WIRING / ADAPT BEHAVIOR**, remplacer la hiérarchie visuelle/de contenu | Élevée |
| D1 `IntakeView` / `/nouvelle-demande` | Langage clair centré sur l’intention, exemples, posture de clarification/appariement | Modèle D1 distinct, formulaires dupliqués, aucun enchaînement OA actuel | **HARVEST BEHAVIOR**, pas le composant ni le stockage ; adapter dans la conversation canonique | Élevée |
| D1 `WorkspaceHomeView` | Concepts d’orientation/liste des projets | Persistance/commandes distinctes ; aucun modèle OA de résultat durable | **HARVEST INFORMATION MODEL**, remplacer le câblage et le référentiel visuel | Moyenne |
| D1 `ProjectCockpitView` | Regroupement objectif/contexte/audit | Le « cockpit » risque une doctrine centrée sur le tableau de bord ; modèle distinct | **HARVEST CONTENT GROUPING**, pas l’architecture de cockpit | Moyenne |
| `StudioShell` / navigation | Shell accessible existant, liens de routes, primitives d’état | Mélange les routes P0, D1, Studio et OPS1 comme des pairs ; la correspondance exacte de `/studio/projects/[id]` dynamique ne laisse aucun élément actif dans le rail ; la page OPS1 met en évidence la route d’entrée D1 ; preuves désactivées ; le rail droit impose une tendance multi-panneaux | **KEEP le shell / ADAPT la navigation** ; remplacer la taxonomie des routes et la correspondance des routes actives | Élevée |
| P0 `SyntheseScreen`, `CycleActifScreen`, `DecisionScreen` et `Vs*` | Cartes, pastilles, vocabulaire de décision/preuve, états déterministes | Sélecteurs de fixture/harness, modèle « cycle actuel » dupliqué, preuves et décisions simulées | **FREEZE** les flux ; **HARVEST COMPONENTS** sélectivement après liaison à l’exécution ; ne pas récupérer le comportement de fixture | Élevée |
| Primitives d’interface (`Card`, `StatusPill`, `CtaButton`, primitives de preuve/validation) | Blocs de composants accessibles testés | Le langage visuel est propre à P0 et certaines sémantiques sont surchargées | **KEEP/ADAPT COMPONENTS** en attente du futur contrat visuel ; aucune revendication de référentiel visuel | Moyenne |
| Interface de session OPS1 | Comportement actif I1–I6 de session/validation/liste d’autorisation/contrat/Attempt/rapport sur une ossature historique | Cycle de vie parallèle, statut historique explicite, langage technique de Delivery | **FREEZE** la route ; **HARVEST BEHAVIOR**, par exemple les indices de liste d’autorisation/autorité bornés, pas le modèle d’exécution ; **RETIRE LATER** uniquement après preuve de remplacement et GO de Morris | Élevée ; décision finale de retrait requise |

### 6.3 Dette observée

- La navigation expose trois démarrages produit concurrents : synthèse P0, entrée/espace de travail D1 et routes de projet OA Studio.
- L’état du shell/de la navigation est divisé : D1 utilise `D1AppShell` ; Studio/P0/OPS1 utilisent `StudioShell`, avec une sélection de rail incorrecte/absente sur OPS1 et les projets Studio dynamiques.
- La route canonique d’exécution actuelle ne dispose d’aucune liste/entrée de projet à `/studio`.
- Les objets d’exécution sont affichés comme des sections techniques distinctes plutôt que comme un récit orienté utilisateur de « l’état du projet ».
- « Local », « fixture », « Product SQLite », les références CKC, identifiants internes, indicateurs de préparation, branche/HEAD et modes d’adaptateur apparaissent au premier niveau.
- Le texte actuel est incohérent : `RuntimeDisclosureBanner` affiche correctement la durabilité partielle de Project/LPS/Cycle/Decision/Contract et Product SQLite, alors que le texte voisin avertit encore que le redémarrage perd toutes les données ou qu’il n’existe aucune persistance produit ; les libellés « read-only » et « no writing » coexistent avec les actions M3–M5.
- Les responsabilités de décision/preuve sont dupliquées entre la fixture P0 et l’assistant OA.
- Evidence est accessible dans la sortie de l’assistant mais ne dispose pas d’une destination stable dans l’historique du projet.
- Les messages d’erreur expliquent souvent les limites de processus/d’exécution plutôt que la récupération en termes produit.

### 6.4 Audit visuel de l’état actuel

La commande documentée existante `npm run dev` a démarré correctement sur le port 3020. L’examen du navigateur en lecture seule a couvert `/synthese`, `/studio` (introuvable), `/studio/projects/new`, `/projects` (introuvable), `/ops1/nouvelle-demande` et `/nouvelle-demande`.

Observations :

- `/synthese` est visuellement cohérent, mais dominé par un sélecteur d’état de fixture, les métadonnées du harness et les affirmations « vertical slice POC ».
- `/studio/projects/new` présente un formulaire utilisable, mais met en avant les divulgations locales/d’exécution et les indicateurs internes de préparation.
- `/nouvelle-demande` exprime le mieux le langage souhaité centré sur l’intention, mais est câblé à D1 plutôt qu’à la chaîne OA M1→M5.
- `/studio` et `/projects` ne fournissent pas l’entrée produit attendue.

Les captures d’écran ont servi uniquement de preuves d’audit transitoires ; aucune capture suivie ni action Figma n’a été produite.

## 7. Candidat de parcours utilisateur canonique M1→M5

### 7.1 Forme du parcours

L’expérience principale est une conversation de projet unique, avec des moments structurés apparaissant dans leur contexte. Un résumé compact du projet vivant reste accessible. Les détails de décision, d’exécution et de preuve s’ouvrent contextuellement et restent disponibles dans l’historique du projet. Ils ne constituent pas des produits CRUD distincts ni un indicateur d’étapes obligatoire.

### 7.2 Parcours détaillé

| N° / moment | Intention et action de l’utilisateur | Responsabilité de Nora | Système/objet et informations visibles | Autorité / persistance | Réussite, vide/chargement/erreur/récupération | Suite |
|---|---|---|---|---|---|---|
| 0 Entrer/sélectionner/créer | Trouver un projet existant ou décrire une nouvelle intention | Proposer une orientation concise, ne pas exiger d’abord des champs d’implémentation | Liste des projets/projet récent ou intention de création ; `Project`, LPS | La création de Project est une action utilisateur ; Project/LPS durables | Vide : créer le premier projet. Échec de chargement/lecture : réessayer, proposer une option de diagnostic non technique. Introuvable : revenir aux projets | Orientation du projet |
| 1 S’orienter | Comprendre l’identité, l’objectif, l’état/le cycle actuel et l’action suivante | Résumer l’état connu et l’incertitude | Titre/objectif du projet ; résumé LPS ; état du Cycle actuel ; dernier résultat ; prochaine action recommandée | Lecture seule ; faits durables signalés | L’absence de cycle actuel est légitime. Une erreur de péremption/lecture distingue « inconnu » de « aucun » | Converser |
| 2 Exprimer l’intention | Énoncer le résultat souhaité en langage naturel | Écouter, préserver le contexte du projet, ne poser que des questions utiles | Conversation et résumé accessible du projet | Conversation locale au processus ; divulguer la limite de reprise à la demande | Invite vide ; état de traitement ; fournisseur indisponible → conserver le brouillon/réessayer ou chemin de qualification manuelle | Clarifier |
| 3 Clarifier/qualifier | Répondre aux questions et examiner ce que Nora a compris | Distinguer faits, observations, hypothèses et écarts ; résoudre CKC en interne | État de qualification et informations manquantes ; CycleInstance / ContextSnapshot actif | Résultat de travail local au processus ; liaison Cycle durable | Un écart incomplet/bloquant identifie la question exacte et permet une reprise dans la session | Résultat structuré |
| 4 Résultat de qualification | Examiner observations, options, Recommendation et réserves | Présenter preuve/provenance de manière proportionnée ; ne jamais laisser entendre une décision | Vue Proposal : compréhension, options, Recommendation, écarts/réserves | Recommendation uniquement ; Proposal locale au processus | Incomplète/périmée → clarifier/requalifier ; aucune option → expliquer l’écart bloquant | Validation Morris |
| 5 Validation de décision explicite | Approuver, rejeter, approuver avec réserves ou demander un amendement | Expliquer les conséquences de façon neutre | Résumé de décision, option choisie, réserves, périmètre et suite | Validation HumanDecision explicite, normalement N2 et N3 si structurelle/irréversible ; AMEND est durable ; aucune autorité d’exécution encore | Une Proposal périmée bloque la décision. AMEND est enregistré, mais le chemin ultérieur de clarification/requalification doit être câblé plutôt que simulé | Consigner la décision ou clarifier |
| 6 Décision consignée | Vérifier ce qui a été décidé | Accuser réception sans agir au-delà de l’autorité | HumanDecision durable, DecisionBasis, acteur/heure/périmètre ; « décision enregistrée » visible | Durable ; Recommendation reste étiquetée séparément | Conflit/échec d’écriture → aucun état de réussite ; réessayer/recharger et afficher si la décision existe | Préparer le contrat |
| 7 Préparer/examiner le contrat | Comprendre exactement ce qui s’exécuterait | Traduire le contrat en objectif, périmètre, contraintes, effets et réserves | Résumé ExecutionContract avec détails techniques/de provenance dépliables | La préparation suit une décision valide ; contrat durable | Préparation ; non résolu/fermé par défaut ; périmé/nouvelle préparation requise ; l’échec permet le retour à la décision/au contexte | Confirmer l’exécution |
| 8 Validation de l’autorité d’exécution | Confirmer ou annuler l’exécution contrôlée | Réénoncer les effets significatifs et la limite de sécurité | Contrat lisible, capacité, sortie attendue, non-effets | Confirmation N2/N3 distincte selon persistance/réversibilité ; aucune confirmation implicite | Un contrat périmé/remplacé bloque ; l’annulation revient sans danger ; l’échec de confirmation est explicite | Démarrer |
| 9 Démarrage contrôlé | Démarrer l’exécution confirmée | Ne revendiquer aucune réussite avant l’existence d’une Attempt | StartExecution crée/démarre l’Attempt via l’unique séquenceur | Gate D/REAL non autorisés ici ; le futur chemin utilise la limite gouvernée actuelle | En préparation/bloqué ; démarrage dupliqué empêché ; la récupération lit l’Attempt existante plutôt que de réessayer aveuglément | État de l’Attempt |
| 10 Retour sur l’Attempt | Savoir si le travail est en attente/en cours/réussi/échoué/expiré | Expliquer l’état et la prochaine action sûre | État ExecutionAttempt, heures de début/fin, progression concise | Attempt durable ; journal technique maintenu comme diagnostic interne | Actualiser si en cours ; en cas d’échec/expiration, afficher les preuves éventuelles et aucun nouvel essai automatique ; si bloqué, expliquer l’autorité requise | Preuve |
| 11 Preuve/revue | Examiner ce qui s’est réellement produit | Séparer preuve brute, complétude et conclusion de revue | Liste Evidence + résumé ReviewBundle, complétude/intégrité et provenance dépliable | Durable | Absence légitime pendant l’exécution ; échec d’incomplétude/réhydratation distinct ; réessayer la lecture, pas l’exécution | Analyse de Nora |
| 12 Analyse après preuve | Comprendre le résultat | Analyser les preuves, contradictions, dettes et maturité dans les limites de l’autorité | Conclusion de revue, observations, écarts non résolus | L’analyse peut être dérivée ; les Evidence/RB sous-jacents sont durables | En attente de preuve ; analyse indisponible ; périmée si le résultat lié a été remplacé | Recommendation |
| 13 Recommendation/prochaine validation | Décider de la suite | Recommander, indiquer la confiance et l’autorité humaine requise | Recommendation explicitement étiquetée ; prochaine validation/action | Jamais une HumanDecision ni une validation consommée | Une Recommendation périmée pointe vers une preuve plus récente ; l’absence de Recommendation est légitime | Décision ou clôture de boucle |
| 14 Répercussion LPS | Voir la réalité du projet mise à jour | Expliquer mise à jour factuelle et choix structurel | Cycle/résultat actuel du LPS et références Evidence/RB factuelles | Autorité `none` du rédacteur système factuel W1 ; durable | Un échec d’écriture/lecture ne réécrit pas l’historique ; réessayer la réconciliation factuelle | Continuer le projet |
| 15 Rechargement/reprise | Reprendre avec une continuité honnête | Reconstruire depuis l’état durable et signaler le contexte de travail perdu | Project/LPS, HumanDecision, contrat, Attempt, Evidence/RB et résultat reviennent ; conversation/Proposal peuvent ne pas revenir | Distinction durable/local au processus visible à la reprise | Si le contexte de travail est perdu, proposer « reprendre depuis le dernier résultat durable » et requalifier, sans jamais fabriquer la conversation | Nouvelle conversation/validation actuelle |

### 7.3 Règles au niveau du parcours

- Un rejet termine ou redirige la proposition actuelle ; il n’en crée pas silencieusement une nouvelle.
- AMEND est une HumanDecision durable ; il renvoie à la clarification et exige une Proposal nouvellement qualifiée plutôt que la mutation de la Proposal décidée.
- La confirmation d’une décision et la confirmation d’une exécution sont distinctes.
- L’état est dérivé des faits d’exécution faisant autorité ; l’état de l’interface ne peut pas les faire progresser.
- Le rechargement restaure le dernier résultat durable, pas la transcription exacte locale au processus.
- Aucun nouvel essai automatique ne suit une exécution échouée/arrivée à expiration.

## 8. Candidat d’architecture fonctionnelle de l’information

### 8.1 Destinations de premier niveau

1. **Projets** — sélectionner, créer, rouvrir ; état récent et action suivante.
2. **Projet actuel** — destination principale du produit.
3. **Historique du projet** — chronologie contextuelle des décisions, résultats d’exécution, preuves/revues et transitions de cycle ; accessible depuis le projet actuel.
4. **Diagnostics** — détails d’assistance facultatifs, divulgués progressivement ; pas une navigation principale ni un explorateur d’objets de domaine M1→M5.

Aucune page globale distincte n’est requise pour Proposal, HumanDecision, ExecutionContract, ExecutionAttempt, Evidence, ReviewBundle ou Recommendation.

### 8.2 Hiérarchie du projet actuel

Par défaut :

- identité, objectif et résumé concis de l’état actuel du projet ;
- cycle/état actuel et dernier résultat durable ;
- prochaine action utile / validation humaine ;
- conversation dominante avec Nora ;
- résultat structuré contextuel lorsqu’il est actif.

À la demande :

- détail complet du LPS et trajectoire/historique ;
- fondement de décision et provenance ;
- contrat complet et contraintes techniques ;
- détails d’horodatage/d’état de l’Attempt ;
- détails/intégrité de Evidence et ReviewBundle ;
- diagnostics d’exécution et identifiants internes.

### 8.3 Conversation et état structuré

La Conversation est la surface continue. Les cartes structurées ne sont pas des messages de conversation se faisant passer pour de la prose : ce sont des vues typées liées à la conversation au moment pertinent et conservées dans l’historique une fois ce moment passé.

Le résumé de l’état vivant ne reproduit pas chaque objet de domaine. Il répond à :

- l’objectif et l’état actuels ;
- le cycle actuel et la préoccupation active ;
- la dernière décision et le résultat d’exécution ;
- la disponibilité des preuves/revues ;
- les écarts/dettes ouverts ;
- la prochaine validation recommandée.

### 8.4 Project et Cycle

Project est le conteneur durable et la destination utilisateur. CycleInstance est un épisode circonscrit en son sein. Le cycle actuel est affiché comme contexte du projet ; l’historique des cycles est accessible via l’historique du projet. Créer un projet n’implique pas de démarrer un cycle d’exécution, et fermer un cycle ne ferme pas le projet.

### 8.5 Transitions fonctionnelles

- Projets → projet actuel.
- Conversation du projet actuel → résultat de qualification.
- Résultat de qualification → validation HumanDecision.
- Décision → examen du contrat.
- Examen du contrat → validation de l’autorité d’exécution.
- Validation de l’autorité → état de l’Attempt.
- Attempt → Evidence/ReviewBundle.
- Revue des preuves → Recommendation de Nora.
- Recommendation → nouvelle décision explicite ou poursuite de la conversation.
- Tout événement durable → historique du projet et projection LPS factuelle.

## 9. Modèle d’état fonctionnel

Légende : **NOW** = directement pris en charge ; **DERIVED** = dérivation propre à l’interface à partir des faits actuels ; **GAP** = travail d’exécution/applicatif requis ; **FUTURE** = hors pré-M6.

| Domaine | État | Prise en charge | Représentation / contrainte UX |
|---|---|---|---|
| Project | aucun projet | DERIVED | État vide Projets avec action créer/décrire l’intention |
| Project | chargement / disponible / introuvable / échec de lecture | NOW | Squelette distinct, vue projet, récupération vers Projets, nouvel essai |
| Conversation | inactive / saisie / traitement par Nora | NOW | Préserver le brouillon ; un envoi actif |
| Conversation | clarification requise | NOW/DERIVED | Question de Nora et élément non résolu visible |
| Conversation | perte après redémarrage du processus | Limite NOW | Notice de reprise + reprise depuis le résultat durable |
| Qualification | non démarrée / en cours / terminée | NOW/DERIVED | État déduit du résultat assistant/F2 |
| Qualification | écart incomplet/bloquant | NOW/DERIVED | Écart et donnée requise ; aucune fausse complétude |
| Qualification | périmée/requalification requise | DERIVED ; certaines validations NOW | Bloquer décision/préparation lorsque le fondement n’est plus actuel |
| Décision | Recommendation uniquement / décision requise | NOW | Libellés et actions explicites |
| Décision | acceptée / rejetée / avec réserves | NOW | Résultat durable, distinct de Recommendation |
| Décision | amendement demandé | NOW comme décision durable `amended` ; GAP pour le câblage ultérieur de clarification/requalification | Afficher l’amendement enregistré, puis diriger vers une Proposal nouvellement qualifiée |
| Décision | indisponible/périmée | NOW/DERIVED | Fermé par défaut ; requalifier/recharger |
| Contrat | en préparation / prêt pour examen | NOW | Progression puis contrat lisible |
| Contrat | non résolu/fermé par défaut | NOW | Écart requis et aucune action de confirmation |
| Contrat | confirmé | NOW | Fait de confirmation distinct de l’Attempt |
| Contrat | périmé/nouvelle préparation requise | NOW | Repréparer depuis la décision durable actuelle |
| Attempt | acceptée / en cours / résultat en attente / réussie / échouée / timeout / annulée | NOW | Cycle de vie durable faisant autorité ; aucune réussite optimiste ni nouvel essai automatique |
| Attempt | non démarrée / en préparation / bloquée | États UX DERIVED pré-Attempt | Ne doit pas être stockée ni présentée comme une Attempt existante |
| Evidence/RB | légitimement absent / chargement / disponible | NOW/DERIVED | Distinguer l’absence avant achèvement de l’échec de lecture |
| Evidence/RB | incomplet | NOW | Explication de complétude/préparation |
| Evidence/RB | échec de réhydratation | NOW | Réessayer la lecture ; détails de diagnostic à la demande |
| Résultat Nora | attente de preuve / analyse disponible / Recommendation disponible | NOW/DERIVED | Recommendation clairement typée |
| Résultat Nora | Recommendation périmée | DERIVED ; la règle d’actualité nécessite un câblage explicite | Lier au résultat qui la remplace |
| Résultat Nora | décision humaine requise | NOW/DERIVED | Validation explicite, jamais consommée automatiquement |
| Permissions/administration multi-utilisateur | tous | FUTURE | Hors de ce candidat |

## 10. Cartographie du contrat exécution ↔ UX

| Étape du parcours | Interface actuelle | Action/cas d’utilisation | Objet de domaine | Persistance | Preuve actuelle | Exigence UX | Écart |
|---|---|---|---|---|---|---|---|
| Créer/ouvrir | `/studio/projects/new`, `/studio/projects/[id]` | actions de création/lecture du projet de tranche verticale ; cas d’utilisation projet | Project, LPS | Product SQLite | tests de redémarrage/interface du projet | Entrée Projets et orientation non technique | IA + câblage |
| Converser/qualifier | `ProjectAssistantPanel` | `projectAssistantSendAction` ; orchestration F1/F2 ; qualifier le cycle | Conversation, ContextSnapshot, Proposal, CycleInstance | Conversation/Proposal locales ; liaison du cycle durable | tests assistant/F2 | conversation dominante ; clarifier les écarts | Présentation |
| Décider | carte de proposition de l’assistant | `projectAssistantDecideAction` ; cas d’utilisation de décision | HumanDecision, DecisionBasis | durable | tests F2/décision | conséquences explicites, rejet/réserves | Présentation ; GAP d’amendement |
| Préparer le contrat | cartes F3 de l’assistant | `projectAssistantPrepareM3Action`, préparation de fixture ; valider/préparer/remplacer ; **+** `resolveM3ExecutionContract` (Slice A, hors UI) | ExecutionContract | chemin M3 durable | tests préparation/redémarrage + G-UX-15 | examen lisible, périmé/fermé par défaut | **Historique gap :** PREPARE ne pouvait pas continuer jusqu’au démarrage. **Actuel :** bridge Slice A ferme le gap technique fixture-safe ; UI/product E2E encore ouverts |
| Confirmer/démarrer | carte d’exécution de l’assistant | `projectAssistantConfirmAndExecuteF3FixtureAction` ; confirmation + StartExecution (inchangés ; composés après Slice A) | contrat de fixture ou successeur résolu, confirmation, AgentCapability, Attempt | entrée Proposal/fixture locale ou composition G-UX-15 ; Attempt durable | fixture + tests G-UX-15 composition | validation d’autorité et cycle de vie distincts | Composition fixture-safe prouvée ; fixture ≠ preuve produit critique ; UI Delivery non autorisée |
| Observer l’Attempt | sortie de l’assistant | cas d’utilisation de lecture/démarrage d’Attempt | ExecutionAttempt | Product SQLite | tests M5 de durabilité/redémarrage de l’Attempt | état et récupération sûre | IA/présentation |
| Preuve/revue | résultat durable de l’assistant | collecte/revue de preuves et `projectAssistantRehydrateEvidenceOutcomeAction` | Evidence, ReviewBundle | Product SQLite | durabilité des preuves/revues M5 + remontage | historique stable et complétude lisible | IA/câblage |
| Résultat Nora | résultat durable de l’assistant | RecommendNextGate/relecture | Recommendation sur ReviewBundle | RB sous-jacent durable ; présentation de la Recommendation dérivée/relue | tests de réhydratation M5 | actualité/autorité explicite de Recommendation | Présentation/câblage |
| Répercussion LPS | projection de l’espace de travail | rédacteur d’ajout factuel W1 | Références LPS | Product SQLite | preuve d’ajout W1 et de redémarrage | dernier résultat compréhensible par l’utilisateur, pas des identifiants | Présentation |

## 11. Local au processus ou durable — conséquence UX

| Objet de travail | Observation | Conséquence pour le premier test | Recommendation | Décision requise |
|---|---|---|---|---|
| Conversation | L’historique local au processus alimente la requête actuelle de l’assistant | L’UAT en session continue fonctionne ; le redémarrage du serveur perd la transcription | Accepter pour la première preuve ; préserver le brouillon côté client uniquement si déjà disponible ; reprendre depuis le résultat durable | Morris confirme la limite acceptée |
| Proposal | Résultat de qualification structuré local au processus | Perdre une proposition non consommée est gênant, mais ne rompt pas l’autorité | Requalifier après redémarrage ; ne jamais reconstruire et consommer une proposition supposée | Morris confirme la limite acceptée |
| Confirmation | La confirmation de travail peut être locale au processus avant l’Attempt durable en aval | La perte avant démarrage est sûre ; l’ambiguïté après démarrage romprait l’autorité | À la reprise, résoudre depuis le contrat/l’Attempt durable et fermer par défaut | Aucune nouvelle décision de persistance maintenant ; écart d’exécution uniquement si l’ambiguïté est prouvée |
| Sous-ensembles de trajectoire/épistémiques | Les observations/hypothèses/affirmations/maturité ne sont pas toutes durables dans le produit | Le raisonnement détaillé peut ne pas reprendre demain | N’afficher comme durables que les faits durables ; étiqueter l’analyse de travail ; reporter l’extension | Qualification Morris future |
| HumanDecision/contrat | Durable | L’autorité peut survivre au redémarrage | Les traiter comme points d’ancrage de récupération | Non |
| Attempt/Evidence/RB/références LPS | Durables et éprouvés au redémarrage | Le résultat reste visible après rechargement | Les utiliser comme point d’ancrage canonique de reprise | Non |

**Décision Morris consommée :** FIRST-TEST PROCESS-LOCAL LIMITATION = **ACCEPTED BY MORRIS**.

Périmètre exact :

- **Accepté pour le premier test utilisateur fonctionnel borné uniquement :** Conversation / Proposal process-local.
- **Comportement UX requis :** continuité honnête ; aucune restauration factice ; reprise depuis l’état durable ; requalification offerte si nécessaire.
- **Non accepté :** perte d’autorité masquée ; état d’exécution déduit de la Conversation locale ; reconstruction d’une Proposal consommée depuis la mémoire ; nouvelle persistance ad hoc sans décision.
- **Aucune nouvelle persistance sélectionnée.**
- **Déclencheur de sortie pour reconsidérer la durabilité :** uniquement si l’UAT / l’usage démontre que la perte de Conversation / Proposal de travail empêche matériellement la continuité attendue ou une autorité sûre.

Les dispositions détaillées de readiness multi-dimensionnelle figurent au §21. Le registre §12 conserve l’audit factuel d’origine.

## 12. Registre des écarts

> Les dispositions de readiness actualisées (sévérité, pré-Figma, Figma, Delivery, preuve/UAT) sont au **§21**. Ce registre conserve la preuve d’audit et l’impact utilisateur.

| ID / classe | Preuve et impact utilisateur | Bloque la preuve fonctionnelle / Figma | Traitement candidat le plus simple | Risque d’exécution/architecture | Responsable / échéance |
|---|---|---|---|---|---|
| G-UX-01 UX INFORMATION ARCHITECTURE GAP | Aucune entrée projet `/studio` ; trois démarrages concurrents | Oui / Oui | Ajouter une destination Projets canonique et une politique de redirection dans une future Delivery | Faible si les requêtes OA sont réutilisées | Morris adopte l’IA ; Delivery |
| G-UX-02 HISTORICAL UI DEBT | P0, D1, OA et OPS1 apparaissent comme navigation de même niveau | Oui / Oui | Masquer les chemins historiques de la navigation canonique ; ne pas supprimer | Faible | Disposition Morris ; Delivery |
| G-UX-03 UX PRESENTATION GAP | L’espace de travail OA expose références CKC, identifiants, Product SQLite et indicateurs d’exécution | Oui / Oui | Diagnostics progressifs ; résumé en langage utilisateur par défaut | Faible | UX/Figma |
| G-UX-04 UX PRESENTATION GAP | Conversation, Proposal, contrat, Attempt et preuve se concurrencent dans un long panneau unique | Oui / Oui | Surfaces structurées contextuelles liées à la conversation dominante | Faible | UX/Figma |
| G-UX-05 APPLICATION WIRING GAP | Le comportement D1 centré sur l’intention n’est pas câblé à OA M1→M5 | Oui / Non | Recréer le comportement sur les actions OA existantes ; ne pas relier les stockages | **Risque parallèle si l’état D1 est réutilisé** | Qualification Delivery |
| G-UX-06 APPLICATION WIRING GAP | Aucune destination stable d’historique du projet pour décisions/résultats/preuves | Oui / Oui | Lire les objets durables existants via les ports actuels et les références du projet | Moyen ; éviter un stockage de chronologie dupliqué | Qualification Delivery |
| G-UX-07 UX PRESENTATION GAP | Les divulgations obsolètes « local/read-only/not ready » contredisent la capacité actuelle | Oui / Oui | Remplacer par un langage concis de capacité/autorité et des diagnostics | Faible | Delivery |
| G-UX-08 APPLICATION WIRING GAP | AMEND est consigné durablement, mais aucun flux ultérieur complet de clarification/requalification n’est établi | Non pour un premier chemin uniquement GO / Oui pour le scénario d’amendement | Revenir de l’amendement durable à la conversation et produire une nouvelle Proposal qualifiée avec la sémantique de décision existante | Moyen si l’interface modifie l’ancienne Proposal ou invente une autorité | Avant la preuve fonctionnelle complète |
| G-UX-09 DURABILITY GAP | Conversation/Proposal non reprenables après redémarrage du serveur | Non pour une preuve circonscrite en session continue / Non | Reprise honnête + requalification depuis le point d’ancrage durable | Élevé si une persistance ad hoc est ajoutée | Morris accepte/reporte |
| G-UX-10 APPLICATION WIRING GAP | L’actualité/le remplacement de Recommendation n’est pas toujours visible par l’utilisateur | Non / Oui | Dériver l’état périmé du dernier résultat durable lié ; qualifier le câblage | Moyen | Avant la preuve UI Delivery |
| G-UX-11 EVIDENCE GAP | L’E2E actuel prouve les tranches P0, D1 et OPS1 ; aucun chemin Playwright ne couvre `/studio/projects/*` ni un parcours navigateur canonique unique | Oui après Delivery / Non | Futur contrat de preuve au §16 | Faible | Sortie de Delivery |
| G-UX-12 GOVERNANCE GAP | Dispositions significatives de l’interface et retrait historique non consommés | Non / Non | Dossier de décision ; retrait maintenu à plus tard | Faible | Morris |
| G-UX-13 UX PRESENTATION GAP | Chargement/vide/erreur/récupération canoniques manquants sur le parcours agrégé | Oui / Oui | Utiliser le modèle d’état §9 comme entrée Figma/Delivery | Faible | Figma/Delivery |
| G-UX-14 NON-BLOCKING FUTURE ENHANCEMENT | Architecture multi-utilisateur/IAM/administration absente | Non / Non | Maintenir hors pré-M6 | Élevé si anticipé | M6/ultérieur |
| G-UX-15 APPLICATION WIRING GAP — BLOCKING | **Historique audit :** PREPARE-only non exécutable. **Actuel :** Slice A exit proof **ACCEPTED BY MORRIS** — technical blocker **CLOSED** ; fixture-safe = technical proof only ; Confirmation process-local reserve KEEP | **Oui (product E2E)** / **Non (technical wiring)** | Architecture ACCEPTED ; local NOT YET ON MAIN ; ZERO REAL | **Product residual** : integration + UI/E2E + Confirmation reserve | PR readiness → Figma → Delivery |

**ÉCART PRÉ-M6 ENTRE L’EXÉCUTION ET L’APPLICATION — HISTORIQUEMENT QUALIFIÉ ; TECHNIQUEMENT BRIDGÉ PAR SLICE A ; EXIT PROOF ACCEPTED BY MORRIS.** Technical application-wiring blocker = **CLOSED**. Product/browser E2E + UI Delivery restent **PENDING / NOT AUTHORIZED**. Classification historique : APPLICATION WIRING GAP (pas de nouveau moteur). Preuve technique fixture-safe acceptée comme preuve technique uniquement ; Confirmation process-local = KEEP RESERVE ; candidat local NOT YET ON MAIN ; ZERO REAL / Gate D 0.

## 13. Résumé de la disposition des actifs existants

**Principe de réutilisation :** **ADOPTED BY MORRIS** (D-PRE-M6-UX-03 au niveau principe).

**Dispositions individuelles de composants :** restent des **recommandations** jusqu’aux gates de readiness / Delivery pertinentes. Ce GO n’adopte **pas** silencieusement chaque KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER.

Recommandations conservées (non consommées comme décisions de retrait/remplacement) :

- **KEEP :** OA Native Backbone ; Product SQLite ; ports/cas d’utilisation de domaine actuels ; modèles Project, LPS, CycleInstance, HumanDecision, ExecutionContract, ExecutionAttempt, Evidence et ReviewBundle ; rédacteur LPS factuel ; relecture durable de Nora ; limite d’autorité StartExecution ; primitives d’interface testées sous réserve de revue visuelle.
- **ADAPT :** `/studio/projects/new` ; `/studio/projects/[id]` ; `StudioShell` ; chargeurs/actions d’exécution ; primitives accessibles d’état/décision/preuve.
- **COMPLETE :** entrée projet `/studio`, navigation canonique, historique du projet, chargement/erreur/récupération agrégés et reprise.
- **HARVEST :** comportement de conversation D1 centré sur l’intention et regroupement d’orientation ; langage d’autorité P0 et comportement de composants sélectionnés. Cela ne récupère ni les stockages D1, ni le cycle de vie de fixture P0, ni la conception visuelle actuelle comme référentiel.
- **REPLACE :** présentation technique/centrée sur les objets de l’espace de travail OA ; taxonomie de navigation mixte actuelle ; destination `/`. Le remplacement n’est pas autorisé par ce document.
- **FREEZE :** écrans de fixture P0 et chemin historique OPS1 ; aucune nouvelle capacité canonique.
- **RETIRE LATER :** routes D1/P0/OPS1 dupliquées uniquement après preuve de remplacement canonique et décision explicite de Morris. Aucun retrait n’est consommé maintenant.

Les actifs d’exécution/de domaine/applicatifs restent KEEP par défaut. Aucune preuve trouvée n’exige une architecture parallèle ni une réécriture de l’exécution.

## 14. Vérification d’absence d’architecture parallèle

**PASS — le candidat peut s’appuyer sur l’ossature existante.**

Principe d’implémentation requis :

- L’interface lit/écrit via les actions et ports applicatifs OA existants.
- L’état du projet reste LPS/Product SQLite, pas un état React/D1/local dupliqué.
- HumanDecision reste l’unique modèle de décision durable.
- StartExecution reste l’unique séquenceur d’autorité d’exécution.
- Attempt/Evidence/ReviewBundle restent les objets de cycle de vie existants.
- L’historique du projet est une projection/requête, pas un nouveau stockage d’événements indépendant.
- L’interface de Conversation peut contenir un état de vue éphémère, mais ne peut devenir une autorité métier.
- Le comportement D1 et P0 peut être recréé sur OA ; leurs stockages/cycles de vie ne sont pas reliés dans un nouveau « moteur UX ».

Si une future conception exige un moteur métier propre à l’interface, un LPS dupliqué, une persistance parallèle, un cycle de vie de décision/Attempt dupliqué ou un modèle Evidence/Review dupliqué, la recommandation s’arrête avec :

**PARALLEL ARCHITECTURE RISK — MORRIS GATE REQUIRED.**

## 15. Futur contrat d’entrée Figma

Statut : **FIGMA INPUT DEFINED FOR DESIGN READINESS** — **FIGMA NOT AUTHORIZED** (D-PRE-M6-UX-05 = NO DECISION YET). Voir verdict §26.

| Scénario futur | Objectif utilisateur / informations requises | Actions et autorité | État de l’exécution | Critère d’acceptation |
|---|---|---|---|---|
| Entrée/orientation du projet | Sélectionner/créer un projet ; voir objectif, état actuel et action suivante | Ouvrir/créer ; aucune autorité d’exécution | Project/LPS en chargement/disponible/vide/erreur | L’utilisateur identifie le projet et l’action suivante sans termes internes |
| Conversation normale | Exprimer l’intention avec le contexte du projet | Envoyer/annuler/réessayer | inactif/saisie/traitement | La Conversation domine ; l’état du projet reste accessible |
| Résultat de qualification | Comprendre observations/options/Recommendation/écarts | Clarifier ou passer à la décision | terminé/incomplet/périmé | Recommendation et incertitude sont sans ambiguïté |
| Décision requise | Exercer l’autorité de Morris | approuver/rejeter/réserves/clarifier | Recommendation uniquement / décision requise | Aucune action ne semble déjà consommée |
| Décision consommée | Vérifier la décision durable | examiner le fondement ; continuer | acceptée/rejetée/réserves | La décision se distingue visiblement de Recommendation |
| Examen du contrat | Comprendre ce qui sera exécuté | confirmer/annuler/revenir | préparation/prêt | Périmètre/effets/réserves compréhensibles avant l’autorité |
| Contrat fermé par défaut | Résoudre un fondement manquant/périmé | revenir/repréparer | non résolu/périmé | Confirmation indisponible ; récupération explicite |
| Exécution en préparation/en cours | Connaître le cycle de vie actuel | observer/annuler uniquement si pris en charge ; aucun nouvel essai | préparation/en cours | Aucune réussite optimiste ni démarrage dupliqué |
| Exécution réussie | Trouver le résultat | ouvrir preuve/revue | réussie | Relation entre Attempt et preuve claire |
| Exécution échouée/arrivée à expiration | Comprendre l’échec et l’action suivante sûre | examiner les preuves ; revenir à la décision | échouée/timeout/bloquée | Aucun nouvel essai automatique implicite |
| Evidence/ReviewBundle | Examiner faits, complétude et conclusion | déplier la provenance/télécharger uniquement si pris en charge | absent/chargement/disponible/incomplet/erreur de lecture | Preuve brute et conclusion de revue distinguables |
| Recommendation après preuve | Comprendre la prochaine suggestion de Nora | revenir à une décision explicite | analyse/Recommendation/périmée | Recommendation reste sans autorité |
| Vide/chargement/erreur | Récupérer sans connaissance de l’implémentation | réessayer/revenir/créer | états agrégés | « Aucun », « inconnu » et « échec de lecture » sont distincts |
| Rechargement/reprise | Reprendre honnêtement | reprendre depuis le résultat durable/requalifier | résultat durable + perte du contexte local | Le contexte conservé et perdu est explicite |

Le futur Figma doit représenter la hiérarchie sémantique, l’autorité et la récupération. Il ne doit pas figer par défaut les pixels, colonnes ou composants des écrans P0 actuels.

## 16. Futur contrat de preuve fonctionnelle

Après **ACCEPT** Morris de l’exit proof G-UX-15 Slice A, puis après autorisations séparées de Figma et UI Delivery, un E2E navigateur doit prouver substantiellement :

créer/ouvrir un projet
→ s’orienter dans l’état du projet
→ converser avec Nora
→ qualifier la demande
→ examiner Proposal/Recommendation structurées
→ consommer la HumanDecision explicite de Morris
→ examiner ExecutionContract
→ confirmer l’exécution contrôlée
→ observer le cycle de vie de l’Attempt
→ recevoir Evidence
→ recevoir ReviewBundle
→ Nora analyse les preuves
→ Recommendation affichée comme Recommendation
→ LPS mis à jour factuellement
→ recharger/reprendre
→ le résultat durable pertinent reste visible.

Couches de preuve requises :

1. **E2E navigateur :** flux fonctionnel observable et chemins négatifs d’autorité.
2. **Capture visuelle d’exécution :** tous les états principaux, vides, de chargement, d’erreur et de récupération.
3. **Comparaison Figma/exécution :** conformité sémantique/d’interaction, pas seulement similarité de capture d’écran.
4. **UAT Morris :** compréhension de l’état, de l’autorité, de l’exécution et des preuves, y compris perte/reprise locale au processus.

La preuve négative doit inclure : Proposal périmée, décision rejetée, contrat non résolu, prévention du démarrage dupliqué, Attempt échouée/arrivée à expiration, preuve absente/incomplète, échec de réhydratation et Recommendation ne devenant pas HumanDecision.

Cette preuve est uniquement définie ; aucune partie n’est exécutée dans ce cycle.

## 17. Anti-objectifs et dépendances

Anti-objectifs :

- une page par objet de domaine ;
- un indicateur d’étapes global comme navigation principale ;
- un cockpit/tableau de bord permanent multi-panneaux ;
- un clone générique de messagerie ;
- un moteur d’état propre à l’interface ;
- masquer les validations d’autorité dans la prose conversationnelle ;
- rendre durable tout l’état local au processus avant la première preuve ;
- réutiliser une conception visuelle historique uniquement parce qu’elle existe ;
- supprimer les routes historiques avant la preuve de remplacement ;
- exposer la terminologie CKC/OA/SQLite/REAL comme contenu produit normal ;
- périmètre M6, exécution Figma, UI Delivery ou Cursor REAL.

Dépendances avant progression autorisée :

- **Satisfaites (timeline) :** D-PRE-M6-UX-01/02/03 adoptés ; process-local premier test accepté ; readiness G-UX-01→15 classifiée ; SELECT SLICE A ; implémentation + amend + **final amend** Slice A (locale).
- **Historique supersédé :** D-PRE-M6-UX-04 = REQUALIFY → SELECT/AMEND/FINAL AMEND → **ACCEPT EXIT PROOF** (consommés).
- **Ouvertes :** controlled integration / PR readiness (candidat 5 fichiers) ; D-PRE-M6-UX-05 (Figma GO) ; UI Delivery après Figma validé ; G-UX-08 / G-UX-10 hors Slice A ; Confirmation process-local reserve.
- GO distinct pour Figma Visual Contract uniquement lorsque les prérequis pré-Figma du §21/§26 sont stables.
- Validation Figma avant UI Delivery.
- fixture ≠ preuve produit du chemin critique ; OA/limites applicatives préservées.

## 18. Dossier de décisions Morris — STATUTS CONSOMMÉS

Décision Morris exacte consommée : `ok ta recommandation est tres bien, go`.

### D-PRE-M6-UX-01 — Parcours utilisateur canonique M1→M5

**Statut : ADOPTED BY MORRIS.**

Signification : adopter le parcours M1→M5 canonique défini dans cet artefact, avec la limitation process-local explicite du premier test.

### D-PRE-M6-UX-02 — Architecture fonctionnelle de l’information

**Statut : ADOPTED BY MORRIS.**

Signification : Projets → Projet actuel → historique contextuel → Diagnostics optionnels ; Conversation dominante ; living project state accessible ; décisions / exécution / preuves contextualisées ; pas de navigation une-page-par-objet ; Project ≠ Cycle.

### D-PRE-M6-UX-03 — Principe de réutilisation UI

**Statut : ADOPTED BY MORRIS AT PRINCIPLE LEVEL.**

Signification :

- KEEP l’ossature runtime/domaine/application M1→M5 utile ;
- réutiliser l’UI existante sélectivement par comportement / câblage / modèle d’information ;
- ne pas traiter le design visuel historique comme référentiel cible ;
- ne pas créer de Frankenstein UX ;
- ne pas réutiliser les moteurs d’état / cycles de vie D1/P0/OPS1 comme moteurs produit parallèles ;
- ne pas supprimer l’UI historique encore.

**Important :** ce GO n’adopte **pas** automatiquement chaque disposition individuelle KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER. Celles-ci restent soumises aux gates de readiness / Delivery.

### FIRST-TEST PROCESS-LOCAL LIMITATION

**Statut : ACCEPTED BY MORRIS.**

Conversation / Proposal peuvent rester process-local pour le premier test utilisateur fonctionnel borné. Pas de nouvelle persistance. Voir §11.

### D-PRE-M6-UX-04 — Écarts d’exécution bloquants / G-UX-15

**Statut historique : REQUALIFY G-UX-15** (décision Morris initiale de qualification).

**Timeline supersédante :**
1. SELECT SLICE A — G-UX-15 ONLY ;
2. AMEND G-UX-15 SLICE A (sentinels / replay / identité canonique) ;
3. **FINAL AMEND** G-UX-15 SLICE A (gouvernance replay + failed T-A5 + sync artefact).

**Statut courant :** SLICE A EXIT PROOF ACCEPTED BY MORRIS — TECHNICAL APPLICATION-WIRING BLOCKER CLOSED — FIXTURE-SAFE TECHNICAL PROOF ACCEPTED — PRODUCT/BROWSER E2E STILL PENDING

**Confirmation reserve :** Memory / process-local — **KEEP RESERVE FOR NOW** — NON-BLOCKING for accepted technical exit proof — exit trigger = future UAT/product proof demonstrating unsafe confirmation/restart ambiguity.

Chemin durable (préservé / câblé en Slice A) :

HumanDecision / DecisionBasis → ExecutionContract M3 durable non résolu → ExecutionContract exécutable résolu / successeur valide → Confirmation existante → StartExecution existant → ExecutionAttempt existante

sans : modifier le contrat non résolu en place ; contourner le fail-closed ; traiter la fixture comme preuve produit du chemin critique ; créer un séquenceur parallèle ; consommer REAL.

Implémentation candidat **présente** localement (non commitée). Voir §22.

### D-PRE-M6-UX-05 — Futur cycle Figma Visual Contract

**Statut : NO DECISION YET / FIGMA NOT AUTHORIZED.**

Ce GO n’autorise pas le Figma Visual Contract.

## 19. Recommendation, réserves et prochaine validation

### Recommendation (post-adoption)

La baseline fonctionnelle est adoptée. Slice A G-UX-15 exit proof est **ACCEPTED BY MORRIS** (technical blocker CLOSED). Prochaine gate **repo** : Cycle 13 PR READINESS du candidat local 5 fichiers. Prochaine gate **produit** après intégration : D-PRE-M6-UX-05 Figma GO.

### Réserves ouvertes

1. G-UX-15 SLICE A EXIT PROOF ACCEPTED BY MORRIS — TECHNICAL APPLICATION-WIRING BLOCKER CLOSED — FIXTURE-SAFE TECHNICAL PROOF ACCEPTED — PRODUCT/BROWSER E2E STILL PENDING ; Confirmation process-local reserve doit rester visible ; product E2E pending.
2. G-UX-08 — boucle AMEND incomplete ; requise pour parcours complet, pas pour premier happy-path GO-only.
3. G-UX-10 — actualité Recommendation à définir/câbler sans nouveau modèle de décision.
4. G-UX-09 — process-local accepté temporairement pour le premier test uniquement.
5. Dispositions individuelles de composants / RETIRE — non consommées.
6. M5-C owner / exit — dette de gouvernance distincte.
7. Roadmap sync — après revue / décision d’intégration ; non autorisée ici.

### Prochaine validation

1. ChatGPT re-lit le Review Handoff amend et vérifie C1/C2/C3 + artefact.
2. Morris **ACCEPT G-UX-15 SLICE A EXIT PROOF** (ou AMEND / CORRECT).
3. Seulement ensuite : intégration/capitalisation ; puis, séparément, D-PRE-M6-UX-05 pour Figma.

M6 reste **NOT STARTED / NOT AUTHORIZED**.

## 20. Sécurité et anti-revendications finales

- Artefacts projet créés dans ce cycle : **0**.
- Artefact pré-M6 local existant modifié : **1**.
- Resolver G-UX-15 + tests Slice A (locaux, non commités) : **présents**.
- Autres docs projet / Roadmap / Build Doctrine / v3 framing : **0**.
- UI routes/composants : **0**.
- Actions Figma : **0**.
- UI Delivery : **0**.
- G-UX-08 / G-UX-10 implementation : **0**.
- Travail M6 : **0**.
- Cursor REAL / Gate D : **0**.
- OA domain/infrastructure : **0**.
- Retrait M5-C / adoption runtime v3 : **0**.
- Commit / push / PR projet : **0**.
- Review Handoff push : autorisé L3 borné (hors artefact projet).

**Anti-revendications :**

- baseline fonctionnelle ADOPTÉE ≠ UX visuelle approuvée
- baseline fonctionnelle ADOPTÉE ≠ Figma autorisé
- gap readiness complète ≠ gap implementation complète
- G-UX-15 TECHNICAL BLOCKER CLOSED ≠ PRODUCT E2E PROVEN ≠ FIGMA AUTHORIZED ≠ UI DELIVERY AUTHORIZED ≠ PRE-M6 COMPLETE ≠ ON MAIN
- Figma readiness READY WITH FUNCTIONAL RESERVES ≠ Figma GO
- UI Delivery readiness ≠ autorisation UI Delivery
- progrès pré-M6 ≠ autorisation M6
- ADOPT principe de réutilisation ≠ dispositions individuelles consommées

## 21. PRE-FIGMA GAP READINESS — G-UX-01 → G-UX-15

Taxonomie normalisée (dimensions co-existantes ; « comprendre avant Figma » ≠ « implémenter avant Figma ») :

- **FUNCTIONAL SEVERITY :** BLOCKER | REQUIRED | NON-BLOCKING | TEMPORARY ACCEPTED | DEFERRED
- **PRE-FIGMA STATUS :** MUST RESOLVE BEFORE FIGMA | MUST QUALIFY / DEFINE BEFORE FIGMA | FIGMA INPUT ONLY | NO PRE-FIGMA ACTION
- **FIGMA STATUS :** MUST REPRESENT IN VISUAL CONTRACT | OPTIONAL / DIAGNOSTIC | OUT OF FIGMA SCOPE
- **DELIVERY STATUS :** IMPLEMENT IN PRE-M6 UI DELIVERY | IMPLEMENT IN DISTINCT PRE-DELIVERY TECHNICAL SLICE | NO IMPLEMENTATION REQUIRED | DEFERRED
- **PROOF STATUS :** MUST PROVE IN BROWSER E2E | MUST PROVE IN VISUAL COMPARISON | MUST PROVE IN MORRIS UAT | NOT REQUIRED FOR FIRST PROOF

Vérification factuelle : base Git `2f0d7236…` ; sources ciblées `prepareM3FromDecision.ts`, `confirmAndExecuteF3Fixture.ts` / `ProjectAssistantPanel.tsx`, `recordDecision.ts`, `supersedeExecutionContract.ts`, `recommendNextGate.ts`, `rehydrateEvidenceOutcomeFromLps.ts`. Aucune preuve trouvée pour rétrograder G-UX-15 hors BLOCKER.

### G-UX-01 — Entrée canonique `/studio` manquante

| Champ | Valeur |
|---|---|
| Classe source | UX INFORMATION ARCHITECTURE GAP |
| Condition factuelle actuelle | Toujours valide : pas d’entrée projet canonique `/studio` ; démarrages concurrents |
| Étapes du parcours | Orientation / créer-ouvrir projet |
| Impact utilisateur | Confusion d’entrée ; parcours produit non unique |
| Risque actuel | Moyen (orientation) |
| Dimension bloquante | IA / navigation |
| Sévérité fonctionnelle | REQUIRED |
| Pré-Figma | FIGMA INPUT ONLY (IA déjà adoptée) |
| Figma | MUST REPRESENT IN VISUAL CONTRACT |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve / UAT | MUST PROVE IN BROWSER E2E ; MUST PROVE IN MORRIS UAT |
| Acceptation temporaire | Non pour le produit cible |
| Report possible | Non pour la sortie pré-M6 |
| Dépendance | D-PRE-M6-UX-02 adopté |
| Tranche proposée | UI Delivery navigation |
| Traitement le plus simple | Destination Projets + redirections ; réutiliser lectures OA |
| Risque architecture parallèle | Faible |
| Preuve de clôture | Route d’entrée unique + E2E orientation |
| Gate Morris | Confirmation visuelle puis Delivery (pas de nouveau modèle de domaine) |
| Owner | Owner missing |
| Disposition readiness | DEFINE VIA ADOPTED IA → REPRESENT IN FIGMA → IMPLEMENT IN DELIVERY |

### G-UX-02 — Routes historiques présentées comme pairs

| Champ | Valeur |
|---|---|
| Classe source | HISTORICAL UI DEBT |
| Condition factuelle actuelle | Toujours valide : P0 / D1 / OA / OPS1 co-visibles |
| Étapes | Orientation / navigation |
| Impact | Fausse équivalence de chemins |
| Risque | Moyen |
| Dimension bloquante | Navigation / visibilité |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (politique de navigation) |
| Figma | MUST REPRESENT IN VISUAL CONTRACT (nav canonique seulement) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY (masquer/geler ; ne pas supprimer) |
| Preuve | MUST PROVE IN BROWSER E2E ; MUST PROVE IN MORRIS UAT |
| Temporaire / report | RETIRE LATER = futur gate ; FREEZE maintenant |
| Dépendance | D-PRE-M6-UX-03 principe |
| Tranche | UI Delivery navigation |
| Traitement simple | Masquer chemins historiques de la nav canonique |
| Risque parallèle | Faible si pas de fusion de moteurs |
| Preuve de clôture | Nav canonique seule ; routes historiques non liées |
| Gate Morris | Disposition de masquage ; RETIRE ultérieur séparé |
| Owner | Owner missing |
| Disposition | DEFINE NAV POLICY BEFORE FIGMA → REPRESENT → HIDE IN DELIVERY → RETIRE LATER |

### G-UX-03 — Concepts d’implémentation exposés

| Champ | Valeur |
|---|---|
| Classe | UX PRESENTATION GAP |
| Condition | Toujours valide : CKC / IDs / SQLite / indicateurs techniques exposés |
| Étapes | Orientation / lecture d’état |
| Impact | Charge cognitive / vocabulaire non produit |
| Risque | Moyen |
| Dimension | Présentation |
| Sévérité | REQUIRED |
| Pré-Figma | FIGMA INPUT ONLY |
| Figma | MUST REPRESENT (résumé utilisateur ; diagnostics progressifs) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve | MUST PROVE IN VISUAL COMPARISON ; MUST PROVE IN MORRIS UAT |
| Temporaire / report | Non pour surface canonique |
| Dépendance | §9 états |
| Tranche | UI Delivery présentation |
| Traitement | Progressive disclosure ; diagnostics optionnels |
| Risque parallèle | Faible |
| Preuve clôture | Capture + UAT sans jargon obligatoire |
| Gate Morris | Validation visuelle |
| Owner | Owner missing |
| Disposition | FIGMA INPUT → DELIVERY COPY/PRESENTATION |

### G-UX-04 — Assistant monolithique / objets structurés concurrents

| Champ | Valeur |
|---|---|
| Classe | UX PRESENTATION GAP |
| Condition | Toujours valide : long panneau unique concurrent |
| Étapes | Conversation → décision → exécution → preuve |
| Impact | Objets d’autorité perdus dans le flux |
| Risque | Élevé UX |
| Dimension | Composition / états |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (états §9 déjà définis) |
| Figma | MUST REPRESENT IN VISUAL CONTRACT |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve | E2E + visual + UAT |
| Temporaire | Non |
| Dépendance | D-PRE-M6-UX-01/02 |
| Tranche | UI Delivery composition |
| Traitement | Surfaces contextuelles liées à conversation dominante ; pas de nouveau moteur |
| Risque parallèle | Faible si ports OA réutilisés |
| Preuve clôture | États structurés distincts observables |
| Gate Morris | Validation Figma puis Delivery |
| Owner | Owner missing |
| Disposition | DEFINE STATES → REPRESENT → IMPLEMENT IN DELIVERY |

### G-UX-05 — Comportement D1 intent-first non câblé à OA

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP |
| Condition | Toujours valide : D1 non branché sur M1→M5 OA |
| Étapes | Conversation / intention |
| Impact | Comportement utile absent du chemin canonique |
| Risque | Élevé si moteur D1 réutilisé |
| Dimension | Comportement / câblage |
| Sévérité | REQUIRED (parcours cible) |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (contrat de comportement) |
| Figma | MUST REPRESENT (comportement cible, pas écrans D1) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY sauf prérequis applicatif découvert |
| Preuve | E2E + UAT |
| Temporaire | Non pour parcours cible |
| Dépendance | HARVEST comportement ; jamais stockage D1 |
| Tranche | UI Delivery behavior harvest |
| Traitement | Recréer sur actions OA ; ne pas relier stockages/lifecycles D1 |
| Risque parallèle | **Élevé** si état D1 réutilisé |
| Preuve clôture | Intention → qualification OA sans store D1 |
| Gate Morris | Revue anti-parallèle Delivery |
| Owner | Owner missing |
| Disposition | DEFINE BEHAVIOR → REPRESENT → IMPLEMENT ON OA ONLY |

### G-UX-06 — Destination / projection historique projet absente

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP |
| Condition | Toujours valide : pas de destination stable d’historique |
| Étapes | Reprise / preuve / décision passée |
| Impact | Continuité et auditabilité utilisateur faibles |
| Risque | Moyen |
| Dimension | Modèle d’information / projection |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA |
| Figma | MUST REPRESENT |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY (ports durables existants) |
| Preuve | E2E + UAT |
| Temporaire | Non pour sortie pré-M6 |
| Dépendance | LPS / Decision / Attempt / Evidence / RB |
| Tranche | UI Delivery history projection |
| Traitement | Projection/requête ; pas de timeline store parallèle |
| Risque parallèle | Moyen si nouveau store |
| Preuve clôture | Historique lisible depuis faits durables |
| Gate Morris | Revue modèle d’information |
| Owner | Owner missing |
| Disposition | DEFINE INFO MODEL → REPRESENT → IMPLEMENT AS PROJECTION |

### G-UX-07 — Libellés runtime obsolètes / inexacts

| Champ | Valeur |
|---|---|
| Classe | UX PRESENTATION GAP |
| Condition | Toujours valide : wording « local/read-only/not ready » trompeur |
| Étapes | Orientation / autorité |
| Impact | Fausse lecture de capacité |
| Risque | Moyen |
| Dimension | Copy / sémantique d’autorité |
| Sévérité | REQUIRED |
| Pré-Figma | FIGMA INPUT ONLY |
| Figma | MUST REPRESENT (labels d’autorité) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve | Visual comparison + UAT |
| Temporaire | Non |
| Dépendance | Faible |
| Tranche | UI Delivery copy |
| Traitement | Remplacer par labels de capacité/autorité |
| Risque parallèle | Faible |
| Preuve clôture | Copy alignée capacité réelle |
| Gate Morris | Validation visuelle |
| Owner | Owner missing |
| Disposition | FIGMA INPUT → DELIVERY COPY |

### G-UX-08 — AMEND durable sans boucle clarification/requalification complète

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP |
| Condition | Toujours valide : `recordDecision` mappe AMEND → `AMENDMENT_REQUIRED` / HumanDecision `amended` ; **pas** de `DecisionBasis` ni de lien LPS `decisionIds` sur AMEND (réservés aux GO acceptés) ; pas de boucle câblée clarification → nouvelle Proposal → nouvelle décision |
| Étapes | Décision → clarification → requalification |
| Impact | Amendement enregistré sans reprise gouvernée |
| Risque | Moyen |
| Dimension | Câblage post-décision |
| Sévérité | REQUIRED (parcours complet) ; **NON blocker** du premier happy-path GO-only |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA |
| Figma | MUST REPRESENT (état amended + récupération) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY **ou** tranche applicative distincte avant E2E/UAT complet |
| Preuve | MUST PROVE IN BROWSER E2E ; MUST PROVE IN MORRIS UAT (scénario amend) ; **NOT REQUIRED FOR FIRST PROOF** GO-only |
| Temporaire | Possible pour premier test GO-only seulement |
| Report | Non pour sortie fonctionnelle complète |
| Dépendance | F1/F2 orchestration ; Proposal process-local ; HumanDecision `amended` (sans DecisionBasis AMEND) |
| Tranche | Candidate B avec G-UX-15 **non forcée** ; tranche Delivery séparée recommandée |
| Traitement | Depuis HumanDecision amended → conversation → nouvelle Proposal → nouvelle décision (DecisionBasis seulement au prochain GO) ; Proposal stale refusée ; réutiliser F1/F2 |
| Risque parallèle | Moyen si ancienne Proposal mutée / autorité inventée |
| Preuve clôture | Scénario AMEND → nouvelle Proposal → GO |
| Gate Morris | Autorisation de traitement ; voir §23 |
| Owner | Owner missing |
| Disposition | MUST DEFINE BEFORE FIGMA → IMPLEMENT BEFORE FULL E2E/UAT → NOT SAME MUST-SLICE AS G-UX-15 |

### G-UX-09 — Conversation / Proposal process-local

| Champ | Valeur |
|---|---|
| Classe | DURABILITY GAP |
| Condition | Toujours valide : non reprenables après restart serveur |
| Étapes | Conversation / qualification / reprise |
| Impact | Perte de contexte de travail ; autorité durable intacte |
| Risque | Moyen UX ; élevé si persistance ad hoc |
| Dimension | Continuité |
| Sévérité | **TEMPORARY ACCEPTED** (Morris) pour premier test borné |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (sémantique honnête) |
| Figma | MUST REPRESENT (reload/re-entry honnête) |
| Delivery | NO IMPLEMENTATION REQUIRED (persistance) pour premier test ; honest UX in Delivery |
| Preuve | MUST PROVE IN MORRIS UAT (reprise) ; E2E reprise |
| Temporaire | **Oui — ACCEPTED BY MORRIS** premier test only |
| Report | Future durability seulement si UAT prouve nécessité |
| Dépendance | §11 ; points d’ancrage durables |
| Tranche | Aucune tranche de persistance maintenant |
| Traitement | Notices + reprise durable + requalification ; **pas** de nouveau store |
| Risque parallèle | Élevé si persistance ad hoc |
| Preuve clôture | Scénario restart honnête |
| Gate Morris | Déjà consommé ; exit = preuve UAT de nécessité |
| Owner | Morris (acceptation) |
| Disposition | TEMPORARY ACCEPTED — HONEST UX REQUIRED — NO NEW PERSISTENCE |

### G-UX-10 — Actualité / supersession Recommendation non explicite

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP |
| Condition | Toujours valide : `RecommendNextGate` read-only avec snapshots/versions ; réhydratation LPS → evidenceIds/reviewBundleIds ; UI ne rend pas toujours la Recommendation périmée vs courante |
| Étapes | Post-preuve / Recommendation → décision |
| Impact | Suggestion Nora potentiellement stale |
| Risque | Moyen (autorité cognitive) |
| Dimension | Dérivation / présentation |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA |
| Figma | MUST REPRESENT (périmée vs courante) |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY (dérivation préférée) |
| Preuve | E2E + UAT ; Recommendation ≠ Decision |
| Temporaire | Non pour sortie complète |
| Report | Non |
| Dépendance | Evidence / RB / LPS ; pas G-UX-15 must-group |
| Tranche | Delivery wiring ; option C non forcée |
| Traitement | Dériver stale depuis faits durables versionnés ; **pas** de nouveau modèle Recommendation durable sauf preuve de nécessité |
| Risque parallèle | Moyen si Recommendation devient Decision |
| Preuve clôture | Stale visible après nouvel Attempt/Evidence/RB |
| Gate Morris | Revue modèle de fraîcheur ; voir §24 |
| Owner | Owner missing |
| Disposition | DEFINE FRESHNESS FROM DURABLE FACTS → REPRESENT → IMPLEMENT WITHOUT NEW PERSISTENCE DEFAULT |

### G-UX-11 — Pas d’E2E navigateur canonique

| Champ | Valeur |
|---|---|
| Classe | EVIDENCE GAP |
| Condition | Toujours valide : E2E couvre P0/D1/OPS1 ; pas `/studio/projects/*` canonique |
| Étapes | Preuve de sortie pré-M6 |
| Impact | Pas de preuve produit navigateur unique |
| Risque | Preuve |
| Dimension | Proof |
| Sévérité | REQUIRED (exit pré-M6) ; NON-BLOCKING pour démarrer Figma |
| Pré-Figma | NO PRE-FIGMA ACTION |
| Figma | OUT OF FIGMA SCOPE |
| Delivery | NO IMPLEMENTATION REQUIRED pendant Figma ; E2E **après** UI Delivery |
| Preuve | MUST PROVE IN BROWSER E2E (exit) |
| Temporaire | N/A |
| Report | Non pour exit |
| Dépendance | Post Delivery + post G-UX-15 |
| Tranche | Proof contract §16 |
| Traitement | Playwright parcours §16 |
| Risque parallèle | Faible |
| Preuve clôture | E2E vert sur parcours canonique |
| Gate Morris | Exit proof gate |
| Owner | Owner missing |
| Disposition | PROOF AFTER DELIVERY — MANDATORY FOR PRE-M6 EXIT |

### G-UX-12 — Dispositions UI / retirement non consommées

| Champ | Valeur |
|---|---|
| Classe | GOVERNANCE GAP |
| Condition | Toujours valide ; principe réutilisation adopté ; dispositions individuelles ouvertes |
| Étapes | Gouvernance |
| Impact | Dette de retirement |
| Risque | Faible court terme |
| Dimension | Governance |
| Sévérité | NON-BLOCKING |
| Pré-Figma | NO PRE-FIGMA ACTION (visibilité canonique peut être designée) |
| Figma | OPTIONAL / DIAGNOSTIC (nav canonique seulement) |
| Delivery | NO IMPLEMENTATION REQUIRED pour RETIRE ; masquage ≠ retire |
| Preuve | NOT REQUIRED FOR FIRST PROOF |
| Temporaire | Oui — FREEZE |
| Report | RETIRE LATER |
| Dépendance | D-PRE-M6-UX-03 |
| Tranche | Future retirement gate |
| Traitement | Concevoir nav canonique ; RETIRE après remplacement prouvé |
| Risque parallèle | Faible |
| Preuve clôture | Décision Morris RETIRE + preuve remplacement |
| Gate Morris | Future RETIRE |
| Owner | Owner missing |
| Disposition | PRINCIPLE ADOPTED — INDIVIDUAL RETIRE OPEN — NOT FIGMA BLOCKER |

### G-UX-13 — États loading / empty / error / recovery canoniques manquants

| Champ | Valeur |
|---|---|
| Classe | UX PRESENTATION GAP |
| Condition | Toujours valide sur parcours agrégé |
| Étapes | Tous |
| Impact | Récupération opaque |
| Risque | Moyen |
| Dimension | États UX |
| Sévérité | REQUIRED |
| Pré-Figma | MUST QUALIFY / DEFINE BEFORE FIGMA (§9) |
| Figma | MUST REPRESENT |
| Delivery | IMPLEMENT IN PRE-M6 UI DELIVERY |
| Preuve | Visual + E2E + UAT |
| Temporaire | Non |
| Report | Non |
| Dépendance | §9 |
| Tranche | UI Delivery states |
| Traitement | Implémenter modèle §9 |
| Risque parallèle | Faible |
| Preuve clôture | États couverts dans captures/E2E |
| Gate Morris | Validation visuelle |
| Owner | Owner missing |
| Disposition | DEFINE (§9) → REPRESENT → IMPLEMENT → PROVE |

### G-UX-14 — Multi-user / IAM / administration absents

| Champ | Valeur |
|---|---|
| Classe | NON-BLOCKING FUTURE ENHANCEMENT |
| Condition | Toujours valide ; hors pré-M6 |
| Étapes | N/A pré-M6 |
| Impact | Aucun sur pilote Morris mono-acteur |
| Risque | Élevé si anticipé maintenant |
| Dimension | Future |
| Sévérité | **DEFERRED** |
| Pré-Figma | NO PRE-FIGMA ACTION |
| Figma | OUT OF FIGMA SCOPE |
| Delivery | DEFERRED |
| Preuve | NOT REQUIRED FOR FIRST PROOF |
| Temporaire | N/A |
| Report | **Oui — FUTURE / M6+** |
| Dépendance | Aucune pré-M6 |
| Tranche | Aucune |
| Traitement | Ne pas anticiper l’architecture |
| Risque parallèle | Élevé si conçu maintenant |
| Preuve clôture | Qualification future distincte |
| Gate Morris | Future scope |
| Owner | Owner missing |
| Disposition | DEFERRED — NOT PRE-M6 BLOCKER |

### G-UX-15 — Contrat M3 durable ne peut pas entrer dans l’exécution gouvernée canonique

| Champ | Valeur |
|---|---|
| Classe | APPLICATION WIRING GAP — **BLOCKING** |
| Condition | **Gap historique M3 PREPARE-only inchangé.** Slice A ajoute `resolveM3ExecutionContract` : supersession vers successeur résolu via input applicatif explicite ; Confirmation/Select/StartExecution existants. UI assistant toujours sans bouton M3 confirm (hors scope). Fixture path séparée inchangée. |
| Étapes | Décision → contrat → confirmation → Attempt |
| Impact | Chemin applicatif durable M3→exécution désormais prouvable fixture-safe ; preuve produit navigateur / REAL toujours future |
| Risque | Résiduel produit : intégration main + UI/E2E + Confirmation process-local reserve |
| Dimension | Câblage applicatif / cycle de vie contrat |
| Sévérité | **TECHNICAL BLOCKER = CLOSED BY MORRIS** · **PRODUCT UX / E2E PROOF = PENDING** Pre-M6 Delivery/UAT |
| Pré-Figma | Définition + implémentation Slice A **disponibles** ; Figma peut représenter états unresolved/successeur sans masquer la réserve d’acceptation |
| Figma | MUST REPRESENT — **FIGMA NOT AUTHORIZED** |
| Delivery | Slice A technique **exit proof ACCEPTED** (local) ; UI Delivery **NOT AUTHORIZED** (intégration pending + Figma not authorized + Delivery gate distinct) |
| Preuve | Fixture-safe PASS (`gux15.resolveM3ExecutionContract.test.ts`) ; REAL=0 ; browser E2E future |
| Temporaire | **Non** pour claim produit |
| Report | Technical blocker closed ; product proof **not deferred indefinitely** — pending Delivery/UAT |
| Dépendance | HumanDecision, DecisionBasis, ExecutionContract lifecycle, Confirmation, StartExecution, ExecutionAttempt, AgentCapability |
| Tranche | **SLICE A SELECTED + EXIT PROOF ACCEPTED BY MORRIS** (local / NOT YET ON MAIN) |
| Traitement | `resolveM3ExecutionContract` — supersession existante ; ZERO REAL |
| Risque parallèle | Mitigé dans Slice A (pas de second séquenceur / pas de mutation in-place) |
| Preuve clôture | Voir §22.4 + tests |
| Gate Morris | **ACCEPT G-UX-15 SLICE A EXIT PROOF — CONSUMED** · prochain repo gate = PR READINESS ; prochain product gate = D-PRE-M6-UX-05 |
| Owner | Owner missing |
| Disposition | **SLICE A EXIT PROOF ACCEPTED BY MORRIS — TECHNICAL APPLICATION-WIRING BLOCKER CLOSED — FIXTURE-SAFE TECHNICAL PROOF ACCEPTED — PRODUCT/BROWSER E2E STILL PENDING** |

#### Mise à jour Slice A — fichiers

- `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts`
- export `f3/index.ts`
- `__tests__/project-assistant/gux15.resolveM3ExecutionContract.test.ts`
- Original PREPARE préservé ; successor via supersession ; input explicite ; pas de changement DecisionBasis/Confirmation persistence ; pas d’UI.

---

## 22. Qualification ciblée G-UX-15 — contrat fonctionnel / applicatif

> Historique de qualification conservé. Statut d’implémentation Slice A : §22.4.

### 22.1 Faits runtime confirmés

1. **Création M3 durable :** `prepareM3FromDecision` construit un ExecutionContract PREPARE-only depuis HumanDecision / DecisionBasis.
2. **Champs non résolus :** action peut être `UNRESOLVED_ACTION` ; **target toujours** `UNRESOLVED_TARGET` (pas de champ target explicite sur DecisionBasis) ; `requiredCapabilities = ["cap:unresolved"]` ; `reversibility = irreversible` fail-closed ; stopConditions ACTION/TARGET/CAPABILITY/REVERSIBILITY_UNRESOLVED ; contraintes PREPARE_ONLY, NO_CURSOR_REAL, NO_ATTEMPT, NO_GATE_D.
3. **Validation :** contrat M3 non exécutable (`executionAllowed: false`) ; confirmation UI absente pour ce chemin.
4. **Supersession :** `SupersedeExecutionContract` existe — prior non superseded/cancelled ; OCC version ; crée successeur validé ; prior devient superseded ; pas de mutation silencieuse des champs critiques sans overrides.
5. **Confirmation :** chemin fixture orchestre request→grant→confirm ; Confirmations restent **Memory process-local** (`createSqliteDecisionServices`) alors que HumanDecision/EC sont SQLite — limite de reprise distincte.
6. **StartExecution :** unique séquenceur d’autorité ; utilisé par `confirmAndExecuteF3Fixture` après Select.
7. **ExecutionAttempt :** cycle de vie Product SQLite ; Select crée Attempt `accepted` ; StartExecution lance.
8. **AgentCapability :** match exact capabilities/action/target/scope ; fixture utilise `cap:f3-fixture-docs` ; M3 laisse `cap:unresolved` → aucun agent ne matche ; projection `selectedAgentRef:null`.
9. **Divergence fixture :** UI `canConfirmF3` = fixture prepare seulement ; M3 prepare est lecture seule (pas de bouton confirm/execute M3) ; aucune action serveur M3 execute.
10. **Restart durable :** HumanDecision / EC M3 / Attempt / Evidence / RB / LPS refs survivent ; Conversation/Proposal/Confirmation Memory non.

### 22.2 Contrat cible pour résolution — HISTORICAL QUALIFICATION — SUPERSEDED WHERE DECIDED BELOW

> Historique de qualification. L’implémentation applicative correspondante est `resolveM3ExecutionContract` (§22.4).

| Question | Statut |
|---|---|
| Input autoritatif pour action / target / capability / réversibilité (Slice A technique) | **DECIDED / IMPLEMENTED** — input applicatif explicite (`M3ResolvedExecutionFields`) ; acquisition UX future = Figma/UI, pas architecture Slice A |
| Successeur ExecutionContract via supersession existante | **DECIDED / IMPLEMENTED** |
| Contrat original PREPARE conservé (audit) | **DECIDED / IMPLEMENTED** |
| Confirmation existante réutilisée | **DECIDED** (Memory/process-local — limitation résiduelle explicite, non changée par Slice A) |
| StartExecution seul séquenceur | **DECIDED / IMPLEMENTED** (composition appelant) |
| Preuve fixture-safe ZERO REAL | **DECIDED** (tests) |
| Confirmation durability | **RÉSIDUEL** — Memory/process-local ; non prouvé blocker actuel de l’exit proof technique |
| Preuve REAL / Gate D | **HORS CYCLE** — GO Morris séparé uniquement |
| UI / Figma présentation des champs résolus | **FUTUR** — distinct de Slice A architecture |

### 22.3 Anti-revendications G-UX-15

Technical blocker CLOSED ≠ product/browser E2E proven. Fixture-safe proof accepted as **technical proof only**. ZERO REAL. Confirmation process-local = KEEP RESERVE. Local candidate ≠ on main. Figma/UI Delivery/M6 unauthorized. Aucun nouveau modèle de contrat / séquenceur.

### 22.4 Statut post Slice A + final amend exit-proof

**G-UX-15 = SLICE A EXIT PROOF ACCEPTED BY MORRIS — TECHNICAL APPLICATION-WIRING BLOCKER CLOSED — FIXTURE-SAFE TECHNICAL PROOF ACCEPTED — PRODUCT/BROWSER E2E STILL PENDING**

Amendements appliqués (cumul) :

- rejet de tous les stop-condition sentinels unresolved connus sur input explicite / successeur ;
- identité exacte du contrat M3 PREPARE canonique (`xct:m3:{safeDecisionId}` + idempotency) ;
- replay idempotent : supersession réussie + validation échouée → revalider le **même** successeur draft/proposed (pas de second supersede) ;
- **final :** gouvernance successor (MORRIS + decisionRefs exacts + `idem:m3-res:{decisionId}:{successorId}`) sur replay ;
- **final :** `failed` reconnu comme état T-A5 progressé légitime (pas de régression) ;
- **final :** `validated`-only MORRIS refuse ok:true (confirmation_required attendu).

**Morris ACCEPT CONSUMED.** Technical application-wiring blocker = **CLOSED**. Product/browser E2E proof remains **PENDING**. Figma GO / UI Delivery remain unauthorized until separate gates. Local candidate **NOT YET ON MAIN**.

---

## 23. Qualification ciblée G-UX-08 — AMEND

### Faits (vérifiés base `2f0d7236`)

- `recordDecision` : AMEND → Proposal `AMENDMENT_REQUIRED`, HumanDecision durable `amended`, `selectedOptionId: "opt:amend"`, `readyForNextGatedStep: false`.
- Asymétrie vs GO : AMEND **n’attache pas** de `DecisionBasis` ; **ne lien pas** LPS `decisionIds` (`linkToLivingProjectState: false`) ; `cycleInstanceId` typiquement absent sur la décision AMEND.
- UI : gate se ferme après AMEND ; carte « décision prise » ; **pas** de CTA « retour clarification / requalification » ; `canPrepareF3` / `canPrepareM3` restent faux.
- `NEEDS_CLARIFICATION` est déclaré dans les types F2 mais **jamais assigné** dans le code produit.
- Réutilisation incidente : un nouvel envoi utilisateur peut créer une **nouvelle** Proposal via F1/F2 ; ce n’est **pas** une boucle AMEND-aware.
- Proposal reste process-local ; Proposal terminale `AMENDMENT_REQUIRED` refuse une re-décision (`PROPOSAL_NOT_DECIDABLE`) ; stale = drift de contexte / statut terminal, pas une machine d’état post-AMEND.
- AMEND ne peut pas entrer M3 PREPARE (`status !== "accepted"` / absence de DecisionBasis).

### Comportement fonctionnel minimum requis

HumanDecision amended → conversation/clarification → nouvelle qualification → **nouvelle** Proposal → nouvelle décision (DecisionBasis + lien LPS uniquement si GO accepté).

Ne pas muter la Proposal amendée ; ne pas inventer un DecisionBasis pour AMEND.

### Relation à G-UX-15

Partage doctrine / HumanDecision / F2 / Proposal process-local, **pas** le cycle ExecutionContract → StartExecution. Corriger la boucle AMEND **ne** résout **pas** G-UX-15. Groupage possible mais **non nécessaire**. Voir §25.

Aucune implémentation **G-UX-08** dans ce cycle (hors Slice A).

---

## 24. Qualification ciblée G-UX-10 — fraîcheur Recommendation

### Faits

- `RecommendNextGate` : coordination **read-only** ; `kind: recommendation` ; `executionAuthority: false` ; snapshots versionnés ; détecte claim/bundle superseded / version mismatch.
- Réhydratation : LPS courant → `evidenceIds` / `reviewBundleIds` → readers → RecommendNextGate.
- Pas de modèle Recommendation durable distinct comme autorité.

### Modèle de fraîcheur candidat

Dériver « courante / périmée » depuis les faits durables versionnés (Attempt/Evidence/RB/LPS refs) et les snapshots de coordination. Afficher explicitement l’état périmé et le résultat remplaçant.

Point UI actuel : carte session `f3Execute.recommendation` vs réhydratation durable au remount — sans libellé « Recommendation périmée » si le LPS a avancé pendant que la carte session reste affichée.

**Défaut :** pas de nouvelle persistence Recommendation. N’ajouter un store que si preuve de nécessité (exit trigger futur).

Ne jamais transformer Recommendation en HumanDecision / autorité d’exécution.

Aucune implémentation **G-UX-10** dans ce cycle (hors Slice A).

---

## 25. Analyse des tranches de traitement cohérentes

### OBSERVATION

- G-UX-15 touche ExecutionContract supersession → Confirmation → StartExecution → Attempt.
- G-UX-08 touche post-AMEND F1/F2 / Proposal / Decision.
- G-UX-10 touche dérivation Evidence/RB/LPS / présentation Recommendation.
- Frontières d’application largement distinctes ; preuves indépendantes possibles.
- R18 autorise le groupage cohérent ; n’autorise pas l’inflation de scope.

### OPTIONS

| Option | Contenu | Avantage | Coût / risque |
|---|---|---|---|
| **SLICE A** | G-UX-15 seul | Plus petite capacité E2E critique ; PR reviewable ; prouvable isolément | AMEND/fraîcheur restent ouverts pour UAT complet |
| **SLICE B** | G-UX-15 + G-UX-08 | Couvre amend + exécution | Scope ↑ ; dépendances partagées limitées ; revue plus lourde |
| **SLICE C** | G-UX-15 + G-UX-08 + G-UX-10 | Max couverture applicative | Inflation ; G-UX-10 surtout présentation/dérivation Delivery |

### RECOMMENDATION

**SLICE A — G-UX-15 only** — **sélectionnée · exit proof ACCEPTED BY MORRIS** (local / NOT YET ON MAIN).

Traiter G-UX-08 et G-UX-10 comme tranches Delivery / wiring séparées. Ne pas forcer C.

Prochaine décision Morris produit (après intégration) : **D-PRE-M6-UX-05 / FIGMA VISUAL CONTRACT GO** (ou NO).

### MORRIS DECISION CONSUMED

**ACCEPT G-UX-15 SLICE A EXIT PROOF** — CONSUMED.

La sélection A/B/C est déjà consommée (SLICE A). Technical blocker CLOSED.

---

## 26. Verdicts de readiness

### FIGMA READINESS = **READY WITH FUNCTIONAL RESERVES**

**≠ Figma autorisé. D-PRE-M6-UX-05 = NO DECISION YET.**

Sens : le parcours, l’IA, les états §9/§15 et les définitions G-UX-08/10/15 sont assez stables pour qu’un futur Visual Contract représente fidèlement les états **sans masquer G-UX-15**.

Réserves fonctionnelles (peuvent rester ouvertes pendant un futur Figma, mais doivent être définies/représentées) :

- G-UX-15 technical blocker CLOSED / product E2E pending (ne pas masquer) ; Confirmation process-local reserve ;
- G-UX-08/10 définis pour représentation ;
- G-UX-01–07/13 inputs de design ;
- G-UX-09 sémantique de reprise honnête ;
- G-UX-11/12/14 hors ou non-bloquants Figma.

Prérequis avant un futur Figma GO : intégration du candidat accepté sur main + vérité post-merge ; D-PRE-M6-UX-05 GO distinct ; stabilité des définitions pré-Figma restantes.

### UI DELIVERY READINESS = **NOT READY**

Parce que :

- le candidat Slice A accepté n’est **pas encore intégré sur main** ;
- le Figma Visual Contract n’est pas autorisé / validé (D-PRE-M6-UX-05 = NO DECISION YET) ;
- UI Delivery reste un gate Morris distinct ultérieur.

Figma readiness ≠ Delivery readiness. Ce n’est **pas** parce que le blocker technique G-UX-15 serait encore ouvert (il est **CLOSED**).

Prérequis Delivery : intégration main → Figma GO + validation visuelle → GO Delivery séparé.

### ROADMAP

Read-only dans ce cycle. **ROADMAP SYNC REQUIRED AFTER GAP READINESS DECISION / INTEGRATION.**

---

## 27. Séquence de gates futurs (candidate)

1. ChatGPT review de cette capitalisation — **prochaine**.
2. **Cycle 13 PR READINESS** (candidat 5 fichiers local) — **next repo gate**.
3. Intégration / merge sur main (GO Morris ultérieur distinct) — **NOT AUTHORIZED in this cycle**.
4. Morris Figma GO (D-PRE-M6-UX-05) — **next product gate after integration** — NOT AUTHORIZED now.
5. Figma Visual Contract.
6. Validation visuelle Morris.
7. UI Delivery sur runtime existant.
8. Browser E2E + preuves visuelles runtime.
9. Comparaison Figma/runtime.
10. Morris UAT (incl. Confirmation / process-local honesty).
11. Revue dettes/gaps restants (G-UX-08/10/12, M5-C owner, Confirmation reserve).
12. M6 Entry Qualification **uniquement** sous GO séparé.

G-UX-15 technical exit proof = **ACCEPTED**. Technical blocker = **CLOSED**. Product proof / Figma / Delivery / M6 remain later.

---

## 28. Build Doctrine check (ce cycle)

| Règle | Vérification |
|---|---|
| R1 | Traitements proposés servent V3-F05/F02/F14/F15 et parcours pré-M6 |
| R2 | Capacité utilisateur complète prioritaire sur hardening non bloquant |
| R3 | Réutilisation runtime/application existante |
| R5/R20 | Process-local : exit = preuve UAT de nécessité |
| R6 | Pas d’architecture parallèle proposée |
| R7 | Fixture ≠ critical-path product proof |
| R8 | Tranches futures doivent produire capacité E2E |
| R11 | Pas de nouvelle dette volontaire sans owner+exit (M5-C owner déjà dette connue) |
| R18 | Groupage évalué ; recommandation anti-inflation (SLICE A) |
| R19 | Aucune claim READY/ADOPTED runtime v3 |

---

## 29. Compteurs de cycle (Cycle 15 — capitalisation acceptance)

G-UX-15 exit acceptance recorded = 1 · Pre-M6 baseline modified = 1 · Roadmap modified = 1 · Accepted Slice A code/test modified = 0 · Build Doctrine/v3/method = 0 · UI/Figma/Delivery/M6/REAL/Gate D = 0 · Confirmation implementation = 0 · project staging/commit/push/PR = 0 · Review Handoff push = 1 bounded L3

Accepted Slice A (frozen) : resolveM3ExecutionContract + exports + tests — **présents localement, inchangés, NOT YET ON MAIN**. G-UX-08/10 implementation = 0.

```

### 12. COMPLETE updated Convergence Roadmap
```markdown
# SFIA Studio Convergence Roadmap

| Métadonnée | Valeur |
| --- | --- |
| **Rôle** | Roadmap **vivante** de convergence vers l’utilisation complète de la doctrine produit SFIA Studio v3 |
| **Statut** | **VALIDATED — ACTIVE LIVING ROADMAP** |
| **Doctrine cible** | SFIA Studio v3 framing `30`–`37` (destination produit) |
| **Build Doctrine** | [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md) |
| **Snapshot Git** | origin/main @ `3467ecdf74ac2010c45f34545fb8684563dea547` |
| **Timestamp création** | 2026-08-12 21:53:10 CEST (+0200) *(historique)* |
| **Timestamp maintenance** | 2026-08-15 16:07 CEST (+0200) — PRE-M6 FUNCTIONAL BASELINE ADOPTED + G-UX READINESS COMPLETE + G-UX-15 SLICE A EXIT PROOF ACCEPTED BY MORRIS + TECHNICAL APPLICATION-WIRING BLOCKER CLOSED + CONFIRMATION PROCESS-LOCAL RESERVE KEEP + FIXTURE-SAFE TECHNICAL PROOF ONLY + CONTROLLED INTEGRATION PENDING (LOCAL / NOT YET ON MAIN) + FIGMA/UI DELIVERY/M6 UNAUTHORIZED + ZERO REAL — runtime v3 NON ADOPTED — NEXT REPO GATE = CYCLE 13 PR READINESS — NEXT PRODUCT GATE AFTER INTEGRATION = D-PRE-M6-UX-05 FIGMA GO |
| **Validation Morris** | 2026-08-13 02:05 +0200 (Europe/Paris) — Build Doctrine + Convergence Roadmap officiellement validées comme gouvernance de construction SFIA Studio |
| **Intégration Git** | Gouvernance : PR #334 / merge `1d09e4159932b3885817911e10a2d29a82ae9ea7` · **M1 :** PR #337 / head `5cbda862885b36658fc7f2b33a20311611da969e` / merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI SFIA Studio **#158** SUCCESS · **M2 :** PR #339 / head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` / merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI SFIA Studio **#162** SUCCESS · **M2 post-merge Roadmap :** PR #340 / merge `4a8a6121f8c46b60a3e4bd760e04c6dd4a64fd0a` · **M3 :** PR #341 / head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` / merge `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS · **M3 post-merge Roadmap :** PR #342 / merge `607763d9a1349d6b48633d8763f75ae3c07c84fc` · **M4 Architecture docs :** PR #343 / merge `e974b7306f7400249c31399fd2890d5817833dbf` · **M4 Delivery :** PR #344 / head `f7270b21ccdbcf1cd543879e7c4120d87b874479` / merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI SFIA Studio **#172** SUCCESS (same head `f7270b21` after Morris-authorized rerun ; initial T7-C08 Class C / M4 causality not established — diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` ; no code change between failure and success) · **M4 post-Delivery Roadmap :** PR #345 / merge `3575c8863d8a13b610dbfde96a33426a620b2c56` · **M4 pre-reproof bounding :** PR #346 / head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` / merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration · **M4 post-pre-reproof Roadmap :** PR #347 / merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS · **M4 GOVERNED REAL COMPLETION PROOF** handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · **M4 closure Roadmap :** PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · **M5 Entry Qualification** handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · **M5 Delivery (Option B + W1) :** PR #350 / head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` / merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI SFIA Studio **#184** SUCCESS · post-merge CI **#185** SUCCESS · **M5 UI/Nora durable rehydrate :** PR #351 / head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` / merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI SFIA Studio **#186** SUCCESS · post-merge CI **#187** SUCCESS · M5 exit re-evaluation handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab` · M5 EXIT PROOF **SATISFIED ON MAIN** · **M5 capitalization / Roadmap sync :** PR #352 / head `c26824c602ec041cb1d40e9078191c0f1cde4e95` / merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI SFIA Studio PR run **#31875337665** SUCCESS · post-merge CI run **#31875621317** SUCCESS · post-merge handoff `0121e184c936f8dc73ffe80e20d43027fec495d7` · blob `4c293ae07a0d516b16d6dd2d4087d3e25858e275` · GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · User wording **« ok go pour la modification »** · governed interpretation **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY — KEEP M5 CLOSED — KEEP M5-C — NO UX DESIGN EXECUTION YET — NO FIGMA ACTION YET — NO UI DELIVERY — NO M6 — ZERO REAL — NO PROJECT GIT WRITE** · PRE-M6 USER JOURNEY / UX BASELINE = **FUNCTIONAL BASELINE + GAP READINESS COMPLETE · G-UX-15 EXIT PROOF ACCEPTED / TECHNICAL BLOCKER CLOSED · LOCAL CANDIDATE NOT YET ON MAIN · FIGMA/UI DELIVERY NOT AUTHORIZED** |
| **Sources** | Git `main` @ `3467ecd…` · PR #337/#339/#340/#341/#342/#343/#344/#345/#346/#347/#348/#349/#350/#351/#352 · CI #158/#162/#166/#172/#176/#178/#184/#185/#186/#187 · PR #352 CI run #31875337665 / post-merge #31875621317 · decision pack G0 · framing `30`–`37` (dont `34`) · M4 Architecture Handoff `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · M4 CI diagnostic handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63` · FIRST REAL handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · timeout diagnosis handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · pre-reproof bounding handoffs `3c56cb29367268231c1db26b4de7af5cfe0ef499` / `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c` · final M4 governed REAL completion handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · GO Morris **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05) · GO Morris **M4 Delivery** / **MERGE PR #344** · GO Morris **FIRST M4 CURSOR REAL** · GO Morris **DIAGNOSE TIMEOUT** · GO Morris **PRE-REPROOF BOUNDING** / **MERGE PR #346** · GO Morris **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION** · PR #348 / merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e` · M5 Entry Qualification handoff `63f41e3f328868286c14312a58a7b79f850383c0` · GO Morris **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY** · GO Morris **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY** · M4 Product path on main `projects/sfia-studio/app/**` |
| **Anti-claims** | G0-A/G0-B **consommés** · M1–M3 **mergés** · M3 exit proof **SATISFIED** · M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** · M5 Entry Qualification **COMPLETE** · M5 architecture trajectory **ADOPTED BY MORRIS** · M5 Delivery **IMPLEMENTED ON MAIN** (PR #350) · M5 UI rehydrate **IMPLEMENTED ON MAIN** (PR #351) · M5 technical/functional exit proof **SATISFIED ON MAIN** · M5 EXIT PROOF **ACCEPTED BY MORRIS** · M5 **CLOSED** · M5 CLOSED **≠** M6 AUTHORIZED · M5 CLOSED **≠** M6 STARTED · M5 CLOSED **≠** runtime v3 ADOPTED · M5 CLOSED **≠** global v3 baseline promoted · M5 CLOSED **≠** M5-C retired · M5 exit accepted **≠** global Cursor REAL authorization · M5 CLOSED future **≠** M6 automatically authorized · Pre-M6 trajectory decided **≠** Pre-M6 UX qualification executed · Pre-M6 trajectory decided **≠** Figma authorized · Figma future contract **≠** approved design · new UX baseline **≠** runtime rewrite · existing UI not canonical **≠** existing UI automatically deleted · existing UI audit **≠** REPLACE decisions already consumed · M1→M5 runtime KEEP **≠** all runtime complete · Pre-M6 user proof **≠** runtime v3 ADOPTED · M6 after Pre-M6 **≠** M6 automatically authorized · Validated UX decisions in framing **30/37** (CC-D01) prevail over older candidate wording in framing **11** · M5-A OPTION B **IMPLEMENTED ON MAIN** · M5-B W1 **IMPLEMENTED ON MAIN** · M5-B W1 factual write-back **≠** Recommendation becomes Decision · Recommendation **≠** HumanDecision · Recommendation **≠** gate consumed · Recommendation **≠** ExecutionAuthority · LPS factual evidence link **≠** structural trajectory validation · readback **≠** execution · remount UI visibility **≠** automatic next-cycle launch · M5-C KEEP TEMPORARY WITH EXIT **≠** technical journal retired · durable Product Attempt **≠** technical M4 journal automatically obsolete · M5 implementation **≠** runtime v3 ADOPTED · M5 implementation **≠** global v3 baseline promoted · M5 ZERO REAL **≠** global Cursor REAL authorization · M5 architecture ADOPTED **≠** M6 started · M4 CLOSED **≠** runtime v3 ADOPTED · one bounded successful REAL completion **≠** global Cursor REAL safety for arbitrary capabilities/tasks · strict runtime read-only proof applies to the **demonstrated M4 bounded path**, not arbitrary future Cursor tasks · timeout 60000 **proven sufficient for demonstrated M4 bounded RO path** **≠** universal Cursor REAL timeout policy · FIRST REAL historical timeout **≠** timeout proven defective · `CURSOR_REAL_TIMEOUT_POLICY` OPEN / NON-BLOCKING **unchanged by M5 architecture decision** **≠** M4/M5 reopened · technical launch journal **≠** Product Store · Critical Ack/Auth.js future IAM **≠** required retroactively for M4 first low-risk RO path · v3 global baseline **NOT PROMOTED** · runtime v3 **NON ADOPTED** · ≠ full OA durable · G-UX-15 technical blocker **CLOSED BY MORRIS** ≠ Pre-M6 complete · G-UX-15 exit proof accepted ≠ browser/product E2E proven · fixture-safe proof accepted ≠ REAL proof · local candidate accepted ≠ integrated on main · Figma readiness ≠ Figma authorized · Pre-M6 progress ≠ M6 authorized · Confirmation process-local = KEEP RESERVE ≠ restart-safe Confirmation · global v3 baseline **NOT PROMOTED** |

## B1. Nature du document

Roadmap de **capacités**. Pas de dates inventées. Pas de timeline calendaire artificielle.
Observation / Recommendation / Decision Required doivent rester **distincts**.

## B2. Destination (boucle produit v3)

Voir Build Doctrine A3 — boucle Morris → Nora → … → Evidence → LPS → Morris.
Fondations V3-F01…F15 = couverture doctrine progressive (B9).

## B3. Point de départ factuel

### Sur main (`3467ecdf74ac2010c45f34545fb8684563dea547`)

| Capacité | État observé |
| --- | --- |
| `/studio` Project create/view | WIRED — **Product SQLite T-A1 — MERGED ON MAIN** (PR #337) |
| F1 Nora chat | WIRED — contextual assistant |
| F2 qualification / proposal / Morris gate | WIRED — qualification + **real CycleInstance** + live post-mutation `F2ContextSnapshot` ; conversation/proposal **process-local** ; M3 GO path uses server-owned temporary local Morris authority (fail-closed) |
| F3 / M3 PREPARE | WIRED — **M3 Product path** : HumanDecision durable → ExecutionContract durable → Cursor PREPARE-only projection ; **fixture historique/test** (`TestExecutionAdapter`) conservé ≠ chemin REAL |
| Evidence UI reinjection | WIRED — Product durable Evidence/RB + W1 LPS refs **ON MAIN** (PR #350) · Panel durable remount consumer **ON MAIN** (PR #351) · session `f3Execute` retained for in-session fixture |
| OPS1 Cursor REAL | EXISTS — UI `/ops1` parallèle ; flag `OPS1_CURSOR_REAL` |
| D1 SQLite projects | EXISTS — UI `/projects` parallèle |
| execution-run D2-D | EXISTS — **non** branché F1–F3 |
| FinOps Postgres | EXISTS — transverse ; ≠ Product persistence |
| Product persistence | **SELECTED / ACTIVE** — `node:sqlite` OA Product Store (G0-B) · Project/LPS + CycleInstance M2 subset + HD/ExecutionContract M3 · **≠** persistence de tout le runtime · technical launch journal M4 **≠** Product Store |
| Architecture convergence | **Option 1 ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (G0-A) |
| Project/LPS restart safety | **PROVEN / MERGED** (process A→B + CI #158) |
| Autres OA (T-A2 CycleInstance M2 subset) | **Product SQLite — MERGED ON MAIN** (PR #339) — Cycle/LPS/CKC linkage durable + restart-safe (subset M2) |
| Autres OA (T-A2 trajectory/epistemic ; Confirmation ; T-A5 Attempt product ; T-A6 Evidence/ReviewBundle) | Trajectory/Epistemic + Confirmation = Memory/process-local · **T-A5 Attempt product + T-A6 Evidence/ReviewBundle = Product SQLite ON MAIN (PR #350 — M5-A OPTION B IMPLEMENTED)** · Claims/Maturity remain Memory |
| Autres OA (T-A3 HD) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) ; Confirmation reste Memory/process-local |
| Autres OA (T-A4 ExecutionContract) | **Product SQLite — MERGED ON MAIN — M3** (PR #341) — PREPARE-only · Attempt product durability **ON MAIN via M5** (PR #350) |
| Architecture M4 | **ADOPTED + IMPLEMENTED ON MAIN — M4 CLOSED** — D-M4-01→05 via PR #344 · Delivery **MERGED** · FIRST REAL historical + final governed completion reproof **PASS** · exit proof **ACCEPTED BY MORRIS** |
| T-A5 REAL (Nora/Studio) | **IMPLEMENTED ON MAIN / DEFAULT OFF** — specialized OA-owned boundary ; fixture `externalEffects:false` **preserved** ; gateway deterministic bounding **ON MAIN** (`--mode ask` + README.md markers) ; historical governed REAL launches = **2** ; successful governed REAL completions = **1** |
| Cursor REAL depuis Nora | **2 historical governed attempts** — Run1 FIRST REAL (`xat:m4-first-real-001`) launch **PROVEN** / completion **NOT** (timeout ~60s) · Run2 final reproof (`xat:m4-reproof-86b5ecb05474`) completion **PROVEN** (~15.7s / `M4_READ_ONLY_OK`) · identities never reused across runs |
| Gate D | **IMPLEMENTED ON MAIN** (GD-1) · consumed **once per governed REAL** historically (Run1 + Run2) · future REAL still requires **fresh** Gate D + Morris GO |
| Technical CREATED/LAUNCHED frontier | **IMPLEMENTED ON MAIN** · **TEMPORARY WITH EXIT** · **M5-C KEEP TEMPORARY WITH EXIT** (unchanged after M5 CLOSED) · ≠ Product Attempt Store · REAL TRACE **PROVEN** on both historical governed runs · **OWNER NOT EXPLICITLY RECORDED** (**POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**) |
| Bounded RO AgentCapability | **IMPLEMENTED ON MAIN** · static / deny-by-default · KEEP · **STRICT BOUNDED RUNTIME TOOL-SURFACE PROVEN FOR FINAL M4 REPROOF** (Read=1 README only ; Shell/Glob/Grep/write=0) — **≠** “Cursor is globally read-only” |
| `CURSOR_REAL_TIMEOUT_POLICY` | **OPEN / NON-BLOCKING POST-M4 RESERVE** — current product timeout **60000** = **KEEP FOR NOW** · proven sufficient for demonstrated M4 bounded RO path · **NOT** universal policy · **NOT** proven defective |
| M5 architecture trajectory | **ADOPTED BY MORRIS + IMPLEMENTED ON MAIN** — Entry Qualification **COMPLETE** · Delivery PR #350 **MERGED** · UI rehydrate PR #351 **MERGED** · capitalization PR #352 **MERGED** · exit proof **ACCEPTED BY MORRIS** · M5 **CLOSED** |
| M5-A Persistence boundary | **OPTION B ADOPTED + IMPLEMENTED ON MAIN** — Product SQLite OA backbone for **ExecutionAttempt + Evidence + ReviewBundle** behind existing ports/domain/use cases (PR #350) |
| M5-B Nora/LPS write-back | **W1 ADOPTED + IMPLEMENTED ON MAIN** — factual LPS `evidenceIds`/`reviewBundleIds` append · provenance `actor:sfia-studio-system-factual-writer` (role system / authority none) · Recommendation remains Recommendation (PR #350) |
| M5-C Technical journal | **KEEP TEMPORARY WITH EXIT** — unchanged after M5 CLOSED · journal still present and distinct from Product Attempt Store · retirement needs safety equivalence + dedicated Morris GO · owner **NOT EXPLICITLY RECORDED** (**POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**) |
| G-UX-15 Slice A application bridge | **LOCAL ACCEPTED CANDIDATE — NOT YET ON MAIN** — exit proof **ACCEPTED BY MORRIS** — technical application-wiring blocker **CLOSED** — fixture-safe = technical proof only — Confirmation process-local = **KEEP RESERVE** |
| NEXT CONVERGENCE CAPABILITY | **PRE-M6** — FUNCTIONAL BASELINE + GAP READINESS **COMPLETE** · G-UX-15 TECHNICAL BLOCKER **CLOSED BY MORRIS** · CONTROLLED INTEGRATION **PENDING** · FIGMA **NOT STARTED / NOT AUTHORIZED** · UI DELIVERY **NOT STARTED / NOT AUTHORIZED** |
| NEXT IMMEDIATE GATE (repo) | **CYCLE 13 — PR READINESS** for coherent 5-file local candidate · **≠** PR opened · **≠** merge · **≠** Figma authorized |
| NEXT PRODUCT GATE (after integration) | **D-PRE-M6-UX-05 — FIGMA VISUAL CONTRACT GO** · **NO DECISION YET** · **≠** UI Delivery authorized |
| M6 (sequenced after Pre-M6) | **NOT STARTED / NOT AUTHORIZED** — sequenced **AFTER** Pre-M6 product UX validation (incl. Figma/Delivery/E2E/UAT as governed) + distinct Morris GO |

### Candidat local non-main (dirty `delivery/sfia-studio-f3-real-prerequisites`) — historique / harvest

| Élément | État |
| --- | --- |
| Auth.js GitHub + Critical Ack composition | Inspecté (handoff `366726945f…`) ; **pas sur HEAD** ; bundle **NOT promotion-ready** (pre-M3 dirty) — D-M4-05 still **DEFER / NOT PROMOTED** |
| SqliteAuthorityAttemptJournal / CREATED·LAUNCHED wiring | Inspecté comme **HARVEST/ADAPT source** for D-M4-02 ; **superseded as current state** — technical launch journal **IMPLEMENTED ON MAIN** via PR #344 (TEMPORARY WITH EXIT ; ≠ Product Store) |
| Classification | Observation / harvest source — **Auth/Ack bundle ≠ promotion** (D-M4-05) ; journal concept harvested into M4 Delivery |

### Recommandation d’audit (historique — supersédée)

Option 1 — OA Native Backbone + Harvest OPS1 Cursor était **RECOMMENDATION — NOT DECIDED**.
**Décision Morris G0-A :** désormais **ADOPTED**.

## B4. Asset disposition matrix (actuelle)

Légende : classifications = **recommandations de convergence** jusqu’à validation Morris, sauf KEEP factuel d’usage main.

| Actif | Preuve | Classification | Justification courte |
| --- | --- | --- | --- |
| T-A0 Doctrine | `lib/oa/doctrine` + project create | **KEEP** | Appelé ; DoctrinePackage cible F03 |
| T-A1 Project/LPS | Product SQLite + `/studio` (PR #337) | **COMPLETE** (M1) / **KEEP** backbone | Durable + restart-safe on main |
| T-A2 Cycle/CKC | Product SQLite CycleInstance + F2/CKC/LPS linkage (PR #339) | **COMPLETE** (M2) / **KEEP** backbone | CycleInstance durable + restart-safe on main ; Trajectory/Epistemic restent Memory |
| T-A3 HD/Confirm/Authority | Product SQLite HD **ON MAIN** (PR #341) + Confirmation Memory + local Morris authority TEMPORARY WITH EXIT | **COMPLETE** (M3) / **KEEP** backbone | HD durable on main ; Confirmation process-local ; Auth.js exit ouvert |
| T-A4 ExecutionContract | Product SQLite + M3 PREPARE truthful + Cursor projection PREPARE-only **ON MAIN** (PR #341) | **COMPLETE** (M3) / **KEEP** backbone | Durable on main ; no Attempt/REAL ; fixture path historique/test conservé |
| T-A5 Attempt domain + ports / fixture adapter port | F3 fixture adapter · `ExecutionAdapterPort.externalEffects:false` · PR #344 + Product SQLite Attempt (PR #350) | **KEEP** domain/ports/lifecycle + **KEEP** zero-effect port + **COMPLETE M5 Attempt Product path** | StartExecution remains sole authority sequencer ; fixture port intact (D-M4-01) ; M5-A durable Attempt **IMPLEMENTED ON MAIN** |
| T-A5 specialized REAL boundary | PR #344 + PR #346 / main `2d1361ee…` | **COMPLETE M4 / KEEP** (+ gateway bounding) | OA-owned REAL boundary **implemented, default OFF** — no OA→OPS1 runtime coupling — TWO historical governed launches · ONE successful completion under deterministic `--mode ask` / README bounding · M4 CLOSED |
| T-A5 launch journal (CREATED/LAUNCHED) | PR #344 / main · exercised on both REAL runs | **KEEP / TEMPORARY WITH EXIT — M5-C** | Technical safety journal ; ≠ Product Attempt Store ; REAL TRACE PROVEN ; **still not retired after M5 CLOSED** ; future exit → safety equivalence + dedicated Morris GO · owner **NOT EXPLICITLY RECORDED** (**POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**) |
| AgentCapability REAL RO profile | PR #344 / `m4BoundedReadOnlyCursorAgent` · KEEP | **COMPLETE M4 / KEEP** | Bounded RO profile exercised ; final reproof proved strict bounded tool-surface for that path ; AgentCapability **unchanged** through bounding/closure |
| Product timeout 60000 | product default / both REAL runs | **KEEP CURRENT VALUE FOR NOW** + **OPEN / NON-BLOCKING POST-M4 RESERVE** (`CURSOR_REAL_TIMEOUT_POLICY`) | Sufficient for demonstrated M4 bounded RO completion (~15.7s) ; FIRST REAL timeout historical ≠ proven defect ; **no** universal timeout policy selected |
| T-A6 Evidence/ReviewBundle domain + ports + use cases | F3 ingest + Product SQLite Evidence/RB (PR #350) + Panel remount consumer (PR #351) | **KEEP** domain/ports/use cases · **COMPLETE M5 Product path** | Durable Evidence/RB ON MAIN ; W1 LPS factual link **IMPLEMENTED** ; Nora UI remount visibility **PROVEN** |
| Product SQLite Attempt/Evidence/ReviewBundle path | M5-A OPTION B · PR #350 | **COMPLETE / KEEP — IMPLEMENTED ON MAIN** | Existing OA Product SQLite backbone (G0-B) behind existing ports |
| LivingProjectState | Product SQLite `oa_lps` · type already has `evidenceIds` / `reviewBundleIds` | **KEEP** | Durable LPS exists ; factual Evidence/RB linkage fields present on type |
| AppendLivingProjectStateVersion | W1 factual Evidence/RB append ON MAIN (PR #350) | **COMPLETE M5 W1 / KEEP** | Writes `evidenceIds`/`reviewBundleIds` with system factual provenance ; Recommendation remains separate |
| RecommendNextGate | evidence-review coordination | **KEEP — RECOMMENDATION-ONLY** | Never HumanDecision / gateConsumed / executionAuthority ; unchanged by M5-B W1 |
| Claim/Maturity memory stores | evidence-review memory | **FREEZE / later ADAPT** | Out of minimal M5 slice |
| Product SQLite backbone | G0-B ADOPTED · Project/LPS/Cycle/HD/EC + Attempt/Evidence/RB on main | **KEEP / COMPLETE** | Target persistence backbone already selected ; M5-A aggregates **IMPLEMENTED ON MAIN** (PR #350) |
| T-A7 readiness/HARD rails | `platform/t-a7` | **KEEP** | Honesty rails |
| Shared platform AI | `lib/platform` | **KEEP** | Substrate F1 |
| F1 / F2 / F3 UI / Nora compose | `features/project-assistant` · F3 ingest→RecommendNextGate · durable remount rehydrate (PR #351) | **KEEP** / **COMPLETE M5 UI consumer** — **NO NEW ENGINE** | Compose existing use cases ; Product durable readback + remount ReviewBundle/Recommendation visibility **PROVEN** |
| vertical-slice-runtime | `wireOaStack` · M5 Product durable OA wire (PR #350) | **KEEP** / **COMPLETE M5 Product wire** | Composition root Studio ; REAL boundary **intentionally not wired by default** (M4 REAL-OFF) ; Attempt/Evidence/RB Product path ON MAIN |
| OPS1 Cursor/worktree/report | `lib/ops1` | **HARVEST** (+ **FREEZE** UI growth **RECOMMENDATION**) | Capacité Cursor réelle isolable ; harvest ≠ call OPS1 runtime from OA |
| execution-run | `lib/oa/execution-run` | **FREEZE** (**RECOMMENDATION**) | Parallèle ; non F3 chain |
| D1 `/projects` | `lib/d1` | **FREEZE** / **RETIRE LATER** (**RECOMMENDATION**) | Parallèle durable |
| FinOps | `lib/oa/finops` | **KEEP** isolé + **FREEZE** lots non bloquants (**RECOMMENDATION**) | Transverse cost ≠ Product persistence |
| Auth.js / Critical Ack candidate | dirty only (inspected) | **DEFER for first RO** (D-M4-05) · **NOT PROMOTED** | Not a prerequisite of first M4 read-only proof ; remains candidate for future N2/N3 / IAM gate ; debt **preserved** |
| Persistence Memory OA | factories Memory* (trajectory/epistemic ; Confirmation ; Claims/Maturity) · Attempt/Evidence/RB Product path ON MAIN | **KEEP Memory** for Trajectory/Confirmation/Claims/Maturity · Attempt/Evidence/RB **REPLACED ON PRODUCT PATH (M5-A/B ON MAIN)** | Product SQLite Attempt/Evidence/RB **IMPLEMENTED** ; journal KEEP TEMPORARY WITH EXIT (M5-C) ≠ Product Store |

## B5. Gap map → boucle cible

| Gap | Statut | Bloque |
| --- | --- | --- |
| Project/LPS durable | **MERGED ON MAIN — EXIT PROOF SATISFIED** (PR #337) | — |
| GuidedSession / historique durable | PARTIAL / MISSING — **DEFERRED** (dette optionnelle Roadmap) | usage quotidien / milestone ultérieur |
| CycleInstance réel lié F2 | **CLOSED ON MAIN — M2** (PR #339) — Product SQLite + F2 wire + restart proof | — |
| HumanDecision durable/authoritative | **CLOSED ON MAIN — M3** — Product SQLite + LPS link ; autorité local-single-user TEMPORARY WITH EXIT (durabilité HD fermée ≠ IAM product-grade fermé) | future IAM (Ack **not** absolute for first RO — D-M4-05) ; historical Gate D first-REAL consumption already proven once |
| CKC ↔ cycle binding | **CLOSED ON MAIN — M2** — `ckcResolutionRef` projection on LPS | — |
| live contextSnapshot | **CLOSED ON MAIN — M2** — `F2ContextSnapshot` post-mutation (pas nouvel aggregate durable) | — |
| ExecutionContract from real HD | **CLOSED ON MAIN — M3** — exact/unresolved fields from DecisionBasis ; fixture path historique conservé | — (M5 Evidence path delivered) |
| Cursor projection canonique | **CLOSED ON MAIN — M3 PREPARE-only** (`executionAllowed=false`) | future elevated REAL classes / M5+ |
| Cursor REAL behind T-A5 | **IMPLEMENTATION MERGED / DEFAULT OFF** · M4 governed completion **PROVEN** (final reproof) · M4 **CLOSED** | future REAL requires distinct Morris GO (not M4 reopen) |
| REAL specialized adapter boundary | **CLOSED ON MAIN — PR #344** (+ gateway bounding PR #346) — implemented, default OFF | KEEP |
| durable launch frontier (CREATED/LAUNCHED) | **IMPLEMENTED ON MAIN — PR #344** — TEMPORARY WITH EXIT · **M5-C KEEP** unchanged after M5 CLOSED · REAL TRACE **PROVEN** (both runs) · owner **NOT EXPLICITLY RECORDED** (POST-M5 GOVERNANCE DEBT) | Future journal retirement gate (safety equivalence + dedicated Morris GO) |
| Gate D durable grant | **IMPLEMENTED ON MAIN** (GD-1) · consumed once per historical governed REAL · **not reusable** | fresh Gate D for any future REAL |
| bounded REAL AgentCapability RO | **IMPLEMENTED ON MAIN** · final reproof **STRICT BOUNDED TOOL-SURFACE PROVEN** for demonstrated path | KEEP ; future capabilities separate |
| governed REAL completion (M4) | **PROVEN** — final reproof PASS (handoff `1123a30f…`) · exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** | — |
| `CURSOR_REAL_TIMEOUT_POLICY` | **OPEN / NON-BLOCKING POST-M4** — 60000 KEEP FOR NOW | future REAL class needing policy qualification |
| Critical Ack UI | CANDIDATE / MISSING — **NOT BLOCKING FIRST M4 READ-ONLY PROOF BY D-M4-05** ; remains for future N2/N3 / IAM | future N2/N3 · IAM gate |
| ExecutionAttempt product durability | **CLOSED ON MAIN — M5** (PR #350) — Product SQLite · restart-proven | — |
| Evidence durability | **CLOSED ON MAIN — M5** (PR #350) — Product SQLite · restart-proven | — |
| ReviewBundle durability | **CLOSED ON MAIN — M5** (PR #350) — Product SQLite · restart-proven · UI remount visibility PR #351 | — |
| Technical journal exit | **DEFERRED / NON-BLOCKING** · M5-C KEEP TEMPORARY WITH EXIT (still) | Future dedicated Morris GO |
| Claim/Maturity durability | **DEFER / future** — not minimal M5 | later |
| Timeout / IAM / OPS1 | **OUT OF M5 CRITICAL PATH** | separate |
| Evidence/ReviewBundle → LPS factual write-back | **CLOSED ON MAIN — M5 W1** (PR #350) — system factual writer · Recommendation-only preserved | — |
| Nora post-exec analysis | **PROVEN ON MAIN — M5** — RecommendNextGate **KEEP** · Product durable rehydrate (M5-26) · UI remount ReviewBundle/Recommendation (M5-27/28 via PR #351) | — |
| Restart safety Studio core | **PARTIAL→EXTENDED ON MAIN** — Project/LPS/Cycle/HD/ExecutionContract + Attempt/Evidence/ReviewBundle/LPS evidence refs **restart-safe ON MAIN** ; conversation/proposal/Confirmation still process-local ; M4 crash/replay + journal reopen **PROVEN** ; UI remount visibility **PROVEN** (PR #351) | Conversation/proposal durability later |
| M3→execution application wiring (G-UX-15) | **TECHNICAL GAP CLOSED BY ACCEPTED SLICE A EXIT PROOF** — local candidate **NOT YET INTEGRATED ON MAIN** — fixture-safe technical proof only | product/browser E2E · UI Delivery · integration |
| Confirmation durability | **PROCESS-LOCAL RESERVE — KEEP FOR NOW** — NON-BLOCKING for accepted G-UX-15 technical exit proof · ≠ restart-safe Confirmation | future UAT / continuity proof may requalify |
| IAM/authz product-grade | PARTIAL / MISSING (M3 local authority temporary ; Auth.js candidate **NOT PROMOTED**) — **not** a blocker of first RO proof (D-M4-05) ; debt preserved | future IAM gate / M8 |

## B6. Decisions / gates

### Décision consommée

- Build Doctrine + Convergence Roadmap = **VALIDATED** construction governance by Morris
- intégrées sur main via PR #334 (`1d09e4159932b3885817911e10a2d29a82ae9ea7`)
- **G0-A** Architecture = **ADOPTED** — OA Native Backbone + Harvest OPS1 Cursor (Morris · 2026-08-13)
- **G0-B** Product persistence = **ADOPTED** — `node:sqlite` Product Store isolé derrière ports OA ; exit Postgres sur multi-writer/multi-user démontré (Morris · 2026-08-13)
- preuve décisions : `convergence/sfia-studio-g0-architecture-persistence-decision-pack.md`

### Preuve / milestone intégrée (≠ nouvelle décision d’architecture)

- **M1** PR #337 merged on main @ `c6925954a7aa86f34c9fcd6f7babf0336014eba3`
- head M1 `5cbda862885b36658fc7f2b33a20311611da969e` · CI SFIA Studio **#158** SUCCESS
- exit proof Project/LPS (create → process restart → same Project/LPS/context/doctrine digest) **SATISFIED**
- **M2** **VALIDATED BY MORRIS** · PR #339 merged on main @ `a9a4765c242948f2287392a2910fb1cd30061a7a`
- head M2 `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` · CI SFIA Studio **#162** SUCCESS
- exit proof Cycle/LPS/CKC + live ContextSnapshot + restart A→B + R1/R2 **SATISFIED**
- merge gate M2 **CLOSED**
- **M3** **VALIDATED BY MORRIS** · PR #341 merged on main @ `8eea4cbf211d9e159626394477353f19126fe900`
- head M3 `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` · CI SFIA Studio **#166** SUCCESS
- exit proof HumanDecision/LPS/ExecutionContract + restart PREPARE + fingerprint + unresolved semantics **SATISFIED**
- merge gate M3 **CLOSED**
- **M4 Delivery** **VALIDATED BY MORRIS** · PR #344 merged on main @ `ec65fb47c04b451d892297c806b9b041995339a5`
- head M4 Delivery `f7270b21ccdbcf1cd543879e7c4120d87b874479` · CI SFIA Studio **#172** SUCCESS (Morris-authorized rerun, exact same head ; initial T7-C08 Class C / M4 causality not established)
- merge gate M4 Delivery **CLOSED**
- M4 exit proof **ACCEPTED BY MORRIS** · M4 **CLOSED** (GO **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION**)

### M4 Architecture Decisions — CONSUMED BY MORRIS

GO : **ADOPT M4 ARCHITECTURE TRAJECTORY** · source pack handoff `366726945f8f533d958c82b7251edb1a5a4b45f0`

| ID | Décision | Statut |
| --- | --- | --- |
| **D-M4-01** | L6 Option B — keep `ExecutionAdapterPort` zero-effect (`externalEffects:false`) ; introduce OA-owned specialized REAL boundary (`RealExecutionLaunchPort` / `CursorCliLaunchGateway` or equiv.) at Delivery ; StartExecution remains sole authority sequencer ; **no** OA direct dependency on OPS1 product runtime | **ADOPTED** |
| **D-M4-02** | Technical durable launch journal CREATED/LAUNCHED — **TEMPORARY WITH EXIT** ; no ambiguous auto-relaunch after restart ; **not** Product Store ; no dual product-state persistence ; exit → Attempt/Evidence durability M5+ / dedicated Morris gate | **ADOPTED** |
| **D-M4-03** | First Cursor REAL AgentCapability = **bounded + read-only** ; minimal caps ; static immutable deny-by-default registry retained ; no dynamic registry for M4 ; no Git remote/commit/push/PR/merge in first proof | **ADOPTED** |
| **D-M4-04** | Gate D **GD-1** — explicit durable grant bound at minimum to contractId/version/fingerprint + attemptId + agentRef + actor + expiration ; checked before StartExecution REAL ; consumption coordinated with durable CREATED frontier ; never after real process start ; stale/expired/fingerprint mismatch/already-consumed = fail-closed ; no auto-replay after ambiguous restart ; Gate D ≠ Recommendation ≠ PREPARE projection ≠ Roadmap checklist | **ADOPTED** |
| **D-M4-05** | L7-1 for **first** M4 REAL read-only proof — Critical Ack / Auth.js **not** prerequisites of this weak-risk proof ; HD exact + ExecutionContract exact + applicable Confirmation + explicit Gate D suffice ; Critical Ack remains required/candidate for future N2/N3 / elevated / irreversible classes ; Auth.js/IAM product-grade = separate Morris gate ; local Auth.js+Ack bundle **not** promoted ; IAM debt **not** closed | **ADOPTED** |

**Supersession :** the prior Roadmap dependency “promotion Ack” for the **first M4 read-only proof** is **superseded by D-M4-05**. This does **not** delete Ack/Auth debt from the trajectory.

### M4 Delivery — CONSUMED / MERGED

- M4 Delivery GO : **CONSUMED**
- M4 Delivery validation : **CONSUMED — VALIDATED BY MORRIS**
- Commit / push / PR : **CONSUMED — PR #344**
- Merge : **CLOSED — PR #344** merge `ec65fb47c04b451d892297c806b9b041995339a5`
- CI : **#172 SUCCESS** on same head `f7270b21` after authorized rerun (no code change)

### M4 REAL / diagnosis / bounding / completion / closure — CONSUMED

- FIRST M4 CURSOR REAL READ-ONLY PROOF GO — **CONSUMED** (base `3575c886…`) — launch **PROVEN** · completion **NOT** (timeout ~60030 ms / exit 143) — identities never reused
- Timeout diagnosis GO — **CONSUMED** — UNIQUE root cause **NOT PROVEN** ; timeout = **PLAUSIBLE CONTRIBUTING FACTOR** historically
- Pre-reproof bounding — **MERGED** — PR #346 / merge `fc7e20aa…` · CI #176
- Post-pre-reproof Roadmap sync — **MERGED** — PR #347 / merge `2d1361ee…` · CI #178
- **M4 GOVERNED REAL COMPLETION PROOF** — **CONSUMED / PASS** — handoff `1123a30f…` · fresh HD/EC/Attempt/Gate D · StartExecution=1 · spawn=1 · retry=0 · duration≈15735 ms · timedOut=false · exit=0 · stdout `M4_READ_ONLY_OK` · README Read=1 · Shell/Glob/Grep/write=0
- **M4 EXIT PROOF EVALUATION** — **CONSUMED / PASS WITH RESERVES**
- **M4 EXIT PROOF** — **ACCEPTED BY MORRIS**
- **M4** — **CLOSED** (GO **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION**)

### M5 Architecture Decisions — CONSUMED BY MORRIS

- **M5 ENTRY QUALIFICATION** = **COMPLETE** — handoff `63f41e3f328868286c14312a58a7b79f850383c0`
- GO architecture : **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY**
- GO Roadmap sync : **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY**

| ID | Décision | Statut |
| --- | --- | --- |
| **M5-A** | Persistence boundary **OPTION B** — ExecutionAttempt + Evidence + ReviewBundle durable together in existing OA Product SQLite behind existing ports/domain/use cases | **ADOPTED** · **IMPLEMENTED ON MAIN** (PR #350) |
| **M5-B** | Nora/LPS write-back **W1** — automatic factual LPS link update allowed for Evidence/ReviewBundle refs ; Recommendation remains Recommendation ; **no** automatic HumanDecision / gate consumption / executionAuthority / structural trajectory validation | **ADOPTED** · **IMPLEMENTED ON MAIN** (PR #350) |
| **M5-C** | Technical launch journal disposition **KEEP TEMPORARY WITH EXIT** ; retirement later needs safety equivalence + dedicated Morris GO | **ADOPTED DISPOSITION — UNCHANGED** |

### M5 Delivery / UI / exit / capitalization — CONSUMED

- M5 Delivery GO historically **CONSUMED** · PR #350 **MERGED** @ `8f753218…` · CI #184/#185 SUCCESS
- M5 UI/Nora durable rehydrate · PR #351 **MERGED** @ `d8961f1d…` · CI #186/#187 SUCCESS
- M5 technical/functional exit proof · handoff `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · **SATISFIED ON MAIN** (M5-01…M5-34)
- M5 capitalization Roadmap sync · PR #352 **MERGED** @ `3467ecd…` · CI run #31875337665 SUCCESS · post-merge #31875621317 SUCCESS · handoff `0121e184…`

### M5 closure gate — CONSUMED

- GO Morris **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE**
- M5 EXIT PROOF = **ACCEPTED BY MORRIS**
- M5 = **CLOSED**
- Evidence: M5-01…M5-34 SATISFIED ON MAIN · exit handoff `54b0f5b4…` · capitalization PR #352 · post-merge handoff `0121e184…` · explicit Morris GO this cycle
- This is a **HumanDecision** Morris (not a Recommendation)

### Pre-M6 trajectory sequencing — CONSUMED DECISION

- User wording : **« ok go pour la modification »**
- Governed interpretation : **ALIGN M5 CLOSURE ROADMAP WITH PRE-M6 USER JOURNEY / UX BASELINE TRAJECTORY** (KEEP M5 CLOSED · KEEP M5-C · NO UX DESIGN / FIGMA / UI DELIVERY / M6 in this documentary amendment)
- Decision : **PRE-M6 USER JOURNEY / UX BASELINE MUST PRECEDE M6 ENTRY**
- Status : **TRAJECTORY SEQUENCING DECIDED BY MORRIS** · **subsequent Pre-M6 work progressed** (see below) · Delivery/Figma/M6 still **NOT AUTHORIZED**
- This is a **HumanDecision** Morris sequencing choice (not a Recommendation left candidate)

### Pre-M6 functional baseline / G-UX-15 — CONSUMED DECISIONS

- Canonical journey M1→M5 — **ADOPTED BY MORRIS** (D-PRE-M6-UX-01)
- Functional IA — **ADOPTED BY MORRIS** (D-PRE-M6-UX-02)
- UI reuse principle — **ADOPTED AT PRINCIPLE LEVEL** (D-PRE-M6-UX-03)
- First-test Conversation/Proposal process-local limitation — **ACCEPTED BY MORRIS**
- G-UX-01→15 consolidated readiness — **COMPLETE**
- Slice A (G-UX-15 only) — **SELECTED**
- Slice A amendments (sentinel / replay / identity / governance / failed T-A5) — **CONSUMED**
- GO Morris **ACCEPT G-UX-15 SLICE A EXIT PROOF** — **CONSUMED**
- G-UX-15 technical application-wiring blocker — **CLOSED BY MORRIS**
- Fixture-safe wiring proof — **ACCEPTED AS TECHNICAL PROOF ONLY**
- Confirmation process-local — **KEEP RESERVE FOR NOW** (NON-BLOCKING for technical exit)
- Slice A implementation — **LOCAL ACCEPTED CANDIDATE — NOT YET ON MAIN**
- D-PRE-M6-UX-05 Figma Visual Contract — **NO DECISION YET / NOT AUTHORIZED**
- Evidence handoff : `ec456dafd441825263df3638105efab520946073` (exit-proof final amend) · capitalization this cycle

### Décisions / gates toujours ouverts

1. **CYCLE 13 — PR READINESS** — NEXT REPO GATE for coherent 5-file local candidate · **≠** project commit/push/PR/merge in this capitalization cycle
2. Controlled integration / merge to main — future Morris GO · **≠** authorized now
3. **D-PRE-M6-UX-05 — FIGMA VISUAL CONTRACT GO** — NEXT PRODUCT GATE **after** integration · **NO DECISION YET** · **≠** UI Delivery authorized
4. UI Delivery — **NOT AUTHORIZED**
5. Technical launch journal retirement — future dedicated gate (M5-C **KEEP TEMPORARY WITH EXIT**)
6. M5-C journal owner — **OWNER NOT EXPLICITLY RECORDED** · **POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**
7. Confirmation durability — **PROCESS-LOCAL RESERVE KEEP FOR NOW**
8. G-UX-08 / G-UX-10 (and other open G-UX classifications) — remain open per Pre-M6 baseline register
9. **M6 ENTRY QUALIFICATION** — future only after Pre-M6 product UX validation · distinct Morris GO · **≠** authorized now
10. **M6 — Boucle projet complète** — **NOT STARTED / NOT AUTHORIZED**
11. Critical Ack / Auth.js promotion for future N2/N3 / IAM — **Decision Required** (separate)
12. Disposition OPS1 / D1 / execution-run — **Decision Required**
13. runtime v3 adoption — **NOT AUTHORIZED**
14. **`CURSOR_REAL_TIMEOUT_POLICY`** — **OPEN / NON-BLOCKING POST-M4 RESERVE** — 60000 **KEEP FOR NOW**
15. `confirmAndExecuteF3Fixture` optional `productDurablePath` fallback — **NON-BLOCKING HARDENING RESERVE**

### Décisions / gates historiques encore listés (non tranchés comme promotion)

- Auth.js / Critical Ack promotion for elevated classes — open (see D-M4-05)
- Future REAL enablement beyond closed M4 bounded path — open (default OFF **≠** authorized without Morris GO)
## B7–B8. Roadmap capability-driven (milestones)

### Gate 0 — Convergence architecture / persistence

| Champ | Contenu |
| --- | --- |
| **ID** | G0 |
| **Capacité v3** | Précondition : un seul backbone de construction (évite multi-moteurs) |
| **Outcome** | Morris tranche Option architecture + Product persistence (compact) |
| **Fondations** | transversal (débloque F02/F05/F12…) |
| **État actuel** | **G0-A/B ADOPTED** (Morris) ; M1–M3 **MERGED ON MAIN** |
| **Actifs** | decision pack G0 ; Build Doctrine ; Roadmap |
| **Gaps** | — (décisions structurantes consommées) |
| **Travaux** | décisions écrites — **consommées** |
| **Gates Morris** | **CONSUMED** — architecture + persistence |
| **Hors périmètre** | Cursor REAL (reste hors) |
| **Preuve de sortie** | décision Morris + `sfia-studio-g0-architecture-persistence-decision-pack.md` |
| **Dette tolérée** | aucune implementation speculative au stade G0 |
| **Exit dette** | N/A |
| **Next** | M4 *(M1–M3 SATISFIED)* |
| **Statut** | **DECIDED / CONSUMED** |

### Milestone 1 — Socle projet v3 fiable

| Champ | Contenu |
| --- | --- |
| **ID** | M1 |
| **Capacité v3** | V3-F02 LPS (+ Project) durable et exploitable |
| **Outcome** | Morris crée/reprend un Project et retrouve LPS/contexte critique après redémarrage |
| **État actuel** | Product SQLite OA (`node:sqlite`) derrière ports T-A1 ; composition `/studio` branchée — **on main** |
| **Actifs** | T-A1 ports ; SQLite Product Store ; vertical-slice UI ; doctrine FS |
| **Classification** | COMPLETE T-A1 stores ; ADAPT composition |
| **Gaps** | L4 ContextSnapshot agrégat dédié **absent** du repo — contexte critique M1 = LPS fields + doctrinePackageRef digest (qualifié) |
| **Dépendances** | G0 persistence — **SATISFIED** (G0-B ADOPTED) |
| **Gates** | Merge M1 — **CLOSED** (PR #337) |
| **Hors périmètre** | Cursor REAL ; multi-region ; PostgreSQL Product ; full OA durable |
| **Preuve e2e** | create → restart process → get same project/LPS/digest · + PR #337 merged · + CI #158 PASS |
| **Dette** | coexistence temporaire D1 UI ; autres OA Memory ; exit SQLite→Postgres |
| **Exit dette** | disposition D1 après M1 stable ; Postgres si multi-writer démontré |
| **Next** | M4 *(M1–M3 SATISFIED)* |
| **Statut** | **MERGED ON MAIN — EXIT PROOF SATISFIED** |

### Milestone 2 — Pilotage cognitif v3 utilisable

| Champ | Contenu |
| --- | --- |
| **ID** | M2 |
| **Capacité v3** | V3-F01 CKC · F03 DoctrinePackage · F04 épistémologie (base) · F05 chaîne cognitive |
| **Outcome** | Dialogue Nora dans un projet durable ; qualification cycle ; LPS actualisé sans wizard rigide |
| **État actuel** | **On main** — F1/F2 wired ; CycleInstance Product SQLite + LPS linkage + live `F2ContextSnapshot` post-mutation (PR #339) |
| **Actifs** | T-A1 KEEP · T-A2 Cycle **COMPLETE** (subset) · F1/F2 ADAPT · CKC qualify KEEP · shared RuntimeOaStack |
| **Gaps fermés on main** | CycleInstance wire F2 · CKC↔cycle `ckcResolutionRef` · live ContextSnapshot · LPS N→N+1 · restart process A→B · R1 concurrency · R2 scope |
| **Dette restante** | conversation/proposal process-local ; Trajectory/Epistemic Memory ; DOC-DEBT-M1-01 ouvert |
| **Dépendances** | M1 — **SATISFIED** |
| **Delivery authorization** | **CONSUMED** — GO Morris M2 (Delivery) |
| **Validation gate** | **CONSUMED** — GO MORRIS — VALIDATE M2 + COMMIT / PUSH / PR (2026-08-13) |
| **Commit / push / PR** | **CONSUMED** — PR #339 |
| **Merge** | **CLOSED** — PR #339 MERGED @ `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI #162 SUCCESS |
| **Preuve e2e** | conversation → qualification → Cycle durable → LPS N+1 → proposal ContextSnapshot live → visible `/studio` · process restart PASS · R1 AsyncLocalStorage concurrency PASS · R2 test-scope SHA frozen · PR #339 · merge `a9a4765…` · CI #162 SUCCESS |
| **Next** | M4 *(M3 SATISFIED dependency)* |
| **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

### Milestone 3 — Gouvernance humaine + préparation réelle

| Champ | Contenu |
| --- | --- |
| **ID** | M3 |
| **Capacité v3** | V3-F05 chaîne · HumanDecision · ExecutionContract (+ support F12 réversibilité) |
| **Outcome** | Options/reco → Morris décide → decisionRef durable → ExecutionContract exact + projection Cursor PREPARE-only |
| **État actuel** | **ON MAIN** — HumanDecision Product SQLite · ExecutionContract Product SQLite · decision→LPS atomique · DecisionBasis minimal · projection Cursor PREPARE-only · authority `LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT` (fail-closed) |
| **Actifs** | T-A3 **COMPLETE** (M3) / KEEP · T-A4 **COMPLETE** (M3) / KEEP · F2/F3 ADAPT · Product SQLite m3-0.1.0 |
| **Gaps fermés on main** | L2 durable HD · L3 proposal binding (DecisionBasis) · L8 exact/unresolved contract fields (no fixture on M3 path) · autorité server-owned fail-closed (temporary with exit) |
| **Dette restante** | conversation/proposal process-local · Confirmation process-local · Trajectory/Epistemic Memory · Attempt/Evidence Memory · autorité local-single-user temporaire (exit Auth.js/IAM) · DOC-DEBT-M1-01 |
| **Dépendances** | M1–M2 — **SATISFIED** |
| **Delivery authorization** | **CONSUMED** — GO MORRIS M3 — 2026-08-13 |
| **Validation gate** | **CONSUMED** — GO MORRIS — VALIDATE M3 + COMMIT / PUSH / PR — 2026-08-13 Europe/Paris |
| **Commit / push / PR** | **CONSUMED** — PR #341 |
| **Merge** | **CLOSED** — PR #341 MERGED @ `8eea4cbf211d9e159626394477353f19126fe900` · CI SFIA Studio **#166** SUCCESS |
| **Exit evidence** | **EXIT PROOF SATISFIED ON MAIN** |
| **Preuve e2e** | GO → HD durable + LPS N+1 · restart → PREPARE sans Proposal · ExecutionContract durable · fingerprint persisted=recomputed=projection · unresolved semantics fail-closed · Cursor PREPARE-only · authority adversarial PASS · local 1656 / 131 / 0 · CI #166 SUCCESS · merge #341 |
| **Next** | M5 — exit proof **ACCEPTED BY MORRIS** · **CLOSED** *(M4 CLOSED)* |
| **Statut** | **VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED** |

### Milestone 4 — Première exécution Cursor REAL bornée depuis Studio

| Champ | Contenu |
| --- | --- |
| **ID** | M4 |
| **Capacité v3** | V3-F11 AgentCapability · F12 · F05 exécution |
| **Outcome** | Action REAL faible risque/read-only depuis Studio via T-A5 + adapter harvesté ; pas de silent REAL→fixture |
| **État actuel** | **M4 CLOSED** — Delivery **MERGED** · FIRST REAL historical (launch proven / completion timeout) · diagnosis **COMPLETE WITH RESERVES** · pre-reproof bounding **MERGED** · final governed REAL completion reproof **PASS** (handoff `1123a30f…`) · exit proof **ACCEPTED BY MORRIS** · REAL default **OFF** · timeout 60000 **KEEP FOR NOW** |
| **Architecture selected (D-M4-01→05)** | **ADOPTED + IMPLEMENTED** — specialized REAL OA boundary (Option B) · temporary durable launch journal CREATED/LAUNCHED · bounded RO AgentCapability · durable Gate D GD-1 · L7-1 for first RO |
| **Actifs** | T-A5 lifecycle **KEEP** · fixture port `externalEffects:false` **KEEP** · specialized REAL boundary **COMPLETE / KEEP** · `NodeCursorProcessRunner` **KEEP** · isolated pinned Git worktree **KEEP** · Gate D GD-1 **KEEP** · technical launch journal **TEMPORARY WITH EXIT / KEEP** · bounded RO AgentCapability **KEEP** · gateway deterministic bounding **KEEP** · OPS1 Cursor primitives **HARVESTED**, no OA runtime coupling |
| **Gaps restants M4** | — **none blocking** · surviving non-blocking reserves: `CURSOR_REAL_TIMEOUT_POLICY` · launch journal TEMPORARY WITH EXIT · future IAM/Ack · partial Confirmation/Attempt/Evidence durability |
| **Dépendances** | M3 — **SATISFIED** · D-M4-01→05 — **SATISFIED** · Delivery — **SATISFIED** · FIRST REAL / diagnosis / bounding / completion proof / exit acceptance — **CONSUMED** |
| **Preuve de sortie M4** | **SATISFIED / ACCEPTED BY MORRIS** — exact HD/EC · bounded agent · Gate D single-use · governed Cursor REAL · CREATED/LAUNCHED · no duplicate launch · no fixture fallback · isolated pinned workspace · bounded RO completion · fail-closed safety · final completion PASS |
| **Statut** | **M4 EXIT PROOF ACCEPTED BY MORRIS — CLOSED** |
| **Next** | M5 exit proof **ACCEPTED BY MORRIS** · M5 **CLOSED** · **NEXT = PRE-M6 USER JOURNEY / UX BASELINE** (then M6) |

### Milestone 5 — Retour de preuve + analyse Nora

| Champ | Contenu |
| --- | --- |
| **ID** | M5 |
| **Capacité v3** | V3-F14 Artifact Completeness · Evidence/ReviewBundle · F13 learning (base) · support F02/F05/F09 |
| **Outcome** | Evidence/ReviewBundle liés contrat/décision → réinjectés Nora → liens factuels LPS → Recommendation next gate → gouvernance humaine préservée |
| **État actuel runtime** | Attempt **Product SQLite** · Evidence **Product SQLite** · ReviewBundle **Product SQLite** · W1 LPS `evidenceIds`/`reviewBundleIds` **ON MAIN** · Product durable rehydrate **PROVEN** · Panel remount ReviewBundle/Recommendation **PROVEN** · RecommendNextGate Recommendation-only |
| **Architecture** | **ADOPTED BY MORRIS + IMPLEMENTED ON MAIN** — Entry Qualification **COMPLETE** (handoff `63f41e3…`) · Delivery PR #350 · UI PR #351 |
| **M5-A** | **OPTION B ADOPTED + IMPLEMENTED ON MAIN** — Product SQLite Attempt + Evidence + ReviewBundle behind existing ports (PR #350) |
| **M5-B** | **W1 ADOPTED + IMPLEMENTED ON MAIN** — factual LPS link update + Recommendation separate · system factual writer (PR #350) |
| **M5-C** | **KEEP TEMPORARY WITH EXIT** — journal still present ; not retired ; owner **NOT EXPLICITLY RECORDED** (**POST-M5 GOVERNANCE DEBT / DECISION REQUIRED**) |
| **Actifs** | domain/ports/use cases **KEEP** · Product SQLite Attempt/Evidence/RB **COMPLETE** · LPS **KEEP** + W1 append **COMPLETE** · Nora/F3 durable remount consumer **COMPLETE** · launch journal **KEEP TEMPORARY WITH EXIT** |
| **Technical / Functional Exit** | **SATISFIED ON MAIN** — M5-01…M5-34 · process A→B restart · remount UI M5-27/M5-28 · anti-claims · ZERO unauthorized REAL · CI #184/#185/#186/#187 SUCCESS |
| **Exit Proof** | **ACCEPTED BY MORRIS** |
| **Intégration** | PR #350 merge `8f753218…` · PR #351 merge `d8961f1d…` · capitalization PR #352 merge `3467ecd…` · exit handoff `54b0f5b4…` · post-merge handoff `0121e184…` |
| **Dépendances** | M4 — **SATISFIED / CLOSED** · Architecture — **CONSUMED** · Delivery — **CONSUMED / MERGED** · UI rehydrate — **CONSUMED / MERGED** · Capitalization Roadmap — **CONSUMED / MERGED** · Closure gate — **CONSUMED** |
| **Statut** | **M5 EXIT PROOF ACCEPTED BY MORRIS — CLOSED** |
| **Next convergence capability** | **PRE-M6** — baseline + G-UX readiness **COMPLETE** · G-UX-15 technical blocker **CLOSED** · controlled integration **PENDING** · Figma/UI Delivery **NOT AUTHORIZED** |
| **Next immediate gate (repo)** | **CYCLE 13 PR READINESS** (local accepted candidate) |
| **Next product gate (after integration)** | **D-PRE-M6-UX-05 FIGMA GO** — **NO DECISION YET** |
| **After Pre-M6 product proof** | **M6 ENTRY QUALIFICATION** — still **NOT STARTED / NOT AUTHORIZED** without distinct Morris GO |


### Pre-M6 Convergence Gate — User Journey / UX Baseline

| Champ | Contenu |
| --- | --- |
| **ID** | PRE-M6 *(convergence gate — **not** Milestone 5.5 · **not** M6)* |
| **Capacité principale** | **V3-F05** — chaîne conversation → décision → exécution |
| **Support** | V3-F02 LPS · V3-F14 Artifact Completeness · V3-F15 maturity / anti-claims |
| **Purpose** | Establish the first clean SFIA Studio product UX baseline **over** the proven M1→M5 runtime — prove that already-built capabilities form a coherent, usable product journey |
| **Principle** | **RESTART UX / INFORMATION ARCHITECTURE FROM THE CANONICAL USER JOURNEY** · **KEEP M1→M5 RUNTIME / DOMAIN / APPLICATION BACKBONE** · UI actuelle **≠** baseline imposée · historical POC / transitory screens **not** reused by default · selective harvest only after explicit asset audit |
| **UX doctrine authority** | Validated decisions in framing **30/37** prevail (incl. **CC-D01** : conversation dominante + panneau vivant + confirmations structurantes · **pas** de stepper principal · **pas** de workspace multi-panneaux MVP) · older candidate wording in framing **11** (incl. « Cockpit avant chat ») is **supporting/historical**, not superior authority |
| **Inputs / KEEP (runtime)** | M1→M5 runtime backbone · Product SQLite · Project/LPS · CycleInstance · HumanDecision · ExecutionContract · ExecutionAttempt · Evidence · ReviewBundle · existing application/domain ports/use cases |
| **Existing UI assets** | **TO QUALIFY DURING PRE-M6 UX AUDIT** — candidate dispositions KEEP / ADAPT / HARVEST / REPLACE / FREEZE / RETIRE LATER · **no** component-level disposition consumed in this Roadmap cycle · **no** automatic deletion |
| **Current state** | Functional baseline **ADOPTED** · G-UX readiness **COMPLETE** · G-UX-15 Slice A exit proof **ACCEPTED BY MORRIS** · technical application-wiring blocker **CLOSED** · Confirmation process-local **KEEP RESERVE** · candidate **LOCAL / NOT YET ON MAIN** |
| **Completed** | User Journey Qualification · Functional IA · gap readiness G-UX-01→15 · Slice A technical bridge + accepted exit proof · Pre-M6 baseline + Roadmap capitalization (this cycle) |
| **Remaining** | Integrate accepted Slice A/baseline/Roadmap to main · Figma Visual Contract · Morris visual validation · UI Delivery · browser E2E · visual proof · UAT · gap/debt re-evaluation · M6 Entry Qualification |
| **Future work sequence** | 1. **PR READINESS / controlled integration** · 2. Figma Visual Contract (D-PRE-M6-UX-05) · 3. Morris UX Validation · 4. UI Delivery over existing M1→M5 runtime · 5. Browser E2E · 6. Runtime visual proof / Figma comparison · 7. Morris UAT · 8. Gap / debt / learning re-evaluation · 9. M6 Entry Qualification |
| **Figma** | Readiness **READY WITH FUNCTIONAL RESERVES** · authorization **NO** · D-PRE-M6-UX-05 = **NO DECISION YET** · **action = 0** |
| **UI Delivery** | **NOT AUTHORIZED** (integration pending + Figma not authorized + Delivery gate distinct) |
| **Future proof expected** | Functional browser E2E through M1→M5 user journey · runtime visual evidence · Figma/runtime comparison · Morris UAT · gaps/debt captured |
| **Anti-scope** | No runtime rewrite · no parallel UI/business engine · no Product SQLite / domain / ports rewrite by default · no M6 architecture/delivery · no Cursor REAL · no project commit/push/PR in this capitalization cycle |
| **Statut** | **PRE-M6 FUNCTIONAL BASELINE + GAP READINESS COMPLETE** · **G-UX-15 TECHNICAL BLOCKER CLOSED BY MORRIS** · **CONTROLLED INTEGRATION PENDING** · **FIGMA/UI DELIVERY NOT AUTHORIZED** |
| **Next after Pre-M6 product proof** | **M6 ENTRY QUALIFICATION** — distinct Morris GO still required |

### Milestone 6 — Boucle projet complète

| Champ | Contenu |
| --- | --- |
| **ID** | M6 |
| **Capacité v3** | V3-F05 + F09 replanification (base) |
| **Outcome** | Sans copier-coller manuel : conversation → qualification → décision → exécution → preuve → analyse → update projet → next step |
| **État actuel** | Chaîne fragmentée / process-local / fixture |
| **Dépendances** | M1–M5 — **SATISFIED** · M5 — **CLOSED** · Pre-M6 functional baseline/readiness — **PROGRESSING** (journey/IA adopted · G-UX-15 technical blocker **CLOSED** · product Figma/Delivery/E2E/UAT **NOT YET SATISFIED**) · M6 entry only after Pre-M6 product UX validation **and** distinct Morris GO · **M6 = NOT STARTED / NOT AUTHORIZED** |
| **Preuve e2e** | parcours complet redémarrage-safe documenté |
| **Statut** | **NOT STARTED / NOT AUTHORIZED** |

### Milestone 7 — Élargissement contrôlé doctrine v3

| Champ | Contenu |
| --- | --- |
| **ID** | M7 |
| **Capacité v3** | Couverture progressive F06–F10, F08, F13–F15 au-delà du backbone |
| **Outcome** | Cycles/lenses/artefacts/transitions/contradictions/dette/capitalisation étendus **depuis** backbone utilisé |
| **Dépendances** | M6 |
| **Preuve** | matrice B9 avance avec preuves par fondation |
| **Statut** | **NOT STARTED** |

### Milestone 8 — Adoption produit / exploitation

| Champ | Contenu |
| --- | --- |
| **ID** | M8 |
| **Capacité v3** | Conditions d’un futur claim **v3 runtime ADOPTED** |
| **Outcome** | persistence, IAM/authz, sécurité, observabilité, backup/reprise, qualité, rétention, multi-user si requis, coverage doctrine obligatoire |
| **Anti-claim** | Ce milestone **ne préjuge pas** des critères non décidés et **n’autorise pas** le claim ADOPTED |
| **Statut** | **NOT STARTED** |

## B9. Matrice de couverture doctrine V3-F01…F15

| Fondation | Capacité | État courant | Milestone(s) | Preuve attendue | Gap / décision |
| --- | --- | --- | --- | --- | --- |
| V3-F01 CKC | Qualification cognitive | **PARTIAL RUNTIME** — F2 qualify + CycleInstance/CKC binding **on main** (M2) ; proposal process-local | M2, M7 | CKC lié cycle + proposal | proposal durable later |
| V3-F02 LPS | Living Project State | **PARTIAL RUNTIME** — LPS durable on main ; M5-B W1 factual Evidence/RB write-back **IMPLEMENTED ON MAIN** | M1, M5 | M1 restart · W1 append proven | conversation durability later |
| V3-F03 DoctrinePackage | Package pin/digest | **PARTIAL RUNTIME** — digest in live `F2ContextSnapshot` **on main** (M2) ; KEEP files | M1–M2 | live digest in snapshot | — |
| V3-F04 Épistémologie | Obs/Hyp/… | DOC + UI tags partiels (base M2) | M2, M7 | tags/stop contradictions | later depth |
| V3-F05 Chaîne conv→exec | Boucle native | **PARTIAL RUNTIME** — M1→M5 runtime proven through M5 **CLOSED** · Pre-M6 functional baseline **ADOPTED** · G-UX-15 technical application bridge exit **ACCEPTED** (local / integration pending) · Figma/UI product proof pending · full continuous loop remains later M6 | M2–M6 · Pre-M6 | Pre-M6 product UX (Figma/Delivery/E2E/UAT) · then M6 complete continuous loop | Pre-M6 product proof PENDING · M6 NOT AUTHORIZED · runtime v3 NON ADOPTED |
| V3-F06 Trajectory | ProjectTrajectory | Modeled / Memory cycle | M3, M7 | trajectory update post-HD | wire |
| V3-F07 Provenance | Source hierarchy | Doctrine FS | M2, M7 | provenance on artifacts | later |
| V3-F08 Contradictions | Stop/contradiction | DOC | M7 | UI stop + record | later |
| V3-F09 Replanif | Governed replan | DOC · M5 preserves Recommendation-only (W1) · structural replanning remains future / M6 | M6–M7 | next-step from ReviewBundle | after M5 exit |
| V3-F10 DebtItem | Dette gouvernée | DOC | M7–M8 | debt records | later |
| V3-F11 AgentCapability | Caps agents | Fixture + **bounded REAL RO KEEP** · M4 scope exercised successfully on final reproof (strict bounded tool-surface proven for that path) | M4 | M4 CLOSED for this capability class | future AgentCapability classes separate |
| V3-F12 Réversibilité | Action policy | Gate D + CREATED/LAUNCHED + spawn ACK/completion controls **demonstrated for M4** · Ack **deferred for first RO** (D-M4-05) | M3–M4 | M4 CLOSED · Ack for elevated classes later | future IAM / N2/N3 |
| V3-F13 Learning | REX contrôlé | DOC / capitalisation · durable Evidence/RB learning base **ON MAIN** · Cycle 15 capitalization/REX recorded in review handoff (not method promotion) | M5, M7 | learning from Evidence | later depth / method promotion separate |
| V3-F14 Artifact Completeness | Completeness gates | Attempt/Evidence/RB durable **ON MAIN** · remount UI visibility **PROVEN** · M5-01…34 **SATISFIED ON MAIN** · M5 **CLOSED** | M5 · Pre-M6 | completeness + restart-safe artifacts · Pre-M6 UX usability proof | Pre-M6 before M6 |
| V3-F15 Maturity | Distributed maturity | Honesty rails T-A7 · runtime v3 **NON ADOPTED** · no maturity promotion from M5 architecture ADOPT | M8 | anti-claim maturity | no false READY |

## B10. Chemin critique explicite

```text
CRITICAL PATH:
  M1 durable Project/LPS — SATISFIED / MERGED ON MAIN (PR #337 @ c6925954…)
  → M2 Nora contextuel durable — VALIDATED BY MORRIS / MERGED ON MAIN / EXIT PROOF SATISFIED (PR #339 @ a9a4765…)
  → M3 HD durable + ExecutionContract exact — VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED (PR #341 @ 8eea4cbf…)
  → M4 Architecture — CLOSED (D-M4-01→05 ADOPTED BY MORRIS)
  → M4 Delivery REAL-OFF — VALIDATED BY MORRIS / MERGED ON MAIN (PR #344 @ ec65fb47)
  → FIRST M4 CURSOR REAL attempt (historical) — launch / Gate D / CREATED·LAUNCHED / no-mutation PROVEN — completion NOT (timeout ~60s)
  → timeout diagnosis COMPLETE WITH RESERVES — UNIQUE root cause NOT PROVEN — timeout = PLAUSIBLE CONTRIBUTING FACTOR (historical)
  → pre-reproof deterministic bounding MERGED (PR #346 @ fc7e20aa…)
  → post-pre-reproof Roadmap sync MERGED (PR #347 @ 2d1361ee…)
  → M4 GOVERNED REAL COMPLETION PROOF PASS (handoff 1123a30f…) — duration≈15.7s — M4_READ_ONLY_OK — strict bounded tool-surface PROVEN for that path
  → M4 EXIT PROOF ACCEPTED BY MORRIS — M4 CLOSED
  → M4 closure Roadmap MERGED (PR #348 @ 5132f1bc…)
  → M5 ENTRY QUALIFICATION — COMPLETE (handoff 63f41e3…)
  → M5 ARCHITECTURE TRAJECTORY — ADOPTED BY MORRIS (M5-A OPTION B · M5-B W1 · M5-C KEEP TEMPORARY WITH EXIT)
  → M5 DELIVERY Option B + W1 — MERGED (PR #350 @ 8f753218…) — CI #184/#185 SUCCESS
  → M5 UI/Nora durable rehydrate — MERGED (PR #351 @ d8961f1d…) — CI #186/#187 SUCCESS
  → M5 EXIT PROOF — SATISFIED ON MAIN (M5-01…M5-34) — handoff 54b0f5b4…
  → M5 CAPITALIZATION ROADMAP — MERGED (PR #352 @ 3467ecd…) — CI #31875337665 / post-merge #31875621317 SUCCESS
  → M5 EXIT ACCEPTANCE + CLOSURE — CONSUMED BY MORRIS (ACCEPT M5 EXIT PROOF + CLOSE M5 · KEEP M5-C · ZERO REAL · NO M6 EXECUTION)
  → M5 — CLOSED
  → PRE-M6 USER JOURNEY QUALIFICATION — COMPLETE
  → CANONICAL JOURNEY / FUNCTIONAL IA — ADOPTED BY MORRIS
  → G-UX-01→15 READINESS — COMPLETE
  → G-UX-15 SLICE A — EXIT PROOF ACCEPTED / TECHNICAL BLOCKER CLOSED (LOCAL / NOT YET ON MAIN)
  → CONTROLLED INTEGRATION / PR READINESS — NEXT REPO GATE
  → FIGMA VISUAL CONTRACT — NOT AUTHORIZED YET (D-PRE-M6-UX-05)
  → MORRIS UX VALIDATION
  → UI DELIVERY OVER M1→M5 RUNTIME — NOT AUTHORIZED
  → FUNCTIONAL E2E + VISUAL PROOF + MORRIS UAT
  → M6 ENTRY QUALIFICATION
  → M6 — NOT STARTED / NOT AUTHORIZED

M4 ARCHITECTURE GATE: CLOSED (D-M4-01→05)
M4 DELIVERY GATE: CLOSED / MERGED (PR #344)
FIRST REAL GATE: CONSUMED / HISTORICAL — PARTIAL (launch only)
TIMEOUT DIAGNOSIS: COMPLETE WITH RESERVES
PRE-REPROOF BOUNDING: MERGED (PR #346)
M4 GOVERNED REAL COMPLETION PROOF: CONSUMED / PASS
M4 EXIT PROOF: ACCEPTED BY MORRIS — SATISFIED
M4: CLOSED
GATE D: IMPLEMENTED — consumed once per historical governed REAL — fresh grant required for future REAL
CRITICAL ACK: DEFERRED FOR FIRST RO — FUTURE N2/N3 / IAM — NOT PROMOTED
TECHNICAL LAUNCH JOURNAL: KEEP TEMPORARY WITH EXIT — M5-C ADOPTED DISPOSITION — ≠ PRODUCT STORE
TIMEOUT 60000: KEEP FOR NOW — proven sufficient for demonstrated M4 bounded RO path — NOT universal policy — NOT proven defective
CURSOR_REAL_TIMEOUT_POLICY: OPEN / NON-BLOCKING POST-M4 RESERVE — UNCHANGED BY M5 ARCHITECTURE DECISION
STRICT BOUNDED RUNTIME READ-ONLY TOOL-SURFACE: PROVEN FOR FINAL M4 REPROOF PATH ONLY
M5 ENTRY QUALIFICATION: COMPLETE
M5 ARCHITECTURE GATE: CONSUMED / ADOPTED BY MORRIS
M5 DELIVERY: CONSUMED / MERGED (PR #350)
M5 UI REHYDRATE: CONSUMED / MERGED (PR #351)
M5 CAPITALIZATION ROADMAP: CONSUMED / MERGED (PR #352)
M5 EXIT PROOF: SATISFIED ON MAIN (M5-01…M5-34) + ACCEPTED BY MORRIS
M5 CLOSURE GATE: CONSUMED
M5 CLOSED: YES — CLOSED BY MORRIS
M5: EXIT PROOF ACCEPTED BY MORRIS — CLOSED

PRE-M6 USER JOURNEY / UX BASELINE: FUNCTIONAL BASELINE + GAP READINESS COMPLETE — G-UX-15 TECHNICAL BLOCKER CLOSED BY MORRIS — CONTROLLED INTEGRATION PENDING — FIGMA/UI DELIVERY NOT AUTHORIZED
G-UX-15 SLICE A: EXIT PROOF ACCEPTED BY MORRIS — LOCAL ACCEPTED CANDIDATE — NOT YET ON MAIN — FIXTURE-SAFE = TECHNICAL PROOF ONLY
CONFIRMATION: PROCESS-LOCAL RESERVE — KEEP FOR NOW
NEXT REPO GATE: CYCLE 13 PR READINESS (5-file coherent candidate)
NEXT PRODUCT GATE AFTER INTEGRATION: D-PRE-M6-UX-05 FIGMA VISUAL CONTRACT GO — NO DECISION YET
NEXT CONVERGENCE CAPABILITY: PRE-M6 controlled integration then Figma/UI product proof
M6: NOT STARTED / NOT AUTHORIZED — sequenced AFTER Pre-M6 product validation + distinct Morris GO

NON-BLOCKING / FUTURE RESERVES (do NOT reopen M4 ; do NOT reopen M5 CLOSED ; do NOT authorize Pre-M6 delivery / Figma / M6):
  - CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING
  - technical launch journal — KEEP TEMPORARY WITH EXIT (M5-C) — OWNER NOT EXPLICITLY RECORDED — POST-M5 GOVERNANCE DEBT / DECISION REQUIRED
  - confirmAndExecuteF3Fixture optional productDurablePath fallback — NON-BLOCKING HARDENING
  - UX CURRENT STATE — HISTORICAL / MIXED SURFACES TO AUDIT DURING PRE-M6 (not a structural debt claim without dedicated analysis)
  - future IAM / Critical Ack for elevated classes
  - Claims/Maturity durability — later
  - Confirmation process-local — later
  - delivery/capitalization branch cleanup — non-blocking (delete NOT AUTHORIZED)

TRANSVERSE LATER: FinOps capture optionnelle · multi-user · observability depth · F08/F10 depth
FROZEN (RECOMMENDATION until GO): execution-run feature growth · OPS1 UI expansion · FinOps lots non bloquants · D1 feature growth
DECISION REQUIRED: OPS1/D1/execution-run disposition · Ack/Auth.js promotion for future N2/N3/IAM · Auth.js/IAM exit autorité M3 temporaire · timeout policy qualification when a future REAL class needs it
G0 CONSUMED: Option 1 ADOPTED · Product persistence node:sqlite ADOPTED
M2 MERGE GATE: CLOSED
M3 MERGE GATE: CLOSED
M3: VALIDATED BY MORRIS — MERGED ON MAIN — EXIT PROOF SATISFIED
M4: EXIT PROOF ACCEPTED BY MORRIS — CLOSED
Cursor REAL: IMPLEMENTATION MERGED / DEFAULT OFF / 2 HISTORICAL GOVERNED LAUNCHES / 1 SUCCESSFUL COMPLETION / future REAL NOT AUTHORIZED WITHOUT MORRIS GO
runtime v3 NON ADOPTED
```

## B10a. CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING POST-M4 RESERVE

Document key (tracking only — **not** an architecture decision):

`CURSOR_REAL_TIMEOUT_POLICY — OPEN / NON-BLOCKING POST-M4 RESERVE`

| Fact | Value |
| --- | --- |
| Current product timeout | **60000 ms** |
| FIRST REAL (historical) | timedOut≈60030 ms · exit 143 · agent still progressing · UNIQUE root cause **NOT PROVEN** · timeout = plausible contributing factor |
| Final M4 bounded reproof | timedOut=false · duration≈15735 ms · exit 0 · `M4_READ_ONLY_OK` |
| Proven | 60000 **sufficient for the demonstrated M4 bounded read-only path** |
| Not proven | 60000 as a **universal** Cursor REAL timeout policy |
| Not proven | 60000 **defective** |
| Classification | **KEEP CURRENT 60000 FOR NOW** + **OPEN / NON-BLOCKING POST-M4 RESERVE** |
| Blocks M5? | **No** |
| Changed by M5 architecture decision? | **No** — reserve unchanged |
| Reopens M4? | **No** |

No structural selection now among: global 90s/120s · unlimited · dynamic · per-AgentCapability · per-ExecutionContract · per class. Any such selection needs dedicated proof + Morris decision.

**Exit condition (reserve may close only if):** (1) timeout policy explicitly qualified for REAL execution classes actually needed ; **OR** (2) Morris decides a contractual/capability-scoped/other reference mechanism replacing the global value ; **OR** (3) product needs show the current global value is sufficient for the authorized execution population with adequate proof.

## B10b. Dette documentaire post-M1


| Id | Observation | Impact | Classification | Owner / gate | Exit |
| --- | --- | --- | --- | --- | --- |
| **DOC-DEBT-M1-01** | Framing `32` métadonnées/maturité indiquent encore « persist runtime non migrée / schemas persist non créés » alors que T-A1 Project/LPS **et** T-A2 CycleInstance M2 subset SQLite sont **mergés** sur main | Risque de lecture contradictoire doctrine cible vs preuve runtime courante (dette plus visible post-M2) | documentation freshness debt | Morris — modification framing v3 = cycle + GO dédié | Cycle documentaire dédié corrigeant **uniquement** l’état factuel sans changer doctrine V3-F02/F06/F09 |

**Anti-claim :** DOC-DEBT-M1-01 ≠ blocker M3 automatique · ≠ autorisation de modifier `32` dans ce cycle · ≠ claim runtime v3 ADOPTED.

## B11. Freeze / stop-doing (**RECOMMENDATION**)

Tant que le chemin critique n’est pas servi, **ne pas** étendre par défaut :

- nouveaux lots FinOps sans dépendance Studio user-visible ;
- nouvelles features execution-run indépendantes ;
- expansion OPS1 UI (hors harvest adapter) ;
- expansion D1 `/projects` ;
- micro-hardening T-A7 sans blocker utilisateur.

Ces FREEZE sont des **recommandations** jusqu’à validation Morris.

## B12. Maintenance de la roadmap

Mettre à jour après : décision Morris structurante · milestone obtenue · nouvelle preuve · changement de dépendance · architecture validée · réserve bloquante · post-merge structurant.
Ne pas mettre à jour pour chaque micro-commit sans impact de trajectoire.

## Références

- Build Doctrine : [`sfia-studio-convergence-build-doctrine.md`](./sfia-studio-convergence-build-doctrine.md)
- G0 decision pack : [`sfia-studio-g0-architecture-persistence-decision-pack.md`](./sfia-studio-g0-architecture-persistence-decision-pack.md)
- M1 : PR #337 · merge `c6925954a7aa86f34c9fcd6f7babf0336014eba3` · CI #158 · handoff `84330e34461bbd35adc7baa14fabe993baf24288`
- M2 : PR #339 · head `8a920a4726f3ef41a8660ef6fb0b5be88a7d8e51` · merge `a9a4765c242948f2287392a2910fb1cd30061a7a` · CI #162 · handoff PR-readiness `1ad4746b44169d777a726fc8ceeed1c663469c40`
- M3 : PR #341 · head `5ec6aaa5fe9b75a1a6cec0520a4e32ecf3226b19` · merge `8eea4cbf211d9e159626394477353f19126fe900` · CI #166 · handoff PR-readiness `2a5759232bf2b17c98f002ad087f2c4c14b65d4d`
- M3 post-merge Roadmap : PR #342 · merge `607763d9a1349d6b48633d8763f75ae3c07c84fc`
- M4 architecture pack : `sfia/review-handoff` @ `366726945f8f533d958c82b7251edb1a5a4b45f0` · GO **ADOPT M4 ARCHITECTURE TRAJECTORY** (D-M4-01→05)
- M4 Architecture docs : PR #343 · merge `e974b7306f7400249c31399fd2890d5817833dbf`
- M4 Delivery : PR #344 · head `f7270b21ccdbcf1cd543879e7c4120d87b874479` · merge `ec65fb47c04b451d892297c806b9b041995339a5` · CI #172 SUCCESS · diagnostic Class C handoff `bf4928389fd1ec50ecf2cf2d485bfbd2d7d3ba63`
- M4 post-Delivery Roadmap : PR #345 · merge `3575c8863d8a13b610dbfde96a33426a620b2c56`
- FIRST M4 CURSOR REAL : handoff `2234931e682bfede4b8515fd1ede7c2e1e2d2d01` · Attempt `xat:m4-first-real-001` · Gate D `gtd:m4-first-real-001` · base `3575c886…` · PARTIAL REAL PROOF (launch only / timeout)
- M4 timeout diagnosis : handoff `797daeccfa2ec445a1ecaf10f042de635cb1fe21` · NO REAL REPROOF · timeout = PLAUSIBLE CONTRIBUTING FACTOR
- M4 pre-reproof bounding content-complete : handoff `3c56cb29367268231c1db26b4de7af5cfe0ef499`
- M4 pre-reproof bounding PR readiness : handoff `9ffce8cc4a78f15af322d4fb4aab8bf63896ff6c`
- M4 pre-reproof bounding product : PR #346 · head `8900cd06be195b2dd9fa154a7153608fdde6f9a3` · merge `fc7e20aaeb5153b4d73c1809f865e361f00e1b34` · CI SFIA Studio **#176** SUCCESS · ZERO REAL in bounding integration
- M4 post-pre-reproof Roadmap sync : PR #347 · head `4f989aba92bce5ca33e1de251523694559b53902` · merge `2d1361ee71bec7a21f6f76efc7c33eaf3146802a` · CI SFIA Studio **#178** SUCCESS
- M4 GOVERNED REAL COMPLETION PROOF : handoff `1123a30f2261756a2ec744ee002ec023b7fea0af` · Attempt `xat:m4-reproof-86b5ecb05474` · Gate D `gtd:m4-reproof-86b5ecb05474` · PASS
- Morris GO : **ACCEPT M4 EXIT PROOF + CLOSE M4 — NO M5 EXECUTION**
- M4 closure Roadmap sync : PR #348 · merge `5132f1bc2c147b2c7ebf6d331c04b1c6b1bd047e`
- M5 Entry Qualification : handoff `63f41e3f328868286c14312a58a7b79f850383c0`
- Morris GO : **ADOPT M5 ARCHITECTURE TRAJECTORY — M5-A OPTION B — M5-B W1 — M5-C KEEP TEMPORARY WITH EXIT — NO REAL — NO DELIVERY**
- Morris GO : **SYNC M5 ARCHITECTURE DECISION INTO CONVERGENCE ROADMAP — NO REAL — NO DELIVERY**
- M5 Delivery : PR #350 · head `17461dad78f92a3d5e5e1d9bd36aa20d1e86ac11` · merge `8f753218e4fff7d68d78c1d57e9c3e8fb7e60943` · CI #184/#185 SUCCESS
- M5 UI/Nora durable rehydrate : PR #351 · head `ced7b172969c27b5e2d6fda06e9caa8c84e1e0d7` · merge `d8961f1d85a98b5d4185f007f16ddac209e2e557` · CI #186/#187 SUCCESS
- M5 exit re-evaluation handoff : `54b0f5b43a50861c26226aa3ffc06460f8ffbafe` · blob `131c85172bbd6370a3edcd71347a64932c9303ab`
- M5 capitalization Roadmap sync : PR #352 · head `c26824c602ec041cb1d40e9078191c0f1cde4e95` · merge `3467ecdf74ac2010c45f34545fb8684563dea547` · CI run #31875337665 SUCCESS · post-merge #31875621317 SUCCESS · handoff `0121e184c936f8dc73ffe80e20d43027fec495d7`
- Morris GO : **ACCEPT M5 EXIT PROOF + CLOSE M5 — KEEP M5-C TECHNICAL JOURNAL — ZERO REAL — NO M6 EXECUTION — RUNTIME V3 NON ADOPTED — NO BRANCH DELETE**
- M5 EXIT PROOF : **ACCEPTED BY MORRIS** · M5 : **CLOSED**
- User wording : **« ok go pour la modification »** · governed interpretation : align M5 closure Roadmap with **PRE-M6 USER JOURNEY / UX BASELINE** before M6
- PRE-M6 : **FUNCTIONAL BASELINE + READINESS COMPLETE / G-UX-15 TECHNICAL BLOCKER CLOSED / INTEGRATION PENDING / FIGMA+UI DELIVERY NOT AUTHORIZED** · Figma action **0** · UI Delivery **0**
- Current main (closure sync base) : `3467ecdf74ac2010c45f34545fb8684563dea547`
- Audit handoff historique : `sfia/review-handoff` @ `c5b417dc13fa3700787d28571e5b5abe0599ae98` / `31a5db07fba2555a59ee8c65ad76b537bbd8a73d`
- Framing : `projects/sfia-studio/sfia-v3-framing/30`–`37` (dont `34` · DOC-DEBT-M1-01 sur `32`)

```

### 13. Roadmap before/after current-state summary
**Before:** PRE-M6 WORK NOT STARTED · next gate = Pre-M6 qualification · G-UX-15 not reflected as closed.
**After:** PRE-M6 functional baseline + gap readiness COMPLETE · G-UX-15 technical blocker CLOSED BY MORRIS · local accepted candidate NOT YET ON MAIN · next repo gate = Cycle 13 PR READINESS · next product gate after integration = D-PRE-M6-UX-05 · Figma/UI Delivery/M6 unauthorized · Confirmation process-local KEEP RESERVE.

### 14. B6 consumed decisions update
Recorded: journey/IA/reuse ADOPTED · process-local first-test ACCEPTED · G-UX readiness COMPLETE · Slice A selected + amends consumed · ACCEPT EXIT PROOF CONSUMED · technical blocker CLOSED · D-PRE-M6-UX-05 NO DECISION YET.

### 15. Pre-M6 gate update
Completed vs remaining sequences updated; statut no longer WORK NOT STARTED.

### 16. B9 V3-F05 update
PARTIAL RUNTIME with Pre-M6 baseline ADOPTED + G-UX-15 technical bridge ACCEPTED (local) · product proof pending · runtime v3 NON ADOPTED.

### 17. B10 critical-path update
Sequence now: qualification COMPLETE → journey/IA ADOPTED → G-UX readiness COMPLETE → G-UX-15 EXIT ACCEPTED / blocker CLOSED → PR READINESS → Figma NOT AUTHORIZED YET → … → M6 NOT AUTHORIZED.

### 18. Remaining G-UX/debt reserves
G-UX-08/09/10/11/12/13/14 unchanged classifications · Confirmation process-local · M5-C owner debt · product E2E · visual contract.

### 19. Integration candidate inventory
1. `projects/sfia-studio/app/features/project-assistant/f3/resolveM3ExecutionContract.ts`
2. `projects/sfia-studio/app/features/project-assistant/f3/index.ts`
3. `projects/sfia-studio/app/__tests__/project-assistant/gux15.resolveM3ExecutionContract.test.ts`
4. `projects/sfia-studio/convergence/sfia-studio-pre-m6-user-journey-ux-baseline-qualification.md`
5. `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

Not staged · not committed · not pushed.

### 20. Validation output
```
git status --short → index.ts + roadmap modified tracked; Slice A + baseline untracked; .tmp-sfia-review/
git diff --cached → empty
git diff --check → clean
Slice A vs handoff → MATCH (unchanged)
Tests not re-run (DOC-only cycle) — prior accepted evidence preserved
```

### 21–26. Staged empty · project commit/push/PR 0 · Figma 0 · UI Delivery 0 · M6 0 · REAL 0

### 27. Next repo gate
CYCLE 13 — PR READINESS (coherent 5-file candidate)

### 28. Next product gate
After integration on main + post-merge truth: D-PRE-M6-UX-05 FIGMA VISUAL CONTRACT GO (NOT AUTHORIZED now)

### 29. Anti-claims
Technical blocker CLOSED ≠ Pre-M6 complete ≠ product E2E ≠ REAL ≠ on main ≠ Figma authorized ≠ UI Delivery authorized ≠ M6 authorized ≠ runtime v3 ADOPTED.

### 30. Verdict
PRE-M6 G-UX-15 EXIT-PROOF ACCEPTANCE CAPITALIZED — G-UX-15 TECHNICAL APPLICATION-WIRING BLOCKER CLOSED BY MORRIS — ACCEPTED SLICE A IMPLEMENTATION PRESERVED UNCHANGED — FIXTURE-SAFE PROOF RECORDED AS TECHNICAL PROOF ONLY — CONFIRMATION PROCESS-LOCAL RESERVE PRESERVED — PRE-M6 FUNCTIONAL BASELINE SYNCHRONIZED — CONVERGENCE ROADMAP SYNCHRONIZED — CONTROLLED INTEGRATION CANDIDATE PREPARED — NOT YET ON MAIN — NO PROJECT COMMIT / PUSH / PR / MERGE — NO FIGMA — NO UI DELIVERY — NO M6 — ZERO REAL — READY FOR CHATGPT REVIEW / PR-READINESS GATE
