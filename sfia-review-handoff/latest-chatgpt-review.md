# SFIA Studio Next — ML3 F01/F02 C01/C02/C03 Authority Recovery Continuity Review Pack FULL

## A. Date, GO, type, profil
- Date UTC: 2026-11-06T16:03:57Z
- GO Morris: 2026-11-06 CRITICAL INC — F01/F02 authority / recovery / continuity after CR NOT ACCEPTED
- Type: INC corrective continuation (same ML3 macro-lot)
- Profil: CRITICAL
- Autorisé: code local + tests + docs + Review Pack FULL + handoff L3
- Interdit: commit/push projet, PR, merge, migration 008, RECETTE, LIVE, STABLE

## B. Git Truth initial/final
- Branch: `sfia/next-pilotage-decisions-delivery`
- HEAD / origin delivery: `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` / `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` (= 8bf8b5ce expected)
- origin/main: `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480`
- Prior handoff: `c2bec44bfea9d8a1e80518ecf26069e8c4858b74` blob `bbf43260c0faf4ef94a182d303861621f3dbdef8` (c2bec44b / bbf43260 expected at start)
- Status:
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
 M projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
 M projects/sfia-studio-next/web/src/domains/pilotage/service.ts
 M projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
 M projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
?? projects/sfia-studio-next/web/public/file.svg
?? projects/sfia-studio-next/web/public/globe.svg
?? projects/sfia-studio-next/web/public/next.svg
?? projects/sfia-studio-next/web/public/vercel.svg
?? projects/sfia-studio-next/web/public/window.svg
?? projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts

```
- Diff stat:
```
 .../construction/delivery-history.md               |  38 ++-
 .../specification-technique.md                     |  28 +-
 .../pilotage-et-decisions/tracabilite-r2-r3-r4.md  |  20 +-
 .../preparations/[preparationId]/messages/route.ts |   9 +-
 .../web/src/app/projects/[projectId]/page.tsx      | 294 +++++++++++++++--
 .../web/src/components/PilotagePanel.tsx           | 124 +++++++-
 .../web/src/domains/conversation/service.ts        | 220 ++++++++++++-
 .../web/src/domains/conversation/turn-command.ts   |   8 +
 .../web/src/domains/pilotage/intent.ts             | 115 +++++++
 .../web/src/domains/pilotage/service.ts            |  16 +-
 .../web/tests/e2e/ml3-pilotage.spec.ts             | 140 +++++++++
 .../web/tests/integration/ml3-pilotage.pg.test.ts  | 348 ++++++++++++++++++++-
 .../web/tests/unit/ml3-cki-intent.test.ts          |  43 +++
 13 files changed, 1352 insertions(+), 51 deletions(-)

```
- SVG untracked préservés. Aucun commit/push projet.

## C. Sources et refs
- SFIA v2.6 routing + cycle template
- SEF/roadmap/decisions/naming ; ENV-01 blob 14b61f0d ; versioning blob 8bc93e0f
- R2 décisions/trajectoire/nora ; RG-GOV-001..016/027..029 ; RG-TRJ-009/015/016
- R3 audit/contrat/espace projet ; R4 cadrage §5.5
- Construction as-built + handoff F01/F02 c2bec44b relu intégralement
- Code local F01/F02 préservé puis corrigé C01–C03

## D. Diagnostic C01/C02/C03
### C01
- `Finalement…` qualifié CLEAR REVISE sans filtre exploratoire → faux acte possible (« je pense / pourrait »).
- Level A POSSIBLE_CHANGE filtrait les cibles mais ne devait jamais autoriser seul.

### C02
- D5/D6 appliqué avant Nora ; si Nora échoue avant terminal, `resultJson` manquait → replay perdait la visibilité métier.
- `sendMessage` projet mintait une nouvelle `clientTurnKey` à chaque clic → retry = nouvel acte.

### C03
- `pilotageStatus` React-only disparaissait au reload.
- Journal `decisions.slice(0,8)` sur ordre ascendant → masquait les plus récentes si >8.

## E. Blast radius
- intent.ts, conversation-authority.ts (new+updated), conversation/service.ts, turn-command.ts
- page.tsx, PilotagePanel.tsx, messages route (prior)
- tests unit/PG/e2e + docs construction
- Non touché: command-runner core, migrations, SEF/roadmap, SVG

## F. Séquencement AVANT / APRÈS
### AVANT (F01/F02)
USER persist → authority → Nora → terminal resultJson (seul porteur de pilotageEffect)
Client: nouvelle clé à chaque send ; Journal slice oldest 8

### APRÈS (C01–C03)
USER persist COMPLETE
→ ownership
→ applyConversationalAuthority (short TX) ; skip if AMBIGUOUS exploratory
→ (hook afterAuthorityBeforeNora)
→ Nora OR provider failure
→ on failure: markTurnUnknown(resultJson with pilotageEffect) ; return UNKNOWN without inventing COMPLETE
→ replay UNKNOWN: reconstitute from business_commands via conv-auth:{key} / USER_MESSAGE sourceRef
Client: stable turn key + sessionStorage pending (no secrets) + reconcile by-key
Journal: 8 newest + expand full history

## G. Inventaire fichiers
- CREATED (untracked): conversation-authority.ts
- MODIFIED: intent, service conversation, turn-command, page, PilotagePanel, messages route, service pilotage, tests, docs

## H. Fichier créé (intégral)
### conversation-authority.ts
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
  findMessageDecisionConfrontations,
  type DecisionBrief,
} from "@/domains/decisions/divergence-assist";
import { toCommandResult } from "@/domains/pilotage/command-runner";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import {
  executePilotageCommand,
  getPilotageProjection,
  reconcileCommandByClientKey,
} from "@/domains/pilotage/service";
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
  return `conv-auth:${clientTurnKey.trim()}`;
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
 * Resolve a documentary REVISE target.
 * Level A POSSIBLE_CHANGE only filters candidates — never authorizes by itself.
 * Qualify must already be CLEAR (caller). Founding D5 kinds are refused.
 */
function resolveReviseTarget(
  utterance: string,
  briefs: DecisionBrief[],
):
  | { ok: true; decisionId: string; statement: string }
  | { ok: false; reason: string } {
  const signals = findMessageDecisionConfrontations(utterance, briefs).filter(
    (s) => s.framing === "POSSIBLE_CHANGE",
  );
  if (signals.length === 0) {
    return {
      ok: false,
      reason: "Aucune décision applicable clairement revisitée — précisez la cible",
    };
  }
  if (signals.length > 1) {
    return {
      ok: false,
      reason: "Plusieurs décisions candidates — précisez laquelle réviser",
    };
  }
  const signal = signals[0];
  const target = briefs.find((b) => b.id === signal.decisionId);
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

## I. Diffs utiles complets

### projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
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

### projects/sfia-studio-next/web/src/domains/conversation/service.ts
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

### projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
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

### projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 09f0d896..c95b688e 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -1,6 +1,6 @@
 "use client";

-import { useEffect, useState } from "react";
+import { useEffect, useRef, useState } from "react";
 import { useParams, useRouter } from "next/navigation";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { PilotagePanel } from "@/components/PilotagePanel";
@@ -23,6 +23,51 @@ type Knowledge = {

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
+type PendingTurn = {
+  content: string;
+  clientTurnKey: string;
+  clientCommandKey: string;
+};
+
+function pendingStorageKey(projectId: string) {
+  return `sfia.thread.pending:${projectId}`;
+}
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
@@ -35,9 +80,132 @@ export default function ProjectPage() {
   const [surface, setSurface] = useState<Surface>("travail");
   const [draft, setDraft] = useState("");
   const [busy, setBusy] = useState(false);
-  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing">("idle");
+  const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [status, setStatus] = useState("");
+  const [pilotageStatus, setPilotageStatus] = useState("");
+  const [decisionSummary, setDecisionSummary] = useState("");
   const [inspect, setInspect] = useState<Doc | null>(null);
+  const [unresolvedPending, setUnresolvedPending] = useState<PendingTurn | null>(null);
+  const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
+
+  function rememberPending(pending: PendingTurn | null) {
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
+  function readPending(): PendingTurn | null {
+    if (typeof sessionStorage === "undefined") return null;
+    try {
+      const raw = sessionStorage.getItem(pendingStorageKey(params.projectId));
+      if (!raw) return null;
+      return JSON.parse(raw) as PendingTurn;
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
+  async function reconcilePending(pending: PendingTurn) {
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
+        if (cmd.status && cmd.status !== "UNKNOWN") {
+          rememberPending(null);
+          messageTurnKeyRef.current = null;
+        }
+        await refreshDurablePilotage();
+        return;
+      }
+      // No durable command yet — retry the same turn key (idempotent if already applied).
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
+        if (j.status === "COMPLETE" || (effect?.attempted && effect.status && effect.status !== "UNKNOWN")) {
+          rememberPending(null);
+          messageTurnKeyRef.current = null;
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
@@ -65,34 +233,89 @@ export default function ProjectPage() {
         `Même fil · préparation ${j.preparation?.id ?? "liée"} · conversation ${j.conversation?.id ?? "—"} · réouverture par projectId`,
       );
       setError("");
+      await refreshDurablePilotage();
+      const pending = readPending();
+      if (pending) {
+        setUnresolvedPending(pending);
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
+    const text = draft.trim();
+    // C02 — same content reuses the same turn key until a terminal result clears it.
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
+    const clientCommandKey = `conv-auth:${clientTurnKey}`;
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
       }
-    } else setStatus(j.error ?? "échec");
+      if (res.ok) {
+        setMessages((j.messages as Msg[]) ?? []);
+        setStatus(`Nora ${String(j.noraMode ?? "")} · ${String(j.status ?? "")}`);
+        const effect = j.pilotageEffect as PilotageEffectView | undefined;
+        setPilotageStatus(formatPilotageEffect(effect, Boolean(j.humanDecisionCreated)));
+        const turnDone =
+          j.status === "COMPLETE" ||
+          (effect?.attempted && effect.status && effect.status !== "UNKNOWN");
+        if (turnDone) {
+          rememberPending(null);
+          messageTurnKeyRef.current = null;
+          setDraft("");
+        } else if (j.status === "UNKNOWN" || j.status === "FAILED") {
+          // Keep pending — durable command may already exist.
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
+        setNoraActivity("error");
+        setStatus(
+          res.status === 409
+            ? `${String(j.errorCategory ?? j.error ?? "conflit")} — intention de tour conservée`
+            : String(j.error ?? j.errorCategory ?? "échec"),
+        );
+      }
+    } catch {
+      setNoraActivity("error");
+      setStatus("échec réseau — intention de tour conservée");
+    } finally {
+      setBusy(false);
+    }
   }

   if (error) {
@@ -170,7 +393,32 @@ export default function ProjectPage() {
               <button className="btn" disabled={busy || !preparationId} onClick={sendMessage}>
                 Envoyer
               </button>
-              {status ? <p className="text-xs muted">{status}</p> : null}
+              {unresolvedPending ? (
+                <button
+                  type="button"
+                  className="btn secondary"
+                  disabled={busy}
+                  data-testid="thread-reconcile-pending"
+                  onClick={() => void reconcilePending(unresolvedPending)}
+                >
+                  Réconcilier la tentative en cours
+                </button>
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

### projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
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

### projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
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

### projects/sfia-studio-next/web/src/domains/pilotage/service.ts
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

### projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
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

### projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
index f333a075..9a735035 100644
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

@@ -1167,4 +1168,349 @@ describe("PostgreSQL ML3 pilotage and decisions", () => {
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
 });

```

### projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
index 4403fac3..e8737523 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
@@ -208,3 +208,143 @@ test("ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED", async ({
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

```

### projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
```diff
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
index 96edf7ea..b6373650 100644
--- a/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
@@ -229,7 +229,7 @@ Les quatre points ont une **solution technique explicitée et réfutable** ; ils

 **R3 lot B :** état sans cycle #22 ; qualification proposée #23 ; cycle actif #24 ; méthode absente #28 ; méthode proposée #29 ; décision applicable #31 ; suspension #33/#34 ; CKI indisponible #39 ; Journal–Décisions #40 ; GO ambigu #41 ; vrai partiel #42 ; contradiction #43 ; transition combinée #47 ; mise à jour CKI candidate #48 ; ouverture en attente #52 ; clôture en attente #53 ; UNKNOWN #54 ; reprise #55 ; rejeu #56 ; guidance #58 ; relations #59 ; nouvelle méthode #60. Frames identifiées dans l'audit R3 Git, **Figma native et browser ML3 NON OBSERVÉS**. La maquette #42 doit être conditionnelle à un effet séparé réel et ne constitue pas un état de succès partiel dans notre transition interne atomique.

-**D3 — construction du contexte :** session/projet D1/D2 → état D5 (cycle/méthode/CKI référencé) et décisions/restrictions D6 → D4 (faits, documents, acquis) → résolution effective de la guidance CKI → composition de contexte Nora avec nature/provenance et limites → réponse explicable. Le code ML2 `web/src/domains/conversation/nora-adapter.ts` ne charge pas D5/CKI aujourd'hui ; `service.ts` retourne `humanDecisionCreated:false`. Il faut intégrer D5/D6 **sans** déduire un GO d'une réponse de modèle ni modifier l'autorité de D3.
+**D3 — construction du contexte :** session/projet D1/D2 → état D5 (cycle/méthode/CKI référencé) et décisions/restrictions D6 → D4 (faits, documents, acquis) → résolution effective de la guidance CKI → composition de contexte Nora avec nature/provenance et limites → réponse explicable. **F01/F02 (2026-11-06, local worktree) :** après `reserveTurnCommand` (message USER `COMPLETE`), `applyConversationalAuthority` appelle `executePilotageCommand` / `runBusinessCommand` sous `sourceKind=USER_MESSAGE` **avant** l'appel fournisseur Nora ; `humanDecisionCreated` et `pilotageEffect` sont factuels (jamais forcés à `false`). Aucune autorité depuis la sortie Nora ni D4.

 **Observabilité :** relier operationId, commandId, projet/acteur de manière minimisée, source humaine, décision D6, effet D5, version état et résolution CKI. Les logs ne constituent jamais le registre métier ni une preuve de livraison D8. Corrélation connue vs inconnue explicite. Aucun secret, texte de décision sensible ou chaîne de pensée dans les métriques publiques.

@@ -357,3 +357,29 @@ Contrat B13 v0.1 inchangé (VALIDATED IN CONTENT BY MORRIS). Pas de nouvelle pol
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

```

### projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
```diff
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
index 8a7f1f66..6906dc51 100644
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
@@ -266,3 +266,17 @@ Statut candidat : `IMPLEMENTED — CANDIDATE` (branche projet) — **NOT RECETTE
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

```

### projects/sfia-studio-next/construction/delivery-history.md
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index b14f5688..8ec94581 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -528,5 +528,41 @@ Append-only logical journal of Cursor product deliveries.
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

```


## J. Tests fausse révision (C01)
- Unit: exploratory Finalement / questions / Nora → AMBIGUOUS/NONE ; assertive + Je révise → CLEAR
- PG: RECORD then exploratory messages → journal APPLICABLE inchangé, pas de REVISED

## K. Tests reprise après effet (C02)
- PG T01: afterAuthorityBeforeNora throw → status UNKNOWN ; pilotageEffect APPLIED ; cycle ACTIVE
- Replay même clientTurnKey → idempotentReplay UNKNOWN ; un seul ACTIVE ; reconstitution by key

## L. Replay / concurrence
- Même key / même payload: reconstitute, pas de 2e effet
- Payload mismatch: contrat existant PAYLOAD_MISMATCH (turn-command)
- Restriction path: F01 rest test still REJECTED sans faux succès

## M. Assertions PG D6
- C01: applicable ids stables
- C02: HumanDecision + OPEN effects durables
- C03: ≥12 RECORD ; newest + oldest présents

## N. UX fil et Journal >8
- page: pending reconcile, decisionSummary after reload
- PilotagePanel: journal-count, journal-expand, newest-first default

## O. Navigateur FAKE
- 6/6 Playwright PASS (F01, F02, C03, B13, baseline)
- Pixel Figma: NOT VERIFIED

## P. Non-régression
- unit 84 PASS
- PG ML3 31 PASS
- e2e 6 PASS
- tsc 0 ; eslint chemins exacts 0 ; next build OK ; migrate 001→007 OK

## Q. Commandes / logs
- CWD: projects/sfia-studio-next/web
- STUDIO_LANE=DEV ; DB 127.0.0.1:5433/sfia_next_dev
### pg tail
```
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.037Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_500663db-b7d7-42a9-9f20-11a07f2d8022","operation_id":"op_acf935ca-af8b-4c6c-8778-e99eb68b71e3","outcome":"PARTIAL","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.045Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_acf935ca-af8b-4c6c-8778-e99eb68b71e3","generation_id":"gen_5ba9a126-0dda-4600-90cb-fcc2f26e48ad","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.046Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_acf935ca-af8b-4c6c-8778-e99eb68b71e3","generation_id":"gen_5ba9a126-0dda-4600-90cb-fcc2f26e48ad","attempt_id":"att_7fb555db-9485-4c7b-a83a-1b200cf69bb6","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.050Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_500663db-b7d7-42a9-9f20-11a07f2d8022","operation_id":"op_acf935ca-af8b-4c6c-8778-e99eb68b71e3","generation_id":"gen_5ba9a126-0dda-4600-90cb-fcc2f26e48ad","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.054Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_fb192ccc-ff7a-4321-a77d-79962282904e","operation_id":"op_2ceab54f-374c-4f47-8698-e6ebd57ef496","outcome":"PARTIAL","meta":{"client_turn_key_fp":"552a41ba8196"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.056Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_fb192ccc-ff7a-4321-a77d-79962282904e","operation_id":"op_2ceab54f-374c-4f47-8698-e6ebd57ef496","outcome":"PARTIAL","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.065Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_2ceab54f-374c-4f47-8698-e6ebd57ef496","generation_id":"gen_bf8bfa38-c865-476b-9c97-ce21b43f7f55","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.065Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_2ceab54f-374c-4f47-8698-e6ebd57ef496","generation_id":"gen_bf8bfa38-c865-476b-9c97-ce21b43f7f55","attempt_id":"att_5da092ff-cb46-47c3-8334-03d18804fefe","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.069Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_fb192ccc-ff7a-4321-a77d-79962282904e","operation_id":"op_2ceab54f-374c-4f47-8698-e6ebd57ef496","generation_id":"gen_bf8bfa38-c865-476b-9c97-ce21b43f7f55","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.082Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_d73a4434-bbf1-45c5-bbcd-91cbaaee9ab1","operation_id":"op_76726477-7a5b-4df5-b2a7-b65b784f2118","outcome":"PARTIAL","meta":{"client_turn_key_fp":"eb0aea096050"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.093Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_d73a4434-bbf1-45c5-bbcd-91cbaaee9ab1","operation_id":"op_76726477-7a5b-4df5-b2a7-b65b784f2118","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.103Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.unknown","component":"d3.conversation","request_id":"req_d73a4434-bbf1-45c5-bbcd-91cbaaee9ab1","operation_id":"op_76726477-7a5b-4df5-b2a7-b65b784f2118","outcome":"UNKNOWN","error_category":"PROVIDER_EXCEPTION"}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T16:00:28.108Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.replay","component":"d3.conversation","request_id":"req_064b9d81-72ad-4164-837c-4ea2fabc8384","operation_id":"op_76726477-7a5b-4df5-b2a7-b65b784f2118","outcome":"UNKNOWN","meta":{"status":"UNKNOWN","reconciled":false}}
 ✓ tests/integration/ml3-pilotage.pg.test.ts (31 tests) 1412ms

 Test Files  1 passed (1)
      Tests  31 passed (31)
   Start at  17:00:26
   Duration  1.77s (transform 116ms, setup 0ms, collect 235ms, tests 1.41s, environment 0ms, prepare 24ms)

```
### e2e tail
```
[WebServer] NOTICE:  relation "business_command_effects_command_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_idx" already exists, skipping

Running 6 tests using 1 worker

(node:65922) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/ml3-pilotage.spec.ts:8:5 › ML3 pilotage: projet sans cycle → ouverture → cycle ACTIVE visible (11.8s)
  ✓  2 tests/e2e/ml3-pilotage.spec.ts:63:5 › ML3 B13 C02: motif RESTRICTION vs conflit technique HUMAN_INTENT (6.2s)
  ✓  3 tests/e2e/ml3-pilotage.spec.ts:140:5 › ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED (4.9s)
  ✓  4 tests/e2e/ml3-pilotage.spec.ts:216:5 › ML3 F01: GO naturel depuis le fil ouvre un cycle ACTIVE (4.9s)
  ✓  5 tests/e2e/ml3-pilotage.spec.ts:254:5 › ML3 F02: RECORD depuis le fil puis révision Journal (4.9s)
  ✓  6 tests/e2e/ml3-pilotage.spec.ts:300:5 › ML3 C03: Journal décisions >8 avec historique accessible (6.2s)

  6 passed (42.1s)
```

## R. ENV-01 / versioning
- DEV only ; RECETTE/LIVE/STABLE NOT AUTHORIZED
- NO RELEASE ; candidat distant reste 8bf8b5ce
- Cookie DEV/RECETTE collision: réserve connue non corrigée

## S. Fake/Real Qualification
- DETERMINISTIC + PG INTEGRATION + BROWSER FAKE: PROVEN for C01–C03 scenarios exercised
- LIVE NOT EXECUTED ; RECETTE NOT AUTHORIZED ; STABLE NOT AVAILABLE

## T. Documentation as-built
- specification-technique C01/C02/C03 ; tracabilité ; delivery-history DELIV-…-C01-C02-C03

## U. Réserves
- Qualificateur FR borné
- sessionStorage pending aide reprise mais vérité = business_commands
- Niveau B libre-texte NOT PROVEN
- Worktree dirty vs 8bf8b5ce

## V. Git final
- HEAD `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` inchangé ; pas de push projet

## W. Handoff distant
- À publier: sfia/review-handoff via publish-review-handoff.sh
- Message: sfia: publish ML3 F01-F02 authority recovery and continuity review

## X. Verdict
**ML3 F01/F02 AUTHORITY AND RECOVERY CORRECTIONS COMPLETE — READY FOR CHATGPT CRITICAL REVIEW.**

Prochain gate: Critical Review → Morris → GO publication candidat distinct.

INSTRUCTION CHATGPT: relire handoff GitHub ; comparer à 8bf8b5ce ; vérifier réflexion≠décision ; effet durable malgré échec Nora ; Journal>8 ; pas de migration/push projet.

FIN — SFIA v2.6 / R5 ML3 / F01-F02 AUTHORITY, RECOVERY, CONTINUITY.
