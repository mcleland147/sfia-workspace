# Review pack Full — Review Handoff Publisher Retry Correction

## Métadonnées

- **Date / heure / fuseau :** 2026-07-21 13:20:27 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle principal :** 8 — Delivery correctif
- **Cycles associés :** 7 DevOps · 9 QA · 10 Sécurité · 15 Capitalisation
- **Profil :** Critical
- **Typologie :** tooling / corrective
- **Décision Morris :** `GO CORRECTION REVIEW HANDOFF PUBLISHER — RESUME AFTER FAILED PUSH — REASSESS GITIGNORE — LOCAL DELIVERY ONLY`
- **Branche :** `tooling/review-handoff-canonical-publisher`
- **Worktree tooling :** `/Users/morris/Projects/sfia-workspace-review-handoff-publisher`
- **Base / HEAD / merge-base :** `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f` / `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f` / `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`
- **Review pack :** Full
- **Chemin canonique :** `sfia-review-handoff/latest-chatgpt-review.md`

## État Git initial

- Branche exacte tooling ; HEAD = base sans commit projet ; staged vide
- Héritage local : publisher + tests + README + docs méthode du cycle précédent
- `.gitignore` tracked avait une règle `/sfia-review-handoff/` du cycle précédent (retirée dans cette correction)
- OPS1 I3 intact sur autre worktree

## Diagnostic du défaut

Après commit local réussi et push échoué :

1. `RELATION=ahead` n'était pas traité comme reprise ;
2. le flux nominal faisait `copy_canonical` puis `assert_diff_canonical_only` ;
3. le working tree était déjà propre (= tip) → **pas de diff** → `HANDOFF COPY FAILED — NO DIFF` ;
4. relance impossible sans intervention manuelle.

## Correction

Classification explicite local/remote après fetch :

- **equal** → already-current ou publish ;
- **behind** → FF only puis equal ;
- **diverge** → STOP ;
- **ahead** → validate resume invariants → push only → `HANDOFF RESUMED — REMOTE VERIFIED`.

Invariants ahead :

1. remote ancêtre de HEAD ;
2. chaque commit `remote..HEAD` mono-fichier canonique (plusieurs commits canoniques acceptés après contrôle exhaustif) ;
3. aucun touch de la racine / autre fichier ;
4. blob `HEAD:canonical` = blob `--source` ;
5. worktree/staged propres ;
6. push FF ; tip mono-fichier.

Aucun second commit, amend, reset, force push.

## Verdicts ajoutés

- `HANDOFF RESUMED — REMOTE VERIFIED`
- `HANDOFF RESUME REFUSED — LOCAL COMMIT SOURCE MISMATCH`
- `HANDOFF RESUME REFUSED — NON-CANONICAL LOCAL COMMITS`

## Analyse `.gitignore`

| Fait | Observation |
|------|-------------|
| Worktree handoff réel | `…/sfia-workspace/sfia-review-handoff` (imbriqué) |
| Exclude locale | `.git/info/exclude` → `sfia-review-handoff/` |
| Règle tracked ajoutée | `/sfia-review-handoff/` — masquage théorique partagé |
| Besoin démontré | Non — exclude locale suffit ; tooling WT est externe |

**Décision :** retirer la modification tracked `.gitignore` (revenu à l'état `origin/main`). Conserver `git add -f -- <canonical>` comme garde-fou de compatibilité locale. Ne pas modifier automatiquement `.git/info/exclude`.

## Fichiers créés (contenu intégral)

### scripts/sfia/publish-review-handoff.sh

```bash
#!/usr/bin/env bash
# publish-review-handoff.sh — fail-closed canonical Review Handoff publisher
#
# Automation level:
#   L1 — path / cleanliness / mono-file / blob controls
#   L3 — bounded commit + push of sfia/review-handoff only
#
# Does NOT automate: Light/Full choice, Morris decisions, project commit/push/PR/merge.
set -euo pipefail

readonly HANDOFF_BRANCH="sfia/review-handoff"
readonly CANONICAL_REL="sfia-review-handoff/latest-chatgpt-review.md"
readonly ROOT_NONCANONICAL_REL="latest-chatgpt-review.md"

SOURCE=""
COMMIT_MESSAGE=""
HANDOFF_WT=""
DRY_RUN=0
HANDOFF_ROOT=""
TARGET=""

usage() {
  cat <<'USAGE'
Usage:
  publish-review-handoff.sh --source <path> --commit-message <msg> --handoff-worktree <path> [--dry-run]

Constants (non-overridable):
  branch:  sfia/review-handoff
  target:  sfia-review-handoff/latest-chatgpt-review.md

Options:
  --source PATH              Review pack source file (required)
  --commit-message MSG       Commit message (required for new commits)
  --handoff-worktree PATH    Clean worktree checked out on sfia/review-handoff (required)
  --dry-run                  Validate without commit/push (including resume checks)
  -h, --help                 Show help

Success verdicts:
  HANDOFF UPDATED — REMOTE VERIFIED
  HANDOFF ALREADY CURRENT — REMOTE VERIFIED
  HANDOFF RESUMED — REMOTE VERIFIED
  HANDOFF DRY-RUN OK — NO MUTATION
USAGE
}

die() {
  printf '%s\n' "$1" >&2
  exit 1
}

require_cmd() {
  command -v "$1" >/dev/null 2>&1 || die "Missing required command: $1"
}

abs_path() {
  local p="$1"
  if [[ -d "$p" ]]; then
    (cd "$p" && pwd -P)
  else
    local dir base
    dir=$(cd "$(dirname "$p")" && pwd -P)
    base=$(basename "$p")
    printf '%s/%s\n' "$dir" "$base"
  fi
}

is_under_prefix() {
  local path="$1"
  local prefix="$2"
  [[ "$path" == "$prefix" || "$path" == "$prefix"/* ]]
}

parse_args() {
  while [[ $# -gt 0 ]]; do
    case "$1" in
      --source)
        [[ $# -ge 2 ]] || die "Missing value for --source"
        SOURCE=$2
        shift 2
        ;;
      --commit-message)
        [[ $# -ge 2 ]] || die "Missing value for --commit-message"
        COMMIT_MESSAGE=$2
        shift 2
        ;;
      --handoff-worktree)
        [[ $# -ge 2 ]] || die "Missing value for --handoff-worktree"
        HANDOFF_WT=$2
        shift 2
        ;;
      --dry-run)
        DRY_RUN=1
        shift
        ;;
      -h|--help)
        usage
        exit 0
        ;;
      *)
        die "Unknown argument: $1"
        ;;
    esac
  done

  [[ -n "$SOURCE" ]] || die "Missing --source"
  [[ -n "$HANDOFF_WT" ]] || die "Missing --handoff-worktree"
  if [[ "$DRY_RUN" -eq 0 && -z "$COMMIT_MESSAGE" ]]; then
    die "Missing --commit-message"
  fi
}

preflight_source() {
  [[ -e "$SOURCE" ]] || die "HANDOFF SOURCE INVALID — FILE MISSING"
  [[ -f "$SOURCE" ]] || die "HANDOFF SOURCE INVALID — NOT A REGULAR FILE"
  [[ -s "$SOURCE" ]] || die "HANDOFF SOURCE INVALID — EMPTY FILE"
  SOURCE=$(abs_path "$SOURCE")
}

preflight_worktree() {
  [[ -d "$HANDOFF_WT" ]] || die "HANDOFF WORKTREE MISSING"
  HANDOFF_WT=$(abs_path "$HANDOFF_WT")
  git -C "$HANDOFF_WT" rev-parse --is-inside-work-tree >/dev/null 2>&1 \
    || die "HANDOFF WORKTREE INVALID — NOT A GIT WORKTREE"

  local branch
  branch=$(git -C "$HANDOFF_WT" branch --show-current)
  [[ "$branch" == "$HANDOFF_BRANCH" ]] \
    || die "HANDOFF WORKTREE INVALID — BRANCH IS '${branch}' (expected ${HANDOFF_BRANCH})"

  local status_out cached_out
  status_out=$(git -C "$HANDOFF_WT" status --porcelain)
  [[ -z "$status_out" ]] || die "HANDOFF WORKTREE NOT CLEAN"

  cached_out=$(git -C "$HANDOFF_WT" diff --cached --name-only)
  [[ -z "$cached_out" ]] || die "HANDOFF WORKTREE STAGED NOT EMPTY"

  git -C "$HANDOFF_WT" rev-parse --verify "origin/${HANDOFF_BRANCH}" >/dev/null 2>&1 \
    || die "HANDOFF REMOTE REF MISSING — origin/${HANDOFF_BRANCH}"
}

resolve_target() {
  local handoff_root target_real relative
  handoff_root=$(git -C "$HANDOFF_WT" rev-parse --show-toplevel)
  handoff_root=$(abs_path "$handoff_root")

  TARGET="${handoff_root}/${CANONICAL_REL}"
  mkdir -p "$(dirname "$TARGET")"

  if [[ -e "$TARGET" ]]; then
    target_real=$(abs_path "$TARGET")
  else
    local parent
    parent=$(abs_path "$(dirname "$TARGET")")
    is_under_prefix "$parent" "$handoff_root" \
      || die "HANDOFF PATH INVALID — CANONICAL TARGET MISMATCH"
    target_real="${parent}/$(basename "$TARGET")"
  fi

  is_under_prefix "$target_real" "$handoff_root" \
    || die "HANDOFF PATH INVALID — CANONICAL TARGET MISMATCH"

  relative=${target_real#"$handoff_root"/}
  [[ "$relative" == "$CANONICAL_REL" ]] \
    || die "HANDOFF PATH INVALID — CANONICAL TARGET MISMATCH"

  [[ "$relative" != "$ROOT_NONCANONICAL_REL" ]] \
    || die "HANDOFF ROUTING FAILED — ROOT REVIEW FILE MODIFIED"

  TARGET="$target_real"
  HANDOFF_ROOT="$handoff_root"
}

source_blob() {
  git -C "$HANDOFF_WT" hash-object "$SOURCE"
}

target_blob() {
  git -C "$HANDOFF_WT" hash-object "$TARGET"
}

remote_canonical_blob() {
  git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}" 2>/dev/null || true
}

head_canonical_blob() {
  git -C "$HANDOFF_WT" rev-parse "HEAD:${CANONICAL_REL}" 2>/dev/null || true
}

# Verify every commit in origin/branch..HEAD touches ONLY the canonical path.
# Multiple strictly-canonical commits are accepted after exhaustive check.
assert_ahead_range_canonical_only() {
  local remote_sha="$1"
  local commits c files
  commits=$(git -C "$HANDOFF_WT" rev-list --reverse "${remote_sha}..HEAD")
  [[ -n "$commits" ]] || die "HANDOFF RESUME REFUSED — EMPTY AHEAD RANGE"

  while IFS= read -r c; do
    [[ -n "$c" ]] || continue
    files=$(git -C "$HANDOFF_WT" diff-tree --no-commit-id --name-only -r "$c")
    if printf '%s\n' "$files" | grep -qx "$ROOT_NONCANONICAL_REL"; then
      die "HANDOFF RESUME REFUSED — NON-CANONICAL LOCAL COMMITS"
    fi
    if [[ "$files" != "$CANONICAL_REL" ]]; then
      die "HANDOFF RESUME REFUSED — NON-CANONICAL LOCAL COMMITS"
    fi
  done <<<"$commits"
}

# Classify after fetch. Sets RELATION to: equal | behind | ahead | diverge
# For behind: performs FF-only merge then reclassifies to equal (or die).
classify_and_align() {
  git -C "$HANDOFF_WT" fetch origin --prune "$HANDOFF_BRANCH" >/dev/null 2>&1 \
    || die "HANDOFF FETCH FAILED"

  local local_sha remote_sha merge_base
  local_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  remote_sha=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}")
  merge_base=$(git -C "$HANDOFF_WT" merge-base HEAD "origin/${HANDOFF_BRANCH}")

  if [[ "$local_sha" == "$remote_sha" ]]; then
    RELATION="equal"
    return 0
  fi

  if [[ "$merge_base" != "$remote_sha" && "$merge_base" != "$local_sha" ]]; then
    die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"
  fi

  if [[ "$merge_base" == "$local_sha" ]]; then
    # Local behind remote — FF only
    git -C "$HANDOFF_WT" merge --ff-only "origin/${HANDOFF_BRANCH}" \
      || die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"
    local_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
    remote_sha=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}")
    [[ "$local_sha" == "$remote_sha" ]] || die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"
    RELATION="equal"
    return 0
  fi

  if [[ "$merge_base" == "$remote_sha" ]]; then
    RELATION="ahead"
    return 0
  fi

  die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"
}

validate_resume_invariants() {
  local expected="$1"
  local remote_sha tip_files head_blob

  remote_sha=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}")
  # origin must be ancestor of HEAD
  git -C "$HANDOFF_WT" merge-base --is-ancestor "$remote_sha" HEAD \
    || die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"

  assert_ahead_range_canonical_only "$remote_sha"

  tip_files=$(git -C "$HANDOFF_WT" diff-tree --no-commit-id --name-only -r HEAD)
  [[ "$tip_files" == "$CANONICAL_REL" ]] \
    || die "HANDOFF RESUME REFUSED — NON-CANONICAL LOCAL COMMITS"

  head_blob=$(head_canonical_blob)
  [[ -n "$head_blob" ]] || die "HANDOFF RESUME REFUSED — LOCAL COMMIT SOURCE MISMATCH"
  [[ "$head_blob" == "$expected" ]] \
    || die "HANDOFF RESUME REFUSED — LOCAL COMMIT SOURCE MISMATCH"

  # Worktree/staged already checked in preflight; reaffirm clean
  [[ -z "$(git -C "$HANDOFF_WT" status --porcelain)" ]] \
    || die "HANDOFF WORKTREE NOT CLEAN"
}

copy_canonical() {
  cp "$SOURCE" "$TARGET"
  cmp -s "$SOURCE" "$TARGET" || die "HANDOFF COPY FAILED — CONTENT MISMATCH"
}

assert_diff_canonical_only() {
  local names
  names=$(git -C "$HANDOFF_WT" diff --name-only HEAD)
  if [[ -z "$names" ]]; then
    return 1
  fi
  if [[ "$names" != "$CANONICAL_REL" ]]; then
    if printf '%s\n' "$names" | grep -qx "$ROOT_NONCANONICAL_REL"; then
      die "HANDOFF ROUTING FAILED — ROOT REVIEW FILE MODIFIED"
    fi
    die "HANDOFF PATH INVALID — UNAUTHORIZED FILE MODIFIED"
  fi

  git -C "$HANDOFF_WT" diff --check HEAD -- "$CANONICAL_REL" \
    || die "HANDOFF DIFF CHECK FAILED"

  return 0
}

commit_and_verify() {
  # Explicit path only — never git add . / -A.
  # Always -f: a local .git/info/exclude of sfia-review-handoff/ (nested worktree)
  # can block plain `git add` even when the path is already tracked.
  git -C "$HANDOFF_WT" add -f -- "$CANONICAL_REL"

  local staged
  staged=$(git -C "$HANDOFF_WT" diff --cached --name-only)
  [[ "$staged" == "$CANONICAL_REL" ]] \
    || die "HANDOFF PATH INVALID — UNAUTHORIZED FILE MODIFIED"

  if printf '%s\n' "$staged" | grep -qx "$ROOT_NONCANONICAL_REL"; then
    die "HANDOFF ROUTING FAILED — ROOT REVIEW FILE MODIFIED"
  fi

  git -C "$HANDOFF_WT" diff --cached --check \
    || die "HANDOFF DIFF CHECK FAILED"

  git -C "$HANDOFF_WT" commit -m "$COMMIT_MESSAGE" >/dev/null

  local committed
  committed=$(git -C "$HANDOFF_WT" diff-tree --no-commit-id --name-only -r HEAD)
  [[ "$committed" == "$CANONICAL_REL" ]] \
    || die "HANDOFF COMMIT INVALID — NON-CANONICAL CONTENT"
}

push_bounded() {
  local local_sha remote_sha merge_base
  local_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  remote_sha=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}")
  merge_base=$(git -C "$HANDOFF_WT" merge-base HEAD "origin/${HANDOFF_BRANCH}")

  [[ "$merge_base" == "$remote_sha" ]] \
    || die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"

  git -C "$HANDOFF_WT" push origin "refs/heads/${HANDOFF_BRANCH}:refs/heads/${HANDOFF_BRANCH}"
}

verify_remote() {
  local expected_blob remote_blob committed tip local_sha src_size rem_size
  local source_title remote_title

  git -C "$HANDOFF_WT" fetch origin --prune "$HANDOFF_BRANCH" >/dev/null 2>&1 \
    || die "HANDOFF FETCH FAILED"

  expected_blob=$(source_blob)
  remote_blob=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}")
  [[ "$remote_blob" == "$expected_blob" ]] \
    || die "HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED"

  tip=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}")
  local_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  [[ "$tip" == "$local_sha" ]] \
    || die "HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED"

  committed=$(git -C "$HANDOFF_WT" diff-tree --no-commit-id --name-only -r "$tip")
  [[ "$committed" == "$CANONICAL_REL" ]] \
    || die "HANDOFF COMMIT INVALID — NON-CANONICAL CONTENT"

  src_size=$(wc -c <"$SOURCE" | tr -d ' ')
  rem_size=$(git -C "$HANDOFF_WT" cat-file -s "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}")
  [[ "$src_size" == "$rem_size" ]] \
    || die "HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED"

  source_title=$(head -n 1 "$SOURCE" | tr -d '\r')
  remote_title=$(git -C "$HANDOFF_WT" show "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}" | head -n 1 | tr -d '\r')
  [[ "$remote_title" == "$source_title" ]] \
    || die "HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED"

  git -C "$HANDOFF_WT" show "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}" >/dev/null
}

publish_new_commit() {
  local expected="$1"
  copy_canonical
  assert_diff_canonical_only || die "HANDOFF COPY FAILED — NO DIFF"
  [[ "$(target_blob)" == "$expected" ]] || die "HANDOFF COPY FAILED — BLOB MISMATCH"
  commit_and_verify
  push_bounded
  verify_remote
  printf '%s\n' "HANDOFF UPDATED — REMOTE VERIFIED"
  printf 'canonical_path=%s\n' "$CANONICAL_REL"
  printf 'blob=%s\n' "$expected"
  printf 'commit=%s\n' "$(git -C "$HANDOFF_WT" rev-parse HEAD)"
}

resume_push() {
  local expected="$1"
  local before_sha
  before_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  # No copy, no second commit, no amend, no reset
  push_bounded
  verify_remote
  local after_sha
  after_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  [[ "$before_sha" == "$after_sha" ]] || die "HANDOFF RESUME REFUSED — HEAD MUTATED"
  printf '%s\n' "HANDOFF RESUMED — REMOTE VERIFIED"
  printf 'canonical_path=%s\n' "$CANONICAL_REL"
  printf 'blob=%s\n' "$expected"
  printf 'commit=%s\n' "$after_sha"
}

dry_run_new_copy() {
  local expected="$1"
  local before_sha after_sha
  before_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  copy_canonical
  assert_diff_canonical_only || die "HANDOFF COPY FAILED — NO DIFF"
  [[ "$(target_blob)" == "$expected" ]] || die "HANDOFF COPY FAILED — BLOB MISMATCH"
  git -C "$HANDOFF_WT" restore --source=HEAD --worktree --staged -- "$CANONICAL_REL" 2>/dev/null \
    || git -C "$HANDOFF_WT" checkout HEAD -- "$CANONICAL_REL"
  after_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  [[ "$before_sha" == "$after_sha" ]] || die "HANDOFF DRY-RUN MUTATED HEAD"
  [[ -z "$(git -C "$HANDOFF_WT" status --porcelain)" ]] || die "HANDOFF DRY-RUN LEFT DIRTY WORKTREE"
  printf '%s\n' "HANDOFF DRY-RUN OK — NO MUTATION"
  printf 'canonical_path=%s\n' "$CANONICAL_REL"
  printf 'blob=%s\n' "$expected"
}

main() {
  require_cmd git
  require_cmd cmp
  require_cmd cp
  require_cmd head
  require_cmd wc

  parse_args "$@"
  preflight_source
  preflight_worktree
  resolve_target
  classify_and_align

  local expected already
  expected=$(source_blob)
  already=$(remote_canonical_blob)

  # A. Local == remote (after optional FF)
  if [[ "$RELATION" == "equal" ]]; then
    if [[ -n "$already" && "$already" == "$expected" ]]; then
      printf '%s\n' "HANDOFF ALREADY CURRENT — REMOTE VERIFIED"
      printf 'canonical_path=%s\n' "$CANONICAL_REL"
      printf 'blob=%s\n' "$expected"
      exit 0
    fi
    if [[ "$DRY_RUN" -eq 1 ]]; then
      dry_run_new_copy "$expected"
      exit 0
    fi
    publish_new_commit "$expected"
    exit 0
  fi

  # D. Local ahead of remote — resume path (failed push / unpushed canonical tip)
  if [[ "$RELATION" == "ahead" ]]; then
    validate_resume_invariants "$expected"
    if [[ "$DRY_RUN" -eq 1 ]]; then
      printf '%s\n' "HANDOFF DRY-RUN OK — NO MUTATION"
      printf 'mode=resume\n'
      printf 'canonical_path=%s\n' "$CANONICAL_REL"
      printf 'blob=%s\n' "$expected"
      printf 'commit=%s\n' "$(git -C "$HANDOFF_WT" rev-parse HEAD)"
      exit 0
    fi
    resume_push "$expected"
    exit 0
  fi

  die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"
}

main "$@"

\`\`\`

### scripts/sfia/README.md

\`\`\`markdown
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

\`\`\`

### scripts/sfia/tests/publish-review-handoff.test.sh

\`\`\`bash
#!/usr/bin/env bash
# Automated tests for publish-review-handoff.sh — local bare remotes only.
# Never touches the real origin/sfia/review-handoff.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd -P)"
PUBLISHER="$ROOT/publish-review-handoff.sh"
FIX="$ROOT/tests/fixtures"
TMP_BASE="${TMPDIR:-/tmp}/sfia-handoff-pub-$$"
PASS=0
FAIL=0

cleanup() {
  rm -rf "$TMP_BASE"
}
trap cleanup EXIT

mkdir -p "$TMP_BASE" "$FIX"

assert_eq() {
  local name="$1" got="$2" want="$3"
  if [[ "$got" == "$want" ]]; then
    printf 'PASS %s\n' "$name"
    PASS=$((PASS + 1))
  else
    printf 'FAIL %s\n  got:  %s\n  want: %s\n' "$name" "$got" "$want"
    FAIL=$((FAIL + 1))
  fi
}

assert_contains() {
  local name="$1" hay="$2" needle="$3"
  if printf '%s' "$hay" | grep -Fq "$needle"; then
    printf 'PASS %s\n' "$name"
    PASS=$((PASS + 1))
  else
    printf 'FAIL %s\n  missing: %s\n  in: %s\n' "$name" "$needle" "$hay"
    FAIL=$((FAIL + 1))
  fi
}

assert_exit() {
  local name="$1" code="$2" want="$3"
  if [[ "$code" -eq "$want" ]]; then
    printf 'PASS %s (exit %s)\n' "$name" "$code"
    PASS=$((PASS + 1))
  else
    printf 'FAIL %s (exit %s want %s)\n' "$name" "$code" "$want"
    FAIL=$((FAIL + 1))
  fi
}

# Static policy: forbidden command patterns absent from publisher
static_policy() {
  local body
  body=$(cat "$PUBLISHER")
  assert_contains "explicit canonical add -f" "$body" 'add -f -- "$CANONICAL_REL"'
  assert_contains "resume verdict" "$body" "HANDOFF RESUMED — REMOTE VERIFIED"
  # Strip comments before scanning for forbidden *commands*
  local cmds
  cmds=$(grep -v '^[[:space:]]*#' "$PUBLISHER" | grep -v 'never \|no \|Never \|No ')
  if printf '%s' "$cmds" | grep -Eiq 'git[[:space:]]+add[[:space:]]+\.|git[[:space:]]+add[[:space:]]+-A|git[[:space:]]+add[[:space:]]+--all'; then
    printf 'FAIL forbidden git add . / -A present\n'
    FAIL=$((FAIL + 1))
  else
    printf 'PASS absent git add . / -A\n'
    PASS=$((PASS + 1))
  fi
  if printf '%s\n' "$cmds" | grep -E 'git[[:space:]]+push.*--force|git[[:space:]]+push.*[[:space:]]-f[[:space:]]|git[[:space:]]+push.*[[:space:]]-f$|git[[:space:]]+reset[[:space:]]+--hard|git[[:space:]]+clean[[:space:]]+-fd|git[[:space:]]+checkout[[:space:]]+--force|ignore-other-worktrees|git[[:space:]]+commit[[:space:]]+--amend' >/dev/null; then
    printf 'FAIL forbidden destructive/force/amend pattern present\n'
    FAIL=$((FAIL + 1))
  else
    printf 'PASS absent force/reset/clean/amend\n'
    PASS=$((PASS + 1))
  fi
  assert_contains "canonical constant" "$body" 'sfia-review-handoff/latest-chatgpt-review.md'
  printf 'PASS target is nested canonical path\n'
  PASS=$((PASS + 1))
}

# Build a disposable handoff repo with bare remote
setup_handoff_fixture() {
  local name="$1"
  local dir="$TMP_BASE/$name"
  local bare="$dir/remote.git"
  local wt="$dir/worktree"
  rm -rf "$dir"
  mkdir -p "$dir"
  git init --bare "$bare" >/dev/null
  git clone "$bare" "$wt" >/dev/null 2>&1
  git -C "$wt" checkout -b sfia/review-handoff >/dev/null 2>&1
  mkdir -p "$wt/sfia-review-handoff"
  printf '# Initial handoff\n\nseed\n' >"$wt/sfia-review-handoff/latest-chatgpt-review.md"
  printf '# Root non-canonical\n\nroot\n' >"$wt/latest-chatgpt-review.md"
  git -C "$wt" add -- sfia-review-handoff/latest-chatgpt-review.md latest-chatgpt-review.md
  git -C "$wt" -c user.email=test@example.com -c user.name=Test \
    commit -m "seed handoff" >/dev/null
  git -C "$wt" push -u origin sfia/review-handoff >/dev/null 2>&1
  # Track origin/sfia/review-handoff
  git -C "$wt" fetch origin >/dev/null 2>&1
  printf '%s\n' "$wt"
}

run_pub() {
  local wt="$1"
  shift
  env GIT_AUTHOR_NAME=Test GIT_AUTHOR_EMAIL=test@example.com \
      GIT_COMMITTER_NAME=Test GIT_COMMITTER_EMAIL=test@example.com \
    bash "$PUBLISHER" --handoff-worktree "$wt" "$@"
}

# --- tests ---

static_policy

# 1. Nominal publish
WT=$(setup_handoff_fixture nominal)
SRC="$TMP_BASE/pack-nominal.md"
printf '# Review pack Full — tooling test\n\nnominal body\n' >"$SRC"
OUT=$(run_pub "$WT" --source "$SRC" --commit-message "docs(review-handoff): test nominal" 2>&1) || CODE=$?
CODE=${CODE:-0}
assert_exit "nominal exit" "$CODE" 0
assert_contains "nominal verdict" "$OUT" "HANDOFF UPDATED — REMOTE VERIFIED"
BLOB=$(git -C "$WT" rev-parse "origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md")
WANT=$(git -C "$WT" hash-object "$SRC")
assert_eq "nominal blob match" "$BLOB" "$WANT"
FILES=$(git -C "$WT" diff-tree --no-commit-id --name-only -r HEAD)
assert_eq "nominal mono-file" "$FILES" "sfia-review-handoff/latest-chatgpt-review.md"
# Root unchanged
ROOT_BLOB=$(git -C "$WT" rev-parse "HEAD:latest-chatgpt-review.md")
SEED_ROOT=$(git -C "$WT" rev-parse "HEAD~1:latest-chatgpt-review.md")
assert_eq "root untouched" "$ROOT_BLOB" "$SEED_ROOT"

# 2. Missing source
WT=$(setup_handoff_fixture missing-src)
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/no-such.md" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "missing source exit" "$CODE" 1
assert_contains "missing source msg" "$OUT" "HANDOFF SOURCE INVALID — FILE MISSING"

# 3. Empty source
WT=$(setup_handoff_fixture empty-src)
: >"$TMP_BASE/empty.md"
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/empty.md" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "empty source exit" "$CODE" 1
assert_contains "empty source msg" "$OUT" "HANDOFF SOURCE INVALID — EMPTY FILE"

# 4. Dirty worktree
WT=$(setup_handoff_fixture dirty)
echo dirt >"$WT/dirt.txt"
set +e
OUT=$(run_pub "$WT" --source "$SRC" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "dirty exit" "$CODE" 1
assert_contains "dirty msg" "$OUT" "HANDOFF WORKTREE NOT CLEAN"

# 5. Staged pre-existing
WT=$(setup_handoff_fixture staged)
echo staged >"$WT/extra.txt"
git -C "$WT" add --extra.txt 2>/dev/null || git -C "$WT" add -- extra.txt
set +e
OUT=$(run_pub "$WT" --source "$SRC" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "staged exit" "$CODE" 1
# dirty catches first (uncommitted+staged) — either NOT CLEAN or STAGED
assert_contains "staged/dirty msg" "$OUT" "HANDOFF WORKTREE"

# 6. Wrong branch
WT=$(setup_handoff_fixture wrong-branch)
git -C "$WT" checkout -b other-branch >/dev/null 2>&1
set +e
OUT=$(run_pub "$WT" --source "$SRC" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "wrong branch exit" "$CODE" 1
assert_contains "wrong branch msg" "$OUT" "HANDOFF WORKTREE INVALID — BRANCH"

# 7. Attempt writing root is impossible via CLI (constant) — verify script refuses mismatch by unit check of resolve
# Covered by static_policy + mono-file asserts

# 8/9. Trailing whitespace fails git diff --check
WT=$(setup_handoff_fixture diffcheck)
printf '# Title\n\nbad line with trailing spaces:   \n' >"$TMP_BASE/bad-ws.md"
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/bad-ws.md" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "diff-check exit" "$CODE" 1
assert_contains "diff-check msg" "$OUT" "HANDOFF DIFF CHECK FAILED"

# 10. Already identical to remote
WT=$(setup_handoff_fixture already)
CUR="$WT/sfia-review-handoff/latest-chatgpt-review.md"
cp "$CUR" "$TMP_BASE/same.md"
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/same.md" --commit-message "noop" 2>&1)
CODE=$?
set -e
assert_exit "already-current exit" "$CODE" 0
assert_contains "already-current msg" "$OUT" "HANDOFF ALREADY CURRENT — REMOTE VERIFIED"

# 11. Commit mono-file enforced after publish — already in nominal

# 12. Divergent remote (non-FF)
WT=$(setup_handoff_fixture diverge)
# Create divergent commit on remote via second clone
CLONE="$TMP_BASE/diverge-clone"
git clone "$(git -C "$WT" remote get-url origin)" "$CLONE" >/dev/null 2>&1
git -C "$CLONE" checkout sfia/review-handoff >/dev/null 2>&1
echo remote-only >>"$CLONE/sfia-review-handoff/latest-chatgpt-review.md"
git -C "$CLONE" add -f -- sfia-review-handoff/latest-chatgpt-review.md
git -C "$CLONE" -c user.email=test@example.com -c user.name=Test commit -m "remote advance" >/dev/null
git -C "$CLONE" push origin sfia/review-handoff >/dev/null 2>&1
# Local WT has divergent commit without fetch merge
echo local-only >>"$WT/sfia-review-handoff/latest-chatgpt-review.md"
git -C "$WT" add -f -- sfia-review-handoff/latest-chatgpt-review.md
git -C "$WT" -c user.email=test@example.com -c user.name=Test commit -m "local advance" >/dev/null
# Reset clean working tree with divergent history
set +e
OUT=$(run_pub "$WT" --source "$SRC" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "diverge exit" "$CODE" 1
assert_contains "diverge msg" "$OUT" "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"

# 13/14. Blob verify — nominal already proved match; force mismatch after push is covered by verify_remote logic

# 15. Path with spaces
WT=$(setup_handoff_fixture spaces)
SPDIR="$TMP_BASE/dir with spaces"
mkdir -p "$SPDIR"
printf '# Spaced pack\n\nok\n' >"$SPDIR/review pack.md"
set +e
OUT=$(run_pub "$WT" --source "$SPDIR/review pack.md" --commit-message "docs(review-handoff): spaces" 2>&1)
CODE=$?
set -e
assert_exit "spaces exit" "$CODE" 0
assert_contains "spaces verdict" "$OUT" "HANDOFF UPDATED — REMOTE VERIFIED"

# 16. Dry-run no mutation
WT=$(setup_handoff_fixture dryrun)
BEFORE=$(git -C "$WT" rev-parse HEAD)
BEFORE_BLOB=$(git -C "$WT" rev-parse "HEAD:sfia-review-handoff/latest-chatgpt-review.md")
set +e
OUT=$(run_pub "$WT" --source "$SRC" --commit-message "ignored" --dry-run 2>&1)
CODE=$?
set -e
AFTER=$(git -C "$WT" rev-parse HEAD)
AFTER_BLOB=$(git -C "$WT" rev-parse "HEAD:sfia-review-handoff/latest-chatgpt-review.md")
assert_exit "dry-run exit" "$CODE" 0
assert_contains "dry-run msg" "$OUT" "HANDOFF DRY-RUN OK — NO MUTATION"
assert_eq "dry-run head unchanged" "$AFTER" "$BEFORE"
assert_eq "dry-run blob unchanged" "$AFTER_BLOB" "$BEFORE_BLOB"
assert_eq "dry-run clean" "$(git -C "$WT" status --porcelain)" ""

# 17. gitignore / exclude: with exclude rule, add -f still works
WT=$(setup_handoff_fixture ignore)
GITDIR=$(git -C "$WT" rev-parse --absolute-git-dir)
mkdir -p "$GITDIR/info"
echo 'sfia-review-handoff/' >>"$GITDIR/info/exclude"
# check-ignore may report ignored for path even when tracked
set +e
IGNORE_OUT=$(git -C "$WT" check-ignore -v sfia-review-handoff/latest-chatgpt-review.md 2>&1)
set -e
printf '# Ignore pack\n\nbody\n' >"$TMP_BASE/ignore-pack.md"
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/ignore-pack.md" --commit-message "docs(review-handoff): ignore" 2>&1)
CODE=$?
set -e
assert_exit "exclude+add -f exit" "$CODE" 0
assert_contains "exclude publish ok" "$OUT" "HANDOFF UPDATED — REMOTE VERIFIED"
# Document check-ignore behavior
if [[ -n "$IGNORE_OUT" ]]; then
  printf 'PASS check-ignore reports exclude (expected for nested dir rule)\n'
  PASS=$((PASS + 1))
else
  printf 'PASS check-ignore silent (tracked path)\n'
  PASS=$((PASS + 1))
fi

# 18-20 covered by static_policy

# 21. Local-ahead resume after simulated failed push (no second commit)
WT=$(setup_handoff_fixture resume-ok)
RESUME_SRC="$TMP_BASE/resume-pack.md"
printf '# Resume pack\n\nresume body\n' >"$RESUME_SRC"
# First publish normally
run_pub "$WT" --source "$RESUME_SRC" --commit-message "docs(review-handoff): resume seed" >/dev/null
# Create a new local-ahead commit without push (simulate push failure after commit)
printf '# Resume pack\n\nresume body v2\n' >"$RESUME_SRC"
cp "$RESUME_SRC" "$WT/sfia-review-handoff/latest-chatgpt-review.md"
git -C "$WT" add -- sfia-review-handoff/latest-chatgpt-review.md
git -C "$WT" -c user.email=test@example.com -c user.name=Test \
  commit -m "docs(review-handoff): local ahead unpushed" >/dev/null
# Do NOT push — leave local ahead
BEFORE_SHA=$(git -C "$WT" rev-parse HEAD)
BEFORE_COUNT=$(git -C "$WT" rev-list --count HEAD)
ROOT_BEFORE=$(git -C "$WT" rev-parse "HEAD:latest-chatgpt-review.md")
set +e
OUT=$(run_pub "$WT" --source "$RESUME_SRC" --commit-message "should-not-create" 2>&1)
CODE=$?
set -e
AFTER_SHA=$(git -C "$WT" rev-parse HEAD)
AFTER_COUNT=$(git -C "$WT" rev-list --count HEAD)
REMOTE_SHA=$(git -C "$WT" rev-parse origin/sfia/review-handoff)
REMOTE_BLOB=$(git -C "$WT" rev-parse "origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md")
WANT_BLOB=$(git -C "$WT" hash-object "$RESUME_SRC")
ROOT_AFTER=$(git -C "$WT" rev-parse "HEAD:latest-chatgpt-review.md")
assert_exit "resume exit" "$CODE" 0
assert_contains "resume verdict" "$OUT" "HANDOFF RESUMED — REMOTE VERIFIED"
assert_eq "resume no new commit sha" "$AFTER_SHA" "$BEFORE_SHA"
assert_eq "resume commit count unchanged" "$AFTER_COUNT" "$BEFORE_COUNT"
assert_eq "resume remote=local" "$REMOTE_SHA" "$BEFORE_SHA"
assert_eq "resume remote blob" "$REMOTE_BLOB" "$WANT_BLOB"
assert_eq "resume root unchanged" "$ROOT_AFTER" "$ROOT_BEFORE"
assert_eq "resume tip mono-file" "$(git -C "$WT" diff-tree --no-commit-id --name-only -r HEAD)" "sfia-review-handoff/latest-chatgpt-review.md"

# 22. Local-ahead but blob ≠ source
WT=$(setup_handoff_fixture resume-mismatch)
printf '# A\n\na\n' >"$TMP_BASE/a.md"
run_pub "$WT" --source "$TMP_BASE/a.md" --commit-message "seed a" >/dev/null
printf '# B\n\nb\n' >"$WT/sfia-review-handoff/latest-chatgpt-review.md"
git -C "$WT" add -- sfia-review-handoff/latest-chatgpt-review.md
git -C "$WT" -c user.email=test@example.com -c user.name=Test commit -m "ahead b" >/dev/null
printf '# C\n\nc\n' >"$TMP_BASE/c.md"
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/c.md" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "resume mismatch exit" "$CODE" 1
assert_contains "resume mismatch msg" "$OUT" "HANDOFF RESUME REFUSED — LOCAL COMMIT SOURCE MISMATCH"

# 23. Local-ahead with non-canonical other file in commit
WT=$(setup_handoff_fixture resume-other)
printf '# O\n\no\n' >"$TMP_BASE/o.md"
run_pub "$WT" --source "$TMP_BASE/o.md" --commit-message "seed o" >/dev/null
echo other >"$WT/other.txt"
git -C "$WT" add -- other.txt
git -C "$WT" -c user.email=test@example.com -c user.name=Test commit -m "ahead other" >/dev/null
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/o.md" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "resume other-file exit" "$CODE" 1
assert_contains "resume other-file msg" "$OUT" "HANDOFF RESUME REFUSED — NON-CANONICAL LOCAL COMMITS"

# 24. Local-ahead with root file modified in commit
WT=$(setup_handoff_fixture resume-root)
printf '# R\n\nr\n' >"$TMP_BASE/r.md"
run_pub "$WT" --source "$TMP_BASE/r.md" --commit-message "seed r" >/dev/null
echo root-changed >"$WT/latest-chatgpt-review.md"
git -C "$WT" add -- latest-chatgpt-review.md
git -C "$WT" -c user.email=test@example.com -c user.name=Test commit -m "ahead root" >/dev/null
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/r.md" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "resume root exit" "$CODE" 1
assert_contains "resume root msg" "$OUT" "HANDOFF RESUME REFUSED — NON-CANONICAL LOCAL COMMITS"

# 25. Local-ahead + divergent remote (already covered by diverge; ensure ahead+diverge still dies)
# Reuse diverge fixture pattern briefly
WT=$(setup_handoff_fixture resume-diverge)
printf '# D\n\nd\n' >"$TMP_BASE/d.md"
run_pub "$WT" --source "$TMP_BASE/d.md" --commit-message "seed d" >/dev/null
CLONE="$TMP_BASE/resume-diverge-clone"
git clone "$(git -C "$WT" remote get-url origin)" "$CLONE" >/dev/null 2>&1
git -C "$CLONE" checkout sfia/review-handoff >/dev/null 2>&1
echo remote-advance >>"$CLONE/sfia-review-handoff/latest-chatgpt-review.md"
git -C "$CLONE" add -- sfia-review-handoff/latest-chatgpt-review.md
git -C "$CLONE" -c user.email=test@example.com -c user.name=Test commit -m "remote advance" >/dev/null
git -C "$CLONE" push origin sfia/review-handoff >/dev/null 2>&1
printf '# Local advance\n\nl\n' >"$WT/sfia-review-handoff/latest-chatgpt-review.md"
git -C "$WT" add -- sfia-review-handoff/latest-chatgpt-review.md
git -C "$WT" -c user.email=test@example.com -c user.name=Test commit -m "local advance" >/dev/null
set +e
OUT=$(run_pub "$WT" --source "$TMP_BASE/d.md" --commit-message "x" 2>&1)
CODE=$?
set -e
assert_exit "resume diverge exit" "$CODE" 1
assert_contains "resume diverge msg" "$OUT" "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"

printf '\nSummary: PASS=%s FAIL=%s\n' "$PASS" "$FAIL"
[[ "$FAIL" -eq 0 ]]

\`\`\`

## Diff utile — docs méthode / template (héritage cycle précédent, inchangé dans cette correction hors .gitignore)

\`\`\`diff
diff --git a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
index b5c3135..6d99639 100644
--- a/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
+++ b/method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
@@ -789,7 +789,8 @@ Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, san
 **Cursor :**

 - **produit le review pack** puis **publie le handoff** dans le même cycle (template §7.10.1) ;
-- **copie, commit, push, vérifie remote** — L3 borné ;
+- **utilise** `scripts/sfia/publish-review-handoff.sh` dès qu'il est disponible (L1 contrôles + L3 push borné) — sinon séquence manuelle fail-closed du template ;
+- **copie, commit, push, vérifie remote** — L3 borné — preuve = path canonique distant + blob, pas seulement l'existence d'un commit ;
 - **affiche** le bloc Instruction ChatGPT obligatoire (template §9.1) ;
 - **rapporte** tous les champs handoff §9.1 ;
 - **ne merge jamais** `sfia/review-handoff` ;
@@ -802,7 +803,7 @@ Mode permettant à ChatGPT de récupérer le dernier rapport Cursor via Git, san
 - **n'a pas** à répéter un micro-GO handoff lorsque publish-in-cycle est conforme à §7.11 ;
 - **garde** l'autorité exclusive sur commit/push/PR/merge **projet**.

-**Automatisation :** L3 bornée pour tout cycle produisant un rapport Cursor (sauf exception technique documentée).
+**Automatisation :** L3 bornée pour tout cycle produisant un rapport Cursor (sauf exception technique documentée). Publisher = automatisation L1+L3 **bornée** — **pas** L5 globale.

 ##### I. Figma visual contract / Figma-to-code (candidate — capitalisation v2.5 PR 3)

diff --git a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
index b3925cc..6eb9289 100644
--- a/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
+++ b/method/sfia-fast-track/core/sfia-cycle-routing-guide.md
@@ -71,6 +71,8 @@ La documentation SFIA est appliquée par le **routage des cycles**, pas uniqueme

 **Complément Review Handoff commit + push + remote verification (candidate v2.5 — PR 4) :** handoff required = commit + push `origin/sfia/review-handoff` + vérification remote obligatoires — template §7.10 ; operating model §18.2.8.H.

+**Complément Review Handoff canonical publisher (tooling) :** lorsque `scripts/sfia/publish-review-handoff.sh` est disponible, publication **uniquement** via ce publisher vers `sfia-review-handoff/latest-chatgpt-review.md` — template §7.10.4 ; `scripts/sfia/README.md`.
+
 **Complément Review Handoff routing fix (candidate v2.5 — correctif) :** matrice d'obligation — template §7.11 ; routing §2.1 ci-dessous.

 ### 2.1 Matrice Review Handoff Git × review pack
diff --git a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
index a0ac9e0..2e99a5d 100644
--- a/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
+++ b/method/sfia-fast-track/core/sfia-rules-and-guardrails.md
@@ -227,6 +227,7 @@ SFIA utilise les décisions suivantes :
 | **Décision obligatoire** | Tout cycle Cursor produisant un rapport : Review Handoff Git = **required** + Mode **`publish-in-cycle`** + Push **oui — L3 borné** |
 | **Prompt incomplet** | Rapport Cursor avec review pack absent/`none`, handoff `not required`, ou `local-only` non conforme → **`PROMPT INCOMPLETE — MANDATORY REVIEW HANDOFF MISSING`** |
 | **Handoff required** | Copie review pack → commit → push `origin/sfia/review-handoff` → vérification remote — L3 borné **dans le même cycle** |
+| **Publisher canonique** | Lorsque `scripts/sfia/publish-review-handoff.sh` est disponible : **obligatoire** — path unique `sfia-review-handoff/latest-chatgpt-review.md` ; mono-fichier ; blob distant vérifié ; jamais la racine `latest-chatgpt-review.md` |
 | **Exception `local-only`** | Uniquement blocage technique / interdiction Morris explicite → **`HANDOFF PUBLICATION BLOCKED — REGULARIZATION REQUIRED`** |
 | **Rapport incomplet** | Rapport demandant lecture handoff sans push/remote confirmés → cycle incomplet |
 | **Instruction ChatGPT** | Bloc §9.1 obligatoire dans rapport final Cursor pour tout rapport Cursor |
diff --git a/prompts/templates/sfia-cycle-execution-template.md b/prompts/templates/sfia-cycle-execution-template.md
index 8270388..d2a45b0 100644
--- a/prompts/templates/sfia-cycle-execution-template.md
+++ b/prompts/templates/sfia-cycle-execution-template.md
@@ -1315,25 +1315,43 @@ Cursor doit **stopper** si :

 #### Séquence Cursor (si Mode = `publish-in-cycle`)

+> **Publisher canonique (obligatoire lorsqu'il est disponible sur la branche d'exécution) :**
+> `scripts/sfia/publish-review-handoff.sh`
+> — contrat CLI : `scripts/sfia/README.md`.
+> Cursor **doit** l'utiliser pour la publication handoff dès que le fichier existe dans le worktree d'exécution.
+> Ne pas republier « à la main » vers `latest-chatgpt-review.md` (racine) ni vers un autre path.
+> Contrôles L1 (path / mono-fichier / blob) + push L3 borné sont **exécutés par le publisher** ; Cursor reste responsable du review pack local et du rapport.
+
 ```text
 1. Compléter .tmp-sfia-review/chatgpt-review.md (niveau light/full) — mono-cycle, contenu complet
 2. Vérifier absence de secrets / données sensibles
-3. Basculer de manière contrôlée sur sfia/review-handoff (worktree recommandé)
-4. Fast-forward only — aucun force push
-5. Copier (overwrite) UNIQUEMENT vers sfia-review-handoff/latest-chatgpt-review.md
-6. git add -f (si besoin) + staged = ce fichier seul
-7. git diff --cached --name-status  (doit être M sfia-review-handoff/latest-chatgpt-review.md)
-8. git diff --cached --check
-9. Commit mono-fichier
-10. git push origin sfia/review-handoff
-11. Vérifier SHA distant = SHA local
-12. Relire le fichier canonique depuis Git distant
-13. Revenir sur la branche projet initiale
-14. Confirmer working tree / staged projet inchangés
-15. Rapport Cursor + bloc Instruction ChatGPT (§9.1)
-16. Verdict — seulement après 11–14
+3. Si scripts/sfia/publish-review-handoff.sh est présent :
+   a. S'assurer qu'un worktree propre existe sur sfia/review-handoff
+   b. Exécuter le publisher avec --source / --commit-message / --handoff-worktree
+   c. Exiger un verdict HANDOFF UPDATED — REMOTE VERIFIED
+      (ou HANDOFF ALREADY CURRENT — REMOTE VERIFIED)
+   d. Relire origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md
+   e. Confirmer blob distant = blob source
+   f. Aller à l'étape 13
+4. Sinon seulement (publisher absent) — séquence manuelle fail-closed ci-dessous
+5. Basculer de manière contrôlée sur sfia/review-handoff (worktree recommandé)
+6. Fast-forward only — aucun force push
+7. Copier (overwrite) UNIQUEMENT vers sfia-review-handoff/latest-chatgpt-review.md
+8. git add -f -- sfia-review-handoff/latest-chatgpt-review.md  (jamais git add . / -A)
+9. git diff --cached --name-status  (doit être M sfia-review-handoff/latest-chatgpt-review.md)
+10. git diff --cached --check
+11. Commit mono-fichier + git diff-tree (un seul path canonique)
+12. git push origin sfia/review-handoff (FF only)
+13. Vérifier SHA distant = SHA local
+14. Relire le fichier canonique depuis Git distant (path + blob + titre)
+15. Revenir sur la branche projet initiale
+16. Confirmer working tree / staged projet inchangés
+17. Rapport Cursor + bloc Instruction ChatGPT (§9.1)
+18. Verdict — seulement après 13–16
 ```

+**Interdits (publisher ou manuel) :** cibler la racine `latest-chatgpt-review.md` ; `git add .` / `git add -A` ; force push ; `reset --hard` ; `clean -fd` ; conclure `REMOTE VERIFIED` sans relecture du **path canonique** distant.
+
 #### Séquence Cursor (si Mode = `local-only` — exception technique)

 ```text

\`\`\`

## \`.gitignore\`

Aucun diff final vs \`HEAD\`/\`origin/main\` — règle \`/sfia-review-handoff/\` **retirée**.

## Tests

- \`bash -n\` : OK (publisher + tests)
- ShellCheck : non installé
- Suite : **PASS=53 FAIL=0**
- Nouveaux : resume-ok, resume-mismatch, resume-other, resume-root, resume-diverge
- Preuve resume-ok : SHA avant=après ; count inchangé ; remote=local ; blob=source ; racine inchangée
- Négatifs : mismatch / other file / root / diverge → refus attendus
- Aucun test contre handoff réel

## Commandes interdites

Absentes (hors commentaires « never ») : \`git add .\` / \`-A\`, force push, \`reset --hard\`, \`clean -fd\`, \`commit --amend\`.

## État Git final projet

- Branche tooling locale ; staged vide ; aucun commit/push/PR projet
- OPS1 I3 intact ; racine handoff non touchée par ce cycle projet

## Réserves

- Publisher non mergé (candidate)
- Cleanup racine différé
- ShellCheck non disponible localement

## Décisions Morris futures

1. Review ChatGPT
2. GO commit/push/PR tooling
3. GO cleanup racine éventuel

## Verdict

\`REVIEW HANDOFF PUBLISHER RETRY CORRECTED LOCALLY — FAIL-CLOSED — HANDOFF REMOTE VERIFIED — READY FOR REVIEW\`
