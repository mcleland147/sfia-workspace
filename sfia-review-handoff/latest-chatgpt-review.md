# SFIA STUDIO — M-HD-02 PILOT PRESENTATION & RECORD BINDING
## REVIEW PACK FULL — CRITICAL CODE REVIEW

Horodatage Europe/Paris: 2026-10-16 16:43:38 CEST
GO Morris: 2026-10-16 — M-HD-02 PILOT PRESENTATION & RECORD BINDING — PRODUCT DELIVERY — CRITICAL
Figma frames VALIDATED BY MORRIS (no Cursor Figma mutation):
- File Key m4g8j0gNbEzfIuH6S9AZJF — Page 08 — Decision & Confirmation
- 412:2 Mission générique — décision explicite
- 413:2 Mission générique — confirmation après inspection
- 414:2 Mission générique — présentation périmée
Dimensions 1440×1024

Macro: STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
Milestone: P6 — IN PROGRESS
Capacité: V3-F05 (connexes V3-F11 / V3-F12 / V3-F14)
Cycle: 8 — Delivery / implémentation
Profil: CRITICAL
Typologie: EVOL
CKC: ckc:studio:delivery

---

## 1. Git Truth (initial = final Product HEAD — no Product commit)

Repository: mcleland147/sfia-workspace (origin https://github.com/mcleland147/sfia-workspace.git)
Branche candidate: `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare`
HEAD: `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` (expected b4c1d862…)
origin/main: `896ff59c704bfa76df1da1a51705aaf948c1cf0c` (expected 896ff59c…)
Dirty candidate: EXPECTED — preserved (no reset/stash/clean/rebase)
Prior handoff tip (pre-publish): `1bf5028fa0e71bac375848bf15c5588779188608` blob `4fddd732cc09461d87a9a29b9768ca975528710b`

Status short (Product worktree):
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
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedGenericMissionDecisionCard.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/genericMissionPresentation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionContinuity.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

Aucune commit Product. Aucun push Product. Aucune PR. Aucun merge.

---

## 2. Convergence Pre-check

TARGET: Pilote décide explicitement sur une mission générique présentée; HD OA porte sur ce sujet exact.
CURRENT (avant M-HD-02): M-HD-01 Seal/Record + OA HD durable; UI générique non raccordée; Figma validé; session Pilote existante; Record utilisait LOCAL_PILOTE_ACTOR.
KEEP: ConversationSurface, GovernedDecisionCard, GovernedConfirmationCard, ExecutionSurface, ProductConversationController, GenericMissionSubject, OA HD, ExecutionContract.
ADAPT: présentation mission, actions explicites, binding session→acteur OA, refresh continuité, états refuse/amend/périmé.
COMPLETE: parcours UI → OA Record → reprise Product gouvernée (PREPARE non auto).
REPLACE: aucun composant majeur.
EXIT PROOF: clic authentifié enregistre la décision du sujet présenté; persistance OA; présentation périmée refuse PREPARE.

---

## 3. Gate A — Autorité Pilote (A1–A10)

Analyse:
- `resolveCurrentAuthenticatedPilote` (Better Auth + GitHub binding + allowlist) — EXISTANT.
- `mapGithubIdentityToPiloteActor` → actorId `actor:github:…`, authorityLevel none — EXISTANT.
- S1 `issueS1AuthorityEvidence` exige EC + effects — NON applicable au Record HD (avant PREPARE); S1 n'émet pas `canActAsPilot`.
- Record M-HD-01 utilisait `LOCAL_PILOTE_ACTOR` + `registerLocalPiloteAuthority` (forceEnable tests).
- `registerLocalMorrisGateAuthority` acceptait déjà `actor?` — symétrie Pilot absente.

Adaptation (réutilisation, pas nouvelle politique de grant):
1. `registerLocalPiloteAuthority` accepte `actor?: OaActorReference` (défaut LOCAL_PILOTE).
2. `recordGenericMissionHumanDecision` exige `authenticatedPilote` sauf `forceLocalAuthority` (tests).
3. Product action `w2RecordGenericMissionHumanDecisionAction`:
   - `resolveCurrentAuthenticatedPilote(headers)` — refuse NO_SESSION / ALLOWLIST_DENIED / …
   - ignore claimedActorId / claimedCanActAsPilot / client analysis
   - reconstruit analysis depuis CURRENT pending offer
   - reseal + digest check
   - Record avec acteur session — **jamais** forceLocalAuthority

Preuves unitaires Fake SQLite: AUTH01/02/05/06/07 PASS (voir §11).
Preuve session Better Auth réelle navigateur: OPEN (non exécutée ce cycle).

A1–A10: session serveur ✓; acteur rattaché ✓; OA verify canActAsPilot ✓; claim client refusé ✓; Pilot≠Morris ✓; pas N3 implicite Morris ✓; pas forceLocal Product ✓; pas acteur synthétique sur Product path ✓; absence session → refus ✓; non allowlist → refus (via resolver) ✓.

Réserve: preuve d'autorité Pilot reste `LOCAL_SINGLE_USER_AUTHORITY_TEMPORARY_WITH_EXIT` (env `SFIA_STUDIO_LOCAL_PILOT_AUTHORITY=1`) — session lie l'identité, n'ouvre pas seule le grant. Aligné GO: « session ≠ preuve d'autorité OA ».

---

## 4. Gate B — Source Mission

Source décisionnelle:
- Nora / F2 qualifie → `rememberGenericPrepareRecommendation` (process-local pending offer)
- Sur STRUCTURAL_HUMAN_DECISION_REQUIRED (solicit) et structuralBlocked F2 (champs suffisants): remember offer
- `readGenericMissionDecisionContinuity` → analysisFromPendingOffer → `sealGenericMissionForPresentation`
- `missionSubjectIdFromOfferFingerprint` évite régénération silencieuse
- Pas de PresentedMission store / SQL / second store
- Restart sans offer → `stale_presentation_required` (414:2) si clientDigest; sinon `none`
- Décision durable = OA HumanDecision uniquement

---

## 5. Parcours UI implémenté

1. Refresh governed moments → `w2ReadGenericMissionDecisionContinuityAction`
2. Slot ConversationSurface `generic-mission-decision-slot` + `GovernedGenericMissionDecisionCard`
3. Affiche objectif / résultat / périmètre / effets / risques / structurante
4. Actions: Accepter / Refuser / Demander à modifier — optionIds OA autoritatifs
5. Clic → server Record (session + reseal + OA)
6. États: awaiting / recording / accepted / refused / amended / stale / authority_denied / error
7. Trajectoire GovernedDecisionCard + Confirmation inchangés (pas de second contrôleur)
8. Confirm label Figma 413:2: « Confirmer » (pas « Confirmer et lancer »)
9. Client-safe `genericMissionPresentation.ts` (évite node:fs dans bundle client)

---

## 6. Accept / Refuse / Amend

| Option OA | Status HD | PREPARE |
| --- | --- | --- |
| opt:generic-mission:accept-prepare | accepted | potentiellement autorisé ensuite (verify) — pas auto |
| opt:generic-mission:refuse | refused | non |
| opt:generic-mission:request-amend | amended | non — nouvelle présentation |

PRES03/04/05 PASS. PRES06 seal sans HD PASS. PRES15/16 no Attempt / no auto Execute PASS.

---

## 7. Currentness & Restart

- Digest / subject mismatch → HD_SUBJECT_STALE / MISSION_PRESENTATION_STALE
- Offer absent + clientDigest → stale (414:2)
- decided re-read OA (PRES12 PASS)
- Cycle facultatif (PRES13 PASS)
- Continuity process-local offer: restart → fail closed (dette documentée; pas de nouveau store)

---

## 8. Confirm / Execute separation

Inchangé: ExecutionSurface / GovernedConfirmationCard / inspect → Confirm → Authorize → Execute.
Record n'appelle ni PREPARE ni Confirm ni Authorize ni Execute.
Figma 413:2 label « Confirmer ».

---

## 9. Fichiers touchés (M-HD-02 + NR tests)

Créés:
- `w2/genericMissionDecisionContinuity.ts` (complet ci-dessous)
- `pre-m6-product-ui/surfaces/genericMissionPresentation.ts` (complet)
- `pre-m6-product-ui/surfaces/GovernedGenericMissionDecisionCard.tsx` (complet)
- `__tests__/…/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts`

Modifiés (principaux):
- `localSingleUserAuthority.ts` — actor optionnel Pilot
- `recordGenericMissionHumanDecision.ts` — authenticatedPilote
- `w2/actions.ts` — session Record + continuity read
- `prepareGenericExecutionContractDraft.ts` — remember on structural HD required
- `f2/orchestrateF2.ts` — remember on structuralBlocked ready fields
- `useProductConversation.ts` — state + decideGenericMission
- `ConversationSurface.tsx` — slot mission
- `GovernedConfirmationCard.tsx` — label Confirmer
- Tests M-HD-01 PR03/PB04/PB05 adaptés

---

## 10. Contenu fichiers créés

### genericMissionPresentation.ts
```ts
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

### genericMissionDecisionContinuity.ts
```ts
/**
 * M-HD-02 — read Generic Mission presentation continuity for Pilot UI.
 *
 * Source = CURRENT pending prepare offer (process-local) → Product seal.
 * No PresentedMission store. Restart without offer → none / stale (fail closed).
 * Decision truth = durable OA HumanDecision only.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import {
  analysisFromPendingGenericPrepareOffer,
  assessGenericMissionPrepareReadiness,
  getCurrentGenericPrepareOffer,
} from "./prepareGenericExecutionContractDraft";
import {
  GENERIC_MISSION_PRESENTED_OPTIONS,
  type GenericMissionSubject,
} from "./genericMissionSubject";
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
      };
      readonly options: readonly GenericMissionPresentedOption[];
      readonly offerFingerprint: string;
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

function latestDecisionForSubject(
  decisions: readonly HumanDecision[],
  missionSubjectId: string,
): HumanDecision | null {
  const matched = decisions.filter((d) => d.subject === missionSubjectId);
  if (matched.length === 0) return null;
  return matched.reduce((a, b) =>
    (a.effectiveAt ?? "") >= (b.effectiveAt ?? "") ? a : b,
  );
}

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

  const offer = getCurrentGenericPrepareOffer(projectId, {
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
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
  const latest =
    history.ok && history.decisions
      ? latestDecisionForSubject(
          history.decisions,
          sealed.subject.missionSubjectId,
        )
      : null;

  if (latest) {
    return {
      ok: true,
      kind: "decided",
      subject: sealed.subject,
      decision: {
        decisionId: latest.decisionId,
        status: latest.status,
        selectedOptionId: latest.selectedOptionId,
        actorId: latest.actor.actorId,
      },
      options: presentedOptions(),
      offerFingerprint: offer.offerFingerprint,
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
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  };
}

```

### GovernedGenericMissionDecisionCard.tsx
```tsx
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

### actions.ts — continuity + Record Product (extrait)
```ts
w2ReadGenericMissionDecisionContinuityAction(input: {
  projectId: string;
  clientPresentationDigest?: string | null;
}): Promise<GenericMissionDecisionContinuityResult> {
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
  analysis?: unknown;
}): Promise<RecordGenericMissionHumanDecisionResult> {
  void input.claimedActorId;
  void input.claimedCanActAsPilot;
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

  const offer = getCurrentGenericPrepareOffer(input.projectId.trim());
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

  const analysis = analysisFromPendingGenericPrepareOffer(offer);
  const sealed = await sealGenericMissionForPresentation({
    oa: runtime.oa,
    projectId: input.projectId,
    cycleInstanceId: offer.cycleInstanceId,
    analysis,
    missionSubjectId: input.missionSubjectId,
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

  if (sealed.subject.missionSubjectId !== input.missionSubjectId.trim()) {
    return {
      ok: false,
      code: "HD_SUBJECT_STALE",
      message: "Sujet présenté divergent — nouvelle présentation requise.",
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

### registerLocalPiloteAuthority (extrait adapté)
```ts
(input: {
  authorityResolver: MemoryAuthorityResolver;
  scope: string;
  issuedAt: string;
  /** Session-bound Pilote when Product-authenticated; defaults to local temp. */
  actor?: OaActorReference;
  evidenceId?: string;
  /** Test inject — bypasses env gate. Never use on real Product path. */
  forceEnable?: boolean;
  env?: NodeJS.ProcessEnv;
}): RegisterM3LocalAuthorityResult {
  const actor = input.actor ?? LOCAL_PILOTE_ACTOR;
  const evidenceIdPrefix = actor.actorId.startsWith("actor:github:")
    ? "evd:session-pilote"
    : "evd:local-pilote";
  return registerLocalGateAuthority({
    ...input,
    actor,
    evidenceIdPrefix,
    gate: "pilot",
  });
}

/**
 * Explicit Morris-gate evidence for a given actor (local single-user).
 * Separate from Pilot grant — same human may hold both, but each decision
 * consumes only the gate it requests.
 * Default actor = LOCAL_PILOTE_ACTOR (product dual-grant for true Morris EC).
 */

```

---

## 11. Tests et résultats

Suite exécutée (Fake SQLite / unit / inspection code):
- p6.mHd02.pilotPresentationRecordBinding.d0.test.ts — 16/16 PASS
- p6.mHd01.genericMissionHumanDecision.d0.test.ts — PASS
- p6.mHd01.authorityContinuityCorrection.d0.test.ts — PASS
- p6.mHd01.ecHdEffectsBinding.d0.test.ts — PASS
- p6.mHd01.finalAuthorityBinding.d0.test.ts — PASS
- p6.projectScopedCursorSelection.d0.test.ts — PASS
- p6.inspectionBindingSelect.d0.test.ts — PASS
Total ciblé: 133 PASS

Matrice AUTH/PRES/UI:

| Id | Verdict | Preuve |
| --- | --- | --- |
| AUTH01 | PASS | unit record + session actor |
| AUTH02 | PASS | unit sans authenticatedPilote |
| AUTH03 | OPEN | session réelle allowlist (env Product) — non Human QA |
| AUTH04 | PASS (code) | claimed* ignored in action |
| AUTH05 | PASS | github mismatch refuse |
| AUTH06 | PASS | verify canActAsPilot, not Morris |
| AUTH07 | PASS | source inspection no forceLocal Product |
| PRES01–05 | PASS | unit |
| PRES06 | PASS | seal sans HD |
| PRES07 | OPEN | Confirmation seule — NR architecture; non régressé |
| PRES08 | PASS | double accept supersede |
| PRES09 | PASS | digest forged |
| PRES10 | PASS (via reseal CR-02) | scope change → stale path |
| PRES11 | PASS | stale sans offer |
| PRES12 | PASS | OA re-read decided |
| PRES13 | PASS | sans cycle |
| PRES14 | OPEN | cycle lié invalide — non isolé ce cycle |
| PRES15/16 | PASS | no Attempt / no auto execute |
| UI01–07 | PASS | wiring inspection + NR trajectory/confirm |
| UI08 | OPEN | VISUAL RUNTIME PROOF — OPEN (pas de capture QA locale vs Figma) |

tsc --noEmit: PASS
npm run build: PASS (après client-safe presentation module)

---

## 12. Captures Figma / runtime

VISUAL RUNTIME PROOF — OPEN.
Aucune capture runtime QA autorisée exécutée ce cycle.
Ne pas déclarer FIGMA/RUNTIME MATCH.

---

## 13. Fake / Real Qualification

Applicable: OUI.
- Fake SQLite: preuves déterministes Seal/Record/Continuity/AUTH unit — PASS
- Session Better Auth réelle: OPEN (indépendance non exécutée)
- Navigateur automatisé UI: OPEN
- Interaction humaine: NOT PROVEN
- Cursor REAL / OpenAI LIVE: hors périmètre

Claims interdits non émis: READY FOR REAL / E2E REAL PROVEN / P6 GLOBAL PASS / RUNTIME V3 ADOPTED / PRODUCT GIT INTEGRATED / PR READY / HUMAN QA PASS.

---

## 14. Dette / Exit

Dette:
- Pending offer process-local (restart → stale) — pas de PresentedMission store (GO)
- Pilot evidence toujours env LOCAL_PILOT temporary-with-exit + session identity binding
- UI08 visual match OPEN
- AUTH03/session réelle OPEN
- E4–E8 continuité générique hors GO

Exit M-HD-02 local: raccordement UI→session→OA Record prouvé en Fake + wiring Product; prêt Critical Code Review ChatGPT.

---

## 15. Gates Morris

Aucun STOP Authority Binding: liaison démontrable via contrats existants (session resolve + registerLocalGateAuthority actor + OA verify).
Aucun STOP Presentation Source: source = pending offer existant + seal Product (pas second store).
Aucun Decision Pack STOP requis.

Réserve à surveiller en revue: env LOCAL_PILOT toujours requis pour grant Pilot (session ne remplace pas evidence).

---

## 16. Verdict

**M-HD-02 PILOT PRESENTATION & RECORD BINDING — DETERMINISTIC PASS**

**LOCAL CANDIDATE READY FOR CHATGPT CRITICAL CODE REVIEW**

Interdits respectés: pas PRODUCT GIT INTEGRATED / PR READY / READY FOR REAL / HUMAN QA PASS / P6 GLOBAL PASS / RUNTIME V3 ADOPTED.

---

## 17. Instruction ChatGPT

Lire depuis Git:
`sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Effectuer:
**M-HD-02 PILOT PRESENTATION & RECORD BINDING CRITICAL CODE REVIEW.**

Vérifier:
- vraie session Pilote (action headers);
- autorité OA applicable (canActAsPilot + actor session);
- aucune HD fabriquée;
- sujet scellé réellement présenté;
- options accept/refuse/amend;
- source Product qualifiée (pending offer → seal);
- aucun PREPARE/EXECUTE implicite;
- cycle facultatif;
- restart honnête (stale);
- réutilisation UX (ConversationSurface / cards);
- cohérence Figma/runtime (OPEN visual);
- aucune architecture parallèle / PresentedMission store;
- aucun commit Product.
