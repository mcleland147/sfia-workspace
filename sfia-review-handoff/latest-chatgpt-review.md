# SFIA Studio Next — Review Pack FULL — E08 Git Chain Fiabilisation

| Champ | Valeur |
| --- | --- |
| Date / fuseau | 2026-11-22 ≈ 07:45 CET (Europe/Paris) |
| Contrat | CRITICAL · INC/EVOL/QA · chaîne Nora↔Studio↔GitHub↔preuves↔Nora |
| Repository | `mcleland147/sfia-workspace` |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| `origin/main` | `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Push projet / PR / merge | **NONE** |
| Review Pack | FULL |
| Handoff | L3 REQUIRED / PUBLISH-IN-CYCLE |

## 1. Git Truth

| Objet | Valeur |
| --- | --- |
| SOURCE_SHA servi | `c67a6ba8bde5c4d818a23fe96d2822a22c050121` |
| TREE | `f54c0aff60af9e47f2f4a181a9d1dcfa75519a95` |
| BUILD_ID | `tEiDqhhGWNipSWO_86ZoG` |
| Avant | `0b5d6c74` / `RSccgxDslwxMhjjTtFo4Z` |
| HTTP | `<!--tEiDqhhGWNipSWO_86ZoG-->` MATCH |
| Boot | REAL · documentary · WRITE `mcleland147/chantiers360` |
| DB | `projects=26 messages=653 documents=117` préservée |
| Backup | `ml4d-e08-pre-chain-cutover-20261122T064246Z-from-0b5d6c74.sql.gz` · restore PASS |
| Rollback | `ROLLBACK-TO-E08-0b5d6c74.sh` |
| Worktree | `…/sfia-workspace-next-ml4d-ensemble08-chain-build-c67a6ba8` |

## 2. Sources / PV

- PV `docs/next-git-recette-20261122@8bc48fac` lu (UAT partiel ; PUB conversationnel ouvert).
- Handoff précédent `8014e031` (PUB-01).
- Décision sémantique Nora + contrats E08 + ENV-01 appliqués.
- UX 11.06 **non** retouchée.

## 3. Oracle REAL READ — PR #19 (sans nouvelle mutation)

| Fait | Valeur | Preuve |
| --- | --- | --- |
| Attempt Studio | `efx_cf6763da-383f-4abd-be6d-ac9ba29b752f` COMPLETED | PG RECETTE |
| Correlation | `pub:mission:turn-67d643cc-1015-4b68-aedf-f3bd53649a00` | PG |
| Decision D6 | `dec_aa4db4e0-83cc-4f9d-9888-379183730db0` | PG |
| Plan path | `references-externes-enseignements-chantiers360.md` | plan_json |
| Plan branch | `sfia/pub-3ab1e0c2eb6b7499` | plan_json |
| Commit | `16f9961ef2ee6d13235e56059313f691521947fd` | result_json + GH |
| PR | #19 OPEN base=main head=pub branch merged=false | `gh api` RR |
| Blob | `7518405f3b8f868ab88d3e257d2489a50e4b338b` | GH contents on pub branch |
| Sur main | **404 NOT_FOUND** | GH contents ref=main |
| D8 ref | `dpr_7f10c5e4-…` status PR_OPEN | PG |
| D8 facts | BRANCH, COMMIT, PR_OPEN (+ htmlUrl) | PG |

Autorité : PR créée dans l'enveloppe publication COMPLETED (OPEN_PR step) — **conforme** au parcours publication ; **≠ merge**. Ne pas fermer.

## 4. Diagnostic causal (incident restitution)

1. Effet REAL + D8 **complets** (hypothèse « résultat D9 incomplet / métadonnées perdues » : **éliminée**).
2. Same-turn `publicationEffectView` = title/revision/hint seulement → **CAUSE** restitution sparse.
3. `terminalFacts` COMPLETED sans path/SHA/PR/liens → **CAUSE** message « publié » sans preuves.
4. Follow-up sans snippets D8 → Nora ne réutilise pas les faits ; READ `main` sans ancrage branche pub → **CAUSE** « ne peut pas confirmer ».
5. Hypothèses éliminées : PROVIDER_REFUSED (effet OK), AUTHORITY_NOT_ADMITTED (dec présent), DISPATCH_NOT_TRIGGERED (COMPLETED), cache stale comme unique cause.

## 5. Corrections

| Fix | Fichier |
| --- | --- |
| Hydratation D7/D8 → view | `publication-effect-view.ts` (**création**) |
| Restitution path/SHA/PR/liens + non-merge | `publication-effect-restitution.ts` |
| Resume COMPLETED hydrate | `mission-continuity.ts` |
| Same-turn COMPLETED hydrate + snippets owner | `service.ts` |
| toolScope sur cognitive continue resume | `mission-continuity.ts` |
| Matrice capacités | `matrice-capacites-git-chaine-2026-11-22.md` |

## 6. Matrice capacités (intégrale)

# Matrice capacités Git — chaîne Nora ↔ Studio ↔ GitHub (2026-11-22)

| Champ | Valeur |
|---|---|
| Date | 2026-11-22 ≈ 07:45 CET |
| Macro-lot | Fiabilisation transverse chaîne Git |
| Profil | CRITICAL · NO RELEASE |
| Oracle REAL READ | `mcleland147/chantiers360` PR #19 · branche `sfia/pub-3ab1e0c2eb6b7499` · commit `16f9961e…` · blob `7518405f…` |

Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ · RE = REAL effect · GAP = écart ouvert · FIX = corrigé ce lot

## Lecture

| Capacité | Owner | Service | Outil Nora | Perm GH | Runtime obs. | D6 | D7 | D9 | D8 | Retour Nora | Test | Preuve | Gap / correction |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Dépôts autorisés | D9/Int | `listProjectGitSources` | `list_project_git_sources` | metadata | CONNECTED+ATTACHED | n/a | n/a | provider | — | tool | unit/PG/e2e | DET/BR | OK UAT |
| Permissions dépôt | D9 | App install + allowlist | via sources | metadata | App + OAuth distincts | n/a | n/a | gate | — | status | unit | DET | OK |
| Branches / HEAD | D9 | `listGitRefs` / `getRefSha` | `list_git_refs` | contents:read | REAL | n/a | n/a | yes | — | tool | S03 unit | DET/RR | OK |
| Arbre fichiers | D9 | `listDirectory` | `list_git_directory` | contents:read | REAL | n/a | n/a | yes | — | tool | e2e | DET/BR | OK |
| Lecture fichier/ref | D9 | `readGitFile` | `read_git_file` | contents:read | REAL ; ref **explicite** | n/a | n/a | yes | — | tool | unit | DET/RR | OK — main 404 ≠ absence sur branche pub |
| Recherche présence | D9 | read + list | tools | contents:read | REAL | n/a | n/a | yes | — | tool+contexte | RR PR#19 | RR | OK |
| Historique commits | D9 | provider | (si exposé) | contents:read | PARTIAL | n/a | n/a | yes | facts | — | — | PARTIAL | hors P0 si non exposé outil |
| PR base/head/status | D9/D8 | provider + `document_publication_refs` | tools + snippets | pull_requests:read | REAL | n/a | n/a | yes | PR_OPEN | snippets+restitution | RR+DET | RR | **FIX** snippets owner |
| Checks/protections | D9 | provider | — | checks | PARTIAL | n/a | gate merge | yes | — | refus merge | unit merge | DET | merge path only |
| Fichier sur main | D9 | `read_git_file` ref=main | tool | contents:read | REAL 404 PR#19 | n/a | n/a | yes | mergeObserved=false | faits owner + tool | RR | RR | **FIX** contexte + restitution « aucune fusion vers main » |

## Écriture

| Capacité | Owner | Service | Outil Nora | Perm GH | Runtime | D6 | D7 | D9 | D8 | Retour Nora | Test | Preuve | Gap / correction |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Création branche | D7/D9 | `dispatchPublication` | via mission | contents:write | documentary+allowlist | mandate | guards | CREATE_BRANCH | BRANCH | restitution | PG SCRIPTED | DET/PG | OK |
| Publication fichier | D7/D9 | PUT contents | mission | contents:write | REAL RECETTE | mandate | guards | COMMIT | COMMIT | **complet** | PG+unit | DET/PG | **FIX** path/SHA/PR/liens |
| Création PR | D7/D9 | open PR | mission | pull_requests:write | REAL | mandate envelope | yes | OPEN_PR | PR_OPEN | PR # + URL | RR+PG | RR | PR#19 corrélée mission ; **FIX** restitution |
| Merge documentaire | D6/D7/D9 | merge mandate | mission | contents+PR | REAL | **séparé** | guards | MERGE | MERGE | mergeObserved | unit/PG | DET | PUBLISH≠MERGE |
| Post-effet verify | D8/D3 | reconcile + facts | snippets+tools | read | REAL | n/a | reconcile | read | facts | fidèle | unit | DET | **FIX** |
| Idempotence | D7 | correlation_key | — | — | — | — | yes | — | — | — | PG | DET | OK |

## Gestion

| Capacité | Owner | Statut |
|---|---|---|
| Rattachement / détachement | Int/D9 | UAT accepté — non rejoué |
| OAuth / App / révocation | Int | UAT accepté — non requalifié sans régression |
| Suppression branche | D7/D9 | UAT accepté — **non rejouée** |

## Identités (constat)

| Id | Rôle | Constat |
|---|---|---|
| A Pilote Studio | session RECETTE | actif |
| B OAuth Pilote | user connection | distinct App |
| C GitHub App | installation | REAL |
| D Provider D9 | App credentials lane | REAL |
| E–F Dépôts / perms | allowlist READ + WRITE ⊂ READ | `chantiers360` WRITE |
| G Rattachement | CampusFlow ↔ chantiers360 | présent |
| H–I Allowlists | READ vs WRITE | séparées |
| J Lane RECETTE | documentary WRITE ON | boot log |
| K–L D6/D7 | mandate `dec_aa4db4e0…` / attempt `efx_cf6763da…` | COMPLETED |
| M Protections | PR open non merged | RR |
| N Révocation | fail-closed | DET préexistant |

## Incident restitution — chaîne causale

1. Effet REAL COMPLETED avec D8 complet (branche, path, SHA, PR #19).
2. Same-turn `publicationEffectView` hydraté uniquement avec title/revision/hint → **sparse**.
3. `terminalFacts` COMPLETED n’émettait path/SHA/PR/liens.
4. Follow-up Nora sans snippets D8 → pas d’ancrage pour READ `main` vs branche pub.
5. **Correction** : `buildPublicationEffectViewFromAttempt` + restitution enrichie + snippets owner + toolScope resume.


## 7. Création intégrale — publication-effect-view.ts

```typescript
/**
 * Hydrate PublicationEffectView from D7/D8 owner payloads — never from LLM prose.
 * Used for same-turn restitution and follow-up verification context.
 */

import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  effectAttempts,
  observedGitFacts,
} from "@/db/schema";
import { buildGitFilePermalink } from "@/domains/integrations/resource-service";
import type {
  PublicationEffectOutcome,
  PublicationEffectView,
} from "./publication-effect-restitution";

export type OwnerPublicationPlan = {
  documentTitle?: string | null;
  revisionNumber?: number | null;
  repositoryFullName?: string | null;
  publicationBranch?: string | null;
  targetPath?: string | null;
  targetBranch?: string | null;
};

export type OwnerPublicationResult = {
  commitSha?: string | null;
  sha?: string | null;
  prNumber?: number | null;
  repositoryFullName?: string | null;
  publicationBranch?: string | null;
  progress?: {
    commitSha?: string | null;
    prNumber?: number | null;
    prCreated?: boolean;
    prOpened?: boolean;
  } | null;
};

export function parseOwnerJson<T>(raw: string | null | undefined): T {
  try {
    return JSON.parse(raw || "{}") as T;
  } catch {
    return {} as T;
  }
}

/**
 * Pure merge of plan + result (+ optional PR htmlUrl) into a COMPLETED/UNKNOWN view.
 */
export function buildPublicationEffectViewFromOwnerPayload(input: {
  outcome: PublicationEffectOutcome;
  attemptId: string;
  decisionId?: string | null;
  reason?: string | null;
  documentTitle?: string | null;
  revisionNumber?: number | null;
  plan: OwnerPublicationPlan;
  result: OwnerPublicationResult;
  prHtmlUrl?: string | null;
  mergeObserved?: boolean;
}): NonNullable<PublicationEffectView> {
  const repo =
    input.result.repositoryFullName?.trim() ||
    input.plan.repositoryFullName?.trim() ||
    null;
  const branch =
    input.result.publicationBranch?.trim() ||
    input.plan.publicationBranch?.trim() ||
    null;
  const path = input.plan.targetPath?.trim() || null;
  const commitSha =
    input.result.commitSha?.trim() ||
    input.result.sha?.trim() ||
    input.result.progress?.commitSha?.trim() ||
    null;
  const prNumber =
    input.result.prNumber ?? input.result.progress?.prNumber ?? null;

  let prUrl = input.prHtmlUrl?.trim() || null;
  if (!prUrl && repo && prNumber != null) {
    prUrl = `https://github.com/${repo}/pull/${prNumber}`;
  }

  let fileUrl: string | null = null;
  if (repo && commitSha && path) {
    fileUrl = buildGitFilePermalink(repo, commitSha, path);
  }

  return {
    attempted: true,
    outcome: input.outcome,
    reason: input.reason ?? null,
    documentTitle: input.documentTitle ?? input.plan.documentTitle ?? null,
    revisionNumber: input.revisionNumber ?? input.plan.revisionNumber ?? null,
    repositoryFullName: repo,
    publicationBranch: branch,
    targetPath: path,
    baseBranch: input.plan.targetBranch?.trim() || null,
    commitSha,
    prNumber,
    prUrl,
    fileUrl,
    mergeObserved: input.mergeObserved === true,
    attemptId: input.attemptId,
    decisionId: input.decisionId ?? null,
  };
}

/**
 * Load attempt + publication ref + PR_OPEN fact → PublicationEffectView.
 */
export async function buildPublicationEffectViewFromAttempt(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  outcome: PublicationEffectOutcome;
  documentTitle?: string | null;
  revisionNumber?: number | null;
  decisionId?: string | null;
  reason?: string | null;
}): Promise<NonNullable<PublicationEffectView> | null> {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) return null;

  const plan = parseOwnerJson<OwnerPublicationPlan>(row.planJson);
  const result = parseOwnerJson<OwnerPublicationResult>(row.resultJson);

  const ref = (
    await db
      .select({
        ref: documentPublicationRefs,
        fullName: authorizedRepositories.fullName,
      })
      .from(documentPublicationRefs)
      .innerJoin(
        authorizedRepositories,
        eq(documentPublicationRefs.repositoryId, authorizedRepositories.id),
      )
      .where(eq(documentPublicationRefs.effectAttemptId, input.attemptId))
      .limit(1)
  )[0];

  if (ref?.ref.targetPath && !plan.targetPath) {
    plan.targetPath = ref.ref.targetPath;
  }
  if (ref?.fullName && !plan.repositoryFullName) {
    plan.repositoryFullName = ref.fullName;
  }
  if (ref?.ref.headSha && !result.commitSha) {
    result.commitSha = ref.ref.headSha;
  }
  if (ref?.ref.prNumber != null && result.prNumber == null) {
    result.prNumber = ref.ref.prNumber;
  }
  try {
    const detail = JSON.parse(ref?.ref.detailJson || "{}") as {
      publicationBranch?: string;
    };
    if (detail.publicationBranch && !plan.publicationBranch) {
      plan.publicationBranch = detail.publicationBranch;
    }
  } catch {
    /* keep */
  }

  const prFact = (
    await db
      .select()
      .from(observedGitFacts)
      .where(
        and(
          eq(observedGitFacts.attemptId, input.attemptId),
          eq(observedGitFacts.factKind, "PR_OPEN"),
        ),
      )
      .limit(1)
  )[0];
  let prHtmlUrl: string | null = null;
  if (prFact?.detailJson) {
    try {
      const d = JSON.parse(prFact.detailJson) as { htmlUrl?: string };
      prHtmlUrl = d.htmlUrl?.trim() || null;
    } catch {
      prHtmlUrl = null;
    }
  }

  const mergeFact = (
    await db
      .select({ id: observedGitFacts.id })
      .from(observedGitFacts)
      .where(
        and(
          eq(observedGitFacts.attemptId, input.attemptId),
          eq(observedGitFacts.factKind, "MERGE"),
        ),
      )
      .limit(1)
  )[0];

  return buildPublicationEffectViewFromOwnerPayload({
    outcome: input.outcome,
    attemptId: input.attemptId,
    decisionId: input.decisionId ?? row.decisionId,
    reason: input.reason,
    documentTitle: input.documentTitle,
    revisionNumber: input.revisionNumber,
    plan,
    result,
    prHtmlUrl,
    mergeObserved: Boolean(mergeFact),
  });
}

/** Bound owner snippets for Nora follow-up verification (no secrets). */
export function formatPublicationOwnerFactsSnippets(
  pubs: Array<{
    repositoryFullName: string;
    targetPath: string;
    publicationBranch: string | null;
    targetBranch: string;
    headSha: string | null;
    prNumber: number | null;
    publicationStatus: string;
    effectStatus: string | null;
    mergeObserved: boolean;
    prStatusLabel: string;
  }>,
  limit = 3,
): string[] {
  return pubs.slice(0, limit).map((p) => {
    const branch = p.publicationBranch?.trim() || "(branche publication inconnue)";
    const sha = p.headSha ? p.headSha.slice(0, 12) : "∅";
    const pr =
      p.prNumber != null
        ? `PR #${p.prNumber} (${p.prStatusLabel})`
        : "aucune PR enregistrée";
    const merge = p.mergeObserved
      ? "fusion D8 observée"
      : `non fusionné vers ${p.targetBranch} (Studio)`;
    return (
      `PUBLICATION_STUDIO repo=${p.repositoryFullName} path=${p.targetPath} ` +
      `branch=${branch} base=${p.targetBranch} commit=${sha} ${pr} ` +
      `effect=${p.effectStatus ?? "∅"} status=${p.publicationStatus} ${merge}`
    );
  });
}

/**
 * Latest COMPLETED publication attempt for a project — for follow-up questions
 * when the thread no longer holds full facts.
 */
export async function loadLatestCompletedPublicationSnippet(input: {
  pilotId: string;
  projectId: string;
}): Promise<string | null> {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.pilotId, input.pilotId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.kind, "GIT_PUBLICATION"),
          eq(effectAttempts.status, "COMPLETED"),
        ),
      )
      .orderBy(desc(effectAttempts.updatedAt))
      .limit(1)
  )[0];
  if (!row) return null;
  const view = await buildPublicationEffectViewFromAttempt({
    pilotId: input.pilotId,
    projectId: input.projectId,
    attemptId: row.id,
    outcome: "COMPLETED",
  });
  if (!view) return null;
  const parts = [
    `PUBLICATION_STUDIO_LATEST attemptId=${view.attemptId}`,
    view.repositoryFullName ? `repo=${view.repositoryFullName}` : null,
    view.publicationBranch ? `branch=${view.publicationBranch}` : null,
    view.targetPath ? `path=${view.targetPath}` : null,
    view.commitSha ? `commit=${view.commitSha}` : null,
    view.prNumber != null ? `pr=#${view.prNumber}` : null,
    view.prUrl ? `prUrl=${view.prUrl}` : null,
    view.fileUrl ? `fileUrl=${view.fileUrl}` : null,
    view.baseBranch
      ? `base=${view.baseBranch} mergeObserved=${view.mergeObserved === true}`
      : null,
  ].filter(Boolean);
  return parts.join(" ");
}

```

## 8. Diffs complets — code conversation

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
index 62ee1c9d..50b5a4ad 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/mission-continuity.ts
@@ -21,6 +21,7 @@ import { extractPublicationBranchHint as extractBranchHintStrict } from "./conve
 import { generateNoraReply } from "./nora-adapter";
 import type { DocumentEffectSummary } from "./document-act";
 import { composePublicationEffectRestitution } from "./publication-effect-restitution";
+import { buildPublicationEffectViewFromAttempt } from "./publication-effect-view";
 import { getDocumentRevision } from "@/domains/document/service";
 
 export type MissionStatus =
@@ -616,18 +617,31 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
   let restitution: string;
   let cognitiveContinue: "DELIVERED" | "CANONICAL" | "SKIPPED" = "CANONICAL";
   if (status === "COMPLETED") {
-    restitution = composePublicationEffectRestitution({
-      priorContent: "",
-      effect: {
-        attempted: true,
+    const hydrated =
+      (await buildPublicationEffectViewFromAttempt({
+        pilotId: input.pilotId,
+        projectId: input.projectId,
+        attemptId: input.attemptId,
         outcome: "COMPLETED",
         documentTitle,
         revisionNumber,
+        decisionId: input.decisionId ?? row.decisionId,
+      })) ?? {
+        attempted: true as const,
+        outcome: "COMPLETED" as const,
+        documentTitle,
+        revisionNumber,
         repositoryFullName: repoName,
         publicationBranch: branchName,
+        targetPath: plan.targetPath?.trim() || null,
+        commitSha,
+        prNumber,
         attemptId: input.attemptId,
         decisionId: input.decisionId ?? row.decisionId,
-      },
+      };
+    restitution = composePublicationEffectRestitution({
+      priorContent: "",
+      effect: hydrated,
     });
   } else if (status === "DISPATCHED" || status === "AMBIGUOUS") {
     restitution = composePublicationEffectRestitution({
@@ -679,6 +693,14 @@ export async function resumeMissionAfterPublicationAuthorize(input: {
           "L'autorisation Pilote a été accordée et l'effet de publication a été traité. Restitue le résultat.",
         factsBlock,
         contextSnippets: [],
+        toolScope: plan.preparationId
+          ? {
+              pilotId: input.pilotId,
+              preparationId: plan.preparationId,
+              projectId: input.projectId,
+              operationId: `mission-resume:${input.attemptId}`,
+            }
+          : undefined,
       });
       if (continued.status === "COMPLETE" && continued.content.trim()) {
         restitution = composePublicationEffectRestitution({
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts
index 394b7b09..32d453fe 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-restitution.ts
@@ -24,6 +24,16 @@ export type PublicationEffectView = {
   revisionNumber?: number | null;
   repositoryFullName?: string | null;
   publicationBranch?: string | null;
+  /** Documentary path on the remote (owner plan / D8). */
+  targetPath?: string | null;
+  /** Base branch of the publication plan (usually main) — not the publication branch. */
+  baseBranch?: string | null;
+  commitSha?: string | null;
+  prNumber?: number | null;
+  prUrl?: string | null;
+  fileUrl?: string | null;
+  /** True only when a MERGE D8 fact exists — never inferred from PR_OPEN. */
+  mergeObserved?: boolean;
   attemptId?: string | null;
   decisionId?: string | null;
 } | null;
@@ -115,13 +125,49 @@ function terminalFacts(effect: NonNullable<PublicationEffectView>): string[] {
 
   switch (effect.outcome) {
     case "COMPLETED": {
+      const path = effect.targetPath?.trim();
+      const sha = effect.commitSha?.trim();
+      const prNumber = effect.prNumber;
+      const prUrl = effect.prUrl?.trim();
+      const fileUrl = effect.fileUrl?.trim();
+      const base = effect.baseBranch?.trim();
       const lines = [
         `Le document ${doc} a été publié` +
           (repo ? ` dans le dépôt \`${repo}\`` : "") +
           (branch ? `, sur la branche \`${branch}\`` : "") +
+          (path ? `, chemin \`${path}\`` : "") +
           ".",
-        "Aucune fusion n'a été effectuée.",
       ];
+      if (sha) {
+        lines.push(`Commit : \`${sha}\`.`);
+      }
+      if (fileUrl) {
+        lines.push(`Fichier : ${fileUrl}`);
+      } else if (repo && branch && path) {
+        lines.push(
+          `Fichier (branche) : https://github.com/${repo}/blob/${branch}/${path}`,
+        );
+      }
+      if (prNumber != null) {
+        lines.push(
+          prUrl
+            ? `Demande de fusion : PR #${prNumber} — ${prUrl}`
+            : `Demande de fusion : PR #${prNumber}.`,
+        );
+      }
+      if (effect.mergeObserved === true) {
+        lines.push(
+          base
+            ? `Une fusion vers \`${base}\` a été observée (fait Studio).`
+            : "Une fusion a été observée (fait Studio).",
+        );
+      } else {
+        lines.push(
+          base
+            ? `Aucune fusion vers \`${base}\` n'a été effectuée.`
+            : "Aucune fusion n'a été effectuée.",
+        );
+      }
       return lines;
     }
     case "REFUSED_WRITE_DISABLED":
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts b/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts
new file mode 100644
index 00000000..e2caa664
--- /dev/null
+++ b/projects/sfia-studio-next/web/src/domains/conversation/publication-effect-view.ts
@@ -0,0 +1,310 @@
+/**
+ * Hydrate PublicationEffectView from D7/D8 owner payloads — never from LLM prose.
+ * Used for same-turn restitution and follow-up verification context.
+ */
+
+import { and, desc, eq } from "drizzle-orm";
+import { db } from "@/db/client";
+import {
+  authorizedRepositories,
+  documentPublicationRefs,
+  effectAttempts,
+  observedGitFacts,
+} from "@/db/schema";
+import { buildGitFilePermalink } from "@/domains/integrations/resource-service";
+import type {
+  PublicationEffectOutcome,
+  PublicationEffectView,
+} from "./publication-effect-restitution";
+
+export type OwnerPublicationPlan = {
+  documentTitle?: string | null;
+  revisionNumber?: number | null;
+  repositoryFullName?: string | null;
+  publicationBranch?: string | null;
+  targetPath?: string | null;
+  targetBranch?: string | null;
+};
+
+export type OwnerPublicationResult = {
+  commitSha?: string | null;
+  sha?: string | null;
+  prNumber?: number | null;
+  repositoryFullName?: string | null;
+  publicationBranch?: string | null;
+  progress?: {
+    commitSha?: string | null;
+    prNumber?: number | null;
+    prCreated?: boolean;
+    prOpened?: boolean;
+  } | null;
+};
+
+export function parseOwnerJson<T>(raw: string | null | undefined): T {
+  try {
+    return JSON.parse(raw || "{}") as T;
+  } catch {
+    return {} as T;
+  }
+}
+
+/**
+ * Pure merge of plan + result (+ optional PR htmlUrl) into a COMPLETED/UNKNOWN view.
+ */
+export function buildPublicationEffectViewFromOwnerPayload(input: {
+  outcome: PublicationEffectOutcome;
+  attemptId: string;
+  decisionId?: string | null;
+  reason?: string | null;
+  documentTitle?: string | null;
+  revisionNumber?: number | null;
+  plan: OwnerPublicationPlan;
+  result: OwnerPublicationResult;
+  prHtmlUrl?: string | null;
+  mergeObserved?: boolean;
+}): NonNullable<PublicationEffectView> {
+  const repo =
+    input.result.repositoryFullName?.trim() ||
+    input.plan.repositoryFullName?.trim() ||
+    null;
+  const branch =
+    input.result.publicationBranch?.trim() ||
+    input.plan.publicationBranch?.trim() ||
+    null;
+  const path = input.plan.targetPath?.trim() || null;
+  const commitSha =
+    input.result.commitSha?.trim() ||
+    input.result.sha?.trim() ||
+    input.result.progress?.commitSha?.trim() ||
+    null;
+  const prNumber =
+    input.result.prNumber ?? input.result.progress?.prNumber ?? null;
+
+  let prUrl = input.prHtmlUrl?.trim() || null;
+  if (!prUrl && repo && prNumber != null) {
+    prUrl = `https://github.com/${repo}/pull/${prNumber}`;
+  }
+
+  let fileUrl: string | null = null;
+  if (repo && commitSha && path) {
+    fileUrl = buildGitFilePermalink(repo, commitSha, path);
+  }
+
+  return {
+    attempted: true,
+    outcome: input.outcome,
+    reason: input.reason ?? null,
+    documentTitle: input.documentTitle ?? input.plan.documentTitle ?? null,
+    revisionNumber: input.revisionNumber ?? input.plan.revisionNumber ?? null,
+    repositoryFullName: repo,
+    publicationBranch: branch,
+    targetPath: path,
+    baseBranch: input.plan.targetBranch?.trim() || null,
+    commitSha,
+    prNumber,
+    prUrl,
+    fileUrl,
+    mergeObserved: input.mergeObserved === true,
+    attemptId: input.attemptId,
+    decisionId: input.decisionId ?? null,
+  };
+}
+
+/**
+ * Load attempt + publication ref + PR_OPEN fact → PublicationEffectView.
+ */
+export async function buildPublicationEffectViewFromAttempt(input: {
+  pilotId: string;
+  projectId: string;
+  attemptId: string;
+  outcome: PublicationEffectOutcome;
+  documentTitle?: string | null;
+  revisionNumber?: number | null;
+  decisionId?: string | null;
+  reason?: string | null;
+}): Promise<NonNullable<PublicationEffectView> | null> {
+  const row = (
+    await db
+      .select()
+      .from(effectAttempts)
+      .where(
+        and(
+          eq(effectAttempts.id, input.attemptId),
+          eq(effectAttempts.projectId, input.projectId),
+          eq(effectAttempts.pilotId, input.pilotId),
+        ),
+      )
+      .limit(1)
+  )[0];
+  if (!row) return null;
+
+  const plan = parseOwnerJson<OwnerPublicationPlan>(row.planJson);
+  const result = parseOwnerJson<OwnerPublicationResult>(row.resultJson);
+
+  const ref = (
+    await db
+      .select({
+        ref: documentPublicationRefs,
+        fullName: authorizedRepositories.fullName,
+      })
+      .from(documentPublicationRefs)
+      .innerJoin(
+        authorizedRepositories,
+        eq(documentPublicationRefs.repositoryId, authorizedRepositories.id),
+      )
+      .where(eq(documentPublicationRefs.effectAttemptId, input.attemptId))
+      .limit(1)
+  )[0];
+
+  if (ref?.ref.targetPath && !plan.targetPath) {
+    plan.targetPath = ref.ref.targetPath;
+  }
+  if (ref?.fullName && !plan.repositoryFullName) {
+    plan.repositoryFullName = ref.fullName;
+  }
+  if (ref?.ref.headSha && !result.commitSha) {
+    result.commitSha = ref.ref.headSha;
+  }
+  if (ref?.ref.prNumber != null && result.prNumber == null) {
+    result.prNumber = ref.ref.prNumber;
+  }
+  try {
+    const detail = JSON.parse(ref?.ref.detailJson || "{}") as {
+      publicationBranch?: string;
+    };
+    if (detail.publicationBranch && !plan.publicationBranch) {
+      plan.publicationBranch = detail.publicationBranch;
+    }
+  } catch {
+    /* keep */
+  }
+
+  const prFact = (
+    await db
+      .select()
+      .from(observedGitFacts)
+      .where(
+        and(
+          eq(observedGitFacts.attemptId, input.attemptId),
+          eq(observedGitFacts.factKind, "PR_OPEN"),
+        ),
+      )
+      .limit(1)
+  )[0];
+  let prHtmlUrl: string | null = null;
+  if (prFact?.detailJson) {
+    try {
+      const d = JSON.parse(prFact.detailJson) as { htmlUrl?: string };
+      prHtmlUrl = d.htmlUrl?.trim() || null;
+    } catch {
+      prHtmlUrl = null;
+    }
+  }
+
+  const mergeFact = (
+    await db
+      .select({ id: observedGitFacts.id })
+      .from(observedGitFacts)
+      .where(
+        and(
+          eq(observedGitFacts.attemptId, input.attemptId),
+          eq(observedGitFacts.factKind, "MERGE"),
+        ),
+      )
+      .limit(1)
+  )[0];
+
+  return buildPublicationEffectViewFromOwnerPayload({
+    outcome: input.outcome,
+    attemptId: input.attemptId,
+    decisionId: input.decisionId ?? row.decisionId,
+    reason: input.reason,
+    documentTitle: input.documentTitle,
+    revisionNumber: input.revisionNumber,
+    plan,
+    result,
+    prHtmlUrl,
+    mergeObserved: Boolean(mergeFact),
+  });
+}
+
+/** Bound owner snippets for Nora follow-up verification (no secrets). */
+export function formatPublicationOwnerFactsSnippets(
+  pubs: Array<{
+    repositoryFullName: string;
+    targetPath: string;
+    publicationBranch: string | null;
+    targetBranch: string;
+    headSha: string | null;
+    prNumber: number | null;
+    publicationStatus: string;
+    effectStatus: string | null;
+    mergeObserved: boolean;
+    prStatusLabel: string;
+  }>,
+  limit = 3,
+): string[] {
+  return pubs.slice(0, limit).map((p) => {
+    const branch = p.publicationBranch?.trim() || "(branche publication inconnue)";
+    const sha = p.headSha ? p.headSha.slice(0, 12) : "∅";
+    const pr =
+      p.prNumber != null
+        ? `PR #${p.prNumber} (${p.prStatusLabel})`
+        : "aucune PR enregistrée";
+    const merge = p.mergeObserved
+      ? "fusion D8 observée"
+      : `non fusionné vers ${p.targetBranch} (Studio)`;
+    return (
+      `PUBLICATION_STUDIO repo=${p.repositoryFullName} path=${p.targetPath} ` +
+      `branch=${branch} base=${p.targetBranch} commit=${sha} ${pr} ` +
+      `effect=${p.effectStatus ?? "∅"} status=${p.publicationStatus} ${merge}`
+    );
+  });
+}
+
+/**
+ * Latest COMPLETED publication attempt for a project — for follow-up questions
+ * when the thread no longer holds full facts.
+ */
+export async function loadLatestCompletedPublicationSnippet(input: {
+  pilotId: string;
+  projectId: string;
+}): Promise<string | null> {
+  const row = (
+    await db
+      .select()
+      .from(effectAttempts)
+      .where(
+        and(
+          eq(effectAttempts.pilotId, input.pilotId),
+          eq(effectAttempts.projectId, input.projectId),
+          eq(effectAttempts.kind, "GIT_PUBLICATION"),
+          eq(effectAttempts.status, "COMPLETED"),
+        ),
+      )
+      .orderBy(desc(effectAttempts.updatedAt))
+      .limit(1)
+  )[0];
+  if (!row) return null;
+  const view = await buildPublicationEffectViewFromAttempt({
+    pilotId: input.pilotId,
+    projectId: input.projectId,
+    attemptId: row.id,
+    outcome: "COMPLETED",
+  });
+  if (!view) return null;
+  const parts = [
+    `PUBLICATION_STUDIO_LATEST attemptId=${view.attemptId}`,
+    view.repositoryFullName ? `repo=${view.repositoryFullName}` : null,
+    view.publicationBranch ? `branch=${view.publicationBranch}` : null,
+    view.targetPath ? `path=${view.targetPath}` : null,
+    view.commitSha ? `commit=${view.commitSha}` : null,
+    view.prNumber != null ? `pr=#${view.prNumber}` : null,
+    view.prUrl ? `prUrl=${view.prUrl}` : null,
+    view.fileUrl ? `fileUrl=${view.fileUrl}` : null,
+    view.baseBranch
+      ? `base=${view.baseBranch} mergeObserved=${view.mergeObserved === true}`
+      : null,
+  ].filter(Boolean);
+  return parts.join(" ");
+}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 6357319f..a735a127 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -134,6 +134,12 @@ import {
   publicationWriteGate,
   type PublicationEffectView,
 } from "./publication-effect-restitution";
+import {
+  buildPublicationEffectViewFromAttempt,
+  formatPublicationOwnerFactsSnippets,
+  loadLatestCompletedPublicationSnippet,
+} from "./publication-effect-view";
+import { listProjectPublications } from "@/domains/integrations/publication-projection-service";
 import {
   confirmPublicationDocumentWithD4,
   resolvePublicationDocumentTarget,
@@ -1053,6 +1059,27 @@ export async function postUserMessageAndNora(
   // Prior-turn D5/D6 facts still arrive via buildNoraPilotageContext projection only.
   const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);
 
+  // E08 — owner publication facts for follow-up verification (branch/path/SHA/PR).
+  // Read-only D8 projection; never invents merge. Bounded to avoid context bloat.
+  const publicationOwnerSnippets: string[] = [];
+  if (ctx.project?.id) {
+    try {
+      const listed = await listProjectPublications(pilotId, ctx.project.id);
+      publicationOwnerSnippets.push(
+        ...formatPublicationOwnerFactsSnippets(listed.publications, 3),
+      );
+      if (publicationOwnerSnippets.length === 0) {
+        const latest = await loadLatestCompletedPublicationSnippet({
+          pilotId,
+          projectId: ctx.project.id,
+        });
+        if (latest) publicationOwnerSnippets.push(latest);
+      }
+    } catch {
+      /* projection unavailable — Nora still has git READ tools when projectId set */
+    }
+  }
+
   let reply;
   try {
     // Heartbeat during long provider work so stale lease does not falsely orphan an active run.
@@ -1063,7 +1090,11 @@ export async function postUserMessageAndNora(
       reply = await generateNoraReply({
         userText: content,
         contextSnippets,
-        knowledgeSnippets: [...knowledgeForNora.snippets, ...docSnippets],
+        knowledgeSnippets: [
+          ...knowledgeForNora.snippets,
+          ...docSnippets,
+          ...publicationOwnerSnippets,
+        ],
         pilotageSnippets: pilotageCtx.snippets,
         // C01: same structured Level A contract for fixture and LIVE — never authority.
         levelASignals: pilotageCtx.levelASignals,
@@ -2859,15 +2890,26 @@ export async function postUserMessageAndNora(
             prepStep.status = "DONE";
             missionStatus = "COMPLETED";
             goalSummary = "Publication Git (mandat conversationnel + effet terminé)";
-            publicationEffectView = {
-              attempted: true,
-              outcome: "COMPLETED",
-              documentTitle: pubTarget.title,
-              revisionNumber: pubTarget.revisionNumber,
-              attemptId: prepared.attemptId,
-              decisionId: mandateAdmission.decisionId,
-              repositoryFullName: missionIntent.repositoryHint,
-            };
+            publicationEffectView =
+              (await buildPublicationEffectViewFromAttempt({
+                pilotId,
+                projectId: ctx.project.id,
+                attemptId: prepared.attemptId,
+                outcome: "COMPLETED",
+                documentTitle: pubTarget.title,
+                revisionNumber: pubTarget.revisionNumber,
+                decisionId: mandateAdmission.decisionId,
+              })) ?? {
+                attempted: true,
+                outcome: "COMPLETED",
+                documentTitle: pubTarget.title,
+                revisionNumber: pubTarget.revisionNumber,
+                attemptId: prepared.attemptId,
+                decisionId: mandateAdmission.decisionId,
+                repositoryFullName: missionIntent.repositoryHint,
+                commitSha: mandateAdmission.missionResume?.commitSha ?? null,
+                prNumber: mandateAdmission.missionResume?.prNumber ?? null,
+              };
           } else if (
             resumeStatus === "DISPATCHED" ||
             resumeStatus === "AMBIGUOUS" ||

```

## 9. Diffs complets — tests + docs

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 5d215f7a..718201ac 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,20 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.
 
+## delivery_id: DELIV-2026-11-22-ENSEMBLE08-GIT-CHAIN-FIABILISATION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-22 ≈ 07:45 CET (Europe/Paris) |
+| Macro-lot | Ensemble 08 — fiabilisation chaîne Git Nora↔Studio↔GitHub |
+| Type | INC / EVOL / QA · CRITICAL · **NO RELEASE** |
+| Oracle | PR #19 chantiers360 · attempt `efx_cf6763da…` · mission `turn-67d643cc…` |
+| Cause | restitution COMPLETED sparse ; follow-up sans faits D8 ; READ main mal contextualisé |
+| Fix | hydrate view depuis D7/D8 · terminalFacts path/SHA/PR/liens · snippets owner · toolScope resume |
+| Preuves | unit restitution+view · PG accept01 enrichi · REAL READ PR#19/blob/main-404 |
+| REAL E2E mutation | **NOT** (aucune nouvelle mutation Cursor) |
+| Push projet | **NONE** |
+
 ## delivery_id: DELIV-2026-11-22-ENSEMBLE08-UAT-GIT-PUB-01-CUTOVER
 
 | Field | Value |
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
index c43d5735..92de32be 100644
--- a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md
@@ -73,6 +73,13 @@
 - **Correction** : reprise clarification publication (pas de S05 self-block) + chemin racine documentaire (`DOCUMENTARY_ROOT`) + mandat D6 avec `missionClientIntentKey` distinct du turn key.
 - Preuve PG : `mission-continuity-accept01` UAT-GIT-PUB-01 PASS (SCRIPTED). REAL E2E : à revalider UAT Morris.
 
+### Chaîne Git restitution / vérif (2026-11-22)
+- **Oracle REAL READ** : PR #19 `mcleland147/chantiers360` · mission `pub:mission:turn-67d643cc-…` · attempt `efx_cf6763da-…` COMPLETED · D8 `dpr_7f10c5e4-…` PR_OPEN · commit `16f9961e…` · blob `7518405f…` · fichier **présent** sur branche pub · **404** sur `main` · PR OPEN non merged.
+- **Cause restitution sparse** : `publicationEffectView` same-turn non hydraté depuis `planJson`/`resultJson`/D8 ; `terminalFacts` COMPLETED sans path/SHA/PR/liens ; follow-up sans snippets owner.
+- **Correction** : `publication-effect-view.ts` (`buildPublicationEffectViewFromAttempt`) · restitution COMPLETED enrichie · snippets `listProjectPublications` avant Nora · `toolScope` sur `cognitiveContinueFromFacts` resume.
+- Matrice : `matrice-capacites-git-chaine-2026-11-22.md`
+- PUBLISH ≠ MERGE conservé (`mergeObserved` uniquement sur fait MERGE).
+
 ## Non livré / réserves
 - Figma G5 géométrie 11.06 (F2) : **PROVEN** en DEV SCRIPTED — acceptation visuelle Morris UAT distincte
 - END-TO-END REAL mutation GitHub : **NOT PROVEN** (sandbox/GO WRITE non nommé ce lot)
diff --git a/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
new file mode 100644
index 00000000..8a2f8ff5
--- /dev/null
+++ b/projects/sfia-studio-next/construction/ensemble-08-git-et-publications/matrice-capacites-git-chaine-2026-11-22.md
@@ -0,0 +1,68 @@
+# Matrice capacités Git — chaîne Nora ↔ Studio ↔ GitHub (2026-11-22)
+
+| Champ | Valeur |
+|---|---|
+| Date | 2026-11-22 ≈ 07:45 CET |
+| Macro-lot | Fiabilisation transverse chaîne Git |
+| Profil | CRITICAL · NO RELEASE |
+| Oracle REAL READ | `mcleland147/chantiers360` PR #19 · branche `sfia/pub-3ab1e0c2eb6b7499` · commit `16f9961e…` · blob `7518405f…` |
+
+Légende preuve : DET = deterministic · PG · BR = browser · RR = REAL READ · RE = REAL effect · GAP = écart ouvert · FIX = corrigé ce lot
+
+## Lecture
+
+| Capacité | Owner | Service | Outil Nora | Perm GH | Runtime obs. | D6 | D7 | D9 | D8 | Retour Nora | Test | Preuve | Gap / correction |
+|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
+| Dépôts autorisés | D9/Int | `listProjectGitSources` | `list_project_git_sources` | metadata | CONNECTED+ATTACHED | n/a | n/a | provider | — | tool | unit/PG/e2e | DET/BR | OK UAT |
+| Permissions dépôt | D9 | App install + allowlist | via sources | metadata | App + OAuth distincts | n/a | n/a | gate | — | status | unit | DET | OK |
+| Branches / HEAD | D9 | `listGitRefs` / `getRefSha` | `list_git_refs` | contents:read | REAL | n/a | n/a | yes | — | tool | S03 unit | DET/RR | OK |
+| Arbre fichiers | D9 | `listDirectory` | `list_git_directory` | contents:read | REAL | n/a | n/a | yes | — | tool | e2e | DET/BR | OK |
+| Lecture fichier/ref | D9 | `readGitFile` | `read_git_file` | contents:read | REAL ; ref **explicite** | n/a | n/a | yes | — | tool | unit | DET/RR | OK — main 404 ≠ absence sur branche pub |
+| Recherche présence | D9 | read + list | tools | contents:read | REAL | n/a | n/a | yes | — | tool+contexte | RR PR#19 | RR | OK |
+| Historique commits | D9 | provider | (si exposé) | contents:read | PARTIAL | n/a | n/a | yes | facts | — | — | PARTIAL | hors P0 si non exposé outil |
+| PR base/head/status | D9/D8 | provider + `document_publication_refs` | tools + snippets | pull_requests:read | REAL | n/a | n/a | yes | PR_OPEN | snippets+restitution | RR+DET | RR | **FIX** snippets owner |
+| Checks/protections | D9 | provider | — | checks | PARTIAL | n/a | gate merge | yes | — | refus merge | unit merge | DET | merge path only |
+| Fichier sur main | D9 | `read_git_file` ref=main | tool | contents:read | REAL 404 PR#19 | n/a | n/a | yes | mergeObserved=false | faits owner + tool | RR | RR | **FIX** contexte + restitution « aucune fusion vers main » |
+
+## Écriture
+
+| Capacité | Owner | Service | Outil Nora | Perm GH | Runtime | D6 | D7 | D9 | D8 | Retour Nora | Test | Preuve | Gap / correction |
+|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
+| Création branche | D7/D9 | `dispatchPublication` | via mission | contents:write | documentary+allowlist | mandate | guards | CREATE_BRANCH | BRANCH | restitution | PG SCRIPTED | DET/PG | OK |
+| Publication fichier | D7/D9 | PUT contents | mission | contents:write | REAL RECETTE | mandate | guards | COMMIT | COMMIT | **complet** | PG+unit | DET/PG | **FIX** path/SHA/PR/liens |
+| Création PR | D7/D9 | open PR | mission | pull_requests:write | REAL | mandate envelope | yes | OPEN_PR | PR_OPEN | PR # + URL | RR+PG | RR | PR#19 corrélée mission ; **FIX** restitution |
+| Merge documentaire | D6/D7/D9 | merge mandate | mission | contents+PR | REAL | **séparé** | guards | MERGE | MERGE | mergeObserved | unit/PG | DET | PUBLISH≠MERGE |
+| Post-effet verify | D8/D3 | reconcile + facts | snippets+tools | read | REAL | n/a | reconcile | read | facts | fidèle | unit | DET | **FIX** |
+| Idempotence | D7 | correlation_key | — | — | — | — | yes | — | — | — | PG | DET | OK |
+
+## Gestion
+
+| Capacité | Owner | Statut |
+|---|---|---|
+| Rattachement / détachement | Int/D9 | UAT accepté — non rejoué |
+| OAuth / App / révocation | Int | UAT accepté — non requalifié sans régression |
+| Suppression branche | D7/D9 | UAT accepté — **non rejouée** |
+
+## Identités (constat)
+
+| Id | Rôle | Constat |
+|---|---|---|
+| A Pilote Studio | session RECETTE | actif |
+| B OAuth Pilote | user connection | distinct App |
+| C GitHub App | installation | REAL |
+| D Provider D9 | App credentials lane | REAL |
+| E–F Dépôts / perms | allowlist READ + WRITE ⊂ READ | `chantiers360` WRITE |
+| G Rattachement | CampusFlow ↔ chantiers360 | présent |
+| H–I Allowlists | READ vs WRITE | séparées |
+| J Lane RECETTE | documentary WRITE ON | boot log |
+| K–L D6/D7 | mandate `dec_aa4db4e0…` / attempt `efx_cf6763da…` | COMPLETED |
+| M Protections | PR open non merged | RR |
+| N Révocation | fail-closed | DET préexistant |
+
+## Incident restitution — chaîne causale
+
+1. Effet REAL COMPLETED avec D8 complet (branche, path, SHA, PR #19).
+2. Same-turn `publicationEffectView` hydraté uniquement avec title/revision/hint → **sparse**.
+3. `terminalFacts` COMPLETED n’émettait path/SHA/PR/liens.
+4. Follow-up Nora sans snippets D8 → pas d’ancrage pour READ `main` vs branche pub.
+5. **Correction** : `buildPublicationEffectViewFromAttempt` + restitution enrichie + snippets owner + toolScope resume.
diff --git a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
index a39a2129..c4e7ce9f 100644
--- a/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/mission-continuity-accept01.pg.test.ts
@@ -335,6 +335,26 @@ describe("ACCEPT-01 mission continuity (PG / SCRIPTED)", () => {
     expect(["COMPLETED", "DISPATCHED", "AMBIGUOUS"]).toContain(attempt?.status);
     expect(attempt?.decisionId).toBe(prepStep?.decisionId);
 
+    // P0 restitution: COMPLETED assistant must carry owner branch/path/commit (not sparse).
+    if (attempt?.status === "COMPLETED") {
+      const msgs = await listMessages(pilotId, preparationId);
+      const last = msgs[msgs.length - 1];
+      expect(last?.role).toBe("assistant");
+      expect(last?.content ?? "").toMatch(/a été publié/i);
+      expect(last?.content ?? "").toMatch(/docs\/studio-next\/e08-mandate\.md/);
+      expect(last?.content ?? "").toMatch(/Aucune fusion/i);
+      const result = JSON.parse(attempt.resultJson || "{}") as {
+        commitSha?: string;
+        prNumber?: number;
+      };
+      if (result.commitSha) {
+        expect(last?.content ?? "").toContain(result.commitSha);
+      }
+      if (result.prNumber != null) {
+        expect(last?.content ?? "").toMatch(new RegExp(`PR #${result.prNumber}`));
+      }
+    }
+
     const hd = (
       await db
         .select()
diff --git a/projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts b/projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts
index 95992769..8c8c39b8 100644
--- a/projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/publication-effect-restitution.test.ts
@@ -81,6 +81,36 @@ describe("publication-effect-restitution", () => {
     expect(out).not.toMatch(/reste à confirmer/i);
   });
 
+  it("COMPLETED restitution includes path, commit, PR and file link (PR#19 shape)", () => {
+    const out = composePublicationEffectRestitution({
+      priorContent: "",
+      effect: {
+        attempted: true,
+        outcome: "COMPLETED",
+        documentTitle: "Références externes — Enseignements de Chantiers360",
+        revisionNumber: 2,
+        repositoryFullName: "mcleland147/chantiers360",
+        publicationBranch: "sfia/pub-3ab1e0c2eb6b7499",
+        targetPath: "references-externes-enseignements-chantiers360.md",
+        baseBranch: "main",
+        commitSha: "16f9961ef2ee6d13235e56059313f691521947fd",
+        prNumber: 19,
+        prUrl: "https://github.com/mcleland147/chantiers360/pull/19",
+        fileUrl:
+          "https://github.com/mcleland147/chantiers360/blob/16f9961ef2ee6d13235e56059313f691521947fd/references-externes-enseignements-chantiers360.md",
+        mergeObserved: false,
+      },
+    });
+    expect(out).toMatch(/a été publié/i);
+    expect(out).toMatch(/sfia\/pub-3ab1e0c2eb6b7499/);
+    expect(out).toMatch(/references-externes-enseignements-chantiers360\.md/);
+    expect(out).toMatch(/16f9961ef2ee6d13235e56059313f691521947fd/);
+    expect(out).toMatch(/PR #19/);
+    expect(out).toMatch(/github\.com\/mcleland147\/chantiers360\/pull\/19/);
+    expect(out).toMatch(/Aucune fusion vers `main`/i);
+    expect(out).not.toMatch(/fusionnée/i);
+  });
+
   it("UNKNOWN does not announce success or definitive refusal", () => {
     const out = composePublicationEffectRestitution({
       priorContent: "Je publie le document sur GitHub.",
diff --git a/projects/sfia-studio-next/web/tests/unit/publication-effect-view.test.ts b/projects/sfia-studio-next/web/tests/unit/publication-effect-view.test.ts
new file mode 100644
index 00000000..81eed1ab
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/publication-effect-view.test.ts
@@ -0,0 +1,66 @@
+import { describe, expect, it } from "vitest";
+import {
+  buildPublicationEffectViewFromOwnerPayload,
+  formatPublicationOwnerFactsSnippets,
+} from "@/domains/conversation/publication-effect-view";
+import { composePublicationEffectRestitution } from "@/domains/conversation/publication-effect-restitution";
+
+describe("publication-effect-view owner hydration", () => {
+  it("hydrates PR#19 owner payload into complete COMPLETED view", () => {
+    const view = buildPublicationEffectViewFromOwnerPayload({
+      outcome: "COMPLETED",
+      attemptId: "efx_cf6763da-383f-4abd-be6d-ac9ba29b752f",
+      decisionId: "dec_aa4db4e0-83cc-4f9d-9888-379183730db0",
+      documentTitle: "Références externes — Enseignements de Chantiers360",
+      revisionNumber: 2,
+      plan: {
+        repositoryFullName: "mcleland147/chantiers360",
+        publicationBranch: "sfia/pub-3ab1e0c2eb6b7499",
+        targetPath: "references-externes-enseignements-chantiers360.md",
+        targetBranch: "main",
+      },
+      result: {
+        commitSha: "16f9961ef2ee6d13235e56059313f691521947fd",
+        prNumber: 19,
+      },
+      prHtmlUrl: "https://github.com/mcleland147/chantiers360/pull/19",
+      mergeObserved: false,
+    });
+
+    expect(view.publicationBranch).toBe("sfia/pub-3ab1e0c2eb6b7499");
+    expect(view.targetPath).toBe("references-externes-enseignements-chantiers360.md");
+    expect(view.commitSha).toBe("16f9961ef2ee6d13235e56059313f691521947fd");
+    expect(view.prNumber).toBe(19);
+    expect(view.prUrl).toBe("https://github.com/mcleland147/chantiers360/pull/19");
+    expect(view.fileUrl).toContain("/blob/16f9961ef2ee6d13235e56059313f691521947fd/");
+    expect(view.mergeObserved).toBe(false);
+    expect(view.baseBranch).toBe("main");
+
+    const text = composePublicationEffectRestitution({ priorContent: "", effect: view });
+    expect(text).toMatch(/branche `sfia\/pub-3ab1e0c2eb6b7499`/);
+    expect(text).toMatch(/PR #19/);
+    expect(text).toMatch(/Aucune fusion vers `main`/);
+  });
+
+  it("formats owner snippets without claiming merge from PR_OPEN", () => {
+    const lines = formatPublicationOwnerFactsSnippets([
+      {
+        repositoryFullName: "mcleland147/chantiers360",
+        targetPath: "references-externes-enseignements-chantiers360.md",
+        publicationBranch: "sfia/pub-3ab1e0c2eb6b7499",
+        targetBranch: "main",
+        headSha: "16f9961ef2ee6d13235e56059313f691521947fd",
+        prNumber: 19,
+        publicationStatus: "PR_OPEN",
+        effectStatus: "COMPLETED",
+        mergeObserved: false,
+        prStatusLabel: "PR ouverte (historique Studio — non live GitHub)",
+      },
+    ]);
+    expect(lines).toHaveLength(1);
+    expect(lines[0]).toMatch(/branch=sfia\/pub-3ab1e0c2eb6b7499/);
+    expect(lines[0]).toMatch(/PR #19/);
+    expect(lines[0]).toMatch(/non fusionné vers main/);
+    expect(lines[0]).not.toMatch(/fusion D8 observée/);
+  });
+});

```

## 10. Tests

| Suite | Résultat |
| --- | --- |
| tsc | PASS |
| unit restitution+view+clarif+path | 39/39 PASS |
| PG accept01 | 11/11 PASS (restitution COMPLETED enrichie) |
| Playwright E08 Nora | 2/2 PASS |
| REAL READ PR#19 / blob / main 404 | **REAL BOUNDARY PROVEN** |
| Nouvelle mutation GitHub | **NONE** |

## 11. Fake / Real

| Affirmation | Niveau |
| --- | --- |
| Restitution complète depuis owners | DETERMINISTIC / PG PROVEN |
| PR#19 corrélation + non-merge | REAL BOUNDARY PROVEN (READ) |
| Follow-up LIVE Nora sur RECETTE | **NOT PROVEN** — UAT Morris |
| END-TO-END REAL mutation | NOT (interdit / non requis) |

## 12. Verdicts

- **GLOBAL GIT CHAIN VERIFIED — REAL READ / EFFECT RECONCILIATION PROVEN** (PR#19 ↔ Studio)
- **CORRECTIONS IMPLEMENTED**
- **RECETTE AVAILABLE — MORRIS UAT REQUIRED** (questions de vérif sur conversation existante)
- **END-TO-END REAL PROVEN** → NON (pas de nouvelle pub ; follow-up LIVE à UAT)
- E08 **non ADOPTÉ** / non MERGED / STABLE NOT AVAILABLE

### Reprise Morris

Sur http://127.0.0.1:3200 BUILD `tEiDqhhGWNipSWO_86ZoG`, reposer les questions de vérif sur la publication PR#19 (branche, main, commit, PR, liens) — **sans** redemander une publication.

---
FIN Review Pack FULL — Git Chain Fiabilisation
