# SFIA STUDIO — P6 INTEGRATED PRODUCT ARCHITECTURE RECOVERY
# Architecture Review — CURRENT vs TARGET — Critical Review Pack (FULL)

## 0. Horodatage / qualification

| Champ | Valeur |
|---|---|
| Horodatage ISO | 2026-10-18T14:25:48+0200 |
| Local | 2026-10-18 14:25 CEST |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Milestone | P6 — Global Integrated Product QA |
| Chantier | P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY |
| Étape | Architecture Review / Qualification structurante |
| Cycle type | 6 — Architecture technique |
| Profil | CRITICAL |
| Typologie | EVOL / ARCHITECTURE REVIEW / REGRESSION ANALYSIS |
| CKC | pilots/03-architecture-technique.md — candidate (guidance cognitive; aucune autorité d'exécution) |
| Capacité principale | V3-F05 |
| Connexes | V3-F06 / F07 / F11 / F12 / F14 |
| Mode preuve | STATIC REPOSITORY REVIEW + HISTORICAL EVIDENCE REVIEW (QA DB read-only) |
| Product mutations | NONE |
| Runtime mutations | NONE |
| REAL executions | NONE |

## 1. GO Morris (limites)

Réaliser une revue architecturale transverse CURRENT vs cible D-ER déjà adoptée.
Identifier couplages excessifs, responsabilités mélangées, risques de propagation, écarts.

**Interdit dans ce cycle :** modification Product, correction, nouvelle architecture décidée, Nora LIVE, Cursor REAL, mutation DB/runtime, PR Product, promotion doctrine.

**Autorisé :** lecture code/tests/docs, Git compare, DB QA read-only, Review Pack FULL, publish L3 handoff.

## 2. Git Truth

| Item | Observation |
|---|---|
| Remote | `https://github.com/mcleland147/sfia-workspace.git` |
| origin/main | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` — MATCH baseline attendue |
| PR #587 | MERGED `e03c7b9f` (2026-10-17) — generic execution / governed continuity |
| PR #588 | MERGED `304e30e8` (2026-10-18) — Tool-First R1/R2 + PRR |
| Worktree d'analyse | `/Users/morris/Projects/sfia-workspace-p6-fresh-qa-304e30e8` @ `304e30e8` (detached) |
| Status analyse | seul dirty : `.tmp-sfia-review/chatgpt-review.md` (livrable) |
| Worktree agent historique | `sfia-workspace-p6-tool-first-safety-r1r2` @ `b4c1d862` branch dirty — **non utilisé** pour l'analyse code |
| Autres worktrees dirty | présents (qa/, fix/, delivery/) — **non modifiés** |
| Runtime QA | localhost:3020 — `/login` 200 observé ; **non stoppé / non redémarré** |
| Project QA | AtelierNova `prj:f0765c0c-fbd4-4db0-8c77-477ae627ef96` — DB lue en RO |

**Verdict Git Truth :** FIABLE pour lecture main CURRENT. STOP non déclenché.

## 3. Sources exactes lues / requalifiées

### Processus
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

### Convergence / P6 / v3 / D-ER
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` (échantillon living tip — fichier très volumineux)
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` (cadrage oracle)
- `projects/sfia-studio/product-simplification/07-…-p6-….md` (snapshot campagne — baseline historique ≠ HEAD)
- `projects/sfia-studio/sfia-v3-framing/30`, `34`, `35`, `37`
- `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` (D-ER-01…19)

### Production Runtime Reference
- `01`…`09` + `production-runtime-reference.manifest.json` (échantillon impact map + gaps)

### Code CURRENT (échantillon critique)
- `f2/orchestrateF2.ts`
- `f2/resolveChatFirstCycleStartGate.ts`
- `f2/composeF2PilotFacingNarrative.ts`
- `f2/chatFirstFramingContinuity.ts` / `preCycleCandidateTrajectoryActions.ts`
- `f2/activeCycleGovernedContinuation.ts` (`hasExplicitNewCycleFormalizationSignal`)
- `w2/prepareGenericExecutionContractDraft.ts` (`genericMissionClarificationText`, `resolveChatFirstGenericPrepareGo`, readiness)
- `w2/resolveAuthoritativeProductMateriality.ts` (matérielité — non mutée ici)
- tests `p6.der16.*`, `p6.hqa.f01.*`, framing continuity

### Requalification documentaire (IMPORTANT)

| Claim documentaire | Statut vs main `304e30e8` |
|---|---|
| D-ER-01…15 TARGET ADOPTED | CONSERVE (décision Morris) |
| D-ER-16…19 TARGET ADOPTED | CONSERVE (2026-10-16) |
| « D-ER-16…19 EN COURS Delivery local, non fusionné » / PENDING_GIT_INTEGRATION (pied D-ER) | **STALE** — code d'admission générique / Nora tool / continuity **intégré via #587** ; Tool-First via #588 |
| « Tool-First R1/R2 PENDING_GIT_INTEGRATION » (impact map sample) | **STALE** — MERGED #588 |
| E8…E11 FUTURE PROOF NOT PROVEN | **TOUJOURS VALIDE** comme plafond de preuve (AtelierNova confirme E9/E10 non prouvés comme parcours Pilote nominal) |
| TARGET ADOPTED ≠ implémentation PROVEN | **VALIDE** |

## 4. Convergence Pre-check

| Item | État |
|---|---|
| Capacité | V3-F05 |
| Milestone | P6 |
| P5 | intégré (historique campagne) |
| P6 Human QA | en cours (AtelierNova) |
| PR #587 / #588 | intégrées |
| P6 GLOBAL PASS | NON ACQUIS |
| Runtime v3 | NON ADOPTED |
| Classification initiale actifs | KEEP CANDIDATE (OA, LPS, Trajectory, HD, EC, Attempt, Evidence, Nora, Cursor GW, Resolution, Reconciler) |
| Gap déclencheur | Régression Human QA AtelierNova + risque couplage F2 ↔ Generic PREPARE |
| Dette connue | TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN (hors scope correction ici) |
| Exit proof cette étape | Carte factuelle + causes + options + recommandation — ce pack |
| Capacité suivante | Correction intégrée V3-F05 (après décision Morris) |

## 5. Question architecturale centrale — réponses synthétiques

| # | Question | Réponse CURRENT (factuelle) |
|---|---|---|
| 1 | Source de vérité Product commune ? | **PARTIELLE** — OA SQLite (Project/LPS/Cycle/Trajectory/HD/EC/Attempt/Evidence) est SoT durable ; offers Generic PREPARE + certains stores restent session/process-local |
| 2 | Projections adaptées Pilote / Nora / Studio ? | **PARTIELLE** — UI + F2 narratives + tools Nora ; mais une même utterance Pilote est routée vers des sémantiques concurrentes (Cycle START vs Generic PREPARE) |
| 3 | Indépendance responsabilités métier ? | **FAIBLE** sur le chemin conversationnel — `orchestrateF2` fusionne Continuity, ACGC, Generic PREPARE, START, MW5 |
| 4 | Orchestration cohérente ? | **AMBIGUË** — priorités implicites par ordre de branches |
| 5 | Modification localisée sans régression ? | **RISQUÉE** — preuve AtelierNova : admission D-ER-17 a impacté démarrage de cycle |
| 6 | Services communs sans mutualisation abusive de workflows ? | **ÉCART** — services OA KEEP ; workflow PREPARE réutilise le tour F2 du START |
| 7 | Séparation intention / décision / autorisation / exécution ? | **CONSERVÉE** sur EC (PREPARE≠AUTHORIZE≠EXECUTE) ; **BROUILLÉE** en conversation (accord cycle vs HD mission vs prepare GO) |
| 8 | Convergence D-ER sans second moteur ? | **ORIENTATION OK** (un backend prepare) ; **effet collatéral** sur Cycle Lifecycle |

## 6. Cartographie CURRENT (code)

### 6.1 Matrice ACTEUR → CAPACITÉ → SERVICE → DONNÉE → AUTORITÉ → EFFET

| Acteur | Capacité | Service / module | Donnée SoT | Autorité | Effet |
|---|---|---|---|---|---|
| Pilote | Project create / context | Project services + UI | `oa_projects`, LPS | Auth session + local pilot profile | Project ACTIVE |
| Pilote | Trajectory approve / prepare cycle | `preCycleCandidateTrajectoryActions` | `oa_project_trajectories`, cycles prepared | HD structurante si applicable | Cycle proposed/ack bound |
| Pilote | Cycle START | `resolveChatFirstCycleStartGate` → `startPreparedTrajectoryCycle` | Cycle + LPS activeCycle | Pilot lifecycle authority | Cycle ACTIVE |
| Pilote | Generic mission HD | UI sealed offer + OA HD | `oa_human_decisions` | Pilote | Accept/Refuse/Amend mission |
| Pilote | Confirm / Authorize EC | W2 / OA confirmation | EC + receipts | Pilote | Authz stamps |
| Nora | Cognition / intent | Agents + `intentAnalysis` | session transcript (Nora DB) | aucune exécution | Recommendation / analysis DTO |
| Nora | Solliciter PREPARE (D-ER-16) | `productExecutionAgentsTools` → prepare draft | offer + EC draft | aucune | PREPARE solicitation only |
| Studio F2 | Orchestration tour | `orchestrateF2` | lit LPS/cycles ; écrit via OA actions | applique gates | narrative + side-effects gouvernés |
| Studio W2 | Generic PREPARE | `prepareGenericExecutionContractDraft` | EC | materiality + HD verify | EC créé (≠ execute) |
| Studio | Resolution / Reconciler | w2 resolve / reconcile | Attempt/Evidence | déterministe | progression post-terminal |
| Cursor | Execute | Gateway REAL/Fake | Attempt | Authorization préalable | effets worktree bornés |

### 6.2 Inventaire capacités (condensé)

#### A. Project / LPS
- **Vérité :** OA `oa_projects` / `oa_lps` / `oa_lps_current`
- **Entrée :** project create, onboarding handoff
- **AtelierNova :** Project ACTIVE ; LPS v1 ; `activeCycleInstanceId` absent ; handoff note « Aucun CycleInstance ni HumanDecision à l'accueil »

#### B. ProjectTrajectory
- **Vérité :** `oa_project_trajectories` / current
- **Services :** `projectAssistantPrepareCandidateTrajectoryAction`, approve, `prepareCycleFromValidatedTrajectoryAction`
- **AtelierNova :** **0 trajectories** — PROVEN

#### C. Cycle Lifecycle
- **Vérité :** `oa_cycle_instances` + LPS active pointer
- **START gouverné chat-first :** `resolveChatFirstCycleStartGate` — **ne crée jamais** de CycleInstance ; exige prepared COMPLETE trajectory-bound ou already_active
- **Legacy mint :** createCycle path encore présent plus bas dans F2 (D-ER-19 exit OPEN)
- **AtelierNova :** **0 cycles** — PROVEN

#### D. HumanDecision
- **Vérité :** `oa_human_decisions`
- **Rôles distincts :** trajectory / lifecycle vs generic mission structural HD
- **AtelierNova :** **0 HD** — PROVEN

#### E–F. Nora Cognitive + Tools
- Runtime Agents ; tools sollicitent Product ; **pas** d'autorité Execute (aligné D-ER-16/18 en intention)
- Transcript Nora DB : 6 tours AtelierNova

#### G. F2 Orchestration (`orchestrateF2`)
- **Super-routeur** du tour conversationnel Product
- Ordre pertinent observé :
  1. Continuations / dispositions lifecycle
  2. **Framing continuity early START** (`ready_to_start` + `attempt_start`)
  3. ACGC / formalization
  4. **Generic PREPARE project-context / active-cycle block** (D-ER-17) — peut `return` tôt
  5. MW5
  6. **Late START** (`resolveChatFirstStartRouting` → gate)
  7. createCycle / recommendation paths
- **Propriétaire vérité :** n'est pas SoT ; coordonne
- **Dette structurelle :** priorités implicites ; responsabilités métier fusionnées

#### H. MW5 Challenge
- Gate recommendation ; peut retarder progression — KEEP

#### I–K. Generic admission / EC / Authz
- Admission sans cycle artificiel (D-ER-17) — **implémentée** (`projectContextAdmission`, `qualificationFromProjectContext`)
- PREPARE≠AUTHORIZE≠EXECUTE — **préservé** sur chaîne EC
- Offers CURRENT : session-scoped (`rememberGenericPrepareRecommendation`)

#### L–N. Cursor / Attempt / Evidence
- Gateway + Attempt + Evidence/ReviewBundle — KEEP ; Tool-First R2 fail-closed pathless REAL — OPEN debt

#### O–P. Resolution / Reconciler
- KEEP / COMPLETE candidats D-ER-07/08 — hors régression AtelierNova directe

#### Q. UI projections
- ConversationSurface / framing cards / sealed mission — lisent Product + offers ; ne doivent pas inventer HD (invariant chat-first)

#### R. Persistence / Recovery
- Product DB + Nora session DB séparées (QA isolée)
- Recovery Attempt/EC documentée PRR — non rejouée ici

#### S. Legacy specialized admissions
- Discriminants Artifact / docs_write / ACGC encore dans le graphe F2 — D-ER-19 sortie progressive OPEN

### 6.3 Interfaces exposées (critiques)

| Interface | Contrat | Consommateurs |
|---|---|---|
| `resolveChatFirstStartRouting` | stance sur **raw userContent** → attempt_start / suppress_mint / not_start_path | F2 early+late START |
| `hasExplicitNewCycleFormalizationSignal` | regex sur **analysis fields only** | exclusion `projectContextAdmission` |
| `resolveChatFirstGenericPrepareGo` | offer CURRENT + accept GO / lexical prepare | F2 Generic PREPARE |
| `genericMissionClarificationText` | narrative PREPARE (incl. « aucun cycle artificiel ») | F2 returns |
| `resolveChatFirstCycleStartGate` | inventory Product → startPrepared / block | F2 START |
| `classifyFramingContinuityPhase` | phase none→…→ready_to_start→active | framing actions + F2 |

## 7. Couplages confirmés

### C1 — Generic PREPARE project-context intercepte le tour Cycle START
| Champ | Détail |
|---|---|
| Fichier / fonctions | `orchestrateF2.ts` ~2050–2170 ; `genericMissionClarificationText` ; `projectContextAdmission` (`dac669d7`, ancêtre #587) |
| Source | Admission exécution générique D-ER-17 |
| Consommateur collatéral | Intention Pilote de **démarrage de cycle** |
| Mécanisme | Branche Generic PREPARE évaluée **avant** late START ; `return` avec narrative PREPARE |
| Impact | Aucun cycle créé ; Pilote lit un message d'exécution/HD mission |
| Preuve | AtelierNova tours 1–2 texte **byte-identique** à `genericMissionClarificationText({structuralBlocked:true, hasActiveCycle:false})` |
| Classification | **DECOUPLE CANDIDATE** (workflows) / services OA **KEEP** |
| Traitement proposé | Priorité explicite : intent Cycle START / formalization cycle **exclut** project-context Generic PREPARE ; PREPARE reste pour missions d'exécution |

### C2 — Exclusion formalization basée sur analysis ≠ raw content
| Champ | Détail |
|---|---|
| Fichier | `hasExplicitNewCycleFormalizationSignal` vs `resolveChatFirstStartRouting` |
| Mécanisme | START lit le texte Pilote ; exclusion PREPARE lit objective/rephrasedRequest |
| Impact | Un « démarre le cycle Cadrage » peut ne pas exclure PREPARE si l'analyse reformule en mission Cursor/EC |
| Preuve code | signatures / haystacks distincts — **PROVEN mechanism** |
| Preuve AtelierNova analyse DTO | **UNKNOWN** (non persistée) — **PLAUSIBLE** contributeur |
| Classification | **ADAPT** (aligner signaux d'exclusion sur raw+stance) |

### C3 — START chat-first exige prepared trajectory-bound ; aucun chemin de préparation n'a produit cet inventaire
| Champ | Détail |
|---|---|
| Fichier | `resolveChatFirstCycleStartGate` / `classifyChatFirstStartSituation` → `PREPARED_CYCLE_MISSING` |
| Impact | Même sans C1, START échouerait honnêtement sans Trajectory/prepare |
| Preuve AtelierNova | 0 traj, 0 cycles |
| Classification | **KEEP** gate fail-closed ; **ADAPT** orchestration amont (framing continuity advance) pour ne pas court-circuiter vers PREPARE |
| Dette | Parcours « premier cycle » conversationnel incomplet vs attente Pilote |

### C4 — Conflation sémantique narrative : HD mission PREPARE vs décision démarrage cycle
| Champ | Détail |
|---|---|
| Texte | « décision Pilote explicite … avant de préparer un contrat d'exécution » alors que le Pilote demandait START cycle et niait l'autorisation Cursor |
| Classification | **DECOUPLE CANDIDATE** (projections / messaging) |

### C5 — `orchestrateF2` god-router
| Classification | **CONSOLIDATE CANDIDATE** (orchestration plus légère + contrats de priorité) — Option B |
| Risque Option C | Remplacement borné possible plus tard si B insuffisant — **STRUCTURAL DECISION REQUIRED** seulement si B échoue |

### C6 — Offers Generic PREPARE session-local
| Classification | **TRANSITIONAL WITH EXIT** — documenter exit vers durabilité si CONTINUITY l'exige ; non cause primaire AtelierNova |

### C7 — Legacy ACGC / Artifact discriminants dans graphe F2
| Classification | **TRANSITIONAL WITH EXIT** (D-ER-19) — owner: chantier recovery ; exit = admission nominale sans discriminant taxonomique |

### Couplages sains (KEEP)
- OA backbone unique
- EC generalist + Gateway + Attempt + Evidence
- PREPARE≠AUTHORIZE≠EXECUTE sur chaîne EC
- START ne mint plus LEGACY_UNBOUND depuis accept_start (F01)
- Nora tools sans Execute authority (intention D-ER-16)

## 8. AtelierNova — chaîne et causes

### 8.1 Faits d'observation (PROVEN, DB RO)

| Fait | Valeur |
|---|---|
| Project | AtelierNova / `prj:f0765c0c-…` / status active |
| Cycles | **0** |
| Trajectories | **0** |
| HumanDecisions | **0** |
| ExecutionContracts | **0** |
| Attempts | **0** |
| Transcript | 3 user + 3 assistant |

**User 0 (extrait) :** souhaite démarrer premier cycle ; priorité outil Cursor ; **ne pas** commencer par note de cadrage ; utiliser le cycle pour qualifier puis préparer ExecutionContract ; « accompagne-moi dans son démarrage ».

**Assistant 1 :** `[Mode réel] Contexte projet conservé — aucun cycle artificiel créé. Cette demande touche une frontière structurelle — une décision Pilote explicite reste nécessaire avant de préparer un contrat d'exécution. Rien n'a encore été exécuté.`

**User 2 :** valide recommandation ; **démarrer effectivement** ; propose Cadrage ; « Si adapté, **démarre-le** » ; précise que la décision **ne constitue pas** autorisation Cursor ; demande confirmation type/état après START.

**Assistant 3 :** **identique** au message structurel PREPARE.

**User 4 :** `ok go`

**Assistant 5 :** clarification structurante MW5-like / missing structural premises (pas de START ; pas d'EC).

### 8.2 Chaîne attendue Pilote vs chaîne observée

**Attendue (Cycle) :**
Pilot → Rec cadrage → Trajectory/prepare → HD si besoin → START → LPS active → (ensuite) Generic PREPARE mission.

**Observée :**
Pilot → F2 → **Generic PREPARE project-context** → structural block narrative → (ok go) → clarification — **jamais** START.

**Chaîne Generic PREPARE (aussi dans le tour) :**
Pilot message → intent → F2 eligible prepare → readiness structuralBlocked → `genericMissionClarificationText` — **PROVEN match**.

### 8.3 Causes

| ID | Cause | Statut |
|---|---|---|
| A1 | Branche Generic PREPARE (D-ER-17 project context) a produit la réponse Pilote | **PROVEN** (texte + code path) |
| A2 | Aucun CycleInstance / Trajectory préparés → START impossible même si gate atteint | **PROVEN** (inventory) |
| A3 | Ordre F2 : PREPARE peut short-circuit avant late START | **PROVEN** (structure code) |
| A4 | Intent analysis n'a pas armé `hasExplicitNewCycleFormalizationSignal` malgré langage démarrage cycle | **PLAUSIBLE** (mécanisme prouvé ; DTO non persisté) |
| A5 | Stance `accept_start` non honorée faute d'atteindre framing/late START | **PLAUSIBLE** |
| A6 | Regression introduite/élargie par `dac669d7` (#587) ouvrant admission sans cycle | **PROVEN** pour le mécanisme d'admission ; **PLAUSIBLE** comme déclencheur de la régression UX (besoin diff comportemental pré-#587 non rejoué REAL ici) |
| A7 | PR #588 Tool-First cause AtelierNova | **UNKNOWN / NOT INDICATED** — pas sur chemin START/PREPARE narrative |
| A8 | Contenu exact intentClass/signals du tour LIVE | **UNKNOWN** — non persisté |

**Preuve supplémentaire requise si arbitration fine :** dump structuré non-secret du DTO intent + branche F2 (mode diagnostic borné) sur rejeu Human QA — sans mutation doctrine.

## 9. Historique propagation

| Changement source | SHA / PR | Composant | Dépendance | Capacité affectée | Parcours user | Preuve |
|---|---|---|---|---|---|---|
| START consolidation chat-first | `a825c4ce` 2026-10-09 | `resolveChatFirstCycleStartGate` | startPrepared only | Cycle START | accept_start sans mint | tests F01 |
| Framing continuity | `6a4374ed` 2026-10-10 | framing + preCycle actions | Trajectory→prepare→start | V3-F05/F06 | Rec→START | tests framing |
| Generic execution enable | `45dee683`… | W2 prepare/authorize | EC chain | V3-F05 exec | PREPARE path | der16 tests |
| **projectContextAdmission** | **`dac669d7` ⊂ #587** | `orchestrateF2` | D-ER-17 S8 | Generic PREPARE **et** tours no-cycle | « aucun cycle artificiel » | log -L + AtelierNova |
| Tool-First R1/R2 | #588 `304e30e8` | materiality / Select-Start | Cursor REAL | F10 | pathless REAL | hors AtelierNova |

**Tests qui auraient dû détecter C1 :**
- COVERED partiel : `p6.der16.*` assert « Contexte projet conservé » comme **succès** D-ER-17 — renforce le chemin PREPARE
- MISSING : scénario « Pilote demande START Cadrage sans traj, refuse EC auth » doit **ne pas** répondre PREPARE structural ; doit guider Trajectory/prepare/START
- PARTIAL : `p6.hqa.f01.chatFirstCycleStartGate` — gate unitaire ; pas d'ordre F2 vs PREPARE
- MISSING : e2e AtelierNova-like (Fake) Project frais → démarrer Cadrage → cycle ACTIVE

## 10. CURRENT vs TARGET (D-ER)

| Décision | TARGET | CURRENT code (main) | Écart |
|---|---|---|---|
| D-ER-01 modèle générique | ADOPTED | generalist surface + legacy encore présents | TRANSITIONAL D-ER-19 |
| D-ER-02 worktree isolé | KEEP | KEEP | OK |
| D-ER-03 Report CLAIM | KEEP | KEEP | OK |
| D-ER-04…09 Review/Resolution/Reconciler/Deep | ADOPTED | partiel / en place variable | gaps PRR |
| D-ER-16 Nora tool PREPARE | ADOPTED | tools + même backend — implémenté ; E8 preuve bout-en-bout | NOT PROVEN E2E |
| D-ER-17 admission sans cycle/Artifact obligatoire | ADOPTED | **implémenté** project-context | **Sur-application conversationnelle** vs Cycle Lifecycle — écart d'orchestration, pas de la décision cible |
| D-ER-18 PREPARE≠AUTHZ≠EXECUTE | ADOPTED | préservé EC | OK EC ; confusion narrative conversation |
| D-ER-19 exit admissions spécialisées | ADOPTED | OPEN | OPEN |

**Ne pas inventer de nouvelle architecture :** la cible D-ER suffit ; le défaut est la **fusion de workflows** dans F2, pas l'absence de SoT EC.

## 11. Options architecturales

### OPTION A — Clarifier contrats / priorités dans orchestrateurs existants
- **Description :** garder `orchestrateF2` ; ajouter table de priorité explicite (Cycle START / formalization > Framing advance > Generic PREPARE > MW5) ; élargir exclusion PREPARE aux stances `accept_start` + raw cycle-start.
- **Conservé :** tout backbone.
- **Mods :** surtout `orchestrateF2` + signaux + tests ordre.
- **Avantages :** coût bas ; rollback facile ; pas de nouveau moteur.
- **Limites :** god-router demeure ; risque de régression par nouvelle branche.
- **Complexité :** Basse–Moyenne.
- **Risque régression :** Moyen (centralité F2).
- **Migration / persistence :** aucune migration DB.
- **Gouvernance :** inchangée EC.
- **Fake/Real :** tests Fake ordre + rejeu HQA.
- **Dette :** F2 complexity TRANSITIONAL.
- **Rollback :** revert patch priorités.
- **Coût relatif :** 1×

### OPTION B — Découpler responsabilités métier dans services existants + orchestration légère (RECOMMANDÉE)
- **Description :** extraire **CycleConversationCoordinator** (framing/trajectory/START) et **GenericExecutionConversationCoordinator** (prepare offer/HD/PREPARE) avec interfaces explicites ; `orchestrateF2` devient dispatcher par **intent métier discriminé** (cycle-lifecycle vs execution-mission) ; partager OA/materiality/HD services **sans** partager le workflow.
- **Conservé :** OA, EC, Attempt, Gateway, START gate fail-closed, D-ER-16…18.
- **Mods :** F2 split modules ; signaux d'intent unifiés (raw+analysis+stance) ; messaging Pilote séparé ; tests matrice transverse.
- **Avantages :** réduction propagation ; aligne « convergence info ≠ fusion responsabilités » ; livrable intégré unique.
- **Limites :** refactor orchestration non trivial ; discipline d'interfaces.
- **Complexité :** Moyenne.
- **Risque régression :** Moyen — mitigeable par matrice §12.
- **Persistence :** aucune migration ; offers session : exit plan documenté.
- **Gouvernance :** renforce frontières.
- **Fake/Real :** Fake couverture large ; REAL HQA AtelierNova rejeu.
- **Dette :** D-ER-19 legacy exit reste chantier lié mais borné.
- **Rollback :** feature-flag dispatcher / revert module.
- **Coût relatif :** 2–2.5×

### OPTION C — Remplacement borné d'une partie d'orchestration
- **Description :** remplacer le cœur F2 par un nouvel orchestrateur tour.
- **Avantages :** rupture dette god-router.
- **Limites :** risque moteur parallèle ; coût élevé ; menace preuves existantes.
- **Complexité / risque :** Élevée.
- **Coût relatif :** 4×+
- **Position :** **non recommandée** tant que B non tentée — contredit « pas de second moteur » si mal bornée.

### Recommandation (≠ décision Morris)

**OPTION B**, avec **patch de priorité Option A comme première livraison interne** du même chantier intégré (B en deux lots techniques, un seul chantier) :
1. Lot B1 (comportement) : discrimination Cycle vs Execution + exclusion PREPARE sur START/formalization — corrige AtelierNova.
2. Lot B2 (structure) : extraction coordinators + interfaces — réduit propagation future.

**Critères :** B gagne sur cohérence responsabilités, faible propagation, réutilisation backbone, absence moteur parallèle, preuve e2e, reversibility.

## 12. Non-régression — matrice de couverture

| Parcours | Couverture tests actuelle | Requis si correction |
|---|---|---|
| PROJECT CREATE | PARTIAL (onboarding) | COVERED smoke |
| PROJECT CONTEXT | PARTIAL | |
| RECOMMENDATION cycle | PARTIAL | Fake narrative |
| TRAJECTORY prepare/approve | PARTIAL framing tests | COVERED |
| HUMAN DECISION trajectory | PARTIAL | |
| CYCLE PREPARE from traj | PARTIAL | COVERED |
| CYCLE START accept_start | PARTIAL F01 | **COVERED + F2 order** |
| LPS ACTIVE after START | PARTIAL | COVERED |
| GENERIC PREPARE no cycle (D-ER-17) | COVERED der16 | **garder** + ne pas casser |
| GENERIC PREPARE + active cycle | COVERED der16 | |
| START sans EC | PARTIAL | COVERED AtelierNova-like |
| PREPARE sans START (exécution) | COVERED | |
| Refus START / defer / question | COVERED F01 routing | |
| Rec ambiguë | PARTIAL | |
| Stale decision / no CURRENT subject | PARTIAL Q18 | |
| Non-structural sans HD | PARTIAL Tool-First | |
| Structural avec HD | PARTIAL | |
| Reload lifecycle | PARTIAL UI rehydrate | |
| Cursor REAL R2 refuse | COVERED R2 tests | hors AtelierNova |
| Failure/recovery Attempt | PARTIAL PRR | |

**MISSING obligatoire pour B1 :**
`p6.arch.cycleStartNotCapturedByGenericPrepare.d0` — Project frais, message type User2 AtelierNova → **pas** de phrase « aucun cycle artificiel » + orientation framing/prepare cycle **ou** START si ready ; 0 EC.

**MISSING :** `p6.arch.okGoAfterCycleRec` — « ok go » après rec cycle ≠ clarification PREPARE alone.

## 13. Plan de correction intégré (RECOMMANDATION — NON EXÉCUTÉ)

### Scope
Un seul chantier P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY — Delivery ultérieur après GO Morris.

### Objectifs
1. Restaurer Cycle START conversationnel (AtelierNova).
2. Préserver D-ER-16…18 (PREPARE sans cycle artificiel pour **missions d'exécution**).
3. Découpler workflows Cycle vs Execution dans F2.
4. Aucune architecture parallèle ; aucune migration destructive.

### Ordre technique logique
1. **Specifier intent discriminant** unique (cycle-lifecycle vs execution-mission vs ambiguous→clarify).
2. **B1 priorités F2** + alignement `hasExplicitNewCycleFormalizationSignal` avec raw/stance.
3. **Framing continuity** : si START demandé et phase `< ready_to_start`, avancer/orienter prepare trajectory — **ne pas** basculer PREPARE EC.
4. **Messaging** : narratives Cycle ≠ narratives PREPARE/HD mission.
5. **Tests matrice** §12 (Fake) + allowlist CI.
6. **B2 extract coordinators** (même chantier si GO le permet ; sinon second lot toujours sous le même chantier).
7. **Human QA Morris** rejeu AtelierNova sur env QA (après Delivery GO).
8. **D-ER-19** : seulement taps legacy touchés — pas de big-bang retirement.

### Fichiers / composants impactés (estimés)
- `f2/orchestrateF2.ts` (dispatcher)
- nouveaux modules coordinator (B2) sous `f2/`
- `activeCycleGovernedContinuation.ts` (signaux)
- `composeF2PilotFacingNarrative.ts` / start routing (réutilise)
- `prepareGenericExecutionContractDraft.ts` (textes ; pas la sémantique EC)
- tests `__tests__/project-assistant/p6.arch.*`
- **pas** de changement doctrine files dans Delivery sauf truth-sync autorisé séparément

### Risques
- Casser E10 der16 no-cycle PREPARE — mitiger tests der16 en garde-fous
- Sur-détecter cycle START et bloquer missions exécution légitimes — tests négatifs
- Complexité extract B2 — feature flag / PR unique intégrée

### Critères de sortie chantier (Delivery futur)
- AtelierNova-like : START Cadrage → cycle ACTIVE observable LPS
- Generic PREPARE no-cycle **toujours** possible pour mission exécution explicite sans inventer cycle
- PREPARE≠AUTHORIZE≠EXECUTE inchangé
- Aucun second moteur
- Matrice §12 COVERED sur lignes critiques
- HQA Morris PASS borné (≠ P6 GLOBAL automatique)

### Rollback
Revert PR Delivery unique ; DB QA non migrée.

### Gates Morris
Voir §15.

### Preuve finale AtelierNova
Script HQA : mêmes messages User0/2/4 → cycle Cadrage ACTIVE ; pas de narrative « aucun cycle artificiel » sur demande START ; EC seulement après START + prepare mission.

## 14. Dettes classifiées

| Dette | Owner | Justification | Exit |
|---|---|---|---|
| F2 god-router fusion Cycle/PREPARE | Recovery chantier | propagation AtelierNova | Option B complète |
| D-ER-19 legacy admissions | P6 exec convergence | cible adoptée non exit | E11 |
| TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT | Tool-First | R2 fail-closed | enforcement technique ou policy exit |
| Generic prepare offers session-local | W2 continuity | continuity reload | durabilité offer ou acceptation documentée |
| PRR / D-ER docs PENDING flags stale | Docs truth-sync | post-#587/#588 | sync documentaire gouverné (hors ce cycle) |
| Intent DTO non auditables en HQA | Observability | UNKNOWN A4/A8 | diagnostic borné optionnel |

## 15. Décisions Morris requises (gates)

1. **D-ARCH-REC-01** — Approuver **OPTION B** (avec B1 priorités immédiates) comme stratégie du chantier intégré ? (A seule / B / C)
2. **D-ARCH-REC-02** — Confirmer invariant d'orchestration : **Cycle lifecycle intent preempts Generic PREPARE project-context** ; D-ER-17 demeure pour execution-mission sans cycle artificiel ?
3. **D-ARCH-REC-03** — Autoriser un futur GO Delivery **unique** du chantier (pas de microcycles Product) après acceptation review ?
4. **D-ARCH-REC-04** — Hors scope : truth-sync documentaire D-ER/PRR stale flags — GO docs séparé ?
5. **Non-décisions :** runtime v3 ; P6 GLOBAL PASS ; REAL Cursor safety ; suppression legacy massive.

**RECOMMANDATION ≠ DÉCISION.**

## 16. Fake / Real Qualification (ce cycle)

| Item | Valeur |
|---|---|
| Mode | STATIC + historical QA RO |
| Nora LIVE | non lancé |
| Cursor REAL | non lancé |
| Claims autorisés utilisés | défaut conception code ; dépendance transitive ; invariant statique ; tests constatés ; risque régression |
| Claims interdits | non émis (pas de REAL E2E PASS, pas de correction, pas P6 PASS, pas v3 ADOPTED) |

## 17. Réserves

1. Intent DTO LIVE non persisté → A4/A8 PLAUSIBLE/UNKNOWN.
2. Roadmap living tip non relu intégralement (fichier énorme) — état P6 GLOBAL NON ACQUIS confirmé par sources + Git.
3. Explore agents parallèles non indispensables au verdict (preuves directes suffisent).
4. Runtime :3020 observé vivant au moment de la revue — état process peut changer hors cycle.
5. Worktrees dirty tiers non audités en profondeur — non utilisés.

## 18. Validations STOP

| Contrôle | Résultat |
|---|---|
| Git Truth fiable | PASS |
| Product diff (analyse wt) | NONE hors Review Pack |
| DB mutation | NONE (RO) |
| Runtime change | NONE |
| REAL action | NONE |
| Options comparées | A/B/C |
| Morris decision inventée | NONE |
| Handoff | voir publication |

## 19. Verdict

**ARCHITECTURE REVIEW COMPLETE — CURRENT/TARGET QUALIFIED — INTEGRATED CORRECTION PROPOSED — MORRIS DECISION REQUIRED.**

**Statut :** **READY FOR MORRIS ARCHITECTURE REVIEW**
(avec réserves §17 — **READY WITH RESERVES** sur A4/A8 uniquement ; ne bloque pas l'arbitrage Option B / preempt START).

### Instruction ChatGPT
Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Contrôler faits vs hypothèses, CURRENT, frontières, couplages, causes AtelierNova, options, recommandation, plan, risques, dettes/exit, gates Morris.
Ne pas générer de prompt Delivery avant qualification de la décision architecturale.
