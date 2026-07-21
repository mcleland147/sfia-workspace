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
