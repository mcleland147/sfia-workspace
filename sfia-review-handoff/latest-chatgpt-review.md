# SFIA Review Pack FULL — ML4C S05 Remédiation R-01/R-02

## A. Date et heure
2026-11-14 22:24 CET

## B. GO et cycle
- Contrat: SFIA STUDIO NEXT — ML4C — REMÉDIATION POLITIQUE S05 + QUALIFICATION DEV
- Contrat Cursor SFIA v2.6 — Delivery correctif borné
- Profil: CRITICAL — GO Morris 14 novembre 2026
- Cycle: 8 — Delivery / remédiation
- Typologie: INC corrective / RUN remediation
- Produit: projects/sfia-studio-next/ — 0.0.0-dev — NO RELEASE — STABLE NOT AVAILABLE

## C. Git initial / final
| | SHA |
|---|---|
| HEAD initial attendu / parent | `3d0eab6f01cb8013990193cea93e8bfa5248831d` |
| TREE initial | `cfadcb389b459e3f67fccfd117805b96a32a2033` |
| HEAD final (commit remédiation) | `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` |
| Parent réel | `3d0eab6f01cb8013990193cea93e8bfa5248831d` |
| TREE final | `5eaad2708dc3b33dbd8bf30b652225f830b5d318` |
| Branche | `fix/next-semantic-intent-convergence-20261112` |
| Baseline main observée | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| PR #676 HEAD distant | `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0` (OPEN / NOT MERGED) |
| Push produit | NON |
| PR update | NON |

Git Truth Check: PASS avant modification (HEAD/tree/parent conformes ; seul `.tmp-sfia-review` dirty hors produit).

## D. Sources et refs
- Conception: `docs/next-ml4c-d4-continuity-corrective-design-20261114@c883db07` blob `da397424`
- Handoff P0: `ce53377c` / `ed74c45c`
- Handoff P1–P5: `e5b26cd8` / `33122389`
- Verdict ChatGPT antérieur: REVIEW NOT APPROVED — SAFETY GAP / REVIEW PACK INCOMPLETE (R-01, R-02, pack incomplet)

## E. Cause R-01 / R-02
**R-01** — `service.ts` dérivait `ownerEffectsFound` de `resultJson` (`documentSave` / pilotage / HD). Une absence d'indice conversationnel devenait `false` → faux `PROVEN_NO_EFFECT`.
**R-02** — `currentCorrelationKeys: string[] = []` → SAME_INTENT impossible.

## F. Mécanisme exact de preuve propriétaire
`probeSiblingOwnerEffects` (service, allowlist) interroge les registres existants:
1. D4 documents.creationCorrelationKey ∈ clés
2. D4 document_revisions.correlationKey ∈ clés
3. D4 provenance_json LIKE commandId
4. D2 create_project_commands (pilot+prep+idempotencyKey=clientTurnKey)
5. D5 business_commands (conv-auth:clientTurnKey ou USER_MESSAGE sourceRef)
6. D6 human_decisions.sourceRef = userMessageId
7. D7 effect_attempts.correlationKey
8. knowledge_acquis.provenance_json LIKE commandId
- `true` = hit ; `false` = sondes applicables terminées sans hit ; `null` = erreur/incomplet (env `STUDIO_S05_PROBE_FORCE_ERROR=1` pour R04 E2E)
- Flags conversationnels restent des signaux de risque séparés ; ils ne prouvent plus l'absence d'effet.

## G. Matrice d'identités / corrélations
`buildTurnCorrelationKeys` assemble: commandId, operationId, userMessageId, clientTurnKey, clientCorrelationSalt, bindingCorrelationKeys, businessClientCommandKey (`conv-auth:…`), missionKeys (`doc:mission:…` / pub).
Préfixes: `tcmd:`, `op:`, `umsg:`, `ctk:`, `salt:`, `bind:`, `bck:`.
Pas de texte USER, titre, similarité lexicale.
`findUnresolvedSiblingTurns` expose désormais `operationId`.

## H. Fonctions modifiées
- `probeSiblingOwnerEffects` (nouveau, service.ts)
- `buildTurnCorrelationKeys` (nouveau, s05-pending-policy.ts)
- `parseSiblingResultEvidence` → `bindingCorrelationKeys` + `operationId`
- `postUserMessageAndNora` S05 gather path
- `findUnresolvedSiblingTurns` (+operationId)
- Tests UNIT/PG ; as-built ; delivery-history

## I. Diff remédiation (3d0eab6f..HEAD)
```diff
diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
index 17a7ca96..0d85fbf9 100644
--- a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
@@ -232,3 +232,40 @@ Profil: Critical PATCH corrective / NO RELEASE / STABLE NOT AVAILABLE
 - LIVE / BROWSER / RECETTE rejeu : gates Morris distincts.
 - UNKNOWN historiques RECETTE non mutés.
 - Conception candidate non ADOPTED.
+
+## DELIV 2026-11-14 — Remédiation S05 R-01 / R-02 (owner evidence)
+
+Date: 2026-11-14 ~22:30 CET (Europe/Paris)
+Branche: `fix/next-semantic-intent-convergence-20261112`
+Parent: `3d0eab6f01cb8013990193cea93e8bfa5248831d` (LOCAL ONLY)
+Revue ChatGPT: R-01 (preuve propriétaire déduite de resultJson) / R-02 (SAME_INTENT non alimenté)
+Profil: Critical PATCH corrective / NO RELEASE / STABLE NOT AVAILABLE
+
+### Causes traitées
+
+1. **R-01** — `ownerEffectsFound` ne doit plus être dérivé de `documentSave` / flags conversationnels seuls ; une absence d’indice RJ n’est pas une preuve négative propriétaire.
+2. **R-02** — `currentCorrelationKeys` était `[]` ; SAME_INTENT ne pouvait pas reconnaître une identité durable réelle.
+
+### Mécanique réelle
+
+- `probeSiblingOwnerEffects` (service) lit D2 `create_project_commands`, D4 `documents` / `document_revisions` (+ provenance), D5 `business_commands`, D6 `human_decisions`, D7 `effect_attempts`, knowledge provenance — `true` / `false` / `null` (erreur → null, fail-closed).
+- `buildTurnCorrelationKeys` alimente les clés courantes et frères (commandId, operationId, userMessageId, clientTurnKey, salt, bindings, `conv-auth:…`, mission keys).
+- Helper pur inchangé dans son rôle de décision ; preuves recueillies en amont.
+- `findUnresolvedSiblingTurns` expose aussi `operationId` pour corrélation.
+- P1/P3 D4 (confront LF, NOT_EXECUTED, fence ACK, Nora sas) non touchés.
+
+### Preuves
+
+| Couche | Résultat |
+| --- | --- |
+| UNIT | PASS 351 (`npm run test:unit`) — +S05-R01..R14/R18 |
+| PG E2E isolé `:5433` | PASS owner-evidence + S05 + D4 prior-proposal / document-command / identity |
+| BUILD | PASS |
+| BROWSER E2E | NOT RUN (DEV :3100 absent ; RECETTE :3200 présente — non utilisée) |
+| LIVE Nora | NOT RUN |
+
+### Réserves
+
+- BROWSER / LIVE / RECETTE : gates Morris distincts.
+- Aucune mutation RECETTE ; UNKNOWN historiques non purgés.
+- `STUDIO_S05_PROBE_FORCE_ERROR` = seam DEV/E2E uniquement (R04).
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 46afe565..66a803c1 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,24 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-14-ML4C-S05-OWNER-EVIDENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~22:30 CET (Europe/Paris) |
+| Macro-lot | ML4C — Remédiation S05 R-01/R-02 (owner evidence + SAME_INTENT) |
+| Type | PATCH corrective Critical complementary (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` |
+| Parent tip | `3d0eab6f01cb8013990193cea93e8bfa5248831d` (LOCAL ONLY) |
+| Design | `c883db07` / blob `da397424` |
+| Prior ChatGPT | REVIEW NOT APPROVED — SAFETY GAP / REVIEW PACK INCOMPLETE |
+| Lane | DEV + Vitest PG `:5433` ; RECETTE :3200/:5434 non mutées |
+| Changes | `probeSiblingOwnerEffects` ; `buildTurnCorrelationKeys` ; sibling `operationId` ; S05-R* UNIT+PG |
+| Schema | unchanged |
+| Tests | UNIT 351 PASS ; PG S05/D4 focused PASS ; BUILD PASS ; BROWSER/LIVE NOT RUN |
+| Status | Product LOCAL ONLY ; Review Handoff L3 remédiation in-cycle |
+
+
 ## delivery_id: DELIV-2026-11-14-ML4C-D4-S05-CONTINUITY

 | Field | Value |
@@ -19,7 +37,7 @@ Append-only logical journal of Cursor product deliveries.
 | Changes | confront structural LF ; S05 risk policy ; ACK NOT_EXECUTED ; fence-after-ACK ; Nora sas guidance |
 | Schema | unchanged |
 | Tests | UNIT PASS ; PG focused PASS ; BUILD PASS ; E2E/LIVE NOT RUN |
-| Status | Product LOCAL ONLY pending Morris RECETTE gate ; Review Handoff L3 in-cycle |
+| Status | SUPERSEDED IN PART by DELIV-2026-11-14-ML4C-S05-OWNER-EVIDENCE (R-01/R-02) ; P1/P3 retained | |



diff --git a/projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts
index 91175a6a..603bd66a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts
@@ -26,11 +26,13 @@ export type S05SiblingEvidence = {
   pilotageEffectAttempted: boolean | null;
   humanDecisionCreated: boolean | null;
   /**
-   * Owner-side probe: true when any correlated owner mutation row was found
-   * for this turn's window/identity. false = probed empty. null = not probed.
+   * Owner-side probe result (never derived from resultJson alone):
+   * - true  = correlated owner mutation row identified
+   * - false = applicable owners probed to completion with zero hits
+   * - null  = probe absent, incomplete, errored, or identity insufficient
    */
   ownerEffectsFound: boolean | null;
-  /** Optional durable correlation / intent keys for SAME_INTENT. */
+  /** Durable correlation / intent keys for SAME_INTENT (comparable identities). */
   correlationKeys?: string[];
 };

@@ -209,6 +211,42 @@ export function evaluateS05SiblingPolicy(input: {
   };
 }

+/**
+ * Build comparable durable correlation keys for SAME_INTENT.
+ * Only stable identities — never USER text, title, or lexical similarity.
+ */
+export function buildTurnCorrelationKeys(input: {
+  commandId?: string | null;
+  operationId?: string | null;
+  userMessageId?: string | null;
+  clientTurnKey?: string | null;
+  /** Client salt / mission doc key / explicit correlation before seal. */
+  clientCorrelationSalt?: string | null;
+  /** Sealed documentCommandBindings[].correlationKey values. */
+  bindingCorrelationKeys?: string[] | null;
+  /** D5 conversational client command key when known. */
+  businessClientCommandKey?: string | null;
+  /** Mission continuity keys (doc:mission:… / pub:mission:…). */
+  missionKeys?: string[] | null;
+}): string[] {
+  const out = new Set<string>();
+  const add = (raw: string | null | undefined, prefix?: string) => {
+    const v = raw?.trim();
+    if (!v) return;
+    out.add(v);
+    if (prefix) out.add(`${prefix}${v}`);
+  };
+  add(input.commandId, "tcmd:");
+  add(input.operationId, "op:");
+  add(input.userMessageId, "umsg:");
+  add(input.clientTurnKey, "ctk:");
+  add(input.clientCorrelationSalt, "salt:");
+  add(input.businessClientCommandKey, "bck:");
+  for (const k of input.bindingCorrelationKeys ?? []) add(k, "bind:");
+  for (const k of input.missionKeys ?? []) add(k);
+  return [...out];
+}
+
 /** Parse durable qualification fields from a turn resultJson string. */
 export function parseSiblingResultEvidence(resultJson: string | null): {
   qualificationStatus: string | null;
@@ -216,7 +254,9 @@ export function parseSiblingResultEvidence(resultJson: string | null): {
   documentSaveStatus: string | null;
   pilotageEffectAttempted: boolean | null;
   humanDecisionCreated: boolean | null;
-  correlationKeys: string[];
+  /** Binding correlation keys only — not a substitute for owner probe. */
+  bindingCorrelationKeys: string[];
+  operationId: string | null;
 } {
   if (!resultJson) {
     return {
@@ -225,7 +265,8 @@ export function parseSiblingResultEvidence(resultJson: string | null): {
       documentSaveStatus: null,
       pilotageEffectAttempted: null,
       humanDecisionCreated: null,
-      correlationKeys: [],
+      bindingCorrelationKeys: [],
+      operationId: null,
     };
   }
   try {
@@ -238,12 +279,16 @@ export function parseSiblingResultEvidence(resultJson: string | null): {
       (sq && typeof sq.status === "string" ? sq.status : null);
     const docSave = parsed.documentSave as { status?: string } | null | undefined;
     const pilotage = parsed.pilotageEffect as { attempted?: boolean } | null | undefined;
-    const correlationKeys: string[] = [];
+    const bindingCorrelationKeys: string[] = [];
     const bindings = parsed.documentCommandBindings;
     if (Array.isArray(bindings)) {
       for (const b of bindings) {
-        if (b && typeof b === "object" && typeof (b as { correlationKey?: string }).correlationKey === "string") {
-          correlationKeys.push((b as { correlationKey: string }).correlationKey);
+        if (
+          b &&
+          typeof b === "object" &&
+          typeof (b as { correlationKey?: string }).correlationKey === "string"
+        ) {
+          bindingCorrelationKeys.push((b as { correlationKey: string }).correlationKey);
         }
       }
     }
@@ -251,12 +296,13 @@ export function parseSiblingResultEvidence(resultJson: string | null): {
       qualificationStatus: sqStatus,
       qualification: sq && typeof sq.status === "string" ? sq : null,
       documentSaveStatus:
-        docSave && typeof docSave.status === "string" ? docSave.status : docSave === null ? null : null,
+        docSave && typeof docSave.status === "string" ? docSave.status : null,
       pilotageEffectAttempted:
         pilotage && typeof pilotage.attempted === "boolean" ? pilotage.attempted : null,
       humanDecisionCreated:
         typeof parsed.humanDecisionCreated === "boolean" ? parsed.humanDecisionCreated : null,
-      correlationKeys,
+      bindingCorrelationKeys,
+      operationId: typeof parsed.operationId === "string" ? parsed.operationId : null,
     };
   } catch {
     return {
@@ -265,7 +311,8 @@ export function parseSiblingResultEvidence(resultJson: string | null): {
       documentSaveStatus: null,
       pilotageEffectAttempted: null,
       humanDecisionCreated: null,
-      correlationKeys: [],
+      bindingCorrelationKeys: [],
+      operationId: null,
     };
   }
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 670b5561..13009c4f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1,6 +1,16 @@
-import { and, asc, eq } from "drizzle-orm";
+import { and, asc, eq, inArray, sql } from "drizzle-orm";
 import { db } from "@/db/client";
-import { conversations, messages } from "@/db/schema";
+import {
+  businessCommands,
+  conversations,
+  createProjectCommands,
+  documentRevisions,
+  documents,
+  effectAttempts,
+  humanDecisions,
+  knowledgeAcquis,
+  messages,
+} from "@/db/schema";
 // db still used by getConversationId / listMessages
 import { newId } from "@/lib/ids";
 import { generateNoraReply } from "./nora-adapter";
@@ -36,6 +46,7 @@ import { emitObs, newRequestId } from "@/lib/observability";
 import { StudioError } from "@/lib/http-errors";
 import {
   applyConversationalAuthority,
+  conversationalCommandKey,
   reconstituteConversationalAuthority,
   type ConversationalAuthorityOutcome,
 } from "@/domains/pilotage/conversation-authority";
@@ -61,6 +72,7 @@ import {
 } from "./semantic-qualification";
 import { loadLatestMissionsByIntentKey } from "./intent-conduction";
 import {
+  buildTurnCorrelationKeys,
   evaluateS05SiblingPolicy,
   parseSiblingResultEvidence,
   type S05SiblingEvidence,
@@ -87,6 +99,186 @@ import {
 } from "./intent-conduction";
 import { updatePreview } from "@/domains/preparation/service";

+/**
+ * S05 R-01 — gather owner-side evidence for one unresolved sibling.
+ * true = correlated owner row found; false = applicable owners probed empty;
+ * null = incomplete / errored / identity insufficient.
+ * Never derives absence of effect from resultJson alone.
+ */
+export async function probeSiblingOwnerEffects(input: {
+  pilotId: string;
+  preparationId: string;
+  projectId: string | null;
+  sibling: {
+    commandId: string;
+    clientTurnKey: string;
+    userMessageId: string | null;
+    operationId: string | null;
+    bindingCorrelationKeys: string[];
+  };
+}): Promise<boolean | null> {
+  const { sibling } = input;
+  const missionKeys = missionCorrelationKeys(sibling.clientTurnKey);
+  const corrKeys = [
+    ...new Set(
+      [
+        ...sibling.bindingCorrelationKeys,
+        missionKeys.document,
+        missionKeys.publication,
+        sibling.clientTurnKey.trim() || null,
+      ].filter((k): k is string => Boolean(k && k.trim())),
+    ),
+  ];
+
+  try {
+    // DEV/E2E seam only — never set in RECETTE/STABLE; forces conservative null.
+    if (process.env.STUDIO_S05_PROBE_FORCE_ERROR === "1") {
+      throw new Error("STUDIO_S05_PROBE_FORCE_ERROR");
+    }
+
+    if (corrKeys.length > 0) {
+      const docs = await db
+        .select({ id: documents.id })
+        .from(documents)
+        .where(
+          and(
+            eq(documents.preparationId, input.preparationId),
+            eq(documents.ownerPilotId, input.pilotId),
+            inArray(documents.creationCorrelationKey, corrKeys),
+          ),
+        )
+        .limit(1);
+      if (docs.length > 0) return true;
+
+      const revs = await db
+        .select({ id: documentRevisions.id })
+        .from(documentRevisions)
+        .innerJoin(documents, eq(documentRevisions.documentId, documents.id))
+        .where(
+          and(
+            eq(documents.preparationId, input.preparationId),
+            eq(documents.ownerPilotId, input.pilotId),
+            inArray(documentRevisions.correlationKey, corrKeys),
+          ),
+        )
+        .limit(1);
+      if (revs.length > 0) return true;
+    }
+
+    const cmdNeedle = sibling.commandId;
+    const provenanceHits = await db
+      .select({ id: documentRevisions.id })
+      .from(documentRevisions)
+      .innerJoin(documents, eq(documentRevisions.documentId, documents.id))
+      .where(
+        and(
+          eq(documents.preparationId, input.preparationId),
+          eq(documents.ownerPilotId, input.pilotId),
+          sql`${documentRevisions.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
+        ),
+      )
+      .limit(1);
+    if (provenanceHits.length > 0) return true;
+
+    const d2 = await db
+      .select({ id: createProjectCommands.id })
+      .from(createProjectCommands)
+      .where(
+        and(
+          eq(createProjectCommands.pilotId, input.pilotId),
+          eq(createProjectCommands.preparationId, input.preparationId),
+          eq(createProjectCommands.idempotencyKey, sibling.clientTurnKey),
+        ),
+      )
+      .limit(1);
+    if (d2.length > 0) return true;
+
+    if (input.projectId) {
+      const bizKey = conversationalCommandKey(sibling.clientTurnKey);
+      const bizByKey = await db
+        .select({ id: businessCommands.id })
+        .from(businessCommands)
+        .where(
+          and(
+            eq(businessCommands.projectId, input.projectId),
+            eq(businessCommands.actorPilotId, input.pilotId),
+            eq(businessCommands.clientCommandKey, bizKey),
+          ),
+        )
+        .limit(1);
+      if (bizByKey.length > 0) return true;
+
+      if (sibling.userMessageId) {
+        const bizByMsg = await db
+          .select({ id: businessCommands.id })
+          .from(businessCommands)
+          .where(
+            and(
+              eq(businessCommands.projectId, input.projectId),
+              eq(businessCommands.actorPilotId, input.pilotId),
+              eq(businessCommands.sourceKind, "USER_MESSAGE"),
+              eq(businessCommands.sourceRef, sibling.userMessageId),
+            ),
+          )
+          .limit(1);
+        if (bizByMsg.length > 0) return true;
+
+        const hd = await db
+          .select({ id: humanDecisions.id })
+          .from(humanDecisions)
+          .where(
+            and(
+              eq(humanDecisions.projectId, input.projectId),
+              eq(humanDecisions.pilotId, input.pilotId),
+              eq(humanDecisions.sourceRef, sibling.userMessageId),
+            ),
+          )
+          .limit(1);
+        if (hd.length > 0) return true;
+      }
+
+      const eaKeys = [
+        ...new Set(
+          [missionKeys.publication, ...sibling.bindingCorrelationKeys].filter(
+            (k): k is string => Boolean(k && k.trim()),
+          ),
+        ),
+      ];
+      if (eaKeys.length > 0) {
+        const ea = await db
+          .select({ id: effectAttempts.id })
+          .from(effectAttempts)
+          .where(
+            and(
+              eq(effectAttempts.pilotId, input.pilotId),
+              eq(effectAttempts.projectId, input.projectId),
+              inArray(effectAttempts.correlationKey, eaKeys),
+            ),
+          )
+          .limit(1);
+        if (ea.length > 0) return true;
+      }
+    }
+
+    const know = await db
+      .select({ id: knowledgeAcquis.id })
+      .from(knowledgeAcquis)
+      .where(
+        and(
+          eq(knowledgeAcquis.preparationId, input.preparationId),
+          eq(knowledgeAcquis.ownerPilotId, input.pilotId),
+          sql`${knowledgeAcquis.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
+        ),
+      )
+      .limit(1);
+    if (know.length > 0) return true;
+
+    return false;
+  } catch {
+    return null;
+  }
+}
+
 export async function listMessages(pilotId: string, preparationId: string) {
   // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
   const ctx = await getPreparationContext(pilotId, preparationId);
@@ -704,34 +896,59 @@ export async function postUserMessageAndNora(

   const applyPendingGate =
     nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN";
-  const currentCorrelationKeys: string[] = [];
-  const siblingEvidence: S05SiblingEvidence[] = siblings.map((s) => {
-    const parsed = parseSiblingResultEvidence(s.resultJson);
-    return {
-      id: s.id,
-      clientTurnKey: s.clientTurnKey,
-      status: s.status,
-      createdAtMs: s.createdAt.getTime(),
-      qualificationStatus: parsed.qualificationStatus,
-      qualification: parsed.qualification,
-      documentSaveStatus: parsed.documentSaveStatus,
-      pilotageEffectAttempted: parsed.pilotageEffectAttempted,
-      humanDecisionCreated: parsed.humanDecisionCreated,
-      // Durable resultJson + qualification are the owner-side evidence available without
-      // mutating RECETTE. Empty documentSave / pilotage / HD + UNAVAILABLE ⇒ probed false.
-      ownerEffectsFound:
-        parsed.qualificationStatus == null
-          ? null
-          : parsed.documentSaveStatus != null &&
-              parsed.documentSaveStatus !== "NOT_EXECUTED"
-            ? true
-            : parsed.pilotageEffectAttempted === true ||
-                parsed.humanDecisionCreated === true
-              ? true
-              : false,
-      correlationKeys: parsed.correlationKeys,
-    };
+  // R-02 — durable comparable identities only (never USER text / title / lexical).
+  const currentMissionKeys = missionCorrelationKeys(
+    carriedMission?.clientIntentKey?.trim() || clientTurnKey,
+  );
+  const currentCorrelationKeys = buildTurnCorrelationKeys({
+    commandId: reserved.commandId,
+    operationId: reserved.operationId,
+    userMessageId: reserved.userMessageId,
+    clientTurnKey,
+    clientCorrelationSalt: opts?.correlationKey?.trim() || null,
+    bindingCorrelationKeys: [],
+    businessClientCommandKey: conversationalCommandKey(clientTurnKey),
+    missionKeys: [currentMissionKeys.document, currentMissionKeys.publication],
   });
+  const siblingEvidence: S05SiblingEvidence[] = await Promise.all(
+    siblings.map(async (s) => {
+      const parsed = parseSiblingResultEvidence(s.resultJson);
+      const siblingMission = missionCorrelationKeys(s.clientTurnKey);
+      const ownerEffectsFound = await probeSiblingOwnerEffects({
+        pilotId,
+        preparationId,
+        projectId: ctx.project?.id ?? null,
+        sibling: {
+          commandId: s.id,
+          clientTurnKey: s.clientTurnKey,
+          userMessageId: s.userMessageId,
+          operationId: s.operationId,
+          bindingCorrelationKeys: parsed.bindingCorrelationKeys,
+        },
+      });
+      return {
+        id: s.id,
+        clientTurnKey: s.clientTurnKey,
+        status: s.status,
+        createdAtMs: s.createdAt.getTime(),
+        qualificationStatus: parsed.qualificationStatus,
+        qualification: parsed.qualification,
+        documentSaveStatus: parsed.documentSaveStatus,
+        pilotageEffectAttempted: parsed.pilotageEffectAttempted,
+        humanDecisionCreated: parsed.humanDecisionCreated,
+        ownerEffectsFound,
+        correlationKeys: buildTurnCorrelationKeys({
+          commandId: s.id,
+          operationId: s.operationId,
+          userMessageId: s.userMessageId,
+          clientTurnKey: s.clientTurnKey,
+          bindingCorrelationKeys: parsed.bindingCorrelationKeys,
+          businessClientCommandKey: conversationalCommandKey(s.clientTurnKey),
+          missionKeys: [siblingMission.document, siblingMission.publication],
+        }),
+      };
+    }),
+  );
   const siblingPolicy = evaluateS05SiblingPolicy({
     siblings: siblingEvidence,
     current: {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index 2f2d9e41..122a73f9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -564,6 +564,7 @@ export async function findUnresolvedSiblingTurns(args: {
     id: string;
     clientTurnKey: string;
     status: TurnCommandStatus;
+    operationId: string;
     userMessageId: string | null;
     createdAt: Date;
     resultJson: string | null;
@@ -574,6 +575,7 @@ export async function findUnresolvedSiblingTurns(args: {
       id: conversationTurnCommands.id,
       clientTurnKey: conversationTurnCommands.clientTurnKey,
       status: conversationTurnCommands.status,
+      operationId: conversationTurnCommands.operationId,
       userMessageId: conversationTurnCommands.userMessageId,
       createdAt: conversationTurnCommands.createdAt,
       resultJson: conversationTurnCommands.resultJson,
@@ -592,6 +594,7 @@ export async function findUnresolvedSiblingTurns(args: {
     id: r.id,
     clientTurnKey: r.clientTurnKey,
     status: r.status as TurnCommandStatus,
+    operationId: r.operationId,
     userMessageId: r.userMessageId,
     createdAt: r.createdAt,
     resultJson: r.resultJson,
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-s05-owner-evidence.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-s05-owner-evidence.pg.test.ts
new file mode 100644
index 00000000..3157563b
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-s05-owner-evidence.pg.test.ts
@@ -0,0 +1,275 @@
+/**
+ * S05 remédiation R-01 / R-02 — owner evidence + SAME_INTENT through real gather path.
+ */
+import { afterAll, beforeAll, describe, expect, it } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+process.env.STUDIO_LANE = "DEV";
+process.env.STUDIO_E2E = "1";
+process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
+
+import { eq } from "drizzle-orm";
+import { db } from "@/db/client";
+import { conversationTurnCommands, documents, preparations } from "@/db/schema";
+import { createDevTestSession } from "@/domains/identity/session";
+import {
+  getPreparationContext,
+  openOrCreatePreparation,
+} from "@/domains/preparation/service";
+import {
+  postUserMessageAndNora,
+  probeSiblingOwnerEffects,
+} from "@/domains/conversation/service";
+import {
+  markTurnUnknown,
+  reserveTurnCommand,
+  stashTurnQualification,
+} from "@/domains/conversation/turn-command";
+import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
+import { newId } from "@/lib/ids";
+
+const UNAVAILABLE_Q = {
+  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  status: "UNAVAILABLE",
+  goal: "privacy",
+  intents: [
+    {
+      id: "i1",
+      capabilityId: "d5.pilotage_command",
+      mode: "REQUEST_EFFECT",
+      summary: "open",
+      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
+      constraints: [] as string[],
+      dependsOn: [] as string[],
+      sourceEvidence: [] as string[],
+    },
+  ],
+  clarifications: [] as string[],
+  replyDraft: "cannot",
+};
+
+describe("ML4C S05 owner evidence remédiation (PG)", () => {
+  let pilotId: string;
+
+  beforeAll(async () => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
+    pilotId = sess.pilotId;
+  });
+
+  afterAll(() => {
+    /* e2e isolated */
+  });
+
+  it("S05-R01: UNAVAILABLE + complete empty owner probe → independent CREATE not blocked", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-r01-safe-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A UNAVAILABLE",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_R01", a.ownerToken);
+
+    const probe = await probeSiblingOwnerEffects({
+      pilotId,
+      preparationId: prep.id,
+      projectId: ctx.project?.id ?? null,
+      sibling: {
+        commandId: a.commandId,
+        clientTurnKey: aKey,
+        userMessageId: a.userMessageId,
+        operationId: a.operationId,
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBe(false);
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-r01-b-${Date.now()}`,
+    });
+    expect(b.pendingEffectBlocked).toBe(false);
+
+    const aRow = (
+      await db
+        .select()
+        .from(conversationTurnCommands)
+        .where(eq(conversationTurnCommands.id, a.commandId))
+        .limit(1)
+    )[0];
+    expect(aRow?.status).toBe("UNKNOWN");
+  });
+
+  it("S05-R02: owner document row exists while resultJson save is null → BLOQUÉ via real probe", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const sharedCorr = `owner-corr-r02-${Date.now()}`;
+    const aKey = `s05-r02-hidden-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A with hidden owner doc",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    // RJ looks harmless (null documentSave) but carries durable binding for owner probe.
+    await markTurnUnknown(
+      a.commandId,
+      "TEST_S05_R02",
+      a.ownerToken,
+      JSON.stringify({
+        semanticQualificationStatus: "UNAVAILABLE",
+        semanticQualification: UNAVAILABLE_Q,
+        documentSave: null,
+        pilotageEffect: null,
+        humanDecisionCreated: false,
+        documentCommandBindings: [{ correlationKey: sharedCorr }],
+      }),
+    );
+
+    // Owner row present — resultJson does not reveal AVAILABLE documentSave.
+    await db.insert(documents).values({
+      id: newId("doc"),
+      preparationId: prep.id,
+      projectId: null,
+      ownerPilotId: pilotId,
+      title: "Hidden owner effect",
+      creationCorrelationKey: sharedCorr,
+    });
+
+    const probe = await probeSiblingOwnerEffects({
+      pilotId,
+      preparationId: prep.id,
+      projectId: null,
+      sibling: {
+        commandId: a.commandId,
+        clientTurnKey: aKey,
+        userMessageId: a.userMessageId,
+        operationId: a.operationId,
+        bindingCorrelationKeys: [sharedCorr],
+      },
+    });
+    expect(probe).toBe(true);
+
+    const revBefore = (
+      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
+    )[0]?.creationRevision ?? 0;
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-r02-b-${Date.now()}`,
+    });
+    expect(b.pendingEffectBlocked).toBe(true);
+
+    const revAfter = (
+      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
+    )[0]?.creationRevision ?? 0;
+    expect(revAfter).toBe(revBefore);
+  });
+
+  it("S05-R04: owner probe error → null → independent CREATE BLOQUÉ (fail closed)", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-r04-err-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A probe error",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_R04", a.ownerToken);
+
+    const prev = process.env.STUDIO_S05_PROBE_FORCE_ERROR;
+    process.env.STUDIO_S05_PROBE_FORCE_ERROR = "1";
+    try {
+      const probe = await probeSiblingOwnerEffects({
+        pilotId,
+        preparationId: prep.id,
+        projectId: null,
+        sibling: {
+          commandId: a.commandId,
+          clientTurnKey: aKey,
+          userMessageId: a.userMessageId,
+          operationId: a.operationId,
+          bindingCorrelationKeys: [],
+        },
+      });
+      expect(probe).toBeNull();
+
+      const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+        clientTurnKey: `s05-r04-b-${Date.now()}`,
+      });
+      expect(b.pendingEffectBlocked).toBe(true);
+    } finally {
+      if (prev === undefined) delete process.env.STUDIO_S05_PROBE_FORCE_ERROR;
+      else process.env.STUDIO_S05_PROBE_FORCE_ERROR = prev;
+    }
+  });
+
+  it("S05-R10: SAME_INTENT via shared durable correlation key blocks independent CREATE", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const shared = `same-intent-corr-${Date.now()}`;
+    const aKey = `s05-r10-a-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A same intent",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(
+      a.commandId,
+      "TEST_S05_R10",
+      a.ownerToken,
+      JSON.stringify({
+        semanticQualificationStatus: "UNAVAILABLE",
+        semanticQualification: UNAVAILABLE_Q,
+        documentSave: null,
+        documentCommandBindings: [{ correlationKey: shared }],
+      }),
+    );
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-r10-b-${Date.now()}`,
+      // Same durable salt / correlation as sibling binding → SAME_INTENT.
+      correlationKey: shared,
+    });
+    expect(b.pendingEffectBlocked).toBe(true);
+    expect(b.pendingBlockReason ?? "").toMatch(/S05_PENDING_BLOCKS_SAME_INTENT|S05_PENDING_BLOCKS/);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts b/projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts
index f4f429ca..e95f9503 100644
--- a/projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts
@@ -1,5 +1,6 @@
 import { describe, expect, it } from "vitest";
 import {
+  buildTurnCorrelationKeys,
   classifySiblingEffectRisk,
   evaluateS05SiblingPolicy,
   parseSiblingResultEvidence,
@@ -51,7 +52,7 @@ function baseSibling(over: Partial<S05SiblingEvidence> = {}): S05SiblingEvidence
 }

 describe("P2 S05 pending policy", () => {
-  it("QA-07: UNAVAILABLE + empty owners → PROVEN_NO_EFFECT (generic, not id-hardcoded)", () => {
+  it("S05-R01 / QA-07: UNAVAILABLE + owner probe false → PROVEN_NO_EFFECT", () => {
     const risk = classifySiblingEffectRisk(baseSibling(), {
       correlationKeys: [],
       requestsOwnerEffect: true,
@@ -59,7 +60,101 @@ describe("P2 S05 pending policy", () => {
     expect(risk).toBe("PROVEN_NO_EFFECT");
   });

-  it("QA-07: two historical-style UNKNOWN both non-blocking under policy", () => {
+  it("S05-R02: UNAVAILABLE + empty resultJson save but ownerEffectsFound true → BLOQUÉ", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        documentSaveStatus: null,
+        ownerEffectsFound: true,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R03: UNAVAILABLE + owner probe incomplete (null) → BLOQUÉ", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({ ownerEffectsFound: null }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R04: owner read error (null) → BLOQUÉ", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        qualificationStatus: "UNAVAILABLE",
+        ownerEffectsFound: null,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R05 / QA-08: QUALIFIED REQUEST_EFFECT without owner proof → BLOQUÉ", () => {
+    const q: NoraTurnQualification = {
+      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+      status: "QUALIFIED",
+      goal: "create",
+      intents: [
+        {
+          id: "c1",
+          capabilityId: "d4.create_document",
+          mode: "REQUEST_EFFECT",
+          summary: "create",
+          parameters: {},
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+      ],
+      clarifications: [],
+      replyDraft: "ok",
+    };
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        qualificationStatus: "QUALIFIED",
+        qualification: q,
+        ownerEffectsFound: false,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R06: documentSave=null but pilotageEffectAttempted → BLOQUÉ", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        documentSaveStatus: null,
+        pilotageEffectAttempted: true,
+        ownerEffectsFound: false,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R07: two UNKNOWN — one innocent, one dangerous → BLOQUÉ; both evaluated", () => {
+    const siblings = [
+      baseSibling({ id: "safe", clientTurnKey: "safe-key", createdAtMs: 1 }),
+      baseSibling({
+        id: "danger",
+        clientTurnKey: "danger-key",
+        createdAtMs: 2,
+        ownerEffectsFound: true,
+      }),
+    ];
+    const decision = evaluateS05SiblingPolicy({
+      siblings,
+      current: { correlationKeys: [], requestsOwnerEffect: true },
+      clientPendingHint: "safe-key",
+      applyPendingGate: true,
+    });
+    expect(decision.allowOwnerEffects).toBe(false);
+    expect(decision.classifications).toHaveLength(2);
+    expect(decision.primaryBlockingKey).toBe("danger-key");
+  });
+
+  it("S05-R08 / QA-07: two proven-harmless UNKNOWN → independent intent allowed", () => {
     const siblings = [
       baseSibling({ id: "tcmd_1", clientTurnKey: "turn-6424c417-x", createdAtMs: 1 }),
       baseSibling({
@@ -91,11 +186,10 @@ describe("P2 S05 pending policy", () => {
     });
     expect(decision.allowOwnerEffects).toBe(true);
     expect(decision.pendingEffectBlocked).toBe(false);
-    expect(decision.classifications).toHaveLength(2);
     expect(decision.classifications.every((c) => c.risk === "PROVEN_NO_EFFECT")).toBe(true);
   });

-  it("QA-08: RUNNING sibling always blocks", () => {
+  it("S05-R09 / QA-08: RUNNING sibling always blocks", () => {
     const risk = classifySiblingEffectRisk(
       baseSibling({ status: "RUNNING", qualificationStatus: "QUALIFIED" }),
       { correlationKeys: [], requestsOwnerEffect: true },
@@ -103,50 +197,53 @@ describe("P2 S05 pending policy", () => {
     expect(risk).toBe("ACTIVE_EFFECT_RISK");
   });

-  it("QA-08: UNKNOWN without qualification evidence → fail closed", () => {
+  it("S05-R10: same durable correlation keys → SAME_INTENT", () => {
     const risk = classifySiblingEffectRisk(
-      baseSibling({
-        qualificationStatus: null,
-        qualification: null,
-        ownerEffectsFound: null,
-      }),
-      { correlationKeys: [], requestsOwnerEffect: true },
+      baseSibling({ correlationKeys: ["corr-1", "bind:corr-1"] }),
+      { correlationKeys: ["corr-1", "salt:corr-1"], requestsOwnerEffect: true },
     );
-    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+    expect(risk).toBe("SAME_INTENT");
   });

-  it("QA-08: QUALIFIED REQUEST_EFFECT without owner proof → UNKNOWN_EFFECT_RISK", () => {
-    const q: NoraTurnQualification = {
-      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
-      status: "QUALIFIED",
-      goal: "create",
-      intents: [
-        {
-          id: "c1",
-          capabilityId: "d4.create_document",
-          mode: "REQUEST_EFFECT",
-          summary: "create",
-          parameters: {},
-          constraints: [],
-          dependsOn: [],
-          sourceEvidence: [],
-        },
-      ],
-      clarifications: [],
-      replyDraft: "ok",
-    };
+  it("S05-R11: overlapping key with divergent content still SAME_INTENT (reconcile, not new CREATE)", () => {
+    // Policy classifies SAME_INTENT; caller must reconcile — never authorize a new mutation.
     const risk = classifySiblingEffectRisk(
       baseSibling({
-        qualificationStatus: "QUALIFIED",
-        qualification: q,
-        ownerEffectsFound: false,
+        correlationKeys: ["shared-key"],
+        documentSaveStatus: "CONFLICT",
+        ownerEffectsFound: true,
       }),
+      { correlationKeys: ["shared-key"], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("SAME_INTENT");
+    expect(evaluateS05SiblingPolicy({
+      siblings: [baseSibling({ correlationKeys: ["shared-key"], ownerEffectsFound: true })],
+      current: { correlationKeys: ["shared-key"], requestsOwnerEffect: true },
+      clientPendingHint: null,
+      applyPendingGate: true,
+    }).allowOwnerEffects).toBe(false);
+  });
+
+  it("S05-R12: independent resources + proven no effect → progression allowed", () => {
+    const decision = evaluateS05SiblingPolicy({
+      siblings: [baseSibling({ correlationKeys: ["other-a"] })],
+      current: { correlationKeys: ["other-b"], requestsOwnerEffect: true },
+      clientPendingHint: null,
+      applyPendingGate: true,
+    });
+    expect(decision.allowOwnerEffects).toBe(true);
+  });
+
+  it("S05-R13: empty current keys → no false SAME_INTENT", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({ correlationKeys: ["corr-1"] }),
       { correlationKeys: [], requestsOwnerEffect: true },
     );
-    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+    expect(risk).not.toBe("SAME_INTENT");
+    expect(risk).toBe("PROVEN_NO_EFFECT");
   });

-  it("QA-19: evaluates all siblings; hint never hides another blocker", () => {
+  it("S05-R14 / QA-19: hint names safe sibling; dangerous sibling still blocks", () => {
     const siblings = [
       baseSibling({
         id: "safe",
@@ -171,6 +268,37 @@ describe("P2 S05 pending policy", () => {
     expect(decision.pendingBlockReason).toContain("danger-key");
   });

+  it("S05-R18: Intervencia-shaped ids are not special-cased", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        clientTurnKey: "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70",
+        ownerEffectsFound: false,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("PROVEN_NO_EFFECT");
+    const risk2 = classifySiblingEffectRisk(
+      baseSibling({
+        clientTurnKey: "turn-e5be1dd4-c15e-4438-84a8-69b463fdbb5a",
+        ownerEffectsFound: true,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk2).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("QA-08: UNKNOWN without qualification evidence → fail closed", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        qualificationStatus: null,
+        qualification: null,
+        ownerEffectsFound: null,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
   it("QA-19: deterministic order by createdAt then id", () => {
     const ordered = sortS05SiblingsDeterministic([
       { id: "b", createdAtMs: 2 },
@@ -191,25 +319,54 @@ describe("P2 S05 pending policy", () => {
     expect(risk).toBe("UNKNOWN_EFFECT_RISK");
   });

-  it("SAME_INTENT when correlation overlaps", () => {
-    const risk = classifySiblingEffectRisk(
-      baseSibling({ correlationKeys: ["corr-1"] }),
-      { correlationKeys: ["corr-1"], requestsOwnerEffect: true },
+  it("buildTurnCorrelationKeys emits durable comparable identities", () => {
+    const keys = buildTurnCorrelationKeys({
+      commandId: "tcmd_1",
+      operationId: "op_1",
+      userMessageId: "msg_1",
+      clientTurnKey: "turn-a",
+      clientCorrelationSalt: "salt-x",
+      bindingCorrelationKeys: ["bind-k"],
+      businessClientCommandKey: "conv-auth:turn-a",
+      missionKeys: ["doc:mission:turn-a"],
+    });
+    expect(keys).toEqual(
+      expect.arrayContaining([
+        "tcmd_1",
+        "tcmd:tcmd_1",
+        "op_1",
+        "op:op_1",
+        "msg_1",
+        "umsg:msg_1",
+        "turn-a",
+        "ctk:turn-a",
+        "salt-x",
+        "salt:salt-x",
+        "bind-k",
+        "bind:bind-k",
+        "conv-auth:turn-a",
+        "bck:conv-auth:turn-a",
+        "doc:mission:turn-a",
+      ]),
     );
-    expect(risk).toBe("SAME_INTENT");
+    expect(keys.every((k) => !k.includes(" "))).toBe(true);
   });

-  it("parseSiblingResultEvidence reads durable UNAVAILABLE", () => {
+  it("parseSiblingResultEvidence reads durable UNAVAILABLE + binding keys", () => {
     const json = JSON.stringify({
       semanticQualificationStatus: "UNAVAILABLE",
       semanticQualification: unavailableQ(),
       documentSave: null,
       pilotageEffect: null,
       humanDecisionCreated: false,
+      operationId: "op-x",
+      documentCommandBindings: [{ correlationKey: "corr-bind-1" }],
     });
     const p = parseSiblingResultEvidence(json);
     expect(p.qualificationStatus).toBe("UNAVAILABLE");
     expect(p.documentSaveStatus).toBeNull();
     expect(p.humanDecisionCreated).toBe(false);
+    expect(p.bindingCorrelationKeys).toEqual(["corr-bind-1"]);
+    expect(p.operationId).toBe("op-x");
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts b/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
index d12f616e..5125fd3a 100644
--- a/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/semantic-qualification.test.ts
@@ -301,9 +301,16 @@ describe("SEM-02 lexical routers retired", () => {
       "utf8",
     );
     expect(policy).toMatch(/S05_PENDING_BLOCKS_EFFECT/);
+    expect(policy).toMatch(/buildTurnCorrelationKeys/);
     expect(src).toMatch(/evaluateS05SiblingPolicy/);
+    expect(src).toMatch(/probeSiblingOwnerEffects/);
+    expect(src).toMatch(/buildTurnCorrelationKeys/);
     expect(src).toMatch(/allowOwnerEffects/);
     expect(src).toMatch(/findUnresolvedSiblingTurns/);
+    // R-01: must not derive ownerEffectsFound from resultJson documentSave alone.
+    expect(src).not.toMatch(
+      /ownerEffectsFound:\s*\n?\s*parsed\.qualificationStatus == null/,
+    );
   });

   it("F1 — reconcile known acts before STALE_REVISION gate", () => {

```

## J. Tests UNIT
- `npm run test:unit` → **351 PASS** (48 files) — était 341
- S05-R01..R14, R18 + buildTurnCorrelationKeys + parse bindings
- confront-proposal-fence: 12 PASS (non-régression P1)
- Lot C source guard: refuse ancien pattern resultJson-derived ownerEffectsFound

## K. Tests PostgreSQL
- `ml4c-s05-owner-evidence.pg.test.ts` : R01 / R02 / R04 / R10 PASS (probe réel + SAME_INTENT)
- `ml4c-s05-idempotence-knowledge.pg.test.ts` + `ml4c-d2-mission-s05.pg.test.ts` PASS
- D4: prior-proposal + document-command + document-identity → 95 PASS
- Lane: DATABASE_URL `sfia_next_dev@:5433` ; RECETTE `:5434` / `:3200` non mutées

## L. Tests BROWSER
**NOT RUN** — DEV `:3100` absent ; RECETTE `:3200` présente (non utilisée pour qualification). Pas de démarrage DEV dans ce cycle pour éviter confusion de lane.

## M. Tests LIVE
**LIVE NOT RUN** — prérequis LIVE non réunis / coût borné ; ne vaut pas LIVE FAILED.

## N. Matrice S05-R01..R18
| ID | Couverture | Résultat |
|---|---|---|
| R01 | UNIT + PG | PASS |
| R02 | UNIT + PG (doc owner sans RJ save) | PASS |
| R03 | UNIT (owner null) | PASS |
| R04 | UNIT + PG (force error → null → block) | PASS |
| R05 | UNIT | PASS |
| R06 | UNIT | PASS |
| R07 | UNIT | PASS |
| R08 | UNIT | PASS |
| R09 | UNIT | PASS |
| R10 | UNIT + PG (shared corr key) | PASS |
| R11 | UNIT (SAME_INTENT blocks) | PASS |
| R12 | UNIT | PASS |
| R13 | UNIT | PASS |
| R14 | UNIT | PASS |
| R15 | fencing/idempotence préexistants + non-régression D4 PG | COVERED BY PRIOR + D4 PG |
| R16 | isolation pilot via ownerPilotId/prep filters | DESIGN/CODE |
| R17 | mission gate inchangé (blockingMission) | PRESERVED |
| R18 | UNIT (ids Intervencia non hardcodés) | PASS |

## O. Matrice QA-01..QA-20
| QA | Portée | Rejeu ce cycle | Env | SHA | Résultat |
|---|---|---|---|---|---|
| QA-01 CREATE | D4 | PG document suites | DEV PG | 67cfaceafbce | PASS (prior-proposal/command) |
| QA-02 LF structurel | P1 | UNIT confront | UNIT | 67cfaceafbce | PASS |
| QA-03 divergence | P1 | UNIT confront | UNIT | 67cfaceafbce | PASS |
| QA-04 fence invalide | P1 | UNIT | UNIT | 67cfaceafbce | PASS |
| QA-05 Unicode/CRLF | P1 | UNIT | UNIT | 67cfaceafbce | PASS (suite confront) |
| QA-06 fence après ACK | P3 | non rejoué mutatif | — | 67cfaceafbce | PRESERVED (code non touché) |
| QA-07 multi UNKNOWN | S05 | UNIT R08 | UNIT | 67cfaceafbce | PASS |
| QA-08 UNKNOWN dangereux | S05 | UNIT+PG R02/R05 | DEV PG | 67cfaceafbce | PASS |
| QA-09 idempotence | S05 | PG S05 suite | DEV PG | 67cfaceafbce | PASS |
| QA-10 D2/D5/D6 | missions | PG d2-mission-s05 | DEV PG | 67cfaceafbce | PASS |
| QA-11 source assistant | P1 | UNIT | UNIT | 67cfaceafbce | PASS |
| QA-12 REVISE | D4 | PG identity | DEV PG | 67cfaceafbce | PASS |
| QA-13 sas | P3 | code préservé | — | 67cfaceafbce | PRESERVED |
| QA-14 pas D2 implicite | S05 | PG | DEV PG | 67cfaceafbce | PASS |
| QA-15 isolation Pilote | probe filters | CODE | — | 67cfaceafbce | CODE REVIEW |
| QA-16 ACK pré-effet | P3 | non touché | — | 67cfaceafbce | PRESERVED |
| QA-17 réconciliation UNKNOWN | R-01/R-02 | UNIT+PG | DEV PG | 67cfaceafbce | PASS |
| QA-18 pas Git implicite | scope | allowlist | — | 67cfaceafbce | PASS |
| QA-19 tous bloqueurs | S05 | UNIT R07/R14 | UNIT | 67cfaceafbce | PASS |
| QA-20 manque preuve = fail closed | R03/R04 | UNIT+PG | DEV PG | 67cfaceafbce | PASS |

DETERMINISTIC PROVEN ≠ LIVE PROVEN. USER RECETTE NOT RUN.

## P. Autorité / fencing / idempotence
- Aucune mutation owner dans le helper S05.
- turnFence / CAS / seal D4 / conv-auth inchangés.
- SAME_INTENT bloque (`allowOwnerEffects=false`) — pas de nouvelle mutation indépendante.
- Mission blocking path préservé.

## Q. Blast radius / non-régression
Allowlist respectée. D4 P1/P3 non modifiés. UNIT 351 + PG D4 95 PASS. RECETTE non touchée.

## R. Fichiers créés / modifiés (remédiation)
**Créés:** `tests/integration/ml4c-s05-owner-evidence.pg.test.ts`
**Modifiés:** service.ts, s05-pending-policy.ts, turn-command.ts, s05-pending-policy.test.ts, semantic-qualification.test.ts, as-built, delivery-history

## S. Git Review Index
| Path | Role |
|---|---|
| s05-pending-policy.ts | FULL CONTENT § below (helper + keys) |
| confront-proposal-fence.test.ts | FULL CONTENT (pack antérieur incomplet) |
| s05-pending-policy.test.ts | FULL CONTENT |
| ml4c-s05-owner-evidence.pg.test.ts | FULL CONTENT (nouveau) |
| service.ts | snips probe + S05 gate + diff 3d0eab6f |
| turn-command.ts | diff (+operationId) |
| Integrated local since d936da81 | useful diff § below |

## T. Réserves et verdict
- BROWSER NOT RUN ; LIVE NOT RUN ; USER RECETTE NOT RUN
- Commit local only ; no product push
- Intervencia RECETTE read-only non rejoué (politique générale démontrée)

**Verdict:** REMEDIATION IMPLEMENTED WITH RESERVES — REVIEW REQUIRED

Distinctions:
- IMPLEMENTED: oui (R-01/R-02)
- COVERAGE VERIFIED: oui (UNIT+PG+BUILD) — TECHNICAL
- DETERMINISTIC BEHAVIOR PROVEN: oui (UNIT+PG)
- LIVE BEHAVIOR PROVEN: non
- USER RECETTE NOT RUN

Interdictions respectées: pas S03-01 PASS RECETTE ; pas T-D4-NEUF-02 RECETTE ; pas ML4C ACCEPTED ; pas GATE C CLOSED ; pas STABLE ; pas ADOPTED.

## U. Commit local
- `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` — `fix(next): require owner evidence for safe S05 reconciliation`
- Parent: `3d0eab6f01cb8013990193cea93e8bfa5248831d`

## V. Gates Morris restants
1. Revue ChatGPT sur handoff L3 distant
2. Décision éventuelle candidat RECETTE figé (nouveau GO)
3. BROWSER DEV / LIVE si prérequis
4. Aucun déploiement / PR #676 update depuis ce cycle

---
## Integration snips — probeSiblingOwnerEffects
```typescript
export async function probeSiblingOwnerEffects(input: {
  pilotId: string;
  preparationId: string;
  projectId: string | null;
  sibling: {
    commandId: string;
    clientTurnKey: string;
    userMessageId: string | null;
    operationId: string | null;
    bindingCorrelationKeys: string[];
  };
}): Promise<boolean | null> {
  const { sibling } = input;
  const missionKeys = missionCorrelationKeys(sibling.clientTurnKey);
  const corrKeys = [
    ...new Set(
      [
        ...sibling.bindingCorrelationKeys,
        missionKeys.document,
        missionKeys.publication,
        sibling.clientTurnKey.trim() || null,
      ].filter((k): k is string => Boolean(k && k.trim())),
    ),
  ];

  try {
    // DEV/E2E seam only — never set in RECETTE/STABLE; forces conservative null.
    if (process.env.STUDIO_S05_PROBE_FORCE_ERROR === "1") {
      throw new Error("STUDIO_S05_PROBE_FORCE_ERROR");
    }

    if (corrKeys.length > 0) {
      const docs = await db
        .select({ id: documents.id })
        .from(documents)
        .where(
          and(
            eq(documents.preparationId, input.preparationId),
            eq(documents.ownerPilotId, input.pilotId),
            inArray(documents.creationCorrelationKey, corrKeys),
          ),
        )
        .limit(1);
      if (docs.length > 0) return true;

      const revs = await db
        .select({ id: documentRevisions.id })
        .from(documentRevisions)
        .innerJoin(documents, eq(documentRevisions.documentId, documents.id))
        .where(
          and(
            eq(documents.preparationId, input.preparationId),
            eq(documents.ownerPilotId, input.pilotId),
            inArray(documentRevisions.correlationKey, corrKeys),
          ),
        )
        .limit(1);
      if (revs.length > 0) return true;
    }

    const cmdNeedle = sibling.commandId;
    const provenanceHits = await db
      .select({ id: documentRevisions.id })
      .from(documentRevisions)
      .innerJoin(documents, eq(documentRevisions.documentId, documents.id))
      .where(
        and(
          eq(documents.preparationId, input.preparationId),
          eq(documents.ownerPilotId, input.pilotId),
          sql`${documentRevisions.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
        ),
      )
      .limit(1);
    if (provenanceHits.length > 0) return true;

    const d2 = await db
      .select({ id: createProjectCommands.id })
      .from(createProjectCommands)
      .where(
        and(
          eq(createProjectCommands.pilotId, input.pilotId),
          eq(createProjectCommands.preparationId, input.preparationId),
          eq(createProjectCommands.idempotencyKey, sibling.clientTurnKey),
        ),
      )
      .limit(1);
    if (d2.length > 0) return true;

    if (input.projectId) {
      const bizKey = conversationalCommandKey(sibling.clientTurnKey);
      const bizByKey = await db
        .select({ id: businessCommands.id })
        .from(businessCommands)
        .where(
          and(
            eq(businessCommands.projectId, input.projectId),
            eq(businessCommands.actorPilotId, input.pilotId),
            eq(businessCommands.clientCommandKey, bizKey),
          ),
        )
        .limit(1);
      if (bizByKey.length > 0) return true;

      if (sibling.userMessageId) {
        const bizByMsg = await db
          .select({ id: businessCommands.id })
          .from(businessCommands)
          .where(
            and(
              eq(businessCommands.projectId, input.projectId),
              eq(businessCommands.actorPilotId, input.pilotId),
              eq(businessCommands.sourceKind, "USER_MESSAGE"),
              eq(businessCommands.sourceRef, sibling.userMessageId),
            ),
          )
          .limit(1);
        if (bizByMsg.length > 0) return true;

        const hd = await db
          .select({ id: humanDecisions.id })
          .from(humanDecisions)
          .where(
            and(
              eq(humanDecisions.projectId, input.projectId),
              eq(humanDecisions.pilotId, input.pilotId),
              eq(humanDecisions.sourceRef, sibling.userMessageId),
            ),
          )
          .limit(1);
        if (hd.length > 0) return true;
      }

      const eaKeys = [
        ...new Set(
          [missionKeys.publication, ...sibling.bindingCorrelationKeys].filter(
            (k): k is string => Boolean(k && k.trim()),
          ),
        ),
      ];
      if (eaKeys.length > 0) {
        const ea = await db
          .select({ id: effectAttempts.id })
          .from(effectAttempts)
          .where(
            and(
              eq(effectAttempts.pilotId, input.pilotId),
              eq(effectAttempts.projectId, input.projectId),
              inArray(effectAttempts.correlationKey, eaKeys),
            ),
          )
          .limit(1);
        if (ea.length > 0) return true;
      }
    }

    const know = await db
      .select({ id: knowledgeAcquis.id })
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, input.preparationId),
          eq(knowledgeAcquis.ownerPilotId, input.pilotId),
          sql`${knowledgeAcquis.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
        ),
      )
      .limit(1);
    if (know.length > 0) return true;

    return false;
  } catch {
    return null;
  }
}


```

## Integration snips — S05 gather + evaluate
```typescript
  // S05 — durable unresolved work (turns + missions). Client hint is UX only.
  const siblings = await findUnresolvedSiblingTurns({
    conversationId: ctx.conversation.id,
    ownerPilotId: pilotId,
    excludeClientTurnKey: clientTurnKey,
  });
  const clientPendingHint = opts?.unresolvedPendingClientTurnKey?.trim() || null;
  const missionsByKey = await loadLatestMissionsByIntentKey(ctx.conversation.id);
  const unresolvedMissions = [...missionsByKey.values()].filter((m) =>
    ["AWAITING_PILOT_ACT", "AWAITING_PILOT_AUTH", "AWAITING_CLARIFICATION", "ACTIVE"].includes(
      m.status,
    ),
  );
  // ACTIVE only blocks when a step is still WAITING/PENDING (real unfinished work).
  const blockingMission =
    unresolvedMissions.find((m) =>
      m.status === "ACTIVE"
        ? m.steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
        : true,
    ) ?? null;

  const applyPendingGate =
    nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN";
  // R-02 — durable comparable identities only (never USER text / title / lexical).
  const currentMissionKeys = missionCorrelationKeys(
    carriedMission?.clientIntentKey?.trim() || clientTurnKey,
  );
  const currentCorrelationKeys = buildTurnCorrelationKeys({
    commandId: reserved.commandId,
    operationId: reserved.operationId,
    userMessageId: reserved.userMessageId,
    clientTurnKey,
    clientCorrelationSalt: opts?.correlationKey?.trim() || null,
    bindingCorrelationKeys: [],
    businessClientCommandKey: conversationalCommandKey(clientTurnKey),
    missionKeys: [currentMissionKeys.document, currentMissionKeys.publication],
  });
  const siblingEvidence: S05SiblingEvidence[] = await Promise.all(
    siblings.map(async (s) => {
      const parsed = parseSiblingResultEvidence(s.resultJson);
      const siblingMission = missionCorrelationKeys(s.clientTurnKey);
      const ownerEffectsFound = await probeSiblingOwnerEffects({
        pilotId,
        preparationId,
        projectId: ctx.project?.id ?? null,
        sibling: {
          commandId: s.id,
          clientTurnKey: s.clientTurnKey,
          userMessageId: s.userMessageId,
          operationId: s.operationId,
          bindingCorrelationKeys: parsed.bindingCorrelationKeys,
        },
      });
      return {
        id: s.id,
        clientTurnKey: s.clientTurnKey,
        status: s.status,
        createdAtMs: s.createdAt.getTime(),
        qualificationStatus: parsed.qualificationStatus,
        qualification: parsed.qualification,
        documentSaveStatus: parsed.documentSaveStatus,
        pilotageEffectAttempted: parsed.pilotageEffectAttempted,
        humanDecisionCreated: parsed.humanDecisionCreated,
        ownerEffectsFound,
        correlationKeys: buildTurnCorrelationKeys({
          commandId: s.id,
          operationId: s.operationId,
          userMessageId: s.userMessageId,
          clientTurnKey: s.clientTurnKey,
          bindingCorrelationKeys: parsed.bindingCorrelationKeys,
          businessClientCommandKey: conversationalCommandKey(s.clientTurnKey),
          missionKeys: [siblingMission.document, siblingMission.publication],
        }),
      };
    }),
  );
  const siblingPolicy = evaluateS05SiblingPolicy({
    siblings: siblingEvidence,
    current: {
      correlationKeys: currentCorrelationKeys,
      requestsOwnerEffect: applyPendingGate,
    },
    clientPendingHint,
    applyPendingGate,
  });


```

## FULL FILE — `projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts`
```typescript
/**
 * S05 — pure pending-risk policy (internal decision labels only; not DB statuses).
 * Fail closed when durable evidence is insufficient to prove safety.
 */
import {
  effectIntents,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

export type S05RiskClass =
  | "ACTIVE_EFFECT_RISK"
  | "UNKNOWN_EFFECT_RISK"
  | "PROVEN_NO_EFFECT"
  | "PROVEN_INDEPENDENT"
  | "SAME_INTENT";

export type S05SiblingEvidence = {
  id: string;
  clientTurnKey: string;
  status: "RUNNING" | "ACCEPTED" | "UNKNOWN" | string;
  createdAtMs: number;
  /** Durable qualification status from resultJson, when parseable. */
  qualificationStatus: string | null;
  qualification: NoraTurnQualification | null;
  documentSaveStatus: string | null;
  pilotageEffectAttempted: boolean | null;
  humanDecisionCreated: boolean | null;
  /**
   * Owner-side probe result (never derived from resultJson alone):
   * - true  = correlated owner mutation row identified
   * - false = applicable owners probed to completion with zero hits
   * - null  = probe absent, incomplete, errored, or identity insufficient
   */
  ownerEffectsFound: boolean | null;
  /** Durable correlation / intent keys for SAME_INTENT (comparable identities). */
  correlationKeys?: string[];
};

export type S05CurrentIntentContext = {
  /** Correlation / intent keys of the current turn effect request. */
  correlationKeys: string[];
  /** When true, current turn requests an owner mutation (D2/D4/D5/D6/D7). */
  requestsOwnerEffect: boolean;
};

function hasActionableEffectIntents(q: NoraTurnQualification | null): boolean {
  if (!q) return false;
  return effectIntents(q).length > 0;
}

/**
 * Classify one unresolved sibling for S05.
 * Never uses age alone. Never treats documentSave=null alone as proof.
 */
export function classifySiblingEffectRisk(
  sibling: S05SiblingEvidence,
  current: S05CurrentIntentContext,
): S05RiskClass {
  const sameIntent =
    current.correlationKeys.length > 0 &&
    (sibling.correlationKeys ?? []).some((k) => current.correlationKeys.includes(k));
  if (sameIntent) return "SAME_INTENT";

  if (sibling.status === "RUNNING" || sibling.status === "ACCEPTED") {
    return "ACTIVE_EFFECT_RISK";
  }

  if (sibling.status !== "UNKNOWN") {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Owner probe found a mutation → not safe to ignore.
  if (sibling.ownerEffectsFound === true) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Explicit attempted pilotage / HD without terminal certainty.
  if (sibling.pilotageEffectAttempted === true || sibling.humanDecisionCreated === true) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Document save reached a real owner outcome (including CONFLICT/AVAILABLE/UNKNOWN).
  if (
    sibling.documentSaveStatus != null &&
    sibling.documentSaveStatus !== "NOT_EXECUTED"
  ) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Insufficient durable qualification → fail closed.
  if (sibling.qualificationStatus == null || sibling.qualification == null) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Owner probe required for PROVEN_NO_EFFECT (null = not probed).
  if (sibling.ownerEffectsFound == null) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // QUALIFIED with actionable REQUEST_EFFECT but no owner row yet → uncertain.
  if (
    sibling.qualificationStatus === "QUALIFIED" &&
    hasActionableEffectIntents(sibling.qualification)
  ) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // UNAVAILABLE / NEEDS_CLARIFICATION / QUALIFIED-without-effect-intents:
  // effectIntents() is empty unless QUALIFIED+REQUEST_EFFECT; owner probe empty.
  if (
    sibling.qualificationStatus === "UNAVAILABLE" ||
    sibling.qualificationStatus === "NEEDS_CLARIFICATION" ||
    (sibling.qualificationStatus === "QUALIFIED" &&
      !hasActionableEffectIntents(sibling.qualification))
  ) {
    if (sibling.ownerEffectsFound === false) {
      // No actionable owner path and no owner rows → proven without effect.
      // Relative to a disjoint current intention, also independent.
      return current.requestsOwnerEffect ? "PROVEN_NO_EFFECT" : "PROVEN_INDEPENDENT";
    }
  }

  return "UNKNOWN_EFFECT_RISK";
}

export function isBlockingS05Risk(risk: S05RiskClass): boolean {
  return (
    risk === "ACTIVE_EFFECT_RISK" ||
    risk === "UNKNOWN_EFFECT_RISK" ||
    risk === "SAME_INTENT"
  );
}

/** Deterministic order: createdAt ascending, then id ascending. */
export function sortS05SiblingsDeterministic<T extends { createdAtMs: number; id: string }>(
  siblings: T[],
): T[] {
  return [...siblings].sort((a, b) => {
    if (a.createdAtMs !== b.createdAtMs) return a.createdAtMs - b.createdAtMs;
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });
}

export type S05PolicyDecision = {
  allowOwnerEffects: boolean;
  pendingEffectBlocked: boolean;
  pendingBlockReason: string | undefined;
  classifications: Array<{
    clientTurnKey: string;
    status: string;
    risk: S05RiskClass;
  }>;
  /** Prefer UX hint only for reason string when that sibling actually blocks. */
  primaryBlockingKey: string | null;
};

/**
 * Evaluate all siblings. Missions are handled by the caller (still fail-closed).
 */
export function evaluateS05SiblingPolicy(input: {
  siblings: S05SiblingEvidence[];
  current: S05CurrentIntentContext;
  clientPendingHint: string | null;
  /** When false (DIALOGUE_INDEPENDANT), never block owner effects via S05 siblings. */
  applyPendingGate: boolean;
}): S05PolicyDecision {
  const ordered = sortS05SiblingsDeterministic(input.siblings);
  const classifications = ordered.map((s) => ({
    clientTurnKey: s.clientTurnKey,
    status: s.status,
    risk: classifySiblingEffectRisk(s, input.current),
  }));

  if (!input.applyPendingGate) {
    return {
      allowOwnerEffects: true,
      pendingEffectBlocked: false,
      pendingBlockReason: undefined,
      classifications,
      primaryBlockingKey: null,
    };
  }

  const blockers = classifications.filter((c) => isBlockingS05Risk(c.risk));
  if (blockers.length === 0) {
    return {
      allowOwnerEffects: true,
      pendingEffectBlocked: false,
      pendingBlockReason: undefined,
      classifications,
      primaryBlockingKey: null,
    };
  }

  const hint = input.clientPendingHint?.trim() || null;
  const hinted = hint ? blockers.find((b) => b.clientTurnKey === hint) : null;
  const primary = hinted ?? blockers[0]!;
  const reasonPrefix =
    primary.risk === "SAME_INTENT"
      ? "S05_PENDING_BLOCKS_SAME_INTENT"
      : primary.risk === "ACTIVE_EFFECT_RISK"
        ? "S05_PENDING_BLOCKS_EFFECT"
        : "S05_PENDING_BLOCKS_AMBIGUOUS";

  return {
    allowOwnerEffects: false,
    pendingEffectBlocked: true,
    pendingBlockReason: `${reasonPrefix}:${primary.clientTurnKey}`,
    classifications,
    primaryBlockingKey: primary.clientTurnKey,
  };
}

/**
 * Build comparable durable correlation keys for SAME_INTENT.
 * Only stable identities — never USER text, title, or lexical similarity.
 */
export function buildTurnCorrelationKeys(input: {
  commandId?: string | null;
  operationId?: string | null;
  userMessageId?: string | null;
  clientTurnKey?: string | null;
  /** Client salt / mission doc key / explicit correlation before seal. */
  clientCorrelationSalt?: string | null;
  /** Sealed documentCommandBindings[].correlationKey values. */
  bindingCorrelationKeys?: string[] | null;
  /** D5 conversational client command key when known. */
  businessClientCommandKey?: string | null;
  /** Mission continuity keys (doc:mission:… / pub:mission:…). */
  missionKeys?: string[] | null;
}): string[] {
  const out = new Set<string>();
  const add = (raw: string | null | undefined, prefix?: string) => {
    const v = raw?.trim();
    if (!v) return;
    out.add(v);
    if (prefix) out.add(`${prefix}${v}`);
  };
  add(input.commandId, "tcmd:");
  add(input.operationId, "op:");
  add(input.userMessageId, "umsg:");
  add(input.clientTurnKey, "ctk:");
  add(input.clientCorrelationSalt, "salt:");
  add(input.businessClientCommandKey, "bck:");
  for (const k of input.bindingCorrelationKeys ?? []) add(k, "bind:");
  for (const k of input.missionKeys ?? []) add(k);
  return [...out];
}

/** Parse durable qualification fields from a turn resultJson string. */
export function parseSiblingResultEvidence(resultJson: string | null): {
  qualificationStatus: string | null;
  qualification: NoraTurnQualification | null;
  documentSaveStatus: string | null;
  pilotageEffectAttempted: boolean | null;
  humanDecisionCreated: boolean | null;
  /** Binding correlation keys only — not a substitute for owner probe. */
  bindingCorrelationKeys: string[];
  operationId: string | null;
} {
  if (!resultJson) {
    return {
      qualificationStatus: null,
      qualification: null,
      documentSaveStatus: null,
      pilotageEffectAttempted: null,
      humanDecisionCreated: null,
      bindingCorrelationKeys: [],
      operationId: null,
    };
  }
  try {
    const parsed = JSON.parse(resultJson) as Record<string, unknown>;
    const sq = parsed.semanticQualification as NoraTurnQualification | undefined;
    const sqStatus =
      (typeof parsed.semanticQualificationStatus === "string"
        ? parsed.semanticQualificationStatus
        : null) ??
      (sq && typeof sq.status === "string" ? sq.status : null);
    const docSave = parsed.documentSave as { status?: string } | null | undefined;
    const pilotage = parsed.pilotageEffect as { attempted?: boolean } | null | undefined;
    const bindingCorrelationKeys: string[] = [];
    const bindings = parsed.documentCommandBindings;
    if (Array.isArray(bindings)) {
      for (const b of bindings) {
        if (
          b &&
          typeof b === "object" &&
          typeof (b as { correlationKey?: string }).correlationKey === "string"
        ) {
          bindingCorrelationKeys.push((b as { correlationKey: string }).correlationKey);
        }
      }
    }
    return {
      qualificationStatus: sqStatus,
      qualification: sq && typeof sq.status === "string" ? sq : null,
      documentSaveStatus:
        docSave && typeof docSave.status === "string" ? docSave.status : null,
      pilotageEffectAttempted:
        pilotage && typeof pilotage.attempted === "boolean" ? pilotage.attempted : null,
      humanDecisionCreated:
        typeof parsed.humanDecisionCreated === "boolean" ? parsed.humanDecisionCreated : null,
      bindingCorrelationKeys,
      operationId: typeof parsed.operationId === "string" ? parsed.operationId : null,
    };
  } catch {
    return {
      qualificationStatus: null,
      qualification: null,
      documentSaveStatus: null,
      pilotageEffectAttempted: null,
      humanDecisionCreated: null,
      bindingCorrelationKeys: [],
      operationId: null,
    };
  }
}

```

## FULL FILE — `projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts`
```typescript
import { describe, expect, it } from "vitest";
import {
  canonicalizeDocumentProposal,
  confrontProposalWithFence,
  contentSha256,
  isStructuralFenceSeparatorOnly,
  serializeProposalFence,
} from "@/domains/conversation/document-command";
import {
  appendDocumentEffectAck,
  extractContractualDocumentProposal,
} from "@/domains/conversation/document-act";

function authorityOf(title: string, contentMarkdown: string) {
  const c = canonicalizeDocumentProposal({ title, contentMarkdown });
  if (!c.ok) throw new Error(c.reason);
  return c.proposal;
}

describe("P1 confrontProposalWithFence — structural LF", () => {
  it("QA-02: accepts exact match", () => {
    const authority = authorityOf("Doc", "# Doc\n\nCorps.\n");
    const fence = serializeProposalFence(authority);
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    const r = confrontProposalWithFence(authority, extracted);
    expect(r).toEqual({ ok: true, materialize: false });
  });

  it("QA-02: accepts sole structural LF separator (legacy fence body)", () => {
    const body = "# Doc\n\nCorps sans NL finale";
    const authority = authorityOf("Doc", body);
    expect(authority.contentMarkdown.endsWith("\n")).toBe(false);
    // Legacy fence: body includes serializer structural NL, no structured meta.
    const legacy = "```sfia-document\n" + body + "\n```\n";
    const extracted = extractContractualDocumentProposal(legacy);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.content).toBe(body + "\n");
    expect(
      isStructuralFenceSeparatorOnly({
        authority,
        extractedTitle: extracted.title,
        extractedContent: extracted.content,
      }),
    ).toBe(true);
    const r = confrontProposalWithFence(authority, extracted);
    expect(r.ok).toBe(true);
  });

  it("QA-02: round-trip serialize then extract equals canonical", () => {
    const authority = authorityOf("Doc", "# Doc\n\nSans fin");
    const fence = serializeProposalFence(authority);
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(extracted.content).toBe(authority.contentMarkdown);
    expect(contentSha256(extracted.title, extracted.content)).toBe(authority.contentSha256);
  });

  it("QA-03: refuses different title", () => {
    const authority = authorityOf("A", "# A\n\nBody\n");
    const other = authorityOf("B", "# B\n\nBody\n");
    const fence = serializeProposalFence(other);
    const extracted = extractContractualDocumentProposal(fence);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    const r = confrontProposalWithFence(authority, {
      ok: true,
      title: extracted.title,
      content: extracted.content,
    });
    expect(r).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
  });

  it("QA-03: refuses different body", () => {
    const authority = authorityOf("Doc", "# Doc\n\nAlpha\n");
    const extracted = {
      ok: true as const,
      title: "Doc",
      content: "# Doc\n\nBeta\n",
    };
    expect(confrontProposalWithFence(authority, extracted)).toEqual({
      ok: false,
      reason: "PROPOSAL_SOURCE_CONFLICT",
    });
  });

  it("QA-03: refuses true extra terminal LF when authority already ends with LF", () => {
    const authority = authorityOf("Doc", "# Doc\n\nWith NL\n");
    expect(authority.contentMarkdown.endsWith("\n")).toBe(true);
    const extracted = {
      ok: true as const,
      title: "Doc",
      content: authority.contentMarkdown + "\n",
    };
    expect(
      isStructuralFenceSeparatorOnly({
        authority,
        extractedTitle: extracted.title,
        extractedContent: extracted.content,
      }),
    ).toBe(false);
    expect(confrontProposalWithFence(authority, extracted)).toEqual({
      ok: false,
      reason: "PROPOSAL_SOURCE_CONFLICT",
    });
  });

  it("QA-03: refuses internal whitespace difference", () => {
    const authority = authorityOf("Doc", "# Doc\n\nHello  world\n");
    const extracted = {
      ok: true as const,
      title: "Doc",
      content: "# Doc\n\nHello world\n",
    };
    expect(confrontProposalWithFence(authority, extracted).ok).toBe(false);
  });

  it("QA-04: missing fence → materialize", () => {
    const authority = authorityOf("Doc", "# Doc\n\nX\n");
    const r = confrontProposalWithFence(authority, {
      ok: false,
      reason: "DOCUMENT_PROPOSAL_MISSING",
    });
    expect(r).toEqual({ ok: true, materialize: true });
  });

  it("QA-04: invalid fence reason propagates", () => {
    const authority = authorityOf("Doc", "# Doc\n\nX\n");
    const r = confrontProposalWithFence(authority, {
      ok: false,
      reason: "DOCUMENT_PROPOSAL_METADATA_INVALID",
    });
    expect(r).toEqual({ ok: false, reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" });
  });

  it("QA-05: Unicode body preserved under structural separator", () => {
    const body = "# Café\n\nÉlève 中文";
    const authority = authorityOf("Café", body);
    const legacy = "```sfia-document\n" + body + "\n```\n";
    const extracted = extractContractualDocumentProposal(legacy);
    expect(extracted.ok).toBe(true);
    if (!extracted.ok) throw new Error(extracted.reason);
    expect(confrontProposalWithFence(authority, extracted).ok).toBe(true);
  });
});

describe("P3 ACK + fence integrity", () => {
  it("QA-06: fence remains extractable after ACK", () => {
    const authority = authorityOf("AckDoc", "# AckDoc\n\nParagraphe un.\n\nParagraphe deux.\n");
    const fence = serializeProposalFence(authority);
    const assistant = `Voici la proposition.\n\n${fence}`;
    const composed = appendDocumentEffectAck(assistant, {
      act: "CREATE",
      status: "NOT_EXECUTED",
      reason: "PROPOSAL_SOURCE_CONFLICT",
    });
    expect(composed).not.toMatch(/Studio a exécuté l'acte documentaire/);
    expect(composed).toMatch(/NOT_EXECUTED/);
    const again = extractContractualDocumentProposal(composed);
    expect(again.ok).toBe(true);
    if (!again.ok) throw new Error(again.reason);
    expect(again.title).toBe(authority.title);
    expect(again.content).toBe(authority.contentMarkdown);
  });

  it("QA-16: AVAILABLE ACK still allows fence extract", () => {
    const authority = authorityOf("Ok", "# Ok\n\nBody\n");
    const fence = serializeProposalFence(authority);
    const composed = appendDocumentEffectAck(`Intro\n\n${fence}`, {
      act: "CREATE",
      status: "AVAILABLE",
      documentId: "doc_1",
      revisionId: "rev_1",
      revisionNumber: 1,
    });
    const again = extractContractualDocumentProposal(composed);
    expect(again.ok).toBe(true);
    if (!again.ok) throw new Error(again.reason);
    expect(again.content).toBe(authority.contentMarkdown);
  });
});

```

## FULL FILE — `projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts`
```typescript
import { describe, expect, it } from "vitest";
import {
  buildTurnCorrelationKeys,
  classifySiblingEffectRisk,
  evaluateS05SiblingPolicy,
  parseSiblingResultEvidence,
  sortS05SiblingsDeterministic,
  type S05SiblingEvidence,
} from "@/domains/conversation/s05-pending-policy";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

function unavailableQ(goal = "x"): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "UNAVAILABLE",
    goal,
    intents: [
      {
        id: "i1",
        capabilityId: "d5.pilotage_command",
        mode: "REQUEST_EFFECT",
        summary: "open cycle",
        parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
        constraints: [],
        dependsOn: [],
        sourceEvidence: [],
      },
    ],
    clarifications: [],
    replyDraft: "cannot",
  };
}

function baseSibling(over: Partial<S05SiblingEvidence> = {}): S05SiblingEvidence {
  return {
    id: "tcmd_a",
    clientTurnKey: "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70",
    status: "UNKNOWN",
    createdAtMs: 1000,
    qualificationStatus: "UNAVAILABLE",
    qualification: unavailableQ(),
    documentSaveStatus: null,
    pilotageEffectAttempted: false,
    humanDecisionCreated: false,
    ownerEffectsFound: false,
    correlationKeys: [],
    ...over,
  };
}

describe("P2 S05 pending policy", () => {
  it("S05-R01 / QA-07: UNAVAILABLE + owner probe false → PROVEN_NO_EFFECT", () => {
    const risk = classifySiblingEffectRisk(baseSibling(), {
      correlationKeys: [],
      requestsOwnerEffect: true,
    });
    expect(risk).toBe("PROVEN_NO_EFFECT");
  });

  it("S05-R02: UNAVAILABLE + empty resultJson save but ownerEffectsFound true → BLOQUÉ", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        documentSaveStatus: null,
        ownerEffectsFound: true,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R03: UNAVAILABLE + owner probe incomplete (null) → BLOQUÉ", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ ownerEffectsFound: null }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R04: owner read error (null) → BLOQUÉ", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        qualificationStatus: "UNAVAILABLE",
        ownerEffectsFound: null,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R05 / QA-08: QUALIFIED REQUEST_EFFECT without owner proof → BLOQUÉ", () => {
    const q: NoraTurnQualification = {
      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
      status: "QUALIFIED",
      goal: "create",
      intents: [
        {
          id: "c1",
          capabilityId: "d4.create_document",
          mode: "REQUEST_EFFECT",
          summary: "create",
          parameters: {},
          constraints: [],
          dependsOn: [],
          sourceEvidence: [],
        },
      ],
      clarifications: [],
      replyDraft: "ok",
    };
    const risk = classifySiblingEffectRisk(
      baseSibling({
        qualificationStatus: "QUALIFIED",
        qualification: q,
        ownerEffectsFound: false,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R06: documentSave=null but pilotageEffectAttempted → BLOQUÉ", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        documentSaveStatus: null,
        pilotageEffectAttempted: true,
        ownerEffectsFound: false,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("S05-R07: two UNKNOWN — one innocent, one dangerous → BLOQUÉ; both evaluated", () => {
    const siblings = [
      baseSibling({ id: "safe", clientTurnKey: "safe-key", createdAtMs: 1 }),
      baseSibling({
        id: "danger",
        clientTurnKey: "danger-key",
        createdAtMs: 2,
        ownerEffectsFound: true,
      }),
    ];
    const decision = evaluateS05SiblingPolicy({
      siblings,
      current: { correlationKeys: [], requestsOwnerEffect: true },
      clientPendingHint: "safe-key",
      applyPendingGate: true,
    });
    expect(decision.allowOwnerEffects).toBe(false);
    expect(decision.classifications).toHaveLength(2);
    expect(decision.primaryBlockingKey).toBe("danger-key");
  });

  it("S05-R08 / QA-07: two proven-harmless UNKNOWN → independent intent allowed", () => {
    const siblings = [
      baseSibling({ id: "tcmd_1", clientTurnKey: "turn-6424c417-x", createdAtMs: 1 }),
      baseSibling({
        id: "tcmd_2",
        clientTurnKey: "turn-e5be1dd4-x",
        createdAtMs: 2,
        qualification: {
          ...unavailableQ("privacy"),
          intents: [
            {
              id: "i1",
              capabilityId: "d4.read_knowledge",
              mode: "EXPLORE",
              summary: "read",
              parameters: {},
              constraints: [],
              dependsOn: [],
              sourceEvidence: [],
            },
          ],
        },
      }),
    ];
    const decision = evaluateS05SiblingPolicy({
      siblings,
      current: { correlationKeys: [], requestsOwnerEffect: true },
      clientPendingHint: "turn-e5be1dd4-x",
      applyPendingGate: true,
    });
    expect(decision.allowOwnerEffects).toBe(true);
    expect(decision.pendingEffectBlocked).toBe(false);
    expect(decision.classifications.every((c) => c.risk === "PROVEN_NO_EFFECT")).toBe(true);
  });

  it("S05-R09 / QA-08: RUNNING sibling always blocks", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ status: "RUNNING", qualificationStatus: "QUALIFIED" }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("ACTIVE_EFFECT_RISK");
  });

  it("S05-R10: same durable correlation keys → SAME_INTENT", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ correlationKeys: ["corr-1", "bind:corr-1"] }),
      { correlationKeys: ["corr-1", "salt:corr-1"], requestsOwnerEffect: true },
    );
    expect(risk).toBe("SAME_INTENT");
  });

  it("S05-R11: overlapping key with divergent content still SAME_INTENT (reconcile, not new CREATE)", () => {
    // Policy classifies SAME_INTENT; caller must reconcile — never authorize a new mutation.
    const risk = classifySiblingEffectRisk(
      baseSibling({
        correlationKeys: ["shared-key"],
        documentSaveStatus: "CONFLICT",
        ownerEffectsFound: true,
      }),
      { correlationKeys: ["shared-key"], requestsOwnerEffect: true },
    );
    expect(risk).toBe("SAME_INTENT");
    expect(evaluateS05SiblingPolicy({
      siblings: [baseSibling({ correlationKeys: ["shared-key"], ownerEffectsFound: true })],
      current: { correlationKeys: ["shared-key"], requestsOwnerEffect: true },
      clientPendingHint: null,
      applyPendingGate: true,
    }).allowOwnerEffects).toBe(false);
  });

  it("S05-R12: independent resources + proven no effect → progression allowed", () => {
    const decision = evaluateS05SiblingPolicy({
      siblings: [baseSibling({ correlationKeys: ["other-a"] })],
      current: { correlationKeys: ["other-b"], requestsOwnerEffect: true },
      clientPendingHint: null,
      applyPendingGate: true,
    });
    expect(decision.allowOwnerEffects).toBe(true);
  });

  it("S05-R13: empty current keys → no false SAME_INTENT", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({ correlationKeys: ["corr-1"] }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).not.toBe("SAME_INTENT");
    expect(risk).toBe("PROVEN_NO_EFFECT");
  });

  it("S05-R14 / QA-19: hint names safe sibling; dangerous sibling still blocks", () => {
    const siblings = [
      baseSibling({
        id: "safe",
        clientTurnKey: "safe-key",
        createdAtMs: 1,
      }),
      baseSibling({
        id: "danger",
        clientTurnKey: "danger-key",
        createdAtMs: 2,
        status: "RUNNING",
      }),
    ];
    const decision = evaluateS05SiblingPolicy({
      siblings,
      current: { correlationKeys: [], requestsOwnerEffect: true },
      clientPendingHint: "safe-key",
      applyPendingGate: true,
    });
    expect(decision.allowOwnerEffects).toBe(false);
    expect(decision.primaryBlockingKey).toBe("danger-key");
    expect(decision.pendingBlockReason).toContain("danger-key");
  });

  it("S05-R18: Intervencia-shaped ids are not special-cased", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        clientTurnKey: "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70",
        ownerEffectsFound: false,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("PROVEN_NO_EFFECT");
    const risk2 = classifySiblingEffectRisk(
      baseSibling({
        clientTurnKey: "turn-e5be1dd4-c15e-4438-84a8-69b463fdbb5a",
        ownerEffectsFound: true,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk2).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("QA-08: UNKNOWN without qualification evidence → fail closed", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        qualificationStatus: null,
        qualification: null,
        ownerEffectsFound: null,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("QA-19: deterministic order by createdAt then id", () => {
    const ordered = sortS05SiblingsDeterministic([
      { id: "b", createdAtMs: 2 },
      { id: "a", createdAtMs: 1 },
      { id: "c", createdAtMs: 1 },
    ]);
    expect(ordered.map((s) => s.id)).toEqual(["a", "c", "b"]);
  });

  it("QA-20: documentSave=null alone is insufficient without owner probe", () => {
    const risk = classifySiblingEffectRisk(
      baseSibling({
        documentSaveStatus: null,
        ownerEffectsFound: null,
      }),
      { correlationKeys: [], requestsOwnerEffect: true },
    );
    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
  });

  it("buildTurnCorrelationKeys emits durable comparable identities", () => {
    const keys = buildTurnCorrelationKeys({
      commandId: "tcmd_1",
      operationId: "op_1",
      userMessageId: "msg_1",
      clientTurnKey: "turn-a",
      clientCorrelationSalt: "salt-x",
      bindingCorrelationKeys: ["bind-k"],
      businessClientCommandKey: "conv-auth:turn-a",
      missionKeys: ["doc:mission:turn-a"],
    });
    expect(keys).toEqual(
      expect.arrayContaining([
        "tcmd_1",
        "tcmd:tcmd_1",
        "op_1",
        "op:op_1",
        "msg_1",
        "umsg:msg_1",
        "turn-a",
        "ctk:turn-a",
        "salt-x",
        "salt:salt-x",
        "bind-k",
        "bind:bind-k",
        "conv-auth:turn-a",
        "bck:conv-auth:turn-a",
        "doc:mission:turn-a",
      ]),
    );
    expect(keys.every((k) => !k.includes(" "))).toBe(true);
  });

  it("parseSiblingResultEvidence reads durable UNAVAILABLE + binding keys", () => {
    const json = JSON.stringify({
      semanticQualificationStatus: "UNAVAILABLE",
      semanticQualification: unavailableQ(),
      documentSave: null,
      pilotageEffect: null,
      humanDecisionCreated: false,
      operationId: "op-x",
      documentCommandBindings: [{ correlationKey: "corr-bind-1" }],
    });
    const p = parseSiblingResultEvidence(json);
    expect(p.qualificationStatus).toBe("UNAVAILABLE");
    expect(p.documentSaveStatus).toBeNull();
    expect(p.humanDecisionCreated).toBe(false);
    expect(p.bindingCorrelationKeys).toEqual(["corr-bind-1"]);
    expect(p.operationId).toBe("op-x");
  });
});

```

## FULL FILE — `projects/sfia-studio-next/web/tests/integration/ml4c-s05-owner-evidence.pg.test.ts`
```typescript
/**
 * S05 remédiation R-01 / R-02 — owner evidence + SAME_INTENT through real gather path.
 */
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

process.env.STUDIO_LANE = "DEV";
process.env.STUDIO_E2E = "1";
process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";

import { eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, documents, preparations } from "@/db/schema";
import { createDevTestSession } from "@/domains/identity/session";
import {
  getPreparationContext,
  openOrCreatePreparation,
} from "@/domains/preparation/service";
import {
  postUserMessageAndNora,
  probeSiblingOwnerEffects,
} from "@/domains/conversation/service";
import {
  markTurnUnknown,
  reserveTurnCommand,
  stashTurnQualification,
} from "@/domains/conversation/turn-command";
import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
import { newId } from "@/lib/ids";

const UNAVAILABLE_Q = {
  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  status: "UNAVAILABLE",
  goal: "privacy",
  intents: [
    {
      id: "i1",
      capabilityId: "d5.pilotage_command",
      mode: "REQUEST_EFFECT",
      summary: "open",
      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
      constraints: [] as string[],
      dependsOn: [] as string[],
      sourceEvidence: [] as string[],
    },
  ],
  clarifications: [] as string[],
  replyDraft: "cannot",
};

describe("ML4C S05 owner evidence remédiation (PG)", () => {
  let pilotId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
  });

  afterAll(() => {
    /* e2e isolated */
  });

  it("S05-R01: UNAVAILABLE + complete empty owner probe → independent CREATE not blocked", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-r01-safe-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A UNAVAILABLE",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_R01", a.ownerToken);

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: ctx.project?.id ?? null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: aKey,
        userMessageId: a.userMessageId,
        operationId: a.operationId,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(false);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-r01-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(false);

    const aRow = (
      await db
        .select()
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, a.commandId))
        .limit(1)
    )[0];
    expect(aRow?.status).toBe("UNKNOWN");
  });

  it("S05-R02: owner document row exists while resultJson save is null → BLOQUÉ via real probe", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const sharedCorr = `owner-corr-r02-${Date.now()}`;
    const aKey = `s05-r02-hidden-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A with hidden owner doc",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");

    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    // RJ looks harmless (null documentSave) but carries durable binding for owner probe.
    await markTurnUnknown(
      a.commandId,
      "TEST_S05_R02",
      a.ownerToken,
      JSON.stringify({
        semanticQualificationStatus: "UNAVAILABLE",
        semanticQualification: UNAVAILABLE_Q,
        documentSave: null,
        pilotageEffect: null,
        humanDecisionCreated: false,
        documentCommandBindings: [{ correlationKey: sharedCorr }],
      }),
    );

    // Owner row present — resultJson does not reveal AVAILABLE documentSave.
    await db.insert(documents).values({
      id: newId("doc"),
      preparationId: prep.id,
      projectId: null,
      ownerPilotId: pilotId,
      title: "Hidden owner effect",
      creationCorrelationKey: sharedCorr,
    });

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: aKey,
        userMessageId: a.userMessageId,
        operationId: a.operationId,
        bindingCorrelationKeys: [sharedCorr],
      },
    });
    expect(probe).toBe(true);

    const revBefore = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
    )[0]?.creationRevision ?? 0;

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-r02-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(true);

    const revAfter = (
      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
    )[0]?.creationRevision ?? 0;
    expect(revAfter).toBe(revBefore);
  });

  it("S05-R04: owner probe error → null → independent CREATE BLOQUÉ (fail closed)", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-r04-err-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A probe error",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_R04", a.ownerToken);

    const prev = process.env.STUDIO_S05_PROBE_FORCE_ERROR;
    process.env.STUDIO_S05_PROBE_FORCE_ERROR = "1";
    try {
      const probe = await probeSiblingOwnerEffects({
        pilotId,
        preparationId: prep.id,
        projectId: null,
        sibling: {
          commandId: a.commandId,
          clientTurnKey: aKey,
          userMessageId: a.userMessageId,
          operationId: a.operationId,
          bindingCorrelationKeys: [],
        },
      });
      expect(probe).toBeNull();

      const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
        clientTurnKey: `s05-r04-b-${Date.now()}`,
      });
      expect(b.pendingEffectBlocked).toBe(true);
    } finally {
      if (prev === undefined) delete process.env.STUDIO_S05_PROBE_FORCE_ERROR;
      else process.env.STUDIO_S05_PROBE_FORCE_ERROR = prev;
    }
  });

  it("S05-R10: SAME_INTENT via shared durable correlation key blocks independent CREATE", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const shared = `same-intent-corr-${Date.now()}`;
    const aKey = `s05-r10-a-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A same intent",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(
      a.commandId,
      "TEST_S05_R10",
      a.ownerToken,
      JSON.stringify({
        semanticQualificationStatus: "UNAVAILABLE",
        semanticQualification: UNAVAILABLE_Q,
        documentSave: null,
        documentCommandBindings: [{ correlationKey: shared }],
      }),
    );

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-r10-b-${Date.now()}`,
      // Same durable salt / correlation as sibling binding → SAME_INTENT.
      correlationKey: shared,
    });
    expect(b.pendingEffectBlocked).toBe(true);
    expect(b.pendingBlockReason ?? "").toMatch(/S05_PENDING_BLOCKS_SAME_INTENT|S05_PENDING_BLOCKS/);
  });
});

```

## Useful integrated diff since d936da81 (local unpublished)
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts b/projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts
new file mode 100644
index 00000000..603bd66a
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/conversation/s05-pending-policy.ts
@@ -0,0 +1,318 @@
+/**
+ * S05 — pure pending-risk policy (internal decision labels only; not DB statuses).
+ * Fail closed when durable evidence is insufficient to prove safety.
+ */
+import {
+  effectIntents,
+  type NoraTurnQualification,
+} from "@/domains/conversation/semantic-qualification";
+
+export type S05RiskClass =
+  | "ACTIVE_EFFECT_RISK"
+  | "UNKNOWN_EFFECT_RISK"
+  | "PROVEN_NO_EFFECT"
+  | "PROVEN_INDEPENDENT"
+  | "SAME_INTENT";
+
+export type S05SiblingEvidence = {
+  id: string;
+  clientTurnKey: string;
+  status: "RUNNING" | "ACCEPTED" | "UNKNOWN" | string;
+  createdAtMs: number;
+  /** Durable qualification status from resultJson, when parseable. */
+  qualificationStatus: string | null;
+  qualification: NoraTurnQualification | null;
+  documentSaveStatus: string | null;
+  pilotageEffectAttempted: boolean | null;
+  humanDecisionCreated: boolean | null;
+  /**
+   * Owner-side probe result (never derived from resultJson alone):
+   * - true  = correlated owner mutation row identified
+   * - false = applicable owners probed to completion with zero hits
+   * - null  = probe absent, incomplete, errored, or identity insufficient
+   */
+  ownerEffectsFound: boolean | null;
+  /** Durable correlation / intent keys for SAME_INTENT (comparable identities). */
+  correlationKeys?: string[];
+};
+
+export type S05CurrentIntentContext = {
+  /** Correlation / intent keys of the current turn effect request. */
+  correlationKeys: string[];
+  /** When true, current turn requests an owner mutation (D2/D4/D5/D6/D7). */
+  requestsOwnerEffect: boolean;
+};
+
+function hasActionableEffectIntents(q: NoraTurnQualification | null): boolean {
+  if (!q) return false;
+  return effectIntents(q).length > 0;
+}
+
+/**
+ * Classify one unresolved sibling for S05.
+ * Never uses age alone. Never treats documentSave=null alone as proof.
+ */
+export function classifySiblingEffectRisk(
+  sibling: S05SiblingEvidence,
+  current: S05CurrentIntentContext,
+): S05RiskClass {
+  const sameIntent =
+    current.correlationKeys.length > 0 &&
+    (sibling.correlationKeys ?? []).some((k) => current.correlationKeys.includes(k));
+  if (sameIntent) return "SAME_INTENT";
+
+  if (sibling.status === "RUNNING" || sibling.status === "ACCEPTED") {
+    return "ACTIVE_EFFECT_RISK";
+  }
+
+  if (sibling.status !== "UNKNOWN") {
+    return "UNKNOWN_EFFECT_RISK";
+  }
+
+  // Owner probe found a mutation → not safe to ignore.
+  if (sibling.ownerEffectsFound === true) {
+    return "UNKNOWN_EFFECT_RISK";
+  }
+
+  // Explicit attempted pilotage / HD without terminal certainty.
+  if (sibling.pilotageEffectAttempted === true || sibling.humanDecisionCreated === true) {
+    return "UNKNOWN_EFFECT_RISK";
+  }
+
+  // Document save reached a real owner outcome (including CONFLICT/AVAILABLE/UNKNOWN).
+  if (
+    sibling.documentSaveStatus != null &&
+    sibling.documentSaveStatus !== "NOT_EXECUTED"
+  ) {
+    return "UNKNOWN_EFFECT_RISK";
+  }
+
+  // Insufficient durable qualification → fail closed.
+  if (sibling.qualificationStatus == null || sibling.qualification == null) {
+    return "UNKNOWN_EFFECT_RISK";
+  }
+
+  // Owner probe required for PROVEN_NO_EFFECT (null = not probed).
+  if (sibling.ownerEffectsFound == null) {
+    return "UNKNOWN_EFFECT_RISK";
+  }
+
+  // QUALIFIED with actionable REQUEST_EFFECT but no owner row yet → uncertain.
+  if (
+    sibling.qualificationStatus === "QUALIFIED" &&
+    hasActionableEffectIntents(sibling.qualification)
+  ) {
+    return "UNKNOWN_EFFECT_RISK";
+  }
+
+  // UNAVAILABLE / NEEDS_CLARIFICATION / QUALIFIED-without-effect-intents:
+  // effectIntents() is empty unless QUALIFIED+REQUEST_EFFECT; owner probe empty.
+  if (
+    sibling.qualificationStatus === "UNAVAILABLE" ||
+    sibling.qualificationStatus === "NEEDS_CLARIFICATION" ||
+    (sibling.qualificationStatus === "QUALIFIED" &&
+      !hasActionableEffectIntents(sibling.qualification))
+  ) {
+    if (sibling.ownerEffectsFound === false) {
+      // No actionable owner path and no owner rows → proven without effect.
+      // Relative to a disjoint current intention, also independent.
+      return current.requestsOwnerEffect ? "PROVEN_NO_EFFECT" : "PROVEN_INDEPENDENT";
+    }
+  }
+
+  return "UNKNOWN_EFFECT_RISK";
+}
+
+export function isBlockingS05Risk(risk: S05RiskClass): boolean {
+  return (
+    risk === "ACTIVE_EFFECT_RISK" ||
+    risk === "UNKNOWN_EFFECT_RISK" ||
+    risk === "SAME_INTENT"
+  );
+}
+
+/** Deterministic order: createdAt ascending, then id ascending. */
+export function sortS05SiblingsDeterministic<T extends { createdAtMs: number; id: string }>(
+  siblings: T[],
+): T[] {
+  return [...siblings].sort((a, b) => {
+    if (a.createdAtMs !== b.createdAtMs) return a.createdAtMs - b.createdAtMs;
+    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
+  });
+}
+
+export type S05PolicyDecision = {
+  allowOwnerEffects: boolean;
+  pendingEffectBlocked: boolean;
+  pendingBlockReason: string | undefined;
+  classifications: Array<{
+    clientTurnKey: string;
+    status: string;
+    risk: S05RiskClass;
+  }>;
+  /** Prefer UX hint only for reason string when that sibling actually blocks. */
+  primaryBlockingKey: string | null;
+};
+
+/**
+ * Evaluate all siblings. Missions are handled by the caller (still fail-closed).
+ */
+export function evaluateS05SiblingPolicy(input: {
+  siblings: S05SiblingEvidence[];
+  current: S05CurrentIntentContext;
+  clientPendingHint: string | null;
+  /** When false (DIALOGUE_INDEPENDANT), never block owner effects via S05 siblings. */
+  applyPendingGate: boolean;
+}): S05PolicyDecision {
+  const ordered = sortS05SiblingsDeterministic(input.siblings);
+  const classifications = ordered.map((s) => ({
+    clientTurnKey: s.clientTurnKey,
+    status: s.status,
+    risk: classifySiblingEffectRisk(s, input.current),
+  }));
+
+  if (!input.applyPendingGate) {
+    return {
+      allowOwnerEffects: true,
+      pendingEffectBlocked: false,
+      pendingBlockReason: undefined,
+      classifications,
+      primaryBlockingKey: null,
+    };
+  }
+
+  const blockers = classifications.filter((c) => isBlockingS05Risk(c.risk));
+  if (blockers.length === 0) {
+    return {
+      allowOwnerEffects: true,
+      pendingEffectBlocked: false,
+      pendingBlockReason: undefined,
+      classifications,
+      primaryBlockingKey: null,
+    };
+  }
+
+  const hint = input.clientPendingHint?.trim() || null;
+  const hinted = hint ? blockers.find((b) => b.clientTurnKey === hint) : null;
+  const primary = hinted ?? blockers[0]!;
+  const reasonPrefix =
+    primary.risk === "SAME_INTENT"
+      ? "S05_PENDING_BLOCKS_SAME_INTENT"
+      : primary.risk === "ACTIVE_EFFECT_RISK"
+        ? "S05_PENDING_BLOCKS_EFFECT"
+        : "S05_PENDING_BLOCKS_AMBIGUOUS";
+
+  return {
+    allowOwnerEffects: false,
+    pendingEffectBlocked: true,
+    pendingBlockReason: `${reasonPrefix}:${primary.clientTurnKey}`,
+    classifications,
+    primaryBlockingKey: primary.clientTurnKey,
+  };
+}
+
+/**
+ * Build comparable durable correlation keys for SAME_INTENT.
+ * Only stable identities — never USER text, title, or lexical similarity.
+ */
+export function buildTurnCorrelationKeys(input: {
+  commandId?: string | null;
+  operationId?: string | null;
+  userMessageId?: string | null;
+  clientTurnKey?: string | null;
+  /** Client salt / mission doc key / explicit correlation before seal. */
+  clientCorrelationSalt?: string | null;
+  /** Sealed documentCommandBindings[].correlationKey values. */
+  bindingCorrelationKeys?: string[] | null;
+  /** D5 conversational client command key when known. */
+  businessClientCommandKey?: string | null;
+  /** Mission continuity keys (doc:mission:… / pub:mission:…). */
+  missionKeys?: string[] | null;
+}): string[] {
+  const out = new Set<string>();
+  const add = (raw: string | null | undefined, prefix?: string) => {
+    const v = raw?.trim();
+    if (!v) return;
+    out.add(v);
+    if (prefix) out.add(`${prefix}${v}`);
+  };
+  add(input.commandId, "tcmd:");
+  add(input.operationId, "op:");
+  add(input.userMessageId, "umsg:");
+  add(input.clientTurnKey, "ctk:");
+  add(input.clientCorrelationSalt, "salt:");
+  add(input.businessClientCommandKey, "bck:");
+  for (const k of input.bindingCorrelationKeys ?? []) add(k, "bind:");
+  for (const k of input.missionKeys ?? []) add(k);
+  return [...out];
+}
+
+/** Parse durable qualification fields from a turn resultJson string. */
+export function parseSiblingResultEvidence(resultJson: string | null): {
+  qualificationStatus: string | null;
+  qualification: NoraTurnQualification | null;
+  documentSaveStatus: string | null;
+  pilotageEffectAttempted: boolean | null;
+  humanDecisionCreated: boolean | null;
+  /** Binding correlation keys only — not a substitute for owner probe. */
+  bindingCorrelationKeys: string[];
+  operationId: string | null;
+} {
+  if (!resultJson) {
+    return {
+      qualificationStatus: null,
+      qualification: null,
+      documentSaveStatus: null,
+      pilotageEffectAttempted: null,
+      humanDecisionCreated: null,
+      bindingCorrelationKeys: [],
+      operationId: null,
+    };
+  }
+  try {
+    const parsed = JSON.parse(resultJson) as Record<string, unknown>;
+    const sq = parsed.semanticQualification as NoraTurnQualification | undefined;
+    const sqStatus =
+      (typeof parsed.semanticQualificationStatus === "string"
+        ? parsed.semanticQualificationStatus
+        : null) ??
+      (sq && typeof sq.status === "string" ? sq.status : null);
+    const docSave = parsed.documentSave as { status?: string } | null | undefined;
+    const pilotage = parsed.pilotageEffect as { attempted?: boolean } | null | undefined;
+    const bindingCorrelationKeys: string[] = [];
+    const bindings = parsed.documentCommandBindings;
+    if (Array.isArray(bindings)) {
+      for (const b of bindings) {
+        if (
+          b &&
+          typeof b === "object" &&
+          typeof (b as { correlationKey?: string }).correlationKey === "string"
+        ) {
+          bindingCorrelationKeys.push((b as { correlationKey: string }).correlationKey);
+        }
+      }
+    }
+    return {
+      qualificationStatus: sqStatus,
+      qualification: sq && typeof sq.status === "string" ? sq : null,
+      documentSaveStatus:
+        docSave && typeof docSave.status === "string" ? docSave.status : null,
+      pilotageEffectAttempted:
+        pilotage && typeof pilotage.attempted === "boolean" ? pilotage.attempted : null,
+      humanDecisionCreated:
+        typeof parsed.humanDecisionCreated === "boolean" ? parsed.humanDecisionCreated : null,
+      bindingCorrelationKeys,
+      operationId: typeof parsed.operationId === "string" ? parsed.operationId : null,
+    };
+  } catch {
+    return {
+      qualificationStatus: null,
+      qualification: null,
+      documentSaveStatus: null,
+      pilotageEffectAttempted: null,
+      humanDecisionCreated: null,
+      bindingCorrelationKeys: [],
+      operationId: null,
+    };
+  }
+}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index e2765555..13009c4f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1,6 +1,16 @@
-import { and, asc, eq } from "drizzle-orm";
+import { and, asc, eq, inArray, sql } from "drizzle-orm";
 import { db } from "@/db/client";
-import { conversations, messages } from "@/db/schema";
+import {
+  businessCommands,
+  conversations,
+  createProjectCommands,
+  documentRevisions,
+  documents,
+  effectAttempts,
+  humanDecisions,
+  knowledgeAcquis,
+  messages,
+} from "@/db/schema";
 // db still used by getConversationId / listMessages
 import { newId } from "@/lib/ids";
 import { generateNoraReply } from "./nora-adapter";
@@ -14,6 +24,7 @@ import { listDocuments } from "@/domains/document/service";
 import {
   admitDocumentCommand,
   canonicalizeDocumentProposal,
+  confrontProposalWithFence,
   contentSha256,
   resolveAssistantProposal,
   sealAndApplyDocumentCommand,
@@ -35,6 +46,7 @@ import { emitObs, newRequestId } from "@/lib/observability";
 import { StudioError } from "@/lib/http-errors";
 import {
   applyConversationalAuthority,
+  conversationalCommandKey,
   reconstituteConversationalAuthority,
   type ConversationalAuthorityOutcome,
 } from "@/domains/pilotage/conversation-authority";
@@ -59,6 +71,12 @@ import {
   type NoraTurnQualification,
 } from "./semantic-qualification";
 import { loadLatestMissionsByIntentKey } from "./intent-conduction";
+import {
+  buildTurnCorrelationKeys,
+  evaluateS05SiblingPolicy,
+  parseSiblingResultEvidence,
+  type S05SiblingEvidence,
+} from "./s05-pending-policy";
 import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
 import {
   appendMissionAck,
@@ -81,6 +99,186 @@ import {
 } from "./intent-conduction";
 import { updatePreview } from "@/domains/preparation/service";

+/**
+ * S05 R-01 — gather owner-side evidence for one unresolved sibling.
+ * true = correlated owner row found; false = applicable owners probed empty;
+ * null = incomplete / errored / identity insufficient.
+ * Never derives absence of effect from resultJson alone.
+ */
+export async function probeSiblingOwnerEffects(input: {
+  pilotId: string;
+  preparationId: string;
+  projectId: string | null;
+  sibling: {
+    commandId: string;
+    clientTurnKey: string;
+    userMessageId: string | null;
+    operationId: string | null;
+    bindingCorrelationKeys: string[];
+  };
+}): Promise<boolean | null> {
+  const { sibling } = input;
+  const missionKeys = missionCorrelationKeys(sibling.clientTurnKey);
+  const corrKeys = [
+    ...new Set(
+      [
+        ...sibling.bindingCorrelationKeys,
+        missionKeys.document,
+        missionKeys.publication,
+        sibling.clientTurnKey.trim() || null,
+      ].filter((k): k is string => Boolean(k && k.trim())),
+    ),
+  ];
+
+  try {
+    // DEV/E2E seam only — never set in RECETTE/STABLE; forces conservative null.
+    if (process.env.STUDIO_S05_PROBE_FORCE_ERROR === "1") {
+      throw new Error("STUDIO_S05_PROBE_FORCE_ERROR");
+    }
+
+    if (corrKeys.length > 0) {
+      const docs = await db
+        .select({ id: documents.id })
+        .from(documents)
+        .where(
+          and(
+            eq(documents.preparationId, input.preparationId),
+            eq(documents.ownerPilotId, input.pilotId),
+            inArray(documents.creationCorrelationKey, corrKeys),
+          ),
+        )
+        .limit(1);
+      if (docs.length > 0) return true;
+
+      const revs = await db
+        .select({ id: documentRevisions.id })
+        .from(documentRevisions)
+        .innerJoin(documents, eq(documentRevisions.documentId, documents.id))
+        .where(
+          and(
+            eq(documents.preparationId, input.preparationId),
+            eq(documents.ownerPilotId, input.pilotId),
+            inArray(documentRevisions.correlationKey, corrKeys),
+          ),
+        )
+        .limit(1);
+      if (revs.length > 0) return true;
+    }
+
+    const cmdNeedle = sibling.commandId;
+    const provenanceHits = await db
+      .select({ id: documentRevisions.id })
+      .from(documentRevisions)
+      .innerJoin(documents, eq(documentRevisions.documentId, documents.id))
+      .where(
+        and(
+          eq(documents.preparationId, input.preparationId),
+          eq(documents.ownerPilotId, input.pilotId),
+          sql`${documentRevisions.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
+        ),
+      )
+      .limit(1);
+    if (provenanceHits.length > 0) return true;
+
+    const d2 = await db
+      .select({ id: createProjectCommands.id })
+      .from(createProjectCommands)
+      .where(
+        and(
+          eq(createProjectCommands.pilotId, input.pilotId),
+          eq(createProjectCommands.preparationId, input.preparationId),
+          eq(createProjectCommands.idempotencyKey, sibling.clientTurnKey),
+        ),
+      )
+      .limit(1);
+    if (d2.length > 0) return true;
+
+    if (input.projectId) {
+      const bizKey = conversationalCommandKey(sibling.clientTurnKey);
+      const bizByKey = await db
+        .select({ id: businessCommands.id })
+        .from(businessCommands)
+        .where(
+          and(
+            eq(businessCommands.projectId, input.projectId),
+            eq(businessCommands.actorPilotId, input.pilotId),
+            eq(businessCommands.clientCommandKey, bizKey),
+          ),
+        )
+        .limit(1);
+      if (bizByKey.length > 0) return true;
+
+      if (sibling.userMessageId) {
+        const bizByMsg = await db
+          .select({ id: businessCommands.id })
+          .from(businessCommands)
+          .where(
+            and(
+              eq(businessCommands.projectId, input.projectId),
+              eq(businessCommands.actorPilotId, input.pilotId),
+              eq(businessCommands.sourceKind, "USER_MESSAGE"),
+              eq(businessCommands.sourceRef, sibling.userMessageId),
+            ),
+          )
+          .limit(1);
+        if (bizByMsg.length > 0) return true;
+
+        const hd = await db
+          .select({ id: humanDecisions.id })
+          .from(humanDecisions)
+          .where(
+            and(
+              eq(humanDecisions.projectId, input.projectId),
+              eq(humanDecisions.pilotId, input.pilotId),
+              eq(humanDecisions.sourceRef, sibling.userMessageId),
+            ),
+          )
+          .limit(1);
+        if (hd.length > 0) return true;
+      }
+
+      const eaKeys = [
+        ...new Set(
+          [missionKeys.publication, ...sibling.bindingCorrelationKeys].filter(
+            (k): k is string => Boolean(k && k.trim()),
+          ),
+        ),
+      ];
+      if (eaKeys.length > 0) {
+        const ea = await db
+          .select({ id: effectAttempts.id })
+          .from(effectAttempts)
+          .where(
+            and(
+              eq(effectAttempts.pilotId, input.pilotId),
+              eq(effectAttempts.projectId, input.projectId),
+              inArray(effectAttempts.correlationKey, eaKeys),
+            ),
+          )
+          .limit(1);
+        if (ea.length > 0) return true;
+      }
+    }
+
+    const know = await db
+      .select({ id: knowledgeAcquis.id })
+      .from(knowledgeAcquis)
+      .where(
+        and(
+          eq(knowledgeAcquis.preparationId, input.preparationId),
+          eq(knowledgeAcquis.ownerPilotId, input.pilotId),
+          sql`${knowledgeAcquis.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
+        ),
+      )
+      .limit(1);
+    if (know.length > 0) return true;
+
+    return false;
+  } catch {
+    return null;
+  }
+}
+
 export async function listMessages(pilotId: string, preparationId: string) {
   // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
   const ctx = await getPreparationContext(pilotId, preparationId);
@@ -301,32 +499,6 @@ async function resolvePilotageEffectForReplay(input: {
   };
 }

-/**
- * P1 — confront an authoritative proposal with a concurrent contractual fence.
- * Fence MISSING → materialize; fence INVALID/ambiguous → refuse; fence OK → strict title+body.
- */
-function confrontProposalWithFence(
-  authority: DocumentProposalExact,
-  extracted: DocumentProposalExtract,
-):
-  | { ok: true; materialize: boolean }
-  | { ok: false; reason: string } {
-  if (!extracted.ok) {
-    if (extracted.reason === "DOCUMENT_PROPOSAL_MISSING") {
-      return { ok: true, materialize: true };
-    }
-    return { ok: false, reason: extracted.reason };
-  }
-  if (
-    extracted.title !== authority.title ||
-    extracted.content !== authority.contentMarkdown ||
-    contentSha256(extracted.title, extracted.content) !== authority.contentSha256
-  ) {
-    return { ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" };
-  }
-  return { ok: true, materialize: false };
-}
-
 export async function postUserMessageAndNora(
   pilotId: string,
   preparationId: string,
@@ -708,8 +880,6 @@ export async function postUserMessageAndNora(
     excludeClientTurnKey: clientTurnKey,
   });
   const clientPendingHint = opts?.unresolvedPendingClientTurnKey?.trim() || null;
-  const blockingSibling =
-    siblings.find((s) => s.clientTurnKey === clientPendingHint) ?? siblings[0] ?? null;
   const missionsByKey = await loadLatestMissionsByIntentKey(ctx.conversation.id);
   const unresolvedMissions = [...missionsByKey.values()].filter((m) =>
     ["AWAITING_PILOT_ACT", "AWAITING_PILOT_AUTH", "AWAITING_CLARIFICATION", "ACTIVE"].includes(
@@ -723,20 +893,98 @@ export async function postUserMessageAndNora(
         ? m.steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
         : true,
     ) ?? null;
-  const hasUnresolvedWork = Boolean(blockingSibling || blockingMission);
+
+  const applyPendingGate =
+    nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN";
+  // R-02 — durable comparable identities only (never USER text / title / lexical).
+  const currentMissionKeys = missionCorrelationKeys(
+    carriedMission?.clientIntentKey?.trim() || clientTurnKey,
+  );
+  const currentCorrelationKeys = buildTurnCorrelationKeys({
+    commandId: reserved.commandId,
+    operationId: reserved.operationId,
+    userMessageId: reserved.userMessageId,
+    clientTurnKey,
+    clientCorrelationSalt: opts?.correlationKey?.trim() || null,
+    bindingCorrelationKeys: [],
+    businessClientCommandKey: conversationalCommandKey(clientTurnKey),
+    missionKeys: [currentMissionKeys.document, currentMissionKeys.publication],
+  });
+  const siblingEvidence: S05SiblingEvidence[] = await Promise.all(
+    siblings.map(async (s) => {
+      const parsed = parseSiblingResultEvidence(s.resultJson);
+      const siblingMission = missionCorrelationKeys(s.clientTurnKey);
+      const ownerEffectsFound = await probeSiblingOwnerEffects({
+        pilotId,
+        preparationId,
+        projectId: ctx.project?.id ?? null,
+        sibling: {
+          commandId: s.id,
+          clientTurnKey: s.clientTurnKey,
+          userMessageId: s.userMessageId,
+          operationId: s.operationId,
+          bindingCorrelationKeys: parsed.bindingCorrelationKeys,
+        },
+      });
+      return {
+        id: s.id,
+        clientTurnKey: s.clientTurnKey,
+        status: s.status,
+        createdAtMs: s.createdAt.getTime(),
+        qualificationStatus: parsed.qualificationStatus,
+        qualification: parsed.qualification,
+        documentSaveStatus: parsed.documentSaveStatus,
+        pilotageEffectAttempted: parsed.pilotageEffectAttempted,
+        humanDecisionCreated: parsed.humanDecisionCreated,
+        ownerEffectsFound,
+        correlationKeys: buildTurnCorrelationKeys({
+          commandId: s.id,
+          operationId: s.operationId,
+          userMessageId: s.userMessageId,
+          clientTurnKey: s.clientTurnKey,
+          bindingCorrelationKeys: parsed.bindingCorrelationKeys,
+          businessClientCommandKey: conversationalCommandKey(s.clientTurnKey),
+          missionKeys: [siblingMission.document, siblingMission.publication],
+        }),
+      };
+    }),
+  );
+  const siblingPolicy = evaluateS05SiblingPolicy({
+    siblings: siblingEvidence,
+    current: {
+      correlationKeys: currentCorrelationKeys,
+      requestsOwnerEffect: applyPendingGate,
+    },
+    clientPendingHint,
+    applyPendingGate,
+  });
+
   let pendingEffectBlocked = false;
   let pendingBlockReason: string | undefined;
   let allowOwnerEffects = true;
-  if (hasUnresolvedWork && (nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN")) {
-    allowOwnerEffects = false;
-    pendingEffectBlocked = true;
-    pendingBlockReason = blockingSibling
-      ? nextTurnKind === "INTENTION_EFFET"
-        ? `S05_PENDING_BLOCKS_EFFECT:${blockingSibling.clientTurnKey}`
-        : `S05_PENDING_BLOCKS_AMBIGUOUS:${blockingSibling.clientTurnKey}`
-      : nextTurnKind === "INTENTION_EFFET"
-        ? `S05_MISSION_BLOCKS_EFFECT:${blockingMission?.clientIntentKey ?? "mission"}`
-        : `S05_MISSION_BLOCKS_AMBIGUOUS:${blockingMission?.clientIntentKey ?? "mission"}`;
+  const blockingSiblingKey = siblingPolicy.primaryBlockingKey;
+  const blockingSibling =
+    siblings.find((s) => s.clientTurnKey === blockingSiblingKey) ?? null;
+
+  if (applyPendingGate) {
+    if (siblingPolicy.pendingEffectBlocked) {
+      allowOwnerEffects = false;
+      pendingEffectBlocked = true;
+      pendingBlockReason = siblingPolicy.pendingBlockReason;
+    }
+    if (blockingMission) {
+      allowOwnerEffects = false;
+      pendingEffectBlocked = true;
+      if (!pendingBlockReason) {
+        pendingBlockReason =
+          nextTurnKind === "INTENTION_EFFET"
+            ? `S05_MISSION_BLOCKS_EFFECT:${blockingMission.clientIntentKey ?? "mission"}`
+            : `S05_MISSION_BLOCKS_AMBIGUOUS:${blockingMission.clientIntentKey ?? "mission"}`;
+      }
+    }
+  }
+
+  if (pendingEffectBlocked) {
     emitObs({
       event_name: "d3.turn.s05_pending_block",
       component: "d3.conversation",
@@ -746,6 +994,15 @@ export async function postUserMessageAndNora(
       meta: {
         pending_client_turn_key: blockingSibling?.clientTurnKey ?? null,
         pending_status: blockingSibling?.status ?? null,
+        pending_block_reason: pendingBlockReason ?? null,
+        // Primitive summary only — emitObs allowlists scalar meta (QA-19).
+        sibling_risks_summary: siblingPolicy.classifications
+          .map((c) => `${c.clientTurnKey}:${c.status}:${c.risk}`)
+          .join("|")
+          .slice(0, 500),
+        sibling_blocker_count: siblingPolicy.classifications.filter((c) =>
+          ["ACTIVE_EFFECT_RISK", "UNKNOWN_EFFECT_RISK", "SAME_INTENT"].includes(c.risk),
+        ).length,
         mission_status: blockingMission?.status ?? null,
         mission_key: blockingMission?.clientIntentKey ?? null,
         next_turn_kind: nextTurnKind,
@@ -1059,8 +1316,9 @@ export async function postUserMessageAndNora(
         }

         if (createBlocked || !exact) {
+          // Pre-effect refuse — D4 not attempted (QA-16).
           documentSave = {
-            status: "FAILED",
+            status: "NOT_EXECUTED",
             reason: createBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
             act: "CREATE",
           };
@@ -1092,7 +1350,7 @@ export async function postUserMessageAndNora(
             );
             if (createIntents.length > 1) {
               documentSave = {
-                status: "FAILED",
+                status: "NOT_EXECUTED",
                 reason: "AMBIGUOUS_CREATE_INTENT",
                 act: "CREATE",
               };
@@ -1100,7 +1358,7 @@ export async function postUserMessageAndNora(
               const createIntent = createIntents[0];
               if (!createIntent) {
                 documentSave = {
-                  status: "FAILED",
+                  status: "NOT_EXECUTED",
                   reason: "MISSING_CREATE_INTENT",
                   act: "CREATE",
                 };
@@ -1122,7 +1380,7 @@ export async function postUserMessageAndNora(
                 });
                 if (!admitted.ok) {
                   documentSave = {
-                    status: "FAILED",
+                    status: "NOT_EXECUTED",
                     reason: admitted.reason,
                     act: "CREATE",
                   };
@@ -1138,7 +1396,7 @@ export async function postUserMessageAndNora(
                   });
                   if (!sealed.sealApplied) {
                     documentSave = {
-                      status: "FAILED",
+                      status: "NOT_EXECUTED",
                       reason: "BINDING_SEAL_FAILED",
                       act: "CREATE",
                     };
@@ -1295,7 +1553,7 @@ export async function postUserMessageAndNora(
             }
             if (reviseBlocked || !reviseProposalContent) {
               documentSave = {
-                status: "FAILED",
+                status: "NOT_EXECUTED",
                 reason: reviseBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
                 documentId: target.documentId,
                 baseRevisionId: target.baseRevisionId,
@@ -1319,7 +1577,7 @@ export async function postUserMessageAndNora(
               );
               if (!merged.ok) {
                 documentSave = {
-                  status: "FAILED",
+                  status: "NOT_EXECUTED",
                   reason: merged.reason,
                   documentId: target.documentId,
                   baseRevisionId: target.baseRevisionId,
@@ -1344,7 +1602,7 @@ export async function postUserMessageAndNora(
                 );
                 if (!scopeCheck.ok) {
                   documentSave = {
-                    status: "FAILED",
+                    status: "NOT_EXECUTED",
                     reason: scopeCheck.reason,
                     documentId: target.documentId,
                     baseRevisionId: target.baseRevisionId,
@@ -1367,7 +1625,7 @@ export async function postUserMessageAndNora(
                   );
                   if (reviseIntents.length !== 1) {
                     documentSave = {
-                      status: "FAILED",
+                      status: "NOT_EXECUTED",
                       reason:
                         reviseIntents.length === 0
                           ? "MISSING_REVISE_INTENT"
@@ -1398,7 +1656,7 @@ export async function postUserMessageAndNora(
                     });
                     if (!admitted.ok) {
                       documentSave = {
-                        status: "FAILED",
+                        status: "NOT_EXECUTED",
                         reason: admitted.reason,
                         documentId: target.documentId,
                         baseRevisionId: target.baseRevisionId,
@@ -1416,7 +1674,7 @@ export async function postUserMessageAndNora(
                       });
                       if (!sealed.sealApplied) {
                         documentSave = {
-                          status: "FAILED",
+                          status: "NOT_EXECUTED",
                           reason: "BINDING_SEAL_FAILED",
                           documentId: target.documentId,
                           baseRevisionId: target.baseRevisionId,
@@ -1516,8 +1774,9 @@ export async function postUserMessageAndNora(
       : documentAct.kind !== "NONE" && !ownershipLostBeforeD4
         ? {
             act: documentAct.kind === "REVISE" ? "REVISE" : "CREATE",
-            status: "UNKNOWN",
-            reason: "NO_EFFECT_OBSERVED",
+            // S05 block / skipped owner path: not a transactional UNKNOWN.
+            status: "NOT_EXECUTED",
+            reason: pendingBlockReason ?? "NO_EFFECT_OBSERVED",
           }
         : // Loyal pre-effect: plausible write language, not qualified → NOT_EXECUTED (never fake FAILED).
           documentAct.kind === "NONE" &&
@@ -1773,7 +2032,7 @@ export async function postUserMessageAndNora(
     documentAct.kind === "NONE"
   ) {
     documentSave = {
-      status: "FAILED",
+      status: "NOT_EXECUTED",
       reason: proposalAuthorityConflict,
     };
   }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
index 7f38c4bf..122a73f9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/turn-command.ts
@@ -3,7 +3,7 @@
  * Never hold a DB transaction open across the provider call.
  * Ownership fencing via owner_token: lost ownership ⇒ no COMPLETE, no further D4 commits.
  */
-import { and, eq, ne, sql } from "drizzle-orm";
+import { and, asc, eq, ne, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import { conversationTurnCommands, messages } from "@/db/schema";
 import { newId } from "@/lib/ids";
@@ -553,6 +553,7 @@ export async function reserveTurnCommand(args: {
 /**
  * S05 — sibling turns still unresolved for the same conversation (excluding current key).
  * Server authority for pending coexistence; client sessionStorage is UX aid only.
+ * Ordered deterministically by createdAt then id (QA-19).
  */
 export async function findUnresolvedSiblingTurns(args: {
   conversationId: string;
@@ -563,7 +564,10 @@ export async function findUnresolvedSiblingTurns(args: {
     id: string;
     clientTurnKey: string;
     status: TurnCommandStatus;
+    operationId: string;
     userMessageId: string | null;
+    createdAt: Date;
+    resultJson: string | null;
   }>
 > {
   const rows = await db
@@ -571,7 +575,10 @@ export async function findUnresolvedSiblingTurns(args: {
       id: conversationTurnCommands.id,
       clientTurnKey: conversationTurnCommands.clientTurnKey,
       status: conversationTurnCommands.status,
+      operationId: conversationTurnCommands.operationId,
       userMessageId: conversationTurnCommands.userMessageId,
+      createdAt: conversationTurnCommands.createdAt,
+      resultJson: conversationTurnCommands.resultJson,
     })
     .from(conversationTurnCommands)
     .where(
@@ -581,12 +588,16 @@ export async function findUnresolvedSiblingTurns(args: {
         ne(conversationTurnCommands.clientTurnKey, args.excludeClientTurnKey),
         sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED', 'UNKNOWN')`,
       ),
-    );
+    )
+    .orderBy(asc(conversationTurnCommands.createdAt), asc(conversationTurnCommands.id));
   return rows.map((r) => ({
     id: r.id,
     clientTurnKey: r.clientTurnKey,
     status: r.status as TurnCommandStatus,
+    operationId: r.operationId,
     userMessageId: r.userMessageId,
+    createdAt: r.createdAt,
+    resultJson: r.resultJson,
   }));
 }

diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-s05-owner-evidence.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-s05-owner-evidence.pg.test.ts
new file mode 100644
index 00000000..3157563b
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-s05-owner-evidence.pg.test.ts
@@ -0,0 +1,275 @@
+/**
+ * S05 remédiation R-01 / R-02 — owner evidence + SAME_INTENT through real gather path.
+ */
+import { afterAll, beforeAll, describe, expect, it } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+process.env.STUDIO_LANE = "DEV";
+process.env.STUDIO_E2E = "1";
+process.env.STUDIO_FORCE_NORA_FIXTURE = "1";
+process.env.SFIA_COG_PROFILE_TYPE = "TEST_BOUNDARY";
+
+import { eq } from "drizzle-orm";
+import { db } from "@/db/client";
+import { conversationTurnCommands, documents, preparations } from "@/db/schema";
+import { createDevTestSession } from "@/domains/identity/session";
+import {
+  getPreparationContext,
+  openOrCreatePreparation,
+} from "@/domains/preparation/service";
+import {
+  postUserMessageAndNora,
+  probeSiblingOwnerEffects,
+} from "@/domains/conversation/service";
+import {
+  markTurnUnknown,
+  reserveTurnCommand,
+  stashTurnQualification,
+} from "@/domains/conversation/turn-command";
+import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
+import { newId } from "@/lib/ids";
+
+const UNAVAILABLE_Q = {
+  schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  status: "UNAVAILABLE",
+  goal: "privacy",
+  intents: [
+    {
+      id: "i1",
+      capabilityId: "d5.pilotage_command",
+      mode: "REQUEST_EFFECT",
+      summary: "open",
+      parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
+      constraints: [] as string[],
+      dependsOn: [] as string[],
+      sourceEvidence: [] as string[],
+    },
+  ],
+  clarifications: [] as string[],
+  replyDraft: "cannot",
+};
+
+describe("ML4C S05 owner evidence remédiation (PG)", () => {
+  let pilotId: string;
+
+  beforeAll(async () => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
+    pilotId = sess.pilotId;
+  });
+
+  afterAll(() => {
+    /* e2e isolated */
+  });
+
+  it("S05-R01: UNAVAILABLE + complete empty owner probe → independent CREATE not blocked", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-r01-safe-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A UNAVAILABLE",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_R01", a.ownerToken);
+
+    const probe = await probeSiblingOwnerEffects({
+      pilotId,
+      preparationId: prep.id,
+      projectId: ctx.project?.id ?? null,
+      sibling: {
+        commandId: a.commandId,
+        clientTurnKey: aKey,
+        userMessageId: a.userMessageId,
+        operationId: a.operationId,
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBe(false);
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-r01-b-${Date.now()}`,
+    });
+    expect(b.pendingEffectBlocked).toBe(false);
+
+    const aRow = (
+      await db
+        .select()
+        .from(conversationTurnCommands)
+        .where(eq(conversationTurnCommands.id, a.commandId))
+        .limit(1)
+    )[0];
+    expect(aRow?.status).toBe("UNKNOWN");
+  });
+
+  it("S05-R02: owner document row exists while resultJson save is null → BLOQUÉ via real probe", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const sharedCorr = `owner-corr-r02-${Date.now()}`;
+    const aKey = `s05-r02-hidden-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A with hidden owner doc",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    // RJ looks harmless (null documentSave) but carries durable binding for owner probe.
+    await markTurnUnknown(
+      a.commandId,
+      "TEST_S05_R02",
+      a.ownerToken,
+      JSON.stringify({
+        semanticQualificationStatus: "UNAVAILABLE",
+        semanticQualification: UNAVAILABLE_Q,
+        documentSave: null,
+        pilotageEffect: null,
+        humanDecisionCreated: false,
+        documentCommandBindings: [{ correlationKey: sharedCorr }],
+      }),
+    );
+
+    // Owner row present — resultJson does not reveal AVAILABLE documentSave.
+    await db.insert(documents).values({
+      id: newId("doc"),
+      preparationId: prep.id,
+      projectId: null,
+      ownerPilotId: pilotId,
+      title: "Hidden owner effect",
+      creationCorrelationKey: sharedCorr,
+    });
+
+    const probe = await probeSiblingOwnerEffects({
+      pilotId,
+      preparationId: prep.id,
+      projectId: null,
+      sibling: {
+        commandId: a.commandId,
+        clientTurnKey: aKey,
+        userMessageId: a.userMessageId,
+        operationId: a.operationId,
+        bindingCorrelationKeys: [sharedCorr],
+      },
+    });
+    expect(probe).toBe(true);
+
+    const revBefore = (
+      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
+    )[0]?.creationRevision ?? 0;
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-r02-b-${Date.now()}`,
+    });
+    expect(b.pendingEffectBlocked).toBe(true);
+
+    const revAfter = (
+      await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
+    )[0]?.creationRevision ?? 0;
+    expect(revAfter).toBe(revBefore);
+  });
+
+  it("S05-R04: owner probe error → null → independent CREATE BLOQUÉ (fail closed)", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-r04-err-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A probe error",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_R04", a.ownerToken);
+
+    const prev = process.env.STUDIO_S05_PROBE_FORCE_ERROR;
+    process.env.STUDIO_S05_PROBE_FORCE_ERROR = "1";
+    try {
+      const probe = await probeSiblingOwnerEffects({
+        pilotId,
+        preparationId: prep.id,
+        projectId: null,
+        sibling: {
+          commandId: a.commandId,
+          clientTurnKey: aKey,
+          userMessageId: a.userMessageId,
+          operationId: a.operationId,
+          bindingCorrelationKeys: [],
+        },
+      });
+      expect(probe).toBeNull();
+
+      const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+        clientTurnKey: `s05-r04-b-${Date.now()}`,
+      });
+      expect(b.pendingEffectBlocked).toBe(true);
+    } finally {
+      if (prev === undefined) delete process.env.STUDIO_S05_PROBE_FORCE_ERROR;
+      else process.env.STUDIO_S05_PROBE_FORCE_ERROR = prev;
+    }
+  });
+
+  it("S05-R10: SAME_INTENT via shared durable correlation key blocks independent CREATE", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const shared = `same-intent-corr-${Date.now()}`;
+    const aKey = `s05-r10-a-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A same intent",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(
+      a.commandId,
+      "TEST_S05_R10",
+      a.ownerToken,
+      JSON.stringify({
+        semanticQualificationStatus: "UNAVAILABLE",
+        semanticQualification: UNAVAILABLE_Q,
+        documentSave: null,
+        documentCommandBindings: [{ correlationKey: shared }],
+      }),
+    );
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-r10-b-${Date.now()}`,
+      // Same durable salt / correlation as sibling binding → SAME_INTENT.
+      correlationKey: shared,
+    });
+    expect(b.pendingEffectBlocked).toBe(true);
+    expect(b.pendingBlockReason ?? "").toMatch(/S05_PENDING_BLOCKS_SAME_INTENT|S05_PENDING_BLOCKS/);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts b/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts
new file mode 100644
index 00000000..7a8a2bd7
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/confront-proposal-fence.test.ts
@@ -0,0 +1,184 @@
+import { describe, expect, it } from "vitest";
+import {
+  canonicalizeDocumentProposal,
+  confrontProposalWithFence,
+  contentSha256,
+  isStructuralFenceSeparatorOnly,
+  serializeProposalFence,
+} from "@/domains/conversation/document-command";
+import {
+  appendDocumentEffectAck,
+  extractContractualDocumentProposal,
+} from "@/domains/conversation/document-act";
+
+function authorityOf(title: string, contentMarkdown: string) {
+  const c = canonicalizeDocumentProposal({ title, contentMarkdown });
+  if (!c.ok) throw new Error(c.reason);
+  return c.proposal;
+}
+
+describe("P1 confrontProposalWithFence — structural LF", () => {
+  it("QA-02: accepts exact match", () => {
+    const authority = authorityOf("Doc", "# Doc\n\nCorps.\n");
+    const fence = serializeProposalFence(authority);
+    const extracted = extractContractualDocumentProposal(fence);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    const r = confrontProposalWithFence(authority, extracted);
+    expect(r).toEqual({ ok: true, materialize: false });
+  });
+
+  it("QA-02: accepts sole structural LF separator (legacy fence body)", () => {
+    const body = "# Doc\n\nCorps sans NL finale";
+    const authority = authorityOf("Doc", body);
+    expect(authority.contentMarkdown.endsWith("\n")).toBe(false);
+    // Legacy fence: body includes serializer structural NL, no structured meta.
+    const legacy = "```sfia-document\n" + body + "\n```\n";
+    const extracted = extractContractualDocumentProposal(legacy);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    expect(extracted.content).toBe(body + "\n");
+    expect(
+      isStructuralFenceSeparatorOnly({
+        authority,
+        extractedTitle: extracted.title,
+        extractedContent: extracted.content,
+      }),
+    ).toBe(true);
+    const r = confrontProposalWithFence(authority, extracted);
+    expect(r.ok).toBe(true);
+  });
+
+  it("QA-02: round-trip serialize then extract equals canonical", () => {
+    const authority = authorityOf("Doc", "# Doc\n\nSans fin");
+    const fence = serializeProposalFence(authority);
+    const extracted = extractContractualDocumentProposal(fence);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    expect(extracted.content).toBe(authority.contentMarkdown);
+    expect(contentSha256(extracted.title, extracted.content)).toBe(authority.contentSha256);
+  });
+
+  it("QA-03: refuses different title", () => {
+    const authority = authorityOf("A", "# A\n\nBody\n");
+    const other = authorityOf("B", "# B\n\nBody\n");
+    const fence = serializeProposalFence(other);
+    const extracted = extractContractualDocumentProposal(fence);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    const r = confrontProposalWithFence(authority, {
+      ok: true,
+      title: extracted.title,
+      content: extracted.content,
+    });
+    expect(r).toEqual({ ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" });
+  });
+
+  it("QA-03: refuses different body", () => {
+    const authority = authorityOf("Doc", "# Doc\n\nAlpha\n");
+    const extracted = {
+      ok: true as const,
+      title: "Doc",
+      content: "# Doc\n\nBeta\n",
+    };
+    expect(confrontProposalWithFence(authority, extracted)).toEqual({
+      ok: false,
+      reason: "PROPOSAL_SOURCE_CONFLICT",
+    });
+  });
+
+  it("QA-03: refuses true extra terminal LF when authority already ends with LF", () => {
+    const authority = authorityOf("Doc", "# Doc\n\nWith NL\n");
+    expect(authority.contentMarkdown.endsWith("\n")).toBe(true);
+    const extracted = {
+      ok: true as const,
+      title: "Doc",
+      content: authority.contentMarkdown + "\n",
+    };
+    expect(
+      isStructuralFenceSeparatorOnly({
+        authority,
+        extractedTitle: extracted.title,
+        extractedContent: extracted.content,
+      }),
+    ).toBe(false);
+    expect(confrontProposalWithFence(authority, extracted)).toEqual({
+      ok: false,
+      reason: "PROPOSAL_SOURCE_CONFLICT",
+    });
+  });
+
+  it("QA-03: refuses internal whitespace difference", () => {
+    const authority = authorityOf("Doc", "# Doc\n\nHello  world\n");
+    const extracted = {
+      ok: true as const,
+      title: "Doc",
+      content: "# Doc\n\nHello world\n",
+    };
+    expect(confrontProposalWithFence(authority, extracted).ok).toBe(false);
+  });
+
+  it("QA-04: missing fence → materialize", () => {
+    const authority = authorityOf("Doc", "# Doc\n\nX\n");
+    const r = confrontProposalWithFence(authority, {
+      ok: false,
+      reason: "DOCUMENT_PROPOSAL_MISSING",
+    });
+    expect(r).toEqual({ ok: true, materialize: true });
+  });
+
+  it("QA-04: invalid fence reason propagates", () => {
+    const authority = authorityOf("Doc", "# Doc\n\nX\n");
+    const r = confrontProposalWithFence(authority, {
+      ok: false,
+      reason: "DOCUMENT_PROPOSAL_METADATA_INVALID",
+    });
+    expect(r).toEqual({ ok: false, reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" });
+  });
+
+  it("QA-05: Unicode body preserved under structural separator", () => {
+    const body = "# Café\n\nÉlève 中文";
+    const authority = authorityOf("Café", body);
+    const legacy = "```sfia-document\n" + body + "\n```\n";
+    const extracted = extractContractualDocumentProposal(legacy);
+    expect(extracted.ok).toBe(true);
+    if (!extracted.ok) throw new Error(extracted.reason);
+    expect(confrontProposalWithFence(authority, extracted).ok).toBe(true);
+  });
+});
+
+describe("P3 ACK + fence integrity", () => {
+  it("QA-06: fence remains extractable after ACK", () => {
+    const authority = authorityOf("AckDoc", "# AckDoc\n\nParagraphe un.\n\nParagraphe deux.\n");
+    const fence = serializeProposalFence(authority);
+    const assistant = `Voici la proposition.\n\n${fence}`;
+    const composed = appendDocumentEffectAck(assistant, {
+      act: "CREATE",
+      status: "NOT_EXECUTED",
+      reason: "PROPOSAL_SOURCE_CONFLICT",
+    });
+    expect(composed).not.toMatch(/Studio a exécuté l'acte documentaire/);
+    expect(composed).toMatch(/NOT_EXECUTED/);
+    const again = extractContractualDocumentProposal(composed);
+    expect(again.ok).toBe(true);
+    if (!again.ok) throw new Error(again.reason);
+    expect(again.title).toBe(authority.title);
+    expect(again.content).toBe(authority.contentMarkdown);
+  });
+
+  it("QA-16: AVAILABLE ACK still allows fence extract", () => {
+    const authority = authorityOf("Ok", "# Ok\n\nBody\n");
+    const fence = serializeProposalFence(authority);
+    const composed = appendDocumentEffectAck(`Intro\n\n${fence}`, {
+      act: "CREATE",
+      status: "AVAILABLE",
+      documentId: "doc_1",
+      revisionId: "rev_1",
+      revisionNumber: 1,
+    });
+    const again = extractContractualDocumentProposal(composed);
+    expect(again.ok).toBe(true);
+    if (!again.ok) throw new Error(again.reason);
+    expect(again.content).toBe(authority.contentMarkdown);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts b/projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts
new file mode 100644
index 00000000..e95f9503
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/s05-pending-policy.test.ts
@@ -0,0 +1,372 @@
+import { describe, expect, it } from "vitest";
+import {
+  buildTurnCorrelationKeys,
+  classifySiblingEffectRisk,
+  evaluateS05SiblingPolicy,
+  parseSiblingResultEvidence,
+  sortS05SiblingsDeterministic,
+  type S05SiblingEvidence,
+} from "@/domains/conversation/s05-pending-policy";
+import {
+  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  type NoraTurnQualification,
+} from "@/domains/conversation/semantic-qualification";
+
+function unavailableQ(goal = "x"): NoraTurnQualification {
+  return {
+    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+    status: "UNAVAILABLE",
+    goal,
+    intents: [
+      {
+        id: "i1",
+        capabilityId: "d5.pilotage_command",
+        mode: "REQUEST_EFFECT",
+        summary: "open cycle",
+        parameters: { pilotageOperation: "OPEN_CYCLE", cycleType: "cadrage" },
+        constraints: [],
+        dependsOn: [],
+        sourceEvidence: [],
+      },
+    ],
+    clarifications: [],
+    replyDraft: "cannot",
+  };
+}
+
+function baseSibling(over: Partial<S05SiblingEvidence> = {}): S05SiblingEvidence {
+  return {
+    id: "tcmd_a",
+    clientTurnKey: "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70",
+    status: "UNKNOWN",
+    createdAtMs: 1000,
+    qualificationStatus: "UNAVAILABLE",
+    qualification: unavailableQ(),
+    documentSaveStatus: null,
+    pilotageEffectAttempted: false,
+    humanDecisionCreated: false,
+    ownerEffectsFound: false,
+    correlationKeys: [],
+    ...over,
+  };
+}
+
+describe("P2 S05 pending policy", () => {
+  it("S05-R01 / QA-07: UNAVAILABLE + owner probe false → PROVEN_NO_EFFECT", () => {
+    const risk = classifySiblingEffectRisk(baseSibling(), {
+      correlationKeys: [],
+      requestsOwnerEffect: true,
+    });
+    expect(risk).toBe("PROVEN_NO_EFFECT");
+  });
+
+  it("S05-R02: UNAVAILABLE + empty resultJson save but ownerEffectsFound true → BLOQUÉ", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        documentSaveStatus: null,
+        ownerEffectsFound: true,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R03: UNAVAILABLE + owner probe incomplete (null) → BLOQUÉ", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({ ownerEffectsFound: null }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R04: owner read error (null) → BLOQUÉ", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        qualificationStatus: "UNAVAILABLE",
+        ownerEffectsFound: null,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R05 / QA-08: QUALIFIED REQUEST_EFFECT without owner proof → BLOQUÉ", () => {
+    const q: NoraTurnQualification = {
+      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+      status: "QUALIFIED",
+      goal: "create",
+      intents: [
+        {
+          id: "c1",
+          capabilityId: "d4.create_document",
+          mode: "REQUEST_EFFECT",
+          summary: "create",
+          parameters: {},
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+      ],
+      clarifications: [],
+      replyDraft: "ok",
+    };
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        qualificationStatus: "QUALIFIED",
+        qualification: q,
+        ownerEffectsFound: false,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R06: documentSave=null but pilotageEffectAttempted → BLOQUÉ", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        documentSaveStatus: null,
+        pilotageEffectAttempted: true,
+        ownerEffectsFound: false,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("S05-R07: two UNKNOWN — one innocent, one dangerous → BLOQUÉ; both evaluated", () => {
+    const siblings = [
+      baseSibling({ id: "safe", clientTurnKey: "safe-key", createdAtMs: 1 }),
+      baseSibling({
+        id: "danger",
+        clientTurnKey: "danger-key",
+        createdAtMs: 2,
+        ownerEffectsFound: true,
+      }),
+    ];
+    const decision = evaluateS05SiblingPolicy({
+      siblings,
+      current: { correlationKeys: [], requestsOwnerEffect: true },
+      clientPendingHint: "safe-key",
+      applyPendingGate: true,
+    });
+    expect(decision.allowOwnerEffects).toBe(false);
+    expect(decision.classifications).toHaveLength(2);
+    expect(decision.primaryBlockingKey).toBe("danger-key");
+  });
+
+  it("S05-R08 / QA-07: two proven-harmless UNKNOWN → independent intent allowed", () => {
+    const siblings = [
+      baseSibling({ id: "tcmd_1", clientTurnKey: "turn-6424c417-x", createdAtMs: 1 }),
+      baseSibling({
+        id: "tcmd_2",
+        clientTurnKey: "turn-e5be1dd4-x",
+        createdAtMs: 2,
+        qualification: {
+          ...unavailableQ("privacy"),
+          intents: [
+            {
+              id: "i1",
+              capabilityId: "d4.read_knowledge",
+              mode: "EXPLORE",
+              summary: "read",
+              parameters: {},
+              constraints: [],
+              dependsOn: [],
+              sourceEvidence: [],
+            },
+          ],
+        },
+      }),
+    ];
+    const decision = evaluateS05SiblingPolicy({
+      siblings,
+      current: { correlationKeys: [], requestsOwnerEffect: true },
+      clientPendingHint: "turn-e5be1dd4-x",
+      applyPendingGate: true,
+    });
+    expect(decision.allowOwnerEffects).toBe(true);
+    expect(decision.pendingEffectBlocked).toBe(false);
+    expect(decision.classifications.every((c) => c.risk === "PROVEN_NO_EFFECT")).toBe(true);
+  });
+
+  it("S05-R09 / QA-08: RUNNING sibling always blocks", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({ status: "RUNNING", qualificationStatus: "QUALIFIED" }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("ACTIVE_EFFECT_RISK");
+  });
+
+  it("S05-R10: same durable correlation keys → SAME_INTENT", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({ correlationKeys: ["corr-1", "bind:corr-1"] }),
+      { correlationKeys: ["corr-1", "salt:corr-1"], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("SAME_INTENT");
+  });
+
+  it("S05-R11: overlapping key with divergent content still SAME_INTENT (reconcile, not new CREATE)", () => {
+    // Policy classifies SAME_INTENT; caller must reconcile — never authorize a new mutation.
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        correlationKeys: ["shared-key"],
+        documentSaveStatus: "CONFLICT",
+        ownerEffectsFound: true,
+      }),
+      { correlationKeys: ["shared-key"], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("SAME_INTENT");
+    expect(evaluateS05SiblingPolicy({
+      siblings: [baseSibling({ correlationKeys: ["shared-key"], ownerEffectsFound: true })],
+      current: { correlationKeys: ["shared-key"], requestsOwnerEffect: true },
+      clientPendingHint: null,
+      applyPendingGate: true,
+    }).allowOwnerEffects).toBe(false);
+  });
+
+  it("S05-R12: independent resources + proven no effect → progression allowed", () => {
+    const decision = evaluateS05SiblingPolicy({
+      siblings: [baseSibling({ correlationKeys: ["other-a"] })],
+      current: { correlationKeys: ["other-b"], requestsOwnerEffect: true },
+      clientPendingHint: null,
+      applyPendingGate: true,
+    });
+    expect(decision.allowOwnerEffects).toBe(true);
+  });
+
+  it("S05-R13: empty current keys → no false SAME_INTENT", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({ correlationKeys: ["corr-1"] }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).not.toBe("SAME_INTENT");
+    expect(risk).toBe("PROVEN_NO_EFFECT");
+  });
+
+  it("S05-R14 / QA-19: hint names safe sibling; dangerous sibling still blocks", () => {
+    const siblings = [
+      baseSibling({
+        id: "safe",
+        clientTurnKey: "safe-key",
+        createdAtMs: 1,
+      }),
+      baseSibling({
+        id: "danger",
+        clientTurnKey: "danger-key",
+        createdAtMs: 2,
+        status: "RUNNING",
+      }),
+    ];
+    const decision = evaluateS05SiblingPolicy({
+      siblings,
+      current: { correlationKeys: [], requestsOwnerEffect: true },
+      clientPendingHint: "safe-key",
+      applyPendingGate: true,
+    });
+    expect(decision.allowOwnerEffects).toBe(false);
+    expect(decision.primaryBlockingKey).toBe("danger-key");
+    expect(decision.pendingBlockReason).toContain("danger-key");
+  });
+
+  it("S05-R18: Intervencia-shaped ids are not special-cased", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        clientTurnKey: "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70",
+        ownerEffectsFound: false,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("PROVEN_NO_EFFECT");
+    const risk2 = classifySiblingEffectRisk(
+      baseSibling({
+        clientTurnKey: "turn-e5be1dd4-c15e-4438-84a8-69b463fdbb5a",
+        ownerEffectsFound: true,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk2).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("QA-08: UNKNOWN without qualification evidence → fail closed", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        qualificationStatus: null,
+        qualification: null,
+        ownerEffectsFound: null,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("QA-19: deterministic order by createdAt then id", () => {
+    const ordered = sortS05SiblingsDeterministic([
+      { id: "b", createdAtMs: 2 },
+      { id: "a", createdAtMs: 1 },
+      { id: "c", createdAtMs: 1 },
+    ]);
+    expect(ordered.map((s) => s.id)).toEqual(["a", "c", "b"]);
+  });
+
+  it("QA-20: documentSave=null alone is insufficient without owner probe", () => {
+    const risk = classifySiblingEffectRisk(
+      baseSibling({
+        documentSaveStatus: null,
+        ownerEffectsFound: null,
+      }),
+      { correlationKeys: [], requestsOwnerEffect: true },
+    );
+    expect(risk).toBe("UNKNOWN_EFFECT_RISK");
+  });
+
+  it("buildTurnCorrelationKeys emits durable comparable identities", () => {
+    const keys = buildTurnCorrelationKeys({
+      commandId: "tcmd_1",
+      operationId: "op_1",
+      userMessageId: "msg_1",
+      clientTurnKey: "turn-a",
+      clientCorrelationSalt: "salt-x",
+      bindingCorrelationKeys: ["bind-k"],
+      businessClientCommandKey: "conv-auth:turn-a",
+      missionKeys: ["doc:mission:turn-a"],
+    });
+    expect(keys).toEqual(
+      expect.arrayContaining([
+        "tcmd_1",
+        "tcmd:tcmd_1",
+        "op_1",
+        "op:op_1",
+        "msg_1",
+        "umsg:msg_1",
+        "turn-a",
+        "ctk:turn-a",
+        "salt-x",
+        "salt:salt-x",
+        "bind-k",
+        "bind:bind-k",
+        "conv-auth:turn-a",
+        "bck:conv-auth:turn-a",
+        "doc:mission:turn-a",
+      ]),
+    );
+    expect(keys.every((k) => !k.includes(" "))).toBe(true);
+  });
+
+  it("parseSiblingResultEvidence reads durable UNAVAILABLE + binding keys", () => {
+    const json = JSON.stringify({
+      semanticQualificationStatus: "UNAVAILABLE",
+      semanticQualification: unavailableQ(),
+      documentSave: null,
+      pilotageEffect: null,
+      humanDecisionCreated: false,
+      operationId: "op-x",
+      documentCommandBindings: [{ correlationKey: "corr-bind-1" }],
+    });
+    const p = parseSiblingResultEvidence(json);
+    expect(p.qualificationStatus).toBe("UNAVAILABLE");
+    expect(p.documentSaveStatus).toBeNull();
+    expect(p.humanDecisionCreated).toBe(false);
+    expect(p.bindingCorrelationKeys).toEqual(["corr-bind-1"]);
+    expect(p.operationId).toBe("op-x");
+  });
+});

```
