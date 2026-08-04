# ChatGPT Review Pack — SFIA Studio V3.1-D2-D2 Critical PR Readiness

## 1. Date / heure
2026-08-04 10:33:37 CEST (+0200)

## 2. Cycle
PR readiness — validation repository avant décision d’intégration (Draft PR #309 existante).

## 3. Profil
Critical

## 4. Typologie
EVOL

## 5. GO consommé
GO PR READINESS SFIA STUDIO V3.1-D2-D2 — 2026-08-04 10:23 CEST (+0200)

## 6. Gates non consommés
- GO MARK READY / MERGE SFIA STUDIO V3.1-D2-D2
- GO suppression de branche
- GO post-merge
- GO D2-D3
- G-D2D-CURSOR-01
- G-D2D-PERSIST-01
- provider live / Cursor live / déploiement / RUN readiness / production readiness

## 7. CKC
- recherché : oui (cycle PR readiness)
- contrat détaillé trouvé : non
- statut : absent

## 8. Fallback déclaré
routing guide ; template cycle v2.6 ; template `2026-07-04-05-validate-pr-readiness.md` ; checklist §12 ; delivery pipeline ; decision engine ; operating model ; rules/guardrails ; handoffs QA+publication ; PR #309 + CI. Aucune autorité d’exécution supplémentaire inventée.

## 9. Local Git Truth Check initial
| Contrôle | Attendu | Observé | Résultat |
|----------|---------|---------|----------|
| toplevel | delivery-d2-d1 worktree | OK | PASS |
| branche | delivery/sfia-studio-v3-1-d2-d2-read-only-adapters | exact | PASS |
| HEAD | `fcfad2e95319152e5d7cc7ec29d557c87af241af` | `fcfad2e95319152e5d7cc7ec29d557c87af241af` | PASS |
| origin/main | `c38b6ca97894ff55ad6a4e7d1195274260232f40` | `c38b6ca97894ff55ad6a4e7d1195274260232f40` | PASS |
| upstream | origin/delivery/... @ `fcfad2e95319152e5d7cc7ec29d557c87af241af` | exact | PASS |
| ahead/behind | 1 / 0 | 1 / 0 | PASS |
| merge-base | `c38b6ca97894ff55ad6a4e7d1195274260232f40` | `c38b6ca97894ff55ad6a4e7d1195274260232f40` | PASS |
| staged | vide | vide | PASS |
| WT projet | propre hors `.tmp-sfia-review/**` | OK | PASS |
| remote branch SHA | `fcfad2e95319152e5d7cc7ec29d557c87af241af` | `fcfad2e95319152e5d7cc7ec29d557c87af241af` | PASS |

## 10–11. Handoffs consultés
### QA
- commit `953b2975c1dff9a4a313a6a52d93eae3068267cc` / blob `29b3179a439cf4cda30d0cb09261dfd6c2feefa0`
- verdict : D2-D2 QA PASS WITH RESERVES — READY FOR MORRIS PUBLICATION DECISION
- F-QA-D2D2-01…11 — VERIFIED IN RE-QA

### Publication
- commit `013af4eef1ca5d76461008005d089ad23b690f16` / blob `a41d75de3c9524465bd3a7ec1a0fc3dedc895d2c` / parent `953b2975c1dff9a4a313a6a52d93eae3068267cc`
- titre : `# ChatGPT Review Pack — SFIA Studio V3.1-D2-D2 Git Publication`
- verdict : D2-D2 PUBLICATION COMPLETE — DRAFT PR OPEN — READY FOR CHATGPT PUBLICATION VALIDATION
- patch complet présent (34 `diff --git`)
- validation ChatGPT amont déclarée : D2-D2 PUBLICATION VALIDATED — DRAFT PR #309 OPEN — READY FOR MORRIS PR READINESS DECISION

## 12. PR metadata complète
- number/url : 309 / https://github.com/mcleland147/sfia-workspace/pull/309
- title : feat(sfia-studio): add V3.1-D2-D2 read-only adapters
- state/isDraft : OPEN / True
- base : main @ c38b6ca97894ff55ad6a4e7d1195274260232f40
- head : delivery/sfia-studio-v3-1-d2-d2-read-only-adapters @ fcfad2e95319152e5d7cc7ec29d557c87af241af
- commits : 1
- files : 34
- additions/deletions : 2899 / 0
- mergeable / mergeStateStatus : MERGEABLE / CLEAN
- reviewDecision : `(none)`
- statusCheckRollup : Detect SUCCESS ; Build SUCCESS ; Required Gate SUCCESS

## 13. Body PR complet
```markdown
## Summary

- Ajout des wrappers et frontières provider-independent D2-D2 pour `execution-run`.
- AI fake + platform wrappers bornés (pas de provider live).
- Git read-only fake + platform (allowlist fail-closed, aucune mutation).
- Cursor fixture uniquement (`verified=false`).
- Secrets opaques côté port public ; matérialisation server-only privée.
- Events structurés avec redaction récursive.
- Timeout, cancellation et résultats tardifs (partial jamais succeeded).
- Sandbox et chemins protégés.
- Conformance harness + evidence pack D2-D2.

## Morris decisions

- GO Delivery D2-D2 — consommé (amont).
- GO QA Critical initial — consommé (BLOCKED → findings).
- GO Corrections — consommé (F-QA-D2D2-01…11 implémentés).
- GO QA Critical REVALIDATION — consommé (PASS WITH RESERVES).
- GO PUBLICATION SFIA STUDIO V3.1-D2-D2 — consommé (ce cycle, 2026-08-04 09:44 CEST).
- G-D2D-CURSOR-01 — **non consommé**.
- GO D2-D3 — **non consommé**.
- GO PR READINESS / GO MARK READY / MERGE — **non consommés**.

## Scope

- Exactement **34 fichiers** sous :
  - `projects/sfia-studio/app/lib/oa/execution-run/**`
  - `projects/sfia-studio/app/__tests__/oa/execution-run/**`
- Package SHA-256 (méthode QA length-prefixed) :
  `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d`
- Aucun document 20–24, config, dépendance, lockfile, workflow, UI, route, API, auth, D2-D3.

## QA evidence

- QA Critical initiale : **BLOCKED** (1 BLOCKER + 8 MAJOR + 2 MINOR).
- Onze findings F-QA-D2D2-01…11.
- Corrections implémentées (package 32→34 ; hash stabilisé).
- Re-QA Critical indépendante : **D2-D2 QA PASS WITH RESERVES — READY FOR MORRIS PUBLICATION DECISION**.
- F-QA-D2D2-01…11 — **VERIFIED IN RE-QA**.
- Probes revalidation : 11/11 PASS.
- Targeted execution-run : 22 fichiers / **130/130** PASS.
- Full Vitest : 124 fichiers / **1176/1176** PASS.
- typecheck / lint (sans fix) / build : PASS.
- Governance : **73 / 0 fail**.
- Package hash avant/après QA et publication : identique `bd92d3da…`.

## Security and authority boundaries

- Secret public : resolve-only (pas de matérialisation sur le port public).
- Matérialisation : server-only privée (`serverOnlySecretMaterializer`).
- Summaries metadata-only (pas de fuite de contenu secret).
- Event redaction récursive.
- Allowlist Git fail-closed ; aucune mutation Git produit.
- Observed branch/HEAD indépendants (non tautologiques).
- Cursor fixture uniquement ; `verified=false`.
- Partial jamais `succeeded` ; cancellation/timeout terminaux.

## Reserves

- R-QA-REV-01 — OPEN NOT LIFTED
- R-QA-REV-02 — OPEN NOT LIFTED
- R-QA-D2C-01 — OPEN NOT LIFTED
- Cursor product capabilities — UNVERIFIED
- Mémoire process-local only

## Explicit exclusions

- Aucun provider live
- Aucun Cursor live
- Aucun Git write produit
- Aucune persistance durable
- Aucun multi-instance
- Aucun D2-D3 / D2-D4
- Aucune UI
- Aucun claim production-ready ou RUN READY

## Test plan

Commandes réellement exécutées avant publication (depuis `projects/sfia-studio/app` sauf governance) :

- [x] `npm test -- __tests__/oa/execution-run/` → 22 files / 130 tests PASS
- [x] `npm run typecheck` → PASS
- [x] `npm run lint` → PASS (no fix)
- [x] `npm run build` → PASS
- [x] `npm test` → 124 files / 1176 tests PASS
- [x] governance (3 suites node --test) → 73 / 0 fail
- [x] `git diff --check`
- [x] scans bornés secrets / Git write / materialize export / `.only` / `.skip` / magic timeout

## Review guidance

Ordre de revue recommandé :

1. ports
2. provider boundary
3. secret boundary
4. adapters AI / Git
5. sandbox
6. events / redaction
7. provider invocation
8. server composition
9. conformance et tests adversariaux

## Publication status

- PR **Draft** uniquement.
- Mark-ready **non autorisé** dans ce cycle.
- Merge **non autorisé**.
- Branche préservée.
- Prochain gate candidat (non consommé) :
  **GO PR READINESS SFIA STUDIO V3.1-D2-D2**

```

## 14. Reviews, commentaires et threads
- reviews API : 0
- issue comments : 0
- inline review comments : 0
- Absence de commentaire ≠ approbation humaine.

## 15. Branch protection / merge requirements
- Classic branch protection API : HTTP 404 (Branch not protected)
- Ruleset actif : `SFIA Studio Main Required Gate — M1` (id 19798462) enforcement=`active`
- required_status_checks observés : `SFIA Studio Required Gate` (observé SUCCESS sur run 30889710678)
- required_approving_review_count : 0
- allowed_merge_methods : merge, squash, rebase
- non_fast_forward + deletion rules présentes sur ruleset

## 16. CI run, jobs et étapes
- run ID : `30889710678`
- workflow : `SFIA Studio CI`
- event/status/conclusion : pull_request / completed / **success**
- headSha : `fcfad2e95319152e5d7cc7ec29d557c87af241af` (exact commit projet)
- checks CLI :
```
Build and validate SFIA Studio	pass	1m38s	https://github.com/mcleland147/sfia-workspace/actions/runs/30889710678/job/91928741296
Detect SFIA Studio changes	pass	8s	https://github.com/mcleland147/sfia-workspace/actions/runs/30889710678/job/91928703817
SFIA Studio Required Gate	pass	4s	https://github.com/mcleland147/sfia-workspace/actions/runs/30889710678/job/91929111924
```
### Job `Detect SFIA Studio changes` — success
- [success] Set up job
- [success] Checkout
- [success] Detect Studio scope
- [success] Post Checkout
- [success] Complete job
### Job `Build and validate SFIA Studio` — success
- [success] Set up job
- [success] Checkout
- [success] Setup Node.js
- [success] Install dependencies
- [success] Typecheck
- [success] Lint
- [success] Build
- [success] Unit tests (Vitest)
- [success] Modeled governance tests
- [success] Secret pattern scan (targeted)
- [success] Trailing whitespace check
- [success] Post Setup Node.js
- [success] Post Checkout
- [success] Complete job
### Job `SFIA Studio Required Gate` — success
- [success] Set up job
- [success] Aggregate required gate
- [success] Complete job

## 17–18. Manifest (34) + package hash
Méthode : chemins triés ; `path\0 + str(len(bytes))\0 + bytes` ; SHA-256.
Hash : `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d`

```
projects/sfia-studio/app/__tests__/oa/execution-run/adapter.ai.fake.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/adapter.events.redaction.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/adapter.git.readonly.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/adversarial.providerBoundary.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/d2d2.evidence.pack.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/ports.conformance.test.ts
projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
projects/sfia-studio/app/lib/oa/execution-run/application/providerInvocation.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
projects/sfia-studio/app/lib/oa/execution-run/index.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/redactEventDetail.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts
projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts
projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts
projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts
projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
```

## 19. Diff complet exploitable origin/main...HEAD
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.ai.fake.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.ai.fake.test.ts
new file mode 100644
index 0000000..bc48066
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.ai.fake.test.ts
@@ -0,0 +1,59 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
+import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
+import { PlatformAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter";
+
+describe("D2D2-02 AI-B adapters", () => {
+  it("fake returns validated usage without raw prompt/user content", async () => {
+    const ai = new FakeAiExecutionAdapter();
+    const result = await ai.complete({
+      correlationId: "c1",
+      lane: "ai",
+      operation: "complete",
+      messages: [
+        {
+          role: "user",
+          content: "hello alice@example.com sk-abcdefghijklmnopqrstuvwxyz password=secret",
+        },
+      ],
+      timeoutMs: 1000,
+    });
+    expect(result.kind).toBe("success");
+    if (result.kind === "success") {
+      expect(result.usage.status).toBe("validated");
+      expect(result.redactedSummary).not.toMatch(/alice@|sk-|password|hello/i);
+      expect(JSON.stringify(result)).not.toMatch(/sk-abcdefghijklmnopqrstuvwxyz/);
+      expect(result).not.toHaveProperty("prompt");
+      expect(ai.describeCapability().verified).toBe(false);
+    }
+  });
+
+  it("platform wrapper omits raw provider text and requires timeout", async () => {
+    const ai = new PlatformAiExecutionAdapter(new FakeConversationProvider());
+    const missing = await ai.complete({
+      correlationId: "c2",
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "ping" }],
+    });
+    expect(missing.kind).toBe("failure");
+
+    const result = await ai.complete({
+      correlationId: "c2b",
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "ping ghp_abcdefghijklmnopqrstuv" }],
+      timeoutMs: 2000,
+    });
+    expect(result.kind).toBe("success");
+    if (result.kind === "success") {
+      expect(result.disclosureNotes.some((n) => n.includes("raw_prompt_omitted"))).toBe(true);
+      expect(result.disclosureNotes.some((n) => n.includes("raw_response_omitted"))).toBe(true);
+      expect(result.redactedSummary).not.toMatch(/ghp_|ping|slice/i);
+      expect(ai.describeCapability().verified).toBe(false);
+    }
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.events.redaction.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.events.redaction.test.ts
new file mode 100644
index 0000000..782f40b
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.events.redaction.test.ts
@@ -0,0 +1,82 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
+import { PlatformExecutionEventSinkAdapter } from "@/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter";
+import { NoopEventSink } from "@/lib/platform/observability/eventSink";
+import type { EventSink } from "@/lib/platform/observability/eventSink";
+
+describe("D2D2-05 EVENT-B", () => {
+  it("rejects invalid timestamps and sensitive keys", () => {
+    const sink = new RecordingExecutionEventSink();
+    expect(() =>
+      sink.emit({
+        type: "validation",
+        correlationId: "e1",
+        runId: "r1",
+        providerLane: "none",
+        occurredAt: "not-iso",
+        detail: { ok: true },
+      }),
+    ).toThrow(/EVENT_TIMESTAMP_INVALID/);
+
+    expect(() =>
+      sink.emit({
+        type: "validation",
+        correlationId: "e2",
+        runId: "r1",
+        providerLane: "none",
+        occurredAt: new Date().toISOString(),
+        detail: { apiKey: "x" },
+      }),
+    ).toThrow(/EVENT_SENSITIVE/);
+  });
+
+  it("rejects nested secrets at any depth for recording and platform", () => {
+    const recording = new RecordingExecutionEventSink();
+    expect(() =>
+      recording.emit({
+        type: "validation",
+        correlationId: "eN",
+        runId: "r1",
+        providerLane: "ai",
+        occurredAt: new Date().toISOString(),
+        detail: { nested: { password: "x", token: "y" } } as never,
+      }),
+    ).toThrow(/EVENT_(SENSITIVE|NESTED)/);
+
+    const emitted: unknown[] = [];
+    const sink: EventSink = {
+      emit(e) {
+        emitted.push(e);
+      },
+    };
+    const adapter = new PlatformExecutionEventSinkAdapter(sink);
+    expect(() =>
+      adapter.emit({
+        type: "validation",
+        correlationId: "eN2",
+        runId: "r1",
+        providerLane: "ai",
+        occurredAt: new Date().toISOString(),
+        detail: { nested: { apiKey: "should-not-pass" } } as never,
+      }),
+    ).toThrow(/EVENT_(SENSITIVE|NESTED)/);
+    expect(emitted).toHaveLength(0);
+  });
+
+  it("platform adapter accepts redacted flat D2-D events", () => {
+    const adapter = new PlatformExecutionEventSinkAdapter(new NoopEventSink());
+    expect(() =>
+      adapter.emit({
+        type: "source",
+        correlationId: "e3",
+        runId: "r1",
+        providerLane: "ai",
+        occurredAt: new Date().toISOString(),
+        detail: { source: "fixture" },
+      }),
+    ).not.toThrow();
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.git.readonly.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.git.readonly.test.ts
new file mode 100644
index 0000000..63a9700
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.git.readonly.test.ts
@@ -0,0 +1,155 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
+import { PlatformGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter";
+import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
+
+function stubGithub(calls: string[]): GithubReadPort {
+  return {
+    transport: "github_rest",
+    async getRepository(owner, name) {
+      calls.push(`${owner}/${name}`);
+      return {
+        fullName: `${owner}/${name}`,
+        defaultBranch: "main",
+        description: null,
+        url: `https://example.test/${owner}/${name}`,
+      };
+    },
+    async getBranch() {
+      return { name: "main", sha: "a".repeat(40) };
+    },
+    async getCommit() {
+      return { sha: "a".repeat(40), message: "m", author: null };
+    },
+    async getPullRequest() {
+      return {
+        number: 1,
+        title: "t",
+        state: "open",
+        headRef: "h",
+        baseRef: "b",
+        url: "https://example.test/pr/1",
+      };
+    },
+    async listPullRequestComments() {
+      return [];
+    },
+    async listChecks() {
+      return [];
+    },
+  };
+}
+
+describe("D2D2-03 GIT-C read-only", () => {
+  it("discloses transport, allowlist, and aligns path_meta", async () => {
+    const git = new FakeGitReadAdapter({
+      repositoryAllowlist: ["o/r"],
+      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+    });
+    expect(git.transport).toBe("fake");
+    expect(git.describeCapability().verified).toBe(false);
+
+    const deniedRepo = await git.read({
+      correlationId: "g0",
+      lane: "git",
+      operation: "read",
+      owner: "evil",
+      repo: "repo",
+      kind: "repository",
+      timeoutMs: 100,
+    });
+    expect(deniedRepo.kind).toBe("failure");
+
+    const ok = await git.read({
+      correlationId: "g1",
+      lane: "git",
+      operation: "read",
+      owner: "o",
+      repo: "r",
+      kind: "repository",
+      timeoutMs: 100,
+    });
+    expect(ok.kind).toBe("success");
+
+    const denied = await git.read({
+      correlationId: "g2",
+      lane: "git",
+      operation: "read",
+      owner: "o",
+      repo: "r",
+      kind: "path_meta",
+      path: ".env",
+      timeoutMs: 100,
+    });
+    expect(denied.kind).toBe("failure");
+
+    const pathOk = await git.read({
+      correlationId: "g3",
+      lane: "git",
+      operation: "read",
+      owner: "o",
+      repo: "r",
+      kind: "path_meta",
+      path: "projects/sfia-studio/README.md",
+      timeoutMs: 100,
+    });
+    expect(pathOk.kind).toBe("success");
+  });
+
+  it("platform wrapper enforces allowlist and same path_meta semantics", async () => {
+    const calls: string[] = [];
+    const platform = new PlatformGitReadAdapter(stubGithub(calls), "rest", {
+      repositoryAllowlist: ["o/r"],
+      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+      defaultTimeoutMs: 200,
+    });
+    const denied = await platform.read({
+      correlationId: "gp0",
+      lane: "git",
+      operation: "read",
+      owner: "evil-org",
+      repo: "evil-repo",
+      kind: "repository",
+      timeoutMs: 200,
+    });
+    expect(denied.kind).toBe("failure");
+    expect(calls).toEqual([]);
+
+    const pathOk = await platform.read({
+      correlationId: "gp1",
+      lane: "git",
+      operation: "read",
+      owner: "o",
+      repo: "r",
+      kind: "path_meta",
+      path: "projects/sfia-studio/app/x.ts",
+      timeoutMs: 200,
+    });
+    expect(pathOk.kind).toBe("success");
+    expect(platform.describeCapability().verified).toBe(false);
+  });
+
+  it("empty allowlist is fail-closed", async () => {
+    const git = new FakeGitReadAdapter({ repositoryAllowlist: [] });
+    const r = await git.read({
+      correlationId: "g4",
+      lane: "git",
+      operation: "read",
+      owner: "o",
+      repo: "r",
+      kind: "repository",
+      timeoutMs: 50,
+    });
+    expect(r.kind).toBe("failure");
+  });
+
+  it("exposes no write method", () => {
+    const git = new FakeGitReadAdapter({ repositoryAllowlist: ["o/r"] });
+    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("write");
+    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("push");
+    expect(Object.getOwnPropertyNames(Object.getPrototypeOf(git))).not.toContain("commit");
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts
new file mode 100644
index 0000000..92c85cf
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/adapter.secrets.opaque.test.ts
@@ -0,0 +1,68 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
+import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
+import type { SecretSourcePort } from "@/lib/oa/execution-run/ports/secretSourcePort";
+import { composeExecutionRunProvidersFake } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
+import * as publicBarrel from "@/lib/oa/execution-run";
+import fs from "node:fs";
+import path from "node:path";
+
+describe("D2D2-04 SECRET-B", () => {
+  it("resolve returns handles without secret values; public port has no materialize", async () => {
+    const portFile = fs.readFileSync(
+      path.join(process.cwd(), "lib/oa/execution-run/ports/secretSourcePort.ts"),
+      "utf8",
+    );
+    expect(portFile).not.toMatch(/materialize/);
+
+    const secretsAdapter = new FakeSecretSourceAdapter();
+    const asPort: SecretSourcePort = {
+      resolve: (id) => secretsAdapter.resolve(id),
+    };
+    expect("materialize" in asPort).toBe(false);
+    expect("materializeForServerOnly" in asPort).toBe(false);
+
+    const present = await asPort.resolve("TEST_SECRET");
+    expect(present.ok).toBe(true);
+    expect(JSON.stringify(present)).not.toMatch(/__FAKE_OPAQUE/);
+    const absent = await asPort.resolve("MISSING");
+    expect(absent.ok).toBe(false);
+
+    const composed = composeExecutionRunProvidersFake();
+    expect("materialize" in composed.secrets).toBe(false);
+    expect(JSON.stringify(await composed.secrets.resolve("TEST_SECRET"))).not.toMatch(
+      /__FAKE_OPAQUE/,
+    );
+  });
+
+  it("public barrel does not export materialization; server-only materialize stays off events", () => {
+    expect(Object.keys(publicBarrel).join(",")).not.toMatch(/materialize/i);
+    const secrets = new FakeSecretSourceAdapter();
+    const value = secrets.materialize("TEST_SECRET");
+    expect(value).toBeTruthy();
+    const sink = new RecordingExecutionEventSink();
+    expect(() =>
+      sink.emit({
+        type: "provider_invocation",
+        correlationId: "s1",
+        runId: "r1",
+        providerLane: "ai",
+        occurredAt: new Date().toISOString(),
+        detail: { note: "sk-abcdefghijklmnopqrstuvwxyz" },
+      }),
+    ).toThrow(/EVENT_SENSITIVE/);
+    expect(() =>
+      sink.emit({
+        type: "provider_invocation",
+        correlationId: "s2",
+        runId: "r1",
+        providerLane: "ai",
+        occurredAt: new Date().toISOString(),
+        detail: { secret: value! },
+      }),
+    ).toThrow(/EVENT_SENSITIVE/);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/adversarial.providerBoundary.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/adversarial.providerBoundary.test.ts
new file mode 100644
index 0000000..e4643c0
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/adversarial.providerBoundary.test.ts
@@ -0,0 +1,90 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  validateUntrustedProviderRequest,
+  validateUntrustedProviderResult,
+} from "@/lib/oa/execution-run/domain/providerBoundary";
+
+describe("D2D2-07 adversarial provider boundary", () => {
+  const cases: unknown[] = [
+    null,
+    undefined,
+    1,
+    "x",
+    [],
+    {},
+    { correlationId: "c", lane: "ai" },
+    { correlationId: "c", lane: "nope", operation: "o" },
+    { correlationId: "c", lane: "ai", operation: "o", timeoutMs: -1 },
+    { correlationId: "c", lane: "ai", operation: "complete", apiKey: "secret" },
+    { correlationId: "c", lane: "git", operation: "read", path: "../etc/passwd" },
+    {
+      correlationId: "c",
+      lane: "none",
+      operation: "totally_arbitrary_op",
+      unexpectedExtra: true,
+    },
+    { correlationId: "c", lane: "git", operation: "read" },
+    {
+      correlationId: "c",
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "hi" }],
+      extraField: 1,
+    },
+  ];
+
+  it.each(cases.map((c, i) => [i, c] as const))("rejects case %s", (_i, input) => {
+    const v = validateUntrustedProviderRequest(input);
+    expect(v.ok).toBe(false);
+  });
+
+  it("accepts a minimal valid request before metadata use", () => {
+    const v = validateUntrustedProviderRequest({
+      correlationId: "c",
+      lane: "ai",
+      operation: "complete",
+      messages: [{ role: "user", content: "hi" }],
+    });
+    expect(v.ok).toBe(true);
+  });
+
+  it("requires git owner/repo/kind", () => {
+    expect(
+      validateUntrustedProviderRequest({
+        correlationId: "c",
+        lane: "git",
+        operation: "read",
+        owner: "o",
+        repo: "r",
+        kind: "repository",
+      }).ok,
+    ).toBe(true);
+  });
+
+  it("rejects provider results with raw/sensitive fields", () => {
+    expect(
+      validateUntrustedProviderResult(
+        { kind: "success", redactedSummary: "x", prompt: "FULL" },
+        "c",
+      ).ok,
+    ).toBe(false);
+    expect(
+      validateUntrustedProviderResult(
+        { kind: "success", redactedSummary: "x", token: "x" },
+        "c",
+      ).ok,
+    ).toBe(false);
+    expect(
+      validateUntrustedProviderResult(
+        {
+          kind: "success",
+          redactedSummary: "echo=alice@example.com sk-abcdefghijklmnopqrstuvwxyz",
+        },
+        "c",
+      ).ok,
+    ).toBe(false);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts
new file mode 100644
index 0000000..f0390d9
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/async.cancel.lateResult.providers.test.ts
@@ -0,0 +1,85 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  invokeWithTimeoutAndCancellation,
+  recordLateProviderResult,
+} from "@/lib/oa/execution-run/application/providerInvocation";
+import { normalizedFailure } from "@/lib/oa/execution-run/domain/errors";
+
+describe("D2D2-06 ASYNC-B", () => {
+  it("times out exactly as timed_out", async () => {
+    const outcome = await invokeWithTimeoutAndCancellation(
+      async () =>
+        new Promise<never>(() => {
+          /* hang */
+        }),
+      { timeoutMs: 20, correlationId: "a1", maxRetries: 0 },
+    );
+    expect(outcome.status).toBe("timed_out");
+  });
+
+  it("cancellation yields exactly cancelled (not completed)", async () => {
+    const ac = new AbortController();
+    const p = invokeWithTimeoutAndCancellation(
+      async (signal) =>
+        new Promise<
+          | {
+              kind: "cancelled";
+              failure: ReturnType<typeof normalizedFailure>;
+            }
+        >((resolve) => {
+          const finish = () => {
+            resolve({
+              kind: "cancelled",
+              failure: normalizedFailure({
+                family: "cancelled",
+                code: "CANCELLED",
+                userMessage: "cancelled",
+                retryable: false,
+                correlationId: "a2",
+              }),
+            });
+          };
+          if (signal.aborted) {
+            finish();
+            return;
+          }
+          signal.addEventListener("abort", finish, { once: true });
+        }),
+      { timeoutMs: 5_000, signal: ac.signal, correlationId: "a2", maxRetries: 0 },
+    );
+    ac.abort();
+    const outcome = await p;
+    expect(outcome.status).toBe("cancelled");
+  });
+
+  it("late result record never mutates terminal", () => {
+    const late = recordLateProviderResult({
+      receivedAt: new Date().toISOString(),
+      terminalState: "cancelled",
+      redactedSummary: "late-evidence-only",
+    });
+    expect(late.mutatesTerminal).toBe(false);
+    expect(late.kind).toBe("late_result");
+  });
+
+  it("bounds retries to max 3", async () => {
+    let calls = 0;
+    const outcome = await invokeWithTimeoutAndCancellation(
+      async () => {
+        calls += 1;
+        throw new Error("boom");
+      },
+      {
+        timeoutMs: 100,
+        correlationId: "a3",
+        maxRetries: 99,
+        classifyRetry: () => "retryable",
+      },
+    );
+    expect(outcome.status).toBe("failed");
+    expect(calls).toBeLessThanOrEqual(4);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/d2d2.evidence.pack.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d2.evidence.pack.test.ts
new file mode 100644
index 0000000..4ea696d
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/d2d2.evidence.pack.test.ts
@@ -0,0 +1,30 @@
+/**
+ * @vitest-environment node
+ * D2D2-10 slice evidence consolidation smoke.
+ */
+import { describe, expect, it } from "vitest";
+import { composeExecutionRunProvidersFake } from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
+import { composeExecutionRunMemory } from "@/lib/oa/execution-run/server/composeExecutionRunMemory";
+import { getFixture } from "@/lib/oa/execution-run";
+
+describe("D2D2-10 evidence pack", () => {
+  it("fake provider composition discloses non-live boundaries", () => {
+    const providers = composeExecutionRunProvidersFake();
+    expect(providers.disclosure.cursorLive).toBe(false);
+    expect(providers.disclosure.gitWrite).toBe(false);
+    expect(providers.disclosure.providersLiveDefault).toBe(false);
+    expect(providers.disclosure.memory).toBe("process_local");
+    expect(providers.disclosure.gD2dCursor01).toBe("NOT_CONSUMED");
+  });
+
+  it("D2-D1 state authority composition remains available", async () => {
+    const core = composeExecutionRunMemory();
+    const f = getFixture("nominal");
+    const created = await core.createExecutionRun({
+      intent: f.intent,
+      context: f.context,
+      capability: f.capability,
+    });
+    expect(created.ok).toBe(true);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
index 108de12..046d5ce 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/importBoundaries.test.ts
@@ -122,3 +122,51 @@ describe("D2-D1 execution-run import boundaries", () => {
     expect(barrel).not.toMatch(/persistExecutionRun/);
   });
 });
+
+
+describe("D2-D2 execution-run provider boundary imports", () => {
+  it("domain still has no platform/SDK imports after D2-D2", () => {
+    const files = listTsFiles(path.join(MODULE_ROOT, "domain"));
+    const hits: string[] = [];
+    const forbidden =
+      /from\s+["'](?:node:|openai|@octokit|@\/lib\/(?:platform|harness)|fs|path|child_process)/;
+    for (const file of files) {
+      for (const line of importsOf(file)) {
+        if (forbidden.test(line)) hits.push(`${file}: ${line}`);
+      }
+    }
+    expect(hits).toEqual([]);
+  });
+
+  it("application providerInvocation does not import platform adapters", () => {
+    const file = path.join(MODULE_ROOT, "application/providerInvocation.ts");
+    const src = fs.readFileSync(file, "utf8");
+    expect(src).not.toMatch(/platform\//);
+    expect(src).not.toMatch(/openai|@octokit|harness\//);
+  });
+
+  it("root barrel does not export concrete provider adapters", () => {
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/FakeAiExecutionAdapter/);
+    expect(barrel).not.toMatch(/PlatformAiExecutionAdapter/);
+    expect(barrel).not.toMatch(/FakeGitReadAdapter/);
+    expect(barrel).not.toMatch(/FixtureCursorExecutionAdapter/);
+    expect(barrel).not.toMatch(/composeExecutionRunProvidersFake/);
+  });
+
+  it("Git read port type file declares no mutation methods", () => {
+    const src = fs.readFileSync(path.join(MODULE_ROOT, "ports/gitReadPort.ts"), "utf8");
+    expect(src).not.toMatch(/\bpush\b/);
+    expect(src).not.toMatch(/\bcommit\(/);
+    expect(src).not.toMatch(/^\s*write\s*\(/m);
+    expect(src).toMatch(/read\(request/);
+  });
+
+  it("public SecretSourcePort has no materialize surface", () => {
+    const src = fs.readFileSync(path.join(MODULE_ROOT, "ports/secretSourcePort.ts"), "utf8");
+    expect(src).not.toMatch(/materialize/);
+    const barrel = fs.readFileSync(path.join(MODULE_ROOT, "index.ts"), "utf8");
+    expect(barrel).not.toMatch(/serverOnlySecretMaterializer/);
+    expect(barrel).not.toMatch(/materializeForServerOnly/);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/ports.conformance.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/ports.conformance.test.ts
new file mode 100644
index 0000000..86232b3
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/ports.conformance.test.ts
@@ -0,0 +1,160 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import { FakeAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter";
+import { FakeGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter";
+import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
+import { FakeSecretSourceAdapter } from "@/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter";
+import { PlatformAiExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter";
+import { PlatformGitReadAdapter } from "@/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter";
+import { PlatformExecutionEventSinkAdapter } from "@/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter";
+import { RecordingExecutionEventSink } from "@/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink";
+import {
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+} from "@/lib/oa/execution-run/server/composeExecutionRunProviders";
+import {
+  runAiPortConformance,
+  runCursorPortConformance,
+  runEventSinkConformance,
+  runGitPortConformance,
+  runSecretPortConformance,
+} from "@/lib/oa/execution-run/infrastructure/providerConformance";
+import type { ConversationProvider } from "@/lib/platform/ai/types";
+import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
+import type { SecretSourcePort } from "@/lib/oa/execution-run/ports/secretSourcePort";
+import { NoopEventSink } from "@/lib/platform/observability/eventSink";
+
+function stubGithub(): GithubReadPort {
+  return {
+    transport: "github_rest",
+    async getRepository(owner, name) {
+      return {
+        fullName: `${owner}/${name}`,
+        defaultBranch: "main",
+        description: null,
+        url: `https://example.test/${owner}/${name}`,
+      };
+    },
+    async getBranch(_o, _n, branch) {
+      return { name: branch, sha: "a".repeat(40) };
+    },
+    async getCommit(_o, _n, sha) {
+      return { sha, message: "m", author: null };
+    },
+    async getPullRequest() {
+      return {
+        number: 1,
+        title: "t",
+        state: "open",
+        headRef: "h",
+        baseRef: "b",
+        url: "https://example.test/pr/1",
+      };
+    },
+    async listPullRequestComments() {
+      return [];
+    },
+    async listChecks() {
+      return [];
+    },
+  };
+}
+
+describe("D2D2-01 provider port conformance", () => {
+  it("AI fake conforms and stays unverified", async () => {
+    const port = new FakeAiExecutionAdapter();
+    expect(await runAiPortConformance(port)).toEqual([]);
+    expect(port.describeCapability().verified).toBe(false);
+  });
+
+  it("Git fake conforms, no write, unverified", async () => {
+    const port = new FakeGitReadAdapter({
+      repositoryAllowlist: ["example/example"],
+      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+    });
+    expect(await runGitPortConformance(port)).toEqual([]);
+    expect("write" in port).toBe(false);
+    expect(port.describeCapability().verified).toBe(false);
+  });
+
+  it("Cursor fixture conforms with live=false unverified", async () => {
+    const port = new FixtureCursorExecutionAdapter();
+    expect(await runCursorPortConformance(port)).toEqual([]);
+    expect(port.live).toBe(false);
+    expect(port.describeCapability().verified).toBe(false);
+  });
+
+  it("platform AI + Git stubs pass same harness", async () => {
+    const provider: ConversationProvider = {
+      providerId: "stub",
+      async complete() {
+        return {
+          text: "RAW should not appear in summary",
+          usage: {
+            inputTokens: 1,
+            outputTokens: 1,
+            totalTokens: 2,
+            model: null,
+            providerResponseId: null,
+          },
+        };
+      },
+    };
+    expect(await runAiPortConformance(new PlatformAiExecutionAdapter(provider))).toEqual([]);
+    expect(
+      await runGitPortConformance(
+        new PlatformGitReadAdapter(stubGithub(), "rest", {
+          repositoryAllowlist: ["example/example"],
+          pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+          defaultTimeoutMs: 1000,
+        }),
+      ),
+    ).toEqual([]);
+  });
+
+  it("secret + event + exported composition conform", async () => {
+    const secretsAdapter = new FakeSecretSourceAdapter();
+    const secrets: SecretSourcePort = {
+      resolve: (id) => secretsAdapter.resolve(id),
+    };
+    expect(await runSecretPortConformance(secrets)).toEqual([]);
+    expect(runEventSinkConformance(new RecordingExecutionEventSink())).toEqual([]);
+    expect(
+      runEventSinkConformance(new PlatformExecutionEventSinkAdapter(new NoopEventSink())),
+    ).toEqual([]);
+
+    const fake = composeExecutionRunProvidersFake();
+    expect(fake.disclosure.gD2dCursor01).toBe("NOT_CONSUMED");
+    expect(await runAiPortConformance(fake.ai)).toEqual([]);
+    expect(await runSecretPortConformance(fake.secrets)).toEqual([]);
+
+    const composed = composeExecutionRunProviders({
+      ai: new PlatformAiExecutionAdapter({
+        providerId: "stub",
+        async complete() {
+          return {
+            text: "x",
+            usage: {
+              inputTokens: null,
+              outputTokens: null,
+              totalTokens: null,
+              model: null,
+              providerResponseId: null,
+            },
+          };
+        },
+      }),
+      git: new PlatformGitReadAdapter(stubGithub(), "rest", {
+        repositoryAllowlist: ["example/example"],
+        pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+        defaultTimeoutMs: 500,
+      }),
+      cursor: new FixtureCursorExecutionAdapter(),
+      secrets,
+      events: new RecordingExecutionEventSink(),
+    });
+    expect(await runGitPortConformance(composed.git)).toEqual([]);
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
new file mode 100644
index 0000000..238a4d5
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/oa/execution-run/sandbox.protectedPath.fixture.test.ts
@@ -0,0 +1,146 @@
+/**
+ * @vitest-environment node
+ */
+import { describe, expect, it } from "vitest";
+import {
+  evaluateSandboxMutationGuards,
+  evaluateSandboxPath,
+  pathMatchesAllowlistPrefix,
+} from "@/lib/oa/execution-run/domain/sandboxContract";
+import { FixtureCursorExecutionAdapter } from "@/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter";
+
+describe("D2D2-08 sandbox contract fixture", () => {
+  it("deny-by-default and protects sensitive paths", () => {
+    expect(
+      evaluateSandboxPath({
+        path: "secrets/x",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: ".git/config",
+        allowlistRepos: ["projects/sfia-studio/", ".git/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/app/lib/oa/execution-run/index.ts",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(true);
+  });
+
+  it("blocks sibling prefix bypass and traversal", () => {
+    expect(pathMatchesAllowlistPrefix("projects/sfia-studio-evil/secret.ts", "projects/sfia-studio")).toBe(
+      false,
+    );
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio-evil/secret.ts",
+        allowlistRepos: ["projects/sfia-studio"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects/sfia-studio/deep/child.ts",
+        allowlistRepos: ["projects/sfia-studio"],
+      }).allowed,
+    ).toBe(true);
+    expect(
+      evaluateSandboxPath({
+        path: "../x",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "/abs",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+    expect(
+      evaluateSandboxPath({
+        path: "projects//sfia-studio/x",
+        allowlistRepos: ["projects/sfia-studio/"],
+      }).allowed,
+    ).toBe(false);
+  });
+
+  it("blocks git write and arbitrary commands", () => {
+    expect(
+      evaluateSandboxMutationGuards({
+        mutationRequested: true,
+        arbitraryCommandRequested: false,
+        gitWriteRequested: false,
+      }),
+    ).toMatchObject({ allowed: false, reason: "git_write" });
+    expect(
+      evaluateSandboxMutationGuards({
+        mutationRequested: false,
+        arbitraryCommandRequested: true,
+        gitWriteRequested: false,
+      }),
+    ).toMatchObject({ allowed: false, reason: "arbitrary_command" });
+  });
+
+  it("requires independent observed branch/HEAD anchors", () => {
+    expect(
+      evaluateSandboxMutationGuards({
+        mutationRequested: false,
+        arbitraryCommandRequested: false,
+        gitWriteRequested: false,
+        expectedBranch: "delivery/x",
+      }),
+    ).toMatchObject({ allowed: false, reason: "observed_missing" });
+    expect(
+      evaluateSandboxMutationGuards({
+        mutationRequested: false,
+        arbitraryCommandRequested: false,
+        gitWriteRequested: false,
+        expectedBranch: "delivery/x",
+        observedBranch: "other",
+      }),
+    ).toMatchObject({ allowed: false, reason: "branch_mismatch" });
+    expect(
+      evaluateSandboxMutationGuards({
+        mutationRequested: false,
+        arbitraryCommandRequested: false,
+        gitWriteRequested: false,
+        expectedBranch: "delivery/x",
+        observedBranch: "delivery/x",
+        expectedHead: "abc",
+        observedHead: "abc",
+      }),
+    ).toEqual({ allowed: true });
+  });
+
+  it("fixture cursor cannot claim live and stays unverified", async () => {
+    const cursor = new FixtureCursorExecutionAdapter();
+    expect(cursor.live).toBe(false);
+    expect(cursor.describeCapability().verified).toBe(false);
+    const denied = await cursor.executeFixture({
+      correlationId: "cu1",
+      lane: "cursor",
+      operation: "fixture",
+      instructionSummary: "path=.env",
+      allowlistRepos: ["projects/sfia-studio/"],
+      protectedPaths: [".env"],
+      timeoutMs: 100,
+    });
+    expect(denied.kind).toBe("failure");
+
+    const mismatch = await cursor.executeFixture({
+      correlationId: "cu2",
+      lane: "cursor",
+      operation: "fixture",
+      instructionSummary: "noop",
+      allowlistRepos: ["projects/sfia-studio/"],
+      protectedPaths: [],
+      expectedBranch: "expected-only",
+      observedBranch: "different",
+      timeoutMs: 100,
+    });
+    expect(mismatch.kind).toBe("failure");
+  });
+});
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/application/providerInvocation.ts b/projects/sfia-studio/app/lib/oa/execution-run/application/providerInvocation.ts
new file mode 100644
index 0000000..40a0cf8
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/application/providerInvocation.ts
@@ -0,0 +1,199 @@
+/**
+ * D2D2-06 ASYNC-B — Promise + AbortSignal coordination.
+ * Does not mutate ExecutionRun state directly; callers must use create/transition.
+ * Late results never mutate terminals — evidence-only via transition API.
+ */
+import { normalizedFailure } from "../domain/errors";
+import type { NormalizedFailure } from "../domain/types";
+import type { ProviderInvocationResult } from "../ports/providerResult";
+
+export type RetryClass = "none" | "retryable" | "non_retryable";
+
+export type InvokeOptions = {
+  readonly timeoutMs: number;
+  readonly signal?: AbortSignal;
+  readonly correlationId: string;
+  readonly maxRetries?: number; // default 0; never infinite
+  readonly classifyRetry?: (failure: NormalizedFailure) => RetryClass;
+};
+
+export type InvokeOutcome =
+  | { readonly status: "completed"; readonly result: ProviderInvocationResult }
+  | { readonly status: "timed_out"; readonly failure: NormalizedFailure }
+  | { readonly status: "cancelled"; readonly failure: NormalizedFailure }
+  | { readonly status: "failed"; readonly failure: NormalizedFailure };
+
+function sleep(ms: number, signal?: AbortSignal): Promise<void> {
+  return new Promise((resolve, reject) => {
+    if (signal?.aborted) {
+      reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
+      return;
+    }
+    const t = setTimeout(resolve, ms);
+    const onAbort = () => {
+      clearTimeout(t);
+      reject(Object.assign(new Error("aborted"), { name: "AbortError" }));
+    };
+    signal?.addEventListener("abort", onAbort, { once: true });
+  });
+}
+
+export async function invokeWithTimeoutAndCancellation<T extends ProviderInvocationResult>(
+  operation: (signal: AbortSignal) => Promise<T>,
+  options: InvokeOptions,
+): Promise<InvokeOutcome> {
+  const maxRetries = Math.max(0, Math.min(options.maxRetries ?? 0, 3));
+  let attempt = 0;
+  let lastFailure: NormalizedFailure | undefined;
+
+  while (attempt <= maxRetries) {
+    attempt += 1;
+    if (options.signal?.aborted) {
+      return {
+        status: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "Provider invocation cancelled",
+          retryable: false,
+          correlationId: options.correlationId,
+        }),
+      };
+    }
+
+    const controller = new AbortController();
+    const onOuterAbort = () => controller.abort();
+    options.signal?.addEventListener("abort", onOuterAbort, { once: true });
+
+    let timeoutId: ReturnType<typeof setTimeout> | undefined;
+    const timeoutPromise = new Promise<"__timeout__">((resolve) => {
+      timeoutId = setTimeout(() => {
+        controller.abort();
+        resolve("__timeout__");
+      }, options.timeoutMs);
+    });
+
+    try {
+      const raced = await Promise.race([
+        operation(controller.signal).then((r) => ({ tag: "result" as const, r })),
+        timeoutPromise.then((t) => ({ tag: "timeout" as const, t })),
+        new Promise<{ tag: "cancelled" }>((resolve) => {
+          if (options.signal?.aborted) {
+            resolve({ tag: "cancelled" });
+            return;
+          }
+          options.signal?.addEventListener(
+            "abort",
+            () => resolve({ tag: "cancelled" }),
+            { once: true },
+          );
+        }),
+      ]);
+
+      if (timeoutId) clearTimeout(timeoutId);
+      options.signal?.removeEventListener("abort", onOuterAbort);
+
+      if (raced.tag === "timeout") {
+        return {
+          status: "timed_out",
+          failure: normalizedFailure({
+            family: "timed_out",
+            code: "TIMED_OUT",
+            userMessage: "Provider invocation timed out",
+            retryable: true,
+            correlationId: options.correlationId,
+          }),
+        };
+      }
+      if (raced.tag === "cancelled" || options.signal?.aborted) {
+        return {
+          status: "cancelled",
+          failure: normalizedFailure({
+            family: "cancelled",
+            code: "CANCELLED",
+            userMessage: "Provider invocation cancelled",
+            retryable: false,
+            correlationId: options.correlationId,
+          }),
+        };
+      }
+      return { status: "completed", result: raced.r };
+    } catch {
+      if (timeoutId) clearTimeout(timeoutId);
+      options.signal?.removeEventListener("abort", onOuterAbort);
+      if (options.signal?.aborted) {
+        return {
+          status: "cancelled",
+          failure: normalizedFailure({
+            family: "cancelled",
+            code: "CANCELLED",
+            userMessage: "Provider invocation cancelled",
+            retryable: false,
+            correlationId: options.correlationId,
+          }),
+        };
+      }
+      if (controller.signal.aborted) {
+        return {
+          status: "timed_out",
+          failure: normalizedFailure({
+            family: "timed_out",
+            code: "TIMED_OUT",
+            userMessage: "Provider invocation timed out",
+            retryable: true,
+            correlationId: options.correlationId,
+          }),
+        };
+      }
+      lastFailure = normalizedFailure({
+        family: "provider_unavailable",
+        code: "PROVIDER_UNAVAILABLE",
+        userMessage: "Provider invocation failed",
+        retryable: true,
+        correlationId: options.correlationId,
+      });
+      const cls = options.classifyRetry?.(lastFailure) ?? "non_retryable";
+      if (cls !== "retryable" || attempt > maxRetries) {
+        return { status: "failed", failure: lastFailure };
+      }
+      await sleep(1, options.signal);
+    }
+  }
+
+  return {
+    status: "failed",
+    failure:
+      lastFailure ??
+      normalizedFailure({
+        family: "internal_normalized_failure",
+        code: "INTERNAL_NORMALIZED_FAILURE",
+        userMessage: "Provider invocation exhausted",
+        retryable: false,
+        correlationId: options.correlationId,
+      }),
+  };
+}
+
+/**
+ * Late provider results must NOT mutate terminal state.
+ * Returns an evidence-only record for the caller to persist via transitionExecutionRun.
+ */
+export function recordLateProviderResult(input: {
+  readonly receivedAt: string;
+  readonly terminalState: string;
+  readonly redactedSummary: string;
+}): {
+  readonly kind: "late_result";
+  readonly mutatesTerminal: false;
+  readonly receivedAt: string;
+  readonly terminalStateAtReceipt: string;
+  readonly redactedSummary: string;
+} {
+  return {
+    kind: "late_result",
+    mutatesTerminal: false,
+    receivedAt: input.receivedAt,
+    terminalStateAtReceipt: input.terminalState,
+    redactedSummary: input.redactedSummary,
+  };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
new file mode 100644
index 0000000..9b12ef9
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/providerBoundary.ts
@@ -0,0 +1,211 @@
+/**
+ * D2D2-07 — adversarial validation of untrusted provider-ish payloads
+ * BEFORE any metadata field is trusted.
+ */
+import { normalizedFailure } from "./errors";
+import type { NormalizedFailure, ProviderLane } from "./types";
+import { isIsoTimestamp } from "./evidence";
+
+const ALLOWED_LANES: readonly ProviderLane[] = ["ai", "git", "cursor", "none"];
+
+const OPS_BY_LANE: Record<ProviderLane, readonly string[]> = {
+  ai: ["complete"],
+  git: ["read", "git_read"],
+  cursor: ["fixture", "cursor_fixture"],
+  none: ["event_emit"],
+};
+
+const COMMON_KEYS = new Set([
+  "correlationId",
+  "runId",
+  "lane",
+  "operation",
+  "signal",
+  "timeoutMs",
+]);
+
+const KEYS_BY_LANE: Record<ProviderLane, ReadonlySet<string>> = {
+  ai: new Set([...COMMON_KEYS, "messages", "modelHint"]),
+  git: new Set([...COMMON_KEYS, "owner", "repo", "ref", "path", "kind"]),
+  cursor: new Set([
+    ...COMMON_KEYS,
+    "instructionSummary",
+    "allowlistRepos",
+    "protectedPaths",
+    "expectedBranch",
+    "expectedHead",
+    "observedBranch",
+    "observedHead",
+  ]),
+  none: new Set([...COMMON_KEYS, "detail"]),
+};
+
+const GIT_KINDS = new Set(["repository", "branch", "commit", "path_meta"]);
+
+export type ProviderBoundaryOk = {
+  readonly ok: true;
+  readonly lane: ProviderLane;
+  readonly correlationId: string;
+  readonly operation: string;
+};
+
+export type ProviderBoundaryFail = {
+  readonly ok: false;
+  readonly failure: NormalizedFailure;
+};
+
+export function validateUntrustedProviderRequest(
+  input: unknown,
+  fallbackCorrelationId = "unknown",
+): ProviderBoundaryOk | ProviderBoundaryFail {
+  const fail = (userMessage: string): ProviderBoundaryFail => ({
+    ok: false,
+    failure: normalizedFailure({
+      family: "validation",
+      code: "VALIDATION_ERROR",
+      userMessage,
+      retryable: false,
+      correlationId:
+        typeof input === "object" &&
+        input !== null &&
+        typeof (input as { correlationId?: unknown }).correlationId === "string"
+          ? ((input as { correlationId: string }).correlationId || fallbackCorrelationId)
+          : fallbackCorrelationId,
+    }),
+  });
+
+  if (input === null || input === undefined) {
+    return fail("Provider request must be an object");
+  }
+  if (typeof input !== "object" || Array.isArray(input)) {
+    return fail("Provider request must be a non-array object");
+  }
+  const obj = input as Record<string, unknown>;
+  if (typeof obj.correlationId !== "string" || !obj.correlationId.trim()) {
+    return fail("correlationId required");
+  }
+  if (typeof obj.lane !== "string" || !(ALLOWED_LANES as readonly string[]).includes(obj.lane)) {
+    return fail("lane must be a valid ProviderLane");
+  }
+  const lane = obj.lane as ProviderLane;
+  if (typeof obj.operation !== "string" || !obj.operation.trim()) {
+    return fail("operation required");
+  }
+  if (!(OPS_BY_LANE[lane] as readonly string[]).includes(obj.operation)) {
+    return fail(`operation not allowed for lane ${lane}`);
+  }
+
+  const allowedKeys = KEYS_BY_LANE[lane];
+  for (const key of Object.keys(obj)) {
+    if (!allowedKeys.has(key)) {
+      return fail(`additional property forbidden: ${key}`);
+    }
+    if (/secret|password|token|api[_-]?key|authorization/i.test(key)) {
+      return fail("forbidden sensitive field in provider request");
+    }
+  }
+
+  if (obj.timeoutMs !== undefined) {
+    if (typeof obj.timeoutMs !== "number" || !Number.isFinite(obj.timeoutMs) || obj.timeoutMs < 0) {
+      return fail("timeoutMs must be a non-negative finite number");
+    }
+  }
+
+  if (lane === "ai") {
+    if (!Array.isArray(obj.messages)) return fail("messages required for ai complete");
+    for (const m of obj.messages) {
+      if (!m || typeof m !== "object" || Array.isArray(m)) return fail("invalid message entry");
+      const msg = m as Record<string, unknown>;
+      if (!["system", "user", "assistant"].includes(String(msg.role))) {
+        return fail("invalid message role");
+      }
+      if (typeof msg.content !== "string") return fail("message content must be string");
+      if (msg.content.length > 100_000) return fail("message content exceeds size limit");
+    }
+  }
+
+  if (lane === "git") {
+    if (typeof obj.owner !== "string" || !obj.owner.trim()) return fail("owner required");
+    if (typeof obj.repo !== "string" || !obj.repo.trim()) return fail("repo required");
+    if (typeof obj.kind !== "string" || !GIT_KINDS.has(obj.kind)) {
+      return fail("kind must be repository|branch|commit|path_meta");
+    }
+    if (obj.path !== undefined) {
+      if (typeof obj.path !== "string") return fail("path must be string");
+      if (obj.path.includes("..") || obj.path.startsWith("/") || obj.path.includes("\\")) {
+        return fail("path traversal or absolute path forbidden");
+      }
+    }
+  }
+
+  if (lane === "cursor") {
+    if (typeof obj.instructionSummary !== "string") return fail("instructionSummary required");
+    if (!Array.isArray(obj.allowlistRepos)) return fail("allowlistRepos required");
+    if (!Array.isArray(obj.protectedPaths)) return fail("protectedPaths required");
+  }
+
+  return {
+    ok: true,
+    lane,
+    correlationId: obj.correlationId,
+    operation: obj.operation,
+  };
+}
+
+export function validateUntrustedProviderResult(
+  input: unknown,
+  correlationId: string,
+): { ok: true } | { ok: false; failure: NormalizedFailure } {
+  const fail = (userMessage: string) => ({
+    ok: false as const,
+    failure: normalizedFailure({
+      family: "invalid_provider_result",
+      code: "INVALID_PROVIDER_RESULT",
+      userMessage,
+      retryable: false,
+      correlationId,
+    }),
+  });
+  if (input === null || input === undefined || typeof input !== "object" || Array.isArray(input)) {
+    return fail("provider result must be an object");
+  }
+  const obj = input as Record<string, unknown>;
+  if (!["success", "failure", "cancelled", "timed_out"].includes(String(obj.kind))) {
+    return fail("provider result kind invalid");
+  }
+  if (obj.kind === "success") {
+    if (typeof obj.redactedSummary !== "string") return fail("redactedSummary required");
+    if (/sk-|ghp_|@|password|BEGIN PRIVATE/i.test(obj.redactedSummary)) {
+      return fail("redactedSummary appears to contain sensitive or user content");
+    }
+    if (obj.rawPresent === true) return fail("raw provider payload forbidden");
+    if (obj.prompt !== undefined || obj.response !== undefined) {
+      return fail("raw prompt/response fields forbidden");
+    }
+  }
+  for (const key of Object.keys(obj)) {
+    if (/secret|password|token|api[_-]?key/i.test(key)) {
+      return fail("forbidden sensitive field in provider result");
+    }
+  }
+  return { ok: true };
+}
+
+export function assertIsoOrFail(
+  value: unknown,
+  correlationId: string,
+): { ok: true; iso: string } | { ok: false; failure: NormalizedFailure } {
+  if (typeof value !== "string" || !isIsoTimestamp(value)) {
+    return {
+      ok: false,
+      failure: normalizedFailure({
+        family: "validation",
+        code: "VALIDATION_ERROR",
+        userMessage: "timestamp must be valid ISO-8601",
+        retryable: false,
+        correlationId,
+      }),
+    };
+  }
+  return { ok: true, iso: value };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
new file mode 100644
index 0000000..4b351eb
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/domain/sandboxContract.ts
@@ -0,0 +1,109 @@
+/**
+ * D2D2-08 — sandbox / protected-path contract (pure, fixture-verifiable).
+ * Deny-by-default. Does not claim the sandbox is secure.
+ */
+export type SandboxPathDecision =
+  | { readonly allowed: true; readonly normalized: string }
+  | {
+      readonly allowed: false;
+      readonly reason:
+        | "empty"
+        | "absolute"
+        | "traversal"
+        | "protected"
+        | "not_allowlisted"
+        | "arbitrary_command"
+        | "git_write"
+        | "branch_mismatch"
+        | "head_mismatch"
+        | "observed_missing";
+    };
+
+const DEFAULT_PROTECTED = [
+  ".git/",
+  ".env",
+  "method/",
+  "prompts/",
+  ".github/",
+  ".sfia/",
+  "node_modules/",
+] as const;
+
+/** Exact match or child under prefix with segment boundary (no sibling prefix bypass). */
+export function pathMatchesAllowlistPrefix(
+  normalized: string,
+  prefixRaw: string,
+): boolean {
+  const prefix = prefixRaw.replace(/\\/g, "/").replace(/\/+$/, "");
+  if (!prefix) return false;
+  if (normalized === prefix) return true;
+  return normalized.startsWith(prefix + "/");
+}
+
+export function evaluateSandboxPath(input: {
+  path: unknown;
+  allowlistRepos: readonly string[];
+  protectedPaths?: readonly string[];
+}): SandboxPathDecision {
+  if (typeof input.path !== "string" || !input.path.trim()) {
+    return { allowed: false, reason: "empty" };
+  }
+  const raw = input.path.trim().replace(/\\/g, "/");
+  if (raw.startsWith("/") || /^[A-Za-z]:\//.test(raw)) {
+    return { allowed: false, reason: "absolute" };
+  }
+  const parts = raw.split("/");
+  if (parts.some((p) => p === ".." || p === "")) {
+    return { allowed: false, reason: "traversal" };
+  }
+  const normalized = parts.filter((p) => p !== ".").join("/");
+  const protectedPaths = [
+    ...DEFAULT_PROTECTED,
+    ...(input.protectedPaths ?? []),
+  ];
+  for (const p of protectedPaths) {
+    if (pathMatchesAllowlistPrefix(normalized, p)) {
+      return { allowed: false, reason: "protected" };
+    }
+  }
+  const allowed = input.allowlistRepos.some((prefix) =>
+    pathMatchesAllowlistPrefix(normalized, prefix),
+  );
+  if (!allowed) return { allowed: false, reason: "not_allowlisted" };
+  return { allowed: true, normalized };
+}
+
+export function evaluateSandboxMutationGuards(input: {
+  mutationRequested: boolean;
+  arbitraryCommandRequested: boolean;
+  gitWriteRequested: boolean;
+  /** Observed values must be independent of expected — never copy expected into observed. */
+  observedBranch?: string;
+  expectedBranch?: string;
+  observedHead?: string;
+  expectedHead?: string;
+}): SandboxPathDecision | { allowed: true } {
+  if (input.arbitraryCommandRequested) {
+    return { allowed: false, reason: "arbitrary_command" };
+  }
+  if (input.mutationRequested || input.gitWriteRequested) {
+    return { allowed: false, reason: "git_write" };
+  }
+  if (input.expectedBranch !== undefined) {
+    if (input.observedBranch === undefined || input.observedBranch === "") {
+      return { allowed: false, reason: "observed_missing" };
+    }
+    if (input.observedBranch !== input.expectedBranch) {
+      return { allowed: false, reason: "branch_mismatch" };
+    }
+  }
+  if (input.expectedHead !== undefined) {
+    if (input.observedHead === undefined || input.observedHead === "") {
+      return { allowed: false, reason: "observed_missing" };
+    }
+    if (input.observedHead !== input.expectedHead) {
+      return { allowed: false, reason: "head_mismatch" };
+    }
+  }
+  return { allowed: true };
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
index a9fec12..a6fab28 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/index.ts
@@ -62,3 +62,47 @@ export type { ClockPort } from "./ports/clockPort";
 export type { IdentityPort } from "./ports/identityPort";
 export { FIXTURE_CATALOGUE, getFixture } from "./fixtures/catalogue";
 export type { FixtureScenario, FixtureScenarioId } from "./fixtures/catalogue";
+
+// D2-D2 provider boundary port types (no concrete adapters on root barrel)
+export type {
+  AiCompletionRequest,
+  CursorFixtureRequest,
+  GitReadRequest,
+  LateProviderResultRecord,
+  ProviderInvocationResult,
+  ProviderOperationKind,
+  ProviderRequestBase,
+} from "./ports/providerResult";
+export type { AiExecutionPort } from "./ports/aiExecutionPort";
+export type { GitReadPort } from "./ports/gitReadPort";
+export type { CursorExecutionPort } from "./ports/cursorExecutionPort";
+export type {
+  SecretHandle,
+  SecretResolveResult,
+  SecretSourcePort,
+} from "./ports/secretSourcePort";
+export type {
+  ExecutionEvent,
+  ExecutionEventSinkPort,
+  ExecutionEventType,
+} from "./ports/executionEventSinkPort";
+export {
+  assertIsoOrFail,
+  validateUntrustedProviderRequest,
+  validateUntrustedProviderResult,
+} from "./domain/providerBoundary";
+export {
+  evaluateSandboxMutationGuards,
+  evaluateSandboxPath,
+  pathMatchesAllowlistPrefix,
+} from "./domain/sandboxContract";
+export type { SandboxPathDecision } from "./domain/sandboxContract";
+export {
+  invokeWithTimeoutAndCancellation,
+  recordLateProviderResult,
+} from "./application/providerInvocation";
+export type {
+  InvokeOptions,
+  InvokeOutcome,
+  RetryClass,
+} from "./application/providerInvocation";
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts
new file mode 100644
index 0000000..e3baaca
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/fakeAiExecutionAdapter.ts
@@ -0,0 +1,71 @@
+import type { AiExecutionPort } from "../../ports/aiExecutionPort";
+import type { AiCompletionRequest, ProviderInvocationResult } from "../../ports/providerResult";
+import type { ProviderCapabilityDescriptor } from "../../domain/types";
+import { normalizedFailure } from "../../domain/errors";
+import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
+import { safeProviderRedactedSummary } from "../events/redactEventDetail";
+
+/** Deterministic AI fake for CI — never live. verified=false (no product verification). */
+export class FakeAiExecutionAdapter implements AiExecutionPort {
+  readonly lane = "ai" as const;
+  private calls = 0;
+
+  describeCapability(): ProviderCapabilityDescriptor {
+    return {
+      lane: "ai",
+      capabilityId: "d2d2-ai-fake",
+      available: true,
+      verified: false,
+      readOnly: true,
+      supportsCancellation: true,
+      supportsTimeout: true,
+    };
+  }
+
+  async complete(request: AiCompletionRequest): Promise<ProviderInvocationResult> {
+    const boundary = validateUntrustedProviderRequest(request);
+    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
+    if (request.timeoutMs === undefined) {
+      return {
+        kind: "failure",
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "timeoutMs required (no invented default)",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+    if (request.signal?.aborted) {
+      return {
+        kind: "cancelled",
+        failure: normalizedFailure({
+          family: "cancelled",
+          code: "CANCELLED",
+          userMessage: "AI fake cancelled",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+    this.calls += 1;
+    return {
+      kind: "success",
+      completeness: "complete",
+      redactedSummary: safeProviderRedactedSummary({
+        adapter: "FAKE/NON-LIVE",
+        operation: "complete",
+        status: "ok",
+        callIndex: this.calls,
+      }),
+      disclosureNotes: ["source=fake", "live=false", "verified=false"],
+      usage: {
+        status: "validated",
+        inputTokens: 10,
+        outputTokens: 5,
+        unit: "tokens",
+      },
+    };
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
new file mode 100644
index 0000000..d2e8a9b
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/ai/platformAiExecutionAdapter.ts
@@ -0,0 +1,136 @@
+/**
+ * AI-B wrapper around platform ConversationProvider.
+ * Maps to D2-D contracts; does not re-export SDK types.
+ */
+import type { ConversationProvider } from "@/lib/platform/ai/types";
+import type { AiExecutionPort } from "../../ports/aiExecutionPort";
+import type { AiCompletionRequest, ProviderInvocationResult } from "../../ports/providerResult";
+import type { ProviderCapabilityDescriptor } from "../../domain/types";
+import { normalizedFailure } from "../../domain/errors";
+import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
+import { invokeWithTimeoutAndCancellation } from "../../application/providerInvocation";
+import { safeProviderRedactedSummary } from "../events/redactEventDetail";
+
+export type PlatformAiAdapterOptions = {
+  /** Required when request.timeoutMs omitted — no invented production default. */
+  readonly defaultTimeoutMs?: number;
+  /** Explicit verification evidence only; never inferred from available. */
+  readonly verified?: boolean;
+};
+
+export class PlatformAiExecutionAdapter implements AiExecutionPort {
+  readonly lane = "ai" as const;
+
+  constructor(
+    private readonly provider: ConversationProvider,
+    private readonly opts?: PlatformAiAdapterOptions,
+  ) {}
+
+  describeCapability(): ProviderCapabilityDescriptor {
+    return {
+      lane: "ai",
+      capabilityId: `d2d2-ai-platform:${this.provider.providerId}`,
+      available: true,
+      verified: this.opts?.verified === true,
+      readOnly: true,
+      supportsCancellation: true,
+      supportsTimeout: true,
+    };
+  }
+
+  async complete(request: AiCompletionRequest): Promise<ProviderInvocationResult> {
+    const boundary = validateUntrustedProviderRequest(request);
+    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
+
+    const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs;
+    if (timeoutMs === undefined) {
+      return {
+        kind: "failure",
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "timeoutMs required (no invented default)",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+
+    const outcome = await invokeWithTimeoutAndCancellation(
+      async (signal) => {
+        if (signal.aborted) {
+          return {
+            kind: "cancelled" as const,
+            failure: normalizedFailure({
+              family: "cancelled",
+              code: "CANCELLED",
+              userMessage: "AI cancelled",
+              retryable: false,
+              correlationId: request.correlationId,
+            }),
+          };
+        }
+        try {
+          const raw = await this.provider.complete(
+            request.messages.map((m) => ({ role: m.role, content: m.content })),
+          );
+          if (signal.aborted) {
+            return {
+              kind: "cancelled" as const,
+              failure: normalizedFailure({
+                family: "cancelled",
+                code: "CANCELLED",
+                userMessage: "AI cancelled",
+                retryable: false,
+                correlationId: request.correlationId,
+              }),
+            };
+          }
+          const usage =
+            raw.usage.inputTokens != null || raw.usage.outputTokens != null
+              ? {
+                  status: "validated" as const,
+                  inputTokens: raw.usage.inputTokens ?? undefined,
+                  outputTokens: raw.usage.outputTokens ?? undefined,
+                  unit: "tokens",
+                }
+              : { status: "unavailable" as const, reason: "provider usage missing" };
+          return {
+            kind: "success" as const,
+            completeness: "complete" as const,
+            redactedSummary: safeProviderRedactedSummary({
+              adapter: "AI-B",
+              operation: "complete",
+              status: "ok",
+              providerId: this.provider.providerId,
+            }),
+            disclosureNotes: [
+              `providerId=${this.provider.providerId}`,
+              "raw_prompt_omitted",
+              "raw_response_omitted",
+              `verified=${this.opts?.verified === true}`,
+            ],
+            usage,
+          };
+        } catch {
+          return {
+            kind: "failure" as const,
+            failure: normalizedFailure({
+              family: "provider_unavailable",
+              code: "PROVIDER_UNAVAILABLE",
+              userMessage: "AI provider unavailable",
+              retryable: true,
+              correlationId: request.correlationId,
+            }),
+          };
+        }
+      },
+      { timeoutMs, signal: request.signal, correlationId: request.correlationId, maxRetries: 0 },
+    );
+
+    if (outcome.status === "completed") return outcome.result;
+    if (outcome.status === "timed_out") return { kind: "timed_out", failure: outcome.failure };
+    if (outcome.status === "cancelled") return { kind: "cancelled", failure: outcome.failure };
+    return { kind: "failure", failure: outcome.failure };
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts
new file mode 100644
index 0000000..7fbd40e
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/cursor/fixtureCursorExecutionAdapter.ts
@@ -0,0 +1,117 @@
+/**
+ * D2D2-08 fixture Cursor adapter — cannot launch commands or mutate Git.
+ * live=false always. Capability verified=false always.
+ */
+import type { CursorExecutionPort } from "../../ports/cursorExecutionPort";
+import type {
+  CursorFixtureRequest,
+  ProviderInvocationResult,
+} from "../../ports/providerResult";
+import type { ProviderCapabilityDescriptor } from "../../domain/types";
+import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
+import {
+  evaluateSandboxMutationGuards,
+  evaluateSandboxPath,
+} from "../../domain/sandboxContract";
+import { normalizedFailure } from "../../domain/errors";
+import { safeProviderRedactedSummary } from "../events/redactEventDetail";
+
+export class FixtureCursorExecutionAdapter implements CursorExecutionPort {
+  readonly lane = "cursor" as const;
+  readonly live = false as const;
+
+  describeCapability(): ProviderCapabilityDescriptor {
+    return {
+      lane: "cursor",
+      capabilityId: "d2d2-cursor-fixture",
+      available: true,
+      verified: false,
+      readOnly: true,
+      supportsCancellation: true,
+      supportsTimeout: true,
+    };
+  }
+
+  async executeFixture(request: CursorFixtureRequest): Promise<ProviderInvocationResult> {
+    const boundary = validateUntrustedProviderRequest(request);
+    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
+
+    if (request.timeoutMs === undefined) {
+      return {
+        kind: "failure",
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "timeoutMs required (no invented default)",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+
+    // Observed anchors must be independent — never copy expected into observed.
+    const mutation = evaluateSandboxMutationGuards({
+      mutationRequested: false,
+      arbitraryCommandRequested: false,
+      gitWriteRequested: false,
+      observedBranch: request.observedBranch,
+      expectedBranch: request.expectedBranch,
+      observedHead: request.observedHead,
+      expectedHead: request.expectedHead,
+    });
+    if (!("allowed" in mutation) || mutation.allowed !== true) {
+      return {
+        kind: "failure",
+        failure: normalizedFailure({
+          family: "sandbox_blocked",
+          code: "SANDBOX_BLOCKED",
+          userMessage: `Cursor fixture blocked: ${(mutation as { reason: string }).reason}`,
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+
+    const pathMatch = /path=([^\s]+)/.exec(request.instructionSummary);
+    if (pathMatch) {
+      const pathDecision = evaluateSandboxPath({
+        path: pathMatch[1],
+        allowlistRepos: request.allowlistRepos,
+        protectedPaths: request.protectedPaths,
+      });
+      if (!pathDecision.allowed) {
+        return {
+          kind: "failure",
+          failure: normalizedFailure({
+            family:
+              pathDecision.reason === "protected" ? "protected_path" : "sandbox_blocked",
+            code:
+              pathDecision.reason === "protected" ? "PROTECTED_PATH" : "SANDBOX_BLOCKED",
+            userMessage: `Cursor fixture path denied: ${pathDecision.reason}`,
+            retryable: false,
+            correlationId: request.correlationId,
+          }),
+        };
+      }
+    }
+
+    return {
+      kind: "success",
+      completeness: "complete",
+      redactedSummary: safeProviderRedactedSummary({
+        adapter: "FIXTURE/CURSOR",
+        operation: "fixture",
+        status: "ok",
+      }),
+      disclosureNotes: [
+        "cursorUnverified=true",
+        "live=false",
+        "verified=false",
+        "G-D2D-CURSOR-01=NOT_CONSUMED",
+        "no_command_execution",
+        "no_git_write",
+      ],
+      usage: { status: "unavailable", reason: "fixture cursor has no usage" },
+    };
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter.ts
new file mode 100644
index 0000000..dedeb5b
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/platformExecutionEventSinkAdapter.ts
@@ -0,0 +1,83 @@
+/**
+ * EVENT-B — D2-D event semantics mapped onto platform EventSink transport.
+ * Platform catalogue is not the semantic authority.
+ */
+import type { EventSink } from "@/lib/platform/observability/eventSink";
+import type {
+  ExecutionEvent,
+  ExecutionEventSinkPort,
+} from "../../ports/executionEventSinkPort";
+import { assertIsoOrFail } from "../../domain/providerBoundary";
+import { redactEventDetailDeep } from "./redactEventDetail";
+
+function mapType(
+  type: ExecutionEvent["type"],
+): "TOOL_STARTED" | "TOOL_SUCCEEDED" | "TOOL_FAILED" | "SOURCE_LOADED" | "STRUCTURED_OUTPUT_VALIDATED" {
+  switch (type) {
+    case "provider_invocation":
+    case "run_transition":
+      return "TOOL_STARTED";
+    case "validation":
+    case "usage_validated":
+    case "completeness":
+      return "STRUCTURED_OUTPUT_VALIDATED";
+    case "source":
+      return "SOURCE_LOADED";
+    case "cancellation":
+    case "timeout":
+    case "late_result":
+      return "TOOL_FAILED";
+    default:
+      return "TOOL_SUCCEEDED";
+  }
+}
+
+function assertFlatDetail(detail: unknown): Record<string, string | number | boolean | null> {
+  const redacted = redactEventDetailDeep(detail);
+  if (!redacted.ok) {
+    throw new Error(`EVENT_SENSITIVE_DETAIL_FORBIDDEN:${redacted.reason}`);
+  }
+  if (redacted.value === null || typeof redacted.value !== "object" || Array.isArray(redacted.value)) {
+    throw new Error("EVENT_DETAIL_MUST_BE_OBJECT");
+  }
+  const out: Record<string, string | number | boolean | null> = {};
+  for (const [k, v] of Object.entries(redacted.value as Record<string, unknown>)) {
+    if (v !== null && typeof v === "object") {
+      throw new Error("EVENT_NESTED_DETAIL_FORBIDDEN");
+    }
+    if (
+      typeof v === "string" ||
+      typeof v === "number" ||
+      typeof v === "boolean" ||
+      v === null
+    ) {
+      out[k] = v;
+    } else {
+      throw new Error("EVENT_DETAIL_TYPE_FORBIDDEN");
+    }
+  }
+  return out;
+}
+
+export class PlatformExecutionEventSinkAdapter implements ExecutionEventSinkPort {
+  constructor(private readonly sink: EventSink) {}
+
+  emit(event: ExecutionEvent): void {
+    const ts = assertIsoOrFail(event.occurredAt, event.correlationId);
+    if (!ts.ok) {
+      throw new Error(`EVENT_TIMESTAMP_INVALID:${ts.failure.code}`);
+    }
+    const safeDetail = assertFlatDetail({
+      d2dEventType: event.type,
+      runId: event.runId,
+      providerLane: event.providerLane,
+      occurredAt: event.occurredAt,
+      ...event.detail,
+    });
+    this.sink.emit({
+      type: mapType(event.type),
+      correlationId: event.correlationId,
+      detail: safeDetail,
+    });
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts
new file mode 100644
index 0000000..edf594c
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/recordingExecutionEventSink.ts
@@ -0,0 +1,34 @@
+import type {
+  ExecutionEvent,
+  ExecutionEventSinkPort,
+} from "../../ports/executionEventSinkPort";
+import { assertIsoOrFail } from "../../domain/providerBoundary";
+import { redactEventDetailDeep } from "./redactEventDetail";
+
+export class RecordingExecutionEventSink implements ExecutionEventSinkPort {
+  readonly events: ExecutionEvent[] = [];
+
+  emit(event: ExecutionEvent): void {
+    const ts = assertIsoOrFail(event.occurredAt, event.correlationId);
+    if (!ts.ok) {
+      throw new Error(`EVENT_TIMESTAMP_INVALID:${ts.failure.code}`);
+    }
+    const redacted = redactEventDetailDeep(event.detail);
+    if (!redacted.ok) {
+      throw new Error(`EVENT_SENSITIVE_DETAIL_FORBIDDEN:${redacted.reason}`);
+    }
+    // Port type is flat primitives; reject nested objects at runtime.
+    const detail = redacted.value;
+    if (detail !== null && typeof detail === "object") {
+      for (const [, v] of Object.entries(detail as Record<string, unknown>)) {
+        if (v !== null && typeof v === "object") {
+          throw new Error("EVENT_NESTED_DETAIL_FORBIDDEN");
+        }
+      }
+    }
+    this.events.push({
+      ...event,
+      detail: detail as ExecutionEvent["detail"],
+    });
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/redactEventDetail.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/redactEventDetail.ts
new file mode 100644
index 0000000..c18fb74
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/events/redactEventDetail.ts
@@ -0,0 +1,85 @@
+/**
+ * Recursive redaction for D2-D events — no secrets/prompts/raw payloads at any depth.
+ * Pure helpers; used by infrastructure event sinks only.
+ */
+
+const FORBIDDEN_KEY =
+  /^(.*[_-]?)?(secret|password|token|api[_-]?key|authorization|cookie|prompt|rawResponse|raw_prompt|raw_response)([_-].*)?$/i;
+
+const FORBIDDEN_VALUE = /sk-[a-zA-Z0-9]{10,}|ghp_[A-Za-z0-9]{10,}|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|xox[baprs]-/i;
+
+const MAX_DEPTH = 8;
+const MAX_KEYS = 64;
+
+export type RedactionOutcome =
+  | { readonly ok: true; readonly value: unknown }
+  | { readonly ok: false; readonly reason: string };
+
+export function redactEventDetailDeep(
+  input: unknown,
+  depth = 0,
+): RedactionOutcome {
+  if (depth > MAX_DEPTH) {
+    return { ok: false, reason: "detail_depth_exceeded" };
+  }
+  if (input === null || typeof input === "boolean" || typeof input === "number") {
+    return { ok: true, value: input };
+  }
+  if (typeof input === "string") {
+    if (FORBIDDEN_VALUE.test(input)) {
+      return { ok: false, reason: "sensitive_value" };
+    }
+    return { ok: true, value: input };
+  }
+  if (Array.isArray(input)) {
+    if (input.length > MAX_KEYS) {
+      return { ok: false, reason: "detail_array_too_large" };
+    }
+    const out: unknown[] = [];
+    for (const item of input) {
+      const r = redactEventDetailDeep(item, depth + 1);
+      if (!r.ok) return r;
+      out.push(r.value);
+    }
+    return { ok: true, value: out };
+  }
+  if (typeof input === "object") {
+    const entries = Object.entries(input as Record<string, unknown>);
+    if (entries.length > MAX_KEYS) {
+      return { ok: false, reason: "detail_object_too_large" };
+    }
+    const out: Record<string, unknown> = {};
+    for (const [k, v] of entries) {
+      if (FORBIDDEN_KEY.test(k)) {
+        return { ok: false, reason: `forbidden_key:${k}` };
+      }
+      const r = redactEventDetailDeep(v, depth + 1);
+      if (!r.ok) return r;
+      out[k] = r.value;
+    }
+    return { ok: true, value: out };
+  }
+  return { ok: false, reason: "unsupported_detail_type" };
+}
+
+/** Safe AI/Git summary: metadata only — never embed user or provider content. */
+export function safeProviderRedactedSummary(parts: {
+  readonly adapter: string;
+  readonly operation: string;
+  readonly status: string;
+  readonly callIndex?: number;
+  readonly providerId?: string;
+  readonly transport?: string;
+  readonly kind?: string;
+}): string {
+  const bits = [
+    `[${parts.adapter}]`,
+    `op=${parts.operation}`,
+    `status=${parts.status}`,
+  ];
+  if (parts.callIndex != null) bits.push(`calls=${parts.callIndex}`);
+  if (parts.providerId) bits.push(`provider=${parts.providerId}`);
+  if (parts.transport) bits.push(`transport=${parts.transport}`);
+  if (parts.kind) bits.push(`kind=${parts.kind}`);
+  return bits.join(" ");
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts
new file mode 100644
index 0000000..4831e08
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/fakeGitReadAdapter.ts
@@ -0,0 +1,133 @@
+import type { GitReadPort } from "../../ports/gitReadPort";
+import type { GitReadRequest, ProviderInvocationResult } from "../../ports/providerResult";
+import type { ProviderCapabilityDescriptor } from "../../domain/types";
+import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
+import { evaluateSandboxPath } from "../../domain/sandboxContract";
+import { normalizedFailure } from "../../domain/errors";
+import { safeProviderRedactedSummary } from "../events/redactEventDetail";
+
+export type FakeGitReadOptions = {
+  /**
+   * Exact "owner/repo" entries. Empty array = deny all (fail-closed).
+   * Required — no implicit world-open allowlist.
+   */
+  readonly repositoryAllowlist: readonly string[];
+  readonly pathAllowlistPrefixes?: readonly string[];
+};
+
+/** Read-only fake Git adapter — no write methods. verified=false. */
+export class FakeGitReadAdapter implements GitReadPort {
+  readonly lane = "git" as const;
+  readonly transport = "fake" as const;
+
+  constructor(private readonly opts: FakeGitReadOptions) {}
+
+  describeCapability(): ProviderCapabilityDescriptor {
+    return {
+      lane: "git",
+      capabilityId: "d2d2-git-fake",
+      available: true,
+      verified: false,
+      readOnly: true,
+      supportsCancellation: true,
+      supportsTimeout: true,
+    };
+  }
+
+  private repoAllowed(owner: string, repo: string): boolean {
+    const full = `${owner}/${repo}`;
+    return this.opts.repositoryAllowlist.includes(full);
+  }
+
+  async read(request: GitReadRequest): Promise<ProviderInvocationResult> {
+    const boundary = validateUntrustedProviderRequest(request);
+    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
+    if (request.timeoutMs === undefined) {
+      return {
+        kind: "failure",
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "timeoutMs required (no invented default)",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+    if (!this.repoAllowed(request.owner, request.repo)) {
+      return {
+        kind: "failure",
+        failure: normalizedFailure({
+          family: "authorization",
+              code: "AUTHORIZATION_ERROR",
+              userMessage: "Repository not allowlisted",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+
+    if (request.kind === "path_meta" || request.path) {
+      const pathDecision = evaluateSandboxPath({
+        path: request.path ?? "",
+        allowlistRepos: this.opts.pathAllowlistPrefixes ?? [
+          "projects/sfia-studio/",
+          "README.md",
+        ],
+      });
+      if (request.kind === "path_meta" && !request.path) {
+        return {
+          kind: "failure",
+          failure: normalizedFailure({
+            family: "validation",
+            code: "VALIDATION_ERROR",
+            userMessage: "path required for path_meta",
+            retryable: false,
+            correlationId: request.correlationId,
+          }),
+        };
+      }
+      if (!pathDecision.allowed) {
+        return {
+          kind: "failure",
+          failure: normalizedFailure({
+            family: "protected_path",
+            code: "PROTECTED_PATH",
+            userMessage: `Git path denied: ${pathDecision.reason}`,
+            retryable: false,
+            correlationId: request.correlationId,
+          }),
+        };
+      }
+      if (request.kind === "path_meta") {
+        return {
+          kind: "success",
+          completeness: "complete",
+          redactedSummary: safeProviderRedactedSummary({
+            adapter: "FAKE/GIT-C",
+            operation: "path_meta",
+            status: "ok",
+            transport: "fake",
+            kind: "path_meta",
+          }),
+          disclosureNotes: ["transport=fake", "read_only=true", "path_meta=evaluated_no_content"],
+          usage: { status: "unavailable", reason: "git read has no token usage" },
+        };
+      }
+    }
+
+    return {
+      kind: "success",
+      completeness: "complete",
+      redactedSummary: safeProviderRedactedSummary({
+        adapter: "FAKE/GIT-C",
+        operation: "read",
+        status: "ok",
+        transport: "fake",
+        kind: request.kind,
+      }),
+      disclosureNotes: ["transport=fake", "read_only=true", "write=false", "verified=false"],
+      usage: { status: "unavailable", reason: "git read has no token usage" },
+    };
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts
new file mode 100644
index 0000000..a2d1857
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/git/platformGitReadAdapter.ts
@@ -0,0 +1,243 @@
+/**
+ * GIT-C wrapper — transport must be disclosed; no silent fallback; no write.
+ * Repository allowlist enforced at D2-D boundary (exact owner/repo), fail-closed.
+ */
+import type { GithubReadPort } from "@/lib/platform/repository/githubReadAdapter";
+import { decideGithubRepo } from "@/lib/platform/security/pathPolicy";
+import type { GitReadPort } from "../../ports/gitReadPort";
+import type { GitReadRequest, ProviderInvocationResult } from "../../ports/providerResult";
+import type { ProviderCapabilityDescriptor } from "../../domain/types";
+import { validateUntrustedProviderRequest } from "../../domain/providerBoundary";
+import { evaluateSandboxPath } from "../../domain/sandboxContract";
+import { normalizedFailure } from "../../domain/errors";
+import { invokeWithTimeoutAndCancellation } from "../../application/providerInvocation";
+import { safeProviderRedactedSummary } from "../events/redactEventDetail";
+
+export type PlatformGitReadOptions = {
+  /** Required when request.timeoutMs omitted. */
+  readonly defaultTimeoutMs?: number;
+  /**
+   * Exact "owner/repo" allowlist. If omitted, uses platform decideGithubRepo.
+   * Empty array = deny all.
+   */
+  readonly repositoryAllowlist?: readonly string[];
+  readonly pathAllowlistPrefixes?: readonly string[];
+  readonly verified?: boolean;
+};
+
+export class PlatformGitReadAdapter implements GitReadPort {
+  readonly lane = "git" as const;
+  readonly transport: "gh-cli" | "rest" | "local-git";
+
+  constructor(
+    private readonly github: GithubReadPort,
+    transport: "gh-cli" | "rest" | "local-git",
+    private readonly opts?: PlatformGitReadOptions,
+  ) {
+    this.transport = transport;
+  }
+
+  describeCapability(): ProviderCapabilityDescriptor {
+    return {
+      lane: "git",
+      capabilityId: `d2d2-git-platform:${this.transport}`,
+      available: true,
+      verified: this.opts?.verified === true,
+      readOnly: true,
+      supportsCancellation: true,
+      supportsTimeout: true,
+    };
+  }
+
+  private repoAllowed(owner: string, repo: string): boolean {
+    if (this.opts?.repositoryAllowlist !== undefined) {
+      return this.opts.repositoryAllowlist.includes(`${owner}/${repo}`);
+    }
+    return decideGithubRepo(owner, repo).allowed === true;
+  }
+
+  async read(request: GitReadRequest): Promise<ProviderInvocationResult> {
+    const boundary = validateUntrustedProviderRequest(request);
+    if (!boundary.ok) return { kind: "failure", failure: boundary.failure };
+
+    const timeoutMs = request.timeoutMs ?? this.opts?.defaultTimeoutMs;
+    if (timeoutMs === undefined) {
+      return {
+        kind: "failure",
+        failure: normalizedFailure({
+          family: "validation",
+          code: "VALIDATION_ERROR",
+          userMessage: "timeoutMs required (no invented default)",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+
+    if (!this.repoAllowed(request.owner, request.repo)) {
+      return {
+        kind: "failure",
+        failure: normalizedFailure({
+          family: "authorization",
+          code: "AUTHORIZATION_ERROR",
+          userMessage: "Repository not allowlisted",
+          retryable: false,
+          correlationId: request.correlationId,
+        }),
+      };
+    }
+
+    const outcome = await invokeWithTimeoutAndCancellation(
+      async (signal) => {
+        if (signal.aborted) {
+          return {
+            kind: "cancelled" as const,
+            failure: normalizedFailure({
+              family: "cancelled",
+              code: "CANCELLED",
+              userMessage: "Git read cancelled",
+              retryable: false,
+              correlationId: request.correlationId,
+            }),
+          };
+        }
+        try {
+          if (request.kind === "path_meta") {
+            if (!request.path) {
+              return {
+                kind: "failure" as const,
+                failure: normalizedFailure({
+                  family: "validation",
+                  code: "VALIDATION_ERROR",
+                  userMessage: "path required for path_meta",
+                  retryable: false,
+                  correlationId: request.correlationId,
+                }),
+              };
+            }
+            const pathDecision = evaluateSandboxPath({
+              path: request.path,
+              allowlistRepos: this.opts?.pathAllowlistPrefixes ?? [
+                "projects/sfia-studio/",
+                "README.md",
+              ],
+            });
+            if (!pathDecision.allowed) {
+              return {
+                kind: "failure" as const,
+                failure: normalizedFailure({
+                  family: "protected_path",
+                  code: "PROTECTED_PATH",
+                  userMessage: `Git path denied: ${pathDecision.reason}`,
+                  retryable: false,
+                  correlationId: request.correlationId,
+                }),
+              };
+            }
+            return {
+              kind: "success" as const,
+              completeness: "complete" as const,
+              redactedSummary: safeProviderRedactedSummary({
+                adapter: `GIT-C/${this.transport}`,
+                operation: "path_meta",
+                status: "ok",
+                transport: this.transport,
+                kind: "path_meta",
+              }),
+              disclosureNotes: [
+                `transport=${this.transport}`,
+                "read_only=true",
+                "path_meta=evaluated_no_content",
+              ],
+              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
+            };
+          }
+          if (request.kind === "repository") {
+            await this.github.getRepository(request.owner, request.repo);
+            return {
+              kind: "success" as const,
+              completeness: "complete" as const,
+              redactedSummary: safeProviderRedactedSummary({
+                adapter: `GIT-C/${this.transport}`,
+                operation: "read",
+                status: "ok",
+                transport: this.transport,
+                kind: "repository",
+              }),
+              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
+              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
+            };
+          }
+          if (request.kind === "branch") {
+            const ref = request.ref ?? "main";
+            await this.github.getBranch(request.owner, request.repo, ref);
+            return {
+              kind: "success" as const,
+              completeness: "complete" as const,
+              redactedSummary: safeProviderRedactedSummary({
+                adapter: `GIT-C/${this.transport}`,
+                operation: "read",
+                status: "ok",
+                transport: this.transport,
+                kind: "branch",
+              }),
+              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
+              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
+            };
+          }
+          if (request.kind === "commit") {
+            const sha = request.ref ?? "";
+            await this.github.getCommit(request.owner, request.repo, sha);
+            return {
+              kind: "success" as const,
+              completeness: "complete" as const,
+              redactedSummary: safeProviderRedactedSummary({
+                adapter: `GIT-C/${this.transport}`,
+                operation: "read",
+                status: "ok",
+                transport: this.transport,
+                kind: "commit",
+              }),
+              disclosureNotes: [`transport=${this.transport}`, "read_only=true"],
+              usage: { status: "unavailable" as const, reason: "git read has no token usage" },
+            };
+          }
+          return {
+            kind: "failure" as const,
+            failure: normalizedFailure({
+              family: "validation",
+              code: "VALIDATION_ERROR",
+              userMessage: "Unsupported git read kind",
+              retryable: false,
+              correlationId: request.correlationId,
+            }),
+          };
+        } catch (err) {
+          const msg = err instanceof Error ? err.message : "git read failed";
+          const auth = /auth|401|403/i.test(msg);
+          const rate = /rate.?limit|429/i.test(msg);
+          return {
+            kind: "failure" as const,
+            failure: normalizedFailure({
+              family: auth ? "authentication" : rate ? "rate_limited" : "provider_unavailable",
+              code: auth
+                ? "AUTHENTICATION_ERROR"
+                : rate
+                  ? "RATE_LIMITED"
+                  : "PROVIDER_UNAVAILABLE",
+              userMessage: "Git read failed",
+              retryable: rate,
+              correlationId: request.correlationId,
+            }),
+          };
+        }
+      },
+      { timeoutMs, signal: request.signal, correlationId: request.correlationId, maxRetries: 0 },
+    );
+
+    if (outcome.status === "completed") return outcome.result;
+    if (outcome.status === "timed_out") return { kind: "timed_out", failure: outcome.failure };
+    if (outcome.status === "cancelled") return { kind: "cancelled", failure: outcome.failure };
+    return { kind: "failure", failure: outcome.failure };
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts
new file mode 100644
index 0000000..16662ab
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/providerConformance.ts
@@ -0,0 +1,176 @@
+/**
+ * D2D2-01 — shared conformance harness for fake + wrapper adapters.
+ */
+import type { AiExecutionPort } from "../ports/aiExecutionPort";
+import type { GitReadPort } from "../ports/gitReadPort";
+import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
+import type { SecretSourcePort } from "../ports/secretSourcePort";
+import type { ExecutionEventSinkPort } from "../ports/executionEventSinkPort";
+import type { ProviderCapabilityDescriptor } from "../domain/types";
+import { validateUntrustedProviderResult } from "../domain/providerBoundary";
+
+export type ConformanceIssue = {
+  readonly code: string;
+  readonly message: string;
+};
+
+export function assertCapabilityShape(
+  cap: ProviderCapabilityDescriptor,
+  expectedLane: ProviderCapabilityDescriptor["lane"],
+  opts?: { readonly requireUnverified?: boolean },
+): ConformanceIssue[] {
+  const issues: ConformanceIssue[] = [];
+  if (cap.lane !== expectedLane) {
+    issues.push({ code: "LANE_MISMATCH", message: `expected lane ${expectedLane}` });
+  }
+  if (typeof cap.capabilityId !== "string" || !cap.capabilityId) {
+    issues.push({ code: "CAPABILITY_ID", message: "capabilityId required" });
+  }
+  if (typeof cap.available !== "boolean") {
+    issues.push({ code: "AVAILABLE", message: "available must be boolean" });
+  }
+  if (typeof cap.verified !== "boolean") {
+    issues.push({ code: "VERIFIED", message: "verified must be boolean" });
+  }
+  if (expectedLane === "cursor" && cap.verified === true) {
+    issues.push({
+      code: "CURSOR_VERIFIED_FORBIDDEN",
+      message: "Cursor capability must remain unverified without G-D2D-CURSOR-01",
+    });
+  }
+  if (opts?.requireUnverified && cap.verified === true) {
+    issues.push({
+      code: "VERIFIED_WITHOUT_EVIDENCE",
+      message: "verified=true requires explicit evidence; fake/default must be false",
+    });
+  }
+  if (expectedLane === "git" && cap.readOnly !== true) {
+    issues.push({ code: "GIT_NOT_READONLY", message: "Git capability must be readOnly" });
+  }
+  return issues;
+}
+
+export async function runAiPortConformance(port: AiExecutionPort): Promise<ConformanceIssue[]> {
+  const issues = assertCapabilityShape(port.describeCapability(), "ai", {
+    requireUnverified: port.describeCapability().capabilityId.includes("fake"),
+  });
+  const result = await port.complete({
+    correlationId: "conf-ai-1",
+    lane: "ai",
+    operation: "complete",
+    messages: [{ role: "user", content: "ping sk-abcdefghijklmnopqrstuvwxyz alice@example.com" }],
+    timeoutMs: 1000,
+  });
+  const v = validateUntrustedProviderResult(result, "conf-ai-1");
+  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
+  if (result.kind === "success") {
+    if (/sk-|@|ghp_/i.test(result.redactedSummary)) {
+      issues.push({ code: "SUMMARY_LEAK", message: "redactedSummary contains sensitive/user content" });
+    }
+  }
+  return issues;
+}
+
+export async function runGitPortConformance(port: GitReadPort): Promise<ConformanceIssue[]> {
+  const issues = assertCapabilityShape(port.describeCapability(), "git", {
+    requireUnverified: port.transport === "fake",
+  });
+  if (typeof (port as { write?: unknown }).write === "function") {
+    issues.push({ code: "WRITE_SURFACE", message: "Git write method must not exist" });
+  }
+  const result = await port.read({
+    correlationId: "conf-git-1",
+    lane: "git",
+    operation: "read",
+    owner: "example",
+    repo: "example",
+    kind: "repository",
+    timeoutMs: 1000,
+  });
+  const v = validateUntrustedProviderResult(result, "conf-git-1");
+  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
+  if (!port.transport || port.transport === "undisclosed") {
+    issues.push({ code: "TRANSPORT_UNDISCLOSED", message: "transport must be disclosed" });
+  }
+  const pathMeta = await port.read({
+    correlationId: "conf-git-pm",
+    lane: "git",
+    operation: "read",
+    owner: "example",
+    repo: "example",
+    kind: "path_meta",
+    path: "projects/sfia-studio/README.md",
+    timeoutMs: 1000,
+  });
+  if (pathMeta.kind !== "success" && pathMeta.kind !== "failure") {
+    issues.push({ code: "PATH_META_KIND", message: "path_meta must return success or failure" });
+  }
+  return issues;
+}
+
+export async function runCursorPortConformance(
+  port: CursorExecutionPort,
+): Promise<ConformanceIssue[]> {
+  const issues = assertCapabilityShape(port.describeCapability(), "cursor");
+  if (port.live !== false) {
+    issues.push({ code: "LIVE_CURSOR", message: "live Cursor forbidden in D2-D2" });
+  }
+  const result = await port.executeFixture({
+    correlationId: "conf-cursor-1",
+    lane: "cursor",
+    operation: "fixture",
+    instructionSummary: "noop",
+    allowlistRepos: ["projects/sfia-studio/"],
+    protectedPaths: [".git/"],
+    timeoutMs: 1000,
+  });
+  const v = validateUntrustedProviderResult(result, "conf-cursor-1");
+  if (!v.ok) issues.push({ code: "RESULT_INVALID", message: v.failure.userMessage });
+  return issues;
+}
+
+export async function runSecretPortConformance(port: SecretSourcePort): Promise<ConformanceIssue[]> {
+  const issues: ConformanceIssue[] = [];
+  if ("materializeForServerOnly" in port) {
+    issues.push({
+      code: "PUBLIC_MATERIALIZE",
+      message: "SecretSourcePort must not expose materializeForServerOnly",
+    });
+  }
+  const resolved = await port.resolve("TEST_SECRET");
+  const serialized = JSON.stringify(resolved);
+  if (/__FAKE_OPAQUE|sk-|ghp_/i.test(serialized)) {
+    issues.push({ code: "SECRET_IN_RESOLVE", message: "resolve leaked secret material" });
+  }
+  return issues;
+}
+
+export function runEventSinkConformance(sink: ExecutionEventSinkPort): ConformanceIssue[] {
+  const issues: ConformanceIssue[] = [];
+  try {
+    sink.emit({
+      type: "validation",
+      correlationId: "conf-ev-1",
+      runId: "r1",
+      providerLane: "none",
+      occurredAt: new Date().toISOString(),
+      detail: { ok: true },
+    });
+  } catch (e) {
+    issues.push({ code: "EVENT_EMIT", message: String(e) });
+  }
+  try {
+    sink.emit({
+      type: "validation",
+      correlationId: "conf-ev-2",
+      runId: "r1",
+      providerLane: "none",
+      occurredAt: new Date().toISOString(),
+      detail: { nested: { apiKey: "x" } } as never,
+    });
+    issues.push({ code: "NESTED_ACCEPTED", message: "nested secret detail must be rejected" });
+  } catch {
+    // expected
+  }
+  return issues;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts
new file mode 100644
index 0000000..f3f79b2
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/envSecretSourceAdapter.ts
@@ -0,0 +1,28 @@
+import type {
+  SecretResolveResult,
+  SecretSourcePort,
+} from "../../ports/secretSourcePort";
+import type { ServerOnlySecretMaterializer } from "./serverOnlySecretMaterializer";
+
+/** Controlled local env adapter — presence via process.env without leaking into domain DTOs. */
+export class EnvSecretSourceAdapter
+  implements SecretSourcePort, ServerOnlySecretMaterializer
+{
+  async resolve(secretId: string): Promise<SecretResolveResult> {
+    if (!secretId || !/^[A-Z][A-Z0-9_]*$/.test(secretId)) {
+      return { ok: false, reason: "invalid_id", handle: { id: String(secretId), present: false } };
+    }
+    const present = typeof process.env[secretId] === "string" && process.env[secretId]!.length > 0;
+    if (!present) {
+      return { ok: false, reason: "absent", handle: { id: secretId, present: false } };
+    }
+    return { ok: true, handle: { id: secretId, present: true } };
+  }
+
+  /** Server-only — not part of SecretSourcePort. */
+  materialize(secretId: string): string | undefined {
+    if (!/^[A-Z][A-Z0-9_]*$/.test(secretId)) return undefined;
+    const v = process.env[secretId];
+    return typeof v === "string" && v.length > 0 ? v : undefined;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts
new file mode 100644
index 0000000..26873ea
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/fakeSecretSourceAdapter.ts
@@ -0,0 +1,31 @@
+import type {
+  SecretResolveResult,
+  SecretSourcePort,
+} from "../../ports/secretSourcePort";
+import type { ServerOnlySecretMaterializer } from "./serverOnlySecretMaterializer";
+
+/**
+ * Fake secret source — resolves presence only on the public port.
+ * Materialization is a separate server-only surface (not on SecretSourcePort).
+ */
+export class FakeSecretSourceAdapter
+  implements SecretSourcePort, ServerOnlySecretMaterializer
+{
+  constructor(private readonly presentIds: ReadonlySet<string> = new Set(["TEST_SECRET"])) {}
+
+  async resolve(secretId: string): Promise<SecretResolveResult> {
+    if (!secretId || typeof secretId !== "string") {
+      return { ok: false, reason: "invalid_id", handle: { id: String(secretId), present: false } };
+    }
+    if (!this.presentIds.has(secretId)) {
+      return { ok: false, reason: "absent", handle: { id: secretId, present: false } };
+    }
+    return { ok: true, handle: { id: secretId, present: true } };
+  }
+
+  /** Server-only — not part of SecretSourcePort. */
+  materialize(secretId: string): string | undefined {
+    if (!this.presentIds.has(secretId)) return undefined;
+    return `__FAKE_OPAQUE_${secretId}__`;
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer.ts b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer.ts
new file mode 100644
index 0000000..ea33f83
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer.ts
@@ -0,0 +1,26 @@
+/**
+ * Server-only secret materialization — NOT exported from the public root barrel.
+ * Domain/application must never import this module.
+ */
+import { assertServerOnly } from "../../server/serverOnly";
+
+export interface ServerOnlySecretMaterializer {
+  /**
+   * Returns the secret string for infrastructure adapters only.
+   * Must never enter events, evidence, fixtures, domain results, or public ports.
+   */
+  materialize(secretId: string): string | undefined;
+}
+
+export function assertServerOnlySecretMaterializer(
+  value: unknown,
+): asserts value is ServerOnlySecretMaterializer {
+  assertServerOnly("oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer");
+  if (
+    !value ||
+    typeof value !== "object" ||
+    typeof (value as ServerOnlySecretMaterializer).materialize !== "function"
+  ) {
+    throw new Error("Invalid server-only secret materializer");
+  }
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts
new file mode 100644
index 0000000..a81c142
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/aiExecutionPort.ts
@@ -0,0 +1,9 @@
+import type { AiCompletionRequest, ProviderInvocationResult } from "./providerResult";
+import type { ProviderCapabilityDescriptor } from "../domain/types";
+
+/** D2-D AI lane port — provider-independent. */
+export interface AiExecutionPort {
+  readonly lane: "ai";
+  describeCapability(): ProviderCapabilityDescriptor;
+  complete(request: AiCompletionRequest): Promise<ProviderInvocationResult>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts
new file mode 100644
index 0000000..4004075
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/cursorExecutionPort.ts
@@ -0,0 +1,13 @@
+import type { CursorFixtureRequest, ProviderInvocationResult } from "./providerResult";
+import type { ProviderCapabilityDescriptor } from "../domain/types";
+
+/**
+ * D2-D Cursor port — fixture/fake only in D2-D2.
+ * Live Cursor requires G-D2D-CURSOR-01 (NOT consumed).
+ */
+export interface CursorExecutionPort {
+  readonly lane: "cursor";
+  readonly live: false;
+  describeCapability(): ProviderCapabilityDescriptor;
+  executeFixture(request: CursorFixtureRequest): Promise<ProviderInvocationResult>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts
new file mode 100644
index 0000000..9866ada
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/executionEventSinkPort.ts
@@ -0,0 +1,27 @@
+import type { ProviderLane } from "../domain/types";
+
+export type ExecutionEventType =
+  | "run_transition"
+  | "validation"
+  | "human_gate"
+  | "cancellation"
+  | "timeout"
+  | "late_result"
+  | "completeness"
+  | "source"
+  | "usage_validated"
+  | "provider_invocation";
+
+export type ExecutionEvent = {
+  readonly type: ExecutionEventType;
+  readonly correlationId: string;
+  readonly runId: string;
+  readonly providerLane: ProviderLane;
+  readonly occurredAt: string;
+  /** Redacted, provider-independent detail — no secrets/prompts/raw payloads. */
+  readonly detail: Readonly<Record<string, string | number | boolean | null>>;
+};
+
+export interface ExecutionEventSinkPort {
+  emit(event: ExecutionEvent): void;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts
new file mode 100644
index 0000000..54e383d
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/gitReadPort.ts
@@ -0,0 +1,10 @@
+import type { GitReadRequest, ProviderInvocationResult } from "./providerResult";
+import type { ProviderCapabilityDescriptor } from "../domain/types";
+
+/** D2-D GIT-C port — strict read-only; no mutation methods. */
+export interface GitReadPort {
+  readonly lane: "git";
+  readonly transport: "fake" | "local-git" | "gh-cli" | "rest" | "undisclosed";
+  describeCapability(): ProviderCapabilityDescriptor;
+  read(request: GitReadRequest): Promise<ProviderInvocationResult>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts
new file mode 100644
index 0000000..b47c892
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/providerResult.ts
@@ -0,0 +1,91 @@
+/**
+ * D2-D2 provider-independent result / request contracts.
+ * Pure types — no SDK, Node, or platform imports.
+ */
+import type {
+  Completeness,
+  NormalizedFailure,
+  ProviderLane,
+  UsageSummary,
+} from "../domain/types";
+
+export type ProviderOperationKind =
+  | "complete"
+  | "git_read"
+  | "cursor_fixture"
+  | "secret_resolve"
+  | "event_emit";
+
+export type ProviderRequestBase = {
+  readonly correlationId: string;
+  readonly runId?: string;
+  readonly lane: ProviderLane;
+  readonly operation: string;
+  readonly signal?: AbortSignal;
+  readonly timeoutMs?: number;
+};
+
+export type AiCompletionRequest = ProviderRequestBase & {
+  readonly lane: "ai";
+  readonly messages: readonly { readonly role: "system" | "user" | "assistant"; readonly content: string }[];
+  readonly modelHint?: string;
+};
+
+export type GitReadRequest = ProviderRequestBase & {
+  readonly lane: "git";
+  readonly owner: string;
+  readonly repo: string;
+  readonly ref?: string;
+  readonly path?: string;
+  readonly kind: "repository" | "branch" | "commit" | "path_meta";
+};
+
+export type CursorFixtureRequest = ProviderRequestBase & {
+  readonly lane: "cursor";
+  readonly instructionSummary: string;
+  readonly allowlistRepos: readonly string[];
+  readonly protectedPaths: readonly string[];
+  readonly expectedBranch?: string;
+  readonly expectedHead?: string;
+  /** Independent observed anchors — must not be copied from expected. */
+  readonly observedBranch?: string;
+  readonly observedHead?: string;
+};
+
+export type ProviderSuccessPayload = {
+  readonly kind: "success";
+  readonly completeness: Completeness;
+  readonly redactedSummary: string;
+  /** Never contains raw provider payload or secrets. */
+  readonly disclosureNotes: readonly string[];
+  readonly usage: UsageSummary;
+};
+
+export type ProviderFailurePayload = {
+  readonly kind: "failure";
+  readonly failure: NormalizedFailure;
+};
+
+export type ProviderCancelledPayload = {
+  readonly kind: "cancelled";
+  readonly failure: NormalizedFailure;
+};
+
+export type ProviderTimedOutPayload = {
+  readonly kind: "timed_out";
+  readonly failure: NormalizedFailure;
+};
+
+export type ProviderInvocationResult =
+  | ProviderSuccessPayload
+  | ProviderFailurePayload
+  | ProviderCancelledPayload
+  | ProviderTimedOutPayload;
+
+export type LateProviderResultRecord = {
+  readonly kind: "late_result";
+  readonly receivedAt: string;
+  readonly terminalStateAtReceipt: string;
+  readonly redactedSummary: string;
+  readonly mutatesTerminal: false;
+};
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts b/projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts
new file mode 100644
index 0000000..b4a96c9
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/ports/secretSourcePort.ts
@@ -0,0 +1,23 @@
+/**
+ * SECRET-B — secrets by opaque handle only; never return serializable secret values
+ * into domain/application results/events/evidence.
+ *
+ * Materialization is NOT part of this public port.
+ */
+export type SecretHandle = {
+  readonly id: string;
+  readonly present: boolean;
+};
+
+export type SecretResolveResult =
+  | { readonly ok: true; readonly handle: SecretHandle }
+  | {
+      readonly ok: false;
+      readonly reason: "absent" | "expired" | "revoked" | "invalid_id";
+      readonly handle: SecretHandle;
+    };
+
+export interface SecretSourcePort {
+  /** Resolve metadata only — never expose the secret string through this port. */
+  resolve(secretId: string): Promise<SecretResolveResult>;
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts
new file mode 100644
index 0000000..21f2b4e
--- /dev/null
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunProviders.ts
@@ -0,0 +1,72 @@
+/**
+ * Server-only composition for D2-D2 provider adapters.
+ * Does not replace composeExecutionRunMemory — additive wiring only.
+ */
+import { assertServerOnly } from "./serverOnly";
+import { FakeAiExecutionAdapter } from "../infrastructure/ai/fakeAiExecutionAdapter";
+import { FakeGitReadAdapter } from "../infrastructure/git/fakeGitReadAdapter";
+import { FixtureCursorExecutionAdapter } from "../infrastructure/cursor/fixtureCursorExecutionAdapter";
+import { FakeSecretSourceAdapter } from "../infrastructure/secrets/fakeSecretSourceAdapter";
+import { RecordingExecutionEventSink } from "../infrastructure/events/recordingExecutionEventSink";
+import type { AiExecutionPort } from "../ports/aiExecutionPort";
+import type { GitReadPort } from "../ports/gitReadPort";
+import type { CursorExecutionPort } from "../ports/cursorExecutionPort";
+import type { SecretSourcePort } from "../ports/secretSourcePort";
+import type { ExecutionEventSinkPort } from "../ports/executionEventSinkPort";
+
+export type ExecutionRunProviderComposition = {
+  readonly ai: AiExecutionPort;
+  readonly git: GitReadPort;
+  readonly cursor: CursorExecutionPort;
+  readonly secrets: SecretSourcePort;
+  readonly events: ExecutionEventSinkPort;
+  readonly disclosure: {
+    readonly cursorLive: false;
+    readonly gitWrite: false;
+    readonly providersLiveDefault: false;
+    readonly memory: "process_local";
+    readonly gD2dCursor01: "NOT_CONSUMED";
+  };
+};
+
+/** Compose with injected ports — used by fake and platform-stub compositions alike. */
+export function composeExecutionRunProviders(input: {
+  readonly ai: AiExecutionPort;
+  readonly git: GitReadPort;
+  readonly cursor: CursorExecutionPort;
+  readonly secrets: SecretSourcePort;
+  readonly events: ExecutionEventSinkPort;
+}): ExecutionRunProviderComposition {
+  assertServerOnly();
+  return {
+    ai: input.ai,
+    git: input.git,
+    cursor: input.cursor,
+    secrets: input.secrets,
+    events: input.events,
+    disclosure: {
+      cursorLive: false,
+      gitWrite: false,
+      providersLiveDefault: false,
+      memory: "process_local",
+      gD2dCursor01: "NOT_CONSUMED",
+    },
+  };
+}
+
+export function composeExecutionRunProvidersFake(): ExecutionRunProviderComposition {
+  const secretsAdapter = new FakeSecretSourceAdapter();
+  return composeExecutionRunProviders({
+    ai: new FakeAiExecutionAdapter(),
+    git: new FakeGitReadAdapter({
+      repositoryAllowlist: ["o/r", "example/example", "mcleland147/sfia-workspace"],
+      pathAllowlistPrefixes: ["projects/sfia-studio/", "README.md"],
+    }),
+    cursor: new FixtureCursorExecutionAdapter(),
+    // Public composition exposes resolve-only port — no materialize surface.
+    secrets: {
+      resolve: (secretId) => secretsAdapter.resolve(secretId),
+    },
+    events: new RecordingExecutionEventSink(),
+  });
+}
diff --git a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
index 4435157..1d967e6 100644
--- a/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
+++ b/projects/sfia-studio/app/lib/oa/execution-run/server/index.ts
@@ -7,3 +7,8 @@ export {
   type ExecutionRunServerComposition,
 } from "./composeExecutionRunMemory";
 export { assertServerOnly } from "./serverOnly";
+export {
+  composeExecutionRunProviders,
+  composeExecutionRunProvidersFake,
+  type ExecutionRunProviderComposition,
+} from "./composeExecutionRunProviders";

```

## 20. Commit metadata complète (trailer inclus)
```
commit fcfad2e95319152e5d7cc7ec29d557c87af241af
Author:     Morris Cleland <morris@macbook-air1.home>
AuthorDate: Tue Aug 4 09:54:01 2026 +0200
Commit:     Morris Cleland <morris@macbook-air1.home>
CommitDate: Tue Aug 4 09:54:01 2026 +0200

    feat(sfia-studio): add V3.1-D2-D2 read-only adapters

    Co-authored-by: Cursor <cursoragent@cursor.com>

```
Message brut observé :
```
feat(sfia-studio): add V3.1-D2-D2 read-only adapters

Co-authored-by: Cursor <cursoragent@cursor.com>
```

## 21. Analyse du trailer Co-authored-by
1. **Autorisé ?** Aucune règle repository/méthode/workflow/script trouvée interdisant `Co-authored-by`. Précédents nombreux sur main (ex. D2-C `f4ee487` et docs D2-D). D2-D1 `0f77e4c` n’en avait pas — variation historique, pas d’interdiction.
2. **Cohérent avec exécution Cursor ?** Oui — cycle exécuté via agent Cursor ; trailer reflète la co-exécution.
3. **Contredit message exact ?** Le **sujet** est exact. Le body contient un trailer supplémentaire ajouté par l’environnement de commit (non inventé manuellement). La consigne publication interdisait un co-author *inventé* et l’amend ; le sujet requis est respecté.
4. **Règle CI/repo l’interdit-elle ?** Non observée (Required Gate vert ; aucun check message trailer).
5. **Impact traçabilité/sécurité/reviewabilité ?** Traçabilité améliorée ; pas d’impact sécurité package ; reviewabilité inchangée.
6. **Amend nécessaire ?** Non dans ce cycle (interdit). Pas requis pour readiness.
**Classification :** R-PR-D2D2-01 — MINOR / informationnelle — non bloquante.

## 22. Validations locales
| Commande | Exit | Résultat |
|----------|------|----------|
| `npm test -- __tests__/oa/execution-run/` | 0 | 22 files / 130 tests PASS |
| `npm run typecheck` | 0 | PASS |
| `npm run lint` | 0 | PASS (no fix) |
| `npm run build` | 0 | PASS |
| `npm test` | 0 | 124 files / 1176 tests PASS |
| governance 3 suites | 0 | 73 pass / 0 fail |
| `git diff --check origin/main...HEAD` | 0 | PASS |

## 23. Scans
SCANS_CLEAN — 0 findings :
secrets réels / `.env` ; Git write produit ; materialize public / barrel ; SDK/Node dans domain/application ; `.only`/`.skip` ; claims verified=true sur fixtures ; RUN READY / PRODUCTION READY dans code.

## 24. Matrice critères PR readiness
| Critère | Attendu | Observé | Résultat |
|---------|---------|---------|----------|
| branche | delivery/...-d2-d2-read-only-adapters | exact | PASS |
| HEAD | fcfad2e… | fcfad2e… | PASS |
| upstream | origin/delivery/... | exact @ fcfad2e… | PASS |
| origin/main | c38b6ca… | c38b6ca… | PASS |
| merge-base | c38b6ca… | c38b6ca… | PASS |
| ahead/behind | 1 / 0 | 1 / 0 | PASS |
| staged / WT projet | vide / propre hors tmp | OK | PASS |
| package count/hash | 34 / bd92d3da… | 34 / bd92d3da… | PASS |
| PR #309 | OPEN Draft base main | OK | PASS |
| commits/files/stats | 1 / 34 / +2899−0 | OK | PASS |
| fichiers hors manifest | 0 | 0 | PASS |
| CI run 30889710678 | completed success @ fcfad2e… | OK | PASS |
| jobs Detect/Build/Gate | success | success | PASS |
| reviews/comments bloquants | aucun | 0/0/0 | PASS (≠ approbation) |
| targeted tests | 130/130 | 130/130 exit 0 | PASS |
| full Vitest | 1176/1176 | 1176/1176 exit 0 | PASS |
| typecheck/lint/build | PASS | exit 0 | PASS |
| governance | 73/0 | 73/0 | PASS |
| diff --check | PASS | PASS | PASS |
| scans | clean | SCANS_CLEAN | PASS |
| findings QA | VERIFIED IN RE-QA | maintenus | PASS |
| réserves héritées | transportées OPEN | transportées | PASS |
| trailer Co-authored-by | non interdit / qualifié | MINOR R-PR-D2D2-01 | PASS WITH RESERVE |
| aucun mark-ready/merge | respecté | respecté | PASS |

## 25. Findings QA — statut maintenu
F-QA-D2D2-01…11 — VERIFIED IN RE-QA (non rouverts). Aucune correction dans ce cycle.

## 26. Findings PR readiness nouveaux
### R-PR-D2D2-01 — MINOR (non bloquant)
- Observation : trailer `Co-authored-by: Cursor <cursoragent@cursor.com>` présent sur le commit projet.
- Preuve : `git show -s --format=fuller HEAD` ; message body.
- Impact : métadonnée Git ; sujet exact conservé.
- Bloquant : non.
- Action : aucune amend ; transporter pour conscience Morris.

## 27. Réserves transportées (OPEN NOT LIFTED)
- R-QA-REV-01
- R-QA-REV-02
- R-QA-D2C-01
- Cursor product capabilities — UNVERIFIED
- memory process-local only
- R-PR-D2D2-01 (nouveau, MINOR)

Portée inchangée pour les réserves QA héritées ; aucune exposition externe nouvelle rendant ces réserves bloquantes pour D2-D2 (package toujours fake/fixture/read-only ; PR Draft).

## 28. Claims démontrés
- Intégrité package QA = publication = HEAD = remote = PR head
- CI exacte completed success sur SHA projet
- Validations locales Critical vertes
- Scans bornés verts
- PR Draft #309 conforme (1 commit / 34 fichiers / +2899)
- Aucune action mark-ready / merge / push projet

## 29. Claims non démontrés
- Approbation humaine / review formelle
- Levée des réserves R-QA-*
- Cursor live / verified product capabilities
- Persistance durable / multi-instance
- D2-D3 / RUN READY / PRODUCTION READY
- Mark-ready ou merge exécutés

## 30. Package freeze final
- count 34 / hash `bd92d3da575fce4a3697ee81c3efb0db43c7eb54d62e1861989cf445286c086d` — STRICT MATCH avant/après contrôles
- local = remote branch = PR head = `fcfad2e95319152e5d7cc7ec29d557c87af241af`

## 31. Git Truth Check final
- branche projet inchangée ; HEAD `fcfad2e95319152e5d7cc7ec29d557c87af241af` ; staged vide ; WT projet propre hors `.tmp-sfia-review/**`
- PR #309 toujours OPEN isDraft=true non merged (vérifié en fin de cycle)

## 32. Hors scope confirmé
Aucun fichier docs/méthode/scripts/workflows/UI/D2-D3/package.json/lockfile/.env dans le diff projet. Aucune modification projet pendant la campagne.

## 33. Review handoff
- décision : required ; mode publish-in-cycle
- publisher : `scripts/sfia/publish-review-handoff.sh`
- parent distant attendu : `013af4eef1ca5d76461008005d089ad23b690f16`
- message : `docs(review-handoff): publish D2-D2 PR readiness status`
- (IDs post-publish à vérifier sur remote)

## 34. Verdict unique
D2-D2 PR READINESS PASS WITH RESERVES — READY FOR MORRIS MARK-READY / MERGE DECISION

## 35. Prochain gate candidat (non consommé)
GO MARK READY / MERGE SFIA STUDIO V3.1-D2-D2
