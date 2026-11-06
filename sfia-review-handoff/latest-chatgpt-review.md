# SFIA Studio Next — ML3 F01/F02 Conversation-Authority Review Pack FULL

## 01. Date, GO, profil, lot
- Date UTC: 2026-11-06T15:41:39Z
- GO Morris: 2026-11-06 CRITICAL INC F01/F02 — consolidation fonctionnelle bornée
- Profil: CRITICAL
- Macro-lot: R5 / ML3 « Piloter et décider »
- Type: INC — conversation → autorité D5/D6
- Autorisé: mutations locales candidat + handoff L3 uniquement
- Interdit: commit/push projet, PR, merge, RECETTE, Nora LIVE, STABLE, migration 008

## 02. Git Truth initial/final
- Repository: mcleland147/sfia-workspace
- Branch: `sfia/next-pilotage-decisions-delivery`
- HEAD local: `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4`
- origin/sfia/next-pilotage-decisions-delivery: `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4`
- origin/main: `7f1f41c30df08a34c3c82b60f1da9b4f8fe0a480`
- Candidate distant de référence (inchangé): `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4`
- Prior handoff: `sfia/review-handoff@c0e8a989` blob `380beab4`
- `git status --porcelain=v1 --untracked-files=all`:
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
 M projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/messages/route.ts
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
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
- Diff stat (local vs HEAD candidat, projets):
```
 .../construction/delivery-history.md               |  20 +-
 .../specification-technique.md                     |  17 +-
 .../pilotage-et-decisions/tracabilite-r2-r3-r4.md  |  17 +-
 .../preparations/[preparationId]/messages/route.ts |   9 +-
 .../web/src/app/projects/[projectId]/page.tsx      |  52 ++++-
 .../web/src/components/PilotagePanel.tsx           |  70 ++++++-
 .../web/src/domains/conversation/service.ts        | 129 ++++++++++++-
 .../web/src/domains/pilotage/intent.ts             |  78 ++++++++
 .../web/src/domains/pilotage/service.ts            |  16 +-
 .../web/tests/e2e/ml3-pilotage.spec.ts             |  84 ++++++++
 .../web/tests/integration/ml3-pilotage.pg.test.ts  | 213 ++++++++++++++++++++-
 .../web/tests/unit/ml3-cki-intent.test.ts          |  23 +++
 12 files changed, 711 insertions(+), 17 deletions(-)

```
- SVG untracked préservés (file/globe/next/vercel/window.svg) — non touchés.
- Aucun commit projet, aucun push projet dans ce cycle.

## 03. Sources lues et refs
- PROCESSUS: method/sfia-fast-track/core/sfia-cycle-routing-guide.md ; prompts/templates/sfia-cycle-execution-template.md
- NEXT governance: SEF.md, roadmap.md, decisions/, product-naming-conventions.md, environnements-recette-et-promotions.md (blob 14b61f0d), product-versioning.md (blob 8bc93e0f)
- Fonctionnel: trajectoire-cycles-et-guidance-cki.md ; decisions-et-gouvernance-du-pilote.md ; contexte-et-conduite-gouvernee-de-nora.md (RG-GOV-001..016/027..029/035 ; RG-TRJ-001..016/037..040 ; PF-TRJ-04/05/15/18/19 ; PF-GOV-02..05/09/12/16..20)
- Architecture: cadrage-r4.md §5.5 D3/D5/D6
- UX: audit-couverture-ux-r3.md ; contrat-transposition-figma-code.md ; espace-projet-interaction-pilote-nora.md
- Construction: specification-technique.md ; tracabilite-r2-r3-r4.md ; delivery-history.md
- Code candidat 8bf8b5ce + worktree local F01/F02
- Review Pack FULL précédent (handoff c0e8a989) relu

## 04. Diagnostic F01 avant correction
- `postUserMessageAndNora` réservait le tour, appelait Nora, capitalisait — **sans** passer un GO USER par `executePilotageCommand`.
- Parcours secondaire PilotagePanel « GO naturel » / « Ouvrir ce cycle » fonctionnel mais non conversationnel (RG-GOV-002 / B03 insuffisant seul).
- API messages forçait `humanDecisionCreated: false`.

## 05. Diagnostic F02 avant correction
- Backend RECORD/REVISE/REVOKE + ops D5 déjà présents via command-runner.
- Journal surtout consultatif ; pas de parcours fil pour RECORD/REVISE.
- `humanDecisionCreated` jamais factuel après tour conversationnel.

## 06. Blast radius
- conversation/service.ts (orchestration)
- pilotage/intent.ts (RECORD/REVISE qualifiés)
- pilotage/conversation-authority.ts (**nouveau**)
- pilotage/service.ts (fromClearIntent statement/objectRef/revise-target)
- messages/route.ts (vérité API)
- projects/[projectId]/page.tsx (statut fil)
- PilotagePanel.tsx (geste Journal Réviser)
- tests unit/PG/e2e + docs as-built
- Non touché: command-runner core authority (hors fromClearIntent), migrations, SEF/roadmap/decisions, method/, D7/D9, SVG

## 07. Séquencement USER→D3→D6→D5
1. Session D1 authentifiée ; préparation/projet D2 liés.
2. `reserveTurnCommand` — message USER persisté `COMPLETE` (source durable).
3. `requireTurnOwnership` — si perdu: pas de commande métier tardive.
4. `applyConversationalAuthority` → `qualifyPilotageIntent` → si CLEAR et projet: `executePilotageCommand` (`sourceKind=USER_MESSAGE`, `sourceRef=userMessageId`, `clientCommandKey=conv-auth:{clientTurnKey}`, `actInstanceId=userMessageId`) — TX courte D5/D6.
5. Ambigu/NONE: **pas** d'appel commande (évite HUMAN_INTENT lock).
6. `buildNoraPilotageContext` après effet + snippets d'effet/clarification.
7. `generateNoraReply` (FAKE DEV) — hors TX PG.
8. `commitTurnTerminal` avec `humanDecisionCreated` + `pilotageEffect` honnêtes.
9. Replay tour: payload stocké ; pas de second effet métier.

## 08. Propriétaires et interfaces
- D3: messages, tour, contexte, réponse Nora (aucune permission).
- D5/D6: seule frontière `executePilotageCommand` / `runBusinessCommand`.
- D4: lecture/capitalisation inchangée ; jamais source d'HumanDecision.
- UX: fil = expérience principale ; Journal = complément authentifié EXPLICIT_INTERACTION.

## 09. Fichier créé (intégral)
### projects/sfia-studio-next/web/src/domains/pilotage/conversation-authority.ts
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
 */
import { asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { humanDecisions } from "@/db/schema";
import {
  findMessageDecisionConfrontations,
  type DecisionBrief,
} from "@/domains/decisions/divergence-assist";
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
import {
  executePilotageCommand,
  getPilotageProjection,
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
  source: "none" | "user_message_command" | "clarification_only";
};

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
  const empty: ConversationalAuthorityOutcome = {
    attempted: false,
    intentClarity: "NONE",
    command: null,
    humanDecisionCreated: false,
    decisionId: null,
    source: "none",
  };
  if (!content || !input.projectId || !input.userMessageId) return empty;

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
  const clientCommandKey = `conv-auth:${input.clientTurnKey}`;
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
      };
    }
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "REVISE_DECISION",
      decisionId: resolved.decisionId,
      statement: resolved.statement,
      objectRef: qualified.objectRef,
    });
    return outcomeFromCommand(command, "REVISE_DECISION");
  }

  if (qualified.operation === "RECORD_DECISION") {
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "RECORD_DECISION",
      statement: qualified.statement ?? qualified.objective ?? content,
      objectRef: qualified.objectRef,
      objective: qualified.objective,
    });
    return outcomeFromCommand(command, "RECORD_DECISION");
  }

  // Cycle / method / trajectory CLEAR intents — utterance path inside classifyCommand.
  const command = await executePilotageCommand(input.pilotId, input.projectId, {
    ...base,
    // Leave operation unset so USER_MESSAGE classify uses the qualifier
    // (keeps single qualification path). Explicit fields still allowed as hints.
    cycleType: qualified.cycleType,
    toCycleType: qualified.toCycleType,
    methodRef: qualified.methodRef,
    methodVersion: qualified.methodVersion,
    objective: qualified.objective,
  });
  return outcomeFromCommand(command, qualified.operation);
}

function outcomeFromCommand(
  command: CommandResult,
  operation: string,
): ConversationalAuthorityOutcome {
  const applied = command.status === "APPLIED" || command.status === "ALREADY_APPLIED";
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation,
    command,
    humanDecisionCreated: applied && Boolean(command.decisionId),
    decisionId: command.decisionId,
    source: "user_message_command",
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

```

## 10. Fichiers modifiés — diffs utiles complets

### projects/sfia-studio-next/web/src/domains/conversation/service.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index fb89d5d0..4ba0778a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -22,6 +22,10 @@ import {
 } from "./turn-command";
 import { emitObs, newRequestId } from "@/lib/observability";
 import { StudioError } from "@/lib/http-errors";
+import {
+  applyConversationalAuthority,
+  type ConversationalAuthorityOutcome,
+} from "@/domains/pilotage/conversation-authority";
 import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";

 export async function listMessages(pilotId: string, preparationId: string) {
@@ -96,10 +100,52 @@ export type TurnResult = {
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
+    effects: authority.command?.effects?.map((e) => ({
+      effectKind: e.effectKind,
+      targetRef: e.targetRef,
+    })),
+  };
+}
+
 export async function postUserMessageAndNora(
   pilotId: string,
   preparationId: string,
@@ -142,7 +188,8 @@ export async function postUserMessageAndNora(
           operationId: reserved.operationId,
           requestId,
           idempotentReplay: true,
-          humanDecisionCreated: false,
+          // Preserve factual decision flag from the stored terminal payload.
+          humanDecisionCreated: Boolean(parsed.humanDecisionCreated),
           reconciled: reserved.reconciled,
         };
       } catch {
@@ -155,6 +202,17 @@ export async function postUserMessageAndNora(
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
       return {
         operationId: reserved.operationId,
         requestId,
@@ -163,7 +221,8 @@ export async function postUserMessageAndNora(
         generationId: reserved.generationId,
         userMessageId: reserved.userMessageId,
         assistantMessageId: reserved.assistantMessageId,
-        humanDecisionCreated: false,
+        humanDecisionCreated: replayDecision,
+        pilotageEffect: replayPilotage,
         reconciled: reserved.reconciled,
         noraMode: "replay-terminal",
         capitalisation: reconstituted.capitalisation,
@@ -180,6 +239,7 @@ export async function postUserMessageAndNora(
       userMessageId: reserved.userMessageId,
       assistantMessageId: reserved.assistantMessageId,
       humanDecisionCreated: false,
+      pilotageEffect: null,
       reconciled: reserved.reconciled,
       noraMode: reserved.status === "COMPLETE" ? "deterministic-fixture" : "replay-terminal",
     };
@@ -194,6 +254,48 @@ export async function postUserMessageAndNora(
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
@@ -208,7 +310,25 @@ export async function postUserMessageAndNora(
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
@@ -221,7 +341,7 @@ export async function postUserMessageAndNora(
         userText: content,
         contextSnippets,
         knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
-        pilotageSnippets: pilotageCtx.snippets,
+        pilotageSnippets: [...pilotageCtx.snippets, ...authoritySnippets],
         // C01: same structured Level A contract for fixture and LIVE — never authority.
         levelASignals: pilotageCtx.levelASignals,
         // Requested level only. The adapter emits DELIVERED after a real generate.
@@ -471,7 +591,8 @@ export async function postUserMessageAndNora(
       ? (unknownCapReconstituted?.documentSave ?? null)
       : documentSave,
     idempotentReplay: false,
-    humanDecisionCreated: false,
+    humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
+    pilotageEffect: pilotageEffectFromAuthority(authority),
   };

   if (turnRaceHooks.beforeTerminalCommit) {

```

### projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts b/projects/sfia-studio-next/web/src/domains/pilotage/intent.ts
index 75fcacc8..715ba708 100644
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
@@ -187,6 +208,63 @@ export function qualifyPilotageIntent(utterance: string): IntentQualification {
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
+    if (/\?$/.test(statement) || /^(est-ce|dois-je|peut-on|devrait-on|et si)\b/i.test(statement)) {
+      return { clarity: "AMBIGUOUS", reason: "Question — pas un acte de décision" };
+    }
+    if (
+      /\b(ce serait|il serait|pourrait|intéressant|peut-être|je pense que|nora (?:propose|suggère))\b/i.test(
+        statement,
+      )
+    ) {
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
+   * Documentary REVISE candidate — target resolution requires D6 briefs (caller).
+   * Without a unique applicable RECORD_DECISION target, the bridge must clarify.
+   */
+  const revise =
+    text.match(/^(?:finalement|désormais|dorénavant)[,:]?\s+(.+)$/i) ||
+    text.match(
+      /^je (?:révise|revise|corrige|remplace|modifie)(?:\s+la\s+décision)?\s*[:,]?\s*(.+)$/i,
+    );
+  if (revise) {
+    const statement = revise[1].trim().replace(/[.;]+$/, "");
+    if (statement.length < 8) {
+      return { clarity: "AMBIGUOUS", reason: "Révision insuffisamment déterminée" };
+    }
+    if (/\?$/.test(statement)) {
+      return { clarity: "AMBIGUOUS", reason: "Question — pas une révision" };
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

### projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 09f0d896..cac6c6d2 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -37,6 +37,7 @@ export default function ProjectPage() {
   const [busy, setBusy] = useState(false);
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing">("idle");
   const [status, setStatus] = useState("");
+  const [pilotageStatus, setPilotageStatus] = useState("");
   const [inspect, setInspect] = useState<Doc | null>(null);

   useEffect(() => {
@@ -73,10 +74,15 @@ export default function ProjectPage() {
     if (!draft.trim() || !preparationId) return;
     setBusy(true);
     setNoraActivity("preparing");
+    setPilotageStatus("");
+    const clientTurnKey =
+      typeof crypto !== "undefined" && "randomUUID" in crypto
+        ? `turn-${crypto.randomUUID()}`
+        : `turn-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
     const res = await fetch(`/api/preparations/${preparationId}/messages`, {
       method: "POST",
       headers: { "Content-Type": "application/json" },
-      body: JSON.stringify({ content: draft }),
+      body: JSON.stringify({ content: draft, clientTurnKey }),
     });
     const j = await res.json();
     setBusy(false);
@@ -85,6 +91,39 @@ export default function ProjectPage() {
       setDraft("");
       setMessages(j.messages ?? []);
       setStatus(`Nora ${j.noraMode} · ${j.status}`);
+      const effect = j.pilotageEffect as
+        | {
+            attempted?: boolean;
+            intentClarity?: string;
+            intentReason?: string;
+            status?: string | null;
+            reasonCode?: string | null;
+            reason?: string | null;
+            operation?: string;
+            decisionId?: string | null;
+            clarification?: string;
+          }
+        | null
+        | undefined;
+      if (effect?.attempted) {
+        const parts = [
+          effect.operation ?? "commande",
+          effect.status ?? "?",
+          effect.reasonCode ? `(${effect.reasonCode})` : null,
+          j.humanDecisionCreated && effect.decisionId
+            ? `décision ${effect.decisionId}`
+            : effect.decisionId
+              ? null
+              : null,
+        ].filter(Boolean);
+        setPilotageStatus(parts.join(" · "));
+      } else if (effect?.clarification) {
+        setPilotageStatus(`Clarification · ${effect.clarification}`);
+      } else if (effect?.intentClarity === "AMBIGUOUS") {
+        setPilotageStatus(`Intention ambiguë · ${effect.intentReason ?? effect.reason ?? ""}`);
+      } else {
+        setPilotageStatus("");
+      }
       // Refresh knowledge/docs after capitalisation / document save
       const proj = await fetch(`/api/projects/${params.projectId}`);
       if (proj.ok) {
@@ -170,7 +209,16 @@ export default function ProjectPage() {
               <button className="btn" disabled={busy || !preparationId} onClick={sendMessage}>
                 Envoyer
               </button>
-              {status ? <p className="text-xs muted">{status}</p> : null}
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
             </div>
           </section>
           <aside className="space-y-3">

```

### projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
```diff
diff --git a/projects/sfia-studio-next/web/src/components/PilotagePanel.tsx b/projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
index fe15ed92..056d059c 100644
--- a/projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/PilotagePanel.tsx
@@ -162,6 +162,8 @@ export function PilotagePanel({ projectId }: { projectId: string }) {
   const [methodVersion, setMethodVersion] = useState("2.6");
   const [utterance, setUtterance] = useState("");
   const [restrictionTarget, setRestrictionTarget] = useState("*");
+  const [reviseTargetId, setReviseTargetId] = useState<string | null>(null);
+  const [reviseDraft, setReviseDraft] = useState("");
   const inflight = useRef(new Map<string, PendingRecord>());

   const load = useCallback(async () => {
@@ -760,12 +762,78 @@ export function PilotagePanel({ projectId }: { projectId: string }) {
               <p className="text-sm muted">Aucune décision D6 enregistrée.</p>
             ) : (
               decisions.slice(0, 8).map((d) => (
-                <article key={d.id} className="text-sm panel p-2">
+                <article key={d.id} className="text-sm panel p-2 space-y-2" data-testid="decision-row">
                   <div className="text-xs muted" data-testid="decision-state">
                     {d.kind} · {d.state || "état inconnu"}
                     {d.objectRef ? ` · ${d.objectRef}` : ""}
                   </div>
                   <div>{d.statement}</div>
+                  {d.state === "APPLICABLE" && d.kind === "RECORD_DECISION" ? (
+                    reviseTargetId === d.id ? (
+                      <div className="space-y-2">
+                        <label className="block text-xs muted" htmlFor={`revise-${d.id}`}>
+                          Nouvel énoncé (révision documentaire)
+                        </label>
+                        <textarea
+                          id={`revise-${d.id}`}
+                          className="textarea text-sm"
+                          value={reviseDraft}
+                          onChange={(e) => setReviseDraft(e.target.value)}
+                          data-testid="journal-revise-draft"
+                          rows={2}
+                        />
+                        <div className="flex flex-wrap gap-2">
+                          <button
+                            type="button"
+                            className="btn"
+                            disabled={busy || !reviseDraft.trim()}
+                            data-testid="journal-revise-submit"
+                            onClick={() =>
+                              void runCommand(
+                                {
+                                  operation: "REVISE_DECISION",
+                                  decisionId: d.id,
+                                  statement: reviseDraft.trim(),
+                                  sourceKind: "EXPLICIT_INTERACTION",
+                                  utterance: reviseDraft.trim(),
+                                },
+                                "Révision en cours",
+                              ).then(() => {
+                                setReviseTargetId(null);
+                                setReviseDraft("");
+                              })
+                            }
+                          >
+                            Enregistrer la révision
+                          </button>
+                          <button
+                            type="button"
+                            className="btn secondary"
+                            disabled={busy}
+                            onClick={() => {
+                              setReviseTargetId(null);
+                              setReviseDraft("");
+                            }}
+                          >
+                            Annuler
+                          </button>
+                        </div>
+                      </div>
+                    ) : (
+                      <button
+                        type="button"
+                        className="btn secondary text-xs"
+                        disabled={busy}
+                        data-testid="journal-revise-open"
+                        onClick={() => {
+                          setReviseTargetId(d.id);
+                          setReviseDraft(d.statement);
+                        }}
+                      >
+                        Réviser
+                      </button>
+                    )
+                  ) : null}
                 </article>
               ))
             )}

```

### projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts b/projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
index 4a7a6445..9ff74c72 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml3-cki-intent.test.ts
@@ -98,6 +98,29 @@ describe("ml3 CKI resolution and intent", () => {
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
   it("pins RESOLVED only when the file digest matches the approved manifest", () => {
     const manifest = loadCkiManifest();
     expect(manifest?.version).toBe("0.2.0");

```

### projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml3-pilotage.pg.test.ts
index f333a075..6334ccd2 100644
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

@@ -1167,4 +1168,214 @@ describe("PostgreSQL ML3 pilotage and decisions", () => {
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
 });

```

### projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
index 4403fac3..38f22924 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml3-pilotage.spec.ts
@@ -208,3 +208,87 @@ test("ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED", async ({
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

```

### projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
```diff
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
index 96edf7ea..fc42f462 100644
--- a/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
+++ b/projects/sfia-studio-next/construction/pilotage-et-decisions/specification-technique.md
@@ -229,7 +229,7 @@ Les quatre points ont une **solution technique explicitée et réfutable** ; ils

 **R3 lot B :** état sans cycle #22 ; qualification proposée #23 ; cycle actif #24 ; méthode absente #28 ; méthode proposée #29 ; décision applicable #31 ; suspension #33/#34 ; CKI indisponible #39 ; Journal–Décisions #40 ; GO ambigu #41 ; vrai partiel #42 ; contradiction #43 ; transition combinée #47 ; mise à jour CKI candidate #48 ; ouverture en attente #52 ; clôture en attente #53 ; UNKNOWN #54 ; reprise #55 ; rejeu #56 ; guidance #58 ; relations #59 ; nouvelle méthode #60. Frames identifiées dans l'audit R3 Git, **Figma native et browser ML3 NON OBSERVÉS**. La maquette #42 doit être conditionnelle à un effet séparé réel et ne constitue pas un état de succès partiel dans notre transition interne atomique.

-**D3 — construction du contexte :** session/projet D1/D2 → état D5 (cycle/méthode/CKI référencé) et décisions/restrictions D6 → D4 (faits, documents, acquis) → résolution effective de la guidance CKI → composition de contexte Nora avec nature/provenance et limites → réponse explicable. Le code ML2 `web/src/domains/conversation/nora-adapter.ts` ne charge pas D5/CKI aujourd'hui ; `service.ts` retourne `humanDecisionCreated:false`. Il faut intégrer D5/D6 **sans** déduire un GO d'une réponse de modèle ni modifier l'autorité de D3.
+**D3 — construction du contexte :** session/projet D1/D2 → état D5 (cycle/méthode/CKI référencé) et décisions/restrictions D6 → D4 (faits, documents, acquis) → résolution effective de la guidance CKI → composition de contexte Nora avec nature/provenance et limites → réponse explicable. **F01/F02 (2026-11-06, local worktree) :** après `reserveTurnCommand` (message USER `COMPLETE`), `applyConversationalAuthority` appelle `executePilotageCommand` / `runBusinessCommand` sous `sourceKind=USER_MESSAGE` **avant** l'appel fournisseur Nora ; `humanDecisionCreated` et `pilotageEffect` sont factuels (jamais forcés à `false`). Aucune autorité depuis la sortie Nora ni D4.

 **Observabilité :** relier operationId, commandId, projet/acteur de manière minimisée, source humaine, décision D6, effet D5, version état et résolution CKI. Les logs ne constituent jamais le registre métier ni une preuve de livraison D8. Corrélation connue vs inconnue explicite. Aucun secret, texte de décision sensible ou chaîne de pensée dans les métriques publiques.

@@ -357,3 +357,18 @@ Contrat B13 v0.1 inchangé (VALIDATED IN CONTENT BY MORRIS). Pas de nouvelle pol
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

```

### projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
```diff
diff --git a/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md b/projects/sfia-studio-next/construction/pilotage-et-decisions/tracabilite-r2-r3-r4.md
index 8a7f1f66..ed9cac1f 100644
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
@@ -266,3 +266,14 @@ Statut candidat : `IMPLEMENTED — CANDIDATE` (branche projet) — **NOT RECETTE
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

```

### projects/sfia-studio-next/construction/delivery-history.md
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index b14f5688..f75059db 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -528,5 +528,23 @@ Append-only logical journal of Cursor product deliveries.
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

```


## 11. API messages et vérité du résultat
- Route POST ne force plus `humanDecisionCreated:false`.
- Retourne `humanDecisionCreated` factuel + `pilotageEffect` (attempted, intentClarity, status, reasonCode, decisionId, clarification, source, effects).
- Ne mélange pas « acte détecté » / « commande tentée » / « décision créée ».

## 12. Tests GO naturel et négatifs
- Unit: RECORD/REVISE + soft preference (ml3-cki-intent) — PASS
- PG F01 clear GO via postUserMessageAndNora — PASS
- PG F01 ambiguous OK + assistant SOURCE reject — PASS
- PG F01 restriction RESTRICTION — PASS
- E2E F01 fil principal — PASS

## 13. Tests décisions/révisions
- PG F02 RECORD then REVISE + founding refuse — PASS
- E2E F02 fil RECORD + Journal revise — PASS
- R3 soft text updated (no auto-revise on Level A alone)

## 14. PG, idempotence, sécurité, reprise
- Replay même clientTurnKey: idempotentReplay ; 1 ACTIVE
- clientCommandKey métier corrélé `conv-auth:…`
- Foreign/assistant SOURCE reject
- Restriction: REJECTED, humanDecisionCreated=false
- Schema 007 inchangé ; migrate 001→007 OK

## 15. Navigateur FAKE et rendu UX
- 5/5 Playwright PASS (dont F01 fil, F02 Journal)
- pixel Figma: NOT VERIFIED
- thread-pilotage-status / thread-nora-status visibles

## 16. Non-régression ML1/ML2/ML3
- unit tests/unit: 83 PASS
- ml3-pilotage.pg: 28 PASS
- e2e ml3-pilotage: 5 PASS
- tsc --noEmit: 0
- eslint chemins exacts: 0
- next build: OK
- migrations 001→007: OK

## 17. Logs / commandes exactes
- CWD: `/Users/morris/Projects/sfia-workspace/projects/sfia-studio-next/web`
- Lane: STUDIO_LANE=DEV ; DATABASE_URL → 127.0.0.1:5433/sfia_next_dev
- `npx vitest run tests/unit` → 83 passed (2026-11-06T15:41:39Z window)
- `npx vitest run tests/integration/ml3-pilotage.pg.test.ts` → 28 passed
- `npx playwright test tests/e2e/ml3-pilotage.spec.ts` → 5 passed
- `npx next build` → success
- Evidence tails:

### ml3-f01f02-pg.txt (tail)
```
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.919Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_21bfb184-09a5-4cb6-a14c-9d3d1a3b3bf8","generation_id":"gen_55228cc3-50a8-4c72-9d20-99bf00dcc333","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.920Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_21bfb184-09a5-4cb6-a14c-9d3d1a3b3bf8","generation_id":"gen_55228cc3-50a8-4c72-9d20-99bf00dcc333","attempt_id":"att_7a687a6b-06e1-411b-a0b6-d848d9336d4b","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.925Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_8da4d33d-0ed4-4e2f-a89b-4f8a08dc1b60","operation_id":"op_21bfb184-09a5-4cb6-a14c-9d3d1a3b3bf8","generation_id":"gen_55228cc3-50a8-4c72-9d20-99bf00dcc333","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.931Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_63d46c48-d90c-4620-8def-5f95b90e9ca3","operation_id":"op_c19943cd-ad87-4883-b23a-35be56d18886","outcome":"PARTIAL","meta":{"client_turn_key_fp":"b4d3c50b48d5"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.944Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_63d46c48-d90c-4620-8def-5f95b90e9ca3","operation_id":"op_c19943cd-ad87-4883-b23a-35be56d18886","outcome":"SUCCESS","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.954Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_c19943cd-ad87-4883-b23a-35be56d18886","generation_id":"gen_5b2a216f-933b-4e1e-b309-3aae58b420a2","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.954Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_c19943cd-ad87-4883-b23a-35be56d18886","generation_id":"gen_5b2a216f-933b-4e1e-b309-3aae58b420a2","attempt_id":"att_e20ad584-3d63-4da7-84ed-ecd0718677e1","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.959Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_63d46c48-d90c-4620-8def-5f95b90e9ca3","operation_id":"op_c19943cd-ad87-4883-b23a-35be56d18886","generation_id":"gen_5b2a216f-933b-4e1e-b309-3aae58b420a2","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.977Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_3ca97db2-89ad-4b55-ac61-3d063b4d564b","operation_id":"op_c94d3b01-e226-469f-aca6-e9c9cc541c99","outcome":"PARTIAL","meta":{"client_turn_key_fp":"94ccc4a50e09"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.982Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_3ca97db2-89ad-4b55-ac61-3d063b4d564b","operation_id":"op_c94d3b01-e226-469f-aca6-e9c9cc541c99","outcome":"PARTIAL","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.992Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_c94d3b01-e226-469f-aca6-e9c9cc541c99","generation_id":"gen_c9a6be1c-8b85-4acb-8778-4f8cf966192b","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.992Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_c94d3b01-e226-469f-aca6-e9c9cc541c99","generation_id":"gen_c9a6be1c-8b85-4acb-8778-4f8cf966192b","attempt_id":"att_2eb46e65-74f9-4f02-bdf9-45c2d808736c","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:01.997Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_3ca97db2-89ad-4b55-ac61-3d063b4d564b","operation_id":"op_c94d3b01-e226-469f-aca6-e9c9cc541c99","generation_id":"gen_c9a6be1c-8b85-4acb-8778-4f8cf966192b","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:02.021Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.accepted","component":"d3.conversation","request_id":"req_bd801530-7180-4e97-a277-0f45440dbd84","operation_id":"op_3c1c4a51-3cd3-41ed-8e30-c62763bcd0d9","outcome":"PARTIAL","meta":{"client_turn_key_fp":"eb0aea096050"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:02.030Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.conversational_authority","component":"d3.conversation","request_id":"req_bd801530-7180-4e97-a277-0f45440dbd84","operation_id":"op_3c1c4a51-3cd3-41ed-8e30-c62763bcd0d9","outcome":"FAILED","meta":{}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:02.041Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","operation_id":"op_3c1c4a51-3cd3-41ed-8e30-c62763bcd0d9","generation_id":"gen_addd8da9-551e-4a26-832f-9171e6e381dc","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","effort":"low","model":"gpt-6.1-sol","tools":"","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:02.041Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","operation_id":"op_3c1c4a51-3cd3-41ed-8e30-c62763bcd0d9","generation_id":"gen_addd8da9-551e-4a26-832f-9171e6e381dc","attempt_id":"att_5b8c6c25-40fe-49de-a613-02f5f1ddddaa","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"simple","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-06T15:39:02.047Z","lane":"DEV","source_sha":null,"build_id":null,"event_name":"d3.turn.completed","component":"d3.conversation","request_id":"req_bd801530-7180-4e97-a277-0f45440dbd84","operation_id":"op_3c1c4a51-3cd3-41ed-8e30-c62763bcd0d9","generation_id":"gen_addd8da9-551e-4a26-832f-9171e6e381dc","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"attempts":1,"tool_calls":0,"turn_status":"COMPLETE","cas_applied":true}}
 ✓ tests/integration/ml3-pilotage.pg.test.ts (28 tests) 1363ms

 Test Files  1 passed (1)
      Tests  28 passed (28)
   Start at  16:39:00
   Duration  1.73s (transform 127ms, setup 0ms, collect 264ms, tests 1.36s, environment 0ms, prepare 26ms)

```

### ml3-f01f02-e2e.txt (tail)
```
[WebServer] NOTICE:  relation "governance_restrictions_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_client_key_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_human_intent_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_commands_project_idx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_ordinal_uidx" already exists, skipping
[WebServer] NOTICE:  relation "business_command_effects_command_idx" already exists, skipping

Running 5 tests using 1 worker

(node:57161) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)
  ✓  1 tests/e2e/ml3-pilotage.spec.ts:8:5 › ML3 pilotage: projet sans cycle → ouverture → cycle ACTIVE visible (12.0s)
  ✓  2 tests/e2e/ml3-pilotage.spec.ts:63:5 › ML3 B13 C02: motif RESTRICTION vs conflit technique HUMAN_INTENT (6.3s)
  ✓  3 tests/e2e/ml3-pilotage.spec.ts:140:5 › ML3 B13 R1: motif périmé effacé après UNKNOWN puis APPLIED (4.5s)
  ✓  4 tests/e2e/ml3-pilotage.spec.ts:216:5 › ML3 F01: GO naturel depuis le fil ouvre un cycle ACTIVE (4.4s)
  ✓  5 tests/e2e/ml3-pilotage.spec.ts:254:5 › ML3 F02: RECORD depuis le fil puis révision Journal (4.6s)

  5 passed (35.4s)
```

## 18. ENV-01 / versioning
- ENV-01: REQUIRED — lane DEV only verified
- RECETTE: NOT AUTHORIZED
- Nora LIVE: NOT AUTHORIZED
- STABLE: NOT AVAILABLE
- VERSIONING: NO RELEASE — correctif local non promu
- Package 0.0.0-dev: info technique seulement
- Candidat distant demeure 8bf8b5ce (pas de nouveau SHA projet)

## 19. Fake/Real Qualification
- FAKE Nora (STUDIO_E2E / deterministic-fixture): PROVEN
- PG real DEV: PROVEN
- LIVE Nora: NOT EXECUTED
- RECETTE: NOT EXECUTED
- Pixel Figma: NOT VERIFIED

## 20. Documentation as-built
- specification-technique.md §F01/F02 + D3 contexte mis à jour
- tracabilite B03/B04/B17 + table F01/F02
- delivery-history DELIV-2026-11-06-ML3-F01-F02-CONVERSATION-AUTHORITY
- Distinctions: IMPLEMENTED local ; BEHAVIOR PROVEN (unit/PG/e2e FAKE) ; ADOPTED/RECETTE/LIVE/STABLE NOT CLAIMED

## 21. Réserves, risques, exits
- Qualificateur FR borné — pas NLP universel
- Cookie DEV/RECETTE collision: réserve ENV-01 connue, non corrigée ici
- Libre-texte Niveau B matériel: NOT PROVEN
- Worktree dirty vs candidat 8bf8b5ce: modifications locales non publiées projet
- STOP architecture: aucune nouvelle migration / autorité inédite

## 22. Git final et absence de push projet
- HEAD toujours `8bf8b5ce18f5d01da41a52b641f67baf4e8d0ef4` == origin delivery
- Modifications locales uncommitted (hors SVG)
- Aucun push projet

## 23. Handoff L3 distant
- À publier via scripts/sfia/publish-review-handoff.sh
- Branch: sfia/review-handoff
- Path: sfia-review-handoff/latest-chatgpt-review.md
- Message proposé: sfia: publish ML3 conversation-authority integration review

## 24. Verdict et prochain gate Morris
**VERDICT: ML3 F01/F02 CONVERSATION-AUTHORITY INTEGRATION COMPLETE — READY FOR CHATGPT CRITICAL REVIEW.**

Gates A–N: Git OK ; Sources OK ; F01 impl+preuve OK ; F02 impl+révision OK ; Provenance OK ; TX/idempotence OK ; UNKNOWN path préservé ; Navigateur FAKE OK ; Non-régression OK ; Docs OK ; ENV-01/versioning OK ; Handoff (à vérifier après publish) ; Réserves documentées.

Prochaines étapes:
1. Critical Review ChatGPT du handoff
2. Décision Morris sur écarts
3. GO distinct publication nouveau candidat Git figé
4. Nouvelle qualification globale
5. GO RECETTE distinct

INSTRUCTION CHATGPT: avant revue, relire sur GitHub `sfia/review-handoff` / `sfia-review-handoff/latest-chatgpt-review.md` ; comparer au candidat `8bf8b5ce` en distinguant modifications locales non publiées.

FIN — SFIA v2.6 R5/ML3 F01–F02 CORRECTIVE INTEGRATION.
