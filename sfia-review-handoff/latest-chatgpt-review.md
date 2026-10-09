# ChatGPT Review Pack — P6-HQA-NEWPROJECT-01 NORA REAL CONVERSATIONAL PROJECT ONBOARDING (COMPLETE)

- timestamp: 2026-10-09T08:25:47Z
- finding: P6-HQA-NEWPROJECT-01
- cycle: 8 — Delivery / implémentation
- profile: CRITICAL
- typology: EVOL
- Morris GO: GO BORNÉ — QUALIFICATION ET CORRECTION NEW PROJECT COGNITIVE ONBOARDING
- GO P6 REAL provider calls by Cursor: NOT ACTIVATED / ZERO REAL CALLS
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- HEAD: 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- prior handoff: 5bba7449ab0415ca4e1f5df4c37e0bc9eb539caf
- project commit/push/PR: NONE
- HQ-01 mutation: NONE (cycles=5, projects=21 RO rechecked)
- P6 PASS / Human QA PASS / runtime v3 ADOPTED / finding CLOSED: NOT CLAIMED

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

Pre-existing local COG01/F01/UI-01…05 candidates preserved. This cycle added New Project cognitive onboarding files + Fake provider branch + S06 test updates.

## Convergence / feasibility

**STOP structural? NO — ADAPT sufficient.**

| Asset | Classification |
|-------|----------------|
| NewProjectIntentionPage | ADAPT |
| newProjectConversation | REPLACE targeted (scripted path demoted) |
| ConversationProvider / resolveF2ProductRoutedProvider | REUSE |
| createProjectRuntimeAction | KEEP |
| Project Product fields name/objective/context | REUSE for continuity |
| F2 / lifecycle / HD / START | KEEP untouched |
| FakeConversationProvider | ADAPT (onboarding schema branch — Fake only) |

No durable fake projectId. No new SessionStore. No schema migration. No authority change. No parallel cognitive engine.

## Diagnostic BEFORE

`newProjectConversation.ts` used explicit CollectPhase scripts (`nextNoraPrompt`, `noraTurnAfter`, regex name propose for one case). Client `onSend` never called ConversationProvider. Create required name+intention via local absorb. Continuity after create: router push only — no onboarding handoff in Product context.

## Design AFTER

1. Opening welcome = presentation chrome (`meta=opening`) — not claimed as cognitive analysis.
2. Each Pilot message → server action `newProjectOnboardingTurnAction` → `runNewProjectOnboardingTurn` → `resolveF2ProductRoutedProvider` + `completeStructured(schema=new_project_onboarding_turn_v1)`.
3. Nora payload proposes intention/name/orientation/sufficient; Studio `studioCanCreate` validates independently; Create CTA remains Pilot-only.
4. Create writes `context` via `buildProductContextHandoff` with `[[nora-onboarding-handoff]]` + abbreviated transcript + proposals labeled as such. No CycleInstance/HD.
5. Navigate `?from=new-project-onboarding`. F2 later reads Product objective/context — honest continuity without fabricating messages.

## Figma

- fileKey `m4g8j0gNbEzfIuH6S9AZJF` node `67:39` desktop 1440×1024 captured to `.tmp-sfia-review/assets/figma-67-39-new-project.png`.
- Composition KEEP: chat-first left, preview right, single CTA « Créer le projet », no big form.
- Intentional deltas vs Figma copy: preview fields now distinguish provisional name / orientation / create-possible without « 4/4 champs »; starters remain composer chips only.
- Runtime visual parity Human QA: NOT RUN (auth + REAL gate separate).
- FIGMA PARITY PASS: NOT CLAIMED.

## Tests

Executed (Fake, isolated, CURSOR_REAL unset in process):

| Suite | Result |
|-------|--------|
| p6.hqa.newproject01.onboarding.d0.test.ts | PASS |
| p5.s06.pilotExperience.d0.test.tsx | PASS |
| p5.s06.cp02.cancellation.ui.test.tsx | PASS |
| p6.hqa.f01… | PASS |
| p6.hqa.cog01… | PASS |
| p6.hqa.ui03/ui04/ui05 | PASS |
| **Total this run** | **85 PASS / 85** |

tsc: no errors in New Project files; pre-existing errors only in untracked `p6-campaign/*.real.test.ts` (out of scope).

HQ-01 after tests: cycles=5, projects=21.

NATURAL CONVERSATION PASS: NOT CLAIMED (deterministic Fake only). Human QA REAL required under separate GO + spend envelope.

## Fake / Real

- Fake: provider substitution + Product create path mocked in UI tests; onboarding turn unit-tested with FakeConversationProvider.
- REAL Nora: NOT called this Cursor cycle.
- Remaining gates: Morris Human QA with auth; GO REAL for Nora spend (≤10 EUR envelope noted, not a GO by itself).

## Risks / reserves

1. Opening message remains static chrome — first reply is provider-backed.
2. Continuity is Product context handoff, not full Agents session transcript replay.
3. Fake onboarding heuristics ≠ naturalness proof.
4. Live model×effort via F2 routing — cost applies only when REAL GO allows.
5. Canonical Pilot authority env still legacy (unchanged this cycle).

## Gates Morris remaining

1. ChatGPT Critical re-review of this handoff.
2. Human login + Cursor REAL safety from prior activation readiness.
3. GO P6 REAL — BOUNDED before live Nora onboarding Human QA.
4. Human QA New Project + resume COG01/F01/UI05 campaign.

## Verdict

**READY FOR CHATGPT CRITICAL RE-REVIEW**

---

## Files created (FULL)


### `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingContract.ts`

```typescript
/**
 * P6-HQA-NEWPROJECT-01 — pre-Project cognitive onboarding contract.
 *
 * Nora (provider) proposes; Studio validates and materializes.
 * No Product write, no CycleInstance, no HumanDecision here.
 */

export const NEW_PROJECT_ONBOARDING_SCHEMA_NAME =
  "new_project_onboarding_turn_v1" as const;

export const ONBOARDING_HANDOFF_MARKER = "[[nora-onboarding-handoff]]" as const;

const INTENTION_MAX = 4000;
const NAME_MAX = 200;
const CONTEXT_MAX = 4000;
const ORIENTATION_MAX = 800;
const REPLY_MAX = 4000;

export type PreProjectDraft = {
  name: string;
  /** True when Studio or Nora stamped a provisional label — Pilot may rename. */
  nameProvisional: boolean;
  intention: string;
  /** Reformulation / objective candidate — proposal, not Product truth until Create. */
  objective: string;
  context: string;
  /** Non-authoritative first work direction. */
  firstOrientation: string;
  unknowns: string[];
  /** Nora recommendation only — never alone authorizes Create. */
  cognitiveCreateProposal: boolean;
  /** Pilot explicitly refused creation in conversation. */
  explicitRefuseCreate: boolean;
  /** Cognitive turns completed (provider-backed). */
  cognitiveTurns: number;
};

export type ChatTurn = {
  id: string;
  role: "user" | "nora";
  text: string;
  meta?: "opening" | "cognitive" | "error" | "understood";
  clarification?: {
    title: string;
    question: string;
    suggestions: string[];
  };
};

export type OnboardingCognitivePayload = {
  replyText: string;
  intentionKnown: string | null;
  objectiveProposal: string | null;
  contextKnown: string | null;
  nameProposal: string | null;
  nameProvisional: boolean;
  firstOrientationProposal: string | null;
  unknowns: string[];
  sufficientForCreateProposal: boolean;
  refuseCreateDetected: boolean;
  clarificationQuestion: string | null;
  suggestions: string[];
};

/** JSON Schema for ConversationProvider.completeStructured (OpenAI json_schema). */
export const NEW_PROJECT_ONBOARDING_JSON_SCHEMA: Record<string, unknown> = {
  type: "object",
  additionalProperties: false,
  required: [
    "replyText",
    "intentionKnown",
    "objectiveProposal",
    "contextKnown",
    "nameProposal",
    "nameProvisional",
    "firstOrientationProposal",
    "unknowns",
    "sufficientForCreateProposal",
    "refuseCreateDetected",
    "clarificationQuestion",
    "suggestions",
  ],
  properties: {
    replyText: { type: "string" },
    intentionKnown: { type: ["string", "null"] },
    objectiveProposal: { type: ["string", "null"] },
    contextKnown: { type: ["string", "null"] },
    nameProposal: { type: ["string", "null"] },
    nameProvisional: { type: "boolean" },
    firstOrientationProposal: { type: ["string", "null"] },
    unknowns: { type: "array", items: { type: "string" } },
    sufficientForCreateProposal: { type: "boolean" },
    refuseCreateDetected: { type: "boolean" },
    clarificationQuestion: { type: ["string", "null"] },
    suggestions: { type: "array", items: { type: "string" } },
  },
};

export const INTENTION_STARTERS: string[] = [
  "Améliorer l’expérience utilisateur",
  "Lancer un nouveau produit",
  "Réorganiser un processus",
  "Autre chose",
];

export function emptyDraft(): PreProjectDraft {
  return {
    name: "",
    nameProvisional: false,
    intention: "",
    objective: "",
    context: "",
    firstOrientation: "",
    unknowns: [],
    cognitiveCreateProposal: false,
    explicitRefuseCreate: false,
    cognitiveTurns: 0,
  };
}

function sanitize(raw: string, max: number): string {
  return raw.replace(/\u0000/g, "").trim().slice(0, max);
}

function nullableString(value: unknown, max: number): string | null {
  if (value == null) return null;
  if (typeof value !== "string") return null;
  const t = sanitize(value, max);
  return t.length > 0 ? t : null;
}

/** Deterministic provisional name from intention — labeled provisional by Studio. */
export function provisionalNameFromIntention(intention: string): string {
  const t = intention.trim().replace(/\s+/g, " ");
  if (!t) return "Projet exploratoire";
  const clause = t.split(/[.!?\n]/)[0]?.trim() || t;
  const clipped = clause.length > 72 ? `${clause.slice(0, 69)}…` : clause;
  return clipped.charAt(0).toUpperCase() + clipped.slice(1);
}

/**
 * Studio gate — independent of Nora's sufficient flag alone.
 * Requires exploitable intention + a name (proposed or provisional).
 * RefuseCreate blocks. Cognitive proposal strengthens readiness but is not sole authority.
 */
export function studioCanCreate(draft: PreProjectDraft): boolean {
  if (draft.explicitRefuseCreate) return false;
  const intention = draft.intention.trim();
  if (!draft.name.trim()) return false;
  if (draft.cognitiveTurns < 1) return false;
  // Nora recommendation enables exploratory create with a short but real intention.
  if (draft.cognitiveCreateProposal && intention.length >= 3) return true;
  // Without Nora's create proposal, Studio still requires a usable intention phrase.
  if (intention.length >= 12) return true;
  return false;
}

export function isMinimumSufficient(draft: PreProjectDraft): boolean {
  return studioCanCreate(draft);
}

export function parseOnboardingCognitivePayload(
  raw: unknown,
): OnboardingCognitivePayload | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  const replyText = nullableString(o.replyText, REPLY_MAX);
  if (!replyText) return null;
  const unknowns = Array.isArray(o.unknowns)
    ? o.unknowns
        .filter((u): u is string => typeof u === "string")
        .map((u) => sanitize(u, 240))
        .filter(Boolean)
        .slice(0, 8)
    : [];
  const suggestions = Array.isArray(o.suggestions)
    ? o.suggestions
        .filter((u): u is string => typeof u === "string")
        .map((u) => sanitize(u, 120))
        .filter(Boolean)
        .slice(0, 6)
    : [];
  return {
    replyText,
    intentionKnown: nullableString(o.intentionKnown, INTENTION_MAX),
    objectiveProposal: nullableString(o.objectiveProposal, INTENTION_MAX),
    contextKnown: nullableString(o.contextKnown, CONTEXT_MAX),
    nameProposal: nullableString(o.nameProposal, NAME_MAX),
    nameProvisional: o.nameProvisional === true,
    firstOrientationProposal: nullableString(
      o.firstOrientationProposal,
      ORIENTATION_MAX,
    ),
    unknowns,
    sufficientForCreateProposal: o.sufficientForCreateProposal === true,
    refuseCreateDetected: o.refuseCreateDetected === true,
    clarificationQuestion: nullableString(o.clarificationQuestion, 400),
    suggestions,
  };
}

export function extractJsonObject(text: string): unknown | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start < 0 || end <= start) return null;
    try {
      return JSON.parse(trimmed.slice(start, end + 1)) as unknown;
    } catch {
      return null;
    }
  }
}

/**
 * Merge Nora cognitive payload into ephemeral draft.
 * Studio may stamp a provisional name when intention exists and name is still empty.
 */
export function mergeCognitiveIntoDraft(
  prev: PreProjectDraft,
  payload: OnboardingCognitivePayload,
  userText: string,
): PreProjectDraft {
  const next: PreProjectDraft = {
    ...prev,
    cognitiveTurns: prev.cognitiveTurns + 1,
    explicitRefuseCreate:
      payload.refuseCreateDetected || prev.explicitRefuseCreate,
    cognitiveCreateProposal:
      payload.sufficientForCreateProposal && !payload.refuseCreateDetected,
    unknowns: payload.unknowns.length > 0 ? payload.unknowns : prev.unknowns,
  };

  if (payload.intentionKnown) {
    next.intention = payload.intentionKnown;
  } else if (
    !next.intention.trim() &&
    userText.trim().length >= 12 &&
    payload.sufficientForCreateProposal
  ) {
    // Only adopt raw user text as intention when Nora also proposes create-readiness.
    next.intention = sanitize(userText, INTENTION_MAX);
  }

  if (payload.objectiveProposal) {
    next.objective = payload.objectiveProposal;
  } else if (!next.objective.trim() && next.intention.trim()) {
    next.objective = next.intention;
  }

  if (payload.contextKnown) {
    next.context = payload.contextKnown;
  }

  if (payload.nameProposal) {
    next.name = payload.nameProposal;
    next.nameProvisional = payload.nameProvisional === true;
  }

  if (payload.firstOrientationProposal) {
    next.firstOrientation = payload.firstOrientationProposal;
  }

  // Studio provisional name — does not invent semantic themes beyond the intention text.
  if (!next.name.trim() && next.intention.trim()) {
    next.name = provisionalNameFromIntention(next.intention);
    next.nameProvisional = true;
  }

  if (payload.refuseCreateDetected) {
    next.cognitiveCreateProposal = false;
  }

  return next;
}

export function openingNoraTurn(): ChatTurn {
  return {
    id: "nora-open",
    role: "nora",
    text: "Bonjour — dis-moi ce que tu veux accomplir avec ce projet. Tu peux rester large : on précisera ensemble seulement ce qui est utile pour démarrer.",
    meta: "opening",
  };
}

export function objectiveFromDraft(draft: PreProjectDraft): string {
  const objective = draft.objective.trim() || draft.intention.trim();
  if (!objective) return "";
  return objective.length > 160 ? `${objective.slice(0, 157)}…` : objective;
}

export function startingPointFromDraft(draft: PreProjectDraft): string {
  if (draft.context.trim()) return draft.context.trim().slice(0, 160);
  if (draft.intention.trim()) return "À partir de la conversation d’accueil";
  return "";
}

export function understoodPointsFromDraft(draft: PreProjectDraft): string[] {
  const points: string[] = [];
  if (draft.intention.trim()) {
    const i = draft.intention.trim();
    points.push(i.length > 72 ? `${i.slice(0, 69)}…` : i);
  }
  for (const u of draft.unknowns.slice(0, 3)) {
    points.push(`À préciser : ${u}`);
  }
  return points.slice(0, 5);
}

/** Product context payload after Create — proposal markers kept honest. */
export function buildProductContextHandoff(
  draft: PreProjectDraft,
  transcript: ReadonlyArray<{ role: "user" | "nora"; text: string }>,
): string {
  const lines: string[] = [
    ONBOARDING_HANDOFF_MARKER,
    "Synthèse d’accueil Nora (non autoritative — propositions et faits de conversation).",
    `Intention: ${draft.intention.trim() || "(non établie)"}`,
    `Objectif (proposition): ${draft.objective.trim() || draft.intention.trim() || "(non établi)"}`,
    `Nom: ${draft.name.trim() || "(non établi)"}${draft.nameProvisional ? " (provisoire)" : ""}`,
    `Contexte: ${draft.context.trim() || "(à préciser)"}`,
    `Première orientation (proposition): ${draft.firstOrientation.trim() || "(aucune)"}`,
    `Incertitudes: ${draft.unknowns.length ? draft.unknowns.join(" · ") : "(aucune listée)"}`,
    "Transcript d’accueil (abrégé):",
  ];
  for (const turn of transcript.slice(-12)) {
    const label = turn.role === "user" ? "Pilote" : "Nora";
    const text = turn.text.trim().slice(0, 400);
    if (text) lines.push(`- ${label}: ${text}`);
  }
  lines.push(
    "Fin handoff. Aucun CycleInstance ni HumanDecision n’a été créé à l’accueil.",
  );
  return lines.join("\n").slice(0, CONTEXT_MAX);
}

export function onboardingSystemPrompt(): string {
  return [
    "Tu es Nora, assistante de SFIA Studio. Tu accueilles un Pilote avant la création d’un projet.",
    "Tu n’as aucune autorité de création. Tu comprends, reformules, proposes, et peux recommander que la création soit possible.",
    "Réponds en français courant, calme, naturel, proportionné. Pas de jargon inutile. Pas de questionnaire systématique.",
    "Ne prétends pas être humaine. N’invente pas de faits, d’autorité, ni de contexte non dit.",
    "Les champs intention/objectif/contexte/nom sont des repères — pas quatre questions obligatoires.",
    "Si l’intention est exploitable même exploratoire, propose un nom (éventuellement provisoire) et indique sufficientForCreateProposal=true.",
    "Si le Pilote refuse de créer, refuseCreateDetected=true et sufficientForCreateProposal=false.",
    "Si le Pilote veut commencer vite avec peu d’infos, privilégie une création exploratoire honnête plutôt qu’un cadrage complet.",
    "firstOrientationProposal = direction de travail provisoire non autoritative (pas un démarrage de cycle).",
    "replyText = ton message conversationnel au Pilote (sans JSON visible).",
  ].join("\n");
}

export function composerPlaceholder(draft: PreProjectDraft): string {
  if (!draft.intention.trim()) return "Décrire ce que tu veux accomplir…";
  if (studioCanCreate(draft)) return "Préciser, corriger, ou poser une question…";
  return "Répondre à Nora…";
}
```


### `projects/sfia-studio/app/features/pre-m6-product-ui/runNewProjectOnboardingTurn.ts`

```typescript
/**
 * P6-HQA-NEWPROJECT-01 — pre-Project Nora turn (server-safe).
 * Reuses ConversationProvider + F2 Product cognitive routing.
 * No projectId. No Product write. No Cycle/HD.
 */

import { resolveF2ProductRoutedProvider } from "@/features/project-assistant/f2/resolveF2ProductRoutedProvider";
import type { ConversationProvider } from "@/lib/platform/ai";
import {
  emptyDraft,
  extractJsonObject,
  mergeCognitiveIntoDraft,
  NEW_PROJECT_ONBOARDING_JSON_SCHEMA,
  NEW_PROJECT_ONBOARDING_SCHEMA_NAME,
  onboardingSystemPrompt,
  parseOnboardingCognitivePayload,
  type ChatTurn,
  type OnboardingCognitivePayload,
  type PreProjectDraft,
} from "./newProjectOnboardingContract";

export type NewProjectOnboardingTurnInput = {
  readonly userText: string;
  readonly draft: PreProjectDraft;
  readonly history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
  readonly signal?: AbortSignal;
  /** Test inject — bypasses Product routing provider construction. */
  readonly provider?: ConversationProvider;
};

export type NewProjectOnboardingTurnResult =
  | {
      readonly ok: true;
      readonly draft: PreProjectDraft;
      readonly replyText: string;
      readonly clarification: ChatTurn["clarification"];
      readonly payload: OnboardingCognitivePayload;
      readonly boundarySubstitution: boolean;
    }
  | {
      readonly ok: false;
      readonly code:
        | "INPUT_EMPTY"
        | "PROVIDER_ERROR"
        | "PROVIDER_TIMEOUT"
        | "PAYLOAD_INVALID"
        | "ABORTED";
      readonly message: string;
      readonly draft: PreProjectDraft;
    };

function buildMessages(input: {
  history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
  draft: PreProjectDraft;
  userText: string;
}): { role: "system" | "user" | "assistant"; content: string }[] {
  const draftSnapshot = [
    "État brouillon actuel (éphémère, non Product) :",
    `- intention: ${input.draft.intention || "(vide)"}`,
    `- nom: ${input.draft.name || "(vide)"}${input.draft.nameProvisional ? " (provisoire)" : ""}`,
    `- objectif: ${input.draft.objective || "(vide)"}`,
    `- contexte: ${input.draft.context || "(vide)"}`,
    `- orientation: ${input.draft.firstOrientation || "(vide)"}`,
    `- incertitudes: ${input.draft.unknowns.join(" · ") || "(aucune)"}`,
  ].join("\n");

  const messages: { role: "system" | "user" | "assistant"; content: string }[] =
    [
      { role: "system", content: onboardingSystemPrompt() },
      { role: "system", content: draftSnapshot },
    ];

  for (const turn of input.history) {
    if (turn.role === "user") {
      messages.push({ role: "user", content: turn.text });
    } else {
      messages.push({ role: "assistant", content: turn.text });
    }
  }
  messages.push({ role: "user", content: input.userText });
  return messages;
}

export async function runNewProjectOnboardingTurn(
  input: NewProjectOnboardingTurnInput,
): Promise<NewProjectOnboardingTurnResult> {
  const userText = input.userText.replace(/\u0000/g, "").trim();
  if (!userText) {
    return {
      ok: false,
      code: "INPUT_EMPTY",
      message: "Message vide.",
      draft: input.draft ?? emptyDraft(),
    };
  }

  if (input.signal?.aborted) {
    return {
      ok: false,
      code: "ABORTED",
      message: "Tour interrompu.",
      draft: input.draft,
    };
  }

  let provider = input.provider;
  let boundarySubstitution = Boolean(input.provider);
  if (!provider) {
    try {
      const routed = resolveF2ProductRoutedProvider({
        turnContext: {
          projectCriticality: null,
          userContentLength: userText.length,
          historyMessageCount: input.history.length,
          historyTotalChars: input.history.reduce(
            (n, t) => n + t.text.length,
            0,
          ),
          enableTools: false,
        },
        cognitiveTaskId: `new-project-onboarding:${input.draft.cognitiveTurns + 1}`,
        correlationId: `cor:new-project-onboarding:${Date.now()}`,
      });
      provider = routed.provider;
      boundarySubstitution = routed.boundarySubstitution;
    } catch (error) {
      return {
        ok: false,
        code: "PROVIDER_ERROR",
        message:
          error instanceof Error
            ? error.message
            : "Provider conversationnel indisponible.",
        draft: input.draft,
      };
    }
  }

  if (typeof provider.completeStructured !== "function") {
    return {
      ok: false,
      code: "PROVIDER_ERROR",
      message: "Structured Outputs requis pour l’accueil New Project.",
      draft: input.draft,
    };
  }

  let completionText: string;
  try {
    const completion = await provider.completeStructured({
      messages: buildMessages({
        history: input.history,
        draft: input.draft,
        userText,
      }),
      schemaName: NEW_PROJECT_ONBOARDING_SCHEMA_NAME,
      jsonSchema: NEW_PROJECT_ONBOARDING_JSON_SCHEMA,
      signal: input.signal,
    });
    completionText = completion.text;
  } catch (error) {
    if (
      input.signal?.aborted ||
      (error instanceof Error && error.name === "AbortError")
    ) {
      return {
        ok: false,
        code: "ABORTED",
        message: "Tour interrompu.",
        draft: input.draft,
      };
    }
    const msg = error instanceof Error ? error.message : "Erreur provider.";
    if (/timeout|ETIMEDOUT|aborted/i.test(msg)) {
      return {
        ok: false,
        code: "PROVIDER_TIMEOUT",
        message: "Le fournisseur n’a pas répondu à temps. Tu peux réessayer.",
        draft: input.draft,
      };
    }
    return {
      ok: false,
      code: "PROVIDER_ERROR",
      message:
        "Nora n’a pas pu répondre pour le moment. La conversation locale est conservée ; tu peux réessayer.",
      draft: input.draft,
    };
  }

  if (input.signal?.aborted) {
    return {
      ok: false,
      code: "ABORTED",
      message: "Tour interrompu.",
      draft: input.draft,
    };
  }

  const parsed = parseOnboardingCognitivePayload(
    extractJsonObject(completionText),
  );
  if (!parsed) {
    return {
      ok: false,
      code: "PAYLOAD_INVALID",
      message:
        "La réponse de Nora n’était pas exploitable. Aucune donnée n’a été inventée ; tu peux reformuler.",
      draft: input.draft,
    };
  }

  const nextDraft = mergeCognitiveIntoDraft(input.draft, parsed, userText);
  const clarification =
    parsed.clarificationQuestion && parsed.clarificationQuestion.trim()
      ? {
          title: "UNE PRÉCISION UTILE",
          question: parsed.clarificationQuestion.trim(),
          suggestions: parsed.suggestions,
        }
      : undefined;

  return {
    ok: true,
    draft: nextDraft,
    replyText: parsed.replyText,
    clarification,
    payload: parsed,
    boundarySubstitution,
  };
}
```


### `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectOnboardingAction.ts`

```typescript
"use server";

/**
 * P6-HQA-NEWPROJECT-01 — thin server action for pre-Project Nora turn.
 * Reuses canonical ConversationProvider routing. No Product mutation.
 */

import {
  emptyDraft,
  type ChatTurn,
  type PreProjectDraft,
} from "./newProjectOnboardingContract";
import {
  runNewProjectOnboardingTurn,
  type NewProjectOnboardingTurnResult,
} from "./runNewProjectOnboardingTurn";

export type NewProjectOnboardingActionInput = {
  readonly userText: string;
  readonly draft: PreProjectDraft;
  readonly history: ReadonlyArray<Pick<ChatTurn, "role" | "text">>;
};

export async function newProjectOnboardingTurnAction(
  input: NewProjectOnboardingActionInput,
): Promise<NewProjectOnboardingTurnResult> {
  const draft = input?.draft ?? emptyDraft();
  const history = Array.isArray(input?.history) ? input.history : [];
  const userText =
    typeof input?.userText === "string" ? input.userText : "";
  return runNewProjectOnboardingTurn({
    userText,
    draft,
    history,
  });
}
```


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p6.hqa.newproject01.onboarding.d0.test.ts`

```typescript
/** @vitest-environment node */
/**
 * P6-HQA-NEWPROJECT-01 — deterministic cognitive onboarding (Fake provider).
 */
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import {
  buildProductContextHandoff,
  emptyDraft,
  mergeCognitiveIntoDraft,
  ONBOARDING_HANDOFF_MARKER,
  parseOnboardingCognitivePayload,
  provisionalNameFromIntention,
  studioCanCreate,
  type OnboardingCognitivePayload,
} from "@/features/pre-m6-product-ui/newProjectOnboardingContract";
import { runNewProjectOnboardingTurn } from "@/features/pre-m6-product-ui/runNewProjectOnboardingTurn";

function payload(
  partial: Partial<OnboardingCognitivePayload> & { replyText: string },
): OnboardingCognitivePayload {
  return {
    intentionKnown: null,
    objectiveProposal: null,
    contextKnown: null,
    nameProposal: null,
    nameProvisional: true,
    firstOrientationProposal: null,
    unknowns: [],
    sufficientForCreateProposal: false,
    refuseCreateDetected: false,
    clarificationQuestion: null,
    suggestions: [],
    ...partial,
  };
}

describe("P6-HQA-NEWPROJECT-01 contract merge / studio gate", () => {
  it("1 — clear intention can become creatable with provisional name", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Moderniser le reporting Q3",
        objectiveProposal: "Moderniser le reporting Q3",
        nameProposal: "Reporting Q3",
        nameProvisional: true,
        sufficientForCreateProposal: true,
      }),
      "Moderniser le reporting Q3",
    );
    expect(studioCanCreate(merged)).toBe(true);
    expect(merged.name).toBe("Reporting Q3");
  });

  it("2 — Nora name proposal is not mandatory from Pilot", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "Je propose un nom",
        intentionKnown: "Lancer un atelier design",
        nameProposal: "Atelier design",
        sufficientForCreateProposal: true,
      }),
      "Lancer un atelier design",
    );
    expect(merged.name).toBe("Atelier design");
    expect(studioCanCreate(merged)).toBe(true);
  });

  it("3 — Studio stamps provisional name when Nora omits one", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Explorer une idée de produit",
        nameProposal: null,
        sufficientForCreateProposal: true,
      }),
      "Explorer une idée de produit",
    );
    expect(merged.nameProvisional).toBe(true);
    expect(merged.name.length).toBeGreaterThan(0);
    expect(merged.name).toBe(
      provisionalNameFromIntention("Explorer une idée de produit"),
    );
  });

  it("4 — unknown context remains empty honestly", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Idée exploratoire",
        contextKnown: null,
        unknowns: ["contexte de départ"],
        sufficientForCreateProposal: true,
        nameProposal: "Idée exploratoire",
      }),
      "Idée exploratoire",
    );
    expect(merged.context).toBe("");
    expect(merged.unknowns).toContain("contexte de départ");
  });

  it("5 — exploratory objective allowed", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "exploratoire",
        intentionKnown: "Je ne sais pas encore exactement",
        objectiveProposal: "Explorer le sujet sans cadrage complet",
        nameProposal: "Exploration",
        sufficientForCreateProposal: true,
      }),
      "Je ne sais pas encore exactement",
    );
    expect(studioCanCreate(merged)).toBe(true);
  });

  it("11 — explicit refuse blocks create", () => {
    const merged = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "pas maintenant",
        refuseCreateDetected: true,
        sufficientForCreateProposal: false,
        intentionKnown: "Un projet",
        nameProposal: "Un projet",
      }),
      "ne crée pas",
    );
    expect(merged.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(merged)).toBe(false);
  });

  it("12 — no create before cognitive turn", () => {
    expect(studioCanCreate(emptyDraft())).toBe(false);
  });

  it("18 — handoff context preserves transcript without invention", () => {
    const draft = mergeCognitiveIntoDraft(
      emptyDraft(),
      payload({
        replyText: "ok",
        intentionKnown: "Refondre l’accueil",
        nameProposal: "Accueil",
        sufficientForCreateProposal: true,
        firstOrientationProposal: "Clarifier le premier livrable",
      }),
      "Refondre l’accueil",
    );
    const ctx = buildProductContextHandoff(draft, [
      { role: "user", text: "Refondre l’accueil" },
      { role: "nora", text: "ok" },
    ]);
    expect(ctx).toContain(ONBOARDING_HANDOFF_MARKER);
    expect(ctx).toContain("Refondre l’accueil");
    expect(ctx).toContain("Clarifier le premier livrable");
    expect(ctx).toMatch(/Aucun CycleInstance/);
  });

  it("rejects invalid payload", () => {
    expect(parseOnboardingCognitivePayload({})).toBeNull();
    expect(parseOnboardingCognitivePayload({ replyText: "" })).toBeNull();
  });
});

describe("P6-HQA-NEWPROJECT-01 provider-backed turns (Fake)", () => {
  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    setConversationProviderForTests(null);
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    delete process.env.OPS1_CONVERSATION_PROVIDER;
  });

  it("1/2/7 — clear intention → create proposal + name via Fake", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText:
        "Je veux moderniser le reporting commercial pour le rendre plus lisible.",
      draft: emptyDraft(),
      history: [
        {
          role: "nora",
          text: "Bonjour — dis-moi ce que tu veux accomplir.",
        },
      ],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.draft.intention.length).toBeGreaterThan(10);
    expect(result.draft.name.length).toBeGreaterThan(0);
    expect(studioCanCreate(result.draft)).toBe(true);
    expect(result.replyText.length).toBeGreaterThan(10);
  });

  it("6 — hesitant short message does not force create", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText: "euh",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(studioCanCreate(result.draft)).toBe(false);
  });

  it("7 — want to start fast → exploratory create proposal", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText: "On commence tout de suite, on verra le détail après",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.payload.sufficientForCreateProposal).toBe(true);
    expect(studioCanCreate(result.draft)).toBe(true);
  });

  it("8 — intention change updates draft", async () => {
    const first = await runNewProjectOnboardingTurn({
      userText: "Je veux un projet reporting",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const second = await runNewProjectOnboardingTurn({
      userText: "Finalement je préfère un projet formation équipe",
      draft: first.draft,
      history: [
        { role: "user", text: "Je veux un projet reporting" },
        { role: "nora", text: first.replyText },
      ],
      provider: new FakeConversationProvider(),
    });
    expect(second.ok).toBe(true);
    if (!second.ok) return;
    expect(second.draft.intention.toLowerCase()).toMatch(/formation/);
  });

  it("9 — off-topic does not invent a project", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText: "Quelle est la météo demain ?",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.payload.sufficientForCreateProposal).toBe(false);
  });

  it("11 — refuse create", async () => {
    const result = await runNewProjectOnboardingTurn({
      userText: "Ne crée pas pour l’instant",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.draft.explicitRefuseCreate).toBe(true);
    expect(studioCanCreate(result.draft)).toBe(false);
  });

  it("14 — provider error is honest and non-mutating", async () => {
    const provider = new FakeConversationProvider({ failOnCall: 1 });
    const before = emptyDraft();
    const result = await runNewProjectOnboardingTurn({
      userText: "Je veux un projet",
      draft: before,
      history: [],
      provider,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("PROVIDER_ERROR");
    expect(result.draft).toEqual(before);
  });

  it("15 — abort / interruption", async () => {
    const ac = new AbortController();
    ac.abort();
    const result = await runNewProjectOnboardingTurn({
      userText: "Je veux un projet",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
      signal: ac.signal,
    });
    expect(result.ok).toBe(false);
    if (result.ok) return;
    expect(result.code).toBe("ABORTED");
  });

  it("16 — conversation resume merges prior draft", async () => {
    const first = await runNewProjectOnboardingTurn({
      userText: "Projet pour clarifier le pilotage produit",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(first.ok).toBe(true);
    if (!first.ok) return;
    const resumed = await runNewProjectOnboardingTurn({
      userText: "Ajoute que le contexte est une équipe de 5 personnes",
      draft: first.draft,
      history: [
        { role: "user", text: "Projet pour clarifier le pilotage produit" },
        { role: "nora", text: first.replyText },
      ],
      provider: new FakeConversationProvider(),
    });
    expect(resumed.ok).toBe(true);
    if (!resumed.ok) return;
    expect(resumed.draft.cognitiveTurns).toBe(2);
    expect(resumed.draft.intention.length).toBeGreaterThan(0);
  });

  it("23 — two concurrent drafts stay isolated", async () => {
    const a = await runNewProjectOnboardingTurn({
      userText: "Projet Alpha reporting",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    const b = await runNewProjectOnboardingTurn({
      userText: "Projet Beta formation",
      draft: emptyDraft(),
      history: [],
      provider: new FakeConversationProvider(),
    });
    expect(a.ok && b.ok).toBe(true);
    if (!a.ok || !b.ok) return;
    expect(a.draft.intention).not.toEqual(b.draft.intention);
    expect(a.draft.name).not.toEqual(b.draft.name);
  });
});
```


## Files modified (FULL for primary New Project surfaces)


### `projects/sfia-studio/app/features/pre-m6-product-ui/newProjectConversation.ts`

```typescript
/**
 * P6-HQA-NEWPROJECT-01 — New Project conversation surface helpers.
 *
 * Cognitive turns are provider-backed via runNewProjectOnboardingTurn.
 * This module keeps UI helpers + a thin compatibility surface for prior tests.
 * Scripted phase machine is no longer the REAL conversation path.
 */

export {
  INTENTION_STARTERS,
  emptyDraft,
  isMinimumSufficient,
  studioCanCreate,
  openingNoraTurn,
  objectiveFromDraft,
  startingPointFromDraft,
  understoodPointsFromDraft,
  composerPlaceholder,
  provisionalNameFromIntention,
  buildProductContextHandoff,
  mergeCognitiveIntoDraft,
  type PreProjectDraft,
  type ChatTurn,
} from "./newProjectOnboardingContract";

import type { PreProjectDraft } from "./newProjectOnboardingContract";
import {
  emptyDraft,
  provisionalNameFromIntention,
} from "./newProjectOnboardingContract";

/** @deprecated Phase labels retained for data-testid compatibility only. */
export type CollectPhase =
  | "INTENTION_REQUIRED"
  | "NAME_REQUIRED"
  | "OPTIONAL_CONTEXT";

export type CollectField = "name" | "intention";

export function collectPhaseOf(draft: PreProjectDraft): CollectPhase {
  if (!draft.intention.trim()) return "INTENTION_REQUIRED";
  if (!draft.name.trim()) return "NAME_REQUIRED";
  return "OPTIONAL_CONTEXT";
}

/**
 * Local absorb — used only for deterministic unit fixtures that do not call
 * the provider. Production UI uses newProjectOnboardingTurnAction instead.
 */
export function absorbUserTurn(
  draft: PreProjectDraft,
  raw: string,
  _phase?: CollectPhase,
): PreProjectDraft {
  void _phase;
  const text = raw.replace(/\u0000/g, "").trim().slice(0, 4000);
  if (!text) return draft;
  const next: PreProjectDraft = {
    ...draft,
    intention: draft.intention.trim()
      ? `${draft.intention}\n${text}`.slice(0, 4000)
      : text,
    cognitiveTurns: Math.max(draft.cognitiveTurns, 1),
  };
  if (!next.objective.trim()) next.objective = next.intention;
  if (!next.name.trim()) {
    next.name = provisionalNameFromIntention(next.intention);
    next.nameProvisional = true;
  }
  next.cognitiveCreateProposal = true;
  return next;
}

export function reopenField(
  draft: PreProjectDraft,
  field: CollectField,
): PreProjectDraft {
  if (field === "name") {
    return {
      ...draft,
      name: "",
      nameProvisional: false,
      cognitiveCreateProposal: false,
    };
  }
  return {
    ...draft,
    intention: "",
    objective: "",
    cognitiveCreateProposal: false,
  };
}

/** @deprecated Presentation helper — prefer composerPlaceholder(draft). */
export function nextNoraPrompt(phase: CollectPhase): string {
  switch (phase) {
    case "INTENTION_REQUIRED":
      return "Qu’est-ce que tu veux accomplir avec ce nouveau projet ?";
    case "NAME_REQUIRED":
      return "Quel nom voulez-vous donner à ce projet ?";
    case "OPTIONAL_CONTEXT":
      return "On peut créer le projet dès que tu es prêt — dis-moi si tu veux préciser autre chose.";
  }
}

export function proposeNameFromIntention(intention: string): string | null {
  const t = intention.trim();
  if (!t) return null;
  return provisionalNameFromIntention(t);
}

export function noraTurnAfter(): never {
  throw new Error(
    "noraTurnAfter removed — use newProjectOnboardingTurnAction / runNewProjectOnboardingTurn",
  );
}

export function resetDraftForTests(): PreProjectDraft {
  return emptyDraft();
}
```


### `projects/sfia-studio/app/features/pre-m6-product-ui/NewProjectIntentionPage.tsx`

```typescript
"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createProjectRuntimeAction } from "@/lib/vertical-slice-runtime/actions";
import { newProjectOnboardingTurnAction } from "./newProjectOnboardingAction";
import {
  buildProductContextHandoff,
  collectPhaseOf,
  composerPlaceholder,
  emptyDraft,
  INTENTION_STARTERS,
  isMinimumSufficient,
  objectiveFromDraft,
  openingNoraTurn,
  reopenField,
  startingPointFromDraft,
  understoodPointsFromDraft,
  type ChatTurn,
  type CollectField,
  type PreProjectDraft,
} from "./newProjectConversation";
import styles from "./NewProjectIntentionPage.module.css";

type CreateResult = Awaited<ReturnType<typeof createProjectRuntimeAction>>;
type CreateSuccess = Extract<CreateResult, { ok: true }>;

function createIdempotencyKey(): string {
  const uuid = globalThis.crypto?.randomUUID?.();
  return `pm6-intent:${uuid ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
}

function turnId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

/**
 * P6-HQA-NEWPROJECT-01 — cognitive New Project onboarding.
 * Nora turns via canonical ConversationProvider. Create only via createProjectRuntimeAction.
 */
export function NewProjectIntentionPage() {
  const router = useRouter();
  const fieldId = useId();
  const [draft, setDraft] = useState<PreProjectDraft>(() => emptyDraft());
  const [turns, setTurns] = useState<ChatTurn[]>(() => [openingNoraTurn()]);
  const [composer, setComposer] = useState("");
  const [idempotencyKey, setIdempotencyKey] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [created, setCreated] = useState<CreateSuccess | null>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const ready = isMinimumSufficient(draft);
  const phase = collectPhaseOf(draft);
  const understood = understoodPointsFromDraft(draft);
  const objective = objectiveFromDraft(draft);
  const startingPoint = startingPointFromDraft(draft);

  useEffect(() => {
    setIdempotencyKey(createIdempotencyKey());
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  useEffect(() => {
    const el = threadRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [turns, draft, thinking]);

  async function onSend(event?: FormEvent) {
    event?.preventDefault();
    const text = composer.trim();
    if (!text || pending || thinking) return;

    const userTurn: ChatTurn = { id: turnId("user"), role: "user", text };
    const historyForProvider = [...turns, userTurn].map((t) => ({
      role: t.role,
      text: t.text,
    }));
    setTurns((current) => [...current, userTurn]);
    setComposer("");
    setSubmitError(null);
    setThinking(true);

    try {
      const result = await newProjectOnboardingTurnAction({
        userText: text,
        draft,
        history: historyForProvider.slice(0, -1),
      });

      if (!result.ok) {
        setTurns((current) => [
          ...current,
          {
            id: turnId("nora"),
            role: "nora",
            text: result.message,
            meta: "error",
          },
        ]);
        return;
      }

      setDraft(result.draft);
      setTurns((current) => [
        ...current,
        {
          id: turnId("nora"),
          role: "nora",
          text: result.replyText,
          meta: result.draft.cognitiveCreateProposal ? "understood" : "cognitive",
          clarification: result.clarification,
        },
      ]);
    } catch {
      setTurns((current) => [
        ...current,
        {
          id: turnId("nora"),
          role: "nora",
          text: "Le service n’a pas répondu. La conversation est conservée ; tu peux réessayer.",
          meta: "error",
        },
      ]);
    } finally {
      setThinking(false);
    }
  }

  function onChip(text: string) {
    if (pending || thinking) return;
    setComposer(text);
  }

  function onReopen(field: CollectField) {
    const nextDraft = reopenField(draft, field);
    setDraft(nextDraft);
    setTurns((current) => [
      ...current,
      {
        id: turnId("nora"),
        role: "nora",
        text:
          field === "name"
            ? "Ok — on reprend le nom. Comment veux-tu l’appeler, ou je peux proposer à nouveau ?"
            : "Ok — reformule l’intention principale du projet.",
        meta: "cognitive",
      },
    ]);
  }

  async function onCreate() {
    if (pending || thinking || !ready) return;
    setSubmitError(null);
    const stableKey = idempotencyKey || createIdempotencyKey();
    if (!idempotencyKey) setIdempotencyKey(stableKey);
    setPending(true);
    try {
      const intention = draft.intention.trim();
      const objectiveText = (draft.objective.trim() || intention).slice(0, 4000);
      const contextText = buildProductContextHandoff(
        draft,
        turns.map((t) => ({ role: t.role, text: t.text })),
      );
      const result = await createProjectRuntimeAction({
        name: draft.name.trim(),
        objective: objectiveText,
        context: contextText || intention,
        criticality: "STANDARD",
        constraints: [],
        idempotencyKey: stableKey,
      });

      if (result.ok) {
        setCreated(result);
        router.push(
          `/studio/projects/${encodeURIComponent(result.projectId)}?from=new-project-onboarding`,
        );
        return;
      }

      if (result.error.code === "DOCTRINE_UNRESOLVED") {
        setSubmitError(
          "Le projet n’a pas pu être créé : le référentiel local n’a pas pu être validé. Rien n’a été enregistré.",
        );
        return;
      }
      if (result.error.code === "INPUT_INVALID") {
        setSubmitError(
          result.error.message ||
            "Les informations fournies ne permettent pas de créer le projet.",
        );
        return;
      }
      setSubmitError(
        result.error.retryable
          ? "La création n’a pas abouti. Vous pouvez réessayer : la conversation est conservée."
          : "La création n’a pas abouti. Précisez encore l’intention ou le nom avant de réessayer.",
      );
    } catch {
      setSubmitError(
        "Le service local n’a pas répondu. La conversation est conservée ; vous pouvez réessayer.",
      );
    } finally {
      setPending(false);
    }
  }

  if (created) {
    return (
      <div className={styles.page} data-testid="new-project-created">
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>Projet créé</h1>
          <p className={styles.heroSubtitle}>
            Ouverture du workspace durable. Nora reprend à partir du projet
            enregistré — l’accueil est conservé dans le contexte Product.
          </p>
        </header>
        <Link
          href={`/studio/projects/${encodeURIComponent(created.projectId)}?from=new-project-onboarding`}
          className={styles.primaryButton}
          data-testid="open-project-workspace"
        >
          Ouvrir le projet
        </Link>
      </div>
    );
  }

  return (
    <div
      className={styles.page}
      data-testid="create-project-form"
      data-surface="new-project-chat"
      data-create-surface="conversational"
      data-collect-phase={phase}
      data-ready={ready ? "true" : "false"}
      data-cognitive="nora-provider"
    >
      <div className={styles.pageChrome} data-testid="new-project-chrome">
        <div className={styles.chromeTrail}>
          <Link href="/studio">Projets</Link>
          <span className={styles.chromeSep} aria-hidden>
            /
          </span>
          <span className={styles.chromeCurrent}>Nouveau projet</span>
        </div>
        <div className={styles.chromeRight}>
          <p className={styles.chromeStatus}>Projet pas encore créé</p>
          <span className={styles.draftChip}>Brouillon</span>
        </div>
      </div>

      <div className={styles.creationColumn}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleDesktop}>Créer un projet</span>
            <span className={styles.heroTitleMobile}>Nouveau projet</span>
          </h1>
          <p className={styles.heroSubtitle}>
            <span className={styles.heroSubtitleDesktop}>
              Dis à Nora ce que tu veux accomplir. Elle clarifie seulement ce
              qui est utile — la création reste ton choix.
            </span>
            <span className={styles.heroSubtitleMobile}>
              Décris ce que tu veux accomplir. Nora t&apos;aide à démarrer.
            </span>
          </p>
        </header>

        <div
          className={styles.thread}
          ref={threadRef}
          data-testid="new-project-thread"
          aria-live="polite"
        >
          {turns.map((turn) => (
            <div
              key={turn.id}
              className={
                turn.role === "user" ? styles.bubbleUser : styles.bubbleNora
              }
              data-role={turn.role}
            >
              <div className={styles.bubbleHeader}>
                <p className={styles.bubbleLabel}>
                  {turn.role === "user" ? "Vous" : "Nora"}
                </p>
                {turn.meta === "opening" ? (
                  <span className={styles.metaChipMuted}>Démarrage</span>
                ) : null}
                {turn.meta === "understood" ? (
                  <span className={styles.metaChipOk}>J’ai compris</span>
                ) : null}
                {turn.meta === "error" ? (
                  <span className={styles.metaChipMuted}>Indisponible</span>
                ) : null}
              </div>
              <p
                className={styles.bubbleText}
                data-meta={turn.meta ?? undefined}
              >
                {turn.text}
              </p>
              {turn.meta === "opening" && !draft.intention.trim() ? (
                <div
                  className={styles.chipRow}
                  data-testid="new-project-starters"
                >
                  {INTENTION_STARTERS.map((label) => (
                    <button
                      key={label}
                      type="button"
                      className={styles.suggestionChip}
                      onClick={() => onChip(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              ) : null}
              {turn.clarification ? (
                <div
                  className={styles.clarification}
                  data-testid="new-project-clarification"
                >
                  <p className={styles.clarificationTitle}>
                    {turn.clarification.title}
                  </p>
                  <p className={styles.clarificationQuestion}>
                    {turn.clarification.question}
                  </p>
                  <div className={styles.chipRow}>
                    {turn.clarification.suggestions.map((label) => (
                      <button
                        key={label}
                        type="button"
                        className={styles.suggestionChip}
                        onClick={() => onChip(label)}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
              {turn.clarification ? (
                <p className={styles.clarificationHint}>
                  Tu peux répondre librement ; ces suggestions ne sont là que
                  pour t’aider à formuler.
                </p>
              ) : null}
            </div>
          ))}
          {thinking ? (
            <div
              className={styles.bubbleNora}
              data-role="nora"
              data-testid="new-project-thinking"
            >
              <div className={styles.bubbleHeader}>
                <p className={styles.bubbleLabel}>Nora</p>
                <span className={styles.metaChipMuted}>Réflexion</span>
              </div>
              <p className={styles.bubbleText}>…</p>
            </div>
          ) : null}
        </div>

        <form
          className={styles.composer}
          onSubmit={(e) => void onSend(e)}
          data-testid="new-project-composer"
        >
          <label className={styles.srOnly} htmlFor={`${fieldId}-composer`}>
            Réponse à Nora
          </label>
          <div className={styles.composerBox}>
            <textarea
              id={`${fieldId}-composer`}
              className={styles.textarea}
              rows={3}
              value={composer}
              disabled={pending || thinking}
              placeholder={composerPlaceholder(draft)}
              data-testid="new-project-input"
              onChange={(event) => setComposer(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  void onSend();
                }
              }}
            />
            <div className={styles.composerBottom}>
              <div className={styles.composerHelpers}>
                <span>Conversation avec Nora</span>
              </div>
              <button
                type="submit"
                className={styles.sendIcon}
                disabled={
                  pending || thinking || composer.trim().length === 0
                }
                data-testid="new-project-send"
                aria-label="Envoyer"
              >
                ↑
              </button>
            </div>
          </div>
          <Link
            href="/studio"
            className={styles.srOnly}
            data-testid="create-project-cancel"
          >
            Annuler et revenir aux projets
          </Link>
          <p className={styles.help}>
            Nora comprend et propose. La création du projet reste un acte
            explicite de ta part.
          </p>
        </form>
      </div>

      <aside
        className={styles.preview}
        data-testid="new-project-preview"
        aria-labelledby={`${fieldId}-preview`}
      >
        <div className={styles.previewHeader}>
          <div className={styles.previewMeta}>
            <p className={styles.previewEyebrow}>
              <span className={styles.previewEyebrowDesktop}>
                Projet en préparation
              </span>
              <span className={styles.previewEyebrowMobile}>Projet</span>
            </p>
            <span className={styles.draftChip}>Non créé</span>
          </div>
          <h2 id={`${fieldId}-preview`} className={styles.previewTitle}>
            <span className={styles.previewTitleDesktop}>Aperçu du projet</span>
            <span className={styles.previewTitleMobile}>
              {draft.name.trim() || "Aperçu du projet"}
            </span>
          </h2>
        </div>
        <hr className={styles.previewDivider} />
        <dl className={styles.previewList}>
          <div className={styles.previewFieldName}>
            <dt>Nom proposé</dt>
            <dd data-testid="preview-name">
              {draft.name.trim() || "Pas encore précisé"}
            </dd>
            {draft.name.trim() ? (
              <p className={styles.previewHintInline}>
                {draft.nameProvisional
                  ? "Nom provisoire — tu pourras le renommer"
                  : "Tu pourras le renommer"}
              </p>
            ) : null}
          </div>
          <div className={styles.previewFieldObjective}>
            <dt>Intention / objectif</dt>
            <dd data-testid="preview-intention">
              {objective || "Pas encore précisée"}
            </dd>
          </div>
          <div>
            <dt>Contexte / point de départ</dt>
            <dd data-testid="preview-context">
              {startingPoint || "À préciser si besoin"}
            </dd>
          </div>
          <div>
            <dt>Première orientation</dt>
            <dd data-testid="preview-orientation">
              {draft.firstOrientation.trim() ||
                "Proposition après création — non autoritative"}
            </dd>
          </div>
          <div>
            <dt>Création</dt>
            <dd
              className={ready ? styles.previewWarn : undefined}
              data-testid="preview-startup"
            >
              {draft.explicitRefuseCreate
                ? "Création refusée pour l’instant"
                : ready
                  ? "Possible — en attente de ton accord"
                  : "En attente d’une intention exploitable"}
            </dd>
            {ready ? (
              <p className={styles.previewHintInline}>
                Le projet peut déjà être créé
              </p>
            ) : null}
          </div>
        </dl>
        {understood.length > 0 ? (
          <>
            <hr className={styles.previewDivider} />
            <div
              className={styles.understood}
              data-testid="new-project-understood"
            >
              <p className={styles.understoodTitle}>Repères de la conversation</p>
              <ul className={styles.understoodList}>
                {understood.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </>
        ) : null}
        <hr className={styles.previewDivider} />
        <div className={styles.createSection}>
          <p className={styles.createSectionLabel}>Création</p>
          {ready ? (
            <>
              <div className={styles.readyBox}>
                <p className={styles.readyBoxTitle}>Projet prêt à être créé</p>
                <p className={styles.readyBoxBody}>
                  L&apos;intention est exploitable. Studio a validé les entrées
                  pour une création — Nora n&apos;a pas d&apos;autorité propre.
                </p>
              </div>
              <div className={styles.pendingBox}>
                <p className={styles.pendingBoxTitle}>
                  Après création · orientation provisoire
                </p>
                <p className={styles.pendingBoxBody}>
                  {draft.firstOrientation.trim() ||
                    "Nora pourra proposer une première direction dans le projet. Aucun cycle ne démarre automatiquement."}
                </p>
              </div>
            </>
          ) : (
            <div className={styles.pendingBox}>
              <p className={styles.pendingBoxTitle}>Création pas encore possible</p>
              <p className={styles.pendingBoxBody}>
                {draft.explicitRefuseCreate
                  ? "Tu as indiqué ne pas vouloir créer pour l’instant."
                  : "Il faut une intention exploitable. Le nom peut être proposé ou provisoire."}
              </p>
            </div>
          )}
          <div className={styles.createWrap}>
            <button
              type="button"
              className={styles.primaryButton}
              disabled={pending || thinking || !ready}
              data-testid="create-project-submit"
              onClick={() => void onCreate()}
            >
              {pending ? "Création…" : "Créer le projet"}
            </button>
            <p className={styles.help}>
              Après création, la conversation continue dans le projet. Aucun
              cycle n&apos;est démarré automatiquement.
            </p>
            {ready ? (
              <div className={styles.correctRow}>
                <button
                  type="button"
                  className={styles.textButton}
                  data-testid="reopen-intention"
                  onClick={() => onReopen("intention")}
                >
                  Corriger l&apos;intention
                </button>
                <button
                  type="button"
                  className={styles.textButton}
                  data-testid="reopen-name"
                  onClick={() => onReopen("name")}
                >
                  Corriger le nom
                </button>
              </div>
            ) : null}
            <div aria-live="assertive" aria-atomic="true">
              {submitError ? (
                <p
                  className={styles.submitError}
                  role="alert"
                  data-testid="submit-error"
                >
                  {submitError}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
```


## Other modified (summary)

- `lib/platform/ai/fakeProvider.ts` — `completeStructured` branches on `new_project_onboarding_turn_v1` (Fake/E2E only).
- `p5.s06.pilotExperience.d0.test.tsx` — mocks onboarding action; asserts create handoff + single CTA.
- Pre-existing dirty locals (COG01/F01/UI) untouched in semantics this cycle.

## Actions NOT executed

Provider REAL · create real Project · START · HD · HQ-01 write · .env edit · project git commit/push · doctrine/roadmap edits.

END OF COMPLETE REVIEW PACK — P6-HQA-NEWPROJECT-01
