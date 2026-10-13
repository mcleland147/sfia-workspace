# SFIA STUDIO — P6-MIN-09 RCD-01 — SINGLE GOVERNED GIT INTEGRATION

**Review Pack level:** FULL
**Cycle:** 13 — PR readiness
**Profil:** CRITICAL
**Typologie:** EVOL / GIT INTEGRATION
**Timestamp:** 2026-10-13 08:39:07 CEST
**GO Morris:** 2026-10-13 — COMMIT + PUSH + PR AUTORISÉS (consommé)
**MERGE:** NON AUTORISÉ
**REAL OpenAI:** NON AUTORISÉ
**POST-MERGE:** NON AUTORISÉ

---

## A. Horodatage Europe/Paris

2026-10-13 08:39:07 CEST

## B. Identification cycle / profil / GO

| Champ | Valeur |
|---|---|
| Projet | SFIA Studio |
| Macro | STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01 |
| Campagne | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 |
| Lot | RCD-01 CP01–CP04 |
| Scénario | P6-MIN-09 Guided Document Review |
| Incident | P6-MIN-09-REAL-DOC-FAILURE-RCD-01 |
| Cycle | 13 PR readiness |
| GO | COMMIT/PUSH/DRAFT PR |
| Merge gate | NOT AUTHORIZED |

## C. Repo-informed / Convergence Pre-check

- Capacité v3 : analyse documentaire Nora dans Product Operating Loop — KEEP Runner/Session/Loop ; ADAPT Adapter/ToolRouter/ReadCoverage/AdaptiveTurnBudget.
- Revue ChatGPT CP04 : PASS — READY FOR GOVERNED GIT INTEGRATION GATE.
- R1–R7 CLOSED AT DETERMINISTIC TESTED SCOPE.
- Architecture parallèle : NONE. Runtime v3 NON ADOPTED.
- Gap restant : qualité analyse documentaire REAL.
- Handoff CP04 consommé : commit `8eac9032…` / blob `ff0b276c…`.

## D. Local Git Truth Check

```
pwd: /Users/morris/Projects/sfia-workspace-p6-min09-documentary-cognitive-reliability-01
branch: fix/p6-min09-documentary-cognitive-reliability-01
HEAD (pre-commit base): d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
origin/main: d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc
post-commit HEAD: 9b855d8ddabd9bf9fffb8561f63d1138d8939be4
remote branch SHA: 9b855d8ddabd9bf9fffb8561f63d1138d8939be4
HEAD == remote branch: TRUE
duplicate PR before create: NONE
remote branch before push: NONE
```

### git status --short (final after commit; pack unstaged)

```
 M .tmp-sfia-review/chatgpt-review.md

```

## E. Base et branche

- Base: `main` @ `d8ceb8ad54d2e84aaa95cdbe3bef4e2814806edc`
- Head: `fix/p6-min09-documentary-cognitive-reliability-01` @ `9b855d8ddabd9bf9fffb8561f63d1138d8939be4`
- Fast-forward push only ; no force push.

## F. Handoff CP04 consommé

Commit `8eac9032d0be422be804f55d81ad1917875a1483`
Blob `ff0b276c7321b416e7c771483e91386652298c9e`
Verdict CP04 : READY FOR CHATGPT REVIEW → gate Git Morris.

## G. Scope de la PR

**13 fichiers RCD-01 attendus + 1 digest mécanique PRR :**

| Path | Type |
|---|---|
| p6.nora.min09.documentaryReliability.d0.test.ts | CREATED |
| documentaryBudgetExhausted.ts | CREATED |
| documentaryReadGuidance.ts | CREATED |
| p6.nora.p1.adaptiveBudget.d0.test.ts | MODIFIED |
| adaptiveTurnBudget.ts | MODIFIED |
| index.ts | MODIFIED |
| readCoverage.ts | MODIFIED |
| runNoraAgentsTurn.ts | MODIFIED |
| runNoraCognitiveTurn.ts | MODIFIED |
| observability/types.ts | MODIFIED |
| gitLocalReadAdapter.ts | MODIFIED |
| toolRouter.ts | MODIFIED |
| tools/types.ts | MODIFIED |
| production-runtime-reference.manifest.json | MODIFIED (digest-only sha256_16 for runNoraCognitiveTurn.ts) |

**Note scope :** le 14e fichier est un sync digest PRR obligatoire pour `npm test` / Required Gate après modification d’une source tracked RCD-01. Aucune réécriture doctrinale des volumes markdown.

**Exclus :** `.tmp-sfia-review/**`, doctrine, Human QA, package.json, REAL config, DOC-PR577.

## H. Git Review Index

RCD-01 cumulative CP01–CP04 on native Agents path ; ceilings 10 / 12000 preserved ; R1–R7 deterministic.

## I. Diff cumulatif exploitable (`d8ceb8ad..HEAD`)

```
 ...p6.nora.min09.documentaryReliability.d0.test.ts | 1689 ++++++++++++++++++++
 .../p6.nora.p1.adaptiveBudget.d0.test.ts           |   16 +
 .../nora-cognitive-runtime/adaptiveTurnBudget.ts   |   35 +
 .../documentaryBudgetExhausted.ts                  |  194 +++
 .../documentaryReadGuidance.ts                     |   26 +
 .../app/lib/nora-cognitive-runtime/index.ts        |   11 +
 .../app/lib/nora-cognitive-runtime/readCoverage.ts |  289 +++-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   69 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |   10 +
 .../app/lib/platform/observability/types.ts        |    4 +-
 .../lib/platform/repository/gitLocalReadAdapter.ts |  216 ++-
 .../app/lib/platform/tools/toolRouter.ts           |  333 +++-
 .../sfia-studio/app/lib/platform/tools/types.ts    |    2 +-
 .../production-runtime-reference.manifest.json     |    2 +-
 14 files changed, 2836 insertions(+), 60 deletions(-)

```

### I.1 Core diffs (adapter + toolRouter)

```diff
diff --git a/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts b/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
index 4dda7c8c..90e31385 100644
--- a/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
+++ b/projects/sfia-studio/app/lib/platform/repository/gitLocalReadAdapter.ts
@@ -60,12 +60,108 @@ export type GitReadFileResult = {
   path: string;
   content: string;
   summary: string;
+  /** True when the requested range content was cut by byte/char caps. */
   truncated: boolean;
+  /**
+   * True when lines exist after the *requested* endLine (document continues).
+   * Independent of truncation — a fully returned short range may still have
+   * later lines.
+   */
+  documentHasMore: boolean;
+  /**
+   * Compat aggregate: truncated || documentHasMore.
+   * Prefer the specific flags for new callers.
+   */
+  hasMore: boolean;
+  /** Requested range (clamped to document bounds). */
   startLine: number;
   endLine: number;
-  hasMore: boolean;
+  requestedStartLine: number;
+  requestedEndLine: number;
+  /**
+   * First line of the *complete* returned span.
+   * When completeLineCount=0, equals requested start (no proven span).
+   */
+  returnedStartLine: number;
+  /**
+   * Last line fully present in content (never a mid-truncated line).
+   * When completeLineCount=0, equals returnedStartLine - 1 (empty proven span).
+   */
+  returnedEndLine: number;
+  /** Number of fully returned lines credited for coverage. */
+  completeLineCount: number;
+  /**
+   * Line number that was cut mid-content (not credited), if any.
+   * Null when no partial line was observed.
+   */
+  partialLineNumber: number | null;
+  /**
+   * True when the line at nextStartLineHint (or requested start) cannot fit
+   * under current byte/char caps even alone — explicit skip, not silent loss.
+   */
+  lineExceedsCap: boolean;
+  totalLines: number;
+  /** Next line to request when more content remains; null when complete through EOF. */
+  nextStartLineHint: number | null;
 };

+/**
+ * Count how many leading lines from `lines[startLine-1..endLine-1]` are fully
+ * present as an exact prefix of `body` (no truncation marker). A mid-cut line
+ * is NOT counted.
+ */
+export function countCompleteReturnedLines(input: {
+  lines: string[];
+  startLine: number;
+  endLine: number;
+  body: string;
+}): { completeLineCount: number; partialLineNumber: number | null } {
+  const { lines, startLine, endLine, body } = input;
+  let offset = 0;
+  let completeLineCount = 0;
+  for (let lineNo = startLine; lineNo <= endLine; lineNo++) {
+    const line = lines[lineNo - 1];
+    if (line === undefined) break;
+    if (completeLineCount > 0) {
+      if (offset >= body.length) {
+        // Clean boundary after a complete line — no partial next line.
+        return { completeLineCount, partialLineNumber: null };
+      }
+      if (body[offset] !== "\n") {
+        return { completeLineCount, partialLineNumber: lineNo };
+      }
+      offset += 1;
+    }
+    if (body.length < offset + line.length) {
+      // Prefix of this line may be present — never credit it as complete.
+      const remaining = body.length - offset;
+      if (remaining > 0 && body.slice(offset) === line.slice(0, remaining)) {
+        return { completeLineCount, partialLineNumber: lineNo };
+      }
+      return {
+        completeLineCount,
+        partialLineNumber: remaining > 0 ? lineNo : null,
+      };
+    }
+    if (body.slice(offset, offset + line.length) !== line) {
+      return { completeLineCount, partialLineNumber: lineNo };
+    }
+    offset += line.length;
+    completeLineCount += 1;
+  }
+  return { completeLineCount, partialLineNumber: null };
+}
+
+function lineFitsCaps(
+  line: string,
+  byteCap: number,
+  charCap: number,
+): boolean {
+  return (
+    Buffer.byteLength(line, "utf8") <= byteCap && line.length <= charCap
+  );
+}
+
 export type GitContentMatch = {
   path: string;
   line: number;
@@ -289,31 +385,113 @@ export class GitLocalReadAdapter {

     const startLine = Math.min(startRequested, totalLines);
     const endLine = Math.max(startLine, Math.min(endRequested, totalLines));
-    const ranged = lines.slice(startLine - 1, endLine).join("\n");
-    const hasMoreLines = endLine < totalLines;
-
-    const cap = Math.min(maxBytes, CT_DEFAULT_READ_MAX_BYTES * 2);
-    const byteSlice =
-      Buffer.byteLength(ranged, "utf8") > cap
-        ? Buffer.from(ranged, "utf8").subarray(0, cap).toString("utf8")
-        : ranged;
-    const byteTruncated = Buffer.byteLength(ranged, "utf8") > cap;
-    const redacted = redactSecrets(byteSlice);
-    const { text, truncated: charTruncated } = truncateText(
-      redacted,
-      CT_MAX_TOOL_RESULT_CHARS,
-    );
-    const truncated = byteTruncated || charTruncated;
-    const hasMore = hasMoreLines || truncated;
+    const documentHasMore = endLine < totalLines;
+
+    // R4 — Redact per-line BEFORE size caps / complete-line accounting.
+    // Never compare redacted body to original lines; never rebuild from raw secrets.
+    const rangedOriginal = lines.slice(startLine - 1, endLine);
+    const rangedRedacted = rangedOriginal.map((line) => redactSecrets(line));
+    const redactedJoined = rangedRedacted.join("\n");
+
+    const byteCap = Math.min(maxBytes, CT_DEFAULT_READ_MAX_BYTES * 2);
+    const charCap = CT_MAX_TOOL_RESULT_CHARS;
+    const byteTruncated = Buffer.byteLength(redactedJoined, "utf8") > byteCap;
+    const byteSlice = byteTruncated
+      ? Buffer.from(redactedJoined, "utf8").subarray(0, byteCap).toString("utf8")
+      : redactedJoined;
+    // Defense: re-redact after byte slice (should be no-op if already clean).
+    const safeSlice = redactSecrets(byteSlice);
+    const charTruncated = safeSlice.length > charCap;
+    const cappedBody = charTruncated ? safeSlice.slice(0, charCap) : safeSlice;
+    const sizeTruncated = byteTruncated || charTruncated;
+
+    // Count against redacted line array (1-based within rangedRedacted).
+    const { completeLineCount, partialLineNumber: partialInRange } =
+      countCompleteReturnedLines({
+        lines: rangedRedacted,
+        startLine: 1,
+        endLine: rangedRedacted.length,
+        body: cappedBody,
+      });
+
+    const returnedStartLine = startLine;
+    const returnedEndLine =
+      completeLineCount > 0 ? startLine + completeLineCount - 1 : startLine - 1;
+    const partialLineNumber =
+      partialInRange != null ? startLine + partialInRange - 1 : null;
+
+    // Rebuild ONLY from redacted complete lines — secrets never re-enter content.
+    const completeContent =
+      completeLineCount > 0
+        ? rangedRedacted.slice(0, completeLineCount).join("\n")
+        : "";
+
+    const soleRedacted = rangedRedacted[0] ?? "";
+    const lineExceedsCap =
+      completeLineCount === 0 &&
+      !lineFitsCaps(soleRedacted, byteCap, charCap);
+
+    let nextStartLineHint: number | null = null;
+    if (completeLineCount > 0) {
+      nextStartLineHint =
+        returnedEndLine < totalLines ? returnedEndLine + 1 : null;
+    } else if (lineExceedsCap) {
+      // Explicit unblockable line under current caps — do not loop forever on it.
+      nextStartLineHint = startLine < totalLines ? startLine + 1 : null;
+    } else if (partialLineNumber != null) {
+      // Fittable line cut mid-way because a multi-line window hit the cap — retry that line.
+      nextStartLineHint = partialLineNumber;
+    } else if (documentHasMore) {
+      nextStartLineHint = endLine + 1;
+    }
+
+    const truncated =
+      sizeTruncated ||
+      completeLineCount < endLine - startLine + 1 ||
+      lineExceedsCap;
+    const hasMore = documentHasMore || truncated;
+
+    const textRaw = truncated
+      ? completeContent
+        ? `${completeContent}\n…[truncated]`
+        : "…[truncated]"
+      : completeContent;
+    // Final defensive redact — content must stay secret-safe.
+    const text = redactSecrets(textRaw);
+
+    const returnedLabel =
+      completeLineCount > 0
+        ? `returned L${returnedStartLine}-${returnedEndLine}`
+        : "returned none";
+
+    const flags = [
+      truncated ? "truncated" : null,
+      documentHasMore ? "documentHasMore" : null,
+      hasMore ? "hasMore" : null,
+      lineExceedsCap ? "lineExceedsCap" : null,
+      partialLineNumber != null ? `partialLine:${partialLineNumber}` : null,
+    ]
+      .filter(Boolean)
+      .join(" ");

     return {
       path: norm.normalized,
       content: text,
       truncated,
+      documentHasMore,
+      hasMore,
       startLine,
       endLine,
-      hasMore,
-      summary: `read ${norm.normalized} L${startLine}-${endLine}/${totalLines} (${text.length} chars)${hasMore ? " hasMore" : ""}`,
+      requestedStartLine: startLine,
+      requestedEndLine: endLine,
+      returnedStartLine,
+      returnedEndLine,
+      completeLineCount,
+      partialLineNumber,
+      lineExceedsCap,
+      totalLines,
+      nextStartLineHint,
+      summary: `read ${norm.normalized} L${startLine}-${endLine}/${totalLines} ${returnedLabel} (${text.length} chars)${flags ? ` ${flags}` : ""}`,
     };
   }

diff --git a/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts b/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
index c57dc074..0a4bcd18 100644
--- a/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/toolRouter.ts
@@ -113,6 +113,281 @@ function failResult(
   };
 }

+const GIT_READ_TRUNCATION_MARKER = "…[truncated]";
+const GIT_READ_TRUNCATION_SUFFIX = `\n${GIT_READ_TRUNCATION_MARKER}`;
+
+function stripGitReadTruncationMarker(content: string): string {
+  if (content.endsWith(GIT_READ_TRUNCATION_SUFFIX)) {
+    return content.slice(0, -GIT_READ_TRUNCATION_SUFFIX.length);
+  }
+  if (content === GIT_READ_TRUNCATION_MARKER) return "";
+  if (content.endsWith(GIT_READ_TRUNCATION_MARKER)) {
+    return content.slice(0, -GIT_READ_TRUNCATION_MARKER.length);
+  }
+  return content;
+}
+
+function asFiniteInt(v: unknown, fallback: number): number {
+  if (typeof v === "number" && Number.isFinite(v)) return Math.floor(v);
+  if (typeof v === "string" && /^-?\d+$/.test(v)) return parseInt(v, 10);
+  return fallback;
+}
+
+/**
+ * R5 — Prepare git_local_read_file for the model-visible envelope.
+ * Reserves metadata, caps content on complete-line boundaries only, and
+ * reconciles coverage fields to the FINAL payload (not the adapter-only view).
+ */
+export function prepareGitLocalReadDataForModel(
+  raw: Record<string, unknown>,
+  maxChars = CT_MAX_TOOL_RESULT_CHARS,
+): {
+  data: Record<string, unknown>;
+  truncated: boolean;
+  json: string;
+  summary: string;
+} {
+  const path = typeof raw.path === "string" ? raw.path : "";
+  const startLine = asFiniteInt(raw.startLine, 1);
+  const endLine = asFiniteInt(raw.endLine, startLine);
+  const requestedStartLine = asFiniteInt(raw.requestedStartLine, startLine);
+  const requestedEndLine = asFiniteInt(raw.requestedEndLine, endLine);
+  const returnedStartLine = asFiniteInt(raw.returnedStartLine, startLine);
+  const totalLines = asFiniteInt(raw.totalLines, 0);
+  const documentHasMore = Boolean(raw.documentHasMore);
+  const adapterLineExceedsCap = Boolean(raw.lineExceedsCap);
+  const adapterTruncated = Boolean(raw.truncated);
+  const adapterPartial =
+    raw.partialLineNumber == null || raw.partialLineNumber === undefined
+      ? null
+      : asFiniteInt(raw.partialLineNumber, returnedStartLine);
+  const adapterNext =
+    raw.nextStartLineHint == null || raw.nextStartLineHint === undefined
+      ? null
+      : asFiniteInt(raw.nextStartLineHint, returnedStartLine);
+
+  const body = redactSecrets(
+    stripGitReadTruncationMarker(
+      typeof raw.content === "string" ? raw.content : "",
+    ),
+  );
+  const lines = body.length === 0 ? [] : body.split("\n");
+
+  const buildAttempt = (count: number) => {
+    const secondCut = count < lines.length;
+    const finalTruncated = secondCut ? true : adapterTruncated;
+    const completeContent =
+      count > 0 ? lines.slice(0, count).join("\n") : "";
+    const text = finalTruncated
+      ? completeContent
+        ? `${completeContent}${GIT_READ_TRUNCATION_SUFFIX}`
+        : GIT_READ_TRUNCATION_MARKER
+      : completeContent;
+
+    const returnedEndLine =
+      count > 0 ? returnedStartLine + count - 1 : returnedStartLine - 1;
+
+    let partialLineNumber: number | null = null;
+    let nextStartLineHint: number | null = null;
+    let lineExceedsCap = false;
+
+    if (secondCut) {
+      if (count === 0) {
+        // R6 — First available line cannot fit the FINAL model envelope
+        // (even alone), or adapter already marked it unblockable.
+        // Explicit skip under existing lineExceedsCap protocol — never
+        // re-hint the same startLine (that loops Nora forever).
+        lineExceedsCap = true;
+        partialLineNumber = null;
+        nextStartLineHint =
+          returnedStartLine < totalLines ? returnedStartLine + 1 : null;
+      } else {
+        // Second ceiling cut mid-range — retry the first unavailable line.
+        partialLineNumber = returnedStartLine + count;
+        nextStartLineHint = returnedStartLine + count;
+      }
+    } else if (count > 0) {
+      nextStartLineHint =
+        returnedEndLine < totalLines ? returnedEndLine + 1 : null;
+      partialLineNumber = adapterPartial;
+      lineExceedsCap = false;
+      // Preserve adapter next hint when it already matches honest progression.
+      if (adapterNext != null && nextStartLineHint == null) {
+        nextStartLineHint = adapterNext;
+      }
+    } else {
+      // Empty body from adapter (lineExceedsCap / zero complete).
+      lineExceedsCap = adapterLineExceedsCap;
+      partialLineNumber = adapterPartial;
+      if (lineExceedsCap) {
+        nextStartLineHint =
+          returnedStartLine < totalLines ? returnedStartLine + 1 : null;
+      } else if (adapterPartial != null) {
+        nextStartLineHint = adapterPartial;
+      } else if (adapterNext != null) {
+        nextStartLineHint = adapterNext;
+      } else if (documentHasMore) {
+        nextStartLineHint = endLine + 1;
+      } else {
+        nextStartLineHint = null;
+      }
+    }
+
+    const hasMore = documentHasMore || finalTruncated;
+    const dataObj: Record<string, unknown> = {
+      path,
+      content: redactSecrets(text),
+      truncated: finalTruncated,
+      documentHasMore,
+      hasMore,
+      startLine,
+      endLine,
+      requestedStartLine,
+      requestedEndLine,
+      returnedStartLine,
+      returnedEndLine,
+      completeLineCount: count,
+      partialLineNumber,
+      lineExceedsCap,
+      totalLines,
+      nextStartLineHint,
+    };
+
+    const returnedLabel =
+      count > 0
+        ? `returned L${returnedStartLine}-${returnedEndLine}`
+        : "returned none";
+    const flags = [
+      finalTruncated ? "truncated" : null,
+      documentHasMore ? "documentHasMore" : null,
+      hasMore ? "hasMore" : null,
+      lineExceedsCap ? "lineExceedsCap" : null,
+      partialLineNumber != null ? `partialLine:${partialLineNumber}` : null,
+    ]
+      .filter(Boolean)
+      .join(" ");
+    const summary = `read ${path} L${startLine}-${endLine}/${totalLines} ${returnedLabel} (${text.length} chars)${flags ? ` ${flags}` : ""}`;
+
+    const envelope = redactSecrets(
+      JSON.stringify({
+        ok: true,
+        summary,
+        data: dataObj,
+        truncated: finalTruncated,
+      }),
+    );
+
+    return {
+      data: dataObj,
+      summary,
+      envelope,
+      truncated: finalTruncated,
+      json: redactSecrets(JSON.stringify(dataObj)),
+    };
+  };
+
+  // Prefer max complete lines whose FULL model envelope fits the ceiling.
+  for (let count = lines.length; count >= 0; count -= 1) {
+    const attempt = buildAttempt(count);
+    if (attempt.envelope.length <= maxChars) {
+      return {
+        data: attempt.data,
+        truncated: attempt.truncated,
+        json: attempt.json,
+        summary: attempt.summary,
+      };
+    }
+  }
+
+  // Last resort: even empty truncated content cannot fit with metadata.
+  // Fail-closed — do not invent progression (R6). Shrink until envelope fits.
+  const minimalCandidates: Array<{
+    summary: string;
+    data: Record<string, unknown>;
+  }> = [
+    {
+      summary: `read ${path} L${startLine}-${endLine}/${totalLines} returned none (0 chars) truncated RESULT_CAPPED`,
+      data: {
+        path,
+        content: GIT_READ_TRUNCATION_MARKER,
+        truncated: true,
+        documentHasMore,
+        hasMore: true,
+        note: "RESULT_CAPPED",
+        startLine,
+        endLine,
+        requestedStartLine,
+        requestedEndLine,
+        returnedStartLine,
+        returnedEndLine: returnedStartLine - 1,
+        completeLineCount: 0,
+        partialLineNumber: null,
+        lineExceedsCap: false,
+        totalLines,
+        nextStartLineHint: null,
+      },
+    },
+    {
+      summary: "read RESULT_CAPPED returned none",
+      data: {
+        truncated: true,
+        note: "RESULT_CAPPED",
+        completeLineCount: 0,
+        returnedStartLine,
+        returnedEndLine: returnedStartLine - 1,
+        nextStartLineHint: null,
+        totalLines,
+        content: GIT_READ_TRUNCATION_MARKER,
+        documentHasMore,
+        hasMore: true,
+        lineExceedsCap: false,
+      },
+    },
+    {
+      summary: "RESULT_CAPPED",
+      data: {
+        truncated: true,
+        note: "RESULT_CAPPED",
+        completeLineCount: 0,
+        nextStartLineHint: null,
+      },
+    },
+  ];
+
+  for (const candidate of minimalCandidates) {
+    const envelope = redactSecrets(
+      JSON.stringify({
+        ok: true,
+        summary: candidate.summary,
+        data: candidate.data,
+        truncated: true,
+      }),
+    );
+    if (envelope.length <= maxChars) {
+      return {
+        data: candidate.data,
+        truncated: true,
+        json: redactSecrets(JSON.stringify(candidate.data)),
+        summary: candidate.summary,
+      };
+    }
+  }
+
+  // Absolute floor — still honest, never claims coverage or progression.
+  const floorData = {
+    note: "RESULT_CAPPED",
+    completeLineCount: 0,
+    nextStartLineHint: null,
+    truncated: true,
+  };
+  return {
+    data: floorData,
+    truncated: true,
+    json: JSON.stringify(floorData),
+    summary: "RESULT_CAPPED",
+  };
+}
+
 /**
  * Cap large string fields BEFORE JSON serialization so the payload is always
  * valid JSON. Never mid-truncate a serialized JSON string then re-parse it.
@@ -230,9 +505,25 @@ export function resolveToolPathOrRef(
     case "git_local_read_file": {
       const p = asString(dataObj?.path) ?? asString(args.path);
       if (!p) return null;
-      const start = dataObj?.startLine;
-      const end = dataObj?.endLine;
-      if (typeof start === "number" && typeof end === "number") {
+      const completeCount = dataObj?.completeLineCount;
+      if (typeof completeCount === "number" && completeCount <= 0) {
+        // No proven complete span — bare path (avoid false #L range).
+        return p;
+      }
+      // Prefer returned range (honest coverage) over requested-only bounds.
+      const start =
+        typeof dataObj?.returnedStartLine === "number"
+          ? dataObj.returnedStartLine
+          : dataObj?.startLine;
+      const end =
+        typeof dataObj?.returnedEndLine === "number"
+          ? dataObj.returnedEndLine
+          : dataObj?.endLine;
+      if (
+        typeof start === "number" &&
+        typeof end === "number" &&
+        end >= start
+      ) {
         return `${p}#L${start}-${end}`;
       }
       return p;
@@ -497,12 +788,23 @@ export async function routeToolCall(
           path: r.path,
           content: r.content,
           truncated: r.truncated,
+          documentHasMore: r.documentHasMore,
+          hasMore: r.hasMore,
           startLine: r.startLine,
           endLine: r.endLine,
-          hasMore: r.hasMore,
+          requestedStartLine: r.requestedStartLine,
+          requestedEndLine: r.requestedEndLine,
+          returnedStartLine: r.returnedStartLine,
+          returnedEndLine: r.returnedEndLine,
+          completeLineCount: r.completeLineCount,
+          partialLineNumber: r.partialLineNumber,
+          lineExceedsCap: r.lineExceedsCap,
+          totalLines: r.totalLines,
+          nextStartLineHint: r.nextStartLineHint,
         };
         summary = r.summary;
-        truncated = r.truncated || r.hasMore;
+        // usage.truncated = content cut / incomplete delivery — not documentHasMore alone.
+        truncated = r.truncated;
         break;
       }
       case "git_local_get_diff": {
@@ -830,8 +1132,25 @@ export async function routeToolCall(
       }
     }

-    const prepared = prepareToolDataForModel(data, CT_MAX_TOOL_RESULT_CHARS);
-    if (prepared.truncated) truncated = true;
+    let prepared: { data: unknown; truncated: boolean; json: string };
+    if (
+      name === "git_local_read_file" &&
+      data &&
+      typeof data === "object" &&
+      !Array.isArray(data)
+    ) {
+      // R5 — coverage metadata must describe the FINAL model-visible envelope.
+      const gitPrepared = prepareGitLocalReadDataForModel(
+        data as Record<string, unknown>,
+        CT_MAX_TOOL_RESULT_CHARS,
+      );
+      prepared = gitPrepared;
+      summary = gitPrepared.summary;
+      truncated = gitPrepared.truncated;
+    } else {
+      prepared = prepareToolDataForModel(data, CT_MAX_TOOL_RESULT_CHARS);
+      if (prepared.truncated) truncated = true;
+    }
     if (prepared.json.length > CT_MAX_TOOL_RESULT_CHARS * 4) {
       const result = failResult(
         request.toolCallId,

```

### I.2 Other modified files (+ PRR digest)

```diff
diff --git a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
index 46f31e2b..29cc8efc 100644
--- a/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.p1.adaptiveBudget.d0.test.ts
@@ -101,6 +101,22 @@ describe("P6 Nora P1 — Adaptive maxTurns policy", () => {
     );
   });

+  it("natural mono-file synthèse does not set sourceBreadth=high", () => {
+    const hints = inferWorkloadHintsFromUserContent(
+      "Consulte projects/sfia-studio/docs/a.md et fais-en une synthèse.",
+    );
+    expect(hints.toolDependency).toBe("high");
+    expect(hints.reasoningDepth).toBe("medium");
+    expect(hints.sourceBreadth).toBeUndefined();
+    const budget = resolveAdaptiveMaxTurns({
+      strategyClass: "Routine",
+      signals: hints,
+    });
+    // Mono-doc tool+depth bump lifts Routine base to at least Focused floor (8).
+    expect(budget.requestedMaxTurns).toBe(8);
+    expect(budget.reasonCodes).toContain("known_mono_doc_tool_synthesis_bump");
+  });
+
   it("null strategy falls back to legacy 5", () => {
     expect(
       resolveAdaptiveMaxTurns({ strategyClass: null }).requestedMaxTurns,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
index c08d4306..0772901a 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/adaptiveTurnBudget.ts
@@ -65,6 +65,23 @@ function isKnownMediumOrHigh(value: SignalValue | undefined): boolean {
  * Light, observable hints from Pilot request text — never invents LOW for unknowns.
  * Used only to elevate known dimensions when wording is explicit.
  */
+/**
+ * True when Pilot wording requests reading/synthesizing a concrete repo path
+ * (mono-file documentary mission). Bare "document" alone remains non-elevating.
+ */
+export function isNaturalMonoFileDocumentaryRequest(content: string): boolean {
+  const c = content.trim();
+  if (!c) return false;
+  const hasRepoPath =
+    /(?:^|[\s`"'(])((?:projects|docs|method|prompts)\/[\w./+-]+\.(?:md|txt|markdown))\b/i.test(
+      c,
+    ) || /(?:^|[\s`"'(])([\w./+-]+\.(?:md|txt|markdown))\b/i.test(c);
+  if (!hasRepoPath) return false;
+  return /synth[eè]se|r[eé]sum(?:er|é|e)?|consulter|reten(?:ir|iens)|lire|analys(?:e|er)|review|guid(?:ed)?\s+document/i.test(
+    c,
+  );
+}
+
 export function inferWorkloadHintsFromUserContent(
   content: string,
 ): Partial<CognitiveWorkloadSignals> {
@@ -80,6 +97,13 @@ export function inferWorkloadHintsFromUserContent(
     hints.sourceBreadth = "high";
     hints.toolDependency = "high";
   }
+  // Mono-file natural synthesis: tool dependency + synthesis depth — NOT sourceBreadth=high.
+  if (isNaturalMonoFileDocumentaryRequest(c)) {
+    hints.toolDependency = "high";
+    if (hints.reasoningDepth !== "high") {
+      hints.reasoningDepth = "medium";
+    }
+  }
   if (
     /v[ée]rif|cross[- ]?check|contradic|coherence|coh[ée]rence|entre\s+documents/i.test(
       c,
@@ -163,6 +187,17 @@ export function resolveAdaptiveMaxTurns(input: {
       reasonCodes.push("known_medium_doc_tool_bump");
       base = bumped;
     }
+  } else if (
+    // Mono-file documentary synthesis: high toolDependency + medium/high depth
+    // → at least Focused base (8), never invents sourceBreadth, never exceeds ceiling.
+    isKnownHigh(signals.toolDependency) &&
+    isKnownMediumOrHigh(signals.reasoningDepth)
+  ) {
+    const bumped = Math.min(ceiling, Math.max(base, 8));
+    if (bumped > base) {
+      reasonCodes.push("known_mono_doc_tool_synthesis_bump");
+      base = bumped;
+    }
   }

   // Unknown-heavy path: do not elevate beyond strategy base (UNKNOWN ≠ LOW inflate).
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts
new file mode 100644
index 00000000..7b5aded4
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts
@@ -0,0 +1,194 @@
+/**
+ * Honest Product text when mission maxTurns is exhausted without extractable
+ * assistant synthesis. Never invents document content from reasoning/tools.
+ */
+import {
+  parseGitLocalReadCoverageSignals,
+  unionReturnedLineSpans,
+  type ReadCoverageFact,
+} from "./readCoverage";
+
+export const MODEL_TURN_BUDGET_REACHED_STOCK =
+  "Model-turn budget reached (maxTurns).";
+
+type ToolLikeItem = {
+  type?: string;
+  name?: string;
+  rawItem?: { name?: string; type?: string };
+  output?: unknown;
+};
+
+function asRecord(value: unknown): Record<string, unknown> | null {
+  return value && typeof value === "object"
+    ? (value as Record<string, unknown>)
+    : null;
+}
+
+function extractToolResultPayload(item: ToolLikeItem): {
+  summary?: string;
+  data?: Record<string, unknown>;
+} | null {
+  const output = item.output;
+  if (typeof output === "string") {
+    try {
+      const parsed = JSON.parse(output) as Record<string, unknown>;
+      return {
+        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
+        data: asRecord(parsed.data) ?? undefined,
+      };
+    } catch {
+      return null;
+    }
+  }
+  const outObj = asRecord(output);
+  if (!outObj) return null;
+  if (typeof outObj.text === "string") {
+    try {
+      const parsed = JSON.parse(outObj.text) as Record<string, unknown>;
+      return {
+        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
+        data: asRecord(parsed.data) ?? undefined,
+      };
+    } catch {
+      return { summary: outObj.text.slice(0, 240) };
+    }
+  }
+  return {
+    summary: typeof outObj.summary === "string" ? outObj.summary : undefined,
+    data: asRecord(outObj.data) ?? outObj,
+  };
+}
+
+/**
+ * Build coverage facts from Runner newItems / Session-like tool results.
+ */
+export function collectReadFactsFromRunItems(
+  items: unknown[],
+): ReadCoverageFact[] {
+  const facts: ReadCoverageFact[] = [];
+  for (const raw of items) {
+    const item = asRecord(raw) as ToolLikeItem | null;
+    if (!item) continue;
+    const name =
+      item.name ??
+      item.rawItem?.name ??
+      (typeof (item as { toolName?: string }).toolName === "string"
+        ? (item as { toolName?: string }).toolName
+        : undefined);
+    const type = item.type ?? item.rawItem?.type;
+    const isResult =
+      type === "function_call_result" ||
+      type === "tool_call_output_item" ||
+      type === "function_call_output";
+    if (!isResult && name !== "git_local_read_file") continue;
+    if (name && name !== "git_local_read_file") continue;
+    if (name !== "git_local_read_file" && !isResult) continue;
+
+    const payload = extractToolResultPayload(item);
+    if (!payload) continue;
+    const data = payload.data ?? {};
+    const summary =
+      payload.summary ??
+      (typeof data.summary === "string" ? data.summary : undefined);
+    const path =
+      (typeof data.path === "string" && data.path) ||
+      (summary ? parseGitLocalReadCoverageSignals({ summary })?.documentPath : null);
+    if (!path && !summary) continue;
+
+    const parsed = parseGitLocalReadCoverageSignals({
+      summary: summary ?? null,
+      pathOrRef:
+        typeof data.returnedStartLine === "number" &&
+        typeof data.returnedEndLine === "number"
+          ? `${path}#L${data.returnedStartLine}-${data.returnedEndLine}`
+          : path,
+    });
+    if (!parsed) continue;
+
+    const truncated =
+      data.truncated === true || parsed.truncated === true;
+    const documentHasMore =
+      data.documentHasMore === true || parsed.documentHasMore === true;
+    const returnedStartLine =
+      typeof data.returnedStartLine === "number"
+        ? data.returnedStartLine
+        : parsed.returnedStartLine;
+    const returnedEndLine =
+      typeof data.returnedEndLine === "number"
+        ? data.returnedEndLine
+        : parsed.returnedEndLine;
+
+    facts.push({
+      pathOrRef: `${parsed.documentPath}#L${returnedStartLine}-${returnedEndLine}`,
+      documentPath: parsed.documentPath,
+      // Budget-exhausted disclosure never promotes FULL from tool crumbs alone.
+      coverage: "partial",
+      startLine: parsed.startLine,
+      endLine: parsed.endLine,
+      returnedStartLine,
+      returnedEndLine,
+      totalLines: parsed.totalLines,
+      hasMore: truncated || documentHasMore || parsed.hasMore,
+      truncated,
+      documentHasMore,
+      nextStartLineHint:
+        typeof data.nextStartLineHint === "number"
+          ? data.nextStartLineHint
+          : parsed.nextStartLineHint,
+      signals: [
+        truncated ? "truncated" : null,
+        documentHasMore ? "documentHasMore" : null,
+      ].filter(Boolean) as string[],
+      origin: "current_turn",
+    });
+  }
+  return facts;
+}
+
+/**
+ * Honest incomplete narrative — never fabricates document synthesis.
+ */
+export function buildDocumentaryBudgetExhaustedText(input: {
+  items: unknown[];
+  stockMessage?: string;
+}): string {
+  const stock = input.stockMessage ?? MODEL_TURN_BUDGET_REACHED_STOCK;
+  const facts = collectReadFactsFromRunItems(input.items);
+  if (facts.length === 0) {
+    return stock;
+  }
+
+  const unions = unionReturnedLineSpans(facts);
+  const lines: string[] = [
+    stock,
+    "",
+    "Analyse documentaire inachevée — budget model-turn atteint avant une synthèse finalisée.",
+    "Périmètre réellement remis par l'outil (plages retournées, pas le contenu inventé) :",
+  ];
+
+  for (const u of unions) {
+    const spanTxt = u.spans
+      .map((s) => `L${s.start}-${s.end}`)
+      .join(", ");
+    const total =
+      typeof u.totalLines === "number" ? ` / ${u.totalLines}` : "";
+    lines.push(
+      `- ${u.documentPath}: ${spanTxt}${total}${u.provenFull ? " (couverture intégrale prouvée)" : " (couverture partielle)"}`,
+    );
+  }
+
+  const hints = facts
+    .map((f) => f.nextStartLineHint)
+    .filter((n): n is number => typeof n === "number");
+  if (hints.length > 0) {
+    lines.push(
+      `Reprise possible depuis la ligne ${Math.min(...hints)} (nextStartLineHint observé) — aucune HumanDecision ni Deliverable inventés.`,
+    );
+  } else {
+    lines.push(
+      "Aucune HumanDecision ni Deliverable inventés ; statut Product incomplete.",
+    );
+  }
+
+  return lines.join("\n");
+}
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts
new file mode 100644
index 00000000..f0e982e1
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts
@@ -0,0 +1,26 @@
+/**
+ * Bounded documentary-read guidance appended to system instructions when the
+ * Pilot request is a natural mono-file Git synthesis mission.
+ *
+ * Not a parallel document engine — advisory only. OpenAI-native-first (R22).
+ */
+
+export const DOCUMENTARY_READ_GUIDANCE_BLOCK = [
+  "=== DOCUMENTARY READ GUIDANCE (bounded / native tools) ===",
+  "- Prefer startLine/endLine windows sized to stay under the tool character cap.",
+  "- truncated=true ⇒ the requested range was cut; continue from nextStartLineHint.",
+  "- documentHasMore=true with truncated=false ⇒ the range was fully returned; later lines remain.",
+  "- Do not re-read already returned prefixes; advance with nextStartLineHint.",
+  "- Before the mission model-turn budget ends, write a clearly PARTIAL synthesis of portions actually returned.",
+  "- Never claim full-document analysis without FULL returned coverage L1–total and no truncation.",
+].join("\n");
+
+export function appendDocumentaryReadGuidance(
+  systemInstructions: string,
+  enabled: boolean,
+): string {
+  if (!enabled) return systemInstructions;
+  const base = systemInstructions.trim();
+  if (base.includes("DOCUMENTARY READ GUIDANCE")) return systemInstructions;
+  return `${base}\n\n${DOCUMENTARY_READ_GUIDANCE_BLOCK}`;
+}
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 09f32abd..4bbc11a6 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -85,12 +85,22 @@ export type { NoraTurnBudget } from "./turnBudget";
 export {
   resolveAdaptiveMaxTurns,
   inferWorkloadHintsFromUserContent,
+  isNaturalMonoFileDocumentaryRequest,
   LEGACY_DEFAULT_MAX_TURNS,
   ADAPTIVE_MAX_TURNS_FLOOR,
   ADAPTIVE_MAX_TURNS_CEILING,
   STRATEGY_BASE_MAX_TURNS,
 } from "./adaptiveTurnBudget";
 export type { AdaptiveMaxTurnsDecision } from "./adaptiveTurnBudget";
+export {
+  appendDocumentaryReadGuidance,
+  DOCUMENTARY_READ_GUIDANCE_BLOCK,
+} from "./documentaryReadGuidance";
+export {
+  buildDocumentaryBudgetExhaustedText,
+  collectReadFactsFromRunItems,
+  MODEL_TURN_BUDGET_REACHED_STOCK,
+} from "./documentaryBudgetExhausted";
 export {
   planContinuationSegments,
   emptyContinuationObserve,
@@ -332,6 +342,7 @@ export {
   MW4_DOCUMENT_READ_TOOL,
   overallToGroundingCoverageKind,
   parseGitLocalReadCoverageSignals,
+  unionReturnedLineSpans,
 } from "./readCoverage";
 export type {
   ParsedReadRange,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
index a9195bc4..cf5ec23d 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/readCoverage.ts
@@ -3,10 +3,16 @@
  *
  * Derives coverage from the REAL ToolRouter/EventSink contract:
  * - toolName, status, summary, source.pathOrRef
- * - git_local_read_file summary: `read <path> L<start>-<end>/<total> (...) [hasMore]`
- * - pathOrRef may be `<path>#L<start>-<end>`
+ * - git_local_read_file summary (current):
+ *   `read <path> L<reqStart>-<reqEnd>/<total> returned L<retStart>-<retEnd> (N chars) [truncated] [documentHasMore] [hasMore]`
+ * - legacy summary still accepted: `read <path> L<start>-<end>/<total> (...) [hasMore]`
+ * - pathOrRef may be `<path>#L<start>-<end>` (prefer returned range when present)
  *
  * Search ≠ read. Only git_local_read_file establishes document read coverage.
+ *
+ * hasMore ≠ truncated:
+ * - truncated = requested range content was cut by size caps
+ * - documentHasMore = lines exist after the requested endLine
  */

 export type ReadCoverageKind =
@@ -21,10 +27,22 @@ export type ReadCoverageFact = {
   /** Bare path without #L range suffix when known. */
   documentPath?: string;
   coverage: ReadCoverageKind;
+  /** Requested range start (when known). */
   startLine?: number;
+  /** Requested range end (when known). */
   endLine?: number;
+  /** Returned range start (honest payload bounds). */
+  returnedStartLine?: number;
+  /** Returned range end (honest payload bounds). */
+  returnedEndLine?: number;
+  completeLineCount?: number;
+  partialLineNumber?: number | null;
+  lineExceedsCap?: boolean;
   totalLines?: number;
   hasMore?: boolean;
+  truncated?: boolean;
+  documentHasMore?: boolean;
+  nextStartLineHint?: number | null;
   /** Optional signals observed in summary/pathOrRef. */
   signals?: string[];
   /** current_turn vs remembered prior-turn continuity. */
@@ -39,18 +57,36 @@ export type ReadCoverageAggregate = {
 /** Sole primitive that establishes document read coverage for MW4-S03. */
 export const MW4_DOCUMENT_READ_TOOL = "git_local_read_file" as const;

-const READ_SUMMARY_RE =
-  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(hasMore)?/i;
+/** Current summary with returned range + explicit flags. */
+const READ_SUMMARY_RETURNED_RE =
+  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s+returned\s+L(\d+)-(\d+)\s*\(([^)]*)\)\s*(.*)$/i;
+
+/** Current summary when zero complete lines were credited. */
+const READ_SUMMARY_RETURNED_NONE_RE =
+  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s+returned\s+none\s*\(([^)]*)\)\s*(.*)$/i;
+
+/** Legacy summary without returned range. */
+const READ_SUMMARY_LEGACY_RE =
+  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(.*)$/i;

 const PATH_RANGE_RE = /^(.*)#L(\d+)-(\d+)$/;

 export type ParsedReadRange = {
   documentPath: string;
+  /** Requested start. */
   startLine: number;
+  /** Requested end. */
   endLine: number;
+  returnedStartLine: number;
+  returnedEndLine: number;
+  completeLineCount?: number;
+  partialLineNumber?: number | null;
+  lineExceedsCap?: boolean;
   totalLines?: number;
   hasMore: boolean;
   truncated: boolean;
+  documentHasMore: boolean;
+  nextStartLineHint?: number | null;
 };

 /**
@@ -63,34 +99,148 @@ export function parseGitLocalReadCoverageSignals(input: {
   const summary = (input.summary ?? "").trim();
   const pathOrRef = (input.pathOrRef ?? "").trim();

-  const fromSummary = READ_SUMMARY_RE.exec(summary);
-  if (fromSummary) {
-    const documentPath = fromSummary[1]!;
-    const startLine = Number(fromSummary[2]);
-    const endLine = Number(fromSummary[3]);
-    const totalLines = Number(fromSummary[4]);
-    const paren = (fromSummary[5] ?? "").toLowerCase();
-    const hasMoreToken = Boolean(fromSummary[6]);
+  const fromReturnedNone = READ_SUMMARY_RETURNED_NONE_RE.exec(summary);
+  if (fromReturnedNone) {
+    const documentPath = fromReturnedNone[1]!;
+    const startLine = Number(fromReturnedNone[2]);
+    const endLine = Number(fromReturnedNone[3]);
+    const totalLines = Number(fromReturnedNone[4]);
+    const paren = (fromReturnedNone[5] ?? "").toLowerCase();
+    const flags = (fromReturnedNone[6] ?? "").toLowerCase();
+    const truncated =
+      /\btruncated\b/.test(flags) ||
+      /\btruncat/.test(paren) ||
+      /\bcapped\b/.test(paren) ||
+      true;
+    const documentHasMore =
+      /\bdocumenthasmore\b/.test(flags) || endLine < totalLines;
+    const lineExceedsCap = /\blineexceedscap\b/.test(flags);
+    const partialMatch = /partialline:(\d+)/i.exec(flags);
+    const partialLineNumber = partialMatch
+      ? Number(partialMatch[1])
+      : startLine;
+    const nextStartLineHint = lineExceedsCap
+      ? startLine < totalLines
+        ? startLine + 1
+        : null
+      : partialLineNumber;
+    return {
+      documentPath,
+      startLine,
+      endLine,
+      returnedStartLine: startLine,
+      returnedEndLine: startLine - 1,
+      completeLineCount: 0,
+      partialLineNumber,
+      lineExceedsCap,
+      totalLines,
+      hasMore: true,
+      truncated,
+      documentHasMore,
+      nextStartLineHint,
+    };
+  }
+
+  const fromReturned = READ_SUMMARY_RETURNED_RE.exec(summary);
+  if (fromReturned) {
+    const documentPath = fromReturned[1]!;
+    const startLine = Number(fromReturned[2]);
+    const endLine = Number(fromReturned[3]);
+    const totalLines = Number(fromReturned[4]);
+    const returnedStartLine = Number(fromReturned[5]);
+    const returnedEndLine = Number(fromReturned[6]);
+    const paren = (fromReturned[7] ?? "").toLowerCase();
+    const flags = (fromReturned[8] ?? "").toLowerCase();
+    const truncated =
+      /\btruncated\b/.test(flags) ||
+      /\btruncat/.test(paren) ||
+      /\bcapped\b/.test(paren);
+    const documentHasMore =
+      /\bdocumenthasmore\b/.test(flags) ||
+      (!truncated && endLine < totalLines);
+    const hasMoreToken = /\bhasmore\b/.test(flags);
+    const hasMore =
+      hasMoreToken || truncated || documentHasMore || returnedEndLine < totalLines;
+    const lineExceedsCap = /\blineexceedscap\b/.test(flags);
+    const partialMatch = /partialline:(\d+)/i.exec(flags);
+    const partialLineNumber = partialMatch ? Number(partialMatch[1]) : null;
+    const completeLineCount =
+      returnedEndLine >= returnedStartLine
+        ? returnedEndLine - returnedStartLine + 1
+        : 0;
+    const nextStartLineHint =
+      partialLineNumber != null
+        ? partialLineNumber
+        : returnedEndLine < totalLines
+          ? returnedEndLine + 1
+          : null;
+    return {
+      documentPath,
+      startLine,
+      endLine,
+      returnedStartLine,
+      returnedEndLine,
+      completeLineCount,
+      partialLineNumber,
+      lineExceedsCap,
+      totalLines,
+      hasMore,
+      truncated,
+      documentHasMore,
+      nextStartLineHint,
+    };
+  }
+
+  const fromLegacy = READ_SUMMARY_LEGACY_RE.exec(summary);
+  if (fromLegacy) {
+    const documentPath = fromLegacy[1]!;
+    const startLine = Number(fromLegacy[2]);
+    const endLine = Number(fromLegacy[3]);
+    const totalLines = Number(fromLegacy[4]);
+    const paren = (fromLegacy[5] ?? "").toLowerCase();
+    const flags = (fromLegacy[6] ?? "").toLowerCase();
+    const hasMoreToken = /\bhasmore\b/.test(flags);
+    // Explicit truncation only — do NOT treat bare hasMore as truncated.
     const truncated =
-      /\btruncat/.test(paren) || /\bcapped\b/.test(paren) || hasMoreToken;
+      /\btruncated\b/.test(flags) ||
+      /\btruncat/.test(paren) ||
+      /\bcapped\b/.test(paren) ||
+      // Legacy L1-total + hasMore implies content cut (range claimed full).
+      (hasMoreToken && endLine >= totalLines && startLine === 1);
+    const documentHasMore =
+      /\bdocumenthasmore\b/.test(flags) ||
+      (!truncated && endLine < totalLines) ||
+      (hasMoreToken && endLine < totalLines && !truncated);
+    const hasMore =
+      hasMoreToken || truncated || documentHasMore || endLine < totalLines;
     return {
       documentPath,
       startLine,
       endLine,
+      // Legacy: cannot prove returned ≠ requested — treat requested as upper bound.
+      returnedStartLine: startLine,
+      returnedEndLine: endLine,
       totalLines,
-      hasMore: hasMoreToken || truncated || endLine < totalLines,
+      hasMore,
       truncated,
+      documentHasMore,
+      nextStartLineHint: endLine < totalLines ? endLine + 1 : null,
     };
   }

   const fromPath = PATH_RANGE_RE.exec(pathOrRef);
   if (fromPath) {
+    const startLine = Number(fromPath[2]);
+    const endLine = Number(fromPath[3]);
     return {
       documentPath: fromPath[1]!,
-      startLine: Number(fromPath[2]),
-      endLine: Number(fromPath[3]),
+      startLine,
+      endLine,
+      returnedStartLine: startLine,
+      returnedEndLine: endLine,
       hasMore: false,
       truncated: false,
+      documentHasMore: false,
     };
   }

@@ -100,8 +250,11 @@ export function parseGitLocalReadCoverageSignals(input: {
       documentPath: pathOrRef,
       startLine: 1,
       endLine: 1,
+      returnedStartLine: 1,
+      returnedEndLine: 1,
       hasMore: true,
       truncated: false,
+      documentHasMore: true,
     };
   }

@@ -111,18 +264,96 @@ export function parseGitLocalReadCoverageSignals(input: {
 export function classifyGitLocalReadCompleteness(
   parsed: ParsedReadRange,
 ): "full" | "partial" {
-  const { startLine, endLine, totalLines, hasMore, truncated } = parsed;
-  if (truncated || hasMore) return "partial";
+  const {
+    returnedStartLine,
+    returnedEndLine,
+    totalLines,
+    hasMore,
+    truncated,
+    documentHasMore,
+  } = parsed;
+  if (truncated || documentHasMore || hasMore) return "partial";
   if (typeof totalLines !== "number" || !Number.isFinite(totalLines)) {
     // pathOrRef-only range without total → cannot prove full document.
     return "partial";
   }
-  // CORR-01A hard rule: FULL only when L1-total and no hasMore/truncation.
-  // L100-N/N is PARTIAL even when endLine === totalLines.
-  if (startLine === 1 && endLine === totalLines) return "full";
+  // CORR-01A hard rule: FULL only when returned L1-total and no truncation/more.
+  if (returnedStartLine === 1 && returnedEndLine === totalLines) return "full";
   return "partial";
 }

+/**
+ * Honest union of *returned* line spans per document (not requested ranges).
+ * Never invents completeness percentages.
+ */
+export function unionReturnedLineSpans(facts: ReadCoverageFact[]): Array<{
+  documentPath: string;
+  spans: Array<{ start: number; end: number }>;
+  totalLines?: number;
+  provenFull: boolean;
+}> {
+  const byDoc = new Map<
+    string,
+    { spans: Array<{ start: number; end: number }>; totalLines?: number }
+  >();
+  for (const fact of facts) {
+    if (fact.coverage !== "full" && fact.coverage !== "partial") continue;
+    const doc = (fact.documentPath ?? fact.pathOrRef).trim();
+    if (!doc) continue;
+    const start = fact.returnedStartLine ?? fact.startLine;
+    const end = fact.returnedEndLine ?? fact.endLine;
+    if (
+      typeof start !== "number" ||
+      typeof end !== "number" ||
+      !Number.isFinite(start) ||
+      !Number.isFinite(end) ||
+      end < start ||
+      (typeof fact.completeLineCount === "number" && fact.completeLineCount <= 0)
+    ) {
+      // Empty / non-proven span (e.g. mid-line cut with 0 complete lines).
+      continue;
+    }
+    // Truncated facts still contribute the returned span only.
+    const entry = byDoc.get(doc) ?? { spans: [], totalLines: fact.totalLines };
+    if (typeof fact.totalLines === "number") entry.totalLines = fact.totalLines;
+    entry.spans.push({ start, end });
+    byDoc.set(doc, entry);
+  }
+
+  const out: Array<{
+    documentPath: string;
+    spans: Array<{ start: number; end: number }>;
+    totalLines?: number;
+    provenFull: boolean;
+  }> = [];
+
+  for (const [documentPath, entry] of byDoc) {
+    const sorted = [...entry.spans].sort((a, b) => a.start - b.start);
+    const merged: Array<{ start: number; end: number }> = [];
+    for (const span of sorted) {
+      const last = merged[merged.length - 1];
+      if (!last || span.start > last.end + 1) {
+        merged.push({ ...span });
+      } else {
+        last.end = Math.max(last.end, span.end);
+      }
+    }
+    const totalLines = entry.totalLines;
+    const docFacts = facts.filter(
+      (f) => (f.documentPath ?? f.pathOrRef).trim() === documentPath,
+    );
+    const anyTruncated = docFacts.some((f) => f.truncated === true);
+    const provenFull =
+      typeof totalLines === "number" &&
+      !anyTruncated &&
+      merged.length === 1 &&
+      merged[0]!.start === 1 &&
+      merged[0]!.end === totalLines;
+    out.push({ documentPath, spans: merged, totalLines, provenFull });
+  }
+  return out;
+}
+
 /**
  * Infer coverage for a single tool event row against the real EventSink shape.
  */
@@ -198,10 +429,16 @@ export function deriveReadCoverageFromToolEvent(input: {
     `L${parsed.startLine}-${parsed.endLine}${
       typeof parsed.totalLines === "number" ? `/${parsed.totalLines}` : ""
     }`,
+    `returned L${parsed.returnedStartLine}-${parsed.returnedEndLine}`,
   ];
   if (parsed.hasMore) signals.push("hasMore");
   if (parsed.truncated) signals.push("truncated");
-  if (coverage === "partial" && parsed.endLine === parsed.totalLines && parsed.startLine > 1) {
+  if (parsed.documentHasMore) signals.push("documentHasMore");
+  if (
+    coverage === "partial" &&
+    parsed.returnedEndLine === parsed.totalLines &&
+    parsed.returnedStartLine > 1
+  ) {
     signals.push("suffix_range_not_full");
   }

@@ -211,8 +448,16 @@ export function deriveReadCoverageFromToolEvent(input: {
     coverage,
     startLine: parsed.startLine,
     endLine: parsed.endLine,
+    returnedStartLine: parsed.returnedStartLine,
+    returnedEndLine: parsed.returnedEndLine,
+    completeLineCount: parsed.completeLineCount,
+    partialLineNumber: parsed.partialLineNumber,
+    lineExceedsCap: parsed.lineExceedsCap,
     totalLines: parsed.totalLines,
     hasMore: parsed.hasMore,
+    truncated: parsed.truncated,
+    documentHasMore: parsed.documentHasMore,
+    nextStartLineHint: parsed.nextStartLineHint,
     signals,
     origin: "current_turn",
   };
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
index d518f509..93cbf75c 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraAgentsTurn.ts
@@ -24,6 +24,10 @@ import {
   resolveAdaptiveMaxTurns,
   type AdaptiveMaxTurnsDecision,
 } from "./adaptiveTurnBudget";
+import {
+  buildDocumentaryBudgetExhaustedText,
+  MODEL_TURN_BUDGET_REACHED_STOCK,
+} from "./documentaryBudgetExhausted";
 import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
 import {
   CONTINUATION_MAX_SEGMENTS,
@@ -657,8 +661,11 @@ export async function runNoraAgentsTurn(
   }) => {
     budget.limitReached = true;
     const lastText = extractTextFromRunItems(runData.newItems);
+    const fallback = buildDocumentaryBudgetExhaustedText({
+      items: Array.isArray(runData.newItems) ? runData.newItems : [],
+    });
     return {
-      finalOutput: lastText.trim() || "Model-turn budget reached (maxTurns).",
+      finalOutput: lastText.trim() || fallback,
       includeInHistory: false,
     };
   };
@@ -835,15 +842,14 @@ export async function runNoraAgentsTurn(
             segmentsExecuted += 1;
             allottedTurns = absoluteCap;
             const state = segmentError.state;
+            const segmentItems = Array.isArray(
+              (segmentError as { newItems?: unknown[] }).newItems,
+            )
+              ? ((segmentError as { newItems?: unknown[] }).newItems as unknown[])
+              : [];
             const partial =
-              extractTextFromRunItems(
-                Array.isArray(
-                  (segmentError as { newItems?: unknown[] }).newItems,
-                )
-                  ? ((segmentError as { newItems?: unknown[] })
-                      .newItems as unknown[])
-                  : [],
-              ) || "Model-turn budget reached (maxTurns).";
+              extractTextFromRunItems(segmentItems) ||
+              buildDocumentaryBudgetExhaustedText({ items: segmentItems });

             if (
               continuationPlan.enable &&
@@ -1006,6 +1012,51 @@ export async function runNoraAgentsTurn(
     effectiveMaxTurns: maxTurns,
   };

+  // Axe A — bounded observability (no secrets, no document body, no CoT).
+  if (input.sink) {
+    input.sink.emit({
+      type: "ADAPTIVE_BUDGET_OBSERVED",
+      correlationId: input.correlationId,
+      detail: {
+        projectId: input.projectId,
+        strategyClass: adaptiveObserve.strategyClass,
+        requestedMaxTurns: adaptiveObserve.requestedMaxTurns,
+        effectiveMaxTurns: adaptiveObserve.effectiveMaxTurns,
+        floor: adaptiveObserve.floor,
+        ceiling: adaptiveObserve.ceiling,
+        explicitOverride: adaptiveObserve.explicitOverride,
+        reasonCodes: adaptiveObserve.reasonCodes,
+        limitReached: budget.limitReached || budgetStop,
+        toolCalls: budget.executedToolCalls,
+        model:
+          typeof model === "string"
+            ? model
+            : usage.model ?? null,
+        provenance: adaptiveObserve.explicitOverride
+          ? "explicit_override"
+          : "adaptive_policy",
+      },
+    });
+    input.sink.emit({
+      type: "CONTINUATION_OBSERVED",
+      correlationId: input.correlationId,
+      detail: {
+        projectId: input.projectId,
+        continued: continuationObserve.continued,
+        segmentsExecuted: continuationObserve.segmentsExecuted,
+        missionMaxTurns: continuationObserve.missionMaxTurns,
+        segmentMaxTurns: continuationObserve.segmentMaxTurns,
+        allottedTurns: continuationObserve.allottedTurns,
+        stopReason: continuationObserve.stopReason,
+        reasonCodes: continuationObserve.reasonCodes,
+        limitReached: budget.limitReached || budgetStop,
+        stockFallbackUsed:
+          typeof text === "string" &&
+          text.includes(MODEL_TURN_BUDGET_REACHED_STOCK),
+      },
+    });
+  }
+
   return {
     text,
     usage,
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
index 6e2d8633..30bffc46 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts
@@ -36,8 +36,10 @@ import {
 } from "./cognitiveWorkloadPolicy";
 import {
   inferWorkloadHintsFromUserContent,
+  isNaturalMonoFileDocumentaryRequest,
   resolveAdaptiveMaxTurns,
 } from "./adaptiveTurnBudget";
+import { appendDocumentaryReadGuidance } from "./documentaryReadGuidance";
 import { validateRuntimeReasoningCapability } from "./reasoningCapability";
 import { buildRunnerModelSettingsForEffort } from "./reasoningModelSettings";
 import {
@@ -879,6 +881,10 @@ export async function runNoraCognitiveTurn(
       systemInstructions,
       readDisclosure,
     );
+    systemInstructions = appendDocumentaryReadGuidance(
+      systemInstructions,
+      isNaturalMonoFileDocumentaryRequest(lastUser.content),
+    );
     const turn = await runNoraCognitiveCore({
       cognitiveMode: "conversation",
       correlationId: input.correlationId,
@@ -1048,6 +1054,10 @@ export async function runNoraCognitiveTurn(
     systemInstructions,
     mw4Prep.readCoverageDisclosure,
   );
+  systemInstructions = appendDocumentaryReadGuidance(
+    systemInstructions,
+    isNaturalMonoFileDocumentaryRequest(lastUser.content),
+  );
   if (engageMw6 && sourceStrategy) {
     systemInstructions = appendSourceStrategyDisclosure(
       systemInstructions,
diff --git a/projects/sfia-studio/app/lib/platform/observability/types.ts b/projects/sfia-studio/app/lib/platform/observability/types.ts
index f1254ffc..39bb2878 100644
--- a/projects/sfia-studio/app/lib/platform/observability/types.ts
+++ b/projects/sfia-studio/app/lib/platform/observability/types.ts
@@ -16,7 +16,9 @@ export type TechnicalEventType =
   | "TOOL_LOOP_COMPLETED"
   | "TOOL_LOOP_LIMIT_REACHED"
   | "COGNITIVE_STRATEGY_SELECTED"
-  | "COGNITIVE_ROUTING_SELECTED";
+  | "COGNITIVE_ROUTING_SELECTED"
+  | "ADAPTIVE_BUDGET_OBSERVED"
+  | "CONTINUATION_OBSERVED";

 export interface TechnicalEvent {
   type: TechnicalEventType;
diff --git a/projects/sfia-studio/app/lib/platform/tools/types.ts b/projects/sfia-studio/app/lib/platform/tools/types.ts
index 00c5b8b3..042b53ff 100644
--- a/projects/sfia-studio/app/lib/platform/tools/types.ts
+++ b/projects/sfia-studio/app/lib/platform/tools/types.ts
@@ -173,7 +173,7 @@ export const CONTROL_TOWER_TOOL_DEFINITIONS: ToolDefinition[] = [
   {
     name: "git_local_read_file",
     description:
-      "Read a UTF-8 text file relative to repo root. Optional startLine/endLine (1-based inclusive) for deep/ranged reads. truncated/hasMore mean the document was not fully obtained. Paths validated server-side. Read-only.",
+      "Read a UTF-8 text file relative to repo root. Optional startLine/endLine (1-based inclusive). Result fields: requested vs returned line ranges; truncated=true means the requested range was cut by size caps; documentHasMore=true means later lines exist after the requested end; nextStartLineHint is the next line to request. Prefer small windows that fit under the char cap; continue from nextStartLineHint; do not re-read already returned prefixes; leave a turn for a clearly PARTIAL synthesis before the mission turn budget ends. Paths validated server-side. Read-only.",
     parameters: {
       type: "object",
       properties: {
diff --git a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
index 030c43bd..4dd9057f 100644
--- a/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
+++ b/projects/sfia-studio/production-runtime-reference/production-runtime-reference.manifest.json
@@ -622,7 +622,7 @@
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/runNoraCognitiveTurn.ts",
-      "sha256_16": "0ae04ca7503de628"
+      "sha256_16": "f4804915f8906eda"
     },
     {
       "path": "projects/sfia-studio/app/lib/nora-cognitive-runtime/productSqliteSession.ts",

```

### J/K — CREATED `projects/sfia-studio/app/__tests__/nora-cognitive-runtime/p6.nora.min09.documentaryReliability.d0.test.ts` (contenu complet commit `9b855d8ddabd`)

```typescript
/**
 * P6-MIN-09 — Documentary Cognitive Reliability Correction 01 (deterministic).
 * ZERO REAL / ZERO provider calls.
 * @vitest-environment node
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, describe, expect, it } from "vitest";
import {
  ScriptedModel,
  assistantMessage,
  functionCall,
} from "@openai/agents/testing";
import {
  ADAPTIVE_MAX_TURNS_CEILING,
  ProductSqliteSession,
  buildDocumentaryBudgetExhaustedText,
  decideCognitiveStrategy,
  inferWorkloadHintsFromUserContent,
  isNaturalMonoFileDocumentaryRequest,
  normalizeCognitiveWorkloadSignals,
  parseGitLocalReadCoverageSignals,
  resolveAdaptiveMaxTurns,
  runNoraAgentsTurn,
  sfiaBoundaryInstructions,
  unionReturnedLineSpans,
} from "@/lib/nora-cognitive-runtime";
import {
  GitLocalReadAdapter,
  countCompleteReturnedLines,
} from "@/lib/platform/repository/gitLocalReadAdapter";
import { CT_MAX_TOOL_RESULT_CHARS } from "@/lib/platform/tools/types";
import {
  createToolCallId,
  prepareGitLocalReadDataForModel,
  prepareToolDataForModel,
  routeToolCall,
  toolResultForModel,
} from "@/lib/platform/tools/toolRouter";
import type { TechnicalEvent } from "@/lib/platform/observability/types";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { redactSecrets } from "@/lib/platform/security/redaction";

const T1_PROMPT = `Nora, j'ai un document dans notre dépôt Git qui pourrait nous être utile pour ce projet :
projects/sfia-studio/product-simplification/01-chat-first-product-simplification-cadrage.md
Tu peux le consulter et m'en faire une synthèse de ce que tu en retiens ?`;

const dirs: string[] = [];

function tmpGitRepo(lineCount: number, lineWidth = 40): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-doc-"));
  dirs.push(dir);
  const rel = "projects/sfia-studio/docs/min09-doc.md";
  fs.mkdirSync(path.join(dir, "projects/sfia-studio/docs"), { recursive: true });
  const body = Array.from({ length: lineCount }, (_, i) => {
    const n = i + 1;
    return `L${n} ${"x".repeat(Math.max(0, lineWidth - 4))}`;
  }).join("\n");
  fs.writeFileSync(path.join(dir, rel), body, "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: dir,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

/**
 * R7 — Fiction-only secrets built programmatically so they MATCH redaction.ts
 * regexes (length + charset) without embedding real credentials.
 * Construction is intentional and reproducible in Review Pack evidence.
 */
function fictionSkToken(): string {
  // /\bsk-[A-Za-z0-9_-]{10,}\b/
  return `sk-${"A".repeat(12)}`;
}
function fictionGhpToken(): string {
  // /\bghp_[A-Za-z0-9]{20,}\b/
  return `ghp_${"B".repeat(20)}`;
}
function fictionOpenAiKeyLine(): string {
  // /\bOPENAI_API_KEY\s*=\s*.+/gi
  return `OPENAI_API_KEY=${fictionSkToken()}`;
}
function fictionBearerLine(): string {
  // /\bAuthorization:\s*Bearer\s+\S+/gi
  return `Authorization: Bearer ${"C".repeat(24)}`;
}

const FAKE = {
  get openaiKeyLine() {
    return fictionOpenAiKeyLine();
  },
  get skToken() {
    return fictionSkToken();
  },
  get ghpToken() {
    return fictionGhpToken();
  },
  get bearer() {
    return fictionBearerLine();
  },
};

function tmpGitRepoWithLines(lines: string[], rel = "projects/sfia-studio/docs/min09-doc.md"): string {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-sec-"));
  dirs.push(dir);
  fs.mkdirSync(path.join(dir, path.dirname(rel)), { recursive: true });
  fs.writeFileSync(path.join(dir, rel), lines.join("\n"), "utf8");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { execFileSync } = require("node:child_process") as typeof import("node:child_process");
  execFileSync("git", ["init"], { cwd: dir });
  execFileSync("git", ["config", "user.email", "test@example.com"], {
    cwd: dir,
  });
  execFileSync("git", ["config", "user.name", "test"], { cwd: dir });
  execFileSync("git", ["add", "."], { cwd: dir });
  execFileSync("git", ["commit", "-m", "init"], { cwd: dir });
  return dir;
}

function assertNoFakeSecrets(text: string): void {
  expect(text).not.toContain(FAKE.skToken);
  expect(text).not.toContain(FAKE.ghpToken);
  expect(text).not.toContain(FAKE.openaiKeyLine);
  expect(text).not.toContain(FAKE.bearer);
  expect(text).not.toContain(`Bearer ${"C".repeat(24)}`);
}

function completeLinesFromContent(content: string): string[] {
  let body = content;
  if (body.endsWith("\n…[truncated]")) body = body.slice(0, -"\n…[truncated]".length);
  else if (body === "…[truncated]") return [];
  else if (body.endsWith("…[truncated]")) body = body.slice(0, -"…[truncated]".length);
  if (body.length === 0) return [];
  return body.split("\n");
}

afterEach(() => {
  while (dirs.length) {
    const d = dirs.pop();
    if (d) fs.rmSync(d, { recursive: true, force: true });
  }
});

describe("P6-MIN-09 — Axe B natural mono-file qualification", () => {
  it("T1 natural prompt → toolDependency high, NOT sourceBreadth high", () => {
    expect(isNaturalMonoFileDocumentaryRequest(T1_PROMPT)).toBe(true);
    const hints = inferWorkloadHintsFromUserContent(T1_PROMPT);
    expect(hints.toolDependency).toBe("high");
    expect(hints.reasoningDepth).toBe("medium");
    expect(hints.sourceBreadth).toBeUndefined();
  });

  it("bare 'document' alone does not elevate", () => {
    const hints = inferWorkloadHintsFromUserContent(
      "Nora, j'ai un document intéressant.",
    );
    expect(hints.toolDependency).toBeUndefined();
    expect(isNaturalMonoFileDocumentaryRequest("Nora, j'ai un document.")).toBe(
      false,
    );
  });

  it("T1 hints → Focused budget ≥8 and ≤ ceiling (no FinOps widen)", () => {
    const hints = inferWorkloadHintsFromUserContent(T1_PROMPT);
    const strategy = decideCognitiveStrategy({
      signals: normalizeCognitiveWorkloadSignals(hints),
    });
    expect(strategy.strategyClass).toBe("Focused");
    const budget = resolveAdaptiveMaxTurns({
      strategyClass: strategy.strategyClass,
      signals: strategy.normalizedSignals,
    });
    expect(budget.requestedMaxTurns).toBeGreaterThanOrEqual(8);
    expect(budget.requestedMaxTurns).toBeLessThanOrEqual(
      ADAPTIVE_MAX_TURNS_CEILING,
    );
    expect(ADAPTIVE_MAX_TURNS_CEILING).toBe(10);
  });
});

describe("P6-MIN-09 — R1 returned-range accuracy + coverage flags", () => {
  it("Case A — mid-line cut: partial line not credited; hint retries that line", () => {
    // Fixed-width ASCII lines; byte cap cuts inside line 3.
    const lineWidth = 40;
    const root = tmpGitRepo(10, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    // L1 + NL + L2 + NL + partial L3
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 10; // mid line 3
    const r = adapter.readFile(
      "projects/sfia-studio/docs/min09-doc.md",
      maxBytes,
      { startLine: 1, endLine: 10 },
    );
    expect(r.truncated).toBe(true);
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(2);
    expect(r.partialLineNumber).toBe(3);
    expect(r.nextStartLineHint).toBe(3);
    expect(r.content).toContain("L2 ");
    expect(r.content).not.toContain("L3 ");
    expect(r.summary).toMatch(/partialLine:3/);
  });

  it("Case B — cut exactly between lines (no partial line)", () => {
    const lineWidth = 30;
    const root = tmpGitRepo(8, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8");
    const r = adapter.readFile(
      "projects/sfia-studio/docs/min09-doc.md",
      maxBytes,
      { startLine: 1, endLine: 8 },
    );
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(2);
    expect(r.partialLineNumber).toBeNull();
    expect(r.nextStartLineHint).toBe(3);
    expect(r.content).toContain("L2 ");
    expect(r.content).not.toContain("L3 ");
  });

  it("Case C — truncation via maxBytes", () => {
    const root = tmpGitRepo(20, 80);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 120, {
      startLine: 1,
      endLine: 20,
    });
    expect(r.truncated).toBe(true);
    expect(r.completeLineCount).toBeGreaterThan(0);
    expect(r.returnedEndLine).toBeLessThan(20);
    // Content only contains credited complete lines.
    expect(r.content).toMatch(/^L1 /);
    expect(r.content.includes(`L${r.returnedEndLine + 1} `)).toBe(false);
  });

  it("Case D — truncation via CT_MAX_TOOL_RESULT_CHARS", () => {
    const wide = Math.ceil(CT_MAX_TOOL_RESULT_CHARS / 3) + 20;
    const root = tmpGitRepo(20, wide);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 10,
    });
    expect(r.truncated).toBe(true);
    expect(r.returnedEndLine).toBeLessThan(r.requestedEndLine);
    expect(r.nextStartLineHint).toBeGreaterThanOrEqual(r.returnedEndLine + 1);
    expect(r.summary).toMatch(/\btruncated\b/);
    // No line beyond returnedEndLine appears complete in content.
    expect(r.content.includes(`L${r.returnedEndLine + 1} `)).toBe(false);
  });

  it("Case E — single line exceeds cap: not complete, no infinite loop hint", () => {
    const huge = CT_MAX_TOOL_RESULT_CHARS + 500;
    const root = tmpGitRepo(3, huge);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 1,
    });
    expect(r.lineExceedsCap).toBe(true);
    expect(r.completeLineCount).toBe(0);
    expect(r.returnedEndLine).toBe(0); // startLine(1) - 1
    expect(r.nextStartLineHint).toBe(2); // explicit skip past unblockable line
    expect(r.content).toBe("…[truncated]");
    expect(r.summary).toMatch(/returned none/);
    expect(r.summary).toMatch(/lineExceedsCap/);
  });

  it("Case F/G — successive reads: no skipped fittable lines; finite progress", () => {
    const lineWidth = 50;
    const root = tmpGitRepo(12, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const twoFull = `L1 ${"x".repeat(lineWidth - 4)}\nL2 ${"x".repeat(lineWidth - 4)}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 8;
    const seen = new Set<number>();
    let start = 1;
    for (let step = 0; step < 20 && start <= 12; step++) {
      const r = adapter.readFile(
        "projects/sfia-studio/docs/min09-doc.md",
        maxBytes,
        { startLine: start, endLine: 12 },
      );
      if (r.completeLineCount > 0) {
        for (let ln = r.returnedStartLine; ln <= r.returnedEndLine; ln++) {
          expect(seen.has(ln)).toBe(false);
          seen.add(ln);
        }
      }
      if (r.lineExceedsCap) {
        // Must advance hint to avoid infinite loop.
        expect(r.nextStartLineHint).toBeGreaterThan(start);
      }
      const next = r.nextStartLineHint;
      if (next == null || next <= start) break;
      // Fittable partial line: retry same line once with smaller exclusive window.
      if (r.partialLineNumber === next && r.completeLineCount > 0) {
        start = next;
      } else {
        start = next;
      }
    }
    // All fittable lines 1..12 must be coverable (none skipped silently).
    expect(seen.size).toBe(12);
  });

  it("Case H — overlapping returned spans union without false FULL", () => {
    const facts = [
      {
        pathOrRef: "doc.md#L1-50",
        documentPath: "doc.md",
        coverage: "partial" as const,
        returnedStartLine: 1,
        returnedEndLine: 50,
        totalLines: 100,
        truncated: false,
        documentHasMore: true,
        hasMore: true,
      },
      {
        pathOrRef: "doc.md#L40-80",
        documentPath: "doc.md",
        coverage: "partial" as const,
        returnedStartLine: 40,
        returnedEndLine: 80,
        totalLines: 100,
        truncated: false,
        documentHasMore: true,
        hasMore: true,
      },
    ];
    const unions = unionReturnedLineSpans(facts);
    expect(unions[0]?.spans).toEqual([{ start: 1, end: 80 }]);
    expect(unions[0]?.provenFull).toBe(false);
  });

  it("Case I — short range fully received", () => {
    const root = tmpGitRepo(20, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 2,
      endLine: 3,
    });
    expect(r.truncated).toBe(false);
    expect(r.completeLineCount).toBe(2);
    expect(r.returnedEndLine).toBe(3);
    expect(r.documentHasMore).toBe(true);
    expect(r.content).toContain("L2 ");
    expect(r.content).toContain("L3 ");
  });

  it("Case J — full small document without truncation", () => {
    const root = tmpGitRepo(5, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536);
    expect(r.truncated).toBe(false);
    expect(r.documentHasMore).toBe(false);
    expect(r.completeLineCount).toBe(5);
    expect(r.returnedEndLine).toBe(5);
    expect(r.nextStartLineHint).toBeNull();
  });

  it("Case K/L — hasMore distinct from truncated; documentHasMore distinct", () => {
    const root = tmpGitRepo(30, 20);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile("projects/sfia-studio/docs/min09-doc.md", 65536, {
      startLine: 1,
      endLine: 5,
    });
    expect(r.truncated).toBe(false);
    expect(r.documentHasMore).toBe(true);
    expect(r.hasMore).toBe(true);
    expect(r.summary).toMatch(/documentHasMore/);
    expect(r.summary).not.toMatch(/\btruncated\b/);
  });

  it("Case M — no FULL claim when L1-total requested but truncated", () => {
    const summary =
      "read doc.md L1-100/100 returned L1-12 (12013 chars) truncated hasMore";
    const parsed = parseGitLocalReadCoverageSignals({ summary });
    expect(parsed?.truncated).toBe(true);
    expect(parsed?.returnedEndLine).toBe(12);
    expect(parsed?.startLine).toBe(1);
    expect(parsed?.endLine).toBe(100);
  });

  it("Case N — legacy summaries still parse", () => {
    const full = parseGitLocalReadCoverageSignals({
      summary: "read docs/a.md L1-10/10 (100 chars)",
    });
    expect(full?.returnedEndLine).toBe(10);
    const legacyMore = parseGitLocalReadCoverageSignals({
      summary: "read docs/e.md L1-10/50 (100 chars) hasMore",
    });
    expect(legacyMore?.hasMore).toBe(true);
    expect(legacyMore?.truncated).toBe(false);
    expect(legacyMore?.documentHasMore).toBe(true);
  });

  it("Case O — UTF-8 multibyte: mid-cut does not credit partial line", () => {
    const lines = ["aa", "éééééééééé", "bb"]; // accented chars are 2 bytes
    const body = "aa\néé"; // cuts inside second line
    const counted = countCompleteReturnedLines({
      lines,
      startLine: 1,
      endLine: 3,
      body,
    });
    expect(counted.completeLineCount).toBe(1);
    expect(counted.partialLineNumber).toBe(2);
  });

  it("ToolRouter usage.truncated is content-cut only (not documentHasMore)", async () => {
    const root = tmpGitRepo(20, 20);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: "git_local_read_file",
        arguments: {
          path: "projects/sfia-studio/docs/min09-doc.md",
          startLine: 1,
          endLine: 3,
        },
        sessionId: "min09",
      },
      {
        workspaceRoot: root,
        sink: { emit: (e) => events.push(e) },
      },
    );
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.usage.truncated).toBe(false);
      const data = result.data as {
        documentHasMore?: boolean;
        truncated?: boolean;
        nextStartLineHint?: number | null;
        completeLineCount?: number;
      };
      expect(data.documentHasMore).toBe(true);
      expect(data.truncated).toBe(false);
      expect(data.completeLineCount).toBe(3);
      expect(data.nextStartLineHint).toBe(4);
    }
  });
});

describe("P6-MIN-09 — Axe A/E/F observability + honest incomplete", () => {
  it("emits ADAPTIVE_BUDGET_OBSERVED + CONTINUATION_OBSERVED", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-sess-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-obs",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const events: TechnicalEvent[] = [];
    const model = new ScriptedModel([
      [assistantMessage("Synthèse partielle déterministe OK.")],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-obs",
      projectId: "prj:min09-obs",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: false,
      cognitiveStrategyClass: "Focused",
      sink: { emit: (e) => events.push(e) },
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toContain("Synthèse partielle");
    expect(events.some((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED")).toBe(
      true,
    );
    expect(events.some((e) => e.type === "CONTINUATION_OBSERVED")).toBe(true);
    const adaptive = events.find((e) => e.type === "ADAPTIVE_BUDGET_OBSERVED");
    expect(adaptive?.detail.requestedMaxTurns).toBeTruthy();
    expect(adaptive?.detail.ceiling).toBe(10);
    session.close();
  });

  it("budget exhausted with tool crumbs → honest disclosure, not bare stock alone when facts exist", () => {
    const text = buildDocumentaryBudgetExhaustedText({
      items: [
        {
          type: "function_call_result",
          name: "git_local_read_file",
          output: {
            text: JSON.stringify({
              ok: true,
              summary:
                "read projects/x.md L1-250/1664 returned L1-64 (12013 chars) truncated documentHasMore hasMore",
              data: {
                path: "projects/x.md",
                truncated: true,
                documentHasMore: true,
                returnedStartLine: 1,
                returnedEndLine: 64,
                totalLines: 1664,
                nextStartLineHint: 65,
              },
            }),
          },
        },
      ],
    });
    expect(text).toContain("Model-turn budget reached (maxTurns).");
    expect(text).toContain("inachevée");
    expect(text).toContain("projects/x.md");
    expect(text).toContain("L1-64");
    expect(text).toContain("65");
    expect(text).not.toMatch(/HumanDecision inventée|Deliverable validé/i);
  });

  it("ScriptedModel documentary: synthesis before stop when budget allows", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-syn-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-syn",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 40,
          },
          { callId: "r1" },
        ),
      ],
      [
        assistantMessage(
          "PARTIEL — synthèse déterministe des portions lues (pas une couverture intégrale).",
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-syn",
      projectId: "prj:min09-syn",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: true,
      maxTurns: 8,
      enableControlledContinuation: true,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(false);
    expect(result.text).toMatch(/PARTIEL/);
    expect(result.adaptiveObserve?.effectiveMaxTurns).toBeLessThanOrEqual(10);
    session.close();
  });

  it("P0 — exhausted mission without text stays incomplete (limitReached)", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-p0-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-p0",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "a" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "b" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: "projects/sfia-studio/app/package.json" },
          { callId: "c" },
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-p0",
      projectId: "prj:min09-p0",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: T1_PROMPT,
      session,
      model,
      enableTools: true,
      maxTurns: 2,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    session.close();
  });
});

describe("P6-MIN-09 — R2 Runner maxTurns restitution integration", () => {
  it("Runner soft maxTurns + real git tool → honest disclosure from newItems", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 40,
          },
          { callId: "r2a" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          {
            path: "projects/sfia-studio/app/package.json",
            startLine: 1,
            endLine: 40,
          },
          { callId: "r2b" },
        ),
      ],
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2",
      projectId: "prj:min09-r2",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Consulte projects/sfia-studio/app/package.json et fais-en une synthèse.",
      session,
      model,
      enableTools: true,
      maxTurns: 1,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    expect(result.text).toContain("Analyse documentaire inachevée");
    expect(result.text).toContain("projects/sfia-studio/app/package.json");
    expect(result.text).toMatch(/L1-\d+/);
    expect(result.text).not.toMatch(/couverture intégrale prouvée/);
    // Must not invent document body synthesis.
    expect(result.text).not.toMatch(/\"name\"\s*:\s*\"sfia-studio\"/);
    const items = await session.getItems();
    const toolResults = items.filter(
      (it) =>
        (it as { type?: string }).type === "function_call_result" &&
        (it as { name?: string }).name === "git_local_read_file",
    );
    expect(toolResults.length).toBeGreaterThanOrEqual(1);
    const shaped = toolResults[0] as {
      output?: { type?: string; text?: string };
    };
    expect(shaped.output?.type).toBe("text");
    expect(typeof shaped.output?.text).toBe("string");
    session.close();
  });

  it("Runner multi-segment continuation still surfaces tool coverage on exhaust", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2c-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2c",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const script = Array.from({ length: 8 }, (_, i) => [
      functionCall(
        "git_local_read_file",
        {
          path: "projects/sfia-studio/app/package.json",
          startLine: 1,
          endLine: 5,
        },
        { callId: `seg${i + 1}` },
      ),
    ]);
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2c",
      projectId: "prj:min09-r2c",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent:
        "Consulte projects/sfia-studio/app/package.json et fais-en une synthèse.",
      session,
      model: new ScriptedModel(script),
      enableTools: true,
      maxTurns: 8,
      enableControlledContinuation: true,
      cognitiveStrategyClass: "Focused",
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.continuationObserve?.continued).toBe(true);
    expect(result.continuationObserve?.segmentsExecuted).toBeGreaterThanOrEqual(
      2,
    );
    expect(result.limitReached).toBe(true);
    expect(result.text).toContain("package.json");
    expect(result.text).toContain("inachevée");
    session.close();
  });

  it("failed tool / no readable facts → generic stock fallback preserved", async () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r2n-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r2n",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const result = await runNoraAgentsTurn({
      correlationId: "cor:min09-r2n",
      projectId: "prj:min09-r2n",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: "continue",
      session,
      model: new ScriptedModel([
        [
          functionCall(
            "git_local_read_file",
            {
              path: "projects/sfia-studio/docs/does-not-exist-min09.md",
            },
            { callId: "missing" },
          ),
        ],
      ]),
      enableTools: true,
      maxTurns: 1,
      enableControlledContinuation: false,
      workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    });
    expect(result.limitReached).toBe(true);
    // Failed tool must not invent coverage — stock-only (or stock without path spans).
    expect(result.text).toContain("Model-turn budget reached (maxTurns).");
    expect(result.text).not.toContain("Périmètre réellement remis");
    session.close();
  });
});

describe("P6-MIN-09 — R4 redaction / documentary progression", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R4-A — document without secrets: unchanged honest coverage", () => {
    const root = tmpGitRepo(8, 40);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 8 });
    expect(r.completeLineCount).toBe(8);
    expect(r.returnedStartLine).toBe(1);
    expect(r.returnedEndLine).toBe(8);
    expect(r.truncated).toBe(false);
    expect(r.content).toContain("L1 ");
    expect(r.content).toContain("L8 ");
  });

  it("R4-B/C/D/E — secret patterns redacted; complete line still credited", () => {
    const lines = [
      "intro safe",
      FAKE.openaiKeyLine,
      `token ${FAKE.skToken} mid`,
      `auth ${FAKE.ghpToken}`,
      FAKE.bearer,
      "outro safe",
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 6 });
    expect(r.completeLineCount).toBe(6);
    expect(r.returnedEndLine).toBe(6);
    expect(r.nextStartLineHint).toBeNull();
    assertNoFakeSecrets(r.content);
    expect(r.content).toContain("[redacted]");
    expect(r.content).toContain("intro safe");
    expect(r.content).toContain("outro safe");
  });

  it("R4-F/G — redacted line mid-doc and at range start still progresses", () => {
    const mid = [
      "L1 ok",
      "L2 ok",
      `L3 ${FAKE.skToken}`,
      "L4 ok",
      "L5 ok",
    ];
    const rootMid = tmpGitRepoWithLines(mid);
    const aMid = new GitLocalReadAdapter(rootMid);
    const rMid = aMid.readFile(DOC, 32768, { startLine: 1, endLine: 5 });
    expect(rMid.completeLineCount).toBe(5);
    expect(rMid.returnedEndLine).toBe(5);
    assertNoFakeSecrets(rMid.content);

    const start = [`${FAKE.ghpToken}`, "L2 ok", "L3 ok"];
    const rootStart = tmpGitRepoWithLines(start);
    const aStart = new GitLocalReadAdapter(rootStart);
    const rStart = aStart.readFile(DOC, 32768, { startLine: 1, endLine: 3 });
    expect(rStart.completeLineCount).toBe(3);
    expect(rStart.returnedStartLine).toBe(1);
    expect(rStart.returnedEndLine).toBe(3);
    assertNoFakeSecrets(rStart.content);
  });

  it("R4-H/I — truncation before/on sensitive line keeps secrets out and hints honest", () => {
    const lineWidth = 40;
    const sensitive = `SEC ${FAKE.skToken} ${"y".repeat(20)}`;
    const lines = [
      `L1 ${"x".repeat(lineWidth - 4)}`,
      `L2 ${"x".repeat(lineWidth - 4)}`,
      sensitive,
      `L4 ${"x".repeat(lineWidth - 4)}`,
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    // Cap bytes so only L1+L2 fit (same pattern as R1 Case A).
    const twoFull = `${lines[0]}\n${lines[1]}\n`;
    const maxBytes = Buffer.byteLength(twoFull, "utf8") + 10;
    const r = adapter.readFile(DOC, maxBytes, { startLine: 1, endLine: 4 });
    expect(r.completeLineCount).toBeLessThan(4);
    expect(r.returnedEndLine).toBeLessThan(4);
    assertNoFakeSecrets(r.content);
    expect(r.nextStartLineHint).toBe(r.returnedEndLine + 1);
  });

  it("R4-J — successive reads progress past redacted lines (no loop)", () => {
    const lines = Array.from({ length: 12 }, (_, i) =>
      i === 3 ? `L4 ${FAKE.openaiKeyLine}` : `L${i + 1} plain-${i + 1}`,
    );
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    let start = 1;
    const seen = new Set<number>();
    for (let i = 0; i < 6; i++) {
      const r = adapter.readFile(DOC, 200, { startLine: start, endLine: start + 2 });
      assertNoFakeSecrets(r.content);
      if (r.completeLineCount > 0) {
        for (let ln = r.returnedStartLine; ln <= r.returnedEndLine; ln++) {
          expect(seen.has(ln)).toBe(false);
          seen.add(ln);
        }
        expect(r.nextStartLineHint).toBe(
          r.returnedEndLine < r.totalLines ? r.returnedEndLine + 1 : null,
        );
        if (r.nextStartLineHint == null) break;
        start = r.nextStartLineHint;
      } else {
        expect(r.nextStartLineHint).not.toBeNull();
        start = r.nextStartLineHint!;
      }
    }
    expect(seen.size).toBeGreaterThanOrEqual(4);
    expect(seen.has(4)).toBe(true);
  });

  it("R4-K — lineExceedsCap remains explicit on oversize redacted line", () => {
    const huge = `${"Z".repeat(CT_MAX_TOOL_RESULT_CHARS + 500)} ${FAKE.skToken}`;
    const root = tmpGitRepoWithLines([huge, "L2 ok"]);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 1 });
    expect(r.completeLineCount).toBe(0);
    expect(r.lineExceedsCap).toBe(true);
    expect(r.nextStartLineHint).toBe(2);
    assertNoFakeSecrets(r.content);
  });

  it("R4-L/M — no secret reintroduction in adapter/tool/session/events; JSON valid", async () => {
    const lines = [
      "alpha",
      FAKE.openaiKeyLine,
      `beta ${FAKE.skToken}`,
      FAKE.bearer,
      "omega",
    ];
    const root = tmpGitRepoWithLines(lines);
    const events: TechnicalEvent[] = [];
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r4-l",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      {
        workspaceRoot: root,
        sink: { emit: (e) => events.push(e) },
      },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const data = result.data as Record<string, unknown>;
    assertNoFakeSecrets(String(data.content ?? ""));
    assertNoFakeSecrets(result.summary ?? "");
    const modelVisible = toolResultForModel(result);
    expect(() => JSON.parse(modelVisible)).not.toThrow();
    assertNoFakeSecrets(modelVisible);
    const parsed = JSON.parse(modelVisible) as {
      data: { completeLineCount: number; returnedEndLine: number; content: string };
    };
    expect(parsed.data.completeLineCount).toBe(5);
    expect(parsed.data.returnedEndLine).toBe(5);
    expect(parsed.data.content).toContain("[redacted]");

    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r4s-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r4s",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: DOC, startLine: 1, endLine: 5 },
          { callId: "r4s" },
        ),
      ],
      [assistantMessage("Synthèse partielle sans secret.")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r4s",
      projectId: "prj:min09-r4s",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC} et synthétise.`,
      session,
      model,
      enableTools: true,
      maxTurns: 4,
      enableControlledContinuation: false,
      workspaceRoot: root,
      sink: { emit: (e) => events.push(e) },
    });
    assertNoFakeSecrets(turn.text);
    const items = await session.getItems();
    for (const it of items) {
      assertNoFakeSecrets(JSON.stringify(it));
    }
    for (const e of events) {
      assertNoFakeSecrets(JSON.stringify(e));
    }
    session.close();
  });

  it("R4-N — UTF-8 multibyte redacted line still counts complete", () => {
    const lines = [
      "café résumé — ligne 1",
      `clé ${FAKE.skToken} 日本語`,
      "ligne trois ✓",
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 3 });
    expect(r.completeLineCount).toBe(3);
    expect(r.returnedEndLine).toBe(3);
    assertNoFakeSecrets(r.content);
    expect(r.content).toContain("café");
    expect(r.content).toContain("日本語");
  });
});

describe("P6-MIN-09 — R5 double truncation / final payload truth", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R5-A — small document: no second truncation; metadata matches content", async () => {
    const root = tmpGitRepo(5, 30);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5a",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const modelVisible = toolResultForModel(result);
    expect(modelVisible.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(modelVisible) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        truncated: boolean;
        documentHasMore: boolean;
      };
    };
    const lines = completeLinesFromContent(parsed.data.content);
    expect(lines.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    expect(parsed.data.truncated).toBe(false);
    expect(parsed.data.documentHasMore).toBe(false);
  });

  it("R5-B/C/D/E/F/H/I — near/over JSON ceiling: final metadata matches complete lines", () => {
    // Wide lines so adapter returns many complete lines near 12k; envelope forces second cut.
    const lineWidth = 80;
    const lineCount = 200;
    const root = tmpGitRepo(lineCount, lineWidth);
    const adapter = new GitLocalReadAdapter(root);
    const adapterRead = adapter.readFile(DOC, 32768, {
      startLine: 1,
      endLine: 180,
    });
    expect(adapterRead.completeLineCount).toBeGreaterThan(50);

    // Force a tight ceiling below adapter content to exercise second cut.
    const tight = Math.min(
      CT_MAX_TOOL_RESULT_CHARS,
      Math.max(800, Math.floor(adapterRead.content.length * 0.55) + 400),
    );
    const prepared = prepareGitLocalReadDataForModel(
      {
        path: adapterRead.path,
        content: adapterRead.content,
        truncated: adapterRead.truncated,
        documentHasMore: adapterRead.documentHasMore,
        hasMore: adapterRead.hasMore,
        startLine: adapterRead.startLine,
        endLine: adapterRead.endLine,
        requestedStartLine: adapterRead.requestedStartLine,
        requestedEndLine: adapterRead.requestedEndLine,
        returnedStartLine: adapterRead.returnedStartLine,
        returnedEndLine: adapterRead.returnedEndLine,
        completeLineCount: adapterRead.completeLineCount,
        partialLineNumber: adapterRead.partialLineNumber,
        lineExceedsCap: adapterRead.lineExceedsCap,
        totalLines: adapterRead.totalLines,
        nextStartLineHint: adapterRead.nextStartLineHint,
      },
      tight,
    );
    const envelope = redactSecrets(
      JSON.stringify({
        ok: true,
        summary: prepared.summary,
        data: prepared.data,
        truncated: prepared.truncated,
      }),
    );
    expect(envelope.length).toBeLessThanOrEqual(tight);
    expect(() => JSON.parse(envelope)).not.toThrow();
    const data = prepared.data;
    const lines = completeLinesFromContent(String(data.content ?? ""));
    expect(lines.length).toBe(data.completeLineCount);
    expect(data.returnedEndLine).toBe(
      (data.returnedStartLine as number) + (data.completeLineCount as number) - 1,
    );
    expect(data.completeLineCount as number).toBeLessThan(
      adapterRead.completeLineCount,
    );
    expect(data.truncated).toBe(true);
    expect(data.nextStartLineHint).toBe(
      (data.returnedEndLine as number) + 1,
    );
    // No silent skip past the first missing line.
    expect(data.nextStartLineHint).toBe(
      (data.returnedStartLine as number) + (data.completeLineCount as number),
    );
  });

  it("R5-G — toolResultForModel JSON.parse succeeds on routed git read", async () => {
    const root = tmpGitRepo(20, 50);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5g",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 20 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const raw = toolResultForModel(result);
    expect(() => JSON.parse(raw)).not.toThrow();
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(12000);
  });

  it("R5-J — documentHasMore without size cut stays truncated=false", async () => {
    const root = tmpGitRepo(30, 20);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5j",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 5 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const data = result.data as Record<string, unknown>;
    expect(data.documentHasMore).toBe(true);
    expect(data.truncated).toBe(false);
    expect(data.completeLineCount).toBe(5);
    expect(data.nextStartLineHint).toBe(6);
  });

  it("R5-K — FULL impossible when final payload cannot prove complete coverage", () => {
    const prepared = prepareGitLocalReadDataForModel(
      {
        path: DOC,
        content: "only one line",
        truncated: false,
        documentHasMore: true,
        hasMore: true,
        startLine: 1,
        endLine: 1,
        requestedStartLine: 1,
        requestedEndLine: 1,
        returnedStartLine: 1,
        returnedEndLine: 1,
        completeLineCount: 1,
        partialLineNumber: null,
        lineExceedsCap: false,
        totalLines: 100,
        nextStartLineHint: 2,
      },
      400,
    );
    const signals = parseGitLocalReadCoverageSignals({
      summary: prepared.summary,
      pathOrRef: DOC,
    });
    expect(signals?.documentHasMore || prepared.data.truncated).toBeTruthy();
    // Coverage helpers must not see a L1-total complete window.
    expect(prepared.data.totalLines).toBe(100);
    expect(prepared.data.returnedEndLine).not.toBe(100);
    expect(signals?.returnedEndLine).not.toBe(100);
  });

  it("R5-L/M — combined R4+R5: large doc with fake secret; no leak; honest meta", async () => {
    const lines = Array.from({ length: 120 }, (_, i) => {
      if (i === 10) return `L11 ${FAKE.openaiKeyLine}`;
      if (i === 40) return `L41 token=${FAKE.skToken}`;
      return `L${i + 1} ${"x".repeat(70)}`;
    });
    const root = tmpGitRepoWithLines(lines);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r5l",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 120 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const modelVisible = toolResultForModel(result);
    expect(() => JSON.parse(modelVisible)).not.toThrow();
    assertNoFakeSecrets(modelVisible);
    expect(modelVisible.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(modelVisible) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        nextStartLineHint: number | null;
        truncated: boolean;
      };
    };
    const complete = completeLinesFromContent(parsed.data.content);
    expect(complete.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    if (parsed.data.completeLineCount < 120) {
      expect(parsed.data.truncated).toBe(true);
      expect(parsed.data.nextStartLineHint).toBe(
        parsed.data.returnedEndLine + 1,
      );
    }
  });

  it("R5-N — other tools still use prepareToolDataForModel without regression", () => {
    const prepared = prepareToolDataForModel(
      { porcelain: " M file.txt\n", truncated: false },
      CT_MAX_TOOL_RESULT_CHARS,
    );
    expect(prepared.json.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    expect(() => JSON.parse(prepared.json)).not.toThrow();
    const obj = prepared.data as Record<string, unknown>;
    expect(obj.porcelain).toContain("file.txt");
  });

  it("R5-O — full path Git→Adapter→ToolRouter→model-visible→Runner", async () => {
    const lines = Array.from({ length: 80 }, (_, i) =>
      i === 5
        ? `L6 ${FAKE.bearer}`
        : `L${i + 1} ${"w".repeat(60)}`,
    );
    const root = tmpGitRepoWithLines(lines);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r5o-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r5o",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: DOC, startLine: 1, endLine: 80 },
          { callId: "r5o" },
        ),
      ],
      [assistantMessage("PARTIEL — couverture bornée du payload final.")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r5o",
      projectId: "prj:min09-r5o",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC} et synthétise.`,
      session,
      model,
      enableTools: true,
      maxTurns: 4,
      enableControlledContinuation: false,
      workspaceRoot: root,
    });
    expect(turn.limitReached).toBe(false);
    expect(turn.text).toMatch(/PARTIEL/);
    assertNoFakeSecrets(turn.text);
    const items = await session.getItems();
    const toolResults = items.filter(
      (it) =>
        (it as { type?: string }).type === "function_call_result" &&
        (it as { name?: string }).name === "git_local_read_file",
    );
    expect(toolResults.length).toBeGreaterThanOrEqual(1);
    const text = (toolResults[0] as { output?: { text?: string } }).output
      ?.text;
    expect(typeof text).toBe("string");
    assertNoFakeSecrets(text!);
    const parsed = JSON.parse(text!) as {
      data: {
        content: string;
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        nextStartLineHint: number | null;
      };
    };
    const complete = completeLinesFromContent(parsed.data.content);
    expect(complete.length).toBe(parsed.data.completeLineCount);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine + parsed.data.completeLineCount - 1,
    );
    if (parsed.data.nextStartLineHint != null) {
      expect(parsed.data.nextStartLineHint).toBe(
        parsed.data.returnedEndLine + 1,
      );
    }
    session.close();
  });
});

describe("P6-MIN-09 — R6 final envelope oversized-line progression", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R6-A — short line: full envelope, complete coverage", async () => {
    const root = tmpGitRepoWithLines(["short line one", "short line two"]);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r6a",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 2 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const mv = toolResultForModel(result);
    expect(mv.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(mv) as {
      data: {
        completeLineCount: number;
        returnedEndLine: number;
        lineExceedsCap: boolean;
        truncated: boolean;
        content: string;
      };
    };
    expect(parsed.data.completeLineCount).toBe(2);
    expect(parsed.data.returnedEndLine).toBe(2);
    expect(parsed.data.lineExceedsCap).toBe(false);
    expect(parsed.data.truncated).toBe(false);
    expect(parsed.data.content).toContain("short line one");
  });

  it("R6-B/C — line fits adapter (~11900) but not final envelope → explicit skip", async () => {
    const longLine = `L1 ${"x".repeat(11900)}`;
    const root = tmpGitRepoWithLines([longLine, "L2 ok", "L3 ok"]);
    const adapter = new GitLocalReadAdapter(root);
    const adapterRead = adapter.readFile(DOC, 32768, {
      startLine: 1,
      endLine: 1,
    });
    expect(adapterRead.completeLineCount).toBe(1);
    expect(adapterRead.lineExceedsCap).toBe(false);
    expect(adapterRead.content.length).toBeLessThanOrEqual(
      CT_MAX_TOOL_RESULT_CHARS,
    );

    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r6b",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 1 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const mv = toolResultForModel(result);
    expect(mv.length).toBeLessThanOrEqual(CT_MAX_TOOL_RESULT_CHARS);
    const parsed = JSON.parse(mv) as {
      data: {
        completeLineCount: number;
        returnedStartLine: number;
        returnedEndLine: number;
        lineExceedsCap: boolean;
        nextStartLineHint: number | null;
        truncated: boolean;
        content: string;
        documentHasMore: boolean;
      };
    };
    // R6-F/G/H — never claim the oversized envelope line as received.
    expect(parsed.data.completeLineCount).toBe(0);
    expect(parsed.data.returnedEndLine).toBe(
      parsed.data.returnedStartLine - 1,
    );
    expect(parsed.data.lineExceedsCap).toBe(true);
    expect(parsed.data.truncated).toBe(true);
    expect(completeLinesFromContent(parsed.data.content)).toHaveLength(0);
    // R6-I — monotone skip; do not re-hint startLine.
    expect(parsed.data.nextStartLineHint).toBe(2);
    expect(parsed.data.nextStartLineHint).not.toBe(
      parsed.data.returnedStartLine,
    );
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(12000);
  });

  it("R6-D — adapter lineExceedsCap still explicit and advances", async () => {
    const huge = "Z".repeat(CT_MAX_TOOL_RESULT_CHARS + 800);
    const root = tmpGitRepoWithLines([huge, "L2 ok"]);
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        sessionId: "cor:r6d",
        name: "git_local_read_file",
        arguments: { path: DOC, startLine: 1, endLine: 1 },
      },
      { workspaceRoot: root },
    );
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    const parsed = JSON.parse(toolResultForModel(result)) as {
      data: {
        completeLineCount: number;
        lineExceedsCap: boolean;
        nextStartLineHint: number | null;
      };
    };
    expect(parsed.data.completeLineCount).toBe(0);
    expect(parsed.data.lineExceedsCap).toBe(true);
    expect(parsed.data.nextStartLineHint).toBe(2);
  });

  it("R6-E — RESULT_CAPPED fail-closed: no invented progression", () => {
    const tightCap = 180;
    const prepared = prepareGitLocalReadDataForModel(
      {
        path: `projects/${"p".repeat(20000)}/x.md`,
        content: "tiny",
        truncated: false,
        documentHasMore: false,
        hasMore: false,
        startLine: 1,
        endLine: 1,
        requestedStartLine: 1,
        requestedEndLine: 1,
        returnedStartLine: 1,
        returnedEndLine: 1,
        completeLineCount: 1,
        partialLineNumber: null,
        lineExceedsCap: false,
        totalLines: 1,
        nextStartLineHint: null,
      },
      tightCap,
    );
    expect(prepared.data.completeLineCount).toBe(0);
    expect(prepared.data.nextStartLineHint).toBeNull();
    expect(prepared.data.note).toBe("RESULT_CAPPED");
    expect(prepared.truncated).toBe(true);
    // Must not claim the line was received.
    expect(prepared.data.returnedEndLine == null || prepared.data.returnedEndLine === 0).toBe(
      true,
    );
    const envelope = JSON.stringify({
      ok: true,
      summary: prepared.summary,
      data: prepared.data,
      truncated: true,
    });
    expect(envelope.length).toBeLessThanOrEqual(tightCap);
  });

  it("R6-J/K/L — repeated reads progress; no loop; no false FULL", async () => {
    const longLine = `L1 ${"x".repeat(11900)}`;
    const root = tmpGitRepoWithLines([longLine, "L2 ok", "L3 ok", "L4 ok"]);
    const hints: Array<number | null> = [];
    let start = 1;
    for (let i = 0; i < 4; i++) {
      const result = await routeToolCall(
        {
          toolCallId: createToolCallId(),
          sessionId: `cor:r6j-${i}`,
          name: "git_local_read_file",
          arguments: { path: DOC, startLine: start, endLine: start },
        },
        { workspaceRoot: root },
      );
      expect(result.ok).toBe(true);
      if (!result.ok) return;
      const parsed = JSON.parse(toolResultForModel(result)) as {
        data: {
          completeLineCount: number;
          returnedEndLine: number;
          nextStartLineHint: number | null;
          lineExceedsCap: boolean;
          totalLines: number;
        };
      };
      hints.push(parsed.data.nextStartLineHint);
      if (parsed.data.completeLineCount === 0) {
        expect(parsed.data.lineExceedsCap).toBe(true);
        expect(parsed.data.nextStartLineHint).not.toBe(start);
      }
      // No FULL claim: never L1–total without truncation on a single-line window.
      const claimedFull =
        parsed.data.returnedEndLine === parsed.data.totalLines &&
        start === 1 &&
        parsed.data.completeLineCount === parsed.data.totalLines;
      expect(claimedFull).toBe(false);
      if (parsed.data.nextStartLineHint == null) break;
      expect(parsed.data.nextStartLineHint).toBeGreaterThan(start);
      start = parsed.data.nextStartLineHint;
    }
    expect(hints[0]).toBe(2);
    expect(new Set(hints.filter((h) => h != null)).size).toBeGreaterThanOrEqual(
      2,
    );
  });

  it("R6-M/N — ceiling unchanged; other tools unaffected", () => {
    expect(CT_MAX_TOOL_RESULT_CHARS).toBe(12000);
    const prepared = prepareToolDataForModel(
      { porcelain: " M other.txt\n", truncated: false },
      CT_MAX_TOOL_RESULT_CHARS,
    );
    expect(() => JSON.parse(prepared.json)).not.toThrow();
    expect((prepared.data as { porcelain: string }).porcelain).toContain(
      "other.txt",
    );
  });

  it("R6-O — ToolRouter integration path (model boundary substituted only)", async () => {
    const longLine = `L1 ${"x".repeat(11900)}`;
    const root = tmpGitRepoWithLines([longLine, "L2 after-skip"]);
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r6o-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r6o",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const model = new ScriptedModel([
      [
        functionCall(
          "git_local_read_file",
          { path: DOC, startLine: 1, endLine: 1 },
          { callId: "r6o1" },
        ),
      ],
      [
        functionCall(
          "git_local_read_file",
          { path: DOC, startLine: 2, endLine: 2 },
          { callId: "r6o2" },
        ),
      ],
      [assistantMessage("PARTIEL — ligne 1 skip envelope; ligne 2 lue.")],
    ]);
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r6o",
      projectId: "prj:min09-r6o",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC}.`,
      session,
      model,
      enableTools: true,
      maxTurns: 6,
      enableControlledContinuation: false,
      workspaceRoot: root,
    });
    expect(turn.text).toMatch(/PARTIEL/);
    const items = await session.getItems();
    const toolResults = items.filter(
      (it) =>
        (it as { type?: string }).type === "function_call_result" &&
        (it as { name?: string }).name === "git_local_read_file",
    );
    expect(toolResults.length).toBeGreaterThanOrEqual(2);
    const first = JSON.parse(
      (toolResults[0] as { output?: { text?: string } }).output!.text!,
    ) as { data: { lineExceedsCap: boolean; nextStartLineHint: number } };
    expect(first.data.lineExceedsCap).toBe(true);
    expect(first.data.nextStartLineHint).toBe(2);
    const second = JSON.parse(
      (toolResults[1] as { output?: { text?: string } }).output!.text!,
    ) as { data: { content: string; completeLineCount: number } };
    expect(second.data.completeLineCount).toBe(1);
    expect(second.data.content).toContain("L2 after-skip");
    session.close();
  });
});

describe("P6-MIN-09 — R7 security fixture / evidence fidelity", () => {
  const DOC = "projects/sfia-studio/docs/min09-doc.md";

  it("R7-A/B — fixtures match redaction.ts patterns and change under redactSecrets", () => {
    expect(FAKE.skToken).toMatch(/^sk-[A-Za-z0-9_-]{10,}$/);
    expect(FAKE.ghpToken).toMatch(/^ghp_[A-Za-z0-9]{20,}$/);
    expect(FAKE.openaiKeyLine).toMatch(/^OPENAI_API_KEY=.+/);
    expect(FAKE.bearer).toMatch(/^Authorization:\s*Bearer\s+\S+/);

    expect(redactSecrets(FAKE.skToken)).toBe("[redacted]");
    expect(redactSecrets(FAKE.skToken)).not.toBe(FAKE.skToken);
    expect(redactSecrets(FAKE.ghpToken)).toBe("[redacted]");
    expect(redactSecrets(FAKE.ghpToken)).not.toBe(FAKE.ghpToken);
    expect(redactSecrets(FAKE.openaiKeyLine)).toBe("[redacted]");
    expect(redactSecrets(FAKE.bearer)).toBe("[redacted]");

    // Pack-style non-matching placeholders must NOT be treated as equivalent evidence.
    expect(redactSecrets("sk-[FIXTURE_REDACTED]")).toBe("sk-[FIXTURE_REDACTED]");
    expect(redactSecrets("ghp_[FIXTURE_REDACTED]")).toBe(
      "ghp_[FIXTURE_REDACTED]",
    );
  });

  it("R7-C/D — outputs redacted; progression through redacted lines", async () => {
    const lines = [
      "alpha",
      FAKE.openaiKeyLine,
      `mid ${FAKE.skToken}`,
      FAKE.ghpToken,
      FAKE.bearer,
      "omega",
    ];
    const root = tmpGitRepoWithLines(lines);
    const adapter = new GitLocalReadAdapter(root);
    const r = adapter.readFile(DOC, 32768, { startLine: 1, endLine: 6 });
    expect(r.completeLineCount).toBe(6);
    expect(r.content).toContain("[redacted]");
    assertNoFakeSecrets(r.content);
    expect(r.content).not.toEqual(lines.join("\n"));

    let start = 1;
    const seen = new Set<number>();
    for (let i = 0; i < 4; i++) {
      const chunk = adapter.readFile(DOC, 180, {
        startLine: start,
        endLine: start + 1,
      });
      assertNoFakeSecrets(chunk.content);
      if (chunk.completeLineCount > 0) {
        for (let ln = chunk.returnedStartLine; ln <= chunk.returnedEndLine; ln++) {
          seen.add(ln);
        }
      }
      if (chunk.nextStartLineHint == null) break;
      start = chunk.nextStartLineHint;
    }
    expect(seen.size).toBeGreaterThanOrEqual(3);
  });

  it("R7-E/F/G — Session + events expurgated; model-visible JSON valid", async () => {
    const root = tmpGitRepoWithLines([
      "head",
      FAKE.openaiKeyLine,
      `tok ${FAKE.skToken}`,
      FAKE.bearer,
      "tail",
    ]);
    const events: TechnicalEvent[] = [];
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "p6-min09-r7e-"));
    dirs.push(dir);
    const session = new ProductSqliteSession({
      projectId: "prj:min09-r7e",
      dbPath: path.join(dir, "session.sqlite"),
    });
    const turn = await runNoraAgentsTurn({
      correlationId: "cor:min09-r7e",
      projectId: "prj:min09-r7e",
      systemInstructions: sfiaBoundaryInstructions(),
      userContent: `Consulte ${DOC}.`,
      session,
      model: new ScriptedModel([
        [
          functionCall(
            "git_local_read_file",
            { path: DOC, startLine: 1, endLine: 5 },
            { callId: "r7e" },
          ),
        ],
        [assistantMessage("Synthèse partielle sans secret.")],
      ]),
      enableTools: true,
      maxTurns: 4,
      enableControlledContinuation: false,
      workspaceRoot: root,
      sink: { emit: (e) => events.push(e) },
    });
    assertNoFakeSecrets(turn.text);
    for (const it of await session.getItems()) {
      assertNoFakeSecrets(JSON.stringify(it));
    }
    for (const e of events) {
      assertNoFakeSecrets(JSON.stringify(e));
    }
    const toolText = (
      (await session.getItems()).find(
        (it) =>
          (it as { type?: string }).type === "function_call_result" &&
          (it as { name?: string }).name === "git_local_read_file",
      ) as { output?: { text?: string } } | undefined
    )?.output?.text;
    expect(typeof toolText).toBe("string");
    expect(() => JSON.parse(toolText!)).not.toThrow();
    assertNoFakeSecrets(toolText!);
    session.close();
  });

  it("R7-H/I — evidence remains verifiable; controlled fail proves discrimination", () => {
    // Positive discrimination: if redaction were a no-op, secrets would remain.
    const raw = `prefix ${FAKE.skToken} suffix`;
    const redacted = redactSecrets(raw);
    expect(redacted).not.toContain(FAKE.skToken);
    expect(redacted).toContain("[redacted]");
    // Simulate a broken redactor (test-only) — assertion would catch leakage.
    const broken = (s: string) => s;
    expect(broken(raw)).toContain(FAKE.skToken);
    expect(broken(raw)).not.toBe(redacted);
    // Construction recipe published in source — no live credentials.
    expect(fictionSkToken()).toBe(`sk-${"A".repeat(12)}`);
    expect(fictionGhpToken()).toBe(`ghp_${"B".repeat(20)}`);
  });
});

```

### J/K — CREATED `projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryBudgetExhausted.ts` (contenu complet commit `9b855d8ddabd`)

```typescript
/**
 * Honest Product text when mission maxTurns is exhausted without extractable
 * assistant synthesis. Never invents document content from reasoning/tools.
 */
import {
  parseGitLocalReadCoverageSignals,
  unionReturnedLineSpans,
  type ReadCoverageFact,
} from "./readCoverage";

export const MODEL_TURN_BUDGET_REACHED_STOCK =
  "Model-turn budget reached (maxTurns).";

type ToolLikeItem = {
  type?: string;
  name?: string;
  rawItem?: { name?: string; type?: string };
  output?: unknown;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function extractToolResultPayload(item: ToolLikeItem): {
  summary?: string;
  data?: Record<string, unknown>;
} | null {
  const output = item.output;
  if (typeof output === "string") {
    try {
      const parsed = JSON.parse(output) as Record<string, unknown>;
      return {
        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
        data: asRecord(parsed.data) ?? undefined,
      };
    } catch {
      return null;
    }
  }
  const outObj = asRecord(output);
  if (!outObj) return null;
  if (typeof outObj.text === "string") {
    try {
      const parsed = JSON.parse(outObj.text) as Record<string, unknown>;
      return {
        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
        data: asRecord(parsed.data) ?? undefined,
      };
    } catch {
      return { summary: outObj.text.slice(0, 240) };
    }
  }
  return {
    summary: typeof outObj.summary === "string" ? outObj.summary : undefined,
    data: asRecord(outObj.data) ?? outObj,
  };
}

/**
 * Build coverage facts from Runner newItems / Session-like tool results.
 */
export function collectReadFactsFromRunItems(
  items: unknown[],
): ReadCoverageFact[] {
  const facts: ReadCoverageFact[] = [];
  for (const raw of items) {
    const item = asRecord(raw) as ToolLikeItem | null;
    if (!item) continue;
    const name =
      item.name ??
      item.rawItem?.name ??
      (typeof (item as { toolName?: string }).toolName === "string"
        ? (item as { toolName?: string }).toolName
        : undefined);
    const type = item.type ?? item.rawItem?.type;
    const isResult =
      type === "function_call_result" ||
      type === "tool_call_output_item" ||
      type === "function_call_output";
    if (!isResult && name !== "git_local_read_file") continue;
    if (name && name !== "git_local_read_file") continue;
    if (name !== "git_local_read_file" && !isResult) continue;

    const payload = extractToolResultPayload(item);
    if (!payload) continue;
    const data = payload.data ?? {};
    const summary =
      payload.summary ??
      (typeof data.summary === "string" ? data.summary : undefined);
    const path =
      (typeof data.path === "string" && data.path) ||
      (summary ? parseGitLocalReadCoverageSignals({ summary })?.documentPath : null);
    if (!path && !summary) continue;

    const parsed = parseGitLocalReadCoverageSignals({
      summary: summary ?? null,
      pathOrRef:
        typeof data.returnedStartLine === "number" &&
        typeof data.returnedEndLine === "number"
          ? `${path}#L${data.returnedStartLine}-${data.returnedEndLine}`
          : path,
    });
    if (!parsed) continue;

    const truncated =
      data.truncated === true || parsed.truncated === true;
    const documentHasMore =
      data.documentHasMore === true || parsed.documentHasMore === true;
    const returnedStartLine =
      typeof data.returnedStartLine === "number"
        ? data.returnedStartLine
        : parsed.returnedStartLine;
    const returnedEndLine =
      typeof data.returnedEndLine === "number"
        ? data.returnedEndLine
        : parsed.returnedEndLine;

    facts.push({
      pathOrRef: `${parsed.documentPath}#L${returnedStartLine}-${returnedEndLine}`,
      documentPath: parsed.documentPath,
      // Budget-exhausted disclosure never promotes FULL from tool crumbs alone.
      coverage: "partial",
      startLine: parsed.startLine,
      endLine: parsed.endLine,
      returnedStartLine,
      returnedEndLine,
      totalLines: parsed.totalLines,
      hasMore: truncated || documentHasMore || parsed.hasMore,
      truncated,
      documentHasMore,
      nextStartLineHint:
        typeof data.nextStartLineHint === "number"
          ? data.nextStartLineHint
          : parsed.nextStartLineHint,
      signals: [
        truncated ? "truncated" : null,
        documentHasMore ? "documentHasMore" : null,
      ].filter(Boolean) as string[],
      origin: "current_turn",
    });
  }
  return facts;
}

/**
 * Honest incomplete narrative — never fabricates document synthesis.
 */
export function buildDocumentaryBudgetExhaustedText(input: {
  items: unknown[];
  stockMessage?: string;
}): string {
  const stock = input.stockMessage ?? MODEL_TURN_BUDGET_REACHED_STOCK;
  const facts = collectReadFactsFromRunItems(input.items);
  if (facts.length === 0) {
    return stock;
  }

  const unions = unionReturnedLineSpans(facts);
  const lines: string[] = [
    stock,
    "",
    "Analyse documentaire inachevée — budget model-turn atteint avant une synthèse finalisée.",
    "Périmètre réellement remis par l'outil (plages retournées, pas le contenu inventé) :",
  ];

  for (const u of unions) {
    const spanTxt = u.spans
      .map((s) => `L${s.start}-${s.end}`)
      .join(", ");
    const total =
      typeof u.totalLines === "number" ? ` / ${u.totalLines}` : "";
    lines.push(
      `- ${u.documentPath}: ${spanTxt}${total}${u.provenFull ? " (couverture intégrale prouvée)" : " (couverture partielle)"}`,
    );
  }

  const hints = facts
    .map((f) => f.nextStartLineHint)
    .filter((n): n is number => typeof n === "number");
  if (hints.length > 0) {
    lines.push(
      `Reprise possible depuis la ligne ${Math.min(...hints)} (nextStartLineHint observé) — aucune HumanDecision ni Deliverable inventés.`,
    );
  } else {
    lines.push(
      "Aucune HumanDecision ni Deliverable inventés ; statut Product incomplete.",
    );
  }

  return lines.join("\n");
}

```

### J/K — CREATED `projects/sfia-studio/app/lib/nora-cognitive-runtime/documentaryReadGuidance.ts` (contenu complet commit `9b855d8ddabd`)

```typescript
/**
 * Bounded documentary-read guidance appended to system instructions when the
 * Pilot request is a natural mono-file Git synthesis mission.
 *
 * Not a parallel document engine — advisory only. OpenAI-native-first (R22).
 */

export const DOCUMENTARY_READ_GUIDANCE_BLOCK = [
  "=== DOCUMENTARY READ GUIDANCE (bounded / native tools) ===",
  "- Prefer startLine/endLine windows sized to stay under the tool character cap.",
  "- truncated=true ⇒ the requested range was cut; continue from nextStartLineHint.",
  "- documentHasMore=true with truncated=false ⇒ the range was fully returned; later lines remain.",
  "- Do not re-read already returned prefixes; advance with nextStartLineHint.",
  "- Before the mission model-turn budget ends, write a clearly PARTIAL synthesis of portions actually returned.",
  "- Never claim full-document analysis without FULL returned coverage L1–total and no truncation.",
].join("\n");

export function appendDocumentaryReadGuidance(
  systemInstructions: string,
  enabled: boolean,
): string {
  if (!enabled) return systemInstructions;
  const base = systemInstructions.trim();
  if (base.includes("DOCUMENTARY READ GUIDANCE")) return systemInstructions;
  return `${base}\n\n${DOCUMENTARY_READ_GUIDANCE_BLOCK}`;
}

```

## L. Validations locales

| Contrôle | Résultat |
|---|---|
| git diff --check | PASS |
| MIN09 + P1/P2/Session (78 tests) | PASS |
| npm run typecheck | PASS |
| npm run lint | PASS |
| npm run build | PASS |
| PRR conformance (après digest sync) | PASS |
| Secret scan local (fiction fixtures) | PASS |
| REAL OpenAI | ZERO |

## M. Fake/Real Qualification

- Fake: ScriptedModel @ model boundary only.
- Entry: DETERMINISTIC PROVEN AT TESTED SCOPE.
- This cycle: CODE PUBLISHED + CI QUALIFIED.
- Hors scope: REAL BOUNDARY / E2E GDR REAL / P6 GLOBAL PASS.

## N. Commit SHA

`9b855d8ddabd9bf9fffb8561f63d1138d8939be4`

```
9b855d8d fix(studio): improve Nora documentary analysis reliability
 ...p6.nora.min09.documentaryReliability.d0.test.ts | 1689 ++++++++++++++++++++
 .../p6.nora.p1.adaptiveBudget.d0.test.ts           |   16 +
 .../nora-cognitive-runtime/adaptiveTurnBudget.ts   |   35 +
 .../documentaryBudgetExhausted.ts                  |  194 +++
 .../documentaryReadGuidance.ts                     |   26 +
 .../app/lib/nora-cognitive-runtime/index.ts        |   11 +
 .../app/lib/nora-cognitive-runtime/readCoverage.ts |  289 +++-
 .../nora-cognitive-runtime/runNoraAgentsTurn.ts    |   69 +-
 .../nora-cognitive-runtime/runNoraCognitiveTurn.ts |   10 +
 .../app/lib/platform/observability/types.ts        |    4 +-
 .../lib/platform/repository/gitLocalReadAdapter.ts |  216 ++-
 .../app/lib/platform/tools/toolRouter.ts           |  333 +++-
 .../sfia-studio/app/lib/platform/tools/types.ts    |    2 +-
 .../production-runtime-reference.manifest.json     |    2 +-
 14 files changed, 2836 insertions(+), 60 deletions(-)

```

## O. Push SHA

`9b855d8ddabd9bf9fffb8561f63d1138d8939be4` — equals local HEAD (verified via fetch + ls-remote).

## P. Draft PR

- Number: **578**
- URL: https://github.com/mcleland147/sfia-workspace/pull/578
- Draft: **true**
- Base: `main`
- Head: `fix/p6-min09-documentary-cognitive-reliability-01`
- head SHA: `9b855d8ddabd9bf9fffb8561f63d1138d8939be4`

## Q. CI run / jobs / status / conclusion

- Workflow: **SFIA Studio CI**
- Run ID: **38357286682**
- URL: https://github.com/mcleland147/sfia-workspace/actions/runs/38357286682
- Status: completed
- Conclusion: **success**

Jobs:
- Detect SFIA Studio changes — success (7s) — ID 115163003253
- Build and validate SFIA Studio — success (5m34s) — ID 115163050501
  - Typecheck, Lint, Build, Unit tests (Vitest), Modeled governance, Secret scan, Trailing whitespace — all success
- SFIA Studio Required Gate — success (2s) — ID 115164740786

## R. Required Gate

**PASS** — SFIA Studio Required Gate conclusion=success on run 38357286682.

## S. Architecture / FinOps

KEEP Runner/Session/Loop. ADAPT Adapter/ToolRouter/coverage/budget. Ceiling 10. CT_MAX_TOOL_RESULT_CHARS=12000. No provider/routing/persistence change.

## T. Réserves

FPPC-RES-01 · P0-EFFECT-02 · RunState cross-restart · lineExceedsCap skip · DOC-PR577 séparée · GDR REAL NOT PROVEN · P6 GLOBAL NOT PASSED · Runtime v3 NON ADOPTED

## U. Dette / exit

Exit proof ce cycle : Draft PR créée, commit/push distants vérifiés, scope conforme (+digest PRR documenté), CI Required Gate PASS, Review Handoff exploitable.

Capacité suivante : Human QA REAL GDR T1 après merge + GO distinct.

## V. Décisions Morris restantes

1. **GO MERGE** PR #578 — NON consommé.
2. **GO post-merge / Human QA REAL T1** — NON autorisé.
3. Aucun auto-merge.

## W. Verdict

**DRAFT PR OPEN — PROJECT COMMIT/PUSH VERIFIED — CI PASS — AWAITING MORRIS MERGE GATE**

## X. Instruction ChatGPT

Lire le dernier Review Handoff distant sur `sfia/review-handoff`.

Vérifier : SHA commit projet `9b855d8ddabd9bf9fffb8561f63d1138d8939be4` ; SHA push ; PR #578 URL Draft ; base/head ; diff PR ; CI run 38357286682 ; Required Gate PASS ; réserves ; gates Morris.

Préparer la revue de merge **sans exécuter le merge**.

---
FIN DU REVIEW PACK FULL — RCD-01 GIT INTEGRATION
