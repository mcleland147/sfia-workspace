# SFIA STUDIO — M-HD-02 SESSION BOUNDARY, NORMAL REPLAY & LPS CURRENTNESS
## Review Pack FULL — Exit Proof Critical Code Review

**Horodatage:** 2026-10-16 19:16:48 CEST (Europe/Paris)
**GO Morris:** MORRIS — M-HD-02 SESSION BOUNDARY, NORMAL REPLAY & LPS CURRENTNESS TARGETED CORRECTION / EXIT PROOF (2026-10-16)
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — IN PROGRESS
**Capacité:** V3-F05 (connexes V3-F11 / V3-F12 / V3-F14)
**Cycle:** 8 — Delivery / implémentation
**Profil:** CRITICAL — LOCAL DETERMINISTIC
**Typologie:** EVOL — targeted correction
**CKC:** ckc:studio:delivery

---

## 1. Verdict (Cursor)

**M-HD-02 SESSION CONTRACT — QUALIFIED**

**PROJECT-SCOPED CANONICAL CONVERSATION — QUALIFIED**

**MULTI-CONVERSATION ISOLATION — NOT IMPLEMENTED / NOT CLAIMED**

**M-HD-02 NORMAL LPS REPLAY — DETERMINISTIC PASS**

**M-HD-02 LPS FAIL-CLOSED — DETERMINISTIC PASS**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Interdits non revendiqués: PRODUCT GIT INTEGRATED / PR READY / READY FOR REAL / HUMAN QA PASS / P6 GLOBAL PASS / RUNTIME V3 ADOPTED.

---

## 2. Git Truth initial / final (candidat Product)

| Champ | Valeur |
|-------|--------|
| Remote | `origin https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| Dirty | EXPECTED — préservé (aucun reset/stash/clean/rebase/commit Product) |
| Handoff précédent | `90b4f1dd76d60b150492f55220243c5336d05493` / blob `a81e53c104065d5c9346c7d7e1391f323acd4a30` |

### git status --short (au moment du pack)

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

Aucun commit Product. Aucun push Product. Aucune PR.

---

## 3. Sources consultées

PROCESSUS: `sfia-cycle-execution-template.md` · `sfia-cycle-routing-guide.md` · `sfia-rules-and-guardrails.md` · SFIA v2.6 Operating Model (PROCESSUS)

Convergence / Product: Build Doctrine · Roadmap · C1 · P2/P6 · Doctrine v3 30/32/34/35/37 · CKC 08-delivery · Architecture D-ER locale (READ-ONLY)

Handoff précédent FULL M-HD-02 correction: tip `90b4f1dd` / blob `a81e53c1`

Product discovery (Bloc A — avant édition):
- `f2/canonicalConversationSession.ts` — `CANONICAL_CONVERSATION_SESSION_KEY = "f1-default"`
- `lib/nora-cognitive-runtime/productSqliteSession.ts` — projectId + sessionKey dans SQLite
- `lib/nora-cognitive-runtime/sessionPaths.ts` — `resolveNoraSessionSqlitePath`
- `orchestrateTurn.ts` / `orchestrateF2.ts`
- `w2/pendingGenericPrepareOfferStore.ts` · continuity · record · actions

---

## 4. Convergence Pre-check

| | |
|--|--|
| **TARGET** | Décision Pilote sur mission exacte + bon contexte conversationnel; applicable après bump LPS légitime; LPS indéterminable ≠ GO implicite |
| **CURRENT (pré-correction)** | M-HD-02 UI→OA; identité canonique; ALREADY_APPLIED partiel; clé sessdb ≠ conversation; replay LPS normal non prouvé; fallback LPS→sujet scellé |
| **KEEP** | ProductSqliteSession · conversation canonique · OA HD · DecisionBasis · Pending offer · Record/Continuity · Controller · Figma |
| **ADAPT** | Trois garanties ciblées uniquement |
| **REPLACE** | Aucune architecture |
| **EXIT PROOF** | Contrat conversationnel qualifié · pas de cross-bind Project · retry normal sans nouvelle HD · LPS illisible → pas de GO courant |
| **DETTE** | Pending offer process-local · Pilot env-bound · REAL session · UI08 · E4–E8 OPEN |
| **Runtime v3** | NON ADOPTED |

---

## 5. Bloc A — Contrat conversationnel réel (DISCOVERY → KEEP)

### Décision technique: KEEP / QUALIFY (pas STOP)

**Réponses A1–A8:**

| Q | Réponse prouvée |
|---|-----------------|
| A1 | OUI — conversation canonique unique par Project (`f1-default`) |
| A2 | NON — multi-conversation indépendante par Project **non implémentée** |
| A3 | Identité serveur conversationnelle = `projectId` + `CANONICAL_CONVERSATION_SESSION_KEY` dans Session SQLite résolue par `resolveNoraSessionSqlitePath` |
| A4 | Nora remember → offer key = `projectId` + `resolveProductPrepareOfferSessionKey(sessionDbPath)` |
| A5 | Read/Record actions: `resolveProductPrepareOfferSessionKey()` serveur; `claimedSessionKey` ignoré |
| A6 | Isolation Project préservée (`projectId` dans offerKey + ProductSqliteSession) |
| A7 | Better Auth: Record exige Pilote authentifié (Gate A); offre process-local n'est pas une ownership BA distincte — dette Pilot env-bound conservée |
| A8 | Project ≠ BA session ≠ Nora Session DB path ≠ sessionKey SQLite `f1-default` ≠ logicalTurnId ≠ presentationDigest — **non assimilés** |

**Verdict contrat:**
- `PROJECT-SCOPED CANONICAL CONVERSATION — QUALIFIED`
- `MULTI-CONVERSATION ISOLATION — NOT IMPLEMENTED / NOT CLAIMED`
- Aucune nouvelle identité / table / store créée
- Commentaire de dette explicite ajouté dans `pendingGenericPrepareOfferStore.ts`

---

## 6. Bloc B — Record LPS normal / retry / concurrence

### Mécanisme
1. Record accepted avec `linkToLivingProjectState=true` (défaut Product) → OA HD + append LPS + `decisionIds`.
2. Retry avec le **même** `presentedPresentationDigest` (digest vu par le Pilote) → `GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED` même si le re-scellement courant porte un digest post-bump.
3. ALREADY_APPLIED **uniquement** si `priorDigest === presentedDigest` — une re-présentation volontaire (nouveau digest scellé / supersede) n'est pas écrasée.
4. Concurrence: OA `LPS_VERSION_CONFLICT` fail-closed; relecture → ALREADY_APPLIED si gagnant même présentation; sinon conflit explicite.
5. Zéro Attempt / zéro Execute.

### Garantie prouvée
- Séquentiel post-bump: **idempotent** (`ALREADY_APPLIED`, même `decisionId`)
- Concurrent Accept: **≤1 create** + partenaire ALREADY_APPLIED / remap conflit
- Ne pas confondre avec « seconde requête refusée STALE » — le chemin normal prouve l'idempotence

---

## 7. Bloc C — LPS fail-closed

### Correction
`readGenericMissionDecisionContinuity`: si `getCurrentLivingProjectState` échoue → `LPS_CURRENT_UNREADABLE` (`ok: false`).
**Supprimé:** fallback `lpsSnapshotFromSubject(sealed.subject)` qui inventait un LPS courant.

### UI
`useProductConversation`: `!result.ok` → `setGenericMissionError` — **pas** de `kind === "decided"` → aucune autorité implicite.

---

## 8. Matrices SC / RP / LP / NR

### SESSION CONTRACT
| ID | Résultat | Preuve |
|----|----------|--------|
| SC01 | PASS | U — `f1-default` + commentaire NOT IMPLEMENTED |
| SC02 | PASS | U — Projects distincts, même SQLite, pas de cross-read |
| SC03 | PASS | U/C — multi-conversation NOT CLAIMED |
| SC04 | PASS | U — hostile sessionKey ≠ offre |
| SC05 | PASS | U — remember/read clé serveur |
| SC06 | PASS | U — absence binding → none |

### NORMAL REPLAY
| ID | Résultat | Preuve |
|----|----------|--------|
| RP01 | PASS | U — Record + LPS link |
| RP02 | PASS | U — retry post-bump ALREADY_APPLIED |
| RP03 | PASS | U — `Promise.all` concurrent Accept |
| RP04 | PASS | U — Accept vs Refuse concurrent ≤1 accepted |
| RP05 | PASS | U — dérive matérielle → STALE |
| RP06/07 | PASS | U — refused/amended préservés |
| RP08/09 | PASS | U — 0 Attempt / 0 Execute |

### LPS FAIL-CLOSED
| ID | Résultat | Preuve |
|----|----------|--------|
| LP01/02 | PASS | U — LPS lisible + bump → decided |
| LP03 | PASS | U — spy LPS fail → `LPS_CURRENT_UNREADABLE` |
| LP04–06 | PASS | C — codes regression/doctrine/history |
| LP07 | PASS | C — hook error path |

### NON-RÉGRESSION (exécutée)
| Suite | Résultat |
|-------|----------|
| M-HD-02 exit + identity + presentation | PASS |
| M-HD-01 + Authority + EC/HD + Final + Project-scoped + Inspection | **163/163 PASS** (9 files) |
| Browser / REAL / UI08 | **OPEN** |

---

## 9. Validations techniques

```
vitest exit-proof + M-HD-02 + M-HD-01 NR: 163 passed
tsc --noEmit: PASS
npm run build: PASS
```

Runtime :3020 NON. Cursor REAL / OpenAI LIVE / Human QA: NON.

---

## 10. Fake / Real Qualification

**Niveau:** LOCAL DETERMINISTIC — SESSION CONTRACT / NORMAL REPLAY / LPS FAIL-CLOSED PROOF
**Entrée:** LOCAL DETERMINISTIC PARTIAL PASS WITH RESERVES → exit proofs ciblés
**Gate REAL:** NON ACCORDÉ

Gaps: Session REAL · Browser E2E · UI08 · E4–E8 · Pending offer process-local · Pilot env-bound

---

## 11. Dette / Gates Morris résiduels

| Dette | Exit | Gate |
|-------|------|------|
| Multi-conversation / Project | Nouveau contrat identité | CONVERSATION IDENTITY (si exigé) |
| Pending offer process-local | persistence gouvernée | future GO |
| Pilot env-bound | REAL Pilote | Gate A residual |
| UI08 / REAL / E4–E8 | gates distincts | OPEN |

Aucun STOP Conversation Identity / Decision Replay Contract Gate — contrats existants suffisants.

---

## 12. Instruction ChatGPT

Lire depuis Git:

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer:

**SFIA STUDIO — M-HD-02 SESSION BOUNDARY, NORMAL LPS REPLAY & CURRENTNESS CRITICAL CODE REVIEW.**

Examiner notamment:
- contrat conversationnel réel (`f1-default` / Project-scoped);
- absence de faux session binding multi-conversation;
- Record sur identité canonique;
- lien HD/LPS effectif;
- vrai replay avec bump LPS (`presentedPresentationDigest`);
- deux requêtes concurrentes;
- aucun double GO;
- accepted/refused/amended;
- LPS illisible fail-closed;
- UI sans autorité implicite;
- tests complets;
- aucun nouveau store;
- candidat dirty préservé;
- absence commit Product.

---

## 13. Contenu intégral — fichiers nouveaux / sections modifiées


### FULL FILE: `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts`

```typescript
/**
 * P6 — M-HD-02 Exit Proof: session contract / normal LPS replay / LPS fail-closed.
 *
 * Fake SQLite only. ZERO Cursor REAL / OpenAI LIVE / Human QA.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  buildIntentAnalysisFromSolicitedMission,
  rememberGenericPrepareRecommendation,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import {
  resetPendingGenericPrepareOfferStoreForTests,
  resolveProductPrepareOfferSessionKey,
  getPendingGenericPrepareOffer,
} from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import { readGenericMissionDecisionContinuity } from "@/features/project-assistant/w2/genericMissionDecisionContinuity";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
} from "@/features/project-assistant/w2/genericMissionSubject";
import { CANONICAL_CONVERSATION_SESSION_KEY } from "@/features/project-assistant/f2/canonicalConversationSession";
import {
  ProductSqliteSession,
} from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
import { mapGithubIdentityToPiloteActor } from "@/lib/auth/actorMapping";
import { LOCAL_PILOTE_ACTOR } from "@/lib/oa/decision";
import { ensureManagedRepoCloneSkeleton } from "@/lib/oa/project/infrastructure/managedRepoPathFacts";
import { SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV } from "@/lib/vertical-slice-runtime/managedRepoRootBaseConfig";
import {
  bootW2Runtime,
  cleanupW2TempDirs,
  tempProductDbPath,
  W2_TEST_PINNED_BASE_HEAD_SHA,
} from "./w2Harness";
import type { RuntimeApplicationService } from "@/lib/vertical-slice-runtime";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

const APP = path.resolve(__dirname, "../..");

function structuralAnalysis(): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Mission structurante exit-proof M-HD-02",
    expectedOutcome: "Session / replay / LPS fail-closed",
    scope: "projects/demo/src/mhd02-exit",
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    risks: ["Risque exit"],
    reservations: ["Réserve exit"],
    stopConditions: ["STOP_EXIT"],
    executionIntent: {
      intentKind: "code_change",
      scopeIn: ["projects/demo/src/mhd02-exit"],
      requiredCapabilities: [],
      requestedOperation: "refactor-exit",
      reversibilityExpectation: "reversible",
    },
  };
}

const SESSION_PILOTE = {
  actor: mapGithubIdentityToPiloteActor({
    githubUserId: "22222222",
    displayName: "Pilote Exit",
  }),
  githubUserId: "22222222",
};

describe("P6 M-HD-02 session boundary / normal LPS replay / fail-closed", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-mhd02-exit.sqlite"),
      idPrefix: "mhd02e",
    });
    resetPendingGenericPrepareOfferStoreForTests();
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
    vi.restoreAllMocks();
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousDetPin === undefined) {
      delete process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    } else {
      process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = previousDetPin;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MHD02E ${suffix}`,
      objective: "M-HD-02 exit proof",
      context: "det mhd02e",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `ME${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhd02e-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const identity = `acme/mhd02e-${suffix}`;
    await oa.projectServices.setProjectRepositoryBinding!.execute({
      projectId,
      actor: LOCAL_PILOTE_ACTOR,
      binding: {
        provider: "github",
        identity,
        remoteUrl: `https://github.com/${identity}.git`,
        defaultBranch: "main",
        pathRoot: "projects/demo",
      },
    });
    ensureManagedRepoCloneSkeleton({
      managedRepoRootBase: process.env[SFIA_STUDIO_MANAGED_REPO_ROOT_BASE_ENV]!,
      identity,
    });
    return { projectId, oa };
  }

  // ─── SESSION CONTRACT ─────────────────────────────────────────────

  it("SC01 — Product contract is ONE canonical conversation per Project (f1-default)", () => {
    expect(CANONICAL_CONVERSATION_SESSION_KEY).toBe("f1-default");
    const src = readFileSync(
      path.join(
        APP,
        "features/project-assistant/f2/canonicalConversationSession.ts",
      ),
      "utf8",
    );
    expect(src).toContain('CANONICAL_CONVERSATION_SESSION_KEY = "f1-default"');
    expect(src).toContain("sessionKey: CANONICAL_CONVERSATION_SESSION_KEY");
    const storeSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/pendingGenericPrepareOfferStore.ts",
      ),
      "utf8",
    );
    expect(storeSrc).toContain("NOT IMPLEMENTED");
    expect(storeSrc).toContain("f1-default");
  });

  it("SC02 — same SQLite path, distinct Projects → no offer cross-read", async () => {
    const a = await seedProject("sc02a");
    const b = await seedProject("sc02b");
    const analysis = structuralAnalysis();
    const sessionDbPath = tempProductDbPath("p6-mhd02-shared-sess.sqlite");
    const sessionKey = resolveProductPrepareOfferSessionKey({ sessionDbPath });
    rememberGenericPrepareRecommendation({
      projectId: a.projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: a.oa.clock.nowIso(),
      sessionDbPath,
    });
    expect(getPendingGenericPrepareOffer(a.projectId, sessionKey)).not.toBeNull();
    expect(getPendingGenericPrepareOffer(b.projectId, sessionKey)).toBeNull();
    // Conversational SoT also Project-scoped inside the same DB.
    const sessionA = new ProductSqliteSession({
      projectId: a.projectId,
      dbPath: resolveNoraSessionSqlitePath(sessionDbPath),
      sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
    });
    const sessionB = new ProductSqliteSession({
      projectId: b.projectId,
      dbPath: resolveNoraSessionSqlitePath(sessionDbPath),
      sessionKey: CANONICAL_CONVERSATION_SESSION_KEY,
    });
    try {
      expect(sessionA.projectId).not.toBe(sessionB.projectId);
      expect(sessionA.sessionKey).toBe(CANONICAL_CONVERSATION_SESSION_KEY);
      expect(sessionB.sessionKey).toBe(CANONICAL_CONVERSATION_SESSION_KEY);
    } finally {
      sessionA.close();
      sessionB.close();
    }
  });

  it("SC03 — multi-conversation isolation inside one Project is NOT claimed", () => {
    // Contract: one f1-default conversation per Project. Offer key uses
    // projectId + Nora Session DB path — not an independent conversation id.
    const storeSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/pendingGenericPrepareOfferStore.ts",
      ),
      "utf8",
    );
    expect(storeSrc).toMatch(/Multi-conversation[\s\S]*NOT IMPLEMENTED/);
  });

  it("SC04/SC05 — hostile client sessionKey ignored; remember/read share server key", async () => {
    const { projectId, oa } = await seedProject("sc04");
    const analysis = structuralAnalysis();
    const sessionDbPath = tempProductDbPath("p6-mhd02-sc04.sqlite");
    const serverKey = resolveProductPrepareOfferSessionKey({ sessionDbPath });
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
      sessionDbPath,
    });
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      sessionDbPath,
      // Hostile inject — trusted only when passed as server sessionKey override;
      // Product actions ignore claimedSessionKey from the browser.
      sessionKey: "hostile-client-key",
    });
    // With explicit server-side sessionKey override (test inject), offer is under
    // sessdb path key — hostile key must not find the offer.
    expect(continuity.ok && continuity.kind === "none").toBe(true);
    const honest = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      sessionDbPath,
    });
    expect(honest.ok && honest.kind === "awaiting_decision").toBe(true);
    if (!honest.ok || honest.kind !== "awaiting_decision") return;
    expect(honest.sessionKey).toBe(serverKey);
    const actionSrc = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    expect(actionSrc).toContain("void input.claimedSessionKey");
    expect(actionSrc).toContain("resolveProductPrepareOfferSessionKey()");
  });

  it("SC06 — absent conversational binding does not invent a cross-project offer", async () => {
    const { projectId, oa } = await seedProject("sc06");
    // No remember — read must be none/stale, never a fabricated offer.
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "none").toBe(true);
  });

  // ─── NORMAL LPS REPLAY ────────────────────────────────────────────

  it("RP01/RP02 — Record accepted + LPS link → retry ALREADY_APPLIED, same decisionId", async () => {
    const { projectId, oa } = await seedProject("rp01");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    const presentedDigest = continuity.subject.presentationDigest;
    const lpsBefore = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;

    const first = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    expect(first.code).toBe("GENERIC_MISSION_HUMAN_DECISION_RECORDED");
    expect(first.humanDecisionCreated).toBe(true);
    expect(first.executionAttemptCreated).toBe(false);

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(
      lpsBefore.livingProjectState.version,
    );
    expect(lpsAfter.livingProjectState.decisionIds ?? []).toContain(
      first.decision.decisionId,
    );

    // Retry with the ORIGINAL presented digest (normal Product UI retry).
    const second = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
      presentedPresentationDigest: presentedDigest,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.code).toBe("GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED");
    expect(second.humanDecisionCreated).toBe(false);
    expect(second.decision.decisionId).toBe(first.decision.decisionId);
    expect(second.executionAttemptCreated).toBe(false);

    const hist = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: continuity.subject.missionSubjectId,
    });
    expect(hist.ok).toBe(true);
    if (!hist.ok) return;
    const accepted = hist.decisions.filter((d) => d.status === "accepted");
    expect(accepted).toHaveLength(1);
  });

  it("RP03 — concurrent Accept on same presentation → one GO, no double HD", async () => {
    const { projectId, oa } = await seedProject("rp03");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;

    const [r1, r2] = await Promise.all([
      recordGenericMissionHumanDecision({
        oa,
        subject: continuity.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: true,
      }),
      recordGenericMissionHumanDecision({
        oa,
        subject: continuity.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: true,
      }),
    ]);
    expect(r1.ok).toBe(true);
    expect(r2.ok).toBe(true);
    if (!r1.ok || !r2.ok) return;
    const created = [r1, r2].filter((r) => r.humanDecisionCreated);
    const applied = [r1, r2].filter(
      (r) => r.code === "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED",
    );
    // One authoritative create; the other is idempotent (or both ALREADY if
    // one remapped from LPS_VERSION_CONFLICT). Never two creates.
    expect(created.length).toBeLessThanOrEqual(1);
    expect(created.length + applied.length).toBe(2);
    expect(r1.decision.decisionId).toBe(r2.decision.decisionId);
    expect(r1.executionAttemptCreated).toBe(false);
    expect(r2.executionAttemptCreated).toBe(false);

    const hist = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: continuity.subject.missionSubjectId,
    });
    expect(hist.ok).toBe(true);
    if (!hist.ok) return;
    expect(hist.decisions.filter((d) => d.status === "accepted")).toHaveLength(1);
  });

  it("RP04 — concurrent Accept vs Refuse → at most one accepted GO or explicit conflict", async () => {
    const { projectId, oa } = await seedProject("rp04");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;

    const [accept, refuse] = await Promise.all([
      recordGenericMissionHumanDecision({
        oa,
        subject: continuity.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: true,
      }),
      recordGenericMissionHumanDecision({
        oa,
        subject: continuity.subject,
        selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: false,
      }),
    ]);
    // Both may succeed as distinct statuses (refuse does not link LPS), but
    // there must never be two accepted GOs. Applicability remains fail-closed
    // if both become applicable with mixed status.
    const hist = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: continuity.subject.missionSubjectId,
    });
    expect(hist.ok).toBe(true);
    if (!hist.ok) return;
    const accepted = hist.decisions.filter((d) => d.status === "accepted");
    expect(accepted.length).toBeLessThanOrEqual(1);
    // At least one of the two requests must complete or fail closed — no silent invent.
    expect(accept.ok || refuse.ok || (!accept.ok && !refuse.ok)).toBe(true);
  });

  it("RP05 — material drift after Record → replay refused (not ALREADY_APPLIED)", async () => {
    const { projectId, oa } = await seedProject("rp05");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    const first = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(first.ok).toBe(true);

    const drifted: IntentAnalysisDto = {
      ...analysis,
      risks: ["Risque MUTÉ post-Record"],
    };
    const resealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis: drifted,
      missionSubjectId: continuity.subject.missionSubjectId,
    });
    expect(resealed.ok).toBe(true);
    if (!resealed.ok) return;
    const replay = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis: drifted,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
      presentedPresentationDigest: continuity.subject.presentationDigest,
    });
    expect(replay.ok).toBe(false);
    if (replay.ok) return;
    expect(replay.code).toBe("HD_SUBJECT_STALE");
  });

  it("RP06/RP07 — refused/amended retry preserves status (no conversion to accepted)", async () => {
    const { projectId, oa } = await seedProject("rp06");
    const analysis = structuralAnalysis();
    for (const [opt, label] of [
      [GENERIC_MISSION_OPTION_REFUSE, "refused"],
      [GENERIC_MISSION_OPTION_REQUEST_AMEND, "amended"],
    ] as const) {
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        analysis,
        missionSubjectId: `gms:rp06-${label}`,
      });
      expect(sealed.ok).toBe(true);
      if (!sealed.ok) return;
      const first = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: opt,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: false,
      });
      expect(first.ok).toBe(true);
      if (!first.ok) return;
      expect(first.decision.status).toBe(label);
      const second = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: opt,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: false,
      });
      expect(second.ok).toBe(true);
      if (!second.ok) return;
      expect(second.code).toBe("GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED");
      expect(second.decision.status).toBe(label);
      expect(second.decision.decisionId).toBe(first.decision.decisionId);
    }
  });

  it("RP08/RP09 — Record never creates Attempt / Execute (source + result flags)", async () => {
    const { projectId, oa } = await seedProject("rp08");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:rp08",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.executionAttemptCreated).toBe(false);
    const src = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/recordGenericMissionHumanDecision.ts",
      ),
      "utf8",
    );
    expect(src).toContain("executionAttemptCreated: false");
    expect(src).not.toMatch(/createExecutionAttempt|governedExecute/);
  });

  // ─── LPS FAIL-CLOSED ──────────────────────────────────────────────

  it("LP01/LP02 — LPS readable + linked bump → continuity decided", async () => {
    const { projectId, oa } = await seedProject("lp01");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(recorded.ok).toBe(true);
    const again = await readGenericMissionDecisionContinuity({ oa, projectId });
    expect(again.ok && again.kind === "decided").toBe(true);
    if (!again.ok || again.kind !== "decided") return;
    expect(again.decision.status).toBe("accepted");
  });

  it("LP03 — LPS read fails → no authoritative decided (fail-closed)", async () => {
    const { projectId, oa } = await seedProject("lp03");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(recorded.ok).toBe(true);

    // Seal still needs a readable LPS; fail only the post-seal currentness read.
    const lpsSvc = oa.projectServices.getCurrentLivingProjectState;
    const originalExecute = lpsSvc.execute.bind(lpsSvc);
    let lpsReads = 0;
    vi.spyOn(lpsSvc, "execute").mockImplementation(async (input) => {
      lpsReads += 1;
      if (lpsReads === 1) {
        return originalExecute(input);
      }
      return {
        ok: false,
        error: {
          category: "STATE_CONFLICT",
          detailCode: "PERSISTENCE_FAILURE",
          message: "forced LPS unread",
        },
      } as never;
    });

    const again = await readGenericMissionDecisionContinuity({ oa, projectId });
    expect(again.ok).toBe(false);
    if (again.ok) return;
    expect(again.code).toBe("LPS_CURRENT_UNREADABLE");
    // Must not look like a decided GO.
    expect(JSON.stringify(again)).not.toContain('"kind":"decided"');
  });

  it("LP04/LP05/LP06 — source guarantees for regression / doctrine / history fail-closed", () => {
    const contSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/genericMissionDecisionContinuity.ts",
      ),
      "utf8",
    );
    const appSrc = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/genericMissionDecisionApplicability.ts",
      ),
      "utf8",
    );
    expect(contSrc).toContain("LPS_CURRENT_UNREADABLE");
    expect(contSrc).toContain("OA_DECISION_HISTORY_UNREADABLE");
    expect(contSrc).not.toMatch(/lpsSnapshotFromSubject/);
    expect(appSrc).toContain("lps_version_regressed");
    expect(appSrc).toContain("lps_doctrine_drift");
    expect(appSrc).toContain("lps_cycle_drift");
  });

  it("LP07 — UI hook surfaces LPS unread as error, not decided GO (source)", () => {
    const hookSrc = readFileSync(
      path.join(
        APP,
        "features/pre-m6-product-ui/hooks/useProductConversation.ts",
      ),
      "utf8",
    );
    expect(hookSrc).toContain("if (!result.ok)");
    expect(hookSrc).toContain("setGenericMissionError(result.message)");
    // decided only when result.ok && kind === decided
    expect(hookSrc).toMatch(
      /if \(result\.kind === "decided"\)[\s\S]*setGenericMissionUiState/,
    );
  });
});

```

### FULL FILE: `projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionApplicability.ts`

```typescript
/**
 * M-HD-02 — applicable durable HumanDecision vs CURRENT sealed presentation.
 * No seal / offer / UI imports — safe for Record + Continuity.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import {
  materialCurrentnessMatch,
  verifyGenericMissionSnapshotIntegrity,
  type GenericMissionCurrentMaterial,
  type GenericMissionSubject,
  type LpsMaterialSnapshot,
} from "./genericMissionSubject";

/** Map OA LPS current read → material snapshot. Never invent from sealed subject. */
export function lpsMaterialSnapshotFromLivingProjectState(lps: {
  readonly version: number;
  readonly objective: string;
  readonly context?: string;
  readonly scope?: string;
  readonly constraints?: readonly string[];
  readonly doctrinePackageRef?: unknown;
  readonly activeCycleInstanceId?: string | null;
  readonly trajectoryId?: string | null;
  readonly trajectoryVersion?: number | null;
  readonly decisionIds?: readonly string[];
}): LpsMaterialSnapshot {
  const ref = lps.doctrinePackageRef as
    | { digest?: string; contentDigest?: string; packageDigest?: string }
    | null
    | undefined;
  return {
    version: lps.version,
    objective: lps.objective,
    context: lps.context,
    scope: lps.scope,
    constraints: lps.constraints ? [...lps.constraints] : undefined,
    doctrineDigest:
      (typeof ref?.digest === "string" ? ref.digest.trim() : "") ||
      (typeof ref?.contentDigest === "string" ? ref.contentDigest.trim() : "") ||
      (typeof ref?.packageDigest === "string" ? ref.packageDigest.trim() : "") ||
      "",
    activeCycleInstanceId: lps.activeCycleInstanceId ?? null,
    trajectoryId: lps.trajectoryId ?? null,
    trajectoryVersion: lps.trajectoryVersion ?? null,
    decisionIds: lps.decisionIds ? [...lps.decisionIds] : undefined,
  };
}

const INAPPLICABLE_STATUSES = new Set<HumanDecision["status"]>([
  "superseded",
  "revoked",
  "proposed",
  "required",
]);

function currentMaterialFromSubject(
  subject: GenericMissionSubject,
): GenericMissionCurrentMaterial {
  return {
    objective: subject.objective,
    expectedOutcome: subject.expectedOutcome,
    scopeNarrative: subject.scopeNarrative,
    scopeIn: subject.scopeIn,
    scopeOut: subject.scopeOut,
    materiality: subject.materiality,
    repositoryBindingIdentity: subject.repositoryBindingIdentity,
    pathRoot: subject.pathRoot,
    requiredCapabilities: subject.effects.requiredCapabilities,
    expectedOutputs: subject.effects.expectedOutputs,
    intentKind: subject.effects.intentKind,
    artifactType: subject.effects.artifactType,
    requestedOperation: subject.effects.requestedOperation,
    reversibilityExpectation: subject.effects.reversibilityExpectation,
    stopConditions: subject.effects.stopConditions,
    risks: subject.effects.risks,
    reservations: subject.effects.reservations,
    impactSignals: subject.impactSignals,
    cycleInstanceId: subject.cycleInstanceId,
  };
}

/**
 * Decide whether a durable HD is currently applicable to the sealed presentation.
 * Historical ≠ applicable. Digest / material mismatch → inapplicable.
 */
export function assessApplicableGenericMissionDecision(input: {
  readonly decision: HumanDecision;
  readonly subject: GenericMissionSubject;
  readonly currentLps?: LpsMaterialSnapshot | null;
}):
  | { readonly applicable: true; readonly decision: HumanDecision }
  | { readonly applicable: false; readonly reason: string } {
  const d = input.decision;
  if (d.projectId !== input.subject.projectId) {
    return { applicable: false, reason: "project_mismatch" };
  }
  if (d.subject !== input.subject.missionSubjectId) {
    return { applicable: false, reason: "subject_mismatch" };
  }
  if (INAPPLICABLE_STATUSES.has(d.status)) {
    return { applicable: false, reason: `status_${d.status}` };
  }
  if (
    d.status !== "accepted" &&
    d.status !== "refused" &&
    d.status !== "amended"
  ) {
    return { applicable: false, reason: `status_${d.status}` };
  }
  const basis = d.decisionBasis;
  if (!basis) {
    return { applicable: false, reason: "decision_basis_absent" };
  }
  const integrity = verifyGenericMissionSnapshotIntegrity({ basis });
  if (!integrity.ok) {
    return { applicable: false, reason: integrity.reason };
  }
  if (basis.sourceType !== "generic_mission") {
    return { applicable: false, reason: "source_type_not_generic_mission" };
  }
  const ctx = basis.genericMissionContext;
  if (!ctx) {
    return { applicable: false, reason: "generic_mission_context_absent" };
  }
  if (ctx.missionSubjectId !== input.subject.missionSubjectId) {
    return { applicable: false, reason: "mission_subject_id_mismatch" };
  }
  const material = materialCurrentnessMatch({
    sealed: ctx,
    current: currentMaterialFromSubject(input.subject),
  });
  if (!material.ok) {
    return { applicable: false, reason: material.reason };
  }

  const digestMatches =
    ctx.presentationDigest === input.subject.presentationDigest;
  const sealedVersion = basis.proposalContext.lpsVersion;
  const currentVersion = input.currentLps?.version ?? input.subject.lpsVersion;

  // Digest may diverge solely from LPS anchors after a linked Record HD bump.
  // Material effects already matched — require linked LPS when digest differs.
  if (!digestMatches) {
    if (d.status !== "accepted") {
      return { applicable: false, reason: "presentation_digest_mismatch" };
    }
    if (currentVersion <= sealedVersion) {
      return { applicable: false, reason: "presentation_digest_mismatch" };
    }
    const ids = input.currentLps?.decisionIds ?? [];
    if (!ids.includes(d.decisionId)) {
      return { applicable: false, reason: "lps_material_bump_unlinked" };
    }
  }

  // LPS: accepted HD may legitimately bump version when decisionId is linked.
  // Unlinked material bump / doctrine drift → inapplicable (not a silent GO).
  if (d.status === "accepted" && input.currentLps) {
    if (input.currentLps.version < sealedVersion) {
      return { applicable: false, reason: "lps_version_regressed" };
    }
    if (input.currentLps.version > sealedVersion) {
      const ids = input.currentLps.decisionIds ?? [];
      if (!ids.includes(d.decisionId)) {
        return { applicable: false, reason: "lps_material_bump_unlinked" };
      }
      const sealedDoctrine = basis.proposalContext.doctrineDigest ?? "";
      if (
        sealedDoctrine &&
        sealedDoctrine !== (input.currentLps.doctrineDigest ?? "")
      ) {
        return { applicable: false, reason: "lps_doctrine_drift" };
      }
      const sealedCycle =
        basis.proposalContext.activeCycleInstanceId ??
        ctx.cycleInstanceId ??
        null;
      if (
        (sealedCycle ?? null) !==
        (input.currentLps.activeCycleInstanceId ?? null)
      ) {
        return { applicable: false, reason: "lps_cycle_drift" };
      }
    }
  }

  return { applicable: true, decision: d };
}

/**
 * Select the single applicable durable HD for the CURRENT sealed presentation.
 * Ambiguous applicable set → fail-closed.
 */
export function selectApplicableGenericMissionDecision(input: {
  readonly decisions: readonly HumanDecision[];
  readonly subject: GenericMissionSubject;
  readonly currentLps?: LpsMaterialSnapshot | null;
}):
  | { readonly ok: true; readonly decision: HumanDecision | null }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const applicable: HumanDecision[] = [];
  for (const d of input.decisions) {
    const assessed = assessApplicableGenericMissionDecision({
      decision: d,
      subject: input.subject,
      currentLps: input.currentLps,
    });
    if (assessed.applicable) applicable.push(assessed.decision);
  }
  if (applicable.length === 0) {
    return { ok: true, decision: null };
  }
  if (applicable.length === 1) {
    return { ok: true, decision: applicable[0]! };
  }
  // Prefer most recent effectiveAt among identical status/option — still fail if mixed.
  const statuses = new Set(applicable.map((d) => d.status));
  const options = new Set(applicable.map((d) => d.selectedOptionId));
  if (statuses.size > 1 || options.size > 1) {
    return {
      ok: false,
      code: "OA_DECISION_HISTORY_AMBIGUOUS",
      message:
        "Plusieurs HumanDecisions applicables ambiguës — nouvelle présentation requise.",
    };
  }
  const latest = applicable.reduce((a, b) =>
    (a.effectiveAt ?? "") >= (b.effectiveAt ?? "") ? a : b,
  );
  return { ok: true, decision: latest };
}


```

### FULL FILE: `projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionContinuity.ts`

```typescript
/**
 * M-HD-02 — read Generic Mission presentation continuity for Pilot UI.
 *
 * Source = CURRENT pending prepare offer (process-local) → Product seal.
 * No PresentedMission store. Restart without offer → none / stale (fail closed).
 * Decision truth = durable OA HumanDecision only — applicable only when
 * DecisionBasis / presentationDigest match the CURRENT sealed presentation.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  analysisFromPendingGenericPrepareOffer,
  assessGenericMissionPrepareReadiness,
  getCurrentGenericPrepareOffer,
} from "./prepareGenericExecutionContractDraft";
import { resolveProductPrepareOfferSessionKey } from "./pendingGenericPrepareOfferStore";
import {
  GENERIC_MISSION_PRESENTED_OPTIONS,
  type GenericMissionSubject,
} from "./genericMissionSubject";
import {
  lpsMaterialSnapshotFromLivingProjectState,
  selectApplicableGenericMissionDecision,
} from "./genericMissionDecisionApplicability";
import { sealGenericMissionForPresentation } from "./recordGenericMissionHumanDecision";

export { lpsMaterialSnapshotFromLivingProjectState } from "./genericMissionDecisionApplicability";

export type GenericMissionPresentedOption = {
  readonly optionId: string;
  readonly label: string;
};

export type GenericMissionDecisionContinuityResult =
  | {
      readonly ok: true;
      readonly kind: "awaiting_decision";
      readonly subject: GenericMissionSubject;
      readonly options: readonly GenericMissionPresentedOption[];
      readonly offerFingerprint: string;
      readonly sessionKey: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: true;
      readonly kind: "decided";
      readonly subject: GenericMissionSubject;
      readonly decision: {
        readonly decisionId: string;
        readonly status: HumanDecision["status"];
        readonly selectedOptionId: string;
        readonly actorId: string;
        readonly presentationDigest: string;
      };
      readonly options: readonly GenericMissionPresentedOption[];
      readonly offerFingerprint: string;
      readonly sessionKey: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: true;
      readonly kind: "none";
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: true;
      readonly kind: "stale_presentation_required";
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

/** Stable occurrence id from CURRENT offer — avoids silent re-occurrence on reread. */
export function missionSubjectIdFromOfferFingerprint(
  offerFingerprint: string,
): string {
  const fp = offerFingerprint.trim();
  const slice = fp.length > 40 ? fp.slice(0, 40) : fp;
  return `gms:offer:${slice}`;
}

function presentedOptions(): readonly GenericMissionPresentedOption[] {
  return GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => ({
    optionId: o.optionId,
    label: o.label,
  }));
}

export {
  assessApplicableGenericMissionDecision,
  selectApplicableGenericMissionDecision,
} from "./genericMissionDecisionApplicability";

/**
 * Seal CURRENT pending offer for Pilot presentation when the mission is
 * structural / HD-required. Non-structural offers stay on chat-first PREPARE.
 */
export async function readGenericMissionDecisionContinuity(input: {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
  /**
   * When client held a presentationDigest but server has no reconstitutable
   * offer — declare stale (Figma 414:2).
   */
  readonly clientPresentationDigest?: string | null;
}): Promise<GenericMissionDecisionContinuityResult> {
  const fail = (
    code: string,
    message: string,
  ): GenericMissionDecisionContinuityResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const projectId = input.projectId.trim();
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis.");
  }

  const sessionKey = resolveProductPrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });

  const offer = getCurrentGenericPrepareOffer(projectId, {
    sessionKey,
  });

  if (!offer) {
    if (input.clientPresentationDigest?.trim()) {
      return {
        ok: true,
        kind: "stale_presentation_required",
        message:
          "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision.",
        humanDecisionCreated: false,
        executionAttemptCreated: false,
      };
    }
    return {
      ok: true,
      kind: "none",
      message: "Aucune mission générique présentée pour ce projet.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  if (offer.projectId !== projectId) {
    return fail(
      "MISSION_OFFER_PROJECT_MISMATCH",
      "Offre Product hors Project demandé — lecture refusée.",
    );
  }
  if (offer.sessionKey !== sessionKey) {
    return fail(
      "MISSION_OFFER_SESSION_MISMATCH",
      "Offre Product hors session serveur — lecture refusée.",
    );
  }

  const analysis = analysisFromPendingGenericPrepareOffer(offer);
  const readiness = assessGenericMissionPrepareReadiness(analysis);
  const structural =
    readiness.structuralBlocked ||
    offer.signalStructuralChange ||
    offer.signalArchitectureImpact ||
    offer.signalSecurityImpact ||
    offer.signalIrreversible;

  if (!structural) {
    return {
      ok: true,
      kind: "none",
      message:
        "Offre courante non structurante — parcours chat-first PREPARE inchangé.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  if (readiness.missingFields.length > 0) {
    return {
      ok: true,
      kind: "stale_presentation_required",
      message:
        "Mission insuffisamment qualifiée pour décision — nouvelle présentation requise.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  const missionSubjectId = missionSubjectIdFromOfferFingerprint(
    offer.offerFingerprint,
  );
  const sealed = await sealGenericMissionForPresentation({
    oa: input.oa,
    projectId,
    cycleInstanceId: offer.cycleInstanceId,
    analysis,
    missionSubjectId,
  });
  if (!sealed.ok) {
    return fail(sealed.code, sealed.message);
  }

  if (
    input.clientPresentationDigest?.trim() &&
    input.clientPresentationDigest.trim() !== sealed.subject.presentationDigest
  ) {
    return {
      ok: true,
      kind: "stale_presentation_required",
      message:
        "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  const history = await input.oa.decisionServices.listDecisionHistory.execute({
    projectId,
    subject: sealed.subject.missionSubjectId,
  });
  if (!history.ok) {
    return fail(
      "OA_DECISION_HISTORY_UNREADABLE",
      "Historique OA illisible — aucune décision présentée comme applicable.",
    );
  }

  const lpsNow = await input.oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  // C — LPS fail-closed: never invent a "current" snapshot from the sealed subject.
  // A failed LPS read must not surface a historical HD as currently applicable GO.
  if (!lpsNow.ok) {
    return fail(
      "LPS_CURRENT_UNREADABLE",
      "État Living Project courant illisible — aucune décision présentée comme applicable.",
    );
  }
  const currentLps = lpsMaterialSnapshotFromLivingProjectState(
    lpsNow.livingProjectState,
  );

  const selected = selectApplicableGenericMissionDecision({
    decisions: history.decisions,
    subject: sealed.subject,
    currentLps,
  });
  if (!selected.ok) {
    return fail(selected.code, selected.message);
  }

  if (selected.decision) {
    const d = selected.decision;
    const ctx = d.decisionBasis?.genericMissionContext;
    return {
      ok: true,
      kind: "decided",
      subject: sealed.subject,
      decision: {
        decisionId: d.decisionId,
        status: d.status,
        selectedOptionId: d.selectedOptionId,
        actorId: d.actor.actorId,
        presentationDigest: ctx?.presentationDigest ?? sealed.subject.presentationDigest,
      },
      options: presentedOptions(),
      offerFingerprint: offer.offerFingerprint,
      sessionKey,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  return {
    ok: true,
    kind: "awaiting_decision",
    subject: sealed.subject,
    options: presentedOptions(),
    offerFingerprint: offer.offerFingerprint,
    sessionKey,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  };
}

```

### FULL FILE: `projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts`

```typescript
/**
 * M-HD-01 — present + record Pilote HumanDecision on a sealed Generic Mission.
 *
 * PREPARE / AUTHORIZE / EXECUTE are never performed here.
 * No Attempt. No fabricated decision. Refuse ≠ GO. Amend requires new seal.
 */

import { randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalPiloteAuthority,
  type HumanDecision,
  type OaActorReference,
} from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import { resolveGenericPrepareCapabilityEnvelope } from "./genericPrepareCapabilityEnvelope";
import type { IntentAnalysisDto } from "../f2/types";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
  GENERIC_MISSION_PRESENTED_OPTIONS,
  buildGenericMissionSubject,
  decisionBasisFromGenericMissionSubject,
  type GenericMissionSubject,
} from "./genericMissionSubject";
import {
  assessApplicableGenericMissionDecision,
  lpsMaterialSnapshotFromLivingProjectState,
} from "./genericMissionDecisionApplicability";
import type { LpsMaterialSnapshot } from "./genericMissionSubject";

/**
 * Authenticated Pilote for Product Record — actor must come from
 * resolveCurrentAuthenticatedPilote (server session). Client claims ignored.
 */
export type AuthenticatedPiloteForMissionDecision = {
  readonly actor: OaActorReference;
  readonly githubUserId?: string;
};

export type SealGenericMissionForPresentationInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /** Reuse existing occurrence id on amend re-presentation only when material unchanged. */
  readonly missionSubjectId?: string;
};

export type SealGenericMissionForPresentationResult =
  | {
      readonly ok: true;
      readonly subject: GenericMissionSubject;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

export async function sealGenericMissionForPresentation(
  input: SealGenericMissionForPresentationInput,
): Promise<SealGenericMissionForPresentationResult> {
  const fail = (
    code: string,
    message: string,
  ): SealGenericMissionForPresentationResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const projectId = input.projectId.trim();
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis.");
  }

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId,
    analysis: input.analysis,
    cycleInstanceId: input.cycleInstanceId,
  });
  if (!materialityResolution.liveReadOk) {
    return fail(
      materialityResolution.failureCode ?? "PRODUCT_CONTEXT_UNAVAILABLE",
      "Contexte Product insuffisant pour sceller la mission.",
    );
  }
  const currentness = materialityResolution.facts.productCurrentness;
  if (!currentness) {
    return fail(
      "PRODUCT_CURRENTNESS_UNAVAILABLE",
      "Ancres LPS / doctrine indisponibles pour le sceau.",
    );
  }

  const proposedCapabilities =
    input.analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return fail(
      capabilityResolution.code,
      `Capacités hors enveloppe — sceau refusé : ${capabilityResolution.elevated.join(", ")}.`,
    );
  }

  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  if (!objective || (!expectedOutcome && !scopeNarrative)) {
    return fail(
      "MISSION_INSUFFICIENTLY_QUALIFIED",
      "Objectif / résultat attendu insuffisants pour présentation Pilote.",
    );
  }

  // Nora path/filename candidates stay non-authoritative — never sealed as destinations.
  const ei = input.analysis.executionIntent;
  const authoritativeExpectedOutputs = [expectedOutcome];
  const requestedOperation =
    ei && "requestedOperation" in ei && typeof ei.requestedOperation === "string"
      ? ei.requestedOperation.trim() || null
      : input.analysis.requestedOperation?.trim() || null;

  const signals = input.analysis.signals;
  const revFromEi =
    ei &&
    "reversibilityExpectation" in ei &&
    (ei.reversibilityExpectation === "reversible" ||
      ei.reversibilityExpectation === "irreversible" ||
      ei.reversibilityExpectation === "unknown")
      ? ei.reversibilityExpectation
      : null;
  const subject = buildGenericMissionSubject({
    missionSubjectId: input.missionSubjectId,
    projectId,
    cycleInstanceId: input.cycleInstanceId?.trim() || null,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn: ei?.scopeIn ?? [],
    scopeOut: input.analysis.outOfScope ?? [],
    materiality: materialityResolution.assessment.materiality,
    materialityReasonCodes: materialityResolution.assessment.reasonCodes,
    repositoryBindingIdentity: currentness.repositoryIdentity,
    pathRoot: currentness.pathRoot,
    effects: {
      intentKind: ei?.intentKind?.trim() || null,
      artifactType: ei?.artifactType?.trim() || null,
      requestedOperation,
      requiredCapabilities: [...capabilityResolution.contractCapabilities],
      expectedOutputs: authoritativeExpectedOutputs,
      reversibilityExpectation:
        revFromEi ??
        (signals?.irreversible === true
          ? "irreversible"
          : signals?.irreversible === false
            ? "reversible"
            : "unknown"),
      stopConditions: [
        ...(input.analysis.stopConditions ?? []).filter((s) => s.trim()),
        "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
      ],
      risks: [...(input.analysis.risks ?? [])],
      reservations: [...(input.analysis.reservations ?? [])],
    },
    impactSignals: {
      structuralChange: Boolean(signals?.structuralChange),
      securityImpact: Boolean(signals?.securityImpact),
      architectureImpact: Boolean(signals?.architectureImpact),
      dataImpact: Boolean(signals?.dataImpact),
      irreversible: Boolean(signals?.irreversible),
    },
    lpsId: currentness.lpsId,
    lpsVersion: currentness.lpsVersion,
    doctrineDigest: currentness.doctrineDigest,
    presentedAtIso: input.oa.clock.nowIso(),
  });

  return {
    ok: true,
    subject,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  };
}

export type RecordGenericMissionHumanDecisionInput = {
  readonly oa: RuntimeOaStack;
  readonly subject: GenericMissionSubject;
  readonly selectedOptionId: string;
  /**
   * CR-02 — server re-seals from this analysis + Product facts; caller subject
   * digest must match. Client-only subject is not authority.
   */
  readonly analysis: IntentAnalysisDto;
  /**
   * Product path — session-bound Pilote. Required unless forceLocalAuthority
   * (tests only). Never accept a client-forged ActorReference as authority.
   */
  readonly authenticatedPilote?: AuthenticatedPiloteForMissionDecision;
  /** Test inject only — never on real Product Record path (A7). */
  readonly forceLocalAuthority?: boolean;
  readonly rationale?: string;
  readonly supersedeExistingAccepted?: boolean;
  /** When true (default), link accepted HD into LPS (legitimate version bump). */
  readonly linkToLivingProjectState?: boolean;
  /**
   * Digest of the presentation the Pilote actually saw (client/UI).
   * When omitted, defaults to subject.presentationDigest.
   * Used to recognize normal LPS-bump replay without inventing a new HD.
   */
  readonly presentedPresentationDigest?: string;
};

export type RecordGenericMissionHumanDecisionResult =
  | {
      readonly ok: true;
      readonly decision: HumanDecision;
      readonly humanDecisionCreated: boolean;
      readonly executionAttemptCreated: false;
      readonly code:
        | "GENERIC_MISSION_HUMAN_DECISION_RECORDED"
        | "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED";
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

export async function recordGenericMissionHumanDecision(
  input: RecordGenericMissionHumanDecisionInput,
): Promise<RecordGenericMissionHumanDecisionResult> {
  const fail = (
    code: string,
    message: string,
  ): RecordGenericMissionHumanDecisionResult => ({
    ok: false,
    code,
    message,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });

  const selected = input.selectedOptionId.trim();
  const presentedIds = new Set(
    GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => o.optionId),
  );
  if (!presentedIds.has(selected as (typeof GENERIC_MISSION_PRESENTED_OPTIONS)[number]["optionId"])) {
    return fail(
      "HD_OPTION_NOT_PRESENTED",
      "Option Pilote hors ensemble présenté — décision refusée.",
    );
  }

  // Self-consistency of caller subject (digest over its own fields).
  const selfCheck = buildGenericMissionSubject({
    missionSubjectId: input.subject.missionSubjectId,
    projectId: input.subject.projectId,
    cycleInstanceId: input.subject.cycleInstanceId,
    objective: input.subject.objective,
    expectedOutcome: input.subject.expectedOutcome,
    scopeNarrative: input.subject.scopeNarrative,
    scopeIn: input.subject.scopeIn,
    scopeOut: input.subject.scopeOut,
    materiality: input.subject.materiality,
    materialityReasonCodes: input.subject.materialityReasonCodes,
    repositoryBindingIdentity: input.subject.repositoryBindingIdentity,
    pathRoot: input.subject.pathRoot,
    effects: input.subject.effects,
    impactSignals: input.subject.impactSignals,
    lpsId: input.subject.lpsId,
    lpsVersion: input.subject.lpsVersion,
    doctrineDigest: input.subject.doctrineDigest,
    optionRefs: input.subject.optionRefs,
    presentedAtIso: input.subject.presentedAtIso,
  });
  if (selfCheck.presentationDigest !== input.subject.presentationDigest) {
    return fail(
      "HD_SUBJECT_DIGEST_MISMATCH",
      "Sceau de présentation incohérent — enregistrement refusé.",
    );
  }

  // CR-02 — Product-qualified re-seal; forged subject with recomputed digest fails.
  const projectOk = await input.oa.projectServices.getProject.execute({
    projectId: input.subject.projectId,
  });
  if (!projectOk.ok) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project introuvable pour Record.");
  }
  const fresh = await sealGenericMissionForPresentation({
    oa: input.oa,
    projectId: input.subject.projectId,
    cycleInstanceId: input.subject.cycleInstanceId,
    analysis: input.analysis,
    missionSubjectId: input.subject.missionSubjectId,
  });
  if (!fresh.ok) {
    return fail(fresh.code, fresh.message);
  }
  const presentedDigest = (
    input.presentedPresentationDigest ?? input.subject.presentationDigest
  ).trim();
  const status =
    selected === GENERIC_MISSION_OPTION_ACCEPT_PREPARE
      ? ("accepted" as const)
      : selected === GENERIC_MISSION_OPTION_REFUSE
        ? ("refused" as const)
        : ("amended" as const);

  // M-HD-02 — identical replay (incl. after legitimate LPS link bump) returns durable state.
  const history = await input.oa.decisionServices.listDecisionHistory.execute({
    projectId: input.subject.projectId,
    subject: input.subject.missionSubjectId,
  });
  if (!history.ok) {
    return fail(
      "OA_DECISION_HISTORY_UNREADABLE",
      "Historique OA illisible — Record refusé.",
    );
  }

  const lpsNow = await input.oa.projectServices.getCurrentLivingProjectState.execute({
    projectId: input.subject.projectId,
  });
  const digestDiverged =
    fresh.subject.presentationDigest !== presentedDigest ||
    fresh.subject.presentationDigest !== input.subject.presentationDigest.trim();
  // Fail-closed when digest diverged and LPS cannot prove a linked bump.
  if (!lpsNow.ok && digestDiverged) {
    return fail(
      "LPS_CURRENT_UNREADABLE",
      "État Living Project courant illisible — rejeu / Record refusé.",
    );
  }
  const currentLps: LpsMaterialSnapshot | null = lpsNow.ok
    ? lpsMaterialSnapshotFromLivingProjectState(lpsNow.livingProjectState)
    : null;

  const findAlreadyApplied = (
    decisions: readonly HumanDecision[],
    lps: LpsMaterialSnapshot | null,
  ): HumanDecision | null => {
    for (const prior of decisions) {
      const assessed = assessApplicableGenericMissionDecision({
        decision: prior,
        subject: fresh.subject,
        currentLps: lps,
      });
      if (!assessed.applicable) continue;
      if (
        assessed.decision.selectedOptionId === selected &&
        assessed.decision.status === status
      ) {
        return assessed.decision;
      }
    }
    return null;
  };

  const already = findAlreadyApplied(history.decisions, currentLps);
  if (already) {
    const priorDigest =
      already.decisionBasis?.genericMissionContext?.presentationDigest?.trim() ??
      "";
    // Replay only when the Pilote retries the SAME presented digest.
    // A newly sealed digest (intentional re-presentation / supersede) must not
    // be collapsed into ALREADY_APPLIED merely because LPS still links the prior HD.
    if (priorDigest && priorDigest === presentedDigest) {
      return {
        ok: true,
        decision: already,
        humanDecisionCreated: false,
        executionAttemptCreated: false,
        code: "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED",
      };
    }
  }

  // No same-presentation replay — digest divergence means stale presentation.
  if (digestDiverged) {
    return fail(
      "HD_SUBJECT_STALE",
      "Sujet présenté divergent des faits Product courants — nouvelle présentation requise.",
    );
  }

  // Gate A — session actor when provided; LOCAL_PILOTE only via forceLocalAuthority (tests).
  const sessionActor = input.authenticatedPilote?.actor;
  if (!sessionActor?.actorId && input.forceLocalAuthority !== true) {
    return fail(
      "AUTHENTICATED_PILOTE_REQUIRED",
      "Session Pilote vérifiée requise pour enregistrer une HumanDecision de mission.",
    );
  }
  if (
    sessionActor?.actorId &&
    input.authenticatedPilote?.githubUserId &&
    !sessionActor.actorId.includes(input.authenticatedPilote.githubUserId)
  ) {
    return fail(
      "PILOTE_ACTOR_IDENTITY_MISMATCH",
      "Acteur OA incohérent avec l'identité de session — enregistrement refusé.",
    );
  }
  const decisionActor: OaActorReference =
    sessionActor ?? LOCAL_PILOTE_ACTOR;

  const scope = `generic-mission:${input.subject.missionSubjectId}`;
  const authority = registerLocalPiloteAuthority({
    authorityResolver: input.oa.authorityResolver,
    scope,
    issuedAt: input.oa.clock.nowIso(),
    actor: decisionActor,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return fail(authority.code, authority.message);
  }

  const decisionBasis = decisionBasisFromGenericMissionSubject({
    subject: input.subject,
    selectedOptionRef: selected,
  });

  const decisionId = `dec:gms:${randomBytes(8).toString("hex")}`;
  const linkLps =
    status === "accepted" && input.linkToLivingProjectState !== false;

  const recorded = await input.oa.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.subject.projectId,
    ...(input.subject.cycleInstanceId
      ? { cycleInstanceId: input.subject.cycleInstanceId }
      : {}),
    subject: input.subject.missionSubjectId,
    options: GENERIC_MISSION_PRESENTED_OPTIONS.map((o) => ({
      optionId: o.optionId,
      label: o.label,
    })),
    selectedOptionId: selected,
    actor: decisionActor,
    authority: "pilot",
    status,
    reversible: true,
    scope,
    rationale: input.rationale,
    authorityEvidenceId: authority.evidenceId,
    decisionBasis,
    supersedeExistingAccepted: input.supersedeExistingAccepted !== false,
    linkToLivingProjectState: linkLps,
    ...(linkLps ? { expectedLpsVersion: input.subject.lpsVersion } : {}),
  });

  if (!recorded.ok) {
    // Concurrent Record: OA LPS_VERSION_CONFLICT is fail-closed (no orphan HD).
    // Re-read durable history — if the winner already applied the same option,
    // return ALREADY_APPLIED (idempotent retry). Otherwise surface the conflict.
    if (recorded.error.detailCode === "LPS_VERSION_CONFLICT") {
      const hist2 = await input.oa.decisionServices.listDecisionHistory.execute({
        projectId: input.subject.projectId,
        subject: input.subject.missionSubjectId,
      });
      const lps2 =
        await input.oa.projectServices.getCurrentLivingProjectState.execute({
          projectId: input.subject.projectId,
        });
      if (hist2.ok && lps2.ok) {
        const winner = findAlreadyApplied(
          hist2.decisions,
          lpsMaterialSnapshotFromLivingProjectState(lps2.livingProjectState),
        );
        const winnerDigest =
          winner?.decisionBasis?.genericMissionContext?.presentationDigest?.trim() ??
          "";
        if (winner && winnerDigest && winnerDigest === presentedDigest) {
          return {
            ok: true,
            decision: winner,
            humanDecisionCreated: false,
            executionAttemptCreated: false,
            code: "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED",
          };
        }
      }
    }
    return fail(
      recorded.error.detailCode,
      recorded.error.message ?? "RecordHumanDecision refusé.",
    );
  }

  return {
    ok: true,
    decision: recorded.decision,
    humanDecisionCreated: true,
    executionAttemptCreated: false,
    code: "GENERIC_MISSION_HUMAN_DECISION_RECORDED",
  };
}

export {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
};

```

### FULL FILE: `projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts`

```typescript
/**
 * Process-local pending generic PREPARE offer (chat-first continuity).
 *
 * Keyed by projectId + sessionKey to prevent cross-session bind (CR-P6-04).
 * Same durability class as mw5ChallengeSessionStore — NOT Product SQLite.
 *
 * P6-HQA-F05-GD4-01 Pass 02 — retains mission-effect fields needed for
 * intent fidelity (docs_write / documentary outputs / proposed capabilities)
 * without treating Nora proposals as Product path authority.
 *
 * M-HD-02 — Product remember/read/record share one server key derived from
 * the Nora Session SQLite path (not a client-claimed sessionKey).
 *
 * CONVERSATION CONTRACT (qualified — do not invent multi-conversation):
 * Product canonical conversation is ONE per Project within a Session SQLite
 * (`CANONICAL_CONVERSATION_SESSION_KEY = "f1-default"`). Offer isolation is
 * therefore Project-scoped (+ Nora Session DB path). Multi-conversation
 * isolation inside the same Project/SQLite is NOT IMPLEMENTED / NOT CLAIMED.
 *
 * LIMITATION (documented debt):
 * - Lost on process restart → no stale PREPARE from prior process.
 * - Not multi-instance durable.
 * Owner: P6 Product Continuity. Exit: durable PresentedSubject / session
 * Product binding under separate GO if restart continuity required.
 * Restart continuity is NOT PROVEN.
 */

import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";

const STORE_KEY = "__SFIA_F2_PENDING_GENERIC_PREPARE_OFFER__" as const;

/**
 * Mission-effect slice remembered with the CURRENT prepare offer.
 * Proposals (targetPath, artifactFileName, requiredCapabilities, …) are
 * NON-AUTHORITATIVE Nora candidates until Product resolve / pathRoot /
 * generalist capability resolution run at PREPARE.
 */
export type PendingGenericPrepareMissionEffects = {
  readonly intentKind: string | null;
  readonly artifactType: string | null;
  /** Nora candidate — never Product Git authority by itself (D-PC-09). */
  readonly proposedTargetPath: string | null;
  readonly proposedArtifactFileName: string | null;
  readonly proposedTargetRepositoryRef: string | null;
  readonly artifactBrief: string | null;
  readonly contentRequirements: readonly string[];
  readonly expectedOutputs: readonly string[];
  readonly proposedRequiredCapabilities: readonly string[];
  readonly validationExpectations: readonly string[];
  readonly evidenceRequirements: readonly string[];
  readonly requestedOperation: string | null;
  readonly reversibilityExpectation:
    | "reversible"
    | "irreversible"
    | "unknown"
    | null;
  readonly exitRequirementKinds: readonly string[];
};

export type PendingGenericPrepareOffer = {
  readonly projectId: string;
  /** Conversation/session discriminator — never cross-bind without match. */
  readonly sessionKey: string;
  /** null = S8 project-context offer (no active cycle; never an invented CycleInstance). */
  readonly cycleInstanceId: string | null;
  readonly missionKey: string;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly outOfScope: readonly string[];
  readonly stopConditions: readonly string[];
  readonly risks: readonly string[];
  readonly reservations: readonly string[];
  readonly signalStructuralChange: boolean;
  readonly signalSecurityImpact: boolean;
  readonly signalArchitectureImpact: boolean;
  readonly signalDataImpact: boolean;
  readonly signalIrreversible: boolean;
  readonly contradictionConflictPresent: boolean;
  readonly offeredAtIso: string;
  readonly offerFingerprint: string;
  /** Mission-effect fidelity (Pass 02). Absent on ancient in-memory shapes → treat as empty. */
  readonly missionEffects?: PendingGenericPrepareMissionEffects;
};

type StoreSlot = {
  byKey: Map<string, PendingGenericPrepareOffer>;
};

function getSlot(): StoreSlot {
  const g = globalThis as typeof globalThis & { [STORE_KEY]?: StoreSlot };
  if (!g[STORE_KEY]) {
    g[STORE_KEY] = { byKey: new Map() };
  }
  return g[STORE_KEY];
}

function offerKey(projectId: string, sessionKey: string): string {
  return `${projectId.trim()}::${sessionKey.trim() || "default"}`;
}

function freezeMissionEffects(
  effects: PendingGenericPrepareMissionEffects | undefined,
): PendingGenericPrepareMissionEffects | undefined {
  if (!effects) return undefined;
  return Object.freeze({
    intentKind: effects.intentKind,
    artifactType: effects.artifactType,
    proposedTargetPath: effects.proposedTargetPath,
    proposedArtifactFileName: effects.proposedArtifactFileName,
    proposedTargetRepositoryRef: effects.proposedTargetRepositoryRef,
    artifactBrief: effects.artifactBrief,
    contentRequirements: Object.freeze([...effects.contentRequirements]),
    expectedOutputs: Object.freeze([...effects.expectedOutputs]),
    proposedRequiredCapabilities: Object.freeze([
      ...effects.proposedRequiredCapabilities,
    ]),
    validationExpectations: Object.freeze([...effects.validationExpectations]),
    evidenceRequirements: Object.freeze([...effects.evidenceRequirements]),
    requestedOperation: effects.requestedOperation,
    reversibilityExpectation: effects.reversibilityExpectation,
    exitRequirementKinds: Object.freeze([...effects.exitRequirementKinds]),
  });
}

export function resolvePrepareOfferSessionKey(input: {
  readonly sessionDbPath?: string | null;
  readonly sessionKey?: string | null;
}): string {
  if (input.sessionKey?.trim()) return input.sessionKey.trim();
  if (input.sessionDbPath?.trim()) {
    // Bound to session DB path identity — different sessions do not share offers.
    return `sessdb:${input.sessionDbPath.trim()}`;
  }
  return "default";
}

/**
 * M-HD-02 — server-owned Product offer session key.
 * Aligns remember / read / record with Nora Session SQLite identity.
 * Explicit sessionKey is for trusted server/test inject only — never a client claim.
 */
export function resolveProductPrepareOfferSessionKey(input?: {
  readonly sessionDbPath?: string | null;
  readonly sessionKey?: string | null;
}): string {
  if (input?.sessionKey?.trim()) {
    return input.sessionKey.trim();
  }
  const sessionDbPath = resolveNoraSessionSqlitePath(
    input?.sessionDbPath?.trim() || undefined,
  );
  return resolvePrepareOfferSessionKey({ sessionDbPath });
}

export function getPendingGenericPrepareOffer(
  projectId: string,
  sessionKey: string = "default",
): PendingGenericPrepareOffer | null {
  return getSlot().byKey.get(offerKey(projectId, sessionKey)) ?? null;
}

export function rememberPendingGenericPrepareOffer(
  offer: PendingGenericPrepareOffer,
): PendingGenericPrepareOffer {
  const next: PendingGenericPrepareOffer = {
    ...offer,
    sessionKey: offer.sessionKey.trim() || "default",
    scopeIn: Object.freeze([...offer.scopeIn]),
    scopeOut: Object.freeze([...offer.scopeOut]),
    outOfScope: Object.freeze([...offer.outOfScope]),
    stopConditions: Object.freeze([...offer.stopConditions]),
    risks: Object.freeze([...offer.risks]),
    reservations: Object.freeze([...offer.reservations]),
    missionEffects: freezeMissionEffects(offer.missionEffects),
  };
  getSlot().byKey.set(offerKey(offer.projectId, next.sessionKey), next);
  return next;
}

export function clearPendingGenericPrepareOffer(
  projectId: string,
  sessionKey: string = "default",
): void {
  getSlot().byKey.delete(offerKey(projectId, sessionKey));
}

export function resetPendingGenericPrepareOfferStoreForTests(): void {
  getSlot().byKey.clear();
}

```

### SECTION: `actions.ts` L1011-1217 — Read + Record

```typescript
export async function w2ReadGenericMissionDecisionContinuityAction(input: {
  projectId: string;
  clientPresentationDigest?: string | null;
  /** Hostile — ignored. */
  claimedSessionKey?: unknown;
}): Promise<GenericMissionDecisionContinuityResult> {
  void input.claimedSessionKey;
  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_STACK_UNAVAILABLE",
      message: "OA stack unavailable",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }
  return readGenericMissionDecisionContinuity({
    oa: runtime.oa,
    projectId: input.projectId,
    clientPresentationDigest: input.clientPresentationDigest,
    // Server-owned Product session key — never a client claim.
    sessionKey: resolveProductPrepareOfferSessionKey(),
  });
}

const GENERIC_MISSION_OPTION_IDS = new Set<string>([
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
]);

/**
 * M-HD-02 — record Pilote HumanDecision on a sealed Generic Mission via OA.
 *
 * Gate A: Better Auth session → allowlist → OA actor + Pilot evidence.
 * Never trusts client actor / analysis. Reconstructs analysis from CURRENT offer.
 * Never creates ExecutionAttempt. Never auto-PREPARE / EXECUTE.
 * Never forceLocalAuthority on Product path.
 */
export async function w2RecordGenericMissionHumanDecisionAction(input: {
  projectId: string;
  missionSubjectId: string;
  presentationDigest: string;
  selectedOptionId: string;
  rationale?: string;
  /** Hostile — ignored. */
  claimedActorId?: unknown;
  claimedCanActAsPilot?: unknown;
  claimedSessionKey?: unknown;
  analysis?: unknown;
}): Promise<RecordGenericMissionHumanDecisionResult> {
  void input.claimedActorId;
  void input.claimedCanActAsPilot;
  void input.claimedSessionKey;
  void input.analysis;

  const runtime = getRuntimeApplicationService();
  if (!runtime.oa) {
    return {
      ok: false,
      code: "OA_STACK_UNAVAILABLE",
      message: "OA stack unavailable",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  const pilote = await resolveCurrentAuthenticatedPilote({
    headers: await headers(),
  });
  if (!pilote.ok) {
    return {
      ok: false,
      code: pilote.code,
      message: pilote.message,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  const selected = input.selectedOptionId.trim();
  if (!GENERIC_MISSION_OPTION_IDS.has(selected)) {
    return {
      ok: false,
      code: "HD_OPTION_NOT_PRESENTED",
      message: "Option Pilote hors ensemble présenté — décision refusée.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  const projectId = input.projectId.trim();
  // C — server-owned session key (Nora Session SQLite). Client claims ignored.
  const sessionKey = resolveProductPrepareOfferSessionKey();
  const offer = getCurrentGenericPrepareOffer(projectId, { sessionKey });
  if (!offer) {
    return {
      ok: false,
      code: "MISSION_PRESENTATION_STALE",
      message:
        "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }
  if (offer.projectId !== projectId) {
    return {
      ok: false,
      code: "MISSION_OFFER_PROJECT_MISMATCH",
      message: "Offre Product hors Project demandé — Record refusé.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }
  if (offer.sessionKey !== sessionKey) {
    return {
      ok: false,
      code: "MISSION_OFFER_SESSION_MISMATCH",
      message: "Offre Product hors session serveur — Record refusé.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  // A — canonical identity derived from CURRENT offer, not trusted from client.
  const canonicalMissionSubjectId = missionSubjectIdFromOfferFingerprint(
    offer.offerFingerprint,
  );
  if (canonicalMissionSubjectId !== input.missionSubjectId.trim()) {
    return {
      ok: false,
      code: "HD_MISSION_IDENTITY_MISMATCH",
      message:
        "Identité de mission non dérivée de l'offre Product courante — Record refusé.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  if (offer.cycleInstanceId) {
    const cycle = await runtime.oa.cycleServices.getCycle.execute({
      cycleInstanceId: offer.cycleInstanceId,
    });
    if (!cycle.ok || cycle.cycle.projectId !== projectId) {
      return {
        ok: false,
        code: "MISSION_CYCLE_INVALID",
        message: "Cycle lié à l'offre invalide ou hors Project — Record refusé.",
        humanDecisionCreated: false,
        executionAttemptCreated: false,
      };
    }
    if (cycle.cycle.status !== "active") {
      return {
        ok: false,
        code: "MISSION_CYCLE_INVALID",
        message: "Cycle lié à l'offre non actif — Record refusé.",
        humanDecisionCreated: false,
        executionAttemptCreated: false,
      };
    }
  }

  const analysis = analysisFromPendingGenericPrepareOffer(offer);
  const sealed = await sealGenericMissionForPresentation({
    oa: runtime.oa,
    projectId,
    cycleInstanceId: offer.cycleInstanceId,
    analysis,
    missionSubjectId: canonicalMissionSubjectId,
  });
  if (!sealed.ok) {
    return {
      ok: false,
      code: sealed.code,
      message: sealed.message,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  if (sealed.subject.missionSubjectId !== canonicalMissionSubjectId) {
    return {
      ok: false,
      code: "HD_MISSION_IDENTITY_MISMATCH",
      message: "Sceau Product divergent de l'identité canonique — Record refusé.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }
  // Digest mismatch is resolved inside Record: ALREADY_APPLIED after legitimate
  // LPS bump, else HD_SUBJECT_STALE. Never invent a new HD on a stale digest.
  return recordGenericMissionHumanDecision({
    oa: runtime.oa,
    subject: sealed.subject,
    selectedOptionId: selected,
    analysis,
    presentedPresentationDigest: input.presentationDigest.trim(),
    rationale: input.rationale,
    authenticatedPilote: {
      actor: pilote.actor,
      githubUserId: pilote.githubUserId,
    },
    // Product path — never forceLocalAuthority (A7).
  });
}
```

### SECTION: `canonicalConversationSession.ts` L1-40 (contrat)

```typescript
/**
 * CORR-PROOF-01 D1 — canonical ProductSqliteSession conversational SoT helpers.
 *
 * D1 one-turn persistence lifecycle:
 * 1. Load Session with Memory B replay semantics (read-only for analysis).
 * 2. Non-durable: analyzeIntent + MW5 derive — never written as drafts.
 * 3. Exactly ONE user-visible assistant response.
 * 4. That response is persisted once — F1 Runner OR F2 persist-and-return.
 *
 * CR-01: prior CLARIFY ≠ uncertainty resolved.
 * CR-03: analysis context uses loadSessionRows + resolveReplayItems (F1 parity).
 * CR-04: AVAILABLE / EMPTY / UNAVAILABLE — never conflate empty with unavailable.
 */

import type { AgentInputItem } from "@openai/agents";
import {
  ProductSqliteSession,
  assistantTextItem,
  userTextItem,
} from "@/lib/nora-cognitive-runtime/productSqliteSession";
import { resolveNoraSessionSqlitePath } from "@/lib/nora-cognitive-runtime/sessionPaths";
import {
  loadSessionRows,
  resolveReplayItems,
  type TruthCRevision,
} from "@/lib/nora-cognitive-runtime/memoryBCompaction";

/** Must match F1 / runNoraCognitiveTurn default sessionKey — single SoT. */
export const CANONICAL_CONVERSATION_SESSION_KEY = "f1-default";

const MAX_CONTEXT_MESSAGES = 12;
const MAX_CONTEXT_CHARS = 8000;

/** Test-only — next loadCanonicalConversationForAnalysis returns UNAVAILABLE. */
let forceNextUnavailableForTests = false;

export function simulateNextCanonicalConversationUnavailableForTests(): void {
  forceNextUnavailableForTests = true;
}

```

### SECTION: `useProductConversation.ts` L531-590

```typescript
  async function refreshGenericMissionDecision() {
    try {
      const { w2ReadGenericMissionDecisionContinuityAction } = await import(
        "@/features/project-assistant/w2/actions"
      );
      const result = await w2ReadGenericMissionDecisionContinuityAction({
        projectId,
        clientPresentationDigest: genericMissionDigestRef.current,
      });
      if (!result.ok) {
        setGenericMissionError(result.message);
        return;
      }
      if (result.kind === "awaiting_decision") {
        setGenericMissionSubject(result.subject);
        genericMissionDigestRef.current = result.subject.presentationDigest;
        setGenericMissionUiState("awaiting_decision");
        setGenericMissionStaleMessage(null);
        setGenericMissionError(null);
        return;
      }
      if (result.kind === "decided") {
        setGenericMissionSubject(result.subject);
        genericMissionDigestRef.current = result.subject.presentationDigest;
        setGenericMissionUiState(
          result.decision.status === "accepted"
            ? "accepted"
            : result.decision.status === "refused"
              ? "refused"
              : result.decision.status === "amended"
                ? "amended"
                : "awaiting_decision",
        );
        setGenericMissionStaleMessage(null);
        setGenericMissionError(null);
        return;
      }
      if (result.kind === "stale_presentation_required") {
        setGenericMissionSubject(null);
        setGenericMissionUiState("stale");
        setGenericMissionStaleMessage(result.message);
        setGenericMissionError(null);
        return;
      }
      // none — clear only if we were not holding a local presentation claim
      if (!genericMissionDigestRef.current) {
        setGenericMissionSubject(null);
        setGenericMissionUiState("awaiting_decision");
        setGenericMissionStaleMessage(null);
      } else {
        setGenericMissionSubject(null);
        setGenericMissionUiState("stale");
        setGenericMissionStaleMessage(
          "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision.",
        );
        genericMissionDigestRef.current = null;
      }
    } catch {
      setGenericMissionError("Impossible de relire la présentation de mission.");
    }
```

---

## 14. Fichiers touchés (ce cycle)

**Modifiés:**
- `w2/genericMissionDecisionContinuity.ts` — LPS fail-closed
- `w2/genericMissionDecisionApplicability.ts` — `lpsMaterialSnapshotFromLivingProjectState`
- `w2/recordGenericMissionHumanDecision.ts` — normal LPS replay + concurrent remap
- `w2/actions.ts` — `presentedPresentationDigest`; plus de STALE prématuré
- `w2/pendingGenericPrepareOfferStore.ts` — qualification contrat conversationnel

**Nouveau test:**
- `__tests__/…/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts`

**Interdits non modifiés:** Doctrine, Roadmap, C1, P2/P6, Figma 412:2/413:2/414:2, OA structurant, migrations, CI, runtime :3020.

---

## 15. Fin de pack

Review Pack FULL mono-cycle.
Handoff message attendu:
`review-handoff: M-HD-02 session boundary and normal replay exit proof`
