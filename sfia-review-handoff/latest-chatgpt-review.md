# ChatGPT Review Pack — P6-HQA-NEWPROJECT-01 NORA REAL CONVERSATIONAL PROJECT ONBOARDING (COMPLETE — REPUBLISH)

- timestamp: 2026-10-09T08:48:44Z
- republish reason: REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING
- regularization: FULL content now included for previously summary-only files
  (`fakeProvider.ts`, `p5.s06.pilotExperience.d0.test.tsx`) + unified diffs vs HEAD
- finding: P6-HQA-NEWPROJECT-01
- cycle: 8 — Delivery / implémentation
- profile: CRITICAL
- typology: EVOL
- Morris GO: GO BORNÉ — QUALIFICATION ET CORRECTION NEW PROJECT COGNITIVE ONBOARDING
- GO P6 REAL provider calls by Cursor: NOT ACTIVATED / ZERO REAL CALLS
- branch: qa/sfia-studio-p6-global-integrated-product-qa
- HEAD: 8a196be1a35ffa2d43e52beddc66b51eab56c99c
- origin/main: aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
- prior incomplete handoff: e2a4b1f2c7c7986a7b1cf95cd66739889829df0f
- activation readiness handoff: 5bba7449ab0415ca4e1f5df4c37e0bc9eb539caf
- project commit/push/PR: NONE
- HQ-01 mutation: NONE
- P6 PASS / Human QA PASS / runtime v3 ADOPTED / finding CLOSED: NOT CLAIMED

## Local Git Truth

```
BRANCH=qa/sfia-studio-p6-global-integrated-product-qa
HEAD=8a196be1a35ffa2d43e52beddc66b51eab56c99c
ORIGIN_MAIN=aba6c4a617b6d0cb27f23b59de5bf0ac9360fab1
```

Pre-existing local COG01/F01/UI-01…05 candidates preserved.

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
- Intentional deltas vs Figma copy: preview fields now distinguish provisional name / orientation / create-possible without « 4/4 champs ».
- Runtime visual parity Human QA: NOT RUN.
- FIGMA PARITY PASS: NOT CLAIMED.

## Tests

| Suite | Result |
|-------|--------|
| p6.hqa.newproject01.onboarding.d0.test.ts | PASS |
| p5.s06.pilotExperience.d0.test.tsx | PASS |
| p5.s06.cp02.cancellation.ui.test.tsx | PASS |
| p6.hqa.f01… | PASS |
| p6.hqa.cog01… | PASS |
| p6.hqa.ui03/ui04/ui05 | PASS |
| **Total prior run** | **85 PASS / 85** |

NATURAL CONVERSATION PASS: NOT CLAIMED. ZERO REAL CALLS this Cursor cycle.

## Fake / Real

- Fake: provider substitution + onboarding schema branch in FakeConversationProvider.
- REAL Nora: NOT called.
- Gates remaining: ChatGPT Critical re-review (this republish); Human QA + GO REAL.

## Risks / reserves

1. Opening message remains static chrome — first reply is provider-backed.
2. Continuity is Product context handoff, not full Agents session transcript replay.
3. Fake onboarding heuristics ≠ naturalness proof.
4. Live model×effort via F2 routing — cost only under REAL GO.

## Inventaire documentaire de cette republication

| Fichier | Statut pack précédent | Statut ce pack |
|---------|----------------------|----------------|
| newProjectOnboardingContract.ts | FULL | FULL |
| runNewProjectOnboardingTurn.ts | FULL | FULL |
| newProjectOnboardingAction.ts | FULL | FULL |
| p6.hqa.newproject01.onboarding.d0.test.ts | FULL | FULL |
| newProjectConversation.ts | FULL | FULL |
| NewProjectIntentionPage.tsx | FULL | FULL |
| fakeProvider.ts | SUMMARY ONLY (gap) | **FULL + unified diff vs HEAD** |
| p5.s06.pilotExperience.d0.test.tsx | SUMMARY ONLY (gap) | **FULL + unified diff vs HEAD** |

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


## Files modified (FULL — all New Project cycle surfaces)


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

```tsx
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


### `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

```typescript
import type { ToolDefinition } from "../tools/types";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
  ProviderInputItem,
  ProviderRoundResult,
  ProviderToolCall,
} from "./types";

export type FakeToolScriptRound =
  | { kind: "message"; text: string }
  | { kind: "tool_calls"; toolCalls: ProviderToolCall[] };

type FakeChallengeAssessment =
  | "sufficient"
  | "insufficient"
  | "unknown"
  | null;

/** F2 intent-analysis ownership — system messages only; never user content. */
function isF2IntentAnalysisContext(messages: ProviderChatMessage[]): boolean {
  return messages.some(
    (m) => m.role === "system" && m.content.includes("SFIA Studio F2"),
  );
}

/**
 * Bounded Unicode/case normalization for the natural materialization contract only.
 * Not a general NLP layer — only apostrophe variants + accents on recognized tokens.
 */
function normalizeNaturalMaterializationProbe(raw: string): string {
  return raw
    .normalize("NFC")
    .replace(/[\u2018\u2019\u02BC\u0060]/g, "'")
    .toLowerCase()
    .replace(/[àáâäã]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôöõ]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/ç/g, "c");
}

/**
 * CHAT-FIRST-GOVERNED-DECISION-LOOP-01 / D3-EXT — deterministic NON-AUTHORITATIVE
 * disposition candidate, emitted on the SAME structured intent payload a live
 * provider would use. There is no parallel Fake decision writer: the server
 * still re-resolves the durable subject and owns every HumanDecision.
 *
 * targetKind is NEVER an optionRef — only a semantic target discriminator.
 */
function matchPilotDecisionCandidate(
  probe: string,
): {
  disposition: string;
  targetKind: string;
  rationale: string | null;
} | null {
  if (probe.includes("__F2_DECIDE_ACCEPT_CURRENT_REC__")) {
    return {
      disposition: "accept",
      targetKind: "current_recommendation",
      rationale: "Pilote valide explicitement la Recommendation courante.",
    };
  }
  if (probe.includes("__F2_DECIDE_ACCEPT_ALT__")) {
    return {
      disposition: "accept",
      targetKind: "specific_alternative",
      rationale: "Pilote demande une option différente de la Recommendation.",
    };
  }
  if (probe.includes("__F2_DECIDE_ACCEPT_SUBJECT__")) {
    return {
      disposition: "accept",
      targetKind: "presented_subject",
      rationale: "Pilote engage le sujet présenté.",
    };
  }
  if (probe.includes("__F2_DECIDE_ACCEPT__")) {
    // Proposal-compatible default: presented_subject (not current_recommendation).
    return {
      disposition: "accept",
      targetKind: "presented_subject",
      rationale: "Pilote engage le sujet présenté.",
    };
  }
  if (probe.includes("__F2_DECIDE_REFUSE__")) {
    return {
      disposition: "refuse",
      targetKind: "presented_subject",
      rationale: "Pilote refuse le sujet présenté.",
    };
  }
  if (probe.includes("__F2_DECIDE_AMEND__")) {
    return {
      disposition: "amend",
      targetKind: "presented_subject",
      rationale: "Pilote demande un amendement.",
    };
  }
  if (probe.includes("__F2_DECIDE_DEFER__")) {
    return {
      disposition: "defer",
      targetKind: "presented_subject",
      rationale: "Pilote demande un report.",
    };
  }
  if (probe.includes("__F2_DECIDE_AMBIGUOUS__")) {
    return {
      disposition: "ambiguous",
      targetKind: "ambiguous",
      rationale: "Cible du « oui » indéterminée.",
    };
  }
  if (probe.includes("__F2_DECIDE_NONE__")) {
    return { disposition: "none", targetKind: "ambiguous", rationale: null };
  }

  // Natural-language Fake cues for D3-EXT deterministic proofs (no optionRef).
  const normalized = probe.toLowerCase();
  if (
    /valide\s+ta\s+recommandation|option\s+que\s+tu\s+recommand|poursuis\s+avec\s+l['']option\s+que\s+tu\s+recommand/.test(
      normalized,
    )
  ) {
    return {
      disposition: "accept",
      targetKind: "current_recommendation",
      rationale: "Acceptation explicite de la Recommendation courante.",
    };
  }
  if (
    /autre\s+option|plut[oô]t\s+(l['']autre|la\s+trajectoire\s+gouvern)|pas\s+celle\s+que\s+tu\s+recommand|je\s+choisis\s+la\s+trajectoire\s+gouvern/.test(
      normalized,
    )
  ) {
    return {
      disposition: "accept",
      targetKind: "specific_alternative",
      rationale: "Demande explicite d'une option alternative.",
    };
  }
  return null;
}

/** Exactly one repository-relative `.md` path from CURRENT demand; else null. */
function extractSingleRepoRelativeMdPath(probe: string): string | null {
  const re =
    /(?:^|[\s`"'(])((?:[A-Za-z0-9._-]+\/)+[A-Za-z0-9._-]+\.md)(?=$|[\s`"'),.])/g;
  const hits: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(probe)) !== null) {
    hits.push(m[1]!);
  }
  if (hits.length !== 1) return null;
  const path = hits[0]!;
  if (path.startsWith("/") || path.includes("..") || /:\/\//.test(path)) {
    return null;
  }
  return path;
}

/** Exactly one safe Markdown leaf filename (no slash); else null. */
function extractSingleMdFileNameLeaf(probe: string): string | null {
  const re =
    /(?:^|[\s`"'(])([A-Za-z0-9][A-Za-z0-9._-]{0,120}\.md)(?=$|[\s`"'),.])/g;
  const hits: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(probe)) !== null) {
    // Skip if the hit is part of a path (preceded by /)
    const idx = m.index ?? 0;
    if (idx > 0 && probe[idx] === "/") continue;
    const before = probe.slice(Math.max(0, idx - 1), idx + 1);
    if (before.includes("/")) continue;
    hits.push(m[1]!);
  }
  // Filter out hits that appear as path suffixes already counted elsewhere
  const leaves = hits.filter((h) => !probe.includes(`/${h}`));
  if (leaves.length !== 1) return null;
  return leaves[0]!;
}

/**
 * Narrow natural Pilot contract for artifact materialization (no synonym engine).
 *
 * Path-qualified form (historical):
 * 1) materialize wording family
 * 2) exactly one repo-relative .md path OR one safe .md leaf OR framing note cue
 * 3) explicit proposal / decision preparation
 * 4) explicit no-execution guard
 *
 * Active-cycle deliverable form (CORR-01 — path OPTIONAL):
 * 1) materialize wording family
 * 2) livrable / spécification framed as the active cycle's reference deliverable
 * 3) NOT a question / pure talk-about-the-deliverable
 * → may emit a non-authoritative Nora leaf candidate from semantic cues (D-PC-09);
 *   server composes exact targetPath. Null leaf only when no coherent cue exists.
 * Must NOT match generic docs_write ("écris dans le README") without materialize+livrable+cycle framing.
 */
/**
 * Provider-neutral non-authoritative leaf candidate from Pilot wording.
 * Mirrors intentAnalysis contract (Nora MAY propose a coherent Markdown leaf).
 * NOT a catalog default naming policy — clarification remains when no cue exists.
 */
function deriveNonAuthoritativeArtifactLeafCandidate(
  normalized: string,
): string | null {
  if (/\bnote\b/.test(normalized) && /\bcadrage\b/.test(normalized)) {
    return "note-de-cadrage.md";
  }
  if (
    /\bspecification\b/.test(normalized) &&
    /\bfonctionnelle\b/.test(normalized)
  ) {
    return "specification-fonctionnelle.md";
  }
  if (/\bcahier\b/.test(normalized) && /\bcharges\b/.test(normalized)) {
    return "cahier-des-charges.md";
  }
  if (/\bspecification\b/.test(normalized)) {
    return "specification.md";
  }
  if (/\blivrable\b/.test(normalized) && /\breference\b/.test(normalized)) {
    return "livrable-de-reference.md";
  }
  return null;
}

function matchNaturalArtifactMaterialization(probe: string): {
  targetPath: string | null;
  artifactFileName: string | null;
  artifactBrief: string;
  contentRequirement: string;
} | null {
  const normalized = normalizeNaturalMaterializationProbe(probe);
  if (!/\bmaterialis(?:e|er)\b/.test(normalized)) return null;

  // Question / reference-only — never promote to materialization continuation.
  if (
    /\?\s*$/.test(normalized.trim()) ||
    /\b(parlons|parler|qu'est[- ]ce|c'est quoi|explique|expliquer)\b/.test(
      normalized,
    )
  ) {
    return null;
  }

  const hasProposalOrDecision =
    /\bproposition\b/.test(normalized) ||
    /\bdecision\b/.test(normalized) ||
    /\bprepar(?:e|er)\b/.test(normalized);
  const hasNoExecution =
    /n'execute\s+rien/.test(normalized) ||
    /ne\s+rien\s+executer/.test(normalized) ||
    /sans\s+executer/.test(normalized);

  const targetPath = extractSingleRepoRelativeMdPath(probe);
  const leafFromPath = targetPath
    ? targetPath.split("/").pop() || null
    : null;
  const bareLeaf = extractSingleMdFileNameLeaf(probe);
  const explicitLeaf = leafFromPath || bareLeaf || null;
  const derivedLeaf = explicitLeaf
    ? null
    : deriveNonAuthoritativeArtifactLeafCandidate(normalized);
  const artifactFileName: string | null = explicitLeaf || derivedLeaf;

  const brief = probe.replace(/\s+/g, " ").trim().slice(0, 480);

  // Active-cycle reference deliverable framing (path not required).
  const hasCycleDeliverableFraming =
    /\blivrable\b/.test(normalized) ||
    /\bspecification\b/.test(normalized) ||
    /\bcahier\b/.test(normalized) ||
    (/\bnote\b/.test(normalized) && /\bcadrage\b/.test(normalized));
  const hasActiveCycleReference =
    /\bcycle\b/.test(normalized) ||
    /\breference\b/.test(normalized) ||
    /\bconsolidee?\b/.test(normalized) ||
    /\battendu\b/.test(normalized);

  if (explicitLeaf) {
    // Historical path-qualified / explicit-leaf contract — keep proposal + no-execution guards.
    if (!hasProposalOrDecision || !hasNoExecution) return null;
    return {
      targetPath,
      artifactFileName: explicitLeaf,
      artifactBrief: brief,
      contentRequirement: brief,
    };
  }

  // Path-less: only when clearly materializing the cycle's required deliverable.
  // Do NOT require internals (continuationKind / docs_write / targetPath) from the Pilot.
  if (!hasCycleDeliverableFraming || !hasActiveCycleReference) return null;
  // Still refuse bare "matérialise" without prepare/decision OR no-execution OR
  // explicit "livrable de référence / spécification … du cycle" prepare intent.
  const hasReferenceDeliverablePhrase =
    (/\blivrable\b/.test(normalized) &&
      (/\breference\b/.test(normalized) ||
        /\bdu cycle\b/.test(normalized) ||
        /\bcycle actif\b/.test(normalized) ||
        /\bconsolidee?\b/.test(normalized))) ||
    (/\bnote\b/.test(normalized) &&
      /\bcadrage\b/.test(normalized) &&
      /\bcycle\b/.test(normalized));
  if (
    !hasProposalOrDecision &&
    !hasNoExecution &&
    !hasReferenceDeliverablePhrase
  ) {
    return null;
  }

  // Nora non-authoritative leaf when semantic cues exist (D-PC-09); else null → server clarify.
  return {
    targetPath: null,
    artifactFileName,
    artifactBrief: brief,
    contentRequirement: brief,
  };
}

/** Shared F2 artifact-materialization analysis payload (sentinel + natural). */
function buildArtifactMaterializationAnalysis(input: {
  targetPath?: string | null;
  artifactFileName?: string | null;
  challengeResponseAssessment?: FakeChallengeAssessment;
  artifactBrief?: string;
  contentRequirements?: string[];
  cognitiveWorkload?: Record<string, string> | null;
}): Record<string, unknown> {
  const targetPath = input.targetPath ?? null;
  const artifactFileName =
    input.artifactFileName?.trim() ||
    (targetPath ? targetPath.split("/").pop() || null : null);
  const parentSlash = targetPath ? targetPath.lastIndexOf("/") : -1;
  const scopeIn =
    parentSlash > 0 ? [targetPath!.slice(0, parentSlash + 1)] : [];
  return {
    intentClass: "execution_request",
    candidateCycleTypeId: "cyc:framing",
    signals: {
      structuralChange: false,
      securityImpact: false,
      architectureImpact: false,
      dataImpact: false,
      irreversible: false,
      lowRiskBounded: true,
    },
    cognitiveWorkload: input.cognitiveWorkload ?? null,
    contradictionCandidate: null,
    // Do not pre-satisfy MW5 — product Fake must not mask structural challenge.
    challengeResponseAssessment: input.challengeResponseAssessment ?? null,
    continuationKind: "active_cycle_artifact_materialization",
    artifactMaterializationOperation: "cursor.docs_write.apply",
    objective: "Matérialiser le livrable requis du cycle actif",
    scope: "docs_write borné — cycle actif — aucune exécution automatique",
    rephrasedRequest: "Matérialisation gouvernée du livrable requis",
    outOfScope: ["Nouveau CycleInstance", "Pilot START", "Cursor REAL"],
    risks: ["Confusion continuation / nouvelle formalisation"],
    reservations: [],
    stopConditions: ["AUCUNE EXÉCUTION", "Décision Pilote requise"],
    activatedBlocks: ["proposition", "gate"],
    expectedOutcome: "Proposition de matérialisation liée au cycle actif",
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: {
      intentKind: "docs_write",
      artifactType: "deliverable_document",
      targetRepositoryRef: null,
      targetPath,
      artifactFileName,
      scopeIn,
      scopeOut: [],
      expectedOutputs: targetPath ? [targetPath] : artifactFileName ? [artifactFileName] : [],
      requiredCapabilities: ["cap:cursor.docs_write"],
      validationExpectations: [],
      evidenceRequirements: [],
      requestedOperation: null,
      reversibilityExpectation: null,
      artifactBrief:
        input.artifactBrief ?? "Livrable requis du cycle actif",
      contentRequirements:
        input.contentRequirements ?? ["Contenu défini avec Nora"],
      exitRequirementKinds: [],
    },
  };
}

function fakeF2JsonResult(
  callCount: number,
  analysis: Record<string, unknown>,
): ProviderCompletionResult {
  return {
    text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(analysis)}`,
    usage: {
      inputTokens: 10 * callCount,
      outputTokens: 5 * callCount,
      totalTokens: 15 * callCount,
      model: "fake-test-model",
      providerResponseId: `fake-resp-${callCount}`,
    },
  };
}

/**
 * Deterministic fake provider for unit/E2E non-live tests.
 * Never presented as live GPT; replies are tagged TEST/FAKE.
 */
export class FakeConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private callCount = 0;
  private roundCount = 0;
  private readonly scripted?: string[];
  private readonly failOnCall?: number;
  private readonly toolScript?: FakeToolScriptRound[];

  constructor(options?: {
    scripted?: string[];
    failOnCall?: number;
    toolScript?: FakeToolScriptRound[];
  }) {
    this.scripted = options?.scripted;
    this.failOnCall = options?.failOnCall;
    this.toolScript = options?.toolScript;
  }

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
    signal?: AbortSignal;
  }): Promise<ProviderCompletionResult> {
    void input.jsonSchema;
    if (input.signal?.aborted) {
      const error = new Error("AbortError");
      error.name = "AbortError";
      throw error;
    }
    // P6-HQA-NEWPROJECT-01 — deterministic onboarding structured payload (Fake only).
    if (input.schemaName === "new_project_onboarding_turn_v1") {
      return this.completeNewProjectOnboarding(input.messages, input.signal);
    }
    // Reuse F2 marker / analysis scripted JSON from complete().
    return this.complete(input.messages);
  }

  private async completeNewProjectOnboarding(
    messages: ProviderChatMessage[],
    signal?: AbortSignal,
  ): Promise<ProviderCompletionResult> {
    if (signal?.aborted) {
      const error = new Error("AbortError");
      error.name = "AbortError";
      throw error;
    }
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const text = lastUser?.content?.trim() ?? "";
    if (
      this.failOnCall !== undefined && this.callCount === this.failOnCall
    ) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    if (text.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    if (this.scripted && this.scripted.length > 0) {
      const next = this.scripted.shift()!;
      return {
        text: next,
        usage: {
          inputTokens: null,
          outputTokens: null,
          totalTokens: null,
          model: "fake-test-model",
          providerResponseId: null,
        },
      };
    }

    const refuse =
      /\b(ne\s+cr[eé]e\s+pas|pas\s+maintenant|refuse|annule)\b/i.test(text);
    const wantFast =
      /\b(tout\s+de\s+suite|immédiat|sans\s+d[eé]tailler|on\s+verra)\b/i.test(
        text,
      );
    const offTopic =
      /\b(m[eé]t[eé]o|recette\s+de\s+cuisine|blague)\b/i.test(text) &&
      !/\b(projet|cycle|livr|intention)\b/i.test(text);

    let intentionKnown: string | null = text.slice(0, 400) || null;
    let nameProposal: string | null = null;
    let nameProvisional = true;
    let sufficient = false;
    let replyText: string;
    let clarificationQuestion: string | null = null;
    const suggestions: string[] = [];
    const unknowns: string[] = [];

    if (refuse) {
      sufficient = false;
      replyText =
        "D’accord — on ne crée rien pour l’instant. Dis-moi quand tu voudras reprendre, ou précise ce qui te bloque.";
      intentionKnown = null;
    } else if (offTopic) {
      sufficient = false;
      replyText =
        "Je reste centrée sur la création du projet. Qu’est-ce que tu voudrais accomplir dans Studio ?";
      unknowns.push("intention du projet");
    } else if (wantFast || text.length >= 12) {
      sufficient = true;
      const clause = text.split(/[.!?\n]/)[0]?.trim() || text;
      nameProposal =
        clause.length > 64 ? `${clause.slice(0, 61)}…` : clause;
      nameProposal =
        nameProposal.charAt(0).toUpperCase() + nameProposal.slice(1);
      replyText = wantFast
        ? `On peut ouvrir un projet exploratoire autour de « ${clause.slice(0, 80)} ». Je propose le nom « ${nameProposal} » (provisoire) — tu pourras le renommer. Le bouton Créer reste de ton côté.`
        : `Si je comprends bien, tu veux : ${clause}. Je propose de l’appeler « ${nameProposal} » (provisoire). On peut créer le projet dès que tu es prêt ; on précisera le premier travail ensuite.`;
      if (!wantFast) {
        clarificationQuestion =
          "Y a-t-il un résultat concret qui te ferait dire que c’est réussi ?";
        suggestions.push(
          "Plus simple à comprendre",
          "Moins d’interactions inutiles",
          "Pilotage plus clair",
        );
      } else {
        unknowns.push("objectif détaillé");
      }
    } else {
      sufficient = false;
      intentionKnown = null;
      replyText =
        "Je vois une piste, mais elle reste un peu courte. Peux-tu dire en une phrase ce que tu voudrais accomplir ?";
      unknowns.push("intention exploitable");
    }

    const payload = {
      replyText,
      intentionKnown,
      objectiveProposal: intentionKnown,
      contextKnown: null as string | null,
      nameProposal,
      nameProvisional,
      firstOrientationProposal: sufficient
        ? "Qualifier la première intention de travail dans le projet une fois créé"
        : null,
      unknowns,
      sufficientForCreateProposal: sufficient && !refuse,
      refuseCreateDetected: refuse,
      clarificationQuestion,
      suggestions,
    };

    return {
      text: JSON.stringify(payload),
      usage: {
        inputTokens: null,
        outputTokens: null,
        totalTokens: null,
        model: "fake-test-model",
        providerResponseId: null,
      },
    };
  }

  /** Test helper — Nora/provider invocation counter. */
  getCallCountForTests(): number {
    return this.callCount;
  }

  async complete(
    messages: ProviderChatMessage[],
    options?: { signal?: AbortSignal },
  ): Promise<ProviderCompletionResult> {
    if (options?.signal?.aborted) {
      const error = new Error("AbortError");
      error.name = "AbortError";
      throw error;
    }
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    if (
      this.failOnCall !== undefined && this.callCount === this.failOnCall
    ) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }
    if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_PROVIDER_ERROR");
    }

    // Explicit scripted replies win over content-marker specialization (W3-C
    // correction tests inject deterministic Nora strings).
    if (this.scripted !== undefined) {
      const historyLen = messages.length;
      const text =
        this.scripted[this.callCount - 1] ??
        `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
      return {
        text,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    if (
      messages.some((m) =>
        m.role === "system" &&
        m.content.includes("SFIA Studio CKC COGNITIVE REASONING"),
      )
    ) {
      // Specialized Fake CKC cognition keys off CONTENT markers only.
      // CKC IDs (ckc:studio:*) must never trigger specialized behavior (R1-01).
      const joined = messages.map((m) => m.content).join("\n").toLowerCase();
      const hasFraming =
        joined.includes("intention") &&
        (joined.includes("périmètre") ||
          joined.includes("perimetre") ||
          joined.includes("besoin réel") ||
          joined.includes("besoin reel"));
      const hasQa =
        joined.includes("verdict evidence-based") ||
        joined.includes("claims interdits") ||
        joined.includes("confirmation bias") ||
        joined.includes("green ci");
      const hasSecurity =
        joined.includes("risque résiduel") ||
        joined.includes("risque residuel") ||
        joined.includes("adversarial") ||
        joined.includes("secret en repo");
      const hasDelivery =
        joined.includes("anti scope creep") ||
        joined.includes("scope creep") ||
        joined.includes("implémentation bornée") ||
        joined.includes("implementation bornee");
      const hasExtensionProbe = joined.includes("w3d_extension_probe_marker");
      if (hasExtensionProbe) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — W3D_EXTENSION_PROBE_MARKER : type d'extension test-only via même chemin cognitif. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasSecurity) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — posture adversarial : risque résiduel majeures → HumanDecision explicite ; secret en repo → STOP. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasDelivery) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — anti scope creep : borner le slice avant toute extension ; pas de silent REAL ; Evidence/done honnête. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasQa) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — verdict evidence-based : claims interdits sans preuve ; refuser confirmation bias / green CI = validé. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      if (hasFraming) {
        return {
          text: "[TEST/FAKE · NON LIVE] RECOMMANDATION CKC — cadrage : clarifier intention et périmètre utile avant conception ; séparer besoin réel et solution présumée. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
          usage: {
            inputTokens: 10 * this.callCount,
            outputTokens: 5 * this.callCount,
            totalTokens: 15 * this.callCount,
            model: "fake-test-model",
            providerResponseId: `fake-resp-${this.callCount}`,
          },
        };
      }
      return {
        text: "[TEST/FAKE · NON LIVE] RECOMMANDATION générique sans guidance CKC package résolu.",
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    // F2 deterministic structured intent JSON (TEST/FAKE only).
    // CORR-PROOF-01 D1: probe the current demand only — prior Session user text
    // in canonical conversation context must not steal fixture-marker matching.
    const markerProbe = (() => {
      const raw = lastUser?.content ?? "";
      const sep = "Demande courante (à évaluer):";
      const i = raw.indexOf(sep);
      return i >= 0 ? raw.slice(i + sep.length) : raw;
    })();
    /** Strip test markers so natural contracts can co-exist with MW5 fixtures. */
    const naturalProbe = markerProbe
      .replace(/__MW5_[A-Z0-9_]+__/g, " ")
      .replace(/__F2_[A-Z0-9_]+__/g, " ");

    // CHAT-FIRST-GOVERNED-DECISION-LOOP-01 — the disposition candidate rides on
    // an otherwise ordinary informative analysis. It never carries a subject id:
    // the server re-resolves the durable subject or records nothing.
    if (isF2IntentAnalysisContext(messages)) {
      const pilotDecisionCandidate = matchPilotDecisionCandidate(markerProbe);
      if (pilotDecisionCandidate) {
        return fakeF2JsonResult(this.callCount, {
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          continuationKind: null,
          artifactMaterializationOperation: null,
          objective: null,
          scope: null,
          rephrasedRequest: naturalProbe.trim().slice(0, 200),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
          pilotDecisionCandidate,
        });
      }
    }

    if (markerProbe.includes("__MW5_HIGH_ASSURANCE__")) {
      // Prefer natural materialization + HA CWP on the product continuation path
      // over NEW_CYCLE High-Assurance fixture hijack.
      if (isF2IntentAnalysisContext(messages)) {
        const naturalHa = matchNaturalArtifactMaterialization(naturalProbe);
        if (naturalHa) {
          return fakeF2JsonResult(
            this.callCount,
            buildArtifactMaterializationAnalysis({
              targetPath: naturalHa.targetPath,
              artifactFileName: naturalHa.artifactFileName,
              artifactBrief: naturalHa.artifactBrief,
              contentRequirements: [naturalHa.contentRequirement],
              challengeResponseAssessment: null,
              cognitiveWorkload: {
                ambiguity: "high",
                reasoningDepth: "high",
                sourceBreadth: "high",
                toolDependency: "medium",
                contradictionRisk: "high",
                verificationNeed: "high",
              },
            }),
          );
        }
      }
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: {
            ambiguity: "high",
            reasoningDepth: "high",
            sourceBreadth: "high",
            toolDependency: "medium",
            contradictionRisk: "high",
            verificationNeed: "high",
          },
          objective: "Préparer une proposition High-Assurance bornée",
          scope: "Proposition Light/Standard sous stratégie High-Assurance",
          rephrasedRequest: "Préparer une recommandation sous High-Assurance",
          outOfScope: ["Exécution", "PR", "merge"],
          risks: ["Rec avant challenge"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Challenge avant Rec",
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    // Natural active-cycle materialization (pathless / leaf candidate) — before other markers.
    if (isF2IntentAnalysisContext(messages)) {
      const naturalMaterialization =
        matchNaturalArtifactMaterialization(naturalProbe);
      if (naturalMaterialization) {
        return fakeF2JsonResult(
          this.callCount,
          buildArtifactMaterializationAnalysis({
            targetPath: naturalMaterialization.targetPath,
            artifactFileName: naturalMaterialization.artifactFileName,
            artifactBrief: naturalMaterialization.artifactBrief,
            contentRequirements: [naturalMaterialization.contentRequirement],
            challengeResponseAssessment: null,
          }),
        );
      }
    }
    if (markerProbe.includes("__MW5_COSMETIC__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Peux-tu juste corriger l'orthographe cosmétique",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_CONTEXT_RESOLVED__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Demande déjà couverte par le contexte projet",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (
      markerProbe.includes("__MW5_TRUTH_C_ESTABLISHED__") ||
      markerProbe.includes("__MW5_CONSUMED_HD__")
    ) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-architecture",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          objective: "Faire évoluer l'architecture déjà tranchée",
          scope: "Changement d'architecture déjà établi",
          rephrasedRequest: "Reprendre une prémisse déjà établie",
          outOfScope: ["Exécution"],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Pas de re-challenge gratuit",
          criticalJustification: "Prémisse déjà établie / HD consommée",
          requestedOperation: "architecture change",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_QUESTIONNAIRE_ATTEMPT__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Formulaire d'intake multi-questions",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_AUTHORITY__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Frontière d'autorité non résolue",
          scope: "Décision humaine requise sans acte Nora",
          rephrasedRequest: "Escalader l'autorité non résolue",
          outOfScope: ["HumanDecision synthétisée"],
          risks: ["Confusion Rec/HD"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Escalade Pilote",
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__MW5_SYNTH_HD__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Tenter de faire synthétiser un GO Nora",
          scope: "Anti-synthèse HumanDecision",
          rephrasedRequest: "Décider GO maintenant",
          outOfScope: ["Décision Nora"],
          risks: ["Autorité usurpée"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "go now",
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_DOCS_WRITE_GCEC__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-design",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: "Rédiger le design fonctionnel borné",
          scope: "docs/functional-design.md uniquement",
          rephrasedRequest:
            "Produire docs/functional-design.md via cursor.docs_write.apply",
          outOfScope: ["Cursor REAL hors fake", "commit/push/PR"],
          risks: ["Contenu incomplet"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION RÉELLE CURSOR"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Artifact functional-design prêt pour revue",
          criticalJustification: null,
          requestedOperation: "cursor.docs_write.apply",
          executionIntent: {
            intentKind: "docs_write",
            artifactType: "functional_design",
            targetRepositoryRef: "acme/widget",
            targetPath: "docs/functional-design.md",
            scopeIn: ["docs/"],
            scopeOut: ["src/", ".github/"],
            expectedOutputs: ["docs/functional-design.md"],
            requiredCapabilities: ["cap:cursor.docs_write"],
            validationExpectations: ["path_allowlist", "no_delete"],
            evidenceRequirements: [
              "git:local_commit",
              "git:remote_push",
              "git:pull_request",
              "git:ci_status",
              "git:review_status",
              "git:merge",
              "git:post_merge_verification",
            ],
            requestedOperation: "cursor.docs_write.apply",
            reversibilityExpectation: "reversible",
            artifactBrief:
              "Functional design covering goals, actors, flows, and constraints",
            contentRequirements: [
              "goals",
              "actors",
              "main_flows",
              "constraints",
              "out_of_scope",
            ],
            exitRequirementKinds: [
              "artifact",
              "validation",
              "commit",
              "push",
              "pull_request",
              "ci",
              "review",
              "merge",
              "post_merge_verification",
            ],
          },
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_INFORMATIVE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: "Résumer le projet",
          scope: null,
          rephrasedRequest: "Résumer l'objectif du projet",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_ACTIONABLE__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Préparer la prochaine étape fonctionnelle",
          scope: "Proposition bornée sans exécution",
          rephrasedRequest: "Préparer une proposition de livraison bornée",
          outOfScope: ["Cursor", "Git write", "PR"],
          risks: ["Confusion reco/décision"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Proposition structurée prête pour revue",
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    /**
     * Light/Standard gated path: Morris gate via structural op token ("create pr")
     * without Critical profile — ZERO REAL Confirmation reachable.
     * Critical architecture (__F2_STRUCTURING__) remains R-T-A3-1 fail-closed.
     */
    if (markerProbe.includes("__F2_GATED_STANDARD__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          objective: "Préparer une livraison bornée avec gate Morris",
          scope: "Proposition Standard gateable sans Critical",
          rephrasedRequest: "Préparer une proposition de livraison gated",
          outOfScope: ["Cursor REAL"],
          risks: ["Confusion reco/décision"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Gate Morris requis — profil Standard",
          criticalJustification: null,
          requestedOperation: "create pr",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_STRUCTURING__")) {
      const content = markerProbe;
      let challengeResponseAssessment:
        | "sufficient"
        | "insufficient"
        | "unknown"
        | null = null;
      if (
        content.includes("__MW5_SATISFACTION_SUFFICIENT__") ||
        content.includes("__MW5_CHALLENGE_SATISFIED__")
      ) {
        challengeResponseAssessment = "sufficient";
      } else if (
        content.includes("__MW5_SATISFACTION_INSUFFICIENT__") ||
        /^\s*(ok|vas-y|go|d'accord|daccord)\b/i.test(
          content.replace(/__MW5_[A-Z0-9_]+__/g, "").replace(/__F2_[A-Z0-9_]+__/g, "").trim(),
        )
      ) {
        challengeResponseAssessment = "insufficient";
      } else if (
        /hors\s*sujet|off[\s-]?topic|couleur\s+pr[eé]f[eé]r[eé]e/i.test(content)
      ) {
        challengeResponseAssessment = "insufficient";
      }
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:functional-architecture",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment,
          objective: "Faire évoluer l'architecture produit",
          scope: "Changement d'architecture structurant",
          rephrasedRequest: "Préparer une proposition d'architecture",
          outOfScope: ["Exécution", "PR", "merge"],
          risks: ["Impact architecture"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Gate Morris requis",
          criticalJustification: "Besoin métier structurant documenté",
          requestedOperation: "architecture change",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_AMBIGUOUS__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "ambiguous",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: "Fais le nécessaire",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    // CR-07-06 — must be checked BEFORE __F2_ARTIFACT_MATERIALIZE__ (substring risk).
    if (markerProbe.includes("__F2_ARTIFACT_HOSTILE_MERGE_OP__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:framing",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: "sufficient",
          continuationKind: "active_cycle_artifact_materialization",
          artifactMaterializationOperation: null,
          objective: "Matérialiser le livrable requis du cycle actif",
          scope: "docs_write borné — cycle actif — aucune exécution automatique",
          rephrasedRequest: "Matérialisation gouvernée du livrable requis",
          outOfScope: ["Nouveau CycleInstance", "Pilot START", "Cursor REAL"],
          risks: ["Confusion action / classification"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["proposition", "gate"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "github.pr.merge",
          executionIntent: {
            intentKind: "docs_write",
            artifactType: "deliverable_document",
            targetRepositoryRef: null,
            targetPath: "docs/livrable-cycle.md",
            scopeIn: ["docs/"],
            scopeOut: [],
            expectedOutputs: ["docs/livrable-cycle.md"],
            requiredCapabilities: ["cap:github.pr.merge"],
            validationExpectations: [],
            evidenceRequirements: [],
            requestedOperation: "github.pr.merge",
            reversibilityExpectation: null,
            artifactBrief: "Livrable requis du cycle actif",
            contentRequirements: ["Contenu défini avec Nora"],
            exitRequirementKinds: [],
          },
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_ARTIFACT_MATERIALIZE__")) {
      // Historical sentinel fixture — same builder as natural Pilot contract.
      const content = markerProbe;
      let challengeResponseAssessment: FakeChallengeAssessment = "sufficient";
      if (content.includes("__MW5_SATISFACTION_INSUFFICIENT__")) {
        challengeResponseAssessment = "insufficient";
      }
      return fakeF2JsonResult(
        this.callCount,
        buildArtifactMaterializationAnalysis({
          targetPath: "docs/livrable-cycle.md",
          challengeResponseAssessment,
        }),
      );
    }
    if (markerProbe.includes("__F2_DOCS_WRITE_GENERIC__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:framing",
          signals: {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: "sufficient",
          continuationKind: null,
          objective: "Modifier le README du dépôt",
          scope: "docs_write générique indépendant",
          rephrasedRequest: "Écrire dans le README",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition"],
          expectedOutcome: "Proposition docs_write générique",
          criticalJustification: null,
          requestedOperation: "cursor.docs_write.apply",
          executionIntent: {
            intentKind: "docs_write",
            artifactType: null,
            targetRepositoryRef: null,
            targetPath: "README.md",
            scopeIn: ["projects/"],
            scopeOut: [],
            expectedOutputs: ["README.md"],
            requiredCapabilities: ["cap:cursor.docs_write"],
            validationExpectations: [],
            evidenceRequirements: [],
            requestedOperation: "cursor.docs_write.apply",
            reversibilityExpectation: null,
            artifactBrief: null,
            contentRequirements: [],
            exitRequirementKinds: [],
          },
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_ARTIFACT_DEFINE_ONLY__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: "cyc:framing",
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          continuationKind: null,
          objective: "Définir la forme du livrable attendu",
          scope: null,
          rephrasedRequest: "Préciser la définition du livrable sans matérialiser",
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_EXECUTION__")) {
      const content = markerProbe;
      let challengeResponseAssessment:
        | "sufficient"
        | "insufficient"
        | "unknown"
        | null = null;
      if (
        content.includes("__MW5_SATISFACTION_SUFFICIENT__") ||
        content.includes("__MW5_CHALLENGE_SATISFIED__")
      ) {
        challengeResponseAssessment = "sufficient";
      } else if (
        content.includes("__MW5_SATISFACTION_INSUFFICIENT__") ||
        /^\s*(ok|vas-y|go)\b/i.test(
          content
            .replace(/__MW5_[A-Z0-9_]+__/g, "")
            .replace(/__F2_[A-Z0-9_]+__/g, "")
            .trim(),
        )
      ) {
        challengeResponseAssessment = "insufficient";
      }
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "execution_request",
          candidateCycleTypeId: "cyc:delivery",
          signals: {
            structuralChange: true,
            securityImpact: false,
            architectureImpact: true,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment,
          objective: "Lancer Cursor et créer une PR",
          scope: "Exécution produit demandée — refusée en F2",
          rephrasedRequest: "Demande d'exécution Cursor / PR",
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre F2"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
          requestedOperation: "cursor create pr",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    if (markerProbe.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: "cyc:security",
          signals: {
            structuralChange: true,
            securityImpact: true,
            architectureImpact: true,
            dataImpact: true,
            irreversible: true,
            lowRiskBounded: false,
          },
          cognitiveWorkload: null,
          objective: "Changer l'architecture sécurité",
          scope: "Impact structurant sécurité",
          rephrasedRequest: "Modifier architecture sécurité",
          outOfScope: ["Exécution"],
          risks: ["Impact critique"],
          reservations: [],
          stopConditions: ["Justification Critical obligatoire"],
          activatedBlocks: ["qualification"],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: "architecture security change",
          executionIntent: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }
    // Natural Pilot artifact-materialization is F2 intent-analysis ONLY.
    // Ordering: HOSTILE_MERGE → ARTIFACT_MATERIALIZE sentinel → … remaining markers
    // Remaining F2 intents: informative fallback (natural materialization handled above).
    if (isF2IntentAnalysisContext(messages)) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "informative",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          objective: null,
          scope: null,
          rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
        })}`,
        usage: {
          inputTokens: 10 * this.callCount,
          outputTokens: 5 * this.callCount,
          totalTokens: 15 * this.callCount,
          model: "fake-test-model",
          providerResponseId: `fake-resp-${this.callCount}`,
        },
      };
    }

    const historyLen = messages.length;
    const text =
      this.scripted?.[this.callCount - 1] ??
      `[TEST/FAKE · NON LIVE] Réponse fake #${this.callCount} (historique=${historyLen}). Echo: « ${(lastUser?.content ?? "").slice(0, 80)} »`;
    return {
      text,
      usage: {
        inputTokens: 10 * this.callCount,
        outputTokens: 5 * this.callCount,
        totalTokens: 15 * this.callCount,
        model: "fake-test-model",
        providerResponseId: `fake-resp-${this.callCount}`,
      },
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
    signal?: AbortSignal;
  }): Promise<ProviderRoundResult> {
    if (input.signal?.aborted) {
      const error = new Error("AbortError");
      error.name = "AbortError";
      throw error;
    }
    this.roundCount += 1;
    const usage = {
      inputTokens: 10 * this.roundCount,
      outputTokens: 5 * this.roundCount,
      totalTokens: 15 * this.roundCount,
      model: "fake-test-model",
      providerResponseId: `fake-round-${this.roundCount}`,
    };

    if (this.toolScript && this.toolScript.length > 0) {
      const step =
        this.toolScript[
          Math.min(this.roundCount - 1, this.toolScript.length - 1)
        ];
      if (step.kind === "tool_calls" && input.tools.length > 0) {
        return { kind: "tool_calls", toolCalls: step.toolCalls, usage };
      }
      if (step.kind === "message") {
        return { kind: "message", text: step.text, usage };
      }
    }

    // Auto: if last user asks for git/github and tools available, emit one tool call once
    const lastUser = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    const content =
      lastUser && lastUser.type === "message" ? lastUser.content : "";

    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GIT_STATUS__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-git-status",
            name: "git_local_get_status",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_GITHUB_REPO__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-gh-repo",
            name: "github_get_repository",
            argumentsJson: "{}",
          },
        ],
        usage,
      };
    }
    if (
      this.roundCount === 1 &&
      input.tools.length > 0 &&
      /__CT_TOOL_DENIED_PATH__/i.test(content)
    ) {
      return {
        kind: "tool_calls",
        toolCalls: [
          {
            callId: "fake-call-env",
            name: "git_local_read_file",
            argumentsJson: JSON.stringify({ path: ".env" }),
          },
        ],
        usage,
      };
    }

    // After tools or default message
    const toolOutputs = input.items.filter(
      (i) => i.type === "function_call_output",
    );
    if (toolOutputs.length > 0) {
      return {
        kind: "message",
        text: `[TEST/FAKE · NON LIVE] Analyse outils (${toolOutputs.length}) — aucun succès implicite déclaré.`,
        usage,
      };
    }

    const messages = input.items
      .filter((i): i is Extract<ProviderInputItem, { type: "message" }> =>
        i.type === "message",
      )
      .map((m) => ({ role: m.role, content: m.content }));
    const completion = await this.complete(messages);
    return { kind: "message", text: completion.text, usage: completion.usage };
  }
}
```


### `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx`

```tsx
/** @vitest-environment jsdom */
import {
  cleanup,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectsPage } from "@/features/pre-m6-product-ui/ProjectsPage";
import { NewProjectIntentionPage } from "@/features/pre-m6-product-ui/NewProjectIntentionPage";
import { LoginClient } from "@/app/login/login-client";
import {
  absorbUserTurn,
  collectPhaseOf,
  emptyDraft,
  isMinimumSufficient,
  nextNoraPrompt,
  reopenField,
} from "@/features/pre-m6-product-ui/newProjectConversation";
import { projectNoraActivity } from "@/features/pre-m6-product-ui/surfaces/noraActivityProjection";

const {
  listProjectsRuntimeActionMock,
  createProjectRuntimeActionMock,
  newProjectOnboardingTurnActionMock,
  pushMock,
} = vi.hoisted(() => ({
  listProjectsRuntimeActionMock: vi.fn(),
  createProjectRuntimeActionMock: vi.fn(),
  newProjectOnboardingTurnActionMock: vi.fn(),
  pushMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
  listProjectsRuntimeAction: listProjectsRuntimeActionMock,
  createProjectRuntimeAction: createProjectRuntimeActionMock,
}));

vi.mock("@/features/pre-m6-product-ui/newProjectOnboardingAction", () => ({
  newProjectOnboardingTurnAction: newProjectOnboardingTurnActionMock,
}));

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

afterEach(() => {
  cleanup();
  listProjectsRuntimeActionMock.mockReset();
  createProjectRuntimeActionMock.mockReset();
  newProjectOnboardingTurnActionMock.mockReset();
  pushMock.mockReset();
});

describe("P5-S06 CP01 / P6-HQA-NEWPROJECT-01 draft helpers", () => {
  it("absorbUserTurn stamps provisional name without blocking create after a turn", () => {
    const d0 = emptyDraft();
    expect(collectPhaseOf(d0)).toBe("INTENTION_REQUIRED");
    const d1 = absorbUserTurn(d0, "Moderniser le reporting");
    expect(d1.intention).toContain("Moderniser");
    expect(d1.name.length).toBeGreaterThan(0);
    expect(d1.nameProvisional).toBe(true);
    expect(isMinimumSufficient(d1)).toBe(true);
  });

  it("reopens name explicitly", () => {
    const d = absorbUserTurn(emptyDraft(), "Suivre les contrats");
    const reopened = reopenField(d, "name");
    expect(reopened.name).toBe("");
    expect(collectPhaseOf(reopened)).toBe("NAME_REQUIRED");
    expect(nextNoraPrompt("NAME_REQUIRED")).toMatch(/nom/i);
  });
});

describe("P5-S06 CP01 ProjectsPage", () => {
  it("shows empty state without inventing projects", async () => {
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [],
      disclosures: {},
    });
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(screen.getByTestId("studio-projects-empty")).toBeInTheDocument(),
    );
    expect(screen.queryByTestId("studio-projects-recent")).toBeNull();
  });

  it("treats updatedAt as recent activity, not next action, and searches locally", async () => {
    const recent = new Date().toISOString();
    listProjectsRuntimeActionMock.mockResolvedValue({
      ok: true,
      projects: [
        {
          projectId: "prj:a",
          title: "Alpha Reporting",
          name: "Alpha Reporting",
          status: "active",
          objective: "Reporting",
          updatedAt: recent,
        },
        {
          projectId: "prj:b",
          title: "Beta Archive",
          name: "Beta Archive",
          status: "archived",
          objective: "Old",
          updatedAt: "2020-01-01T00:00:00.000Z",
        },
      ],
      disclosures: {},
    });
    const user = userEvent.setup();
    render(<ProjectsPage />);
    await waitFor(() =>
      expect(screen.getByTestId("studio-projects-list")).toBeInTheDocument(),
    );
    // P3 section label « À reprendre »; content remains updatedAt-only (no invented next action).
    expect(screen.getByTestId("studio-projects-recent")).toHaveTextContent(
      "À reprendre",
    );
    expect(screen.getByTestId("studio-projects-recent")).toHaveTextContent(
      "aucune prochaine action inventée",
    );
    expect(
      within(screen.getByTestId("studio-projects-recent")).queryByText(
        /Finaliser|Reprendre la trajectoire/i,
      ),
    ).toBeNull();
    expect(
      within(screen.getByTestId("studio-projects-recent")).getByText(
        "Alpha Reporting",
      ),
    ).toBeInTheDocument();
    await user.type(screen.getByTestId("studio-projects-search"), "beta");
    expect(screen.getByTestId("studio-projects-list")).toHaveTextContent(
      "Beta Archive",
    );
    expect(screen.getByTestId("studio-projects-ask-nora")).toHaveAttribute(
      "href",
      "/studio/projects/new",
    );
    expect(screen.getByTestId("studio-projects-orientation")).toHaveTextContent(
      /nouveau projet/i,
    );
    expect(screen.getByTestId("studio-projects-orientation")).not.toHaveTextContent(
      /retrouver un projet/i,
    );
  });
});

describe("P5-S06 CP01 NewProjectIntentionPage (cognitive onboarding)", () => {
  beforeEach(() => {
    vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
      "00000000-0000-4000-8000-000000000099",
    );
    newProjectOnboardingTurnActionMock.mockImplementation(
      async (input: {
        userText: string;
        draft: {
          intention: string;
          name: string;
          nameProvisional: boolean;
          objective: string;
          context: string;
          firstOrientation: string;
          unknowns: string[];
          cognitiveCreateProposal: boolean;
          explicitRefuseCreate: boolean;
          cognitiveTurns: number;
        };
      }) => {
        const intention = input.userText;
        const name =
          intention.length > 48 ? `${intention.slice(0, 45)}…` : intention;
        const draft = {
          ...input.draft,
          intention,
          objective: intention,
          name: name.charAt(0).toUpperCase() + name.slice(1),
          nameProvisional: true,
          cognitiveCreateProposal: true,
          cognitiveTurns: input.draft.cognitiveTurns + 1,
          firstOrientation:
            "Qualifier la première intention de travail une fois le projet créé",
          unknowns: [],
        };
        return {
          ok: true as const,
          draft,
          replyText: `Si je comprends bien : ${intention}. Je propose « ${draft.name} » (provisoire).`,
          clarification: {
            title: "UNE PRÉCISION UTILE",
            question: "Quel résultat concret te fera dire que c’est réussi ?",
            suggestions: ["Plus simple à comprendre"],
          },
          payload: {
            replyText: `ok`,
            intentionKnown: intention,
            objectiveProposal: intention,
            contextKnown: null,
            nameProposal: draft.name,
            nameProvisional: true,
            firstOrientationProposal: draft.firstOrientation,
            unknowns: [],
            sufficientForCreateProposal: true,
            refuseCreateDetected: false,
            clarificationQuestion: "Quel résultat ?",
            suggestions: [],
          },
          boundarySubstitution: true,
        };
      },
    );
  });

  it("does not create a Project before explicit CTA; one cognitive turn can enable create", async () => {
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
      /accomplir|projet/i,
    );
    expect(screen.getByTestId("new-project-starters")).toBeInTheDocument();

    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
    await waitFor(() =>
      expect(screen.getByTestId("preview-intention")).toHaveTextContent(
        /contrats/i,
      ),
    );
    expect(screen.getByTestId("create-project-submit")).toBeEnabled();
    expect(screen.getByTestId("preview-name")).not.toHaveTextContent(
      /pas encore précisé/i,
    );
    expect(screen.getByTestId("new-project-clarification")).toBeInTheDocument();
    expect(screen.getByTestId("new-project-understood")).toBeInTheDocument();
  });

  it("creates exactly one Project via canonical action then opens workspace", async () => {
    createProjectRuntimeActionMock.mockResolvedValue({
      ok: true,
      projectId: "prj:s06-1",
      project: {
        projectId: "prj:s06-1",
        name: "Contrats Q3",
        objective: "Suivre les contrats fournisseurs",
        criticality: "STANDARD",
      },
      livingState: { version: 1 },
      readiness: { status: "NOT_READY" },
      reusedFromIdempotencyKey: false,
    });
    const user = userEvent.setup();
    render(<NewProjectIntentionPage />);
    await user.type(
      screen.getByTestId("new-project-input"),
      "Suivre les contrats fournisseurs",
    );
    await user.click(screen.getByTestId("new-project-send"));
    await waitFor(() =>
      expect(screen.getByTestId("create-project-submit")).toBeEnabled(),
    );
    await user.click(screen.getByTestId("create-project-submit"));

    await waitFor(() =>
      expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(1),
    );
    const arg = createProjectRuntimeActionMock.mock.calls[0]![0];
    expect(arg.name.length).toBeGreaterThan(0);
    expect(arg.objective).toMatch(/contrats/i);
    expect(arg.context).toMatch(/nora-onboarding-handoff/);
    expect(arg.criticality).toBe("STANDARD");
    expect(arg).not.toHaveProperty("cycleId");
    expect(arg).not.toHaveProperty("humanDecision");
    expect(pushMock).toHaveBeenCalledWith(
      "/studio/projects/prj%3As06-1?from=new-project-onboarding",
    );
  });
});

describe("P5-S06 CP01 Nora activity mapping", () => {
  it("maps observable uiState without STOPPED or fake percent", () => {
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "SENDING",
      }),
    ).toMatchObject({ phase: "start", stopAvailable: false });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "SOURCE_LOOKUP",
      }),
    ).toMatchObject({ phase: "activity", label: "Nora travaille…" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "ASSISTANT_WORKING",
      }),
    ).toMatchObject({ phase: "activity", label: "Nora travaille…" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: false,
        uiState: "ANSWERED",
      }),
    ).toMatchObject({ phase: "complete" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "ANSWERED",
      }),
    ).toMatchObject({ phase: "complete" });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: false,
        uiState: "ERROR_RECOVERABLE",
      }),
    ).toMatchObject({ phase: "error" });
    expect(
      projectNoraActivity({
        blocked: true,
        busy: false,
        uiState: "BLOCKED",
      }),
    ).toMatchObject({ phase: "blocked" });
    const idle = projectNoraActivity({
      blocked: false,
      busy: false,
      uiState: "READY",
    });
    expect(idle.phase).not.toBe("stopped" as never);
    expect(JSON.stringify(idle)).not.toMatch(/%|chain of thought|CoT/i);
    expect(
      projectNoraActivity({
        blocked: false,
        busy: false,
        uiState: "STOPPED",
      }),
    ).toMatchObject({ phase: "stopped", label: "Réponse interrompue", stopAvailable: false });
    expect(
      projectNoraActivity({
        blocked: false,
        busy: true,
        uiState: "ASSISTANT_WORKING",
        stopAvailable: true,
      }).stopAvailable,
    ).toBe(true);
  });
});

describe("P5-S06 CP01 Auth", () => {
  it("keeps GitHub-only Continuer avec GitHub and existing start href", () => {
    render(<LoginClient fromPath="/studio" />);
    const cta = screen.getByTestId("login-github");
    expect(cta).toHaveTextContent("Continuer avec GitHub");
    expect(cta).toHaveAttribute(
      "href",
      "/api/auth/github-start?from=%2Fstudio",
    );
  });
});
```


## Unified diffs vs HEAD (previously missing modified content)

These diffs isolate the New Project onboarding delta for regression audit of `fakeProvider.ts` and `p5.s06.pilotExperience.d0.test.tsx`.


### diff — `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index fb53e855..e524b923 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -434,17 +434,141 @@ export class FakeConversationProvider implements ConversationProvider {
     jsonSchema: Record<string, unknown>;
     signal?: AbortSignal;
   }): Promise<ProviderCompletionResult> {
-    void input.schemaName;
     void input.jsonSchema;
     if (input.signal?.aborted) {
       const error = new Error("AbortError");
       error.name = "AbortError";
       throw error;
     }
+    // P6-HQA-NEWPROJECT-01 — deterministic onboarding structured payload (Fake only).
+    if (input.schemaName === "new_project_onboarding_turn_v1") {
+      return this.completeNewProjectOnboarding(input.messages, input.signal);
+    }
     // Reuse F2 marker / analysis scripted JSON from complete().
     return this.complete(input.messages);
   }

+  private async completeNewProjectOnboarding(
+    messages: ProviderChatMessage[],
+    signal?: AbortSignal,
+  ): Promise<ProviderCompletionResult> {
+    if (signal?.aborted) {
+      const error = new Error("AbortError");
+      error.name = "AbortError";
+      throw error;
+    }
+    this.callCount += 1;
+    const lastUser = [...messages].reverse().find((m) => m.role === "user");
+    const text = lastUser?.content?.trim() ?? "";
+    if (
+      this.failOnCall !== undefined && this.callCount === this.failOnCall
+    ) {
+      throw new Error("FAKE_PROVIDER_ERROR");
+    }
+    if (text.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
+      throw new Error("FAKE_PROVIDER_ERROR");
+    }
+    if (this.scripted && this.scripted.length > 0) {
+      const next = this.scripted.shift()!;
+      return {
+        text: next,
+        usage: {
+          inputTokens: null,
+          outputTokens: null,
+          totalTokens: null,
+          model: "fake-test-model",
+          providerResponseId: null,
+        },
+      };
+    }
+
+    const refuse =
+      /\b(ne\s+cr[eé]e\s+pas|pas\s+maintenant|refuse|annule)\b/i.test(text);
+    const wantFast =
+      /\b(tout\s+de\s+suite|immédiat|sans\s+d[eé]tailler|on\s+verra)\b/i.test(
+        text,
+      );
+    const offTopic =
+      /\b(m[eé]t[eé]o|recette\s+de\s+cuisine|blague)\b/i.test(text) &&
+      !/\b(projet|cycle|livr|intention)\b/i.test(text);
+
+    let intentionKnown: string | null = text.slice(0, 400) || null;
+    let nameProposal: string | null = null;
+    let nameProvisional = true;
+    let sufficient = false;
+    let replyText: string;
+    let clarificationQuestion: string | null = null;
+    const suggestions: string[] = [];
+    const unknowns: string[] = [];
+
+    if (refuse) {
+      sufficient = false;
+      replyText =
+        "D’accord — on ne crée rien pour l’instant. Dis-moi quand tu voudras reprendre, ou précise ce qui te bloque.";
+      intentionKnown = null;
+    } else if (offTopic) {
+      sufficient = false;
+      replyText =
+        "Je reste centrée sur la création du projet. Qu’est-ce que tu voudrais accomplir dans Studio ?";
+      unknowns.push("intention du projet");
+    } else if (wantFast || text.length >= 12) {
+      sufficient = true;
+      const clause = text.split(/[.!?\n]/)[0]?.trim() || text;
+      nameProposal =
+        clause.length > 64 ? `${clause.slice(0, 61)}…` : clause;
+      nameProposal =
+        nameProposal.charAt(0).toUpperCase() + nameProposal.slice(1);
+      replyText = wantFast
+        ? `On peut ouvrir un projet exploratoire autour de « ${clause.slice(0, 80)} ». Je propose le nom « ${nameProposal} » (provisoire) — tu pourras le renommer. Le bouton Créer reste de ton côté.`
+        : `Si je comprends bien, tu veux : ${clause}. Je propose de l’appeler « ${nameProposal} » (provisoire). On peut créer le projet dès que tu es prêt ; on précisera le premier travail ensuite.`;
+      if (!wantFast) {
+        clarificationQuestion =
+          "Y a-t-il un résultat concret qui te ferait dire que c’est réussi ?";
+        suggestions.push(
+          "Plus simple à comprendre",
+          "Moins d’interactions inutiles",
+          "Pilotage plus clair",
+        );
+      } else {
+        unknowns.push("objectif détaillé");
+      }
+    } else {
+      sufficient = false;
+      intentionKnown = null;
+      replyText =
+        "Je vois une piste, mais elle reste un peu courte. Peux-tu dire en une phrase ce que tu voudrais accomplir ?";
+      unknowns.push("intention exploitable");
+    }
+
+    const payload = {
+      replyText,
+      intentionKnown,
+      objectiveProposal: intentionKnown,
+      contextKnown: null as string | null,
+      nameProposal,
+      nameProvisional,
+      firstOrientationProposal: sufficient
+        ? "Qualifier la première intention de travail dans le projet une fois créé"
+        : null,
+      unknowns,
+      sufficientForCreateProposal: sufficient && !refuse,
+      refuseCreateDetected: refuse,
+      clarificationQuestion,
+      suggestions,
+    };
+
+    return {
+      text: JSON.stringify(payload),
+      usage: {
+        inputTokens: null,
+        outputTokens: null,
+        totalTokens: null,
+        model: "fake-test-model",
+        providerResponseId: null,
+      },
+    };
+  }
+
   /** Test helper — Nora/provider invocation counter. */
   getCallCountForTests(): number {
     return this.callCount;
```


### diff — `projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
index 3e1458ff..5597f74a 100644
--- a/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
+++ b/projects/sfia-studio/app/__tests__/pre-m6-product-ui/p5.s06.pilotExperience.d0.test.tsx
@@ -21,18 +21,27 @@ import {
 } from "@/features/pre-m6-product-ui/newProjectConversation";
 import { projectNoraActivity } from "@/features/pre-m6-product-ui/surfaces/noraActivityProjection";

-const { listProjectsRuntimeActionMock, createProjectRuntimeActionMock, pushMock } =
-  vi.hoisted(() => ({
-    listProjectsRuntimeActionMock: vi.fn(),
-    createProjectRuntimeActionMock: vi.fn(),
-    pushMock: vi.fn(),
-  }));
+const {
+  listProjectsRuntimeActionMock,
+  createProjectRuntimeActionMock,
+  newProjectOnboardingTurnActionMock,
+  pushMock,
+} = vi.hoisted(() => ({
+  listProjectsRuntimeActionMock: vi.fn(),
+  createProjectRuntimeActionMock: vi.fn(),
+  newProjectOnboardingTurnActionMock: vi.fn(),
+  pushMock: vi.fn(),
+}));

 vi.mock("@/lib/vertical-slice-runtime/actions", () => ({
   listProjectsRuntimeAction: listProjectsRuntimeActionMock,
   createProjectRuntimeAction: createProjectRuntimeActionMock,
 }));

+vi.mock("@/features/pre-m6-product-ui/newProjectOnboardingAction", () => ({
+  newProjectOnboardingTurnAction: newProjectOnboardingTurnActionMock,
+}));
+
 vi.mock("next/navigation", () => ({
   useRouter: () => ({ push: pushMock }),
 }));
@@ -56,51 +65,23 @@ afterEach(() => {
   cleanup();
   listProjectsRuntimeActionMock.mockReset();
   createProjectRuntimeActionMock.mockReset();
+  newProjectOnboardingTurnActionMock.mockReset();
   pushMock.mockReset();
 });

-describe("P5-S06 CP01 explicit-phase collection", () => {
-  it("records intention only while INTENTION_REQUIRED, never guesses name", () => {
+describe("P5-S06 CP01 / P6-HQA-NEWPROJECT-01 draft helpers", () => {
+  it("absorbUserTurn stamps provisional name without blocking create after a turn", () => {
     const d0 = emptyDraft();
     expect(collectPhaseOf(d0)).toBe("INTENTION_REQUIRED");
-    const extra = "Il faudrait aussi prendre en compte les avenants.";
-    const d1 = absorbUserTurn(d0, "Moderniser le reporting", "INTENTION_REQUIRED");
+    const d1 = absorbUserTurn(d0, "Moderniser le reporting");
     expect(d1.intention).toContain("Moderniser");
-    expect(d1.name).toBe("");
-    const stillIntention = absorbUserTurn(d1, extra, "INTENTION_REQUIRED");
-    expect(stillIntention.name).toBe("");
-    expect(stillIntention.intention).toContain("avenants");
-    expect(isMinimumSufficient(stillIntention)).toBe(false);
+    expect(d1.name.length).toBeGreaterThan(0);
+    expect(d1.nameProvisional).toBe(true);
+    expect(isMinimumSufficient(d1)).toBe(true);
   });

-  it("records name only after NAME_REQUIRED; later turns stay context", () => {
-    let d = absorbUserTurn(emptyDraft(), "Suivre les contrats", "INTENTION_REQUIRED");
-    expect(collectPhaseOf(d)).toBe("NAME_REQUIRED");
-    d = absorbUserTurn(d, "Contrats Q3", "NAME_REQUIRED");
-    expect(d.name).toBe("Contrats Q3");
-    expect(isMinimumSufficient(d)).toBe(true);
-    d = absorbUserTurn(d, "Inclure les avenants", "OPTIONAL_CONTEXT");
-    expect(d.name).toBe("Contrats Q3");
-    expect(d.context).toContain("avenants");
-  });
-
-  it("proposes a name when intention already names espace-projet redesign work", () => {
-    const d = absorbUserTurn(
-      emptyDraft(),
-      "Je veux créer une nouvelle version de notre espace projet pour simplifier le pilotage.",
-      "INTENTION_REQUIRED",
-    );
-    expect(d.name).toBe("Refonte de l’espace projet");
-    expect(collectPhaseOf(d)).toBe("OPTIONAL_CONTEXT");
-    expect(isMinimumSufficient(d)).toBe(true);
-  });
-
-  it("reopens a captured field explicitly without guessing", () => {
-    const d = absorbUserTurn(
-      absorbUserTurn(emptyDraft(), "Obj", "INTENTION_REQUIRED"),
-      "NomX",
-      "NAME_REQUIRED",
-    );
+  it("reopens name explicitly", () => {
+    const d = absorbUserTurn(emptyDraft(), "Suivre les contrats");
     const reopened = reopenField(d, "name");
     expect(reopened.name).toBe("");
     expect(collectPhaseOf(reopened)).toBe("NAME_REQUIRED");
@@ -185,19 +166,77 @@ describe("P5-S06 CP01 ProjectsPage", () => {
   });
 });

-describe("P5-S06 CP01 NewProjectIntentionPage", () => {
+describe("P5-S06 CP01 NewProjectIntentionPage (cognitive onboarding)", () => {
   beforeEach(() => {
     vi.spyOn(globalThis.crypto, "randomUUID").mockReturnValue(
       "00000000-0000-4000-8000-000000000099",
     );
+    newProjectOnboardingTurnActionMock.mockImplementation(
+      async (input: {
+        userText: string;
+        draft: {
+          intention: string;
+          name: string;
+          nameProvisional: boolean;
+          objective: string;
+          context: string;
+          firstOrientation: string;
+          unknowns: string[];
+          cognitiveCreateProposal: boolean;
+          explicitRefuseCreate: boolean;
+          cognitiveTurns: number;
+        };
+      }) => {
+        const intention = input.userText;
+        const name =
+          intention.length > 48 ? `${intention.slice(0, 45)}…` : intention;
+        const draft = {
+          ...input.draft,
+          intention,
+          objective: intention,
+          name: name.charAt(0).toUpperCase() + name.slice(1),
+          nameProvisional: true,
+          cognitiveCreateProposal: true,
+          cognitiveTurns: input.draft.cognitiveTurns + 1,
+          firstOrientation:
+            "Qualifier la première intention de travail une fois le projet créé",
+          unknowns: [],
+        };
+        return {
+          ok: true as const,
+          draft,
+          replyText: `Si je comprends bien : ${intention}. Je propose « ${draft.name} » (provisoire).`,
+          clarification: {
+            title: "UNE PRÉCISION UTILE",
+            question: "Quel résultat concret te fera dire que c’est réussi ?",
+            suggestions: ["Plus simple à comprendre"],
+          },
+          payload: {
+            replyText: `ok`,
+            intentionKnown: intention,
+            objectiveProposal: intention,
+            contextKnown: null,
+            nameProposal: draft.name,
+            nameProvisional: true,
+            firstOrientationProposal: draft.firstOrientation,
+            unknowns: [],
+            sufficientForCreateProposal: true,
+            refuseCreateDetected: false,
+            clarificationQuestion: "Quel résultat ?",
+            suggestions: [],
+          },
+          boundarySubstitution: true,
+        };
+      },
+    );
   });

-  it("does not create a Project before explicit CTA and asks slots explicitly", async () => {
+  it("does not create a Project before explicit CTA; one cognitive turn can enable create", async () => {
     const user = userEvent.setup();
     render(<NewProjectIntentionPage />);
     expect(screen.getByTestId("create-project-submit")).toBeDisabled();
     expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
-      /accomplir|intention/i,
+      /accomplir|projet/i,
     );
     expect(screen.getByTestId("new-project-starters")).toBeInTheDocument();

@@ -207,32 +246,17 @@ describe("P5-S06 CP01 NewProjectIntentionPage", () => {
     );
     await user.click(screen.getByTestId("new-project-send"));
     expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
-    expect(screen.getByTestId("preview-intention")).toHaveTextContent(/contrats/i);
-    expect(screen.getByTestId("create-project-submit")).toBeDisabled();
-    expect(screen.getByTestId("new-project-thread")).toHaveTextContent(
-      /Quel nom/i,
+    await waitFor(() =>
+      expect(screen.getByTestId("preview-intention")).toHaveTextContent(
+        /contrats/i,
+      ),
     );
-
-    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
-    await user.click(screen.getByTestId("new-project-send"));
-    expect(createProjectRuntimeActionMock).not.toHaveBeenCalled();
-    expect(screen.getByTestId("preview-name")).toHaveTextContent("Contrats Q3");
     expect(screen.getByTestId("create-project-submit")).toBeEnabled();
-    expect(screen.getByTestId("new-project-clarification")).toBeInTheDocument();
-    expect(screen.getByTestId("new-project-understood")).toBeInTheDocument();
-  });
-
-  it("does not treat a follow-up precision as name before NAME_REQUIRED", async () => {
-    const user = userEvent.setup();
-    render(<NewProjectIntentionPage />);
-    await user.type(
-      screen.getByTestId("new-project-input"),
-      "Suivre les contrats",
-    );
-    await user.click(screen.getByTestId("new-project-send"));
-    expect(screen.getByTestId("preview-name")).toHaveTextContent(
+    expect(screen.getByTestId("preview-name")).not.toHaveTextContent(
       /pas encore précisé/i,
     );
+    expect(screen.getByTestId("new-project-clarification")).toBeInTheDocument();
+    expect(screen.getByTestId("new-project-understood")).toBeInTheDocument();
   });

   it("creates exactly one Project via canonical action then opens workspace", async () => {
@@ -256,20 +280,24 @@ describe("P5-S06 CP01 NewProjectIntentionPage", () => {
       "Suivre les contrats fournisseurs",
     );
     await user.click(screen.getByTestId("new-project-send"));
-    await user.type(screen.getByTestId("new-project-input"), "Contrats Q3");
-    await user.click(screen.getByTestId("new-project-send"));
+    await waitFor(() =>
+      expect(screen.getByTestId("create-project-submit")).toBeEnabled(),
+    );
     await user.click(screen.getByTestId("create-project-submit"));

     await waitFor(() =>
       expect(createProjectRuntimeActionMock).toHaveBeenCalledTimes(1),
     );
     const arg = createProjectRuntimeActionMock.mock.calls[0]![0];
-    expect(arg.name).toBe("Contrats Q3");
+    expect(arg.name.length).toBeGreaterThan(0);
     expect(arg.objective).toMatch(/contrats/i);
+    expect(arg.context).toMatch(/nora-onboarding-handoff/);
     expect(arg.criticality).toBe("STANDARD");
     expect(arg).not.toHaveProperty("cycleId");
     expect(arg).not.toHaveProperty("humanDecision");
-    expect(pushMock).toHaveBeenCalledWith("/studio/projects/prj%3As06-1");
+    expect(pushMock).toHaveBeenCalledWith(
+      "/studio/projects/prj%3As06-1?from=new-project-onboarding",
+    );
   });
 });

@@ -303,6 +331,13 @@ describe("P5-S06 CP01 Nora activity mapping", () => {
         uiState: "ANSWERED",
       }),
     ).toMatchObject({ phase: "complete" });
+    expect(
+      projectNoraActivity({
+        blocked: false,
+        busy: true,
+        uiState: "ANSWERED",
+      }),
+    ).toMatchObject({ phase: "complete" });
     expect(
       projectNoraActivity({
         blocked: false,
```


## Actions NOT executed

Provider REAL · create real Project · START · HD · HQ-01 write · .env edit · project git commit/push · doctrine/roadmap edits.

END OF COMPLETE REVIEW PACK — P6-HQA-NEWPROJECT-01 (REPUBLISH FULL)
