# QUALIFICATION PRÉ-M6 DU PARCOURS UTILISATEUR / RÉFÉRENTIEL UX — REVIEW PACK FULL CORRIGÉ EN FRANÇAIS

## 1. Métadonnées

- Horodatage Europe/Paris : 2026-08-15 13:47:01 CEST (+0200)
- Niveau : FULL
- Nature : correction linguistique complète, sans changement de conclusion fonctionnelle
- Cycle : Cycle 2 — Conception fonctionnelle
- Profil : Critique
- Typologie : DESIGN / DOC / AUDIT
- Capacité principale : V3-F05
- Capacités complémentaires : V3-F02, V3-F14, V3-F15
- Jalon : RÉFÉRENTIEL PRÉ-M6 DU PARCOURS UTILISATEUR / UX

## 2. Autorisations consommées

GO Morris initial exact :

GO MORRIS — PRE-M6 USER JOURNEY / UX BASELINE QUALIFICATION — AUDIT EXISTING UI + DEFINE CANONICAL M1→M5 USER JOURNEY + UX/FUNCTIONAL IA — NO UI DELIVERY — NO M6 — ZERO REAL

GO de correction linguistique consommé après signalement du document en anglais :

bah go

Interprétation gouvernée : traduire intégralement en français l’unique artefact candidat, conserver strictement son contenu fonctionnel, ses identifiants techniques, conclusions, écarts et anti-revendications, régénérer le Review Pack FULL et republier le Review Handoff canonique. Aucune UI Delivery, aucun Figma, aucun M6, aucun Cursor REAL, aucune modification d’exécution et aucune écriture Git projet.

## 3. Vérité Git et portée

- Branche projet : `design/sfia-studio-pre-m6-ux-qualification`
- HEAD / `origin/main` : `2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7`
- Artefact : `projects/sfia-studio/convergence/sfia-studio-pre-m6-user-journey-ux-baseline-qualification.md`
- Statut projet : candidat non suivi / non indexé, comme requis
- Fichiers projet créés : 1
- Fichiers projet existants modifiés : 0
- Fichiers interdits modifiés : 0
- Commit/push/PR/merge projet : 0/0/0/0
- Code/backend/base/schéma/migration/tests : 0

## 4. Correction effectuée

L’artefact a été traduit intégralement en français sans résumé ni suppression de section. Les 20 sections, tableaux, classifications d’actifs, états, parcours, IA, contrat Figma futur, contrat de preuve et dossier de décisions Morris sont conservés.

Restent volontairement en anglais lorsqu’ils sont des identifiants ou littéraux gouvernés : noms de domaine (`HumanDecision`, `ExecutionContract`, `ExecutionAttempt`, `Evidence`, `ReviewBundle`, `Recommendation`, etc.), actions, routes, enums, IDs, `KEEP/ADAPT/COMPLETE/HARVEST/REPLACE/FREEZE/RETIRE LATER`, `NOW/DERIVED/GAP/FUTURE`, statuts de maturité et chaînes UI citées.

Le constat bloquant G-UX-15 est inchangé : le contrat durable M3 PREPARE non résolu doit être préservé, puis résolu ou remplacé par un contrat exécutable valide avant d’entrer dans la confirmation et la limite existante `StartExecution`/`ExecutionAttempt`. La fixture ne constitue pas une preuve produit du chemin critique.

## 5. Validation

- Document complet : 627 lignes
- `git diff --check` : PASS
- Changement suivi/stagé : aucun
- Cohérence des anti-revendications : PASS
- G-UX-15, D-PRE-M6-UX-01…05, M5 CLOSED, M5-C KEEP, M6 NOT AUTHORIZED, ZERO REAL : conservés
- Figma/UI Delivery/runtime v3 adoption : toujours non autorisés

## 6. Publication Review Handoff

La publication canonique de ce pack corrigera le Review Handoff FULL précédent avec la version française complète. Elle constitue une publication L3 bornée supplémentaire explicitement autorisée par le GO de correction ; aucune branche projet n’est poussée.

## 7. Prochaine validation

ChatGPT relit le candidat français complet. Morris décide D-PRE-M6-UX-01…04. G-UX-15 exige une qualification distincte avant UI Delivery. D-PRE-M6-UX-05 ne peut autoriser un futur cycle Figma Visual Contract qu’après adoption du parcours et de l’IA. M6 reste non démarré et non autorisé.

## 8. Verdict

QUALIFICATION PRÉ-M6 DU PARCOURS UTILISATEUR / RÉFÉRENTIEL UX CORRIGÉE EN FRANÇAIS — CONTENU FONCTIONNEL ET CONCLUSIONS INCHANGÉS — ARTEFACT COMPLET — DISPOSITIONS D’ACTIFS TOUJOURS CANDIDATES — G-UX-15 TOUJOURS BLOQUANT AVANT UI DELIVERY — AUCUNE ACTION FIGMA — AUCUNE UI DELIVERY — AUCUN M6 — ZERO REAL — PRÊT POUR REVUE CHATGPT / DÉCISION MORRIS

## 9. CONTENU COMPLET DU NOUVEL ARTEFACT PROJET

# SFIA Studio — Qualification pré-M6 du parcours utilisateur / référentiel UX

| Champ | Valeur |
|---|---|
| Statut | **CANDIDAT — POUR REVUE CHATGPT / DÉCISION MORRIS** |
| Rôle | Artefact de qualification fonctionnelle du produit pré-M6 |
| Cycle | Cycle 2 — Conception fonctionnelle |
| Profil / typologie | Critique · DESIGN / DOC / AUDIT |
| Capacité principale | V3-F05 — conversation → décision → exécution |
| Capacités complémentaires | V3-F02 · V3-F14 · V3-F15 |
| Base Git | `origin/main@2f0d7236e4e1b7c7ca8e987b9d4e6e3ece3c37a7` |
| Jalon | RÉFÉRENTIEL PRÉ-M6 DU PARCOURS UTILISATEUR / UX |
| Acteur produit | Morris / pilote du projet |
| Autorité de livraison | **AUCUNE** — aucune UI Delivery, aucun Figma, M6, Cursor REAL ni changement d’exécution |

## 1. Périmètre et conclusion de la qualification

Ce document définit le premier référentiel fonctionnel produit **candidat**, informé par le dépôt, couvrant l’exécution M1→M5. Il ne valide ni n’adopte ce référentiel.

L’exécution actuelle démontre les capacités requises sur M1→M5, mais elle n’expose **pas** encore une chaîne canonique et cohérente d’exécution produit. Le chemin durable M3 HumanDecision → ExecutionContract est uniquement PREPARE et fermé par défaut à l’exécution ; le chemin actuellement exécutable de l’assistant M4→M5 consomme la Proposal locale au processus et le contrat de fixture. La fixture constitue une preuve utile d’orchestration, mais ne peut servir de preuve produit du chemin critique. Une qualification distincte de l’enchaînement durable M3 PREPARE → résolution/remplacement du contrat → exécution gouvernée est donc requise avant UI Delivery.

La Conversation, la Proposal et certains états de travail de confirmation, de trajectoire et épistémiques restent locaux au processus. Cette limite peut convenir à une première preuve d’utilisabilité délibérément circonscrite si elle est signalée lors de la reprise et si aucun état local au processus n’est présenté comme une autorité durable. Elle ne résout pas l’écart de résolution/remplacement du contrat durable vers l’exécution gouvernée.

L’interface utilisateur existante ne forme pas un produit cohérent unique. Elle comprend :

1. une tranche verticale `/studio/projects/[id]` adossée à OA, disposant du câblage M1→M5 le plus utile, mais utilisant un vocabulaire d’implémentation et une projection technique dense ;
2. des surfaces D1 d’intention, d’espace de travail et de cockpit, offrant des comportements utiles centrés sur la conversation et des modèles d’orientation, mais reposant sur un modèle d’état distinct et une intégration OA incomplète ;
3. des écrans de fixture P0 `/synthese`, `/cycle-actif`, `/decision`, dont les composants visuels peuvent être récupérés sélectivement, mais dont le flux et les données ne constituent pas l’exécution canonique ;
4. une surface historique OPS1 présentant un comportement historique d’exécution et de rapport, qui doit rester isolée du chemin produit.

Le référentiel recommandé est une **expérience projet dominée par la conversation**, avec un résumé vivant du projet toujours accessible et des surfaces contextuelles, orientées tâche, pour la décision, l’exécution et les preuves. Il peut s’appuyer sur l’OA Native Backbone et Product SQLite existants. Il ne nécessite ni moteur métier propre à l’interface, ni état de projet dupliqué, ni modèle de décision dupliqué, ni persistance parallèle.

**Résultat de la qualification :** CANDIDAT POUR REVUE CHATGPT / DÉCISION MORRIS.

**Anti-revendications :** ce résultat n’est ni un référentiel UX adopté, ni une conception Figma approuvée, ni un contrat visuel, ni une spécification d’implémentation autorisée pour Delivery, ni une autorisation de remplacer ou retirer l’interface actuelle, ni une M6 Entry Qualification, ni une adoption de runtime v3.

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
- M5-C : **KEEP TEMPORARY WITH EXIT** ; le journal technique de lancement reste distinct du stockage Product Attempt et n’a pas été retiré.
- Trajectoire pré-M6 : décidée par Morris ; la production de ce document candidat de qualification est autorisée par le contrat d’exécution actuel. Son parcours, son IA, le traitement de ses écarts et les dispositions de ses actifs restent en attente de D-PRE-M6-UX-01…05.
- Figma et Pre-M6 UI Delivery : non autorisés.
- M6 : non démarré / non autorisé.
- runtime v3 : non adopté.
- Consommation de Cursor REAL / Gate D dans ce cycle : zéro.

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
| M3 | Examiner une proposition, consigner la décision de Morris, préparer un contrat d’exécution résistant au redémarrage | `Proposal` locale au processus ; `HumanDecision`, `DecisionBasis`, `ExecutionContract` durables ; cas d’utilisation de décision et de préparation/validation/remplacement | Services SQLite de décision/contrat ; Proposal et mémoire de conversation | `ProjectAssistantPanel` ; tests de décision F2 et de préparation F3/M3 | Le contrat M3 durable est délibérément non résolu/uniquement PREPARE (`executionAllowed:false`, cible/capacité/réversibilité non résolues, aucune Attempt) ; AMEND est consigné durablement, mais le câblage de retour à la clarification est incomplet | Présentation + intégration bloquante de résolution/remplacement du contrat |
| M4 | Examiner le contrat, confirmer l’autorité, démarrer une exécution contrôlée et observer le cycle de vie de l’Attempt | Domaine/ports Attempt, `ExecutionContract`, confirmation, octroi Gate D, `AgentCapability` RO limitée ; `StartExecution` est l’unique séquenceur | Journal technique M5-C CREATED/LAUNCHED dans un SQLite distinct, pas dans Product Store ; adaptateur de fixture sans effet ; REAL désactivé par défaut | Préparation/confirmation/exécution de fixture par l’assistant ; tests de gouvernance et d’exécution M4 ; deux Attempts REAL gouvernées historiques, dont une exécution limitée achevée | Le contrat M3 durable peut être préparé, mais seul le chemin d’interface Proposal/fixture PREPARE atteint l’exécution ; la fixture ne peut prouver le chemin produit critique ; aucun futur REAL autorisé | Qualification d’intégration bloquante ; aucun REAL ni implémentation d’exécution ici |
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
| Préparer le contrat | cartes F3 de l’assistant | `projectAssistantPrepareM3Action`, préparation de fixture ; valider/préparer/remplacer | ExecutionContract | chemin M3 durable | tests de préparation/redémarrage | examen lisible, périmé/fermé par défaut | Intégration applicative bloquante : le contrat durable ne peut pas continuer jusqu’au démarrage |
| Confirmer/démarrer | carte d’exécution de l’assistant | `projectAssistantConfirmAndExecuteF3FixtureAction` ; confirmation + StartExecution | contrat de fixture, confirmation, AgentCapability, Attempt | entrée Proposal/fixture locale ; Attempt durable | tranche verticale de fixture et tests de gouvernance M4 | validation d’autorité et cycle de vie distincts | Intégration applicative bloquante ; la fixture n’est pas une preuve produit critique |
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

**Recommendation :** ne pas faire d’une persistance plus large un prérequis à la première preuve d’utilisabilité pré-M6. La preuve doit inclure un scénario de redémarrage/reprise démontrant une gestion honnête de la perte et la récupération du résultat durable. Toute nouvelle sélection de persistance exige une décision Morris distincte.

## 12. Registre des écarts

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
| G-UX-15 APPLICATION WIRING GAP — BLOCKING | Le contrat M3 durable est intentionnellement non exécutable (`UNRESOLVED_TARGET`, capacité/réversibilité non résolues, uniquement PREPARE, aucune Attempt) ; seul le chemin Proposal locale au processus + fixture PREPARE atteint l’exécution de l’assistant/les résultats M5 | **Oui / Oui** | Qualification distincte pour résoudre cible/capacité/réversibilité, créer un contrat exécutable valide ou remplacer le contrat par celui-ci, puis utiliser la confirmation existante + la limite StartExecution/Attempt ; ne jamais exécuter ni modifier le contrat non résolu | **Élevé** ; contourner les arrêts, considérer la fixture comme preuve produit ou créer un séquenceur parallèle violerait la doctrine | Morris / avant UI Delivery |

**ÉCART PRÉ-M6 ENTRE L’EXÉCUTION ET L’APPLICATION — EXIGE UNE QUALIFICATION DISTINCTE AVANT UI DELIVERY.** G-UX-15 bloque une preuve produit M1→M5 du chemin critique. Les capacités de domaine pertinentes existent et sont prouvées séparément ; la classification actuelle est donc APPLICATION WIRING GAP plutôt qu’une demande de nouveau moteur métier. La qualification doit prouver que le contrat M3 durable non résolu est préservé pour audit, que son fondement sert à produire un contrat exécutable résolu ou à le remplacer par celui-ci, et que seul ce contrat valide entre dans la confirmation et la limite StartExecution/Attempt existante. Elle ne doit ni contourner les arrêts fermés par défaut, ni se rabattre sur l’autorité de la fixture, ni dupliquer l’état du cycle de vie, ni consommer Gate D/REAL.

## 13. Résumé de la disposition des actifs existants

Candidat uniquement :

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

Statut : **FIGMA INPUT CANDIDATE** — ni autorisation Figma ni contrat visuel.

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

Après qualification et résolution distinctes de G-UX-15, puis après autorisations séparées de Figma et UI Delivery, un E2E navigateur doit prouver substantiellement :

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

Dépendances avant qu’un référentiel adopté puisse progresser :

- décisions Morris D-PRE-M6-UX-01 à 05 ;
- amendement de ce candidat si demandé ;
- GO distinct pour Figma Visual Contract uniquement après adoption du parcours et de l’IA ;
- validation Figma avant UI Delivery ;
- qualification Delivery distincte préservant les limites OA/applicatives.

## 18. Dossier de décisions Morris

Aucune décision ci-dessous n’est consommée par ce document.

### D-PRE-M6-UX-01 — Candidat de parcours utilisateur canonique M1→M5

Options : **ADOPT / AMEND / REJECT**.

Recommendation : **ADOPT WITH EXPLICIT FIRST-TEST PROCESS-LOCAL LIMITATION**, sous réserve de la critique ChatGPT et de la revue Morris.

### D-PRE-M6-UX-02 — Candidat d’architecture fonctionnelle de l’information

Options : **ADOPT / AMEND / REJECT**.

Recommendation : **ADOPT** le modèle Projets → Projet actuel → historique contextuel, la domination de la Conversation et l’absence de navigation à une page par objet.

### D-PRE-M6-UX-03 — Principe de réutilisation et dispositions des actifs significatifs

Options : **ADOPT / AMEND / REJECT**.

Recommendation : **ADOPT** la réutilisation par comportement/câblage :

- conserver l’exécution OA et le câblage `/studio` ;
- récupérer le comportement d’intention D1, pas son moteur d’état ;
- récupérer sélectivement les composants P0, pas son flux de fixture ni son référentiel visuel ;
- geler les routes historiques OPS1/P0/D1 ;
- n’autoriser aucun retrait avant la preuve de remplacement.

### D-PRE-M6-UX-04 — Écarts d’exécution bloquants

Options : **SELECT TREATMENT / DEFER / REQUALIFY**.

Constat : G-UX-15 est bloquant. Recommendation : **REQUALIFY** l’intégration durable M3 PREPARE → résolution/remplacement du contrat → exécution gouvernée avant UI Delivery. La qualification doit préserver le contrat non résolu, réutiliser ses HumanDecision/DecisionBasis durables, produire un contrat exécutable valide selon les règles existantes du cycle de vie du contrat, puis utiliser la confirmation existante et la limite StartExecution/ExecutionAttempt. Elle doit rester sûre pour la fixture/ZERO REAL et rejeter le contournement du fonctionnement fermé par défaut, les séquenceurs dupliqués ou l’état parallèle.

Séparément :

- recâbler AMEND durable vers la clarification avant le scénario complet d’amendement ;
- accepter Conversation/Proposal locales au processus pour la première preuve uniquement si Morris accepte explicitement cette limite ;
- qualifier une persistance étendue uniquement si elle est requise ultérieurement.

### D-PRE-M6-UX-05 — Futur cycle Figma Visual Contract

Options : **GO / NO-GO**, uniquement après adoption de D-PRE-M6-UX-01 et 02.

Recommendation actuelle : **NO DECISION YET**. Un futur GO pourra être envisagé après adoption/amendement du parcours et de l’IA par ChatGPT et Morris.

## 19. Recommendation, réserves et prochaine validation

### Recommendation

Adopter, avec des amendements si nécessaire, un parcours canonique dominé par la conversation sur la route projet adossée à OA. Préserver l’ossature d’exécution/applicative existante et n’utiliser l’interface actuelle que comme preuve et source sélective de comportement/câblage/composants.

### Réserves

1. La taxonomie et le texte actuels des routes représentent matériellement de façon erronée la réalité de l’exécution.
2. Le câblage de la liste/l’historique des projets exige un futur travail Delivery, mais pas un nouveau modèle de domaine.
3. L’enregistrement durable de AMEND existe, mais le flux de retour à la clarification/requalification est incomplet.
4. La perte de Conversation/Proposal au redémarrage doit être acceptée et testée, ou qualifiée séparément avant Delivery.
5. L’actualité de Recommendation nécessite un traitement explicite dans l’interface/l’application.
6. Le retrait historique reste non approuvé.
7. Le responsable/retrait M5-C reste une dette de gouvernance distincte et hors de ce référentiel.

### Prochaine validation

ChatGPT examine ce candidat complet au regard de l’exécution, de la convergence et de la doctrine v3, puis Morris décide D-PRE-M6-UX-01 à 04. D-PRE-M6-UX-04 doit sélectionner une qualification G-UX-15 distincte avant UI Delivery. Ce n’est qu’après adoption du parcours et de l’IA que Morris pourra décider D-PRE-M6-UX-05 pour un cycle Figma Visual Contract distinct ; Figma peut représenter les états prévus, mais ne doit pas masquer l’écart non résolu de la chaîne produit.

M6 reste **NOT STARTED / NOT AUTHORIZED** pendant toute la durée.

## 20. Sécurité et anti-revendications finales

- Nouveaux documents de projet : un.
- Documents de projet existants modifiés : zéro.
- Code, backend, base de données, schéma, migration et tests modifiés : zéro.
- Interface existante supprimée ou disposition exécutée : zéro.
- Actions/fichiers Figma : zéro.
- UI Delivery : zéro.
- Travail M6 : zéro.
- Cursor REAL, Gate D et nouvel essai : zéro.
- Retrait M5-C : zéro.
- Adoption/promotion globale de runtime v3 : zéro.
- Commit/push/PR/merge/suppression de branche du projet : zéro.

**CANDIDATE ne signifie pas VALIDATED, ADOPTED, READY FOR DELIVERY, FIGMA APPROVED, M6 READY ni runtime v3 ADOPTED.**
