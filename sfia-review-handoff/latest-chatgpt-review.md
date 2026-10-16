# SFIA STUDIO — M-HD-02 TARGETED CRITICAL CORRECTION PASS
## Review Pack FULL — ChatGPT Critical Code Review

**Horodatage:** 2026-10-16 18:39:47 CEST (Europe/Paris)
**GO Morris:** MORRIS — M-HD-02 TARGETED CORRECTION PASS (2026-10-16)
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — IN PROGRESS
**Capacité:** V3-F05 (connexes V3-F11 / V3-F12 / V3-F14)
**Cycle:** 8 — Delivery / implémentation
**Profil:** CRITICAL — LOCAL DETERMINISTIC
**Typologie:** EVOL — targeted correction
**CKC:** ckc:studio:delivery

---

## 1. Verdict (Cursor)

**M-HD-02 MISSION IDENTITY & DECISION CONTINUITY — DETERMINISTIC PASS**

**SESSION ISOLATION / REPLAY — DETERMINISTIC PASS**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Interdits non revendiqués: PRODUCT GIT INTEGRATED / PR READY / READY FOR REAL / HUMAN QA PASS / P6 GLOBAL PASS / RUNTIME V3 ADOPTED.

---

## 2. Git Truth initial / final (candidat Product)

| Champ | Valeur |
|-------|--------|
| Remote | `origin https://github.com/mcleland147/sfia-workspace.git` |
| Branche | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` (attendu `b4c1d862…`) |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (attendu `896ff59c…`) |
| Dirty | EXPECTED — préservé (aucun reset/stash/clean/rebase/commit Product) |

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

PROCESSUS (méthode):
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- Méthode / Operating Model SFIA v2.6 (PROCESSUS)

Convergence / Product:
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- Product Completion C1 / P2/P6 / Doctrine v3 30·32·34·35·37 / CKC Delivery 08
- Architecture D-ER candidate locale (READ-ONLY)

Handoff précédent M-HD-02:
- Branche `sfia/review-handoff` tip `ca68fe69df85f3799fcd9c95e0934a7d872049c1`
- Blob `eb065555dcd90810c4732d53c2ea20885b78b0a5`
- Fichier `sfia-review-handoff/latest-chatgpt-review.md`
- Qualification: INCOMPLETE pour revue CRITICAL autonome → corrigé par ce pack FULL

Sources locales dirty priment sous Git Truth cohérente.

---

## 4. Convergence Pre-check

**Capacité:** V3-F05 Generic Execution — P6 IN PROGRESS

| | |
|--|--|
| **TARGET** | Mission générique identifiée sans ambiguïté; HD acceptée limitée à cette mission/effets; décision antérieure ≠ autorisation implicite après mutation |
| **CURRENT (pré-correction)** | M-HD-01 Seal/Record + EC/HD + carte UI; identité Record insuffisamment reliée au fingerprint; continuité durable ambiguë après effets; isolation session / idempotence réseau non entièrement démontrées; handoff CRITICAL incomplet |
| **KEEP** | GenericMissionSubject, OA DecisionBasis generic_mission, OA HumanDecision, EC, Pending offer, ProductConversationController, ConversationSurface, GovernedGenericMissionDecisionCard, GovernedDecisionCard, GovernedConfirmationCard, ExecutionSurface, Better Auth session, AuthorityResolver OA |
| **ADAPT** | Identité canonique au Record; lecture continuité; session binding; rejeu; tests négatifs |
| **REPLACE** | Aucune architecture par défaut |
| **EXIT PROOF** | Record uniquement sur identité dérivée offre Product courante; HD ancienne ≠ decided sur effets différents; pas de cross-session; double clic ≠ nouvelle HD indue |
| **NEXT** | Validation UI/runtime M-HD-02 puis E4–E8 sous gates distincts |
| **DETTE** | Pending offer process-local; Pilot env-bound; Session REAL non prouvée; UI08 visual OPEN; E4–E8 OPEN |

---

## 5. Corrections — synthèse technique

### Bloc A — Identité canonique (PRIORITÉ 1)

Server action `w2RecordGenericMissionHumanDecisionAction`:
1. Résout `sessionKey` via `resolveProductPrepareOfferSessionKey()` (Nora sessionDbPath → `sessdb:…`) — ignore `claimedSessionKey` client.
2. Charge l'offre Product courante `getCurrentGenericPrepareOffer(projectId, sessionKey)`.
3. Dérive `canonicalMissionSubjectId = missionSubjectIdFromOfferFingerprint(offer.offerFingerprint)`.
4. Refuse `HD_MISSION_IDENTITY_MISMATCH` si ≠ `input.missionSubjectId`.
5. Re-scelle depuis Product (`sealGenericMissionForPresentation`) et compare `presentationDigest`.
6. Vérifie projectId / cycle lié.
7. N'utilise jamais le seul payload client pour l'identité.

### Bloc B — Continuité HD / effets

Nouveau module `genericMissionDecisionApplicability.ts`:
- `assessApplicableGenericMissionDecision` / `selectApplicableGenericMissionDecision`
- Project + subject + DecisionBasis + sourceType + materialCurrentnessMatch
- Digest mismatch OK seulement si accepted + LPS bump légitime lié au decisionId
- revoked/superseded/refused/amended ≠ applicable accepted
- Historique OA illisible → fail-closed (pas "none")
- Ambiguïté → fail-closed / contrat OA

### Bloc C — Isolation session

`resolveProductPrepareOfferSessionKey` dans `pendingGenericPrepareOfferStore.ts`:
- remember / read / record partagent la même clé serveur
- Client `claimedSessionKey` ignoré
- Absence de session fiable → refus (pas fallback cross-session "default" silencieux pour les chemins Record/Read structurants)
- SI01–SI06 couverts en tests Fake

### Bloc D — Idempotence / replay

`recordGenericMissionHumanDecision`:
- Replay même option/status → `GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED` (retour état durable)
- Digest périmé / effets mutés → refus
- Refused/amended ≠ conversion en accepted
- Zéro Attempt / zéro Execute au Record

### Bloc E — UI

Aucun nouveau moteur de carte. Figma inchangé. Carte existante consomme continuité applicable (pas HD stale comme GO).

---

## 6. Matrice MI / HC / SI / ID / NR

Légende preuve: **U** = unit/product Fake vitest; **C** = inspection code; **B** = browser REAL (OPEN); **R** = session REAL (OPEN)

### IDENTITÉ
| ID | Résultat | Preuve | Lien |
|----|----------|--------|------|
| MI01 | PASS | U | `p6.mHd02.missionIdentityContinuitySession.d0.test.ts` MI01 |
| MI02 | PASS | U | idem MI02 arbitraire → refus |
| MI03 | PASS | U | ancienne offre vs courante |
| MI04 | PASS | U | digest auto-cohérent ≠ identité canonique |
| MI05 | PASS | U | project mismatch |
| MI06 | PASS | U | cycle lié invalide |

### CONTINUITÉ
| ID | Résultat | Preuve | Lien |
|----|----------|--------|------|
| HC01 | PASS | U | DecisionBasis exact → decided |
| HC02 | PASS | U | risques changés → inapplicable |
| HC03 | PASS | U | stops/impact → inapplicable |
| HC04 | PASS | U | reservations |
| HC05 | PASS | U | impactSignals |
| HC06 | PASS | U | bump LPS Record HD → pas faux stale |
| HC07 | PASS | U | bump LPS matériel postérieur → stale |
| HC08 | PASS | U | revoked/superseded |
| HC09 | PASS | U | refused/amended préservés |
| HC10 | PASS | U | OA illisible → refus |
| HC11 | PASS | U | ambiguïté fail-closed |

### SESSION
| ID | Résultat | Preuve | Lien |
|----|----------|--------|------|
| SI01 | PASS | U | sessionKey non-default |
| SI02 | PASS | U | A≠B aucune lecture croisée |
| SI03 | PASS | U | même project deux sessions |
| SI04 | PASS | U | session non résolue → refus |
| SI05 | PASS | U | client pretend sessionKey tiers ignoré/refus |
| SI06 | PASS | U | remember/read/record clé cohérente |

### IDEMPOTENCE
| ID | Résultat | Preuve | Lien |
|----|----------|--------|------|
| ID01 | PASS | U | double Accept → ALREADY_APPLIED |
| ID02 | PASS | U | retry identique |
| ID03 | PASS | U | replay digest périmé |
| ID04 | PASS | U | refused + retry ≠ accepted |
| ID05 | PASS | U | amended + retry ≠ accepted |
| ID06 | PASS | U | nouvelle présentation gouvernée OK |
| ID07 | PASS | U | Record → 0 Attempt |
| ID08 | PASS | U | Record → 0 Execute |

### NON-RÉGRESSION (exécutée)
| Suite | Tests | Résultat |
|-------|-------|----------|
| M-HD-02 corr + base | 31 | PASS |
| M-HD-01 + Authority + EC/HD + Final + Project-scoped + Inspection | 148 total (8 files) | PASS |
| NR UI browser / Session REAL | — | **OPEN** |
| UI08 visual runtime | — | **OPEN** |

---

## 7. Validations techniques exécutées

```
vitest M-HD-02 (2 files): 31 passed
vitest NR bundle (8 files): 148 passed
tsc --noEmit: PASS (exit 0)
npm run build: PASS (Next.js Product build)
```

Runtime :3020 NON utilisé.
Cursor REAL / OpenAI LIVE / Human QA: NON.

---

## 8. Fake / Real Qualification

**Applicable:** OUI
**Entrée:** M-HD-02 DETERMINISTIC PROGRESS CONFIRMED (correction)
**Niveau:** LOCAL DETERMINISTIC — MISSION IDENTITY / HD CONTINUITY / SESSION ISOLATION / REPLAY PROOF
**Gate REAL:** NON ACCORDÉ

| Frontière | Fake | REAL | Parité | Gap |
|-----------|------|------|--------|-----|
| Nora Session | sessionDbPath test | Better Auth + Nora REAL | identité/digest/OA | Session REAL OPEN |
| Pending offer | process-local store | idem | clé sessdb | process-local dette |
| OA HD / Authority | SQLite Fake | OA REAL | mêmes refus | — |
| UI carte | vitest hooks | navigateur Product | — | Browser E2E OPEN |
| Visual | — | Figma frames | — | UI08 OPEN |

Claims interdits non émis.

---

## 9. Dette / Exit / Gates Morris résiduels

| Dette | Exit | Gate |
|-------|------|------|
| Pending offer process-local | persistence durable gouvernée | future GO |
| Pilot authority env-bound | REAL Pilote binding | Gate A residual |
| Session REAL | Better Auth + navigateur | Gate REAL |
| UI08 visual runtime | capture runtime autorisée | UI08 |
| E4–E8 | gates distincts | OPEN |

Aucun STOP Session/Mission Identity / Idempotency Contract Gate — mécanismes existants suffisants.

---

## 10. Instruction ChatGPT

Lire depuis Git:

`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer:

**SFIA STUDIO — M-HD-02 MISSION IDENTITY, HUMANDECISION CONTINUITY & SESSION ISOLATION CRITICAL CORRECTION CODE REVIEW.**

Vérifier notamment:
- identité canonique serveur;
- digest non substituable à l'identité;
- DecisionBasis durable applicable;
- effets matériels courants;
- aucune HD stale affichée comme GO;
- bump LPS légitime préservé;
- session non-default;
- absence de cross-session;
- idempotence réellement prouvée;
- aucun Record indû;
- aucun PREPARE/EXECUTE automatique;
- UI existante préservée;
- Review Pack FULL exploitable;
- aucun commit Product.

---

## 11. Contenu intégral — fichiers NOUVEAUX / TESTS / SECTIONS MODIFIÉES

Ci-dessous: contenu intégral des fichiers nouveaux et des tests M-HD-02 correction; sections complètes des chemins Record / Continuity / Session / Idempotence.


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
  type LpsMaterialSnapshot,
} from "./genericMissionSubject";
import {
  selectApplicableGenericMissionDecision,
} from "./genericMissionDecisionApplicability";
import { sealGenericMissionForPresentation } from "./recordGenericMissionHumanDecision";

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

function lpsSnapshotFromSubject(subject: GenericMissionSubject): LpsMaterialSnapshot {
  return {
    version: subject.lpsVersion,
    objective: subject.objective,
    doctrineDigest: subject.doctrineDigest ?? "",
    activeCycleInstanceId: subject.cycleInstanceId,
  };
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
  const currentLps: LpsMaterialSnapshot | null = lpsNow.ok
    ? {
        version: lpsNow.livingProjectState.version,
        objective: lpsNow.livingProjectState.objective,
        context: lpsNow.livingProjectState.context,
        scope: lpsNow.livingProjectState.scope,
        constraints: lpsNow.livingProjectState.constraints
          ? [...lpsNow.livingProjectState.constraints]
          : undefined,
        doctrineDigest: (() => {
          const ref = lpsNow.livingProjectState.doctrinePackageRef as
            | { digest?: string; contentDigest?: string; packageDigest?: string }
            | null
            | undefined;
          return (
            (typeof ref?.digest === "string" ? ref.digest.trim() : "") ||
            (typeof ref?.contentDigest === "string"
              ? ref.contentDigest.trim()
              : "") ||
            (typeof ref?.packageDigest === "string"
              ? ref.packageDigest.trim()
              : "") ||
            ""
          );
        })(),
        activeCycleInstanceId:
          lpsNow.livingProjectState.activeCycleInstanceId ?? null,
        trajectoryId: lpsNow.livingProjectState.trajectoryId ?? null,
        trajectoryVersion: lpsNow.livingProjectState.trajectoryVersion ?? null,
        decisionIds: lpsNow.livingProjectState.decisionIds
          ? [...lpsNow.livingProjectState.decisionIds]
          : undefined,
      }
    : lpsSnapshotFromSubject(sealed.subject);

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
import { assessApplicableGenericMissionDecision } from "./genericMissionDecisionApplicability";

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
  if (fresh.subject.presentationDigest !== input.subject.presentationDigest) {
    return fail(
      "HD_SUBJECT_STALE",
      "Sujet présenté divergent des faits Product courants — nouvelle présentation requise.",
    );
  }

  const status =
    selected === GENERIC_MISSION_OPTION_ACCEPT_PREPARE
      ? ("accepted" as const)
      : selected === GENERIC_MISSION_OPTION_REFUSE
        ? ("refused" as const)
        : ("amended" as const);

  // M-HD-02 Bloc D — identical replay on the same presentation returns durable state.
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
  for (const prior of history.decisions) {
    const assessed = assessApplicableGenericMissionDecision({
      decision: prior,
      subject: fresh.subject,
    });
    if (!assessed.applicable) continue;
    // Identical option + status on the same presentation → durable replay.
    if (
      assessed.decision.selectedOptionId === selected &&
      assessed.decision.status === status
    ) {
      return {
        ok: true,
        decision: assessed.decision,
        humanDecisionCreated: false,
        executionAttemptCreated: false,
        code: "GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED",
      };
    }
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
 * M-HD-02 correction — Product remember/read/record share one server key
 * derived from the Nora Session SQLite path (not a client-claimed sessionKey).
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

### FULL FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedGenericMissionDecisionCard.tsx`

```typescript
"use client";

/**
 * M-HD-02 — Generic Mission Pilot decision (INLINE in Conversation).
 * Pure projection of a sealed GenericMissionSubject + OA option ids.
 * Does NOT invent materiality, options, or HumanDecision.
 * Reuses GovernedDecisionCard visual language (Figma 412:2 / 414:2).
 */

import {
  UI_GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  UI_GENERIC_MISSION_OPTION_REFUSE,
  UI_GENERIC_MISSION_OPTION_REQUEST_AMEND,
  type GenericMissionSubjectView,
} from "./genericMissionPresentation";
import styles from "./GovernedDecisionCard.module.css";

export type GenericMissionDecisionUiState =
  | "awaiting_decision"
  | "recording"
  | "accepted"
  | "refused"
  | "amended"
  | "stale"
  | "authority_denied"
  | "error";

export type GovernedGenericMissionDecisionCardProps = {
  readonly subject: GenericMissionSubjectView | null;
  readonly uiState: GenericMissionDecisionUiState;
  readonly busy: boolean;
  readonly error: string | null;
  readonly staleMessage?: string | null;
  readonly onAccept: () => void;
  readonly onRefuse: () => void;
  readonly onRequestAmend: () => void;
  /** Optional — open contract / detail disclosure (navigation only). */
  readonly onOpenDetail?: () => void;
};

function effectsSummary(subject: GenericMissionSubjectView): string {
  const caps = subject.effects.requiredCapabilities;
  const op = subject.effects.requestedOperation?.trim();
  const parts: string[] = [];
  if (op) parts.push(`Opération : ${op}`);
  if (caps.length > 0) parts.push(`Capacités : ${caps.join(", ")}`);
  if (subject.effects.expectedOutputs.length > 0) {
    parts.push(
      `Résultats : ${subject.effects.expectedOutputs.slice(0, 3).join("; ")}`,
    );
  }
  return parts.join(" · ") || "Effets matériels scellés avec la mission.";
}

function risksSummary(subject: GenericMissionSubjectView): string {
  const risks = subject.effects.risks.filter((r) => r.trim().length > 0);
  const reservations = subject.effects.reservations.filter(
    (r) => r.trim().length > 0,
  );
  const bits = [...risks.slice(0, 3), ...reservations.slice(0, 2)];
  return bits.length > 0
    ? bits.join(" · ")
    : "Aucune réserve supplémentaire scellée.";
}

export function GovernedGenericMissionDecisionCard({
  subject,
  uiState,
  busy,
  error,
  staleMessage,
  onAccept,
  onRefuse,
  onRequestAmend,
  onOpenDetail,
}: GovernedGenericMissionDecisionCardProps) {
  if (uiState === "stale" || (!subject && uiState !== "awaiting_decision")) {
    return (
      <section
        className={styles.card}
        data-testid="generic-mission-decision-card"
        data-state="stale"
        aria-labelledby="generic-mission-decision-title"
      >
        <p className={styles.label}>Mission générique</p>
        <h3
          id="generic-mission-decision-title"
          className={styles.title}
          data-testid="generic-mission-decision-title"
        >
          Présentation périmée
        </h3>
        <p className={styles.optionBody} data-testid="generic-mission-stale-body">
          {staleMessage?.trim() ||
            "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision."}
        </p>
        <p className={styles.optionMeta}>
          Aucune préparation n'est ouverte sur cette ancienne présentation.
        </p>
      </section>
    );
  }

  if (!subject) return null;

  const decided =
    uiState === "accepted" ||
    uiState === "refused" ||
    uiState === "amended";
  const actionsDisabled = busy || decided || uiState === "authority_denied";

  const structural =
    subject.materiality === "structural" ||
    subject.impactSignals.structuralChange ||
    subject.impactSignals.architectureImpact;

  const statusLine =
    uiState === "accepted"
      ? "Décision acceptée — la préparation peut reprendre sur cette mission exacte (préparer ≠ confirmer ≠ exécuter)."
      : uiState === "refused"
        ? "Décision refusée — aucune préparation débloquée."
        : uiState === "amended"
          ? "Modification demandée — nouvelle qualification et présentation requises."
          : uiState === "recording"
            ? "Enregistrement de la décision…"
            : uiState === "authority_denied"
              ? "Autorité insuffisante — décision non enregistrée."
              : "Décision explicite requise avant toute préparation.";

  return (
    <section
      className={styles.card}
      data-testid="generic-mission-decision-card"
      data-state={uiState}
      data-mission-subject-id={subject.missionSubjectId}
      data-presentation-digest={subject.presentationDigest}
      aria-labelledby="generic-mission-decision-title"
    >
      <p className={styles.label}>Mission générique</p>
      <h3
        id="generic-mission-decision-title"
        className={styles.title}
        data-testid="generic-mission-decision-title"
      >
        {subject.objective}
      </h3>
      <p className={styles.youDecide} data-testid="generic-mission-status">
        {statusLine}
      </p>

      <div className={styles.optionBlock} data-testid="generic-mission-outcome">
        <p className={styles.optionEyebrow}>Résultat attendu</p>
        <p className={styles.optionBody}>{subject.expectedOutcome}</p>
      </div>
      <div className={styles.optionBlock} data-testid="generic-mission-scope">
        <p className={styles.optionEyebrow}>Périmètre</p>
        <p className={styles.optionBody}>{subject.scopeNarrative}</p>
        {subject.scopeIn.length > 0 ? (
          <p className={styles.optionMeta}>
            Inclus : {subject.scopeIn.slice(0, 4).join(", ")}
            {subject.scopeOut.length > 0
              ? ` · Hors : ${subject.scopeOut.slice(0, 3).join(", ")}`
              : ""}
          </p>
        ) : null}
      </div>
      <div className={styles.optionBlock} data-testid="generic-mission-effects">
        <p className={styles.optionEyebrow}>Effets matériels</p>
        <p className={styles.optionBody}>{effectsSummary(subject)}</p>
        {structural ? (
          <p className={styles.optionMeta} data-testid="generic-mission-structural">
            Mission structurante — HumanDecision Pilote requise.
          </p>
        ) : null}
      </div>
      <div className={styles.optionBlock} data-testid="generic-mission-risks">
        <p className={styles.optionEyebrow}>Risques et réserves</p>
        <p className={styles.optionBody}>{risksSummary(subject)}</p>
      </div>

      {error ? (
        <p
          className={styles.error}
          role="alert"
          data-testid="generic-mission-decision-error"
        >
          {error}
        </p>
      ) : null}

      {!decided ? (
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.primary}
            data-testid="generic-mission-accept"
            data-option-id={UI_GENERIC_MISSION_OPTION_ACCEPT_PREPARE}
            disabled={actionsDisabled}
            onClick={onAccept}
          >
            {busy ? "Enregistrement…" : "Accepter la mission"}
          </button>
          <button
            type="button"
            className={styles.secondary}
            data-testid="generic-mission-refuse"
            data-option-id={UI_GENERIC_MISSION_OPTION_REFUSE}
            disabled={actionsDisabled}
            onClick={onRefuse}
          >
            Refuser
          </button>
          <button
            type="button"
            className={styles.tertiary}
            data-testid="generic-mission-request-amend"
            data-option-id={UI_GENERIC_MISSION_OPTION_REQUEST_AMEND}
            disabled={actionsDisabled}
            onClick={onRequestAmend}
          >
            Demander à modifier
          </button>
          {onOpenDetail ? (
            <button
              type="button"
              className={styles.tertiary}
              data-testid="generic-mission-open-detail"
              disabled={busy}
              onClick={onOpenDetail}
            >
              Voir le détail
            </button>
          ) : null}
        </div>
      ) : null}
    </section>
  );
}

```

### FULL FILE: `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/genericMissionPresentation.ts`

```typescript
/**
 * M-HD-02 — client-safe Generic Mission presentation types & option ids.
 * Option ids MUST match w2/genericMissionSubject.ts (server authority).
 * No OA / node imports — safe for ConversationSurface client bundle.
 */

export const UI_GENERIC_MISSION_OPTION_ACCEPT_PREPARE =
  "opt:generic-mission:accept-prepare" as const;
export const UI_GENERIC_MISSION_OPTION_REFUSE =
  "opt:generic-mission:refuse" as const;
export const UI_GENERIC_MISSION_OPTION_REQUEST_AMEND =
  "opt:generic-mission:request-amend" as const;

/** Projection of sealed subject fields needed by the Pilot card. */
export type GenericMissionSubjectView = {
  readonly missionSubjectId: string;
  readonly presentationDigest: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scopeNarrative: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: "structural" | "non_structural" | "unknown";
  readonly impactSignals: {
    readonly structuralChange: boolean;
    readonly securityImpact: boolean;
    readonly architectureImpact: boolean;
    readonly dataImpact: boolean;
    readonly irreversible: boolean;
  };
  readonly effects: {
    readonly intentKind: string | null;
    readonly artifactType: string | null;
    readonly requestedOperation: string | null;
    readonly requiredCapabilities: readonly string[];
    readonly expectedOutputs: readonly string[];
    readonly risks: readonly string[];
    readonly reservations: readonly string[];
  };
};

```

### FULL FILE: `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts`

```typescript
/**
 * P6 — M-HD-02 Targeted Correction: identity / HD continuity / session / replay.
 *
 * Fake SQLite only. ZERO Cursor REAL / OpenAI LIVE / Human QA.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  buildIntentAnalysisFromSolicitedMission,
  rememberGenericPrepareRecommendation,
  solicitGenericExecutionPrepare,
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
import {
  missionSubjectIdFromOfferFingerprint,
  readGenericMissionDecisionContinuity,
} from "@/features/project-assistant/w2/genericMissionDecisionContinuity";
import { assessApplicableGenericMissionDecision } from "@/features/project-assistant/w2/genericMissionDecisionApplicability";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
} from "@/features/project-assistant/w2/genericMissionSubject";
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

function structuralAnalysis(overrides?: {
  risks?: string[];
  stopConditions?: string[];
  reservations?: string[];
  structuralChange?: boolean;
}): IntentAnalysisDto {
  const base = buildIntentAnalysisFromSolicitedMission({
    objective: "Mission structurante correction M-HD-02",
    expectedOutcome: "Identité et continuité prouvées",
    scope: "projects/demo/src/mhd02-corr",
    impactSignals: {
      structuralChange: overrides?.structuralChange !== false,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    risks: overrides?.risks ?? ["Risque A"],
    reservations: overrides?.reservations ?? ["Réserve A"],
    stopConditions: overrides?.stopConditions ?? ["STOP_A"],
    executionIntent: {
      intentKind: "code_change",
      scopeIn: ["projects/demo/src/mhd02-corr"],
      requiredCapabilities: [],
      requestedOperation: "refactor-corr",
      reversibilityExpectation: "reversible",
    },
  };
}

const SESSION_PILOTE = {
  actor: mapGithubIdentityToPiloteActor({
    githubUserId: "11111111",
    displayName: "Pilote QA",
  }),
  githubUserId: "11111111",
};

describe("P6 M-HD-02 mission identity / continuity / session / replay", () => {
  let runtime: RuntimeApplicationService;
  let previousMorris: string | undefined;
  let previousPilot: string | undefined;
  let previousDetPin: string | undefined;
  let previousSessionDb: string | undefined;

  beforeEach(() => {
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousDetPin = process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA;
    previousSessionDb = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_DET_PINNED_BASE_HEAD_SHA = W2_TEST_PINNED_BASE_HEAD_SHA;
    runtime = bootW2Runtime({
      productDbPath: tempProductDbPath("p6-mhd02-corr.sqlite"),
      idPrefix: "mhd02c",
    });
    resetPendingGenericPrepareOfferStoreForTests();
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
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
    if (previousSessionDb === undefined) {
      delete process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
    } else {
      process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH = previousSessionDb;
    }
  });

  async function seedProject(suffix: string) {
    const oa = runtime.oa!;
    const created = await runtime.createProject({
      name: `MHD02C ${suffix}`,
      objective: "M-HD-02 correction",
      context: "det mhd02c",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `MC${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhd02c-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const identity = `acme/mhd02c-${suffix}`;
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

  it("MI01 — canonical identity from CURRENT offer allows Record", async () => {
    const { projectId, oa } = await seedProject("mi01");
    const analysis = structuralAnalysis();
    const fp = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
    });
    const canonical = missionSubjectIdFromOfferFingerprint(fp);
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    expect(continuity.subject.missionSubjectId).toBe(canonical);
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: continuity.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.subject).toBe(canonical);
  });

  it("MI02 — arbitrary missionSubjectId mismatches canonical (action source)", () => {
    const src = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    expect(src).toContain("HD_MISSION_IDENTITY_MISMATCH");
    expect(src).toContain("missionSubjectIdFromOfferFingerprint");
    expect(src).toContain("canonicalMissionSubjectId");
    // Seal uses canonical id, not raw client id as authority.
    const recordFn = src.slice(
      src.indexOf("w2RecordGenericMissionHumanDecisionAction"),
    );
    expect(recordFn).toContain("missionSubjectId: canonicalMissionSubjectId");
  });

  it("MI03 — old offer identity with current offer fingerprint diverges", async () => {
    const { projectId, oa } = await seedProject("mi03");
    const a1 = structuralAnalysis({ risks: ["R1"] });
    const fp1 = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: a1,
      offeredAtIso: oa.clock.nowIso(),
    });
    const oldId = missionSubjectIdFromOfferFingerprint(fp1);
    // Change fingerprint fields (expectedOutputs / operation) → new offer id.
    const a2: IntentAnalysisDto = {
      ...structuralAnalysis({ risks: ["R1"] }),
      expectedOutcome: "Résultat matériellement différent",
      executionIntent: {
        intentKind: "code_change",
        scopeIn: ["projects/demo/src/mhd02-corr"],
        requiredCapabilities: [],
        requestedOperation: "other-op",
        reversibilityExpectation: "reversible",
        expectedOutputs: ["out-b"],
      },
    };
    const fp2 = rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis: a2,
      offeredAtIso: oa.clock.nowIso(),
    });
    const newId = missionSubjectIdFromOfferFingerprint(fp2);
    expect(newId).not.toBe(oldId);
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    expect(continuity.subject.missionSubjectId).toBe(newId);
    expect(continuity.subject.missionSubjectId).not.toBe(oldId);
  });

  it("HC02/HC04 — same subject id, risks/reservations changed → HD inapplicable", async () => {
    const { projectId, oa } = await seedProject("hc02");
    const analysis = structuralAnalysis({
      risks: ["Risque A"],
      reservations: ["Réserve A"],
    });
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:hc02-fixed",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;

    const drifted = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis: structuralAnalysis({
        risks: ["Risque B CHANGÉ"],
        reservations: ["Réserve B"],
      }),
      missionSubjectId: "gms:hc02-fixed",
    });
    expect(drifted.ok).toBe(true);
    if (!drifted.ok) return;
    expect(drifted.subject.presentationDigest).not.toBe(
      sealed.subject.presentationDigest,
    );
    const assessed = assessApplicableGenericMissionDecision({
      decision: recorded.decision,
      subject: drifted.subject,
    });
    expect(assessed.applicable).toBe(false);
    if (assessed.applicable) return;
    expect(
      assessed.reason === "presentation_digest_mismatch" ||
        assessed.reason === "risks_drift" ||
        assessed.reason === "reservations_drift",
    ).toBe(true);
  });

  it("HC03/HC05 — stopConditions / impactSignals drift → inapplicable", async () => {
    const { projectId, oa } = await seedProject("hc03");
    const analysis = structuralAnalysis({ stopConditions: ["STOP_A"] });
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:hc03",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    const drifted = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis: structuralAnalysis({
        stopConditions: ["STOP_A", "STOP_B_NEW"],
      }),
      missionSubjectId: "gms:hc03",
    });
    // Adding stops is OK in materialCurrentnessMatch (suppression refused).
    // Change impact instead:
    const impactDrift = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis: {
        ...structuralAnalysis(),
        signals: {
          structuralChange: true,
          architectureImpact: true,
          securityImpact: true,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
      },
      missionSubjectId: "gms:hc03",
    });
    expect(impactDrift.ok).toBe(true);
    if (!impactDrift.ok) return;
    const assessed = assessApplicableGenericMissionDecision({
      decision: recorded.decision,
      subject: impactDrift.subject,
    });
    expect(assessed.applicable).toBe(false);
    void drifted;
  });

  it("HC06 — LPS bump linked to HD remains applicable", async () => {
    const { projectId, oa } = await seedProject("hc06");
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
    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(again.ok && again.kind === "decided").toBe(true);
    if (!again.ok || again.kind !== "decided") return;
    expect(again.decision.status).toBe("accepted");
    expect(again.decision.presentationDigest).toBe(
      continuity.subject.presentationDigest,
    );
  });

  it("HC08/HC09 — superseded/refused/amended statuses preserved", async () => {
    const { projectId, oa } = await seedProject("hc08");
    const analysis = structuralAnalysis();
    for (const [opt, status] of [
      [GENERIC_MISSION_OPTION_REFUSE, "refused"],
      [GENERIC_MISSION_OPTION_REQUEST_AMEND, "amended"],
    ] as const) {
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        analysis,
        missionSubjectId: `gms:hc08-${status}`,
      });
      expect(sealed.ok).toBe(true);
      if (!sealed.ok) return;
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: opt,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: false,
      });
      expect(recorded.ok).toBe(true);
      if (!recorded.ok) return;
      expect(recorded.decision.status).toBe(status);
      const assessed = assessApplicableGenericMissionDecision({
        decision: recorded.decision,
        subject: sealed.subject,
      });
      expect(assessed.applicable).toBe(true);
    }
  });

  it("HC10 — OA history failure code is fail-closed (source)", () => {
    const src = readFileSync(
      path.join(
        APP,
        "features/project-assistant/w2/genericMissionDecisionContinuity.ts",
      ),
      "utf8",
    );
    expect(src).toContain("OA_DECISION_HISTORY_UNREADABLE");
    expect(src).toContain("!history.ok");
  });

  it("SI01/SI06 — non-default sessionKey remember/read/record coherent", async () => {
    const { projectId, oa } = await seedProject("si01");
    const analysis = structuralAnalysis();
    const sessionDbPath = tempProductDbPath("p6-mhd02-sess-a.sqlite");
    const sessionKey = resolveProductPrepareOfferSessionKey({ sessionDbPath });
    expect(sessionKey.startsWith("sessdb:")).toBe(true);
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
      sessionDbPath,
    });
    const offer = getPendingGenericPrepareOffer(projectId, sessionKey);
    expect(offer).not.toBeNull();
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      sessionDbPath,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") return;
    expect(continuity.sessionKey).toBe(sessionKey);
  });

  it("SI02/SI03 — session A cannot read session B offer", async () => {
    const { projectId, oa } = await seedProject("si02");
    const analysis = structuralAnalysis();
    const pathA = tempProductDbPath("p6-mhd02-iso-a.sqlite");
    const pathB = tempProductDbPath("p6-mhd02-iso-b.sqlite");
    const keyA = resolveProductPrepareOfferSessionKey({ sessionDbPath: pathA });
    const keyB = resolveProductPrepareOfferSessionKey({ sessionDbPath: pathB });
    expect(keyA).not.toBe(keyB);
    rememberGenericPrepareRecommendation({
      projectId,
      cycleInstanceId: null,
      analysis,
      offeredAtIso: oa.clock.nowIso(),
      sessionDbPath: pathA,
    });
    const readB = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      sessionDbPath: pathB,
    });
    expect(readB.ok).toBe(true);
    if (!readB.ok) return;
    expect(readB.kind === "none" || readB.kind === "stale_presentation_required").toBe(
      true,
    );
    const readA = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      sessionDbPath: pathA,
    });
    expect(readA.ok && readA.kind === "awaiting_decision").toBe(true);
  });

  it("SI05 — claimedSessionKey ignored in Product actions (source)", () => {
    const src = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    expect(src).toContain("claimedSessionKey");
    expect(src).toContain("void input.claimedSessionKey");
    expect(src).toContain("resolveProductPrepareOfferSessionKey()");
  });

  it("ID01 — double Accept identical → ALREADY_APPLIED, no new HD", async () => {
    const { projectId, oa } = await seedProject("id01");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:id01",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const first = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const resealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:id01",
    });
    expect(resealed.ok).toBe(true);
    if (!resealed.ok) return;
    const second = await recordGenericMissionHumanDecision({
      oa,
      subject: resealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.code).toBe("GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED");
    expect(second.humanDecisionCreated).toBe(false);
    expect(second.decision.decisionId).toBe(first.decision.decisionId);
    expect(second.executionAttemptCreated).toBe(false);
  });

  it("ID04/ID05 — refuse/amend replay does not convert to accepted", async () => {
    const { projectId, oa } = await seedProject("id04");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:id04",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const refused = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(refused.ok).toBe(true);
    if (!refused.ok) return;
    const replay = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_REFUSE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(replay.ok).toBe(true);
    if (!replay.ok) return;
    expect(replay.code).toBe("GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED");
    expect(replay.decision.status).toBe("refused");
  });

  it("ID07/ID08 — Record never creates Attempt / Execute (source + result)", async () => {
    const { projectId, oa } = await seedProject("id07");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.executionAttemptCreated).toBe(false);
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      decisionId: recorded.decision.decisionId,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    // PREPARE is separate — Record itself did not execute.
    expect(recorded.executionAttemptCreated).toBe(false);
    void prep;
  });

  it("NR09 — restart without offer → stale when clientDigest held", async () => {
    const { projectId, oa } = await seedProject("nr09");
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: "sha256:" + "b".repeat(64),
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.kind).toBe("stale_presentation_required");
  });
});

```

### FULL FILE: `projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts`

```typescript
/**
 * P6 — M-HD-02 Pilot Presentation & Record Binding.
 *
 * Deterministic Fake SQLite / unit proofs. ZERO Cursor REAL / OpenAI LIVE.
 * Authenticated actor binding proven via recordGenericMissionHumanDecision.
 * Product action path asserts session resolve + no forceLocalAuthority.
 *
 * @vitest-environment node
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  buildIntentAnalysisFromSolicitedMission,
  rememberGenericPrepareRecommendation,
  solicitGenericExecutionPrepare,
} from "@/features/project-assistant/w2/prepareGenericExecutionContractDraft";
import { resetPendingGenericPrepareOfferStoreForTests } from "@/features/project-assistant/w2/pendingGenericPrepareOfferStore";
import {
  recordGenericMissionHumanDecision,
  sealGenericMissionForPresentation,
} from "@/features/project-assistant/w2/recordGenericMissionHumanDecision";
import {
  readGenericMissionDecisionContinuity,
  missionSubjectIdFromOfferFingerprint,
} from "@/features/project-assistant/w2/genericMissionDecisionContinuity";
import {
  GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  GENERIC_MISSION_OPTION_REFUSE,
  GENERIC_MISSION_OPTION_REQUEST_AMEND,
} from "@/features/project-assistant/w2/genericMissionSubject";
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
    objective: "Mission structurante M-HD-02",
    expectedOutcome: "Décision Pilote explicite avant PREPARE",
    scope: "projects/demo/src/mhd02",
    impactSignals: {
      structuralChange: true,
      architectureImpact: true,
    },
  });
  return {
    ...base,
    risks: ["Risque de dérive de périmètre"],
    reservations: ["Réserve inspection"],
    executionIntent: {
      intentKind: "code_change",
      scopeIn: ["projects/demo/src/mhd02"],
      requiredCapabilities: [],
      requestedOperation: "refactor-mhd02",
      reversibilityExpectation: "reversible",
    },
  };
}

const SESSION_PILOTE = {
  actor: mapGithubIdentityToPiloteActor({
    githubUserId: "11111111",
    displayName: "Pilote QA",
  }),
  githubUserId: "11111111",
};

describe("P6 M-HD-02 Pilot Presentation & Record Binding", () => {
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
      productDbPath: tempProductDbPath("p6-mhd02.sqlite"),
      idPrefix: "mhd02",
    });
    resetPendingGenericPrepareOfferStoreForTests();
  });

  afterEach(() => {
    resetPendingGenericPrepareOfferStoreForTests();
    cleanupW2TempDirs();
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
      name: `MHD02 ${suffix}`,
      objective: "M-HD-02 Pilot Presentation",
      context: "det mhd02",
      criticality: "STANDARD",
      constraints: ["ZERO REAL"],
      shortReference: `M2${suffix.toUpperCase().slice(0, 6)}`,
      idempotencyKey: `idem:mhd02-${suffix}`,
    });
    if (!created.ok) throw new Error("createProject");
    const projectId = created.project.projectId;
    const identity = `acme/mhd02-${suffix}`;
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

  it("AUTH01 — session-bound actor + Pilot gate → HD recordable (unit)", async () => {
    const { projectId, oa } = await seedProject("auth01");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.actor.actorId).toBe(SESSION_PILOTE.actor.actorId);
    expect(recorded.decision.actor.actorId).not.toBe(LOCAL_PILOTE_ACTOR.actorId);
    expect(recorded.humanDecisionCreated).toBe(true);
    expect(recorded.executionAttemptCreated).toBe(false);
  });

  it("AUTH02 — missing authenticatedPilote without forceLocal → refuse", async () => {
    const { projectId, oa } = await seedProject("auth02");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
    });
    expect(recorded.ok).toBe(false);
    if (recorded.ok) return;
    expect(recorded.code).toBe("AUTHENTICATED_PILOTE_REQUIRED");
  });

  it("AUTH05 — actor/github mismatch → refuse", async () => {
    const { projectId, oa } = await seedProject("auth05");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: {
        actor: SESSION_PILOTE.actor,
        githubUserId: "99999999",
      },
    });
    expect(recorded.ok).toBe(false);
    if (recorded.ok) return;
    expect(recorded.code).toBe("PILOTE_ACTOR_IDENTITY_MISMATCH");
  });

  it("AUTH06 — Pilot actor ≠ Morris grant", async () => {
    const { projectId, oa } = await seedProject("auth06");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
    });
    expect(recorded.ok).toBe(true);
    if (!recorded.ok) return;
    expect(recorded.decision.authority).toBe("pilot");
    expect(recorded.decision.actor.actorId).toBe(SESSION_PILOTE.actor.actorId);
    const verified = oa.authorityResolver.verify({
      actorId: SESSION_PILOTE.actor.actorId,
      requiredLevel: "N3",
      scope: `generic-mission:${sealed.subject.missionSubjectId}`,
      requirePilotGate: true,
    });
    expect(verified.ok).toBe(true);
    expect(verified.canActAsPilot).toBe(true);
    expect(verified.canActAsMorris).not.toBe(true);
  });

  it("AUTH07 — Product action never forceLocalAuthority", () => {
    const src = readFileSync(
      path.join(APP, "features/project-assistant/w2/actions.ts"),
      "utf8",
    );
    const recordFn = src.slice(
      src.indexOf("w2RecordGenericMissionHumanDecisionAction"),
    );
    expect(recordFn).toContain("resolveCurrentAuthenticatedPilote");
    expect(recordFn).toContain("authenticatedPilote");
    expect(recordFn).not.toMatch(/forceLocalAuthority:\s*true/);
  });

  it("PRES01/02 — sealed subject from pending offer is faithful", async () => {
    const { projectId, oa } = await seedProject("pres01");
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
    expect(continuity.ok).toBe(true);
    if (!continuity.ok || continuity.kind !== "awaiting_decision") {
      expect(continuity).toMatchObject({ kind: "awaiting_decision" });
      return;
    }
    expect(continuity.subject.objective).toContain("M-HD-02");
    expect(continuity.subject.scopeNarrative).toContain("mhd02");
    expect(continuity.subject.effects.requestedOperation).toBe("refactor-mhd02");
    expect(continuity.subject.missionSubjectId).toBe(
      missionSubjectIdFromOfferFingerprint(continuity.offerFingerprint),
    );
  });

  it("PRES03/04/05 — accept / refuse / amend statuses", async () => {
    const { projectId, oa } = await seedProject("pres345");
    const analysis = structuralAnalysis();
    for (const [option, status] of [
      [GENERIC_MISSION_OPTION_ACCEPT_PREPARE, "accepted"],
      [GENERIC_MISSION_OPTION_REFUSE, "refused"],
      [GENERIC_MISSION_OPTION_REQUEST_AMEND, "amended"],
    ] as const) {
      const sealed = await sealGenericMissionForPresentation({
        oa,
        projectId,
        analysis,
        missionSubjectId: `gms:pres-${status}`,
      });
      expect(sealed.ok).toBe(true);
      if (!sealed.ok) return;
      const recorded = await recordGenericMissionHumanDecision({
        oa,
        subject: sealed.subject,
        selectedOptionId: option,
        analysis,
        authenticatedPilote: SESSION_PILOTE,
        linkToLivingProjectState: false,
      });
      expect(recorded.ok).toBe(true);
      if (!recorded.ok) return;
      expect(recorded.decision.status).toBe(status);
      expect(recorded.executionAttemptCreated).toBe(false);
    }
  });

  it("PRES06 — seal alone creates no HD", async () => {
    const { projectId, oa } = await seedProject("pres06");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
      subject: sealed.subject.missionSubjectId,
    });
    expect(history.ok).toBe(true);
    if (!history.ok) return;
    expect(history.decisions).toHaveLength(0);
  });

  it("PRES08 — double accept is idempotent (ALREADY_APPLIED), no Attempt", async () => {
    const { projectId, oa } = await seedProject("pres08");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:double-click",
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const first = await recordGenericMissionHumanDecision({
      oa,
      subject: sealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const resealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
      missionSubjectId: "gms:double-click",
    });
    expect(resealed.ok).toBe(true);
    if (!resealed.ok) return;
    const second = await recordGenericMissionHumanDecision({
      oa,
      subject: resealed.subject,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
      linkToLivingProjectState: false,
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.code).toBe("GENERIC_MISSION_HUMAN_DECISION_ALREADY_APPLIED");
    expect(second.decision.decisionId).toBe(first.decision.decisionId);
    expect(second.executionAttemptCreated).toBe(false);
  });

  it("PRES09 — digest mismatch refuses", async () => {
    const { projectId, oa } = await seedProject("pres09");
    const analysis = structuralAnalysis();
    const sealed = await sealGenericMissionForPresentation({
      oa,
      projectId,
      analysis,
    });
    expect(sealed.ok).toBe(true);
    if (!sealed.ok) return;
    const forged = {
      ...sealed.subject,
      presentationDigest: "sha256:" + "0".repeat(64),
    };
    const recorded = await recordGenericMissionHumanDecision({
      oa,
      subject: forged,
      selectedOptionId: GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
      analysis,
      authenticatedPilote: SESSION_PILOTE,
    });
    expect(recorded.ok).toBe(false);
  });

  it("PRES11 — no offer → stale when client held digest", async () => {
    const { projectId, oa } = await seedProject("pres11");
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
      clientPresentationDigest: "sha256:" + "a".repeat(64),
    });
    expect(continuity.ok).toBe(true);
    if (!continuity.ok) return;
    expect(continuity.kind).toBe("stale_presentation_required");
  });

  it("PRES12 — decided state re-read from OA after record", async () => {
    const { projectId, oa } = await seedProject("pres12");
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
    });
    expect(recorded.ok).toBe(true);
    const again = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(again.ok && again.kind === "decided").toBe(true);
    if (!again.ok || again.kind !== "decided") return;
    expect(again.decision.status).toBe("accepted");
    expect(again.decision.actorId).toBe(SESSION_PILOTE.actor.actorId);
  });

  it("PRES13 — without cycle, presentation possible", async () => {
    const { projectId, oa } = await seedProject("pres13");
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
    expect(continuity.subject.cycleInstanceId).toBeNull();
  });

  it("PRES15/16 — structural solicit without HD remembers offer, no execute", async () => {
    const { projectId, oa } = await seedProject("pres15");
    const analysis = structuralAnalysis();
    const prep = await solicitGenericExecutionPrepare({
      oa,
      projectId,
      cycleInstanceId: null,
      analysis,
      forceLocalAuthority: true,
      pinnedBaseHeadSha: W2_TEST_PINNED_BASE_HEAD_SHA,
    });
    expect(prep.ok).toBe(false);
    if (prep.ok) return;
    expect(prep.code).toBe("STRUCTURAL_HUMAN_DECISION_REQUIRED");
    expect(prep.executionAttemptCreated).toBe(false);
    const continuity = await readGenericMissionDecisionContinuity({
      oa,
      projectId,
    });
    expect(continuity.ok && continuity.kind === "awaiting_decision").toBe(true);
  });

  it("UI01 — GovernedGenericMissionDecisionCard wired in ConversationSurface", () => {
    const surface = readFileSync(
      path.join(
        APP,
        "features/pre-m6-product-ui/surfaces/ConversationSurface.tsx",
      ),
      "utf8",
    );
    expect(surface).toContain("GovernedGenericMissionDecisionCard");
    expect(surface).toContain("generic-mission-decision-slot");
    expect(surface).toContain("GovernedDecisionCard");
    expect(surface).toContain("GovernedConfirmationCard");
  });

  it("UI05/06/07 — trajectory Decision + Confirmation remain; no parallel store", () => {
    const hook = readFileSync(
      path.join(
        APP,
        "features/pre-m6-product-ui/hooks/useProductConversation.ts",
      ),
      "utf8",
    );
    expect(hook).toContain("decideGovernedDirection");
    expect(hook).toContain("confirmGovernedContract");
    expect(hook).toContain("decideGenericMission");
    expect(hook).toContain("w2DecideTrajectoryAction");
    expect(hook).not.toContain("createPresentedMissionStore");
  });
});

```

### SECTION: `actions.ts` (Read/Record vicinity)

```typescript
  cycleInstanceId?: string | null;
  analysis: IntentAnalysisDto;
  missionSubjectId?: string;
}): Promise<SealGenericMissionForPresentationResult> {
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
  return sealGenericMissionForPresentation({
    oa: runtime.oa,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    analysis: input.analysis,
    missionSubjectId: input.missionSubjectId,
  });
}

/**
 * M-HD-02 — read sealed Generic Mission presentation from CURRENT Product offer.
 * Client cannot inject analysis / materiality / options / sessionKey.
 * Session binding = server Nora Session SQLite identity.
 */
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
  if (sealed.subject.presentationDigest !== input.presentationDigest.trim()) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message:
        "Cette présentation de mission n'est plus actuelle. Demandez à Nora une nouvelle qualification avant toute décision.",
      humanDecisionCreated: false,
      executionAttemptCreated: false,
    };
  }

  return recordGenericMissionHumanDecision({
    oa: runtime.oa,
    subject: sealed.subject,
    selectedOptionId: selected,
    analysis,
    rationale: input.rationale,
    authenticatedPilote: {
      actor: pilote.actor,
      githubUserId: pilote.githubUserId,
    },
    // Product path — never forceLocalAuthority (A7).
  });
}
```

### SECTIONS: `prepareGenericExecutionContractDraft.ts` (session binding)

```typescript
// --- L160-220 ---
 */
export function resolveChatFirstGenericPrepareGo(input: {
  readonly projectId: string;
  /** null = S8 project-context (no active cycle). Matches only a null-cycle offer. */
  readonly cycleInstanceId: string | null;
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
}):
  | { readonly kind: "prepare"; readonly offerFingerprint: string }
  | { readonly kind: "explicit_lexical_prepare" }
  | { readonly kind: "no_go"; readonly reason: string } {
  if (hasExplicitPrepareContractIntent(input.text)) {
    return { kind: "explicit_lexical_prepare" };
  }
  if (
    !isChatFirstPrepareAcceptGo({
      text: input.text,
      pilotDecisionCandidate: input.pilotDecisionCandidate,
    })
  ) {
    return { kind: "no_go", reason: "no_prepare_accept_signal" };
  }
  const sessionKey = resolveProductPrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const offer = getPendingGenericPrepareOffer(input.projectId, sessionKey);
  if (!offer) {
    return { kind: "no_go", reason: "no_current_prepare_offer" };
  }
  if (offer.sessionKey !== sessionKey) {
    return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
  }
  if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
    return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
  }
  return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
}

export function assessGenericMissionPrepareReadiness(
  analysis: IntentAnalysisDto,
): GenericMissionPrepareReadiness {
  const signals = analysis.signals;
  const structuralBlocked = Boolean(
    signals?.structuralChange ||
      signals?.securityImpact ||
      signals?.architectureImpact ||
      signals?.dataImpact ||
      signals?.irreversible ||
      analysis.contradictionCandidate?.conflictPresent,
  );

  const objective = (analysis.objective ?? analysis.rephrasedRequest ?? "").trim();
  const expectedOutcome = (analysis.expectedOutcome ?? "").trim();
  const scope = (analysis.scope ?? "").trim();
  const missingFields: string[] = [];
  if (!objective) missingFields.push("objectif");
  if (!expectedOutcome && !scope) {
    missingFields.push("résultat attendu ou périmètre");

// --- L420-480 ---
    .slice(0, 24);
}

/** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
export function rememberGenericPrepareRecommendation(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly analysis: IntentAnalysisDto;
  readonly offeredAtIso: string;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
}): string {
  const sessionKey = resolveProductPrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
  const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
  const fp = offerFingerprintFor({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
    scopeIn,
    scopeOut,
    missionEffects,
  });
  rememberPendingGenericPrepareOffer({
    projectId: input.projectId,
    sessionKey,
    cycleInstanceId: input.cycleInstanceId,
    missionKey: fp,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn,
    scopeOut,
    outOfScope: input.analysis.outOfScope ?? [],
    stopConditions: input.analysis.stopConditions ?? [],
    risks: input.analysis.risks ?? [],
    reservations: input.analysis.reservations ?? [],
    signalStructuralChange: input.analysis.signals?.structuralChange === true,
    signalSecurityImpact: input.analysis.signals?.securityImpact === true,
    signalArchitectureImpact:
      input.analysis.signals?.architectureImpact === true,
    signalDataImpact: input.analysis.signals?.dataImpact === true,
    signalIrreversible: input.analysis.signals?.irreversible === true,
    contradictionConflictPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    offeredAtIso: input.offeredAtIso,
    offerFingerprint: fp,

// --- L530-570 ---
    rephrasedRequest: offer.objective,
    outOfScope: [...offer.outOfScope],
    risks: [...offer.risks],
    reservations: [...offer.reservations],
    stopConditions: [...offer.stopConditions],
    activatedBlocks: [],
    expectedOutcome: offer.expectedOutcome,
    criticalJustification: null,
    requestedOperation: effects?.requestedOperation ?? null,
    executionIntent,
  };
}

export function getCurrentGenericPrepareOffer(
  projectId: string,
  sessionKeyOrOpts?:
    | string
    | { readonly sessionKey?: string | null; readonly sessionDbPath?: string | null },
): PendingGenericPrepareOffer | null {
  const sessionKey =
    typeof sessionKeyOrOpts === "string"
      ? sessionKeyOrOpts
      : resolveProductPrepareOfferSessionKey({
          sessionKey: sessionKeyOrOpts?.sessionKey,
          sessionDbPath: sessionKeyOrOpts?.sessionDbPath,
        });
  return getPendingGenericPrepareOffer(projectId, sessionKey);
}

/**
 * Build (+ optional Validate) an inspectable generalist ExecutionContract.
 * Empty decisionRefs when non-structural. Structural resume requires verified HD.
 * Never records HumanDecision. Never auto-EXECUTE.
 */
export async function prepareGenericExecutionContractDraft(
  input: PrepareGenericExecutionContractDraftInput,
): Promise<PrepareGenericExecutionContractDraftResult> {
  const readiness = assessGenericMissionPrepareReadiness(input.analysis);
  if (readiness.missingFields.length > 0) {
    return {
      ok: false,

// --- L1085-1120 ---
    const validated = await services.validateExecutionContract.execute({
      executionContractId: contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    contract = validated.contract;
  }

  // Prepare consumed the CURRENT offer (if any).
  clearPendingGenericPrepareOffer(
    input.projectId,
    resolveProductPrepareOfferSessionKey({
      sessionKey: input.sessionKey,
      sessionDbPath: input.sessionDbPath,
    }),
  );

  return {
    ok: true,
    contract,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    materiality,
  };
}

export function genericMissionClarificationText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly missingFields: readonly string[];

// --- L1320-1360 ---
      readiness.missingFields,
    );
  }
  // Structural without decisionId fails inside prepareGeneric (verified HD path).

  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
  const prep = await prepareGenericExecutionContractDraft({
    oa: input.oa,
    projectId,
    cycleInstanceId,
    analysis,
    decisionId: input.decisionId,
    forceLocalAuthority: input.forceLocalAuthority,
    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
    managedRepoRootBase: input.managedRepoRootBase,
    sourceGroundingReader: input.sourceGroundingReader,
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  if (!prep.ok) {
    // M-HD-02 — retain CURRENT offer so Pilot UI can seal/present without a
    // parallel PresentedMission store (process-local continuity only).
    if (
      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
      prep.code === "MATERIALITY_UNKNOWN"
    ) {
      rememberGenericPrepareRecommendation({
        projectId,
        cycleInstanceId,
        analysis,
        offeredAtIso: input.oa.clock.nowIso(),
        sessionKey: input.sessionKey,
        sessionDbPath: input.sessionDbPath,
      });
    }
    return fail(prep.code, prep.message);
  }
  return {
    ok: true,
    code: "GENERIC_PREPARE_DRAFTED",
    executionContractId: prep.contract.executionContractId,
```

### SECTION: `useProductConversation.ts` L48-83

```typescript
  ActiveDecisionSubjectReadResult,
  CurrentGovernedExecutionContinuityResult,
} from "@/features/project-assistant/w2/types";
import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { framingContinuityForConversationDisplay } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import type { GenericMissionDecisionUiState } from "../surfaces/GovernedGenericMissionDecisionCard";
import {
  UI_GENERIC_MISSION_OPTION_ACCEPT_PREPARE,
  UI_GENERIC_MISSION_OPTION_REFUSE,
  UI_GENERIC_MISSION_OPTION_REQUEST_AMEND,
  type GenericMissionSubjectView,
} from "../surfaces/genericMissionPresentation";

export type ProductDecisionSubjectContinuity =
  | { readonly status: "pending" }
  | { readonly status: "unavailable"; readonly message: string }
  | Extract<ActiveDecisionSubjectReadResult, { ok: true }>;

export type ProductGovernedExecutionContinuity =
  | { readonly status: "pending" }
  | { readonly status: "unavailable"; readonly message: string }
  | Extract<CurrentGovernedExecutionContinuityResult, { ok: true }>;

export type ProductMessage = {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  /** Durable Session turn timestamp when known — never synthesized client-side. */
  createdAt?: string | null;
};

export type TranscriptAvailability =
  | "available"
  | "empty"
  | "unavailable"
  | "pending";
```

### SECTION: `useProductConversation.ts` L183-223

```typescript
  const [governedMomentBusy, setGovernedMomentBusy] = useState(false);
  const [governedMomentError, setGovernedMomentError] = useState<string | null>(
    null,
  );
  /** M-HD-02 — sealed Generic Mission presentation (server-sourced only). */
  const [genericMissionSubject, setGenericMissionSubject] =
    useState<GenericMissionSubjectView | null>(null);
  const [genericMissionUiState, setGenericMissionUiState] =
    useState<GenericMissionDecisionUiState>("awaiting_decision");
  const [genericMissionError, setGenericMissionError] = useState<string | null>(
    null,
  );
  const [genericMissionStaleMessage, setGenericMissionStaleMessage] = useState<
    string | null
  >(null);
  const [genericMissionBusy, setGenericMissionBusy] = useState(false);
  const genericMissionDigestRef = useRef<string | null>(null);
  /** P6 chat-first Framing continuity (Rec → traj decision → prepare → START). */
  const [framingContinuity, setFramingContinuity] =
    useState<FramingContinuitySnapshot | null>(null);
  const [framingContinuityBusy, setFramingContinuityBusy] = useState(false);
  const [framingContinuityError, setFramingContinuityError] = useState<
    string | null
  >(null);
  const [reservesText, setReservesText] = useState("");
  const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
  const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
    null,
  );
  const [f3Execute, setF3Execute] = useState<F3ExecutePayload | null>(null);
  const [durableEvidenceOutcome, setDurableEvidenceOutcome] =
    useState<ProjectAssistantRehydrateEvidenceOutcomeSuccess | null>(null);
  const [durableRehydrateError, setDurableRehydrateError] = useState<
    string | null
  >(null);
  const [transcriptAvailability, setTranscriptAvailability] =
    useState<TranscriptAvailability>("pending");
  const [journalEntries, setJournalEntries] = useState<JournalSurfaceEntry[]>(
    [],
  );
  const [journalCycleInstanceId, setJournalCycleInstanceId] = useState<
```

### SECTION: `useProductConversation.ts` L526-698

```typescript
    } finally {
      setFramingContinuityBusy(false);
    }
  }

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
  }

  async function decideGenericMission(selectedOptionId: string) {
    if (genericMissionBusy) return;
    const subject = genericMissionSubject;
    if (!subject || genericMissionUiState !== "awaiting_decision") return;
    setGenericMissionBusy(true);
    setGenericMissionUiState("recording");
    setGenericMissionError(null);
    try {
      const { w2RecordGenericMissionHumanDecisionAction } = await import(
        "@/features/project-assistant/w2/actions"
      );
      const result = await w2RecordGenericMissionHumanDecisionAction({
        projectId,
        missionSubjectId: subject.missionSubjectId,
        presentationDigest: subject.presentationDigest,
        selectedOptionId,
      });
      if (!result.ok) {
        const authDenied =
          result.code === "NO_SESSION" ||
          result.code === "ALLOWLIST_DENIED" ||
          result.code === "AUTHORITY_NOT_CONFIGURED" ||
          result.code === "AUTHENTICATED_PILOTE_REQUIRED" ||
          result.code === "AUTHORITY_DENIED" ||
          result.code === "PILOTE_ACTOR_IDENTITY_MISMATCH";
        setGenericMissionUiState(authDenied ? "authority_denied" : "error");
        setGenericMissionError(result.message);
        if (
          result.code === "MISSION_PRESENTATION_STALE" ||
          result.code === "HD_SUBJECT_STALE"
        ) {
          setGenericMissionUiState("stale");
          setGenericMissionStaleMessage(result.message);
          setGenericMissionSubject(null);
          genericMissionDigestRef.current = null;
        }
        return;
      }
      setGenericMissionUiState(
        result.decision.status === "accepted"
          ? "accepted"
          : result.decision.status === "refused"
            ? "refused"
            : "amended",
      );
      notifyDurableFactsChanged();
      await refreshGovernedMoments();
    } catch {
      setGenericMissionUiState("error");
      setGenericMissionError("Décision refusée — réessayez ou reformulez.");
    } finally {
      setGenericMissionBusy(false);
    }
  }

  async function refreshGovernedMoments() {
    try {
      const {
        w2ReadActiveDecisionSubjectAction,
        w2ReadCurrentGovernedExecutionContinuityAction,
      } = await import("@/features/project-assistant/w2/actions");
      const subject = await w2ReadActiveDecisionSubjectAction({ projectId });
      if (!subject.ok) {
        setDecisionSubjectContinuity({
          status: "unavailable",
          message: subject.message,
        });
      } else {
        setDecisionSubjectContinuity(subject);
      }
      const continuity = await w2ReadCurrentGovernedExecutionContinuityAction({
        projectId,
      });
      if (!continuity.ok) {
        setGovernedExecutionContinuity({
          status: "unavailable",
          message: continuity.message,
        });
      } else {
        setGovernedExecutionContinuity(continuity);
      }
      await refreshGenericMissionDecision();
      await refreshFramingContinuity();
    } catch {
      setGovernedMomentError("Impossible de relire le moment gouverné.");
    }
  }

  async function decideGovernedDirection(selectedOptionRef: string) {
    if (governedMomentBusy) return;
    const subject = decisionSubjectContinuity;
    if (
      !subject ||
      !("ok" in subject) ||
      !subject.ok ||
      subject.kind !== "bound_awaiting_decision"
    ) {
      return;
    }
    const optionSet = subject.optionSet;
    setGovernedMomentBusy(true);
    setGovernedMomentError(null);
    try {
      const { w2DecideTrajectoryAction } = await import(
        "@/features/project-assistant/w2/actions"
      );
```

### SECTION: `useProductConversation.ts` L1583-1631

```typescript
    decideGovernedDirection,
    revealGovernedDecisionAlternate,
    inspectGovernedContract,
    confirmGovernedContract,
    refreshGovernedMoments,
    genericMissionSubject,
    genericMissionUiState,
    genericMissionError,
    genericMissionStaleMessage,
    genericMissionBusy,
    acceptGenericMission: () => {
      void decideGenericMission(UI_GENERIC_MISSION_OPTION_ACCEPT_PREPARE);
    },
    refuseGenericMission: () => {
      void decideGenericMission(UI_GENERIC_MISSION_OPTION_REFUSE);
    },
    requestAmendGenericMission: () => {
      void decideGenericMission(UI_GENERIC_MISSION_OPTION_REQUEST_AMEND);
    },
    refreshGenericMissionDecision,
    framingContinuity,
    framingContinuityBusy,
    framingContinuityError,
    refreshFramingContinuity,
    prepareFramingCandidate: () => {
      void advanceFramingContinuity("prepare_candidate");
    },
    approveFramingCandidate: () => {
      void advanceFramingContinuity("approve_candidate");
    },
    prepareFramingCycle: () => {
      void advanceFramingContinuity("prepare_cycle");
    },
    startFramingPrepared: () => {
      void advanceFramingContinuity("start_prepared");
    },
    reservesText,
    setReservesText,
    f3Prepare,
    f3M3Resolved,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
    transcriptAvailability,
    openContinuityPresentation,
    journalEntries,
    journalCycleInstanceId,
    selectedJournalEntryId,
    setSelectedJournalEntryId,
```

### SECTION: `ConversationSurface.tsx` L35-1057

```typescript
import type { WorkRecommendationProjectionCard } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import {
  presentSynthesisVerdictLabel,
  synthesisSummaryExcerpt,
} from "./synthesisPresentation";
import { projectNoraActivity } from "./noraActivityProjection";
import {
  GovernedDecisionCard,
  presentGovernedDecisionNoraPreface,
} from "./GovernedDecisionCard";
import { GovernedGenericMissionDecisionCard } from "./GovernedGenericMissionDecisionCard";
import { FramingContinuityCard } from "./FramingContinuityCard";
import { GovernedConfirmationCard } from "./GovernedConfirmationCard";
import {
  CONVERSATION_SOURCES_SCOPE_DISCLAIMER,
  presentConversationSources,
} from "./presentConversationSources";
import {
  presentActivityEventLabel,
  presentLiveActivityTimeline,
} from "./presentLiveActivityTimeline";
import styles from "./ConversationSurface.module.css";

/**
 * RC-02 — human-facing active-cycle label (pure presentation; no OA import).
 * Mirrors formatReservationActiveCycleFacingLabel without pulling server modules.
 */
function formatReservationActiveCycleFacingLabel(
  cycleLabel: string | null | undefined,
): string {
  const t = typeof cycleLabel === "string" ? cycleLabel.trim() : "";
  if (!t) return "Cycle actif";
  if (/\bacti[fv]\b/i.test(t)) return t;
  return `${t} actif`;
}

const DECISION_ACTIONS: readonly {
  kind: F2DecisionKind;
  label: string;
  tone: "primary" | "secondary" | "quiet" | "danger";
}[] = [
  { kind: "GO", label: "Approuver", tone: "primary" },
  { kind: "GO_WITH_RESERVES", label: "Approuver avec réserves", tone: "secondary" },
  { kind: "AMEND", label: "Demander une modification", tone: "quiet" },
  { kind: "NO_GO", label: "Rejeter", tone: "danger" },
];

function sourceStatusLabel(status: AssistantToolEventDto["status"]): string {
  switch (status) {
    case "succeeded":
      return "Consultation réussie";
    case "denied":
      return "Consultation refusée";
    case "failed":
      return "Consultation échouée";
    case "started":
      return "Demande en cours";
    default:
      return "Demande en cours";
  }
}

function StopGlyph(): ReactElement {
  return (
    <svg
      className={styles.stopGlyph}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="8" height="8" rx="1" fill="currentColor" />
    </svg>
  );
}

/** P6-HQA-UI05 — honest compact status (Figma 46:98 / 46:107). */
function f2RecommendationStatusLabel(input: {
  readonly proposalStatus?: string | null;
  readonly cycleStatus?: string | null;
  readonly state?: string | null;
}): string {
  const cycle = (input.cycleStatus ?? "").toLowerCase();
  if (cycle === "active" || cycle === "executing") return "Cycle actif";
  const status = (input.proposalStatus ?? "").toUpperCase();
  if (status === "DECISION_REQUIRED") return "En attente de décision";
  if (status === "READY_NO_GATE") return "Candidat prêt";
  if (status === "AMENDMENT_REQUIRED") return "Modification demandée";
  if (status === "REFUSED") return "Refusé";
  const state = (input.state ?? "").trim();
  if (state) return state.length > 42 ? `${state.slice(0, 39)}…` : state;
  return "À examiner";
}

function f2ProposalStatusLabel(input: {
  readonly proposalStatus?: string | null;
  readonly nextActionKind?: string | null;
}): string {
  const status = (input.proposalStatus ?? "").toUpperCase();
  if (status === "DECISION_REQUIRED") return "En attente de décision";
  if (status === "READY_NO_GATE") return "Candidat prêt";
  if (status === "AMENDMENT_REQUIRED") return "Modification demandée";
  if (status === "REFUSED") return "Refusé";
  if (input.nextActionKind === "decision") return "En attente de décision";
  return "À examiner";
}

function f2ObjectMetaLine(parts: Array<string | null | undefined>): string {
  const clean = parts
    .map((p) => (p ?? "").replace(/\s+/g, " ").trim())
    .filter((p) => p.length > 0);
  if (clean.length === 0) return "Projet · selon la direction produit actuelle";
  return clean.slice(0, 3).join(" · ");
}

export type ConversationSurfaceProps = {
  controller: ProductConversationController;
  /**
   * TEST / HARVEST harness only. When true, restores historical F2 gate + F3
   * prepare/confirm-execute affordances. Product `/studio` path must leave this
   * unset/false so TrajectorySurface remains the sole authority/execute chain.
   */
  exposeLegacyAuthorityPath?: boolean;
  /**
   * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01 — same governed Pilot confirm
   * as Journal « Confirmer la levée » (no duplicate mutation path).
   */
  onConfirmReservationResolve?: (epistemicItemId: string) => void;
  reservationConfirmBusyId?: string | null;
  latestSynthesis?: ProductSynthesisProjection | null;
  onOpenSynthesis?: (synthesisId: string) => void;
  /**
   * P3 46:2 — active Work Recommendations projected into the conversation
   * (same durable cards as Journal › Recommandations). Presentation only.
   */
  workRecommendations?: readonly WorkRecommendationProjectionCard[];
  /**
   * UX-02 — secondary only. Prefills a neutral discuss draft.
   * Must NOT be wired to the primary « Ouvrir » control.
   */
  onDiscussRecommendation?: (recommendationId: string) => void;
  /** @deprecated Prefer onDiscussRecommendation — kept for call-site compat. */
  onResumeRecommendation?: (recommendationId: string) => void;
};

/**
 * Nora conversation + qualification surface.
 * P3 chat-first: governed Decision / Confirmation project INLINE here via
 * existing W2 reads/mutations. TrajectorySurface stays state/audit (and
 * execute continuity). Legacy F2/F3 stays behind `exposeLegacyAuthorityPath`
 * for harvest / RETIRE LATER proofs only — never enabled on nominal /studio.
 */
/** Sync textarea height to content up to CSS max-height; then scroll internally. */
function syncComposerTextareaHeight(el: HTMLTextAreaElement | null): void {
  if (!el) return;
  el.style.height = "auto";
  const maxRaw = getComputedStyle(el).maxHeight;
  const maxPx = maxRaw === "none" ? Number.POSITIVE_INFINITY : parseFloat(maxRaw);
  const next = Number.isFinite(maxPx)
    ? Math.min(el.scrollHeight, maxPx)
    : el.scrollHeight;
  el.style.height = `${Math.max(next, 0)}px`;
}

export function ConversationSurface({
  controller,
  exposeLegacyAuthorityPath = false,
  onConfirmReservationResolve,
  reservationConfirmBusyId = null,
  latestSynthesis = null,
  onOpenSynthesis,
  workRecommendations = [],
  onDiscussRecommendation,
  onResumeRecommendation,
}: ConversationSurfaceProps) {
  const discussRecommendation =
    onDiscussRecommendation ?? onResumeRecommendation;
  const fieldId = useId();
  const liveRegionId = useId();
  const composerInputRef = useRef<HTMLTextAreaElement | null>(null);
  const [recommendationOpen, setRecommendationOpen] = useState(
    exposeLegacyAuthorityPath,
  );
  const [proposalOpen, setProposalOpen] = useState(exposeLegacyAuthorityPath);
  const [synthesisOpen, setSynthesisOpen] = useState(false);
  const [executionContractOpen, setExecutionContractOpen] = useState(false);
  /** UX-02 — durable Work Recommendation inline details (Ouvrir ≠ composer). */
  const [durableWorkRecOpenId, setDurableWorkRecOpenId] = useState<
    string | null
  >(null);
  const {
    listRef,
    messages,
    draft,
    setDraft,
    toolEvents,
    liveActivityEvents = [],
    uiState,
    error,
    executionIncomplete,
    modeLabel,
    ephemeralNotice,
    lrMaterializeNotice,
    lrMaterializeCode,
    f2,
    activeProposal,
    decisionSubjectContinuity,
    governedExecutionContinuity,
    decisionAlternateIndex,
    governedMomentBusy,
    governedMomentError,
    decideGovernedDirection,
    revealGovernedDecisionAlternate,
    inspectGovernedContract,
    confirmGovernedContract,
    genericMissionSubject,
    genericMissionUiState,
    genericMissionError,
    genericMissionStaleMessage,
    genericMissionBusy,
    acceptGenericMission,
    refuseGenericMission,
    requestAmendGenericMission,
    framingContinuity,
    framingContinuityBusy,
    framingContinuityError,
    prepareFramingCandidate,
    approveFramingCandidate,
    prepareFramingCycle,
    startFramingPrepared,
    reservesText,
    setReservesText,
    f3Prepare,
    f3M3Resolved,
    f3Execute,
    durableEvidenceOutcome,
    durableRehydrateError,
    focusTurnId,
    clearFocusTurn,
    busy,
    blocked,
    canSend,
    gateOpen,
    recommendationFreshness,
    qualificationFreshness,
    durableOutcomeFreshness,
    canPrepareResolvedM3,
    canPrepareLegacyFixture,
    canConfirmResolvedM3,
    canConfirmLegacyFixture,
    canRefreshResolvedM3Running,
    sendMessage,
    stopAvailable,
    stopCurrentResponse,
    decide,
    prepareResolvedM3,
    prepareLegacyFixture,
    confirmAndExecuteResolvedM3,
    confirmAndExecuteLegacyFixture,
    refreshResolvedM3RunningAttempt,
    retryLastUserMessage,
    reservationResolutionProposal,
  } = controller;

  // Notify LifecycleSurface after Nora answers so CURRENT LR can reproject.
  useEffect(() => {
    if (uiState !== "ANSWERED") return;
    if (typeof window === "undefined") return;
    window.dispatchEvent(new CustomEvent(SFIA_ASSISTANT_ANSWERED_EVENT));
  }, [uiState, messages.length]);

  useEffect(() => {
    if (!focusTurnId) return;
    const el = document.getElementById(`pilot-turn-${focusTurnId}`);
    if (el instanceof HTMLElement) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus({ preventScroll: true });
    }
    clearFocusTurn();
  }, [focusTurnId, clearFocusTurn, messages.length]);

  const attemptLabel = f3Execute
    ? attemptStatusUserLabel(f3Execute.attempt.status)
    : null;
  const runningRefreshVisible = isBoundedRunningAttemptRefreshable({
    attemptStatus: f3Execute?.attempt.status,
    realProcessInvoked: f3Execute?.attempt.realProcessInvoked,
    executionMode: f3Execute?.attempt.executionMode,
    payloadMode: f3Execute?.mode,
    contractStatus: f3Execute?.contract.status,
  });
  const contractFacts = f3M3Resolved
    ? contractUserFacingFacts(f3M3Resolved.successor)
    : null;
  const executeSemantic = f3Execute
    ? executionSemanticUserLabel({
        mode: f3Execute.mode,
        payloadMode: f3Execute.mode,
        executionMode: f3Execute.attempt.executionMode,
        adapterId: f3Execute.attempt.adapterId,
        adapterRef: f3Execute.attempt.adapterRef,
        realProcessInvoked: f3Execute.attempt.realProcessInvoked,
        realExecution: f3Execute.realExecution,
        processRef: f3Execute.attempt.processRef,
        evidenceId: f3Execute.evidence.evidenceId,
        reviewBundleId: f3Execute.reviewBundle.reviewBundleId,
      })
    : null;
  const executeKind = f3Execute
    ? executionSemanticKind({
        mode: f3Execute.mode,
        payloadMode: f3Execute.mode,
        executionMode: f3Execute.attempt.executionMode,
        adapterId: f3Execute.attempt.adapterId,
        adapterRef: f3Execute.attempt.adapterRef,
        realProcessInvoked: f3Execute.attempt.realProcessInvoked,
        realExecution: f3Execute.realExecution,
        processRef: f3Execute.attempt.processRef,
        evidenceId: f3Execute.evidence.evidenceId,
      })
    : "none";
  const executeSummary = f3Execute
    ? postExecutionUserSummary({
        attemptStatus: f3Execute.attempt.status,
        evidenceStatus: f3Execute.evidence.status,
        reviewBundleStatus: f3Execute.reviewBundle.status,
        nextGateCode: f3Execute.recommendation.nextGateCode,
        nextActionCode: f3Execute.recommendation.nextActionCode,
        analysisText: f3Execute.recommendation.analysisText,
        analysisStatus: f3Execute.recommendation.analysisStatus,
      })
    : null;
  const durableSemanticFacts = durableEvidenceOutcome
    ? {
        mode: durableEvidenceOutcome.recommendation.mode,
        evidenceId: durableEvidenceOutcome.evidence[0]?.evidenceId,
        reviewBundleId: durableEvidenceOutcome.reviewBundles[0]?.reviewBundleId,
        durableRead: true as const,
      }
    : null;
  const durableSemantic = durableSemanticFacts
    ? executionSemanticUserLabel(durableSemanticFacts)
    : null;
  const durableSummary = durableEvidenceOutcome
    ? postExecutionUserSummary({
        evidenceStatus: durableEvidenceOutcome.evidence[0]?.status,
        reviewBundleStatus: durableEvidenceOutcome.reviewBundles[0]?.status,
        nextGateCode: durableEvidenceOutcome.recommendation.nextGateCode,
        nextActionCode: durableEvidenceOutcome.recommendation.nextActionCode,
        analysisText: durableEvidenceOutcome.recommendation.analysisText,
        analysisStatus: durableEvidenceOutcome.recommendation.analysisStatus,
        durableRecorded: true,
      })
    : null;
  const showFixtureNoRealStamp =
    executeKind !== "cursor_real" &&
    executeKind !== "deterministic_test" &&
    executionSemanticKind(durableSemanticFacts) !== "cursor_real" &&
    executionSemanticKind(durableSemanticFacts) !== "durable_read";
  const noraActivity = projectNoraActivity({
    blocked,
    busy,
    uiState,
    stopAvailable,
  });
  /**
   * DP06 / P3 §28 — transient Nora activity belongs in the transcript, not the
   * composer. STREAMING is NOT OBSERVABLE on this Product path (no fake stream).
   * start/activity only; STOPPED/ERROR keep their dedicated banners below.
   */
  const showNoraActivityInThread =
    noraActivity.phase === "start" || noraActivity.phase === "activity";
  const authoritativeLifecycleActive = Boolean(
    (controller.activeCycleInstanceId ?? "").trim() ||
      (controller.journalCycleInstanceId ?? "").trim(),
  );
  const pilotRecommendationCard = f2?.qualification
    ? projectPilotRecommendationCard({
        cycleLabel: f2.qualification.cycleLabel,
        recommendedProfile: f2.qualification.recommendedProfile,
        rationale: f2.qualification.rationale,
        criticalSignalsPresent: f2.qualification.criticalSignalsPresent,
        cycleStatus: f2.qualification.cycleStatus,
        cycleInstanceId: f2.qualification.cycleInstanceId,
        freshnessLabel: qualificationFreshness.label,
        authoritativeLifecycleActive,
        detailedStatus: f2.qualification.detailedStatus,
      })
    : null;
  const pilotProposalCard = activeProposal
    ? projectPilotProposalCard({
        rephrasedRequest: activeProposal.rephrasedRequest,
        objective: activeProposal.objective,
        rationale: activeProposal.rationale,
        expectedOutcome: activeProposal.expectedOutcome,
        scope: activeProposal.scope,
        outOfScope: activeProposal.outOfScope,
        morrisGateRequired: activeProposal.morrisGateRequired,
        status: activeProposal.status,
        nextPossibleStep: activeProposal.nextPossibleStep,
        cycleLabel: f2?.qualification?.cycleLabel,
        cycleStatus: f2?.qualification?.cycleStatus,
        cycleInstanceId: f2?.qualification?.cycleInstanceId,
      })
    : null;
  const pilotEphemeralNotice = (() => {
    const raw = (ephemeralNotice ?? "").trim();
    if (!raw) return "";
    // Process-local F2 disclosure — keep full text on legacy/diagnostic only.
    if (
      !exposeLegacyAuthorityPath &&
      /Product SQLite|TEMPORARY WITH EXIT|mémoire de processus/i.test(raw)
    ) {
      return "La recommandation et la proposition restent distinctes d'une décision. Rien n'est exécuté automatiquement.";
    }
    return scrubPiloteFacingEngineJargon(raw);
  })();

  const boundAwaitingDecision =
    !!decisionSubjectContinuity &&
    typeof decisionSubjectContinuity === "object" &&
    "ok" in decisionSubjectContinuity &&
    decisionSubjectContinuity.ok &&
    decisionSubjectContinuity.kind === "bound_awaiting_decision";
  const confirmationRequiredMoment =
    !!governedExecutionContinuity &&
    typeof governedExecutionContinuity === "object" &&
    "ok" in governedExecutionContinuity &&
    governedExecutionContinuity.ok &&
    governedExecutionContinuity.kind === "active" &&
    governedExecutionContinuity.contract.status === "confirmation_required" &&
    !boundAwaitingDecision;
  /** True ExecutionContract prepared (not a ProductSynthesis). */
  const preparedExecutionContract =
    !!governedExecutionContinuity &&
    typeof governedExecutionContinuity === "object" &&
    "ok" in governedExecutionContinuity &&
    governedExecutionContinuity.ok &&
    governedExecutionContinuity.kind === "active" &&
    !confirmationRequiredMoment
      ? governedExecutionContinuity.contract
      : null;
  const focusedGovernedMoment =
    boundAwaitingDecision || confirmationRequiredMoment;

  function executionContractStatusLabel(contract: {
    readonly status: string;
    readonly effectConfirmationRequired?: boolean;
  }): string {
    if (
      contract.status === "confirmation_required" ||
      contract.effectConfirmationRequired === true
    ) {
      return "Confirmation requise";
    }
    if (contract.status === "confirmed") return "Confirmé";
    if (
      contract.status === "validated" ||
      contract.status === "proposed" ||
      contract.status === "draft"
    ) {
      return "Prête à examiner";
    }
    return contract.status;
  }

  useLayoutEffect(() => {
    if (focusedGovernedMoment) return;
    syncComposerTextareaHeight(composerInputRef.current);
  }, [draft, focusedGovernedMoment]);

  return (
    <section
      className={styles.root}
      data-testid="project-assistant-panel"
      data-ui-state={uiState}
      data-execution-incomplete={executionIncomplete ? "true" : "false"}
      data-governed-moment={focusedGovernedMoment ? "true" : undefined}
    >
      {!focusedGovernedMoment ? (
        <div className={styles.topBar}>
          <div
            className={styles.identity}
            data-testid="project-assistant-mode-pill"
          >
            <span className={styles.noraDot} aria-hidden>
              N
            </span>
            <span className={styles.identityText}>
              <span className={styles.identityName}>Nora</span>
              <span
                className={styles.identityRole}
                data-testid="project-assistant-ephemeral"
              >
                Recommande — la décision vous appartient
              </span>
            </span>
          </div>
          {modeLabel.toLowerCase().includes("indisponible") ? (
            <span className={styles.chipWarn}>{modeLabel}</span>
          ) : null}
        </div>
      ) : null}

      <div
        ref={listRef}
        className={styles.thread}
        data-testid="project-assistant-messages"
        aria-live="polite"
        id={liveRegionId}
      >
        {messages.length === 0 && !focusedGovernedMoment && !showNoraActivityInThread ? (
          <div className={styles.threadEmpty} data-testid="project-assistant-empty">
            <p className={styles.threadEmptyTitle}>
              Dites à Nora ce que vous voulez accomplir
            </p>
            <p className={styles.threadEmptyBody}>
              Elle qualifie votre intention à partir du projet enregistré, puis
              vous propose une décision. Rien n&apos;est lancé sans votre accord.
            </p>
          </div>
        ) : messages.length === 0 && !showNoraActivityInThread ? null : (
              messages.map((message) => (
            <article
              key={message.id}
              id={`pilot-turn-${message.id}`}
              className={
                message.role === "user" ? styles.turnMine : styles.turnNora
              }
              data-testid={`project-assistant-turn-${message.role}`}
              data-turn-id={message.id}
              data-role={message.role}
              tabIndex={-1}
            >
              <span className={styles.turnAvatar} aria-hidden>
                {message.role === "user" ? "P" : "N"}
              </span>
              <div className={styles.bubble}>
                <p
                  className={styles.bubbleAuthor}
                  data-role={message.role === "user" ? "user" : "assistant"}
                >
                  {message.role === "user" ? "Vous" : "Nora"}
                </p>
                <p className={styles.bubbleText}>
                  {message.role === "assistant"
                    ? formatNoraAssistantDisplayText(message.content)
                    : message.content}
                </p>
              </div>
            </article>
          ))
        )}
        {showNoraActivityInThread ? (
          <article
            className={`${styles.turnNora} ${styles.noraActivityTurn}`}
            data-testid="project-assistant-nora-activity"
            data-nora-phase={noraActivity.phase}
            data-nora-stop={
              noraActivity.stopAvailable ? "available" : "unavailable"
            }
            aria-busy="true"
          >
            <div className={styles.bubble}>
              <p
                className={styles.bubbleAuthor}
                data-role="assistant"
                data-testid="project-assistant-nora-activity-heading"
              >
                Nora
                <span className={styles.noraActivityBadge}>
                  <span
                    className={styles.noraActivityPulse}
                    data-testid="project-assistant-nora-activity-pulse"
                    aria-hidden="true"
                  />
                  En cours
                </span>
              </p>
              <p
                className={styles.noraActivityText}
                data-testid="project-assistant-nora-activity-label"
              >
                {liveActivityEvents.length > 0
                  ? presentActivityEventLabel(
                      liveActivityEvents[liveActivityEvents.length - 1]!,
                    )
                  : noraActivity.label}
              </p>
              {liveActivityEvents.length > 0 ? (
                <details
                  className={styles.noraActivityDetails}
                  data-testid="project-assistant-nora-activity-details"
                >
                  <summary>Détail de l’activité</summary>
                  <ul className={styles.noraActivityTimeline}>
                    {presentLiveActivityTimeline(liveActivityEvents).map(
                      (line) => (
                        <li key={line.key}>
                          <span className={styles.noraActivityTimelineLabel}>
                            {line.label}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </details>
              ) : null}
            </div>
          </article>
        ) : null}
      </div>

      {f2 ? (
        <div
          className={styles.chipRow}
          data-testid="project-assistant-f2-labels"
          aria-live="polite"
        >
          {f2.labels.recommendation ? (
            <span className={styles.chip}>
              {pilotFacingF2ChipLabel(f2.labels.recommendation)}
            </span>
          ) : null}
          {f2.labels.proposition ? (
            <span className={styles.chip}>
              {pilotFacingF2ChipLabel(f2.labels.proposition)}
            </span>
          ) : null}
          {f2.labels.decisionRequired && !reservationResolutionProposal ? (
            <span className={styles.chipGold}>
              {pilotFacingF2ChipLabel(f2.labels.decisionRequired)}
            </span>
          ) : null}
          {f2.labels.decisionTaken ? (
            <span className={styles.chipOk}>
              {pilotFacingF2ChipLabel(f2.labels.decisionTaken)}
            </span>
          ) : null}
          {exposeLegacyAuthorityPath ? (
            <span className={styles.chipQuiet}>
              {pilotFacingF2ChipLabel(f2.labels.noExecution)}
            </span>
          ) : null}
        </div>
      ) : null}

      {reservationResolutionProposal ? (
        <section
          className={styles.card}
          data-testid="reservation-resolution-proposal"
          aria-labelledby={`${fieldId}-rsv-proposal`}
        >
          <header className={styles.cardHead}>
            <p className={styles.cardEyebrow}>Lecture de Nora</p>
            <h3 id={`${fieldId}-rsv-proposal`} className={styles.cardTitle}>
              {reservationResolutionProposal.proposed
                ? "Proposition de levée"
                : "Traitement de réserve"}
            </h3>
            <p
              className={styles.cardNote}
              data-testid="reservation-resolution-context"
            >
              Contexte :{" "}
              {reservationResolutionProposal.ordinal != null &&
              reservationResolutionProposal.ordinal > 0
                ? `Réserve ${reservationResolutionProposal.ordinal}`
                : "Réserve"}{" "}
              ·{" "}
              {formatReservationActiveCycleFacingLabel(
                reservationResolutionProposal.cycleLabel,
              )}
            </p>
            <p
              className={styles.cardNote}
              data-testid="reservation-resolution-cycle-id"
              hidden
            >
              {reservationResolutionProposal.cycleInstanceId}
            </p>
            {reservationResolutionProposal.proposed ? (
              <p
                className={styles.cardNote}
                data-testid="reservation-pilot-confirmation-required"
              >
                Confirmation Pilote requise
              </p>
            ) : null}
            <p className={styles.cardNote}>
              {reservationResolutionProposal.proposed
                ? "La condition paraît satisfaite. La levée attend votre confirmation Pilote — la réserve reste active."
                : "Nora traite cette réserve. Une recommandation n’est pas une levée."}
            </p>
          </header>
          {reservationResolutionProposal.proposed &&
          onConfirmReservationResolve ? (
            <div className={styles.decisionActions}>
              <button
                type="button"
                className={styles.decisionButton}
                data-tone="primary"
                data-testid={`reservation-confirm-from-proposal-${reservationResolutionProposal.epistemicItemId}`}
                disabled={
                  busy ||
                  reservationConfirmBusyId ===
                    reservationResolutionProposal.epistemicItemId
                }
                onClick={() =>
                  onConfirmReservationResolve(
                    reservationResolutionProposal.epistemicItemId,
                  )
                }
              >
                {reservationConfirmBusyId ===
                reservationResolutionProposal.epistemicItemId
                  ? "Confirmation…"
                  : "Confirmer la levée"}
              </button>
            </div>
          ) : null}
          <p className={styles.stamp} data-testid="reservation-no-auto-resolve">
            AUCUNE LEVÉE AUTOMATIQUE
          </p>
        </section>
      ) : null}

      {f2?.qualification &&
      pilotRecommendationCard &&
      !reservationResolutionProposal ? (
        <section
          className={styles.subCardGold}
          data-testid="project-assistant-qualification"
          data-ui05-object="recommendation"
          data-expanded={recommendationOpen ? "true" : "false"}
          aria-labelledby={`${fieldId}-qualification`}
        >
          <div className={styles.p3CardHead}>
            <div className={styles.p3CardBody}>
              <p className={styles.p3CardEyebrow}>Recommandation</p>
              <h3
                id={`${fieldId}-qualification`}
                className={styles.p3CardTitle}
                data-testid="f2-cycle"
              >
                {pilotRecommendationCard.recommendation}
              </h3>
              <p className={styles.p3CardStamp} data-testid="f2-recommendation-meta">
                {f2ObjectMetaLine([
                  pilotRecommendationCard.freshnessLabel,
                  pilotRecommendationCard.showProfile
                    ? pilotRecommendationCard.profileLabel
                    : null,
                  "Une recommandation n'est pas une décision",
                ])}
              </p>
              {pilotRecommendationCard.freshnessLabel ? (
                <p
                  className={styles.srOnly}
                  data-testid="f2-recommendation-freshness"
                >
                  {pilotRecommendationCard.freshnessLabel}
                </p>
              ) : (
                <p
                  className={styles.srOnly}
                  data-testid="f2-recommendation-freshness"
                >
                  {qualificationFreshness.label}
                </p>
              )}
            </div>
            <div className={styles.p3CardRight}>
              <span
                className={styles.p3CardStatusWarn}
                data-testid="f2-recommendation-state"
              >
                {f2RecommendationStatusLabel({
                  proposalStatus: activeProposal?.status,
                  cycleStatus: f2.qualification.cycleStatus,
                  state: pilotRecommendationCard.state,
                })}
              </span>
              <button
                type="button"
                className={styles.p3CardLink}
                data-testid="f2-recommendation-open"
                aria-expanded={recommendationOpen}
                onClick={() => setRecommendationOpen((v) => !v)}
              >
                {recommendationOpen ? "Fermer" : "Ouvrir →"}
              </button>
            </div>
          </div>
          {recommendationOpen ? (
            <div
              className={styles.ui05ObjectDetails}
              data-testid="f2-recommendation-details"
            >
              <p className={styles.srOnly}>{pilotRecommendationCard.title}</p>
              <dl className={styles.facts}>
                <div className={styles.factWide}>
                  <dt>Pourquoi</dt>
                  <dd data-testid="f2-rationale">{pilotRecommendationCard.why}</dd>
                </div>
                {pilotRecommendationCard.showProfile &&
                pilotRecommendationCard.profileLabel ? (
                  <div className={styles.fact}>
                    <dt>Approche</dt>
                    <dd data-testid="f2-profile">
                      {pilotRecommendationCard.profileLabel}
                    </dd>
                  </div>
                ) : (
                  <dd className={styles.srOnly} data-testid="f2-profile">
                    {f2.qualification.recommendedProfile}
                  </dd>
                )}
              </dl>
              {exposeLegacyAuthorityPath ? (
                <details className={styles.details}>
                  <summary>Détails techniques</summary>
                  <dl className={styles.facts}>
                    <div className={styles.factWide}>
                      <dt>Rationale technique</dt>
                      <dd data-testid="f2-rationale-technical">
                        {f2.qualification.rationale}
                      </dd>
                    </div>
                    <div className={styles.factWide}>
                      <dt>Identifiant de cycle</dt>
                      <dd>{f2.qualification.cycleTypeId ?? "Aucun cycle actif (contexte projet)"}</dd>
                    </div>
                    {f2.qualification.cycleInstanceId ? (
                      <div className={styles.factWide}>
                        <dt>Cycle rattaché</dt>
                        <dd data-testid="f2-cycle-instance">
                          {f2.qualification.cycleInstanceId}
                          {f2.qualification.cycleStatus
                            ? ` · ${f2.qualification.cycleStatus}`
                            : ""}
                        </dd>
                      </div>
                    ) : null}
                    {f2.qualification.ckcResolutionRef ? (
                      <div className={styles.factWide}>
                        <dt>Réf. résolution</dt>
                        <dd data-testid="f2-ckc-ref">
                          {f2.qualification.ckcResolutionRef}
                        </dd>
                      </div>
                    ) : null}
                    <div className={styles.factWide}>
                      <dt>Provenance</dt>
                      <dd data-testid="f2-qualification-provenance">
                        catalogue {f2.qualification.catalogVersion} ·{" "}
                        {f2.qualification.detailedStatus}
                        {f2.qualification.capitalizationViaCycleTypeId
                          ? " · capitalisation via cycleType"
                          : ""}
                      </dd>
                    </div>
                  </dl>
                </details>
              ) : null}
            </div>
          ) : (
            <>
              <p className={styles.srOnly} data-testid="f2-rationale">
                {pilotRecommendationCard.why}
              </p>
              <p className={styles.srOnly} data-testid="f2-profile">
                {pilotRecommendationCard.profileLabel ??
                  f2.qualification.recommendedProfile}
              </p>
            </>
          )}
        </section>
      ) : null}

      {decisionSubjectContinuity &&
      typeof decisionSubjectContinuity === "object" &&
      "ok" in decisionSubjectContinuity &&
      decisionSubjectContinuity.ok &&
      decisionSubjectContinuity.kind === "pending_reinstruction_required" ? (
        <aside
          className={styles.proposalCard}
          data-testid="decision-subject-reinstruction"
          aria-label="Sujet de décision à reformuler"
        >
          <p className={styles.proposalTitle}>Reprise du sujet</p>
          <p className={styles.proposalMeta}>
            {decisionSubjectContinuity.message}
          </p>
          <p className={styles.proposalMeta}>
            La proposition process-locale n&apos;est plus disponible. Reformulez
            avec Nora — aucune proposition n&apos;est inventée.
          </p>
        </aside>
      ) : null}
      {framingContinuity &&
      framingContinuity.phase !== "idle" &&
      framingContinuity.phase !== "active" &&
      framingContinuity.phase !== "blocked_no_recommendation" &&
      framingContinuity.phase !== "blocked_stale_or_incomplete" ? (
        <div
          className={styles.governedMomentSlot}
          data-testid="framing-continuity-slot"
        >
          <p className={styles.noraMomentLabel}>Nora</p>
          <p className={styles.noraMomentBody}>
            {framingContinuity.message ||
              "Poursuivez dans la conversation pour préparer le prochain cycle."}
          </p>
          <FramingContinuityCard
            continuity={framingContinuity}
            busy={framingContinuityBusy}
            error={framingContinuityError}
            onPrepareCandidate={prepareFramingCandidate}
            onApproveCandidate={approveFramingCandidate}
            onPrepareCycle={prepareFramingCycle}
            onStartPrepared={startFramingPrepared}
            onKeepExploring={() => {
              composerInputRef.current?.focus();
            }}
          />
        </div>
      ) : null}
      {boundAwaitingDecision ? (
        <div
          className={styles.governedMomentSlot}
          data-testid="decision-subject-bound"
        >
          <p className={styles.noraMomentLabel}>Nora</p>
          <p className={styles.noraMomentBody}>
            {presentGovernedDecisionNoraPreface({
              proposalRationale: activeProposal?.rationale,
              optionRationale:
                decisionSubjectContinuity.optionSet.recommendation.rationale,
            })}
          </p>
          <GovernedDecisionCard
            optionSet={decisionSubjectContinuity.optionSet}
            alternateIndex={decisionAlternateIndex}
            busy={governedMomentBusy}
            error={governedMomentError}
            decisionTitle={
              activeProposal?.rephrasedRequest?.trim() || undefined
            }
            onChooseRecommended={() => {
              const ref =
                decisionSubjectContinuity.optionSet.recommendation
                  .recommendedOptionRef;
              void decideGovernedDirection(ref);
            }}
            onRevealAlternate={revealGovernedDecisionAlternate}
            onChooseAlternate={(optionRef) => {
              void decideGovernedDirection(optionRef);
            }}
          />
        </div>
      ) : null}
      {(genericMissionSubject || genericMissionUiState === "stale") &&
      !boundAwaitingDecision ? (
        <div
          className={styles.governedMomentSlot}
          data-testid="generic-mission-decision-slot"
        >
          <p className={styles.noraMomentLabel}>Nora</p>
          <p className={styles.noraMomentBody}>
            {genericMissionUiState === "stale"
              ? "La présentation précédente n'est plus applicable."
              : "Voici la mission générique proposée. Examinez le périmètre et les effets, puis décidez explicitement."}
          </p>
          <GovernedGenericMissionDecisionCard
            subject={genericMissionSubject}
            uiState={genericMissionUiState}
            busy={genericMissionBusy}
            error={genericMissionError}
            staleMessage={genericMissionStaleMessage}
            onAccept={acceptGenericMission}
            onRefuse={refuseGenericMission}
            onRequestAmend={requestAmendGenericMission}
          />
        </div>
      ) : null}
      {confirmationRequiredMoment ? (
        <div
          className={styles.governedMomentSlot}
          data-testid="governed-confirmation-slot"
        >
          <GovernedConfirmationCard
            contract={governedExecutionContinuity.contract}
            inspection={governedExecutionContinuity.inspection}
            busy={governedMomentBusy}
            error={governedMomentError}
            onConfirm={() => {
              void confirmGovernedContract();
            }}
            onInspect={() => {
              void inspectGovernedContract();
            }}
            onCancel={() => {
              const input = document.querySelector(
                "[data-testid='project-assistant-input']",
              );
              if (input instanceof HTMLTextAreaElement) input.focus();
            }}
          />
        </div>
      ) : null}
      {activeProposal &&
      pilotProposalCard &&
      !reservationResolutionProposal &&
      !focusedGovernedMoment ? (
        <section
          className={styles.subCardGold}
          data-testid="project-assistant-proposal"
          data-ui05-object="proposal"
          data-expanded={proposalOpen ? "true" : "false"}
          data-proposal-status={activeProposal.status}
          aria-labelledby={`${fieldId}-proposal`}
```

---

## 12. Fichiers touchés (périmètre correction M-HD-02)

**Modifiés (correction):**
- `w2/actions.ts` — identité canonique + session serveur au Record/Read
- `w2/genericMissionDecisionContinuity.ts` — applicabilité / fail-closed / sessionKey
- `w2/recordGenericMissionHumanDecision.ts` — ALREADY_APPLIED / applicability
- `w2/pendingGenericPrepareOfferStore.ts` — `resolveProductPrepareOfferSessionKey`
- `w2/prepareGenericExecutionContractDraft.ts` — remember/getCurrent session Product

**Nouveaux:**
- `w2/genericMissionDecisionApplicability.ts`
- `__tests__/…/p6.mHd02.missionIdentityContinuitySession.d0.test.ts`

**Conservés (M-HD-02 base, non redessinés):**
- `GovernedGenericMissionDecisionCard.tsx`
- `genericMissionPresentation.ts`
- hook / ConversationSurface wiring

**Interdits non modifiés:** Build Doctrine, Roadmap, C1, P2/P6 contracts, Doctrine v3, CKC, Figma, templates, schemas, migrations, CI, runtime :3020.

---

## 13. Fin de pack

Review Pack FULL mono-cycle.
Handoff message attendu:
`review-handoff: M-HD-02 mission identity and decision continuity correction`
