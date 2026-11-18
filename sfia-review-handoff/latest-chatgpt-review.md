# SFIA Review Pack Full — UAT-03 FIX RECETTE

**Date:** 2026-11-18
**Cycle:** 8 Delivery + 9 QA (intégré)
**Profil:** Critical
**GO Morris:** EXPLICITE — correctif detail 5000 + obs durable + build + cutover RECETTE même cycle
**Typologie:** INC / PATCH
**Macro-lot:** ML4D Ensemble 05
**Git distant produit:** aucun push/PR/merge
**Promotion STABLE / Gate C / ADOPTED:** interdits

## Verdict final unique

`UAT-03 FIX DEPLOYED — RECETTE READY FOR MORRIS RETEST`

Statut UAT-03: `FIX DEPLOYED — MORRIS USER RETEST PENDING`

---

## 1. Git Truth Check

```
=== GIT TRUTH CHECK 2026-11-18T16:37:43Z ===
repo=https://github.com/mcleland147/sfia-workspace.git
branch=sfia/next-ml4d-ensemble05-composition-recette-candidate
HEAD=90c3e59f4a355b463ea047cc45486906bde15680
tree=1c7fa402d6029ee6c0b5582ba8d0a2b94f5bcceb
main=4b1a058050ae81d56cb6d96b88e8a57380799a86
ba1e55ec=ba1e55ece782eb9f2bbfad9336ed346de1acf037
--- status ---
## sfia/next-ml4d-ensemble05-composition-recette-candidate
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/00-vitest-summary.txt
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-mobile-430x932.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-nominal-1680x970.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s1-simple-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s2-diagnostic-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s3-provenance-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s4-trajectory-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s5-composite-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-s5-composite-mobile-430.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-viewer-enlarged-1440.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/runtime-visual-comparison-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/architecture-canonical-sections-strategy-a.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-convergence-status.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-corrective.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-status.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v05.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v06.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c-matrix-strategy-a-v07-proposal.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c2-08-browser-error-recovery-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/c2-runtime-substance-complement-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/complete-elk-delivery-20261118/
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/complete-graphical-composition-evidence-manifest.json
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/corrective-runtime-comparison-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/corrective-runtime-relations-list-1440.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/cv-t-matrix-composition-adaptative.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-final-consolidation-20261118/
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-recette-delivery-20261118/
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/00-ledger.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/01-recette-manifest.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/02-db-before.json
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/02-morris-reprise.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/03-db-after.json
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/03-smoke-and-confidentiality.md
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/04-sha-build-identity.txt
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/05-login-served.html
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/06-served-build-comment.txt
?? projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/07-runtime-env-redacted.txt
--- worktrees ---
/Users/morris/Projects/sfia-workspace                                                   ba831b25 [sfia/next-pilotage-decisions-delivery]
/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023                              426bd34a [sfia/review-handoff]
/Users/morris/Projects/sfia-studio-next-recette-ml1-c3                                  0db58be8 (detached HEAD)
/Users/morris/Projects/sfia-studio-next-recette-ml2-pr659                               54fc4e9c (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l1-a09-audit-port-decoupling               0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d0-decision-readiness                   0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-local-oa-cutover                     d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-d2-readiness                            1a380f22 (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5-l2-q0-readonly                             94c7a30d (detached HEAD)
/Users/morris/Projects/sfia-workspace-akg-m5a-product-architecture-convergence          0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-delivery-p6-she-execute                           f1fc1af4 [delivery/sfia-studio-p6-single-human-execute]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-positive-admission-r24            c683d761 [docs/akg-m5-abd-positive-admission-r24]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-abd-postmerge-truth-sync-01           cd2020c8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d0                                 90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l2-d2-postmerge-truth-sync            241335ee (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s1-post-merge-roadmap-sync         266459c4 [docs/akg-m5-l3-s1-post-merge-roadmap-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3-s2-postmerge-r24-current           f884dda1 (detached HEAD)
/Users/morris/Projects/sfia-workspace-docs-akg-m5-l3s2-r24-postmerge-capitalization     cf940d84 [docs/akg-m5-l3s2-r24-postmerge-capitalization]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-option-c-c14-r24-truth-sync       6e60d839 [docs/akg-m5-nap-option-c-c14-r24-truth-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-nap-ux-630-postmerge-truth-sync       979a33ad [docs/akg-m5-nap-ux-630-postmerge-truth-sync]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-postmerge-convergence-p0              3a6b5e82 [docs/akg-m5-postmerge-convergence-p0]
/Users/morris/Projects/sfia-workspace-docs-akg-m5-target-journey-requalification        80cae2f1 [docs/akg-m5-target-journey-requalification]
/Users/morris/Projects/sfia-workspace-docs-next-ml4c-documentary-gate-20261112          889edd51 [docs/next-ml4c-documentary-gate-20261112]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-ep-s2-08-proof-01                     485ec3cb [feat/akg-m5-ep-s2-08-proof-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l1-a09                                0cb05b75 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1                                 d98b3930 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d1-o01                             90bd0064 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-activation-prep-bounded         cdc9909d [feat/akg-m5-l2-d2-activation-prep-bounded]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l2-d2-local-oa-cutover                4647983a [feat/akg-m5-l2-d2-local-oa-cutover]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s1-generic-det-integration         de1fa7ae [feat/akg-m5-l3-s1-generic-det-integration]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity        73f0166c [feat/akg-m5-l3-s2-generic-proof-continuity]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3s2-orion-nora-coherence-corr-01     b0ce8413 [feat/akg-m5-l3s2-orion-nora-coherence-corr-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-lumen-cog-prepare-corr-01             32207a38 (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr              1c3a8d9e [feat/akg-m5-nora-adaptive-presentation]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nap-test16-coverage-corr-01           e37d3969 [feat/akg-m5-nap-test16-coverage-corr-01]
/Users/morris/Projects/sfia-workspace-feat-akg-m5-nora-adaptive-presentation            1c3a8d9e (detached HEAD)
/Users/morris/Projects/sfia-workspace-feat-akg-m5-remove-repository-binding-docs-write  ffc033a7 [feat/akg-m5-remove-repository-binding-docs-write]
/Users/morris/Projects/sfia-workspace-l1-a09-delivery                                   6176a9d3 [feat/akg-m5-l1-a09-audit-port-decoupling]
/Users/morris/Projects/sfia-workspace-ml3-rct02-correctifs                              03b38e5d [sfia/next-ml3-rct02-live-remediation]
/Users/morris/Projects/sfia-workspace-ml3-recette-build-61fe295b                        61fe295b (detached HEAD)
/Users/morris/Projects/sfia-workspace-ml3-recette-build-ba831b25                        ba831b25 (detached HEAD)
/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a                        d646d42a (detached HEAD)
/Users/morris/Projects/sfia-workspace-ml4c-cp2-t2-diag-20261111                         2416e2ee (detached HEAD)
/Users/morris/Projects/sfia-workspace-ml4c-q1-freeze-d936da81                           d936da81 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-g2-figma-evidence                            f0d59bc8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-g4-construction                              ee6d11e9 [feat/next-convergence-ux-g4-construction]
/Users/morris/Projects/sfia-workspace-next-g4-fix-postmerge-ci                          0b5326d6 [fix/next-g4-postmerge-pilotage-ci-stability]
/Users/morris/Projects/sfia-workspace-next-g4-postmerge-ebf3d150                        ebf3d150 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-g4-recette-build-29535d07                    29535d07 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-intent-continuity-dev                        fb4eaf9f [integrate/next-ml4-nora-pr-readiness-20261110]
/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration                        d7f1507a [fix/next-ml4-chat-first-d4-provenance-20261109]
/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-2416e2ee                   2416e2ee (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-67bf6b0b                   67bf6b0b (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-771844fd                   771844fd (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-8ba77730                   8ba77730 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-93da44be                   93da44be (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-974b0030                   974b0030 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-a2c5e9f8                   a2c5e9f8 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4-recette-build-d7f1507a                   d7f1507a (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4c-closure-678-navfix                      bb21d24c (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-11f7077e                  11f7077e (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81                  d936da81 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-20fb41ba       20fb41ba (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3       cb638613 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-a30e75c7       a30e75c7 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-208aaa40       208aaa40 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-34a5e102       34a5e102 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f       90c3e59f (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-ba1e55ec       ba1e55ec (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-e224d627       e224d627 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-bd8e1672         bd8e1672 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-cd091385         cd091385 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-sas-nora-recette-build-ec7405f3         ec7405f3 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116                    90c3e59f [sfia/next-ml4d-ensemble05-composition-recette-candidate]
/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-recette-build-a77a3a2bf7b9        a77a3a2b (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ux004-recette-build-b05dacf47983        b05dacf4 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-ml4d-ux004-recette-build-bc8785683c30        bc878568 (detached HEAD)
/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112                     11f7077e [fix/next-semantic-intent-convergence-20261112]
/Users/morris/Projects/sfia-workspace-p6-she-greenfield-hqa-c9abdbc3                    c9abdbc3 (detached HEAD)
/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-campaign-3020                     7dd49ecd (detached HEAD)
/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-fresh-live-qa-01                  cd2020c8 (detached HEAD)
--- staged ---
--- unstaged (stat limited) ---
 .tmp-sfia-review/chatgpt-review.md                 | 274 ++++++++++-----------
 .../construction/delivery-history.md               |  13 +-
 .../00-vitest-summary.txt                          |  39 ++-
 .../runtime-mobile-430x932.png                     | Bin 69557 -> 69409 bytes
 .../runtime-nominal-1680x970.png                   | Bin 193944 -> 193635 bytes
 .../runtime-s1-simple-1440.png                     | Bin 164318 -> 164539 bytes
 .../runtime-s2-diagnostic-1440.png                 | Bin 145364 -> 142503 bytes
 .../runtime-s3-provenance-1440.png                 | Bin 175160 -> 61637 bytes
 .../runtime-s4-trajectory-1440.png                 | Bin 155212 -> 101542 bytes
 .../runtime-s5-composite-1440.png                  | Bin 159033 -> 108528 bytes
 .../runtime-s5-composite-mobile-430.png            | Bin 71624 -> 72651 bytes
 .../runtime-viewer-enlarged-1440.png               | Bin 63784 -> 63522 bytes
 .../runtime-visual-comparison-1440.png             | Bin 175160 -> 61646 bytes
 13 files changed, 178 insertions(+), 148 deletions(-)

```

Notes:
- Contrat citait `main=997d4c4e…` ; tip local `main` observé `4b1a0580…` (historique avancé). Candidat figé = `ba1e55ec + fix`, pas `main`.
- ENV-01 blob `14b61f0d…` et versioning blob `8bc93e0f…` : **présent** (`git cat-file -t` = blob).

---

## 2. Cause racine UAT-03

Issue LIVE prouvée (Review Pack `426bd34a` / preuves `ensemble05-uat03-rootcause-live-20261118/`) :
`sequence.steps[].detail` schéma Agent `z.string().max(400)` → Agents SDK `ModelBehaviorError` / Invalid output type en `stream_drain` lorsque Nora émettait des détails >400.

---

## 3. Correction schéma + D3

- Schéma Agent sequence `detail.max(5000)`
- `MAX_SEQUENCE_STEP_DETAIL = 5000`
- Instruction D3 SEQUENCE : plafond 5000 clarifié, pas un objectif, pas d’invention, pas de troncature critique
- Autres familles inchangées

Diff utile visual-composition (vs ba1e55ec) :

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
index 977e0fb9..97e73c99 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
@@ -462,7 +462,8 @@ export const VisualCompositionAgentOutputSchema = z.object({
               z.object({
                 id: z.string().max(64),
                 title: z.string().max(160),
-                detail: z.string().max(400).optional(),
+                // UAT-03: sequence step detail must hold results+vigilance without schema UNKNOWN.
+                detail: z.string().max(5000).optional(),
                 dependsOn: z.array(z.string().max(64)).max(8).optional(),
                 dateLabel: z.string().max(80).nullable().optional(),
                 role: VisualRoleAgentSchema.optional(),
@@ -641,6 +642,8 @@ const MAX_PROS_CONS = 4;
 const MAX_CRITERIA = 6;
 const MAX_PROVENANCE = 4;
 const MAX_STR = 400;
+/** Sequence step detail only — UAT-03 PATCH (not a global reply limit). */
+const MAX_SEQUENCE_STEP_DETAIL = 5000;
 const MAX_TEXT_ALT = 2000;
 const MAX_MD = 4000;
 const MAX_TITLE = 160;
@@ -980,7 +983,7 @@ function parseSequence(
     let detail: string | undefined;
     const detailRaw = asString(s.detail);
     if (detailRaw) {
-      detail = fit(detailRaw, MAX_STR, ctx) ?? undefined;
+      detail = fit(detailRaw, MAX_SEQUENCE_STEP_DETAIL, ctx) ?? undefined;
       if (!detail) return null;
     }
     let dependsOn: string[] | undefined;

```

Instruction D3 (extrait diff nora-adapter) inclus dans section observabilité.

---

## 4. Observabilité durable + confidentialité

Diffs :

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 12f19274..194f678c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1,3 +1,6 @@
+import { createHash } from "node:crypto";
+import { mkdirSync, writeFileSync } from "node:fs";
+import { join } from "node:path";
 import { newId } from "@/lib/ids";
 import {
   buildLevelAClarification,
@@ -154,7 +157,8 @@ export function categorizeProviderError(err: unknown): {
   preContactLikely: boolean;
 } {
   const msg = err instanceof Error ? err.message : String(err);
-  const interrupted = /abort|timeout|AbortError/i.test(msg);
+  // Include "timed out" (ModelTimeoutError) — contiguous "timeout" alone misses it.
+  const interrupted = /abort|timeout|timed\s*out|AbortError/i.test(msg);
   // Only treat as pre-contact when clearly local/config before network.
   const preContactLikely =
     /API key|OPENAI_API_KEY|missing.*key|invalid.*model.*settings|Cannot find module|setTracingDisabled/i.test(
@@ -163,12 +167,17 @@ export function categorizeProviderError(err: unknown): {
   let category = "PROVIDER_ERROR";
   if (interrupted) category = "PROVIDER_INTERRUPTED";
   else if (
-    /json.?schema|invalid schema|structured output|response_format|output_type|unsupported.*schema/i.test(
+    // UAT-03: Agents SDK uses "Invalid output type" (space) — must match, not only output_type.
+    /json.?schema|invalid schema|invalid output type|schema validation|structured output|response_format|output[_\s]?type|unsupported.*schema|ZodError|failed schema/i.test(
       msg,
     )
   ) {
     category = "PROVIDER_SCHEMA_OR_OUTPUT";
-  } else if (/model|not found|does not exist|unauthorized|insufficient|entitlement/i.test(msg)) {
+  } else if (
+    /model (?:not found|does not exist)|unauthorized|insufficient|entitlement|rate[_ ]?limit|429/i.test(
+      msg,
+    )
+  ) {
     category = "PROVIDER_MODEL_OR_ENTITLEMENT";
   } else if (preContactLikely) category = "PROVIDER_PRE_CONTACT_CONFIG";
   return { category, interrupted, preContactLikely };
@@ -176,18 +185,140 @@ export function categorizeProviderError(err: unknown): {

 const SAFE_ERROR_NAME = /^[A-Za-z][A-Za-z0-9_.]{0,80}$/;
 const SAFE_ERROR_CODE = /^[A-Za-z0-9_.-]{1,64}$/;
+const SAFE_ZOD_PATH = /^[A-Za-z0-9_.\[\]()-]{1,160}$/;
 const SENSITIVE_IN_CODE =
   /sk-|ghp_|github_pat_|api[_-]?key|bearer|authorization|password|secret/i;

+/** Agents SDK 0.21 emits this shape from formatFinalOutputTypeError. */
+const INVALID_OUTPUT_PATH_RE =
+  /Invalid output type:\s*final assistant output failed schema validation at "([^"]+)"(?:\s*\(([^)]*)\))?/i;
+
+/**
+ * Stable semantic kind surviving production minify (`new.target.name` → `"h"`).
+ * Derived from message patterns + non-minified names only — never raw bodies.
+ */
+export function classifyProviderErrorKind(err: unknown): string {
+  const msg = err instanceof Error ? err.message : String(err);
+  const name = err instanceof Error ? err.name : "";
+  if (/abort|AbortError/i.test(msg) || name === "AbortError") return "aborted";
+  if (/timeout|timed\s*out|ETIMEDOUT/i.test(msg) || name === "ModelTimeoutError") return "timeout";
+  if (INVALID_OUTPUT_PATH_RE.test(msg) || /failed schema validation/i.test(msg)) {
+    return "structured_output_schema_validation";
+  }
+  if (/Invalid output type/i.test(msg)) return "structured_output_invalid_type";
+  if (/structured output type|no final output/i.test(msg)) return "structured_output_missing";
+  if (/ZodError/i.test(name) || /ZodError/i.test(msg)) return "zod_validation";
+  if (/MaxTurnsExceeded/i.test(name) || /max(?:imum)? turns/i.test(msg)) return "max_turns";
+  if (/ModelRefusal/i.test(name) || /refused to produce/i.test(msg)) return "model_refusal";
+  if (/ModelBehaviorError/i.test(name)) return "model_behavior";
+  if (/ECONNRESET|ENOTFOUND|ECONNREFUSED|fetch failed|socket/i.test(msg)) return "network_transport";
+  if (/\b429\b|rate[_ ]?limit/i.test(msg)) return "rate_limit";
+  if (/\b5\d\d\b/.test(msg)) return "http_5xx";
+  if (SAFE_ERROR_NAME.test(name) && name.length > 2 && !SENSITIVE_IN_CODE.test(name)) {
+    return `named_${name}`;
+  }
+  return "unclassified";
+}
+
+/** Parse Zod/Agents schema path from known safe SDK messages only. */
+export function extractSchemaValidationPath(err: unknown): {
+  zod_issue_path: string | null;
+  validation_rule_hint: string | null;
+} {
+  const msg = err instanceof Error ? err.message : String(err);
+  const m = INVALID_OUTPUT_PATH_RE.exec(msg);
+  if (!m) return { zod_issue_path: null, validation_rule_hint: null };
+  const path = m[1]?.trim() ?? "";
+  const detail = (m[2] ?? "").trim();
+  const zod_issue_path = path && SAFE_ZOD_PATH.test(path) ? path : null;
+  let validation_rule_hint: string | null = null;
+  if (/Too big|at most \d+ character|<=\s*\d+\s*character/i.test(detail)) {
+    validation_rule_hint = "max_length";
+  } else if (/Too small|at least \d+/i.test(detail)) {
+    validation_rule_hint = "min_length_or_count";
+  } else if (/Required|required/i.test(detail)) validation_rule_hint = "required";
+  else if (/Invalid enum|invalid_enum/i.test(detail)) validation_rule_hint = "enum";
+  else if (/Expected|Invalid/i.test(detail)) validation_rule_hint = "type_or_format";
+  else if (detail) validation_rule_hint = "other";
+  return { zod_issue_path, validation_rule_hint };
+}
+
+/**
+ * Bounded fingerprint of error message shape — never stores raw message.
+ * Collapses digits and long quotes; SHA-256 truncated.
+ */
+export function providerErrorMessageFingerprint(err: unknown): string {
+  const msg = err instanceof Error ? err.message : String(err);
+  const normalized = msg
+    .replace(SENSITIVE_IN_CODE, "[REDACTED]")
+    .replace(/"[^"]{24,}"/g, '"…"')
+    .replace(/\d+/g, "N")
+    .replace(/\s+/g, " ")
+    .trim()
+    .slice(0, 240);
+  return createHash("sha256").update(normalized).digest("hex").slice(0, 16);
+}
+
 /**
- * R05 — bounded extraction of provider/SDK diagnostics for OBS allowlist only.
- * Walks nested `cause` up to depth 4. Never returns raw messages, prompts, or bodies.
+ * DEV forensic only (`STUDIO_NORA_DIAG_EPHEMERAL=1`). Writes under `.tmp-sfia-nora-diag/`.
+ * Never enabled on RECETTE/STABLE. Not published to handoff.
+ */
+function writeEphemeralNoraDiag(input: {
+  generationId: string;
+  attemptId: string;
+  phase: string;
+  category: string;
+  diag: ReturnType<typeof extractProviderErrorDiagnostics>;
+  err: unknown;
+}): void {
+  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
+  if (process.env.STUDIO_NORA_DIAG_EPHEMERAL !== "1") return;
+  if (lane !== "DEV") return;
+  try {
+    const dir = join(process.cwd(), ".tmp-sfia-nora-diag");
+    mkdirSync(dir, { recursive: true });
+    const err = input.err;
+    const rawName = err instanceof Error ? err.name : typeof err;
+    const rawMsg = err instanceof Error ? err.message : String(err);
+    const stack = err instanceof Error ? (err.stack ?? "").split("\n").slice(0, 12) : [];
+    const cause =
+      err instanceof Error && err.cause instanceof Error
+        ? { name: err.cause.name, message: err.cause.message.slice(0, 500) }
+        : null;
+    const payload = {
+      ts_utc: new Date().toISOString(),
+      lane,
+      generationId: input.generationId,
+      attemptId: input.attemptId,
+      phase: input.phase,
+      category: input.category,
+      diag: input.diag,
+      raw: {
+        name: rawName,
+        message: rawMsg.slice(0, 2000).replace(SENSITIVE_IN_CODE, "[REDACTED]"),
+        stack,
+        cause,
+      },
+      notice: "EPHEMERAL LOCAL DIAG — do not publish to handoff / do not copy to RECETTE",
+    };
+    const file = join(dir, `${input.generationId}-${input.attemptId}.json`);
+    writeFileSync(file, JSON.stringify(payload, null, 2), { mode: 0o600 });
+  } catch {
+    // Forensic best-effort — never fail the turn path.
+  }
+}
+
+/**
+ * R05 / UAT-03 — bounded extraction of provider/SDK diagnostics for OBS allowlist only.
+ * Walks nested `cause` up to depth 4. Survives minified Error.name. Never returns raw bodies.
  */
 export function extractProviderErrorDiagnostics(
   err: unknown,
   opts?: { phase?: string; streamingDelivered?: boolean; toolCallsObserved?: number },
 ): {
   error_name: string;
+  error_name_stable: string;
+  error_kind: string;
   error_code: string | null;
   http_status: number | null;
   transport_kind: string | null;
@@ -195,6 +326,9 @@ export function extractProviderErrorDiagnostics(
   streaming_delivered: boolean;
   cause_depth: number;
   tool_calls_observed: number | null;
+  zod_issue_path: string | null;
+  validation_rule_hint: string | null;
+  msg_fingerprint: string;
 } {
   let errorName = "Error";
   let errorCode: string | null = null;
@@ -202,11 +336,14 @@ export function extractProviderErrorDiagnostics(
   let transportKind: string | null = null;
   let depth = 0;
   let cur: unknown = err;
+  let bestNamed: string | null = null;

   while (cur != null && depth < 4) {
     if (cur instanceof Error) {
       if (SAFE_ERROR_NAME.test(cur.name) && !SENSITIVE_IN_CODE.test(cur.name)) {
         errorName = cur.name;
+        // Prefer non-minified names (len>2) when walking the cause chain.
+        if (cur.name.length > 2) bestNamed = cur.name;
       }
       const anyErr = cur as Error & {
         code?: unknown;
@@ -237,7 +374,7 @@ export function extractProviderErrorDiagnostics(
         transportKind = "network_transport";
       } else if (/abort|AbortError/i.test(msg) || cur.name === "AbortError") {
         transportKind = "aborted";
-      } else if (/timeout/i.test(msg)) {
+      } else if (/timeout|timed\s*out/i.test(msg)) {
         transportKind = "timeout";
       } else if (httpStatus != null) {
         transportKind = "http";
@@ -257,9 +394,28 @@ export function extractProviderErrorDiagnostics(

   const phase =
     opts?.phase && SAFE_ERROR_CODE.test(opts.phase) ? opts.phase : "provider_stream";
+  const error_kind = classifyProviderErrorKind(err);
+  const schemaBits = extractSchemaValidationPath(err);
+  const error_name_stable =
+    bestNamed ??
+    (error_kind.startsWith("named_")
+      ? error_kind.slice("named_".length)
+      : error_kind === "structured_output_schema_validation" ||
+          error_kind === "structured_output_invalid_type" ||
+          error_kind === "structured_output_missing"
+        ? "ModelBehaviorError"
+        : error_kind === "timeout"
+          ? "ModelTimeoutError"
+          : error_kind === "zod_validation"
+            ? "ZodError"
+            : errorName.length > 2
+              ? errorName
+              : "Error");

   return {
     error_name: errorName,
+    error_name_stable,
+    error_kind,
     error_code: errorCode,
     http_status: httpStatus,
     transport_kind: transportKind,
@@ -268,6 +424,9 @@ export function extractProviderErrorDiagnostics(
     cause_depth: depth,
     tool_calls_observed:
       typeof opts?.toolCallsObserved === "number" ? opts.toolCallsObserved : null,
+    zod_issue_path: schemaBits.zod_issue_path,
+    validation_rule_hint: schemaBits.validation_rule_hint,
+    msg_fingerprint: providerErrorMessageFingerprint(err),
   };
 }

@@ -540,6 +699,20 @@ async function configureSdkTracingSafe(): Promise<void> {
   if (typeof agents.setTracingDisabled === "function") {
     agents.setTracingDisabled(true);
   }
+  // DEV forensic only: Agents SDK redacts Zod details by default (dontLogModelData=true).
+  // Enabling sensitive logging surfaces schema paths into ModelBehaviorError messages —
+  // still scrubbed before OBS/handoff; ephemeral dump captures them locally.
+  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
+  if (process.env.STUDIO_NORA_DIAG_EPHEMERAL === "1" && lane === "DEV") {
+    try {
+      const core = await import("@openai/agents-core");
+      if (typeof core.setSensitiveDataLoggingEnabled === "function") {
+        core.setSensitiveDataLoggingEnabled(true);
+      }
+    } catch {
+      // optional — investigation continues with redacted SDK errors
+    }
+  }
 }

 async function runLiveWithTools(
@@ -609,6 +782,7 @@ async function runLiveWithTools(
     "- resourceReferences (optionnel) = références consultables document/git/external — ce ne sont PAS des choix de poursuite.",
     "- visualComposition (optionnel, WRITE schema conversational-composition-canonical-v1 = sections sémantiques CANONIQUES ; lecture historique : conversational-composition-projection-v1 Strategy B et e05-visual-composition-v1) = source unique de sens pour ce tour : blocs text|comparison|sequence|relations|synthesis. Studio dérive le texte de lecture et la vue graphique depuis la même structure. Relations : layoutHint optionnel dependencies|decisionTree|parallelProcess ; edges.relation optionnel depends_on|condition_true|condition_false|sync|flow ; nodes.laneId pour voies parallèles. Omettre pour une réponse purement narrative (replyDraft seul). N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
     "- COMPARAISON : si tu présentes ≥2 alternatives individualisables (titre + résumé et/ou avantages/limites distincts), émets un bloc kind=comparison avec alternatives[] — ne te contente pas d'un tableau Markdown dans replyDraft. Si des critères homogènes et réellement renseignés existent pour chaque option, ajoute criteria[]. Si les options sont trop incomplètes pour des cartes/matrice fidèles, reste en prose (pas de visualComposition comparison). Ne fabrique jamais de limites ou de cellules pour « remplir » une maquette.",
+    "- SEQUENCE (parcours en étapes) : pour chaque step, detail peut expliquer résultats attendus et points de vigilance de façon utile et proportionnée (plafond schéma 5000 caractères — ce n'est PAS un objectif de longueur). Reste concis quand c'est suffisant ; n'invente rien pour « remplir » ; respecte le schéma ; ne tronque pas une information critique pour tenir dans une maquette.",
     "- RELATIONS — choisir layoutHint sans les confondre : dependencies = prérequis / dépendances orientées / convergence vers un contrôle (edges depends_on|flow, sans exiger laneId) ; parallelProcess = voies d'activités simultanées avec laneId distincts (≥2 voies) et sync seulement si une synchronisation est réelle ; decisionTree = branches conditionnelles (condition_true|condition_false, une racine). Un graphe peut mentionner le parallélisme sans être parallelProcess s'il n'y a pas de voies structurées. Ne transforme pas un simple depends_on en sync.",
     "- Champs de présentation optionnels (si fondés) : lead, headlineAccent, indicators (valeurs connues seulement), strategyCards, checklist, orientation, editorialNote, timeline (uniquement si une temporalité est fournie ou explicitement hypothétique). Ne force pas de graphique. N'invente jamais d'effectifs, de délais ou de chronologie pour « remplir » une maquette.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
@@ -765,6 +939,15 @@ async function runLiveWithTools(
         streamingDelivered,
         toolCallsObserved: toolsUsedOnError,
       });
+      // DEV-only ephemeral forensic dump — never OBS / never RECETTE / never handoff.
+      writeEphemeralNoraDiag({
+        generationId,
+        attemptId: streamAttemptId,
+        phase: diag.error_phase,
+        category: cat.category,
+        diag,
+        err: streamErr,
+      });
       emitObs({
         event_name: "d3.nora.provider_attempt",
         component: "d3.nora_adapter",
@@ -781,6 +964,8 @@ async function runLiveWithTools(
           model_requested: NORA_STUDY_MODEL,
           provider_contacted: contact,
           error_name: diag.error_name,
+          error_name_stable: diag.error_name_stable,
+          error_kind: diag.error_kind,
           error_code: diag.error_code,
           http_status: diag.http_status,
           transport_kind: diag.transport_kind,
@@ -788,6 +973,9 @@ async function runLiveWithTools(
           streaming_delivered: diag.streaming_delivered,
           cause_depth: diag.cause_depth,
           tool_calls_observed: diag.tool_calls_observed,
+          zod_issue_path: diag.zod_issue_path,
+          validation_rule_hint: diag.validation_rule_hint,
+          msg_fingerprint: diag.msg_fingerprint,
         },
       });

diff --git a/projects/sfia-studio-next/web/src/lib/observability.ts b/projects/sfia-studio-next/web/src/lib/observability.ts
index 04003176..393332ad 100644
--- a/projects/sfia-studio-next/web/src/lib/observability.ts
+++ b/projects/sfia-studio-next/web/src/lib/observability.ts
@@ -109,6 +109,8 @@ const META_ALLOWLIST = new Set([
   // Provider attempt diagnostics — codes/names only, never raw exception text.
   "provider_contacted",
   "error_name",
+  "error_name_stable",
+  "error_kind",
   "error_code",
   "http_status",
   "transport_kind",
@@ -116,6 +118,9 @@ const META_ALLOWLIST = new Set([
   "streaming_delivered",
   "cause_depth",
   "tool_calls_observed",
+  "zod_issue_path",
+  "validation_rule_hint",
+  "msg_fingerprint",
   "found",
   "effect_attempted",
 ]);
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
index 657102b3..b2b0218f 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
@@ -50,17 +50,47 @@ describe("FIX-SDK / SDK-RETRY — no automatic second run()", () => {
       toolCallsObserved: 2,
     });
     expect(d.error_name).toBe("APIError");
+    expect(d.error_name_stable).toBe("APIError");
     expect(d.error_code).toBe("rate_limit_exceeded");
     expect(d.http_status).toBe(429);
     expect(d.streaming_delivered).toBe(true);
     expect(d.tool_calls_observed).toBe(2);
     expect(d.cause_depth).toBeGreaterThanOrEqual(1);
+    expect(d.msg_fingerprint).toMatch(/^[a-f0-9]{16}$/);
     const serialized = JSON.stringify(d);
     expect(serialized).not.toContain("sk-abcdef");
     expect(serialized).not.toContain("leaked prompt");
     expect(serialized).not.toContain("wrapper");
   });

+  it("UAT-03 OBS: Invalid output type (space) → SCHEMA_OR_OUTPUT + zod path", () => {
+    const err = new Error(
+      'Invalid output type: final assistant output failed schema validation at "visualComposition.blocks.1.steps.0.detail" (Too big: expected string to have <=400 characters).',
+    );
+    err.name = "h"; // production minify of ModelBehaviorError
+    const c = categorizeProviderError(err);
+    expect(c.category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
+    const d = extractProviderErrorDiagnostics(err, {
+      phase: "stream_drain",
+      streamingDelivered: true,
+      toolCallsObserved: 0,
+    });
+    expect(d.error_kind).toBe("structured_output_schema_validation");
+    expect(d.error_name_stable).toBe("ModelBehaviorError");
+    expect(d.zod_issue_path).toBe("visualComposition.blocks.1.steps.0.detail");
+    expect(d.validation_rule_hint).toBe("max_length");
+    expect(JSON.stringify(d)).not.toContain("Too big");
+  });
+
+  it("UAT-03 OBS: timed out → INTERRUPTED; Model did not produce → not false SCHEMA", () => {
+    expect(categorizeProviderError(new Error("Model call timed out after 120000ms.")).category).toBe(
+      "PROVIDER_INTERRUPTED",
+    );
+    expect(
+      categorizeProviderError(new Error("Model did not produce a final response!")).category,
+    ).toBe("PROVIDER_ERROR");
+  });
+
   it("R05 OBS: redaction drops sensitive simulated strings in deep structures", () => {
     const scrubbed = redactDeep({
       authorization: "Bearer secret",

```

Runtime RECETTE : `STUDIO_NORA_DIAG_EPHEMERAL=''`, FORCE/SIM vides — voir `07-runtime-env-redacted.txt`.

---

## 5. Tests

Nouveau fichier test (contenu complet) :

### projects/sfia-studio-next/web/tests/unit/uat03-sequence-detail-limit.test.ts

```text
import { describe, expect, it } from "vitest";
import {
  VisualCompositionAgentOutputSchema,
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
} from "@/domains/conversation/visual-composition";
import { categorizeProviderError, extractProviderErrorDiagnostics } from "@/domains/conversation/nora-adapter";

function sequencePayload(detail: string) {
  return {
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "text" as const,
        id: "t1",
        markdown: "Intro.",
      },
      {
        kind: "sequence" as const,
        id: "seq1",
        title: "Parcours",
        textAlternative: "Six étapes de déploiement.",
        steps: [
          { id: "s1", title: "Cadrer", detail },
          { id: "s2", title: "Prérequis", detail: "ok" },
        ],
      },
    ],
  };
}

describe("UAT-03 sequence steps[].detail limit 5000", () => {
  it.each([
    ["400", 400],
    ["401", 401],
    ["1200", 1200],
    ["5000", 5000],
  ] as const)("Agent schema accepts detail length %s", (_label, n) => {
    const detail = "x".repeat(n);
    const parsed = VisualCompositionAgentOutputSchema.safeParse(sequencePayload(detail));
    expect(parsed.success).toBe(true);
  });

  it("Agent schema rejects detail length 5001 with controlled failure", () => {
    const detail = "x".repeat(5001);
    const parsed = VisualCompositionAgentOutputSchema.safeParse(sequencePayload(detail));
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      const path = parsed.error.issues[0]?.path.join(".") ?? "";
      expect(path).toContain("detail");
    }
  });

  it("parseVisualComposition accepts long sequence detail within 5000", () => {
    const detail = "y".repeat(4500);
    const parsed = parseVisualComposition(sequencePayload(detail));
    expect(parsed).not.toBeNull();
    expect(parsed?.blocks.some((b) => b.kind === "sequence")).toBe(true);
    const seq = parsed?.blocks.find((b) => b.kind === "sequence");
    if (seq && seq.kind === "sequence") {
      expect(seq.steps[0]?.detail?.length).toBe(4500);
    }
  });

  it("optional detail remains valid when omitted", () => {
    const payload = sequencePayload("short");
    delete (payload.blocks[1] as { steps: Array<{ detail?: string }> }).steps[0].detail;
    const parsed = VisualCompositionAgentOutputSchema.safeParse(payload);
    expect(parsed.success).toBe(true);
  });

  it("relations/synthesis detail max 400 unchanged", () => {
    const relationsBlock = {
      kind: "relations" as const,
      id: "r1",
      title: "Deps",
      textAlternative: "alt",
      nodes: [
        {
          id: "n1",
          label: "A",
          kind: "fact" as const,
          detail: "z".repeat(401),
        },
      ],
      edges: [],
    };
    const bad = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [relationsBlock],
    });
    expect(bad.success).toBe(false);

    const ok = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          ...relationsBlock,
          nodes: [{ ...relationsBlock.nodes[0], detail: "z".repeat(400) }],
        },
      ],
    });
    expect(ok.success).toBe(true);
  });

  it("OBS classifies Too big ≤5000 path as SCHEMA_OR_OUTPUT", () => {
    const err = new Error(
      'Invalid output type: final assistant output failed schema validation at "visualComposition.blocks.1.steps.0.detail" (Too big: expected string to have <=5000 characters).',
    );
    err.name = "h";
    expect(categorizeProviderError(err).category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
    const d = extractProviderErrorDiagnostics(err, {
      phase: "stream_drain",
      streamingDelivered: true,
    });
    expect(d.zod_issue_path).toBe("visualComposition.blocks.1.steps.0.detail");
    expect(d.validation_rule_hint).toBe("max_length");
  });
});

describe("UAT-03 six-step rich sequence shape", () => {
  it("accepts six steps with results+vigilance-sized details", () => {
    const stepDetail =
      "Résultat attendu : prérequis validés. Vigilance : ne pas avancer sans accord métier. " +
      "x".repeat(800);
    const steps = [
      "Cadrer",
      "Prérequis",
      "Configurer",
      "Pilote",
      "Corriger",
      "Généraliser",
    ].map((title, i) => ({
      id: `s${i + 1}`,
      title,
      detail: stepDetail,
    }));
    const parsed = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "seq6",
          title: "Déploiement outil métier",
          textAlternative: "Parcours en six étapes.",
          steps,
        },
      ],
    });
    expect(parsed.success).toBe(true);
    // sanity: each detail under 5000
    expect(stepDetail.length).toBeLessThanOrEqual(5000);
    expect(steps).toHaveLength(6);
  });
});

```

Vitest summary:

### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/00-vitest-summary.txt

```text
◇ injected env (0) from .env.local

 RUN  v3.2.4 /Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116/projects/sfia-studio-next/web

stderr | tests/unit/nora-adapter-corrective.test.ts
◇ injected env (0) from .env.local

SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.115Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_e1a62f78-b6e2-4bd9-8b7b-92be7c9e8c35","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision,search_conversation_history,read_conversation_messages,list_project_git_sources,read_git_file,list_git_refs","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.205Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_e1a62f78-b6e2-4bd9-8b7b-92be7c9e8c35","attempt_id":"att_6b447608-2050-46c8-a8fb-c68be902ab5f","outcome":"PARTIAL","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","maxTurns":6,"model_requested":"gpt-6.1-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.207Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_e1a62f78-b6e2-4bd9-8b7b-92be7c9e8c35","attempt_id":"att_6b447608-2050-46c8-a8fb-c68be902ab5f","outcome":"UNKNOWN","error_category":"PROVIDER_PRE_CONTACT_CONFIG","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","model_requested":"gpt-6.1-sol","provider_contacted":"UNCERTAIN","error_name":"Error","error_name_stable":"Error","error_kind":"named_Error","error_code":null,"http_status":null,"transport_kind":null,"error_phase":"stream_start","streaming_delivered":false,"cause_depth":1,"tool_calls_observed":0,"zod_issue_path":null,"validation_rule_hint":null,"msg_fingerprint":"122d6f53f1911458"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.217Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_e792d89a-c92a-4d91-af89-f31d4cb6ab3e","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision,search_conversation_history,read_conversation_messages,list_project_git_sources,read_git_file,list_git_refs","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.218Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_e792d89a-c92a-4d91-af89-f31d4cb6ab3e","attempt_id":"att_2577ae90-400a-470d-9026-e0ee5ac6b999","outcome":"PARTIAL","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","maxTurns":6,"model_requested":"gpt-6.1-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.218Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_e792d89a-c92a-4d91-af89-f31d4cb6ab3e","attempt_id":"att_2577ae90-400a-470d-9026-e0ee5ac6b999","outcome":"UNKNOWN","error_category":"PROVIDER_ERROR","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","model_requested":"gpt-6.1-sol","provider_contacted":"UNCERTAIN","error_name":"Error","error_name_stable":"Error","error_kind":"network_transport","error_code":null,"http_status":null,"transport_kind":"network_transport","error_phase":"stream_start","streaming_delivered":false,"cause_depth":1,"tool_calls_observed":0,"zod_issue_path":null,"validation_rule_hint":null,"msg_fingerprint":"b2eb66ae74a28f65"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.230Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_f4cee496-6e6c-4119-8e86-aa2c67bb0c17","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision,search_conversation_history,read_conversation_messages,list_project_git_sources,read_git_file,list_git_refs","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.231Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_f4cee496-6e6c-4119-8e86-aa2c67bb0c17","attempt_id":"att_455e8fae-fbd4-43ec-a44f-8f3402c405c2","outcome":"PARTIAL","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","maxTurns":6,"model_requested":"gpt-6.1-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.231Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_f4cee496-6e6c-4119-8e86-aa2c67bb0c17","attempt_id":"att_455e8fae-fbd4-43ec-a44f-8f3402c405c2","outcome":"UNKNOWN","error_category":"PROVIDER_MODEL_OR_ENTITLEMENT","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","model_requested":"gpt-6.1-sol","provider_contacted":"UNCERTAIN","error_name":"Error","error_name_stable":"Error","error_kind":"rate_limit","error_code":null,"http_status":null,"transport_kind":null,"error_phase":"stream_start","streaming_delivered":false,"cause_depth":1,"tool_calls_observed":0,"zod_issue_path":null,"validation_rule_hint":null,"msg_fingerprint":"c40c9ec71dfedd6e"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.240Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_c3c47686-e766-4dc8-a871-9721fffbd56b","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision,search_conversation_history,read_conversation_messages,list_project_git_sources,read_git_file,list_git_refs","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.241Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_c3c47686-e766-4dc8-a871-9721fffbd56b","attempt_id":"att_2d7ac8dd-83a7-41ff-ab2b-7139f8233d2d","outcome":"PARTIAL","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","maxTurns":6,"model_requested":"gpt-6.1-sol","max_turns_note":"maxTurns≠maxProviderCalls"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.241Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.provider_attempt","component":"d3.nora_adapter","generation_id":"gen_c3c47686-e766-4dc8-a871-9721fffbd56b","attempt_id":"att_2d7ac8dd-83a7-41ff-ab2b-7139f8233d2d","outcome":"UNKNOWN","error_category":"PROVIDER_ERROR","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"kind":"stream","model_requested":"gpt-6.1-sol","provider_contacted":"UNCERTAIN","error_name":"Error","error_name_stable":"Error","error_kind":"http_5xx","error_code":null,"http_status":null,"transport_kind":null,"error_phase":"stream_start","streaming_delivered":false,"cause_depth":1,"tool_calls_observed":0,"zod_issue_path":null,"validation_rule_hint":null,"msg_fingerprint":"04427a5b97eed298"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.242Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_28727274-796c-4df3-baef-2cd92db4f5a6","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision,search_conversation_history,read_conversation_messages,list_project_git_sources,read_git_file,list_git_refs","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.244Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_28727274-796c-4df3-baef-2cd92db4f5a6","attempt_id":"att_3dc67d74-bd27-4c23-8cb9-ca1fe82b692d","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.244Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_d7f97751-446c-4a4b-9574-e66a559c8fcc","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision,search_conversation_history,read_conversation_messages,list_project_git_sources,read_git_file,list_git_refs","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.245Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_d7f97751-446c-4a4b-9574-e66a559c8fcc","attempt_id":"att_b7d5f9ac-b51b-4862-bd09-b527f9412d5e","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.245Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.policy_selected","component":"d3.nora_adapter","generation_id":"gen_ab46b983-a931-4879-acc4-d6ce16df5002","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","effort":"medium","model":"gpt-6.1-sol","tools":"search_project_resources,read_project_document_revision,search_conversation_history,read_conversation_messages,list_project_git_sources,read_git_file,list_git_refs","profile_type_detail":"TEST_BOUNDARY"}}
SFIA_OBS {"event_version":1,"ts_utc":"2026-11-18T16:35:43.245Z","lane":"DEV","source_sha":"a77a3a2bf7b942038d771fdcdd2e7a6410330784","build_id":null,"event_name":"d3.nora.fixture_complete","component":"d3.nora_adapter","generation_id":"gen_ab46b983-a931-4879-acc4-d6ce16df5002","attempt_id":"att_2df4320d-763f-42fb-ab77-ad9814ca0f9b","outcome":"SUCCESS","policy_version":"ml2-cog-policy-v2-corrective","profile_type":"TEST_BOUNDARY","meta":{"profile":"analyse","tool_calls":0,"profile_type_detail":"TEST_BOUNDARY"}}
 ✓ tests/unit/nora-adapter-corrective.test.ts (10 tests) 144ms
stderr | tests/unit/uat03-sequence-detail-limit.test.ts
◇ injected env (0) from .env.local

 ✓ tests/unit/uat03-sequence-detail-limit.test.ts (10 tests) 4ms

 Test Files  2 passed (2)
      Tests  20 passed (20)
   Start at  17:35:42
   Duration  1.13s (transform 148ms, setup 18ms, collect 652ms, tests 149ms, environment 0ms, prepare 50ms)


```


---

## 6. Candidat figé / build / RECETTE

| | Parent | Nouveau |
|---|---|---|
| SHA | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` | `90c3e59f4a355b463ea047cc45486906bde15680` |
| Tree | `f94e8eccf912f76506702cd8c19a5e57df9b9ba2` | `1c7fa402d6029ee6c0b5582ba8d0a2b94f5bcceb` |
| Build | `_eeb9Jy2hV242myk86VTu` | `5C3be3-ils1iOmH3qXo4d` |

Commits locaux: `cbfc4577` (fix+obs+preuves) puis `90c3e59f` (exclude docs/evidence du typecheck).

Worktree build: `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f`
LaunchAgent basculé ; ancien WT `…-ba1e55ec` conservé pour rollback.

### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/00-ledger.md

```text
# UAT-03 — Correctif + observabilité + redéploiement RECETTE

**Date :** 2026-11-18
**GO Morris :** correctif + QA + build + cutover RECETTE, même cycle SFIA v2.6
**Profil :** Critical · NO RELEASE · NO PRODUCT PUSH/PR/MERGE · NO STABLE / Gate C / ADOPTED

## Identités

| Élément | Valeur |
| --- | --- |
| Parent RECETTE | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` · tree `f94e8eccf912f76506702cd8c19a5e57df9b9ba2` · build `_eeb9Jy2hV242myk86VTu` |
| Nouveau candidat figé | `90c3e59f4a355b463ea047cc45486906bde15680` · tree `1c7fa402d6029ee6c0b5582ba8d0a2b94f5bcceb` |
| Commits locaux | `cbfc4577` (fix+obs) → `90c3e59f` (exclude evidence `.ts` from typecheck) |
| Build ID | `5C3be3-ils1iOmH3qXo4d` (commentaire HTML Next : `5C3be3_ils1iOmH3qXo4d`) |
| Worktree isolé | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f` |
| LaunchAgent | `com.sfia.studio.next.recette.ml4d-ux004` |
| URL | `http://127.0.0.1:3200` |
| DB | `127.0.0.1:5434` / `sfia_next_recette_ml4` |
| Config | `~/.config/sfia-studio-next/recette/.env.local` (non recopié depuis DEV) |

## Correctif fonctionnel

- `sequence.steps[].detail` : `z.string().max(400)` → `max(5000)` (schéma Agent).
- Parse : `MAX_SEQUENCE_STEP_DETAIL = 5000`.
- Autres familles (`relations` / `synthesis` / etc.) : **inchangées** (plafond 400 conservé où applicable).
- Instructions D3 SEQUENCE : plafond 5000 clarifié ; pas d’objectif de longueur ; pas d’invention ; pas de troncature critique.

## Observabilité durable

- Classification `PROVIDER_SCHEMA_OR_OUTPUT` / `structured_output_schema_validation` / `stream_drain`.
- Métadonnées : `zod_issue_path`, `validation_rule_hint`, fingerprint, generation/attempt ids, provider contacted, stream state.
- Variantes `Invalid output type` / `invalid output_type` sans dépendance exclusive à une classe minifiée.
- `STUDIO_NORA_DIAG_EPHEMERAL` / sensitive dump : **vidés** en RECETTE.

## Qualification

| Contrôle | Résultat |
| --- | --- |
| Vitest bornes detail 400/401/1200/5000/5001 + 6 steps | **PASS** (`uat03-sequence-detail-limit` 10) |
| Vitest obs corrective | **PASS** (`nora-adapter-corrective` 10) |
| `next build` isolé | **PASS** |
| Smoke login / portfolio / projet / fil | **PASS** |
| Isolation Pilot B → projet A | **404** |
| FORCE / SIM / DIAG ephemeral | absents / vides au runtime |
| DB avant/après | `23\|117\|544\|4` **inchangé** |
| UNKNOWN historiques | **conservés** (2 projections UNKNOWN) |

## Réserves reportées (hors périmètre)

- UX-01 — alignement icônes/titres
- UX-02 — titre superflu « Matrice de comparaison »
- Autres réserves matrice V0.9

## Statut UAT-03

`FIX DEPLOYED — MORRIS USER RETEST PENDING`

## Verdict Cursor

`UAT-03 FIX DEPLOYED — RECETTE READY FOR MORRIS RETEST`

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/01-recette-manifest.md

```text
# Manifeste ENV-01 — RECETTE UAT-03 fix

**Non sensible.** Aucun secret.

| Champ | Contenu |
| --- | --- |
| `lane` | `RECETTE` |
| `source_repository` | `mcleland147/sfia-workspace` |
| `source_branch` | `sfia/next-ml4d-ensemble05-composition-recette-candidate` (local only) |
| `base_main_sha` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| `previous_recette_sha` | `ba1e55ece782eb9f2bbfad9336ed346de1acf037` |
| `previous_recette_build` | `_eeb9Jy2hV242myk86VTu` |
| `candidate_sha` | `90c3e59f4a355b463ea047cc45486906bde15680` |
| `candidate_tree` | `1c7fa402d6029ee6c0b5582ba8d0a2b94f5bcceb` |
| `build_identifier` | `5C3be3-ils1iOmH3qXo4d` |
| `product_version` | `NOT AVAILABLE` |
| `candidate_version` | `NOT AVAILABLE` |
| `release_tag` | `N/A` |
| `served_address` | `http://127.0.0.1:3200` |
| `runtime_worktree` | `…/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f` |
| `launch_agent` | `com.sfia.studio.next.recette.ml4d-ux004` |
| `start_script` | `start-recette-ensemble05-90c3e59f.sh` |
| `schema_revision` | inchangé — **aucune migration** |
| `test_data_revision` | counts `projects\|documents\|messages\|users` = `23\|117\|544\|4` avant=après |
| `configuration_fingerprint` | env keys fingerprint `f50f900416e7c57f` (24 keys) — source `~/.config/sfia-studio-next/recette/.env.local` |
| `FORCE_FIXTURE` | forcé vide au démarrage |
| `SIMULATED_PROVIDER` | forcé vide au démarrage |
| `DIAG_EPHEMERAL` | forcé vide au démarrage |
| `quality_evidence` | Vitest 20 PASS (bornes+obs) ; `next build` OK ; smoke login/portfolio/projet/fil PASS ; isolation B→A 404 |
| `known_gaps` | UX-01/UX-02 + réserves V0.9 ; UAT-03 retest Morris pending ; LIVE auto non rejoué |
| `rollback_reference` | `ROLLBACK-TO-ba1e55ec.sh` + backup `~/.config/sfia-studio-next/sfia-recette-backups/ml4d-e05-uat03-fix-20261118-173348` |
| `review_decision` | GO cutover inclus — retest utilisateur Morris |
| `cutover_utc` | `2026-11-18T16:33:48Z` (±) |
| `runtime_pid` | `30371` (next-server) / LaunchAgent parent `30343` |

## Verdict technique

`UAT-03 FIX DEPLOYED — RECETTE READY FOR MORRIS RETEST`

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/02-morris-reprise.md

```text
# Fiche de reprise Morris — UAT-03

## Accès

| | |
| --- | --- |
| URL | **http://127.0.0.1:3200** |
| SHA servi | `90c3e59f4a355b463ea047cc45486906bde15680` |
| Build ID | `5C3be3-ils1iOmH3qXo4d` |
| Lane | RECETTE (LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`) |
| Données | Projet / documents / conversations **conservés** |

## Correctif à retester

Rejouer **UAT-03** : composition `sequence` à **six étapes** avec descriptions `detail` utiles (résultats attendus / vigilances), sans contrainte artificielle à 400 caractères.

Les deux messages historiques `UNKNOWN` restent en place (non réécrits).

## Statut

`FIX DEPLOYED — MORRIS USER RETEST PENDING`
≠ `UAT ACCEPTED` tant que Morris n’a pas validé.

## Rollback

```bash
/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f/ROLLBACK-TO-ba1e55ec.sh
```

Restaure `ba1e55ec` / `_eeb9Jy2hV242myk86VTu`. Aucune modification DB.

## Réserves hors scope

UX-01, UX-02, autres réserves matrice V0.9 — non traitées dans ce correctif.

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/03-smoke-and-confidentiality.md

```text
# Smoke + confidentialité — post-cutover UAT-03

## Smoke

| # | Contrôle | Résultat |
| --- | --- | --- |
| 1 | `GET /login` 200 · build comment `5C3be3_ils1iOmH3qXo4d` | PASS |
| 2 | Runtime env `SFIA_SOURCE_SHA=90c3e59f…` · `SFIA_BUILD_ID=5C3be3-ils1iOmH3qXo4d` · `STUDIO_LANE=RECETTE` | PASS |
| 3 | `FORCE` / `SIM` / `DIAG_EPHEMERAL` vides | PASS |
| 4 | Dev test login Pilot A → portfolio 200 | PASS |
| 5 | Projet `proj_4f0e3d47-…` Travail — fil + « Contexte conservé » | PASS (screenshot) |
| 6 | Projection comparison COMPLETE relue | PASS |
| 7 | 2 projections UNKNOWN historiques intactes | PASS |
| 8 | Pilot B → projet A = 404 | PASS |
| 9 | DB counts avant = après `23\|117\|544\|4` | PASS |
| 10 | Sequence detail bornes Vitest (dont 5000 PASS / 5001 reject) | PASS |

Sequence 6 étapes : qualification **déterministe Vitest** (pas de FORCE/SIM activé sur le runtime RECETTE ; pas de campagne LIVE auto).

## Confidentialité

| Contrôle | Résultat |
| --- | --- |
| Sensitive logging / dump fournisseur | **désactivé** (DIAG ephemeral vide) |
| Observabilité RECETTE | allowlist métadonnées seules |
| Secrets dans preuves | absents (env redacted keys only) |
| `.env.local` DEV → RECETTE | **non recopié** |

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/02-db-before.json

```text
{
  "projects": 23,
  "documents": 117,
  "messages": 544,
  "users": 4
}

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/03-db-after.json

```text
{"projects":23,"documents":117,"messages":544,"users":4}

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/04-sha-build-identity.txt

```text
prev_sha=ba1e55ece782eb9f2bbfad9336ed346de1acf037
prev_tree=f94e8eccf912f76506702cd8c19a5e57df9b9ba2
prev_build=_eeb9Jy2hV242myk86VTu
new_sha=90c3e59f4a355b463ea047cc45486906bde15680
new_tree=1c7fa402d6029ee6c0b5582ba8d0a2b94f5bcceb
new_build=5C3be3-ils1iOmH3qXo4d
new_build_html_comment=5C3be3_ils1iOmH3qXo4d
branch=sfia/next-ml4d-ensemble05-composition-recette-candidate
worktree=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f
backup=/Users/morris/.config/sfia-studio-next/sfia-recette-backups/ml4d-e05-uat03-fix-20261118-173348
rollback=/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-90c3e59f/ROLLBACK-TO-ba1e55ec.sh

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/06-served-build-comment.txt

```text
5C3be3_ils1iOmH3qXo4d

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/07-runtime-env-redacted.txt

```text
SFIA_SOURCE_SHA='90c3e59f4a355b463ea047cc45486906bde15680'
SFIA_BUILD_ID='5C3be3-ils1iOmH3qXo4d'
STUDIO_LANE='RECETTE'
STUDIO_PORT='3200'
NODE_ENV='production'
STUDIO_FORCE_NORA_FIXTURE=''
STUDIO_NORA_SIMULATED_PROVIDER=''
STUDIO_NORA_DIAG_EPHEMERAL=''
STUDIO_GITHUB_ALLOW_MUTATIONS=''

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/08-diffstat-vs-ba1e55ec.txt

```text
 projects/sfia-studio-next/web/.gitignore           |   3 +
 .../web/src/domains/conversation/nora-adapter.ts   | 200 ++++++++++++++++++++-
 .../src/domains/conversation/visual-composition.ts |   7 +-
 .../sfia-studio-next/web/src/lib/observability.ts  |   5 +
 .../web/tests/unit/nora-adapter-corrective.test.ts |  30 ++++
 .../tests/unit/uat03-sequence-detail-limit.test.ts | 155 ++++++++++++++++
 projects/sfia-studio-next/web/tsconfig.json        |   2 +-
 7 files changed, 393 insertions(+), 9 deletions(-)

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/modified-content/nora-adapter-corrective.test.ts.diff

```text
diff --git a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
index 657102b3..b2b0218f 100644
--- a/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/nora-adapter-corrective.test.ts
@@ -50,17 +50,47 @@ describe("FIX-SDK / SDK-RETRY — no automatic second run()", () => {
       toolCallsObserved: 2,
     });
     expect(d.error_name).toBe("APIError");
+    expect(d.error_name_stable).toBe("APIError");
     expect(d.error_code).toBe("rate_limit_exceeded");
     expect(d.http_status).toBe(429);
     expect(d.streaming_delivered).toBe(true);
     expect(d.tool_calls_observed).toBe(2);
     expect(d.cause_depth).toBeGreaterThanOrEqual(1);
+    expect(d.msg_fingerprint).toMatch(/^[a-f0-9]{16}$/);
     const serialized = JSON.stringify(d);
     expect(serialized).not.toContain("sk-abcdef");
     expect(serialized).not.toContain("leaked prompt");
     expect(serialized).not.toContain("wrapper");
   });

+  it("UAT-03 OBS: Invalid output type (space) → SCHEMA_OR_OUTPUT + zod path", () => {
+    const err = new Error(
+      'Invalid output type: final assistant output failed schema validation at "visualComposition.blocks.1.steps.0.detail" (Too big: expected string to have <=400 characters).',
+    );
+    err.name = "h"; // production minify of ModelBehaviorError
+    const c = categorizeProviderError(err);
+    expect(c.category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
+    const d = extractProviderErrorDiagnostics(err, {
+      phase: "stream_drain",
+      streamingDelivered: true,
+      toolCallsObserved: 0,
+    });
+    expect(d.error_kind).toBe("structured_output_schema_validation");
+    expect(d.error_name_stable).toBe("ModelBehaviorError");
+    expect(d.zod_issue_path).toBe("visualComposition.blocks.1.steps.0.detail");
+    expect(d.validation_rule_hint).toBe("max_length");
+    expect(JSON.stringify(d)).not.toContain("Too big");
+  });
+
+  it("UAT-03 OBS: timed out → INTERRUPTED; Model did not produce → not false SCHEMA", () => {
+    expect(categorizeProviderError(new Error("Model call timed out after 120000ms.")).category).toBe(
+      "PROVIDER_INTERRUPTED",
+    );
+    expect(
+      categorizeProviderError(new Error("Model did not produce a final response!")).category,
+    ).toBe("PROVIDER_ERROR");
+  });
+
   it("R05 OBS: redaction drops sensitive simulated strings in deep structures", () => {
     const scrubbed = redactDeep({
       authorization: "Bearer secret",

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/modified-content/nora-adapter.ts.diff

```text
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 12f19274..194f678c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1,3 +1,6 @@
+import { createHash } from "node:crypto";
+import { mkdirSync, writeFileSync } from "node:fs";
+import { join } from "node:path";
 import { newId } from "@/lib/ids";
 import {
   buildLevelAClarification,
@@ -154,7 +157,8 @@ export function categorizeProviderError(err: unknown): {
   preContactLikely: boolean;
 } {
   const msg = err instanceof Error ? err.message : String(err);
-  const interrupted = /abort|timeout|AbortError/i.test(msg);
+  // Include "timed out" (ModelTimeoutError) — contiguous "timeout" alone misses it.
+  const interrupted = /abort|timeout|timed\s*out|AbortError/i.test(msg);
   // Only treat as pre-contact when clearly local/config before network.
   const preContactLikely =
     /API key|OPENAI_API_KEY|missing.*key|invalid.*model.*settings|Cannot find module|setTracingDisabled/i.test(
@@ -163,12 +167,17 @@ export function categorizeProviderError(err: unknown): {
   let category = "PROVIDER_ERROR";
   if (interrupted) category = "PROVIDER_INTERRUPTED";
   else if (
-    /json.?schema|invalid schema|structured output|response_format|output_type|unsupported.*schema/i.test(
+    // UAT-03: Agents SDK uses "Invalid output type" (space) — must match, not only output_type.
+    /json.?schema|invalid schema|invalid output type|schema validation|structured output|response_format|output[_\s]?type|unsupported.*schema|ZodError|failed schema/i.test(
       msg,
     )
   ) {
     category = "PROVIDER_SCHEMA_OR_OUTPUT";
-  } else if (/model|not found|does not exist|unauthorized|insufficient|entitlement/i.test(msg)) {
+  } else if (
+    /model (?:not found|does not exist)|unauthorized|insufficient|entitlement|rate[_ ]?limit|429/i.test(
+      msg,
+    )
+  ) {
     category = "PROVIDER_MODEL_OR_ENTITLEMENT";
   } else if (preContactLikely) category = "PROVIDER_PRE_CONTACT_CONFIG";
   return { category, interrupted, preContactLikely };
@@ -176,18 +185,140 @@ export function categorizeProviderError(err: unknown): {

 const SAFE_ERROR_NAME = /^[A-Za-z][A-Za-z0-9_.]{0,80}$/;
 const SAFE_ERROR_CODE = /^[A-Za-z0-9_.-]{1,64}$/;
+const SAFE_ZOD_PATH = /^[A-Za-z0-9_.\[\]()-]{1,160}$/;
 const SENSITIVE_IN_CODE =
   /sk-|ghp_|github_pat_|api[_-]?key|bearer|authorization|password|secret/i;

+/** Agents SDK 0.21 emits this shape from formatFinalOutputTypeError. */
+const INVALID_OUTPUT_PATH_RE =
+  /Invalid output type:\s*final assistant output failed schema validation at "([^"]+)"(?:\s*\(([^)]*)\))?/i;
+
+/**
+ * Stable semantic kind surviving production minify (`new.target.name` → `"h"`).
+ * Derived from message patterns + non-minified names only — never raw bodies.
+ */
+export function classifyProviderErrorKind(err: unknown): string {
+  const msg = err instanceof Error ? err.message : String(err);
+  const name = err instanceof Error ? err.name : "";
+  if (/abort|AbortError/i.test(msg) || name === "AbortError") return "aborted";
+  if (/timeout|timed\s*out|ETIMEDOUT/i.test(msg) || name === "ModelTimeoutError") return "timeout";
+  if (INVALID_OUTPUT_PATH_RE.test(msg) || /failed schema validation/i.test(msg)) {
+    return "structured_output_schema_validation";
+  }
+  if (/Invalid output type/i.test(msg)) return "structured_output_invalid_type";
+  if (/structured output type|no final output/i.test(msg)) return "structured_output_missing";
+  if (/ZodError/i.test(name) || /ZodError/i.test(msg)) return "zod_validation";
+  if (/MaxTurnsExceeded/i.test(name) || /max(?:imum)? turns/i.test(msg)) return "max_turns";
+  if (/ModelRefusal/i.test(name) || /refused to produce/i.test(msg)) return "model_refusal";
+  if (/ModelBehaviorError/i.test(name)) return "model_behavior";
+  if (/ECONNRESET|ENOTFOUND|ECONNREFUSED|fetch failed|socket/i.test(msg)) return "network_transport";
+  if (/\b429\b|rate[_ ]?limit/i.test(msg)) return "rate_limit";
+  if (/\b5\d\d\b/.test(msg)) return "http_5xx";
+  if (SAFE_ERROR_NAME.test(name) && name.length > 2 && !SENSITIVE_IN_CODE.test(name)) {
+    return `named_${name}`;
+  }
+  return "unclassified";
+}
+
+/** Parse Zod/Agents schema path from known safe SDK messages only. */
+export function extractSchemaValidationPath(err: unknown): {
+  zod_issue_path: string | null;
+  validation_rule_hint: string | null;
+} {
+  const msg = err instanceof Error ? err.message : String(err);
+  const m = INVALID_OUTPUT_PATH_RE.exec(msg);
+  if (!m) return { zod_issue_path: null, validation_rule_hint: null };
+  const path = m[1]?.trim() ?? "";
+  const detail = (m[2] ?? "").trim();
+  const zod_issue_path = path && SAFE_ZOD_PATH.test(path) ? path : null;
+  let validation_rule_hint: string | null = null;
+  if (/Too big|at most \d+ character|<=\s*\d+\s*character/i.test(detail)) {
+    validation_rule_hint = "max_length";
+  } else if (/Too small|at least \d+/i.test(detail)) {
+    validation_rule_hint = "min_length_or_count";
+  } else if (/Required|required/i.test(detail)) validation_rule_hint = "required";
+  else if (/Invalid enum|invalid_enum/i.test(detail)) validation_rule_hint = "enum";
+  else if (/Expected|Invalid/i.test(detail)) validation_rule_hint = "type_or_format";
+  else if (detail) validation_rule_hint = "other";
+  return { zod_issue_path, validation_rule_hint };
+}
+
+/**
+ * Bounded fingerprint of error message shape — never stores raw message.
+ * Collapses digits and long quotes; SHA-256 truncated.
+ */
+export function providerErrorMessageFingerprint(err: unknown): string {
+  const msg = err instanceof Error ? err.message : String(err);
+  const normalized = msg
+    .replace(SENSITIVE_IN_CODE, "[REDACTED]")
+    .replace(/"[^"]{24,}"/g, '"…"')
+    .replace(/\d+/g, "N")
+    .replace(/\s+/g, " ")
+    .trim()
+    .slice(0, 240);
+  return createHash("sha256").update(normalized).digest("hex").slice(0, 16);
+}
+
 /**
- * R05 — bounded extraction of provider/SDK diagnostics for OBS allowlist only.
- * Walks nested `cause` up to depth 4. Never returns raw messages, prompts, or bodies.
+ * DEV forensic only (`STUDIO_NORA_DIAG_EPHEMERAL=1`). Writes under `.tmp-sfia-nora-diag/`.
+ * Never enabled on RECETTE/STABLE. Not published to handoff.
+ */
+function writeEphemeralNoraDiag(input: {
+  generationId: string;
+  attemptId: string;
+  phase: string;
+  category: string;
+  diag: ReturnType<typeof extractProviderErrorDiagnostics>;
+  err: unknown;
+}): void {
+  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
+  if (process.env.STUDIO_NORA_DIAG_EPHEMERAL !== "1") return;
+  if (lane !== "DEV") return;
+  try {
+    const dir = join(process.cwd(), ".tmp-sfia-nora-diag");
+    mkdirSync(dir, { recursive: true });
+    const err = input.err;
+    const rawName = err instanceof Error ? err.name : typeof err;
+    const rawMsg = err instanceof Error ? err.message : String(err);
+    const stack = err instanceof Error ? (err.stack ?? "").split("\n").slice(0, 12) : [];
+    const cause =
+      err instanceof Error && err.cause instanceof Error
+        ? { name: err.cause.name, message: err.cause.message.slice(0, 500) }
+        : null;
+    const payload = {
+      ts_utc: new Date().toISOString(),
+      lane,
+      generationId: input.generationId,
+      attemptId: input.attemptId,
+      phase: input.phase,
+      category: input.category,
+      diag: input.diag,
+      raw: {
+        name: rawName,
+        message: rawMsg.slice(0, 2000).replace(SENSITIVE_IN_CODE, "[REDACTED]"),
+        stack,
+        cause,
+      },
+      notice: "EPHEMERAL LOCAL DIAG — do not publish to handoff / do not copy to RECETTE",
+    };
+    const file = join(dir, `${input.generationId}-${input.attemptId}.json`);
+    writeFileSync(file, JSON.stringify(payload, null, 2), { mode: 0o600 });
+  } catch {
+    // Forensic best-effort — never fail the turn path.
+  }
+}
+
+/**
+ * R05 / UAT-03 — bounded extraction of provider/SDK diagnostics for OBS allowlist only.
+ * Walks nested `cause` up to depth 4. Survives minified Error.name. Never returns raw bodies.
  */
 export function extractProviderErrorDiagnostics(
   err: unknown,
   opts?: { phase?: string; streamingDelivered?: boolean; toolCallsObserved?: number },
 ): {
   error_name: string;
+  error_name_stable: string;
+  error_kind: string;
   error_code: string | null;
   http_status: number | null;
   transport_kind: string | null;
@@ -195,6 +326,9 @@ export function extractProviderErrorDiagnostics(
   streaming_delivered: boolean;
   cause_depth: number;
   tool_calls_observed: number | null;
+  zod_issue_path: string | null;
+  validation_rule_hint: string | null;
+  msg_fingerprint: string;
 } {
   let errorName = "Error";
   let errorCode: string | null = null;
@@ -202,11 +336,14 @@ export function extractProviderErrorDiagnostics(
   let transportKind: string | null = null;
   let depth = 0;
   let cur: unknown = err;
+  let bestNamed: string | null = null;

   while (cur != null && depth < 4) {
     if (cur instanceof Error) {
       if (SAFE_ERROR_NAME.test(cur.name) && !SENSITIVE_IN_CODE.test(cur.name)) {
         errorName = cur.name;
+        // Prefer non-minified names (len>2) when walking the cause chain.
+        if (cur.name.length > 2) bestNamed = cur.name;
       }
       const anyErr = cur as Error & {
         code?: unknown;
@@ -237,7 +374,7 @@ export function extractProviderErrorDiagnostics(
         transportKind = "network_transport";
       } else if (/abort|AbortError/i.test(msg) || cur.name === "AbortError") {
         transportKind = "aborted";
-      } else if (/timeout/i.test(msg)) {
+      } else if (/timeout|timed\s*out/i.test(msg)) {
         transportKind = "timeout";
       } else if (httpStatus != null) {
         transportKind = "http";
@@ -257,9 +394,28 @@ export function extractProviderErrorDiagnostics(

   const phase =
     opts?.phase && SAFE_ERROR_CODE.test(opts.phase) ? opts.phase : "provider_stream";
+  const error_kind = classifyProviderErrorKind(err);
+  const schemaBits = extractSchemaValidationPath(err);
+  const error_name_stable =
+    bestNamed ??
+    (error_kind.startsWith("named_")
+      ? error_kind.slice("named_".length)
+      : error_kind === "structured_output_schema_validation" ||
+          error_kind === "structured_output_invalid_type" ||
+          error_kind === "structured_output_missing"
+        ? "ModelBehaviorError"
+        : error_kind === "timeout"
+          ? "ModelTimeoutError"
+          : error_kind === "zod_validation"
+            ? "ZodError"
+            : errorName.length > 2
+              ? errorName
+              : "Error");

   return {
     error_name: errorName,
+    error_name_stable,
+    error_kind,
     error_code: errorCode,
     http_status: httpStatus,
     transport_kind: transportKind,
@@ -268,6 +424,9 @@ export function extractProviderErrorDiagnostics(
     cause_depth: depth,
     tool_calls_observed:
       typeof opts?.toolCallsObserved === "number" ? opts.toolCallsObserved : null,
+    zod_issue_path: schemaBits.zod_issue_path,
+    validation_rule_hint: schemaBits.validation_rule_hint,
+    msg_fingerprint: providerErrorMessageFingerprint(err),
   };
 }

@@ -540,6 +699,20 @@ async function configureSdkTracingSafe(): Promise<void> {
   if (typeof agents.setTracingDisabled === "function") {
     agents.setTracingDisabled(true);
   }
+  // DEV forensic only: Agents SDK redacts Zod details by default (dontLogModelData=true).
+  // Enabling sensitive logging surfaces schema paths into ModelBehaviorError messages —
+  // still scrubbed before OBS/handoff; ephemeral dump captures them locally.
+  const lane = (process.env.STUDIO_LANE ?? "").trim().toUpperCase();
+  if (process.env.STUDIO_NORA_DIAG_EPHEMERAL === "1" && lane === "DEV") {
+    try {
+      const core = await import("@openai/agents-core");
+      if (typeof core.setSensitiveDataLoggingEnabled === "function") {
+        core.setSensitiveDataLoggingEnabled(true);
+      }
+    } catch {
+      // optional — investigation continues with redacted SDK errors
+    }
+  }
 }

 async function runLiveWithTools(
@@ -609,6 +782,7 @@ async function runLiveWithTools(
     "- resourceReferences (optionnel) = références consultables document/git/external — ce ne sont PAS des choix de poursuite.",
     "- visualComposition (optionnel, WRITE schema conversational-composition-canonical-v1 = sections sémantiques CANONIQUES ; lecture historique : conversational-composition-projection-v1 Strategy B et e05-visual-composition-v1) = source unique de sens pour ce tour : blocs text|comparison|sequence|relations|synthesis. Studio dérive le texte de lecture et la vue graphique depuis la même structure. Relations : layoutHint optionnel dependencies|decisionTree|parallelProcess ; edges.relation optionnel depends_on|condition_true|condition_false|sync|flow ; nodes.laneId pour voies parallèles. Omettre pour une réponse purement narrative (replyDraft seul). N'invente jamais de données manquantes ; chaque bloc graphique DOIT fournir textAlternative. Jamais de HTML/CSS/JS. Ne crée aucun effet métier par la seule présence d'un bloc.",
     "- COMPARAISON : si tu présentes ≥2 alternatives individualisables (titre + résumé et/ou avantages/limites distincts), émets un bloc kind=comparison avec alternatives[] — ne te contente pas d'un tableau Markdown dans replyDraft. Si des critères homogènes et réellement renseignés existent pour chaque option, ajoute criteria[]. Si les options sont trop incomplètes pour des cartes/matrice fidèles, reste en prose (pas de visualComposition comparison). Ne fabrique jamais de limites ou de cellules pour « remplir » une maquette.",
+    "- SEQUENCE (parcours en étapes) : pour chaque step, detail peut expliquer résultats attendus et points de vigilance de façon utile et proportionnée (plafond schéma 5000 caractères — ce n'est PAS un objectif de longueur). Reste concis quand c'est suffisant ; n'invente rien pour « remplir » ; respecte le schéma ; ne tronque pas une information critique pour tenir dans une maquette.",
     "- RELATIONS — choisir layoutHint sans les confondre : dependencies = prérequis / dépendances orientées / convergence vers un contrôle (edges depends_on|flow, sans exiger laneId) ; parallelProcess = voies d'activités simultanées avec laneId distincts (≥2 voies) et sync seulement si une synchronisation est réelle ; decisionTree = branches conditionnelles (condition_true|condition_false, une racine). Un graphe peut mentionner le parallélisme sans être parallelProcess s'il n'y a pas de voies structurées. Ne transforme pas un simple depends_on en sync.",
     "- Champs de présentation optionnels (si fondés) : lead, headlineAccent, indicators (valeurs connues seulement), strategyCards, checklist, orientation, editorialNote, timeline (uniquement si une temporalité est fournie ou explicitement hypothétique). Ne force pas de graphique. N'invente jamais d'effectifs, de délais ou de chronologie pour « remplir » une maquette.",
     "- preparationAssessment = EXPLORING|CLARIFYING|PROPOSAL|BASE_SUFFICIENTE selon compréhension structurée — jamais un score, jamais un GO d'autorité.",
@@ -765,6 +939,15 @@ async function runLiveWithTools(
         streamingDelivered,
         toolCallsObserved: toolsUsedOnError,
       });
+      // DEV-only ephemeral forensic dump — never OBS / never RECETTE / never handoff.
+      writeEphemeralNoraDiag({
+        generationId,
+        attemptId: streamAttemptId,
+        phase: diag.error_phase,
+        category: cat.category,
+        diag,
+        err: streamErr,
+      });
       emitObs({
         event_name: "d3.nora.provider_attempt",
         component: "d3.nora_adapter",
@@ -781,6 +964,8 @@ async function runLiveWithTools(
           model_requested: NORA_STUDY_MODEL,
           provider_contacted: contact,
           error_name: diag.error_name,
+          error_name_stable: diag.error_name_stable,
+          error_kind: diag.error_kind,
           error_code: diag.error_code,
           http_status: diag.http_status,
           transport_kind: diag.transport_kind,
@@ -788,6 +973,9 @@ async function runLiveWithTools(
           streaming_delivered: diag.streaming_delivered,
           cause_depth: diag.cause_depth,
           tool_calls_observed: diag.tool_calls_observed,
+          zod_issue_path: diag.zod_issue_path,
+          validation_rule_hint: diag.validation_rule_hint,
+          msg_fingerprint: diag.msg_fingerprint,
         },
       });


```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/modified-content/observability.ts.diff

```text
diff --git a/projects/sfia-studio-next/web/src/lib/observability.ts b/projects/sfia-studio-next/web/src/lib/observability.ts
index 04003176..393332ad 100644
--- a/projects/sfia-studio-next/web/src/lib/observability.ts
+++ b/projects/sfia-studio-next/web/src/lib/observability.ts
@@ -109,6 +109,8 @@ const META_ALLOWLIST = new Set([
   // Provider attempt diagnostics — codes/names only, never raw exception text.
   "provider_contacted",
   "error_name",
+  "error_name_stable",
+  "error_kind",
   "error_code",
   "http_status",
   "transport_kind",
@@ -116,6 +118,9 @@ const META_ALLOWLIST = new Set([
   "streaming_delivered",
   "cause_depth",
   "tool_calls_observed",
+  "zod_issue_path",
+  "validation_rule_hint",
+  "msg_fingerprint",
   "found",
   "effect_attempted",
 ]);

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/modified-content/uat03-sequence-detail-limit.test.ts

```text
import { describe, expect, it } from "vitest";
import {
  VisualCompositionAgentOutputSchema,
  parseVisualComposition,
  VISUAL_COMPOSITION_SCHEMA,
} from "@/domains/conversation/visual-composition";
import { categorizeProviderError, extractProviderErrorDiagnostics } from "@/domains/conversation/nora-adapter";

function sequencePayload(detail: string) {
  return {
    schemaVersion: VISUAL_COMPOSITION_SCHEMA,
    blocks: [
      {
        kind: "text" as const,
        id: "t1",
        markdown: "Intro.",
      },
      {
        kind: "sequence" as const,
        id: "seq1",
        title: "Parcours",
        textAlternative: "Six étapes de déploiement.",
        steps: [
          { id: "s1", title: "Cadrer", detail },
          { id: "s2", title: "Prérequis", detail: "ok" },
        ],
      },
    ],
  };
}

describe("UAT-03 sequence steps[].detail limit 5000", () => {
  it.each([
    ["400", 400],
    ["401", 401],
    ["1200", 1200],
    ["5000", 5000],
  ] as const)("Agent schema accepts detail length %s", (_label, n) => {
    const detail = "x".repeat(n);
    const parsed = VisualCompositionAgentOutputSchema.safeParse(sequencePayload(detail));
    expect(parsed.success).toBe(true);
  });

  it("Agent schema rejects detail length 5001 with controlled failure", () => {
    const detail = "x".repeat(5001);
    const parsed = VisualCompositionAgentOutputSchema.safeParse(sequencePayload(detail));
    expect(parsed.success).toBe(false);
    if (!parsed.success) {
      const path = parsed.error.issues[0]?.path.join(".") ?? "";
      expect(path).toContain("detail");
    }
  });

  it("parseVisualComposition accepts long sequence detail within 5000", () => {
    const detail = "y".repeat(4500);
    const parsed = parseVisualComposition(sequencePayload(detail));
    expect(parsed).not.toBeNull();
    expect(parsed?.blocks.some((b) => b.kind === "sequence")).toBe(true);
    const seq = parsed?.blocks.find((b) => b.kind === "sequence");
    if (seq && seq.kind === "sequence") {
      expect(seq.steps[0]?.detail?.length).toBe(4500);
    }
  });

  it("optional detail remains valid when omitted", () => {
    const payload = sequencePayload("short");
    delete (payload.blocks[1] as { steps: Array<{ detail?: string }> }).steps[0].detail;
    const parsed = VisualCompositionAgentOutputSchema.safeParse(payload);
    expect(parsed.success).toBe(true);
  });

  it("relations/synthesis detail max 400 unchanged", () => {
    const relationsBlock = {
      kind: "relations" as const,
      id: "r1",
      title: "Deps",
      textAlternative: "alt",
      nodes: [
        {
          id: "n1",
          label: "A",
          kind: "fact" as const,
          detail: "z".repeat(401),
        },
      ],
      edges: [],
    };
    const bad = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [relationsBlock],
    });
    expect(bad.success).toBe(false);

    const ok = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          ...relationsBlock,
          nodes: [{ ...relationsBlock.nodes[0], detail: "z".repeat(400) }],
        },
      ],
    });
    expect(ok.success).toBe(true);
  });

  it("OBS classifies Too big ≤5000 path as SCHEMA_OR_OUTPUT", () => {
    const err = new Error(
      'Invalid output type: final assistant output failed schema validation at "visualComposition.blocks.1.steps.0.detail" (Too big: expected string to have <=5000 characters).',
    );
    err.name = "h";
    expect(categorizeProviderError(err).category).toBe("PROVIDER_SCHEMA_OR_OUTPUT");
    const d = extractProviderErrorDiagnostics(err, {
      phase: "stream_drain",
      streamingDelivered: true,
    });
    expect(d.zod_issue_path).toBe("visualComposition.blocks.1.steps.0.detail");
    expect(d.validation_rule_hint).toBe("max_length");
  });
});

describe("UAT-03 six-step rich sequence shape", () => {
  it("accepts six steps with results+vigilance-sized details", () => {
    const stepDetail =
      "Résultat attendu : prérequis validés. Vigilance : ne pas avancer sans accord métier. " +
      "x".repeat(800);
    const steps = [
      "Cadrer",
      "Prérequis",
      "Configurer",
      "Pilote",
      "Corriger",
      "Généraliser",
    ].map((title, i) => ({
      id: `s${i + 1}`,
      title,
      detail: stepDetail,
    }));
    const parsed = VisualCompositionAgentOutputSchema.safeParse({
      schemaVersion: VISUAL_COMPOSITION_SCHEMA,
      blocks: [
        {
          kind: "sequence",
          id: "seq6",
          title: "Déploiement outil métier",
          textAlternative: "Parcours en six étapes.",
          steps,
        },
      ],
    });
    expect(parsed.success).toBe(true);
    // sanity: each detail under 5000
    expect(stepDetail.length).toBeLessThanOrEqual(5000);
    expect(steps).toHaveLength(6);
  });
});

```
### projects/sfia-studio-next/web/docs/evidence/ensemble-05-travail-nora/ensemble05-uat03-fix-recette-20261118/modified-content/visual-composition.ts.diff

```text
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
index 977e0fb9..97e73c99 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
@@ -462,7 +462,8 @@ export const VisualCompositionAgentOutputSchema = z.object({
               z.object({
                 id: z.string().max(64),
                 title: z.string().max(160),
-                detail: z.string().max(400).optional(),
+                // UAT-03: sequence step detail must hold results+vigilance without schema UNKNOWN.
+                detail: z.string().max(5000).optional(),
                 dependsOn: z.array(z.string().max(64)).max(8).optional(),
                 dateLabel: z.string().max(80).nullable().optional(),
                 role: VisualRoleAgentSchema.optional(),
@@ -641,6 +642,8 @@ const MAX_PROS_CONS = 4;
 const MAX_CRITERIA = 6;
 const MAX_PROVENANCE = 4;
 const MAX_STR = 400;
+/** Sequence step detail only — UAT-03 PATCH (not a global reply limit). */
+const MAX_SEQUENCE_STEP_DETAIL = 5000;
 const MAX_TEXT_ALT = 2000;
 const MAX_MD = 4000;
 const MAX_TITLE = 160;
@@ -980,7 +983,7 @@ function parseSequence(
     let detail: string | undefined;
     const detailRaw = asString(s.detail);
     if (detailRaw) {
-      detail = fit(detailRaw, MAX_STR, ctx) ?? undefined;
+      detail = fit(detailRaw, MAX_SEQUENCE_STEP_DETAIL, ctx) ?? undefined;
       if (!detail) return null;
     }
     let dependsOn: string[] | undefined;

```


---

## 7. Déploiement réellement effectué

1. Backup plist/start → `~/.config/sfia-studio-next/sfia-recette-backups/ml4d-e05-uat03-fix-20261118-173348`
2. `launchctl bootout` ancien agent ba1e55ec
3. Plist → `start-recette-ensemble05-90c3e59f.sh`
4. `launchctl bootstrap` · PID next-server `30371`
5. Smoke PASS · DB inchangée · rollback script prêt

---

## 8. Réserves reportées

UX-01, UX-02, réserves matrice V0.9 — hors périmètre. UNKNOWN historiques non réécrits.

---

## 9. Anti-stub / secrets

Pack généré avec contenus/diffs exploitables. Aucun secret, aucune clé API, aucun dump fournisseur.

---

## VERDICT

`UAT-03 FIX DEPLOYED — RECETTE READY FOR MORRIS RETEST`
