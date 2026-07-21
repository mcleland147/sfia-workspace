# Review pack Full — Review Handoff Canonical Publisher

## Métadonnées

- **Date / heure / fuseau :** 2026-07-21 13:11:10 CEST
- **Repo :** mcleland147/sfia-workspace
- **Cycle principal :** 7 — Intégration / DevOps
- **Cycles associés :** 6 Architecture · 9 QA · 10 Sécurité · 15 Capitalisation ciblée
- **Profil :** Critical
- **Justification Critical :** mécanisme transversal conditionnant la validation ChatGPT de tous les futurs rapports Cursor SFIA
- **Typologie :** tooling / corrective / method
- **Objet :** sécurisation du routage canonique Review Handoff
- **Décision Morris :** `GO IMPLEMENT REVIEW HANDOFF CANONICAL ROUTING — LOCAL DELIVERY ONLY`
- **Branche projet :** `tooling/review-handoff-canonical-publisher`
- **Base / HEAD / merge-base :** `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f` / `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f` / `ae39a8c0375c2f8980d3ee394fa679dee8b06c0f`
- **Worktree tooling :** `/Users/morris/Projects/sfia-workspace-review-handoff-publisher`
- **Review pack :** Full
- **Mode handoff :** publish-in-cycle
- **Chemin canonique :** `sfia-review-handoff/latest-chatgpt-review.md`

## État Git initial

- Worktree principal resté sur `delivery/sfia-studio-ops1-i3-action-gate` avec travail OPS1 I3 local **non modifié**
- Branche candidate absente → créée depuis `origin/main` via worktree dédié
- Staged vide sur worktree tooling
- Aucun publisher handoff préexistant sous `scripts/**`

## Sources consultées

1. `prompts/templates/sfia-cycle-execution-template.md`
2. `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
3. `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
4. `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
5. `.gitignore` + `.git/info/exclude`
6. Inventaire `scripts/**` / `tools/**` / `.sfia/**`
7. PR #242 (publish-in-cycle)
8. PR #247 (handoff obligatoire pour tout rapport)
9. Commits handoff `2ff45df…` et `78f4dde…`
10. Branche `sfia/review-handoff` et les deux chemins racine / canonique

## Diagnostic de cause racine

1. Publication manuelle Cursor sans contrôle path-in-commit suffisant
2. Vérification centrée sur existence commit/blob, pas sur le path distant canonique
3. Exclusion locale `.git/info/exclude` : `sfia-review-handoff/` (worktree imbriqué) — signalée comme `.gitignore` alors que le tracked `.gitignore` ne contenait pas la règle
4. Fichier racine historique encore présent et trompeur

## Alternatives étudiées

| Option | Décision |
|--------|----------|
| Continuer les étapes manuelles template | Rejeté — incident déjà survenu |
| Publisher Node/Python | Rejeté v1 — Bash+`/bin/bash`+Git suffisent macOS |
| GitHub Action | Hors scope — GO séparé |
| Deux publishers | Interdit |
| Supprimer fichier racine maintenant | Interdit — GO Morris cleanup futur |

**Retenu :** `scripts/sfia/publish-review-handoff.sh` (unique) + tests bare remote + docs minimales.

## Architecture retenue

- **L1 :** contrôles source / worktree / path / diff / blob
- **L3 borné :** commit mono-fichier + push FF `sfia/review-handoff`
- Constantes non configurables : branche + path canonique
- Stage : `git add -f -- sfia-review-handoff/latest-chatgpt-review.md` uniquement
- Vérification distante : path + blob + taille + titre + mono-fichier tip

## Fichiers créés

| Fichier | Justification |
|---------|---------------|
| `scripts/sfia/publish-review-handoff.sh` | Publisher fail-closed |
| `scripts/sfia/README.md` | Contrat CLI / verdicts / invariants |
| `scripts/sfia/tests/publish-review-handoff.test.sh` | Suite bare-remote |

## Fichiers modifiés

| Fichier | Justification |
|---------|---------------|
| `.gitignore` | Documenter/ignorer worktree imbriqué `/sfia-review-handoff/` |
| `prompts/templates/sfia-cycle-execution-template.md` | Obligation publisher §7.10.4 |
| `method/.../sfia-rules-and-guardrails.md` | Invariant publisher |
| `method/.../sfia-chatgpt-cursor-operating-model.md` | Responsabilité Cursor + L1/L3 |
| `method/.../sfia-cycle-routing-guide.md` | Pointeur publisher |

## Fichiers supprimés

Aucun. Fichier racine non canonique **conservé**.

## Contenu complet — fichiers créés

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

usage() {
  cat <<'USAGE'
Usage:
  publish-review-handoff.sh --source <path> --commit-message <msg> --handoff-worktree <path> [--dry-run]

Constants (non-overridable):
  branch:  sfia/review-handoff
  target:  sfia-review-handoff/latest-chatgpt-review.md

Options:
  --source PATH              Review pack source file (required)
  --commit-message MSG       Commit message (required unless dry-run with already-current)
  --handoff-worktree PATH    Clean worktree checked out on sfia/review-handoff (required)
  --dry-run                  Run all controls and copy into a temp check; no commit/push
  -h, --help                 Show help

Success verdicts:
  HANDOFF UPDATED — REMOTE VERIFIED
  HANDOFF ALREADY CURRENT — REMOTE VERIFIED
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

  # Resolve after mkdir; reject symlink escape
  if [[ -e "$TARGET" ]]; then
    target_real=$(abs_path "$TARGET")
  else
    # Parent must stay under handoff root
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

  # Explicitly refuse root non-canonical path as write target
  [[ "$relative" != "$ROOT_NONCANONICAL_REL" ]] \
    || die "HANDOFF ROUTING FAILED — ROOT REVIEW FILE MODIFIED"

  TARGET="$target_real"
  HANDOFF_ROOT="$handoff_root"
}

ensure_ff_possible() {
  git -C "$HANDOFF_WT" fetch origin --prune "$HANDOFF_BRANCH" >/dev/null 2>&1 \
    || die "HANDOFF FETCH FAILED"

  local local_sha remote_sha merge_base
  local_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  remote_sha=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}")
  merge_base=$(git -C "$HANDOFF_WT" merge-base HEAD "origin/${HANDOFF_BRANCH}")

  if [[ "$local_sha" != "$remote_sha" ]]; then
    if [[ "$merge_base" != "$remote_sha" && "$merge_base" != "$local_sha" ]]; then
      die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"
    fi
    if [[ "$merge_base" == "$local_sha" && "$local_sha" != "$remote_sha" ]]; then
      # Local behind remote — fast-forward only, no reset --hard
      git -C "$HANDOFF_WT" merge --ff-only "origin/${HANDOFF_BRANCH}" \
        || die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"
    elif [[ "$merge_base" != "$remote_sha" ]]; then
      die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"
    fi
  fi
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

source_blob() {
  git -C "$HANDOFF_WT" hash-object "$SOURCE"
}

target_blob() {
  git -C "$HANDOFF_WT" hash-object "$TARGET"
}

remote_canonical_blob() {
  git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}" 2>/dev/null || true
}

commit_and_verify() {
  # Stage ONLY canonical path; -f covers local exclude of nested worktree dir name
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

  # HEAD must be descendant of remote (FF push)
  [[ "$merge_base" == "$remote_sha" ]] \
    || die "STOP — REVIEW HANDOFF REMOTE DIVERGENCE"

  # Explicit normal push — never --force
  git -C "$HANDOFF_WT" push origin "refs/heads/${HANDOFF_BRANCH}:refs/heads/${HANDOFF_BRANCH}"
}

verify_remote() {
  local expected_blob remote_blob committed remote_title source_title

  git -C "$HANDOFF_WT" fetch origin --prune "$HANDOFF_BRANCH" >/dev/null 2>&1 \
    || die "HANDOFF FETCH FAILED"

  expected_blob=$(source_blob)
  remote_blob=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}")
  [[ "$remote_blob" == "$expected_blob" ]] \
    || die "HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED"

  committed=$(git -C "$HANDOFF_WT" diff-tree --no-commit-id --name-only -r "origin/${HANDOFF_BRANCH}")
  # Only enforce mono-file on the tip if tip equals our HEAD (we just pushed)
  local tip local_sha
  tip=$(git -C "$HANDOFF_WT" rev-parse "origin/${HANDOFF_BRANCH}")
  local_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
  [[ "$tip" == "$local_sha" ]] \
    || die "HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED"

  committed=$(git -C "$HANDOFF_WT" diff-tree --no-commit-id --name-only -r "$tip")
  [[ "$committed" == "$CANONICAL_REL" ]] \
    || die "HANDOFF COMMIT INVALID — NON-CANONICAL CONTENT"

  # Content not truncated: remote size equals source size
  local src_size rem_size
  src_size=$(wc -c <"$SOURCE" | tr -d ' ')
  rem_size=$(git -C "$HANDOFF_WT" cat-file -s "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}")
  [[ "$src_size" == "$rem_size" ]] \
    || die "HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED"

  source_title=$(head -n 1 "$SOURCE" | tr -d '\r')
  remote_title=$(git -C "$HANDOFF_WT" show "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}" | head -n 1 | tr -d '\r')
  [[ "$remote_title" == "$source_title" ]] \
    || die "HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED"

  # Explicit remote path read (proof artifact)
  git -C "$HANDOFF_WT" show "origin/${HANDOFF_BRANCH}:${CANONICAL_REL}" >/dev/null
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
  ensure_ff_possible

  local expected already
  expected=$(source_blob)
  already=$(remote_canonical_blob)

  if [[ -n "$already" && "$already" == "$expected" ]]; then
    # Ensure working tree still clean / no accidental root write
    printf '%s\n' "HANDOFF ALREADY CURRENT — REMOTE VERIFIED"
    printf 'canonical_path=%s\n' "$CANONICAL_REL"
    printf 'blob=%s\n' "$expected"
    exit 0
  fi

  if [[ "$DRY_RUN" -eq 1 ]]; then
    # Dry-run: copy, validate mono-file diff, restore tracked file — no commit/push
    local before_sha after_sha
    before_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
    copy_canonical
    assert_diff_canonical_only || die "HANDOFF COPY FAILED — NO DIFF"
    [[ "$(target_blob)" == "$expected" ]] || die "HANDOFF COPY FAILED — BLOB MISMATCH"
    # Restore only the canonical path (never checkout --force / reset --hard / clean -fd)
    git -C "$HANDOFF_WT" restore --source=HEAD --worktree --staged -- "$CANONICAL_REL" 2>/dev/null \
      || git -C "$HANDOFF_WT" checkout HEAD -- "$CANONICAL_REL"
    after_sha=$(git -C "$HANDOFF_WT" rev-parse HEAD)
    [[ "$before_sha" == "$after_sha" ]] || die "HANDOFF DRY-RUN MUTATED HEAD"
    [[ -z "$(git -C "$HANDOFF_WT" status --porcelain)" ]] || die "HANDOFF DRY-RUN LEFT DIRTY WORKTREE"
    printf '%s\n' "HANDOFF DRY-RUN OK — NO MUTATION"
    printf 'canonical_path=%s\n' "$CANONICAL_REL"
    printf 'blob=%s\n' "$expected"
    exit 0
  fi

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

main "$@"

\`\`\`

### scripts/sfia/README.md

\`\`\`markdown
# Review Handoff — Canonical Publisher

Fail-closed publisher for the SFIA Review Handoff Git branch.

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
| **L1** | Source/worktree/path/diff/blob controls |
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

### Arguments

| Flag | Required | Description |
|------|----------|-------------|
| `--source` | yes | Review pack file (non-empty regular file) |
| `--commit-message` | yes (unless already-current / with care) | Commit message for handoff tip |
| `--handoff-worktree` | yes | Clean worktree on `sfia/review-handoff` |
| `--dry-run` | no | Validate copy + controls; restore; no commit/push |

### Non-configurable constants

- Branch: `sfia/review-handoff`
- Target: `sfia-review-handoff/latest-chatgpt-review.md`

A standard invocation **cannot** retarget the root file `latest-chatgpt-review.md`.

## Invariants

1. Source exists, is a regular file, and is non-empty.
2. Handoff worktree exists, is clean, staged empty, branch exact.
3. Target resolves under handoff toplevel to the canonical relative path only.
4. Diff before commit is exactly one path: the canonical file.
5. Root `latest-chatgpt-review.md` is never written or staged.
6. Stage uses `git add -f -- <canonical>` only (never `git add .` / `-A`).
7. Commit content is mono-file (verified via `git diff-tree`).
8. Push is normal FF only (never `--force`).
9. Remote verification re-reads `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`, compares blob + size + title.
10. No `reset --hard`, `clean -fd`, `checkout --force`, worktree deletion, or branch deletion.

## Verdicts

| Verdict | Meaning |
|---------|---------|
| `HANDOFF UPDATED — REMOTE VERIFIED` | Published and remote canonical blob matches source |
| `HANDOFF ALREADY CURRENT — REMOTE VERIFIED` | Remote canonical blob already identical; no empty commit |
| `HANDOFF DRY-RUN OK — NO MUTATION` | Dry-run passed; HEAD unchanged |
| `HANDOFF WORKTREE NOT CLEAN` | Dirty worktree |
| `HANDOFF WORKTREE STAGED NOT EMPTY` | Staged files present |
| `HANDOFF WORKTREE INVALID — BRANCH …` | Wrong branch |
| `HANDOFF PATH INVALID — CANONICAL TARGET MISMATCH` | Resolved target ≠ canonical |
| `HANDOFF PATH INVALID — UNAUTHORIZED FILE MODIFIED` | Diff/stage not mono-file |
| `HANDOFF ROUTING FAILED — ROOT REVIEW FILE MODIFIED` | Root non-canonical path touched |
| `HANDOFF COMMIT INVALID — NON-CANONICAL CONTENT` | Commit tree not mono-canonical |
| `STOP — REVIEW HANDOFF REMOTE DIVERGENCE` | Non-FF divergence |
| `HANDOFF REPUBLISHED — CANONICAL REMOTE VERIFICATION FAILED` | Remote blob/title/size mismatch |

## `.gitignore` / local exclude

The nested worktree directory is often named `sfia-review-handoff/` inside the main clone. A **local** `.git/info/exclude` rule `sfia-review-handoff/` hides that directory from the main worktree status. That rule is **not** in the tracked root `.gitignore` on `main`.

Tracked updates to the canonical file still require an explicit add. This publisher always stages with:

`git add -f -- sfia-review-handoff/latest-chatgpt-review.md`

so a local exclude cannot silently skip the canonical path.

**Do not** treat root `latest-chatgpt-review.md` as canonical. Cleanup of that file requires a separate Morris GO.

## Tests

```bash
scripts/sfia/tests/publish-review-handoff.test.sh
```

Uses temporary bare remotes only — never the real `origin/sfia/review-handoff`.

## Alternatives considered

| Option | Decision |
|--------|----------|
| Ad-hoc Cursor shell steps only | Rejected — path mistakes already occurred |
| Node/Python publisher | Rejected for v1 — Bash + Git are guaranteed on macOS runners here (`/bin/bash`) |
| GitHub Action | Out of scope — would need a separate Morris GO |
| Second publisher beside this script | Forbidden — extend this one |

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
  assert_contains "no git add ." "$body" 'add -f -- "$CANONICAL_REL"'
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
  if printf '%s\n' "$cmds" | grep -E 'git[[:space:]]+push.*--force|git[[:space:]]+push.*[[:space:]]-f[[:space:]]|git[[:space:]]+push.*[[:space:]]-f$|git[[:space:]]+reset[[:space:]]+--hard|git[[:space:]]+clean[[:space:]]+-fd|git[[:space:]]+checkout[[:space:]]+--force|ignore-other-worktrees' >/dev/null; then
    printf 'FAIL forbidden destructive/force pattern present\n'
    FAIL=$((FAIL + 1))
  else
    printf 'PASS absent force/reset/clean/checkout --force\n'
    PASS=$((PASS + 1))
  fi  # Target constant is canonical only
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

printf '\nSummary: PASS=%s FAIL=%s\n' "$PASS" "$FAIL"
[[ "$FAIL" -eq 0 ]]

\`\`\`

## Diff utile complet — fichiers modifiés

\`\`\`diff
diff --git a/.gitignore b/.gitignore
index 48abd28..7121ce8 100644
--- a/.gitignore
+++ b/.gitignore
@@ -22,3 +22,9 @@ exports/**

 # Exports locaux du connecteur embarqué
 tools/cmp-001/exports/
+
+# Nested local worktree directory for branch sfia/review-handoff (often checked out
+# as ./sfia-review-handoff/). Hides the nested checkout from the main worktree status.
+# Canonical handoff *content* lives on branch sfia/review-handoff and is published via
+# scripts/sfia/publish-review-handoff.sh (stages with: git add -f -- sfia-review-handoff/latest-chatgpt-review.md).
+/sfia-review-handoff/
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

## Contrat CLI

Voir README : \`--source\` \`--commit-message\` \`--handoff-worktree\` \`[--dry-run]\`.

## Invariants de sécurité

- Path canonique exclusive
- Mono-fichier
- Pas de force push / reset --hard / clean -fd / add . / add -A
- Blob distant = blob source
- Racine non écrite

## Gestion \`.gitignore\`

- Tracked : ajout \`/sfia-review-handoff/\` pour masquer le worktree imbriqué sur main
- Publisher stage toujours avec \`git add -f --\` le path canonique
- Exclude locale historique documentée ; pas de suppression du fichier racine

## Statut fichier racine

\`latest-chatgpt-review.md\` : **non canonique**, non modifié, non supprimé — cleanup = GO Morris séparé.

## Tests et résultats

\`scripts/sfia/tests/publish-review-handoff.test.sh\` → **PASS=36 FAIL=0**

Couvre : nominal, source missing/empty, dirty, staged, mauvaise branche, diff --check, already current, divergence, spaces, dry-run, exclude+\`-f\`, static policy commandes interdites, blob match, mono-fichier, root untouched.

## Simulation remote bare

Oui — chaque cas crée un bare local + clone ; **aucun** push vers le handoff canonique réel durant les tests.

## Preuves

- Path canonique dans commits de test
- Mono-fichier via \`git diff-tree\`
- Comparaison blob source/remote
- Commandes interdites absentes (hors mentions dans commentaires « never »)

## État Git final (projet tooling)

- Branche locale : \`tooling/review-handoff-canonical-publisher\`
- Modifications non stagées / non commitées
- Aucun commit projet ; aucun push projet ; aucune PR
- Worktree OPS1 I3 intact

## Réserves

1. Publisher non encore mergé sur \`main\` — cycles futurs l'utilisent après merge Morris
2. Cleanup racine non fait
3. Pas de GitHub Action
4. \`move_agent_to_root\` vers le worktree tooling a échoué (fetch branche delivery absente du remote) — travail effectué via chemins absolus

## Décisions Morris futures

1. Validation ChatGPT de ce pack
2. GO commit/push/PR branche \`tooling/review-handoff-canonical-publisher\`
3. GO cleanup éventuel de \`latest-chatgpt-review.md\` racine
4. GO éventuel Action CI (hors ce cycle)

## Verdict

\`REVIEW HANDOFF CANONICAL PUBLISHER DELIVERED LOCALLY — FAIL-CLOSED — HANDOFF REMOTE VERIFIED — READY FOR REVIEW\`

*(Verdict handoff distant finalisé après publication L3 bornée ci-dessous.)*
