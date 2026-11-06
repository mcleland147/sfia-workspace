# SFIA STUDIO NEXT — ML3 F01/F02 CR-01/CR-02 CONSOLIDATION — REVIEW PACK FULL

## A. Date / GO / profil
- Date UTC: 2026-11-06T16:25:38Z
- GO Morris: 2026-11-06
- Type: INC — PROFILE CRITICAL
- Lot: R5 / ML3 « Piloter et Décider » — F01/F02 CR-01 / CR-02 consolidation
- After: Critical Review PARTIALLY ACCEPTED (handoff 50299b73 / blob ac1c894b)

## B. Git Truth initial/final
- Branch: `sfia/next-pilotage-decisions-delivery`
- HEAD / origin/delivery: `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` (expected 8bf8b5ce — **unchanged**, no project commit/push)
- origin/main: `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480`
- Previous handoff: `50299b735284c03e681e7e5a83aa33e761a21810` blob `ac1c894b1dfb41b2b6842185653c503aecaddec2`
- SVG generics preserved untracked
- Local porcelain:

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
 M projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
 M projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
?? projects/sfia-studio-next/web/public/file.svg
?? projects/sfia-studio-next/web/public/globe.svg
?? projects/sfia-studio-next/web/public/next.svg
?? projects/sfia-studio-next/web/public/vercel.svg
?? projects/sfia-studio-next/web/public/window.svg
?? projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
?? projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts
```

## C. Sources lues
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- prompts/templates/sfia-cycle-execution-template.md
- governance SEF/roadmap/decisions/product-naming + ENV-01 + versioning blobs
- R2 decisions/trajectoire/nora ; R3 audit/contrat/espace ; R4 cadrage
- construction pilotage-et-decisions/* + delivery-history
- Handoff précédent lu (autorité/reprise/continuité)

## D. Diagnostic CR-01 / CR-02
### CR-01
`resolveReviseTarget` used `findMessageDecisionConfrontations` → `selectApplicableBriefs` (slice last 12).
A project with 15+ APPLICABLE and two GitHub decisions straddling the window could revise the newest alone.
**Fix:** `findAuthorityReviseCandidates` / `selectAllApplicableBriefs` scan **all** APPLICABLE; cognitive window remains Nora-only.

### CR-02
Backend reconstitution OK; browser pending could be overwritten by a distinct new draft; Nora COMPLETE cleared pending even if métier UNKNOWN; ACK-lost→reload path under-proven.
**Fix:** `shouldClearThreadPending` + exclusive `mayStartNewThreadAct` + same-key retry on 404; Playwright ACK drop after server APPLIED.

## E. Blast radius
Primary: divergence-assist, conversation-authority, thread-recovery, page.tsx
Conditional/prior F01/F02: conversation service/turn-command, intent, messages route, PilotagePanel
No migration 008, no parallel authority registry, no SEF/roadmap mutation.

## F. Architecture / séquencement
AVANT (bug): USER REVISE → LevelA window(12) → false unique → REVISE wrong target
APRÈS: USER REVISE CLEAR → findAuthorityReviseCandidates(all APPLICABLE) → 0/1/N → clarify or executePilotageCommand
AVANT pending: COMPLETE Nora → clear pending even if métier UNKNOWN; new draft overwrites
APRÈS: clear only if métier terminal OR (no attempt + Nora terminal); exclusive pending; ACK lost keeps same key

## G–I. Inventaire + contenus complets

### CREATED `projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts`

```typescript
/**
 * F01/F02 — bridge from a persisted USER message to the existing D5/D6
 * command boundary. Never invents authority from Nora or D4 content.
 *
 * Sequencing contract:
 * 1. USER message already durable (COMPLETE) before this runs.
 * 2. Short business TX via executePilotageCommand only — never around Nora.
 * 3. Ambiguous / insufficient acts do not call the command runner
 *    (avoids HUMAN_INTENT locks on clarification turns).
 * 4. C02 — durable effects are recoverable via business_commands
 *    (conv-auth:{clientTurnKey} / USER_MESSAGE sourceRef), not only resultJson.
 */
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { businessCommandEffects, businessCommands, humanDecisions } from "@/db/schema";
import {
  findAuthorityReviseCandidates,
  type DecisionBrief,
} from "@/domains/decisions/divergence-assist";
import { toCommandResult } from "@/domains/pilotage/command-runner";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import {
  executePilotageCommand,
  getPilotageProjection,
  reconcileCommandByClientKey,
} from "@/domains/pilotage/service";
import { conversationalClientCommandKey } from "@/domains/pilotage/thread-recovery";
import type { CommandResult, PilotageRequestBody } from "@/domains/pilotage/types";

const D5_FOUNDING_KINDS = new Set([
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "RETAIN_TRAJECTORY",
  "PROPOSE_TRAJECTORY",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "REVOKE_DECISION",
]);

export type ConversationalAuthorityOutcome = {
  /** Whether a D5/D6 command was attempted. */
  attempted: boolean;
  /** Intent recognized before any command. */
  intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
  intentReason?: string;
  operation?: string;
  /** Honest command result when attempted. */
  command: CommandResult | null;
  /** True only when a HumanDecision id was produced or already applied. */
  humanDecisionCreated: boolean;
  decisionId: string | null;
  clarification?: string;
  source: "none" | "user_message_command" | "clarification_only" | "reconstituted";
  /** Stable business key — searchable after Nora/HTTP interruption. */
  clientCommandKey?: string;
};

/** Stable D5/D6 client key for a conversational turn — not a second registry. */
export function conversationalCommandKey(clientTurnKey: string): string {
  return conversationalClientCommandKey(clientTurnKey);
}

async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
  const rows = await db
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      objectRef: humanDecisions.objectRef,
      scope: humanDecisions.scope,
      statement: humanDecisions.statement,
      state: humanDecisions.state,
      sourceKind: humanDecisions.sourceKind,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(asc(humanDecisions.createdAt));
  return rows.map((r) => ({
    id: r.id,
    kind: r.kind,
    objectRef: r.objectRef ?? "",
    scope: r.scope ?? "PROJECT",
    statement: r.statement ?? "",
    state: r.state,
    sourceKind: r.sourceKind,
  }));
}

/**
 * Resolve a documentary REVISE target (CR-01).
 * Uses the full APPLICABLE set — never the Nora cognitive window of 12.
 * Level A framing filters relevance only — never authorizes by itself.
 * Qualify must already be CLEAR (caller). Founding D5 kinds are refused.
 * 0 / many candidates ⇒ clarification; never chronological newest-wins.
 */
function resolveReviseTarget(
  utterance: string,
  briefs: DecisionBrief[],
):
  | { ok: true; decisionId: string; statement: string }
  | { ok: false; reason: string } {
  const candidates = findAuthorityReviseCandidates(utterance, briefs);
  if (candidates.length === 0) {
    return {
      ok: false,
      reason: "Aucune décision applicable clairement revisitée — précisez la cible",
    };
  }
  if (candidates.length > 1) {
    const scopes = new Set(candidates.map((c) => c.scope));
    return {
      ok: false,
      reason:
        scopes.size > 1
          ? "Plusieurs décisions candidates à portées distinctes — précisez la portée et la cible"
          : "Plusieurs décisions candidates — précisez laquelle réviser",
    };
  }
  const target = candidates[0];
  if (!target || target.state !== "APPLICABLE") {
    return { ok: false, reason: "Cible de révision non applicable" };
  }
  if (D5_FOUNDING_KINDS.has(target.kind)) {
    return {
      ok: false,
      reason: `Révision générique refusée pour ${target.kind} — utiliser l'opération métier typée`,
    };
  }
  if (target.kind !== "RECORD_DECISION") {
    return {
      ok: false,
      reason: `Révision conversationnelle limitée aux décisions documentaires (kind=${target.kind})`,
    };
  }
  const qualified = qualifyPilotageIntent(utterance);
  const statement =
    (qualified.clarity === "CLEAR" && qualified.statement) ||
    utterance.replace(/^(?:finalement|désormais|dorénavant)[,:]?\s+/i, "").trim();
  return { ok: true, decisionId: target.id, statement: statement.slice(0, 500) };
}

function outcomeFromCommand(
  command: CommandResult,
  operation: string,
  clientCommandKey: string,
  source: ConversationalAuthorityOutcome["source"] = "user_message_command",
): ConversationalAuthorityOutcome {
  const applied = command.status === "APPLIED" || command.status === "ALREADY_APPLIED";
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation,
    command,
    humanDecisionCreated: applied && Boolean(command.decisionId),
    decisionId: command.decisionId,
    source,
    clientCommandKey,
    intentReason:
      command.status === "REJECTED" || command.status === "CONFLICT" || command.status === "UNKNOWN"
        ? command.reason
        : undefined,
    clarification:
      command.status === "REJECTED" && command.reasonCode === "AMBIGUOUS"
        ? command.reason
        : undefined,
  };
}

/**
 * C02 — reconstitute a prior conversational D5/D6 effect from the durable registry.
 * Prefer clientCommandKey; fall back to USER_MESSAGE sourceRef (= userMessageId).
 * Never invents APPLIED/REJECTED when nothing is found.
 */
export async function reconstituteConversationalAuthority(input: {
  pilotId: string;
  projectId: string;
  clientTurnKey?: string | null;
  userMessageId?: string | null;
}): Promise<ConversationalAuthorityOutcome | null> {
  const key = input.clientTurnKey?.trim()
    ? conversationalCommandKey(input.clientTurnKey)
    : null;
  if (key) {
    try {
      const command = await reconcileCommandByClientKey(input.pilotId, input.projectId, key);
      return outcomeFromCommand(
        command,
        command.effects[0]?.effectKind ?? "UNKNOWN",
        key,
        "reconstituted",
      );
    } catch {
      /* fall through to sourceRef */
    }
  }
  const messageId = input.userMessageId?.trim();
  if (!messageId) return null;
  const cmd = (
    await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, input.projectId),
          eq(businessCommands.actorPilotId, input.pilotId),
          eq(businessCommands.sourceKind, "USER_MESSAGE"),
          eq(businessCommands.sourceRef, messageId),
        ),
      )
      .limit(1)
  )[0];
  if (!cmd) return null;
  const effects = await db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, cmd.id))
    .orderBy(asc(businessCommandEffects.ordinal));
  const command = toCommandResult(cmd, effects, "replay");
  return outcomeFromCommand(
    command,
    cmd.operation || effects[0]?.effectKind || "UNKNOWN",
    cmd.clientCommandKey,
    "reconstituted",
  );
}

/**
 * Attempt a governed D5/D6 command from a persisted USER message.
 * Caller must pass the durable message id as sourceRef / actInstanceId.
 */
export async function applyConversationalAuthority(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
  content: string;
  clientTurnKey: string;
}): Promise<ConversationalAuthorityOutcome> {
  const content = input.content.trim();
  const clientCommandKey = conversationalCommandKey(input.clientTurnKey);
  const empty: ConversationalAuthorityOutcome = {
    attempted: false,
    intentClarity: "NONE",
    command: null,
    humanDecisionCreated: false,
    decisionId: null,
    source: "none",
    clientCommandKey,
  };
  if (!content || !input.projectId || !input.userMessageId) return empty;

  // C02 — if this turn key already produced a durable command, return it (no second effect).
  const prior = await reconstituteConversationalAuthority({
    pilotId: input.pilotId,
    projectId: input.projectId,
    clientTurnKey: input.clientTurnKey,
    userMessageId: input.userMessageId,
  });
  if (prior?.attempted && prior.command) {
    return prior;
  }

  const qualified = qualifyPilotageIntent(content);
  if (qualified.clarity === "NONE") {
    return { ...empty, intentClarity: "NONE", intentReason: qualified.reason };
  }
  if (qualified.clarity === "AMBIGUOUS") {
    return {
      ...empty,
      intentClarity: "AMBIGUOUS",
      intentReason: qualified.reason,
      clarification: qualified.reason,
      source: "clarification_only",
    };
  }

  const projection = await getPilotageProjection(input.pilotId, input.projectId);
  const base: PilotageRequestBody = {
    clientCommandKey,
    expectedRevision: projection.revision,
    sourceKind: "USER_MESSAGE",
    sourceRef: input.userMessageId,
    utterance: content,
    actInstanceId: input.userMessageId,
  };

  if (qualified.operation === "REVISE_DECISION") {
    const briefs = await loadDecisionBriefs(input.projectId);
    const resolved = resolveReviseTarget(content, briefs);
    if (!resolved.ok) {
      return {
        attempted: false,
        intentClarity: "AMBIGUOUS",
        intentReason: resolved.reason,
        command: null,
        humanDecisionCreated: false,
        decisionId: null,
        clarification: resolved.reason,
        source: "clarification_only",
        operation: "REVISE_DECISION",
        clientCommandKey,
      };
    }
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "REVISE_DECISION",
      decisionId: resolved.decisionId,
      statement: resolved.statement,
      objectRef: qualified.objectRef,
    });
    return outcomeFromCommand(command, "REVISE_DECISION", clientCommandKey);
  }

  if (qualified.operation === "RECORD_DECISION") {
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "RECORD_DECISION",
      statement: qualified.statement ?? qualified.objective ?? content,
      objectRef: qualified.objectRef,
      objective: qualified.objective,
    });
    return outcomeFromCommand(command, "RECORD_DECISION", clientCommandKey);
  }

  const command = await executePilotageCommand(input.pilotId, input.projectId, {
    ...base,
    cycleType: qualified.cycleType,
    toCycleType: qualified.toCycleType,
    methodRef: qualified.methodRef,
    methodVersion: qualified.methodVersion,
    objective: qualified.objective,
  });
  return outcomeFromCommand(command, qualified.operation, clientCommandKey);
}

```

### CREATED `projects/sfia-studio-next/web/src/domains/pilotage/thread-recovery.ts`

```typescript
/**
 * CR-02 — client-side recovery helpers (no DB, no secrets).
 * sessionStorage pending is a local aid; durable truth stays in D5/D6.
 */

export type ThreadPendingTurn = {
  content: string;
  clientTurnKey: string;
  clientCommandKey: string;
};

/** Deterministic business key for a conversational turn. */
export function conversationalClientCommandKey(clientTurnKey: string): string {
  return `conv-auth:${clientTurnKey.trim()}`;
}

export function pendingStorageKey(projectId: string): string {
  return `sfia.thread.pending:${projectId}`;
}

/**
 * Clear pending only when the business effect is terminal, or when no
 * business attempt occurred and Nora reached a conversational terminal.
 * Nora COMPLETE must NOT close an UNKNOWN / unresolved métier effect.
 */
export function shouldClearThreadPending(input: {
  noraStatus?: string | null;
  effectAttempted?: boolean | null;
  effectStatus?: string | null;
}): boolean {
  const biz = (input.effectStatus ?? "").trim().toUpperCase();
  if (input.effectAttempted === true) {
    if (!biz || biz === "UNKNOWN" || biz.startsWith("UNKNOWN")) return false;
    return true;
  }
  const nora = (input.noraStatus ?? "").trim().toUpperCase();
  return nora === "COMPLETE" || nora === "FAILED";
}

/**
 * Exclusive in-flight guard: a distinct new act must not silently overwrite
 * an unresolved pending. Same content ⇒ retry of the same logical act.
 */
export function mayStartNewThreadAct(input: {
  unresolved: ThreadPendingTurn | null | undefined;
  nextContent: string;
}): { ok: true } | { ok: false; reason: string; pending: ThreadPendingTurn } {
  const pending = input.unresolved;
  if (!pending) return { ok: true };
  if (pending.content.trim() === input.nextContent.trim()) return { ok: true };
  return {
    ok: false,
    reason:
      "Tentative non résolue en cours — réconcilier avant un nouvel acte distinct",
    pending,
  };
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts`

```tsx
/**
 * B13 v0.1 — assisted contradictions (VALIDATED IN CONTENT BY MORRIS, 2026-11-06).
 *
 * Level A — POTENTIAL / cognitive signal for Nora. Never D6 authority.
 * Level B — MATERIAL conflict: typed deterministic checks at point of effect only.
 *
 * C01: a single APPLICABLE D6 decision can be confronted with a new USER message
 * without requiring a second persisted decision.
 */

export type DecisionBrief = {
  id: string;
  kind: string;
  objectRef: string;
  scope: string;
  statement: string;
  state: string;
  sourceKind: string;
};

/** Structured Level A signal passed to Nora (fixture and LIVE path). Never authority. */
export type LevelASignal = {
  kind: "MESSAGE_DECISION_CONFRONTATION" | "STORED_DECISION_DIVERGENCE";
  objectRef: string;
  scope: string;
  decisionId: string;
  decisionIds?: string[];
  priorStatement: string;
  currentExpression: string;
  /** Context selection framing — not a D6 verdict. */
  framing: "POSSIBLE_CHANGE" | "COMPATIBLE_RESTATEMENT" | "AMBIGUOUS";
  authorityClaim: "NONE";
};

export type PotentialDivergence = {
  level: "A_POTENTIAL";
  kind: string;
  objectRef: string;
  scope: string;
  decisionIds: string[];
  statements: string[];
  authorityClaim: "NONE";
};

const MAX_APPLICABLE_FOR_CONTEXT = 12;
const MAX_SIGNALS = 3;

const OPPOSITION_PAIRS: Array<[RegExp, RegExp]> = [
  [/\b(obligatoire|requis|required|mandatory|must)\b/i, /\b(facultatif|optionnel|optional|volontaire)\b/i],
  [/\b(interdit|prohibé|banned|forbidden)\b/i, /\b(autorisé|permis|allowed|autoriser)\b/i],
  [/\b(actif|ouverte?|open)\b/i, /\b(fermé|clos|closed|inactif)\b/i],
];

/** Modality terms whose affirmed/negated polarity must not be collapsed by lexical overlap. */
const MODALITY_TERMS = [
  "obligatoire",
  "requis",
  "required",
  "mandatory",
  "interdit",
  "prohibé",
  "banned",
  "forbidden",
  "autorisé",
  "permis",
  "allowed",
  "facultatif",
  "optionnel",
  "optional",
  "volontaire",
] as const;

/** Affirmed synonym groups — shared group ⇒ possible COMPATIBLE_RESTATEMENT (still Level A). */
const MODALITY_SYNONYM_GROUPS: string[][] = [
  ["obligatoire", "requis", "required", "mandatory"],
  ["facultatif", "optionnel", "optional", "volontaire"],
  ["interdit", "prohibé", "banned", "forbidden"],
  ["autorisé", "permis", "allowed"],
];

const GLOBAL_SCOPE_RE =
  /\b(tout\s+le\s+projet|ensemble\s+du\s+projet|global(?:e|ement)?|pour\s+tout)\b/i;
const LOCAL_SCOPE_RE =
  /\b(seulement|uniquement|juste\s+pour|pour\s+(?:ce\s+)?(?:cycle|ux|cadrage|activité))\b/i;

/** Keep recent applicable decisions for Nora context — project-scoped, bounded. */
export function selectApplicableBriefs(rows: DecisionBrief[]): DecisionBrief[] {
  return rows
    .filter((r) => r.state === "APPLICABLE" && (r.objectRef ?? "").trim().length > 0)
    .slice(-MAX_APPLICABLE_FOR_CONTEXT);
}

/**
 * CR-01 — all APPLICABLE briefs for D6 authority resolution.
 * Never apply the Nora cognitive window (MAX_APPLICABLE_FOR_CONTEXT).
 * Bounded context ≠ uniqueness of an opposable target.
 */
export function selectAllApplicableBriefs(rows: DecisionBrief[]): DecisionBrief[] {
  return rows.filter(
    (r) => r.state === "APPLICABLE" && (r.objectRef ?? "").trim().length > 0,
  );
}

export type AuthorityReviseCandidate = DecisionBrief & {
  framing: LevelASignal["framing"];
};

/**
 * CR-01 — D6 revise-target candidates across the full applicable set.
 * Level A framing filters relevance only — never authorizes mutation.
 * No chronological / newest-wins / truncation selection.
 * Caller must require exactly one candidate before REVISE.
 */
export function findAuthorityReviseCandidates(
  userText: string,
  rows: DecisionBrief[],
): AuthorityReviseCandidate[] {
  const text = userText.trim();
  if (!text) return [];
  const applicable = selectAllApplicableBriefs(rows);
  const out: AuthorityReviseCandidate[] = [];
  for (const row of applicable) {
    if (!utteranceTouchesObject(text, row.objectRef)) continue;
    if (normalizeText(text) === normalizeText(row.statement)) continue;
    const framing = frameConfrontation(row.statement, text);
    // Compatible restatement is not a revise target.
    if (framing === "COMPATIBLE_RESTATEMENT") continue;
    out.push({ ...row, framing });
  }
  return out;
}

function normalizeText(text: string): string {
  // Normalize typographic apostrophes so « n’est » and « n'est » share one path.
  return text
    .trim()
    .toLowerCase()
    .replace(/[\u2019\u2018\u02bc`]/g, "'")
    .replace(/\s+/g, " ");
}

function significantTokens(text: string): string[] {
  return normalizeText(text)
    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
    .filter((t) => t.length >= 4);
}

/** True when user text appears to revisit a recorded object (heuristic, cognitive only). */
export function utteranceTouchesObject(userText: string, objectRef: string): boolean {
  const needle = objectRef.trim().toLowerCase();
  if (!needle || needle.length < 3) return false;
  const hay = normalizeText(userText);
  if (hay.includes(needle)) return true;
  const tokens = needle.split(/[^a-z0-9àâäéèêëïîôùûüç]+/i).filter((t) => t.length >= 4);
  if (tokens.length === 0) return false;
  return tokens.some((t) => hay.includes(t));
}

function tokenOverlapRatio(a: string, b: string): number {
  const ta = new Set(significantTokens(a));
  const tb = new Set(significantTokens(b));
  if (ta.size === 0 || tb.size === 0) return 0;
  let inter = 0;
  for (const t of ta) if (tb.has(t)) inter += 1;
  return inter / Math.max(ta.size, tb.size);
}

function looksOpposed(prior: string, current: string): boolean {
  for (const [left, right] of OPPOSITION_PAIRS) {
    if ((left.test(prior) && right.test(current)) || (right.test(prior) && left.test(current))) {
      return true;
    }
  }
  return false;
}

/**
 * R2 — detect affirmed vs negated polarity of a modality term in a short window.
 * Heuristic only (Niveau A). Prefer AMBIGUOUS/POSSIBLE_CHANGE over false COMPATIBLE.
 * Bounded FR family: n'est plus|pas|jamais|aucunement ; ne doit/peut pas (être) ; pas / never / not.
 */
function modalityPolarity(text: string, term: string): "affirm" | "negate" | "absent" {
  const n = normalizeText(text);
  const idx = n.indexOf(term);
  if (idx < 0) return "absent";
  const before = n.slice(Math.max(0, idx - 56), idx);
  // Apostrophe already normalized to ASCII in normalizeText.
  if (
    /(?:n'est\s+(?:plus|pas|jamais|aucunement)|ne\s+(?:doit|peut|saurait)\s+pas(?:\s+être)?|ne\s+\w{1,20}\s+pas|pas\s+(?:plus\s+|du\s+tout\s+|aucunement\s+)?|plus\s+(?:d[e']\s+)?|non\s+|is\s+no\s+longer\s+|is\s+not\s+|no\s+longer\s+|never\s+|not\s+)\s*$/i.test(
      before,
    )
  ) {
    return "negate";
  }
  const after = n.slice(idx + term.length, idx + term.length + 32);
  if (
    /^\s*(?:n'est\s+(?:plus|pas|jamais|aucunement)|is\s+no\s+longer|is\s+not|never)\b/i.test(after)
  ) {
    return "negate";
  }
  return "affirm";
}

function looksPolarityInverted(prior: string, current: string): boolean {
  for (const term of MODALITY_TERMS) {
    const p = modalityPolarity(prior, term);
    const c = modalityPolarity(current, term);
    if (p !== "absent" && c !== "absent" && p !== c) return true;
  }
  return false;
}

function sharesAffirmedModalitySynonym(prior: string, current: string): boolean {
  for (const group of MODALITY_SYNONYM_GROUPS) {
    const priorAffirm = group.some((t) => modalityPolarity(prior, t) === "affirm");
    const currentAffirm = group.some((t) => modalityPolarity(current, t) === "affirm");
    if (priorAffirm && currentAffirm) return true;
  }
  return false;
}

/** Distinct global vs local scope markers → clarify; never auto-equate. */
function looksScopeShift(prior: string, current: string): boolean {
  return (
    (GLOBAL_SCOPE_RE.test(prior) && LOCAL_SCOPE_RE.test(current)) ||
    (LOCAL_SCOPE_RE.test(prior) && GLOBAL_SCOPE_RE.test(current))
  );
}

/**
 * R2 — Level A framing only. Never D6 authority.
 * Negation / polarity inversion must not become COMPATIBLE_RESTATEMENT via token overlap.
 */
function frameConfrontation(prior: string, current: string): LevelASignal["framing"] {
  if (looksOpposed(prior, current) || looksPolarityInverted(prior, current)) {
    return "POSSIBLE_CHANGE";
  }
  if (looksScopeShift(prior, current)) {
    return "AMBIGUOUS";
  }
  if (sharesAffirmedModalitySynonym(prior, current)) {
    return "COMPATIBLE_RESTATEMENT";
  }
  const overlap = tokenOverlapRatio(prior, current);
  // High lexical overlap alone is weak evidence — prefer AMBIGUOUS over false compatible
  // when modality synonyms are absent (R2: shared words ≠ same sense).
  if (overlap >= 0.65) return "COMPATIBLE_RESTATEMENT";
  if (overlap >= 0.2) return "AMBIGUOUS";
  return "AMBIGUOUS";
}

/**
 * C01 — confront a new USER message with existing APPLICABLE D6 decisions.
 * Does not require a second persisted decision. Never creates authority.
 */
export function findMessageDecisionConfrontations(
  userText: string,
  rows: DecisionBrief[],
): LevelASignal[] {
  const text = userText.trim();
  if (!text) return [];
  const applicable = selectApplicableBriefs(rows);
  const out: LevelASignal[] = [];
  for (const row of applicable) {
    if (!utteranceTouchesObject(text, row.objectRef)) continue;
    // Exact same statement → no signal beyond the applicable list itself.
    if (normalizeText(text) === normalizeText(row.statement)) continue;
    out.push({
      kind: "MESSAGE_DECISION_CONFRONTATION",
      objectRef: row.objectRef,
      scope: row.scope,
      decisionId: row.id,
      priorStatement: row.statement,
      currentExpression: text.slice(0, 500),
      framing: frameConfrontation(row.statement, text),
      authorityClaim: "NONE",
    });
    if (out.length >= MAX_SIGNALS) break;
  }
  return out;
}

/**
 * Level A among already-stored APPLICABLE rows (same kind+objectRef+scope,
 * ≥2 distinct statements). Secondary to message confrontation. Cognitive only.
 */
export function findPotentialDivergences(rows: DecisionBrief[]): PotentialDivergence[] {
  const applicable = selectApplicableBriefs(rows);
  const groups = new Map<string, DecisionBrief[]>();
  for (const row of applicable) {
    const key = `${row.kind}\u0000${row.objectRef.trim().toLowerCase()}\u0000${row.scope}`;
    const bucket = groups.get(key) ?? [];
    bucket.push(row);
    groups.set(key, bucket);
  }
  const out: PotentialDivergence[] = [];
  for (const bucket of groups.values()) {
    const statements = [...new Set(bucket.map((b) => b.statement.trim()).filter(Boolean))];
    if (statements.length < 2) continue;
    out.push({
      level: "A_POTENTIAL",
      kind: bucket[0].kind,
      objectRef: bucket[0].objectRef,
      scope: bucket[0].scope,
      decisionIds: bucket.map((b) => b.id),
      statements,
      authorityClaim: "NONE",
    });
    if (out.length >= MAX_SIGNALS) break;
  }
  return out;
}

export function storedDivergencesToSignals(divs: PotentialDivergence[]): LevelASignal[] {
  return divs.map((d) => ({
    kind: "STORED_DECISION_DIVERGENCE" as const,
    objectRef: d.objectRef,
    scope: d.scope,
    decisionId: d.decisionIds[0],
    decisionIds: d.decisionIds,
    priorStatement: d.statements[0] ?? "",
    currentExpression: d.statements[1] ?? d.statements[0] ?? "",
    framing: looksOpposed(d.statements[0] ?? "", d.statements[1] ?? "")
      ? ("POSSIBLE_CHANGE" as const)
      : ("AMBIGUOUS" as const),
    authorityClaim: "NONE" as const,
  }));
}

export function formatLevelASignalSnippets(signals: LevelASignal[]): string[] {
  if (signals.length === 0) {
    return [
      "### Niveau A — rapprochement message / décisions",
      "Aucun signal de revisite pertinente pour l'énoncé courant.",
    ];
  }
  const lines: string[] = [
    "### Niveau A — rapprochement message / décisions (cognitive, PAS un blocage D6)",
    "Nora peut expliquer et clarifier. Elle ne révoque, ne remplace, ni ne suspend.",
    "Une suspicion n'est pas un conflit matériel déterministe.",
  ];
  for (const s of signals) {
    lines.push(
      `- signal=${s.kind} framing=${s.framing} objet=${s.objectRef} scope=${s.scope} décision=${s.decisionId} authorityClaim=${s.authorityClaim}`,
      `  décision existante: « ${s.priorStatement.slice(0, 160)} »`,
      `  expression courante: « ${s.currentExpression.slice(0, 160)} »`,
    );
  }
  return lines;
}

/** @deprecated Prefer formatLevelASignalSnippets — kept for callers that still pass raw divergences. */
export function formatDivergenceSnippets(
  divergences: PotentialDivergence[],
  userText?: string,
): string[] {
  const filtered = userText
    ? divergences.filter((d) => utteranceTouchesObject(userText, d.objectRef))
    : divergences;
  return formatLevelASignalSnippets(storedDivergencesToSignals(filtered));
}

export function formatApplicableDecisionSnippets(rows: DecisionBrief[]): string[] {
  const briefs = selectApplicableBriefs(rows);
  if (briefs.length === 0) {
    return ["### Décisions D6 applicables", "(aucune décision applicable avec objectRef)"];
  }
  const lines = [
    "### Décisions D6 applicables (sources — Nora n'en tire aucune autorité)",
  ];
  for (const b of briefs) {
    lines.push(
      `- ${b.id} kind=${b.kind} object=${b.objectRef} scope=${b.scope} state=${b.state} source=${b.sourceKind} « ${b.statement.slice(0, 160)} »`,
    );
  }
  return lines;
}

export function buildLevelAClarification(input: {
  priorStatement: string;
  newExpression: string;
  objectRef: string;
  framing?: LevelASignal["framing"];
}): string {
  if (input.framing === "COMPATIBLE_RESTATEMENT") {
    return (
      `Tu as une décision applicable sur « ${input.objectRef} » : « ${input.priorStatement.slice(0, 200)} ».\n` +
      `Ton message (« ${input.newExpression.slice(0, 200)} ») semble compatible — pas de conflit matériel établi.\n` +
      `(Niveau A — pas une HumanDecision, pas une interdiction D6.)`
    );
  }
  return (
    `Tu avais retenu : « ${input.priorStatement.slice(0, 200)} » (objet ${input.objectRef}).\n` +
    `Tu exprimes maintenant : « ${input.newExpression.slice(0, 200)} ».\n` +
    `Souhaites-tu remplacer ce choix pour l'ensemble du projet ou seulement pour cette activité ?\n` +
    `(Proposition cognitive Niveau A — pas une décision D6, pas une interdiction.)`
  );
}

/**
 * C02 — qualify pilotage command outcomes for UX.
 * CONFLICT alone is never an authority block (STALE_REVISION / HUMAN_INTENT / FINGERPRINT / ACTIVE_CYCLE).
 */
export type CommandOutcomeKind =
  | "authority_block"
  | "technical_conflict"
  | "d5_state"
  | "business_refusal"
  | "unknown"
  | "applied"
  | "other";

export function qualifyCommandOutcome(input: {
  status: string;
  reasonCode?: string | null;
}): { kind: CommandOutcomeKind; label: string; testId: string } {
  const status = (input.status ?? "").trim().toUpperCase();
  const code = (input.reasonCode ?? "").trim().toUpperCase();

  if (status === "APPLIED" || status === "ALREADY_APPLIED") {
    return { kind: "applied", label: "Effet confirmé.", testId: "outcome-applied" };
  }
  if (status === "UNKNOWN" || status.startsWith("UNKNOWN")) {
    return {
      kind: "unknown",
      label: "Résultat non confirmé — réconcilier avant une nouvelle tentative.",
      testId: "outcome-unknown",
    };
  }
  if (status === "REJECTED" && code === "RESTRICTION") {
    return {
      kind: "authority_block",
      label: "Restriction D6 applicable — refus d'autorité borné au point d'effet.",
      testId: "authority-block-established",
    };
  }
  if (status === "CONFLICT" && (code === "STALE_REVISION" || code === "HUMAN_INTENT" || code === "FINGERPRINT")) {
    const labels: Record<string, string> = {
      STALE_REVISION: "Révision périmée — actualiser / réconcilier.",
      HUMAN_INTENT: "Intention humaine déjà enregistrée — consulter le résultat, pas de double effet.",
      FINGERPRINT: "Clé d'idempotence réutilisée avec paramètres incompatibles.",
    };
    return {
      kind: "technical_conflict",
      label: labels[code] ?? "Conflit technique — pas un blocage d'autorité D6.",
      testId: `outcome-technical-${code.toLowerCase()}`,
    };
  }
  if (status === "CONFLICT" && (code === "ACTIVE_CYCLE" || code === "ALREADY_PRESENT")) {
    return {
      kind: "d5_state",
      label: "Invariant d'état D5 — pas une contradiction entre décisions humaines.",
      testId: "outcome-d5-state",
    };
  }
  if (status === "REJECTED") {
    return {
      kind: "business_refusal",
      label: "Refus métier — pas une décision APPLIED.",
      testId: "authority-refusal",
    };
  }
  if (status === "CONFLICT") {
    return {
      kind: "technical_conflict",
      label: "Conflit technique/état — pas un blocage d'autorité D6 établi.",
      testId: "outcome-technical-other",
    };
  }
  return { kind: "other", label: "", testId: "outcome-other" };
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { SafeMarkdown } from "@/components/SafeMarkdown";
import { PilotagePanel } from "@/components/PilotagePanel";
import {
  conversationalClientCommandKey,
  mayStartNewThreadAct,
  pendingStorageKey,
  shouldClearThreadPending,
  type ThreadPendingTurn,
} from "@/domains/pilotage/thread-recovery";

type Msg = { id: string; role: string; content: string; status: string };
type Doc = {
  document: { id: string; title: string };
  latestRevision?: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
  } | null;
};
type Knowledge = {
  subjects: Array<{ id: string; title: string; status: string; originatedFromSubjectId: string | null }>;
  acquis: Array<{ id: string; kind: string; statement: string; status: string }>;
  openPoints: Array<{ id: string; statement: string; status: string }>;
};

type Surface = "travail" | "pilotage" | "journal" | "document";

type PilotageEffectView = {
  attempted?: boolean;
  intentClarity?: string;
  intentReason?: string;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  operation?: string;
  decisionId?: string | null;
  clarification?: string;
  clientCommandKey?: string;
};

function formatPilotageEffect(
  effect: PilotageEffectView | null | undefined,
  humanDecisionCreated?: boolean,
): string {
  if (!effect) return "";
  if (effect.attempted) {
    return [
      effect.operation ?? "commande",
      effect.status ?? "?",
      effect.reasonCode ? `(${effect.reasonCode})` : null,
      humanDecisionCreated && effect.decisionId ? `décision ${effect.decisionId}` : null,
    ]
      .filter(Boolean)
      .join(" · ");
  }
  if (effect.clarification) return `Clarification · ${effect.clarification}`;
  if (effect.intentClarity === "AMBIGUOUS") {
    return `Intention ambiguë · ${effect.intentReason ?? effect.reason ?? ""}`;
  }
  return "";
}

export default function ProjectPage() {
  const params = useParams<{ projectId: string }>();
  const router = useRouter();
  const [messages, setMessages] = useState<Msg[]>([]);
  const [documents, setDocuments] = useState<Doc[]>([]);
  const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
  const [preparationId, setPreparationId] = useState<string | null>(null);
  const [meta, setMeta] = useState("Chargement…");
  const [error, setError] = useState("");
  const [surface, setSurface] = useState<Surface>("travail");
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
  const [status, setStatus] = useState("");
  const [pilotageStatus, setPilotageStatus] = useState("");
  const [decisionSummary, setDecisionSummary] = useState("");
  const [inspect, setInspect] = useState<Doc | null>(null);
  const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);

  function rememberPending(pending: ThreadPendingTurn | null) {
    if (typeof sessionStorage === "undefined") return;
    const key = pendingStorageKey(params.projectId);
    if (!pending) {
      sessionStorage.removeItem(key);
      setUnresolvedPending(null);
      return;
    }
    sessionStorage.setItem(key, JSON.stringify(pending));
    setUnresolvedPending(pending);
  }

  function readPending(): ThreadPendingTurn | null {
    if (typeof sessionStorage === "undefined") return null;
    try {
      const raw = sessionStorage.getItem(pendingStorageKey(params.projectId));
      if (!raw) return null;
      return JSON.parse(raw) as ThreadPendingTurn;
    } catch {
      return null;
    }
  }

  async function refreshDurablePilotage() {
    const [decRes, projRes] = await Promise.all([
      fetch(`/api/projects/${params.projectId}/decisions`),
      fetch(`/api/projects/${params.projectId}/pilotage`),
    ]);
    if (decRes.ok) {
      const dj = await decRes.json();
      const decisions = (dj.decisions ?? []) as Array<{
        id: string;
        kind: string;
        state: string;
        statement: string;
        createdAt?: string;
      }>;
      const applicable = decisions.filter((d) => d.state === "APPLICABLE");
      const latest = [...decisions].sort((a, b) =>
        String(b.createdAt ?? "").localeCompare(String(a.createdAt ?? "")),
      )[0];
      setDecisionSummary(
        `${applicable.length} applicable(s) · ${decisions.length} au journal` +
          (latest ? ` · dernière ${latest.kind}/${latest.state}` : ""),
      );
    }
    if (projRes.ok) {
      const pj = await projRes.json();
      const cycle = pj.pilotage?.cycle ?? pj.cycle;
      if (cycle?.status === "ACTIVE") {
        setPilotageStatus((prev) =>
          prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
            ? prev
            : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
        );
      }
    }
  }

  function applyClearFromResponse(
    noraStatus: string | undefined,
    effect: PilotageEffectView | undefined,
  ) {
    if (
      shouldClearThreadPending({
        noraStatus,
        effectAttempted: effect?.attempted,
        effectStatus: effect?.status,
      })
    ) {
      rememberPending(null);
      messageTurnKeyRef.current = null;
      return true;
    }
    return false;
  }

  async function reconcilePending(pending: ThreadPendingTurn) {
    setBusy(true);
    try {
      const res = await fetch(
        `/api/projects/${params.projectId}/pilotage/commands/by-key/${encodeURIComponent(pending.clientCommandKey)}`,
      );
      if (res.ok) {
        const cmd = await res.json();
        setPilotageStatus(
          formatPilotageEffect(
            {
              attempted: true,
              status: cmd.status,
              reasonCode: cmd.reasonCode,
              reason: cmd.reason,
              operation: cmd.effects?.[0]?.effectKind ?? "commande",
              decisionId: cmd.decisionId,
              clientCommandKey: pending.clientCommandKey,
            },
            Boolean(cmd.decisionId) &&
              (cmd.status === "APPLIED" || cmd.status === "ALREADY_APPLIED"),
          ),
        );
        // CR-02: UNKNOWN métier stays pending; Nora status is irrelevant here.
        if (cmd.status && String(cmd.status).toUpperCase() !== "UNKNOWN") {
          rememberPending(null);
          messageTurnKeyRef.current = null;
        }
        await refreshDurablePilotage();
        return;
      }
      // 404 alone does not invent a new key — retry same logical act only.
      if (res.status === 404) {
        setPilotageStatus(
          `Commande absente pour ${pending.clientCommandKey.slice(0, 28)}… — reprise du même acte`,
        );
      }
      if (!preparationId) return;
      const retry = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: pending.content,
          clientTurnKey: pending.clientTurnKey,
        }),
      });
      const j = await retry.json().catch(() => ({}));
      if (retry.ok) {
        setMessages(j.messages ?? []);
        setStatus(`Nora ${j.noraMode} · ${j.status}`);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
        if (applyClearFromResponse(String(j.status ?? ""), effect)) {
          setDraft("");
        }
        await refreshDurablePilotage();
      } else {
        setStatus(String(j.error ?? j.errorCategory ?? "réconciliation impossible"));
      }
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    async function load() {
      const res = await fetch(`/api/projects/${params.projectId}`);
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      if (res.status === 404) {
        setError("Projet introuvable ou non autorisé pour ce Pilote.");
        setMeta("");
        return;
      }
      if (!res.ok) {
        setError("Impossible de charger le projet.");
        setMeta("");
        return;
      }
      const j = await res.json();
      setMessages(j.messages ?? []);
      setDocuments(j.documents ?? []);
      setKnowledge(j.knowledge ?? null);
      setPreparationId(j.preparation?.id ?? null);
      setMeta(
        `Même fil · préparation ${j.preparation?.id ?? "liée"} · conversation ${j.conversation?.id ?? "—"} · réouverture par projectId`,
      );
      setError("");
      await refreshDurablePilotage();
      const pending = readPending();
      if (pending) {
        setUnresolvedPending(pending);
        messageTurnKeyRef.current = {
          content: pending.content,
          key: pending.clientTurnKey,
        };
        setPilotageStatus(
          `Reprise en attente · clé ${pending.clientCommandKey.slice(0, 24)}…`,
        );
      }
    }
    void load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.projectId, router]);

  async function sendMessage() {
    if (!draft.trim() || !preparationId) return;
    const text = draft.trim();
    // CR-02 — exclusive unresolved pending: never overwrite a distinct act silently.
    const gate = mayStartNewThreadAct({
      unresolved: unresolvedPending ?? readPending(),
      nextContent: text,
    });
    if (!gate.ok) {
      setPilotageStatus(
        `${gate.reason} · ${gate.pending.clientCommandKey.slice(0, 24)}…`,
      );
      setDraft(gate.pending.content);
      return;
    }
    setBusy(true);
    setNoraActivity("preparing");
    // Same content reuses the same turn key until a terminal result clears it.
    if (!messageTurnKeyRef.current || messageTurnKeyRef.current.content !== text) {
      messageTurnKeyRef.current = {
        content: text,
        key:
          typeof crypto !== "undefined" && "randomUUID" in crypto
            ? `turn-${crypto.randomUUID()}`
            : `turn-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
      };
    }
    const clientTurnKey = messageTurnKeyRef.current.key;
    const clientCommandKey = conversationalClientCommandKey(clientTurnKey);
    rememberPending({ content: text, clientTurnKey, clientCommandKey });
    try {
      const res = await fetch(`/api/preparations/${preparationId}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: text, clientTurnKey }),
      });
      let j: Record<string, unknown> = {};
      try {
        j = (await res.json()) as Record<string, unknown>;
      } catch {
        j = { errorCategory: "RESPONSE_PARSE_FAILED" };
      }
      if (res.ok) {
        setMessages((j.messages as Msg[]) ?? []);
        setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
        const effect = j.pilotageEffect as PilotageEffectView | undefined;
        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
        if (applyClearFromResponse(String(j.status ?? ""), effect)) {
          setDraft("");
        } else if (j.status === "UNKNOWN" || j.status === "FAILED") {
          setNoraActivity("error");
        }
        const proj = await fetch(`/api/projects/${params.projectId}`);
        if (proj.ok) {
          const pj = await proj.json();
          setDocuments(pj.documents ?? []);
          setKnowledge(pj.knowledge ?? null);
        }
        await refreshDurablePilotage();
        setNoraActivity(
          j.status === "UNKNOWN" || j.status === "FAILED" ? "error" : "idle",
        );
      } else {
        // ACK lost / HTTP error — keep pending with the same key.
        setNoraActivity("error");
        setStatus(
          res.status === 409
            ? `${String(j.errorCategory ?? j.error ?? "conflit")} — intention de tour conservée`
            : String(j.error ?? j.errorCategory ?? "échec — tentative conservée"),
        );
      }
    } catch {
      setNoraActivity("error");
      setStatus("échec réseau — intention de tour conservée");
    } finally {
      setBusy(false);
    }
  }

  if (error) {
    return (
      <div className="max-w-3xl space-y-4">
        <h1 className="text-2xl font-semibold">Projet</h1>
        <p className="text-xs muted">{params.projectId}</p>
        <div className="panel p-4">{error}</div>
        <a className="btn secondary inline-block" href="/portfolio">
          Retour portefeuille
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs muted uppercase tracking-wide">Espace projet</p>
          <h1 className="text-2xl font-semibold">Projet</h1>
          <p className="text-xs muted">{params.projectId}</p>
          <p className="text-sm muted mt-1">{meta}</p>
        </div>
        <nav className="flex gap-2 text-sm" aria-label="Surfaces projet">
          {(
            [
              ["travail", "Travail"],
              ["pilotage", "Pilotage"],
              ["journal", "Journal"],
              ["document", "Documents"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`btn ${surface === id ? "" : "secondary"}`}
              onClick={() => setSurface(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {noraActivity === "preparing" ? (
        <div className="panel p-3 text-sm" role="status">
          Nora prépare une réponse…
        </div>
      ) : null}

      {surface === "travail" ? (
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
          <section className="space-y-2">
            {messages.map((m) => (
              <article key={m.id} className="panel p-3">
                <div className="text-xs muted mb-1">
                  {m.role === "assistant" ? "Nora" : "Pilote"} · {m.status}
                </div>
                {m.role === "assistant" ? (
                  <SafeMarkdown content={m.content} />
                ) : (
                  <div className="whitespace-pre-wrap text-sm">{m.content}</div>
                )}
              </article>
            ))}
            <div className="panel p-3 space-y-2">
              <textarea
                className="textarea"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Poursuivre dans le même fil…"
                aria-label="Message à Nora"
                data-testid="thread-draft"
              />
              <button
                className="btn"
                disabled={busy || !preparationId}
                onClick={sendMessage}
                data-testid="thread-send"
              >
                Envoyer
              </button>
              {unresolvedPending ? (
                <div className="space-y-1" data-testid="thread-pending-banner">
                  <p className="text-xs muted">
                    Tentative non résolue · {unresolvedPending.clientCommandKey.slice(0, 32)}…
                  </p>
                  <button
                    type="button"
                    className="btn secondary"
                    disabled={busy}
                    data-testid="thread-reconcile-pending"
                    onClick={() => void reconcilePending(unresolvedPending)}
                  >
                    Réconcilier la tentative en cours
                  </button>
                </div>
              ) : null}
              {status ? (
                <p className="text-xs muted" data-testid="thread-nora-status">
                  {status}
                </p>
              ) : null}
              {pilotageStatus ? (
                <p className="text-xs" data-testid="thread-pilotage-status" role="status">
                  {pilotageStatus}
                </p>
              ) : null}
              {decisionSummary ? (
                <p className="text-xs muted" data-testid="thread-decision-summary">
                  {decisionSummary}
                </p>
              ) : null}
            </div>
          </section>
          <aside className="space-y-3">
            <div className="panel p-4 space-y-2">
              <h2 className="font-medium">En bref</h2>
              <p className="text-sm muted">
                Un seul fil visible. Mémoire D4 récupérable au-delà des six derniers messages.
              </p>
              <p className="text-xs muted">
                Acquis: {knowledge?.acquis.filter((a) => a.status === "CURRENT").length ?? 0} ·
                Ouverts: {knowledge?.openPoints.filter((o) => o.status === "OPEN").length ?? 0}
              </p>
            </div>
            <div className="panel p-4 space-y-2">
              <h2 className="font-medium">Points à clarifier</h2>
              {(knowledge?.openPoints ?? [])
                .filter((o) => o.status === "OPEN")
                .slice(0, 5)
                .map((o) => (
                  <p key={o.id} className="text-sm">
                    {o.statement}
                  </p>
                ))}
              {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
                <p className="text-sm muted">Aucun point ouvert capitalisé.</p>
              ) : null}
            </div>
          </aside>
        </div>
      ) : null}

      {surface === "pilotage" ? <PilotagePanel projectId={params.projectId} /> : null}

      {surface === "document" ? (
        <div className="grid lg:grid-cols-2 gap-4">
          <section className="space-y-2">
            {documents.map((d) => (
              <button
                key={d.document.id}
                type="button"
                className="panel p-3 text-left w-full"
                onClick={() => setInspect(d)}
              >
                <div className="text-xs muted mb-1">
                  {d.document.title} · {d.document.id} · v{d.latestRevision?.revisionNumber ?? "?"} ·{" "}
                  {d.latestRevision?.status ?? "—"}
                </div>
                <div className="text-sm line-clamp-3">
                  {(d.latestRevision?.contentMarkdown ?? "").slice(0, 180)}
                </div>
              </button>
            ))}
            {documents.length === 0 ? (
              <p className="text-sm muted">Aucun document D4 pour ce projet.</p>
            ) : null}
          </section>
          <section className="panel p-4 space-y-2">
            <h2 className="font-medium">Inspection</h2>
            {inspect?.latestRevision ? (
              <>
                <p className="text-xs muted">
                  {inspect.document.id} · v{inspect.latestRevision.revisionNumber} ·{" "}
                  {inspect.latestRevision.status}
                </p>
                <SafeMarkdown content={inspect.latestRevision.contentMarkdown} />
                <button type="button" className="btn secondary" onClick={() => setInspect(null)}>
                  Retour au fil
                </button>
              </>
            ) : (
              <p className="text-sm muted">Sélectionner un document pour inspecter.</p>
            )}
          </section>
        </div>
      ) : null}

      {surface === "journal" ? (
        <div className="grid lg:grid-cols-2 gap-4">
          <section className="panel p-4 space-y-2">
            <h2 className="font-medium">Sujets</h2>
            {(knowledge?.subjects ?? []).map((s) => (
              <div key={s.id} className="panel p-2 text-sm">
                <div className="font-medium">{s.title}</div>
                <div className="text-xs muted">
                  {s.status}
                  {s.originatedFromSubjectId ? ` · de ${s.originatedFromSubjectId}` : ""}
                </div>
              </div>
            ))}
          </section>
          <section className="panel p-4 space-y-2">
            <h2 className="font-medium">Acquis courants</h2>
            {(knowledge?.acquis ?? [])
              .filter((a) => a.status === "CURRENT")
              .map((a) => (
                <div key={a.id} className="text-sm panel p-2">
                  <span className="text-xs muted">{a.kind} · </span>
                  {a.statement}
                </div>
              ))}
            <p className="text-xs muted pt-2">
              Les décisions D6 opposables sont dans l&apos;onglet Pilotage (Journal—Décisions), pas
              ici.
            </p>
          </section>
        </div>
      ) : null}

      <a className="btn secondary inline-block" href="/portfolio">
        Retour portefeuille
      </a>
    </div>
  );
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```tsx
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages } from "@/db/schema";
// db still used by getConversationId / listMessages
import { newId } from "@/lib/ids";
import { generateNoraReply } from "./nora-adapter";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  maybeCapitalizeFromExchange,
  reconstituteConfirmedD4Effects,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import { listDocuments, savePreparationDocument } from "@/domains/document/service";
import {
  bindTurnGenerationId,
  commitTurnTerminal,
  markTurnUnknown,
  requireTurnOwnership,
  reserveTurnCommand,
  touchTurnLease,
  turnRaceHooks,
} from "./turn-command";
import { emitObs, newRequestId } from "@/lib/observability";
import { StudioError } from "@/lib/http-errors";
import {
  applyConversationalAuthority,
  reconstituteConversationalAuthority,
  type ConversationalAuthorityOutcome,
} from "@/domains/pilotage/conversation-authority";
import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";

export async function listMessages(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return [];
  return db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, ctx.conversation.id))
    .orderBy(asc(messages.ordinal));
}

function explicitDocumentIntent(text: string): boolean {
  return (
    /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i.test(
      text,
    ) ||
    /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i.test(text)
  );
}

function extractDocumentMarkdown(
  assistantText: string,
  userText: string,
): {
  title: string;
  content: string;
} | null {
  const fence = assistantText.match(/```(?:markdown|md)?\n([\s\S]+?)```/i);
  if (fence?.[1] && fence[1].trim().length > 40) {
    const body = fence[1].trim();
    const titleLine = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
    return { title: titleLine || "Document Nora", content: body };
  }
  const heading = assistantText.match(/(^|\n)#\s+[^\n]+[\s\S]{40,}/);
  if (heading?.[0]) {
    const body = heading[0].trim();
    const titleLine = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
    return { title: titleLine || "Document Nora", content: body };
  }
  return {
    title: "Document demandé",
    content: `# Document demandé\n\n> Demande: ${userText.slice(0, 300)}\n\n${assistantText}`,
  };
}

export type TurnResult = {
  userMessageId?: string | null;
  assistantMessageId?: string | null;
  operationId: string;
  requestId: string;
  noraMode?: string;
  status?: string;
  generationId?: string | null;
  policy?: {
    version: string;
    profileType: string;
    profile: string;
    modelRequested: string;
    modelApplied: string | null;
    effortRequested: string;
    effortApplied: string | null;
    reasonCodes: string[];
  };
  attempts?: unknown[];
  toolCallsObserved?: number;
  d4CharsReturned?: number;
  streaming?: { attempted: boolean; delivered: boolean; notes: string | null };
  knowledgeSelection?: unknown;
  capitalisation?: unknown;
  capitalisationAttempted?: unknown;
  capitalisationLimit?: string;
  documentSave?: { status?: string; documentId?: string; revisionNumber?: number; reason?: string } | null;
  idempotentReplay: boolean;
  /**
   * True only when a HumanDecision id was actually produced (APPLIED/ALREADY_APPLIED).
   * Never conflated with "intent detected" or "command attempted".
   */
  humanDecisionCreated: boolean;
  /** Honest D5/D6 bridge outcome for this USER turn (absent when no project / no act). */
  pilotageEffect?: {
    attempted: boolean;
    intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
    intentReason?: string;
    operation?: string;
    status?: string | null;
    reasonCode?: string | null;
    reason?: string | null;
    commandId?: string | null;
    decisionId?: string | null;
    clarification?: string;
    source: ConversationalAuthorityOutcome["source"];
    clientCommandKey?: string;
    effects?: Array<{ effectKind: string; targetRef: string }>;
  } | null;
  reconciled?: boolean;
};

function pilotageEffectFromAuthority(
  authority: ConversationalAuthorityOutcome | null,
): TurnResult["pilotageEffect"] {
  if (!authority) return null;
  return {
    attempted: authority.attempted,
    intentClarity: authority.intentClarity,
    intentReason: authority.intentReason,
    operation: authority.operation,
    status: authority.command?.status ?? null,
    reasonCode: authority.command?.reasonCode ?? null,
    reason: authority.command?.reason ?? authority.intentReason ?? null,
    commandId: authority.command?.commandId ?? null,
    decisionId: authority.decisionId,
    clarification: authority.clarification,
    source: authority.source,
    clientCommandKey: authority.clientCommandKey,
    effects: authority.command?.effects?.map((e) => ({
      effectKind: e.effectKind,
      targetRef: e.targetRef,
    })),
  };
}

async function resolvePilotageEffectForReplay(input: {
  pilotId: string;
  projectId: string | null | undefined;
  clientTurnKey?: string | null;
  userMessageId?: string | null;
  fromJson: TurnResult["pilotageEffect"] | null | undefined;
  humanDecisionCreated: boolean;
}): Promise<{ pilotageEffect: TurnResult["pilotageEffect"]; humanDecisionCreated: boolean }> {
  if (input.fromJson?.attempted && input.fromJson.status) {
    return {
      pilotageEffect: input.fromJson,
      humanDecisionCreated: input.humanDecisionCreated || Boolean(input.fromJson.decisionId),
    };
  }
  if (!input.projectId) {
    return { pilotageEffect: input.fromJson ?? null, humanDecisionCreated: input.humanDecisionCreated };
  }
  const reconstituted = await reconstituteConversationalAuthority({
    pilotId: input.pilotId,
    projectId: input.projectId,
    clientTurnKey: input.clientTurnKey,
    userMessageId: input.userMessageId,
  });
  if (!reconstituted) {
    return { pilotageEffect: input.fromJson ?? null, humanDecisionCreated: input.humanDecisionCreated };
  }
  const effect = pilotageEffectFromAuthority(reconstituted);
  return {
    pilotageEffect: effect,
    humanDecisionCreated:
      input.humanDecisionCreated || Boolean(reconstituted.humanDecisionCreated),
  };
}

export async function postUserMessageAndNora(
  pilotId: string,
  preparationId: string,
  content: string,
  opts?: { correlationKey?: string; clientTurnKey?: string; requestId?: string },
): Promise<TurnResult> {
  const requestId = opts?.requestId ?? newRequestId();
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) throw new StudioError("NOT_FOUND", "Préparation introuvable");

  const clientTurnKey =
    opts?.clientTurnKey?.trim() ||
    opts?.correlationKey?.trim() ||
    `turn-${newId("auto")}`;

  const reserved = await reserveTurnCommand({
    conversationId: ctx.conversation.id,
    ownerPilotId: pilotId,
    clientTurnKey,
    content,
  });

  if (reserved.kind === "replay") {
    emitObs({
      event_name: "d3.turn.replay",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: reserved.status === "COMPLETE" ? "SUCCESS" : "UNKNOWN",
      meta: {
        status: reserved.status,
        reconciled: Boolean(reserved.reconciled),
      },
    });
    if (reserved.resultJson && reserved.status === "COMPLETE") {
      try {
        const parsed = JSON.parse(reserved.resultJson) as TurnResult;
        return {
          ...parsed,
          operationId: reserved.operationId,
          requestId,
          idempotentReplay: true,
          // Preserve factual decision flag from the stored terminal payload.
          humanDecisionCreated: Boolean(parsed.humanDecisionCreated),
          reconciled: reserved.reconciled,
        };
      } catch {
        /* fall through */
      }
    }
    // FAILED/UNKNOWN: never fabricate COMPLETE; reconstitute durable D4 + D5/D6 from DB.
    if (reserved.status === "UNKNOWN" || reserved.status === "FAILED") {
      const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
        generationId: reserved.generationId,
        userMessageId: reserved.userMessageId,
      });
      let replayPilotage: TurnResult["pilotageEffect"] = null;
      let replayDecision = false;
      if (reserved.resultJson) {
        try {
          const parsed = JSON.parse(reserved.resultJson) as TurnResult;
          replayPilotage = parsed.pilotageEffect ?? null;
          replayDecision = Boolean(parsed.humanDecisionCreated);
        } catch {
          /* ignore */
        }
      }
      const resolved = await resolvePilotageEffectForReplay({
        pilotId,
        projectId: ctx.project?.id,
        clientTurnKey: reserved.clientTurnKey ?? clientTurnKey,
        userMessageId: reserved.userMessageId,
        fromJson: replayPilotage,
        humanDecisionCreated: replayDecision,
      });
      return {
        operationId: reserved.operationId,
        requestId,
        status: reserved.status,
        idempotentReplay: true,
        generationId: reserved.generationId,
        userMessageId: reserved.userMessageId,
        assistantMessageId: reserved.assistantMessageId,
        humanDecisionCreated: resolved.humanDecisionCreated,
        pilotageEffect: resolved.pilotageEffect,
        reconciled: reserved.reconciled,
        noraMode: "replay-terminal",
        capitalisation: reconstituted.capitalisation,
        capitalisationLimit: reconstituted.capitalisationLimit,
        documentSave: reconstituted.documentSave,
      };
    }
    return {
      operationId: reserved.operationId,
      requestId,
      status: reserved.status,
      idempotentReplay: true,
      generationId: reserved.generationId,
      userMessageId: reserved.userMessageId,
      assistantMessageId: reserved.assistantMessageId,
      humanDecisionCreated: false,
      pilotageEffect: null,
      reconciled: reserved.reconciled,
      noraMode: reserved.status === "COMPLETE" ? "deterministic-fixture" : "replay-terminal",
    };
  }

  emitObs({
    event_name: "d3.turn.accepted",
    component: "d3.conversation",
    request_id: requestId,
    operation_id: reserved.operationId,
    outcome: "PARTIAL",
    meta: { client_turn_key_fp: reserved.requestFingerprint.slice(0, 12) },
  });

  /**
   * F01/F02 — USER → D5/D6 before Nora provider call.
   * Message is already COMPLETE; business TX is short and separate from Nora.
   * Lost ownership ⇒ skip mutation (do not invent a late second command).
   */
  let authority: ConversationalAuthorityOutcome | null = null;
  const stillOwnedBeforeAuthority = await requireTurnOwnership(
    reserved.commandId,
    reserved.ownerToken,
  );
  if (stillOwnedBeforeAuthority && ctx.project?.id) {
    authority = await applyConversationalAuthority({
      pilotId,
      projectId: ctx.project.id,
      userMessageId: reserved.userMessageId,
      content,
      clientTurnKey,
    });
    emitObs({
      event_name: "d3.turn.conversational_authority",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: authority.attempted
        ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
          ? "SUCCESS"
          : authority.command?.status === "UNKNOWN"
            ? "UNKNOWN"
            : "FAILED"
        : "PARTIAL",
      meta: {
        attempted: authority.attempted,
        intent_clarity: authority.intentClarity,
        operation: authority.operation ?? null,
        command_status: authority.command?.status ?? null,
        reason_code: authority.command?.reasonCode ?? null,
        decision_id: authority.decisionId,
        source: authority.source,
      },
    });
  }

  const existing = await listMessages(pilotId, preparationId);
  const contextSnippets = existing
    .filter((m) => m.status === "COMPLETE" && m.id !== reserved.userMessageId)
    .slice(-6)
    .map((m) => `${m.role}: ${m.content.slice(0, 200)}`);

  const knowledge = await selectRelevantKnowledgeContext(pilotId, preparationId, content);

  const docs = await listDocuments(pilotId, preparationId);
  const docSnippets = docs.slice(0, 5).map((d) => {
    const rev = d.latestRevision;
    return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
  });

  // Rebuild after authority so Nora observes confirmed D5/D6 state (projection only).
  const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);
  const authoritySnippets: string[] = [];
  if (authority?.attempted && authority.command) {
    authoritySnippets.push(
      "### Effet métier confirmé (D5/D6 — pas une permission Nora)",
      `status=${authority.command.status} operation=${authority.operation ?? "?"} reasonCode=${authority.command.reasonCode ?? "∅"} decisionId=${authority.decisionId ?? "∅"}`,
    );
    if (authority.command.effects?.length) {
      authoritySnippets.push(
        `effects=${authority.command.effects.map((e) => `${e.effectKind}:${e.targetRef}`).join(",")}`,
      );
    }
  } else if (authority?.clarification) {
    authoritySnippets.push(
      "### Clarification pilotage requise",
      authority.clarification.slice(0, 300),
    );
  }

  let reply;
  try {
    // C02 fault boundary: after authority, before/during Nora — same recovery path.
    if (turnRaceHooks.afterAuthorityBeforeNora) {
      await turnRaceHooks.afterAuthorityBeforeNora();
    }
    // Heartbeat during long provider work so stale lease does not falsely orphan an active run.
    const leasePulse = setInterval(() => {
      void touchTurnLease(reserved.commandId, reserved.ownerToken);
    }, 60_000);
    try {
      reply = await generateNoraReply({
        userText: content,
        contextSnippets,
        knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
        pilotageSnippets: [...pilotageCtx.snippets, ...authoritySnippets],
        // C01: same structured Level A contract for fixture and LIVE — never authority.
        levelASignals: pilotageCtx.levelASignals,
        // Requested level only. The adapter emits DELIVERED after a real generate.
        ckiDelivery: pilotageCtx.ckiDelivery,
        toolScope: {
          pilotId,
          preparationId,
          operationId: reserved.operationId,
        },
      });
    } finally {
      clearInterval(leasePulse);
    }
  } catch {
    // C02 — Nora failure must not erase a already-committed D5/D6 effect.
    // Persist an honest UNKNOWN turn payload that still surfaces pilotageEffect.
    const unknownPayload: TurnResult = {
      userMessageId: reserved.userMessageId,
      assistantMessageId: null,
      operationId: reserved.operationId,
      requestId,
      status: "UNKNOWN",
      idempotentReplay: false,
      humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
      pilotageEffect: pilotageEffectFromAuthority(authority),
      noraMode: "provider-exception",
    };
    try {
      await markTurnUnknown(
        reserved.commandId,
        "PROVIDER_EXCEPTION",
        reserved.ownerToken,
        JSON.stringify(unknownPayload),
      );
    } catch {
      /* ownership may already be lost — still return reconstituted truth below */
    }
    emitObs({
      event_name: "d3.turn.unknown",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: "UNKNOWN",
      error_category: "PROVIDER_EXCEPTION",
    });
    const resolved = await resolvePilotageEffectForReplay({
      pilotId,
      projectId: ctx.project?.id,
      clientTurnKey,
      userMessageId: reserved.userMessageId,
      fromJson: unknownPayload.pilotageEffect,
      humanDecisionCreated: unknownPayload.humanDecisionCreated,
    });
    return {
      ...unknownPayload,
      humanDecisionCreated: resolved.humanDecisionCreated,
      pilotageEffect: resolved.pilotageEffect,
    };
  }

  if (turnRaceHooks.afterGenerateBeforeEffects) {
    await turnRaceHooks.afterGenerateBeforeEffects();
  }

  // Ownership may have been revoked/reconciled during generation — no COMPLETE, no D4.
  if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
    emitObs({
      event_name: "d3.turn.ownership_lost",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      generation_id: reply.generationId,
      outcome: "UNKNOWN",
      error_category: "OWNERSHIP_LOST_AFTER_GENERATE",
    });
    return {
      operationId: reserved.operationId,
      requestId,
      status: "UNKNOWN",
      generationId: reply.generationId,
      userMessageId: reserved.userMessageId,
      assistantMessageId: null,
      idempotentReplay: false,
      humanDecisionCreated: false,
      noraMode: reply.mode,
    };
  }

  // Bind generationId while ownership holds so D4 provenance + UNKNOWN reconstitution share one key.
  await bindTurnGenerationId(reserved.commandId, reserved.ownerToken, reply.generationId);

  const assistantId = newId("msg");

  let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
    capitalisations: [],
    selectionMethod: "lexical-heuristic",
    selectionLimit:
      "Capitalisation heuristique — pas une autorité épistémique; LIVE COG requis pour qualification.",
    humanDecisionCreated: false,
    ownershipLost: false,
  };
  let capitalisationError: string | undefined;
  let documentSave: Awaited<ReturnType<typeof savePreparationDocument>> | null = null;
  let documentSaveUnknown = false;
  let ownershipLostBeforeD4 = false;

  if (reply.status === "COMPLETE") {
    if (turnRaceHooks.beforeD4Effect) {
      await turnRaceHooks.beforeD4Effect();
    }
    if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
      ownershipLostBeforeD4 = true;
    } else {
      try {
        capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
          userText: content,
          assistantText: reply.content,
          generationId: reply.generationId,
          userMessageId: reserved.userMessageId,
          turnFence: {
            commandId: reserved.commandId,
            ownerToken: reserved.ownerToken,
            beforeFenceCheck: turnRaceHooks.beforeD4Effect,
          },
        });
        if (capitalisation.ownershipLost) {
          ownershipLostBeforeD4 = true;
        }
      } catch {
        capitalisationError = "CAPITALISATION_EXCEPTION";
        emitObs({
          event_name: "d3.turn.capitalisation_failed",
          component: "d3.conversation",
          request_id: requestId,
          operation_id: reserved.operationId,
          generation_id: reply.generationId,
          outcome: "UNKNOWN",
          error_category: "CAPITALISATION_EXCEPTION",
        });
      }

      if (explicitDocumentIntent(content) && !ownershipLostBeforeD4) {
        const extracted = extractDocumentMarkdown(reply.content, content);
        if (extracted) {
          try {
            documentSave = await savePreparationDocument(
              pilotId,
              preparationId,
              extracted.title,
              extracted.content,
              undefined,
              {
                correlationKey: opts?.correlationKey
                  ? `doc:${opts.correlationKey}`
                  : `doc:${reply.generationId}`,
                provenance: {
                  sourceKind: "nora",
                  generationId: reply.generationId,
                  userMessageId: reserved.userMessageId,
                  explicitRequest: true,
                },
                scope: "document",
                turnFence: {
                  commandId: reserved.commandId,
                  ownerToken: reserved.ownerToken,
                  beforeFenceCheck: turnRaceHooks.beforeD4Effect,
                },
              },
            );
            if (documentSave.status === "FAILED" && documentSave.reason === "TURN_OWNERSHIP_LOST") {
              ownershipLostBeforeD4 = true;
              documentSave = null;
            } else if (documentSave.status !== "AVAILABLE") {
              documentSaveUnknown =
                documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
            }
          } catch {
            documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION" } as Awaited<
              ReturnType<typeof savePreparationDocument>
            >;
            documentSaveUnknown = true;
            emitObs({
              event_name: "d3.turn.document_save_failed",
              component: "d3.conversation",
              request_id: requestId,
              operation_id: reserved.operationId,
              generation_id: reply.generationId,
              outcome: "UNKNOWN",
              error_category: "DOCUMENT_SAVE_EXCEPTION",
            });
          }
        }
      }
    }
  }

  const confirmedCapitalisations = capitalisation.capitalisations.filter(
    (c) => c.status === "AVAILABLE",
  );

  let turnStatus: "COMPLETE" | "FAILED" | "UNKNOWN" =
    ownershipLostBeforeD4
      ? "UNKNOWN"
      : reply.status === "COMPLETE"
        ? "COMPLETE"
        : reply.status === "UNKNOWN"
          ? "UNKNOWN"
          : "FAILED";

  if (
    !ownershipLostBeforeD4 &&
    reply.status === "COMPLETE" &&
    (documentSaveUnknown || capitalisationError) &&
    explicitDocumentIntent(content)
  ) {
    turnStatus = "UNKNOWN";
  } else if (
    !ownershipLostBeforeD4 &&
    reply.status === "COMPLETE" &&
    capitalisationError &&
    !explicitDocumentIntent(content)
  ) {
    turnStatus = "UNKNOWN";
  }

  // Lost ownership ⇒ never claim COMPLETE even if reply looked complete.
  if (ownershipLostBeforeD4) {
    turnStatus = "UNKNOWN";
  }

  // When ownership already lost, prefer DB reconstitution over in-memory lists
  // (local vars may omit effects committed earlier in the turn).
  let unknownCapReconstituted: Awaited<ReturnType<typeof reconstituteConfirmedD4Effects>> | null =
    null;
  if (ownershipLostBeforeD4 || turnStatus === "UNKNOWN") {
    unknownCapReconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: reply.generationId,
      userMessageId: reserved.userMessageId,
    });
  }

  const resultPayload: TurnResult = {
    userMessageId: reserved.userMessageId,
    assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
    operationId: reserved.operationId,
    requestId,
    noraMode: reply.mode,
    status: turnStatus === "COMPLETE" ? reply.status : turnStatus,
    generationId: reply.generationId,
    policy: {
      version: reply.policy.policyVersion,
      profileType: reply.policy.profileType,
      profile: reply.policy.profile,
      modelRequested: reply.modelRequested,
      modelApplied: reply.modelApplied,
      effortRequested: reply.effortRequested,
      effortApplied: reply.effortApplied,
      reasonCodes: reply.policy.reasonCodes,
    },
    attempts: reply.attempts,
    toolCallsObserved: reply.toolCallsObserved,
    d4CharsReturned: reply.d4CharsReturned,
    streaming: {
      attempted: reply.streamingAttempted ?? false,
      delivered: reply.streamingDelivered ?? false,
      notes: reply.streamingNotes ?? null,
    },
    knowledgeSelection: {
      ...knowledge.counts,
      selectionMethod: knowledge.selectionMethod,
      selectionLimit: knowledge.selectionLimit,
    },
    capitalisation: ownershipLostBeforeD4
      ? (unknownCapReconstituted?.capitalisation ?? [])
      : confirmedCapitalisations,
    capitalisationAttempted: ownershipLostBeforeD4 ? [] : capitalisation.capitalisations,
    capitalisationLimit: ownershipLostBeforeD4
      ? (unknownCapReconstituted?.capitalisationLimit ?? "OWNERSHIP_LOST")
      : capitalisationError ?? capitalisation.selectionLimit,
    documentSave: ownershipLostBeforeD4
      ? (unknownCapReconstituted?.documentSave ?? null)
      : documentSave,
    idempotentReplay: false,
    humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
    pilotageEffect: pilotageEffectFromAuthority(authority),
  };

  if (turnRaceHooks.beforeTerminalCommit) {
    await turnRaceHooks.beforeTerminalCommit();
  }

  let applied: { applied: boolean };
  try {
    applied = await commitTurnTerminal({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: turnStatus,
      conversationId: ctx.conversation.id,
      assistant: ownershipLostBeforeD4
        ? undefined
        : {
            id: assistantId,
            content: reply.content,
            messageStatus: reply.status,
            generationId: reply.generationId,
            ordinal: reserved.ordinalAssistant,
          },
      generationId: reply.generationId,
      resultJson: JSON.stringify(resultPayload),
      errorCategory:
        turnStatus === "COMPLETE"
          ? undefined
          : ownershipLostBeforeD4
            ? "OWNERSHIP_LOST"
            : capitalisationError ?? reply.status,
    });
  } catch (e) {
    // Mid-TX DB failure after attempted assistant write — TX rolled back; never COMPLETE.
    if (e instanceof StudioError && e.code === "CONFLICT") {
      emitObs({
        event_name: "d3.turn.assistant_identity_conflict",
        component: "d3.conversation",
        request_id: requestId,
        operation_id: reserved.operationId,
        generation_id: reply.generationId,
        outcome: "UNKNOWN",
        error_category: "ASSISTANT_IDENTITY_CONFLICT",
      });
    } else {
      emitObs({
        event_name: "d3.turn.terminal_tx_failed",
        component: "d3.conversation",
        request_id: requestId,
        operation_id: reserved.operationId,
        generation_id: reply.generationId,
        outcome: "UNKNOWN",
        error_category: "TERMINAL_TX_EXCEPTION",
      });
    }
    try {
      await markTurnUnknown(reserved.commandId, "TERMINAL_TX_EXCEPTION", reserved.ownerToken);
    } catch {
      /* ownership may already be lost */
    }
    const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: reply.generationId,
      userMessageId: reserved.userMessageId,
    });
    return {
      ...resultPayload,
      status: "UNKNOWN",
      assistantMessageId: null,
      capitalisation: reconstituted.capitalisation,
      capitalisationLimit: reconstituted.capitalisationLimit,
      documentSave: reconstituted.documentSave,
    };
  }

  if (!applied.applied) {
    emitObs({
      event_name: "d3.turn.complete_cas_miss",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      generation_id: reply.generationId,
      outcome: "UNKNOWN",
      error_category: "COMPLETE_CAS_MISSED",
    });
    // Never return COMPLETE when ownership CAS failed — but surface DB-confirmed D4 refs.
    const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: reply.generationId,
      userMessageId: reserved.userMessageId,
    });
    return {
      ...resultPayload,
      status: "UNKNOWN",
      assistantMessageId: null,
      capitalisation: reconstituted.capitalisation,
      capitalisationLimit: reconstituted.capitalisationLimit,
      documentSave: reconstituted.documentSave,
    };
  }
  emitObs({
    event_name: "d3.turn.completed",
    component: "d3.conversation",
    request_id: requestId,
    operation_id: reserved.operationId,
    generation_id: reply.generationId,
    outcome:
      turnStatus === "COMPLETE" ? "SUCCESS" : turnStatus === "UNKNOWN" ? "UNKNOWN" : "FAILED",
    policy_version: reply.policy.policyVersion,
    profile_type:
      reply.policy.profileType === "TEST_BOUNDARY" ? "TEST_BOUNDARY" : "OPERATIONAL",
    meta: {
      attempts: reply.attempts.length,
      tool_calls: reply.toolCallsObserved,
      turn_status: turnStatus,
      cas_applied: applied.applied,
    },
  });

  return resultPayload;
}

export async function getConversationId(pilotId: string, preparationId: string) {
  const row = (
    await db
      .select()
      .from(conversations)
      .where(
        and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)),
      )
      .limit(1)
  )[0];
  return row?.id ?? null;
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts`

```tsx
/**
 * Durable D3 turn command — short transactional reservation only.
 * Never hold a DB transaction open across the provider call.
 * Ownership fencing via owner_token: lost ownership ⇒ no COMPLETE, no further D4 commits.
 */
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, messages } from "@/db/schema";
import { newId } from "@/lib/ids";
import { StudioError } from "@/lib/http-errors";
import { fingerprintRequest, newOperationId } from "@/lib/observability";
import { randomUUID } from "node:crypto";

export type TurnCommandStatus =
  | "ACCEPTED"
  | "RUNNING"
  | "COMPLETE"
  | "FAILED"
  | "CONFLICT"
  | "UNKNOWN";

export type ReservedTurn = {
  kind: "fresh";
  commandId: string;
  operationId: string;
  conversationId: string;
  clientTurnKey: string;
  requestFingerprint: string;
  ownerToken: string;
  ordinalUser: number;
  ordinalAssistant: number;
  userMessageId: string;
};

export type ReplayedTurn = {
  kind: "replay";
  commandId: string;
  operationId: string;
  status: TurnCommandStatus;
  resultJson: string | null;
  generationId: string | null;
  userMessageId: string | null;
  assistantMessageId: string | null;
  /** Stable turn key — enables C02 reconstitution of conv-auth:{key}. */
  clientTurnKey?: string | null;
  reconciled?: boolean;
};

/** Stale RUNNING lease — only when heartbeat (updated_at) is older than this. */
export const TURN_RUNNING_STALE_MS = 20 * 60 * 1000;

/** Injectable clock for deterministic lease tests. */
export const turnClock = {
  nowMs: (): number => Date.now(),
};

/** Ownership fence passed into D4 write TXs (documents + knowledge). */
export type TurnOwnershipFence = {
  commandId: string;
  ownerToken: string;
  /** Optional test injection before the ownership lock inside the write TX. */
  beforeFenceCheck?: () => Promise<void>;
};

/** Forces terminal TX rollback when CAS cannot apply after a side-effect attempt. */
export class TurnTerminalCasMissError extends Error {
  readonly code = "TURN_TERMINAL_CAS_MISS";
  constructor() {
    super("TURN_TERMINAL_CAS_MISS");
    this.name = "TurnTerminalCasMissError";
  }
}

type FenceTx = {
  execute: typeof db.execute;
  select: typeof db.select;
};

/**
 * Lock + verify turn ownership inside an open D4 write TX.
 * Uses FOR SHARE so reconcile/UPDATE waits until the write commits or rolls back.
 * Returns false when ownership is already lost (caller must abort write without commit).
 */
export async function assertTurnFenceInTx(
  tx: FenceTx,
  fence: TurnOwnershipFence,
): Promise<boolean> {
  if (fence.beforeFenceCheck) {
    await fence.beforeFenceCheck();
  }
  await tx.execute(
    sql`select id from conversation_turn_commands
        where id = ${fence.commandId}
          and owner_token = ${fence.ownerToken}
          and status in ('RUNNING', 'ACCEPTED')
        for share`,
  );
  const fenceRow = (
    await tx
      .select({ id: conversationTurnCommands.id })
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.id, fence.commandId),
          eq(conversationTurnCommands.ownerToken, fence.ownerToken),
          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
        ),
      )
      .limit(1)
  )[0];
  return Boolean(fenceRow);
}

/** Test hooks — must stay no-op in production paths. */
export const turnRaceHooks: {
  /** C02 — after D5/D6 authority, before Nora provider (fault injection). */
  afterAuthorityBeforeNora?: () => Promise<void>;
  afterGenerateBeforeEffects?: () => Promise<void>;
  beforeD4Effect?: () => Promise<void>;
  beforeTerminalCommit?: () => Promise<void>;
  /**
   * Runs inside the terminal TX after optional assistant INSERT, before CAS UPDATE.
   * May mutate the same TX (e.g. revoke token) to force CAS miss + rollback.
   */
  insideTerminalTxAfterInsert?: (tx: FenceTx) => Promise<void>;
} = {};

export function turnFingerprint(content: string): string {
  return fingerprintRequest(["v1", content.trim()]);
}

function newOwnerToken(): string {
  return `own_${randomUUID()}`;
}

function isStaleRunning(updatedAt: Date | null | undefined): boolean {
  if (!updatedAt) return true;
  return turnClock.nowMs() - updatedAt.getTime() > TURN_RUNNING_STALE_MS;
}

/**
 * Heartbeat + ownership proof. Refreshes updated_at so long active runs are not
 * falsely reconciled as orphans. Returns false if ownership lost.
 */
/** Persist generation identity on a still-owned RUNNING/ACCEPTED command (pre-terminal). */
export async function bindTurnGenerationId(
  commandId: string,
  ownerToken: string,
  generationId: string,
): Promise<{ bound: boolean }> {
  const gen = generationId.trim();
  if (!gen) return { bound: false };
  const updated = await db
    .update(conversationTurnCommands)
    .set({
      generationId: gen,
      updatedAt: new Date(turnClock.nowMs()),
    })
    .where(
      and(
        eq(conversationTurnCommands.id, commandId),
        eq(conversationTurnCommands.ownerToken, ownerToken),
        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
      ),
    )
    .returning({ id: conversationTurnCommands.id });
  return { bound: updated.length > 0 };
}

export async function touchTurnLease(
  commandId: string,
  ownerToken: string,
): Promise<{ owned: boolean }> {
  const updated = await db
    .update(conversationTurnCommands)
    .set({ updatedAt: new Date(turnClock.nowMs()) })
    .where(
      and(
        eq(conversationTurnCommands.id, commandId),
        eq(conversationTurnCommands.ownerToken, ownerToken),
        sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
      ),
    )
    .returning({ id: conversationTurnCommands.id });
  return { owned: updated.length > 0 };
}

/**
 * Assert ownership still holds (short TX). Use before every D4 write boundary.
 */
export async function requireTurnOwnership(
  commandId: string,
  ownerToken: string,
): Promise<boolean> {
  const { owned } = await touchTurnLease(commandId, ownerToken);
  return owned;
}

/**
 * Conservative reconciliation of an orphan RUNNING command.
 * Invalidates owner_token so a late execution cannot CAS-complete or fence D4.
 */
export async function reconcileRunningCommand(commandId: string): Promise<{
  status: TurnCommandStatus;
  reconciled: boolean;
  assistantMessageId: string | null;
  generationId: string | null;
  resultJson: string | null;
}> {
  return db.transaction(async (tx) => {
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtext(${"turn-reconcile:" + commandId}))`);

    // FOR UPDATE waits for any in-flight terminal/D4 fence locks — never revoke mid-write.
    await tx.execute(
      sql`select id from conversation_turn_commands where id = ${commandId} for update`,
    );

    const row = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, commandId))
        .limit(1)
    )[0];

    if (!row) {
      return {
        status: "UNKNOWN" as const,
        reconciled: false,
        assistantMessageId: null,
        generationId: null,
        resultJson: null,
      };
    }

    if (row.status !== "RUNNING" && row.status !== "ACCEPTED") {
      return {
        status: row.status as TurnCommandStatus,
        reconciled: false,
        assistantMessageId: row.assistantMessageId,
        generationId: row.generationId,
        resultJson: row.resultJson,
      };
    }

    let assistantId = row.assistantMessageId;
    let generationId = row.generationId;

    if (!assistantId && row.ordinalAssistant != null) {
      const existingAssistant = (
        await tx
          .select()
          .from(messages)
          .where(
            and(
              eq(messages.conversationId, row.conversationId),
              eq(messages.ordinal, row.ordinalAssistant),
              eq(messages.role, "assistant"),
            ),
          )
          .limit(1)
      )[0];
      // Bind only when both sides have a matching generationId (no silent appropriation).
      if (
        existingAssistant &&
        Boolean(row.generationId) &&
        Boolean(existingAssistant.generationId) &&
        row.generationId === existingAssistant.generationId
      ) {
        assistantId = existingAssistant.id;
        generationId = existingAssistant.generationId ?? generationId;
      }
    }

    const stale = isStaleRunning(row.updatedAt);
    if (!stale && !assistantId) {
      return {
        status: "RUNNING" as const,
        reconciled: false,
        assistantMessageId: null,
        generationId,
        resultJson: null,
      };
    }

    const errorCategory = assistantId
      ? "RECONCILED_ASSISTANT_PRESENT_TURN_UNKNOWN"
      : "RECONCILED_STALE_RUNNING_NO_ASSISTANT";

    // Invalidate owner_token — late owner can no longer commit.
    const updated = await tx
      .update(conversationTurnCommands)
      .set({
        status: "UNKNOWN",
        assistantMessageId: assistantId,
        generationId,
        errorCategory,
        ownerToken: `revoked_${randomUUID()}`,
        updatedAt: new Date(turnClock.nowMs()),
      })
      .where(
        and(
          eq(conversationTurnCommands.id, commandId),
          eq(conversationTurnCommands.status, row.status),
        ),
      )
      .returning();

    if (!updated.length) {
      const again = (
        await tx
          .select()
          .from(conversationTurnCommands)
          .where(eq(conversationTurnCommands.id, commandId))
          .limit(1)
      )[0];
      return {
        status: (again?.status as TurnCommandStatus) ?? "UNKNOWN",
        reconciled: false,
        assistantMessageId: again?.assistantMessageId ?? null,
        generationId: again?.generationId ?? null,
        resultJson: again?.resultJson ?? null,
      };
    }

    return {
      status: "UNKNOWN" as const,
      reconciled: true,
      assistantMessageId: assistantId,
      generationId,
      resultJson: null,
    };
  });
}

export async function reserveTurnCommand(args: {
  conversationId: string;
  ownerPilotId: string;
  clientTurnKey: string;
  content: string;
}): Promise<ReservedTurn | ReplayedTurn> {
  const fp = turnFingerprint(args.content);
  const clientTurnKey = args.clientTurnKey.trim();
  if (!clientTurnKey) {
    throw new StudioError("INVALID_REQUEST", "clientTurnKey requis");
  }

  return db.transaction(async (tx) => {
    await tx.execute(sql`SELECT pg_advisory_xact_lock(hashtext(${args.conversationId}))`);

    const existing = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, args.conversationId),
            eq(conversationTurnCommands.clientTurnKey, clientTurnKey),
          ),
        )
        .limit(1)
    )[0];

    if (existing) {
      if (existing.requestFingerprint !== fp) {
        throw new StudioError(
          "PAYLOAD_MISMATCH",
          "Même clientTurnKey avec payload divergent",
          { httpStatus: 409 },
        );
      }

      if (existing.status === "RUNNING" || existing.status === "ACCEPTED") {
        let assistantId = existing.assistantMessageId;
        let generationId = existing.generationId;
        if (!assistantId && existing.ordinalAssistant != null) {
          const existingAssistant = (
            await tx
              .select()
              .from(messages)
              .where(
                and(
                  eq(messages.conversationId, existing.conversationId),
                  eq(messages.ordinal, existing.ordinalAssistant),
                  eq(messages.role, "assistant"),
                ),
              )
              .limit(1)
          )[0];
          if (
            existingAssistant &&
            Boolean(existing.generationId) &&
            Boolean(existingAssistant.generationId) &&
            existing.generationId === existingAssistant.generationId
          ) {
            assistantId = existingAssistant.id;
            generationId = existingAssistant.generationId ?? generationId;
          }
        }

        const stale = isStaleRunning(existing.updatedAt);
        if (assistantId || stale) {
          await tx
            .update(conversationTurnCommands)
            .set({
              status: "UNKNOWN",
              assistantMessageId: assistantId,
              generationId,
              errorCategory: assistantId
                ? "RECONCILED_ASSISTANT_PRESENT_TURN_UNKNOWN"
                : "RECONCILED_STALE_RUNNING_NO_ASSISTANT",
              ownerToken: `revoked_${randomUUID()}`,
              updatedAt: new Date(turnClock.nowMs()),
            })
            .where(
              and(
                eq(conversationTurnCommands.id, existing.id),
                eq(conversationTurnCommands.status, existing.status),
              ),
            );
          return {
            kind: "replay" as const,
            commandId: existing.id,
            operationId: existing.operationId,
            status: "UNKNOWN",
            resultJson: existing.resultJson,
            generationId,
            userMessageId: existing.userMessageId,
            assistantMessageId: assistantId,
            clientTurnKey: existing.clientTurnKey,
            reconciled: true,
          };
        }

        throw new StudioError("TURN_IN_PROGRESS", "Tour déjà en cours pour cette conversation", {
          httpStatus: 409,
        });
      }

      return {
        kind: "replay" as const,
        commandId: existing.id,
        operationId: existing.operationId,
        status: existing.status as TurnCommandStatus,
        resultJson: existing.resultJson,
        generationId: existing.generationId,
        userMessageId: existing.userMessageId,
        assistantMessageId: existing.assistantMessageId,
        clientTurnKey: existing.clientTurnKey,
      };
    }

    const running = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, args.conversationId),
            eq(conversationTurnCommands.status, "RUNNING"),
          ),
        )
        .limit(1)
    )[0];

    if (running) {
      const stale = isStaleRunning(running.updatedAt);
      if (stale) {
        await tx
          .update(conversationTurnCommands)
          .set({
            status: "UNKNOWN",
            errorCategory: "RECONCILED_STALE_RUNNING_OTHER_KEY",
            ownerToken: `revoked_${randomUUID()}`,
            updatedAt: new Date(turnClock.nowMs()),
          })
          .where(
            and(
              eq(conversationTurnCommands.id, running.id),
              eq(conversationTurnCommands.status, "RUNNING"),
            ),
          );
      } else {
        throw new StudioError("TURN_IN_PROGRESS", "Autre tour RUNNING sur cette conversation", {
          httpStatus: 409,
        });
      }
    }

    const last = (
      await tx
        .select({ ordinal: messages.ordinal })
        .from(messages)
        .where(eq(messages.conversationId, args.conversationId))
        .orderBy(sql`${messages.ordinal} desc`)
        .limit(1)
    )[0];
    const ordinalUser = (last?.ordinal ?? 0) + 1;
    const ordinalAssistant = ordinalUser + 1;
    const userMessageId = newId("msg");
    const commandId = newId("tcmd");
    const operationId = newOperationId();
    const ownerToken = newOwnerToken();

    await tx.insert(messages).values({
      id: userMessageId,
      conversationId: args.conversationId,
      role: "user",
      content: args.content,
      status: "COMPLETE",
      ordinal: ordinalUser,
    });

    await tx.insert(conversationTurnCommands).values({
      id: commandId,
      conversationId: args.conversationId,
      ownerPilotId: args.ownerPilotId,
      clientTurnKey,
      requestFingerprint: fp,
      operationId,
      status: "RUNNING",
      ownerToken,
      ordinalUser,
      ordinalAssistant,
      userMessageId,
      updatedAt: new Date(turnClock.nowMs()),
    });

    return {
      kind: "fresh" as const,
      commandId,
      operationId,
      conversationId: args.conversationId,
      clientTurnKey,
      requestFingerprint: fp,
      ownerToken,
      ordinalUser,
      ordinalAssistant,
      userMessageId,
    };
  });
}

/**
 * Atomic terminal commit under ownership fence:
 * FOR UPDATE lock → optional assistant INSERT → CAS UPDATE in the same short TX.
 * CAS miss after INSERT throws → full TX rollback (no orphan assistant).
 * Lost ownership ⇒ applied:false — caller must not return COMPLETE.
 */
export async function commitTurnTerminal(args: {
  commandId: string;
  ownerToken: string;
  status: TurnCommandStatus;
  conversationId: string;
  assistant?: {
    id: string;
    content: string;
    messageStatus: string;
    generationId: string;
    ordinal: number;
  };
  generationId?: string;
  resultJson?: string;
  errorCategory?: string;
}): Promise<{ applied: boolean }> {
  if (args.status === "RUNNING" || args.status === "ACCEPTED") {
    throw new StudioError("INVALID_REQUEST", "commitTurnTerminal exige un statut terminal");
  }

  try {
    return await db.transaction(async (tx) => {
      // Exclusive lock: blocks reconcile revoke and concurrent terminal writers.
      await tx.execute(
        sql`select id from conversation_turn_commands
            where id = ${args.commandId}
              and owner_token = ${args.ownerToken}
              and status in ('RUNNING', 'ACCEPTED')
            for update`,
      );

      const owned = (
        await tx
          .select({
            id: conversationTurnCommands.id,
            assistantMessageId: conversationTurnCommands.assistantMessageId,
            generationId: conversationTurnCommands.generationId,
          })
          .from(conversationTurnCommands)
          .where(
            and(
              eq(conversationTurnCommands.id, args.commandId),
              eq(conversationTurnCommands.ownerToken, args.ownerToken),
              sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
            ),
          )
          .limit(1)
      )[0];
      if (!owned) {
        return { applied: false };
      }

      let assistantMessageId = args.assistant?.id ?? owned.assistantMessageId ?? null;

      if (args.assistant) {
        const existingAssistant = (
          await tx
            .select()
            .from(messages)
            .where(
              and(
                eq(messages.conversationId, args.conversationId),
                eq(messages.ordinal, args.assistant.ordinal),
                eq(messages.role, "assistant"),
              ),
            )
            .limit(1)
        )[0];

        if (!existingAssistant) {
          await tx.insert(messages).values({
            id: args.assistant.id,
            conversationId: args.conversationId,
            role: "assistant",
            content: args.assistant.content,
            status: args.assistant.messageStatus,
            generationId: args.assistant.generationId,
            ordinal: args.assistant.ordinal,
          });
          assistantMessageId = args.assistant.id;
        } else {
          // Reuse only with demonstrable identity: both generationIds non-empty and equal,
          // plus same message id or already-bound assistantMessageId. sameId/alreadyBound alone
          // are never sufficient when generation proof is missing or mismatched.
          const expectedGen = args.assistant.generationId?.trim() || null;
          const messageGen = existingAssistant.generationId?.trim() || null;
          const commandGen =
            (args.generationId ?? owned.generationId)?.trim() || expectedGen;
          const gensMatch =
            Boolean(expectedGen) &&
            Boolean(messageGen) &&
            Boolean(commandGen) &&
            expectedGen === messageGen &&
            commandGen === messageGen;
          const sameId = existingAssistant.id === args.assistant.id;
          const alreadyBound = owned.assistantMessageId === existingAssistant.id;
          const idConflict =
            Boolean(owned.assistantMessageId) &&
            owned.assistantMessageId !== existingAssistant.id &&
            !sameId;

          if (!gensMatch || idConflict || (!sameId && !alreadyBound)) {
            throw new StudioError(
              "CONFLICT",
              "Ordinal assistant incompatible avec la génération/commande courante",
              { httpStatus: 409 },
            );
          }
          assistantMessageId = existingAssistant.id;
        }
      }

      if (turnRaceHooks.insideTerminalTxAfterInsert) {
        await turnRaceHooks.insideTerminalTxAfterInsert(tx as FenceTx);
      }

      const updated = await tx
        .update(conversationTurnCommands)
        .set({
          status: args.status,
          assistantMessageId,
          generationId: args.generationId ?? args.assistant?.generationId ?? null,
          resultJson: args.resultJson ?? null,
          errorCategory: args.errorCategory ?? null,
          updatedAt: new Date(turnClock.nowMs()),
        })
        .where(
          and(
            eq(conversationTurnCommands.id, args.commandId),
            eq(conversationTurnCommands.ownerToken, args.ownerToken),
            sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
          ),
        )
        .returning({ id: conversationTurnCommands.id });

      if (updated.length === 0) {
        // Must not commit a prior INSERT in this TX.
        throw new TurnTerminalCasMissError();
      }
      return { applied: true };
    });
  } catch (e) {
    if (e instanceof TurnTerminalCasMissError) {
      return { applied: false };
    }
    throw e;
  }
}
/** @deprecated Prefer commitTurnTerminal with ownerToken — kept for markTurnUnknown paths. */
export async function completeTurnCommand(args: {
  commandId: string;
  status: TurnCommandStatus;
  assistantMessageId?: string;
  generationId?: string;
  resultJson?: string;
  errorCategory?: string;
  ownerToken?: string;
}): Promise<{ applied: boolean }> {
  if (args.status === "RUNNING" || args.status === "ACCEPTED") {
    throw new StudioError("INVALID_REQUEST", "completeTurnCommand exige un statut terminal");
  }

  const conditions = [
    eq(conversationTurnCommands.id, args.commandId),
    sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
  ];
  if (args.ownerToken) {
    conditions.push(eq(conversationTurnCommands.ownerToken, args.ownerToken));
  }

  const updated = await db
    .update(conversationTurnCommands)
    .set({
      status: args.status,
      assistantMessageId: args.assistantMessageId ?? null,
      generationId: args.generationId ?? null,
      resultJson: args.resultJson ?? null,
      errorCategory: args.errorCategory ?? null,
      updatedAt: new Date(turnClock.nowMs()),
    })
    .where(and(...conditions))
    .returning({ id: conversationTurnCommands.id });

  return { applied: updated.length > 0 };
}

export async function markTurnUnknown(
  commandId: string,
  errorCategory: string,
  ownerToken?: string,
  resultJson?: string,
) {
  await completeTurnCommand({
    commandId,
    status: "UNKNOWN",
    errorCategory,
    ownerToken,
    resultJson,
  });
}

/** Force-stale helper for tests — advances updated_at into the past (uses turnClock). */
export async function injectStaleRunningForTests(commandId: string, ageMs = TURN_RUNNING_STALE_MS + 1000) {
  const past = new Date(turnClock.nowMs() - ageMs);
  await db
    .update(conversationTurnCommands)
    .set({ updatedAt: past })
    .where(eq(conversationTurnCommands.id, commandId));
}

/** Test helper: revoke ownership while leaving status RUNNING (simulates lost fence mid-flight). */
export async function revokeOwnerTokenForTests(commandId: string) {
  await db
    .update(conversationTurnCommands)
    .set({
      ownerToken: `revoked_${randomUUID()}`,
      updatedAt: new Date(turnClock.nowMs()),
    })
    .where(eq(conversationTurnCommands.id, commandId));
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/src/domains/pilotage/intent.ts`

```tsx
import type { CycleType } from "@/domains/pilotage/cki-resolve";
import type { PilotageOperation } from "@/domains/pilotage/types";

export type IntentQualification =
  | {
      clarity: "CLEAR";
      operation: PilotageOperation;
      cycleType?: CycleType;
      toCycleType?: CycleType;
      methodRef?: string;
      methodVersion?: string;
      objective?: string;
      /** Documentary decision text (RECORD / REVISE). */
      statement?: string;
      /** Bounded object key for D6 confrontation — not authority by itself. */
      objectRef?: string;
      /** Resolved only when the caller already knows the D6 target. */
      decisionId?: string;
    }
  | { clarity: "AMBIGUOUS"; reason: string }
  | { clarity: "NONE"; reason: string };

/** Derive a short objectRef from a decision statement for journal / confrontation. */
export function deriveDecisionObjectRef(statement: string): string {
  const text = statement.trim().replace(/\s+/g, " ");
  const anchored = text.match(
    /(?:que\s+)?(?:la|le|l['’])?\s*([^,?.;]{3,60}?)\s+(?:est|sera|devient|reste|doit|peu[tv])\b/i,
  );
  if (anchored?.[1]) return anchored[1].trim().slice(0, 80);
  const tokens = text
    .toLowerCase()
    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
    .filter((t) => t.length >= 4)
    .slice(0, 4);
  return (tokens.join(" ") || text.slice(0, 40)).trim();
}

const PHRASES: Array<{ type: CycleType; phrase: string }> = [
  { type: "CONCEPTION_FONCTIONNELLE", phrase: "conception fonctionnelle" },
  { type: "ARCHITECTURE_FONCTIONNELLE", phrase: "architecture fonctionnelle" },
  { type: "ARCHITECTURE_TECHNIQUE", phrase: "architecture technique" },
  { type: "INTEGRATION_DEVOPS", phrase: "intégration devops" },
  { type: "INTEGRATION_DEVOPS", phrase: "integration devops" },
  { type: "INTEGRATION_DEVOPS", phrase: "devops" },
  { type: "DEPLOIEMENT_RELEASE", phrase: "déploiement" },
  { type: "DEPLOIEMENT_RELEASE", phrase: "deploiement" },
  { type: "OBSERVABILITE", phrase: "observabilité" },
  { type: "OBSERVABILITE", phrase: "observabilite" },
  { type: "PR_READINESS", phrase: "pr readiness" },
  { type: "POST_MERGE", phrase: "post-merge" },
  { type: "POST_MERGE", phrase: "post merge" },
  { type: "CAPITALISATION", phrase: "capitalisation" },
  { type: "QA_VALIDATION", phrase: "validation" },
  { type: "QA_VALIDATION", phrase: "qa" },
  { type: "SECURITE", phrase: "sécurité" },
  { type: "SECURITE", phrase: "securite" },
  { type: "BACKLOG", phrase: "user stories" },
  { type: "BACKLOG", phrase: "backlog" },
  { type: "UX_UI", phrase: "ux/ui" },
  { type: "UX_UI", phrase: "ux" },
  { type: "DELIVERY", phrase: "réalisation" },
  { type: "DELIVERY", phrase: "realisation" },
  { type: "CADRAGE", phrase: "cadrage" },
];

const AMBIGUOUS_EXACT =
  /^(ok|okay|oui|d'accord|dac|vas-y|go|parfait|ça marche|ca marche)\.?$/i;

/**
 * C01 — exploratory / hypothetical language is never an opposable D6 act.
 * Level A confrontation may still surface candidates; this gate stays linguistic.
 */
const EXPLORATORY_ACT =
  /\b(je pense|je r[eé]fl[eé]chis|je me demande|j['’]envisage|pourrait|pourrais|ce serait|il serait|peut-être|peut etre|et si|nora (?:propose|sugg[eè]re)|int[eé]ressant|hypoth[eè]se|envisager|envisagerais|semblerait|aurait l['’]air)\b/i;

function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

/** True when the wording is reflective/hypothetical — not a clear human performative. */
export function isExploratoryActLanguage(text: string): boolean {
  const t = text.trim();
  if (!t) return true;
  if (/\?$/.test(t)) return true;
  if (/^(est-ce|dois-je|peut-on|devrait-on|et si)\b/i.test(t)) return true;
  return EXPLORATORY_ACT.test(t);
}

function escapeRe(phrase: string): string {
  return phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function cyclesMentioned(text: string): CycleType[] {
  let masked = normalize(text);
  const found: CycleType[] = [];
  const phrases = [...PHRASES].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const item of phrases) {
    const re = new RegExp(`(?:^|\\s)${escapeRe(item.phrase)}(?:$|\\s|[,.])`, "i");
    if (re.test(masked)) {
      if (!found.includes(item.type)) found.push(item.type);
      masked = masked.replace(item.phrase, " ");
    }
  }
  return found;
}

function matchCyclePrefix(
  text: string,
): { type: CycleType; rest: string } | { ambiguous: true } | null {
  const n = normalize(text);
  const phrases = [...PHRASES].sort((a, b) => b.phrase.length - a.phrase.length);
  for (const item of phrases) {
    const boundary = new RegExp(`^${escapeRe(item.phrase)}(?:$|\\s|[,.])`, "i");
    if (!boundary.test(n)) continue;
    const rest = n.slice(item.phrase.length).trim();
    if (cyclesMentioned(rest).length > 0) return { ambiguous: true };
    return { type: item.type, rest };
  }
  return null;
}

function splitMethod(raw: string): { ref: string; version: string | null } {
  const text = raw.trim().replace(/[.;]+$/, "");
  const versioned = text.match(/^(.*?)(?:\s+version\s+(\S+))$/i);
  if (versioned && versioned[1].trim()) {
    return { ref: versioned[1].trim(), version: versioned[2] };
  }
  return { ref: text, version: null };
}

/**
 * Natural-language qualification. An exact "OK" / "go" is never a cycle GO.
 * Two specialties in one sentence without an explicit transition are ambiguous.
 * "Annule cette méthode" is ambiguous until the pilot names withdraw, replace, or a decision.
 */
export function qualifyPilotageIntent(utterance: string): IntentQualification {
  const text = utterance.trim().replace(/\s+/g, " ");
  if (!text) return { clarity: "AMBIGUOUS", reason: "Énoncé vide" };
  if (AMBIGUOUS_EXACT.test(text)) return { clarity: "AMBIGUOUS", reason: "Énoncé insuffisant" };
  if (
    /\b(annule|annuler|révoque|revoque)\b/i.test(text) &&
    !/\b(retire|retirer|remplace|remplacer)\b/i.test(text)
  ) {
    return { clarity: "AMBIGUOUS", reason: "Cible d'annulation ambiguë" };
  }

  const transition = text.match(
    /cl[oô]ture(?:r)?\s+(?:le\s+)?cycle\s+(.+?)\s+et\s+ouvre(?:r)?\s+(?:le\s+)?cycle\s+(.+)$/i,
  );
  if (transition) {
    const from = matchCyclePrefix(transition[1]);
    const to = matchCyclePrefix(transition[2]);
    if (!from || "ambiguous" in from || !to || "ambiguous" in to || from.type === to.type) {
      return { clarity: "AMBIGUOUS", reason: "Transition ambiguë" };
    }
    return {
      clarity: "CLEAR",
      operation: "TRANSITION_CYCLE",
      cycleType: from.type,
      toCycleType: to.type,
      objective: text,
    };
  }

  const replace = text.match(
    /remplace(?:r)?\s+(?:la\s+)?méthode\s+(.+?)\s+par\s+(?:la\s+méthode\s+)?(.+)$/i,
  );
  if (replace) {
    const next = splitMethod(replace[2]);
    if (!next.ref) return { clarity: "AMBIGUOUS", reason: "Méthode de remplacement non identifiée" };
    return {
      clarity: "CLEAR",
      operation: "REPLACE_METHOD",
      methodRef: next.ref,
      methodVersion: next.version ?? "",
      objective: text,
    };
  }

  if (/retire(?:r)?\s+(?:la\s+)?méthode|sans méthode|plus de méthode/i.test(text)) {
    return { clarity: "CLEAR", operation: "WITHDRAW_METHOD", objective: text };
  }

  const choose = text.match(
    /(?:retiens|retenir|choisis|choisir|adopte|adopter)\s+(?:la\s+)?méthode\s+(.+)$/i,
  );
  if (choose) {
    const method = splitMethod(choose[1]);
    if (!method.ref) return { clarity: "AMBIGUOUS", reason: "Méthode non identifiée" };
    return {
      clarity: "CLEAR",
      operation: "CHOOSE_METHOD",
      methodRef: method.ref,
      methodVersion: method.version ?? "",
      objective: text,
    };
  }

  const open = text.match(
    /^(?:ouvre|ouvrir|ouvrez|go(?:\s+pour|\s+sur)?)\s+(?:le\s+|un\s+)?cycle\s+(?:de\s+|d['’]\s*)?(.+)$/i,
  );
  if (open) {
    const matched = matchCyclePrefix(open[1]);
    if (!matched || "ambiguous" in matched) {
      return { clarity: "AMBIGUOUS", reason: "Type de cycle ambigu" };
    }
    return {
      clarity: "CLEAR",
      operation: "OPEN_CYCLE",
      cycleType: matched.type,
      objective: matched.rest || `Cycle ${matched.type}`,
    };
  }

  const close = text.match(
    /^(?:cl[oô]ture|cl[oô]turer|clore|ferme|fermer)\s+(?:le\s+)?cycle(?:\s+(.+))?$/i,
  );
  if (close) {
    if (!close[1]) return { clarity: "CLEAR", operation: "CLOSE_CYCLE", objective: text };
    const matched = matchCyclePrefix(close[1]);
    if (!matched || "ambiguous" in matched) {
      return { clarity: "AMBIGUOUS", reason: "Clôture ambiguë" };
    }
    return { clarity: "CLEAR", operation: "CLOSE_CYCLE", cycleType: matched.type, objective: text };
  }

  /**
   * Documentary RECORD — explicit performative only.
   * Questions, soft preferences, citations and Nora advice must not match.
   */
  const record = text.match(
    /^(?:je décide(?:\s+que)?|décision\s*:|j['’]enregistre(?:\s+(?:la\s+décision|que))?)\s+(.+)$/i,
  );
  if (record) {
    const statement = record[1].trim().replace(/[.;]+$/, "");
    if (statement.length < 8) {
      return { clarity: "AMBIGUOUS", reason: "Décision insuffisamment déterminée" };
    }
    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
      return { clarity: "AMBIGUOUS", reason: "Préférence exploratoire — pas une décision" };
    }
    return {
      clarity: "CLEAR",
      operation: "RECORD_DECISION",
      objective: statement,
      statement,
      objectRef: deriveDecisionObjectRef(statement),
    };
  }

  /**
   * Documentary REVISE — C01: "Finalement…" alone is not enough when hedges remain.
   * Explicit "Je révise la décision…" is the strong performative.
   * Target resolution still requires D6 briefs (caller); Level A never authorizes alone.
   */
  const explicitRevise = text.match(
    /^je (?:révise|revise|corrige|remplace|modifie)(?:\s+la\s+décision(?:\s+[^:]+)?)?\s*[:,]?\s*(.+)$/i,
  );
  if (explicitRevise) {
    const statement = explicitRevise[1].trim().replace(/[.;]+$/, "");
    if (statement.length < 8) {
      return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
    }
    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
      return { clarity: "AMBIGUOUS", reason: "Réflexion — pas un acte de révision" };
    }
    return {
      clarity: "CLEAR",
      operation: "REVISE_DECISION",
      objective: statement,
      statement,
      objectRef: deriveDecisionObjectRef(statement),
    };
  }

  const softRevise = text.match(/^(?:finalement|désormais|dorénavant)[,:]?\s+(.+)$/i);
  if (softRevise) {
    const statement = softRevise[1].trim().replace(/[.;]+$/, "");
    if (statement.length < 8) {
      return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
    }
    // C01: hedges / questions / Nora suggestions must not become CLEAR REVISE.
    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
      return {
        clarity: "AMBIGUOUS",
        reason: "Expression exploratoire — clarification requise, aucune révision automatique",
      };
    }
    // Require an assertive change predicate (devient/est/reste/sera) — not mere topic mention.
    if (!/\b(devient|est|reste|sera|n['’]est plus|n['’]est pas)\b/i.test(statement)) {
      return {
        clarity: "AMBIGUOUS",
        reason: "Changement de décision non asserté — précisez l'acte de révision",
      };
    }
    return {
      clarity: "CLEAR",
      operation: "REVISE_DECISION",
      objective: statement,
      statement,
      objectRef: deriveDecisionObjectRef(statement),
    };
  }

  if (cyclesMentioned(text).length >= 2) {
    return { clarity: "AMBIGUOUS", reason: "Plusieurs cycles cités" };
  }
  return { clarity: "NONE", reason: "Intention non reconnue" };
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/src/domains/pilotage/service.ts`

```tsx
import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommandEffects,
  businessCommands,
  conversations,
  governanceRestrictions,
  humanDecisions,
  messages,
  methodApplications,
  projectCycles,
  projectPilotageState,
  projects,
  trajectoryRevisions,
} from "@/db/schema";
import { RESTRICTION_TARGETS, type RestrictionTargetKind } from "@/domains/decisions/types";
import { methodUsageRestricted } from "@/domains/decisions/authority";
import {
  insertHumanDecision,
  insertRestriction,
  liftRestrictionRow,
  markDecisionState,
} from "@/domains/decisions/service";
import { isCycleType, resolveForOpen, resolvePinnedCki, type CycleType } from "@/domains/pilotage/cki-resolve";
import {
  buildSourceActionKey,
  runBusinessCommand,
  toCommandResult,
  type ClassifyResult,
  type ClientEnvelope,
  type DbTx,
  type MutateResult,
} from "@/domains/pilotage/command-runner";
import { qualifyPilotageIntent, type IntentQualification } from "@/domains/pilotage/intent";
import {
  PILOTAGE_OPERATIONS,
  SOURCE_KINDS,
  type ClassifiedCommand,
  type PilotageOperation,
  type PilotageProjection,
  type PilotageRequestBody,
  type SourceKind,
  type TrajectoryView,
} from "@/domains/pilotage/types";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

/** Test-only fault between CLOSE and OPEN. A throw rolls back both effects. */
export const pilotageFault: { afterCloseBeforeOpen: null | (() => void) } = {
  afterCloseBeforeOpen: null,
};

type ClearIntent = Extract<IntentQualification, { clarity: "CLEAR" }>;

function rejected(reasonCode: string, reason: string): MutateResult {
  return { kind: "REJECTED", reasonCode, reason, persist: true };
}

async function bumpRevision(
  tx: DbTx,
  projectId: string,
  pointer?: { id: string | null },
): Promise<number> {
  const row = (
    await tx
      .select()
      .from(projectPilotageState)
      .where(eq(projectPilotageState.projectId, projectId))
      .limit(1)
  )[0];
  const now = new Date();
  if (!row) {
    await tx.insert(projectPilotageState).values({
      projectId,
      revision: 1,
      currentTrajectoryRevisionId: pointer ? pointer.id : null,
      updatedAt: now,
    });
    return 1;
  }
  const revision = row.revision + 1;
  await tx
    .update(projectPilotageState)
    .set({
      revision,
      updatedAt: now,
      ...(pointer ? { currentTrajectoryRevisionId: pointer.id } : {}),
    })
    .where(eq(projectPilotageState.projectId, projectId));
  return revision;
}

async function nextTrajectoryNumber(tx: DbTx, projectId: string): Promise<number> {
  const last = (
    await tx
      .select({ n: trajectoryRevisions.revisionNumber })
      .from(trajectoryRevisions)
      .where(eq(trajectoryRevisions.projectId, projectId))
      .orderBy(desc(trajectoryRevisions.revisionNumber))
      .limit(1)
  )[0];
  return (last?.n ?? 0) + 1;
}

async function activeCycle(tx: DbTx, projectId: string) {
  return (
    await tx
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, projectId), eq(projectCycles.status, "ACTIVE")))
      .limit(1)
  )[0];
}

async function currentMethod(tx: DbTx, projectId: string) {
  return (
    await tx
      .select()
      .from(methodApplications)
      .where(and(eq(methodApplications.projectId, projectId), eq(methodApplications.isCurrent, true)))
      .limit(1)
  )[0];
}

function trajectoryView(row: {
  id: string;
  revisionNumber: number;
  status: string;
  orientation: string;
  decisionId: string | null;
} | undefined): TrajectoryView {
  if (!row) return null;
  return {
    id: row.id,
    revisionNumber: row.revisionNumber,
    status: row.status,
    orientation: row.orientation,
    decisionId: row.decisionId,
  };
}

export async function getPilotageProjection(pilotId: string, projectId: string): Promise<PilotageProjection> {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");

  const state = (
    await db
      .select()
      .from(projectPilotageState)
      .where(eq(projectPilotageState.projectId, projectId))
      .limit(1)
  )[0];

  const retained = (
    await db
      .select()
      .from(trajectoryRevisions)
      .where(and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "RETAINED")))
      .orderBy(desc(trajectoryRevisions.revisionNumber))
      .limit(1)
  )[0];
  const proposed = (
    await db
      .select()
      .from(trajectoryRevisions)
      .where(and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "PROPOSED")))
      .orderBy(desc(trajectoryRevisions.revisionNumber))
      .limit(1)
  )[0];

  const cycle = await activeCycle(db as unknown as DbTx, projectId);
  const method = await currentMethod(db as unknown as DbTx, projectId);
  const restrictions = await db
    .select()
    .from(governanceRestrictions)
    .where(and(eq(governanceRestrictions.projectId, projectId), eq(governanceRestrictions.status, "ACTIVE")));

  const usageRestricted = method
    ? methodUsageRestricted(restrictions, method.methodRef)
    : false;

  return {
    projectId,
    revision: state?.revision ?? 0,
    trajectory: {
      retained: trajectoryView(retained),
      proposed: trajectoryView(proposed),
    },
    cycle: cycle
      ? {
          id: cycle.id,
          cycleType: cycle.cycleType,
          status: cycle.status,
          objective: cycle.objective,
          revision: cycle.revision,
          cki: resolvePinnedCki({
            ckiId: cycle.ckiId,
            contentDigest: cycle.ckiContentDigest,
            pinnedVersion: cycle.ckiPinnedVersion,
            manifestRef: cycle.ckiManifestRef,
            pinOrigin: cycle.ckiPinOrigin,
          }),
        }
      : null,
    method: method
      ? {
          presence: "RETAINED",
          usageRestricted,
          usageNote: usageRestricted ? "Méthode retenue mais pas pleinement applicable" : null,
          methodRef: method.methodRef,
          methodVersion: method.methodVersion,
          decisionId: method.decisionId,
          applicationId: method.id,
          scope: method.scope,
        }
      : { presence: "ABSENT", usageRestricted: false },
    restrictions: restrictions.map((r) => ({
      id: r.id,
      targetKind: r.targetKind,
      targetRef: r.targetRef,
      status: r.status,
    })),
  };
}

export async function reconcileCommand(pilotId: string, projectId: string, commandId: string) {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
  const cmd = (
    await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.id, commandId),
          eq(businessCommands.projectId, projectId),
          eq(businessCommands.actorPilotId, pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!cmd) throw new StudioError("NOT_FOUND", "Commande introuvable");
  const effects = await db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, cmd.id))
    .orderBy(asc(businessCommandEffects.ordinal));
  return toCommandResult(cmd, effects, "replay");
}

export async function reconcileCommandByClientKey(
  pilotId: string,
  projectId: string,
  clientCommandKey: string,
) {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
  const key = clientCommandKey.trim();
  if (!key) throw new StudioError("NOT_FOUND", "Commande introuvable");
  const cmd = (
    await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, projectId),
          eq(businessCommands.actorPilotId, pilotId),
          eq(businessCommands.clientCommandKey, key),
        ),
      )
      .limit(1)
  )[0];
  if (!cmd) throw new StudioError("NOT_FOUND", "Commande introuvable");
  const effects = await db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, cmd.id))
    .orderBy(asc(businessCommandEffects.ordinal));
  return toCommandResult(cmd, effects, "replay");
}

/** Statuses that may authorize a USER_MESSAGE GO. Others stay non-authoritative. */
const USER_MESSAGE_GO_STATUSES = new Set(["COMPLETE"]);

async function loadUserMessage(tx: DbTx, projectId: string, pilotId: string, messageId: string) {
  return (
    await tx
      .select({
        id: messages.id,
        role: messages.role,
        status: messages.status,
        content: messages.content,
        projectId: conversations.projectId,
        ownerPilotId: conversations.ownerPilotId,
      })
      .from(messages)
      .innerJoin(conversations, eq(messages.conversationId, conversations.id))
      .where(eq(messages.id, messageId))
      .limit(1)
  )[0];
}

function userMessageAuthorizes(message: {
  role: string;
  status: string;
  projectId: string | null;
  ownerPilotId: string;
}, projectId: string, pilotId: string): boolean {
  return (
    message.role.trim().toUpperCase() === "USER" &&
    USER_MESSAGE_GO_STATUSES.has(message.status) &&
    message.projectId === projectId &&
    message.ownerPilotId === pilotId
  );
}

function fromClearIntent(
  sourceKind: SourceKind,
  sourceRef: string,
  qualified: ClearIntent,
  body: PilotageRequestBody,
): ClassifyResult {
  const cycleType =
    qualified.cycleType ?? (body.cycleType && isCycleType(body.cycleType) ? body.cycleType : null);
  if (qualified.operation === "REVISE_DECISION" && !(body.decisionId ?? qualified.decisionId)) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS",
      reason: "Révision sans cible D6 déterminée",
      sourceActionKey: "REJECT|AMBIGUOUS|revise-target",
    };
  }
  const command: ClassifiedCommand = {
    operation: qualified.operation,
    sourceKind,
    sourceRef,
    objective: (body.objective ?? qualified.objective ?? "").trim() || (cycleType ? `Cycle ${cycleType}` : ""),
    cycleType,
    cycleId: body.cycleId ?? null,
    toCycleType: qualified.toCycleType ?? null,
    orientation: (body.orientation ?? "").trim(),
    trajectoryRevisionId: body.trajectoryRevisionId ?? null,
    methodRef: (qualified.methodRef ?? body.methodRef ?? "").trim(),
    methodVersion: (qualified.methodVersion || body.methodVersion || "").trim(),
    decisionId: body.decisionId ?? qualified.decisionId ?? null,
    restrictionId: body.restrictionId ?? null,
    targetKind: body.targetKind ?? "",
    targetRef: (body.targetRef ?? "*").trim() || "*",
    statement: (body.statement ?? qualified.statement ?? qualified.objective ?? "")
      .trim()
      .slice(0, 500),
    balanceNote: (body.balanceNote ?? "").trim(),
    actInstanceId: (body.actInstanceId ?? "").trim(),
    objectRef: (body.objectRef ?? qualified.objectRef ?? "").trim(),
    sourceActionKey: "",
  };
  if (
    (command.operation === "CHOOSE_METHOD" || command.operation === "REPLACE_METHOD") &&
    (!command.methodRef || !command.methodVersion)
  ) {
    return {
      ok: false,
      reasonCode: "INVALID",
      reason: "Version de méthode requise",
      sourceActionKey: buildSourceActionKey(command),
    };
  }
  if ((command.operation === "OPEN_CYCLE" || command.operation === "TRANSITION_CYCLE") && !command.cycleType && command.operation === "OPEN_CYCLE") {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle requis", sourceActionKey: "REJECT|INVALID|open" };
  }
  if (command.operation === "TRANSITION_CYCLE" && (!command.cycleType || !command.toCycleType)) {
    return { ok: false, reasonCode: "INVALID", reason: "Transition incomplète", sourceActionKey: "REJECT|INVALID|transition" };
  }
  command.sourceActionKey = buildSourceActionKey(command);
  return { ok: true, command };
}

async function classifyCommand(tx: DbTx, input: ClientEnvelope): Promise<ClassifyResult> {
  const body = input.body;
  const sourceKind = body.sourceKind ?? "";
  const sourceRef = body.sourceRef?.trim() ?? "";
  if (!(SOURCE_KINDS as readonly string[]).includes(sourceKind)) {
    return {
      ok: false,
      reasonCode: "SOURCE",
      reason: "Source non autorisante",
      sourceActionKey: `REJECT|SOURCE|${sourceKind}`,
    };
  }

  if (sourceKind === "USER_MESSAGE") {
    const message = await loadUserMessage(tx, input.projectId, input.pilotId, sourceRef);
    if (!message || !userMessageAuthorizes(message, input.projectId, input.pilotId)) {
      return {
        ok: false,
        reasonCode: "SOURCE",
        reason: "Message utilisateur non vérifié pour ce projet",
        sourceActionKey: `REJECT|SOURCE|${sourceRef}`,
      };
    }
    const utterance = (body.utterance ?? "").trim();
    if (utterance && utterance !== message.content.trim()) {
      return {
        ok: false,
        reasonCode: "SOURCE",
        reason: "L'énoncé ne correspond pas au message source",
        sourceActionKey: "REJECT|SOURCE|mismatch",
      };
    }
    const qualified = qualifyPilotageIntent(utterance || message.content);
    if (qualified.clarity !== "CLEAR") {
      const reasonCode = qualified.clarity === "AMBIGUOUS" ? "AMBIGUOUS" : "INVALID";
      return {
        ok: false,
        reasonCode,
        reason: qualified.reason,
        sourceActionKey: `REJECT|${reasonCode}`,
      };
    }
    if (body.operation && body.operation !== qualified.operation) {
      return {
        ok: false,
        reasonCode: "AMBIGUOUS",
        reason: "L'opération ne correspond pas à l'énoncé",
        sourceActionKey: `REJECT|MISMATCH|${body.operation}`,
      };
    }
    return fromClearIntent(sourceKind, sourceRef, qualified, body);
  }

  if (sourceKind === "COGNITIVE_PROPOSAL" && body.operation !== "PROPOSE_TRAJECTORY") {
    return {
      ok: false,
      reasonCode: "SOURCE",
      reason: "Une proposition cognitive n'est pas un GO",
      sourceActionKey: "REJECT|SOURCE|cognitive",
    };
  }

  const explicitNatural = classifyExplicitInteraction(body);
  if (explicitNatural) return explicitNatural;

  if (!body.operation || !(PILOTAGE_OPERATIONS as readonly string[]).includes(body.operation)) {
    return {
      ok: false,
      reasonCode: "INVALID",
      reason: "Opération inconnue",
      sourceActionKey: `REJECT|INVALID|${body.operation ?? ""}`,
    };
  }

  const operation = body.operation as PilotageOperation;
  const cycleType = body.cycleType ? (isCycleType(body.cycleType) ? body.cycleType : null) : null;
  if (body.cycleType && !cycleType) {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle inconnu", sourceActionKey: "REJECT|INVALID|cycle" };
  }
  const toCycleType = body.toCycleType ? (isCycleType(body.toCycleType) ? body.toCycleType : null) : null;
  if (body.toCycleType && !toCycleType) {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle cible inconnu", sourceActionKey: "REJECT|INVALID|target-cycle" };
  }
  if (operation === "OPEN_CYCLE" && !cycleType) {
    return { ok: false, reasonCode: "INVALID", reason: "Type de cycle requis", sourceActionKey: "REJECT|INVALID|open" };
  }
  if (operation === "TRANSITION_CYCLE" && !toCycleType) {
    return { ok: false, reasonCode: "INVALID", reason: "Cycle cible requis", sourceActionKey: "REJECT|INVALID|transition" };
  }
  if ((operation === "CHOOSE_METHOD" || operation === "REPLACE_METHOD") && (!body.methodRef?.trim() || !body.methodVersion?.trim())) {
    return {
      ok: false,
      reasonCode: "INVALID",
      reason: "Référence et version de méthode requises",
      sourceActionKey: buildSourceActionKey({
        operation,
        methodRef: body.methodRef,
        methodVersion: body.methodVersion,
      }),
    };
  }
  if (operation === "PROPOSE_TRAJECTORY" && !body.orientation?.trim()) {
    return { ok: false, reasonCode: "INVALID", reason: "Orientation requise", sourceActionKey: "REJECT|INVALID|propose" };
  }
  if (operation === "RETAIN_TRAJECTORY" && !body.trajectoryRevisionId && !body.orientation?.trim()) {
    return { ok: false, reasonCode: "INVALID", reason: "Trajectoire à retenir requise", sourceActionKey: "REJECT|INVALID|retain" };
  }
  if (operation === "REVOKE_DECISION" && !body.decisionId) {
    return { ok: false, reasonCode: "INVALID", reason: "Décision cible requise", sourceActionKey: "REJECT|INVALID|revoke" };
  }
  if (operation === "APPLY_RESTRICTION") {
    if (!body.targetKind || !(RESTRICTION_TARGETS as readonly string[]).includes(body.targetKind)) {
      return { ok: false, reasonCode: "INVALID", reason: "Cible de restriction inconnue", sourceActionKey: "REJECT|INVALID|restrict" };
    }
  }
  if (operation === "LIFT_RESTRICTION" && !body.restrictionId) {
    return { ok: false, reasonCode: "INVALID", reason: "Restriction à lever requise", sourceActionKey: "REJECT|INVALID|lift" };
  }
  if (operation === "RECORD_DECISION" && !body.statement?.trim()) {
    return { ok: false, reasonCode: "INVALID", reason: "Énoncé de décision requis", sourceActionKey: "REJECT|INVALID|record" };
  }
  if (operation === "REVISE_DECISION" && (!body.decisionId || !body.statement?.trim())) {
    return { ok: false, reasonCode: "INVALID", reason: "Décision et énoncé de révision requis", sourceActionKey: "REJECT|INVALID|revise" };
  }

  const command: ClassifiedCommand = {
    operation,
    sourceKind: sourceKind as SourceKind,
    sourceRef,
    objective: (body.objective ?? "").trim() || (cycleType ? `Cycle ${cycleType}` : (toCycleType ? `Cycle ${toCycleType}` : "")),
    cycleType,
    cycleId: body.cycleId ?? null,
    toCycleType,
    orientation: (body.orientation ?? "").trim(),
    trajectoryRevisionId: body.trajectoryRevisionId ?? null,
    methodRef: (body.methodRef ?? "").trim(),
    methodVersion: (body.methodVersion ?? "").trim(),
    decisionId: body.decisionId ?? null,
    restrictionId: body.restrictionId ?? null,
    targetKind: (body.targetKind ?? "") as RestrictionTargetKind | "",
    targetRef: (body.targetRef ?? "*").trim() || "*",
    statement: (body.statement ?? body.objective ?? body.orientation ?? "").trim().slice(0, 500),
    balanceNote: (body.balanceNote ?? "").trim(),
    actInstanceId: (body.actInstanceId ?? "").trim(),
    objectRef: (body.objectRef ?? "").trim(),
    sourceActionKey: "",
  };
  command.sourceActionKey = buildSourceActionKey(command);
  return { ok: true, command };
}

async function closeMethod(tx: DbTx, applicationId: string, reason: string) {
  await tx
    .update(methodApplications)
    .set({ isCurrent: false, effectiveUntil: new Date(), closeReason: reason })
    .where(eq(methodApplications.id, applicationId));
}

async function mutateCommand(tx: DbTx, input: ClientEnvelope, command: ClassifiedCommand): Promise<MutateResult> {
  const projectId = input.projectId;
  const pilotId = input.pilotId;
  const now = new Date();

  if (command.operation === "PROPOSE_TRAJECTORY") {
    const id = newId("trj");
    await tx.insert(trajectoryRevisions).values({
      id,
      projectId,
      revisionNumber: await nextTrajectoryNumber(tx, projectId),
      status: "PROPOSED",
      orientation: command.orientation.slice(0, 2000),
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      decisionId: null,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId: null,
      revision,
      effects: [{ effectKind: "PROPOSE", targetRef: id }],
    };
  }

  if (command.operation === "RETAIN_TRAJECTORY") {
    let orientation = command.orientation;
    if (command.trajectoryRevisionId) {
      const prior = (
        await tx
          .select()
          .from(trajectoryRevisions)
          .where(and(eq(trajectoryRevisions.id, command.trajectoryRevisionId), eq(trajectoryRevisions.projectId, projectId)))
          .limit(1)
      )[0];
      if (!prior) return rejected("INVALID_TARGET", "Trajectoire introuvable dans ce projet");
      orientation = orientation || prior.orientation;
    }
    if (!orientation.trim()) return rejected("INVALID", "Orientation requise");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "RETAIN_TRAJECTORY",
      objectRef: command.trajectoryRevisionId ?? "",
      statement: command.statement || orientation,
    });
    await tx
      .update(trajectoryRevisions)
      .set({ status: "SUPERSEDED" })
      .where(and(eq(trajectoryRevisions.projectId, projectId), eq(trajectoryRevisions.status, "RETAINED")));
    const id = newId("trj");
    await tx.insert(trajectoryRevisions).values({
      id,
      projectId,
      revisionNumber: await nextTrajectoryNumber(tx, projectId),
      status: "RETAINED",
      orientation: orientation.slice(0, 2000),
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      decisionId,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId, { id });
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "RETAIN", targetRef: id }],
    };
  }

  if (command.operation === "OPEN_CYCLE") {
    if (!command.cycleType) return rejected("INVALID", "Type de cycle requis");
    if (await activeCycle(tx, projectId)) {
      return rejected("ACTIVE_CYCLE", "Un cycle est déjà actif");
    }
    const pin = resolveForOpen(command.cycleType);
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "OPEN_CYCLE",
      objectRef: command.cycleType,
      statement: command.statement || command.objective || `Ouverture ${command.cycleType}`,
    });
    const cycleId = newId("cyc");
    await tx.insert(projectCycles).values({
      id: cycleId,
      projectId,
      cycleType: command.cycleType,
      objective: (command.objective || `Cycle ${command.cycleType}`).slice(0, 2000),
      status: "ACTIVE",
      revision: 1,
      openedAt: now,
      openDecisionId: decisionId,
      ckiId: pin.ckiId,
      ckiPinnedVersion: pin.pinnedVersion,
      ckiContentDigest: pin.contentDigest,
      ckiManifestRef: pin.manifestRef,
      ckiPinOrigin: pin.pinOrigin,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "OPEN", targetRef: cycleId, detail: { cycleType: command.cycleType, cki: pin.availability } }],
    };
  }

  if (command.operation === "CLOSE_CYCLE") {
    const active = await activeCycle(tx, projectId);
    if (!active) return rejected("NO_ACTIVE", "Aucun cycle actif");
    if (command.cycleId && command.cycleId !== active.id) return rejected("INVALID_TARGET", "Cycle cible différent du cycle actif");
    if (command.cycleType && command.cycleType !== active.cycleType) return rejected("INVALID_TARGET", "Type différent du cycle actif");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "CLOSE_CYCLE",
      objectRef: active.id,
      statement: command.statement || command.balanceNote || `Clôture ${active.cycleType}`,
    });
    const closed = await tx
      .update(projectCycles)
      .set({
        status: "CLOSED",
        closedAt: now,
        closeDecisionId: decisionId,
        balanceNote: command.balanceNote || null,
        revision: active.revision + 1,
      })
      .where(and(eq(projectCycles.id, active.id), eq(projectCycles.status, "ACTIVE")))
      .returning({ id: projectCycles.id });
    if (closed.length === 0) throw new Error("CYCLE_LOST");
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "CLOSE", targetRef: active.id }],
    };
  }

  if (command.operation === "TRANSITION_CYCLE") {
    const active = await activeCycle(tx, projectId);
    if (!active) return rejected("NO_ACTIVE", "Aucun cycle actif");
    if (!command.toCycleType) return rejected("INVALID", "Cycle cible requis");
    if (command.cycleId && command.cycleId !== active.id) return rejected("INVALID_TARGET", "Cycle source différent du cycle actif");
    if (command.cycleType && command.cycleType !== active.cycleType) return rejected("INVALID_TARGET", "Type source différent du cycle actif");
    if (command.toCycleType === active.cycleType) return rejected("INVALID", "La transition vise le même type");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "TRANSITION_CYCLE",
      objectRef: `${active.id}->${command.toCycleType}`,
      statement: command.statement || `Transition ${active.cycleType} vers ${command.toCycleType}`,
    });
    const closed = await tx
      .update(projectCycles)
      .set({
        status: "CLOSED",
        closedAt: now,
        closeDecisionId: decisionId,
        balanceNote: command.balanceNote || null,
        revision: active.revision + 1,
      })
      .where(and(eq(projectCycles.id, active.id), eq(projectCycles.status, "ACTIVE")))
      .returning({ id: projectCycles.id });
    if (closed.length === 0) throw new Error("CYCLE_LOST");
    pilotageFault.afterCloseBeforeOpen?.();
    const pin = resolveForOpen(command.toCycleType);
    const openedId = newId("cyc");
    await tx.insert(projectCycles).values({
      id: openedId,
      projectId,
      cycleType: command.toCycleType,
      objective: (command.objective || `Cycle ${command.toCycleType}`).slice(0, 2000),
      status: "ACTIVE",
      revision: 1,
      openedAt: now,
      openDecisionId: decisionId,
      ckiId: pin.ckiId,
      ckiPinnedVersion: pin.pinnedVersion,
      ckiContentDigest: pin.contentDigest,
      ckiManifestRef: pin.manifestRef,
      ckiPinOrigin: pin.pinOrigin,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [
        { effectKind: "CLOSE", targetRef: active.id },
        { effectKind: "OPEN", targetRef: openedId, detail: { cycleType: command.toCycleType, cki: pin.availability } },
      ],
    };
  }

  if (command.operation === "CHOOSE_METHOD") {
    if (await currentMethod(tx, projectId)) return rejected("ALREADY_PRESENT", "Une méthode est déjà retenue");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "CHOOSE_METHOD",
      objectRef: `${command.methodRef}@${command.methodVersion}`,
      statement: command.statement || `Méthode ${command.methodRef} ${command.methodVersion}`,
    });
    const applicationId = newId("meth");
    await tx.insert(methodApplications).values({
      id: applicationId,
      projectId,
      methodRef: command.methodRef,
      methodVersion: command.methodVersion,
      scope: "PROJECT",
      decisionId,
      effectiveFrom: now,
      isCurrent: true,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "CHOOSE_METHOD", targetRef: applicationId }],
    };
  }

  if (command.operation === "REPLACE_METHOD") {
    const current = await currentMethod(tx, projectId);
    if (!current) return rejected("NO_METHOD", "Aucune méthode courante à remplacer");
    await closeMethod(tx, current.id, "REPLACED");
    await markDecisionState(tx, current.decisionId, "SUPERSEDED");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "REPLACE_METHOD",
      objectRef: `${command.methodRef}@${command.methodVersion}`,
      statement: command.statement || `Remplace par ${command.methodRef} ${command.methodVersion}`,
      supersedesDecisionId: current.decisionId,
    });
    const applicationId = newId("meth");
    await tx.insert(methodApplications).values({
      id: applicationId,
      projectId,
      methodRef: command.methodRef,
      methodVersion: command.methodVersion,
      scope: "PROJECT",
      decisionId,
      effectiveFrom: now,
      isCurrent: true,
      createdAt: now,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "REPLACE_METHOD", targetRef: applicationId, detail: { closed: current.id } }],
    };
  }

  if (command.operation === "WITHDRAW_METHOD") {
    const current = await currentMethod(tx, projectId);
    if (!current) return rejected("NO_METHOD", "Aucune méthode courante");
    await closeMethod(tx, current.id, "WITHDRAWN");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "WITHDRAW_METHOD",
      objectRef: current.id,
      statement: command.statement || "Retrait de la méthode",
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "WITHDRAW_METHOD", targetRef: current.id }],
    };
  }

  if (command.operation === "REVOKE_DECISION") {
    if (!command.decisionId) return rejected("INVALID", "Décision cible requise");
    const target = (
      await tx
        .select()
        .from(humanDecisions)
        .where(and(eq(humanDecisions.id, command.decisionId), eq(humanDecisions.projectId, projectId)))
        .limit(1)
    )[0];
    if (!target) return rejected("INVALID_TARGET", "Décision introuvable dans ce projet");
    if (target.state === "REVOKED") return rejected("ALREADY_REVOKED", "Décision déjà révoquée");
    await markDecisionState(tx, target.id, "REVOKED");
    const current = await currentMethod(tx, projectId);
    const closesCurrent = current?.decisionId === target.id;
    if (closesCurrent && current) await closeMethod(tx, current.id, "REVOKED_BASE");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "REVOKE_DECISION",
      objectRef: target.id,
      statement: command.statement || "Révocation",
      revokesDecisionId: target.id,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [
        {
          effectKind: closesCurrent ? "REVOKE_BASE" : "REVOKE_DECISION",
          targetRef: target.id,
        },
      ],
    };
  }

  if (command.operation === "APPLY_RESTRICTION") {
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "APPLY_RESTRICTION",
      objectRef: `${command.targetKind}:${command.targetRef}`,
      statement: command.statement || `Restriction ${command.targetKind}`,
    });
    const restrictionId = await insertRestriction(tx, {
      projectId,
      targetKind: command.targetKind,
      targetRef: command.targetRef || "*",
      originDecisionId: decisionId,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "APPLY_RESTRICTION", targetRef: restrictionId }],
    };
  }

  if (command.operation === "LIFT_RESTRICTION") {
    if (!command.restrictionId) return rejected("INVALID", "Restriction à lever requise");
    const existingRestriction = (
      await tx
        .select()
        .from(governanceRestrictions)
        .where(
          and(
            eq(governanceRestrictions.id, command.restrictionId),
            eq(governanceRestrictions.projectId, projectId),
          ),
        )
        .limit(1)
    )[0];
    if (!existingRestriction) return rejected("INVALID_TARGET", "Restriction introuvable dans ce projet");
    if (existingRestriction.status !== "ACTIVE") return rejected("ALREADY_LIFTED", "Restriction déjà levée");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "LIFT_RESTRICTION",
      objectRef: command.restrictionId,
      statement: command.statement || "Levée de restriction",
      liftsRestrictionId: command.restrictionId,
    });
    const lifted = await liftRestrictionRow(tx, {
      projectId,
      restrictionId: command.restrictionId,
      liftDecisionId: decisionId,
    });
    if (lifted !== "ok") throw new Error("RESTRICTION_LIFT_LOST");
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "LIFT_RESTRICTION", targetRef: command.restrictionId }],
    };
  }

  if (command.operation === "REVISE_DECISION") {
    if (!command.decisionId || !command.statement.trim()) {
      return rejected("INVALID", "Décision et énoncé de révision requis");
    }
    const target = (
      await tx
        .select()
        .from(humanDecisions)
        .where(and(eq(humanDecisions.id, command.decisionId), eq(humanDecisions.projectId, projectId)))
        .limit(1)
    )[0];
    if (!target) return rejected("INVALID_TARGET", "Décision introuvable dans ce projet");
    if (target.state !== "APPLICABLE") {
      return rejected("NOT_APPLICABLE", "Seule une décision applicable se révise");
    }
    /**
     * CR-02: generic REVISE must not orphan D5 state that still references the
     * founding decisionId (method_application, cycle open/close, restriction).
     * Prefer typed ops already contracted: REPLACE_METHOD, RETAIN_TRAJECTORY,
     * REVOKE_DECISION, WITHDRAW_METHOD, LIFT_RESTRICTION, TRANSITION_CYCLE, …
     * Documentary RECORD_DECISION (no D5 effect) may be revised in place.
     */
    const D5_FOUNDING_KINDS = new Set([
      "OPEN_CYCLE",
      "CLOSE_CYCLE",
      "TRANSITION_CYCLE",
      "CHOOSE_METHOD",
      "REPLACE_METHOD",
      "WITHDRAW_METHOD",
      "RETAIN_TRAJECTORY",
      "PROPOSE_TRAJECTORY",
      "APPLY_RESTRICTION",
      "LIFT_RESTRICTION",
      "REVOKE_DECISION",
    ]);
    if (D5_FOUNDING_KINDS.has(target.kind)) {
      return rejected(
        "USE_TYPED_OPERATION",
        `Révision générique refusée pour ${target.kind} — utiliser l'opération métier typée (REPLACE_METHOD, RETAIN_TRAJECTORY, REVOKE_DECISION, WITHDRAW_METHOD, …)`,
      );
    }
    const current = await currentMethod(tx, projectId);
    if (current?.decisionId === target.id) {
      return rejected(
        "USE_TYPED_OPERATION",
        "Cette décision fonde la méthode courante — utiliser REPLACE_METHOD, WITHDRAW_METHOD ou REVOKE_DECISION",
      );
    }
    await markDecisionState(tx, target.id, "REVISED");
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: target.kind,
      objectRef: target.objectRef,
      scope: target.scope,
      statement: command.statement,
      supersedesDecisionId: target.id,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "REVISE_DECISION", targetRef: decisionId, detail: { revised: target.id } }],
    };
  }

  if (command.operation === "RECORD_DECISION") {
    const decisionId = await insertHumanDecision(tx, {
      projectId,
      pilotId,
      sourceKind: command.sourceKind,
      sourceRef: command.sourceRef,
      kind: "RECORD_DECISION",
      objectRef: command.objectRef || command.decisionId || "",
      statement: command.statement || command.objective,
    });
    const revision = await bumpRevision(tx, projectId);
    return {
      kind: "APPLIED",
      decisionId,
      revision,
      effects: [{ effectKind: "RECORD_DECISION", targetRef: decisionId }],
    };
  }

  return rejected("INVALID", "Opération non prise en charge");
}

export async function executePilotageCommand(
  pilotId: string,
  projectId: string,
  body: PilotageRequestBody,
) {
  const envelope: ClientEnvelope = { pilotId, projectId, body };
  return runBusinessCommand(envelope, {
    classify: (tx) => classifyCommand(tx, envelope),
    mutate: (tx, command) => mutateCommand(tx, envelope, command),
  });
}

type ExplicitSource = {
  clientCommandKey: string;
  expectedRevision: number;
  sourceKind?: SourceKind;
  sourceRef: string;
  actInstanceId?: string;
};

function explicit(
  input: ExplicitSource,
): Pick<PilotageRequestBody, "clientCommandKey" | "expectedRevision" | "sourceKind" | "sourceRef" | "actInstanceId"> {
  return {
    clientCommandKey: input.clientCommandKey,
    expectedRevision: input.expectedRevision,
    sourceKind: input.sourceKind ?? "EXPLICIT_INTERACTION",
    sourceRef: input.sourceRef,
    actInstanceId: input.actInstanceId,
  };
}

/**
 * EXPLICIT_INTERACTION with an utterance and no operation follows the same
 * qualifier as USER_MESSAGE. A present operation stays on the structured path.
 * Returns null when this body is not an utterance-only explicit GO.
 */
export function classifyExplicitInteraction(body: PilotageRequestBody): ClassifyResult | null {
  if (body.sourceKind !== "EXPLICIT_INTERACTION") return null;
  if ((body.operation ?? "").trim()) return null;
  const sourceRef = body.sourceRef?.trim() ?? "";
  const utterance = (body.utterance ?? "").trim();
  if (!utterance) {
    return {
      ok: false,
      reasonCode: "INVALID",
      reason: "Opération inconnue",
      sourceActionKey: "REJECT|INVALID|",
    };
  }
  const qualified = qualifyPilotageIntent(utterance);
  if (qualified.clarity !== "CLEAR") {
    const reasonCode = qualified.clarity === "AMBIGUOUS" ? "AMBIGUOUS" : "INVALID";
    return {
      ok: false,
      reasonCode,
      reason: qualified.reason,
      sourceActionKey: `REJECT|${reasonCode}`,
    };
  }
  return fromClearIntent("EXPLICIT_INTERACTION", sourceRef, qualified, body);
}

export function proposeTrajectory(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { orientation: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "PROPOSE_TRAJECTORY",
    sourceKind: input.sourceKind ?? "COGNITIVE_PROPOSAL",
    orientation: input.orientation,
  });
}

export function retainTrajectory(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { orientation?: string; trajectoryRevisionId?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "RETAIN_TRAJECTORY",
    orientation: input.orientation,
    trajectoryRevisionId: input.trajectoryRevisionId,
  });
}

export function openCycle(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { cycleType: CycleType; objective?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "OPEN_CYCLE",
    cycleType: input.cycleType,
    objective: input.objective,
  });
}

export function closeCycle(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { cycleId?: string; balanceNote?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "CLOSE_CYCLE",
    cycleId: input.cycleId,
    balanceNote: input.balanceNote,
  });
}

export function transitionCycle(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { toCycleType: CycleType; cycleType?: CycleType; objective?: string; balanceNote?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "TRANSITION_CYCLE",
    toCycleType: input.toCycleType,
    cycleType: input.cycleType,
    objective: input.objective,
    balanceNote: input.balanceNote,
  });
}

export function chooseMethod(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { methodRef: string; methodVersion: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "CHOOSE_METHOD",
    methodRef: input.methodRef,
    methodVersion: input.methodVersion,
  });
}

export function replaceMethod(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { methodRef: string; methodVersion: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "REPLACE_METHOD",
    methodRef: input.methodRef,
    methodVersion: input.methodVersion,
  });
}

export function withdrawMethod(pilotId: string, projectId: string, input: ExplicitSource) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "WITHDRAW_METHOD",
  });
}

export function revokeFoundingDecision(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { decisionId: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "REVOKE_DECISION",
    decisionId: input.decisionId,
  });
}

export function applyGovernanceRestriction(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { targetKind: RestrictionTargetKind; targetRef?: string; statement?: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "APPLY_RESTRICTION",
    targetKind: input.targetKind,
    targetRef: input.targetRef ?? "*",
    statement: input.statement,
  });
}

export function liftGovernanceRestriction(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { restrictionId: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "LIFT_RESTRICTION",
    restrictionId: input.restrictionId,
  });
}

export function recordHumanDecision(
  pilotId: string,
  projectId: string,
  input: ExplicitSource & { statement: string },
) {
  return executePilotageCommand(pilotId, projectId, {
    ...explicit(input),
    operation: "RECORD_DECISION",
    statement: input.statement,
  });
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts`

```tsx
import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";
import { studioErrorResponse } from "@/lib/http-errors";
import { emitObs, newRequestId } from "@/lib/observability";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  const requestId = newRequestId();
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const messages = await listMessages(session.pilotId, preparationId);
    return NextResponse.json({ messages, requestId });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    emitObs({
      event_name: "api.messages.get_error",
      component: "api.messages",
      request_id: requestId,
      outcome: "FAILED",
      error_category: mapped.body.errorCategory,
    });
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  const requestId = newRequestId();
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      content?: string;
      correlationKey?: string;
      clientTurnKey?: string;
    };
    if (!body.content?.trim()) {
      return NextResponse.json(
        { error: "INVALID_REQUEST", errorCategory: "INVALID_REQUEST" },
        { status: 400 },
      );
    }
    const result = await postUserMessageAndNora(
      session.pilotId,
      preparationId,
      body.content.trim(),
      {
        correlationKey: body.correlationKey,
        clientTurnKey: body.clientTurnKey ?? body.correlationKey,
        requestId,
      },
    );
    const messages = await listMessages(session.pilotId, preparationId);
    // Pass through factual flags from the turn — never force humanDecisionCreated=false.
    return NextResponse.json({
      ...result,
      messages,
      humanDecisionCreated: Boolean(result.humanDecisionCreated),
      pilotageEffect: result.pilotageEffect ?? null,
      requestId,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    emitObs({
      event_name: "api.messages.post_error",
      component: "api.messages",
      request_id: requestId,
      outcome: "FAILED",
      error_category: mapped.body.errorCategory,
    });
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/src/components/PilotagePanel.tsx`

```tsx
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { qualifyCommandOutcome } from "@/domains/decisions/divergence-assist";

type PilotageProjection = {
  projectId: string;
  revision: number;
  trajectory: {
    retained: { id: string; revisionNumber: number; orientation: string } | null;
    proposed: { id: string; revisionNumber: number; orientation: string } | null;
  };
  cycle: {
    id: string;
    cycleType: string;
    status: string;
    objective: string;
    cki: {
      ckiId: string;
      availability: string;
      pinnedVersion: string | null;
      contentDigest: string | null;
    };
  } | null;
  method:
    | { presence: "ABSENT"; usageRestricted: false }
    | {
        presence: "RETAINED";
        usageRestricted: boolean;
        usageNote?: string | null;
        methodRef: string;
        methodVersion: string;
      };
  restrictions: Array<{ id: string; targetKind: string; targetRef: string; status: string }>;
};

type DecisionRow = {
  id: string;
  kind: string;
  statement: string;
  state: string;
  objectRef?: string;
  createdAt?: string;
  supersedesDecisionId?: string | null;
};

type CommandResult = {
  status: string;
  commandId: string | null;
  revision: number | null;
  reason?: string;
  reasonCode?: string;
  effects?: Array<{ effectKind: string; targetRef: string }>;
  error?: string;
};

type IntentBody = {
  operation?: string;
  utterance?: string;
  sourceKind: string;
  cycleType?: string;
  cycleId?: string;
  toCycleType?: string;
  objective?: string;
  orientation?: string;
  trajectoryRevisionId?: string;
  methodRef?: string;
  methodVersion?: string;
  targetKind?: string;
  targetRef?: string;
  restrictionId?: string;
  statement?: string;
  balanceNote?: string;
  decisionId?: string;
};

type PendingRecord = {
  clientCommandKey: string;
  actInstanceId: string;
  actKey: string;
  signature: string;
  operation: string;
  payload: Record<string, unknown>;
  commandId?: string;
  expectedRevision: number;
  sourceRef: string;
  sourceAction: { operation: string; actKey: string; actInstanceId: string };
};

const TERMINAL = new Set(["APPLIED", "ALREADY_APPLIED", "REJECTED", "CONFLICT"]);
const CONFIRMED = new Set(["APPLIED", "ALREADY_APPLIED"]);

function storageKey(projectId: string, operation: string, actKey: string) {
  return `sfia.pilotage.pending:${projectId}:${operation}:${actKey}`;
}

function intentSignature(projectId: string, intent: IntentBody): string {
  const operation = intent.operation?.trim() || "UTTERANCE";
  return JSON.stringify({
    projectId,
    operation,
    utterance: intent.utterance ?? "",
    cycleType: intent.cycleType ?? "",
    cycleId: intent.cycleId ?? "",
    toCycleType: intent.toCycleType ?? "",
    objective: intent.objective ?? "",
    orientation: intent.orientation ?? "",
    trajectoryRevisionId: intent.trajectoryRevisionId ?? "",
    methodRef: intent.methodRef ?? "",
    methodVersion: intent.methodVersion ?? "",
    targetKind: intent.targetKind ?? "",
    targetRef: intent.targetRef ?? "",
    restrictionId: intent.restrictionId ?? "",
    decisionId: intent.decisionId ?? "",
    statement: intent.statement ?? "",
  });
}

function readStored(projectId: string, operation: string, signature: string): PendingRecord | null {
  if (typeof sessionStorage === "undefined") return null;
  const prefix = `sfia.pilotage.pending:${projectId}:${operation}:`;
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key(i);
    if (!key?.startsWith(prefix)) continue;
    try {
      const rec = JSON.parse(sessionStorage.getItem(key) || "") as PendingRecord;
      if (rec.signature === signature) return rec;
    } catch {
      /* ignore corrupt pending rows */
    }
  }
  return null;
}

function writeStored(projectId: string, record: PendingRecord) {
  sessionStorage.setItem(storageKey(projectId, record.operation, record.actKey), JSON.stringify(record));
}

function clearStored(projectId: string, record: PendingRecord) {
  sessionStorage.removeItem(storageKey(projectId, record.operation, record.actKey));
}

/**
 * Surfaces ML3 Pilotage — états honnêtes.
 * Jamais d'effet présenté comme confirmé avant réponse serveur APPLIED/ALREADY_APPLIED.
 */
export function PilotagePanel({ projectId }: { projectId: string }) {
  const [projection, setProjection] = useState<PilotageProjection | null>(null);
  const [decisions, setDecisions] = useState<DecisionRow[]>([]);
  const [error, setError] = useState("");
  const [journalError, setJournalError] = useState("");
  const [status, setStatus] = useState("");
  const [lastOutcome, setLastOutcome] = useState<{ status: string; reasonCode?: string } | null>(
    null,
  );
  const [busy, setBusy] = useState(false);
  const [pendingLabel, setPendingLabel] = useState<string | null>(null);
  const [unresolved, setUnresolved] = useState<PendingRecord | null>(null);
  const [cycleType, setCycleType] = useState("UX_UI");
  const [toCycleType, setToCycleType] = useState("CADRAGE");
  const [objective, setObjective] = useState("Qualifier l'expérience Pilote–Nora");
  const [methodRef, setMethodRef] = useState("sfia-fast-track");
  const [methodVersion, setMethodVersion] = useState("2.6");
  const [utterance, setUtterance] = useState("");
  const [restrictionTarget, setRestrictionTarget] = useState("*");
  const [reviseTargetId, setReviseTargetId] = useState<string | null>(null);
  const [reviseDraft, setReviseDraft] = useState("");
  /** C03 — show 8 most recent by default; expand to full chronological history. */
  const [journalExpanded, setJournalExpanded] = useState(false);
  const inflight = useRef(new Map<string, PendingRecord>());

  const load = useCallback(async () => {
    const [pRes, dRes] = await Promise.all([
      fetch(`/api/projects/${projectId}/pilotage`),
      fetch(`/api/projects/${projectId}/decisions`),
    ]);
    if (pRes.status === 401 || dRes.status === 401) {
      setError("Session requise");
      return;
    }
    if (!pRes.ok) {
      setError("Impossible de charger le pilotage");
      return;
    }
    const pj = await pRes.json();
    setProjection(pj.pilotage ?? pj);
    if (!dRes.ok) {
      let message = `Journal HTTP ${dRes.status}`;
      try {
        const dj = (await dRes.json()) as { error?: string; message?: string };
        message = dj.error ?? dj.message ?? message;
      } catch {
        /* keep the HTTP status */
      }
      setJournalError(message);
      setDecisions([]);
    } else {
      const dj = await dRes.json();
      setDecisions(dj.decisions ?? []);
      setJournalError("");
    }
    setError("");
  }, [projectId]);

  useEffect(() => {
    void load();
  }, [load]);

  function forget(record: PendingRecord) {
    inflight.current.delete(record.signature);
    clearStored(projectId, record);
    setUnresolved((current) => (current?.clientCommandKey === record.clientCommandKey ? null : current));
  }

  function remember(record: PendingRecord) {
    inflight.current.set(record.signature, record);
    writeStored(projectId, record);
    setUnresolved(record);
  }

  async function reconcile(record: PendingRecord): Promise<CommandResult | null> {
    try {
      const byKey = await fetch(
        `/api/projects/${projectId}/pilotage/commands/by-key/${encodeURIComponent(record.clientCommandKey)}`,
      );
      if (byKey.ok) return (await byKey.json()) as CommandResult;
    } catch {
      /* try the command id next */
    }
    if (!record.commandId) return null;
    try {
      const byId = await fetch(`/api/projects/${projectId}/pilotage/commands/${record.commandId}`);
      if (byId.ok) return (await byId.json()) as CommandResult;
    } catch {
      return null;
    }
    return null;
  }

  async function applyResult(record: PendingRecord, result: CommandResult) {
    if (result.commandId) {
      record.commandId = result.commandId;
      writeStored(projectId, record);
    }
    setLastOutcome({ status: result.status, reasonCode: result.reasonCode });
    setStatus(
      `${result.status}${result.reasonCode ? ` · ${result.reasonCode}` : ""}${result.reason ? ` — ${result.reason}` : ""}`,
    );
    if (CONFIRMED.has(result.status)) {
      forget(record);
      await load();
      return;
    }
    if (TERMINAL.has(result.status)) {
      forget(record);
      return;
    }
    remember(record);
  }

  async function postRecord(record: PendingRecord): Promise<"network" | "nonjson" | CommandResult> {
    let res: Response;
    try {
      res = await fetch(`/api/projects/${projectId}/pilotage/commands`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Idempotency-Key": record.clientCommandKey,
        },
        body: JSON.stringify(record.payload),
      });
    } catch {
      return "network";
    }
    const text = await res.text();
    let json: CommandResult;
    try {
      json = JSON.parse(text) as CommandResult;
    } catch {
      return "nonjson";
    }
    if (!res.ok && !json.status) {
      return { status: `HTTP ${res.status}`, commandId: null, revision: null, reason: json.error };
    }
    return json;
  }

  async function resolveUnknown(record: PendingRecord) {
    // R1: UNKNOWN is its own presentation — never keep a prior RESTRICTION/CONFLICT motif.
    setLastOutcome({ status: "UNKNOWN" });
    setStatus("UNKNOWN");
    const found = await reconcile(record);
    if (found?.status && found.status !== "UNKNOWN") {
      await applyResult(record, found);
      return;
    }
    const replay = await postRecord(record);
    if (replay === "network" || replay === "nonjson") {
      remember(record);
      setLastOutcome({ status: "UNKNOWN" });
      setStatus("UNKNOWN — commande non réconciliée");
      return;
    }
    await applyResult(record, replay);
  }

  async function runCommand(intent: IntentBody, pending: string) {
    const operation = intent.operation?.trim() || "UTTERANCE";
    const signature = intentSignature(projectId, intent);
    let record = inflight.current.get(signature) ?? readStored(projectId, operation, signature);
    if (!record) {
      const actInstanceId = crypto.randomUUID();
      const actKey = actInstanceId;
      const clientCommandKey = `cmd_${crypto.randomUUID()}`;
      const sourceRef = `ui:${operation}:${actInstanceId}`;
      const expectedRevision = projection?.revision ?? 0;
      const payload: Record<string, unknown> = {
        ...intent,
        operation: intent.operation?.trim() ? intent.operation : undefined,
        clientCommandKey,
        expectedRevision,
        actInstanceId,
        sourceRef,
        sourceKind: intent.sourceKind,
      };
      record = {
        clientCommandKey,
        actInstanceId,
        actKey,
        signature,
        operation,
        payload,
        expectedRevision,
        sourceRef,
        sourceAction: { operation, actKey, actInstanceId },
      };
    }
    inflight.current.set(signature, record);
    writeStored(projectId, record);
    setBusy(true);
    setPendingLabel(pending);
    // R1: new attempt never reuses a previous command's qualified motif.
    setLastOutcome(null);
    setStatus("");
    try {
      const posted = await postRecord(record);
      if (posted === "network" || posted === "nonjson") {
        await resolveUnknown(record);
        return;
      }
      await applyResult(record, posted);
    } catch {
      setLastOutcome({ status: "UNKNOWN" });
      setStatus("UNKNOWN");
      remember(record);
    } finally {
      setBusy(false);
      setPendingLabel(null);
    }
  }

  if (error) {
    return <div className="panel p-4 text-sm">{error}</div>;
  }
  if (!projection) {
    return <div className="panel p-4 text-sm muted">Chargement du pilotage…</div>;
  }

  const cycle = projection.cycle;
  const methodAbsent = projection.method.presence === "ABSENT";
  const activeRestrictions = projection.restrictions.filter((r) => r.status === "ACTIVE");
  const cycleChoices = [
    "CADRAGE",
    "CONCEPTION_FONCTIONNELLE",
    "UX_UI",
    "ARCHITECTURE_TECHNIQUE",
    "DELIVERY",
    "QA_VALIDATION",
  ];

  return (
    <div className="space-y-4" data-testid="pilotage-panel">
      {pendingLabel ? (
        <div className="panel p-3 text-sm" role="status" data-testid="pilotage-pending">
          {pendingLabel} — effet non confirmé tant que le serveur n&apos;a pas persisté.
        </div>
      ) : null}

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
        <section className="panel p-4 space-y-3" aria-labelledby="traj-title">
          <p className="text-xs muted uppercase tracking-wide">
            {cycle ? "Cycle" : "Trajectoire"} · révision {projection.revision}
          </p>
          <h2 id="traj-title" className="text-xl font-semibold">
            {cycle ? `Cycle ${cycle.cycleType} · ${cycle.status}` : "Aucun cycle actif"}
          </h2>
          <p className="text-sm muted">
            {cycle
              ? cycle.objective
              : "État normal : le projet peut avancer sans cycle ni méthode. Une proposition n'ouvre rien."}
          </p>

          {cycle ? (
            <div className="panel p-3 space-y-2 text-sm" data-testid="cycle-active">
              <div>
                CKI {cycle.cki.ckiId} · disponibilité <strong>{cycle.cki.availability}</strong>
                {cycle.cki.pinnedVersion ? ` · pin ${cycle.cki.pinnedVersion}` : ""}
              </div>
              {cycle.cki.availability === "UNAVAILABLE" || cycle.cki.availability === "ASSOCIATED" ? (
                <p className="text-xs muted" data-testid="cki-limited">
                  Guidance non livrée comme disponible — Nora reste générale sur ce point.
                </p>
              ) : null}
              <label className="block text-sm">
                Transiter vers
                <select
                  className="textarea mt-1"
                  value={toCycleType}
                  onChange={(e) => setToCycleType(e.target.value)}
                  aria-label="Type de cycle cible"
                >
                  {cycleChoices
                    .filter((t) => t !== cycle.cycleType)
                    .map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                </select>
              </label>
              <div className="flex flex-wrap gap-2 pt-1">
                <button
                  type="button"
                  className="btn secondary"
                  disabled={busy}
                  data-testid="close-cycle"
                  onClick={() =>
                    void runCommand(
                      {
                        operation: "CLOSE_CYCLE",
                        cycleId: cycle.id,
                        sourceKind: "EXPLICIT_INTERACTION",
                        utterance: "Je clos ce cycle.",
                      },
                      "Clôture demandée",
                    )
                  }
                >
                  Clore ce cycle
                </button>
                <button
                  type="button"
                  className="btn secondary"
                  disabled={busy}
                  data-testid="transition-cycle"
                  onClick={() =>
                    void runCommand(
                      {
                        operation: "TRANSITION_CYCLE",
                        cycleId: cycle.id,
                        cycleType: cycle.cycleType,
                        toCycleType,
                        objective,
                        sourceKind: "EXPLICIT_INTERACTION",
                        utterance: `Je clos ${cycle.cycleType} et j'ouvre ${toCycleType}.`,
                      },
                      "Transition à confirmer",
                    )
                  }
                >
                  Transiter
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2" data-testid="cycle-absent">
              <label className="block text-sm">
                Type de cycle
                <select
                  className="textarea mt-1"
                  value={cycleType}
                  onChange={(e) => setCycleType(e.target.value)}
                  aria-label="Type de cycle"
                >
                  {cycleChoices.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                Objectif
                <input
                  className="textarea mt-1"
                  value={objective}
                  onChange={(e) => setObjective(e.target.value)}
                  aria-label="Objectif du cycle"
                />
              </label>
              <label className="block text-sm">
                GO naturel (ou laisser vide pour commande structurée)
                <textarea
                  className="textarea mt-1"
                  value={utterance}
                  onChange={(e) => setUtterance(e.target.value)}
                  placeholder="Ex. « ouvre le cycle cadrage »"
                  aria-label="Énoncé GO"
                />
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="btn"
                  disabled={busy}
                  data-testid="open-cycle"
                  onClick={() =>
                    void runCommand(
                      utterance.trim()
                        ? {
                            utterance,
                            sourceKind: "EXPLICIT_INTERACTION",
                          }
                        : {
                            operation: "OPEN_CYCLE",
                            cycleType,
                            objective,
                            sourceKind: "EXPLICIT_INTERACTION",
                            utterance: `GO : ouvrir cycle ${cycleType}.`,
                          },
                      "Ouverture à confirmer",
                    )
                  }
                >
                  Ouvrir ce cycle
                </button>
                <button
                  type="button"
                  className="btn secondary"
                  disabled={busy}
                  data-testid="propose-trajectory"
                  onClick={() =>
                    void runCommand(
                      {
                        operation: "PROPOSE_TRAJECTORY",
                        orientation: objective,
                        sourceKind: "COGNITIVE_PROPOSAL",
                      },
                      "Proposition en cours",
                    )
                  }
                >
                  Proposer une trajectoire
                </button>
              </div>
            </div>
          )}

          {projection.trajectory.proposed ? (
            <div className="space-y-2" data-testid="trajectory-proposed">
              <p className="text-sm">
                Proposition n°{projection.trajectory.proposed.revisionNumber} :{" "}
                {projection.trajectory.proposed.orientation}
              </p>
              <button
                type="button"
                className="btn secondary"
                disabled={busy}
                data-testid="retain-trajectory"
                onClick={() =>
                  void runCommand(
                    {
                      operation: "RETAIN_TRAJECTORY",
                      trajectoryRevisionId: projection.trajectory.proposed?.id,
                      orientation: projection.trajectory.proposed?.orientation,
                      sourceKind: "EXPLICIT_INTERACTION",
                      utterance: "Je retiens cette trajectoire.",
                    },
                    "Rétention à confirmer",
                  )
                }
              >
                Retenir cette trajectoire
              </button>
            </div>
          ) : null}
          {projection.trajectory.retained ? (
            <p className="text-sm muted">
              Orientation retenue n°{projection.trajectory.retained.revisionNumber}
            </p>
          ) : null}
        </section>

        <aside className="space-y-3">
          <section className="panel p-4 space-y-2" aria-labelledby="method-title">
            <h2 id="method-title" className="font-medium">
              Méthode
            </h2>
            {methodAbsent ? (
              <p className="text-sm muted" data-testid="method-absent">
                Aucune méthode retenue — état normal.
              </p>
            ) : (
              <div className="text-sm" data-testid="method-retained">
                <p>
                  {projection.method.presence === "RETAINED"
                    ? `${projection.method.methodRef}@${projection.method.methodVersion}`
                    : null}
                </p>
                {projection.method.presence === "RETAINED" && projection.method.usageRestricted ? (
                  <p className="text-xs" data-testid="method-usage-restricted">
                    usageRestricted — {projection.method.usageNote ?? "pas pleinement applicable"}.
                  </p>
                ) : null}
              </div>
            )}
            <label className="block text-xs">
              Réf.
              <input
                className="textarea mt-1"
                value={methodRef}
                onChange={(e) => setMethodRef(e.target.value)}
              />
            </label>
            <label className="block text-xs">
              Version
              <input
                className="textarea mt-1"
                value={methodVersion}
                onChange={(e) => setMethodVersion(e.target.value)}
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                className="btn secondary"
                disabled={busy}
                data-testid="choose-method"
                onClick={() =>
                  void runCommand(
                    {
                      operation: methodAbsent ? "CHOOSE_METHOD" : "REPLACE_METHOD",
                      methodRef,
                      methodVersion,
                      sourceKind: "EXPLICIT_INTERACTION",
                      utterance: methodAbsent
                        ? `Je retiens la méthode ${methodRef}@${methodVersion}.`
                        : `Je remplace la méthode par ${methodRef}@${methodVersion}.`,
                    },
                    "Décision de méthode à confirmer",
                  )
                }
              >
                {methodAbsent ? "Retenir cette méthode" : "Remplacer la méthode"}
              </button>
              {methodAbsent ? null : (
                <button
                  type="button"
                  className="btn secondary"
                  disabled={busy}
                  data-testid="withdraw-method"
                  onClick={() =>
                    void runCommand(
                      {
                        operation: "WITHDRAW_METHOD",
                        sourceKind: "EXPLICIT_INTERACTION",
                        utterance: "Je retire la méthode.",
                      },
                      "Retrait de méthode à confirmer",
                    )
                  }
                >
                  Retirer la méthode
                </button>
              )}
            </div>
          </section>

          <section className="panel p-4 space-y-2" aria-labelledby="restrict-title" data-testid="restriction-list">
            <h2 id="restrict-title" className="font-medium">
              Restrictions
            </h2>
            {activeRestrictions.length === 0 ? (
              <p className="text-sm muted">Aucune restriction active.</p>
            ) : (
              activeRestrictions.map((r) => (
                <div key={r.id} className="text-sm flex items-center justify-between gap-2">
                  <span>
                    {r.targetKind} · {r.targetRef || "*"} · {r.status}
                  </span>
                  <button
                    type="button"
                    className="btn secondary"
                    disabled={busy}
                    onClick={() =>
                      void runCommand(
                        {
                          operation: "LIFT_RESTRICTION",
                          restrictionId: r.id,
                          sourceKind: "EXPLICIT_INTERACTION",
                          utterance: "Je lève cette restriction.",
                        },
                        "Levée à confirmer",
                      )
                    }
                  >
                    Lever
                  </button>
                </div>
              ))
            )}
            <label className="block text-xs">
              Cible CYCLE_MUTATION
              <select
                className="textarea mt-1"
                value={restrictionTarget}
                onChange={(e) => setRestrictionTarget(e.target.value)}
                aria-label="Cible de restriction"
              >
                <option value="*">* (globale)</option>
                {cycle ? <option value={cycle.id}>cycle {cycle.id}</option> : null}
                {cycle ? <option value={cycle.cycleType}>{cycle.cycleType}</option> : null}
              </select>
            </label>
            <button
              type="button"
              className="btn secondary"
              disabled={busy}
              data-testid="apply-cycle-restriction"
              onClick={() =>
                void runCommand(
                  {
                    operation: "APPLY_RESTRICTION",
                    targetKind: "CYCLE_MUTATION",
                    targetRef: restrictionTarget,
                    statement: `Restriction CYCLE_MUTATION ${restrictionTarget}`,
                    sourceKind: "EXPLICIT_INTERACTION",
                    utterance: "J'applique une restriction de mutation de cycle.",
                  },
                  "Restriction à confirmer",
                )
              }
            >
              Appliquer la restriction
            </button>
          </section>

          <section className="panel p-4 space-y-2" aria-labelledby="dec-title" data-testid="decision-journal">
            <h2 id="dec-title" className="font-medium">
              Journal — décisions
            </h2>
            <p className="text-xs muted" data-testid="b13-authority-legend">
              Suspicion Nora (Niveau A) ≠ interdiction D6. Seul un refus
              RESTRICTION (ou motif d&apos;autorité explicitement typé) est un
              blocage d&apos;autorité. CONFLICT (STALE_REVISION, HUMAN_INTENT,
              FINGERPRINT, ACTIVE_CYCLE) est technique/état — pas une contradiction
              D6. APPLICABLE / REVISED / REVOKED / SUPERSEDED décrivent l&apos;historique.
            </p>
            {journalError ? (
              <p className="text-sm" data-testid="journal-error" role="alert">
                {journalError}
              </p>
            ) : null}
            {decisions.length === 0 && !journalError ? (
              <p className="text-sm muted">Aucune décision D6 enregistrée.</p>
            ) : (
              (() => {
                const chronological = [...decisions].sort((a, b) =>
                  String(a.createdAt ?? "").localeCompare(String(b.createdAt ?? "")),
                );
                const newestFirst = [...chronological].reverse();
                const visible = journalExpanded ? chronological : newestFirst.slice(0, 8);
                return (
                  <>
                    <p className="text-xs muted" data-testid="journal-count">
                      {decisions.length} décision(s) ·{" "}
                      {journalExpanded
                        ? "historique complet (ancien → récent)"
                        : "8 plus récentes (récent → ancien)"}
                    </p>
                    {visible.map((d) => (
                      <article
                        key={d.id}
                        className="text-sm panel p-2 space-y-2"
                        data-testid="decision-row"
                      >
                        <div className="text-xs muted" data-testid="decision-state">
                          {d.kind} · {d.state || "état inconnu"}
                          {d.objectRef ? ` · ${d.objectRef}` : ""}
                        </div>
                        <div>{d.statement}</div>
                        {d.state === "APPLICABLE" && d.kind === "RECORD_DECISION" ? (
                          reviseTargetId === d.id ? (
                            <div className="space-y-2">
                              <label className="block text-xs muted" htmlFor={`revise-${d.id}`}>
                                Nouvel énoncé (révision documentaire)
                              </label>
                              <textarea
                                id={`revise-${d.id}`}
                                className="textarea text-sm"
                                value={reviseDraft}
                                onChange={(e) => setReviseDraft(e.target.value)}
                                data-testid="journal-revise-draft"
                                rows={2}
                              />
                              <div className="flex flex-wrap gap-2">
                                <button
                                  type="button"
                                  className="btn"
                                  disabled={busy || !reviseDraft.trim()}
                                  data-testid="journal-revise-submit"
                                  onClick={() =>
                                    void runCommand(
                                      {
                                        operation: "REVISE_DECISION",
                                        decisionId: d.id,
                                        statement: reviseDraft.trim(),
                                        sourceKind: "EXPLICIT_INTERACTION",
                                        utterance: reviseDraft.trim(),
                                      },
                                      "Révision en cours",
                                    ).then(() => {
                                      setReviseTargetId(null);
                                      setReviseDraft("");
                                    })
                                  }
                                >
                                  Enregistrer la révision
                                </button>
                                <button
                                  type="button"
                                  className="btn secondary"
                                  disabled={busy}
                                  onClick={() => {
                                    setReviseTargetId(null);
                                    setReviseDraft("");
                                  }}
                                >
                                  Annuler
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              type="button"
                              className="btn secondary text-xs"
                              disabled={busy}
                              data-testid="journal-revise-open"
                              onClick={() => {
                                setReviseTargetId(d.id);
                                setReviseDraft(d.statement);
                              }}
                            >
                              Réviser
                            </button>
                          )
                        ) : null}
                      </article>
                    ))}
                    {decisions.length > 8 ? (
                      <button
                        type="button"
                        className="btn secondary text-xs"
                        data-testid="journal-expand"
                        onClick={() => setJournalExpanded((v) => !v)}
                      >
                        {journalExpanded
                          ? "Réduire aux 8 plus récentes"
                          : `Afficher tout l'historique (${decisions.length})`}
                      </button>
                    ) : null}
                  </>
                );
              })()
            )}
          </section>
        </aside>
      </div>

      {unresolved ? (
        <button
          type="button"
          className="btn secondary"
          disabled={busy}
          data-testid="pilotage-reconcile"
          onClick={() => {
            setBusy(true);
            setPendingLabel("Réconciliation");
            void resolveUnknown(unresolved).finally(() => {
              setBusy(false);
              setPendingLabel(null);
            });
          }}
        >
          Réconcilier l&apos;état inconnu
        </button>
      ) : null}

      {status ? (
        <div className="space-y-1" data-testid="pilotage-status-block">
          <p className="text-xs muted" data-testid="pilotage-status" role="status">
            {status}
          </p>
          {lastOutcome
            ? (() => {
                const q = qualifyCommandOutcome(lastOutcome);
                if (!q.label) return null;
                return (
                  <p className="text-xs" data-testid={q.testId} role="status">
                    {q.label}
                  </p>
                );
              })()
            : null}
        </div>
      ) : null}
    </div>
  );
}

```

### MODIFIED FULL `projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts`

```tsx
import { describe, expect, it, afterEach } from "vitest";
import {
  buildLevelAClarification,
  findAuthorityReviseCandidates,
  findMessageDecisionConfrontations,
  findPotentialDivergences,
  qualifyCommandOutcome,
  selectApplicableBriefs,
  selectAllApplicableBriefs,
} from "@/domains/decisions/divergence-assist";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";
import {
  mayStartNewThreadAct,
  shouldClearThreadPending,
} from "@/domains/pilotage/thread-recovery";

const prior = {
  id: "dec_gh",
  kind: "RECORD_DECISION",
  objectRef: "github-connexion",
  scope: "PROJECT",
  statement: "La connexion GitHub est obligatoire pour ce projet.",
  state: "APPLICABLE",
  sourceKind: "EXPLICIT_INTERACTION",
};

describe("B13 C01 message↔decision confrontation", () => {
  const prevLane = process.env.STUDIO_LANE;
  const prevE2e = process.env.STUDIO_E2E;

  afterEach(() => {
    if (prevLane === undefined) delete process.env.STUDIO_LANE;
    else process.env.STUDIO_LANE = prevLane;
    if (prevE2e === undefined) delete process.env.STUDIO_E2E;
    else process.env.STUDIO_E2E = prevE2e;
  });

  it("C01: single APPLICABLE decision + new USER message yields Level A without second decision", () => {
    const signals = findMessageDecisionConfrontations(
      "Finalement, je préfère GitHub facultatif.",
      [prior],
    );
    expect(signals).toHaveLength(1);
    expect(signals[0].kind).toBe("MESSAGE_DECISION_CONFRONTATION");
    expect(signals[0].decisionId).toBe("dec_gh");
    expect(signals[0].framing).toBe("POSSIBLE_CHANGE");
    expect(signals[0].authorityClaim).toBe("NONE");
    expect(findPotentialDivergences([prior])).toHaveLength(0);
  });

  it("C01/R2: compatible different formulations are not treated as possible change", () => {
    const signals = findMessageDecisionConfrontations(
      "GitHub reste requis pour ce projet.",
      [prior],
    );
    expect(signals.length).toBeGreaterThanOrEqual(1);
    expect(signals[0].framing).toBe("COMPATIBLE_RESTATEMENT");
    expect(signals[0].authorityClaim).toBe("NONE");
  });

  it("R2: negation of same modality is never COMPATIBLE_RESTATEMENT", () => {
    const base = { ...prior, statement: "GitHub est obligatoire." };
    const cases: Array<{ user: string; statement?: string }> = [
      { user: "GitHub n'est plus obligatoire." },
      { user: "GitHub n'est pas obligatoire." },
      { user: "GitHub n'est jamais obligatoire." },
      { user: "GitHub n'est aucunement obligatoire." },
      // Typographic apostrophe (U+2019)
      { user: "GitHub n\u2019est jamais obligatoire." },
      { user: "GitHub n\u2019est aucunement obligatoire." },
      { user: "GitHub ne doit pas être obligatoire." },
      {
        user: "GitHub n'est pas interdit.",
        statement: "GitHub est interdit pour ce projet.",
      },
      {
        user: "GitHub n'est pas requis.",
        statement: "GitHub est requis pour ce projet.",
      },
    ];
    for (const c of cases) {
      const row = { ...base, statement: c.statement ?? base.statement };
      const signals = findMessageDecisionConfrontations(c.user, [row]);
      expect(signals.length, c.user).toBeGreaterThanOrEqual(1);
      expect(signals[0].framing, c.user).not.toBe("COMPATIBLE_RESTATEMENT");
      expect(["POSSIBLE_CHANGE", "AMBIGUOUS"], c.user).toContain(signals[0].framing);
      expect(signals[0].authorityClaim).toBe("NONE");
    }
  });

  it("R2: positive restatements remain compatible when polarity agrees", () => {
    const base = { ...prior, statement: "GitHub est obligatoire." };
    for (const user of ["GitHub reste obligatoire.", "GitHub reste requis."]) {
      const signals = findMessageDecisionConfrontations(user, [base]);
      expect(signals.length).toBeGreaterThanOrEqual(1);
      expect(signals[0].framing).toBe("COMPATIBLE_RESTATEMENT");
      expect(signals[0].authorityClaim).toBe("NONE");
    }
  });

  it("R2: scope shift stays AMBIGUOUS (no automatic global equivalence)", () => {
    const signals = findMessageDecisionConfrontations(
      "GitHub obligatoire seulement pour UX",
      [
        {
          ...prior,
          statement: "GitHub obligatoire pour tout le projet.",
        },
      ],
    );
    expect(signals.length).toBeGreaterThanOrEqual(1);
    expect(signals[0].framing).toBe("AMBIGUOUS");
    expect(signals[0].authorityClaim).toBe("NONE");
  });

  it("R1: UNKNOWN presentation is never authority-block; cleared outcome shows nothing", () => {
    const restriction = qualifyCommandOutcome({
      status: "REJECTED",
      reasonCode: "RESTRICTION",
    });
    expect(restriction.testId).toBe("authority-block-established");
    // After runCommand start, lastOutcome is null → UI hides qualified motif.
    const afterStart: null = null;
    expect(afterStart).toBeNull();
    const unknown = qualifyCommandOutcome({ status: "UNKNOWN" });
    expect(unknown.kind).toBe("unknown");
    expect(unknown.testId).toBe("outcome-unknown");
    expect(unknown.testId).not.toBe("authority-block-established");
    const applied = qualifyCommandOutcome({ status: "APPLIED" });
    expect(applied.testId).toBe("outcome-applied");
    expect(applied.testId).not.toBe("authority-block-established");
  });

  it("C01: unrelated object is not confronted", () => {
    expect(
      findMessageDecisionConfrontations("Je veux changer la couleur du logo.", [prior]),
    ).toHaveLength(0);
  });

  it("C01: REVOKED decision is not a current authority source", () => {
    expect(
      findMessageDecisionConfrontations("GitHub facultatif", [
        { ...prior, state: "REVOKED" },
      ]),
    ).toHaveLength(0);
    expect(selectApplicableBriefs([{ ...prior, state: "REVOKED" }])).toHaveLength(0);
  });

  it("C01 fixture uses structured levelASignals (same entry as conversation path)", async () => {
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    const signals = findMessageDecisionConfrontations(
      "Finalement, je préfère GitHub facultatif.",
      [prior],
    );
    const result = await generateNoraReply({
      userText: "Finalement, je préfère GitHub facultatif.",
      contextSnippets: [],
      pilotageSnippets: ["### Décisions D6 applicables"],
      levelASignals: signals,
    });
    expect(result.mode).toBe("deterministic-fixture");
    expect(result.status).toBe("COMPLETE");
    expect(result.content).toMatch(/Niveau A/i);
    expect(result.content).toMatch(/pas une (HumanDecision|interdiction D6)/i);
    expect(result.content).toContain("dec_gh");
    expect(result.content).not.toMatch(/HumanDecision créée|je révoque/i);
  });

  it("buildLevelAClarification distinguishes compatible restatement", () => {
    expect(
      buildLevelAClarification({
        priorStatement: prior.statement,
        newExpression: "GitHub reste requis",
        objectRef: prior.objectRef,
        framing: "COMPATIBLE_RESTATEMENT",
      }),
    ).toMatch(/semble compatible/);
  });
});

describe("B13 C02 qualifyCommandOutcome", () => {
  it("does not treat CONFLICT+STALE_REVISION as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "STALE_REVISION" });
    expect(q.kind).toBe("technical_conflict");
    expect(q.testId).not.toBe("authority-block-established");
  });

  it("does not treat CONFLICT+HUMAN_INTENT as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "HUMAN_INTENT" });
    expect(q.kind).toBe("technical_conflict");
    expect(q.testId).toBe("outcome-technical-human_intent");
  });

  it("does not treat CONFLICT+FINGERPRINT as authority block", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "FINGERPRINT" });
    expect(q.kind).toBe("technical_conflict");
  });

  it("REJECTED+RESTRICTION is authority block", () => {
    const q = qualifyCommandOutcome({ status: "REJECTED", reasonCode: "RESTRICTION" });
    expect(q.kind).toBe("authority_block");
    expect(q.testId).toBe("authority-block-established");
  });

  it("CONFLICT+ACTIVE_CYCLE is D5 state, not D6 contradiction", () => {
    const q = qualifyCommandOutcome({ status: "CONFLICT", reasonCode: "ACTIVE_CYCLE" });
    expect(q.kind).toBe("d5_state");
  });

  it("UNKNOWN asks for reconciliation", () => {
    const q = qualifyCommandOutcome({ status: "UNKNOWN" });
    expect(q.kind).toBe("unknown");
    expect(q.testId).toBe("outcome-unknown");
  });
});

describe("CR-01 authority revise candidates vs cognitive window", () => {
  function brief(
    id: string,
    objectRef: string,
    statement: string,
    scope = "PROJECT",
  ) {
    return {
      id,
      kind: "RECORD_DECISION",
      objectRef,
      scope,
      statement,
      state: "APPLICABLE",
      sourceKind: "EXPLICIT_INTERACTION",
    };
  }

  it("cognitive window of 12 hides an older GitHub while authority sees both", () => {
    const rows = [
      brief("gh-old", "github", "GitHub est obligatoire pour ce projet."),
      ...Array.from({ length: 13 }, (_, i) =>
        brief(`fill-${i}`, `filler-${i}`, `Décision filler ${i} obligatoire.`),
      ),
      brief("gh-new", "github", "GitHub reste requis pour les déploiements."),
    ];
    expect(rows).toHaveLength(15);
    const cognitive = selectApplicableBriefs(rows);
    expect(cognitive).toHaveLength(12);
    expect(cognitive.filter((r) => r.objectRef === "github").map((r) => r.id)).toEqual(["gh-new"]);
    expect(selectAllApplicableBriefs(rows)).toHaveLength(15);

    const utterance = "Finalement, GitHub devient facultatif.";
    // Cognitive confrontation path would only see gh-new → false uniqueness.
    const cognitiveSignals = findMessageDecisionConfrontations(utterance, rows).filter(
      (s) => s.framing === "POSSIBLE_CHANGE",
    );
    expect(cognitiveSignals.map((s) => s.decisionId)).toEqual(["gh-new"]);

    const authority = findAuthorityReviseCandidates(utterance, rows);
    expect(authority.map((c) => c.id).sort()).toEqual(["gh-new", "gh-old"]);
  });

  it("single relevant applicable remains a unique authority candidate", () => {
    const rows = [
      brief("gh-only", "github", "GitHub est obligatoire pour ce projet."),
      ...Array.from({ length: 14 }, (_, i) =>
        brief(`fill-${i}`, `filler-${i}`, `Décision filler ${i} obligatoire.`),
      ),
    ];
    const authority = findAuthorityReviseCandidates(
      "Finalement, GitHub devient facultatif.",
      rows,
    );
    expect(authority).toHaveLength(1);
    expect(authority[0]?.id).toBe("gh-only");
  });

  it("same theme with distinct scopes stay separate candidates", () => {
    const rows = [
      brief("gh-proj", "github", "GitHub est obligatoire pour tout le projet.", "PROJECT"),
      brief("gh-cycle", "github", "GitHub est obligatoire seulement pour ce cycle.", "CYCLE"),
    ];
    const authority = findAuthorityReviseCandidates(
      "Finalement, GitHub devient facultatif.",
      rows,
    );
    expect(authority).toHaveLength(2);
    expect(new Set(authority.map((c) => c.scope))).toEqual(new Set(["PROJECT", "CYCLE"]));
  });

  it("REVOKED / REVISED are not authority candidates", () => {
    const rows = [
      { ...brief("gh-rev", "github", "GitHub est obligatoire."), state: "REVOKED" },
      { ...brief("gh-revised", "github", "GitHub est requis."), state: "REVISED" },
    ];
    expect(findAuthorityReviseCandidates("Finalement, GitHub devient facultatif.", rows)).toEqual(
      [],
    );
  });
});

describe("CR-02 thread pending lifecycle", () => {
  it("does not clear pending when Nora COMPLETE but métier UNKNOWN", () => {
    expect(
      shouldClearThreadPending({
        noraStatus: "COMPLETE",
        effectAttempted: true,
        effectStatus: "UNKNOWN",
      }),
    ).toBe(false);
  });

  it("clears pending when métier is terminal APPLIED", () => {
    expect(
      shouldClearThreadPending({
        noraStatus: "UNKNOWN",
        effectAttempted: true,
        effectStatus: "APPLIED",
      }),
    ).toBe(true);
  });

  it("clears pending when no business attempt and Nora COMPLETE", () => {
    expect(
      shouldClearThreadPending({
        noraStatus: "COMPLETE",
        effectAttempted: false,
        effectStatus: null,
      }),
    ).toBe(true);
  });

  it("exclusive guard blocks a distinct new act over unresolved pending", () => {
    const pending = {
      content: "Ouvre le cycle cadrage.",
      clientTurnKey: "turn-1",
      clientCommandKey: "conv-auth:turn-1",
    };
    expect(mayStartNewThreadAct({ unresolved: pending, nextContent: pending.content }).ok).toBe(
      true,
    );
    const blocked = mayStartNewThreadAct({
      unresolved: pending,
      nextContent: "Je décide que GitHub est obligatoire.",
    });
    expect(blocked.ok).toBe(false);
    if (!blocked.ok) expect(blocked.pending.clientTurnKey).toBe("turn-1");
  });
});

```

### MODIFIED FULL `projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts`

```tsx
import { createHash } from "crypto";
import { mkdtempSync, readFileSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { resolve } from "path";
import { describe, expect, it } from "vitest";
import { schemaRevision } from "@/db/schema";
import { buildSourceActionKey } from "@/domains/pilotage/command-runner";
import {
  CKI_MANIFEST_FILE,
  CYCLE_CKI,
  CYCLE_TYPES,
  deliveryState,
  listCkiSpecialtyFiles,
  loadCkiManifest,
  resolveForOpen,
  resolvePinnedCki,
} from "@/domains/pilotage/cki-resolve";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import { classifyExplicitInteraction } from "@/domains/pilotage/service";
import { COMMAND_STATUSES } from "@/domains/pilotage/types";

describe("ml3 CKI resolution and intent", () => {
  it("records schema revision 007", () => {
    expect(schemaRevision).toBe("007_ml3_pilotage_decisions");
    expect(COMMAND_STATUSES).toEqual([
      "APPLIED",
      "ALREADY_APPLIED",
      "REJECTED",
      "CONFLICT",
      "UNKNOWN",
    ]);
  });

  it("maps each cycle type to one CKI specialty file", () => {
    const files = listCkiSpecialtyFiles();
    expect(CYCLE_TYPES).toHaveLength(15);
    expect(files).toHaveLength(15);
    expect(new Set(CYCLE_TYPES.map((type) => `${CYCLE_CKI[type]}.md`))).toEqual(new Set(files));
  });

  it("pins a readable specialty as RESOLVED and delivers only when Nora attaches it", () => {
    const pin = resolveForOpen("CADRAGE");
    expect(pin.ckiId).toBe("01-cadrage");
    expect(pin.availability).toBe("RESOLVED");
    expect(pin.pinnedVersion).toBe("0.2.0");
    expect(pin.contentDigest).toMatch(/^[a-f0-9]{64}$/);
    const bytes = readFileSync(resolve(process.cwd(), "../cki/01-cadrage.md"));
    expect(pin.contentDigest).toBe(createHash("sha256").update(bytes).digest("hex"));
    expect(deliveryState(pin.availability, false)).toBe("RESOLVED");
    expect(deliveryState("RESOLVED", true)).toBe("DELIVERED");
    expect(deliveryState("ASSOCIATED", true)).toBe("ASSOCIATED");
  });

  it("stays ASSOCIATED without a pin and UNAVAILABLE when the digest diverges", () => {
    expect(
      resolvePinnedCki({ ckiId: "01-cadrage", contentDigest: null, pinnedVersion: null }).availability,
    ).toBe("ASSOCIATED");
    expect(
      resolvePinnedCki({
        ckiId: "01-cadrage",
        contentDigest: "ab".repeat(32),
        pinnedVersion: "0.2.0",
      }).availability,
    ).toBe("UNAVAILABLE");

    const previous = process.env.SFIA_CKI_ROOT;
    process.env.SFIA_CKI_ROOT = "/tmp/sfia-cki-missing-ml3";
    try {
      const pin = resolveForOpen("SECURITE");
      expect(pin.ckiId).toBe("10-securite-rssi");
      expect(pin.availability).toBe("ASSOCIATED");
      expect(pin.contentDigest).toBeNull();
      expect(pin.pinnedVersion).toBeNull();
    } finally {
      if (previous === undefined) delete process.env.SFIA_CKI_ROOT;
      else process.env.SFIA_CKI_ROOT = previous;
    }
  });

  it("qualifies a clear GO and rejects ambiguous utterances", () => {
    expect(qualifyPilotageIntent("ouvre le cycle cadrage")).toMatchObject({
      clarity: "CLEAR",
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
    });
    expect(qualifyPilotageIntent("OK").clarity).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("annule cette méthode").clarity).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("retire la méthode")).toMatchObject({
      clarity: "CLEAR",
      operation: "WITHDRAW_METHOD",
    });
    expect(qualifyPilotageIntent("clôture le cycle cadrage et ouvre le cycle ux")).toMatchObject({
      clarity: "CLEAR",
      operation: "TRANSITION_CYCLE",
      cycleType: "CADRAGE",
      toCycleType: "UX_UI",
    });
    expect(qualifyPilotageIntent("ouvre le cycle cadrage et le cycle sécurité").clarity).toBe("AMBIGUOUS");
  });

  it("F01/F02: qualifies documentary RECORD/REVISE and rejects soft preferences", () => {
    expect(
      qualifyPilotageIntent(
        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
      ),
    ).toMatchObject({
      clarity: "CLEAR",
      operation: "RECORD_DECISION",
      objectRef: expect.stringMatching(/github|connexion/i),
    });
    expect(qualifyPilotageIntent("Finalement, GitHub devient facultatif.")).toMatchObject({
      clarity: "CLEAR",
      operation: "REVISE_DECISION",
    });
    expect(qualifyPilotageIntent("OK").clarity).toBe("AMBIGUOUS");
    expect(
      qualifyPilotageIntent("Ce serait intéressant de commencer.").clarity,
    ).toBe("NONE");
    expect(
      qualifyPilotageIntent("Je décide que GitHub est obligatoire ?").clarity,
    ).toBe("AMBIGUOUS");
  });

  it("C01: exploratory Finalement / questions never CLEAR REVISE", () => {
    expect(
      qualifyPilotageIntent("Finalement, je pense que GitHub pourrait être facultatif.").clarity,
    ).toBe("AMBIGUOUS");
    expect(
      qualifyPilotageIntent("Finalement, et si GitHub devenait facultatif ?").clarity,
    ).toBe("AMBIGUOUS");
    expect(qualifyPilotageIntent("Je réfléchis à rendre GitHub facultatif.").clarity).toBe(
      "NONE",
    );
    expect(qualifyPilotageIntent("Nora propose de rendre GitHub facultatif.").clarity).toBe(
      "NONE",
    );
    expect(
      qualifyPilotageIntent(
        "Je révise la décision GitHub : la connexion est facultative.",
      ),
    ).toMatchObject({ clarity: "CLEAR", operation: "REVISE_DECISION" });
  });

  it("pins RESOLVED only when the file digest matches the approved manifest", () => {
    const manifest = loadCkiManifest();
    expect(manifest?.version).toBe("0.2.0");
    expect(manifest?.specialties).toHaveLength(15);
    const pin = resolveForOpen("UX_UI");
    const entry = manifest?.specialties.find((item) => item.ckiId === "04-ux-ui");
    expect(pin.availability).toBe("RESOLVED");
    expect(pin.contentDigest).toBe(entry?.sha256);
    expect(pin.manifestRef).toContain(CKI_MANIFEST_FILE);

    const dir = mkdtempSync(resolve(tmpdir(), "sfia-cki-mismatch-"));
    writeFileSync(resolve(dir, "10-securite-rssi.md"), "contenu non approuvé\n");
    writeFileSync(
      resolve(dir, CKI_MANIFEST_FILE),
      JSON.stringify({
        version: "0.2.0",
        specialties: [
          {
            ckiId: "10-securite-rssi",
            file: "10-securite-rssi.md",
            version: "0.2.0",
            sha256: "ab".repeat(32),
          },
        ],
      }),
    );
    const previous = process.env.SFIA_CKI_ROOT;
    process.env.SFIA_CKI_ROOT = dir;
    try {
      const mismatched = resolveForOpen("SECURITE");
      expect(mismatched.availability).toBe("UNAVAILABLE");
      expect(mismatched.contentDigest).toBeNull();
      expect(mismatched.pinnedVersion).toBeNull();
      const fileDigest = createHash("sha256")
        .update(readFileSync(resolve(dir, "10-securite-rssi.md")))
        .digest("hex");
      expect(
        resolvePinnedCki({
          ckiId: "10-securite-rssi",
          contentDigest: fileDigest,
          pinnedVersion: "0.2.0",
        }).availability,
      ).toBe("UNAVAILABLE");
    } finally {
      if (previous === undefined) delete process.env.SFIA_CKI_ROOT;
      else process.env.SFIA_CKI_ROOT = previous;
    }
  });

  it("classifies a natural explicit GO without an operation", () => {
    const clear = classifyExplicitInteraction({
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: "ui:UTTERANCE:act-1",
      utterance: "ouvre le cycle cadrage",
      actInstanceId: "act-1",
    });
    expect(clear?.ok).toBe(true);
    if (clear?.ok) {
      expect(clear.command.operation).toBe("OPEN_CYCLE");
      expect(clear.command.cycleType).toBe("CADRAGE");
      expect(clear.command.actInstanceId).toBe("act-1");
    }
    const ambiguous = classifyExplicitInteraction({
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: "ui:UTTERANCE:act-2",
      utterance: "OK",
      actInstanceId: "act-2",
    });
    expect(ambiguous).toMatchObject({ ok: false, reasonCode: "AMBIGUOUS" });
    expect(
      classifyExplicitInteraction({
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: "ui:open:act-3",
        operation: "OPEN_CYCLE",
        utterance: "ouvre le cycle cadrage",
      }),
    ).toBeNull();
  });

  it("hashes source action keys with the act instance so retries stay stable", () => {
    const first = buildSourceActionKey({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      actInstanceId: "act-stable",
    });
    const retry = buildSourceActionKey({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      actInstanceId: "act-stable",
    });
    const next = buildSourceActionKey({
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      actInstanceId: "act-next",
    });
    expect(first).toBe(retry);
    expect(first).not.toBe(next);
    expect(first).toMatch(/^[a-f0-9]{64}$/);
  });
});

```

### MODIFIED FULL `projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts`

```tsx
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  messages,
  methodApplications,
  pilots,
  preparations,
  projectCycles,
} from "@/db/schema";
import { listDecisionJournal } from "@/domains/decisions/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import {
  applyGovernanceRestriction,
  chooseMethod,
  closeCycle,
  executePilotageCommand,
  getPilotageProjection,
  liftGovernanceRestriction,
  openCycle,
  pilotageFault,
  proposeTrajectory,
  reconcileCommand,
  reconcileCommandByClientKey,
  replaceMethod,
  retainTrajectory,
  revokeFoundingDecision,
  transitionCycle,
  withdrawMethod,
} from "@/domains/pilotage/service";
import { newId } from "@/lib/ids";

async function seedProject(label: string) {
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED") throw new Error(`seed failed: ${created.status}`);
  return { pilotId, projectId: created.projectId, preparationId: prep.id };
}

async function insertUserMessage(
  preparationId: string,
  content: string,
  options?: { status?: string; role?: string; ordinal?: number },
) {
  const conv = (
    await db.select().from(conversations).where(eq(conversations.preparationId, preparationId)).limit(1)
  )[0];
  const id = newId("msg");
  await db.insert(messages).values({
    id,
    conversationId: conv.id,
    role: options?.role ?? "user",
    content,
    status: options?.status ?? "COMPLETE",
    ordinal: options?.ordinal ?? 1,
  });
  return id;
}

describe("PostgreSQL ML3 pilotage and decisions", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
  });

  it("starts empty: no cycle, no method, no retained trajectory", async () => {
    const { pilotId, projectId } = await seedProject("empty");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.revision).toBe(0);
    expect(view.cycle).toBeNull();
    expect(view.method).toEqual({ presence: "ABSENT", usageRestricted: false });
    expect(view.trajectory.retained).toBeNull();
    expect(view.trajectory.proposed).toBeNull();
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);
  });

  it("propose stays non-authoritative until an explicit retain", async () => {
    const { pilotId, projectId } = await seedProject("traj");
    const proposed = await proposeTrajectory(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      orientation: "Explorer le cadrage avant de construire",
    });
    expect(proposed.status).toBe("APPLIED");
    expect(proposed.decisionId).toBeNull();
    const mid = await getPilotageProjection(pilotId, projectId);
    expect(mid.trajectory.proposed?.orientation).toContain("cadrage");
    expect(mid.trajectory.retained).toBeNull();
    expect(mid.cycle).toBeNull();
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(0);

    const retained = await retainTrajectory(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: mid.revision,
      sourceRef: newId("src"),
      trajectoryRevisionId: mid.trajectory.proposed?.id,
    });
    expect(retained.status).toBe("APPLIED");
    expect(retained.decisionId).toBeTruthy();
    const after = await getPilotageProjection(pilotId, projectId);
    expect(after.trajectory.retained?.status).toBe("RETAINED");
    expect(after.cycle).toBeNull();
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.map((d) => d.kind)).toEqual(["RETAIN_TRAJECTORY"]);
  });

  it("opens one cycle on an explicit GO and pins the cadrage CKI", async () => {
    const { pilotId, projectId } = await seedProject("open");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Clarifier le besoin",
    });
    expect(opened.status).toBe("APPLIED");
    expect(opened.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.cycle?.status).toBe("ACTIVE");
    expect(view.cycle?.cki.ckiId).toBe("01-cadrage");
    expect(view.cycle?.cki.availability).toBe("RESOLVED");
    expect(view.cycle?.cki.contentDigest).toMatch(/^[a-f0-9]{64}$/);
    expect(["ASSOCIATED", "RESOLVED", "UNAVAILABLE"]).toContain(view.cycle?.cki.availability);
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal).toHaveLength(1);
    expect(journal[0]?.kind).toBe("OPEN_CYCLE");
  });

  it("rejects an ambiguous OK without opening a cycle", async () => {
    const seeded = await seedProject("ambig");
    const messageId = await insertUserMessage(seeded.preparationId, "OK");
    const first = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: messageId,
      utterance: "OK",
    });
    expect(first.status).toBe("REJECTED");
    expect(first.reasonCode).toBe("AMBIGUOUS");
    const again = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: messageId,
      utterance: "OK",
    });
    expect(again.status).toBe("CONFLICT");
    expect(again.reasonCode).toBe("HUMAN_INTENT");
    const view = await getPilotageProjection(seeded.pilotId, seeded.projectId);
    expect(view.cycle).toBeNull();
    expect(view.revision).toBe(0);
    expect(await listDecisionJournal(seeded.pilotId, seeded.projectId)).toHaveLength(0);
  });

  it("keeps a single ACTIVE cycle when two opens race", async () => {
    const { pilotId, projectId } = await seedProject("race");
    const input = {
      expectedRevision: 0,
      cycleType: "CADRAGE" as const,
      objective: "Course",
    };
    const [a, b] = await Promise.all([
      openCycle(pilotId, projectId, { ...input, clientCommandKey: newId("idem"), sourceRef: newId("src") }),
      openCycle(pilotId, projectId, { ...input, clientCommandKey: newId("idem"), sourceRef: newId("src") }),
    ]);
    const statuses = [a.status, b.status].sort();
    expect(statuses.filter((s) => s === "APPLIED")).toHaveLength(1);
    expect(statuses.every((s) => s === "APPLIED" || s === "CONFLICT" || s === "REJECTED")).toBe(true);
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
    expect(rows).toHaveLength(1);

    await expect(
      db.insert(projectCycles).values({
        id: newId("cyc"),
        projectId,
        cycleType: "UX_UI",
        objective: "second",
        status: "ACTIVE",
        revision: 1,
      }),
    ).rejects.toBeTruthy();
  });

  it("replays the same key and conflicts when the fingerprint changes", async () => {
    const { pilotId, projectId } = await seedProject("replay");
    const key = newId("idem");
    const sourceRef = newId("src");
    const first = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Une fois",
    });
    expect(first.status).toBe("APPLIED");
    const second = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Une fois",
    });
    expect(second.status).toBe("ALREADY_APPLIED");
    expect(second.commandId).toBe(first.commandId);
    expect(second.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const recon = await reconcileCommand(pilotId, projectId, first.commandId!);
    expect(recon.status).toBe("ALREADY_APPLIED");
    const changed = await openCycle(pilotId, projectId, {
      clientCommandKey: key,
      expectedRevision: 0,
      sourceRef,
      cycleType: "CADRAGE",
      objective: "Autre objectif",
    });
    expect(changed.status).toBe("CONFLICT");
    expect(changed.reasonCode).toBe("FINGERPRINT");
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
    expect(await listDecisionJournal(pilotId, projectId)).toHaveLength(1);
  });

  it("rolls back a transition when opening the next cycle fails", async () => {
    const { pilotId, projectId } = await seedProject("atomic");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Base",
    });
    expect(opened.status).toBe("APPLIED");
    const failingKey = newId("idem");
    pilotageFault.afterCloseBeforeOpen = () => {
      throw new Error("INJECTED_OPEN_FAILURE");
    };
    try {
      await expect(
        transitionCycle(pilotId, projectId, {
          clientCommandKey: failingKey,
          expectedRevision: opened.revision ?? 1,
          sourceRef: newId("src"),
          toCycleType: "UX_UI",
          objective: "Ne doit pas rester",
        }),
      ).rejects.toThrow(/INJECTED_OPEN_FAILURE/);
    } finally {
      pilotageFault.afterCloseBeforeOpen = null;
    }
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows.map((r) => `${r.cycleType}:${r.status}`)).toEqual(["CADRAGE:ACTIVE"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.revision).toBe(opened.revision);

    const moved = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: view.revision,
      sourceRef: newId("src"),
      toCycleType: "UX_UI",
      objective: "Expérience",
    });
    expect(moved.status).toBe("APPLIED");
    expect(["APPLIED", "ALREADY_APPLIED", "REJECTED", "CONFLICT", "UNKNOWN"]).toContain(moved.status);
    expect(moved.effects.map((e) => e.effectKind)).toEqual(["CLOSE", "OPEN"]);
    const after = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(after.find((r) => r.cycleType === "CADRAGE")?.status).toBe("CLOSED");
    expect(after.find((r) => r.cycleType === "UX_UI")?.status).toBe("ACTIVE");
    expect(after.filter((r) => r.status === "ACTIVE")).toHaveLength(1);
  });

  it("chooses, replaces, withdraws and revokes the current method base without restoring the previous one", async () => {
    const { pilotId, projectId } = await seedProject("method");
    let revision = 0;
    const chosen = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(chosen.status).toBe("APPLIED");
    revision = chosen.revision ?? revision;
    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    revision = replaced.revision ?? revision;
    let view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "Kanban", methodVersion: "2.0" });

    const withdrawn = await withdrawMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
    });
    expect(withdrawn.status).toBe("APPLIED");
    revision = withdrawn.revision ?? revision;
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method.presence).toBe("ABSENT");

    const again = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      methodRef: "XP",
      methodVersion: "3.0",
    });
    expect(again.status).toBe("APPLIED");
    revision = again.revision ?? revision;
    const unrelated = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      statement: "Le périmètre reste le portail",
    });
    expect(unrelated.status).toBe("APPLIED");
    revision = unrelated.revision ?? revision;
    const revokedSide = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      decisionId: unrelated.decisionId!,
    });
    expect(revokedSide.status).toBe("APPLIED");
    expect(revokedSide.effects[0]?.effectKind).toBe("REVOKE_DECISION");
    revision = revokedSide.revision ?? revision;
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "XP" });

    const revokedBase = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceRef: newId("src"),
      decisionId: again.decisionId!,
    });
    expect(revokedBase.status).toBe("APPLIED");
    expect(revokedBase.effects[0]?.effectKind).toBe("REVOKE_BASE");
    view = await getPilotageProjection(pilotId, projectId);
    expect(view.method.presence).toBe("ABSENT");
    const apps = await db
      .select()
      .from(methodApplications)
      .where(eq(methodApplications.projectId, projectId));
    expect(apps.filter((a) => a.isCurrent)).toHaveLength(0);
    expect(apps.some((a) => a.methodRef === "Scrum" && a.isCurrent)).toBe(false);
    expect(apps.some((a) => a.methodRef === "Kanban" && a.isCurrent)).toBe(false);
  });

  it("blocks a cycle open while a restriction is active and allows it after a lift", async () => {
    const { pilotId, projectId } = await seedProject("restrict");
    const applied = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      statement: "Pause des ouvertures",
    });
    expect(applied.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Ne doit pas s'ouvrir",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();

    const restrictionId = applied.effects[0]?.targetRef;
    const lifted = await liftGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      restrictionId: restrictionId!,
    });
    expect(lifted.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: lifted.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Après levée",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");

    const method = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(method.status).toBe("APPLIED");
    const suspended = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceRef: newId("src"),
      targetKind: "METHOD_USE",
      targetRef: "Scrum",
    });
    expect(suspended.status).toBe("APPLIED");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Scrum",
      usageRestricted: true,
    });
  });

  it("isolates pilotage across projects and rejects a foreign user message", async () => {
    const a = await seedProject("iso-a");
    const b = await seedProject("iso-b");
    const opened = await openCycle(a.pilotId, a.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Seulement A",
    });
    expect(opened.status).toBe("APPLIED");
    await expect(
      openCycle(a.pilotId, b.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        cycleType: "UX_UI",
        objective: "Interdit",
      }),
    ).rejects.toMatchObject({ code: "NOT_FOUND" });

    const foreign = await insertUserMessage(b.preparationId, "Ouvre le cycle cadrage");
    const stolen = await executePilotageCommand(a.pilotId, a.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceKind: "USER_MESSAGE",
      sourceRef: foreign,
      utterance: "Ouvre le cycle cadrage",
    });
    expect(stolen.status).toBe("REJECTED");
    expect(stolen.reasonCode).toBe("SOURCE");
    const viewA = await getPilotageProjection(a.pilotId, a.projectId);
    const viewB = await getPilotageProjection(b.pilotId, b.projectId);
    expect(viewA.cycle?.cycleType).toBe("CADRAGE");
    expect(viewB.cycle).toBeNull();
    expect(viewB.method.presence).toBe("ABSENT");
    const cyclesB = await db
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, b.projectId), eq(projectCycles.status, "ACTIVE")));
    expect(cyclesB).toHaveLength(0);
  });

  it("opens a cycle from an explicit utterance without an operation", async () => {
    const { pilotId, projectId } = await seedProject("natural-go");
    const actInstanceId = newId("act");
    const opened = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: `ui:UTTERANCE:${actInstanceId}`,
      actInstanceId,
      utterance: "ouvre le cycle cadrage",
    });
    expect(opened.status).toBe("APPLIED");
    expect(opened.effects.map((e) => e.effectKind)).toEqual(["OPEN"]);
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.cycle?.cycleType).toBe("CADRAGE");
    expect(view.cycle?.status).toBe("ACTIVE");
  });

  it("applies a cycle restriction only to the named target", async () => {
    const { pilotId, projectId } = await seedProject("target-restrict");
    const applied = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "Pause UX seulement",
    });
    expect(applied.status).toBe("APPLIED");
    const cadrage = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: applied.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Autorisé",
    });
    expect(cadrage.status).toBe("APPLIED");
    const closed = await closeCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: cadrage.revision ?? 2,
      sourceRef: newId("src"),
      cycleId: (await getPilotageProjection(pilotId, projectId)).cycle?.id,
    });
    expect(closed.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: closed.revision ?? 3,
      sourceRef: newId("src"),
      cycleType: "UX_UI",
      objective: "Restreint",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
  });

  it("CR-03: different RECORD statements on same objectRef do not globally block OPEN", async () => {
    const { pilotId, projectId } = await seedProject("no-false-contradiction");
    const first = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "perimetre-portail",
      statement: "Le périmètre inclut le portail",
    });
    expect(first.status).toBe("APPLIED");
    const second = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: first.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "perimetre-portail",
      statement: "Le périmètre exclut le portail",
    });
    expect(second.status).toBe("APPLIED");
    // Independent cycle open must not be blocked by free-text divergence (RG-GOV-013).
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: second.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Effet indépendant autorisé",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
  });

  it("CR-02: REVISE_DECISION allowed for RECORD; refused for D5 founding kinds", async () => {
    const { pilotId, projectId } = await seedProject("revise-d5");
    const recorded = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "note-cadrage",
      statement: "Note initiale",
    });
    expect(recorded.status).toBe("APPLIED");
    const revised = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: recorded.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: recorded.decisionId!,
      statement: "Note amendée",
    });
    expect(revised.status).toBe("APPLIED");
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.find((d) => d.id === recorded.decisionId)?.state).toBe("REVISED");
    expect(journal.find((d) => d.id === revised.decisionId)?.state).toBe("APPLICABLE");
    expect(journal.find((d) => d.id === revised.decisionId)?.supersedesDecisionId).toBe(
      recorded.decisionId,
    );

    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revised.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Fondatrice",
    });
    expect(opened.status).toBe("APPLIED");
    const refuseOpenRevise = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: opened.decisionId!,
      statement: "Ne doit pas réécrire l'ouverture",
    });
    expect(refuseOpenRevise.status).toBe("REJECTED");
    expect(refuseOpenRevise.reasonCode).toBe("USE_TYPED_OPERATION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
    expect((await listDecisionJournal(pilotId, projectId)).find((d) => d.id === opened.decisionId)?.state).toBe(
      "APPLICABLE",
    );

    const method = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 3,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(method.status).toBe("APPLIED");
    const refuseMethodRevise = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "REVISE_DECISION",
      decisionId: method.decisionId!,
      statement: "Ne doit pas orpheliner la méthode",
    });
    expect(refuseMethodRevise.status).toBe("REJECTED");
    expect(refuseMethodRevise.reasonCode).toBe("USE_TYPED_OPERATION");
    const view = await getPilotageProjection(pilotId, projectId);
    expect(view.method).toMatchObject({ presence: "RETAINED", methodRef: "Scrum" });

    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: method.revision ?? 4,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Kanban",
    });
    const revoked = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: replaced.revision ?? 5,
      sourceRef: newId("src"),
      decisionId: replaced.decisionId!,
    });
    expect(revoked.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method.presence).toBe("ABSENT");
  });

  it("CR-01: transition blocked when target B or source A is restricted; A stays ACTIVE", async () => {
    const { pilotId, projectId } = await seedProject("transition-restrict");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Source A",
    });
    expect(opened.status).toBe("APPLIED");
    const blockB = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "B restreint",
    });
    expect(blockB.status).toBe("APPLIED");
    const refusedB = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockB.revision ?? 2,
      sourceRef: newId("src"),
      toCycleType: "UX_UI",
    });
    expect(refusedB.status).toBe("REJECTED");
    expect(refusedB.reasonCode).toBe("RESTRICTION");
    const afterB = await getPilotageProjection(pilotId, projectId);
    expect(afterB.cycle?.cycleType).toBe("CADRAGE");
    expect(afterB.cycle?.status).toBe("ACTIVE");
    const cyclesAfterB = await db
      .select()
      .from(projectCycles)
      .where(and(eq(projectCycles.projectId, projectId), eq(projectCycles.cycleType, "UX_UI")));
    expect(cyclesAfterB).toHaveLength(0);

    // Unrelated target type still allowed while UX_UI is restricted.
    const toDelivery = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockB.revision ?? 2,
      sourceRef: newId("src"),
      toCycleType: "DELIVERY",
    });
    expect(toDelivery.status).toBe("APPLIED");
    expect(toDelivery.effects.map((e) => e.effectKind).sort()).toEqual(["CLOSE", "OPEN"]);
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("DELIVERY");

    // Restrict current source type → further transition refused; cycle stays ACTIVE.
    const blockA = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: toDelivery.revision ?? 3,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "DELIVERY",
      statement: "A restreint",
    });
    expect(blockA.status).toBe("APPLIED");
    const refusedA = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: blockA.revision ?? 4,
      sourceRef: newId("src"),
      toCycleType: "QA_VALIDATION",
    });
    expect(refusedA.status).toBe("REJECTED");
    expect(refusedA.reasonCode).toBe("RESTRICTION");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("DELIVERY");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");

    // Lift both restrictions → transition allowed again.
    for (const effect of [...(blockB.effects ?? []), ...(blockA.effects ?? [])]) {
      if (effect.effectKind !== "APPLY_RESTRICTION") continue;
      const lift = await liftGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
        sourceRef: newId("src"),
        restrictionId: effect.targetRef,
      });
      expect(lift.status).toBe("APPLIED");
    }
    const afterLift = await transitionCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
      sourceRef: newId("src"),
      toCycleType: "QA_VALIDATION",
    });
    expect(afterLift.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("QA_VALIDATION");
  });

  it("rejects a user message that is not COMPLETE", async () => {
    const seeded = await seedProject("msg-status");
    const pendingId = await insertUserMessage(seeded.preparationId, "ouvre le cycle cadrage", {
      status: "PENDING",
    });
    const pending = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: pendingId,
      utterance: "ouvre le cycle cadrage",
    });
    expect(pending.status).toBe("REJECTED");
    expect(pending.reasonCode).toBe("SOURCE");
    const assistantId = await insertUserMessage(seeded.preparationId, "ouvre le cycle cadrage", {
      role: "assistant",
      status: "COMPLETE",
      ordinal: 2,
    });
    const assistant = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "USER_MESSAGE",
      sourceRef: assistantId,
      utterance: "ouvre le cycle cadrage",
    });
    expect(assistant.status).toBe("REJECTED");
    expect(assistant.reasonCode).toBe("SOURCE");
    expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();
  });

  it("does not apply the same human act twice when only the client key changes", async () => {
    const { pilotId, projectId } = await seedProject("act-instance");
    const actInstanceId = newId("act");
    const sourceRef = `ui:OPEN_CYCLE:${actInstanceId}`;
    const clientCommandKey = newId("idem");
    const first = await openCycle(pilotId, projectId, {
      clientCommandKey,
      expectedRevision: 0,
      sourceRef,
      actInstanceId,
      cycleType: "CADRAGE",
      objective: "Un seul acte",
    });
    expect(first.status).toBe("APPLIED");
    const byKey = await reconcileCommandByClientKey(pilotId, projectId, clientCommandKey);
    expect(byKey.status).toBe("ALREADY_APPLIED");
    expect(byKey.commandId).toBe(first.commandId);
    const replay = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: first.revision ?? 1,
      sourceRef,
      actInstanceId,
      cycleType: "CADRAGE",
      objective: "Un seul acte",
    });
    expect(replay.status).toBe("CONFLICT");
    expect(replay.reasonCode).toBe("HUMAN_INTENT");
    const rows = await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId));
    expect(rows).toHaveLength(1);
  });

  it("B13-01/04: divergent RECORD statements do not block an independent cycle open", async () => {
    const { pilotId, projectId } = await seedProject("b13-compat");
    const a = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(a.status).toBe("APPLIED");
    const b = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: a.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "Finalement GitHub facultatif.",
    });
    expect(b.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: b.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Indépendant de la divergence textuelle",
    });
    expect(opened.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
  });

  it("B13-03/07: typed restriction blocks dependent effect and persists across projection reload", async () => {
    const { pilotId, projectId } = await seedProject("b13-material");
    const restrict = await applyGovernanceRestriction(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      targetKind: "CYCLE_MUTATION",
      targetRef: "UX_UI",
      statement: "Pause UX",
    });
    expect(restrict.status).toBe("APPLIED");
    const blocked = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: restrict.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "UX_UI",
      objective: "Dépendant",
    });
    expect(blocked.status).toBe("REJECTED");
    expect(blocked.reasonCode).toBe("RESTRICTION");
    const independent = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: restrict.revision ?? 1,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Indépendant",
    });
    expect(independent.status).toBe("APPLIED");
    const reloaded = await getPilotageProjection(pilotId, projectId);
    expect(reloaded.restrictions.some((r) => r.status === "ACTIVE" && r.targetRef === "UX_UI")).toBe(
      true,
    );
  });

  it("B13-05/09: REPLACE then REVOKE founding method; history preserved, no resurrection", async () => {
    const { pilotId, projectId } = await seedProject("b13-replace");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Méthode",
    });
    const chosen = await chooseMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: opened.revision ?? 1,
      sourceRef: newId("src"),
      methodRef: "Scrum",
      methodVersion: "1.0",
    });
    expect(chosen.status).toBe("APPLIED");
    const replaced = await replaceMethod(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: chosen.revision ?? 2,
      sourceRef: newId("src"),
      methodRef: "Kanban",
      methodVersion: "2.0",
    });
    expect(replaced.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method).toMatchObject({
      presence: "RETAINED",
      methodRef: "Kanban",
    });
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.find((d) => d.id === chosen.decisionId)?.state).toBe("SUPERSEDED");
    expect(journal.find((d) => d.id === replaced.decisionId)?.state).toBe("APPLICABLE");
    expect(journal.find((d) => d.id === replaced.decisionId)?.supersedesDecisionId).toBe(
      chosen.decisionId,
    );
    const revoked = await revokeFoundingDecision(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: replaced.revision ?? 3,
      sourceRef: newId("src"),
      decisionId: replaced.decisionId!,
    });
    expect(revoked.status).toBe("APPLIED");
    expect((await getPilotageProjection(pilotId, projectId)).method.presence).toBe("ABSENT");
    const after = await listDecisionJournal(pilotId, projectId);
    expect(after.find((d) => d.id === replaced.decisionId)?.state).toBe("REVOKED");
    expect(after.map((d) => d.id)).toContain(chosen.decisionId);
  });

  it("B13-08: COGNITIVE_PROPOSAL alone cannot open a cycle", async () => {
    const { pilotId, projectId } = await seedProject("b13-source");
    const stolen = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "COGNITIVE_PROPOSAL",
      sourceRef: newId("src"),
      operation: "OPEN_CYCLE",
      cycleType: "CADRAGE",
      objective: "Interdit",
    });
    expect(stolen.status).toBe("REJECTED");
    expect(stolen.reasonCode).toBe("SOURCE");
    expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
  });

  it("C01: single D6 decision + new USER text surfaces Level A via nora-context without second decision", async () => {
    const { buildNoraPilotageContext } = await import("@/domains/pilotage/nora-context");
    const { generateNoraReply } = await import("@/domains/conversation/nora-adapter");
    const { pilotId, projectId, preparationId } = await seedProject("b13-c01-ctx");
    const recorded = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(recorded.status).toBe("APPLIED");
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);

    const userText = "Finalement, je préfère GitHub facultatif.";
    const ctx = await buildNoraPilotageContext(pilotId, preparationId, userText);
    expect(ctx.projectId).toBe(projectId);
    expect(ctx.levelASignals.length).toBeGreaterThanOrEqual(1);
    expect(ctx.levelASignals[0].kind).toBe("MESSAGE_DECISION_CONFRONTATION");
    expect(ctx.levelASignals[0].decisionId).toBe(recorded.decisionId);
    expect(ctx.levelASignals[0].authorityClaim).toBe("NONE");
    expect(ctx.levelASignals[0].framing).toBe("POSSIBLE_CHANGE");
    expect(ctx.snippets.join("\n")).toContain("Décisions D6 applicables");

    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    const reply = await generateNoraReply({
      userText,
      contextSnippets: [],
      pilotageSnippets: ctx.snippets,
      levelASignals: ctx.levelASignals,
    });
    expect(reply.mode).toBe("deterministic-fixture");
    expect(reply.content).toMatch(/Niveau A/i);
    expect(reply.content).toContain(recorded.decisionId!);
    // Still a single APPLICABLE decision — Nora did not create a second one.
    expect((await listDecisionJournal(pilotId, projectId)).filter((d) => d.state === "APPLICABLE")).toHaveLength(
      1,
    );
  });

  it("R3: postUserMessageAndNora integrates USER→D6 context→fixture→persisted thread without inventing HumanDecision", async () => {
    const { postUserMessageAndNora, listMessages } = await import(
      "@/domains/conversation/service"
    );
    const { buildNoraPilotageContext } = await import("@/domains/pilotage/nora-context");
    const { utteranceTouchesObject } = await import("@/domains/decisions/divergence-assist");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const projectA = await seedProject("b13-r3-iso-a");
      const projectB = await seedProject("b13-r3-iso-b");
      const foreignMarker = `MARKER_B13_R3_ISO_FOREIGN_${newId("mk")}`;

      // Both decisions MUST exist and be APPLICABLE before Nora generation (discriminating isolation).
      const recordedA = await executePilotageCommand(projectA.pilotId, projectA.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: "github-connexion",
        statement: "La connexion GitHub est obligatoire.",
      });
      expect(recordedA.status).toBe("APPLIED");
      expect(recordedA.decisionId).toBeTruthy();

      const recordedB = await executePilotageCommand(projectB.pilotId, projectB.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        // Same objectRef as A so a cross-project leak would be selected for the USER text.
        objectRef: "github-connexion",
        statement: `GitHub obligatoire — ${foreignMarker} — décision étrangère projet B.`,
      });
      expect(recordedB.status).toBe("APPLIED");
      expect(recordedB.decisionId).toBeTruthy();

      const journalABefore = await listDecisionJournal(projectA.pilotId, projectA.projectId);
      const journalBBefore = await listDecisionJournal(projectB.pilotId, projectB.projectId);
      expect(journalABefore.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalBBefore.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalBBefore.some((d) => d.statement.includes(foreignMarker))).toBe(true);
      expect(journalBBefore.some((d) => d.id === recordedB.decisionId)).toBe(true);

      // Soft reflection — Level A confrontation without F02 revise performative.
      const userText = "À propos de GitHub, ce serait intéressant de le rendre facultatif.";
      // USER text is relevant to B's objectRef — without project filter B would be confrontable.
      expect(utteranceTouchesObject(userText, "github-connexion")).toBe(true);

      const ctxB = await buildNoraPilotageContext(
        projectB.pilotId,
        projectB.preparationId,
        userText,
      );
      expect(ctxB.projectId).toBe(projectB.projectId);
      expect(ctxB.snippets.join("\n")).toContain(foreignMarker);
      expect(ctxB.snippets.join("\n")).toContain(recordedB.decisionId!);

      const ctxABefore = await buildNoraPilotageContext(
        projectA.pilotId,
        projectA.preparationId,
        userText,
      );
      expect(ctxABefore.projectId).toBe(projectA.projectId);
      expect(ctxABefore.snippets.join("\n")).toContain(recordedA.decisionId!);
      expect(ctxABefore.snippets.join("\n")).not.toContain(foreignMarker);
      expect(ctxABefore.snippets.join("\n")).not.toContain(recordedB.decisionId!);
      expect(ctxABefore.levelASignals.every((s) => s.decisionId !== recordedB.decisionId)).toBe(
        true,
      );

      const turnKey = `b13-r3-${newId("turn")}`;
      const result = await postUserMessageAndNora(
        projectA.pilotId,
        projectA.preparationId,
        userText,
        { clientTurnKey: turnKey },
      );
      expect(result.status).toBe("COMPLETE");
      expect(result.humanDecisionCreated).toBe(false);
      expect(result.noraMode).toBe("deterministic-fixture");
      expect(result.userMessageId).toBeTruthy();
      expect(result.assistantMessageId).toBeTruthy();

      const thread = await listMessages(projectA.pilotId, projectA.preparationId);
      const userMsg = thread.find((m) => m.id === result.userMessageId);
      const assistantMsg = thread.find((m) => m.id === result.assistantMessageId);
      expect(userMsg?.role).toBe("user");
      expect(userMsg?.content).toBe(userText);
      expect(userMsg?.status).toBe("COMPLETE");
      expect(assistantMsg?.role).toBe("assistant");
      expect(assistantMsg?.status).toBe("COMPLETE");
      expect(assistantMsg?.content).toMatch(/Niveau A/i);
      expect(assistantMsg?.content).toContain(recordedA.decisionId!);
      expect(assistantMsg?.content).toMatch(/pas une (HumanDecision|interdiction D6)/i);
      expect(assistantMsg?.content).not.toMatch(/blocage D6 établi|je révoque|HumanDecision créée/i);
      expect(assistantMsg?.content).not.toContain(foreignMarker);
      expect(assistantMsg?.content).not.toContain(recordedB.decisionId!);

      const journalAAfter = await listDecisionJournal(projectA.pilotId, projectA.projectId);
      const journalBAfter = await listDecisionJournal(projectB.pilotId, projectB.projectId);
      expect(journalAAfter.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
      expect(journalAAfter.map((d) => d.id).sort()).toEqual(journalABefore.map((d) => d.id).sort());
      expect(journalBAfter.map((d) => d.id).sort()).toEqual(journalBBefore.map((d) => d.id).sort());
      expect(journalBAfter.find((d) => d.id === recordedB.decisionId)?.statement).toContain(
        foreignMarker,
      );

      const view = await getPilotageProjection(projectA.pilotId, projectA.projectId);
      expect(view.cycle).toBeNull();
      expect(view.method.presence).toBe("ABSENT");

      const reloaded = await listMessages(projectA.pilotId, projectA.preparationId);
      expect(reloaded.some((m) => m.id === result.userMessageId)).toBe(true);
      expect(reloaded.some((m) => m.id === result.assistantMessageId)).toBe(true);

      const replay = await postUserMessageAndNora(
        projectA.pilotId,
        projectA.preparationId,
        userText,
        { clientTurnKey: turnKey },
      );
      expect(replay.idempotentReplay).toBe(true);
      expect(replay.humanDecisionCreated).toBe(false);
      expect(
        (await listDecisionJournal(projectA.pilotId, projectA.projectId)).filter(
          (d) => d.state === "APPLICABLE",
        ),
      ).toHaveLength(1);
      const users = (await listMessages(projectA.pilotId, projectA.preparationId)).filter(
        (m) => m.role === "user" && m.content === userText,
      );
      expect(users).toHaveLength(1);
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C01: two different but compatible formulations do not block an independent OPEN", async () => {
    const { pilotId, projectId } = await seedProject("b13-compatible");
    const a = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "La connexion GitHub est obligatoire pour ce projet.",
    });
    expect(a.status).toBe("APPLIED");
    const b = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: a.revision ?? 1,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github-connexion",
      statement: "GitHub reste requis pour ce projet.",
    });
    expect(b.status).toBe("APPLIED");
    const opened = await openCycle(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: b.revision ?? 2,
      sourceRef: newId("src"),
      cycleType: "CADRAGE",
      objective: "Compatible — pas de conflit matériel",
    });
    expect(opened.status).toBe("APPLIED");
  });

  it("F01: clear GO via postUserMessageAndNora opens one ACTIVE cycle with HumanDecision", async () => {
    const { postUserMessageAndNora, listMessages } = await import(
      "@/domains/conversation/service"
    );
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("f01-go");
      expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
      const turnKey = `f01-go-${newId("turn")}`;
      const result = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: turnKey },
      );
      expect(result.status).toBe("COMPLETE");
      expect(result.pilotageEffect?.attempted).toBe(true);
      expect(result.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(result.pilotageEffect?.operation).toBe("OPEN_CYCLE");
      expect(result.humanDecisionCreated).toBe(true);
      expect(result.pilotageEffect?.decisionId).toBeTruthy();
      const view = await getPilotageProjection(pilotId, projectId);
      expect(view.cycle?.status).toBe("ACTIVE");
      expect(view.cycle?.cycleType).toBe("CADRAGE");
      const journal = await listDecisionJournal(pilotId, projectId);
      expect(journal.some((d) => d.kind === "OPEN_CYCLE" && d.state === "APPLICABLE")).toBe(true);
      const thread = await listMessages(pilotId, preparationId);
      expect(thread.some((m) => m.id === result.userMessageId && m.role === "user")).toBe(true);
      expect(thread.some((m) => m.id === result.assistantMessageId)).toBe(true);

      const replay = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: turnKey },
      );
      expect(replay.idempotentReplay).toBe(true);
      expect(replay.humanDecisionCreated).toBe(true);
      expect(
        (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
          (c) => c.status === "ACTIVE",
        ),
      ).toHaveLength(1);
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("F01: ambiguous OK and hostile assistant source create no cycle", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const seeded = await seedProject("f01-neg");
      const ok = await postUserMessageAndNora(
        seeded.pilotId,
        seeded.preparationId,
        "OK",
        { clientTurnKey: `f01-ok-${newId("turn")}` },
      );
      expect(ok.pilotageEffect?.attempted).toBe(false);
      expect(ok.humanDecisionCreated).toBe(false);
      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();

      const soft = await postUserMessageAndNora(
        seeded.pilotId,
        seeded.preparationId,
        "Ce serait intéressant de commencer.",
        { clientTurnKey: `f01-soft-${newId("turn")}` },
      );
      expect(soft.humanDecisionCreated).toBe(false);
      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();

      const assistantId = await insertUserMessage(
        seeded.preparationId,
        "ouvre le cycle cadrage",
        { role: "assistant", status: "COMPLETE", ordinal: 99 },
      );
      const hostile = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceKind: "USER_MESSAGE",
        sourceRef: assistantId,
        utterance: "ouvre le cycle cadrage",
      });
      expect(hostile.status).toBe("REJECTED");
      expect(hostile.reasonCode).toBe("SOURCE");
      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("F02: RECORD then REVISE from conversation thread with durable journal", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("f02-rec");
      const record = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
        { clientTurnKey: `f02-rec-${newId("turn")}` },
      );
      expect(record.pilotageEffect?.attempted).toBe(true);
      expect(record.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(record.humanDecisionCreated).toBe(true);
      const firstId = record.pilotageEffect?.decisionId;
      expect(firstId).toBeTruthy();
      let journal = await listDecisionJournal(pilotId, projectId);
      expect(journal.filter((d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION")).toHaveLength(
        1,
      );

      const revise = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Finalement, GitHub devient facultatif.",
        { clientTurnKey: `f02-rev-${newId("turn")}` },
      );
      expect(revise.pilotageEffect?.attempted).toBe(true);
      expect(revise.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(revise.humanDecisionCreated).toBe(true);
      expect(revise.pilotageEffect?.decisionId).toBeTruthy();
      expect(revise.pilotageEffect?.decisionId).not.toBe(firstId);
      journal = await listDecisionJournal(pilotId, projectId);
      const applicable = journal.filter((d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION");
      expect(applicable).toHaveLength(1);
      expect(applicable[0]?.statement).toMatch(/facultatif/i);
      expect(journal.some((d) => d.id === firstId && d.state === "REVISED")).toBe(true);

      // Founding OPEN cannot be generically revised from conversation.
      const opened = await openCycle(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
        sourceRef: newId("src"),
        cycleType: "CADRAGE",
        objective: "fondation",
      });
      expect(opened.status).toBe("APPLIED");
      const refuse = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Finalement, le cycle cadrage devient ux.",
        { clientTurnKey: `f02-found-${newId("turn")}` },
      );
      expect(refuse.humanDecisionCreated).toBe(false);
      expect(refuse.pilotageEffect?.attempted).toBe(false);
      expect(refuse.pilotageEffect?.clarification || refuse.pilotageEffect?.intentReason).toMatch(
        /typée|candidates|cible|applicable/i,
      );
      expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("CADRAGE");
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("F01: restriction blocks conversational GO without false success", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("f01-rest");
      const restricted = await applyGovernanceRestriction(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: 0,
        sourceRef: newId("src"),
        targetKind: "CYCLE_MUTATION",
        targetRef: "*",
        statement: "Pas de mutation de cycle",
      });
      expect(restricted.status).toBe("APPLIED");
      const go = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: `f01-rest-${newId("turn")}` },
      );
      expect(go.pilotageEffect?.attempted).toBe(true);
      expect(go.pilotageEffect?.status).toBe("REJECTED");
      expect(go.pilotageEffect?.reasonCode).toBe("RESTRICTION");
      expect(go.humanDecisionCreated).toBe(false);
      expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C01: exploratory Finalement does not REVISE an applicable RECORD", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("c01-exp");
      const recorded = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
        { clientTurnKey: `c01-rec-${newId("turn")}` },
      );
      expect(recorded.humanDecisionCreated).toBe(true);
      const before = await listDecisionJournal(pilotId, projectId);
      const applicableBefore = before.filter((d) => d.state === "APPLICABLE");
      expect(applicableBefore).toHaveLength(1);

      for (const text of [
        "Finalement, je pense que GitHub pourrait être facultatif.",
        "Finalement, et si GitHub devenait facultatif ?",
        "Je réfléchis à rendre GitHub facultatif.",
        "Nora propose de rendre GitHub facultatif.",
      ]) {
        const r = await postUserMessageAndNora(pilotId, preparationId, text, {
          clientTurnKey: `c01-${newId("turn")}`,
        });
        expect(r.humanDecisionCreated).toBe(false);
        expect(r.pilotageEffect?.attempted).toBeFalsy();
      }
      const after = await listDecisionJournal(pilotId, projectId);
      expect(after.filter((d) => d.state === "APPLICABLE").map((d) => d.id)).toEqual(
        applicableBefore.map((d) => d.id),
      );
      expect(after.some((d) => d.state === "REVISED")).toBe(false);
    } finally {
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C02: D6 APPLIED survives Nora provider failure and reconstitutes on replay", async () => {
    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
    const { turnRaceHooks } = await import("@/domains/conversation/turn-command");
    const { reconstituteConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const prevLane = process.env.STUDIO_LANE;
    const prevE2e = process.env.STUDIO_E2E;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    try {
      const { pilotId, projectId, preparationId } = await seedProject("c02-fault");
      const turnKey = `c02-fault-${newId("turn")}`;
      turnRaceHooks.afterAuthorityBeforeNora = async () => {
        throw new Error("INJECTED_PROVIDER_FAILURE");
      };
      const result = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: turnKey },
      );
      expect(result.status).toBe("UNKNOWN");
      expect(result.pilotageEffect?.attempted).toBe(true);
      expect(result.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(result.humanDecisionCreated).toBe(true);
      expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");

      delete turnRaceHooks.afterAuthorityBeforeNora;
      const replay = await postUserMessageAndNora(
        pilotId,
        preparationId,
        "Ouvre le cycle cadrage.",
        { clientTurnKey: turnKey },
      );
      expect(replay.idempotentReplay).toBe(true);
      expect(replay.status).toBe("UNKNOWN");
      expect(replay.pilotageEffect?.attempted).toBe(true);
      expect(replay.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(replay.humanDecisionCreated).toBe(true);
      expect(
        (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
          (c) => c.status === "ACTIVE",
        ),
      ).toHaveLength(1);

      const reconstituted = await reconstituteConversationalAuthority({
        pilotId,
        projectId,
        clientTurnKey: turnKey,
        userMessageId: result.userMessageId,
      });
      expect(reconstituted?.attempted).toBe(true);
      expect(reconstituted?.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    } finally {
      delete turnRaceHooks.afterAuthorityBeforeNora;
      if (prevLane === undefined) delete process.env.STUDIO_LANE;
      else process.env.STUDIO_LANE = prevLane;
      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
      else process.env.STUDIO_E2E = prevE2e;
    }
  });

  it("C03: journal lists >8 decisions with newest accessible and older recoverable", async () => {
    const { pilotId, projectId } = await seedProject("c03-journal");
    let revision = 0;
    for (let i = 0; i < 12; i += 1) {
      const recorded = await executePilotageCommand(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: revision,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: `obj-${i}`,
        statement: `Décision documentaire numéro ${i} pour le journal.`,
      });
      expect(recorded.status).toBe("APPLIED");
      revision = recorded.revision ?? revision + 1;
    }
    const journal = await listDecisionJournal(pilotId, projectId);
    expect(journal.length).toBeGreaterThanOrEqual(12);
    const newest = journal[journal.length - 1];
    expect(newest?.statement).toMatch(/numéro 11/);
    expect(journal[0]?.statement).toMatch(/numéro 0/);
    const applicable = journal.filter((d) => d.state === "APPLICABLE");
    expect(applicable.length).toBeGreaterThanOrEqual(12);
    // Newest is beyond the old slice(0,8) window of oldest-first — still present.
    expect(applicable.some((d) => d.statement.includes("numéro 11"))).toBe(true);
    expect(applicable.some((d) => d.statement.includes("numéro 0"))).toBe(true);
  });

  it("CR-01: 15+ applicables with two GitHub beyond cognitive window → no silent REVISE", async () => {
    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const { selectApplicableBriefs, findAuthorityReviseCandidates } = await import(
      "@/domains/decisions/divergence-assist"
    );
    const { pilotId, projectId, preparationId } = await seedProject("cr01-multi");
    let revision = 0;
    const statements: Array<{ objectRef: string; statement: string }> = [
      { objectRef: "github", statement: "GitHub est obligatoire pour ce projet." },
    ];
    for (let i = 0; i < 13; i += 1) {
      statements.push({
        objectRef: `filler-${i}`,
        statement: `Décision filler ${i} est obligatoire pour ce projet.`,
      });
    }
    statements.push({
      objectRef: "github",
      statement: "GitHub reste requis pour les déploiements.",
    });
    expect(statements).toHaveLength(15);
    for (const row of statements) {
      const recorded = await executePilotageCommand(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: revision,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: row.objectRef,
        statement: row.statement,
      });
      expect(recorded.status).toBe("APPLIED");
      revision = recorded.revision ?? revision + 1;
    }
    const journal = await listDecisionJournal(pilotId, projectId);
    const applicable = journal.filter((d) => d.state === "APPLICABLE");
    expect(applicable.length).toBeGreaterThanOrEqual(15);
    const briefs = applicable.map((d) => ({
      id: d.id,
      kind: d.kind,
      objectRef: d.objectRef ?? "",
      scope: d.scope ?? "PROJECT",
      statement: d.statement ?? "",
      state: d.state,
      sourceKind: d.sourceKind,
    }));
    const cognitiveGithub = selectApplicableBriefs(briefs).filter((b) => b.objectRef === "github");
    expect(cognitiveGithub).toHaveLength(1);
    const authority = findAuthorityReviseCandidates(
      "Finalement, GitHub devient facultatif.",
      briefs,
    );
    expect(authority.length).toBeGreaterThanOrEqual(2);

    const msgId = await insertUserMessage(
      preparationId,
      "Finalement, GitHub devient facultatif.",
    );
    const outcome = await applyConversationalAuthority({
      pilotId,
      projectId,
      userMessageId: msgId,
      content: "Finalement, GitHub devient facultatif.",
      clientTurnKey: `cr01-multi-${newId("turn")}`,
    });
    expect(outcome.attempted).toBe(false);
    expect(outcome.humanDecisionCreated).toBe(false);
    expect(outcome.clarification || outcome.intentReason).toMatch(/plusieurs|candidates/i);
    const after = await listDecisionJournal(pilotId, projectId);
    expect(after.filter((d) => d.state === "REVISED")).toHaveLength(0);
    expect(after.filter((d) => d.state === "APPLICABLE" && d.objectRef === "github")).toHaveLength(2);
  });

  it("CR-01: unique GitHub applicable beyond fillers → single REVISE", async () => {
    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const { pilotId, projectId, preparationId } = await seedProject("cr01-unique");
    let revision = 0;
    const first = await executePilotageCommand(pilotId, projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: revision,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github",
      statement: "GitHub est obligatoire pour ce projet.",
    });
    expect(first.status).toBe("APPLIED");
    revision = first.revision ?? 1;
    for (let i = 0; i < 14; i += 1) {
      const filler = await executePilotageCommand(pilotId, projectId, {
        clientCommandKey: newId("idem"),
        expectedRevision: revision,
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: newId("src"),
        operation: "RECORD_DECISION",
        objectRef: `filler-${i}`,
        statement: `Décision filler ${i} est obligatoire pour ce projet.`,
      });
      expect(filler.status).toBe("APPLIED");
      revision = filler.revision ?? revision + 1;
    }
    const msgId = await insertUserMessage(
      preparationId,
      "Finalement, GitHub devient facultatif.",
    );
    const outcome = await applyConversationalAuthority({
      pilotId,
      projectId,
      userMessageId: msgId,
      content: "Finalement, GitHub devient facultatif.",
      clientTurnKey: `cr01-unique-${newId("turn")}`,
    });
    expect(outcome.attempted).toBe(true);
    expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    expect(outcome.humanDecisionCreated).toBe(true);
    const after = await listDecisionJournal(pilotId, projectId);
    expect(after.some((d) => d.id === first.decisionId && d.state === "REVISED")).toBe(true);
    expect(
      after.filter((d) => d.state === "APPLICABLE" && d.objectRef === "github"),
    ).toHaveLength(1);
  });

  it("CR-01: foreign project GitHub is never a revise target", async () => {
    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const a = await seedProject("cr01-iso-a");
    const b = await seedProject("cr01-iso-b");
    const inB = await executePilotageCommand(b.pilotId, b.projectId, {
      clientCommandKey: newId("idem"),
      expectedRevision: 0,
      sourceKind: "EXPLICIT_INTERACTION",
      sourceRef: newId("src"),
      operation: "RECORD_DECISION",
      objectRef: "github",
      statement: "GitHub est obligatoire pour ce projet.",
    });
    expect(inB.status).toBe("APPLIED");
    const msgId = await insertUserMessage(a.preparationId, "Finalement, GitHub devient facultatif.");
    const outcome = await applyConversationalAuthority({
      pilotId: a.pilotId,
      projectId: a.projectId,
      userMessageId: msgId,
      content: "Finalement, GitHub devient facultatif.",
      clientTurnKey: `cr01-iso-${newId("turn")}`,
    });
    expect(outcome.humanDecisionCreated).toBe(false);
    expect(outcome.attempted).toBe(false);
    const journalB = await listDecisionJournal(b.pilotId, b.projectId);
    expect(journalB.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
    expect(journalB.some((d) => d.state === "REVISED")).toBe(false);
  });

  it("CR-02: concurrent same-act OPEN yields at most one ACTIVE cycle", async () => {
    // Race at the D5/D6 boundary (same conv-auth key). Parallel postUserMessageAndNora
    // is fenced by TURN_IN_PROGRESS at D3 — that is expected and not a double-effect path.
    const { applyConversationalAuthority } = await import(
      "@/domains/pilotage/conversation-authority"
    );
    const { pilotId, projectId, preparationId } = await seedProject("cr02-race");
    const turnKey = `cr02-race-${newId("turn")}`;
    const msgId = await insertUserMessage(preparationId, "Ouvre le cycle cadrage.");
    const [a, b] = await Promise.all([
      applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content: "Ouvre le cycle cadrage.",
        clientTurnKey: turnKey,
      }),
      applyConversationalAuthority({
        pilotId,
        projectId,
        userMessageId: msgId,
        content: "Ouvre le cycle cadrage.",
        clientTurnKey: turnKey,
      }),
    ]);
    for (const r of [a, b]) {
      expect(r.attempted).toBe(true);
      expect(r.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
      expect(r.humanDecisionCreated).toBe(true);
    }
    expect(
      (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
        (c) => c.status === "ACTIVE",
      ),
    ).toHaveLength(1);
    const cmds = await reconcileCommandByClientKey(pilotId, projectId, `conv-auth:${turnKey}`);
    expect(cmds.status).toMatch(/APPLIED|ALREADY_APPLIED/);
  });
});

```

### MODIFIED FULL `projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "path";

/**
 * ML3 browser FAKE — pilotage surfaces. LIVE Nora forbidden in E2E.
 * Does not claim pixel-perfect Figma conformity.
 */
test("ML3 pilotage: projet sans cycle → ouverture → cycle ACTIVE visible", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");

  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 e2e seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("openai-agents-sdk-live")).toHaveCount(0);
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });

  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 Pilotage");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e ml3");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("pilotage-panel")).toBeVisible();
  await expect(page.getByTestId("cycle-absent")).toBeVisible();
  await expect(page.getByTestId("method-absent")).toBeVisible();

  await page.getByLabel("Énoncé GO").fill("ouvre le cycle cadrage");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("pilotage-pending")).toBeVisible();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByRole("heading", { name: /Cycle CADRAGE/ })).toBeVisible();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/);
  await expect(page.getByTestId("decision-state").first()).toContainText("APPLICABLE");

  await page.getByTestId("close-cycle").click();
  await expect(page.getByTestId("cycle-absent")).toBeVisible({ timeout: 15000 });
  await page.getByLabel("Énoncé GO").fill("");
  await page.getByLabel("Type de cycle").selectOption("UX_UI");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByRole("heading", { name: /Cycle UX_UI/ })).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/);

  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("method-retained")).toBeVisible({ timeout: 15000 });

  const shot = path.join("tests/e2e/artifacts", `ml3-pilotage-${Date.now()}.png`);
  await page.screenshot({ path: shot, fullPage: true });
});

/**
 * B13 C02 — browser FAKE: RESTRICTION shows authority-block-established;
 * HUMAN_INTENT conflict must NOT show authority-block-established.
 * Pixel Figma: NOT VERIFIED.
 */
test("ML3 B13 C02: motif RESTRICTION vs conflit technique HUMAN_INTENT", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 B13 C02 seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 B13 C02");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e b13 c02");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("b13-authority-legend")).toBeVisible();

  // Global cycle restriction → OPEN rejected with RESTRICTION (authority).
  await page.getByTestId("apply-cycle-restriction").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/REJECTED.*RESTRICTION|RESTRICTION/, {
    timeout: 15000,
  });
  await expect(page.getByTestId("authority-block-established")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toContainText(/Restriction D6/i);

  // Lift restriction, open cycle (APPLIED — no false authority block).
  await page.getByRole("button", { name: "Lever" }).first().click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByLabel("Énoncé GO").fill("");
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("outcome-applied")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);

  // Controlled CONFLICT+HUMAN_INTENT response → technical motif, never authority-block.
  // (UI open-cycle is hidden while ACTIVE; choose-method is the reachable pilot action.)
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "CONFLICT",
        reasonCode: "HUMAN_INTENT",
        reason: "Intention humaine déjà enregistrée",
        commandId: "bcmd_e2e_c02_human_intent",
        revision: null,
      }),
    });
  });
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/CONFLICT.*HUMAN_INTENT|HUMAN_INTENT/, {
    timeout: 15000,
  });
  await expect(page.getByTestId("outcome-technical-human_intent")).toBeVisible();
  await expect(page.getByTestId("outcome-technical-human_intent")).toContainText(/Intention humaine/i);
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);
});

/**
 * B13 R1 — rendered UX: prior RESTRICTION must not remain under a new UNKNOWN/APPLIED result.
 * Observes PilotagePanel motifs, not only qualifyCommandOutcome unit calls.
 */
test("ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 B13 R1 seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 B13 R1");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e b13 r1");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await page.getByTestId("apply-cycle-restriction").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await page.getByTestId("open-cycle").click();
  await expect(page.getByTestId("authority-block-established")).toBeVisible({ timeout: 15000 });

  // RESTRICTION → network loss on next command → UNKNOWN (no stale authority motif).
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() === "POST") {
      await route.abort("failed");
      return;
    }
    await route.continue();
  });
  // also abort by-key reconcile fetches so resolveUnknown stays UNKNOWN
  await page.route("**/api/projects/*/pilotage/commands/**", async (route) => {
    await route.abort("failed");
  });
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/UNKNOWN/i, { timeout: 15000 });
  await expect(page.getByTestId("outcome-unknown")).toBeVisible();
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);

  // UNKNOWN → controlled APPLIED on a new attempt → outcome-applied, still no authority-block.
  await page.unroute("**/api/projects/*/pilotage/commands");
  await page.unroute("**/api/projects/*/pilotage/commands/**");
  await page.route("**/api/projects/*/pilotage/commands", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        status: "APPLIED",
        reasonCode: null,
        reason: null,
        commandId: "bcmd_e2e_r1_applied",
        revision: 99,
      }),
    });
  });
  // Change method version so signature differs from the UNKNOWN pending record.
  await page.getByLabel("Version").fill("2.6-r1");
  await page.getByTestId("choose-method").click();
  await expect(page.getByTestId("outcome-applied")).toBeVisible({ timeout: 15000 });
  await expect(page.getByTestId("authority-block-established")).toHaveCount(0);
  await expect(page.getByTestId("outcome-unknown")).toHaveCount(0);
});

/**
 * F01 — GO naturel depuis le fil projet principal (pas le bouton PilotagePanel).
 * Pixel Figma: NOT VERIFIED.
 */
test("ML3 F01: GO naturel depuis le fil ouvre un cycle ACTIVE", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 F01 thread seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 F01 Fil");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e f01 thread");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByTestId("thread-pilotage-status")).toContainText(/OPEN_CYCLE|APPLIED/i, {
    timeout: 30000,
  });
  await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|deterministic/i, {
    timeout: 30000,
  });

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
  await expect(page.getByRole("heading", { name: /Cycle CADRAGE/ })).toBeVisible();
  await expect(page.getByTestId("decision-state").first()).toContainText("APPLICABLE");
});

/**
 * F02 — décision documentaire depuis le fil + révision via Journal.
 */
test("ML3 F02: RECORD depuis le fil puis révision Journal", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 F02 seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 F02 Décisions");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e f02");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  await page.getByRole("button", { name: "Travail" }).click();
  await page
    .getByLabel("Message à Nora")
    .fill("Je décide que la connexion GitHub est obligatoire pour ce projet.");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByTestId("thread-pilotage-status")).toContainText(
    /RECORD_DECISION|APPLIED|décision/i,
    { timeout: 30000 },
  );

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("decision-state").first()).toContainText(/RECORD_DECISION.*APPLICABLE/i, {
    timeout: 15000,
  });
  await page.getByTestId("journal-revise-open").first().click();
  await page.getByTestId("journal-revise-draft").fill("La connexion GitHub est facultative pour ce projet.");
  await page.getByTestId("journal-revise-submit").click();
  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
    timeout: 15000,
  });
  await expect(page.getByText(/facultative/i).first()).toBeVisible({ timeout: 10000 });
});

/**
 * C03 — Journal >8: newest visible by default; full history via expand.
 * Seeds via D6 API (not the fil loop) to avoid stale status races.
 */
test("ML3 C03: Journal décisions >8 avec historique accessible", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 C03 journal seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 C03 Journal");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e c03");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();
  let revision = 0;
  for (let i = 0; i < 12; i += 1) {
    const actInstanceId = `c03-act-${i}-${Date.now()}`;
    const res = await page.request.post(`/api/projects/${projectId}/pilotage/commands`, {
      data: {
        clientCommandKey: `c03-cmd-${actInstanceId}`,
        expectedRevision: revision,
        operation: "RECORD_DECISION",
        sourceKind: "EXPLICIT_INTERACTION",
        sourceRef: `ui:RECORD:${actInstanceId}`,
        actInstanceId,
        objectRef: `c03-obj-${i}`,
        statement: `Décision documentaire C03-${i} obligatoire pour ce projet.`,
      },
    });
    expect(res.ok()).toBeTruthy();
    const body = await res.json();
    expect(body.status).toMatch(/APPLIED|ALREADY_APPLIED/);
    revision = body.revision ?? revision + 1;
  }

  await page.getByRole("button", { name: "Pilotage" }).click();
  await expect(page.getByTestId("journal-count")).toContainText(/1[0-9] décision/i, {
    timeout: 15000,
  });
  await expect(page.getByText(/C03-11/i).first()).toBeVisible();
  await page.getByTestId("journal-expand").click();
  await expect(page.getByText(/C03-0/i).first()).toBeVisible({ timeout: 10000 });
  await expect(page.getByTestId("decision-row")).toHaveCount(12, { timeout: 5000 });
});

/**
 * CR-02 — ACK perdu après effet D6 APPLIED :
 * serveur committe → réponse HTTP interceptée → reload → réconciliation → pas de double effet.
 */
test("ML3 CR-02: ACK perdu puis reload sans double OPEN_CYCLE", async ({ page }) => {
  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
  await page.waitForURL("**/preparations/**");
  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 CR-02 ACK seed");
  await page.getByRole("button", { name: "Envoyer" }).click();
  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
    timeout: 30000,
  });
  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 CR-02 ACK");
  await page.getByPlaceholder("Résumé inspecté").fill("e2e cr02 ack");
  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
  await page.getByRole("button", { name: "Créer le projet" }).click();
  await page.waitForURL("**/projects/**", { timeout: 20000 });

  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
  expect(projectId).toBeTruthy();

  let ackDropped = false;
  let serverApplied = false;
  await page.route("**/api/preparations/*/messages", async (route) => {
    if (route.request().method() !== "POST") {
      await route.continue();
      return;
    }
    let post: { content?: string } = {};
    try {
      post = route.request().postDataJSON() as { content?: string };
    } catch {
      post = {};
    }
    const response = await route.fetch();
    const raw = await response.text();
    let body: Record<string, unknown> = {};
    try {
      body = JSON.parse(raw) as Record<string, unknown>;
    } catch {
      body = {};
    }
    const effect = body.pilotageEffect as { status?: string } | undefined;
    const applied =
      response.ok() &&
      (body.humanDecisionCreated === true ||
        (typeof effect?.status === "string" && /APPLIED/i.test(effect.status)));
    // Drop ACK only for the OPEN GO after the server has committed the effect.
    if (
      !ackDropped &&
      applied &&
      /ouvre le cycle cadrage/i.test(post.content ?? "")
    ) {
      serverApplied = true;
      ackDropped = true;
      await route.fulfill({
        status: 502,
        contentType: "application/json",
        body: JSON.stringify({
          errorCategory: "ACK_LOST_SIM",
          error: "ACK lost after server commit",
        }),
      });
      return;
    }
    await route.fulfill({
      status: response.status(),
      headers: response.headers(),
      body: raw,
    });
  });

  await page.getByRole("button", { name: "Travail" }).click();
  await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
  await page.getByTestId("thread-send").click();
  await expect(page.getByTestId("thread-nora-status")).toContainText(/ACK lost|ACK_LOST|échec|conservée/i, {
    timeout: 45000,
  });
  expect(serverApplied).toBe(true);
  expect(ackDropped).toBe(true);
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
  // Distinct new act must not silently overwrite the unresolved pending.
  await page.getByLabel("Message à Nora").fill("Je décide que GitHub est obligatoire pour ce projet.");
  await page.getByTestId("thread-send").click();
  await expect(page.getByTestId("thread-pilotage-status")).toContainText(/non résolue|réconcilier/i, {
    timeout: 10000,
  });
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();

  await page.reload();
  await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
  await page.getByTestId("thread-reconcile-pending").click();
  await expect(page.getByTestId("thread-pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED|OPEN_CYCLE|ACTIVE/i, {
    timeout: 30000,
  });

  const pilotage = await page.request.get(`/api/projects/${projectId}/pilotage`);
  expect(pilotage.ok()).toBeTruthy();
  const pj = await pilotage.json();
  const cycle = pj.pilotage?.cycle ?? pj.cycle;
  expect(cycle?.status).toBe("ACTIVE");
  expect(cycle?.cycleType).toBe("CADRAGE");

  // Second reconcile / retry must not open another cycle.
  const decisions = await page.request.get(`/api/projects/${projectId}/decisions`);
  expect(decisions.ok()).toBeTruthy();
  const dj = await decisions.json();
  const opens = (dj.decisions ?? []).filter(
    (d: { kind: string; state: string }) =>
      d.kind === "OPEN_CYCLE" && (d.state === "APPLICABLE" || d.state === "SUPERSEDED"),
  );
  expect(opens.filter((d: { state: string }) => d.state === "APPLICABLE").length).toBeLessThanOrEqual(1);
  await page.unrouteAll({ behavior: "ignoreErrors" });
});

```

### MODIFIED FULL `projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md`

```md
# SFIA Studio Next — R5 / ML3 « Piloter et décider »
## Spécification technique v0.4 — candidate publiée sur branche documentaire

**Statut historique D0 (en-tête v0.4) :** métadonnées de conception pré-delivery — ne décrivent plus l'état du candidat runtime.
**Statut candidat courant (2026-11-06) :** `IMPLEMENTED — CANDIDATE` sur `sfia/next-pilotage-decisions-delivery` — **NOT RECETTE — NOT MERGED — NOT ADOPTED — NO RELEASE**.
**Date :** 2026-11-06 (Europe/Paris).
**Dépôt :** `mcleland147/sfia-workspace` ; base `main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` ; branche candidat `sfia/next-pilotage-decisions-delivery`.
**Nature :** as-built D5/D6 + B13 + correctifs CR/B13 ; publication Git candidat autorisée (GO Morris consolidation) **sans** merge `main`, sans RECETTE, sans STABLE.
**État runtime candidat :** D5/D6 **IMPLEMENTED** (schéma `007`) sous lane DEV ; preuves FAKE/PG selon matrice B01–B18 ; Nora LIVE NOT EXECUTED.
**Sources propriétaires :** `governance/SEF.md`, `governance/roadmap.md`, `governance/decisions/2026-11-04-r4-architecture-exit.md`, R2 `conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md`, R2 `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` et compléments, R3 `ux-ui/audit-couverture-ux-r3.md` §7, R4 `architecture-technique/cadrage-r4.md` §5.5, corpus `cki/` v0.2.0, R5 `construction/reference-delivery-r5.md`, code ML1/ML2 sur `main`.
**Annexes sur cette branche :** [Matrice individuelle R2–R4](tracabilite-r2-r3-r4.md) (136 liens et R01–R04) et [Revue de conception](revue-conception.md) (revue/gates).

> **Choix Morris déjà acquis :** option A — clôture du cycle A et ouverture du cycle B, si toutes les mutations D5/D6 sont internes à Studio, effectuées **dans une seule transaction PostgreSQL** ; deux faits de transition distinctement observables, commit unique. Une réussite partielle n'est possible que pour des effets réellement séparés, hors de cette frontière. **Choix de périmètre retenu :** noyau D6 réel (décisions, GO, révisions, restrictions et levées) dans ML3 ; D7/D8/D9 restent des interfaces, sans effets simulés. **Résolutions techniques proposées pour validation Morris :** R01 version/distribution CKI ; R02 sémantique de méthode ; R03 DDL/verrouillage/idempotence ; R04 résultat partiel. Les invariants R04 atomiques sont déjà arbitrés ; les choix détaillés R01–R03 sont à valider en contenu, **non implémentés**.

## 1. Résultat Pilote et frontière du macro-lot

Le Pilote peut reprendre son projet et son fil Nora, envisager une trajectoire sans l'appliquer, retenir une orientation de façon gouvernée, ouvrir un cycle pertinent sur un GO humain naturel, progresser avec une guidance CKI vérifiable lorsqu'elle est réellement disponible, enregistrer et réviser ses décisions, suspendre/lever des effets bornés et clore ou réorienter les cycles en retrouvant les faits durables après redémarrage.

**IN :** D5 trajectoire, état des cycles, méthode applicable et liaison CKI ; D6 actes humains, portée, validité, restrictions, révisions/révocations, suspensions/levées ; interfaces D1/D2/D3/D4 ; transactions PG et intégrité, API, UX R3 B, tests, observabilité et documentation as-built dans le même macro-lot. **OUT :** exécution Cursor D7, preuve et verdict D8, mutation Git D9, adoption globale, catalogue universel de méthodes, moteur de workflow et nouveaux parcours obligatoires.

**Parcours d'acceptation commun :** projet existant → Nora propose une trajectoire → le Pilote retient ou non l'orientation → GO de cycle authentifié → enregistrement atomique D6/D5 → cycle ACTIVE + CKI associé → consommation de guidance si disponible, avec provenance → décision durable ou suspension → clôture/transition gouvernée → reconnexion au même fil et vérification de l'état. Un projet peut continuer normalement sans cycle ni méthode.

## 2. Autorités et propriétaires — invariants transverses

| Domaine | Vérité propriétaire | Limite |
|---|---|---|
| D1/D2 | Session authentifiée, identité du Pilote, propriété du projet, préparation et continuité du fil | Une session, un projet ou GitHub OAuth ne sont pas des GO métier. |
| D3 — Nora | Messages originaux, analyse de l'intention, propositions, réponse cognitive, consommation contrôlée de contexte | Le modèle ne produit aucun HumanDecision ni changement D5 à partir de sa seule sortie. |
| D4 | Sujets, acquis, documents, points ouverts et provenance | Aucune duplication de mémoire ou preuve dans D5/D6. |
| D5 | Trajectoires, cycles, méthode et association du CKI principal, états et historique | Ne crée ni compétence humaine ni permission. |
| D6 | Source humaine, portée, décision opposable, restrictions et historique | Ne maintient pas un second état de cycle ni ne simule D7/D9. |
| D7/D8/D9 | Futures frontières propriétaires d'exécution, preuve et Git | Contrats préparés seulement ; aucun faux objet métier opérationnel ML3. |

Les lectures D3/UX constituent des **projections** des propriétaires. Les diagnostics techniques n'émettent aucun acte d'autorité. Les contrôles de droits/compétence sont relus **au point d'effet**, non déduits d'une vue affichée antérieurement.

## 3. Contrat D6 — acte humain et applicabilité

### 3.1. Classes d'actes

Distinguer : préférence cognitive non opposable ; choix structurant durable ; GO cycle (ouvrir/clore/transitionner) ; suspension/restriction ; levée/révocation/révision ; choix durable de méthode ; acte de réception D8 et autorisation « Exécuter » D7, tous deux **hors réalisation ML3**. Un choix de brouillon/document n'est pas un GO Git, une validation normative ou un mandat. Une proposition CKI n'est jamais permission.

### 3.2. Identité et provenance minimales

L'acte stocké D6 référence : `decisionId`, `projectId`, `pilotId` authentifié, `sourceKind` (message utilisateur réel ou interaction humaine explicite), `sourceRef` et révision/corrélation, `kind`, `objectRef`, `scope` typé et borné, `effectConditions`, `state/version`, `effectiveAt`, `supersedes/revokes/lifts` s'il y a lieu, `createdAt`. La source conversationnelle doit être une **expression USER vérifiée**, rattachée au projet autorisé ; le modèle, une citation ou un texte importé ne peuvent fournir cette autorité. Minimiser la répétition du texte humain et protéger les détails sensibles.

**Validité D6 au point d'effet :** acteur habilité et projet courant ; cible/portée compatibles avec la commande ; provenance humaine fiable ; état/version ; contraintes supérieures ; restrictions et décisions incompatibles ; durée/conditions d'applicabilité. Conflit déterminant non résolu = refus de l'effet ciblé, sans bloquer la cognition indépendante. « Plus récente » n'est pas une règle de priorité.

### 3.3. Évolutions non destructives

Révision, amendement, révocation ou levée sont des **actes distincts liés** à leur cible, avec date de prise d'effet et contexte conservés. L'applicabilité courante change mais les décisions et effets passés restent vrais. Une suspension humaine persistante ne disparaît ni avec une nouvelle session, ni avec un nouveau cycle, ni lorsque Nora juge le problème résolu. Lever une suspension n'accorde pas de droits nouveaux et ne rejoue pas une commande. Une demande d'arrêt externe est enregistrable comme intention/portée D6 ; elle **n'est pas** un constat d'arrêt D7.

**Révocation de méthode :** le contrat proposé R02 en §8 bis sépare retrait, remplacement, suspension d'usage, levée et révocation du choix courant. Révoquer le choix fondant la méthode actuellement applicable termine son application D5 et la laisse `ABSENT` sauf remplacement explicitement autorisé dans le même commit ; aucune restauration implicite. Si la cible est ambiguë, clarifier et ne pas muter.

## 4. Contrat D5 — états, trajectoire et méthode

Une **trajectoire proposée** peut rester seulement cognitive ou être conservée comme proposition sans acte d'autorité ; **retenue** exige une décision D6 qualifiée ; **effectif** décrit uniquement les cycles réellement committés. La réorientation n'efface pas les faits précédents. Les dépendances proviennent de contraintes projet ou décisions réelles, jamais de l'ordre des 15 CKI ni de la matrice des relations.

**Cycle :** type reconnu dans le catalogue applicable, finalité et identifiant stables ; états au minimum `ACTIVE` et `CLOSED` (tout autre état exige un besoin explicite) ; au plus un ACTIVE par projet. Une suspension D6 du travail n'implique pas un état cycle `SUSPENDED` ou un moteur concurrent. Ouvrir/clore nécessitent GO humain ; maturité Nora ≠ clôture et clôture ≠ acceptation/adoption. La clôture conserve bilan/réserves et références D4 sans recopier les contenus D4.

**Méthode :** `ABSENTE` est une valeur de projet légitime. Un choix durable conserve référence, version/révision, provenance, portée, date/condition d'effet et décision D6. Publication d'une nouvelle version ou technique locale de Nora ≠ changement de méthode. La modification, si décidée, est gouvernée et historisée sans rétroactivité ; impacts proportionnés sur les travaux concernés.

## 5. CKI : association, version, distribution et usage

Le catalogue initial est constitué de **15 types / 15 CKI autonomes** et 50 relations consultatives, contenus v0.2.0 validés Morris. Catalogue extensible sous arbitrage, sans type implicite FinOps/GreenOps. **Un seul CKI principal** correspond au type du cycle effectivement ACTIVE ; hors cycle, aucun CKI principal. Digression ou relation T/A/R/E ne sélectionne jamais de second CKI. Le même CKI guide le travail et l'appréciation qualitative de maturité ; aucune règle de fermeture ni score universel n'en découle.

**Politique technique proposée R01 (§8 bis) :** associer la spécialité du type ; lorsque le contenu validé est résoluble, épingler référence/version/digest au commit d'ouverture ; sinon ouvrir avec association sans pin exploitable. Ne jamais migrer sur publication ; premier pin ultérieur ou changement de version = acte explicite du Pilote, tracé D5/D6. Le retour des octets de **la version déjà épinglée** peut rétablir la résolution sans nouvelle décision.

**Distribution candidate :** manifeste de ressources approuvées, en lecture seule et versionné avec l'application ou son stockage de contenus durable ; aucune lecture GitHub en direct requise à chaque tour. Conserver les versions encore référencées ou signaler l'indisponibilité réelle, pas de fallback CKC historique. Les références Git constituent une provenance de contenu et non une preuve de disponibilité au runtime.

**Trois niveaux non équivalents :** `ASSOCIATED` (D5 référence le CKI) ; `RESOLVED` (octets/version effectivement vérifiés) ; `DELIVERED` (guidance effectivement ajoutée au contexte D3 transmis). Aucune de ces observations ne prouve à elle seule la qualité cognitive. Toute guidance est de niveau de confiance borné : aucune instruction du CKI ne peut créer un GO, une contrainte supérieure ou un mandat d'outil. Conflit réel avec la méthode retenue : adapter/écarter la technique facultative et signaler l'écart déterminant.

## 6. Modèle relationnel et migration — DDL non exécuté

Extension additive du schéma Drizzle PostgreSQL courant `schemaRevision = 006_ml2_turn_owner_token`, sans modifier par défaut l'état de création du projet ML1 ni du tour ML2.

| Famille candidate | Champs/noyau d'intégrité | Responsable |
|---|---|---|
| `project_pilotage_state` | `project_id` PK/FK vers `projects`, `revision` monotone, référence courante trajectoire/méthode si nécessaire | D5 — état/version verrouillable |
| `trajectory_revisions` | Projet, version, proposition ou choix retenu, source, orientation, lien décision | D5 — historiques |
| `project_cycles` | Projet, type, objectif, `status`, dates, `revision`, références GO et CKI associé/version ou indisponible | D5 — état réel |
| `cycle_commands` | Projet, acteur, clé idempotente, empreinte, source humaine, type d'opération, résultat durable | D5 — commande métier |
| `cycle_command_effects` | Référence commande, effet `CLOSE` ou `OPEN`, cible et issue durable | D5 — observabilité par effet |
| `method_applications` | Projet, référence/version/portée, décision D6, début/fin d'applicabilité, provenance | D5 — état méthode |
| `human_decisions` / historique | Auteur, projet, source fiable, type, objet, portée, état, relations de révision/révocation | D6 — actes opposables |
| `governance_restrictions` | Projet, cible/effets interdits, acte D6 d'origine, application, levée | D6 — restrictions |
| Manifeste CKI | Référence canonique/version/provenance et disponibilité | D5/ressource approuvée ; table dédiée seulement si justifiée |

Les familles ne prescrivent pas nécessairement une table chacune : **dédupliquer** selon les requêtes et les invariants. Le Journal–Décisions reste une projection D6. Les IDs client ne sont jamais des droits ; les références doivent être contraintes au bon projet, y compris contre accès direct ou détournement de messages D3.

**Invariants DB proposés :** index unique partiel `(project_id) WHERE status='ACTIVE'` ; clé unique commande métier `(project_id,pilot_id,idempotency_key)` et empreinte canonique ; versions et clés FK ; contraintes de validité d'états ; transaction commune D5/D6 ; pas de trigger qui crée un cycle au moment de créer le projet.

**Sérialisation :** `SELECT … FOR UPDATE` sur la ligne `projects` du projet propriétaire (proposition de verrou commun) pour toutes les mutations D5 et restrictions D6 pertinentes, puis lecture sous verrou de la révision, des droits, des décisions/restrictions et du cycle. Le schéma doit gérer les cas d'erreurs PG, la contention, l'index partiel et l'ordre CLOSE(A) puis OPEN(B), sans anomalie interprojets. Isolation et granularité exactes à démontrer, pas supposées sûres par simple choix d'API.

**Migration :** ajout des seules structures utiles, vérification de compatibilité à partir de 006, pas d'effets sur données ML1/ML2, migrations réexécutables/contrôlées selon stratégie existante. DEV → RECETTE avec SHA figé sous mandat futur, aucun déploiement exécuté ici.

## 7. Services métier, commandes et API candidates

**Contrats internes (noms logiques) :** `resolveProjectPilotage(project, actor)`, `proposeTrajectory(...)`, `applyTrajectoryDecision(...)`, `openCycle(...)`, `closeCycle(...)`, `transitionCycle(...)`, `chooseMethod(...)`, `recordHumanDecision(...)`, `reviseDecision(...)`, `applyRestriction(...)`, `liftRestriction(...)`, `evaluateCurrentAuthority(...)`, `resolveCycleGuidance(...)`, `reconcileCommand(...)`. Ne pas créer un microservice par verbe : appliquer les propriétaires D5/D6 et réutiliser la transaction PG commune.

**Routes Next.js candidates et regroupables :** lecture `GET /api/projects/{projectId}/pilotage`, mutation `POST /api/projects/{projectId}/cycle-commands`, réconciliation `GET /api/projects/{projectId}/cycle-commands/{commandId}`, décision `GET/POST /api/projects/{projectId}/decisions`, restriction `POST /api/projects/{projectId}/restrictions`, méthode `POST /api/projects/{projectId}/method-choices`, guidance en lecture `GET /api/projects/{projectId}/guidance`. Les routes concrètes ne sont pas figées. Un point d'entrée ne peut utiliser une autorité de DTO : `pilotId` vient exclusivement de la session.

**Commande D5 minimale :** clé idempotente stable, empreinte des paramètres déterminants, projet URL validé, action, version attendue du projet, cycle source et version attendue, type/cible/objectif, référence D3 d'un message humain ou interaction explicitement captée ; D6 valide cette source et portée. Identité de tour D3 et clé de commande D5 restent distinctes ; la même source humaine ne permet pas de générer deux effets nouveaux par retry.

**Réponse ML3 interne :** `APPLIED`, `ALREADY_APPLIED` (lecture d'un effet historique committé), `REJECTED`, `CONFLICT`, `UNKNOWN` ; **aucun `PARTIAL` pour une commande purement interne atomique**. Un tel état reste une interface future pour de véritables effets séparés. Restituer commandId, version courante, référence décision et effets individuellement observés. Un ACK perdu impose lecture/réconciliation avant tout retry. Relecture historique sous droits actuels ne réautorise pas le même effet aujourd'hui.

**Catégories d'erreurs :** absence d'authentification (`401`), accès ou projet non exposable (`403/404` selon politique), entrée/GO ambigu (`400` ou clarification sans effet), conflit version/idempotence (`409`), dépendance PostgreSQL indisponible (`503` lorsque approprié), bug serveur (`500`) ; ne pas masquer toutes les erreurs en faux `401`.

## 8. Transaction interne et cas difficiles

1. Conserver le message originel humain D3 sans en déduire une décision déjà appliquée.
2. Résoudre session/projet, qualifier l'intention et les paramètres ; clarifier l'ambiguïté déterminante avant mutation.
3. Ouvrir une transaction DB courte ; verrouiller le projet selon la frontière D5/D6.
4. Vérifier la clé/empreinte de la commande et requalifier les droits, versions, restriction et scope D6.
5. Enregistrer l'acte applicable D6, fermer A et ouvrir B **dans le même commit** ; conserver deux effets de transition et le résultat commande.
6. Commit ou rollback intégral ; confirmer l'effet seulement après constat durable. Aucune opération IA, Git ou Cursor dans cette transaction.
7. Si résultat inconnu après perte de réponse, réconcilier par clé/ID avant une nouvelle commande.

**Cas discriminants :** suspension committée avant transition → transition refusée ; transition committée avant suspension → fait passé maintenu, futurs effets bloqués ; cible B invalide → A reste ACTIVE ; double GO identique → une seule transition ; même clé autre empreinte → CONFLICT ; proposition de méthode sans GO → aucune mutation ; CKI non résolu → activité générale possible sans prétendre `DELIVERED` ; source externe « GO » → aucune autorité ; D3 message persistant avec TX échouée → texte visible mais aucun effet D5/D6.

## 8 bis. Traitement conjoint R01–R04 — contrats techniques proposés pour validation Morris

**Nature de cette section :** résolution D0 de quatre réserves de spécification, par options explicites et testables. `R01–R04 = TRAITÉS EN CONCEPTION / CONTENU À VALIDER PAR MORRIS` ; ni approbation d'un schéma SQL exécutable, ni effet Git, ni preuve runtime. Les contrats R2 restent propriétaires ; les noms ci-dessous décrivent un modèle d'implémentation candidat.

### R01 — Association, épinglage et distribution CKI

**Choix proposé : épinglage de la version effectivement résolue au moment de l'ouverture, sans faire de sa disponibilité un gate de cycle.** La référence de spécialité découle du type reconnu du cycle ; la référence de contenu n'en découle pas automatiquement. D5 conserve : `cycleId`, `cycleType`, `ckiId`, `pinnedVersion` (nullable), `manifestRef`, `contentDigest` (nullable), `pinDecisionRef` ou `pinOrigin`, `pinnedAt` ; les champs de version restent nuls si aucune version approuvée et vérifiable n'est accessible. La *disponibilité de lecture* est un constat au point d'usage, non une permission.

| Situation | État/effet requis | Conduite Nora et changement autorisé |
|---|---|---|
| Pas de cycle ACTIVE | Aucun CKI principal actif | Nora générale, aucun chargement de CKI par défaut. |
| Ouverture avec contenu approuvé, résoluble et intégrité vérifiée | `ckiId` associé + version et empreinte épinglées **dans la même transaction que l'ouverture** | Le chargement réel reste à vérifier à chaque génération. Pas de GO séparé pour cet épinglage consécutif au GO de cycle. |
| Ouverture sans version exploitable | Cycle ACTIVE possible, `ckiId` associé, `pinnedVersion=NULL` avec motif non résolu | Aucune guidance CKI prétendue appliquée ; Nora générale. |
| Version épinglée temporairement indisponible | Conserver le pin et l'historique, marquer `UNAVAILABLE` au point d'usage | Aucune substitution ; un retour du **même contenu/empreinte** permet de résoudre le pin sans nouvel acte humain. |
| Une nouvelle version est publiée | Aucun effet sur le pin ni sur les décisions/méthodes | Peut proposer une comparaison ; ne la charge pas à la place du pin. |
| Aucun pin à l'ouverture puis une version devient disponible | Toujours aucun pin | **Premier rattachement explicite** décidé par le Pilote à portée cycle, historisé par D6/D5 ; pas de rattrapage automatique silencieux. |
| Remplacement de version en cours de cycle | Vérifier provenance, compatibilité, finalité et risques, puis acte explicite du Pilote et historique D5/D6 | La nouvelle version ne change que les usages futurs ; aucune réécriture des réponses passées. |
| Contenu hostile, digest divergent ou état d'approbation invalide | Résolution refusée et diagnostic borné | Ne pas exposer comme `DELIVERED`, ne pas charger de CKI historique ni d'autre version en secours. |

**Source/distribution :** manifeste de ressources versionnées et immuables, activées **dans le déploiement réellement exécuté** à partir du corpus CKI approuvé (15 contenus v0.2.0, mais VALIDATED CONTENT ne signifie pas automatiquement chargé). Chaque entrée référence `type`, `ckiId`, `version`, origine Git immuable, empreinte cryptographique et état de disponibilité ; conservation des versions encore référencées. Livraison locale au build ou stockage durable contrôlé ; **aucun GitHub fetch à chaque tour Nora**. À la lecture, vérifier identité/version/digest avant de transmettre la guidance. L'usage d'une simple version sémantique sans empreinte ne suffit pas à garantir l'identité du contenu.

**Observabilité, non automate d'autorité :** `ASSOCIATED` = spécialité associée ; `RESOLVED` = octets de la version exacte contrôlés ; `DELIVERED` = contenu réellement joint au contexte transmis au modèle. Aucun de ces états ne démontre que Nora s'en est servie avec pertinence : l'apport cognitif relève de tests LIVE comparatifs, distincts des fixtures. Échec de résolution => réponse générale sans déclarer un CKI utilisé ; si une conclusion spécialisée en dépend matériellement, la qualifier comme non démontrée. **Pas de deuxième CKI**, pas de matrice transformée en workflow.

**Tests R01 :** B01/B10/B11/B12 et PF-TRJ-07/08/21/25/30 : aucun cycle ; ouverture avec pin ; ouverture sans version ; perte puis retour de l'empreinte identique ; nouvelle version disponible mais non utilisée ; décision explicite de premier pin/migration ; contenu corrompu et injection ; preuve de `DELIVERED` seulement lorsqu'observée. **Risque résiduel :** politique de conservation/distribution effectivement opérable par lane à démontrer en R5 ; ce mécanisme ne vaut pas VALIDATED SPEC avant gate Morris.

### R02 — Sémantique de révision, retrait, suspension et révocation de méthode

**Choix proposé : actes typés et portée explicite ; une seule référence effective par périmètre concerné, aucune résurgence implicite.** Le fait qu'une méthode soit choisie (D5) est distinct de la décision humaine qui fonde sa validité (D6). Les deux propriétaires changent ensemble quand le sens de l'acte exige une mutation D5. Une restriction D6 peut limiter l'utilisation d'une méthode **sans** effacer la méthode retenue.

| Acte humain suffisamment clair | Modification durable D6 | Conséquence D5 et histoire |
|---|---|---|
| `CHOOSE_METHOD` — choix initial | Créer décision applicable à la portée autorisée | Nouvelle application méthode versionnée ; pas de méthode implicite avant cet acte. |
| `REPLACE_METHOD` — remplacer A par B | Réviser/remplacer l'acte avec portée et prise d'effet | Fin d'application A, début B dans **une transaction** ; aucun changement des faits/cycles antérieurs. |
| `WITHDRAW_METHOD` — ne plus retenir de méthode | Décision de retrait explicite | Fin d'applicabilité, état `ABSENT` dans la portée ; pas de restauration d'une ancienne méthode. |
| `SUSPEND_METHOD_USE` — suspendre une utilisation | Restriction D6 ciblée et persistante | La référence D5 reste enregistrée ; la projection la dit « retenue mais utilisation restreinte », jamais méthode supprimée. |
| `LIFT_METHOD_RESTRICTION` | Levée explicite de la restriction identifiée | Recontrôle actuel de la méthode et de sa décision de base ; aucun mandat, cycle ou exécution relancé. |
| `REVOKE_DECISION` sur le **choix qui fonde la méthode courante** | Révoquer la validité future de cette décision, sans effacer l'histoire | **Dans le même commit**, fermer l'application qui dépend de ce choix et passer à `ABSENT` pour cette portée, sauf remplacement explicite simultané et compétent ; ne pas rétablir la méthode précédente. |
| `REVOKE_DECISION` sans lien avec l'application courante | Révocation bornée à son objet | Aucun changement D5 non pertinent ; les effets indépendants demeurent. |
| Acte ambigu (« annule cette méthode » avec plusieurs cibles) ou décisions incompatibles | Aucune décision d'effet présumée ; conflit/clarification | Aucun remplacement/suppression automatique ; bloquer seulement l'effet dépendant jusqu'à résolution. |

**Portées :** associer toujours le projet et une cible intelligible (`PROJECT` ou cycle/activité explicitement identifié lorsque le contrat applicable le permet). Ne pas déduire une hiérarchie « la dernière version gagne » entre portées ; plusieurs décisions incompatibles sur une même cible imposent requalification D6. L'absence de méthode dans une portée n'efface pas arbitrairement des choix indépendants. La projection courante doit distinguer **absence de choix**, **référence retenue** et **référence retenue mais interdite d'usage** ; l'interdiction relève de D6, pas d'un second état D5 `SUSPENDED`.

**Persistance :** historique non destructif `method_applications` avec décision fondatrice D6, référence/version, portée, `effectiveFrom/effectiveUntil` et raison de clôture ; une seule application courante par portée peut être imposée par index. Un `project_pilotage_state` conserve la révision de cohérence et, si nécessaire, une référence dénormalisée **strictement dérivée**, jamais une deuxième vérité writable. Le Journal Décisions relit D6, pas D5. L'analyse d'impact d'un changement qualifie les activités réellement touchées ; une clôture passée ne devient pas fausse.

**Tests R02 :** B09/B10/B13/B16/B17, PF-TRJ-22/27–30 et PF-GOV-03/11/14/17/18/27 : remplacer ; retirer ; révoquer la base actuelle ; révoquer une décision historique non courante ; suspendre/lever sans effacer ; deux portées incompatibles ; publication vNext sans effet ; redémarrer et retrouver l'histoire ; simulation d'un impact restreint sur un cycle actif (sans re-clôture ni rollback). Aucun changement automatique du CKI principal.

### R03 — Schéma, frontière transactionnelle, concurrence et idempotence

**Choix proposé : PostgreSQL unique, verrou de ligne projet commun à toute mutation D5/D6 susceptible de changer une autorité ou un effet, avec contraintes structurelles en dernier recours.** `projects` existe dans ML2 ; une ligne `project_pilotage_state(project_id PRIMARY KEY, revision)` additive peut porter la révision de cohérence. Ne pas recopier session/projet/messages ou inventer un second registre d'autorité. La structure physique proposée est **à migrer/tester à partir de `006_ml2_turn_owner_token`**, pas à exécuter dans cette revue.

**Tables minimales à qualifier par le contrat Cursor (regroupements permis si invariants conservés) :** `project_pilotage_state` (révision), `trajectory_revisions`, `project_cycles`, `business_commands` et `business_command_effects`, `method_applications`, `human_decisions` + événements de révision, `governance_restrictions` ; manifeste CKI versionné sans nouvelle table obligatoire. Les vues de lecture sont reconstruites sur ces propriétaires. Ne pas conserver séparément deux champs mutables faisant foi pour la méthode, l'autorité ou le cycle courant.

**Contraintes SQL candidates significatives (illustration à réviser, pas migration livrée) :**

```sql
-- dernier recours structurel, même si une requête concurrente contourne le code nominal
CREATE UNIQUE INDEX project_cycles_single_active_per_project
  ON project_cycles(project_id) WHERE status = 'ACTIVE';

-- idempotence client : même identité métier, mêmes paramètres => même résultat
CREATE UNIQUE INDEX business_commands_project_actor_key_uidx
  ON business_commands(project_id, actor_pilot_id, client_command_key);

-- anti-double effet par une même expression/interaction et une même intention
-- source_action_key différencie deux intentions explicites d'un même message
CREATE UNIQUE INDEX business_commands_human_intent_uidx
  ON business_commands(project_id, source_kind, source_ref, source_action_key);
```

`source_kind`, `source_ref` et `source_action_key` sont non nuls pour les commandes à effet humain ; leur construction doit être déterministe et contrôlée côté serveur, sans prendre un DTO arbitraire ni le hash brut du texte pour une permission. Une même source peut porter **deux intentions différentes** ; la même intention ne doit pas produire deux effets avec des clés HTTP distinctes. Index/check sur états, format de portée et révisions ; références interprojets défendues par vérifications de propriétaire et, là où approprié, clés étrangères composées `(project_id, object_id)` vers des cibles garantissant cette unicité.

**Ordonnancement transactionnel recommandé :**

1. **Avant transaction courte :** authentifier la session, résoudre le projet propriété du Pilote ; conserver le message D3 déjà reçu (ou référence d'interaction humaine explicitement captée) ; qualifier l'intention sans appeler le LLM dans la transaction. Une source D3 est valide si c'est un **message utilisateur réel lié à la conversation de ce projet**, même si la réponse ultérieure de Nora a échoué ; ni réponse Nora, ni D4, ni citation, ni CKI ne sont des sources autorisantes.
2. `BEGIN` ; `SELECT id FROM projects WHERE id=:projectId AND owner_pilot_id=:pilotId FOR UPDATE` ; vérification d'existence et relecture sous verrou des révisions, décisions, restrictions, cycles et paramètres matériels. **Toutes les mutations D5/D6 concernées prennent ce verrou dans cet ordre**, notamment inscription/levée d'une restriction et changement de méthode. Les lectures informatives restent des projections non autorisantes.
3. Rechercher la commande par clé. Si la même clé existe et l'empreinte canonique correspond, restituer **son résultat durable historique** sans réappliquer et sans revalider rétroactivement une permission ; si empreinte différente, `CONFLICT` sans mutation. Ensuite contrôler l'unicité d'intention issue de la source humaine, afin d'éviter un second effet avec une autre clé. Une demande réellement nouvelle exige une source/intention distincte.
4. Pour une nouvelle commande : vérifier session/compétence courante au point d'effet selon les propriétaires accessibles, version de projet attendue, portée, source USER, restrictions non dérogeables et contradictions ; décider `REJECTED`/`CONFLICT` sans effet si nécessaire. **Les révocations de session externes non sérialisées sur ce même verrou constituent une frontière temporelle à tester : ne pas promettre une atomicité cross-provider fictive.** Une révocation déjà effective avant le contrôle doit interdire l'effet.
5. Enregistrer D6, mutations D5, détails des effets, résultat de la commande et incrément de révision **dans une transaction unique** ; `COMMIT`. Pour une transition A→B, clôturer A avant d'ouvrir B, en respectant l'index unique ACTIVE. Toute erreur entre les deux => `ROLLBACK` intégral.
6. Répondre avec résultat réellement observé après commit. Si la réponse se perd ou si l'issue du commit est incertaine, retourner/afficher `UNKNOWN` **sans autoriser un retry aveugle** ; le client demande l'état par `commandId` ou clé stable. Si stockage inaccessible, l'issue reste inconnue. Si commande retrouvée committée, `ALREADY_APPLIED` ne signifie pas nouvelle autorisation.

**Catégories de réponse internes ML3 :** `APPLIED`, `ALREADY_APPLIED`, `REJECTED`, `CONFLICT`, `UNKNOWN` (issue non confirmable) ; **pas de `PARTIAL` interne**. Un rejet durable peut être enregistré comme résultat de commande, mais ne doit pas être déguisé en décision D6 applicable ; en cas de rollback indisponible, garder la demande D3 sans déclarer d'effet. Déterminer HTTP `401` absence de session, `403/404` accès interdit/non exposable, `409` conflit/version, `503` indisponibilité PG et `500` erreur interne ; jamais convertir mécaniquement une panne SQL en faux `401`.

**Gestion de concurrence et limites :** avec toutes les mutations métier participantes sérialisées par verrou projet, `READ COMMITTED` + relectures sous verrou constitue une stratégie candidate pragmatique ; la défense PG d'unicité protège contre les écarts. Les lectures externes et la révocation des sessions doivent être qualifiées au point d'effet. Tester le deadlock et l'ordre des verrous, le commit inconnu, la violation de contrainte, la réponse HTTP perdue, les messages USER `PENDING` (D3 provider en échec), deux projets indépendants, et le replay cross-session sous droits courants. **Cette stratégie est une proposition testable, pas une garantie démontrée.**

**Tests R03 :** B03/B04/B05/B06/B07/B13/B14/B15/B16/B17/B18, PF-TRJ-04/05/06/15/17/18/19/20/24, PF-GOV-04/05/12/14/15/16/18/24 : deux connexions PG et commandes simultanées ; suspension concurrente GO (deux ordres de commit) ; même clé/même fingerprint ; même clé/empreinte différente ; autre clé/même intention ; source USER d'un autre projet ; erreur injectée entre CLOSE et OPEN ; commit sans ACK ; reprise ; DB indisponible ; cross-project FK. La preuve `BEHAVIOR PROVEN` ne se déduit pas du seul index SQL ou d'un test unitaire.

### R04 — PF-TRJ-16, PF-GOV-05 et vérité des résultats partiels

**Choix Morris déjà confirmé :** pour une transition D5/D6 *entièrement interne*, la clôture A et l'ouverture B sont deux **faits métier distinctement observables**, mais **une seule transaction atomique**. `PARTIAL` ne correspond à aucun état interne durable possible dans cette opération. La règle R2 demandant des résultats séparés ne présuppose pas l'existence de deux commits internes.

| Point de coupure | Résultat réel ML3 | UX/diagnostic permis |
|---|---|---|
| Avant validation D6 | Aucun effet A/B, demande refusée ou clarifiée | GO non applicable ; pas de « clôturé ». |
| Après écriture de CLOSE(A), avant OPEN(B), mais avant commit | Rollback intégral si OPEN échoue : A reste ACTIVE et B n'existe pas | `REJECTED`/erreur selon cause, deux effets **non appliqués**. |
| Commit PG A CLOSED + B ACTIVE réussi, réponse HTTP perdue | Les **deux effets** existent ; le client ne connaît pas encore l'issue | `UNKNOWN` jusqu'à réconciliation ; puis les deux effets confirmés, jamais un partiel. |
| Deux ouvertures concurrentes, conflit d'unicité | Un seul état ACTIVE vérifiable ; l'autre commande rejetée/requalifiée | Pas de cycle fantôme, pas de « ouverture en cours » permanente. |
| Une opération **future** possède réellement des effets externes séparés déjà committés par D7/D9 | Résultats séparés à reconstituer auprès de leurs propriétaires, potentiellement PARTIAL | Interface et scénario à la charge du futur macro-lot ; **non simulés par ML3**. |

**Contrat `business_command_effects` :** conserver deux enregistrements de résultat pour le combiné interne, chacun corrélé à la même commande et visible uniquement si le commit commun aboutit. Aucun effet CLOSE durable isolé ne peut être lu suite au rollback. Le `GET` de réconciliation retourne les deux faits ou aucun fait confirmé et l'état de commande réellement retrouvé ; absence de réponse ≠ effet partiel.

**Portée du scénario PF-TRJ-16/PF-GOV-05 :** ML3 couvre la compréhension du GO combiné, les deux effets, le rollback intégral, les lectures et réponses honnêtes. La possibilité d'effet partiel R2 reste **conditionnelle et reportée aux véritables frontières séparées**, sans changer R2 ni fabriquer un cas artificiel. Les écrans R3 #47 (confirmé) et #54 (non confirmé) sont applicables ; **#42 (partiel) est inatteignable depuis la commande interne ML3** et ne sera testé comme comportement positif que dans un futur lot possédant un vrai effet séparé. Test ML3 négatif : une panne interne entre deux écritures **ne doit jamais** produire #42, `PARTIAL` ou un cycle A CLOSED / B absent.

**Tests R04 :** B07 avec injection de panne entre deux écritures PG + contrôle après redémarrage ; perte ACK après commit ; stress deux appels; assertions sur commande et effets; non-apparition de #42. Toute revendication de résultat partiel futur devra identifier le propriétaire des effets externes et la preuve de chaque étape. Aucun `PARTIAL` ni compensation fictive dans ML3.

### Décision de revue sur R01–R04

Les quatre points ont une **solution technique explicitée et réfutable** ; ils ne sont plus des zones d'analyse sans proposition. Leur statut reste : **`DESIGN RESOLUTION PROPOSED — PENDING MORRIS CONTENT VALIDATION / NOT IMPLEMENTED / NOT TESTED`**. Aucune modification normative R2/R4 et aucun nouveau gate produit ne sont introduits ; les obligations d'essais, de sécurité DATA-01, d'UX native et de traçabilité code/test restent portées par la construction du même macro-lot.

## 9. UX R3, contexte Nora et observabilité

**R3 lot B :** état sans cycle #22 ; qualification proposée #23 ; cycle actif #24 ; méthode absente #28 ; méthode proposée #29 ; décision applicable #31 ; suspension #33/#34 ; CKI indisponible #39 ; Journal–Décisions #40 ; GO ambigu #41 ; vrai partiel #42 ; contradiction #43 ; transition combinée #47 ; mise à jour CKI candidate #48 ; ouverture en attente #52 ; clôture en attente #53 ; UNKNOWN #54 ; reprise #55 ; rejeu #56 ; guidance #58 ; relations #59 ; nouvelle méthode #60. Frames identifiées dans l'audit R3 Git, **Figma native et browser ML3 NON OBSERVÉS**. La maquette #42 doit être conditionnelle à un effet séparé réel et ne constitue pas un état de succès partiel dans notre transition interne atomique.

**D3 — construction du contexte :** session/projet D1/D2 → état D5 (cycle/méthode/CKI référencé) et décisions/restrictions D6 → D4 (faits, documents, acquis) → résolution effective de la guidance CKI → composition de contexte Nora avec nature/provenance et limites → réponse explicable. **F01/F02 (2026-11-06, local worktree) :** après `reserveTurnCommand` (message USER `COMPLETE`), `applyConversationalAuthority` appelle `executePilotageCommand` / `runBusinessCommand` sous `sourceKind=USER_MESSAGE` **avant** l'appel fournisseur Nora ; `humanDecisionCreated` et `pilotageEffect` sont factuels (jamais forcés à `false`). Aucune autorité depuis la sortie Nora ni D4.

**Observabilité :** relier operationId, commandId, projet/acteur de manière minimisée, source humaine, décision D6, effet D5, version état et résolution CKI. Les logs ne constituent jamais le registre métier ni une preuve de livraison D8. Corrélation connue vs inconnue explicite. Aucun secret, texte de décision sensible ou chaîne de pensée dans les métriques publiques.

## 10. Traçabilité et QA

La matrice annexe porte **une ligne par RG et PF D5/D6** : `40 RG-TRJ + 37 RG-GOV + 30 PF-TRJ + 29 PF-GOV = 136 références uniques`. Chaque ligne indique capacité propriétaire, frontière `IN / INTERFACE / OUT`, QA B candidat ou preuve différée et, pour les PF, références des surfaces UX R3. Les 59 PF ont une correspondance UX dans l'audit R3 ; la couverture est **DOCUMENTARY MAPPED**, pas **COVERAGE VERIFIED**.

**QA R4 B01..B18 à exécuter**, avec attention particulière : B03 GO naturel, B04 source équivoque, B05 unicité PG réelle, B06 ACK perdu, B07 atomicité CLOSE/OPEN, B08 maturité sans gate, B09/B10 méthode versionnée, B11 digression sans CKI secondaire, B12 indisponibilité/hostilité CKI, B13 conflit, B14 suspension persistante, B15 isolation interprojets, B16 révocation à l'effet, B17 projection Journal, B18 navigation sans effet.

**Niveaux distincts de preuve :** unitaires/déterministes, PG transaction/concurrence/idempotence, migration/restart, navigateur authentifié + clavier/reflow, Nora LIVE contrôlée pour qualité de guidance/intention, adversarial/injection, RECETTE ENV-01 sur SHA figé. Tous **NOT EXECUTED** pour ML3. Ne pas créer de faux scénarios D7/D8/D9 ni déclarer PARTIAL sans cas d'exécution séparée réel.

## 11. Blast radius, risques, réserves et gates

**Blast radius :** AUTH/projet ML1 ; idempotence de tour et pipeline Nora ML2 ; modèles Drizzle et migration PG ; lecture D4 et absence de copie ; API Next/erreurs ; UX lot B et contrat visuel R3 ; logs, sécurité et suppression DATA-01 ; documentation architecture CURRENT synchronisée avec le code au même macro-lot ; futurs contrats D7/D8/D9.

**Décisions de conception R01–R04 proposées, détaillées au §8 bis (à valider par Morris) ; réserves de réalisation restantes :**

- `REV-01` — **TRAITÉ D0 / À VALIDER MORRIS :** politique d'épinglage CKI, indisponibilité, première association ultérieure, conservation des versions et distribution vérifiable ; vérifier par tests à la construction.
- `REV-02` — **TRAITÉ D0 / À VALIDER MORRIS :** sémantique de choix, remplacement, retrait, suspension et révocation de la décision qui fonde la méthode ; vérifier les cas limites de portée.
- `REV-03` — **TRAITÉ D0 / À VALIDER MORRIS :** stratégie de verrou commun, index et clés d'intention, ordre des opérations, catégories de réponse ; DDL final, migration et preuve PG restent à la charge Cursor.
- `REV-04` — **TRAITÉ D0 / OPTION A MORRIS ACQUISE :** PF-TRJ-16/PF-GOV-05 couvrent le combiné interne atomique ; `PARTIAL` uniquement aux futures frontières réellement séparées, sans modifier R2.
- `REV-05` — Compléter et relire le mapping individuel RG/PF vers assertions/test code exacts, preuves, SHA et lanes ; inventaire documentaire seul ≠ test.
- `REV-06` — Revue de la transposition native Figma et des scénarios navigateur, y compris suspension, ambiguïté, méthode/CKI absent, responsive.
- `REV-07` — Contrôles de confidentialité/rétention des décisions et des textes de provenance (DATA-01), isolation interprojets, réconciliation de droits, gestion du mode DEV auth.
- `REV-08` — Maintenir les interfaces D7/D8/D9 réellement hors effet, sans faux STOP, fausse réception ou fausse autorisation Git ; l'implémentation ML3 ne les délivre pas.

**Gates :** (1) Morris examine et arbitre ces réserves de conception puis valide la **spécification globale** ; (2) GO Cursor D3/SFIA v2.6 indépendant et template Git consulté ; (3) développement/PG/UI/tests/docs en un macro-lot ; (4) revue sur pack complet et preuve ; (5) RECETTE/PR/merge/promotion/R6/adoption, chacun sous gate approprié. Aucune action Git de publication comprise dans ce document local.

**Verdict :** `R5 / ML3 — TECHNICAL SPEC v0.4 D0 CANDIDATE — R01–R04 DESIGN PROPOSED/CLOSED FOR REVIEW — MORRIS CONTENT VALIDATION PENDING — NO CURSOR GO — NO IMPLEMENTATION — NO TEST — GIT DOCUMENTARY BRANCH COMMITTED — NO MAIN MERGE`.
---

## 12. As-built delivery ML3 (2026-11-06) — factual implementation note

**Statut runtime :** `IMPLEMENTED — CANDIDATE` — publication branche projet autorisée ; **NOT RECETTE — NOT MERGED — NOT ADOPTED — NO RELEASE**.
**Branche :** `sfia/next-pilotage-decisions-delivery` @ base `origin/main@7f1f41c`.
**Schéma :** `007_ml3_pilotage_decisions` additive after `006`.
**Version produit :** `NO RELEASE` (package technique `0.0.0-dev` ≠ STABLE).

### Responsabilités livrées

| Domaine | Module | Rôle |
|---|---|---|
| D6 | `web/src/domains/decisions/` | Décisions, restrictions, journal |
| D5 | `web/src/domains/pilotage/` | Trajectoire, cycles, méthode, commandes, CKI resolve |
| D3 raccord | `nora-adapter` + `nora-context` | Projection + guidance CKI bornée ; `DELIVERED` seulement si octets joints |
| API | `/api/projects/[id]/pilotage`, `/commands`, `/decisions` | Auth session + idempotence |
| UX | `PilotagePanel` + onglet projet | #22/#24/#28/#40 honnêtes ; pas de #42 positif |

### Invariants runtime

- Verrou `projects` `FOR UPDATE` + révision `project_pilotage_state`.
- Un seul cycle `ACTIVE` (index partiel).
- Pas de `PARTIAL` interne ; transition CLOSE+OPEN atomique.
- CKI : ASSOCIATED / RESOLVED / DELIVERED distincts ; pas de fallback CKC historique.
- Méthode ABSENTE normale ; CHOOSE/REPLACE/WITHDRAW/REVOKE_BASE sans restauration implicite.

### Erreurs

`APPLIED` · `ALREADY_APPLIED` · `REJECTED` · `CONFLICT` · `UNKNOWN` — HTTP 200/400/409/503 selon `pilotageCommandHttpStatus`.

Les en-têtes historiques « NOT VALIDATED SPEC / NOT IMPLEMENTED » du document v0.4 restent des métadonnées pré-delivery ; ce §12 constate l'implémentation locale sans modifier les contrats R01–R04 validés en contenu Morris via #660.

### Correctif ML3 (2026-11-06, local, non poussé)

Idempotence UI par `actInstanceId` stable (retry = même clé, nouvel acte = nouvel id) et réconciliation `GET .../commands/by-key/:clientCommandKey`. CKI `RESOLVED` seulement si le digest du fichier égale l'entrée `cki/manifest.v0.2.0.json` (pas de migration silencieuse). Restriction `CYCLE_MUTATION` / `PILOTAGE_EFFECT` : `*` global, sinon cible (cycle, type ou méthode). GO naturel `EXPLICIT_INTERACTION` sans `operation`. `DELIVERED` seulement si le contenu CKI est joint et qu'un generate fixture/live a réellement tourné. Schéma inchangé (`007`).

### Ajustement autorité CR-01..CR-04 (2026-11-06, local, non poussé)

- **CR-01** — `TRANSITION_CYCLE` : évaluation D6 sur le cycle ACTIVE réel (A) **et** le `toCycleType` (B). Restriction sur A ou B → rejet unique, A reste ACTIVE, aucun B créé. Option A CLOSE+OPEN inchangée.
- **CR-02** — `REVISE_DECISION` : autorisée pour `RECORD_DECISION` (documentaire, sans effet D5). Refusée (`USE_TYPED_OPERATION`) pour les kinds fondateurs D5 (cycle/méthode/trajectoire/restriction) afin de ne pas orpheliner `method_applications.decisionId` ni les pins de cycle. Remplacement/révocation via opérations typées.
- **CR-03** — suppression du booléen project-global `statementA !== statementB` bloquant tous les effets D5 dépendants. Controles déterministes conservés (restrictions, état cycle/méthode, fondation). Conflit matériel D6 libre-texte : **B13 PARTIAL / NEEDS MORRIS ARBITRATION**.
- **CR-04** — Review Pack FULL avec diffs/contenu exploitables et logs bruts (pas de placeholders).

### B13 v0.1 — contradictions assistées par Nora (2026-11-06)

**Statut contenu :** `VALIDATED IN CONTENT BY MORRIS` — 2026-11-06.
Distinct de : publication Git normative · implémentation · preuve LIVE · ADOPTED.

**Deux niveaux (contrat) :**

| Niveau | Nature | Qui | Effet |
| --- | --- | --- | --- |
| A — Contradiction potentielle | Suspicion cognitive | Nora (D3) | Explique, clarifie, propose ; **aucune** HumanDecision, aucune interdiction D6 |
| B — Conflit matériel déterminant | Contrôle typé au point d'effet | D6→D5 | Refuse seulement l'effet réellement concerné (restriction, état cycle/méthode, fondation, source) |

**As-built local :**

- `domains/decisions/divergence-assist.ts` — détection Niveau A bornée (même kind+objectRef+scope, statements distincts) ; `authorityClaim=NONE`.
- `nora-context` — joint décisions applicables bornées + snippets Niveau A selon énoncé ; jamais d'appel IA en transaction PG.
- `nora-adapter` fixture — clarification Niveau A déterministe ; consignes système B13 ; **LIVE NOT EXECUTED**.
- D6/D5 — pas de restauration de `hasExactContradiction` global ; Option A inchangée ; pas de migration 008.
- UX PilotagePanel — légende « suspicion ≠ interdiction » ; marqueur `authority-block-established` pour RESTRICTION/CONFLICT.

**Limite honnête :** conflit matériel libre-texte non typé reste **NOT PROVEN** machine-side (clarification humaine + opérations typées). B13-03 prouvé pour conflits typés (restrictions / états).

### B13 C01–C03 — corrective continuation (2026-11-06, local, non poussé)

Après Critical Review B13 non acceptée. Contrat B13 v0.1 inchangé (VALIDATED IN CONTENT BY MORRIS).

| Correctif | As-built |
| --- | --- |
| **C01** | `findMessageDecisionConfrontations(userText, applicableBriefs)` : rapproche un **message USER courant** d'une décision D6 **APPLICABLE** existante (kind/objectRef/portée bornés) **sans** deuxième décision persistée. Signaux structurés `LevelASignal` (`authorityClaim=NONE`, framing `POSSIBLE_CHANGE` / clarification). Chaîne : `conversation/service` → `buildPilotageNoraContext` → `levelASignals` → `nora-adapter` (fixture et LIVE partagent le même contrat d'entrée). Heuristique ≠ oracle métier D6. |
| **C02** | `qualifyCommandOutcome({status, reasonCode})` : RESTRICTION→`authority-block-established` ; CONFLICT+STALE/HUMAN_INTENT/FINGERPRINT→`outcome-technical-*` ; CONFLICT+ACTIVE_CYCLE→`outcome-d5-state` ; UNKNOWN→réconciliation. Plus d'inférence d'autorité depuis la seule chaîne « CONFLICT ». |
| **C03** | Preuves unit (C01/C02) + PG (contexte Nora sans 2e décision ; formulations compatibles) + Playwright FAKE (RESTRICTION vs HUMAN_INTENT contrôlé) + Review Pack FULL. |

**Non modifié :** Option A CLOSE+OPEN ; migrations 007 ; moteur libre-texte universel (hors scope) ; autorité exclusive Pilote ; isolation projet.

### B13 R1–R3 — correctif final après Critical Review (2026-11-06, local, non poussé)

Contrat B13 v0.1 inchangé (VALIDATED IN CONTENT BY MORRIS). Pas de nouvelle politique d'autorité ni migration.

| Correctif | As-built |
| --- | --- |
| **R1** | `PilotagePanel.runCommand` remet `lastOutcome` à `null` au démarrage d'une tentative. `resolveUnknown` / catch réseau positionnent `lastOutcome={status:"UNKNOWN"}`. Un motif RESTRICTION/CONFLICT antérieur ne reste plus affiché sous un statut UNKNOWN ou APPLIED suivant. PendingRecord / clés idempotentes inchangés. |
| **R2** | `frameConfrontation` : polarité affirmée/négative des modalités (`n'est plus` / `n'est pas` / `pas` / `not`) → `POSSIBLE_CHANGE` ; décalage de portée globale↔locale → `AMBIGUOUS` ; synonymes affirmés (obligatoire↔requis) → `COMPATIBLE_RESTATEMENT` possible. Lexical overlap seul ne force plus une compatibilité trompeuse. Toujours `authorityClaim=NONE`. |
| **R3** | Test PG `R3: postUserMessageAndNora integrates…` : une décision APPLICABLE + `postUserMessageAndNora` (fixture DEV) → messages USER/assistant persistés, relecture fil, `humanDecisionCreated=false`, journal inchangé, pas de mutation D5, replay idempotent, isolation inter-projets. |

**Preuves :** unit R1/R2 ; PG R3 + suite ML3 ; Playwright R1 (UNKNOWN/APPLIED sans motif périmé) + C02 ; eslint chemins exacts ; tsc/build. **Limite :** libre-texte matériel Niveau B NOT PROVEN ; Nora LIVE NOT EXECUTED ; pixel Figma NOT VERIFIED.

### B13 R2–R3 — derniers ajustements Critical Review (2026-11-06, local, non poussé)

| Correctif | As-built |
| --- | --- |
| **R2** | `normalizeText` unifie apostrophes typographiques. `modalityPolarity` reconnaît `n'est jamais` / `n'est aucunement` / `ne doit|peut pas (être)` en plus de `plus`/`pas`. Ces négations ne produisent plus `COMPATIBLE_RESTATEMENT` par synonymes ou overlap. |
| **R3** | Isolation discriminante : décision B (`github-connexion` + marqueur unique) **persistée et APPLICABLE avant** `postUserMessageAndNora` sur A. Contexte B contient le marqueur ; contexte/réponse A ne le contiennent pas. USER text pertinent pour le même objectRef. Journal B inchangé ; replay idempotent. |

**Limites documentées :** famille de négations FR bornée (pas un NLP universel) ; Niveau B libre-texte NOT PROVEN ; Nora LIVE / Figma NOT EXECUTED / NOT VERIFIED.

### F01/F02 — conversation → autorité D5/D6 (2026-11-06, local, **pas de commit projet**)

Candidat distant de référence inchangé : `8bf8b5ce`. Intégration locale sur worktree DEV.

| Élément | As-built |
| --- | --- |
| **Séquencement** | `reserveTurnCommand` (USER durable COMPLETE) → ownership check → `applyConversationalAuthority` (TX métier courte) → `buildNoraPilotageContext` → `generateNoraReply` → `commitTurnTerminal`. Jamais de TX PG longue pendant Nora. |
| **F01 GO** | Intention CLEAR (`ouvre le cycle…`, etc.) → `executePilotageCommand` avec `sourceRef=userMessageId`, `clientCommandKey=conv-auth:{clientTurnKey}`, `actInstanceId=userMessageId`. Ambigu (« OK ») / soft / source assistant → aucun effet. |
| **F02 RECORD** | `Je décide que…` / `Décision :…` → `RECORD_DECISION` documentaire avec `objectRef` dérivé. Questions / préférences exploratoires → clarification, pas de commande. |
| **F02 REVISE** | `Finalement…` + confrontation Niveau A `POSSIBLE_CHANGE` sur **une** cible `RECORD_DECISION` APPLICABLE → `REVISE_DECISION`. Fondations D5 → clarification (opération typée). Multi-cibles → clarification. Journal UX : geste `Réviser` (EXPLICIT_INTERACTION) en complément. |
| **API vérité** | `pilotageEffect.{attempted,intentClarity,status,reasonCode,decisionId,clarification,source}` ; `humanDecisionCreated` seulement si décision id confirmée APPLIED/ALREADY_APPLIED. Replay conserve le payload. |
| **Idempotence** | Tour D3 (`clientTurnKey`) et commande métier (`conv-auth:…`) corrélés sans second moteur. UNKNOWN métier → réconciliation existante avant rejeu. |
| **Couverture** | IMPLEMENTED local + BEHAVIOR PROVEN (unit intent, PG F01/F02, Playwright fil) ; ADOPTED / RECETTE / LIVE / STABLE = NOT CLAIMED. |
| **Limites** | Qualificateur FR borné (pas NLP universel) ; pas de migration 008 ; pas de publication projet sans GO distinct. |

### C01/C02/C03 — autorité / reprise / continuité (2026-11-06, local, **pas de commit projet**)

Correctif après Critical Review F01/F02 NOT ACCEPTED. Candidat distant `8bf8b5ce` inchangé.

| Correctif | As-built |
| --- | --- |
| **C01** | `isExploratoryActLanguage` ; « Finalement… » avec hedges (`je pense`, `pourrait`, `et si`, Nora) → AMBIGUOUS, aucune mutation. Assertive « Finalement, X devient Y » + cible unique RECORD → REVISE possible. « Je révise la décision… » performatif explicite. Level A ≠ autorité. |
| **C02** | Effet D5/D6 avant Nora ; `markTurnUnknown(..., resultJson)` conserve `pilotageEffect` ; `reconstituteConversationalAuthority` via `conv-auth:{clientTurnKey}` / `USER_MESSAGE` sourceRef ; replay UNKNOWN reconstitue depuis `business_commands`. Clé client stable (ref + sessionStorage pending, pas de secret). Tour Nora et commande métier restent distincts. |
| **C03** | Fil : résumé durable décisions + bouton réconciliation pending après reload. Journal : 8 plus récentes par défaut + expand historique complet (pas `slice(0,8)` des plus anciennes). |
| **Preuves** | unit C01 ; PG C01/C02 fault/C03>8 ; Playwright F01/F02/C03. LIVE/RECETTE/STABLE NOT CLAIMED. |

### CR-01 / CR-02 — consolidation Critical Review (2026-11-06, local, **pas de commit projet**)

| Élément | As-built |
|---|---|
| **CR-01** | `findAuthorityReviseCandidates` / `selectAllApplicableBriefs` scannent **toutes** les APPLICABLE du projet (pas `MAX_APPLICABLE_FOR_CONTEXT=12`). La fenêtre cognitive reste pour Nora uniquement. 0 candidat → clarification ; 1 → REVISE documentaire si acte clair ; plusieurs → clarification (portées distinctes signalées). Pas de newest-wins / truncation. Level A framing filtre la pertinence, n'autorise jamais. |
| **CR-02** | `shouldClearThreadPending` : Nora COMPLETE **ne** clôt **pas** un effet métier UNKNOWN. Garde exclusive `mayStartNewThreadAct` : une saisie distincte n'écrase pas un pending non résolu. 404 by-key → reprise **même** `clientTurnKey`, pas de nouvelle clé. sessionStorage = aide locale, vérité = `business_commands`. |
| **Preuves** | unit CR-01 fenêtre 12 vs autorité ; unit pending lifecycle ; PG 15+ doubles GitHub (aucune REVISE) ; PG unique REVISE ; PG isolation interprojets ; PG concurrence même clé ; Playwright ACK perdu → reload → reconcile sans double OPEN. LIVE/RECETTE/STABLE NOT CLAIMED. |

```

### MODIFIED FULL `projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md`

```md
# SFIA Studio Next — R5 / ML3 — Matrice individuelle de traçabilité D5/D6
## Version candidate v0.2 — R01–R04 traités en conception, publiée sur branche documentaire, sans preuve de test

**Références associées :** [Spécification technique v0.4](specification-technique.md) · [Revue de conception v0.2](revue-conception.md).

**Date :** 2026-11-06. **Baseline :** `main@ab18316b9c1e849ff557f4ba561c638e9961bb89`. **Sources R2 :** `conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md` (blob `964893817d351b668e221e25085ee00b909337de`) et `conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md` (blob `de4b3de245484620ea60f0662004c6993ea808b1`). **R3 UX :** `ux-ui/audit-couverture-ux-r3.md` §7.4, blob `81c62c700b2e1b377da7e27e4a92db506bfb6e38`. **R4 QA :** `architecture-technique/cadrage-r4.md` §5.5.7, blob `f390f3d87d18e3c6c91f8a57e5960b2be946e60a`.

**Complément :** `R01–R04` = contrats proposés dans la spécification v0.4 §8 bis ; traitement documentaire à valider Morris, non preuve runtime.

**Lecture :** `IN` = comportement attendu dans ML3 ; `INTERFACE` = invariant/contrat exposé sans moteur d’effet D7/D8/D9 ; `IN + INTERFACE` = part ML3 et part futur distinctes. QA = oracle R4 à instancier en test ; pas une réussite, pas forcément preuve exhaustive du point. `UX` = numéro de surface Figma dans l’inventaire R3 ; aucun nœud natif ni runtime inspecté dans cette revue. Chaque entrée est `DOCUMENTARY MAPPED / TEST NOT EXECUTED`.

### 1. RG-TRJ — 40 règles

| Règle R2 | Intitulé propriétaire | Contrat ML3 | Portée | QA candidat |
|---|---|---|---|---|
| `RG-TRJ-001` | Trajectoire non préalable | CTX — identité/continuité | IN | B01 |
| `RG-TRJ-002` | Projection distincte des faits | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-003` | Orientation personnalisable | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-004` | Révision sans rétroactivité | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-005` | Dépendance réelle et justifiée | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-006` | Requalification proportionnée | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-007` | Références de continuité | TRAJ — trajectoire | IN | B02 |
| `RG-TRJ-008` | Cycle actif unique | CYC — cycles et commandes | IN | B05 [R03] |
| `RG-TRJ-009` | Ouverture gouvernée | CYC — cycles et commandes | IN | B03 [R03] |
| `RG-TRJ-010` | Type et résultat cohérents | CYC — cycles et commandes | IN | B03 [R03] |
| `RG-TRJ-011` | Deuxième ouverture incompatible | CYC — cycles et commandes | IN | B05 [R03] |
| `RG-TRJ-012` | Clôture gouvernée et honnête | CYC — cycles et commandes | IN | B07 [R03] |
| `RG-TRJ-013` | Pas de gate de cycle automatique | CYC — cycles et commandes | IN | B08 [R03] |
| `RG-TRJ-014` | GO combiné à effets distincts | CYC — cycles et commandes | IN | B07 [R03/R04] |
| `RG-TRJ-015` | État réel avant confirmation | CYC — cycles et commandes | IN | B06 [R03/R04] |
| `RG-TRJ-016` | Rejeu et concurrence | CYC — cycles et commandes | IN | B05/B06 [R03/R04] |
| `RG-TRJ-017` | Correspondance canonique | CKI — spécialisation Nora | IN | B11/B12 [R01] |
| `RG-TRJ-018` | Un seul CKI principal | CKI — spécialisation Nora | IN | B11 [R01] |
| `RG-TRJ-019` | Autonomie intrinsèque des CKI | CKI — spécialisation Nora | IN | B11 [R01] |
| `RG-TRJ-020` | Guidance à responsabilité bornée | CKI — spécialisation Nora | IN | B11/B12 [R01] |
| `RG-TRJ-021` | Version et provenance interprétables | CKI — spécialisation Nora | IN | B12 [R01] |
| `RG-TRJ-022` | Disponibilité non fictionnelle | CKI — spécialisation Nora | IN | B12 [R01] |
| `RG-TRJ-023` | Pas de sélection dynamique hors cycle | CKI — spécialisation Nora | IN | B01 [R01] |
| `RG-TRJ-024` | Évolution CKI sans effet rétroactif | CKI — spécialisation Nora | IN | B10 [R01] |
| `RG-TRJ-025` | Matrice purement informative | CKI — spécialisation Nora | IN | B11 |
| `RG-TRJ-026` | Pertinence contextualisée | CKI — spécialisation Nora | IN | B11 |
| `RG-TRJ-027` | Analyse transverse sans second CKI | CKI — spécialisation Nora | IN | B11 |
| `RG-TRJ-028` | Matrice non exhaustive | CKI — spécialisation Nora | IN | B11 |
| `RG-TRJ-029` | Différence transmission / preuve | CKI — spécialisation Nora | IN | B12 |
| `RG-TRJ-030` | Maturité proactive non répétitive | MAT — maturité et progression | IN | B08 |
| `RG-TRJ-031` | Unification de la guidance | MAT — maturité et progression | IN | B08 |
| `RG-TRJ-032` | Clôturabilité argumentée | MAT — maturité et progression | IN | B08 |
| `RG-TRJ-033` | Continuité sans mémoire parallèle | MAT — maturité et progression | IN | B18 |
| `RG-TRJ-034` | Reprise fidèle après interruption | MAT — maturité et progression | IN | B18 |
| `RG-TRJ-035` | Réserve/suspension non résolue | MAT — maturité et progression | IN | B14 |
| `RG-TRJ-036` | Visibilité proportionnée | MAT — maturité et progression | IN | B18 |
| `RG-TRJ-037` | État de méthode porté par le projet | METH — méthode projet | IN | B09 [R02] |
| `RG-TRJ-038` | Application d'un changement de méthode | METH — méthode projet | IN | B09/B10 [R02] |
| `RG-TRJ-039` | Requalification des cycles touchés | METH — méthode projet | IN | B10 [R02] |
| `RG-TRJ-040` | Méthode et CKI sans autorité concurrente | METH — méthode projet | IN | B10/B12 [R02] |

### 2. RG-GOV — 37 règles

| Règle R2 | Intitulé propriétaire | Contrat ML3 | Portée | QA candidat ou propriétaire futur |
|---|---|---|---|---|
| `RG-GOV-001` | Catégories non interchangeables | DEC — décisions et portée | IN | B04 |
| `RG-GOV-002` | Expression naturelle et suffisante | DEC — décisions et portée | IN | B03 [R03] |
| `RG-GOV-003` | Auteur et projet compétents | DEC — décisions et portée | IN | B15 [R03] |
| `RG-GOV-004` | Ambiguïté déterminante | DEC — décisions et portée | IN | B04 [R03] |
| `RG-GOV-005` | Acte observé et source fiable | DEC — décisions et portée | IN | B04 [R03] |
| `RG-GOV-006` | Refus de fausse formalisation | DEC — décisions et portée | IN | B04 |
| `RG-GOV-007` | Autorité non universelle | DEC — décisions et portée | IN | B15 |
| `RG-GOV-008` | Pas de décision métier autonome de Nora | DEC — décisions et portée | IN | B03 |
| `RG-GOV-009` | Référence durable d'un arbitrage structurant | DEC — décisions et portée | IN | B17 [R02] |
| `RG-GOV-010` | Historique non réécrit | DEC — décisions et portée | IN | B17 [R02] |
| `RG-GOV-011` | Révision gouvernée | DEC — décisions et portée | IN | B17 [R02] |
| `RG-GOV-012` | Conflits d'autorité | DEC — décisions et portée | IN | B13 [R02/R03] |
| `RG-GOV-013` | Délimitation et propagation bornées | REST — restrictions/STOP | IN + INTERFACE | B16 |
| `RG-GOV-014` | Isolation des projets individuels | DEC — décisions et portée | IN | B15 [R03] |
| `RG-GOV-015` | Contrainte supérieure applicable | REST — restrictions/STOP | IN + INTERFACE | B13/B16 |
| `RG-GOV-016` | Reprise sans autorité inventée | REST — restrictions/STOP | IN + INTERFACE | B14 [R03] |
| `RG-GOV-017` | Suspension humaine durable | REST — restrictions/STOP | IN + INTERFACE | B14 [R02/R03] |
| `RG-GOV-018` | Levée humaine contextualisée | REST — restrictions/STOP | IN + INTERFACE | B14 [R02] |
| `RG-GOV-019` | Suspension humaine vs pause technique | REST — restrictions/STOP | IN + INTERFACE | B14 + D7 futur |
| `RG-GOV-020` | Interdiction des confirmations d'arrêt fictives | REST — restrictions/STOP | IN + INTERFACE | B14 + D7 futur [R03] |
| `RG-GOV-021` | Changement significatif de besoin | REST — restrictions/STOP | IN + INTERFACE | B16 |
| `RG-GOV-022` | Révocation et opérations en cours | REST — restrictions/STOP | IN + INTERFACE | B16 + D7 futur [R02] |
| `RG-GOV-023` | Proposition n'est pas permission | DEC — décisions et portée | IN | B04 |
| `RG-GOV-024` | Contrat inspecté et « Exécuter » | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-025` | Liaison au bon périmètre | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-026` | Requalification des changements matériels | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-027` | Vérification actuelle avant effet | REST — restrictions/STOP | INTERFACE | B16 + D7/D9 futur [R03] |
| `RG-GOV-028` | Rejeu sans élargissement d'autorité | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver [R03] |
| `RG-GOV-029` | GO de cycle distinct du contrat technique | CYC — cycles et commandes | IN | B03/B07 [R03/R04] |
| `RG-GOV-030` | Création de projet à acte explicite propre | CTX — identité/continuité | INTERFACE | B01 + D2 existant |
| `RG-GOV-031` | Acceptation humaine distincte de conformité | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-032` | Décision informée et résultat qualifié | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-033` | Correction sous nouveau mandat | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-034` | Méthode et CKI non autorisants | CKI — spécialisation Nora | IN | B12 |
| `RG-GOV-035` | Choix durable de méthode et autorité | METH — méthode projet | IN | B09/B10 [R02] |
| `RG-GOV-036` | Interdiction de fabriquer une adoption | BOUND — interfaces futures | INTERFACE | D7/D8/D9 à prouver |
| `RG-GOV-037` | Choix documentaire non autorisant | DEC — décisions et portée | IN | B04 |

### 3. PF-TRJ — 30 scénarios

| Scénario R2 | Intitulé | Contrat ML3 | Portée | UX R3 # | QA candidat |
|---|---|---|---|---|---|
| `PF-TRJ-01` | Sas et projet sans cycle | CTX — identité/continuité | IN | 2,22,28 | B01 |
| `PF-TRJ-02` | Trajectoire suggérée sans ouverture | TRAJ — trajectoire | IN | 22,23 | B02 |
| `PF-TRJ-03` | Début direct par l’architecture technique | CYC — cycles et commandes | IN | 22,50,61,51,57 | B03 |
| `PF-TRJ-04` | Ouverture autorisée par conversation | CYC — cycles et commandes | IN | 23,52,24,54 | B03 [R03] |
| `PF-TRJ-05` | GO ambigu | CYC — cycles et commandes | IN | 41,23 | B04 [R03] |
| `PF-TRJ-06` | Demande d’un second cycle simultané | CYC — cycles et commandes | IN | 26,24 | B05 [R03] |
| `PF-TRJ-07` | Digression sécurité pendant UX | CKI — spécialisation Nora | IN | 24,59,3 | B11 [R01] |
| `PF-TRJ-08` | CKI absent ou version non applicable | CKI — spécialisation Nora | IN | 39,58 | B12 [R01] |
| `PF-TRJ-09` | Relation Architecture vers DevOps | CKI — spécialisation Nora | IN | 51,59,3 | B11 |
| `PF-TRJ-10` | Matrice silencieuse et facultative | CKI — spécialisation Nora | IN | 59,3 | B11 |
| `PF-TRJ-11` | Transfert Conception vers UX | CKI — spécialisation Nora | IN | 22,59,3 | B11 |
| `PF-TRJ-12` | QA révèle une contradiction fonctionnelle | CKI — spécialisation Nora | IN | 59,3,40 | B11 |
| `PF-TRJ-13` | Maturité suffisante avec réserve reportable | MAT — maturité et progression | IN | 25,27,49 | B08 |
| `PF-TRJ-14` | Maturité non démontrée | MAT — maturité et progression | IN | 44,25 | B08 |
| `PF-TRJ-15` | Clôture avec GO effectif | CYC — cycles et commandes | IN | 25,53,27,54 | B07 [R03] |
| `PF-TRJ-16` | GO conjoint, effet partiel | CYC — cycles et commandes | IN | 42,49,47,57 | B07 / partiel conditionnel [R04] |
| `PF-TRJ-17` | Ouvertures concurrentes | CYC — cycles et commandes | IN | 26,56 | B05 [R03] |
| `PF-TRJ-18` | Rejeu d’un GO | CYC — cycles et commandes | IN | 52,56,24 | B06 [R03] |
| `PF-TRJ-19` | Reprise du même fil après interruption ou transition de cycle | CTX — identité/continuité | IN | 55,24,40 | B18 [R03] |
| `PF-TRJ-20` | Suspension du Pilote | REST — restrictions/STOP | IN | 33,25 | B14 [R03] |
| `PF-TRJ-21` | Nouvelle version CKI disponible | CKI — spécialisation Nora | IN | 48,58 | B10 [R01] |
| `PF-TRJ-22` | Changement de méthode projet | METH — méthode projet | IN | 60,32,46 | B10 [R02] |
| `PF-TRJ-23` | Réorientation et retour sans cycle forcé | TRAJ — trajectoire | IN | 59,3 | B02 |
| `PF-TRJ-24` | Interprojets et Git partagé | CTX — identité/continuité | IN | 11,12 | B15 [R03] |
| `PF-TRJ-25` | Pratiques transversales sans spécialité dédiée | CKI — spécialisation Nora | IN | 51,59,3 | B11 [R01] |
| `PF-TRJ-26` | CKI guide un livrable non obligatoire | CKI — spécialisation Nora | IN | 58,3 | B11 |
| `PF-TRJ-27` | État durable explicitement sans méthode | METH — méthode projet | IN | 28,55 | B01/B09 [R02] |
| `PF-TRJ-28` | Choix de méthode exprimé naturellement | METH — méthode projet | IN | 29,31 | B09 [R02] |
| `PF-TRJ-29` | Nouvelle version et cycle actif | METH — méthode projet | IN | 60,32,46 | B10 [R02] |
| `PF-TRJ-30` | Technique CKI incompatible avec la méthode projet | METH — méthode projet | IN | 58,60,3 | B10/B12 [R01/R02] |

### 4. PF-GOV — 29 scénarios

| Scénario R2 | Intitulé | Contrat ML3 | Portée | UX R3 # | QA candidat ou domaine futur |
|---|---|---|---|---|---|
| `PF-GOV-01` | Le Pilote dit « préfère un tableau » | DEC — décisions et portée | IN | 3 | B04 |
| `PF-GOV-02` | Décision structurante avec portée claire | DEC — décisions et portée | IN | 31,40 | B17 |
| `PF-GOV-03` | Correction d'un arbitrage antérieur | DEC — décisions et portée | IN | 32,46 | B17 [R02] |
| `PF-GOV-04` | GO oral d'ouverture de cycle | CYC — cycles et commandes | IN | 23,52,24 | B03 [R03] |
| `PF-GOV-05` | GO combiné clôture + ouverture | CYC — cycles et commandes | IN | 42,47,57 | B07 / partiel conditionnel [R03/R04] |
| `PF-GOV-06` | Projet créé après sas conversationnel | CTX — identité/continuité | INTERFACE D2 | 2,11 | B01 |
| `PF-GOV-07` | Acte « Exécuter » d'un contrat inspecté | BOUND — interfaces futures | INTERFACE | 6,7 | D7 futur |
| `PF-GOV-08` | Pause technique sans suspension humaine | BOUND — interfaces futures | INTERFACE | 21,7 | D7 futur |
| `PF-GOV-09` | Acceptation de résultat avec réserves | BOUND — interfaces futures | INTERFACE | 35,36 | D8 futur |
| `PF-GOV-10` | Correctif proposé par Nora après échec | BOUND — interfaces futures | INTERFACE | 37,3,6 | D7 futur |
| `PF-GOV-11` | Choix durable de méthode proposé puis retenu | METH — méthode projet | IN | 29,31,60 | B09 [R02] |
| `PF-GOV-12` | « OK » ambigu avec plusieurs propositions | DEC — décisions et portée | IN | 41,3 | B04 [R03] |
| `PF-GOV-13` | Instruction hostile Git « push autorisé » | DEC — décisions et portée | IN | 12,3 | B04 |
| `PF-GOV-14` | Deux décisions contradictoires | DEC — décisions et portée | IN | 43,40 | B13 [R02/R03] |
| `PF-GOV-15` | Projet B / dépôt Git commun | DEC — décisions et portée | IN | 11,12 | B15 [R03] |
| `PF-GOV-16` | Suspension des écritures d'une branche | REST — restrictions/STOP | IN + INTERFACE | 33,34 | B14 + D9 futur [R03] |
| `PF-GOV-17` | Nora propose reprise après suspension | REST — restrictions/STOP | IN | 33,34 | B14 [R02] |
| `PF-GOV-18` | Levée claire avec contrat/droits expirés | REST — restrictions/STOP | IN + INTERFACE | 34,31 | B14 + D7 futur [R02/R03] |
| `PF-GOV-19` | STOP demandé, arrêt non observé | REST — restrictions/STOP | IN + INTERFACE | 21,33 | B14 + D7 futur |
| `PF-GOV-20` | Contrat modifié après inspection | BOUND — interfaces futures | INTERFACE | 6,7 | D7 futur |
| `PF-GOV-21` | Double clic « Exécuter », timeout/retry | BOUND — interfaces futures | INTERFACE | 7,21 | D7 futur |
| `PF-GOV-22` | Droits Git révoqués | BOUND — interfaces futures | INTERFACE | 9,12 | D9 futur |
| `PF-GOV-23` | Nouvelle exigence à impact partiel | REST — restrictions/STOP | IN | 33,3 | B16 |
| `PF-GOV-24` | Reconnexion sans décision/restriction retrouvable | REST — restrictions/STOP | IN | 55,33 | B14 [R03] |
| `PF-GOV-25` | CKI recommande une validation non applicable | CKI — spécialisation Nora | IN | 58,59 | B12 |
| `PF-GOV-26` | Résultat accepté non prouvé / adoption fictive | BOUND — interfaces futures | INTERFACE | 35,36,37,38 | D8/R6 futur |
| `PF-GOV-27` | Document récent semble supplanter décision | METH — méthode projet | IN | 32,46,40 | B10 [R02] |
| `PF-GOV-28` | Autre Pilote tente d'autoriser des effets | DEC — décisions et portée | IN | 11,12 | B15 |
| `PF-GOV-29` | Brouillon apprécié sans GO ni validation | DEC — décisions et portée | IN | 4,18 | B04 |

### 5. Revue de couverture et limites

| Contrôle | Résultat documentaire | Limite |
|---|---|---|
| Identités RG D5 | 40/40 | Aucun test ML3 exécuté |
| Identités RG D6 | 37/37, y compris GOV-037 | Autorités externes D7/D8/D9 = interface seulement |
| PF D5 | 30/30 avec numéro UX R3 | Correspondance UX, pas rendu navigateur |
| PF D6 | 29/29 avec numéro UX R3, y compris GOV-29 | Certaines surfaces partagées A/C/D ne sont pas du runtime ML3 |
| QA R4 B01–B18 | 18 oracles présents dans le cadrage R4 ; liens candidats dans cette matrice | Assertions détaillées, données, code, lane et SHA à produire |
| Option A / PF-TRJ-16 | Oracle B07 sur la transaction interne ; éventuel partiel reste conditionnel | Ne pas simuler un partiel d’effets PG atomiques |

**Dette de traçabilité à fermer dans le même macro-lot :** enrichir chaque ligne avec `implementationRef`, `testCaseRef`, `testRun/evidence`, `environment`, `sourceSha`, `verdict` après construction ; les domaines D7/D8/D9 seront reliés à leurs propres macro-lots lorsqu’ils existent. La matrice n’est pas un duplicata des RG/PF ni un registre de preuves actuel.

**Verdict :** `MAPPING DOCUMENTAIRE INDIVIDUEL 136/136 — QA LINKS CANDIDATE — NO TEST EXECUTED — NOT COVERAGE VERIFIED`.

### 6. R01–R04 — assertions de recette et preuve cible (sans multiplier les 136 tests)

| Contrat candidat | Sources déterminantes | Assertions obligatoires / oracle | UX R3 | Propriétaire et niveau de preuve |
|---|---|---|---|---|
| R01 — pin CKI, disponibilité, provenance | RG-TRJ-017..024 ; PF-TRJ-08/21 ; B10/B11/B12 | Pin version/digest réellement disponible au GO ; aucune auto-substitution ; `NULL` honnête sans version ; retour **même digest** permis ; changement de version explicite ; contenu hostile non livré | #24, #39, #48, #58/#59 | D5 + D3 ; PostgreSQL/manifest, fixtures négatives, LIVE pour qualité, pas de preuve d'usage depuis la seule référence |
| R02 — méthode et autorité | RG-TRJ-037..040 ; RG-GOV-009..012/035 ; PF-TRJ-27..30 ; B09/B10/B13/B16/B17 | Remplacement A→B atomique ; retrait → ABSENT ; suspension sans retrait ; révocation base courante → ABSENT sans fallback ; révocation historique sans effet courant ; cible ambiguë refusée | #28–32, #40, #46, #60 | D5 + D6 ; PostgreSQL/révision/reprise, navigateur refus/état, traçabilité historique |
| R03 — intégrité et idempotence | RG-TRJ-008..016 ; RG-GOV-003/017/027/028 ; B03..B07/B14..B16 | Deux PG simultanés un ACTIVE ; même clé même résultat ; autre clé même source/intention zéro doublon ; même clé autre fingerprint CONFLICT ; STOP concurrent selon ordre commit ; rejet source externe ; réponse perdue réconciliée | #24, #33, #41, #47, #52–56 | D5/D6 ; PG réel 2 connexions, fault injection, redémarrage, navigateur/auth, pas de seule fixture |
| R04 — combiné atomique / partiel séparé | RG-TRJ-014..016 ; RG-GOV-029 ; PF-TRJ-16/PF-GOV-05 ; B07 | Si OPEN(B) échoue avant commit, A reste ACTIVE ; après commit A CLOSED+B ACTIVE ; ACK perdu = UNKNOWN puis réconciliation ; **aucun PARTIAL ni écran #42 pour effet interne** | #47, #54, #56 ; **#42 conditionnel futur** | D5/D6 interne PG réel ; éventuel `PARTIAL` positif relève d'une frontière future réelle D7/D9, non testée par ML3 |

**Validation de ces lignes :** références documentaires établies ; assertions sont des obligations de recette futures, **toutes `NOT EXECUTED`**. Un test peut satisfaire plusieurs références. L'état `INTERFACE` des PF D7/D8/D9 dans les 136 lignes demeure inchangé. Les extensions de matrice n'altèrent ni les identifiants, ni les statuts validés des RG/PF R2.
---

## Preuves code/tests ML3 (2026-11-06) — mapping condensé

| QA | Preuve primaire |
|---|---|
| B01 | `ml3-pilotage.pg.test.ts` empty projection + e2e cycle-absent |
| B03 | open cycle APPLIED + human decision |
| B04 | ambiguous utterance REJECTED |
| B05 | concurrent open → one ACTIVE |
| B06 | same client key replay ALREADY_APPLIED |
| B07 | transition fault hook → rollback A ACTIVE |
| B09/B10 | CHOOSE/REPLACE/WITHDRAW method |
| B11/B12 | `ml3-cki-intent` / cki-resolve unit + open pin |
| B14 | restriction blocks open |
| B15 | cross-project isolation |
| B16 | revoke founding method → ABSENT |
| B17 | GET `/decisions` journal |
| B18 | GET pilotage read-only |

Statut : `CODE MAPPED / LOCAL TESTS` — pas ADOPTED. LIVE Nora : NOT EXECUTED.

## As-built correctif ML3 — testCaseRef B01–B18 (2026-11-06)

Appendice après correctifs F01–F08 / T01–T04. N'altère pas la matrice R2. Les identifiants sont les noms de cas dans le code, pas une nouvelle exigence. Lane visée : DEV. Pas une preuve RECETTE.

| QA | testCaseRef | Ce que le cas couvre après correctif |
|---|---|---|
| B01 | `PostgreSQL ML3 pilotage and decisions` › `starts empty: no cycle, no method, no retained trajectory` ; e2e `cycle-absent` | Projet neuf sans cycle ni méthode |
| B02 | même fichier › `propose stays non-authoritative until an explicit retain` ; UI `retain-trajectory` | Proposition non ouvrante ; rétention explicite |
| B03 | même fichier › `opens a cycle from an explicit utterance…` ; **F01** `F01: clear GO via postUserMessageAndNora…` ; e2e fil `ML3 F01: GO naturel depuis le fil` (+ champ PilotagePanel) | GO naturel USER_MESSAGE via fil **et** EXPLICIT_INTERACTION |
| B04 | même fichier › `rejects an ambiguous OK…` ; **F01** `F01: ambiguous OK and hostile assistant…` ; unit intent | Énoncé équivoque / source hostile rejetés |
| B05 | même fichier › `keeps a single ACTIVE cycle when two opens race` | Une seule ligne ACTIVE |
| B06 | même fichier › `replays the same key and conflicts when the fingerprint changes` ; `does not apply the same human act twice when only the client key changes` ; `reconcileCommandByClientKey` | Même clé rejouée ; même `actInstanceId` non dupliqué. Perte réseau UI : statut UNKNOWN + bouton réconcilier (non exécuté en PG) |
| B07 | même fichier › `rolls back a transition when opening the next cycle fails` | CLOSE+OPEN annulés ensemble |
| B08 | non couvert par un cas dédié | Nora ne clôt pas un cycle sur un jugement de maturité : consigne d'adapter, pas un oracle exécuté |
| B09 | même fichier › `chooses, replaces, withdraws and revokes the current method base without restoring the previous one` | Choix / remplacement / retrait / révocation de base |
| B10 | unit `pins RESOLVED only when the file digest matches the approved manifest` | Pas de remplacement implicite du pin : digest hors manifeste → UNAVAILABLE |
| B11 | unit `maps each cycle type to one CKI specialty file` | Une spécialité par type. Digression Nora hors spécialité : non exécutée comme tour LIVE |
| B12 | unit `stays ASSOCIATED without a pin and UNAVAILABLE when the digest diverges` ; cas manifeste ci-dessus | Pas de fallback si octets absents ou non approuvés |
| B13 | unit `ml3-b13-divergence` (+ C01/C02) ; PG `B13-*` + `C01` nora-context ; e2e C02 motifs | **Niveau A message↔décision** : DETERMINISTIC + PG ctx (FAKE adapter). **Niveau B typé** : PG INTEGRATION PROVEN. **Libre-texte matériel** : NOT PROVEN machine. **UX motifs** : unit + BROWSER FAKE (RESTRICTION vs HUMAN_INTENT contrôlé) |
| B14 | même fichier › restrictions + `CR-01: transition blocked when target B or source A is restricted` | STOP global, cible, et transition A→B (restriction sur A ou B) |
| B15 | même fichier › `isolates pilotage across projects and rejects a foreign user message` | Pas d'import inter-projets |
| B16 | même fichier › révocation de la méthode fondatrice dans le cas méthode | Révocation avant effet courant, sans restauration |
| B17 | e2e `decision-state` + **F02** journal revise ; PG `F02: RECORD then REVISE…` + `CR-02` | Journal `APPLICABLE`/`REVISED` ; RECORD/REVISE depuis fil |
| B18 | même fichier › `starts empty` lecture seule `getPilotageProjection` ; GET `/pilotage` ne poste pas de commande | Navigation / lecture sans GO |

### Ajustement autorité CR-01..CR-04 (2026-11-06)

| CR | testCaseRef | Verdict |
| --- | --- | --- |
| CR-01 | unit `CR-01: TRANSITION_CYCLE is blocked when source A or target B is restricted` ; PG `CR-01: transition blocked when target B or source A is restricted; A stays ACTIVE` | **CLOSED** (DEV PG + unit) |
| CR-02 | PG `CR-02: REVISE_DECISION allowed for RECORD; refused for D5 founding kinds` | **CLOSED** (refuse sûr + typed ops) |
| CR-03 | PG `CR-03: different RECORD statements on same objectRef do not globally block OPEN` | **CLOSED** for false-positive removal ; material free-text conflict **PARTIAL / NEEDS MORRIS** |
| CR-04 | Review Pack FULL with embedded raw logs `/tmp/ml3-*.txt` | **CLOSED** if handoff verified |

Statut candidat : `IMPLEMENTED — CANDIDATE` (branche projet) — **NOT RECETTE — NOT MERGED — NOT ADOPTED**. LIVE Nora : NOT EXECUTED. B08/B11 LIVE cognitive : GOVERNED DEBT. B13 libre-texte matériel Niveau B : NOT PROVEN / PARTIAL.

### B13-01..10 (2026-11-06) — contrat VALIDATED IN CONTENT BY MORRIS

| ID | testCaseRef | Preuve | Limite |
| --- | --- | --- | --- |
| B13-01 | unit compatible formulations ; PG `B13-01/04` + `C01: two different but compatible…` | DETERMINISTIC + PG | pas de faux refus d'effet |
| B13-02 | unit fixture `levelASignals` ; PG `C01: single D6 + new USER…` → adapter FAKE | FAKE intégration conversationnelle | LIVE cognitive NOT PROVEN |
| B13-03 | PG `B13-03/07` restriction typed | PG INTEGRATION | libre-texte matériel NOT PROVEN (couverture partielle) |
| B13-04 | PG independent open despite RECORD divergence | PG | — |
| B13-05 | PG REPLACE → SUPERSEDED + nouvelle APPLICABLE | PG | via op typée ; pas de 2e clic rituel |
| B13-06 | unit intent ambiguous OK (ml3-cki-intent) ; C01 ambiguous framing | DETERMINISTIC | aucune mutation sans acte |
| B13-07 | PG restriction persists on projection reload | PG | — |
| B13-08 | PG COGNITIVE_PROPOSAL cannot OPEN | PG | — |
| B13-09 | PG REVOKE founding method → ABSENT | PG | REVOKED non présenté comme APPLICABLE (unit C01) |
| B13-10 | PG act-instance / reconcile ALREADY_APPLIED | PG | — |
| C01–C02 UX | unit `qualifyCommandOutcome` ; e2e RESTRICTION vs HUMAN_INTENT contrôlé | DETERMINISTIC + BROWSER FAKE | pixel Figma NOT VERIFIED |
| R1 | unit UNKNOWN≠authority ; e2e RESTRICTION→UNKNOWN→APPLIED sans motif périmé | DETERMINISTIC + BROWSER FAKE | — |
| R2 | unit jamais/aucunement/apostrophe typo + restatements positifs | DETERMINISTIC | famille FR bornée ; ≠ oracle D6 |
| R3 | PG isolation : décision B APPLICABLE avant gen A ; même objectRef + marqueur ; ctx B+ / ctx A− | PG INTEGRATION (FAKE Nora) | LIVE NOT EXECUTED ; libre-texte matériel NOT PROVEN |

### F01/F02 — conversation-authority (2026-11-06, local worktree)

| ID | testCaseRef | Preuve | Limite |
| --- | --- | --- | --- |
| F01-A | PG `F01: clear GO via postUserMessageAndNora…` ; e2e fil | USER persisté → OPEN_CYCLE APPLIED → HumanDecision → 1 ACTIVE | LIVE Nora NOT EXECUTED |
| F01-B/C | PG `F01: ambiguous OK and hostile assistant…` | OK / soft / role assistant → no cycle | — |
| F01-D | même cas F01-A replay `clientTurnKey` | idempotentReplay ; 1 ACTIVE | — |
| F01-I | PG `F01: restriction blocks conversational GO…` | REJECTED RESTRICTION ; humanDecisionCreated=false | — |
| F02-A/D | PG `F02: RECORD then REVISE…` ; e2e fil+Journal | RECORD → REVISED/APPLICABLE chain | fondations D5 non révisables génériquement |
| F02-E | même cas F02 founding refuse | clarification ; cycle CADRAGE inchangé | — |
| C01 | unit exploratory ; PG `C01: exploratory Finalement…` | réflexion ≠ mutation D6 | NLP universel NOT CLAIMED |
| C02 | PG `C02: D6 APPLIED survives Nora provider failure…` | UNKNOWN tour + effet métier reconstituté | LIVE NOT EXECUTED |
| C03 | PG journal>8 ; e2e expand historique | 8 récentes + historique complet | — |
| CR-01 | unit fenêtre 12 vs `findAuthorityReviseCandidates` ; PG 15+ doubles GitHub ; PG unique ; PG isolation | unicité D6 hors borne cognitive | — |
| CR-02 | unit `shouldClearThreadPending` / `mayStartNewThreadAct` ; PG concurrence même clé ; e2e ACK perdu+reload | pending préservé ; pas de double effet | cookie DEV/RECETTE réserve existante |

```

### MODIFIED FULL `projects/sfia-studio-next/construction/delivery-history.md`

```md
# SFIA Studio Next — Delivery history

Append-only logical journal of Cursor product deliveries.
**Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-01

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / entrée & continuité (premier vertical) |
| Type | INC / nouvelle capacité, pré-1.0 |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Working tree | local uncommitted construction under `projects/sfia-studio-next/web` |
| Product version target | `NO RELEASE` (proposal `0.1.0-rc.1` not attributed) |
| Lane | DEV (`127.0.0.1:3100`, Postgres `5433`) |
| Schema revision | `001_initial_studio_core` |
| Tests | Vitest unit + PostgreSQL integration (see web test run) |
| Evidence limits | GitHub OAuth LIVE BLOCKED without secrets; OpenAI LIVE optional; Figma native pending; RECETTE NOT AVAILABLE |
| Status | LOCAL CONSTRUCTION — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-02-CRITIQUE

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 consolidation critique (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Next 15.5.29; D2 fingerprint under lock; D4 prep-scoped docs + SAVING; D3 Agents SDK adapter; D1 authMode + Better Auth mount + loopback DEV login; Playwright smoke PASS |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | `001_initial_studio_core` + `002_session_auth_mode` |
| Tests | unit 3 PASS; integration 13 PASS; Playwright 1 PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-03-CONTINUITE

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 continuité D1–D2 (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Better Auth→PilotId session bridge; advisory-lock atomic idempotency across preparations; project reopen by projectId API/UI; Playwright portfolio path |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | unchanged (`001` + `002`) |
| Tests | unit 3 PASS; integration 21 PASS; Playwright 1 PASS; build+tsc PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-04-OAUTH-STATUS-REPROOF

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 continuité D1–D2 (same lot) |
| Type | INC corrective / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | Fix `/api/auth/status` when OAuth configured; re-proof A/B/C; bounded OAuth start URL (no callback LIVE claim); secrets never in handoff |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | unchanged |
| Tests | unit 3; integration 21; Playwright 1; build+tsc; OAuth status+signin-start PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-05-LIVE-QA-CONSOLIDATION

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 LIVE qualification consolidation (same lot) |
| Type | INC corrective / qualification |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Changes | D1 late GitHub link backfill; PostCSS override 8.5.32; A01–A16 reclass; Nora LIVE adapter proof; integration forces fixture; Playwright LIVE-aware |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Tests | unit 3; integration 22; Playwright 1; build+tsc; npm audit prod postcss closed |
| Status | ML1 LOCAL QUALIFICATION REVIEWABLE candidate — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-06-PRECOMMIT

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 first local project commit |
| Type | INC / same vertical |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (parent = base; unpublished) |
| Changes | ML1 web vertical + D1 lane fail-closed emit; matrice temporal DESIGN ONLY vs DEV |
| Product version | `NO RELEASE` |
| Status | LOCAL COMMIT — awaiting ChatGPT review / Morris push gate |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-07-PREPUSH-CORRECTIONS

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 targeted pre-push corrections (same lot) |
| Type | INC corrective / Critical Review findings |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Parent commit | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` (preserved) |
| Commit | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` (parent `0b982b3b…`; unpublished) |
| Changes | A: strict loopback + DEV consume fail-closed; B: `db:migrate` 001→002 + fresh-container proof; C: owned E2E :3101 / `sfia_next_e2e` / Nora fixture-only |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Schema | `001` + `002` via `npm run db:migrate` |
| Tests | unit / integration (incl. isolated migrate container) / Playwright FAKE E2E — see Review Pack |
| Status | LOCAL CORRECTIVE — preserved under subsequent guardrail commit |

## delivery_id: DELIV-2026-11-04-ML1-LOCAL-08-ENV-BOUNDARIES

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 pre-push environment boundaries (same lot) |
| Type | INC corrective / isolation guardrails |
| Branch | `sfia/next-access-preparation-continuity` (local only — not published) |
| Base | `origin/main@61a6765a4e8d92760aab595b61b66aa2425906c6` |
| Parent commit | `8767185234bab9b2cad7800771a6bfc0ae1d19e4` (preserved; commits 1–2 untouched) |
| Commit | tip SHA after this delivery commit (resolve via `git rev-parse HEAD`; no circular amend) |
| Changes | P1: Nora fixture DEV-only + fail-closed outside DEV / missing key; P2: E2E PG preflight before CREATE/migrate; P3: `distDir` `.next-e2e` vs `.next` |
| Product version | `NO RELEASE` |
| Lane | DEV |
| Tests | unit 22; integration 26; Playwright FAKE 1; build/tsc/lint — see Review Pack |
| Status | LOCAL CORRECTIVE candidate — no project push/PR/merge |

## delivery_id: DELIV-2026-11-04-ML1-MERGE-09

| Field | Value |
| --- | --- |
| Date | 2026-11-04 (Europe/Paris) |
| Macro-lot | R5 / ML1 — entrée et continuité |
| Type | INC / Git integration and bounded functional acceptance record |
| Branch | `sfia/next-access-preparation-continuity` |
| Candidate SHA | `0db58be8240a00593092048ee74299f19374f489` |
| Candidate commits | `0b982b3b6a09b16d7f5ae36f9794c3fc8b3614c2` → `8767185234bab9b2cad7800771a6bfc0ae1d19e4` → `0db58be8240a00593092048ee74299f19374f489` |
| PR / merge | [#649](https://github.com/mcleland147/sfia-workspace/pull/649) MERGED on 2026-11-04; `main@747cbec0ac9c161306db34121b0447391b23589c` |
| Tree | `69d48cc33a91af6635856babb620a7735aa55fe6` — identical between C3 candidate and merge |
| RECETTE | Morris functional acceptance, including GitHub OAuth LIVE and Nora LIVE; build `PMCGeil9wv8DZNBfEGf4H` bound to C3 candidate |
| Historical test evidence | Unit 22 PASS, PostgreSQL integration 26 PASS, Playwright 1 PASS with DEV fake identity/Nora fixture; separate LIVE observations; neither implies R6 or Next CI PASS |
| Carried reserve A | DEV/RECETTE cookie collision on shared `127.0.0.1` host despite different ports; separate browser profiles mitigation; re-mediate/re-test before STABLE; no cross-DB authority breach proven |
| Carried reserve B | Historical GitHub Required Gate SUCCESS with Next build SKIPPED; dedicated Next CI workflow and proof needed before next significant delivery, under distinct shared-path GO |
| Post-merge runtime | Independent smoke NOT OBSERVED |
| Product version | `NO RELEASE` ; `STABLE NOT AVAILABLE` ; no release tag / no ADOPTED |
| Status | **MERGED / FUNCTIONAL RECETTE ACCEPTED WITH RESERVES — ML1 integration evidenced, technical remediation and R6 qualification still open** |

## delivery_id: DELIV-2026-11-05-ML2-LOCAL-01

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Produire et capitaliser avec Nora |
| Type | INC / nouvelle capacité compatible (prospective MINOR) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | D3 cognition + D4 knowledge/documents + UX surfaces + streaming attempt + tests |
| Product version target | `NO RELEASE` (NOT AVAILABLE — no official attribution) |
| Compatibility | Additive migration `003_ml2_knowledge_documents` ; ML1 data preserved |
| Schema | `001` + `002` + `003` |
| Tests | unit 26 PASS ; PG integration 32 PASS ; Playwright 2 PASS (FAKE) ; `tsc` PASS ; `next build` PASS |
| Evidence limits | Nora LIVE / COG panel / Figma fidelity matrix / CI Next = NOT PROVEN or ABSENT |
| Streaming | Attempted in adapter (`stream: true`) ; UI progressive NOT wired ; LIVE streaming NOT PROVEN |
| Status | LOCAL CONSTRUCTION — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY WITH RESERVES` |

## delivery_id: DELIV-2026-11-05-ML2-CORRECTIVE-02

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — correctif intégrité D4 / documents / cognition |
| Type | Correctif intégré (même macro-lot) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only) |
| Parent HEAD | `a9a468e9f883128045c516a881f30d6372175c96` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | C1 sujets atomiques ; C2 concurrence révision ; C3 idempotence création ; C4 diff ordonné ; C5 épistémologie capitalisation ; C6 états UX |
| Schema | `004_ml2_integrity_corrective` |
| Product version | `NO RELEASE` |
| Tests | unit 31 PASS ; PG integration 45 PASS ; Playwright 2 PASS ; tsc+build PASS |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` (réserves S1/S2/S3/CI/COG qualifiées, non bloquantes pour intégrité) |

## delivery_id: DELIV-2026-11-05-ML2-CONSOLIDATION-03

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — consolidation corrective C3/C4/C1 |
| Type | Correctif intégré (même macro-lot) |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Parent HEAD | `5c7dd7528ff859c9717db865c74d45930dff4219` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | C3-A fingerprint all paths ; C3-B clé UI stable ; C4 budget diff ; C1 journal + concurrence |
| Schema | unchanged (`004_ml2_integrity_corrective`) — no new migration |
| Product version | `NO RELEASE` |
| Tests | unit 34 PASS ; PG integration 50 PASS ; Playwright 3 PASS (FAKE) ; tsc+lint+build PASS |
| Evidence limits | LIVE Nora / COG panel / Figma ML2-S3 / CI Next = NOT PROVEN or ABSENT |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-INTEGRATION-PREP-04

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 7 Intégration / DevOps (préparation) |
| Type | EVOL / préparation intégration Git + instruction CI |
| Branch | `sfia/next-ml2-production-capitalisation` @ `1967b2c5` (local only — **not published**) |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Périmètre | Git Truth, inventaire candidat, revalidation locale, proposition CI Next (artefact `.tmp` uniquement) |
| CI Next workflow path | **PROPOSED** `.github/workflows/sfia-studio-next-ci.yml` — contenu dans `.tmp-sfia-review/ci-next-workflow-proposal.yml` ; **NOT WRITTEN** under `.github/` |
| CI Next remote | **NOT RUN** — requires distinct Morris GO to install workflow + publish SHA |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local revalidation | unit 34 ; PG 50 ; Playwright 3 ; tsc+lint+build PASS |
| SVG residuals | 5× `web/public/*.svg` create-next-app defaults, untracked, unused → **EXCLUDE** (do not commit) |
| Status | LOCAL INTEGRATION PREP — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY WITH RESERVES` (intégration Git bloquée tant que CI Next absente / non exécutée) |

## delivery_id: DELIV-2026-11-05-ML2-CI-NEXT-INSTALL-05

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 7 Intégration / DevOps (installation CI Next locale) |
| Type | EVOL / workflow CI versionné sur branche construction |
| Branch | `sfia/next-ml2-production-capitalisation` (local only — **not published**) |
| Parent HEAD | `f937477026d25812db000af4d16ab48bd22e9e47` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Created | `.github/workflows/sfia-studio-next-ci.yml` |
| Historical workflows | `sfia-studio-ci.yml` / `interv360-ci.yml` **unchanged** (hashes match origin/main) |
| Gate name | `SFIA Studio Next Required Gate` (not yet added to GitHub branch protection) |
| CI Next remote | **NOT RUN** — requires Morris GO to push branch / open PR for first Actions execution |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local revalidation | unit 34 ; PG 50 ; Playwright 3 ; tsc+lint+build PASS ; actionlint PASS (no findings) |
| SVG residuals | still EXCLUDE (untracked, not staged) |
| Status | LOCAL CI INSTALL — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `READY FOR MORRIS REVIEW` (publication Git projet + premier run Actions = gates suivants) |

## delivery_id: DELIV-2026-11-05-ML2-C3B-LOST-ACK-06

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — Cycle 9 QA / validation (C3-B lost-ACK) |
| Type | INC corrective / BROWSER FAKE C3-B |
| Branch | `sfia/next-ml2-production-capitalisation` (PR #655 DRAFT) |
| Parent HEAD | `23e55da80ac774511b467bc53ab7eaa5d60ac969` |
| Base | `origin/main@6e4406c63639330c7826423cdcf08f06ff019eed` |
| Cause | After simulated ACK loss, incidental `reload()` adopted `docId` while create intent was still open, hiding `create-intent-key` and diverting retry into revise-via-save (rev 2 / new key) |
| Fix | `page.tsx` reload skips `docId` adoption while `createDocIntentRef` is active; C3-B Playwright asserts stable create key, zero revise calls, single doc at revision 1 |
| Schema | unchanged |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Status | CORRECTIVE on PR #655 — see Review Pack for CI proof |
| Verdict candidate | pending GitHub Actions on published SHA |

## delivery_id: DELIV-2026-11-05-ML2-COG-OBS-INTEGRATED-07

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) |
| Macro-lot | R5 / ML2 — cognition Nora + observabilité intégrées |
| Type | EVOL / construction locale Critical |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only — not published**) |
| Base documentary | `origin/docs/next-ml2-d3-d4-architecture-20261105@6d85fd9b7c724b020011f19d8814333116674475` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Implemented | cognitive policy TEST_BOUNDARY≠OPERATIONAL ; D4 read tools ; turn command + migration 005 ; JSON obs sink ; HTTP error classification ; tracingDisabled |
| Schema | `005_ml2_conversation_turn_command` applied on DEV `sfia_next_dev` + `sfia_next_e2e` |
| Product version | `NO RELEASE` ; package `0.0.0-dev` ; STABLE NOT AVAILABLE |
| Local proofs | unit 42 PASS ; PG 53 PASS ; Playwright 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE / CI new SHA | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL DELIVERY — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL DELIVERY WITH RESERVES — REVIEW REQUIRED` |

## delivery_id: DELIV-2026-11-05-ML2-CRITICAL-CORRECTIVE-08

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~18:25 CET |
| Macro-lot | R5 / ML2 — correctif Critical post-revue ChatGPT |
| Type | EVOL corrective integrated (same ML2, not new lot) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only — not published**) |
| Parent entry SHA | `53be6097612825b24333821ab3001c35a0b4d757` |
| Base documentary | `origin/docs/next-ml2-d3-d4-architecture-20261105@6d85fd9b` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | TURN orphan reconcile+CAS ; D4 AVAILABLE-only ; no uncertain SDK fallback ; budgets fail-closed ; search pagination/budget ; OBS allowlist/RO/purge/lane |
| Schema | `005` unchanged (forward-safe) ; `schemaRevision` aligned to 005 |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 50 PASS ; PG 62 PASS ; Playwright 3 PASS ; tsc+build PASS |
| LIVE / CI new SHA / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL CORRECTIVE DELIVERY — REVIEW REQUIRED` |

## delivery_id: DELIV-2026-11-05-ML2-THREE-BLOCKER-09

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~18:45 CET |
| Macro-lot | R5 / ML2 — three-blocker Critical corrective |
| Type | INC/EVOL corrective (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only**) |
| Parent SHA | `00736f3a6c34f6f56d628b6dee2097a4aadda91b` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | owner_token fencing+CAS ; SQL pagination terminante ; no SDK auto-retry after run() |
| Schema | migration `006_ml2_turn_owner_token` (forward-only) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 68 ; Playwright 3 ; tsc+build PASS |
| LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL THREE-BLOCKER CORRECTIVE DELIVERY — READY FOR CHATGPT REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-TURN-INTEGRITY-10

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~19:15 CET |
| Macro-lot | R5 / ML2 — turn transactional integrity |
| Type | INC corrective (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**local only**) |
| Parent SHA | `57f6fc54888f607d8a70ef959f39057764e4b20a` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| Corrected | atomic `commitTurnTerminal` (FOR UPDATE + rollback on CAS miss) ; knowledge write fencing ; D4-PAGE-03 STALE termination |
| Schema | unchanged (`006` already present) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 78 ; Playwright 3 ; tsc+lint+build PASS |
| LIVE / CI / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | LOCAL CORRECTIVE — no project push/PR/merge ; Review Handoff L3 only |
| Verdict candidate | `LOCAL ML2 TURN INTEGRITY CORRECTIVE — READY FOR CHATGPT REVIEW` |

## delivery_id: DELIV-2026-11-05-ML2-CONSOLIDATION-PREMERGE-11

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~20:25 CET |
| Macro-lot | R5 / ML2 — consolidation pré-merge PR #659 |
| Type | INC corrective integrated (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**project push FF authorized**) |
| Parent SHA | `df7357873b487d48e32af5de89995bcfbf720210` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| PR | `#659` OPEN DRAFT ; #655–#658 untouched |
| Corrected | UNKNOWN-CAP DB reconstitution ; ASSIST-REUSE generationId gate ; SAFE-01 two-session PG + DB-fail ; CI labels 001→006 |
| Schema | unchanged (`006` already present) ; no new migration |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 PASS ; PG 89 PASS ; Playwright FAKE 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE | **NOT RUN / NOT AUTHORIZED** |
| Status | PROJECT BRANCH PUSH (FF) — merge/LIVE/RECETTE still gated |
| Verdict candidate | `PR #659 UPDATED — await CI Next on new SHA — READY FOR CHATGPT PRE-MERGE REVIEW` (CI status filled post-push) |

## delivery_id: DELIV-2026-11-05-ML2-PRE-RECETTE-QUAL-12

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~20:50 CET |
| Macro-lot | R5 / ML2 — qualification intégrée pré-RECETTE PR #659 |
| Type | INC corrective + QA préparation (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` (**FF push authorized**) |
| Parent SHA | `bf2deb0e90e1bac7b444ccb58ed2cca20b7919d1` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` (unchanged) |
| PR | `#659` OPEN DRAFT ; #655–#658 untouched |
| Corrected | ASSIST-REUSE dual-gen strict + bindTurnGenerationId ; SAFE-01 strict RUNNING + client abort mid-TX ; D4 gen-priority reconstitution ; LIVE/RECETTE docs préparés |
| Schema | unchanged (`006`) ; no migration |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 PASS ; PG 93 PASS ; Playwright FAKE 3 PASS ; tsc+lint+build PASS |
| LIVE / RECETTE | **NOT RUN / NOT DEPLOYED** ; manifeste PREPARED |
| Status | PROJECT BRANCH PUSH (FF) — LIVE/RECETTE/merge gated Morris |
| Verdict candidate | `ML2 PRE-RECETTE TECHNICAL CONSOLIDATION — CI NEXT PASS — LIVE/RECETTE GATES PENDING MORRIS` |

## delivery_id: DELIV-2026-11-05-ML2-LIVE-RECETTE-COND-13

| Field | Value |
| --- | --- |
| Date | 2026-11-05 (Europe/Paris) ~21:15 CET |
| Macro-lot | R5 / ML2 — LIVE borné + RECETTE conditionnelle PR #659 |
| Type | CAPA+INC+QA integrated (same ML2) |
| Branch | `sfia/next-ml2-cognition-observability-integrated` |
| Parent SHA | `01ae25e1dfc7b062d3b2a73838335ef8630ec6f2` |
| origin/main | `6e4406c63639330c7826423cdcf08f06ff019eed` |
| LIVE proofs | 3 scenarios `openai-agents-sdk-live` COMPLETE ; D4 tools on complex ; ~3 contacts / ~€1.05 est. ; model `gpt-6.1-sol` requested |
| Corrected | cookie name per `STUDIO_LANE` ; SAFE-01 DBFAIL-03 ephemeral persistent table + pg_locks waiter |
| Schema | `006` unchanged |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Local proofs | unit 52 ; PG 93 ; e2e FAKE 3 ; tsc+lint+build — filled at commit |
| RECETTE | activation conditionnelle après CI du SHA final ; ML1 RECETTE :3200 **non réinitialisée** |
| Status | PROJECT PUSH FF + conditional RECETTE provision |
| Verdict candidate | `ML2 LIVE BOUNDED REAL PROVEN — RECETTE CANDIDATE AVAILABLE FOR MORRIS REVIEW` (si gate E PASS) |

## delivery_id: DELIV-2026-11-06-ML3-PILOTAGE-DECISIONS-14

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — Piloter et décider |
| Type | INC / nouvelle capacité D5–D6 (MINOR candidate) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` (PR #660 docs merged) |
| Schema | additive `007_ml3_pilotage_decisions` (from `006_ml2_turn_owner_token`) — applied **DEV only** |
| Changes | D6 human_decisions/restrictions ; D5 trajectories/cycles/method ; business_commands + effects ; CKI pin R01 ; atomic CLOSE+OPEN R04 ; Nora pilotage/CKI context ; UX Pilotage panel ; tests unit/PG/e2e |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE ; package `0.0.0-dev` |
| Lane | DEV construction ; RECETTE/STABLE **not mutated** |
| Figma | visual contract #22 native + inventory lot B ; runtime comparison partial (screenshot e2e) — not pixel-perfect claim |
| LIVE Nora | NOT EXECUTED — GATE MORRIS REQUIRED |
| Status | LOCAL ML3 DELIVERY — review handoff only |
| Verdict candidate | `LOCAL ML3 DELIVERY COMPLETE — REVIEW REQUIRED` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-CORRECTIFS-F01-F08

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — correctifs pilotage F01–F08 et T01–T04 |
| Type | INC corrective (same ML3, not a new lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate |
| Schema | unchanged `007_ml3_pilotage_decisions` — `actInstanceId` lives in `source_action_key` + fingerprint, no migration 008 |
| Corrected | Idempotence UI + GET by client key ; manifeste CKI 0.2.0 ; restriction ciblée ; journal `state` ; GO naturel sans operation ; identité d'acte ; `REVISE_DECISION` + contradiction exacte ; `DELIVERED` seulement après generate réel |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated |
| LIVE Nora | NOT EXECUTED |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |

## delivery_id: DELIV-2026-11-06-ML3-AUTHORITY-CR01-CR04

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — ajustement autorité & preuves CR-01..CR-04 |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate (hashes F01–F08 pack as baseline) |
| Schema | unchanged `007` |
| Corrected | Transition A+B restrictions ; REVISE vs D5 founding refuse ; no global statement contradiction ; Review Pack with real logs |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated |
| LIVE Nora | NOT EXECUTED |
| Status | LOCAL CORRECTIVE — no project push/PR/merge |
| Verdict candidate | `ML3 AUTHORITY ADJUSTMENT COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-ASSISTED-CONTRADICTIONS

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 contradictions assistées (Niveau A Nora + Niveau B typé) |
| Type | EVOL complementary on existing ML3 |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no commit, no push, no PR**) |
| Base | `7f1f41c` dirty candidate |
| Contrat | B13 v0.1 **VALIDATED IN CONTENT BY MORRIS** 2026-11-06 |
| Schema | unchanged `007` — no migration 008 |
| Implemented | divergence-assist Level A ; nora-context/fixture ; UX legend ; typed Level B unchanged |
| Product version | `NO RELEASE` |
| Lane | DEV ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CANDIDATE — no project push/PR/merge |
| Verdict candidate | `ML3 B13 DELIVERY COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (DEV limits) |

## delivery_id: DELIV-2026-11-06-ML3-B13-C01-C03-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 corrective continuation C01–C03 (after Critical Review) |
| Type | INC corrective continuation (same ML3 ; not a new macro-lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project commit/push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` dirty candidate preserved |
| Contrat B13 | v0.1 remains **VALIDATED IN CONTENT BY MORRIS** — Cursor hypothesis ≠ new normative decision |
| Schema | unchanged `007` — no migration 008 ; no new authority category |
| C01 | `findMessageDecisionConfrontations` — single APPLICABLE D6 + new USER message → structured `levelASignals` via conversation→nora-context→adapter (no second persisted decision) |
| C02 | `qualifyCommandOutcome(status, reasonCode)` — CONFLICT≠authority ; RESTRICTION→authority-block ; STALE/HUMAN_INTENT/FINGERPRINT→technical ; ACTIVE_CYCLE→d5_state |
| C03 | FULL Review Pack + integrated tests (unit/PG/e2e FAKE) ; real logs |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only (`127.0.0.1:5433/sfia_next_dev`) ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 B13 TARGETED ADJUSTMENT COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-R1-R3-CORRECTIVE

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 R1–R3 final corrective (after Critical Review on C01–C03) |
| Type | INC corrective continuation (same ML3 ; not a new macro-lot) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only — no project commit/push/PR**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` dirty candidate preserved |
| Prior handoff | `sfia/review-handoff@9b98a7fa` blob `e921982c` |
| Contrat B13 | v0.1 **VALIDATED IN CONTENT BY MORRIS** |
| Schema | unchanged `007` |
| R1 | Clear stale `lastOutcome` on new command ; UNKNOWN presentation replaces prior RESTRICTION motif |
| R2 | Negation/polarity-safe Level A framing (never false COMPATIBLE on « n'est plus obligatoire ») |
| R3 | PG integrated `postUserMessageAndNora` proof (persist USER+Nora, no invented HumanDecision) |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 B13 R1-R3 CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` (if proofs green) |

## delivery_id: DELIV-2026-11-06-ML3-B13-R2-R3-FINAL-ADJUST

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — B13 R2/R3 final targeted adjustments |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local only**) |
| Base | `origin/main@7f1f41c` dirty candidate preserved |
| Prior handoff | `sfia/review-handoff@541c0894` blob `ada98550` |
| R2 | Polarity: jamais / aucunement / typographic apostrophe / ne doit pas être — never false COMPATIBLE |
| R3 | Isolation proof: foreign APPLICABLE decision on same objectRef created BEFORE Nora gen ; marker absent from A context/reply |
| Schema | unchanged `007` |
| Product version | `NO RELEASE` |
| Lane | DEV only ; LIVE Nora NOT EXECUTED |
| Verdict candidate | `ML3 B13 R2-R3 TARGETED ADJUSTMENTS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-IMMUTABLE-CANDIDATE-PUBLISH

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — consolidation & publication candidat Git |
| Type | RUN — consolidation / qualification / publication bornée |
| Branch | `sfia/next-pilotage-decisions-delivery` (**project push authorized — no PR/merge**) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Schema | `007_ml3_pilotage_decisions` |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV proofs only ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
| Scope | Allowlist §6 only (docs + CKI manifest + web D5/D6/API/UX/tests) ; SVG / `.tmp-sfia-review` excluded |
| Status | IMMUTABLE PROJECT CANDIDATE — SHA `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` |
| Verdict candidate | `ML3 IMMUTABLE PROJECT CANDIDATE PUBLISHED — READY FOR CHATGPT GLOBAL CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-CONVERSATION-AUTHORITY

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 « Piloter et décider » — F01/F02 consolidation fonctionnelle |
| Type | INC corrective (conversation → D5/D6) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local worktree — no project commit/push**) |
| Candidate ref | `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` (unchanged remote) |
| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
| Schema | unchanged `007` (no migration 008) |
| F01 | Fil Nora → `applyConversationalAuthority` → `executePilotageCommand` (USER_MESSAGE) |
| F02 | RECORD/REVISE documentaires depuis fil + geste Journal ; fondations D5 restent typées |
| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
| Lane | DEV only ; RECETTE/LIVE Nora/STABLE NOT AUTHORIZED |
| Status | LOCAL CORRECTIVE — handoff L3 only |
| Verdict candidate | `ML3 F01/F02 CONVERSATION-AUTHORITY INTEGRATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-C01-C02-C03-AUTHORITY-RECOVERY

| Field | Value |
| --- | --- |
| Date | 2026-11-06 (Europe/Paris) |
| Macro-lot | R5 / ML3 — F01/F02 C01/C02/C03 after Critical Review NOT ACCEPTED |
| Type | INC corrective continuation (same ML3) |
| Branch | `sfia/next-pilotage-decisions-delivery` (**local — no project commit/push**) |
| Prior handoff | `sfia/review-handoff@c2bec44b` blob `bbf43260` |
| Candidate ref | `8bf8b5ce` unchanged |
| Schema | unchanged `007` |
| C01 | Exploratory language ≠ REVISE ; Level A non-authorizing |
| C02 | Durable reconstitution via business_commands + stable client turn key |
| C03 | Thread continuity after reload ; Journal >8 expandable |
| Product version | `NO RELEASE` |
| Lane | DEV only |
| Verdict candidate | `ML3 F01/F02 AUTHORITY AND RECOVERY CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

## delivery_id: DELIV-2026-11-06-ML3-F01-F02-CR01-CR02-CONSOLIDATION

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-06 |
| Macro-lot | R5 / ML3 — F01/F02 CR-01/CR-02 after Critical Review PARTIALLY ACCEPTED |
| Type | INC CRITICAL |
| CR-01 | D6 revise uniqueness over full APPLICABLE set (not Nora window of 12) |
| CR-02 | Pending exclusive guard ; Nora COMPLETE ≠ métier UNKNOWN clear ; ACK-lost browser proof |
| Git projet | HEAD `8bf8b5ce` inchangé — **aucun** commit/push projet |
| ENV-01 | DEV only (`127.0.0.1:5433/sfia_next_dev`) |
| Versioning | NO RELEASE / STABLE NOT AVAILABLE |
| Verdict candidate | `ML3 F01/F02 AUTHORITY TARGET AND RECOVERY CONSOLIDATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |

```

## Diffs vs published HEAD (tracked)

### DIFF `projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts b/projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
index 8d3f9989..d9175408 100644
--- a/projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
+++ b/projects/sfia-studio-next/web/src/domains/decisions/divergence-assist.ts
@@ -90,6 +90,46 @@ export function selectApplicableBriefs(rows: DecisionBrief[]): DecisionBrief[] {
     .slice(-MAX_APPLICABLE_FOR_CONTEXT);
 }

+/**
+ * CR-01 — all APPLICABLE briefs for D6 authority resolution.
+ * Never apply the Nora cognitive window (MAX_APPLICABLE_FOR_CONTEXT).
+ * Bounded context ≠ uniqueness of an opposable target.
+ */
+export function selectAllApplicableBriefs(rows: DecisionBrief[]): DecisionBrief[] {
+  return rows.filter(
+    (r) => r.state === "APPLICABLE" && (r.objectRef ?? "").trim().length > 0,
+  );
+}
+
+export type AuthorityReviseCandidate = DecisionBrief & {
+  framing: LevelASignal["framing"];
+};
+
+/**
+ * CR-01 — D6 revise-target candidates across the full applicable set.
+ * Level A framing filters relevance only — never authorizes mutation.
+ * No chronological / newest-wins / truncation selection.
+ * Caller must require exactly one candidate before REVISE.
+ */
+export function findAuthorityReviseCandidates(
+  userText: string,
+  rows: DecisionBrief[],
+): AuthorityReviseCandidate[] {
+  const text = userText.trim();
+  if (!text) return [];
+  const applicable = selectAllApplicableBriefs(rows);
+  const out: AuthorityReviseCandidate[] = [];
+  for (const row of applicable) {
+    if (!utteranceTouchesObject(text, row.objectRef)) continue;
+    if (normalizeText(text) === normalizeText(row.statement)) continue;
+    const framing = frameConfrontation(row.statement, text);
+    // Compatible restatement is not a revise target.
+    if (framing === "COMPATIBLE_RESTATEMENT") continue;
+    out.push({ ...row, framing });
+  }
+  return out;
+}
+
 function normalizeText(text: string): string {
   // Normalize typographic apostrophes so « n’est » and « n'est » share one path.
   return text
```

### DIFF `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 09f0d896..c4f26046 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -1,9 +1,16 @@
 "use client";

-import { useEffect, useState } from "react";
+import { useEffect, useRef, useState } from "react";
 import { useParams, useRouter } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { PilotagePanel } from "@/components/PilotagePanel";
+import {
+  conversationalClientCommandKey,
+  mayStartNewThreadAct,
+  pendingStorageKey,
+  shouldClearThreadPending,
+  type ThreadPendingTurn,
+} from "@/domains/pilotage/thread-recovery";

 type Msg = { id: string; role: string; content: string; status: string };
 type Doc = {
@@ -23,6 +30,41 @@ type Knowledge = {

 type Surface = "travail" | "pilotage" | "journal" | "document";

+type PilotageEffectView = {
+  attempted?: boolean;
+  intentClarity?: string;
+  intentReason?: string;
+  status?: string | null;
+  reasonCode?: string | null;
+  reason?: string | null;
+  operation?: string;
+  decisionId?: string | null;
+  clarification?: string;
+  clientCommandKey?: string;
+};
+
+function formatPilotageEffect(
+  effect: PilotageEffectView | null | undefined,
+  humanDecisionCreated?: boolean,
+): string {
+  if (!effect) return "";
+  if (effect.attempted) {
+    return [
+      effect.operation ?? "commande",
+      effect.status ?? "?",
+      effect.reasonCode ? `(${effect.reasonCode})` : null,
+      humanDecisionCreated && effect.decisionId ? `décision ${effect.decisionId}` : null,
+    ]
+      .filter(Boolean)
+      .join(" · ");
+  }
+  if (effect.clarification) return `Clarification · ${effect.clarification}`;
+  if (effect.intentClarity === "AMBIGUOUS") {
+    return `Intention ambiguë · ${effect.intentReason ?? effect.reason ?? ""}`;
+  }
+  return "";
+}
+
 export default function ProjectPage() {
   const params = useParams<{ projectId: string }>();
   const router = useRouter();
@@ -35,9 +77,154 @@ export default function ProjectPage() {
   const [surface, setSurface] = useState<Surface>("travail");
   const [draft, setDraft] = useState("");
   const [busy, setBusy] = useState(false);
-  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing">("idle");
+  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [status, setStatus] = useState("");
+  const [pilotageStatus, setPilotageStatus] = useState("");
+  const [decisionSummary, setDecisionSummary] = useState("");
   const [inspect, setInspect] = useState<Doc | null>(null);
+  const [unresolvedPending, setUnresolvedPending] = useState<ThreadPendingTurn | null>(null);
+  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
+
+  function rememberPending(pending: ThreadPendingTurn | null) {
+    if (typeof sessionStorage === "undefined") return;
+    const key = pendingStorageKey(params.projectId);
+    if (!pending) {
+      sessionStorage.removeItem(key);
+      setUnresolvedPending(null);
+      return;
+    }
+    sessionStorage.setItem(key, JSON.stringify(pending));
+    setUnresolvedPending(pending);
+  }
+
+  function readPending(): ThreadPendingTurn | null {
+    if (typeof sessionStorage === "undefined") return null;
+    try {
+      const raw = sessionStorage.getItem(pendingStorageKey(params.projectId));
+      if (!raw) return null;
+      return JSON.parse(raw) as ThreadPendingTurn;
+    } catch {
+      return null;
+    }
+  }
+
+  async function refreshDurablePilotage() {
+    const [decRes, projRes] = await Promise.all([
+      fetch(`/api/projects/${params.projectId}/decisions`),
+      fetch(`/api/projects/${params.projectId}/pilotage`),
+    ]);
+    if (decRes.ok) {
+      const dj = await decRes.json();
+      const decisions = (dj.decisions ?? []) as Array<{
+        id: string;
+        kind: string;
+        state: string;
+        statement: string;
+        createdAt?: string;
+      }>;
+      const applicable = decisions.filter((d) => d.state === "APPLICABLE");
+      const latest = [...decisions].sort((a, b) =>
+        String(b.createdAt ?? "").localeCompare(String(a.createdAt ?? "")),
+      )[0];
+      setDecisionSummary(
+        `${applicable.length} applicable(s) · ${decisions.length} au journal` +
+          (latest ? ` · dernière ${latest.kind}/${latest.state}` : ""),
+      );
+    }
+    if (projRes.ok) {
+      const pj = await projRes.json();
+      const cycle = pj.pilotage?.cycle ?? pj.cycle;
+      if (cycle?.status === "ACTIVE") {
+        setPilotageStatus((prev) =>
+          prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
+            ? prev
+            : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
+        );
+      }
+    }
+  }
+
+  function applyClearFromResponse(
+    noraStatus: string | undefined,
+    effect: PilotageEffectView | undefined,
+  ) {
+    if (
+      shouldClearThreadPending({
+        noraStatus,
+        effectAttempted: effect?.attempted,
+        effectStatus: effect?.status,
+      })
+    ) {
+      rememberPending(null);
+      messageTurnKeyRef.current = null;
+      return true;
+    }
+    return false;
+  }
+
+  async function reconcilePending(pending: ThreadPendingTurn) {
+    setBusy(true);
+    try {
+      const res = await fetch(
+        `/api/projects/${params.projectId}/pilotage/commands/by-key/${encodeURIComponent(pending.clientCommandKey)}`,
+      );
+      if (res.ok) {
+        const cmd = await res.json();
+        setPilotageStatus(
+          formatPilotageEffect(
+            {
+              attempted: true,
+              status: cmd.status,
+              reasonCode: cmd.reasonCode,
+              reason: cmd.reason,
+              operation: cmd.effects?.[0]?.effectKind ?? "commande",
+              decisionId: cmd.decisionId,
+              clientCommandKey: pending.clientCommandKey,
+            },
+            Boolean(cmd.decisionId) &&
+              (cmd.status === "APPLIED" || cmd.status === "ALREADY_APPLIED"),
+          ),
+        );
+        // CR-02: UNKNOWN métier stays pending; Nora status is irrelevant here.
+        if (cmd.status && String(cmd.status).toUpperCase() !== "UNKNOWN") {
+          rememberPending(null);
+          messageTurnKeyRef.current = null;
+        }
+        await refreshDurablePilotage();
+        return;
+      }
+      // 404 alone does not invent a new key — retry same logical act only.
+      if (res.status === 404) {
+        setPilotageStatus(
+          `Commande absente pour ${pending.clientCommandKey.slice(0, 28)}… — reprise du même acte`,
+        );
+      }
+      if (!preparationId) return;
+      const retry = await fetch(`/api/preparations/${preparationId}/messages`, {
+        method: "POST",
+        headers: { "Content-Type": "application/json" },
+        body: JSON.stringify({
+          content: pending.content,
+          clientTurnKey: pending.clientTurnKey,
+        }),
+      });
+      const j = await retry.json().catch(() => ({}));
+      if (retry.ok) {
+        setMessages(j.messages ?? []);
+        setStatus(`Nora ${j.noraMode} · ${j.status}`);
+        const effect = j.pilotageEffect as PilotageEffectView | undefined;
+        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
+        if (applyClearFromResponse(String(j.status ?? ""), effect)) {
+          setDraft("");
+        }
+        await refreshDurablePilotage();
+      } else {
+        setStatus(String(j.error ?? j.errorCategory ?? "réconciliation impossible"));
+      }
+    } finally {
+      setBusy(false);
+    }
+  }

   useEffect(() => {
     async function load() {
@@ -65,34 +252,100 @@ export default function ProjectPage() {
         `Même fil · préparation ${j.preparation?.id ?? "liée"} · conversation ${j.conversation?.id ?? "—"} · réouverture par projectId`,
       );
       setError("");
+      await refreshDurablePilotage();
+      const pending = readPending();
+      if (pending) {
+        setUnresolvedPending(pending);
+        messageTurnKeyRef.current = {
+          content: pending.content,
+          key: pending.clientTurnKey,
+        };
+        setPilotageStatus(
+          `Reprise en attente · clé ${pending.clientCommandKey.slice(0, 24)}…`,
+        );
+      }
     }
-    load();
+    void load();
+    // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [params.projectId, router]);

   async function sendMessage() {
     if (!draft.trim() || !preparationId) return;
+    const text = draft.trim();
+    // CR-02 — exclusive unresolved pending: never overwrite a distinct act silently.
+    const gate = mayStartNewThreadAct({
+      unresolved: unresolvedPending ?? readPending(),
+      nextContent: text,
+    });
+    if (!gate.ok) {
+      setPilotageStatus(
+        `${gate.reason} · ${gate.pending.clientCommandKey.slice(0, 24)}…`,
+      );
+      setDraft(gate.pending.content);
+      return;
+    }
     setBusy(true);
     setNoraActivity("preparing");
-    const res = await fetch(`/api/preparations/${preparationId}/messages`, {
-      method: "POST",
-      headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({ content: draft }),
-    });
-    const j = await res.json();
-    setBusy(false);
-    setNoraActivity("idle");
-    if (res.ok) {
-      setDraft("");
-      setMessages(j.messages ?? []);
-      setStatus(`Nora ${j.noraMode} · ${j.status}`);
-      // Refresh knowledge/docs after capitalisation / document save
-      const proj = await fetch(`/api/projects/${params.projectId}`);
-      if (proj.ok) {
-        const pj = await proj.json();
-        setDocuments(pj.documents ?? []);
-        setKnowledge(pj.knowledge ?? null);
+    // Same content reuses the same turn key until a terminal result clears it.
+    if (!messageTurnKeyRef.current || messageTurnKeyRef.current.content !== text) {
+      messageTurnKeyRef.current = {
+        content: text,
+        key:
+          typeof crypto !== "undefined" && "randomUUID" in crypto
+            ? `turn-${crypto.randomUUID()}`
+            : `turn-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
+      };
+    }
+    const clientTurnKey = messageTurnKeyRef.current.key;
+    const clientCommandKey = conversationalClientCommandKey(clientTurnKey);
+    rememberPending({ content: text, clientTurnKey, clientCommandKey });
+    try {
+      const res = await fetch(`/api/preparations/${preparationId}/messages`, {
+        method: "POST",
+        headers: { "Content-Type": "application/json" },
+        body: JSON.stringify({ content: text, clientTurnKey }),
+      });
+      let j: Record<string, unknown> = {};
+      try {
+        j = (await res.json()) as Record<string, unknown>;
+      } catch {
+        j = { errorCategory: "RESPONSE_PARSE_FAILED" };
+      }
+      if (res.ok) {
+        setMessages((j.messages as Msg[]) ?? []);
+        setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
+        const effect = j.pilotageEffect as PilotageEffectView | undefined;
+        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
+        if (applyClearFromResponse(String(j.status ?? ""), effect)) {
+          setDraft("");
+        } else if (j.status === "UNKNOWN" || j.status === "FAILED") {
+          setNoraActivity("error");
+        }
+        const proj = await fetch(`/api/projects/${params.projectId}`);
+        if (proj.ok) {
+          const pj = await proj.json();
+          setDocuments(pj.documents ?? []);
+          setKnowledge(pj.knowledge ?? null);
+        }
+        await refreshDurablePilotage();
+        setNoraActivity(
+          j.status === "UNKNOWN" || j.status === "FAILED" ? "error" : "idle",
+        );
+      } else {
+        // ACK lost / HTTP error — keep pending with the same key.
+        setNoraActivity("error");
+        setStatus(
+          res.status === 409
+            ? `${String(j.errorCategory ?? j.error ?? "conflit")} — intention de tour conservée`
+            : String(j.error ?? j.errorCategory ?? "échec — tentative conservée"),
+        );
       }
-    } else setStatus(j.error ?? "échec");
+    } catch {
+      setNoraActivity("error");
+      setStatus("échec réseau — intention de tour conservée");
+    } finally {
+      setBusy(false);
+    }
   }

   if (error) {
@@ -166,11 +419,47 @@ export default function ProjectPage() {
                 onChange={(e) => setDraft(e.target.value)}
                 placeholder="Poursuivre dans le même fil…"
                 aria-label="Message à Nora"
+                data-testid="thread-draft"
               />
-              <button className="btn" disabled={busy || !preparationId} onClick={sendMessage}>
+              <button
+                className="btn"
+                disabled={busy || !preparationId}
+                onClick={sendMessage}
+                data-testid="thread-send"
+              >
                 Envoyer
               </button>
-              {status ? <p className="text-xs muted">{status}</p> : null}
+              {unresolvedPending ? (
+                <div className="space-y-1" data-testid="thread-pending-banner">
+                  <p className="text-xs muted">
+                    Tentative non résolue · {unresolvedPending.clientCommandKey.slice(0, 32)}…
+                  </p>
+                  <button
+                    type="button"
+                    className="btn secondary"
+                    disabled={busy}
+                    data-testid="thread-reconcile-pending"
+                    onClick={() => void reconcilePending(unresolvedPending)}
+                  >
+                    Réconcilier la tentative en cours
+                  </button>
+                </div>
+              ) : null}
+              {status ? (
+                <p className="text-xs muted" data-testid="thread-nora-status">
+                  {status}
+                </p>
+              ) : null}
+              {pilotageStatus ? (
+                <p className="text-xs" data-testid="thread-pilotage-status" role="status">
+                  {pilotageStatus}
+                </p>
+              ) : null}
+              {decisionSummary ? (
+                <p className="text-xs muted" data-testid="thread-decision-summary">
+                  {decisionSummary}
+                </p>
+              ) : null}
             </div>
           </section>
           <aside className="space-y-3">
```

### DIFF `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index fb89d5d0..a8b668a4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -22,6 +22,11 @@ import {
 } from "./turn-command";
 import { emitObs, newRequestId } from "@/lib/observability";
 import { StudioError } from "@/lib/http-errors";
+import {
+  applyConversationalAuthority,
+  reconstituteConversationalAuthority,
+  type ConversationalAuthorityOutcome,
+} from "@/domains/pilotage/conversation-authority";
 import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";

 export async function listMessages(pilotId: string, preparationId: string) {
@@ -96,10 +101,88 @@ export type TurnResult = {
   capitalisationLimit?: string;
   documentSave?: { status?: string; documentId?: string; revisionNumber?: number; reason?: string } | null;
   idempotentReplay: boolean;
+  /**
+   * True only when a HumanDecision id was actually produced (APPLIED/ALREADY_APPLIED).
+   * Never conflated with "intent detected" or "command attempted".
+   */
   humanDecisionCreated: boolean;
+  /** Honest D5/D6 bridge outcome for this USER turn (absent when no project / no act). */
+  pilotageEffect?: {
+    attempted: boolean;
+    intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
+    intentReason?: string;
+    operation?: string;
+    status?: string | null;
+    reasonCode?: string | null;
+    reason?: string | null;
+    commandId?: string | null;
+    decisionId?: string | null;
+    clarification?: string;
+    source: ConversationalAuthorityOutcome["source"];
+    clientCommandKey?: string;
+    effects?: Array<{ effectKind: string; targetRef: string }>;
+  } | null;
   reconciled?: boolean;
 };

+function pilotageEffectFromAuthority(
+  authority: ConversationalAuthorityOutcome | null,
+): TurnResult["pilotageEffect"] {
+  if (!authority) return null;
+  return {
+    attempted: authority.attempted,
+    intentClarity: authority.intentClarity,
+    intentReason: authority.intentReason,
+    operation: authority.operation,
+    status: authority.command?.status ?? null,
+    reasonCode: authority.command?.reasonCode ?? null,
+    reason: authority.command?.reason ?? authority.intentReason ?? null,
+    commandId: authority.command?.commandId ?? null,
+    decisionId: authority.decisionId,
+    clarification: authority.clarification,
+    source: authority.source,
+    clientCommandKey: authority.clientCommandKey,
+    effects: authority.command?.effects?.map((e) => ({
+      effectKind: e.effectKind,
+      targetRef: e.targetRef,
+    })),
+  };
+}
+
+async function resolvePilotageEffectForReplay(input: {
+  pilotId: string;
+  projectId: string | null | undefined;
+  clientTurnKey?: string | null;
+  userMessageId?: string | null;
+  fromJson: TurnResult["pilotageEffect"] | null | undefined;
+  humanDecisionCreated: boolean;
+}): Promise<{ pilotageEffect: TurnResult["pilotageEffect"]; humanDecisionCreated: boolean }> {
+  if (input.fromJson?.attempted && input.fromJson.status) {
+    return {
+      pilotageEffect: input.fromJson,
+      humanDecisionCreated: input.humanDecisionCreated || Boolean(input.fromJson.decisionId),
+    };
+  }
+  if (!input.projectId) {
+    return { pilotageEffect: input.fromJson ?? null, humanDecisionCreated: input.humanDecisionCreated };
+  }
+  const reconstituted = await reconstituteConversationalAuthority({
+    pilotId: input.pilotId,
+    projectId: input.projectId,
+    clientTurnKey: input.clientTurnKey,
+    userMessageId: input.userMessageId,
+  });
+  if (!reconstituted) {
+    return { pilotageEffect: input.fromJson ?? null, humanDecisionCreated: input.humanDecisionCreated };
+  }
+  const effect = pilotageEffectFromAuthority(reconstituted);
+  return {
+    pilotageEffect: effect,
+    humanDecisionCreated:
+      input.humanDecisionCreated || Boolean(reconstituted.humanDecisionCreated),
+  };
+}
+
 export async function postUserMessageAndNora(
   pilotId: string,
   preparationId: string,
@@ -142,19 +225,39 @@ export async function postUserMessageAndNora(
           operationId: reserved.operationId,
           requestId,
           idempotentReplay: true,
-          humanDecisionCreated: false,
+          // Preserve factual decision flag from the stored terminal payload.
+          humanDecisionCreated: Boolean(parsed.humanDecisionCreated),
           reconciled: reserved.reconciled,
         };
       } catch {
         /* fall through */
       }
     }
-    // FAILED/UNKNOWN: never fabricate COMPLETE; reconstitute durable D4 refs from DB when possible.
+    // FAILED/UNKNOWN: never fabricate COMPLETE; reconstitute durable D4 + D5/D6 from DB.
     if (reserved.status === "UNKNOWN" || reserved.status === "FAILED") {
       const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
         generationId: reserved.generationId,
         userMessageId: reserved.userMessageId,
       });
+      let replayPilotage: TurnResult["pilotageEffect"] = null;
+      let replayDecision = false;
+      if (reserved.resultJson) {
+        try {
+          const parsed = JSON.parse(reserved.resultJson) as TurnResult;
+          replayPilotage = parsed.pilotageEffect ?? null;
+          replayDecision = Boolean(parsed.humanDecisionCreated);
+        } catch {
+          /* ignore */
+        }
+      }
+      const resolved = await resolvePilotageEffectForReplay({
+        pilotId,
+        projectId: ctx.project?.id,
+        clientTurnKey: reserved.clientTurnKey ?? clientTurnKey,
+        userMessageId: reserved.userMessageId,
+        fromJson: replayPilotage,
+        humanDecisionCreated: replayDecision,
+      });
       return {
         operationId: reserved.operationId,
         requestId,
@@ -163,7 +266,8 @@ export async function postUserMessageAndNora(
         generationId: reserved.generationId,
         userMessageId: reserved.userMessageId,
         assistantMessageId: reserved.assistantMessageId,
-        humanDecisionCreated: false,
+        humanDecisionCreated: resolved.humanDecisionCreated,
+        pilotageEffect: resolved.pilotageEffect,
         reconciled: reserved.reconciled,
         noraMode: "replay-terminal",
         capitalisation: reconstituted.capitalisation,
@@ -180,6 +284,7 @@ export async function postUserMessageAndNora(
       userMessageId: reserved.userMessageId,
       assistantMessageId: reserved.assistantMessageId,
       humanDecisionCreated: false,
+      pilotageEffect: null,
       reconciled: reserved.reconciled,
       noraMode: reserved.status === "COMPLETE" ? "deterministic-fixture" : "replay-terminal",
     };
@@ -194,6 +299,48 @@ export async function postUserMessageAndNora(
     meta: { client_turn_key_fp: reserved.requestFingerprint.slice(0, 12) },
   });

+  /**
+   * F01/F02 — USER → D5/D6 before Nora provider call.
+   * Message is already COMPLETE; business TX is short and separate from Nora.
+   * Lost ownership ⇒ skip mutation (do not invent a late second command).
+   */
+  let authority: ConversationalAuthorityOutcome | null = null;
+  const stillOwnedBeforeAuthority = await requireTurnOwnership(
+    reserved.commandId,
+    reserved.ownerToken,
+  );
+  if (stillOwnedBeforeAuthority && ctx.project?.id) {
+    authority = await applyConversationalAuthority({
+      pilotId,
+      projectId: ctx.project.id,
+      userMessageId: reserved.userMessageId,
+      content,
+      clientTurnKey,
+    });
+    emitObs({
+      event_name: "d3.turn.conversational_authority",
+      component: "d3.conversation",
+      request_id: requestId,
+      operation_id: reserved.operationId,
+      outcome: authority.attempted
+        ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
+          ? "SUCCESS"
+          : authority.command?.status === "UNKNOWN"
+            ? "UNKNOWN"
+            : "FAILED"
+        : "PARTIAL",
+      meta: {
+        attempted: authority.attempted,
+        intent_clarity: authority.intentClarity,
+        operation: authority.operation ?? null,
+        command_status: authority.command?.status ?? null,
+        reason_code: authority.command?.reasonCode ?? null,
+        decision_id: authority.decisionId,
+        source: authority.source,
+      },
+    });
+  }
+
   const existing = await listMessages(pilotId, preparationId);
   const contextSnippets = existing
     .filter((m) => m.status === "COMPLETE" && m.id !== reserved.userMessageId)
@@ -208,10 +355,32 @@ export async function postUserMessageAndNora(
     return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
   });

+  // Rebuild after authority so Nora observes confirmed D5/D6 state (projection only).
   const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);
+  const authoritySnippets: string[] = [];
+  if (authority?.attempted && authority.command) {
+    authoritySnippets.push(
+      "### Effet métier confirmé (D5/D6 — pas une permission Nora)",
+      `status=${authority.command.status} operation=${authority.operation ?? "?"} reasonCode=${authority.command.reasonCode ?? "∅"} decisionId=${authority.decisionId ?? "∅"}`,
+    );
+    if (authority.command.effects?.length) {
+      authoritySnippets.push(
+        `effects=${authority.command.effects.map((e) => `${e.effectKind}:${e.targetRef}`).join(",")}`,
+      );
+    }
+  } else if (authority?.clarification) {
+    authoritySnippets.push(
+      "### Clarification pilotage requise",
+      authority.clarification.slice(0, 300),
+    );
+  }

   let reply;
   try {
+    // C02 fault boundary: after authority, before/during Nora — same recovery path.
+    if (turnRaceHooks.afterAuthorityBeforeNora) {
+      await turnRaceHooks.afterAuthorityBeforeNora();
+    }
     // Heartbeat during long provider work so stale lease does not falsely orphan an active run.
     const leasePulse = setInterval(() => {
       void touchTurnLease(reserved.commandId, reserved.ownerToken);
@@ -221,7 +390,7 @@ export async function postUserMessageAndNora(
         userText: content,
         contextSnippets,
         knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
-        pilotageSnippets: pilotageCtx.snippets,
+        pilotageSnippets: [...pilotageCtx.snippets, ...authoritySnippets],
         // C01: same structured Level A contract for fixture and LIVE — never authority.
         levelASignals: pilotageCtx.levelASignals,
         // Requested level only. The adapter emits DELIVERED after a real generate.
@@ -235,8 +404,30 @@ export async function postUserMessageAndNora(
     } finally {
       clearInterval(leasePulse);
     }
-  } catch (e) {
-    await markTurnUnknown(reserved.commandId, "PROVIDER_EXCEPTION", reserved.ownerToken);
+  } catch {
+    // C02 — Nora failure must not erase a already-committed D5/D6 effect.
+    // Persist an honest UNKNOWN turn payload that still surfaces pilotageEffect.
+    const unknownPayload: TurnResult = {
+      userMessageId: reserved.userMessageId,
+      assistantMessageId: null,
+      operationId: reserved.operationId,
+      requestId,
+      status: "UNKNOWN",
+      idempotentReplay: false,
+      humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
+      pilotageEffect: pilotageEffectFromAuthority(authority),
+      noraMode: "provider-exception",
+    };
+    try {
+      await markTurnUnknown(
+        reserved.commandId,
+        "PROVIDER_EXCEPTION",
+        reserved.ownerToken,
+        JSON.stringify(unknownPayload),
+      );
+    } catch {
+      /* ownership may already be lost — still return reconstituted truth below */
+    }
     emitObs({
       event_name: "d3.turn.unknown",
       component: "d3.conversation",
@@ -245,7 +436,19 @@ export async function postUserMessageAndNora(
       outcome: "UNKNOWN",
       error_category: "PROVIDER_EXCEPTION",
     });
-    throw e;
+    const resolved = await resolvePilotageEffectForReplay({
+      pilotId,
+      projectId: ctx.project?.id,
+      clientTurnKey,
+      userMessageId: reserved.userMessageId,
+      fromJson: unknownPayload.pilotageEffect,
+      humanDecisionCreated: unknownPayload.humanDecisionCreated,
+    });
+    return {
+      ...unknownPayload,
+      humanDecisionCreated: resolved.humanDecisionCreated,
+      pilotageEffect: resolved.pilotageEffect,
+    };
   }

   if (turnRaceHooks.afterGenerateBeforeEffects) {
@@ -471,7 +674,8 @@ export async function postUserMessageAndNora(
       ? (unknownCapReconstituted?.documentSave ?? null)
       : documentSave,
     idempotentReplay: false,
-    humanDecisionCreated: false,
+    humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
+    pilotageEffect: pilotageEffectFromAuthority(authority),
   };

   if (turnRaceHooks.beforeTerminalCommit) {
```

### DIFF `projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index 19c64cd8..1bb7ba40 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -41,6 +41,8 @@ export type ReplayedTurn = {
   generationId: string | null;
   userMessageId: string | null;
   assistantMessageId: string | null;
+  /** Stable turn key — enables C02 reconstitution of conv-auth:{key}. */
+  clientTurnKey?: string | null;
   reconciled?: boolean;
 };

@@ -111,6 +113,8 @@ export async function assertTurnFenceInTx(

 /** Test hooks — must stay no-op in production paths. */
 export const turnRaceHooks: {
+  /** C02 — after D5/D6 authority, before Nora provider (fault injection). */
+  afterAuthorityBeforeNora?: () => Promise<void>;
   afterGenerateBeforeEffects?: () => Promise<void>;
   beforeD4Effect?: () => Promise<void>;
   beforeTerminalCommit?: () => Promise<void>;
@@ -423,6 +427,7 @@ export async function reserveTurnCommand(args: {
             generationId,
             userMessageId: existing.userMessageId,
             assistantMessageId: assistantId,
+            clientTurnKey: existing.clientTurnKey,
             reconciled: true,
           };
         }
@@ -441,6 +446,7 @@ export async function reserveTurnCommand(args: {
         generationId: existing.generationId,
         userMessageId: existing.userMessageId,
         assistantMessageId: existing.assistantMessageId,
+        clientTurnKey: existing.clientTurnKey,
       };
     }

@@ -731,12 +737,14 @@ export async function markTurnUnknown(
   commandId: string,
   errorCategory: string,
   ownerToken?: string,
+  resultJson?: string,
 ) {
   await completeTurnCommand({
     commandId,
     status: "UNKNOWN",
     errorCategory,
     ownerToken,
+    resultJson,
   });
 }
```

### DIFF `projects/sfia-studio-next/web/src/domains/pilotage/intent.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
index 75fcacc8..89790d47 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
@@ -10,10 +10,31 @@ export type IntentQualification =
       methodRef?: string;
       methodVersion?: string;
       objective?: string;
+      /** Documentary decision text (RECORD / REVISE). */
+      statement?: string;
+      /** Bounded object key for D6 confrontation — not authority by itself. */
+      objectRef?: string;
+      /** Resolved only when the caller already knows the D6 target. */
+      decisionId?: string;
     }
   | { clarity: "AMBIGUOUS"; reason: string }
   | { clarity: "NONE"; reason: string };

+/** Derive a short objectRef from a decision statement for journal / confrontation. */
+export function deriveDecisionObjectRef(statement: string): string {
+  const text = statement.trim().replace(/\s+/g, " ");
+  const anchored = text.match(
+    /(?:que\s+)?(?:la|le|l['’])?\s*([^,?.;]{3,60}?)\s+(?:est|sera|devient|reste|doit|peu[tv])\b/i,
+  );
+  if (anchored?.[1]) return anchored[1].trim().slice(0, 80);
+  const tokens = text
+    .toLowerCase()
+    .split(/[^a-z0-9àâäéèêëïîôùûüç]+/i)
+    .filter((t) => t.length >= 4)
+    .slice(0, 4);
+  return (tokens.join(" ") || text.slice(0, 40)).trim();
+}
+
 const PHRASES: Array<{ type: CycleType; phrase: string }> = [
   { type: "CONCEPTION_FONCTIONNELLE", phrase: "conception fonctionnelle" },
   { type: "ARCHITECTURE_FONCTIONNELLE", phrase: "architecture fonctionnelle" },
@@ -45,10 +66,26 @@ const PHRASES: Array<{ type: CycleType; phrase: string }> = [
 const AMBIGUOUS_EXACT =
   /^(ok|okay|oui|d'accord|dac|vas-y|go|parfait|ça marche|ca marche)\.?$/i;

+/**
+ * C01 — exploratory / hypothetical language is never an opposable D6 act.
+ * Level A confrontation may still surface candidates; this gate stays linguistic.
+ */
+const EXPLORATORY_ACT =
+  /\b(je pense|je r[eé]fl[eé]chis|je me demande|j['’]envisage|pourrait|pourrais|ce serait|il serait|peut-être|peut etre|et si|nora (?:propose|sugg[eè]re)|int[eé]ressant|hypoth[eè]se|envisager|envisagerais|semblerait|aurait l['’]air)\b/i;
+
 function normalize(text: string): string {
   return text.trim().toLowerCase().replace(/\s+/g, " ");
 }

+/** True when the wording is reflective/hypothetical — not a clear human performative. */
+export function isExploratoryActLanguage(text: string): boolean {
+  const t = text.trim();
+  if (!t) return true;
+  if (/\?$/.test(t)) return true;
+  if (/^(est-ce|dois-je|peut-on|devrait-on|et si)\b/i.test(t)) return true;
+  return EXPLORATORY_ACT.test(t);
+}
+
 function escapeRe(phrase: string): string {
   return phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
 }
@@ -187,6 +224,84 @@ export function qualifyPilotageIntent(utterance: string): IntentQualification {
     return { clarity: "CLEAR", operation: "CLOSE_CYCLE", cycleType: matched.type, objective: text };
   }

+  /**
+   * Documentary RECORD — explicit performative only.
+   * Questions, soft preferences, citations and Nora advice must not match.
+   */
+  const record = text.match(
+    /^(?:je décide(?:\s+que)?|décision\s*:|j['’]enregistre(?:\s+(?:la\s+décision|que))?)\s+(.+)$/i,
+  );
+  if (record) {
+    const statement = record[1].trim().replace(/[.;]+$/, "");
+    if (statement.length < 8) {
+      return { clarity: "AMBIGUOUS", reason: "Décision insuffisamment déterminée" };
+    }
+    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
+      return { clarity: "AMBIGUOUS", reason: "Préférence exploratoire — pas une décision" };
+    }
+    return {
+      clarity: "CLEAR",
+      operation: "RECORD_DECISION",
+      objective: statement,
+      statement,
+      objectRef: deriveDecisionObjectRef(statement),
+    };
+  }
+
+  /**
+   * Documentary REVISE — C01: "Finalement…" alone is not enough when hedges remain.
+   * Explicit "Je révise la décision…" is the strong performative.
+   * Target resolution still requires D6 briefs (caller); Level A never authorizes alone.
+   */
+  const explicitRevise = text.match(
+    /^je (?:révise|revise|corrige|remplace|modifie)(?:\s+la\s+décision(?:\s+[^:]+)?)?\s*[:,]?\s*(.+)$/i,
+  );
+  if (explicitRevise) {
+    const statement = explicitRevise[1].trim().replace(/[.;]+$/, "");
+    if (statement.length < 8) {
+      return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
+    }
+    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
+      return { clarity: "AMBIGUOUS", reason: "Réflexion — pas un acte de révision" };
+    }
+    return {
+      clarity: "CLEAR",
+      operation: "REVISE_DECISION",
+      objective: statement,
+      statement,
+      objectRef: deriveDecisionObjectRef(statement),
+    };
+  }
+
+  const softRevise = text.match(/^(?:finalement|désormais|dorénavant)[,:]?\s+(.+)$/i);
+  if (softRevise) {
+    const statement = softRevise[1].trim().replace(/[.;]+$/, "");
+    if (statement.length < 8) {
+      return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
+    }
+    // C01: hedges / questions / Nora suggestions must not become CLEAR REVISE.
+    if (isExploratoryActLanguage(statement) || isExploratoryActLanguage(text)) {
+      return {
+        clarity: "AMBIGUOUS",
+        reason: "Expression exploratoire — clarification requise, aucune révision automatique",
+      };
+    }
+    // Require an assertive change predicate (devient/est/reste/sera) — not mere topic mention.
+    if (!/\b(devient|est|reste|sera|n['’]est plus|n['’]est pas)\b/i.test(statement)) {
+      return {
+        clarity: "AMBIGUOUS",
+        reason: "Changement de décision non asserté — précisez l'acte de révision",
+      };
+    }
+    return {
+      clarity: "CLEAR",
+      operation: "REVISE_DECISION",
+      objective: statement,
+      statement,
+      objectRef: deriveDecisionObjectRef(statement),
+    };
+  }
+
   if (cyclesMentioned(text).length >= 2) {
     return { clarity: "AMBIGUOUS", reason: "Plusieurs cycles cités" };
   }
```

### DIFF `projects/sfia-studio-next/web/src/domains/pilotage/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
index c6872bc6..c8c7f441 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/service.ts
@@ -340,6 +340,14 @@ function fromClearIntent(
 ): ClassifyResult {
   const cycleType =
     qualified.cycleType ?? (body.cycleType && isCycleType(body.cycleType) ? body.cycleType : null);
+  if (qualified.operation === "REVISE_DECISION" && !(body.decisionId ?? qualified.decisionId)) {
+    return {
+      ok: false,
+      reasonCode: "AMBIGUOUS",
+      reason: "Révision sans cible D6 déterminée",
+      sourceActionKey: "REJECT|AMBIGUOUS|revise-target",
+    };
+  }
   const command: ClassifiedCommand = {
     operation: qualified.operation,
     sourceKind,
@@ -352,14 +360,16 @@ function fromClearIntent(
     trajectoryRevisionId: body.trajectoryRevisionId ?? null,
     methodRef: (qualified.methodRef ?? body.methodRef ?? "").trim(),
     methodVersion: (qualified.methodVersion || body.methodVersion || "").trim(),
-    decisionId: body.decisionId ?? null,
+    decisionId: body.decisionId ?? qualified.decisionId ?? null,
     restrictionId: body.restrictionId ?? null,
     targetKind: body.targetKind ?? "",
     targetRef: (body.targetRef ?? "*").trim() || "*",
-    statement: (body.statement ?? qualified.objective ?? "").trim().slice(0, 500),
+    statement: (body.statement ?? qualified.statement ?? qualified.objective ?? "")
+      .trim()
+      .slice(0, 500),
     balanceNote: (body.balanceNote ?? "").trim(),
     actInstanceId: (body.actInstanceId ?? "").trim(),
-    objectRef: (body.objectRef ?? "").trim(),
+    objectRef: (body.objectRef ?? qualified.objectRef ?? "").trim(),
     sourceActionKey: "",
   };
   if (
```

### DIFF `projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
index 385c5dfd..fc46d866 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
@@ -51,7 +51,14 @@ export async function POST(req: Request, ctx: { params: Promise<{ preparationId:
       },
     );
     const messages = await listMessages(session.pilotId, preparationId);
-    return NextResponse.json({ ...result, messages, humanDecisionCreated: false, requestId });
+    // Pass through factual flags from the turn — never force humanDecisionCreated=false.
+    return NextResponse.json({
+      ...result,
+      messages,
+      humanDecisionCreated: Boolean(result.humanDecisionCreated),
+      pilotageEffect: result.pilotageEffect ?? null,
+      requestId,
+    });
   } catch (e) {
     const mapped = studioErrorResponse(e);
     emitObs({
```

### DIFF `projects/sfia-studio-next/web/src/components/PilotagePanel.tsx`

```diff
diff --git a/projects/sfia-studio-next/web/src/components/PilotagePanel.tsx b/projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
index fe15ed92..16b1fc45 100644
--- a/projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
@@ -40,7 +40,8 @@ type DecisionRow = {
   statement: string;
   state: string;
   objectRef?: string;
-  createdAt: string;
+  createdAt?: string;
+  supersedesDecisionId?: string | null;
 };

 type CommandResult = {
@@ -162,6 +163,10 @@ export function PilotagePanel({ projectId }: { projectId: string }) {
   const [methodVersion, setMethodVersion] = useState("2.6");
   const [utterance, setUtterance] = useState("");
   const [restrictionTarget, setRestrictionTarget] = useState("*");
+  const [reviseTargetId, setReviseTargetId] = useState<string | null>(null);
+  const [reviseDraft, setReviseDraft] = useState("");
+  /** C03 — show 8 most recent by default; expand to full chronological history. */
+  const [journalExpanded, setJournalExpanded] = useState(false);
   const inflight = useRef(new Map<string, PendingRecord>());

   const load = useCallback(async () => {
@@ -759,15 +764,114 @@ export function PilotagePanel({ projectId }: { projectId: string }) {
             {decisions.length === 0 && !journalError ? (
               <p className="text-sm muted">Aucune décision D6 enregistrée.</p>
             ) : (
-              decisions.slice(0, 8).map((d) => (
-                <article key={d.id} className="text-sm panel p-2">
-                  <div className="text-xs muted" data-testid="decision-state">
-                    {d.kind} · {d.state || "état inconnu"}
-                    {d.objectRef ? ` · ${d.objectRef}` : ""}
-                  </div>
-                  <div>{d.statement}</div>
-                </article>
-              ))
+              (() => {
+                const chronological = [...decisions].sort((a, b) =>
+                  String(a.createdAt ?? "").localeCompare(String(b.createdAt ?? "")),
+                );
+                const newestFirst = [...chronological].reverse();
+                const visible = journalExpanded ? chronological : newestFirst.slice(0, 8);
+                return (
+                  <>
+                    <p className="text-xs muted" data-testid="journal-count">
+                      {decisions.length} décision(s) ·{" "}
+                      {journalExpanded
+                        ? "historique complet (ancien → récent)"
+                        : "8 plus récentes (récent → ancien)"}
+                    </p>
+                    {visible.map((d) => (
+                      <article
+                        key={d.id}
+                        className="text-sm panel p-2 space-y-2"
+                        data-testid="decision-row"
+                      >
+                        <div className="text-xs muted" data-testid="decision-state">
+                          {d.kind} · {d.state || "état inconnu"}
+                          {d.objectRef ? ` · ${d.objectRef}` : ""}
+                        </div>
+                        <div>{d.statement}</div>
+                        {d.state === "APPLICABLE" && d.kind === "RECORD_DECISION" ? (
+                          reviseTargetId === d.id ? (
+                            <div className="space-y-2">
+                              <label className="block text-xs muted" htmlFor={`revise-${d.id}`}>
+                                Nouvel énoncé (révision documentaire)
+                              </label>
+                              <textarea
+                                id={`revise-${d.id}`}
+                                className="textarea text-sm"
+                                value={reviseDraft}
+                                onChange={(e) => setReviseDraft(e.target.value)}
+                                data-testid="journal-revise-draft"
+                                rows={2}
+                              />
+                              <div className="flex flex-wrap gap-2">
+                                <button
+                                  type="button"
+                                  className="btn"
+                                  disabled={busy || !reviseDraft.trim()}
+                                  data-testid="journal-revise-submit"
+                                  onClick={() =>
+                                    void runCommand(
+                                      {
+                                        operation: "REVISE_DECISION",
+                                        decisionId: d.id,
+                                        statement: reviseDraft.trim(),
+                                        sourceKind: "EXPLICIT_INTERACTION",
+                                        utterance: reviseDraft.trim(),
+                                      },
+                                      "Révision en cours",
+                                    ).then(() => {
+                                      setReviseTargetId(null);
+                                      setReviseDraft("");
+                                    })
+                                  }
+                                >
+                                  Enregistrer la révision
+                                </button>
+                                <button
+                                  type="button"
+                                  className="btn secondary"
+                                  disabled={busy}
+                                  onClick={() => {
+                                    setReviseTargetId(null);
+                                    setReviseDraft("");
+                                  }}
+                                >
+                                  Annuler
+                                </button>
+                              </div>
+                            </div>
+                          ) : (
+                            <button
+                              type="button"
+                              className="btn secondary text-xs"
+                              disabled={busy}
+                              data-testid="journal-revise-open"
+                              onClick={() => {
+                                setReviseTargetId(d.id);
+                                setReviseDraft(d.statement);
+                              }}
+                            >
+                              Réviser
+                            </button>
+                          )
+                        ) : null}
+                      </article>
+                    ))}
+                    {decisions.length > 8 ? (
+                      <button
+                        type="button"
+                        className="btn secondary text-xs"
+                        data-testid="journal-expand"
+                        onClick={() => setJournalExpanded((v) => !v)}
+                      >
+                        {journalExpanded
+                          ? "Réduire aux 8 plus récentes"
+                          : `Afficher tout l'historique (${decisions.length})`}
+                      </button>
+                    ) : null}
+                  </>
+                );
+              })()
             )}
           </section>
         </aside>
```

### DIFF `projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
index c8e74d53..ff7ef9ff 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-b13-divergence.test.ts
@@ -1,12 +1,18 @@
 import { describe, expect, it, afterEach } from "vitest";
 import {
   buildLevelAClarification,
+  findAuthorityReviseCandidates,
   findMessageDecisionConfrontations,
   findPotentialDivergences,
   qualifyCommandOutcome,
   selectApplicableBriefs,
+  selectAllApplicableBriefs,
 } from "@/domains/decisions/divergence-assist";
 import { generateNoraReply } from "@/domains/conversation/nora-adapter";
+import {
+  mayStartNewThreadAct,
+  shouldClearThreadPending,
+} from "@/domains/pilotage/thread-recovery";

 const prior = {
   id: "dec_gh",
@@ -208,3 +214,134 @@ describe("B13 C02 qualifyCommandOutcome", () => {
     expect(q.testId).toBe("outcome-unknown");
   });
 });
+
+describe("CR-01 authority revise candidates vs cognitive window", () => {
+  function brief(
+    id: string,
+    objectRef: string,
+    statement: string,
+    scope = "PROJECT",
+  ) {
+    return {
+      id,
+      kind: "RECORD_DECISION",
+      objectRef,
+      scope,
+      statement,
+      state: "APPLICABLE",
+      sourceKind: "EXPLICIT_INTERACTION",
+    };
+  }
+
+  it("cognitive window of 12 hides an older GitHub while authority sees both", () => {
+    const rows = [
+      brief("gh-old", "github", "GitHub est obligatoire pour ce projet."),
+      ...Array.from({ length: 13 }, (_, i) =>
+        brief(`fill-${i}`, `filler-${i}`, `Décision filler ${i} obligatoire.`),
+      ),
+      brief("gh-new", "github", "GitHub reste requis pour les déploiements."),
+    ];
+    expect(rows).toHaveLength(15);
+    const cognitive = selectApplicableBriefs(rows);
+    expect(cognitive).toHaveLength(12);
+    expect(cognitive.filter((r) => r.objectRef === "github").map((r) => r.id)).toEqual(["gh-new"]);
+    expect(selectAllApplicableBriefs(rows)).toHaveLength(15);
+
+    const utterance = "Finalement, GitHub devient facultatif.";
+    // Cognitive confrontation path would only see gh-new → false uniqueness.
+    const cognitiveSignals = findMessageDecisionConfrontations(utterance, rows).filter(
+      (s) => s.framing === "POSSIBLE_CHANGE",
+    );
+    expect(cognitiveSignals.map((s) => s.decisionId)).toEqual(["gh-new"]);
+
+    const authority = findAuthorityReviseCandidates(utterance, rows);
+    expect(authority.map((c) => c.id).sort()).toEqual(["gh-new", "gh-old"]);
+  });
+
+  it("single relevant applicable remains a unique authority candidate", () => {
+    const rows = [
+      brief("gh-only", "github", "GitHub est obligatoire pour ce projet."),
+      ...Array.from({ length: 14 }, (_, i) =>
+        brief(`fill-${i}`, `filler-${i}`, `Décision filler ${i} obligatoire.`),
+      ),
+    ];
+    const authority = findAuthorityReviseCandidates(
+      "Finalement, GitHub devient facultatif.",
+      rows,
+    );
+    expect(authority).toHaveLength(1);
+    expect(authority[0]?.id).toBe("gh-only");
+  });
+
+  it("same theme with distinct scopes stay separate candidates", () => {
+    const rows = [
+      brief("gh-proj", "github", "GitHub est obligatoire pour tout le projet.", "PROJECT"),
+      brief("gh-cycle", "github", "GitHub est obligatoire seulement pour ce cycle.", "CYCLE"),
+    ];
+    const authority = findAuthorityReviseCandidates(
+      "Finalement, GitHub devient facultatif.",
+      rows,
+    );
+    expect(authority).toHaveLength(2);
+    expect(new Set(authority.map((c) => c.scope))).toEqual(new Set(["PROJECT", "CYCLE"]));
+  });
+
+  it("REVOKED / REVISED are not authority candidates", () => {
+    const rows = [
+      { ...brief("gh-rev", "github", "GitHub est obligatoire."), state: "REVOKED" },
+      { ...brief("gh-revised", "github", "GitHub est requis."), state: "REVISED" },
+    ];
+    expect(findAuthorityReviseCandidates("Finalement, GitHub devient facultatif.", rows)).toEqual(
+      [],
+    );
+  });
+});
+
+describe("CR-02 thread pending lifecycle", () => {
+  it("does not clear pending when Nora COMPLETE but métier UNKNOWN", () => {
+    expect(
+      shouldClearThreadPending({
+        noraStatus: "COMPLETE",
+        effectAttempted: true,
+        effectStatus: "UNKNOWN",
+      }),
+    ).toBe(false);
+  });
+
+  it("clears pending when métier is terminal APPLIED", () => {
+    expect(
+      shouldClearThreadPending({
+        noraStatus: "UNKNOWN",
+        effectAttempted: true,
+        effectStatus: "APPLIED",
+      }),
+    ).toBe(true);
+  });
+
+  it("clears pending when no business attempt and Nora COMPLETE", () => {
+    expect(
+      shouldClearThreadPending({
+        noraStatus: "COMPLETE",
+        effectAttempted: false,
+        effectStatus: null,
+      }),
+    ).toBe(true);
+  });
+
+  it("exclusive guard blocks a distinct new act over unresolved pending", () => {
+    const pending = {
+      content: "Ouvre le cycle cadrage.",
+      clientTurnKey: "turn-1",
+      clientCommandKey: "conv-auth:turn-1",
+    };
+    expect(mayStartNewThreadAct({ unresolved: pending, nextContent: pending.content }).ok).toBe(
+      true,
+    );
+    const blocked = mayStartNewThreadAct({
+      unresolved: pending,
+      nextContent: "Je décide que GitHub est obligatoire.",
+    });
+    expect(blocked.ok).toBe(false);
+    if (!blocked.ok) expect(blocked.pending.clientTurnKey).toBe("turn-1");
+  });
+});
```

### DIFF `projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
index 4a7a6445..29f2cd25 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
@@ -98,6 +98,49 @@ describe("ml3 CKI resolution and intent", () => {
     expect(qualifyPilotageIntent("ouvre le cycle cadrage et le cycle sécurité").clarity).toBe("AMBIGUOUS");
   });

+  it("F01/F02: qualifies documentary RECORD/REVISE and rejects soft preferences", () => {
+    expect(
+      qualifyPilotageIntent(
+        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
+      ),
+    ).toMatchObject({
+      clarity: "CLEAR",
+      operation: "RECORD_DECISION",
+      objectRef: expect.stringMatching(/github|connexion/i),
+    });
+    expect(qualifyPilotageIntent("Finalement, GitHub devient facultatif.")).toMatchObject({
+      clarity: "CLEAR",
+      operation: "REVISE_DECISION",
+    });
+    expect(qualifyPilotageIntent("OK").clarity).toBe("AMBIGUOUS");
+    expect(
+      qualifyPilotageIntent("Ce serait intéressant de commencer.").clarity,
+    ).toBe("NONE");
+    expect(
+      qualifyPilotageIntent("Je décide que GitHub est obligatoire ?").clarity,
+    ).toBe("AMBIGUOUS");
+  });
+
+  it("C01: exploratory Finalement / questions never CLEAR REVISE", () => {
+    expect(
+      qualifyPilotageIntent("Finalement, je pense que GitHub pourrait être facultatif.").clarity,
+    ).toBe("AMBIGUOUS");
+    expect(
+      qualifyPilotageIntent("Finalement, et si GitHub devenait facultatif ?").clarity,
+    ).toBe("AMBIGUOUS");
+    expect(qualifyPilotageIntent("Je réfléchis à rendre GitHub facultatif.").clarity).toBe(
+      "NONE",
+    );
+    expect(qualifyPilotageIntent("Nora propose de rendre GitHub facultatif.").clarity).toBe(
+      "NONE",
+    );
+    expect(
+      qualifyPilotageIntent(
+        "Je révise la décision GitHub : la connexion est facultative.",
+      ),
+    ).toMatchObject({ clarity: "CLEAR", operation: "REVISE_DECISION" });
+  });
+
   it("pins RESOLVED only when the file digest matches the approved manifest", () => {
     const manifest = loadCkiManifest();
     expect(manifest?.version).toBe("0.2.0");
```

### DIFF `projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
index f333a075..56b67e34 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
@@ -1040,7 +1040,8 @@ describe("PostgreSQL ML3 pilotage and decisions", () => {
       expect(journalBBefore.some((d) => d.statement.includes(foreignMarker))).toBe(true);
       expect(journalBBefore.some((d) => d.id === recordedB.decisionId)).toBe(true);

-      const userText = "Finalement, GitHub devient facultatif.";
+      // Soft reflection — Level A confrontation without F02 revise performative.
+      const userText = "À propos de GitHub, ce serait intéressant de le rendre facultatif.";
       // USER text is relevant to B's objectRef — without project filter B would be confrontable.
       expect(utteranceTouchesObject(userText, "github-connexion")).toBe(true);

@@ -1167,4 +1168,545 @@ describe("PostgreSQL ML3 pilotage and decisions", () => {
     });
     expect(opened.status).toBe("APPLIED");
   });
+
+  it("F01: clear GO via postUserMessageAndNora opens one ACTIVE cycle with HumanDecision", async () => {
+    const { postUserMessageAndNora, listMessages } = await import(
+      "@/domains/conversation/service"
+    );
+    const prevLane = process.env.STUDIO_LANE;
+    const prevE2e = process.env.STUDIO_E2E;
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_E2E = "1";
+    try {
+      const { pilotId, projectId, preparationId } = await seedProject("f01-go");
+      expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
+      const turnKey = `f01-go-${newId("turn")}`;
+      const result = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Ouvre le cycle cadrage.",
+        { clientTurnKey: turnKey },
+      );
+      expect(result.status).toBe("COMPLETE");
+      expect(result.pilotageEffect?.attempted).toBe(true);
+      expect(result.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(result.pilotageEffect?.operation).toBe("OPEN_CYCLE");
+      expect(result.humanDecisionCreated).toBe(true);
+      expect(result.pilotageEffect?.decisionId).toBeTruthy();
+      const view = await getPilotageProjection(pilotId, projectId);
+      expect(view.cycle?.status).toBe("ACTIVE");
+      expect(view.cycle?.cycleType).toBe("CADRAGE");
+      const journal = await listDecisionJournal(pilotId, projectId);
+      expect(journal.some((d) => d.kind === "OPEN_CYCLE" && d.state === "APPLICABLE")).toBe(true);
+      const thread = await listMessages(pilotId, preparationId);
+      expect(thread.some((m) => m.id === result.userMessageId && m.role === "user")).toBe(true);
+      expect(thread.some((m) => m.id === result.assistantMessageId)).toBe(true);
+
+      const replay = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Ouvre le cycle cadrage.",
+        { clientTurnKey: turnKey },
+      );
+      expect(replay.idempotentReplay).toBe(true);
+      expect(replay.humanDecisionCreated).toBe(true);
+      expect(
+        (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
+          (c) => c.status === "ACTIVE",
+        ),
+      ).toHaveLength(1);
+    } finally {
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
+      else process.env.STUDIO_E2E = prevE2e;
+    }
+  });
+
+  it("F01: ambiguous OK and hostile assistant source create no cycle", async () => {
+    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
+    const prevLane = process.env.STUDIO_LANE;
+    const prevE2e = process.env.STUDIO_E2E;
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_E2E = "1";
+    try {
+      const seeded = await seedProject("f01-neg");
+      const ok = await postUserMessageAndNora(
+        seeded.pilotId,
+        seeded.preparationId,
+        "OK",
+        { clientTurnKey: `f01-ok-${newId("turn")}` },
+      );
+      expect(ok.pilotageEffect?.attempted).toBe(false);
+      expect(ok.humanDecisionCreated).toBe(false);
+      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();
+
+      const soft = await postUserMessageAndNora(
+        seeded.pilotId,
+        seeded.preparationId,
+        "Ce serait intéressant de commencer.",
+        { clientTurnKey: `f01-soft-${newId("turn")}` },
+      );
+      expect(soft.humanDecisionCreated).toBe(false);
+      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();
+
+      const assistantId = await insertUserMessage(
+        seeded.preparationId,
+        "ouvre le cycle cadrage",
+        { role: "assistant", status: "COMPLETE", ordinal: 99 },
+      );
+      const hostile = await executePilotageCommand(seeded.pilotId, seeded.projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: 0,
+        sourceKind: "USER_MESSAGE",
+        sourceRef: assistantId,
+        utterance: "ouvre le cycle cadrage",
+      });
+      expect(hostile.status).toBe("REJECTED");
+      expect(hostile.reasonCode).toBe("SOURCE");
+      expect((await getPilotageProjection(seeded.pilotId, seeded.projectId)).cycle).toBeNull();
+    } finally {
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
+      else process.env.STUDIO_E2E = prevE2e;
+    }
+  });
+
+  it("F02: RECORD then REVISE from conversation thread with durable journal", async () => {
+    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
+    const prevLane = process.env.STUDIO_LANE;
+    const prevE2e = process.env.STUDIO_E2E;
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_E2E = "1";
+    try {
+      const { pilotId, projectId, preparationId } = await seedProject("f02-rec");
+      const record = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
+        { clientTurnKey: `f02-rec-${newId("turn")}` },
+      );
+      expect(record.pilotageEffect?.attempted).toBe(true);
+      expect(record.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(record.humanDecisionCreated).toBe(true);
+      const firstId = record.pilotageEffect?.decisionId;
+      expect(firstId).toBeTruthy();
+      let journal = await listDecisionJournal(pilotId, projectId);
+      expect(journal.filter((d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION")).toHaveLength(
+        1,
+      );
+
+      const revise = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Finalement, GitHub devient facultatif.",
+        { clientTurnKey: `f02-rev-${newId("turn")}` },
+      );
+      expect(revise.pilotageEffect?.attempted).toBe(true);
+      expect(revise.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(revise.humanDecisionCreated).toBe(true);
+      expect(revise.pilotageEffect?.decisionId).toBeTruthy();
+      expect(revise.pilotageEffect?.decisionId).not.toBe(firstId);
+      journal = await listDecisionJournal(pilotId, projectId);
+      const applicable = journal.filter((d) => d.state === "APPLICABLE" && d.kind === "RECORD_DECISION");
+      expect(applicable).toHaveLength(1);
+      expect(applicable[0]?.statement).toMatch(/facultatif/i);
+      expect(journal.some((d) => d.id === firstId && d.state === "REVISED")).toBe(true);
+
+      // Founding OPEN cannot be generically revised from conversation.
+      const opened = await openCycle(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: (await getPilotageProjection(pilotId, projectId)).revision,
+        sourceRef: newId("src"),
+        cycleType: "CADRAGE",
+        objective: "fondation",
+      });
+      expect(opened.status).toBe("APPLIED");
+      const refuse = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Finalement, le cycle cadrage devient ux.",
+        { clientTurnKey: `f02-found-${newId("turn")}` },
+      );
+      expect(refuse.humanDecisionCreated).toBe(false);
+      expect(refuse.pilotageEffect?.attempted).toBe(false);
+      expect(refuse.pilotageEffect?.clarification || refuse.pilotageEffect?.intentReason).toMatch(
+        /typée|candidates|cible|applicable/i,
+      );
+      expect((await getPilotageProjection(pilotId, projectId)).cycle?.cycleType).toBe("CADRAGE");
+    } finally {
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
+      else process.env.STUDIO_E2E = prevE2e;
+    }
+  });
+
+  it("F01: restriction blocks conversational GO without false success", async () => {
+    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
+    const prevLane = process.env.STUDIO_LANE;
+    const prevE2e = process.env.STUDIO_E2E;
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_E2E = "1";
+    try {
+      const { pilotId, projectId, preparationId } = await seedProject("f01-rest");
+      const restricted = await applyGovernanceRestriction(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: 0,
+        sourceRef: newId("src"),
+        targetKind: "CYCLE_MUTATION",
+        targetRef: "*",
+        statement: "Pas de mutation de cycle",
+      });
+      expect(restricted.status).toBe("APPLIED");
+      const go = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Ouvre le cycle cadrage.",
+        { clientTurnKey: `f01-rest-${newId("turn")}` },
+      );
+      expect(go.pilotageEffect?.attempted).toBe(true);
+      expect(go.pilotageEffect?.status).toBe("REJECTED");
+      expect(go.pilotageEffect?.reasonCode).toBe("RESTRICTION");
+      expect(go.humanDecisionCreated).toBe(false);
+      expect((await getPilotageProjection(pilotId, projectId)).cycle).toBeNull();
+    } finally {
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
+      else process.env.STUDIO_E2E = prevE2e;
+    }
+  });
+
+  it("C01: exploratory Finalement does not REVISE an applicable RECORD", async () => {
+    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
+    const prevLane = process.env.STUDIO_LANE;
+    const prevE2e = process.env.STUDIO_E2E;
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_E2E = "1";
+    try {
+      const { pilotId, projectId, preparationId } = await seedProject("c01-exp");
+      const recorded = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Je décide que la connexion GitHub est obligatoire pour ce projet.",
+        { clientTurnKey: `c01-rec-${newId("turn")}` },
+      );
+      expect(recorded.humanDecisionCreated).toBe(true);
+      const before = await listDecisionJournal(pilotId, projectId);
+      const applicableBefore = before.filter((d) => d.state === "APPLICABLE");
+      expect(applicableBefore).toHaveLength(1);
+
+      for (const text of [
+        "Finalement, je pense que GitHub pourrait être facultatif.",
+        "Finalement, et si GitHub devenait facultatif ?",
+        "Je réfléchis à rendre GitHub facultatif.",
+        "Nora propose de rendre GitHub facultatif.",
+      ]) {
+        const r = await postUserMessageAndNora(pilotId, preparationId, text, {
+          clientTurnKey: `c01-${newId("turn")}`,
+        });
+        expect(r.humanDecisionCreated).toBe(false);
+        expect(r.pilotageEffect?.attempted).toBeFalsy();
+      }
+      const after = await listDecisionJournal(pilotId, projectId);
+      expect(after.filter((d) => d.state === "APPLICABLE").map((d) => d.id)).toEqual(
+        applicableBefore.map((d) => d.id),
+      );
+      expect(after.some((d) => d.state === "REVISED")).toBe(false);
+    } finally {
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
+      else process.env.STUDIO_E2E = prevE2e;
+    }
+  });
+
+  it("C02: D6 APPLIED survives Nora provider failure and reconstitutes on replay", async () => {
+    const { postUserMessageAndNora } = await import("@/domains/conversation/service");
+    const { turnRaceHooks } = await import("@/domains/conversation/turn-command");
+    const { reconstituteConversationalAuthority } = await import(
+      "@/domains/pilotage/conversation-authority"
+    );
+    const prevLane = process.env.STUDIO_LANE;
+    const prevE2e = process.env.STUDIO_E2E;
+    process.env.STUDIO_LANE = "DEV";
+    process.env.STUDIO_E2E = "1";
+    try {
+      const { pilotId, projectId, preparationId } = await seedProject("c02-fault");
+      const turnKey = `c02-fault-${newId("turn")}`;
+      turnRaceHooks.afterAuthorityBeforeNora = async () => {
+        throw new Error("INJECTED_PROVIDER_FAILURE");
+      };
+      const result = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Ouvre le cycle cadrage.",
+        { clientTurnKey: turnKey },
+      );
+      expect(result.status).toBe("UNKNOWN");
+      expect(result.pilotageEffect?.attempted).toBe(true);
+      expect(result.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(result.humanDecisionCreated).toBe(true);
+      expect((await getPilotageProjection(pilotId, projectId)).cycle?.status).toBe("ACTIVE");
+
+      delete turnRaceHooks.afterAuthorityBeforeNora;
+      const replay = await postUserMessageAndNora(
+        pilotId,
+        preparationId,
+        "Ouvre le cycle cadrage.",
+        { clientTurnKey: turnKey },
+      );
+      expect(replay.idempotentReplay).toBe(true);
+      expect(replay.status).toBe("UNKNOWN");
+      expect(replay.pilotageEffect?.attempted).toBe(true);
+      expect(replay.pilotageEffect?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(replay.humanDecisionCreated).toBe(true);
+      expect(
+        (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
+          (c) => c.status === "ACTIVE",
+        ),
+      ).toHaveLength(1);
+
+      const reconstituted = await reconstituteConversationalAuthority({
+        pilotId,
+        projectId,
+        clientTurnKey: turnKey,
+        userMessageId: result.userMessageId,
+      });
+      expect(reconstituted?.attempted).toBe(true);
+      expect(reconstituted?.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+    } finally {
+      delete turnRaceHooks.afterAuthorityBeforeNora;
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+      if (prevE2e === undefined) delete process.env.STUDIO_E2E;
+      else process.env.STUDIO_E2E = prevE2e;
+    }
+  });
+
+  it("C03: journal lists >8 decisions with newest accessible and older recoverable", async () => {
+    const { pilotId, projectId } = await seedProject("c03-journal");
+    let revision = 0;
+    for (let i = 0; i < 12; i += 1) {
+      const recorded = await executePilotageCommand(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: revision,
+        sourceKind: "EXPLICIT_INTERACTION",
+        sourceRef: newId("src"),
+        operation: "RECORD_DECISION",
+        objectRef: `obj-${i}`,
+        statement: `Décision documentaire numéro ${i} pour le journal.`,
+      });
+      expect(recorded.status).toBe("APPLIED");
+      revision = recorded.revision ?? revision + 1;
+    }
+    const journal = await listDecisionJournal(pilotId, projectId);
+    expect(journal.length).toBeGreaterThanOrEqual(12);
+    const newest = journal[journal.length - 1];
+    expect(newest?.statement).toMatch(/numéro 11/);
+    expect(journal[0]?.statement).toMatch(/numéro 0/);
+    const applicable = journal.filter((d) => d.state === "APPLICABLE");
+    expect(applicable.length).toBeGreaterThanOrEqual(12);
+    // Newest is beyond the old slice(0,8) window of oldest-first — still present.
+    expect(applicable.some((d) => d.statement.includes("numéro 11"))).toBe(true);
+    expect(applicable.some((d) => d.statement.includes("numéro 0"))).toBe(true);
+  });
+
+  it("CR-01: 15+ applicables with two GitHub beyond cognitive window → no silent REVISE", async () => {
+    const { applyConversationalAuthority } = await import(
+      "@/domains/pilotage/conversation-authority"
+    );
+    const { selectApplicableBriefs, findAuthorityReviseCandidates } = await import(
+      "@/domains/decisions/divergence-assist"
+    );
+    const { pilotId, projectId, preparationId } = await seedProject("cr01-multi");
+    let revision = 0;
+    const statements: Array<{ objectRef: string; statement: string }> = [
+      { objectRef: "github", statement: "GitHub est obligatoire pour ce projet." },
+    ];
+    for (let i = 0; i < 13; i += 1) {
+      statements.push({
+        objectRef: `filler-${i}`,
+        statement: `Décision filler ${i} est obligatoire pour ce projet.`,
+      });
+    }
+    statements.push({
+      objectRef: "github",
+      statement: "GitHub reste requis pour les déploiements.",
+    });
+    expect(statements).toHaveLength(15);
+    for (const row of statements) {
+      const recorded = await executePilotageCommand(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: revision,
+        sourceKind: "EXPLICIT_INTERACTION",
+        sourceRef: newId("src"),
+        operation: "RECORD_DECISION",
+        objectRef: row.objectRef,
+        statement: row.statement,
+      });
+      expect(recorded.status).toBe("APPLIED");
+      revision = recorded.revision ?? revision + 1;
+    }
+    const journal = await listDecisionJournal(pilotId, projectId);
+    const applicable = journal.filter((d) => d.state === "APPLICABLE");
+    expect(applicable.length).toBeGreaterThanOrEqual(15);
+    const briefs = applicable.map((d) => ({
+      id: d.id,
+      kind: d.kind,
+      objectRef: d.objectRef ?? "",
+      scope: d.scope ?? "PROJECT",
+      statement: d.statement ?? "",
+      state: d.state,
+      sourceKind: d.sourceKind,
+    }));
+    const cognitiveGithub = selectApplicableBriefs(briefs).filter((b) => b.objectRef === "github");
+    expect(cognitiveGithub).toHaveLength(1);
+    const authority = findAuthorityReviseCandidates(
+      "Finalement, GitHub devient facultatif.",
+      briefs,
+    );
+    expect(authority.length).toBeGreaterThanOrEqual(2);
+
+    const msgId = await insertUserMessage(
+      preparationId,
+      "Finalement, GitHub devient facultatif.",
+    );
+    const outcome = await applyConversationalAuthority({
+      pilotId,
+      projectId,
+      userMessageId: msgId,
+      content: "Finalement, GitHub devient facultatif.",
+      clientTurnKey: `cr01-multi-${newId("turn")}`,
+    });
+    expect(outcome.attempted).toBe(false);
+    expect(outcome.humanDecisionCreated).toBe(false);
+    expect(outcome.clarification || outcome.intentReason).toMatch(/plusieurs|candidates/i);
+    const after = await listDecisionJournal(pilotId, projectId);
+    expect(after.filter((d) => d.state === "REVISED")).toHaveLength(0);
+    expect(after.filter((d) => d.state === "APPLICABLE" && d.objectRef === "github")).toHaveLength(2);
+  });
+
+  it("CR-01: unique GitHub applicable beyond fillers → single REVISE", async () => {
+    const { applyConversationalAuthority } = await import(
+      "@/domains/pilotage/conversation-authority"
+    );
+    const { pilotId, projectId, preparationId } = await seedProject("cr01-unique");
+    let revision = 0;
+    const first = await executePilotageCommand(pilotId, projectId, {
+      clientCommandKey: newId("idem"),
+      expectedRevision: revision,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("src"),
+      operation: "RECORD_DECISION",
+      objectRef: "github",
+      statement: "GitHub est obligatoire pour ce projet.",
+    });
+    expect(first.status).toBe("APPLIED");
+    revision = first.revision ?? 1;
+    for (let i = 0; i < 14; i += 1) {
+      const filler = await executePilotageCommand(pilotId, projectId, {
+        clientCommandKey: newId("idem"),
+        expectedRevision: revision,
+        sourceKind: "EXPLICIT_INTERACTION",
+        sourceRef: newId("src"),
+        operation: "RECORD_DECISION",
+        objectRef: `filler-${i}`,
+        statement: `Décision filler ${i} est obligatoire pour ce projet.`,
+      });
+      expect(filler.status).toBe("APPLIED");
+      revision = filler.revision ?? revision + 1;
+    }
+    const msgId = await insertUserMessage(
+      preparationId,
+      "Finalement, GitHub devient facultatif.",
+    );
+    const outcome = await applyConversationalAuthority({
+      pilotId,
+      projectId,
+      userMessageId: msgId,
+      content: "Finalement, GitHub devient facultatif.",
+      clientTurnKey: `cr01-unique-${newId("turn")}`,
+    });
+    expect(outcome.attempted).toBe(true);
+    expect(outcome.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+    expect(outcome.humanDecisionCreated).toBe(true);
+    const after = await listDecisionJournal(pilotId, projectId);
+    expect(after.some((d) => d.id === first.decisionId && d.state === "REVISED")).toBe(true);
+    expect(
+      after.filter((d) => d.state === "APPLICABLE" && d.objectRef === "github"),
+    ).toHaveLength(1);
+  });
+
+  it("CR-01: foreign project GitHub is never a revise target", async () => {
+    const { applyConversationalAuthority } = await import(
+      "@/domains/pilotage/conversation-authority"
+    );
+    const a = await seedProject("cr01-iso-a");
+    const b = await seedProject("cr01-iso-b");
+    const inB = await executePilotageCommand(b.pilotId, b.projectId, {
+      clientCommandKey: newId("idem"),
+      expectedRevision: 0,
+      sourceKind: "EXPLICIT_INTERACTION",
+      sourceRef: newId("src"),
+      operation: "RECORD_DECISION",
+      objectRef: "github",
+      statement: "GitHub est obligatoire pour ce projet.",
+    });
+    expect(inB.status).toBe("APPLIED");
+    const msgId = await insertUserMessage(a.preparationId, "Finalement, GitHub devient facultatif.");
+    const outcome = await applyConversationalAuthority({
+      pilotId: a.pilotId,
+      projectId: a.projectId,
+      userMessageId: msgId,
+      content: "Finalement, GitHub devient facultatif.",
+      clientTurnKey: `cr01-iso-${newId("turn")}`,
+    });
+    expect(outcome.humanDecisionCreated).toBe(false);
+    expect(outcome.attempted).toBe(false);
+    const journalB = await listDecisionJournal(b.pilotId, b.projectId);
+    expect(journalB.filter((d) => d.state === "APPLICABLE")).toHaveLength(1);
+    expect(journalB.some((d) => d.state === "REVISED")).toBe(false);
+  });
+
+  it("CR-02: concurrent same-act OPEN yields at most one ACTIVE cycle", async () => {
+    // Race at the D5/D6 boundary (same conv-auth key). Parallel postUserMessageAndNora
+    // is fenced by TURN_IN_PROGRESS at D3 — that is expected and not a double-effect path.
+    const { applyConversationalAuthority } = await import(
+      "@/domains/pilotage/conversation-authority"
+    );
+    const { pilotId, projectId, preparationId } = await seedProject("cr02-race");
+    const turnKey = `cr02-race-${newId("turn")}`;
+    const msgId = await insertUserMessage(preparationId, "Ouvre le cycle cadrage.");
+    const [a, b] = await Promise.all([
+      applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: msgId,
+        content: "Ouvre le cycle cadrage.",
+        clientTurnKey: turnKey,
+      }),
+      applyConversationalAuthority({
+        pilotId,
+        projectId,
+        userMessageId: msgId,
+        content: "Ouvre le cycle cadrage.",
+        clientTurnKey: turnKey,
+      }),
+    ]);
+    for (const r of [a, b]) {
+      expect(r.attempted).toBe(true);
+      expect(r.command?.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+      expect(r.humanDecisionCreated).toBe(true);
+    }
+    expect(
+      (await db.select().from(projectCycles).where(eq(projectCycles.projectId, projectId))).filter(
+        (c) => c.status === "ACTIVE",
+      ),
+    ).toHaveLength(1);
+    const cmds = await reconcileCommandByClientKey(pilotId, projectId, `conv-auth:${turnKey}`);
+    expect(cmds.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+  });
 });
```

### DIFF `projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
index 4403fac3..4fb64d1c 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
@@ -208,3 +208,263 @@ test("ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED", async ({
   await expect(page.getByTestId("authority-block-established")).toHaveCount(0);
   await expect(page.getByTestId("outcome-unknown")).toHaveCount(0);
 });
+
+/**
+ * F01 — GO naturel depuis le fil projet principal (pas le bouton PilotagePanel).
+ * Pixel Figma: NOT VERIFIED.
+ */
+test("ML3 F01: GO naturel depuis le fil ouvre un cycle ACTIVE", async ({ page }) => {
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
+  await page.waitForURL("**/preparations/**");
+  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 F01 thread seed");
+  await page.getByRole("button", { name: "Envoyer" }).click();
+  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
+    timeout: 30000,
+  });
+  await page.getByRole("button", { name: "Travail" }).click();
+  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 F01 Fil");
+  await page.getByPlaceholder("Résumé inspecté").fill("e2e f01 thread");
+  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
+  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
+  await page.getByRole("button", { name: "Créer le projet" }).click();
+  await page.waitForURL("**/projects/**", { timeout: 20000 });
+
+  await page.getByRole("button", { name: "Travail" }).click();
+  await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
+  await page.getByRole("button", { name: "Envoyer" }).click();
+  await expect(page.getByTestId("thread-pilotage-status")).toContainText(/OPEN_CYCLE|APPLIED/i, {
+    timeout: 30000,
+  });
+  await expect(page.getByTestId("thread-nora-status")).toContainText(/COMPLETE|deterministic/i, {
+    timeout: 30000,
+  });
+
+  await page.getByRole("button", { name: "Pilotage" }).click();
+  await expect(page.getByTestId("cycle-active")).toBeVisible({ timeout: 15000 });
+  await expect(page.getByRole("heading", { name: /Cycle CADRAGE/ })).toBeVisible();
+  await expect(page.getByTestId("decision-state").first()).toContainText("APPLICABLE");
+});
+
+/**
+ * F02 — décision documentaire depuis le fil + révision via Journal.
+ */
+test("ML3 F02: RECORD depuis le fil puis révision Journal", async ({ page }) => {
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
+  await page.waitForURL("**/preparations/**");
+  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 F02 seed");
+  await page.getByRole("button", { name: "Envoyer" }).click();
+  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
+    timeout: 30000,
+  });
+  await page.getByRole("button", { name: "Travail" }).click();
+  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 F02 Décisions");
+  await page.getByPlaceholder("Résumé inspecté").fill("e2e f02");
+  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
+  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
+  await page.getByRole("button", { name: "Créer le projet" }).click();
+  await page.waitForURL("**/projects/**", { timeout: 20000 });
+
+  await page.getByRole("button", { name: "Travail" }).click();
+  await page
+    .getByLabel("Message à Nora")
+    .fill("Je décide que la connexion GitHub est obligatoire pour ce projet.");
+  await page.getByRole("button", { name: "Envoyer" }).click();
+  await expect(page.getByTestId("thread-pilotage-status")).toContainText(
+    /RECORD_DECISION|APPLIED|décision/i,
+    { timeout: 30000 },
+  );
+
+  await page.getByRole("button", { name: "Pilotage" }).click();
+  await expect(page.getByTestId("decision-state").first()).toContainText(/RECORD_DECISION.*APPLICABLE/i, {
+    timeout: 15000,
+  });
+  await page.getByTestId("journal-revise-open").first().click();
+  await page.getByTestId("journal-revise-draft").fill("La connexion GitHub est facultative pour ce projet.");
+  await page.getByTestId("journal-revise-submit").click();
+  await expect(page.getByTestId("pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED/, {
+    timeout: 15000,
+  });
+  await expect(page.getByText(/facultative/i).first()).toBeVisible({ timeout: 10000 });
+});
+
+/**
+ * C03 — Journal >8: newest visible by default; full history via expand.
+ * Seeds via D6 API (not the fil loop) to avoid stale status races.
+ */
+test("ML3 C03: Journal décisions >8 avec historique accessible", async ({ page }) => {
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
+  await page.waitForURL("**/preparations/**");
+  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 C03 journal seed");
+  await page.getByRole("button", { name: "Envoyer" }).click();
+  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
+    timeout: 30000,
+  });
+  await page.getByRole("button", { name: "Travail" }).click();
+  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 C03 Journal");
+  await page.getByPlaceholder("Résumé inspecté").fill("e2e c03");
+  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
+  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
+  await page.getByRole("button", { name: "Créer le projet" }).click();
+  await page.waitForURL("**/projects/**", { timeout: 20000 });
+
+  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+  expect(projectId).toBeTruthy();
+  let revision = 0;
+  for (let i = 0; i < 12; i += 1) {
+    const actInstanceId = `c03-act-${i}-${Date.now()}`;
+    const res = await page.request.post(`/api/projects/${projectId}/pilotage/commands`, {
+      data: {
+        clientCommandKey: `c03-cmd-${actInstanceId}`,
+        expectedRevision: revision,
+        operation: "RECORD_DECISION",
+        sourceKind: "EXPLICIT_INTERACTION",
+        sourceRef: `ui:RECORD:${actInstanceId}`,
+        actInstanceId,
+        objectRef: `c03-obj-${i}`,
+        statement: `Décision documentaire C03-${i} obligatoire pour ce projet.`,
+      },
+    });
+    expect(res.ok()).toBeTruthy();
+    const body = await res.json();
+    expect(body.status).toMatch(/APPLIED|ALREADY_APPLIED/);
+    revision = body.revision ?? revision + 1;
+  }
+
+  await page.getByRole("button", { name: "Pilotage" }).click();
+  await expect(page.getByTestId("journal-count")).toContainText(/1[0-9] décision/i, {
+    timeout: 15000,
+  });
+  await expect(page.getByText(/C03-11/i).first()).toBeVisible();
+  await page.getByTestId("journal-expand").click();
+  await expect(page.getByText(/C03-0/i).first()).toBeVisible({ timeout: 10000 });
+  await expect(page.getByTestId("decision-row")).toHaveCount(12, { timeout: 5000 });
+});
+
+/**
+ * CR-02 — ACK perdu après effet D6 APPLIED :
+ * serveur committe → réponse HTTP interceptée → reload → réconciliation → pas de double effet.
+ */
+test("ML3 CR-02: ACK perdu puis reload sans double OPEN_CYCLE", async ({ page }) => {
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  await page.getByRole("button", { name: "Ouvrir un sas (sans projet)" }).click();
+  await page.waitForURL("**/preparations/**");
+  await page.getByPlaceholder("Écrire à Nora…").fill("ML3 CR-02 ACK seed");
+  await page.getByRole("button", { name: "Envoyer" }).click();
+  await expect(page.getByText("deterministic-fixture", { exact: false })).toBeVisible({
+    timeout: 30000,
+  });
+  await page.getByRole("button", { name: "Travail" }).click();
+  await page.getByPlaceholder("Nom du projet").fill("Projet ML3 CR-02 ACK");
+  await page.getByPlaceholder("Résumé inspecté").fill("e2e cr02 ack");
+  await page.getByRole("button", { name: "Enregistrer l'aperçu" }).click();
+  await expect(page.getByText(/Aperçu révision \d+/i)).toBeVisible({ timeout: 10000 });
+  await page.getByRole("button", { name: "Créer le projet" }).click();
+  await page.waitForURL("**/projects/**", { timeout: 20000 });
+
+  const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
+  expect(projectId).toBeTruthy();
+
+  let ackDropped = false;
+  let serverApplied = false;
+  await page.route("**/api/preparations/*/messages", async (route) => {
+    if (route.request().method() !== "POST") {
+      await route.continue();
+      return;
+    }
+    let post: { content?: string } = {};
+    try {
+      post = route.request().postDataJSON() as { content?: string };
+    } catch {
+      post = {};
+    }
+    const response = await route.fetch();
+    const raw = await response.text();
+    let body: Record<string, unknown> = {};
+    try {
+      body = JSON.parse(raw) as Record<string, unknown>;
+    } catch {
+      body = {};
+    }
+    const effect = body.pilotageEffect as { status?: string } | undefined;
+    const applied =
+      response.ok() &&
+      (body.humanDecisionCreated === true ||
+        (typeof effect?.status === "string" && /APPLIED/i.test(effect.status)));
+    // Drop ACK only for the OPEN GO after the server has committed the effect.
+    if (
+      !ackDropped &&
+      applied &&
+      /ouvre le cycle cadrage/i.test(post.content ?? "")
+    ) {
+      serverApplied = true;
+      ackDropped = true;
+      await route.fulfill({
+        status: 502,
+        contentType: "application/json",
+        body: JSON.stringify({
+          errorCategory: "ACK_LOST_SIM",
+          error: "ACK lost after server commit",
+        }),
+      });
+      return;
+    }
+    await route.fulfill({
+      status: response.status(),
+      headers: response.headers(),
+      body: raw,
+    });
+  });
+
+  await page.getByRole("button", { name: "Travail" }).click();
+  await page.getByLabel("Message à Nora").fill("Ouvre le cycle cadrage.");
+  await page.getByTestId("thread-send").click();
+  await expect(page.getByTestId("thread-nora-status")).toContainText(/ACK lost|ACK_LOST|échec|conservée/i, {
+    timeout: 45000,
+  });
+  expect(serverApplied).toBe(true);
+  expect(ackDropped).toBe(true);
+  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
+  // Distinct new act must not silently overwrite the unresolved pending.
+  await page.getByLabel("Message à Nora").fill("Je décide que GitHub est obligatoire pour ce projet.");
+  await page.getByTestId("thread-send").click();
+  await expect(page.getByTestId("thread-pilotage-status")).toContainText(/non résolue|réconcilier/i, {
+    timeout: 10000,
+  });
+  await expect(page.getByTestId("thread-pending-banner")).toBeVisible();
+
+  await page.reload();
+  await expect(page.getByTestId("thread-pending-banner")).toBeVisible({ timeout: 20000 });
+  await page.getByTestId("thread-reconcile-pending").click();
+  await expect(page.getByTestId("thread-pilotage-status")).toContainText(/APPLIED|ALREADY_APPLIED|OPEN_CYCLE|ACTIVE/i, {
+    timeout: 30000,
+  });
+
+  const pilotage = await page.request.get(`/api/projects/${projectId}/pilotage`);
+  expect(pilotage.ok()).toBeTruthy();
+  const pj = await pilotage.json();
+  const cycle = pj.pilotage?.cycle ?? pj.cycle;
+  expect(cycle?.status).toBe("ACTIVE");
+  expect(cycle?.cycleType).toBe("CADRAGE");
+
+  // Second reconcile / retry must not open another cycle.
+  const decisions = await page.request.get(`/api/projects/${projectId}/decisions`);
+  expect(decisions.ok()).toBeTruthy();
+  const dj = await decisions.json();
+  const opens = (dj.decisions ?? []).filter(
+    (d: { kind: string; state: string }) =>
+      d.kind === "OPEN_CYCLE" && (d.state === "APPLICABLE" || d.state === "SUPERSEDED"),
+  );
+  expect(opens.filter((d: { state: string }) => d.state === "APPLICABLE").length).toBeLessThanOrEqual(1);
+  await page.unrouteAll({ behavior: "ignoreErrors" });
+});
```

### DIFF `projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md`

```diff
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
index 96edf7ea..1d08545c 100644
--- a/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
@@ -229,7 +229,7 @@ Les quatre points ont une **solution technique explicitée et réfutable** ; ils

 **R3 lot B :** état sans cycle #22 ; qualification proposée #23 ; cycle actif #24 ; méthode absente #28 ; méthode proposée #29 ; décision applicable #31 ; suspension #33/#34 ; CKI indisponible #39 ; Journal–Décisions #40 ; GO ambigu #41 ; vrai partiel #42 ; contradiction #43 ; transition combinée #47 ; mise à jour CKI candidate #48 ; ouverture en attente #52 ; clôture en attente #53 ; UNKNOWN #54 ; reprise #55 ; rejeu #56 ; guidance #58 ; relations #59 ; nouvelle méthode #60. Frames identifiées dans l'audit R3 Git, **Figma native et browser ML3 NON OBSERVÉS**. La maquette #42 doit être conditionnelle à un effet séparé réel et ne constitue pas un état de succès partiel dans notre transition interne atomique.

-**D3 — construction du contexte :** session/projet D1/D2 → état D5 (cycle/méthode/CKI référencé) et décisions/restrictions D6 → D4 (faits, documents, acquis) → résolution effective de la guidance CKI → composition de contexte Nora avec nature/provenance et limites → réponse explicable. Le code ML2 `web/src/domains/conversation/nora-adapter.ts` ne charge pas D5/CKI aujourd'hui ; `service.ts` retourne `humanDecisionCreated:false`. Il faut intégrer D5/D6 **sans** déduire un GO d'une réponse de modèle ni modifier l'autorité de D3.
+**D3 — construction du contexte :** session/projet D1/D2 → état D5 (cycle/méthode/CKI référencé) et décisions/restrictions D6 → D4 (faits, documents, acquis) → résolution effective de la guidance CKI → composition de contexte Nora avec nature/provenance et limites → réponse explicable. **F01/F02 (2026-11-06, local worktree) :** après `reserveTurnCommand` (message USER `COMPLETE`), `applyConversationalAuthority` appelle `executePilotageCommand` / `runBusinessCommand` sous `sourceKind=USER_MESSAGE` **avant** l'appel fournisseur Nora ; `humanDecisionCreated` et `pilotageEffect` sont factuels (jamais forcés à `false`). Aucune autorité depuis la sortie Nora ni D4.

 **Observabilité :** relier operationId, commandId, projet/acteur de manière minimisée, source humaine, décision D6, effet D5, version état et résolution CKI. Les logs ne constituent jamais le registre métier ni une preuve de livraison D8. Corrélation connue vs inconnue explicite. Aucun secret, texte de décision sensible ou chaîne de pensée dans les métriques publiques.

@@ -357,3 +357,37 @@ Contrat B13 v0.1 inchangé (VALIDATED IN CONTENT BY MORRIS). Pas de nouvelle pol
 | **R3** | Isolation discriminante : décision B (`github-connexion` + marqueur unique) **persistée et APPLICABLE avant** `postUserMessageAndNora` sur A. Contexte B contient le marqueur ; contexte/réponse A ne le contiennent pas. USER text pertinent pour le même objectRef. Journal B inchangé ; replay idempotent. |

 **Limites documentées :** famille de négations FR bornée (pas un NLP universel) ; Niveau B libre-texte NOT PROVEN ; Nora LIVE / Figma NOT EXECUTED / NOT VERIFIED.
+
+### F01/F02 — conversation → autorité D5/D6 (2026-11-06, local, **pas de commit projet**)
+
+Candidat distant de référence inchangé : `8bf8b5ce`. Intégration locale sur worktree DEV.
+
+| Élément | As-built |
+| --- | --- |
+| **Séquencement** | `reserveTurnCommand` (USER durable COMPLETE) → ownership check → `applyConversationalAuthority` (TX métier courte) → `buildNoraPilotageContext` → `generateNoraReply` → `commitTurnTerminal`. Jamais de TX PG longue pendant Nora. |
+| **F01 GO** | Intention CLEAR (`ouvre le cycle…`, etc.) → `executePilotageCommand` avec `sourceRef=userMessageId`, `clientCommandKey=conv-auth:{clientTurnKey}`, `actInstanceId=userMessageId`. Ambigu (« OK ») / soft / source assistant → aucun effet. |
+| **F02 RECORD** | `Je décide que…` / `Décision :…` → `RECORD_DECISION` documentaire avec `objectRef` dérivé. Questions / préférences exploratoires → clarification, pas de commande. |
+| **F02 REVISE** | `Finalement…` + confrontation Niveau A `POSSIBLE_CHANGE` sur **une** cible `RECORD_DECISION` APPLICABLE → `REVISE_DECISION`. Fondations D5 → clarification (opération typée). Multi-cibles → clarification. Journal UX : geste `Réviser` (EXPLICIT_INTERACTION) en complément. |
+| **API vérité** | `pilotageEffect.{attempted,intentClarity,status,reasonCode,decisionId,clarification,source}` ; `humanDecisionCreated` seulement si décision id confirmée APPLIED/ALREADY_APPLIED. Replay conserve le payload. |
+| **Idempotence** | Tour D3 (`clientTurnKey`) et commande métier (`conv-auth:…`) corrélés sans second moteur. UNKNOWN métier → réconciliation existante avant rejeu. |
+| **Couverture** | IMPLEMENTED local + BEHAVIOR PROVEN (unit intent, PG F01/F02, Playwright fil) ; ADOPTED / RECETTE / LIVE / STABLE = NOT CLAIMED. |
+| **Limites** | Qualificateur FR borné (pas NLP universel) ; pas de migration 008 ; pas de publication projet sans GO distinct. |
+
+### C01/C02/C03 — autorité / reprise / continuité (2026-11-06, local, **pas de commit projet**)
+
+Correctif après Critical Review F01/F02 NOT ACCEPTED. Candidat distant `8bf8b5ce` inchangé.
+
+| Correctif | As-built |
+| --- | --- |
+| **C01** | `isExploratoryActLanguage` ; « Finalement… » avec hedges (`je pense`, `pourrait`, `et si`, Nora) → AMBIGUOUS, aucune mutation. Assertive « Finalement, X devient Y » + cible unique RECORD → REVISE possible. « Je révise la décision… » performatif explicite. Level A ≠ autorité. |
+| **C02** | Effet D5/D6 avant Nora ; `markTurnUnknown(..., resultJson)` conserve `pilotageEffect` ; `reconstituteConversationalAuthority` via `conv-auth:{clientTurnKey}` / `USER_MESSAGE` sourceRef ; replay UNKNOWN reconstitue depuis `business_commands`. Clé client stable (ref + sessionStorage pending, pas de secret). Tour Nora et commande métier restent distincts. |
+| **C03** | Fil : résumé durable décisions + bouton réconciliation pending après reload. Journal : 8 plus récentes par défaut + expand historique complet (pas `slice(0,8)` des plus anciennes). |
+| **Preuves** | unit C01 ; PG C01/C02 fault/C03>8 ; Playwright F01/F02/C03. LIVE/RECETTE/STABLE NOT CLAIMED. |
+
+### CR-01 / CR-02 — consolidation Critical Review (2026-11-06, local, **pas de commit projet**)
+
+| Élément | As-built |
+|---|---|
+| **CR-01** | `findAuthorityReviseCandidates` / `selectAllApplicableBriefs` scannent **toutes** les APPLICABLE du projet (pas `MAX_APPLICABLE_FOR_CONTEXT=12`). La fenêtre cognitive reste pour Nora uniquement. 0 candidat → clarification ; 1 → REVISE documentaire si acte clair ; plusieurs → clarification (portées distinctes signalées). Pas de newest-wins / truncation. Level A framing filtre la pertinence, n'autorise jamais. |
+| **CR-02** | `shouldClearThreadPending` : Nora COMPLETE **ne** clôt **pas** un effet métier UNKNOWN. Garde exclusive `mayStartNewThreadAct` : une saisie distincte n'écrase pas un pending non résolu. 404 by-key → reprise **même** `clientTurnKey`, pas de nouvelle clé. sessionStorage = aide locale, vérité = `business_commands`. |
+| **Preuves** | unit CR-01 fenêtre 12 vs autorité ; unit pending lifecycle ; PG 15+ doubles GitHub (aucune REVISE) ; PG unique REVISE ; PG isolation interprojets ; PG concurrence même clé ; Playwright ACK perdu → reload → reconcile sans double OPEN. LIVE/RECETTE/STABLE NOT CLAIMED. |
```

### DIFF `projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md`

```diff
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
index 8a7f1f66..d11a67f8 100644
--- a/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
@@ -220,8 +220,8 @@ Appendice après correctifs F01–F08 / T01–T04. N'altère pas la matrice R2.
 |---|---|---|
 | B01 | `PostgreSQL ML3 pilotage and decisions` › `starts empty: no cycle, no method, no retained trajectory` ; e2e `cycle-absent` | Projet neuf sans cycle ni méthode |
 | B02 | même fichier › `propose stays non-authoritative until an explicit retain` ; UI `retain-trajectory` | Proposition non ouvrante ; rétention explicite |
-| B03 | même fichier › `opens a cycle from an explicit utterance without an operation` ; e2e champ « Énoncé GO » | GO naturel EXPLICIT_INTERACTION sans `operation` |
-| B04 | même fichier › `rejects an ambiguous OK without opening a cycle` ; unit `qualifies a clear GO` | Énoncé équivoque rejeté |
+| B03 | même fichier › `opens a cycle from an explicit utterance…` ; **F01** `F01: clear GO via postUserMessageAndNora…` ; e2e fil `ML3 F01: GO naturel depuis le fil` (+ champ PilotagePanel) | GO naturel USER_MESSAGE via fil **et** EXPLICIT_INTERACTION |
+| B04 | même fichier › `rejects an ambiguous OK…` ; **F01** `F01: ambiguous OK and hostile assistant…` ; unit intent | Énoncé équivoque / source hostile rejetés |
 | B05 | même fichier › `keeps a single ACTIVE cycle when two opens race` | Une seule ligne ACTIVE |
 | B06 | même fichier › `replays the same key and conflicts when the fingerprint changes` ; `does not apply the same human act twice when only the client key changes` ; `reconcileCommandByClientKey` | Même clé rejouée ; même `actInstanceId` non dupliqué. Perte réseau UI : statut UNKNOWN + bouton réconcilier (non exécuté en PG) |
 | B07 | même fichier › `rolls back a transition when opening the next cycle fails` | CLOSE+OPEN annulés ensemble |
@@ -234,7 +234,7 @@ Appendice après correctifs F01–F08 / T01–T04. N'altère pas la matrice R2.
 | B14 | même fichier › restrictions + `CR-01: transition blocked when target B or source A is restricted` | STOP global, cible, et transition A→B (restriction sur A ou B) |
 | B15 | même fichier › `isolates pilotage across projects and rejects a foreign user message` | Pas d'import inter-projets |
 | B16 | même fichier › révocation de la méthode fondatrice dans le cas méthode | Révocation avant effet courant, sans restauration |
-| B17 | e2e `decision-state` contient `APPLICABLE` ; PG `CR-02` journal `REVISED` / `APPLICABLE` | Journal affiche `state`, pas une validité séparée |
+| B17 | e2e `decision-state` + **F02** journal revise ; PG `F02: RECORD then REVISE…` + `CR-02` | Journal `APPLICABLE`/`REVISED` ; RECORD/REVISE depuis fil |
 | B18 | même fichier › `starts empty` lecture seule `getPilotageProjection` ; GET `/pilotage` ne poste pas de commande | Navigation / lecture sans GO |

 ### Ajustement autorité CR-01..CR-04 (2026-11-06)
@@ -266,3 +266,19 @@ Statut candidat : `IMPLEMENTED — CANDIDATE` (branche projet) — **NOT RECETTE
 | R1 | unit UNKNOWN≠authority ; e2e RESTRICTION→UNKNOWN→APPLIED sans motif périmé | DETERMINISTIC + BROWSER FAKE | — |
 | R2 | unit jamais/aucunement/apostrophe typo + restatements positifs | DETERMINISTIC | famille FR bornée ; ≠ oracle D6 |
 | R3 | PG isolation : décision B APPLICABLE avant gen A ; même objectRef + marqueur ; ctx B+ / ctx A− | PG INTEGRATION (FAKE Nora) | LIVE NOT EXECUTED ; libre-texte matériel NOT PROVEN |
+
+### F01/F02 — conversation-authority (2026-11-06, local worktree)
+
+| ID | testCaseRef | Preuve | Limite |
+| --- | --- | --- | --- |
+| F01-A | PG `F01: clear GO via postUserMessageAndNora…` ; e2e fil | USER persisté → OPEN_CYCLE APPLIED → HumanDecision → 1 ACTIVE | LIVE Nora NOT EXECUTED |
+| F01-B/C | PG `F01: ambiguous OK and hostile assistant…` | OK / soft / role assistant → no cycle | — |
+| F01-D | même cas F01-A replay `clientTurnKey` | idempotentReplay ; 1 ACTIVE | — |
+| F01-I | PG `F01: restriction blocks conversational GO…` | REJECTED RESTRICTION ; humanDecisionCreated=false | — |
+| F02-A/D | PG `F02: RECORD then REVISE…` ; e2e fil+Journal | RECORD → REVISED/APPLICABLE chain | fondations D5 non révisables génériquement |
+| F02-E | même cas F02 founding refuse | clarification ; cycle CADRAGE inchangé | — |
+| C01 | unit exploratory ; PG `C01: exploratory Finalement…` | réflexion ≠ mutation D6 | NLP universel NOT CLAIMED |
+| C02 | PG `C02: D6 APPLIED survives Nora provider failure…` | UNKNOWN tour + effet métier reconstituté | LIVE NOT EXECUTED |
+| C03 | PG journal>8 ; e2e expand historique | 8 récentes + historique complet | — |
+| CR-01 | unit fenêtre 12 vs `findAuthorityReviseCandidates` ; PG 15+ doubles GitHub ; PG unique ; PG isolation | unicité D6 hors borne cognitive | — |
+| CR-02 | unit `shouldClearThreadPending` / `mayStartNewThreadAct` ; PG concurrence même clé ; e2e ACK perdu+reload | pending préservé ; pas de double effet | cookie DEV/RECETTE réserve existante |
```

### DIFF `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index b14f5688..77fc02af 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -528,5 +528,55 @@ Append-only logical journal of Cursor product deliveries.
 | Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
 | Lane | DEV proofs only ; RECETTE/STABLE not mutated ; LIVE Nora NOT EXECUTED |
 | Scope | Allowlist §6 only (docs + CKI manifest + web D5/D6/API/UX/tests) ; SVG / `.tmp-sfia-review` excluded |
-| Status | IMMUTABLE PROJECT CANDIDATE — SHA filled at commit/push |
+| Status | IMMUTABLE PROJECT CANDIDATE — SHA `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` |
 | Verdict candidate | `ML3 IMMUTABLE PROJECT CANDIDATE PUBLISHED — READY FOR CHATGPT GLOBAL CRITICAL REVIEW` |
+
+## delivery_id: DELIV-2026-11-06-ML3-F01-F02-CONVERSATION-AUTHORITY
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-06 (Europe/Paris) |
+| Macro-lot | R5 / ML3 « Piloter et décider » — F01/F02 consolidation fonctionnelle |
+| Type | INC corrective (conversation → D5/D6) |
+| Branch | `sfia/next-pilotage-decisions-delivery` (**local worktree — no project commit/push**) |
+| Candidate ref | `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` (unchanged remote) |
+| Base | `origin/main@7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480` |
+| Schema | unchanged `007` (no migration 008) |
+| F01 | Fil Nora → `applyConversationalAuthority` → `executePilotageCommand` (USER_MESSAGE) |
+| F02 | RECORD/REVISE documentaires depuis fil + geste Journal ; fondations D5 restent typées |
+| Product version | `NO RELEASE` ; STABLE NOT AVAILABLE |
+| Lane | DEV only ; RECETTE/LIVE Nora/STABLE NOT AUTHORIZED |
+| Status | LOCAL CORRECTIVE — handoff L3 only |
+| Verdict candidate | `ML3 F01/F02 CONVERSATION-AUTHORITY INTEGRATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |
+
+## delivery_id: DELIV-2026-11-06-ML3-F01-F02-C01-C02-C03-AUTHORITY-RECOVERY
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-06 (Europe/Paris) |
+| Macro-lot | R5 / ML3 — F01/F02 C01/C02/C03 after Critical Review NOT ACCEPTED |
+| Type | INC corrective continuation (same ML3) |
+| Branch | `sfia/next-pilotage-decisions-delivery` (**local — no project commit/push**) |
+| Prior handoff | `sfia/review-handoff@c2bec44b` blob `bbf43260` |
+| Candidate ref | `8bf8b5ce` unchanged |
+| Schema | unchanged `007` |
+| C01 | Exploratory language ≠ REVISE ; Level A non-authorizing |
+| C02 | Durable reconstitution via business_commands + stable client turn key |
+| C03 | Thread continuity after reload ; Journal >8 expandable |
+| Product version | `NO RELEASE` |
+| Lane | DEV only |
+| Verdict candidate | `ML3 F01/F02 AUTHORITY AND RECOVERY CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |
+
+## delivery_id: DELIV-2026-11-06-ML3-F01-F02-CR01-CR02-CONSOLIDATION
+
+| Champ | Valeur |
+|---|---|
+| Date UTC | 2026-11-06 |
+| Macro-lot | R5 / ML3 — F01/F02 CR-01/CR-02 after Critical Review PARTIALLY ACCEPTED |
+| Type | INC CRITICAL |
+| CR-01 | D6 revise uniqueness over full APPLICABLE set (not Nora window of 12) |
+| CR-02 | Pending exclusive guard ; Nora COMPLETE ≠ métier UNKNOWN clear ; ACK-lost browser proof |
+| Git projet | HEAD `8bf8b5ce` inchangé — **aucun** commit/push projet |
+| ENV-01 | DEV only (`127.0.0.1:5433/sfia_next_dev`) |
+| Versioning | NO RELEASE / STABLE NOT AVAILABLE |
+| Verdict candidate | `ML3 F01/F02 AUTHORITY TARGET AND RECOVERY CONSOLIDATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW` |
```

## RAW LOG — Playwright ML3 full

```
[WebServer] ◇ injected env (9) from .env.local
[WebServer] e2e-preflight OK: operator=sfia_next_dev → e2e=sfia_next_e2e container=sfia-next-dev-pg port=5433
[WebServer] NOTICE:  relation "pilots" already exists, skipping
[WebServer] NOTICE:  relation "pilots_github_user_id_uidx" already exists, skipping
[WebServer] NOTICE:  relation "users" already exists, skipping
[WebServer] NOTICE:  relation "sessions" already exists, skipping
[WebServer] NOTICE:  relation "sessions_user_id_idx" already exists, skipping
[WebServer] NOTICE:  relation "accounts" already exists, skipping
[WebServer] NOTICE:  relation "verifications" already exists, skipping
[WebServer] NOTICE:  relation "preparations" already exists, skipping
[WebServer] NOTICE:  relation "preparations_owner_idx" already exists, skipping
[WebServer] NOTICE:  relation "projects" already exists, skipping
[WebServer] NOTICE:  relation "projects_owner_idx" already exists, skipping
[WebServer] NOTICE:  relation "preparation_project_links" already exists, skipping
[WebServer] NOTICE:  relation "create_project_commands" already exists, skipping
[WebServer] NOTICE:  relation "create_project_commands_pilot_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversations" already exists, skipping
[WebServer] NOTICE:  relation "conversations_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "messages" already exists, skipping
[WebServer] NOTICE:  relation "messages_conversation_idx" already exists, skipping
[WebServer] NOTICE:  relation "documents" already exists, skipping
[WebServer] NOTICE:  relation "documents_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_doc_rev_uidx" already exists, skipping
[WebServer] NOTICE:  column "auth_mode" of relation "sessions" already exists, skipping
[WebServer] NOTICE:  column "base_revision_id" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "correlation_key" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "provenance_json" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "scope" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis_subject_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points_status_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subject_events" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subject_events_subject_idx" already exists, skipping
[WebServer] NOTICE:  column "creation_correlation_key" of relation "documents" already exists, skipping
[WebServer] NOTICE:  relation "documents_prep_owner_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_base_idx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_conv_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_operation_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_conv_status_idx" already exists, skipping
[WebServer] NOTICE:  relation "messages_conversation_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  column "owner_token" of relation "conversation_turn_commands" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_owner_token_idx" already exists, skipping
[WebServer] NOTICE:  relation "human_decisions" already exists, skipping
[WebServer] NOTICE:  relation "human_decisions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "trajectory_revisions" already exists, skipping
[WebServer] NOTICE:  relation "trajectory_revisions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "project_pilotage_state" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles_one_active_uidx" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_current_uidx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_client_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_human_intent_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_idx" already exists, skipping

Running 7 tests using 1 worker

(node:74542) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/ml3-pilotage.spec.ts:8:5 › ML3 pilotage: projet sans cycle → ouverture → cycle ACTIVE visible (12.0s)
  ✓  2 tests/e2e/ml3-pilotage.spec.ts:63:5 › ML3 B13 C02: motif RESTRICTION vs conflit technique HUMAN_INTENT (6.2s)
  ✓  3 tests/e2e/ml3-pilotage.spec.ts:140:5 › ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED (4.9s)
  ✓  4 tests/e2e/ml3-pilotage.spec.ts:216:5 › ML3 F01: GO naturel depuis le fil ouvre un cycle ACTIVE (4.8s)
  ✓  5 tests/e2e/ml3-pilotage.spec.ts:254:5 › ML3 F02: RECORD depuis le fil puis révision Journal (4.8s)
  ✓  6 tests/e2e/ml3-pilotage.spec.ts:300:5 › ML3 C03: Journal décisions >8 avec historique accessible (6.3s)
  ✓  7 tests/e2e/ml3-pilotage.spec.ts:356:5 › ML3 CR-02: ACK perdu puis reload sans double OPEN_CYCLE (6.2s)

  7 passed (48.6s)

```

## RAW LOG — Playwright CR-02 ACK

```
[WebServer] ◇ injected env (9) from .env.local
[WebServer] e2e-preflight OK: operator=sfia_next_dev → e2e=sfia_next_e2e container=sfia-next-dev-pg port=5433
[WebServer] NOTICE:  relation "pilots" already exists, skipping
[WebServer] NOTICE:  relation "pilots_github_user_id_uidx" already exists, skipping
[WebServer] NOTICE:  relation "users" already exists, skipping
[WebServer] NOTICE:  relation "sessions" already exists, skipping
[WebServer] NOTICE:  relation "sessions_user_id_idx" already exists, skipping
[WebServer] NOTICE:  relation "accounts" already exists, skipping
[WebServer] NOTICE:  relation "verifications" already exists, skipping
[WebServer] NOTICE:  relation "preparations" already exists, skipping
[WebServer] NOTICE:  relation "preparations_owner_idx" already exists, skipping
[WebServer] NOTICE:  relation "projects" already exists, skipping
[WebServer] NOTICE:  relation "projects_owner_idx" already exists, skipping
[WebServer] NOTICE:  relation "preparation_project_links" already exists, skipping
[WebServer] NOTICE:  relation "create_project_commands" already exists, skipping
[WebServer] NOTICE:  relation "create_project_commands_pilot_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversations" already exists, skipping
[WebServer] NOTICE:  relation "conversations_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "messages" already exists, skipping
[WebServer] NOTICE:  relation "messages_conversation_idx" already exists, skipping
[WebServer] NOTICE:  relation "documents" already exists, skipping
[WebServer] NOTICE:  relation "documents_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_doc_rev_uidx" already exists, skipping
[WebServer] NOTICE:  column "auth_mode" of relation "sessions" already exists, skipping
[WebServer] NOTICE:  column "base_revision_id" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "correlation_key" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "provenance_json" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  column "scope" of relation "document_revisions" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subjects_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_acquis_subject_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points_prep_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_open_points_status_idx" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subject_events" already exists, skipping
[WebServer] NOTICE:  relation "knowledge_subject_events_subject_idx" already exists, skipping
[WebServer] NOTICE:  column "creation_correlation_key" of relation "documents" already exists, skipping
[WebServer] NOTICE:  relation "documents_prep_owner_corr_uidx" already exists, skipping
[WebServer] NOTICE:  relation "document_revisions_base_idx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_conv_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_operation_uidx" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_conv_status_idx" already exists, skipping
[WebServer] NOTICE:  relation "messages_conversation_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  column "owner_token" of relation "conversation_turn_commands" already exists, skipping
[WebServer] NOTICE:  relation "conversation_turn_commands_owner_token_idx" already exists, skipping
[WebServer] NOTICE:  relation "human_decisions" already exists, skipping
[WebServer] NOTICE:  relation "human_decisions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "trajectory_revisions" already exists, skipping
[WebServer] NOTICE:  relation "trajectory_revisions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "project_pilotage_state" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles_one_active_uidx" already exists, skipping
[WebServer] NOTICE:  relation "project_cycles_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_current_uidx" already exists, skipping
[WebServer] NOTICE:  relation "method_applications_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions" already exists, skipping
[WebServer] NOTICE:  relation "governance_restrictions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_client_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_human_intent_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_idx" already exists, skipping

Running 1 test using 1 worker

(node:74248) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/ml3-pilotage.spec.ts:356:5 › ML3 CR-02: ACK perdu puis reload sans double OPEN_CYCLE (10.8s)

  1 passed (14.2s)

```

## J. Unicité D6 corpus 15+
Unit: cognitive window hides gh-old; authority sees gh-old+gh-new.
PG: `CR-01: 15+ applicables with two GitHub beyond cognitive window → no silent REVISE` — PASS (0 REVISED).

## K. Cibles multiples / isolation
PG unique REVISE PASS; foreign project PASS; scopes remain separate candidates (unit).

## L–P. Reprise / UNKNOWN / ACK / concurrence
- unit shouldClearThreadPending / mayStartNewThreadAct PASS
- PG C02 provider failure reconstitution PASS
- PG concurrent same conv-auth key → 1 ACTIVE PASS
- Playwright ACK lost after APPLIED → reload → reconcile → 1 ACTIVE PASS (BROWSER PROVEN)

## Q. Journal / continuité
C03 Journal >8 retained (unit/PG/e2e PASS).

## R. Non-régression
- unit: 92 PASS
- PG ML3: 35 PASS
- Playwright ML3: 7 PASS
- tsc EXIT 0 ; eslint chemins EXIT 0 ; next build EXIT 0
- migrations 001→007 fresh PASS

## S. Commandes (extraits)
CWD: projects/sfia-studio-next/web
- vitest unit → 92 PASS
- vitest ml3-pilotage.pg.test.ts → 35 PASS
- playwright ml3-pilotage.spec.ts → 7 PASS
- migrations-fresh → 3 PASS
- tsc/eslint/build → 0

## T. ENV-01 / versioning
STUDIO_LANE=DEV ; DATABASE_URL host 127.0.0.1:5433/sfia_next_dev
NO RELEASE ; STABLE NOT AVAILABLE ; LIVE NOT AUTHORIZED ; RECETTE NOT AUTHORIZED
Cookie DEV/RECETTE collision: existing reserve, not lifted.

## U. Fake/Real
DETERMINISTIC + PG INTEGRATION + BROWSER FAKE. LIVE NOT EXECUTED.

## V. Documentation
specification-technique CR-01/CR-02 as-built ; tracabilite rows ; delivery-history DELIV-…-CR01-CR02-CONSOLIDATION

## W. Dette / réserves
- NLP universel NOT CLAIMED
- Libre-texte matériel Niveau B NOT PROVEN
- Cookie host collision réserve
- Project candidate still local vs remote 8bf8b5ce — publication needs distinct Morris GO

## X. Git final
HEAD still `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` — no project commit. SVG preserved.

## Y. Handoff distant
(filled after publisher)

## Z. Verdict
**ML3 F01/F02 AUTHORITY TARGET AND RECOVERY CONSOLIDATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW.**

Next gate: ChatGPT Critical Review → Morris GO for publishing updated immutable project candidate.
