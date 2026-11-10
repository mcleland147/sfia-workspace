# SFIA Studio Next — Review Pack FULL (CRITICAL)
# Cycle 8 — Nora workspace context & mission isolation — DEV-08

**Date:** 2026-11-10 (Europe/Paris)
**Profil:** CRITICAL — FULL mono-cycle
**Publisher:** Cursor (construction DEV)
**Statut:** NO RELEASE — NO PRODUCT PUSH — READY FOR CHATGPT ACCEPTANCE REVIEW

---

## 01. Git Truth Check

| Item | Value |
| --- | --- |
| Product branch | feat/next-nora-intent-continuity-20261110 |
| Product HEAD | e40a1baffc5f7060f3cd5456571b9fe4bd7d1819 |
| Product tree | f0940e2584e26acabf4a4a4efc513a1a4a6553f4 |
| Parent DEV-07 | 833a3e6cef11eb3ea4228733ec5d8af324105a55 / cd848158 |
| Base / fix WT | d7f1507a / tree 3e9e1086 |
| Prior handoff | 7d1aff39 blob c96e03c4 |
| Main distant (entry) | 6667a43858a5421e391b7441246536daad148bd6 |
| Product pushed | NO |
| RECETTE mutated | NO |

---

## 02. Sources et décisions

- Cadrage Morris blob 2322644a §§1–10 (contrat)
- D3 contexte-et-conduite-gouvernee-de-nora.md blob 650d8ea7 — RG-CTX-001..008, PF-03/06/08/15/16
- D2 creation-de-projet-et-continuite-du-sas.md blob b75fb54a
- SEF / roadmap / ENV / versioning / naming (main)
- SFIA v2.6 routing 3315bbae + template f4fdb488
- Review Pack DEV-07 (handoff 7d1aff39)

---

## 03. Intention produit Morris

Une seule Nora D3. Espace courant = sas avant création, projet confirmé après.
Mission courante ≠ autre mission du même fil.
ESPACE COURANT ≠ SOURCE CONSULTÉE.
Lectures interprojets n'apportent pas d'autorité.

---

## 04. Diagnostic Q1–Q5 (avant correction)

| Q | Constat | Statut |
| --- | --- | --- |
| Q1 sas/projet | getPreparationContext / getOwnedProjectContext via preparation_project_links; conversation.projectId après create | PASS — protections existantes |
| Q2 autre prep/projet | recover filtre conversations.projectId + ownerPilotId; D4 tools scoped preparationId | PASS isolation inter-espaces |
| Q3 mauvaise mission même fil | FAIL reproduit: awaiting.length===1 pouvait sélectionner une mission voisine avant create_project_commands | FAIL → corrigé |
| Q4 contexte Nora | continue injecte projectId/preparationId du projet courant; tools D4 = prep courante | PASS (fixture) |
| Q5 lecture interprojet change contexte | Outil Nora consultation Orion→Atlas NON IMPLÉMENTÉ; search D4 borné à la prep courante | N/A — NON IMPLÉMENTÉ |

### Écart reproduit

Après continuation COMPLETED de mission A, mission B seule encore AWAITING.
Ancien code: else if (awaiting.length === 1) clientIntentKey = B → risque de continuer B sur le projet de A.
Après correction: owner act d2:mission:A prioritaire; B jamais sélectionnée.

---

## 05. Protections existantes conservées

- Une Nora D3 / pas d'instance par projet
- authorizeMissionBoundD2Create avant mutate (DEV-07)
- xact lock + ownerToken continuation
- GET/listMessages sans mutation
- Classic create sans mission

---

## 06. Correction (uniquement cause démontrée)

recoverPendingMissionContinuation ordre:

1. incomplete mission-continue:*:projectId (si mismatch owner act → MISSION_OWNER_ACT_MISMATCH)
2. create_project_commands idempotency d2:mission:* pour CE projet
3. sinon NOTHING_PENDING — jamais fallback « seule mission en attente »

Pas de nouvelle table / second registre / STOP structural.

---

## 07–11. Séparation / interprojet / décisions / reprise / concurrence

- Sas→projet: même conversation, projectId attaché après CREATED
- Interprojet lecture Nora: N/A non implémenté; isolation par scope prep
- Décisions/cycles: S08/S09/ACCEPT-01 inchangés
- Reprise S06/S07 owner-act bound; concurrence G3 conservée

---

## 12–16. Tests

| Suite | Résultat | Lane |
| --- | --- | --- |
| unit intent-conduction | 8 PASS | — |
| PG global | 21 PASS (incl. S06/S07/S05/S06b) | DEV :5433 |
| ACCEPT-01 | 8 PASS | DEV |
| Playwright Atlas | 2 PASS | E2E :3101 |
| tsc / next build | PASS | — |

SHA/tree preuves: e40a1baffc5f7060f3cd5456571b9fe4bd7d1819 / f0940e2584e26acabf4a4a4efc513a1a4a6553f4

---

## 17–19. ENV / Fake-Real / Versioning

DEV :5433; E2E :3101/sfia_next_e2e; RECETTE :5434 untouched.
Nora FAKE; Git SCRIPTED; Browser FIXTURE.
EVOL / MINOR CANDIDATE; NO RELEASE; delivery-history DEV-08.

---

## 20. Matrice exigence → preuve

| Exigence | Protection | Gap | Correction | Test | Résultat | Preuve | Réserve |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Espace courant réel | getOwnedProjectContext | non | — | S02/S03/E2E | PASS | PG+browser | — |
| Bonne mission reprise | owner act D2 | OUI (awaiting fallback) | recover reorder | S06/S07/S06b | PASS | PG | — |
| Isolation 2 projets | conv.projectId | non | preuves | S05 | PASS | PG | — |
| 2 missions même fil | owner act | OUI | recover | S06 | PASS | PG | — |
| Interprojet lecture | prep-scoped tools | N/A non impl. | aucune invention | S09/S10 | N/A | code review | capacité future |
| Décision/cycle non transférés | owners D5/D6 | non | — | S08/S09 | PASS | PG | UI multi N/A |
| READ≠COMMAND | listMessages | non | — | S13 | PASS | PG | — |
| Continuity globale | macro-lot | — | préservée | S03..ACCEPT-01 | PASS | PG+E2E | LIVE/REAL no |

---

## 21–23. Gaps / dette / rollback

Réserves: consultation interprojet Nora non implémentée (N/A); P* crash multi partiels; LIVE/REAL non exécutés.
Rollback: git reset --hard 833a3e6c sur Product local.
Exit: handoff L3 + STOP.

---

## 24. Fichiers créés

Aucun fichier Product nouveau (correction dans modules existants uniquement).

---

## 25. Fichiers modifiés — contenu / diff utile

### recoverPendingMissionContinuation (extrait post-correction)

```ts
export async function recoverPendingMissionContinuation(input: {
  pilotId: string;
  projectId: string;
}): Promise<{
  attempted: boolean;
  recovered: boolean;
  reason?: string;
  missionProjection: MissionProjection | null;
  documentSave: DocumentSaveSummary | null;
  assistantMessageId: string | null;
  replayed?: boolean;
}> {
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.projectId, input.projectId),
          eq(conversations.ownerPilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!conv || !conv.preparationId) {
    return {
      attempted: false,
      recovered: false,
      reason: "NO_CONVERSATION",
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
    };
  }

  const latest = await loadLatestMissionsByIntentKey(conv.id);

  // Incomplete continuation turns for THIS project (crash mid-continue).
  const contPrefix = `mission-continue:`;
  const contSuffix = `:${input.projectId}`;
  const turns = await db
    .select()
    .from(conversationTurnCommands)
    .where(eq(conversationTurnCommands.conversationId, conv.id));
  const incompleteKeys = [
    ...new Set(
      turns
        .filter(
          (t) =>
            (t.status === "RUNNING" || t.status === "ACCEPTED" || t.status === "UNKNOWN") &&
            t.clientTurnKey.startsWith(contPrefix) &&
            t.clientTurnKey.endsWith(contSuffix),
        )
        .map((t) =>
          t.clientTurnKey.slice(contPrefix.length, t.clientTurnKey.length - contSuffix.length),
        )
        .filter((k) => k.length > 0),
    ),
  ];

  if (incompleteKeys.length > 1) {
    return {
      attempted: true,
      recovered: false,
      reason: "AMBIGUOUS_PENDING",
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
    };
  }

  // Owner-act binding: create_project_commands.idempotencyKey = d2:mission:<clientIntentKey>
  // for THIS project — decisive over any other awaiting mission in the same thread (S06/S07).
  const missionCmds = await db
    .select()
    .from(createProjectCommands)
    .where(
      and(
        eq(createProjectCommands.pilotId, input.pilotId),
        eq(createProjectCommands.projectId, input.projectId),
        eq(createProjectCommands.preparationId, conv.preparationId),
      ),
    )
    .orderBy(desc(createProjectCommands.createdAt))
    .limit(8);
  const missionBoundKeys = [
    ...new Set(
      missionCmds
        .map((r) => r.idempotencyKey ?? "")
        .filter((k) => k.startsWith("d2:mission:"))
        .map((k) => k.slice("d2:mission:".length)),
    ),
  ];

  let clientIntentKey: string | null = null;
  if (incompleteKeys.length === 1) {
    const incompleteKey = incompleteKeys[0]!;
    if (missionBoundKeys.length > 0 && !missionBoundKeys.includes(incompleteKey)) {
      return {
        attempted: true,
        recovered: false,
        reason: "MISSION_OWNER_ACT_MISMATCH",
        missionProjection: null,
        documentSave: null,
        assistantMessageId: null,
      };
    }
    clientIntentKey = incompleteKey;
  } else if (missionBoundKeys.length === 1) {
    clientIntentKey = missionBoundKeys[0]!;
  } else if (missionBoundKeys.length > 1) {
    return {
      attempted: true,
      recovered: false,
      reason: "AMBIGUOUS_OWNER_ACT",
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
    };
  } else {
    // No mission-bound D2 command for this project → do NOT pick a neighboring awaiting mission.
    return {
      attempted: false,
      recovered: false,
      reason: "NOTHING_PENDING",
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
    };
  }

  const boundMission = latest.get(clientIntentKey);
  if (boundMission?.status === "COMPLETED") {
    const replay = await loadContinuationReplay(conv.id, clientIntentKey, input.projectId);
    if (replay) {
      return {
        attempted: true,
        recovered: true,
        reason: "ALREADY_CONTINUED",
        missionProjection: replay.missionProjection,
        documentSave: replay.documentSave,
        assistantMessageId: replay.assistantMessageId,
        replayed: true,
      };
    }
    return {
      attempted: false,
      recovered: false,
      reason: "NOTHING_PENDING",
      missionProjection: boundMission,
      documentSave: null,
      assistantMessageId: null,
    };
  }

  const cont = await continueAfterProjectCreated({
    pilotId: input.pilotId,
    preparationId: conv.preparationId,
    projectId: input.projectId,
    clientIntentKey,
  });

  return {
    attempted: true,
    recovered: Boolean(cont.continued),
    reason: cont.reason,
    missionProjection: cont.missionProjection,
    documentSave: cont.documentSave,
    assistantMessageId: cont.assistantMessageId,
    replayed: cont.replayed,
  };
}
```

### Diff 833a3e6c..HEAD

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 4e40878a..63420dff 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,21 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-08
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-10 (Europe/Paris) |
+| Macro-lot | R5 / Contexte de travail + isolation mission (RG-CTX-001) |
+| Type | EVOL — même macro-lot (MINOR CANDIDATE, NO RELEASE) |
+| Branch | `feat/next-nora-intent-continuity-20261110` (local — not pushed) |
+| Parent | DEV-07 @ `833a3e6c` |
+| Lane | DEV :5433; E2E :3101 / `sfia_next_e2e`; RECETTE untouched |
+| Changes | `recoverPendingMissionContinuation` binds to `create_project_commands` d2:mission owner act for THIS project — never lone neighboring awaiting; S06/S07/S05 isolation proofs; interproject Nora read = N/A non-implemented (D4 tools prep-scoped) |
+| Schema | unchanged |
+| Tests | PG global 21; ACCEPT-01 8; Playwright Atlas 2; tsc/build |
+| Status | LOCAL FINALISATION — READY FOR CHATGPT ACCEPTANCE REVIEW — NO PRODUCT PUSH |
+
 ## delivery_id: DELIV-2026-11-10-NORA-INTENT-CONTINUITY-DEV-07

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 19f26d1b..9c61bc4e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -1257,10 +1257,15 @@ async function loadContinuationReplay(
 }

 /**
- * G2 — nominal recovery after D2 confirmed + interrupted continuation.
+ * G2/S06/S07 — nominal recovery after D2 confirmed + interrupted continuation.
  * COMMAND path only (never listMessages/GET). Idempotent; reuses continueAfterProjectCreated
  * fencing. Trigger surfaces: create-project ALREADY_CREATED retry, project resume POST,
  * next chat turn when project already linked.
+ *
+ * Selection order (RG-CTX-001 / mission isolation):
+ * 1) incomplete mission-continue turn for THIS projectId
+ * 2) create_project_commands.idempotencyKey d2:mission:* for THIS project
+ * Never: lone awaiting mission / newest message / project-name similarity.
  */
 export async function recoverPendingMissionContinuation(input: {
   pilotId: string;
@@ -1298,75 +1303,120 @@ export async function recoverPendingMissionContinuation(input: {
   }

   const latest = await loadLatestMissionsByIntentKey(conv.id);
-  const awaiting = [...latest.values()].filter(
-    (m) =>
-      m.status === "AWAITING_PILOT_ACT" &&
-      (!m.preparationId || m.preparationId === conv.preparationId),
-  );

-  // Incomplete continuation turns for this project (crash mid-continue).
+  // Incomplete continuation turns for THIS project (crash mid-continue).
   const contPrefix = `mission-continue:`;
   const contSuffix = `:${input.projectId}`;
   const turns = await db
     .select()
     .from(conversationTurnCommands)
     .where(eq(conversationTurnCommands.conversationId, conv.id));
-  const incompleteKeys = turns
-    .filter(
-      (t) =>
-        (t.status === "RUNNING" || t.status === "ACCEPTED" || t.status === "UNKNOWN") &&
-        t.clientTurnKey.startsWith(contPrefix) &&
-        t.clientTurnKey.endsWith(contSuffix),
+  const incompleteKeys = [
+    ...new Set(
+      turns
+        .filter(
+          (t) =>
+            (t.status === "RUNNING" || t.status === "ACCEPTED" || t.status === "UNKNOWN") &&
+            t.clientTurnKey.startsWith(contPrefix) &&
+            t.clientTurnKey.endsWith(contSuffix),
+        )
+        .map((t) =>
+          t.clientTurnKey.slice(contPrefix.length, t.clientTurnKey.length - contSuffix.length),
+        )
+        .filter((k) => k.length > 0),
+    ),
+  ];
+
+  if (incompleteKeys.length > 1) {
+    return {
+      attempted: true,
+      recovered: false,
+      reason: "AMBIGUOUS_PENDING",
+      missionProjection: null,
+      documentSave: null,
+      assistantMessageId: null,
+    };
+  }
+
+  // Owner-act binding: create_project_commands.idempotencyKey = d2:mission:<clientIntentKey>
+  // for THIS project — decisive over any other awaiting mission in the same thread (S06/S07).
+  const missionCmds = await db
+    .select()
+    .from(createProjectCommands)
+    .where(
+      and(
+        eq(createProjectCommands.pilotId, input.pilotId),
+        eq(createProjectCommands.projectId, input.projectId),
+        eq(createProjectCommands.preparationId, conv.preparationId),
+      ),
     )
-    .map((t) => t.clientTurnKey.slice(contPrefix.length, t.clientTurnKey.length - contSuffix.length))
-    .filter((k) => k.length > 0);
+    .orderBy(desc(createProjectCommands.createdAt))
+    .limit(8);
+  const missionBoundKeys = [
+    ...new Set(
+      missionCmds
+        .map((r) => r.idempotencyKey ?? "")
+        .filter((k) => k.startsWith("d2:mission:"))
+        .map((k) => k.slice("d2:mission:".length)),
+    ),
+  ];

   let clientIntentKey: string | null = null;
   if (incompleteKeys.length === 1) {
-    clientIntentKey = incompleteKeys[0]!;
-  } else if (awaiting.length === 1) {
-    clientIntentKey = awaiting[0]!.clientIntentKey;
-  } else if (incompleteKeys.length > 1 || awaiting.length > 1) {
+    const incompleteKey = incompleteKeys[0]!;
+    if (missionBoundKeys.length > 0 && !missionBoundKeys.includes(incompleteKey)) {
+      return {
+        attempted: true,
+        recovered: false,
+        reason: "MISSION_OWNER_ACT_MISMATCH",
+        missionProjection: null,
+        documentSave: null,
+        assistantMessageId: null,
+      };
+    }
+    clientIntentKey = incompleteKey;
+  } else if (missionBoundKeys.length === 1) {
+    clientIntentKey = missionBoundKeys[0]!;
+  } else if (missionBoundKeys.length > 1) {
     return {
       attempted: true,
       recovered: false,
-      reason: "AMBIGUOUS_PENDING",
+      reason: "AMBIGUOUS_OWNER_ACT",
       missionProjection: null,
       documentSave: null,
       assistantMessageId: null,
     };
   } else {
-    // Also accept mission-bound create_project_commands already committed for this project.
-    const missionCmds = await db
-      .select()
-      .from(createProjectCommands)
-      .where(
-        and(
-          eq(createProjectCommands.pilotId, input.pilotId),
-          eq(createProjectCommands.projectId, input.projectId),
-          eq(createProjectCommands.preparationId, conv.preparationId),
-        ),
-      )
-      .orderBy(desc(createProjectCommands.createdAt))
-      .limit(8);
-    const missionCmd = missionCmds.find((r) =>
-      (r.idempotencyKey ?? "").startsWith("d2:mission:"),
-    );
-    if (missionCmd?.idempotencyKey?.startsWith("d2:mission:")) {
-      const key = missionCmd.idempotencyKey.slice("d2:mission:".length);
-      const mission = latest.get(key);
-      if (!mission || mission.status !== "COMPLETED") {
-        clientIntentKey = key;
-      }
-    }
+    // No mission-bound D2 command for this project → do NOT pick a neighboring awaiting mission.
+    return {
+      attempted: false,
+      recovered: false,
+      reason: "NOTHING_PENDING",
+      missionProjection: null,
+      documentSave: null,
+      assistantMessageId: null,
+    };
   }

-  if (!clientIntentKey) {
+  const boundMission = latest.get(clientIntentKey);
+  if (boundMission?.status === "COMPLETED") {
+    const replay = await loadContinuationReplay(conv.id, clientIntentKey, input.projectId);
+    if (replay) {
+      return {
+        attempted: true,
+        recovered: true,
+        reason: "ALREADY_CONTINUED",
+        missionProjection: replay.missionProjection,
+        documentSave: replay.documentSave,
+        assistantMessageId: replay.assistantMessageId,
+        replayed: true,
+      };
+    }
     return {
       attempted: false,
       recovered: false,
       reason: "NOTHING_PENDING",
-      missionProjection: null,
+      missionProjection: boundMission,
       documentSave: null,
       assistantMessageId: null,
     };
diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index e55c9f8e..34206692 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -731,6 +731,219 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     expect(created.status).toBe("CREATED");
   });

+  it("S06/S07: two awaiting missions — recover binds D2 owner act, not neighboring awaiting", async () => {
+    const { pilotId, preparationId } = await seedPrepOnly("scen-s06-two-missions");
+    const keyA = newId("ctk");
+    const keyB = newId("ctk");
+    await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Mission A puis un document Alpha.",
+      { clientTurnKey: keyA },
+    );
+    await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Mission B puis un document Beta.",
+      { clientTurnKey: keyB },
+    );
+
+    // Neighbor B remains awaiting; only A is authorized and creates the project.
+    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
+    const authA = await authorizeMissionBoundD2Create({
+      pilotId,
+      preparationId,
+      clientIntentKey: keyA,
+      projectName: "Mission A",
+    });
+    expect(authA.outcome).toBe("AUTHORIZED");
+    if (authA.outcome !== "AUTHORIZED") throw new Error("expected AUTHORIZED");
+
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: prep.creationRevision,
+      projectName: "Mission A",
+      previewSummary: "s",
+      idempotencyKey: authA.idempotencyKey,
+    });
+    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");
+
+    // After create, both may still look awaiting in latest map until continuation commits.
+    // Recovery must prefer d2:mission:keyA for THIS project — never keyB.
+    const recovered = await recoverPendingMissionContinuation({
+      pilotId,
+      projectId: created.projectId,
+    });
+    expect(recovered.recovered).toBe(true);
+    expect(recovered.missionProjection?.clientIntentKey).toBe(keyA);
+    expect(recovered.missionProjection?.clientIntentKey).not.toBe(keyB);
+    expect(recovered.documentSave?.status).toBe("AVAILABLE");
+    const docs = await listDocuments(pilotId, preparationId);
+    const docsA = docs.filter((d) =>
+      (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${keyA}`),
+    );
+    const docsB = docs.filter((d) =>
+      (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${keyB}`),
+    );
+    expect(docsA).toHaveLength(1);
+    expect(docsB).toHaveLength(0);
+  });
+
+  it("S06b: after mission A completed, lone awaiting B is NOT continued for project A", async () => {
+    const { pilotId, preparationId } = await seedPrepOnly("scen-s06b-neighbor");
+    const keyA = newId("ctk");
+    const keyB = newId("ctk");
+    await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Done A puis un document DoneA.",
+      { clientTurnKey: keyA },
+    );
+    await postUserMessageAndNora(
+      pilotId,
+      preparationId,
+      "Crée un projet nommé Still B puis un document StillB.",
+      { clientTurnKey: keyB },
+    );
+    const prep = (await db.select().from(preparations).where(eq(preparations.id, preparationId)))[0]!;
+    const authA = await authorizeMissionBoundD2Create({
+      pilotId,
+      preparationId,
+      clientIntentKey: keyA,
+      projectName: "Done A",
+    });
+    if (authA.outcome !== "AUTHORIZED") throw new Error("expected AUTHORIZED");
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: prep.creationRevision,
+      projectName: "Done A",
+      previewSummary: "s",
+      idempotencyKey: authA.idempotencyKey,
+    });
+    if (created.status !== "CREATED" || !created.projectId) throw new Error("expected CREATED");
+    const contA = await continueAfterProjectCreated({
+      pilotId,
+      preparationId,
+      projectId: created.projectId,
+      projectName: "Done A",
+      clientIntentKey: keyA,
+    });
+    expect(contA.continued).toBe(true);
+    expect(contA.missionProjection?.status).toBe("COMPLETED");
+
+    // B is now the only awaiting in the thread — must NOT be resumed against project A.
+    // Replay of completed A (ALREADY_CONTINUED) is allowed; binding B is not.
+    const recovered = await recoverPendingMissionContinuation({
+      pilotId,
+      projectId: created.projectId,
+    });
+    expect(
+      recovered.reason === "NOTHING_PENDING" ||
+        recovered.reason === "ALREADY_CONTINUED" ||
+        recovered.replayed === true,
+    ).toBe(true);
+    if (recovered.missionProjection) {
+      expect(recovered.missionProjection.clientIntentKey).toBe(keyA);
+      expect(recovered.missionProjection.clientIntentKey).not.toBe(keyB);
+    }
+    const docs = await listDocuments(pilotId, preparationId);
+    expect(
+      docs.filter((d) =>
+        (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${keyB}`),
+      ),
+    ).toHaveLength(0);
+    expect(
+      docs.filter((d) =>
+        (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${keyA}`),
+      ),
+    ).toHaveLength(1);
+  });
+
+  it("S05: two projects same Pilot — recover on Atlas never uses Orion conversation/mission", async () => {
+    const atlas = await seedPrepOnly("scen-s05-atlas");
+    const orion = await seedPrepOnly("scen-s05-orion");
+    // Same pilot: re-seed Orion under Atlas pilot
+    const orionPrep = await openOrCreatePreparation(atlas.pilotId);
+    await updatePreview(atlas.pilotId, orionPrep.id, "Orion Prep", "s");
+
+    const keyAtlas = newId("ctk");
+    const keyOrion = newId("ctk");
+    await postUserMessageAndNora(
+      atlas.pilotId,
+      atlas.preparationId,
+      "Crée un projet nommé Atlas Iso puis un document AtlasDoc.",
+      { clientTurnKey: keyAtlas },
+    );
+    await postUserMessageAndNora(
+      atlas.pilotId,
+      orionPrep.id,
+      "Crée un projet nommé Orion Iso puis un document OrionDoc.",
+      { clientTurnKey: keyOrion },
+    );
+
+    const prepA = (await db.select().from(preparations).where(eq(preparations.id, atlas.preparationId)))[0]!;
+    const prepO = (await db.select().from(preparations).where(eq(preparations.id, orionPrep.id)))[0]!;
+    const authA = await authorizeMissionBoundD2Create({
+      pilotId: atlas.pilotId,
+      preparationId: atlas.preparationId,
+      clientIntentKey: keyAtlas,
+      projectName: "Atlas Iso",
+    });
+    const authO = await authorizeMissionBoundD2Create({
+      pilotId: atlas.pilotId,
+      preparationId: orionPrep.id,
+      clientIntentKey: keyOrion,
+      projectName: "Orion Iso",
+    });
+    if (authA.outcome !== "AUTHORIZED" || authO.outcome !== "AUTHORIZED") {
+      throw new Error("expected both AUTHORIZED");
+    }
+    const createdA = await createProjectCommand({
+      pilotId: atlas.pilotId,
+      preparationId: atlas.preparationId,
+      expectedCreationRevision: prepA.creationRevision,
+      projectName: "Atlas Iso",
+      previewSummary: "s",
+      idempotencyKey: authA.idempotencyKey,
+    });
+    const createdO = await createProjectCommand({
+      pilotId: atlas.pilotId,
+      preparationId: orionPrep.id,
+      expectedCreationRevision: prepO.creationRevision,
+      projectName: "Orion Iso",
+      previewSummary: "s",
+      idempotencyKey: authO.idempotencyKey,
+    });
+    if (createdA.status !== "CREATED" || !createdA.projectId) throw new Error("atlas create");
+    if (createdO.status !== "CREATED" || !createdO.projectId) throw new Error("orion create");
+
+    const recA = await recoverPendingMissionContinuation({
+      pilotId: atlas.pilotId,
+      projectId: createdA.projectId,
+    });
+    expect(recA.recovered).toBe(true);
+    expect(recA.missionProjection?.clientIntentKey).toBe(keyAtlas);
+
+    const docsA = await listDocuments(atlas.pilotId, atlas.preparationId);
+    const docsO = await listDocuments(atlas.pilotId, orionPrep.id);
+    expect(
+      docsA.some((d) =>
+        (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${keyAtlas}`),
+      ),
+    ).toBe(true);
+    expect(
+      docsA.some((d) =>
+        (d.document.creationCorrelationKey ?? "").includes(`doc:mission-continue:${keyOrion}`),
+      ),
+    ).toBe(false);
+    expect(docsO.length).toBe(0);
+
+    // Silence unused seed helper pilot
+    expect(orion.pilotId).toBeTruthy();
+  });
+
   it("G2: crash after D2 — recoverPendingMissionContinuation without Pilot reformulation", async () => {
     const { pilotId, preparationId } = await seedPrepOnly("scen-g2-recover");
     const clientTurnKey = newId("ctk");

```

---

## 26. Verdict unique

**NORA/STUDIO WORKSPACE AND MISSION ISOLATION — SAS/PROJECT CONTEXT VERIFIED — MISSION RECOVERY BOUND TO CORRECT OWNER ACT — CROSS-PROJECT READ AUTHORITY ISOLATED — GLOBAL INTENT CONTINUITY PRESERVED AT REPORTED DEV EVIDENCE LEVEL — READY FOR CHATGPT ACCEPTANCE REVIEW — NO PRODUCT PROMOTION.**

Trois réponses:
1. Oui — sas/projet via owners D2 + conversation liée (DEV evidence).
2. Oui — reprise liée à d2:mission: de CE projet, pas à une awaiting voisine.
3. Oui — isolation inter-espaces prouvée; lecture interprojet Nora = N/A non implémentée (pas d'autorité croisée via outil).

---

## 27. Git Review Index

| Ref | Value |
| --- | --- |
| Product HEAD | e40a1baffc5f7060f3cd5456571b9fe4bd7d1819 |
| Product tree | f0940e2584e26acabf4a4a4efc513a1a4a6553f4 |
| Parent | 833a3e6c |
| Base | d7f1507a / 3e9e1086 |
| Prior handoff | 7d1aff39 / c96e03c4 |
| Cadrage | 69c27832 / 2322644a |
| D3 CTX | 650d8ea7 |
| Supersedes broken publish | 5eed00bc (incomplete pack — republished) |

---

## 28. Contrôle §7.2.1 / §7.6

FULL mono-cycle OUI; diffs OUI; Fake/Real nommé OUI; pas de claim LIVE/REAL/RECETTE/STABLE/RELEASED; handoff L3; Product push NON; STOP après handoff OUI.
