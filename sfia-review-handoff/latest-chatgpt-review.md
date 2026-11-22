# SFIA Review Pack FULL — E08 WRITE MANDATE BRANCH CORRECTIVE

| Champ | Valeur |
| --- | --- |
| Date / fuseau | 2026-11-22 ≈ 11:30 CET (Europe/Paris) |
| Profil | CRITICAL · Delivery / INC correctif + QA |
| Mandat | GO Morris diagnostic + correction substitution branche publication |
| Versioning | **NO RELEASE** · STABLE NOT AVAILABLE |
| Push projet / PR / merge | **NONE** |
| Cutover RECETTE | **NONE** |
| Mutation GitHub | **NONE** (PR#19/#20 inchangées) |

## 1. Git Truth

### Initial
| | |
| --- | --- |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| HEAD | `5d4b5c49aa5fd86f226600e0edc3ee7a2021325a` |
| TREE | `de1ce5c7283d5d1cc23e3949615f13f5ceb041d5` |
| origin/main | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Dirty | `.tmp-sfia-review/` only |
| RECETTE servi | SOURCE `7115e932…` · BUILD `OwQrOGhC9rwk_Dtj31OcM` |
| Worktree DEV | feat branch (modifiable) |
| Worktree RECETTE | `…/corrective-build-7115e932` (non modifié) |

### Final
| | |
| --- | --- |
| HEAD | `24a8fa9e7ad6cc2fa961496a915f13cea542d4a8` |
| TREE | `ece43cdb8c008b855c381d50f112f8b86e5a2207` |
| BUILD candidat (non servi) | `qCQGWLYYGb0ZCA4BLfzBi` |
| Worktree freeze | `…/mandate-build-24a8fa9e` |
| RECETTE HTTP | toujours `<!--OwQrOGhC9rwk_Dtj31OcM-->` |

## 2. Chronologie incident (lecture seule RECETTE)

`USER msg_e2cd5e69… (10:01:46Z)`
→ branche demandée **`sfia/pub-r12-recette-20261122`** (statement décision)
→ `preparePublication` / plan `efx_d8f8e550…`
→ **`publicationBranch=sfia/pub-91996c24991c351b`** (= `sha256(pub:mission:turn-8ca19672…)[:16]`)
→ D6 `dec_39c4807f…` APPLICABLE — envelope porte la branche **générée** (statement USER a la bonne)
→ D9 CREATE_BRANCH / commit / OPEN_PR sur la branche générée
→ D8 `dpr_1069f349…` PR#20 OPEN · commit `5d6f0b7b…`
→ restitution Nora aligne les faits exécutés

| Frontière | Branche présente | Contrôle |
| --- | --- | --- |
| USER | `sfia/pub-r12-recette-20261122` | explicite |
| Nora D3 / missionIntent.targetBranch | base `main` (typ.) — tête publi. non câblée | NON PROUVÉ champs qual complets |
| prepare D7 | **`sfia/pub-91996c24991c351b`** | **PREMIER ÉCART PROUVÉ** |
| D6 envelope | générée | extraction échoue → pas de PLAN_DRIFT |
| D9 | générée | exécute le plan |
| D8 / GitHub | générée | cohérent techniquement |

## 3. Cause prouvée

1. **Owner D7** — `preparePublication` assignait toujours `publicationBranchFromCorrelationKey(correlationKey)` sans paramètre explicite.
2. **Garde D6** — `EXPLICIT_BRANCH_CAPTURE_RE` ne capturait pas « Branche à créer : \`name\` » (mots intercalés) → `assertPublicationMandateCoversPlan` ne voyait aucune branche explicite.

D9 n’a pas « inventé » hors plan : il a exécuté le plan déjà substitué.

## 4. Correction

| Responsabilité | Changement |
| --- | --- |
| `fingerprint.resolvePublicationBranchName` | explicite > hash ; refuse SAME_AS_BASE / INVALID |
| `preparePublication` | accepte `publicationBranch?` |
| `preparePublicationForMission` + API prepare | propage le champ |
| `service.ts` | extrait tête explicite ≠ base ; ambiguïté → clarification ; `qualifiedBranch` = tête publi. |
| `conversation-publication-mandate-guards` | regex labeled + `extractExplicitPublicationBranch` |

Auto-génération **conservée** si aucune tête explicite.

## 5. Fichiers impactés

12 fichiers (voir stat). Création : `tests/unit/publication-branch-mandate.test.ts`.

## 6. Diffs code
```diff
commit 24a8fa9e7ad6cc2fa961496a915f13cea542d4a8
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 11:26:02 2026 +0100

    fix(next): honor explicit publication branch in D7 prepare

    Stop silent correlation-hash substitution when the pilot names a publication head; keep auto-generation only when no explicit branch is mandated, and refuse plan drift before effect.

diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts
index 273e7d93..c1bd5c02 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/git/publications/prepare/route.ts
@@ -13,6 +13,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
       repositoryId?: string;
       targetPath?: string;
       targetBranch?: string;
+      publicationBranch?: string | null;
       correlationKey?: string;
       steps?: Array<"CREATE_BRANCH" | "PUBLISH_FILE" | "OPEN_PR"> | null;
     };
@@ -34,6 +35,7 @@ export async function POST(req: Request, ctx: { params: Promise<{ projectId: str
       repositoryId: body.repositoryId,
       targetPath: body.targetPath,
       targetBranch: body.targetBranch,
+      publicationBranch: body.publicationBranch ?? null,
       correlationKey: body.correlationKey,
       steps: body.steps,
     });
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-mandate-guards.ts b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-mandate-guards.ts
index 6c5882ce..5a331907 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-mandate-guards.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/conversation-publication-mandate-guards.ts
@@ -75,10 +75,18 @@ const NEW_BRANCH_INTENT_RE =
 /**
  * Capture after branche|branch only for validation of an explicit technical name.
  * Never used as a métier router.
+ *
+ * Form A — immediate: "branche feat/x", "branch main"
+ * Form B — labeled create/base: "Branche à créer : `sfia/pub-…`", "branch to create: name"
+ *   (allows a few non-ref words between branche|branch and `:`/`=` before the technical name)
  */
 const EXPLICIT_BRANCH_CAPTURE_RE =
   /(?:branche|branch)\s*[:=]?\s*[`"']?([A-Za-z0-9][A-Za-z0-9._/\-]*)[`"']?/gi;

+/** Labeled form — requires `:` or `=` so "branche de mon dépôt" does not capture. */
+const EXPLICIT_BRANCH_LABELED_CAPTURE_RE =
+  /(?:branche|branch)(?:\s+[^\s:;`'"=]{1,24}){0,5}\s*[:=]\s*[`"']?([A-Za-z0-9][A-Za-z0-9._/\-]*)[`"']?/gi;
+
 function extractPublicationPathHint(userText: string): string | null {
   return userText.match(PATH_RE)?.[1] ?? null;
 }
@@ -100,13 +108,33 @@ export function looksLikeTechnicalBranchName(token: string): boolean {
 export function extractAllPublicationBranchHints(userText: string): string[] {
   const text = userText.normalize("NFKC");
   const candidates: string[] = [];
-  for (const m of text.matchAll(EXPLICIT_BRANCH_CAPTURE_RE)) {
-    const raw = m[1];
-    if (raw && looksLikeTechnicalBranchName(raw)) candidates.push(raw);
+  for (const re of [EXPLICIT_BRANCH_CAPTURE_RE, EXPLICIT_BRANCH_LABELED_CAPTURE_RE]) {
+    re.lastIndex = 0;
+    for (const m of text.matchAll(re)) {
+      const raw = m[1];
+      if (raw && looksLikeTechnicalBranchName(raw)) candidates.push(raw);
+    }
   }
   return [...new Set(candidates)];
 }

+/**
+ * Publication head branch explicitly named by the Pilote, when distinct from the base.
+ * Returns null when only the base is named or when no technical name is present
+ * (auto-generation of publicationBranch remains legitimate).
+ */
+export function extractExplicitPublicationBranch(input: {
+  userText: string;
+  baseBranch?: string | null;
+}): string | null {
+  const base = (input.baseBranch ?? "main").trim() || "main";
+  const hints = extractAllPublicationBranchHints(input.userText);
+  const nonBase = hints.filter((h) => h !== base);
+  if (nonBase.length === 1) return nonBase[0] ?? null;
+  if (nonBase.length > 1) return null; // ambiguous — caller must refuse, not invent
+  return null;
+}
+
 /**
  * Extract a single explicit technical branch name from USER text.
  * Returns null for new-branch intent without a name, natural-language
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index 50b5a4ad..2a95ddba 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -348,6 +348,8 @@ export async function preparePublicationForMission(input: {
   clientIntentKey: string;
   targetPath: string | null;
   targetBranch: string | null;
+  /** Explicit publication head when the Pilote named one (never silently replaced). */
+  publicationBranch?: string | null;
 }): Promise<
   | {
       ok: true;
@@ -357,6 +359,7 @@ export async function preparePublicationForMission(input: {
       idempotent?: boolean;
       repositoryId: string;
       targetPath: string;
+      publicationBranch: string;
     }
   | { ok: false; code: string; message: string }
 > {
@@ -396,6 +399,7 @@ export async function preparePublicationForMission(input: {
       repositoryId,
       targetPath,
       targetBranch,
+      publicationBranch: input.publicationBranch ?? null,
       correlationKey: keys.publication,
     });
     return {
@@ -406,6 +410,7 @@ export async function preparePublicationForMission(input: {
       idempotent: "idempotent" in prepared ? Boolean(prepared.idempotent) : false,
       repositoryId,
       targetPath,
+      publicationBranch: prepared.plan.publicationBranch,
     };
   } catch (e) {
     if (e instanceof StudioError) {
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index a735a127..38fb10c6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -120,6 +120,10 @@ import {
   type MissionProjection,
 } from "./mission-continuity";
 import { admitConversationalPublicationMandate } from "./conversation-publication-authority";
+import {
+  extractAllPublicationBranchHints,
+  extractExplicitPublicationBranch,
+} from "./conversation-publication-mandate-guards";
 import {
   admitConversationalMergeMandate,
   extractPositivelyRequestedPrNumbers,
@@ -2842,6 +2846,38 @@ export async function postUserMessageAndNora(
         revisionNumber: pubTarget.revisionNumber,
       };
     } else if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
+      const baseBranch = (missionIntent.targetBranch ?? "main").trim() || "main";
+      const branchHints = extractAllPublicationBranchHints(content);
+      const nonBaseBranchHints = [...new Set(branchHints.filter((b) => b !== baseBranch))];
+      if (nonBaseBranchHints.length > 1) {
+        steps.push({
+          id: "d7_prepare",
+          capabilityId: "d7.prepare_publication",
+          status: "PENDING",
+          correlationKey: missionKeys.publication,
+          documentId: pubTarget.documentId,
+          revisionId: pubTarget.revisionId,
+          reason: "AMBIGUOUS_BRANCH",
+        });
+        missionProjection = {
+          clientIntentKey,
+          status: "AWAITING_CLARIFICATION",
+          goalSummary: "Publication Git — branches contradictoires à clarifier",
+          steps,
+          restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
+        };
+        publicationEffectView = {
+          attempted: true,
+          outcome: "AWAITING_CLARIFICATION",
+          reason: "Plusieurs branches de publication distinctes de la base — précision requise.",
+          documentTitle: pubTarget.title,
+          revisionNumber: pubTarget.revisionNumber,
+        };
+      } else {
+      const explicitPublicationBranch = extractExplicitPublicationBranch({
+        userText: content,
+        baseBranch,
+      });
       const prepared = await preparePublicationForMission({
         pilotId,
         projectId: ctx.project.id,
@@ -2849,7 +2885,8 @@ export async function postUserMessageAndNora(
         revisionId: pubTarget.revisionId,
         clientIntentKey,
         targetPath: effectiveTargetPath,
-        targetBranch: missionIntent.targetBranch,
+        targetBranch: baseBranch,
+        publicationBranch: explicitPublicationBranch,
       });
       if (prepared.ok) {
         const prepStep: MissionProjection["steps"][number] = {
@@ -2877,7 +2914,8 @@ export async function postUserMessageAndNora(
           clientTurnKey,
           missionClientIntentKey: clientIntentKey,
           qualifiedPath: effectiveTargetPath,
-          qualifiedBranch: missionIntent.targetBranch,
+          // Bind the publication head the Pilote named (not the base branch).
+          qualifiedBranch: explicitPublicationBranch,
           wantsPublishFromQual: missionIntent.wantsPublish,
         });

@@ -3046,6 +3084,7 @@ export async function postUserMessageAndNora(
           revisionNumber: pubTarget.revisionNumber,
         };
       }
+      } // end unambiguous-branch prepare path
     }

     if (continueFailedAfterEffect && missionProjection) {
diff --git a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
index ec7e4237..2977338f 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
@@ -40,7 +40,7 @@ import {
   buildUnifiedDiff,
   inspectionFingerprint,
   mergeEffectFingerprint,
-  publicationBranchFromCorrelationKey,
+  resolvePublicationBranchName,
   publicationEffectFingerprint,
   revisionContentFingerprint,
 } from "./fingerprint";
@@ -792,6 +792,12 @@ export async function preparePublication(input: {
   repositoryId: string;
   targetPath: string;
   targetBranch: string;
+  /**
+   * Optional explicit publication head branch mandated by the Pilote.
+   * When set, must be used as-is (no silent substitution).
+   * When omitted, a deterministic branch is derived from correlationKey.
+   */
+  publicationBranch?: string | null;
   correlationKey: string;
   steps?: PublicationStep[] | null;
 }) {
@@ -857,7 +863,21 @@ export async function preparePublication(input: {
     proposedContent: rev.contentMarkdown,
   });

-  const publicationBranch = publicationBranchFromCorrelationKey(input.correlationKey);
+  const resolvedBranch = resolvePublicationBranchName({
+    correlationKey: input.correlationKey,
+    targetBranch: input.targetBranch,
+    publicationBranch: input.publicationBranch,
+  });
+  if (!resolvedBranch.ok) {
+    throw new StudioError(
+      "INVALID_REQUEST",
+      resolvedBranch.reason === "SAME_AS_BASE"
+        ? "Branche de publication identique à la base — préciser une branche distincte ou omettre le nom"
+        : "Nom de branche de publication invalide",
+      { exposeMessage: true },
+    );
+  }
+  const publicationBranch = resolvedBranch.publicationBranch;
   const effectProviderMode = resolveConfiguredEffectProviderMode();
   const plan: PublicationPlan = {
     documentId: input.documentId,
diff --git a/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts b/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
index d3c1ebd1..c793edc3 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/fingerprint.ts
@@ -18,6 +18,32 @@ export function publicationBranchFromCorrelationKey(correlationKey: string): str
   return `sfia/pub-${slug}`;
 }

+/**
+ * Resolve publication head for preparePublication.
+ * Explicit Pilote name wins; otherwise deterministic correlation derivation.
+ * Never silently replaces an explicit name with a hash-derived branch.
+ */
+export function resolvePublicationBranchName(input: {
+  correlationKey: string;
+  targetBranch: string;
+  publicationBranch?: string | null;
+}): { ok: true; publicationBranch: string } | { ok: false; reason: "INVALID_BRANCH" | "SAME_AS_BASE" } {
+  const explicit = input.publicationBranch?.trim() || null;
+  if (explicit) {
+    if (!/^[A-Za-z0-9][A-Za-z0-9._/\-]{0,199}$/.test(explicit)) {
+      return { ok: false, reason: "INVALID_BRANCH" };
+    }
+    if (explicit === input.targetBranch.trim()) {
+      return { ok: false, reason: "SAME_AS_BASE" };
+    }
+    return { ok: true, publicationBranch: explicit };
+  }
+  return {
+    ok: true,
+    publicationBranch: publicationBranchFromCorrelationKey(input.correlationKey),
+  };
+}
+
 export function inspectionFingerprint(input: {
   revisionId: string;
   revisionFingerprint: string;
```

## 7. Tests (création / extension)
```diff
commit 24a8fa9e7ad6cc2fa961496a915f13cea542d4a8
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 11:26:02 2026 +0100

    fix(next): honor explicit publication branch in D7 prepare

    Stop silent correlation-hash substitution when the pilot names a publication head; keep auto-generation only when no explicit branch is mandated, and refuse plan drift before effect.

diff --git a/projects/sfia-studio-next/web/tests/unit/conversation-publication-authority.test.ts b/projects/sfia-studio-next/web/tests/unit/conversation-publication-authority.test.ts
index b7dfc5ed..3692a4fe 100644
--- a/projects/sfia-studio-next/web/tests/unit/conversation-publication-authority.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/conversation-publication-authority.test.ts
@@ -1,12 +1,15 @@
 import { describe, expect, it } from "vitest";
 import {
   assertPublicationMandateCoversPlan,
+  extractAllPublicationBranchHints,
+  extractExplicitPublicationBranch,
   extractPublicationBranchHint,
   looksLikeTechnicalBranchName,
   userStatementRefusesPublication,
   userStatementRequestsMergeOnly,
   userStatementRequestsUnnamedNewBranch,
 } from "@/domains/conversation/conversation-publication-mandate-guards";
+import { publicationBranchFromCorrelationKey } from "@/domains/execution/fingerprint";
 import type { PublicationPlan } from "@/domains/execution/types";

 function plan(overrides: Partial<PublicationPlan> = {}): PublicationPlan {
@@ -173,3 +176,66 @@ describe("P0-01 branch hint extraction", () => {
     expect(covered.ok).toBe(true);
   });
 });
+
+describe("E08 WRITE mandate — explicit publication branch (R12 incident)", () => {
+  const r12User = `Dans le projet CampusFlow, je t'autorise à effectuer une nouvelle publication documentaire réelle sur GitHub pour notre recette.
+
+Publie le document Studio « RECETTE ML4 — Publication documentaire R12 ».
+
+Destination :
+- Dépôt : \`mcleland147/chantiers360\`
+- Branche à créer : \`sfia/pub-r12-recette-20261122\`
+- Chemin : \`docs/recette-studio-next/publication-documentaire.md\`
+- Base : \`main\`
+
+Cette autorisation est limitée à ces opérations et à cette cible. Ne fusionne aucune PR.`;
+
+  it("extracts Branche à créer labeled form (incident reproduction)", () => {
+    expect(extractAllPublicationBranchHints(r12User)).toContain("sfia/pub-r12-recette-20261122");
+    expect(extractPublicationBranchHint(r12User)).toBe("sfia/pub-r12-recette-20261122");
+    expect(
+      extractExplicitPublicationBranch({ userText: r12User, baseBranch: "main" }),
+    ).toBe("sfia/pub-r12-recette-20261122");
+  });
+
+  it("PLAN_DRIFT when plan used correlation-derived branch instead of mandated name", () => {
+    const corr = "pub:mission:turn-8ca19672-e702-489c-b6b8-dd03ed3a5049";
+    const derived = publicationBranchFromCorrelationKey(corr);
+    expect(derived).toBe("sfia/pub-91996c24991c351b");
+    const drift = assertPublicationMandateCoversPlan({
+      userStatement: r12User,
+      qualifiedPath: "docs/recette-studio-next/publication-documentaire.md",
+      qualifiedBranch: "sfia/pub-r12-recette-20261122",
+      plan: plan({
+        targetPath: "docs/recette-studio-next/publication-documentaire.md",
+        targetBranch: "main",
+        publicationBranch: derived,
+      }),
+    });
+    expect(drift.ok).toBe(false);
+    if (!drift.ok) expect(drift.reasonCode).toBe("PLAN_DRIFT");
+  });
+
+  it("covers plan when publicationBranch matches the mandated name", () => {
+    const covered = assertPublicationMandateCoversPlan({
+      userStatement: r12User,
+      qualifiedPath: "docs/recette-studio-next/publication-documentaire.md",
+      qualifiedBranch: "sfia/pub-r12-recette-20261122",
+      plan: plan({
+        targetPath: "docs/recette-studio-next/publication-documentaire.md",
+        targetBranch: "main",
+        publicationBranch: "sfia/pub-r12-recette-20261122",
+      }),
+    });
+    expect(covered.ok).toBe(true);
+  });
+
+  it("keeps auto-generation legitimate when no publication head is named", () => {
+    expect(
+      extractExplicitPublicationBranch({
+        userText: "Publie ce document sur une nouvelle branche du repo chemin docs/a.md",
+        baseBranch: "main",
+      }),
+    ).toBeNull();
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/publication-branch-mandate.test.ts b/projects/sfia-studio-next/web/tests/unit/publication-branch-mandate.test.ts
new file mode 100644
index 00000000..b86e384f
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/publication-branch-mandate.test.ts
@@ -0,0 +1,61 @@
+import { describe, expect, it } from "vitest";
+import {
+  publicationBranchFromCorrelationKey,
+  resolvePublicationBranchName,
+} from "@/domains/execution/fingerprint";
+import { extractExplicitPublicationBranch } from "@/domains/conversation/conversation-publication-mandate-guards";
+
+describe("preparePublication branch selection contract", () => {
+  it("uses explicit Pilote branch without correlation substitution", () => {
+    const corr = "pub:mission:turn-8ca19672-e702-489c-b6b8-dd03ed3a5049";
+    const mandated = "sfia/pub-r12-recette-20261122";
+    const out = resolvePublicationBranchName({
+      correlationKey: corr,
+      targetBranch: "main",
+      publicationBranch: mandated,
+    });
+    expect(out.ok).toBe(true);
+    if (out.ok) {
+      expect(out.publicationBranch).toBe(mandated);
+      expect(out.publicationBranch).not.toBe(publicationBranchFromCorrelationKey(corr));
+    }
+  });
+
+  it("auto-generates from correlationKey when no explicit head is named", () => {
+    const corr = "pub:mission:turn-demo";
+    const out = resolvePublicationBranchName({
+      correlationKey: corr,
+      targetBranch: "main",
+      publicationBranch: null,
+    });
+    expect(out.ok).toBe(true);
+    if (out.ok) {
+      expect(out.publicationBranch).toBe(publicationBranchFromCorrelationKey(corr));
+      expect(out.publicationBranch.startsWith("sfia/pub-")).toBe(true);
+    }
+  });
+
+  it("refuses explicit branch identical to base", () => {
+    const out = resolvePublicationBranchName({
+      correlationKey: "pub:mission:x",
+      targetBranch: "main",
+      publicationBranch: "main",
+    });
+    expect(out.ok).toBe(false);
+    if (!out.ok) expect(out.reason).toBe("SAME_AS_BASE");
+  });
+
+  it("end-to-end: USER labeled branch → prepare input → not correlation hash", () => {
+    const user = `- Branche à créer : \`sfia/pub-r12-recette-20261122\`\n- Base : \`main\``;
+    const explicit = extractExplicitPublicationBranch({ userText: user, baseBranch: "main" });
+    expect(explicit).toBe("sfia/pub-r12-recette-20261122");
+    const corr = "pub:mission:turn-8ca19672-e702-489c-b6b8-dd03ed3a5049";
+    const out = resolvePublicationBranchName({
+      correlationKey: corr,
+      targetBranch: "main",
+      publicationBranch: explicit,
+    });
+    expect(out).toEqual({ ok: true, publicationBranch: "sfia/pub-r12-recette-20261122" });
+    expect(publicationBranchFromCorrelationKey(corr)).toBe("sfia/pub-91996c24991c351b");
+  });
+});
```

## 8. Documentation
```diff
commit 24a8fa9e7ad6cc2fa961496a915f13cea542d4a8
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 11:26:02 2026 +0100

    fix(next): honor explicit publication branch in D7 prepare

    Stop silent correlation-hash substitution when the pilot names a publication head; keep auto-generation only when no explicit branch is mandated, and refuse plan drift before effect.

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index a042b97f..4a9e4d5c 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,22 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-WRITE-MANDATE-BRANCH
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 11:30 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — correctif mandat publication : branche explicite |
+| Type | INC / QA · CRITICAL · **NO RELEASE** |
+| Cause | `preparePublication` substituait toujours un hash correlation ; regex « Branche à créer » incomplète |
+| Fix | `resolvePublicationBranchName` + wiring mission/D6 guards |
+| Incident | CampusFlow R12 · `efx_d8f8e550…` · PR#20 (historique inchangé) |
+| Preuves | unit **848/848** · PG accept01 **11/11** · tsc PASS |
+| RECETTE | **INCHANGÉE** `7115e932` / `OwQrOGhC9rwk_Dtj31OcM` |
+| Cutover | **NONE** — GO cutover Morris distinct requis |
+| Push projet / mutation GitHub | **NONE** |
+| STABLE | NOT AVAILABLE |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-CORRECTIVE-CUTOVER

 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index 3e93cbab..c73a1903 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -128,6 +128,14 @@
 - Manifeste : `manifeste-cutover-recette-e07-plus-e08.md` (section courante).
 - **UAT Morris** : reprise ciblée GIT-UAT-03 / GIT-UAT-04 · GIT-UAT-08 hors mandat · Nora LIVE E2E **NOT PROVEN** par smoke.

+### Correctif mandat WRITE — branche explicite (2026-11-22)
+- **Incident RECETTE** : USER `msg_e2cd5e69…` autorisait `sfia/pub-r12-recette-20261122` ; plan/effet `efx_d8f8e550…` / PR#20 ont exécuté `sfia/pub-91996c24991c351b` (hash `correlationKey`).
+- **Cause prouvée** : (1) `preparePublication` forçait toujours `publicationBranchFromCorrelationKey` — **premier point de divergence** au prepare D7 ; (2) extraction « Branche à créer : \`…\` » manquante → garde D6 `assertPublicationMandateCoversPlan` ne déclenchait pas `PLAN_DRIFT`.
+- **Correction** : `resolvePublicationBranchName` (explicite > hash) ; `preparePublication({ publicationBranch })` ; wiring mission/service ; regex labeled ; `extractExplicitPublicationBranch`.
+- Auto-génération **conservée** si aucune tête explicite.
+- RECETTE runtime **INCHANGÉ** (`7115e932` / `OwQrOGhC9rwk_Dtj31OcM`) — pas de cutover ce cycle ; PR#19/#20 **non mutées**.
+- Preuves : unit **848** PASS · PG accept01 **11** PASS · tsc PASS · GitHub REAL mutation **NONE**.
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
index 87a8ff66..8dabfbb5 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
@@ -131,6 +131,8 @@ Checks : dual 403 → `ACCESS_DENIED` (retry `withReadToken`) ; un seul endpoint
 | Merge | `d7.merge_publication` | mandat **distinct** | DET ; REAL **BLOQUÉ** |
 | Create branch / commit / PR | steps plan | sous publication | DET/PG |

+**Invariant branche (correctif 2026-11-22)** : si le Pilote nomme explicitement une branche de publication (`Branche à créer : …`), `preparePublication` doit l’utiliser telle quelle ; sinon dérivation `correlationKey`. Une divergence plan↔mandat → `PLAN_DRIFT` avant effet. Auto-génération conservée si aucune tête explicite. Incident PR#20 = preuve historique (non réécrit).
+
 ## Faits D8 oracle PR#19 (RECETTE DB — non mutés)

 | Champ | Valeur |
```

## 9. Stat commit
```
commit 24a8fa9e7ad6cc2fa961496a915f13cea542d4a8
Author: Morris Cleland <morris@macbook-air.home>
Date:   Sun Nov 22 11:26:02 2026 +0100

    fix(next): honor explicit publication branch in D7 prepare

    Stop silent correlation-hash substitution when the pilot names a publication head; keep auto-generation only when no explicit branch is mandated, and refuse plan drift before effect.

 .../construction/delivery-history.md               | 16 ++++++
 .../ensemble-08-git-et-publications/as-built.md    |  8 +++
 .../matrice-capacites-git-chaine-2026-11-22.md     |  2 +
 .../[projectId]/git/publications/prepare/route.ts  |  2 +
 .../conversation-publication-mandate-guards.ts     | 34 ++++++++++-
 .../src/domains/conversation/mission-continuity.ts |  5 ++
 .../web/src/domains/conversation/service.ts        | 43 +++++++++++++-
 .../web/src/domains/execution/effect-service.ts    | 24 +++++++-
 .../web/src/domains/execution/fingerprint.ts       | 26 +++++++++
 .../conversation-publication-authority.test.ts     | 66 ++++++++++++++++++++++
 .../unit/git-read-hardening-corrective.test.ts     |  6 ++
 .../tests/unit/publication-branch-mandate.test.ts  | 61 ++++++++++++++++++++
 12 files changed, 286 insertions(+), 7 deletions(-)
```

## 10. Tests exécutés

| Suite | Résultat | Preuve |
| --- | --- | --- |
| tsc --noEmit | PASS | DET |
| vitest unit | **848/848** | DET |
| conversation-publication-authority + publication-branch-mandate | 20 PASS | DET |
| mission-continuity-accept01.pg | **11/11** (DEV :5433) | DET/PG |
| Nora LIVE / GitHub REAL WRITE | **NOT PROVEN** / **NONE** | — |

## 11. Fake / Real

| Capacité | Niveau |
| --- | --- |
| Cause + chronologie DB RECETTE | REAL BOUNDARY PROVEN (lecture) |
| Correctif branche explicite | DETERMINISTIC PROVEN |
| Non-régression accept01 | DETERMINISTIC PROVEN |
| Retest WRITE REAL post-cutover | **NOT PROVEN** — prochain GO Morris |

## 12. Proposition mise à jour PV (branche docs — non poussée ici)

- WRITE-01 PASS
- WRITE-02 PASS
- WRITE-03 N/A contextuel
- WRITE-04 PARTIAL : publication REAL prouvée, écart de branche (cause corrigée en candidat local)
- WRITE-05 PARTIAL : réconciliation externe OK, conformité interne non prouvée à l’époque
- WRITE-06 PASS fonctionnel (reprise)
- WRITE-07 non testé
- WRITE-08 PASS fonctionnel

## 13. Retests Morris proposés (après cutover distinct)

1. Nouvelle publication sandbox avec « Branche à créer : `sfia/pub-…-explicit` » → branche GitHub **identique**.
2. Sans nom de branche → auto `sfia/pub-<hash16>` conservé.
3. Branche contradictoire / collision → refus avant effet.
4. PR#20 historique **non réécrite**.

## 14. Verdict

**READY FOR CHATGPT REVIEW — E08 WRITE MANDATE CORRECTIVE**

Instruction ChatGPT : relire depuis Git `sfia-review-handoff/latest-chatgpt-review.md`, vérifier chronologie D6/D7/D9 et diffs, puis préparer un **GO cutover distinct** sur `24a8fa9e` / `ece43cdb` / `qCQGWLYYGb0ZCA4BLfzBi` si la revue est favorable.
