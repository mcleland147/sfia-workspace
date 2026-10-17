# SFIA STUDIO — P6-HQA-FRESH-01
## CURSOR REAL CLI — SESSION CONNECTIVITY PREFLIGHT

**Horodatage:** 2026-10-17 07:29:42 CEST (Europe/Paris)
**GO Morris consommé:** Nora REAL + Cursor REAL pour P6-HQA-FRESH-01 — préflight connectivité uniquement
**Campagne:** P6-HQA-FRESH-01
**Parent:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Cycle:** 9 — QA / validation · CRITICAL

---

## 1. Verdict

**CURSOR CLI REAL — CONNECTED AND VERIFIED**

**STUDIO CURSOR REAL GATEWAY — READY FOR CONTROLLED ACTIVATION**

Ping REAL ask-mode: stdout exact `SFIA_CURSOR_REAL_PING_OK` · exit 0 · dirty Product inchangé.

Gateway Product: binaire résolu = App `cursor` · argv préfixe `agent` · **compatible**.

Runtime actuel PID 41566: `SFIA_STUDIO_CURSOR_REAL` effectif **0** (non activé) — activation contrôlée reste une action Morris (restart env), **non effectuée** ce cycle.

≠ STUDIO CURSOR E2E PASS · ≠ ExecutionAttempt · ≠ Execute.

---

## 2. Git Truth

| Champ | Valeur |
|-------|--------|
| Branche | fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare |
| HEAD | b4c1d86211d372f7b0685be7ce8a5ba7de598e37 |
| origin/main | 896ff59c704bfa76df1da1a51705aaf948c1cf0c |
| Staged | vide |
| Dirty fingerprint | `1c8005bf124b365a64b25a7260cc088007207dcea3b71c2b5b1987611ba74ff1` |
| Product mutate | AUCUNE |

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedGenericMissionDecisionCard.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/genericMissionPresentation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionApplicability.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionContinuity.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

---

## 3. Sources

Template/routing/guardrails · P6 07 · doctrine 30/32/34/35/37 · composeStudioProductRealBoundary · studioCursorRealLaunchGateway (resolveCursorBinPath + argv) · nodeCursorProcessRunner · ops1 cursorExecutionAdapter (réf.) · handoff HQA-FRESH-01 init.

---

## 4. Convergence Pre-check

TARGET: CLI REAL joignable + gateway compatible. CURRENT: HQA fresh initée; UI auth Morris; CLI/gateway non vérifiés avant ce cycle. KEEP runtime/gateway/CLI/OA. GAP clos pour connectivité CLI; activation gateway runtime encore OFF. EXIT: ping REAL + résolution binaire.

---

## 5–8. CLI executable / version / auth / ping

| Item | Value |
|------|-------|
| Shell PATH `agent`/`cursor-agent`/`cursor` | ABSENT (`~/.local/bin` not on PATH) |
| Authenticated CLI tested | `/Users/morris/.local/bin/agent` → 2026.09.26-dd393fe |
| Auth | LOGGED IN (identity redacted) |
| App cursor (gateway 1st pick) | `/Applications/Cursor.app/.../bin/cursor` v3.25.6 |
| `cursor agent status` | LOGGED IN (exit 0) |

### Ping attempt 1 (no --trust)
Exit 1 — Workspace Trust Required. Dirty unchanged.

### Ping attempt 2 (authorized options)
Command: `agent --trust --mode=ask -p --output-format text "…SFIA_CURSOR_REAL_PING_OK…"`

- `--force` / `--yolo` / `--sandbox disabled`: **NOT used**
- `--trust`: used (required for non-interactive ask; allowed by contract)
- Exit: **0**
- Latency: **5.769 s**
- Stdout: `SFIA_CURSOR_REAL_PING_OK`
- Stderr: empty
- Git dirty unchanged: **YES**
- Second involuntary call: none after success

---

## 9–11. Provider / gateway binary / runtime flags

### resolveStudioCursorBinPath (Product)
Order: `SFIA_CURSOR_BIN` → App `cursor` → `~/.local/bin/cursor-agent`.

**Resolved (current env):** App `cursor`.

### Gateway argv (Product)
Always prefixes `agent` then `--print` / workspace / `--trust` / …

Therefore executable must be App `cursor` (or equivalent that accepts `agent` subcommand), **not** bare `cursor-agent` unless argv adapted.

**Compatibility: PASS** with default resolution.

### Runtime :3020
| | |
|--|--|
| PID | 41566 next-server 15.5.20 |
| cwd | candidate app |
| DB | hqa-fresh-01 virgin (0 projects, 0 attempts) |
| SFIA_STUDIO_CURSOR_REAL (process) | **0** (HQA init override) |
| Campaign `.env.local` file CURSOR_REAL | 1 (not loaded by candidate — no candidate `.env.local`) |
| OPS1_CURSOR_REAL | UNSET |
| SFIA_CURSOR_BIN | UNSET |

**Not restarted. Not auto-enabled.**

---

## 12. Classification A–F

| Dim | Status |
|-----|--------|
| A CLI installed | YES |
| B CLI authenticated | YES |
| C CLI REAL provider reachable | YES |
| D Studio gateway binary compatible | YES |
| E Studio gateway currently enabled | **NO** |
| F Studio Product E2E proven | **NO** |

---

## 13. Nora (config only — no LIVE call)

OPENAI_API_KEY present · OPENAI_MODEL=gpt-5.6-luna · **no provider call this cycle**.

---

## 14. Fake / Real Qualification

| | |
|--|--|
| Fake for ping | NONE |
| REAL | agent ask-mode provider call → SFIA_CURSOR_REAL_PING_OK |
| Parity | Authenticated agent CLI ↔ App cursor `agent` subcommand used by gateway |
| Realism gap | Ping ≠ Product ExecutionAttempt E2E |
| Bounded proof | Ping only — contract honored |

---

## 15. Réserves / stops / next activation

| Item | Note |
|------|------|
| PATH | `~/.local/bin` absent du PATH shell agent — utiliser chemin absolu ou intégrer PATH |
| Trust | Non-interactif nécessite `--trust` |
| Gateway enable | Nécessite process env `SFIA_STUDIO_CURSOR_REAL=1` + restart contrôlé Morris |
| SFIA_CURSOR_BIN | Ne pas pointer vers `cursor-agent` sans revoir argv |
| E2E | Hors scope — GO Execute distinct |

Conditions activation contrôlée (non exécutées):
1. Confirmer GO toujours valide pour activation runtime.
2. Restart Studio avec virgin DB + `SFIA_STUDIO_CURSOR_REAL=1` + `CURSOR_REAL` exclusif vs deterministic boundary.
3. Vérifier preflight runtime Product.
4. Ne lancer Execute qu'après HD/EC gouvernés.

---

## 16. Product mutation check

0 ExecutionAttempt · 0 Execute · dirty fingerprint stable · staged vide.

---

## 17. Evidence paths

- `hqa-fresh-01/raw-evidence/cursor-cli-preflight/preflight-result.json`
- `ping2-stdout.txt` / `ping2-stderr.txt` / `ping-stderr.txt` (trust fail)
- ledger append runId `P6-HQA-FRESH-01-CURSOR-CLI-PREFLIGHT-20261017`

---

## 18. Instruction ChatGPT

Lire sfia/review-handoff → sfia-review-handoff/latest-chatgpt-review.md

SFIA STUDIO — P6-HQA-FRESH-01 CURSOR REAL CLI SESSION PREFLIGHT CRITICAL EVIDENCE REVIEW.

Contrôler ping réel, binaire gateway, flags runtime, absence mutation Product.

---

## 19. Fin

Handoff: docs(review-handoff): verify Cursor REAL CLI preflight
