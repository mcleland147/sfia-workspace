# Review Handoff — Canonical Publisher

Fail-closed publisher for the SFIA Review Handoff Git branch.

**Status:** candidate on branch `tooling/review-handoff-canonical-publisher` — not baseline until Morris merge.

## Path

`scripts/sfia/publish-review-handoff.sh`

## Purpose

Publish a local review pack **exclusively** to:

`sfia-review-handoff/latest-chatgpt-review.md`

on branch:

`sfia/review-handoff`

## Automation level

| Level | Scope |
|-------|--------|
| **L1** | Source/worktree/path/diff/blob/resume controls |
| **L3 borné** | Mono-file commit + normal push of `sfia/review-handoff` only |

**Not automated:** Light/Full choice, Morris decisions, project commit/push/PR/merge.

## CLI

```bash
scripts/sfia/publish-review-handoff.sh \
  --source /absolute/or/resolved/path/to/chatgpt-review.md \
  --commit-message "docs(review-handoff): publish …" \
  --handoff-worktree /path/to/sfia-review-handoff-worktree \
  [--dry-run]
```

### Non-configurable constants

- Branch: `sfia/review-handoff`
- Target: `sfia-review-handoff/latest-chatgpt-review.md`

## Local / remote classification

After `fetch`:

| Relation | Action |
|----------|--------|
| **A. Local = remote** | If remote blob = source → `HANDOFF ALREADY CURRENT — REMOTE VERIFIED`. Else publish (copy → commit → push → verify) → `HANDOFF UPDATED — REMOTE VERIFIED`. |
| **B. Local behind remote** | Fast-forward only, then reclassify as equal. |
| **C. Divergent histories** | `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` |
| **D. Local ahead of remote** | **Resume path** (see below). |

## Resume after failed push (local-ahead)

Scenario:

1. Canonical file updated and committed locally.
2. Push fails (network, auth, transient).
3. Worktree is clean; `HEAD` is ahead of `origin/sfia/review-handoff`.
4. Same command is re-run with the same `--source`.

The publisher then:

1. Confirms `origin/sfia/review-handoff` is an ancestor of `HEAD`.
2. Verifies **every** commit in `origin/sfia/review-handoff..HEAD` modifies **exactly** `sfia-review-handoff/latest-chatgpt-review.md` (multiple strictly-canonical commits accepted after exhaustive check).
3. Refuses if any commit touches `latest-chatgpt-review.md` (root) or another path → `HANDOFF RESUME REFUSED — NON-CANONICAL LOCAL COMMITS`.
4. Compares `HEAD:sfia-review-handoff/latest-chatgpt-review.md` blob to `--source` → mismatch → `HANDOFF RESUME REFUSED — LOCAL COMMIT SOURCE MISMATCH`.
5. Does **not** copy again, does **not** create a second commit, does **not** amend, does **not** reset.
6. Pushes FF-only, fetches, verifies path + blob + size + title + tip mono-file.
7. Verdict: `HANDOFF RESUMED — REMOTE VERIFIED`.

### Difference between success modes

| Verdict | Meaning |
|---------|---------|
| `HANDOFF ALREADY CURRENT — REMOTE VERIFIED` | Local == remote and remote canonical blob already equals source |
| `HANDOFF UPDATED — REMOTE VERIFIED` | New mono-file commit created and pushed |
| `HANDOFF RESUMED — REMOTE VERIFIED` | Existing local-ahead canonical tip pushed without a new commit |

## Staging and ignore rules

- Stage is always the explicit canonical path only — never `git add .` / `git add -A`.
- Staging uses `git add -f -- sfia-review-handoff/latest-chatgpt-review.md` as a **compatibility guard**: a local `.git/info/exclude` entry `sfia-review-handoff/` (used to hide a nested handoff worktree under the main clone) can block a plain `git add` even for an already-tracked file.
- The publisher does **not** rewrite `.git/info/exclude`.

### `.gitignore` (tracked)

**No shared `/sfia-review-handoff/` rule** on `main`. Nested worktree hiding stays a **local** `.git/info/exclude` concern. A tracked rule was considered and **rejected** (no shared need; it only forced `-f` without benefit).

### Root file

`latest-chatgpt-review.md` remains non-canonical. This publisher never writes it. Cleanup requires a separate Morris GO.

## Verdicts (selected)

| Verdict | Meaning |
|---------|---------|
| `HANDOFF UPDATED — REMOTE VERIFIED` | Published |
| `HANDOFF ALREADY CURRENT — REMOTE VERIFIED` | No-op; remote already matches |
| `HANDOFF RESUMED — REMOTE VERIFIED` | Push resumed after local-ahead |
| `HANDOFF DRY-RUN OK — NO MUTATION` | Dry-run passed |
| `HANDOFF RESUME REFUSED — LOCAL COMMIT SOURCE MISMATCH` | Ahead tip blob ≠ source |
| `HANDOFF RESUME REFUSED — NON-CANONICAL LOCAL COMMITS` | Ahead range not mono-canonical |
| `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Non-FF divergence |
| `HANDOFF COPY FAILED — NO DIFF` | Equal branch expected a working-tree change (should not fire on valid resume) |

## Tests

```bash
scripts/sfia/tests/publish-review-handoff.test.sh
```

Uses temporary bare remotes only — never the real `origin/sfia/review-handoff`.

## Alternatives considered

| Option | Decision |
|--------|----------|
| Auto-amend / reset after failed push | Rejected — masks failure |
| Second commit on resume | Rejected — duplicates tip |
| Shared tracked `.gitignore` for nested WT | Rejected — local exclude sufficient |
| Force push | Forbidden |
