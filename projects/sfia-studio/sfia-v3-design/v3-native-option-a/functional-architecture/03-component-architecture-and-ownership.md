# 03 — Architecture de composants et ownership

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Base conception** | FD-OA-01…06 **VALIDATED** · commit conception `e22bc243…` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas coexistence doctrinale |
| **Code / schemas / SQL / infra** | **Interdits** |
| **Document** | `03-component-architecture-and-ownership.md` |

## Mapping 20 composants → domaines

| ID | Composant | Domaine | Possède | Traitement actif |
|----|-----------|---------|---------|------------------|
| C01 | Conversation Orchestrator | A | ConversationTurn, SessionRef | ADAPT OPS1/D1 |
| C02 | Intent Understanding | A | IntentAnalysis | ADAPT D1 |
| C03 | Doctrine Resolver | B | DoctrinePackageRef | REPLACE sfia-context |
| C04 | Knowledge/Context Resolver | B | ResolvedContext | REWORK sessionContext |
| C05 | CKC Resolver | B | CkcResolution | REPLACE (créer) |
| C06 | Epistemic State Manager | C | EpistemicItem statuses | ADAPT labels OPS1 |
| C07 | Contradiction Manager | C | Contradiction | REPLACE |
| C08 | Living Project State Manager | C | LPS versions | REWORK D1 Project |
| C09 | Trajectory Engine | D | ProjectTrajectory | REPLACE runtime |
| C10 | Recommendation Engine | D/E* | Option/Recommendation (non décision) | ADAPT GPT propose |
| C11 | Human Decision Manager | E | HumanDecision | ADAPT gate_decisions |
| C12 | Confirmation Manager | E | Confirmation N1–N3 | ADAPT D1 confirm |
| C13 | Execution Contract Builder | F | ExecutionContract | ADAPT OPS1 |
| C14 | Agent Capability Resolver | F | AgentCapability binding | ADAPT allowlists |
| C15 | Execution Adapter | G | Attempt/raw result · MD export | ADAPT cursor adapter |
| C16 | Evidence Manager | H | Evidence | ADAPT reports |
| C17 | ReviewBundle Manager | H | ReviewBundle | ADAPT review pack |
| C18 | Debt Manager | C | DebtItem | REPLACE |
| C19 | Maturity/Anti-Claim Evaluator | C | ClaimEvaluation | REPLACE |
| C20 | Audit/Provenance Manager | H/C** | AuditEvent, ProvenanceRecord | ADAPT journal/audit |

\* C10 produit pour E ; n’écrit pas HumanDecision.
\*\* C20 transverse lecture ; écriture audit append-only ownership H avec miroir C pour LPS history.

## Par composant — règles communes

- **Commandes :** uniquement celles du domaine (voir `05`).
- **Dépendances interdites :** B↛method/ · G↛décision · A↛ExecutionContract confirm · F↛MD comme source.
- **Échec :** fail-closed du domaine · escalade E si structurant.
- **Observabilité :** IDs corrélation `07`.

## Interdiction ownership multiple

LPS écriture = **C08 seul**.
HumanDecision = **C11 seul**.
ExecutionContract statut = **C13/F seul** (G ne confirme pas).
