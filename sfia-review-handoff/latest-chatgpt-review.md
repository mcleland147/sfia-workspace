# SFIA Studio — FULL Review Pack — V3-REAL-B-BLOCKER-02-CORR-03-CORR-01

**Generated:** 2026-08-28 15:52:20 UTC+02:00
**Morris GO:** GO V3-REAL-B-BLOCKER-02-CORR-03-CORR-01
**Cycle:** V3-REAL-B-BLOCKER-02-CORR-03-CORR-01 — Explicit Source Attribution for Evidence-Backed Blocking Contradictions
**Level:** FULL

---

## 1. Git truth

| Field | Value |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Branch | fix/sfia-studio-real-b-blocker-02 |
| HEAD | 967f4c2b35948492caeba5347bb02c7c420de490 |
| origin/main | 967f4c2b35948492caeba5347bb02c7c420de490 |
| Source handoff consumed | 13f316af1690d0f03c2e18e35baaa072d38556c8 (CORR-03) |
| Remote corrective branch | ABSENT |
| Project commit | NONE |

---

## 2. Convergence pre-check

Build Doctrine VALIDATED/ACTIVE · Product Completion CLOSED · REAL-A CONSUMED · REAL-B BLOCKING · runtime v3 NON ADOPTED · REAL-C BLOCKED.

---

## 3. Formal review defect

CORR-03 allowed `attributedPaths.length === 0` to return true in `attributedPathsSupportedByReads`, and `sourceRefs` fell back to all successful READ paths. **Marker yes + unrelated successful READ could prove contradiction.**

**Fixed:** YES

---

## 4. Before / after attribution semantics

### BEFORE (CORR-03 defect)

```typescript
function attributedPathsSupportedByReads(attributedPaths, readPaths) {
  if (readPaths.length === 0) return false;
  if (attributedPaths.length === 0) return true;  // DEFECT
  ...
}
sourceRefs = attributedPaths.length === 0 ? readPaths : matched;
```

Zero attribution + any READ → evidenceBacked=true.

### AFTER (CORR-03-CORR-01)

```typescript
function attributedPathsSupportedByReads(attributedPaths, readPaths) {
  if (readPaths.length === 0 || attributedPaths.length === 0) return false;
  ...
}
sourceRefs = readPaths.filter(read => attributedPaths.some(...align...));
if (sourceRefs.length === 0) return not proved;
```

Explicit attributed source required YES · matching successful READ required YES · matched-only sourceRefs YES · unrelated reads NOT exposed YES.

---

## 5. Production diff — groundingPreflight.ts (key sections)

```typescript
function buildPrequalificationUserPrompt(userContent: string): string {
  return [
    "PREQUALIFICATION GROUNDING (read-only) — BEFORE any cycle qualification.",
    "Tasks:",
    "1. Identify current-state / repository premises in the user request that materially affect qualification.",
    "2. Resolve the required repository/runtime sources with READ tools only.",
    "3. Treat user claims as untrusted until corroborated by successful tool reads.",
    "4. Current Git/runtime evidence outranks unsupported conversation claims.",
    "5. If a source fails, is unavailable, truncated, or missing: state that explicitly.",
    "6. Do NOT qualify a cycle. Do NOT decide. Do NOT mutate. Do NOT execute.",
    "7. Return grounded facts with attributable source paths/refs only.",
    "8. If the user elevates an unsupported current-state claim to definitive fact/HumanDecision and sources contradict or fail to corroborate it, include exactly: CONTRADICTION_BLOCKING: yes",
    "8a. When CONTRADICTION_BLOCKING: yes, explicitly cite at least one exact repository document path/ref from a successful READ that supports the contradiction (e.g. projects/sfia-studio/...). No path = contradiction unproved.",
    "9. Otherwise include: CONTRADICTION_BLOCKING: no",
    "10. Before finishing, emit a machine-checkable required source inventory (one line per source identified from the user request):",
    "REQUIRED_SOURCE_INTENTS:",
    "- id: req-N | label: <logical source name>",
    "Narrative claims alone do NOT mark a source complete — only successful git_local_read_file evidence counts.",
    "",
    "User request:",
    userContent,
  ].join("\n");
}

function normalizeSourceLabel(raw: string): string {
  return raw
    .replace(/^(?:la|le|les|l'|the|un|une|des|du|de|d')\s+/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenizeSourceLabel(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .split(/\s+/)
    .filter((t) => t.length > 1);
}

function documentPathFromSourceRef(ref: string): string {
  const hash = ref.indexOf("#");
  return hash >= 0 ? ref.slice(0, hash) : ref;
}

function extractAttributedDocumentPaths(text: string): string[] {
  const paths = [
    ...text.matchAll(
      /projects\/sfia-studio[/a-zA-Z0-9_.-]+(?:\.[a-z0-9]+)?(?:#L\d+(?:-\d+)?)?/gi,
    ),
  ].map((match) => documentPathFromSourceRef(match[0]).toLowerCase());
  return [...new Set(paths)];
}

function successfulAuthoritativeReadPaths(
  evidence: readonly ToolLoopEvidenceItem[],
): string[] {
  return [
    ...new Set(
      evidence
        .filter(
          (item) =>
            item.status === "succeeded" &&
            item.isAuthoritativeDocumentRead &&
            item.sourceRef,
        )
        .map((item) =>
          documentPathFromSourceRef(item.sourceRef!).toLowerCase(),
        ),
    ),
  ];
}

function documentPathsAlign(attributed: string, read: string): boolean {
  return (
    attributed === read ||
    read.endsWith(attributed) ||
    attributed.endsWith(read)
  );
}

function attributedPathsSupportedByReads(
  attributedPaths: string[],
  readPaths: string[],
): boolean {
  if (readPaths.length === 0 || attributedPaths.length === 0) return false;
  return attributedPaths.some((attributed) =>
    readPaths.some((read) => documentPathsAlign(attributed, read)),
  );
}

/**
 * Evidence-backed contradiction disposition — CONTRADICTION_BLOCKING alone is insufficient.
 * Requires at least one successful authoritative document READ backing attributed sources.
 */
export function evaluateEvidenceBackedContradictionDisposition(input: {
  userContent: string;
  narrativeText: string;
  authoritativeEvidence: readonly ToolLoopEvidenceItem[];
}): GroundingContradictionDisposition {
  void input.userContent;
  const grounded = input.narrativeText.trim();
  const claim =
    "Unsupported user current-state claim elevated to definitive fact/decision.";

  if (!/\bCONTRADICTION_BLOCKING\s*:\s*yes\b/i.test(grounded)) {
    return { ...EMPTY_CONTRADICTION_DISPOSITION };
  }

  const readPaths = successfulAuthoritativeReadPaths(input.authoritativeEvidence);
  const groundedFact = grounded.slice(0, 1200);

  if (readPaths.length === 0) {
    return {
      ...EMPTY_CONTRADICTION_DISPOSITION,
      claim,
      groundedFact,
    };
  }

  const attributedPaths = extractAttributedDocumentPaths(grounded);
  if (!attributedPathsSupportedByReads(attributedPaths, readPaths)) {
    return {
      ...EMPTY_CONTRADICTION_DISPOSITION,
      claim,
      groundedFact,
    };
  }

  const sourceRefs = readPaths.filter((read) =>
    attributedPaths.some((attributed) =>
      documentPathsAlign(attributed, read),
    ),
  );

  if (sourceRefs.length === 0) {
    return {
      ...EMPTY_CONTRADICTION_DISPOSITION,
      claim,
      groundedFact,
    };
  }

  return {
    blocking: true,
    evidenceBacked: true,
    claim,
    groundedFact,
    sourceRefs,
  };
}

export function formatBlockingContradictionStopMessage(
  disposition: GroundingContradictionDisposition,
): string {
  return `[Contradiction] Contradiction bloquante — claim: ${disposition.claim} | fait grounded: ${disposition.groundedFact.slice(0, 400)} La phrase utilisateur n'est pas une HumanDecision. Aucune CycleInstance / LPS / Proposal fondée sur la prémisse non corroborée. AUCUNE EXÉCUTION.`;
}


```

**orchestrateF2.ts:** NO CHANGE (gate ordering preserved).

---

## 6. Prequalification protocol rule 8a

When `CONTRADICTION_BLOCKING: yes`, grounding narrative must cite at least one exact repository document path/ref from a successful READ. No path = contradiction unproved.

---

## 7. New tests (CORR-03-CORR-01)

```typescript
T-B02-CORR03-C01-NO-ATTRIBUTION-WITH-READ-NOT-BLOCKING — marker yes + READ without explicit path is not proved", () => {
    const disposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: RB07_EXACT_PROMPT,
      narrativeText: "CONTRADICTION_BLOCKING: yes",
      authoritativeEvidence: [
        {
          toolName: "git_local_read_file",
          status: "succeeded",
          sourceRef: ROADMAP_PATH,
          summary: "read ok",
          payload: "{}",
          truncated: false,
          isAuthoritativeDocumentRead: true,
        },
      ],
    });
    expect(disposition.blocking).toBe(false);
    expect(disposition.evidenceBacked).toBe(false);
    expect(disposition.sourceRefs).toEqual([]);
  });

  it("T-B02-CORR03-C01-ATTRIBUTED-MATCHING-READ-BLOCKING — explicit path + matching READ proves contradiction", () => {
    const disposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: RB07_EXACT_PROMPT,
      narrativeText: [
        `Repository evidence from ${DISCLOSURES_PATH} contradicts user ADOPTED claim.`,
        "CONTRADICTION_BLOCKING: yes",
      ].join("\n"),
      authoritativeEvidence: [
        {
          toolName: "git_local_read_file",
          status: "succeeded",
          sourceRef: DISCLOSURES_PATH,
          summary: "read ok",
          payload: "{}",
          truncated: false,
          isAuthoritativeDocumentRead: true,
        },
      ],
    });
    expect(disposition.blocking).toBe(true);
    expect(disposition.evidenceBacked).toBe(true);
    expect(disposition.sourceRefs).toEqual([DISCLOSURES_PATH.toLowerCase()]);
  });

  it("T-B02-CORR03-C01-MULTIPLE-READS-ONLY-MATCHED-EXPOSED — sourceRefs contain only attributed matching READ", () => {
    const disposition = evaluateEvidenceBackedContradictionDisposition({
      userContent: RB07_EXACT_PROMPT,
      narrativeText: [
        `Evidence ${ROADMAP_PATH} contradicts user claim.`,
        "CONTRADICTION_BLOCKING: yes",
      ].join("\n"),
      authoritativeEvidence: [
        {
          toolName: "git_local_read_file",
          status: "succeeded",
          sourceRef: ROADMAP_PATH,
          summary: "read ok",
          payload: "{}",
          truncated: false,
          isAuthoritativeDocumentRead: true,
        },
        {
          toolName: "git_local_read_file",
          status: "succeeded",
          sourceRef: C1_PATH,
          summary: "read ok",
          payload: "{}",
          truncated: false,
          isAuthoritativeDocumentRead: true,
        },
      ],
    });
    expect(disposition.blocking).toBe(true);
    expect(disposition.evidenceBacked).toBe(true);
    expect(disposition.sourceRefs).toEqual([ROADMAP_PATH.toLowerCase()]);
    expect(disposition.sourceRefs).not.toContain(C1_PATH.toLowerCase());
  });

  it("
```

RB-07 integration providers updated to cite explicit paths (`ROADMAP_PATH` / `DISCLOSURES_PATH`) in contradiction narratives.

---

## 8. Zero-attribution regression proof

**T-B02-CORR03-C01-NO-ATTRIBUTION-WITH-READ-NOT-BLOCKING**

Input: `CONTRADICTION_BLOCKING: yes` + successful `git_local_read_file` of Roadmap, **no path in narrative**.

Expected/actual: blocking=false, evidenceBacked=false, sourceRefs=[] — **PASS**

---

## 9. Positive attribution proof

**T-B02-CORR03-C01-ATTRIBUTED-MATCHING-READ-BLOCKING**

Narrative cites `DISCLOSURES_PATH` + matching READ → blocking=true, evidenceBacked=true, sourceRefs=[disclosures path] — **PASS**

---

## 10. Matched-source-only proof

**T-B02-CORR03-C01-MULTIPLE-READS-ONLY-MATCHED-EXPOSED**

Reads: Roadmap + C1 · narrative cites Roadmap only → sourceRefs=[Roadmap], C1 NOT leaked — **PASS**

---

## 11. Existing negative guards (retained)

| Test | Result |
|---|---|
| T-B02-CORR03-MODEL-ONLY-NOT-BLOCKING | PASS |
| T-B02-CORR03-SEARCH-ONLY-NOT-BLOCKING | PASS |
| T-B02-CORR03-FAILED-READ-NOT-BLOCKING | PASS |
| T-B02-CORR03-UNATTRIBUTED-READ-NOT-BLOCKING (mismatched path) | PASS |

---

## 12. RB-07 deterministic non-regression

**T-B02-CORR03-RB07-CONTRADICTION-PREEMPTS-COVERAGE** — Contradiction surfaced, not context incomplete; Cycle Δ0, LPS Δ0, Proposal NO, HD 0, EC 0, Attempt 0 — **PASS**

---

## 13. RB-01 non-regression

| Test | Result |
|---|---|
| T-B02-CORR03-RB01-2OF3 | blocked YES — PASS |
| T-B02-CORR03-RB01-3OF3 | cyc:qa-validation / Critical — PASS |
| T-B02-CORR03-RB01-POISON-NARRATIVE | authoritative evidence wins — PASS |
| T-B02-CORR03-RB07-HUMAN-DECISION | HD delta 0 — PASS |

**F-RB-01:** CLOSED BY REAL REPROOF — non-regression PASS

---

## 14. Targeted test commands & results

```bash
cd projects/sfia-studio/app
npx vitest run __tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts __tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts
# 47/47 PASS

npx vitest run __tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts -t "CORR03-C01|CORR03-RB07|CORR03-RB01|CORR03-MODEL|CORR03-SEARCH|CORR03-FAILED|CORR03-UNATTRIBUTED|CORR03-CONTRADICTION-LATCHED"
# 13/13 PASS (23 skipped)
```

```
 ✓ __tests__/project-assistant/realBBlocker02.authoritativeGroundingEvidence.test.ts (36 tests | 23 skipped) 283ms

 Test Files  1 passed (1)
      Tests  13 passed | 23 skipped (36)
   Start at  15:52:03
   Duration  1.19s (transform 505ms, setup 22ms, collect 738ms, tests 283ms, environment 0ms, prepare 23ms)
```

---

## 15. Typecheck

```bash
npm run typecheck
# EXIT 0
```

---

## 16. Build

```bash
npm run build
# PASS / EXIT 0
```

---

## 17. Full Vitest attempts

| Attempt | Result |
|---|---|
| 1 | **EXIT 0** — 2196 passed, 131 skipped |

**Fifth full-suite attempt:** NO (not required; attempt 1 succeeded)

```
   ✓ ops1 I6 report + continuation > resumes chat after report without new execution attempt  724ms
   ✓ ops1 I6 report + continuation > refuses CLOSED mutation and opens continuation with parentSessionId  677ms
   ✓ ops1 I6 report + continuation > stores redacted refusal reasons on sealed report  394ms

 Test Files  225 passed | 13 skipped (238)
      Tests  2196 passed | 131 skipped (2327)
   Start at  15:51:35
   Duration  16.62s (transform 5.63s, setup 8.01s, collect 31.20s, tests 61.72s, environment 9.19s, prepare 8.73s)
```

---

## 18. Evidence hashes (before = after)

| File | SHA-256 |
|---|---|
| 02-real-b-frb01-impacted-live-reproof-02.md | f6368c4648ba3b7faa02b65febcf1b9cf5147cc2d2a711e073bdcec18c134988 |
| 02-real-b-qualification-cognitive-reasoning.md | 9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393 |
| 02-real-b-exact-reproof-01.md | db3e95cd3039b3c5c5eeaac691bb00b24a28829bcd5bdd7b7dd1fbdeb8072382 |
| real-b-blocker-01-source-grounded-cognitive-qualification.md | 9c2d4593f0ecee6ff1174287d7b2ce0e863d5de12682bbe56e61b981759d7005 |

**Unchanged:** YES

---

## 19. Remediation documentation — §Q CORR-03-CORR-01

## Q. CORR-03-CORR-01 — Explicit source attribution for evidence-backed blocking contradictions (V3-REAL-B-BLOCKER-02-CORR-03-CORR-01)

### Formal review finding

CORR-03 allowed `attributedPaths.length === 0` to fall through as proved when any successful authoritative READ existed. That let an unrelated READ support a model-only contradiction claim.

### Before invariant (defect)

```
CONTRADICTION_BLOCKING: yes + zero explicit repository path + any successful READ → evidenceBacked = true
sourceRefs = all successful READ paths when no attribution
```

### After invariant (CORR-03-CORR-01)

```
BLOCKING PROVED =
  CONTRADICTION_BLOCKING: yes
  + explicit repository document path in narrative (≥1)
  + successful authoritative git_local_read_file aligned to that path
sourceRefs = matched READ paths only (never all READs)
Zero attribution → blocking = false, evidenceBacked = false (even with READ evidence)
```

### Prequalification protocol

Rule 8a added: when `CONTRADICTION_BLOCKING: yes`, grounding narrative must cite at least one exact repository path/ref from a successful READ supporting the contradiction.

### New regression tests

- `T-B02-CORR03-C01-NO-ATTRIBUTION-WITH-READ-NOT-BLOCKING` — primary zero-attribution guard
- `T-B02-CORR03-C01-ATTRIBUTED-MATCHING-READ-BLOCKING` — positive matching attribution
- `T-B02-CORR03-C01-MULTIPLE-READS-ONLY-MATCHED-EXPOSED` — sourceRefs leak guard

All prior CORR-03 negative guards and RB-01/RB-07 deterministic paths retained.

### F-RB-01 / F-RB-07

- F-RB-01 **CLOSED BY REAL REPROOF** — non-regression preserved.
- F-RB-07 deterministic contradiction path preserved; **REAL status pending impacted LIVE reproof**.

### Validation retry contract

Full Vitest governed to **maximum 4 attempts** for final stable code state (no fifth retry).

### Proof ceiling

**BLOCKING CONTRADICTION REQUIRES EXPLICIT SOURCE ATTRIBUTION + MATCHING AUTHORITATIVE READ — UNATTRIBUTED SUCCESSFUL READ CANNOT PROVE CONTRADICTION — MATCHED SOURCE REFS ONLY — CORR-03 CONTRADICTION-FIRST ORDERING PRESERVED — PENDING IMPACTED LIVE REPROOF (RB-07 + RB-01)**. Not REAL-B PASS · not REAL-C · not F-RB-07 CLOSED REAL.


---

## 20. Dispositions

| Finding | Status |
|---|---|
| F-RB-01 | CLOSED BY REAL REPROOF — preserved |
| F-RB-07 | REGRESSED LIVE / PENDING LIVE REPROOF — deterministic path preserved |
| F-RB-02 / TOOL-01 / R-COV-01/02 | OPEN NONBLOCKING |
| RB01-NARRATIVE-PARITY | IMPORTANT / NONBLOCKING |

---

## 21. Constraints verified

- OpenAI LIVE: 0
- HD / EC / Attempt: 0
- Project commit/push/PR/merge: NONE
- REAL-C: NOT EXECUTED
- runtime v3: NON ADOPTED
- No new resolver/engine
- CORR-03 contradiction-first ordering preserved

---

## 22. Proof ceiling

**V3-REAL-B-BLOCKER-02-CORR-03-CORR-01 — CORRECTIVE DELIVERY DETERMINISTIC PROVEN — BLOCKING CONTRADICTION REQUIRES EXPLICIT SOURCE ATTRIBUTION + MATCHING AUTHORITATIVE READ — UNATTRIBUTED SUCCESSFUL READ CANNOT PROVE CONTRADICTION — MATCHED SOURCE REFS ONLY — CORR-03 CONTRADICTION-FIRST ORDERING PRESERVED — F-RB-07 DETERMINISTIC PATH PRESERVED — F-RB-01 REAL CLOSURE PRESERVED — CORR-02 FAIL-CLOSED PRESERVED — FULL VITEST EXIT 0 WITHIN AUTHORIZED RETRY CEILING — PENDING IMPACTED LIVE REPROOF RB-07 + RB-01**

Forbidden: F-RB-07 CLOSED REAL · REAL-B PASS · REAL-C · runtime v3 ADOPTED

---

## 23. Final verdict

**V3-REAL-B-BLOCKER-02-CORR-03-CORR-01 — CORRECTIVE DELIVERY DETERMINISTIC PROVEN — BLOCKING CONTRADICTION REQUIRES EXPLICIT SOURCE ATTRIBUTION + MATCHING AUTHORITATIVE READ — UNATTRIBUTED SUCCESSFUL READ CANNOT PROVE CONTRADICTION — MATCHED SOURCE REFS ONLY — CORR-03 CONTRADICTION-FIRST ORDERING PRESERVED — F-RB-07 DETERMINISTIC PATH PRESERVED — F-RB-01 REAL CLOSURE PRESERVED — CORR-02 REQUIRED-SOURCE FAIL-CLOSED PRESERVED — FULL VITEST EXIT 0 WITHIN AUTHORIZED RETRY CEILING — REVIEW HANDOFF PUBLISHED IN-CYCLE / REMOTE VERIFIED — PENDING IMPACTED LIVE REPROOF RB-07 + RB-01 — NO PROJECT COMMIT/PUSH/PR/MERGE — NO OPENAI LIVE — NO REAL-C — RUNTIME V3 NON ADOPTED**
