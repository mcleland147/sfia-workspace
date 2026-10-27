# SFIA Review Pack — FULL
# AKG-M5 L3-S2 CORR-S2-01 — STRICT EVIDENCE PATH MATCHING — LOCAL CORRECTION PASS 01

## Date / heure

2026-10-27T06:15:28Z (UTC)

## GO Morris exact et limites

**2026-10-27 — OK GO CORR-S2-01.**

Autorisé: correction locale bornée de la comparaison logicalPath ↔ Evidence.location (FS→Git filiation).

**NON autorisé:** CORR-S2-02 · CORR-S2-03 · S8 · Mission Evidence redesign · nouvelle feature L3-S2 · Git Integration · REAL · L4 · PRR/Roadmap edits · commit/push/PR projet.

## Git Truth initial / final

| Check | Observed |
|-------|----------|
| Worktree | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3-s2-generic-proof-continuity` |
| Branch | `feat/akg-m5-l3-s2-generic-proof-continuity` |
| HEAD | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| origin/main | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| Prior handoff tip | `cd09b2c6f3c525e7c262674733c6d2e52161f6c5` / blob `3cf63c47…` |
| L3-S2 local candidate | **PRESERVED** (not overwritten) |
| Project commit/push | **NONE** |

Porcelain (final after correction; includes prior Option B local dirty + CORR-S2-01):

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/w3cPostEvidenceLoop.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolvePreCommitWorkspaceContinuation.ts
 M projects/sfia-studio/app/lib/oa/execution-attempt/domain/resolveVerifiedFilesystemMaterializationPriorAttempt.ts
?? projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f3/ingestGenericFilesystemMaterializationArtifactEvidence.ts
?? projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts

```

## Sources / ref

Process templates/routing/CKC Cycle 8 · Build Doctrine · Roadmap · C1 · Decision Pack 05 · Generic Execution arch · PRR READ-ONLY · v3 33/34/35 · prior Option B handoff FULL.

## R23 — composants / invariants

| Asset | Disposition |
|-------|-------------|
| `evidenceLocationMatchesLogicalPath` | **ADAPT** (CORR-S2-01) |
| `logicalPathFromDurableArtifactLocation` | **KEEP** (used for exact extract) |
| `resolveLogicalPathFromEvidenceLocation` | **KEEP** (inherits fixed matcher) |
| Resolvers pre-commit / prior-A | **READ-ONLY** (consumers unchanged) |
| Producers / allowlist sources | **KEEP** |

Invariant: Evidence.location identity for supersession must equal the required logical file path — no prefix/suffix segment collisions.

## Défaut confirmé

Ancien matcher (Option B Pass 01):

```
loc === req || loc.endsWith("/" + req) || loc.endsWith(req)
```

`loc.endsWith(req)` admits false positives, e.g. required `docs/note.md` vs location `…/xdocs/note.md` (or `xdocs/functional-design.md` vs `docs/functional-design.md`).

## Correction effectuée

- Removed bare `endsWith(req)`.
- Durable marker layouts (`/generic-materialization/`, `/docs-write-artifact/`): extract logical path → **exact equality**.
- Other locations: require segment boundary `endsWith("/" + req)` only.
- Fail-closed on `..` / NUL / empty / `//` malformed logical paths.

## Chemins créés / modifiés (ce cycle)

Modified:
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/fsAnchorArtifactMaterializationEvidenceSources.ts`
- `projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts`
- `projects/sfia-studio/app/__tests__/project-assistant/akgM5L3S2.optionB.lotsAC.d0.test.ts`

No consumer resolver edits. No protected paths.

## Contenu helper corrigé (complet)

```typescript
/**
 * Artifact-materialization Evidence sources that may supersede an FS anchor
 * (FS→SHA continuation). Shared by pre-commit and progressive Attempt-A resolvers.
 *
 * - `execution_attempt:docs_write` (+ dotted suffixes): HISTORICAL durable reading
 *   only — not Product admission of docs_write (#618 retired admission).
 * - `execution_attempt:generic_materialization` (+ dotted suffixes): CURRENT
 *   Product generalist materialization Evidence source (L3-S2 Option B).
 *
 * `IngestExecutionAttemptEvidence` prose sources and `execution_attempt:mission_result`
 * cannot supersede.
 */
export const FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES = [
  "execution_attempt:docs_write",
  "execution_attempt:generic_materialization",
] as const;

export type FsAnchorArtifactMaterializationEvidenceSource =
  (typeof FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES)[number];

/** Canonical Product source stamp for generic Studio-observed file materialization. */
export const GENERIC_FILESYSTEM_MATERIALIZATION_EVIDENCE_SOURCE =
  "execution_attempt:generic_materialization" as const;

export function isAllowlistedArtifactMaterializationSource(
  source: string,
): boolean {
  for (const allowed of FS_ANCHOR_ARTIFACT_MATERIALIZATION_EVIDENCE_SOURCES) {
    if (source === allowed || source.startsWith(`${allowed}.`)) return true;
  }
  return false;
}

/**
 * Supersession / prior-A matching: Evidence.location may be the logical repo path
 * (metadata_only / tests) or an absolute durable external_payload_ref path whose
 * logical suffix equals the required path (Product verify probe).
 *
 * CORR-S2-01 — segment-exact identity only:
 * - exact logical equality after normalization;
 * - durable refs under `/generic-materialization/` or `/docs-write-artifact/`:
 *   compare extracted logical path for exact equality;
 * - otherwise require a `/` segment boundary before the logical path
 *   (`…/docs/note.md`), never bare `endsWith(req)` which falsely matches
 *   `xdocs/note.md` / `autresdocs/note.md` against `docs/note.md`.
 */
export function evidenceLocationMatchesLogicalPath(
  location: string,
  logicalPath: string,
): boolean {
  const loc = location.replace(/\\/g, "/").trim();
  let req = logicalPath.replace(/\\/g, "/").trim();
  if (!loc || !req) return false;
  // Logical identity is repo-relative; strip accidental leading slashes.
  req = req.replace(/^\/+/, "");
  if (!req || req.includes("..") || req.includes("\0")) return false;
  // Refuse malformed logical paths that would collapse segment boundaries.
  if (req.endsWith("/") || req.includes("//")) {
    return false;
  }
  // Refuse traversal / null in Evidence.location (fail-closed, no guessing).
  if (loc.includes("..") || loc.includes("\0")) return false;

  if (loc === req) return true;

  const extracted = logicalPathFromDurableArtifactLocation(loc);
  if (extracted !== loc) {
    // Known durable materialization layout — exact logical equality only.
    if (extracted.includes("..") || extracted.includes("\0")) return false;
    return extracted === req;
  }

  // Non-marker locations: require an explicit path-segment boundary.
  // Do NOT use loc.endsWith(req) — prefix collisions (xdocs/note.md).
  return loc.endsWith(`/${req}`);
}

export function resolveLogicalPathFromEvidenceLocation(
  location: string,
  candidateLogicalPaths: readonly string[],
): string | null {
  const loc = location.replace(/\\/g, "/").trim();
  if (!loc) return null;
  for (const candidate of candidateLogicalPaths) {
    if (evidenceLocationMatchesLogicalPath(loc, candidate)) {
      return candidate.replace(/\\/g, "/").trim();
    }
  }
  return null;
}

/** Map durable absolute refs → logical repo path; leave logical locations unchanged. */
export function logicalPathFromDurableArtifactLocation(location: string): string {
  const loc = location.replace(/\\/g, "/").trim();
  const markers = [
    "/generic-materialization/",
    "/docs-write-artifact/",
  ] as const;
  for (const marker of markers) {
    const idx = loc.indexOf(marker);
    if (idx >= 0) {
      return loc.slice(idx + marker.length);
    }
  }
  return loc;
}

```

## Diff utile tests (git diff tracked tests + CORR section)

```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
index 2dae7536..e485e3a3 100644
--- a/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/execution-attempt/gcecCont01ContinuationResolver.d0.test.ts
@@ -1145,6 +1145,7 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
   function lineageSupersession(input: {
     artifactSource: string;
     artifactAttemptId?: string;
+    artifactLocation?: string;
     extraArtifacts?: Evidence[];
   }) {
     const artifactAttemptId = input.artifactAttemptId ?? "xat:a";
@@ -1170,6 +1171,7 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
         evidence({
           evidenceId: "ev:a",
           source: input.artifactSource,
+          location: input.artifactLocation ?? PATH,
           bindings: {
             projectId: PROJECT,
             cycleInstanceId: CYCLE,
@@ -1209,6 +1211,64 @@ describe("D-GCEC-CONT-01 continuation resolver", () => {
     ).toBe(true);
   });

+  it("L3-S2 generic_materialization (+ dotted suffix) supersedes FS anchor", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+        }),
+      ),
+    ).toBe(true);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization.v1",
+        }),
+      ),
+    ).toBe(true);
+  });
+
+  it("L3-S2 absolute durable generic_materialization location matches logical requiredPath", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${PATH}`,
+        }),
+      ),
+    ).toBe(true);
+  });
+
+  it("CORR-S2-01 prefix collision xdocs/… must NOT supersede required logical path", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/x${PATH}`,
+        }),
+      ),
+    ).toBe(false);
+  });
+
+  it("CORR-S2-01 autres… prefix and .bak suffix must NOT supersede required logical path", () => {
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/autres${PATH}`,
+        }),
+      ),
+    ).toBe(false);
+    expect(
+      isFsAnchorSupersededByVerifiedLocalCommit(
+        lineageSupersession({
+          artifactSource: "execution_attempt:generic_materialization",
+          artifactLocation: `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${PATH}.bak`,
+        }),
+      ),
+    ).toBe(false);
+  });
+
   it("T11 irrelevant Attempt Evidence (wrong source / wrong attempt) → no supersession", () => {
     expect(
       isFsAnchorSupersededByVerifiedLocalCommit(

```

### CORR-S2-01 unit block (lotsAC)

```typescript
describe("AKG-M5 L3-S2 CORR-S2-01 — strict Evidence path matching", () => {
  const req = "docs/note.md";

  it("positives: exact logical + durable marker layouts", () => {
    expect(evidenceLocationMatchesLogicalPath(req, req)).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${req}`,
        req,
      ),
    ).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/docs-write-artifact/${req}`,
        req,
      ),
    ).toBe(true);
    expect(
      evidenceLocationMatchesLogicalPath(`/var/data/${req}`, req),
    ).toBe(true);
  });

  it("negatives: prefix/suffix segment collisions must not match", () => {
    expect(evidenceLocationMatchesLogicalPath("xdocs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath("autresdocs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath("docs/note.md.bak", req)).toBe(
      false,
    );
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/x${req}`,
        req,
      ),
    ).toBe(false);
    expect(
      evidenceLocationMatchesLogicalPath(
        `/tmp/mission-result-refs/refs/attempts/xat:a/generic-materialization/${req}.bak`,
        req,
      ),
    ).toBe(false);
    expect(evidenceLocationMatchesLogicalPath("../docs/note.md", req)).toBe(
      false,
    );
    expect(evidenceLocationMatchesLogicalPath(req, "../docs/note.md")).toBe(
      false,
    );
  });
});


```

Note: helper file is untracked relative to main tip (created in Option B Pass 01); full content above is authoritative for review. `git diff` on untracked helper is empty — content shown in full.

## Tests positifs / négatifs

**Positifs:** exact logical · durable generic_materialization · durable docs-write-artifact · absolute path with `/` + logical suffix · historical docs_write supersession retained · generic_materialization supersession retained.

**Négatifs:** `xdocs/…` / `autresdocs/…` prefix · `.bak` suffix · `..` traversal · malformed required path · resolver-level supersession denied for collisions.

## Validations

cwd `projects/sfia-studio/app`:

| Command | Result |
|---------|--------|
| `npm run typecheck` | **PASS** |
| `npm test -- gcecCont01ContinuationResolver.d0.test.ts akgM5L3S2.optionB.lotsAC.d0.test.ts akgM5L3S1.genericExecutionIntegrated.d0.test.ts` | **49/49 PASS** (3 files) |

Fake/Real: **DET only** · no Cursor REAL · no remote Git project mutation · no OpenAI LIVE.

## Statut CORR-S2-01

**CLOSED locally** (matcher + tests).

## Fake/Real Qualification

DET integrated at tested scope. No REAL claims.

## Impacts R24 (not applied)

PRR 02/03/09 / test map: document that FS-anchor path identity is **segment-exact** (no bare suffix). **R24 SYNC PENDING** — no PRR edit this cycle.

## Réserves / dettes / autres corrections NON traitées

- **CORR-S2-02 OPEN**
- **CORR-S2-03 OPEN**
- **S8 DECISION REQUIRED**
- **R24 SYNC PENDING**
- **L3-S2 GLOBAL NOT COMPLETE**
- **G-REAL NOT GRANTED**
- **RUNTIME V3 NON ADOPTED**

## Git Review Index

| Ref | Value |
|-----|-------|
| origin/main | `6e957ecbf50b009b692cf1fcba2748ee1aa9c862` |
| Delivery branch local | `feat/akg-m5-l3-s2-generic-proof-continuity` @ `6e957ecb…` |
| Project commits this cycle | **0** |
| Prior Option B handoff | `cd09b2c6…` |
| This CORR handoff | see publisher tip |

## Verdict

**CORR-S2-01 LOCAL CORRECTION PASS — READY FOR CHATGPT CRITICAL REVIEW**

CORR-S2-02 OPEN · CORR-S2-03 OPEN · S8 DECISION REQUIRED · R24 SYNC PENDING · L3-S2 GLOBAL NOT COMPLETE · G-REAL NOT GRANTED · RUNTIME V3 NON ADOPTED.

No project Git Integration authorized by this PASS.

---
END OF REVIEW PACK — CORR-S2-01
