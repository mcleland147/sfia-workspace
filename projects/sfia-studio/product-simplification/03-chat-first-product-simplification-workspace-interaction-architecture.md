# SFIA Studio — Chat-First Product Simplification — P3 Workspace / Interaction Architecture

| Métadonnée | Valeur |
| --- | --- |
| **Projet** | SFIA Studio |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | **P3 — WORKSPACE / INTERACTION ARCHITECTURE** |
| **Cycle projet** | **13 — PR Readiness / Git Integration** (contrat UX/UI P3 = Cycle **4** historique) |
| **Pass** | **FINAL GIT INTEGRATION PRE-MERGE** |
| **Type SFIA / guidance** | UX/UI · Interaction Architecture · `cyc:ux-ui` / `ckc:studio:ux-ui` · `cyc:pr-readiness` |
| **Profil** | **CRITICAL** |
| **Typologie** | **DOC** dans macro **EVOL** |
| **Base Git** | `origin/main` @ `e99d9ad5cc7011e414b00006e88ac33e11b5ce87` (PR **#549** merge P2 · PR **#548** C1) |
| **Branche locale** | `docs/sfia-studio-chat-first-product-simplification-p3-workspace-interaction-architecture` |
| **Worktree** | `/Users/morris/Projects/sfia-studio-chat-first-product-simplification-p3` |
| **Statut P3** | **VALIDATED BY MORRIS** (2026-10-04) · **LOCAL / BRANCH CANDIDATE** · **NOT INTEGRATED ON MAIN** |
| **P2** | **VALIDATED BY MORRIS + INTEGRATED ON MAIN + POST-MERGE VERIFIED + CLOSED** |
| **P3 Design Contract Opening** | **STABILIZED** |
| **North Star** | **Morris Structural Decision — P3 North Star — AMEND & ADOPT** (2026-10-04) · **CONSUMED** |
| **Figma** | **REQUIRED DESIGN SURFACE** · fileKey `m4g8j0gNbEzfIuH6S9AZJF` · **READ ONLY** ce pass (aucune mutation) |
| **Figma Self-Review** | `205:2` · **PASS WITH TARGETED CORRECTIONS COMPLETE** |
| **runtime v3** | **NON ADOPTED** |
| **READY FOR REAL** | **NO** |
| **P4→P8** | **NOT AUTHORIZED** |
| **Git integration P3** | **AUTHORIZED FOR COMMIT / PUSH / PR** · **MERGE = DISTINCT MORRIS GATE** · **≠ INTEGRATED** |
| **Langue** | Français (identifiants Product canoniques préservés) |
| **Fichier** | `projects/sfia-studio/product-simplification/03-chat-first-product-simplification-workspace-interaction-architecture.md` |
| **Date** | 2026-10-04 · Europe/Paris |

> **Lecture rapide.** P3 = **HOW THIS PRODUCT IS EXPERIENCED** (+ contrat de fidélité Figma→runtime). P2 = **HOW STUDIO FUNCTIONS**. **P3 GLOBAL VALIDATED BY MORRIS = YES** (2026-10-04) · **P3 INTEGRATED = NO** · **P4 AUTHORIZED = NO**. Ce pass = **FINAL GIT INTEGRATION PRE-MERGE** (commit / push / PR). **Aucune** mutation Figma · **aucun** code · **aucune** architecture P4 · **aucun merge**. Pixel-perfect = **requirement futur**, pas preuve runtime.

---

## 1. Statut / autorité / anti-claims

### 1.1 Trajectoire

```text
C1 = VALIDATED / INTEGRATED / CLOSED          (PR #548 · 642a10c8…)
P2 = VALIDATED / INTEGRATED / CLOSED          (PR #549 · e99d9ad5…)
P3 = VALIDATED BY MORRIS (2026-10-04)
P3 INTEGRATED ON MAIN = NO
P3 CLOSED = NO
P3 Design Contract Opening = STABILIZED
ChatGPT Opening Closure Review = PASS
FCR-P3-OPEN-01 / FCR-P3-OPEN-02 = CLOSED
Morris Structural Decision — P3 North Star — AMEND & ADOPT = CONSUMED
Design work (Figma) = MATERIALLY COMPLETE AS DESIGN EVIDENCE
P3 Design Self-Review = PASS WITH TARGETED CORRECTIONS COMPLETE
Morris visual pass = coherent / accepted as consolidation entry
Final Documentary Consolidation = COMPLETE AS LOCAL CANDIDATE
ChatGPT Final Critical Review P3 #1 = NOT READY — TARGETED CORRECTION REQUIRED [historical]
FCR-P3-01 / 02 / 03 / 04 = CLOSED
ChatGPT Closure Review P3 = PASS — READY FOR MORRIS P3 GLOBAL VALIDATION GATE
Morris 2026-10-04 = P3 GLOBAL VALIDATION APPROVED / CONSUMED
This pass = FINAL GIT INTEGRATION PRE-MERGE
Git integration = AUTHORIZED FOR COMMIT / PUSH / PR
Merge = NOT AUTHORIZED (DISTINCT MORRIS GATE)
P4→P8 = NOT AUTHORIZED
```

### 1.2 Autorité par domaine (FCR-P3-01)

> **Dépréciation.** L’ancienne hiérarchie globale « Décisions Morris > P2 > C1 > doctrine > repo > Figma > CKC > hypotheses » est **retirée**. Elle créait une fausse précédence entre domaines d’autorité distincts. Alignement avec P2 §2.1 : **aucun rang de précédence global** entre domaines.

| Domaine | Autorité | Rôle |
| --- | --- | --- |
| **Construction / gouvernance Studio** | Décisions Morris explicites · Build Doctrine · Convergence Roadmap | Gates, trajectoire de construction, promotions, doctrine de build |
| **Autorité runtime Project** | HumanDecision du Pilote (modèle de domaine adopté) | Décisions structurantes Project au runtime |
| **Vérité CURRENT technique / capacités présentes** | **Git courant** · runtime evidence **qualifiée** | Ce qui existe et fonctionne **réellement** |
| **Destination produit Studio** | Doctrine v3 applicable (30–37 · CC-D01 Option A) | CE QUE Studio doit devenir |
| **Cadrage Product Completion** | C1 validé | Cible / scope / trajectoire macro |
| **Functional Operating Model** | P2 validé / intégré | HOW STUDIO FUNCTIONS |
| **Contrat expérience P3** | P3 documentaire · Figma (statut frame-by-frame) · décisions Morris P3 | HOW THE PRODUCT IS EXPERIENCED (+ fidélité visuelle) |
| **Guidance UX/UI** | CKC UX/UI | Guidance uniquement · **authority NONE** |
| **Hypothèses / explorations** | **Aucune** | Candidates / working material uniquement |

#### CURRENT vs TARGET RULE

- **Git / runtime evidence** prime pour les claims **CURRENT**.
- Doctrine / C1 / P2 / P3 définissent des contrats **TARGET** selon leur domaine.
- Aucun document TARGET ne prouve qu’une capacité runtime **existe déjà**.
- Aucun code CURRENT n’annule silencieusement une décision produit cible.
- Un conflit CURRENT ↔ TARGET = **gap de convergence**, pas une hiérarchie implicite.
- **Git reste** la source de vérité **repository**.

P2 documentaire sur main peut encore porter « P3 NOT AUTHORIZED » comme **vérité historique**. **Ne pas réécrire P2.** La vérité courante de trajectoire = ce document + Roadmap living tip (**domaine construction**).

### 1.3 Anti-claims d’entrée

| Claim | Statut |
| --- | --- |
| P3 GLOBAL VALIDATED BY MORRIS | **YES** (2026-10-04) |
| P3 INTEGRATED ON MAIN | **NO** |
| P3 CLOSED | **NO** |
| MERGE AUTHORIZED | **NO** |
| Figma entièrement VALIDATED (labels Figma) | **NO** (mix VALIDATED / EXPLORATORY) |
| Screen 01 / Workspace frames EXPLORATORY = screens invalid | **NON** — EXPLORATORY ≠ rejet |
| Canonical Implementation Frames = références contractuelles P3 | **YES** — même si suffixe Figma historique EXPLORATORY |
| Visual system tokens / Geist / cobalt / violet adopted as final | **NO** |
| P4 AUTHORIZED | **NO** |
| READY FOR REAL | **NO** |
| runtime v3 ADOPTED | **NO** |
| Figma-to-runtime aligned / pixel-perfect runtime proven | **NO** |
| GitHub Auth REAL proven | **NO** |
| Nora streaming REAL proven | **NO** |
| Design Self-Review PASS = P3 VALIDATED | **NO** (validation Morris distincte consommée ci-dessus) |
| FCR-P3-01…04 CLOSED | **YES** |

---

## 2. Mission P3

Transformer **HOW STUDIO FUNCTIONS** (P2) en **HOW THE PILOT INTERACTS WITH STUDIO**.

Permettre au Pilote d’utiliser SFIA Studio comme environnement de travail **conversation-led / chat-first** capable de :

- commencer par une intention naturelle ;
- créer et reprendre un Project ;
- travailler principalement avec Nora ;
- comprendre l’état du Project (minimum autoritatif compact) ;
- voir la trajectoire passée / actuelle / proposée ;
- inspecter les sujets de continuité ;
- distinguer recommandations, réserves, décisions ;
- décider lorsqu’un jugement structurel est nécessaire ;
- inspecter puis confirmer une action lorsque ses effets l’exigent ;
- suivre une Exécution **sans** la confondre avec la progression de Cycle ;
- consulter le Résultat et, contextuellement, les Preuves ;
- lire une Synthèse post-exécution complète ;
- retrouver l’Historique ;
- reprendre après interruption ;
- conserver l’autorité du Pilote **sans** internals SFIA ;
- vivre une expérience premium, calme, lisible, chaude, adulte ;
- adapter le **même** produit du desktop au mobile **sans** seconde sémantique métier.

P3 **ne sélectionne pas** : service architecture, DB, persistence, schema, API, store, state-machine technique, routes React, framework, streaming implementation, search engine, indexing, component state management, production model routing.

---

## 3. Décisions héritées / consommées

### 3.1 Morris P3 Entry Directives (démarrage)

Figma obligatoire · réutiliser le fichier pré-cycle · UX PREMIUM near-final · revue écran par écran · chat-first structurant · motion si valeur · temps suffisant · opérateur Figma **assigné au fil des passes** (ChatGPT via Figma MCP pour le travail de conception ; ce pass documentaire = Cursor).

### 3.2a Morris — P3 GLOBAL VALIDATION (2026-10-04)

**APPROVED / CONSUMED.**

**P3 GLOBAL VALIDATED BY MORRIS = YES.**

Cette validation couvre le contrat P3 dans son ensemble :

IA globale · Chat-first · surfaces · Journal · Historique · Synthèses · Exécution · Decision / Confirmation · Trajectoire · Auth · Nora Motion contract · branding · francisation · états transverses · responsive · P3→P4 Input Contract · Figma→Runtime Pixel-Perfect Fidelity Contract.

Elle **n’autorise pas** : P3 INTEGRATED · P3 CLOSED · merge · P4 · code · runtime v3 ADOPTED · READY FOR REAL · pixel-perfect runtime proven · Figma/runtime alignment proven.

Elle **autorise** : statut documentaire VALIDATED · Roadmap · commit / push / PR (ce pass). **Merge = gate Morris distinct.**

### 3.2 Morris Structural Decision — P3 North Star — AMEND & ADOPT

**ADOPTED / CONSUMED** · 2026-10-04 · **sans ID P3-D-\*** inventé.

13 points structurants (inchangés) : conversation-led · Chat-first ≠ Chat-only · Workspace conversation-dominant · minimum Project context · progressive disclosure · global vs Project conversation · HD/Confirmation governed distincts · Evidence contextual/direct · nav globale MINIMALE · representative journey ≠ workflow · direction PREMIUM/CALM/INTELLIGENT · motion meaningful + reduced-motion · Screen 01 exploratory input · ordre de conception Workspace-first.

**Amendements d’expérience ultérieurs** (consommés pendant le design loop, **sans** rouvrir la North Star) : rail minimal + Meridian ; nav projet Conversation / Aperçu / Exécution ; continuité Journal / Historique / Synthèses ; Preuves hors nav principale ; francisation ; GitHub-only Auth ; états transverses ; responsive 3 bandes. Détail = §§9–33 et registre §41.

### 3.3 P2-D / CC-D (non réouverts)

| ID | Usage P3 |
| --- | --- |
| **P2-D-01** | Recommendation ≠ HumanDecision · phrase utilisateur ≠ HD auto |
| **P2-D-02** | Execution SUCCESS ≠ Cycle COMPLETE · Artifact ≠ Exit Proof |
| **P2-D-03** | Confirmation ≠ HD · porte sur l’effet inspecté · pas gratuite |
| **P2-D-04** | Cycle close ≠ next activation · Project Abandon = HD |
| **CC-D01 Option A** | Conversation avant cockpit · framing 11 HARVEST only |
| **CC-D03** | Panneau vivant / contexte on-demand |
| **CC-D05 / CC-D06** | Décisions / Confirmations N1–N3 visibles et distinctes |
| **CC-D12** | Pas d’admin CKC en flux nominal |
| **CC-D13** | Project ≠ Cycle |

### 3.4 CKC UX/UI

| Champ | Valeur |
| --- | --- |
| Path | `projects/sfia-studio/sfia-v3-framing/ckc/04-ux-ui.md` |
| ckcId | `ckc:studio:ux-ui` |
| contentStatus | VALIDATED |
| validationStatus | CONTENT VALIDATED BY MORRIS |
| **Authority d’exécution P3** | **NONE** — guidance cognitive expérimentale |
| Fallback | routing v2.6 + C1/P2 + décisions Morris P3 |

---

## 4. Invariants C1/P2 consommés (ne pas casser)

1. Chat-first ≠ Chat-only.
2. Conversation / Nora = canal d’interaction primaire.
3. Surfaces structurées **complètent** la conversation · **≠** cockpit méthodologique.
4. Cycle Journal / Memory = projection dérivée · **≠** Product SoT.
5. Recommendation ≠ HumanDecision.
6. Une phrase utilisateur ≠ HumanDecision automatique.
7. Pilote = autorité HumanDecision runtime.
8. Nora = UNDERSTAND / REASON / CHALLENGE / RECOMMEND.
9. Studio = RESOLVE / VALIDATE / MATERIALIZE / ENFORCE.
10. Même monde sémantique · rôles distincts.
11. Conversation ≠ mutation Product automatique.
12. Cycle lifecycle ≠ Execution lifecycle.
13. ExecutionContract / Execution = branche optionnelle · 0 / 1 / N.
14. Execution SUCCESS ≠ Cycle COMPLETE.
15. Artifact exists ≠ Exit Proof satisfied.
16. Result ≠ Evidence.
17. Journal ≠ Historique.
18. Historique ≠ current Project truth.
19. Synthèse post-exécution ≠ ReviewBundle brut.
20. Cycle close ≠ activation automatique du suivant.
21. Trajectoire future proposée ≠ décision autoritative.
22. Stale projection ≠ effet autoritatif.
23. Le Pilote ne gère pas CKC / taxonomies / DecisionBasis / authority envelope en flux nominal.
24. Pas de SharedKnowledgeStore supposé.
25. Pas de nouveau moteur parallèle pour servir l’UI.

---

## 5. North Star produit P3

### 5.1 Direction

SFIA Studio tend vers une qualité **Linear-like** comme **benchmark de maturité** :

- clarté du shell ;
- densité maîtrisée ;
- hiérarchie ;
- sentiment de maîtrise ;
- objets structurés tangibles ;
- cohérence cross-screen.

**PAS** : copier Linear · simuler des capacités absentes · feature parity · clone.

Compromis Morris : **CURRENT CAPABILITY + ce qu’il est raisonnable de designer maintenant + trajectoire future = expérience P3.**

Studio reste : Studio / pilotage / gouvernance · conversation-led · Nora-centric **sans** Nora autoritaire · contrôlé par le Pilote · objets SFIA · matière projet **sans** internals.

### 5.2 Direction visuelle

Premium · adulte · sobre · calme · chaleureuse · intelligente · plus dense que la première exploration trop blanche · couleurs plus chaudes · accents vivants **sans** dénaturer la sobriété · respiration · information avant décoration.

Ni vide · ni dashboard surchargé · ni « SaaS enfantin » · ni copie de l’ancienne application.

Tokens Figma / Geist / cobalt / violet / Button / Status Chip / Project Card / rail sombre / hero Screen 01 = **HARVEST / REQUALIFY** ou **EXPLORATORY** · **≠** système visuel final adopted.

---

## 6. Audit UX repo (HEAD `e99d9ad5`) — READ ONLY

Classification = disposition P3 · **aucun RETIRE exécuté**.

| Gen | Paths | Classification |
| --- | --- | --- |
| A Legacy StudioShell | `/synthese` `/cycle-actif` `/decision` | HARVEST / FREEZE / **RETIRE LATER** |
| B D1 | `/workspace` `/projects/*` | ADAPT |
| C Pre-M6 Product UI | `/studio` `/studio/projects/*` | **KEEP + REDESIGN** (plus proche P2) |
| D studio-projects / project-assistant | features | HARVEST / ADAPT |
| E vertical-slice / ops1 | `/ops1/*` | FREEZE / RETIRE LATER |
| F Auth | `/login` | KEEP fonctionnel + visual IN SCOPE P3 |

Règle retained (FCR-P3-OPEN-02 **CLOSED**) : toute surface utilisateur conservée est mappée à une famille P3 **ou** exclue justifiée. Auth/Login = famille P3 visuelle. Legacy POC = RETIRE LATER + dette visuelle transitoire.

Penpot = **HARVEST only** · **≠** design source courante.

---

## 7. Principes d’expérience

| Principe | Contrat |
| --- | --- |
| Conversation-led | Canal primaire |
| Densité utile | Contrôle sans cockpit |
| Progressive disclosure | Contexte on demand · minimum autoritatif toujours perceptible dans un Project |
| Authority visible | Rec / décision / confirmation **distincts visuellement** · wording métier |
| Honesty of states | Empty / stale / blocked / failed / stopped **honnêtes** |
| Currentness | Stale ≠ current · refresh avant effet autoritatif |
| Representative journey | ≠ workflow linéaire · 0/1/N HD, Confirmation, Execution |
| Vocabulaire | Fonctionnel FR · internals masqués · distinctions sémantiques **conservées dans le domaine** |
| Motion | Continuity / focus / hierarchy / currentness / reveal / state-change · reduced-motion REQUIRED |
| Responsive | Même sémantique · 3 bandes design · **≠** breakpoints CSS finaux |

---

## 8. Politique de langue / wording

**UI principalement en français**, fonctionnel, non technique.

Conserver en anglais : noms propres · noms de projets · marques · termes usuels naturels (Product Simplification, Nora Completion, Runtime v3, GitHub, Linear, UX/UI).

| Interne (domaine) | Visible Pilote |
| --- | --- |
| HumanDecision | décision / choix à faire |
| ExecutionContract | action préparée / action à examiner / portée |
| Overview | **Aperçu** (canonical) |
| Workspace (label UI) | **Espace projet** |
| Evidence | Preuves **uniquement** si pertinent pour vérifier un résultat |

**Interdit en UI nominale :** HumanDecision · DecisionBasis · ExecutionContract · execution authority · authority envelope · Truth C · ReviewBundle · codes d’état internes · jargon CKC · doctrines « ce que l’utilisateur sait déjà » · STATUS / AUTHORITY / CRITICAL / Governed / Fresh / KEY OBJECTS · « Proposé par Nora, révisable… » · « Vous pouvez arrêter… » · « activité utile sans exposer… » · Overview / Vue d’ensemble comme label · Partager · Workspace (mot anglais) comme label visible.

**Partager :** RETIRÉ · fonctionnalité inexistante · pas de CTA non supporté.

**⌘K / Activité globaux :** retirés (Self-Review) — pas de comportement produit défini.

Recherche **locale** (Projets / Historique / Synthèses) = valide.

---

## 9. Information architecture globale

```text
[Rail gauche — project switcher minimal — persistant Large/Compact]
    SFIA Studio (marque)
    Projets
    Projets récents
    (respiration + signature Meridian)
    Profil utilisateur

Dans un Project :
  Navigation principale
    Conversation
    Aperçu
    Exécution
  Continuité / lecture (contextuelle)
    Journal du cycle
    Historique
    Synthèses
  Preuves = support contextuel
    depuis Exécution / Synthèse
    PAS une destination principale de nav
```

Rail **≠** catalogue de fonctionnalités. Retirés : Search global · Activity global · Documentation · Settings de remplissage.

Hors Project (Projets / Nouveau projet) : Nora = orientation / reprise / routing / création / clarification · **sans** simuler un Project actif.

---

## 10. Rail / branding Meridian

Morris a fourni le logo Meridian comme **direction de branding**.

Usage P3 dans le rail :

- emblème (lion + compas) ;
- **pas** le wordmark « MERIDIAN » ;
- signature graphique décorative ;
- fortement agrandi · recadré · partiellement hors champ · faible opacité · derrière la navigation ;
- ne concurrence jamais les fonctions.

Référence desktop (principe > nombres) : ~192 × 390 px · y ~250 · opacité ~9,5 %. Confirmé MCP sur `179:2` / `179:4` / `179:6` dans les rails `63:39` / `46:2` / `94:2`. Compact : motif adapté au rail réduit.

**≠** décision de renommage du produit « SFIA Studio ».

---

## 11. Navigation projet

| Vue | Rôle | Relation |
| --- | --- | --- |
| **Conversation** | Travail principal | Canal primaire |
| **Aperçu** | Compréhension rapide du Project | ≠ cockpit parallèle |
| **Exécution** | Lifecycle d’action optionnelle | ≠ Cycle lifecycle |
| **Journal du cycle** | Continuité courante dérivée | ≠ SoT |
| **Historique** | Passé / événements | ≠ current truth |
| **Synthèses** | Lecture consolidée post-travail | ≠ ReviewBundle brut |

Les routes techniques P4 **ne deviennent pas** taxonomie métier autoritative.

---

## 12. Surface 01 — Projets

| Champ | Contrat |
| --- | --- |
| Rôle | Entrée / reprise des Projects |
| Jobs | Reprendre · voir attention · récents · ouvrir · créer · demander à Nora de s’orienter |
| Contenu possible | À reprendre · dernière activité · état · attention · **recherche locale** |
| N’est PAS | Dashboard de méthode · catalogue SFIA · admin technique |
| État transverse | **PROJETS VIDES** (`184:2` VALIDATED) |
| Frame | `63:39` Projects · DP03 v1 · BENCHMARK-ALIGNED · **EXPLORATORY** · 1440×1024 |
| Revue Morris | Direction / cohérence visuelle acceptée comme travail P3 · frame reste EXPLORATORY · **≠ Screen 01 VALIDATED as P3 global** |

MCP (READ ONLY) : page `2:6` « 05 — Screen 01 · Projects » · rail 192 px · hero + Nora orientation + cartes À reprendre + table Tous les projets + recherche locale.

---

## 13. Surface 02 — Nouveau projet

**Création conversationnelle.** Pas de grand formulaire.

Avant matérialisation durable :

- discussion avec Nora ;
- clarification d’intention ;
- objectif / contexte / description progressivement compris ;
- clarifications **minimum-sufficient** ;
- aperçu du projet compris par Nora possible.

Le Pilote peut rester dans cette conversation **le temps nécessaire**.

| CTA | Règle |
| --- | --- |
| **Créer le projet** | Unique CTA principal |
| Continuer sans créer | **REJETÉ** |
| Bouton « passer à Nora » | **REJETÉ** |

Créer le projet **implique** que le travail continue avec Nora. Texte explicatif seulement si clarté réelle — pas d’évidence redondante.

Après création : Project durable · conversation continue · Nora poursuit la qualification du premier travail / premier Cycle **si nécessaire**.

**P2 :** ProjectTrajectory complète **non obligatoire** à Create.

**Prudence simultanéité Create Project / first Cycle :** documenter l’expérience · **P4** représente la technique · **ne pas inventer** une transaction commune.

Frame : `67:39` New Project · DP04 v1 · CHAT-FIRST · **EXPLORATORY** · 1440×1024.

---

## 14. Surface 03 — Espace projet / Conversation

Canonical UI : **Espace projet** / **Conversation**.

Desktop : conversation dominante (`~868` px observé sur `46:2`) + contexte compact (`~356` px) « Ce qui compte maintenant ».

Contexte peut montrer : cycle courant · priorité · currentness · trajectoire · attention · dernière synthèse.

**Ne pas exposer :** règles internes de décision · authority internals · doctrines · codes machine · technique inutile.

Objets conversationnels tangibles (métier) : recommandation · choix à faire · action préparée · résultat / synthèse disponible. **Les cartes ne remplacent pas la conversation.**

Minimum autoritatif perceptible : quel Project · objectif/intention courte · Cycle/état pertinent · signal currentness / réserve / blocage.

Frame : `46:2` Project Workspace · DP01 v3 · BENCHMARK-ALIGNED · **EXPLORATORY** · 1440×1024. MCP confirmé.

Composer : avant envoi `↑` · Nora travaille `■` (arrêt) · après `↑`. Voir §28.

---

## 15. Surface 04 — Aperçu

Aperçu = compréhension rapide du Project. **≠ cockpit parallèle.**

Doit permettre : où en est le projet · priorité · cycle courant · décisions / points d’attention · trajectoire · activité récente significative · synthèses disponibles · prochaine étape importante.

Orientation principale côté Pilote : **Synthèses** (pas Preuves comme compteur/raccourci dominant).

Frame : `51:2` Project Overview · DP01 v1 · BENCHMARK-ALIGNED · **EXPLORATORY** · 1440×1024. Label UI = **Aperçu**.

Ne pas réintroduire : STATUS · AUTHORITY · CRITICAL · Governed · Fresh · KEY OBJECTS · Recommendations/Decisions/Reservations comme jargon de construction · validations Morris · Workbench · North Star · After P3.

---

## 16. ProjectTrajectory — contrat UX

| Temps | Ancrage | Affichage |
| --- | --- | --- |
| Passé | vérité Project décidée / validée | **Terminé** |
| Présent | vérité Project | **En cours** |
| Futur | recommandation actuelle de Nora | **Proposé** |

« Proposé » : **n’exige pas** de HumanDecision pour s’afficher · projection/recommandation · évolue avec le contexte · **≠** prochain Cycle actif automatique · **≠** certitude.

Recommandation future = **minimum-sufficient**. Pas dix cycles artificiels. C1→P2→P3→P4 = **exemple représentatif**, pas une règle à 4 étapes.

Le mot **Proposé** suffit. Pas d’explication « Proposé par Nora, révisable… ».

Cycle Close ≠ activation automatique du suivant (**P2-D-04**).

Aperçu : description très courte par étape (quelques mots) pour lisibilité.

---

## 17. Governed Moment — Décision

Lorsqu’un jugement structurel du Pilote est **réellement** nécessaire : matérialisation **inline** dans la conversation.

Nora expose / challenge / recommande / peut proposer des options. Pilote décide. Studio matérialise **si** conditions satisfaites.

Le Pilote peut continuer à discuter **avant** de décider.

Wording : **À vous de décider** (ou équivalent). Pas HumanDecision / DecisionBasis / Authority.

Une recommandation affichée **≠** décision.

Frame : `59:2` Governed Moment · Inline Decision · DP02 v2 · **EXPLORATORY**.

---

## 18. Governed Moment — Confirmation

**Décision ≠ Confirmation.** Confirmation **conditionnelle** (P2-D-03) : uniquement si les effets de l’action l’exigent.

Ordre conceptuel : action/contrat préparé → portée inspectable → effets compréhensibles → confirmation **si requise** → puis action autorisée/exécutée.

**Aucune Confirmation gratuite avant inspection.**

La vue explique fonctionnellement : ce qui va changer · portée · impact · protection / éléments protégés · réversibilité.

Exemple Self-Review : « Aucun élément protégé concerné · action réversible. » (pas « chemin protégé » technique).

CTA possible : **Confirmer et lancer**. Le Pilote peut **revenir au projet**.

Frame : `61:2` Governed Moment · Confirm Action · DP02 v3 · **EXPLORATORY**.

---

## 19. Journal du cycle

Journal = **continuité courante** · projection dérivée (Pilote / Nora / Studio) · **≠** SoT · **≠** second cockpit · **≠** dump transcript.

Onglets : **Sujets** (pluriel) · **Réserves** · **Recommandations** · **Décisions**. Pas « Sujets en cours » comme catégorie principale.

Un Sujet a un état propre (ex. actif / en cours / archivé / terminé selon sémantique retenue) et présente : identifiant/ordre · titre · synthèse courte · statut · nb échanges · points stabilisés · points ouverts · éléments liés.

Sélection → détail : description · points stabilisés · points ouverts · liés · échanges liés.

**Points stabilisés** = faits/orientations stables **dans la projection Journal**. **Points ouverts** = à clarifier / décider / traiter. **Dérivés** · ne remplacent pas les objets Product autoritatifs.

Règles visuelles validées : pas d’encadré doctrinal scinder/fusionner · pas d’explication « mémoire opérationnelle… » redondante · Recommandations sur une ligne · compteurs compactes · onglet actif mis en avant, autres uniformes · descriptif lisible entièrement ou non affiché · métadonnées de carte suivent la hauteur du descriptif · cartes adaptatives · aucun chevauchement.

Frames : `94:2` Cycle Journal · DP01 v2.2 · **VALIDATED** · 1440×1024 (MCP confirmé) · `94:222` EXCHANGES-EXPANDED · **VALIDATED**.

---

## 20. Sujets / continuité / échanges liés

Vue compacte : quelques échanges significatifs. CTA **Voir les N échanges**. Expansion **dans** le Journal. Variante 14 échanges dessinée et validée.

Chaque échange : auteur · contenu utile · **date** (jour/mois, ex. 04/10) **et** heure (le sujet peut vivre plusieurs jours).

Développé : zone scrollable contenue · CTA pas poussés hors écran · **Réduire les échanges** · **Voir dans la conversation**. Espace conservé sous ces CTA.

---

## 21. Surface 05 — Historique

Surface autonome : revoir ce qui s’est passé dans le Project (décisions · changements · événements · vérifications · contexte lié).

Desktop : liste/timeline gauche · détail droite.

Le Pilote : comprendre l’événement · éléments liés · demander à Nora d’expliquer · comparer des moments · retrouver ce qui a conduit à une décision.

**≠** « Historique & Preuves ». Recherche locale autorisée.

Frame : `78:2` Historique · DP05 v2 · CONTEXTUAL · **VALIDATED**.

---

## 22–24. Exécution

Cycle lifecycle ≠ Execution lifecycle. Execution = branche optionnelle 0/1/N.

### États Pilote

**Avant / pendant (pas encore de résultat final) :** À confirmer · Prête à exécuter · En cours.

**Après :** Terminée · Échouée · Arrêtée.

**REJETÉ :** « Vérification en cours » comme état intermédiaire. **REJETÉ :** Timeout comme statut principal. Timeout = **cause** possible d’**Échouée**.

### Vue avant

Inspecter : Action · État · Portée · **Impact prévu** (pas « Effet · écriture locale ») · Réversibilité · Ce qui va être fait · point d’attention éventuel.

Portée **dynamique** (fichiers / tests / QA / code / autre) — **pas** réduite à « fichiers ».

« Ce qui va être fait » dynamique (3, 8, 9+). Si beaucoup : progressive disclosure « Voir les N éléments » + variante expanded.

CTA : À confirmer → confirmation · Prête à exécuter → **Exécuter** · En cours → **pas** Exécuter · progression **par éléments** · **pas** de faux % · Arrêter **uniquement si permis**.

### Vue après

Bloc **Résultat** lorsque le résultat existe · indicateurs **pertinents seulement**. « Ce qui a été fait » dynamique + disclosure. Langage fonctionnel.

Preuves = section **contextuelle**. CTA final **Revenir à la conversation**. **REJETÉ :** section « Suite » + texte expliquant le bouton.

### Invariants

Execution terminée ≠ Cycle terminé · SUCCESS ≠ Exit Proof · Artifact ≠ Deliverable validé · Preuves disponibles ≠ vérifiées · Résultat ≠ Preuves · Execution ≠ workflow obligatoire de chaque Cycle.

Frames : `150:295` / `150:532` BEFORE READY (+ 9-éléments) **VALIDATED** · `147:2` / `150:29` AFTER TERMINÉE (+ 9-éléments) **VALIDATED**.

---

## 25. Result vs Evidence

**Result** = ce qui s’est réellement passé / résultat observable.

**Preuves** = éléments pour soutenir / inspecter / vérifier ce résultat.

« Disponible » = consultable · **≠** « vérifiée ».

Preuves **hors nav principale**. Disponibles depuis **Exécution** et **Synthèse**. Graph décoratif Evidence **retiré**.

P3 **ne sélectionne pas** storage Evidence / schema.

---

## 26. Surface 07 — Synthèses

Troisième destination de continuité (remplace Preuves en nav).

Restitution Pilote post-travail significatif (surtout post-exécution) : résultat · preuves · vérification Studio · analyse Nora/Studio · ReviewBundle **interne**. **Ne pas exposer le ReviewBundle brut.**

Pattern : liste + Synthèse sélectionnée. Une Synthèse **peut scroller**. Scroll vertical naturel OK.

**Sections toujours présentes :**

1. Résumé
2. Ce qui était prévu
3. Ce qui a été réalisé
4. Évaluation du résultat
5. Écarts, réserves et blocages — même si vide : « Aucun écart, réserve ou blocage identifié. »
6. Impact sur le projet
7. **Verdict** (avant recommandation)
8. Recommandation / prochaine étape
9. Éléments vérifiés (support secondaire en bas)

Frame : `164:3` Synthèses · DP10 v1 · POST-EXECUTION · **VALIDATED**.

### Conversation après analyse

Nora **ne déverse pas** la Synthèse complète dans le chat : résumé court · factuel · verdict/utile · CTA **Voir la synthèse complète →**. Complet = surface dédiée.

---

## 27. Recherche Synthèses

**Décision Morris : full-content search.** Pas titres seuls.

Portée : titre · résumé · prévu · réalisé · évaluation · écarts/réserves/blocages · impact · verdict · recommandation · éléments vérifiés · contenu textuel pertinent.

Objectif : retrouver un ancien développement / arbitrage / terme.

Sémantique P3 = full-content. **Indexation = P4.** Jump/highlight souhaitable · mécanique **non** sélectionnée ici.

Recherche locale Projets / Historique reste distincte. **Pas** de Search global fictif.

---

## 28. Nora activité / motion

Le Pilote doit voir **qu’une action est en cours** et **ce que Nora fait** à un niveau observable **honnête**.

**Ne pas exposer :** chain of thought · raisonnement privé · scratchpad · étapes cognitives internes.

```text
START → ACTIVITY → STREAMING → COMPLETE
interruption volontaire → STOPPED
```

Composer : `↑` / `■` / `↑`. Le carré = arrêt. **REJETÉ** les textes « Vous voyez l’activité… » / « Vous pouvez arrêter… ».

Activity depuis activités observables réelles. Fallback : **Nora travaille…**. No fake %.

Reduced motion **REQUIRED**. **Aucune** stack animation/front sélectionnée.

Frames motion : `125:2` START · `119:4` ACTIVITY · `125:183` STREAMING · `125:365` COMPLETE · `125:535` STOPPED · tous **EXPLORATORY** · contrat `125:712` Motion Contract · Nora response · DP06 v1.

---

## 29. Auth / Login

Direction : **GitHub-only**. CTA **Continuer avec GitHub**. Vrai logo GitHub (pas « GH »). Wording FR fonctionnel. Pas d’OAuth internals / codes techniques si un message fonctionnel suffit.

Frame main : `130:3` Auth / Login · DP07 v1 · GITHUB-ONLY · **VALIDATED**.

Variantes page 13 — **conserver EXPLORATORY** : `133:2` CONNECTING · `133:30` ACCESS-DENIED · `133:58` RECONNECT · `133:86` RETURN-TO-STUDIO. **Ne pas promouvoir** silencieusement.

GitHub-only design **≠** Auth REAL proven.

---

## 30. États transverses — VALIDATED BY MORRIS

Revue Morris. Frames DP12 v1 :

| Node | Nom | Sémantique |
| --- | --- | --- |
| `184:2` | PROJETS VIDES | Créer le premier projet (MCP confirmé 1440×1024) |
| `184:167` | HISTORIQUE VIDE | Aucun événement encore |
| `184:355` | SYNTHÈSES VIDES | Aucune Synthèse significative |
| `184:509` | CONTEXTE À ACTUALISER | Project visible · poursuite bloquée jusqu’au refresh · pas de stale-as-current |
| `184:698` | CONVERSATION INDISPONIBLE | Project chargé · canal concerné indisponible · CTA Réessayer |
| `184:886` | EXÉCUTION EN COURS | Pas de résultat prématuré · terminé/en cours/à venir · pas de faux % · arrêt si permis |
| `184:1065` | EXÉCUTION ÉCHOUÉE | Statut Échouée · cause en détail · timeout = cause |
| `184:1270` | EXÉCUTION ARRÊTÉE | Arrêt volontaire ≠ échec |
| `184:1475` | NORA RÉPONSE INTERROMPUE | Message simple · Réessayer · composer normal |

---

## 31. Responsive — VALIDATED BY MORRIS

Contrat de **projection**. **Pas** une seconde UX métier. Seuils = **bandes P3** · **≠** breakpoints CSS finaux (P4/P5).

| Bande | Largeur design | Contrat |
| --- | --- | --- |
| **LARGE** | ≥ 1200 px | rail 192 · contexte persistant utile · master/detail côte à côte · composer/CTA intégrés |
| **COMPACT** | 768–1199 | rail ~160 · ex. 1024 · contexte ~280 possible · master/detail resserré · **aucune perte fonctionnelle** |
| **MOBILE** | < 768 | rail persistant retiré · topbar · contexte = vue secondaire · listes → détails (Historique/Synthèses/Journal) · scroll naturel · CTA accessibles · **pas de hover-only** · cibles ~38 px min · **même sémantique** |

Frame contrat : `190:2` Responsive Contract · DP13 v1 · **VALIDATED** · 1440×690 (MCP confirmé).

Références compact 1024 : `190:44` Workspace · `190:111` Historique · `190:175` Synthèses · **VALIDATED**.

Références mobile 390 : `190:253` Projets · `190:284` Nouveau projet · `190:306` Workspace · `192:2` Aperçu · `190:337` Exécution · `192:41` Journal liste · `192:81` Journal détail · `190:380` Historique liste · `190:412` Historique détail · `190:433` Synthèses liste · `190:455` Synthèses détail · `190:495` Décision · `190:520` Confirmation · `192:113` Contexte du projet · `190:551` Auth · `190:560` Responsive States · tous **VALIDATED**.

---

## 32. Accessibilité / reduced motion

Contrat P3 (contrainte · **pas** claim WCAG certifié) :

- navigation clavier à prévoir ;
- focus / focus-visible ;
- labels et association d’erreurs ;
- contrastes à **vérifier à l’implémentation** ;
- reduced motion **REQUIRED** ;
- aucun hover-only sur mobile ;
- touch targets ~38 px min en mobile ;
- états erreur compréhensibles, non-color-only ;
- focus management modal/sheet candidate.

Preuve a11y = P5/P6.

---

## 33. Surfaces / éléments à ne pas réintroduire

Navigation Preuves principale · Share/Partager · Search/Activity globaux non implémentés · Continuer sans créer · formulaire projet massif · jargon HD/ExecutionContract/authority · explications trajectoire/arrêt/activité redondantes · Evidence graph décoratif · Vérification en cours · Timeout statut séparé · section Suite sous Exécution · « écriture locale » · seconde UX mobile métier · second cockpit Journal · transcript-as-memory · architecture technique implicite.

---

## 34. Figma — inventaire / matrice de statuts

**fileKey** `m4g8j0gNbEzfIuH6S9AZJF` · URL https://www.figma.com/design/m4g8j0gNbEzfIuH6S9AZJF

**MCP Cursor ce pass :** READ ONLY. Listing top-level sans `nodeId` ne retourne que `0:1` (limite d’énumération). Lectures ciblées **réussies** pour `2:6`, `46:2`, `94:2`, `184:2`, `190:2`, `205:2`. Autres node IDs = handoff ChatGPT/Morris **conservés** ; non inventés.

**Règle :** page exists ≠ design complete · frame exists ≠ P3 global validated · frame VALIDATED ≠ milestone VALIDATED · EXPLORATORY peut être **directionnellement accepté**.

| Surface | Frame | Node | Dim. | Statut Figma | Revue Morris | Usage P3 | P4 | Réserve |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Projets | DP03 v1 | `63:39` | 1440×1024 | EXPLORATORY | direction acceptée | entrée | projection liste | ≠ Screen 01 global validated |
| Nouveau projet | DP04 v1 | `67:39` | 1440×1024 | EXPLORATORY | direction acceptée | create conversationnel | pre-Project state | Create/Cycle simultané OPEN tech |
| Workspace | DP01 v3 | `46:2` | 1440×1024 | EXPLORATORY | direction acceptée | surface principale | views + context | exact drawer N/A — contexte desktop observé |
| Aperçu | DP01 v1 | `51:2` | 1440×1024 | EXPLORATORY | direction acceptée | compréhension | same SoT | label Aperçu |
| Décision inline | DP02 v2 | `59:2` | — | EXPLORATORY | principe adopted | governed HD | Rec≠HD | contenant exact encore frame-exploratory |
| Confirmation | DP02 v3 | `61:2` | — | EXPLORATORY | principe adopted | P2-D-03 | Rec≠HD≠Conf≠Exec | idem |
| Journal | DP01 v2.2 | `94:2` | 1440×1024 | **VALIDATED** | accepted | continuité | dérivation ≠ SoT | |
| Journal exchanges | v2.2.1 | `94:222` | — | **VALIDATED** | accepted | expansion | retrieval | |
| Historique | DP05 v2 | `78:2` | — | **VALIDATED** | accepted | passé | event model | |
| Exécution AFTER | DP09 v2 | `147:2` | — | **VALIDATED** | accepted | après | états Pilote | |
| Exécution AFTER 9 | v2.2 | `150:29` | — | **VALIDATED** | accepted | disclosure | | |
| Exécution BEFORE | v2 | `150:295` | — | **VALIDATED** | accepted | avant | | |
| Exécution BEFORE 9 | v2.1 | `150:532` | — | **VALIDATED** | accepted | disclosure | | |
| Synthèses | DP10 v1 | `164:3` | — | **VALIDATED** | accepted | post-exec | full-content search | index = P4 |
| Auth main | DP07 v1 | `130:3` | — | **VALIDATED** | accepted | GitHub-only | intégration tech | ≠ REAL |
| Auth states | DP08 | `133:2/30/58/86` | — | **EXPLORATORY** | non promus | variantes | | |
| Nora motion 01–05 | DP06 | `125:2` `119:4` `125:183/365/535` | — | **EXPLORATORY** | principe adopted | activity | honest activity source | timings OPEN |
| Motion contract | DP06 v1 | `125:712` | — | (contrat) | | reduced-motion | | |
| États DP12 | 9 frames | `184:2`…`184:1475` | 1440×1024 typ. | **VALIDATED** | **VALIDATED BY MORRIS** | honesty | mapping domain→UI | |
| Responsive contract | DP13 v1 | `190:2` | 1440×690 | **VALIDATED** | **VALIDATED BY MORRIS** | 3 bandes | CSS later | |
| Responsive refs | DP13 | `190:44`…`190:560` `192:*` | 1024 / 390 | **VALIDATED** | **VALIDATED BY MORRIS** | projection | | |
| Self-Review | 2026-10-04 | `205:2` | 1600×920 | review log | entrée consolidation | anti-claims | | ≠ P3 VALIDATED |
| Meridian emblem | rail bg | `179:2` etc. | 192×390 @y250 | design | branding P3 | signature | assets | ≠ rename produit |

### 34.1 Figma → Runtime Visual Fidelity Contract (FCR-P3-04)

**Décision Morris 2026-10-04 :** l’implémentation future doit reproduire l’IHM P3 **au détail près**. Figma n’est **pas** une simple inspiration.

#### Règle normative

Figma = **référence visuelle P3**. Toute implémentation des surfaces couvertes par P3 doit rechercher une reproduction **pixel-perfect** des frames canoniques.

Principe central : **NO INTENTIONAL VISUAL DEVIATION.**

Toute divergence **intentionnelle** Figma ↔ runtime doit être : identifiée · motivée · impact analysé · **approuvée explicitement** · jamais silencieuse.

Variations tolérées **sans** décision structurante = artefacts intrinsèques de rendu runtime uniquement :

- antialiasing · rasterisation · font rendering navigateur/OS · subpixel · artefacts purement techniques ne modifiant pas perception/layout.

Ces artefacts **ne justifient pas** : changement de spacing · typography · composants · layout · couleur · suppression d’état · variation responsive volontaire.

#### Définition opérationnelle « pixel-perfect »

1. Géométrie structurelle : **0–1 px** d’écart cible lorsque techniquement contrôlable.
2. Aucune différence visible volontaire d’alignement.
3. Aucune différence volontaire sur margins / paddings / gaps / widths / heights / position / grid / master-detail ratio.
4. Typography fidèle : famille · weight · size · line-height · letter-spacing si spécifié · wrapping · truncation.
5. Visual tokens fidèles : colors · backgrounds · borders · widths · radii · shadows · opacity · dividers.
6. Components fidèles : buttons · chips · tabs · inputs · cards · list items · status · composer · panels · rail · topbar.
7. Branding fidèle : Meridian (crop · opacity · placement · z-order) · logo GitHub.
8. States fidèles lorsqu’ils sont définis : hover · focus · active · selected · disabled · loading/working · empty · error · failed · stopped · stale · unavailable.
9. Content behavior fidèle : wrapping · dynamic-height cards · scroll · progressive disclosure · long synthesis · expanded exchanges · variantes 9-éléments Exécution.
10. Responsive fidèle Large / Compact / Mobile selon contrat P3 (**design bands** · **≠** breakpoints CSS finaux).

#### Canonical Implementation Frames

| Surface | Band | Node | Dim. | Statut Figma | Rôle implémentation | Alternate / state | Remarque |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Projects | Desktop | `63:39` | 1440×1024 | EXPLORATORY | canonical ref | empty `184:2` | EXPLORATORY ≠ invalid |
| New Project | Desktop | `67:39` | 1440×1024 | EXPLORATORY | canonical ref | mobile `190:284` | |
| Workspace / Conversation | Desktop | `46:2` | 1440×1024 | EXPLORATORY | canonical ref | compact `190:44` · mobile `190:306` | |
| Aperçu | Desktop | `51:2` | 1440×1024 | EXPLORATORY | canonical ref | mobile `192:2` | |
| Journal | Desktop | `94:2` | 1440×1024 | VALIDATED | canonical ref | expanded `94:222` · mobile `192:41`/`192:81` | |
| Execution After | Desktop | `147:2` | — | VALIDATED | canonical ref | 9-el `150:29` | |
| Execution Before | Desktop | `150:295` | — | VALIDATED | canonical ref | 9-el `150:532` | |
| Decision | Desktop | `59:2` | — | EXPLORATORY | canonical ref | mobile `190:495` | |
| Confirmation | Desktop | `61:2` | — | EXPLORATORY | canonical ref | mobile `190:520` | |
| Historique | Desktop | `78:2` | — | VALIDATED | canonical ref | compact `190:111` · mobile `190:380`/`190:412` | |
| Synthèses | Desktop | `164:3` | — | VALIDATED | canonical ref | compact `190:175` · mobile `190:433`/`190:455` | |
| Auth | Desktop | `130:3` | — | VALIDATED | canonical ref | mobile `190:551` · states `133:*` EXPLORATORY | |
| Nora motion | — | `125:2` `119:4` `125:183` `125:365` `125:535` | — | EXPLORATORY | motion refs | contract `125:712` | |
| États transverses | Desktop | `184:2`…`184:1475` | 1440×1024 typ. | VALIDATED | state refs | Responsive States `190:560` | VALIDATED BY MORRIS |
| Responsive contract | — | `190:2` | 1440×690 | VALIDATED | band contract | | VALIDATED BY MORRIS |
| Self-Review | — | `205:2` | 1600×920 | review log | process ref | | process ≠ runtime proof |

Distinguer toujours : **canonical implementation reference** · **Figma status** · **Morris review status** · **P3 global status**.

**Clarification (validation globale P3, sans mutation Figma) :** les frames listées comme Canonical Implementation Frames restent les **références contractuelles d’implémentation** définies par P3, **même lorsqu’un suffixe Figma historique reste EXPLORATORY**. Cela ne permet pas de redessiner silencieusement · ne transforme pas tous les labels Figma en VALIDATED · ne vaut pas preuve runtime.

Si aucune frame canonique pour un viewport : qualifier l’absence · appliquer responsive contract · **ne pas** claim « pixel-perfect against Figma » sans référence.

#### Future Visual Fidelity Gate

Pour chaque surface implémentée, un **Visual Fidelity Review Pack** doit identifier :

surface · canonical Figma frame · node ID · target viewport · runtime route · fixture/état qualifié · **runtime screenshot** · Figma reference capture · comparaison · écarts · corrections · verdict.

Viewports cibles lorsque frame existe : Desktop 1440×1024 (ou dims exactes) · Compact 1024 · Mobile 390.

```text
Code implemented ≠ Figma fidelity proven
Screenshot exists ≠ pixel-perfect PASS
Visual PASS = canonical frame + runtime screenshot + comparaison + écarts qualifiés + aucun écart intentionnel non approuvé
```

#### Visual QA checklist (minimum)

SHELL · GEOMETRY · TYPE · VISUALS · COMPONENTS · CONTENT · INTERACTION STATE · RESPONSIVE · BRANDING · MOTION (+ reduced-motion) · ACCESSIBILITY (keyboard · focus-visible · touch · contrast qualification).

#### Tolerance / acceptance

Pas de seuil « 100 % pixels identiques » comme unique définition. **No intentional visual deviation.** Target structural : **0–1 px** lorsque contrôlable. Écart >1 px n’est pas auto-FAIL s’il est intrinsèque et démontré, mais doit être qualifié s’il affecte perception/layout.

**FAIL** tant que non approuvé : spacing/alignement/font/size/radius/couleur différents · composant substitué · élément/état manquant · responsive changé · layout simplifié · branding absent · hiérarchie altérée.

#### Divergence policy

Si le design canonique est techniquement incompatible : **ne pas** modifier silencieusement code ou Figma. Créer une divergence qualifiée (frame · requirement · contrainte · impact · alternatives · recommendation) → **gate Morris** si le changement altère contrat visuel / comportement / architecture / responsive / scope.

#### Boucle d’implémentation future

```text
canonical Figma frame
  → implementation
  → runtime screenshot
  → visual comparison
  → targeted corrections
  → new screenshot
  → Visual Fidelity PASS
```

**Pas :** Figma → code approximatif → « ça ressemble » → done.

#### Anti-claims pixel-perfect

Code implemented ≠ fidelity proven · Screenshot exists ≠ PASS · Component exists ≠ frame reproduced · Responsive works ≠ responsive fidelity proven · Figma reference ≠ runtime proof · Visual Fidelity PASS exige comparaison au viewport cible · Pixel-perfect ≠ licence d’exposer internals SFIA · Pixel-perfect ≠ duplication des états métier · **PIXEL-PERFECT RUNTIME PROVEN = NO** (ce pass).

---

## 35. P3 Design Self-Review

Frame `205:2` · **PASS WITH TARGETED CORRECTIONS COMPLETE**.

Corrections : faux contrôles globaux (⌘K, Activité, vues non définies) · francisation (de l’espace projet / l’Aperçu) · jargon construction retiré · Aperçu → Synthèses plutôt que Preuves · Journal / Historique / Synthèses · wording Confirmation · géométrie rail / Exécution / Échouée / Nora interrompue / Motion · quick links cohérents · lint : pas Share · pas Overview/Vue d’ensemble · pas de débordement fonctionnel (1 px tableaux intentionnels).

**≠** validation globale P3.

---

## 36. Morris review dispositions

| Disposition | Statut |
| --- | --- |
| GO P3 + Entry Directives | CONSUMED |
| North Star AMEND & ADOPT | CONSUMED |
| Figma-first / pas de code prématuré | CONSUMED |
| Direction Linear-like sans copie | CONSUMED |
| Francisation | **VALIDATED BY MORRIS** |
| États transverses | **VALIDATED BY MORRIS** |
| Responsive | **VALIDATED BY MORRIS** |
| Journal / Historique / Synthèses / Exécution / Auth main | revus et acceptés au cours du cycle |
| Self-review corrections | accepted as consolidation entry |
| Passe visuelle Morris | cohérente · consolidation documentaire · **P3 GLOBAL VALIDATED BY MORRIS** (2026-10-04) · **≠ INTEGRATED** |

---

## 37. Known gaps / reserves

| Réserve | Classe |
| --- | --- |
| Frames Workspace / Projets / Nouveau projet / Décision / Confirmation / Motion / Auth variants encore **EXPLORATORY** dans Figma | **Non bloquante** — canonical implementation refs P3 ; labels Figma **non** renommés ; **≠** preuve runtime |
| MCP listing pages top-level incomplet sans nodeId | **Non bloquante** — lectures ciblées OK |
| Simultanéité Create Project / first Cycle | **Non bloquante** — routée P4 · ne pas inventer |
| Jump/highlight search Synthèses | **Non bloquante** — UX souhaitable · tech P4 |
| Timings/easing motion | **OPEN** |
| Exact CSS breakpoints | **OPEN** P4/P5 |
| Tokens / component system final | **OPEN** |
| Figma operator future design mutations | N/A ce pass (pas de mutation) |
| Contradiction avec une décision Morris nécessitant de la modifier | **Aucune identifiée** — pas de STOP |

---

## 38. P3 Exit Proof

**P3 GLOBAL VALIDATED BY MORRIS = YES** (2026-10-04). Critères documentaires / expérience **consommés** pour le gate de validation globale :

- inventaire retained COVERED ;
- familles conçues (y compris Auth visuel) ;
- états structurants conçus ;
- HD/Confirmation UX validée au niveau milestone ;
- IA validée au niveau milestone ;
- language / visual / motion / responsive / a11y **suffisamment** verrouillés pour P3 ;
- frames de référence identifiées (Canonical Implementation Frames) ;
- Design Self-Review PASS WITH TARGETED CORRECTIONS COMPLETE ;
- FCR-P3-01…04 CLOSED ;
- ChatGPT Closure Review P3 = PASS ;
- **Morris global validation CONSUMED**.

**P3 Exit Proof documentaire VALIDATED ≠ INTEGRATED ON MAIN.** Merge / post-merge / CLOSED = gates **distincts**.

```text
Artifact / Figma frame VALIDATED ≠ P3 INTEGRATED
Self-Review PASS ≠ P3 VALIDATED (Morris distinct — now CONSUMED)
Documentary consolidation ≠ P3 INTEGRATED
P3 VALIDATED BY MORRIS ≠ P4 AUTHORIZED
P3 VALIDATED BY MORRIS ≠ pixel-perfect runtime proven
```

---

## 39. P3→P4 Input Contract

**Aucune architecture choisie.** P4 devra permettre P2+P3 **sans** seconde vérité UI. **P4 NOT AUTHORIZED.**

### 39.0 Entrée P4 — ordre de travail (FCR-P3-02)

P4 **ne commence pas** par « quelle DB / quel store / quelle API ? ».

P4 commence par :

> quel monde sémantique doit exister, qui en est autoritaire, comment est-il projeté, et comment le CURRENT converge vers cette cible ?

### 39.1 P4 MANDATORY STRUCTURAL WORK PRODUCTS (FCR-P3-02)

Ces quatre outputs sont **obligatoires pour P4**. Ils **ne sont pas résolus** dans P3. Ils **n’autorisent pas** P4. Aucune solution technique n’est sélectionnée ici.

#### 1. Pilot–Nora–Studio Semantic Connectivity Audit

Identifier : objets sémantiques partagés · points d’entrée · lecture · écriture · relations · projections · ruptures actuelles · duplications · gaps · risques de **parallel truth**.

#### 2. Information Ownership / Authority Matrix

Pour chaque information / objet : owner · authority · writer · reader · derived projections · currentness · provenance · mutability · decision authority · **interdit de duplication autoritative**.

Doit préserver notamment : Recommendation ≠ HumanDecision · Result ≠ Evidence · Journal ≠ Product SoT · Historique ≠ current truth · Synthèse ≠ ReviewBundle brut · Conversation ≠ mutation automatique.

#### 3. Role Projection Contracts

Définir comment le **même** monde sémantique est projeté vers Pilote · Nora · Studio · executor/agent si applicable — **sans** quatre modèles métier concurrents. Représentations distinctes · rôles / droits / autorités distincts.

#### 4. CURRENT → TARGET Integration Map

Classifier les actifs existants (Build Doctrine) : KEEP · ADAPT · HARVEST · COMPLETE · REPLACE · FREEZE · RETIRE LATER.

Doit empêcher : réécriture inutile · architecture parallèle · nouveau moteur UI · conservation par inertie.

Relier : CURRENT repo → capacité cible → adaptation → exit → preuve.

### 39.2 Capacités / projections à permettre

1. **SoT / projections.** Conversation, Project, Cycle, ProjectTrajectory, Recommendation, HumanDecision, ExecutionContract, Execution/Attempt, Result, Evidence, ReviewBundle, Journal, Historique, Synthèses — **même monde sémantique**. Interdiction : vérité UI indépendante.

2. **Project creation.** État pré-Project · conversation · matérialisation Project · continuité conversation · first Cycle · recovery interruption. Trajectory complète **non** obligatoire à Create.

3. **Workspace views.** Conversation / Aperçu / Exécution / contexte / Journal / Historique / Synthèses projetés depuis les mêmes facts.

4. **Trajectory.** Terminé/En cours = truth · Proposé = recommendation. Proposition ≠ Cycle durable auto.

5. **Decision / Confirmation.** Rec ≠ HD ≠ Confirmation ≠ Execute. Confirmation sur l’action inspectée, pas gratuite.

6. **Journal.** Dérivation Sujets · currentness · points · liens autoritatifs · échanges · retrieval · provenance. **≠** persistence concurrente SoT.

7. **Historique.** Événements · projection contexte · reconstruction · liens · relation current truth.

8. **Synthèses.** Stockage **ou** reconstruction selon archi · sections · provenance · Result/Evidence/ReviewBundle · **full-content search** · currentness. Moteur/index **non** décidé.

9. **Execution.** États Pilote listés. Timeout = cause d’Échouée. Machine interne peut être plus fine **sans** jargon Pilote.

10. **Result ≠ Evidence.** Preuves contextuelles Exécution/Synthèses.

11. **Nora activity.** START/ACTIVITY/STREAMING/COMPLETE/STOPPED honnêtes. Stop composer = capacité réelle **ou** sémantique qualifiée. No fake progress. Pas de CoT.

12. **Search.** Locale Projets / Historique / Synthèses full-content. Pas de Search global fictif.

13. **Auth.** GitHub-only UX. **≠** REAL proven.

14. **Responsive.** Traduire Large/Compact/Mobile **sans** API/état métier/parcours seconds.

15. **Design system / visual fidelity (FCR-P3-04).** P4 **ne réinterprète pas** P3 pour faciliter l’architecture. P4 propose une architecture **capable de porter** la fidélité pixel-perfect. Qualifier (sans sélectionner ici) : design-token architecture · component architecture · shared primitives · typography/spacing/sizing · radius/border/shadow · color system · responsive layout · dynamic-content · overflow/scroll · state representation · motion · reduced-motion · assets · icons · Meridian · GitHub icon · a11y constraints · capture/testability. Éviter : CSS ad hoc écran par écran · styles dupliqués · archi responsive parallèle · composants génériques dégradant le design · abstraction prématurée · DS divergent de Figma. **P3 définit le rendu · P4 porte le contrat · l’implémentation reproduit · l’architecture ne redessine pas silencieusement P3.**

16. **Navigation / routing.** Représenter les vues **sans** transformer les routes en taxonomie autoritative.

17. **Deep links / selected object.** Carte conversation → décision / action / synthèse / sujet / preuve **sans** dupliquer les objets.

18. **Recovery / currentness.** Retour Project = current authoritative truth **avant** stale session.

19. **Reuse.** Auditer le repo. Build Doctrine : réutiliser avant reconstruire. Pas de nouveau moteur Journal/History/store/orchestration UI **juste** pour coller aux maquettes.

20. **Temporary debt.** Toute rustine P4 : cible · owner · condition d’exit.

---

## 40. Questions routées à P4 — **ne pas résoudre ici**

Architecture composants front · route structure · state management · persistence Synthèses · index full-text · persistence/dérivation Journal · event model Historique · activity events Nora · interruption streaming · mapping domain→Pilot UI · token implementation · breakpoints CSS · GitHub auth integration · deep-link implementation · store/search caching · schemas/API · choix concrets du design-token / component stack.

Si une solution est sélectionnée dans P3 : **STOP — P4 SCOPE LEAK**.

---

## 41. Registre décisions / validations Morris (P3)

Pas d’IDs `P3-D-*` inventés. Table de consommation.

| Sujet | Source / moment | Statut | Impact P3 | Impact P4 |
| --- | --- | --- | --- | --- |
| Figma-first, pas de code | Entry + cycle | consumed | design evidence | implémentation plus tard |
| Premium Linear-like sans copie | Morris direction | consumed | visual/IA | DS |
| Chat-first ≠ chat-only | North Star + P2 | adopted | all surfaces | projections |
| Conversation principale | North Star | adopted | Workspace | |
| Surfaces complémentaires | North Star | adopted | Aperçu/Exec/Journal… | |
| Densité / contrôle sans cockpit | Morris | consumed | shell | |
| Vocabulaire fonctionnel FR | Morris | **validated** | wording | i18n/labels |
| New Project conversationnel + CTA unique | Morris | consumed | Screen 02 | create flow |
| Shell Conversation / Aperçu / Exécution | Morris | consumed | nav projet | routing |
| Journal ≠ Historique ≠ Synthèses | Morris | consumed | continuité | 3 projections |
| Journal onglets Sujets/Réserves/Reco/Décisions | Morris | consumed | Journal | dérivation |
| Contenu Sujet + échanges date+heure + expansion | Morris | consumed | Journal | retrieval |
| Trajectoire Terminé/En cours/Proposé | Morris | consumed | Aperçu/contexte | Rec≠Cycle |
| Suppression textes internes trajectoire | Morris | consumed | UI | |
| Decision ≠ Confirmation | P2-D-03 + Morris | adopted | governed moments | |
| Exécution simplifiée · pas Vérif. en cours · timeout⊂Échouée | Morris | consumed | Exec | mapping |
| Before/after + blocs dynamiques | Morris | consumed | Exec | |
| Preuves contextuelles · nav Preuves retirée | Morris | consumed | Evidence | |
| Synthèses + 9 sections + Verdict avant reco | Morris | consumed | Synthèses | storage |
| Full-content search Synthèses | Morris | consumed | search sémantique | index |
| Nora activity/stop · no CoT · textes inutiles retirés | Morris | consumed | motion | streaming |
| GitHub-only + vrai logo | Morris | consumed | Auth | intégration |
| Rail minimal + Meridian (pas rename) | Morris | consumed | branding | assets |
| Aperçu canonical · Partager retiré | Morris | consumed | labels | |
| États transverses | Morris | **VALIDATED** | honesty | |
| Responsive 3 bandes | Morris | **VALIDATED** | projection | CSS later |
| Self-review corrections | ChatGPT + Morris accept | consumed | lint visuel | |
| Morris visual pass cohérente | Morris | consolidation entry | consumed in global validation | **≠ INTEGRATED** | |
| FCR-P3-01 Authority-by-domain | Morris 2026-10-04 | **APPROVED / CORRECTED** | §1.2 | P4 lit domaines sans hiérarchie globale |
| FCR-P3-02 P4 mandatory work products | Morris 2026-10-04 | **APPROVED / CORRECTED** | §39.1 | 4 outputs obligatoires non résolus |
| FCR-P3-03 Review integrity / diff-check | Morris 2026-10-04 | **APPROVED** (process) | pack + reporting | dette `.tmp` trackée HORS SCOPE |
| FCR-P3-04 Pixel-perfect fidelity | Morris 2026-10-04 | **APPROVED / CORRECTED** | §34.1 · §39.2.15 | Visual Fidelity Gate futur |
| **P3 GLOBAL VALIDATION** | Morris 2026-10-04 | **APPROVED / CONSUMED** | contrat P3 entier | **≠ P4 AUTHORIZED** · **≠ INTEGRATED** |

Recommandations ChatGPT historiques **≠** décisions Morris.

---

## 42. Méthode écran par écran (conservée)

A–O : evidence · job · P2 · flow · hierarchy · interaction · states · authority · a11y · responsive · motion · Figma · ChatGPT review · Morris si structurel · consolidation ici.

Ne pas avancer avec blocker structurel non résolu.

---

## 43. Anti-claims finaux / next gate

| Gate | Statut |
| --- | --- |
| P3 GLOBAL VALIDATED BY MORRIS | **YES** (2026-10-04) |
| P3 INTEGRATED | **NO** |
| P3 CLOSED | **NO** |
| Git integration P3 | **AUTHORIZED FOR COMMIT / PUSH / PR** |
| MERGE AUTHORIZED | **NO** |
| ChatGPT Final Critical Review P3 #1 | **NOT READY — TARGETED CORRECTION REQUIRED** [historical] |
| Targeted Correction Pass 01 | **COMPLETE** |
| FCR-P3-01 / 02 / 03 / 04 | **CLOSED** |
| ChatGPT Closure Review P3 | **PASS** |
| P4 AUTHORIZED | **NO** |
| READY FOR REAL | **NO** |
| PIXEL-PERFECT RUNTIME PROVEN | **NO** |
| FIGMA-TO-RUNTIME ALIGNMENT PROVEN | **NO** |
| runtime v3 | **NON ADOPTED** |
| ZERO REAL | **YES** (cycle documentaire) |

```text
NEXT:
  Final Git Integration P3 (ce pass: commit / push / PR)
  → PR review
  → Morris merge gate
  → merge
  → post-merge
  → requalification P4
  → GO P4 distinct
```

Ce pass : **READY FOR MORRIS P3 MERGE GATE** (après commit / push / PR) signifie **P3 VALIDATED + PR créée**. **≠** P3 INTEGRATED · **≠** P3 CLOSED · **≠** P4 AUTHORIZED · **≠** pixel-perfect runtime proven.

---

*Fin du document P3 — FINAL GIT INTEGRATION PRE-MERGE — P3 VALIDATED BY MORRIS — NOT INTEGRATED — P4 NOT AUTHORIZED — ZERO REAL.*
