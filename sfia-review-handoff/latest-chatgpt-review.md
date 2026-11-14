# SFIA Review Pack FULL — ML4C S05 Knowledge Owner Evidence

## A. Date et heure
2026-11-14 23:02 CET

## B. GO / cycle / sources
- Contrat: COMPLÉMENT CORRECTIF S05 — COUVERTURE EFFETS DE CONNAISSANCE + QUALIFICATION DEV
- SFIA v2.6 — Cycle projet 6 — Delivery — CRITICAL — INC/RUN
- GO Morris 14 novembre 2026 — implémentation locale bornée
- Conception: `c883db07` / blob `da397424`
- Handoff remédiation précédente: `66b44bc2` / blob `f4c70543`
- Code local prime: parent `67cfacea`

## C. Git initial et final
| | SHA |
|---|---|
| HEAD initial | `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` |
| TREE initial | `5eaad2708dc3b33dbd8bf30b652225f830b5d318` |
| Parent initial | `3d0eab6f01cb8013990193cea93e8bfa5248831d` |
| HEAD final | `a2d37d1f600836f353f44061687f0795cdc10377` |
| Parent réel | `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` |
| TREE final | `1a58f81d049311e28d1eddbec11702013f501d20` |
| Branche | `fix/next-semantic-intent-convergence-20261112` |
| main distant | `6cda86bde4aa450abb1d23eedd370a9004ddcbc1` |
| PR #676 HEAD | `67bf6b0b` OPEN / NOT MERGED |
| Push produit | NON |

Git Truth Check: PASS. Seul dirty préexistant: `.tmp-sfia-review` (réinitialisé).

## D. Matrice des écritures D4 knowledge

| EFFET | CONDITIONS | IDENTITÉ ÉCRITE | TABLE | PREUVE POSITIVE | PREUVE NÉGATIVE | GAP AVANT |
|---|---|---|---|---|---|---|
| Acquis | QUALIFIED + REQUEST_EFFECT + d4.record_knowledge + allowOwnerEffects + fence | sourceKind=message, sourceId=userMessageId, generationId | knowledge_acquis.provenance_json | jsonb sourceId/generationId (+ LIKE commandId historique positif) | identité msg/gen + sondes complètes vides | LIKE(commandId) seul manquait |
| Point ouvert | idem | idem | knowledge_open_points.provenance_json | idem | idem | non sondé |
| Sujet | ensureSubject via proposals SUBJECT/subjectTitle | AUCUNE provenance tour | knowledge_subjects | aucune attribution fiable | ne peut pas conclure « aucun sujet » par recherche | pas de champ — fail closed attribution |
| Subject events | rename/merge/split | payload sans turn id | knowledge_subject_events | non utilisé pour S05 | — | N/A |

Actionnabilité: `extractKnowledgeProposals` exige `status===QUALIFIED` et `REQUEST_EFFECT`. UNAVAILABLE → zéro proposition → chemin écriture knowledge fermé.

## E. Défaut et correctif
**Défaut:** preuve knowledge incomplète → risque de `ownerEffectsFound=false` après sondes insuffisantes.
**Correctif:** preuve structurée acquis/OP alignée sur `reconstituteConfirmedD4Effects` ; open_points inclus ; subjects non attribués ; identité absente → `null`.

## F. Preuve de corrélation
`sourceKind='message'` + `sourceId=userMessageId` et/ou `generationId` lu depuis `conversation_turn_commands`. Filtres `ownerPilotId` + `preparationId`.

## G. Preuve de non-effet
`false` seulement si identité knowledge durable présente ET acquis+OP vides (sondes terminées) ET autres owners déjà vides. Erreur → `null`. Pas de false depuis requête partielle.

## H. Chemin knowledge_acquis
Voir snip `probeSiblingOwnerEffects` ci-dessous (bloc acquisProv).

## I. Chemin knowledge_open_points
Même contrat jsonb (openProv) ; tous statuts (OPEN/RESOLVED…) comptent comme effet durable.

## J. Traitement knowledge_subjects
Pas de provenance de commande. Aucune attribution par titre/date/préparation. Négatif `false` après acquis/OP complets s'appuie sur fermeture de flux UNAVAILABLE (`extractKnowledgeProposals` vide). QUALIFIED REQUEST_EFFECT knowledge reste bloqué via `effectIntents` même sans ligne.

## K. Diff utile complet (67cfacea..HEAD)
```diff
diff --git a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
index 0d85fbf9..e0f940e8 100644
--- a/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
+++ b/projects/sfia-studio-next/construction/convergence-fonctionnelle/as-built-qualification-semantique-mobilisation-gouvernee-20261112.md
@@ -269,3 +269,46 @@ Profil: Critical PATCH corrective / NO RELEASE / STABLE NOT AVAILABLE
 - BROWSER / LIVE / RECETTE : gates Morris distincts.
 - Aucune mutation RECETTE ; UNKNOWN historiques non purgés.
 - `STUDIO_S05_PROBE_FORCE_ERROR` = seam DEV/E2E uniquement (R04).
+
+## DELIV 2026-11-14 — Complément S05 knowledge owner evidence
+
+Date: 2026-11-14 ~23:05 CET (Europe/Paris)
+Branche: `fix/next-semantic-intent-convergence-20261112`
+Parent: `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` (LOCAL ONLY)
+Réserve revue: couverture incomplete D4 knowledge dans `probeSiblingOwnerEffects`
+Profil: Critical PATCH corrective / NO RELEASE / STABLE NOT AVAILABLE
+
+### Causes traitées
+
+1. Le probe cherchait `commandId` via LIKE dans `knowledge_acquis.provenance_json`.
+2. La provenance réelle écrite par `maybeCapitalizeFromExchange` est
+   `{ sourceKind: "message", sourceId: userMessageId, generationId }` — sans commandId.
+3. `knowledge_open_points` n'était pas sondé.
+4. `knowledge_subjects` n'a pas de provenance de tour — ne doit pas être attribué
+   par titre/date/préparation, ni servir de preuve négative partielle.
+
+### Mécanique réelle
+
+- Preuve positive acquis/points ouverts : jsonb structuré
+  `sourceKind` + `sourceId` / `generationId` (parité `reconstituteConfirmedD4Effects`).
+- LIKE(commandId) conservé en signal positif historique uniquement.
+- Identité knowledge absente (ni userMessageId ni generationId) → `null`.
+- Sujets : non attribués ; négatif `false` seulement après sondes acquis/OP
+  complètes + identité durable ; UNAVAILABLE ne produit pas
+  `extractKnowledgeProposals` (chemin écriture knowledge fermé).
+- QUALIFIED REQUEST_EFFECT knowledge reste bloqué via `effectIntents` même sans ligne.
+
+### Preuves
+
+| Couche | Résultat |
+| --- | --- |
+| UNIT | PASS 351 |
+| PG K01–K10 + S05/D4 | PASS |
+| BUILD | PASS |
+| BROWSER | NOT RUN (DEV :3100 absent ; RECETTE :3200 non utilisée) |
+| LIVE | NOT RUN |
+
+### Réserves
+
+- Subject-only sans provenance : non attribuable (contrat schéma inchangé).
+- BROWSER / LIVE / RECETTE : gates Morris distincts.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 66a803c1..ef21d023 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,24 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-14-ML4C-S05-KNOWLEDGE-OWNER-EVIDENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-14 ~23:05 CET (Europe/Paris) |
+| Macro-lot | ML4C — Complément S05 knowledge owner evidence (acquis/open_points/subjects) |
+| Type | PATCH corrective Critical complementary (NO RELEASE) |
+| Branch | `fix/next-semantic-intent-convergence-20261112` |
+| Parent tip | `67cfaceafbce89c6d30a150a43e57fcd1f7720ae` (LOCAL ONLY) |
+| Design | `c883db07` / blob `da397424` |
+| Prior handoff | `sfia/review-handoff@66b44bc2` blob `f4c70543` |
+| Lane | DEV PG `:5433` ; RECETTE `:3200`/`:5434` non mutées |
+| Changes | structured knowledge provenance probe ; open_points ; subject non-attribution ; K01–K10 PG |
+| Schema | unchanged |
+| Tests | UNIT 351 PASS ; PG knowledge+S05+D4 PASS ; BUILD PASS ; BROWSER/LIVE NOT RUN |
+| Status | Product LOCAL ONLY ; Review Handoff L3 in-cycle |
+
+
 ## delivery_id: DELIV-2026-11-14-ML4C-S05-OWNER-EVIDENCE

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 13009c4f..234aef23 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -2,6 +2,7 @@ import { and, asc, eq, inArray, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import {
   businessCommands,
+  conversationTurnCommands,
   conversations,
   createProjectCommands,
   documentRevisions,
@@ -9,6 +10,7 @@ import {
   effectAttempts,
   humanDecisions,
   knowledgeAcquis,
+  knowledgeOpenPoints,
   messages,
 } from "@/db/schema";
 // db still used by getConversationId / listMessages
@@ -260,19 +262,114 @@ export async function probeSiblingOwnerEffects(input: {
       }
     }

-    const know = await db
+    // D4 knowledge — use provenance keys actually written by maybeCapitalizeFromExchange:
+    // { sourceKind: "message", sourceId: userMessageId, generationId }.
+    // commandId is NOT written into knowledge provenance; LIKE(commandId) is not exhaustive.
+    // knowledge_subjects has no turn provenance — never attribute by title/createdAt/prep alone.
+    const msgId = sibling.userMessageId?.trim() || null;
+    let generationId: string | null = null;
+    const turnMeta = (
+      await db
+        .select({ generationId: conversationTurnCommands.generationId })
+        .from(conversationTurnCommands)
+        .where(eq(conversationTurnCommands.id, sibling.commandId))
+        .limit(1)
+    )[0];
+    generationId = turnMeta?.generationId?.trim() || null;
+
+    if (!msgId && !generationId) {
+      // Knowledge negative proof requires durable message/generation identity.
+      return null;
+    }
+
+    const acquisProv = generationId
+      ? sql`(
+          ${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${generationId}
+          or (
+            coalesce(${knowledgeAcquis.provenanceJson}::jsonb->>'generationId', '') = ''
+            and ${msgId}::text is not null
+            and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceKind' = 'message'
+            and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${msgId}
+          )
+        )`
+      : sql`(
+          ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceKind' = 'message'
+          and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${msgId}
+        )`;
+    const openProv = generationId
+      ? sql`(
+          ${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${generationId}
+          or (
+            coalesce(${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId', '') = ''
+            and ${msgId}::text is not null
+            and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceKind' = 'message'
+            and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${msgId}
+          )
+        )`
+      : sql`(
+          ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceKind' = 'message'
+          and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${msgId}
+        )`;
+
+    const acquisHit = await db
       .select({ id: knowledgeAcquis.id })
       .from(knowledgeAcquis)
       .where(
         and(
           eq(knowledgeAcquis.preparationId, input.preparationId),
           eq(knowledgeAcquis.ownerPilotId, input.pilotId),
-          sql`${knowledgeAcquis.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
+          acquisProv,
+        ),
+      )
+      .limit(1);
+    if (acquisHit.length > 0) return true;
+
+    const openHit = await db
+      .select({ id: knowledgeOpenPoints.id })
+      .from(knowledgeOpenPoints)
+      .where(
+        and(
+          eq(knowledgeOpenPoints.preparationId, input.preparationId),
+          eq(knowledgeOpenPoints.ownerPilotId, input.pilotId),
+          openProv,
         ),
       )
       .limit(1);
-    if (know.length > 0) return true;
+    if (openHit.length > 0) return true;
+
+    // Historical / non-canonical formats: positive-only commandId needle (never sole negative proof).
+    if (cmdNeedle) {
+      const acquisLegacy = await db
+        .select({ id: knowledgeAcquis.id })
+        .from(knowledgeAcquis)
+        .where(
+          and(
+            eq(knowledgeAcquis.preparationId, input.preparationId),
+            eq(knowledgeAcquis.ownerPilotId, input.pilotId),
+            sql`${knowledgeAcquis.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
+          ),
+        )
+        .limit(1);
+      if (acquisLegacy.length > 0) return true;
+      const openLegacy = await db
+        .select({ id: knowledgeOpenPoints.id })
+        .from(knowledgeOpenPoints)
+        .where(
+          and(
+            eq(knowledgeOpenPoints.preparationId, input.preparationId),
+            eq(knowledgeOpenPoints.ownerPilotId, input.pilotId),
+            sql`${knowledgeOpenPoints.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
+          ),
+        )
+        .limit(1);
+      if (openLegacy.length > 0) return true;
+    }

+    // Subjects: no command provenance on schema — do not invent attribution.
+    // Negative false here means acquis/open_points probes completed empty with durable
+    // message/generation identity. Subject-only writes remain unattributable; QUALIFIED
+    // REQUEST_EFFECT knowledge paths stay blocked by classifySiblingEffectRisk via effectIntents.
+    // UNAVAILABLE turns cannot produce extractKnowledgeProposals → knowledge write path closed.
     return false;
   } catch {
     return null;
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-s05-knowledge-owner-evidence.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-s05-knowledge-owner-evidence.pg.test.ts
new file mode 100644
index 00000000..2bb50318
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-s05-knowledge-owner-evidence.pg.test.ts
@@ -0,0 +1,556 @@
+/**
+ * S05 knowledge owner evidence — K01–K10 / K12 against real D4 knowledge tables.
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
+import {
+  conversationTurnCommands,
+  knowledgeAcquis,
+  knowledgeOpenPoints,
+  knowledgeSubjects,
+  preparations,
+} from "@/db/schema";
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
+describe("ML4C S05 knowledge owner evidence (PG)", () => {
+  let pilotId: string;
+  let otherPilotId: string;
+
+  beforeAll(async () => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
+    pilotId = sess.pilotId;
+    const other = await createDevTestSession("b", { host: "127.0.0.1:3100" });
+    otherPilotId = other.pilotId;
+  });
+
+  afterAll(() => {
+    /* e2e isolated */
+  });
+
+  it("K01: acquis with sourceId=userMessageId (no commandId) → probe true", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-k01-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A knowledge acquis",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_K01", a.ownerToken);
+
+    await db.insert(knowledgeAcquis).values({
+      id: newId("ka"),
+      preparationId: prep.id,
+      projectId: null,
+      ownerPilotId: pilotId,
+      subjectId: null,
+      kind: "HYPOTHESIS",
+      statement: "Latence cible hypothétique 50ms pour K01.",
+      provenanceJson: JSON.stringify({
+        sourceKind: "message",
+        sourceId: a.userMessageId,
+        generationId: "gen_k01_not_on_turn",
+        notedAt: new Date().toISOString(),
+        epistemic: "hypothesized",
+      }),
+      status: "CURRENT",
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
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBe(true);
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-k01-b-${Date.now()}`,
+    });
+    expect(b.pendingEffectBlocked).toBe(true);
+  });
+
+  it("K02: open point attributed to sibling while resultJson empty → block", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-k02-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A open point",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(
+      a.commandId,
+      "TEST_S05_K02",
+      a.ownerToken,
+      JSON.stringify({
+        semanticQualificationStatus: "UNAVAILABLE",
+        semanticQualification: UNAVAILABLE_Q,
+        documentSave: null,
+        pilotageEffect: null,
+        humanDecisionCreated: false,
+      }),
+    );
+
+    await db.insert(knowledgeOpenPoints).values({
+      id: newId("kop"),
+      preparationId: prep.id,
+      projectId: null,
+      ownerPilotId: pilotId,
+      subjectId: null,
+      statement: "Point ouvert corrélé au sibling K02 sans effet RJ.",
+      status: "OPEN",
+      provenanceJson: JSON.stringify({
+        sourceKind: "message",
+        sourceId: a.userMessageId,
+        notedAt: new Date().toISOString(),
+        epistemic: "limited",
+      }),
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
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBe(true);
+
+    const revBefore =
+      (
+        await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
+      )[0]?.creationRevision ?? 0;
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-k02-b-${Date.now()}`,
+    });
+    expect(b.pendingEffectBlocked).toBe(true);
+    const revAfter =
+      (
+        await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
+      )[0]?.creationRevision ?? 0;
+    expect(revAfter).toBe(revBefore);
+  });
+
+  it("K03: subject without provenance is not attributed; UNAVAILABLE stays non-blocking", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-k03-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A subject only",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_K03", a.ownerToken);
+
+    await db.insert(knowledgeSubjects).values({
+      id: newId("ks"),
+      preparationId: prep.id,
+      projectId: null,
+      ownerPilotId: pilotId,
+      title: `Sujet orphelin K03 ${Date.now()}`,
+      status: "ACTIVE",
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
+        bindingCorrelationKeys: [],
+      },
+    });
+    // No abusive attribution from unprovenanced subject; UNAVAILABLE path closed for knowledge writes.
+    expect(probe).toBe(false);
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-k03-b-${Date.now()}`,
+    });
+    expect(b.pendingEffectBlocked).toBe(false);
+  });
+
+  it("K04: UNAVAILABLE + complete empty knowledge/owner probes → not blocked", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-k04-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A clean unavailable",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_K04", a.ownerToken);
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
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBe(false);
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-k04-b-${Date.now()}`,
+    });
+    expect(b.pendingEffectBlocked).toBe(false);
+  });
+
+  it("K05: missing userMessageId + generationId → null (fail closed)", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const probe = await probeSiblingOwnerEffects({
+      pilotId,
+      preparationId: prep.id,
+      projectId: null,
+      sibling: {
+        commandId: `tcmd_missing_k05_${Date.now()}`,
+        clientTurnKey: `s05-k05-${Date.now()}`,
+        userMessageId: null,
+        operationId: null,
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBeNull();
+  });
+
+  it("K06: probe read error → null, S05 blocks", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-k06-${Date.now()}`;
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "acte A probe error",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_K06", a.ownerToken);
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
+      const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+        clientTurnKey: `s05-k06-b-${Date.now()}`,
+      });
+      expect(b.pendingEffectBlocked).toBe(true);
+    } finally {
+      if (prev === undefined) delete process.env.STUDIO_S05_PROBE_FORCE_ERROR;
+      else process.env.STUDIO_S05_PROBE_FORCE_ERROR = prev;
+    }
+  });
+
+  it("K07: acquis+open point on A; clean B sibling both evaluated — block", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const convId = ctx.conversation!.id;
+    const aKey = `s05-k07-a-${Date.now()}`;
+    const cKey = `s05-k07-c-${Date.now()}`;
+
+    const a = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "A with knowledge",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh A");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_K07A", a.ownerToken);
+    await db.insert(knowledgeAcquis).values({
+      id: newId("ka"),
+      preparationId: prep.id,
+      ownerPilotId: pilotId,
+      kind: "HYPOTHESIS",
+      statement: "Acquis K07 corrélé au sibling dangereux.",
+      provenanceJson: JSON.stringify({
+        sourceKind: "message",
+        sourceId: a.userMessageId,
+      }),
+      status: "CURRENT",
+    });
+    await db.insert(knowledgeOpenPoints).values({
+      id: newId("kop"),
+      preparationId: prep.id,
+      ownerPilotId: pilotId,
+      statement: "Point ouvert K07 corrélé aussi.",
+      status: "RESOLVED",
+      provenanceJson: JSON.stringify({
+        sourceKind: "message",
+        sourceId: a.userMessageId,
+      }),
+    });
+
+    const c = await reserveTurnCommand({
+      conversationId: convId,
+      ownerPilotId: pilotId,
+      clientTurnKey: cKey,
+      content: "C clean unavailable",
+    });
+    if (c.kind !== "fresh") throw new Error("expected fresh C");
+    await stashTurnQualification({
+      commandId: c.commandId,
+      ownerToken: c.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(c.commandId, "TEST_S05_K07C", c.ownerToken);
+
+    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
+      clientTurnKey: `s05-k07-b-${Date.now()}`,
+      unresolvedPendingClientTurnKey: cKey,
+    });
+    expect(b.pendingEffectBlocked).toBe(true);
+  });
+
+  it("K08: same sourceId in another prep/pilot is not attributed", async () => {
+    const prepA = await openOrCreatePreparation(pilotId);
+    const ctxA = await getPreparationContext(pilotId, prepA.id);
+    const aKey = `s05-k08-a-${Date.now()}`;
+    const a = await reserveTurnCommand({
+      conversationId: ctxA.conversation!.id,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "A local",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_K08", a.ownerToken);
+
+    const prepOther = await openOrCreatePreparation(otherPilotId);
+    await db.insert(knowledgeAcquis).values({
+      id: newId("ka"),
+      preparationId: prepOther.id,
+      ownerPilotId: otherPilotId,
+      kind: "HYPOTHESIS",
+      statement: "Acquis étranger réutilisant le même sourceId apparent.",
+      provenanceJson: JSON.stringify({
+        sourceKind: "message",
+        sourceId: a.userMessageId,
+      }),
+      status: "CURRENT",
+    });
+
+    const probe = await probeSiblingOwnerEffects({
+      pilotId,
+      preparationId: prepA.id,
+      projectId: null,
+      sibling: {
+        commandId: a.commandId,
+        clientTurnKey: aKey,
+        userMessageId: a.userMessageId,
+        operationId: a.operationId,
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBe(false);
+  });
+
+  it("K09: generationId structured match without sourceId still finds acquis", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const aKey = `s05-k09-${Date.now()}`;
+    const a = await reserveTurnCommand({
+      conversationId: ctx.conversation!.id,
+      ownerPilotId: pilotId,
+      clientTurnKey: aKey,
+      content: "A gen match",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh");
+    const gen = `gen_k09_${Date.now()}`;
+    await db
+      .update(conversationTurnCommands)
+      .set({ generationId: gen })
+      .where(eq(conversationTurnCommands.id, a.commandId));
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_K09", a.ownerToken);
+
+    await db.insert(knowledgeAcquis).values({
+      id: newId("ka"),
+      preparationId: prep.id,
+      ownerPilotId: pilotId,
+      kind: "HYPOTHESIS",
+      statement: "Acquis K09 matché uniquement par generationId durable.",
+      provenanceJson: JSON.stringify({
+        sourceKind: "message",
+        generationId: gen,
+      }),
+      status: "CURRENT",
+    });
+
+    const probe = await probeSiblingOwnerEffects({
+      pilotId,
+      preparationId: prep.id,
+      projectId: null,
+      sibling: {
+        commandId: a.commandId,
+        clientTurnKey: aKey,
+        userMessageId: null,
+        operationId: a.operationId,
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBe(true);
+  });
+
+  it("K10: Intervencia-shaped ids are not hardcoded", async () => {
+    const prep = await openOrCreatePreparation(pilotId);
+    const ctx = await getPreparationContext(pilotId, prep.id);
+    const aKey = "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70";
+    const a = await reserveTurnCommand({
+      conversationId: ctx.conversation!.id,
+      ownerPilotId: pilotId,
+      clientTurnKey: `${aKey}-${Date.now()}`,
+      content: "Intervencia-shaped",
+    });
+    if (a.kind !== "fresh") throw new Error("expected fresh");
+    await stashTurnQualification({
+      commandId: a.commandId,
+      ownerToken: a.ownerToken,
+      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
+    });
+    await markTurnUnknown(a.commandId, "TEST_S05_K10", a.ownerToken);
+
+    const probe = await probeSiblingOwnerEffects({
+      pilotId,
+      preparationId: prep.id,
+      projectId: null,
+      sibling: {
+        commandId: a.commandId,
+        clientTurnKey: a.clientTurnKey,
+        userMessageId: a.userMessageId,
+        operationId: a.operationId,
+        bindingCorrelationKeys: [],
+      },
+    });
+    expect(probe).toBe(false);
+  });
+});

```

## L. Contenu complet — fichier créé
### FULL FILE — `projects/sfia-studio-next/web/tests/integration/ml4c-s05-knowledge-owner-evidence.pg.test.ts`
```typescript
/**
 * S05 knowledge owner evidence — K01–K10 / K12 against real D4 knowledge tables.
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
import {
  conversationTurnCommands,
  knowledgeAcquis,
  knowledgeOpenPoints,
  knowledgeSubjects,
  preparations,
} from "@/db/schema";
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

describe("ML4C S05 knowledge owner evidence (PG)", () => {
  let pilotId: string;
  let otherPilotId: string;

  beforeAll(async () => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    const sess = await createDevTestSession("a", { host: "127.0.0.1:3100" });
    pilotId = sess.pilotId;
    const other = await createDevTestSession("b", { host: "127.0.0.1:3100" });
    otherPilotId = other.pilotId;
  });

  afterAll(() => {
    /* e2e isolated */
  });

  it("K01: acquis with sourceId=userMessageId (no commandId) → probe true", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k01-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A knowledge acquis",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K01", a.ownerToken);

    await db.insert(knowledgeAcquis).values({
      id: newId("ka"),
      preparationId: prep.id,
      projectId: null,
      ownerPilotId: pilotId,
      subjectId: null,
      kind: "HYPOTHESIS",
      statement: "Latence cible hypothétique 50ms pour K01.",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
        generationId: "gen_k01_not_on_turn",
        notedAt: new Date().toISOString(),
        epistemic: "hypothesized",
      }),
      status: "CURRENT",
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
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(true);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k01-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(true);
  });

  it("K02: open point attributed to sibling while resultJson empty → block", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k02-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A open point",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(
      a.commandId,
      "TEST_S05_K02",
      a.ownerToken,
      JSON.stringify({
        semanticQualificationStatus: "UNAVAILABLE",
        semanticQualification: UNAVAILABLE_Q,
        documentSave: null,
        pilotageEffect: null,
        humanDecisionCreated: false,
      }),
    );

    await db.insert(knowledgeOpenPoints).values({
      id: newId("kop"),
      preparationId: prep.id,
      projectId: null,
      ownerPilotId: pilotId,
      subjectId: null,
      statement: "Point ouvert corrélé au sibling K02 sans effet RJ.",
      status: "OPEN",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
        notedAt: new Date().toISOString(),
        epistemic: "limited",
      }),
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
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(true);

    const revBefore =
      (
        await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
      )[0]?.creationRevision ?? 0;
    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k02-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(true);
    const revAfter =
      (
        await db.select().from(preparations).where(eq(preparations.id, prep.id)).limit(1)
      )[0]?.creationRevision ?? 0;
    expect(revAfter).toBe(revBefore);
  });

  it("K03: subject without provenance is not attributed; UNAVAILABLE stays non-blocking", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k03-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A subject only",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K03", a.ownerToken);

    await db.insert(knowledgeSubjects).values({
      id: newId("ks"),
      preparationId: prep.id,
      projectId: null,
      ownerPilotId: pilotId,
      title: `Sujet orphelin K03 ${Date.now()}`,
      status: "ACTIVE",
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
        bindingCorrelationKeys: [],
      },
    });
    // No abusive attribution from unprovenanced subject; UNAVAILABLE path closed for knowledge writes.
    expect(probe).toBe(false);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k03-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(false);
  });

  it("K04: UNAVAILABLE + complete empty knowledge/owner probes → not blocked", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k04-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A clean unavailable",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K04", a.ownerToken);

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
    expect(probe).toBe(false);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k04-b-${Date.now()}`,
    });
    expect(b.pendingEffectBlocked).toBe(false);
  });

  it("K05: missing userMessageId + generationId → null (fail closed)", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: null,
      sibling: {
        commandId: `tcmd_missing_k05_${Date.now()}`,
        clientTurnKey: `s05-k05-${Date.now()}`,
        userMessageId: null,
        operationId: null,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBeNull();
  });

  it("K06: probe read error → null, S05 blocks", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k06-${Date.now()}`;
    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "acte A probe error",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K06", a.ownerToken);

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
        clientTurnKey: `s05-k06-b-${Date.now()}`,
      });
      expect(b.pendingEffectBlocked).toBe(true);
    } finally {
      if (prev === undefined) delete process.env.STUDIO_S05_PROBE_FORCE_ERROR;
      else process.env.STUDIO_S05_PROBE_FORCE_ERROR = prev;
    }
  });

  it("K07: acquis+open point on A; clean B sibling both evaluated — block", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const convId = ctx.conversation!.id;
    const aKey = `s05-k07-a-${Date.now()}`;
    const cKey = `s05-k07-c-${Date.now()}`;

    const a = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "A with knowledge",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh A");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K07A", a.ownerToken);
    await db.insert(knowledgeAcquis).values({
      id: newId("ka"),
      preparationId: prep.id,
      ownerPilotId: pilotId,
      kind: "HYPOTHESIS",
      statement: "Acquis K07 corrélé au sibling dangereux.",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
      }),
      status: "CURRENT",
    });
    await db.insert(knowledgeOpenPoints).values({
      id: newId("kop"),
      preparationId: prep.id,
      ownerPilotId: pilotId,
      statement: "Point ouvert K07 corrélé aussi.",
      status: "RESOLVED",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
      }),
    });

    const c = await reserveTurnCommand({
      conversationId: convId,
      ownerPilotId: pilotId,
      clientTurnKey: cKey,
      content: "C clean unavailable",
    });
    if (c.kind !== "fresh") throw new Error("expected fresh C");
    await stashTurnQualification({
      commandId: c.commandId,
      ownerToken: c.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(c.commandId, "TEST_S05_K07C", c.ownerToken);

    const b = await postUserMessageAndNora(pilotId, prep.id, "Je veux créer un projet.", {
      clientTurnKey: `s05-k07-b-${Date.now()}`,
      unresolvedPendingClientTurnKey: cKey,
    });
    expect(b.pendingEffectBlocked).toBe(true);
  });

  it("K08: same sourceId in another prep/pilot is not attributed", async () => {
    const prepA = await openOrCreatePreparation(pilotId);
    const ctxA = await getPreparationContext(pilotId, prepA.id);
    const aKey = `s05-k08-a-${Date.now()}`;
    const a = await reserveTurnCommand({
      conversationId: ctxA.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "A local",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K08", a.ownerToken);

    const prepOther = await openOrCreatePreparation(otherPilotId);
    await db.insert(knowledgeAcquis).values({
      id: newId("ka"),
      preparationId: prepOther.id,
      ownerPilotId: otherPilotId,
      kind: "HYPOTHESIS",
      statement: "Acquis étranger réutilisant le même sourceId apparent.",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        sourceId: a.userMessageId,
      }),
      status: "CURRENT",
    });

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prepA.id,
      projectId: null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: aKey,
        userMessageId: a.userMessageId,
        operationId: a.operationId,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(false);
  });

  it("K09: generationId structured match without sourceId still finds acquis", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const aKey = `s05-k09-${Date.now()}`;
    const a = await reserveTurnCommand({
      conversationId: ctx.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: aKey,
      content: "A gen match",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    const gen = `gen_k09_${Date.now()}`;
    await db
      .update(conversationTurnCommands)
      .set({ generationId: gen })
      .where(eq(conversationTurnCommands.id, a.commandId));
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K09", a.ownerToken);

    await db.insert(knowledgeAcquis).values({
      id: newId("ka"),
      preparationId: prep.id,
      ownerPilotId: pilotId,
      kind: "HYPOTHESIS",
      statement: "Acquis K09 matché uniquement par generationId durable.",
      provenanceJson: JSON.stringify({
        sourceKind: "message",
        generationId: gen,
      }),
      status: "CURRENT",
    });

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: aKey,
        userMessageId: null,
        operationId: a.operationId,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(true);
  });

  it("K10: Intervencia-shaped ids are not hardcoded", async () => {
    const prep = await openOrCreatePreparation(pilotId);
    const ctx = await getPreparationContext(pilotId, prep.id);
    const aKey = "turn-6424c417-8bf0-4732-a0fa-1e73444e9f70";
    const a = await reserveTurnCommand({
      conversationId: ctx.conversation!.id,
      ownerPilotId: pilotId,
      clientTurnKey: `${aKey}-${Date.now()}`,
      content: "Intervencia-shaped",
    });
    if (a.kind !== "fresh") throw new Error("expected fresh");
    await stashTurnQualification({
      commandId: a.commandId,
      ownerToken: a.ownerToken,
      qualificationJson: JSON.stringify(UNAVAILABLE_Q),
    });
    await markTurnUnknown(a.commandId, "TEST_S05_K10", a.ownerToken);

    const probe = await probeSiblingOwnerEffects({
      pilotId,
      preparationId: prep.id,
      projectId: null,
      sibling: {
        commandId: a.commandId,
        clientTurnKey: a.clientTurnKey,
        userMessageId: a.userMessageId,
        operationId: a.operationId,
        bindingCorrelationKeys: [],
      },
    });
    expect(probe).toBe(false);
  });
});

```

## M. Tests K01–K12
| ID | Résultat | Preuve |
|---|---|---|
| K01 | PASS PG | acquis sourceId sans commandId → true + S05 block |
| K02 | PASS PG | open point + RJ vide → true + block |
| K03 | PASS PG | sujet sans provenance → false (pas d'attribution) ; UNAVAILABLE non bloquant |
| K04 | PASS PG | UNAVAILABLE clean → PROVEN path non bloquant |
| K05 | PASS PG | msg+gen absents → null |
| K06 | PASS PG | force error → null → block |
| K07 | PASS PG | acquis+OP dangereux + sibling clean → block |
| K08 | PASS PG | autre prep/pilot même sourceId → false |
| K09 | PASS PG | generationId structuré |
| K10 | PASS PG | ids Intervencia non hardcodés |
| K11 | PASS ciblé | prior-proposal + document-command PG ; UNIT confront |
| K12 | PASS | d2-mission-s05 + S05 idempotence PG |

## N. QA-01..QA-20 pertinentes
QA-07/08/17/19/20 rejouées via K* + S05 UNIT. QA-01/02/12 via D4 PG ciblés. QA-06/13/16 P3 non touchés (préservés).

## O. Résultats UNIT / PG / BUILD / BROWSER / LIVE
| Couche | Résultat |
|---|---|
| UNIT | **351 PASS** |
| PG knowledge + S05 + D4 ciblés | **PASS** |
| `npm run test:integration` | **465 PASS / 3 FAIL** — échecs **préexistants** sur `67cfacea` (`ml4-chat-first-d4-provenance` attend FAILED, runtime P3 retourne NOT_EXECUTED). Non introduits par ce correctif knowledge. |
| BUILD | **PASS** |
| BROWSER | **NOT RUN** — DEV :3100 absent ; RECETTE :3200 présente non utilisée |
| LIVE | **NOT RUN** |

## P. Blast radius
Allowlist: `service.ts` + tests + as-built + delivery-history. knowledge/service, schema, D2–D7, P1/P3 documentaires non modifiés.

## Q. Fail-closed / sécurité
Erreur → null. Identité knowledge absente → null. UNKNOWN dangereux (effet knowledge) → true → block. SAME_INTENT inchangé. RECETTE non mutée.

## R. ENV-01 / versioning
DEV PG `sfia_next_dev@:5433` (DATABASE_URL). RECETTE :3200/:5434 isolée RO. NO RELEASE. STABLE NOT AVAILABLE.

## S. Git Review Index
| Path | Role |
|---|---|
| service.ts probe | snip FULL ci-dessous + diff |
| ml4c-s05-knowledge-owner-evidence.pg.test.ts | FULL FILE |
| as-built / delivery-history | diff |

## T. Réserves
1. BROWSER / LIVE NOT RUN
2. 3 tests integration préexistants NOT_EXECUTED vs FAILED (P3) — hors correctif knowledge ; non affaiblis
3. Subjects sans provenance: non attribuables (schéma inchangé)
4. Produit LOCAL ONLY

## U. Verdict
**KNOWLEDGE OWNER EVIDENCE IMPLEMENTED WITH RESERVES — REVIEW REQUIRED**

- IMPLEMENTED: oui
- COVERAGE VERIFIED: oui (UNIT + PG knowledge/S05/D4 ciblés + BUILD)
- DETERMINISTIC BEHAVIOR PROVEN: oui (sur suites lancées et passées)
- LIVE BEHAVIOR PROVEN: non
- USER RECETTE NOT RUN

Interdictions: pas ML4C ACCEPTED / GATE C / STABLE / ADOPTED / S03-01 RECETTE PASS.

## V. Prochain gate Morris
1. Revue ChatGPT handoff L3 distant
2. Décision sur dette tests P3 NOT_EXECUTED (GO distinct éventuel)
3. GO distinct candidat RECETTE figé si revue conforme
4. BROWSER DEV / LIVE optionnels sous prérequis

## Integration snip — probeSiblingOwnerEffects (complet)
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

    // D4 knowledge — use provenance keys actually written by maybeCapitalizeFromExchange:
    // { sourceKind: "message", sourceId: userMessageId, generationId }.
    // commandId is NOT written into knowledge provenance; LIKE(commandId) is not exhaustive.
    // knowledge_subjects has no turn provenance — never attribute by title/createdAt/prep alone.
    const msgId = sibling.userMessageId?.trim() || null;
    let generationId: string | null = null;
    const turnMeta = (
      await db
        .select({ generationId: conversationTurnCommands.generationId })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, sibling.commandId))
        .limit(1)
    )[0];
    generationId = turnMeta?.generationId?.trim() || null;

    if (!msgId && !generationId) {
      // Knowledge negative proof requires durable message/generation identity.
      return null;
    }

    const acquisProv = generationId
      ? sql`(
          ${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${generationId}
          or (
            coalesce(${knowledgeAcquis.provenanceJson}::jsonb->>'generationId', '') = ''
            and ${msgId}::text is not null
            and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceKind' = 'message'
            and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${msgId}
          )
        )`
      : sql`(
          ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceKind' = 'message'
          and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${msgId}
        )`;
    const openProv = generationId
      ? sql`(
          ${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${generationId}
          or (
            coalesce(${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId', '') = ''
            and ${msgId}::text is not null
            and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceKind' = 'message'
            and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${msgId}
          )
        )`
      : sql`(
          ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceKind' = 'message'
          and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${msgId}
        )`;

    const acquisHit = await db
      .select({ id: knowledgeAcquis.id })
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, input.preparationId),
          eq(knowledgeAcquis.ownerPilotId, input.pilotId),
          acquisProv,
        ),
      )
      .limit(1);
    if (acquisHit.length > 0) return true;

    const openHit = await db
      .select({ id: knowledgeOpenPoints.id })
      .from(knowledgeOpenPoints)
      .where(
        and(
          eq(knowledgeOpenPoints.preparationId, input.preparationId),
          eq(knowledgeOpenPoints.ownerPilotId, input.pilotId),
          openProv,
        ),
      )
      .limit(1);
    if (openHit.length > 0) return true;

    // Historical / non-canonical formats: positive-only commandId needle (never sole negative proof).
    if (cmdNeedle) {
      const acquisLegacy = await db
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
      if (acquisLegacy.length > 0) return true;
      const openLegacy = await db
        .select({ id: knowledgeOpenPoints.id })
        .from(knowledgeOpenPoints)
        .where(
          and(
            eq(knowledgeOpenPoints.preparationId, input.preparationId),
            eq(knowledgeOpenPoints.ownerPilotId, input.pilotId),
            sql`${knowledgeOpenPoints.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
          ),
        )
        .limit(1);
      if (openLegacy.length > 0) return true;
    }

    // Subjects: no command provenance on schema — do not invent attribution.
    // Negative false here means acquis/open_points probes completed empty with durable
    // message/generation identity. Subject-only writes remain unattributable; QUALIFIED
    // REQUEST_EFFECT knowledge paths stay blocked by classifySiblingEffectRisk via effectIntents.
    // UNAVAILABLE turns cannot produce extractKnowledgeProposals → knowledge write path closed.
    return false;
  } catch {
    return null;
  }
}


```
