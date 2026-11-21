## Ensemble 08 Capacité B — AS-IS (code-backed)

### 1. Current flow: USER → semantic qual → plan → HumanDecision → authorizePublication → D7 → D9

**Turn entry (`postUserMessageAndNora`)**  
`/Users/morris/Projects/sfia-workspace-feat-next-ensemble08-git-publications-nora/projects/sfia-studio-next/web/src/domains/conversation/service.ts`

1. **Recovery hooks** (project linked): `recoverAuthorizedNoraMissions`, `recoverPendingMissionContinuation`.
2. **Turn fence**: `reserveTurnCommand` → Nora `generateNoraReply` → `stashTurnQualification` (durable qual on `conversationTurnCommands.resultJson`).
3. **Projection**: `deriveThreadTurnKind`, `projectStudioEffects` (`semantic-qualification.ts`) — publication from `d7.prepare_publication` / `d7.dispatch_publication` / `d9.git_integration` + `publicationPath` / `pathHint`.
4. **D5/D6 pilotage only** (not Git): if `extractPilotageBinding` is unambiguous → `applyConversationalAuthority` → `executePilotageCommand` → `insertHumanDecision` for pilotage ops (`RECORD_DECISION`, cycles, etc.). Git publication is **outside** this path.
5. **D4**: CREATE/REVISE from qual + fence when `allowOwnerEffects`.
6. **D7 prepare (Nora mission only)**: when D4 AVAILABLE + `missionIntent.wantsPublish` + path present + project linked → `preparePublicationForMission` → `effect-service.preparePublication` with `correlationKey` `pub:mission:<clientTurnKey>` → attempt `PREPARED`, mission `AWAITING_PILOT_AUTH`. Explicit observability: `authorize_called: false`.

**HumanDecision for publication** — only via **`authorizePublication`** (`effect-service.ts`):

- Requires `inspectedFingerprint === plan.inspection.inspectionFingerprint`, `inspectionAllowsAuthorization`, status `PREPARED`.
- `insertHumanDecision` with `kind: GIT_PUBLICATION_MANDATE`, `sourceKind: GIT_EFFECT`, `sourceRef` / `objectRef` = `attemptId`, `effectConditions` JSON (publication + inspection fingerprints + envelope).
- Then `AUTHORIZED` on `effect_attempts`.

**Dispatch / D9**  
- Classic: `POST .../dispatch` → `dispatchPublication` → `assertCurrentGitAuthority` at each mutation step.
- Nora mission: `authorize` route may call `resumeMissionAfterPublicationAuthorize` when `attemptIsNoraMission` (`correlationKey` prefix `pub:mission:`) → auto `dispatchPublication` + reconcile + thread restitution.

**D8 / proofs**  
`assertPublicationEffectProof` (`publication-steps.ts`) before `COMPLETED`; `qualifyObservedFacts` (`proofs/qualify.ts`) does not infer acceptance from Git alone.

```920:1021:projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
export async function authorizePublication(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  statement: string;
  inspectedFingerprint: string;
}) {
  // ... inspection fingerprint match, PREPARED only ...
  const decisionId = await insertHumanDecision(tx, {
    // ...
    sourceKind: "GIT_EFFECT",
    sourceRef: input.attemptId,
    kind: "GIT_PUBLICATION_MANDATE",
    objectRef: input.attemptId,
    statement: input.statement,
    effectConditions: conditions,
  });
```

```2541:2616:projects/sfia-studio-next/web/src/domains/conversation/service.ts
    if (missionIntent.needsExplicitPath) { /* AWAITING_CLARIFICATION */ }
    else if (await requireTurnOwnership(...)) {
      const prepared = await preparePublicationForMission({ ... });
      // ...
      missionProjection = { status: "AWAITING_PILOT_AUTH", ... };
      emitObs({ meta: { authorize_called: false } });
```

---

### 2. Where confirmation is forced vs optional

| Stage | Forced | Optional / absent |
|--------|--------|-------------------|
| D2 project create | `AWAITING_PILOT_ACT` — explicit create act | Nora cannot create project |
| Publication path | `needsExplicitPath` → `AWAITING_CLARIFICATION`, no D7 | Path in qual → prepare allowed |
| D6 publication mandate | **Always** separate act: API `authorizePublication` + `inspectedFingerprint` | No in-chat authorize; mission text says authorize required (`formatMissionAck` / `pilotage-effect-restitution`) |
| D7 dispatch after auth | Nora mission: auto via authorize route / `recoverAuthorizedNoraMissions` | Classic `pub-*` keys: manual dispatch |
| D5/D6 pilotage | `applyConversationalAuthority` only if unambiguous `pilotageOperation` in qual | Ambiguous → clarification, no HD |
| Merge | Separate `prepareMerge` → `authorizeMerge` → `dispatchMerge`; not implied by publish qual | REAL: `mergePullRequest` hard-blocked |

**S05 / mission blocking**: unresolved mission in `AWAITING_PILOT_AUTH` (among others) can set `allowOwnerEffects = false` for new `INTENTION_EFFET` / `INCERTAIN` turns — so a second chat message is **not** a reliable authorize path today; panel/API is.

---

### 3. Conversational mandate admission — exists?

**No, for Git publication.**

- E08 §6.2 target: USER explicit demand → D6 records mandate on **exact plan** without redundant UX confirm.
- **AS-IS**: USER text + Nora qual can drive D4 + D7 **prepare** only; HD is **never** created from conversation turn (`humanDecisionCreated` only reflects pilotage authority, line ~2884).
- `applyConversationalAuthority` (`conversation-authority.ts`): D5/D6 **pilotage** only; no `GIT_PUBLICATION_MANDATE`.
- `extractPilotageBinding` (`semantic-qualification.ts`): caps `d5.pilotage_command` \| `d6.human_decision` + `pilotageOperation` enum — **no** publish/merge ops.
- HD provenance for Git: `sourceKind: GIT_EFFECT`, `sourceRef: attemptId` — **not** `USER_MESSAGE` + message id (contrast pilotage `sourceKind: USER_MESSAGE` in `executePilotageCommand`).

Nora qualification is explicitly not authority (`semantic-qualification.ts` header; knowledge extractor: “never HumanDecision”).

**Partial precedent (not Git):** conversational pilotage with durable qual + `USER_MESSAGE` source is production-tested (`ml3-pilotage.pg.test.ts` F01/C01). That pattern could be **adapted** for publication without treating qual as HD.

---

### 4. Mission continuity / resume after D7 / D9

Implemented in `mission-continuity.ts` + hooks in `service.ts`:

| Mechanism | Behavior |
|-----------|----------|
| `pub:mission:*` | Server-only Nora mission marker; auto-resume gated on this |
| `preparePublicationForMission` | D7 prepare with mission correlation |
| `resumeMissionAfterPublicationAuthorize` | After HD: dispatch/reconcile, `cognitiveContinueFromFacts`, stable assistant message per attempt |
| `recoverAuthorizedNoraMissions` | P0-B: next turn picks up `AUTHORIZED`/`DISPATCHED` Nora attempts |
| D2→D4 | `continueAfterProjectCreated` / `recoverPendingMissionContinuation` (`intent-conduction.ts`) |
| Post-D4 cognitive continue | Facts block before optional D7 (`service.ts` ~2490+) |

**Gap vs E08 §6.4:** resume after **conversational** authorize is undefined because conversational authorize does not exist; resume after **panel/API** authorize is proven (`mission-continuity-accept01.pg.test.ts`).

---

### 5. Documentary publish REAL status; merge REAL hard-block

**REAL documentary**

- `resolveConfiguredEffectProviderMode()` → `STUDIO_GITHUB_PROVIDER=real`.
- Mutations only if `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary` (`real-github-provider.ts` `isBoundedRealMutationAllowed`).
- Path policy: documentary paths only (`classifyPublicationPath`, `real-github-mutations-gate.test.ts`).
- Permissions at effect point: REAL requires `permissions.source === "user_token_observed"` (`effect-authority.ts`).
- Steps: frozen nominal `CREATE_BRANCH→PUBLISH_FILE→OPEN_PR` (`publication-steps.ts`); proof gate for COMPLETED.

**Merge REAL**

```383:391:projects/sfia-studio-next/web/src/domains/integrations/real-github-provider.ts
  async mergePullRequest(_input: { ... }): Promise<{ merged: boolean; sha: string }> {
    return mutationBlocked("mergePullRequest");
```

- Merge **logic** exists (`prepareMerge`, `authorizeMerge`, `dispatchMerge` with `GIT_MERGE_MANDATE`, PR HEAD/base re-checks).
- **Provider** blocks REAL merge regardless of D6; SCRIPTED can exercise merge in tests.

---

### 6. Symbols/files — tension with E08 **B03** (plan outside mandate / diff divergent)

Functional B03 = mandate scope vs executable plan + requalification before effect.

| Concern | Symbol / location | Behavior |
|---------|-------------------|----------|
| Inspection drift | `authorizePublication` | `REQUIRES_REQUALIFICATION` if `inspectedFingerprint` ≠ plan |
| Plan vs attempt fingerprint | `authorizePublication`, `dispatchPublication` | `publicationEffectFingerprint(plan)` vs `row.fingerprint` |
| Mandate vs plan at dispatch | `assertCurrentGitAuthority` | `mandateFp` must equal `ctx.fingerprint`; decision vs attempt `effectConditions` mismatch → requal |
| Revision / base staleness | `dispatchPublication` | revision not AVAILABLE, content fingerprint, REF_STALE inspection kinds |
| **Missing for B03** | — | No function that checks **USER utterance / qual envelope** ⊆ **PublicationPlan** (repo, path, branch, doc/rev); only technical fingerprints |
| Path omission | `projectStudioEffects` | `needsExplicitPath` — blocks prepare, not a mandate violation recorder |
| Qual ≠ mandate | `extractPilotageBinding` vs publish intents | Publish intent does not create D6 binding |
| HD not tied to USER act | `insertHumanDecision` in `authorizePublication` | `GIT_EFFECT` + attemptId only — weak audit link to conversational mandate (E08 §6.2 item 1) |
| RG-GOV-024 | `authorize/route.ts` | Client must supply `inspectedFingerprint` — “inspect then act” preserved; E08 “no redundant button” ≠ implemented in chat |

Tests aligned with B03 **technical** side: `git-collaboration.pg.test.ts` B6 (wrong inspection fingerprint refused).

---

### 7. Recommended minimal compatible path vs STOP (Morris D2)

**Compatible minimal path (does not violate stated constraints)**

1. **New owner adapter** (or extend D6 conversation bridge **only for Git**), invoked when:
   - Authenticated USER message id exists (`messages` COMPLETE).
   - Durable qual on same turn (or bound earlier turn) shows explicit publish intent with resolved path/repo (or deterministic path rule — D2 if convention-based).
   - Matching `effect_attempts` `PREPARED` for mission or explicit `attemptId`.
2. Call existing **`authorizePublication`** (no bypass):
   - `statement`: pilot utterance slice or qual `parameters.statement` (not Nora `replyDraft`).
   - `inspectedFingerprint`: from **server-stored plan** at authorize time (same gate as panel; satisfies fingerprint/restrictions/freshness).
3. **Extend `effectConditions` envelope** (additive JSON): `userMessageId`, optional `semanticIntentId`, `clientTurnKey` — proven USER act without fabricating HD from qual alone.
4. Optional same-turn: after prepare in `service.ts`, if scope check passes, authorize + `resumeMissionAfterPublicationAuthorize` for `pub:mission:*` only — replaces redundant **second** confirm while keeping D6 insert + dispatch authority chain.
5. **B03 guard**: `assertPublicationMandateCoversPlan({ utterance \| qualIntent, plan })` → else `AWAITING_CLARIFICATION` / `REQUIRES_REQUALIFICATION`, no dispatch.

Still respects: no qual-as-HD, no skip `authorizePublication`, no silent RG-GOV-024 removal (inspection still computed at prepare; authorize still checks fingerprint), publish ≠ merge.

**STOP — need Morris D2 before implementation**

- Binding **single** USER message as mandate for prepare+authorize+dispatch in **one** turn when inspection was produced milliseconds earlier in same request (interpretation of RG-GOV-024 / RG-REAL-013 vs E08 §6.2).
- `sourceKind` for Git HD: stay `GIT_EFFECT` vs adopt `USER_MESSAGE` + dual `sourceRef`.
- Deterministic “conventional path” without explicit path in utterance (functional contract allows only if validated rule exists).
- Enabling REAL merge (explicitly out of current REAL provider contract).

---

### 8. What can proceed if D6 conversational STOP

Without conversational mandate admission:

- **Capacité A**: `git-read-tools.ts`, integrations read paths, Nora tool scope.
- **Nora mission prepare + mission projection** (`AWAITING_PILOT_AUTH`, correlation keys, P1-E path gate).
- **Panel/API flow**: prepare → inspect UI → `authorize` → dispatch; classic vs Nora auto-resume split.
- **P0-B recovery**, restitution, idempotent mission messages.
- **REAL documentary** behind env gates + authority/fingerprint tests.
- **Merge** in SCRIPTED / full merge chain unit+PG tests; REAL merge remains blocked until provider + D2 scope.
- **S05**, turn fencing, durable qual stash/replay.
- **UI/list publications** (data model exists; E08 list API called out as missing in construction docs).

---

### Test map (requested)

| Area | Files |
|------|--------|
| Mission / auth gap | `tests/integration/mission-continuity-accept01.pg.test.ts` (P0-D6, ACCEPT-01, P0-B) |
| Intent / mobilization | `tests/integration/intent-continuity-global.pg.test.ts` (S09 HD via authorize only) |
| Fingerprints / B6 | `tests/integration/git-collaboration.pg.test.ts` |
| Mission helpers | `tests/unit/mission-continuity.test.ts` |
| REAL gate | `tests/unit/real-github-mutations-gate.test.ts`, `tests/unit/github-app-auth-real-provider.test.ts` |
| Steps / proof | `tests/unit/publication-steps.test.ts`, `tests/unit/effect-fingerprint.test.ts` |

---

**Bottom line for Ensemble 08 B:** Infrastructure for Nora-conducted **prepare → await authorize → resume dispatch** is in place and tested; the **E08 differentiator** — treating an explicit USER chat message as sufficient D6 mandate on the exact plan without redundant confirmation — is **not implemented**. The smallest addition is a **USER-message-correlated caller of `authorizePublication`** plus a **mandate⊆plan** check, reusing `resumeMissionAfterPublicationAuthorize` and all fingerprint/D6/D7 gates—not Nora qual as `HumanDecision` and not a new bypass around `authorizePublication`.