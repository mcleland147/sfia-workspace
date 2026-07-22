# Review Pack Full — SFIA v3.0 D1-C2 Intent Understanding and Structured Proposal

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 21:11:39 CEST
- **Cycle :** 9 — Delivery (DELIVERY / AI / UX / SECURITY / EVOL)
- **Profil :** Critical
- **Gate consommé :** GO IMPLEMENTATION D1-C2 — INTENT UNDERSTANDING AND STRUCTURED PROPOSAL
- **Gate suivant :** GO VALIDATION D1-C2 — INTENT UNDERSTANDING AND STRUCTURED PROPOSAL
- **Repo/branche :** mcleland147/sfia-workspace · `delivery/sfia-studio-control-tower-fast-track`
- **HEAD/base :** `32e5271842b9a344a7e292614675c27ea8ed941b`
- **Handoff précédent :** `43d2419ac1327761a3c878d1795d1aa921a5b24d`
- **BCDI :** BCDI-D1-C2-INTENT-UNDERSTANDING-STRUCTURED-PROPOSAL
- **Baseline :** SFIA v2.6 · **v3 :** V3-MODELED CANDIDATE
- **Statut :** D1-C2 IMPLEMENTED CANDIDATE

## 2. Git

Dirty attendu · staged vide · HEAD=origin/main · aucune dépendance ajoutée

```
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
 M projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
 M projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
 M projects/sfia-studio/app/app/nouvelle-demande/page.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/e2e/increment-a.spec.ts
 M projects/sfia-studio/app/e2e/increment-c.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts
 M projects/sfia-studio/app/e2e/p0-smoke.spec.ts
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/service.ts
 M projects/sfia-studio/app/lib/ops1/conversation/types.ts
 M projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
 M projects/sfia-studio/app/playwright.config.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md
?? projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
?? projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
?? projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
?? projects/sfia-studio/73-control-tower-fast-track-delivery-report.md
?? projects/sfia-studio/74-sfia-canonical-context-engine-report.md
?? projects/sfia-studio/app/__tests__/d1/
?? projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts
?? projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts
?? projects/sfia-studio/app/__tests__/ops1/sfia/
?? projects/sfia-studio/app/app/ops1/
?? projects/sfia-studio/app/app/projects/
?? projects/sfia-studio/app/app/workspace/
?? projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
?? projects/sfia-studio/app/e2e/d1-c1-intake-shell.spec.ts
?? projects/sfia-studio/app/e2e/d1-c2-intent-understanding.spec.ts
?? projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts
?? projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts
?? projects/sfia-studio/app/features/d1/
?? projects/sfia-studio/app/lib/d1/
?? projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
?? projects/sfia-studio/app/lib/ops1/reportReinjection.ts
?? projects/sfia-studio/app/lib/ops1/sfia/
?? projects/sfia-studio/app/lib/ops1/tools/
?? projects/sfia-studio/sfia-v3-delivery/
?? projects/sfia-studio/sfia-v3-design/
?? projects/sfia-studio/sfia-v3-framing/
?? projects/sfia-studio/sfia-v3-modeled/

```

## 3. Architecture C2

UI IntakeView → Server Action `actionAnalyzeIntent` → `analyzeIntent` → ConversationProvider (fake défaut / live optionnel) → parse+validate RequestRoutingProposal → UI proposition/clarification.
Aucune écriture SQLite Project. Aucun matching. Aucun tool mutatif.

## 4. Outcomes

CREATE_PROJECT_CANDIDATE · OPEN_CYCLE_CANDIDATE · ANALYZE_ONLY · NEED_CLARIFICATION · UNDETERMINED

## 5. Tests

vitest d1 26/26 · e2e C2+C1+I1+smoke 26/26 · tsc OK

## 6. Captures

- `.tmp-sfia-review/screenshots-d1-c2/analyze-only-1440.png`
- `.tmp-sfia-review/screenshots-d1-c2/clarification-1440.png`
- `.tmp-sfia-review/screenshots-d1-c2/error-1440.png`
- `.tmp-sfia-review/screenshots-d1-c2/proposal-1024.png`
- `.tmp-sfia-review/screenshots-d1-c2/proposal-1280.png`
- `.tmp-sfia-review/screenshots-d1-c2/proposal-1440.png`
- `.tmp-sfia-review/screenshots-d1-c2/proposal-1728.png`

Figma : clarification 12:36 · proposal 12:60 · responsive 14:64/90/117 · UX-R04 différée

## 7. Anti-claims / réserves

Pas C3 · pas mutation · pas V3-IMPLEMENTED · session non persistée · live smoke optionnel

## 8. Contenu fichiers créés + clés modifiées

### `projects/sfia-studio/app/lib/d1/intake/actions.ts`

```tsx
"use server";

import { analyzeIntent } from "./analyzeIntent";
import { D1Error } from "../errors";
import type { AnalyzeIntentInput, RequestRoutingProposal } from "./types";
import { logIntakeEvent } from "../intakeObservability";

function serializeError(error: unknown): {
  ok: false;
  code: string;
  message: string;
} {
  if (error instanceof D1Error) {
    return { ok: false, code: error.code, message: error.message };
  }
  return {
    ok: false,
    code: "UNKNOWN",
    message: "Erreur d’analyse. Réessayez ou créez manuellement.",
  };
}

export type AnalyzeIntentActionResult =
  | {
      ok: true;
      proposal: RequestRoutingProposal;
      providerMode: "fake" | "live";
      providerId: string;
      durationMs: number;
      clarificationTurnCount: number;
    }
  | { ok: false; code: string; message: string };

export async function actionAnalyzeIntent(
  input: AnalyzeIntentInput,
): Promise<AnalyzeIntentActionResult> {
  try {
    const result = await analyzeIntent(input);
    return { ok: true, ...result };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionCancelIntakeSession(sessionLocalId: string) {
  logIntakeEvent("intake_session_cancelled", {
    sessionLocalId,
    status: "cancelled",
  });
  return { ok: true as const };
}

export async function actionLogClarificationAnswer(input: {
  sessionLocalId: string;
  answerLength: number;
}) {
  logIntakeEvent("intake_clarification_answered", {
    sessionLocalId: input.sessionLocalId,
    intentLength: input.answerLength,
    status: "answered",
  });
  return { ok: true as const };
}
```
### `projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts`

```tsx
import { D1Error } from "../errors";
import { D1_C2_SYSTEM_PROMPT } from "./prompt";
import { resolveIntakeProvider } from "./resolveProvider";
import {
  parseProposalJsonText,
  validateRequestRoutingProposal,
} from "./validateProposal";
import {
  D1_INTAKE_MAX_CLARIFICATION_TURNS,
  D1_INTAKE_MAX_INTENT_LENGTH,
  D1_INTAKE_PROVIDER_TIMEOUT_MS,
  type AnalyzeIntentInput,
  type RequestRoutingProposal,
} from "./types";
import { logIntakeEvent } from "../intakeObservability";

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new D1Error("TIMEOUT", `Provider timeout après ${ms}ms.`));
    }, ms);
    promise
      .then((v) => {
        clearTimeout(timer);
        resolve(v);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

function sanitizeIntent(raw: string): string {
  const trimmed = raw.replace(/\u0000/g, "").trim();
  if (!trimmed) {
    throw new D1Error("VALIDATION", "Intention vide.");
  }
  if (trimmed.length > D1_INTAKE_MAX_INTENT_LENGTH) {
    throw new D1Error(
      "VALIDATION",
      `Intention trop longue (max ${D1_INTAKE_MAX_INTENT_LENGTH}).`,
    );
  }
  return trimmed;
}

function buildUserEnvelope(
  intent: string,
  clarifications: string[],
): string {
  const lines = [`INTENT:\n${intent}`];
  if (clarifications.length) {
    lines.push(
      "CLARIFICATIONS:\n" + clarifications.map((c) => `- ${c}`).join("\n"),
    );
  }
  return lines.join("\n\n");
}

export interface AnalyzeIntentResult {
  proposal: RequestRoutingProposal;
  providerMode: "fake" | "live";
  providerId: string;
  durationMs: number;
  clarificationTurnCount: number;
}

/**
 * Analyze a free-form intent into a non-executable RequestRoutingProposal.
 * No Project/Cycle mutation. No context matching.
 */
export async function analyzeIntent(
  input: AnalyzeIntentInput,
): Promise<AnalyzeIntentResult> {
  const started = Date.now();
  const intent = sanitizeIntent(input.rawIntent);
  const turns = input.clarificationTurns ?? [];
  if (turns.length > D1_INTAKE_MAX_CLARIFICATION_TURNS * 2) {
    throw new D1Error(
      "VALIDATION",
      `Trop de tours de clarification (max ${D1_INTAKE_MAX_CLARIFICATION_TURNS}).`,
    );
  }

  const userAnswers = turns
    .filter((t) => t.role === "user")
    .map((t) => t.content.trim())
    .filter(Boolean);

  // Cap user clarification answers
  if (userAnswers.length > D1_INTAKE_MAX_CLARIFICATION_TURNS) {
    throw new D1Error(
      "VALIDATION",
      `Maximum ${D1_INTAKE_MAX_CLARIFICATION_TURNS} réponses de clarification.`,
    );
  }

  logIntakeEvent("intake_analysis_started", {
    sessionLocalId: input.sessionLocalId,
    intentLength: intent.length,
    status: "started",
  });

  const { provider, mode } = resolveIntakeProvider();
  const messages = [
    {
      role: "user" as const,
      content: `${D1_C2_SYSTEM_PROMPT}\n\n---\n\n${buildUserEnvelope(intent, userAnswers)}`,
    },
  ];

  try {
    const completion = await withTimeout(
      provider.complete(messages),
      D1_INTAKE_PROVIDER_TIMEOUT_MS,
    );

    const parsed = parseProposalJsonText(completion.text);
    // Ensure rawIntent reflects original user intent
    if (typeof parsed === "object" && parsed && !Array.isArray(parsed)) {
      (parsed as Record<string, unknown>).rawIntent = intent;
      if (!(parsed as Record<string, unknown>).proposalId) {
        (parsed as Record<string, unknown>).proposalId = `rrp-${Date.now()}`;
      }
      if (!(parsed as Record<string, unknown>).createdAt) {
        (parsed as Record<string, unknown>).createdAt = new Date().toISOString();
      }
      if (!(parsed as Record<string, unknown>).schemaVersion) {
        (parsed as Record<string, unknown>).schemaVersion = "0.1.0-d1-c2";
      }
      (parsed as Record<string, unknown>).proposedProjectId = null;
      (parsed as Record<string, unknown>).proposedCycleId = null;
    }

    const proposal = validateRequestRoutingProposal(parsed);

    // After max clarification turns, never stay in clarification loop
    let finalProposal = proposal;
    if (
      userAnswers.length >= D1_INTAKE_MAX_CLARIFICATION_TURNS &&
      proposal.proposedOutcomeType === "NEED_CLARIFICATION"
    ) {
      finalProposal = validateRequestRoutingProposal({
        ...proposal,
        proposedOutcomeType: "UNDETERMINED",
        status: "UNDETERMINED",
        clarificationQuestion: null,
        confidence: Math.min(proposal.confidence, 0.25),
        missingInformation: [
          ...proposal.missingInformation,
          "informations insuffisantes après les tours de clarification",
        ],
        rationale:
          "Après le maximum de clarifications, la suite reste indéterminée. Aucune mutation n’a été effectuée.",
        requiresHumanConfirmation: true,
      });
    }

    const durationMs = Date.now() - started;

    if (finalProposal.status === "CLARIFICATION_REQUIRED") {
      logIntakeEvent("intake_clarification_requested", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    } else if (finalProposal.status === "ANALYSIS_ONLY") {
      logIntakeEvent("intake_analysis_only_generated", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    } else {
      logIntakeEvent("intake_proposal_generated", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    }

    return {
      proposal: finalProposal,
      providerMode: mode,
      providerId: provider.providerId,
      durationMs,
      clarificationTurnCount: userAnswers.length,
    };
  } catch (error) {
    const durationMs = Date.now() - started;
    const code =
      error instanceof D1Error
        ? error.code
        : error instanceof Error && /timeout/i.test(error.message)
          ? "TIMEOUT"
          : "PROVIDER";
    logIntakeEvent("intake_provider_failed", {
      sessionLocalId: input.sessionLocalId,
      intentLength: intent.length,
      status: code,
      durationMs,
      providerMode: mode,
      errorCode: code,
    });
    if (error instanceof D1Error) throw error;
    if (error instanceof Error && /timeout/i.test(error.message)) {
      throw new D1Error("TIMEOUT", "Le fournisseur n’a pas répondu à temps.", error);
    }
    throw new D1Error(
      "PROVIDER",
      "Échec d’analyse de l’intention (fournisseur).",
      error,
    );
  }
}
```
### `projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts`

```tsx
import { randomUUID } from "node:crypto";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
} from "@/lib/ops1/conversation/types";
import { REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION } from "./types";
import type { C2OutcomeType, C2ProposalStatus } from "./types";

function baseProposal(rawIntent: string) {
  return {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: `rrp-${randomUUID()}`,
    rawIntent,
    createdAt: new Date().toISOString(),
    proposedProjectId: null,
    proposedCycleId: null,
    proposedBlocks: [] as string[],
    constraints: [] as string[],
    assumptions: [] as string[],
    missingInformation: [] as string[],
    alternatives: [] as Array<{
      outcomeType: C2OutcomeType;
      label: string;
      rationale: string;
    }>,
    proposedCycleType: null as string | null,
    proposedProfile: null as string | null,
    clarificationQuestion: null as string | null,
  };
}

/** Deterministic heuristic for fake/live-test intake — no network. */
export function buildFakeProposalPayload(
  rawIntent: string,
  clarificationAnswers: string[],
): Record<string, unknown> {
  const text = rawIntent.trim();
  const lower = text.toLowerCase();
  const answers = clarificationAnswers.map((a) => a.trim()).filter(Boolean);
  const enriched = [text, ...answers].join("\n");
  const enrichedLower = enriched.toLowerCase();

  if (lower.includes("__force_invalid__")) {
    return { notAProposal: true };
  }

  const base = baseProposal(rawIntent);

  if (
    /ne cr[eé]e?\s*rien|analyse\s+seulement|analyze\s+only|sans\s+cr[eé]er/i.test(
      lower,
    )
  ) {
    return {
      ...base,
      normalizedIntent: "Demande d’analyse sans mutation",
      subject: "Analyse d’idée",
      proposedObjective:
        "Produire une synthèse d’analyse sans créer de projet ni de cycle",
      proposedOutcomeType: "ANALYZE_ONLY" satisfies C2OutcomeType,
      status: "ANALYSIS_ONLY" satisfies C2ProposalStatus,
      confidence: 0.78,
      rationale:
        "L’utilisateur a explicitement demandé une analyse sans création.",
      requiresHumanConfirmation: false,
      assumptions: ["Aucune recherche de contexte existant n’a été effectuée."],
      proposedBlocks: ["analyse"],
    };
  }

  if (
    answers.length === 0 &&
    (/j[’']ai un nouveau sujet|^nouveau sujet$|pas s[uû]r|quelque chose/i.test(
      lower,
    ) ||
      text.split(/\s+/).length < 5)
  ) {
    return {
      ...base,
      normalizedIntent: "Intention encore trop vague",
      subject: "Sujet non précisé",
      proposedObjective: "À clarifier avec l’utilisateur",
      proposedOutcomeType: "NEED_CLARIFICATION" satisfies C2OutcomeType,
      status: "CLARIFICATION_REQUIRED" satisfies C2ProposalStatus,
      confidence: 0.35,
      clarificationQuestion:
        "Quel résultat concret souhaitez-vous obtenir avec ce sujet ?",
      missingInformation: ["résultat souhaité", "périmètre"],
      rationale: "Informations insuffisantes pour proposer une suite structurée.",
      requiresHumanConfirmation: true,
    };
  }

  if (
    /gestion des (utilisateurs|comptes|r[oô]les)|cadrage|nouveau cycle|travailler sur/i.test(
      enrichedLower,
    ) &&
    !/lancer (une|un) (application|projet|produit)/i.test(enrichedLower)
  ) {
    return {
      ...base,
      normalizedIntent:
        "Besoin de travail thématique pouvant relever d’un cycle",
      subject: answers[0] || text.slice(0, 80),
      proposedObjective: answers[0]
        ? `Structurer le travail : ${answers[0]}`
        : `Structurer le travail autour de : ${text.slice(0, 120)}`,
      proposedOutcomeType: "OPEN_CYCLE_CANDIDATE" satisfies C2OutcomeType,
      status: "PROPOSAL_READY" satisfies C2ProposalStatus,
      proposedCycleType: "FRAMING",
      proposedProfile: "Standard",
      proposedBlocks: ["UX", "sécurité"],
      confidence: 0.62,
      rationale:
        "La formulation évoque un sujet de travail plutôt qu’un nouveau produit. Le rattachement à un projet existant sera traité en C3 — aucun match n’a été inventé.",
      assumptions: [
        "Aucun projet existant n’a été recherché ni affirmé.",
        "La suite reste une proposition non exécutable.",
      ],
      missingInformation: [
        "projet existant éventuel (matching C3)",
        "confirmation humaine",
      ],
      alternatives: [
        {
          outcomeType: "CREATE_PROJECT_CANDIDATE",
          label: "Créer plutôt un nouveau projet",
          rationale: "Si le sujet n’appartient à aucun projet connu.",
        },
        {
          outcomeType: "ANALYZE_ONLY",
          label: "Analyser sans créer",
          rationale: "Explorer avant toute structuration.",
        },
      ],
      requiresHumanConfirmation: true,
    };
  }

  if (
    /lancer|application|suivi des contrats|nouveau projet|créer un produit/i.test(
      enrichedLower,
    ) ||
    answers.length > 0
  ) {
    const subject =
      answers[0]?.slice(0, 80) ||
      (lower.includes("contrat") ? "Suivi des contrats" : text.slice(0, 80));
    return {
      ...base,
      normalizedIntent: `Créer un projet autour de « ${subject} »`,
      subject,
      proposedObjective: answers[0]
        ? answers[0]
        : `Cadrer et lancer ${subject}`,
      proposedOutcomeType: "CREATE_PROJECT_CANDIDATE" satisfies C2OutcomeType,
      status: "PROPOSAL_READY" satisfies C2ProposalStatus,
      proposedCycleType: "FRAMING",
      proposedProfile: "Standard",
      proposedBlocks: ["cadrage", "UX"],
      confidence: 0.74,
      rationale:
        "L’intention décrit un nouveau besoin produit. Proposition de création de projet — non exécutée.",
      assumptions: ["Aucun contexte Workspace n’a été consulté."],
      missingInformation: ["confirmation humaine avant toute création"],
      alternatives: [
        {
          outcomeType: "ANALYZE_ONLY",
          label: "Analyser d’abord",
          rationale: "Si l’utilisateur préfère explorer sans créer.",
        },
      ],
      requiresHumanConfirmation: true,
    };
  }

  return {
    ...base,
    normalizedIntent: "Intention non classée de façon fiable",
    subject: text.slice(0, 80) || "Indéterminé",
    proposedObjective: "À déterminer",
    proposedOutcomeType: "UNDETERMINED" satisfies C2OutcomeType,
    status: "UNDETERMINED" satisfies C2ProposalStatus,
    confidence: 0.2,
    missingInformation: ["objectif", "périmètre", "résultat attendu"],
    rationale:
      "Après les tours disponibles, la suite reste indéterminée sans invention.",
    requiresHumanConfirmation: true,
  };
}

/**
 * Fake intake provider — implements OPS1 ConversationProvider contract.
 * Returns JSON proposals based on deterministic heuristics.
 */
export class FakeIntakeConversationProvider implements ConversationProvider {
  readonly providerId = "d1-intake-fake";
  private callCount = 0;

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const content = lastUser?.content ?? "";

    if (content.includes("__FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_INTAKE_PROVIDER_ERROR");
    }
    if (content.includes("__FORCE_TIMEOUT__")) {
      await new Promise((r) => setTimeout(r, 50));
      throw new Error("FAKE_INTAKE_TIMEOUT");
    }

    // Extract raw intent + answers from the user payload envelope
    const intentMatch = content.match(
      /INTENT:\s*([\s\S]*?)(?:\n\s*CLARIFICATIONS:|$)/i,
    );
    const clarMatch = content.match(/CLARIFICATIONS:\s*([\s\S]*)$/i);
    const rawIntent = (intentMatch?.[1] ?? content).trim();
    // If system prompt polluted rawIntent, take last non-empty line block after INTENT
    const cleanedIntent = rawIntent.includes("Tu es le moteur")
      ? (intentMatch?.[1] ?? "").trim() || content.slice(-200)
      : rawIntent;
    const clarifications = (clarMatch?.[1] ?? "")
      .split(/\n+/)
      .map((l) => l.replace(/^- /, "").trim())
      .filter(Boolean);

    const payload = buildFakeProposalPayload(cleanedIntent, clarifications);
    return {
      text: JSON.stringify(payload),
      usage: {
        inputTokens: 20,
        outputTokens: 40,
        totalTokens: 60,
        model: "d1-intake-fake-model",
        providerResponseId: `d1-fake-${this.callCount}`,
      },
    };
  }
}
```
### `projects/sfia-studio/app/lib/d1/intake/index.ts`

```tsx
export * from "./types";
export * from "./validateProposal";
export * from "./analyzeIntent";
export * from "./fakeIntakeProvider";
export { setIntakeProviderForTests, resolveIntakeProvider } from "./resolveProvider";
```
### `projects/sfia-studio/app/lib/d1/intake/prompt.ts`

```tsx
export const D1_C2_SYSTEM_PROMPT = `Tu es le moteur de qualification d'intention de SFIA Studio (incrément D1-C2).

Règles strictes :
- Réponds UNIQUEMENT en JSON valide (pas de prose hors JSON).
- Langue des champs textuels : français.
- Tu comprends, reformules, distingues observation / hypothèse / proposition.
- Tu ne mutes RIEN : aucun Project, Cycle, Action, Decision.
- Tu n'inventes AUCUN projet ou cycle existant ; proposedProjectId et proposedCycleId restent toujours null.
- Tu ne fais AUCUNE recherche de contexte Workspace/Git (C3 uniquement).
- Tu ne choisis pas à la place de Morris ; requiresHumanConfirmation = true sauf ANALYZE_ONLY.
- Questions : une question principale maximale, uniquement si nécessaire.
- Interdit : V3-ADOPTED, V3-IMPLEMENTED, claims d'adoption.
- Outcomes autorisés uniquement :
  CREATE_PROJECT_CANDIDATE | OPEN_CYCLE_CANDIDATE | ANALYZE_ONLY | NEED_CLARIFICATION | UNDETERMINED
- status aligné :
  NEED_CLARIFICATION → CLARIFICATION_REQUIRED
  CREATE_PROJECT_CANDIDATE | OPEN_CYCLE_CANDIDATE → PROPOSAL_READY
  ANALYZE_ONLY → ANALYSIS_ONLY
  UNDETERMINED → UNDETERMINED
- schemaVersion doit être "0.1.0-d1-c2"
- confidence entre 0 et 1 (estimation, pas une vérité)

Schéma JSON attendu :
{
  "schemaVersion": "0.1.0-d1-c2",
  "proposalId": "string",
  "rawIntent": "string",
  "normalizedIntent": "string",
  "subject": "string",
  "proposedObjective": "string",
  "proposedOutcomeType": "...",
  "proposedCycleType": "string|null",
  "proposedProfile": "string|null",
  "proposedBlocks": ["string"],
  "constraints": ["string"],
  "assumptions": ["string"],
  "missingInformation": ["string"],
  "clarificationQuestion": "string|null",
  "alternatives": [{"outcomeType":"...","label":"...","rationale":"..."}],
  "confidence": 0.0,
  "rationale": "string",
  "requiresHumanConfirmation": true,
  "status": "...",
  "createdAt": "ISO-8601",
  "proposedProjectId": null,
  "proposedCycleId": null
}`;
```
### `projects/sfia-studio/app/lib/d1/intake/resolveProvider.ts`

```tsx
import type { ConversationProvider } from "@/lib/ops1/conversation/types";
import { FakeIntakeConversationProvider } from "./fakeIntakeProvider";

let override: ConversationProvider | null = null;

/** Test-only injection. */
export function setIntakeProviderForTests(
  provider: ConversationProvider | null,
): void {
  override = provider;
}

/**
 * Resolve intake provider.
 * Default = fake (deterministic). Live OpenAI only if D1_INTAKE_LIVE=1 and secrets present.
 * Does not alter OPS1 provider resolution.
 */
export function resolveIntakeProvider(): {
  provider: ConversationProvider;
  mode: "fake" | "live";
} {
  if (override) {
    return {
      provider: override,
      mode: override.providerId.includes("fake") ? "fake" : "live",
    };
  }
  if (process.env.D1_INTAKE_PROVIDER === "fake") {
    return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
  }
  if (process.env.D1_INTAKE_LIVE === "1") {
    try {
      // Lazy require to avoid pulling OpenAI into client bundles via actions tree
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { requireLiveConversationSecrets } = require("@/lib/ops1/conversation/config") as typeof import("@/lib/ops1/conversation/config");
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { OpenAIConversationProvider } = require("@/lib/ops1/conversation/openaiProvider") as typeof import("@/lib/ops1/conversation/openaiProvider");
      const { apiKey, model } = requireLiveConversationSecrets();
      return {
        provider: new OpenAIConversationProvider(apiKey, model),
        mode: "live",
      };
    } catch {
      return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
    }
  }
  return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
}
```
### `projects/sfia-studio/app/lib/d1/intake/types.ts`

```tsx
/** D1-C2 — RequestRoutingProposal candidate (not a sealed schema). */

export const REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION = "0.1.0-d1-c2" as const;

export const C2_OUTCOME_TYPES = [
  "CREATE_PROJECT_CANDIDATE",
  "OPEN_CYCLE_CANDIDATE",
  "ANALYZE_ONLY",
  "NEED_CLARIFICATION",
  "UNDETERMINED",
] as const;
export type C2OutcomeType = (typeof C2_OUTCOME_TYPES)[number];

export const C2_PROPOSAL_STATUSES = [
  "CLARIFICATION_REQUIRED",
  "PROPOSAL_READY",
  "ANALYSIS_ONLY",
  "UNDETERMINED",
] as const;
export type C2ProposalStatus = (typeof C2_PROPOSAL_STATUSES)[number];

export interface RequestRoutingAlternative {
  outcomeType: C2OutcomeType;
  label: string;
  rationale: string;
}

export interface RequestRoutingProposal {
  schemaVersion: typeof REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION;
  proposalId: string;
  rawIntent: string;
  normalizedIntent: string;
  subject: string;
  proposedObjective: string;
  proposedOutcomeType: C2OutcomeType;
  proposedCycleType: string | null;
  proposedProfile: string | null;
  proposedBlocks: string[];
  constraints: string[];
  assumptions: string[];
  missingInformation: string[];
  clarificationQuestion: string | null;
  alternatives: RequestRoutingAlternative[];
  /** 0–1 inclusive — never presented as absolute truth. */
  confidence: number;
  rationale: string;
  requiresHumanConfirmation: boolean;
  status: C2ProposalStatus;
  createdAt: string;
  /** Always null in C2 — matching deferred to C3. */
  proposedProjectId: null;
  /** Always null in C2 — matching deferred to C3. */
  proposedCycleId: null;
}

export interface IntakeClarificationTurn {
  role: "user" | "assistant";
  content: string;
}

export interface AnalyzeIntentInput {
  sessionLocalId: string;
  rawIntent: string;
  clarificationTurns?: IntakeClarificationTurn[];
}

export const D1_INTAKE_MAX_INTENT_LENGTH = 2000;
export const D1_INTAKE_MAX_CLARIFICATION_TURNS = 3;
export const D1_INTAKE_PROVIDER_TIMEOUT_MS = 25_000;
```
### `projects/sfia-studio/app/lib/d1/intake/validateProposal.ts`

```tsx
import { D1Error } from "../errors";
import {
  C2_OUTCOME_TYPES,
  C2_PROPOSAL_STATUSES,
  REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
  type C2OutcomeType,
  type C2ProposalStatus,
  type RequestRoutingAlternative,
  type RequestRoutingProposal,
} from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown, field: string): string {
  if (typeof value !== "string") {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string attendue).`);
  }
  return value.trim();
}

function asStringArray(value: unknown, field: string): string[] {
  if (!Array.isArray(value) || value.some((v) => typeof v !== "string")) {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string[] attendu).`);
  }
  return value.map((v) => v.trim()).filter(Boolean);
}

function asNullableString(value: unknown, field: string): string | null {
  if (value === null || value === undefined) return null;
  if (typeof value !== "string") {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string|null).`);
  }
  const t = value.trim();
  return t.length ? t : null;
}

function asOutcome(value: unknown): C2OutcomeType {
  if (typeof value !== "string" || !C2_OUTCOME_TYPES.includes(value as C2OutcomeType)) {
    throw new D1Error("VALIDATION", `Outcome C2 non autorisé: ${String(value)}`);
  }
  return value as C2OutcomeType;
}

function asStatus(value: unknown): C2ProposalStatus {
  if (
    typeof value !== "string" ||
    !C2_PROPOSAL_STATUSES.includes(value as C2ProposalStatus)
  ) {
    throw new D1Error("VALIDATION", `Status C2 non autorisé: ${String(value)}`);
  }
  return value as C2ProposalStatus;
}

function asConfidence(value: unknown): number {
  if (typeof value !== "number" || Number.isNaN(value) || value < 0 || value > 1) {
    throw new D1Error("VALIDATION", "confidence hors bornes [0,1].");
  }
  return value;
}

function asAlternatives(value: unknown): RequestRoutingAlternative[] {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) {
    throw new D1Error("VALIDATION", "alternatives invalides.");
  }
  return value.map((item, i) => {
    if (!isPlainObject(item)) {
      throw new D1Error("VALIDATION", `alternative[${i}] invalide.`);
    }
    return {
      outcomeType: asOutcome(item.outcomeType),
      label: asString(item.label, `alternatives[${i}].label`),
      rationale: asString(item.rationale, `alternatives[${i}].rationale`),
    };
  });
}

const FORBIDDEN_CLAIM = /V3[-_ ]?(ADOPTED|IMPLEMENTED)/i;

/**
 * Deterministic runtime validation of GPT / fake payload.
 * Rejects invented Project/Cycle IDs and forbidden claims.
 */
export function validateRequestRoutingProposal(
  raw: unknown,
): RequestRoutingProposal {
  if (!isPlainObject(raw)) {
    throw new D1Error("VALIDATION", "Payload proposition non-objet.");
  }

  if (raw.proposedProjectId != null || raw.candidateProjectId != null) {
    throw new D1Error(
      "VALIDATION",
      "C2 interdit proposedProjectId / candidateProjectId (matching = C3).",
    );
  }
  if (raw.proposedCycleId != null || raw.candidateCycleId != null) {
    throw new D1Error(
      "VALIDATION",
      "C2 interdit proposedCycleId / candidateCycleId (matching = C3).",
    );
  }

  const proposal: RequestRoutingProposal = {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: asString(raw.proposalId, "proposalId"),
    rawIntent: asString(raw.rawIntent, "rawIntent"),
    normalizedIntent: asString(raw.normalizedIntent, "normalizedIntent"),
    subject: asString(raw.subject, "subject"),
    proposedObjective: asString(raw.proposedObjective, "proposedObjective"),
    proposedOutcomeType: asOutcome(raw.proposedOutcomeType),
    proposedCycleType: asNullableString(raw.proposedCycleType, "proposedCycleType"),
    proposedProfile: asNullableString(raw.proposedProfile, "proposedProfile"),
    proposedBlocks: asStringArray(raw.proposedBlocks ?? [], "proposedBlocks"),
    constraints: asStringArray(raw.constraints ?? [], "constraints"),
    assumptions: asStringArray(raw.assumptions ?? [], "assumptions"),
    missingInformation: asStringArray(
      raw.missingInformation ?? [],
      "missingInformation",
    ),
    clarificationQuestion: asNullableString(
      raw.clarificationQuestion,
      "clarificationQuestion",
    ),
    alternatives: asAlternatives(raw.alternatives),
    confidence: asConfidence(raw.confidence),
    rationale: asString(raw.rationale, "rationale"),
    requiresHumanConfirmation: Boolean(raw.requiresHumanConfirmation),
    status: asStatus(raw.status),
    createdAt: asString(raw.createdAt, "createdAt"),
    proposedProjectId: null,
    proposedCycleId: null,
  };

  const claimSurface = [
    proposal.normalizedIntent,
    proposal.proposedObjective,
    proposal.rationale,
    ...proposal.assumptions,
  ].join(" ");
  if (FORBIDDEN_CLAIM.test(claimSurface)) {
    throw new D1Error("CLAIM_FORBIDDEN", "Claim v3 interdit dans la proposition.");
  }

  if (proposal.proposedOutcomeType === "NEED_CLARIFICATION") {
    if (proposal.status !== "CLARIFICATION_REQUIRED") {
      throw new D1Error(
        "VALIDATION",
        "NEED_CLARIFICATION exige status CLARIFICATION_REQUIRED.",
      );
    }
    if (!proposal.clarificationQuestion) {
      throw new D1Error(
        "VALIDATION",
        "NEED_CLARIFICATION exige clarificationQuestion.",
      );
    }
  }

  if (proposal.proposedOutcomeType === "ANALYZE_ONLY") {
    if (proposal.status !== "ANALYSIS_ONLY") {
      throw new D1Error("VALIDATION", "ANALYZE_ONLY exige status ANALYSIS_ONLY.");
    }
  }

  if (
    proposal.proposedOutcomeType === "CREATE_PROJECT_CANDIDATE" ||
    proposal.proposedOutcomeType === "OPEN_CYCLE_CANDIDATE"
  ) {
    if (proposal.status !== "PROPOSAL_READY") {
      throw new D1Error(
        "VALIDATION",
        "Outcome candidat mutatif exige PROPOSAL_READY (non exécutable).",
      );
    }
    if (!proposal.requiresHumanConfirmation) {
      throw new D1Error(
        "VALIDATION",
        "requiresHumanConfirmation doit être true pour une suite candidate.",
      );
    }
  }

  if (proposal.proposedOutcomeType === "UNDETERMINED") {
    if (proposal.status !== "UNDETERMINED") {
      throw new D1Error("VALIDATION", "UNDETERMINED exige status UNDETERMINED.");
    }
  }

  if (raw.schemaVersion && raw.schemaVersion !== REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION) {
    throw new D1Error(
      "VALIDATION",
      `schemaVersion inattendu: ${String(raw.schemaVersion)}`,
    );
  }

  return proposal;
}

/** Extract JSON object from model text (fenced or raw). */
export function parseProposalJsonText(text: string): unknown {
  const trimmed = text.trim();
  const fence = trimmed.match(/``\`(?:json)?\s*([\s\S]*?)``\`/i);
  const candidate = fence ? fence[1].trim() : trimmed;
  try {
    return JSON.parse(candidate);
  } catch (error) {
    throw new D1Error(
      "VALIDATION",
      "Réponse provider non JSON / non parsable.",
      error,
    );
  }
}
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/01-implemented-scope.md`

```markdown
# 01 — Scope

## Inclus
- Analyse d’intention via provider borné (fake par défaut)
- Clarification (max 3 tours)
- RequestRoutingProposal candidat validé runtime
- Outcomes CREATE_PROJECT_CANDIDATE / OPEN_CYCLE_CANDIDATE / ANALYZE_ONLY / NEED_CLARIFICATION / UNDETERMINED
- UX états loading / clarification / proposal / analyze-only / error
- Aucune mutation Project/Cycle

## Exclus
Matching C3 · création · GuidedSession · Decision Center · deps nouvelles · UX-R04 polish
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/02-intent-understanding-contract.md`

```markdown
# 02 — Intent understanding

Entrée : rawIntent + clarificationTurns (session React locale).
Sortie : RequestRoutingProposal non exécutable.
Limites : 2000 chars · 3 tours · timeout 25s.
Refresh = perte de session (pas de persistance métier).
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/03-request-routing-proposal-candidate.md`

```markdown
# 03 — RequestRoutingProposal

schemaVersion `0.1.0-d1-c2`
proposedProjectId / proposedCycleId toujours null en C2.
requiresHumanConfirmation true pour suites candidates.
Validation runtime déterministe (`validateRequestRoutingProposal`).
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/04-gpt-provider-and-prompt-contract.md`

```markdown
# 04 — Provider & prompt

- Interface OPS1 `ConversationProvider` réutilisée
- `FakeIntakeConversationProvider` déterministe (défaut)
- Live optionnel : `D1_INTAKE_LIVE=1` + secrets OPS1 existants
- Prompt système D1-C2 local (`prompt.ts`) — JSON strict, anti-claims, no tools
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/05-clarification-state-machine.md`

```markdown
# 05 — Clarification

empty → analyzing → clarification ↔ analyzing → proposal|analyze_only|undetermined|error
Max 3 réponses utilisateur ; au-delà NEED_CLARIFICATION → UNDETERMINED.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/06-security-rgpd-observability.md`

```markdown
# 06 — Sécurité / RGPD / obs

Logs : event, longueur, tours, outcome, durée, mode fake/live — pas le corps.
Événements intake_analysis_* / clarification_* / proposal_* / provider_failed / cancelled.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/07-runtime-figma-validation.md`

```markdown
# 07 — Figma / runtime

fileKey IS70XDnBMvZuJYmaI5eZT2
clarification ≈ 12:36 · proposal ≈ 12:60 · responsive 14:64/90/117
Captures `.tmp-sfia-review/screenshots-d1-c2/`
UX-R04 différée après C3.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/08-test-results.md`

```markdown
# 08 — Tests

- vitest d1 : 26/26
- e2e d1-c2 + C1 + I1 + p0-smoke : 26/26
- tsc --noEmit : pass
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/09-reserves-and-debt.md`

```markdown
# 09 — Réserves

- C2-R01 : live smoke optionnel non exécuté par défaut
- C2-R02 : matching C3 absent (volontaire)
- C2-R03 : session non persistée
- UX-R04 : polish différé
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/10-d1-c2-validation-decision-pack.md`

```markdown
# 10 — Decision pack

**Verdict :** SFIA v3.0 D1-C2 INTENT UNDERSTANDING AND STRUCTURED PROPOSAL IMPLEMENTED — VALIDATION REQUIRED

Décisions Morris : GO VALIDATION D1-C2 ; ouvrir C3 matching.
Anti-claims : pas C3 · pas mutation GPT · pas V3-IMPLEMENTED.
```
### `projects/sfia-studio/sfia-v3-delivery/d1-c2-intent-understanding-structured-proposal/README.md`

```markdown
# D1-C2 — Intent Understanding and Structured Proposal

| Champ | Valeur |
|-------|--------|
| BCDI | BCDI-D1-C2-INTENT-UNDERSTANDING-STRUCTURED-PROPOSAL |
| Gate consommé | GO IMPLEMENTATION D1-C2 |
| Gate suivant | GO VALIDATION D1-C2 |
| Statut | D1-C2 IMPLEMENTED CANDIDATE |
| Baseline | SFIA v2.6 |
| Statut v3 | V3-MODELED CANDIDATE |

Index : 01–10.
```
### `projects/sfia-studio/app/__tests__/d1/intake-c2.test.ts`

```tsx
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import {
  parseProposalJsonText,
  validateRequestRoutingProposal,
} from "@/lib/d1/intake/validateProposal";
import { analyzeIntent } from "@/lib/d1/intake/analyzeIntent";
import {
  buildFakeProposalPayload,
  FakeIntakeConversationProvider,
} from "@/lib/d1/intake/fakeIntakeProvider";
import { setIntakeProviderForTests } from "@/lib/d1/intake/resolveProvider";
import { D1Error } from "@/lib/d1/errors";
import { REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION } from "@/lib/d1/intake/types";

function validBase(over: Record<string, unknown> = {}) {
  return {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: "rrp-1",
    rawIntent: "Je veux lancer une app contrats",
    normalizedIntent: "Créer un projet de suivi des contrats",
    subject: "Suivi des contrats",
    proposedObjective: "Cadrer le suivi des contrats",
    proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
    proposedCycleType: "FRAMING",
    proposedProfile: "Standard",
    proposedBlocks: ["cadrage"],
    constraints: [],
    assumptions: ["Aucun match contexte"],
    missingInformation: ["confirmation humaine"],
    clarificationQuestion: null,
    alternatives: [],
    confidence: 0.7,
    rationale: "Nouveau besoin produit",
    requiresHumanConfirmation: true,
    status: "PROPOSAL_READY",
    createdAt: "2026-07-22T18:00:00.000Z",
    proposedProjectId: null,
    proposedCycleId: null,
    ...over,
  };
}

describe("D1-C2 RequestRoutingProposal validation", () => {
  it("accepts a valid CREATE_PROJECT_CANDIDATE payload", () => {
    const p = validateRequestRoutingProposal(validBase());
    expect(p.proposedOutcomeType).toBe("CREATE_PROJECT_CANDIDATE");
    expect(p.requiresHumanConfirmation).toBe(true);
    expect(p.proposedProjectId).toBeNull();
  });

  it("rejects invented project ids", () => {
    expect(() =>
      validateRequestRoutingProposal(
        validBase({ proposedProjectId: "proj-x" }),
      ),
    ).toThrow(D1Error);
  });

  it("rejects confidence out of bounds", () => {
    expect(() =>
      validateRequestRoutingProposal(validBase({ confidence: 1.5 })),
    ).toThrow(D1Error);
  });

  it("rejects forbidden claims", () => {
    expect(() =>
      validateRequestRoutingProposal(
        validBase({ rationale: "This is V3-ADOPTED" }),
      ),
    ).toThrow(D1Error);
  });

  it("requires clarification question for NEED_CLARIFICATION", () => {
    expect(() =>
      validateRequestRoutingProposal(
        validBase({
          proposedOutcomeType: "NEED_CLARIFICATION",
          status: "CLARIFICATION_REQUIRED",
          clarificationQuestion: null,
          requiresHumanConfirmation: true,
        }),
      ),
    ).toThrow(D1Error);
  });

  it("parses fenced JSON", () => {
    const raw = parseProposalJsonText(
      "``\`json\n" + JSON.stringify(validBase()) + "\n``\`",
    );
    expect(validateRequestRoutingProposal(raw).proposalId).toBe("rrp-1");
  });
});

describe("D1-C2 fake heuristics", () => {
  it("maps analyze-only intent", () => {
    const p = buildFakeProposalPayload(
      "Analyse cette idée, mais ne crée rien.",
      [],
    );
    expect(p.proposedOutcomeType).toBe("ANALYZE_ONLY");
  });

  it("maps vague intent to clarification", () => {
    const p = buildFakeProposalPayload("J’ai un nouveau sujet.", []);
    expect(p.proposedOutcomeType).toBe("NEED_CLARIFICATION");
  });

  it("maps clear product intent to create candidate", () => {
    const p = buildFakeProposalPayload(
      "Je veux lancer une application de suivi des contrats.",
      [],
    );
    expect(p.proposedOutcomeType).toBe("CREATE_PROJECT_CANDIDATE");
  });
});

describe("D1-C2 analyzeIntent service", () => {
  beforeEach(() => {
    setIntakeProviderForTests(new FakeIntakeConversationProvider());
  });
  afterEach(() => {
    setIntakeProviderForTests(null);
  });

  it("produces a validated proposal without mutation side effects", async () => {
    const result = await analyzeIntent({
      sessionLocalId: "s1",
      rawIntent: "Je veux lancer une application de suivi des contrats.",
    });
    expect(result.proposal.proposedOutcomeType).toBe(
      "CREATE_PROJECT_CANDIDATE",
    );
    expect(result.proposal.proposedProjectId).toBeNull();
    expect(result.providerMode).toBe("fake");
  });

  it("asks for clarification then accepts an answer", async () => {
    const first = await analyzeIntent({
      sessionLocalId: "s2",
      rawIntent: "J’ai un nouveau sujet.",
    });
    expect(first.proposal.status).toBe("CLARIFICATION_REQUIRED");
    const second = await analyzeIntent({
      sessionLocalId: "s2",
      rawIntent: "J’ai un nouveau sujet.",
      clarificationTurns: [
        {
          role: "assistant",
          content: first.proposal.clarificationQuestion ?? "",
        },
        {
          role: "user",
          content: "Je veux un module de suivi des contrats pour le legal.",
        },
      ],
    });
    expect(second.proposal.proposedOutcomeType).toBe(
      "CREATE_PROJECT_CANDIDATE",
    );
  });

  it("rejects oversized intent", async () => {
    await expect(
      analyzeIntent({
        sessionLocalId: "s3",
        rawIntent: "x".repeat(3000),
      }),
    ).rejects.toBeInstanceOf(D1Error);
  });

  it("maps provider error to D1Error PROVIDER", async () => {
    await expect(
      analyzeIntent({
        sessionLocalId: "s4",
        rawIntent: "__FORCE_PROVIDER_ERROR__ lancer une app",
      }),
    ).rejects.toMatchObject({ code: "PROVIDER" });
  });
});
```
### `projects/sfia-studio/app/e2e/d1-c2-intent-understanding.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-c2",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
  process.env.D1_INTAKE_PROVIDER = "fake";
});

test.describe("D1-C2 Intent Understanding and Structured Proposal", () => {
  test("clear intent → structured proposal, no mutation", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("intake-no-mutation")).toBeVisible();
    await expect(page.getByTestId("proposal-outcome")).toContainText(
      "Créer un projet",
    );
    await expect(page.getByText(/Confirmer et créer/i)).toHaveCount(0);
    await expect(page).toHaveURL(/\/nouvelle-demande/);
    await page.screenshot({
      path: path.join(shotDir, "proposal-1440.png"),
      fullPage: false,
    });
  });

  test("ambiguous intent → clarification → proposal", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page.getByTestId("intake-intent").fill("J’ai un nouveau sujet.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-clarification")).toBeVisible({
      timeout: 15_000,
    });
    await page.screenshot({
      path: path.join(shotDir, "clarification-1440.png"),
      fullPage: false,
    });
    await page
      .getByTestId("clarification-answer")
      .fill("Je veux un module de suivi des contrats pour le legal.");
    await page.getByTestId("clarification-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
  });

  test("analyze-only produces analysis without executable action", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Analyse cette idée, mais ne crée rien.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("proposal-outcome")).toContainText(
      "Analyse seule",
    );
    await page.screenshot({
      path: path.join(shotDir, "analyze-only-1440.png"),
      fullPage: false,
    });
  });

  test("provider error + retry + cancel + manual + legacy", async ({
    page,
  }) => {
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("__FORCE_PROVIDER_ERROR__ lancer une app");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-error")).toBeVisible({
      timeout: 15_000,
    });
    await page.screenshot({
      path: path.join(shotDir, "error-1440.png"),
      fullPage: false,
    });
    await page.getByTestId("intake-cancel").click();
    await expect(page.getByTestId("intake-composer")).toBeVisible();

    await page.getByTestId("quick-manual").click();
    await expect(page).toHaveURL(/\/projects\/new/);
    await page.goto("/workspace");
    await expect(
      page.getByRole("heading", { name: "Reprendre un travail", level: 2 }),
    ).toBeVisible();
    await page.goto("/ops1/nouvelle-demande");
    await expect(
      page.getByRole("heading", { name: "Nouvelle demande", level: 1 }),
    ).toBeVisible();
  });

  for (const width of [1728, 1440, 1280, 1024] as const) {
    test(`proposal responsive no H-scroll at ${width}`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/nouvelle-demande");
      await page
        .getByTestId("intake-intent")
        .fill("Je veux lancer une application de suivi des contrats.");
      await page.getByTestId("intake-submit").click();
      await expect(page.getByTestId("intake-proposal")).toBeVisible({
        timeout: 15_000,
      });
      const metrics = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        innerWidth: window.innerWidth,
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.innerWidth + 1);
      await page.screenshot({
        path: path.join(shotDir, `proposal-${width}.png`),
        fullPage: false,
      });
    });
  }
});
```
### `projects/sfia-studio/app/features/d1/intake/IntakeView.tsx`

```tsx
"use client";

import { useEffect, useId, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import type { D1Project } from "@/lib/d1/types";
import type {
  IntakeClarificationTurn,
  RequestRoutingProposal,
} from "@/lib/d1/intake/types";
import {
  actionAnalyzeIntent,
  actionCancelIntakeSession,
  actionLogClarificationAnswer,
} from "@/lib/d1/intake/actions";
import { logIntakeEvent } from "@/lib/d1/intakeObservability";
import { D1AppShell } from "../D1AppShell";
import { IntakeContextRail } from "./IntakeContextRail";
import shell from "../d1-shell.module.css";
import styles from "./intake.module.css";

const EXAMPLES = [
  "Je veux lancer une application de suivi des contrats.",
  "Je veux travailler sur la gestion des utilisateurs.",
  "Analyse cette idée, mais ne crée rien.",
  "J’ai un nouveau sujet.",
] as const;

type Phase =
  | "empty"
  | "draft"
  | "analyzing"
  | "clarification"
  | "proposal"
  | "analyze_only"
  | "undetermined"
  | "error";

function outcomeLabel(outcome: string): string {
  switch (outcome) {
    case "CREATE_PROJECT_CANDIDATE":
      return "Créer un projet (proposition)";
    case "OPEN_CYCLE_CANDIDATE":
      return "Ouvrir un cycle (proposition)";
    case "ANALYZE_ONLY":
      return "Analyse seule";
    case "NEED_CLARIFICATION":
      return "Clarification requise";
    case "UNDETERMINED":
      return "Indéterminé";
    default:
      return outcome;
  }
}

export function IntakeView({ projects }: { projects: D1Project[] }) {
  const composerId = useId();
  const helpId = useId();
  const liveId = useId();
  const clarifyId = useId();
  const sessionLocalId = useMemo(
    () => `intake-local-${crypto.randomUUID().slice(0, 8)}`,
    [],
  );
  const [intent, setIntent] = useState("");
  const [phase, setPhase] = useState<Phase>("empty");
  const [proposal, setProposal] = useState<RequestRoutingProposal | null>(null);
  const [turns, setTurns] = useState<IntakeClarificationTurn[]>([]);
  const [clarifyAnswer, setClarifyAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [providerMode, setProviderMode] = useState<"fake" | "live" | null>(
    null,
  );
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);

  const locked =
    busy ||
    pending ||
    phase === "analyzing" ||
    phase === "clarification" ||
    phase === "proposal" ||
    phase === "analyze_only" ||
    phase === "undetermined";

  useEffect(() => {
    logIntakeEvent("intake_opened", { sessionLocalId });
  }, [sessionLocalId]);

  function focusComposer() {
    document.getElementById(composerId)?.focus();
  }

  function resetAll() {
    setPhase("empty");
    setIntent("");
    setProposal(null);
    setTurns([]);
    setClarifyAnswer("");
    setErrorMessage(null);
    setProviderMode(null);
    void actionCancelIntakeSession(sessionLocalId);
    focusComposer();
  }

  function applyExample(text: string) {
    if (locked && phase !== "error" && phase !== "empty" && phase !== "draft") {
      return;
    }
    setIntent(text);
    setPhase("draft");
    setProposal(null);
    setErrorMessage(null);
    setTurns([]);
  }

  function runAnalysis(nextTurns: IntakeClarificationTurn[]) {
    const trimmed = intent.trim();
    if (!trimmed || busy) return;
    setBusy(true);
    setPhase("analyzing");
    setErrorMessage(null);
    startTransition(async () => {
      const result = await actionAnalyzeIntent({
        sessionLocalId,
        rawIntent: trimmed,
        clarificationTurns: nextTurns,
      });
      setBusy(false);
      if (!result.ok) {
        setPhase("error");
        setErrorMessage(result.message);
        setProposal(null);
        return;
      }
      setProviderMode(result.providerMode);
      setProposal(result.proposal);
      setTurns(nextTurns);
      if (result.proposal.status === "CLARIFICATION_REQUIRED") {
        setPhase("clarification");
        setClarifyAnswer("");
        requestAnimationFrame(() => {
          document.getElementById(clarifyId)?.focus();
        });
      } else if (result.proposal.status === "ANALYSIS_ONLY") {
        setPhase("analyze_only");
      } else if (result.proposal.status === "UNDETERMINED") {
        setPhase("undetermined");
      } else {
        setPhase("proposal");
      }
    });
  }

  function onSubmitIntent(e: React.FormEvent) {
    e.preventDefault();
    if (!intent.trim()) return;
    logIntakeEvent("intake_intent_submitted", {
      sessionLocalId,
      intentLength: intent.trim().length,
      status: "analyze",
    });
    runAnalysis([]);
  }

  function onSubmitClarification(e: React.FormEvent) {
    e.preventDefault();
    const answer = clarifyAnswer.trim();
    if (!answer || !proposal?.clarificationQuestion) return;
    const nextTurns: IntakeClarificationTurn[] = [
      ...turns,
      { role: "assistant", content: proposal.clarificationQuestion },
      { role: "user", content: answer },
    ];
    void actionLogClarificationAnswer({
      sessionLocalId,
      answerLength: answer.length,
    });
    runAnalysis(nextTurns);
  }

  const rail = (
    <IntakeContextRail
      hasSubmitted={
        phase === "proposal" ||
        phase === "analyze_only" ||
        phase === "clarification" ||
        phase === "undetermined"
      }
      recentCount={projects.length}
      phase={phase}
      providerMode={providerMode}
    />
  );

  return (
    <D1AppShell active="intake" title="Nouvelle demande" rail={rail}>
      <header className={styles.hero}>
        <h1>Nouvelle demande</h1>
        <p className={styles.heroLead}>
          Décrivez ce que vous voulez faire. Studio comprend, clarifie si besoin
          et propose une suite structurée — vous gardez la décision finale.
        </p>
        <div className={styles.valueStrip} aria-label="Proposition de valeur">
          <span className={styles.valueChip}>Intent-first</span>
          <span className={styles.valueChip}>Proposition non exécutée</span>
          <span className={styles.valueChip}>Confirmation humaine</span>
        </div>
      </header>

      <div
        className={styles.quickActions}
        role="group"
        aria-label="Actions principales"
      >
        <button
          type="button"
          className={`${styles.quickBtn} ${styles.quickBtnPrimary}`}
          onClick={focusComposer}
          data-testid="quick-describe"
          disabled={busy}
        >
          Décrire un nouveau besoin
        </button>
        <Link
          className={styles.quickBtn}
          href="/projects/new"
          data-testid="quick-manual"
          onClick={() =>
            logIntakeEvent("intake_manual_creation_opened", { sessionLocalId })
          }
        >
          Créer manuellement
        </Link>
      </div>

      <div aria-live="polite" aria-atomic="true" id={liveId}>
        {phase === "analyzing" ? (
          <div className={styles.loadingRow} data-testid="intake-loading">
            Analyse de votre intention en cours…
          </div>
        ) : null}
        {errorMessage ? (
          <div
            className={styles.bannerError}
            role="alert"
            data-testid="intake-error"
          >
            {errorMessage}
          </div>
        ) : null}
      </div>

      {proposal &&
      (phase === "proposal" ||
        phase === "analyze_only" ||
        phase === "undetermined") ? (
        <section
          className={styles.proposalCard}
          data-testid="intake-proposal"
          aria-label="Proposition structurée"
        >
          <div className={styles.bannerWarn} data-testid="intake-no-mutation">
            Proposition uniquement — aucune action n’a été exécutée. Aucun
            projet ni cycle n’a été créé.
          </div>
          <h2>Ce que Studio a compris</h2>
          <div className={styles.proposalMeta}>
            <span className={styles.valueChip} data-testid="proposal-outcome">
              {outcomeLabel(proposal.proposedOutcomeType)}
            </span>
            <span className={styles.valueChip} data-testid="proposal-confidence">
              Confiance estimée {(proposal.confidence * 100).toFixed(0)} %
            </span>
            {providerMode ? (
              <span className={shell.hint}>mode {providerMode}</span>
            ) : null}
          </div>
          <div className={styles.proposalSection}>
            <h3>Intention normalisée</h3>
            <p data-testid="proposal-normalized">{proposal.normalizedIntent}</p>
          </div>
          <div className={styles.proposalSection}>
            <h3>Objectif proposé</h3>
            <p data-testid="proposal-objective">{proposal.proposedObjective}</p>
          </div>
          <div className={styles.proposalSection}>
            <h3>Pourquoi</h3>
            <p data-testid="proposal-rationale">{proposal.rationale}</p>
          </div>
          {proposal.assumptions.length ? (
            <div className={styles.proposalSection}>
              <h3>Hypothèses</h3>
              <ul data-testid="proposal-assumptions">
                {proposal.assumptions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {proposal.missingInformation.length ? (
            <div className={styles.proposalSection}>
              <h3>Informations manquantes</h3>
              <ul data-testid="proposal-missing">
                {proposal.missingInformation.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {proposal.alternatives.length ? (
            <div className={styles.proposalSection}>
              <h3>Alternatives</h3>
              <ul data-testid="proposal-alternatives">
                {proposal.alternatives.map((alt) => (
                  <li key={alt.label}>
                    <strong>{alt.label}</strong> — {alt.rationale}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className={styles.statusActions}>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-reformulate"
              onClick={() => {
                setPhase("draft");
                setProposal(null);
                setTurns([]);
                focusComposer();
              }}
            >
              Reformuler
            </button>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-restart"
              onClick={resetAll}
            >
              Recommencer
            </button>
            <Link
              className={shell.cta}
              href="/projects/new"
              data-testid="intake-goto-manual"
            >
              Créer manuellement
            </Link>
          </div>
          {/* Explicitly no executable confirm */}
          <p className={shell.hint} data-testid="intake-no-confirm-exec">
            La confirmation exécutable (créer / ouvrir un cycle) arrive dans un
            incrément ultérieur.
          </p>
        </section>
      ) : null}

      {phase === "clarification" && proposal?.clarificationQuestion ? (
        <form
          className={styles.clarificationBox}
          onSubmit={onSubmitClarification}
          data-testid="intake-clarification"
        >
          <h2>Clarification</h2>
          <p data-testid="clarification-question">
            {proposal.clarificationQuestion}
          </p>
          <label className={styles.composerLabel} htmlFor={clarifyId}>
            Votre réponse
          </label>
          <textarea
            id={clarifyId}
            className={styles.composerArea}
            value={clarifyAnswer}
            onChange={(e) => setClarifyAnswer(e.target.value)}
            data-testid="clarification-answer"
            disabled={busy}
          />
          <div className={styles.composerActions}>
            <button
              type="submit"
              className={shell.cta}
              disabled={!clarifyAnswer.trim() || busy}
              data-testid="clarification-submit"
            >
              Répondre
            </button>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-cancel"
              onClick={resetAll}
            >
              Annuler
            </button>
          </div>
        </form>
      ) : null}

      {(phase === "empty" ||
        phase === "draft" ||
        phase === "error" ||
        phase === "analyzing") && (
        <form
          className={styles.composer}
          onSubmit={onSubmitIntent}
          data-testid="intake-composer"
          aria-describedby={helpId}
        >
          <label className={styles.composerLabel} htmlFor={composerId}>
            Votre intention
          </label>
          <p className={styles.composerHelp} id={helpId}>
            Écrivez librement. Studio qualifiera votre demande et proposera une
            suite — sans exécuter de mutation.
          </p>
          <textarea
            id={composerId}
            className={styles.composerArea}
            name="intent"
            value={intent}
            onChange={(e) => {
              setIntent(e.target.value);
              if (phase === "error") setPhase(e.target.value.trim() ? "draft" : "empty");
              else if (phase !== "analyzing") {
                setPhase(e.target.value.trim() ? "draft" : "empty");
              }
            }}
            placeholder="Ex. « Je veux lancer un suivi des contrats. »"
            data-testid="intake-intent"
            aria-required
            disabled={busy || phase === "analyzing"}
          />
          <div className={styles.examples} aria-label="Exemples d’intentions">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                className={styles.exampleBtn}
                onClick={() => applyExample(ex)}
                disabled={busy}
              >
                {ex}
              </button>
            ))}
          </div>
          <div className={styles.composerActions}>
            <button
              type="submit"
              className={shell.cta}
              disabled={!intent.trim() || busy}
              data-testid="intake-submit"
            >
              Envoyer
            </button>
            {phase === "error" ? (
              <button
                type="button"
                className={`${shell.cta} ${shell.ctaSecondary}`}
                data-testid="intake-retry"
                disabled={!intent.trim() || busy}
                onClick={() => runAnalysis(turns)}
              >
                Réessayer
              </button>
            ) : null}
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-cancel"
              onClick={resetAll}
              disabled={busy}
            >
              Annuler
            </button>
          </div>
        </form>
      )}

      <div className={styles.manualBanner}>
        <p>
          Alternative : créer un projet avec un formulaire court. Pour
          retrouver un projet existant, utilisez le Workspace.
        </p>
        <Link
          className={`${shell.cta} ${shell.ctaSecondary}`}
          href="/projects/new"
          data-testid="manual-creation-entry"
        >
          Créer manuellement
        </Link>
      </div>
    </D1AppShell>
  );
}
```
### `projects/sfia-studio/app/features/d1/intake/IntakeContextRail.tsx`

```tsx
import styles from "../d1-shell.module.css";

export function IntakeContextRail({
  hasSubmitted,
  recentCount,
  phase,
  providerMode,
}: {
  hasSubmitted: boolean;
  recentCount: number;
  phase?: string;
  providerMode?: "fake" | "live" | null;
}) {
  const statusText =
    phase === "analyzing"
      ? "Analyse en cours"
      : phase === "clarification"
        ? "Clarification en cours"
        : phase === "proposal"
          ? "Proposition prête (non exécutée)"
          : phase === "analyze_only"
            ? "Analyse seule — aucune mutation"
            : phase === "error"
              ? "Erreur d’analyse"
              : hasSubmitted
                ? "Demande traitée"
                : "En attente d’une intention";

  return (
    <>
      <h2>Accompagnement</h2>
      <div className={styles.railCard}>
        <strong>Studio vous aide à</strong>
        <p>comprendre, clarifier et proposer — vous gardez la décision.</p>
      </div>
      <div className={styles.railCard}>
        <strong>État</strong>
        <p data-testid="intake-rail-status">{statusText}</p>
        {providerMode ? (
          <p className={styles.placeholder}>Provider {providerMode}</p>
        ) : null}
      </div>
      <div className={styles.railCard}>
        <strong>Projets existants</strong>
        <p>
          {recentCount > 0
            ? `${recentCount} projet(s) — ouvrez le Workspace pour reprendre`
            : "Aucun projet pour l’instant — ouvrez le Workspace plus tard"}
        </p>
        <p>
          <a href="/workspace">Aller au Workspace</a>
        </p>
      </div>
      <p className={styles.monoNote}>
        Matching contexte et mutations : hors périmètre de cet écran.
      </p>
    </>
  );
}
```
### `projects/sfia-studio/app/features/d1/intake/intake.module.css`

```css
.hero {
  margin-bottom: 20px;
}

.hero h1 {
  margin: 0 0 8px;
  font-size: clamp(1.5rem, 2.2vw, 1.85rem);
  line-height: 1.2;
  color: var(--sfia-ink);
}

.heroLead {
  margin: 0;
  font-size: 15px;
  color: var(--sfia-muted);
  max-width: 42rem;
  line-height: 1.5;
}

.valueStrip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 20px;
}

.valueChip {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  font-size: 12px;
  font-weight: 600;
}

.composer {
  display: grid;
  gap: 12px;
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: 16px;
  padding: 18px;
  box-shadow: var(--sfia-shadow-sm);
  margin-bottom: 16px;
}

.composerLabel {
  font-weight: 700;
  font-size: 14px;
}

.composerHelp {
  margin: 0;
  font-size: 13px;
  color: var(--sfia-muted);
}

.composerArea {
  width: 100%;
  box-sizing: border-box;
  min-height: 120px;
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 14px 16px;
  font: inherit;
  resize: vertical;
  background: var(--sfia-bg, #f6f7fa);
}

.composerArea:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.composerActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.examples {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.exampleBtn {
  min-height: 36px;
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px dashed var(--sfia-border);
  background: #fff;
  color: var(--sfia-ink);
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}

.exampleBtn:hover,
.exampleBtn:focus-visible {
  border-color: var(--sfia-blue);
  outline: 2px solid var(--sfia-blue);
  outline-offset: 1px;
}

.quickActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;
}

.quickBtn {
  min-height: 40px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  color: var(--sfia-ink);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.quickBtn:hover,
.quickBtn:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.quickBtnPrimary {
  background: var(--sfia-blue);
  color: #fff;
  border-color: transparent;
}

.statusPanel {
  border-radius: 14px;
  border: 1px solid #c9d6ff;
  background: var(--sfia-blue-soft);
  padding: 16px 18px;
  margin-bottom: 18px;
}

.statusPanel h2 {
  margin: 0 0 8px;
  font-size: 16px;
}

.statusPanel p {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--sfia-ink);
}

.statusMeta {
  font-size: 12px;
  color: var(--sfia-muted);
  font-style: italic;
}

.statusActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.resumeSection {
  margin-top: 8px;
}

.resumeSection h2 {
  margin: 0 0 6px;
  font-size: 18px;
}

.resumeHint {
  margin: 0 0 12px;
  font-size: 13px;
  color: var(--sfia-muted);
}

.resumeGrid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.resumeCard {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 14px 16px;
  background: #fff;
  min-height: 44px;
}

.resumeCard:hover,
.resumeCard:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.resumeCard strong {
  display: block;
  margin-bottom: 6px;
}

.staticNote {
  border: 1px dashed var(--sfia-border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fffaf0;
  color: #8a5a00;
  font-size: 13px;
  margin-top: 12px;
}

.manualBanner {
  margin-top: 20px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.manualBanner p {
  margin: 0;
  font-size: 13px;
  color: var(--sfia-muted);
  max-width: 36rem;
}

.proposalCard {
  border: 1.5px solid var(--sfia-blue);
  border-radius: 14px;
  background: #fff;
  padding: 18px;
  margin-bottom: 16px;
  display: grid;
  gap: 12px;
}

.proposalCard h2 {
  margin: 0;
  font-size: 18px;
}

.proposalMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.proposalSection h3 {
  margin: 0 0 4px;
  font-size: 13px;
  color: var(--sfia-muted);
  font-weight: 600;
  text-transform: none;
}

.proposalSection p,
.proposalSection li {
  margin: 0;
  font-size: 14px;
  line-height: 1.45;
}

.proposalSection ul {
  margin: 0;
  padding-left: 1.2rem;
}

.bannerWarn {
  border-radius: 12px;
  border: 1px solid #f0c36d;
  background: #fff7e0;
  color: #8a5a00;
  padding: 12px 14px;
  font-size: 13px;
  margin-bottom: 12px;
}

.bannerError {
  border-radius: 12px;
  border: 1px solid #f0b4b4;
  background: #ffecec;
  color: #a11;
  padding: 12px 14px;
  font-size: 14px;
  margin-bottom: 12px;
}

.loadingRow {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  font-weight: 600;
  margin-bottom: 14px;
}

.clarificationBox {
  border-radius: 14px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  padding: 16px;
  margin-bottom: 14px;
  display: grid;
  gap: 10px;
}

@media (prefers-reduced-motion: reduce) {
  .loadingRow {
    animation: none;
  }
}

```
### `projects/sfia-studio/app/lib/d1/errors.ts`

```tsx
export type D1ErrorCode =
  | "VALIDATION"
  | "NOT_FOUND"
  | "CONFLICT"
  | "UNAUTHORIZED"
  | "IDEMPOTENCY"
  | "PERSISTENCE"
  | "CLAIM_FORBIDDEN"
  | "PROVIDER"
  | "TIMEOUT";

export class D1Error extends Error {
  readonly code: D1ErrorCode;
  readonly cause?: unknown;

  constructor(code: D1ErrorCode, message: string, cause?: unknown) {
    super(message);
    this.name = "D1Error";
    this.code = code;
    this.cause = cause;
  }
}
```
### `projects/sfia-studio/app/lib/d1/intakeObservability.ts`

```tsx
/**
 * D1 intake observability — structured logs, no full intent body.
 * RGPD: length + action + status only.
 */

export type IntakeLogEvent =
  | "intake_opened"
  | "intake_intent_submitted"
  | "intake_manual_creation_opened"
  | "intake_resume_project_opened"
  | "intake_cancelled"
  | "intake_analysis_started"
  | "intake_clarification_requested"
  | "intake_clarification_answered"
  | "intake_proposal_generated"
  | "intake_analysis_only_generated"
  | "intake_provider_failed"
  | "intake_proposal_rejected"
  | "intake_session_cancelled";

export function logIntakeEvent(
  event: IntakeLogEvent,
  payload: {
    status?: string;
    intentLength?: number;
    projectId?: string;
    sessionLocalId?: string;
    durationMs?: number;
    providerMode?: "fake" | "live";
    errorCode?: string;
  } = {},
): void {
  const line = JSON.stringify({
    event,
    ts: new Date().toISOString(),
    status: payload.status ?? "ok",
    intentLength: payload.intentLength,
    projectId: payload.projectId,
    sessionLocalId: payload.sessionLocalId,
    durationMs: payload.durationMs,
    providerMode: payload.providerMode,
    errorCode: payload.errorCode,
  });
  // eslint-disable-next-line no-console
  console.info(`[d1.intake] ${line}`);
}
```
### `projects/sfia-studio/app/__tests__/d1/intake-c1.test.tsx`

```tsx
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { IntakeView } from "@/features/d1/intake/IntakeView";
import { NewProjectForm } from "@/features/d1/NewProjectForm";
import { WorkspaceHomeView } from "@/features/d1/WorkspaceHomeView";
import type { D1Project } from "@/lib/d1/types";
import { D1_GOVERNANCE_METHOD_MODE } from "@/lib/d1/types";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

vi.mock("@/lib/d1/actions", () => ({
  actionCreateProject: vi.fn(async () => ({
    ok: true,
    project: {
      projectId: "proj-test",
      name: "X",
      state: "ACTIVE",
      methodMode: D1_GOVERNANCE_METHOD_MODE,
    },
    idempotent: false,
  })),
}));

vi.mock("@/lib/d1/intake/actions", () => ({
  actionAnalyzeIntent: vi.fn(async (input: { rawIntent: string }) => {
    const intent = input.rawIntent.toLowerCase();
    if (intent.includes("__force_provider_error__")) {
      return { ok: false, code: "PROVIDER", message: "Échec fournisseur" };
    }
    if (intent.includes("ne crée rien") || intent.includes("analyse")) {
      return {
        ok: true,
        providerMode: "fake",
        providerId: "d1-intake-fake",
        durationMs: 1,
        clarificationTurnCount: 0,
        proposal: {
          schemaVersion: "0.1.0-d1-c2",
          proposalId: "rrp-a",
          rawIntent: input.rawIntent,
          normalizedIntent: "Analyse seule",
          subject: "Idée",
          proposedObjective: "Synthèse",
          proposedOutcomeType: "ANALYZE_ONLY",
          proposedCycleType: null,
          proposedProfile: null,
          proposedBlocks: [],
          constraints: [],
          assumptions: [],
          missingInformation: [],
          clarificationQuestion: null,
          alternatives: [],
          confidence: 0.8,
          rationale: "Analyse demandée",
          requiresHumanConfirmation: false,
          status: "ANALYSIS_ONLY",
          createdAt: new Date().toISOString(),
          proposedProjectId: null,
          proposedCycleId: null,
        },
      };
    }
    if (intent.includes("nouveau sujet")) {
      return {
        ok: true,
        providerMode: "fake",
        providerId: "d1-intake-fake",
        durationMs: 1,
        clarificationTurnCount: 0,
        proposal: {
          schemaVersion: "0.1.0-d1-c2",
          proposalId: "rrp-c",
          rawIntent: input.rawIntent,
          normalizedIntent: "Vague",
          subject: "Sujet",
          proposedObjective: "À clarifier",
          proposedOutcomeType: "NEED_CLARIFICATION",
          proposedCycleType: null,
          proposedProfile: null,
          proposedBlocks: [],
          constraints: [],
          assumptions: [],
          missingInformation: ["objectif"],
          clarificationQuestion:
            "Quel résultat concret souhaitez-vous obtenir avec ce sujet ?",
          alternatives: [],
          confidence: 0.3,
          rationale: "Trop vague",
          requiresHumanConfirmation: true,
          status: "CLARIFICATION_REQUIRED",
          createdAt: new Date().toISOString(),
          proposedProjectId: null,
          proposedCycleId: null,
        },
      };
    }
    return {
      ok: true,
      providerMode: "fake",
      providerId: "d1-intake-fake",
      durationMs: 1,
      clarificationTurnCount: 0,
      proposal: {
        schemaVersion: "0.1.0-d1-c2",
        proposalId: "rrp-p",
        rawIntent: input.rawIntent,
        normalizedIntent: "Créer projet",
        subject: "Contrats",
        proposedObjective: "Suivi des contrats",
        proposedOutcomeType: "CREATE_PROJECT_CANDIDATE",
        proposedCycleType: "FRAMING",
        proposedProfile: "Standard",
        proposedBlocks: ["cadrage"],
        constraints: [],
        assumptions: ["Pas de match"],
        missingInformation: ["confirmation"],
        clarificationQuestion: null,
        alternatives: [],
        confidence: 0.75,
        rationale: "Nouveau besoin",
        requiresHumanConfirmation: true,
        status: "PROPOSAL_READY",
        createdAt: new Date().toISOString(),
        proposedProjectId: null,
        proposedCycleId: null,
      },
    };
  }),
  actionCancelIntakeSession: vi.fn(async () => ({ ok: true })),
  actionLogClarificationAnswer: vi.fn(async () => ({ ok: true })),
}));

const sample: D1Project = {
  projectId: "proj-demo",
  workspaceId: "ws-studio-default",
  name: "Campus360",
  objective: "Cadrage comptes",
  initialContextSummary: null,
  methodMode: "V3_CANDIDATE",
  state: "ACTIVE",
  ownerActorId: "actor-mono-i1",
  createdAt: "2026-07-22T10:00:00.000Z",
  updatedAt: "2026-07-22T10:00:00.000Z",
  version: 1,
};

describe("D1-C2 IntakeView", () => {
  beforeEach(() => {
    vi.spyOn(console, "info").mockImplementation(() => {});
  });
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("keeps only describe + create manually actions", () => {
    render(<IntakeView projects={[sample]} />);
    expect(screen.getByTestId("quick-describe")).toBeTruthy();
    expect(screen.getByTestId("quick-manual").textContent).toBe(
      "Créer manuellement",
    );
    expect(screen.queryByTestId("quick-resume")).toBeNull();
    expect(screen.queryByTestId("quick-decisions")).toBeNull();
  });

  it("shows structured proposal without executable confirm", async () => {
    const user = userEvent.setup();
    render(<IntakeView projects={[]} />);
    await user.type(
      screen.getByTestId("intake-intent"),
      "Je veux lancer une application de suivi des contrats.",
    );
    await user.click(screen.getByTestId("intake-submit"));
    await waitFor(() => expect(screen.getByTestId("intake-proposal")).toBeTruthy());
    expect(screen.getByTestId("intake-no-mutation")).toBeTruthy();
    expect(screen.getByTestId("intake-no-confirm-exec")).toBeTruthy();
    expect(screen.queryByText(/Confirmer et créer/i)).toBeNull();
    expect(screen.queryByTestId("project-method-mode")).toBeNull();
  });

  it("handles clarification flow", async () => {
    const user = userEvent.setup();
    render(<IntakeView projects={[]} />);
    await user.type(screen.getByTestId("intake-intent"), "J’ai un nouveau sujet.");
    await user.click(screen.getByTestId("intake-submit"));
    await waitFor(() =>
      expect(screen.getByTestId("intake-clarification")).toBeTruthy(),
    );
  });

  it("handles analyze-only", async () => {
    const user = userEvent.setup();
    render(<IntakeView projects={[]} />);
    await user.type(
      screen.getByTestId("intake-intent"),
      "Analyse cette idée, mais ne crée rien.",
    );
    await user.click(screen.getByTestId("intake-submit"));
    await waitFor(() => expect(screen.getByTestId("intake-proposal")).toBeTruthy());
    expect(screen.getByTestId("proposal-outcome").textContent).toMatch(
      /Analyse seule/,
    );
  });
});

describe("D1-C1 IA cleanup still holds", () => {
  afterEach(() => cleanup());

  it("Workspace hosts Reprendre", () => {
    render(<WorkspaceHomeView projects={[sample]} />);
    expect(
      screen.getByRole("heading", { name: "Reprendre un travail", level: 2 }),
    ).toBeTruthy();
  });

  it("Créer manuellement has no MethodMode select", () => {
    render(<NewProjectForm />);
    expect(
      screen.getByRole("heading", { name: "Créer manuellement", level: 1 }),
    ).toBeTruthy();
    expect(screen.queryByTestId("project-method-mode")).toBeNull();
  });
});
```

## 9. État Git final

```
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
branch=delivery/sfia-studio-control-tower-fast-track
staged=0
deps_unchanged=true
```

## 10. Verdict

**VERDICT :** SFIA v3.0 D1-C2 INTENT UNDERSTANDING AND STRUCTURED PROPOSAL IMPLEMENTED — VALIDATION REQUIRED
