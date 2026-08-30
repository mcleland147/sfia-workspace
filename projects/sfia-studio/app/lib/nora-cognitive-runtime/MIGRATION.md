# Nora Option C cognitive runtime — migration status

**Target:** OD-04 Option C (Agents SDK Runner + Product SQLite Session +
`callModelInputFilter` + SFIA `routeToolCall`).

**Current state (after Nora legacy generic loop retirement):**
- Runner/Fake deterministic convergence = proven
- Nora F1 path = **single Agents Runner** (`orchestrateTurn` →
  `runNoraCognitiveTurn` → `runNoraAgentsTurn`)
- **No Nora runtime selector** (`resolveNoraCognitiveRuntime` deleted)
- **No Nora `"legacy"` runtime kind**
- **No Nora comparator dependency** on `runToolCallingLoop`
- **No `NORA_COGNITIVE_RUNTIME` F1 switch**
- Product SQLite Session + `createProviderAgentsModel` (any
  `ConversationProvider` with `completeRound`, including Fake/fixture) remain
- Platform `runToolCallingLoop` remains **independent infrastructure** for
  OPS1 / D1 consumers (not Nora F1)

**Next gate:** OPTION C PROJECT GIT INTEGRATION
- Requires explicit resolution/requalification of GIT-DEBT-MW1-01 first
- Distinct Morris GO for project commit/push/PR
- Then MW0 regression/parity on integrated Option C
- MW1 still incomplete / not integrated

**Not adopted here:** Responses Compaction, SDK HITL≠HD, Trace≠Evidence,
MW1 closure, MW0 Option C parity.
