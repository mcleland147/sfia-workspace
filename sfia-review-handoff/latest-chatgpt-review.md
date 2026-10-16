# SFIA STUDIO — M-HD-02 POST-RECORD CONTINUITY & AUTHORITY
## Review Pack FULL — Critical Targeted Correction

**Horodatage:** 2026-10-16 20:35:14 CEST (Europe/Paris)
**GO Morris:** M-HD-02 POST-RECORD CONTINUITY & AUTHORITY CRITICAL TARGETED CORRECTION PASS (2026-10-16)
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — GLOBAL INTEGRATED PRODUCT QA IN PROGRESS
**Capacité:** V3-F05 (connexes V3-F02 / V3-F11 / V3-F12 / V3-F14)
**Cycle:** 8 — Delivery / implémentation
**Profil:** CRITICAL
**Typologie:** EVOL — correction ciblée
**CKC:** ckc:studio:delivery

---

## 1. Verdict

**M-HD-02 POST-RECORD CONTINUITY DETERMINISTIC PASS**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Interdits non revendiqués: PRODUCT GIT INTEGRATED / PR READY / READY FOR REAL / HUMAN QA PASS / P6 GLOBAL PASS / RUNTIME V3 ADOPTED.

---

## 2. Git Truth initial / final

| Champ | Valeur |
|-------|--------|
| Remote | `mcleland147/sfia-workspace` |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| Dirty | EXPECTED — préservé |
| Handoff précédent | `c2647ede` / blob `aff784fb` |

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

### Diff stat (fichiers de ce correctif)

```
 .../app/features/project-assistant/w2/actions.ts   | 299 +++++++++++++++++++++
 1 file changed, 299 insertions(+)

```

Aucun commit Product. Aucun push Product. Aucune PR.

---

## 3. Sources consultées

PROCESSUS: cycle-execution-template · routing-guide · rules-and-guardrails · chatgpt-cursor-operating-model · SFIA v2.6 (PROCESSUS)

Convergence / Product: Build Doctrine · Roadmap · C1 · P2 FOM · P6 QA · Architecture D-ER locale · Doctrine v3 30/32/34/35/37 · CKC 08

Handoff précédent: `sfia/review-handoff` @ `c2647ede` / `aff784fb`

Product: continuity · applicability · record · actions · useProductConversation · middleware · resolveCurrentPilote · evaluateLpsTransitionAfterHumanDecision

---

## 4. Convergence Pre-check

| | |
|--|--|
| **TARGET** | HD acceptée reste liée après Record + bump LPS; dérive matérielle invalide; pas d'élargissement d'autorité |
| **CURRENT (pré-correctif)** | Replay LPS OK; D0 client → stale prématuré; currentness LPS matérielle partielle; RP04 tautologique; Read auth à qualifier |
| **KEEP** | ProductSqliteSession · f1-default · OA HD · DecisionBasis · Pending offer · Materiality · EC · UI M-HD-02 |
| **ADAPT** | Continuity digest order · LPS CR-04 check · RP04 oracle · Read auth reuse |
| **REPLACE** | Aucun |
| **DETTE** | Pending process-local · multi-conversation N/I · Pilot env-bound · UI08/REAL/E4–E8 |

---

## 5. Findings ChatGPT → reproduction

### Hypothèse (handoff c2647ede)
Navigateur conserve digest **D0** → Accept → Record + LPS bump → seal post-bump **D1** → `refreshGenericMissionDecision(D0)` → comparaison `clientDigest !== sealed.digest` **avant** lecture OA → `stale_presentation_required`.

### Cause racine (confirmée)
`genericMissionDecisionContinuity.ts` — contrôle digest client **avant** `listDecisionHistory` / applicabilité OA.

### Preuve comportementale (F1/F2)
Test `F1/F2 — Accept → LPS bump → Read with client digest D0 → decided accepted` traverse la même sémantique que le hook (`clientPresentationDigest: d0`).

LP01/LP02 **ne suffit pas** (pas de digest client). F2 exige D0.

---

## 6. Correction réalisée

### Continuity (Bloc B)
1. Charger historique OA + LPS courant **avant** stale digest.
2. `selectApplicableGenericMissionDecision` (material + link).
3. Si HD accepted + version LPS avancée → `getLivingProjectStateVersion(sealed)` + `evaluateLpsTransitionAfterHumanDecision` (politique CR-04 existante: objective/context/scope/constraints/doctrine/cycle/trajectory/decisionIds).
4. Cas A (bump légitime lié) → `decided` même si client tient D0.
5. Cas B (dérive matérielle / mismatch sans HD applicable) → `stale_presentation_required`.
6. LPS scellé illisible → `LPS_SEALED_UNREADABLE` fail-closed.

### Read authority (Bloc E)
`w2ReadGenericMissionDecisionContinuityAction` réutilise `resolveCurrentAuthenticatedPilote` (même contrôle que Record).
Complète middleware Better Auth + allowlist déjà présent.
**AUTHORIZATION PROVEN BY EXISTING BOUNDARY** (+ contrôle explicite action).
Pas de nouvelle policy / Better Auth / ACL Project (modèle Pilot single-user existant).

### RP04 (Bloc D)
Oracle durable: hist accepted/refused, relecture D0, dispositions effectives — **plus de tautologie**.

---

## 7. Matrice E1–E15

| Exit | Résultat | Preuve |
|------|----------|--------|
| E1 | PASS | Cause racine digest-before-OA; F2 couvre parcours D0 |
| E2 | PASS | F1/F2 — D0 → decided accepted |
| E3 | PASS | hist accepted length 1 |
| E4 | PASS | executionAttemptCreated false |
| E5 | PASS | C3/C5 objective drift → not decided |
| E6 | PASS | LP03 LPS_CURRENT_UNREADABLE |
| E7 | PASS | RP06/07 + M-HD-02 statuses |
| E8 | PASS | RP03 concurrent Accept |
| E9 | PASS | RP04 oracle durable non tautologique |
| E10 | PASS | READ-AUTH + middleware boundary documentée |
| E11 | PASS | aucun nouveau store/policy/moteur |
| E12 | PASS | 167/167 NR (9 files) |
| E13 | PASS | F2 = sémantique hook clientDigest |
| E14 | PASS | Fake/Real ci-dessous |
| E15 | PASS | dirty préservé, HEAD inchangé |

---

## 8. Validations

```
vitest (9 files M-HD-01/02 + scoped): 167 passed
tsc --noEmit: PASS
npm run build: PASS
git diff --check (fichiers correctif): PASS
```

Aucun OpenAI LIVE / Cursor REAL / Human QA / :3020.

---

## 9. Fake / Real Qualification

**Niveau:** DETERMINISTIC PROVEN — POST-RECORD CONTINUITY / LPS MATERIAL / READ AUTH BOUNDARY
**Gate REAL:** NON ACCORDÉ
**≠ READY FOR REAL**

Gaps: Session REAL · Browser E2E · UI08 · Human QA · E4–E8 · Pending process-local · Pilot env-bound

---

## 10. Dette / Gates

| Dette | Gate |
|-------|------|
| Multi-conversation | CONVERSATION IDENTITY (si exigé) |
| Pending process-local | future GO |
| Pilot env-bound / REAL | Gate REAL |
| UI08 / E4–E8 | gates distincts |

Aucun STOP Authority/Currentness Design — politiques existantes (CR-04, Better Auth) réutilisées.

---

## 11. Instruction ChatGPT

Lire depuis Git:

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer:

**SFIA STUDIO — M-HD-02 POST-RECORD CONTINUITY & AUTHORITY CRITICAL CODE REVIEW.**

Examiner: D0/D1 + relecture UI · applicabilité HD après bump LPS · currentness matérielle CR-04 · idempotence/concurrence · autorité de lecture · absence de politique nouvelle · non-régression · absence commit Product.

---

## 12. Contenu intégral — fichiers modifiés / tests


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
  evaluateLpsTransitionAfterHumanDecision,
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

  const clientDigest = input.clientPresentationDigest?.trim() || "";
  const sealedDigest = sealed.subject.presentationDigest;
  const digestMismatch = Boolean(clientDigest && clientDigest !== sealedDigest);

  // Post-Record path: OA history + LPS currentness BEFORE client-digest stale.
  // A legitimate HD→LPS bump changes the sealed digest (D0→D1) while the Pilote
  // UI still holds D0 — that must not become stale_presentation_required.
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
    const sealedLpsVersion = d.decisionBasis?.proposalContext.lpsVersion;

    // Material LPS currentness (existing CR-04 policy) when version advanced.
    if (
      d.status === "accepted" &&
      typeof sealedLpsVersion === "number" &&
      currentLps.version > sealedLpsVersion
    ) {
      const sealedLps = await input.oa.projectServices.getLivingProjectStateVersion.execute(
        {
          projectId,
          version: sealedLpsVersion,
        },
      );
      if (!sealedLps.ok) {
        return fail(
          "LPS_SEALED_UNREADABLE",
          "LPS scellé illisible — transition non qualifiable; aucune décision présentée comme applicable.",
        );
      }
      const sealedSnap = lpsMaterialSnapshotFromLivingProjectState(
        sealedLps.livingProjectState,
      );
      const sealedWithDoctrine = {
        ...sealedSnap,
        doctrineDigest:
          sealedSnap.doctrineDigest ||
          d.decisionBasis?.proposalContext.doctrineDigest?.trim() ||
          "",
      };
      const lpsEval = evaluateLpsTransitionAfterHumanDecision({
        sealed: sealedWithDoctrine,
        current: currentLps,
        decisionId: d.decisionId,
      });
      if (!lpsEval.ok) {
        // Case B — material / unlinked LPS drift: not a current GO.
        if (digestMismatch) {
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
          kind: "awaiting_decision",
          subject: sealed.subject,
          options: presentedOptions(),
          offerFingerprint: offer.offerFingerprint,
          sessionKey,
          humanDecisionCreated: false,
          executionAttemptCreated: false,
        };
      }
    }

    // Case A — applicable durable HD (incl. after legitimate LPS bump / D0 client digest).
    // When UI held D0, prefer returning the historically presented digest on the decision.
    return {
      ok: true,
      kind: "decided",
      subject: sealed.subject,
      decision: {
        decisionId: d.decisionId,
        status: d.status,
        selectedOptionId: d.selectedOptionId,
        actorId: d.actor.actorId,
        presentationDigest:
          ctx?.presentationDigest ?? sealed.subject.presentationDigest,
      },
      options: presentedOptions(),
      offerFingerprint: offer.offerFingerprint,
      sessionKey,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  // No applicable durable HD — client digest divergence means stale presentation.
  if (digestMismatch) {
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

  it("RP04 — concurrent Accept vs Refuse → durable disposition + UI re-read oracle", async () => {
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
    // Never two accepted GOs; at least one durable outcome recorded.
    expect(accepted.length).toBeLessThanOrEqual(1);
    expect(accepted.length + refused.length).toBeGreaterThanOrEqual(1);
    expect(accept.executionAttemptCreated ?? false).toBe(false);
    expect(refuse.executionAttemptCreated ?? false).toBe(false);

    // Re-read with client D0 (Product hook semantics) — disposition must be
    // authoritative: decided with a single status, or fail-closed ambiguity,
    // never a silent invented GO.
    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: d0,
    });
    if (accepted.length === 1 && refused.length === 0) {
      expect(again.ok && again.kind === "decided").toBe(true);
      if (!again.ok || again.kind !== "decided") return;
      expect(again.decision.status).toBe("accepted");
      expect(again.decision.decisionId).toBe(accepted[0]!.decisionId);
    } else if (refused.length >= 1 && accepted.length === 0) {
      expect(again.ok && again.kind === "decided").toBe(true);
      if (!again.ok || again.kind !== "decided") return;
      expect(again.decision.status).toBe("refused");
    } else if (accepted.length === 1 && refused.length >= 1) {
      // Mixed durable statuses: OA applicability must fail-closed or pick one
      // applicable — never two concurrent GOs as "accepted".
      if (again.ok && again.kind === "decided") {
        expect(["accepted", "refused", "amended"]).toContain(
          again.decision.status,
        );
        if (again.decision.status === "accepted") {
          expect(again.decision.decisionId).toBe(accepted[0]!.decisionId);
        }
      } else {
        expect(
          !again.ok ||
            again.kind === "stale_presentation_required" ||
            again.kind === "awaiting_decision",
        ).toBe(true);
      }
    } else {
      // Both requests failed closed — no durable invent.
      expect(accepted.length + refused.length).toBe(0);
      expect(accept.ok).toBe(false);
      expect(refuse.ok).toBe(false);
    }
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

### SECTION: `actions.ts` L1011-1064 — Read action (auth + continuity)

```typescript
export async function w2ReadGenericMissionDecisionContinuityAction(input: {
  projectId: string;
  clientPresentationDigest?: string | null;
  /** Hostile — ignored. */
  claimedSessionKey?: unknown;
}): Promise<GenericMissionDecisionContinuityResult> {
  void input.claimedSessionKey;
  // Existing Product boundary: Better Auth session + allowlist (same resolver as Record).
  // Complements middleware protection of Product surfaces — no new auth policy.
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
```

### SECTION: `useProductConversation.ts` L531-585 (client digest D0 path)

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
```

### SECTION: `genericMissionSubject.ts` L878-937 (CR-04 LPS policy reused)

```typescript
export function evaluateLpsTransitionAfterHumanDecision(input: {
  readonly sealed: LpsMaterialSnapshot;
  readonly current: LpsMaterialSnapshot;
  readonly decisionId: string;
}): { readonly ok: true } | { readonly ok: false; readonly reason: string } {
  if (input.current.version < input.sealed.version) {
    return { ok: false, reason: "lps_version_regressed" };
  }
  if (input.current.version === input.sealed.version) {
    return { ok: true };
  }
  // Material LPS fields must be identical aside from decisionIds growth.
  if (input.sealed.objective.trim() !== input.current.objective.trim()) {
    return { ok: false, reason: "lps_objective_drift" };
  }
  if ((input.sealed.context ?? "") !== (input.current.context ?? "")) {
    return { ok: false, reason: "lps_context_drift" };
  }
  if ((input.sealed.scope ?? "") !== (input.current.scope ?? "")) {
    return { ok: false, reason: "lps_scope_drift" };
  }
  const sealedConstraints = [...(input.sealed.constraints ?? [])].sort();
  const currentConstraints = [...(input.current.constraints ?? [])].sort();
  if (!sameStringArr(sealedConstraints, currentConstraints)) {
    return { ok: false, reason: "lps_constraints_drift" };
  }
  if (input.sealed.doctrineDigest !== input.current.doctrineDigest) {
    return { ok: false, reason: "lps_doctrine_drift" };
  }
  if (
    (input.sealed.activeCycleInstanceId ?? null) !==
    (input.current.activeCycleInstanceId ?? null)
  ) {
    return { ok: false, reason: "lps_cycle_drift" };
  }
  if ((input.sealed.trajectoryId ?? null) !== (input.current.trajectoryId ?? null)) {
    return { ok: false, reason: "lps_trajectory_drift" };
  }
  if (
    (input.sealed.trajectoryVersion ?? null) !==
    (input.current.trajectoryVersion ?? null)
  ) {
    return { ok: false, reason: "lps_trajectory_version_drift" };
  }
  const currentIds = input.current.decisionIds ?? [];
  if (!currentIds.includes(input.decisionId)) {
    return { ok: false, reason: "lps_decision_not_linked" };
  }
  // Sealed decisionIds must remain a prefix subset of current (HD append only).
  const sealedIds = input.sealed.decisionIds ?? [];
  for (let i = 0; i < sealedIds.length; i += 1) {
    if (currentIds[i] !== sealedIds[i]) {
      return { ok: false, reason: "lps_decision_history_rewritten" };
    }
  }
  return { ok: true };
}

/**
 * @deprecated Prefer evaluateLpsTransitionAfterHumanDecision (CR-04).
```

---

## 13. Fin de pack

Review Pack FULL mono-cycle.
Handoff message:
`docs(review-handoff): publish M-HD-02 post-record continuity correction review`
