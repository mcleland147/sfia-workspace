# SFIA Studio Next — Review Pack FULL
# ML4C INC S02-01 — ML4C-A-006 / ML4C-A-007
# Intent authority + D3 restitution

**Date/heure :** 2026-11-12T07:06 Europe/Paris
**Cycle :** Delivery projet — RUN INC (correctif fonctionnel intégré)
**Macro-lot :** ML4C — convergence fonctionnelle intégrée (correctif local, pas un nouveau macro-lot produit)
**GO Morris :** 12 novembre 2026 — correction A-006/A-007 uniquement
**Verdict cycle :** FIX IMPLEMENTED WITH RESERVES — REVIEW REQUIRED
**Statut produit :** NO RELEASE — PATCH sans nouvelle capacité — package `0.0.0-dev` inchangé
**STABLE :** NOT AVAILABLE

---

## 1. Git Truth (obligatoire)

| Item | Valeur vérifiée |
| --- | --- |
| Remote | `origin` → `https://github.com/mcleland147/sfia-workspace.git` |
| `origin/main` | `6d237452680640324eeadbb18f4601fd7de99850` |
| Branche candidate (base) | `build/next-ml4c-functional-convergence` @ `2416e2ee25662821b015407346c64ec204f67488` |
| PR #676 | OPEN, non mergée (contexte porté, non modifié ici) |
| Branche locale de correction | `fix/next-ml4c-intent-authority-restitution-20261112` |
| HEAD local au démarrage / base | `2416e2ee` (identique candidat) |
| Modifications projet | **non commités** sur la branche de correction (worktree dirty attendu) |
| Push projet / PR / merge | **AUCUN** |
| Journal distant ML4C | **non modifié** |
| Branche RECETTE figée | **non modifiée** ; runtime RECETTE non muté |
| ENV-01 politique (main blob) | `environnements-recette-et-promotions.md` — 26273 octets ; SHA-256 `ecbbc14a0c0530f5d74e0434fcf1821ed57e85af0caed0966483bd77d1e86b71` |
| Lane mutative | DEV `:5433` → Vitest réécrit vers `sfia_next_e2e` ; RECETTE `:5434` / CampusFlow/Intervencia **non touchés** |

Shell au démarrage : `DATABASE_URL` opérateur pointait parfois RECETTE (`:5434`) — **explicitement unset** avant tout test mutatif. `NODE_ENV=production` dans le shell cassait Playwright webServer — unset pour E2E.

---

## 2. Analyse causale (avant → après)

### Avant (candidat `2416e2ee`, observation S02-01 Intervencia)

1. **A-006 — qualification :** `qualifyStudioIntent` faisait `wantsProjectCreate = PROJECT_CREATE_RE.test(userText)` → tout « créer … projet » lexical, y compris sous négation / non-autorisation / how-to / possibilité.
2. **A-006 — effet sas :** `wantsProjectCreate` ⇒ `updatePreview` (bump `creationRevision`) + mission D2 `AWAITING_PILOT_ACT` + éventuelle étape D4 `PENDING` si follow-on/doc.
3. **A-007 — restitution :** `appendMissionAck` concaténait `formatMissionAck` (status / clientIntentKey / step / capability / attemptId) dans le **texte conversationnel** Nora.

Cas Intervencia exact : *« Pour l'instant, je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques. »* → FAIL S02-01.

### Après (correctif local)

1. `hasPositiveProjectCreateIntent` : exige un match non nié (`isVerbNegated`), non précédé de « ne … autorise pas à », et hors méta how-to / « possibilité de créer ».
2. Sans intention positive : **pas** d'`updatePreview`, **pas** de mission D2/D4 artificielle ; conversation durable OK.
3. `appendMissionAck` = no-op sur le corps utilisateur ; `formatMissionAck` conservé pour outillage ; état dans `missionProjection` / `awaitingMission` / surface sas `prep-mission-awaiting-pilot-act` (intelligible, sans dump technique).
4. Sanitize léger Markdown des noms proposés ; extraction « créer le projet Atlas ».

**Non-objectifs respectés :** pas de nouveau moteur ; parcours positifs create / multi-cap / idempotence / reprise ACK préservés (preuves PG + E2E) ; pas de migration silencieuse des messages historiques.

---

## 3. Blast radius

| Domaine | Impact |
| --- | --- |
| D2 | Qualification create plus stricte ; preview/mission seulement si intention positive ; acte Pilote toujours requis |
| D3 | Plus d'injection diagnostics dans le fil ; projection structurée inchangée côté API |
| D4 | Plus d'étape PENDING artificielle depuis cadrage négatif ; create document explicite inchangé |
| API | Contrat JSON `missionProjection` inchangé ; corps assistant allégé |
| DB / migrations | **aucune** |
| UX sas | Surface minimale `data-testid=prep-mission-awaiting-pilot-act` ; pas de refonte ; ML4C-A-003 hors scope |
| Autorité | Frontière D2/D3/D4 renforcée (négation ≠ autorisation) |
| RECETTE/STABLE | **inchangés** |

---

## 4. Fichiers modifiés / créés

### Modifiés
- `projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts`
- `projects/sfia-studio-next/web/src/domains/conversation/service.ts`
- `projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx`
- `projects/sfia-studio-next/web/tests/unit/intent-conduction.test.ts`
- `projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts`
- `projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts`
- `projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts`
- `projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts`
- `projects/sfia-studio-next/construction/delivery-history.md`
- `.tmp-sfia-review/chatgpt-review.md` (ce pack)

### Créés
- `projects/sfia-studio-next/construction/convergence-fonctionnelle/correctif-ml4c-a006-a007-intent-authority-restitution.md` (intégral ci-dessous)

---

## 5. Contenu intégral — fichier créé

# Correctif ML4C-A-006 / ML4C-A-007 — intention, autorité D2, restitution D3

**Date :** 2026-11-12
**Base candidat :** `2416e2ee` (`build/next-ml4c-functional-convergence`)
**Branche locale :** `fix/next-ml4c-intent-authority-restitution-20261112`
**Statut :** NO RELEASE — correctif local ; pas de push projet / PR / merge / RECETTE
**Anomalies :** ML4C-A-006 (qualification / autorité), ML4C-A-007 (restitution interne)

## Cause

1. `qualifyStudioIntent` traitait tout match lexical `PROJECT_CREATE_RE` (« créer … projet ») comme demande d’effet D2, y compris négation, cadrage et méta-explication.
2. `wantsProjectCreate` déclenchait `updatePreview` + mission `AWAITING_PILOT_ACT` (+ éventuelle étape D4 dépendante).
3. `appendMissionAck` injectait `formatMissionAck` (status / clientIntentKey / step / capability) dans le texte conversationnel Nora.

## Correction (sans nouveau moteur)

- Qualification positive D2 : `hasPositiveProjectCreateIntent` — ignore matches niés (`isVerbNegated`), refus d’autorisation local (« ne … autorise pas à »), mentions exploratoires / how-to.
- Pas de constitution d’aperçu ni de mission D2/D4 sur cadrage conversationnel (cas Intervencia).
- `appendMissionAck` ne modifie plus le corps utilisateur ; l’état reste dans `missionProjection` / surfaces structurées. `formatMissionAck` est conservé pour outillage / observabilité.
- Assainissement léger des marqueurs Markdown dans les noms proposés.

## Non-objectifs

- Pas de migration silencieuse des messages / projections déjà persistés.
- Pas de refonte UX (réserve ML4C-A-003 → ML4D).
- Parcours positifs create / multi-cap / idempotence / reprise ACK préservés.

---

## 6. Diff exploitable (sources + tests)

```diff
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index e96346f4..fdcdb4e0 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -708,6 +708,16 @@ export default function PreparationPage() {
             onDraftChange={setDraft}
             onSend={() => void sendMessage()}
           />
+          {awaitingClientIntentKey ? (
+            <p
+              className="text-xs muted"
+              data-testid="prep-mission-awaiting-pilot-act"
+              data-mission-status="AWAITING_PILOT_ACT"
+            >
+              Acte Pilote requis pour créer le projet — la mission structurée reste en attente
+              (sans diagnostic technique dans le fil Nora).
+            </p>
+          ) : null}
           <PreparationProposal
             projectId={projectId}
             previewName={previewName}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
index 98cb2dbe..eab73503 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/intent-conduction.ts
@@ -23,6 +23,7 @@ import {
   documentSaveToEffectSummary,
   extractContractualDocumentProposal,
   hasCompetingTransactionalClaim,
+  isVerbNegated,
   qualifyDocumentAct,
   type DocumentEffectSummary,
 } from "./document-act";
@@ -31,7 +32,6 @@ import { TURN_RUNNING_STALE_MS, turnClock } from "./turn-command";
 import {
   appendMissionAck,
   composeCanonicalMissionRestitution,
-  formatMissionAck,
   qualifyPublicationMission,
   type MissionOwnerActBinding,
   type MissionProjection,
@@ -93,6 +93,77 @@ export type QualifiedIntent = {
 const PROJECT_CREATE_RE =
   /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\b/i;

+/** Strip accidental Markdown markers from a proposed project label. */
+export function sanitizeProposedProjectName(raw: string): string {
+  return raw
+    .replace(/[*_`#~\[\]()]+/g, " ")
+    .replace(/[«»"']/g, "")
+    .replace(/\s+/g, " ")
+    .trim();
+}
+
+/**
+ * True when every project-create mention in the utterance is exploratory or meta
+ * (how-to / possibilité) — a bare lexical hit on « créer … projet » is not enough.
+ * Negation and « ne … autorise pas » are handled per-match in hasPositiveProjectCreateIntent.
+ */
+export function isNonEffectProjectCreateMention(userText: string): boolean {
+  const t = userText.replace(/\s+/g, " ").trim();
+  if (!t) return false;
+
+  // Meta / how-to — not an effect request.
+  if (
+    /\b(?:explique|expliquer|expliques)[- ]?(?:moi)?\b[\s\S]{0,64}\bcomment\b[\s\S]{0,96}\b(?:cr[eé]e(?:r)?|cr[eé]ation)\b[\s\S]{0,48}\bprojet\b/i.test(
+      t,
+    ) ||
+    /\bcomment\s+(?:(?:puis-je|peut-on|faire\s+pour)\s+)?(?:cr[eé]e(?:r)?|cr[eé]ation)\b[\s\S]{0,48}\bprojet\b/i.test(
+      t,
+    ) ||
+    /\b(?:quelles?\s+(?:sont|seraient)\s+les\s+)?[eé]tapes\s+(?:pour\s+)?(?:cr[eé]e(?:r)?|cr[eé]ation)\b[\s\S]{0,48}\bprojet\b/i.test(
+      t,
+    )
+  ) {
+    return true;
+  }
+
+  // Exploratory hypothesis — not a request to constitute a proposal / mission.
+  if (
+    /\b(?:[eé]tudier|explorer|examiner)\s+(?:la\s+)?possibilit[eé]\s+de\s+(?:cr[eé]e(?:r)?|cr[eé]ation)\b/i.test(
+      t,
+    ) ||
+    /\bpossibilit[eé]\s+de\s+(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+)?projet\b/i.test(t)
+  ) {
+    return true;
+  }
+
+  return false;
+}
+
+/**
+ * Positive D2 create request: at least one non-negated « créer … projet » match,
+ * and the turn is not solely exploratory / explanatory / authorization-refused.
+ */
+export function hasPositiveProjectCreateIntent(userText: string): boolean {
+  if (isNonEffectProjectCreateMention(userText)) return false;
+
+  const re = new RegExp(PROJECT_CREATE_RE.source, "gi");
+  let m: RegExpExecArray | null;
+  while ((m = re.exec(userText)) !== null) {
+    const local = /cr[eé]e(?:r)?|cr[eé]ation/i.exec(m[0]);
+    const verbText = local?.[0] ?? m[0];
+    const verbIndex = m.index + (local?.index ?? 0);
+    if (isVerbNegated(userText, verbIndex, verbText.length)) continue;
+
+    // Local « ne … autorise pas à » immediately before this match.
+    const before = userText.slice(Math.max(0, m.index - 72), m.index);
+    if (/\bne\s+(?:t['’]|l['’]|vous\s+)?autorise\s+pas(?:\s+\w+){0,8}\s*(?:à\s*)?$/i.test(before)) {
+      continue;
+    }
+    return true;
+  }
+  return false;
+}
+
 /**
  * GAP-05: stop at puis/et/comma/period — name must not swallow follow-on clauses.
  * "projet nommé Continuity Global B puis un document…" → "Continuity Global B"
@@ -102,7 +173,18 @@ export function extractProposedProjectName(userText: string): string | null {
   const named = userText.match(
     /projet\s+(?:nomm[eé]|intitul[eé]|appel[eé])\s+[«"]?(.+?)[»"]?(?=\s+puis\b|\s+ensuite\b|\s+et\s+(?:un|une|le|la|des|ce|cet|cette)\b|\s+pour\s+(?:la|le|les|un|une|ce|cet|cette|l['’])\b|\s*[,.;:]|$)/i,
   );
-  if (named?.[1]) return named[1].replace(/[«»"']/g, "").trim();
+  if (named?.[1]) {
+    const cleaned = sanitizeProposedProjectName(named[1]);
+    return cleaned || null;
+  }
+  // « créer le projet Atlas » — label immediately after projet (stop at follow-on words).
+  const bare = userText.match(
+    /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\s+([A-ZÀ-Ÿ][\wÀ-ÿ-]{1,47})\b/i,
+  );
+  if (bare?.[1]) {
+    const cleaned = sanitizeProposedProjectName(bare[1]);
+    return cleaned || null;
+  }
   return null;
 }

@@ -247,8 +329,11 @@ export async function mobilizeCapability(
 export function qualifyStudioIntent(userText: string): QualifiedIntent {
   const documentAct = qualifyDocumentAct(userText);
   const publication = qualifyPublicationMission(userText);
-  const wantsProjectCreate = PROJECT_CREATE_RE.test(userText);
-  const proposedProjectName = extractProposedProjectName(userText);
+  // Lexical « créer … projet » alone is insufficient — require positive effect intent.
+  const wantsProjectCreate = hasPositiveProjectCreateIntent(userText);
+  const proposedProjectName = wantsProjectCreate
+    ? extractProposedProjectName(userText)
+    : null;
   const wantsFollowOnDocument =
     wantsProjectCreate && (FOLLOWON_DOC_RE.test(userText) || documentAct.kind === "CREATE");
   let pendingDocumentBrief: string | null = null;
@@ -1022,10 +1107,10 @@ export async function continueAfterProjectCreated(input: {
   if (!pendingDoc) {
     mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
     generationId = `mission-continue-d2:${mission.clientIntentKey}:${input.projectId}`;
+    // User-facing continuity only — no raw D3 diagnostic dump (ML4C-A-007).
     assistantContent =
       `### Suite de mission\nProjet créé (projectId=${input.projectId}). ` +
-      `Aucune étape documentaire dépendante dans l'intention initiale.\n\n` +
-      formatMissionAck(mission);
+      `Aucune étape documentaire dépendante dans l'intention initiale.`;
   } else {
     const original =
       mission.originalUserText ??
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index 3bb9bede..756acb7f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -198,9 +198,17 @@ export function formatMissionAck(mission: MissionProjection): string {
   return lines.join("\n");
 }

-export function appendMissionAck(content: string, mission: MissionProjection | null): string {
-  if (!mission) return content;
-  return `${content.trimEnd()}\n\n---\n${formatMissionAck(mission)}\n`;
+/**
+ * ML4C-A-007: mission projection stays structured (`missionProjection` / owner surfaces).
+ * Do not dump status/clientIntentKey/step/capability diagnostics into Nora user text.
+ * `formatMissionAck` remains available for observability / structured tooling.
+ */
+export function appendMissionAck(
+  content: string,
+  mission: MissionProjection | null,
+): string {
+  void mission;
+  return content;
 }

 export function composeCanonicalMissionRestitution(input: {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 3b71bd9d..eb28a67d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -1170,12 +1170,14 @@ export async function postUserMessageAndNora(
     studioIntent.wantsProjectCreate &&
     !ctx.project?.id
   ) {
-    const proposed = studioIntent.proposedProjectName?.trim() || "Nouveau projet";
+    const proposedRaw = studioIntent.proposedProjectName?.trim() || "Nouveau projet";
+    const proposed = proposedRaw.replace(/[*_`#~]+/g, " ").replace(/\s+/g, " ").trim().slice(0, 120) ||
+      "Nouveau projet";
     try {
       await updatePreview(
         pilotId,
         preparationId,
-        proposed.slice(0, 120),
+        proposed,
         `Intention Nora — création de projet «${proposed}». Acte Pilote requis.`,
       );
     } catch {
diff --git a/projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts b/projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts
index 5249d328..e925ac3f 100644
--- a/projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/intent-continuity-atlas.spec.ts
@@ -24,7 +24,11 @@ test("Atlas: one intent → create → D4 document persisted, visible, reload-st
   await expect(page.getByText("Nora deterministic-fixture · COMPLETE", { exact: false })).toBeVisible({
     timeout: 30000,
   });
-  await expect(page.getByText("AWAITING_PILOT_ACT", { exact: false })).toBeVisible();
+  // ML4C-A-007: mission status is structured UI — not raw D3 dump in Nora chat.
+  await expect(page.getByTestId("prep-mission-awaiting-pilot-act")).toBeVisible({
+    timeout: 30000,
+  });
+  await expect(page.getByTestId("prep-draft")).not.toContainText("clientIntentKey=");

   const createBtn = page.getByTestId("prep-create-project");
   if (!(await createBtn.isEnabled().catch(() => false))) {
@@ -113,7 +117,7 @@ test("Atlas: forged mission key refused BEFORE create (zero project)", async ({

   await page.getByTestId("prep-draft").fill("Crée un projet nommé Atlas Guard puis un document.");
   await page.getByTestId("prep-send").click();
-  await expect(page.getByText("AWAITING_PILOT_ACT", { exact: false })).toBeVisible({
+  await expect(page.getByTestId("prep-mission-awaiting-pilot-act")).toBeVisible({
     timeout: 30000,
   });

diff --git a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
index 33fdea83..3594110d 100644
--- a/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/intent-continuity-global.pg.test.ts
@@ -132,6 +132,45 @@ describe("Global Nora/Studio intent continuity (PG)", () => {
     expect(chat.missionProjection == null).toBe(true);
   });

+  it("ML4C-A-006/A-007 Intervencia: framing ≠ D2/D4 mission; no preview bump; no D3 dump", async () => {
+    const { pilotId, preparationId } = await seedPrepOnly("Intervencia");
+    const before = (
+      await db.select().from(preparations).where(eq(preparations.id, preparationId))
+    )[0]!;
+    const revisionBefore = before.creationRevision;
+    const previewNameBefore = before.previewName;
+    const previewSummaryBefore = before.previewSummary;
+
+    const ask =
+      "Pour l'instant, je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques.";
+    const chat = await postUserMessageAndNora(pilotId, preparationId, ask, {
+      clientTurnKey: newId("ctk"),
+    });
+
+    expect(chat.missionProjection == null).toBe(true);
+    expect(chat.documentSave == null || chat.documentSave.status === "NOT_EXECUTED").toBe(true);
+    expect(chat.assistantMessageId).toBeTruthy();
+
+    const after = (
+      await db.select().from(preparations).where(eq(preparations.id, preparationId))
+    )[0]!;
+    expect(after.creationRevision).toBe(revisionBefore);
+    expect(after.previewName).toBe(previewNameBefore);
+    expect(after.previewSummary).toBe(previewSummaryBefore);
+    const ctx = await getPreparationContext(pilotId, preparationId);
+    expect(ctx.project == null).toBe(true);
+
+    const msgs = await listMessages(pilotId, preparationId);
+    const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
+    expect(assistant?.content.trim().length).toBeGreaterThan(0);
+    expect(assistant?.content).not.toMatch(/clientIntentKey=/);
+    expect(assistant?.content).not.toMatch(/Suite de mission \(projection D3 — refs owners\)/);
+    expect(assistant?.content).not.toMatch(/capability=/);
+    // Durable conversation remains readable after the turn.
+    expect(msgs.filter((m) => m.role === "user").length).toBeGreaterThanOrEqual(1);
+    expect(msgs.filter((m) => m.role === "assistant").length).toBeGreaterThanOrEqual(1);
+  });
+
   it("S02: D2 alone — Pilot act creates one project; no forced document", async () => {
     const { pilotId, preparationId } = await seedPrepOnly("scen-b-d2-only");
     const first = await postUserMessageAndNora(
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index 5c9138b0..92767529 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -226,8 +226,11 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {

     const msgs = await listMessages(pilotId, preparationId);
     const assistant = msgs.filter((m) => m.role === "assistant").at(-1);
-    expect(assistant?.content).toMatch(/Résultat applicatif D4|Suite de mission|AVAILABLE/);
-    expect(assistant?.content).toMatch(/AWAITING_PILOT_AUTH|aucune HumanDecision créée/i);
+    // Owner D4 effect ack may appear; raw D3 diagnostic dump must not (ML4C-A-007).
+    expect(assistant?.content).toMatch(/Résultat applicatif D4|AVAILABLE/);
+    expect(assistant?.content).not.toMatch(/clientIntentKey=/);
+    expect(assistant?.content).not.toMatch(/Suite de mission \(projection D3 — refs owners\)/);
+    expect(chat.missionProjection?.status).toBe("AWAITING_PILOT_AUTH");
     expect(projectId).toBeTruthy();
   });

diff --git a/projects/sfia-studio-next/web/tests/unit/intent-conduction.test.ts b/projects/sfia-studio-next/web/tests/unit/intent-conduction.test.ts
index cbb72fc5..efcc7051 100644
--- a/projects/sfia-studio-next/web/tests/unit/intent-conduction.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/intent-conduction.test.ts
@@ -7,9 +7,11 @@ import {
   d2MissionIdempotencyKey,
   emptyMission,
   extractProposedProjectName,
+  hasPositiveProjectCreateIntent,
   mergeMissionSteps,
   mobilizeCapability,
   qualifyStudioIntent,
+  sanitizeProposedProjectName,
 } from "@/domains/conversation/intent-conduction";

 describe("intent-conduction (domain-agnostic D3)", () => {
@@ -21,6 +23,46 @@ describe("intent-conduction (domain-agnostic D3)", () => {
     expect(q.publication.wantsPublish).toBe(false);
   });

+  it("ML4C-A-006 Intervencia: framing + explicit non-authorization ≠ project create", () => {
+    const text =
+      "Pour l'instant, je souhaite uniquement réfléchir et cadrer le besoin. Je ne t'autorise pas à créer le projet ni à engager des travaux techniques.";
+    const q = qualifyStudioIntent(text);
+    expect(hasPositiveProjectCreateIntent(text)).toBe(false);
+    expect(q.wantsProjectCreate).toBe(false);
+    expect(q.wantsFollowOnDocument).toBe(false);
+    expect(q.proposedProjectName).toBeNull();
+    expect(q.documentAct.kind).toBe("NONE");
+    expect(q.simpleDialogue).toBe(true);
+  });
+
+  it("ML4C-A-006: negation / explanation / exploratory do not qualify D2", () => {
+    expect(qualifyStudioIntent("Ne crée pas encore le projet.").wantsProjectCreate).toBe(false);
+    expect(
+      qualifyStudioIntent("Explique-moi comment créer un projet.").wantsProjectCreate,
+    ).toBe(false);
+    expect(
+      qualifyStudioIntent("Je voudrais étudier la possibilité de créer un projet.").wantsProjectCreate,
+    ).toBe(false);
+  });
+
+  it("ML4C-A-006: positive create and multi-cap still qualify", () => {
+    expect(qualifyStudioIntent("Je veux créer le projet Atlas").wantsProjectCreate).toBe(true);
+    expect(qualifyStudioIntent("Je veux créer le projet Atlas").proposedProjectName).toBe("Atlas");
+    const multi = qualifyStudioIntent(
+      "Crée le projet Atlas puis prépare un document de cadrage pour ce projet.",
+    );
+    expect(multi.wantsProjectCreate).toBe(true);
+    expect(multi.proposedProjectName).toBe("Atlas");
+    expect(multi.wantsFollowOnDocument).toBe(true);
+  });
+
+  it("ML4C-A-006: sanitize markdown from proposed names", () => {
+    expect(sanitizeProposedProjectName("**Intervencia**")).toBe("Intervencia");
+    expect(
+      extractProposedProjectName('Crée un projet nommé **Atlas** puis un document.'),
+    ).toBe("Atlas");
+  });
+
   it("GAP-05: project name stops before follow-on clause", () => {
     expect(
       extractProposedProjectName(
diff --git a/projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts b/projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts
index b71d4cd1..254d3f18 100644
--- a/projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/mission-continuity.test.ts
@@ -74,9 +74,12 @@ describe("mission-continuity helpers", () => {
     expect(ack).toMatch(/AWAITING_PILOT_AUTH/);
     expect(ack).toMatch(/aucune HumanDecision créée/i);
     expect(ack).toMatch(/authorizePublication/);
+    // ML4C-A-007: structured formatter remains; user-facing append must not dump diagnostics.
     const composed = appendMissionAck("corps", mission);
-    expect(composed).toContain("corps");
-    expect(composed).toContain("efx_test");
+    expect(composed).toBe("corps");
+    expect(composed).not.toMatch(/clientIntentKey=/);
+    expect(composed).not.toMatch(/capability=/);
+    expect(composed).not.toMatch(/Suite de mission \(projection D3/);
   });

   it("canonical restitution preserves D4 facts when Continue fails", () => {
```

### Diff delivery-history (entrée ajoutée en tête)

Voir section 4 / `DELIV-2026-11-12-ML4C-A006-A007-INTENT-AUTHORITY-RESTITUTION`.

---

## 7. Tests exécutés (séparés)

### 7.1 Déterministes — unitaires

```
unset DATABASE_URL NODE_ENV
npx vitest run tests/unit/intent-conduction.test.ts \
  tests/unit/mission-continuity.test.ts \
  tests/unit/ml4c-s01-s03-guards.test.ts
→ 3 files / 30 tests PASSED
```

Couverture : Intervencia exact ; « Ne crée pas encore » ; « Explique-moi comment » ; « étudier la possibilité » ; « Je veux créer le projet Atlas » ; multi-cap Atlas+document ; sanitize Markdown ; `appendMissionAck` no-op (A-007).

### 7.2 PostgreSQL — intégration (DEV `sfia_next_e2e` via gate)

```
unset DATABASE_URL ; STUDIO_LANE=DEV STUDIO_E2E=1 STUDIO_GITHUB_PROVIDER=scripted
npx vitest run tests/integration/intent-continuity-global.pg.test.ts \
  tests/integration/mission-continuity-accept01.pg.test.ts \
  tests/integration/create-project.pg.test.ts
→ 3 files / 49 tests PASSED
```

Dont nouvel oracle Intervencia : `missionProjection == null`, `creationRevision` inchangé, preview inchangé, pas de projet, pas de dump `clientIntentKey=` / « Suite de mission (projection D3 — refs owners) » dans le message assistant durable.

ACCEPT-01 : ACK D4 owner préservé ; dump D3 absent du corps ; `missionProjection.status === AWAITING_PILOT_AUTH` structuré.

### 7.3 Navigateur — Playwright E2E (`:3101` / `sfia_next_e2e`)

```
env -u DATABASE_URL -u OPENAI_API_KEY -u NODE_ENV STUDIO_LANE=DEV \
  npx playwright test \
  tests/e2e/intent-continuity-atlas.spec.ts \
  tests/e2e/d2-ack-loss-reconcile.spec.ts \
  tests/e2e/g4-chat-first-sas.spec.ts
→ 4 passed (17.7s)
```

Réserve outillage : `NODE_ENV=production` dans le shell parent faisait échouer `next dev` (ENOENT `required-server-files.json`) — documenté ; pas un défaut produit.

### 7.4 Typecheck / build / lint

| Contrôle | Résultat |
| --- | --- |
| `npx tsc --noEmit` | PASS (exit 0) |
| `npm run build` | PASS |
| `npm run lint` | Warnings préexistants hors scope ; pas d'erreur bloquante sur le correctif |

---

## 8. Scénarios positifs / négatifs

| Scénario | Résultat attendu | Preuve |
| --- | --- | --- |
| Intervencia exact (négatif) | pas D2/D4/preview bump/dump | unit + PG |
| Ne crée pas encore | wantsProjectCreate false | unit |
| Explique comment créer | false | unit |
| Étudier la possibilité | false | unit |
| Je veux créer Atlas | true + nom Atlas | unit |
| Crée Atlas puis document | true + follow-on | unit + PG S03 + E2E Atlas |
| Doc explicite sans D2 | inchangé (ACCEPT-01 chemins) | PG |
| Perte ACK / reconcile | E2E D2_ACK_OBS | E2E PASS |
| Idempotence clés | create-project PG | PG PASS |
| Anciens messages | pas de migration | by design / no schema change |

---

## 9. Incertitudes / risques résiduels

1. **Re-recette utilisateur S02-01** non rejouée en RECETTE (interdit sans GO) — verdict utilisateur reste FAIL jusqu'à nouveau candidat + mise à disposition + GO Morris.
2. Formulations adverses hors motifs (négations ambigües, anglais, double intention contradictoire dans une même phrase) : couverture regex bornée, pas un NLU.
3. Messages historiques déjà persistés avec appendice D3 : **non migrés** (volontaire) ; nouveaux tours propres.
4. ML4C-A-003 (compositeur Nora) hors correctif.
5. E2E sensibles à `NODE_ENV` du shell opérateur.

---

## 10. Dette / condition de sortie

- Sortie correctif local : pack + handoff L3 + relecture ChatGPT.
- Sortie produit : décision Morris → éventuel commit/push branche projet → PR → CI → GO RECETTE distinct → retest S02-01.
- Ne pas déclarer S02-01 PASS ni ML4C ACCEPTED ici.

---

## 11. Verdict de conformité du correctif

**FIX IMPLEMENTED WITH RESERVES — REVIEW REQUIRED**

Réserves : (a) re-recette utilisateur non exécutée ; (b) couverture linguistique bornée ; (c) pas de push candidat projet.

Gates restants : revue ChatGPT → décision Morris → push/PR/CI → mise à disposition RECETTE → retest S02-01.

---

## 12. À retester par Morris

1. S02-01 Intervencia sur candidat après intégration (pas ce worktree dirty).
2. Matrice négative/positive listée §8 en UI RECETTE.
3. Vérifier absence d'appendice « Suite de mission (projection D3 — refs owners) » dans le fil.
4. Vérifier surface `prep-mission-awaiting-pilot-act` sur create positif.
5. Régression Atlas multi-cap + ACK loss.

---

## 13. Handoff / publication

- Review Pack local : `.tmp-sfia-review/chatgpt-review.md`
- Publication L3 : `scripts/sfia/publish-review-handoff.sh` → branche `sfia/review-handoff` fichier `sfia-review-handoff/latest-chatgpt-review.md` uniquement.
- **Aucun push de la branche projet de correction.**

---

## 14. Instruction ChatGPT (obligatoire)

Relire le handoff distant `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md` (SHA tip après publication) et contrôler son **contenu complet** avant d'émettre une revue, une recommandation d'intégration ou un verdict d'acceptation. Ne pas se fier à une synthèse partielle ni au pack local non publié.
