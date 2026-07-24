# 02 — Domaines fonctionnels et context map

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Base conception** | FD-OA-01…06 **VALIDATED** · commit conception `e22bc243…` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas coexistence doctrinale |
| **Code / schemas / SQL / infra** | **Interdits** |
| **Document** | `02-functional-domains-and-context-map.md` |

## 1. Domaines confirmés (A–H)

| ID | Domaine | Responsabilités clés |
|----|---------|----------------------|
| **A** | Conversation & Intent | Intention · clarification · session · match projet new/existing |
| **B** | Doctrine & Knowledge | DoctrinePackage · digests · CKC · contexte · provenance · fraîcheur |
| **C** | Project State | Project · LPS · versions · épistémique persisté · dette · risques · contradictions · maturité |
| **D** | Cycle & Trajectory | CycleType/Instance · qualification · trajectoire · replan · exit criteria |
| **E** | Decision & Confirmation | Options · reco · HumanDecision · gates · N1–N3 · supersession |
| **F** | Execution Governance | ExecutionContract · capability · authority · policy · idempotence · stop |
| **G** | Execution Adapter | Transform contrat→format agent · export MD optionnel · invoke · timeout · résultat brut |
| **H** | Evidence & Review | Evidence · ReviewBundle · complétude · claims · audit · capitalisation |

**Non fusionnés :** G distinct de F (ARB-V3-03 / FD-OA-06 — adaptateur hors cœur).
**Non scindés :** Contradiction & Maturity restent ownership C avec services transverses consommés par E/H.

## 2. Context map (relations minimales)

| Fournisseur | Consommateur | Objet | Autorité objet | Sync | Fail-closed | Trace |
|-------------|--------------|-------|----------------|------|-------------|-------|
| A | B | IntentAnalysis | cognitive | sync | continue clarification | correlationId |
| B | A/C | DoctrinePackageRef / ResolvedContext | package digests | sync | DOCTRINE_UNRESOLVED stop | packageRef |
| A | C | Epistemic drafts / clarifications | temporaire jusqu’à Record | sync | — | turnId |
| B | C | doctrine pin / provenance | B owns resolve ; C owns pin LPS | sync | stop si unresolved | digest |
| C | D | LPS snapshot | C | sync | STATE_CONFLICT | lpsVersion |
| D | E | Trajectory candidate / CycleQualification | D proposes | sync | — | trajectoryVersion |
| E | F | HumanDecision + Confirmation | E | sync | DECISION/CONFIRMATION_REQUIRED | decisionId |
| F | G | ExecutionContract confirmed | F | sync | AUTHORITY/CAPABILITY deny | contractId |
| G | H | ExecutionResult brut | G | async-ish | EXECUTION_FAILED | attemptId |
| H | C | Evidence / claim eval | H owns evidence ; C applies LPS | sync | EVIDENCE_INCOMPLETE | evidenceId |
| H | D | completion signals | H | sync | — | |
| C (Contradiction) | E | Contradiction blocking | C detects ; E gates | sync | CONTRADICTION_OPEN | contradictionId |
| C (Maturity) | A–H | claim allow/deny | C evaluator | sync | ClaimRejected | claimId |

## 3. Ownership règle

Un objet a **un** domaine propriétaire d’écriture. Les autres domaines lisent via contrats fonctionnels.
