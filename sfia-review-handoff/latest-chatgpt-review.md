# SFIA Studio Next — Review Pack FULL — E08 UAT-GIT-PUB-01

| Champ | Valeur |
| --- | --- |
| Date / fuseau | 2026-11-22 ≈ 07:11 CET (Europe/Paris) |
| Contrat | SFIA v2.6 CRITICAL · INC/EVOL · DIAGNOSTIC+CORRECTION publication conversationnelle |
| Repository | `mcleland147/sfia-workspace` |
| Branche locale | `feat/next-ensemble08-git-publications-nora` |
| `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` (non modifié) |
| Push projet / PR / merge | **NONE** |
| Review Pack | FULL |
| Handoff | REQUIRED / PUBLISH-IN-CYCLE L3 |

## 1. Git Truth

| Objet | Valeur |
| --- | --- |
| HEAD candidat servi | `0b5d6c74b65171efa3ccda55d8478030afac6d9b` |
| TREE | `bf3a60b3b928803292120364fcbdda5833c9e667` |
| BUILD_ID | `RSccgxDslwxMhjjTtFo4Z` |
| Commit fix | `e78dae5e3d2a9f3451de209bad186c697387efe4` — resume clarification + DOCUMENTARY_ROOT |
| Commit tests | `0b5d6c74b65171efa3ccda55d8478030afac6d9b` — path-policy + PW banner |
| Parent docs | `7a609b88` (cutover finalisation précédent) |
| Runtime précédent | `f1907aad` / `zKGLfPHM1TMilec4qglJv` |
| Worktree build | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble08-pub01-build-0b5d6c74` |
| RECETTE | `http://127.0.0.1:3200` · LaunchAgent `ml4d-ux004` |
| HTTP BUILD | `<!--RSccgxDslwxMhjjTtFo4Z-->` **MATCH** |
| Boot | `PROVIDER=real ALLOW_MUTATIONS=documentary WRITE_ALLOWLIST=mcleland147/chantiers360` |
| DB inventaire | `projects=26 messages=649 documents=117` (préservé) |
| Backup | `…/ml4d-e08-pre-pub01-cutover-20261122T061040Z-from-f1907aad.sql.gz` SHA256 `7ce1247533c3647557db7a82c366cdb91dd6c42b4c1d36f3a810fecf907e8e6d` |
| Restore proof | **PASS** (inventaire identique) |
| Rollback | `ROLLBACK-TO-E08-f1907aad.sh` dans le worktree build |

## 2. PV UAT lu

Branche documentaire `docs/next-git-recette-20261122@8bc48fac` —  
`projects/sfia-studio-next/construction/ensemble-08-git-et-publications/recette-acceptation-partielle-2026-11-22.md`

Fonctions acceptées (non requalifiées) : Intégrations 11.06, rattachement, visualisation, consultation, navigation Git, suppression de branche.

Incident **UAT-GIT-PUB-01** : publication multi-tour CampusFlow → dépôt `mcleland147/chantiers360` → racine → nom fichier → « ok go » → Nora : « Intention de publication reconnue — aucun effet Studio n'a été lancé. » · **FAIL UAT**.

Scénarios de sortie : PUB-01..PUB-14 (P0 = PUB-01..05).

## 3. Scénario reproduit / diagnostic

### Chaîne causale (prouvé)

1. **Entrée** : tour USER « à la racine » / « ok go » après mission publication en `AWAITING_CLARIFICATION`.
2. **État** : mission ouverte pending ; S05 compare le nouveau tour à la mission ouverte et **self-bloque**.
3. **Frontière rompue** : D3 mission-continuity / conversation `service.ts` — reprise clarification non reconnue.
4. **Cause technique** : `MISSION_NOT_RESUMED` → pas de résolution path → pas de plan D7 → **zéro** `effect_attempts` (prouvé PG, pas déduit du texte Nora).
5. **Cause secondaire** : même après reprise, path racine `*.md` classé `MARKDOWN_OUTSIDE_DOCUMENTARY_ZONE` (corrigé `DOCUMENTARY_ROOT`).
6. **Conséquence visible** : restitution `NOT_ATTEMPTED` / « intention reconnue, aucun effet lancé ».

### Qualification

| Code | Statut |
| --- | --- |
| `MISSION_NOT_RESUMED` | **CAUSE RACINE** |
| `DISPATCH_NOT_TRIGGERED` | conséquence |
| `TARGET_UNRESOLVED` / path policy | contributif (root) |
| `AUTHORITY_NOT_ADMITTED` | non — D6 non atteint faute de reprise |
| `PROVIDER_REFUSED` | non observé (pas d'appel) |
| `CONTEXT_LOST` | non — mission persistée mais bloquée |
| `EFFECT_UNKNOWN` | non — NOT_ATTEMPTED explicite |

Aucune règle lexicale « ok go » ajoutée. Aucun nouveau moteur de mission. Aucun auto-GO LLM.

## 4. Fichiers et frontières impactés

| Fichier | Frontière | Nature |
| --- | --- | --- |
| `web/src/domains/conversation/mission-continuity.ts` | D3 | helpers reprise clarification + path |
| `web/src/domains/conversation/service.ts` | D3 | skip S05 self-block ; resume mission key |
| `web/src/domains/conversation/conversation-publication-authority.ts` | D6 | `missionClientIntentKey` ≠ turn key |
| `web/src/domains/integrations/path-policy.ts` | D9/guards | `DOCUMENTARY_ROOT` |
| tests unit/integration/e2e + as-built + delivery-history | preuves/docs | |

Hors périmètre respecté : UX 11.06, refonte D6, nouveau moteur, migrations.

## 5. Création intégrale — nouveau test unitaire

```typescript
import { describe, expect, it } from "vitest";
import {
  documentaryRootFilenameFromTitle,
  isPublicationPathClarificationResume,
  resolvePublicationPathAfterClarification,
  userSignalsRepositoryRootPath,
  type MissionProjection,
} from "@/domains/conversation/mission-continuity";

function clarifyingMission(overrides?: Partial<MissionProjection>): MissionProjection {
  return {
    clientIntentKey: "turn-path-await",
    status: "AWAITING_CLARIFICATION",
    goalSummary: "Document identifié — chemin Git requis avant préparation",
    restitution: "DELIVERED",
    steps: [
      {
        id: "d4_source",
        capabilityId: "d4.create_document",
        status: "DONE",
        documentId: "doc_1",
        revisionId: "drev_1",
      },
      {
        id: "d7_prepare",
        capabilityId: "d7.prepare_publication",
        status: "PENDING",
        documentId: "doc_1",
        revisionId: "drev_1",
        reason: "Chemin de publication Git manquant.",
      },
    ],
    ...overrides,
  };
}

describe("UAT-GIT-PUB-01 publication path clarification resume", () => {
  it("detects AWAITING_CLARIFICATION path mission as resumable when wantsPublish", () => {
    expect(
      isPublicationPathClarificationResume({
        blockingMission: clarifyingMission(),
        wantsPublish: true,
      }),
    ).toBe(true);
  });

  it("does not resume when wantsPublish is false", () => {
    expect(
      isPublicationPathClarificationResume({
        blockingMission: clarifyingMission(),
        wantsPublish: false,
      }),
    ).toBe(false);
  });

  it("does not resume unrelated awaiting missions", () => {
    expect(
      isPublicationPathClarificationResume({
        blockingMission: clarifyingMission({
          steps: [
            {
              id: "d2_create",
              capabilityId: "d2.create_project",
              status: "PENDING",
              reason: "PILOT_ACT_REQUIRED",
            },
          ],
        }),
        wantsPublish: true,
      }),
    ).toBe(false);
  });

  it("recognizes root path signals without inventing a filename alone", () => {
    expect(userSignalsRepositoryRootPath("tu peux le mettre à la racine du dépôt chantiers360")).toBe(
      true,
    );
    expect(userSignalsRepositoryRootPath("ok go")).toBe(false);
    expect(
      resolvePublicationPathAfterClarification({
        userText: "à la racine",
        qualifiedPath: null,
        documentTitle: null,
      }),
    ).toBeNull();
  });

  it("prefers qualified path then derives root filename from title", () => {
    expect(
      resolvePublicationPathAfterClarification({
        userText: "à la racine",
        qualifiedPath: "references-externes-enseignements-chantiers360.md",
        documentTitle: "Références externes — Enseignements de Chantiers360",
      }),
    ).toBe("references-externes-enseignements-chantiers360.md");

    expect(
      documentaryRootFilenameFromTitle("Références externes — Enseignements de Chantiers360"),
    ).toBe("references-externes-enseignements-de-chantiers360.md");

    expect(
      resolvePublicationPathAfterClarification({
        userText: "mets-le à la racine du dépôt",
        qualifiedPath: null,
        documentTitle: "Références externes — Enseignements de Chantiers360",
      }),
    ).toBe("references-externes-enseignements-de-chantiers360.md");
  });
});

```

## 6. Helpers mission-continuity (extrait figé HEAD)

```typescript
/**
 * True when an open AWAITING_CLARIFICATION mission is waiting on a publication path
 * and the current turn continues that same publication (not a competing effect).
 * Used to resume clarification without S05 blocking the clarifying USER act.
 */
export function isPublicationPathClarificationResume(input: {
  blockingMission: MissionProjection | null;
  wantsPublish: boolean;
}): boolean {
  const m = input.blockingMission;
  if (!m || m.status !== "AWAITING_CLARIFICATION") return false;
  if (!input.wantsPublish) return false;
  const prep = m.steps.find(
    (s) =>
      s.id === "d7_prepare" ||
      s.capabilityId === "d7.prepare_publication" ||
      s.capabilityId === "d7.dispatch_publication",
  );
  if (!prep || (prep.status !== "PENDING" && prep.status !== "WAITING")) return false;
  const reason = (prep.reason ?? "").toLowerCase();
  return /path|chemin|path_required/.test(reason);
}

/** Document/revision refs already bound on a clarifying publication mission. */
```

## 7. Diffs complets — code (7a609b88..0b5d6c74)

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
index 5b8e9725..ee86b687 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-authority.ts
@@ -193,7 +193,13 @@ export async function admitConversationalPublicationMandate(input: {
   attemptId: string;
   userMessageId: string;
   userStatement: string;
+  /** Reserved conversation turn key — provenance against conversation_turn_commands. */
   clientTurnKey?: string | null;
+  /**
+   * Mission correlation key when it differs from the turn key
+   * (publication path clarification resume). Defaults to clientTurnKey.
+   */
+  missionClientIntentKey?: string | null;
   qualifiedPath?: string | null;
   qualifiedBranch?: string | null;
   wantsPublishFromQual: boolean;
@@ -235,10 +241,12 @@ export async function admitConversationalPublicationMandate(input: {
     return emptyOutcome({ reasonCode: "WRONG_KIND", reason: "Tentative non publication" });
   }
 
+  const missionKey =
+    input.missionClientIntentKey?.trim() || input.clientTurnKey?.trim() || null;
   const conversationalMission =
     attemptIsNoraMission(row) ||
-    (input.clientTurnKey?.trim()
-      ? row.correlationKey === missionCorrelationKeys(input.clientTurnKey.trim()).publication
+    (missionKey
+      ? row.correlationKey === missionCorrelationKeys(missionKey).publication
       : false);
   if (!conversationalMission) {
     return emptyOutcome({
@@ -247,10 +255,7 @@ export async function admitConversationalPublicationMandate(input: {
     });
   }
 
-  if (
-    input.clientTurnKey?.trim() &&
-    row.correlationKey !== `${NORA_MISSION_PUB_PREFIX}${input.clientTurnKey.trim()}`
-  ) {
+  if (missionKey && row.correlationKey !== `${NORA_MISSION_PUB_PREFIX}${missionKey}`) {
     return emptyOutcome({
       reasonCode: "CORRELATION_MISMATCH",
       reason: "Clé de corrélation mission non alignée au tour USER",
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index c6f33500..62ee1c9d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -104,6 +104,84 @@ export function attemptIsNoraMission(row: { correlationKey: string }): boolean {
   return isNoraMissionPublicationKey(row.correlationKey);
 }
 
+/**
+ * True when an open AWAITING_CLARIFICATION mission is waiting on a publication path
+ * and the current turn continues that same publication (not a competing effect).
+ * Used to resume clarification without S05 blocking the clarifying USER act.
+ */
+export function isPublicationPathClarificationResume(input: {
+  blockingMission: MissionProjection | null;
+  wantsPublish: boolean;
+}): boolean {
+  const m = input.blockingMission;
+  if (!m || m.status !== "AWAITING_CLARIFICATION") return false;
+  if (!input.wantsPublish) return false;
+  const prep = m.steps.find(
+    (s) =>
+      s.id === "d7_prepare" ||
+      s.capabilityId === "d7.prepare_publication" ||
+      s.capabilityId === "d7.dispatch_publication",
+  );
+  if (!prep || (prep.status !== "PENDING" && prep.status !== "WAITING")) return false;
+  const reason = (prep.reason ?? "").toLowerCase();
+  return /path|chemin|path_required/.test(reason);
+}
+
+/** Document/revision refs already bound on a clarifying publication mission. */
+export function publicationRefsFromClarifyingMission(
+  mission: MissionProjection,
+): { documentId: string | null; revisionId: string | null } {
+  const step =
+    mission.steps.find((s) => s.id === "d7_prepare") ??
+    mission.steps.find((s) => s.id === "d4_source" || s.id === "d4_create") ??
+    null;
+  return {
+    documentId: step?.documentId ?? null,
+    revisionId: step?.revisionId ?? null,
+  };
+}
+
+const ROOT_PATH_SIGNAL_RE =
+  /\b(?:à|a)\s+la\s+racine\b|\bracine\s+du\s+d[ée]p[oô]t\b|\bat\s+the\s+root\b|\bin\s+the\s+repo\s+root\b/i;
+
+/** True when USER places the file at repository root without giving a full path. */
+export function userSignalsRepositoryRootPath(userText: string): boolean {
+  return ROOT_PATH_SIGNAL_RE.test(userText.normalize("NFKC"));
+}
+
+/** Slugify a document title into a root-level markdown filename (deterministic). */
+export function documentaryRootFilenameFromTitle(title: string): string | null {
+  const raw = title.normalize("NFKC").trim().toLowerCase();
+  if (!raw) return null;
+  const slug = raw
+    .normalize("NFD")
+    .replace(/\p{M}/gu, "")
+    .replace(/[^a-z0-9]+/g, "-")
+    .replace(/^-+|-+$/g, "")
+    .slice(0, 80);
+  if (!slug) return null;
+  return `${slug}.md`;
+}
+
+/**
+ * Resolve a concrete publication path when USER places the file at repo root.
+ * Prefers an already-qualified path; otherwise derives from document title.
+ * Never invents a path without a root signal or an explicit qualified path.
+ */
+export function resolvePublicationPathAfterClarification(input: {
+  userText: string;
+  qualifiedPath?: string | null;
+  documentTitle?: string | null;
+}): string | null {
+  const explicit = input.qualifiedPath?.trim() || null;
+  if (explicit) return explicit.replace(/^\/+/, "");
+  if (!userSignalsRepositoryRootPath(input.userText)) return null;
+  const fromTitle = input.documentTitle
+    ? documentaryRootFilenameFromTitle(input.documentTitle)
+    : null;
+  return fromTitle;
+}
+
 /**
  * SEM-02 — retired as production métier router.
  * Publication intent comes from Nora semantic qualification (capability d7.*).
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 6e6b19cf..6357319f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -111,9 +111,12 @@ import {
   appendMissionAck,
   cognitiveContinueFromFacts,
   composeCanonicalMissionRestitution,
+  isPublicationPathClarificationResume,
   missionCorrelationKeys,
   preparePublicationForMission,
+  publicationRefsFromClarifyingMission,
   recoverAuthorizedNoraMissions,
+  resolvePublicationPathAfterClarification,
   type MissionProjection,
 } from "./mission-continuity";
 import { admitConversationalPublicationMandate } from "./conversation-publication-authority";
@@ -1284,12 +1287,25 @@ export async function postUserMessageAndNora(
         : true,
     ) ?? null;
 
+  // UAT-GIT-PUB-01 — clarifying replies (path / go) must resume the open publication
+  // AWAITING_CLARIFICATION mission instead of being S05-blocked against it.
+  const publicationClarificationResume = isPublicationPathClarificationResume({
+    blockingMission,
+    wantsPublish: studioProjection.publication.wantsPublish,
+  });
+  const clarifyingPublicationMission = publicationClarificationResume
+    ? blockingMission
+    : null;
+
   const applyPendingGate =
     nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN";
   // R-02 — durable comparable identities only (never USER text / title / lexical).
-  const currentMissionKeys = missionCorrelationKeys(
-    carriedMission?.clientIntentKey?.trim() || clientTurnKey,
-  );
+  // Clarification resume reuses the awaiting mission key (same publication intention).
+  const publicationMissionIntentKey =
+    clarifyingPublicationMission?.clientIntentKey?.trim() ||
+    carriedMission?.clientIntentKey?.trim() ||
+    clientTurnKey;
+  const currentMissionKeys = missionCorrelationKeys(publicationMissionIntentKey);
   const currentCorrelationKeys = buildTurnCorrelationKeys({
     commandId: reserved.commandId,
     operationId: reserved.operationId,
@@ -1362,7 +1378,8 @@ export async function postUserMessageAndNora(
       pendingEffectBlocked = true;
       pendingBlockReason = siblingPolicy.pendingBlockReason;
     }
-    if (blockingMission) {
+    // Do not S05-block a clarifying USER turn against its own path-awaiting publication mission.
+    if (blockingMission && !publicationClarificationResume) {
       allowOwnerEffects = false;
       pendingEffectBlocked = true;
       if (!pendingBlockReason) {
@@ -1371,6 +1388,19 @@ export async function postUserMessageAndNora(
             ? `S05_MISSION_BLOCKS_EFFECT:${blockingMission.clientIntentKey ?? "mission"}`
             : `S05_MISSION_BLOCKS_AMBIGUOUS:${blockingMission.clientIntentKey ?? "mission"}`;
       }
+    } else if (publicationClarificationResume && clarifyingPublicationMission) {
+      emitObs({
+        event_name: "d3.mission.publication_clarification_resume",
+        component: "d3.mission_continuity",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        outcome: "PARTIAL",
+        meta: {
+          resumed_mission_key: clarifyingPublicationMission.clientIntentKey,
+          current_turn_key: clientTurnKey,
+          has_path: Boolean(studioProjection.publication.targetPath),
+        },
+      });
     }
   }
 
@@ -1555,7 +1585,9 @@ export async function postUserMessageAndNora(
   const documentaryIntentSignal = documentAct.kind !== "NONE";
   const missionIntent = studioProjection.publication;
   const studioIntent = studioProjection;
-  const clientIntentKey = clientTurnKey;
+  // Clarification resume reuses awaiting mission key for D7 correlation only.
+  const clientIntentKey =
+    clarifyingPublicationMission?.clientIntentKey?.trim() || clientTurnKey;
   const missionKeys = missionCorrelationKeys(clientIntentKey);
 
   let publicationMandateDecisionId: string | null = null;
@@ -2566,6 +2598,11 @@ export async function postUserMessageAndNora(
   // Restitution belongs to Nora after Studio outcome — never a fixed pre-effect hedge.
   let publicationEffectView: PublicationEffectView = null;
 
+  // Effective path: qualification path, or root clarification → derived filename.
+  const clarifyingRefs = clarifyingPublicationMission
+    ? publicationRefsFromClarifyingMission(clarifyingPublicationMission)
+    : { documentId: null, revisionId: null };
+
   if (
     allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
@@ -2586,7 +2623,8 @@ export async function postUserMessageAndNora(
         : null,
       docs: docsForPub,
       documentHint: missionIntent.documentHint ?? null,
-      objectRef: missionIntent.objectRef ?? null,
+      objectRef:
+        missionIntent.objectRef ?? clarifyingRefs.documentId ?? null,
       focus: opts?.documentFocus
         ? {
             documentId: opts.documentFocus.documentId,
@@ -2594,7 +2632,13 @@ export async function postUserMessageAndNora(
             sourceRevisionNumber: opts.documentFocus.sourceRevisionNumber,
             observedHeadRevisionId: opts.documentFocus.observedHeadRevisionId,
           }
-        : null,
+        : clarifyingRefs.documentId && clarifyingRefs.revisionId
+          ? {
+              documentId: clarifyingRefs.documentId,
+              sourceRevisionId: clarifyingRefs.revisionId,
+              observedHeadRevisionId: clarifyingRefs.revisionId,
+            }
+          : null,
     });
 
     // D4 owner confirmation before any D7 prepare — never trust client focus alone.
@@ -2630,6 +2674,17 @@ export async function postUserMessageAndNora(
 
     const writeGate = publicationWriteGate();
 
+    const resolvedPath = resolvePublicationPathAfterClarification({
+      userText: content,
+      qualifiedPath: missionIntent.targetPath,
+      documentTitle: pubTarget.ok
+        ? pubTarget.title
+        : missionIntent.documentHint,
+    });
+    const effectiveNeedsExplicitPath =
+      Boolean(missionIntent.wantsPublish) && !resolvedPath;
+    const effectiveTargetPath = resolvedPath;
+
     if (!pubTarget.ok) {
       const clarify =
         pubTarget.reason === "AMBIGUOUS" ||
@@ -2730,7 +2785,7 @@ export async function postUserMessageAndNora(
           reason: writeGate.reason,
         },
       });
-    } else if (missionIntent.needsExplicitPath) {
+    } else if (effectiveNeedsExplicitPath) {
       // P1-E: no silent path/branch deduction — clarify before D7 prepare.
       steps.push({
         id: "d7_prepare",
@@ -2762,7 +2817,7 @@ export async function postUserMessageAndNora(
         documentId: pubTarget.documentId,
         revisionId: pubTarget.revisionId,
         clientIntentKey,
-        targetPath: missionIntent.targetPath,
+        targetPath: effectiveTargetPath,
         targetBranch: missionIntent.targetBranch,
       });
       if (prepared.ok) {
@@ -2787,8 +2842,10 @@ export async function postUserMessageAndNora(
           attemptId: prepared.attemptId,
           userMessageId: reserved.userMessageId,
           userStatement: content,
-          clientTurnKey: clientIntentKey,
-          qualifiedPath: missionIntent.targetPath,
+          // Provenance: reserved turn key. Correlation: mission key (may equal turn key).
+          clientTurnKey,
+          missionClientIntentKey: clientIntentKey,
+          qualifiedPath: effectiveTargetPath,
           qualifiedBranch: missionIntent.targetBranch,
           wantsPublishFromQual: missionIntent.wantsPublish,
         });
diff --git a/projects/sfia-studio-next/web/src/domains/integrations/path-policy.ts b/projects/sfia-studio-next/web/src/domains/integrations/path-policy.ts
index 225c41b5..2f1fcd2c 100644
--- a/projects/sfia-studio-next/web/src/domains/integrations/path-policy.ts
+++ b/projects/sfia-studio-next/web/src/domains/integrations/path-policy.ts
@@ -277,6 +277,16 @@ export function classifyPublicationPath(rawPath: string): PathPolicyResult {
     };
   }
 
+  // Repo-root documentary file (single segment) — UAT "à la racine" without README/deny.
+  if (docExt && !norm.includes("/")) {
+    return {
+      allowed: true,
+      reason: "DOCUMENTARY_ROOT",
+      classification: "DOCUMENTARY",
+      normalizedPath: norm,
+    };
+  }
+
   if (docExt) {
     return {
       allowed: false,

```

## 8. Diffs complets — tests + documentation

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 070de848..640d7906 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,22 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-UAT-GIT-PUB-01
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 07:10 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — UAT-GIT-PUB-01 publication conversationnelle |
+| Type | INC / EVOL · CRITICAL · **NO RELEASE** |
+| Cause | `MISSION_NOT_RESUMED` / S05 self-block sur clarification → `NOT_ATTEMPTED` (zéro `effect_attempts`) ; root `.md` → `MARKDOWN_OUTSIDE_DOCUMENTARY_ZONE` |
+| Fix | `isPublicationPathClarificationResume` + skip S05 self-block · `DOCUMENTARY_ROOT` · D6 `missionClientIntentKey` ≠ turn key |
+| Diagnostic | DISPATCH_NOT_TRIGGERED (conséquence) ; cause racine continuité S05 + path policy |
+| Preuves | unit clarification+path-policy · PG accept01 (11) dont UAT-GIT-PUB-01 SCRIPTED COMPLETED |
+| SOURCE_SHA / TREE / BUILD | renseignés au freeze/cutover ci-dessous |
+| REAL E2E | **NOT PROVEN** — UAT Morris requis après cutover |
+| Push projet | **NONE** |
+
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-FINALISATION-RECETTE-CUTOVER
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 87d27b6c..c43d5735 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -66,6 +66,13 @@
 - E08-S04 prStatusKind / label historique
 - Playwright E08 surface historique ; G5 F2 : **NOT PROVEN** (différé Morris UAT)
 
+
+
+### UAT-GIT-PUB-01 (2026-11-22)
+- **Cause prouvée (DB RECETTE)** : tour clarifiant (`à la racine` / `ok go`) bloqué par S05 contre la mission `AWAITING_CLARIFICATION` (chemin) → `pendingEffectBlocked` → restitution `NOT_ATTEMPTED` ; **zéro** `effect_attempts`.
+- **Correction** : reprise clarification publication (pas de S05 self-block) + chemin racine documentaire (`DOCUMENTARY_ROOT`) + mandat D6 avec `missionClientIntentKey` distinct du turn key.
+- Preuve PG : `mission-continuity-accept01` UAT-GIT-PUB-01 PASS (SCRIPTED). REAL E2E : à revalider UAT Morris.
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/web/tests/e2e/ensemble08-nora-publication.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ensemble08-nora-publication.spec.ts
index e7df0a46..1ab40adc 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ensemble08-nora-publication.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ensemble08-nora-publication.spec.ts
@@ -21,9 +21,12 @@ async function connectGithubAndAttach(page: Page, projectId: string) {
     await expect(page.getByTestId("connect-github")).toBeVisible({ timeout: 15_000 });
   }
   await page.getByTestId("connect-github").click();
-  await expect(page.getByTestId("integrations-status-banner")).toContainText(/GitHub connecté/i, {
-    timeout: 20_000,
-  });
+  await expect(page.getByTestId("integrations-status-banner")).toContainText(
+    /GitHub (est )?connecté/i,
+    {
+      timeout: 20_000,
+    },
+  );
 
   await page.goto(`/projects/${projectId}?surface=git`);
   await expect(page.getByTestId("git-empty").or(page.getByTestId("git-repo-card"))).toBeVisible({
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index ffeff38d..a39a2129 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -33,6 +33,7 @@ import { listDocuments } from "@/domains/document/service";
 import { fixtureSemanticQualify } from "@/domains/conversation/fixture-semantic-qualify";
 import { projectStudioEffects } from "@/domains/conversation/semantic-qualification";
 import {
+  asNoraQualification,
   d4CreateAndPublishEnvelope,
   d4ReviseDocumentEnvelope,
   registerCreateDocumentTitled,
@@ -254,6 +255,62 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
     expect(chat.missionProjection?.steps.find((s) => s.id === "d7_prepare")?.attemptId).toBeFalsy();
   });
 
+  it("UAT-GIT-PUB-01: path clarification resume is not S05-blocked and prepares D7", async () => {
+    const { pilotId, preparationId } = await seedProjectWithGit("uat-pub01-clarif");
+    const ask =
+      "Crée un document intitulé UAT Pub Clarif et publie-le dans mon dépôt GitHub";
+    const key1 = newId("ctk");
+    const t1 = await noraTurn(pilotId, preparationId, ask, {
+      clientTurnKey: key1,
+      fixture: {
+        kind: "d4_publish",
+        title: "UAT Pub Clarif",
+        publicationPath: null,
+      },
+    });
+    expect(t1.missionProjection?.status).toBe("AWAITING_CLARIFICATION");
+    expect(t1.pendingEffectBlocked).not.toBe(true);
+
+    const clarify = "tu peux le mettre à la racine du dépôt";
+    registerTypedScenario(
+      clarify,
+      asNoraQualification({
+        status: "QUALIFIED",
+        goal: "Préciser le chemin de publication à la racine",
+        replyDraft: "Chemin racine reçu — préparation de la publication.",
+        intents: [
+          {
+            id: "i1",
+            capabilityId: "d7.prepare_publication",
+            mode: "REQUEST_EFFECT",
+            summary: "Publier à la racine",
+            parameters: {
+              documentHint: "UAT Pub Clarif",
+              publicationPath: "uat-pub-clarif.md",
+            },
+            constraints: [],
+            dependsOn: [],
+            sourceEvidence: [],
+          },
+        ],
+      }),
+    );
+    const t2 = await noraTurn(pilotId, preparationId, clarify, {
+      clientTurnKey: newId("ctk"),
+    });
+    expect(t2.pendingEffectBlocked).not.toBe(true);
+    expect(String(t2.pendingBlockReason ?? "")).not.toMatch(/S05_MISSION_BLOCKS/i);
+    expect(t2.missionProjection).toBeTruthy();
+    const prep = t2.missionProjection?.steps.find((s) => s.id === "d7_prepare");
+    expect(prep?.attemptId).toBeTruthy();
+    expect(["WAITING", "DONE"]).toContain(prep?.status);
+    // Must not collapse to NOT_ATTEMPTED-only restitution.
+    const msgs = await listMessages(pilotId, preparationId);
+    const last = msgs[msgs.length - 1];
+    expect(last?.role).toBe("assistant");
+    expect(last?.content ?? "").not.toMatch(/aucun effet Studio n'a été lancé/i);
+  });
+
   it("E08-B: clear USER publish admits D6 mandate on same turn (no second click)", async () => {
     const { pilotId, projectId, preparationId } = await seedProjectWithGit("e08-b-mandate");
     const ask =
diff --git a/projects/sfia-studio-next/web/tests/unit/path-policy.test.ts b/projects/sfia-studio-next/web/tests/unit/path-policy.test.ts
index aa739119..d6768889 100644
--- a/projects/sfia-studio-next/web/tests/unit/path-policy.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/path-policy.test.ts
@@ -43,8 +43,18 @@ describe("path-policy fail-closed (B5)", () => {
     expect(classifyPublicationPath(".github/workflows/ci.yml").allowed).toBe(false);
   });
 
-  it("does not allow markdown outside documentary zones", () => {
-    expect(classifyPublicationPath("notes-at-root.md").allowed).toBe(false);
+  it("allows repo-root documentary markdown (DOCUMENTARY_ROOT)", () => {
+    const r = classifyPublicationPath("notes-at-root.md");
+    expect(r.allowed).toBe(true);
+    expect(r.reason).toBe("DOCUMENTARY_ROOT");
+    expect(r.classification).toBe("DOCUMENTARY");
+  });
+
+  it("still denies markdown under non-documentary nested zones", () => {
+    expect(classifyPublicationPath("random/notes.md").allowed).toBe(false);
+    expect(classifyPublicationPath("random/notes.md").reason).toBe(
+      "MARKDOWN_OUTSIDE_DOCUMENTARY_ZONE",
+    );
   });
 });
 
diff --git a/projects/sfia-studio-next/web/tests/unit/publication-clarification-resume.test.ts b/projects/sfia-studio-next/web/tests/unit/publication-clarification-resume.test.ts
new file mode 100644
index 00000000..8f514224
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/publication-clarification-resume.test.ts
@@ -0,0 +1,109 @@
+import { describe, expect, it } from "vitest";
+import {
+  documentaryRootFilenameFromTitle,
+  isPublicationPathClarificationResume,
+  resolvePublicationPathAfterClarification,
+  userSignalsRepositoryRootPath,
+  type MissionProjection,
+} from "@/domains/conversation/mission-continuity";
+
+function clarifyingMission(overrides?: Partial<MissionProjection>): MissionProjection {
+  return {
+    clientIntentKey: "turn-path-await",
+    status: "AWAITING_CLARIFICATION",
+    goalSummary: "Document identifié — chemin Git requis avant préparation",
+    restitution: "DELIVERED",
+    steps: [
+      {
+        id: "d4_source",
+        capabilityId: "d4.create_document",
+        status: "DONE",
+        documentId: "doc_1",
+        revisionId: "drev_1",
+      },
+      {
+        id: "d7_prepare",
+        capabilityId: "d7.prepare_publication",
+        status: "PENDING",
+        documentId: "doc_1",
+        revisionId: "drev_1",
+        reason: "Chemin de publication Git manquant.",
+      },
+    ],
+    ...overrides,
+  };
+}
+
+describe("UAT-GIT-PUB-01 publication path clarification resume", () => {
+  it("detects AWAITING_CLARIFICATION path mission as resumable when wantsPublish", () => {
+    expect(
+      isPublicationPathClarificationResume({
+        blockingMission: clarifyingMission(),
+        wantsPublish: true,
+      }),
+    ).toBe(true);
+  });
+
+  it("does not resume when wantsPublish is false", () => {
+    expect(
+      isPublicationPathClarificationResume({
+        blockingMission: clarifyingMission(),
+        wantsPublish: false,
+      }),
+    ).toBe(false);
+  });
+
+  it("does not resume unrelated awaiting missions", () => {
+    expect(
+      isPublicationPathClarificationResume({
+        blockingMission: clarifyingMission({
+          steps: [
+            {
+              id: "d2_create",
+              capabilityId: "d2.create_project",
+              status: "PENDING",
+              reason: "PILOT_ACT_REQUIRED",
+            },
+          ],
+        }),
+        wantsPublish: true,
+      }),
+    ).toBe(false);
+  });
+
+  it("recognizes root path signals without inventing a filename alone", () => {
+    expect(userSignalsRepositoryRootPath("tu peux le mettre à la racine du dépôt chantiers360")).toBe(
+      true,
+    );
+    expect(userSignalsRepositoryRootPath("ok go")).toBe(false);
+    expect(
+      resolvePublicationPathAfterClarification({
+        userText: "à la racine",
+        qualifiedPath: null,
+        documentTitle: null,
+      }),
+    ).toBeNull();
+  });
+
+  it("prefers qualified path then derives root filename from title", () => {
+    expect(
+      resolvePublicationPathAfterClarification({
+        userText: "à la racine",
+        qualifiedPath: "references-externes-enseignements-chantiers360.md",
+        documentTitle: "Références externes — Enseignements de Chantiers360",
+      }),
+    ).toBe("references-externes-enseignements-chantiers360.md");
+
+    expect(
+      documentaryRootFilenameFromTitle("Références externes — Enseignements de Chantiers360"),
+    ).toBe("references-externes-enseignements-de-chantiers360.md");
+
+    expect(
+      resolvePublicationPathAfterClarification({
+        userText: "mets-le à la racine du dépôt",
+        qualifiedPath: null,
+        documentTitle: "Références externes — Enseignements de Chantiers360",
+      }),
+    ).toBe("references-externes-enseignements-de-chantiers360.md");
+  });
+});

```

## 9. Tests et preuves

| Suite | Résultat | Preuve |
| --- | --- | --- |
| `tsc --noEmit` | PASS | exit 0 |
| unit `publication-clarification-resume` | 5/5 PASS | DETERMINISTIC |
| unit `path-policy` | 10/10 PASS | DETERMINISTIC (DOCUMENTARY_ROOT) |
| unit publication* + authority + mission-continuity + real-github gate | 87/87 PASS | DETERMINISTIC |
| unit full | 810 PASS / 2 FAIL préexistants `github-app-user-oauth` (env RECETTE vs DEV lane) — **hors blast** | |
| PG `mission-continuity-accept01` | 11/11 PASS incl. UAT-GIT-PUB-01 SCRIPTED COMPLETED | DETERMINISTIC / PG |
| PG `git-collaboration` | 9 FAIL préexistants OAuth `INVALID_REQUEST` (env) — path policy OK dans les 95 PASS | |
| Playwright `ensemble08-nora-publication.spec.ts` | 2/2 PASS (SCRIPTED DEV :3101) | BROWSER OBSERVED |
| Build détaché clean | PASS · BUILD `RSccgxDslwxMhjjTtFo4Z` | |
| Cutover RECETTE | PASS · HTTP BUILD match · DB préservée | |

### Fake / Real

| Affirmation | Niveau |
| --- | --- |
| Clarification → prepare → authorize → COMPLETED | **DETERMINISTIC / PG PROVEN** (SCRIPTED) |
| Multi-tour browser Nora publication surface | **BROWSER OBSERVED** (SCRIPTED e2e) |
| GitHub REAL WRITE publication CampusFlow | **NOT PROVEN** — UAT Morris |
| End-to-end REAL | **NOT PROVEN** |

SCRIPTED ≠ REAL. Aucune mutation GitHub externe initiée par Cursor dans ce lot.

## 10. GitHub et autorité

- Provider RECETTE : **REAL**
- `STUDIO_GITHUB_ALLOW_MUTATIONS=documentary`
- Allowlist WRITE : `mcleland147/chantiers360`
- D6 : acte USER relié au plan via `admitConversationalPublicationMandate` ; `missionClientIntentKey` pour corrélation mission ≠ `clientTurnKey` turn
- Guards D7/D9 path + WRITE inchangés hors `DOCUMENTARY_ROOT`
- Pas de merge implicite ; PR/merge hors scope de « publie le document » sans mandat

## 11. Sécurité / idempotence

- Fail-closed path : README root, secrets, prefixes techniques toujours refusés
- Root documentary `.md`/`.txt`/`.adoc` seulement (single segment)
- Idempotence D7/D9 non contournée
- Secrets absents du Review Pack / handoff
- Backup + restore proof avant cutover

## 12. État RECETTE

| Item | Valeur |
| --- | --- |
| URL | http://127.0.0.1:3200 |
| SOURCE_SHA | `0b5d6c74b65171efa3ccda55d8478030afac6d9b` |
| BUILD_ID | `RSccgxDslwxMhjjTtFo4Z` |
| Données | préservées (CampusFlow, rattachements, sessions) |
| Rollback | script → `f1907aad` / `zKGLfPHM1TMilec4qglJv` |

## 13. Risques et réserves

1. **REAL E2E NOT PROVEN** — Morris doit rejouer PUB-01..05 sur RECETTE.
2. OAuth unit/PG FAIL environnementaux préexistants (lane DEV vs credentials RECETTE injectés) — non introduits par ce lot.
3. E08 **non ADOPTÉ** globalement tant que publication conversationnelle REAL non UAT.
4. Docs delivery cutover peuvent être commités localement après le SHA servi (HEAD docs ≠ runtime) — runtime figé `0b5d6c74`.

## 14. Verdicts

- **INCIDENT CORRIGÉ — DETERMINISTIC/PG/BROWSER PROVEN**
- **INCIDENT CORRIGÉ — END-TO-END REAL PROVEN** → **NON**
- **CANDIDATE FROZEN** → oui (`0b5d6c74` / `RSccgxDslwxMhjjTtFo4Z`)
- **RECETTE AVAILABLE — MORRIS UAT REQUIRED**
- **NOT READY / STOP** → non (gates cutover OK)

E08 **non** déclaré accepté globalement.

### Reprise Morris

Rejouer uniquement les scénarios publication conversationnelle restants (PUB-01..05 prioritaires, puis PUB-06..14 selon PV) sur `http://127.0.0.1:3200` BUILD `RSccgxDslwxMhjjTtFo4Z`.

---
FIN Review Pack FULL — UAT-GIT-PUB-01
