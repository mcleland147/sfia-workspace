# 03 — Composants fonctionnels et responsabilités

| Champ | Valeur |
|-------|--------|
| **Statut** | Conception fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-design/v3-native-option-a` |
| **Gate** | `GO CONCEPTION FONCTIONNELLE — SFIA STUDIO V3-NATIVE — TRANCHE VERTICALE OPTION A` |
| **Anti-claims** | Pas DESIGN VALIDATED · Pas runtime migré · Pas schemas |
| **Document** | `03-functional-components-and-responsibilities.md` |

Légende maturité actuelle : **DOCUMENTED** (ce pack) · runtime existant = source **ADAPT/REPLACE** (`09`).

## Catalogue

### 1. Conversation Orchestrator
- **Rôle :** surface dominante ; route messages ; maintient fil ; invoque sous-composants.
- **In :** UserMessage, sessionId, projectId?
- **Out :** ConversationTurn, UI directives.
- **Limites :** ne décide pas · ne mute pas LPS structurant sans Confirmation.
- **Réutilisation :** OPS1 conversation service · D1 intake — **ADAPT**.

### 2. Intent Understanding
- **Rôle :** IntentionObserved, ambiguïtés, hypothèses, confiance.
- **In :** message, pièces, LPS partiel.
- **Out :** IntentAnalysis.
- **Autorité :** cognitive only.
- **Réutilisation :** D1 analyzeIntent — **ADAPT** (sans MethodMode).

### 3. Doctrine Resolver
- **Rôle :** résoudre DoctrinePackage v3 piné ; digests ; allowlist.
- **In :** project pin / default Studio.
- **Out :** DoctrinePackageRef | DOCTRINE_UNRESOLVED.
- **Règle :** fail-closed · **interdit** method/ v2.6.
- **Réutilisation :** remplacer `canonicalPaths/sourceLoader/contextResolver` — **REPLACE**.

### 4. Knowledge and Context Resolver
- **Rôle :** assembler contexte autorisé (package + LPS + preuves Git) avec provenance.
- **Out :** ResolvedContext.
- **Réutilisation :** parts sessionContext — **REWORK**.

### 5. CKC Resolver
- **Rôle :** detailed/synthetic/absent→synthetic silencieux ; jamais UI brute.
- **Out :** CkcResolution (status, version, digest, guidance opaque).
- **Autorité :** aucune exécution.
- **Réutilisation :** aucune runtime — **REPLACE** (créer).

### 6. Epistemic State Manager
- **Rôle :** tags Observation/Hypothesis/Option/Recommendation/Decision/Reserve/Risk/Evidence/Claim.
- **Transitions :** strictes (`06`).
- **Réutilisation :** OPS1 proposal/gate labels — **ADAPT**.

### 7. Contradiction Manager
- **Rôle :** détecter C-SRC…C-TRAJ-DEP ; sévérité ; gate si structurante.
- **Out :** Contradiction[] · CONTRADICTION_OPEN.
- **Réutilisation :** quasi absent — **REPLACE**.

### 8. Living Project State Manager
- **Rôle :** CRUD versionné LPS ; invariants ; projection panneau.
- **Réutilisation :** D1 project tables partielles — **REWORK** vers LPS.

### 9. Trajectory Engine
- **Rôle :** ProjectTrajectory candidate/validated ; replanif gouvernée.
- **Réutilisation :** schema modeled trajectory — **ADAPT** concept ; runtime **REPLACE**.

### 10. Recommendation Engine
- **Rôle :** options + reco ou abstention.
- **Limite :** reco ≠ décision.
- **Réutilisation :** GPT propose OPS1/D1 — **ADAPT**.

### 11. Human Decision Manager
- **Rôle :** HumanDecision create/amend/supersede ; effets LPS.
- **Réutilisation :** OPS1 gate_decisions — **ADAPT** vers objet unifié.

### 12. Confirmation Manager
- **Rôle :** N1/N2/N3 ; expiration ; annulation.
- **Réutilisation :** D1 confirmations partielles — **ADAPT** (unifier CC-D06).

### 13. Execution Contract Builder
- **Rôle :** draft→proposed→confirmed ExecutionContract natif.
- **Réutilisation :** OPS1 ExecutionContract — **ADAPT** (ARB-V3-03).

### 14. Agent Capability Resolver
- **Rôle :** capability/authority matrix ; refuse CAPABILITY_MISSING / AUTHORITY_DENIED.
- **Réutilisation :** allowlists OPS1 — **ADAPT** vers AgentCapability.

### 15. Execution Adapter
- **Rôle :** exécuter contrat ; export MD Cursor **adaptateur** optionnel.
- **Réutilisation :** cursorExecutionAdapter + instantiator — **ADAPT** (MD ≠ natif).

### 16. Evidence Manager
- **Rôle :** Evidence links ; complétude ; fraîcheur.
- **Réutilisation :** execution reports OPS1 — **ADAPT**.

### 17. ReviewBundle Manager
- **Rôle :** bundle hybride + handoff export/résilience (D2).
- **Réutilisation :** patterns review pack — **ADAPT**.

### 18. Debt Manager
- **Rôle :** DebtItem open/accepted/paid.
- **Réutilisation :** absente — **REPLACE**.

### 19. Maturity and Anti-Claim Evaluator
- **Rôle :** maturité distribuée ; refuse claims non prouvés.
- **Réutilisation :** absente runtime — **REPLACE**.

### 20. Audit and Provenance Manager
- **Rôle :** append-only events conceptuels ; provenance hierarchy.
- **Réutilisation :** d1_audit_events / OPS1 journal — **ADAPT**.

## Événements fonctionnels (minimum)

IntentCaptured · DoctrineResolved · DoctrineFailed · CycleQualified · CkcResolved · ClarificationAsked · LpsUpdated · TrajectoryProposed · OptionsPresented · DecisionRecorded · ConfirmationRequested · ConfirmationGranted · ContractBuilt · ExecutionStarted · ExecutionCompleted · ExecutionFailed · EvidenceAttached · ReplanRequired · StopRaised
