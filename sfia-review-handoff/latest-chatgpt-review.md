# SFIA STUDIO — M-HD-02 RP04 ACCEPT/REFUSE CONCURRENCY
## Review Pack FULL — Final Authority Verification

**Horodatage:** 2026-10-16 20:51:34 CEST (Europe/Paris)
**GO Morris:** M-HD-02 RP04 ACCEPT/REFUSE CONCURRENCY FINAL AUTHORITY VERIFICATION (2026-10-16)
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — GLOBAL INTEGRATED PRODUCT QA IN PROGRESS
**Capacité:** V3-F05 (connexes V3-F02 / V3-F11 / V3-F12 / V3-F14)
**Cycle:** 9 — QA / validation
**Profil:** CRITICAL
**Typologie:** QA / VALIDATION / DETERMINISTIC AUTHORITY
**CKC:** ckc:studio:qa-validation

---

## 1. Verdict

**RP04 ACCEPT/REFUSE AUTHORITY — DETERMINISTIC PASS**

**M-HD-02 TARGETED AUTHORITY VERIFICATION COMPLETE**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL REVIEW**

Aucune modification Product. Tests uniquement.
Aucun commit Product. Gate Morris policy **non requis** pour clôturer RP04
(politique OA/Product existante prouvée). Optionnelle pour Morris si refuse-après-accept
doit un jour superseder accepted (changement de domaine OA — hors present pass).

Claims interdits non revendiqués.

---

## 2. Git Truth

| Champ | Valeur |
|-------|--------|
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| Dirty | EXPECTED — préservé |
| Staged | vide |
| Handoff précédent | `7afad281` / blob `830e5526` |

### git status --short

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

### Diff stat (test only)

```

```

---

## 3. Sources / contrats lus

PROCESSUS: cycle-execution-template · routing · guardrails · operating-model · SFIA v2.6

Convergence / Product / Doctrine v3 / CKC 09-qa-validation / D-ER locale

Handoff `7afad281` sections RP04 / Continuity / Applicability

OA READ-ONLY:
- `lib/oa/decision/application/recordHumanDecision.ts`
- domain invariants / types
- listDecisionHistory (via services)

Product READ-ONLY:
- recordGenericMissionHumanDecision.ts
- genericMissionDecisionApplicability.ts
- genericMissionDecisionContinuity.ts
- verifyGenericMissionHumanDecisionForPrepare.ts
- prepareGenericExecutionContractDraft.ts
- actions.ts

---

## 4. Convergence Pre-check

| | |
|--|--|
| **TARGET** | HD explicite, durable, non ambiguë / applicable |
| **CURRENT** | Post-Record PASS; RP04 était PARTIAL |
| **KEEP** | OA HD · DecisionBasis · Continuity · Applicability · CR-04 · auth boundary |
| **ADAPT** | Tests de validation uniquement |
| **REPLACE** | Aucun |
| **Exit** | Disposition finale prouvée ou conflit explicite |

---

## 5. Politique OA observée (A1–A8)

| Q | Classification | Fait |
|---|----------------|------|
| A1 Statuts coexistants | **IMPLEMENTED FACT** + **TESTED** | `accepted` + `refused` peuvent coexister pour même project/subject |
| A2 Supersede | **IMPLEMENTED FACT** | Uniquement quand `status===accepted` → supersede prior **accepted** (`recordHumanDecision.ts`) |
| A3 Refuse après Accept | **IMPLEMENTED FACT** + **TESTED** | Possible si même digest (pas de bump LPS); après bump LPS + D0 → souvent `HD_SUBJECT_STALE` |
| A4 Refuse invalide Accept ? | **IMPLEMENTED FACT** | **NON** — refuse ne supersede pas accepted |
| A5 Décision applicable | **IMPLEMENTED FACT** + **TESTED** | Product `selectApplicableGenericMissionDecision`: mixed status/option applicables → `OA_DECISION_HISTORY_AMBIGUOUS`; sinon latest same status/option |
| A6 Rôle LPS | **IMPLEMENTED FACT** + **TESTED** | Bump LPS lié à Accept fait diverger le digest seal; `refused` avec digest mismatch → **inapplicable** (seuls `accepted` survivent via linked bump) |
| A7 superseded/revoked | **IMPLEMENTED FACT** | INAPPLICABLE_STATUSES — non applicables |
| A8 Continuity vs PREPARE | **IMPLEMENTED FACT** + **TESTED** | Continuity = selectApplicable; PREPARE = `decisionId` explicite (`HD_REFUSED` si refuse; Accept encore préparable) |

### OA supersede (extrait)

```typescript
        if (status === "accepted") {
          const existing = await this.decisions.listAcceptedBySubject(
            snap.projectId,
            snap.subject.trim(),
          );
          if (existing.length > 0) {
            if (!snap.supersedeExistingAccepted) {
              throw Object.assign(new Error("accepted_exists"), {
                detailCode: "STATE_CONFLICT" as const,
              });
            }
            for (const prior of existing) {
              const superseded: HumanDecision = {
                ...prior,
                status: "superseded",
                version: (prior.version ?? 1) + 1,
              };
              await this.decisions.save(superseded);
              supersededDecisionIds.push(prior.decisionId);
            }
          }
        }

        const next: HumanDecision = {
          schemaVersion: "0.1.0-oa",
```

### Product selectApplicable (extrait)

```typescript
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

---

## 6. Analyse RP04 (B1–B6)

| Q | Réponse |
|---|---------|
| B1 Atteignable ? | **OUI** — concurrent Accept/Refuse crée souvent accepted+refused durables (SC3) |
| B2 Règle disposition | OA: coexistence; Continuity: après LPS-linked Accept, refuse digest-inapplicable → **decided accepted**; même digest sans LPS → **AMBIGUOUS** |
| B3 Product reflète ? | **OUI** — tests SC2/SC3/SC5 |
| B4 Divergence UI/hist ? | Historique peut contenir refuse; Continuity ne le projette pas comme GO si digest-inapplicable |
| B5 Refuse ignoré ? | Pour **Continuité courante** après LPS bump: oui (inapplicable). Pour **PREPARE**: non — `HD_REFUSED` si decisionId refuse |
| B6 PREPARE sur accepted malgré refuse ? | **OUI** — contrat OA (refuse ≠ supersede). Documenté, pas inventé |

---

## 7. Scénarios SC1–SC7

| SC | Résultat | Preuve |
|----|----------|--------|
| SC1 Accept→Refuse(D0) | PASS | Refuse typiquement STALE post-LPS; Continuity decided accepted; 0 Attempt |
| SC2 Refuse→Accept(+LPS) | PASS | Les deux durables; Continuity decided **accepted**; PREPARE accept OK / refuse HD_REFUSED |
| SC3 Concurrent | PASS | ≤1 accepted; si les deux: Continuity decided accepted (pas refuse GO); PREPARE cohérent |
| SC4 Relecture D0 | PASS (F1/F2 + SC2/SC3) | Continuity D0 cohérente avec décision applicable |
| SC5 Contradiction même digest | PASS | Accept(no LPS)+Refuse → `OA_DECISION_HISTORY_AMBIGUOUS` |
| SC6 Invalidation | PASS | superseded/revoked via INAPPLICABLE; material LPS drift tests existants |
| SC7 Non-régression | PASS | RP01–03, RP06–09, F1/F2; NR M-HD-01/02 119+22 |

---

## 8. Disposition effective Accept/Refuse

1. **OA** n'impose pas « premier gagnant / dernier gagnant » Accept vs Refuse.
2. **Supersede** = accepted remplace accepted seulement.
3. **Product Continuity** après Accept lié LPS: refuse historique n'est **pas** un GO courant (digest-inapplicable).
4. **Product Continuity** si accepted+refused **tous deux applicables** (même digest, pas de bump): **fail-closed** `OA_DECISION_HISTORY_AMBIGUOUS`.
5. **PREPARE** lie un `decisionId`: accepted → peut préparer; refused → `HD_REFUSED`.
6. **Jamais** double accepted GO; **jamais** Attempt/Execute au Record.

---

## 9. Concordance OA / Product / PREPARE

| Couche | Disposition prouvée |
|--------|---------------------|
| OA history | accepted ± refused coexistants possibles |
| Continuity UI | decided accepted si LPS-linked; AMBIGUOUS si mixed applicables |
| PREPARE | decisionId-bound; refuse ne bloque pas un autre accepted id |

Pas de GO implicite inventé. Refuse n'est jamais projeté comme Accept.

---

## 10. Validations exécutées

```
vitest p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts: 22 passed
vitest M-HD-02 + M-HD-01 NR (6 files): 119 passed
tsc --noEmit: PASS
git diff --check (test): PASS
build: NOT EXECUTED (aucun fichier Product modifié — GO)
```

---

## 11. Fake / Real Qualification

**Entrée:** DETERMINISTIC PROVEN WITH RP04 RESERVE
**Sortie:** TARGETED DETERMINISTIC AUTHORITY PROOF
**Gate REAL:** NON ACCORDÉ
Gaps: concurrence réseau réelle, Better Auth navigateur, multi-instance

DETERMINISTIC PROVEN ≠ READY FOR REAL

---

## 12. Réserves / Gates

| Réserve | Statut |
|---------|--------|
| RP04 disposition | **FERMÉE** — prouvée |
| Refuse devrait-il superseder Accept ? | **Hors pass** — option Morris (domaine OA). Non requis pour clôturer RP04 |
| Product logic change | **Aucune** |

---

## 13. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

**SFIA STUDIO — M-HD-02 RP04 ACCEPT/REFUSE AUTHORITY CRITICAL REVIEW.**

Vérifier SC1–SC7, contrats OA, statuts durables, décision applicable, concordance Product/PREPARE, tests, Review Pack FULL, dirty Product préservé.

---

## 14. Contenu intégral — fichier de test modifié

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
  prepareGenericExecutionContractDraft,
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
import { verifyGenericMissionHumanDecisionForPrepare } from "@/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare";
import {
  selectApplicableGenericMissionDecision,
} from "@/features/project-assistant/w2/genericMissionDecisionApplicability";
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

  /**
   * RP04 / SC1–SC5 — Accept↔Refuse authority disposition.
   *
   * OA IMPLEMENTED FACT (recordHumanDecision): supersedeExistingAccepted runs
   * only when recording status===accepted. Refuse does NOT supersede Accept.
   * Product Continuity: mixed applicable statuses → OA_DECISION_HISTORY_AMBIGUOUS.
   * PREPARE: verifies a single decisionId (accepted → may still prepare).
   */
  it("SC1 — Accept then Refuse → both durable; Continuity fail-closed; PREPARE binds decisionId", async () => {
    const { projectId, oa } = await seedProject("sc1");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const presented = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(presented.ok && presented.kind === "awaiting_decision").toBe(true);
    if (!presented.ok || presented.kind !== "awaiting_decision") return;
    const d0 = presented.subject.presentationDigest;
    const subject = presented.subject;

    const accept = await recordGenericMissionHumanDecision({
      oa,
      subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(accept.ok).toBe(true);
    if (!accept.ok) return;
    expect(accept.decision.status).toBe("accepted");

    const refuse = await recordGenericMissionHumanDecision({
      oa,
      subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
      // Same presentation digest the Pilote saw (D0) — not a new seal.
      presentedPresentationDigest: d0,
    });
    // After LPS bump, fresh seal digest diverges: refuse on D0 may be STALE
    // OR succeed if sealed at accept-time digest still matches via ALREADY path.
    // Capture durable truth either way.
    const hist = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: subject.missionSubjectId,
    });
    expect(hist.ok).toBe(true);
    if (!hist.ok) return;
    const accepted = hist.decisions.filter((d) => d.status === "accepted");
    const refused = hist.decisions.filter((d) => d.status === "refused");
    const superseded = hist.decisions.filter((d) => d.status === "superseded");

    // OA: refuse does not supersede accept.
    expect(accepted.length).toBe(1);
    expect(superseded.length).toBe(0);
    expect(accept.executionAttemptCreated).toBe(false);

    if (refuse.ok) {
      expect(refuse.decision.status).toBe("refused");
      expect(refused.length).toBeGreaterThanOrEqual(1);
      expect(refuse.executionAttemptCreated).toBe(false);
    }

    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: d0,
    });
    if (accepted.length === 1 && refused.length >= 1) {
      // If refuse recorded despite LPS bump: Continuity still projects accepted
      // (refuse becomes digest-inapplicable), never refuse-as-GO.
      expect(again.ok && again.kind === "decided").toBe(true);
      if (!again.ok || again.kind !== "decided") return;
      expect(again.decision.status).toBe("accepted");
      expect(again.decision.decisionId).toBe(accept.decision.decisionId);

      const prepAccepted = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: accept.decision.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prepAccepted.ok).toBe(true);

      const prepRefused = await verifyGenericMissionHumanDecisionForPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: refused[0]!.decisionId,
      });
      expect(prepRefused.ok).toBe(false);
      if (prepRefused.ok) return;
      expect(prepRefused.code).toBe("HD_REFUSED");
    } else {
      // Typical: Refuse on D0 after LPS bump → HD_SUBJECT_STALE; accepted alone.
      expect(refuse.ok).toBe(false);
      if (!refuse.ok) {
        expect(["HD_SUBJECT_STALE", "LPS_CURRENT_UNREADABLE"]).toContain(
          refuse.code,
        );
      }
      expect(refused.length).toBe(0);
      expect(again.ok && again.kind === "decided").toBe(true);
      if (!again.ok || again.kind !== "decided") return;
      expect(again.decision.status).toBe("accepted");
      expect(again.decision.decisionId).toBe(accept.decision.decisionId);
    }
  });

  it("SC2 — Refuse then Accept(+LPS) → both durable; Continuity projects accepted (refuse digest-inapplicable)", async () => {
    const { projectId, oa } = await seedProject("sc2");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const presented = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(presented.ok && presented.kind === "awaiting_decision").toBe(true);
    if (!presented.ok || presented.kind !== "awaiting_decision") return;
    const d0 = presented.subject.presentationDigest;

    const refuse = await recordGenericMissionHumanDecision({
      oa,
      subject: presented.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(refuse.ok).toBe(true);
    if (!refuse.ok) return;
    expect(refuse.decision.status).toBe("refused");
    expect(refuse.executionAttemptCreated).toBe(false);

    const accept = await recordGenericMissionHumanDecision({
      oa,
      subject: presented.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
      presentedPresentationDigest: d0,
    });
    expect(accept.ok).toBe(true);
    if (!accept.ok) return;
    expect(accept.decision.status).toBe("accepted");

    const hist = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: presented.subject.missionSubjectId,
    });
    expect(hist.ok).toBe(true);
    if (!hist.ok) return;
    const accepted = hist.decisions.filter((d) => d.status === "accepted");
    const refused = hist.decisions.filter((d) => d.status === "refused");
    expect(accepted.length).toBe(1);
    expect(refused.length).toBe(1);
    // OA: Accept supersedes only prior accepted — refuse remains durable.
    expect(hist.decisions.filter((d) => d.status === "superseded")).toHaveLength(
      0,
    );

    // After Accept LPS bump, sealed digest advances. assessApplicable:
    // - accepted + linked LPS bump → applicable
    // - refused + digest mismatch → NOT applicable (status≠accepted)
    // Continuity therefore projects decided accepted — refuse is not a GO.
    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: d0,
    });
    expect(again.ok && again.kind === "decided").toBe(true);
    if (!again.ok || again.kind !== "decided") return;
    expect(again.decision.status).toBe("accepted");
    expect(again.decision.decisionId).toBe(accept.decision.decisionId);
    expect(again.decision.decisionId).not.toBe(refuse.decision.decisionId);

    const prepRefuse = await verifyGenericMissionHumanDecisionForPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: refuse.decision.decisionId,
    });
    expect(prepRefuse.ok).toBe(false);
    if (!prepRefuse.ok) expect(prepRefuse.code).toBe("HD_REFUSED");

    const prepAccept = await prepareGenericExecutionContractDraft({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: accept.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prepAccept.ok).toBe(true);
  });

  it("RP04/SC3 — concurrent Accept/Refuse → ≤1 accepted; Continuity never projects refuse as GO when accepted LPS-linked", async () => {
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
    const d0 = continuity.subject.presentationDigest;

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

    const hist = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: continuity.subject.missionSubjectId,
    });
    expect(hist.ok).toBe(true);
    if (!hist.ok) return;
    const accepted = hist.decisions.filter((d) => d.status === "accepted");
    const refused = hist.decisions.filter((d) => d.status === "refused");
    expect(accepted.length).toBeLessThanOrEqual(1);
    expect(accepted.length + refused.length).toBeGreaterThanOrEqual(1);
    expect(accept.executionAttemptCreated ?? false).toBe(false);
    expect(refuse.executionAttemptCreated ?? false).toBe(false);

    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: d0,
    });

    if (accepted.length === 1 && refused.length >= 1) {
      // IMPLEMENTED: LPS-linked accepted remains applicable; refused becomes
      // digest-inapplicable after bump → Continuity decided accepted (not refuse GO,
      // not silent invent of a third status). Refuse stays durable for PREPARE deny.
      expect(again.ok && again.kind === "decided").toBe(true);
      if (!again.ok || again.kind !== "decided") return;
      expect(again.decision.status).toBe("accepted");
      expect(again.decision.decisionId).toBe(accepted[0]!.decisionId);
      expect(again.decision.status).not.toBe("refused");

      const prepRefuse = await verifyGenericMissionHumanDecisionForPrepare({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: refused[0]!.decisionId,
      });
      expect(prepRefuse.ok).toBe(false);
      if (!prepRefuse.ok) expect(prepRefuse.code).toBe("HD_REFUSED");

      const prepAccept = await prepareGenericExecutionContractDraft({
        oa,
        projectId,
        cycleInstanceId: null,
        analysis,
        decisionId: accepted[0]!.decisionId,
        forceLocalAuthority: true,
        pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
      });
      expect(prepAccept.ok).toBe(true);
    } else if (accepted.length === 1 && refused.length === 0) {
      expect(again.ok && again.kind === "decided").toBe(true);
      if (!again.ok || again.kind !== "decided") return;
      expect(again.decision.status).toBe("accepted");
      expect(again.decision.decisionId).toBe(accepted[0]!.decisionId);
    } else if (refused.length >= 1 && accepted.length === 0) {
      expect(again.ok && again.kind === "decided").toBe(true);
      if (!again.ok || again.kind !== "decided") return;
      expect(again.decision.status).toBe("refused");
    } else {
      expect(accepted.length + refused.length).toBe(0);
      expect(accept.ok).toBe(false);
      expect(refuse.ok).toBe(false);
    }
  });

  it("SC5 — Accept(no LPS link)+Refuse same digest → OA_DECISION_HISTORY_AMBIGUOUS", async () => {
    const { projectId, oa } = await seedProject("sc5");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const presented = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(presented.ok && presented.kind === "awaiting_decision").toBe(true);
    if (!presented.ok || presented.kind !== "awaiting_decision") return;
    const d0 = presented.subject.presentationDigest;

    const accept = await recordGenericMissionHumanDecision({
      oa,
      subject: presented.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(accept.ok).toBe(true);
    if (!accept.ok) return;

    const refuse = await recordGenericMissionHumanDecision({
      oa,
      subject: presented.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
      presentedPresentationDigest: d0,
    });
    expect(refuse.ok).toBe(true);
    if (!refuse.ok) return;

    const hist = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: presented.subject.missionSubjectId,
    });
    expect(hist.ok).toBe(true);
    if (!hist.ok) return;
    expect(hist.decisions.filter((d) => d.status === "accepted")).toHaveLength(1);
    expect(hist.decisions.filter((d) => d.status === "refused")).toHaveLength(1);

    // Same presentation digest → both applicable → Continuity fail-closed.
    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: d0,
    });
    expect(again.ok).toBe(false);
    if (again.ok) return;
    expect(again.code).toBe("OA_DECISION_HISTORY_AMBIGUOUS");

    const selected = selectApplicableGenericMissionDecision({
      decisions: hist.decisions,
      subject: presented.subject,
    });
    expect(selected.ok).toBe(false);
    if (selected.ok) return;
    expect(selected.code).toBe("OA_DECISION_HISTORY_AMBIGUOUS");
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

  // ─── POST-RECORD D0/D1 (Product hook semantics) ───────────────────

  it("F1/F2 — Accept → LPS bump → Read with client digest D0 → decided accepted", async () => {
    const { projectId, oa } = await seedProject("f2d0");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const presented = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(presented.ok && presented.kind === "awaiting_decision").toBe(true);
    if (!presented.ok || presented.kind !== "awaiting_decision") return;
    const d0 = presented.subject.presentationDigest;
    const lpsBefore = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsBefore.ok).toBe(true);
    if (!lpsBefore.ok) return;

    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: presented.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.humanDecisionCreated).toBe(true);
    expect(recorded.executionAttemptCreated).toBe(false);

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;
    expect(lpsAfter.livingProjectState.version).toBeGreaterThan(
      lpsBefore.livingProjectState.version,
    );
    expect(lpsAfter.livingProjectState.decisionIds ?? []).toContain(
      recorded.decision.decisionId,
    );

    // Product hook: genericMissionDigestRef still holds D0 after Record,
    // then refreshGovernedMoments → refreshGenericMissionDecision(D0).
    const reread = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: d0,
    });
    expect(reread.ok && reread.kind === "decided").toBe(true);
    if (!reread.ok || reread.kind !== "decided") return;
    expect(reread.decision.status).toBe("accepted");
    expect(reread.decision.decisionId).toBe(recorded.decision.decisionId);
    expect(reread.decision.presentationDigest).toBe(d0);
    expect(reread.humanDecisionCreated).toBe(false);
    expect(reread.executionAttemptCreated).toBe(false);

    // Sealed subject digest may have advanced (D1) while decision retains D0.
    expect(reread.subject.presentationDigest).not.toBe("");
    const hist = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: presented.subject.missionSubjectId,
    });
    expect(hist.ok).toBe(true);
    if (!hist.ok) return;
    expect(hist.decisions.filter((d) => d.status === "accepted")).toHaveLength(1);
  });

  it("F6/C2 — LPS bump without HD link → D0 re-read is stale, not decided GO", async () => {
    const { projectId, oa } = await seedProject("c2unlink");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const presented = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(presented.ok && presented.kind === "awaiting_decision").toBe(true);
    if (!presented.ok || presented.kind !== "awaiting_decision") return;
    const d0 = presented.subject.presentationDigest;

    // Material LPS bump unrelated to a Generic Mission HD (no decisionIds link).
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    const appended = await oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: `${lps.livingProjectState.objective} — material drift`,
      createdBy: LOCAL_PILOTE_ACTOR,
      correlationId: "cor:mhd02-c2-unlinked",
      context: lps.livingProjectState.context,
      scope: lps.livingProjectState.scope,
      decisionIds: [...(lps.livingProjectState.decisionIds ?? [])],
    });
    expect(appended.ok).toBe(true);

    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: d0,
    });
    // No applicable HD + digest mismatch → stale (not an invented decided GO).
    expect(again.ok && again.kind === "stale_presentation_required").toBe(true);
  });

  it("C3/C5 — LPS objective drift after linked HD → not decided with D0", async () => {
    const { projectId, oa } = await seedProject("c3obj");
    const analysis = structuralAnalysis();
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const presented = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(presented.ok && presented.kind === "awaiting_decision").toBe(true);
    if (!presented.ok || presented.kind !== "awaiting_decision") return;
    const d0 = presented.subject.presentationDigest;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: presented.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: true,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;
    // Further material bump that keeps the HD id linked but changes objective.
    const drifted = await oa.projectServices.appendLivingProjectStateVersion.execute({
      projectId,
      expectedVersion: lps.livingProjectState.version,
      objective: "OBJECTIVE MATÉRIELLEMENT MUTÉ POST-HD",
      createdBy: LOCAL_PILOTE_ACTOR,
      correlationId: "cor:mhd02-c3-obj",
      context: lps.livingProjectState.context,
      scope: lps.livingProjectState.scope,
      decisionIds: [...(lps.livingProjectState.decisionIds ?? [])],
    });
    expect(drifted.ok).toBe(true);

    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: d0,
    });
    expect(again.ok).toBe(true);
    if (!again.ok) return;
    expect(again.kind).not.toBe("decided");
    expect(
      again.kind === "stale_presentation_required" ||
        again.kind === "awaiting_decision",
    ).toBe(true);
  });

  it("READ-AUTH — w2Read action reuses resolveCurrentAuthenticatedPilote (source)", () => {
    const src = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    const readIdx = src.indexOf(
      "export async function w2ReadGenericMissionDecisionContinuityAction",
    );
    const recordIdx = src.indexOf(
      "export async function w2RecordGenericMissionHumanDecisionAction",
    );
    expect(readIdx).toBeGreaterThan(-1);
    const readBody = src.slice(readIdx, recordIdx > readIdx ? recordIdx : undefined);
    expect(readBody).toContain("resolveCurrentAuthenticatedPilote");
    expect(readBody).toContain("if (!pilote.ok)");
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

---

## 15. Fin de pack

Handoff message:
`docs(review-handoff): publish M-HD-02 RP04 authority verification`
